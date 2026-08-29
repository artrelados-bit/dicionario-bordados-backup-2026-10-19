"""
Script gerador para os verbetes F-075 a F-087 do DIBE Artrelados.
"""
import json

def get_verbetes_f13():
    return [
      {
        "id": "f-075-filtro-curvatura-suavizacao-vetores-bezier",
        "code": "F-075",
        "letter": "F",
        "term": "Filtro de Curvatura e Suavização de Vetores Bézier (Bézier Curve Smoothing & Vector Node Decimation)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Programação de Bordado",
        "origin": "Do algoritmo de suavização de curvas desenvolvido pelo engenheiro francês Pierre Bézier para a indústria automobilística na década de 1960, adaptado à digitalização de matrizes.",
        "summary": "Ferramenta de software que remove nós vetoriais excessivos e ajusta as alças tangenciais de curvas, eliminando quebras abruptas na trajetória da agulha.",
        "definition": "O Filtro de Curvatura e Suavização de Vetores Bézier (Bézier Curve Smoothing & Node Optimization) é um algoritmo matemático de processamento vetorial que analisa as linhas de contorno e preenchimento de um desenho importado, filtrando nós redundantes (Node Decimation) e recalculando a curvatura por meio de equações polinomiais suaves. Quando uma imagem é vetorizada automaticamente, o software costuma gerar centenas de nós pontiagudos em distâncias minúsculas de 0.1 mm, o que causaria microparadas, acelerações desnecessárias no pantógrafo e quebra de linha. O filtro de curvatura converte esses segmentos poligonais em arcos contínuos e harmônicos de raio constante, garantindo costura fluida e perfeita definição das bordas.",
        "technicalDetails": "O algoritmo utiliza o método de aproximação por mínimos quadrados e a redução de nós de Ramer-Douglas-Peucker com tolerância angular ajustável entre 0.05 mm e 0.15 mm. Ele calcula o vetor tangente de primeira e segunda derivada (d²y/dx²) em cada nó da curva Bézier, ajustando o comprimento dos manípulos de controle para manter a continuidade de curvatura C² (Curvature Continuous). Isso reduz em até 60% o número de pontos de controle sem alterar a silhueta original do desenho.",
        "construction": [
          "Curvas polinomiais paramétricas de terceiro grau (Cubic Bézier Splines)",
          "Algoritmo de eliminação de nós redundantes (Node Decimation Filter)",
          "Alças tangenciais de inclinação simétrica e assimétrica",
          "Tolerância vetorial de interpolação milimétrica (0.05 a 0.12 mm)",
          "Conversão de nós de canto rígido em nós de arco suave"
        ],
        "howItWorks": [
          "1. O programador importa uma imagem rasterizada ou vetorizada automaticamente com excesso de nós serrilhados.",
          "2. Aplica o filtro de suavização Bézier com tolerância calibrada de 0.08 mm.",
          "3. O software analisa as oscilações e substitui dezenas de pequenos segmentos retos por curvas fluídas com apenas 2 a 3 nós estratégicos.",
          "4. Ao gerar os pontos de bordado, a agulha acompanha uma trajetória suave e contínua, sem vibrações no bastidor."
        ],
        "mainTypes": [
          "Suavização Automática Global (Global Curve Smoothing para matrizes completas)",
          "Suavização Pontual por Alças de Controle (Manual Node Spline Tuning para tipografia)",
          "Filtro de Redução de Nós com Preservação de Cantos Vivos (Corner-Preserving Decimation)"
        ],
        "characteristics": [
          "Contornos perfeitamente circulares e orgânicos sem aspecto facetado ou quebrado",
          "Costura muito mais rápida e silenciosa na máquina de bordar",
          "Redução drástica do tamanho do arquivo da matriz e alívio do processamento da máquina"
        ],
        "limitations": [
          "Tolerâncias de suavização muito altas (acima de 0.3 mm) podem arredondar cantos vivos propositais do logotipo",
          "Exige ajuste fino manual em detalhes tipográficos muito pequenos"
        ],
        "numberingSystem": [
          "Tolerância de Suavização Padrão: 0.05 mm a 0.10 mm",
          "Continuidade Geométrica: Classe C¹ e C²",
          "Ângulo Limite de Canto Vivo: 45° a 60°"
        ],
        "advantages": [
          "✔ Movimentação suave e macia do pantógrafo sem solavancos nas curvas",
          "✔ Redução de quebras de linha provocadas por micro-saltos de agulha",
          "✔ Bordas de satim e tatami com contornos nítidos e perfeitamente limpos"
        ],
        "commonErrors": [
          "❌ Deixar centenas de nós em uma curva simples (provoca barulho de matracamento na máquina)",
          "❌ Usar suavização excessiva e perder pontas de estrelas ou ângulos de fontes clássicas",
          "❌ Não alinhar as alças de nós suaves em linhas de preenchimento amplo"
        ],
        "voceSabia": "Quando você vê uma máquina de bordar trepidando e fazendo um ruído rápido de 'metralhadora' em uma curva, quase sempre o culpado não é a máquina, mas sim um desenho com nós vetoriais demais gerados por vetorização automática sem filtro Bézier!",
        "curiosidadeTecnica": "As curvas Bézier foram originalmente criadas para desenhar as carrocerias dos automóveis Renault e Peugeot. No bordado eletrônico, a mesma fórmula matemática garante que a linha de costura acompanhe a tensão superficial ideal do tecido.",
        "dicaArtrelados": "Sempre que vetorizar automaticamente um logotipo no Wilcom, aperte a tecla 'H' para entrar na edição de nós e selecione 'Suavizar Nós'. Transformar 50 nós serrilhados em apenas 4 nós de curva Bézier faz sua máquina bordar como seda!",
        "applications": [
          "Otimização de logotipos vetorizados a partir de fotos e arquivos PNG",
          "Digitalização de desenhos botânicos, pétalas florais e arabescos sinuosos",
          "Criação de fontes cursivas e monogramas de alto requinte",
          "Correção de cantos em brasões heráldicos e emblemas institucionais"
        ],
        "troubleshootingTips": [
          "Se a máquina desacelerar bruscamente em curvas, reduza a quantidade de nós do contorno usando o comando de simplificação vetorial.",
          "Se uma ponta afiada ficou arredondada após a suavização, altere o nó da ponta de 'Nó Suave' (amarelo) para 'Nó de Canto' (azul).",
          "Se o ponto cheio estiver torto em arcos circulares, alinhe as linhas de ângulo com a perpendicular da curva Bézier."
        ],
        "relatedTerms": [
          "Curvas Bézier",
          "Vetorização de Matrizes",
          "Nós de Controle (Vector Nodes)",
          "Ângulos de Ponto",
          "Pantógrafo"
        ],
        "tags": ["filtro-curvatura", "bezier", "suavizacao", "vetores", "programacao", "wilcom", "otimizacao"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Vector Processing and Node Optimization Manual. Sydney: Wilcom, 2023. TAJIMA GROUP. Advanced Path Smoothing in Commercial Digitizing. Nagoya: Tajima, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Vector Processing and Node Optimization Manual. Sydney: Wilcom, 2023.",
          "TAJIMA GROUP. Advanced Path Smoothing in Commercial Digitizing. Nagoya: Tajima, 2022.",
          "ARTRELADOS. Geometria Vetorial e Otimização de Trajetória Bézier no Bordado Computadorizado. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Importe um círculo desenhado à mão livre no seu software de bordado contendo mais de 40 nós. Borde uma metade com todos esses nós e a outra metade após aplicar o filtro de suavização Bézier com apenas 4 nós simétricos. Ouça o barulho da máquina durante a execução e sinta com o dedo a perfeição da borda suavizada!",
        "quickSummary": "O filtro de curvatura Bézier limpa o excesso de pontinhos do desenho no computador, fazendo as curvas ficarem lisinhas, a máquina bordar macia e a linha não quebrar.",
        "beginnerExplanation": "Sabe quando você desenha uma linha curva no computador e ela fica cheia de pontinhos quebrados parecendo uma escadinha? O filtro Bézier funciona como uma lixa mágica: ele tira todos os pontinhos que estão sobrando e transforma a linha em uma curva perfeitamente redonda e macia para a máquina bordar sem engasgar!",
        "recommendedSettings": {
          "speedPPM": "750 a 850 PPM",
          "needleType": "75/11 Universal ou Ponta Bola",
          "stabilizer": "Entretela Rasgável 50g ou Recorte 60g",
          "threadTension": "105 a 115gf",
          "density": "0.38 mm a 0.40 mm"
        }
      },
      {
        "id": "f-076-fechamento-automatico-lacunas-sobreposicao-dinamica",
        "code": "F-076",
        "letter": "F",
        "term": "Fechamento Automático de Lacunas e Sobreposição Dinâmica (Automatic Gap Closure & Overlap Tolerance)",
        "level": "Intermediário 🟡",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Programação de Bordado",
        "origin": "Desenvolvido pelos sistemas de CAD/CAM têxtil na década de 1990 para neutralizar a abertura de frestas brancas causadas pelo repuxo mecânico do tecido.",
        "summary": "Recurso inteligente de programação que estende automaticamente os limites de objetos adjacentes para evitar espaços vazios indesejados no bordado.",
        "definition": "O Fechamento Automático de Lacunas e Sobreposição Dinâmica (Automatic Gap Closure & Dynamic Overlap) é a função algorítmica de software de bordado responsável por detectar bordas de preenchimentos vizinhos que compartilham a mesma linha divisória e expandir automaticamente as margens em uma sobreposição calculada de 0.4 mm a 1.0 mm. Como a tensão dos pontos encolhe o tecido no sentido perpendicular à costura, dois objetos desenhados perfeitamente encostados no monitor do computador acabam se afastando durante a costura real na máquina, revelando o tecido de fundo. A sobreposição dinâmica fecha essas lacunas antes que ocorram, mantendo o encaixe impecável.",
        "technicalDetails": "O algoritmo calcula a direção do vetor de tensão de cada objeto (Push/Pull Vector Field). Se dois objetos possuem ângulos de ponto paralelos, a sobreposição é aumentada em 0.6 mm a 0.8 mm na direção perpendicular; se forem perpendiculares (90°), a sobreposição lateral é estendida em 0.4 mm. O recurso aplica costura de ancoragem adicional na zona de transição para impedir desfiamento.",
        "construction": [
          "Detector de adjacência vetorial (Topology Gap Detector)",
          "Expansão poligonal dinâmica com valor ajustável de sobreposição (Overlap Offset)",
          "Compensação direcional baseada no ângulo dos pontos",
          "Controle de densidade na zona de cruzamento para evitar acúmulo de linha",
          "Linha de amarração integrada no limite de sobreposição"
        ],
        "howItWorks": [
          "1. O programador desenha duas áreas coloridas que se tocam lado a lado (ex: o céu azul e uma montanha verde).",
          "2. Ativa o fechamento automático de lacunas com sobreposição de 0.6 mm.",
          "3. O software estende a borda do céu sob a montanha em 0.6 mm e reduz suavemente a densidade nessa faixa.",
          "4. Na máquina, o tecido sofre o repuxo natural, mas nenhuma fresta branca aparece entre o céu e a montanha."
        ],
        "mainTypes": [
          "Sobreposição Simétrica / Compartilhada (Shared Edge Overlap para objetos do mesmo nível)",
          "Sobreposição com Recuo sob Contorno (Under-Border Trapping para objetos cercados por ponto cheio)",
          "Fechamento Inteligente com Atenuação de Densidade (Feathered Gap Closure para degradês)"
        ],
        "characteristics": [
          "Eliminação total de frestas brancas e falhas de encontro entre cores",
          "Automação que economiza horas de ajuste manual de nós vetoriais",
          "Aspecto homogêneo e contínuo em bordados multicoloridos complexos"
        ],
        "limitations": [
          "Sobreposições exageradas (acima de 1.5 mm) podem criar degraus visíveis ou quebrar agulhas em tecidos grossos",
          "Exige atenção na ordem de bordado das cores para que a cor superior cubra a borda estendida"
        ],
        "numberingSystem": [
          "Sobreposição Padrão em Tecido Plano: 0.40 mm a 0.60 mm",
          "Sobreposição em Malhas e Tecidos Elásticos: 0.80 mm a 1.20 mm",
          "Tolerância de Detecção de Lacunas: 0.20 mm a 1.50 mm"
        ],
        "advantages": [
          "✔ Matrizes seguras que bordam perfeitamente em qualquer tipo de tecido sem abrir frestas",
          "✔ Redução de peças com defeito descartadas na produção do ateliê",
          "✔ Bordados com aspecto sólido e profissional em logotipos com múltiplas cores"
        ],
        "commonErrors": [
          "❌ Deixar os objetos desenhados exatamente encostados 'linha com linha' sem sobreposição",
          "❌ Não aumentar a sobreposição ao bordar sobre malhas de alta elasticidade (viscolycra/suplex)",
          "❌ Sobrepor cores claras por cima de cores escuras sem compensação (a cor escura de baixo transparece)"
        ],
        "voceSabia": "No design gráfico tradicional para papel ou tela, encostar duas cores na mesma linha funciona perfeitamente; no bordado, isso é um erro grave! A linha de bordar puxa o tecido com força mecânica real, agindo como um pequeno elástico que abre um buraco no meio!",
        "curiosidadeTecnica": "O algoritmo de fechamento dinâmico foi inspirado na técnica de 'Trapping' da indústria gráfica de offset e serigrafia, mas adaptado para considerar a elasticidade anisotrópica dos tecidos têxteis.",
        "dicaArtrelados": "Ao digitalizar matrizes com várias cores no Wilcom ou Hatch, sempre programe uma sobreposição de no mínimo 0.6 mm entre as cores e borde primeiro as cores de fundo mais claras e por último os contornos mais escuros!",
        "applications": [
          "Logotipos corporativos multicoloridos com blocos de cores adjacentes",
          "Desenhos infantis com personagens, animais e cenários",
          "Bordados florais com pétalas sobrepostas e folhas encostadas no caule",
          "Brasões heráldicos com divisões geométricas e faixas coloridas"
        ],
        "troubleshootingTips": [
          "Se apareceu uma fresta branca do tecido entre o preenchimento e o contorno, aumente a sobreposição para 0.8 mm nas propriedades do objeto.",
          "Se a sobreposição ficou com uma linha grossa e dura ao toque, reduza a densidade da camada inferior nos últimos 1 mm de borda.",
          "Se a cor de baixo estiver transparecendo sob a cor de cima, adicione uma camada de reforço tatami ralo no topo antes do ponto cheio."
        ],
        "relatedTerms": [
          "Trapping de Cores",
          "Compensação de Puxão",
          "Ordem de Bordado",
          "Preenchimento Tatami",
          "Ponto Cheio de Contorno"
        ],
        "tags": ["fechamento-lacunas", "sobreposicao", "trapping", "programacao", "wilcom", "repuxo", "precisao"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Managing Object Overlaps, Gaps and Color Trapping. Sydney: Wilcom, 2023. EMBIRD SUITE. Intelligent Stitch Overlap and Push-Pull Balancing. Bratislava: Embird, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Managing Object Overlaps, Gaps and Color Trapping. Sydney: Wilcom, 2023.",
          "EMBIRD SUITE. Intelligent Stitch Overlap and Push-Pull Balancing. Bratislava: Embird, 2022.",
          "ARTRELADOS. Engenharia de Encaixe de Matrizes: Sobreposição Dinâmica e Eliminação de Frestas. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Desenhe um quadrado vermelho ao lado de um quadrado amarelo no seu software. Borde a primeira versão com os dois quadrados apenas encostados no mesmo limite. Na segunda versão, ative o fechamento automático com sobreposição de 0.8 mm do amarelo entrando sob o vermelho. Borde as duas matrizes em uma malha de algodão e observe como a primeira abre uma fenda no meio e a segunda fica perfeita!",
        "quickSummary": "O fechamento de lacunas faz uma cor entrar um pouquinho embaixo da outra no desenho para o tecido não repuxar e não deixar buracos brancos no meio do bordado.",
        "beginnerExplanation": "Quando a máquina borda, a linha puxa o tecido para os lados. Se você colocar duas cores só encostadinhas na tela, na hora de bordar elas se separam e aparece o tecido no meio! Esse recurso faz uma cor invadir um milímetro por baixo da outra, garantindo que o desenho fique todinho fechadinho e lindo!",
        "recommendedSettings": {
          "speedPPM": "750 a 850 PPM",
          "needleType": "75/11 Ponta Bola ou Universal",
          "stabilizer": "Entretela Rasgável 60g ou Cutaway 80g",
          "threadTension": "105 a 115gf",
          "density": "Sobreposição de 0.6 mm a 0.8 mm"
        }
      },
      {
        "id": "f-077-fracao-passo-compensacao-fracionaria-pontos-tatami",
        "code": "F-077",
        "letter": "F",
        "term": "Fração de Passo e Compensação Fracionária em Pontos Tatami (Fractional Step & Sub-Pixel Tatami Pitch)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo feminino composto.",
        "category": "Programação de Bordado",
        "origin": "Da matemática de processamento digital de sinais e discretização de padrões geométricos aplicada aos algoritmos de ponto de esteira da Tajima e Wilcom.",
        "summary": "Parâmetro que calibra a fração de deslocamento entre linhas consecutivas de tatami, eliminando linhas diagonais fantasmas e padrões de moiré indesejados.",
        "definition": "A Fração de Passo e Compensação Fracionária em Pontos Tatami (Tatami Fractional Step & Pitch Calibration) é a variável matemática que define a razão de defasagem longitudinal dos pontos de penetração de agulha entre uma fileira de costura e a subsequente dentro de um bloco de preenchimento. Em um tatami padrão com comprimento de ponto de 4.0 mm, uma fração de passo clássica de 0.25 (1/4) faz com que a linha seguinte comece deslocada em 1.0 mm, criando a textura tradicional entrelaçada. A compensação fracionária permite modular essa fração (como 0.33, 0.41 ou frações áureas irracionais) para evitar a formação de linhas visuais diagonais indesejadas (Woodgrain Moiré / Linhas Fantasma) e distribuir as penetrações da agulha de maneira perfeitamente homogênea.",
        "technicalDetails": "A fração de passo f ∈ (0, 1) determina a coordenada de inserção Xi = X₀ + (i · f · L) mod L, onde L é o comprimento do ponto (3.8 a 4.5 mm) e i é o índice da fileira. O uso de frações redutíveis simples (como 0.50) produz padrões de blocos rígidos (Brick Pattern); frações de 0.25 produzem o efeito clássico de sarja (Twill); enquanto frações variáveis aleatórias (Random Step) desordenam as penetrações, eliminando linhas de corte e prevenindo perfurações alinhadas que poderiam cortar tecidos delicados.",
        "construction": [
          "Gerador paramétrico de padrão de penetração de agulha (Needle Penetration Pattern Engine)",
          "Fração de defasagem configurável (Step Fraction 0.10 a 0.90)",
          "Módulo de aleatoriedade fracionária (Random Step Jitter 5% a 25%)",
          "Controle de comprimento mínimo e máximo de ponto",
          "Calculador de dispersão de tensão superficial"
        ],
        "howItWorks": [
          "1. O programador seleciona uma área ampla de preenchimento tatami em um logotipo ou brasão.",
          "2. Observa na pré-visualização 3D a formação de linhas diagonais indesejadas que chamam mais atenção que o desenho.",
          "3. Ajusta a fração de passo de 0.25 para uma fração otimizada de 0.38 ou ativa o passo aleatório (Random Jitter).",
          "4. O software redistribui as picadas da agulha em posições desencontradas, gerando uma superfície perfeitamente lisa, fosca e uniforme."
        ],
        "mainTypes": [
          "Fração Padrão de Sarja (0.25 / 1/4 - Twill Weave clássico e resistente)",
          "Fração de Tijolo / Bloco (0.50 / 1/2 - Brick Wall para texturas arquitetônicas)",
          "Fração Áurea / Não-Repetitiva (0.382 / Golden Ratio para uniformidade total sem linhas visíveis)"
        ],
        "characteristics": [
          "Eliminação completa de reflexos ópticos indesejados e linhas diagonais falsas",
          "Distribuição equilibrada dos furos de agulha, protegendo tecidos finos contra rasgos",
          "Acabamento acetinado ultra suave em grandes áreas de bordado"
        ],
        "limitations": [
          "Exige compreensão dos princípios de tecelagem e ótica geométrica no software",
          "Passos aleatórios muito desordenados podem reduzir levemente o brilho da linha de poliéster"
        ],
        "numberingSystem": [
          "Comprimento do Ponto Tatami (L): 3.5 mm a 4.5 mm",
          "Frações Comuns: 0.25 (Sarja), 0.33 (Tesselação), 0.50 (Bloco)",
          "Espaçamento de Linhas (Densidade): 0.38 mm a 0.42 mm"
        ],
        "advantages": [
          "✔ Preenchimentos grandes que parecem veludo liso sem linhas quebradas",
          "✔ Redução do estresse mecânico sobre a trama do tecido",
          "✔ Controle artístico total sobre a textura e o brilho do bordado"
        ],
        "commonErrors": [
          "❌ Usar fração 0.50 em tecidos finos (alinha os furos e corta o tecido como picote de papel)",
          "❌ Não alterar a fração padrão quando surgem linhas diagonais evidentes no meio do desenho",
          "❌ Usar comprimento de ponto muito curto (menor que 2.5 mm) combinado com fração alta"
        ],
        "voceSabia": "A fração de passo 0.382 baseia-se no Número de Ouro da matemática (Proporção Áurea de Fibonacci). Ela distribui as picadas da agulha de uma forma tão perfeita que a mente humana não consegue enxergar nenhuma linha ou padrão repetitivo, apenas uma superfície suave!",
        "curiosidadeTecnica": "Quando duas fileiras de tatami têm penetrações alinhadas a menos de 0.3 mm uma da outra, cria-se o 'efeito zíper', que pode rasgar malhas finas sob tensão de lavagem. A compensação fracionária garante que nunca haja dois furos alinhados na mesma coordenada X.",
        "dicaArtrelados": "Se você estiver bordando um fundo grande e estiver vendo linhas diagonais esquisitas cruzando o desenho, vá nas propriedades do Tatami no seu programa e mude a fração de passo para 0.33 ou ative 'Passo Aleatório'. O preenchimento fica liso como pintura a óleo!",
        "applications": [
          "Grandes fundos e brasões bordados em jaquetas e roupões",
          "Bordados corporativos de alta fidelidade em tecidos de camisaria fina",
          "Texturas artísticas simulando madeira, concreto, água ou tecidos rústicos",
          "Fundos de bandeiras, estandartes religiosos e mantos bordados"
        ],
        "troubleshootingTips": [
          "Se o tecido estiver rasgando na linha divisória do tatami, altere a fração de passo de 0.50 para 0.25 ou adicione 15% de fator aleatório.",
          "Se o preenchimento tatami parecer opaco e sem brilho, volte a fração para 0.25 e aumente o comprimento de ponto para 4.2 mm.",
          "Se a agulha estiver perfurando muitas vezes no mesmo ponto nas bordas, ative o filtro de comprimento mínimo de ponto (0.8 mm)."
        ],
        "relatedTerms": [
          "Ponto Tatami",
          "Comprimento de Ponto",
          "Efeito Moiré",
          "Densidade de Preenchimento",
          "Ponto de Esteira"
        ],
        "tags": ["fracao-passo", "tatami", "textura", "programacao", "wilcom", "passo-fracionario", "moiré"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Advanced Stitch Effects: Tatami Stitch Pitch, Step Fractions and Partitions. Sydney: Wilcom, 2023. TAJIMA GROUP. Principles of Fill Stitch Texturing. Nagoya: Tajima, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Advanced Stitch Effects: Tatami Stitch Pitch, Step Fractions and Partitions. Sydney: Wilcom, 2023.",
          "TAJIMA GROUP. Principles of Fill Stitch Texturing. Nagoya: Tajima, 2022.",
          "ARTRELADOS. Micro-Geometria do Ponto Tatami: Frações de Passo e Texturização Óptica. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Crie três retângulos de 50 x 30 mm com ponto tatami no seu software. Configure o primeiro com fração 0.25 (Sarja), o segundo com fração 0.50 (Bloco) e o terceiro com fração 0.38 com passo aleatório. Borde os três lado a lado na mesma cor de linha e compare sob uma lâmpada como a luz reflete de maneira completamente diferente em cada um!",
        "quickSummary": "A fração de passo do tatami ajusta o desencontro dos pontinhos entre as linhas de costura para o bordado ficar perfeitamente liso e não formar linhas diagonais feias.",
        "beginnerExplanation": "Sabe quando você constrói uma parede de tijolos e os tijolos precisam ficar desencontrados para a parede ficar bonita e firme? O ponto tatami faz a mesma coisa com a linha! A fração de passo é a regulagem que define o quanto cada pontinho fica desencontrado do vizinho, deixando o bordado liso, firme e sem marcas!",
        "recommendedSettings": {
          "speedPPM": "750 a 900 PPM",
          "needleType": "75/11 Universal ou Ponta Bola",
          "stabilizer": "Entretela Rasgável 50g ou Recorte 60g",
          "threadTension": "105 a 115gf",
          "density": "0.38 mm a 0.42 mm com Fração 0.25 a 0.38"
        }
      },
      {
        "id": "f-078-fonte-digitalizada-ponto-cheio-compensacao-coluna",
        "code": "F-078",
        "letter": "F",
        "term": "Fonte Digitalizada em Ponto Cheio com Compensação de Coluna (Digitized Satin Fonts & Baseline Kerning)",
        "level": "Intermediário 🟡",
        "grammarClass": "Substantivo feminino composto.",
        "category": "Programação de Bordado",
        "origin": "Da evolução das matrizes de tipografia em cartões perfurados para as fontes de bordado nativas (ESA/BX) desenvolvidas por mestres tipógrafos da Pfaff e Wilcom.",
        "summary": "Fontes tipográficas criadas especificamente para bordado eletrônico com ângulos manuais de ponto cheio, reforços progressivos e espaçamento entre letras calibrado.",
        "definition": "As Fontes Digitalizadas em Ponto Cheio (Native Digitized Embroidery Fonts / Tipografia Programada em Satim) são alfabetos completos em que cada letra, número e caractere especial foi desenhado manualmente por um digitalizador profissional, respeitando a física da linha e a tensão do tecido. Diferente das fontes TrueType ou OpenType do Windows convertidas automaticamente (que geram cantos truncados, saltos excessivos e densidades irregulares), as fontes digitalizadas nativas possuem controle inteligente de compensação de puxão em cada haste, reforço automático de linha central, ângulos de satim que acompanham a caligrafia e kerning ajustado para que as letras não se sobreponham nem se afastem durante a costura.",
        "technicalDetails": "As hastes verticais recebem compensação de puxão positiva calibrada entre 0.25 mm e 0.45 mm, enquanto as travessas horizontais recebem compensação menor (0.15 mm) para neutralizar a deformação anisotrópica. As junções em T e curvas possuem divisão inteligente de cantos (Cap and Corner Stitching) com redução de densidade no vértice para evitar o empilhamento de pontos. O espaçamento de base (Kerning) é pré-programado para compensar a expansão lateral dos pontos cheios.",
        "construction": [
          "Contornos vetoriais com ângulos manuais de satim por haste",
          "Reforço automático de linha central (Center Walk) ou ziguezague proporcional",
          "Mecanismo de kerning e tracking ajustável milimetricamente",
          "Formato nativo de fonte de bordado (como arquivos .ESA ou .BX)",
          "Linha de amarração e corte automático de linha embutido em cada glifo"
        ],
        "howItWorks": [
          "1. O operador digita o nome do cliente no software de bordado escolhendo uma fonte nativa digitalizada (ex: Script Cursiva Nobre).",
          "2. O software redimensiona as letras mantendo a densidade de ponto cheio rigorosamente constante (0.38 mm).",
          "3. As junções entre letras cursivas se encaixam perfeitamente na linha de base com conexões contínuas sem cortes desnecessários.",
          "4. Na máquina, o nome é bordado com brilho radiante, pernas nítidas e leitura perfeita mesmo em tamanhos pequenos de 8 mm."
        ],
        "mainTypes": [
          "Fontes Cursivas Nobres / Script (Para enxovais de bebê, casamentos e jalecos médicos)",
          "Fontes Bastão / Sans-Serif (Para uniformes corporativos, etiquetas de segurança e fardamentos)",
          "Fontes Romanas Serifadas / Clássicas (Para brasões acadêmicos, toalhas de banho e hotelaria de luxo)"
        ],
        "characteristics": [
          "Legibilidade perfeita em tamanhos reduzidos (de 5 mm a 12 mm de altura)",
          "Letras com curvas cheias, brilho acetinado e bordas sem serrilhados",
          "Economia de tempo no ateliê: basta digitar o texto sem necessidade de redesenhar nós"
        ],
        "limitations": [
          "Cada fonte digitalizada possui uma faixa de tamanho recomendada (ex: 8 mm a 25 mm) e perde qualidade se for esticada além do limite",
          "Não possui a variedade infinita das fontes gráficas da internet"
        ],
        "numberingSystem": [
          "Altura Mínima Recomendada: 6.0 mm a 8.0 mm",
          "Densidade Padrão de Coluna: 0.36 mm a 0.40 mm",
          "Compensação de Coluna em Hastes: +0.30 mm"
        ],
        "advantages": [
          "✔ Nomes e monogramas bordados com rapidez, perfeição e sem erros de traçado",
          "✔ Redução de 80% nos cortes de linha entre letras através de conexões inteligentes",
          "✔ Acabamento premium que valoriza jalecos médicos, enxovais de noiva e uniformes"
        ],
        "commonErrors": [
          "❌ Usar conversão automática de fontes comuns do Windows sem ajustar as compensações e reforços",
          "❌ Reduzir uma fonte de 20 mm para 5 mm sem trocar para uma fonte de micro-texto (embola a linha)",
          "❌ Deixar o espaçamento entre letras muito apertado, fazendo as letras grudarem na costura"
        ],
        "voceSabia": "Muitas bordadeiras sofrem quando tentam bordar nomes pequenos em jalecos usando fontes automáticas do computador porque a máquina corta a linha a cada letrinha! Fontes digitalizadas de verdade bordam a palavra inteira de uma vez só, com conexões invisíveis e acabamento impecável!",
        "curiosidadeTecnica": "Nas fontes ESA profissionais, cada caractere contém fórmulas matemáticas vetoriais que reajustam o ângulo de cada ponto individualmente conforme o texto é curvado em arcos circulares ou ondas.",
        "dicaArtrelados": "Para bordar nomes em jalecos de médicos e enfermeiras com perfeição absoluta: use uma fonte digitalizada nativa com no mínimo 10 mm de altura, agulha fina 70/10 e entretela rasgável dupla. As letrinhas ficam parecendo uma joia brilhante!",
        "applications": [
          "Personalização de jalecos médicos, odontológicos e uniformes corporativos",
          "Nomes bordados em mantas de bebê, fraldinhas de boca e toalhas de banho",
          "Monogramas elegantes para camisas sociais sob medida e lenços",
          "Etiquetas de identificação militar, escolar e empresarial"
        ],
        "troubleshootingTips": [
          "Se as letras cursivas estão se sobrepondo e ficando grossas nas emendas, aumente o espaçamento entre caracteres (Kerning/Spacing) em 10%.",
          "Se os furinhos no meio das letras como 'e', 'a' e 'o' estão fechando, aumente a compensação de puxão e utilize agulha fina 65/9 ou 70/10.",
          "Se a linha estiver arrebentando nas letras maiúsculas, verifique se a fonte não está com pontos encavalados nos cantos e aplique divisão de cantos."
        ],
        "relatedTerms": [
          "Tipografia no Bordado",
          "Ponto Cheio (Satin Stitch)",
          "Compensação de Puxão",
          "Kerning e Espaçamento",
          "Micro-Texto"
        ],
        "tags": ["fonte-digitalizada", "tipografia", "ponto-cheio", "monogramas", "jalecos", "wilcom", "letras"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Embroidery Lettering and Native Keyboard Fonts Manual. Sydney: Wilcom, 2023. PFAFF INDUSTRIAL. Typography in Machine Embroidery: Satin Column Digitizing. Kaiserslautern: Pfaff, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Embroidery Lettering and Native Keyboard Fonts Manual. Sydney: Wilcom, 2023.",
          "PFAFF INDUSTRIAL. Typography in Machine Embroidery: Satin Column Digitizing. Kaiserslautern: Pfaff, 2022.",
          "ARTRELADOS. A Arte da Tipografia no Bordado Computadorizado: Fontes Nativas e Caligrafia Digital. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Abra seu programa de bordado e digite a palavra 'Artrelados' de duas maneiras: a primeira convertendo automaticamente uma fonte Arial comum do Windows, e a segunda usando uma fonte nativa digitalizada do próprio programa. Borde as duas palavras lado a lado em um tecido de piquet com 12 mm de altura e compare a nitidez, o brilho e a limpeza do avesso!",
        "quickSummary": "Fontes digitalizadas são letras criadas exclusivamente para bordado com pontos cheios e reforços perfeitos para nomes ficarem limpos, legíveis e brilhantes.",
        "beginnerExplanation": "Ao invés de tentar usar as letrinhas comuns do computador (que foram feitas para imprimir no papel e ficam tortas no bordado), as fontes digitalizadas foram desenhadas pensando na linha e no tecido. Quando você escreve um nome com elas, a máquina borda as letras lisinhas, gordinhas e fáceis de ler!",
        "recommendedSettings": {
          "speedPPM": "700 a 800 PPM",
          "needleType": "70/10 ou 75/11 Ponta Bola ou Universal",
          "stabilizer": "Entretela Rasgável 50g ou Recorte 60g",
          "threadTension": "100 a 110gf",
          "density": "0.38 mm a 0.40 mm"
        }
      },
      {
        "id": "f-079-fator-escala-proporcional-recalculo-automatico-densidade",
        "code": "F-079",
        "letter": "F",
        "term": "Fator de Escala Proporcional com Recálculo Automático de Densidade (Proportional Scaling & Auto-Density Recalibration)",
        "level": "Intermediário 🟡",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Programação de Bordado",
        "origin": "Desenvolvido pelos pioneiros da digitalização por objetos paramétricos (Object-Based Digitizing) para substituir a deformação destrutiva do redimensionamento ponto a ponto.",
        "summary": "Tecnologia que redimensiona uma matriz de bordado recalculando o número total de pontos para manter a densidade e a qualidade idênticas ao original.",
        "definition": "O Fator de Escala Proporcional com Recálculo Automático de Densidade (Object-Based Rescaling & Auto-Density Generation) é o recurso avançado que permite aumentar ou diminuir as dimensões físicas de um bordado (em porcentagem ou milímetros) sem alterar a distância entre as linhas de costura. Quando se amplia um arquivo de pontos simples (como um arquivo .DST ou .PES sem dados de contorno), a distância entre os pontos aumenta, deixando o bordado ralo e com o tecido aparecendo; quando se reduz, os pontos se espremem gerando acúmulo e quebra de agulhas. Com o recálculo paramétrico de densidade, o software recalcula a quantidade exata de pontos: se o desenho é ampliado em 50%, novos pontos são gerados mantendo o espaçamento perfeito de 0.40 mm em todas as áreas.",
        "technicalDetails": "O algoritmo recalcula a malha de preenchimento baseando-se nas equações de contorno fechado e no mapa de linhas de direção angular (Stitch Vector Field). Durante o redimensionamento, ele recalcula a densidade linear (D = N/L), filtra pontos que caem abaixo do limiar de micro-pontos (0.5 mm) e reajusta as larguras dos reforços (Underlay Inset) para que não transbordem as novas bordas do objeto.",
        "construction": [
          "Motor de processamento baseado em objetos paramétricos (EMB / ART / JAN)",
          "Interpolador vetorial de contornos e buracos internos",
          "Calculador proporcional de contagem de pontos (Dynamic Stitch Recalculator)",
          "Filtro de proteção para pontos curtos (Short Stitch Filter)",
          "Ajuste proporcional de margem de reforço e compensação de puxão"
        ],
        "howItWorks": [
          "1. O bordador abre a matriz original em formato editável no software (ex: um brasão de 10 cm com 15.000 pontos).",
          "2. Aplica um fator de escala de 150% para bordar nas costas de uma jaqueta (tamanho final de 15 cm).",
          "3. O software recalcula automaticamente a matriz, aumentando a contagem para 22.500 pontos com densidade rigorosamente preservada.",
          "4. O bordado fica denso, com cobertura perfeita e sem nenhuma área transparente."
        ],
        "mainTypes": [
          "Redimensionamento Paramétrico Baseado em Objetos (Object Rescaling com 100% de qualidade)",
          "Redimensionamento com Recálculo de Pontos Stitch-to-Stitch (Para arquivos prontos de máquina)",
          "Escala Não-Proporcional com Bloqueio de Razão de Aspecto (Anamorphic Scaling)"
        ],
        "characteristics": [
          "Flexibilidade total para adaptar o mesmo logotipo para peito, bolso, boné ou costas de jaqueta",
          "Preservação absoluta da densidade, reforços e amarrações originais",
          "Eliminação de bordados ralos ou excessivamente duros causados por redimensionamentos incorretos"
        ],
        "limitations": [
          "Arquivos de ponto puro (DST/EXP) aceitam variações seguras de no máximo ±15% a ±20% mesmo com recálculo",
          "Detalhes muito pequenos de um desenho grande podem virar micro-pontos se reduzidos além do limite"
        ],
        "numberingSystem": [
          "Faixa Segura em Arquivos Paramétricos (EMB/Hatch): 50% a 300%",
          "Faixa Segura em Arquivos de Ponto (DST/PES): ±15% a ±20%",
          "Densidade Alvo Constante: 0.38 mm a 0.42 mm"
        ],
        "advantages": [
          "✔ Liberdade para usar a mesma matriz em peças de tamanhos totalmente diferentes",
          "✔ Segurança contra quebras de agulha provocadas por excesso de pontos em reduções",
          "✔ Cobertura perfeita do tecido sem falhas nem transparências em ampliações"
        ],
        "commonErrors": [
          "❌ Aumentar o tamanho do desenho direto no painel da máquina de bordar (a máquina apenas estica os pontos, deixando o bordado ralo)",
          "❌ Reduzir uma matriz para 50% sem recalcular os pontos (cria uma placa grossa que fura o tecido e quebra agulhas)",
          "❌ Não verificar se as larguras de ponto cheio ficaram maiores que 9 mm ao ampliar o desenho"
        ],
        "voceSabia": "Quando você aumenta um bordado direto na telinha da máquina de costura, ela não cria pontos novos: ela apenas afasta os pontos que já existem! Por isso, o desenho fica parecendo uma cerca de arame rala com o tecido aparecendo no meio!",
        "curiosidadeTecnica": "O cálculo de densidade do software utiliza integração numérica de superfície sobre áreas poligonais complexas, garantindo que o volume de fio consumido por centímetro quadrado permaneça matematicamente constante.",
        "dicaArtrelados": "Sempre faça alterações de tamanho dentro do software de bordado no computador, nunca direto na máquina! No software, confirme se a opção 'Recalcular Pontos' está ativada antes de redimensionar. Sua matriz vai manter a mesma qualidade de uma matriz feita sob medida!",
        "applications": [
          "Adaptação de logotipos corporativos para bolso (8 cm) e costas de uniforme (25 cm)",
          "Redimensionamento de arabescos e monogramas para diferentes larguras de toalhas",
          "Ajuste de matrizes para encaixe perfeito em bastidores menores ou maiores",
          "Personalização de kits de enxoval com desenhos em tamanhos coordenados"
        ],
        "troubleshootingTips": [
          "Se o bordado ficou ralo após ser ampliado, abra a matriz no computador e ative o recálculo de densidade nas ferramentas de escala.",
          "Se a máquina começou a cortar linha e quebrar agulhas após uma redução, aplique o filtro de eliminação de pontos pequenos menores que 0.4 mm.",
          "Se os pontos cheios ficaram muito longos após a ampliação (acima de 9 mm), converta as colunas mais largas em ponto tatami ou ative a divisão automática de satim."
        ],
        "relatedTerms": [
          "Redimensionamento de Matriz",
          "Densidade de Ponto",
          "Divisão Automática de Satim",
          "Pontos Pequenos (Short Stitches)",
          "Formato de Arquivo de Bordado"
        ],
        "tags": ["fator-escala", "redimensionamento", "densidade", "recalculo", "programacao", "wilcom", "otimizacao"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Scaling and Transforming Designs: Object vs Stitch Data. Sydney: Wilcom, 2023. TAJIMA GROUP. Advanced Stitch Regeneration in Pattern Rescaling. Nagoya: Tajima, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Scaling and Transforming Designs: Object vs Stitch Data. Sydney: Wilcom, 2023.",
          "TAJIMA GROUP. Advanced Stitch Regeneration in Pattern Rescaling. Nagoya: Tajima, 2022.",
          "ARTRELADOS. Guia Definitivo de Redimensionamento e Recálculo de Densidade no Bordado Industrial. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Pegue um logotipo de 60 mm com 8.000 pontos. Crie duas ampliações para 120 mm: a primeira apenas esticando o arquivo de ponto (DST) sem recálculo (mantendo os 8.000 pontos), e a segunda no arquivo original com recálculo automático de densidade (gerando cerca de 22.000 pontos). Borde as duas em tecido escuro e veja a diferença brutal de cobertura!",
        "quickSummary": "O fator de escala com recálculo recalcula a quantidade de pontos ao aumentar ou diminuir um desenho, mantendo o bordado sempre fechadinho, bonito e sem estragar o tecido.",
        "beginnerExplanation": "Se você aumentar uma foto no computador, ela continua bonita; mas se aumentar um bordado sem recalcular, os pontos se afastam e o desenho fica cheio de buracos! Esse recurso faz o computador colocar mais pontos de linha quando você amplia e tirar pontos quando você diminui, deixando o bordado sempre perfeito!",
        "recommendedSettings": {
          "speedPPM": "750 a 850 PPM",
          "needleType": "75/11 Universal ou Ponta Bola",
          "stabilizer": "Adequado ao tecido",
          "threadTension": "105 a 115gf",
          "density": "0.38 mm a 0.42 mm constante"
        }
      },
      {
        "id": "f-080-filtro-anti-rugosidade-bordados-malhas-ultraelasticas",
        "code": "F-080",
        "letter": "F",
        "term": "Filtro Anti-Rugosidade para Bordados em Malhas Ultraelásticas (Anti-Puckering Filter & Stretch Fabric Compensation)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Programação de Bordado",
        "origin": "Desenvolvido pelos laboratórios de engenharia têxtil esportiva para viabilizar bordados computadorizados sobre tecidos de elastano, lycra e poliamida sem enrugamento.",
        "summary": "Conjunto de algoritmos de programação que ajusta reforços, densidades e compensações de puxão especificamente para tecidos com alta elasticidade bidirecional.",
        "definition": "O Filtro Anti-Rugosidade para Bordados em Malhas Ultraelásticas (Anti-Puckering Algorithm & Elastic Fabric Assistant) é o sistema integrado de regras de digitalização que neutraliza a deformação estrutural e o franzimento em tecidos como viscolycra, suplex, dry-fit e malhas caneladas. Como as malhas se esticam facilmente sob a tensão das agulhas e retraem após saírem do bastidor, desenhos comuns criam ondas e 'papos' no tecido ao redor do bordado. O filtro anti-rugosidade atua reduzindo a densidade de pontos em 15% a 20%, aplicando reforços de grade aberta (Grid Underlay) que ancoram a malha na entretela antes do preenchimento e elevando a compensação de puxão para até 0.60 mm.",
        "technicalDetails": "O filtro calcula o módulo de Young e o índice de deformação transversal da malha. Ele substitui reforços lineares pesados por reforços de tatami ralo em 45° com espaçamento de 2.5 mm, orienta os ângulos de ponto cheio para cruzarem a linha de elasticidade principal em ângulos oblíquos (entre 30° e 60°) e aplica alívio automático de tensão nas bordas periféricas do desenho.",
        "construction": [
          "Módulo de perfil têxtil para tecidos de alta elasticidade (Stretch Fabric Profile)",
          "Reforço de grade reticulada de ancoragem prévia (Mesh/Grid Underlay)",
          "Compensação de puxão ampliada (0.45 mm a 0.65 mm)",
          "Atenuação inteligente de densidade de preenchimento (0.42 mm a 0.46 mm)",
          "Costura de contorno com ponto corrido duplo e amarração elástica"
        ],
        "howItWorks": [
          "1. O digitalizador seleciona o perfil 'Malha Esportiva / Lycra' no software de bordado.",
          "2. O filtro anti-rugosidade reajusta automaticamente os parâmetros de toda a matriz: abre a densidade, amplia a compensação e adiciona a grade de reforço.",
          "3. Na máquina, o bastidor costura primeiro a grade leve, fixando o tecido elástico firmemente na entretela de recorte.",
          "4. O preenchimento e os contornos são bordados suavemente; ao retirar do bastidor, o tecido volta ao seu estado natural 100% liso e sem rugas."
        ],
        "mainTypes": [
          "Perfil para Malhas Finas de Alta Elasticidade (Lycra / Suplex / Roupas de Ginástica)",
          "Perfil para Malha Piquet e Polos Corporativas (Puckering-Free Corporate Piqué)",
          "Perfil para Tecidos Finos e Escorregadios (Seda, Cetim e Microfibra de Poliéster)"
        ],
        "characteristics": [
          "Eliminação total do efeito de 'boca de sino' e franzimento ao redor do bordado",
          "Bordado maleável e macio que acompanha o movimento do corpo sem ficar duro",
          "Preservação da elasticidade e do caimento natural da roupa"
        ],
        "limitations": [
          "Deve sempre ser acompanhado do uso de entretelas adequadas (Cutaway / Recorte)",
          "O tecido nunca deve ser esticado excessivamente ao ser colocado no bastidor"
        ],
        "numberingSystem": [
          "Densidade Recomendada em Malhas: 0.42 mm a 0.48 mm",
          "Compensação de Puxão: 0.45 mm a 0.65 mm",
          "Espaçamento do Reforço de Grade: 2.0 mm a 3.0 mm"
        ],
        "advantages": [
          "✔ Uniformes de academia e roupas esportivas com logotipos perfeitamente planos",
          "✔ Fim definitivo do retrabalho e peças perdidas por enrugamento no ateliê",
          "✔ Toque suave e confortável no contato direto com o corpo"
        ],
        "commonErrors": [
          "❌ Usar densidade pesada de tecido plano (0.35 mm) em camisetas de malha fina",
          "❌ Esticar a camiseta ao colocar no bastidor (quando solta do bastidor, ela encolhe e enruga tudo)",
          "❌ Usar entretela rasgável fraca ao invés de entretela de recorte de malha (Cutaway)"
        ],
        "voceSabia": "O maior erro de quem borda malha é puxar o tecido no bastidor até ficar esticado como um tambor. O segredo profissional é pousar a malha no bastidor de forma relaxada, deixando a entretela de recorte fazer todo o trabalho de sustentação!",
        "curiosidadeTecnica": "O franzimento têxtil (puckering) ocorre porque a linha superior, sob tensão mecânica, encurta após o término da costura. Se a matriz tiver pontos demais, a contração combinada de milhares de pontos supera a resistência elástica da malha, criando as rugas.",
        "dicaArtrelados": "Ao bordar camisetas dry-fit ou malhas finas, use entretela de recorte (Cutaway) no avesso, agulha fina ponta bola 70/10 SES e no software aumente a compensação de puxão para 0.50 mm. Seu bordado vai ficar lisinho como uma estampa!",
        "applications": [
          "Uniformes de academia, camisetas de ciclismo, biquínis e roupas de banho",
          "Camisetas promocionais em malha fria (PV) e 100% algodão penteado",
          "Moletons leves, agasalhos de tactel e peças esportivas em dry-fit",
          "Bodies e macacões de bebê em suedine e malha canelada"
        ],
        "troubleshootingTips": [
          "Se a malha ficou toda enrugada ao redor do bordado, abra a densidade da matriz para 0.44 mm e substitua a entretela rasgável por Cutaway de 80g.",
          "Se o contorno ficou torto e fora do preenchimento, adicione um reforço de grade (Grid Underlay) e aumente a sobreposição para 0.8 mm.",
          "Se a agulha estiver cortando os furinhos da malha, troque imediatamente para agulha Ponta Bola Fina (70/10 SES)."
        ],
        "relatedTerms": [
          "Franzimento (Puckering)",
          "Entretela de Recorte (Cutaway)",
          "Compensação de Puxão",
          "Agulha Ponta Bola (SES)",
          "Malha Dry-Fit"
        ],
        "tags": ["anti-rugosidade", "malhas", "elasticidade", "puckering", "dry-fit", "programacao", "wilcom"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Digitizing for Knits, Performance Fabrics and Stretch Textiles. Sydney: Wilcom, 2023. GUNOLD GMBH. Eliminating Puckering in Commercial Embroidery. Stockstadt: Gunold, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Digitizing for Knits, Performance Fabrics and Stretch Textiles. Sydney: Wilcom, 2023.",
          "GUNOLD GMBH. Eliminating Puckering in Commercial Embroidery. Stockstadt: Gunold, 2022.",
          "ARTRELADOS. Controle de Franzimento e Estabilidade Têxtil em Malhas Ultraelásticas. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Pegue um retalho de malha de camiseta fina. Borde um círculo de 50 mm com preenchimento tatami tradicional de tecido plano (densidade 0.36 mm e reforço simples de borda). Ao lado, borde o mesmo círculo com o filtro anti-rugosidade ativado (densidade 0.44 mm, reforço de grade e compensação de 0.50 mm) usando entretela de recorte. Retire do bastidor e veja como o primeiro vira uma cuia enrugada e o segundo fica perfeitamente liso!",
        "quickSummary": "O filtro anti-rugosidade ajusta a matriz para bordar em tecidos que esticam (como lycra e malha), evitando que o tecido fique franzido e enrugado ao redor do bordado.",
        "beginnerExplanation": "Sabe quando você borda uma camiseta e em volta do desenho o tecido fica todo enrugado e repuxado parecendo uma bexiga murcha? O filtro anti-rugosidade resolve isso tirando o excesso de linha e colocando uma base especial para que a malha continue lisinha e confortável!",
        "recommendedSettings": {
          "speedPPM": "700 a 800 PPM",
          "needleType": "70/10 ou 75/11 Ponta Bola (SES)",
          "stabilizer": "Entretela de Recorte (Cutaway) 80g no avesso",
          "threadTension": "100 a 110gf",
          "density": "0.42 mm a 0.46 mm com Compensação de 0.50 mm"
        }
      },
      {
        "id": "f-081-fluxo-sequenciamento-otimizado-proximidade-espacial",
        "code": "F-081",
        "letter": "F",
        "term": "Fluxo de Sequenciamento Otimizado por Proximidade Espacial (Spatial Proximity Sequencing & Travel Minimization)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Programação de Bordado",
        "origin": "Da teoria dos grafos e do problema do caixeiro-viajante (Traveling Salesperson Problem) aplicada à computação de caminhos ótimos para máquinas industriais CNC.",
        "summary": "Algoritmo de roteamento que organiza a ordem de costura dos objetos pela menor distância espacial, eliminando saltos longos e cortes desnecessários.",
        "definition": "O Fluxo de Sequenciamento Otimizado por Proximidade Espacial (Spatial Proximity Pathfinding & Sequence Optimization) é o módulo de inteligência computacional que analisa todos os elementos de uma mesma cor em uma matriz de bordado e calcula a ordem de execução mais eficiente, conectando os objetos vizinhos através de pontos corridos de viagem camuflados (Travel Runs) ou minimizando o deslocamento do pantógrafo em saltos (Jump Stitches). Em matrizes complexas com dezenas de pequenos elementos espalhados, um sequenciamento desordenado faz a máquina cruzar o bastidor de um lado para o outro repetidamente, aumentando o tempo de produção em mais de 35% e gerando dezenas de arremates que podem se soltar.",
        "technicalDetails": "O algoritmo constrói uma árvore geradora mínima (Minimum Spanning Tree) baseada na distância euclidiana entre os pontos de saída (Exit Points) e pontos de entrada (Entry Points) de cada objeto. Ele reorienta a direção de costura interna (Invert Stitch Direction) dos objetos para que o ponto final de um elemento fique alinhado ao ponto inicial do elemento seguinte, respeitando as regras de expansão do tecido (do centro para fora).",
        "construction": [
          "Otimizador de ordem de costura baseado em grafos (Shortest Path Heuristics)",
          "Alinhador automático de ponto de entrada e saída (Auto Entry/Exit Point Alignment)",
          "Gerador de caminhos de viagem camuflados sob áreas vizinhas (Under-Cover Travel Runs)",
          "Filtro de proteção contra distorção têxtil (Center-Out Priority Shield)",
          "Eliminador de cortes de linha redundantes"
        ],
        "howItWorks": [
          "1. O programador finaliza a digitalização de uma matriz com centenas de estrelas e detalhes da mesma cor.",
          "2. Executa a ferramenta de sequenciamento inteligente por proximidade espacial.",
          "3. O software reordena a sequência de costura para que a máquina borde estrela por estrela em cadeia contínua e suave.",
          "4. O tempo de execução na máquina cai de 18 minutos para apenas 11 minutos, com um avesso incrivelmente limpo."
        ],
        "mainTypes": [
          "Sequenciamento por Proximidade com Prioridade Centro-Bordas (Para evitar bolhas de tecido)",
          "Sequenciamento em Cadeia Contínua / Ramificação (Branching para arabescos e monogramas)",
          "Otimização Global de Cores Agrupadas (Color Block Travel Minimization)"
        ],
        "characteristics": [
          "Redução drástica do tempo de ciclo de produção em máquinas industriais",
          "Avesso limpo com o mínimo absoluto de nós e linhas soltas",
          "Menor desgaste mecânico dos motores de passo, correias e mecanismo de corte"
        ],
        "limitations": [
          "Não deve sobrepor a regra fundamental de bordar do centro para as extremidades em grandes áreas",
          "Exige revisão visual para garantir que linhas de viagem não fiquem visíveis sobre o tecido livre"
        ],
        "numberingSystem": [
          "Economia Média de Tempo de Ciclo: 20% a 40%",
          "Redução de Cortes de Linha: até 70%",
          "Comprimento Máximo de Viagem Oculta: 8.0 mm a 12.0 mm"
        ],
        "advantages": [
          "✔ Produção mais rápida e lucrativa em grandes encomendas de bordado",
          "✔ Máquina operando em fluxo suave e contínuo sem paradas bruscas",
          "✔ Menor risco de quebra de agulhas e perda de sincronismo de corte"
        ],
        "commonErrors": [
          "❌ Deixar a máquina pular aleatoriamente de uma ponta a outra do bastidor a cada objeto",
          "❌ Passar linhas de viagem por cima do tecido aberto sem que fiquem cobertas por bordados posteriores",
          "❌ Sequenciar objetos das bordas para o centro, aprisionando uma bolha de tecido enrugado no meio"
        ],
        "voceSabia": "Em uma confecção produzindo 1.000 camisas por dia, otimizar o sequenciamento de uma matriz para economizar apenas 2 minutos por peça resulta em mais de 33 horas de máquina economizadas a cada lote!",
        "curiosidadeTecnica": "O cálculo da rota ótima de bordado resolve uma variação NP-difícil do clássico problema do caixeiro-viajante, utilizando algoritmos genéticos e heurísticas de recozimento simulado (Simulated Annealing).",
        "dicaArtrelados": "Ao terminar de programar uma matriz no Wilcom, selecione todos os objetos da mesma cor e use o recurso 'Ramificação' (Branching) ou 'Re-ordenar por Proximidade'. O programa cria um caminho perfeito sem você precisar cortar a linha quase nenhuma vez!",
        "applications": [
          "Bordados corporativos de alta tiragem (bonés, uniformes, crachás)",
          "Arabescos complexos, rendas guipir e monogramas florais entrelaçados",
          "Grandes matrizes de jaquetas com muitos detalhes pequenos e textos",
          "Bordados automotivos e de segurança com exigência de avesso impecável"
        ],
        "troubleshootingTips": [
          "Se a máquina estiver fazendo muitos cortes entre letrinhas próximas, use a ferramenta de ramificação (Branching) para unir os elementos com pontos de viagem embutidos.",
          "Se o tecido formou uma dobra no centro do bordado, reordene a matriz para costurar obrigatoriamente de dentro para fora.",
          "Se uma linha de viagem ficou aparente no tecido, force um corte de linha manual (Trim) antes daquele objeto específico."
        ],
        "relatedTerms": [
          "Ramificação (Branching)",
          "Ordem de Bordado (Sequence)",
          "Salto de Ponto (Jump Stitch)",
          "Corte de Linha Automático (Trim)",
          "Pontos de Entrada e Saída"
        ],
        "tags": ["sequenciamento", "proximidade-espacial", "otimizacao", "branching", "tempo-de-producao", "wilcom", "eficiencia"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Advanced Pathing, Branching and Sequence Optimization. Sydney: Wilcom, 2023. TAJIMA GROUP. Travel Minimization Algorithms in High-Speed Embroidery. Nagoya: Tajima, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Advanced Pathing, Branching and Sequence Optimization. Sydney: Wilcom, 2023.",
          "TAJIMA GROUP. Travel Minimization Algorithms in High-Speed Embroidery. Nagoya: Tajima, 2022.",
          "ARTRELADOS. Teoria dos Grafos Aplicada à Otimização de Trajetória no Bordado Computadorizado. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Pegue um desenho com 20 bolinhas espalhadas. Digitalize uma versão clicando nas bolinhas de forma totalmente aleatória (deixando a máquina saltar e cortar a linha em cada uma). Na segunda versão, aplique a ordenação por proximidade espacial. Rode o simulador do software e veja a diferença de tempo e de movimentos desnecessários do bastidor!",
        "quickSummary": "O sequenciamento por proximidade organiza a ordem do bordado para a máquina costurar os elementos que estão perto uns dos outros, bordando mais rápido e cortando menos linha.",
        "beginnerExplanation": "Imagine que você precisa visitar 10 casas na sua cidade: você não vai na primeira, atravessa a cidade para ir na segunda e volta tudo para a terceira! Você visita as casas vizinhas em ordem. Esse recurso faz a máquina fazer a mesma coisa com os pontinhos do desenho: ela borda tudo que está pertinho sem ficar correndo de um lado para o outro!",
        "recommendedSettings": {
          "speedPPM": "750 a 900 PPM",
          "needleType": "Padrão",
          "stabilizer": "Padrão",
          "threadTension": "Padrão",
          "density": "Padrão"
        }
      },
      {
        "id": "f-082-fatiamento-objeto-linhas-quebra-divisao-angular",
        "code": "F-082",
        "letter": "F",
        "term": "Fatiamento de Objeto com Linhas de Quebra e Divisão Angular (Object Slicing & Complex Shape Angle Splitting)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Programação de Bordado",
        "origin": "Desenvolvido para solucionar o problema de perda de fluidez caligráfica em formatos geométricos complexos, anéis entrelaçados e letras com cruzamento de hastes.",
        "summary": "Técnica de digitalização que divide formas vetoriais complexas em segmentos menores com ângulos de ponto independentes, mantendo a direção natural da costura.",
        "definition": "O Fatiamento de Objeto com Linhas de Quebra e Divisão Angular (Object Slicing & Sub-Path Partitioning) é o processo técnico de cortar uma figura geométrica ampla ou contínua (como uma letra 'O', um anel entrelaçado, uma fita em curva ou uma ferradura) em seções anatômicas separadas por meio de linhas de corte virtuais. Quando um objeto curvo fechado é preenchido com ponto cheio sem fatiamento, o software pode forçar ângulos de costura antinaturais que geram pontos excessivamente longos ou acúmulo de linha nos cantos internos. O fatiamento inteligente divide o objeto em blocos coordenados, permitindo que os pontos acompanhem com precisão a curvatura da forma e se unam suavemente sem emendas visíveis.",
        "technicalDetails": "As linhas de quebra (Breaklines / Slice Lines) devem ser traçadas perpendicularmente ao eixo central da forma ou em bissetriz nos cantos angulares. Nas linhas de corte, o software aplica uma sobreposição milimétrica escalonada (Feathered Overlap / Interlocking Joint) com dentes de 0.5 mm a 1.0 mm intercalados, impedindo a formação de fendas ou linhas de emenda rígidas na superfície bordada.",
        "construction": [
          "Ferramenta de faca vetorial / fatiamento de objetos (Slice / Knife Tool)",
          "Linhas de quebra anatômicas com posicionamento em bissetriz",
          "Sobreposição intercalada de bordas (Interlocking Stitches)",
          "Definição de linhas de ângulo de ponto individuais para cada fatia",
          "Continuidade de reforço de linha central através das junções"
        ],
        "howItWorks": [
          "1. O programador desenha uma letra 'S' ou um círculo largo em formato de anel.",
          "2. Ao invés de tentar preencher tudo com uma única direção de ponto forçada, traça linhas de corte nas curvas de transição.",
          "3. Cada fatia recebe seus próprios ângulos de satim perfeitos que giram harmonicamente com a forma.",
          "4. O software une as fatias com pontos intercalados, criando uma peça única, uniforme e com brilho perfeito em 360°."
        ],
        "mainTypes": [
          "Fatiamento Radial (Para anéis, coroas, anéis olímpicos e círculos concêntricos)",
          "Fatiamento em Bissetriz de Cantos Vivos (Mitered Corner Splitting para molduras e faixas)",
          "Fatiamento Caligráfico com Sobreposição Natural (Para letras cursivas e nós celtas)"
        ],
        "characteristics": [
          "Ângulos de ponto com fluxo perfeito e reflexo de luz impecável em todas as direções",
          "Eliminação de pontos excessivamente longos (maiores que 9 mm) que ficariam frouxos",
          "Costura suave sem nós nem travamentos em cantos fechados"
        ],
        "limitations": [
          "Exige conhecimento técnico apurado para posicionar as linhas de corte nos locais corretos",
          "Cortes mal posicionados podem criar emendas perceptíveis se a sobreposição for insuficiente"
        ],
        "numberingSystem": [
          "Sobreposição Intercalada na Junção: 0.60 mm a 1.00 mm",
          "Ângulo de Corte de Canto Vivo: 45° (Bissetriz)",
          "Comprimento Máximo de Satim Preservado: < 8.0 mm"
        ],
        "advantages": [
          "✔ Desenhos curvos e anéis bordados com acabamento de alta alfaiataria",
          "✔ Reflexo uniforme da luz sobre as fibras da linha em todas as curvas",
          "✔ Estrutura mecânica perfeita sem deformar o tecido nos vértices"
        ],
        "commonErrors": [
          "❌ Fazer o corte em linha reta simples sem ativar a sobreposição intercalada (fica uma fenda aberta na emenda)",
          "❌ Não fatiar anéis fechados, forçando pontos na diagonal que deformam o círculo",
          "❌ Cortar no meio de áreas retas visíveis ao invés de aproveitar as curvas anatômicas"
        ],
        "voceSabia": "Ao bordar anéis entrelaçados (como os anéis dos Jogos Olímpicos), o segredo para fazer uma fita parecer passar por cima e por baixo da outra é exatamente o fatiamento dos objetos nos pontos de cruzamento com sombras intercaladas!",
        "curiosidadeTecnica": "O fatiamento com sobreposição dentada utiliza funções de interpolação estocástica para alternar a terminação dos pontos em distâncias variáveis, enganando o olho humano através da difração da luz sobre os filamentos de poliéster.",
        "dicaArtrelados": "Ao digitalizar letras redondas como 'O', 'C' e 'Q' ou molduras quadradas, use a ferramenta de fatiar para cortar os cantos a 45 graus. O ponto cheio gira suavemente e a letra fica parecendo uma joia entalhada!",
        "applications": [
          "Monogramas nobres com letras circulares e cursivas entrelaçadas",
          "Nós celtas, mandalas, coroas de louros e anéis olímpicos",
          "Molduras decorativas de brasões com cantos chanfrados em 45°",
          "Logotipos modernos com fitas tridimensionais e faixas contínuas"
        ],
        "troubleshootingTips": [
          "Se a emenda entre duas fatias ficou visível com uma linha funda, ative a opção 'Bordas Intercaladas' (Jagged/Interlocking Edge) no ponto de corte.",
          "Se o ponto cheio ficou comprido demais na curva externa, adicione uma linha de ângulo intermediária ou fatie a curva em dois segmentos.",
          "Se a máquina cortou a linha no meio do anel fatiado, una o sequenciamento das fatias com pontos de viagem embutidos."
        ],
        "relatedTerms": [
          "Divisão de Cantos (Corner Splitting)",
          "Ângulos de Ponto (Stitch Angles)",
          "Faca de Vetorização",
          "Ponto Cheio (Satin Stitch)",
          "Sobreposição Intercalada"
        ],
        "tags": ["fatiamento", "divisao-angular", "linhas-de-quebra", "curvas-complexas", "programacao", "wilcom", "alta-precisao"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Splitting Complex Shapes, Slicing and Corner Stitching. Sydney: Wilcom, 2023. TAJIMA GROUP. Segmented Satin Stitching and Mitered Joins. Nagoya: Tajima, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Splitting Complex Shapes, Slicing and Corner Stitching. Sydney: Wilcom, 2023.",
          "TAJIMA GROUP. Segmented Satin Stitching and Mitered Joins. Nagoya: Tajima, 2022.",
          "ARTRELADOS. Geometria de Fatiamento e Controle de Fluxo Angular em Matrizes Complexas. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Desenhe um quadrado de 40 x 40 mm com uma moldura de 6 mm de largura em ponto cheio. Digitalize a primeira versão com o ponto correndo contínuo sem corte nos cantos. Na segunda versão, fatie os quatro cantos em ângulos de 45° (como uma moldura de quadro de madeira). Borde as duas e compare como os cantos da segunda versão são infinitamente mais elegantes e planos!",
        "quickSummary": "O fatiamento corta formas curvas e anéis em pedaços menores para que os pontos cheios acompanhem a curva certinho, sem ficar tortos nem repuxar o tecido.",
        "beginnerExplanation": "Imagine que você está colocando tábuas de madeira para fazer uma moldura de quadro: nos cantos, você corta a madeira a 45 graus para elas se encaixarem perfeitamente, certo? O fatiamento faz a mesma coisa com a linha no programa de bordado, cortando os cantos para que o bordado faça a curva com perfeição e sem embolar linha!",
        "recommendedSettings": {
          "speedPPM": "750 a 850 PPM",
          "needleType": "75/11 Universal ou Ponta Bola",
          "stabilizer": "Entretela Rasgável 60g",
          "threadTension": "105 a 115gf",
          "density": "0.38 mm a 0.40 mm com Sobreposição de 0.8 mm"
        }
      },
      {
        "id": "f-083-efeito-falso-relevo-sombreamento-meio-tom",
        "code": "F-083",
        "letter": "F",
        "term": "Efeito Falso Relevo com Sombreamento em Meio-Tom (Faux 3D Shading & Halftone Illusion Embroidery)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Pontos Básicos & Decorativos",
        "origin": "Das técnicas de claro-escuro (Chiaroscuro) da pintura renascentista adaptadas à densidade variável de pontos no bordado computadorizado.",
        "summary": "Técnica artística de programação que cria uma ilusão óptica de volume tridimensional e profundidade usando apenas linhas planas e gradientes de densidade.",
        "definition": "O Efeito Falso Relevo com Sombreamento em Meio-Tom (Faux 3D Shading / Trompe-l'œil Embroidery) é o método avançado de digitalização que engana a percepção visual humana, fazendo um bordado 100% plano parecer uma escultura tridimensional saliente com curvas, chanfros e luzes refletidas. A técnica é construída pela sobreposição inteligente de três camadas: uma base de sombra em tons escuros com pontos de densidade progressiva, um corpo central na cor predominante com ângulos de ponto orientados na direção da curvatura aparente, e pontos de brilho máximo (Highlights) em fios claros ou brancos concentrados nas cristas de iluminação.",
        "technicalDetails": "A ilusão de volume baseia-se na modulação da densidade de meio-tom (Halftone Stitch Gradient), variando o espaçamento entre 0.35 mm (área de sombra densa) e 1.20 mm (zona de transição difusa). Os ângulos dos pontos de topo são orientados a 45° em relação aos pontos de sombra subjacentes, gerando difração de luz sobre as fibras trilobais de poliéster que intensifica o contraste entre luz e sombra.",
        "construction": [
          "Camada 1: Sombra projetada e sombra própria em tons escuros (tatami aberto 0.9 mm)",
          "Camada 2: Cor base intermediária com ângulos anatômicos de relevo",
          "Camada 3: Pontos de luz especular e reflexo de brilho (ponto cheio nobre 0.36 mm)",
          "Gradiente de densidade contínuo (Feather / Accordion Stitch)",
          "Paleta harmônica de 3 a 5 tons da mesma cor (Degradê Tonal)"
        ],
        "howItWorks": [
          "1. O desenhista estuda a posição da fonte de luz imaginária no logotipo (ex: luz vindo do canto superior esquerdo).",
          "2. Programa as bordas inferiores e direitas com linhas em tons mais escuros simulando sombras projetadas.",
          "3. Programa o corpo da letra com gradiente de cor e borda superior com linha branca ou prata simulando o reflexo da luz.",
          "4. Na máquina, o bordado é costurado plano, mas a pessoa que olha enxerga uma letra metálica gordinha saltando do tecido."
        ],
        "mainTypes": [
          "Falso Relevo Metálico / Cromado (Chrome & Gold Ingot Effect para marcas de luxo)",
          "Falso Relevo Esférico / Botão Abaulado (Domed 3D Illusion para esferas e botões)",
          "Falso Relevo Chanfrado / Lapidado (Chiseled Bevel Effect para letras corporativas)"
        ],
        "characteristics": [
          "Impacto visual de alto relevo sem a rigidez ou a fragilidade da espuma de EVA",
          "Bordado 100% flexível, macio ao toque e extremamente durável em lavagens",
          "Visual hiper-realista que encanta clientes e valoriza a peça"
        ],
        "limitations": [
          "Exige trocas de cores coordenadas de linha na máquina",
          "Requer digitalização cuidadosa e sensibilidade artística para dosar as sombras"
        ],
        "numberingSystem": [
          "Tons de Linha Necessários: 3 a 5 variações da mesma cor",
          "Espaçamento de Gradiente de Sombra: 0.40 mm a 1.20 mm",
          "Ângulo de Luz Padrão: 135° (Superior Esquerdo)"
        ],
        "advantages": [
          "✔ Efeito tridimensional espetacular que pode ser lavado e passado a ferro sem estragar",
          "✔ Não solta pedacinhos de espuma com o tempo (ao contrário do bordado 3D em EVA)",
          "✔ Agregação de altíssimo valor percebido em uniformes executivos e jaquetas"
        ],
        "commonErrors": [
          "❌ Usar preto puro para fazer sombra em cores vivas (cria um aspecto sujo ao invés de sombra natural)",
          "❌ Posicionar sombras em direções opostas no mesmo desenho (confunde o cérebro e destrói o efeito 3D)",
          "❌ Fazer a transição de cores sem esfumado, deixando faixas duras e marcadas"
        ],
        "voceSabia": "O cérebro humano é programado para interpretar variações de brilho e sombra como curvas físicas no espaço. Quando usamos o falso relevo no bordado, a luz ambiente bate nas linhas brilhantes e o cérebro jura que a letra tem 5 milímetros de altura!",
        "curiosidadeTecnica": "O termo técnico 'Trompe-l'œil' vem do francês e significa 'engana o olho'. Essa técnica foi usada nas pinturas dos tetos das catedrais barrocas na Europa e hoje é uma das mais nobres artes da programação de matrizes.",
        "dicaArtrelados": "Para criar um falso relevo dourado lindo em uma letra: use marrom escuro na sombra de baixo, amarelo ouro no meio, amarelo claro na parte de cima e um filete de branco puro no topo onde bate o brilho. A letra vai parecer feita de ouro maciço!",
        "applications": [
          "Emblemas corporativos de alto padrão e marcas automotivas de luxo",
          "Brasões heráldicos, coroas e insígnias militares",
          "Bordados em jaquetas de couro, bonés premium e bolsas de viagem",
          "Monogramas sofisticados para roupas de cama de noiva e enxovais"
        ],
        "troubleshootingTips": [
          "Se o efeito 3D não ficou perceptível, aumente o contraste entre a cor de sombra e a cor do brilho superior.",
          "Se as cores do degradê ficaram separadas por linhas feias, ative a opção 'Borda Esfumada / Feather Stitch' com comprimento aleatório na transição.",
          "Se o bordado ficou muito duro, reduza a densidade da camada de base para 0.8 mm."
        ],
        "relatedTerms": [
          "Degradê no Bordado",
          "Bordado 3D / Relevo",
          "Sombra e Luz (Chiaroscuro)",
          "Pontos Esfumados (Feather Stitch)",
          "Efeito Metálico"
        ],
        "tags": ["falso-relevo", "trompe-loeil", "sombreamento", "meio-tom", "3d-illusion", "degrade", "alta-costura"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Artistic Shading, Faux 3D and Trompe-l'œil Techniques. Sydney: Wilcom, 2023. MADEIRA THREADS. Color Blending and Shading Compendium. Freiburg: Madeira, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Artistic Shading, Faux 3D and Trompe-l'œil Techniques. Sydney: Wilcom, 2023.",
          "MADEIRA THREADS. Color Blending and Shading Compendium. Freiburg: Madeira, 2022.",
          "ARTRELADOS. Ilusão Tridimensional e Escultura Óptica no Bordado Computadorizado. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "No seu software, desenhe uma esfera de 40 mm de diâmetro. Divida a esfera em 4 camadas de densidade: uma sombra inferior em azul marinho, o corpo em azul royal, o topo em azul celeste e um ponto de brilho no canto superior esquerdo em branco. Borde a esfera em tecido escuro e veja como ela parece uma bola de gude de vidro perfeitamente redonda e saltando do tecido!",
        "quickSummary": "O falso relevo usa tons claros e escuros de linha para fazer o bordado parecer gordinho e tridimensional como uma escultura, mas sendo totalmente plano e macio.",
        "beginnerExplanation": "Sabe quando um desenhista faz um desenho no papel e coloca uma sombrinha embaixo e um brilhinho em cima, fazendo o desenho parecer que vai sair da folha? No bordado eletrônico a gente faz a mesma coisa usando cores de linha: uma cor mais escura embaixo e uma corzinha clara em cima. O bordado fica parecendo que tem relevo, mas é macio e pode ser passado a ferro sem estragar!",
        "recommendedSettings": {
          "speedPPM": "700 a 800 PPM",
          "needleType": "75/11 Universal ou Ponta Aguda",
          "stabilizer": "Entretela Rasgável 60g ou Recorte",
          "threadTension": "105 a 115gf",
          "density": "Gradiente de 0.40 mm a 1.00 mm"
        }
      },
      {
        "id": "f-084-ponto-florentino-efeito-bargello-computadorizado",
        "code": "F-084",
        "letter": "F",
        "term": "Ponto Florentino e Efeito Bargello Computadorizado (Computerized Bargello Flame Stitch & Wave Patterns)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Pontos Básicos & Decorativos",
        "origin": "Dos históricos bordados renascentistas em tapeçaria do Palácio do Bargello em Florença (Itália) do século XV, adaptados aos softwares de digitalização industrial.",
        "summary": "Padrão de preenchimento decorativo formado por ondas pontiagudas geométricas em zigue-zague com gradientes de cores que simulam chamas estilizadas.",
        "definition": "O Ponto Florentino e Efeito Bargello Computadorizado (Bargello Wave / Flame Stitch Embroidery) é um estilo decorativo de preenchimento padronizado que utiliza fileiras paralelas de pontos verticais escalonados em degraus matemáticos regulares (Stepped Satin / Split Fill), criando padrões ondulados dinâmicos em formato de labaredas de fogo, montanhas pontiagudas, escamas de dragão ou ondas geométricas. Historicamente bordado à mão sobre talagarça contando fios, no bordado computadorizado ele é programado com divisões paramétricas de satim com defasagem angular simétrica e sequência de 4 a 8 variações de cores em degradê harmônico, resultando em um visual de tapeçaria nobre de altíssimo impacto.",
        "technicalDetails": "O padrão é digitalizado com comprimento de ponto constante entre 3.0 mm e 6.0 mm com degraus de subida e descida de 1.0 mm a 1.5 mm por coluna. A densidade entre colunas é calibrada em 0.45 mm para permitir que as pontas dos pontos da fileira superior se encaixem nos vales da fileira inferior sem encavalar. As trocas de cor seguem sequências espectrais (ex: bordô -> vermelho -> laranja -> amarelo -> creme).",
        "construction": [
          "Matriz paramétrica de degraus de satim divididos (Programmed Split Satin)",
          "Degraus de defasagem vertical calculados (1.0 mm a 1.5 mm por passo)",
          "Alinhamento rigoroso de cristas e vales em zigue-zague harmônico",
          "Paleta espectral de 4 a 8 cores coordenadas",
          "Base de entretela estável para suportar a tensão multidirecional"
        ],
        "howItWorks": [
          "1. O programador define o contorno da área a ser preenchida (ex: uma faixa decorativa de almofada ou manto).",
          "2. Aplica o padrão de preenchimento programado Bargello / Florentine Flame.",
          "3. Define a paleta de cores em degradê de fogo (do vermelho escuro ao amarelo claro).",
          "4. A máquina borda fileira por fileira com perfeição matemática, revelando as labaredas de tapeçaria renascentista sobre o tecido."
        ],
        "mainTypes": [
          "Bargello em Labareda Clássica / Fogo Florentino (Flame Stitch com pontas agudas)",
          "Bargello em Ondas Sinusoidais Suaves (Wave Bargello com curvas arredondadas)",
          "Bargello Diamante / Losango Geométrico (Diamond Bargello com padrões concêntricos)"
        ],
        "characteristics": [
          "Textura rica de tapeçaria histórica de luxo com movimento óptico vibrante",
          "Combinação única de geometria matemática rigorosa e arte têxtil renascentista",
          "Superfície acetinada de alto brilho proporcionada pelos pontos verticais longos"
        ],
        "limitations": [
          "Exige trocas de cores sucessivas na máquina de bordar",
          "Não é indicado para áreas excessivamente pequenas (menores que 30 mm de altura)"
        ],
        "numberingSystem": [
          "Comprimento do Ponto de Degrau: 3.5 mm a 5.5 mm",
          "Degrau de Deslocamento Vertical: 1.0 mm a 1.5 mm",
          "Densidade de Coluna: 0.42 mm a 0.48 mm"
        ],
        "advantages": [
          "✔ Peças de decoração (almofadas, mantas, caminhos de mesa) com valor de venda premium",
          "✔ Efeito visual hipnotizante que destaca o ateliê no mercado de alto padrão",
          "✔ Excelente cobertura e estabilidade sem endurecer o tecido"
        ],
        "commonErrors": [
          "❌ Usar densidade muito fechada (0.32 mm), fazendo os degraus empilharem e quebrarem a agulha",
          "❌ Errar a ordem do degradê de cores, quebrando a ilusão de movimento das ondas",
          "❌ Bordar sem entretela firme, fazendo o tecido enrugar nas cristas pontiagudas"
        ],
        "voceSabia": "O nome 'Bargello' vem de um conjunto de cadeiras antigas estofadas com esse padrão de chamas encontradas no Museu Nacional do Bargello, em Florença. Durante séculos, esse foi o bordado exclusivo da nobreza italiana e dos palácios papais!",
        "curiosidadeTecnica": "O padrão Bargello é baseado em funções trigonométricas periódicas (funções dente-de-serra e triangulares). No Wilcom e Tajima DG, ele é gerado automaticamente através da ferramenta de 'Preenchimento Programado' (Programmed Split Fill).",
        "dicaArtrelados": "Para criar um caminho de mesa ou capa de almofada digno de revista de decoração: programe uma faixa de Bargello de 10 cm de largura com 6 tons de azul (do marinho profundo ao azul bebê). O resultado parece água do mar em movimento com brilho de seda!",
        "applications": [
          "Almofadas de luxo, caminhos de mesa e cortinas de alta decoração",
          "Estofamentos de poltronas clássicas e cabeceiras de cama personalizadas",
          "Faixas de vestimentas litúrgicas, estolas sacerdotais e mantos sacros",
          "Bolsas femininas sofisticadas e jaquetas exclusivas estilo passarela"
        ],
        "troubleshootingTips": [
          "Se as pontas das ondas do Bargello ficarem tortas na máquina, utilize entretela de recorte colada temporariamente com adesivo spray 505.",
          "Se os pontos verticais ficarem frouxos após lavar, reduza o comprimento máximo de ponto para 4.5 mm nas configurações do padrão.",
          "Se a agulha estiver desviando nas transições de cor, utilize agulhas de ponta aguda reforçada (Topstitch 80/12)."
        ],
        "relatedTerms": [
          "Preenchimento Programado (Programmed Split)",
          "Tapeçaria Renascentista",
          "Degradê de Cores",
          "Ponto Cheio Dividido",
          "Padrões Geométricos"
        ],
        "tags": ["ponto-florentino", "bargello", "flame-stitch", "tapecaria", "pontos-decorativos", "renascenca", "alta-decoracao"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Programmed Split Patterns and Historic Tapestry Fills. Sydney: Wilcom, 2023. FLORENTINE EMBROIDERY ARCHIVE. The History and Geometry of Bargello Stitching. Florence: Alinari, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Programmed Split Patterns and Historic Tapestry Fills. Sydney: Wilcom, 2023.",
          "FLORENTINE EMBROIDERY ARCHIVE. The History and Geometry of Bargello Stitching. Florence: Alinari, 2022.",
          "ARTRELADOS. O Resgate da Tapeçaria Florentina no Bordado Computadorizado: Efeito Bargello. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "No seu software de digitalização, crie uma faixa retangular de 150 x 50 mm. Aplique o preenchimento programado Florentino / Bargello em zigue-zague com 5 degraus. Configure uma sequência de 5 cores em degradê (verde esmeralda, verde folha, verde claro, amarelo limão e dourado). Borde em um tecido de linho rústico e encante-se com o efeito de tapeçaria real!",
        "quickSummary": "O ponto florentino / Bargello cria ondas geométricas em formato de chamas de fogo coloridas, simulando as luxuosas tapeçarias dos palácios italianos antigos.",
        "beginnerExplanation": "Sabe aquelas tapeçarias italianas antigas e chiques cheias de ondas coloridas parecendo labaredas de fogo? Esse é o ponto Bargello! O computador programa os pontos subindo e descendo em degraus perfeitinhos. Quando você usa várias cores em degradê, o bordado fica parecendo uma pintura em movimento!",
        "recommendedSettings": {
          "speedPPM": "700 a 800 PPM",
          "needleType": "75/11 ou 80/12 Ponta Aguda ou Universal",
          "stabilizer": "Entretela Rasgável 60g ou Recorte 80g",
          "threadTension": "105 a 115gf",
          "density": "0.45 mm com Degrau de 1.2 mm"
        }
      },
      {
        "id": "f-085-efeito-filigrana-rendas-finas-ponto-corrido-duplo",
        "code": "F-085",
        "letter": "F",
        "term": "Efeito Filigrana e Rendas Finas com Ponto Corrido Duplo (Filigree Embroidery & Fine Lace Micro-Stitching)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Pontos Básicos & Decorativos",
        "origin": "Da tradicional arte da filigrana em fios de ouro e prata dos mestres ourives portugueses e venezianos dos séculos XVI e XVII.",
        "summary": "Estilo de bordado de altíssima delicadeza composto por micro-arabescos em ponto corrido triplo ou duplo sem preenchimento maciço, simulando rendas e joias.",
        "definition": "O Efeito Filigrana e Rendas Finas (Filigree Embroidery / Micro-Lace Detailing) é a técnica de digitalização que constrói desenhos extremamente intrincados, translúcidos e etéreos compostos exclusivamente por linhas finas entrelaçadas, espirais, gotas, arabescos e nós microscópicos. Diferente dos bordados tradicionais que cobrem o tecido com blocos pesados de satim ou tatami, a filigrana utiliza caminhos vetoriais contínuos de ponto corrido duplo (Bean Stitch / 2-Ply Run) ou triplo com fios finos (espessura 60wt ou 75wt), criando o aspecto de uma joia de metal precioso ou renda artesanal de bilro pousada com leveza sobre o tecido.",
        "technicalDetails": "As linhas são programadas com comprimento de ponto curto calibrado entre 1.8 mm e 2.2 mm para acompanhar curvas com raios inferiores a 1.0 mm sem facetamento. A rota de costura utiliza o método de ramificação vetorial contínua (Continuous Branching), garantindo que a máquina percorra todos os arabescos com ida e volta sem realizar cortes de linha internos que desestruturariam o desenho.",
        "construction": [
          "Vetorização em linha central contínua (Centerline Vector Branching)",
          "Ponto corrido duplo ou triplo (Double / Triple Bean Stitch)",
          "Comprimento de micro-ponto curto (1.8 mm a 2.2 mm)",
          "Linha fina especial de bordar (Poliéster 60wt ou Metálica Fina)",
          "Agulha de ponta fina e olho polido (Microtex 65/9 ou 70/10)"
        ],
        "howItWorks": [
          "1. O desenhista cria uma malha ornamental de arabescos inspirada em joias de filigrana portuguesa.",
          "2. Converte as linhas em ponto corrido duplo com comprimento de 2.0 mm sem nenhum ponto cheio.",
          "3. Aplica a rota de costura contínua de ponto de volta para que a máquina borde todo o arabesco de uma vez só.",
          "4. Na máquina com fio dourado fino, o bordado surge leve como uma teia de aranha cintilante sobre o linho ou organza."
        ],
        "mainTypes": [
          "Filigrana em Fios de Ouro e Prata (Joalheria Têxtil para vestidos de noiva e alta costura)",
          "Filigrana Botânica / Renda Floral (Para enxovais de bebê e batas de batizado)",
          "Filigrana Geométrica Mourisca / Arabesco Islâmico (Para toalhas de lavabo e mantilhas)"
        ],
        "characteristics": [
          "Transparência, leveza e sofisticação incomparáveis que não pesam na roupa",
          "Consumo reduzido de pontos com altíssimo impacto de elegância visual",
          "Toque ultra macio e flexível que não endurece tecidos finos e fluidos"
        ],
        "limitations": [
          "Exige tecidos nobres e estáveis ou uso correto de entretelas solúveis",
          "Não possui alto contraste em tecidos muito felpudos ou texturizados (como toalhas atoalhadas grossas)"
        ],
        "numberingSystem": [
          "Comprimento de Ponto: 1.8 mm a 2.2 mm",
          "Espessura de Linha Ideal: 60wt ou 75wt (Extra Fina)",
          "Calibre da Agulha: 65/9 ou 70/10 Microtex"
        ],
        "advantages": [
          "✔ Vestidos de noiva e festa com bordados de luxo sem rigidez e sem repuxar o tecido",
          "✔ Execução rápida na máquina com tempo de costura até 70% menor que bordados cheios",
          "✔ Peças exclusivas com estética de alta joalheria e passamanaria nobre"
        ],
        "commonErrors": [
          "❌ Usar linha grossa comum 40wt com comprimento de ponto longo (os arabescos ficam rústicos e deformados)",
          "❌ Deixar cortes de linha no meio dos arabescos finos (os nozinhos de arremate ficam visíveis e feios)",
          "❌ Bordar filigrana em toalha felpuda sem colocar filme hidrossolúvel por cima (o bordado afunda e some)"
        ],
        "voceSabia": "A filigrana de ouro é uma das artes mais famosas de Portugal (como o tradicional Coração de Viana). No bordado eletrônico, usando fio metalizado dourado 60wt e ponto corrido duplo, é possível reproduzir exatamente a mesma joia sobre linho puro!",
        "curiosidadeTecnica": "O ponto corrido duplo (Bean Run) faz a agulha dar dois passos para a frente e um para trás. Esse movimento trança a linha sobre si mesma, dobrando o relevo e a visibilidade do traço sem aumentar a rigidez do tecido.",
        "dicaArtrelados": "Para fazer filigranas de noiva de tirar o fôlego: use linha dourada metálica bem fininha, agulha 70/10 e programe a matriz em ponto corrido triplo de 2.0 mm. Borde sobre linho misto ou tule com entretela hidrossolúvel. O resultado parece uma joia de ouro tecida!",
        "applications": [
          "Vestidos de noiva, véus, mantilhas e corpetes de alta costura",
          "Enxovais nobres de batizado, vestidos de daminha e roupas de bebê de luxo",
          "Toalhas de lavabo em linho puro e jogos americanos refinados",
          "Customização de lenços de seda, capas de livros de casamento e convites em tecido"
        ],
        "troubleshootingTips": [
          "Se a linha fina estiver quebrando nas curvas fechadas, reduza a velocidade da máquina para 600 PPM e aplique silicone spray na linha.",
          "Se os detalhes pequenos estão virando borrões, diminua o comprimento de ponto para 1.8 mm e utilize agulha fina 65/9.",
          "Se o tecido estiver franzindo nas linhas finas, use uma folha de entretela rasgável de boa qualidade colada temporariamente com adesivo reposicionável."
        ],
        "relatedTerms": [
          "Ponto Corrido Triplo (Bean Stitch)",
          "Linha 60wt / Fio Fino",
          "Agulha Microtex",
          "Ramificação Contínua (Branching)",
          "Joalheria Têxtil"
        ],
        "tags": ["filigrana", "rendas-finas", "micro-stitching", "bean-stitch", "noivas", "alta-costura", "joalheria-textil"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Fine Outline Digitizing, Filigree and Micro-Run Branching. Sydney: Wilcom, 2023. MADEIRA THREADS. Metallic and 60wt Extra-Fine Threads Guide. Freiburg: Madeira, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Fine Outline Digitizing, Filigree and Micro-Run Branching. Sydney: Wilcom, 2023.",
          "MADEIRA THREADS. Metallic and 60wt Extra-Fine Threads Guide. Freiburg: Madeira, 2022.",
          "ARTRELADOS. A Nobreza da Filigrana no Bordado Eletrônico: Micro-Traçados e Joias Têxteis. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Desenhe um coração formado por arabescos e volutas em espiral no seu software. Configure todas as linhas como ponto corrido triplo (Bean Stitch) com comprimento de 2.0 mm, unindo tudo com a ferramenta de ramificação contínua (sem cortes). Borde em um pedaço de tecido de linho com fio dourado e encante-se com a elegância de joalheria do bordado!",
        "quickSummary": "A filigrana borda desenhos rendados super delicados apenas com linhas finas entrelaçadas, criando um visual de joia de ouro ou renda antiga sem deixar o tecido pesado.",
        "beginnerExplanation": "Ao invés de preencher o desenho todo com linhas grossas, a filigrana desenha apenas os contornos e raminhos com uma linha fininha e brilhante, como se fosse uma renda feita à mão ou uma joia de ouro desenhada no tecido. Fica super chique, leve e não repuxa panos delicados!",
        "recommendedSettings": {
          "speedPPM": "600 a 700 PPM",
          "needleType": "65/9 ou 70/10 Microtex ou Ponta Aguda",
          "stabilizer": "Entretela Hidrossolúvel ou Rasgável Fina 40g",
          "threadTension": "95 a 105gf",
          "density": "Ponto Corrido Duplo/Triplo de 1.8 a 2.2 mm"
        }
      },
      {
        "id": "f-086-ponto-festone-borda-escavada-selagem-termica",
        "code": "F-086",
        "letter": "F",
        "term": "Ponto Festonê com Borda Escavada e Selagem Térmica (Scalloped Edge Festoon & Heat-Sealed Border Stitch)",
        "level": "Intermediário 🟡",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Pontos Básicos & Decorativos",
        "origin": "Do francês 'feston' (grinalda / arco ornamental), técnica clássica de arremate de bordas de toalhas e lenços finos da Ilha da Madeira e da corte francesa do século XVIII.",
        "summary": "Ponto de acabamento em formato de arcos ondulados contínuos com reforço denso que permite recortar ou selar termicamente o tecido rente à borda sem desfiar.",
        "definition": "O Ponto Festonê com Borda Escavada e Selagem Térmica (Scalloped Festoon & Border Seal) é o ponto de arremate estrutural e decorativo projetado para finalizar a bainha de toalhas de mesa, lenços, panos de prato nobres, barras de vestidos e enxovais infantis com curvas côncavas e convexas (ondas ou arcos escavados). A técnica consiste em uma coluna de ponto cheio denso (com largura entre 3.0 mm e 5.0 mm) assentada sobre uma costura de borda dupla (Double Edge Walk) ultra resistente na margem externa. Após o bordado sobre tecidos sintéticos ou com entretela solúvel, a margem externa do tecido é recortada rente aos pontos com tesoura fina ou selada com pirógrafo / ferro de solda térmico, resultando em uma barra ondulada perfeita que nunca desfia.",
        "technicalDetails": "A margem externa do festonê (Outer Boundary) recebe reforço de ponto corrido duplo colado a 0.2 mm da borda externa para criar a 'linha de corte' (Cutline Support). A densidade de satim é elevada para 0.34 mm a 0.36 mm com compensação de puxão de 0.40 mm. Nos vértices de encontro entre as ondas (vales), o software aplica desaceleração angular e redução de densidade para evitar acúmulo excessivo de pontos.",
        "construction": [
          "Reforço de costura de borda externa reforçada (Outer Edge Run)",
          "Coluna de ponto cheio com modulação de largura em arco (Scallop Curve)",
          "Compensação de puxão reforçada na borda livre (0.40 mm a 0.50 mm)",
          "Entretela hidrossolúvel de base para borda livre (Water-Soluble Stabilizer)",
          "Linha de poliéster 100% resistente ao calor de selagem"
        ],
        "howItWorks": [
          "1. O programador desenha a linha de ondas do festonê ao longo de toda a borda da toalha.",
          "2. A máquina borda a costura de reforço externo e, em seguida, cobre tudo com o ponto cheio brilhante e fechado.",
          "3. A peça é retirada da máquina e posicionada sobre uma placa de corte ou vidro temperado.",
          "4. Com uma ponta fina de pirógrafo ou ferro de solda quente (ou tesourinha de arremate curva), corta-se o tecido rente à linha do festonê: o calor sela as fibras sintéticas instantaneamente sem queimar a linha de poliéster.",
          "5. A toalha ganha uma borda ondulada impecável, lavável e de altíssima durabilidade."
        ],
        "mainTypes": [
          "Festonê em Arcos Clássicos / Meia-Lua (Para toalhas de banquete, panos de prato e lenços)",
          "Festonê com Borda Picotada / Dentada (Para enxovais de bebê e batas de batismo)",
          "Festonê Escavado com Ilhós Integrado (Para barras de cortinas e vestidos de festa)"
        ],
        "characteristics": [
          "Bainha decorativa que substitui a costura reta tradicional por ondas de grande nobreza",
          "Resistência mecânica absoluta contra desfiamento durante lavagens sucessivas",
          "Acabamento limpo tanto no lado direito quanto no avesso da peça"
        ],
        "limitations": [
          "A selagem térmica exige que o tecido tenha composição sintética (poliéster, microfibra, cetim)",
          "Em tecidos 100% algodão, o corte deve ser feito com tesoura de precisão bico de pato"
        ],
        "numberingSystem": [
          "Largura da Coluna de Festonê: 3.0 mm a 5.0 mm",
          "Densidade de Fechamento: 0.34 mm a 0.38 mm",
          "Raio dos Arcos Ondulados: 10 mm a 25 mm"
        ],
        "advantages": [
          "✔ Agregação imediata de valor em panos de prato e toalhas simples",
          "✔ Elimina a necessidade de fazer bainha na máquina de costura reta",
          "✔ Visual romântico clássico muito valorizado por noivas e mães de bebês"
        ],
        "commonErrors": [
          "❌ Usar densidade rala (maior que 0.45 mm), fazendo o tecido desfiar entre os pontos após o corte",
          "❌ Não colocar o reforço de costura na borda externa da onda",
          "❌ Queimar a linha ao usar o pirógrafo muito quente ou encostar a lâmina de lado"
        ],
        "voceSabia": "O acabamento em festonê era a marca registrada dos famosos 'Bordados da Madeira' exportados para as famílias reais de toda a Europa no século XIX. Cada arco de onda era cortado à mão com uma tesourinha minúscula após semanas de costura!",
        "curiosidadeTecnica": "A linha de bordar de poliéster trilobal possui ponto de fusão superior a 250°C, enquanto tecidos sintéticos comuns como cetim e microfibra fundem a cerca de 180°C. Essa diferença térmica de 70°C é o que permite selar o tecido quente sem derreter o bordado!",
        "dicaArtrelados": "Para fazer panos de prato com barra de festonê perfeita: borde a barra sobre o tecido com uma camada de entretela hidrossolúvel embaixo. Depois de bordado, use um ferro de solda com pontinha de agulha bem limpa correndo rente à borda sobre um vidro. A barra fica seladinha e nunca mais desfia!",
        "applications": [
          "Barras de toalhas de mesa, caminhos de mesa e jogos americanos",
          "Panos de prato gourmet, toalhas de lavabo e paninhos de boca de bebê",
          "Bainhas de lenços de noiva, mantilhas e golas de vestidos infantis",
          "Arremate de asas de anjos, pétalas soltas e apliques em 3D"
        ],
        "troubleshootingTips": [
          "Se a barra está desfiando após o recorte, aumente a densidade do satim para 0.34 mm e certifique-se de ativar o reforço de borda 'Edge Walk' no software.",
          "Se o tecido repuxou formando dobras nas curvas do festonê, aumente a compensação de puxão para 0.45 mm e use entretela mais firme.",
          "Se o pirógrafo estiver mascando ou deixando marcas pretas, limpe a ponta do ferro com uma esponja de aço fina e passe com velocidade contínua."
        ],
        "relatedTerms": [
          "Ponto Festonê (Scallop Stitch)",
          "Bainha Bordada",
          "Selagem Térmica / Pirógrafo",
          "Reforço de Borda (Edge Walk)",
          "Ponto Cheio de Arremate"
        ],
        "tags": ["festone", "borda-escavada", "selagem-termica", "panos-de-prato", "pontos-decorativos", "enxoval", "wilcom"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Digitizing Scalloped Edges, Festoons and Cutwork Borders. Sydney: Wilcom, 2023. MADEIRA EMBROIDERY GUILD. Historic Scallop Edge Finishing. Funchal: Madeira Guild, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Digitizing Scalloped Edges, Festoons and Cutwork Borders. Sydney: Wilcom, 2023.",
          "MADEIRA EMBROIDERY GUILD. Historic Scallop Edge Finishing. Funchal: Madeira Guild, 2022.",
          "ARTRELADOS. A Arte do Festonê e Arremate Térmico no Bordado Computadorizado. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Digitalize uma barra de festonê com 5 arcos de 20 mm de largura cada em ponto cheio (densidade 0.35 mm com reforço Edge Walk). Borde a barra na ponta de um retalho de tecido de microfibra ou cetim com entretela solúvel. Pegue uma tesourinha curva ou ferro de solda e corte o excesso de tecido rente à borda externa. Lave em água corrente e veja como a barra ondulada fica perfeita, limpa e firme!",
        "quickSummary": "O ponto festonê cria barras onduladas em arcos super charmosas em toalhas e lenços, permitindo cortar a beiradinha do pano sem desfiar.",
        "beginnerExplanation": "Sabe aquelas toalhas de mesa e panos de prato que têm a barra toda cheia de ondinhas bordadas redondinhas e fofas? Esse é o ponto festonê! A máquina faz uma costura bem grossinha e forte na beirada para que você possa cortar o pano bem rente sem que ele desfie nunca mais!",
        "recommendedSettings": {
          "speedPPM": "700 a 800 PPM",
          "needleType": "75/11 Universal ou Ponta Aguda",
          "stabilizer": "Entretela Hidrossolúvel ou Rasgável 60g",
          "threadTension": "105 a 115gf",
          "density": "0.34 mm a 0.36 mm com Reforço Edge Walk"
        }
      },
      {
        "id": "f-087-efeito-flocado-tridimensional-fios-chenille-ponto-lacada",
        "code": "F-087",
        "letter": "F",
        "term": "Efeito Flocado Tridimensional com Fios de Chenille e Ponto Laçada (3D Flocking & Loop-Pile Chenille Effect)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Pontos Básicos & Decorativos",
        "origin": "Das tradicionais jaquetas universitárias americanas (Letterman / Varsity Jackets) da década de 1930 combinadas com a tecnologia de pontos felpudos (Loop Pile).",
        "summary": "Técnica de bordado que cria superfícies aveludadas e volumosas com aspecto de pelúcia (chenille) através de laçadas soltas ou fios especiais felpudos.",
        "definition": "O Efeito Flocado Tridimensional com Fios de Chenille e Ponto Laçada (Loop-Pile Chenille & Moss Stitch Embroidery) é o processo têxtil que produz áreas densamente felpudas com textura de veludo grosso, carpete macio ou pelúcia em relevo (com até 4 mm de espessura). Em máquinas industriais especializadas, é produzido através do ponto laçada (Loop Stitch / Moss Stitch) que empurra a linha sem entrelaçar com a bobina inferior, formando laços verticais contínuos. Em máquinas de bordar convencionais, o efeito flocado é alcançado digitalizando matrizes com preenchimentos em espirais abertas usando fios volumosos de lã acrílica ou chenille ou cortando a linha de bobina frouxa no verso com escovação frontal.",
        "technicalDetails": "Nas máquinas com cabeçote misto de Chenille/Chain Stitch, o ponto de laçada é regulado com altura de laço entre 2.0 mm e 4.0 mm com densidade de 1.2 a 1.6 mm entre laçadas. Em máquinas comuns com matriz adaptada, utiliza-se ponto tatami em espiral com densidade de 0.50 mm e compensação de 0.60 mm sobre entretela de recorte pesada de 120g, aplicando agulha grossa 90/14 de olho largo para acomodar o fio texturizado.",
        "construction": [
          "Preenchimento em espiral contínua ou ponto de laçada vertical (Loop Pile)",
          "Borda de contenção em ponto cheio largo (para segurar o veludo)",
          "Linha especial de chenille, lã acrílica ou poliéster texturizado",
          "Agulha de calibre largo com canaleta profunda (Topstitch / Chenille 90/14)",
          "Entretela de alta sustentação (Heavy Cutaway 100g a 120g)"
        ],
        "howItWorks": [
          "1. O programador desenha a letra grande da jaqueta universitária (ex: letra 'A' de 10 cm).",
          "2. Preenche o interior da letra com a textura de ponto laçada ou espiral de chenille.",
          "3. Adiciona um contorno de ponto cheio grosso ao redor da letra para fechar a borda.",
          "4. Na máquina, o bordado cresce com volume aveludado fofo, idêntico aos casacos dos times universitários americanos."
        ],
        "mainTypes": [
          "Chenille Universitário Clássico / Ponto Laçada (Loop / Moss Stitch para jaquetas college)",
          "Flocado Simulado com Fio de Lã e Escovação (Faux Flocking para máquinas comuns)",
          "Ponto Ponto-de-Cadeia / Chain Stitch Chenille (Para contornos ornamentais em relevo)"
        ],
        "characteristics": [
          "Toque incrivelmente macio, fofo e aveludado de alto impacto tátil",
          "Relevo volumoso e aconchegante sem uso de espuma rígida de EVA",
          "Estilo retrô vintage atemporal de altíssimo valor de mercado na moda jovem"
        ],
        "limitations": [
          "O chenille genuíno exige cabeçote especial ou calcador de laçada na máquina",
          "Não é recomendado para detalhes pequenos ou letrinhas menores que 25 mm"
        ],
        "numberingSystem": [
          "Altura do Relevo Aveludado: 2.0 mm a 4.0 mm",
          "Calibre da Agulha: 90/14 ou 100/16",
          "Gramatura da Entretela de Base: 100g a 120g/m²"
        ],
        "advantages": [
          "✔ Criação de jaquetas universitárias (Varsity Jackets) vendidas a preços de alto padrão",
          "✔ Texturas de animais (ursos, ovelhinhas, leões) com toque felpudo real em roupas infantis",
          "✔ Visual esportivo vintage americano autêntico e de grande procura comercial"
        ],
        "commonErrors": [
          "❌ Tentar fazer detalhes minúsculos com fio de chenille (o bordado vira um borrão ilegível)",
          "❌ Usar agulha fina 75/11 com fio grosso de lã (arrebenta a linha e entope a lançadeira)",
          "❌ Não fazer uma borda de satim firme ao redor do chenille para segurar os fios"
        ],
        "voceSabia": "As famosas jaquetas de times universitários de Harvard e Yale (com a letra grandona e felpuda no peito) são o maior clássico da moda jovem mundial desde 1930. Aquele miolo fofinho da letra é exatamente o ponto chenille!",
        "curiosidadeTecnica": "O termo 'Chenille' vem do francês e significa 'lagarta' (devido ao aspecto felpudo e peludo do fio que se assemelha a uma lagartinha de jardim).",
        "dicaArtrelados": "Para fazer bichinhos fofos em toalhas de bebê em uma máquina de bordar comum: use fio de meada de lã acrílica fina na agulha 90/14 com velocidade de 600 PPM. O corpinho do ursinho ou da ovelhinha fica com um relevo aveludado e macio que as mães se apaixonam!",
        "applications": [
          "Letras grandes em jaquetas universitárias (Varsity/College Jackets) e moletons",
          "Orelhas e corpos de bichinhos fofos (ursos, coelhos, ovelhas) em enxovais infantis",
          "Patches retrô e emblemas de clubes esportivos tradicionais",
          "Almofadas decorativas e tapetes com áreas texturizadas de toque macio"
        ],
        "troubleshootingTips": [
          "Se a linha grossa estiver desfiando na entrada da agulha, troque imediatamente para agulha Topstitch 90/14 ou 100/16 de olho largo.",
          "Se o tecido afundou sob o peso do ponto de laçada, reforce a base com duas camadas de entretela de recorte de 80g no bastidor.",
          "Se as laçadas estão escapando ou desmanchando, aumente o travamento final da matriz com 5 pontos de amarração dupla."
        ],
        "relatedTerms": [
          "Chenille / Ponto Laçada",
          "Jaqueta Universitária (Varsity Jacket)",
          "Ponto Cadeia (Chain Stitch)",
          "Agulha de Olho Largo (Topstitch)",
          "Bordado Texturizado"
        ],
        "tags": ["chenille", "flocado", "ponto-lacada", "jaqueta-college", "relevo-aveludado", "pontos-decorativos", "moda-jovem"],
        "updatedAt": "2026-08-29",
        "sourceReference": "TAJIMA GROUP. Specialty Head Technologies: Chenille and Loop-Pile Operations. Nagoya: Tajima, 2023. BARUDAN CO. Chenille Digitizing and Loop Stitch Mechanics. Ichinomiya: Barudan, 2022.",
        "bibliographicReferences": [
          "TAJIMA GROUP. Specialty Head Technologies: Chenille and Loop-Pile Operations. Nagoya: Tajima, 2023.",
          "BARUDAN CO. Chenille Digitizing and Loop Stitch Mechanics. Ichinomiya: Barudan, 2022.",
          "ARTRELADOS. A Tradição do Chenille e Texturas Flocadas no Bordado Industrial. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "No seu software, desenhe uma letra inicial grande de 80 mm de altura com contorno grosso de satim de 4 mm. No miolo, programe um preenchimento em tatami aberto com espiral concêntrica. Coloque uma agulha 90/14 e passe uma linha texturizada ou fio de lã fina. Borde em um tecido de moletom grosso com entretela de recorte pesada e sinta com as mãos a maciez do relevo estilo jaqueta college americana!",
        "quickSummary": "O efeito chenille flocado cria áreas aveludadas e gordinhas com textura de pelúcia, muito usado nas letras grandes de jaquetas universitárias e bichinhos infantis.",
        "beginnerExplanation": "Sabe aquelas jaquetas de filmes americanos em que as letras grandonas parecem um tapete fofinho ou uma pelúcia de veludo? Esse é o efeito chenille! Ele usa linhas especiais para deixar o bordado altinho, macio e super gostoso de passar a mão!",
        "recommendedSettings": {
          "speedPPM": "550 a 650 PPM",
          "needleType": "90/14 ou 100/16 Topstitch ou Chenille",
          "stabilizer": "Entretela de Recorte (Cutaway) Pesada 100g a 120g",
          "threadTension": "90 a 100gf (Tensão mais frouxa)",
          "density": "Espiral com espaçamento de 0.50 mm a 0.70 mm"
        }
      }
    ]

if __name__ == "__main__":
    verbetes = get_verbetes_f13()
    content = 'import { Verbete } from "../types";\n\nexport const VERBETES_LETTER_F_PART13: Verbete[] = ' + json.dumps(verbetes, ensure_ascii=False, indent=2) + ';\n'
    with open("src/data/verbetesLetterF13.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("F13 saved with 13 verbetes (F-075 to F-087)!")

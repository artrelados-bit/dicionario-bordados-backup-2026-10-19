import { Verbete } from "../types";

export const VERBETES_LETTER_X12: Verbete[] = [
  {
    id: "xy-coordinate-system-industrial-embroidery-sistema-cartesiano-xy",
    code: "X-056",
    letter: "X",
    term: "X-Y Coordinate System in Industrial Embroidery — Sistema Cartesiano de Coordenadas X-Y no Pantógrafo e Origem Zero Central",
    pronunciation: "éks uái ko-ór-di-nêit sís-tem in in-dás-tri-al em-brói-de-ri — sis-te-ma car-te-zi-a-nu shis ip-si-lon",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do sistema de coordenadas cartesianas concebido pelo filósofo e matemático francês René Descartes (1637) e adaptado aos pantógrafos mecânicos têxteis por Joseph Marie Jacquard e Isaak Groebli.",
    summary: "Estrutura geométrica bidimensional fundamental que orienta cada agulhada da máquina através de distâncias horizontais (eixo X) e verticais (eixo Y) a partir do centro (0,0).",
    definition: "O X-Y Coordinate System in Industrial Embroidery (Sistema Cartesiano de Coordenadas X-Y / Plano Cartesiano do Bastidor / Two-Axis Pantograph Cartesian Grid & Center Origin Reference) é a base matemática e física universal que rege todas as máquinas de bordar computadorizadas do mundo. O campo de bordado é mapeado como uma grade milimétrica onde o eixo X representa o deslocamento horizontal (valores positivos para a direita, negativos para a esquerda) e o eixo Y representa o deslocamento vertical (valores positivos para cima, negativos para baixo), tendo como referência de origem o ponto central geométrico (X=0, Y=0).",
    technicalDetails: "Cada arquivo de bordado (como .DST, .PES, .JEF) armazena uma sequência encadeada de centenas ou milhares de pares ordenados (X_n, Y_n) expressos em incrementos relativos (deltas) ou absolutos em décimos de milímetro. A placa controladora da máquina recebe essas coordenadas e aciona simultaneamente os servomotores dos eixos X e Y através de interpolação linear e circular de alta velocidade, sincronizando o movimento do bastidor com o ponto morto superior da rotação do eixo da agulha.",
    beginnerExplanation: "É como aquele joguinho de 'Batalha Naval' ou o mapa de uma cidade! Para a máquina saber exatamente onde dar cada pontinho, ela usa duas réguas invisíveis cruzadas no meio do bastidor: o eixo X diz quantos milímetros andar para os lados e o eixo Y diz quantos milímetros andar para cima ou para baixo a partir do centro do bastidor!",
    howItWorks: [
      "1. A bordadeira centraliza a peça no bastidor e posiciona o laser da máquina no centro do desenho (Origem 0,0).",
      "2. O painel da máquina define a coordenada atual como X=0.0 mm e Y=0.0 mm.",
      "3. Ao iniciar a costura, o computador lê o primeiro vetor do arquivo de bordado.",
      "4. O motor do eixo X move o pantógrafo para a coordenada horizontal e o motor do eixo Y move para a vertical.",
      "5. A agulha desce na coordenada exata e costura o ponto.",
      "6. O ciclo se repete até 1.200 vezes por minuto com sincronismo milimétrico.",
      "7. No final da matriz, o pantógrafo retorna automaticamente para a origem central (0,0) para facilitar a troca da peça."
    ],
    applications: [
      "Referência universal para posicionamento, rotação e espelhamento de matrizes em qualquer máquina.",
      "Centralização rápida de logotipos em bolsos, peitos de camisas e toalhas.",
      "Cálculo automático da área e limites máximos do bastidor (Bounding Box).",
      "Sincronismo de múltiplos cabeçotes trabalhando em paralelo em máquinas industriais."
    ],
    characteristics: [
      "Padrão matemático universal aceito por 100% das marcas de máquinas e softwares.",
      "Resolução e repetibilidade centesimal de posicionamento de pontos.",
      "Origem central (0,0) que facilita o encaixe perfeito em gabaritos de ateliê."
    ],
    commonErrors: [
      "❌ Iniciar o bordado sem conferir se o centro da máquina (0,0) coincide com o centro marcado no tecido.",
      "❌ Trocar os eixos X e Y mentalmente na hora de digitar deslocamentos manuais no painel.",
      "❌ Salvar a matriz com a origem fora do centro do desenho, fazendo o bordado começar descentralizado."
    ],
    troubleshootingTips: [
      "O bordado começou completamente fora do lugar e bateu na borda do bastidor: a origem (0,0) da matriz foi salva fora do centro no software; abra o arquivo, use a função 'Auto Center Design' e reexporte para o pendrive.",
      "O desenho ficou virado em 90 graus na peça: os eixos X e Y foram rotacionados no painel da máquina; gire a matriz em 90° no menu de rotação para restabelecer a orientação correta.",
      "A máquina exibe 'Origin Coordinates Error': aperte o botão 'Go to Origin / Retornar ao Centro' no painel antes de pressionar o botão de costura."
    ],
    dicaArtrelados: "Antes de marcar a roupa com a canetinha que apaga com calor, marque SEMPRE uma cruz com um ponto no meio formando os eixos X e Y! Quando colocar o bastidor na máquina, mire o laser vermelhinho exatamente no centro dessa cruz. Seu bordado vai sair perfeitamente reto e alinhado todas as vezes!",
    voceSabia: "O sistema de coordenadas cartesianas tem esse nome em homenagem ao filósofo e matemático francês René Descartes (conhecido pela frase 'Penso, logo existo'). Diz a lenda que ele inventou o sistema enquanto observava uma mosca andando pelo teto do seu quarto e percebeu que podia descrever a posição exata da mosca medindo a distância até as duas paredes!",
    practicalExercise: "No painel da sua máquina, use as setinhas direcionais para movimentar o bastidor. Observe no visor como o número do 'X' muda quando você vai para a esquerda e direita, e como o número do 'Y' muda quando você vai para cima e para baixo.",
    quickSummary: "Estrutura geométrica universal de eixos horizontais (X) e verticais (Y) com origem no centro (0,0) que guia cada agulhada da máquina de bordar.",
    relatedTerms: ["Sistema Cartesiano", "Origem Zero", "Eixo X", "Eixo Y", "Pantógrafo", "Auto Center", "Bounding Box"],
    tags: ["xycoordinate", "sistemacartesiano", "origemzero", "eixox", "eixoy", "operacao", "geometria"]
  },
  {
    id: "x-stretch-stabilization-lycra-swimwear-estabilizacao-lycra-x",
    code: "X-057",
    letter: "X",
    term: "X-Stretch Stabilization for Lycra & Swimwear — Estabilização de Elasticidade no Eixo X para Moda Praia, Suplex e Lycra",
    pronunciation: "éks-strétsh stêi-bi-lai-zêi-shon for lái-kra end su-ím-uér — es-ta-bi-li-za-são de lai-kra",
    level: "Avançado 🔴",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'stretch stabilization' (técnica de estabilização multidirecional com retenção elástica) e 'Lycra/Spandex' (elastômero sintético à base de poliuretano com alta memória elástica).",
    summary: "Protocolo técnico de estabilização que anula a elasticidade extrema de tecidos de elastano e moda praia no eixo X usando entretelas de corte limpo e cola temporária.",
    definition: "O X-Stretch Stabilization for Lycra & Swimwear (Estabilização de Elasticidade em Moda Praia / Blindagem Dimensional de Lycra e Suplex / High-Elastane Cross-Stretch Control) é o procedimento de preparação e montagem no bastidor desenvolvido especificamente para tecidos ultra elásticos (como Suplex de poliamida, Lycra de moda praia, tecidos dry-fit de alta compressão e tecidos com mais de 10% de elastano). Como esses tecidos sofrem deformação de até 300% no eixo horizontal X, a estabilização exige o travamento absoluto das fibras com entretela recortável (Cutaway) multidirecional e adesivo temporário reposicionável.",
    technicalDetails: "A colocação direta de tecidos com elastano no bastidor tradicional causa o estiramento involuntário das microfibras; quando os pontos de satim são costurados sobre a fibra esticada e o bastidor é removido, o elastano encolhe com força elástica restauradora (Efeito Elástico de Hooke), gerando franzidos irreversíveis ao redor de todo o bordado. O protocolo correto utiliza a 'Técnica de Flutuação': prende-se apenas a entretela Cutaway de 80g no bastidor, aplica-se adesivo spray 505 e assenta-se o tecido de Lycra suavemente por cima sem esticar.",
    beginnerExplanation: "Tecidos de biquíni, maiô e calça legging de academia esticam como um elástico para todos os lados! Se você prender a lycra direto no bastidor apertando o aro, ela estica toda; depois que você tira da máquina, a lycra encolhe de volta e o bordado fica parecendo uma uva passa enrugada! A técnica certa é colar a lycra com spray em cima da entretela sem esticar nada!",
    howItWorks: [
      "1. A bordadeira prende no bastidor apenas a entretela de corte limpo (Cutaway de 80g) bem esticada como um tambor.",
      "2. Aplica uma névoa leve de cola temporária em spray (ou usa entretela autoadesiva Peel & Stick).",
      "3. Posiciona a peça de Lycra ou maiô sobre a entretela, alisando com a palma das mãos sem esticar.",
      "4. Adiciona uma camada de filme plástico solúvel em água (Water Soluble Topping) por cima da lycra.",
      "5. A máquina costura a matriz previamente digitalizada com subponto em grade aberta e compensação de repuxo de 0,45 mm.",
      "6. Ao terminar, retira-se o plástico solúvel com água morna e recorta-se a entretela rente pelo avesso.",
      "7. A peça de moda praia mantém o toque suave, caimento perfeito e zero rugas de repuxo."
    ],
    applications: [
      "Bordados de logotipos de academias e marcas em maiôs, biquínis e sungas de natação.",
      "Bordados em calças leggings, tops esportivos e bermudas de ciclismo de Suplex.",
      "Peças de dança, collants de balé e ginástica artística com muito elastano.",
      "Bordados de marcas em tecidos de compressão para atletas profissionais."
    ],
    characteristics: [
      "Eliminação definitiva do enrugamento pós-bastidor em tecidos com elastano.",
      "Preservação da memória elástica original da peça ao redor do bordado.",
      "Toque interno suave e macio que não irrita a pele em contato direto com o corpo."
    ],
    commonErrors: [
      "❌ Apertar a lycra direto entre os aros do bastidor, esticando as fibras de elastano antes da costura.",
      "❌ Usar entretela rasgável comum em lycra, fazendo o bordado rasgar e abrir buracos na primeira vez que a pessoa vestir.",
      "❌ Usar agulha de ponta afiada que corta as microfibras de borracha/elastano, criando furos que desfiam."
    ],
    troubleshootingTips: [
      "O bordado em tecido de biquíni ficou todo enrugado e repuxado após soltar do bastidor: o tecido foi esticado na hora de montar; refaça o bordado utilizando a técnica de flutuação sobre entretela Cutaway com adesivo spray.",
      "Apareceram furinhos e buraquinhos ao redor do contorno do bordado na lycra: a agulha utilizada cortou os filamentos elásticos; troque a agulha imediatamente por uma agulha especial com ponta bola fina (Ball Point / Jersey calibre 70/10).",
      "A linha do bordado arrebenta quando a cliente veste e estica a roupa: programe a matriz com pontos mais soltos e utilize linha de bordar de poliéster com alta elasticidade e resiliência."
    ],
    dicaArtrelados: "Para bordar moda praia, suplex e roupas de ginástica que ficam perfeitas como de fábrica: use SEMPRE agulha ponta bola fina (calibre 70/10 ou 75/11), entretela recortável macia por baixo e plástico solúvel por cima! Seu bordado não corta o tecido e fica com um toque super confortável no corpo!",
    voceSabia: "O elastano (Lycra/Spandex) foi inventado em 1958 pelo químico americano Joseph Shivers nos laboratórios da DuPont; suas fibras podem se esticar até 5 vezes o seu comprimento original e voltar exatamente ao tamanho inicial sem quebrar!",
    practicalExercise: "Pegue um pedaço de tecido de lycra ou suplex. Prenda um pedaço esticando com força no bastidor com entretela rasgável e borde um coração. Prenda outro pedaço flutuando com cola spray sobre entretela Cutaway sem esticar e borde o mesmo coração. Compare os dois resultados e veja a diferença astronômica de qualidade!",
    quickSummary: "Protocolo de bordado para tecidos de elastano e moda praia com técnica de flutuação e entretela recortável que impede o enrugamento no eixo X.",
    relatedTerms: ["Lycra", "Suplex", "Moda Praia", "Entretela Cutaway", "Técnica de Flutuação", "Ponta Bola", "Elastano"],
    tags: ["xstretchstabilization", "lycra", "suplex", "modapraia", "elastano", "estabilizacao", "flutuacao"]
  },
  {
    id: "x-travel-optimization-tsp-otimizacao-trajetoria-x",
    code: "X-058",
    letter: "X",
    term: "X-Travel Distance Optimization in Auto-Sequencing — Otimização de Trajetória do Eixo X & Redução de Saltos pelo Caixeiro-Viajante TSP",
    pronunciation: "éks-tré-vel dis-tens op-ti-mai-zêi-shon in ó-to si-kuên-sing — o-ti-mi-za-são de tra-je-to-ri-a shis",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do problema matemático do Caixeiro-Viajante (Traveling Salesperson Problem / TSP) e algoritmos de otimização de caminho mínimo de grafos euclidianos em softwares CAD de bordado.",
    summary: "Algoritmo computacional do software que reorganiza a ordem de costura dos elementos no eixo X para minimizar o trajeto do bastidor, reduzindo saltos e tempo de produção.",
    definition: "O X-Travel Distance Optimization in Auto-Sequencing (Otimização de Trajetória do Eixo X / Redução de Saltos pelo Caminho Mínimo / TSP-Based Stitch Routing & Travel Minimization) é o motor algorítmico integrado aos softwares de bordado profissionais que analisa todos os objetos da mesma cor e calcula a rota mais curta e fluída para o pantógrafo. Em vez de deslocar o bastidor de forma caótica com saltos longos de um lado para o outro da matriz, o algoritmo agrupa e costura os elementos vizinhos em sequência contínua ao longo do eixo horizontal X, interligando-os por pontos de corrida ocultos.",
    technicalDetails: "Ao aplicar a heurística de Lin-Kernighan ou algoritmos genéticos ao grafo de penetrações, o software reduz a distância total percorrida pelo pantógrafo (Cumulative Slew Distance) em até 60% e elimina de 70% a 90% dos comandos de corte de linha e saltos (Trim/Jump Commands). Isso reduz o tempo de ciclo da máquina em 15% a 25%, diminui o desgaste térmico dos servomotores e previne o afrouxamento da tensão das linhas causado por paradas e cortes sucessivos.",
    beginnerExplanation: "É como quando você vai fazer compras na rua: em vez de ir em uma loja no início da rua, atravessar tudo até o final, voltar no meio e ir no final de novo, você organiza a rota para passar em todas as lojas que ficam uma do ladinho da outra em ordem! O computador faz isso com o bordado para a máquina terminar o trabalho muito mais rápido e sem ficar pulando linha à toa!",
    howItWorks: [
      "1. O programador finaliza o desenho com dezenas de pequenos elementos da mesma cor espalhados.",
      "2. Seleciona o bloco de cor e clica na ferramenta 'Auto-Sequenciamento Otimizado' (Branching / Auto-Sequence TSP).",
      "3. O software analisa as coordenadas de entrada e saída de cada objeto no eixo X.",
      "4. Calcula a rota contínua que minimiza o deslocamento espacial do pantógrafo.",
      "5. Interliga os objetos vizinhos com pontinhos de costura de passagem disfarçados sob os preenchimentos.",
      "6. A máquina costura toda a cor de forma contínua com apenas um corte de linha final.",
      "7. A produção ganha velocidade máxima e o avesso da peça fica 100% limpo e sem fios soltos."
    ],
    applications: [
      "Produção industrial de matrizes com centenas de letras e textos pequenos (nomes e endereços).",
      "Bordados rendados de Richilieu, monogramas complexos e padrões de ponto cruz.",
      "Redução drástica de tempo em produções em massa de uniformes corporativos.",
      "Preservação mecânica de facas de corte automático e motores em indústrias 24 horas."
    ],
    characteristics: [
      "Redução de até 25% no tempo total de costura na máquina de bordar.",
      "Eliminação quase total de cortes e arremates desnecessários de linha.",
      "Avesso impecável, plano e com toque macio sem nós embolados."
    ],
    commonErrors: [
      "❌ Deixar o software costurar dezenas de letras pequenas com cortes de linha individuais em cada letra.",
      "❌ Passar linhas de corrida de ligação por cima de áreas de tecido vazio onde deveriam ficar invisíveis.",
      "❌ Não agrupar objetos da mesma cor antes de rodar o algoritmo de otimização de caminho."
    ],
    troubleshootingTips: [
      "A máquina passa mais tempo cortando linha e saltando do que costurando: a matriz não foi otimizada; aplique a ferramenta 'Ramificação Automática' (Branching) no software para unificar os elementos da mesma cor.",
      "Apareceram linhas de passagem feias cruzando o tecido no meio das letras: configure o software para esconder as linhas de ligação dentro das colunas ou force o corte de linha automático em vãos maiores que 2,0 mm.",
      "O avesso do bordado parece um ninho de fios soltos cortados: ative o sequenciamento inteligente de trajeto no software CAD para reduzir o número total de cortes de linha."
    ],
    dicaArtrelados: "Quer economizar horas de trabalho da sua máquina e ganhar muito mais dinheiro na produção de uniformes? Use a ferramenta de **Ramificação (Branching)** do seu software nas letras e nomes! A máquina borda o nome inteiro sem dar nenhum corte de linha e termina três vezes mais rápido!",
    voceSabia: "O Problema do Caixeiro-Viajante (TSP) é um dos problemas matemáticos e computacionais mais famosos e estudados da história da humanidade desde a década de 1930, sendo usado hoje para planejar rotas de satélites espaciais e a lógica dos softwares de bordado!",
    practicalExercise: "Digitalize uma frase de três palavras no seu software sem agrupar. Veja no simulador quantas vezes a máquina corta a linha e pula de um lado para o outro. Agora selecione o texto todo e aplique a ferramenta 'Branching' (Ramificar): veja como todos os cortes somem e o tempo de bordado cai pela metade!",
    quickSummary: "Algoritmo de otimização matemática que organiza a rota de costura no eixo X pelo caminho mais curto, minimizando saltos e reduzindo o tempo de produção.",
    relatedTerms: ["Branching", "Ramificação", "TSP", "Otimização de Rota", "Cortes de Linha", "Tempo de Produção", "Wilcom"],
    tags: ["xtraveloptimization", "branching", "otimizacao", "caminhominimo", "produtividade", "software", "qualidade"]
  },
  {
    id: "x-reinforcement-underlay-cutwork-subponto-richelieu-x",
    code: "X-059",
    letter: "X",
    term: "X-Reinforcement Underlay for Cutwork & Richelieu — Subponto de Ancoragem em Grade X para Bordado Richelieu e Bordado Vazado",
    pronunciation: "éks-ri-in-fórs-ment án-der-lei for kát-wurk end ri-she-liê — sub-pon-tu de ri-she-li-e",
    level: "Avançado 🔴",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do estilo clássico europeu de bordado nobre 'Bordado Richelieu' (Cutwork / Point Coupé criado na França e Itália no século XVII) e da técnica de reforço em malha X.",
    summary: "Estrutura de micro-costuras em grade cruzada no eixo X que ancora e solda as bordas do tecido antes do corte dos vazados nos bordados rendados estilo Richelieu.",
    definition: "O X-Reinforcement Underlay for Cutwork & Richelieu (Subponto de Ancoragem em Grade X para Richelieu / Travamento Perimétrico de Bordado Vazado / Cutwork Lattice Underlay & Edge Seal Anchor) é a programação estrutural de pontos de base indispensável para a execução perfeita de peças vazadas e rendadas (como toalhas de mesa nobres, caminhos de mesa de linho e enxovais clássicos de bebê). Como o tecido é cortado e vazado por dentro das formas, as bordas cortadas desfiarão se não forem previamente travadas; o subponto em grade cruzada X consolida a trama do tecido com a entretela hidrossolúvel, criando uma base rígida sobre a qual o satim de acabamento é costurado.",
    technicalDetails: "A sequência opera em três fases de engenharia têxtil: 1) Uma linha de marcação perimétrica em ponto de corrida simples delimitando a janela de corte; 2) Uma grade de travamento cruzado em 'X' (Lattice Mesh com espaçamento de 1,2 mm e ângulo de 45°/-45°) que funde os fios de trama e urdume à entretela solúvel; 3) Uma costura satim estreita de segurança (0,8 mm de largura). Somente após essa selagem o operador corta o tecido interno com tesoura de ponta curva ou agulhas especiais de corte (Cutwork Needles).",
    beginnerExplanation: "O bordado Richelieu é aquele bordado clássico de realeza que tem pedaços vazados no tecido formando desenhos de renda lindos! Para o tecido não desfiar todo quando você cortar o buraquinho com a tesoura, a máquina faz uma costurinha em formato de gradezinha de 'X' antes. Ela segura todas as linhas do tecido presas bem firmes para o acabamento ficar perfeito e nunca desfiar!",
    howItWorks: [
      "1. A bordadeira monta o tecido de linho ou percal no bastidor com duas camadas de entretela hidrossolúvel pesada (Water Soluble Film de 80 micras).",
      "2. A máquina costura a linha guia de corte e o subponto de ancoragem em grade X (Lattice Underlay).",
      "3. A máquina emite um comando de parada automática (Stop) e o operador retira o bastidor.",
      "4. Com uma tesourinha de ponta curva afiada (tesoura de garça), o operador recorta e retira o tecido dentro do desenho com cuidado.",
      "5. Encaixa o bastidor de volta na máquina e aperta o botão de continuar.",
      "6. A máquina costura as pontes rendadas (Brides/Ilhoses) sobre a entretela solúvel e fecha as bordas com ponto satim denso e perfeito.",
      "7. Lava-se a peça em água corrente para dissolver o plástico solúvel: a peça vazada fica deslumbrante e eterna."
    ],
    applications: [
      "Toalhas de mesa nobres de linho puro e caminhos de mesa clássicos de jantar.",
      "Enxovais finos de berço, mantas de batizado e vestidos de daminha de honra.",
      "Bordados em cortinas de voal rendadas e peças de alta costura eclesiástica.",
      "Lenços de noiva, guardanapos de casamento e jogos americanos de luxo."
    ],
    characteristics: [
      "Travamento 100% blindado contra desfiamento de fibras têxteis após o corte.",
      "Suporte estrutural perfeito para a formação de ilhoses e pontes rendadas no ar.",
      "Acabamento aristocrático com alto valor comercial agregado no mercado de luxo."
    ],
    commonErrors: [
      "❌ Cortar o tecido antes do subponto em X ser costurado, desfiando as bordas e estragando a peça.",
      "❌ Cortar acidentalmente a entretela solúvel que fica por baixo ao recortar o tecido com a tesoura.",
      "❌ Usar entretela rasgável comum em vez de entretela hidrossolúvel lavável em água."
    ],
    troubleshootingTips: [
      "As bordas do tecido vazado desfiaram e saíram para fora do ponto satim: o subponto de ancoragem estava muito estreito; aumente a largura do subponto em grade X para pelo menos 1,5 mm no software.",
      "A tesoura furou o plástico solúvel ao cortar o tecido: utilize tesouras especiais de ponta curva para Richelieu (Duckbill / Curved Scissors) e apoie a ponta curva suavemente sobre o plástico sem forçar.",
      "O satim de fechamento afundou no vão cortado: aumente a densidade do satim para 0,38 mm e verifique se as duas camadas de plástico solúvel foram montadas bem esticadas no bastidor."
    ],
    dicaArtrelados: "O bordado Richelieu é um dos trabalhos mais valorizados e bem pagos do mundo do bordado! Para cortar o tecido de forma rápida e segura sem risco de furar o plástico de baixo: use uma tesourinha de ponta curva com pontas arredondadas e puxe o tecido recortado levemente para cima enquanto corta!",
    voceSabia: "O bordado Richelieu foi batizado em homenagem ao poderoso Cardeal Richelieu (primeiro-ministro da França no século XVII e personagem dos Três Mosqueteiros), que era tão apaixonado por essas rendas que usava golas monumentais de bordado vazado em todas as cerimônias da corte real do Rei Luís XIII!",
    practicalExercise: "Digitalize um pequeno círculo de 30 mm com subponto em grade X e satim de 3 mm ao redor. Borde sobre linho com plástico solúvel por baixo, pare a máquina, corte o miolo do círculo com a tesourinha e deixe a máquina finalizar o satim. Lave na água e encante-se com a sua primeira peça de Richelieu perfeita!",
    quickSummary: "Subponto em grade cruzada no eixo X que solda as bordas do tecido antes do corte manual, garantindo bordados vazados de Richelieu sem nenhum desfiamento.",
    relatedTerms: ["Richelieu", "Cutwork", "Bordado Vazado", "Entretela Hidrossolúvel", "Tesoura Curva", "Lattice Underlay", "Enxoval Nobre"],
    tags: ["xreinforcementunderlay", "richelieu", "cutwork", "bordadovazado", "subponto", "luxo", "renda"]
  },
  {
    id: "x-calibrated-needle-plate-slot-ranhura-calibrada-chapa-x",
    code: "X-060",
    letter: "X",
    term: "X-Calibrated Needle Plate Slot — Ranhura Calibrada do Eixo X na Chapa de Ponto & Alinhamento Anti-Fricção da Agulha",
    pronunciation: "éks-ká-li-brêi-ted ní-dol plêit slot — ra-nhu-ra ca-li-bra-da da cha-pa de pon-to",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'needle plate' (chapa de agulha usinada em aço temperado cromado) e 'calibrated slot' (orifício/ranhura oval milimetricamente dimensionada para passagem da agulha).",
    summary: "Orifício metálico usinado na chapa da máquina com formato oval calibrado no eixo X para dar folga de segurança contra deflexões de agulha em alta velocidade.",
    definition: "O X-Calibrated Needle Plate Slot (Ranhura Calibrada da Chapa de Ponto / Orifício Oval Anti-Impacto do Eixo X / Needle Plate Needle Hole Geometry & Clearance Throat) é a abertura usinada com ultraprecisão na chapa metálica de aço temperado instalada sobre a lançadeira da máquina de bordar. Em máquinas de bordar industriais de alta rotação, o orifício não é um furo circular perfeito, mas sim uma elipse ou ranhura retificada com maior folga no eixo horizontal X (diâmetro típico de 1,6 mm a 2,2 mm no eixo X contra 1,2 mm a 1,5 mm no eixo Y), projetada para permitir que a agulha penetre livremente mesmo quando sofre microdeflexão lateral causada pelo arraste do tecido durante pontos satim rápidos.",
    technicalDetails: "Durante a execução de pontos satim com amplitude horizontal de 4 mm a 7 mm a 1.000 PPM, a tensão lateral da linha superior exerce uma força de deflexão fletora na haste da agulha (Micro-Bending) no sentido do eixo X. A geometria calibrada da ranhura garante uma distância de segurança mínima de 0,35 mm entre a agulha e a borda de aço da chapa, impedindo que a agulha raspe na borda metálica, o que criaria rebarbas cortantes, aquecimento da chapa e ruptura contínua do fio por cisalhamento.",
    beginnerExplanation: "É o buraquinho de metal na chapa de ferro da máquina por onde a agulha entra para levar a linha até a bobina! Esse furinho é feito com um formato oval especial que dá um espacinho extra para a agulha passar mesmo quando ela enverga um tiquinho para os lados em bordados rápidos, evitando que a agulha raspe no metal e arrebente a linha!",
    howItWorks: [
      "1. A máquina costura pontos de satim largos em alta rotação (900 a 1.200 PPM).",
      "2. A agulha sofre uma microdeflexão elástica lateral no eixo X puxada pela linha de bordar.",
      "3. A agulha penetra suavemente no centro da ranhura calibrada da chapa sem tocar no metal.",
      "4. A ponta da lançadeira passa por baixo na folga calibrada e laça a linha superior com perfeição.",
      "5. A linha desliza pela borda espelhada e chanfrada da chapa sem sofrer nenhum atrito abrasivo.",
      "6. A agulha sobe suavemente sem vibrações residuais.",
      "7. A máquina mantém a costura contínua por horas a fio sem nenhuma quebra de linha por atrito de chapa."
    ],
    applications: [
      "Operação contínua em máquinas industriais multicabeçotes em alta rotação (1.000+ PPM).",
      "Bordados em materiais pesados e rígidos como couro legítimo, lona e bonés estruturados.",
      "Eliminação de problemas crônicos de desfiamento de linhas metálicas e fios finos calibre 60.",
      "Manutenção e substituição de chapas de agulha desgastadas ou rebarbadas por batidas antigas."
    ],
    characteristics: [
      "Usinagem em aço especial com tratamento térmico de cromo duro espelhado.",
      "Bordas internas polidas com raio de curvatura suave (Zero Burrs).",
      "Geometria oval calibrada para absorver deflexões laterais no eixo X."
    ],
    commonErrors: [
      "❌ Continuar bordando com uma chapa de agulha que tem marcas de batidas antigas de agulha com rebarbas ásperas de metal.",
      "❌ Usar chapa de furo redondo minúsculo de costura reta (1,0 mm) para bordar tecidos pesados em alta velocidade.",
      "❌ Limpar o furo da chapa com lixas grossas que alteram a geometria calibrada e estragam o polimento original."
    ],
    troubleshootingTips: [
      "A linha superior desfia e quebra sempre na mesma cabeça da máquina: a chapa de agulha está com uma micro-rebarba cortante no furo causada por uma agulha que quebrou anteriormente; desmonte a chapa e passe um fio dental com pasta de polir metal no orifício para espelhar a borda ou substitua a chapa.",
      "A agulha bate na borda da chapa e quebra: a chapa de ponto está mal parafusada ou ligeiramente torta no cabeçote; afrouxe os parafusos de fixação, alinhe a chapa com a agulha descida no centro e reaperte com firmeza.",
      "O tecido leve é 'puxado' para dentro do furo da chapa (Flagging): o furo da chapa está largo demais para aquele tecido fino; utilize uma chapa de furo menor ou coloque entretela mais firme por baixo da peça."
    ],
    dicaArtrelados: "A chapa de agulha é o coração do silêncio e da perfeição da sua máquina! Uma vez por mês, passe a ponta de uma meia-calça fina de mulher no furinho da chapa de agulha. Se a meia-calça puxar qualquer fiozinho, é sinal de que tem uma rebarba de metal ali que precisa de polimento imediato com pasta de polir!",
    voceSabia: "As chapas de agulha industriais de alta tecnologia recebem um polimento óptico com lixas diamantadas microscópicas tão perfeitas que o coeficiente de atrito é semelhante ao do gelo derretendo, permitindo que a linha deslize a mais de 30 metros por minuto sem esquentar!",
    practicalExercise: "Retire a chapa de ponto da sua máquina e passe a unha delicadamente ao redor do orifício por onde a agulha desce. Sinta a textura lisa e espelhada do metal. Veja como o furo tem um formato sutilmente ovalizado no eixo horizontal para acolher a agulha com total segurança.",
    quickSummary: "Orifício oval usinado e polido na chapa da máquina com folga calibrada no eixo X que impede o atrito e a quebra de agulhas e linhas em alta velocidade.",
    relatedTerms: ["Chapa de Ponto", "Needle Plate", "Rebarba de Agulha", "Deflexão da Agulha", "Polimento Diamantado", "PPM", "Hardware"],
    tags: ["xcalibratedneedleplate", "chapadeagulha", "hardware", "mecanica", "manutencao", "qualidade", "agulhas"]
  }
];

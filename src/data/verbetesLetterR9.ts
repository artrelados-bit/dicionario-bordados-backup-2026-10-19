import { Verbete } from "../types";

export const VERBETES_LETTER_R9: Verbete[] = [
  {
    id: "r-067-rotacao-de-matriz-em-90-180-e-alinhamento-por-angulo-livre",
    code: "R-067",
    term: "Rotação de Matriz em 90°, 180° e Alinhamento por Ângulo Livre (Design Rotation, 90°/180° Orientation & Free-Angle Alignment)",
    letter: "R",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim rotatio (giro em torno de um eixo) e matriz vetorial têxtil. Operação geométrica essencial em softwares CAD e painéis CNC.",
    summary: "Giro da matriz em 90°, 180° ou ângulos livres para caber no bastidor e compensar a direção de repuxo do tecido.",
    definition: "A Rotação de Matriz em 90°, 180° e Alinhamento Angular Livre (Design Rotation, Angular Coordinate Transformation & Free-Angle Alignment) é a transformação geométrica realizada no software de digitalização ou diretamente no painel IHM da máquina de bordar que altera a orientação angular da matriz em relação aos eixos cartesianos X/Y do bastidor. Essa operação é crucial por duas razões técnicas: 1) Otimização do campo útil do bastidor (ex: girar uma matriz retangular comprida de 18x13 cm em 90° para caber na vertical do bastidor padrão); e 2) Alinhamento da direção dos pontos cheios e tatami com o sentido de menor elasticidade da urdidura/trama do tecido, mitigando o efeito de repuxo (Pull Effect) e prevenindo franzimentos.",
    technicalDetails: "Precisão de rotação no painel: passos de 1°, 5°, 45° ou 90°. Transformação matricial: Matriz de rotação 2D [x' = x·cos(θ) - y·sin(θ); y' = x·sin(θ) + y·cos(θ)].",
    howItWorks: [
      "1. A bordadeira carrega no painel da máquina a matriz de um monograma comprido de toalha de banho com 180 mm de largura.",
      "2. O bastidor 13x18 encaixado no pantógrafo está posicionado fisicamente com o lado maior na vertical.",
      "3. A operadora clica no botão 'Rotacionar 90°' no painel touch-screen.",
      "4. A máquina gira todas as coordenadas de pontos instantaneamente, enquadrando o desenho perfeitamente dentro da margem de segurança do bastidor.",
      "5. Em toalhas com barrados inclinados, a bordadeira utiliza a rotação livre em passos de 1° para alinhar o desenho com a costura da renda.",
      "6. A máquina executa o teste de área (Trace) confirmando o alinhamento angular milimétrico.",
      "7. O bordado é executado com simetria e alinhamento impecável com a costura da peça."
    ],
    beginnerExplanation: "É o botão do painel da máquina ou do computador que gira o seu desenho de lado, de cabeça para baixo ou em qualquer ângulo que você quiser! Serve para fazer um desenho comprido caber certinho dentro do bastidor sem você precisar desmanchar a toalha ou para alinhar o bordado com o barrado do tecido.",
    applications: [
      "Enquadramento de matrizes retangulares compridas em bastidores 13x18, 14x20 ou 16x26",
      "Bordados em peças com cortes diagonais, golas em 'V' e bolsos enviesados",
      "Adaptação de matrizes para bonés utilizando bastidores cilíndricos com rotação de 180°",
      "Compensação da elasticidade de malhas girando o ângulo para a linha mais firme do tecido"
    ],
    commonErrors: [
      "❌ Girar o desenho em 180° para bordar um jaleco e esquecer que o bolso ficará de cabeça para baixo",
      "❌ Rotacionar uma matriz que já compensava o repuxo na horizontal e costurar em malha elástica sem ajustar a entretela",
      "❌ Esquecer de fazer o teste de traçado (Trace) após girar a matriz, batendo o calcador na borda plástica do bastidor"
    ],
    troubleshootingTips: [
      "Sempre execute a função 'Traçar Bastidor' (Trace / Trace Outline) logo após girar a matriz para confirmar que a agulha não tocará no aro",
      "Se você bordar um nome comprido na vertical em uma toalha, lembre-se de que a leitura deve começar de baixo para cima ou de cima para baixo conforme a dobra da toalha no banheiro",
      "Para alinhar com costuras inclinadas, use a função de 'Alinhamento por 2 Pontos' presente nos painéis modernos"
    ],
    dicaArtrelados: "Girar a matriz em 90° no painel é o truque de ouro para bordar nomes compridos em toalhas de rosto e banho sem precisar comprar bastidores gigantes caros! Você gira, borda com firmeza máxima e entrega um acabamento de luxo!",
    voceSabia: "Nas máquinas industriais de bonés, os arquivos são gravados intencionalmente girados em 180° de cabeça para baixo, pois o bastidor curvo de boné se move na direção oposta ao pantógrafo plano convencional.",
    practicalExercise: "Abra qualquer matriz no painel da sua máquina: clique no ícone de rotação e gire 90° para a direita e 90° para a esquerda; repare como o desenho se adapta ao formato do bastidor na tela!",
    quickSummary: "Recurso geométrico para girar a matriz em qualquer ângulo, adaptando o desenho ao bastidor e às linhas do tecido.",
    relatedTerms: [
      "Espelhamento (Mirroring)",
      "Quociente de Aspecto (Aspect Ratio)",
      "Campo Útil de Bordado",
      "Programação de Bordado"
    ],
    tags: [
      "r-067",
      "rotacao de matriz",
      "angulo livre",
      "orientacao",
      "bastidor",
      "painel",
      "software",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM. EmbroideryStudio e4 Elements: Coordinate Transformations & Rotational Geometry. Sydney, 2023.",
      "ARTRELADOS. Guia de Operação de Painéis e Alinhamentos Angulares no Bordado Computadorizado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "r-068-rolamento-de-esferas-blindado-e-suportes-de-mancal",
    code: "R-068",
    term: "Rolamento de Esferas Blindado (2RS/ZZ) e Suportes de Mancal do Eixo Principal (Deep Groove Ball Bearings & Main Shaft Housing)",
    letter: "R",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina e Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês roulement (movimento de girar) e do alemão kugellager. Mecânica de precisão da revolução industrial aperfeiçoada no século XX.",
    summary: "Rolamentos de aço com vedação dupla que sustentam o eixo principal a 1.200 RPM sem atrito, vibração ou folgas.",
    definition: "Os Rolamentos de Esferas de Ranhura Profunda com Blindagem Dupla (Deep Groove Ball Bearings com vedações 2RS de borracha nitrílica ou ZZ de aço estampado) e seus respectivos Mancais de Fixação Estrutural (Main Shaft Bearing Housings) formam o sistema mecânico de sustentação rotativa do eixo superior e do eixo inferior da máquina de bordar. Fabricados em aço-cromo temperado com grau de precisão ABEC-5 ou superior e folga radial C3, esses rolamentos absorvem cargas radiais e axiais geradas pelo movimento alternativo da biela da agulha e da lançadeira, mantendo rotação perfeitamente concêntrica a velocidades de até 1.200 RPM com coeficiente de atrito mínimo (< 0,0015) e vida útil estimada superior a 20.000 horas de operação contínua.",
    technicalDetails: "Norma de fabricação: ISO 15 / DIN 625. Classe de precisão: ABEC 5 / ISO P5 (excentricidade radial máxima < 5 µm). Tipo de graxa interna: Poliéster sintético com sabão de lítio de alta velocidade (Grau NLGI 2).",
    howItWorks: [
      "1. O servomotor principal transmite o torque ao eixo através da correia sincronizadora dentada.",
      "2. O eixo de aço retificado gira apoiado sobre 3 a 5 rolamentos de esferas blindados distribuídos ao longo do chassi.",
      "3. As esferas de aço polidas ao espelho rolam entre a pista interna e a pista externa banhadas na graxa sintética selada a vácuo.",
      "4. As vedações laterais de borracha (2RS) impedem a entrada de fiapos de linha de poliéster, poeira de entretela e umidade dentro das pistas.",
      "5. O eixo gira com maciez absoluta, sem folgas radiais e com nível sonoro imperceptível.",
      "6. A força mecânica chega às barras de agulha e à lançadeira com rigidez estática total.",
      "7. A máquina mantém o sincronismo de ponto perfeito sem perda de sincronia mesmo após anos de produção intensa."
    ],
    beginnerExplanation: "São aquelas rodinhas de aço brilhantes com bolinhas de ferro dentro que ficam escondidas dentro da estrutura da máquina segurando o eixo que gira tudo! Eles são blindados dos lados para não entrar poeira nem fiapo de linha e vêm com uma graxa especial de fábrica para a máquina rodar macia, silenciosa e sem fazer barulho de ferro raspando.",
    applications: [
      "Sustentação rotativa de alta velocidade do eixo principal do cabeçote e eixo da lançadeira",
      "Redução drástica de vibrações estruturais e ruídos mecânicos no ateliê",
      "Garantia de alinhamento coaxial rígido entre motor, cabeçotes e sistema de corte",
      "Substituição preventiva em máquinas industriais com mais de 10 anos de uso"
    ],
    commonErrors: [
      "❌ Jogar desengraxante agressivo ou solvente na lateral da máquina, lavando a graxa selada de dentro dos rolamentos blindados",
      "❌ Bater com martelo comum de ferro no eixo ao fazer manutenções, marcando as pistas das esferas (efeito Brinell)",
      "❌ Usar rolamentos comuns de baixa qualidade sem blindagem em substituições mecânicas"
    ],
    troubleshootingTips: [
      "Se a máquina apresentar um zumbido grave contínuo que aumenta conforme a velocidade sobe, um dos rolamentos do eixo principal pode estar desgastado",
      "Nunca tente abrir a tampa de vedação preta de borracha (2RS) dos rolamentos blindados; eles são permanentemente lubrificados de fábrica",
      "Em revisões de bancada, gire o eixo com as pontas dos dedos: o movimento deve ser macio e livre de qualquer sensação de 'areia' ou travamento"
    ],
    dicaArtrelados: "A robustez desses rolamentos de alta precisão é o que permite que uma máquina industrial de bordar trabalhe 12 horas por dia, 6 dias por semana, durante mais de 15 anos sem folgas mecânicas!",
    voceSabia: "O primeiro projeto documentado de um rolamento de esferas para reduzir o atrito rotativo foi desenhado pelo gênio renascentista Leonardo da Vinci por volta de 1498 em seus cadernos sobre máquinas voadoras!",
    practicalExercise: "Gire o volante da sua máquina de bordar desligada com apenas dois dedos: sinta como o giro é suave, sem trancos e sem folgas laterais; isso é a mágica dos rolamentos de precisão em ação!",
    quickSummary: "Conjuntos de esferas de aço blindadas que sustentam o eixo da máquina com giro suave e sem atrito a 1.200 RPM.",
    relatedTerms: [
      "Placa-Guia de Barra de Agulhas e Buchas Autolubrificantes",
      "Ruído Mecânico da Máquina — Diagnóstico Acústico",
      "Servomotor de Eixo X e Y",
      "Mecânica da Máquina e Manutenção"
    ],
    tags: [
      "r-068",
      "rolamento",
      "mancal",
      "eixo principal",
      "blindagem",
      "esferas de aco",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "SKF GROUP. Rolling Bearings in Textile Machinery and Precision High-Speed Applications. Gotemburgo, 2022.",
      "TAJIMA. Mechanical Components & Main Shaft Bearing Assembly Manual. Nagoya, 2023."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "r-069-rendado-richelieu-computadorizado-e-matrizes-com-corte",
    code: "R-069",
    term: "Rendado Richelieu Computadorizado e Matrizes com Corte e Caseado Automático (Computerized Richelieu Cutwork & Automatic Buttonhole Eyelets)",
    letter: "R",
    level: "Avançado 🔴",
    category: "Técnicas de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Em homenagem ao Cardeal Richelieu, primeiro-ministro da França no século XVII e apaixonado colecionador de rendas nobres com recortes vazados.",
    summary: "Bordado clássico nobre com vazados no tecido unidos por pontes de ponto cheio (bastonetes), feito com entretela solúvel.",
    definition: "O Rendado Richelieu Computadorizado, Bordado Vazado e Caseamento Automático de Ilhoses (Computerized Richelieu Cutwork, Openwork Lace & Eyelet Embroidery Digitizing) é a transposição digital da nobre arte renascentista de bordado com cortes vazados no tecido de linho ou cambraia de algodão. O sequenciamento programado envolve: 1) Costura de marcação perimétrica dos vazados; 2) Pausa automática no painel para recorte manual cuidadoso do tecido interno com tesoura curva pelicano; 3) Formação de pontes estruturais em ponto cheio cruzado (Bastonetes/Brides Richelieu) sobre entretela hidrossolúvel de base; e 4) Cobertura perimétrica com ponto cheio denso com sob-ponto reforçado e denteado de fixação, criando toalhas de mesa, camisas e enxovais de luxo com transparências geométricas perfeitas.",
    technicalDetails: "Largura dos bastonetes (pontes) Richelieu: 1,5 mm a 2,2 mm. Densidade do cordão de acabamento: 0,35 mm a 0,38 mm com sob-ponto em zigue-zague duplo. Tipo de entretela obrigatória: Hidrossolúvel pesada (Water-Soluble 80g/m²).",
    howItWorks: [
      "1. A bordadeira monta o tecido de linho no bastidor junto com uma folha de entretela hidrossolúvel grossa de suporte.",
      "2. A máquina executa a costura de contorno simples (Trace/Placement) delineando todas as partes que serão abertas.",
      "3. A máquina pausa automaticamente e move o bastidor para a frente.",
      "4. A artesã usa uma tesoura de ponta curvada (Pelicano) e recorta cuidadosamente apenas o tecido de linho de dentro dos buracos, deixando a entretela solúvel intacta por baixo.",
      "5. Ao apertar o botão de iniciar, a máquina tece os 'bastonetes' (pontes de linha que cruzam os buracos abertos).",
      "6. Em seguida, cobre todas as bordas cortadas com um ponto cheio grosso e brilhante, travando 100% dos fios desfiados.",
      "7. A peça é lavada em água morna: a entretela derrete e revela um rendado nobre com vazados vazios de beleza aristocrática."
    ],
    beginnerExplanation: "É aquele bordado clássico chique de toalha de banquete da vovó que tem buraquinhos vazados no tecido contornados com cordões de linha brilhante e pontinhas que seguram o tecido! A máquina marca o buraco, você corta com a tesourinha e a máquina cobre tudo com um ponto cheio perfeito, parecendo uma renda de rainha!",
    applications: [
      "Toalhas de mesa nobres, caminhos de mesa de banquete e jogos americanos de linho puro",
      "Enxovais de bebê de alta-costura (vestidos de batizado, mantas de seda e fronhas de berço)",
      "Camisas de alfaiataria feminina e batas rendadas de moda nobre",
      "Panos de prato e toalhas de lavabo de luxo com acabamento recortado"
    ],
    commonErrors: [
      "❌ Cortar a entretela solúvel junto com o tecido na hora do recorte, fazendo os pontos caírem no vazio sem apoio",
      "❌ Usar tesoura cega de ponta grossa e picotar as linhas de marcação",
      "❌ Usar entretela rasgável comum em vez de entretela hidrossolúvel (fica impossível tirar o papel de dentro dos furinhos)"
    ],
    troubleshootingTips: [
      "Utilize sempre tesoura especial de ponta curvada ou tesoura pelicano para cortar o tecido rente à costura sem furar a entretela de baixo",
      "Use entretela hidrossolúvel pesada (80 micras) ou duas camadas da fina para dar firmeza aos bastonetes no ar",
      "Configure uma parada automática com comando 'Stop' no software logo após a costura de marcação do corte"
    ],
    dicaArtrelados: "O bordado Richelieu é a técnica mais valorizada e cara de todo o mercado têxtil! Uma toalha de mesa ou conjunto de lavabo em Richelieu de linho pode ser vendido por 3 a 5 vezes mais do que um bordado comum!",
    voceSabia: "O Cardeal Richelieu na França do século XVII decretou leis rígidas proibindo a importação de rendas italianas de Veneza para forçar o desenvolvimento das manufaturas de bordado francesas, dando origem ao estilo Richelieu que virou patrimônio cultural francês.",
    practicalExercise: "Programe um círculo com 3 cm no seu software: coloque uma linha de contorno simples, um comando de parada e um ponto cheio na borda. Borde com entretela solúvel, recorte o meio com a tesourinha, termine e lave para ver seu primeiro vazado Richelieu!",
    quickSummary: "Técnica clássica com aberturas vazadas no tecido unidas por pontes de ponto cheio sobre entretela hidrossolúvel.",
    relatedTerms: [
      "Entretela Hidrossolúvel (Water-Soluble)",
      "Bordado Rechelieu",
      "Ponto Cheio (Satin Stitch)",
      "Técnicas de Bordado"
    ],
    tags: [
      "r-069",
      "richelieu",
      "rendado",
      "cutwork",
      "vazado",
      "linho",
      "alta costura",
      "artrelados"
    ],
    bibliographicReferences: [
      "ROYAL SCHOOL OF NEEDLEWORK. Cutwork & Richelieu Embroidery: Traditional Techniques. London, 2022.",
      "ARTRELADOS. O Nobre Bordado Richelieu Digital: Segredos de Programação, Recorte e Acabamento Perfeito. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "r-070-rolo-de-entretela-suportes-dispensadores-e-cortadores",
    code: "R-070",
    term: "Rolo de Entretela: Suportes Dispensadores e Cortadores Ergonômicos (Roll Stabilizer Dispenser, Rotary Cutters & Storage Racks)",
    letter: "R",
    level: "Iniciante 🟢",
    category: "Insumos e Acessórios",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do design de processos produtivos, ergonomia de corte industrial e otimização de fluxo Lean Manufacturing.",
    summary: "Suportes de parede para bobinas de 50 a 100m e cortadores rotativos que reduzem o custo de insumos em até 40%.",
    definition: "O Sistema de Gestão de Rolos de Entretela, Suportes Dispensadores Giratórios e Estação de Corte Ergonômico (Bulk Stabilizer Roll Dispenser, Wall-Mounted Racks & Rotary Cutting Station) é o conjunto de equipamentos e práticas de oficina voltados para a estocagem suspensa e corte seriado de bobinas industriais de estabilizadores não-tecidos (TNT de 50m a 100m com larguras de 25 cm, 30 cm ou 50 cm). A estação incorpora tubos giratórios de parede ou mesa, réguas de corte com guias milimetradas e cortadores rotativos com lâminas circulares de 45 mm em aço tungstênio, permitindo fracionar até 20 folhas simultâneas no esquadro exato de cada tamanho de bastidor em segundos, reduzindo em até 40% os custos com estabilizadores e eliminando sobras de aparas.",
    technicalDetails: "Diâmetro padrão do mandril de papelão: 2 polegadas (50,8 mm). Diâmetro da lâmina do cortador rotativo: 45 mm em aço SKS-7. Economia financeira média em relação a folhas pré-cortadas: 35% a 55%.",
    howItWorks: [
      "1. A artesã instala o suporte dispensador com eixo de alumínio na parede ao lado da mesa de montagem de bastidores.",
      "2. Encaixa os três rolos fundamentais do ateliê: Entretela Rasgável 80g, Entretela de Recorte (Cut-Away) e Filme Hidrossolúvel.",
      "3. Puxa a ponta da entretela sobre a base de corte verde autorregenerativa (Cutting Mat).",
      "4. Alinha com a régua de acrílico na marca do bastidor desejado (ex: 20 cm para bastidor 13x18).",
      "5. Passa o cortador rotativo circular com um único movimento suave e firme da mão.",
      "6. A folha sai no esquadro perfeito, sem bordas denteadas e no tamanho milimétrico exato.",
      "7. O rolo suspenso fica livre de poeira e pronto para a próxima peça com produtividade máxima."
    ],
    beginnerExplanation: "É ter um suporte na parede (como um porta-rolo de papel toalha gigante) onde você coloca os rolos grandões de entretela de 100 metros! Você puxa a folha, passa aquele cortador de rodinha afiado com a régua e corta um pedaço no tamanho exatinho do seu bastidor em 2 segundos sem gastar dinheiro à toa com sobras!",
    applications: [
      "Estocagem suspensa e arejada de bobinas de entretelas rasgáveis, resinadas e solúveis em água",
      "Corte seriado rápido de dezenas de folhas de entretela padronizadas para a produção da semana",
      "Economia direta no custo dos insumos em ateliês e fábricas de bordado",
      "Organização e limpeza do ambiente de trabalho sem caixas ou rolos espalhados pelo chão"
    ],
    commonErrors: [
      "❌ Guardar os rolos de entretela encostados em cantos úmidos do chão, mofando as camadas externas",
      "❌ Rasgar a entretela na mão ou cortar no 'olhômetro' com tesouras cegas, gerando pedaços tortos e jogando retalhos caros fora",
      "❌ Deixar o rolo de plástico hidrossolúvel exposto ao calor e sol, ressecando a película"
    ],
    troubleshootingTips: [
      "Mantenha uma base de corte milimetrada (A3 ou A2) fixada na sua bancada para guiar o corte das folhas sem precisar medir com fita métrica",
      "Troque a lâmina circular do cortador rotativo assim que sentir que precisa fazer força para cortar",
      "Identifique cada rolo no suporte com uma fita colorida indicando a gramatura (ex: 40g, 60g, 80g)"
    ],
    dicaArtrelados: "Comprar entretela em rolo de 100 metros e ter um cortador rotativo na bancada é o passo que transforma uma hobbysta em uma dona de ateliê profissional! Você economiza centenas de reais todos os meses em insumos!",
    voceSabia: "O cortador rotativo com lâmina circular giratória de segurança (Rotary Cutter) foi inventado em 1979 pela empresa japonesa OLFA para a indústria têxtil, revolucionando para sempre o corte de tecidos e entretelas no mundo inteiro.",
    practicalExercise: "Calcule quantas folhas para o seu bastidor 13x18 saem de um rolo de entretela de 30 cm x 100 metros: são mais de 500 folhas perfeitas por uma fração do preço dos pacotinhos prontos!",
    quickSummary: "Suporte de parede e cortador rotativo para armazenar e cortar entretelas sob medida com economia de até 40%.",
    relatedTerms: [
      "Entretela Rasgável (Tear-Away)",
      "Entretela de Recorte (Cut-Away)",
      "Rolo de Entretela",
      "Insumos e Acessórios"
    ],
    tags: [
      "r-070",
      "rolo de entretela",
      "dispensador",
      "cortador rotativo",
      "organizacao",
      "economia",
      "insumos",
      "artrelados"
    ],
    bibliographicReferences: [
      "OLFA CORPORATION. Rotary Cutting Safety, Ergonomics & Fabric Layer Processing Guide. Osaka, 2023.",
      "ARTRELADOS. Gestão e Economia de Insumos: Como Montar uma Estação de Corte de Entretelas Profissional. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "r-071-rele-de-estado-solido-ssr-e-controle-de-potencia",
    code: "R-071",
    term: "Relé de Estado Sólido (SSR) e Controle de Potência de Solenoides (Solid State Relay / SSR & Actuator Power Drive)",
    letter: "R",
    level: "Avançado 🔴",
    category: "Eletrônica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês Solid State Relay (relé de estado sólido) e da eletrônica de semicondutores e tiristores/MOSFETs desenvolvida nos anos 1970.",
    summary: "Chave eletrônica silenciosa e sem contatos mecânicos que aciona os solenoides de corte e trava de agulha com segurança.",
    definition: "O Relé de Estado Sólido (Solid State Relay - SSR) e os Módulos de Acionamento de Potência de Solenoides (Actuator MOSFET/IGBT Power Drivers) são dispositivos eletrônicos semicondutores que realizam o chaveamento elétrico de alta velocidade para acionar os atuadores eletromecânicos da máquina de bordar (solenoides de corte de linha, solenoides de retenção/Picker, travas pneumáticas de bastidor e lâmpadas LED). Diferente dos relés mecânicos tradicionais com contatos móveis que sofrem desgaste por faíscas elétricas, o SSR utiliza optoacopladores para isolamento galvânico total entre a placa lógica de processamento e os circuitos de alta corrente (24V/48V DC), permitindo milhões de acionamentos instantâneos (< 1 ms) sem faíscas, sem ruído acústico e sem queima de placas.",
    technicalDetails: "Tensão de isolamento óptico: > 2.500 V RMS. Tempo de resposta de chaveamento: < 0,5 ms. Vida útil de chaveamento: > 100 milhões de ciclos (praticamente infinita sob condições nominais).",
    howItWorks: [
      "1. A máquina conclui o bordado de uma cor e o processador DSP envia o comando lógico de 5V para o corte de linha.",
      "2. O sinal ativa o LED infravermelho interno do optoacoplador dentro do relé de estado sólido.",
      "3. O fototransistor capta o feixe de luz e dispara a comporta do transistor de potência MOSFET.",
      "4. O SSR fecha o circuito de 24V enviando uma pulsação de alta corrente para o solenoide da faca de corte.",
      "5. O solenoide dispara o êmbolo mecânico puxando a faca móvel em 20 milissegundos.",
      "6. A linha é cortada com precisão cirúrgica sem gerar nenhum arco elétrico ou ruído na placa de computador.",
      "7. O diodo de roda livre (Flyback Diode) dissipa a corrente indutiva reversa, protegendo o sistema contra picos de voltagem."
    ],
    beginnerExplanation: "É um 'interruptor eletrônico inteligente' que não tem pecinhas soltas nem faz barulho de 'clique'! Ele recebe a ordem do computador da máquina e liga os motores fortes de corte de linha e trocas de agulha com a velocidade da luz, protegendo a placa da máquina contra curtos-circuitos e queimas de energia!",
    applications: [
      "Chaveamento rápido e sem desgaste dos solenoides do sistema de corte automático de linha",
      "Acionamento do solenoide do pegador de linha superior (Picker Solenoid)",
      "Isolamento galvânico de proteção entre placas de alta potência e microprocessadores lógicos",
      "Controle de iluminação de lâmpadas LED de alta intensidade no cabeçote de costura"
    ],
    commonErrors: [
      "❌ Curto-circuito acidental nos fios do solenoide ao mexer na máquina ligada, sobrecarregando o canal do driver MOSFET",
      "❌ Substituir solenoides de corte por modelos com resistência inadequada (Ohms), drenando corrente acima do limite térmico do SSR",
      "❌ Trabalhar com a máquina sem aterramento elétrico adequado na tomada"
    ],
    troubleshootingTips: [
      "Se o corte de linha parar de disparar mas a faca mecânica estiver livre e limpa, verifique na placa de drivers se o LED indicador do canal do solenoide acende",
      "Sempre desligue a chave geral da máquina da tomada antes de desconectar ou testar qualquer solenoide no chassi",
      "Utilize um multímetro na escala de continuidade e resistência para testar se a bobina do solenoide está em curto ou aberta"
    ],
    dicaArtrelados: "A tecnologia dos relés de estado sólido é a razão pela qual as máquinas modernas conseguem dar 50 cortes de linha por minuto em um bordado cheio de letrinhas sem falhar nem queimar peças eletrônicas!",
    voceSabia: "Os relés de estado sólido com isolamento óptico foram criados originalmente para os sistemas de controle das naves espaciais do programa Apollo da NASA, onde a ausência de faíscas elétricas era vital para evitar explosões em cabines com oxigênio puro!",
    practicalExercise: "Observe a sua máquina cortando a linha no final de uma letra: perceba a rapidez instantânea do disparo da faca sem você ouvir nenhum barulho de relé mecânico na placa!",
    quickSummary: "Chave eletrônica semicondutora com isolamento óptico que aciona solenoides de corte e atuadores com velocidade e segurança.",
    relatedTerms: [
      "Hardware de Controle DSP e Placa-Mãe",
      "Osciloscópio Digital e Diagnóstico de Sinais",
      "Mecanismo de Corte de Linha",
      "Eletrônica da Máquina"
    ],
    tags: [
      "r-071",
      "ssr",
      "rele de estado solido",
      "solenoide",
      "mosfet",
      "corte de linha",
      "eletronica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TEXAS INSTRUMENTS. Solid State Relays and High-Side Solenoid Driver Circuits for Industrial Applications. Dallas, 2023.",
      "BARUDAN CO. Electrical Troubleshooting & Solenoid Drive Electronics Service Manual. Ichinomiya, 2022."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "r-072-rastreabilidade-de-matrizes-e-catalogacao-por-pastas-digitais",
    code: "R-072",
    term: "Rastreabilidade de Matrizes e Catalogação por Pastas Digitais e Tags (Embroidery File Cataloging, Metadata Tagging & Backup Hierarchy)",
    letter: "R",
    level: "Iniciante 🟢",
    category: "Gestão do Ateliê e Produção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da ciência da informação, arquitetura de dados e gestão documental aplicada a ateliês digitais de personalização.",
    summary: "Sistema organizado de pastas, nomes padronizados e backup em nuvem para achar qualquer matriz em 5 segundos.",
    definition: "A Rastreabilidade de Matrizes, Estrutura de Catalogação Digital e Hierarquia de Backups em Nuvem (Embroidery File Asset Management, Metadata Tagging & Cloud Backup Hierarchy) é a metodologia sistemática de organização de arquivos de bordado (.PES, .DST, .EMB, .JEF) no computador, pendrives e servidores do ateliê. A estrutura organiza os arquivos em uma árvore lógica padronizada: [CATEGORIA > TEMA > TAMANHO_BASTIDOR > NOME_DO_ARQUIVO], utilizando regras de nomenclatura descritiva (ex: 'Infantil_UrsinhoAviador_13x18_12k.pes'), catálogo visual de prévias em PDF e sincronização automática em nuvem (Google Drive / OneDrive), eliminando perdas de arquivos e garantindo localização de qualquer matriz em menos de 10 segundos.",
    technicalDetails: "Regra de nomenclatura padronizada: [Tema]_[NomeDoDesenho]_[Dimensao]_[Formato]. Ex: Floral_RosasDoce_10x10_15k.pes. Frequência de backup recomendada: Backup diário automático em nuvem + Backup semanal em HD externo.",
    howItWorks: [
      "1. A bordadeira compra uma coleção de matrizes de safari para bebê em uma loja online.",
      "2. Em vez de deixar o arquivo na pasta 'Downloads' bagunçada, move imediatamente para a pasta '01_ENXOVAL_BEBE > 02_SAFARI'.",
      "3. Renomeia os arquivos salvando o formato original editável (.EMB) e o formato compilado para a máquina (.PES).",
      "4. Salva a imagem de catálogo visual com a tabela de cores de linha dentro da mesma pasta.",
      "5. O programa de backup em nuvem sincroniza a pasta automaticamente nos servidores seguros.",
      "6. Quando a cliente pede o bordado de um leãozinho 6 meses depois, a artesã digita 'leao 13x18' na busca do computador e localiza a matriz em 3 segundos.",
      "7. Envia para o pendrive e inicia o bordado sem nenhum estresse."
    ],
    beginnerExplanation: "É o jeito certinho de arrumar as suas matrizes de bordado dentro do computador em pastinhas organizadas (como 'Bebê', 'Batizado', 'Flores', 'Cozinha') com nomes fáceis de achar e cópia salva na internet! Isso evita aquele desespero de perder horas caçando onde foi parar aquela matriz linda que a cliente pediu!",
    applications: [
      "Organização de acervos com mais de 10.000 matrizes de bordado no computador",
      "Recuperação instantânea de matrizes de clientes antigos para reposição de pedidos",
      "Proteção total contra queima de computadores ou corrupção de pendrives",
      "Criação de catálogos visuais em PDF no celular para mostrar opções para as clientes"
    ],
    commonErrors: [
      "❌ Deixar todas as matrizes soltas dentro da pasta 'Downloads' ou na 'Área de Trabalho' com nomes estranhos como 'matriz123.pes'",
      "❌ Guardar matrizes importantes apenas em um único pendrive barato que pode queimar a qualquer momento",
      "❌ Apagar o arquivo original editável (.EMB) e guardar apenas o arquivo compilado da máquina (.PES/.DST)"
    ],
    troubleshootingTips: [
      "Guarde SEMPRE o arquivo original editável da matriz (.EMB) junto com o arquivo de máquina (.PES/.DST); se precisar mudar uma letra no futuro, será muito mais fácil",
      "Ative o backup automático gratuito do Google Drive ou OneDrive na sua pasta principal de bordados",
      "Crie um PDF de catálogo visual com fotinhas dos bordados prontos para enviar pelo WhatsApp para as clientes escolherem"
    ],
    dicaArtrelados: "Ter suas matrizes 100% organizadas em pastinhas com nomes claros é como ter um ateliê com todas as gavetas etiquetadas! Você ganha agilidade, atende a cliente em minutos pelo celular e nunca mais passa aperto!",
    voceSabia: "Bordadeiras que não organizam suas matrizes perdem em média 3 horas por semana apenas procurando arquivos perdidos no computador ou recomprando matrizes que já tinham comprado antes!",
    practicalExercise: "Crie hoje mesmo 5 pastas principais no seu computador: 1_Bebê e Infantil, 2_Casamento e Noivas, 3_Cozinha e Lar, 4_Monogramas e Fontes, 5_Logos e Empresas. Mova suas matrizes para lá e sinta o alívio da organização!",
    quickSummary: "Método de organização de matrizes em pastas lógicas, nomes padronizados e backup em nuvem para achar arquivos em segundos.",
    relatedTerms: [
      "Software de Digitalização",
      "Pendrive para Máquina de Bordar",
      "Planilha de Ordem de Serviço (OS)",
      "Gestão do Ateliê e Produção"
    ],
    tags: [
      "r-072",
      "rastreabilidade",
      "catalogacao",
      "pastas digitais",
      "backup",
      "organizacao de matrizes",
      "gestao",
      "artrelados"
    ],
    bibliographicReferences: [
      "ARTRELADOS. Organização Digital de Ateliês: Como Catalogar Milhares de Matrizes e Nunca Mais Perder Arquivos. São Paulo, 2024.",
      "DIGITAL EMBROIDERY GUILD. Best Practices for Embroidery Asset Management & File Archiving. Atlanta, 2022."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "r-073-rebobinamento-automatico-de-bobina-e-medidores-de-tensao",
    code: "R-073",
    term: "Rebobinamento Automático de Bobina e Medidores de Tensão de Carretilha (Pre-Wound Bobbin Winder, Tension Gauge & Spooling Physics)",
    letter: "R",
    level: "Intermediário 🟡",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da mecânica têxtil aplicada à formação de bobinas e da metrologia de tensão de fios (TOW - Tension on Winding).",
    summary: "Como encher carretilhas com tensão constante ou usar bobinas prontas industriais (Pre-Wound) para eliminar nós no avesso.",
    definition: "O Sistema de Rebobinamento Automático de Bobinas Inferiores e Metrologia de Tensão de Carretilha (Electric Bobbin Winding Station, Pre-Wound Magnetic Bobbins & TOW Tension Gauge Calibration) é o processo operacional e ferramental responsável pelo enrolamento uniforme da linha de bobina (fio 100% poliéster ou poliamida 60/2 ou 70/2) dentro do carretel metálico ou plástico de 20 mm. O uso de bobinadores elétricos independentes com discos tensores calibrados garante que a linha seja distribuída em espiras paralelas sem conicidades, sem estufamento lateral e com tensão elástica homogênea (medida com tensiômetro TOW entre 20g e 25g), evitando que a bobina trave na caixa de lançadeira e garantindo nós perfeitos no verso do bordado.",
    technicalDetails: "Tensão de bobina ideal na caixa de lançadeira (TOW Gauge): 22g a 28g de tração. Capacidade média de fio: 80 a 100 metros por carretilha cheia à mão vs. 120 a 140 metros em bobinas prontas industriais prensadas a vácuo (Pre-Wound Bobbins).",
    howItWorks: [
      "1. A bordadeira utiliza um bobinador elétrico de mesa independente para encher 10 carretilhas antes de começar a produção.",
      "2. Passa a linha fina de bobina pelos discos tensores metálicos do bobinador.",
      "3. Enrola 3 voltas manuais no carretel e aciona o motor elétrico de alta velocidade.",
      "4. O guia oscilante distribui o fio de um lado ao outro do carretel em camadas perfeitamente planas.",
      "5. O sensor mecânico desliga o motor automaticamente quando a carretilha atinge 85% da sua capacidade.",
      "6. A operadora insere a bobina na caixa de bobina e confere a descida da linha com o 'teste da gota' ou tensiômetro de precisão.",
      "7. A máquina borda milhares de pontos sem nenhuma laçada frouxa ou arrebentamento de linha inferior."
    ],
    beginnerExplanation: "É o jeito certo de encher as carretilhas (as bobinas de baixo da máquina) para elas ficarem retinhas, firminhas e com a quantidade certa de linha! Carretilha cheia torta ou frouxa demais é o maior motivo de a linha embolar toda no avesso do bordado!",
    applications: [
      "Enchimento seriado e padronizado de carretilhas para lotes grandes de produção",
      "Uso de carretilhas prontas industriais (Pre-Wound Bobbins) com núcleo magnético ou laterais de papelão",
      "Regulagem de precisão da tensão do parafuso da caixa de bobina",
      "Prevenção de embolamentos e nós na parte inferior da lançadeira"
    ],
    commonErrors: [
      "❌ Encher a bobina com linha de bordar superior grossa colorida em vez da linha fina própria de bobina (fio 60 ou 70)",
      "❌ Encher a carretilha frouxa como uma esponja mole, fazendo a linha travar e embolar embaixo",
      "❌ Encher a bobina até transbordar pelas bordas plásticas, fazendo a carretilha raspar na tampa da máquina"
    ],
    troubleshootingTips: [
      "Aperte a bobina cheia entre os dedos: ela deve estar durinha e firme como um toco de madeira, nunca fofa ou macia",
      "Encha a carretilha até no máximo 85% da borda para não raspar no teto da caixa de bobina",
      "Experimente usar 'Bobinas Prontas' (Pre-Wound Bobbins) no seu ateliê: elas vêm com 40% mais linha prensada e tensão uniforme de fábrica"
    ],
    dicaArtrelados: "Tirar 15 minutos na segunda-feira de manhã para encher 10 carretilhas de uma vez só vai fazer a sua semana render o dobro! Você só troca a carretilha quando a linha acabar e não perde tempo parando a produção no meio de um bordado!",
    voceSabia: "As bobinas prontas com núcleo magnético (Magnetic Core Bobbins) possuem um pequeno ímã na base que gruda no fundo da caixa de lançadeira de aço, impedindo que a carretilha gire em falso (Backlash) quando a máquina corta a linha a 1.000 RPM!",
    practicalExercise: "Pegue uma carretilha cheia do seu ateliê e aperte com a unha: se ela estiver molenga e a unha afundar, rebobine ela de novo passando bem firme pelos discos de tensão do bobinador!",
    quickSummary: "Enchimento correto de carretilhas com tensão firme e paralela para evitar nós e embolamentos na lançadeira.",
    relatedTerms: [
      "Caixa de Bobina (Bobbin Case)",
      "Linha de Bobina (Bobbin Thread)",
      "Lançadeira Rotativa",
      "Operação da Máquina"
    ],
    tags: [
      "r-073",
      "rebobinamento",
      "carretilha",
      "bobina",
      "pre wound",
      "tensao de bobina",
      "operacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "FIL-TEC / HAB+DASH. Magnetic Core Pre-Wound Bobbins & Spooling Tension Engineering. Hagerstown, 2023.",
      "ARTRELADOS. Segredos da Tensão Perfeita: Linha de Bobina, Carretilhas e Ponto Impecável. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "r-074-relatorio-pos-venda-e-pesquisa-de-satisfacao-de-clientes",
    code: "R-074",
    term: "Relatório Pós-Venda e Pesquisa de Satisfação de Clientes no Ateliê (Post-Sale Follow-up, Client Review System & Referral Growth)",
    letter: "R",
    level: "Iniciante 🟢",
    category: "Gestão do Ateliê e Produção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do marketing de relacionamento (CRM - Customer Relationship Management) e da metodologia de Net Promoter Score (NPS) aplicada ao artesanato de luxo.",
    summary: "Mensagem carinhosa após a entrega que encanta a cliente, pede fotos, gera avaliações 5 estrelas e atrai novos pedidos.",
    definition: "O Relatório de Pós-Venda, Protocolo de Acompanhamento de Entrega e Sistema de Fidelização de Clientes (Post-Sale Follow-up Protocol, Client Satisfaction Survey & Organic Referral Engine) é a prática estratégica de atendimento estruturado aplicada 2 a 5 dias após a entrega física das peças bordadas. O ateliê envia uma mensagem personalizada e humanizada no WhatsApp confirmando o recebimento, fornecendo um guia carinhoso de cuidados e lavagem das peças bordadas, solicitando uma foto da peça em uso (com o bebê, na mesa posta ou na empresa) e um depoimento espontâneo para redes sociais, transformando clientes encantadas em promotoras ativas da marca que atraem novas encomendas de forma 100% orgânica.",
    technicalDetails: "Janela ideal de envio da mensagem pós-venda: 48 a 72 horas após a entrega. Taxa média de resposta positiva: > 85%. Crescimento de indicações orgânicas comprovado: 30% a 45% a mais de novos clientes.",
    howItWorks: [
      "1. A bordadeira entrega o jogo de toalhas de batizado personalizadas na sexta-feira com embalagem perfumada e fita de cetim.",
      "2. Na terça-feira seguinte (após o evento do fim de semana), a artesã envia uma mensagem gentil no WhatsApp: 'Olá, Mariana! Passando para saber como foi o batizado do pequeno Gabriel! As toalhinhas ficaram lindas no altar?'.",
      "3. A cliente se emociona com o carinho e responde com fotos lindas da cerimônia elogiando o trabalho.",
      "4. A bordadeira agradece e envia o 'Guia Digital de Cuidados e Lavagem das Toalhas Bordadas'.",
      "5. Pede autorização gentil para postar a foto e o elogio no Instagram do ateliê.",
      "6. A cliente posta e marca o ateliê, fazendo as amigas e madrinhas da festa entrarem em contato para encomendar também.",
      "7. O ateliê constrói uma reputação sólida de excelência, carinho e autoridade no mercado local."
    ],
    beginnerExplanation: "É mandar uma mensagem super carinhosa no WhatsApp 2 ou 3 dias depois de entregar o bordado para saber se a cliente gostou, desejar felicidades e ensinar como lavar a peça! Isso faz a cliente se sentir muito especial, mandar fotos lindas para você postar e indicar o seu ateliê para todas as amigas dela!",
    applications: [
      "Fidelização de clientes de enxovais de bebê, casamentos e toalhas personalizadas",
      "Coleta de depoimentos reais e fotos de alta qualidade para o Instagram e redes sociais",
      "Prevenção de dúvidas de lavagem (evitando que o cliente use produtos errados na peça)",
      "Multiplicação de indicações boca a boca espontâneas para novas encomendas"
    ],
    commonErrors: [
      "❌ Entregar a peça, receber o dinheiro e nunca mais mandar nenhuma mensagem para a cliente",
      "❌ Mandar mensagens robóticas e frias parecendo cobrança de banco",
      "❌ Não orientar o cliente sobre como lavar a peça bordada, fazendo ele estragar o bordado na máquina de lavar"
    ],
    troubleshootingTips: [
      "Tenha um modelo de mensagem pós-venda salvo nas respostas rápidas do WhatsApp Business para enviar com um clique",
      "Sempre inclua na embalagem um 'Cartãozinho de Cuidados com o Bordado' impresso e cheiroso",
      "Guarde os depoimentos e elogios das clientes em um destaque 'Depoimentos' no perfil do seu Instagram"
    ],
    dicaArtrelados: "O pós-venda é o segredo que faz as melhores clientes nunca mais comprarem em outro ateliê! Quando você demonstra que se importa de verdade com a história e a alegria da cliente, você conquista uma fã para a vida toda!",
    voceSabia: "Pesquisas de comportamento do consumidor comprovam que conquistar um cliente novo custa até 7 vezes mais caro do que manter uma cliente antiga satisfeita e comprando com você novamente!",
    practicalExercise: "Mande uma mensagem carinhosa para a última cliente que comprou com você esta semana perguntando como foi a festa ou o uso da peça. Veja a reação de carinho e gratidão que ela vai te responder!",
    quickSummary: "Mensagem pós-venda e guia de cuidados que encanta clientes, gera fotos e depoimentos e atrai novos pedidos.",
    relatedTerms: [
      "Planilha de Ordem de Serviço (OS)",
      "Orçamento Precificado por Milheiro de Pontos e Custo Operacional",
      "Layout de Produção Contínua e Organização Modular",
      "Gestão do Ateliê e Produção"
    ],
    tags: [
      "r-074",
      "pos venda",
      "pesquisa de satisfacao",
      "fidelizacao",
      "atendimento",
      "encantamento",
      "gestao",
      "artrelados"
    ],
    bibliographicReferences: [
      "ARTRELADOS. Atendimento Encantador e Pós-Venda Magnético para Ateliês de Bordados. São Paulo, 2024.",
      "KOTLER, Philip. Marketing 5.0: Tecnologia para a Humanidade e Gestão da Experiência do Cliente. Rio de Janeiro, 2022."
    ],
    updatedAt: "2026-08-24"
  }
];

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
  },
  {
    id: "r-075-ranhura-de-passagem-de-agulha-na-chapa",
    code: "R-075",
    term: "Ranhura de Passagem de Agulha na Chapa (Needle Plate Clearance Slot)",
    letter: "R",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do francês rainure (entalhe/canaleta) e do latim acus (agulha). Peça de geometria crítica presente no leito inferior de todas as máquinas de costura e bordado.",
    summary: "Orifício calibrado na chapa metálica onde a agulha penetra, cujo diâmetro e polimento impedem o tecido de afundar e a linha de arrebentar.",
    definition: "A Ranhura de Passagem de Agulha na Chapa (Needle Plate Clearance Slot / Throat Plate Hole) é a abertura circular ou oval calibrada existente na chapa de ponto inferior de aço temperado da máquina de bordar. Suas dimensões (geralmente entre 1,6 mm e 2,2 mm de diâmetro interno para bordado industrial e doméstico) determinam a folga radial entre a lâmina da agulha e a borda metálica, proporcionando apoio rígido ao tecido durante a penetração e impedindo que as fibras sejam empurradas para dentro da caixa de bobina (efeito 'flagging' ou afundamento do tecido).",
    technicalDetails: "A chapa para bordado plano possui formato cilíndrico de furo pequeno (High-Grade Single Needle Hole Ø 1,6 mm a 1,8 mm), garantindo suporte contra a deflexão de agulha e evitando pontos pulados (*skipped stitches*). O polimento de borda interna exige rugosidade Ra < 0,1 µm para eliminar rebarbas cortantes geradas por colisões acidentais de agulha.",
    beginnerExplanation: "É aquele buraquinho de metal por onde a agulha desce para dentro da máquina. Ele precisa estar lisinho como um espelho e ter o tamanho certinho para a agulha passar sem encostar e para o tecido não ser empurrado para dentro do buraco quando a agulha bate.",
    howItWorks: [
      "1. A agulha desce carregando a linha superior em alta velocidade através do tecido e da entretela.",
      "2. O tecido é pressionado firmemente contra a face superior plana da chapa de agulha.",
      "3. A agulha atravessa o centro da ranhura com folga perimétrica homogênea de aproximadamente 0,4 mm.",
      "4. O orifício sustenta a malha do tecido enquanto a agulha sobe 2 mm para formar o laço de linha.",
      "5. A ponta da lançadeira captura a linha livremente abaixo da chapa sem obstruções mecânicas."
    ],
    construction: [
      "Chapa em liga de aço cromo-níquel com têmpera superficial de alta dureza (60 HRC)",
      "Orifício central chanfrado com raio de transição arredondado",
      "Rasgos de fixação para parafusos de retenção escareados",
      "Revestimento espelhado anti-fricção"
    ],
    mainTypes: [
      "Chapa de Furo Pequeno / Redondo Padrão para Bordado (Standard Round Hole)",
      "Chapa de Ranhura Larga para Ponto Zigue-Zague e Agulha Dupla (Oval Slot)",
      "Chapa com Inserto Cerâmico Anti-Desgaste"
    ],
    characteristics: [
      "Sustentação plana impecável em tecidos finos, malhas e sedas",
      "Prevenção do efeito de sucção do tecido para dentro da lançadeira",
      "Superfície polida que não desfia os filamentos da linha de bordar"
    ],
    applications: [
      "Bordados em tecidos ultra-leves e flexíveis (organza, malha jersey, viscose).",
      "Manutenção corretiva após impactos violentos de agulha no bastidor.",
      "Calibração de folgas em agulhas de alta titulação (75/11 a 90/14)."
    ],
    commonErrors: [
      "❌ Continuar bordando com a chapa de agulha cheia de marcas de agulhada e 'picados' cortantes de metal",
      "❌ Usar lixa grossa para tirar rebarbas, alargando o furo e fazendo o tecido afundar no bordado",
      "❌ Apertar os parafusos da chapa de forma desalinhada, inclinando a placa e causando colisão de agulha"
    ],
    troubleshootingTips: [
      "Se a linha estiver arrebentando a cada 100 pontos: Passe o dedo delicadamente ao redor do buraquinho da chapa; se sentir uma rebarba áspera, passe lixa d'água 1500 com óleo ou faça o polimento.",
      "Se o tecido estiver sendo 'engolido' para dentro do furo: Substitua a chapa por uma com furo menor de bordado ou use entretela mais encorpada.",
      "Se a agulha estiver batendo na borda do furo: Verifique se a barra de agulha está centrada e se os parafusos da chapa estão bem assentados."
    ],
    dicaArtrelados: "O teste do cotonete: passe a pontinha de um cotonete de algodão por dentro do buraquinho da chapa de agulha. Se prender qualquer fiapinho de algodão, há uma lasquinha de metal afiada lá dentro que está cortando a sua linha de bordar! Um polimento com pasta de polir e linha de algodão resolve na hora!",
    voceSabia: "Em máquinas industriais multicabeças de alta velocidade, a troca da chapa de furo oval para chapa de furo redondo pequeno reduz o rompimento de linha em tecidos elásticos em até 40%!",
    practicalExercise: "Retire a chapa de agulha da sua máquina com a chave de fenda apropriada. Limpe toda a poeira de linha acumulada embaixo dela e examine o orifício contra a luz com uma lupa para checar se está liso e sem arranhões.",
    quickSummary: "Orifício calibrado na chapa de metal que apoia o tecido e guia a descida da agulha com precisão e superfície ultra-polida.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Universal ou Ponta Bola",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Chapa de Agulha (Needle Plate)",
      "Deflexão de Agulha (Needle Deflection)",
      "Flagging (Afundamento do Tecido)",
      "Lançadeira Rotativa",
      "Manutenção Preventiva"
    ],
    tags: ["r-075", "ranhura de agulha", "chapa de agulha", "mecanica", "polimento", "quebra de linha", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL BULLETIN. Throat Plate Geometry and Flagging Prevention Standards. Nagoya, 2022.",
      "SCHMETZ NEEDLES. Needle Plate Clearances and Thread Protection Guidelines. Albstadt, 2021.",
      "ARTRELADOS. Guia de Mecânica, Chapas de Ponto e Diagnóstico de Avarias em Máquinas de Bordar. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-076-reacao-viscoelastica-da-linha-de-bordar",
    code: "R-076",
    term: "Reação Viscoelástica da Linha de Bordar (Viscoelastic Thread Relaxation)",
    letter: "R",
    level: "Avançado 🔴",
    category: "Agulhas e Fios de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim viscosus (viscoso) e elasticus (que volta à forma). Conceito de física de polímeros têxteis aplicado à dinâmica de tração contínua.",
    summary: "Comportamento dinâmico de estiramento e recuperação de forma da linha sob tração contínua nos tensores e na agulha.",
    definition: "A Reação Viscoelástica da Linha de Bordar (Viscoelastic Thread Relaxation / Dynamic Tensile Hysteresis) é a propriedade mecânica combinada de viscosidade e elasticidade que filamentos sintéticos de poliéster e viscose exibem quando submetidos a ciclos contínuos e ultrarrápidos de tensão, estiramento e alívio durante a costura (mais de 15 ciclos de tração por segundo a 900 PPM). O fio não responde como uma mola perfeita, apresentando uma histerese de relaxamento que afeta diretamente o tamanho do laço formado para a lançadeira.",
    technicalDetails: "O módulo elástico de Young das linhas de poliéster 120D/2 situa-se entre 3,5 e 5,0 GPa, com alongamento na ruptura entre 15% e 22%. Sob tração rápida nos discos tensores, a deformação elástica instantânea é seguida por uma deformação viscosa retardada; se a mola tira-fio estiver mal regulada, o fio não recupera o comprimento a tempo, provocando laçadas frouxas ou pontos pulados.",
    beginnerExplanation: "Quando a linha corre rápido pela máquina sendo puxada e soltada o tempo todo, ela se comporta como um elástico inteligente que estica quando puxa e demora um pedacinho de segundo para voltar ao normal. Entender isso ajuda a calibrar a pressão dos tensores para a linha não ficar nem esticada demais nem frouxa.",
    howItWorks: [
      "1. O fio é puxado do cone e sofre tração ao passar pelos discos tensores superiores.",
      "2. A alavanca puxa-fio sobe bruscamente, aplicando o pico de tensão máxima para assentar o nó do ponto.",
      "3. O filamento se estica elasticamente na fração de milissegundos da tração.",
      "4. A alavanca desce e a mola tira-fio recolhe o excesso de linha enquanto o polímero se relaxa.",
      "5. A laçada é formada com volume e estabilidade geométrica ideais para a lançadeira pescar."
    ],
    construction: [
      "Filamento contínuo de poliéster 100% trilobal ou viscose",
      "Torção balanceada tipo 'Z' de 600 a 700 voltas/metro",
      "Acabamento com emulsão lubrificante de silicone (2% a 4% em peso)",
      "Estrutura molecular semi-cristalina orientada"
    ],
    mainTypes: [
      "Comportamento Viscoelástico de Poliéster Trilobal (Alta Tenacidade e Recuperação Rápida)",
      "Comportamento de Viscose Rayon (Baixo Módulo de Elasticidade e Toque Macio)",
      "Comportamento de Fio Metálico (Alma de Poliamida com Fita de Alumínio - Alta Rigidez)"
    ],
    characteristics: [
      "Excelente assentamento de ponto em desenhos densos e contornos complexos",
      "Absorção dinâmica dos solavancos da alavanca puxa-fio sem ruptura",
      "Necessidade de lubrificação de superfície de silicone para fluidez nos tensores"
    ],
    applications: [
      "Bordados industriais de alta velocidade (acima de 850 PPM).",
      "Calibração de tensores dinâmicos e molas compensadoras.",
      "Seleção de linhas adequadas para tecidos de alta elasticidade (lycra, suplex)."
    ],
    commonErrors: [
      "❌ Apertar a tensão da linha até o limite achando que o ponto frouxo é falta de aperto, esticando a linha além do limite elástico",
      "❌ Usar cones velhos ressecados que perderam a emulsão lubrificante e quebram secos",
      "❌ Misturar marcas de linha com elasticidades totalmente diferentes na mesma matriz sem recalibrar a máquina"
    ],
    troubleshootingTips: [
      "Se a linha estiver formando laçadas pequenas no avesso: Regule a mola tira-fio para aumentar o curso de recolhimento da linha relaxada.",
      "Se o bordado repuxar após 24 horas fora do bastidor: A linha foi bordada sob tensão excessiva; solte o tensor superior em 1 volta.",
      "Se o fio metálico desmanchar a capa: Reduza a velocidade da máquina para 550 PPM para diminuir a fadiga por histerese."
    ],
    dicaArtrelados: "Nunca guarde seus cones de linha perto de janelas com sol direto ou lugares muito quentes! O calor e a luz do sol ressecam o silicone natural da linha e fazem o fio perder toda a elasticidade boa, virando uma linha quebradiça que vai te dar dor de cabeça na máquina!",
    voceSabia: "Uma linha de poliéster de bordar de boa qualidade consegue esticar até 20% do seu comprimento original e voltar exatamente ao tamanho inicial sem arrebentar!",
    practicalExercise: "Puxe 30 cm de linha de poliéster do cone com as mãos. Estique suavemente e solte: observe como ela estica e retorna ao formato normal como um micromolécula elástica perfeitamente balanceada.",
    quickSummary: "Propriedade física de elasticidade e recuperação que a linha de bordar possui sob tração rápida, fundamental para a formação estável do ponto.",
    recommendedSettings: {
      speedPPM: "700 a 850 PPM",
      needleType: "75/11 Universal ou Titânio",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Poliéster Trilobal (Trilobal Polyester)",
      "Mola Tira-Fio (Check Spring)",
      "Tensão de Linha Superior",
      "Alavanca Puxa-Fio (Take-up Lever)",
      "Elasticidade Residual"
    ],
    tags: ["r-076", "reacao viscoelastica", "elasticidade", "poliester", "fios", "tensao", "artrelados"],
    bibliographicReferences: [
      "MADEIRA GARN. Viscoelastic Properties and Thread Tension Dynamics in High-Speed Embroidery. Freiburg, 2022.",
      "COATS INDUSTRIAL THREADS. Synthetic Thread Elongation and Recovery Standards. London, 2021.",
      "ARTRELADOS. Física das Linhas de Bordado: Elasticidade, Tensão e Comportamento Molecular. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-077-rebaixo-de-compensacao-de-trapezio",
    code: "R-077",
    term: "Rebaixo de Compensação de Trapézio (Trapezoid Satin Narrowing)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim rebaixare (diminuir/rebaixar) e do grego trapezion (figura geométrica de quatro lados com dois paralelos). Algoritmo de geometria vetorial de digitalização.",
    summary: "Estreitamento proporcional inteligente nas pontas finas e cantos vivos de letras para evitar o acúmulo de linha em formato de bolota dura.",
    definition: "O Rebaixo de Compensação de Trapézio (Trapezoid Satin Narrowing / Smart Corner Narrowing / Tapered Corner Compensation) é o algoritmo de digitalização vetorial aplicado nas extremidades pontiagudas, vértices fechados e cantos em cunha de colunas de ponto cheio (cetim). À medida que as linhas de contorno convergem em um ângulo agudo (< 45°), o software calcula o estreitamento progressivo e reduz a densidade volumétrica, impedindo que dezenas de perfurações de agulha se concentrem no mesmo milímetro e formem um caroço duro ou quebrem a agulha.",
    technicalDetails: "Em cantos afilados, a densidade linear atinge valores críticos (> 25 pontos/mm). O rebaixo de trapézio aplica uma função de transição trapezoidal ou recorte angular (Cap / Mitered Join) que interrompe a descida da agulha antes do vértice extremo e redistribui as pontas com espaçamento mínimo seguro de 0,4 mm.",
    beginnerExplanation: "Quando uma letra ou desenho tem uma pontinha muito fina e afiada (como a perninha da letra 'A' ou a ponta de uma estrela), a máquina quer dar muitos pontos no mesmo buraquinho minúsculo, fazendo um nó feio e duro. O rebaixo de trapézio é um ajuste no programa que diminui os pontinhos na ponta para o bico ficar fininho, lindo e macio.",
    howItWorks: [
      "1. O programador desenha uma coluna de cetim terminando em ponta aguda no software.",
      "2. O algoritmo detecta que a largura da coluna é inferior a 1,0 mm no vértice.",
      "3. O recurso de compensação de trapézio calcula a curva de decaimento de pontos.",
      "4. Os pontos são encurtados progressivamente em formato trapezoidal ou em corte chanfrado.",
      "5. A agulha executa a ponta com espaçamento perfeito, sem empavilar linha nem furar o tecido."
    ],
    construction: [
      "Nó vetorial de extremidade em curva Bezier",
      "Parâmetro de largura mínima de ponto (Minimum stitch length limiter)",
      "Ângulo de corte de canto (Cap angle limiter)",
      "Compensação de repuxo diferencial na ponta"
    ],
    mainTypes: [
      "Rebaixo Trapezoidal Automático em Letras Finas",
      "Canto Mitrado com Junção em Trapézio (Mitered Trapezoid Join)",
      "Afilamento Suave de Pontas de Folhas e Estrelas (Auto-Tapering)"
    ],
    characteristics: [
      "Pontas afiladas extremamente nítidas e elegantes no bordado",
      "Eliminação de nódulos duros de linha que pinicam na pele",
      "Redução drástica de quebras de agulha em vértices finos"
    ],
    applications: [
      "Bordado de monogramas elegantes, letras manuscritas e fontes cursivas finas.",
      "Pontas de brasões, coroas, estrelas e arabescos detalhados.",
      "Logotipos corporativos com serifas estreitas e traços afilados."
    ],
    commonErrors: [
      "❌ Deixar colunas de cetim com bicos pontudos sem rebaixo, fazendo a agulha bater 30 vezes no mesmo milímetro",
      "❌ Cortar a ponta de forma tão brusca que a letra perde a forma geométrica original",
      "❌ Usar linha grossa 40 em pontas minúsculas sem reduzir a densidade do trapézio"
    ],
    troubleshootingTips: [
      "Se a ponta da letra estiver virando uma 'bolotinha' dura de linha: Ative o recurso 'Compensação de Canto / Auto-Tapering' no software e defina a largura mínima para 0.8 mm.",
      "Se a agulha quebrar sempre na ponta da estrela: Diminua a densidade na extremidade e ative o corte de cantos vivos.",
      "Se a ponta fina sumir no tecido: Coloque uma costura de base (underlay) de ponto corrido único no centro da ponta."
    ],
    dicaArtrelados: "Para letrinhas manuscritas finas ficarem perfeitas e sem caroço na ponta: programe as pontinhas com rebaixo trapezoidal e use agulha 65/9 ou linha de espessura 60! O traço fica fino como se tivesse sido desenhado com caneta de ponta de ouro!",
    voceSabia: "Em softwares de ponta como Wilcom e Embird, os algoritmos de trapézio utilizam cálculos de trigonometria hiperbólica para recalcular os ângulos de cada ponto em menos de 2 milissegundos durante a geração da matriz!",
    practicalExercise: "Digitalize uma letra 'V' maiúscula com ponta fina no seu software. Observe os pontos no vértice: ative o 'Canto Mitrado / Smart Corner' e veja como o programa redistribui os pontos em formato de leque trapezoidal suave.",
    quickSummary: "Algoritmo de programação que alivia a quantidade de pontos em pontas e cantos vivos para garantir bicos finos sem nós de linha.",
    recommendedSettings: {
      density: "0.40 mm com afilamento de ponta (Tapering)",
      speedPPM: "750 a 850 PPM",
      needleType: "70/10 Ponta Bola Fina ou 65/9 Microtex",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Ponto Cheio / Cetim (Satin Stitch)",
      "Canto Mitrado (Mitered Corner)",
      "Densidade de Ponto (Stitch Density)",
      "Digitalização de Bordado (Digitizing)",
      "Compensação de Repuxo (Pull Compensation)"
    ],
    tags: ["r-077", "rebaixo de trapezio", "canto fino", "pontas", "digitalizacao", "wilcom", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Advanced Lettering & Smart Corner Stitch Digitizing Standards. Sydney, 2023.",
      "PULSE MICROSYS. Vector Geometry & Trapezoidal Corner Narrowing in CAD. Toronto, 2022.",
      "ARTRELADOS. Segredos da Programação de Fontes Finas, Serifas e Arabescos de Luxo. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-078-rebobinamento-concentrico-de-linha-de-bobina",
    code: "R-078",
    term: "Rebobinamento Concêntrico de Linha de Bobina (Concentric Bobbin Winding Dynamics)",
    level: "Intermediário 🟡",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim re (de novo) e do francês bobine (carretel/cilindro) e do latim concentricus (com o mesmo centro). Princípio mecânico de bobinamento rotativo.",
    summary: "Processo de encher a bobina com tensão firme, uniforme e enrolamento perfeitamente paralelo para evitar variações de tensão no avesso.",
    definition: "O Rebobinamento Concêntrico de Linha de Bobina (Concentric Bobbin Winding Dynamics / Precision Bobbin Spooling) é o processo mecânico de transferência da linha de bobina (poliéster 150D/1 ou 60wt) do cone alimentador para o carretel metálico ou plástico inferior da máquina. A linha deve ser distribuída em camadas paralelas perfeitamente concêntricas com tensão constante e controlada, gerando um cilindro sólido e denso sem 'barrigas', espiras frouxas ou calombos laterais.",
    technicalDetails: "Uma bobina cheia com enrolamento concêntrico ideal possui densidade volumétrica homogênea com força de saída entre 18gf e 24gf (medida em tensiômetro Towa). Bobinas enroladas frouxamente ou de forma cônica causam variações imprevisíveis de até 15gf na tensão inferior ao longo do bordado, provocando subida repentina da linha branca no direito da peça.",
    beginnerExplanation: "É o jeito certo de encher a carretilha/bobina de linha: ela precisa ficar durinha, lisinha e com a linha enrolada reta de cima a baixo como se fosse um carretel que veio pronto de fábrica. Se ficar fofa ou torta, a linha de baixo vai puxar a linha de cima e estragar o bordado.",
    howItWorks: [
      "1. A linha sai do cone superior e passa obrigatoriamente pelo disco pré-tensor do enchedor.",
      "2. Dá-se algumas voltas manuais na carretilha para ancorar a ponta do fio.",
      "3. O pino do enchedor gira a bobina em alta rotação sincronizada.",
      "4. O operador ou a guia oscilante distribui a linha de forma nivelada entre as abas superior e inferior.",
      "5. A trava automática desarma quando a bobina atinge 85% a 90% da sua capacidade máxima."
    ],
    construction: [
      "Eixo giratório do enchedor com mola de retenção",
      "Disco pré-tensor de bobinador com mola calibrada",
      "Guia-fio de deflexão e nivelamento",
      "Sensor ou limitador mecânico de parada por diâmetro"
    ],
    mainTypes: [
      "Enchedor de Bobina Integrado no Chassi da Máquina",
      "Enchedor de Bobina Independente de Alta Velocidade (Motor Externo)",
      "Bobinas Pré-Enroladas Industriais com Miolo Plástico (Pre-Wound Magnetic Core Bobbins)"
    ],
    characteristics: [
      "Saída de linha ultra-estável do primeiro ao último metro",
      "Avesso do bordado com a proporção áurea perfeita (1/3 branco centralizado no cetim)",
      "Eliminação completa de nós e laçadas soltas por travamento interno de fio"
    ],
    applications: [
      "Preparação diária de carretilhas no início da jornada de trabalho do ateliê.",
      "Produção de alta qualidade em toalhas, enxovais e uniformes.",
      "Controle de custo de linha de bobina de alto rendimento."
    ],
    commonErrors: [
      "❌ Encher a bobina sem passar a linha pelo tensor do enchedor, deixando a carretilha mole e fofa como esponja",
      "❌ Encher a bobina até transbordar pelas laterais, fazendo o carretel travar dentro da caixa de bobina",
      "❌ Usar carretilha com a borda de plástico amassada ou lascada que desvia o enrolamento"
    ],
    troubleshootingTips: [
      "Se você apertar a bobina cheia com o dedo e ela afundar fofa: Descarte a linha e encha novamente passando o fio firmemente dentro dos discos de tensão do enchedor.",
      "Se a linha branca estiver subindo para a frente do bordado: A bobina foi enrolada frouxa e está escorregando; troque por uma bobina cheia com boa firmeza.",
      "Se a máquina estiver fazendo barulho de carretilha batendo: A bobina está muito cheia e raspando na tampa; retire 1 metro de linha."
    ],
    dicaArtrelados: "O teste da unha na bobina: pegue a bobina que você acabou de encher e aperte a linha com a unha com força! A linha precisa estar durinha e firme como se fosse uma pedra lisa! Se a sua unha afundar na linha, ela está fofa e vai desregular a tensão do seu bordado inteiro!",
    voceSabia: "As bobinas pré-enroladas de fábrica (Pre-Wound Bobbins) utilizam bobinamento industrial a laser a vácuo, conseguindo colocar até 30% mais metros de linha no mesmo espaço da carretilha comum!",
    practicalExercise: "Encha uma bobina sem passar pelo tensor e outra passando pelo tensor com firmeza. Aperte as duas com os dedos e sinta a diferença de densidade entre elas. Coloque na máquina e compare o avesso do bordado.",
    quickSummary: "Processo de encher a carretilha com linha paralela, firme e sob tensão controlada para assegurar tensão estável e avesso perfeito.",
    recommendedSettings: {
      speedPPM: "Velocidade média do enchedor",
      needleType: "Compatível",
      stabilizer: "Conforme tecido",
      threadTension: "18gf a 24gf no tensiômetro Towa"
    },
    relatedTerms: [
      "Caixa de Bobina (Bobbin Case)",
      "Linha de Bobina (Bobbin Thread)",
      "Tensiômetro de Bobina (Towa Gauge)",
      "Bobina Pré-Enrolada (Pre-Wound Bobbin)",
      "Tensão Inferior"
    ],
    tags: ["r-078", "rebobinamento", "bobina", "carretilha", "tensao inferior", "enchedor", "artrelados"],
    bibliographicReferences: [
      "FIL-TEC BOBBIN INNOVATIONS. Bobbin Winding Density & Tension Consistency Standards. Maryland, 2022.",
      "BROTHER EMBROIDERY SYSTEMS. Bobbin Winder Setup and Thread Path Guide. Nagoya, 2021.",
      "ARTRELADOS. O Segredo da Tensão Inferior Perfeita: Bobinas, Molas e Caixas de Linha. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-079-recobrimento-de-cetim-em-zigue-zague-gradiente",
    code: "R-079",
    term: "Recobrimento de Cetim em Zigue-Zague Gradiente (Gradient Satin Zigzag Shading)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do francês recouvrir (cobrir por cima), satin (tecido brilhante de seda) e do alemão zickzack (linhas alternadas em zigue-zague). Técnica artística de pintura com agulha digital.",
    summary: "Técnica de programação que intercala comprimentos variáveis de ponto cheio para criar transições suaves e realistas de luz e sombra.",
    definition: "O Recobrimento de Cetim em Zigue-Zague Gradiente (Gradient Satin Zigzag Shading / Jagged Satin Stitch Blending / Feathered Edge Stitching) é a técnica de digitalização avançada onde as bordas de duas ou mais camadas consecutivas de ponto cheio (cetim) são geradas com comprimentos de pontos alternados de forma aleatória ou senoidal (bordas dentadas ou 'bico de pena'). Essa interpolação faz com que os fios de cores diferentes se entrelacem gradualmente na transição, eliminando linhas duras de divisão e produzindo gradientes contínuos de cor e volume tridimensional.",
    technicalDetails: "O algoritmo modula o comprimento individual de cada ponto alternando entre 30% e 100% da largura da coluna (Jagged Edge / Feathering = 50% a 70%). As pontas longas de uma cor penetram nos interstícios das pontas curtas da cor subsequente, criando uma ilusão óptica de fusão tonal contínua sem criar sobreposição espessa de pontos.",
    beginnerExplanation: "É a técnica que faz o bordado parecer uma pintura realista feita com linhas! Em vez de ter uma linha reta separando uma cor da outra, o programa faz os pontos de cetim terminarem em 'dentes de serrote' irregulares que entram uns dentro dos outros, misturando as cores suavemente como em uma pétala de rosa ou no pelo de um cachorrinho.",
    howItWorks: [
      "1. O programador desenha a primeira camada de cor de base (ex: vermelho escuro).",
      "2. Ativa a função 'Borda Dentada / Bico de Pena' (Feathering / Jagged Edge) em uma das laterais da coluna de cetim.",
      "3. O software gera pontos com comprimentos irregulares alternados.",
      "4. Digitaliza a segunda cor (ex: vermelho claro ou rosa) com a borda dentada casando na direção oposta.",
      "5. A máquina borda as duas cores sucessivamente, fundindo os filamentos de linha com efeito degradê suave."
    ],
    construction: [
      "Coluna vetorial de cetim com vetor de interpolação",
      "Modulador de comprimento aleatório de ponto (Jagged length randomizer)",
      "Densidade aliviada nas áreas de cruzamento (0.50 mm a 0.60 mm)",
      "Diretriz angular paralela para alinhamento do reflexo de luz"
    ],
    mainTypes: [
      "Degradê em Borda Dentada Unilateral (Single Side Jagged)",
      "Degradê em Borda Dentada Bilateral (Double Side Feathering)",
      "Pintura com Agulha Fotográfica em Múltiplas Camadas (Thread Painting / Long & Short Stitch)"
    ],
    characteristics: [
      "Transições tonais suaves e realistas sem linhas duras ou artificiais",
      "Toque macio sem acúmulo de camadas pesadas de pontos",
      "Efeito de profundidade e luminosidade tridimensional em motivos botânicos e animais"
    ],
    applications: [
      "Pétalas de flores, folhas botânicas e paisagens de alta nobreza.",
      "Retratos realistas, animais de estimação (pets) e penas de aves.",
      "Brasões nobres e monogramas com efeito metálico sombreado."
    ],
    commonErrors: [
      "❌ Deixar a densidade normal de 0.40 mm nas duas camadas sobrepostas, criando uma emenda grossa e dura",
      "❌ Mudar o ângulo do ponto bruscamente entre as duas cores, quebrando a reflexão de luz do degradê",
      "❌ Usar cores com contraste excessivo sem uma cor intermediária de transição"
    ],
    troubleshootingTips: [
      "Se a emenda entre as cores ficar visível como uma linha: Aumente a profundidade da borda dentada (Feathering Depth) para 60% a 70%.",
      "Se o bordado ficar muito duro no meio: Alivie a densidade da camada de cima para 0.55 mm.",
      "Se a linha estiver quebrando na transição: Verifique se não há pontos minúsculos inferiores a 0.8 mm gerados na ponta dos dentes."
    ],
    dicaArtrelados: "Para fazer degradês de rosas que parecem vivas: use sempre fios de poliéster trilobal brilhante e mantenha os ângulos de ponto das duas cores perfeitamente paralelos! A luz vai bater na mesma direção nas duas cores e a transição vai ficar tão suave que ninguém vai acreditar que foi feito na máquina!",
    voceSabia: "A técnica de pintura com agulha (Thread Painting) surgiu na China antiga no século XI durante a dinastia Song, onde mestres bordadores passavam anos misturando fios de seda para criar quadros perfeitos de pássaros e flores!",
    practicalExercise: "No seu software de bordado, crie uma folha verde: divida em verde escuro e verde claro e ative o 'Bico de Pena' na junção das duas cores. Borde em um retalho e veja o efeito de luz natural da folha.",
    quickSummary: "Técnica de digitalização com pontos de comprimentos alternados que mescla cores suavemente para criar efeitos realistas de luz e sombra.",
    recommendedSettings: {
      density: "0.48 mm a 0.55 mm na zona de transição de cores",
      speedPPM: "650 a 800 PPM",
      needleType: "70/10 Ponta Bola Fina ou Microtex",
      stabilizer: "Entretela compatível com tecido estável"
    },
    relatedTerms: [
      "Ponto Cheio / Cetim (Satin Stitch)",
      "Degradê de Cores (Color Blending / Gradient)",
      "Pintura com Agulha (Thread Painting)",
      "Ponto Longo e Curto (Long & Short Stitch)",
      "Densidade Gradiente"
    ],
    tags: ["r-079", "recobrimento de cetim", "degrade", "zigue zague", "pintura com agulha", "sombreamento", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Artistic Shading, Feathering & Color Blending Techniques. Sydney, 2023.",
      "ROYAL SCHOOL OF NEEDLEWORK. Silk Shading and Long & Short Stitch Masterclass. London, 2021.",
      "ARTRELADOS. Guia de Pintura com Agulha, Degradês e Sombreamento no Bordado Computadorizado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-080-reducao-de-velocidade-em-saltos-longos",
    code: "R-080",
    letter: "R",
    term: "Redução de Velocidade em Saltos Longos (Long Jump Speed Deceleration)",
    level: "Intermediário 🟡",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim reductio (diminuição) e velocitas (rapidez). Algoritmo de controle cinemático em servomotores CNC industriais.",
    summary: "Parâmetro eletrônico da máquina que freia o cabeçote antes de grandes deslocamentos do bastidor para proteger a mecânica.",
    definition: "A Redução de Velocidade em Saltos Longos (Long Jump Speed Deceleration / Jump Stitch Velocity Limiting) é a rotina de controle cinemático do sistema de acionamento eletrônico (DSP / Servomotores) da máquina de bordar que desacelera a rotação do eixo principal (de 900 PPM para 300-450 PPM) quando o código da matriz comanda um deslocamento de salto (Jump) com distância superior ao limiar pré-definido (geralmente saltos acima de 8,0 mm a 12,0 mm).",
    technicalDetails: "Durante um salto longo, o pantógrafo precisa transladar o bastidor com aceleração lateral de até 2G. Se o eixo principal continuasse em 1.000 PPM, o tempo entre a subida e a descida da agulha (cerca de 30 milissegundos) seria insuficiente para o bastidor percorrer a distância e parar completamente, resultando em deflexão severa de agulha, batida no bastidor ou perda de passos no motor X/Y.",
    beginnerExplanation: "É um freio automático inteligente da máquina: quando o desenho precisa pular de um lado longe para o outro sem costurar, a máquina dá uma desacelerada suave para dar tempo do bastidor andar até lá sem dar tranco forte e sem arrebentar a agulha.",
    howItWorks: [
      "1. A placa controladora da máquina lê o comando de salto longo na matriz de bordado.",
      "2. O circuito DSP envia sinal de redução de frequência para o inversor do servomotor principal.",
      "3. A máquina desacelera suavemente a rotação do cabeçote.",
      "4. O pantógrafo movimenta o bastidor com rampa suave de aceleração e frenagem até as novas coordenadas.",
      "5. A agulha desce na posição exata e a máquina retoma a velocidade nominal automaticamente."
    ],
    construction: [
      "Controlador DSP de controle de movimento multieixo",
      "Servomotor Brushless com encoder óptico absoluto",
      "Módulo de freio dinâmico regenerativo",
      "Parâmetro de limiar de salto longo configurável no painel"
    ],
    mainTypes: [
      "Desaceleração Automática por Limiar de Comprimento de Salto (Jump Threshold)",
      "Frenagem por Parada de Corte de Fio (Trim & Jump Deceleration)",
      "Rampa Cinemática em Curva 'S' para Pantógrafos Pesados"
    ],
    characteristics: [
      "Proteção total contra deflexão de agulha e quebras mecânicas",
      "Eliminação de perda de coordenadas (deslocamento de matriz) durante o bordado",
      "Movimentação suave e silenciosa do bastidor em qualquer tamanho de desenho"
    ],
    applications: [
      "Matrizes com muitos objetos espalhados pelo bastidor.",
      "Bordados em bastidores pesados de jaquetas e colchas.",
      "Operação segura em máquinas monocabeça e industriais multicabeças."
    ],
    commonErrors: [
      "❌ Desativar a função de desaceleração no painel da máquina para tentar bordar mais rápido, causando batida de agulha",
      "❌ Deixar saltos gigantescos de 15 cm sem comando de corte de linha na matriz",
      "❌ Usar bastidores excessivamente pesados sem calibrar a aceleração do pantógrafo"
    ],
    troubleshootingTips: [
      "Se a máquina der um tranco seco ou barulho forte nos saltos: Reduza o parâmetro 'Jump Speed' no menu de configurações do painel da máquina.",
      "Se o bordado ficar descentralizado após um salto longo: O motor perdeu passos por excesso de velocidade; ative a desaceleração de salto.",
      "Se a agulha entortar ao pular de uma letra para outra: Verifique se o cortador de linha automático está funcionando antes do salto."
    ],
    dicaArtrelados: "Se você tem uma matriz com muitas letrinhas ou detalhes separados: certifique-se de que a matriz tenha comandos de corte de linha (Trim) entre os saltos longos! A máquina corta, pula devagarzinho e recomeça limpa, sem deixar aquele monte de fios compridos atravessando a sua peça!",
    voceSabia: "Em uma máquina bordando a 1.000 PPM, cada ponto acontece em apenas 60 milissegundos; o freio eletrônico consegue detectar um salto e desacelerar a máquina em menos de um décimo de segundo!",
    practicalExercise: "Borde um desenho que tenha duas estrelas afastadas 10 cm uma da outra. Observe como a máquina borda rápido a primeira estrela, diminui o ritmo suavemente no salto e acelera novamente ao começar a segunda estrela.",
    quickSummary: "Controle eletrônico que desacelera a máquina antes de deslocamentos longos do bastidor para garantir precisão e proteger a agulha.",
    recommendedSettings: {
      speedPPM: "Ajuste automático (350 PPM nos saltos / 800 PPM na costura)",
      needleType: "75/11 Universal",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Ponto de Salto (Jump Stitch)",
      "Corte de Fio Automático (Auto-Trim)",
      "Pantógrafo de Bordado",
      "Servomotor e Encoder",
      "Deflexão de Agulha"
    ],
    tags: ["r-080", "reducao de velocidade", "salto longo", "jump stitch", "mecanica", "painel", "artrelados"],
    bibliographicReferences: [
      "BARUDAN PRECISION EMBROIDERY. Servo Drive Kinetics & Long Jump Deceleration Standards. Ichinomiya, 2022.",
      "TAJIMA TECHNICAL JOURNAL. Multi-Axis Motion Control & Dynamic Acceleration in Embroidery. Nagoya, 2021.",
      "ARTRELADOS. Guia de Parâmetros Eletrônicos, Velocidades e Otimização de Máquinas de Bordar. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-081-reforco-de-borda-em-pico-eletronico",
    code: "R-081",
    letter: "R",
    term: "Reforço de Borda em Picô Eletrônico (Electronic Picot Edge Stitching)",
    level: "Intermediário 🟡",
    category: "Técnicas de Aplique e Efeitos Especiais",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do francês picot (pequena ponta/biquinho pontiagudo). Ponto decorativo clássico de rendas e passamanarias de Paris adaptado para o bordado digital.",
    summary: "Ponto decorativo rendado em formato de pequenos bicos pontiagudos programado para acabamento nobre em bordas de toalhas e lenços.",
    definition: "O Reforço de Borda em Picô Eletrônico (Electronic Picot Edge Stitching / Digitized Picot Edge Finish) é o padrão de ponto decorativo e estrutural composto por pequenas alças pontiagudas, nós salientes ou 'biquinhos' geométricos bordados em intervalos regulares ao longo da borda externa de uma peça têxtil. Além do valor ornamental que reproduz as rendas de agulha e crochê clássicas, o picô eletrônico ancora as fibras da orla cortada do tecido com nós travados de alta resistência mecânica contra desfiamentos pós-lavagem.",
    technicalDetails: "A matriz é programada com sequência de micro-pontos de amarração (Locking Nodes) que se projetam 1,5 mm a 3,0 mm para fora da linha guia de corte, seguidos por uma coluna de cordão de cetim denso (0.35 mm de densidade). Executado frequentemente sobre entretela hidrossolúvel pesada (80g) para que os bicos fiquem suspensos no ar após a lavagem.",
    beginnerExplanation: "É aquele acabamento lindo que parece um biquinho de renda delicada ou crochêzinho feito na ponta de toalhas de lavabo, lenços e fraldinhas de bebê. A máquina faz as pontinhas decorativas e ao mesmo tempo sela o tecido para ele nunca desfiar na máquina de lavar.",
    howItWorks: [
      "1. A máquina borda a linha de posicionamento da borda da peça sobre entretela solúvel.",
      "2. O operador assenta a borda do tecido de linho ou percal sobre a linha guia.",
      "3. A máquina borda os pontos de ancoragem interna que prendem o tecido.",
      "4. Executa a sequência de laçadas do picô que projetam os biquinhos para fora do tecido.",
      "5. Borda o cordão de cetim denso de reforço unindo tudo.",
      "6. A peça é lavada em água morna para dissolver a entretela, deixando os biquinhos de picô perfeitos e suspensos."
    ],
    construction: [
      "Linha de corte guia (Placement line)",
      "Projeção triangular do bico de picô (Picot node loop)",
      "Coluna de travamento em ponto cheio (Satin border anchor)",
      "Substrato em entretela hidrossolúvel grossa"
    ],
    mainTypes: [
      "Picô Clássico Triangular Simples",
      "Picô Redondo / Bolinha (Pearl Picot Edge)",
      "Picô Duplo com Renda Suspensa (Heirloom Picot Border)"
    ],
    characteristics: [
      "Visual clássico e romântico de enxoval de alta nobreza",
      "Bordas 100% seladas contra desfiamento",
      "Substituição rápida e perfeita de bicos manuais de crochê"
    ],
    applications: [
      "Toalhinhas de lavabo, panos de bandeja e caminhos de mesa de linho nobre.",
      "Fraldas de boca, babadores e mantas de enxoval de bebê de luxo.",
      "Lenços finos de noiva, vestidos de batizado e paramentos litúrgicos."
    ],
    commonErrors: [
      "❌ Usar entretela rasgável comum, deixando pedacinhos de papel feios presos dentro dos bicos de picô",
      "❌ Programar os bicos com pouca densidade de linha, fazendo o picô murchar e desmanchar na primeira lavagem",
      "❌ Cortar o tecido rente demais antes da costura de travamento, soltando os fios da trama"
    ],
    troubleshootingTips: [
      "Se os bicos de picô ficarem frouxos após lavar a entretela: Aumente a densidade do ponto de cetim para 0.35 mm e use duas camadas de entretela solúvel.",
      "Se a linha desfiar durante a costura do picô: Reduza a velocidade para 550 PPM e use agulha ponta aguda 70/10 Microtex.",
      "Se o tecido repuxar na borda: Use bastidor bem tensionado e aplique uma costura de alinhavo prévia."
    ],
    dicaArtrelados: "Para fazer toalhas de lavabo com picô de arrancar suspiros das clientes: use linha de bordar com brilho acetinado na cor dourada suave ou branca sobre linho cru e lave em água morna com umas gotinhas de amaciante neutro! A borda fica macia, perfumada e com caimento de peça de castelo europeu!",
    voceSabia: "O ponto picô era um dos acabamentos mais caros da corte da rainha Maria Antonieta na França do século XVIII, onde cada metro de renda com picô feito à mão valia o equivalente a semanas de trabalho de um artesão real!",
    practicalExercise: "Digitalize ou teste uma matriz de borda com picô em um retalho de tecido fino sobre entretela solúvel. Lave na torneira com água morna e veja como a água dissolve o plástico e revela uma borda rendada perfeita.",
    quickSummary: "Ponto decorativo rendado em pequenos bicos pontiagudos que sela a borda do tecido e confere acabamento clássico de luxo.",
    recommendedSettings: {
      density: "0.35 mm a 0.38 mm no cordão e bicos",
      speedPPM: "550 a 650 PPM",
      needleType: "70/10 ou 75/11 Ponta Aguda Microtex",
      stabilizer: "Duas camadas de entretela hidrossolúvel de 80g"
    },
    relatedTerms: [
      "Bordado Richelieu (Cutwork)",
      "Entretela Hidrossolúvel (Water-Soluble)",
      "Ponto Cheio / Cetim (Satin Stitch)",
      "Acabamento Heirloom / Enxoval de Luxo",
      "Renda Têxtil"
    ],
    tags: ["r-081", "reforco de borda", "pico eletronico", "renda", "enxoval", "luxo", "toalhas", "artrelados"],
    bibliographicReferences: [
      "ECOLE LESAGE PARIS. Classical French Embroidery Finishes & Picot Edge Traditions. Paris, 2022.",
      "WILCOM INTERNATIONAL. Digitizing Heirloom Borders and Picot Lace Finishes. Sydney, 2023.",
      "ARTRELADOS. Guia de Bordas Rendadas, Picô e Acabamentos Finos para Enxovais. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-082-regulagem-de-tensao-da-mola-tira-fio",
    code: "R-082",
    letter: "R",
    term: "Regulagem de Tensão da Mola Tira-Fio (Check Spring Stroke and Tension Adjustment)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do inglês check spring (mola de verificação/compensação) e do latim regulare (ajustar por regra). Componente de micro-dinâmica de linha desde os primórdios da máquina de costura.",
    summary: "Ajuste milimétrico da força e do curso de movimento da mola flexível que mantém o fio esticado no instante da laçada.",
    definition: "A Regulagem de Tensão da Mola Tira-Fio (Check Spring Stroke and Tension Adjustment / Take-up Spring Calibration) é o procedimento mecânico de alta precisão que calibra dois parâmetros fundamentais do conjunto tensor superior: 1) A pressão da mola helicoidal interna (força de retorno); e 2) O curso angular de deflexão (movimento vertical de 5 mm a 8 mm delimitado pelo batente metálico). Sua função é manter a linha superior sob suave tração residual até que a ponta da agulha penetre no tecido e a ponta da lançadeira capture o laço.",
    technicalDetails: "Se a mola estiver muito frouxa ou com curso curto, o fio fica solto antes da descida da agulha, provocando laçadas duplas (*bird nesting*) e quebras de agulha; se estiver muito dura ou com curso excessivo, a mola puxa o fio antes da captura pela lançadeira, gerando pontos pulados sistemáticos. A regulagem é feita através do parafuso fenda central do bloco tensor.",
    beginnerExplanation: "A mola tira-fio é aquela molinha fina como um cabelinho de aço que fica pulando para cima e para baixo do lado do botão de tensão onde você passa a linha. Ela precisa estar regulada certinha para segurar a linha esticadinha na hora exata em que a agulha desce para furar o tecido.",
    howItWorks: [
      "1. A linha passa entre os discos tensores e é enganchada na curva da mola tira-fio.",
      "2. Conforme a alavanca puxa-fio sobe, a mola é defletida para cima absorvendo a tensão.",
      "3. Quando a agulha desce, a mola mantém o fio esticado impedindo que ele embole.",
      "4. No momento em que a agulha atinge o tecido, a mola encosta suavemente no batente e libera a linha.",
      "5. A lançadeira entra no laço perfeitamente formado sem folgas de fio."
    ],
    construction: [
      "Mola em fio de aço-mola fosfatizado de alta elasticidade (Ø 0,4 mm a 0,6 mm)",
      "Eixo tensor fatiado com rosca de ajuste micrométrico",
      "Placa de batente de fim de curso (Stopper plate)",
      "Porca de trava e anel cônico de retenção"
    ],
    mainTypes: [
      "Mola Tira-Fio para Máquinas Monocabeça Domésticas / Semi-Industriais",
      "Conjunto de Mola Tira-Fio de Cabeçote Industrial Multiagulhas",
      "Mola Tira-Fio Revestida para Fios Metálicos Especiais"
    ],
    characteristics: [
      "Eliminação de 100% de pontos frouxos e bolinhas de linha no início das costuras",
      "Formação geométrica impecável do laço de linha para a lançadeira",
      "Operação macia e silenciosa da passagem de linha"
    ],
    applications: [
      "Revisão mecânica periódica e diagnóstico de quebras crônicas de linha.",
      "Adaptação da máquina para fios muito finos (60wt/75wt) ou muito grossos (30wt).",
      "Manutenção corretiva após embaraçamento severo de linha no bloco tensor."
    ],
    commonErrors: [
      "❌ Bordar com a mola tira-fio quebrada, torta ou desencaixada da ranhura",
      "❌ Apertar o parafuso com força excessiva a ponto de travar o movimento elástico da mola",
      "❌ Não limpar poeiras de linha e fiapos acumulados atrás do bloco da mola"
    ],
    troubleshootingTips: [
      "Se a máquina estiver fazendo um ninho de linha embaixo do tecido logo no primeiro ponto: Verifique se a linha está devidamente passada por dentro da mola tira-fio.",
      "Se a linha estiver arrebentando sempre que a máquina acelera: A mola tira-fio está com pressão muito forte; solte meia volta no parafuso central.",
      "Se a mola estiver caída e mole sem voltar para cima: A mola perdeu a pressão interna ou quebrou o encaixe; faça a troca da pecinha."
    ],
    dicaArtrelados: "A mola tira-fio é a 'alma' da tensão da sua máquina! Para saber se ela está perfeita: puxe a linha com a mão para baixo e solte; a molinha deve descer macia e pular de volta para cima instantaneamente como um gafanhoto ágil! Se ela voltar devagar ou ficar caída, ela precisa de regulagem!",
    voceSabia: "Uma mola tira-fio em uma máquina industrial trabalhando 8 horas por dia oscila mais de 400.000 vezes em uma única jornada de trabalho sem perder a elasticidade do aço temperado!",
    practicalExercise: "Com a máquina desligada, puxe a linha superior com a mão e observe de perto a molinha de aço se movimentando para baixo até bater no limitador e voltar. Sinta a maciez e a força do retorno elástico.",
    quickSummary: "Regulagem da força e do curso da mola compensadora que mantém a linha esticada no instante exato da descida da agulha.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Universal",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Mola Tira-Fio (Check Spring)",
      "Tensor de Linha Superior",
      "Alavanca Puxa-Fio (Take-Up Lever)",
      "Ninho de Linha (Birdnesting)",
      "Lançadeira Rotativa"
    ],
    tags: ["r-082", "regulagem de tensao", "mola tira fio", "check spring", "mecanica", "tensores", "artrelados"],
    bibliographicReferences: [
      "TAJIMA APPAREL MACHINERY. Check Spring Calibration & Tension Assembly Standards. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL EMBROIDERY. Upper Thread Path Maintenance & Tension Spring Dynamics. Ichinomiya, 2021.",
      "ARTRELADOS. Guia Definitivo de Mecânica, Molas e Ajuste Fino de Tensores de Bordado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-083-ressonancia-harmonica-de-chassi-de-bordadeira",
    code: "R-083",
    letter: "R",
    term: "Ressonância Harmônica de Chassi de Bordadeira (Machine Frame Harmonic Resonance)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim resonantia (eco/repercussão de som) e do grego harmonikos (acordo sonoro). Física de vibrações mecânicas em estruturas industriais.",
    summary: "Vibração mecânica excessiva que ocorre quando a velocidade da máquina atinge a frequência natural da mesa, causando bordados tremidos.",
    definition: "A Ressonância Harmônica de Chassi de Bordadeira (Machine Frame Harmonic Resonance / Chassis Dynamic Resonance Vibration) é o fenômeno físico oscilatório que se manifesta quando a frequência de rotação do eixo principal e a alternância dos motores do pantógrafo (em uma faixa específica de velocidade, como 720-780 PPM) coincidem exatamente com a frequência natural de ressonância do chassi metálico ou da mesa de suporte da máquina. A energia de vibração se amplifica exponencialmente, provocando trepidação visível do cabeçote, ruído sonoro estridente e micro-desvios de traçado na matriz de bordado.",
    technicalDetails: "A ressonância induz acelerações oscilatórias de pico superiores a 1,8G na barra de agulha e no pantógrafo, provocando deslocamentos laterais de até 0,35 mm no ponto de descida da agulha. Pode ser eliminada alterando a velocidade de trabalho em ± 50 PPM (saindo do ponto harmônico crítico) ou instalando calços de desacoplamento elastomérico sob os pés da mesa.",
    beginnerExplanation: "É quando a máquina começa a tremer e chacoalhar a mesa muito forte em uma velocidade específica (por exemplo, quando está em 750 pontinhos por minuto), parecendo um carro em marcha errada. Se você aumentar um pouquinho ou abaixar um pouquinho a velocidade, a máquina volta a ficar lisinha e silenciosa na hora.",
    howItWorks: [
      "1. A máquina atinge a rotação que coincide com a frequência natural da mesa de apoio.",
      "2. As pequenas vibrações naturais do motor se somam às ondas da estrutura.",
      "3. O chassi entra em ressonância e amplifica a trepidação em toda a máquina.",
      "4. O bastidor sofre micro-oscilações no momento da descida da agulha.",
      "5. O bordado apresenta contornos tremidos e letras serrilhadas se a frequência for mantida."
    ],
    construction: [
      "Chassi estrutural fundido em liga de alumínio ou ferro nodular",
      "Pés de apoio niveladores com sapatas de borracha vulcanizada",
      "Tampo de mesa reforçado em compensado naval multilaminado",
      "Travas e tirantes de contraventamento estrutural"
    ],
    mainTypes: [
      "Ressonância Estrutural por Desnivelamento de Piso",
      "Ressonância por Mesa / Cavalete Leve de Madeira Frágil",
      "Ressonância Harmônica Interna de Braço Tubular de Pantógrafo"
    ],
    characteristics: [
      "Trepidação intensa da mesa e de copos ou cones de linha ao redor",
      "Contornos de letras finas com aparência serrilhada ou ondulada",
      "Ruído metálico que desaparece ao mudar a velocidade em 50 PPM"
    ],
    applications: [
      "Instalação, montagem e nivelamento de novas máquinas no ateliê.",
      "Diagnóstico de problemas de alinhamento e qualidade de ponto.",
      "Projetos de isolamento acústico e redução de ruído em ateliês residenciais."
    ],
    commonErrors: [
      "❌ Colocar a máquina de bordar sobre mesinhas de escritório fracas, leves ou com rodízios sem trava",
      "❌ Trabalhar com a máquina desnivelada com um dos pés solto no ar sem encostar no chão",
      "❌ Ignorar a vibração violenta, causando fadiga precoce de parafusos e placas eletrônicas"
    ],
    troubleshootingTips: [
      "Se a máquina começar a vibrar muito forte em uma velocidade específica: Mude a velocidade no painel aumentando 50 PPM ou diminuindo 50 PPM; a vibração sumirá imediatamente.",
      "Se a mesa chacoalhar: Coloque um tapete de borracha de alta densidade (EVA rígido ou borracha de pneu reciclado) sob os pés da mesa.",
      "Se o piso for irregular: Nivele os 4 pés da máquina com um nível de bolha de pedreiro até a bolha ficar 100% centralizada."
    ],
    dicaArtrelados: "Uma máquina de bordar precisa de uma mesa firme e pesada como uma rocha! Se a sua mesa treme, coloque um tapetinho emborrachado grosso embaixo dos pés da mesa e ajuste a velocidade para a máquina trabalhar suave e gostosa como um carro de luxo na estrada!",
    voceSabia: "O mesmo princípio de ressonância harmônica que faz uma máquina de bordar tremer foi o responsável pelo colapso da famosa ponte Tacoma Narrows nos Estados Unidos em 1940, quando ventos moderados atingiram a frequência natural da estrutura!",
    practicalExercise: "Ligue sua máquina e varie a velocidade de 600 PPM até 850 PPM de 50 em 50 pontos. Observe com a mão sobre a mesa em qual velocidade a máquina vibra mais e em qual velocidade ela roda mais macia e silenciosa.",
    quickSummary: "Vibração que acontece quando a velocidade da máquina coincide com a frequência natural da mesa, facilmente solucionada mudando a rotação ou nivelando a base.",
    recommendedSettings: {
      speedPPM: "Evitar a faixa de ressonância crítica (operar em 700 ou 800 PPM)",
      needleType: "75/11 Universal",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Velocidade de Bordado (PPM)",
      "Nivelamento de Máquina",
      "Amortecedor de Balanço",
      "Vibração Mecânica",
      "Pantógrafo de Bordado"
    ],
    tags: ["r-083", "ressonancia harmonica", "vibracao", "chassi", "nivelamento", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL MACHINERY. Vibration Isolation & Structural Dynamic Resonance Standards. Nagoya, 2022.",
      "BARUDAN PRECISION ENGINEERING. Mechanical Frame Stability and Noise Control Manual. Ichinomiya, 2021.",
      "ARTRELADOS. Nivelamento, Ergonomia e Instalação Perfeita de Máquinas de Bordar no Ateliê. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-084-retracao-higroscopica-de-fio-de-algodao-e-viscose",
    code: "R-084",
    letter: "R",
    term: "Retração Higroscópica de Fio de Algodão e Viscose (Hygroscopic Thread Shrinkage)",
    level: "Avançado 🔴",
    category: "Agulhas e Fios de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim retractio (encolhimento) e do grego hygros (umidade) e skopein (observar). Comportamento termohigrométrico de fibras têxteis celulósicas.",
    summary: "Absorção e perda de umidade ambiente pelas linhas naturais que altera a espessura do fio e causa encolhimento pós-lavagem.",
    definition: "A Retração Higroscópica de Fio de Algodão e Viscose (Hygroscopic Thread Shrinkage / Regain-Induced Fiber Swelling) é o fenômeno físico-químico característico das fibras têxteis de origem celulósica (algodão natural, viscose rayon e linho) pelo qual a estrutura macromolecular absorve moléculas de água da umidade relativa do ar (tendo taxa de recuperação de umidade natural de 8,5% a 13%, comparada a apenas 0,4% do poliéster). Essa hidratação provoca o inchaço transversal da fibra e um encurtamento longitudinal de até 3% a 5% após o primeiro ciclo de lavagem e secagem.",
    technicalDetails: "Ao absorver umidade, o diâmetro do fio de viscose aumenta em até 15%, reduzindo os interstícios da matriz bordada e tornando o preenchimento mais fechado; porém, na secagem, o encolhimento longitudinal gera forças de tração radial que podem repuxar tecidos leves se a matriz tiver sido programada com densidade excessiva (> 0.38 mm) ou compensação de repuxo insuficiente (< 0.40 mm).",
    beginnerExplanation: "As linhas feitas de algodão ou viscose são como esponjinhas naturais que 'bebem' a umidade do ar e encolhem um pouquinho quando a peça é lavada pela primeira vez. Saber disso evita que a sua toalha ou camisa fique toda repuxada e enrugada em volta do bordado depois da primeira lavada.",
    howItWorks: [
      "1. A linha de viscose ou algodão absorve umidade do ar do ateliê durante o bordado.",
      "2. Os pontos são assentados no tecido com o fio em estado expandido.",
      "3. O cliente lava a peça bordada e a coloca para secar ao sol ou na secadora.",
      "4. As moléculas de água evaporam e as pontes de hidrogênio da celulose se contraem.",
      "5. O fio encolhe suavemente no comprimento; se houver entretela recortável estável por baixo, o tecido permanece 100% plano.",
      "6. O bordado preserva seu caimento macio e brilho sedoso original."
    ],
    construction: [
      "Polímero de celulose regenerada de polpa de madeira (Viscose Rayon)",
      "Acabamento hidrofílico com agentes antiestáticos e amaciantes",
      "Taxa padrão de umidade comercial (Moisture Regain: 11% para Viscose, 8.5% para Algodão)",
      "Resistência à tração úmida (Wet Tenacity)"
    ],
    mainTypes: [
      "Retração em Linha de Viscose Rayon (Brilho Intenso e Alta Absorção)",
      "Retração em Linha de 100% Algodão Mercerizado Egípcio (Toque Fosco Vintage)",
      "Retração Diferencial em Tecidos Mistos (Bordado em Viscose sobre Tecido de Poliéster)"
    ],
    characteristics: [
      "Toque incomparavelmente macio e caimento ultra-fluido na pele",
      "Brilho suave de nobreza artística superior ao poliéster",
      "Exigência de entretela estável e lavagem com água fria e sabão neutro"
    ],
    applications: [
      "Enxovais de bebê de alto luxo, vestidos de batizado e batas nobres.",
      "Bordados em vestidos de noiva de seda, linho puro e cetim de viscose.",
      "Peças com efeito artesanal vintage e restauração têxtil."
    ],
    commonErrors: [
      "❌ Bordar com linha de viscose em matriz super densa com entretela rasgável fina e lavar em água quente, enrugando todo o tecido",
      "❌ Guardar cones de viscose em locais úmidos ou com mofo, alterando a resistência mecânica do fio",
      "❌ Usar alvejante com cloro em bordados de viscose, dissolvendo as fibras celulósicas"
    ],
    troubleshootingTips: [
      "Se o bordado de viscose enrugar após a primeira lavagem: Oriente sempre o cliente a passar a peça a ferro pelo avesso com vapor e um paninho de algodão por cima.",
      "Se você bordar em tecidos finos de linho com linha de viscose: Utilize sempre entretela recortável (Cutaway) de 60g a 80g para travar a estrutura mecânica.",
      "Se a linha de viscose quebrar fácil: Aumente a umidade do ateliê (com umidificador) ou use agulha 75/11 com olho polido."
    ],
    dicaArtrelados: "A linha de viscose rayon tem o brilho mais lindo e macio do mundo para roupinhas de bebê e paramentos! O segredo de mestre da Artrelados: use entretela de boa qualidade e sempre inclua o 'Cartãozinho de Cuidados' avisando a cliente para lavar com sabão neutro e secar na sombra! O bordado fica impecável por décadas!",
    voceSabia: "A viscose foi a primeira fibra têxtil artificial do mundo, criada em 1884 pelo cientista francês Hilaire de Chardonnet a partir da polpa de madeira para imitar a seda natural!",
    practicalExercise: "Borde uma pequena inicial com linha de poliéster e outra com linha de viscose no mesmo pedaço de tricoline. Molhe as duas amostras com água fria e deixe secar na mesa: sinta como a viscose fica com toque sedoso e caimento incrivelmente macio.",
    quickSummary: "Comportamento das linhas de algodão e viscose que absorvem umidade do ar e exigem entretela estável para evitar enrugamento pós-lavagem.",
    recommendedSettings: {
      density: "0.42 mm a 0.46 mm (mais arejada que o poliéster)",
      speedPPM: "600 a 750 PPM",
      needleType: "70/10 ou 75/11 Ponta Bola Fina ou Microtex",
      stabilizer: "Entretela recortável ou hidrossolúvel de boa gramatura",
      threadTension: "Leve e equilibrada (90gf a 100gf)"
    },
    relatedTerms: [
      "Linha de Viscose Rayon (Rayon Thread)",
      "Linha de Algodão (Cotton Thread)",
      "Higroscopia Têxtil (Moisture Regain)",
      "Entretela Recortável (Cutaway)",
      "Cuidados e Lavagem de Bordados"
    ],
    tags: ["r-084", "retracao higroscopica", "viscose", "algodao", "fios", "lavagem", "enxoval", "artrelados"],
    bibliographicReferences: [
      "MADEIRA GARN. Viscose Rayon Embroidery Threads: Processing, Moisture Regain and Care Standards. Freiburg, 2022.",
      "GUNOLD GMBH. Rayon vs Polyester Dynamics in Fine Embroidery. Stockstadt, 2021.",
      "ARTRELADOS. Guia Técnico de Fios Nobres: Viscose, Algodão e Fibras Naturais no Bordado Eletrônico. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-085-ranhura-longitudinal-da-haste-da-agulha",
    code: "R-085",
    letter: "R",
    term: "Ranhura Longitudinal da Haste da Agulha (Needle Blade Long Groove)",
    level: "Avançado 🔴",
    category: "Agulhas e Fios de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do francês rainure (canaleta/entalhe) e do latim acus (agulha). Detalhe anatômico patenteado nas primeiras agulhas de máquina de costura no século XIX.",
    summary: "Calha côncava ao longo do corpo da agulha onde a linha se esconde para não ser esmagada contra o tecido na penetração.",
    definition: "A Ranhura Longitudinal da Haste da Agulha (Needle Blade Long Groove / Front Thread Channel) é o canal côncavo retilíneo usinado ao longo de toda a extensão frontal da lâmina da agulha de bordar, estendendo-se do cabo superior até a borda superior do olho. Sua função geométrica e aerodinâmica primordial é abrigar e proteger o filamento da linha de bordar durante a descida em alta velocidade, permitindo que a linha deslize sem sofrer atrito de esmagamento ou cisalhamento contra a trama densa do tecido e a entretela.",
    technicalDetails: "A profundidade da ranhura longitudinal corresponde a aproximadamente 40% a 50% do diâmetro total da lâmina da agulha (ex: em uma agulha 75/11 de Ø 0,75 mm, a profundidade do canal é de cerca de 0,32 mm). Se a titulação da linha for incompatível com o tamanho da agulha (ex: fio grosso 30wt em agulha 65/9), a linha ultrapassa a borda da ranhura, sofre fricção severa e se rompe por aquecimento ou desfiamento.",
    beginnerExplanation: "É aquela canaletinha fundinha que corre na frente da agulha de cima a baixo. Quando a agulha fura o pano bem rápido, a linha 'se esconde' dentro dessa canaleta para não ser espremida contra o tecido. Se a agulha for fina demais para a linha, a linha sobra para fora do canal e arrebenta.",
    howItWorks: [
      "1. A linha superior corre alinhada na face frontal da agulha.",
      "2. Ao penetrar no tecido, o filamento se acomoda perfeitamente no interior da ranhura longitudinal.",
      "3. A agulha atravessa o tecido e a entretela sem esmagar as fibras da linha.",
      "4. Quando a agulha atinge o ponto morto inferior e inicia a subida de 2 mm, a linha do lado da ranhura desliza livremente.",
      "5. No lado oposto (onde não há ranhura contínua), o atrito com o tecido retém a linha e força a abertura do laço perfeito para a lançadeira pescar."
    ],
    construction: [
      "Lâmina em aço carbono ligado ou temperado de alta retidão",
      "Canal côncavo usinado com acabamento espelhado de ultra-baixa rugosidade (Ra < 0,05 µm)",
      "Transição arredondada para o orifício do olho da agulha",
      "Revestimento externo em Cromo duro ou Nitreto de Titânio"
    ],
    mainTypes: [
      "Ranhura Padrão Universal (Standard Single Groove)",
      "Ranhura Profunda Reforçada para Bordado (Deep Thread Groove / System DBxK5)",
      "Ranhura Dupla para Fios Especiais e Metálicos"
    ],
    characteristics: [
      "Proteção integral dos filamentos da linha contra desfiamento",
      "Redução drástica do aquecimento da agulha por fricção mecânica",
      "Formação assimétrica fundamental para a abertura estável do laço inferior"
    ],
    applications: [
      "Bordados em tecidos pesados, sarjas, jeans, bonés e couro.",
      "Diagnóstico e correção de quebras repetitivas de linha superior.",
      "Seleção correta da relação calibre de agulha versus espessura de linha."
    ],
    commonErrors: [
      "❌ Usar linha grossa em agulha fina (ex: linha 30wt em agulha 70/10), deixando o fio desprotegido fora da ranhura",
      "❌ Instalar a agulha virada de lado ou ao contrário na barra de agulha, escondendo a ranhura na posição errada",
      "❌ Continuar bordando com a ranhura suja de cola adesiva de spray ressecada"
    ],
    troubleshootingTips: [
      "Se a linha estiver desfiando em 'pelinhos' antes de quebrar: A linha está muito grossa para a agulha; troque para uma agulha de calibre maior (ex: passe de 75/11 para 80/12 ou 90/14).",
      "Se a máquina não formar ponto nenhum: Verifique se a agulha foi colocada com a ranhura virada estritamente para a frente (ou para o lado correto indicado pelo manual).",
      "Se houver quebra constante em tecidos sintéticos: Limpe a ranhura da agulha com álcool isopropílico para retirar resíduos de cola de entretela."
    ],
    dicaArtrelados: "O teste da agulha inclinada: pegue a agulha fora da máquina, passe um pedaço da sua linha pelo olho e incline a agulha a 45 graus. A agulha deve escorregar suavemente pela linha sob o próprio peso! Se ela travar ou descer agarrando, a linha é grossa demais para a ranhura daquela agulha!",
    voceSabia: "Nas máquinas de bordar industriais com agulhas de cabo redondo (sistema DBxK5), a ranhura longa é até 15% mais profunda que nas agulhas de costura comum para suportar velocidades de mais de 1.000 pontos por minuto!",
    practicalExercise: "Pegue uma agulha nova sob boa luz. Passe a ponta da sua unha ao longo da haste frontal e sinta o canal profundo da ranhura. Em seguida, vire a agulha e observe a parte de trás lisa e a cava (scarf) perto do olho.",
    quickSummary: "Canaleta na frente da agulha que protege a linha contra atrito e esmagamento durante a penetração no tecido.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "Agulha compatível com a espessura da linha (ex: 75/11 para linha 40wt)",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Cava da Agulha (Needle Scarf)",
      "Olho da Agulha (Needle Eye)",
      "Calibre da Agulha (Needle Size)",
      "Linha de Bordar 40wt",
      "Formação do Laço (Loop Formation)"
    ],
    tags: ["r-085", "ranhura de agulha", "agulha", "haste", "fios", "mecanica", "artrelados"],
    bibliographicReferences: [
      "ORGAN NEEDLES CO. Industrial Embroidery Needle Anatomy & Groove Engineering Standards. Tokyo, 2022.",
      "SCHMETZ. Technical Needle Compendium: Long Groove and Scarf Dynamics. Albstadt, 2021.",
      "ARTRELADOS. Anatomia da Agulha de Bordado: Ranhuras, Pontas, Cabos e Calibração. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-086-regulagem-de-altura-da-barra-do-calcador",
    code: "R-086",
    letter: "R",
    term: "Regulagem de Altura da Barra do Calcador (Presser Foot Bar Height Clearance Calibration)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim regulare (ajustar) e do francês presseur (que pressiona). Calibração fundamental de tolerância vertical em máquinas de costura e bordado.",
    summary: "Ajuste milimétrico da folga entre a sola do calcador e a chapa de agulha para bordar materiais grossos sem prensar o relevo.",
    definition: "A Regulagem de Altura da Barra do Calcador (Presser Foot Bar Height Clearance Calibration / Foot Stroke Setting) é o procedimento mecânico de ajuste da folga vertical existente entre a face inferior do pé calcador e a chapa de agulha quando a barra de agulha se encontra no ponto morto inferior (Bottom Dead Center - BDC). A distância padrão recomendada situa-se entre 0,5 mm e 1,2 mm (aproximadamente a espessura de uma folha de papel dobrada em duas a quatro partes ou um cartão de visitas de 300g).",
    technicalDetails: "Se a folga for insuficiente (< 0,3 mm), o calcador esmaga o tecido, criando marcas permanentes de atrito em tecidos aveludados e impedindo a expansão do bordado em relevo 3D (EVA); se a folga for excessiva (> 1,8 mm), o calcador não apoia o tecido no momento da subida da agulha, causando o efeito *flagging* (o tecido sobe junto com a agulha), resultando em pontos pulados e quebras de linha.",
    beginnerExplanation: "É o ajuste da 'altura do pezinho da máquina' quando ele desce todo: ele não pode esmagar o tecido como uma prensa nem pode ficar voando alto demais no ar. Ele precisa descer apenas encostando suavemente no pano para segurar o tecido firme sem marcar.",
    howItWorks: [
      "1. Gira-se o volante manual até a agulha atingir a posição mais baixa (ponto morto inferior).",
      "2. Solta-se o parafuso de fixação da barra do pé calcador no cabeçote.",
      "3. Insere-se um gabarito de espessura (ou cartão de visitas/calibrador de lâminas de 0,8 mm) entre a sola do calcador e a chapa.",
      "4. Encosta-se o calcador sobre o gabarito sem forçar.",
      "5. Aperta-se firmemente o parafuso de retenção da barra e gira-se o volante para conferir o movimento livre."
    ],
    construction: [
      "Barra de guia cilíndrica em aço retificado",
      "Abraçadeira de aperto com parafuso sextavado ou fenda de fixação",
      "Mola de impulsão e mola de retorno vertical",
      "Pé calcador com orifício de agulha centralizado"
    ],
    mainTypes: [
      "Regulagem Mecânica por Parafuso de Barra (Padrão Industrial)",
      "Regulagem Eletrônica de Altura do Calcador no Painel (Modelos Computadorizados Modernos)",
      "Calcador de Altura Flutuante com Mola Compensadora Automática"
    ],
    characteristics: [
      "Bordado impecável em toalhas atoalhadas sem achatar a felpa",
      "Perfeita preservação da altura e definição em bordados 3D com EVA",
      "Eliminação definitiva do efeito de tecido 'pulando' (*flagging*)"
    ],
    applications: [
      "Bordados em jaquetas acolchoadas, couro espesso e bonés estruturados.",
      "Bordados em relevo 3D (puffy foam) para bonés e jaquetas.",
      "Toalhas de banho felpudas, veludo e cobertores de bebê."
    ],
    commonErrors: [
      "❌ Deixar o calcador muito baixo ao bordar toalhas, esmagando a felpa e deixando marcas circulares brilhantes",
      "❌ Deixar o calcador muito alto ao bordar tecidos finos, fazendo o pano pular e a linha arrebentar",
      "❌ Apertar o parafuso da barra fora do esquadro, entortando o calcador contra a descida da agulha"
    ],
    troubleshootingTips: [
      "Se o pé calcador estiver batendo e fazendo barulho estalado forte no tecido: Ele está muito baixo; suba a barra em 0,5 mm.",
      "Se os pontos estiverem pulando em tecido fino elástico: O calcador está muito alto e não está segurando o tecido; abaixe a barra.",
      "Se a agulha bater no pezinho: O calcador foi apertado desalinhado; solte e centralize o furo do calcador com a descida exata da agulha."
    ],
    dicaArtrelados: "O truque do cartão de visitas para toalhas e tecidos normais: coloque a agulha toda para baixo, coloque um cartão de visitas de papel comum embaixo do pezinho e aperte o parafuso até o cartão passar com uma leve fricção! É a folga perfeita para bordar 95% de todos os tecidos do seu ateliê!",
    voceSabia: "Em máquinas industriais de última geração como Tajima e Barudan, a altura do calcador pode ser programada digitalmente ponto a ponto na própria matriz, subindo e descendo conforme o relevo do desenho!",
    practicalExercise: "Com a máquina desligada, gire o volante até a agulha descer no ponto mais baixo. Tente passar uma folha de papel embaixo do pezinho calcador e sinta a folga existente na sua máquina.",
    quickSummary: "Calibração da distância entre o pé calcador e a chapa de agulha para estabilizar o tecido sem esmagar as fibras nem deixar o pano pular.",
    recommendedSettings: {
      speedPPM: "700 a 850 PPM",
      needleType: "75/11 ou 80/12 Ponta Bola",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Pé Calcador (Presser Foot)",
      "Flagging (Afundamento do Tecido)",
      "Bordado 3D em Relevo (Puffy Foam)",
      "Ponto Morto Inferior (BDC)",
      "Manutenção Preventiva"
    ],
    tags: ["r-086", "regulagem do calcador", "pe calcador", "altura", "mecanica", "toalha", "artrelados"],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINERY. Presser Foot Height & Stroke Mechanical Alignment Manual. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL EMBROIDERY. Presser Foot Clearance & Flagging Prevention. Ichinomiya, 2021.",
      "ARTRELADOS. Manual de Mecânica e Regulagens Finas para Bordadeiras Industriais e Domésticas. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-087-retencao-magnetica-de-caixa-de-bobina",
    code: "R-087",
    letter: "R",
    term: "Retenção Magnética de Caixa de Bobina (Magnetic Core Bobbin Retention System)",
    level: "Intermediário 🟡",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim retentio (ato de reter/segurar) e do grego magnes (ímã). Inovação tecnológica moderna em sistemas de alimentação de fio inferior.",
    summary: "Sistema com ímã permanente no fundo da caixa de bobina que impede a carretilha de girar em falso e oscilar a tensão.",
    definition: "A Retenção Magnética de Caixa de Bobina (Magnetic Core Bobbin Retention System / Magnetic Anti-Backlash Bobbin Case) é a tecnologia empregada em caixas de bobina de alto desempenho que incorpora um ímã permanente de neodímio sinterizado na base cilíndrica interna ou utiliza carretilhas industriais com núcleo magnético. Sua finalidade é criar uma atração magnética constante sobre a carretilha, eliminando a folga axial e prevenindo a rotação inercial livre (o fenômeno de *backlash* ou giro em falso quando a máquina para bruscamente de 900 para 0 PPM).",
    technicalDetails: "Ao eliminar o giro inercial da carretilha, a força magnética estabiliza o torque de desenrolamento entre 18gf e 22gf com desvio padrão inferior a 1,5gf ao longo de todo o diâmetro da bobina (desde o cone cheio até os últimos 5 metros de fio), evitando o afrouxamento e o embaraçamento de linha inferior dentro da pista da lançadeira.",
    beginnerExplanation: "É uma caixa de bobina especial que tem um ímã no fundo: ela 'puxa' a carretilha de ferro ou magnética para baixo, fazendo a carretilha girar macia e parar na hora exata em que a máquina para, sem deixar a linha de baixo sobrar solta e embolar.",
    howItWorks: [
      "1. A bobina com núcleo magnético ou carretilha metálica é inserida na caixa de bobina.",
      "2. O campo magnético permanente atrai o miolo da bobina contra o leito da caixa.",
      "3. Conforme a máquina costura, a linha se desenrola sob tensão de frenagem magnética constante.",
      "4. Quando a máquina desacelera ou para para cortar a linha, o ímã freia a carretilha instantaneamente.",
      "5. Elimina-se completamente a mola de folga (*backlash spring*) de metal tradicional que desgastava com o tempo."
    ],
    construction: [
      "Corpo da caixa de bobina em liga de aço inoxidável amagnética ou polímero de engenharia",
      "Pastilha de ímã de Neodímio-Ferro-Boro (NdFeB) embutida na base",
      "Mola de tensão inferior em lâmina de aço carbono",
      "Parafuso de ajuste de tensão micrométrica"
    ],
    mainTypes: [
      "Caixa de Bobina com Ímã Permanente na Base",
      "Bobinas Descartáveis de Núcleo Magnético (Magnetic Core Fil-Tec Bobbins)",
      "Insertos Magnéticos Retroadaptáveis para Caixas Padrão"
    ],
    characteristics: [
      "Tensão inferior ultra-uniforme do primeiro ao último ponto",
      "Zero enrolamento de linha no eixo da lançadeira por parada brusca",
      "Avesso do bordado 100% constante mesmo em alta velocidade (1.000 PPM)"
    ],
    applications: [
      "Produção industrial ininterrupta em confecções e ateliês de alto volume.",
      "Bordados finos onde variações de tensão na linha branca são inaceitáveis.",
      "Uso com bobinas industriais pré-enroladas de alto rendimento."
    ],
    commonErrors: [
      "❌ Tentar usar bobinas de plástico comuns em caixas magnéticas esperando efeito de atração",
      "❌ Deixar poeira metálica ou limalha grudar no ímã da caixa de bobina sem limpar",
      "❌ Colocar a bobina magnética virada do lado invertido (com o polo para cima)"
    ],
    troubleshootingTips: [
      "Se a linha branca estiver subindo para a frente no final da bobina: A bobina comum está girando em falso; utilize bobinas magnéticas ou instale uma mola anti-backlash.",
      "Se a carretilha estiver pesada para girar: Limpe a face do ímã com um pincel macio para remover poeira e fiapos de linha acumulados.",
      "Se a caixa de bobina não segurar a tensão: Verifique se o parafuso da mola de lâmina não está frouxo."
    ],
    dicaArtrelados: "Se você trabalha com produção e quer nunca mais ver a linha branca subindo no finalzinho da carretilha: experimente as bobinas magnéticas (tipo Fil-Tec Magna-Glide)! Elas mantêm a tensão perfeita até o último centímetro de linha e você nunca mais vai perder uma toalha por causa de carretilha desregulada!",
    voceSabia: "O sistema magnético foi desenvolvido originalmente nos Estados Unidos para substituir as molinhas de aço que perdiam a pressão após alguns meses de uso intenso nas fábricas de bordado de uniformes!",
    practicalExercise: "Aproxime um clipe de papel do fundo da sua caixa de bobina para verificar se a sua máquina já possui retenção magnética. Se o clipe for atraído, você tem uma caixa magnética pronta para bobinas de núcleo metálico!",
    quickSummary: "Sistema com ímã permanente que estabiliza o giro da carretilha e mantém a tensão da linha inferior uniforme até o final.",
    recommendedSettings: {
      speedPPM: "800 a 1000 PPM",
      needleType: "Compatível",
      stabilizer: "Conforme tecido",
      threadTension: "18gf a 22gf no tensiômetro"
    },
    relatedTerms: [
      "Caixa de Bobina (Bobbin Case)",
      "Bobina Pré-Enrolada (Pre-Wound Bobbin)",
      "Tensiômetro Towa",
      "Backlash (Giro em Falso da Bobina)",
      "Tensão Inferior"
    ],
    tags: ["r-087", "retencao magnetica", "bobina", "caixa de bobina", "tensao inferior", "magna glide", "artrelados"],
    bibliographicReferences: [
      "FIL-TEC EMBROIDERY PRODUCTS. Magnetic Core Bobbin Technology & Tension Consistency Reports. Maryland, 2022.",
      "TOWA APPARATUS MFG. Electronic & Mechanical Bobbin Tension Measurement Standards. Tokyo, 2021.",
      "ARTRELADOS. Guia de Componentes Magnéticos e Estabilidade de Ponto no Bordado Industrial. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-088-repuxamento-por-tensao-diagonal",
    code: "R-088",
    letter: "R",
    term: "Repuxamento por Tensão Diagonal (Bias Grain Pull Distortion)",
    level: "Avançado 🔴",
    category: "Física e Comportamento dos Tecidos",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do francês repousser (empurrar de volta) e do grego diagonios (que passa pelos vértices opostos). Princípio de anisotropia mecânica de tecidos planos.",
    summary: "Deformação e enrugamento severo que ocorre quando os pontos são bordados a 45 graus em relação ao sentido do fio do tecido.",
    definition: "O Repuxamento por Tensão Diagonal (Bias Grain Pull Distortion / 45-Degree Fabric Bias Shrinkage) é a deformação mecânica anisotrópica resultante da aplicação de linhas de pontos com ângulo orientado a aproximadamente 45° em relação aos eixos ortogonais da trama e do urdume de um tecido plano ou malha. Como o viés (diagonal) é a direção de menor rigidez estrutural e máxima elasticidade por cisalhamento do tecido, as forças de tração do ponto provocam um encurtamento diagonal acentuado, gerando pregas diagonais permanentes e distorção dos contornos.",
    technicalDetails: "O módulo de elasticidade ao cisalhamento no viés de um tecido de algodão pode ser até 70% inferior ao módulo nos eixos da trama e do urdume. Para mitigar o repuxamento diagonal, a compensação de repuxo (*pull compensation*) deve ser incrementada em pelo menos +0,15 mm a +0,25 mm, e a costura de base deve utilizar obrigatoriamente grade ortogonal dupla (Full Tatami Underlay) ancorada nos eixos principais de 0° e 90°.",
    beginnerExplanation: "Todo tecido estica muito mais quando você puxa ele na diagonal (no viés). Quando o bordado é feito com pontos deitados nessa mesma diagonal de 45 graus, a linha puxa o tecido com muita força e faz o pano enrugar e ficar torto. Para evitar isso, usamos entretelas mais firmes e reforços no programa.",
    howItWorks: [
      "1. A matriz executa pontos de cetim ou tatami com inclinação a 45 graus em relação à trama.",
      "2. A tração natural de retorno elástico da linha puxa as fibras do tecido na direção do viés.",
      "3. As interseções dos fios de trama e urdume deslizam umas sobre as outras sem resistência rígida.",
      "4. O tecido se fecha na diagonal, criando dobras diagonais e afastando os contornos externos.",
      "5. A matriz perde o encaixe perfeito com a linha de contorno bordada em seguida."
    ],
    construction: [
      "Estrutura têxtil em tafetá, sarja ou malha jersey",
      "Vetor de direção do ponto orientado no viés (45° / 135°)",
      "Costura de base com grade de sustentação ortogonal (0°/90°)",
      "Entretela de alta estabilidade multidirecional"
    ],
    mainTypes: [
      "Repuxamento Diagonal em Tecidos Planos de Algodão e Linho",
      "Distorção por Cisalhamento em Malhas Elásticas (Piquet e Meia Malha)",
      "Deformação em Sedas e Tecidos Finos no Viés"
    ],
    characteristics: [
      "Causa número 1 de desalinhamento de contornos em matrizes complexas",
      "Formação de ondas e pregas diagonais que não saem no ferro de passar",
      "Necessidade de reforço de base ortogonal de travamento"
    ],
    applications: [
      "Programação de logotipos e brasões com múltiplos ângulos de preenchimento.",
      "Bordados em camisas sociais de tricoline, polos piquet e linho.",
      "Diagnóstico de matrizes que enrugam mesmo com bastidor bem colocado."
    ],
    commonErrors: [
      "❌ Bordar blocos grandes de tatami a 45° sem colocar costura de base prévia em grade",
      "❌ Usar entretela rasgável que rasga na diagonal junto com o movimento dos pontos",
      "❌ Aumentar a tensão da linha achando que vai resolver o problema de tecido enrugado"
    ],
    troubleshootingTips: [
      "Se o contorno externo ficar afastado do preenchimento nas diagonais: Aumente a compensação de repuxo para 0.45 mm no software e mude o ângulo do ponto para 30° ou 60°.",
      "Se o tecido formar ondas diagonais: Use entretela recortável multidirecional (Cutaway) e ative a costura de base em grade dupla.",
      "Se o bordado repuxar na camisa polo: Aplique entretela de malha termocolante no avesso antes de colocar no bastidor."
    ],
    dicaArtrelados: "A regra de ouro dos ângulos: evite sempre colocar os pontos exatamente a 45 graus do tecido! Se você inclinar o ponto para 35 graus ou 55 graus, você quebra a linha do viés e o tecido fica retinho e sem nenhuma ruga! É um segredo simples de programação que salva qualquer camisa social!",
    voceSabia: "Os alfaiates de alta costura utilizam o corte no viés para fazer vestidos com caimento fluido exatamente porque o tecido se deforma na diagonal; no bordado, fazemos o oposto para travar essa elasticidade!",
    practicalExercise: "Pegue um pedaço quadrado de tricoline: puxe na horizontal (não estica), puxe na vertical (não estica) e puxe nas pontas diagonais (estica muito!). Sinta nos dedos a física do repuxamento diagonal acontecendo.",
    quickSummary: "Deformação que ocorre quando os pontos são bordados na direção diagonal do tecido, exigindo reforço de base e entretela estável.",
    recommendedSettings: {
      density: "0.40 mm com compensação de repuxo de 0.40 mm a 0.45 mm",
      speedPPM: "700 a 800 PPM",
      needleType: "70/10 ou 75/11 Ponta Bola Fina",
      stabilizer: "Entretela recortável de alta estabilidade (Cutaway 70g a 80g)"
    },
    relatedTerms: [
      "Compensação de Repuxo (Pull Compensation)",
      "Costura de Base (Underlay)",
      "Sentido do Fio (Grainline)",
      "Entretela Recortável (Cutaway)",
      "Distorção de Matriz"
    ],
    tags: ["r-088", "repuxamento diagonal", "vies", "tecidos", "deformacao", "compensacao", "artrelados"],
    bibliographicReferences: [
      "TEXTILE INSTITUTE INTERNATIONAL. Anisotropic Tensile Properties and Bias Strain in Woven Fabrics. Manchester, 2021.",
      "WILCOM EMBROIDERY STUDIO. Fabric Distortion Management & Underlay Engineering. Sydney, 2023.",
      "ARTRELADOS. Física Têxtil Aplicada ao Bordado: Fio, Trama, Urdume e Viés. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-089-reforco-de-costura-em-grade-cruzada",
    code: "R-089",
    letter: "R",
    term: "Reforço de Costura em Grade Cruzada (Cross-Hatch Underlay Grid Stabilization)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do inglês cross-hatch (hachura cruzada) e do latim stabilis (firme/estável). Técnica de engenharia de bases vetoriais de digitalização.",
    summary: "Estrutura prévia de sustentação com duas camadas de pontos em 90 graus que cria uma rede firme sobre tecidos difíceis.",
    definition: "O Reforço de Costura em Grade Cruzada (Cross-Hatch Underlay Grid Stabilization / Double Tatami Mesh Underlay / Grid Underlay) é o padrão de costura de base estrutural formado por duas passagens consecutivas de pontos corridos longos (3,5 mm a 4,5 mm de comprimento) com espaçamento aberto (entre 1,5 mm e 3,0 mm entre linhas), dispostas ortogonalmente em ângulos cruzados (tipicamente 45° e 135°, ou 0° e 90°). Essa malha prévia ancora o tecido à entretela em formato de treliça bidimensional antes da execução do preenchimento final.",
    technicalDetails: "A grade cruzada cria um suporte de micro-vigas de poliéster que distribui as tensões pontuais em uma área 80% maior, suprimindo o afundamento dos pontos de acabamento em tecidos com felpa alta (como toalhas de banho), malhas caneladas e veludos, sem criar a rigidez excessiva de uma camada sólida de tatami.",
    beginnerExplanation: "É como se a máquina fizesse uma 'redinha de pesca' ou gradezinha de pontos abertos no tecido antes de bordar o desenho por cima. Essa redinha segura o tecido firme preso na entretela e não deixa os pelos da toalha ou a elasticidade da malha estragarem o bordado final.",
    howItWorks: [
      "1. A máquina inicia o objeto bordando uma primeira camada de linhas paralelas abertas (ex: a 45 graus).",
      "2. Em seguida, sem cortar a linha, borda a segunda camada em sentido cruzado a 90 graus da primeira (a 135 graus).",
      "3. Forma-se uma tela quadriculada suave que prensa as fibras superficiais do tecido contra a entretela.",
      "4. A máquina borda o preenchimento de acabamento (tatami ou cetim) sobre essa base estável.",
      "5. Os pontos finais ficam perfeitamente assentados, nítidos e com toque macio."
    ],
    construction: [
      "Vetor de contorno do objeto de preenchimento",
      "Camada de base 1 com espaçamento de 2,0 mm a 3,0 mm",
      "Camada de base 2 em ângulo ortogonal cruzado",
      "Margem de recuo da borda externa (Underlay Inset = 0.8 mm)"
    ],
    mainTypes: [
      "Grade Cruzada Tatami Aberta (Open Mesh Tatami Underlay)",
      "Grade Cruzada Ortogonal com Contorno de Borda (Edge Run + Grid)",
      "Grade Fina para Veludo e Pelúcia"
    ],
    characteristics: [
      "Estabilidade dimensional máxima em tecidos altamente elásticos",
      "Toque final flexível e agradável sem 'efeito papelão'",
      "Eliminação de felpas e pelos escapando entre os pontos de acabamento"
    ],
    applications: [
      "Bordados grandes em toalhas de banho e roupões atoalhados.",
      "Jaquetas de fleece, moletons felpudos e tecidos de plush/veludo.",
      "Logotipos chapados em camisas polo piquet e malha fria."
    ],
    commonErrors: [
      "❌ Programar a grade com linhas muito juntas (< 1.0 mm), transformando a base num bloco grosso e pesado",
      "❌ Deixar a grade encostar na borda extrema do desenho, fazendo pontinhas da base aparecerem para fora do contorno",
      "❌ Não usar grade cruzada ao bordar brasões grandes em tecidos elásticos"
    ],
    troubleshootingTips: [
      "Se os pontos do bordado estiverem afundando e sumindo dentro da toalha: Ative o reforço de grade cruzada com espaçamento de 2,5 mm e coloque plástico hidrossolúvel por cima.",
      "Se o bordado ficar muito duro e armado como uma placa: Aumente o espaçamento da grade para 3,5 mm ou reduza a densidade da camada superior.",
      "Se as pontas da grade aparecerem fora do bordado: Aumente o recuo da borda (Underlay Inset / Margem) para 1,0 mm no software."
    ],
    dicaArtrelados: "Para bordar toalhas atoalhadas grossas sem o desenho afundar: use sempre a grade cruzada na base da matriz e coloque uma folhinha de plástico hidrossolúvel por cima da toalha no bastidor! O bordado fica lisinho como se tivesse sido feito em cima de uma seda!",
    voceSabia: "O conceito de grade cruzada no bordado foi inspirado nas treliças de vigas de aço utilizadas pelos engenheiros civis na construção de pontes suspensas para suportar cargas pesadas com peso mínimo de material!",
    practicalExercise: "No seu programa de matrizes, crie um círculo de 5 cm: configure a costura de base com 'Tatami Duplo / Grade Cruzada' com espaçamento de 2,5 mm. Simule os pontos na tela e veja a formação perfeita da rede de sustentação.",
    quickSummary: "Estrutura prévia de pontos cruzados em 90 graus que estabiliza tecidos difíceis e impede que os pontos finais afundem.",
    recommendedSettings: {
      density: "Espaçamento da grade de 2.0 mm a 3.0 mm (comprimento de ponto 4.0 mm)",
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Bola",
      stabilizer: "Entretela rasgável ou recortável conforme tecido"
    },
    relatedTerms: [
      "Costura de Base (Underlay)",
      "Ponto Tatami / Preenchimento (Tatami Stitch)",
      "Compensação de Repuxo (Pull Compensation)",
      "Plástico Hidrossolúvel (Solvy Film)",
      "Digitalização Estrutural"
    ],
    tags: ["r-089", "grade cruzada", "underlay", "costura de base", "estabilizacao", "toalhas", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Structural Underlay Engineering and Mesh Foundations. Sydney, 2023.",
      "PULSE MICROSYS. Vector Underlay Grid Architectures in Industrial Digitizing. Toronto, 2022.",
      "ARTRELADOS. O Segredo das Estruturas de Base: Underlays, Grades e Sustentação de Matrizes. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-090-revestimento-de-nitreto-de-cromo-em-agulhas",
    code: "R-090",
    letter: "R",
    term: "Revestimento de Nitreto de Cromo em Agulhas (Chromium Nitride Needle Coating - CrN)",
    level: "Avançado 🔴",
    category: "Agulhas e Fios de Bordado",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do grego chroma (cor) e do latim nitrogenium (formador de salitre). Avanço da engenharia de materiais e deposição física de vapor (PVD).",
    summary: "Acabamento metalúrgico ultra-duro e prateado na agulha que dissipa calor e não deixa cola de adesivo grudar no olho.",
    definition: "O Revestimento de Nitreto de Cromo em Agulhas (Chromium Nitride Needle Coating / CrN Physical Vapor Deposition) é a aplicação metalúrgica de uma micro-camada cerâmica de nitreto de cromo (espessura de 1 a 3 micrômetros) sobre o corpo de aço de agulhas de bordado de alto desempenho (como a linha Schmetz SERV 7 ou Organ PD/LP). O tratamento confere extrema dureza superficial (aproximadamente 2.000 a 2.500 HV na escala Vickers), coeficiente de atrito ultrabaixo e excelente resistência antiaderente contra colas, adesivos em spray e resinas de entretelas.",
    technicalDetails: "O revestimento CrN reduz a temperatura da ponta da agulha em até 35°C durante o bordado contínuo a 1.000 PPM em materiais sintéticos densos. Sua superfície hidrofóbica e anti-adesiva impede o acúmulo de 'gomas' de adesivo no olho e na ranhura da agulha, eliminando a quebra de linha por fricção adesiva.",
    beginnerExplanation: "É uma agulha especial que recebe uma camada de proteção ultra-resistente e prateada feita com tecnologia de alta precisão. Ela não esquenta fácil, quase não gasta e não deixa a cola do spray de entretela grudar no buraquinho da agulha, evitando que a linha quebre e embole toda hora.",
    howItWorks: [
      "1. A agulha de aço carbono de alta precisão é colocada em uma câmara de vácuo de plasma PVD.",
      "2. Átomos de cromo e nitrogênio são fundidos na superfície molecular da agulha.",
      "3. Cria-se uma película cerâmica ultra-lisa, dura e prateada brilhante.",
      "4. Durante o bordado em tecidos colados ou sintéticos, a agulha penetra suavemente sem grudar resíduos.",
      "5. A linha corre fria e desimpedida pelo olho e pela ranhura, com vida útil até 3 vezes maior que agulhas de cromo comum."
    ],
    construction: [
      "Núcleo em liga de aço cromo-vanádio temperado",
      "Micro-camada de Nitreto de Cromo (CrN) depositada por PVD",
      "Dureza superficial de 2.200 HV",
      "Geometria reforçada na lâmina anti-deflexão"
    ],
    mainTypes: [
      "Agulhas CrN Anti-Adesivas para Tecidos com Cola e Sprays (Non-Stick)",
      "Agulhas CrN de Ponta Bola para Malhas Sintéticas Densas",
      "Agulhas CrN Reforçadas para Bonés e Couro (SERV 7 CrN)"
    ],
    characteristics: [
      "Resistência superior ao acúmulo de colas e gomas de entretelas",
      "Dissipação térmica de alto nível em alta rotação",
      "Durabilidade mecânica excepcional contra desgaste abrasivo"
    ],
    applications: [
      "Bordados em apliques com termocolante e adesivo temporário em spray.",
      "Bordados em couro legítimo, sintéticos plastificados e impermeáveis.",
      "Produções industriais contínuas em alta velocidade (acima de 900 PPM)."
    ],
    commonErrors: [
      "❌ Limpar agulhas CrN com facas ou estiletes metálicos que riscam a película protetora",
      "❌ Usar agulhas comuns sem revestimento em tecidos com muito spray de cola, sofrendo com quebras a cada 2 minutos",
      "❌ Não trocar a agulha após impactos fortes no bastidor"
    ],
    troubleshootingTips: [
      "Se a agulha estiver ficando 'melada' de cola e partindo a linha: Substitua imediatamente por uma agulha com revestimento antiaderente de Nitreto de Cromo ou Titânio.",
      "Se a linha estiver derretendo por calor em tecido sintético: A agulha está superaquecendo; use agulha CrN e reduza a velocidade para 700 PPM.",
      "Se o furo no tecido ficar muito aberto: Verifique se o calibre da agulha não está grosso demais para o material."
    ],
    dicaArtrelados: "Se você faz muitos apliques usando termocolante ou cola spray temporária: tenha sempre no seu ateliê agulhas antiaderentes (Non-Stick / CrN)! A cola simplesmente não gruda no buraquinho da agulha e você vai bordar os apliques do começo ao fim sem arrebentar nenhuma linha!",
    voceSabia: "O Nitreto de Cromo é o mesmo revestimento metalúrgico utilizado em brocas de perfuração aeroespacial e turbinas de aviões para suportar atrito severo e altas temperaturas!",
    practicalExercise: "Examine uma agulha antiaderente CrN ou de Titânio ao lado de uma agulha comum sob luz forte: observe o acabamento brilhante impecável e a ausência total de porosidades na superfície metálica.",
    quickSummary: "Tratamento de alta tecnologia na agulha que dissipa calor, reduz atrito e impede que cola de entretela grude na lâmina.",
    recommendedSettings: {
      speedPPM: "800 a 1000 PPM",
      needleType: "75/11 ou 80/12 CrN Anti-Stick / SERV 7",
      stabilizer: "Entretela com adesivo ou termocolante"
    },
    relatedTerms: [
      "Agulha de Titânio (Titanium Needle)",
      "Agulha Antiaderente (Super Non-Stick)",
      "Adesivo Temporário em Spray",
      "Aquecimento da Agulha (Needle Heat)",
      "Calibre de Agulha"
    ],
    tags: ["r-090", "nitreto de cromo", "crn", "agulhas", "antiaderente", "cola spray", "materiais", "artrelados"],
    bibliographicReferences: [
      "SCHMETZ NEEDLES. High Performance Needle Coatings: CrN, Titanium and Anti-Stick Technologies. Albstadt, 2022.",
      "ORGAN NEEDLE CO. Surface Engineering & PVD Coatings for Industrial Embroidery. Tokyo, 2021.",
      "ARTRELADOS. Guia Definitivo de Agulhas Especiais: Titânio, Nitreto de Cromo e Soluções Anti-Adesivas. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-091-resolucao-angular-de-rotacao-do-pantografo",
    code: "R-091",
    letter: "R",
    term: "Resolução Angular de Rotação do Pantógrafo (Pantograph Angular Motion Resolution)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim resolutio (capacidade de separar/distinguir) e do grego pantographos (que desenha tudo). Parâmetro mecatrônico de sistemas CNC de posicionamento de eixos X e Y.",
    summary: "Capacidade de precisão micrométrica com que os motores movem o bastidor em curvas suaves e microletras sem 'serrilhar'.",
    definition: "A Resolução Angular de Rotação do Pantógrafo (Pantograph Angular Motion Resolution / Microstepping Positioning Accuracy) é a menor unidade discreta de deslocamento linear (geralmente entre 0,01 mm e 0,05 mm por micropasso) que os servomotores ou motores de passo híbridos dos eixos X e Y transmitem ao chassi do pantógrafo através de correias sincronizadoras e guias lineares retificadas. Essa resolução determina a fidelidade com que a máquina reproduz curvas complexas, ângulos fechados e detalhes minúsculos da matriz digital sem produzir bordas denteadas ou deformações geométricas.",
    technicalDetails: "Em sistemas industriais com servomotores AC equipados com encoders ópticos absolutos de 17 a 23 bits (mais de 130.000 a 8.000.000 de pulsos por volta), o erro de repetibilidade posicional do pantógrafo situa-se abaixo de ± 0,02 mm. Em contrapartida, folgas mecânicas em correias dentadas frouxas podem degradar a resolução efetiva para ± 0,3 mm, causando contornos desalinhados e letras tremidas.",
    beginnerExplanation: "É a precisão dos 'passinhos' que o braço da máquina dá para mexer o bastidor: quanto mais delicados e perfeitamente calibrados forem os motores, mais redondinhas saem as curvas, os círculos e as letrinhas minúsculas, sem parecerem quadradinhas ou tremidas.",
    howItWorks: [
      "1. A placa controladora da máquina decodifica as coordenadas X e Y do próximo ponto da matriz.",
      "2. O circuito de controle emite um trem de pulsos de micropassos de alta frequência para os servodrives.",
      "3. Os motores X e Y giram frações de grau precisas simultaneamente.",
      "4. As correias sincronizadas com alma de aço ou fusos de esferas movem o pantógrafo com o bastidor.",
      "5. O bastidor atinge a coordenada exata com precisão micrométrica no instante em que a agulha desce."
    ],
    construction: [
      "Servomotores AC Brushless ou Motores de Passo com Micropasso (1/16 a 1/64)",
      "Guias lineares retificadas de esferas recirculantes",
      "Correias sincronizadoras de poliuretano com alma de aço (passo HTD 3M / 5M)",
      "Polias de alta concentricidade balanceadas dinamicamente"
    ],
    mainTypes: [
      "Resolução por Servomotores Digitais Industriais de Alta Resolução",
      "Resolução por Motores de Passo Híbridos com Controle em Malha Fechada (Closed Loop)",
      "Sistemas de Acionamento Direto por Motor Linear"
    ],
    characteristics: [
      "Círculos perfeitos e contornos curvos suaves sem dentes de serrote",
      "Nitidez impecável em microletras de 3 mm a 5 mm de altura",
      "Repetibilidade dimensional exata entre diferentes cabeçotes da máquina"
    ],
    applications: [
      "Bordado de microletras em crachás, uniformes militares e etiquetas de luxo.",
      "Círculos perfeitos em logotipos corporativos de precisão técnica.",
      "Avaliação de qualidade mecânica e ajuste de tensão de correias do pantógrafo."
    ],
    commonErrors: [
      "❌ Bordar com as correias do pantógrafo frouxas, gerando folga (*backlash*) e letras ovais ou tremidas",
      "❌ Deixar sujeira e poeira de linha acumulada nos trilhos das guias lineares do bastidor",
      "❌ Usar bastidor excessivamente pesado em máquina doméstica sem calibrar a velocidade"
    ],
    troubleshootingTips: [
      "Se os círculos estiverem saindo ovais ou com pontas achatadas: As correias dos eixos X ou Y estão com tensão desigual; faça o tensionamento correto das correias.",
      "Se as letrinhas minúsculas saírem ilegíveis e tremidas: Reduza a velocidade de bordado para 600 PPM e verifique se o bastidor está bem travado no pantógrafo.",
      "Se o pantógrafo der solavancos nas curvas: Limpe e lubrifique os trilhos lineares com graxa branca especial recomendada pelo fabricante."
    ],
    dicaArtrelados: "Para saber se o pantógrafo da sua máquina está com folga mecânica: desligue a máquina, segure o braço do pantógrafo com a mão e tente mexer suavemente para frente e para trás. Não deve haver nenhuma folga solta ('jogo')! Se balançar frouxo, é hora de esticar a correia com o técnico!",
    voceSabia: "As máquinas de bordar modernas possuem resolução de movimento tão alta que conseguiriam bordar uma linha reta perfeita com a espessura de um fio de cabelo humano ao longo de 1 metro de distância!",
    practicalExercise: "Borde um círculo perfeito de 2 cm com contorno fino na sua máquina. Meça com uma régua o diâmetro horizontal e vertical: se der exatamente a mesma medida (ex: 20 mm nos dois eixos), o pantógrafo da sua máquina está com calibração perfeita!",
    quickSummary: "Precisão micrométrica do movimento dos motores nos eixos X e Y que garante curvas redondas perfeitas e letrinhas nítidas.",
    recommendedSettings: {
      speedPPM: "650 a 800 PPM para microletras e detalhes de precisão",
      needleType: "65/9 ou 70/10 Ponta Aguda",
      stabilizer: "Entretela recortável firme"
    },
    relatedTerms: [
      "Pantógrafo de Bordado",
      "Servomotor e Encoder",
      "Microletras (Micro Lettering)",
      "Correia Sincronizadora",
      "Calibração Mecânica"
    ],
    tags: ["r-091", "resolucao angular", "pantografo", "motores", "precisao", "mecanica", "artrelados"],
    bibliographicReferences: [
      "BARUDAN PRECISION MACHINERY. Multi-Axis Pantograph Kinematics & Resolution Standards. Ichinomiya, 2022.",
      "TAJIMA INDUSTRIAL GROUP. Servo Motion Control & Micro-Stepping Accuracy in Embroidery. Nagoya, 2021.",
      "ARTRELADOS. Engenharia Mecatrônica de Máquinas de Bordar: Eixos, Guias e Precisão CNC. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-092-recorte-a-quente-por-ferro-cauterio",
    code: "R-092",
    letter: "R",
    term: "Recorte a Quente por Ferro Cautério (Soldering Iron Thermal Cutwork)",
    level: "Intermediário 🟡",
    category: "Técnicas de Aplique e Efeitos Especiais",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim cauterium (ferro em brasa para marcar/selar) e do francês découpe (corte). Técnica de acabamento térmico em tecidos sintéticos.",
    summary: "Técnica de selagem e corte térmico com ponta aquecida que queima as bordas de patches e bordados Richelieu sem desfiar.",
    definition: "O Recorte a Quente por Ferro Cautério (Soldering Iron Thermal Cutwork / Hot Knife Edge Sealing / Pyrography Cutwork) é o método térmico utilizado no ateliê para cortar e selar simultaneamente as bordas externas de emblemas (patches), apliques e aberturas em bordados vazados (Richelieu) confeccionados sobre tecidos de composição 100% sintética (poliéster, nylon, cetim sintético ou organza). A ponta metálica de alta precisão aquecida a cerca de 200°C a 250°C funde as fibras plásticas instantaneamente ao redor do cordão de cetim, criando uma orla selada, limpa e imune a desfiamentos.",
    technicalDetails: "O calor do cautério derrete a cadeia polimérica do poliéster (cujo ponto de fusão situa-se entre 250°C e 260°C). Como as linhas de bordar 100% poliéster possuem proteção parcial pela densidade e volume do cordão de cetim, a lâmina aquecida desliza encostando suavemente na borda externa sem cortar os pontos, desde que a velocidade de corte manual seja uniforme (cerca de 2 a 3 cm/segundo).",
    beginnerExplanation: "É usar um aparelhinho tipo soldador elétrico com ponta fina quente (ou pirógrafo) para queimar e cortar a beiradinha de fora de brasões, patches e chaveiros bordados em tecidos sintéticos. Ele corta na hora e ao mesmo tempo 'derrete' as pontinhas do tecido para nunca mais soltar fiapos nem desfiar.",
    howItWorks: [
      "1. A máquina borda o patch com uma coluna de ponto cheio (cordão de cetim) bem fechada sobre tecido sintético (ex: nylon ou sarja de poliéster).",
      "2. A peça bordada é retirada do bastidor e colocada sobre uma superfície de vidro plano grosso ou placa cerâmica.",
      "3. O operador aquece o ferro cautério com ponta fina chanfrada ou agulha.",
      "4. Encosta a ponta quente rente à borda externa do cordão de cetim com movimento contínuo.",
      "5. O calor queima o tecido excedente, soltando o patch perfeito com borda selada brilhante."
    ],
    construction: [
      "Ferro cautério / Pirógrafo de 30W a 60W com controle de temperatura",
      "Ponta fina de latão ou cobre niquelado (agulha ou faca chanfrada)",
      "Base de apoio em placa de vidro temperado de 6 mm a 8 mm",
      "Tecido base em poliéster 100% (Oxford, Sarja de poliéster, Feltro sintético)"
    ],
    mainTypes: [
      "Recorte Térmico de Patches e Emblemas Termocolantes",
      "Recorte a Quente de Richelieu em Organza Sintética",
      "Selagem de Bordas de Fitas e Passamanarias Personalizadas"
    ],
    characteristics: [
      "Acabamento 100% limpo sem nenhum fiozinho desfiado",
      "Rapidez incomparável em relação ao corte manual com tesourinha",
      "Substituto artesanal de baixo custo para o corte a laser industrial"
    ],
    applications: [
      "Confecção de patches para motos, coletes, jaquetas e uniformes.",
      "Bordados Richelieu vazados em toalhas de organza e voil sintético.",
      "Chaveiros bordados em feltro sintético e couro sintético com borda selada."
    ],
    commonErrors: [
      "❌ Fazer recorte a quente em tecidos de algodão 100% ou linho puro (o algodão queima e fica preto em vez de derreter e selar)",
      "❌ Parar a ponta quente no mesmo lugar, queimando e derretendo os pontos de cetim do bordado",
      "❌ Fazer o corte em cima de mesas de madeira ou plástico sem a placa de vidro de proteção"
    ],
    troubleshootingTips: [
      "Se a borda ficar preta e com cheiro de queimado: A temperatura do cautério está muito alta ou o tecido tem mistura de algodão; use tecido 100% poliéster e diminua a temperatura.",
      "Se o ferro estiver derretendo o bordado de cetim: Mantenha a ponta quente inclinada apontando para fora do bordado e movimente a mão sem parar.",
      "Se o tecido não estiver soltando: Aumente a potência do ferro e limpe a ponta do cautério em uma esponja de metal úmida."
    ],
    dicaArtrelados: "A regra de ouro do recorte a quente: use SEMPRE uma placa de vidro de janela velha ou vidro temperado como base na mesa! O vidro não queima, não gruda o tecido derretido e faz o ferrinho quente deslizar suave como manteiga derretida!",
    voceSabia: "O recorte a laser industrial de patches funciona sob o exato mesmo princípio físico do cautério térmico: o feixe de luz aquece o poliéster até o ponto de fusão para selar a orla instantaneamente!",
    practicalExercise: "Borde um pequeno círculo em tecido Oxford 100% poliéster com borda de cetim. Coloque sobre um vidro e use um pirógrafo com ponta fina para recortar a volta. Veja como o patch se solta sozinho, perfeito e selado.",
    quickSummary: "Método de corte e selagem térmica com ponta quente que finaliza bordas de patches e apliques sintéticos sem desfiar.",
    recommendedSettings: {
      density: "0.36 mm a 0.40 mm no cordão de cetim de borda",
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Universal",
      stabilizer: "Entretela termocolante ou resinada"
    },
    relatedTerms: [
      "Emblema / Patch Termocolante",
      "Bordado Richelieu (Cutwork)",
      "Corte a Laser de Bordados",
      "Ponto Cheio / Cetim (Satin Stitch)",
      "Termocolante Definitivo"
    ],
    tags: ["r-092", "recorte a quente", "cauterio", "patches", "richelieu", "pirografo", "selagem", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY TRADE ASSOCIATION. Thermal Cutting & Edge Sealing for Patches and Emblems. Dallas, 2022.",
      "STAHLS' INTERNATIONAL. Laser & Thermal Finishing of Embroidered Appliques. Michigan, 2021.",
      "ARTRELADOS. Guia Prático de Patches, Emblemas e Recorte a Quente Profissional. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-093-reducao-de-ponto-por-filtro-inteligente",
    code: "R-093",
    letter: "R",
    term: "Redução de Ponto por Filtro Inteligente (Smart Stitch Length Filter & Short Stitch Purge)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim reductio (diminuição) e filtrum (feltro/separador). Recurso essencial de otimização algorítmica de arquivos de máquina (DST/PES/JEF).",
    summary: "Filtro de software que elimina micro-pontos menores que 0,3 mm que travam a máquina, furam o tecido e arrebentam a linha.",
    definition: "A Redução de Ponto por Filtro Inteligente (Smart Stitch Length Filter & Short Stitch Purge / Stitch Cleaner / Small Stitch Filter) é a rotina algorítmica executada durante a conversão ou exportação da matriz de bordado que detecta e remove sistematicamente todos os pontos cujo deslocamento linear seja inferior ao limiar crítico (normalmente calibrado entre 0,2 mm e 0,4 mm). Esses micro-pontos (frequentemente gerados em cantos afilados, curvas fechadas ou nós de amarração) não agregam cobertura visual e sobrecarregam a mecânica da máquina.",
    technicalDetails: "A presença de micro-pontos (< 0,3 mm) faz com que a agulha penetre repetidamente no mesmo orifício microscópico em intervalos de milissegundos sem avanço de bastidor, gerando atrito térmico concentrado, rompimento das fibras estruturais do tecido (buraco no tecido) e acúmulo de linha que trava a lançadeira (*thread jam*). O filtro inteligente combina os pontos adjacentes preservando a integridade do contorno original.",
    beginnerExplanation: "É uma limpeza automática que o programa de bordado faz na matriz antes de mandar para a máquina: ele apaga aqueles pontinhos minúsculos quase invisíveis (menores que a ponta de um alfinete) que só servem para a agulha bater no mesmo lugar, furar o pano e embolar a linha embaixo da chapa.",
    howItWorks: [
      "1. O programador finaliza a matriz e aciona a rotina 'Processar / Limpar Pequenos Pontos' (Purge Short Stitches).",
      "2. O software escaneia a lista completa de coordenadas de todos os pontos da matriz.",
      "3. Identifica qualquer coordenada cuja distância do ponto anterior seja menor que 0,3 mm.",
      "4. O algoritmo funde o ponto curto com o ponto vizinho ou redistribui a distância suavemente.",
      "5. A matriz final é exportada com 5% a 15% menos pontos totais, bordando mais rápido e com zero travamentos."
    ],
    construction: [
      "Módulo de filtragem vetorial de comprimento de ponto",
      "Parâmetro de limiar mínimo configurável (Threshold = 0.3 mm a 0.5 mm)",
      "Preservador de nós de amarração e paradas de corte",
      "Otimizador de ordem de percurso de agulha"
    ],
    mainTypes: [
      "Filtro de Pequenos Pontos na Exportação de Arquivos de Máquina (DST/PES)",
      "Limpador de Pontos Acumulados em Cantos Vivos (Corner Short Stitch Purge)",
      "Otimizador Inteligente de Densidade Dinâmica"
    ],
    characteristics: [
      "Eliminação de 90% das quebras de agulha e linha por acúmulo de pontos",
      "Redução do tempo total de execução do bordado na máquina",
      "Preservação da maciez do tecido sem endurecimento central"
    ],
    applications: [
      "Otimização de matrizes compradas na internet ou digitalizadas automaticamente.",
      "Bordados delicados em tecidos finos e sedas sujeitos a furos de agulha.",
      "Produção em alta velocidade (acima de 850 PPM) sem paradas frequentes."
    ],
    commonErrors: [
      "❌ Deixar o filtro desativado em matrizes com muitas curvas e pontas finas",
      "❌ Configurar o limiar de filtro muito alto (> 1.2 mm), apagando detalhes importantes de olhos e letrinhas",
      "❌ Apagar pontos de amarração finais junto com os pontos curtos, fazendo o bordado desmanchar na lavagem"
    ],
    troubleshootingTips: [
      "Se a agulha ficar batendo no mesmo lugar parecendo uma metralhadora: A matriz tem excesso de pequenos pontos; passe a matriz pelo filtro de redução de pontos no software.",
      "Se abrir um buraco no tecido durante o bordado de um detalhe: Havia dezenas de pontos menores que 0.2 mm concentrados; remova-os e aumente a compensação de repuxo.",
      "Se a linha de baixo embolar sempre no mesmo pedaço do desenho: Limpe os micro-pontos acumulados naquele objeto no software."
    ],
    dicaArtrelados: "Sempre passe todas as matrizes que você baixar da internet pelo filtro de 'Limpeza de Pequenos Pontos' (Short Stitch Filter) com valor de 0,3 mm antes de colocar na máquina! A matriz vai bordar mais rápido, a sua máquina vai trabalhar macia e você nunca mais vai ver a agulha quebrando à toa!",
    voceSabia: "Em matrizes grandes de brasões com mais de 50.000 pontos, um simples filtro inteligente de micro-pontos consegue eliminar até 7.000 pontos desnecessários sem que ninguém consiga notar qualquer diferença a olho nu!",
    practicalExercise: "Abra uma matriz no seu software e use a ferramenta de estatísticas de pontos: veja quantos pontos têm menos de 0,4 mm. Ative a ferramenta 'Purge / Filtrar Pequenos Pontos' e observe a redução no número total de pontos.",
    quickSummary: "Algoritmo que elimina pontos minúsculos desnecessários na matriz para evitar furos no tecido, quebras de agulha e embaraçamento de linha.",
    recommendedSettings: {
      density: "Limiar de filtro configurado para 0.3 mm a 0.4 mm",
      speedPPM: "Velocidade livre (750 a 900 PPM)",
      needleType: "75/11 Universal",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Densidade de Ponto (Stitch Density)",
      "Ponto Curto (Short Stitch)",
      "Otimização de Matriz",
      "Formato DST / PES / JEF",
      "Ponto de Amarração (Tie-off)"
    ],
    tags: ["r-093", "reducao de pontos", "filtro inteligente", "otimizacao", "micro pontos", "software", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Short Stitch Filter & Machine File Optimization Protocols. Sydney, 2023.",
      "PULSE MICROSYS. Vector Data Sanitization & Knot Elimination in CNC Embroidery. Toronto, 2022.",
      "ARTRELADOS. Otimização Avançada de Matrizes: Limpeza de Pontos, Velocidade e Redução de Desgaste. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-094-rotacao-de-matriz-e-compensacao-de-sentido-de-ponto",
    code: "R-094",
    letter: "R",
    term: "Rotação de Matriz e Compensação de Sentido de Ponto (Design Rotation & Grainline Orientation)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim rotatio (movimento em círculo) e compensare (pesar junto/equilibrar). Conceito fundamental de física óptica e mecânica têxtil.",
    summary: "Impacto no brilho e na deformação do tecido ao girar uma matriz em 90 ou 180 graus no painel da máquina.",
    definition: "A Rotação de Matriz e Compensação de Sentido de Ponto (Design Rotation & Grainline Orientation / Directional Reflection & Tension Shift) é o conjunto de fenômenos ópticos e mecânicos que ocorrem quando uma matriz de bordado é rotacionada (tipicamente em 90°, 180° ou 270°) no painel da máquina de bordar para caber no bastidor ou ajustar o alinhamento da peça. Essa rotação altera a relação angular entre as linhas de pontos e o sentido do fio do tecido (trama/urdume), bem como o ângulo de incidência da luz sobre os filamentos brilhantes de poliéster ou viscose.",
    technicalDetails: "Ao girar uma matriz em 90°, a direção que antes sofria repuxamento longitudinal passa a sofrer repuxamento transversal (onde a maioria dos tecidos possui elasticidade diferente). Além disso, a reflexão especular da luz nos filamentos trilobais gira 90°, podendo alterar a tonalidade aparente do bordado quando comparado a outra peça bordada na posição original.",
    beginnerExplanation: "Quando você gira um desenho na tela da máquina de lado para caber melhor no bastidor, os pontos mudam de direção em relação ao fio do tecido e à luz do ambiente. Isso faz a cor parecer um pouquinho mais clara ou escura por causa do brilho da linha e pode fazer o tecido enrugar para o outro lado se a entretela não for boa.",
    howItWorks: [
      "1. A matriz original é projetada com compensação de repuxo calculada para a direção vertical da máquina.",
      "2. O operador rotaciona o desenho em 90 graus no painel da máquina para bordar na horizontal.",
      "3. As forças de tração da linha superior passam a agir perpendicularmente à direção original.",
      "4. Os filamentos de poliéster refletem a luz ambiente em novo ângulo óptico.",
      "5. A peça final mantém a geometria se tiver sido utilizada entretela com estabilidade multidirecional."
    ],
    construction: [
      "Transformação matricial afim de rotação de coordenadas (X' = X cos θ - Y sin θ)",
      "Estrutura do tecido com eixos ortogonais de trama e urdume",
      "Filamento de poliéster trilobal com 3 faces ópticas de reflexão",
      "Entretela recortável multidirecional (Cutaway)"
    ],
    mainTypes: [
      "Rotação de 90 Graus para Encaixe em Bastidores Longos / Magnéticos",
      "Rotação de 180 Graus para Bordados em Bolsos e Bonés com Aba para Cima",
      "Rotação Livre Angular em Composições Artísticas"
    ],
    characteristics: [
      "Variação sutil de brilho e intensidade de cor conforme a direção da luz",
      "Mudança na direção de repuxo do tecido que exige entretela uniforme",
      "Flexibilidade total de posicionamento em peças prontas e espaços reduzidos"
    ],
    applications: [
      "Bordados em bolsos prontos de camisas, bonés de aba curva e mangas de jaquetas.",
      "Otimização de aproveitamento de área útil dentro de bastidores ovais ou retangulares.",
      "Padronização de conjuntos de peças bordadas para não haver diferença de brilho entre elas."
    ],
    commonErrors: [
      "❌ Bordar a frente de uma camisa com o desenho a 0° e as costas com o mesmo desenho girado a 90°, criando tonalidades de cor visivelmente diferentes sob a luz",
      "❌ Girar a matriz em tecido elástico usando entretela rasgável unidirecional que só sustenta um lado",
      "❌ Não recalcular o ponto de origem após rotacionar a matriz no painel, batendo o bastidor na lateral"
    ],
    troubleshootingTips: [
      "Se a cor do bordado parecer diferente na mesma linha: Verifique se todas as peças foram bordadas com a matriz no mesmo sentido de rotação.",
      "Se o bordado repuxar após ser girado em 90 graus: Use entretela recortável multidirecional pesada para segurar as duas direções do tecido.",
      "Se o desenho sair fora do bastidor após a rotação: Faça o teste de traçado de perímetro (Trace / Border Check) no painel antes de apertar o botão de iniciar."
    ],
    dicaArtrelados: "O segredo do brilho uniforme: quando for bordar várias peças do mesmo cliente (ex: 20 camisas polo de uma empresa), borde TODAS com a matriz na MESMA posição de rotação! Se você girar algumas para caber mais fácil no bastidor, as peças que foram giradas vão parecer que foram bordadas com outra cor de linha quando bater a luz!",
    voceSabia: "O fio de poliéster de bordar é chamado de 'trilobal' porque possui três facetas microscópicas em formato de triângulo que agem como pequenos espelhos; a rotação de 90° muda o ângulo desses espelhos em relação aos olhos de quem olha!",
    practicalExercise: "Borde duas amostras pequenas de 3 cm da mesma cor: uma na posição normal (0°) e outra girada em 90°. Coloque as duas lado a lado sob a luz da janela e observe a diferença fascinante de reflexão e tonalidade entre elas.",
    quickSummary: "Efeitos ópticos de reflexão de luz e mecânicos de tração que ocorrem ao girar o desenho no painel da máquina.",
    recommendedSettings: {
      density: "0.40 mm",
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Universal",
      stabilizer: "Entretela recortável multidirecional (Cutaway)"
    },
    relatedTerms: [
      "Sentido do Fio (Grainline)",
      "Poliéster Trilobal (Trilobal Polyester)",
      "Compensação de Repuxo (Pull Compensation)",
      "Traçado de Perímetro (Trace / Frame Check)",
      "Entretela Recortável (Cutaway)"
    ],
    tags: ["r-094", "rotacao de matriz", "brilho", "sentido do fio", "painel da maquina", "poliester", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS. Optical Properties and Light Reflection of Trilobal Embroidery Threads. Freiburg, 2022.",
      "TAJIMA EMBROIDERY SYSTEMS. Machine Orientation, Design Rotation & Grainline Alignment. Nagoya, 2021.",
      "ARTRELADOS. Guia de Posicionamento, Rotação e Física Óptica de Fios no Bordado Computadorizado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "r-095-ricoma-maquinas-de-bordado-eletronico",
    code: "R-095",
    term: "Ricoma (Máquinas de Bordado Eletrônico)",
    pronunciation: "ri-co-ma (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    letter: "R",
    level: "Intermediário a Avançado 🟡🔴",
    category: "Máquinas e Equipamentos",
    grammarClass: "Substantivo próprio / Locução substantiva.",
    origin: "Fundada em Miami, Flórida (Estados Unidos) por Frank Ma, com polo fabril tecnológico e centros de distribuição em mais de 160 países. Destacou-se globalmente pela democratização do acesso a máquinas multiagulhas comerciais, integrando um ecossistema completo de suporte, treinamento em vídeo de alto alcance e o software de digitalização Chroma.",
    summary: "Fabricante internacional de máquinas de bordado computadorizado de 1 até 12 cabeças (séries MT, TC e SWD de 15 e 20 agulhas), célebre pelo cabeçote aberto para itens volumosos, tela touch de 8\" e leitura .DST.",
    definition: "A Ricoma é uma conceituada fabricante global de máquinas de bordado computadorizado comerciais e industriais de 1 até 12 cabeças (com 12, 15 ou 20 agulhas por cabeçote). Ganhou imensa projeção no mercado mundial com as séries tubulares compactas TC-1501, MT-1501 / MT-2001 (notável pela sua ampla folga vertical e chassi aberto em formato de 'C' para bordar itens volumosos como bolsas de golfe, malas e jaquetas pesadas) e SWD (com campo de bordado extragrande de até 80x50 cm). Seus modelos são equipados com painel touchscreen de alta definição de 8 polegadas com visualização 3D em tempo real, porta USB e conectividade de rede sem fio Wi-Fi.",
    technicalDetails: "Acionamento principal e eixos cartesianos X/Y comandados por servomotores digitais de alta precisão com parada sincronizada do eixo mestre a 100°. Velocidade ajustável entre 450 e 1.200 PPM. Laçadeira rotativa vertical industrial tipo 'L' de precisão milimétrica, sistema de corte automático com acionamento por solenoide, ponteiro laser para pré-visualização perimetral e memória interna para até 20 milhões de pontos ou 200 matrizes. Formatos suportados: .DST e .DSB.",
    construction: [
      "Chassi aberto reforçado em formato de 'C' na série MT, permitindo a rotação livre de peças volumosas",
      "Cabeçote cilíndrico estreito com conjunto seletor para 15 ou 20 agulhas",
      "Painel de controle computadorizado colorido de 8 polegadas sensível ao toque com interface gráfica 3D",
      "Sistema de corte de linha superior e inferior automatizado com tracionador de fio",
      "Dispositivo de boné com curvatura ampla de 210° a 270° com estação de montagem externa",
      "Ponteiro laser para traçado de perímetro de segurança e cruzamento de centro",
      "Mesa plana removível e rodízios metálicos industriais com travas de nivelamento"
    ],
    howItWorks: [
      "1. A matriz de bordado em extensão .DST é enviada para a Ricoma via pendrive USB ou conexão direta Wi-Fi a partir do computador.",
      "2. Na tela touch de 8 polegadas, o operador seleciona o desenho e programa a sequência de cores, vinculando cada etapa da matriz a uma das 15 ou 20 agulhas.",
      "3. A peça é fixada no bastidor tubular ou de boné e travada no pantógrafo reforçado.",
      "4. O operador ativa a função Contour Trace com o ponteiro laser para checar se a agulha não irá colidir com a borda do bastidor.",
      "5. A máquina inicia a costura com aceleração inteligente progressiva, adaptando a velocidade de 450 a 1.200 PPM de acordo com a amplitude dos pontos.",
      "6. Sensores ópticos de quebra de linha superior e inferior pausam o trabalho imediatamente caso ocorra qualquer ruptura de fio."
    ],
    beginnerExplanation: "A Ricoma é a máquina que transformou a vida de milhares de bordadeiras e ateliês que queriam dar o grande salto das máquinas domésticas para as máquinas industriais! O grande diferencial dela é o cabeçote aberto bem alto: enquanto numa máquina comum é um sufoco bordar uma mochila grossa ou uma jaqueta pesada, na Ricoma a peça fica solta e tem espaço de sobra para movimentar. Além disso, ter 15 ou 20 agulhas prontas significa que você coloca todas as cores do seu ateliê na máquina e não precisa ficar trocando linha na mão toda hora!",
    applications: [
      "Bordados em peças volumosas, mochilas escolares, bolsas esportivas e malas de viagem (série MT)",
      "Bordados em bonés montados estruturados de 6 gomos com o bastidor curvo em 270°",
      "Produção seriada em grande volume de camisas polo empresariais, jalecos e uniformes profissionais",
      "Grandes brasões para jaquetas de motoqueiro e estandartes em campo estendido (série SWD de 80x50 cm)",
      "Emblemas termocolantes, patches com ponto cheio reforçado e bordados com alto relevo 3D (EVA)"
    ],
    mainTypes: [
      "Ricoma EM-1010: Modelo de 10 agulhas super compacto para pequenos ateliês e personalização ágil",
      "Ricoma TC-1501: Modelo clássico comercial de 15 agulhas para uniformes e camisetas",
      "Ricoma MT-1501 / MT-2001: Campeã de vendas mundial com chassi aberto para malas e 15 a 20 agulhas",
      "Ricoma SWD-1501: Máquina de campo monumental de 80x50 cm para colchas e toalhas de mesa",
      "Ricoma Séries CHT2 e MT Multi-Cabeças (2 a 4 cabeças): Para escala comercial expandida"
    ],
    recommendedSettings: {
      speedPPM: "850 a 1.000 PPM para peças planas normais; 650 a 750 PPM para bonés estruturados e EVA 3D",
      needleType: "Sistema industrial de cabo redondo DBxK5 (tamanhos 75/11 para camisas até 90/14 para bonés)",
      stabilizer: "Entretela rasgável pesada de 80g/m² ou entretela resinada especial para bonés estruturados"
    },
    advantages: [
      "✔ Chassi aberto inovador na série MT que proporciona o maior vão vertical da categoria para itens volumosos",
      "✔ Painel sensível ao toque de 8 polegadas intuitivo com pré-visualização em 3D de alta fidelidade",
      "✔ Conjunto de 15 a 20 agulhas que minimiza trocas de cones e agiliza a produção diária",
      "✔ Kit completo de fábrica com dispositivo de boné em 270°, estação de bancada e bastidores variados"
    ],
    limitations: [
      "Utiliza agulhas industriais de cabo redondo (DBxK5), exigindo atenção manual no correto alinhamento da canaleta.",
      "Necessita de espaço adequado para circulação do pantógrafo nas peças de campo gigante (como a SWD)."
    ],
    commonErrors: [
      "❌ Iniciar o bordado ou movimentar o pantógrafo sem conferir se o eixo principal está exatamente em 100° no painel.",
      "❌ Montar bonés no bastidor curvo sem travar a fita de aço traseira, gerando ondulação e quebra de agulha.",
      "❌ Deixar de fazer o teste perimetral com o ponteiro laser (Contour Trace) antes de apertar a partida.",
      "❌ Deixar de lubrificar a laçadeira rotativa vertical e as hastes das barras de agulha a cada 8 horas de operação."
    ],
    troubleshootingTips: [
      "Alarme de Color Change Timeout: Verifique se não há fiapos no came helicoidal de troca de agulhas e aplique uma gota de óleo lubrificante no trilho.",
      "Fio escapando do olho da agulha após o corte: Ajuste a mola superior de retenção de linha (Pick-up Spring) e limpe a faca sob a chapa.",
      "Sensor acusando quebra de linha com fio intacto: Aumente a sensibilidade do sensor óptico nas configurações de serviço do painel touch."
    ],
    dicaArtrelados: "Na Ricoma série MT, a grande vantagem é o espaço livre embaixo do cabeçote aberto! Ao bordar mochilas pesadas ou malas de viagem, nunca deixe o peso da mochila puxar o bastidor para baixo: apoie o corpo da mochila suavemente sobre uma mesinha auxiliar na mesma altura do braço pantográfico. Isso evita sobrecarregar os motores de passo dos eixos X e Y e garante contornos perfeitamente alinhados!",
    voceSabia: "O canal oficial da Ricoma no YouTube é o maior canal de máquinas de bordado do planeta, ultrapassando 50 milhões de visualizações com vídeos ensinando passo a passo desde como bordar bonés até como criar negócios lucrativos de personalização!",
    practicalExercise: "Enquadramento de Boné na Estação Ricoma: Monte o bastidor curvo na estação de preparação de bancada, posicione a entretela resinada e vista um boné de sarja. Puxe a cinta de aço flexível sobre a costura da aba, aperte a presilha traseira até a frente ficar esticada como um tambor. Encaixe no braço tubular da Ricoma e confirme o alinhamento com o laser!",
    quickSummary: "Fabricante internacional globalmente reconhecida por popularizar as máquinas multiagulhas de 15 e 20 cores (séries MT, TC e SWD) com painel touch de 8\", chassi aberto para bolsas e bonés.",
    relatedTerms: [
      "Tajima",
      "Barudan (Máquinas de Bordado Eletrônico)",
      "Typical (Máquinas de Bordado Eletrônico)",
      "Formato DST",
      "Bastidor de Boné",
      "Agulha DBxK5",
      "Software de Digitalização (Digitizing Software)",
      "Velocidade PPM"
    ],
    tags: [
      "r-095",
      "ricoma",
      "maquinas",
      "equipamento",
      "mt1501",
      "tc1501",
      "swd",
      "industrial",
      "dst",
      "artrelados"
    ],
    bibliographicReferences: [
      "RICOMA INTERNATIONAL CORP. User Manual: MT & TC Series Multi-Needle Commercial Embroidery Systems. Miami: Ricoma, 2023.",
      "RICOMA INTERNATIONAL CORP. Chroma Embroidery Digitizing & 8-Inch Touchscreen Operational Guide. Miami, 2023.",
      "ARTRELADOS. Guia de Operação e Rentabilidade com Máquinas Multiagulhas no Brasil. Curitiba, 2024."
    ],
    updatedAt: "2026-09-05"
  }
];


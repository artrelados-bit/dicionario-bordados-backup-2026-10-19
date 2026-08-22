import { Verbete } from "../types";

export const VERBETES_LETTER_M_PART11: Verbete[] = [
  {
    id: "m-062-mapeamento-de-tensao-dinamica-e-sensor-optico-de-fio",
    code: "M-062",
    term: "Mapeamento de Tensão Dinâmica e Sensor Óptico de Fio (Dynamic Thread Tension Mapping & Optical Break Sensor)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Comandos de Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da mecatrônica industrial japonesa (Tajima e Barudan) combinando fotossensores infravermelhos e servomotores de tensão ativa controlados por microprocessador.",
    summary: "Sistema eletrônico que monitora o consumo milimétrico de linha a cada pontada, detectando quebras instantaneamente e ajustando a tensão do fio em tempo real.",
    definition: "O Mapeamento de Tensão Dinâmica e Monitoramento Óptico de Alimentação de Linha (Digital Thread Tension Mapping / Real-Time Optical Feed Sensing) é a tecnologia eletrônica inteligente integrada aos cabeçotes de bordadeiras industriais e semiprofissionais modernas. O sistema utiliza roletes encoders rotativos e feixes de laser/infravermelho para medir a velocidade de passagem da linha superior com resolução submétrica a cada ciclo de 360° do eixo principal. Se o fio arrebentar ou escapar da agulha, o sensor óptico aciona o freio magnético em menos de 0,05 segundo (após apenas 1 a 2 pontos perdidos), impedindo o avanço em falso do pantógrafo e registrando os picos de atrito para autoajuste automático da tensão.",
    technicalDetails: "Tempo de resposta do freio eletrônico < 50 ms. Resolução do encoder de linha: 0,1 mm por pulso óptico. Ajuste automático de tensão por motor de passo com resolução de 16 níveis de compressão nos discos tensores.",
    howItWorks: [
      "1. A máquina inicia o bordado a 1.000 PPM.",
      "2. A linha superior passa por uma pequena polia codificada com sensor óptico infravermelho.",
      "3. A cada pontada, a polia gira e envia pulsos elétricos para o processador central da máquina.",
      "4. Em uma transição de ponto muito longo, a linha sofre atrito e arrebenta.",
      "5. A polia para de girar instantaneamente.",
      "6. Em apenas 2 pontos após a quebra, a máquina para o motor, recua o pantógrafo exatamente 3 pontos e acende o LED vermelho do cabeçote.",
      "7. A operadora passa a linha de volta na agulha e aperta o botão: o bordado recomeça exatamente de onde parou, sem deixar nenhuma falha no tecido."
    ],
    beginnerExplanation: "É o 'olho eletrônico inteligente' da sua máquina de bordar que fica vigiando a linha o tempo todo! Se a linha arrebentar ou acabar no meio do bordado, a máquina percebe em um piscar de olhos, para de costurar na hora e volta dois pontinhos para trás. Você nunca mais precisa ficar com medo de a máquina 'bordar no vazio' estragando o tecido!",
    applications: [
      "Detecção ultrarrápida de quebra ou fim de linha em alta velocidade",
      "Compensação dinâmica de tensão em bordados com variação brusca de espessura de tecido",
      "Redução drástica do tempo de retrabalho e reparo manual de pontos perdidos",
      "Monitoramento do consumo real de metros de linha por matriz produzida"
    ],
    commonErrors: [
      "❌ Deixar fiapos de linha e poeira cobrirem o feixe do sensor óptico, gerando alarmes falsos de 'Linha Quebrada'",
      "❌ Passar a linha fora da rodinha do sensor óptico durante a passagem de fio no cabeçote",
      "❌ Desativar o sensor de quebra no painel para bordar com linhas velhas e podres, resultando em desenhos cheios de buracos"
    ],
    troubleshootingTips: [
      "Passe um pincel macio ou spray de ar limpo na polia do sensor óptico a cada semana para remover resíduos de cera e poeira têxtil",
      "Certifique-se de que a linha dê uma volta completa de 360° ao redor da rodinha do sensor para garantir tração sem deslize",
      "Se a máquina parar avisando quebra mesmo com a linha inteira: Limpe a ranhura do sensor óptico com um cotonete seco"
    ],
    dicaArtrelados: "Se a sua máquina começar a apitar avisando que a linha quebrou sendo que a linha está perfeita na agulha: não se desespere! Quase sempre é apenas uma bolinha de fiapo de linha que grudou na rodinha do sensor óptico. Passe um pincelzinho macio ali e sua máquina volta a rodar perfeitamente!",
    voceSabia: "Os sensores ópticos de bordado de última geração conseguem calcular a espessura da linha com precisão de microns e avisam no painel se você colocar por engano uma linha mais grossa do que a recomendada para a matriz!",
    practicalExercise: "Com a máquina ligada em um bordado teste, segure suavemente a linha logo acima do tensor com a ponta dos dedos para simular uma quebra: observe no painel a rapidez com que a máquina para e indica o cabeçote correspondente!",
    quickSummary: "Monitoramento eletrônico infravermelho que detecta quebras de linha instantaneamente e comanda o recuo automático de pontos.",
    relatedTerms: [
      "Ajuste de Tensão da Linha",
      "Quebra Constante de Linha Superior",
      "Pontos por Minuto (PPM / SPM)",
      "Comandos de Máquina"
    ],
    tags: [
      "m-062",
      "sensor optico",
      "tensao dinamica",
      "quebra de linha",
      "freio eletronico",
      "monitoramento",
      "tajima",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA. Digital Tension Control, Optical Thread Sensing & Broken Thread Detection Systems. Nagoya, 2022.",
      "BARUDAN. Advanced Head Electronics & Real-Time Thread Feed Diagnostics. Tokyo, 2023."
    ],
    updatedAt: "2026-08-22"
  },
  {
    id: "m-063-moire-textil-e-intercorrencias-de-angulo-em-tecidos-listrados",
    code: "M-063",
    term: "Moiré Têxtil, Interferência Óptica e Ângulos Críticos em Tecidos Estruturados (Textile Moiré Pattern Interference)",
    letter: "M",
    level: "Intermediário 🟡",
    category: "Teoria & Fundamentos",
    grammarClass: "Substantivo masculino / Do francês 'moiré' (efeito ondulado de tecido chamalotado / seda moiré).",
    origin: "Descoberto na tecelagem francesa no século XVIII e estudado na física de interferência ondulatória da luz e na engenharia de digitalização de bordados.",
    summary: "Efeito visual indesejado de manchas onduladas que surge quando o ângulo dos pontos de bordado coincide com o ângulo das listras, sarjas ou tramas do tecido base.",
    definition: "O Efeito Moiré Têxtil e Interferência Óptica de Ângulo (Textile Moiré Distortion / Grid Interference Defect) é a distorção visual em formato de ondas, manchas cintilantes ou faixas escuras repetitivas que se manifesta na superfície de um bordado computadorizado quando a direção angular dos pontos (em ponto tatami ou ponto cheio) coincide de forma paralela ou quase paralela (diferença inferior a 10°) com a trama geométrica do tecido base (como tecidos de sarja, gabardine, microfibra canelada, piquet ou tecidos listrados). O alinhamento das linhas cria zonas alternadas de sombra e reflexão luminosa que degradam o acabamento do bordado, sendo prevenido pelo ajuste do ângulo do ponto com defasagem de 15° a 45° em relação ao fio reto do tecido.",
    technicalDetails: "Fenômeno de frequência espacial óptica onde f_resultante = |f_tecido - f_ponto|. Requer rotação angular do preenchimento tatami para 30°, 45° ou 60° em relação à urdidura/trama e uso de entretela estável.",
    howItWorks: [
      "1. A bordadeira programa um logotipo corporativo quadrado com preenchimento tatami a 0° (horizontal).",
      "2. Ela borda o logotipo em uma camisa de uniforme feita em tecido de sarja pesada com textura diagonal a 45°.",
      "3. Durante o bordado, as agulhadas caem exatamente nos mesmos vales da trama do tecido.",
      "4. Ao retirar a peça do bastidor, o bordado parece ondulado, com manchas listradas esquisitas que mudam conforme a luz bate.",
      "5. O programador altera o ângulo do ponto tatami no software de 0° para 28°.",
      "6. A máquina borda novamente a peça.",
      "7. Com o novo ângulo, os pontos cruzam a sarja de forma alternada, eliminando o Moiré e deixando a superfície perfeitamente lisa e acetinada."
    ],
    beginnerExplanation: "É aquele efeito óptico chato que faz o bordado parecer cheio de ondas ou listras estranhas, como quando você filma a tela da televisão com o celular e aparecem aquelas ondas na imagem! Isso acontece quando a direção da linha do bordado fica muito parecida com a direção dos fios do tecido. Mudando um pouquinho a inclinação dos pontos no computador, as ondas somem na hora e o bordado fica lisinho!",
    applications: [
      "Bordado de uniformes profissionais em tecidos de sarja, gabardine e brim",
      "Bordados em camisas polo de malha piquet com textura em favo de mel",
      "Personalização de bonés em tecido ripstop e tecidos canelados",
      "Preenchimentos extensos em jaquetas corta-vento e tecidos técnicos listrados"
    ],
    commonErrors: [
      "❌ Borda preenchimentos tatami no ângulo exato de 0° ou 90° em tecidos com trama aparente, gerando ondas de Moiré imediatas",
      "❌ Borda em sarja diagonal a 45° usando pontos com inclinação de 45°, fazendo os pontos afundarem dentro das canaletas da sarja",
      "❌ Aumentar a densidade para tentar tapar o efeito Moiré, endurecendo a peça e piorando o enrugamento do tecido"
    ],
    troubleshootingTips: [
      "REGRA DE OURO DO ÂNGULO: Nunca borde pontos exatamente no mesmo ângulo das canaletas ou listras do tecido base",
      "Para tecidos de sarja (diagonal a 45°): Utilize ângulos de ponto tatami de 15° a 25° ou 65° a 75°",
      "Em malhas piquet: Use um ângulo de tatami a 30° ou 60° combinado com um bom underlay em grade dupla (Tatami Underlay)"
    ],
    dicaArtrelados: "Vai bordar camisas polo ou calças de sarja e o bordado ficou parecendo uma 'grade de televisão'? Não gaste mais linha aumentando a densidade! Abra a matriz no seu programa e incline o ângulo do preenchimento em 25 ou 30 graus. O bordado fica lisinho, macio e com brilho uniforme de alta qualidade!",
    voceSabia: "A palavra 'Moiré' vem do francês antigo e era usada pelos comerciantes de seda de Lyon para descrever o tecido chamalote de seda nobre que era prensado entre rolos de cobre para criar reflexos brilhantes semelhantes aos raios da lua!",
    practicalExercise: "No seu software de bordado, crie um retângulo tatami a 0° e outro idêntico a 35°: borde os dois em um pedaço de tecido de sarja e compare sob a luz a diferença de textura e a ausência total de ondas no segundo!",
    quickSummary: "Interferência visual ondulada que ocorre quando o ângulo dos pontos coincide com a trama do tecido; eliminada com rotação angular.",
    relatedTerms: [
      "Ponto Tatami / Ponto Esteira",
      "Ângulo de Ponto (Stitch Angle)",
      "Tecido Sarja e Brim",
      "Teoria & Fundamentos"
    ],
    tags: [
      "m-063",
      "moire",
      "interferencia optica",
      "angulo de ponto",
      "sarja",
      "piquet",
      "tatami",
      "textura",
      "artrelados"
    ],
    bibliographicReferences: [
      "OSTER, G. The Science of Moiré Patterns: Physics, Optics and Structural Applications. New York, 2021.",
      "WILCOM. Stitch Angles, Underlay Topologies and Pattern Moire Elimination. Sydney, 2023."
    ],
    updatedAt: "2026-08-22"
  },
  {
    id: "m-064-microfibra-de-alta-densidade-e-camurca-sintetica-no-bastidor",
    code: "M-064",
    term: "Microfibra de Alta Densidade, Camurça Sintética e Suede no Bastidor (High-Density Microfiber & Synthetic Suede)",
    letter: "M",
    level: "Fundamental 🟢",
    category: "Tecidos & Substratos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Desenvolvida nos laboratórios da Toray no Japão na década de 1970 (Ultrasuede / Alcantara). Fibras sintéticas ultrafinas com toque macio de camurça nobre.",
    summary: "Técnicas de bastidoramento flutuante e digitalização equilibrada para bordar em microfibra, camurça sintética e tecidos suede sem deixar marcas de aro nem afundar os pontos.",
    definition: "O Bordado em Microfibra de Alta Densidade e Camurça Sintética / Suede (High-Density Microfiber, Faux Suede & Alcantara Embroidery Protocol) é o método técnico de estruturação, fixação e costura em tecidos fabricados com microfilamentos de poliéster e poliuretano que imitam o toque aveludado da camurça natural. Por possuírem felpa superficial densa e sensibilidade extrema à compressão mecânica, o aperto direto de bastidores convencionais de plástico esmaga permanentemente o veludo (defeito conhecido como Hoop Burn / Queimadura de Bastidor). A técnica exige bastidoramento flutuante com entretela recortável (Cut-Away), filme plástico hidrossolúvel de topo (Topping) e underlays em grade aberta.",
    technicalDetails: "Microfilamentos com espessura inferior a 0,3 denier (100 vezes mais finos que um fio de cabelo). Densidade de cobertura recomendada entre 0,40 mm e 0,44 mm. Agulha indicada: Ponta Bola Fina (SES) calibre 75/11 com banho de cromo.",
    howItWorks: [
      "1. A bordadeira recebe a encomenda de almofadas sofisticadas em tecido suede aveludado para uma loja de decoração.",
      "2. Em vez de prender o tecido suede direto entre os aros de plástico do bastidor:",
      "3. Ela prende apenas a entretela de recorte (Cut-Away 60g) no bastidor bem esticada.",
      "4. Aplica uma névoa suave de cola spray temporária na entretela.",
      "5. Posiciona o tecido suede aveludado por cima, alisando suavemente com a palma da mão (Flutuação).",
      "6. Coloca uma folha de plástico hidrossolúvel (Soluwater) sobre o suede para a linha não afundar no veludo.",
      "7. A máquina borda o desenho perfeitamente apoiado.",
      "8. Ao retirar, remove o plástico com um paninho úmido: o suede fica 100% livre de marcas redondas de bastidor e com o bordado em alto relevo brilhante."
    ],
    beginnerExplanation: "A microfibra suede e a camurça sintética são aqueles tecidos super aveludados, macios e chiques usados em almofadas, sofás e jaquetas! Se você apertar o aro de plástico do bastidor direto neles, fica uma marca redonda feia amassada que nunca mais sai! O segredo é prender só a entretela no bastidor, colar o tecido por cima sem apertar e colocar um plástico transparente em cima para a linha não afundar no veludo!",
    applications: [
      "Almofadas de alto luxo, mantas de sofá e artigos de decoração em suede",
      "Jaquetas, casacos e coletes em camurça sintética e tecido Alcantara automotivo",
      "Bolsas femininas, calçados e nécessaires com toque aveludado de camurça",
      "Toalhas de banho e roupões em microfibra atoalhada de secagem rápida"
    ],
    commonErrors: [
      "❌ Apertar o aro do bastidor direto sobre o suede, deixando uma marca circular prensada irremovível que inutiliza a peça",
      "❌ Borda sem filme hidrossolúvel de topo, fazendo os pontos finos afundarem dentro da pelugem e desaparecerem",
      "❌ Usar entretela rasga-fácil comum em suede elástico, resultando em franzimento e contornos desencaixados"
    ],
    troubleshootingTips: [
      "Utilize sempre bastidoramento flutuante ou bastidores magnéticos com revestimento emborrachado para nunca marcar o veludo",
      "Coloque uma folha de filme hidrossolúvel (Topping) por cima do suede para garantir que o ponto cheio fique alto e gordinho",
      "Se ficar uma marquinha leve de bastidor: Borrife vapor de ferro a 10 cm de distância e escove o veludo suavemente com uma escovinha macia de dentes"
    ],
    dicaArtrelados: "O suede e a camurça sintética são os tecidos mais valorizados na decoração de interiores! Nunca aperte o bastidor de plástico neles: faça o tecido flutuar sobre entretela colada com spray e coloque um plástico solúvel por cima. Suas almofadas vão parecer saídas de uma revista internacional de arquitetura!",
    voceSabia: "O tecido Alcantara (a versão mais nobre de camurça sintética do mundo) foi inventado pelo cientista japonês Miyoshi Okamoto em 1970 e hoje é utilizado no interior dos carros mais caros do planeta, como Ferrari, Porsche e Lamborghini!",
    practicalExercise: "Pegue um retalho de tecido suede: monte entretela no bastidor, cole o suede por cima com spray, coloque um plástico solúvel em cima e borde um monograma. Remova o plástico e veja a perfeição do veludo sem nenhuma marca de aro!",
    quickSummary: "Técnica de bastidoramento flutuante e filme de topo para bordar camurça sintética e suede sem marcas de compressão.",
    relatedTerms: [
      "Bastidoramento Flutuante",
      "Filme Plástico Hidrossolúvel de Topo (Topping)",
      "Entretela de Recorte (Cut-Away)",
      "Tecidos & Substratos"
    ],
    tags: [
      "m-064",
      "microfibra",
      "camurca sintetica",
      "suede",
      "alcantara",
      "flutuacao",
      "sem marcas",
      "decoracao",
      "artrelados"
    ],
    bibliographicReferences: [
      "TORAY INDUSTRIES. Ultrasuede & Advanced Microfiber Processing & Embroidery Guidelines. Tokyo, 2022.",
      "ARTRELADOS. O Toque Nobre do Suede e Camurça Sintética: Bastidoramento Flutuante, Filmes Solúveis e Decoração de Luxo. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-22"
  },
  {
    id: "m-065-matriz-com-compensacao-parabolica-de-elasticidade",
    code: "M-065",
    term: "Matriz com Compensação Parabólica de Elasticidade em Malhas (Parabolic Elasticity Compensation in Knitwear)",
    letter: "M",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da matemática aplicada e da física da deformação viscoelástica de malhas têxteis sujeitas a tração multiaxial.",
    summary: "Cálculo matemático de compensação variável que engorda as colunas de ponto cheio mais no centro do que nas pontas, neutralizando a deformação de tecidos com elastano.",
    definition: "A Compensação Parabólica de Elasticidade e Deformação Viscoelástica (Parabolic Pull Compensation / Non-Linear Knitwear Distortion Modeling) é a técnica avançada de programação de matrizes em que os valores de compensação de encolhimento não são aplicados de forma linear e uniforme ao longo do objeto, mas seguem uma curva parabólica quadrática. Em tecidos de malha com alta porcentagem de elastano (Lycra, Suplex, Viscolycra e Malha PV), a tensão de tração exercida pela linha de bordar atinge seu pico máximo exatamente no centro geométrico do bloco bordado, fazendo com que retângulos virem ampulhetas e círculos virem ovais. A modelagem parabólica adiciona expansão geométrica extra (+0,5 mm a +0,8 mm) no terço médio da coluna, compensando com exatidão a contração diferencial do tecido.",
    technicalDetails: "Equação de compensação: ΔL(x) = C_base + 4 · C_max · (x/L) · (1 - x/L), onde C_max representa a flecha máxima da parábola de encolhimento central. Integração com underlays em malha de ancoragem octogonal.",
    howItWorks: [
      "1. A confecção esportiva encomenda o bordado de um logotipo retangular de 8x4 cm em tops de ginástica feitos de Suplex com 18% de elastano.",
      "2. Ao bordar com programação comum, as bordas laterais do retângulo encolhem 3 mm para dentro, virando uma 'cintura de ampulheta' feia.",
      "3. O programador aplica a curva de Compensação Parabólica no software.",
      "4. No computador, o desenho fica ligeiramente bojudo para fora no meio (como um pequeno barril suave).",
      "5. A máquina borda o logotipo no tecido Suplex sobre entretela de malha bidirecional.",
      "6. A tração natural das linhas puxa o centro bojudo exatamente para dentro na medida calculada.",
      "7. Ao retirar do bastidor, o bordado relaxa e assume linhas rigorosamente retas e cantos em 90 graus perfeitos."
    ],
    beginnerExplanation: "Sabe quando você vai bordar em tecido de academia que estica muito (tipo lycra) e um desenho que era para ser um quadrado perfeito fica com a 'cinturinha fina' afundada no meio parecendo uma ampulheta? A compensação parabólica é o truque de mestre no computador que desenha o meio do quadrado um pouquinho mais gordinho para fora. Quando a máquina costura e a linha puxa o tecido elástico, ele fica reto e perfeito como uma régua!",
    applications: [
      "Bordados em roupas esportivas (Fitness, Suplex, Lycra, Dry-Fit e Poliamida)",
      "Maiôs, biquínis e roupas de banho com alto teor de elastano",
      "Logotipos geométricos rigorosos (quadrados, círculos e brasões) em camisetas de malha",
      "Leggings, macacões de ciclismo e tecidos com elasticidade 4-way stretch"
    ],
    commonErrors: [
      "❌ Borda formas geométricas puras em malhas elásticas sem compensação de puxão no centro, gerando peças deformadas e tortas",
      "❌ Esticar a malha ao prender no bastidor para tentar compensar o encolhimento (a peça enruga toda quando sai do bastidor)",
      "❌ Usar entretela rasga-fácil que se rompe durante o bordado, permitindo que a malha estique descontroladamente"
    ],
    troubleshootingTips: [
      "Nunca estique a malha ao prender no bastidor: o tecido deve ficar pousado sobre a entretela 100% neutro e sem tensão",
      "Use entretela recortável especial para malha (Cut-Away de poliester ou Polymesh / No-Show Mesh)",
      "No Wilcom ou Hatch: Aumente a compensação de encolhimento (Pull Compensation) para 0,45 mm a 0,60 mm e selecione o perfil de tecido 'Pique / Single Knit'"
    ],
    dicaArtrelados: "Vai bordar roupas de ginástica ou tecidos que esticam muito? Nunca puxe a malha no bastidor! Pouse a malha lisinha sobre a entretela Cut-Away e programe a matriz com compensação extra de encolhimento: quando você tirar a peça da máquina, o desenho fica reto, simétrico e perfeito no corpo!",
    voceSabia: "Os algoritmos de deformação parabólica usados em softwares avançados de bordado foram adaptados de softwares de simulação estrutural da NASA usados para prever a dilatação de materiais em foguetes espaciais!",
    practicalExercise: "Desenhe um quadrado de 5x5 cm no programa com compensação de 0,5 mm: borde em um retalho de malha de camiseta sem esticar o tecido e meça com uma régua os quatro lados para constatar a simetria perfeita!",
    quickSummary: "Ajuste geométrico não-linear que neutraliza o encolhimento central em tecidos elásticos com elastano e lycra.",
    relatedTerms: [
      "Compensação de Encolhimento (Pull Compensation)",
      "Entretela de Malha (Polymesh / No-Show Mesh)",
      "Tecidos Elásticos e Malhas",
      "Programação de Bordado"
    ],
    tags: [
      "m-065",
      "compensacao parabolica",
      "malha",
      "elastano",
      "suplex",
      "lycra",
      "pull compensation",
      "wilcom",
      "artrelados"
    ],
    bibliographicReferences: [
      "AMERICAN APPAREL & FOOTWEAR ASSOCIATION. Knitwear Digitizing, Viscoelastic Recovery & Pull Compensation Dynamics. Washington, 2022.",
      "WILCOM. Advanced Fabric Profiles & Non-Linear Pull Compensation Formulas. Sydney, 2023."
    ],
    updatedAt: "2026-08-22"
  },
  {
    id: "m-066-manutencao-e-calibracao-do-cortador-automatico-de-linha-trimmer",
    code: "M-066",
    term: "Manutenção, Alinhamento e Calibração do Cortador Automático de Linha (Automatic Thread Trimmer Maintenance & Blade Timing)",
    letter: "M",
    level: "Intermediário 🟡",
    category: "Mecânica & Ajustes",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'thread trimmer' (aparador automático de linha). Mecanismo eletromecânico com solenoide e facas de corte cruzado sob a placa de agulha.",
    summary: "Procedimento periódico de limpeza de fiapos, lubrificação e ajuste da folga de corte entre a faca móvel e a faca fixa para evitar cortes mastigados e pontas longas de linha.",
    definition: "A Manutenção e Calibração do Sistema Cortador Automático de Linha (Automatic Trimmer System Maintenance / Movable & Fixed Blade Clearance Calibration) é a rotina técnica preventiva de ajuste e afiação do conjunto de corte subterrâneo instalado sob a placa de agulha da máquina de bordar. Acionado por um solenoide eletromagnético ou servomotor de corte ao final de cada bloco de cor ou salto de ponto, o sistema engata a linha superior e a linha da bobina através de um gancho móvel (Faca Móvel) e as cisalha de encontro a uma contra-lâmina temperada (Faca Fixa). O acúmulo de poeira têxtil, resíduos de cola spray ou desgaste micrométrico nas lâminas causa falhas graves de corte (cortes mascados, desfiamento ou caudas de linha excessivamente curtas que desengatam a agulha na próxima cor).",
    technicalDetails: "Folga entre faca móvel e faca fixa regulada entre 0,02 mm e 0,05 mm com pressão de mola calibrada. Curso do solenoide de engate sincronizado com ângulo de parada de 280° a 300° do volante.",
    howItWorks: [
      "1. A máquina de bordar passa a falhar nos cortes automáticos, deixando fios compridos de 5 cm entre as letras ou mastigando a linha sem cortar.",
      "2. O operador desliga a máquina e remove a placa de agulha.",
      "3. Com um pincel e ar comprimido suave, limpa um ninho compacto de fiapos e cola spray acumulado sob o trilho da faca móvel.",
      "4. Inspeciona o gume da faca fixa e aplica uma microgota de óleo fino de máquina no trilho deslizante.",
      "5. Ajusta o parafuso micrométrico de pressão da faca fixa com uma folga de teste usando uma linha fina de bordar.",
      "6. Ao acionar o comando de teste manual de corte (Trimmer Test), a faca cisalha a linha com um estalo seco e limpo, sem mastigar.",
      "7. Remonta a placa de agulha: a máquina volta a cortar todas as linhas com acabamento limpo e caudas perfeitas de 1,5 cm."
    ],
    beginnerExplanation: "O cortador automático é aquela 'tesourinha escondida' que fica embaixo da chapa de ferro da máquina e corta a linha sozinha toda vez que a máquina troca de cor ou pula de uma letra para outra! Com o tempo, acumulam-se fiapinhos de linha e cola spray ali embaixo que fazem a tesourinha ficar cega e mastigar a linha. Uma limpeza rápida com pincel e uma gotinha de óleo deixam o corte afiado e perfeito de novo!",
    applications: [
      "Eliminação de falhas de corte e fios mastigados entre letras e trocas de cor",
      "Prevenção de desengate de linha na agulha no início de novas cores",
      "Redução drástica do tempo gasto limpando fiapos com tesourinha manual",
      "Aumento da vida útil das lâminas de aço temperado e solenoides de corte"
    ],
    commonErrors: [
      "❌ Tentar raspar as facas de corte com estilete ou chave de fenda, tirando o fio de corte de fábrica e destruindo as lâminas",
      "❌ Deixar cola spray empastar as facas de corte sem limpar periodicamente com álcool isopropílico",
      "❌ Apertar o parafuso de ajuste da faca fixa com força excessiva, travando o solenoide e queimando o fusível da placa"
    ],
    troubleshootingTips: [
      "Limpe a área das facas de corte sob a placa de agulha a cada 15 dias com pincel macio e álcool isopropílico",
      "TESTE DA FOLHA DE PAPEL: A faca móvel e fixa devem cortar uma tira de papel fino de seda ou uma linha 40wt de forma limpa sem rasgar",
      "Se a linha escapar do olho da agulha logo após o corte: Aumente o comprimento da cauda de corte (Tail Length) no menu de configurações da máquina"
    ],
    dicaArtrelados: "A máquina parou de cortar a linha ou está deixando aqueles fios compridos feios no meio do bordado? Retire a chapa de metal e limpe os fiapos da faquinha com um pincel e álcool isopropílico. Em 3 minutos seu cortador volta a estalar cortando rente e você não precisa perder tempo cortando fiapos na mão!",
    voceSabia: "O sistema de corte automático com faca móvel subterrânea foi inventado no Japão nos anos 1980 e revolucionou a indústria do bordado mundial, economizando bilhões de horas de trabalho manual de corte de fiapos com tesourinha!",
    practicalExercise: "Retire a chapa da agulha da sua máquina e localize a faca móvel prateada e a faca fixa preta: limpe com cuidado todos os fiapinhos de poeira acumulados ao redor delas e pingue meia gotinha de óleo no trilho deslizante!",
    quickSummary: "Manutenção periódica de limpeza e ajuste das facas móvel e fixa do sistema automático de corte de linha.",
    relatedTerms: [
      "Corte Automático de Linha (Jump Stitch Trimming)",
      "Placa de Agulha / Chapa de Ponto",
      "Manutenção Preventiva e Lubrificação",
      "Mecânica & Ajustes"
    ],
    tags: [
      "m-066",
      "cortador automatico",
      "trimmer",
      "facas de corte",
      "manutencao",
      "fiapos",
      "solenoide",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "BROTHER SERVICE MANUAL. Automatic Thread Trimmer Mechanism, Adjustment & Blade Timing. Nagoya, 2022.",
      "ARTRELADOS. O Guia do Corte Perfeito: Manutenção de Trimmers, Afiação de Facas e Eliminação de Fios Mastigados no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-22"
  }
];

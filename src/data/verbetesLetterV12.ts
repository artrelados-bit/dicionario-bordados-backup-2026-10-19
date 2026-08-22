import { Verbete } from "../types";

export const VERBETES_LETTER_V12: Verbete[] = [
  {
    id: "velocidade-em-curvas-e-aceleracao-angular-corner-speed-deceleration",
    code: "V-056",
    letter: "V",
    term: "Velocidade em Curvas e Aceleração Angular (Corner Speed Deceleration)",
    pronunciation: "ve-lo-ci-da-de em cur-vas e a-ce-le-ra-ção an-gu-lar (cór-ner spid di-se-le-rêi-shon)",
    level: "Avançado 🔴",
    category: "Operação da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Da cinemática de controle numérico computadorizado (CNC). Algoritmos de redução proativa de velocidade em vértices pontiagudos para evitar desvios inerciais.",
    summary: "Recurso inteligente da controladora da máquina que reduz automaticamente a rotação em curvas fechadas e cantos vivos para garantir pontos nítidos e proteger a agulha.",
    definition: "A Velocidade em Curvas e Aceleração Angular (Corner Deceleration / Smart Speed Control / Look-Ahead Curve Braking) é o algoritmo de controle cinemático embutido na placa-mãe da máquina de bordar que analisa antecipadamente (Look-Ahead buffer) o ângulo vetorial entre os próximos pontos da matriz. Quando a trajetória exige uma mudança brusca de direção (curvas de raio inferior a 2 mm ou vértices menores que 90°), a controladora desacelera suavemente o motor principal de 900 SPM para 450–600 SPM durante o contorno do vértice, acelerando de volta à velocidade de cruzeiro logo em seguida.",
    technicalDetails: "A aceleração centrípeta exercida sobre o pantógrafo durante uma curva fechada é calculada por ac = v²/r. Em alta velocidade, essa aceleração gera uma força inercial que deflete a ponta da agulha de aço em até 0.8 mm para fora do centro, podendo colidir com a borda da chapa de agulha ou com o bico da laçadeira rotativa. O sistema Look-Ahead calcula a rampa de desaceleração ideal em milissegundos, mantendo a agulha perfeitamente vertical e garantindo que os vértices de letras e cantos de molduras saiam retos, pontiagudos e sem furos ovalados no tecido.",
    beginnerExplanation: "É como um piloto de corrida experiente: ele acelera na reta e pisa no freio antes de entrar em uma curva bem fechada para o carro não derrapar! A máquina de bordar faz a mesma coisa: corre rápido nas partes retas e diminui a velocidade sozinha quando chega nas quinas das letras para a agulha não entortar nem bater no ferro!",
    howItWorks: [
      "1. A controladora da máquina lê 50 a 100 pontos à frente na memória interna (Look-Ahead Buffer).",
      "2. O algoritmo detecta que uma curva de 90° em ponto cheio se aproxima em 8 pontos.",
      "3. O servomotor principal reduz suavemente a rotação de 850 SPM para 550 SPM.",
      "4. O pantógrafo translada o bastidor na curva com vibração mecânica zero.",
      "5. A agulha penetra o tecido exatamente no centro do furo da chapa de agulha.",
      "6. Concluída a curva e entrando em um trecho reto, o motor acelera de volta a 850 SPM em menos de 0.1 segundo.",
      "7. O bordado ganha cantos vivos perfeitamente desenhados com máxima produtividade global."
    ],
    applications: [
      "Bordado de pequenos textos e microletras com cantos agudos e serifas finas.",
      "Contornos de alta precisão em molduras geométricas e patches poligonais.",
      "Prevenção de quebra de agulhas e quebra de fios em desenhos complexos.",
      "Bordados em bonés estruturados onde a inércia do bastidor é muito alta."
    ],
    characteristics: [
      "Ajuste automático em tempo real sem necessidade de alteração manual pelo operador.",
      "Pode ser parametrizado no menu de sensibilidade de cantos da máquina.",
      "Preserva a vida útil do mecanismo do cabeçote e das correias do pantógrafo."
    ],
    commonErrors: [
      "❌ Desativar o freio de curvas nas configurações da máquina para tentar bordar 'mais rápido', quebrando agulhas em cantos vivos.",
      "❌ Configurar a sensibilidade de frenagem excessivamente alta, fazendo a máquina ficar lenta até mesmo em curvas suaves.",
      "❌ Não lubrificar as guias do pantógrafo, aumentando a inércia mecânica nas desacelerações."
    ],
    troubleshootingTips: [
      "Agulha quebrando sempre que a máquina faz a curva de uma letra: ative o 'Corner Deceleration' no painel da máquina ou reduza a velocidade máxima da matriz.",
      "Cantos das letras saindo arredondados em vez de pontiagudos: a máquina está correndo rápido demais nas quinas; aumente a frenagem de cantos na controladora.",
      "A máquina está acelerando e freando de forma muito brusca: calibre as curvas de aceleração (S-Curve Acceleration) no menu de serviço técnico."
    ],
    dicaArtrelados: "Não tenha medo de ver a sua máquina diminuir a velocidade nas quininhas e acelerar nas retas: isso é sinal de que a inteligência da máquina está funcionando perfeitamente! Esse freio inteligente é o que garante que as pontinhas das letras saiam afiadas como navalha e a agulha não quebre!",
    voceSabia: "Os algoritmos de 'Look-Ahead' (antecipação de trajetória) utilizados nas melhores máquinas de bordar do mundo foram adaptados diretamente dos sistemas de navegação e controle de voo de jatos supersônicos!",
    practicalExercise: "Borde uma estrela de 5 pontas em velocidade alta e observe atentamente como a máquina desacelera nas pontas afiadas e acelera no centro. Note a perfeição dos bicos da estrela.",
    quickSummary: "Controle cinemático que desacelera o motor em curvas e quinas para manter a precisão dos vértices e proteger a agulha de impactos inerciais.",
    relatedTerms: ["Look-Ahead", "Desaceleração", "Inércia", "Cantos Vivos", "Servomotor", "Cinemática CNC"],
    tags: ["velocidade", "curvas", "aceleracao", "angular", "lookahead", "mecanica", "operacao"]
  },
  {
    id: "vetorizacao-a-laser-e-marcacao-termica-laser-vector-thermal-etching",
    code: "V-057",
    letter: "V",
    term: "Vetorização a Laser e Marcação Térmica (Laser Vector & Thermal Etching)",
    pronunciation: "ve-to-ri-za-ção a lêi-zer e mar-ca-ção tér-mi-ca (lêi-zer vêc-tor & fêr-mal ét-ching)",
    level: "Avançado 🔴",
    category: "Aplicações & Efeitos Especiais",
    grammarClass: "Substantivo feminina composta.",
    origin: "Da sigla tecnológica LASER (Light Amplification by Stimulated Emission of Radiation) acoplada a cabeçotes de corte e gravação em máquinas têxteis computadorizadas.",
    summary: "Integração de tubos de laser CO2 ou fibra óptica na máquina de bordar para corte milimétrico de apliques no bastidor e gravação de texturas térmicas no tecido.",
    definition: "A Vetorização a Laser e Marcação Térmica (Laser Embroidery Combo / Bridge Laser Cutting / Kiss-Cut) é a avançada tecnologia híbrida que acopla uma cabeça óptica de feixe laser de CO2 (potência de 30W a 100W) diretamente ao cabeçote de costura ou sobre uma ponte móvel sobre o pantógrafo da máquina de bordar. O feixe de luz focalizado corta tecidos de aplique (sarja, feltro, couro sintético) com tolerância de 0.05 mm diretamente dentro do bastidor em frações de segundo ou efetua a queima térmica superficial (Etching) do tecido, criando texturas de relevo e efeitos de couro envelhecido sem costurar um único ponto.",
    technicalDetails: "O sistema opera através de controle vetorial DNC dedicado. Na técnica de 'Kiss-Cut' (meio-corte), a potência do feixe de laser é modulada para cortar apenas a camada superior do tecido de aplique sem queimar nem perfurar o tecido base da camiseta ou a entretela inferior. A velocidade de corte do feixe atinge até 2.000 mm/s. As bordas cortadas a laser em fibras sintéticas (poliéster, nylon) sofrem cauterização térmica instantânea, selando os filamentos e eliminando 100% o desfiamento, o que permite produzir peças com aplique cru sem necessidade de costurar ponto cheio de cobertura por cima.",
    beginnerExplanation: "É quando a máquina de bordar tem um raio laser de verdade instalado nela! Ela borda uma parte do desenho e, de repente, dispara um raio de luz que corta o tecido do aplique em um piscar de olhos e sela as pontinhas com calor para nunca mais desfiar. Fica um trabalho perfeito de fábrica com velocidade incrível!",
    howItWorks: [
      "1. O operador coloca o tecido base no bastidor e estende uma camada de tecido de aplique por cima.",
      "2. A máquina inicia o arquivo que contém tanto os comandos de ponto quanto os vetores de laser.",
      "3. A cabeça de laser dispara o feixe infravermelho e recorta o contorno do aplique em 2 segundos.",
      "4. O operador apenas retira a sobra de tecido com as mãos (corte limpo e selado).",
      "5. A agulha da máquina entra imediatamente em ação e borda os detalhes internos e contornos.",
      "6. A peça sai 100% finalizada sem necessidade de corte manual com tesourinha.",
      "7. A produtividade do ateliê é multiplicada por dez vezes com precisão cirúrgica."
    ],
    applications: [
      "Corte instantâneo de letras de aplique para jaquetas universitárias e uniformes esportivos.",
      "Gravação de texturas térmicas e desenhos sombreados em jaquetas jeans e bolsas de couro.",
      "Produção em massa de patches militares e emblemas bordados com borda cauterizada a laser.",
      "Criação de rendas vazadas (Richelieu moderno) cortadas a laser e contornadas com ponto cheio."
    ],
    characteristics: [
      "Corte e selagem térmica simultânea das fibras sintéticas contra desfiamento.",
      "Velocidade de recorte centenas de vezes superior à tesoura manual.",
      "Capacidade de queimar texturas em relevo no tecido sem gastar linha."
    ],
    commonErrors: [
      "❌ Regular a potência do laser alta demais e furar a camiseta do cliente junto com o aplique.",
      "❌ Cortar tecidos de PVC que liberam gases tóxicos corrosivos que danificam a lente do laser.",
      "❌ Não ligar o exaustor de fumaça, acumulando fuligem e cheiro de queimado no tecido."
    ],
    troubleshootingTips: [
      "O laser cortou a camiseta por baixo do aplique: reduza a potência do laser (Power %) ou aumente a velocidade do feixe de corte (Speed mm/s) no software de controle.",
      "Borda do tecido com marcas amareladas de queimado: ative a assistência de ar comprimido (Air Assist) no bico óptico do laser para soprar as chamas.",
      "Feixe de laser fraco ou fora de foco: limpe a lente focal de germânio/ZnSe com lenço óptico e álcool isopropílico."
    ],
    dicaArtrelados: "A tecnologia do corte a laser é o futuro do bordado de alto valor agregado! Ela permite fazer o 'Richelieu Moderno' em vestidos de noiva e toalhas nobres: o laser queima e vaza os buraquinhos do tecido com precisão micrométrica e a máquina vem bordando a bordinha por cima. É a união máxima da tradição com a tecnologia!",
    voceSabia: "Os primeiros sistemas de laser combinados com máquinas de bordar foram desenvolvidos na Itália e na Alemanha nos anos 90 para a confecção de patches oficiais da Fórmula 1 e brasões da aeronáutica europeia!",
    practicalExercise: "Se o seu ateliê tem acesso a uma máquina de corte a laser ou parceiro local: faça o corte de um número '10' em sarja com borda cauterizada e borde em um moletom usando apenas um ponto corrido de fixação. Compare o acabamento impecável com um corte de tesoura manual.",
    quickSummary: "Tecnologia combinada que utiliza feixes de laser CO2 para cortar apliques no bastidor e gravar texturas térmicas com selagem de pontas.",
    relatedTerms: ["Laser Têxtil", "Kiss-Cut", "Cauterização", "Richelieu a Laser", "Ponte Laser", "Patch Selado"],
    tags: ["vetorizacao", "laser", "corte", "termica", "aplique", "cauterizacao", "inovacao"]
  },
  {
    id: "valvula-solenoide-de-ponto-e-atuadores-eletricos-electromechanical-solenoid-actuators",
    code: "V-058",
    letter: "V",
    term: "Válvula Solenoide de Ponto e Atuadores Elétricos (Electromechanical Solenoid Actuators)",
    pronunciation: "vál-vu-la so-le-nói-de de pon-to e a-tu-a-do-res e-lé-tri-cos (so-le-nóid éc-tiu-ei-tors)",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do grego 'solen' (tubo, canal) e 'eidos' (forma). Atuadores eletromagnéticos que convertem pulsos de corrente elétrica em movimento mecânico linear instantâneo.",
    summary: "Eletroímãs de alta velocidade responsáveis por disparar as facas de corte de linha, acionar os limpadores de fio (Wipers) e engatar os cabeçotes de agulha.",
    definition: "A Válvula Solenoide de Ponto e os Atuadores Elétricos (Solenoid Coils / Electromechanical Actuators) constituem os músculos eletromecânicos de resposta rápida que executam os comandos automáticos auxiliares na máquina de bordar computadorizada. Compostos por uma bobina de fio de cobre esmaltado que envolve um êmbolo móvel de aço doce, esses dispositivos disparam impulsos de força mecânica em menos de 15 milissegundos quando energizados por um pulso de 24V ou 36V da placa controladora.",
    technicalDetails: "Os solenoides são responsáveis pelas três funções automatizadas mais críticas da máquina: 1) Solenoide de Corte de Linha (Trimmer Solenoid), que puxa o tirante da faca móvel sob a chapa de agulha no ângulo de 300° do ciclo; 2) Solenoide do Limpador de Fio (Wiper Solenoid), que joga a haste metálica superior para recolher a ponta de linha para cima da agulha; 3) Solenoide de Engate de Cabeçote (Head Jump Solenoid / Selector), que acopla ou desacopla a barra de agulha do eixo principal. Se a bobina do solenoide queimar ou o êmbolo acumular sujeira de óleo, as facas não cortam ou o wiper falha.",
    beginnerExplanation: "São os 'eletroímãs inteligentes' da máquina: quando o computador manda cortar a linha ou puxar o fiapinho, esse ímã dá um puxão elétrico super rápido com um 'tlec!' metálico e aciona a faca ou o bracinho que limpa a linha. Sem eles, a máquina não conseguiria fazer nada sozinha!",
    howItWorks: [
      "1. A controladora identifica o comando de corte (TRIM) no código da matriz.",
      "2. A placa de potência envia um pulso elétrico de 24V DC para a bobina do solenoide de corte.",
      "3. O campo magnético atrai o êmbolo de aço com força instantânea de até 20 Newtons.",
      "4. A haste mecânica avança e engata a faca móvel na laçadeira rotativa.",
      "5. A linha é cortada com precisão milimétrica.",
      "6. A mola de retorno puxa o êmbolo de volta para a posição de repouso.",
      "7. Em seguida, o solenoide do limpador de fio (Wiper) dispara com outro pulso, puxando a ponta do fio para cima.",
      "8. O ciclo mecânico é completado em uma fração de segundo com sincronismo absoluto."
    ],
    applications: [
      "Acionamento ultra-rápido do sistema de facas de corte automático de linha.",
      "Movimentação do braço limpador de fio superior (Wiper / Pega-Fio).",
      "Seleção e engate individual de barras de agulha em máquinas multicabeçotes.",
      "Liberação de tensão nos tensores superiores durante saltos longos (Tension Release)."
    ],
    characteristics: [
      "Tempo de resposta mecânica ultra-rápido (menos de 20 milissegundos).",
      "Alta durabilidade com capacidade para mais de 10 milhões de ciclos de disparo.",
      "Exige limpeza periódica do êmbolo contra acúmulo de poeira e óleo ressecado."
    ],
    commonErrors: [
      "❌ Colocar graxa pesada no êmbolo do solenoide, fazendo o ferro grudar e o corte de linha travar.",
      "❌ Deixar fios elétricos do chicote do solenoide prensados na carcaça da máquina durante a manutenção.",
      "❌ Ignorar solenoides que esquentam excessivamente por curto-circuito na bobina."
    ],
    troubleshootingTips: [
      "Máquina dá comando de corte mas a faca não se mexe (sem barulho de 'tlec'): verifique o fusível da placa de solenoides ou meça a resistência da bobina com um multímetro.",
      "O limpador de fio (Wiper) bate na agulha e fica travado no meio: limpe o êmbolo do solenoide com desengraxante seco e verifique a mola de retorno.",
      "Mensagem de erro de 'Trimmer Solenoid Error' no painel: confira se o sensor de posição de retorno do solenoide não está descalibrado."
    ],
    dicaArtrelados: "O êmbolo do solenoide NUNCA deve ser lubrificado com graxa ou óleo grosso! Os solenoides funcionam a seco ou com uma película quase invisível de silicone líquido seco. Colocar graxa no solenoide faz ele virar uma cola com a poeira de linha e a faca para de cortar na hora!",
    voceSabia: "O princípio físico do solenoide foi descoberto pelo físico francês André-Marie Ampère em 1820 ao demonstrar que uma espiral de fio de cobre percorrida por eletricidade se comporta exatamente como um ímã natural com polos norte e sul!",
    practicalExercise: "Peça para a sua máquina fazer um corte de linha manual através do painel. Escute com atenção o som característico de 'tlec-clack' disparado pelos solenoides da faca e do limpador de linha no cabeçote.",
    quickSummary: "Atuadores eletromagnéticos lineares que disparam mecanicamente as facas de corte, os limpadores de fio e a seleção de agulhas.",
    relatedTerms: ["Solenoide", "Trimmer", "Wiper", "Eletroímã", "Atuador", "Mecânica CNC", "Manutenção Elétrica"],
    tags: ["valvula", "solenoide", "atuadores", "eletromagnetico", "corte", "wiper", "componentes"]
  },
  {
    id: "varredura-optica-de-agulhas-e-camera-de-posicionamento-smart-camera-vision-system",
    code: "V-059",
    letter: "V",
    term: "Varredura Óptica de Agulhas e Câmera de Posicionamento (Smart Camera Vision System)",
    pronunciation: "var-re-du-ra óp-ti-ca de a-gu-lhas e câ-me-ra de po-si-cio-na-men-to (smárt cê-me-ra ví-zhon)",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Da visão computacional e inteligência artificial aplicada à robótica industrial têxtil moderna (Tajima SAI, Brother Innov-is Luminaire, Ricoma Vision).",
    summary: "Câmera digital HD integrada ao cabeçote que escaneia o tecido no bastidor, projeta o bordado na tela com alinhamento milimétrico e reconhece marcas de registro.",
    definition: "A Varredura Óptica e o Sistema de Câmera de Posicionamento Inteligente (Smart Vision Camera / Built-in Camera Positioning System) constituem a tecnologia de visão computacional de ponta embutida nas máquinas de bordar contemporâneas. Uma microcâmera digital de alta resolução com lentes grande-angulares e iluminação LED anelar instalada ao lado da barra de agulha escaneia a superfície do tecido montado no bastidor e transmite uma imagem de vídeo ao vivo para o painel touchscreen colorido da máquina.",
    technicalDetails: "O algoritmo de visão computacional executa a calibração geométrica de perspectiva em tempo real (Homografia Planar 2D). O operador pode posicionar o bordado sobre listras, xadrezes, bolsos ou recortes simplesmente arrastando a matriz com o dedo sobre a foto real do tecido exibida na tela. Além disso, o sistema faz a leitura automática de marcas de registro impressas (Snowman Markers / Pontos Fiduciais), calculando a rotação angular exata (ex: 3.42° de inclinação) e o deslocamento cartesiano (ΔX, ΔY), compensando instantaneamente qualquer erro humano de montagem no bastidor sem necessidade de soltar a peça.",
    beginnerExplanation: "É como se a máquina tivesse 'olhos de verdade': ela tem uma camerazinha no cabeçote que tira uma foto perfeita da roupa que está presa no bastidor e mostra na tela colorida! Você vê a foto da sua camiseta e arrasta o desenho com o dedo exatamente em cima do bolso ou da listrinha que você quer. É impossível errar a posição ou deixar o bordado torto!",
    howItWorks: [
      "1. A peça é presa no bastidor de forma rápida, mesmo que fique levemente torta.",
      "2. O operador clica no botão 'Câmera / Escanear Bastidor' no painel da máquina.",
      "3. O cabeçote translada a câmera sobre o tecido e tira uma foto panorâmica de alta resolução em 3 segundos.",
      "4. A foto real do tecido aparece na tela com o desenho do bordado sobreposto por cima.",
      "5. O operador ajusta o tamanho e a rotação do bordado diretamente sobre as listras ou o bolso da roupa.",
      "6. A máquina recalcula as coordenadas matemáticas com precisão de 0.1 mm.",
      "7. Pressiona START e o bordado é executado exatamente no local planejado com perfeição milimétrica."
    ],
    applications: [
      "Alinhamento perfeito de bordados sobre tecidos listrados, xadrez e estampados.",
      "Enquadramento cirúrgico de monogramas sobre bolsos de camisas prontas e jalecos.",
      "Bordados em peças de patchwork e colchas com junções geométricas complexas.",
      "Conexão contínua de grandes bordados divididos em múltiplos bastidores (Endless Embroidery / Re-hooping)."
    ],
    characteristics: [
      "Elimina 100% dos erros humanos de alinhamento visual e medição com fita métrica.",
      "Permite bordar peças sem necessidade de giz ou canetas de marcação no tecido.",
      "Tecnologia revolucionária que transforma a experiência do operador iniciante e profissional."
    ],
    commonErrors: [
      "❌ Tocar com os dedos sujos de graxa na lente da câmera do cabeçote, embaçando a imagem na tela.",
      "❌ Tentar escanear o tecido no escuro sem ligar os LEDs auxiliares da máquina.",
      "❌ Ignorar a calibração de centro da câmera após trocar o bloco de agulhas."
    ],
    troubleshootingTips: [
      "A imagem do tecido na tela está torta ou desfocada: limpe a lente da câmera com um pano de microfibra macio para lentes ópticas.",
      "O desenho bordado ficou 2 mm afastado de onde aparecia na foto da tela: execute o procedimento de 'Calibração da Câmera com Mira' no menu de configurações do painel.",
      "A câmera não reconhece o adesivo de registro (Snowman): garanta que o adesivo esteja plano e bem iluminado sem sombras fortes sobre o bastidor."
    ],
    dicaArtrelados: "Se a sua máquina tem câmera integrada: use e abuse do adesivo de posicionamento (marcador óptico)! Você cola o adesivo onde quer o bordado, a máquina acha o adesivo sozinha, gira o desenho no ângulo exato e borda sem você precisar medir nada com régua! É pura magia tecnológica!",
    voceSabia: "Os primeiros sistemas de visão computacional para alinhamento têxtil foram desenvolvidos nos laboratórios espaciais do MIT nos anos 80 para montar os escudos térmicos dos ônibus espaciais da NASA!",
    practicalExercise: "Prenda um tecido listrado de propósito bem torto no seu bastidor. Use o recurso de câmera da sua máquina para alinhar o texto exatamente paralelo a uma das listras coloridas e borde para testemunhar a precisão geométrica.",
    quickSummary: "Sistema de visão computacional com câmera HD integrada que projeta a matriz sobre a foto real do tecido para alinhamento milimétrico instantâneo.",
    relatedTerms: ["Câmera de Posicionamento", "Visão Computacional", "Marcador Óptico", "Re-hooping", "Alinhamento Perfeito", "Touchscreen HD"],
    tags: ["varredura", "optica", "camera", "posicionamento", "visao", "tecnologia", "precisao"]
  },
  {
    id: "viga-do-pantografo-e-carro-de-translacao-cartesiana-pantograph-beam-carriage",
    code: "V-060",
    letter: "V",
    term: "Viga do Pantógrafo e Carro de Translação Cartesiana (Pantograph Beam & Carriage)",
    pronunciation: "vi-ga do pan-tó-gra-fo e car-ro de trans-la-ção car-te-si-a-na (pên-to-gréf bim & cé-ri-dje)",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do grego 'pan' (tudo) e 'graphein' (escrever, desenhar) associado ao sistema de coordenadas cartesianas concebido pelo filósofo e matemático René Descartes (1596–1650).",
    summary: "Estrutura mestra de duralumínio extrudado e fusos lineares de precisão que sustenta e movimenta o bastidor com acelerações ultrarrápidas nos eixos X e Y.",
    definition: "A Viga do Pantógrafo e o Carro de Translação Cartesiana (Pantograph Beam / X-Y Carriage Mechanism) constituem a espinha dorsal mecânica e cinemática da máquina de bordar. Trata-se do conjunto estrutural fabricado em perfil de duralumínio aeronáutico extrudado de alta rigidez torcional e baixa densidade, acoplado a guias lineares retificadas e correias sincronizadoras de poliuretano com alma de aço (ou fusos de esferas recirculantes), que movimenta o bastidor nos planos ortogonais X (horizontal) e Y (profundidade) com precisão micrométrica a cada agulhada.",
    technicalDetails: "A dinâmica do carro do pantógrafo exige acelerações que ultrapassam 2.5G (mais de 25 m/s²) para reposicionar o tecido entre a saída e a reentrada da agulha em uma janela temporal de menos de 40 milissegundos a 1.000 SPM. O conjunto é tracionado por servomotores AC brushless de alto torque comandados por encoders ópticos absolutos com resolução de 10.000 pulsos por volta. A deflexão mecânica máxima permitida na ponta da viga do pantógrafo sob carga de 5 kg é inferior a 0.03 mm, garantindo encaixe cirúrgico de contornos mesmo em bastidores com mais de 1 metro de vão livre.",
    beginnerExplanation: "É o 'braço de ferro gigante e super forte' que fica atrás e dos lados da máquina segurando o bastidor: ele tem motores elétricos tão rápidos e precisos que conseguem mover a roupa inteira de um lado para o outro mil vezes por minuto sem errar nem um cabelinho de distância!",
    howItWorks: [
      "1. A matriz envia as coordenadas vetoriais do próximo ponto (ex: ΔX = +2.4 mm, ΔY = -1.8 mm).",
      "2. O servomotor aciona a correia sincronizada do eixo X e o fuso do eixo Y simultaneamente.",
      "3. O carro de translação desliza sobre os trilhos lineares com atrito quase nulo.",
      "4. A viga do pantógrafo posiciona o bastidor na coordenada exata em menos de 0.03 segundos.",
      "5. O servomotor trava a posição com torque magnético rígido enquanto a agulha penetra o tecido.",
      "6. A laçada é formada pela laçadeira no instante de repouso absoluto do pantógrafo.",
      "7. O ciclo recomeça para o próximo ponto com fluidez e estabilidade mecânica total."
    ],
    applications: [
      "Movimentação cartesiana precisa de bastidores planos, tubulares e bastidores de boné.",
      "Garantia de alinhamento milimétrico em matrizes de alta densidade e múltiplos contornos.",
      "Sustentação de grandes matrizes de vestidos de festa, bandeiras e colchas em máquinas de grande porte.",
      "Absorção de forças inerciais geradas por acelerações bruscas em alta velocidade."
    ],
    characteristics: [
      "Rigidez estrutural extrema com baixíssimo peso por liga de duralumínio.",
      "Precisão de posicionamento repetível inferior a 0.01 mm.",
      "Tracionamento silencioso por correias sincronizadoras reforçadas com cabos de aço."
    ],
    commonErrors: [
      "❌ Apoiar o peso do corpo ou objetos pesados sobre a viga do pantógrafo, empenando as guias lineares.",
      "❌ Forçar o movimento do bastidor com as mãos enquanto a máquina está ligada e os motores travados.",
      "❌ Deixar cabos de extensão ou tecidos caídos enroscarem nos trilhos do carro de translação."
    ],
    troubleshootingTips: [
      "Bordado saindo esticado ou achatado no sentido horizontal: correia dentada do eixo X frouxa ou com dentes desgastados; proceda ao tensionamento com torquímetro.",
      "Erro de 'X/Y Limit Over / Limite de Curso Excedido': o desenho ultrapassa a amplitude física máxima da viga do pantógrafo; reduza a matriz ou use um bastidor menor.",
      "Barulho de rangido metálico ao movimentar o pantógrafo: limpe os trilhos com pano seco e aplique graxa de lítio branca especial para guias lineares."
    ],
    dicaArtrelados: "NUNCA apoie bolsas, caixas de linha ou o seu braço em cima do braço do pantógrafo da máquina! A precisão dos seus contornos depende do alinhamento reto dessa barra. Trate a viga do pantógrafo como o instrumento cirúrgico mais valioso do seu ateliê!",
    voceSabia: "O pantógrafo mecânico original foi inventado em 1603 pelo astrônomo jesuíta Christoph Scheiner para copiar e redimensionar mapas e desenhos científicos através de um sistema articulado de paralelogramos de madeira!",
    practicalExercise: "Com a máquina desligada da tomada, empurre suavemente a viga do pantógrafo nos sentidos X e Y com a mão. Sinta como o movimento deve ser macio, suave e sem nenhum estalo ou ponto duro de travamento.",
    quickSummary: "Estrutura mecânica cartesiana de duralumínio e trilhos lineares que translada o bastidor nos eixos X e Y com acelerações ultrarrápidas e precisão micrométrica.",
    relatedTerms: ["Pantógrafo", "Eixo X/Y", "Guia Linear", "Servomotor Brushless", "Correia Sincronizadora", "Precisão Cartesiana"],
    tags: ["viga", "pantografo", "carro", "translacao", "cartesiana", "mecanica", "eixos"]
  },
  {
    id: "vintage-e-estilo-retro-em-bordado-eletronico-vintage-retro-embroidery-style",
    code: "V-061",
    letter: "V",
    term: "Vintage e Estilo Retrô em Bordado Eletrônico (Vintage & Retro Embroidery Style)",
    pronunciation: "vín-ta-ge e es-ti-lo re-trô em bor-da-do e-le-trô-ni-co (vín-tidj & rê-tro em-brói-de-ri)",
    level: "Iniciante 🟢",
    category: "Estilos de Bordado & Épocas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês antigo 'vendange' (safra nobre de vinho antigo) e do latim 'retro' (para trás, clássico). Movimento estético global de resgate e valorização de designs têxteis do século XX.",
    summary: "Tendência estética nostálgica que utiliza linhas foscas de algodão, pontos abertos, arabescos clássicos e motivos vintage dos anos 1950 a 1980 para criar peças elegantes e atemporais.",
    definition: "O Vintage e Estilo Retrô em Bordado Eletrônico é a vertente estilística e técnica de digitalização que recria conscientemente a estética, a textura e os temas visuais clássicos das décadas passadas (com ênfase nas eras vitoriana, art déco, anos 50 pin-up, anos 70 boho e anos 80 esportivo). Caracteriza-se pelo uso de pontos de traço manual simulado (Bean Stitch, Ponto Corrente, Redwork), densidades mais abertas e confortáveis, paletas de cores outonais suaves ou tons pastéis e a substituição das linhas brilhantes sintéticas por fios de algodão fosco ou viscose envelhecida.",
    technicalDetails: "A digitalização para o estilo vintage rejeita o aspecto excessivamente plástico e compacto de pontos cheios industriais modernos. Utilizam-se: 1) Linhas de contorno em Ponto Corrido Triplo (Bean Stitch de 2.8 a 3.5 mm) imitando o bordado à mão livre; 2) Preenchimentos de textura aberta (Open Tatami / Cross-Stitch / Ponto Cruz Digital) com espaçamento de 0.60 a 0.90 mm; 3) Linhas de Algodão #30 ou #40 (ex: Madeira Cotona / Aurifil) com agulhas de olho grande (80/12 Topstitch); 4) Tecidos de base nobres e naturais como linho puro, sarja crua, cânhamo, jeans lavado e cambraia de algodão.",
    beginnerExplanation: "É aquele estilo lindo e charmoso que parece que a vovó bordou à mão com todo o carinho há 50 anos atrás! A gente usa desenhos clássicos com flores delicadas, carros antigos ou frases fofas, usando linhas foscas e pontos mais leves em panos de prato de linho, almofadas e roupinhas de bebê.",
    howItWorks: [
      "1. O designer escolhe uma ilustração de estilo clássico (botânica vitoriana, cartaz retrô ou monograma antigo).",
      "2. Na digitalização, prioriza pontos de contorno leves (Redwork/Bean Stitch) e pontos cruz decorativos.",
      "3. Configura densidades suaves para manter a maciez e o caimento natural do tecido.",
      "4. Monta o tecido de linho ou algodão cru no bastidor com entretela rasgável macia.",
      "5. Abastece a máquina com linhas de algodão fosco em tons aconchegantes (mostarda, verde oliva, terracota, cru).",
      "6. A máquina costura a matriz com suavidade a 600–700 SPM.",
      "7. A peça pronta exibe elegância atemporal, toque macio e altíssimo valor artesanal percebido."
    ],
    applications: [
      "Enxovais clássicos de bebê em linho: fraldas, mantas, cueiros e vestidos nobres.",
      "Decoração de interiores rústica e sofisticada: almofadas, jogos americanos e toalhas de mesa.",
      "Jaquetas jeans e camisetas customizadas no estilo retrô dos anos 70 e 80.",
      "Identidades visuais de cafeterias artesanais, barbearias clássicas e bistrôs rústicos."
    ],
    characteristics: [
      "Toque ultra-macio e caimento leve sem rigidez plástica.",
      "Paleta de cores elegantes e nostálgicas que nunca saem de moda.",
      "Bordado com baixíssimo consumo de linha e tempo de execução rápido."
    ],
    commonErrors: [
      "❌ Usar linha de poliéster ultra-brilhante neon em um motivo botânico vitoriano, destruindo a atmosfera clássica.",
      "❌ Colocar densidade pesada de tatami industrial (0.35 mm) em linho delicado, enrugando o tecido e tirando o charme rústico.",
      "❌ Não usar agulha apropriada para linha de algodão fosco (que tem mais atrito e exige olho maior)."
    ],
    troubleshootingTips: [
      "Linha de algodão fosco quebrando com facilidade: troque a agulha por uma Schmetz Topstitch 80/12 (que tem o olho 3 vezes maior) e reduza a tensão superior.",
      "O bordado parece muito 'computadorizado e duro': aumente o espaçamento dos pontos na matriz e ative a variação orgânica de comprimento.",
      "O linho enrugou ao redor das flores: use entretela de algodão macio e use subpontos leves em cruz."
    ],
    dicaArtrelados: "O estilo Vintage em linho cru ou cambraia de algodão é uma das coisas mais lucrativas e nobres que você pode oferecer no seu ateliê! Clientes pagam o dobro por um enxoval com cara de 'herança de família'. Use linhas em tons pastéis ou terrosos e pontos leves de traço: a peça fica simplesmente inesquecível!",
    voceSabia: "A palavra 'Vintage' originalmente era usada exclusivamente pelos produtores de vinho franceses para designar os vinhos produzidos em um ano excepcional de colheita ('uma safra de ouro') antes de virar sinônimo mundial de sofisticação retrô!",
    practicalExercise: "Borde um raminho floral simples em um pedaço de linho cru usando linha fosca em tom terracota e ponto corrido triplo (Bean Stitch). Passe o ferro com vapor e sinta o toque macio e a sofisticação da estética vintage.",
    quickSummary: "Estilo estético clássico e atemporal que utiliza pontos leves, linhas foscas de algodão e motivos nostálgicos para criar peças de elegância nobre.",
    relatedTerms: ["Vintage", "Retrô", "Linho Puro", "Bean Stitch", "Redwork", "Linha de Algodão", "Estética Rústica"],
    tags: ["vintage", "retro", "estilo", "linho", "nostalgia", "algodao", "decorativo"]
  },
  {
    id: "vectorization-node-editing-vetorizacao-edicao-nos",
    code: "V-062",
    letter: "V",
    term: "Vectorization & Node Editing — Vetorização & Edição de Nós de Curva (Curvas Bézier & Modelagem de Matrizes)",
    pronunciation: "vék-to-rai-zêi-shon end nôud é-di-ting — ve-to-ri-za-são e e-di-são de nós",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do latim vector (aquele que conduz/transporta) e do francês Pierre Bézier (engenheiro da Renault que desenvolveu as curvas matemáticas paramétricas na década de 1960).",
    summary: "Processo de desenho e manipulação de curvas paramétricas e pontos de controle vetoriais que definem as formas geométricas antes da geração de pontos de bordado.",
    definition: "A Vectorization & Node Editing (Vetorização Vetorial & Edição de Nós / Modelagem de Curvas Bézier / Object Node & Shape Editing) é o conjunto de operações fundamentais de desenho em softwares de digitalização de bordado (como Wilcom, Pulse, Embird Studio, Hatch, Bernina Designer). Consiste em traçar sobre uma imagem bitmap (JPEG/PNG) objetos gráficos vetoriais compostos por nós de canto (Corner Nodes / nós quadrados de vértice reto) e nós de curva (Curve Nodes / nós circulares com alças tangentes de suavização), definindo com exatidão matemática o contorno perimetral, o sentido dos pontos e as aberturas internas (Holes) das colunas satim e áreas tatami.",
    technicalDetails: "A precisão da matriz depende do número e posicionamento estratégico dos nós. O excesso de nós (Over-noding) cria ondulações no contorno e gera microagulhadas indesejadas que aumentam o tempo de máquina; já a falta de nós deforma curvas fechadas. Na edição avançada, o programador utiliza a conversão de nós (tecla de espaço no Wilcom) e a ferramenta 'Reshape' para ajustar tangentes, definir linhas de corte (Split Lines) e orientar os ângulos de ponto (Stitch Angles) perpendicularmente à curvatura do objeto.",
    beginnerExplanation: "É como desenhar com uma caneta mágica no computador, clicando na tela para criar pequenos pontinhos que você pode puxar e esticar até o desenho ficar com as curvas perfeitamente lisinhas e sem nenhum defeito antes do programa transformar tudo em bordado de verdade!",
    howItWorks: [
      "1. O digitador importa a logomarca do cliente em alta resolução no software.",
      "2. Seleciona a ferramenta de digitalização manual de colunas ou blocos de preenchimento.",
      "3. Clica com o botão esquerdo para criar pontos retos (nós de quina) e botão direito para nós curvos.",
      "4. Usa a ferramenta de remodelagem (Reshape / Node Edit) para visualizar as alças de Bézier.",
      "5. Ajusta as tangentes eliminando nós desnecessários para criar curvas perfeitamente contínuas e suaves.",
      "6. Define as linhas de ângulo de inclinação de ponto perpendiculares à forma da curva.",
      "7. O software compila o vetor e gera os pontos com alinhamento e brilho incomparáveis."
    ],
    applications: [
      "Digitalização manual de logotipos corporativos, tipografias personalizadas e ilustrações artísticas.",
      "Correção de arestas serrilhadas geradas por importações automáticas de bitmaps de baixa qualidade.",
      "Criação de vazados internos (Holes) em letras como 'O', 'A', 'P' e 'D' em grandes preenchimentos.",
      "Ajuste fino de compensações de repuxo e sobreposições de cores diretamente na malha vetorial."
    ],
    characteristics: [
      "Controle geométrico absoluto com escalonamento infinito sem perda de resolução.",
      "Diferenciação clara entre vértices agudos e arcos suaves através de nós Bézier.",
      "Geração limpa de pontos com número otimizado de agulhadas."
    ],
    commonErrors: [
      "❌ Colocar centenas de nós em uma reta simples, criando serrilhado mecânico e travamento de agulha.",
      "❌ Usar vetorização automática ('Auto-Digitize') com 1 clique em imagens de baixa qualidade, gerando milhares de nós caóticos e pontos deformados.",
      "❌ Esquecer de fechar o vetor em áreas de preenchimento, gerando erros de compilação na matriz."
    ],
    troubleshootingTips: [
      "A curva do círculo está cheia de 'bicos' e pontas tortas: abra o modo de edição de nós (tecla 'H' no Wilcom) e delete os nós excessivos, mantendo apenas 4 nós de curva nos pontos cardeais com alças suaves.",
      "O programa trava ao gerar os pontos de tatami: há cruzamento de linhas vetoriais sobre si mesmas (nó sobre nó); separe os vértices para que o perímetro seja fechado e plano.",
      "O contorno satim não acompanha a inclinação da curva: adicione linhas guias de ângulo de ponto (Stitch Angles) ao longo do traçado da curva."
    ],
    dicaArtrelados: "A regra de ouro da digitalização profissional: 'Menos é Mais'! Uma curva perfeita precisa de apenas 2 nós nas pontas com as alças de curvatura bem puxadas, em vez de 20 pontinhos picados. Quanto menos nós seu desenho tiver, mais rápido sua máquina vai bordar e mais liso vai ficar o brilho da linha!",
    voceSabia: "Pierre Bézier criou as famosas 'Curvas de Bézier' para desenhar as carrocerias aerodinâmicas dos carros da Renault nos anos 60; hoje, a fórmula matemática dele é usada em todos os programas gráficos do mundo, incluindo Adobe Illustrator, CorelDRAW e Wilcom!",
    practicalExercise: "No seu programa de bordado, importe o desenho de um círculo. Tente redesenhar o contorno usando apenas 4 cliques com o botão direito (nós curvos). Use as alças para ajustar a forma até ficar perfeitamente redonda e veja como os pontos gerados ficam limpos e perfeitos.",
    quickSummary: "Vetorização e Edição de Nós é a técnica de desenho e ajuste de curvas e vértices matemáticos que moldam a geometria perfeita dos objetos antes da geração dos pontos de bordado.",
    relatedTerms: ["Curvas de Bézier", "Nós Vetoriais (Nodes)", "Digitalização Manual", "Reshape Tool", "Ângulos de Ponto", "Wilcom"],
    tags: ["vetorizacao", "nos", "bezier", "reshape", "programacao", "wilcom", "softwares"]
  },
  {
    id: "viscose-rayon-thread-linha-raiom-viscose-seda",
    code: "V-063",
    letter: "V",
    term: "Viscose / Rayon Embroidery Thread — Linha de Raiom/Viscose (Fio Nobre de Brilho de Seda & Alta-Costura)",
    pronunciation: "vis-kôus rêi-on tréd — li-nha de rai-on vis-co-se",
    level: "Iniciante 🟢",
    category: "Fios & Linhas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês rayon (de ray, raio de luz, batizado em 1924 pelo brilho semelhante à seda natural) e do francês viscose (fibra celulósica regenerada inventada em 1891 por Cross, Bevan e Beadle).",
    summary: "Linha nobre de bordar produzida a partir de celulose vegetal regenerada que confere brilho acetinado incomparável, toque ultra-macio e caimento luxuoso em peças de alta-costura.",
    definition: "A Viscose / Rayon Embroidery Thread (Linha de Raiom / Fio de Viscose para Bordado / 100% Rayon Filament Yarn) é a linha de bordar consagrada historicamente pelo brilho suave e profundo semelhante ao da seda pura natural. Confeccionada a partir de filamentos contínuos de celulose purificada de madeira ou línter de algodão, a linha de viscose (espessura universal #40 / 120D/2) destaca-se pela excepcional flexibilidade, maleabilidade tátil e reflexão de luz difusa e elegante, sendo a escolha primordial de ateliês de luxo para bordados em vestidos de noiva, alfaiataria fina, lençóis de algodão egípcio e paramentos eclesiásticos.",
    technicalDetails: "Possui menor tenacidade à tração e elasticidade quando comparada ao poliéster industrial (o poliéster estica até 20% antes de romper, enquanto o raiom estica cerca de 12% a 15%). Em estado úmido ou molhado, a viscose perde até 30% de sua resistência mecânica temporariamente. Exige passagem de linha com discos tensores mais frouxos (tensão superior de 100 gf a 120 gf, contra 130 gf–150 gf do poliéster) e lubrificação têxtil adequada para operar em altas rotações sem desfiamento.",
    beginnerExplanation: "É a linha mais linda, macia e brilhante do mundo do bordado! Ela é feita de fibras vegetais naturais e tem um brilho elegante de seda de verdade, sem aquele aspecto de plástico. É a linha perfeita para bordar vestidos de festa, enxovais nobres e peças de bebê que precisam de um toque super macio!",
    howItWorks: [
      "1. A linha de viscose é instalada no cabeçote da máquina com passagem suave pelas guias cerâmicas.",
      "2. Reduz-se ligeiramente a tensão da linha superior para evitar estiramento excessivo da fibra celulósica.",
      "3. Utiliza-se agulha Schmetz Embroidery 75/11 com olho polido e arredondado para evitar atrito.",
      "4. A máquina costura a matriz com velocidade de 750 a 850 PPM.",
      "5. A linha deita com maciez absoluta sobre o tecido sem criar rigidez ou efeito de 'armadura'.",
      "6. A luz ambiente reflete na superfície acetinada da viscose, criando degradês luminosos e ricos.",
      "7. A peça bordada mantém toque sedoso e caimento fluido impecável."
    ],
    applications: [
      "Vestidos de noiva, alta-costura, véus de renda e corpetes de gala.",
      "Enxovais de bebê de alto luxo em percal 400 fios, piquet e cambraia de linho.",
      "Camisaria sob medida, monogramas em punhos de camisas sociais e gravatas de seda.",
      "Paramentos religiosos, estolas sacerdotais e toalhas de altar com acabamento nobre."
    ],
    characteristics: [
      "Brilho natural acetinado profundo e incomparável que não parece plástico.",
      "Extrema maciez ao toque, ideal para peles sensíveis de recém-nascidos.",
      "Excelente absorção de corantes, resultando em mais de 400 tonalidades ricas e fiéis."
    ],
    commonErrors: [
      "❌ Lavar bordados de raiom com alvejantes à base de cloro ou água sanitária, dissolvendo e desbotando a fibra celulósica.",
      "❌ Usar a mesma tensão apertada de linha de poliéster, rompendo a linha de viscose por excesso de tração.",
      "❌ Guardar cones de raiom em locais com muita umidade, enfraquecendo a resistência das fibras antes do bordado."
    ],
    troubleshootingTips: [
      "Linha de viscose quebrando ou desfiando na agulha: a tensão superior está muito alta ou a agulha está com rebarba no olho; afrouxe o tensor e troque por uma agulha nova Schmetz Embroidery.",
      "Bordado de viscose desbotou na lavagem: oriente o cliente a nunca usar alvejante com cloro; a lavagem deve ser feita com sabão neutro para roupas finas e secagem à sombra.",
      "A linha fica pulando do carretel no porta-cones: utilize uma redinha elástica de proteção (Spool Net) envolvendo o cone para controlar o desenrolamento suave."
    ],
    dicaArtrelados: "Para criar peças de alto padrão que encantam clientes exigentes: tenha no ateliê uma cartela de cores nobres em linha de Viscose/Raiom (como tons de dourado champagne, marfim e prata velho). Quando o cliente pegar o bordado na mão e sentir aquela maciez sedosa inacreditável, ele nunca mais vai querer bordado comum!",
    voceSabia: "A viscose foi a primeira fibra têxtil sintética/regenerada criada pela humanidade no final do século XIX, desenvolvida justamente para ser uma alternativa acessível e deslumbrante à caríssima seda natural dos bichos-da-seda!",
    practicalExercise: "Pegue um cone de linha de poliéster e um cone de linha de viscose/raiom da mesma cor. Borde duas amostras idênticas lado a lado em um tecido nobre. Coloque a mão sobre os dois bordados com os olhos fechados e sinta a diferença de maciez; depois observe à luz do sol o brilho sofisticado da viscose.",
    quickSummary: "Linha nobre de celulose regenerada com brilho acetinado de seda pura e toque ultra-macio, ideal para moda noiva, alta-costura e enxovais de alto luxo.",
    relatedTerms: ["Raiom (Rayon)", "Linha de Poliéster #40", "Brilho Acetinado", "Tensão de Fio", "Alta-Costura", "Madeira Classic"],
    tags: ["viscose", "raiom", "rayon", "fios", "linhas", "brilho", "altacostura", "luxo"]
  },
  {
    id: "variable-stitch-length-comprimento-variavel-ponto",
    code: "V-064",
    letter: "V",
    term: "Variable Stitch Length — Comprimento Variável de Ponto & Filtragem Inteligente de Agulhadas",
    pronunciation: "vé-ri-a-bol stitsh lèngth — com-pri-men-tu va-ri-a-vel de pon-to",
    level: "Avançado 🔴",
    category: "Pontos & Estruturas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim variabilis (que pode mudar) e do inglês stitch length (extensão métrica linear de cada penetração de agulha). Algoritmo de interpolação em sistemas CAD/CAM.",
    summary: "Algoritmo inteligente de software que ajusta dinamicamente a distância entre penetrações de agulha em curvas fechadas e cantos para evitar furos e quebras de agulha.",
    definition: "O Variable Stitch Length (Comprimento Variável de Ponto / Filtragem Dinâmica de Agulhadas / Smart Stitch Length Modulation / Short Stitch Optimization) é o algoritmo matemático embutido nos modernos softwares de digitalização de bordado que altera automaticamente o comprimento linear das agulhadas conforme a geometria do objeto. Em retas longas, o sistema aplica o passo máximo programado (ex.: 2,5 mm a 3,5 mm); ao entrar em curvas apertadas ou ângulos agudos, reduz gradualmente o passo para 1,2 mm–1,8 mm, garantindo contornos suaves sem truncamentos e ativando a filtragem de pontos curtos para eliminar agulhadas microscópicas inferiores a 0,8 mm.",
    technicalDetails: "Em curvas fechadas de ponto corrido ou contornos satim em cantos de 90° (Corner Stitching), se o comprimento do ponto fosse mantido constante e rígido, a agulha cortaria o tecido em linhas retas formando polígonos feios ou empilharia dezenas de penetrações no mesmo nó central. O algoritmo de comprimento variável modula o deslocamento dos eixos X e Y em tempo real no arquivo de máquina, distribuindo os nós de penetração em formato de leque e reduzindo a tensão mecânica na barra da agulha em até 40%.",
    beginnerExplanation: "É uma inteligência do programa de bordado que faz a máquina dar passos mais compridos quando está costurando em linha reta e dar passinhos mais curtinhos e espertos quando está fazendo uma curva fechada. Isso faz as curvas ficarem super redondinhas sem furar nem rasgar o pano!",
    howItWorks: [
      "1. O programador desenha uma linha de contorno com curvas suaves e curvas fechadas.",
      "2. Habilita a função de 'Comprimento Variável de Ponto' (Variable Run Length) nas propriedades.",
      "3. Define o comprimento nominal (2,5 mm) e o comprimento mínimo de curva (1,2 mm).",
      "4. O software calcula o raio de curvatura em cada nó da trajetória geométrica.",
      "5. Reduz o passo automaticamente nos trechos sinuosos e expande nos trechos retos.",
      "6. Aplica o filtro de pontos curtos (Short Stitch Filter) eliminando agulhadas menores que 0,5 mm.",
      "7. A máquina costura em alta velocidade sem vibrações bruscas e sem picotar o tecido."
    ],
    applications: [
      "Bordados de traços finos (Line Art), contornos de ilustrações e rostos em ponto corrido.",
      "Bordados tradicionais no estilo Redwork, Bluework e ponto haste eletrônico.",
      "Cantos de colunas de satim em letras góticas e arabescos decorativos complexos.",
      "Subpontos de contorno (Edge Run) em logotipos detalhados."
    ],
    characteristics: [
      "Curvaturas fluidas e perfeitas sem aspecto serrilhado ou quebrado.",
      "Proteção total da integridade da fibra têxtil contra efeito serra.",
      "Redução drástica do ruído mecânico do pantógrafo em curvas rápidas."
    ],
    commonErrors: [
      "❌ Manter comprimento fixo longo (4,0 mm) em curvas pequenas de 5 mm de raio, transformando círculos em octógonos tortos.",
      "❌ Desativar o filtro de pontos curtos em curvas complexas, acumulando centenas de nós que travam a lançadeira.",
      "❌ Usar comprimento de ponto curto demais (0,8 mm) em tecidos frágeis, cortando o tecido como papel picotado."
    ],
    troubleshootingTips: [
      "O círculo ou letra bordada em ponto corrido ficou toda cheia de retas e pontas: ative o 'Comprimento Variável de Ponto' no software e diminua o passo mínimo em curvas para 1,5 mm.",
      "A máquina faz um barulho seco de metralhadora e rompe a linha em cantos agudos: o software está gerando pontos empilhados menores que 0,4 mm; ative o filtro de eliminação de pontos curtos (Purge Short Stitches).",
      "O contorno rasgou o tecido ao longo da linha da costura: aumente o comprimento de ponto em 0,5 mm e diminua a tensão da linha superior."
    ],
    dicaArtrelados: "Ao criar matrizes de ponto contorno ou desenhos no estilo 'desenho à mão': ative sempre a opção de Comprimento Variável no Wilcom ou Embird com limite entre 1,5 mm e 3,0 mm. O bordado vai deslizar na máquina como uma pluma e as curvas vão parecer desenhadas a nanquim!",
    voceSabia: "Os primeiros algoritmos de interpolação de pontos curtos em curvas foram desenvolvidos por engenheiros matemáticos da Tajima no Japão em 1986 para permitir que as máquinas pudessem bordar contornos automotivos em couro sem rasgar as bordas dos bancos!",
    practicalExercise: "No seu software, desenhe uma linha em formato de 'S' bem sinuosa com comprimento de ponto fixo em 4,0 mm e gere outra linha idêntica com Comprimento Variável entre 1,5 mm e 3,0 mm. Observe no simulador 3D como a segunda linha é infinitamente mais curva, suave e natural.",
    quickSummary: "Variable Stitch Length é o algoritmo de software que adapta o comprimento das agulhadas em curvas e cantos para assegurar trajetórias suaves sem picotar o tecido nem quebrar agulhas.",
    relatedTerms: ["Ponto Corrido (Run Stitch)", "Pontos Curtos (Short Stitches)", "Curvas de Bézier", "Redwork", "Filtragem de Pontos"],
    tags: ["pontos", "comprimento", "variavel", "curvas", "algoritmo", "programacao", "wilcom"]
  },
  {
    id: "vacuum-table-holding-fixture-mesa-succao-vacuo",
    code: "V-065",
    letter: "V",
    term: "Vacuum Table & Holding Fixture — Mesa de Sucção a Vácuo & Fixação Industrial sem Bastidor",
    pronunciation: "vé-kium têi-bol end hôul-ding fiks-tshur — me-sa de suc-são a va-cuo",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do latim vacuus (vazio, desprovido de ar). Sistema industrial de retenção pneumática por pressão negativa atmosférica adaptado ao bordado têxtil de grande formato.",
    summary: "Bancada técnica industrial com microperfurações e bomba de sucção a vácuo que fixa materiais rígidos, couros e grandes painéis no pantógrafo sem marcas de bastidor.",
    definition: "A Vacuum Table & Holding Fixture (Mesa de Fixação por Sucção a Vácuo / Platina Pneumática de Retenção / Vacuum Hold-Down Embroidery Pallet) é um dispositivo mecânico e pneumático de alta tecnologia acoplado ao pantógrafo de máquinas de bordar industriais de grande porte (como ZSK, Tajima e Barudan industriais). Consiste em uma mesa plana de alumínio naval microporoso ou perfurado conectada a uma bomba de vácuo de alto fluxo. Ao posicionar tecidos grossos, couros legítimos, feltros de emblemas ou painéis automotivos sobre a mesa, o vácuo exerce uma pressão descendente perfeitamente uniforme de até 80 kPa, mantendo o material 100% esticado e imóvel sem necessidade de aros ou pinças de bastidor convencionais.",
    technicalDetails: "Elimina completamente o defeito de 'Hoop Burn' (marcas brilhantes ou amassados indeléveis causados pela pressão mecânica do aro de plástico sobre couros nobres, veludos ou tecidos técnicos). Permite a substituição instantânea de peças prontas em menos de 3 segundos no chão de fábrica e viabiliza a produção em série contínua de emblemas e patches militares cortados a laser sem desperdício de entretelas periféricas.",
    beginnerExplanation: "É uma mesa especial cheia de furinhos microscópicos que 'chupa' e gruda o tecido ou o couro firme na máquina usando o poder do vácuo! Em vez de ter que apertar o tecido num aro duro que amassa e estraga peças caras de couro, você só encosta o material na mesa e a sucção segura tudo retinho como mágica!",
    howItWorks: [
      "1. A mesa de vácuo é montada e travada nos braços de suporte do pantógrafo da máquina de bordar.",
      "2. O operador aciona o pedal pneumático ou botão liga/desliga da bomba de sucção de vácuo.",
      "3. Posiciona a placa de couro, feltro para patches ou painel de banco automotivo sobre a área útil.",
      "4. A pressão atmosférica negativa puxa o material contra a mesa, deixando-o perfeitamente plano e rígido.",
      "5. A máquina de bordar executa o bordado em alta velocidade (1.000 PPM) com zero deflexão de tecido.",
      "6. Ao finalizar os pontos, o operador desliga o vácuo com o pedal em 1 segundo.",
      "7. A peça pronta é retirada limpa, sem marcas de aro e pronta para o acabamento.",
      "8. O próximo painel é posicionado instantaneamente, maximizando a produtividade fabril."
    ],
    applications: [
      "Bordados em painéis de couro para tapeçaria automotiva premium e bancos de aeronaves.",
      "Produção industrial de alta escala de patches, insígnias militares e emblemas termocolantes.",
      "Bordados em artigos de couro legítimo de luxo (bolsas, carteiras, sapatos e cintos).",
      "Bordados contínuos em tecidos nobres e aveludados que não toleram aros mecânicos."
    ],
    characteristics: [
      "Fixação perfeitamente homogênea em 100% da área útil de trabalho.",
      "Zero marcas de bastidor (eliminação absoluta de 'Hoop Burn').",
      "Agilidade de carga e descarga de materiais em menos de 3 segundos por ciclo."
    ],
    commonErrors: [
      "❌ Deixar áreas abertas da mesa perfurada sem mascaramento, perdendo a força de sucção por vazamento de ar periférico.",
      "❌ Tentar fixar tecidos de malha muito porosa sem película de vedação, permitindo a passagem do fluxo de ar e perdendo a retenção.",
      "❌ Não limpar os filtros da bomba de vácuo periodicamente, permitindo a entrada de fiapos e poeira têxtil."
    ],
    troubleshootingTips: [
      "O couro está se movendo durante o bordado: cubra as áreas vazias da mesa ao redor da peça com uma folha plástica flexível de máscara para concentrar 100% do vácuo sob a peça.",
      "A bomba de vácuo aquece excessivamente: limpe o elemento filtrante de entrada de ar que pode estar entupido com penugem têxtil.",
      "A agulha está quebrando ao encostar na mesa: ajuste a altura do calcador e a descida máxima da barra de agulha para manter folga de segurança de 0,5 mm da superfície de alumínio."
    ],
    dicaArtrelados: "Se no seu ateliê você faz muitos patches em feltro ou couro sintético: enquanto você não tiver uma mesa de vácuo industrial, utilize a técnica do 'Bastidor de Janela com Entretela Autoadesiva Hidrossolúvel ou Fita Dupla Face'! Você prende apenas a entretela no bastidor e cola o couro por cima, bordando sem deixar nenhuma marca de aro!",
    voceSabia: "As mesas de vácuo foram adaptadas das mesas de corte CNC da indústria aeroespacial na Alemanha nos anos 90, sendo hoje o padrão obrigatório nas linhas de produção da Ferrari, Porsche e Boeing para bordar seus luxuosos logotipos em couro!",
    practicalExercise: "Pesquise como é feito o bordado no encosto de cabeça de um carro de luxo. Observe como o couro não possui nenhum vinco ou amassado circular ao redor do emblema, resultado direto do uso da fixação por mesa plana a vácuo.",
    quickSummary: "Mesa técnica com sistema pneumático de sucção a vácuo que mantém couros, painéis e materiais nobres perfeitamente firmes no pantógrafo sem necessidade de bastidores mecânicos.",
    relatedTerms: ["Hoop Burn", "Fixação sem Bastidor", "Tapeçaria Automotiva", "Bordado em Couro", "Pantógrafo Industrial", "Patches"],
    tags: ["vacuutable", "mesadevacuo", "fixacao", "couro", "patches", "maquinasindustriais", "automotivo"]
  },
  {
    id: "vertical-vs-horizontal-spool-pin-pino-porta-carretel",
    code: "V-066",
    letter: "V",
    term: "Vertical vs. Horizontal Spool Pin — Pino Porta-Carretel Vertical vs. Horizontal (Desenrolamento Têxtil & Controle de Torção)",
    pronunciation: "vér-ti-kol vér-sos ho-ri-zôn-tol spúul pin — pi-no por-ta car-re-tel",
    level: "Iniciante 🟢",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim verticalis (a prumo, em linha vertical) e horizontalis (plano, paralelo ao horizonte) e do inglês spool pin (haste de suporte de carretel/cone de linha).",
    summary: "Configuração mecânica da posição do suporte de linhas da máquina que determina se o fio se desenrola pela lateral do carretel (giratório) ou pela ponta do cone (estático), prevenindo torções e quebras.",
    definition: "O Vertical vs. Horizontal Spool Pin (Pino Porta-Carretel Vertical vs. Horizontal / Sistema de Alimentação e Desenrolamento de Fios / Cross-Wound vs. Stacked-Wound Delivery System) é o conjunto de hastes mecânicas de suporte e guias de desbobinamento instaladas nas máquinas de bordar. A orientação do pino deve obrigatoriamente respeitar a engenharia do enrolamento da embalagem da linha: carretéis com enrolamento paralelo reto (Stacked/Parallel-Wound Spools) devem ser posicionados no pino horizontal com disco prendedor para girar livremente; enquanto cones industriais com enrolamento cruzado em 'X' (Cross-Wound Cones) devem ser posicionados no suporte vertical estático onde a linha é puxada para cima pela ponta do cone.",
    technicalDetails: "Quando um carretel de enrolamento cruzado (cone) é colocado incorretamente em um pino giratório horizontal, o fio sofre uma torção mecânica cumulativa de 360° a cada volta puxada (Twist Accumulation). Em 1.000 pontos, isso adiciona centenas de voltas parasitas na torção do fio (Z-Twist), fazendo a linha enrolar sobre si mesma na descida para a agulha, formando nós conhecidos como 'Pigtails' (rabos de porco) que travam instantaneamente nas guias e partem a linha.",
    beginnerExplanation: "É o suporte onde você encaixa o seu carretel ou cone de linha na máquina! Cones grandes de bordado (aqueles com formato de cone de trânsito) precisam ficar sempre em pé no pino vertical para a linha subir direto para cima; já carretéis pequenos que têm linhas enroladas retinhas precisam ficar deitados no pino horizontal. Usar a posição certa evita que a linha dê nós e arrebente toda hora!",
    howItWorks: [
      "1. O bordador identifica o tipo de bobinamento do cone ou carretel de linha.",
      "2. Cones industriais de 1.000 m a 5.000 m (enrolamento cruzado em X) são colocados na base vertical da torre de fios.",
      "3. A linha sai verticalmente pela ponta superior do cone e passa pelo guia passa-fios suspenso diretamente acima.",
      "4. Carretéis pequenos residenciais (enrolamento reto) são encaixados na haste horizontal com o disco prendedor correspondente ao diâmetro do carretel.",
      "5. A linha desenrola suavemente pela lateral sem fricção excessiva e sem girar o cone no próprio eixo.",
      "6. A linha entra nos discos de pré-tensão mantendo sua torção original equilibrada de fábrica.",
      "7. A máquina borda de forma fluida sem quebras, nós de laçada ou interrupções de produção."
    ],
    applications: [
      "Alimentação correta de cones industriais de poliéster, raiom e fios metalizados em máquinas domésticas e industriais.",
      "Prevenção de quebras sistemáticas de linha em máquinas compactas de 1 agulha (Brother, Janome, Bernina).",
      "Adaptação de torres externas de suporte de cones para máquinas que só possuem pinos embutidos.",
      "Estabilização da tensão de linha superior durante longas jornadas de bordado."
    ],
    characteristics: [
      "Compatibilidade com todos os formatos mundiais de carretéis, tubos e cones.",
      "Eliminação do acúmulo de torção e nós de desbobinamento.",
      "Fluxo constante de linha com tensão homogênea do início ao fim do cone."
    ],
    commonErrors: [
      "❌ Colocar cone grande industrial de 4.000 m em pé no pino deitado horizontal, travando o cone e arrebentando a linha.",
      "❌ Colocar carretel pequeno deitado sem o disco prendedor (tampa), fazendo a linha enroscar na fenda plástica do carretel.",
      "❌ Não alinhar o guia superior da torre exatamente sobre o centro do cone vertical, fazendo a linha raspar na borda plástica do cone."
    ],
    troubleshootingTips: [
      "A linha fica dando laçadas e nós em espiral ('rabo de porco') antes de entrar na agulha: a linha está sofrendo torção no desenrolamento; certifique-se de que cones de enrolamento cruzado estejam na vertical puxando o fio para cima.",
      "A linha agarra e quebra a cada 100 pontos em carretel pequeno: o carretel tem uma fenda de trava de fio na borda plástica que está enroscando na linha; vire o carretel com a fenda para o lado de dentro ou use um suporte vertical externo.",
      "O cone tomba ou vibra na máquina doméstica: use uma base externa porta-cones de mesa pesada posicionada logo atrás da máquina."
    ],
    dicaArtrelados: "Se você tem uma máquina doméstica de bordar que só tem suporte para carretel pequeno deitado: compre uma 'Torre Porta-Cones Externa de Mesa' (custa baratinho!). Com ela você pode usar cones industriais grandes e econômicos de 4.000 metros de linha em pé. A linha vai subir soltinha e sua máquina nunca mais vai quebrar linha por peso de cone!",
    voceSabia: "As linhas industriais de bordado são fabricadas com uma torção específica chamada 'Torção Z' (duas ou três pontas torcidas no sentido anti-horário), projetada milimetricamente para se desenrolar perfeitamente quando puxada pelo topo de um cone vertical em alta velocidade!",
    practicalExercise: "Examine os cones e carretéis do seu ateliê. Veja como nos cones cônicos os fios se cruzam em formato de 'X' e nos carretéis retos os fios estão enrolados lado a lado em paralelo. Treine passar cada um na posição correta (vertical para cone em X, horizontal com tampa para carretel reto).",
    quickSummary: "Pino Porta-Carretel Vertical vs. Horizontal é a correta disposição mecânica dos suportes de linha para garantir que cones e carretéis se desenrolem sem torções, atritos ou quebras de fio.",
    relatedTerms: ["Torção Z (Z-Twist)", "Torre de Linhas (Thread Stand)", "Enrolamento Cruzado (Cross-Wound)", "Disco Prendedor de Carretel", "Passagem de Linha"],
    tags: ["portacarretel", "spoolpin", "cone", "torcao", "passagemdelinha", "manutencao", "componentes"]
  }
];


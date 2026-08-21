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
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_V13: Verbete[] = [
  {
    id: "vetorizacao-automatica-e-tracagem-de-bitmap-auto-digitizing",
    code: "V-067",
    letter: "V",
    term: "Vetorização Automática e Traçagem de Bitmap (Auto-Digitizing & Vector Tracing Algorithms)",
    pronunciation: "ve-to-ri-za-são au-to-má-ti-ca e tra-sa-gem de bi-ti-mé-pi",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim vector (aquele que conduz) e do inglês bitmap tracing. Algoritmos de conversão matricial para vetorial.",
    summary: "Conversão algorítmica de imagens em pixels (JPG/PNG) para objetos vetoriais com geração automática de pontos de bordado no software.",
    definition: "A Vetorização Automática e Traçagem de Bitmap (Auto-Digitizing / Image-to-Stitch Vectorization / Raster-to-Object Conversion) é o conjunto de ferramentas e algoritmos computacionais integrados em softwares de bordado (como Wilcom Auto-Digitizing, CorelDRAW PowerTRACE, Pe-Design Auto-Punch e Embird Sfumato) que analisam matrizes de pixels RGB, detectam bordas de contraste e tentam converter automaticamente áreas coloridas em contornos vetoriais e blocos de pontos (Tatami e Satin). Embora útil para rascunhos rápidos ou silhuetas geométricas simples de alto contraste, a vetorização automática bruta sem pós-edição manual costuma gerar sequenciamento caótico de cores, excesso de pontos de salto, falta de compensação de encolhimento e ângulos de ponto desordenados.",
    technicalDetails: "O algoritmo processa a imagem através de filtros de limiarização (Thresholding) e redução de ruído Gaussiano, segmentando paletas indexadas de 8 a 16 cores. A interpolação de pontos gerada pelo Auto-Punch costuma aplicar densidades padronizadas (0,40 mm) e subpontos genéricos sem considerar a elasticidade do tecido, gerando arquivos pesados que exigem limpeza manual de nós e refinamento de trajetórias (Branching).",
    beginnerExplanation: "É a ferramenta do programa que promete transformar uma foto ou desenho da internet em bordado com um único clique do mouse. Parece mágica, mas quase sempre precisa de vários consertos manuais: o programa não sabe qual parte bordar primeiro e pode criar nós, buracos e repuxar o tecido se você não arrumar o desenho depois.",
    howItWorks: [
      "1. A usuária importa um arquivo de imagem (JPEG ou PNG) de boa resolução para a tela do software.",
      "2. Aciona a ferramenta de vetorização automática (Auto-Digitizing / Traçagem Rápida).",
      "3. O software reduz o número de cores da imagem agrupando tons similares.",
      "4. O programa gera curvas vetoriais fechadas ao redor de cada mancha de cor.",
      "5. Preenche as formas automaticamente com pontos de preenchimento (Tatami) e contornos em zigue-zague.",
      "6. A programadora abre o sequenciador, organiza as ordens de costura, aplica compensação de repuxo e corrige os ângulos de inclinação dos pontos."
    ],
    applications: [
      "Digitalização rápida de silhuetas monocromáticas e logotipos vetoriais simples de alta definição.",
      "Geração de matrizes rascunho para testes de proporção e dimensionamento em tela.",
      "Vetorização de assinaturas e desenhos infantis escaneados com linhas pretas bem nítidas.",
      "Agilização do processo de decalcagem de contornos complexos para posterior edição manual."
    ],
    characteristics: [
      "Velocidade instantânea de geração de blocos de pontos a partir de imagens limpas.",
      "Necessita obrigatoriamente de revisão técnica e limpeza de saltos pelo programador.",
      "Melhor desempenho quando utilizada com imagens em formato vetorial nativo (SVG, EPS, AI)."
    ],
    commonErrors: [
      "❌ Importar fotos com sombras realistas, gradientes ou baixa resolução e mandar bordar direto na máquina.",
      "❌ Não aplicar compensação de encolhimento manual, fazendo os contornos ficarem desencaixados do preenchimento.",
      "❌ Deixar centenas de micro-objetos de 1 mm criados pelo ruído da imagem que quebram a agulha."
    ],
    troubleshootingTips: [
      "O bordado automático gerou dezenas de trocas de linha repetidas da mesma cor: use a ferramenta 'Otimizar Ordem de Cores' (Color Sequence Optimizer) no software.",
      "As letras ficaram tortas e cheias de dentes de serra: refaça as letras utilizando a ferramenta de digitação de texto com fontes nativas de bordado.",
      "A máquina deu muitos cortes e saltos de linha: delete pequenos pontinhos isolados e una os objetos da mesma cor com a ferramenta de ramificação (Branching)."
    ],
    dicaArtrelados: "A vetorização automática é uma ótima ajudante para rascunhar o desenho, mas o toque humano é insubstituível! Sempre gaste 5 minutinhos revisando a ordem das cores e ajustando a compensação de repuxo no computador antes de colocar na máquina: o seu bordado vai ficar com padrão profissional de loja de luxo!",
    voceSabia: "Na década de 1980, os primeiros computadores com programas de bordado levavam mais de 30 minutos para processar a conversão automática de um único logotipo simples que hoje o seu computador calcula em meio segundo!",
    practicalExercise: "Importe uma maçã vermelha simples no seu software de bordado. Aplique a ferramenta 'Auto-Digitize'. Agora entre na lista de objetos, observe a ordem dos pontos gerados e reorganize manualmente para que o fundo borde primeiro e o cabinho verde borde por último.",
    quickSummary: "Vetorização Automática é a conversão algorítmica de imagens em pontos de bordado pelo software, ideal como base de trabalho que ganha perfeição com os ajustes manuais do programador.",
    relatedTerms: ["Digitalização Manual (Punching)", "Compensação de Encolhimento", "Ramificação (Branching)", "Imagens em Bitmap (JPG/PNG)", "Vetor (SVG/EPS)"],
    tags: ["vetorizacao", "autodigitizing", "bitmap", "programacao", "wilcom", "embird", "softwares"]
  },
  {
    id: "viscosidade-cinematica-e-reologia-de-oleos-texteis-iso-vg",
    code: "V-068",
    letter: "V",
    term: "Viscosidade Cinemática e Reologia de Óleos Minerais Têxteis (Lubricant Viscosity & ISO VG Standards)",
    pronunciation: "vis-co-zi-da-de ci-ne-má-ti-ca e re-o-lo-gi-a de ó-le-os têx-teis",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim viscosus (viscoso, pegajoso) e do grego rheos (fluxo). Normas internacionais de lubrificação ISO 3448.",
    summary: "Classificação técnica da fluidez do óleo lubrificante de máquina de bordar (graus ISO VG 10 a VG 22) para proteger lançadeiras e engrenagens.",
    definition: "A Viscosidade Cinemática e Reologia de Óleos Minerais Têxteis (Textile Machine Lubrication Rheology & ISO Viscosity Grades) compreende a análise da resistência ao escoamento e formação de película lubrificante hidrodinâmica dos fluidos minerais altamente refinados utilizados em máquinas de bordar computadorizadas. Regulamentada internacionalmente pela norma ISO 3448, a viscosidade é medida em centistokes (cSt ou mm²/s a 40 °C). Máquinas de bordar exigem óleos minerais brancos de pureza medicinal (USP / White Mineral Oil) de baixíssima viscosidade (ISO VG 10 a ISO VG 22), formulados para fluir instantaneamente entre a pista e a cesta da lançadeira a 1.000 RPM sem queimar, sem espirrar gotículas na linha e sem oxidar com o pó têxtil.",
    technicalDetails: "A viscosidade ideal para a pista da lançadeira rotativa oscila entre 10 e 15 cSt a 40 °C (grau ISO VG 10/15). Óleos automotivos ou de engrenagens (ISO VG 68 ou superior) geram arrasto viscoso excessivo, superaquecem o cabeçote por atrito fluido e criam uma borra escura pegajosa (Varnish/Sludge) ao se misturar com os fiapos de linha e pó de entretela.",
    beginnerExplanation: "É a finura e transparência do oléozinho de máquina! Máquina de bordar precisa de um óleo bem fininho, transparente como água e sem cheiro. Se você usar óleo grosso de carro ou óleo amarelado velho, ele vira uma cola preta cheia de poeira dentro da lançadeira e espirra manchas escuras no tecido do bordado.",
    howItWorks: [
      "1. A bordadeira aplica 1 única gota de óleo mineral branco puro grau ISO VG 10/15 na pista da lançadeira.",
      "2. Ao ligar a máquina a 800 PPM, a rotação rápida espalha o óleo por capilaridade.",
      "3. Forma-se uma película microscópica com espessura de 1 a 3 micrômetros entre os metais.",
      "4. O atrito direto metal-com-metal é reduzido a quase zero, dissipando o calor da agulha.",
      "5. A fina película não respinga para cima nem mancha a linha de poliéster.",
      "6. A lançadeira gira silenciosa, macia e sem folgas mecânicas por centenas de milhares de pontos."
    ],
    applications: [
      "Lubrificação diária da pista da lançadeira rotativa e oscilante de máquinas industriais e domésticas.",
      "Manutenção de barras de agulha, bielas e mancais do cabeçote mecânico.",
      "Sistemas automáticos de lubrificação centralizada e bombas de recirculação de óleo.",
      "Prevenção de desgaste prematuro e travamento de eixos em altas velocidades."
    ],
    characteristics: [
      "Líquido 100% transparente, incolor, inodoro e de fácil lavabilidade.",
      "Baixa tensão superficial que penetra nas frestas mais estreitas do mecanismo.",
      "Resistência à oxidação térmica sem formar crostas de verniz ressecado."
    ],
    commonErrors: [
      "❌ Usar óleo automotivo de motor (20W-50) ou óleo vegetal de cozinha (soja/oliva) na lançadeira.",
      "❌ Usar desengripantes tipo spray aerossol em substituição ao óleo lubrificante (o aerossol evapora e resseca as engrenagens).",
      "❌ Encharcar a lançadeira com dezenas de gotas de óleo, espirrando manchas pretas na primeira peça bordada."
    ],
    troubleshootingTips: [
      "A máquina está ruidosa e a lançadeira esquenta na mão: falta de lubrificação; limpe os fiapos com pincel e coloque 1 gota de óleo mineral fino.",
      "A linha inferior sai do bordado com manchas pretas de óleo: a lançadeira foi lubrificada em excesso; passe um papel toalha para secar o excesso e borde um retalho de teste.",
      "A lançadeira travou dura: acúmulo de óleo velho ressecado com linha presa; desmonte a caixa de bobina, limpe com álcool isopropílico e relubrifique com óleo novo."
    ],
    dicaArtrelados: "A regra de ouro da lubrificação: 'Menos é Mais e Sempre'! Uma gotinha pequenininha de óleo transparente todo dia na lançadeira vale muito mais do que encharcar a máquina uma vez por mês! Use sempre óleo mineral branquinho próprio para máquina de costura e bordado!",
    voceSabia: "Os óleos minerais de alta pureza (grau USP) usados nas máquinas de bordar são do mesmo grau farmacêutico que compõe loções de bebês e batons de maquiagem, garantindo que não sejam tóxicos e possam ser facilmente removidos do tecido com água morna e sabão neutro!",
    practicalExercise: "Pingue uma gotinha de óleo próprio de máquina em uma tampa plástica e incline-a: veja como ele escorre rápido e transparente. Agora compare com uma gota de óleo de cozinha que escorre pesada e pegajosa. Compreenda a importância da baixa viscosidade.",
    quickSummary: "Viscosidade de Óleos Têxteis é o grau de fluidez do óleo mineral fino (ISO VG 10/22) essencial para proteger a lançadeira sem manchar linhas ou reter sujeira.",
    relatedTerms: ["Lançadeira Rotativa", "Óleo Mineral Branco (USP)", "Lubrificação Diária", "Graxa Sintética", "Manutenção Preventiva"],
    tags: ["viscosidade", "oleotextil", "lubrificacao", "lancadeira", "manutencao", "mecanica", "isovg"]
  },
  {
    id: "veludo-e-tecidos-de-pelo-alto-pile-fabric-embroidery",
    code: "V-069",
    letter: "V",
    term: "Veludo e Tecidos de Pelo Alto no Bordado (Velvet, Corduroy & High-Pile Fabric Embroidery)",
    pronunciation: "ve-lu-do e te-si-dos de pe-lo al-to no bor-da-do",
    level: "Iniciante 🟢",
    category: "Aplicações Especiais",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim villutus (coberto de pelos) e do francês velours. Tecidos nobres com fios verticais cortados ou laçados.",
    summary: "Técnicas de bordado em tecidos felpudos e aveludados com uso obrigatório de plástico hidrossolúvel no topo e fixação sem marcas de aro.",
    definition: "O Bordado em Veludo e Tecidos de Pelo Alto (Velvet & Cut-Pile Fabric Embroidery Techniques / Crushed Velvet & Chenille Substrates) é o conjunto de métodos operacionais e de programação exigidos para bordar materiais nobres cuja superfície é composta por felpas verticais densas (veludo alemão, veludo molhado, cotelê, pelúcia e plush). Se bordados de forma convencional, os pontos afundam e somem entre as felpas, e a pressão mecânica do bastidor esmaga as fibras para sempre (Hoop Burn irreversível). O protocolo correto exige o uso de filme hidrossolúvel (Solvy) sobre a peça, ponto de base de tatami leve (Knockdown Stitch) e fixação flutuante no bastidor.",
    technicalDetails: "O veludo possui sentido direcional de pelos (Nap / Grain). O bordado deve ser orientado a favor do caimento dos fios. A densidade de ponto cheio deve ser ajustada para 0,42 mm a 0,45 mm com underlay do tipo Edge Run + Tatami leve de retenção. Para evitar o esmagamento das felpas, utiliza-se bastidores magnéticos ou a técnica de flutuação com entretela autoadesiva.",
    beginnerExplanation: "Bordar em veludo exige dois segredos especiais: 1º colocar um plástico transparente hidrossolúvel por cima para o bordado não afundar nos pelinhos; 2º nunca apertar o veludo no bastidor comum de parafuso para não deixar aquela marca redonda amassada que não sai nunca mais (use bastidor magnético ou cole o tecido na entretela com fita dupla-face ou cola spray).",
    howItWorks: [
      "1. A bordadeira prende apenas a entretela rasgável ou recortável firme no bastidor.",
      "2. Aplica uma camada leve de spray temporário reposicionável sobre a entretela presa.",
      "3. Acomoda a peça de veludo por cima da entretela delicadamente (técnica flutuante), sem prender no aro.",
      "4. Posiciona uma folha de plástico hidrossolúvel (filme transparente) sobre o veludo.",
      "5. A máquina borda um alinhavo perimetral (Basting Box) prendendo o plástico e o tecido.",
      "6. Borda a matriz por cima do plástico: os pontos apoiam-se no filme sem afundar no pelo.",
      "7. Rasga-se o excesso de plástico e borrifa-se água morna com algodão para dissolver os resquícios restantes."
    ],
    applications: [
      "Almofadas decorativas e mantas de sofá em veludo alemão e suede.",
      "Vestuário nobre de inverno, sobretudos, paletós e vestidos de veludo molhado.",
      "Capas de bíblias, estojos de joias e paramentos litúrgicos religiosos.",
      "Roupões de veludo plush e pantufas personalizadas de alta costura."
    ],
    characteristics: [
      "Acabamento volumoso, elegante e com alto contraste de texturas.",
      "Preservação integral do brilho e toque aveludado do tecido original.",
      "Zero marcas circulares de aperto de bastidor na peça pronta."
    ],
    commonErrors: [
      "❌ Apertar o veludo com força entre os aros plásticos do bastidor tradicional de parafuso (cria marca permanente de esmagamento).",
      "❌ Passar ferro de passar quente diretamente sobre o pelo do veludo (derrete e queima o brilho dos fios).",
      "❌ Bordar sem plástico hidrossolúvel por cima, fazendo os pontos sumirem no meio dos pelos."
    ],
    troubleshootingTips: [
      "O bastidor deixou uma marca brilhante de aro no veludo: aplique vapor de água bem quente com o ferro a 5 cm de distância (sem encostar no tecido) e escove suavemente os pelos com uma escova de dentes macia.",
      "O bordado ficou enterrado e quase não dá para ler o nome: faltou o filme hidrossolúvel no topo ou o underlay foi programado fraco demais.",
      "O veludo andou e franziu durante o bordado: reforce a colagem do veludo na entretela de base com spray temporário ou faça um alinhavo prévio (Basting Box)."
    ],
    dicaArtrelados: "Nunca encoste a base quente do ferro na frente do veludo! Para tirar rugas ou resíduos de plástico hidrossolúvel: jogue apenas a fumaça de vapor do ferro pelo avesso da peça ou use um vaporizador vertical (steamer)! O veludo fica com o pelo levantado, macio e impecável!",
    voceSabia: "Na Renascença italiana no século XV, o veludo de seda bordado com fios de ouro era tão valioso que um único manto real chegava a custar o preço de uma fazenda inteira com castelo incluído!",
    practicalExercise: "Pegue um retalho de veludo. Borde uma letra com filme hidrossolúvel por cima e outra letra ao lado sem filme. Compare os dois resultados lado a lado e veja como o plástico faz a linha brilhar e flutuar com perfeição sobre o veludo.",
    quickSummary: "Veludo no Bordado é a técnica de utilizar filme hidrossolúvel na superfície e fixação flutuante no bastidor para evitar o esmagamento das felpas e criar relevo nítido.",
    relatedTerms: ["Filme Hidrossolúvel (Solvy)", "Hoop Burn (Marca de Bastidor)", "Knockdown Stitch", "Técnica de Flutuação", "Bastidor Magnético"],
    tags: ["veludo", "tecidosfelpudos", "hidrossoluvel", "solvy", "hoopburn", "aplicacoes", "nobres"]
  },
  {
    id: "valvulas-solenoides-e-atuadores-pneumaticos-da-maquina",
    code: "V-070",
    letter: "V",
    term: "Válvulas Solenoides e Atuadores Pneumáticos da Máquina (Pneumatic Solenoid Valves & Actuators)",
    pronunciation: "vál-vu-las so-le-nói-des e a-tu-a-do-res pneu-má-ti-cos da má-qui-na",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do grego solen (canal/tubo condutor) e pneuma (ar/vento). Eletropneumática industrial de alta cadência.",
    summary: "Válvulas eletromagnéticas acionadas por ar comprimido que comandam os movimentos ultrarrápidos de corte de linha, trocas de cor e prensas em máquinas industriais.",
    definition: "As Válvulas Solenoides e Atuadores Pneumáticos em Máquinas de Bordar Industriais (Pneumatic Solenoid Control Valves & Air-Driven Actuators) são dispositivos eletromecânicos acionados por bobinas elétricas de 24V DC que controlam o fluxo de ar comprimido (geralmente entre 4 e 6 bar de pressão) para movimentar cilindros e pistões pneumáticos no cabeçote e na base da máquina. Em equipamentos industriais multicabeçotes (como Tajima, Barudan e ZSK), a pneumática substitui cames mecânicos lentos para acionar o desarme de facas de corte de linha, troca automática de bobinas, fixação de bastidores de boné e sistemas de aplicação automática de lantejoulas e fitas cordão.",
    technicalDetails: "As solenoides operam com tempos de resposta de microssegundos (10 a 25 ms), alimentadas por compressores de ar com secadores desumidificadores e unidades FRL (Filtro, Regulador de Pressão e Lubrificador). A presença de umidade ou óleo contaminado na linha de ar pode travar os êmbolos internos das válvulas solenoides, causando falhas intermitentes no corte de linha.",
    beginnerExplanation: "São as pequenas 'torneirinhas elétricas' que soltam jatos de ar comprimido para movimentar as peças pesadas da máquina de bordar industrial em uma fração de segundo! É o ar comprimido que faz a tesoura cortar a linha bem rápido e faz a máquina trocar de agulha sem fazer barulho de engrenagem batendo.",
    howItWorks: [
      "1. A placa-mãe envia um sinal elétrico de 24 volts para a bobina da solenoide no final de uma cor de bordado.",
      "2. O campo eletromagnético puxa o êmbolo da válvula em milissegundos.",
      "3. O ar comprimido a 5 bar é liberado pelo duto pneumático até o pistão de corte.",
      "4. O cilindro pneumático empurra a lâmina móvel que laça e corta a linha sob a chapa de agulha.",
      "5. A mola de retorno despressuriza a câmara de ar e a lâmina volta à posição de repouso.",
      "6. A máquina reinicia a costura na próxima cor instantaneamente sem perda de tempo."
    ],
    applications: [
      "Sistemas de corte automático de linha superior e inferior em máquinas multicabeçotes.",
      "Acionamento de garras de corte e sopro de ar em dispositivos de lantejoulas (Sequin Devices).",
      "Sistemas de troca automática de bobinas e bastidores pneumáticos industriais.",
      "Trava pneumática de pantógrafos de grande curso em máquinas de quilting e bordado contínuo."
    ],
    characteristics: [
      "Velocidade de disparo ultra-rápida sem desgaste mecânico por fricção de cames.",
      "Força de atuação constante mantida pela pressão do reservatório pneumático.",
      "Alta durabilidade em ciclos de produção de 24 horas por dia."
    ],
    commonErrors: [
      "❌ Deixar água acumular no reservatório do compressor de ar, mandando gotículas de água para dentro das válvulas elétricas.",
      "❌ Operar a máquina com pressão de ar abaixo de 4 bar, fazendo o corte de linha falhar por falta de força no pistão.",
      "❌ Esquecer de drenar o copo do filtro de ar (FRL) semanalmente no ateliê industrial."
    ],
    troubleshootingTips: [
      "A máquina não corta a linha e dá erro de corte no painel: verifique o manômetro do compressor de ar; se a pressão estiver abaixo de 5 bar, a válvula pneumática não tem força para empurrar a faca.",
      "Ouve-se um chiado contínuo de vazamento de ar perto do cabeçote: substitua o conector rápido de engate (Push-in Fitting) ou a mangueira de poliuretano ressecada.",
      "A válvula solenoide esquenta e não clica: teste a bobina com multímetro na escala de resistência para verificar se a fiação não está em curto-circuito."
    ],
    dicaArtrelados: "Para quem trabalha com máquinas industriais pneumáticas: todo final de tarde, ao desligar o ateliê, puxe a cordinha de dreno embaixo do seu compressor de ar! Purgar a água acumulada garante que o ar chegue sequinho na sua máquina de bordar e as válvulas durem anos a fio sem dar defeito!",
    voceSabia: "Os sistemas pneumáticos industriais de bordado foram inspirados nos freios a ar criados por George Westinghouse em 1869 para trens a vapor, que utilizavam o mesmo princípio de pressurização por ar comprimido para parar vagões pesados!",
    practicalExercise: "Localize a unidade de ar (FRL com manômetro) atrás da sua máquina de bordar industrial. Observe o ponteiro de pressão marcando entre 4 e 6 bar e drene a válvula de purga do filtro apertando o pino inferior com os dedos.",
    quickSummary: "Válvulas Solenoides Pneumáticas são componentes eletromagnéticos acionados por ar comprimido que realizam cortes de linha e movimentos ultrarrápidos em máquinas industriais.",
    relatedTerms: ["Ar Comprimido", "Cilindro Pneumático", "Corte Automático de Linha", "Unidade FRL", "Máquina Multicabeçote"],
    tags: ["valvulasolenoid", "pneumatica", "arcomprimido", "mecanica", "manutencao", "industrial", "corte"]
  },
  {
    id: "vazamento-e-fendas-em-ponto-tatami-tatami-gapping-and-holes",
    code: "V-071",
    letter: "V",
    term: "Vazamento e Fendas em Ponto Tatami (Tatami Gapping, Stitch Slippage & Fabric Grinning)",
    pronunciation: "va-za-men-to e fen-das em pon-to ta-ta-mi",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do japonês tatami (esteira tradicional) e do inglês gapping/grinning (sorriso/fenda aberta). Defeito clássico de digitalização.",
    summary: "Falhas e frestas visíveis no bordado onde o tecido de fundo aparece entre os fios de preenchimento por erro de ângulo, densidade ou compensação de repuxo.",
    definition: "O Vazamento e Fendas em Ponto Tatami (Tatami Gapping / Fabric Grinning / Stitch Slippage / Ponto Ralo com Abertura de Trama) é o defeito visual e estrutural que ocorre quando as linhas de preenchimento de um bloco de bordado não cobrem integralmente o tecido, revelando frestas indesejadas por onde o fundo da peça aparece. Esse problema não decorre necessariamente de pouca linha, mas sim de fatores físicos combinados: ausência de underlay (ponto de suporte) cruzado, ângulo de ponto alinhado em paralelo com a trama elástica do tecido, compensação de encolhimento insuficiente (Pull Compensation < 0,35 mm) ou tensão excessivamente apertada na linha superior.",
    technicalDetails: "Quando o ângulo dos pontos tatami coincide exatamente com a direção dos fios do urdume ou trama do tecido (0° ou 90°), as agulhadas caem nos mesmos intervalos dos fios da malha, fazendo os pontos afundarem nos vãos microscópicos (fenômeno de Stitch Slippage). A solução técnica consiste em inclinar o ângulo do tatami entre 30° e 60° em relação à trama e aplicar underlay duplo perpendicular (Tatami Underlay a 90° com densidade aberta de 1,5 mm).",
    beginnerExplanation: "É quando o bordado fica 'ralo' e dá para ver a cor da camiseta aparecendo por baixo da linha, parecendo que o desenho está falhado ou furadinho. Quase sempre isso acontece porque faltou a 'caminha de pontos' por baixo (o suporte) ou porque a linha foi bordada na mesma direção das fibras do tecido, fazendo a linha afundar e abrir brechas.",
    howItWorks: [
      "1. A programadora cria um círculo grande de preenchimento com espaçamento padrão de 0,40 mm.",
      "2. Se ela esquecer de ativar o ponto de suporte (Underlay), o tecido estica na direção da costura.",
      "3. A tração da linha puxa as laterais do tecido para dentro enquanto a agulha perfura o tecido.",
      "4. Ao sair da máquina, o tecido relaxa e abre fendas entre as fileiras de pontos.",
      "5. A cor escura da camiseta 'vaza' através do bordado claro como pequenos risquinhos brancos.",
      "6. A correção no software adiciona uma base de suporte cruzada que estica e ancora as fibras antes da cobertura."
    ],
    applications: [
      "Bordados em camisetas de algodão macio, malhas piquet de camisa polo e tecidos elásticos.",
      "Preenchimento de grandes fundos e brasões esportivos com mais de 5 cm de diâmetro.",
      "Ajuste fino de matrizes para tecidos escuros onde fios claros precisam cobrir 100% o fundo.",
      "Prevenção de retrabalho e devolução de pedidos em confecções corporativas."
    ],
    characteristics: [
      "Defeito corrigido com facilidade na etapa de programação no software.",
      "Eliminação de fendas sem necessidade de superlotar a matriz com excesso de pontos.",
      "Bordado final com aspecto uniforme, liso e cobertura acetinada perfeita."
    ],
    commonErrors: [
      "❌ Aumentar a densidade para 0,25 mm para tentar fechar o buraco (cria uma placa dura de linha que rasga o tecido e entorta a agulha).",
      "❌ Programar preenchimentos sem nenhum ponto de underlay por baixo em tecidos de malha.",
      "❌ Bordar com agulha grossa de ponta cortante que abre rombos na trama do tecido facilitando o vazamento."
    ],
    troubleshootingTips: [
      "A camiseta preta está aparecendo no meio do bordado amarelo: aumente a compensação de repuxo (Pull Compensation) para 0,40 mm e ative o underlay do tipo 'Tatami' a 90° em relação à cobertura.",
      "O vazamento só acontece nas pontas e beiradas do desenho: aumente a margem de sobreposição (Overlap) entre os objetos vizinhos para 1,0 mm a 1,5 mm.",
      "O tecido encolheu tanto que abriu um buraco no centro: use entretela mais encorpada (recortável de 80g) e prenda bem firme no bastidor com cola spray."
    ],
    dicaArtrelados: "Se você bordar uma cor clara (como branco ou amarelo) sobre uma camisa escura (preta ou marinho), incline os pontos a 45 graus e coloque uma caminha de suporte por baixo! O desenho fica 100% coberto, liso e gostoso ao toque sem precisar colocar quilos de linha pesada!",
    voceSabia: "O termo em inglês 'Fabric Grinning' (sorriso do tecido) foi criado pelas bordadeiras da Inglaterra vitoriana no século XIX porque as fendas abertas entre os pontos de linha pareciam dentes brancos sorrindo através do pano preto!",
    practicalExercise: "Crie no computador dois quadrados de 4x4 cm: um sem suporte (underlay desativado) e outro com suporte Tatami a 90°. Borde ambos em um retalho de malha escura com linha branca e compare a diferença de cobertura entre os dois.",
    quickSummary: "Vazamento em Tatami são as fendas abertas onde o tecido aparece entre os pontos, corrigidas com ponto de suporte (underlay), inclinação diagonal e compensação de repuxo.",
    relatedTerms: ["Ponto Tatami", "Compensação de Encolhimento (Pull Comp)", "Underlay (Ponto de Suporte)", "Ângulo de Ponto", "Densidade de Ponto"],
    tags: ["tatami", "vazamento", "gapping", "grinning", "underlay", "programacao", "defeitos"]
  },
  {
    id: "vaporizacao-e-passadoria-de-acabamento-em-pecas-bordadas",
    code: "V-072",
    letter: "V",
    term: "Vaporização e Passadoria de Acabamento em Peças Bordadas (Steam Finishing, Pressing & Ironing Care)",
    pronunciation: "va-po-ri-za-são e pas-sa-do-ri-a de a-ca-ba-men-to em pe-sas bor-da-das",
    level: "Iniciante 🟢",
    category: "Gestão & Produção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim vapor (exalação de calor úmido) e do francês repassage. Técnicas de acabamento térmico têxtil.",
    summary: "Procedimento correto de passar a ferro e vaporizar pelo avesso para assentar os pontos, tirar marcas de bastidor e dar acabamento de loja de luxo.",
    definition: "A Vaporização e Passadoria de Acabamento em Peças Bordadas (Post-Embroidery Steam Pressing & Garment Finishing) é a etapa crucial de pós-processamento térmico onde o calor úmido e o vapor de água são utilizados para relaxar as tensões residuais acumuladas nas fibras do tecido e nos filamentos de linha durante o bordado. Quando realizada corretamente — sempre pelo avesso da peça, sobre uma base felpuda macia e sem arrastar a base metálica do ferro diretamente sobre os pontos —, a passadoria elimina marcas de bastidor (Hoop Marks), alinha o relevo dos pontos cheios e devolve o caimento plano e impecável à peça de vestuário ou enxoval.",
    technicalDetails: "O poliéster de bordado possui ponto de amolecimento térmico em torno de 220 °C a 240 °C. O ferro de passar deve operar na posição 'Sintéticos / Poliéster' (temperatura máxima de 130 °C a 150 °C) com jato contínuo de vapor. Passar o ferro seco em alta temperatura (posição Algodão a 200 °C) sobre fios de poliéster ou metálicos achata o relevo tridimensional dos pontos, vitrifica a linha e queima o brilho acetinado natural.",
    beginnerExplanation: "É o toque de mágica final que transforma a peça bordada em um produto de vitrine! É passar a toalha ou roupinha sempre do lado do avesso, colocando uma toalha macia dobrada por baixo na tábua para o bordado afundar macio e não ser amassado pelo ferro quente. O vapor tira todas as ruguinhas e faz a peça parecer novinha em folha.",
    howItWorks: [
      "1. A bordadeira retira a peça pronta da máquina e corta os fiapos e excessos de entretela no avesso.",
      "2. Coloca uma toalha felpuda grossa dobrada sobre a tábua de passar.",
      "3. Deita a peça bordada com a frente virada para baixo contra a toalha felpuda macia.",
      "4. Posiciona o ferro de passar na temperatura média de vapor (posição lã/poliéster).",
      "5. Pressiona suavemente o ferro pelas costas do bordado liberando jatos de vapor quente.",
      "6. O relevo do bordado penetra nas felpas da toalha sem ser esmagado pela base do ferro.",
      "7. A peça esfria por 1 minuto na mesa plana, mantendo os pontos altos, brilhantes e sem nenhuma marca de bastidor."
    ],
    applications: [
      "Acabamento final de toalhas de banho, jogos de cama, fraldas e enxovais infantis.",
      "Remoção de marcas de anéis plásticos de bastidor em camisas pólo e uniformes.",
      "Assentamento de patches termocolantes aplicados em jaquetas e moletons.",
      "Preparação e embelezamento de peças para fotografia profissional no catálogo do ateliê."
    ],
    characteristics: [
      "Devolve o toque macio e a flexibilidade natural do tecido ao redor do bordado.",
      "Realça o relevo escultural e o brilho acetinado dos pontos cheios.",
      "Garante uma apresentação impecável na entrega das encomendas aos clientes."
    ],
    commonErrors: [
      "❌ Passar o ferro muito quente diretamente pela frente do bordado (achata e queima o brilho da linha).",
      "❌ Arrastar o bico fino do ferro com força sobre os pontos, desfiando filamentos de linha soltos.",
      "❌ Dobrar e guardar a peça ainda quente e úmida de vapor na embalagem plástica fechada (gera mofo e rugas)."
    ],
    troubleshootingTips: [
      "A linha do bordado ficou com brilho esbranquiçado de plástico queimado: o ferro estava quente demais; use sempre temperatura média e passe apenas pelo avesso.",
      "O bastidor deixou uma marca brilhante de anel no tecido da camisa: borrife um pouco de água limpa sobre a marca e passe o ferro com vapor forte pelo avesso esticando suavemente com as mãos.",
      "O tecido ao redor do bordado ficou franzido: vaporize pelo avesso com bastante vapor e dê leves puxõezinhos diagonais no tecido com os dedos até ele assentar retinho."
    ],
    dicaArtrelados: "Guarde essa regra de ouro no coração: 'Bordado se passa sempre de costas e na caminha fofa'! Coloque uma toalha de banho dobrada na tábua, coloque o seu bordado de bruços (frente para baixo) e passe o ferro no avesso com bastante vapor! O bordado fica fofinho, alto e com brilho de cinema!",
    voceSabia: "Na alta costura em Paris, os mestres ateliês utilizam almofadas côncavas especiais chamadas 'Almofadas de Alfaiate' (Tailor's Ham) cheias de serragem de madeira maciça para passar bordados em mangas e golas sem amassar o relevo das linhas!",
    practicalExercise: "Borde um monograma em um retalho. Passe metade dele diretamente pela frente com o ferro seco e a outra metade pelo avesso sobre uma toalha macia com vapor. Passe o dedo por cima dos dois lados e sinta a diferença inacreditável no relevo e na maciez.",
    quickSummary: "Vaporização e Passadoria é o processo de passar o bordado pelo avesso sobre base felpuda com vapor quente para eliminar marcas de bastidor e realçar o relevo da linha.",
    relatedTerms: ["Acabamento Final", "Hoop Burn (Marca de Bastidor)", "Steamer / Vaporizador", "Temperatura de Passadoria", "Pós-Produção"],
    tags: ["vaporizacao", "passadoria", "ferrodepassar", "acabamento", "enxoval", "posproducao", "gestao"]
  },
  {
    id: "volante-manual-e-gravacao-de-angulo-de-sincronismo-do-eixo-principal",
    code: "V-073",
    letter: "V",
    term: "Volante Manual e Gravação de Ângulo de Sincronismo do Eixo Principal (Main Shaft Handwheel & Degree Dial)",
    pronunciation: "vo-lan-te ma-nu-al e gra-va-são de ân-gu-lo de sin-cro-nis-mo",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim volare (girar velozmente) e do grego synchronos (no mesmo tempo). Engenharia mecânica de precisão cinemática.",
    summary: "Disco giratório graduado de 0° a 360° no eixo principal da máquina utilizado para sincronizar a lançadeira, estica-fio e corte de linha.",
    definition: "O Volante Manual e Disco Graduado de Ângulo de Sincronismo do Eixo Principal (Main Shaft Handwheel & Timing Degree Dial / Encoder Calibration Wheel) é o componente mecânico montado na extremidade do eixo superior da máquina de bordar que permite girar o mecanismo manualmente e indica numericamente a posição angular exata do ciclo de costura (de 0° a 360°). Cada fase do ciclo mecânico possui um ângulo padrão de fábrica gravado: por exemplo, 100° para a descida máxima da agulha (Ponto Morto Inferior), 196°–202° para o encontro do bico da lançadeira com a cava da agulha, e 270°–285° para a parada de repouso superior (Ponto Morto Superior / Stop Position).",
    technicalDetails: "O alinhamento do sensor de ângulo (Encoder) com o disco do volante é indispensável para o corte de linha automático e troca de agulha. Em máquinas industriais (Tajima, Barudan, Dahao), girar o volante no sentido anti-horário com a máquina travada permite verificar folgas de sincronismo entre a correia dentada do eixo superior e a caixa de engrenagens cônica da lançadeira.",
    beginnerExplanation: "É aquela roda redonda que fica na lateral direita da máquina que gira enquanto ela borda! Ela tem números de 0 a 360 graus marcados nela, como um relógio. Girar essa roda com a mão bem devagarzinho permite descer a agulha com cuidado para conferir onde ela vai furar, destravar linha embolada e colocar a máquina na posição certa de começar.",
    howItWorks: [
      "1. A bordadeira desliga a máquina ou coloca em modo de pausa de segurança.",
      "2. Gira o volante manual com a mão sempre na direção indicada pela seta (sentido anti-horário).",
      "3. O eixo superior movimenta sincronizadamente a barra de agulha, o estica-fio e a lançadeira inferior.",
      "4. Ao olhar a marcação do ponteiro no volante, ela identifica a posição exata de parada da máquina (ex: 100° para agulha embaixo ou 280° para agulha em cima).",
      "5. O técnico utiliza os números gravados no volante para calibrar o ponto exato onde a ponta da lançadeira passa atrás da agulha.",
      "6. A máquina fica milimetricamente sincronizada sem falhas de ponto e sem quebra de agulha."
    ],
    applications: [
      "Sincronização milimétrica do tempo da lançadeira (Hook Timing) por técnicos mecânicos.",
      "Posicionamento manual seguro da agulha para conferência de cruzetas de alinhamento.",
      "Liberação manual do mecanismo quando uma linha grossa embola na lançadeira travando o motor.",
      "Calibração do sensor eletrônico de posição de parada (Encoder Zero-Point Adjustment)."
    ],
    characteristics: [
      "Gravação numérica precisa e permanente em graus de 0° a 360°.",
      "Permite rotação manual suave com esforço mínimo dos dedos.",
      "Ponto de referência indispensável para diagnóstico e manutenção mecânica."
    ],
    commonErrors: [
      "❌ Girar o volante manual no sentido contrário (sentido horário em máquinas que não permitem), embolando e quebrando fios no estica-fio.",
      "❌ Tentar forçar o volante com alicate quando a máquina travar por embolamento de linha.",
      "❌ Não alinhar o volante na posição de 100° ao realizar ajustes no bico da lançadeira."
    ],
    troubleshootingTips: [
      "A máquina apita e acusa erro de posição de parada (Stop Position Error): gire o volante manual com a mão até o ponteiro coincidir exatamente com a marcação de 280° (ou marca vermelha de fábrica) e religue a máquina.",
      "O volante está muito pesado para girar com a mão: retire a tampa da lançadeira e limpe pedaços de linha presos na carcaça rotativa.",
      "A agulha bate na chapa ao descer: confira se o bastidor não está deslocado ou se o suporte de agulha não está torto antes de girar o volante até 100°."
    ],
    dicaArtrelados: "Se a sua máquina travar no meio de um bordado e você ouvir um apito: não entre em pânico e nunca force o botão liga/desliga! Gire o volante manual devagarzinho com a sua mão para subir a agulha, retire o bastidor com cuidado e olhe embaixo da chapa para tirar qualquer fiapinho de linha preso! É o jeito mais seguro de cuidar da sua máquina!",
    voceSabia: "Nas primeiras máquinas de costura e bordado manuais do século XIX inventadas por Isaac Singer, o volante não era girado por eletricidade, mas sim impulsionado pelos pés da costureira em um pedal de ferro fundido conectado por uma correia de couro de boi!",
    practicalExercise: "Olhe para a lateral direita da sua máquina de bordar. Localize o volante manual e a marquinha indicadora de posição. Com a máquina desligada, gire o volante suavemente com a mão e veja a barra de agulha e o estica-fio subirem e descerem em perfeita harmonia.",
    quickSummary: "Volante Manual é o disco graduado de 0° a 360° conectado ao eixo superior da máquina que permite movimentar o mecanismo com as mãos e calibrar o sincronismo perfeito da lançadeira.",
    relatedTerms: ["Sincronismo da Lançadeira (Timing)", "Ponto Morto Superior (PMS)", "Estica-Fio", "Encoder", "Eixo Principal"],
    tags: ["volante", "eixoprincipal", "sincronismo", "timing", "mecanica", "manutencao", "graus"]
  },
  {
    id: "vies-e-estabilidade-angular-de-tecidos-no-bastidor-fabric-bias",
    code: "V-074",
    letter: "V",
    term: "Viés e Estabilidade Angular de Tecidos no Bastidor (Fabric Bias Distortion & Diagonal Grainline Alignment)",
    pronunciation: "vi-és e es-ta-bi-li-da-de an-gu-lar de te-si-dos no bas-ti-dor",
    level: "Intermediário 🟡",
    category: "Fios & Linhas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do provençal biais (oblíquo, inclinado). Princípio da física de deformação elástica dos tecidos a 45 graus.",
    summary: "Comportamento elástico diagonal dos tecidos cortados a 45° que exige entretelas multidirecionais e esticamento equilibrado no bastidor.",
    definition: "O Viés e Estabilidade Angular de Tecidos no Bastidor (Fabric Bias Grain Dynamics & Diagonal Stability Management) é o fenômeno mecânico-têxtil decorrente da máxima elasticidade natural que qualquer tecido plano ou malha apresenta quando submetido a forças de tração no ângulo diagonal de 45° em relação aos fios do urdume (comprimento) e da trama (largura). Quando uma peça é colocada no bastidor com os aros desalinhados do fio reto do tecido ou quando a matriz de bordado possui pontos densos aplicados na linha do viés, o tecido sofre distorção romboidal assimétrica (torção diagonal), resultando em bordados ovais tortos e franzimentos irreversíveis.",
    technicalDetails: "O coeficiente de deformação plástica no viés (45°) pode ser até 400% superior ao do fio reto do urdume. Para anular a distorção no viés em tecidos de sarja, cetim ou malha, deve-se utilizar entretelas multidirecionais de não-tecido (TNT) com fibras entrecruzadas isotropicamente em padrão de véu ou entretelas tecidas coladas previamente no avesso.",
    beginnerExplanation: "É a diagonal mágica do tecido! Todo tecido que não estica nada no comprimento e na largura estica muito se você puxar na diagonal (no viés). Se você puxar o tecido torto na hora de fechar o bastidor, o bordado vai ficar repuxado e torto. Colocar o tecido bem alinhadinho no fio reto e usar entretela firme evita qualquer deformação.",
    howItWorks: [
      "1. A bordadeira identifica o sentido do fio do tecido (fio reto paralelo à ourela).",
      "2. Corta a entretela rasgável ou recortável com as fibras estáveis apoiando a peça.",
      "3. Enquadra o tecido no bastidor mantendo o fio reto perfeitamente paralelo às bordas do aro plástico.",
      "4. Ajusta o parafuso do bastidor tensionando o tecido de forma homogênea em cruz (norte-sul e leste-oeste), sem puxar as diagonais.",
      "5. No software, os ângulos de ponto da matriz são distribuídos de modo a não sobrecarregar apenas a linha do viés a 45°.",
      "6. A máquina borda a peça e o desenho final sai perfeitamente circular e plano sem torcer o tecido."
    ],
    applications: [
      "Bordados em peças cortadas no viés como saias godê, vestidos fluidos e lenços de seda.",
      "Posicionamento preciso de brasões em golas, gravatas e fitas decorativas enviesadas.",
      "Confecção de acabamentos de debrum e viés personalizado com monogramas bordados.",
      "Prevenção de bordados deformados em tecidos finos e escorregadios."
    ],
    characteristics: [
      "Compreensão do alinhamento geométrico do fio do tecido na colocação do bastidor.",
      "Eliminação de repuxamentos diagonais assimétricos em círculos e brasões.",
      "Garante caimento suave e sem ondas ao redor do bordado na roupa pronta."
    ],
    commonErrors: [
      "❌ Puxar as quatro pontas do tecido nas diagonais depois de apertar o bastidor, deformando o tecido no viés.",
      "❌ Usar entretelas baratas unidirecionais que rasgam sozinhas na diagonal de 45°.",
      "❌ Montar o bastidor com o tecido torto em relação ao esquadro das réguas guia."
    ],
    troubleshootingTips: [
      "O círculo da matriz saiu ovalado e com ondas na diagonal: o tecido foi esticado no viés na hora de colocar no bastidor; coloque uma folha de entretela recortável firme e feche o bastidor sem puxar as pontas com força.",
      "A gola da camisa entortou após bordar o logotipo: a gola foi entretelada no viés; aplique entretela tecida termocolante no fio reto para travar a elasticidade.",
      "O bordado está repuxando apenas em um dos lados: verifique se o aperto do bastidor está igual em todos os lados ou use bastidor magnético que aplica pressão homogênea instantânea."
    ],
    dicaArtrelados: "Ao colocar o tecido no bastidor, nunca puxe o tecido pelas 'pontinhas' ou quinas do bastidor com força! Puxe sempre em linha reta pelos lados planos (cima, baixo, esquerda e direita)! Puxar pelas quinas estica o viés e é o motivo número 1 de círculos saírem ovais!",
    voceSabia: "A estilista francesa Madeleine Vionnet revolucionou a história da moda na década de 1920 ao inventar o 'Corte no Viés' (Bias Cut), descobrindo que tecidos cortados a 45 graus abraçavam as curvas do corpo feminino como uma segunda pele!",
    practicalExercise: "Pegue um pedaço quadrado de tecido de algodão de 20x20 cm. Puxe pelas laterais retas: sinta como ele é firme e quase não estica. Agora puxe pelas duas pontas opostas na diagonal (no viés): veja como ele estica como um elástico! Entenda na prática o poder do viés.",
    quickSummary: "Viés do Tecido é a elasticidade natural da diagonal a 45° que exige alinhamento correto e entretela multidirecional para evitar que o bordado fique torto ou ovalado.",
    relatedTerms: ["Fio Reto (Grainline)", "Urdume e Trama", "Entretela Multidirecional", "Hooping (Colocação no Bastidor)", "Distorção Romboidal"],
    tags: ["vies", "bias", "fioreto", "urdume", "trama", "elasticidade", "bastidor", "tecidos"]
  },
  {
    id: "v-075-vetorizacao-e-digitalizacao-de-logotipos",
    code: "V-075",
    term: "Vetorização e Digitalização de Logotipos (Conversão Imagem para Matriz)",
    pronunciation: "ve-to-ri-za-sau e di-ji-ta-li-za-sau de lo-go-ti-pos",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Softwares, Digitalização & Tecnologias",
    origin: "Do latim 'vector' (o que conduz, segmento orientado) e 'digitus' (dedo, contagem, representação numérica). Estabelecido com os sistemas CAD/CAM de bordado gráfico desenvolvidos no final dos anos 1970 por Wilcom e Barudan.",
    summary: "Processo técnico de conversão de imagens visuais (pixels/vetores) em comandos mecatrônicos de perfuração, tipos de pontos, densidades e cortes de linha.",
    definition: "A Vetorização e Digitalização de Logotipos (Embroidery Digitizing / Punching / Vector-to-Stitch Conversion) é a engenharia artística e técnica de transformar uma arte visual bidimensional (arquivos vetoriais EPS, SVG, AI ou imagens matriciais JPG, PNG) em um arquivo executável para máquinas de bordar (DST, PES, EXP, JEF). O processo define a anatomia dos pontos (satin, tatami, corrido), as camadas de sob-pontos (underlays), as compensações de repuxamento (pull compensation), a angulação de penetração dos fios e a ordem exata de costura para garantir que a matriz borde sem rugas, sem falhas de registro e com produtividade máxima.",
    technicalDetails: "Envolve o cálculo de ângulos de pontos que se equilibram, definição de densidades (passos de 0.38 a 0.45 mm), pontos de fixação inicial (tie-in) e arremate final (tie-off), além da compensação de deformação específica para cada tecido (ex: +0.40 mm para malha piquet; +0.20 mm para sarja plana).",
    beginnerExplanation: "É a mágica de pegar um desenho ou logotipo no computador e ensinar para a máquina de bordar exatamente como ela deve costurar cada detalhe! O programador escolhe onde a agulha entra, onde ela sai, que tipo de ponto usar e em que ordem as cores serão bordadas.",
    howItWorks: [
      "1. A imagem do logotipo é importada e redimensionada na escala real (1:1) no software de bordado.",
      "2. O digitalizador analisa a hierarquia visual e separa os objetos por ordem lógica (do fundo para a frente, de dentro para fora).",
      "3. Letras finas e colunas estreitas são programadas como ponto cheio (satin) com ângulos perpendiculares.",
      "4. Áreas grandes e fundos são traçados em ponto tatami com ângulos a 45° para evitar repuxo excessivo.",
      "5. São adicionadas as camadas de suporte e travamento inferior (underlay em zigue-zague ou tatami leve).",
      "6. São ajustados os pontos de entrada, saída, comandos de corte automático de linha e a compensação de repuxo.",
      "7. A matriz é simulada no visualizador 3D e exportada no formato nativo da máquina de bordar."
    ],
    applications: [
      "Digitalização de logomarcas empresariais, uniformes corporativos e escolares",
      "Criação de brasões militares, distintivos de segurança e emblemas termocolantes",
      "Matrizes artísticas de enxovais de bebê, monogramas nobres e personagens",
      "Padronização e otimização de arquivos para produção seriada industrial em alta velocidade"
    ],
    characteristics: [
      "Conversão manual vetor-a-ponto com controle total de nós e curvas de Bézier",
      "Definição independente de densidade, sob-ponto e compensação de puxão por objeto",
      "Geração de código binário mecatrônico de comando de motores de passo X/Y"
    ],
    commonErrors: [
      "❌ Usar a função de 'conversão automática mágica de 1 clique' em logotipos complexos sem revisar a orientação dos pontos e sob-pontos.",
      "❌ Digitalizar tudo no mesmo ângulo de ponto, fazendo o tecido encolher violentamente em uma única direção.",
      "❌ Borda contorno fino sem aplicar compensação de repuxo no preenchimento de baixo, deixando um vão branco entre o contorno e o miolo."
    ],
    troubleshootingTips: [
      "Se o contorno preto ficar descolado da cor de preenchimento: Aumente a compensação de repuxo (Pull Compensation) do preenchimento para +0.40 mm e certifique-se de que o contorno borde imediatamente após o preenchimento daquela mesma área.",
      "Se o bordado ficar duro como uma placa de papelão: Reduza a densidade dos pontos tatami (aumente o espaçamento para 0.42 mm ou 0.45 mm) e alivie o excesso de sob-pontos.",
      "Se as letras ficarem ilegíveis e empelotadas: Elimine sob-pontos pesados em colunas com menos de 1,5 mm de largura e utilize ponto corrido central leve."
    ],
    dicaArtrelados: "A regra de ouro da boa digitalização: digitalize sempre pensando no comportamento físico do tecido real! O tecido não é uma folha de papel rígida; ele estica, cede e encolhe com a puxada da linha. Respeite as compensações de repuxo e seu bordado sairá perfeito na primeira tentativa!",
    "voceSabia": "Antes dos computadores e dos mouses, na década de 1960 os primeiros 'punchers' (perfuradores) criavam matrizes industriais perfurando fitas de papel cartão manualmente com furadores mecânicos, ponto a ponto, enquanto olhavam o desenho ampliado 6 vezes em uma mesa de desenho gigante!",
    practicalExercise: "Pegue a letra 'A' de uma fonte em formato imagem. Desenhe manualmente as colunas no software de matrizes definindo a perna esquerda, a perna direita e por último a travessa central com os pontos de amarração corretos. Gere a simulação 3D e confira o caminho da agulha.",
    quickSummary: "Processo de programação mecatrônica que transforma desenhos e vetores em matrizes de bordado precisas, equilibrando densidades e repuxo.",
    recommendedSettings: {
      density: "0.38 mm a 0.42 mm para ponto cheio | 0.40 mm a 0.45 mm para tatami",
      stabilizer: "Conforme o tecido e a contagem total de pontos"
    },
    relatedTerms: [
      "Compensação de Encolhimento (Pull Compensation)",
      "Ponto Tatami (Tatami Fill)",
      "Ponto Cheio (Satin Stitch)",
      "Sob-Ponto / Estrutura de Base (Underlay)",
      "Inteligência Artificial no Bordado"
    ],
    tags: [
      "v-075",
      "vetorizacao",
      "digitalizacao",
      "matriz",
      "logotipos",
      "programacao",
      "punching",
      "softwares",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Embroidery Digitizing Principles & Applied Push-Pull Mechanics. Sydney, 2022.",
      "DE LEEUW, B. Digitizing Made Easy: Create Professional Embroidery Designs. Iola: Krause Publications, 2021.",
      "ARTRELADOS. Manual de Engenharia de Matrizes e Digitalização de Elite. São Paulo, 2024."
    ],
    updatedAt: "2026-08-26"
  }
];

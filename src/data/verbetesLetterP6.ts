import { Verbete } from "../types";

export const VERBETES_LETTER_P_PART6: Verbete[] = [
  {
    id: "padrao-vp3-pfaff-husqvarna",
    code: "P-041",
    letter: "P",
    term: "Padrão VP3 / Formato Pfaff-Husqvarna (VP3 File Standard)",
    pronunciation: "pa-drão vê-pê-três",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Softwares & Formatos",
    summary: "Formato de arquivo multifuncional de alta precisão utilizado pelas máquinas Husqvarna Viking e Pfaff que armazena dados de pontos, múltiplas posições de bastidor e metadados têxteis.",
    origin: "Desenvolvido pelo grupo sueco-alemão SVP Worldwide (Singer, Viking, Pfaff) como evolução dos antigos formatos .HUS e .VIP.",
    definition: "O Formato VP3 (Viking Pfaff 3) é o padrão proprietário avançado de arquivo de bordado adotado globalmente pelas máquinas topo de linha das marcas Husqvarna Viking e Pfaff (como as linhas Designer Epic, Ruby, Sapphire e Pfaff Creative Icon). O formato VP3 é um contêiner digital sofisticado que suporta múltiplos sub-blocos de bordado com compensação independente de tecidos, dados de múltiplos bastidores (incluindo bastidores magnéticos e giratórios 'Turnable Hoops'), imagens vetoriais e rasterizadas de referência, tabelas de fios completas com fabricantes de prestígio (Robison-Anton, Gütermann, Sulky, Madeira) e informações de corte e fixação de apliques.",
    howItWorks: [
      "1. A matriz é gerada no software mySewnet / Premier+ ou exportada em formato .VP3 por outros softwares profissionais.",
      "2. O arquivo codifica dados de pontos com resolução angular ultra-fina e mapeamento de cores preciso.",
      "3. Se o bordado for composto por múltiplos aros ou reposicionamentos no mesmo bastidor (Endless Hoops / Majestic Hoop de até 360x350 mm), as coordenadas de cada etapa são gravadas separadamente.",
      "4. O arquivo é transferido via nuvem mySewnet Cloud (Wi-Fi) ou pendrive USB.",
      "5. A máquina Viking ou Pfaff renderiza a matriz na tela touch com iluminação e textura tridimensional real.",
      "6. A máquina executa os pontos acionando os recursos exclusivos de sensores de tecido e corte automático."
    ],
    beginnerExplanation: "É o formato de arquivo moderno e poderoso das máquinas Husqvarna Viking e Pfaff! Ele é super inteligente, guarda as cores das linhas com perfeição e é o único que consegue gerenciar aqueles bastidores gigantescos de reposicionamento e conexão direta com a internet por Wi-Fi.",
    applications: [
      "Formato nativo de bordado para máquinas Husqvarna Viking (Designer Epic, Topaz, Jade) e Pfaff (Creative Icon, Performance)",
      "Gerenciamento de bastidores gigantescos de reposicionamento contínuo (Endless e Grand Dream Hoops)",
      "Sincronização em nuvem e streaming de matrizes pelo ecossistema mySewnet",
      "Armazenamento de dados vetoriais enriquecidos para edição avançada na tela da máquina"
    ],
    technicalDetails: "O formato VP3 armazena coordenadas com precisão de décimos de milímetro e suporta até 256 trocas de cor por projeto. É retrocompatível com máquinas mais antigas através de conversão para o formato VIP ou HUS, mas mantém todos os recursos de inteligência nas máquinas modernas equipadas com sistema operacional mySewnet OS.",
    commonErrors: [
      "❌ Tentar abrir um arquivo .VP3 direto em máquinas antigas Husqvarna Viking que só aceitam o formato .HUS de primeira geração",
      "❌ Tentar ler arquivos .VP3 em máquinas Brother ou Janome sem conversão prévia de formato",
      "❌ Desativar o módulo de cores ao exportar para VP3 em softwares de terceiros, perdendo as informações de linhas",
      "❌ Usar pendrives com partição não reconhecida na máquina Pfaff"
    ],
    troubleshootingTips: [
      "Se a máquina Viking antiga não ler o arquivo .VP3: Utilize um conversor gratuito de matrizes para salvar o arquivo em formato .HUS ou .VIP",
      "Se a matriz não sincronizar via Wi-Fi: Verifique o login na sua conta mySewnet no painel da máquina",
      "Se as cores ficarem trocadas: Certifique-se de que a paleta de cores original foi salva com a tabela de fios correta no software"
    ],
    dicaArtrelados: "Se você tem uma máquina Pfaff ou Husqvarna Viking: aproveite a conexão Wi-Fi mySewnet para enviar arquivos .VP3 direto do seu computador ou celular para a máquina sem precisar espetar pendrive. É uma comodidade fantástica!",
    voceSabia: "A Husqvarna foi fundada na Suécia em 1689 como fábrica de armamentos do Rei e começou a fabricar máquinas de costura em 1872; suas máquinas de bordar são conhecidas até hoje pela mecânica de altíssima precisão militar!",
    practicalExercise: "Exporte um design no software escolhendo o formato Husqvarna/Pfaff .VP3. Abra o arquivo em um visualizador e examine como a paleta de cores e os limites do bastidor são fielmente preservados.",
    quickSummary: "Padrão avançado da Husqvarna Viking e Pfaff que armazena pontos, dados de múltiplos bastidores e integração mySewnet Wi-Fi.",
    relatedTerms: ["Padrão PES", "Padrão DST", "Padrão JEF", "Padrão EXP", "Bastidor de Bordar"],
    tags: ["p-041", "padrao vp3", "formato vp3", "husqvarna viking", "pfaff", "mysewnet", "softwares", "artrelados"],
    bibliographicReferences: [
      "SVP WORLDWIDE. VP3 File Specifications and mySewnet Cloud Integration. Huskvarna, 2021.",
      "WILCOM INTERNATIONAL. European Machine File Architectures: VP3, VIP and HUS. Sydney, 2022."
    ]
  },
  {
    id: "padrao-emb-formato-nativo-wilcom",
    code: "P-042",
    letter: "P",
    term: "Padrão EMB / Formato Nativo Wilcom (Wilcom EMB Native Object Format)",
    pronunciation: "pa-drão é-emi-bê",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Softwares & Formatos",
    summary: "Formato de arquivo vetorial paramétrico nativo do software Wilcom EmbroideryStudio que armazena a geometria matemática original dos objetos, permitindo edição e redimensionamento infinitos sem perda de qualidade.",
    origin: "Criado pela empresa australiana Wilcom International nos anos 1980 como primeiro formato orientado a objetos matemáticos (Object-Based Digitizing) para a indústria têxtil.",
    definition: "O Formato EMB (Wilcom Native Object File) é o padrão de arquivo de engenharia vetorial mais poderoso, completo e respeitado na indústria global de digitalização de bordados. Diferente dos formatos de máquina (como .DST, .PES, .JEF, que guardam apenas pontos mecânicos 'congelados' que se deformam ao serem redimensionados), o arquivo .EMB armazena os objetos vetoriais puros (polígonos, curvas Bézier, nós de controle, ângulos de inclinação de pontos, tipos de underlay parametrizados, tabelas de compensação de tecido e regras de densidade inteligente). Isso significa que uma matriz salva em .EMB pode ser aumentada ou reduzida em 50% ou 200%, ter suas densidades ou tipos de pontos alterados com 1 clique, e o software recalculará matematicamente 100% dos pontos como se a matriz tivesse sido digitalizada naquele tamanho exato.",
    howItWorks: [
      "1. O digitalizador desenha os vetores no Wilcom EmbroideryStudio e define os atributos (tipo de ponto, densidade, underlays, pull comp).",
      "2. Ao salvar em .EMB, o software grava a equação matemática de cada objeto vetorial, a paleta de cores original e os parâmetros de tecido.",
      "3. O arquivo funciona como a 'matriz mãe' (arquivo fonte editável).",
      "4. Se o cliente solicitar a mesma matriz para uma toalha (com topping e underlay duplo) ou para uma camisa polo (com pull comp reforçado), o programador altera apenas a receita de tecido e salva.",
      "5. O arquivo .EMB é então compilado e exportado no formato de máquina desejado (.DST, .PES, .JEF, etc.) para produção.",
      "6. O arquivo .EMB permanece arquivado intacto para futuras alterações sem degradação."
    ],
    beginnerExplanation: "O arquivo .EMB é a 'matriz original master' do bordado, igualzinho ao arquivo .PSD do Photoshop ou ao arquivo do CorelDraw! Se você tiver o arquivo .EMB, você pode aumentar, diminuir, mudar as fontes, trocar os pontos e mexer em tudo sem estragar o bordado nunca.",
    applications: [
      "Arquivo 'Master' original obrigatório para arquivamento e catálogo de estúdios profissionais de digitalização",
      "Redimensionamento de desenhos sem alteração de densidade (o software gera novos pontos automaticamente)",
      "Aplicação de 'Auto Fabric': troca automática de parâmetros para sarja, piquet, couro ou toalha com 1 clique",
      "Edição completa de tipografias, nós de curva e sequenciamento de bordado"
    ],
    technicalDetails: "O formato .EMB é um contêiner binário rico baseado no modelo OLE de objetos composto por: 1) Geometria Vetorial e Nós de Bézier; 2) Propriedades de Ponto (Stitch Properties); 3) Paletas de Cores Reais e Tabelas de Fios; 4) Imagens de Arte Original (Bitmaps / Vetores); 5) Histórico de Versões (Wilcom e1.5, e2, e3, e4, e4.5). Para converter .EMB para formatos de máquina, o Wilcom compila os vetores através do seu motor matemático proprietário de geração de pontos.",
    commonErrors: [
      "❌ Enviar o arquivo .EMB direto para o pendrive da máquina de bordar (a máquina de bordar NÃO lê .EMB; o .EMB deve ser exportado antes para .DST, .PES, .JEF, etc.)",
      "❌ Jogar fora o arquivo original .EMB após exportar para .DST, perdendo a capacidade de editar os objetos vetoriais com facilidade no futuro",
      "❌ Tentar abrir um arquivo .EMB salvo em versão recente (ex: Wilcom e4.5) em uma versão muito antiga (ex: Wilcom 9 ou 2006) sem salvar na versão compatível",
      "❌ Converter um arquivo .DST simples para .EMB achando que ele virará automaticamente um vetor perfeito (pontos de máquina precisam ser convertidos por reconhecimento de objetos)"
    ],
    troubleshootingTips: [
      "Se a máquina não encontrar a matriz no pendrive: Você salvou em .EMB; abra o Wilcom, vá em 'Arquivo > Salvar Como' ou 'Exportar Arquivo de Máquina' e escolha a extensão da sua máquina (ex: .DST ou .PES)",
      "Se o cliente tiver uma versão mais antiga do Wilcom: Salve o arquivo escolhendo 'Wilcom EMB e2' ou 'e3' no tipo de arquivo",
      "Se precisar visualizar arquivos .EMB no Windows sem abrir o software: Instale o aplicativo gratuito 'Wilcom TrueSizer', que exibe miniaturas e permite converter formatos"
    ],
    dicaArtrelados: "A regra de ouro de organização do ateliê Artrelados: NUNCA apague seus arquivos .EMB! Guarde sempre uma pasta chamada 'ORIGINAIS_EMB' com a matriz master editável. Quando o cliente pedir o mesmo bordado menor para um boné ou maior para uma jaqueta, você resolverá em 30 segundos!",
    voceSabia: "O motor de geração de pontos do Wilcom (criado pelo matemático australiano Bill Wilson nos anos 1970) possui mais de 40 patentes internacionais e é a base utilizada inclusive pelo software de bordado oficial da Bernina!",
    practicalExercise: "Abra um arquivo .EMB no Wilcom. Aumente o desenho em 100% (o dobro do tamanho) e observe como a contagem de pontos dobra automaticamente mantendo a densidade perfeita. Faça o mesmo teste com um arquivo .DST e veja a diferença!",
    quickSummary: "Formato vetorial paramétrico nativo do Wilcom que armazena a geometria matemática dos objetos, permitindo edição e redimensionamento perfeitos.",
    relatedTerms: ["Padrão DST", "Padrão PES", "Digitalização de Matrizes", "Compensação de Tecido (Auto Fabric)"],
    tags: ["p-042", "padrao emb", "formato emb", "wilcom", "arquivo master", "vetores", "softwares", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. EmbroideryStudio Object-Based Architecture and EMB Specifications. Sydney, 2022.",
      "DEVERSON, B. Professional Embroidery Digitizing: Native Objects vs. Stitch Data. London, 2021."
    ]
  },
  {
    id: "pre-tensao-discos-tensionadores",
    code: "P-043",
    letter: "P",
    term: "Pré-tensão e Discos Tensionadores Principais (Pre-tensioners & Main Tension Discs)",
    pronunciation: "pré-ten-são e dis-cos ten-si-o-na-do-res",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Tensão & Calibração",
    summary: "Conjunto mecânico de pratos metálicos polidos com molas calibradas que freiam e regulam com precisão micrométrica a passagem da linha superior da máquina.",
    origin: "Do latim 'tensio' (estiramento/tensão) e 'discus' (disco circular), mecanismo fundamental patenteado na primeira metade do século XIX para controle de linha de costura.",
    definition: "O Conjunto de Pré-tensão e Discos Tensionadores Principais (Upper Thread Tension Assembly) é o subsistema mecânico responsável por controlar a resistência à tração e a velocidade de entrega do fio de bordar superior. A linha percorre duas estações fundamentais: 1) O Pré-tensionador (Pre-tensioner): pequeno conjunto de discos superiores com mola leve que alinha o fio e elimina 'coqueiros' ou torções provenientes do cone; e 2) O Tensionador Principal (Main Tension Assembly): composto por dois discos côncavos de aço cromo-duro retificado, uma mola helicoidal calibrada, um botão graduado com rosca micrométrica e a mola estica-fio (Check Spring). A pressão exercida pelos discos sobre o filamento determina se o nó da laçada será formado perfeitamente no terço central do tecido.",
    howItWorks: [
      "1. A linha desce da árvore de linhas e entra no pré-tensionador, recebendo um primeiro freio leve de alinhamento.",
      "2. O fio desce e passa entre as duas faces polidas dos discos do tensionador principal.",
      "3. Ao girar o botão graduado no sentido horário (+), comprime-se a mola helicoidal, aumentando a força de atrito sobre a linha.",
      "4. Ao girar no sentido anti-horário (-), a mola folga, liberando a linha com menor resistência.",
      "5. A linha sai dos discos e abraça a mola estica-fio (Check Spring), que absorve os solavancos mecânicos da alavanca estica-fio.",
      "6. A força de tensão resultante equilibra exatamente a força da caixa de bobina inferior na proporção ideal de 1/3.",
      "7. Nas paradas para corte de linha, um solenoide eletrônico afasta os discos para liberar o fio livremente."
    ],
    beginnerExplanation: "São aqueles botões redondos de rosca com pratinhos de metal por onde a linha passa! Eles funcionam como o freio de uma bicicleta para a linha: se você apertar o botão, a linha corre mais presa e esticada; se você soltar, a linha corre mais frouxa.",
    applications: [
      "Regulagem milimétrica da tensão superior para linhas de poliéster 40wt, 60wt, viscose e fios metálicos",
      "Garantia da proporção perfeita de 1/3 de linha superior no avesso do ponto satim",
      "Eliminação de laçadas frouxas na frente e contenção da subida da linha branca da bobina",
      "Alívio automático da linha durante os saltos e cortes de linha (Tension Release)"
    ],
    technicalDetails: "A tensão da linha superior de poliéster 40wt medida com um dinamômetro digital (Tension Gauge tipo Towa) na altura da agulha deve situar-se rigorosamente entre 110 gf e 130 gf (gramas-força) para máquinas industriais, e entre 90 gf e 110 gf para linhas de viscose. Fios metálicos exigem tensão muito mais frouxa (60 gf a 80 gf). Os discos devem estar 100% isentos de fiapos de linha prensados e de crostas de cola de silicone.",
    commonErrors: [
      "❌ Passar a linha pela máquina com o pé calcador abaixado (quando os discos estão fechados), fazendo o fio não entrar entre os pratos e bordar com tensão zero (embolando tudo por baixo)",
      "❌ Apertar a tensão superior ao máximo para tentar sumir com laçadas de baixo, quebrando a agulha e enrugando o tecido",
      "❌ Deixar fiapos de linha e restos de cola presos entre os discos tensores, impedindo que os discos fechem",
      "❌ Borda com a mola estica-fio (Check Spring) quebrada ou sem movimento"
    ],
    troubleshootingTips: [
      "Se a linha embolar por baixo em forma de 'ninho de pássaro' (Birdnest): A linha superior saltou para fora dos discos tensores; passe a linha novamente com o calcador levantado",
      "Se a linha branca da bobina aparecer no topo do bordado: A tensão superior está muito apertada (gire o botão no sentido anti-horário) ou a bobina está muito frouxa",
      "Se a tensão ficar irregular oscilando: Passe um pedaço de fio dental sem cera ou uma linha dobrada entre os discos tensores para remover fiapos acumulados"
    ],
    dicaArtrelados: "A regra de ouro Artrelados ao passar a linha na máquina: NUNCA passe a linha com o pé calcador abaixado! Com o calcador levantado, os discos tensores se abrem. Quando você passa o fio e abaixa o calcador, os pratos 'mordem' a linha com a tensão exata!",
    voceSabia: "Em um dia de produção contínua a 800 PPM, mais de 15 quilômetros de linha deslizam entre as faces de aço dos discos tensores de uma única cabeça de máquina!",
    practicalExercise: "Com o calcador levantado, puxe a linha na altura da agulha e sinta como ela corre totalmente solta. Abaixe o calcador e puxe novamente: sinta a resistência firme aplicada pelos discos tensores.",
    quickSummary: "Conjunto mecânico de pratos metálicos com molas calibradas que freiam e regulam a tensão da linha superior da máquina.",
    relatedTerms: ["Caixa de Bobina (Bobbin Case)", "Towa Gauge (Dinamômetro)", "Check Spring (Mola Estica-Fio)", "Ninho de Pássaro (Birdnesting)"],
    tags: ["p-043", "pre tensao", "discos tensores", "tensao superior", "regulagem", "calibracao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL MANUAL. Thread Tension Mechanics and Dynamic Upper Thread Gauging. Nagoya, 2021.",
      "MADEIRA THREADS. Calibrating Thread Tension for High-Speed Embroidery. Freiburg, 2020."
    ]
  },
  {
    id: "ponto-morto-superior-inferior-pms-pmi",
    code: "P-044",
    letter: "P",
    term: "Ponto Morto Superior (PMS) e Ponto Morto Inferior (PMI) (Top & Bottom Dead Center)",
    pronunciation: "pon-to mor-to su-pe-ri-or e in-fe-ri-or",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Posições angulares angulares extremas do curso vertical da barra da agulha (graus do encoder do eixo principal) que determinam a sincronização com a lançadeira e o pantógrafo.",
    origin: "Do conceito da engenharia mecânica de motores a pistão (Top Dead Center / Bottom Dead Center), transferido para a cinemática de eixos de máquinas de costura industriais.",
    definition: "O Ponto Morto Superior (PMS / Top Dead Center - TDC) e o Ponto Morto Inferior (PMI / Bottom Dead Center - BDC) representam os dois limites geométricos absolutos de inversão de movimento do mecanismo biela-manivela da barra da agulha no ciclo de 360° do eixo principal da máquina de bordar. O PMS (geralmente indexado como 100° no encoder mecânico) ocorre quando a ponta da agulha atinge a altura máxima acima da placa, momento exato em que o pantógrafo movimenta o bastidor; o PMI (indexado como 180° a 200°) ocorre quando a agulha atinge a máxima profundidade abaixo da placa de ponto. Quando a agulha sobe cerca de 1.8 mm a 2.0 mm a partir do PMI (atingindo a posição de 202° a 205°), ocorre o encontro milimétrico crucial com a ponta da lançadeira para laçar o fio.",
    howItWorks: [
      "1. No ciclo de 0° a 100°: a alavanca estica-fio sobe ao topo, a agulha sobe ao Ponto Morto Superior (PMS) e o pantógrafo move o bastidor.",
      "2. De 100° a 180°: a agulha desce velozmente, perfura o tecido e a entretela e penetra na placa.",
      "3. Aos 180°-200°: a barra atinge o Ponto Morto Inferior (PMI), sua máxima extensão vertical.",
      "4. De 200° a 205°: a agulha inicia o curso ascendente subindo cerca de 1.8 mm; a fricção do tecido faz a linha superior folgar e projetar a laçada (loop) na cava (scarf).",
      "5. Aos 205°: a ponta da lançadeira rotativa passa a 0.05 mm da cava da agulha e penetra no centro da laçada.",
      "6. De 205° a 360°: a lançadeira completa o giro abraçando a caixa de bobina enquanto o estica-fio sobe recolhendo o nó.",
      "7. O ciclo se completa e atinge novamente o PMS."
    ],
    beginnerExplanation: "São os dois pontos extremos da agulha: o ponto mais alto lá em cima (PMS) e o ponto mais fundo lá embaixo (PMI). Toda a mágica da máquina depende desse reloginho: é quando a agulha está lá embaixo e começa a subir que a lançadeira passa raspando nela para dar o nó do bordado!",
    applications: [
      "Referência fundamental para regulagem e sincronismo de tempo da lançadeira (Hook Timing)",
      "Indexação do encoder digital do eixo principal da máquina (graus de parada a 100°)",
      "Ajuste da altura da barra da agulha (marcações de gravação na haste da barra)",
      "Sincronização dos motores de passo do pantógrafo com o movimento da agulha"
    ],
    technicalDetails: "As barras de agulha profissionais possuem duas linhas de referência usinadas: a linha superior indica o PMI e a linha inferior indica a subida de 1.8 mm a 2.0 mm onde a ponta da lançadeira DEVE coincidir exatamente com o centro da cava da agulha. Em caso de colisão mecânica grave (agulha batendo no bastidor), o encoder pode perder a referência angular de PMS, exigindo calibração no painel técnico.",
    commonErrors: [
      "❌ Tentar regular o tempo da lançadeira sem usar o relógio comparador ou as marcas de PMI na barra da agulha",
      "❌ Forçar o volante manual da máquina no sentido anti-horário em máquinas que só giram no sentido horário, desalinhando o sincronismo",
      "❌ Desconectar o encoder óptico do eixo principal sem travar a máquina no PMS mecânico (100°)",
      "❌ Borda com a barra da agulha frouxa ou desnivelada em relação à altura de PMI"
    ],
    troubleshootingTips: [
      "Se a máquina parar emitindo erro de 'Eixo Principal Travado' (Main Motor Error): Gire o volante manual da máquina até a marca de 100° (PMS de parada segura)",
      "Se a máquina pular todos os pontos de uma agulha específica: Verifique se a altura da barra da agulha não subiu após uma batida forte",
      "Se a agulha colidir com a lançadeira: O ponto de encontro após o PMI está fora de tempo e precisa de regulagem por técnico autorizado"
    ],
    dicaArtrelados: "O 'Grau de Parada Seguro' da imensa maioria das máquinas de bordar industriais e semiprofissionais é exatamente 100°. Se a máquina der erro e você precisar mexer no bastidor ou na agulha, sempre gire o volante manual até o display indicar 100°!",
    voceSabia: "Em uma máquina de bordar industrial operando a 1.000 PPM, a agulha atinge o PMI e retorna ao PMS mais de 16 vezes a cada segundo, com uma aceleração vertical comparável à de um caça supersônico!",
    practicalExercise: "Com a máquina desligada, gire o volante manual no sentido correto e observe pela lateral da máquina o movimento da barra da agulha subindo até o ponto mais alto (PMS) e descendo até a profundidade máxima (PMI).",
    quickSummary: "Posições angulares extremas superior (PMS) e inferior (PMI) da barra da agulha que regem o sincronismo com a lançadeira e pantógrafo.",
    relatedTerms: ["Lançadeira Rotativa", "Cava da Agulha (Scarf)", "Sincronismo de Ponto (Hook Timing)", "Encoder do Eixo Principal"],
    tags: ["p-044", "pms", "pmi", "ponto morto superior", "ponto morto inferior", "sincronismo", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL MANUAL. Hook Timing and Main Shaft Angular Synchronization (TDC/BDC). Nagoya, 2021.",
      "GROZ-BECKERT. The Mechanics of Loop Formation: Scarf Penetration and Needle Rise. Albstadt, 2020."
    ]
  },
  {
    id: "ponto-flutuante-lacadas-birdnesting",
    code: "P-045",
    letter: "P",
    term: "Ponto Flutuante / Laçadas Frouxas (Looping & Birdnesting Stitches)",
    pronunciation: "pon-to flu-tu-an-te",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Solução de Problemas",
    summary: "Falha visual e mecânica em que laçadas frouxas de linha acumulam-se desordenadamente no topo do bordado (Looping) ou formam uma maçaroca de fios na lançadeira (Birdnesting).",
    origin: "Do inglês 'Looping' (formação de laços soltos) e 'Birdnesting' (ninho de pássaro), metáforas visuais para o emaranhado descontrolado de fios frouxos.",
    definition: "O Ponto Flutuante e as Laçadas Frouxas (Looping e Birdnesting) representam uma das patologias operacionais mais comuns e frustrantes no bordado computadorizado. Manifestam-se em duas formas principais: 1) Looping Superior (Laçadas na Frente): pequenas argolas ou fios frouxos projetando-se para fora do ponto satim ou tatami, causados por tensão superior excessivamente frouxa, falta de passagem da linha na mola estica-fio ou linha que saltou fora dos discos tensores; e 2) Ninho de Pássaro (Birdnesting Inferior): acúmulo volumoso e descontrolado de dezenas de laçadas de linha superior embaixo da placa de agulha e ao redor da caixa de bobina, prendendo o tecido e travando o motor da máquina instantaneamente.",
    howItWorks: [
      "1. A linha superior não entra corretamente entre os discos tensores ou salta fora da alavanca estica-fio.",
      "2. Ao penetrar no tecido, a máquina entrega metros de linha sem resistência mecânica alguma.",
      "3. A lançadeira captura a linha folgada, mas a alavanca estica-fio não consegue recolher a sobra de volta.",
      "4. A sobra de linha vai se empilhando no cesto da caixa de bobina a cada ciclo de 800 PPM.",
      "5. Em menos de 3 a 5 segundos, forma-se uma bola densa de fios entrelaçados (o ninho de pássaro) sob a placa.",
      "6. O tecido é puxado para baixo, o pantógrafo não consegue se mover e a máquina trava com erro de sobrecarga no motor.",
      "7. O operador deve cortar os fios por baixo com muito cuidado para não rasgar o tecido da peça."
    ],
    beginnerExplanation: "É quando o bordado fica cheio de laços soltos e feios por cima parecendo uma toalha desfiada, ou quando a máquina engole o tecido e faz aquele 'ninho de aranha' de linha embolada embaixo da chapinha de metal! Acontece quase sempre porque a linha escapou do passador ou dos discos de tensão.",
    applications: [
      "Diagnóstico imediato de desregulagem de tensão superior ou falha de passagem de linha",
      "Identificação de acúmulo de sujeira ou cola nos discos tensores da máquina",
      "Solução rápida para travamento de peças no braço tubular da máquina",
      "Manutenção preventiva da mola estica-fio (Check Spring)"
    ],
    technicalDetails: "Existe uma lei mecânica fundamental do bordado que todo operador deve memorizar: PROBLEMA VISÍVEL NO AVESSO (EMBAIXO) É CAUSADO PELA LINHA DE CIMA (SUPERIOR); PROBLEMA VISÍVEL NA FRENTE (EM CIMA) É CAUSADO PELA LINHA DE BAIXO (BOBINA) OU TENSÃO SUPERIOR FROUXA. Quando a linha embola embaixo (Birdnesting), 99% das vezes a culpa é da linha superior que não foi passada com o calcador levantado ou escapou do estica-fio.",
    commonErrors: [
      "❌ Puxar o tecido do bastidor com força bruta quando ocorrer um ninho de pássaro, rasgando a roupa e entortando a barra da agulha",
      "❌ Achar que o ninho de pássaro por baixo é defeito da bobina e desregular a caixa de bobina sem necessidade",
      "❌ Passar a linha na máquina de qualquer jeito com o pé calcador abaixado",
      "❌ Continuar bordando com laçadas frouxas na frente, fazendo os laços enroscarem no calcador e rasgarem a peça"
    ],
    troubleshootingTips: [
      "Se ocorrer ninho de pássaro (Birdnesting): Desligue a máquina, desparafuse a placa de agulha se necessário, corte os fios por baixo com tesoura de ponta curva fina e passe toda a linha de cima novamente com o calcador levantado",
      "Se aparecerem laçadas soltas (Looping) na frente do bordado: Aumente a tensão da linha superior apertando o botão graduado ou passe o fio dental entre os discos tensores",
      "Se a linha soltar laçadas apenas em uma cor específica: Verifique se a linha daquele cone não está escorregando e caindo da árvore de linhas (coloque uma redinha de carretel)"
    ],
    dicaArtrelados: "A 'Fórmula de Resgate do Ninho de Pássaro' Artrelados: quando a máquina travar embolada, NUNCA puxe o bastidor! Pegue uma lâmina de bisturi ou tesourinha de ponta curva, deslize por baixo do bastidor rente à placa e corte apenas os fios embolados. Depois, tire o bastidor suavemente sem rasgar o tecido!",
    voceSabia: "O mecanismo do estica-fio puxa cerca de 3 a 5 centímetros de linha de volta a cada fração de segundo; se a linha escapar dele, essa sobra inteira é despejada dentro da lançadeira, gerando o ninho de pássaro em menos de 10 pontos!",
    practicalExercise: "Passe a linha superior da sua máquina deliberadamente por fora da alavanca estica-fio. Dê 5 pontos em um retalho e veja como na mesma hora forma-se uma laçada gigante embaixo. Corrija a passagem e veja o ponto voltar a ficar perfeito.",
    quickSummary: "Defeito de laçadas soltas no topo ou emaranhado de fios na lançadeira, causado por linha fora dos tensores ou estica-fio.",
    relatedTerms: ["Discos Tensionadores", "Alavanca Estica-Fio", "Caixa de Bobina", "Tensão Superior"],
    tags: ["p-045", "ponto flutuante", "lacadas frouxas", "birdnesting", "ninho de passaro", "solucao de problemas", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY TRADE ASSOCIATION. Troubleshooting Thread Loops, Birdnesting and Upper Tension Failures. Dallas, 2021.",
      "MADEIRA THREADS. Loop Prevention and Thread Tension Diagnostics. Freiburg, 2020."
    ]
  },
  {
    id: "perda-passo-motor-deslocamento-eixo",
    code: "P-046",
    letter: "P",
    term: "Perda de Passo do Motor / Deslocamento de Eixo (Step Motor Stall & Axis Misalignment)",
    pronunciation: "per-da de pas-so do mo-tor",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Solução de Problemas",
    summary: "Falha mecânica ou eletrônica em que o motor de passo do pantógrafo perde pulsos de comando devido a obstrução física, fazendo todo o restante do bordado ser executado fora de posição.",
    origin: "Do inglês 'Stepper Motor Stall' (estol/travamento do motor de passo), fenômeno da automação robótica onde a carga mecânica supera o torque magnético do motor.",
    definition: "A Perda de Passo do Motor (conhecida como Deslocamento de Eixo, Shift de Posição ou Desalinhamento de Pantógrafo) é uma das falhas mais críticas na execução do bordado computadorizado. Ocorre quando os motores de passo que movimentam o pantógrafo nos eixos X ou Y não conseguem vencer uma resistência mecânica pontual (ex: a agulha bate no aro do bastidor, o tecido pesado enrosca embaixo da máquina, o operador esbarra no braço ou há falta de lubrificação nas guias). Como os motores de passo operam tipicamente em malha aberta (Open-loop) sem sensor de confirmação de posição física absoluta, a máquina 'pensa' que moveu o bastidor para a coordenada certa, mas o bastidor ficou para trás, fazendo com que todos os contornos e cores seguintes fiquem deslocados em milímetros ou centímetros da posição original.",
    howItWorks: [
      "1. A CPU envia um trem de 200 pulsos elétricos para o motor de passo do eixo X mover o bastidor em 10 mm.",
      "2. No meio do trajeto, a agulha colide levemente com a borda de plástico do bastidor ou o tecido prende sob o braço tubular.",
      "3. A força de resistência mecânica ultrapassa o torque magnético do motor de passo.",
      "4. O motor 'patina' e perde 80 pulsos magnéticos, emitindo um zumbido seco característico.",
      "5. A CPU computa que o bastidor chegou à posição correta e continua bordando.",
      "6. A partir daquele instante, 100% dos pontos seguintes são bordados com 4.0 mm de deslocamento em relação ao que já foi feito, arruinando a peça."
    ],
    beginnerExplanation: "É quando o braço da máquina dá uma 'engasgada' ou bate em alguma coisa e o desenho entorta todo! A máquina continua bordando como se nada tivesse acontecido, mas os olhos do bichinho ou o contorno preto saem totalmente fora do lugar, longe do desenho colorido.",
    applications: [
      "Diagnóstico e correção de matrizes desalinhadas após colisões mecânicas",
      "Manutenção preventiva de correias dentadas e guias lineares do pantógrafo",
      "Calibração de velocidade de aceleração de bastidores pesados em jaquetas e toalhas",
      "Recuperação de coordenadas de origem através do ponto zero da máquina"
    ],
    technicalDetails: "Para prevenir a perda de passo: 1) A tensão das correias dentadas do pantógrafo deve ser verificada semestralmente com frequencímetro acústico; 2) As guias lineares e fusos devem ser limpos de fiapos e lubrificados com graxa de lítio branca especial; 3) A velocidade máxima de deslocamento do pantógrafo em matrizes pesadas deve ser reduzida de 100% para 70% ou 80% no painel de controle.",
    commonErrors: [
      "❌ Deixar sobras de tecidos pesados, mangas de jaquetas ou toalhas penduradas caindo da máquina, prendendo o movimento do bastidor",
      "❌ Não fazer o teste de traçado (Trace) antes de bordar, fazendo o bastidor bater na agulha ou no corpo da máquina",
      "❌ Esbarrar ou apoiar as mãos no pantógrafo enquanto a máquina está trabalhando em alta velocidade",
      "❌ Desligar a máquina no desespero sem anotar o número do ponto atual para tentar recuperar a posição depois"
    ],
    troubleshootingTips: [
      "Se o contorno sair deslocado após um ruído estranho: Pare a máquina imediatamente, acesse a função de 'Retorno à Origem' (Return to Origin/Home) no painel e avance os pontos até onde parou",
      "Se o motor perder passo frequentemente no mesmo eixo: Inspecione se há fios ou entretelas enrolados nas polias do eixo X ou Y e limpe as guias",
      "Se a perda de passo ocorrer sempre em saltos longos: Reduza a velocidade de deslocamento rápido de salto no menu de parâmetros da máquina"
    ],
    dicaArtrelados: "Se a máquina perder o passo no meio de um bordado caro: NÃO tire o tecido do bastidor! Pare a máquina, volte o desenho para a coordenada inicial (ponto zero de origem), desligue e religue para a máquina recalibrar os sensores de fim de curso (Home Position) e avance até o ponto exato da perda de passo. Você salvará a peça!",
    voceSabia: "As máquinas industriais mais modernas do mundo utilizam Servomotores AC Digitais em Malha Fechada (Closed-Loop Servos) com encoders ópticos de 24 bits: se houver qualquer colisão, a máquina detecta o erro em 1 milissegundo e para instantaneamente antes de perder a posição!",
    practicalExercise: "Simule um deslocamento de emergência: use uma matriz teste em retalho. Quando a máquina estiver bordando, aperte o botão Stop. Pratique usar o painel da máquina para 'Voltar 100 pontos', 'Avançar 100 pontos' e 'Retornar ao Ponto de Origem'.",
    quickSummary: "Falha de sincronismo do pantógrafo causada por obstrução mecânica que faz o restante do desenho ser bordado fora de registro.",
    relatedTerms: ["Pantógrafo", "Motor de Passo", "Traçado de Bastidor (Trace)", "Ponto de Origem (Home Position)"],
    tags: ["p-046", "perda de passo", "deslocamento de eixo", "step motor stall", "desalinhamento", "solucao de problemas", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE MANUAL. Stepper Motor Kinematics and Position Recovery Protocols. Nagoya, 2021.",
      "BARUDAN EMBROIDERY MACHINERY. Closed-Loop Servo Drives vs. Open-Loop Stepper Axis Control. Tokyo, 2020."
    ]
  },
  {
    id: "perfuracao-excessiva-efeito-selo-carta",
    code: "P-047",
    letter: "P",
    term: "Perfuração Excessiva / Efeito Selo de Carta (Fabric Cutting / Postage Stamp Perforation)",
    pronunciation: "per-fu-ra-ção ex-ces-si-va",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação de Bordado",
    summary: "Dano estrutural irreversível em que a concentração exagerada de agulhadas na mesma coordenada corta as fibras do tecido como a linha picotada de um selo de correio.",
    origin: "Do inglês 'Postage Stamp Effect' (efeito selo postal), em alusão aos furinhos serrilhados picotados ao redor de selos postais que facilitam o destaque do papel com os dedos.",
    definition: "A Perfuração Excessiva (universalmente denominada Efeito Selo de Carta, Picotamento do Tecido ou Fabric Cutting) é uma das falhas de digitalização e operação mais destrutivas no bordado computadorizado. Ocorre quando a agulha penetra dezenas de vezes a distâncias microscópicas (menos de 0.3 mm entre furos), em cantos vivos, curvas fechadas, sobreposições excessivas de camadas densas ou sob densidades exageradas (abaixo de 0.30 mm). A sucessão contínua de golpes da lâmina de aço da agulha corta e tritura transversalmente os fios de urdume e trama do tecido, fazendo com que a parte central do desenho se desprenda e caia inteira para fora da peça durante o bordado ou na primeira lavagem, abrindo um rombo irreparável no tecido.",
    howItWorks: [
      "1. O programador cria uma matriz com letras pequenas ou cantos pontiagudos sem ativar o Ponto Curto e sem filtro de micro-pontos.",
      "2. A agulha calibre 75/11 ou 80/12 penetra repetidamente em um raio de 0.2 mm centenas de vezes por minuto.",
      "3. As fibras naturais ou sintéticas do tecido sofrem cisalhamento mecânico (são cortadas pelo atrito e gume da agulha).",
      "4. A entretela de suporte também é picotada e perde 100% de sua sustentação estrutural.",
      "5. A tensão de retração da linha puxa o miolo picotado para dentro da placa de agulha.",
      "6. Abre-se um buraco circular ou contornado no tecido, destruindo a peça irremediavelmente."
    ],
    beginnerExplanation: "É quando a máquina dá tantas agulhadas no mesmíssimo buraquinho que o tecido é cortado igual àquele picotado de destacar selo de carta ou canhoto de ingresso! O tecido rasga todinho em volta do desenho e cai um pedaço no chão, deixando um buracão na roupa.",
    applications: [
      "Identificação crítica de excesso de densidade e micro-pontos na programação de matrizes",
      "Calibração de filtros de pontos curtos em fontes pequenas e monogramas",
      "Ajuste de seleção de agulhas adequadas para tecidos finos e malhas delicadas",
      "Preservação da integridade estrutural de tecidos nobres e vestuário de luxo"
    ],
    technicalDetails: "Para prevenir 100% o efeito selo de carta: 1) Ative o Filtro de Pontos Curtos (Short Stitch Filter) no software e na máquina para descartar qualquer ponto menor que 0.35 mm a 0.40 mm; 2) Limite a densidade mínima do satim a 0.38 mm; 3) Nunca sobreponha mais de 2 camadas de preenchimento fechado no mesmo local (use a ferramenta 'Remover Sobreposição' / Trim Overlaps); 4) Em tecidos de malha, use agulha Ponta Bola (Ball Point 70/10) que afasta as fibras em vez de cortá-las.",
    commonErrors: [
      "❌ Borda letras de 3 mm em ponto satim pesado com densidade 0.32 mm em camiseta de malha fina, abrindo buracos nas pontas das letras",
      "❌ Sobrepor um contorno de satim denso em cima de um fundo tatami que já tinha densidade 0.38 mm sem eliminar a sobreposição por baixo",
      "❌ Usar agulha grossa de ponta aguda (calibre 90/14 Sharp) para bordar em tecidos finos de viscose ou seda",
      "❌ Usar entretela rasgável frágil de 30 g/m² em matrizes pesadas com 30.000 pontos"
    ],
    troubleshootingTips: [
      "Se o tecido estiver abrindo furos ao redor do bordado: Troque imediatamente para uma agulha mais fina (65/9 ou 70/10) de ponta bola e use entretela Cutaway",
      "Se os vértices de estrelas ou letras rasgarem o tecido: Ative a função 'Auto Cornering' e aumente o filtro de pontos curtos no software para 0.45 mm",
      "Se o miolo do bordado descolar da peça: Abra a matriz no software, use o comando 'Remover Sobreposição de Objetos' (Remove Underlying Stitching) e diminua a densidade geral em 10%"
    ],
    dicaArtrelados: "A regra de ouro Artrelados para bordar fontes pequenas sem furar o tecido: para letras menores que 6 mm de altura, configure a densidade do satim em 0.45 mm (mais aberta), ative o Ponto Curto Automático com 3 níveis e use agulha ponta bola 65/9. Suas letras ficarão legíveis e a malha 100% intacta!",
    voceSabia: "O conceito do selo de carta picotado foi inventado pelo engenheiro irlandês Henry Archer em 1848 para evitar que as pessoas precisassem carregar tesouras para cortar selos nos correios britânicos!",
    practicalExercise: "Digitalize uma letra 'A' de 6 mm com densidade 0.28 mm e sem ponto curto; borde em um retalho de malha fina e veja o tecido picotar. Refaça a matriz com densidade 0.42 mm, agulha 70/10 ponta bola e entretela Cutaway: observe a perfeição e resistência.",
    quickSummary: "Dano estrutural grave causado por excesso de agulhadas próximas que picotam e rasgam o tecido como um selo de correio.",
    relatedTerms: ["Ponto Curto (Short Stitch)", "Filtro de Micro-Pontos", "Densidade de Ponto", "Agulha Ponta Bola"],
    tags: ["p-047", "perfuracao excessiva", "efeito selo de carta", "picotamento", "rasgo no tecido", "solucao de problemas", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Eliminating Fabric Cutting & Postage Stamp Perforation. Sydney, 2022.",
      "GROZ-BECKERT. Fiber Damage Prevention in Knitted and Delicate Fabrics. Albstadt, 2021."
    ]
  }
];

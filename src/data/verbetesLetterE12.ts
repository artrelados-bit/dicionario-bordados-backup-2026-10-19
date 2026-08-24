import { Verbete } from "../types";

export const VERBETES_LETTER_E_PART12: Verbete[] = [
  {
    "id": "e-067-eixo-principal-superior-sincronismo-barra-agulha",
    "code": "E-067",
    "letter": "E",
    "term": "Eixo Principal Superior e Sincronismo da Barra de Agulha (Main Shaft Upper Drive & Needle Bar Timing)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Equipamentos e Máquinas",
    "origin": "Da engenharia mecatrônica de máquinas de costura e bordado industrial para transmissão de torque primário do servo motor.",
    "summary": "Eixo mecânico motriz superior que gira continuamente transmitindo movimento e sincronismo milimétrico para a barra de agulha, estica-fio e lançadeira.",
    "definition": "O Eixo Principal Superior (Upper Main Shaft / Master Drive Shaft) é o componente mecânico central alojado no braço superior da máquina de bordar que recebe a rotação direta do servo motor principal. Por meio de cames excêntricos, bielas e uma correia dentada síncrona selada, ele converte o movimento rotativo em movimento oscilatório vertical da barra de agulha e da alavanca estica-fio, mantendo o casamento de tempo angular rigorosamente perfeito com a lançadeira rotativa inferior a 0.05 mm de tolerância.",
    "technicalDetails": "Fabricado em aço cromado retificado com balanceamento dinâmico de alta rotação (suportando de 800 a 1.200 RPM), possui polia com marcações de graduação em graus (0° a 360°) para calibragem do ponto morto superior (TDC) e sincronismo do gancho da lançadeira.",
    "beginnerExplanation": "É o grande eixo de aço que fica escondido dentro da parte de cima da máquina. Ele funciona como o 'coração mecânico' da bordadeira: quando o motor gira esse eixo, ele faz a agulha descer, o estica-fio puxar a linha e a lançadeira pescar o fio embaixo, tudo no milissegundo exato sem bater uma peça na outra!",
    "howItWorks": [
      "1. O servo motor elétrico gira o eixo principal superior na velocidade definida (ex: 800 PPM).",
      "2. O came do eixo aciona a biela da barra de agulha, fazendo-a descer com precisão.",
      "3. Simultaneamente, a alavanca estica-fio desce para fornecer a folga de linha necessária.",
      "4. A correia síncrona transmite a rotação na proporção de 1:2 para o eixo da lançadeira na base inferior.",
      "5. A ponta da lançadeira passa rente à cava da agulha no momento exato em que a laçada se abre.",
      "6. O came superior eleva o estica-fio rapidamente para fechar o nó do ponto no tecido."
    ],
    "applications": [
      "Transmissão primária de força e sincronismo em máquinas domésticas e industriais",
      "Garantia de formação perfeita de ponto em alta rotação",
      "Referência angular para o sistema de corte de linha e troca de cor automática"
    ],
    "commonErrors": [
      "❌ Forçar o volante manual com a agulha travada no tecido, desalinhando o acoplamento do eixo principal.",
      "❌ Usar óleos lubrificantes impróprios ou graxa pesada que ressecam e aumentam o atrito nos mancais do eixo.",
      "❌ Deixar fios de linha enrolarem nas extremidades dos mancais do eixo superior."
    ],
    "troubleshootingTips": [
      "Se a máquina estiver emitindo um ruído metálico seco no braço superior: Lubrifique os pontos de mancal indicados no manual com óleo mineral branco especial para máquinas de bordar.",
      "Se a máquina perder o sincronismo e a agulha bater na lançadeira: Chame a assistência técnica para reajustar o ponto zero do eixo principal na graduação de 200°/205°."
    ],
    "dicaArtrelados": "Nunca gire o volante da sua máquina no sentido horário com força! Gire sempre no sentido anti-horário (em sua direção). Girar ao contrário desregula o sincronismo do eixo principal superior e pode fazer a agulha bater na chapa!",
    "voceSabia": "Nas primeiras máquinas de bordar industriais mecânicas do século XIX (sistema Schiffli), o eixo principal tinha mais de 10 metros de comprimento e era acionado por máquinas a vapor!",
    "practicalExercise": "Com a máquina desligada da tomada, gire o volante devagarzinho no sentido correto e observe como a descida da barra de agulha e a subida da alavanca estica-fio acontecem em uma harmonia perfeita e suave comandadas pelo eixo superior!",
    "quickSummary": "Eixo motriz principal que sincroniza a barra de agulha, o estica-fio e a lançadeira com precisão de frações de grau.",
    "relatedTerms": [
      "Alavanca Puxa-Fio (Thread Take-Up Lever)",
      "Cabo de Agulha / Bloco Fixador de Agulha",
      "Ajuste de Ponto e Folga da Lançadeira",
      "Correia Dentada do Pantógrafo e Eixo X/Y"
    ],
    "tags": [
      "e-067",
      "eixo principal",
      "barra de agulha",
      "sincronismo",
      "mecanica",
      "servo motor",
      "timing",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Technical Service Manual: Main Shaft Drive & Needle Bar Kinematics. Nagoya, 2022.",
      "BROTHER. Industrial & Commercial Embroidery Machine Mechanics. Nagoya, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "e-068-encoder-optico-posicao-angular-eixo",
    "code": "E-068",
    "letter": "E",
    "term": "Encoder Óptico de Posição Angular do Eixo (Optical Shaft Encoder & Position Resolver)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Equipamentos e Máquinas",
    "origin": "Da robótica industrial e automação mecatrônica aplicada ao controle de circuito fechado (Closed-Loop) em máquinas de bordar microprocessadas.",
    "summary": "Sensor óptico digital que monitora em tempo real o ângulo exato de rotação do eixo da máquina para comandar paradas com agulha em cima e cortes precisos.",
    "definition": "O Encoder Óptico de Posição Angular (Main Shaft Optical Encoder / Rotary Resolver) é um sensor optoeletrônico de alta precisão instalado no eixo principal da máquina de bordar. Composto por um disco ranhurado transparente e sensores emissores/receptores infravermelhos, ele converte a posição angular do eixo em pulsos digitais contínuos (tipicamente 360 a 1.024 pulsos por rotação), permitindo que a placa-mãe saiba exatamente onde a agulha está em qualquer fração de segundo.",
    "technicalDetails": "Permite o posicionamento exato de parada (Stop Position a 100° ou 285° para acionamento do cortador de linha e salto do pantógrafo), além de detectar instantaneamente perda de passo do motor ou travamento mecânico por quebra de linha.",
    "beginnerExplanation": "É o 'olho digital' da máquina de bordar. É um sensorzinho com luz invisível que lê exatamente em que altura a agulha está a cada milissegundo. É graças a ele que a máquina sempre para com a agulha levantada certinho no final do bordado ou para fazer o corte da linha!",
    "howItWorks": [
      "1. Conforme o eixo gira, o disco do encoder gira entre os feixes de luz infravermelha.",
      "2. O sensor lê centenas de pulsos ópticos a cada volta completa de 360 graus.",
      "3. O microprocessador calcula a velocidade exata (PPM) e a posição angular da barra de agulha.",
      "4. Ao receber um comando de parada ou troca de cor, o freio eletromagnético para o eixo no ângulo programado de agulha alta.",
      "5. Se houver qualquer travamento, o encoder detecta a ausência de pulsos e desliga o motor em milissegundos para proteger a máquina."
    ],
    "applications": [
      "Parada com agulha para cima (Needle Up Stop) ou agulha para baixo (Needle Down Stop)",
      "Sincronização precisa do solenoide de corte automático de linha",
      "Controle de aceleração suave em curvas e desaceleração antes do corte de salto"
    ],
    "commonErrors": [
      "❌ Deixar poeira de entretela ou fiapos acumularem na fenda óptica do sensor, causando erro de 'Main Shaft Position Error' ou 'Erro de Eixo'.",
      "❌ Limpar o disco do encoder com solventes fortes como thinner ou acetona, que tornam o disco acrílico opaco e inutilizam a leitura."
    ],
    "troubleshootingTips": [
      "Se a máquina apresentar erro de parada e a agulha parar enterrada no tecido: Limpe a fenda do sensor do encoder com um jato de ar comprimido seco ou pincel antiestático.",
      "Se a máquina perder o ângulo de corte: Execute a calibração de 'Ângulo de Parada do Eixo' no menu de serviço técnico da bordadeira."
    ],
    "dicaArtrelados": "Se a sua máquina der mensagem de erro de eixo após bordar muitas toalhas felpudas, não entre em pânico: na maioria das vezes é apenas pozinho de entretela que sujou o sensor do encoder! Uma limpeza leve com pincel seco resolve na hora!",
    "voceSabia": "Um encoder de máquina industrial lê mais de 6.000 sinais elétricos por segundo quando a máquina está trabalhando a 1.000 pontos por minuto, garantindo precisão cirúrgica no movimento!",
    "practicalExercise": "Ligue sua máquina e observe como, ao apertar o botão de parada, a agulha nunca para no meio do caminho: ela sempre sobe suavemente até o topo. Esse comando perfeito é feito pelo encoder!",
    "quickSummary": "Sensor digital no eixo da máquina que monitora o ângulo de rotação para garantir paradas com agulha alta e cortes precisos.",
    "relatedTerms": [
      "Corte Automático de Linha",
      "Eixo Principal Superior",
      "Operação da Máquina",
      "Controle de Velocidade"
    ],
    "tags": [
      "e-068",
      "encoder",
      "sensor optico",
      "posicao angular",
      "agulha alta",
      "eletronica",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JANOME. Memory Craft Service Manual: Optical Encoder Calibration. Tokyo, 2022.",
      "TAJIMA. Electronic Control Systems & Encoder Signal Diagnostics. Nagoya, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "e-069-efeito-trapunto-computadorizado-relevo-manta",
    "code": "E-069",
    "letter": "E",
    "term": "Efeito Trapunto Computadorizado com Relevo em Manta (Machine Trapunto & Quilted Puff Stitching)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Técnicas de Bordado",
    "origin": "Da tradicional técnica italiana de acolchoamento decorativo 'Trapunto' do século XIV na Sicília, recriada na era digital com matrizes de bordado automatizadas.",
    "summary": "Técnica de bordado que utiliza camadas de manta acrílica sob o desenho com recorte rente e pesponto de fundo, criando um relevo acolchoado elegante.",
    "definition": "O Efeito Trapunto Computadorizado (Machine Trapunto / Quilted Relief Embroidery) é a técnica híbrida de bordado e patchwork na qual uma ou duas camadas de manta acrílica (R1, R2 ou manta de algodão) são fixadas no bastidor, bordadas com uma linha de alinhave de contorno e recortadas rente à costura. Em seguida, o tecido principal e a entretela são posicionados por cima e a máquina executa o bordado decorativo com pespontos de fundo (stippling / micro-quilting), fazendo a figura acolchoada ressaltar com relevo suave e sofisticado.",
    "technicalDetails": "Requer matriz programada em etapas específicas (Alinhave de Manta -> Parada para Recorte -> Cobertura de Tecido -> Pesponto de Fixação -> Preenchimento de Fundo), com densidade de micro-quilting entre 1.5 mm e 2.5 mm de espaçamento para rebaixar o fundo e evidenciar o relevo central.",
    "beginnerExplanation": "É uma técnica linda que deixa o desenho fofinho e estufadinho como um edredom de luxo. A máquina prende uma mantinha fofa por baixo, você corta a sobrinha com a tesoura e depois a máquina borda por cima, fazendo o desenho ficar com um relevo almofadado maravilhoso!",
    "howItWorks": [
      "1. A bordadeira coloca a entretela e a manta acrílica no bastidor.",
      "2. A máquina borda a linha guia de contorno do desenho na manta e para.",
      "3. Com uma tesoura de ponta curva ou tesoura pelicano, a bordadeira corta a manta rente à costura.",
      "4. Coloca o tecido principal por cima cobrindo toda a área do bastidor.",
      "5. A máquina borda os pontos decorativos sobre a figura e preenche o fundo com costuras de quilting.",
      "6. O fundo fica rebaixado e a figura com manta ressalta em relevo acolchoado de alta costura."
    ],
    "applications": [
      "Enxovais de bebê de alto padrão (porta-maternidade, mantas, almofadas e protetores de berço)",
      "Colchas de cama, almofadas de veludo e jogos de mesa requintados",
      "Jaquetas acolchoadas, bolsas térmicas e peças de patchwork refinado"
    ],
    "commonErrors": [
      "❌ Cortar o tecido de base por acidente durante o refile da manta acrílica (usar sempre tesoura curva de aplique com a lâmina deitada).",
      "❌ Usar manta resinada muito dura que cria vincos feios após a lavagem (preferir manta R1 macia ou manta de algodão puro).",
      "❌ Usar pontos muito pesados de tatami sobre a área estufada, esmagando o relevo do trapunto."
    ],
    "troubleshootingTips": [
      "Se o relevo ficou murcho: Utilize manta acrílica de maior espessura (manta 150g ou 200g) ou duas camadas de manta R1 sobrepostas.",
      "Se a linha estiver arrebentando no acolchoamento: Aumente a altura do calcador no menu da máquina para 2.0 mm para acomodar o volume da manta sem comprimir."
    ],
    "recommendedSettings": {
      "density": "Pontos de contorno abertos e stippling de 2.0 mm no fundo",
      "needleType": "Topstitch 80/12 ou 90/14",
      "stabilizer": "Entretela Rasga-Fácil 80g na base",
      "speedPPM": "550 a 650 PPM"
    },
    "dicaArtrelados": "Para um efeito trapunto dos sonhos em almofadas de bebê, use linha de poliéster brilhante no mesmo tom do tecido e faça o fundo com micro-quilting (pontos ondulados de stippling bem miudinhos). O desenho acolchoado salta aos olhos com elegância real!",
    "voceSabia": "A palavra 'Trapunto' vem do italiano 'trapungere', que significa 'acolchoar' ou 'picar com agulha'. As peças mais antigas preservadas com essa técnica datam do século XIV e pertenciam à nobreza siciliana!",
    "practicalExercise": "Crie uma matriz com um coração simples e parada programada. Borde sobre uma mantinha fofa, recorte o contorno, cubra com tecido percal e borde o acabamento. Passe a mão por cima e sinta a maciez e o relevo incrível do trapunto!",
    "quickSummary": "Técnica de acolchoamento em máquina com recorte de manta que confere alto-relevo fofo e sofisticado a desenhos e enxovais.",
    "relatedTerms": [
      "Apliquê (Appliqué no Bordado Computadorizado)",
      "Relevo 3D com EVA (Puffy Foam)",
      "Ajuste de Altura do Calcador para Tecidos Espessos",
      "Ponto de Fixação"
    ],
    "tags": [
      "e-069",
      "trapunto",
      "manta acrilica",
      "acolchoado",
      "quilting",
      "enxoval de luxo",
      "relevo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BERNINA. Creative Machine Quilting and Digital Trapunto Masterclass. Steckborn, 2022.",
      "DEVEREUX, Keith. Specialty Embroidery Applications: Trapunto & Loft Digitizing. Nottingham, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "e-070-expansao-termica-chapa-aquecimento-lancadeira",
    "code": "E-070",
    "letter": "E",
    "term": "Expansão Térmica da Chapa de Agulha e Aquecimento da Lançadeira (Thermal Expansion & Rotary Hook Friction Control)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Manutenção e Cuidados",
    "origin": "Da termodinâmica mecânica e tribologia de máquinas têxteis de alta velocidade trabalhando em regimes contínuos de produção.",
    "summary": "Fenômeno de aquecimento e dilatação milimétrica dos metais da lançadeira e da chapa causado pelo atrito contínuo em altas velocidades, exigindo lubrificação térmica preventiva.",
    "definition": "A Expansão Térmica da Chapa de Agulha e Lançadeira (Rotary Hook Thermal Expansion / Frictional Heat Buildup) é a dilatação dimensional que ocorre nos componentes metálicos inferiores da máquina de bordar durante longas jornadas de trabalho ininterruptas a velocidades de 750 a 1.000 PPM. O atrito constante da agulha perfurando tecidos densos somado à rotação da lançadeira (até 2.000 RPM) pode elevar a temperatura da ponta da lançadeira a mais de 60°C, reduzindo a folga milimétrica de segurança (0.05 mm) e provocando derretimento de linhas sintéticas ou atrito mecânico.",
    "technicalDetails": "Controlada pela aplicação de micro-gotas de óleo mineral lubrificante de baixa viscosidade a cada 4 a 8 horas de operação contínua e ventilação adequada da base da máquina.",
    "beginnerExplanation": "Quando a máquina de bordar fica trabalhando muitas horas sem parar em velocidade alta, o atrito do ferro com ferro e da agulha furando o pano esquenta a parte de baixo da máquina. Se esquentar muito, o metal dilata um pouquinho e pode começar a arrebentar a linha ou derreter o fio sintético. Por isso é tão importante pingar aquela gotinha de óleo de bordado!",
    "howItWorks": [
      "1. A máquina borda continuamente em alta velocidade por várias horas consecutivas.",
      "2. O atrito mecânico na pista da lançadeira gera calor que se dissipa pela chapa de agulha.",
      "3. Os metais sofrem microexpansão térmica de alguns micrômetros.",
      "4. Sem lubrificação, a película de óleo se rompe, aumentando o atrito e a temperatura da ponta da lançadeira.",
      "5. A linha de poliéster que passa pela ponta quente perde resistência e arrebenta com aspecto derretido.",
      "6. A aplicação periódica de 1 gota de óleo especial restaura a película hidrodinâmica e arrefece o conjunto."
    ],
    "applications": [
      "Produção seriada ininterrupta em confecções e ateliês comerciais",
      "Bordados em materiais pesados e densos (jeans grosso, lona, couro e bonés estruturados)",
      "Preservação da vida útil da lançadeira rotativa e da barra de agulha"
    ],
    "commonErrors": [
      "❌ Bordar 8 horas seguidas sem colocar uma única gota de óleo na pista da lançadeira.",
      "❌ Usar óleos grossos (óleo de motor ou de cozinha) que queimam com o calor e formam uma borra escura que trava a máquina.",
      "❌ Tocar na ponta da agulha imediatamente após uma quebra em alta velocidade sem esperar esfriar."
    ],
    "troubleshootingTips": [
      "Se a linha de poliéster estiver arrebentando com a ponta enrolada e brilhante (aspecto de plástico queimado): A ponta da lançadeira ou a agulha está superaquecida; pause a máquina por 5 minutos, limpe os fiapos e aplique 1 gota de óleo mineral na pista da lançadeira.",
      "Se a chapa de agulha estiver quente ao toque: Reduza a velocidade de bordado de 850 para 650 PPM ao trabalhar em tecidos densos."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "Agulha com revestimento antiaderente ou Nitreto de Titânio (PD)",
      "stabilizer": "N/A",
      "speedPPM": "650 a 750 PPM em produções contínuas longas"
    },
    "dicaArtrelados": "Crie o hábito de ouro do ateliê Artrelados: antes de ligar a máquina pela manhã ou a cada 4 horas de trabalho pesado, coloque UMA ÚNICA gota de óleo na pista da lançadeira! Sua máquina trabalhará macia, silenciosa e com a temperatura perfeita o dia inteiro!",
    "voceSabia": "A ponta de uma agulha de bordado a 900 PPM em tecido jeans pode atingir temperaturas superiores a 120°C por causa do atrito de penetração, temperatura suficiente para derreter instantaneamente filamentos de nylon e poliéster!",
    "practicalExercise": "Após bordar um desenho denso de 20.000 pontos, retire o bastidor com cuidado e encoste as costas do dedo na chapa de agulha: você sentirá o calor gerado pela fricção. Agora compreenda por que a lubrificação regular é vital para a sua máquina!",
    "quickSummary": "Aquecimento e dilatação dos metais inferiores causados pelo atrito em alta rotação, prevenidos com lubrificação periódica.",
    "relatedTerms": [
      "Ajuste de Ponto e Folga da Lançadeira",
      "Chapa de Agulha (Needle Throat Plate)",
      "Manutenção Preventiva",
      "Cera e Lubrificante de Linha / Óleo de Silicone Líquido"
    ],
    "tags": [
      "e-070",
      "expansao termica",
      "aquecimento",
      "lancadeira",
      "chapa de agulha",
      "lubrificacao",
      "manutencao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ORGAN NEEDLES. Heat Generation in High-Speed Machine Sewing & Thermal Dissipation. Tokyo, 2022.",
      "SCHMETZ. Needle Heating & Frictional Friction in Synthetic Fabrics. Herzogenrath, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "e-071-efeito-ponto-palito-paris-computadorizado",
    "code": "E-071",
    "letter": "E",
    "term": "Efeito Ponto Palito / Ponto Paris Computadorizado (Machine Hemstitch, Entredeux & Openwork Filó)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Técnicas de Bordado",
    "origin": "Da evolução digital da clássica bainha aberta e do entremeio francês 'Entredeux', reproduzida em máquinas computadorizadas com agulhas especiais asa (Wing Needle).",
    "summary": "Técnica que reproduz o tradicional ponto palito e entremeio vazado para união elegante de tecidos em panos de prato de luxo, toalhas e enxovais clássicos.",
    "definition": "O Efeito Ponto Palito Computadorizado (Machine Hemstitching / Entredeux & Ladder Stitch) é a técnica de digitalização e costura que gera furos regulares e vazados decorativos no tecido com amarração geométrica em escada (Ponto Paris / Ponto Ajour). Utilizando uma agulha especial com aletas laterais (Agulha Asa / Wing Needle) em tecidos de fibra natural com trama aberta (linho, cambraia, étamine ou percal), a máquina afasta os fios da trama sem cortá-los e os amarra com pontos de cetim finos, criando um entremeio vazado perfeito.",
    "technicalDetails": "Requer matriz digitalizada com movimento triplo de penetração no mesmo orifício (Ponto Estrela, Ponto Escada ou Ponto Paris), com comprimento de avanço de 2.5 mm a 3.0 mm e sem entretela adesiva que tampe os furos.",
    "beginnerExplanation": "É aquele bordado clássico que parece uma escadinha cheia de buraquinhos decorativos feitos no tecido, muito comum em barras de panos de prato de luxo, camisas de batizado e enxovais de bebê. A agulha abre os furinhos no pano com elegância e a máquina passa amarrando as laterais!",
    "howItWorks": [
      "1. A bordadeira instala a agulha asa (Wing Needle) na máquina.",
      "2. Monta o tecido de linho ou algodão puro no bastidor com entretela hidrossolúvel de base.",
      "3. A máquina executa o primeiro furo com a aleta lateral da agulha afastando a trama.",
      "4. Retorna no mesmo furo dando 2 a 3 batidas com a linha para firmar a abertura vazada.",
      "5. Avança 2.5 mm e abre o próximo buraquinho, amarrando com a linha superior e inferior.",
      "6. Ao lavar com água, a entretela solúvel se desfaz e a peça fica com a bainha aberta transparente e elegante."
    ],
    "applications": [
      "Barras decorativas de panos de prato sofisticados e toalhas de mesa em linho",
      "Roupas clássicas de batizado, vestidos de noiva vintage e camisas finas",
      "Fronhas, lençóis de percal e vira de lençol de berço de alto padrão"
    ],
    "commonErrors": [
      "❌ Usar tecidos sintéticos com trama muito fechada (como microfibra ou tactel), que não abrem os furos vazados característicos do ponto palito.",
      "❌ Usar entretela grossa de rasga-fácil que fica presa dentro dos buraquinhos vazados.",
      "❌ Bordar em velocidade excessiva com agulha asa, podendo quebrar as aletas laterais na chapa de agulha."
    ],
    "troubleshootingTips": [
      "Se os furos do ponto palito não estiverem ficando abertos e nítidos: Umedeça levemente o linho ou algodão antes de bordar com amido de passar roupa para dar firmeza às fibras da trama.",
      "Se a agulha asa estiver batendo na chapa: Certifique-se de que selecionou o modo de ponto central e que o calcador tem abertura larga (calcador aberto para zigue-zague/bordado livre)."
    ],
    "recommendedSettings": {
      "density": "Pontos de repetição tripla com avanço de 2.5 mm a 3.0 mm",
      "needleType": "Agulha Asa (Wing Needle tamanho 100/16 ou 120/19)",
      "stabilizer": "Entretela Hidrossolúvel de base",
      "speedPPM": "450 a 550 PPM"
    },
    "dicaArtrelados": "Para um ponto palito impecável em panos de prato de sacaria fina: use sempre linha 100% algodão 50wt no mesmo tom do tecido e entretela hidrossolúvel! Após borrifar água, os furos ficam perfeitamente abertos e a peça ganha valor de loja de enxoval de luxo!",
    "voceSabia": "Historicamente, o Ponto Paris e a Bainha Aberta eram feitos inteiramente à mão pelas rendeiras puxando e desfiando os fios do linho um a um, levando dias para fazer a barra de um único lençol!",
    "practicalExercise": "Coloque um pedaço de tecido de algodão cru ou linho no bastidor com entretela hidrossolúvel. Borde uma linha com a matriz de ponto palito usando agulha asa a 500 PPM. Lave com água morna e veja os lindos buraquinhos abertos se revelarem!",
    "quickSummary": "Técnica que reproduz o ponto palito e a bainha aberta tradicional com furos geométricos amarrados em tecidos naturais.",
    "relatedTerms": [
      "Agulha Asa (Wing Needle / Agulha de Bainha)",
      "Efeito Richelieu e Bordado Vazado",
      "Entretela Hidrossolúvel",
      "Ponto Decorativo e Ponto Motif"
    ],
    "tags": [
      "e-071",
      "ponto palito",
      "ponto paris",
      "hemstitch",
      "entredeux",
      "agulha asa",
      "enxoval classico",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ. Heirloom Sewing and Wing Needle Applications Guide. Herzogenrath, 2022.",
      "BROTHER. Decorative Hemstitching and Openwork Stitch Manual. Nagoya, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "e-072-enrolamento-conico-bobina-distribuicao-cruzada",
    "code": "E-072",
    "letter": "E",
    "term": "Enrolamento Cônico de Bobina e Distribuição Cruzada de Linha (Cross-Wound Bobbin Packing & Tension Uniformity)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Acessórios e Insumos",
    "origin": "Da tecnologia de bobinamento de precisão industrial com carretéis helicoidais cruzados para garantir saída de linha sem variações de tensão no fundo.",
    "summary": "Padrão de bobinamento cruzado em carretéis de linha inferior que evita que as espiras de fio se entrelacem ou travem dentro da caixa de bobina.",
    "definition": "O Enrolamento Cônico de Bobina com Distribuição Cruzada (Cross-Wound Bobbin System / Magnetic Core Precision Winding) é a tecnologia empregada no enchimento de bobinas industriais pré-enroladas (Pre-Wound Bobbins - Tipo L e Tipo 15/A). Em vez de enrolar o fio em camadas paralelas retas que podem escorregar para baixo (efeito cunha), a linha de poliéster 60wt é depositada em ângulos helicoidais cruzados de precisão, mantendo a tensão de saída perfeitamente uniforme desde o primeiro até o último metro de linha.",
    "technicalDetails": "Proporciona até 40% a mais de metros de linha no mesmo espaço físico do carretel plástico comum e reduz a inércia rotacional, evitando que a bobina continue girando solta quando a máquina para bruscamente.",
    "beginnerExplanation": "É o jeito especial como a linha de baixo é enrolada na canelinha de fábrica. Em vez de ser enrolada reta, ela é trançada em formato de 'X' bem apertadinho. Isso faz a linha sair macia e levinha sem dar trancos e sem embolar no avesso do bordado!",
    "howItWorks": [
      "1. A máquina industrial de bobinamento de precisão enrola o fio em padrão helicoidal de alta densidade.",
      "2. Ao ser inserida na caixa de bobina, a linha desenrola com resistência perfeitamente linear.",
      "3. Quando a máquina atinge 800 PPM e para de repente para um corte, a bobina para instantaneamente sem soltar linha de sobra.",
      "4. Elimina o risco de a espira de cima afundar entre as espiras de baixo (prevenindo travamento de linha).",
      "5. Garante que o avesso do bordado mantenha 1/3 exato de linha de bobina no centro da coluna de satin."
    ],
    "applications": [
      "Bordados em produção contínua com exigência de alta velocidade e zero quebra de linha",
      "Máquinas com sensores ópticos sensíveis de linha de bobina",
      "Padronização de tensão uniforme em bordados finos de logotipo e letras pequenas"
    ],
    "commonErrors": [
      "❌ Encher bobinas manualmente na máquina com a linha frouxa e sem passar pelo tensor de pré-tensão superior.",
      "❌ Misturar bobinas de alturas diferentes na mesma máquina (ex: colocar bobina alta Tipo A em máquina projetada para Tipo L).",
      "❌ Tentar rebobinar por cima de uma bobina pré-enrolada usada sem remover o restante de linha antiga."
    ],
    "troubleshootingTips": [
      "Se a linha de baixo estiver dando trancos e subindo para a frente do bordado a cada poucos minutos: Substitua a bobina manual por uma bobina pré-enrolada de fábrica (Pre-Wound) com núcleo magnético ou papelão lateral.",
      "Se a bobina estiver girando em falso após paradas de corte: Coloque a mola de freio redonda de aço (Brake Spring) no fundo da caixa de bobina."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "N/A",
      "stabilizer": "N/A",
      "speedPPM": "Velocidade padrão com bobinas pré-enroladas"
    },
    "dicaArtrelados": "Bobinas pré-bobinadas de fábrica com carretel magnético ou de papelão são o melhor investimento para o seu ateliê! Elas vêm com 120 metros de linha fininha e compacta, duram o dobro do tempo de uma canelinha feita em casa e deixam o verso do bordado uma verdadeira obra de arte!",
    "voceSabia": "Uma bobina pré-bobinada de fábrica contém em média 120 a 140 metros de linha 60wt, enquanto uma bobina cheia manualmente em máquina doméstica costuma acomodar apenas 60 a 75 metros!",
    "practicalExercise": "Compare uma bobina que você encheu na máquina com uma bobina pré-enrolada de fábrica: aperte ambas com os dedos. Note a firmeza absoluta e o alinhamento impecável dos fios na bobina cruzada!",
    "quickSummary": "Padrão helicoidal de enrolamento de linha na bobina que garante saída suave, sem trancos e com máxima metragem.",
    "relatedTerms": [
      "Caixa da Bobina",
      "Abastecimento Automático de Bobina e Enchedor Integrado",
      "Controle de Tensão da Linha",
      "Linha de Bobina / Fio de Fundo"
    ],
    "tags": [
      "e-072",
      "bobina",
      "enrolamento cruzado",
      "canelinha",
      "pre-wound",
      "tensao inferior",
      "acessorios",
      "artrelados"
    ],
    "bibliographicReferences": [
      "FIL-TEC. Magnetic Core Pre-Wound Bobbin Technology & Thread Delivery Dynamics. Hagerstown, 2022.",
      "SUPERIOR THREADS. Bobbin Thread Selection & Tension Calibration Guide. St. George, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "e-073-eixo-excentrico-calcador-regulador-pulo",
    "code": "E-073",
    "letter": "E",
    "term": "Eixo Excêntrico do Calcador e Regulador de Pulo (Eccentric Cam & Walking Foot Hover Mechanism)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Equipamentos e Máquinas",
    "origin": "Da cinemática de mecanismos excêntricos aplicados ao controle do calcador flutuante (Hopping Foot) em máquinas industriais de bordado.",
    "summary": "Mecanismo mecânico excêntrico que comanda a sincronia de subida, descida e pulo do calcador para que ele não esmague o tecido nem prenda no bastidor.",
    "definition": "O Eixo Excêntrico do Calcador e Regulador de Pulo (Presser Foot Eccentric Cam & Hopping Timing System) é o conjunto cinemático acoplado ao eixo superior da máquina de bordar composto por um came ovalado excêntrico, uma mola de amortecimento e uma biela reguladora. Esse mecanismo dita o momento exato em que o calcador desce para prensar levemente o tecido (enquanto a agulha penetra na chapa) e o momento em que ele sobe e 'flutua' (quando a agulha sai), liberando o bastidor para o salto do pantógrafo.",
    "technicalDetails": "Nas máquinas modernas com regulagem eletrônica de calcador, um motor de passo de precisão acoplado ao excêntrico permite alterar o curso vertical de 0.5 mm a 4.0 mm diretamente pela tela sensível ao toque, adaptando-se instantaneamente a toalhas felpudas ou relevo 3D.",
    "beginnerExplanation": "É o mecanismo de engrenagens dentro da máquina que faz o pezinho de metal 'pular' no ritmo exato da agulha. Ele desce bem na hora que a agulha fura o pano para segurar o tecido e sobe rapidinho para o bastidor poder se mexer sem raspar no pano!",
    "howItWorks": [
      "1. A rotação do eixo superior gira o came excêntrico.",
      "2. O perfil do came empurra a barra do calcador para baixo no instante em que a ponta da agulha toca o tecido.",
      "3. O calcador apoia sobre o tecido com a pressão correta, impedindo que o tecido levante junto com a agulha.",
      "4. Quando a agulha sai do tecido, a mola do excêntrico eleva o calcador a 1.5 mm de altura.",
      "5. O pantógrafo movimenta o bastidor livremente para a próxima coordenada X/Y.",
      "6. O ciclo se repete até 1.000 vezes por minuto com suavidade e sem choques mecânicos."
    ],
    "applications": [
      "Controle dinâmico de sustentação do tecido durante a formação da laçada",
      "Adaptação de altura para relevo com EVA 3D e materiais volumosos",
      "Eliminação de batidas e ruídos secos do calcador na chapa de agulha"
    ],
    "commonErrors": [
      "❌ Lubrificar a barra do calcador com óleo excessivo que escorre pela agulha e mancha o tecido do bordado.",
      "❌ Deixar o excêntrico fora de tempo após uma quebra violenta de agulha, fazendo o calcador descer atrasado e bater no tecido."
    ],
    "troubleshootingTips": [
      "Se a máquina estiver fazendo um barulho de 'clique metálico' alto a cada ponto: Verifique se a mola do amortecedor do calcador está no lugar ou se o parafuso regulador de altura está frouxo.",
      "Se o tecido estiver subindo junto com a agulha (flagging): Aumente a pressão ou abaixe ligeiramente a altura do calcador no menu digital."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "N/A",
      "stabilizer": "N/A",
      "speedPPM": "Velocidade padrão compatível"
    },
    "dicaArtrelados": "Se você estiver bordando materiais altos como toalhas felpudas ou bonés com EVA 3D e a máquina estiver estalando, entre nas configurações da máquina e aumente a 'Altura de Flutuação do Calcador' para 2.5 mm! O barulho some e o bordado flui livre!",
    "voceSabia": "O movimento de 'pulo' do calcador de bordado (Hopping Foot) acontece tão rápido a 1.000 PPM que o olho humano enxerga o calcador como se estivesse parado no ar flutuando sobre o tecido!",
    "practicalExercise": "Gire o volante manual da sua máquina bem devagar e observe atentamente: repare como o calcador desce milissegundos antes da agulha tocar o tecido e sobe assim que o olho da agulha passa da superfície. É o eixo excêntrico trabalhando!",
    "quickSummary": "Mecanismo que comanda a sincronia exata do pulo e flutuação do calcador para acompanhar a agulha e liberar o bastidor.",
    "relatedTerms": [
      "Calcador de Bordado / Calcador Pula-Pula",
      "Ajuste de Altura do Calcador para Tecidos Espessos",
      "Chapa de Agulha (Needle Throat Plate)",
      "Eixo Principal Superior"
    ],
    "tags": [
      "e-073",
      "excentrico",
      "calcador",
      "pulo do calcador",
      "hopping foot",
      "mecanica",
      "sincronismo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Hopping Foot Mechanics & Eccentric Drive Synchronization. Nagoya, 2022.",
      "BROTHER. Advanced Presser Foot Timing and Motor Drive Systems. Nagoya, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "e-074-estabilizador-termico-apliques-hidrofobico",
    "code": "E-074",
    "letter": "E",
    "term": "Estabilizador Térmico para Apliques e Entretela Hidrofóbica (Heat-Resistant Fusible Web & Appliqué Sealant)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Acessórios e Insumos",
    "origin": "Do desenvolvimento de filmes de copoliamida e poliuretano termofusíveis de alta resistência para adesão têxtil permanente em lavagens industriais.",
    "summary": "Filme termocolante de fusão a quente aplicado no verso de tecidos de aplique e patches para selar as bordas e fixar permanentemente na peça sem descolar.",
    "definition": "O Estabilizador Térmico para Apliques e Entretela Hidrofóbica (Permanent Fusible Web / Appliqué Sealant Film) é uma película adesiva termoplástica de dupla ação (ativada por prensa térmica ou ferro de passar a 130°C–160°C). Aplicada no verso do tecido de recorte do aplique antes do corte e da costura de acabamento, ela funde as fibras do aplique às fibras do tecido de base e repele a umidade (efeito hidrofóbico), impedindo que as bordas do tecido desfiem, enrolem ou se soltem mesmo após mais de 50 ciclos de lavagem pesada.",
    "technicalDetails": "Possui gramatura entre 30g/m² e 65g/m² com ponto de fusão rápido (10 a 15 segundos sob pressão média), mantendo o toque macio e flexível sem enrijecer o tecido nem acumular cola na agulha de bordar durante o contorno em ponto cheio.",
    "beginnerExplanation": "É um plástico termocolante definitivo que a gente cola com o ferro atrás do paninho do aplique ou do patch bordado. Ele funciona como uma cola mágica invisível: quando você passa o ferro quente, ele derrete e gruda o aplique para sempre na camiseta, não deixando as pontinhas desfiarem nem soltarem na máquina de lavar!",
    "howItWorks": [
      "1. A bordadeira posiciona o filme termocolante no verso do tecido do aplique e passa com ferro morno para pré-fixação.",
      "2. Corta o aplique no formato do desenho (manualmente com tesoura ou em plotter de corte a laser).",
      "3. Coloca a peça na máquina de bordar e executa o contorno de ponto cheio (satin) ou ponto caseado.",
      "4. Ao retirar a peça do bastidor, aplica a prensa térmica (ou ferro a 150°C por 15 segundos) com pressão firme.",
      "5. O adesivo penetra profundamente nas tramas de ambos os tecidos, criando uma união molecular permanente e impermeável.",
      "6. O aplique fica plano, sem rugas e resistente a lavagens constantes."
    ],
    "applications": [
      "Confecção de apliques e brasões em uniformes escolares e profissionais",
      "Patches termocolantes para jaquetas, bonés, mochilas e coletes motociclistas",
      "Enxovais infantis, bodies de bebê e toalhas personalizadas com aplique"
    ],
    "commonErrors": [
      "❌ Aplicar temperatura muito alta (acima de 180°C) que queima a resina termoplástica e destrói seu poder de aderência.",
      "❌ Não aplicar pressão suficiente durante a colagem final, deixando bolhas de ar entre os tecidos.",
      "❌ Lavar a peça bordada antes de completar 24 horas da prensagem térmica (tempo necessário para a cura total do adesivo)."
    ],
    "troubleshootingTips": [
      "Se a pontinha do aplique começar a levantar após a primeira lavagem: Aqueça a prensa térmica a 150°C, cubra com papel teflon e prense por mais 15 segundos com bastante pressão.",
      "Se a agulha estiver ficando pegajosa de cola durante o contorno: Use agulhas com revestimento antiaderente (Non-Stick / Anti-Glue) ou passe uma gota de silicone líquido na linha."
    ],
    "recommendedSettings": {
      "density": "Contorno em Satin 0.40 mm sobre a borda selada",
      "needleType": "75/11 Ponta Bola ou Antiaderente (Anti-Glue)",
      "stabilizer": "Entretela Rasga-Fácil na base",
      "speedPPM": "650 a 800 PPM"
    },
    "dicaArtrelados": "Para apliques perfeitos em bodies de bebê que nunca soltam e não espetam a pele: use o filme termocolante definitivo atrás do tecido do aplique e, depois de pronto, cubra o avesso do bordado com a entretela macia protetora de enxoval (Cloud Cover)! O acabamento fica macio como uma nuvem!",
    "voceSabia": "Os filmes termocolantes de poliuretano industrial foram desenvolvidos originalmente pela indústria aeroespacial para vedar trajes e revestimentos térmicos sem a necessidade de costuras perfurantes!",
    "practicalExercise": "Cole um pedaço de tecido de algodão com filme termocolante sobre um retalho de jeans usando o ferro quente por 15 segundos. Espere esfriar e tente puxar a borda: sinta a força incrível de fixação do filme permanente!",
    "quickSummary": "Filme termoplástico definitivo que funde tecidos de aplique na peça com calor, evitando desfiamentos e descolamentos.",
    "relatedTerms": [
      "Apliquê (Appliqué no Bordado Computadorizado)",
      "Etiqueta Termocolante, Filme Termoaderente e Aplicação a Quente",
      "Entretela Termocolante / Entretela Fusível",
      "Agulha Antiaderente / Agulha Anti-Glue"
    ],
    "tags": [
      "e-074",
      "termocolante",
      "aplique",
      "estabilizador termico",
      "patch",
      "prensa termica",
      "adesao permanente",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HEATNBOND. High-Bond Thermoplastic Adhesives for Textile Appliqué Guide. Charlotte, 2022.",
      "DEVEREUX, Keith. Appliqué Digitizing and Chemical Bonding Technology. Nottingham, 2021."
    ],
    "updatedAt": "2026-08-24"
  }
];

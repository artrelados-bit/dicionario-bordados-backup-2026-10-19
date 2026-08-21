import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART9: Verbete[] = [
  {
    id: "i-049-interrupcao-parada-emergencia-retomada-ponto",
    code: "I-049",
    term: "Interrupção por Parada de Emergência & Retomada de Ponto (E-Stop Interruption, Blackout Memory & Stitch Recovery)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Operação de Máquinas",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim interruptio (interrupção/corte abrupto) e do inglês Emergency Stop (E-Stop) / Power Recovery (recuperação de energia).",
    summary: "Botão de emergência (ou queda de luz) e o procedimento no painel da máquina para voltar 10 a 20 pontos e continuar o bordado sem falhas.",
    definition: "A Interrupção por Parada de Emergência, Memória de Queda de Energia e Retomada Precisa de Ponto (Emergency Stop - E-Stop Interruption, Power-Fail Recovery & Step-Back Stitch Calibration) é o protocolo operacional e mecatrônico de segurança executado quando a máquina de bordar é interrompida subitamente no meio de um trabalho (por acionamento do botão vermelho cogumelo de emergência, quebra severa de agulha com travamento, enrosco de tecido ou queda brusca de energia elétrica na rede). O sistema de recuperação grava na memória flash não-volátil a coordenada exata X/Y e o número ordinal do último ponto costurado (Stitch Counter), permitindo ao operador religar a máquina, recuar de 5 a 20 pontos no contador da tela e reiniciar a costura com sobreposição microscópica perfeita, sem criar nós acumulados nem deixar frestas no bordado.",
    technicalDetails: "Arquitetura do sistema de recuperação de ponto:\n• Memória não-volátil (EEPROM/Flash): Salva o estado da matriz e a contagem de pontos a cada ciclo de rotação;\n• Protocolo de Recuo Seguro (Step Back Calibration): Recuo manual de 5 a 15 pontos no painel touch antes da partida;\n• Justificativa técnica do recuo: Compensa a inércia da quebra de linha (onde a linha se rompe cerca de 5 a 10 pontos antes do sensor acusar a parada);\n• Retomada de Origem Absoluta: Calibração dos encoders dos servomotores X/Y garantindo alinhamento com tolerância < 0,05mm.",
    howItWorks: [
      "1. A máquina está bordando um brasão complexo de 40.000 pontos no ponto 22.450.",
      "2. Uma tesourinha cai perto do bastidor ou a linha dá um nó violento: a bordadeira bate com a palma da mão no botão vermelho 'E-Stop'.",
      "3. A máquina trava todos os motores instantaneamente em milissegundos por freio eletromagnético.",
      "4. A operadora desliga a máquina, remove o obstáculo, limpa os fios da agulha e religa o painel.",
      "5. O painel exibe a mensagem: 'Deseja continuar o bordado anterior a partir do ponto 22.450?'. Ela confirma 'Sim'.",
      "6. No painel touch, ela clica no botão de recuar (-10 pontos), posicionando a agulha exatamente no ponto 22.440.",
      "7. Passa a linha na agulha e pressiona o botão verde de Start.",
      "8. A máquina costura os 10 pontos por cima dos pontos anteriores, fazendo uma emenda perfeitamente invisível.",
      "9. O bordado continua até o final sem nenhum buraco e sem perder a peça cara do cliente.",
    ],
    beginnerExplanation: "É o 'salva-vidas' da sua máquina quando acontece um susto! Se a linha embolar, a agulha quebrar ou faltar luz no bairro no meio de um bordado de 1 hora, você não perde o trabalho! Quando você liga a máquina de novo, ela lembra exatamente em qual pontinho ela parou. Você só precisa voltar uns 10 pontinhos para trás no botão da tela para a costura começar emendando por cima e dar o Start de novo: a emenda fica 100% invisível!",
    applications: [
      "Recuperação de trabalhos interrompidos por quedas de energia elétrica e apagões",
      "Retomada suave após quebras de agulha e trocas de bobina esvaziada",
      "Parada imediata de segurança em caso de enrosco de tecido ou peças soltas",
      "Evita o descarte e perda financeira de peças nobres já semi-bordadas (jaquetas, vestidos)"
    ],
    commonErrors: [
      "Tirar o tecido do bastidor após uma queda de energia (se tirar do bastidor, é impossível reencaixar no ponto exato)",
      "Recomeçar exatamente no ponto da quebra sem recuar 10 pontos (cria um buraco sem linha entre os pontos)",
      "Mover o bastidor com as mãos com a máquina desligada descalibrando a posição dos motores"
    ],
    troubleshootingTips: [
      "REGRA DE OURO DA RETOMADA: Se a linha quebrou, recuem SEMPRE de 10 a 15 pontos no painel da máquina antes de dar a partida!",
      "Se faltar luz no ateliê, NUNCA solte o parafuso do bastidor nem mexa no braço do pantógrafo: espere a energia voltar com tudo intacto",
      "Após uma batida forte com parada de emergência, gire o volante manual da máquina com a mão em 360° para conferir se a lançadeira não travou antes de ligar o motor",
      "Em dias de chuva com oscilação de energia, utilize um No-break senoidal puro para alimentar sua máquina de bordar"
    ],
    dicaArtrelados: "Aprender a usar o botão de recuar pontos no painel da máquina é a habilidade que transforma o desespero de uma quebra de linha em uma emenda perfeita em 10 segundos! Mantenha a calma, volte 10 pontos e dê o play!",
    voceSabia: "Os botões de parada de emergência do tipo 'cogumelo vermelho' (E-Stop) foram inventados na Alemanha na década de 1950 com design ergonômico padronizado pela norma internacional ISO 13850 para que qualquer pessoa possa bater com o punho, cotovelo ou palma da mão mesmo de olhos vendados em caso de perigo!",
    practicalExercise: "No meio de um bordado de teste em um retalho, pressione o botão de Stop: pratique no painel da sua máquina como avançar e recuar 10 pontos usando os botões '+' e '-' para dominar a retomada perfeita!",
    quickSummary: "Procedimento seguro para recuar de 10 a 15 pontos e retomar o bordado perfeitamente após paradas de emergência.",
    relatedTerms: ["Quebra de Linha", "Painel de Controle Touchscreen", "No-Break Senoidal", "Sensor de Quebra de Linha"],
    tags: ["i-049", "parada de emergencia", "e-stop", "recuperacao de ponto", "queda de energia", "seguranca", "operacao", "artrelados"],
    bibliographicReferences: [
      "INDUSTRIAL CNC SAFETY STANDARDS & EMERGENCY RECOVERY PROTOCOLS (ISO 13850). Geneva, 2023.",
      "HIGH-SPEED EMBROIDERY MACHINE CONTROLLER ARCHITECTURE. Tokyo, 2022.",
      "ARTRELADOS. O Segredo da Retomada Perfeita: Como Salvar Bordados Interrompidos por Falta de Luz Sem Deixar Frestas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-050-insercao-de-ilhos-bordado-e-furo-central-eyelet",
    code: "I-050",
    term: "Inserção de Ilhós Bordado & Furo Central Automático (Embroidered Eyelet, Hole Piercing & Richelieu Digitizing)",
    letter: "I",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês œillet (pequeno olho / ilhós) e do francês Richelieu (bordado vazado em honra ao Cardeal Richelieu, séc. XVII).",
    summary: "Digitalização de anéis circulares vazados com reforço em ponto cheio e abertura central para passar cordões de shorts, capuzes e rendas.",
    definition: "A Inserção de Ilhós Bordado e Perfuração Central Automatizada (Embroidered Eyelet Digitizing / In-Hoop Hole Piercing & Richelieu Column Ring) é o método especializado de digitalização e costura de pequenos orifícios circulares ou ovais reforçados (de 3mm a 12mm de diâmetro) projetados para permitir a passagem de cordões de ajuste (em bermudas, moletons e capuzes), cadarços de calçados ou compor motivos vazados em bordados rendados tipo Richelieu e Broderie Anglaise. A matriz executa uma sequência técnica de três fases: 1) Costura de ancoragem circular dupla interna; 2) Abertura central (por corte manual com vazador, lâmina perfuradora Boring Device ou corte a laser); e 3) Cordão radial denso de ponto cheio perimétrico com compensação de repuxo que veda e protege a borda do tecido contra desfiamento.",
    technicalDetails: "Sequência estrutural do ilhós digitalizado:\n• Estrutura de base (Center Piercing Underlay): Círculo duplo de ponto corrido a 0,5mm da borda do furo;\n• Densidade de ponto cheio perimétrico: 0,35mm a 0,38mm com distribuição angular radial;\n• Largura da coluna de borda: 1,8mm a 2,5mm de largura para garantir abraçamento das fibras cortadas;\n• Dispositivo Boring Attachment: Lâmina cortadora de 4 pontas instalada na agulha industrial que abre o furo mecanicamente durante o bordado;\n• Resistência à tração: Suporta tração de cordões elásticos superior a 15 kgf sem rasgar o tecido.",
    howItWorks: [
      "1. A confecção precisa colocar dois ilhoses reforçados no cós de 500 bermudas esportivas para passar o cordão de amarrar.",
      "2. Em vez de aplicar ilhoses de metal prensado (que enferrujam e soltam na máquina de lavar), a estilista opta por ilhoses 100% bordados com a cor do tecido.",
      "3. No software, o programador utiliza a ferramenta 'Ilhós Automático / Eyelet Tool'.",
      "4. A máquina costura a linha circular de fixação e para.",
      "5. Com um vazador manual de couro de 4mm, a operadora fura o miolo do tecido no centro da marcação.",
      "6. A máquina dá a partida e costura um anel perfeito e brilhante de ponto cheio radial ao redor do furo.",
      "7. As bordas cortadas do tecido ficam totalmente embutidas e protegidas debaixo do bordado denso.",
      "8. O ilhós fica bonito, macio, lavável e nunca enferruja nem solta da roupa!",
    ],
    beginnerExplanation: "É o buraquinho redondo com moldura bordada que a gente usa para passar o cordão de amarrar a calça de moletom, o capuz do casaco ou para fazer toalhas rendadas cheias de furinhos lindos! A máquina costura uma rodinha, a gente fura o buraquinho no meio com uma ferramenta redondinha (vazador) e a máquina borda um anelzinho lindo e gordinho de ponto cheio em volta. Fica muito mais bonito e chique do que aquele ilhós de metal duro!",
    applications: [
      "Passadores de cordão em bermudas, moletons, vestidos e saias esportivas",
      "Bordados clássicos vazados tipo Richelieu e rendas Broderie Anglaise em toalhas de linho",
      "Furos de respiração e ventilação em bonés de beisebol (Eyelet Caps)",
      "Orifícios decorativos para passar fitas de cetim em enxovais de bebê"
    ],
    commonErrors: [
      "Fazer a borda do ponto cheio muito fina (menos de 1,5mm), fazendo o tecido cortado desfiar para fora do ilhós",
      "Furar o miolo fora de centro estragando a simetria do ilhós",
      "Usar entretela rasgável fraca que se rompe durante a perfuração do furo central"
    ],
    troubleshootingTips: [
      "Utilize SEMPRE entretela de corte (Cut-Away) pesada por baixo de ilhoses para garantir que a passagem do cordão não rasgue o tecido com o uso",
      "Utilize um vazador giratório de couro ou vazador de impacto de aço afiado de 4mm ou 5mm para abrir o miolo do furo com corte limpo",
      "No software, configure o ponto cheio radial com compensação de repuxo de +0,30mm para compensar a tração circular",
      "Em bonés, utilize a função de ilhós com ponto cheio reforçado (Heavy Eyelet) para máxima durabilidade esportiva"
    ],
    dicaArtrelados: "Oferecer ilhós bordado na mesma cor da linha em vez de ilhós de metal é um diferencial de luxo que valoriza muito uniformes e moletons! Não enferruja, não arranha e tem acabamento de confecção premium!",
    voceSabia: "Os bordados com ilhoses vazados (Broderie Anglaise) tornaram-se febre mundial no século XIX quando a Rainha Vitória da Inglaterra começou a usar vestidos de linho branco inteiramente cobertos por milhares de ilhoses bordados à mão por freiras em conventos da Irlanda!",
    practicalExercise: "No seu software, selecione a ferramenta de ilhós (Eyelet) e crie um anel de 8mm de diâmetro externo com furo interno de 4mm: borde em um retalho de sarja, abra o centro com o vazador e veja a resistência incrível da peça!",
    quickSummary: "Anéis bordados vazados com ponto cheio perimétrico para passagem de cordões de moletons, bonés e rendas.",
    relatedTerms: ["Boring Device / Lâmina Perfuradora", "Richelieu no Bordado", "Ponto Cheio / Ponto Satin", "Entretela de Recorte / Cut-Away"],
    tags: ["i-050", "ilhos", "eyelet", "furo bordado", "richelieu", "moletons", "bones", "artrelados"],
    bibliographicReferences: [
      "BRODERIE ANGLAISE & EYELET EMBROIDERY DIGITIZING. London, 2023.",
      "FUNCTIONAL APPAREL HARDWARE REPLACEMENT: EMBROIDERED EYELETS. Chicago, 2022.",
      "ARTRELADOS. O Charme dos Ilhoses Bordados: Como Programar e Fazer Furos Reforçados para Roupas e Enxovais Nobres. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-051-isolamento-de-ruido-eletrico-filtro-linha-emi",
    code: "I-051",
    term: "Isolamento de Ruído Elétrico & Filtro de Linha EMI/RFI (Electromagnetic Noise Isolation & Power Line Conditioning)",
    letter: "I",
    level: "Intermediário 🟡",
    category: "Elétrica & Eletrônica",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês Electromagnetic Interference (EMI) / Radio Frequency Interference (RFI) e do latim isolare (isolar/proteger).",
    summary: "Filtros de linha e protetores eletrônicos que eliminam ruídos elétricos da tomada (causados por ferros de passar e ar-condicionado) que travam o painel da máquina.",
    definition: "O Isolamento de Ruído Eletromagnético, Filtros EMI/RFI e Condicionamento de Energia Elétrica (Electromagnetic Noise Suppression, Line Reactors & EMI/RFI Power Conditioning) é o sistema de proteção eletrotécnica instalado na rede de alimentação da máquina de bordar computadorizada para filtrar espúrios, transientes de alta frequência e ruídos harmônicos conduzidos pela rede elétrica predial. Como as placas-mãe de máquinas de bordar modernas utilizam microprocessadores de alta densidade e conversores digital-analógicos sensíveis a variações de tensão na escala de milivolts, ruídos gerados por prensas térmicas, ferros de passar, compressores de ar-condicionado e motores de indução vizinhos podem induzir comandos fantasmas, travar a tela touch ou corromper arquivos durante a leitura via USB.",
    technicalDetails: "Especificações de filtragem eletromagnética para máquinas de bordar:\n• Tipo de filtro: Filtro passa-baixa LC de dupla célula (Indutores com núcleo de ferrite toroidal + capacitores X2 e Y2);\n• Faixa de atenuação: 150 kHz a 30 MHz com atenuação de ruído de modo comum e diferencial > 45 dB;\n• Proteção contra surtos (DPS Classe III): Varistor de óxido metálico (MOV) com absorção de energia > 400 Joules e tempo de resposta < 1 nanossegundo;\n• Aterramento funcional: Resistência de aterramento < 5 Ohms (obrigatório para escoamento de cargas eletrostáticas);\n• Diferencial de estabilizador comum: Não usar estabilizadores de relé comuns (os 'estalos' de troca de chave introduzem ruído destrutivo na placa-mãe).",
    howItWorks: [
      "1. No ateliê, a bordadeira liga uma prensa térmica de 2.000W na mesma régua de tomada da máquina de bordar.",
      "2. Toda vez que o termostato da prensa liga e desliga, uma faísca elétrica microscópica gera um pulso de ruído de alta frequência na rede.",
      "3. Esse ruído viaja pelos fios elétricos em direção à máquina de bordar.",
      "4. Se a máquina estiver ligada direto na tomada simples, o painel touchscreen congela e a máquina para no meio do bordado com erro de sistema.",
      "5. A bordadeira instala um Filtro de Linha Industrial Clamper com supressor EMI/RFI entre a tomada e a máquina.",
      "6. O circuito eletrônico do filtro absorve e escoa os ruídos de alta frequência para o fio terra em nanossegundos.",
      "7. A energia que entra na máquina de bordar é perfeitamente limpa, contínua e estável.",
      "8. A máquina opera por anos sem nenhum travamento de tela e sem queima de placas eletrônicas.",
    ],
    beginnerExplanation: "Sabe quando você liga o ferro de passar ou o secador de cabelo e a luz da sala dá uma piscadinha de leve? Esse 'tranco' invisível na energia viaja pelos fios e pode fazer a tela da sua máquina de bordar travar no meio do trabalho! O filtro de linha especial com isolador de ruído funciona como um 'filtro de água pura' para a eletricidade: ele limpa toda a sujeira e ruídos da tomada, fazendo sua máquina receber uma energia limpinha e saudável para nunca travar nem queimar a placa!",
    applications: [
      "Proteção de máquinas de bordar domésticas e industriais contra queima de placas-mãe",
      "Eliminação de travamentos repentinos de tela touch e erros de leitura em pen-drives",
      "Isolamento da máquina contra ruídos de prensas térmicas, ferros a vapor e ar-condicionado",
      "Proteção contra raios e surtos de tensão da rede elétrica durante tempestades"
    ],
    commonErrors: [
      "Usar 'benjamins' (Ts) e réguas plásticas de R$ 10 de supermercado que não têm nenhum circuito de proteção interna",
      "Ligar estabilizadores de computador velhos que ficam dando 'estalos' secos (o estalo gera um pico de tensão destrutivo)",
      "Trabalhar com a tomada sem aterramento elétrico (o pino do meio desligado)"
    ],
    troubleshootingTips: [
      "NUNCA use estabilizadores comuns de computador com relé em máquinas de bordar modernas!",
      "Invista em um protetor contra surtos e filtro de linha de marca certificada (como Clamper iCLAMPER Energia 5 ou Upsai)",
      "Certifique-se de que a tomada da sua máquina tenha o terceiro pino (Terra) devidamente conectado a uma haste de cobre no chão",
      "Ligue ferros de passar e prensas térmicas em tomadas e disjuntores SEPARADOS da tomada da máquina de bordar"
    ],
    dicaArtrelados: "Um bom filtro de linha industrial custa menos de R$ 80 e protege a placa da sua máquina que custa mais de R$ 3.000! É o seguro de vida mais barato e inteligente que você pode dar ao seu ateliê!",
    voceSabia: "As tempestades elétricas no Brasil geram mais de 100 milhões de raios por ano, tornando o país o campeão mundial em descargas atmosféricas; um único raio a 1 km de distância pode induzir milhares de volts na fiação do seu ateliê e queimar aparelhos desprotegidos!",
    practicalExercise: "Olhe para a tomada onde sua máquina está ligada: verifique se você está usando um filtro de linha com proteção DPS e se o plugue de 3 pinos está com o terra conectado!",
    quickSummary: "Filtros eletrônicos que limpam a energia da tomada, evitando que ruídos de ferros e motores travem a máquina.",
    relatedTerms: ["Aterramento Elétrico no Ateliê", "No-Break Senoidal", "Placa-Mãe e CPU da Máquina", "Painel Touchscreen"],
    tags: ["i-051", "ruido eletrico", "filtro de linha", "emi rfi", "protecao eletrica", "dps", "placa-mae", "artrelados"],
    bibliographicReferences: [
      "ELECTROMAGNETIC COMPATIBILITY (EMC) & NOISE MITIGATION IN INDUSTRIAL TEXTILE CNC. London, 2023.",
      "POWER QUALITY & TRANSIENT VOLTAGE SURGE SUPPRESSION (IEEE 1100). New York, 2022.",
      "ARTRELADOS. Energia Limpa, Máquina Segura: Como Proteger as Placas Eletrônicas da Sua Máquina Contra Travamentos e Raios. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-052-inclinacao-de-agulha-e-angulo-de-ataque-tecido",
    code: "I-052",
    term: "Inclinação de Agulha, Flexão Dinâmica & Ângulo de Penetração (Needle Deflection, Penetration Dynamics & Attack Angle)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Linhas & Agulhas",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim inclinatio (desvio angular) e deflectere (curvar/desviar). Cinemática mecatrônica de perfuração de materiais densos.",
    summary: "Desvio milimétrico que a agulha sofre ao furar tecidos duros (como couro ou bonés) e como evitar que ela entorte e bata na lançadeira.",
    definition: "A Inclinação de Agulha, Flexão Dinâmica e Ângulo de Penetração Tecidual (Needle Deflection Dynamics, Bending Stiffness & Penetration Angle Calibration) é o fenômeno da mecânica dos materiais no qual a haste da agulha de bordar sofre deflexão angular elástica ou flambagem milimétrica lateral no instante em que sua ponta colide contra estruturas têxteis densas, rígidas ou de trama fechada (como bonés estruturados com entretela dura, couro natural, lona encerada e emblemas multicamadas). Se a flexão ultrapassar 0,15mm, a cava da agulha (Scarf) sai da zona de sincronismo milimétrico com a ponta da lançadeira rotativa, resultando em colisões mecânicas destrutivas (Needle-to-Hook Strike), quebra imediata da agulha, rebarbas na lançadeira e falhas graves de laçada.",
    technicalDetails: "Metrologia e física de deflexão da agulha de bordar:\n• Folga padrão entre ponta da lançadeira e cava da agulha: 0,05mm a 0,10mm (Espessura de uma folha de papel sulfite);\n• Limite crítico de deflexão lateral: > 0,12mm (Risco iminente de colisão na lançadeira);\n• Rigidez estrutural da agulha (Schmetz / Groz-Beckert DBxK5): Haste reforçada com corpo cônico e geometria anti-deflexão (Gebedur com revestimento de Nitreto de Titânio - TiN);\n• Força de penetração: Até 35 N de força mecânica a 1.000 PPM em materiais rígidos;\n• Redução de flexão: Uso de agulhas calibre 80/12 ou 90/14 e desaceleração da velocidade da máquina para 600–700 PPM.",
    howItWorks: [
      "1. A máquina está bordando o painel frontal duro de um boné de beisebol com entretela plástica rígida de sustentação.",
      "2. Uma agulha fina comum 70/10 desce em alta velocidade a 900 PPM.",
      "3. Ao bater no tecido espesso e na costura central dura, a agulha fina enverga 0,2mm para a direita.",
      "4. A ponta afiada da lançadeira passa girando no mesmo milésimo de segundo: em vez de passar pela cava com folga, bate em cheio no corpo da agulha envergada.",
      "5. 'CLECK!': A agulha se quebra em pedaços e a lançadeira ganha uma ranhura afiada que passará a cortar a linha em todos os bordados seguintes.",
      "6. O operador técnico intervém: substitui a agulha por uma agulha especial reforçada com corpo de titânio (Groz-Beckert SAN 10 Gebedur 80/12).",
      "7. Reduz a velocidade da máquina para 650 PPM.",
      "8. A agulha de titânio perfura o boné duro reta como uma flecha sem envergar nem um micrômetro.",
      "9. A máquina conclui o lote de 200 bonés sem quebrar uma única agulha.",
    ],
    beginnerExplanation: "Quando a máquina vai furar tecidos duros e grossos (como a frente dura de um boné, couro ou tecido jeans grosso), se a agulha for muito fininha, ela dá uma 'entortadinha' para o lado na hora do impacto! Como as peças de metal lá dentro giram passando a menos de um fio de cabelo de distância da agulha, se a agulha entortar, ela bate com tudo nas peças de ferro da máquina e se quebra todinha! Para tecidos duros, a gente usa agulhas mais grossas ou com banho dourado de titânio, que não entortam de jeito nenhum!",
    applications: [
      "Bordados em bonés estruturados, chapéus e capacetes de proteção",
      "Bordados em jaquetas de couro natural, sintético, camurça e lona pesada",
      "Costura sobre emendas grossas de calças jeans e uniformes de brim pesado",
      "Prevenção de arranhões e danos caros na ponta da lançadeira rotativa"
    ],
    commonErrors: [
      "Usar agulhas finas 65/9 ou 70/10 para bordar a frente de bonés duros em alta velocidade",
      "Bordar sobre costuras grossas a 1.000 PPM sem desacelerar a máquina",
      "Continuar bordando após uma batida de agulha sem lixar a ponta da lançadeira para tirar rebarbas"
    ],
    troubleshootingTips: [
      "Para bonés e tecidos pesados, utilize SEMPRE agulhas calibre 80/12 ou 90/14 com tecnologia reforçada (como Groz-Beckert DBxK5 ou Schmetz Serv 7)",
      "Utilize agulhas douradas com revestimento de Nitreto de Titânio (Titanium / Gebedur): elas são 4 vezes mais resistentes à flexão do que agulhas de cromo comuns",
      "Em bonés, reduza a velocidade da máquina para 600 a 700 PPM para diminuir o impacto de choque na agulha",
      "Após qualquer quebra de agulha com barulho de batida, passe a unha na ponta da lançadeira: se sentir um 'dente' áspero, use uma lixa d'água 1200 com óleo para polir na hora"
    ],
    dicaArtrelados: "As agulhas de titânio (aquelas douradinhas) são o melhor investimento para quem borda bonés e tecidos grossos! Elas não entortam, duram 5 vezes mais e protegem a lançadeira da sua máquina contra batidas caras!",
    voceSabia: "A velocidade instantânea com que a ponta da agulha atinge o tecido em uma máquina de bordar industrial a 1.200 PPM é de aproximadamente 40 km/h, gerando uma pressão de impacto concentrada equivalente a mais de 2 toneladas por centímetro quadrado na ponta milimétrica da agulha!",
    practicalExercise: "Pegue uma agulha fina 70/10 e uma agulha grossa 90/14: tente entortar a ponta de cada uma suavemente com o polegar para sentir a diferença absurda de rigidez que a agulha mais grossa possui!",
    quickSummary: "Flexão da agulha ao furar tecidos duros e o uso de agulhas reforçadas de titânio para evitar quebras e colisões na lançadeira.",
    relatedTerms: ["Lançadeira Rotativa", "Agulhas de Titânio / Gebedur", "Bordado em Bonés", "Velocidade PPM"],
    tags: ["i-052", "inclinacao de agulha", "deflexao", "agulha de titanio", "bones", "couro", "lancadeira", "artrelados"],
    bibliographicReferences: [
      "NEEDLE DEFLECTION & DYNAMIC HOOK COLLISION MECHANICS IN HIGH-SPEED EMBROIDERY. Albstadt, 2023.",
      "MATERIALS SCIENCE & TITANIUM NITRIDE COATINGS IN SEWING NEEDLES. Aachen, 2022.",
      "ARTRELADOS. Bonés e Couro Sem Quebras: O Guia de Rigidez de Agulhas para Acabar com as Batidas de Lançadeira. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-053-impressao-de-catalogo-e-folha-ordem-servico-pdf",
    code: "I-053",
    term: "Impressão de Folha de Produção & Ordem de Serviço PDF (Production Worksheet, Run-Sheet & Color Recipe PDF)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Gestão do Ateliê",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim impressio (gravação em papel) e do inglês Production Worksheet / Run-Sheet (folha de execução fabril).",
    summary: "Documento técnico impresso em PDF gerado pelo software com a foto do bordado, lista exata de cores, tamanho, tempo e ordem de agulhas para a operadora.",
    definition: "A Folha de Produção Técnica, Ficha de Ordem de Serviço e Receituário Cromático em PDF (Embroidery Production Worksheet / Run-Sheet & Thread Color Recipe Document) é o documento técnico padronizado gerado automaticamente pelos softwares de bordado (Wilcom, Hatch, Tajima DG, Embird) que acompanha fisicamente o lote de peças na linha de costura do ateliê. Contendo a foto em escala real (1:1) ou renderização 3D TrueView, dimensões milimétricas precisas (largura × altura), contagem exata de pontos, tempo estimado de máquina em minutos, gabarito de posicionamento com cruz de centro e a sequência cronológica rigorosa de trocas de cor (com código de catálogo, fabricante, nome do tom e correspondência do número da agulha na máquina), a folha elimina erros de produção, trocas incorretas de linha e divergências com o cliente final.",
    technicalDetails: "Elementos normativos da Folha de Produção Artrelados:\n• Cabeçalho de Identificação: Nome do arquivo, cliente, data, operador e código da OS;\n• Dimensões e Contagem: Largura (mm) × Altura (mm), Total de Pontos, Número de Cores e Número de Paradas (Stops);\n• Receita de Cores (Color Sequence): Código exato do fabricante da linha (ex: Isacord 1902 Vermelho), agulha correspondente (ex: Agulha 4) e consumo estimado em metros;\n• Imagem Técnica e Gabarito: Impressão em escala 1:1 com mira cartesiana central (Crosshairs) para alinhamento físico no bastidor;\n• Campo de Assinatura de Qualidade: Rubrica da bordadeira após a inspeção visual dos 10 passos.",
    howItWorks: [
      "1. O programador finaliza a matriz do logotipo de uma clínica médica com 4 cores de linha.",
      "2. No software, clica em 'Imprimir Folha de Produção / Print Worksheet' e gera um arquivo PDF.",
      "3. A operadora da máquina recebe o PDF impresso na prancheta de produção do ateliê.",
      "4. Ao olhar a folha, ela vê exatamente: 'Troca 1: Branco (Agulha 1); Troca 2: Verde Água (Agulha 5); Troca 3: Azul Marinho (Agulha 3); Troca 4: Dourado (Agulha 8)'.",
      "5. Ela recorta o gabarito em escala 1:1 do papel e posiciona sobre o bolso do jaleco médico para marcar o centro com alfinete.",
      "6. Programa a ordem de agulhas na máquina seguindo a folha sem nenhuma dúvida.",
      "7. As 50 peças são bordadas com 100% de precisão de cores e na posição perfeita.",
      "8. A folha é arquivada na pasta do cliente para garantir que daqui a 6 meses o próximo pedido saia idêntico!",
    ],
    beginnerExplanation: "É a 'receita de bolo' impressa do seu bordado! É uma folha que o programa de computador cria com a foto do desenho, o tamanho certinho em centímetros, quanto tempo a máquina vai demorar e a listinha de todas as cores de linha que você precisa colocar na máquina, passo a passo! Com essa folha na mão, você nunca erra a cor da linha, sabe exatamente onde posicionar o bordado na roupa e pode guardar para quando a mesma cliente pedir mais peças no ano que vem!",
    applications: [
      "Guia técnico diário de trabalho para operadoras em ateliês e fábricas de bordado",
      "Gabarito físico em tamanho real (escala 1:1) para centralização milimétrica no tecido",
      "Rastreabilidade histórica e fidelidade de cores para pedidos recorrentes de empresas",
      "Anexo formal de aprovação comercial enviado ao cliente com o orçamento em PDF"
    ],
    commonErrors: [
      "Bordar 'de cabeça' sem imprimir ou olhar a folha técnica (trocar as cores de ordem ou bordar de cabeça para baixo)",
      "Imprimir a folha com escala ajustada (Fit to Page) em vez de escala 1:1 real, distorcendo o gabarito de papel",
      "Não anotar alterações de cores feitas de última hora na ficha do cliente"
    ],
    troubleshootingTips: [
      "Ao imprimir o PDF, selecione SEMPRE a opção 'Tamanho Real / Escala 100%' nas opções da impressora para que o gabarito de papel saia com o tamanho exato da matriz",
      "Utilize o gabarito de papel recortado para colocar sobre a peça de roupa do cliente e validar o posicionamento junto com ele antes de bordar",
      "Cole a folha de produção com uma fita crepe na bancada ao lado da máquina durante o bordado",
      "Mantenha uma pasta digital no Google Drive com os PDFs de produção de todos os seus clientes organizados por pastas"
    ],
    dicaArtrelados: "Trabalhar com a Folha de Produção impressa é o que separa um ateliê amador de uma empresa profissional e lucrativa! Seus clientes ficam encantados ao ver a organização e você nunca mais perde uma peça por erro de cor!",
    voceSabia: "As primeiras 'folhas de produção' de bordado da história foram os 'Cartões Jacquard' perfurados de madeira criados na França em 1804, onde cada cartão continha a receita mecânica que comandava as agulhas do tear!",
    practicalExercise: "No seu software, abra qualquer matriz pronta e vá em Arquivo -> Imprimir Pré-Visualização / Print Preview: explore todas as informações técnicas que o programa calcula automaticamente para você!",
    quickSummary: "Documento técnico em PDF com foto, cores, medidas e gabarito 1:1 para guiar a produção sem erros.",
    relatedTerms: ["Folha de Produção & Gabarito", "Paleta de Cores", "Identificação de Lote de Linhas", "Gabarito de Bastidor"],
    tags: ["i-053", "folha de producao", "ordem de servico", "pdf", "gabarito", "gestao", "organizacao", "artrelados"],
    bibliographicReferences: [
      "PRODUCTION WORKFLOW & TECHNICAL DOCUMENTATION IN APPAREL CAD. New York, 2023.",
      "THE EMBROIDERY WORKSHOP MANAGEMENT HANDBOOK. Sydney, 2022.",
      "ARTRELADOS. Organização de Alta Performance: Como Usar Folhas de Produção Técnicas para Zerar Erros no Seu Ateliê. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-054-intercambio-formatos-matriz-dst-pes-exp-jef-hus-xxx",
    code: "I-054",
    term: "Intercâmbio de Formatos de Matriz & Cabeçalhos Técnicos - DST, PES, EXP, JEF, HUS, XXX (Embroidery File Format Interoperability & Headers)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim intercambium (troca recíproca) e das extensões proprietárias industriais (Tajima .DST, Brother .PES, Melco/Bernina .EXP, Janome .JEF, Husqvarna .HUS, Singer .XXX).",
    summary: "Conversão e exportação correta entre os diferentes formatos de arquivos de bordado que cada marca de máquina reconhece no pen-drive.",
    definition: "O Intercâmbio de Formatos de Matriz e Compatibilidade de Cabeçalhos Técnicos (Embroidery File Format Interoperability, Header Parsing & Cross-Brand Conversion Protocols - DST, PES, EXP, JEF, HUS, VP3, XXX) é o conjunto de protocolos de tradução computacional que converte arquivos mestres baseados em objetos vetoriais com propriedades nativas (.EMB / .JAN / .ART) em arquivos de código de máquina baseados em comandos de pontos discretos (Stitch Files). Cada fabricante de máquinas de bordar utiliza uma estrutura binária proprietária de cabeçalho (Header com dimensões, número de pontos e paradas) e tabelas de comandos de salto (Jumps), corte (Trims) e trocas de cor (Stops), exigindo que o arquivo exportado seja rigorosamente compatível com o hardware receptor.",
    technicalDetails: "Matriz comparativa de formatos de arquivos de bordado:\n• .DST (Tajima): Padrão universal industrial global (apenas coordenadas X/Y e comandos de salto/corte; NÃO armazena paleta de cores interna);\n• .PES (Brother / Baby Lock): Formato doméstico/semi-industrial mais popular do mundo (armazena cores de catálogo, pré-visualização e dados de bastidor);\n• .JEF / .JPX (Janome / Elna): Formato binário compacto com limite estrito de área de bastidor e lista de cores próprias Janome;\n• .EXP (Bernina / Melco): Formato binário sem cores internas mas com alta precisão de ponto para máquinas industriais;\n• .XXX (Singer): Formato proprietário clássico para máquinas domésticas Singer Quantum e Futura;\n• .VP3 / .HUS (Husqvarna Viking / Pfaff): Formato europeu com informações detalhadas de linhas e bastidores inteligentes.",
    howItWorks: [
      "1. A programadora de matrizes cria um lindo arranjo floral no software Wilcom e salva o arquivo mestre em formato .EMB com todos os objetos vetoriais editáveis.",
      "2. Ela atende três clientes com máquinas diferentes: Cliente A tem uma Brother (usa .PES), Cliente B tem uma Janome (usa .JEF) e Cliente C tem uma máquina industrial Tajima (usa .DST).",
      "3. No software, ela clica em 'Salvar Como / Exportar Arquivo de Máquina'.",
      "4. Exporta a versão .PES para a cliente da Brother (com a foto e as cores perfeitas na tela da máquina).",
      "5. Exporta a versão .JEF para a cliente da Janome (já centralizada dentro do bastidor 14x20cm).",
      "6. Exporta a versão .DST para o cliente industrial com a folha de produção em PDF anexa (já que o .DST não carrega as cores automáticas).",
      "7. Todos os três clientes colocam o pen-drive em suas respectivas máquinas e o bordado roda com 100% de sucesso sem erros de leitura.",
    ],
    beginnerExplanation: "É como os idiomas diferentes que cada marca de máquina de bordar fala! A máquina Brother fala a língua '.PES', a máquina Janome fala a língua '.JEF', a máquina Singer fala '.XXX' e as máquinas industriais grandes falam a língua '.DST'! O seu programa de computador é o tradutor universal: você cria o desenho uma vez só e salva na extensão certinha que a sua máquina lê no pen-drive!",
    applications: [
      "Venda e distribuição de matrizes para bordadeiras de todas as marcas do mercado",
      "Exportação correta de arquivos para pen-drives de máquinas Brother, Janome, Bernina, Singer e industriais",
      "Conversão segura de matrizes antigas para formatos modernos sem perda de dados",
      "Padronização de arquivos mestres industriais para exportação global"
    ],
    commonErrors: [
      "Salvar arquivo .DST para máquina doméstica e achar que o arquivo 'estragou' porque as cores aparecem trocadas na tela (o formato .DST não salva cores, apenas pontos!)",
      "Tentar abrir arquivos de máquina (.PES / .JEF) e achar que dá para editar nós com a mesma facilidade de um arquivo mestre vetorial (.EMB)",
      "Colocar um arquivo maior do que o bastidor máximo da máquina Janome no formato .JEF (a máquina simplesmente não enxerga o arquivo no pen-drive)"
    ],
    troubleshootingTips: [
      "Guarde SEMPRE o arquivo mestre original (.EMB do Wilcom ou .ART da Bernina) com você: ele é o único que permite editar e redimensionar o desenho sem perder qualidade no futuro!",
      "Para máquinas Janome (.JEF), certifique-se de que o desenho esteja 100% centralizado e dentro das medidas exatas do bastidor antes de exportar",
      "Ao enviar arquivos em .DST, anexe SEMPRE a Folha de Produção em PDF para que o operador saiba quais cores colocar em cada agulha",
      "Utilize pen-drives de baixa capacidade (2GB a 8GB) formatados em FAT32 para garantir compatibilidade com painéis de máquinas"
    ],
    dicaArtrelados: "Nunca venda ou envie seu arquivo mestre (.EMB) para clientes! Exporte apenas o formato de máquina que a cliente usa (.PES ou .JEF) acompanhado da Folha de Produção em PDF! Isso protege sua matriz contra pirataria e garante um suporte perfeito!",
    voceSabia: "O formato .DST foi criado pela empresa japonesa Tajima na década de 1980 e é baseado no código ternário de fitas perfuradas de papel de teares industriais; por ser tão simples e robusto, o .DST continua sendo o padrão mundial mais confiável da indústria têxtil até hoje!",
    practicalExercise: "No seu software de matriz, pegue um desenho pronto e vá em 'Salvar Como': salve o mesmo desenho nas extensões .PES, .JEF e .DST para ver como o programa gera os diferentes arquivos de máquina em segundos!",
    quickSummary: "Formatos de arquivos específicos que cada marca de máquina lê no pen-drive (.PES, .JEF, .DST, .EXP).",
    relatedTerms: ["Importação Vetorial", "Pen-Drive para Máquina de Bordar", "Folha de Produção & Gabarito", "Wilcom EmbroideryStudio"],
    tags: ["i-054", "formatos de matriz", "dst", "pes", "jef", "exp", "xxx", "conversao", "software", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY FILE FORMAT ARCHITECTURE & DATA STRUCTURES. Tokyo, 2023.",
      "THE UNIVERSAL GUIDE TO EMBROIDERY MACHINE COMPATIBILITY. Chicago, 2022.",
      "ARTRELADOS. O Guia Supremo dos Formatos de Matriz: Entenda de Vez as Extensões PES, JEF, DST e EXP e Nunca Mais Tenha Arquivos Rejeitados. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-055-iluminacao-de-trabalho-led-alto-cri-cabecote",
    code: "I-055",
    term: "Iluminação de Trabalho LED de Alto CRI no Cabeçote (High-CRI Head LED Task Lighting & Glare Elimination)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Gestão do Ateliê",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do inglês Light Emitting Diode (LED) e Color Rendering Index (CRI / Índice de Reprodução de Cor - IRC).",
    summary: "Fita ou luminária LED de luz neutra e alto índice de fidelidade de cor (CRI > 90) instalada no braço da máquina para iluminar a agulha sem sombras nem cansaço visual.",
    definition: "A Iluminação de Trabalho LED de Alto Índice de Reprodução Cromática (High-CRI LED Needle-Area Task Lighting & Glare-Free Workspace Illumination) é a instalação de sistemas luminotécnicos de diodos emissores de luz (LED) de alto desempenho (CRI / IRC ≥ 90 a 95 com temperatura de cor neutra calibrada entre 5.000K e 5.700K - Daylight) estrategicamente fixados sob o braço superior do cabeçote e ao redor da barra de agulha da máquina de bordar. O sistema projeta uma iluminação homogênea, sem sombras duras, sem efeito estroboscópico (flicker-free) e sem emissão de calor infravermelho sobre a área de costura, garantindo que a bordadeira enxergue com máxima nitidez a passagem de linha no olho da agulha e distinga nuances sutis de cores de linha sem fadiga ocular durante longas jornadas de produção.",
    technicalDetails: "Parâmetros luminotécnicos de iluminação de precisão:\n• Índice de Reprodução de Cor (CRI / Ra): > 90 Ra (Fidelidade absoluta de cor idêntica à luz solar natural);\n• Temperatura de cor correlacionada (CCT): 5.000K a 5.500K (Branco neutro - nem amarelado nem azulado);\n• Iluminância no ponto de costura: 1.500 a 2.500 Lux na chapa de agulha (NBR ISO/CIE 8995-1 para trabalhos de altíssima precisão visual);\n• Índice de flicker (Flicker Index): < 0,02 (Luz contínua sem oscilação de frequência de 60 Hz);\n• Emissão térmica: < 2W de dissipação de calor (não resseca nem esquenta as linhas de bordar).",
    howItWorks: [
      "1. A bordadeira trabalha em um ateliê iluminado por uma lâmpada amarelada comum de teto que gera sombras escuras sob o cabeçote da máquina.",
      "2. Ao final da tarde, seus olhos ardem, ela tem dificuldade para passar a linha na agulha e não consegue ter certeza se a linha é azul marinho ou preta.",
      "3. Ela instala uma fita flexível de LED de alta fidelidade (CRI 95, 5.000K) colada sob o vão livre do braço da máquina.",
      "4. A área de costura e a chapa de agulha são inundadas por uma luz clara, brilhante e uniforme como a luz do meio-dia.",
      "5. Todas as sombras escuras desaparecem.",
      "6. A passagem de linha torna-se instantânea e a operadora enxerga cada microponto e nó com clareza cristalina.",
      "7. A produtividade aumenta, o cansaço visual desaparece e a precisão do trabalho atinge o padrão máximo de qualidade.",
    ],
    beginnerExplanation: "É a luzinha mágica que faz você enxergar tudo com clareza de cinema! Muitas máquinas vêm de fábrica com uma luzinha fraca ou amarela que cansa a vista e faz sombra bem onde a agulha fura o pano. Quando você coloca uma fitinha de LED branco neutro coladinha no braço da máquina, a luz ilumina a agulha perfeitamente! Passar a linha no buraquinho da agulha fica super fácil, você vê as cores reais dos fios e pode bordar horas seguidas sem dor de cabeça nem vista cansada!",
    applications: [
      "Iluminação cirúrgica da barra de agulha para passagem de linha e inspeção de pontos",
      "Fidelidade total na distinção visual de tons de linhas semelhantes (preto vs marinho, prata vs cinza)",
      "Redução drástica da fadiga ocular e dores de cabeça em operadoras de bordado",
      "Gravação de vídeos e fotos de alta resolução para redes sociais mostrando o bordado em movimento"
    ],
    commonErrors: [
      "Usar lâmpadas amareladas incandescentes que esquentam e derretem a linha sintética",
      "Usar lâmpadas fluorescentes que piscam em 60 Hz causando efeito estroboscópico com a agulha em alta velocidade",
      "Trabalhar em ambientes com menos de 500 Lux forçando a visão durante a passagem de linha"
    ],
    troubleshootingTips: [
      "Instale fitas de LED autocolantes alimentadas por USB ou fonte de 12V coladas diretamente na curva interna do braço da máquina",
      "Escolha SEMPRE LEDs com especificação de 'Luz Neutra' (entre 5.000K e 5.500K) e CRI > 90 para não distorcer as cores reais das linhas",
      "Se sua máquina tiver iluminação fraca original, você pode comprar luminárias magnéticas flexíveis de pescoço de ganso para fixar na lateral da máquina",
      "Mantenha a lente do LED limpa passando um pano seco semanalmente para remover o pó de entretela acumulado"
    ],
    dicaArtrelados: "Uma fitinha de LED de R$ 30 colada na sua máquina vai mudar a sua vida no ateliê! Você passa a linha no olho da agulha de primeira e suas fotos e vídeos no Instagram vão parecer profissionais de estúdio de gravação!",
    voceSabia: "O conceito de CRI (Índice de Reprodução Cromática) foi estabelecido pela Comissão Internacional de Iluminação (CIE) em 1965 para medir a capacidade de uma fonte de luz artificial de revelar as cores verdadeiras dos objetos em comparação com a luz solar natural (que tem CRI 100 perfeito)!",
    practicalExercise: "Coloque um cone de linha azul marinho e um cone de linha preta lado a lado sob a luz da sua máquina: se você tiver dificuldade para distinguir qual é qual em 1 segundo, sua iluminação precisa de um upgrade de LED urgente!",
    quickSummary: "Luz LED neutra e potente instalada no braço da máquina que elimina sombras e facilita a passagem de linha.",
    relatedTerms: ["Passagem de Linha Correta", "Inspeção Visual de Pontos", "Ergonomia no Ateliê", "Controle de Qualidade"],
    tags: ["i-055", "iluminacao led", "alto cri", "cabecote", "ergonomia", "fadiga visual", "passagem de linha", "artrelados"],
    bibliographicReferences: [
      "ERGONOMICS OF WORKPLACE LIGHTING & HIGH-CRI LED STANDARDS (ISO 8995-1). Geneva, 2023.",
      "VISUAL FATIGUE & COLOR PERCEPTION IN PRECISION APPAREL MANUFACTURING. London, 2022.",
      "ARTRELADOS. Iluminação Perfeita no Ateliê: Como a Luz Certa Transforma Seus Bordados e Salva Sua Visão. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

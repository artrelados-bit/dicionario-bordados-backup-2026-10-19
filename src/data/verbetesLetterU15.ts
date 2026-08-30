import { Verbete } from "../types";

export const VERBETES_LETTER_U15: Verbete[] = [
  {
    id: "u-089-underlay-contorno-duplo-e-selagem-de-borda",
    code: "U-089",
    term: "Underlay Contorno Duplo e Selagem de Borda (Double Edge-Walk Underlay & Border Sealing Architecture)",
    pronunciation: "an-der-lei con-tor-no du-plo e se-la-gem de bor-da",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do inglês 'underlay' (camada de base) e 'edge-walk' (caminhada de borda). Técnica clássica de digitalização de alta definição para colunas satim perfeitas.",
    summary: "Passagem dupla de ponto corrido paralela às duas margens externas da coluna de cetim, erguendo as laterais e criando contornos perfeitamente nítidos sem serrilhados.",
    definition: "O Underlay Contorno Duplo e Selagem de Borda (Double Edge-Walk Underlay & Edge Wall Architecture) é uma estrutura de subponto programada ao longo de ambos os limites perimétricos longitudinais de uma coluna de ponto cheio (satim). A máquina executa duas trajetórias lineares contínuas de ponto corrido com recuo calibrado da margem externa: a primeira descendo por uma lateral e a segunda subindo pela lateral oposta. Esse par de trilhos eleva as extremidades dos pontos de cobertura (*topstitch*), atua como barreira mecânica que impede o afundamento das bordas nas fibras do tecido e bloqueia o escape de felpas ou fios desfiados.",
    technicalDetails: "Programado com comprimento de ponto de 2,0 mm a 2,8 mm e recuo perimétrico (*Inset Margin*) de 0,35 mm a 0,55 mm da borda real. Em colunas de satim com largura superior a 2,5 mm, deve ser associado a um underlay central (*Center Run*) ou zigue-zague aberto para evitar o colapso do centro da coluna.",
    beginnerExplanation: "São duas linhas de costura retas que a máquina faz escondidas embaixo do ponto cheio, uma em cada beiradinha da letra ou do desenho. Elas funcionam como pequenos 'trilhos de trem' que levantam as pontas do bordado, deixando o contorno retinho e afiado como uma lâmina, sem aqueles dentes serrilhados!",
    howItWorks: [
      "1. A máquina inicia a coluna costurando uma linha de ponto corrido pela margem esquerda.",
      "2. Ao chegar no final do segmento, faz a curva e sobe costurando pela margem direita com recuo exato.",
      "3. Os dois trilhos de sustentação delimitam a largura exata da coluna e prendem o tecido na entretela.",
      "4. A máquina inicia o ponto de acabamento em cetim que passa por cima dos dois trilhos.",
      "5. O ponto cheio apoia suas extremidades sobre os trilhos elevados, mantendo as bordas altas e retas.",
      "6. O contorno visual final fica perfeitamente nítido, limpo e com brilho uniforme em toda a extensão."
    ],
    applications: [
      "Letras em ponto cheio de logotipos corporativos em camisas polo e jalecos.",
      "Bordas perimetrais e molduras de brasões e patches com acabamento premium.",
      "Bordados em tecidos propensos a desfiar (linho rústico, sarja leve e cetim).",
      "Colunas de cetim em toalhas felpudas para criar uma cerca que impede os pelos de saírem nas laterais."
    ],
    characteristics: [
      "Confere nitidez ótica e linearidade incomparável aos contornos de texto.",
      "Evita que as bordas do ponto cheio afundem no tecido criando sombras irregulares.",
      "Consome pouquíssimos pontos e segundos de máquina em troca de alta qualidade visual."
    ],
    commonErrors: [
      "❌ Colocar a margem de recuo muito pequena (< 0,2 mm), fazendo os pontos da base escaparem para fora do ponto cheio.",
      "❌ Usar em colunas ultrafinas (< 1,2 mm), onde as duas linhas de borda se sobrepõem e engrossam o tecido.",
      "❌ Usar pontos de contorno excessivamente longos (> 3,5 mm) em curvas fechadas."
    ],
    troubleshootingTips: [
      "Aparecem pontinhos da linha de base saindo dos lados da letra: aumente o recuo da margem (Inset Margin) para 0,45 mm no software de digitalização.",
      "A borda da coluna de cetim ficou com aspecto denteado e irregular: ative o 'Double Edge-Walk' nas propriedades de underlay da matriz.",
      "A letra ficou muito dura no meio e alta nas pontas: adicione um 'Center Walk' ou zigue-zague suave no centro da coluna."
    ],
    dicaArtrelados: "Para letrinhas e textos médios ficarem com acabamento de alfaiataria: NUNCA use ponto cheio puro sem base! Ative SEMPRE o 'Double Edge Walk' (contorno duplo de borda)! Ele cria uma paredinha nas laterais que deixa as letras legíveis até a metros de distância!",
    voceSabia: "Na caligrafia manual gótica da Idade Média, os monges copistas traçavam duas linhas de grafite ultrafinas nas margens antes de pintar com tinta e pó de ouro para que a pena nunca vazasse do limite exato da letra!",
    practicalExercise: "Digitalize duas colunas de cetim de 4 mm de largura com o mesmo texto: a primeira com underlay Center Walk simples e a segunda com Double Edge Walk. Borde em piquet e observe a nitidez superior das bordas na segunda amostra.",
    quickSummary: "Underlay Contorno Duplo é a passagem de duas costuras de base nas margens laterais que erguem o ponto cheio e garantem contornos afiados e sem serrilhados.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11",
      density: "Comprimento de ponto: 2.2 a 2.5 mm | Recuo: 0.40 mm"
    },
    relatedTerms: [
      "Underlay Center Walk",
      "Ponto Cheio (Satin Stitch)",
      "Recuo Perimétrico (Inset Margin)",
      "Nitidez de Contorno",
      "Topstitch (Ponto de Cobertura)"
    ],
    tags: [
      "u-089",
      "underlay",
      "contorno duplo",
      "edge-walk",
      "ponto cheio",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Satin Stitch Foundation & Edge Walk Mastery. Sydney, 2022.",
      "PULSE SIGNATURE. Column Underlay Architectures and Edge Walls. Mississauga, 2021.",
      "ARTRELADOS. A Arte da Digitalização de Letras e Textos Nítidos no Bordado Digital. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-090-unidade-de-acionamento-solenoide-de-pulo-e-corte",
    code: "U-090",
    term: "Unidade de Acionamento Solenoide de Pulo e Corte (Jump Stitch & Trim Solenoid Actuator)",
    pronunciation: "u-ni-da-de de a-si-o-na-men-to so-le-noi-de de pu-lo e cor-te",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Componentes e Mecânica da Máquina",
    origin: "Do francês 'solénoïde' (bobina condutora em espiral helicoidal). Dispositivo mecatrônico de conversão eletromagnética direta para acionamentos em frações de milissegundo.",
    summary: "Eletroímã de ação ultrarrápida que comanda o desengate mecânico da agulha em deslocamentos longos (pulos) e o disparo das facas de corte sem interromper a rotação mestre.",
    definition: "A Unidade de Acionamento Solenoide de Pulo e Corte (High-Speed Solenoid Actuator Assembly for Jump & Trimming) é o subsistema eletromecânico composto por bobinas de cobre de enrolamento denso e êmbolos de ferro doce temperado acionados por pulsos de corrente contínua controlados por transistores MOSFET na placa de potência. Ao receber o comando digital de corte ou pulo (*Jump*), o solenoide gera um campo magnético instantâneo de alta potência em menos de 15 milissegundos, desarmando a biela de tração da barra de agulha para permitir o deslocamento do bastidor e empurrando a alavanca da lâmina móvel de corte sob a chapa de agulha.",
    technicalDetails: "Tensão de pulso: 24V a 48V DC com pico de corrente de abertura de 3A a 5A e modulação PWM de sustentação a 1A para evitar superaquecimento. Opera em sincronia angular rígida governada pelo encoder do eixo principal aos 196° e 285° do ciclo.",
    beginnerExplanation: "É um ímã elétrico super rápido que parece um martelinho automático dentro da máquina. Quando o desenho precisa dar um pulo grande de uma letra para outra ou cortar a linha, esse ímã dá um estalo na velocidade da luz para destravar a agulha e acionar a tesourinha escondida embaixo da chapa!",
    howItWorks: [
      "1. A matriz envia um comando de corte ou pulo longo (Jump).",
      "2. O processador da máquina lê a instrução e calcula o grau angular do eixo principal pelo encoder.",
      "3. No instante exato (ex: 196°), a placa envia um pulso elétrico forte para o solenoide.",
      "4. O êmbolo magnético do solenoide avança em milissegundos com um estalo característico.",
      "5. A alavanca desengata a barra de agulha (para ela não descer) e empurra a faca móvel de corte.",
      "6. A mola de retorno puxa o êmbolo de volta para a posição de repouso.",
      "7. A máquina retoma a costura normalmente na nova posição sem falhas de sincronismo."
    ],
    applications: [
      "Acionamento instantâneo do sistema de corte automático de linha superior e inferior.",
      "Desengate mecânico da agulha durante pulos longos de pantógrafo entre objetos distantes.",
      "Mecanismos de trava de barra em cabeçotes industriais de alta velocidade (1.000 PPM).",
      "Comando de pinças de retenção e limpadores de fio pneumático/magnético."
    ],
    characteristics: [
      "Velocidade de resposta em frações de milissegundo com altíssima repetibilidade.",
      "Sem engrenagens ou correias de transmissão para o movimento de engate.",
      "Construção robusta com mola de retorno de aço inoxidável de alta fadiga."
    ],
    commonErrors: [
      "❌ Acúmulo de poeira de linha misturada com óleo no eixo do êmbolo, fazendo o solenoide travar emperrado.",
      "❌ Lubrificar o êmbolo do solenoide com óleo líquido comum (o êmbolo deve trabalhar seco ou com grafite em pó seco).",
      "❌ Queima da bobina do solenoide por falha no transistor de disparo na placa de potência."
    ],
    troubleshootingTips: [
      "A máquina não está cortando a linha e não se ouve o estalo do trimer: teste o solenoide no menu de diagnóstico de peças do painel e verifique a fiação de 24V.",
      "A agulha continua costurando durante os pulos longos, riscando a linha por cima do bordado: o solenoide de pulo está emperrado com fiapos; limpe o mecanismo.",
      "O solenoide está muito quente ao toque: o circuito de sustentação PWM na placa controladora pode estar desregulado com corrente contínua excessiva."
    ],
    dicaArtrelados: "NUNCA jogue óleo líquido comum nos solenoides e eletroímãs da máquina! O óleo vira uma graxa grudenta com a poeira têxtil e trava o êmbolo magnético. Limpe sempre com pincel seco ou spray desengripante seco com base de grafite!",
    voceSabia: "Os solenoides modernos de máquinas de bordar industriais são projetados para suportar mais de 50 milhões de disparos ao longo da vida útil sem apresentar fadiga mecânica ou perda de força magnética!",
    practicalExercise: "Acesse o menu técnico de teste de atuadores no painel da sua máquina. Selecione 'Trim Solenoid / Solenoide de Corte' e aperte o botão de teste: escute o estalo mecânico claro e limpo do êmbolo funcionando.",
    quickSummary: "Solenoide de Pulo e Corte é o atuador eletromagnético ultrarrápido que desengata agulhas e aciona o cortador de linha no momento exato do ciclo.",
    recommendedSettings: {
      speedPPM: "Compatível até 1.200 PPM",
      needleType: "N/A",
      density: "Tempo de resposta do pulso: 10 a 15 ms a 24V DC"
    },
    relatedTerms: [
      "Trimer (Cortador de Linha)",
      "Pulo de Ponto (Jump Stitch)",
      "Encoder do Eixo Principal",
      "Placa de Potência (Driver Board)",
      "Barra de Agulha (Needle Bar)"
    ],
    tags: [
      "u-090",
      "solenoide",
      "trimer",
      "pulo de ponto",
      "mecanica",
      "eletroima",
      "atuadores",
      "artrelados"
    ],
    bibliographicReferences: [
      "BARUDAN INDUSTRIAL. Solenoid Actuation Systems and Trimmer Maintenance. Ichinomiya, 2022.",
      "TAJIMA EMBROIDERY MACHINERY. High-Speed Trimming & Jump Solenoid Calibration. Nagoya, 2021.",
      "ARTRELADOS. Mecânica e Eletroeletrônica de Máquinas de Bordar Industriais. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-091-uniformidade-de-tensao-entre-agulhas-multicabecas",
    code: "U-091",
    term: "Uniformidade de Tensão entre Agulhas Multicabeças (Multi-Head Tension Balancing & Calibration Protocol)",
    pronunciation: "u-ni-for-mi-da-de de ten-são en-tre a-gu-lhas mul-ti-ca-be-sas",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Controle de Qualidade & Produtividade",
    origin: "Do latim 'uniformis' (idêntico) e do grego 'tasis' (tensão). Protocolo de metrologia têxtil indispensável para padronização de grandes parques fabris.",
    summary: "Procedimento sistemático de calibração com dinamômetro digital para equalizar a tensão de todas as agulhas em máquinas multicabeças, garantindo peças idênticas.",
    definition: "A Uniformidade de Tensão entre Agulhas Multicabeças (Multi-Head Upper & Bobbin Tension Normalization Protocol) é o método técnico de calibração e padronização que assegura que todas as agulhas ativas em múltiplos cabeçotes industriais (máquinas de 2, 4, 6, 8 ou 12 cabeças) exerçam rigorosamente a mesma força de tração em gramas-força (gf). Sem essa equalização sistemática, o mesmo lote de bordados corporativos apresentará variações inaceitáveis de tonalidade visual, deformação dimensional de logotipos, repuxo assimétrico do tecido e proporções dispares de linha de bobina no verso entre as peças.",
    technicalDetails: "Calibração obrigatória com medidor de tensão digital (Tension Gauge / TOWA): Linha da bobina equalizada entre 20 e 24 gf em todas as caixas; Linha superior No 40 calibrada entre 110 e 130 gf em todas as agulhas do cabeçote com tolerância máxima aceitável de ±5 gf entre cabeças.",
    beginnerExplanation: "Se você tem uma máquina com várias cabeças bordando 4 ou 8 camisas ao mesmo tempo, todas as linhas de todas as agulhas precisam estar com a mesmíssima força de aperto! Se uma agulha estiver frouxa e a outra apertada, uma camisa sai linda e a outra sai enrugada e com cor diferente! Esse protocolo deixa todas exatamente iguais!",
    howItWorks: [
      "1. O operador calibra todas as caixas de bobina no medidor TOWA para exatamente 22 gf.",
      "2. Conecta o dinamômetro na linha superior de cada agulha, puxando a linha no sentido da descida.",
      "3. Ajusta o botão tensor primário até a leitura estabilizar na faixa padrão (ex: 120 gf).",
      "4. Repete a conferência em todas as agulhas de todos os cabeçotes da máquina.",
      "5. Borda a matriz de teste I-H ou padrão borboleta em todas as cabeças simultaneamente.",
      "6. Vira o bastidor e confere se a proporção de 1/3 de linha branca no verso está 100% idêntica em todas as peças do lote."
    ],
    applications: [
      "Grandes produções industriais de uniformes corporativos de marcas multinacionais.",
      "Bordados em larga escala de bonés e jaquetas pesadas em máquinas multicabeças.",
      "Eliminação de divergências de cor provocadas por reflexão de luz em pontos frouxos/apertados.",
      "Controle de qualidade para auditorias e certificações têxteis ISO 9001."
    ],
    characteristics: [
      "Garante repetibilidade absoluta do primeiro ao milésimo bordado.",
      "Reduz drasticamente o índice de quebra de linhas e paradas de máquina.",
      "Evita que uma cabeça problemática atrase a produção de todas as outras cabeças."
    ],
    commonErrors: [
      "❌ Regular a tensão das agulhas 'a olho' ou apenas pelo tato dos dedos sem usar tensiômetro medidor.",
      "❌ Misturar bobinas de marcas e lotes diferentes entre os cabeçotes da mesma máquina.",
      "❌ Ignorar a limpeza dos discos tensores de uma das cabeças que acumulou poeira."
    ],
    troubleshootingTips: [
      "A cabeça número 3 está deixando o bordado mais franzido que as outras: a tensão superior da cabeça 3 está muito alta; use o dinamômetro e reduza para 120 gf.",
      "Aparece linha branca da bobina na frente apenas na cabeça 5: a caixa de bobina da cabeça 5 está muito solta ou o tensor superior está apertado demais; recalibre no TOWA.",
      "O cliente reclamou que o mesmo logotipo parece mais claro em algumas camisas: variações de tensão alteram o ângulo de reflexão da luz na linha; padronize as tensões com dinamômetro."
    ],
    dicaArtrelados: "Tenha um medidor de tensão no seu ateliê! Fazer o teste da linha apenas 'puxando com a mão' é como medir febre encostando a mão na testa sem termômetro. O medidor digital dá o número exato em gramas e você nunca mais terá peças diferentes no mesmo pedido!",
    voceSabia: "Em fábricas de marcas de luxo como Ralph Lauren e Lacoste, as máquinas de bordar passam por checagem obrigatória de tensão com dinamômetro digital antes do início de cada turno de trabalho de 8 horas!",
    practicalExercise: "Borde a matriz teste de 5 colunas satim (Teste Fox I-H) em dois cabeçotes diferentes da sua máquina. Vire o tecido e meça com uma régua a largura da faixa branca da bobina no verso: ela deve ter exatamente 1/3 da largura total em todas as colunas.",
    quickSummary: "Uniformidade de Tensão Multicabeças é a padronização metrológica das tensões superiores e inferiores que assegura que todas as peças bordadas saiam idênticas.",
    recommendedSettings: {
      speedPPM: "850 a 950 PPM",
      needleType: "75/11",
      density: "Bobina: 20-24 gf | Linha Superior: 110-130 gf (Tolerância ±5 gf)"
    },
    relatedTerms: [
      "Tensiômetro TOWA",
      "Dinamômetro Digital de Linha",
      "Teste I-H / Fox Test",
      "Máquina Multicabeças",
      "Proporção Áurea de Tensão (1/3)"
    ],
    tags: [
      "u-091",
      "uniformidade de tensao",
      "multicabecas",
      "calibracao",
      "dinamometro",
      "controle de qualidade",
      "artrelados"
    ],
    bibliographicReferences: [
      "TOWA TENSION SYSTEMS. Industrial Tension Gauge Operations & Thread Standardization. Osaka, 2022.",
      "TAJIMA EMBROIDERY MACHINERY. Quality Control & Multi-Head Calibration Guide. Nagoya, 2021.",
      "ARTRELADOS. Gestão Industrial e Controle de Qualidade em Parques de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-092-unidade-de-pressao-pneumatica-do-bastidor-automatico",
    code: "U-092",
    term: "Unidade de Pressão Pneumática do Bastidor Automático (Pneumatic Hooping Clamping System & Air Pressure Regulation)",
    pronunciation: "u-ni-da-de de pres-são pneu-ma-ti-ca do bas-ti-dor au-to-ma-ti-co",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Bastidores e Enquadramento",
    origin: "Do grego 'pneuma' (ar, sopro) e do latim 'pressio' (força concentrada). Tecnologia de automação industrial por ar comprimido aplicada ao fechamento de bastidores pesados.",
    summary: "Sistema de enquadramento automatizado acionado por pistões pneumáticos a ar comprimido (4 a 6 bar), que fecha bastidores pesados em 1 segundo sem esforço físico do operador.",
    definition: "A Unidade de Pressão Pneumática do Bastidor Automático (Pneumatic Fast-Clamping Hooping Station & Compressed Air Regulator) é o sistema de fixação mecanizado que utiliza cilindros e pistões pneumáticos alimentados por rede de ar comprimido filtrado e regulado para prender tecidos, bolsas, sapatos, mochilas e jaquetas grossas no bastidor de bordado. Acionado por pedal ou botão bi-manual de segurança, o sistema aplica força de prensagem uniforme e calibrada instantaneamente, eliminando 100% da fadiga muscular das mãos dos operadores gerada pelo aperto repetitivo de parafusos manuais em produções de larga escala.",
    technicalDetails: "Pressão de trabalho regulada entre 3,5 bar e 6,0 bar (50 a 85 psi) por meio de válvula reguladora com manômetro e filtro coalescente de retenção de umidade e óleo. Possui amortecedores pneumáticos de fim de curso para evitar impacto brusco sobre tecidos delicados.",
    beginnerExplanation: "É um bastidor automático que fecha sozinho com ar comprimido! Em vez de você ficar sofrendo e girando parafusos duros com a mão o dia inteiro para prender jaquetas e bolsas grossas, você só pisa no pedal e 'TCHUM!': o bastidor prende a peça perfeitamente esticada em 1 segundo sem cansar os dedos!",
    howItWorks: [
      "1. O compressor de ar envia ar comprimido limpo para o regulador de pressão da estação.",
      "2. O operador posiciona a entretela e a peça grossa (como uma jaqueta de couro ou mochila) sobre o suporte.",
      "3. O operador aciona o pedal de comando ou botão de segurança.",
      "4. A válvula solenoide pneumática abre e os pistões descem suavemente com pressão constante.",
      "5. O aro superior trava a peça com firmeza de tambor uniforme em todos os lados.",
      "6. A estação mantém a pressão travada e o operador transfere o conjunto diretamente para a máquina.",
      "7. Após o bordado, um novo toque no pedal despressuriza o pistão e libera a peça instantaneamente."
    ],
    applications: [
      "Bordados em mochilas escolares pesadas, pastas executivas e malas de viagem.",
      "Produção seriada de jaquetas corta-vento forradas, capas de assento e estofados.",
      "Bordados em tênis, chuteiras e calçados industriais de segurança.",
      "Prevenção de Lesões por Esforço Repetitivo (LER/DORT) em equipes de produção de alta demanda."
    ],
    characteristics: [
      "Velocidade de preparação até 5 vezes mais rápida que o bastidor manual comum.",
      "Pressão milimetricamente constante do primeiro ao último produto do lote.",
      "Elimina folgas e deslizamentos em tecidos escorregadios e volumosos."
    ],
    commonErrors: [
      "❌ Trabalhar com pressão pneumática alta demais (> 7 bar), cortando as fibras de tecidos finos ou estourando a costura da peça.",
      "❌ Deixar acumular água de condensação no filtro de ar, espirrando gotículas de água na roupa do cliente.",
      "❌ Colocar os dedos sob os pistões durante o fechamento (risco de prensagem acidental)."
    ],
    troubleshootingTips: [
      "O bastidor não tem força suficiente para prender o couro: aumente a pressão no manômetro regulador para 5,5 bar.",
      "O tecido ficou com marcas esbranquiçadas de esmagamento: reduza a pressão para 3,5 bar e instale mantas de silicone amortecedoras nas garras do bastidor.",
      "O pistão está descendo devagar e sem força: drene a água acumulada no copo do filtro de ar e verifique se há vazamentos nas mangueiras pneumáticas."
    ],
    dicaArtrelados: "Se a sua confecção borda muitas jaquetas pesadas, mochilas ou bolsas: investir em um sistema pneumático ou bastidores magnéticos automáticos poupa os punhos e os tendões da bordadeira e dobra a capacidade de entrega diária da empresa com zero cansaço!",
    voceSabia: "Os primeiros bastidores pneumáticos foram criados na Alemanha nos anos 1980 para a indústria automotiva, para conseguir bordar os logotipos das montadoras nos apoios de cabeça de couro duro dos carros de luxo da Mercedes-Benz e BMW!",
    practicalExercise: "Visite uma confecção com linha pneumática ou assista à demonstração: observe a velocidade impressionante de enquadramento de uma mochila em menos de 3 segundos por meio do acionamento a pedal.",
    quickSummary: "Bastidor Pneumático é o sistema de fixação a ar comprimido que trava tecidos pesados e jaquetas no aro em 1 segundo, com força uniforme e sem esforço manual.",
    recommendedSettings: {
      speedPPM: "800 a 950 PPM",
      needleType: "Compatível com produto",
      density: "Pressão de trabalho: 4.0 a 5.5 bar (58 a 80 psi)"
    },
    relatedTerms: [
      "Compressor de Ar Filtrado",
      "Bastidor Magnético",
      "Enquadramento de Jaquetas Pesadas",
      "Ergonomia e Prevenção de LER",
      "Válvula Reguladora de Pressão"
    ],
    tags: [
      "u-092",
      "pneumatico",
      "bastidor automatico",
      "ar comprimido",
      "jaquetas pesadas",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "SMC PNEUMATICS INDUSTRIAL. Pneumatic Actuators and Air Preparation in Apparel Manufacturing. Tokyo, 2022.",
      "HOOPMASTER AUTOMATION. Pneumatic Clamping & Heavy Garment Hooping. Dallas, 2021.",
      "ARTRELADOS. Automação e Engenharia de Processos no Ateliê de Bordados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-093-underlay-em-zigue-zague-cruzado-para-letras-cursivas",
    code: "U-093",
    term: "Underlay em Zigue-Zague Cruzado para Letras Cursivas (Cross-Zigzag Script Underlay Strategy)",
    pronunciation: "an-der-lei em zi-gue za-gue cru-za-do pa-ra le-tras cur-si-vas",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do inglês 'cross-zigzag' (zigue-zague cruzado) e do latim 'cursivus' (que corre, fluido). Metodologia desenvolvida para preservar a fluidez de fontes manuscritas sem nós.",
    summary: "Subponto em zigue-zague com ângulos alternados e nós aliviados programado especificamente para nomes e fontes cursivas, evitando estrangulamento nas curvas finas.",
    definition: "O Underlay em Zigue-Zague Cruzado para Letras Cursivas (Cross-Zigzag Script Underlay & Fluid Curve Architecture) é a técnica de digitalização especializada em fontes manuscritas e assinaturas onde os subpontos de sustentação são gerados em zigue-zague dinâmico com espaçamento aberto e ângulo que se adapta progressivamente à curvatura das laçadas das letras (como em 'e', 'l', 'b' e 'g'). Esse padrão evita a concentração excessiva de perfurações de agulha nas junções e emendas das curvas, garantindo que o ponto cheio de acabamento mantenha um relevo suave, arredondado e contínuo sem quebras de linha por aglomeração de pontos.",
    technicalDetails: "Espaçamento do zigue-zague calibrado entre 1,8 mm e 2,4 mm com recuo lateral de 0,40 mm. Nas conexões estreitas (< 1,5 mm de largura), o algoritmo converte automaticamente o zigue-zague para ponto corrido central (*Center Walk*) para evitar o estrangulamento do tecido.",
    beginnerExplanation: "Quando vamos bordar nomes com aquelas letrinhas desenhadas de mão (letra cursiva), as curvas e voltinhas são cheias de emendas. Esse subponto em zigue-zague inteligente faz a base macia acompanhando as curvas da letra sem acumular um monte de furos no mesmo lugar, fazendo a letra parecer uma caligrafia perfeita de caneta!",
    howItWorks: [
      "1. O programador digita o nome com fonte cursiva no software de bordado.",
      "2. Ativa o underlay inteligente tipo 'Zigue-Zague com Transição Cursiva'.",
      "3. Nas partes largas da letra, a máquina borda um zigue-zague aberto que dá volume e corpo.",
      "4. Nas partes estreitas e junções entre letras, o programa troca suavemente para um ponto corrido simples.",
      "5. A máquina borda o ponto de acabamento por cima com fluidez total.",
      "6. A letra manuscrita fica macia, com relevo bonito e sem nenhuma bolinha dura nas emendas."
    ],
    applications: [
      "Bordados de nomes de profissionais em jalecos médicos e odontológicos.",
      "Assinaturas e monogramas delicados em enxovais de casamento e toalhas de batizado.",
      "Logotipos com tipografia caligráfica manuscrita fluida.",
      "Nomes de bebês em mantas, fraldas e bodies de suedine macio."
    ],
    characteristics: [
      "Evita o endurecimento de letras pequenas nas emendas.",
      "Proporciona efeito tridimensional arredondado às colunas de cetim.",
      "Elimina quebras de linha causadas por 'pontos em cima de pontos' nas curvas."
    ],
    commonErrors: [
      "❌ Usar underlay tatami pesado em fontes cursivas finas, transformando o nome em uma placa rígida.",
      "❌ Deixar o zigue-zague muito fechado (< 1,0 mm) em curvas apertadas, cortando o tecido.",
      "❌ Não recuar as pontas do zigue-zague nas extremidades finas das letras."
    ],
    troubleshootingTips: [
      "A agulha arrebenta a linha sempre que passa pelas emendas das letras cursivas: há excesso de pontos no mesmo local; ative o filtro de pontos curtos e use o underlay zigue-zague aberto.",
      "A letrinha cursiva ficou achatada e sumiu na fralda do bebê: utilize underlay zigue-zague com recuo de 0,35 mm e aumente a densidade do cetim para 0,38 mm.",
      "O nome ficou torto e repuxado nas conexões: adicione sob-ponto contínuo conectando as letras para estabilizar a malha antes do preenchimento."
    ],
    dicaArtrelados: "Para nomes manuscritos em jalecos e fraldas de bebê: use o underlay em zigue-zague aberto com ponto de 2 mm! Ele deixa o nome gordinho e fofo como se fosse feito à mão, e a agulha corre macia sem quebrar nem uma única vez!",
    voceSabia: "As fontes cursivas digitais de bordado mais famosas do mundo (como a 'Diana Script' e a 'Commercial Script') foram desenhadas inspirando-se nas caligrafias a bico de pena dos tratados diplomáticos do século XIX!",
    practicalExercise: "Escreva o nome 'Beatriz' em fonte cursiva no seu software. Configure uma versão com underlay corrido e outra com underlay zigue-zague dinâmico. Borde em uma fralda de bebê e compare o volume e a definição de ambas.",
    quickSummary: "Underlay Zigue-Zague Cursivo é a base flexível de sustentação que acompanha as curvas de fontes manuscritas, dando relevo uniforme sem acumular pontos nas emendas.",
    recommendedSettings: {
      speedPPM: "700 a 800 PPM",
      needleType: "70/10 ou 75/11",
      density: "Espaçamento do zigue-zague: 2.0 mm | Recuo: 0.40 mm"
    },
    relatedTerms: [
      "Fontes Manuscritas (Script Fonts)",
      "Ponto Cheio Cursivo",
      "Filtro de Pontos Curtos",
      "Nomes em Jalecos",
      "Underlay Center Walk"
    ],
    tags: [
      "u-093",
      "underlay zigue-zague",
      "letras cursivas",
      "fontes manuscritas",
      "nomes",
      "jalecos",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Lettering & Script Font Underlay Techniques. Sydney, 2022.",
      "HATCH BY WILCOM. Professional Monogramming & Script Lettering Guide. Melbourne, 2021.",
      "ARTRELADOS. Guia Definitivo de Nomes, Jalecos e Tipografia no Bordado Digital. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-094-utilizacao-de-fios-de-poliester-fosco",
    code: "U-094",
    term: "Utilização de Fios de Poliéster Fosco e Efeitos sem Reflexo (Matte Finish Embroidery Thread & Glare-Free Aesthetics)",
    pronunciation: "u-ti-li-za-são de fi-os de po-li-es-ter fos-co e e-fei-tos sem re-fle-xo",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Linhas & Insumos",
    origin: "Do grego 'polys' (muitos), 'ester' (composto orgânico) e do latim 'fuscus' (escuro, sem brilho). Inovação da química têxtil com inclusão de dióxido de titânio (TiO2) na extrusão do fio.",
    summary: "Linhas especiais de poliéster 100% foscas e sem reflexo de luz, perfeitas para criar sombras hiper-realistas, pelagens rústicas e uniformes táticos discretos.",
    definition: "A Utilização de Fios de Poliéster Fosco (Matte Polyester Thread Technology / Frosted Matt Thread) compreende a aplicação de linhas de bordado industriais cuja estrutura polimérica recebe micropartículas de cerâmica ou dióxido de titânio durante o processo de fiação, eliminando 100% do brilho reflexivo característico do poliéster trilobal. Essas linhas proporcionam um aspecto nobre de algodão puro ou giz aveludado, com altíssima solidez à luz solar e a lavagens com cloro, sendo indispensáveis para conferir contraste de profundidade, realismo botânico, texturas animais e acabamento fosco em uniformes militares e táticos.",
    technicalDetails: "Linha padrão No 40 (Tex 27 / 120D/2) com alongamento controlado de 15% a 18% e resistência à tração de 1.100 cN. Não desbota sob raios ultravioleta e resiste a alvejantes com cloro a até 95 °C de lavagem industrial.",
    beginnerExplanation: "É uma linha de bordar moderna que não tem aquele brilho plástico reluzente das linhas comuns. Ela é 100% fosca e macia, parecendo linha pura de algodão! É perfeita para fazer sombras realistas, pelos de bichinhos, flores com pétalas aveludadas e uniformes que não podem brilhar no sol!",
    howItWorks: [
      "1. A bordadeira escolhe fios foscos para compor sombras, fundos ou detalhes rústicos da matriz.",
      "2. Passa a linha pelos tensores da máquina (a linha fosca tem coeficiente de atrito suave).",
      "3. Ajusta a tensão da agulha para 110 a 125 gf.",
      "4. A máquina borda normalmente em alta velocidade (750 a 900 PPM).",
      "5. Os pontos assentam com acabamento aveludado fosco, sem reflexos de luz em fotos ou no sol.",
      "6. A combinação de cores brilhantes com cores foscas no mesmo desenho cria uma sensação de relevo e profundidade inacreditável."
    ],
    applications: [
      "Bordados realistas de retratos humanos, pele, sombras de rosto e olhos.",
      "Bordados de animais (pelagem de cavalos, cachorros, penas de pássaros com toque aveludado).",
      "Uniformes militares, policiais e fardamentos táticos de camuflagem (sem reflexo óptico).",
      "Moda praia, artesanato rústico e roupas infantis em estilo linho e algodão cru vintage."
    ],
    characteristics: [
      "Zero reflexo sob a luz do sol e em fotos com flash de celular.",
      "Toda a resistência mecânica e durabilidade indestrutível do poliéster comum.",
      "Cores ultra-nítidas com máxima fidelidade visual em qualquer ângulo de iluminação."
    ],
    commonErrors: [
      "❌ Apertar a tensão excessivamente achando que a linha fosca precisa de mais pressão.",
      "❌ Usar linha fosca em logotipos que o cliente exigiu que fossem brilhantes e acetinados.",
      "❌ Misturar marcas sem conferir a gramatura (Tex) do fio."
    ],
    troubleshootingTips: [
      "O bordado ficou sem o contraste esperado: misture uma cor brilhante comum com uma cor fosca no mesmo tom para criar o efeito de luz e sombra natural.",
      "A linha fosca está desfiando na agulha: use agulha ponta fina 75/11 nova e certifique-se de que a linha não esteja raspando em guias ásperos.",
      "As fotos do bordado no celular ficavam com reflexos brancos no logotipo: use linhas foscas (Frosted Matt) e tire fotos com definição impecável sem reflexos."
    ],
    dicaArtrelados: "O segredo dos bordados hiper-realistas que parecem quadros pintados à mão: use linha de poliéster brilhante para os pontos de luz (onde o sol bate) e linha de poliéster fosco para as partes de sombra! A peça ganha uma profundidade 3D que todo mundo para para admirar!",
    voceSabia: "As linhas foscas (como a famosa linha Frosted Matt da alemã Madeira) foram desenvolvidas originalmente para atender a pedidos das forças armadas da OTAN, que precisavam de emblemas bordados em fardas que não refletissem a luz da lua nem fossem detectados por binóculos noturnos!",
    practicalExercise: "Borde uma folha verde em dois tons: faça a metade esquerda com poliéster brilhante e a metade direita com poliéster fosco. Tire uma foto com o flash do celular e veja o efeito de luz natural tridimensional gerado pela ausência de brilho de um dos lados.",
    quickSummary: "Poliéster Fosco é a linha de bordar sem brilho que cria texturas aveludadas, sombras realistas e emblemas discretos com toda a resistência do poliéster.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Bola ou Fina",
      density: "Densidade padrão: 0.40 mm a 0.42 mm"
    },
    relatedTerms: [
      "Poliéster Trilobal (Linha Brilhante)",
      "Efeito Luz e Sombra",
      "Frosted Matt (Madeira)",
      "Uniformes Táticos",
      "Solidez à Luz Solar (UV Fastness)"
    ],
    tags: [
      "u-094",
      "poliester fosco",
      "linha fosca",
      "frosted matt",
      "sem reflexo",
      "linhas",
      "insumos",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Frosted Matt Polyester Thread & Light Reflection Engineering. Freiburg, 2022.",
      "GUNOLD GMBH. Poly-Matt & Special Effect Embroidery Filaments Handbook. Stockstadt, 2021.",
      "ARTRELADOS. O Poder das Linhas Especiais: Foscas, Metálicas e Fluorescentes no Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-095-unidade-de-refrigeracao-e-dissipacao-de-calor-da-cpu",
    code: "U-095",
    term: "Unidade de Refrigeração e Dissipação de Calor da CPU da Máquina (Motherboard Cooling Fan & Heat Sink Maintenance)",
    pronunciation: "u-ni-da-de de re-fri-ge-ra-são e di-si-pa-são de ca-lor da ce-pê-u da ma-qui-na",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Manutenção & Ferramentas",
    origin: "Do latim 'refrigerare' (esfriar) e da sigla 'CPU' (Central Processing Unit). Subsistema de gestão térmica eletrônica essencial para a confiabilidade de máquinas industriais.",
    summary: "Manutenção preventiva e limpeza do microventilador e dissipador térmico da placa eletrônica da máquina, prevenindo travamentos repentinos de matrizes e perda de pontos.",
    definition: "A Unidade de Refrigeração e Dissipação de Calor da CPU da Máquina (Motherboard Heat Sink & DC Cooling Fan Assembly) é o conjunto de gestão térmica instalado sobre os microprocessadores principais (DSP e CPU) e módulos de potência (Drivers de Motor) no gabinete elétrico da máquina de bordar. Composto por um bloco aletado de alumínio anodizado de alta condutividade térmica e uma ventoinha de fluxo forçado contínuo (DC Fan 12V/24V), o sistema dissipa o calor gerado pelo processamento contínuo de milhares de coordenadas vetoriais por minuto. A poeira de linha têxtil atua como isolante térmico; se não limpa periodicamente, provoca superaquecimento acima de 85 °C, gerando travamentos de tela, erros de leitura de pen drive e paradas abruptas com queima de componentes.",
    technicalDetails: "Fluxo de ar do cooler: 15 a 30 CFM com rolamentos de esferas duplas (Dual Ball Bearing) de longa duração. A temperatura da CPU deve ser mantida abaixo de 60 °C sob regime de produção contínua de 1.000 PPM em temperatura ambiente de até 35 °C.",
    beginnerExplanation: "É o 'ventiladorzinho' e a pecinha de metal que ficam soprando ar gelado na placa de computador dentro da máquina. Se a máquina ficar cheia de poeira de linha por dentro, esse ventilador entope, a placa ferve de calor e a máquina começa a travar a tela, dar erro de leitura no pen drive ou apagar sozinha no meio do bordado!",
    howItWorks: [
      "1. A máquina de bordar é ligada e a ventoinha da placa-mãe começa a girar silenciosamente.",
      "2. O processador calcula os pontos e esquenta; o bloco de alumínio absorve esse calor.",
      "3. A ventoinha sopra ar fresco contínuo pelas aletas de metal, jogando o calor para fora do gabinete.",
      "4. Ao longo dos meses, a poeira de linha do ateliê é sugada e forma uma camada de feltro nas aletas.",
      "5. A cada 6 meses, o operador abre o gabinete elétrico com a máquina desligada.",
      "6. Utiliza um pincel seco e ar comprimido suave para aspirar toda a sujeira do dissipador.",
      "7. A placa volta a respirar ar limpo, operando fria e sem nenhum travamento eletrônico."
    ],
    applications: [
      "Manutenção preventiva semestral de máquinas industriais e domésticas computadorizadas.",
      "Solução definitiva para máquinas que travam a tela no meio de matrizes grandes.",
      "Proteção de circuitos integrados caros contra queima térmica prematura.",
      "Trabalho seguro em regiões de clima quente e ateliês com pouca ventilação."
    ],
    characteristics: [
      "Manutenção de custo zero que evita queimas de placas que custam milhares de reais.",
      "Prolonga a vida útil dos processadores de bordado por mais de 15 anos.",
      "Garante estabilidade de leitura de arquivos e comunicação USB ininterrupta."
    ],
    commonErrors: [
      "❌ Bater ar comprimido forte com bico de alta pressão direto na hélice (faz o ventilador girar em excesso de velocidade e queimar o circuito do sensor).",
      "❌ Trabalhar com as tampas e filtros do gabinete elétrico abertos acumulando fiapos.",
      "❌ Ignorar ruídos de zumbido ou estalos vindos da ventoinha da máquina."
    ],
    troubleshootingTips: [
      "A máquina trava a tela e reinicia sozinha após 2 horas de trabalho: a CPU está superaquecendo; limpe a ventoinha e o dissipador térmico da placa.",
      "Aparece erro de 'System Freeze / Memory Error': verifique se a ventoinha da placa principal não está travada por fiapos de linha.",
      "A ventoinha está fazendo um barulho agudo de atrito: substitua a ventoinha por uma nova de 24V com rolamento de esferas."
    ],
    dicaArtrelados: "Pelo menos duas vezes por ano: desligue a máquina da tomada, abra a portinha do gabinete onde fica a placa-mãe e passe um pincelzinho macio na ventoinha do processador! Aquela 'lãzinha' de poeira que junta ali esquenta a placa e é a maior causadora de queima de placas eletrônicas no Brasil!",
    voceSabia: "Os processadores de máquinas de bordar industriais processam até 100 mil comandos matemáticos de aceleração por segundo para calcular o movimento simultâneo dos eixos X, Y e Z!",
    practicalExercise: "Com a máquina ligada em repouso, aproxime a mão da grade de ventilação lateral do gabinete: sinta a saída de ar morno contínuo confirmando que o sistema de refrigeração da placa está soprando ativamente.",
    quickSummary: "Unidade de Refrigeração da CPU é o cooler e dissipador térmico que mantém a placa da máquina fria, evitando travamentos de matrizes e queima de circuitos eletrônicos.",
    recommendedSettings: {
      speedPPM: "Operação contínua",
      needleType: "N/A",
      density: "Temperatura limite de segurança da CPU: < 65 °C"
    },
    relatedTerms: [
      "Placa-Mãe (Mainboard)",
      "Processador DSP",
      "Gabinete Elétrico",
      "Manutenção Preventiva",
      "Dissipador de Calor (Heat Sink)"
    ],
    tags: [
      "u-095",
      "refrigeracao",
      "cooler",
      "placa-mae",
      "cpu",
      "manutencao preventiva",
      "eletronica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Electronic Mainboard Thermal Management & Fan Maintenance. Nagoya, 2022.",
      "BARUDAN CO. Control Box Cooling Systems and Preventative Cleaning Manual. Ichinomiya, 2021.",
      "ARTRELADOS. Guia de Manutenção Preventiva e Conservação de Máquinas de Bordar. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-096-underlay-para-veludo-e-tecidos-com-pelo-alto",
    code: "U-096",
    term: "Underlay para Veludo e Tecidos com Pelo Alto (High-Pile Velvet Underlay & Flattening Grid Protocol)",
    pronunciation: "an-der-lei pa-ra ve-lu-do e te-si-dos com pe-lo al-to",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do latim 'villosus' (peludo, felpudo) e do inglês 'underlay' (camada de base). Arquitetura de digitalização para controle de volume em tecidos aveludados.",
    summary: "Estratégia de subponto com grade reticulada de contenção (Tatami Mesh) que abaixa e imobiliza os pelos do veludo antes da passagem dos pontos de acabamento.",
    definition: "O Underlay para Veludo e Tecidos com Pelo Alto (High-Pile Velvet Underlay & Knockdown Mesh Strategy) é a programação de subpontos estruturais desenvolvida especificamente para neutralizar o volume vertical das fibras cortadas de tecidos aveludados (como veludo alemão, veludo molhado, cotelê e plush). Consiste na combinação de uma malha reticulada bidirecional aberta (*Cross-Grid / Mesh Underlay*) com um contorno de ponto corrido perimétrico (*Edge-Walk*). Essa rede mecânica comprime as cerdas do veludo para baixo, criando uma 'plataforma' selada que impede que os pelos escapem entre os pontos de cetim ou tatami.",
    technicalDetails: "Densidade da grade de contenção: espaçamento de 1,2 mm a 1,6 mm em ângulos cruzados a 45°/135° com comprimento de ponto de 2,5 mm a 3,0 mm. Recuo de margem de 0,4 mm. Dispensa o uso excessivo de películas plásticas hidrossolúveis pesadas por cima da peça.",
    beginnerExplanation: "Quando vamos bordar em veludo ou tecidos peludinhos, os pelinhos do tecido querem ficar em pé e passar no meio das linhas do bordado. Esse subponto especial cria uma 'redinha invisível' por baixo que deita todos os pelos do veludo no chão antes do bordado bonito começar, deixando as letras lisinhas e com brilho perfeito!",
    howItWorks: [
      "1. A máquina inicia bordando uma rede aberta em grade cruzada (sob-ponto tatami duplo).",
      "2. A grade pressiona as cerdas do veludo uniformemente contra a entretela de base.",
      "3. Uma linha de contorno perimétrico sela as margens externas do objeto.",
      "4. A máquina borda a cobertura de acabamento em ponto cheio ou tatami denso.",
      "5. Os pontos de acabamento assentam sobre a rede de contenção sem nenhum pelo do veludo furando a superfície.",
      "6. O bordado no veludo fica com aspecto de alto luxo, limpo, nítido e sem fiapos salientes."
    ],
    applications: [
      "Bordados de monogramas de luxo em almofadas e cortinas de veludo cotelê.",
      "Brasões em capas de veludo alemão para becas de formatura e paramentos eclesiásticos.",
      "Bordados em casacos de plush, roupões de microfibra peluda e mantas de bebê.",
      "Customização de estojos e caixas forradas de veludo para joias."
    ],
    characteristics: [
      "Garante cobertura 100% lisa sem pelos salientes entre os pontos.",
      "Evita que o bordado afunde e desapareça no meio da espessura do veludo.",
      "Permite bordar veludo mesmo sem ter plástico hidrossolúvel no momento."
    ],
    commonErrors: [
      "❌ Usar apenas um ponto corrido central simples (o pelo do veludo sobe pelos lados e engole a letra).",
      "❌ Bordejar veludo sem compensação de repuxo adequada (o veludo se move e cria vãos no contorno).",
      "❌ Pressionar o veludo no bastidor com força excessiva sem proteção (deixando marcas de esmagamento permanentes)."
    ],
    troubleshootingTips: [
      "Ficaram fiapinhos pretos do veludo espetando no meio das letras brancas: ative o underlay em grade dupla de contenção (Grid Underlay) e coloque uma folha de plástico Solvy fino por cima.",
      "O veludo ficou marcado pelo aro do bastidor: utilize o método flutuante (apenas entretela presa no bastidor e veludo colado com spray adesivo temporário).",
      "O ponto cheio ficou fino demais e afundou: aumente a compensação de repuxo (Pull Comp) para 0,45 mm no software."
    ],
    dicaArtrelados: "Para bordar veludo com perfeição de alta costura: NUNCA aperte o veludo no bastidor! Prenda apenas a entretela no bastidor, borrife cola spray temporária e cole o veludo macio por cima! Na matriz, coloque um underlay em gradezinha aberta. Fica um bordado de cinema digno da realeza!",
    voceSabia: "O veludo foi o tecido favorito dos reis da França e dos Papas durante a Renascença; para bordar brasões sobre o veludo de seda papal, as freiras bordadeiras costuravam primeiro uma base inteira de fios de linho para deitar os pelos antes de aplicar as linhas de ouro puro!",
    practicalExercise: "Pegue um retalho de veludo escuro. Borde uma letra com underlay comum de linha única e outra com a grade de contenção de veludo (Grid Underlay). Compare a nitidez das bordas e a ausência de fiapos na segunda.",
    quickSummary: "Underlay para Veludo é a malha de sustentação em grade cruzada que deita e imobiliza os pelos do tecido, garantindo bordados nítidos e lisos em peças aveludadas.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 Ponta Bola ou Fina",
      density: "Grade de underlay: 1.4 mm a 45°/135° com Pull Comp de 0.45 mm"
    },
    relatedTerms: [
      "Knockdown Stitch",
      "Método Flutuante (Floating)",
      "Plástico Hidrossolúvel (Solvy)",
      "Compensação de Repuxo",
      "Veludo Alemão / Cotelê"
    ],
    tags: [
      "u-096",
      "underlay veludo",
      "knockdown",
      "veludo alemao",
      "plush",
      "pelo alto",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "EMBROIDERY BUSINESS DIGITIZING. High-Pile Fabric Underlays & Knockdown Grid Strategies. Chicago, 2022.",
      "WILCOM EMBROIDERY STUDIO. Velvet and Fleece Underlay Techniques. Sydney, 2021.",
      "ARTRELADOS. Guia Prático de Bordados em Tecidos Desafiadores: Veludo, Toalhas e Malhas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-097-unidade-centralizadora-e-gabarito-de-enquadramento",
    code: "U-097",
    term: "Unidade Centralizadora e Gabarito de Enquadramento no Bastidor (Hooping Station & Garment Centering Jig)",
    pronunciation: "u-ni-da-de sen-tra-li-za-do-ra e ga-ba-ri-to de en-qua-dra-men-to no bas-ti-dor",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Bastidores e Enquadramento",
    origin: "Do latim 'centralis' (no centro) e do francês 'gabarit' (modelo, molde de referência). Equipamento ergonômico de padronização métrica de posicionamento.",
    summary: "Estação de trabalho ergonômica com gabaritos milimetrados e suportes magnéticos que garante que todos os bordados de camisas e polos fiquem exatamente na mesma posição.",
    definition: "A Unidade Centralizadora e Gabarito de Enquadramento no Bastidor (Ergonomic Hooping Station & Alignment Jig System / Tipo HoopMaster) é a plataforma mecânica de bancada projetada para posicionar e fixar vestuários prontos no bastidor com precisão métrica milimétrica e repetibilidade absoluta. Dotada de réguas graduadas gravadas a laser, braços magnéticos de retenção do aro inferior e blocos de apoio para golas e ombros de camisetas e camisas polo, a estação permite ao operador enquadrar dezenas de peças sucessivas exatamente na mesma coordenada cartesiana (peito esquerdo, peito direito, centro costas) em menos de 10 segundos por peça, eliminando réguas manuais, riscos de giz e bordados tortos.",
    technicalDetails: "Construída em polímero industrial de ultra-alto peso molecular (UHMW) ou alumínio naval. Ajustável para todos os tamanhos de bastidores tubulares (9 cm a 30 cm) com gabaritos universais para tamanhos de roupas do PP ao GG.",
    beginnerExplanation: "É uma prancha especial de mesa com réguas e suportes onde você encaixa a camisa e o bastidor. Você veste a camisa nessa estação e o bastidor fecha sozinho no lugar certinho do peito esquerdo! Todas as 50 ou 100 camisas daquele cliente saem com o bordado exatamente na mesma altura, sem você ter que medir nada com fita métrica!",
    howItWorks: [
      "1. O operador encaixa o aro externo do bastidor com a entretela na base magnética da estação.",
      "2. Veste a camisa polo na prancha centralizadora, alinhando a gola e as costuras dos ombros nas marcas guia.",
      "3. Puxa a camisa suavemente para baixo com as mãos, deixando o peito liso e sem dobras.",
      "4. Encaixa o aro interno do bastidor no braço articulado magnético superior.",
      "5. Pressiona o aro para baixo com uma leve pressão das mãos.",
      "6. A peça fica enquadrada perfeitamente reta e no esquadro em menos de 8 segundos.",
      "7. Retira o bastidor pronto para a máquina e repete o processo na próxima camisa com rapidez extrema."
    ],
    applications: [
      "Padronização de grandes pedidos de camisas polo empresariais no peito esquerdo.",
      "Enquadramento rápido de jalecos médicos, camisetas promocionais e uniformes escolares.",
      "Eliminação de dores nos ombros e punhos causadas por enquadramento manual em mesas comuns.",
      "Treinamento rápido de novos operadores de bordado sem experiência prévia."
    ],
    characteristics: [
      "Garante 100% de precisão de altura e alinhamento em todas as peças do pedido.",
      "Aumenta a velocidade de enquadramento em até 3 vezes comparado à mesa plana.",
      "Design ergonômico que previne fadiga e lesões ocupacionais."
    ],
    commonErrors: [
      "❌ Enquadrar camisas 'no olho' em cima de mesas comuns, resultando em bordados mais altos em umas e mais baixos em outras.",
      "❌ Esquecer de ajustar a régua da estação ao mudar o tamanho do lote de camisa P para GG.",
      "❌ Esticar a malha da camisa para os lados ao posicionar na prancha da estação."
    ],
    troubleshootingTips: [
      "O cliente reclamou que o bordado do peito ficou 3 cm mais baixo nas camisas tamanho G: utilize a tabela de graduação da estação centralizadora para compensar a escala de tamanhos (P, M, G, GG).",
      "O logotipo ficou inclinado em relação aos botões: alinhe o peitilho de botões rigorosamente na linha central gravada no gabarito.",
      "O aro do bastidor fica saindo do lugar: verifique se os ímãs de fixação da base da estação estão limpos e sem resíduos metálicos."
    ],
    dicaArtrelados: "Se você faz muitos uniformes e camisas polo corporativas: tenha uma estação de enquadramento centralizadora na sua bancada! O tempo que você economiza sem precisar usar fita métrica e o visual profissional de todas as peças exatamente na mesma altura paga a ferramenta no primeiro mês!",
    voceSabia: "O sistema HoopMaster foi inventado nos Estados Unidos por um veterano da indústria de bordados que sofria de tendinite severa; hoje ele é o padrão mundial utilizado em mais de 90 países!",
    practicalExercise: "Enquadre 5 camisetas usando apenas fita métrica em uma mesa plana e cronometre o tempo. Depois, enquadre 5 camisetas em uma estação centralizadora com gabarito: compare a velocidade e a precisão do alinhamento.",
    quickSummary: "Unidade Centralizadora é a estação de bancada com gabaritos que garante enquadramento rápido e padronizado de bordados em uniformes com precisão milimétrica.",
    recommendedSettings: {
      speedPPM: "N/A (Estação de Preparação)",
      needleType: "N/A",
      density: "Precisão de posicionamento: ±1.0 mm"
    },
    relatedTerms: [
      "Estação HoopMaster",
      "Enquadramento no Peito Esquerdo",
      "Posicionamento Padrão de Uniformes",
      "Bastidor Tubular",
      "Ergonomia no Ateliê"
    ],
    tags: [
      "u-097",
      "centralizadora",
      "gabarito",
      "hoopmaster",
      "enquadramento",
      "uniformes",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "HOOPMASTER SYSTEMS. Commercial Garment Hooping & Precision Placement Standards. Dallas, 2022.",
      "STITCHES MAGAZINE. Mastering Uniform Placement & Production Efficiency. Atlanta, 2021.",
      "ARTRELADOS. Ergonomia, Produtividade e Padronização Industrial no Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-098-utilizacao-de-agulhas-com-ponta-diamante-para-couro",
    code: "U-098",
    term: "Utilização de Agulhas com Ponta Diamante para Couro e Sintéticos Pesados (Diamond Point Leather Needle - DIA / DH)",
    pronunciation: "u-ti-li-za-são de a-gu-lhas com pon-ta di-a-man-te pa-ra cou-ro e sin-te-ti-cos pe-sa-dos",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Agulhas & Mecânica de Penetração",
    origin: "Do grego 'adamas' (indomável, diamante) e da sigla técnica industrial 'DIA' (Diamond Point / Ponta Diamante de 4 Faces).",
    summary: "Agulha especial com quatro gumes cortantes em formato de diamante que perfura couro natural e sintético pesado com orifícios limpos, sem rasgar as bordas do ponto cheio.",
    definition: "A Utilização de Agulhas com Ponta Diamante para Couro e Sintéticos Pesados (Diamond Point Leather Needles / Sistema DBxK5-DH / DIA Cutting Point) designa o uso de agulhas de bordado industrial cuja ponta possui geometria de corte formada por quatro facetas planas afiadas que se interceptam em formato de losango ou diamante. Ao contrário das agulhas comuns de ponta redonda que empurram as fibras têxteis, a ponta diamante realiza uma microincisão cirúrgica limpa e multidirecional no couro bovino, camurça, recouro e corino espesso. Essa geometria reduz o esforço de penetração em 35%, evita o rasgamento contínuo do couro (*efeito picotado*) ao longo de colunas de cetim e impede o desvio da agulha em solados e cabedais.",
    technicalDetails: "Classificação técnica internacional: Groz-Beckert DH / Organ DIA. Calibres padrão: 75/11 a 90/14. Em matrizes de bordado para couro, a densidade deve ser aliviada para 0,45 mm a 0,50 mm com comprimento de ponto mínimo de 2,2 mm para manter as pontes de sustentação do couro intactas.",
    beginnerExplanation: "É uma agulha especial que tem a pontinha afiada como uma lâmina de diamante com 4 lados! Como o couro é duro e não tem fios para afastar, essa agulha faz um cortinho bem limpinho e perfeito. Isso evita que o couro rasgue como um papel picotado quando a máquina faz muitos pontinhos juntos!",
    howItWorks: [
      "1. A bordadeira instala a agulha com ponta diamante (DBxK5 DH) no cabeçote da máquina.",
      "2. No software de matrizes, a densidade é aliviada e os pontos curtos são filtrados.",
      "3. O couro é fixado no bastidor com entretela recortável resistente de 80g/m².",
      "4. A agulha desce; as 4 facetas de corte abrem um micro-orifício limpo em formato de losango.",
      "5. A linha passa pelo orifício sem atrito lateral e a lançadeira pesca o laço perfeitamente.",
      "6. Ao finalizar a coluna de ponto cheio, o couro permanece íntegro, resistente e sem rasgos ao redor do desenho."
    ],
    applications: [
      "Bordados em jaquetas de couro natural para motociclistas e pilotos.",
      "Bordados em bancos de couro automotivo e selaria de alta performance.",
      "Customização de bolsas de luxo, calçados de couro e cintos de vaquejada.",
      "Bordados em couro sintético náutico, corino e recouro de alta espessura."
    ],
    characteristics: [
      "Corta as fibras densas do couro sem deformar a superfície da peça.",
      "Reduz a temperatura de atrito e a carga mecânica no motor principal.",
      "Garante pontos perfeitamente alinhados mesmo em couro espesso e rígido."
    ],
    commonErrors: [
      "❌ Usar agulha ponta diamante em tecidos de malha ou algodão (a ponta cortante corta os fios e destrói o tecido).",
      "❌ Digitalizar matrizes com densidade comum de camiseta (0,35 mm) em couro (o couro se destaca como um selo de correio).",
      "❌ Usar velocidade máxima (1.000 PPM) em couro rígido sem lubrificação com silicone."
    ],
    troubleshootingTips: [
      "O couro rasgou e o centro do logotipo caiu como um buraco: a densidade da matriz estava muito pesada; abra a densidade para 0,48 mm e aumente o comprimento mínimo de ponto para 2,5 mm.",
      "A agulha está quebrando ao bater na costura do couro: mude para calibre 90/14 DH com revestimento de titânio (Gebedur) e reduza a velocidade para 650 PPM.",
      "A linha arrebenta por calor no furo do couro: aplique silicone líquido no feltro de passagem da linha do cabeçote."
    ],
    dicaArtrelados: "Para bordar couro e corino sem medo: use agulha ponta diamante DH e NUNCA use a mesma matriz que você usa para camisas! Abra o programa e aumente o espaçamento dos pontos (densidade mais leve). No couro, menos pontos significam mais beleza e zero risco de rasgar o material!",
    voceSabia: "As marcas de luxo como Gucci e Hermès utilizam máquinas de bordar industriais programadas com pontos de passo longo e agulhas ponta diamante afiadas a laser para bordar suas famosas iniciais em bolsas de couro que chegam a custar mais de 50 mil reais!",
    practicalExercise: "Pegue um pedaço de couro ou corino sintético. Tente furar com uma agulha ponta bola comum e depois com uma agulha ponta diamante DH. Veja como a agulha de diamante entra suavemente sem esforço e deixa um furo limpo e uniforme.",
    quickSummary: "Agulha Ponta Diamante é a agulha cortante com 4 facetas afiadas que perfura couro e materiais sintéticos pesados de forma limpa, evitando rasgos e quebra de linha.",
    recommendedSettings: {
      speedPPM: "600 a 700 PPM",
      needleType: "75/11 ou 80/12 DBxK5-DH (Ponta Diamante)",
      density: "0.45 mm a 0.50 mm com ponto mínimo de 2.2 mm"
    },
    relatedTerms: [
      "Agulha para Couro (Leather Point / DIA)",
      "Bordado em Couro Natural",
      "Compensação de Densidade para Couro",
      "Agulha de Titânio Gebedur",
      "Efeito Selo de Correio (Leather Perforation)"
    ],
    tags: [
      "u-098",
      "agulha ponta diamante",
      "couro",
      "dia",
      "dh",
      "sinteticos pesados",
      "agulhas",
      "artrelados"
    ],
    bibliographicReferences: [
      "GROZ-BECKERT. Cutting Points for Leather and Technical Textiles Handbook. Albstadt, 2022.",
      "ORGAN NEEDLE CO. Industrial Leather Embroidery Needles (DIA & DH Series). Tokyo, 2021.",
      "ARTRELADOS. Guia de Bordados em Couro, Couro Sintético e Materiais Pesados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-099-unidade-de-frenagem-magnetica-da-caixa-de-bobina",
    code: "U-099",
    term: "Unidade de Frenagem Magnética da Caixa de Bobina (Magnetic Core Bobbin & Anti-Backlash System)",
    pronunciation: "u-ni-da-de de fre-na-gem mag-ne-ti-ca da cai-xa de bo-bi-na",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Bobinas & Linhas de Fundo",
    origin: "Do latim 'magneticus' (que atrai ferro) e do inglês 'anti-backlash' (antifolga, antifrenagem por inércia). Inovação que substituiu as antigas molinhas de aço no fundo da caixa de bobina.",
    summary: "Bobinas industriais com núcleo magnético ou pastilhas magnéticas na caixa de carretilha que freiam a bobina no corte, eliminando nós de inércia no verso do bordado.",
    definition: "A Unidade de Frenagem Magnética da Caixa de Bobina (Magnetic Core Bobbin Technology & Anti-Backlash System) é o sistema mecânico de controle inercial que utiliza núcleos de polímero magnetizado nas bobinas descartáveis (tipo *Fil-Tec Magna-Glide*) ou pequenos ímãs de neodímio integrados no fundo da caixa de bobina. Quando a máquina realiza o corte automático de linha (*auto-trim*) a 1.000 PPM, a bobina comum tende a continuar girando por inércia (*Backlash*), desenrolando fio em excesso dentro do cesto e causando laçadas frouxas, nós e quebras no recomeço; o campo magnético atua como freio instantâneo sem atrito mecânico abrasivo.",
    technicalDetails: "Mantém a tensão de desenrolamento da linha da bobina constante do início (100% cheia) até o último metro de fio (0% vazia) na faixa rigorosa de 20 a 24 gf, eliminando a perda de tensão gradual típica de bobinas metálicas ou plásticas comuns com mola de freio desgastada.",
    beginnerExplanation: "Sabe quando a máquina corta a linha e a carretilha continua rodando sozinha por impulso, deixando um monte de linha frouxa embolada embaixo? As bobinas magnéticas têm um imãzinho no meio que 'gruda' de leve no fundo de metal da caixa de bobina. Quando a máquina para, ela freia na hora! Isso acaba com os nós e deixa o avesso do bordado sempre limpo!",
    howItWorks: [
      "1. A bordadeira insere a bobina com núcleo magnético na caixa de carretilha de metal.",
      "2. O ímã central ancora suavemente no fundo da caixa de bobina de aço.",
      "3. Durante a costura a 900 PPM, o fio é puxado e a bobina gira de forma suave e controlada.",
      "4. Ao chegar no corte de linha, o trimer corta e a máquina para bruscamente.",
      "5. O ímã freia a bobina instantaneamente em 0,01 segundo, impedindo o giro livre por inércia.",
      "6. A ponta da linha da bobina fica no tamanho exato para a próxima agulhada, sem nós no verso."
    ],
    applications: [
      "Máquinas industriais e domésticas de alta velocidade com corte automático de linha.",
      "Bordados em tecidos nobres onde o avesso precisa ser tão limpo quanto a frente.",
      "Eliminação de ninhos de pássaro (*birdnesting*) nos primeiros pontos após o corte.",
      "Produção ininterrupta de alta velocidade com tensão de bobina 100% estável."
    ],
    characteristics: [
      "Tensão uniforme do primeiro ao último metro de linha da bobina.",
      "Elimina a necessidade da mola de freio mecânica tradicional no fundo da caixa.",
      "Mais metros de linha por carretel devido à ausência de flanges plásticas grossas laterais."
    ],
    commonErrors: [
      "❌ Inserir a bobina magnética com o lado do ímã virado para fora (o ímã deve encostar no fundo de metal da caixa).",
      "❌ Usar caixas de bobina de alumínio não magnético ou com sujeira grossa no fundo.",
      "❌ Puxar a linha com força bruta desregulando a lâmina tensora da caixa."
    ],
    troubleshootingTips: [
      "Aparecem laçadas emboladas de linha da bobina embaixo no início de cada cor: a bobina está girando em falso por inércia; mude para bobinas magnéticas ou substitua a mola de freio da caixa.",
      "A tensão da bobina varia conforme ela vai esvaziando: bobinas tradicionais perdem peso e soltam tensão; adote bobinas industriais de núcleo magnético Magna-Glide.",
      "A bobina não gira livremente: limpe a poeira de linha acumulada entre o ímã e o fundo da caixa com um pincel macio."
    ],
    dicaArtrelados: "Se você quer esquecer de uma vez por todas aqueles nós feios que embolam embaixo do bordado logo depois que a máquina corta a linha: use bobinas descartáveis com centro magnético (tipo Magna-Glide)! Elas freiam no segundo exato do corte e o verso do bordado fica lisinho e perfeito!",
    voceSabia: "As bobinas com núcleo magnético foram criadas pela empresa americana Fil-Tec nos anos 2000 e revolucionaram a indústria mundial, permitindo colocar até 30% a mais de linha no mesmo espaço da carretilha!",
    practicalExercise: "Coloque uma bobina comum em uma caixa de bobina e puxe a linha rápido com a mão: veja como ela continua girando e soltando linha frouxa. Faça o mesmo com uma bobina magnética: veja como ela para de girar no mesmo instante em que você solta o fio.",
    quickSummary: "Frenagem Magnética da Bobina é o sistema que utiliza ímãs para frear o carretel no momento exato do corte, eliminando linhas frouxas e nós no verso do bordado.",
    recommendedSettings: {
      speedPPM: "850 a 1.000 PPM",
      needleType: "Compatível com linha",
      density: "Tensão contínua calibrada no TOWA: 20 a 24 gf"
    },
    relatedTerms: [
      "Bobina Magnética (Magna-Glide)",
      "Backlash (Giro por Inércia)",
      "Caixa de Bobina",
      "Ninho de Pássaro (Birdnesting)",
      "TOWA Bobbin Gauge"
    ],
    tags: [
      "u-099",
      "frenagem magnetica",
      "bobina magnetica",
      "magna-glide",
      "anti-backlash",
      "caixa de bobina",
      "bobinas",
      "artrelados"
    ],
    bibliographicReferences: [
      "FIL-TEC INC. Magnetic Core Bobbin Technology & Thread Tension Stability. Clear Spring, 2022.",
      "AMERICAN & EFIRD (A&E). Industrial Bobbin Thread Dynamics and Backlash Prevention. Mount Holly, 2021.",
      "ARTRELADOS. Guia Definitivo da Bobina Perfeita: Linhas de Fundo, Caixas e Tensões. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-100-underlay-tatami-com-densidade-variavel-e-alivio-de-borda",
    code: "U-100",
    term: "Underlay Tatami com Densidade Variável e Alívio de Borda (Graduated Density Tatami Underlay)",
    pronunciation: "an-der-lei ta-ta-mi com den-si-da-de va-ri-a-vel e a-li-vi-o de bor-da",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do japonês 'tatami' (esteira) e do latim 'variabilis' (que varia). Algoritmo de suavização de transições estruturais em matrizes artísticas.",
    summary: "Subponto tatami cuja densidade diminui gradualmente nas extremidades, evitando a formação de degraus rígidos e marcas duras entre o bordado e o tecido limpo.",
    definition: "O Underlay Tatami com Densidade Variável e Alívio de Borda (Graduated Density Tatami Underlay & Feathered Edge Foundation) é uma técnica de digitalização avançada para grandes áreas artísticas e degradês em que o espaçamento entre as passagens da malha de base aumenta progressivamente do centro em direção às bordas periféricas (ex: de 1,8 mm no núcleo para 4,0 mm nas bordas). Essa transição geométrica suavizada elimina a formação de um 'degrau' ou borda rígida saliente sob o tecido, distribuindo as forças de repuxo de forma cônica e permitindo que preenchimentos com efeitos sombreados (*feathers / blendings*) se integrem ao tecido com maciez táctil e caimento natural.",
    technicalDetails: "Programado com gradiente de densidade de 1,8 mm (centro) a 4,2 mm (borda) com pontas alternadas e desalinhadas (*Random Length Endings*). Essencial para evitar o enrugamento de tecidos finos sob áreas de preenchimento com efeito de pintura com agulha (*Needle Painting*).",
    beginnerExplanation: "Quando vamos bordar um desenho artístico com fundo que vai sumindo aos poucos (como fumaça, nuvens ou sombras suaves), a base embaixo não pode terminar de repente com uma linha dura. Esse subponto vai ficando mais abertinho e ralo nas beiradas, deixando a transição da linha para o tecido super macia e sem degraus!",
    howItWorks: [
      "1. O programador cria o preenchimento artístico com densidade gradual no software.",
      "2. Ativa o recurso de 'Underlay Graduado com Pontas Desfiadas'.",
      "3. A máquina borda o centro da base com grade firme para dar sustentação.",
      "4. Conforme se aproxima das bordas, a máquina afasta as linhas de base e varia o tamanho dos pontos.",
      "5. A cobertura artística em degradê é bordada por cima da base graduada.",
      "6. A transição entre o bordado e o tecido limpo fica completamente suave, macia e sem marcas duras."
    ],
    applications: [
      "Bordados artísticos de retratos, paisagens e pinturas com agulha (Needle Painting).",
      "Bordados com transição de degradê em vestidos de festa e moda conceitual.",
      "Grandes brasões em tecidos finos de seda e linho que não suportam bordas rígidas.",
      "Sombras suaves sob logotipos corporativos tridimensionais."
    ],
    characteristics: [
      "Elimina a sensação de 'papelão rígido' nas bordas de grandes desenhos.",
      "Garante caimento fluido do tecido sem rugas de transição.",
      "Proporciona acabamento de altíssimo nível artístico e visual sofisticado."
    ],
    commonErrors: [
      "❌ Usar underlay reto e rígido sob preenchimentos com pontas desfiadas (a base fica aparecendo para fora).",
      "❌ Deixar a base muito densa nas extremidades finas de degradês.",
      "❌ Não usar o recurso de pontas aleatórias para quebrar a linha de parada dos pontos."
    ],
    troubleshootingTips: [
      "Ficou uma linha dura visível onde a base do bordado terminou: ative o 'Alívio de Borda Gradual / Feathered Underlay' no programa de digitalização.",
      "O degradê de cores ficou manchado e repuxado nas pontas: aumente o espaçamento do underlay nas margens para 3,5 mm.",
      "O tecido ao redor do bordado fez pregas: reduza a densidade total do centro e use entretela recortável macia de 50g/m²."
    ],
    dicaArtrelados: "Em desenhos artísticos com sombras, degradês ou animais: suavize o subponto nas pontas! Deixar a base mais rala nas beiradas faz o bordado se misturar com o tecido como uma pintura perfeita, sem aquela borda dura que parece uma placa colada!",
    voceSabia: "Esta técnica foi desenvolvida por mestres digitalizadores suíços para bordar os famosos xales de lã alpina de Saint Gallen, onde o bordado precisava se fundir com a lã pura sem criar nenhuma rigidez no tecido!",
    practicalExercise: "Digitalize um quadrado com degradê que vai de 100% de cor para 0% de transparência. Aplique o underlay tatami de densidade variável e borde em um tecido fino. Passe a mão e sinta a transição macia sem nenhum degrau.",
    quickSummary: "Underlay de Densidade Variável é a base que se torna mais aberta nas extremidades, garantindo transições suaves e sem rigidez em degradês e desenhos artísticos.",
    recommendedSettings: {
      speedPPM: "700 a 800 PPM",
      needleType: "70/10 ou 75/11 Ponta Fina",
      density: "Gradiente de base: 1.8 mm (centro) a 4.0 mm (bordas)"
    },
    relatedTerms: [
      "Pintura com Agulha (Needle Painting)",
      "Degradê no Bordado (Color Blending)",
      "Bordas Desfiadas (Feathered Edges)",
      "Transição de Densidade",
      "Toque Têxtil (Fabric Hand)"
    ],
    tags: [
      "u-100",
      "underlay variavel",
      "densidade graduada",
      "degrade",
      "needle painting",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Artistic Shading & Graduated Underlay Engineering. Sydney, 2022.",
      "BERNINA ARTISTIC EMBROIDERY. Advanced Needle Painting and Gradient Foundations. Steckborn, 2021.",
      "ARTRELADOS. A Arte do Hiper-Realismo e Pintura com Agulha no Bordado Digital. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-101-utilizacao-de-entretela-soluvel-em-agua-quente",
    code: "U-101",
    term: "Utilização de Entretela Solúvel em Água Quente (Hot-Water Soluble Non-Woven PVA Stabilizer)",
    pronunciation: "u-ti-li-za-são de en-tre-te-la so-lu-vel em a-gua quen-te",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Estabilizadores & Entretelas",
    origin: "Do latim 'solubilis' (que se dissolve) e da química 'Álcool Polivinílico' (PVA termossolúvel). Substrato de suporte temporário para rendas puras sem tecido.",
    summary: "Entretela não-tecida de PVA que suporta milhares de pontos sem rasgar e se dissolve 100% apenas em água morna/quente (40-60 °C), ideal para rendas Richelieu e Guipir.",
    definition: "A Utilização de Entretela Solúvel em Água Quente (Hot-Water Soluble Non-Woven PVA Stabilizer / Hydro-Soluble Fabric Backing) refere-se ao uso de entretelas compostas por fibras não-tecidas de Álcool Polivinílico (PVA) termo-hidrossolúvel com gramatura entre 40g e 80g/m². Ao contrário dos filmes plásticos finos de água fria (usados apenas como cobertura de toalhas), essa entretela tem estrutura de tecido fibroso firme que resiste à perfuração de alta densidade sem perfurar nem rasgar. Ao ser mergulhada em água aquecida a 40 °C - 60 °C após o bordado, a entretela se dissolve completamente sem deixar resíduos químicos nas linhas, sendo a base fundamental para a produção de rendas soltas (*Free-Standing Lace - FSL*), brasões vazados e bordados *Richelieu*.",
    technicalDetails: "Gramatura padrão: 60g a 80g/m² (ou uso de 2 camadas de 40g). Dissolução completa em 2 a 4 minutos em água a 50 °C sob agitação suave. pH neutro, biodegradável e não tóxico para as mãos da bordadeira.",
    beginnerExplanation: "É uma entretela mágica que parece um pano branco bem firme, mas que derrete e some completamente quando você coloca na água morna! Como ela é forte, você pode bordar rendas e brincos inteiros direto nela sem nenhum tecido por baixo. Depois você dá um banho de água morna e fica só a renda de linha pura!",
    howItWorks: [
      "1. A bordadeira prende uma ou duas camadas da entretela solúvel firme no bastidor (sem nenhum tecido).",
      "2. A máquina borda a matriz de renda Guipir ou Richelieu com linhas de poliéster ou algodão.",
      "3. Os pontos se entrelaçam criando uma estrutura autoportante sustentada pela entretela.",
      "4. Retira-se a peça do bastidor e recorta-se o excesso de entretela com uma tesoura comum.",
      "5. Mergulha-se a renda em uma bacia com água morna (cerca de 50 °C) por 3 minutos.",
      "6. A entretela de PVA derrete 100% e a água fica leitosa; enxágua-se em água corrente.",
      "7. A renda é colocada sobre uma toalha plana para secar, ficando firme, linda e perfeita."
    ],
    applications: [
      "Confecção de rendas soltas nobres (Free-Standing Lace - FSL), brincos e colares têxteis.",
      "Bordados vazados tradicionais tipo Richelieu em toalhas de linho e batas.",
      "Aplicação em tecidos ultrafinos transparentes (organza de seda, tule francês e voil).",
      "Barrados de renda Guipir para panos de prato e vestidos de noiva."
    ],
    characteristics: [
      "Suporta até 30 mil pontos sem rasgar ou picotar no bastidor.",
      "Dissolução 100% limpa sem deixar fiapos brancos nas bordas da renda.",
      "Não endurece os fios após a secagem completa."
    ],
    commonErrors: [
      "❌ Tentar dissolver a entretela de água quente em água gelada da torneira (ela vira uma pasta grudenta que não sai).",
      "❌ Usar filme plástico fino de toalha (Solvy) para fazer renda solta (o plástico rasga e a renda se desfaz).",
      "❌ Torcer a renda molhada com as mãos com força (deformando o desenho)."
    ],
    troubleshootingTips: [
      "A entretela virou uma goma grudenta e não quer sair da renda: aqueça a água para 50 °C a 60 °C (temperatura de banho quente) e mergulhe a peça novamente por 3 minutos.",
      "A renda se desfez e soltou fios após a lavagem: a matriz não tinha pontos de amarração e grade de suporte suficientes para ser uma renda solta (FSL); use matrizes próprias para FSL.",
      "A entretela rasgou durante o bordado no bastidor: use duas camadas de entretela de 40g ou mude para gramatura pesada de 80g/m²."
    ],
    dicaArtrelados: "Para fazer rendas e brincos de bordado durinhos e perfeitos: ao tirar da água morna, não enxágue 100% da goma! Deixe um pouquinho da entretela dissolvida na água e seque a renda esticadinha em cima de uma folha de plástico ou papel manteiga. Quando secar, a renda fica armada e engomada como uma joia!",
    voceSabia: "O Álcool Polivinílico (PVA) utilizado nessas entretelas é o mesmo material biocompatível utilizado pela indústria farmacêutica para fabricar as cápsulas gelatinosas solúveis de remédios que se dissolvem no estômago!",
    practicalExercise: "Borde uma flor em matriz de renda solta (FSL) usando duas camadas de entretela solúvel em água quente. Mergulhe em água morna a 50 °C e observe a mágica da entretela desaparecendo em minutos, deixando apenas a flor de linha.",
    quickSummary: "Entretela Solúvel em Água Quente é o estabilizador fibroso de PVA que suporta milhares de pontos e se dissolve em água morna, ideal para rendas soltas e Richelieu.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 Ponta Fina (Sharp)",
      density: "Dissolução em água: 45 °C a 60 °C por 3 min"
    },
    relatedTerms: [
      "Free-Standing Lace (FSL)",
      "Bordado Richelieu",
      "Renda Guipir",
      "Álcool Polivinílico (PVA)",
      "Plástico Hidrossolúvel de Água Fria"
    ],
    tags: [
      "u-101",
      "entretela soluvel",
      "agua quente",
      "pva",
      "rendas",
      "fsl",
      "richelieu",
      "estabilizadores",
      "artrelados"
    ],
    bibliographicReferences: [
      "VILENE NONWOVENS. Water-Soluble Stabilizers & Technical Dissolution Manual. Weinheim, 2022.",
      "MADEIRA GARN. Avalon Plus & Water Soluble Backing Applications. Freiburg, 2021.",
      "ARTRELADOS. O Universo das Rendas Soltas (FSL), Richelieu e Jóias Têxteis Bordadas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "u-102-uniformizacao-de-lotes-e-controle-de-tonalidade",
    code: "U-102",
    term: "Uniformização de Lotes e Controle de Tonalidade de Linhas (Dye Lot Matching & Thread Color Consistency)",
    pronunciation: "u-ni-for-mi-za-são de lo-tes e con-tro-le de to-na-li-da-de de li-nhas",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Linhas & Insumos",
    origin: "Do latim 'uniformis' (sempre igual) e do inglês 'dye lot' (lote de tingimento). Princípio industrial de controle colorimétrico e espectrofotometria têxtil.",
    summary: "Gestão dos números de lote de tingimento (Dye Lot) dos cones de linha para evitar variações perceptíveis de cor entre peças do mesmo pedido de uniformes corporativos.",
    definition: "A Uniformização de Lotes e Controle de Tonalidade de Linhas (Dye Lot Matching & Colorimetric Consistency Protocol) é o procedimento de gestão de insumos no qual a bordadeira ou gestor de produção controla os códigos numéricos de lote de tingimento (*Dye Lot Number*) gravados na etiqueta inferior de cada cone de linha de poliéster ou viscose. Embora dois cones possuam o mesmo código de cor universal (ex: Azul Marinho 1134), variações microscópicas de temperatura, tempo de caldeira e química dos corantes entre bateladas industriais diferentes geram variações sutis de tom (delta E > 1.0). Misturar cones de lotes diferentes no mesmo pedido causa divergências visíveis sob a luz natural.",
    technicalDetails: "Controle colorimétrico pela norma CIE Lab com tolerância delta E (ΔE) inferior a 0,8 para vestuário corporativo. O ateliê deve reservar cones do mesmo lote para atender à quantidade total de peças daquela encomenda antes de iniciar a produção.",
    beginnerExplanation: "Quando a fábrica faz as linhas coloridas, cada caldeirão de tinta sai com uma corzinha minimamente diferente do outro, mesmo sendo a mesma cor na etiqueta! Por isso, se você vai bordar 50 camisas azuis para a mesma empresa, todos os cones precisam ser do mesmo lote (mesmo caldeirão). Se misturar lotes, algumas camisas vão ficar com azul mais escuro e outras com azul mais claro!",
    howItWorks: [
      "1. A bordadeira recebe um pedido de 100 camisas polo corporativas com logotipo azul marinho.",
      "2. Calcula o consumo de linha estimado para o lote completo (ex: 3 cones de 4.000 metros).",
      "3. Ao comprar os cones, confere a etiqueta na base do cone: verifica a cor (ex: 1142) e o número do lote (ex: Lote 8942).",
      "4. Garante que os 3 cones pertençam rigorosamente ao mesmo número de lote.",
      "5. Abastece a máquina e borda todas as camisas do cliente com os cones daquele lote.",
      "6. Todas as 100 peças saem com a mesmíssima tonalidade de cor exata sob qualquer luz.",
      "7. O cliente recebe o pedido padronizado e aprova o controle de qualidade com louvor."
    ],
    applications: [
      "Produção seriada de uniformes corporativos de grandes bancos, redes de lojas e companhias aéreas.",
      "Bordados em vestidos de noiva e vestidos de madrinhas que precisam de tom idêntico.",
      "Grandes pedidos de camisetas promocionais de eventos e congressos.",
      "Reposição anual de uniformes mantendo a mesma cor dos anos anteriores."
    ],
    characteristics: [
      "Evita devoluções e rejeições de pedidos por clientes corporativos exigentes.",
      "Garante harmonia visual perfeita em equipes que trabalham lado a lado.",
      "Demonstra profissionalismo e rigor industrial do ateliê de bordado."
    ],
    commonErrors: [
      "❌ Trocar o cone no meio do bordado de uma peça grande por um cone de outro lote (a metade do desenho fica com tom diferente).",
      "❌ Não guardar o número do lote do cliente para futuras reposições do mesmo uniforme.",
      "❌ Comprar cones avulsos de lotes sortidos para fazer pedidos corporativos grandes."
    ],
    troubleshootingTips: [
      "O cliente reclamou que 10 camisas ficaram com o azul diferente das outras: foram usados cones de lotes de tingimento diferentes; passe a controlar o Dye Lot antes de iniciar a produção.",
      "A linha acabou no meio de uma jaqueta e não há cone do mesmo lote: troque o cone da cor inteira e reborde a peça, nunca troque o cone no meio de um preenchimento contínuo.",
      "Dificuldade em achar cones do mesmo lote: calcule a metragem total antecipadamente e compre uma caixa lacrada da distribuidora."
    ],
    dicaArtrelados: "Vai bordar muitas peças para o mesmo cliente? Olhe embaixo do cone de linha: além do número da cor, tem um número de LOTE (Dye Lot)! Use sempre cones do mesmo lote no mesmo pedido! Esse cuidado simples de conferir a etiqueta evita dores de cabeça e garante clientes fiéis para sempre!",
    voceSabia: "Na indústria automotiva de luxo (como Ferrari e Rolls-Royce), os rolos de couro e os cones de linha para os bordados dos bancos são comprados em lotes únicos lacrados e numerados para que o carro tenha 100% da mesma tonalidade por décadas!",
    practicalExercise: "Pegue dois cones da mesma cor de marcas ou lotes diferentes. Borde um quadrado com cada um lado a lado em um tecido branco. Saia ao ar livre sob a luz do sol e veja como as pequenas variações de tom aparecem claramente sob a luz natural.",
    quickSummary: "Controle de Lotes de Tingimento é a prática de usar cones do mesmo lote em todo o pedido, garantindo que todas as peças tenham rigorosamente a mesma tonalidade de cor.",
    recommendedSettings: {
      speedPPM: "Compatível com linha",
      needleType: "75/11",
      density: "Controle de delta E (ΔE): < 0.8"
    },
    relatedTerms: [
      "Lote de Tingimento (Dye Lot)",
      "Colorimetria e Delta E",
      "Poliéster Trilobal",
      "Controle de Qualidade Corporativo",
      "Consumo de Linha por Matriz"
    ],
    tags: [
      "u-102",
      "lote de tingimento",
      "dye lot",
      "tonalidade",
      "cores de linha",
      "controle de qualidade",
      "uniformes corporativos",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Color Consistency & Industrial Dye Lot Management. Freiburg, 2022.",
      "SOCIETY OF DYERS AND COLOURISTS. Textile Coloration and Color Matching Standards. Bradford, 2021.",
      "ARTRELADOS. Gestão Profissional de Insumos e Controle de Qualidade no Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

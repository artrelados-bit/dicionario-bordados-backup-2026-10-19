import { Verbete } from "../types";

export const VERBETES_LETTER_T11: Verbete[] = [
  {
    id: "tensao-diferencial-de-pontos-e-compensacao-de-tracao",
    code: "T-067",
    letter: "T",
    term: "Tensão Diferencial de Pontos e Compensação de Tração Mecânica (Differential Stitch Tension)",
    pronunciation: "ten-são di-fe-ren-ci-al de pon-tos e com-pen-sa-são de tra-são me-câ-ni-ca",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim tensio (esticamento) e differentia (distinção). Dinâmica vetorial em softwares profissionais.",
    summary: "Ajuste de densidade e puxada que compensa o estiramento natural de tecidos elásticos, garantindo formas geométricas perfeitas.",
    definition: "A Tensão Diferencial de Pontos e Compensação de Tração Mecânica (Directional Pull Differential / Elastic Substrate Stitch Tuning) é o método avançado de engenharia de matrizes onde o programador aplica densidades e sobremedidas assimétricas nos objetos de bordado dependendo da elasticidade do tecido nos eixos de urdume (comprimento) e trama (largura). Em malhas de elastano (Lycra/Suplex), o tecido estica muito mais no sentido da largura do que da altura; a compensação diferencial aumenta a tolerância de puxada (Pull Compensation) especificamente no sentido de maior elasticidade para que círculos não fiquem ovais e letras mantenham espessura idêntica.",
    technicalDetails: "Programada em softwares como Wilcom e Tajima DG. Permite definir compensação de puxada vetorial angular (Pull Comp by Angle): por exemplo, 0,20 mm para pontos horizontais (0°) e 0,55 mm para pontos verticais e diagonais (90° e 45°), neutralizando a deformação elástica do tecido durante o bordado.",
    beginnerExplanation: "É o segredo do programador para bordar tecidos que esticam muito, como leggings de academia e biquínis. Como a malha estica mais de um lado do que do outro, o programa engorda o ponto na direção certa para que uma bolinha fique perfeitamente redonda e não pareça um ovo.",
    howItWorks: [
      "1. A programadora analisa a amostra da malha e testa a elasticidade no sentido horizontal e vertical.",
      "2. No software, seleciona os objetos da matriz que serão bordados sobre a malha elástica.",
      "3. Configura a compensação de repuxo diferencial (Pull Compensation assimétrica).",
      "4. Adiciona uma camada de underlay em grade dupla (Double Grid Tatami) para travar a malha antes do ponto cheio.",
      "5. A máquina borda e, ao retirar a peça do bastidor, as tensões se equilibram perfeitamente.",
      "6. O desenho permanece com proporções exatas sem enrugamento nem distorção."
    ],
    applications: [
      "Bordados em roupas esportivas de alta performance (Lycra, Suplex, Dry-Fit, Neoprene).",
      "Peças de moda praia e moda íntima com alta concentração de elastano.",
      "Logotipos redondos e quadrados em camisetas polo de piquet com elastano.",
      "Grandes brasões em agasalhos esportivos de moletom felpudo."
    ],
    characteristics: [
      "Garante formas geométricas matematicamente perfeitas em malhas elásticas.",
      "Evita que os contornos finos fiquem desencaixados do fundo preenchido.",
      "Permite bordar com velocidade total sem risco de franzir a roupa."
    ],
    commonErrors: [
      "❌ Usar a mesma compensação de puxada padrão de tecido plano (0,15 mm) em malhas de poliamida com elastano.",
      "❌ Puxar e esticar a malha com as mãos na hora de prender o bastidor, piorando a deformação.",
      "❌ Não usar entretela de malha recortável (Cut-Away) estável por baixo do tecido elástico."
    ],
    troubleshootingTips: [
      "Círculo virando elipse/oval após bordar em malha: aumente a compensação de puxada diferencial no eixo perpendicular aos pontos para 0,45 mm e use entretela Cut-Away.",
      "Contorno preto saindo fora da letra colorida: aumente o overlapping (sobreposição) entre o enchimento e o contorno em 0,3 mm.",
      "Tecido enrugando em volta do bordado como uma saia franzida: diminua a densidade geral dos pontos tatami (aumente o espaçamento de 0,40 mm para 0,45 mm) e use underlay de fixação."
    ],
    dicaArtrelados: "Para bordar malhas que esticam muito: NUNCA estique a peça no bastidor! Acomode o tecido suavemente sobre uma entretela de malha firme presa com spray reposicionável. Deixe a compensação diferencial do programa fazer todo o trabalho por você!",
    voceSabia: "Na confecção de trajes de banho para atletas olímpicos de natação, as matrizes de bordado dos patrocinadores são calibradas em softwares tridimensionais considerando a deformação da malha com o corpo do atleta em movimento dentro da água!",
    practicalExercise: "Digitalize uma letra 'O' perfeita com 5 cm de altura. Borde uma amostra em um jeans rígido e outra idêntica em uma legging de Lycra. Meça com uma régua a largura da letra nas duas peças para ver o efeito da tração mecânica do tecido.",
    quickSummary: "Tensão Diferencial é o cálculo no software que aumenta a largura dos pontos nas direções em que o tecido mais estica, mantendo o desenho simétrico e perfeito.",
    relatedTerms: ["Compensação de Encolhimento (Pull Comp)", "Malha com Elastano", "Entretela Recortável (Cut-Away)", "Underlay Tatami", "Distorção Vetorial"],
    tags: ["tensao", "diferencial", "tracao", "pull comp", "malhas", "elastano", "programacao"]
  },
  {
    id: "transmissao-por-fuso-de-esferas-e-correias-dentadas",
    code: "T-068",
    letter: "T",
    term: "Transmissão por Fuso de Esferas Recirculantes vs. Correias Dentadas (Ball Screw vs. Timing Belt Drive)",
    pronunciation: "trans-mis-são por fu-zo de es-fe-ras re-cir-cu-lan-tes vs. cor-rei-as den-ta-das",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da engenharia mecatrônica e robótica industrial alemã e japonesa aplicada a máquinas CNC têxteis.",
    summary: "Comparativo técnico dos sistemas de tração que movem o pantógrafo da máquina nos eixos X e Y com velocidade e precisão micrométrica.",
    definition: "A Transmissão por Fuso de Esferas Recirculantes e Correias Dentadas Sincronizadoras (Ball Screw & Timing Belt Drive Systems) representa as duas tecnologias mecânicas de conversão de movimento rotativo dos servomotores em movimento linear dos eixos X-Y do pantógrafo. Os Fusos de Esferas utilizam eixos helicoidais de aço temperado com porcas de recirculação de microesferas de precisão, oferecendo rigidez mecânica absoluta, folga zero (Zero Backlash) e suporte a bastidores pesados. As Correias Sincronizadoras utilizam tiras de poliuretano com alma de aço e perfil de dentes curvilíneos (como HTD/GT2), proporcionando acelerações ultrarrápidas, baixo ruído e menor custo de manutenção.",
    technicalDetails: "Fusos de esferas classe C5/C7 possuem repetibilidade posicional de ±0,005 mm e exigem lubrificação periódica com graxa de lítio com bissulfeto de molibdênio. Correias dentadas de poliuretano com dentes de 3M/5M operam com tensão calibrada por frequencímetro sônico (frequência de ressonância entre 65 Hz e 85 Hz).",
    beginnerExplanation: "São as peças que empurram o braço da máquina (pantógrafo) para lá e para cá enquanto a agulha sobe e desce. O fuso de esferas é como um parafuso gigante de aço sem folga nenhuma, e as correias são fitas dentadas superfortes com arames de aço por dentro que correm em polias.",
    howItWorks: [
      "1. O motor de passo ou servomotor recebe o comando de coordenada X-Y da placa controladora.",
      "2. O motor gira a polia ou o fuso de esferas na fração exata de grau correspondente ao ponto.",
      "3. O sistema de transmissão converte o giro em deslocamento linear suave.",
      "4. O pantógrafo com o bastidor move-se exatamente para a coordenada do próximo ponto em milissegundos.",
      "5. A agulha desce no local exato sem vibração nem atraso mecânico.",
      "6. O ciclo se repete até 1.200 vezes por minuto com precisão inalterada."
    ],
    applications: [
      "Máquinas industriais e pontes de bordado para tapeçarias e couros pesados (Fuso de Esferas).",
      "Máquinas multicabeças de alta velocidade para vestuário e bonés (Correias Sincronizadoras).",
      "Manutenção e ajuste de tensão de eixos do pantógrafo em revisões anuais.",
      "Eliminação de folgas mecânicas que causam contornos tremidos e pontas soltas."
    ],
    characteristics: [
      "Fuso de Esferas: máxima rigidez, precisão micrométrica e suporte a cargas elevadas.",
      "Correias Dentadas: acelerações ágeis, funcionamento silencioso e peso reduzido.",
      "Ambos garantem que o desenho na tela seja transferido com exatidão para o tecido."
    ],
    commonErrors: [
      "❌ Deixar as correias dentadas frouxas, causando folga mecânica (Backlash) e desenhos deformados.",
      "❌ Apertar a correia dentada em excesso até sobrecarregar os rolamentos do motor de passo.",
      "❌ Usar graxa comum em fusos de esferas acumulando pó têxtil que trava as microesferas."
    ],
    troubleshootingTips: [
      "Bordado saindo com círculos achatados ou contornos com degrau de 1 mm: a correia do eixo X ou Y está com folga; aperte o tensor da correia até atingir a frequência sonora correta.",
      "Ruído agudo de chiado metálico durante deslocamentos rápidos: aplique graxa branca especial de lítio na pista do fuso de esferas com uma seringa dosadora.",
      "Travamento súbito do pantógrafo no meio do bordado: verifique se não há restos de linha ou pedaços de entretela presos entre a correia e a polia dentada."
    ],
    dicaArtrelados: "Durante a limpeza semanal da sua máquina: olhe embaixo das tampas laterais do pantógrafo e use um pincel para tirar fiapos de linha que possam estar perto das correias e polias! Uma correia limpa e bem ajustada garante contornos perfeitamente nítidos como navalha!",
    voceSabia: "O sistema de fuso de esferas foi desenvolvido originalmente para os sistemas de direção dos carros de luxo da década de 1940 e hoje é a tecnologia indispensável que posiciona as asas dos aviões da Boeing e o pantógrafo das melhores máquinas de bordar do planeta!",
    practicalExercise: "Com a máquina desligada da tomada, empurre o pantógrafo suavemente com as duas mãos para a frente e para trás. Sinta se o movimento é suave e macio como vidro ou se há trancos, folgas soltas ou rangidos metálicos.",
    quickSummary: "Transmissão por Fuso de Esferas e Correias Dentadas são os mecanismos mecânicos que movem o pantógrafo com o bastidor em alta velocidade e com precisão milimétrica.",
    relatedTerms: ["Pantógrafo", "Folga Mecânica (Backlash)", "Servomotor", "Polia Sincronizadora", "Manutenção Preventiva"],
    tags: ["transmissao", "fuso de esferas", "correias", "mecanica", "pantografo", "motores", "manutencao"]
  },
  {
    id: "termoadesivos-de-alta-aderencia-para-patches",
    code: "T-069",
    letter: "T",
    term: "Termoadesivos de Alta Aderência e Prensagem Térmica de Patches (Heat Seal Film & Patch Application)",
    pronunciation: "ter-mo-a-de-zi-vos de al-ta a-de-rên-ci-a e pren-sa-gem tér-mi-ca de pá-txis",
    level: "Iniciante 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do grego therme (calor) e do latim adhaerere (grudar). Tecnologia de polímeros termoplásticos.",
    summary: "Película termoplástica aplicada no verso de emblemas bordados que derrete com o calor da prensa e cola o patch na roupa para sempre.",
    definition: "Os Termoadesivos de Alta Aderência (Heat Seal Film / Termocolante Permanente / Filme Termofusível para Patches / Polyurethane Hot-Melt Adhesive) são películas sólidas de polímeros termoplásticos (como poliuretano ou poliamida) protegidas por papel siliconado. Aplicados no verso de emblemas, brasões e patches bordados através de prensa térmica, esses adesivos tornam-se líquidos a temperaturas entre 140 °C e 160 °C sob pressão, penetrando profundamente na trama têxtil do patch e da peça de vestuário. Ao esfriar, solidificam-se criando uma união mecânica permanente e ultra-resistente a dezenas de lavagens industriais.",
    technicalDetails: "Espessuras comerciais comuns variam de 80 a 150 micras (0,08 mm a 0,15 mm). Parâmetros de aplicação padrão: Temperatura de 150 °C a 160 °C, tempo de prensagem de 12 a 15 segundos no verso da peça, com pressão média/alta de 4 a 6 bar (ou 40 a 50 psi). Resistência a lavagens a até 60 °C.",
    beginnerExplanation: "É o termocolante definitivo que você coloca atrás do chaveiro ou emblema bordado. Quando passa o ferro quente ou a prensa térmica, a cola derrete e gruda o bordado na jaqueta jeans ou camiseta sem você precisar costurar nada!",
    howItWorks: [
      "1. O emblema bordado é finalizado e selado nas bordas com ferro de solda ou tesoura.",
      "2. Corta-se o filme termoadesivo no formato do verso do patch.",
      "3. Posiciona-se o lado colante contra o verso do bordado e prensa-se a 150 °C por 5 segundos com papel protetor.",
      "4. Deixa-se esfriar totalmente e retira-se a película de papel siliconado protetor.",
      "5. Posiciona-se o patch sobre a jaqueta ou mochila do cliente.",
      "6. Prensa-se firmemente pelo lado de dentro da peça (pelo avesso) por 15 segundos a 155 °C para garantir máxima ancoragem."
    ],
    applications: [
      "Emblemas e patches para jaquetas jeans, jaquetas de couro e bonés.",
      "Uniformes corporativos, batas hospitalares e fardamentos escolares.",
      "Brasões de motoclubes, artes marciais e equipes esportivas.",
      "Personalização rápida de mochilas, estojos e ecobags em feiras e eventos."
    ],
    characteristics: [
      "Dispensa costura manual ou na máquina para aplicação do emblema.",
      "Acabamento limpo e liso no avesso do patch que não pinica a pele do cliente.",
      "Resistência excepcional à água quente, sabão e máquina de lavar roupa."
    ],
    commonErrors: [
      "❌ Tentar aplicar o patch prensando apenas pela frente por cima dos pontos grossos, impedindo o calor de chegar à cola.",
      "❌ Puxar o papel siliconado com o adesivo ainda quente, arrancando a cola junto com o papel.",
      "❌ Tentar colar patches termoadesivos em tecidos de náilon resinado ou tecidos impermeáveis com tratamento de Teflon."
    ],
    troubleshootingTips: [
      "Borda do patch descolando após a primeira lavagem: prense a peça novamente virando a roupa do avesso e aplicando mais pressão por 15 segundos a 160 °C.",
      "A cola vazou para fora da borda do bordado manchando a camiseta: corte o filme termoadesivo cerca de 1 mm a 2 mm menor que o contorno externo do patch.",
      "O tecido da camiseta amarelou sob a prensa: use sempre uma folha de teflon protetor ou papel manteiga entre a chapa da prensa e a roupa."
    ],
    dicaArtrelados: "O grande segredo para um patch termocolante nunca mais soltar: prense SEMPRE pelo avesso da roupa! O calor passa direto pelo tecido fino da camiseta e derrete a cola instantaneamente contra a base do bordado!",
    voceSabia: "Os primeiros patches termocolantes foram desenvolvidos para a NASA na década de 1960 para fixar insígnias espaciais nos trajes dos astronautas da missão Apollo sem furar as camadas herméticas de proteção térmica!",
    practicalExercise: "Pegue um retalho de tecido e um patch com termoadesivo. Pressione com o ferro de passar na temperatura algodão (sem vapor) por 15 segundos pelo avesso da peça. Espere esfriar 1 minuto e tente puxar a pontinha com as unhas para testar a incrível força da cola.",
    quickSummary: "Termoadesivos de Alta Aderência são filmes termoplásticos que colam emblemas e patches bordados permanentemente nas roupas usando o calor de prensas térmicas.",
    relatedTerms: ["Patch Bordado", "Prensa Térmica", "Ponto Cheio de Borda (Borda Patch)", "Papel Siliconado", "Termocolante Permanente"],
    tags: ["termoadesivo", "termocolante", "patches", "emblemas", "prensa termica", "acabamento"]
  },
  {
    id: "tabela-de-conversao-de-formatos-pes-dst-jef-exp-xxx",
    code: "T-070",
    letter: "T",
    term: "Tabela de Conversão de Formatos de Arquivos de Bordado (.PES, .DST, .JEF, .EXP, .XXX)",
    pronunciation: "ta-be-la de con-ver-são de for-ma-tos de ar-qui-vos de bor-da-do",
    level: "Iniciante 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Dos protocolos de comunicação binária desenvolvidos pelos fabricantes de máquinas mundiais (Brother, Tajima, Janome, Bernina, Singer).",
    summary: "Guia completo das extensões de arquivos de bordado, compatibilidade com cada marca de máquina e regras seguras de conversão.",
    definition: "A Tabela de Conversão de Formatos de Arquivos de Bordado (Embroidery File Format Matrix & Binary Converter Guide) é o compêndio técnico que mapeia as extensões de arquivos digitais proprietários e industriais utilizados no ecossistema global do bordado. Divide-se fundamentalmente em: 1) Formatos Nativos de Design (como .EMB do Wilcom, .ART da Bernina, que preservam curvas vetoriais, objetos e parâmetros editáveis) e 2) Formatos de Ponto de Máquina (Machine Stitch Files como .PES, .DST, .JEF, .EXP, .XXX, .HUS, .VP3, que contêm apenas coordenadas binárias de pulso X-Y e comandos de agulha).",
    technicalDetails: "Principais mapeamentos: .PES/.PEC (Brother, Babylock - armazena cores e bastidores); .DST (Tajima - padrão industrial global sem tabela de cores embutida); .JEF (Janome/Elna - coordenadas de 0,1 mm); .EXP (Melco, Bernina - código industrial expandido); .XXX (Singer, Compucon); .VP3/.HUS (Husqvarna Viking, Pfaff).",
    beginnerExplanation: "É como a lista de línguas que cada marca de máquina entende: a Brother lê .PES, a Janome lê .JEF, a Bernina lê .EXP e as máquinas industriais leem .DST. Para a sua máquina conseguir bordar uma matriz baixada da internet, o arquivo precisa estar salvo no formato certo dela.",
    howItWorks: [
      "1. A bordadeira recebe ou compra uma matriz linda na internet.",
      "2. Confere a marca da sua máquina de bordar (ex: Janome MC500E).",
      "3. Identifica na tabela que a extensão correta para Janome é .JEF.",
      "4. Abre a matriz no software conversor (como Wilcom TrueSizer ou Embird).",
      "5. Escolhe 'Salvar Como' (Save As) e seleciona o formato .JEF.",
      "6. Transfere o arquivo para o pendrive e conecta na máquina para bordar perfeitamente."
    ],
    applications: [
      "Conversão diária de matrizes compradas para a marca de máquina do ateliê.",
      "Envio de pacotes de matrizes comerciais em múltiplos formatos para clientes.",
      "Padronização de arquivos em formato universal .DST para prestação de serviços industriais.",
      "Identificação rápida de incompatibilidades de bastidor em arquivos baixados."
    ],
    characteristics: [
      "Permite que qualquer máquina borde qualquer matriz após a devida conversão.",
      "Conversão rápida e 100% gratuita através de visualizadores homologados.",
      "Fundamental para quem tem máquinas de marcas diferentes no mesmo ateliê."
    ],
    commonErrors: [
      "❌ Apenas renomear a extensão do arquivo no Windows de '.PES' para '.JEF' pelo teclado (o arquivo corrompe e a máquina não lê).",
      "❌ Salvar em .DST para uma máquina doméstica e achar que as cores da matriz sumiram (o DST não grava nomes de cores).",
      "❌ Salvar uma matriz de 13x18 cm para uma máquina pequena de bastidor 10x10 cm (.PES de máquina antiga que recusa o arquivo)."
    ],
    troubleshootingTips: [
      "A máquina Janome diz 'Arquivo não suportado' ou pasta vazia no pendrive: você salvou em .PES ou o nome do arquivo tem acentos, cedilha ou mais de 8 caracteres; renomeie para 'FLOR1.JEF'.",
      "As cores do arquivo .DST abriram todas verdes e azuis no computador: é normal em arquivos .DST industriais; acompanhe a folha de impressão em papel com as cores originais.",
      "O pendrive não é reconhecido pela máquina de bordar: formate o pendrive em formato FAT32 em computadores com Windows."
    ],
    dicaArtrelados: "Nunca use acentos, espaços nem caracteres especiais no nome das matrizes (como 'coração_bebê.pes')! Salve sempre como 'coracao_bebe.pes'. Muitas máquinas travam ou não reconhecem arquivos com ç ou acentos no pendrive!",
    voceSabia: "O formato .DST foi criado pela Tajima no Japão na era das fitas de papel perfurado (Punch Cards), e sua estrutura é tão perfeita e leve que o código de ponto de 1978 continua sendo o padrão ouro universal até hoje em pleno século XXI!",
    practicalExercise: "Abra um visualizador gratuito como o TrueSizer. Abra uma matriz sua em .PES. Use a opção 'Exportar Arquivo de Máquina' e salve uma cópia em .JEF e outra em .DST. Veja como os tamanhos dos arquivos em kilobytes mudam mantendo o mesmo número de pontos.",
    quickSummary: "Tabela de Conversão de Formatos é o mapa de extensões (.PES, .DST, .JEF, etc.) que orienta como transformar matrizes para serem lidas por qualquer marca de máquina de bordar.",
    relatedTerms: ["Formato .PES", "Formato .DST", "Formato .JEF", "Formato .EXP", "Software de Conversão (TrueSizer)"],
    tags: ["formatos", "extensao", "conversao", "pes", "dst", "jef", "exp", "softwares"]
  },
  {
    id: "trilhos-lineares-prismaticos-e-guias-de-alta-rigidez",
    code: "T-071",
    letter: "T",
    term: "Trilhos Lineares Prismáticos e Guias de Alta Rigidez (Prismatic Linear Guideways)",
    pronunciation: "tri-lhos li-ne-a-res pris-má-ti-cos e gui-as de al-ta ri-gi-dez",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da mecatrônica de centros de usinagem CNC de altíssima precisão (THK, Hiwin, Rexroth).",
    summary: "Trilhos de aço retificado com patins de microesferas que guiam o pantógrafo com deslocamento suave, sem vibração e com folga zero.",
    definition: "Os Trilhos Lineares Prismáticos e Guias de Alta Rigidez (Linear Motion Guideways / Perfis Lineares com Patins de Esferas Recirculantes) são componentes mecânicos de altíssima precisão instalados na base e na viga transversal do pantógrafo de máquinas de bordar industriais. Substituem com superioridade absoluta as antigas hastes cilíndricas de buchas de bronze. Compostos por barras retificadas de aço cromo-molibdênio temperado por indução e blocos (patins) contendo quatro fileiras de microesferas de aço recirculantes, esses trilhos suportam momentos de torção e cargas dinâmicas pesadas em todas as direções com coeficiente de atrito quase nulo.",
    technicalDetails: "Fabricados com tolerâncias micrométricas (Classe de Precisão H/P com pré-carga ZB/Z0 para folga radial zero). Incorporam raspadores de borracha sintética nas extremidades (End Seals) que impedem a entrada de fiapos de linha e poeira têxtil nas pistas de rolamento. Lubrificados com graxa sintética complexa de lítio (Graxa NLGI 2).",
    beginnerExplanation: "São os trilhos de aço brilhante superlisos onde o braço da máquina corre. Eles usam pequenas rodinhas de esferas de aço escondidas que fazem a máquina deslizar com a suavidade de patins no gelo, mesmo em altíssima velocidade e carregando bastidores bem pesados.",
    howItWorks: [
      "1. O servomotor traciona o conjunto do pantógrafo para movimentar o bastidor.",
      "2. Os patins de esferas deslizam sobre as pistas prismáticas retificadas do trilho.",
      "3. As microesferas internas recirculam continuamente absorvendo todas as vibrações mecânicas.",
      "4. Os raspadores frontais limpam os fiapos de tecido e poeira da superfície do trilho em tempo real.",
      "5. A estrutura mantém rigidez geométrica absoluta sem qualquer jogo ou folga lateral.",
      "6. A agulha penetra com precisão milimétrica garantindo contornos sem desvio."
    ],
    applications: [
      "Estrutura do pantógrafo de máquinas industriais de alta velocidade (1.000 a 1.200 PPM).",
      "Bordados de pontes contínuas para rolos de tecidos e cortinas de 3 a 10 metros de largura.",
      "Máquinas tubulares pesadas para bordados de malas e estofados volumosos.",
      "Upgrades estruturais de precisão para eliminação de vibração em ateliês industriais."
    ],
    characteristics: [
      "Rigidez mecânica excepcional com capacidade de carga dinâmica de centenas de quilos.",
      "Vida útil superior a 10 anos em regime contínuo de trabalho industrial.",
      "Movimento linear suave e silencioso que reduz o desgaste dos motores."
    ],
    commonErrors: [
      "❌ Deixar os trilhos sem lubrificação até as microesferas oxidarem ou travarem por atrito seco.",
      "❌ Usar solventes agressivos como querosene ou tíner na limpeza dos patins, ressecando os retentores de borracha.",
      "❌ Bater ferramentas de metal nos trilhos retificados criando dentes e marcas na pista de rolagem."
    ],
    troubleshootingTips: [
      "Pantógrafo emperrando ou trepidando com ruído áspero ao mover manualmente: limpe a guia linear com pano seco e injete graxa nova com bico dosador através do niple de graxa do patim.",
      "Contornos de letras pequenas saindo 'ondulados' em alta velocidade: verifique os parafusos de fixação dos trilhos lineares na estrutura da máquina com chave torx/allen calibrada.",
      "Fiapos de linha acumulando dentro do patim: substitua os retentores raspadores de borracha (End Seals) que estão desgastados."
    ],
    dicaArtrelados: "Mantenha a superfície dos trilhos lineares brilhando como um espelho! Uma vez por semana, passe um paninho de microfibra macio e limpo para tirar a poeira de linha do ateliê. Nunca use esponja de aço ou lixa para não riscar a têmpera do aço!",
    voceSabia: "A empresa japonesa THK foi a pioneira no desenvolvimento das primeiras guias lineares de esferas recirculantes do mundo em 1972, revolucionando para sempre a indústria de máquinas-ferramenta, robôs cirúrgicos e máquinas de bordar computadorizadas!",
    practicalExercise: "Olhe com uma lanterna para os trilhos de aço do pantógrafo da sua máquina industrial. Localize o bico prateado de lubrificação (niple de graxa) em cada patim e observe como o bloco se desloca sem nenhuma folga lateral perceptível.",
    quickSummary: "Trilhos Lineares Prismáticos são as guias de aço retificado com rolamentos de esferas que garantem o movimento suave, rígido e sem folga do pantógrafo da máquina.",
    relatedTerms: ["Pantógrafo Industrial", "Folga Mecânica (Backlash)", "Graxa de Lítio", "Servomotor", "Manutenção Preventiva"],
    tags: ["trilhos lineares", "guias", "mecanica", "rolamentos", "pantografo", "manutencao"]
  },
  {
    id: "gabaritos-plasticos-de-alinhamento-e-grade-de-bastidor",
    code: "T-072",
    letter: "T",
    term: "Gabaritos Plásticos de Alinhamento e Grades Centralizadoras de Bastidor (Hoop Alignment Templates)",
    pronunciation: "ga-ba-ri-tos plás-ti-cos de a-li-nha-men-to e gra-des cen-tra-li-za-do-ras de bas-ti-dor",
    level: "Iniciante 🟢",
    category: "Bastidores & Acessórios",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do árabe qalib (molde/matriz) e do latim gradus (passo/grau). Acessório fundamental fornecido com as máquinas de bordar.",
    summary: "Placas plásticas transparentes com cruz de centro e régua quadriculada que vêm com o bastidor para posicionar o bordado perfeitamente reto.",
    definition: "Os Gabaritos Plásticos de Alinhamento e Grades Centralizadoras de Bastidor (Embroidery Hoop Plastic Template Grids / Alignment Sheets) são folhas rígidas transparentes de acetato ou acrílico milimetrado que se encaixam com precisão nas fendas internas do aro do bastidor. Possuem gravação de eixos cartesianos X e Y em cruz, marcação do centro exato (ponto 0,0), furos pequenos para passagem de caneta fantasminha e réguas graduadas em centímetros ou polegadas, permitindo ao bordador coincidir o centro da peça de tecido marcado com giz com o centro do bastidor antes de travar o parafuso.",
    technicalDetails: "Possuem pinos plásticos ou saliências nas bordas que garantem encaixe unívoco no aro interno do bastidor. O orifício central de 1,5 mm permite inserir a ponta da caneta temporária para marcar o ponto de origem da agulha (Ponto de Partida). Devem ser sempre removidos do bastidor antes de encaixar na máquina para evitar colisões com a agulha.",
    beginnerExplanation: "É aquela plaquinha de plástico transparente furadinha com uma cruz desenhada que vem dentro da caixa de cada bastidor da máquina. Você coloca ela dentro do bastidor para ver se o nome vai ficar bem no meio da toalha e não ficar torto.",
    howItWorks: [
      "1. A bordadeira marca o centro desejado na toalha ou camisa com uma caneta mágica temporária.",
      "2. Encaixa o gabarito plástico dentro do aro interno do bastidor.",
      "3. Coloca o bastidor sobre a peça, alinhando a cruz desenhada no plástico com a marcação do tecido.",
      "4. Encaixa o aro externo por baixo e aperta o parafuso do bastidor mantendo o alinhamento perfeito.",
      "5. REMOVE O GABARITO PLÁSTICO do bastidor (passo fundamental).",
      "6. Encaixa o bastidor na máquina e inicia o bordado com a certeza de centralização 100% reta."
    ],
    applications: [
      "Bordados em bolsos, peitilhos de camisa polo e golas sociais.",
      "Centralização exata em toalhas de banho, panos de prato e lençóis.",
      "Alinhamento de matrizes divididas em múltiplos bastidores (Multi-Hooping).",
      "Posicionamento perfeito de monogramas em guardanapos de tecido de casamento."
    ],
    characteristics: [
      "Transparência total que permite enxergar as linhas e estampas do tecido por baixo.",
      "Graduação em milímetros para conferência de medidas e ângulos retos.",
      "Acessório reutilizável de altíssima durabilidade."
    ],
    commonErrors: [
      "❌ ESQUECER O GABARITO PLÁSTICO DENTRO DO BASTIDOR e dar 'Start' na máquina (a agulha desce com força, quebra e danifica a lançadeira).",
      "❌ Guardar os gabaritos soltos amassando ou riscando a transparência com tesouras.",
      "❌ Tentar forçar o gabarito de um bastidor 13x18 dentro de um bastidor 10x10 cm de tamanho diferente."
    ],
    troubleshootingTips: [
      "Bordado ficando torto em toalhas listradas: alinhe a linha horizontal da grade plástica paralelamente com a barra decorativa da toalha antes de apertar o bastidor.",
      "A agulha bateu no gabarito plástico e quebrou: desligue a máquina, remova os estilhaços plásticos da chapa de ponto, troque a agulha e faça o teste de sincronismo manual girando o volante.",
      "Gabarito plástico quebrou ou perdeu: imprima a folha de gabarito em escala 1:1 gerada pelo software em papel vegetal ou plástico transparência."
    ],
    dicaArtrelados: "Crie o hábito sagrado de dizer em voz alta antes de apertar o botão verde da máquina: 'Tirei o plástico do bastidor?'! Esse simples costume de 1 segundo salva sua agulha, sua máquina e seu bastidor de acidentes graves!",
    voceSabia: "Na produção industrial em série, os gabaritos plásticos são substituídos por feixes de luz Laser Crosshair (Mira Laser em Cruz) projetados do teto sobre o tecido, iluminando a cruz de centro sem precisar colocar e tirar peças plásticas!",
    practicalExercise: "Pegue seu bastidor médio e seu gabarito plástico. Marque uma cruz com giz em um retalho. Coloque o gabarito no bastidor e pratique encaixar o tecido fazendo a cruz do giz coincidir exatamente com a cruz do plástico. Aperte o bastidor e retire o plástico.",
    quickSummary: "Gabaritos Plásticos de Alinhamento são as réguas transparentes com grade e cruz central que guiam o enquadramento do tecido no bastidor para o bordado não ficar torto.",
    relatedTerms: ["Aro do Bastidor", "Cruz de Centro (Origin)", "Caneta Fantasminha", "Laser de Alinhamento", "Marcação de Tecido"],
    tags: ["gabarito", "grade", "bastidor", "alinhamento", "centralizacao", "acessorios"]
  },
  {
    id: "teste-de-queda-de-gota-e-calibracao-de-bobina",
    code: "T-073",
    letter: "T",
    term: "Teste de Queda de Gota e Calibração de Caixa de Bobina (Yo-Yo Drop Test & Bobbin Tension Tuning)",
    pronunciation: "tés-te de que-da de go-ta e ca-li-bra-são de cai-xa de bo-bi-na",
    level: "Iniciante 🟢",
    category: "Tensão & Ajustes",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do método empírico de alfaiataria e bordado manual tradicional conhecido mundialmente como Yo-Yo Test.",
    summary: "O clássico teste prático feito na mão com a ponta da linha para regular o parafuso da caixa de bobina no peso e tensão exatos.",
    definition: "O Teste de Queda de Gota e Calibração de Caixa de Bobina (Método do Io-Iô / Drop Test / Bobbin Tension Gravity Calibration) é o procedimento prático e manual mais tradicional e eficaz utilizado por bordadeiras e técnicos do mundo todo para ajustar a mola de tensão da caixa de bobina sem a necessidade imediata de um tensiômetro digital caríssimo. Consiste em segurar a ponta da linha da bobina suspensa no ar com a mão: a caixa de bobina com a carretilha cheia deve ficar suspensa sem cair; ao dar um leve toquezinho de pulso para cima (como se jogasse um io-iô), a caixa deve descer suavemente de 2 a 5 centímetros e parar.",
    technicalDetails: "Equivale a uma força de tensão de arrasto dinâmico entre 22 e 28 gramas-força (gf) para caixas de bobina tipo L industrial e entre 18 e 22 gf para máquinas domésticas. O ajuste é feito girando o parafuso maior da mola externa em frações mínimas de 1/8 de volta (sentido horário aperta; anti-horário solta).",
    beginnerExplanation: "É o teste do 'io-iô' com a caixa da bobina na mão! Você segura a pontinha da linha para cima: a caixinha não pode despencar no chão (muito frouxa) nem ficar travada que nem pedra quando você dá um sacudidinho na mão (muito apertada). Ela tem que descer um pouquinho e parar, bem macia.",
    howItWorks: [
      "1. A bordadeira coloca a bobina cheia de linha branca de poliéster dentro da caixa de bobina metálica.",
      "2. Passa a linha pela fenda da mola de tensão externa no sentido correto.",
      "3. Segura a ponta da linha entre os dedos indicador e polegar, deixando a caixa suspensa no ar.",
      "4. Observa: a caixa não deve cair sozinha pelo próprio peso.",
      "5. Dá um leve movimento de pulso para cima (como um io-iô suave).",
      "6. A caixa deve descer cerca de 3 cm e estancar. Se cair demais, aperta-se o parafuso 1/8 de volta; se não descer nada, solta-se o parafuso 1/8 de volta."
    ],
    applications: [
      "Calibração diária da tensão inferior antes de iniciar a produção no ateliê.",
      "Ajuste da caixa de bobina após trocar de marca ou espessura de linha de bobina.",
      "Resolução rápida de problemas de linha de bobina subindo para o direito do bordado.",
      "Garantia do padrão de ouro de 1/3 de linha de bobina no verso do ponto cheio (regra dos terços)."
    ],
    characteristics: [
      "Método 100% gratuito que não exige aparelhos eletrônicos.",
      "Executável em menos de 10 segundos na bancada do ateliê.",
      "Funciona com caixas de bobina de todas as marcas (Brother, Janome, Tajima, Barudan, SunSpecial)."
    ],
    commonErrors: [
      "❌ Girar o parafuso pequeno de fixação da mola em vez do parafuso maior de ajuste de tensão.",
      "❌ Dar voltas completas no parafuso espanando a rosca microscópica da caixinha.",
      "❌ Fazer o teste com a bobina quase vazia (o peso fica leve demais e a leitura fica errada)."
    ],
    troubleshootingTips: [
      "Linha branca da bobina aparecendo em cima do bordado colorido: a bobina está muito frouxa ou a linha de cima muito apertada; aperte o parafuso da caixa 1/8 de volta no sentido horário.",
      "Bordado ficando duro como uma tábua e enrugando o tecido: a bobina está apertada demais e repuxando os pontos; solte o parafuso da caixa 1/8 de volta no sentido anti-horário.",
      "O parafuso gira em falso sem dar aperto: a rosca da mola espanou; troque a mola de tensão ou a caixa de bobina completa."
    ],
    dicaArtrelados: "Para mexer no parafuso da bobina: use a menor chave de fenda do seu kit e gire como se estivesse mexendo no ponteiro dos minutos de um relógio: apenas 5 minutinhos para a direita ou esquerda! Nunca dê voltas inteiras!",
    voceSabia: "Nas fábricas da Brother e da Janome no Japão, cada máquina nova é testada antes de ser embalada com um tensiômetro de precisão que mede a tração da caixa de bobina em exatamente 25 gramas a 20 °C de temperatura ambiente!",
    practicalExercise: "Pegue sua caixa de bobina e faça o teste do io-iô agora mesmo sobre uma almofada ou toalha macia (para não amassar se cair). Sinta a sensibilidade da mola e veja se a sua caixinha desce suavemente com o toque de pulso.",
    quickSummary: "Teste de Queda de Gota (Método do Io-Iô) é o ajuste prático segurando a ponta da linha para calibrar a tensão da caixa de bobina de forma rápida e precisa.",
    relatedTerms: ["Caixa de Bobina", "Tensão de Linha", "Regra dos Terços (1/3)", "Linha de Bobina", "Tensiômetro Towa"],
    tags: ["teste de queda", "ioio", "caixa de bobina", "tensao", "calibracao", "ajustes", "manutencao"]
  },
  {
    id: "termos-de-garantia-e-politica-de-trocas-para-personalizados",
    code: "T-074",
    letter: "T",
    term: "Termos de Garantia e Política de Trocas para Produtos Personalizados (Custom Embroidery Warranty & Return Policy)",
    pronunciation: "ter-mos de ga-ran-ti-a e po-lí-ti-ca de tro-cas pa-ra pro-du-tos per-so-na-li-za-dos",
    level: "Iniciante 🟢",
    category: "Gestão & Produção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do Direito do Consumidor (Código de Defesa do Consumidor - Lei nº 8.078/90) e práticas de gestão de ateliês.",
    summary: "Regras comerciais e jurídicas claras que definem prazos, aprovação prévia de layout e protegem o ateliê contra desistências em peças com nomes bordados.",
    definition: "Os Termos de Garantia e Política de Trocas para Produtos Personalizados (Customized Goods Contract & Terms of Sale) são o conjunto de diretrizes operacionais, contratuais e de atendimento que regulamentam a relação comercial entre o ateliê de bordado e o cliente final. Estabelecem as regras de: 1) Aprovação Formal de Layout (o cliente valida a grafia de nomes, cores e medidas antes de bordar via mensagem ou documento assinado), 2) Exceção ao Direito de Arrependimento do CDC (produtos personalizados sob encomenda não possuem troca por desistência de modelo, apenas por vício oculto ou erro comprovado do ateliê), 3) Prazos de Produção e Entrega e 4) Instruções de Lavagem e Cuidados.",
    technicalDetails: "Em conformidade com a jurisprudência brasileira do Artigo 49 do CDC, produtos manufaturados sob encomenda exclusiva e personalizada com nomes, monogramas ou medidas específicas estão isentos da devolução por mero arrependimento sem justo motivo, desde que o produto entregue corresponda rigorosamente ao layout pré-aprovado pelo cliente.",
    beginnerExplanation: "É o combinadinho por escrito que você faz com a cliente antes de ligar a máquina! Você manda a foto do desenho com o nome da criança para ela conferir letra por letra e dar o 'OK'. Assim, ninguém fica no prejuízo e seu ateliê trabalha com total segurança e respeito.",
    howItWorks: [
      "1. A cliente solicita o bordado de um enxoval com o nome 'Helena'.",
      "2. A bordadeira monta a matriz no software e gera a imagem de simulação (Mockup) com as cores reais da linha.",
      "3. Envia a simulação para a cliente no WhatsApp com a frase: 'Por favor, confira a grafia do nome e cores para darmos início'.",
      "4. A cliente responde: 'Aprovado!'.",
      "5. A bordadeira executa a encomenda com base estrita no que foi aprovado.",
      "6. A peça é entregue com uma linda tag contendo as instruções de lavagem e garantia de acabamento."
    ],
    applications: [
      "Proteção jurídica e financeira do ateliê contra clientes que escrevem nomes errados no pedido.",
      "Padronização do atendimento em vendas pelo WhatsApp e redes sociais.",
      "Instrução de clientes sobre cuidados com fios de poliéster, temperatura de ferro e lavagem.",
      "Construção de uma imagem profissional e confiável perante o mercado."
    ],
    characteristics: [
      "Elimina discussões e desentendimentos no momento da entrega da encomenda.",
      "Garante a segurança jurídica do trabalho artesanal e personalizado.",
      "Valoriza o profissionalismo e a transparência do ateliê."
    ],
    commonErrors: [
      "❌ Bordar uma encomenda grande apenas pelo que a cliente falou por áudio sem mandar foto do layout para confirmação por escrito.",
      "❌ Aceitar a troca de uma toalha bordada com o nome de uma criança porque a mãe 'mudou de ideia sobre a cor da toalha' após pronta.",
      "❌ Não entregar orientações de lavagem e a cliente passar ferro fervendo diretamente sobre o bordado derretendo os fios."
    ],
    troubleshootingTips: [
      "A cliente disse que o nome está errado após receber a toalha: consulte o histórico do WhatsApp; se o nome foi bordado exatamente como ela escreveu e aprovou na foto, mostre com educação a aprovação prévia.",
      "Fio desfiou após a cliente lavar na máquina: ofereça o conserto cortesia no ateliê como demonstração de excelente pós-venda, fidelizando a cliente.",
      "Cliente cancelou o pedido com a peça já bordada no bastidor: o sinal financeiro de 50% pago na entrada cobre os custos de insumos e tempo de produção."
    ],
    dicaArtrelados: "Trabalhe SEMPRE com sinal de 50% no momento da encomenda e os 50% restantes na entrega! E nunca borde nenhum nome sem a cliente mandar um 'Aprovado' por escrito na foto da simulação! Isso traz paz de espírito e profissionalismo total para o seu dia a dia!",
    voceSabia: "Grandes ateliês de moda e enxovais de luxo incluem uma pequena etiqueta de tecido com a data e o lote de produção no forro da peça bordada, servindo como certificado de autenticidade e garantia vitalícia da qualidade dos pontos!",
    practicalExercise: "Crie um textinho padrão carinhoso e profissional no bloco de notas do seu celular com a política do seu ateliê (prazo de confecção, sinal de 50%, aprovação de layout e cuidados de lavagem) para enviar a todas as novas clientes que pedirem orçamento.",
    quickSummary: "Termos de Garantia e Política de Trocas são as regras transparentes de aprovação prévia de layout que protegem o ateliê e garantem a satisfação das clientes em peças personalizadas.",
    relatedTerms: ["Aprovação de Layout (Mockup)", "Gestão de Ateliê", "Instruções de Lavagem", "Precificação", "Pós-Venda"],
    tags: ["garantia", "trocas", "politica", "personalizados", "gestao", "contrato", "atendimento"]
  }
];

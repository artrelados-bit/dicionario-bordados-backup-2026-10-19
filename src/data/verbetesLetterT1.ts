import { Verbete } from "../types";

export const VERBETES_LETTER_T1: Verbete[] = [
  {
    id: "tatami-ponto-tatami-fill-stitch",
    code: "T-001",
    letter: "T",
    term: "Tatami (Ponto Tatami / Fill Stitch)",
    pronunciation: "ta-ta-mi (fil istítxi)",
    level: "Iniciante 🟢",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino (do japonês 畳, tatami).",
    origin: "Originário da palavra japonesa 'tatami' (esteira tradicional de palha de junco entrelaçada). No bordado mecânico e digital, batizou o padrão de costura contínua de preenchimento plano com deslocamento alternado de penetrações.",
    summary: "Estrutura fundamental de ponto de preenchimento para cobrir grandes áreas com firmeza, estabilidade dimensional e textura regular entrelaçada.",
    definition: "O Tatami (também denominado Fill Stitch, Ceifador ou Ponto Esteira) é a estrutura de ponto primária utilizada para preencher áreas médias e extensas em matrizes de bordado. É composto por fileiras paralelas de pontos corridos com espaçamento uniforme, onde as penetrações da agulha em linhas consecutivas são matematicamente defasadas (geralmente em 1/2, 1/3 ou 1/4 do comprimento do ponto). Esse entrelaçamento evita a formação de linhas visíveis de perfuração contínua, gerando uma superfície homogênea, estável e resistente.",
    technicalDetails: "Os parâmetros cruciais do tatami incluem o comprimento de ponto (stitch length, usualmente entre 3,5 mm e 4,5 mm), o espaçamento entre linhas (densidade, tipicamente 0,40 mm a 0,45 mm) e a fração de deslocamento (stitch offset, padrão de 0,25 ou 0,33). A direção do ângulo do ponto deve ser programada a 30° a 45° em relação à trama do tecido para equilibrar as forças de tração e minimizar o enrugamento.",
    beginnerExplanation: "É o ponto que parece um tapete ou tecido bem fechadinho, usado para pintar com linha os desenhos grandes, como o fundo de um brasão, o corpo de um bichinho ou o miolo de um desenho onde o ponto cheio ficaria frouxo demais.",
    howItWorks: [
      "1. O software calcula o contorno vetorial da forma e gera linhas paralelas na inclinação definida.",
      "2. A agulha executa pontos corridos ao longo da linha até atingir a margem oposta.",
      "3. Ao chegar à borda, o pantógrafo salta para a linha seguinte com um pequeno passo perpendicular.",
      "4. As penetrações da linha de retorno são deslocadas milimetricamente em relação à linha anterior.",
      "5. A repetição do ciclo cria uma malha contínua e resistente que fixa o tecido com alta estabilidade."
    ],
    applications: [
      "Preenchimento de grandes fundos e áreas sólidas em logomarcas corporativas.",
      "Bases de brasões, bandeiras, emblemas e patches termocolantes.",
      "Corpos e áreas extensas em matrizes infantis e ilustrações artísticas.",
      "Criação de planos de fundo para receber detalhes e contornos sobrepostos em ponto cheio."
    ],
    characteristics: [
      "Extrema estabilidade mecânica, reduzindo a deformação do tecido em áreas amplas.",
      "Superfície plana, fosca ou semi-brilhante, com textura discreta e uniforme.",
      "Permite aplicação de comprimentos de ponto controlados sem deixar alças soltas que desfiem."
    ],
    commonErrors: [
      "❌ Programar tatami com densidade excessiva (< 0,32 mm) em grandes áreas, transformando o bordado em uma 'placa dura' e quebradiça.",
      "❌ Manter o ângulo do tatami rigorosamente paralelo ou perpendicular à trama de tecidos leves, provocando ondas e repuxo severo.",
      "❌ Omitir o ponto de suporte (underlay) sob o tatami, causando falhas de cobertura e exposição do tecido de fundo."
    ],
    troubleshootingTips: [
      "Bordado muito rígido ou quebrando agulha: aumente o espaçamento entre passadas de 0,38 mm para 0,45 mm e reduza a densidade do subponto.",
      "Tecido aparecendo entre as linhas: verifique se o tecido é poroso; se for, diminua o espaçamento para 0,38 mm e adicione um subponto tatami cruzado a 90°.",
      "Ondulações ou repuxamento nas bordas: altere o ângulo dos pontos em 30° a 45° em relação ao sentido de corte do tecido."
    ],
    dicaArtrelados: "Para dar um efeito de profundidade incrível sem aumentar a quantidade de pontos, use o Tatami no fundo com ângulo a 45° e os contornos ou letras em Ponto Cheio (Satin) cruzando a 135°. A luz vai refletir de forma diferente em cada ponto, valorizando muito o bordado!",
    voceSabia: "Na esteira japonesa tradicional (o tatami real), a palha é tecida com nós cruzados para dar resistência ao caminhar. O bordado digital adotou essa exata lógica geométrica para impedir que a linha se solte com o atrito do uso diário.",
    practicalExercise: "Crie um quadrado de 50x50 mm no seu programa de matrizes. Configure um tatami com comprimento de 4,0 mm e espaçamento de 0,42 mm, com subponto tatami leve a 90°. Borde em tricoline e sinta a flexibilidade do toque final.",
    quickSummary: "Ponto de preenchimento para médias e grandes áreas com pontos corridos entrelaçados, garantindo alta estabilidade dimensional e cobertura uniforme.",
    relatedTerms: ["Tatami Stitch", "Tatami de Alta Densidade", "Tatami de Baixa Densidade", "Satin Stitch", "Subponto Tatami"],
    tags: ["tatami", "preenchimento", "fill stitch", "pontos", "estruturas"]
  },
  {
    id: "tatami-stitch-estrutura-do-ponto-tatami",
    code: "T-002",
    letter: "T",
    term: "Tatami Stitch (Estrutura do Ponto Tatami)",
    pronunciation: "ta-ta-mi istítxi (es-tru-tu-ra do pon-to ta-ta-mi)",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Locução substantiva técnica (do inglês tatami stitch).",
    origin: "Termo técnico consolidado nos softwares de digitalização industrial (como Wilcom, Tajima DG/ML e Wings) para designar a fórmula matemática de geração dos pontos internos da grade de preenchimento.",
    summary: "Parâmetros geométricos e matemáticos que definem o comprimento, a defasagem (offset) e a amarração interna do ponto tatami.",
    definition: "O Tatami Stitch refere-se à arquitetura estrutural e ao algoritmo que organiza cada segmento linear de costura dentro de um bloco de preenchimento. Diferente do ponto cheio que viaja de margem a margem, a estrutura do tatami divide as linhas longas em segmentos menores com comprimento pré-determinado, inserindo penetrações de agulha em intervalos regulares e alternando os pontos de penetração entre linhas adjacentes para eliminar marcas de corte visual.",
    technicalDetails: "A estrutura é governada por três variáveis primárias: Stitch Length (comprimento individual do ponto, normalmente de 3,5 a 4,5 mm), Row Spacing (distância entre fileiras, de 0,38 a 0,45 mm) e Partition / Offset Fraction (defasagem percentual da agulha, tipicamente 0,25 ou 0,33). Uma defasagem de 0,5 cria um padrão de tijolo (brick), enquanto 0,25 cria um padrão diagonal sutil.",
    beginnerExplanation: "É a receita matemática que diz para a máquina onde a agulha vai furar dentro do preenchimento. É como montar uma parede de tijolos: os tijolos de cima nunca ficam exatamente alinhados com os de baixo, para a parede ficar forte e sem fendas.",
    howItWorks: [
      "1. O software mapeia a distância total entre as bordas do vetor na linha de varredura.",
      "2. Divide a distância total pelo comprimento de ponto configurado (ex: 4 mm).",
      "3. Aplica a defasagem matemática de perfuração para não coincidir com a linha anterior.",
      "4. Gera coordenadas de perfuração intermediárias com tensão balanceada.",
      "5. Mantém a continuidade da linha sem criar laçadas soltas ou pontos acumulados nas bordas."
    ],
    applications: [
      "Configuração fina de preenchimentos em softwares de digitalização profissional.",
      "Ajuste da maleabilidade de matrizes para uniformes industriais e camisas polo.",
      "Controle de reflexo de luz em desenhos realistas e rostos.",
      "Evitar marcas verticais indesejadas (lining) no centro de grandes preenchimentos."
    ],
    characteristics: [
      "Distribuição uniforme da tração da linha por toda a área do objeto.",
      "Eliminação do efeito de corte contínuo no tecido pela agulha.",
      "Possibilidade de customização de padrões matemáticos de defasagem."
    ],
    commonErrors: [
      "❌ Usar comprimento de ponto muito curto (< 2,5 mm), aumentando absurdamente o tempo de máquina e furando o tecido em excesso.",
      "❌ Configurar comprimento de ponto longo demais (> 6,0 mm) em áreas de atrito, permitindo que os fios se puxem com facilidade.",
      "❌ Deixar a defasagem em 0% (sem deslocamento), gerando 'linhas de rasgo' visíveis no meio do bordado."
    ],
    troubleshootingTips: [
      "Listras visíveis no meio do preenchimento: altere a defasagem (offset) de 0,50 para 0,33 ou 0,25 para dispersar os furos da agulha.",
      "Bordado repuxando em uma só direção: compense a inclinação do ângulo em relação à linha de costura do tecido.",
      "Falta de cobertura nas bordas da forma: ative a compensação de encolhimento (Pull Compensation) entre 0,35 mm e 0,40 mm."
    ],
    dicaArtrelados: "Se você quer um tatami com acabamento super liso e elegante em camisas de piquê, ajuste o comprimento do ponto para 4,2 mm e o espaçamento para 0,42 mm com offset de 0,25. Fica impecável, macio e a agulha não machuca o tecido!",
    voceSabia: "Os primeiros programas de matrizes dos anos 1980 tinham apenas uma fórmula fixa de tatami. Hoje, os softwares modernos permitem programar curvas de defasagem senoidais e padrões aleatórios.",
    practicalExercise: "No seu programa, crie três círculos de 30 mm com tatami. No primeiro, use offset de 0,50; no segundo, 0,25; no terceiro, 0,33. Borde os três lado a lado e compare a textura e o reflexo da luz sob diferentes ângulos.",
    quickSummary: "Conjunto de parâmetros matemáticos de comprimento e defasagem de perfuração que formam a textura e a resistência mecânica do ponto tatami.",
    relatedTerms: ["Tatami", "Comprimento do Ponto", "Espaçamento de Ponto", "Offset de Ponto", "Densidade do Ponto"],
    tags: ["tatami stitch", "estrutura", "geometria", "matriz", "digitalização"]
  },
  {
    id: "tatami-de-alta-densidade",
    code: "T-003",
    letter: "T",
    term: "Tatami de Alta Densidade",
    pronunciation: "ta-ta-mi de al-ta den-si-da-de",
    level: "Avançado 🔴",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Locução substantiva técnica.",
    origin: "Desenvolvido para aplicações industriais de alta cobertura onde o tecido de base é escuro ou de textura muito irregular e não pode transparecer sob a linha clara.",
    summary: "Configuração de tatami com espaçamento muito fechado entre fileiras (≤ 0,35 mm) para cobertura absoluta e saturação máxima de cor.",
    definition: "O Tatami de Alta Densidade é uma configuração de preenchimento onde a distância entre as fileiras de pontos é reduzida para valores inferiores a 0,36 mm (tipicamente entre 0,28 mm e 0,34 mm). Essa concentração extrema de filamentos garante uma cobertura 100% opaca, impedindo que cores contrastantes do tecido de fundo apareçam entre as passadas de linha, sendo comumente empregado em emblemas militares, patches e bordados técnicos.",
    technicalDetails: "O uso de alta densidade eleva substancialmente a contagem total de pontos (stitch count), aumentando o tempo de máquina e o consumo de linha em 25% a 40%. Para evitar a rigidez excessiva (efeito papelão) e quebras de linha por atrito, recomenda-se utilizar agulhas finas (65/9 ou 70/10) de ponta bola fina (SES), linha 100% poliéster 40 wt de alta tenacidade e reduzir a velocidade da máquina para 600 a 700 PPM.",
    beginnerExplanation: "É quando as linhas do bordado ficam tão juntinhas e coladas umas nas outras que não passa nem um pontinho de luz do tecido de baixo. Fica bem forte e bem fechado, mas pode deixar o tecido meio duro se não for bem planejado.",
    howItWorks: [
      "1. O digitalizador reduz o espaçamento entre linhas para valores entre 0,30 mm e 0,34 mm.",
      "2. A máquina realiza uma quantidade muito maior de penetrações por centímetro quadrado.",
      "3. As passadas de linha sobrepõem-se ligeiramente, criando uma barreira têxtil impenetrável.",
      "4. O tecido de base fica totalmente oculto sob a camada compacta de poliéster ou raiom."
    ],
    applications: [
      "Patches e brasões bordados sobre sarja preta com linha branca ou amarela clara.",
      "Bordados em couro sintético espesso ou tecidos técnicos impermeáveis.",
      "Bordados de alta definição que receberão serigrafia ou corte a laser posterior.",
      "Insígnias e condecorações militares que exigem durabilidade extrema a lavagens pesadas."
    ],
    characteristics: [
      "Opacidade e cobertura cromática absolutas, mesmo com fios claros sobre bases escuras.",
      "Maior rigidez estrutural da peça acabada.",
      "Significativo aumento no tempo de bordado e no número total de pontos."
    ],
    commonErrors: [
      "❌ Aplicar alta densidade em malhas leves ou tecidos finos (como tricoline ou seda), picotando a peça ou causando enrugamento severo.",
      "❌ Usar subponto muito denso em conjunto com tatami de alta densidade, acumulando linha e entupindo a laçadeira da máquina.",
      "❌ Manter a velocidade máxima da máquina (> 850 PPM), provocando superaquecimento da agulha e quebra contínua da linha."
    ],
    troubleshootingTips: [
      "Agulha quebrando ou desfiando a linha: aumente ligeiramente o espaçamento para 0,36 mm e troque por uma agulha nova com acabamento em titânio.",
      "Bordado duro como papelão: diminua a densidade do subponto (Underlay) para compensar a alta densidade da camada superior.",
      "Furos no tecido ao redor do bordado: use duas camadas de entretela de rasgar cruzadas ou entretela de cortar de 80 g/m²."
    ],
    dicaArtrelados: "Em vez de colocar um tatami super pesado com densidade 0,30 mm, experimente colocar um tatami normal de 0,42 mm sobreposto a um subponto tatami leve a 90°. Você gasta menos pontos, o tecido fica macio e a cobertura fica 100% perfeita sem endurecer a peça!",
    voceSabia: "Em patches oficiais de forças armadas internacionais, a densidade do tatami é padronizada por normas técnicas de resistência para suportar abrasão em campo sem desfiar.",
    practicalExercise: "Digitalize duas matrizes iguais de um círculo de 40 mm com linha amarela sobre tecido preto: uma com densidade padrão de 0,42 mm e outra com alta densidade de 0,32 mm. Compare a opacidade visual e a maleabilidade das duas amostras.",
    quickSummary: "Configuração de preenchimento tatami com espaçamento reduzido (≤ 0,35 mm) para máxima cobertura e opacidade, exigindo controle de rigidez e estabilização.",
    relatedTerms: ["Tatami", "Tatami de Baixa Densidade", "Densidade do Ponto", "Cobertura de Ponto", "Pull Compensation"],
    tags: ["tatami", "alta densidade", "cobertura", "patches", "opacidade"]
  },
  {
    id: "tatami-de-baixa-densidade-tatami-aberto",
    code: "T-004",
    letter: "T",
    term: "Tatami de Baixa Densidade (Tatami Aberto)",
    pronunciation: "ta-ta-mi de bai-xa den-si-da-de (ta-ta-mi a-ber-to)",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Locução substantiva técnica.",
    origin: "Criado na digitalização moderna como técnica de sombreamento, efeitos de transparência artística e alívio de peso em tecidos leves.",
    summary: "Preenchimento tatami com espaçamento aberto e arejado (≥ 0,60 mm), conferindo leveza, toque suave e efeitos de transparência.",
    definition: "O Tatami de Baixa Densidade (ou Tatami Aberto / Low Density Fill) é a configuração de preenchimento em que o espaçamento entre as fileiras de pontos é intencionalmente expandido para valores entre 0,60 mm e 2,0 mm ou mais. Em vez de formar uma placa sólida e opaca, as passadas de linha revelam a cor e a textura do tecido de fundo, criando efeitos de sombreamento suave, degradês de textura e permitindo bordar grandes áreas em roupas leves sem comprometer o caimento da peça.",
    technicalDetails: "O tatami aberto reduz o número de pontos em até 60% a 70% em comparação ao tatami padrão. Como exerce pouquíssima tensão e força de tração sobre o tecido, minimiza o repuxo e dispensa subpontos pesados. Pode ser combinado com um segundo tatami aberto em ângulo cruzado para criar efeitos de xadrez ou malha geométrica translúcida.",
    beginnerExplanation: "É um ponto de preenchimento bem espaçoso e levinho, como uma cortina transparente. Ele joga uma cor suave sobre o tecido sem cobrir tudo e sem deixar a roupa dura ou pesada.",
    howItWorks: [
      "1. O digitalizador define o espaçamento entre as passadas de linha para 0,80 mm a 1,5 mm.",
      "2. A agulha executa fileiras paralelas afastadas, permitindo que o tecido apareça nos vãos.",
      "3. A interação entre a cor da linha e a cor do tecido gera uma terceira tonalidade visual por fusão óptica.",
      "4. O tecido mantém sua elasticidade e maleabilidade natural após o bordado."
    ],
    applications: [
      "Sombreamentos suaves em rostos, animais e paisagens realistas.",
      "Grandes fundos decorativos em camisetas finas de algodão, vestidos e batas.",
      "Bordados em peças de bebê (bodys e mijões) que exigem toque ultra macio no avesso.",
      "Efeitos de aquarela e transições de cor sutis em ilustrações artísticas."
    ],
    characteristics: [
      "Toque extremamente macio e caimento natural do tecido.",
      "Economia drástica de pontos, linha e tempo de produção na máquina.",
      "Efeito estético de transparência e leveza contemporânea."
    ],
    commonErrors: [
      "❌ Utilizar tatami aberto esperando cobertura total de um tecido escuro sob linha clara.",
      "❌ Usar subponto comum (underlay) por baixo do tatami aberto, deixando os pontos de suporte feios e visíveis através das fendas.",
      "❌ Deixar o comprimento do ponto excessivamente longo (> 6 mm), criando laçadas que podem prender em anéis ou unhas."
    ],
    troubleshootingTips: [
      "Subponto aparecendo entre as linhas: desative completamente o subponto automático no software para objetos de tatami aberto.",
      "Bordas do desenho desfiando: adicione um contorno fino de ponto corrido ou ponto cheio estreito para prender as extremidades das linhas abertas.",
      "Cor da linha sumindo no tecido: aumente ligeiramente a densidade (de 1,2 mm para 0,8 mm) ou escolha uma linha com maior contraste cromático."
    ],
    dicaArtrelados: "Para fazer roupas infantis e bodys de bebê com desenhos grandes sem irritar a pele sensível da criança, use sempre o Tatami Aberto (espaçamento 0,80 mm a 1,0 mm) com entretela hidrossolúvel ou de malha. O bordado fica leve como uma pluma e não arranha!",
    voceSabia: "Artistas de bordado de alta costura em Paris utilizam tatami aberto de fios de seda ultrafinos para reproduzir o efeito de pintura a óleo translúcida sobre vestidos de gala.",
    practicalExercise: "Crie uma flor de 60 mm no seu programa. Preencha as pétalas com tatami aberto a 1,0 mm sem subponto usando linha rosa sobre tecido branco. Borde e veja como a peça fica maleável e suave.",
    quickSummary: "Preenchimento tatami com espaçamento expandido (≥ 0,60 mm) para efeitos de transparência, sombreamento artístico e preservação da maciez do tecido.",
    relatedTerms: ["Tatami", "Tatami de Alta Densidade", "Tatami com Variação de Densidade", "Sombreamento", "Transparência"],
    tags: ["tatami aberto", "baixa densidade", "leveza", "infantil", "degrade"]
  },
  {
    id: "tatami-com-variacao-de-direcao-angulo",
    code: "T-005",
    letter: "T",
    term: "Tatami com Variação de Direção / Ângulo",
    pronunciation: "ta-ta-mi com va-ri-a-ção de di-re-ção / ân-gu-lo",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva técnica.",
    origin: "Técnica desenvolvida nos softwares de bordado vetorial para acompanhar o fluxo natural de formas orgânicas (cabelos, ondas, asas e pétalas) sem quebrar o preenchimento em múltiplos blocos.",
    summary: "Preenchimento tatami onde as linhas de costura seguem curvas e guias direcionais dinâmicas, criando movimento e reflexos de luz tridimensionais.",
    definition: "O Tatami com Variação de Direção / Ângulo (também conhecido como Florentine Effect, Curved Fill ou Ponto de Linhas Curvas) é um recurso avançado de digitalização em que as fileiras de pontos tatami não seguem uma única inclinação linear reta fixa. Em vez disso, curvam-se de forma suave acompanhando linhas-guia vetoriais, fluxos anatômicos ou trajetórias radiais definidas pelo programador, gerando sensação de volume, dinamismo e brilho óptico variável.",
    technicalDetails: "Nos softwares profissionais, o efeito é programado inserindo linhas de curva guia (Stitch Angle Guides). O algoritmo reconfigura a densidade e o comprimento de cada ponto individual ao longo do raio de curvatura para evitar sobreposição excessiva de perfurações na parte interna da curva e espaçamento exagerado na parte externa, mantendo a integridade estrutural.",
    beginnerExplanation: "É quando as linhas do tatami fazem curvas como se fossem ondas do mar ou fios de cabelo ao vento, em vez de ficarem retinhas como tábuas. Isso faz o desenho parecer vivo e em três dimensões quando a luz bate nele.",
    howItWorks: [
      "1. O programador desenha a forma vetorial fechada no software de matrizes.",
      "2. Adiciona uma ou mais linhas-guia que determinam a direção do fluxo dos pontos.",
      "3. O software distorce suavemente as fileiras de tatami para acompanhar a curvatura das guias.",
      "4. As penetrações da agulha são recalculadas dinamicamente para preservar o entrelaçamento.",
      "5. A máquina borda fileiras curvas que refletem a luz em múltiplos ângulos conforme o observador se move."
    ],
    applications: [
      "Bordado realista de cabelos, crinas de cavalos, pelagens e plumas de pássaros.",
      "Efeitos de água, ondas do mar, nuvens e chamas de fogo estilizadas.",
      "Pétalas de flores e folhas que se curvam organicamente.",
      "Letras com efeito caligráfico de relevo e reflexo dinâmico."
    ],
    characteristics: [
      "Altíssimo valor estético e sensação de profundidade 3D no bordado.",
      "Reflexo de luz cintilante e variável sobre a superfície da linha de poliéster ou raiom.",
      "Acompanhamento anatômico perfeito de ilustrações complexas."
    ],
    commonErrors: [
      "❌ Criar curvas muito fechadas e abruptas (< 30°), gerando acúmulo extremo de pontos e nós na parte interna da curva.",
      "❌ Esquecer de ajustar o subponto, permitindo que a linha de suporte cruze em ângulos conflitantes e apareça na superfície.",
      "❌ Aplicar em tecidos muito elásticos sem estabilização bidirecional, causando torção assimétrica na peça."
    ],
    troubleshootingTips: [
      "Agulha batendo e quebrando linha no centro da curva: suavize os nós da linha-guia para tornar o raio de curvatura mais aberto.",
      "Falhas de cobertura nas extremidades externas da curva: reduza ligeiramente o espaçamento geral para compensar o estiramento das linhas externas.",
      "Tecido repuxando em espiral: utilize uma entretela de cortar de alta gramatura e borde com bastidor bem calibrado."
    ],
    dicaArtrelados: "Para criar o efeito de água cristalina ou cachoeira, use tatami com linhas curvas suaves em tons de azul e branco. O brilho da linha refletindo nas diferentes curvas dá a impressão real de água em movimento!",
    voceSabia: "O nome internacional 'Florentine' remonta aos bordados renascentistas de Florença do século XVI (conhecidos como ponto bargello), onde linhas onduladas coloridas criavam ilusões de ótica em almofadas e tapeçarias.",
    practicalExercise: "Crie uma pétala de flor em formato de gota. Aplique uma linha guia curva acompanhando a lateral da pétala e configure o tatami. Borde com linha brilhante de raiom e compare com uma pétala feita em tatami reto comum.",
    quickSummary: "Preenchimento tatami que segue trajetórias curvas e guias vetoriais, proporcionando dinamismo anatômico, volume e reflexos luminosos tridimensionais.",
    relatedTerms: ["Tatami", "Tatami com Textura", "Florentine Effect", "Ângulo do Ponto", "Reflexo Óptico"],
    tags: ["tatami", "curvado", "angulo", "efeito florentino", "movimento"]
  },
  {
    id: "tatami-com-variacao-de-densidade-tatami-degrade",
    code: "T-006",
    letter: "T",
    term: "Tatami com Variação de Densidade (Tatami Degradê)",
    pronunciation: "ta-ta-mi com va-ri-a-ção de den-si-da-de (ta-ta-mi de-gra-dê)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva técnica.",
    origin: "Técnica digital de mescla de cores desenvolvida para reproduzir gradientes visuais da pintura e da computação gráfica no bordado automatizado.",
    summary: "Preenchimento tatami com espaçamento progressivo variável (de denso para aberto), utilizado para fusão perfeita de cores e efeitos de sombra.",
    definition: "O Tatami com Variação de Densidade (conhecido como Tatami Degradê, Gradiente ou Accordion Stitch) é o método de programação em que a distância entre as fileiras de pontos se altera de maneira gradual e contínua ao longo do objeto. Inicia-se, por exemplo, com alta densidade (0,35 mm) em uma extremidade e transiciona suavemente até uma densidade muito aberta (1,50 mm ou mais) na extremidade oposta, permitindo sobrepor duas ou mais cores para criar transições cromáticas sem linhas duras de divisão.",
    technicalDetails: "A transição pode ser linear, exponencial ou logarítmica, de acordo com o perfil de gradiente escolhido no software. Para fundir duas cores (ex: amarelo e vermelho para formar laranja), sobrepõem-se dois blocos de tatami idênticos com a mesma inclinação de ângulo: o primeiro transiciona de 0,38 mm para 1,80 mm da esquerda para a direita, e o segundo transiciona de 1,80 mm para 0,38 mm na mesma direção.",
    beginnerExplanation: "É a mágica de fazer uma cor se misturar com outra no bordado, como um pôr do sol que vai do amarelo pro laranja e depois pro vermelho, sem que fique uma divisão dura entre as cores.",
    howItWorks: [
      "1. O primeiro bloco de cor é programado começando bem fechado e abrindo os pontos até o final.",
      "2. O segundo bloco de cor é posicionado por cima, começando bem aberto e fechando até o final.",
      "3. As agulhas entrelaçam os pontos nos vãos abertos de ambas as camadas.",
      "4. Aos olhos humanos, as duas cores de linha se misturam oticamente, gerando uma nova cor intermediária."
    ],
    applications: [
      "Pôr do sol, chamas, auroras e paisagens com céu gradiente.",
      "Logomarcas corporativas modernas que possuem identidade visual com degradê.",
      "Pétalas de flores, penas de araras e pelagens de animais realistas.",
      "Efeitos de luz e sombra (escuridão para claridade) em ilustrações artísticas."
    ],
    characteristics: [
      "Fusão óptica suave entre diferentes cores de linha sem emendas visíveis.",
      "Redução de espessura e peso em comparação a blocos sobrepostos comuns.",
      "Visual refinado e contemporâneo de alto valor agregado."
    ],
    commonErrors: [
      "❌ Programar as duas cores com ângulos de ponto diferentes, criando um efeito xadrez quadriculado indesejado em vez de degradê liso.",
      "❌ Iniciar a segunda cor com densidade muito fechada, cobrindo totalmente a primeira cor e destruindo a transição.",
      "❌ Deixar o comprimento do ponto muito curto nas áreas abertas, fazendo com que os pontos pareçam poeira solta."
    ],
    troubleshootingTips: [
      "Degradê com divisória dura visível: suavize a curva de transição no software e amplie a faixa de sobreposição das duas cores.",
      "Cores formando quadriculado: certifique-se de que os ângulos de ambos os objetos estejam rigorosamente paralelos (mesmo grau).",
      "Tecido transparente aparecendo no meio da transição: aumente a densidade base inicial de ambas as camadas."
    ],
    dicaArtrelados: "Para fazer o degradê perfeito de um logotipo: use sempre exatamente o mesmo ângulo de ponto nas duas cores (ex: ambas a 45°) e coloque um subponto tatami leve contínuo por baixo de toda a área. A transição fica tão lisinha que parece pintura!",
    voceSabia: "O cérebro humano não enxerga os fios individuais a certa distância; ele realiza a 'síntese aditiva de cores', misturando os filamentos de poliéster amarelos e azuis para enxergar um verde suave perfeito.",
    practicalExercise: "Digitalize um retângulo de 60x30 mm. Crie um objeto em tatami amarelo com gradiente da esquerda para a direita (0,38 mm a 1,60 mm) e outro vermelho na mesma posição com gradiente inverso (1,60 mm a 0,38 mm), ambos com ângulo a 45°. Borde e veja o efeito!",
    quickSummary: "Preenchimento tatami com espaçamento progressivo para transições suaves de cor, sobreposições cromáticas e sombreamento realista.",
    relatedTerms: ["Tatami", "Tatami de Baixa Densidade", "Degradê de Pontos", "Mistura de Cores", "Accordion Stitch"],
    tags: ["tatami", "degrade", "gradiente", "cores", "sombra"]
  },
  {
    id: "tatami-em-camadas",
    code: "T-007",
    letter: "T",
    term: "Tatami em Camadas",
    pronunciation: "ta-ta-mi em ca-ma-das",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva técnica.",
    origin: "Técnica desenvolvida para criar textura volumétrica, enriquecimento de cores e estabilização de substratos desafiadores sem o uso de espumas 3D.",
    summary: "Sobreposição planejada de duas ou mais camadas de tatami com diferentes ângulos, densidades ou tonalidades para criar profundidade e suporte.",
    definition: "O Tatami em Camadas (Layered Tatami) consiste na sobreposição intencional de duas ou mais estruturas de ponto tatami sobre a mesma área geográfica da matriz. Cada camada é configurada com funções técnicas específicas: uma primeira camada base de baixa a média densidade em um ângulo estrutural (ex: 90°), seguida por camadas superiores com densidades e ângulos complementares (ex: 45° e 135°), produzindo texturas densas, efeitos tridimensionais sutis e máxima estabilização mecânica.",
    technicalDetails: "Ao planejar camadas sobrepostas, a densidade total deve ser distribuída entre as camadas para evitar o acúmulo de pontos que possa quebrar a agulha ou rasgar o tecido. Se a densidade final desejada for equivalente a 0,40 mm, divide-se em duas camadas de 0,80 mm a 0,85 mm em ângulos perpendiculares (90° entre si), o que distribui uniformemente a tração e cria uma estrutura de armação têxtil cruzada.",
    beginnerExplanation: "É como passar duas demãos de tinta fina na parede em direções cruzadas em vez de uma demão muito grossa. Fica muito mais bonito, fecha todos os buraquinhos e o bordado não entorta o tecido.",
    howItWorks: [
      "1. A máquina borda a primeira camada de tatami com espaçamento aberto e ângulo inclinado.",
      "2. Essa primeira camada fixa as fibras do tecido e da entretela, criando uma base sólida.",
      "3. A máquina borda a segunda camada com cor igual ou ligeiramente diferente e ângulo cruzado.",
      "4. O cruzamento das linhas anula a tração unidirecional e eleva a superfície com toque acetinado e firme."
    ],
    applications: [
      "Bordados sobre tecidos muito porosos, felpudos ou malhas piquet instáveis.",
      "Criação de fundos texturizados ricos em brasões nobres e tapeçarias.",
      "Efeitos de sombreamento complexo em retratos e reproduções de obras de arte.",
      "Substituição de filmes hidrossolúveis em tecidos felpudos através de uma camada base de cor idêntica à toalha."
    ],
    characteristics: [
      "Eliminação quase total de deformações e encolhimento assimétrico do tecido.",
      "Cobertura perfeita sem a necessidade de forçar a densidade de uma única camada.",
      "Toque estruturado e superfície plana ideal para receber contornos finos."
    ],
    commonErrors: [
      "❌ Sobrepor duas camadas com densidade normal fechada (0,38 mm cada), criando uma 'pedra' de linha que quebra agulhas e estraga a peça.",
      "❌ Bordejar as duas camadas no mesmo ângulo exato, fazendo com que a segunda camada caia nos mesmos sulcos da primeira.",
      "❌ Não compensar a espessura total do bordado na escolha da agulha, usando agulha fina demais para atravessar múltiplas camadas."
    ],
    troubleshootingTips: [
      "Máquina pulando ponto na segunda camada: troque para uma agulha tamanho 80/12 com ponta afiada ou SES e verifique a lubrificação da linha.",
      "Bordado ficando muito grosso e rígido: aumente o espaçamento de ambas as camadas (de 0,60 mm para 0,85 mm cada).",
      "Bordas desencontradas entre as camadas: aumente a compensação de repuxo da primeira camada para suportar o tensionamento da segunda."
    ],
    dicaArtrelados: "Quando for bordar toalhas escuras com desenhos que exigem cores claras, faça a primeira camada de tatami bem aberto na mesma cor da toalha (para amassar a felpa) e a segunda camada com a cor real do desenho. Fica perfeito e a felpa nunca mais sobe!",
    voceSabia: "Na alfaiataria militar histórica, os brasões cerimoniais eram bordados à mão com até quatro camadas de fios de seda cruzados antes da aplicação de fios metálicos de ouro e prata.",
    practicalExercise: "Digitalize um escudo de 40x50 mm. Aplique uma primeira camada de tatami a 90° com densidade 0,80 mm e uma segunda camada a 45° com densidade 0,75 mm. Borde e observe a estabilidade do tecido e a ausência total de repuxo.",
    quickSummary: "Sobreposição de duas ou mais camadas de tatami com ângulos cruzados e densidades distribuídas, proporcionando máxima estabilidade, cobertura e profundidade.",
    relatedTerms: ["Tatami", "Tatami de Baixa Densidade", "Subponto Tatami", "Ângulo de Ponto", "Compensação de Repuxo"],
    tags: ["tatami", "camadas", "cruzado", "estabilidade", "toalhas"]
  },
  {
    id: "tatami-com-textura-padrao-decorativo-fancy-fill",
    code: "T-008",
    letter: "T",
    term: "Tatami com Textura / Padrão Decorativo (Fancy Fill)",
    pronunciation: "ta-ta-mi com tes-tu-ra / pa-drão de-co-ra-ti-vo (fên-ci fil)",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Locução substantiva técnica.",
    origin: "Criado com o advento da digitalização vetorial computadorizada para quebrar a monotonia de grandes superfícies planas, imitando texturas naturais e geométricas.",
    summary: "Preenchimento tatami enriquecido com relevos programados (ondas, tijolos, escamas, corações, losangos), transformando fundos simples em arte decorativa.",
    definition: "O Tatami com Textura / Padrão Decorativo (Fancy Fill, Motif Fill ou Carved Tatami) é uma variação do ponto tatami na qual o algoritmo de perfuração da agulha é modificado para desenhar padrões geométricos, orgânicos ou figurativos no próprio corpo do preenchimento. Através do alinhamento ou omissão estratégica de pontos de penetração, criam-se baixos-relevos e efeitos visuais sem a necessidade de trocar de linha ou adicionar novos objetos à matriz.",
    technicalDetails: "Os softwares profissionais dispõem de bibliotecas com centenas de padrões pré-programados (como cestaria, espinha de peixe, mosaico, ondas e favo de mel) e permitem a criação de texturas personalizadas com carimbos vetoriais (Carving Stamps). A densidade recomendada é ligeiramente mais fechada (0,38 mm a 0,42 mm) para que o contraste de sombra do relevo fique nítido sob a luz ambiente.",
    beginnerExplanation: "É como passar um rolinho decorado na massa de modelar: o ponto tatami continua cobrindo o tecido, mas ganha desenhos em relevo de corações, estrelinhas, tijolinhos ou escamas feitos com a própria linha da mesma cor.",
    howItWorks: [
      "1. O programador escolhe a forma vetorial e seleciona o padrão decorativo (Fancy Fill) desejado.",
      "2. O software altera a ordem das perfurações da agulha para desenhar o relevo do padrão.",
      "3. As áreas onde a agulha penetra formam pequenas reentrâncias (valas de sombra).",
      "4. O contraste entre os fios lisos e as reentrâncias revela o desenho decorativo na mesma cor de linha."
    ],
    applications: [
      "Fundos de brasões, monogramas de luxo e brasões de casamento.",
      "Roupas de personagens, asas de fadas, escamas de peixes e cascas de árvores em matrizes temáticas.",
      "Enxovais de bebê personalizados com textura de nuvens, ursinhos ou corações em relevo.",
      "Patches e emblemas esportivos com textura de fibra de carbono ou colmeia."
    ],
    characteristics: [
      "Agregação de altíssimo valor visual e sofisticação à matriz com a mesma quantidade de linha.",
      "Quebra da monotonia visual em grandes áreas bordadas de cor sólida.",
      "Efeito de textura tátil perceptível ao passar os dedos sobre a peça."
    ],
    commonErrors: [
      "❌ Usar textura decorativa com detalhes minúsculos em tecidos muito felpudos (como toalhas), onde a felpa engole o desenho do relevo.",
      "❌ Configurar densidade muito aberta (> 0,55 mm), fazendo com que os padrões fiquem invisíveis e desarticulados.",
      "❌ Aplicar padrões complexos em áreas muito pequenas (< 15 mm), tornando o desenho confuso e poluído."
    ],
    troubleshootingTips: [
      "Textura pouco visível no bordado: diminua ligeiramente o espaçamento para 0,38 mm e aumente a tensão da linha superior para aprofundar as reentrâncias.",
      "Tecido franzindo sob o relevo: certifique-se de que o subponto tatami leve esteja ativo para ancorar a entretela antes da textura.",
      "Padrão deformado ou torto: ajuste o ângulo e a escala do padrão decorativo no menu de propriedades do objeto."
    ],
    dicaArtrelados: "Para fazer mantas e toalhas de batizado com toque de realeza, preencha o fundo da cruz ou do monograma com o Fancy Fill de favo de mel ou losango imperial. O efeito da luz brilhando na linha é cinematográfico!",
    voceSabia: "A técnica do Fancy Fill foi inspirada no 'Jacquard' dos teares franceses do século XIX, onde os fios eram tramados para criar padrões damascados em tecidos nobres sem estampagem.",
    practicalExercise: "Crie um coração de 50 mm no seu software. Selecione a opção Fancy Fill e escolha o padrão de cestaria ou ondas. Borde em um tecido liso com linha de poliéster brilhante e sinta a textura com os dedos.",
    quickSummary: "Ponto tatami com perfurações programadas em padrões geométricos ou figurativos, criando relevos de sombra e enriquecendo grandes superfícies com sofisticação.",
    relatedTerms: ["Tatami", "Carving Stamp", "Motif Fill", "Texturização Digital", "Padrão Decorativo"],
    tags: ["tatami", "textura", "fancy fill", "decorativo", "relevo"]
  }
];

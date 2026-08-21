import { Verbete } from "../types";

export const VERBETES_LETTER_S2: Verbete[] = [
  {
    id: "stitch-length-comprimento-do-ponto",
    code: "S-009",
    letter: "S",
    term: "Stitch Length — Comprimento do Ponto",
    pronunciation: "istítxi lengu-t (com-pri-men-to do pon-to)",
    level: "Iniciante 🟢",
    category: "Parâmetros de Software",
    grammarClass: "Substantivo masculino composto (do inglês stitch length).",
    origin: "Termo técnico da cinemática mecânica de costura, adotado na era da computação vetorial de matrizes.",
    summary: "Distância em milímetros entre duas penetrações consecutivas da agulha em um segmento de ponto de bordado.",
    definition: "O Stitch Length (Comprimento do Ponto) é o parâmetro geométrico que determina a distância percorrida pelo pantógrafo entre duas descidas sucessivas da agulha. Em pontos corridos (Run Stitch), define o tamanho dos passos da linha (típico entre 2,0 mm e 3,0 mm). Em pontos de preenchimento (Tatami), define a extensão dos fios horizontais antes da ancoragem intermediária (típico entre 3,5 mm e 4,5 mm).",
    technicalDetails: "Limites operacionais: comprimentos abaixo de 1,0 mm (micro-pontos) geram furos excessivos no mesmo local e quebra de fio; comprimentos acima de 7,5 mm a 8,0 mm podem afrouxar, vibrar na agulha ou enroscar em botões durante a lavagem e o uso.",
    beginnerExplanation: "É o tamanho do 'passo' que a agulha dá no tecido. Se o passo for muito pequeno, fura o tecido demais; se for muito grande, a linha fica frouxa e balançando.",
    howItWorks: [
      "1. O programador define o valor de comprimento no software (ex: 2,5 mm para contorno).",
      "2. O software divide a linha vetorial em intervalos exatamente iguais a esse valor.",
      "3. Em curvas fechadas, o comprimento se reduz automaticamente para não cortar a curva.",
      "4. A máquina move o pantógrafo obedecendo exatamente à distância programada.",
      "5. A linha forma uma sequência uniforme e perfeitamente ritmada."
    ],
    applications: [
      "Contornos de ponto corrido e traçados delicados de desenhos infantis.",
      "Calibração de sustentação em subpontos (Underlay de grade e tatami).",
      "Pespontos decorativos e imitação de costura manual (comprimentos de 3,5 a 4,0 mm).",
      "Bordados em couro e camurça sintética (exigindo comprimentos maiores, de 3,0 a 3,5 mm)."
    ],
    characteristics: [
      "Afeta diretamente o consumo de linha e o tempo total de produção.",
      "Influencia a maleabilidade e flexibilidade final da peça bordada.",
      "Comprimentos menores contornam curvas fechadas com maior perfeição visual."
    ],
    commonErrors: [
      "❌ Usar comprimento menor que 1,5 mm em couro ou sintético, cortando o material como uma navalha.",
      "❌ Usar comprimento de 5,0 mm em curvas fechadas, transformando a curva redonda em um polígono cheio de cantos retos.",
      "❌ Manter micro-pontos residuais (< 0,8 mm) em nós de início e término."
    ],
    troubleshootingTips: [
      "Linhas quebrando e tecido rasgando em contornos: aumente o comprimento do ponto corrido de 1,5 mm para 2,5 mm.",
      "Círculo parecendo um octógono com cantos retos: reduza o comprimento do ponto na curva para 1,8 mm ou ative 'Comprimento de Curva Adaptativo'.",
      "Bordado muito rígido e grosso: aumente o comprimento de ponto do tatami para 4,2 mm."
    ],
    dicaArtrelados: "Para bordar tecidos grossos ou couros sintéticos sem furar demais nem picotar: aumente o comprimento do ponto corrido para 2,8 mm a 3,2 mm. O contorno fica firme, nítido e preserva a resistência do material!",
    voceSabia: "Em matrizes industriais de alta velocidade (1.000 PPM), pontos com menos de 1,2 mm causam superaquecimento na ponta da agulha por atrito repetido no mesmo milímetro de tecido.",
    practicalExercise: "Digitalize um círculo com ponto corrido com comprimento de 4,0 mm e outro igual com 2,0 mm. Observe como o de 2,0 mm forma uma curva perfeitamente redonda, enquanto o de 4,0 mm fica facetado.",
    quickSummary: "Stitch Length é a distância em milímetros entre penetrações consecutivas da agulha, calibrada conforme a curvatura, o tipo de ponto e o tecido.",
    relatedTerms: ["Stitch Density", "Run Stitch (Ponto Corrido)", "Ponto Tatami", "Short Stitch Filter", "Velocidade de Bordado"],
    tags: ["comprimento", "stitch length", "parâmetros", "pontos", "calibração"]
  },
  {
    id: "stitch-density-densidade-do-ponto",
    code: "S-010",
    letter: "S",
    term: "Stitch Density — Densidade do Ponto",
    pronunciation: "istítxi dên-si-ti (den-si-da-de do pon-to)",
    level: "Iniciante 🟢",
    category: "Parâmetros de Software",
    grammarClass: "Substantivo feminino composto (do inglês stitch density).",
    origin: "Do conceito físico de concentração de massa e fios por unidade de área linear ou superficial.",
    summary: "Proximidade ou espaçamento entre passadas paralelas de linha em objetos de satim ou tatami.",
    definition: "A Stitch Density (Densidade do Ponto ou Espaçamento de Ponto) é o parâmetro técnico fundamental que define o quão próximas ou distantes ficam as fileiras paralelas de linha em um preenchimento. Mede-se geralmente como a distância linear entre duas passadas sucessivas de agulha (ex: 0,40 mm) ou pelo número de linhas de ponto por milímetro linear.",
    technicalDetails: "Padrão de mercado para linha 40wt: entre 0,38 mm e 0,42 mm para cobertura total sem relevo excessivo. Valores abaixo de 0,32 mm criam densidade perigosa ('blindagem' dura que quebra agulha); valores acima de 0,55 mm criam bordados translúcidos onde o tecido de fundo aparece.",
    beginnerExplanation: "É o quanto os fios ficam juntinhos ou espalhados uns dos outros. Se ficarem muito juntos, o bordado fica duro como uma placa de gesso; se ficarem muito separados, o tecido de fundo fica aparecendo por baixo da linha.",
    howItWorks: [
      "1. A programadora ajusta o valor de densidade no software (ex: 0,40 mm para cetim).",
      "2. O software calcula quantas passadas de agulha são necessárias para cobrir o objeto.",
      "3. Em tecidos grossos (sarja), usa-se densidade mais aberta (0,42 mm a 0,45 mm).",
      "4. Em tecidos leves (seda, voal), usa-se densidade aliviada para não repuxar.",
      "5. A máquina costura com cobertura perfeita e toque suave.",
      "6. A durabilidade da peça bordada é preservada sem peso desnecessário."
    ],
    applications: [
      "Preenchimento de letras em satim e brasões em tatami.",
      "Alívio de peso em camisetas finas e roupas de bebê (body infantil).",
      "Criação de fundos texturizados e efeitos de sombra artística.",
      "Otimização de tempo e consumo de linha em produções industriais."
    ],
    characteristics: [
      "Determina a rigidez, o toque e a flexibilidade do bordado na peça pronta.",
      "Impacta diretamente o total de pontos da matriz (Stitch Count).",
      "Deve ser sempre combinada com a compensação de encolhimento adequada."
    ],
    commonErrors: [
      "❌ Achar que aumentar a densidade (0,28 mm) resolve falhas de cobertura causadas por falta de suporte ou entretela errada.",
      "❌ Usar a mesma densidade pesada de toalha de banho em uma camisetinha de malha leve de bebê.",
      "❌ Deixar densidade muito aberta (0,65 mm) em nomes pequenos, deixando o tecido visível entre as letras."
    ],
    troubleshootingTips: [
      "Bordado parecendo uma placa dura e áspera: aumente o espaçamento de 0,35 mm para 0,42 mm e adicione um suporte leve.",
      "Tecido aparecendo entre as linhas de cetim: verifique a tensão da linha da bobina e aumente levemente a densidade para 0,38 mm.",
      "Agulha quebrando repetidamente em cima de letras: a densidade acumulou camadas excessivas; limpe as sobreposições de objetos."
    ],
    dicaArtrelados: "O segredo de um bordado profissional com toque macio não é entupir de linha na camada de cima, mas sim fazer um bom suporte por baixo (Underlay) e usar densidade equilibrada de 0,40 mm a 0,42 mm por cima!",
    voceSabia: "Uma redução de apenas 10% na densidade média de uma produção de 50.000 peças economiza milhares de metros de linha e dezenas de horas de máquina sem alterar a beleza visual do produto.",
    practicalExercise: "Borde dois quadrados de satim de 3x3 cm: um com densidade 0,32 mm e outro com 0,42 mm acompanhado de suporte de zigue-zague. Pegue os dois na mão e sinta a diferença de maciez e flexibilidade.",
    quickSummary: "Stitch Density é o espaçamento entre linhas de ponto que controla a cobertura visual, o peso, o toque e a flexibilidade da matriz bordada.",
    relatedTerms: ["Stitch Spacing", "Stitch Count", "Satin Stitch", "Ponto Tatami", "Compensação de Puxamento"],
    tags: ["densidade", "espaçamento", "cobertura", "toque", "parâmetros"]
  },
  {
    id: "stitch-angle-angulo-do-ponto",
    code: "S-011",
    letter: "S",
    term: "Stitch Angle — Ângulo do Ponto",
    pronunciation: "istítxi ên-gol (ân-gu-lo do pon-to)",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto (do inglês stitch angle).",
    origin: "Da trigonometria planar aplicada à orientação dos filamentos de linha na digitalização vetorial.",
    summary: "Inclinação em graus das passadas de linha em relação aos eixos cartesianos X e Y da matriz.",
    definition: "O Stitch Angle (Ângulo do Ponto ou Inclinação de Ponto) é a direção angular (medida em graus de 0° a 360°) em que as linhas de bordado são depositadas sobre o tecido. A orientação angular governa como a luz incide e reflete nas fibras brilhantes de poliéster ou raiom e determina a direção da força de repuxamento exercida sobre a trama do tecido.",
    technicalDetails: "Se dois objetos adjacentes tiverem exatamente o mesmo ângulo de ponto, eles se fundem visualmente e suas linhas podem se entrelaçar na junção; quando seus ângulos diferem em 30° a 90°, a refração da luz cria contraste e separação visual nítida mesmo usando a mesmíssima cor de linha.",
    beginnerExplanation: "É a posição em que a linha fica deitada: reta em pé, deitada de lado ou inclinada na diagonal. Dependendo de como a linha deita, ela brilha de um jeito diferente com a luz e puxa o tecido para um lado específico.",
    howItWorks: [
      "1. A programadora desenha a forma e traça uma linha guia indicando o ângulo desejado (ex: 45°).",
      "2. O software calcula as penetrações da agulha para que todos os pontos fiquem paralelos a essa linha.",
      "3. Ao bordar, a linha deita na direção planejada.",
      "4. A luz bate nos filamentos e cria reflexos acetinados em direções calculadas.",
      "5. Objetos vizinhos com ângulos diferentes destacam-se com efeito tridimensional."
    ],
    applications: [
      "Criação de efeitos tridimensionais de luz e sombra em logotipos monocromáticos.",
      "Direcionamento de pétalas de flores para acompanhar a curvatura natural botânica.",
      "Prevenção de franzimento alinhando o ponto a 45° da elasticidade da malha.",
      "Separação visual de partes do corpo de animais e personagens em matrizes infantis."
    ],
    characteristics: [
      "Controla a refração óptica e o brilho da linha na peça bordada.",
      "Determina o sentido do encolhimento (Pull Effect) sobre o tecido.",
      "Ângulos a 45° reduzem a deformação em tecidos planos e malhas."
    ],
    commonErrors: [
      "❌ Bordar duas partes vizinhas do mesmo desenho com o mesmo ângulo exato, fazendo tudo virar um 'borrão' sem divisão.",
      "❌ Bordar tatami no mesmo sentido do fio do tecido (0° ou 90° exatos), afundando as linhas entre as tramas.",
      "❌ Mudar o ângulo bruscamente em 90° no meio de uma coluna lisa sem transição suave."
    ],
    troubleshootingTips: [
      "Desenho monocromático sem definição: altere o ângulo de ponto das partes vizinhas em 45° ou 60° para criar contraste com a luz.",
      "Tecido repuxando muito na largura: incline os ângulos em 30° a 45° para distribuir a tensão nas duas direções da trama.",
      "Pontos afundando nas linhas do tecido: evite ângulos rigorosamente a 0° ou 90°; use sempre 35° a 55° em tecidos sarjados."
    ],
    dicaArtrelados: "Quer fazer um logotipo bordado com apenas UMA cor de linha parecer super rico e sofisticado? Mude o ângulo de ponto de cada elemento em 45° em relação ao vizinho. A luz do sol vai fazer cada pedaço brilhar de uma forma diferente!",
    voceSabia: "Em matrizes heráldicas e brasões militares tradicionais, utiliza-se a técnica 'Damask' (Damasco), onde todo o desenho é bordado em linha branca e o desenho aparece unicamente pela variação dos ângulos de ponto.",
    practicalExercise: "Crie um círculo dividido ao meio. Preencha o lado esquerdo em tatami a 45° e o lado direito em tatami a 135° usando exatamente a mesma cor azul. Borde e veja como a linha divisória aparece nítida apenas pelo reflexo da luz.",
    quickSummary: "Stitch Angle é a inclinação em graus dos pontos que dita o reflexo de luz, a tridimensionalidade visual e o sentido de repuxo no tecido.",
    relatedTerms: ["Stitch Direction", "Linhas de Direção", "Reflexo de Luz", "Compensação de Puxamento", "Ponto Tatami"],
    tags: ["ângulo", "inclinação", "brilho", "tridimensionalidade", "vetores"]
  },
  {
    id: "stitch-direction-direcao-do-ponto",
    code: "S-012",
    letter: "S",
    term: "Stitch Direction — Direção do Ponto",
    pronunciation: "istítxi di-rék-shon (di-re-ção do pon-to)",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto (do inglês stitch direction).",
    origin: "Do conceito de fluxo cinemático e vetorial de deposição de pontos em matrizes de bordado.",
    summary: "Sentido de fluxo e progressão linear das linhas de bordado através da geometria de um objeto digitalizado.",
    definition: "A Stitch Direction (Direção do Ponto ou Fluxo do Ponto) refere-se ao caminho de deslocamento e progressão espacial que a agulha percorre ao construir um elemento bordado (de cima para baixo, do centro para fora, da esquerda para a direita). Governa como a tensão mecânica empurra ou puxa o tecido ao longo do trajeto.",
    technicalDetails: "A direção de progressão deve sempre seguir a regra física do bordado: 'do centro para as bordas' (Center-Out) e 'de baixo para cima' (Bottom-Up), minimizando o acúmulo de tecido excedente (onda de tecido) à frente do pantógrafo.",
    beginnerExplanation: "É o caminho que a máquina faz para preencher um desenho: se ela começa bordando do meio para fora, de cima para baixo ou da esquerda para a direita, evitando empurrar o pano para um lado só.",
    howItWorks: [
      "1. A programadora define o ponto de entrada e o ponto de saída do objeto vetorial.",
      "2. O software traça as passadas de ponto avançando ordenadamente nessa direção.",
      "3. O pantógrafo se desloca empurrando suavemente o tecido na mesma direção do fluxo.",
      "4. O suporte inferior prévio ancora a base para que o tecido não corra.",
      "5. O objeto é concluído sem formar dobras ou rugas na frente da costura."
    ],
    applications: [
      "Preenchimento de grandes superfícies de jalecos e costas de jaquetas.",
      "Bordado de bonés estruturados (obrigatoriamente do centro para as laterais).",
      "Sequenciamento de pétalas florais concêntricas e mandalas.",
      "Prevenção de bolhas de tecido em toalhas e lençóis de cama."
    ],
    characteristics: [
      "Evita o efeito 'onda' (quando o tecido vai sendo empurrado e sobra no final).",
      "Garante encaixe milimétrico com contornos e objetos vizinhos.",
      "Fundamental para a estabilidade dimensional de qualquer matriz."
    ],
    commonErrors: [
      "❌ Bordar de fora para dentro em círculos grandes, encurralando uma sobra de tecido no meio que vira uma ruga feia.",
      "❌ Bordar bonés das laterais em direção ao centro, fazendo a costura central abrir ou a agulha bater.",
      "❌ Alternar direções conflitantes em objetos contíguos sem ancoragem prévia."
    ],
    troubleshootingTips: [
      "Bordado formando uma 'bolha' ou prega de tecido no final do preenchimento: mude a direção para bordar do centro em direção à borda aberta.",
      "Contorno não encaixando no final do tatami: altere o ponto de término para que a progressão empurre o tecido em direção ao contorno.",
      "Bordado de boné desalinhando na costura: use sempre a direção do centro para a esquerda e depois do centro para a direita."
    ],
    dicaArtrelados: "A regra de ouro do bordado sem rugas: sempre borde do centro para fora e de baixo para cima! Assim, qualquer folguinha de tecido é empurrada para as margens livres do bastidor e o bordado fica lisinho como papel!",
    voceSabia: "Em matrizes industriais de alta precisão para bonés esportivos (MLB e NBA), a direção centralizada é obrigatória por norma de fábrica para evitar que a costura frontal do boné empurre a agulha.",
    practicalExercise: "Digitalize um círculo grande de 8 cm em tatami com entrada na borda e saída na borda oposta. Digitalize outro igual começando no centro e saindo para as bordas. Borde os dois em um tecido fino e compare o enrugamento.",
    quickSummary: "Stitch Direction é a rota de progressão da costura que deve sempre fluir do centro para fora para evitar rugas e desalinhamentos.",
    relatedTerms: ["Stitch Angle", "Sequência de Bordado", "Efeito Onda (Puckering)", "Bordado em Boné"],
    tags: ["direção", "fluxo", "progressão", "estabilidade", "técnica"]
  },
  {
    id: "stitch-spacing-espacamento-do-ponto",
    code: "S-013",
    letter: "S",
    term: "Stitch Spacing — Espaçamento do Ponto",
    pronunciation: "istítxi is-pêi-ssing (is-pa-ça-men-to do pon-to)",
    level: "Iniciante 🟢",
    category: "Parâmetros de Software",
    grammarClass: "Substantivo masculino composto (do inglês stitch spacing).",
    origin: "Termo de medição linear e milimétrica da distância entre trilhas consecutivas de ponto.",
    summary: "Distância milimétrica exata entre duas passadas consecutivas de agulha em uma coluna ou preenchimento.",
    definition: "O Stitch Spacing (Espaçamento do Ponto) é a medida métrica precisa (expressa em milímetros ou décimos de milímetro) que separa uma linha de costura da próxima linha adjacente. É o inverso conceitual da densidade: quanto menor o espaçamento (ex: 0,35 mm), mais fechado e denso é o bordado; quanto maior o espaçamento (ex: 0,60 mm), mais aberto e leve ele se torna.",
    technicalDetails: "Calibração padrão no mercado têxtil: fios de poliéster 40wt têm diâmetro aproximado de 0,35 mm a 0,38 mm. Portanto, um espaçamento de 0,40 mm proporciona cobertura visual de 100% com leve sobreposição óptica dos filamentos sem empilhar linha.",
    beginnerExplanation: "É a distância em milímetros entre um fiozinho e o outro que fica do lado dele. Se a distância for 0,40 mm, os fios ficam grudadinhos cobrindo tudo com perfeição.",
    howItWorks: [
      "1. A operadora ajusta o valor numérico de espaçamento no software (ex: 0,40 mm).",
      "2. O algoritmo matemático divide a largura do objeto pelo espaçamento escolhido.",
      "3. Cada passada de agulha ocorre exatamente na coordenada deslocada de 0,40 mm.",
      "4. O fio se acomoda lateralmente encostando no fio anterior.",
      "5. A superfície do bordado fica uniforme, macia e sem transparências."
    ],
    applications: [
      "Controle fino de cobertura em tecidos de cores contrastantes (ex: linha branca em tecido preto).",
      "Alívio de peso para bordados em peças íntimas, sedas e musselines.",
      "Criação de texturas especiais de meio-ponto e efeitos sombreados.",
      "Ajuste para fios mais grossos (30wt ou 12wt) que exigem espaçamento maior (0,50 a 0,70 mm)."
    ],
    characteristics: [
      "Permite ajuste milimétrico com tolerância de centésimos de milímetro.",
      "Facilita a transição para linhas de espessuras não convencionais.",
      "Impacto direto no tempo de máquina e maciez da peça."
    ],
    commonErrors: [
      "❌ Manter espaçamento de 0,40 mm ao trocar para fio grosso 30wt ou metálico, fazendo a linha empilhar e arrebentar.",
      "❌ Usar espaçamento de 0,25 mm achando que vai ficar 'mais bonito', endurecendo a peça e furando o tecido.",
      "❌ Não abrir o espaçamento para 0,45 mm ao bordar toalhas felpudas com plástico por cima."
    ],
    troubleshootingTips: [
      "Bordado parecendo um arame grosso: aumente o espaçamento de 0,35 mm para 0,42 mm.",
      "Fio metálico quebrando toda hora: aumente o espaçamento para 0,48 mm a 0,55 mm para dar espaço à fita metálica.",
      "Tecido preto aparecendo no meio do bordado branco: diminua o espaçamento para 0,38 mm e use um bom suporte fechado por baixo."
    ],
    dicaArtrelados: "Sempre que for bordar com linhas especiais mais grossas (como linha 30wt, linha de lã ou metálica), lembre-se de abrir o espaçamento para 0,50 mm no software. A linha grossa precisa de espaço para deitar e brilhar!",
    voceSabia: "Os softwares mais modernos possuem o recurso de 'Espaçamento Fracionário Automático' (Auto-Spacing), que ajusta o espaçamento dinamicamente conforme a largura da coluna de satim varia.",
    practicalExercise: "Programe três retângulos de satim com espaçamentos diferentes: 0,35 mm, 0,42 mm e 0,55 mm. Borde os três lado a lado e toque com a ponta dos dedos para comparar a maciez e a cobertura de cada um.",
    quickSummary: "Stitch Spacing é a distância física em milímetros entre passadas consecutivas de linha, essencial para controlar a cobertura e adaptar a matriz ao tipo de fio.",
    relatedTerms: ["Stitch Density", "Stitch Length", "Linha 40wt vs 30wt", "Fio Metálico", "Cobertura de Ponto"],
    tags: ["espaçamento", "medidas", "fios", "parâmetros", "calibração"]
  },
  {
    id: "stitch-count-contagem-de-pontos",
    code: "S-014",
    letter: "S",
    term: "Stitch Count — Contagem de Pontos",
    pronunciation: "istítxi caun-t (con-ta-gem de pon-tos)",
    level: "Iniciante 🟢",
    category: "Gestão & Produção",
    grammarClass: "Substantivo feminino composto (do inglês stitch count).",
    origin: "Métrica comercial e estatística padrão da indústria têxtil global para custeio, tempo e capacidade de produção.",
    summary: "Número total de penetrações de agulha e laçadas que compõem uma matriz de bordado.",
    definition: "O Stitch Count (Contagem de Pontos ou Total de Pontos) é a quantidade numérica absoluta de pontos que compõem uma matriz de bordado computadorizado. É a métrica mais universal do setor, utilizada para orçar custos de produção, precificar serviços de digitalização, dimensionar o consumo de linha e prever com exatidão o tempo que a máquina levará para concluir cada peça.",
    technicalDetails: "Uma matriz de logotipo padrão de peito (8x8 cm) possui em média de 5.000 a 10.000 pontos; um bordado grande de costas de jaqueta (25x25 cm) varia entre 35.000 e 80.000 pontos. O tempo teórico de máquina calcula-se dividindo o total de pontos pela velocidade média de rotação em PPM (Pontos Por Minuto), somando os tempos de cortes e trocas de cor.",
    beginnerExplanation: "É o número total de pontinhos que a máquina vai dar do começo ao fim do desenho. É como a quilometragem de uma viagem: quanto mais pontos a matriz tem, mais tempo a máquina demora para bordar e mais linha ela gasta.",
    howItWorks: [
      "1. O software computa cada penetração gerada pelos objetos da matriz.",
      "2. O painel exibe o total (ex: 7.450 pontos).",
      "3. O ateliê calcula o orçamento com base na tabela por milheiro de pontos ou tempo.",
      "4. A máquina carrega o arquivo e o contador decresce durante a costura.",
      "5. A produção é gerenciada com precisão milimétrica de tempo e lucro."
    ],
    applications: [
      "Cálculo de orçamentos comerciais e precificação de serviços de bordado.",
      "Planejamento de capacidade produtiva e cronogramas de entrega em oficinas.",
      "Controle de desgaste e intervalos de manutenção preventiva de máquinas.",
      "Auditoria de qualidade para eliminação de pontos redundantes e caros."
    ],
    characteristics: [
      "Métrica universalmente compreendida em qualquer país do mundo.",
      "Ponto de partida para calcular a quantidade de cones de linha necessários.",
      "Permite identificar matrizes mal digitalizadas (com pontos excessivos)."
    ],
    commonErrors: [
      "❌ Cobrar preço fixo por peça baseado apenas no tamanho em centímetros, tomando prejuízo com matrizes densas de 25.000 pontos.",
      "❌ Salvar matrizes sem filtro de micro-pontos, inflando a contagem com milhares de pontos inúteis que travam a máquina.",
      "❌ Não considerar o tempo das trocas de cor e cortes de linha no cálculo baseado em contagem de pontos."
    ],
    troubleshootingTips: [
      "Bordado demorando demais para produzir: analise a matriz no software e elimine subpontos excessivos ou camadas invisíveis sob outras cores.",
      "Orçamento de bordado dando prejuízo: passe a cobrar combinando a contagem de pontos com o custo fixo de bastidoramento.",
      "Máquina avisando que o arquivo é muito grande: utilize a função 'Filtrar Pontos Curtos' e 'Remover Sobreposições' para reduzir a contagem em até 20% sem alterar o visual."
    ],
    dicaArtrelados: "Para ter lucro de verdade no ateliê: nunca passe preço para o cliente no 'olhômetro'! Abra a matriz no programa, veja a contagem de pontos (Stitch Count) e calcule o tempo real de máquina. Isso garante que cada minuto trabalhado seja valorizado!",
    voceSabia: "O maior bordado contínuo do mundo registrado no Guinness Book possui mais de 100 milhões de pontos e levou meses de operação ininterrupta em máquinas industriais.",
    practicalExercise: "Abra três matrizes diferentes no seu computador (uma letra, um logo pequeno e um desenho de toalha). Anote o Stitch Count de cada uma e calcule quanto tempo sua máquina levaria para bordar cada desenho na velocidade de 600 PPM.",
    quickSummary: "Stitch Count é a contagem total de pontos de uma matriz, utilizada como base para orçamentos, cálculo de tempo de máquina e controle de produtividade.",
    relatedTerms: ["Stitch Length", "Stitch Density", "PPM (Pontos por Minuto)", "Otimização de Matriz", "Orçamento de Bordado"],
    tags: ["contagem", "stitch count", "pontos", "orçamento", "produção"]
  },
  {
    id: "stitch-pattern-padrao-de-pontos",
    code: "S-015",
    letter: "S",
    term: "Stitch Pattern — Padrão de Pontos",
    pronunciation: "istítxi pé-tern (pa-drão de pon-tos)",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto (do inglês stitch pattern).",
    origin: "Da tecelagem jacquard e da programação geométrica de padrões de repetição (Tessellation).",
    summary: "Arranjo geométrico ou decorativo de penetrações de agulha que cria texturas, relevos e desenhos dentro de um preenchimento.",
    definition: "O Stitch Pattern (Padrão de Pontos ou Textura Decorativa) é a configuração algorítmica em que as penetrações da agulha são organizadas dentro de uma área de preenchimento (Tatami, Satin ou Carving) para formar um desenho geométrico, floral ou texturizado (como tijolinhos, escamas, ondas, losangos, cestaria ou espinha de peixe).",
    technicalDetails: "Em vez de penetrações uniformemente desfasadas como no tatami tradicional (ex: 1/3 ou 1/4 de desfasamento), o Stitch Pattern aplica uma matriz de pontos que cria vales e relevos programados na linha, conferindo sofisticação sem necessidade de alterar a cor do fio.",
    beginnerExplanation: "É quando a máquina borda um desenho fazendo uma textura linda como se fosse xadrez, escama de peixe, trançado de palha ou tijolinho, usando apenas uma única cor de linha.",
    howItWorks: [
      "1. A usuária seleciona um preenchimento e escolhe um padrão na biblioteca de texturas.",
      "2. O software reorganiza as descidas da agulha conforme o padrão geométrico escolhido.",
      "3. A máquina executa as penetrações criando relevos e sombras na própria linha.",
      "4. A luz reflete nos pontos deprimidos revelando o desenho da textura.",
      "5. A peça ganha acabamento requintado com baixo consumo de tempo."
    ],
    applications: [
      "Preenchimento de corpos de animais (penas de aves, escamas de répteis, pelos estilizados).",
      "Fundos de brasões, medalhões e emblemas comemorativos.",
      "Tapeçarias, almofadas e barrados de toalhas elegantes.",
      "Substituição de tatami liso por texturas ricas em monogramas e letras de aplique."
    ],
    characteristics: [
      "Agrega altíssimo valor percebido à peça bordada sem aumentar o número de cores.",
      "Cria relevos táteis que convidam ao toque.",
      "Exige tecido e entretela estáveis para que as linhas do padrão fiquem retas e nítidas."
    ],
    commonErrors: [
      "❌ Aplicar padrões complexos em áreas minúsculas menores que 10 mm, onde a textura não pode ser reconhecida.",
      "❌ Usar tecido muito elástico sem estabilização adequada, deformando as formas geométricas do padrão.",
      "❌ Combinar padrão muito carregado com fios metálicos ou matizados, gerando poluição visual."
    ],
    troubleshootingTips: [
      "Padrão geométrico saindo torto: aumente a firmeza da entretela no bastidor e ative o suporte de grade cruzada por baixo.",
      "Textura sumindo no bordado: aumente a escala do padrão de pontos no menu de propriedades do objeto.",
      "Linhas do padrão não aparecendo na linha fosca: utilize fio de poliéster de alto brilho ou raiom para acentuar o reflexo de luz."
    ],
    dicaArtrelados: "Quando for bordar uma asa de pássaro ou um fundo de brasão: em vez de usar tatami liso comum, escolha um Stitch Pattern de escamas ou trançado. O cliente fica impressionado com o requinte e você gasta exatamente a mesma quantidade de linha!",
    voceSabia: "Os padrões de ponto foram inspirados nas técnicas milenares de tecelagem manual 'Damask' e 'Jacquard' dos séculos XVIII e XIX.",
    practicalExercise: "Crie três círculos de 5 cm de diâmetro no software: um com tatami padrão, outro com padrão de tijolinho e o terceiro com padrão de ondas. Borde os três e compare o impacto visual de cada textura.",
    quickSummary: "Stitch Pattern é o arranjo decorativo de pontos que estampa texturas, relevos e desenhos geométricos dentro de preenchimentos de forma sofisticada.",
    relatedTerms: ["Ponto Tatami", "Ponto Carving (Carved Satin)", "Textura Têxtil", "Reflexo de Luz", "Preenchimento Decorativo"],
    tags: ["padrão", "stitch pattern", "textura", "relevo", "decorativo"]
  }
];

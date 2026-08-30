import { Verbete } from "../types";

export const VERBETES_LETTER_Y13: Verbete[] = [
  {
    id: "y-019-y-axis-pantograph-servo-belt-tensioning",
    code: "Y-019",
    letter: "Y",
    term: "Y-Axis Pantograph Dynamics & Servo-Belt Tensioning (Mecânica e Tensão de Correias do Eixo Y no Pantógrafo)",
    pronunciation: "uái-ék-sis pan-to-gráf dai-ná-miks end ser-vo-belt ten-xio-ning",
    level: "Avançado 🔴",
    category: "Componentes & Mecânica da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do grego 'pantos' (tudo) e 'graphein' (escrever/desenhar), aliado ao sistema cartesiano cartesiano 'Y' e engenharia de servomecanismos CNC.",
    summary: "Calibração e ajuste de frequência sonora de tensão das correias síncronas de poliuretano com alma de aço do eixo Y para eliminar folgas e perdas de passo.",
    definition: "O Y-Axis Pantograph Dynamics & Servo-Belt Tensioning (Sincronização Mecatrônica do Eixo Longitudinal Y, Calibração de Frequência Acústica de Correias e Compensação de Inércia de Carga) é o protocolo mecânico e dinâmico de ajuste da tração nas correias dentadas síncronas de alta performance (HTD / STD de 25 a 32 mm com cordonéis internos de aço ou kevlar) responsáveis pelo movimento do eixo Y. Como o eixo Y carrega todo o peso da viga transversal mais os bastidores e os tecidos, sua inércia é até 3 vezes maior do que a do eixo X. A calibração exige o tensionamento exato medido por frequencímetro acústico (faixa áurea de 65 Hz a 78 Hz) para evitar o efeito de chicoteamento (*belt whipping*), ressonâncias harmônicas e desencontros milimétricos entre o contorno e o preenchimento da matriz.",
    technicalDetails: "Módulo de elasticidade de correias de poliuretano AT5/AT10. Tensão estática recomendada: 120 a 160 N. Frequência de ressonância natural do vão livre: 70 Hz ± 5 Hz. Torque de retenção do servomotor AC: 2.5 a 4.0 N·m com encoder absoluto de 24 bits.",
    beginnerExplanation: "Sabe quando você borda um desenho e o contorno preto de cima ou de baixo não bate certinho no desenho colorido, ficando torto ou com um vão branco? Muitas vezes isso acontece porque a correia de borracha que puxa o braço da máquina para frente e para trás (o eixo Y) está frouxa como uma corda velha! Ajustar a tensão da correia é como afinar uma corda de violão: ela precisa ficar firme no ponto certo para que o bastidor ande com precisão perfeita sem tremer nem sair do lugar!",
    howItWorks: [
      "1. A máquina de bordar é desligada e o pantógrafo é posicionado na metade do seu curso vertical.",
      "2. O técnico utiliza um medidor de tensão acústico ou dinamômetro de precisão posicionado no meio da correia do eixo Y.",
      "3. Dá-se um leve toque na correia para fazê-la vibrar como uma corda musical; o aparelho lê a frequência sonora em Hertz.",
      "4. Soltam-se os parafusos de trava do mancal esticador e ajusta-se o fuso tensor até atingir a frequência de 72 Hz.",
      "5. Reapertam-se os parafusos com torquímetro calibrado.",
      "6. Executa-se um teste de matriz geométrica com círculos e quadrados concêntricos a 850 PPM.",
      "7. Verifica-se o alinhamento de contorno: o fechamento vertical fica com tolerância zero de erro (desvio < 0.05 mm)."
    ],
    applications: [
      "Manutenção preventiva semestral de máquinas de bordar industriais e semi-industriais.",
      "Eliminação de falhas de contorno e sombras brancas em brasões e letras de uniformes.",
      "Estabilização de bastidores pesados em trabalhos de jaquetas de couro e cortinas.",
      "Calibração após substituição de correias desgastadas ou recondicionamento de motores."
    ],
    characteristics: [
      "Elimina folgas mecânicas (*backlash*) e desalinhamento entre contornos e preenchimentos.",
      "Reduz ruídos mecânicos e vibrações na estrutura da máquina em altas rotações.",
      "Aumenta a vida útil dos rolamentos e polias dos servomotores."
    ],
    commonErrors: [
      "❌ Apertar a correia com força excessiva (> 95 Hz), sobrecarregando e quebrando o eixo do servomotor.",
      "❌ Deixar a correia excessivamente solta (< 50 Hz), causando saltos de dente da polia e perda de passos.",
      "❌ Lubrificar a correia dentada com graxa ou óleo comum (o óleo decompõe o poliuretano e faz a correia esticar)."
    ],
    troubleshootingTips: [
      "O contorno do bordado está descentralizado apenas na parte superior e inferior: a correia do eixo Y está frouxa; reaperte o mancal esticador até atingir a firmeza correta.",
      "A máquina está emitindo um zumbido agudo ou chiado contínuo durante o movimento vertical: a correia do eixo Y está esticada demais; afrouxe ligeiramente o tensionador.",
      "O bastidor pula pontos e perde a posição de origem após um salto longo: verifique se os dentes da correia não estão desgastados ou com fiapos presos na polia dentada."
    ],
    dicaArtrelados: "Para fazer um teste rápido de correia sem ferramentas caras: empurre a correia do eixo Y no centro do vão livre com o dedo polegar. Ela deve ceder no máximo entre 8 mm e 10 mm com pressão média. Se ceder mais do que isso, chame seu técnico para o reaperto preventivo!",
    voceSabia: "As correias dentadas com cordonéis de aço usadas no pantógrafo de bordado suportam uma força de tração instantânea de mais de 450 kg sem esticar nem 1 décimo de milímetro!",
    practicalExercise: "Borde uma matriz de teste contendo um quadrado de 10 x 10 cm com preenchimento tatami e um contorno em ponto cheio. Observe se as bordas superior e inferior do contorno encaixam perfeitamente sobre o tatami: se houver vão branco, há folga no eixo Y.",
    quickSummary: "Y-Axis Servo-Belt Tensioning é o ajuste dinâmico de tração das correias síncronas verticais do pantógrafo para garantir alinhamento perfeito de contornos sem folgas mecânicas.",
    recommendedSettings: {
      speedPPM: "800 a 1.000 PPM",
      needleType: "Universal",
      density: "Frequência de tensão da correia: 65 Hz a 78 Hz (Tensão: 140 N)"
    },
    relatedTerms: [
      "Pantógrafo",
      "Eixo Y (Translação Vertical)",
      "Correia Síncrona",
      "Backlash (Folga Mecânica)",
      "Perda de Passos (Step Loss)"
    ],
    tags: [
      "y-019",
      "eixoy",
      "correias",
      "pantografo",
      "mecanica",
      "servomotor",
      "alinhamento",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE DIVISION. Pantograph Y-Drive System & Timing Belt Tension Specifications. Nagoya, 2022.",
      "BARUDAN EMBROIDERY MACHINERY. Mechanical Alignment and Drive Belt Resonance Testing. Ichinomiya, 2021.",
      "ARTRELADOS. Engenharia Mecânica, Dinâmica de Eixos e Manutenção Preventiva de Pantógrafos. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-020-y-junction-branching-in-digitizing",
    code: "Y-020",
    letter: "Y",
    term: "Y-Junction Branching in Digitizing (Ramificação em Y e Otimização de Percurso Vetorial sem Cortes)",
    pronunciation: "uái-djonk-shon brän-ching in di-dji-tai-zing",
    level: "Avançado 🔴",
    category: "Programação e Digitalização de Matrizes",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês 'branching' (ramificação de galhos de árvores) e 'Y-junction' (bifurcação topológica em formato de Y). Teoria dos grafos e otimização matemática de caminhos de Euler.",
    summary: "Algoritmo vetorial no software de matrizes que une objetos ramificados em Y (galhos, letras cursivas e arabescos) em uma costura contínua de ida e volta, sem nenhum corte de linha.",
    definition: "O Y-Junction Branching in Digitizing (Automated Path Branching & Continuous Top-and-Bottom Sequencing / Euler Path Vectorization) é a técnica avançada de programação de matrizes em que múltiplos segmentos de ponto cheio ou ponto corrido conectados em bifurcações tipo 'Y' são compilados como uma única entidade contínua. O algoritmo calcula automaticamente as costuras de viagem sob o subponto (underlay travel) até a ponta do primeiro braço do Y, borda a cobertura em cetim no caminho de retorno até a junção central, viaja pelo segundo braço e finaliza o tronco principal. Isso reduz o tempo de máquina em até 40% ao eliminar dezenas de cortes de linha e arremates desnecessários em arabescos, fontes caligráficas e folhagens botânicas.",
    technicalDetails: "Baseado na teoria matemática dos grafos e no Algoritmo de Fleury para grafos eulerianos. O software gera automaticamente uma camada oculta de pontos de ancoragem (*traveling underlay*) com passo de 2.0 mm a 2.5 mm posicionada exatamente no eixo neutro central das colunas, garantindo cobertura total pelos pontos cheios subsequentes.",
    beginnerExplanation: "Sabe quando a máquina está bordando um galho de árvore com vários raminhos ou uma letra cheia de voltinhas, e a cada pontinha ela para, dá nó, corta a linha e pula para o outro lado? Isso faz o bordado demorar uma eternidade e enche a peça de nós no avesso! A ramificação em Y é um comando esperto no programa de computador que faz a máquina ir até a pontinha do galho fazendo uma costurinha por baixo e voltar cobrindo tudo com pontos cheios lisos, bordando a árvore inteira de uma vez só sem dar nenhum corte de linha!",
    howItWorks: [
      "1. O programador seleciona todos os objetos vetoriais interligados que formam a ramificação em Y no software.",
      "2. Clica na ferramenta de ramificação automática (*Branching / Conectar Ramos*).",
      "3. O software pede para marcar apenas o ponto de entrada (início) e o ponto de saída (fim) do conjunto.",
      "4. O programa gera a rota ótima: calcula os subpontos de ida por dentro da coluna e os pontos de cetim de volta.",
      "5. As junções no centro do Y são costuradas com sobreposição suave para não deixar marcas.",
      "6. A máquina borda todos os braços em sequência fluida e contínua.",
      "7. O bordado termina com zero cortes de linha e o verso da peça fica 100% limpo e macio."
    ],
    applications: [
      "Digitalização de monogramas cursivos intrincados e caligrafias de casamento.",
      "Bordados florais botânicos, galhos, caules e folhas estilizadas.",
      "Bordados rendados (Free-Standing Lace - FSL) que exigem continuidade estrutural.",
      "Otimização de logotipos com linhas finas e arabescos para produção seriada de alta velocidade."
    ],
    characteristics: [
      "Elimina de 5 a 20 cortes de linha por desenho, economizando minutos preciosos de máquina.",
      "Verso extremamente limpo e liso, sem nós de arremate que pinicam a pele.",
      "Evita quebras de linha e desfiamentos nas paradas frequentes do trimmer."
    ],
    commonErrors: [
      "❌ Tentar ramificar objetos com larguras de ponto muito diferentes sem ajustar a densidade individual.",
      "❌ Deixar os pontos de viagem por baixo saírem para fora das bordas da coluna de cetim.",
      "❌ Não verificar a ordem de sobreposição das folhas sobre os caules após aplicar a ramificação automática."
    ],
    troubleshootingTips: [
      "Apareceram pontinhos de linha saindo do lado da letra: a costura de viagem interna ficou muito larga; ajuste a propriedade de viagem para 'Centralizar no Eixo Neutro' no software.",
      "A junção no meio do Y ficou muito grossa e dura: diminua a densidade de pontos na área de sobreposição no software para 0.45 mm.",
      "A máquina cortou a linha no meio do galho: verifique se todos os nós dos objetos estão realmente encostados antes de aplicar o comando de ramificação."
    ],
    dicaArtrelados: "Use a ferramenta de Ramificação (Branching) em TODAS as suas fontes cursivas e arabescos! Além de o bordado ficar muito mais bonito e rápido na máquina, o avesso fica tão limpo e lisinho que os clientes vão achar que foi feito por mágica!",
    voceSabia: "A aplicação dos grafos de Euler à digitalização de bordados foi desenvolvida na década de 1980 pela empresa australiana Wilcom, revolucionando a velocidade da indústria têxtil mundial!",
    practicalExercise: "Desenhe uma letra 'Y' maiúscula cursiva no seu software. Borde uma versão com 3 objetos separados (com 3 cortes de linha) e outra versão usando a ferramenta de Ramificação (com 0 cortes). Compare o tempo de máquina e o avesso das duas.",
    quickSummary: "Y-Junction Branching é o algoritmo vetorial que conecta ramificações e letras cursivas em um único trajeto contínuo de ida e volta, eliminando cortes e acelerando o bordado.",
    recommendedSettings: {
      speedPPM: "800 a 950 PPM",
      needleType: "75/11 Ponta Fina ou Ponta Bola",
      density: "Densidade de cobertura: 0.40 mm com underlay de viagem centralizado"
    },
    relatedTerms: [
      "Ramificação (Branching)",
      "Caminho de Euler",
      "Costura de Viagem (Travel Stitch)",
      "Otimização de Matrizes",
      "Letras Cursivas no Bordado"
    ],
    tags: [
      "y-020",
      "branching",
      "ramificacao",
      "otimizacao",
      "digitalizacao",
      "cortesdelinha",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Advanced Vector Branching and Travel Path Optimization. Sydney, 2022.",
      "PULSE MICROSYSTEMS. Continuous Path Stitch Generation and Graph Theory in Embroidery. Mississauga, 2021.",
      "ARTRELADOS. Programação Vetorial Inteligente e Redução de Tempos Mortos na Digitalização. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-021-y-shrinkage-and-warp-tensile-compensation",
    code: "Y-021",
    letter: "Y",
    term: "Y-Shrinkage & Warp Tensile Compensation (Compensação de Encolhimento e Repuxo no Eixo Y)",
    pronunciation: "uái-xrin-keidj end uórp ten-saiel com-pen-sei-xion",
    level: "Avançado 🔴",
    category: "Programação e Digitalização de Matrizes",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês 'warp' (fios longitudinais do urdume no tear) e 'shrinkage' (encolhimento). Física de tração têxtil aplicada à compensação de matrizes.",
    summary: "Calibração paramétrica na matriz que compensa a deformação elástica dos fios verticais do urdume, impedindo que letras e brasões fiquem encurtados ou achatados na vertical.",
    definition: "O Y-Shrinkage & Warp Tensile Compensation (Longitudinal Warp Elastic Recovery, Vertical Pull Compensation & Aspect Ratio Geometry Preservation) é o ajuste de compensação vetorial direcionado para o eixo Y da matriz de bordado. Em tecidos com forte tensão ou elasticidade longitudinal (como sarjas pesadas com elastano, tecidos de malha canelada e fitas de poliéster), a força de tração contínua das agulhadas verticais estira os fios do urdume durante o enquadramento no bastidor. Quando a peça é solta do bastidor, o urdume relaxa e encolhe bruscamente no sentido vertical, achatando logotipos circulares e encurtando letras. A compensação no eixo Y aplica uma pré-extensão calculada (de +5% a +15% na altura ou +0.25 mm a +0.40 mm nas colunas verticais) para restaurar a geometria original após o desbastidoramento.",
    technicalDetails: "Diferencial de retração Urdume x Trama ($R_y / R_x$). O software de matrizes aplica fator de escala anisotrópica compensatória nos nós vetoriais verticais preservando as proporções ópticas exatas após relaxamento de 24 horas a 20 °C e 65% UR.",
    beginnerExplanation: "Quando a gente prende um tecido no bastidor, ele fica esticadinho como uma cama elástica. Mas quando a máquina termina de bordar e a gente solta o bastidor, o tecido volta para o tamanho normal e 'encolhe' na altura, fazendo um desenho redondo virar um círculo achatado e as letras parecerem baixinhas e gordas! A compensação no eixo Y faz o desenho ficar um pouquinho mais alto de propósito no computador, para que quando o tecido encolher de volta na vida real, o bordado fique perfeito, retinho e com a altura exata que você queria!",
    howItWorks: [
      "1. A bordadeira avalia a elasticidade do tecido puxando suavemente no sentido do comprimento (urdume).",
      "2. No software de matrizes, ativa a compensação de repuxo vertical ou aplica escala proporcional de +8% na altura Y.",
      "3. Ajusta o subponto para uma grade dupla perpendicular que ancora o tecido antes dos pontos cheios.",
      "4. A máquina executa o bordado com o tecido firme e estabilizado com entretela de corte limpo.",
      "5. A peça é retirada do bastidor e deixada em repouso por alguns minutos para relaxamento das fibras.",
      "6. As dimensões verticais encolhem exatamente a margem calculada.",
      "7. O logotipo atinge medidas milimétricas e simetria circular absoluta em 360°."
    ],
    applications: [
      "Bordados em calças jeans com elastano e sarjas de uniformes operacionais.",
      "Monogramas verticais em toalhas de banho felpudas e roupões de algodão.",
      "Logotipos redondos perfeitos em fitas de cetim, gorgurão e alças de poliéster.",
      "Produção de patches militares e condecorações que exigem medidas com tolerância de 0.5 mm."
    ],
    characteristics: [
      "Garante que círculos e brasões fiquem 100% redondos após saírem do bastidor.",
      "Elimina rugas e ondulações do tecido acima e abaixo do bordado.",
      "Compatível com tecidos de alta elasticidade e diferentes graus de encolhimento têxtil."
    ],
    commonErrors: [
      "❌ Puxar o tecido com força excessiva no sentido vertical ao apertar o parafuso do bastidor.",
      "❌ Usar entretela rasgadeira fraca em tecidos elásticos no urdume (o tecido encolhe e puxa a entretela junto).",
      "❌ Aumentar a densidade de pontos sem aplicar compensação de altura (piora o encolhimento vertical)."
    ],
    troubleshootingTips: [
      "O círculo bordado ficou com a altura menor do que a largura após sair do bastidor: aplique um fator de escala de +7% no eixo Y da matriz ou aumente a compensação de repuxo vertical no software.",
      "O tecido ao redor das letras verticais está franzindo como uma sanfona: substitua a entretela por duas camadas de entretela de corte cruzado (Cutaway 80 g/m²).",
      "O contorno preto superior ficou afastado do preenchimento colorido: aumente o transpasse do preenchimento em +0.35 mm no sentido do eixo Y."
    ],
    dicaArtrelados: "Para saber exatamente quanto o seu tecido encolhe no eixo Y: borde um quadrado de teste de 5,0 x 5,0 cm. Tire do bastidor e meça a altura com uma régua. Se a altura ficou com 4,6 cm, seu tecido encolhe 8% no urdume: basta aumentar a altura da sua matriz em 8% no programa!",
    voceSabia: "Em tecidos planos como o jeans, os fios do urdume são montados no tear sob uma tensão mecânica de mais de 2.000 quilos de força, guardando uma enorme 'memória elástica' que é liberada durante o bordado!",
    practicalExercise: "Borde dois círculos de 4 cm em um retalho de sarja com elastano: um com matriz normal e outro com +8% de escala na altura Y. Meça ambos com uma régua após tirar do bastidor e veja a perfeição do segundo.",
    quickSummary: "Y-Shrinkage Compensation é o ajuste de compensação vetorial na altura da matriz que neutraliza o encolhimento do urdume do tecido, mantendo a geometria e simetria perfeitas.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Bola (SES) ou Ponta Fina (RG)",
      density: "Compensação de repuxo vertical: +0.25 mm a +0.40 mm com underlay em grade"
    },
    relatedTerms: [
      "Urdume (Warp)",
      "Compensação de Repuxo",
      "Entretela de Corte (Cutaway)",
      "Memória Elástica Têxtil",
      "Deformação de Matrizes"
    ],
    tags: [
      "y-021",
      "yshrinkage",
      "urdume",
      "eixoy",
      "repuxo",
      "compensacao",
      "precisao",
      "artrelados"
    ],
    bibliographicReferences: [
      "TEXTILE RESEARCH INSTITUTE. Warp Elasticity & Dimensional Recovery in Computerized Stitching. Princeton, 2021.",
      "WILCOM EMBROIDERY STUDIO. Asymmetrical Fabric Pull and Warp Distortion Guide. Sydney, 2022.",
      "ARTRELADOS. Engenharia de Estabilização e Compensação de Repuxo em Tecidos Elásticos. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-022-y-axis-cap-frame-inversion-and-cylindrical-motion",
    code: "Y-022",
    letter: "Y",
    term: "Y-Axis Cap Frame Inversion & Cylindrical Motion (Cinemática Invertida e Eixo Y em Bastidores de Boné)",
    pronunciation: "uái-ék-sis cäp freim in-ver-xion end si-lin-dri-cal mou-xion",
    level: "Avançado 🔴",
    category: "Bastidores & Enquadramento",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês 'cap frame' (bastidor cilíndrico de bonés) e 'kinematic inversion' (inversão de coordenadas cinemáticas cartesianas para polares). Mecatrônica de bordado industrial.",
    summary: "Transformação mecatrônica que converte o movimento cartesiano Y da matriz em rotação angular cilíndrica no dispositivo de bonés, exigindo digitalização de dentro para fora.",
    definition: "O Y-Axis Cap Frame Inversion & Cylindrical Motion (Cinemática Curvilínea de Bonés de 270°, Inversão de Coordenadas do Eixo Y e Compensação de Raio Cilíndrico) é a conversão dos comandos lineares do eixo Y da máquina para a tração rotativa da coroa dentada do dispositivo de bonés (*Cap Driver*). Ao enquadrar um boné curvo, o centro da testa fica mais próximo do eixo de rotação do que as abas laterais. Além disso, para evitar que o gomo frontal do boné empurre o tecido e crie um papo ou ruga no meio, a programação da matriz exige a inversão de direção (*Cap Mode Rotation 180°*) e o sequenciamento obrigatório de dentro para fora (*Center-Out Sequencing*) e de baixo para cima no eixo Y.",
    technicalDetails: "Ângulo de rotação angular: 270° de arco com raio médio de 85 mm. Relação de redução de engrenagens do Cap Driver: 1:3.2. Velocidade linear superficial tangencial: limitada a 650 PPM para prevenir vibração e deflexão da aba rígida.",
    beginnerExplanation: "Bordar um boné não é como bordar uma camiseta plana na mesa: o boné é redondo e tem uma costura grossa no meio! O dispositivo de bonés faz a máquina girar o boné de um lado para o outro como se fosse uma roda. Por causa disso, o desenho precisa ser programado no computador para começar a bordar no meio da testa e ir abrindo para as laterais, empurrando o tecido para os cantos para a frente do boné ficar lisinha e sem rugas!",
    howItWorks: [
      "1. A bordadeira monta o boné no gabarito cilíndrico com entretela pesada estruturada de 100 g/m².",
      "2. Prende a cinta de aço dentada com o fecho de pressão rente à costura da aba.",
      "3. Encaixa o bastidor no Cap Driver da máquina até travar nas 3 esferas de pressão.",
      "4. No painel da máquina, ativa o ícone de 'Bastidor de Boné' (que inverte a matriz em 180° automaticamente).",
      "5. A matriz executa a sequência Center-Out: inicia no centro do eixo Y e borda expandindo para a esquerda e para a direita.",
      "6. A rotação do eixo Y mantém a superfície curva sempre perpendicular à ponta da agulha.",
      "7. O bordado no boné fica perfeito, sem rugas na costura central e sem desalinhamento."
    ],
    applications: [
      "Bordados profissionais em bonés estruturados de 6 gomos com costura central grossa.",
      "Bordados contínuos de lateral a lateral em bonés fechados e abertos (campo de 270°).",
      "Personalização de viseiras esportivas e chapéus de praia no braço cilíndrico.",
      "Bordados em peças tubulares rígidas de diâmetro médio."
    ],
    characteristics: [
      "Permite bordar em superfícies curvas sem desmontar a estrutura do boné.",
      "Sequenciamento obrigatório do centro para as laterais (Center-Out).",
      "Rotação automática da matriz em 180 graus no painel de controle."
    ],
    commonErrors: [
      "❌ Digitalizar a matriz para boné da esquerda para a direita como se fosse um tecido plano (cria uma onda enorme de tecido no gomo direito).",
      "❌ Operar a máquina em velocidade máxima (> 750 PPM) com bastidor de boné (o peso da aba entorta a agulha).",
      "❌ Não esticar a entretela e o tecido com a fita elástica de contenção de aba."
    ],
    troubleshootingTips: [
      "O bordado ficou com uma dobra feia em cima da costura do meio do boné: reprograme a matriz no software com ordem de bordado 'Do Centro para Fora' (Center-Out).",
      "A agulha quebrou bem na junção da aba com a testa: a matriz está muito próxima da margem inferior; suba o desenho em pelo menos 15 mm no eixo Y.",
      "As letras das laterais do boné ficaram deformadas e esticadas: diminua a velocidade da máquina para 600 PPM e aperte a trava da cinta metálica do bastidor."
    ],
    dicaArtrelados: "A regra de ouro de ouro do bordado de bonés: NUNCA borde um boné de um lado para o outro como uma camiseta! Use sempre matriz com sequência 'Do Meio para Fora' e limite a altura do desenho a no máximo 5,5 cm para garantir sucesso 100% garantido!",
    voceSabia: "Os dispositivos de boné com rotação de 270 graus foram inventados no Japão na década de 1980 pela Tajima especialmente para atender a demanda explosiva dos bonés da liga americana de beisebol (MLB)!",
    practicalExercise: "Abra uma matriz de boné no seu software e use a ferramenta de simulação do caminho do ponto (Player / Redraw). Verifique se os pontos começam exatamente na linha central da matriz e caminham para as bordas externas.",
    quickSummary: "Y-Axis Cap Frame Inversion é o sistema mecatrônico de rotação cilíndrica para bonés que converte o eixo Y em movimento curvo e exige digitalização do centro para fora.",
    recommendedSettings: {
      speedPPM: "600 a 680 PPM",
      needleType: "80/12 Ponta Fina Reforçada (SAN 6 ou Titanium)",
      density: "Densidade adaptada para sarja pesada: 0.40 mm a 0.42 mm"
    },
    relatedTerms: [
      "Bastidor de Boné (Cap Frame)",
      "Cap Driver",
      "Sequenciamento do Centro para Fora (Center-Out)",
      "Rotação 180°",
      "Entretela para Boné"
    ],
    tags: [
      "y-022",
      "capframe",
      "bones",
      "eixoy",
      "rotacao",
      "cinematica",
      "bastidor",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINERY. Cap Frame 270 Operation, Setup and Stitch Sequencing Manual. Nagoya, 2021.",
      "NATIONAL EMBROIDERY GUILD. Headwear Embroidery Dynamics: Center-Out Digitizing & Frame Limits. Louisville, 2022.",
      "ARTRELADOS. Guia Definitivo do Bordado em Bonés e Peças Cilíndricas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-023-yoke-embroidery-on-tailored-shirts-and-western-garments",
    code: "Y-023",
    letter: "Y",
    term: "Yoke Embroidery on Tailored Shirts & Western Garments (Bordado em Palas de Camisas e Jaquetas de Alfaiataria)",
    pronunciation: "iôuk em-broi-de-ri on têi-lord xêrts end ués-tern gár-ments",
    level: "Intermediário 🟡",
    category: "Aplicações & Técnicas Especiais",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês 'yoke' (pala de camisa / recorte de reforço nos ombros e costas da camisaria clássica e moda country/western).",
    summary: "Técnicas especializadas de enquadramento, estabilização e alinhamento milimétrico para bordar palas traseiras e frontais cortadas no fio reto ou em viés.",
    definition: "O Yoke Embroidery on Tailored Shirts & Western Garments (Bordado Estrutural em Palas Duplas de Camisaria, Jaquetas Jeans e Moda Western / Grainline Alignment & Shoulder Seam Integration) é o método técnico de aplicação de bordados em painéis de ombro e costas superiores (palas). Como a pala de uma camisa de alfaiataria é frequentemente cortada com tecido duplo e às vezes no sentido do viés (45°) para dar caimento e elasticidade natural ao tronco, o bordado incorreto pode repuxar a linha dos ombros e estragar o caimento da peça. A técnica exige a perfeita identificação do fio reto do tecido (*grainline*), o uso de entretela termocolante hidrossolúvel ou de toque suave no verso interno e gabaritos de mira laser para garantir que o desenho fique 100% paralelo à costura dos ombros.",
    technicalDetails: "Alinhamento com a linha de centro das costas e margem de segurança de 25 mm em relação à costura do colarinho e das cavas. Densidade de pontos calibrada entre 0.40 mm e 0.44 mm para preservar a maleabilidade do tecido fino (popeline de algodão 80 a 120 fios).",
    beginnerExplanation: "A pala é aquele pedaço de tecido duplo reforçado que fica bem nas costas da camisa, logo abaixo da gola e em cima dos ombros (muito famosa em camisas sociais e camisas xadrez de rodeio!). Bordar na pala exige um cuidado especial porque a pala precisa ficar bem retinha nos ombros da pessoa: se o bordado repuxar o tecido, a camisa inteira fica torta! Usando a entretela correta e alinhando com a régua na costura das costas, o bordado fica chique, lisinho e com caimento de loja fina!",
    howItWorks: [
      "1. A bordadeira desabotoa a camisa e abre a pala traseira sobre a mesa de trabalho.",
      "2. Encontra o centro exato dobrando a pala ao meio e marca com giz de alfaiate a linha vertical guia.",
      "3. Aplica uma folha de entretela de corte suave (Cutaway macia de 50 g/m²) fixada com cola spray temporária no interior da pala.",
      "4. Enquadra a pala no bastidor mantendo a costura da gola perfeitamente paralela à borda do aro.",
      "5. Alinha o ponto de mira laser da máquina na marcação central de giz.",
      "6. A máquina borda o logotipo ou arabesco com velocidade suave de 700 PPM.",
      "7. Retira-se do bastidor, apara-se a entretela suavemente e passa-se a ferro pelo avesso com pano de proteção."
    ],
    applications: [
      "Uniformes corporativos e executivos em camisas sociais de alta camisaria.",
      "Camisas country e western com bordados ricos em arabescos nas palas frontais e traseiras.",
      "Jaquetas jeans e jaquetas de sarja com nomes e logotipos bordados nas costas.",
      "Batas médicas e jalecos de profissionais com identificação nas costas."
    ],
    characteristics: [
      "Caimento impecável nos ombros sem repuxar a gola ou as cavas da camisa.",
      "Avesso macio que não incomoda nem arranha a nuca e as costas do usuário.",
      "Simetria e alinhamento milimétrico com a costura superior do colarinho."
    ],
    commonErrors: [
      "❌ Bordar muito perto da costura da gola (< 20 mm), batendo o calcador da máquina no colarinho grosso.",
      "❌ Usar entretela rasgadeira dura e grossa (a pala fica dura como uma tábua e machuca a pele).",
      "❌ Enquadrar a camisa torta sem conferir a linha de centro da pala com uma régua."
    ],
    troubleshootingTips: [
      "A camisa ficou com o ombro repuxado após passar a ferro: use entretela de corte macia (Cutaway Soft) e reduza a densidade de preenchimento da matriz para 0.44 mm.",
      "O bordado ficou torto em relação à costura das costas: utilize o gabarito plástico transparente de centro do bastidor e confira a horizontalidade com uma régua de alfaiate antes de apertar o aro.",
      "O calcador da máquina está batendo na costura do colarinho: desça a posição inicial da matriz em 15 mm no painel da máquina."
    ],
    dicaArtrelados: "Para camisas sociais finas: passe sempre uma camada de entretela termocolante bem levinha no verso da pala antes de bordar! Isso estabiliza os dois tecidos da pala juntos e o bordado fica tão perfeito e sem rugas que parece feito na Itália!",
    voceSabia: "As clássicas camisas western com bordados vistosos nas palas em formato de coração ou asas foram popularizadas no cinema nos anos 1940 pelo lendário estilista Nudie Cohn, vestindo astros como Elvis Presley e Johnny Cash!",
    practicalExercise: "Marque a linha de centro da pala de uma camisa velha com giz. Enquadre usando o gabarito transparente do bastidor e borde um monograma de 6 cm. Confira se o monograma ficou perfeitamente nivelado em relação à costura da gola.",
    quickSummary: "Yoke Embroidery é o bordado técnico em palas de camisas e jaquetas que combina alinhamento simétrico rigoroso e entretelas macias para preservar o caimento perfeito dos ombros.",
    recommendedSettings: {
      speedPPM: "700 a 780 PPM",
      needleType: "70/10 ou 75/11 Ponta Fina (Sharp)",
      density: "Densidade leve e maleável: 0.42 mm a 0.45 mm"
    },
    relatedTerms: [
      "Pala de Camisa (Yoke)",
      "Camisaria de Alfaiataria",
      "Fio Reto do Tecido (Grainline)",
      "Entretela Cutaway Suave",
      "Moda Western e Country"
    ],
    tags: [
      "y-023",
      "yoke",
      "palas",
      "camisas",
      "alfaiataria",
      "western",
      "enquadramento",
      "artrelados"
    ],
    bibliographicReferences: [
      "SHIRTMAKERS GUILD OF AMERICA. Tailored Garment Embroidery & Yoke Alignment Protocols. Nova York, 2022.",
      "EMBROIDERY BUSINESS REVIEW. High-End Corporate Shirt Embroidery and Soft Backing Selection. Chicago, 2021.",
      "ARTRELADOS. Guia de Bordado em Roupas Sociais, Uniformes Executivos e Moda Fina. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-024-yarn-dyed-fabric-embroidery-dynamics",
    code: "Y-024",
    letter: "Y",
    term: "Yarn-Dyed Fabric Embroidery Dynamics (Dinâmica de Bordado em Tecidos com Fio Tinto / Fio a Fio)",
    pronunciation: "iárn-dáid fá-brik em-broi-de-ri dai-ná-miks",
    level: "Intermediário 🟡",
    category: "Estruturação & Física Têxtil",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'yarn-dyed' (fio tinto / tecido cujos fios de urdume e trama são tingidos antes da tecelagem, como tecidos xadrez, listrados e jacquards).",
    summary: "Diretrizes de alinhamento visual, escolha de cores de linha e controle de densidade para bordar sobre tecidos xadrez, listrados e maquinetados fio a fio.",
    definition: "O Yarn-Dyed Fabric Embroidery Dynamics (Estabilização Óptica e Mecânica em Tecidos Fio Tinto, Geometria Xadrez e Interação de Padrões) é o conjunto de regras técnicas de digitalização e enquadramento para bordar sobre tecidos fabricados com fios pré-tingidos (como tecidos xadrez tipo flanela e vichy, cambraias listradas, seersucker e tecidos maquinetados). Ao contrário de tecidos lisos tingidos em peça, o tecido fio tinto possui uma grade geométrica visual evidente formada pelas linhas de cor da trama e do urdume. Se o bordado for enquadrado com uma inclinação de apenas 1° em relação às linhas do xadrez, o erro visual de paralelismo torna-se imediatamente gritante. Além disso, a matriz precisa usar underlay denso de tatami para evitar que as listras contrastantes do fundo 'vazem' visualmente por entre os pontos do bordado.",
    technicalDetails: "Alinhamento com a grade do tecido (Weave Grid Coincidence). Compensação óptica por subponto em tatami duplo fechado (densidade 0.80 mm) com camada de bloqueio visual (*Visual Barrier Underlay*) e agulhas 70/10 com ponta fina afiada (Microtex/Sharp).",
    beginnerExplanation: "Tecido fio tinto é aquele tecido (como a camisa xadrez ou a toalha listradinha) onde as listras já foram feitas com fios coloridos de verdade no tear, e não apenas estampadas por cima! Bordar em tecido xadrez exige atenção redobrada: se o bastidor ficar um pouquinho torto, todo mundo vai ver na hora que o bordado não está alinhado com as linhas do xadrez! Além disso, se o bordado for ralo, as listras escuras do tecido aparecem por baixo da linha clara, então precisamos de uma costura de fundo bem fechadinha!",
    howItWorks: [
      "1. A bordadeira analisa a padronagem do tecido xadrez ou listrado e escolhe uma linha de cor do xadrez como referência.",
      "2. Aplica entretela de corte limpo (Cutaway) com adesivo temporário para travar a trama.",
      "3. Enquadra o tecido no bastidor alinhando uma das linhas retas do xadrez com a borda do aro ou com a régua do bastidor.",
      "4. No software, programa a matriz com um subponto de tatami leve de fundo (Underlay Block) na mesma cor do bordado.",
      "5. A máquina borda o subponto de bloqueio, cobrindo o contraste das listras do tecido.",
      "6. Em seguida, borda os pontos de cobertura em cetim ou tatami normal.",
      "7. O bordado fica perfeitamente nivelado com as listras do tecido e as cores ficam 100% puras sem transparência.",
    ],
    applications: [
      "Bordados de logotipos em camisas xadrez de flanela, moda country e uniformes de restaurantes temáticos.",
      "Monogramas em jogos americanos e guardanapos de tecido vichy e jacquard fio tinto.",
      "Bordados em camisas sociais masculinas de listras finas (fio a fio / cambraia de algodão).",
      "Personalização de mantas de piquenique, toalhas de mesa xadrez e almofadas rústicas."
    ],
    characteristics: [
      "Alinhamento geométrico perfeito com as linhas de trama e urdume visíveis do tecido.",
      "Zero transparência das listras de fundo sob as cores claras do bordado.",
      "Preservação da estrutura do tecido sem puxar fios coloridos da trama."
    ],
    commonErrors: [
      "❌ Enquadrar o tecido 'no olho' sem conferir se a listra do tecido está paralela à borda do bastidor.",
      "❌ Bordar letras brancas com densidade padrão de 0.40 mm direto sobre xadrez preto e vermelho (o xadrez fica aparecendo no meio das letras).",
      "❌ Usar agulha ponta bola gasta que desfia e puxa os fios tintos da trama para a superfície."
    ],
    troubleshootingTips: [
      "As listras do tecido estão aparecendo por baixo da linha branca do bordado: ative um subponto em tatami fechado (Tatami Underlay a 0.80 mm) no software de matrizes para criar um fundo sólido de bloqueio.",
      "O desenho ficou torto em relação ao xadrez da camisa: use o recurso de rotação de ângulo no painel da máquina para girar a matriz 1° ou 2° até alinhar com o laser na listra do tecido.",
      "A agulha está puxando pontinhos escuros do tecido para cima: troque a agulha por uma agulha ponta fina nova (calibre 70/10 Sharp)."
    ],
    dicaArtrelados: "Para bordar em tecido xadrez: acenda o laser de mira da sua máquina e mova o bastidor na horizontal! O pontinho de luz deve correr EXATAMENTE em cima da mesma listra do xadrez de ponta a ponta. Se ele desviar, gire o desenho no painel até casar perfeitamente!",
    voceSabia: "O tecido xadrez 'Tartan' escocês tradicional é um dos tecidos fio tinto mais antigos da humanidade, onde cada clã familiar possuía uma combinação de cores e larguras de fios registrada oficialmente desde o século XVI!",
    practicalExercise: "Pegue um retalho de tecido xadrez ou listrado. Enquadre usando a régua de alinhamento e borde uma letra 'M' de 3 cm com um subponto de tatami. Verifique o paralelismo com a listra e a opacidade da cor.",
    quickSummary: "Yarn-Dyed Fabric Dynamics são as regras de enquadramento alinhado à grade do xadrez e uso de subpontos de bloqueio visual para bordar sobre tecidos fabricados com fios pré-tingidos.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "70/10 ou 75/11 Ponta Fina (Sharp / Microtex)",
      density: "Densidade de cobertura: 0.38 mm com subponto de tatami de bloqueio"
    },
    relatedTerms: [
      "Tecido Fio Tinto",
      "Xadrez e Tartan",
      "Subponto de Bloqueio (Block Underlay)",
      "Alinhamento por Laser",
      "Agulha Ponta Fina (Sharp)"
    ],
    tags: [
      "y-024",
      "yarndyed",
      "fiotinto",
      "xadrez",
      "listrado",
      "alinhamento",
      "bloqueio",
      "artrelados"
    ],
    bibliographicReferences: [
      "TEXTILE DESIGN GUILD. Pattern Alignment & Color Opacity in Yarn-Dyed Fabrics. Manchester, 2021.",
      "WILCOM EMBROIDERY STUDIO. Contrast Underlays & Grid Coincidence Techniques. Sydney, 2022.",
      "ARTRELADOS. Manual de Bordados em Tecidos Xadrez, Listrados e Padronagens Geométricas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-025-y-shaped-underlay-and-corner-reinforcement",
    code: "Y-025",
    letter: "Y",
    term: "Y-Shaped Underlay & Corner Reinforcement (Subponto de Ancoragem em Y para Vértices e Quinas Fechadas)",
    pronunciation: "uái-xêipt an-der-lei end cor-ner ri-in-fórs-ment",
    level: "Avançado 🔴",
    category: "Programação e Digitalização de Matrizes",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da topologia vetorial de subpontos estruturais e engenharia de alívio de nós em vértices agudos de fontes tipográficas.",
    summary: "Estrutura de subponto em formato de bifurcação em Y que ancora vértices pontiagudos (letras V, W, K e Y) sem acumular volume de pontos nem quebrar agulhas.",
    definition: "O Y-Shaped Underlay & Corner Reinforcement (Subponto Bifurcado em Y para Vértices Agudos, Alívio de Densidade em Junções Angulares e Ancoragem Estrutural) é a técnica de digitalização de subpontos aplicada especificamente em quinas e encontros de colunas que formam ângulos agudos (inferiores a 45°). Quando duas colunas de cetim se encontram em um vértice fechado, o subponto linear simples convencional tende a ultrapassar as bordas ou acumular uma sobreposição excessiva de pontos no mesmo ponto focal, gerando um nódulo duro (*bullet point*) que desvia a agulha e causa quebras de linha e rasgos no tecido. O subponto em 'Y' divide a linha de ancoragem em dois ramos diagonais que sustentam as laterais sem se cruzar no ápice, garantindo pontas agulhadas extremamente afiadas e toque plano.",
    technicalDetails: "Ângulo de bifurcação de 30° a 45°. Recuo do ápice (*Apex Inset*): o subponto recua 0.8 mm a 1.2 mm do vértice final da coluna. Comprimento de passo reduzido para 1.8 mm a 2.0 mm para máxima ancoragem na entretela.",
    beginnerExplanation: "Quando a gente borda letras com bicos finos (como a ponta da letra 'V', do 'W' ou do 'Y'), as duas partes da letra se encontram no mesmo biquinho. Se a gente colocar costura demais ali embaixo, aquele bico vira um caroço duro de linha parecendo uma pedrinha, e a agulha bate ali e quebra com um estalo! O subponto em Y é um desenho esperto de costurinha por baixo que se abre como um garfinho, segurando o tecido dos dois lados sem deixar a ponta dura nem empelotada!",
    howItWorks: [
      "1. O programador identifica os vértices pontiagudos e quinas afiadas na fonte ou logotipo.",
      "2. No software de matrizes, entra nas propriedades de subponto (Underlay) da coluna angular.",
      "3. Ativa a opção de subponto bifurcado ou desenha manualmente a ancoragem em formato de 'Y'.",
      "4. Configura o recuo do subponto em 1,0 mm da ponta externa do vértice.",
      "5. Aplica a ferramenta de canto inteligente (*Smart Corners / Mitered Corner*) com divisão de densidade.",
      "6. A máquina borda a ancoragem em Y e cobre suavemente com os pontos de cetim.",
      "7. O vértice fica com uma ponta afiada e perfeita, macio ao toque e sem nenhuma quebra de agulha."
    ],
    applications: [
      "Digitalização de fontes tipográficas com serifas afiadas e letras angulares (A, K, M, N, V, W, X, Y, Z).",
      "Bordado de estrelas de condecorações, brasões militares e pontas de setas.",
      "Bordados corporativos de alta definição com logotipos geométricos pontiagudos.",
      "Contornos finos de arabescos e motivos tribais com quinas vivas."
    ],
    characteristics: [
      "Pontas e quinas extremamente nítidas e afiadas sem deformação.",
      "Elimina o nódulo duro e o acúmulo excessivo de pontos no vértice.",
      "Reduz a zero o risco de quebras de agulha e cortes no tecido por perfuração excessiva."
    ],
    commonErrors: [
      "❌ Deixar o subponto chegar até a pontinha extrema do vértice, fazendo o subponto 'escapar' para fora da coluna de cobertura.",
      "❌ Não ativar o alívio de densidade nas esquinas, gerando um caroço duro de linha que fura o tecido.",
      "❌ Usar densidade pesada de 0.30 mm sobre vértices já sobrepostos."
    ],
    troubleshootingTips: [
      "A agulha está quebrando com frequência exatamente no bico das letras V e W: ative o subponto em Y com recuo de 1.0 mm e ative o canto em esquadria (Mitered Corner) no software.",
      "Apareceu uma pontinha de linha do subponto para fora da quina da estrela: aumente a margem de recuo do subponto (Underlay Margin) para 0.8 mm no objeto.",
      "O bico da letra ficou arredondado e sem definição: diminua a compensação de repuxo apenas no vértice e utilize agulha ponta fina 70/10."
    ],
    dicaArtrelados: "Para fazer estrelas e letras com bicos afiadíssimos como facas: nunca deixe as costuras de baixo chegarem até a pontinha final! Deixe o subponto parar 1 milímetro antes da ponta: os pontos de cima vão fechar o bico perfeitamente e o bordado fica super limpo e afiado!",
    voceSabia: "Em análises de microscopia eletrônica, o acúmulo de pontos cheios em esquinas sem alívio pode concentrar até 12 camadas de linha no mesmo ponto de 1 mm², criando uma rigidez comparável ao plástico rígido injetado!",
    practicalExercise: "Desenhe uma estrela de 5 pontas no seu software. Em uma versão, aplique subponto comum até as pontas; na outra versão, aplique o subponto bifurcado em Y com recuo de 1 mm. Borde as duas e compare a nitidez das pontas e a maciez ao toque.",
    quickSummary: "Y-Shaped Underlay é a ancoragem estrutural bifurcada em Y para quinas e vértices agudos que garante pontas extremamente afiadas sem acúmulo de nós nem quebras de agulha.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "70/10 ou 75/11 Ponta Fina (Sharp)",
      density: "Densidade com alívio de canto: 0.40 mm com recuo de 1.0 mm"
    },
    relatedTerms: [
      "Subponto de Ancoragem (Underlay)",
      "Cantos em Esquadria (Mitered Corners)",
      "Alívio de Densidade (Corner Density Relief)",
      "Microletras e Serifas",
      "Deflexão de Agulha"
    ],
    tags: [
      "y-025",
      "yshapedunderlay",
      "subponto",
      "quinas",
      "vertices",
      "digitalizacao",
      "precisao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Advanced Corner Treatments, Smart Corners & Apex Underlay. Sydney, 2022.",
      "TAJIMA DG/ML BY PULSE. Geometric Corner Density Relief and Vector Apex Optimization. Toronto, 2021.",
      "ARTRELADOS. Geometria Sagrada na Digitalização: Cantos Vivos, Vértices Afiados e Alívio de Nós. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-026-yield-stress-and-thread-breakage-threshold",
    code: "Y-026",
    letter: "Y",
    term: "Yield Stress & Thread Breakage Threshold (Tensão de Ruptura e Limite de Escoamento do Fio de Bordar)",
    pronunciation: "íild strés end tréd brêi-keidj tréx-hould",
    level: "Avançado 🔴",
    category: "Fios & Linhas",
    grammarClass: "Substantivo feminina composta.",
    origin: "Da física mecânica de materiais poliméricos e curvas de tensão-deformação (Stress-Strain Curve & Tensile Yield Modulus) de filamentos sintéticos contínuos.",
    summary: "Compreensão da curva de elasticidade e limite de tração das linhas de poliéster e viscose para regular a tensão da máquina abaixo da zona de deformação plástica irreversível.",
    definition: "O Yield Stress & Thread Breakage Threshold (Ponto de Escoamento Mecânico, Limite Elástico Reversível e Tenacidade Crítica de Fios Têxteis) é a grandeza físico-química que determina a quantidade máxima de força de tração contínua e instantânea (medida em gramas-força / cN/tex) que uma linha de bordar suporta antes de sofrer deformação plástica irreversível ou ruptura total. A linha de poliéster 100% trilobal 40wt possui alta tenacidade (resiste a até 1.100 cN com 18% a 22% de alongamento na ruptura), enquanto a linha de viscose/rayon possui menor limite elástico (resiste a cerca de 750 cN com 12% de alongamento). Quando a tensão da máquina ultrapassa o limite elástico (Yield Point), o fio estica, afina, perde o brilho, deforma as laçadas e arrebenta no olho da agulha.",
    technicalDetails: "Curva Tensão x Deformação (Stress-Strain). Zona elástica segura de trabalho na máquina: 110 a 140 gf de tensão dinâmica para poliéster 40wt e 90 a 115 gf para viscose 40wt. Tenacidade típica do poliéster trilobal: 4.2 a 4.8 cN/dtex.",
    beginnerExplanation: "A linha de bordar funciona como um elástico fininho: até um certo ponto de aperto, ela estica e volta ao normal sem nenhum problema. Mas se a máquina apertar a linha além do limite dela (o ponto de escoamento), a linha afina, fica enrugada, perde todo o brilho bonito e estoura com um estalo! Conhecer a força da sua linha ensina você a regular a tensão dos discos na medida certa: nem solta demais para embaraçar embaixo, nem apertada demais para arrebentar a linha!",
    howItWorks: [
      "1. A linha sai do cone, passa pelos guias e entra nos discos tensores superiores.",
      "2. O estica-fio sobe bruscamente aplicando uma força de tração instantânea no fio.",
      "3. Em uma máquina bem regulada, a força de tração atua estritamente dentro da zona elástica segura (120 gf).",
      "4. O fio se estende ligeiramente para formar a laçada na lançadeira e se recolhe com firmeza no tecido.",
      "5. A laçada assenta-se no centro do tecido sem repuxar a entretela.",
      "6. A linha preserva 100% do seu brilho, cor e tenacidade original.",
      "7. A máquina borda dezenas de milhares de pontos a 900 PPM com zero quebras de linha."
    ],
    applications: [
      "Calibração precisa de tensiómetros digitais e manuais (como o tensiómetro Towa de linha superior).",
      "Diferenciação de regulagem entre linhas de poliéster (mais fortes) e linhas de viscose (mais delicadas).",
      "Diagnóstico de lotes de linha de baixa qualidade com filamentos enfraquecidos.",
      "Prevenção de quebras de linha em produções industriais de alta velocidade (acima de 900 PPM)."
    ],
    characteristics: [
      "Conhecimento exato dos limites físicos de força de cada tipo de fio têxtil.",
      "Evita o estiramento excessivo que deforma e encolhe o bordado após a lavagem.",
      "Garante a máxima durabilidade e resistência à tração nas peças prontas."
    ],
    commonErrors: [
      "❌ Apertar os tensores da máquina com força excessiva para 'esconder' a linha da bobina que está aparecendo por falta de regulagem inferior.",
      "❌ Usar a mesma tensão pesada de poliéster em cones de linha de viscose/rayon (a viscose quebra sem parar).",
      "❌ Puxar a linha da agulha travada com alicate ou com a mão com brutalidade, descalibrando o estica-fio."
    ],
    troubleshootingTips: [
      "A linha está arrebentando a toda hora e a pontinha arrebentada parece um cabelinho enrolado e esticado: a tensão superior ultrapassou o limite elástico; solte os tensores superiores em 1 a 2 voltas completas.",
      "O bordado ficou opaco e sem brilho após bordar com linha de poliéster brilhante: a linha foi esticada além do limite elástico durante a costura; reduza a tensão dos discos tensores.",
      "A linha metálica quebra no segundo ponto: fios metálicos têm limite elástico quase nulo; reduza a velocidade da máquina para 600 PPM e reduza a tensão em 40%."
    ],
    dicaArtrelados: "A regra de ouro da tensão perfeita: a linha de cima deve passar pelos seus dedos com a suavidade de puxar um fio de dental novo! Ela deve oferecer uma resistência firme e constante, mas nunca 'prender' a ponto de você sentir que ela vai estourar na sua mão!",
    voceSabia: "Um único fio de poliéster 40wt de alta tenacidade de qualidade industrial é capaz de sustentar suspenso no ar um peso de mais de 1,2 kg antes de se romper!",
    practicalExercise: "Pegue um pedaço de 30 cm de linha de poliéster e outro de linha de viscose. Puxe as pontas lentamente com as duas mãos até arrebentar: sinta como o poliéster estica bastante antes de quebrar e a viscose se rompe com menos esforço, exigindo tensão mais suave na máquina.",
    quickSummary: "Yield Stress é o limite máximo de tração elástica do fio de bordar antes da deformação plástica irreversível, servindo de base para a regulagem da tensão da máquina.",
    recommendedSettings: {
      speedPPM: "800 a 900 PPM (Poliéster) / 700 a 800 PPM (Viscose)",
      needleType: "75/11 Ponta Fina ou Ponta Bola",
      density: "Tensão de trabalho recomendada: 110 gf a 130 gf (Poliéster 40wt)"
    },
    relatedTerms: [
      "Tenacidade Têxtil (cN/tex)",
      "Curva Tensão-Deformação",
      "Tensão Superior de Linha",
      "Linha de Poliéster Trilobal",
      "Linha de Viscose (Rayon)"
    ],
    tags: [
      "y-026",
      "yieldstress",
      "tensao",
      "ruptura",
      "elasticidade",
      "poliester",
      "viscose",
      "artrelados"
    ],
    bibliographicReferences: [
      "AMERICAN FIBER MANUFACTURERS ASSOCIATION. Stress-Strain Characteristics of Industrial Filament Yarns. Washington, 2021.",
      "MADEIRA THREADS ACADEMY. Thread Tension, Elastic Recovery and Tensile Breakage Protocols. Freiburg, 2022.",
      "ARTRELADOS. Física e Química dos Fios de Bordado: Tensão, Elasticidade e Alta Performance. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-027-y-drive-origin-and-home-sensor-calibration",
    code: "Y-027",
    letter: "Y",
    term: "Y-Drive Origin & Home Sensor Calibration (Calibração do Sensor de Ponto Zero e Curso Máximo do Eixo Y)",
    pronunciation: "uái-dráiv ó-ri-djin end houm sen-sor ca-li-brêi-xion",
    level: "Avançado 🔴",
    category: "Mecânica, Calibração & Manutenção",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'home sensor' (sensor óptico/magnético de referência zero) e 'origin calibration' (calibração de coordenadas absolutas de máquina CNC).",
    summary: "Ajuste e higienização dos sensores ópticos infravermelhos que estabelecem a coordenada zero absoluta (Home 0,0) do eixo Y, prevenindo colisões do bastidor.",
    definition: "O Y-Drive Origin & Home Sensor Calibration (Referenciamento Absoluto de Coordenadas de Máquina, Alinhamento de Fotointerruptores Ópticos e Calibração de Fim de Curso do Eixo Y) é o procedimento técnico de manutenção e regulagem que define a origem mecânica universal ($Y=0$) do pantógrafo. Toda vez que a máquina é ligada, ela executa a rotina de busca de ponto zero (*Homing Routine*): os motores deslocam o pantógrafo até que uma lâmina metálica de obstrução (*flag*) corte o feixe de luz infravermelha do sensor óptico do eixo Y. Se o sensor estiver desalinhado ou sujo com fiapos de linha e poeira têxtil, a máquina calculará o centro de bordado com desvio milimétrico, arriscando bater o bastidor com violência contra a carcaça traseira.",
    technicalDetails: "Sensor fotoelétrico de fenda transmissiva (Photointerrupter IR LED de 940 nm). Repetibilidade de posicionamento de máquina: ±0.02 mm. Tensão lógica de operação: 5V / 24V DC. Distância de disparo de bandeira metálica: 2.0 mm centralizada na fenda óptica.",
    beginnerExplanation: "Sabe quando você liga a máquina e ela dá uma andadinha sozinha para trás até achar o cantinho dela e faz 'pi-pi-pi'? Esse movimento se chama 'busca do ponto zero'! A máquina usa um 'olho mágico' (o sensor óptico do eixo Y) para saber exatamente onde ela está no mundo antes de começar a trabalhar. Se esse olhinho estiver sujo de pó de linha, a máquina fica perdida, acha que o meio do bastidor é em outro lugar e pode bater o bastidor na carcaça! Manter esse sensor limpo e calibrado garante que seu bordado comece sempre no centro exato!",
    howItWorks: [
      "1. Ao ligar a máquina ou pressionar 'Origem/Home', a CPU envia pulsos de recuo lento para o servomotor do eixo Y.",
      "2. O pantógrafo se desloca para a posição limite traseira da mesa.",
      "3. A lâmina metálica presa ao trilho entra na fenda do sensor óptico e bloqueia o feixe infravermelho.",
      "4. O circuito do sensor comuta de estado elétrico (de HIGH para LOW), gerando um sinal de interrupção instantâneo na placa-mãe.",
      "5. A CPU grava essa posição como o ponto $Y=0.00$ absoluto de máquina.",
      "6. A partir desse marco, a máquina calcula com precisão matemática o centro de todos os bastidores cadastrados.",
      "7. O bordado inicia com centralização perfeita e sem nenhum risco de ultrapassagem de curso (*Over-Travel*)."
    ],
    applications: [
      "Manutenção preventiva de rotina e limpeza de sensores após acúmulo de poeira têxtil.",
      "Calibração de centro de bastidores após substituição de placas eletrônicas ou motores.",
      "Eliminação de erros de 'Y-Limit Exceeded' ou 'Pantograph Home Error'.",
      "Garantia de centralização milimétrica em trabalhos de encaixe e continuação de matrizes grandes."
    ],
    characteristics: [
      "Repetibilidade centesimal de posição inicial (precisão de 0.02 mm).",
      "Sensor de estado sólido sem contato físico, garantindo vida útil de mais de 10 anos.",
      "Proteção ativa contra colisões destrutivas do pantógrafo contra a estrutura da máquina."
    ],
    commonErrors: [
      "❌ Deixar poeira e fiapos de linha acumularem na fenda do sensor (a máquina não acha a origem e fica apitando).",
      "❌ Empurrar o pantógrafo com as mãos com a máquina ligada, forçando os motores fora da posição de referência.",
      "❌ Entortar a lâmina metálica de disparo durante limpezas pesadas da mesa traseira."
    ],
    troubleshootingTips: [
      "A máquina exibe erro 'Y-Axis Sensor Error / Cannot Find Home': desligue a máquina, remova a tampa traseira e limpe a fenda do sensor óptico com um cotonete embebido em álcool isopropílico ou jato de ar seco.",
      "O centro do bastidor na tela não bate com o centro real na peça: o sensor do eixo Y foi levemente deslocado; acesse o menu de calibração técnica no painel e ajuste o 'Y-Offset' até casar perfeitamente.",
      "O pantógrafo bateu na carcaça traseira com barulho de estalo: o sensor não disparou; verifique se o cabo do sensor não está desconectado da placa controladora."
    ],
    dicaArtrelados: "A cada 6 meses: retire as tampas de proteção do pantógrafo e dê um jato de ar comprimido nos sensores de ponto zero dos eixos X e Y! Uma simples poeirinha de linha ali dentro pode travar sua máquina e atrasar uma entrega importante!",
    voceSabia: "Antes da invenção dos fotointerruptores ópticos nos anos 1980, as máquinas usavam chaves mecânicas de clique (Microswitches) que desgastavam a mola e perdiam até 2 milímetros de precisão a cada ano!",
    practicalExercise: "Com a máquina ligada e sem bastidor, aperte a função 'Retornar à Origem (Home)'. Observe o deslocamento do pantógrafo até o clique/sinal do sensor óptico e veja a coordenada marcar exatamente X:0.0 e Y:0.0 no painel digital.",
    quickSummary: "Y-Drive Home Sensor Calibration é o ajuste e limpeza dos sensores ópticos que definem o ponto zero absoluto do eixo Y, garantindo centralização e prevenindo batidas de bastidor.",
    recommendedSettings: {
      speedPPM: "Compatível com todas as velocidades",
      needleType: "Universal",
      density: "Tolerância de calibração de ponto zero: ±0.02 mm"
    },
    relatedTerms: [
      "Ponto Zero (Home Position)",
      "Fotointerruptor Óptico",
      "Eixo Y (Pantógrafo)",
      "Limite de Curso (Over-Travel)",
      "Manutenção Preventiva Mecatrônica"
    ],
    tags: [
      "y-027",
      "homesensor",
      "pontozero",
      "eixoy",
      "calibracao",
      "manutencao",
      "sensoroptico",
      "artrelados"
    ],
    bibliographicReferences: [
      "BARUDAN EMBROIDERY MACHINERY. Optical Sensor Alignment and Homing Diagnostics Manual. Ichinomiya, 2021.",
      "TAJIMA TECHNICAL SERVICE DIVISION. Limit Switches, Photo-Interrupters and Zero-Point Offset Setup. Nagoya, 2022.",
      "ARTRELADOS. Guia de Mecatrônica, Sensores e Diagnóstico de Falhas em Máquinas Computadorizadas. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-028-yarn-loft-and-chenille-effect-embroidery",
    code: "Y-028",
    letter: "Y",
    term: "Yarn Loft & Chenille Effect Embroidery (Efeito Chenille e Alto Volume com Linhas de Lã e Meadas)",
    pronunciation: "iárn lóft end xe-níl i-fékt em-broi-de-ri",
    level: "Intermediário 🟡",
    category: "Aplicações & Técnicas Especiais",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'yarn loft' (resiliência volumétrica / densidade aparente e fofura de fios grossos) e do francês 'chenille' (lagarta peluda, aludindo ao fio aveludado e felpudo).",
    summary: "Técnica de matriz com pontos cheios longos e baixa densidade usando fios grossos de lã ou acrílico para criar o clássico efeito felpudo e aveludado estilo colegial (Letterman Jackets).",
    definition: "O Yarn Loft & Chenille Effect Embroidery (Bordado de Alto Volume Téxtil, Imitação de Ponto Chenille / Moss Stitch e Aplicação de Fios Encorpados de Lã e Acrílico / Wool-Blend Loft Stitching) é a adaptação técnica de digitalização e costura que permite reproduzir o toque felpudo, aveludado e tridimensional das jaquetas colegiais clássicas americanas (*Varsity / Letterman Jackets*) utilizando máquinas de bordar convencionais de ponto fixo. Ao invés de usar linhas finas comuns 40wt com alta densidade, a técnica utiliza fios encorpados de lã, acrílico ou meadas de bordar (espessura 12wt ou fios de crochê fino) associados a uma digitalização especial com pontos cheios soltos e cruzados em camadas sobrepostas com densidade aberta (0.80 mm a 1.20 mm). O volume natural das fibras (*loft*) expande-se sobre o tecido, preenchendo todos os espaços com um toque quente, fofo e luxuoso.",
    technicalDetails: "Exige agulha de olho largo e canaleta profunda (Topstitch ou Chenille Needle calibre 100/16 ou 110/18), redução drástica da velocidade de máquina para 500 a 600 PPM e alívio de 50% na tensão superior dos discos para não esmagar a felpa do fio.",
    beginnerExplanation: "Sabe aquelas letras gigantes, fofinhas e aveludadas que a gente vê nas jaquetas de faculdade americanas dos filmes? Aquele efeito macio como um ursinho de pelúcia se chama efeito Chenille! Você pode fazer esse mesmo efeito lindo na sua máquina de bordar comum usando uma linha de lãzinha ou meada mais gordinha com uma agulha de furo largo: a matriz é programada com pontos bem abertos e soltinhos, e quando a máquina borda, os pelinhos da lã se abrem e criam uma textura fofa e maravilhosa!",
    howItWorks: [
      "1. O programador digitaliza a matriz com pontos cheios largos e espaçamento bem aberto (densidade de 0.90 mm a 1.10 mm).",
      "2. Coloca-se uma agulha especial de calibre grosso e olho largo (Topstitch 100/16) na máquina.",
      "3. Passa-se o fio encorpado de lã ou acrílico pelos guias com tensão superior super leve e soltinha.",
      "4. Enquadra-se o tecido pesado (como moletom felpado ou feltro de lã) com entretela de corte grosso (Cutaway 80 g/m²).",
      "5. Reduz-se a velocidade da máquina para 550 PPM.",
      "6. A máquina executa os pontos: o fio grosso assenta-se sobre o tecido sem ser esmagado.",
      "7. As fibras volumosas da lã se expandem criando uma superfície aveludada, quente e com relevo espetacular."
    ],
    applications: [
      "Letras volumosas e emblemas em jaquetas de formatura, moletons colegiais e casacos de inverno.",
      "Bordados decorativos rústicos em almofadas de veludo, mantas de sofá e tapeçarias.",
      "Detalhes aveludados em roupinhas de bebê (como o corpinho peludo de ursinhos e ovelhas).",
      "Emblemas vintage e peças de moda jovem estilo retrô esportivo."
    ],
    characteristics: [
      "Toque ultra-aveludado, fofo e acolchoado com textura de pelúcia.",
      "Economia massiva de pontos (uma letra que levaria 8.000 pontos finos é feita com apenas 2.500 pontos de lã).",
      "Visual nobre e exclusivo que agrega altíssimo valor comercial às peças de inverno."
    ],
    commonErrors: [
      "❌ Tentar passar fio grosso de lã em agulha fina comum 75/11 (a linha desfia, quebra e entorta a barra da agulha).",
      "❌ Usar matriz digitalizada para linha normal com densidade de 0.40 mm (o bordado vira um bloco duro e intransponível).",
      "❌ Bordar em velocidade alta (> 750 PPM), fazendo o fio grosso queimar e arrebentar por atrito."
    ],
    troubleshootingTips: [
      "O fio de lã está arrebentando e desfiando antes de chegar no tecido: troque a agulha por uma agulha Topstitch 100/16 ou Metallic 100/16 que possui o olho 3 vezes maior.",
      "O bordado ficou parecendo uma pedra dura: aumente o espaçamento de pontos no software de 0.40 mm para 0.95 mm para dar espaço para a lã se expandir.",
      "A linha da bobina está subindo para cima do bordado: aperte um pouco o parafuso da caixa de bobina e solte quase totalmente a tensão da linha superior."
    ],
    dicaArtrelados: "Para fazer moletons de inverno que vendem como água: compre fios de lã especiais para bordado (como a linha Burmilana da Madeira) e use feltro como aplique com efeito Chenille! Suas peças vão parecer importadas das melhores grifes dos Estados Unidos!",
    voceSabia: "O bordado chenille clássico foi inventado no século XVIII na França e era feito com agulhas de gancho rotativas que puxavam laçadas contínuas de lã pelo avesso do tecido sem usar linha de bobina!",
    practicalExercise: "Digitalize a letra 'B' com 6 cm de altura com densidade de 1.0 mm. Coloque uma agulha 100/16 e passe um fio de lã fina de bordar. Borde sobre um pedaço de moletom e sinta com os dedos o toque fofinho e aveludado incomparável.",
    quickSummary: "Yarn Loft & Chenille Effect é a técnica que utiliza fios grossos de lã ou acrílico com matrizes de baixa densidade para criar texturas felpudas e aveludadas estilo colegial.",
    recommendedSettings: {
      speedPPM: "500 a 600 PPM",
      needleType: "100/16 ou 110/18 Topstitch de Olho Largo",
      density: "Densidade aberta especial: 0.85 mm a 1.20 mm"
    },
    relatedTerms: [
      "Efeito Chenille",
      "Linha de Lã (Wool Thread)",
      "Agulha Topstitch",
      "Jaqueta Colegial (Varsity Jacket)",
      "Ponto Fofo (Loft Stitch)"
    ],
    tags: [
      "y-028",
      "chenille",
      "yarnloft",
      "la",
      "moletom",
      "relevo",
      "veludo",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA GARNE. Burmilana Wool & Acrylic Embroidery Thread Application Guide. Freiburg, 2022.",
      "EMBROIDERY MAGAZINE. Modern Chenille Techniques & Heavy Yarn Handling. Londres, 2021.",
      "ARTRELADOS. Técnicas Especiais: Efeito Chenille, Fios Especiais de Lã e Alto Relevo em Roupas de Inverno. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-029-yearly-preventive-maintenance-protocol",
    code: "Y-029",
    letter: "Y",
    term: "Yearly Preventive Maintenance Protocol for Embroidery Machines (Protocolo Anual de Revisão Mecânica e Eletrônica)",
    pronunciation: "iér-li pri-vén-tiv mêin-te-nans pro-to-col for em-broi-de-ri ma-xins",
    level: "Avançado 🔴",
    category: "Mecânica, Calibração & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Dos manuais industriais de engenharia de confiabilidade (Total Productive Maintenance - TPM) e protocolos de garantia de fabricantes de máquinas CNC.",
    summary: "Checklist técnico completo de 25 passos executado anualmente para engraxar caixas de engrenagens, inspecionar folgas de lançadeira e testar fontes de alimentação.",
    definition: "O Yearly Preventive Maintenance Protocol for Embroidery Machines (Protocolo Anual de Manutenção Preventiva Classe A, Revisão Geral Eletromecânica e Homologação de Confiabilidade Operacional) é o procedimento abrangente e exaustivo realizado a cada 12 meses ou a cada 3.000 horas de operação da máquina de bordar. Enquanto a manutenção diária foca na limpeza superficial e lubrificação da lançadeira, a revisão anual envolve a desmontagem de tampas estruturais, lavagem química de graxas antigas oxidadas, reaperto de parafusos estruturais com torquímetro, calibração do sincronismo da lançadeira (grau de captura em 198° a 202°), teste de ripple em fontes de alimentação DC e atualização de firmware das placas controladoras.",
    technicalDetails: "Substituição preventiva de buchas sinterizadas de bronze, verificação de desgaste nas engrenagens cônicas helicoidais de dentes espoidais, lubrificação com graxa de lítio grau NLGI 2 com dissulfeto de molibdênio ($MoS_2$) e teste de isolamento elétrico de aterramento (< 5 Ohms).",
    beginnerExplanation: "Assim como a gente leva o carro para a revisão geral da concessionária uma vez por ano para trocar óleo, filtros e olhar os freios, a sua máquina de bordar também merece um 'dia de spa' completo uma vez por ano! É o momento em que o técnico abre as tampas protegidas, limpa as graxas velhas, engraxa as engrenagens de ferro com graxa nova, confere se todas as agulhas estão retinhas e deixa a máquina regulada, silenciosa e perfeita para trabalhar mais um ano inteirinho sem quebrar nem dar dor de cabeça!",
    howItWorks: [
      "1. O técnico desliga a máquina e desconecta da rede elétrica.",
      "2. Remove todas as tampas protetoras frontais, laterais e da base inferior da mesa.",
      "3. Aplica ar comprimido desumidificado para remover toda a poeira têxtil acumulada nos circuitos.",
      "4. Remove a graxa velha ressecada das caixas de engrenagem e aplica graxa nova de lítio com bissulfeto de molibdênio.",
      "5. Verifica o ponto de sincronismo entre a ponta da lançadeira e a descida da agulha com calibre de folga (0.05 mm).",
      "6. Inspeciona a lâmina fixa e móvel do sistema de corte de linha e afia ou substitui as facas.",
      "7. Mede as tensões elétricas da fonte (+5V, +24V, +36V) com multímetro digital calibrado.",
      "8. Remonta as tampas, liga a máquina e executa a matriz de teste padrão de 10.000 pontos em velocidade máxima."
    ],
    applications: [
      "Protocolo obrigatório para manter a garantia de fábrica de máquinas novas.",
      "Prevenção de quebras catastróficas em períodos de pico de encomendas (como volta às aulas e Natal).",
      "Extensão da vida útil da máquina de bordar por mais de 15 a 20 anos em perfeito estado.",
      "Garantia de silêncio acústico, precisão milimétrica e ausência de manchas de óleo nas peças."
    ],
    characteristics: [
      "Checklist estruturado em 25 pontos críticos mecânicos e eletrônicos.",
      "Aumenta a eficiência operacional e reduz paradas não programadas em até 95%.",
      "Preserva o valor de revenda do equipamento no mercado profissional."
    ],
    commonErrors: [
      "❌ Esperar a máquina quebrar ou travar de vez para chamar a assistência técnica.",
      "❌ Usar graxa automotiva comum ou graxa de rolamento pesado que endurece e pesa o motor.",
      "❌ Aplicar óleo líquido comum nas placas eletrônicas e sensores ópticos durante a limpeza."
    ],
    troubleshootingTips: [
      "A máquina está fazendo um ruído metálico áspero no bloco inferior: as engrenagens cônicas da lançadeira estão sem graxa; desmonte a tampa da base e aplique graxa de lítio NLGI 2.",
      "O corte de linha está mastigando a linha inferior ao invés de cortar: as facas atingiram o limite de vida útil anual; substitua o par de lâminas móvel e fixa do trimmer.",
      "A máquina reinicia sozinha quando atinge velocidade alta: a fonte de alimentação está com capacitores estufados; solicite a revisão dos módulos eletrônicos de potência."
    ],
    dicaArtrelados: "Agende a revisão anual da sua máquina sempre em um mês mais tranquilo (como janeiro ou fevereiro)! Fazer a revisão com calma garante que sua máquina vai aguentar o tranco pesado de todas as datas comemorativas do ano com zero defeitos!",
    voceSabia: "Máquinas industriais de marcas consagradas (como Tajima e Barudan) que seguem o protocolo anual de manutenção preventiva ultrapassam facilmente a marca de 500 MILHÕES de pontos bordados em 20 anos de uso contínuo!",
    practicalExercise: "Pegue o manual da sua máquina e anote na primeira página a data da última revisão geral. Se já faz mais de 12 meses, faça um checklist visual: limpe a caixa de bobina, cheque as correias e agende a visita do seu técnico de confiança.",
    quickSummary: "Yearly Preventive Maintenance Protocol é o checklist anual de revisão profunda que renova graxas, afia facas, calibra lançadeiras e testa fontes, garantindo 20 anos de vida útil à máquina.",
    recommendedSettings: {
      speedPPM: "Compatível com todas as velocidades",
      needleType: "Universal",
      density: "Periodicidade recomendada: A cada 12 meses ou 3.000 horas de operação"
    },
    relatedTerms: [
      "Manutenção Preventiva (TPM)",
      "Sincronismo de Lançadeira",
      "Graxa de Lítio NLGI 2",
      "Faca de Corte (Trimmer Blade)",
      "Fonte de Alimentação DC"
    ],
    tags: [
      "y-029",
      "revisaoanual",
      "manutencao",
      "mecanica",
      "lubrificacao",
      "longevidade",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE MANUAL. Annual Preventive Maintenance & Overhaul Standards. Nagoya, 2022.",
      "BARUDAN EMBROIDERY MACHINERY. 3000-Hour Factory Inspection & Mechanical Re-Greasing Protocol. Ichinomiya, 2021.",
      "ARTRELADOS. Manual Completo de Manutenção Preventiva, Lubrificação e Cuidados Mecânicos para Ateliês. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART16: Verbete[] = [
  {
    "id": "o-095-otimizacao-de-troca-de-linha-e-agrupamento-de-cores-na-matriz",
    "code": "O-095",
    "term": "Otimização de Troca de Linha e Agrupamento de Cores na Matriz (Color Stop Grouping)",
    "letter": "O",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim color (cor) e do inglês stop grouping (agrupamento de paradas de troca de carretel).",
    "summary": "Estratégia de digitalização e reordenação cronológica de objetos vetoriais para consolidar todas as áreas da mesma cor em uma única sequência de costura, minimizando trocas manuais de carretel em máquinas monocabeça.",
    "definition": "Otimização de Troca de Linha e Agrupamento de Cores na Matriz (Chromatic Layer Consolidation, Color Sort Algorithm & Mononeedle Workflow Optimization) é a organização sistemática da ordem de execução de uma matriz de bordado com o objetivo de reduzir o número total de paradas de troca de linha (*Color Change / Stop Commands*). Em matrizes criadas sem planejamento, o software pode programar o bordado de um detalhe amarelo, passar para o azul, voltar para o amarelo e depois novamente para o azul; em máquinas domésticas ou comerciais de 1 agulha (monocabeça), isso obriga o operador a despassar e repassar a linha 10 vezes. A aplicação do algoritmo de 'Agrupamento e Ordenação de Cores' (*Color Sort*) funde os elementos da mesma paleta em blocos contínuos sem comprometer a sobreposição lógica dos objetos.",
    "technicalDetails": "Redução média de paradas de cor: De 12-15 paradas para 3-5 paradas por matriz. Economia média de tempo operacional em máquinas de 1 agulha: 10 a 20 minutos por peça bordada. Verificação de integridade geométrica: O algoritmo respeita a hierarquia visual (o fundo é sempre bordado antes dos contornos superiores).",
    "construction": [
      "Lista completa de paleta de cores (RGB / Códigos Pantone e marcas de linha) da matriz",
      "Grafo de dependência de camadas para evitar que um detalhe superior seja bordado por baixo do fundo",
      "Comando automático 'Color Sort' / 'Reordenar Cores' acionado no software de bordado",
      "Simulador em tela cheia com visualização camada por camada para conferência de segurança",
      "Ficha técnica de produção impressa com a ordem exata de cores para o operador"
    ],
    "howItWorks": [
      "1. Ao finalizar o desenho de um personagem ou brasão colorido, verifica-se a lista de cores da matriz.",
      "2. Nota-se que a cor amarela aparece na etapa 1, na etapa 4 e na etapa 8.",
      "3. No software, seleciona-se a ferramenta 'Agrupar Cores / Color Sort'.",
      "4. O programa analisa se as partes amarelas podem ser bordadas juntas sem ficarem cobertas por outra cor.",
      "5. O software reordena a sequência: todas as áreas amarelas são unificadas na primeira etapa.",
      "6. A matriz é salva no pendrive: o número de trocas de carretel cai de 10 para apenas 4 trocas.",
      "7. O operador borda a peça com muito mais rapidez e tranquilidade, sem precisar ficar trocando o carretel a cada 2 minutos."
    ],
    "mainTypes": [
      "Agrupamento Automático com Verificação de Camadas (Para desenhos complexos de personagens infantis)",
      "Agrupamento Manual Seletivo de Detalhes (Para logotipos corporativos com textos e ícones na mesma cor)",
      "Consolidação de Cores para Bastidores Múltiplos (Para bordar 4 peças pequenas no mesmo bastidor com uma só troca de cor)"
    ],
    "characteristics": [
      "Aumento drástico de produtividade para donos de máquinas de 1 agulha",
      "Menor fadiga do operador e menor risco de errar a cor da linha na máquina",
      "Processo rápido de 1 clique no computador antes de enviar o arquivo para a máquina",
      "Bordados mais fluidos e com menor número de arremates e nós de início"
    ],
    "limitations": [
      "Nunca forçar o agrupamento de cores se um contorno superior tiver que ficar por cima de uma camada de outra cor",
      "Sempre conferir no simulador 3D do computador antes de bordar na peça definitiva",
      "Em máquinas industriais de 15 agulhas, o agrupamento de cores é menos crítico (a máquina troca de agulha sozinha em 2 segundos)"
    ],
    "numberingSystem": [
      "Redução Típica de Paradas: 50% a 70%",
      "Tempo Poupado por Troca Evitada: ~1 a 2 minutos",
      "Número Ideal de Cores: 3 a 6 cores por matriz"
    ],
    "advantages": [
      "✔ O maior alívio para quem tem máquina doméstica de 1 agulha: chega de trocar linha a cada 2 minutos!",
      "✔ Economiza muito tempo no seu dia, permitindo entregar as encomendas muito mais rápido",
      "✔ Evita que você se confunda e coloque a cor errada no meio do desenho"
    ],
    "commonErrors": [
      "❌ Borda uma matriz baixada da internet que manda trocar de linha 15 vezes para um desenho simples de 3 cores",
      "❌ Agrupar as cores de forma forçada e fazer o contorno preto ser bordado ANTES do preenchimento colorido",
      "❌ Não olhar a ficha de cores antes de começar o bordado"
    ],
    "voceSabia": "A primeira máquina de bordar computadorizada monocabeça doméstica foi lançada no início dos anos 1990; na época, as bordadeiras tinham que anotar a sequência de cores à mão em um caderno e cronometrar as trocas no relógio de pulso!",
    "curiosidadeTecnica": "Em uma matriz com 8 paradas desnecessárias de cor em uma máquina de 1 agulha, o operador gasta em média 12 minutos apenas trocando carretéis e passando a linha; ao aplicar o Color Sort, esse tempo cai para menos de 3 minutos.",
    "dicaArtrelados": "Sempre que você baixar ou comprar uma matriz da internet, abra ela no seu programa de bordado antes de colocar no pendrive e aperte o botão 'Agrupar Cores' (Color Sort): o programa junta todas as partes da mesma cor para bordar de uma vez só. É uma mágica simples que economiza meia hora do seu dia em cada bordado!",
    "comparisonTable": {
      "headers": [
        "Sequência de Cores",
        "Paradas de Linha",
        "Tempo de Troca (1 Agulha)",
        "Risco de Erro de Operador"
      ],
      "rows": [
        [
          "Matriz Otimizada com Color Sort",
          "4 paradas (1 por cor)",
          "3 minutos",
          "Baixíssimo"
        ],
        [
          "Matriz Desordenada (Cores Espalhadas)",
          "12 a 15 paradas",
          "15 a 18 minutos",
          "Altíssimo (trocas confusas)"
        ],
        [
          "Matriz em Máquina Multicabeça (15 Agulhas)",
          "Automático por solenoide",
          "20 segundos",
          "Zero"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "Padrão",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Padrão",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Bordados em máquinas domésticas e comerciais de 1 agulha (Brother, Janome, Bernina, Singer)",
      "Bordados de personagens infantis multicoloridos em fraldas, toalhas e enxovais de bebê",
      "Produção de múltiplos chaveiros ou tags no mesmo bastidor grande",
      "Logotipos comerciais com várias cores aplicados em uniformes e jalecos"
    ],
    "troubleshootingTips": [
      "Abra a visualização de 'Lista de Objetos' no software para conferir visualmente a ordem de cada bloco de cor",
      "Se uma cor de contorno for puxada para o início do bordado por engano, arraste-a manualmente para o final da lista",
      "Mantenha os carretéis de linha organizados na bancada na ordem exata em que serão usados"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Sequenciamento de Cores",
      "Otimização de Saltos e Trajetória de Deslocamento do Pantógrafo",
      "Corte de Linha Automático (Trimmer)",
      "Ficha Técnica de Bordado (Worksheet)"
    ],
    "tags": [
      "o-095",
      "otimizacao de troca de linha",
      "color sort",
      "agrupamento de cores",
      "maquina de 1 agulha",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Color Sorting Algorithms & Mononeedle Workflow Optimization. Sydney, 2021.",
      "PARRISH, Gail. Chromatic Sequencing Optimization, Stop-Code Management and Mononeedle Ergonomics in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra um desenho com várias flores coloridas no seu programa. Veja na lista quantas trocas de cor ele tem. Clique na ferramenta 'Classificar Cores' (Color Sort) e observe a lista encolher na hora: agora você tem a mesma matriz pronta para bordar muito mais rápido!",
    "quickSummary": "O truque no programa para juntar todas as partes da mesma cor e não precisar ficar trocando carretel toda hora.",
    "beginnerExplanation": "Se um desenho tem partes azuis, amarelas e vermelhas espalhadas, o programa inteligente junta todas as partes azuis para a máquina bordar de uma vez só, depois todas as amarelas e por fim as vermelhas. Assim, você só troca o carretel 3 vezes em vez de trocar 10 vezes, economizando muito tempo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-096-otoman-e-tecidos-canelados-pesados-no-bordado-computadorizado",
    "code": "O-096",
    "term": "Otoman e Tecidos Canelados Pesados no Bordado Computadorizado (Ottoman Ribbed Fabric Protocol)",
    "letter": "O",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês ottomane (tecido canelado nobre de seda e lã introduzido na corte francesa vindo do Império Otomano).",
    "summary": "Protocolo técnico de estabilização, underlay em grade e compensação de relevo para bordados em tecidos nobres com cordões transversais salientes (Otoman, Piquet pesado e Canelados de tapeçaria).",
    "definition": "Otoman e Tecidos Canelados Pesados no Bordado Computadorizado (Ottoman Cord Weave Substrate, Transverse Rib Stabilization & Underlay Protocol) é o conjunto de métodos operacionais para bordar com perfeição sobre tecidos planos ou de malharia estruturada caracterizados por fortes nervuras ou cordões transversais em relevo (costelas/canelados rígidos). O tecido Otoman tradicional possui fios de trama muito mais grossos que o urdume, criando saliências horizontais pronunciadas; se bordado diretamente com satim ou letras finas, os pontos 'afundam' nos vales entre os cordões, gerando bordas serrilhadas, letras deformadas e quebra de agulha pelo impacto nos ressaltos. Exige underlay de grade dupla cruzada (Full Grid), filme solúvel superior e agulha 80/12 SES.",
    "technicalDetails": "Gramatura média do Otoman: 220 a 380 g/m². Relevo do cordão: 0,5 mm a 1,2 mm de desnível transversal. Agulha recomendada: 80/12 SES ponta arredondada média (penetra suavemente ao lado dos cordões grossos). Estrutura de underlay mandatória: Grade cruzada dupla (Double Grid Underlay) a 45° e 135° com densidade de 1,2 mm. Estabilização: Entretela de Recorte pesada 80 g/m² no verso + Filme Hidrossolúvel de PVA 40 micras no topo.",
    "construction": [
      "Tecido Otoman de poliéster/algodão com nervuras transversais salientes",
      "Entretela de recorte pesada de 80 g/m² no avesso para sustentação plana",
      "Filme hidrossolúvel transparente no direito para nivelar a superfície dos cordões",
      "Camada de underlay em grade cruzada densa criando uma ponte rígida sobre as nervuras",
      "Compensação de repuxo reforçada (0,45 mm) nas colunas de ponto cheio"
    ],
    "howItWorks": [
      "1. Posiciona-se o tecido Otoman no bastidor com a entretela de recorte pesada de 80 g/m² por baixo.",
      "2. Coloca-se uma folha de filme hidrossolúvel transparente por cima do tecido para aplainar as nervuras.",
      "3. O bastidor é fechado com pressão firme para acomodar a espessura do tecido sem esmagar o canelado.",
      "4. A máquina inicia o bordado executando a grade cruzada dupla de underlay (Full Grid).",
      "5. A grade cria uma 'laje' sólida de fios que nivela o topo dos cordões e cobre os vales profundos.",
      "6. A camada de acabamento (letras ou brasão) é bordada por cima dessa base nivelada.",
      "7. Retira-se a peça, dissolve-se o filme solúvel com água morna: o bordado fica 100% liso, nítido e sem nenhum afundamento nos canelados."
    ],
    "mainTypes": [
      "Otoman Têxtil Fino para Moda Festa e Blazers (Para vestuário elegante e ternos femininos)",
      "Otoman Pesado para Decoração e Almofadas (Para estofados, cortinas e almofadas de luxo)",
      "Malha Canelada Pesada Tipo Otoman (Para suéteres de inverno, casacos e golas grossas)"
    ],
    "characteristics": [
      "Superfície bordada perfeitamente plana mesmo sobre relevos canelados profundos",
      "Eliminação absoluta de bordas serrilhadas e letras 'mordidas' pelas costelas do tecido",
      "Alta sofisticação visual combinando o brilho dos pontos com a textura nobre do tecido",
      "Excelente durabilidade do bordado que não deforma após lavagens e uso contínuo"
    ],
    "limitations": [
      "Não bordar letras menores que 5 mm em tecidos canelados grossos (elas perdem definição)",
      "Nunca utilizar apenas entretela rasgável simples (o tecido canelado enruga a matriz)",
      "Evitar agulhas muito finas (como 65/9), que podem entortar ao bater nos cordões duros da trama"
    ],
    "numberingSystem": [
      "Gramatura do Otoman: ~280 g/m²",
      "Tamanho de Agulha: 80/12 SES",
      "Densidade do Underlay em Grade: 1,2 mm"
    ],
    "advantages": [
      "✔ Permite bordar com perfeição em tecidos grossos e nobres de alta decoração e alfaiataria",
      "✔ Garante que logotipos e brasões fiquem retos e legíveis em tecidos canelados difíceis",
      "✔ Agrega um valor altíssimo a peças de decoração e moda inverno"
    ],
    "commonErrors": [
      "❌ Borda sem filme plástico no topo, fazendo a linha afundar dentro das valas do tecido",
      "❌ Usar underlay simples de linha reta que escorrega para dentro dos vãos entre os canelados",
      "❌ Usar agulha ponta afiada cortante que corta os fios grossos do cordão do tecido"
    ],
    "voceSabia": "O tecido Otoman era tão valorizado no Império Turco-Otomano que apenas os sultões e altos dignitários de Istambul tinham permissão legal para usar túnicas e mantos reais confeccionados com esse tecido canelado de seda pura e fios de ouro!",
    "curiosidadeTecnica": "O desnível topográfico entre o cume e o vale de uma nervura de tecido Otoman pesado pode chegar a 1,2 mm; sem um underlay de grade cruzada, a perda de tensão angular da linha superior gera uma variação de até 30% na largura aparente da coluna de satim.",
    "dicaArtrelados": "Para bordar tecidos canelados e grossos como o Otoman: faça um sanduíche com entretela de recorte grossa embaixo e um plastiquinho hidrossolúvel por cima. Na matriz, programe uma grade cruzada de pontos de suporte antes das letras. O bordado fica em cima de uma base firme e retinha, sem afundar nenhum pontinho!",
    "comparisonTable": {
      "headers": [
        "Estratégia de Bordado",
        "Nivelamento das Letras",
        "Comportamento nos Canelados",
        "Resultado Visual"
      ],
      "rows": [
        [
          "Grade Cruzada + Filme Solúvel + Recorte",
          "100% plano e nítido",
          "Borda por cima sem afundar",
          "Impecável e de alto luxo"
        ],
        [
          "Underlay Simples sem Filme",
          "Irregular / Serrilhado",
          "Afunda nas valas das nervuras",
          "Letras tortas e ilegíveis"
        ],
        [
          "Sem Underlay e com Entretela Rasgável",
          "Péssimo",
          "Pontos engolidos pelo tecido",
          "Bordado totalmente deformado"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "80/12 SES de ponta arredondada média",
      "stabilizer": "Entretela de Recorte 80 g/m² + Filme Hidrossolúvel de PVA no topo",
      "threadTension": "Superior: 115 gf / Bobina: 24 gf",
      "density": "0.40 mm com Grade Cruzada de underlay"
    },
    "applications": [
      "Blazers elegantes, paletós e vestidos de gala em tecido Otoman estruturado",
      "Almofadas de luxo, cortinas e estofamentos de alta tapeçaria decorativa",
      "Suéteres de lã canelada grossa, cardigãs e casacos de inverno",
      "Bolsas estruturadas e nécessaires em tecidos texturizados nobres"
    ],
    "troubleshootingTips": [
      "Se as letras continuarem serrilhadas, engorde a espessura das colunas no software em 0,3 mm",
      "Utilize água morna com um borrifador para dissolver rapidamente os restos de filme solúvel",
      "Reduza a velocidade da máquina para 700 PPM para evitar que a agulha desvie nos cordões"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Underlay / Pontos de Suporte",
      "Entretela de Recorte (Cut-Away)",
      "Entretela Hidrossolúvel (Water-Soluble)",
      "Compensação de Repuxo"
    ],
    "tags": [
      "o-096",
      "otoman",
      "tecidos canelados",
      "nervuras",
      "alta decoracao",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TEXTILE INSTITUTE Handbook: Ribbed & Corded Weaves, Ottoman Fabrics & Heavy Substrates. Manchester, 2021.",
      "PARRISH, Gail. Topographical Substrate Dynamics: Ottoman Rib Stabilization, Double Grid Underlays and Needle Deflection. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tecido canelado ou piquet bem grosso. Borde uma palavra com underlay simples e sem plastiquinho. Depois borde a mesma palavra com grade cruzada e filme solúvel por cima. Coloque as duas lado a lado: veja como a segunda palavra fica lisa e legível como se estivesse flutuando sobre uma ponte!",
    "quickSummary": "O método para bordar em tecidos grossos com canaletas e listras salientes sem deixar a linha afundar.",
    "beginnerExplanation": "O tecido Otoman tem listras em relevo durinhas que parecem costelas. Se você bordar direto nele, as letras afundam nos vãos e ficam todas tortas. Usando um plastiquinho por cima e uma gradezinha de suporte por baixo, a máquina cria uma base firme para as letras ficarem lisinhas e perfeitas!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-097-offset-do-sensor-optico-de-ruptura-de-linha",
    "code": "O-097",
    "term": "Offset do Sensor Óptico de Ruptura de Linha (Optical Thread Break Sensor Sensitivity)",
    "letter": "O",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego optikos (visão da luz) e do latim sensus (percepção automática de movimento por fotodiodo).",
    "summary": "Calibração da sensibilidade de pulso eletrônico, limpeza dos emissores infravermelhos e roletes picotados dos sensores ópticos de quebra de linha para eliminar paradas falsas da máquina de bordar.",
    "definition": "Offset do Sensor Óptico de Ruptura de Linha (Optical Thread Break Detection Sensitivity, Infrared Encoder Pulse Calibration & False Alarm Elimination) é a regulagem eletrônica e higienização dos módulos sensores posicionados no cabeçote superior da máquina que monitoram o movimento contínuo da linha durante a costura. O sistema opera através de um micro-rolete ou palheta giratória preta e branca (ou perfurada) que gira conforme a linha é puxada, interrompendo um feixe de luz infravermelha emitido por um fotodiodo. O acúmulo de fiapos e poeira bloqueia a lente do sensor ou a folga excessiva do fio faz o rolete girar em falso, gerando alarmes falsos de quebra de linha (*False Thread Break Alarms*) a cada 10 pontos ou, inversamente, deixando a máquina costurar sem linha por centenas de pontos sem parar.",
    "technicalDetails": "Tecnologia do sensor: Fototransistor infravermelho de 940 nm acoplado a codificador óptico de quadratura. Parâmetro de contagem de pulsos no painel: 3 a 7 pontos sem pulso antes do disparo do alarme de parada. Tensão de sinal TTL: 0V (bloqueado) / 5V (feixe livre). Frequência de limpeza recomendada: Quinzenal com ar comprimido leve ou pincel antiestático.",
    "construction": [
      "Módulo sensor compacto com carcaça blindada anti-interferência óptica",
      "Emissor de LED infravermelho e receptor fototransistor de alta velocidade",
      "Roletinho de alumínio polido ou palheta giratória ranhurada de baixo atrito",
      "Mola de retorno ou pino de guia para garantir contato mecânico firme do fio",
      "Placa controladora dedicada com ajuste de ganho e sensibilidade no painel"
    ],
    "howItWorks": [
      "1. A linha passa dando uma volta de 360° ao redor do roletinho do sensor óptico antes de ir para o estica-fio.",
      "2. Conforme a agulha penetra e forma o ponto, a linha é tracionada, fazendo o rolete girar rapidamente.",
      "3. O rolete corta o feixe de luz infravermelha, gerando dezenas de pulsos elétricos por segundo para o computador da máquina.",
      "4. Se a linha arrebentar ou acabar, o rolete para de girar instantaneamente.",
      "5. A CPU detecta que passaram 4 pontos sem nenhum pulso do sensor e aciona o freio do motor em menos de 0,1 segundo.",
      "6. A máquina para e acende a luz vermelha na cabeça exata onde a linha quebrou.",
      "7. Quando o sensor acumula fiapos de tecido, o técnico sopra ar limpo na fenda óptica e ajusta a sensibilidade no painel de 3 para 5 pontos, eliminando 100% dos falsos alarmes."
    ],
    "mainTypes": [
      "Sensores de Roletes Giratórios Codificados (Padrão industrial moderno em máquinas Tajima, Barudan e chinesas)",
      "Sensores de Mola de Contato e Chave Elétrica (Sistemas mecânicos tradicionais em máquinas comerciais)",
      "Sensores Piezoelétricos Ultrassônicos de Vibração (Detectam a micro-vibração acústica do fio sem peças móveis)"
    ],
    "characteristics": [
      "Parada quase instantânea da máquina quando a linha arrebenta, evitando perder o ponto no desenho",
      "Eliminação da necessidade do operador ficar vigiando a máquina o tempo todo",
      "Facilidade total de calibração do número de pontos de tolerância direto na tela do painel",
      "Compatibilidade com todos os tipos de fios: poliéster, viscose, algodão e metálicos"
    ],
    "limitations": [
      "Se a linha não der uma volta completa no rolete, ela escorrega e o sensor dá alarme falso",
      "Poeira e cera acumuladas na lente infravermelha 'cegam' o sensor",
      "Linhas ultrafinas (como 60wt) exigem maior sensibilidade configurada no painel"
    ],
    "numberingSystem": [
      "Tolerância de Parada Recomendada: 4 a 6 pontos",
      "Comprimento de Onda Infravermelho: 940 nm",
      "Tensão Operacional: 5V DC"
    ],
    "advantages": [
      "✔ Acaba com a raiva da máquina parar a toda hora apitando sem a linha ter quebrado de verdade",
      "✔ Impede que a máquina continue bordando 'no vazio' por centenas de pontos quando a linha acaba",
      "✔ Deixa sua produção muito mais ágil e sem paradas irritantes"
    ],
    "commonErrors": [
      "❌ Passar a linha reta pelo sensor sem dar a volta completa de 360° no rolete de medição",
      "❌ Desativar o sensor no painel por preguiça de limpar a poeira, deixando a máquina sem proteção",
      "❌ Jogar óleo lubrificante dentro da lente do sensor óptico, sujando a placa eletrônica"
    ],
    "voceSabia": "Os primeiros sensores de quebra de linha eram simples arames de metal que encostavam em uma chapa de cobre para fechar um circuito elétrico; os sensores ópticos infravermelhos modernos usam a mesma tecnologia de medição de velocidade que os mouses de computador utilizam para ler a mesa!",
    "curiosidadeTecnica": "O tempo de resposta de um fototransistor infravermelho é de apenas 15 microssegundos; a máquina consegue detectar a ausência de movimento do fio e travar o motor principal a 1.000 PPM em menos de 180 graus de rotação do eixo.",
    "dicaArtrelados": "Se a sua máquina começou a apitar e parar dizendo 'linha quebrada', mas a linha está inteira na agulha: passe a linha dando uma volta inteira ao redor do roletinho do sensor lá no alto e dê um sopro de ar limpo na fenda onde fica a luzinha. Na maioria das vezes é só um fiapo de poeira bloqueando o sensor!",
    "comparisonTable": {
      "headers": [
        "Estado do Sensor",
        "Leitura de Pulsos",
        "Comportamento da Máquina",
        "Ação Necessária"
      ],
      "rows": [
        [
          "Limpo e Linha Bem Enrolada",
          "Pulsos constantes e nítidos",
          "Borda contínua / Para só se quebrar",
          "Nenhuma (operação perfeita)"
        ],
        [
          "Sujo com Fiapos / Poeira",
          "Feixe infravermelho bloqueado",
          "Paradas falsas a cada 10-20 pontos",
          "Limpeza com ar e pincel macio"
        ],
        [
          "Linha Passada Reta sem Volta",
          "Roletinho não gira (escorrega)",
          "Alarme de linha quebrada constante",
          "Dar volta de 360° no rolete"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "Padrão",
      "stabilizer": "N/A (Automação e sensores)",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Operação diária em máquinas industriais multicabeças de 4 a 24 cabeças",
      "Bordados em máquinas monocabeça para trabalho autônomo sem supervisão contínua",
      "Monitoramento de fios metálicos e linhas delicadas sujeitas a arrebentamentos",
      "Calibração preventiva durante manutenções periódicas de ateliê"
    ],
    "troubleshootingTips": [
      "No painel da máquina, acesse o menu de 'Sensores' para testar se os pulsos sobem quando você puxa o fio com a mão",
      "Se uma cabeça específica sempre der alarme falso, aumente o parâmetro 'Thread Break Sensitivity' de 3 para 6 pontos",
      "Nunca use produtos químicos corrosivos ou álcool com solventes sobre as lentes plásticas dos sensores"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Manutenção Preventiva",
      "Nivelamento de Tensão de Linha",
      "Linha de Bordar 40wt",
      "Velocidade de Bordado (PPM)"
    ],
    "tags": [
      "o-097",
      "sensor optico",
      "quebra de linha",
      "alarme falso",
      "sensibilidade de sensor",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA / BARUDAN Electronic Control & Optical Sensor Calibration Manual. Nagoya, 2021.",
      "PARRISH, Gail. Optoelectronic Sensing, Thread Motion Dynamics and False Break Detection in Automated Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Puxe a linha da sua máquina com a mão bem devagarzinho observando o roletinho do sensor lá no alto: veja como ele roda suavemente conforme você puxa. Entender como esse rolete gira ajuda você a passar a linha certinho e nunca mais sofrer com alarmes falsos!",
    "quickSummary": "O sensor inteligente que avisa quando a linha arrebenta e como regular para ele não apitar à toa.",
    "beginnerExplanation": "No alto da máquina tem um pequeno rolete com uma luzinha invisível (sensor) que vê a linha se mexendo. Se a linha quebrar, o rolete para e a máquina breca na hora para não perder o ponto. Manter essa pecinha limpa de poeira garante que a máquina trabalhe sem ficar apitando à toa!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-098-organizacao-e-higienizacao-de-caixas-de-bobina-e-palhetas-tensoras",
    "code": "O-098",
    "term": "Organização e Higienização de Caixas de Bobina e Palhetas Tensoras (Bobbin Case Cleaning & Tension Leaf Spring)",
    "letter": "O",
    "level": "Iniciante 🟢",
    "category": "Bobinas & Caixas de Bobina",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês bobine (carretel cilíndrico) e do latim tensio (mola laminar de pressão de aço inoxidável).",
    "summary": "Procedimento diário de higienização da palheta de mola tensora da caixa de bobina utilizando tiras de papel sulfite ou filme plástico, eliminando poeira e cera acumuladas para estabilizar a tensão inferior em 22-25 gf.",
    "definition": "Organização e Higienização de Caixas de Bobina e Palhetas Tensoras (Bobbin Case Spring Cleaning Protocol, Tension Leaf Decontamination & Lint Removal) é a rotina de manutenção preventiva mais importante na parte inferior da máquina de bordar. A caixa de bobina metálica possui uma fina lâmina de aço mola presa por dois parafusos de precisão; a linha da bobina (fio 60wt de poliéster contínuo) passa por baixo dessa palheta, que exerce a frenagem calibrada entre 20 gf e 25 gf. Fiapos microscópicos de linha e resíduos de cera se comprimem debaixo dessa lâmina, levantando a mola em frações de milímetro e zerando a tensão da linha de baixo, o que faz a linha da bobina subir para o direito do bordado na forma de pontinhos brancos feios.",
    "technicalDetails": "Tensão nominal da linha de baixo (Bobina 60wt): 20 gf a 25 gf (medida no Tensiômetro Towa tipo L/M). Espessura da lâmina de aço mola: 0,15 mm. Folga permitida sob a mola: 0,00 mm (contato plano absoluto). Material de higienização seguro: Tira de papel sulfite 75 g/m² ou pedaço de película plástica (nunca usar metal ou estilete).",
    "construction": [
      "Corpo da caixa de bobina em liga metálica polida com pino central",
      "Mola de tensão laminar de aço inoxidável de alta flexibilidade",
      "Parafuso de fixação principal e parafuso menor de ajuste milimétrico de tensão",
      "Mola interna de freio (Brake Spring) para evitar giro por inércia da bobina",
      "Tensiômetro digital ou analógico Towa para calibração rápida pós-limpeza"
    ],
    "howItWorks": [
      "1. Retira-se a caixa de bobina da máquina no início do turno de trabalho.",
      "2. Remove-se a bobina de dentro da caixa.",
      "3. Corta-se uma tirinha estreita de papel sulfite comum (cerca de 1 cm x 5 cm).",
      "4. Desliza-se a quina do papel por baixo da palheta metálica de tensão, de trás para a frente.",
      "5. Puxa-se a tira de papel: ela arrasta para fora uma bolinha compacta de poeira e fiapos pretos que estava escondida sob a mola.",
      "6. Recoloca-se a bobina e passa-se o fio pela ranhura sob a palheta limpa.",
      "7. Mede-se no tensiômetro Towa (ou faz-se o teste da queda livre): a tensão volta imediatamente aos 22 gf perfeitos, garantindo um bordado impecável e sem linha branca subindo."
    ],
    "mainTypes": [
      "Caixa de Bobina Tipo 'L' (Padrão para máquinas industriais e domésticas convencionais)",
      "Caixa de Bobina Tipo 'M' Jumbo (Para máquinas industriais com carretéis de grande capacidade)",
      "Caixa de Bobina com Revestimento Cerâmico ou Teflon (Para operação ultra-limpa e baixo atrito)"
    ],
    "characteristics": [
      "Procedimento super simples de 15 segundos que resolve 80% dos problemas de ponto feio",
      "Eliminação imediata de pontinhos brancos da bobina aparecendo no direito da peça",
      "Estabilidade absoluta da tensão de fundo ao longo de todo o carretel de linha",
      "Custo zero e preservação da caixa de bobina original por muitos anos"
    ],
    "limitations": [
      "Nunca utilizar pontas de tesoura, agulhas ou chaves de fenda para limpar embaixo da palheta (entorta a mola)",
      "Se a mola for entortada ou perder a elasticidade, a caixa de bobina inteira deve ser trocada",
      "Nunca colocar óleo lubrificante dentro da caixa de bobina (a bobina deve trabalhar 100% seca)"
    ],
    "numberingSystem": [
      "Tensão Alvo Towa: 22 gf a 25 gf",
      "Frequência de Limpeza com Papel: Diária (ao iniciar o trabalho)",
      "Espessura do Papel de Limpeza: Sulfite 75 g/m²"
    ],
    "advantages": [
      "✔ Acaba para sempre com o pesadelo da linha branca da bobina subindo e estragando o bordado",
      "✔ Deixa o avesso do seu bordado perfeito com a proporção clássica de 1/3 de linha branca no meio",
      "✔ Procedimento que qualquer bordadeira iniciante consegue fazer em 10 segundos sem gastar nada"
    ],
    "commonErrors": [
      "❌ Enfiar a ponta de uma agulha embaixo da palheta para tirar fiapos, entortando a mola para sempre",
      "❌ Pingar óleo dentro da caixa de bobina, criando uma pasta preta grudenta de fiapos",
      "❌ Apertar o parafuso da bobina com força até espanar a rosca minúscula"
    ],
    "voceSabia": "A mola de tensão da caixa de bobina tem apenas 0,15 milímetros de espessura — mais fina que um fio de cabelo humano grosso! Por isso, qualquer grãozinho de poeira é suficiente para levantar a mola e anular a pressão da linha!",
    "curiosidadeTecnica": "Um fiapo de algodão de 0,08 mm prensado sob a lâmina da caixa de bobina reduz a força de aperto em mais de 80%, fazendo a tensão cair de 24 gf para 4 gf; a essa tensão, a tração da linha superior puxa a bobina inteira para a face superior do tecido.",
    "dicaArtrelados": "Todo dia de manhã, antes de ligar a máquina, pegue um pedacinho de papel sulfite (papel comum de impressora) e passe a pontinha dele por baixo daquela lâmina de metal da caixinha de bobina, como se fosse um cartão passando na maquininha. Você vai ver sair uma sujeirinha preta de poeira e sua máquina vai bordar o dia todo sem subir um único pontinho branco!",
    "comparisonTable": {
      "headers": [
        "Estado da Palheta Tensora",
        "Tensão da Bobina",
        "Aspecto no Avesso",
        "Aspecto no Direito"
      ],
      "rows": [
        [
          "Limpa com Papel Sulfite",
          "22-25 gf (Perfeita)",
          "1/3 de linha branca no centro do satim",
          "100% cor da linha de cima"
        ],
        [
          "Com Fiapo sob a Lâmina",
          "< 10 gf (Frouxa)",
          "Linha de cima cobre tudo no avesso",
          "Pontinhos brancos vazam no direito"
        ],
        [
          "Mola Entortada com Agulha",
          "Zero ou Irregular",
          "Embola e faz nós no avesso",
          "Bordado frouxo e defeituoso"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção (750 - 1.000 PPM)",
      "needleType": "Padrão",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Manutenção preventiva diária de caixas de bobina industriais e domésticas",
      "Solução imediata para casos em que a linha da bobina aparece na frente do bordado",
      "Padronização de tensão em todas as cabeças de máquinas multicabeças com tensiômetro Towa",
      "Armazenamento organizado de caixas de bobina em estojos acolchoados anti-queda"
    ],
    "troubleshootingTips": [
      "Se mesmo após a limpeza com papel a linha continuar frouxa, gire o parafuso maior da bobina 1/8 de volta no sentido horário",
      "Guarde as caixas de bobina em caixas organizadoras de plástico com espuma para que não caiam no chão",
      "Se a caixa de bobina cair no chão de cimento e amassar a borda, descarte a peça (ela causará quebra de linha)"
    ],
    "relatedTerms": [
      "Bobinas & Caixas de Bobina",
      "Caixa de Bobina",
      "Tensiômetro Towa",
      "Nivelamento de Tensão de Linha",
      "Manutenção Preventiva"
    ],
    "tags": [
      "o-098",
      "caixa de bobina",
      "palheta tensora",
      "limpeza de bobina",
      "linha branca subindo",
      "bobinas e caixas de bobina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TOWA Bobbin Tension Gauge Manual & Maintenance Standards. Tokyo, 2021.",
      "PARRISH, Gail. Underthread Dynamics: Bobbin Leaf Spring Mechanics, Lint Decontamination and Tension Uniformity. Cincinnati, 2022."
    ],
    "practicalExercise": "Tire a caixa de bobina da sua máquina agora. Pegue um pedaço de papel sulfite e passe a pontinha por baixo da lâmina de metal puxando para fora: veja a sujeirinha saindo no papel! Depois coloque a linha e puxe com a mão: sinta como a linha desliza firme, suave e perfeita!",
    "quickSummary": "O jeito fácil de limpar a caixinha da bobina com um pedacinho de papel para a linha de baixo não ficar frouxa.",
    "beginnerExplanation": "Debaixo daquela lâmina de metal da caixinha de bobina sempre junta uma poeirinha de linha que deixa a linha de baixo frouxa, fazendo aparecer pontinhos brancos feios na frente do bordado. Passar uma tirinha de papel sulfite debaixo dessa lâmina limpa tudo em 5 segundos e deixa o bordado perfeito!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-099-otimizacao-de-memoria-e-capacidade-de-armazenamento-nos-paineis-das-maquinas",
    "code": "O-099",
    "term": "Otimização de Memória e Capacidade de Armazenamento nos Painéis das Máquinas (Embroidery Controller Memory Management)",
    "letter": "O",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim memoria (capacidade de retenção de dados) e do grego pinax (painel de controle microprocessado).",
    "summary": "Boas práticas de gestão de arquivos internos, limpeza periódica de cache e formatação de memória Flash nos painéis de controle das máquinas de bordar para evitar lentidão, corrupção de arquivos e travamentos.",
    "definition": "Otimização de Memória e Capacidade de Armazenamento nos Painéis das Máquinas (Control Panel Solid-State Memory Management, Cache Cleaning & File Buffer Optimization) é a rotina de manutenção lógica e operacional da memória não-volátil (Flash NAND/EEPROM) e da memória de trabalho (RAM) do computador de bordo da máquina de bordar. O acúmulo de centenas de arquivos de matrizes antigas (arquivos DST, PES, EXP), arquivos temporários de log de produção e fragmentação de blocos de memória causa lentidão severa na leitura de pendrives, travamento repentino da tela durante a costura (*Freeze*), inversão aleatória de pontos e perda de sincronismo de coordenadas de bastidor.",
    "technicalDetails": "Capacidade de memória típica dos painéis: 2 milhões a 100 milhões de pontos (cerca de 200 a 1.000 designs armazenados). Sistema de arquivos do painel: FAT16 / FAT32 proprietário. Limite máximo recomendado de ocupação de memória: ≤ 70% da capacidade total. Especificação do pendrive recomendado: USB 2.0 de 2GB a 8GB formatado em FAT32 com tamanho de alocação de 4096 bytes (nunca usar pendrives USB 3.0 de 64GB com centenas de pastas).",
    "construction": [
      "Memória Flash industrial embarcada na placa-mãe do painel computadorizado",
      "Processador ARM ou RISC dedicado com barramento de controle em tempo real",
      "Porta USB host protegida contra surtos eletrostáticos (ESD)",
      "Interface gráfica intuitiva com menu de gerenciamento de disco interno e externo",
      "Bateria de lítio de backup (tipo moeda CR2032) para preservação de parâmetros de sistema"
    ],
    "howItWorks": [
      "1. O operador acessa o menu de 'Gerenciamento de Memória / Memory Management' na tela touchscreen da máquina.",
      "2. Verifica a quantidade de memória livre: se a barra estiver vermelha (> 80% ocupada), é hora da limpeza.",
      "3. Seleciona as matrizes de trabalhos antigos já entregues e executa a exclusão em lote.",
      "4. Mantém na memória interna apenas os logotipos de clientes frequentes e matrizes de uso diário.",
      "5. No computador do ateliê, utiliza um pendrive USB 2.0 pequeno (4GB a 8GB) dedicado apenas para transferir a matriz do dia.",
      "6. Limpa o pendrive periodicamente, mantendo menos de 10 matrizes salvas na raiz (sem pastas complexas).",
      "7. A máquina lê o arquivo instantaneamente, a tela responde com rapidez total e a costura flui sem travamentos nem falhas de sistema."
    ],
    "mainTypes": [
      "Limpeza Periódica de Memória Interna do Painel (Exclusão mensal de designs antigos na máquina)",
      "Formatação e Padronização de Pendrives em FAT32 (Previne erros de leitura 'USB Not Found')",
      "Backup de Parâmetros de Máquina em Pendrive (Salva as configurações de fábrica e limites de bastidor)"
    ],
    "characteristics": [
      "Carregamento ultra-rápido de matrizes da tela para a costura sem atrasos",
      "Eliminação de travamentos da máquina que obrigam a reiniciar no meio do bordado",
      "Proteção total contra corrupção de arquivos de coordenadas de bordado",
      "Operação do sistema operacional do painel com estabilidade máxima"
    ],
    "limitations": [
      "Nunca desligar a máquina da tomada enquanto ela estiver gravando ou lendo um arquivo do pendrive",
      "Não utilizar pendrives gigantescos de 64GB ou 128GB cheios de fotos e vídeos na máquina de bordar",
      "Não colocar nomes de arquivos muito longos (manter nomes curtos com até 8 caracteres sem acentos ou caracteres especiais)"
    ],
    "numberingSystem": [
      "Ocupação Máxima Ideal: 70%",
      "Formatação do Pendrive: FAT32 (4KB)",
      "Capacidade Ideal do Pendrive: 4GB ou 8GB USB 2.0"
    ],
    "advantages": [
      "✔ Faz o painel da sua máquina abrir as matrizes super rápido sem ficar pensando ou travando",
      "✔ Evita o susto da máquina 'congelar' a tela no meio de uma encomenda urgente",
      "✔ Mantém sua máquina sempre rápida, limpa e com funcionamento de fábrica"
    ],
    "commonErrors": [
      "❌ Deixar 500 matrizes acumuladas na memória da máquina até a tela travar e ficar lenta",
      "❌ Colocar pendrive de 128GB lotado de filmes e músicas dentro da máquina de bordar",
      "❌ Puxar o pendrive da máquina enquanto ela está lendo ou transferindo a matriz"
    ],
    "voceSabia": "Muitos painéis industriais de máquinas de bordar utilizam sistemas operacionais em tempo real (RTOS ou Linux Embarcado) super leves que precisam de apenas alguns megabytes para funcionar com altíssima velocidade!",
    "curiosidadeTecnica": "A fragmentação excessiva da memória Flash em controladores de bordado pode aumentar o tempo de acesso ao buffer de pontos em mais de 400%, causando micro-pausas no pantógrafo durante sequências rápidas de satim.",
    "dicaArtrelados": "Tenha um pendrive pequeno (de 4GB ou 8GB) exclusivo só para a sua máquina de bordar: não misture fotos nem músicas nele. Toda semana, apague da memória da máquina aquelas matrizes antigas que você já bordou e entregou para o cliente. A tela da sua máquina vai ficar rápida e levinha como se tivesse saído da caixa ontem!",
    "comparisonTable": {
      "headers": [
        "Estado da Memória da Máquina",
        "Tempo de Abertura de Matriz",
        "Risco de Travamento (Freeze)",
        "Estabilidade Geral"
      ],
      "rows": [
        [
          "Otimizada (< 50% de ocupação)",
          "Instantâneo (1 segundo)",
          "Zero",
          "Máxima e fluida"
        ],
        [
          "Cheia (> 90% com 400 designs)",
          "Lenta (10 a 20 segundos)",
          "Médio a Alto",
          "Lentidão e engasgos"
        ],
        [
          "Pendrive Incompatível (USB 3.0 128GB)",
          "Erro 'Dispositivo Não Reconhecido'",
          "Alto",
          "Sistema não lê o arquivo"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "Padrão",
      "stabilizer": "N/A (Software e painel)",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Gestão de arquivos em painéis industriais (Dahao, Tajima, Barudan, Happy, Ricoma)",
      "Manutenção preventiva de software em máquinas domésticas (Brother, Janome, Bernina)",
      "Preparação de pendrives de produção para ateliês de alto giro",
      "Rotina de backup e segurança de matrizes de logotipos de empresas"
    ],
    "troubleshootingTips": [
      "Se a máquina não reconhecer o pendrive, formate-o no computador em FAT32 com tamanho de alocação de 4096 bytes",
      "Evite usar acentos (á, é, ç) e símbolos nos nomes dos arquivos de matriz (ex: use 'JALECO_1.DST')",
      "Mantenha uma cópia de segurança de todas as suas matrizes no computador do escritório ou na nuvem"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Formatos de Arquivo de Bordado (DST / PES / EXP)",
      "Gestão do Ateliê e Produção",
      "Ficha Técnica de Bordado (Worksheet)",
      "Manutenção Preventiva"
    ],
    "tags": [
      "o-099",
      "otimizacao de memoria",
      "painel da maquina",
      "pendrive fat32",
      "armazenamento",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "DAHAO Computerized Control System: File Architecture & Flash Memory Maintenance Manual. Beijing, 2021.",
      "PARRISH, Gail. Embedded Systems, Solid-State Storage Architecture and USB Buffer Optimization in Industrial Embroidery Machinery. Cincinnati, 2022."
    ],
    "practicalExercise": "Vá até o painel da sua máquina de bordar e abra o menu de arquivos: olhe quantas matrizes antigas estão salvas lá dentro que você não usa mais. Apague os arquivos antigos que já foram entregues e sinta como a navegação da tela fica mais rápida e gostosa!",
    "quickSummary": "Como manter a memória da tela da máquina limpa e organizada para ela nunca travar nem ficar lenta.",
    "beginnerExplanation": "O computador da máquina de bordar tem uma memória parecida com a de um celular: se você encher de centenas de arquivos velhos, a tela começa a ficar lenta e pode travar no meio do trabalho. Apagar as matrizes antigas que você já bordou deixa a máquina rápida e pronta para trabalhar sem sustos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-100-operacao-padrao-de-fechamento-de-turno-e-check-list-preventivo-no-atelie",
    "code": "O-100",
    "term": "Operação Padrão de Fechamento de Turno e Check-list Preventivo no Ateliê (End-of-Shift Protocol & Preventative Checklist)",
    "letter": "O",
    "level": "Intermediário 🟡",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim operatio (conjunto metódico de ações coordenadas) e do inglês checklist (lista de verificação e controle de qualidade).",
    "summary": "Procedimento Operacional Padrão (POP) diário de 5 minutos para encerramento de atividades no ateliê de bordado, abrangendo limpeza de fiapos, despressurização de bastidores, cobertura antipoeira e inspeção de agulhas.",
    "definition": "Operação Padrão de Fechamento de Turno e Check-list Preventivo no Ateliê (Daily Shift Closeout Protocol, Machine Idle Maintenance & 5S Lean Embroidery Discipline) é o conjunto padronizado de boas práticas executadas pelo operador ao término de cada jornada de trabalho. A disciplina de encerramento garante a longevidade dos equipamentos e a prontidão para o dia seguinte: inclui a aspiração/limpeza dos fiapos da chapa de ponto e lançadeira, remoção de tecidos dos bastidores para não estirar as molas, retorno do pantógrafo para a posição de origem (Origin Point / Home), desligamento seguro do estabilizador, cobertura do cabeçote com capa antipoeira e anotação das agulhas a serem trocadas na manhã seguinte.",
    "technicalDetails": "Tempo médio do protocolo: 5 a 7 minutos por máquina. Ferramental básico: Pincel de cerdas macias antiestático, pano de microfibra seco, aspirador de pó miniatura e capa de proteção em tecido respirável. Posição segura do pantógrafo no repouso: Posição de troca de bastidor (Frame Out) ou Ponto Zero de Origem.",
    "construction": [
      "Quadro visual impresso com o Check-list diário de 5 etapas (Metodologia 5S)",
      "Pincel de limpeza e pano de microfibra dedicados junto à bancada da máquina",
      "Caixa organizadora para retorno de linhas, tesouras e gabaritos aos seus locais",
      "Capa protetora em tecido respirável (nunca plástico impermeável que condensa umidade)",
      "Livro de registro ou prancheta de controle de agulhas e manutenção do ateliê"
    ],
    "howItWorks": [
      "1. Ao finalizar a última peça do dia, o operador retira o bastidor da máquina e guarda a peça na área de entrega.",
      "2. Remove a chapa de ponto e passa um pincel macio na lançadeira para remover os fiapos do dia.",
      "3. Passa um pano de microfibra seco na bancada e no chassi para tirar a poeira ambiente.",
      "4. No painel, manda o pantógrafo para a posição de descanso (Home / Origin) e desliga a máquina pela chave geral.",
      "5. Desliga o estabilizador ou nobreak da tomada para proteger as placas contra descargas elétricas noturnas.",
      "6. Guarda as tesouras, réguas e carretéis nos seus devidos organizadores.",
      "7. Cobre a máquina com a capa protetora de tecido: no dia seguinte, o ateliê amanhece 100% limpo, organizado e pronto para faturar desde o primeiro minuto."
    ],
    "mainTypes": [
      "Fechamento de Turno Diário de 5 Minutos (Limpeza básica, desligamento e cobertura)",
      "Fechamento Semanal Completo de Sexta-feira (Inclui lubrificação geral e descarte de agulhas velhas)",
      "Protocolo de Fechamento para Férias / Parada Longa (Proteção antioxidante com filme de óleo mineral)"
    ],
    "characteristics": [
      "Aumento imediato da vida útil e conservação estética de todas as máquinas do ateliê",
      "Início de trabalho no dia seguinte sem perda de tempo limpando sujeira do dia anterior",
      "Prevenção total contra acúmulo de poeira e teias de aranha dentro dos circuitos eletrônicos",
      "Ambiente de trabalho agradável, profissional e com padrão de excelência visual"
    ],
    "limitations": [
      "Nunca cobrir a máquina ainda quente com plástico impermeável fechado (o calor retido gera umidade)",
      "Não deixar peças presas dentro do bastidor durante a noite toda (o tecido deforma e marca o aro)",
      "Certificar-se de que todas as tesouras de precisão estejam guardadas com a ponta protegida"
    ],
    "numberingSystem": [
      "Tempo do Protocolo: 5 minutos",
      "Frequência: Diária (ao final de cada expediente)",
      "Itens de Checagem: 5 passos essenciais"
    ],
    "advantages": [
      "✔ Você termina o dia com a sensação maravilhosa de dever cumprido e ateliê impecável",
      "✔ Chega no dia seguinte de manhã e encontra tudo pronto para começar a bordar na hora",
      "✔ Protege sua máquina contra picos de luz noturnos e poeira que estraga os sensores"
    ],
    "commonErrors": [
      "❌ Largar a máquina suja cheia de linha no chão, tesoura jogada e tecido preso no bastidor à noite",
      "❌ Deixar a máquina ligada na tomada durante tempestades noturnas com raios",
      "❌ Usar capa de plástico que faz a máquina suar e enferrujar as peças de aço polido"
    ],
    "voceSabia": "A metodologia 5S de organização e limpeza de fechamento de turno foi criada no Japão pós-Segunda Guerra Mundial pelas fábricas da Toyota e se tornou o segredo das maiores indústrias de alta precisão do mundo!",
    "curiosidadeTecnica": "A poeira têxtil suspensa no ar de um ateliê assenta durante a noite a uma taxa de 0,5 mg/cm²; ao longo de 1 ano, uma máquina sem capa protetora acumula mais de 250 gramas de pó abrasivo dentro de seus rolamentos e placas eletrônicas.",
    "dicaArtrelados": "Crie o hábito sagrado dos 5 minutinhos de carinho com a sua máquina antes de ir embora: passe um pincelzinho na lançadeira para tirar o pó do dia, guarde as tesouras no lugar, desligue o filtro de linha e cubra sua companheira de trabalho com um paninho de algodão limpo. No dia seguinte, seu ateliê vai estar lindo e sua máquina vai te retribuir bordando sem nenhum defeito!",
    "comparisonTable": {
      "headers": [
        "Hábito no Ateliê",
        "Tempo Gasto",
        "Estado da Máquina no Dia Seguinte",
        "Custos de Manutenção"
      ],
      "rows": [
        [
          "Check-list de Fechamento Diário (5 min)",
          "5 minutos",
          "Limpa, lubrificada e pronta para produzir",
          "Mínimos (conservação total)"
        ],
        [
          "Largar Tudo Como Está",
          "0 minutos",
          "Poeira acumulada, fiapos duros e desordem",
          "Altos (quebras e queima de placas)"
        ],
        [
          "Limpeza Apenas quando a Máquina Trava",
          "Horas de oficina",
          "Improdutiva e cheia de desgastes",
          "Altíssimos com peças e técnicos"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Zero (Máquina desligada e em repouso seguro)",
      "needleType": "Inspeção visual para troca matinal",
      "stabilizer": "Guardado em caixas fechadas",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Rotina diária obrigatória em todos os ateliês de bordado computadorizado",
      "Treinamento de novos operadores e bordadeiras no padrão de qualidade e disciplina",
      "Gestão profissional de micro e pequenas empresas de personalização e brindes",
      "Conservação preventiva de maquinário de alto investimento para manter o valor de revenda"
    ],
    "troubleshootingTips": [
      "Cole uma folha plastificada com os 5 passos do check-list na parede ao lado da máquina",
      "Utilize capas de tecido 100% algodão ou brim respirável para cobrir a máquina à noite",
      "Se no dia seguinte uma agulha estiver com a ponta áspera, troque-a imediatamente antes da primeira peça"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Manutenção Preventiva",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Óleo Mineral Branco USP vs. Óleos Sintéticos de Alta Viscosidade",
      "Organização e Higienização de Caixas de Bobina e Palhetas Tensoras"
    ],
    "tags": [
      "o-100",
      "fechamento de turno",
      "check-list",
      "pop",
      "5s no atelie",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LEAN EMBROIDERY PRODUCTION: 5S Disciplines, Daily Closeout Protocols & Preventive Maintenance. Munich, 2021.",
      "PARRISH, Gail. Total Productive Maintenance (TPM), Shop-Floor Ergonomics and Daily Equipment Care in Commercial Embroidery Studios. Cincinnati, 2022."
    ],
    "practicalExercise": "Hoje, ao terminar seu dia de bordados, cronometre 5 minutos no celular: passe o pincel na lançadeira, limpe a mesa com um pano, desligue o estabilizador e cubra sua máquina com um tecido bonito. Veja como amanhã de manhã você vai se sentir muito mais leve e inspirada para começar a trabalhar!",
    "quickSummary": "O ritual de 5 minutos no final do dia para limpar a máquina, desligar tudo com segurança e deixar o ateliê pronto para amanhã.",
    "beginnerExplanation": "Cuidar da sua máquina é como colocar ela para dormir: antes de ir embora, você gasta 5 minutinhos tirando a poeira da lançadeira com um pincel, guardando as tesouras no lugar, desligando o estabilizador da tomada e cobrindo ela com um paninho limpo. No dia seguinte, seu ateliê está lindo e pronto para faturar!",
    "updatedAt": "2026-08-29"
  }
];

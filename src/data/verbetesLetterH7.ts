import { Verbete } from "../types";

export const VERBETES_LETTER_H_PART7: Verbete[] = [
  {
    id: "h-037-haste-do-pantografo-eixo-de-transmissao-y",
    code: "H-037",
    term: "Haste do Pantógrafo & Eixo de Transmissão Y (Pantograph Drive Shaft & Crossbeam Support)",
    letter: "H",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do grego pantos (tudo) e graphein (desenhar/escrever) e do latim transmissio (passagem/condução). Componente estrutural central de movimentação de coordenadas.",
    summary: "Travessa de alumínio extrudado e eixo estriado de alta rigidez que conecta os servomotores ao bastidor para garantir movimentos sem folga milimétrica.",
    definition: "A Haste Estrutural do Pantógrafo e Eixo de Transmissão do Eixo Y (Pantograph Crossbeam / Y-Axis Splined Drive Shaft & Linear Guide Rail) é a viga mestra em liga de alumínio aeronáutico extrudado reforçado ou aço estrutural que atravessa horizontalmente a frente de toda a máquina de bordar, suportando as garras de engate dos bastidores. Conectada diretamente aos servomotores digitais através de correias sincronizadas com alma de aço (Timing Belts) ou fusos de esferas recirculantes, sua função mecânica é transferir instantaneamente os deslocamentos cartesianos nos eixos X e Y para o bastidor com acelerações de até 2G, mantendo rigidez flexional absoluta e tolerância de posicionamento inferior a 0,02mm em toda a sua extensão.",
    technicalDetails: "Especificações de precisão mecânica: Deformação elástica máxima (deflexão): <0,03mm a 1.000 PPM com bastidor pesado de 10 cabeças; guias lineares temperadas e retificadas por indução; correias dentadas de poliuretano com cordas de Kevlar/Aço passo 3M ou 5M; mancais com rolamentos de esferas de contato angular pré-tensionados.",
    howItWorks: [
      "1. A máquina lê o próximo ponto na matriz de bordado: comando 'Mover X: +2,4mm / Mover Y: -1,8mm'.",
      "2. O drive eletrônico envia pulsos de corrente para o servomotor do eixo Y.",
      "3. O servomotor gira a polia dentada com torque imediato.",
      "4. A correia síncrona com alma de aço traciona a haste do pantógrafo sobre os trilhos lineares.",
      "5. A haste desliza suavemente sobre patins de esferas com atrito quase nulo.",
      "6. A garra do bastidor, fixada na haste, move o tecido exatamente para as novas coordenadas.",
      "7. A agulha desce e perfura o tecido no décimo de milímetro exato.",
      "8. O movimento ocorre em menos de 40 milissegundos sem qualquer folga, vibração ou oscilação residual."
    ],
    beginnerExplanation: "É a grande 'barra de metal' que fica na frente da máquina onde a gente encaixa o bastidor! É essa barra que os motores puxam para lá e para cá, para frente e para trás, para desenhar o bordado no pano. Ela é feita de um metal super forte e leve para não tremer nada e fazer a máquina colocar cada pontinho no lugar certinho, mesmo correndo a mil por hora!",
    applications: [
      "Transmissão de alta precisão de coordenadas X e Y em máquinas industriais de 1 a 24 cabeçotes",
      "Suporte para mesas de bordado plano de grandes áreas (Bordado em Peça Inteira / Campo Aberto)",
      "Manutenção do esquadro de 90° perfeito entre os eixos cartesianos da máquina",
      "Eliminação de distorções e desalinhamentos de contornos em matrizes grandes e complexas"
    ],
    commonErrors: [
      "Apoiar o peso do corpo ou caixas pesadas de peças em cima da haste do pantógrafo (empena a guia linear e desalinha os eixos)",
      "Operar com correias sincronizadoras frouxas, causando 'folga de reversão' (Backlash) que desencaixa os contornos do bordado",
      "Deixar acumular poeira de linha e óleo sujo nos trilhos lineares da haste"
    ],
    troubleshootingTips: [
      "Limpe os trilhos de aço da haste do pantógrafo semanalmente com um pano seco e aplique uma película fina de óleo mineral protetor",
      "Verifique a tensão das correias dentadas do eixo Y a cada 6 meses: as correias devem ter deflexão máxima de 3mm a 4mm sob pressão do polegar",
      "Nunca force o deslocamento manual da haste com a máquina ligada (utilize sempre as teclas de setas do painel para mover o bastidor)",
      "Se os contornos do bordado estiverem desencaixando sistematicamente em um único sentido, confira a fixação dos parafusos do acoplamento do motor na haste"
    ],
    dicaArtrelados: "Cuide da haste do pantógrafo da sua máquina como o chassi de um carro de Fórmula 1! Mantenha os trilhos sempre limpinhos e nunca coloque peso em cima: isso garante que os seus bordados vão encaixar os contornos no décimo de milímetro por muitos anos!",
    voceSabia: "O pantógrafo mecânico foi inventado em 1603 pelo astrônomo jesuíta alemão Christoph Scheiner para copiar e ampliar desenhos à mão, e foi adaptado para as máquinas automáticas de bordar Jacquard no início do século XX!",
    practicalExercise: "Com a máquina desligada da tomada, empurre a barra do pantógrafo bem devagar com a mão: sinta como ela corre macia e silenciosa sobre os trilhos sem nenhuma folga ou rangido!",
    quickSummary: "Viga estrutural e guias lineares que transmitem o movimento dos servomotores ao bastidor com precisão.",
    relatedTerms: ["Grade Cartesiana X/Y", "Garra do Bastidor", "Hoop Sensor", "Compensação de Repuxo"],
    tags: ["h-037", "pantografo", "eixo y", "trilho linear", "servomotor", "precisao", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA PANTOGRAPH & SERVO DRIVE TECHNICAL MANUAL. Linear Rail Precision & Belt Tensioning. Nagoya, 2023.",
      "INDUSTRIAL EMBROIDERY MOTION CONTROL. High-Acceleration Crossbeam Mechanics & Backlash Compensation. Tokyo, 2022.",
      "ARTRELADOS. A Engenharia do Movimento Perfeito: Como Cuidar do Pantógrafo da sua Máquina de Bordar. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-038-haste-da-barra-de-agulhas-bucha-superior",
    code: "H-038",
    term: "Haste da Barra de Agulhas & Bucha Superior (Needle Bar Shaft & Upper Guide Bushing)",
    letter: "H",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do germânico hast (haste) e do latim buxus (caixa/bucha de guia). Conjunto mecânico primário de movimento vertical alternativo do cabeçote.",
    summary: "Haste cilíndrica de aço retificado e bucha de bronze sinterizado que guiam a subida e descida da agulha com folga micrométrica.",
    definition: "A Haste da Barra de Agulhas e Bucha Guia Superior/Inferior (Needle Bar Shaft & Precision Guide Bushings / Eixo de Translação da Agulha) é a haste cilíndrica usinada em aço cromo-níquel retificado e polido com tratamento térmico de têmpera por indução, que desliza verticalmente no interior de buchas de bronze fosforoso sinterizado ou ligas autolubrificantes no cabeçote de bordar. Ela converte a rotação do eixo excêntrico superior em movimento linear alternativo para penetrar no tecido até 1.200 vezes por minuto. A bucha superior tem a função crítica de suportar as cargas radiais de deflexão quando a agulha atinge tecidos duros (como bonés, couro e jeans), mantendo a agulha perfeitamente perpendicular à chapa com folga diametral inferior a 0,015mm.",
    technicalDetails: "Especificações de engenharia: Diâmetro nominal da haste: 6,00mm (tolerância h6: 0/-0,008mm); dureza superficial: 58 a 62 HRC; folga diametral bucha-haste: 0,008mm a 0,015mm; lubrificação: óleo mineral branco ISO VG 10 por capilaridade de feltros.",
    howItWorks: [
      "1. O servomotor principal gira o eixo superior da máquina.",
      "2. A biela excêntrica aciona o bloco condutor da barra de agulhas selecionada.",
      "3. A haste da barra de agulha é impulsionada para baixo a alta velocidade.",
      "4. A bucha guia superior e a bucha inferior mantêm a trajetória perfeitamente reta e vertical.",
      "5. A agulha perfura o tecido sem desviar lateralmente 1 mícron sequer.",
      "6. A mola recuperadora e o came superior puxam a haste para cima no ciclo de retorno.",
      "7. Os feltros lubrificantes depositam uma microcamada contínua de óleo mineral nas buchas.",
      "8. O conjunto opera de forma silenciosa, fria e sem folgas por milhões de ciclos consecutivos."
    ],
    beginnerExplanation: "É aquele tubinho de aço brilhante que segura a agulha e sobe e desce sem parar a mil por hora! Ele corre por dentro de um anelzinho especial de bronze chamado bucha, que não deixa a agulha tremer para os lados. É por causa dele que a agulha desce retinha como uma flecha bem no meio do buraquinho da chapa sem bater em nada!",
    applications: [
      "Condução linear do movimento de penetração e subida de agulhas em máquinas de 1 a 15 agulhas",
      "Absorção de impactos mecânicos ao bordar materiais pesados (bonés rígidos, couro legítimo e lonas)",
      "Garantia da geometria vertical rigorosa para a formação perfeita da laçada na lançadeira",
      "Substituição e manutenção em revisões técnicas de máquinas com mais de 5 anos de uso intenso"
    ],
    commonErrors: [
      "Operar a máquina sem lubrificação nos feltros da barra de agulha (o atrito a seco funde a bucha e trava a haste)",
      "Tentar forçar uma barra empenada após uma batida violenta de bastidor em vez de substituí-la por uma nova",
      "Usar óleos grossos de motor de carro ou desengripantes tipo spray que dissolvem a lubrificação de fábrica"
    ],
    troubleshootingTips: [
      "Aplique 1 gota de óleo mineral branco puro específico para máquinas de costura nos feltros de lubrificação superiores das barras de agulha a cada 15 dias de produção",
      "Para testar se há folga de desgaste: pegue a ponta da barra de agulha com a mão e tente mexer para a frente e para trás; se sentir um 'clique' ou folga perceptível, as buchas precisam ser trocadas",
      "Após qualquer colisão forte de agulha no bastidor, retire a barra e role sobre uma placa de vidro plana para verificar se ela não empenou",
      "Mantenha o cabeçote livre de poeira para não criar pasta abrasiva nas buchas"
    ],
    dicaArtrelados: "A barra de agulha é o coração da precisão mecânica! Uma única gota de óleo mineral no lugar certo a cada duas semanas mantém as buchas novinhas para sempre e evita barulhos e travamentos caros no ateliê!",
    voceSabia: "Em um dia de trabalho intenso de 8 horas a 800 PPM, uma única barra de agulha sobe e desce quase 400.000 vezes, percorrendo uma distância linear acumulada de mais de 14 quilômetros de vai-e-vem dentro de suas buchas!",
    practicalExercise: "Abra a tampa frontal ou olhe as barras de agulha da sua máquina: localize os pequenos feltros brancos de lubrificação no topo das hastes e coloque uma gotinha de óleo limpo!",
    quickSummary: "Haste de aço temperado e buchas de precisão que garantem a subida e descida reta da agulha sem folga lateral.",
    relatedTerms: ["Haste Fixadora de Agulha", "Hook Timing", "Higienização & Assepsia do Cabeçote", "Agulha de Bordado"],
    tags: ["h-038", "barra de agulha", "needle bar", "bucha guia", "lubrificacao", "mecanica fina", "manutencao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA NEEDLE BAR DRIVE TECHNICAL STANDARDS. Bushing Tolerances, Hardness & Lubrication. Nagoya, 2023.",
      "PRECISION SEWING MECHANICS & TRIBOLOGY. Linear Bushing Wear and Needle Deflection Analysis. Zurich, 2022.",
      "ARTRELADOS. Mecânica de Cabeçotes de Bordar: Guia de Lubrificação e Cuidados com a Barra de Agulhas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-039-higienizacao-assepsia-do-cabecote",
    code: "H-039",
    term: "Higienização & Assepsia do Cabeçote (Embroidery Head Cleaning & Decontamination)",
    letter: "H",
    level: "Fundamental 🟢",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do grego hygieinē (arte da saúde e conservação) e do latim asēpsis (isenção de impurezas). Protocolo de manutenção preventiva para eliminação de resíduos têxteis.",
    summary: "Rotina periódica essencial de limpeza profunda de fiapos, cola spray e poeira de entretela na lançadeira e sensores para evitar quebras e manchas.",
    definition: "A Higienização Técnica e Assepsia Operacional do Cabeçote (Embroidery Machine Deep Cleaning & Lint Decontamination Protocol) é o conjunto de procedimentos sistemáticos de limpeza física, remoção de resíduos e descontaminação de sujidades realizado nas áreas críticas da máquina de bordar. Concentra-se na caixa da lançadeira rotativa, sensores ópticos de quebra de linha, fendas dos cortadores automáticos, tensores de prato e barras de agulha. A operação diária com entretelas de algodão, linhas de poliéster e adesivos spray gera um acúmulo contínuo de microfiapos impregnados com poeira e cola, formando uma massa abrasiva ('grumos de fiapo') que trava lançadeiras, engasga o cortador de fio e mancha tecidos nobres com óleo escurecido.",
    technicalDetails: "Protocolo de higienização por zonas:\n• Zona 1 (Lançadeira e Chapa de Agulha): Limpeza diária com pincel macio antiestático e aspirador de bico fino;\n• Zona 2 (Discos Tensores e Passa-Fios): Limpeza semanal com fio dental de algodão sem cera ou pano de microfibra com álcool isopropílico 99,8%;\n• Zona 3 (Cortador Automático e Sensores Ópticos): Limpeza quinzenal com spray de ar seco comprimido isento de umidade e óleo;\n• Proibido: Uso de solventes agressivos (tíner, acetona) que atacam plásticos e visores.",
    howItWorks: [
      "1. Ao final do expediente, a bordadeira desliga a máquina de bordar da tomada.",
      "2. Remove o bastidor, a agulha e a chapa de agulha com a chave de fenda.",
      "3. Retira a caixa de bobina e a bobina de linha.",
      "4. Com um pincel de cerdas macias, varre cuidadosamente todos os tufos de fiapo acumulados na cavidade da lançadeira.",
      "5. Utiliza um mini-aspirador ou bico de ar seco para aspirar os resíduos para fora da máquina (sem soprar para dentro dos motores).",
      "6. Passa um pedaço de tecido de algodão limpo embebido em álcool isopropílico na pista da lançadeira para remover o óleo velho oxidado.",
      "7. Aplica 1 gota fresca de óleo mineral puro na pista de rotação da lançadeira.",
      "8. Remonta a caixa de bobina, a chapa e instala uma agulha nova.",
      "9. A máquina fica 100% esterilizada, silenciosa e pronta para um novo dia de produção impecável."
    ],
    beginnerExplanation: "É a 'faxina' que a gente faz na máquina para tirar aquele monte de pelinhos de pano, poeira de entretela e restinhos de linha que vão se acumulando embaixo da chapinha! Se você não limpar, esses pelinhos viram uma maçaroca dura que trava a lançadeira, faz a linha quebrar toda hora e pode até sujar a roupa do cliente de graxa velha. Um pincelzinho macio e 5 minutinhos de limpeza deixam a máquina nova em folha!",
    applications: [
      "Prevenção diária de quebras de linha inexplicáveis e travamentos do cortador automático",
      "Eliminação de manchas de óleo escuro e sujeira em peças nobres de enxoval de bebê e noivas",
      "Preservação da sensibilidade dos sensores ópticos e infravermelhos de passagem de linha",
      "Aumento comprovado da vida útil de lançadeiras, facas e rolamentos do cabeçote"
    ],
    commonErrors: [
      "Soprar a poeira com a boca (o vapor de água da respiração oxida e enferruja as peças de aço da lançadeira)",
      "Usar ar comprimido industrial muito forte direto nos rolamentos (empurra a sujeira para dentro das buchas lacradas)",
      "Usar agulhas de tricô ou objetos de metal pontiagudos para cutucar sujeira na lançadeira, arranhando o metal"
    ],
    troubleshootingTips: [
      "Utilize SEMPRE um pincel de cerdas naturais macias ou um mini-aspirador USB para puxar os fiapos para fora",
      "Nunca use álcool comum 70% (contém água); use SEMPRE álcool isopropílico 99,8% para limpar peças eletrônicas e discos tensores",
      "Limpe a cavidade da lançadeira toda vez que terminar de bordar uma toalha felpuda ou peça de pelúcia (que soltam muito pelo)",
      "Passe um fio dental comum sem cera por dentro dos discos tensores para remover casquinhas de cola spray acumuladas"
    ],
    dicaArtrelados: "Máquina limpa é máquina que não dá dor de cabeça! Crie o hábito sagrado de dar aquela varridinha na lançadeira no final de cada dia de trabalho: sua máquina vai durar 10 anos sem quebrar uma única peça!",
    voceSabia: "Mais de 65% de todas as quebras de linha e chamados de suporte técnico em máquinas de bordar são causados unicamente pelo acúmulo de fiapos e sujeira na lançadeira e nos discos tensores, que o próprio operador resolve em menos de 3 minutos com um pincel!",
    practicalExercise: "Retire a chapinha da agulha da sua máquina agora mesmo: use o pincel que veio no kit de acessórios e limpe os fiapinhos acumulados embaixo da lançadeira; sinta a diferença no som da máquina ao ligar!",
    quickSummary: "Rotina de limpeza de fiapos e resíduos com pincel e ar seco na lançadeira e sensores para evitar falhas.",
    relatedTerms: ["Hook Timing", "Gancho da Lançadeira", "Graxa Branca Sintética com PTFE", "Faca Móvel & Faca Fixa de Corte"],
    tags: ["h-039", "higienizacao", "limpeza", "manutencao preventiva", "fiapos", "lancadeira", "pincel", "artrelados"],
    bibliographicReferences: [
      "SEWING & EMBROIDERY MACHINE MAINTENANCE PROTOCOLS. Preventive Decontamination Standards. Tokyo, 2023.",
      "COMMERCIAL APPAREL CARE & MACHINE RELIABILITY. Lint Management & Fiber Abrasion Prevention. Chicago, 2022.",
      "ARTRELADOS. O Segredo da Máquina Perfeita: Manual de Higienização e Cuidados Diários para Bordadeiras. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-040-histograma-de-cores-sequencia-de-trocas-de-linha",
    code: "H-040",
    term: "Histograma de Cores & Sequência de Trocas de Linha (Color Histogram & Sequence Optimization)",
    letter: "H",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do grego histos (tecido/mastro vertical) e gramma (letra/registro gráfico). Gráfico estatístico aplicado à análise cromática e eficiência de produção de matrizes.",
    summary: "Gráfico de barras no software que mapeia a quantidade de pontos por cor e ajuda a reordenar a sequência para minimizar paradas e trocas manuais de cone.",
    definition: "O Histograma de Cores e Otimizador de Sequenciamento Cromático (Color Histogram & Color Change Sequence Sorter / Thread Palette Usage Analysis) é a ferramenta analítica visual presente em softwares avançados de digitalização e gerenciamento de produção (como Wilcom, Hatch, Embrilliance e Pulse). O histograma exibe um gráfico de colunas estatístico detalhando o percentual de pontos, metragem de fio consumido e tempo de execução dedicado a cada cor de linha na matriz. Permite ao digitalizador reorganizar logicamente os blocos de camadas (Color Sorting), agrupando objetos da mesma cor sem comprometer a sobreposição anatômica do desenho, reduzindo o número total de paradas de máquina para troca de linhas em até 50%.",
    technicalDetails: "Métricas de cálculo no software:\n• Contagem de pontos por slot de cor (RGB/Pantone/Marca);\n• Metragem consumida em metros lineares (Linha superior + Bobina);\n• Estimativa de tempo de parada por troca de cor: 40 segundos em máquinas de 1 agulha (manual) e 3 segundos em máquinas multi-agulhas (eletrônica);\n• Algoritmo de junção inteligente de cores adjacentes com verificação de sobreposição Z-Order.",
    howItWorks: [
      "1. O digitalizador conclui uma matriz complexa com 12 objetos coloridos.",
      "2. Ao abrir o painel de propriedades, o software acusa 9 paradas de troca de cor (ex: Preto -> Vermelho -> Preto -> Amarelo -> Preto).",
      "3. O designer abre a janela 'Histograma de Cores e Lista de Paradas'.",
      "4. Visualiza as barras gráficas: a cor Preta consome 60% dos pontos, dividida em 3 momentos diferentes.",
      "5. Executa a ferramenta 'Otimizar Trocas de Cor' (Color Sort).",
      "6. O software analisa as profundidades de camadas e agrupa as partes pretas do fundo em um único bloco inicial.",
      "7. As paradas de troca caem de 9 para apenas 4 trocas de linha.",
      "8. Em uma máquina de 1 agulha, a bordadeira economiza 5 trocas manuais de carretel por peça (quase 4 minutos de economia por camiseta bordada).",
      "9. Em uma produção de 100 peças, são 6 horas de trabalho economizadas no lote."
    ],
    beginnerExplanation: "É um gráfico bem colorido no programa do computador que mostra quantas cores o seu desenho tem e quanto de linha cada cor vai gastar! Ele tem um botãozinho mágico que junta as cores iguais que você esqueceu separadas. Se o desenho usava linha preta no começo, no meio e no fim, ele tenta juntar tudo para você não ter que ficar trocando de carretel na máquina três vezes sem necessidade!",
    applications: [
      "Redução drástica do número de trocas de carretel em máquinas domésticas de 1 agulha",
      "Otimização da sequência de agulhas em máquinas industriais multicabeçotes de 12 a 15 agulhas",
      "Cálculo exato de metragem de linha para compra de insumos em grandes produções",
      "Padronização de paletas de cores corporativas (Pantone) para aprovação de clientes"
    ],
    commonErrors: [
      "Agrupar cores iguais sem verificar a ordem das camadas, fazendo o contorno preto ficar por baixo do preenchimento amarelo",
      "Cadastrar cores com nomes parecidos (ex: 'Azul Escuro 1' e 'Azul Escuro 2') gerando paradas falsas na máquina",
      "Não conferir a simulação 3D após rodar o otimizador automático de cores"
    ],
    troubleshootingTips: [
      "Rode o 'Color Sort' sempre antes de exportar o arquivo final para o pendrive da máquina",
      "Depois de agrupar as cores, faça uma simulação na tela (Slow Redraw) para conferir se nenhum detalhe de olho ou contorno foi coberto por engano",
      "Em máquinas multi-agulhas, atribua a agulha com a cor que tem mais pontos (maior barra no histograma) na agulha central do cabeçote para menor vibração",
      "Utilize o relatório de metragem do histograma para calcular o custo exato de linha na sua planilha de preços"
    ],
    dicaArtrelados: "Otimizar as trocas de cor é o maior segredo de produtividade para quem tem máquina de uma agulha só! Uma matriz bem agrupada faz a máquina bordar direto sem você precisar levantar da cadeira para trocar carretel a cada dois minutos!",
    voceSabia: "O algoritmo moderno de ordenação de cores (Color Sorting) em softwares de bordado utiliza os mesmos princípios matemáticos do famoso 'Problema do Caixeiro Viajante' da ciência da computação para encontrar a rota mais curta e rápida de execução!",
    practicalExercise: "Abra uma matriz no seu software e vá na lista de objetos de cor: execute o comando 'Color Sort' e veja quantas trocas de cor o programa conseguiu eliminar automaticamente!",
    quickSummary: "Mapeamento gráfico de consumo de cores que agrupa blocos iguais para reduzir paradas e trocas de linha.",
    relatedTerms: ["Hora-Máquina & Cálculo de Custo", "Gasto de Linha & Consumo de Fio", "Ficha Técnica de Matriz", "Hatch Embroidery"],
    tags: ["h-040", "histograma de cores", "color sort", "troca de cor", "produtividade", "otimizacao", "software", "artrelados"],
    bibliographicReferences: [
      "WILCOM COLOR MANAGEMENT & SEQUENCING GUIDE. Color Sort Optimization & Layer Safety. Sydney, 2023.",
      "EMBROIDERY PRODUCTION LOGISTICS. Minimizing Operator Interventions via Thread Sorting Algorithms. Chicago, 2022.",
      "ARTRELADOS. Produção Rápida no Ateliê: Como Reduzir Trocas de Linha e Economizar Horas com a Otimização de Cores. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-041-halogenio-vs-led-iluminacao-operacional-do-cabecote",
    code: "H-041",
    term: "Halogênio vs. LED: Iluminação Operacional do Cabeçote (Halogen vs. LED Head Worklight Illumination)",
    letter: "H",
    level: "Fundamental 🟢",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do grego hals (sal) e gennan (gerar) [Halogênio] e da sigla em inglês Light Emitting Diode [LED]. Evolução tecnológica da iluminação ergonômica de máquinas de costura.",
    summary: "Comparativo técnico e atualização de lâmpadas incandescentes/halógenas quentes por sistemas modernos de LED frio de alto IRC sobre a agulha.",
    definition: "O Sistema de Iluminação do Cabeçote de Bordar (Embroidery Machine Needle Area Worklight / Halogen to High-CRI LED Retrofit Standards) compreende as fontes luminosas integradas posicionadas estrategicamente acima da barra de agulhas e chapa de bordado. Historicamente, as máquinas utilizavam lâmpadas incandescentes ou halógenas de bulbo pequeno (2W a 15W), que emitiam calor excessivo (atingindo mais de 70°C na carcaça), ressecavam as peças plásticas internas, alteravam a temperatura da linha de poliéster e tinham baixa reprodução de cores (IRC < 70 amarelado). A conversão para sistemas modernos de LED de espectro total (Luz Diurna / Daylight 5.000K a 6.500K com IRC > 90) proporciona iluminação fria, sem sombras, com consumo 90% menor e fidelidade cromática absoluta para inspeção de pontos.",
    technicalDetails: "Comparativo técnico de engenharia:\n• Lâmpada Halógena Tradicional: Emissão de calor de 65°C a 85°C; vida útil de 1.000 horas; temperatura de cor de 2.700K (amarelada); alto consumo e queima por vibração mecânica;\n• Módulo LED de Alta Fidelidade: Emissão de calor <30°C (luz 100% fria); vida útil >50.000 horas; temperatura de cor de 5.500K (branca neutra); Índice de Reprodução de Cor (CRI/IRC) >92; imune a choques mecânicos e vibrações do cabeçote.",
    howItWorks: [
      "1. A bordadeira passa horas trabalhando na máquina e sente a cabeça e os olhos cansados pela luz amarela fraca e quente da lâmpada antiga.",
      "2. Desliga a máquina, retira a lâmpada incandescente antiga de rosca ou baioneta (esperando esfriar para não queimar os dedos).",
      "3. Instala uma lâmpada LED tubular de reposição direta ou uma fita de LED COB de alta potência com soquete compatível.",
      "4. Ao ligar a máquina, a área da agulha é inundada com uma luz branca cristalina sem sombras.",
      "5. O calor ao redor da barra de agulha desaparece completamente.",
      "6. A operadora consegue enxergar o olho da agulha com nitidez total para passar a linha em 2 segundos sem esforço visual.",
      "7. As cores reais das linhas (tons de azul marinho vs. preto) são identificadas sem distorção óptica.",
      "8. Aumenta a produtividade, o conforto ergonômico e a qualidade da inspeção final da peça."
    ],
    beginnerExplanation: "É a luzinha que fica bem em cima da agulha da sua máquina! Antigamente as máquinas vinham com aquelas lâmpadas amarelas que esquentavam tanto que quase queimavam a mão da gente e deixavam a visão cansada. Hoje a gente usa lâmpadas modernas de LED branquinhas que não esquentam nada, iluminam tudo como a luz do sol e deixam você enxergar até o buraquinho da agulha com facilidade!",
    applications: [
      "Iluminação de alta precisão da área da agulha, chapa e calcador durante a produção",
      "Facilitação da passagem manual de linha no olho da agulha em ambientes com pouca luz",
      "Inspeção rigorosa de falhas de ponto, nós e fiapos no tecido durante o bordado",
      "Retrofit e substituição de lâmpadas quentes antigas em máquinas seminovas e industriais"
    ],
    commonErrors: [
      "Tentar trocar a lâmpada antiga incandescente com a máquina ligada na tomada (risco de choque elétrico)",
      "Instalar LEDs de baixíssima qualidade com 'flicker' (efeito estroboscópico que cansa a visão)",
      "Usar lâmpadas halógenas de potência maior que a especificada, derretendo a tampa plástica do cabeçote"
    ],
    troubleshootingTips: [
      "Substitua a lâmpada amarela da sua máquina por uma lâmpada LED equivalente (base BA15D, E12 ou baioneta padrão): custa muito pouco e transforma a experiência de bordar",
      "Escolha SEMPRE LEDs com temperatura de cor 'Branco Neutro / Daylight' (entre 5.000K e 6.000K) para enxergar as cores reais das linhas",
      "Se sua máquina industrial não tiver iluminação forte, adicione uma luminária articulada com base magnética e haste flexível de LED direto no cabeçote",
      "Mantenha a lente plástica do protetor de luz limpa e livre de poeira de entretela"
    ],
    dicaArtrelados: "Uma boa iluminação é o melhor investimento de saúde para as bordadeiras! Trocar a luz da sua máquina por um bom LED branco descansa a sua vista, acaba com a dor de cabeça no fim do dia e deixa você passar a linha na agulha de primeira!",
    voceSabia: "O primeiro uso de lâmpadas elétricas integradas em máquinas de costura foi patenteado pela Singer em 1921 com a famosa luminária 'Singerlight', antes da qual as costureiras e bordadeiras trabalhavam à luz de velas ou lampiões a querosene!",
    practicalExercise: "Olhe para a lâmpada da sua máquina: se ela for amarela e esquentar ao toque, procure uma lâmpada LED compatível no comércio e faça a troca para sentir o alívio imediato na visão!",
    quickSummary: "Substituição de lâmpadas halógenas quentes por iluminação LED fria e de alta fidelidade sobre a agulha.",
    relatedTerms: ["Higienização & Assepsia do Cabeçote", "Haste Fixadora de Agulha", "Agulha de Bordado", "Ergonomia de Bancada"],
    tags: ["h-041", "led", "halogenio", "iluminacao", "cabecote", "ergonomia", "conforto visual", "manutencao", "artrelados"],
    bibliographicReferences: [
      "ERGONOMICS IN APPAREL MANUFACTURING. Optical Illumination & High-CRI LED Standards in Sewing Machinery. London, 2023.",
      "SEWING MACHINE LIGHTING & THERMAL DISSIPATION. Halogen vs. Solid-State LED Performance. Tokyo, 2022.",
      "ARTRELADOS. Ergonomia e Saúde no Ateliê: Como a Iluminação LED Correta Transforma sua Produtividade no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-042-high-density-foam-borracha-eva-para-bordado-3d",
    code: "H-042",
    term: "High-Density Foam & Borracha EVA de Alta Resiliência para Bordado 3D (High-Density EVA Foam for 3D Puffy Embroidery)",
    letter: "H",
    level: "Intermediário 🟡",
    category: "Materiais Especiais & Insumos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês high-density (alta densidade) e foam (espuma polimérica de Etileno-Vinil-Acetato - EVA). Material sintético celular microexpandido.",
    summary: "Placa de espuma EVA especial de alta densidade e corte limpo (2mm a 3mm) colocada sobre o tecido para criar relevos volumosos 3D em bonés e jaquetas.",
    definition: "A Espuma de Alta Densidade e Borracha EVA Especial para Bordado Relevo 3D (High-Density 3D Puffy Embroidery Foam / Microcellular EVA Foam Sheet / Espuma Termocortável para Bordado Tridimensional) é uma folha elastomérica microcelular de polímero EVA formulada especificamente para a técnica de bordado 3D (Puffy Embroidery). Diferente do EVA escolar comum (que é esponjoso, esfarela e deixa fiapos presos nos cantos), o EVA High-Density possui densidade calibrada de 55 a 65 kg/m³, estrutura celular fechada homogênea e capacidade de corte térmico/mecânico limpo pelas perfurações de agulha e atrito da linha, destacando-se perfeitamente dos contornos após o bordado e deixando letras e números com relevo esculpido firme de 2mm a 3mm de altura.",
    technicalDetails: "Propriedades físicas dos materiais:\n• Espessura padrão: 2,0mm, 2,5mm, 3,0mm e 4,0mm;\n• Densidade: 55 a 65 Shore C (alta resiliência e memória elástica);\n• Formulação: 100% Etileno-Vinil-Acetato isento de plastificantes oleosos;\n• Compatibilidade térmica: Autoperfurável a frio e termocauterizável com pistola de ar quente a 180°C para acabamento de micro-arestas.",
    howItWorks: [
      "1. A bordadeira programa a matriz no software com pontos cheios largos, densidade dobrada (0,20mm) e arremates tampados nas pontas (Caps / End Cappings).",
      "2. Monta o boné ou jaqueta no bastidor com entretela grossa de 80g.",
      "3. A máquina executa um ponto corrido de contorno para marcar a posição da letra.",
      "4. A operadora posiciona uma placa de EVA High-Density (na cor idêntica ou similar à linha de bordado) sobre a área.",
      "5. A máquina borda os pontos cheios em altíssima densidade sobre a placa de espuma.",
      "6. A cada descida, a agulha e a linha de poliéster cortam a espuma rente às bordas, encapsulando o interior do relevo.",
      "7. Ao terminar o objeto, a operadora retira a peça e puxa a sobra externa da folha de EVA com as mãos.",
      "8. A espuma externa se desprende facilmente com corte limpo e perfeito.",
      "9. Aplica um jato rápido de ar quente com soprador térmico a 150°C por 3 segundos: qualquer micro-fiapo residual de espuma encolhe para dentro dos fios, restando um relevo 3D impecável de padrão profissional."
    ],
    beginnerExplanation: "É aquela folha de borrachinha especial parecida com EVA que a gente coloca em cima do boné para fazer aquelas letras altas e 'gordinhas' em 3D que todo mundo adora! Quando a máquina borda por cima dela com os pontinhos bem juntinhos, a linha corta a borrachinha nas beiradas e guarda ela todinha embrulhada por dentro. Depois você só puxa a sobra e fica aquele relevo 3D lindo e fofinho parecendo de boné importado de marca famosa!",
    applications: [
      "Bordados em relevo 3D (Puffy) em bonés de aba reta, bonés trucker e gorros de inverno",
      "Letras e números volumosos em jaquetas universitárias (Letterman Jackets) e moletons",
      "Logotipos de marcas esportivas em mochilas, bolsas e equipamentos táticos",
      "Monogramas tridimensionais em almofadas e peças de decoração moderna"
    ],
    commonErrors: [
      "Usar EVA escolar barato de papelaria (ele amassa fácil, esfarela e deixa pedacinhos coloridos vazando por entre os pontos)",
      "Usar cor de EVA diferente da cor da linha (ex: EVA branco com linha preta: o branco aparece nas frestas)",
      "Bordar sem 'tampar' as pontas das letras no software (a espuma fica exposta nas extremidades dos números)"
    ],
    troubleshootingTips: [
      "Use SEMPRE a espuma EVA na mesma cor exata (ou o mais próximo possível) da linha de bordado superior",
      "Digitalize a matriz com densidade de ponto duplo (cerca de 0,20mm a 0,22mm) para encapsular completamente a espuma sem deixar frestas",
      "Use uma agulha ponta fina afiada (SES ou Sharp 75/11 ou 80/12) para que os furos cortem a espuma com facilidade",
      "Utilize um soprador térmico profissional ou secador de cabelo bem quente nas pontinhas após puxar a espuma para dar o acabamento liso final"
    ],
    dicaArtrelados: "O bordado 3D em bonés é o produto mais valorizado e desejado pelos clientes! Usar o EVA de alta densidade certo com a matriz bem calibrada é o segredo para cobrar o triplo por um boné e ter clientes fazendo fila no seu ateliê!",
    voceSabia: "A técnica de bordado tridimensional com espuma EVA (Puffy Foam) foi criada no Japão na década de 1980 e explodiu mundialmente quando a Major League Baseball (MLB) nos EUA adotou o relevo 3D nos bonés oficiais dos New York Yankees!",
    practicalExercise: "Pegue um pedaço de EVA de alta densidade: programe uma letra em ponto cheio bem denso no seu software, borde sobre uma sarja e sinta o relevo espetacular com as pontas perfeitamente cortadas!",
    quickSummary: "Folha de espuma EVA de alta densidade colocada sobre o tecido para criar relevos volumosos 3D em bonés.",
    relatedTerms: ["Ponto Cheio / Ponto Satin", "Compensação de Repuxo", "Feltro Estruturador de Emblemas", "Hot-Melt & Termocolante Permanente"],
    tags: ["h-042", "eva 3d", "puffy foam", "bordado 3d", "relevo", "bones", "alta densidade", "insumos", "artrelados"],
    bibliographicReferences: [
      "3D EMBROIDERY FOAM ENGINEERING STANDARDS. Microcellular EVA Density & Heat Shrink Finishing. Chicago, 2023.",
      "HEADWEAR EMBELLISHMENT MANUAL. 3D Puff Digitizing, End-Capping & Density Balance. New York, 2022.",
      "ARTRELADOS. O Segredo dos Bonés 3D Perfeitos: Do Software ao Acabamento Térmico com EVA de Alta Densidade. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

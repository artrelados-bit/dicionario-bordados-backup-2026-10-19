import { Verbete } from "../types";

export const VERBETES_LETTER_F_PART7: Verbete[] = [
  {
    id: "f-037-funcao-espelhamento-inversao-de-matriz",
    code: "F-037",
    term: "Função Espelhamento / Inversão de Matriz (Mirror Image / Horizontal & Vertical Flip)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Funções da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim specularis (relativo a espelho) e invertere (virar para o lado oposto). Operação matemática matricial de reflexão no plano cartesiano (X -> -X ou Y -> -Y) incorporada aos softwares e painéis digitais de bordado.",
    summary: "Recurso no painel da máquina ou software que inverte a orientação do desenho horizontal ou verticalmente, criando pares simétricos perfeitos de arabescos e ramos.",
    definition: "A Função Espelhamento (Mirror Image / Flip Horizontal / Flip Vertical) é uma operação geométrica digital disponível nos painéis das máquinas de bordar e softwares de edição que inverte instantaneamente as coordenadas X e/ou Y de todos os pontos de uma matriz de bordado. O espelhamento horizontal (Horizontal Flip) reflete a imagem no eixo vertical (esquerda torna-se direita), sendo fundamental para a confecção de pares simétricos de arabescos, asas de anjo, ramos florais em golas de camisas, lados esquerdo e direito de sapatos ou tênis e peças de lingerie.",
    technicalDetails: "Transformação cartesiana: no espelhamento horizontal, cada coordenada (x, y) é multiplicada por (-1, 1); no vertical por (1, -1). A ordem de costura e o sentido de compensação de repuxo são recalculados automaticamente para preservar a integridade da formação das laçadas.",
    howItWorks: [
      "1. A bordadeira seleciona a matriz de um ramo floral no painel da máquina de bordar.",
      "2. Borda o ramo no lado esquerdo de uma toalha de mesa ou gola de camisa.",
      "3. Sem precisar voltar ao computador, toca no ícone de 'Espelhamento Horizontal' (geralmente dois triângulos ou setas opostas refletidas).",
      "4. A máquina inverte a orientação do desenho na tela instantaneamente, mantendo exatamente as mesmas dimensões, cores e densidades.",
      "5. O bastidor é posicionado no lado direito da peça.",
      "6. A máquina executa o bordado: os dois lados formam uma simetria clássica impecável, de alta precisão estética."
    ],
    beginnerExplanation: "É o botãozinho no visor da máquina que vira o desenho para o outro lado como se estivesse olhando no espelho! Se você bordou um passarinho olhando para a direita e quer fazer outro passarinho olhando para a esquerda para formar um parzinho, você aperta esse botão e a máquina inverte o desenho na hora sem você precisar ir no computador!",
    applications: [
      "Bordados em pares simétricos (golas de camisas, lapelas, punhos e laterais de vestidos)",
      "Bordados em calçados, chinelos de quarto, pantufas e tênis (pé direito e pé esquerdo)",
      "Arabescos e cantoneiras simétricas em jogos de cama, toalhas de banho e caminhos de mesa",
      "Ramos florais, folhas e elementos decorativos em enxovais de bebê"
    ],
    commonErrors: [
      "Espelhar por engano matrizes que contenham letras, nomes ou números legíveis, fazendo o texto ficar escrito ao contrário (efeito espelho ilegível)",
      "Espelhar desenhos assimétricos de logotipos oficiais protegidos por marca sem autorização do manual de identidade visual",
      "Esquecer de conferir o novo alinhamento com a função Trace após espelhar a matriz"
    ],
    troubleshootingTips: [
      "NUNCA use a função de espelhamento em matrizes que tenham monogramas, nomes próprios ou datas escritas",
      "Ao bordar peças em pares (ex: duas toalhas de banho para casal), espelhe os arabescos florais para que eles fiquem voltados um para o outro no banheiro",
      "Sempre execute o Trace após espelhar para garantir que o desenho refletido continue perfeitamente centralizado na barra"
    ],
    dicaArtrelados: "Para fazer jogos de toalhas de casal de luxo, use o espelhamento nos arabescos decorativos das laterais! O desenho voltado um para o outro no suporte de toalhas do banheiro dá aquela harmonia visual clássica de hotel 5 estrelas que valoriza o seu produto!",
    voceSabia: "Na digitalização profissional de brasões nobres medievais e estandartes heráldicos, animais sagrados (como leões e águias) nunca podiam ser espelhados arbitrariamente, pois virar um animal para a esquerda (Sinister) no brasão significava bastardia ou desonra na cavalaria antiga!",
    practicalExercise: "Abra um desenho de arabesco na tela da sua máquina, aperte o botão de espelho horizontal e observe como a orientação se inverte na hora: faça o teste de Trace nos dois sentidos para comparar o enquadramento!",
    quickSummary: "Função que inverte o desenho horizontal ou verticalmente para criar pares simétricos perfeitos em golas, toalhas e calçados.",
    relatedTerms: ["Função Trace / Contorno Prévio", "Função Redimensionamento no Painel", "Software de Digitalização"],
    tags: ["f-037", "funcao espelhamento", "mirror image", "flip horizontal", "simetria", "arabescos", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES LTD. Pattern Rotation, Mirror Image and Layout Controls Guide. Nagoya, 2023.",
      "JANOME SEWING MACHINE CO. LTD. Memory Craft On-Screen Pattern Manipulation Manual. Tokyo, 2022.",
      "ARTRELADOS. Harmonia e Simetria no Design de Bordados para Enxovais. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-038-funcao-redimensionamento-painel-da-maquina",
    code: "F-038",
    term: "Função Redimensionamento no Painel da Máquina (On-Screen Resizing & Stitch Recalculation)",
    letter: "F",
    level: "Intermediário 🟡",
    category: "Funções da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim re (novamente) e dimensio (medida proporcional). Algoritmo de interpolação escalar e interpolação de pontos inserido nos sistemas embarcados das máquinas nos anos 2000.",
    summary: "Recurso no painel que permite aumentar ou diminuir o tamanho da matriz, exigindo atenção aos limites seguros de densidade para não danificar o bordado.",
    definition: "A Função Redimensionamento no Painel (On-Screen Resizing / Scale Adjustment) é o comando de alteração dimensional que permite à bordadeira aumentar ou reduzir a escala percentual de uma matriz de bordado diretamente no visor touchscreen da máquina. Divide-se em dois tipos tecnológicos: 1) Redimensionamento Simples de Escala (presente em modelos básicos), que apenas estica ou encurta o comprimento dos pontos existentes sem alterar a contagem total de pontos (seguro apenas na faixa de ±10% a ±15%); 2) Redimensionamento com Recálculo Inteligente de Densidade (Stitch Recalculation / Stitch Processor, presente em máquinas modernas e semi-industriais), que recalcula e adiciona ou remove pontos matematicamente para manter a densidade perfeita mesmo em alterações de até 20% a 30%.",
    technicalDetails: "Regra de ouro de segurança de redimensionamento simples: Limite seguro máximo: +15% (acima disso os pontos ficam ralos e o tecido aparece por baixo); Limite seguro mínimo: -15% (abaixo disso os pontos ficam ultracompactos, empedrados, quebrando agulhas e cortando o tecido). Para alterações maiores que 20%, o redimensionamento deve ser feito no software no computador a partir do arquivo vetorial (.EMB).",
    howItWorks: [
      "1. A bordadeira carrega o arquivo no visor da máquina e percebe que o desenho tem 11x11cm, mas seu bastidor é 10x10cm.",
      "2. Acessa o menu de 'Edição / Tamanho' no visor touchscreen.",
      "3. Toca no botão de redução proporcional em 10% (o desenho passa para 9,9x9,9cm).",
      "4. Se a máquina possuir recálculo automático de pontos, o processador recalcula os micro-pontos ajustando a densidade.",
      "5. A bordadeira confere o enquadramento seguro com a função Trace.",
      "6. A máquina executa o bordado perfeitamente adaptado ao espaço disponível."
    ],
    beginnerExplanation: "É o botão de lupa com '+' e '-' no visor da máquina que serve para aumentar ou encolher um pouquinho o tamanho do desenho! Dica muito importante: só aumente ou diminua no máximo 10% na máquina. Se você diminuir muito, a costura vira uma pedra dura que quebra a agulha; e se aumentar muito, o bordado fica ralo e cheio de buraco!",
    applications: [
      "Pequenos ajustes de enquadramento para fazer a matriz caber com folga segura dentro do bastidor",
      "Adequação de tamanhos de monogramas em bolsos pequenos ou faixas estreitas de toalha",
      "Ajuste proporcional de elementos decorativos para harmonizar com outras matrizes na mesma montagem",
      "Correção rápida de escala sem necessidade de ligar o computador no meio da produção"
    ],
    commonErrors: [
      "Reduzir uma matriz pesada em 40% no visor de uma máquina simples sem recálculo de pontos, concentrando 20.000 pontos em uma área minúscula e quebrando a agulha no bloco empedrado de linha",
      "Aumentar uma matriz em 50% direto na máquina, deixando os pontos cheios com frestas enormes e sem cobertura do tecido",
      "Redimensionar apenas no eixo X sem manter o cadeado de proporção travado, distorcendo o formato original do desenho"
    ],
    troubleshootingTips: [
      "Mantenha sempre travada a opção 'Proporcional' (ícone de cadeado ou expansão simétrica) para não deformar o desenho",
      "Nas máquinas Brother com tecnologia de recálculo (série BP, Stellaire, Luminaire), certifique-se de que o modo de recálculo de pontos esteja ativado na tela de edição",
      "Para redimensionamentos grandes (acima de 20%), abra o arquivo no software no computador, ajuste o tamanho e deixe o programa recalcular a densidade de ponto (0.40mm) perfeitamente"
    ],
    dicaArtrelados: "Precisa diminuir o nome para caber na toalhinha de boca? Se for só um tiquinho (até 10%), faça direto no visor da máquina com o botãozinho de tamanho. Mas se precisar encolher ou aumentar muito, faça sempre no computador! Assim o bordado fica sempre macio, fofinho e com cobertura impecável!",
    voceSabia: "Quando você redimensiona um arquivo de máquina puro (.PES ou .DST) no painel de uma máquina tradicional, cada ponto de costura se aproxima fisicamente do vizinho: diminuir uma matriz pela metade dobra a densidade por milímetro quadrado, quadruplicando a força de impacto sobre a agulha!",
    practicalExercise: "Abra uma matriz na sua máquina, diminua em 5% no painel e observe a nova contagem de dimensões em milímetros: confira no Trace como ela agora tem mais folga dentro do aro!",
    quickSummary: "Recurso no painel para aumentar ou diminuir a matriz proporcionalmente, seguro dentro do limite de ±10% a ±15%.",
    relatedTerms: ["Densidade de Ponto", "Software de Digitalização", "Função Trace / Contorno Prévio", "Empedramento do Bordado"],
    tags: ["f-038", "redimensionamento", "painel da maquina", "escala", "recalculo de pontos", "densidade", "artrelados"],
    bibliographicReferences: [
      "BERNINA INTERNATIONAL AG. On-Screen Resizing & Stitch Density Processing. Steckborn, 2023.",
      "BROTHER INDUSTRIES LTD. Innov-is Stitch Density & Scaling Functions Guide. Nagoya, 2022.",
      "ARTRELADOS. O Limite Seguro do Redimensionamento no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-039-funcao-corte-de-linha-automatico",
    code: "F-039",
    term: "Função Corte de Linha Automático (Auto Thread Trimming / Jump Trimmer)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Funções da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim curtare (cortar, encurtar) e do grego automatos (que age por si próprio). Mecanismo eletromecânico com guilhotina e solenóide patenteado no Japão pela Tajima e Brother nos anos 1980.",
    summary: "Sistema mecânico automatizado que corta a linha superior e inferior após cada salto ou troca de cor, entregando o bordado limpo sem fios soltos.",
    definition: "A Função Corte de Linha Automático (Auto Trimmer / Automatic Thread Trimming System) é um dos subsistemas mecatrônicos mais avançados e valorizados das máquinas de bordar modernas. Composto por uma lâmina fixa e uma faca móvel operadas por um solenóide ou servomotor debaixo da chapa de agulha, sincronizado com o mecanismo de retenção de linha superior. Sempre que o arquivo de bordado envia um comando de corte ('Trim') ou quando a máquina atinge a distância de salto programada (geralmente saltos maiores que 3mm a 5mm entre letras), a máquina desacelera, executa o arremate, a faca móvel avança, puxa as duas linhas (superior e bobina) e as corta rente ao tecido.",
    technicalDetails: "Componentes mecânicos: Faca móvel (Movable Knife), contra-faca fixa (Fixed Knife), solenóide de acionamento e mola de pressão. Comprimento do rabo de linha após corte: regulável entre 1,5mm e 3,0mm. Particularidade: economiza até 80% do tempo de acabamento manual de limpeza de fios no ateliê.",
    howItWorks: [
      "1. A máquina termina de bordar uma letra e precisa saltar 10mm para iniciar a próxima letra.",
      "2. O processador lê o comando de corte e dispara a sequência de amarração de arremate (Tie-Off).",
      "3. A máquina freia a rotação e para a agulha na posição superior.",
      "4. Em fração de segundo debaixo da chapa, a faca móvel avança em formato de gancho, laça o fio superior e o fio de bobina e os pressiona contra a lâmina fixa afiada.",
      "5. As duas linhas são cortadas rente.",
      "6. Um pequeno prendedor de linha no cabeçote superior segura a ponta para que ela não escape do olho da agulha no próximo disparo.",
      "7. O pantógrafo salta para a próxima letra e recomeça a costura de forma 100% limpa."
    ],
    beginnerExplanation: "É a tesourinha automática que fica escondida debaixo da chapa da sua máquina! Toda vez que a máquina termina uma letra e vai para a outra, ela mesma corta a linha por cima e por baixo com uma navalhinha em menos de um segundo. Assim você não precisa ficar cortando um milhão de fiapos na tesourinha de mão quando o bordado acaba!",
    applications: [
      "Bordado de textos, frases, nomes e alfabetos com múltiplas letras separadas",
      "Matrizes multicoloridas complexas com centenas de trocas de posição e elementos isolados",
      "Produção industrial de alta produtividade em uniformes e confecções",
      "Acabamento limpo de alto padrão em enxovais finos de bebê"
    ],
    commonErrors: [
      "Não limpar os fiapos de linha acumulados na caixinha de corte debaixo da chapa de agulha, fazendo a lâmina mastigar o fio em vez de cortar",
      "Usar faca cega ou gasta que não corta o fio de bobina, travando a lançadeira no salto seguinte",
      "Desativar o corte de linha automático no painel achando que economiza tempo, tendo que passar 20 minutos cortando linhas com tesoura na mão depois"
    ],
    troubleshootingTips: [
      "Retire a chapa de agulha uma vez por semana e limpe com um pincel macio toda a poeira e fiapos ao redor da lâmina de corte",
      "Nas configurações da máquina, ajuste a sensibilidade de corte para 'Saltos maiores que 3mm'",
      "Se a máquina fizer o barulho de corte ('clack') mas não cortar o fio, limpe a lâmina com álcool isopropílico ou solicite a afiação/troca da contra-faca ao técnico"
    ],
    dicaArtrelados: "O corte automático de linha é o maior parceiro da sua produtividade! Mantenha a área da chapa sempre limpinha e sem fiapos: com as lâminas cortando afiadas, suas peças saem da máquina limpas, perfeitas e prontas para embalar e entregar para a cliente!",
    voceSabia: "Antes da invenção do corte automático de linha nos anos 1980, as fábricas de bordado empregavam equipes inteiras de dezenas de funcionárias conhecidas como 'limpadoras de bordado', que passavam o dia todo cortando manualmente com tesourinhas os fios de salto entre cada letra!",
    practicalExercise: "Borde um nome com 5 letras separadas com a função de corte ativada: observe a agilidade mecânica da navalha cortando a linha em cada salto e veja como o verso sai praticamente limpo!",
    quickSummary: "Mecanismo automático de navalha que corta os fios superior e inferior nos saltos entre letras e trocas de cor.",
    relatedTerms: ["Salto de Ponto / Jump Stitch", "Fechamento de Ponto / Tie-Off", "Chapa de Agulha", "Lançadeira Rotativa"],
    tags: ["f-039", "corte automatico", "thread trimming", "trimmer", "navalha", "produtividade", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES LTD. Mechanical Trimming System & Knife Maintenance Guide. Nagoya, 2023.",
      "TAJIMA GROUP. Industrial Automatic Thread Trimmer & Wiper Mechanism Manual. Nagoya, 2022.",
      "ARTRELADOS. Manutenção Preventiva e Cuidados com o Sistema de Corte de Linha. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-040-funcao-sensor-de-fio-quebrado",
    code: "F-040",
    term: "Função Sensor de Fio Quebrado (Upper & Lower Thread Break Sensor)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Funções da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim sensus (sentido, percepção). Sensores optoeletrônicos com emissores infravermelhos e codificadores de pulso rotativos desenvolvidos nos anos 1980 para interrupção de emergência em bordadeiras.",
    summary: "Sistema de monitoramento óptico e mecânico que detecta instantaneamente quando a linha superior ou de bobina arrebenta ou acaba, pausando a máquina na hora.",
    definition: "A Função Sensor de Fio Quebrado (Upper and Lower Thread Sensor / Rotational Thread Detector) é o sistema de segurança eletrônico ativo que monitora o fluxo contínuo das linhas durante o bordado. Divide-se em dois sensores vitais: 1) Sensor Superior (Upper Thread Sensor), composto por uma roldana óptica com fendas codificadas ou sensor piezoelétrico por onde passa o fio de cima: se a linha arrebentar ou o cone travar, a roldana para de girar e a máquina interrompe a costura em 2 a 3 pontos; 2) Sensor de Linha de Bobina (Bobbin Thread Sensor), composto por feixe de luz infravermelha que mede o volume restante de fio na carretilha inferior ou detecta a ausência de tensão na laçada, avisando no visor antes que o fio acabe no meio de uma letra.",
    technicalDetails: "Tempo de resposta de parada: menos de 0,05 segundos (interrupção mecânica imediata). Calibração de sensibilidade: ajustável nos menus técnicos de 1 (muito sensível) a 5 (tolerante). Quando disparado, aciona sinal sonoro (bip) e exibe mensagem de alerta na tela com indicação visual para recuar os pontos perdidos.",
    howItWorks: [
      "1. Durante o bordado a 800 PPM, o fio superior gira a roldana do sensor óptico enviando pulsos elétricos constantes à placa-mãe.",
      "2. Se a linha quebrar ou escapar do olho da agulha, a roldana para de enviar pulsos.",
      "3. O microprocessador detecta a parada em 2 milissegundos e aciona o freio eletromagnético da máquina.",
      "4. A máquina para, apita e mostra no visor: 'A linha superior quebrou. Por favor, passe a linha novamente'.",
      "5. A bordadeira repassa a linha na agulha.",
      "6. Toca no botão de 'Recuar 10 pontos' no visor para voltar exatamente ao ponto onde o fio partiu.",
      "7. Aperta o botão Start: o bordado continua sem nenhum espaço em branco ou falha na peça."
    ],
    beginnerExplanation: "É o 'alarme salva-vidas' da sua máquina! Se a linha de cima quebrar ou se a linha da bobina acabar lá embaixo, a máquina percebe na hora, para de bordar sozinha e dá um apito na tela avisando você. Ela não fica costurando no vento sem linha estragando o seu trabalho!",
    applications: [
      "Proteção de 100% dos bordados contra falhas e buracos por falta de linha",
      "Aviso preventivo de fim de linha de bobina antes de iniciar um bloco grande de pontos",
      "Bordados em produção contínua onde a bordadeira opera múltiplas máquinas ao mesmo tempo",
      "Recuo milimétrico de pontos para recomposição invisível de quebras"
    ],
    commonErrors: [
      "Passar a linha fora do trilho da roldana do sensor, fazendo a máquina apitar direto acusando quebra de linha falsa mesmo com a linha inteira",
      "Deixar poeira e fiapos acumulados sobre o olho óptico infravermelho do sensor de bobina",
      "Não recuar os 5 a 10 pontos necessários após repassar a linha, deixando um espacinho vazio sem costura no meio do bordado"
    ],
    troubleshootingTips: [
      "Se a máquina estiver apitando dizendo 'linha quebrada' mesmo com a linha perfeita, retire a linha e passe novamente garantindo que ela entre bem fundo no disco do sensor",
      "Limpe a área da caixa de bobina com um pincel macio para remover poeira que possa estar cobrindo o sensor infravermelho",
      "Sempre use o botão '-10 pontos' na tela após repassar a linha para sobrepor os pontos perfeitamente sem deixar emendas aparentes"
    ],
    dicaArtrelados: "A máquina apitou que a linha quebrou? Não se desespere! Repasse a linha com calma, use o botãozinho de voltar 5 a 10 pontinhos no visor da máquina e aperte o Start. A máquina vai cobrir o espacinho certinho e o bordado fica impecável sem ninguém notar que a linha quebrou ali!",
    voceSabia: "Nas máquinas industriais multi-cabeças gigantes de 20 cabeças, cada agulha tem um sensor individual e se a linha arrebentar em apenas uma cabeça, a máquina inteira é pausada automaticamente para garantir que nenhuma peça saia com defeito!",
    practicalExercise: "Durante um bordado em retalho, corte propositalmente a linha superior acima da agulha: veja como a máquina para em menos de 3 pontos e exibe a mensagem de aviso no visor!",
    quickSummary: "Sistema eletrônico que monitora as linhas superior e inferior, parando a máquina na hora se houver quebra ou fim de carretel.",
    relatedTerms: ["Passagem de Linha", "Caixa de Bobina", "Tensão Superior da Linha", "Painel Touchscreen"],
    tags: ["f-040", "sensor de fio", "linha quebrada", "sensor de bobina", "seguranca", "painel", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES LTD. Electronic Troubleshooting & Thread Sensor Calibration. Nagoya, 2023.",
      "JANOME SEWING MACHINE CO. LTD. Optical & Mechanical Sensor Diagnostics. Tokyo, 2022.",
      "ARTRELADOS. Guia de Sensores e Diagnósticos Eletrônicos da Máquina de Bordar. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-041-funcao-troca-de-cor-sequencial",
    code: "F-041",
    term: "Função Troca de Cor Sequencial / Classificação de Cores (Color Sorting / Sequential Color Change)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Funções da Máquina",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim sequens (que se segue ordenadamente) e do francês trier (classificar, agrupar). Algoritmo de otimização de matrizes desenvolvido para softwares e painéis nos anos 1990 para reduzir o tempo ocioso de trocas manuais de carretel.",
    summary: "Recurso inteligente que agrupa e borda todas as partes da mesma cor juntas de uma só vez, economizando dezenas de trocas manuais de carretel.",
    definition: "A Função Troca de Cor Sequencial e Classificação de Cores (Color Sorting / Color Grouping Optimization) é uma ferramenta algorítmica disponível em softwares de bordado e nos painéis de máquinas avançadas. Ao montar uma composição com múltiplos desenhos ou matrizes repetidas no mesmo bastidor (como 6 chaveiros ITH ou várias letras de uma frase), a matriz original teria que trocar de cor dezenas de vezes. O Color Sorting analisa inteligentemente a hierarquia de sobreposição das camadas e agrupa todas as etapas da mesma cor que não dependam de ordem de cobertura, permitindo que a bordadeira use o cone de uma cor uma única vez para costurar todos os elementos idênticos do bastidor.",
    technicalDetails: "Ganho de produtividade: reduz o tempo total de produção em até 50% a 70% em montagens múltiplas. Proteção de camadas: o algoritmo preserva estritamente a ordem de sobreposição (Underlay -> Preenchimento Tatami -> Ponto Cheio -> Contorno Final) para evitar que contornos fiquem enterrados debaixo de preenchimentos.",
    howItWorks: [
      "1. A bordadeira duplica 4 matrizes de chaveirinho no mesmo bastidor 13x18cm.",
      "2. Originalmente, cada chaveiro tinha 5 trocas de cor (totalizando 20 paradas manuais de troca de linha na máquina).",
      "3. A bordadeira clica na função 'Color Sort / Agrupar Cores' no software ou no painel da máquina.",
      "4. O programa reorganiza as camadas: costura a marcação dos 4 chaveiros juntos, depois o aplique dos 4 juntos, o ponto cheio dos 4 e o contorno final de todos juntos.",
      "5. As paradas para troca de carretel caem de 20 para apenas 5 trocas.",
      "6. A produção de múltiplos itens finaliza na metade do tempo com muito menos esforço manual."
    ],
    beginnerExplanation: "É a função de 'juntar as cores iguais' para você não ter que ficar trocando de carretel toda hora! Se você vai bordar 4 chaveirinhos ou uma frase cheia de letrinhas no mesmo bastidor, essa função borda todas as partes vermelhas de uma vez só, depois todas as partes azuis, depois as amarelas. Você economiza um tempão sem ficar trocando de linha a cada 2 minutos!",
    applications: [
      "Produção de chaveiros, tags e patches múltiplos no mesmo bastidor (In-The-Hoop)",
      "Bordados em série de logotipos pequenos em camisetas e uniformes",
      "Montagens de nomes compostos e monogramas com elementos florais repetidos",
      "Otimização de tempo em ateliês com alta demanda de pedidos de lembrancinhas"
    ],
    commonErrors: [
      "Aplicar o Color Sort de forma forçada e cega em desenhos complexos sobrepostos, fazendo o contorno de uma flor ser bordado antes das pétalas e ser coberto por cima",
      "Esquecer de conferir a simulação na tela antes de iniciar o bordado em série",
      "Não conferir as paradas de corte do tecido de aplique ao agrupar cores de matrizes de aplique"
    ],
    troubleshootingTips: [
      "Ao usar o Color Sort em projetos de aplique ou chaveiros ITH, verifique se a máquina continua parando na hora de recortar o tecido e na hora de colocar o forro no verso",
      "Em softwares como Wilcom, Embird ou PE-Design, use o comando 'Color Sort' sempre como o último passo antes de salvar a matriz final para a máquina",
      "Assista à simulação do player de bordado no computador para ter certeza de que nenhuma ordem de sobreposição visual foi quebrada"
    ],
    dicaArtrelados: "Vai fazer lembrancinhas de aniversário ou chaveiros em quantidade? Coloque vários no mesmo bastidor e passe o 'Color Sort'! Em vez de trocar de linha 30 vezes, você troca apenas 4 ou 5 vezes e produz uma cartela inteira de chaveiros em minutos!",
    voceSabia: "Em máquinas industriais multi-cabeças com troca automática de agulhas por solenóides, o Color Sorting é obrigatório para reduzir o desgaste mecânico dos cabeçotes e aumentar a vida útil dos motores!",
    practicalExercise: "Monte duas matrizes iguais lado a lado no seu software de bordado: execute o comando 'Color Sort' e veja a lista de cores do lado direito reduzir de 8 para 4 cores instantaneamente!",
    quickSummary: "Função que agrupa as partes da mesma cor no bastidor, reduzindo drasticamente as trocas manuais de carretel.",
    relatedTerms: ["Bordado no Bastidor / In-The-Hoop (ITH)", "Software de Digitalização", "Função Corte de Linha Automático"],
    tags: ["f-041", "troca de cor", "color sorting", "agrupar cores", "produtividade", "chaveiros ith", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Color Optimization and Sequence Sorting Manual. Sydney, 2023.",
      "BROTHER INDUSTRIES LTD. PE-Design Color Sort & Batch Processing Guide. Nagoya, 2022.",
      "ARTRELADOS. Produção em Massa e Otimização de Cores no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-042-fuso-de-bobinamento-enchedor-de-bobina",
    code: "F-042",
    term: "Fuso de Bobinamento / Enchedor de Bobina (Bobbin Winder Spindle & Assembly)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim fusus (haste giratória em espiral para fiar e enrolar linho e lã). Mecanismo de fricção giratório criado no século XIX e integrado com motor independente nas máquinas eletrônicas modernas.",
    summary: "Pino giratório no topo da máquina acoplado a um disco tensor que enrola o fio na bobina de forma uniforme, rápida e com a tensão correta.",
    definition: "O Fuso de Bobinamento / Enchedor de Bobina (Bobbin Winder Spindle Assembly) é o subsistema mecânico localizado na parte superior da carcaça da máquina de bordar, responsável pelo enchimento rápido, homogêneo e perfeitamente tensionado das carretilhas/bobinas plásticas ou metálicas. Composto por um eixo cilíndrico giratório com mola de expansão (fuso), disco pré-tensor de bobinamento com mola calibrada e sensor de parada automática de curso (limitador mecânico ou óptico). Garante que as espiras de fio de poliéster 60wt fiquem assentadas em camadas paralelas e firmes, essenciais para a regularidade da tensão do bordado.",
    technicalDetails: "Velocidade de bobinamento: cerca de 1.500 a 3.000 RPM. Em máquinas semi-industriais e domésticas avançadas (como Brother BP2150 ou Janome 550E), o enchedor possui motor independente, permitindo encher novas bobinas de linha enquanto a máquina continua bordando ininterruptamente.",
    howItWorks: [
      "1. A bordadeira coloca a bobina vazia no pino do fuso de bobinamento.",
      "2. Conduz a linha do carretel grande passando em volta do disco pré-tensor de bobinamento (formando o cruzamento em '8' ou encaixe sob a mola).",
      "3. Passa a pontinha da linha pelo furinho da bobina e empurra o fuso para a direita (posição de engate).",
      "4. Aperta o botão Start ou aciona o pedal: o fuso gira em altíssima rotação enrolando a linha com distribuição uniforme de cima a baixo.",
      "5. Quando a bobina atinge o diâmetro máximo pré-determinado, a alavanca limitadora desarma o motor automaticamente.",
      "6. A bordadeira corta a linha na navalha lateral e desengata a bobina pronta para uso com tensão perfeita."
    ],
    beginnerExplanation: "É aquele pininho que fica em cima da sua máquina onde você encaixa a carretilha vazia para encher de linha! Você passa a linha no disquinho de cima, empurra o pininho para o lado e liga: ele gira super rápido e enche a carretilha todinha de forma retinha e para sozinho quando ela fica cheia!",
    applications: [
      "Enchimento de carretilhas com fio de bobina ultrafino 60wt / 80wt para o uso diário",
      "Enchimento de bobinas com fios coloridos idênticos ao superior para a confecção de rendas FSL",
      "Preparação antecipada de estoques de bobinas cheias para produção contínua no ateliê",
      "Enchimento simultâneo com motor independente durante o bordado de peças longas"
    ],
    commonErrors: [
      "Não passar a linha pelo disco pré-tensor no topo da máquina, fazendo a bobina encher frouxa e 'mole', o que gera embolamento gigante embaixo do tecido durante o bordado",
      "Encher a bobina com excesso de linha até raspar nas paredes da caixa de lançadeira, travando a rotação",
      "Usar bobinas tortas, trincadas ou com rebarbas no fuso giratório"
    ],
    troubleshootingTips: [
      "Faça o teste de dureza da bobina: aperte a bobina cheia com o polegar. Ela deve estar firme e dura como uma pedra (se estiver fofa e macia como algodão, jogue fora e encha novamente passando firme no disco tensor)",
      "Certifique-se de que a linha preencha a bobina de forma reta de cima a baixo sem formar formato de cone ou barriga",
      "Se o enchedor estiver enchendo torto (mais linha em cima do que embaixo), ajuste a altura do disco tensor com uma chave de fenda conforme o manual"
    ],
    dicaArtrelados: "O segredo para nunca ter problemas de tensão e bordado enrugado começa no enchedor de bobina! Passe a linha bem firme no disquinho tensor de cima: a bobina precisa ficar bem durinha e retinha. Uma bobina bem cheia é meio caminho andado para um bordado perfeito!",
    voceSabia: "Nas primeiras máquinas de costura do século XIX, o enchedor de bobina era acionado encostando uma rodinha de borracha diretamente contra a correia de couro giratória acionada pelos pés da costureira no pedal de ferro!",
    practicalExercise: "Encha uma bobina na sua máquina: aperte o corpo da linha com os dedos para conferir a firmeza e coloque na caixa de bobina para testar a suavidade do giro!",
    quickSummary: "Pino giratório e sistema tensor no topo da máquina responsável por encher as carretilhas de forma firme e homogênea.",
    relatedTerms: ["Fio de Bobina / Linha de Baixo", "Caixa de Bobina", "Tensão da Bobina", "Lançadeira Rotativa"],
    tags: ["f-042", "fuso de bobinamento", "enchedor de bobina", "carretilha", "bobbin winder", "componentes", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES LTD. Bobbin Winding & Pre-Tension Mechanism Maintenance. Nagoya, 2023.",
      "JANOME SEWING MACHINE CO. LTD. Bobbin Winder Calibration & Drive Motor Service Manual. Tokyo, 2022.",
      "ARTRELADOS. O Guia Perfeito do Enchimento e Calibração de Bobinas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART6: Verbete[] = [
  {
    id: "i-031-injecao-de-ponto-e-micropasso-de-compensacao-quinas",
    code: "I-031",
    term: "Injeção de Ponto & Micropasso de Compensação em Quinas (Micro-Stitch Injection & Corner Miter Compensation)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim injectio (lançamento para dentro) e do francês onglet (quina em esquadro/meia-esquadria). Algoritmo de interpolação geométrica de curvas acentuadas.",
    summary: "Algoritmo que insere pequenos micropassos de agulha em quinas pontiagudas e curvas fechadas para evitar furos repetidos no mesmo buraco do tecido.",
    definition: "A Injeção de Ponto e Micropasso de Compensação em Quinas Agudas (Micro-Stitch Injection / Corner Short Stitching & Mitered Angle Interpolation) é o algoritmo matemático de digitalização que atua em esquinas angulares estreitas (ângulos menores que 90° em letras e estrelas) e em curvas fechadas de ponto cheio (Satin). Em vez de convergir todas as penetrações da borda interna para um único vértice comum (o que faria a agulha bater 10 a 20 vezes no mesmo ponto, rasgando o tecido, quebrando a linha e criando um calombo duro), o sistema 'injeta' micropontos alternados e passos encurtados (Short Stitches / Pontos Curtos) em leque, distribuindo as perfurações uniformemente ao longo do vértice e gerando cantos pontiagudos perfeitamente afiados e limpos.",
    technicalDetails: "Mecânica do algoritmo de micropasso em quinas:\n• Algoritmo de Pontos Curtos (Smart Corner / Short Stitch): Encurtamento progressivo de 20%, 40%, 60% e 80% do comprimento do ponto no raio interno;\n• Divisão em Meia-Esquadria (Mitered Corner Joint): Separação da coluna em duas seções unidas a 45° por costura em bisel;\n• Redução de concentração de agulhadas: Diminuição de até 70% da densidade mecânica pontual no vértice;\n• Limiar de ângulo de disparo: Ativação automática para cantos entre 15° e 75° de inclinação.",
    howItWorks: [
      "1. O programador está digitalizando a ponta afiada da letra 'N' ou o vértice superior de uma estrela de 5 pontas.",
      "2. Se ele usar ponto cheio comum sem compensação, a borda externa terá 4mm de comprimento e o vértice interno terá 0mm (todos os pontos convergem para o mesmo buraco).",
      "3. Ele ativa a função 'Cantos Inteligentes / Smart Corners' com Injeção de Micropasso.",
      "4. O software calcula o espaçamento e injeta pontos alternados: um ponto vai até a borda, o próximo para no meio do caminho, o terceiro vai até a borda, o quarto para no meio.",
      "5. Na máquina de bordar, a agulha costura a quina sem perfurar o mesmo ponto duas vezes.",
      "6. A ponta da estrela fica nítida e afiada como uma lâmina, sem embolar fios e sem rasgar o tecido de suporte.",
      "7. Ao toque dos dedos, a quina é macia e plana, sem aquele nó duro saliente.",
    ],
    beginnerExplanation: "Quando a máquina vai bordar a ponta afiada de uma letra (como a ponta da letra 'A' ou de uma estrela), se ela não for inteligente, ela vai dar 20 agulhadas exatamente no mesmo buraquinho do pano, fazendo um rasgo no tecido ou quebrando a agulha! Esse recurso do programa faz a agulha dar 'passinhos curtos' inteligentes: uma agulhada vai na ponta, a outra para antes, a outra vai na ponta... Assim a pontinha fica super fininha, perfeita e não estraga o pano!",
    applications: [
      "Pontas afiadas em estrelas, coroas, monogramas clássicos e serifas de fontes góticas",
      "Quinas em ângulo reto (90°) e ângulos agudos em molduras e brasões corporativos",
      "Curvas acentuadas em caudas de letras e arabescos sem amontoar linhas",
      "Prevenção de quebra de agulhas e rasgos em tecidos finos e delicados (seda, cetim e voil)"
    ],
    commonErrors: [
      "Desativar a função de pontos curtos (Short Stitches) em letras pontiagudas (a agulha fura o mesmo ponto até cortar a entretela)",
      "Usar densidade excessiva em esquinas de ponto cheio sem aplicar a meia-esquadria",
      "Forçar a máquina em alta velocidade em quinas sem desaceleração programada"
    ],
    troubleshootingTips: [
      "No Wilcom, mantenha SEMPRE ativada a opção 'Pontos Curtos Automáticos (Auto Short Stitches)' nas propriedades de ponto cheio",
      "Para molduras quadradas perfeitas, utilize a junção em Meia-Esquadria (Mitered Corner / Junta em Bisel) a 45° para obter o visual nobre de uma moldura de quadro",
      "Em tecidos finos, aumente o percentual de encurtamento para 50% para espalhar ainda mais as penetrações da agulha",
      "Inspecione a visualização de furos de agulha (Needle Points) no software para confirmar que não há acúmulo excessivo em nenhum ponto"
    ],
    dicaArtrelados: "A perfeição das quinas é o cartão de visitas que revela se uma matriz foi feita por um amador ou por um engenheiro de bordado! Pontas bem desenhadas com injeção de pontos curtos não quebram agulhas e deixam seus monogramas deslumbrantes!",
    voceSabia: "A junção em meia-esquadria utilizada nos softwares de bordado foi inspirada na marcenaria clássica da Roma Antiga, onde os artesãos cortavam vigas de madeira a exatamente 45 graus para encaixar molduras sem que as pontas se sobrepusessem!",
    practicalExercise: "No seu software, desenhe um triângulo com pontas bem finas em ponto cheio: ative a visualização de pontos (TrueView desligado) e veja como o software encurta os pontos internos automaticamente para não amontoar fios no mesmo lugar!",
    quickSummary: "Algoritmo que distribui micropassos em quinas afiadas para criar cantos nítidos sem furar o mesmo buraco do tecido.",
    relatedTerms: ["Ponto Cheio / Ponto Satin", "Pontos Curtos / Short Stitches", "Densidade de Ponto", "Compensação de Repuxo"],
    tags: ["i-031", "injecao de ponto", "micropasso", "quinas", "smart corners", "pontos curtos", "software", "artrelados"],
    bibliographicReferences: [
      "ALGORITHMIC GEOMETRY IN AUTOMATED TEXTILE EMBROIDERY. Corner Interpolation Models. Tokyo, 2023.",
      "THE EMBROIDERY DIGITIZING BIBLE. Short Stitch Dynamics and Corner Mitering. Chicago, 2022.",
      "ARTRELADOS. A Geometria das Quinas Perfeitas: Como Usar Pontos Curtos e Meia-Esquadria para Matrizes Impecáveis. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-032-isolamento-acustico-e-coxins-antivibratorios",
    code: "I-032",
    term: "Isolamento Acústico de Ateliê & Coxins Antivibratórios (Acoustic Isolation, Decibel Control & Vibration Dampening)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Gestão do Ateliê",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim insula (ilha/isolamento), do grego akoustikos (relativo à audição) e do francês coussin (almofada de amortecimento mecânico).",
    summary: "Placas emborrachadas e mantas acústicas colocadas sob as mesas e nas paredes do ateliê para reduzir o barulho da máquina e absorver vibrações no chão.",
    definition: "O Isolamento Acústico de Ateliê e Amortecimento por Coxins Antivibratórios (Embroidery Workshop Acoustic Conditioning & Elastomeric Vibration Dampening Pads) é o conjunto de intervenções de engenharia acústica e ergonômica ambiental aplicadas no espaço de trabalho de bordado para atenuar a transmissão de ruído aéreo (medido em decibéis - dB) e ruído estrutural de impacto (vibrações mecânicas de alta frequência geradas pela alternância rápida do cabeçote a 1.000 PPM). Utilizando sapatas elastoméricas de borracha nitrílica ou poliuretano sob os pés da máquina/bancada associadas a painéis de espuma acústica de células abertas nas paredes, o sistema reduz o nível de ruído ambiental de mais de 82 dB para níveis seguros abaixo de 65 dB, prevenindo queixas de vizinhos em condomínios e garantindo conforto auditivo à bordadeira.",
    technicalDetails: "Metrologia acústica e parâmetros mecânicos de isolamento:\n• Nível de pressão sonora sem tratamento: 78 dB a 85 dB (a 1 metro da máquina operando a 850 PPM);\n• Nível de pressão sonora com isolamento: 58 dB a 65 dB (Ambiente de conversação normal);\n• Coxins elastoméricos recomendados: Borracha vulcanizada de dureza Shore A 50 a 65 com espessura de 15mm a 25mm;\n• Frequência natural de ressonância: Atenuação de vibrações estruturais na faixa de 10 Hz a 100 Hz (impede que o chão trema);\n• NBR 10151 / NR-15: Conformidade com níveis de conforto acústico para ambientes residenciais e comerciais.",
    howItWorks: [
      "1. A bordadeira monta seu ateliê em um apartamento residencial ou quarto de casa.",
      "2. Ao ligar a máquina de bordar a 800 PPM sobre uma mesa comum, a vibração dos motores ressoa no piso de concreto e o barulho de 'bate-estaca' incomoda o vizinho de baixo.",
      "3. Ela instala quatro coxins de borracha densa antivibratória sob os pés da bancada de trabalho e uma manta de EVA de alta densidade sob a máquina.",
      "4. As ondas mecânicas de choque são absorvidas e convertidas em micro-energia térmica pelo polímero da borracha.",
      "5. Nas paredes atrás da máquina, ela cola quatro placas decorativas de espuma acústica perfilada tipo 'casca de ovo'.",
      "6. O som do arrebentar do ar e da descida da agulha é absorvido pelas células da espuma em vez de ecoar na sala.",
      "7. O ateliê fica silencioso, a mesa não trepida mais e ela pode bordar até tarde da noite com total paz e tranquilidade!",
    ],
    beginnerExplanation: "É o jeito inteligente de deixar o seu cantinho de bordar bem silencioso e gostoso de trabalhar! Sabe quando a máquina está bordando rápido e parece que a mesa inteira está tremendo e fazendo barulho no chão da casa? Se você colocar pezinhos de borracha especial embaixo da mesa e uma placa emborrachada sob a máquina, todo o tremor desaparece na hora! O barulho cai pela metade e você pode bordar sem incomodar sua família nem os vizinhos!",
    applications: [
      "Ateliês instalados em apartamentos residenciais e cômodos de condomínios fechados",
      "Redução drástica de trepidação da mesa de apoio aumentando a precisão de bordados finos",
      "Conformidade com a legislação de silêncio e normas de segurança do trabalho (NR-15)",
      "Criação de um ambiente de trabalho relaxante e livre de estresse sonoro contínuo"
    ],
    commonErrors: [
      "Colocar a máquina de bordar sobre mesas bambas de madeira oca ou plástico que funcionam como uma caixa de ressonância de violão",
      "Encostar a bancada da máquina direto na parede de alvenaria (a vibração passa direto pela estrutura do prédio)",
      "Trabalhar anos em ambientes com mais de 80 dB sem proteção auricular ou tratamento acústico"
    ],
    troubleshootingTips: [
      "Afaste a mesa da sua máquina pelo menos 5 cm de distância da parede para evitar que a vibração se propague pelo concreto",
      "Utilize placas de piso de borracha reciclada tipo 'piso de academia' de 15mm de espessura embaixo da mesa da máquina: é uma solução baratíssima e hiper eficiente!",
      "Certifique-se de que todos os parafusos da bancada estejam bem apertados para eliminar rangidos metálicos",
      "Mantenha a lançadeira e as bielas da máquina bem lubrificadas: a lubrificação correta reduz o ruído mecânico em até 40%"
    ],
    dicaArtrelados: "Uma mesa firme com amortecedor de borracha não só deixa o ateliê silencioso, mas também melhora a qualidade do seu bordado! Quando a máquina não treme, a agulha desce com precisão cirúrgica e as letras finas saem 100% perfeitas!",
    voceSabia: "O princípio dos coxins antivibratórios de elastômero é o mesmo utilizado na engenharia civil para isolar edifícios e arranha-céus inteiros contra terremotos no Japão e em São Francisco!",
    practicalExercise: "Coloque uma moeda em pé sobre a mesa ao lado da sua máquina enquanto ela estiver bordando: se a moeda cair em menos de 5 segundos, sua bancada está vibrando demais e precisa de coxins de borracha urgente!",
    quickSummary: "Uso de calços de borracha e isolamento nas paredes para absorver vibrações e reduzir o ruído do ateliê.",
    relatedTerms: ["Ergonomia no Ateliê", "Manutenção Preventiva Semanal", "Lubrificação Preventiva", "Pontos por Minuto (PPM)"],
    tags: ["i-032", "isolamento acustico", "coxins", "antivibracao", "barulho", "ergonomia", "atelie", "artrelados"],
    bibliographicReferences: [
      "INDUSTRIAL ACOUSTICS & VIBRATION CONTROL IN APPAREL WORKSHOPS. ISO 1999 Noise Standards. London, 2023.",
      "ERGONOMICS & SOUND CONDITIONING FOR TEXTILE PRODUCTION. Berlin, 2022.",
      "ARTRELADOS. O Ateliê Silencioso: Como Eliminar Ruídos e Vibrações para Bordar em Apartamento Sem Estresse. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-033-identificacao-de-lote-de-linhas-e-tinturaria",
    code: "I-033",
    term: "Identificação de Lote de Linhas & Tinturaria Industrial (Thread Batch Lot & Dye-Lot Color Matching Protocol)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Linhas & Agulhas",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do francês lot (porção/partilha) e do latim tinctura (tingimento/tinturaria). Controle metrológico e espectrofotométrico da indústria química têxtil.",
    summary: "Código impresso no cone que identifica o lote exato de tingimento químico da linha, garantindo que grandes encomendas de uniformes usem exatamente o mesmo tom de cor.",
    definition: "A Identificação de Lote de Linhas e Controle de Tinturaria Industrial (Thread Dye-Lot Number Tracking & Spectrophotometric Color Consistency) é o protocolo de gestão de materiais e controle de qualidade têxtil no qual a bordadeira registra e faz a correspondência do número de lote químico (Dye Lot Number / Batch Number impresso na etiqueta sob a base do cone de linha). Como o tingimento industrial de polímeros sintéticos (poliéster e viscose) envolve variáveis termoquímicas sutis (temperatura de caldeira, pH da água e tempo de banho), cones de um mesmo código de cor fabricados em lotes diferentes podem apresentar variações microscópicas de matiz (Metamerismo / Delta E > 1.0) que se tornam visíveis quando usados lado a lado em um mesmo pedido de 100 camisas ou toalhas.",
    technicalDetails: "Metrologia de cor e espectrofotometria têxtil:\n• Tolerância espectral (Delta E - CIELAB): Delta E < 0,8 (Diferença imperceptível ao olho humano em condições de luz padrão D65);\n• Informações da etiqueta do cone: Código da cor (ex: Cor 1800 Branco), Número do Lote (ex: Lot 45892) e Titulagem (40wt);\n• Regra de Produção Industrial: Nunca misturar lotes de tingimento diferentes em um mesmo bordado ou em peças de um mesmo conjunto corporativo;\n• Armazenamento e Shelf-Life: Cones de linha mantidos em local escuro e seco preservam a estabilidade cromática por mais de 5 anos.",
    howItWorks: [
      "1. O ateliê recebe uma grande encomenda para bordar 200 camisas polo azuis para a diretoria de um banco multinacional.",
      "2. O logotipo exige uma linha azul royal específica (Código 1842).",
      "3. A gerente de produção separa 6 cones de linha da prateleira e confere a etiqueta na base plástica de cada um.",
      "4. Ela percebe que 4 cones são do Lote 'L-8820' e 2 cones são do Lote 'L-9104'.",
      "5. Em vez de misturar os cones nas máquinas, ela separa os 4 cones do mesmo lote para fazer o lote principal de camisas.",
      "6. Ao finalizar a produção, todas as 200 camisas apresentam exatamente a mesma nuance e brilho sob qualquer iluminação.",
      "7. O cliente inspeciona o lote completo com espectrômetro e aprova a entrega com 100% de conformidade técnica.",
    ],
    beginnerExplanation: "É aquele numerozinho de 'Lote' que vem escrito no fundinho do cone da sua linha de bordar! Quando a fábrica tinge milhares de linhas de uma vez só em um panelão gigante de tinta, todas as linhas daquele panelão saem iguaizinhas. Mas no mês seguinte, se eles fizerem outro panelão, a cor pode sair um tiquinho de nada mais clara ou escura. Se você for bordar 50 camisas para uma empresa, use sempre cones do mesmo número de lote para que todas as camisas fiquem com a cor exatamente igual!",
    applications: [
      "Grandes pedidos corporativos de uniformes empresariais e fardas institucionais",
      "Enxovais de hotelaria de luxo e coleções de vestidos de festa de alta costura",
      "Rastreabilidade de matéria-prima em auditorias de qualidade ISO 9001",
      "Reposição de cones no ateliê garantindo fidelidade de cor histórica para o mesmo cliente"
    ],
    commonErrors: [
      "Trocar o cone no meio de um bordado de grande área por outro cone de lote diferente (cria uma divisão nítida de tom no meio da figura)",
      "Guardar cones sem etiqueta de lote e misturar com fios novos",
      "Escolher cores olhando a linha sob luz fluorescente azulada fraca (provoca o erro de metamerismo)"
    ],
    troubleshootingTips: [
      "Ao comprar linhas para um projeto grande, compre sempre 1 ou 2 cones extras do MESMO lote para garantir que não falte linha no meio da produção",
      "Anote o número do lote químico na folha de produção técnica de cada cliente",
      "Se tiver que usar cones de lotes diferentes na mesma encomenda, use um lote para a frente e outro para as costas, mas NUNCA misture no mesmo bordado!",
      "Compare sempre as linhas sob luz natural do dia (5.500K a 6.500K) ou com uma luminária de alto índice CRI"
    ],
    dicaArtrelados: "Ficar atenta ao número do lote é o detalhe de mestre que livra você de prejuízos enormes! Nada é mais triste do que entregar 50 toalhas e a noiva notar que 10 toalhas ficaram com o dourado ligeiramente diferente das outras!",
    voceSabia: "O olho humano treinado de uma bordadeira experiente é capaz de distinguir mais de 10 milhões de variações sutis de tonalidades de cores, sendo mais sensível do que muitas câmeras digitais modernas!",
    practicalExercise: "Pegue três cones da mesma cor da sua estante (por exemplo, três cones brancos ou pretos): olhe no fundo de cada cone e leia o número do lote de tingimento de cada um para ver se são irmãos gêmeos do mesmo lote!",
    quickSummary: "Registro do lote químico de tingimento do cone de linha que assegura uniformidade total de tom em grandes encomendas.",
    relatedTerms: ["Isacord & Fios de Poliéster", "Paleta de Cores", "Folha de Produção & Gabarito", "Controle de Qualidade no Bordado"],
    tags: ["i-033", "lote de linha", "tinturaria", "dye-lot", "fidelidade de cor", "controle de qualidade", "linhas", "artrelados"],
    bibliographicReferences: [
      "TEXTILE COLOR METROLOGY & DYE-LOT CONSISTENCY. AATCC Evaluation Procedures. North Carolina, 2023.",
      "INDUSTRIAL THREAD MANUFACTURING & DYEING STANDARDS. Bönnigheim, 2022.",
      "ARTRELADOS. Cores Perfeitas Sempre: Como Gerenciar Lotes de Linha e Evitar Diferenças de Tons nas Suas Encomendas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-034-inversao-de-cores-e-paleta-digital-na-matriz",
    code: "I-034",
    term: "Inversão de Cores & Ciclo de Paleta Digital na Matriz (Colorway Inversion & Digital Palette Cycling)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim inversio (troca de posição) e do italiano tavolozza / palette (paleta de tintas do pintor). Gestão de variações cromáticas em software CAD.",
    summary: "Recurso que altera e inverte combinações de cores na matriz (como versão para camisa clara e versão para camisa escura) em um clique sem redigitalizar.",
    definition: "A Inversão de Cores e Gestão de Variantes de Paleta Digital (Colorway Inversion / Digital Palette Cycling & Dark/Light Background Adaptation) é a ferramenta de produtividade nos softwares de bordado que permite criar, salvar e alternar instantaneamente entre múltiplas combinações cromáticas (Colorways / Variantes de Cor) dentro de um mesmo arquivo de matriz. O recurso é essencial para adaptar um logotipo para tecidos de fundos opostos — por exemplo, convertendo automaticamente um bordado desenvolvido para tecidos brancos (com letras pretas e detalhes azuis) para ser bordado sobre tecidos pretos (onde as letras pretas devem virar brancas ou douradas para manter o contraste e a legibilidade) sem alterar as coordenadas de pontos nem precisar reprogramar a matriz do zero.",
    technicalDetails: "Arquitetura de variantes de cores em arquivos CAD de bordado:\n• Estrutura de Colorways: Suporte a até 99 paletas alternativas salvas dentro do mesmo arquivo mestre (.EMB / .JAN / .ART);\n• Mapeamento de Fios: Associação direta com códigos de catálogos industriais (Isacord, Madeira, Sulky, Coats, Lumina);\n• Regra de Contraste Luminotécnico: Índice de contraste mínimo de 4.5:1 entre a linha de acabamento e a cor do tecido de fundo (WCAG / ISO Contrast);\n• Exportação Simultânea: Geração de arquivos prontos (.DST / .PES) para cada cor de tecido da coleção em um único comando.",
    howItWorks: [
      "1. O cliente aprova a matriz do seu logotipo para camisas polo brancas (com letras em azul marinho e contorno preto).",
      "2. No dia seguinte, o cliente decide encomendar 50 camisas polo pretas com o mesmo logotipo.",
      "3. Se a bordadeira bordar a matriz original na camisa preta, as letras azuis e o contorno preto vão sumir no fundo escuro.",
      "4. O programador abre a matriz no software e clica em 'Nova Variante de Cor / New Colorway'.",
      "5. Muda o tecido de fundo na tela para preto e aplica a Inversão de Cores: converte o contorno preto em branco pérola e as letras para azul celeste luminoso.",
      "6. O logotipo ganha vida e destaque total sobre o fundo preto.",
      "7. Ele salva a Variante 2 no mesmo arquivo e envia para a máquina.",
      "8. Ambas as versões (para camisas claras e escuras) são produzidas com perfeição estética e legibilidade total.",
    ],
    beginnerExplanation: "É a ferramenta que muda todas as cores do desenho em um passe de mágica! Imagine que você fez um bordado lindo com letras pretas para colocar em uma toalha branca. Mas aí a cliente pede a mesma toalha na cor preta! Se você bordar com linha preta no pano preto, ninguém vai enxergar nada! Essa função inverte as cores na hora, transformando as letras em branco ou dourado para o bordado brilhar no fundo escuro sem você ter que refazer nada!",
    applications: [
      "Adaptação instantânea de logotipos para peças claras, escuras e tecidos coloridos",
      "Criação de coleções de moda com diferentes combinações de cores para a mesma matriz",
      "Apresentação de múltiplas opções visuais para o cliente escolher a sua favorita",
      "Exportação rápida de arquivos de produção para diferentes linhas de montagem"
    ],
    commonErrors: [
      "Bordar matrizes com letras escuras sobre tecidos pretos sem fazer a inversão de contraste",
      "Inverter as cores direto na máquina sem testar a harmonia visual antes no software",
      "Esquecer de salvar as variantes de cores no arquivo original para reutilizar no futuro"
    ],
    troubleshootingTips: [
      "REGRA DO CONTRASTE: Tecido escuro pede linhas claras e brilhantes; tecido claro pede linhas escuras e saturadas!",
      "No Wilcom ou Hatch, utilize a aba 'Colorways' na parte inferior da tela para alternar entre as versões de cores da sua matriz",
      "Ao inverter cores de um rosto ou personagem, tome cuidado para não inverter os olhos e dentes (que devem continuar brancos!)",
      "Envie as duas simulações (versão clara e escura) no mesmo PDF para o cliente aprovar tudo de uma só vez"
    ],
    dicaArtrelados: "Oferecer a 'versão positiva' (para fundo claro) e a 'versão negativa' (para fundo escuro) do logotipo para o seu cliente é uma postura de ateliê de alto padrão que fideliza clientes empresariais para sempre!",
    voceSabia: "Na heráldica medieval e no design de marcas moderno, o uso de versões de logotipos em fundo claro e escuro é regido pela 'Regra da Tintura' (Rule of Tincture), criada no século XII para garantir que brasões fossem reconhecidos a grandes distâncias nos campos de batalha!",
    practicalExercise: "Abra qualquer matriz no seu computador: mude a cor do fundo da tela para preto e troque as linhas escuras por linhas brancas ou amarelas brilhantes para ver como o desenho ganha uma energia totalmente nova!",
    quickSummary: "Recurso que altera e inverte combinações de cores na matriz para adaptar desenhos a tecidos claros e escuros.",
    relatedTerms: ["Paleta de Cores", "Isometria e TrueView", "Folha de Produção & Gabarito", "Harmonia Cromática"],
    tags: ["i-034", "inversao de cores", "colorways", "paleta digital", "contraste", "fundo escuro", "software", "artrelados"],
    bibliographicReferences: [
      "COLOR THEORY & LUMINANCE CONTRAST IN TEXTILE GRAPHICS. Zurich, 2023.",
      "DIGITAL COLORWAY MANAGEMENT IN EMBROIDERY CAD SYSTEMS. Sydney, 2022.",
      "ARTRELADOS. O Poder das Variantes de Cor: Como Adaptar Matrizes para Roupas Claras e Escuras em Segundos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-035-insercao-de-lantejoula-e-dispositivo-sequin",
    code: "I-035",
    term: "Inserção de Lantejoula & Dispositivo Sequin Device (Automatic Sequin/Spangle Attachment & Feed Mechanism)",
    letter: "I",
    level: "Avançado 🔴",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do árabe sikka (moeda/cunho brilhante - raiz de lantejoula/sequin) e do inglês device (dispositivo mecânico automatizado).",
    summary: "Dispositivo mecatrônico acoplado na máquina que desenrola uma fita de lantejoulas, corta uma a uma e costura no tecido em alta velocidade.",
    definition: "A Inserção Automática de Lantejoulas e Dispositivo Sequin/Twin-Sequin Device (Automated Sequin Dispenser & Micro-Spangle Attachment System) é o conjunto mecatrônico pneumático ou acionado por servomotor de passo acoplado lateralmente ao cabeçote da máquina de bordar industrial. Comandado por códigos específicos de disparo na matriz de bordado (Comando Sequin Drop), o dispositivo alimenta uma fita plástica contínua de lantejoulas metálicas ou holográficas (de 2mm a 9mm de diâmetro), corta a lantejoula individual com uma micro-guilhotina e a posiciona com precisão milimétrica sob a agulha, que a prende ao tecido por meio de pontos de fixação geométricos (ponto em estrela de 3 pontas, ponto em 'Y' ou ponto cheio perimétrico) a velocidades de até 800 a 1.000 PPM.",
    technicalDetails: "Engenharia do dispositivo Sequin:\n• Tipos de lantejoulas: Disco circular plano, copinho côncavo (Cup Sequin), quadradas, estrelas ou holográficas;\n• Diâmetros padronizados: 2mm, 3mm, 4mm, 5mm, 7mm e 9mm;\n• Dispositivo Twin-Sequin: Alimentador duplo com duas fitas simultâneas de cores ou tamanhos diferentes na mesma agulha;\n• Padrões de amarração digital: Ponto em 'Y' (3 agulhadas a 120°), Ponto Triângulo ou Ponto de Sobreposição Escama de Peixe (Overlap Fish-Scale);\n• Precisão de corte: Faca de tungstênio de alta durabilidade com tolerância de corte < 0,02mm.",
    howItWorks: [
      "1. A estilista cria um vestido de festa luxuoso com detalhes florais cintilantes em lantejoulas douradas de 4mm.",
      "2. No software de matriz, o programador utiliza a ferramenta 'Linha de Lantejoulas / Sequin Run'.",
      "3. O software gera a sequência de pontos com códigos binários de alimentação (Sequin Feed) e amarração em estrela.",
      "4. Na fábrica, o operador instala o rolo de fita de lantejoulas no carretel do alimentador do cabeçote.",
      "5. A máquina inicia o bordado: o braço mecânico desce, projeta uma lantejoula dourada sob o calcador e a lâmina corta o elo plástico.",
      "6. A agulha desce imediatamente e costura 3 pontos em formato de 'Y' passando pelo orifício central da lantejoula.",
      "7. O pantógrafo desloca-se 3mm e o ciclo se repete centenas de vezes por minuto como uma metralhadora de brilho.",
      "8. Em poucos minutos, um vestido bordado com 2.000 lantejoulas perfeitamente alinhadas fica pronto sem nenhuma costura manual.",
    ],
    beginnerExplanation: "É um acessório incrível que parece coisa de ficção científica nas máquinas industriais! Ele tem um rolinho de lantejoulas brilhantes que parece uma fita. A máquina desenrola a fitinha, corta uma lantejoulazinha por vez e a agulha prega ela no tecido dando três pontinhos no buraquinho do meio, tudo numa velocidade absurda de centenas de lantejoulas por minuto! É assim que são feitos aqueles vestidos de festa e roupas de Carnaval cheios de brilho deslumbrante!",
    applications: [
      "Vestidos de noiva, alta costura, roupas de gala e trajes de festa de luxo",
      "Fantasias de Carnaval, figurinos de dança, patinação e apresentações artísticas",
      "Moda feminina jovem, camisetas com frases brilhantes e jaquetas personalizadas",
      "Almofadas decorativas com lantejoulas reversíveis (que mudam de cor ao passar a mão)"
    ],
    commonErrors: [
      "Programar o espaçamento entre lantejoulas menor do que o diâmetro do disco (as lantejoulas encavalam e entortam a agulha)",
      "Usar agulhas muito grossas que quebram o plástico frágil da lantejoula na descida",
      "Falta de lubrificação no trilho da guilhotina de corte do dispositivo, travando a fita"
    ],
    troubleshootingTips: [
      "Utilize sempre agulhas finas ponta aguda (calibre 65/9 ou 70/10) para passar com folga pelo orifício central da lantejoula",
      "Configure o espaçamento de passo no software com pelo menos 0,5mm a mais do que o diâmetro da lantejoula para preenchimentos planos",
      "Para o efeito de 'escama de peixe' sobreposta, utilize a amarração traseira com sobreposição de 40% a 50%",
      "Mantenha a pressão de ar comprimido calibrada entre 4 e 6 bar em dispositivos sequin pneumáticos"
    ],
    dicaArtrelados: "O bordado com dispositivo de lantejoulas transforma roupas simples em peças de luxo vendidas por fortunas em boutiques! Se você tem acesso a máquinas industriais com esse recurso, explore o mercado de vestidos de noiva e debutantes!",
    voceSabia: "As primeiras lantejoulas da história da humanidade foram encontradas na tumba do faraó Tutancâmon no Egito (1323 a.C.) e eram feitas de discos minúsculos de ouro puro costurados com fios de linho nas vestes reais para simbolizar a luz do Sol!",
    practicalExercise: "Se tiver uma máquina industrial com dispositivo sequin, carregue uma fita de lantejoulas de 5mm: programe uma linha curva simples no software e veja a máquina costurar o colar brilhante em segundos!",
    quickSummary: "Dispositivo automático que alimenta, corta e costura lantejoulas no tecido em alta velocidade.",
    relatedTerms: ["Ponto Cheio / Ponto Satin", "Dispositivo Cording & Soutache", "Agulha Microtex", "Velocidade PPM"],
    tags: ["i-035", "lantejoulas", "sequin device", "brilho", "alta costura", "vestidos de festa", "industrial", "artrelados"],
    bibliographicReferences: [
      "AUTOMATED SEQUIN ATTACHMENT TECHNOLOGY IN HIGH-SPEED EMBROIDERY. Nagoya, 2023.",
      "THE COUTURE EMBROIDERY HANDBOOK. Spangles, Sequins and Machine Embellishments. London, 2022.",
      "ARTRELADOS. O Brilho da Alta Costura: Guia Completo de Programação e Operação de Dispositivos de Lantejoula Sequin. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "i-036-infiltracao-de-po-de-entretela-e-limpeza-pneumatica",
    code: "I-036",
    term: "Infiltração de Pó de Entretela & Limpeza Pneumática Preventiva (Stabilizer Lint Infiltration & Compressed Air Micro-Cleaning)",
    letter: "I",
    level: "Fundamental 🟢",
    category: "Cuidados & Manutenção",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim in (para dentro), filtrare (infiltrar) e do grego pneuma (ar comprimido/sopro). Higiene mecânica e desobstrução de sistemas de costura.",
    summary: "Acúmulo de pozinho e fiapos de entretela e linha dentro da caixa de bobina e a rotina correta de limpeza com pincel e ar para não travar a máquina.",
    definition: "A Infiltração de Pó de Entretela e Protocolo de Limpeza Mecânica e Pneumática (Stabilizer Lint Accumulation & Compressed Air Micro-Purge Protocol) é o fenômeno físico no qual as microfibras de celulose e polímeros sintéticos liberadas pelo atrito abrasivo da agulha perfurando entretelas rasgáveis e tecidos de algodão desprendem-se na forma de um pó fino (Lint / Pelugem têxtil) que se acumula no compartimento da lançadeira, sob a chapa de agulha, nas fendas dos dentes impelidores e nos sensores ópticos. Se não for removido regularmente, o pó mistura-se com o óleo lubrificante, formando uma graxa espessa e abrasiva que endurece o movimento rotativo, bloqueia os discos de tensão da bobina, causa quebras constantes de linha e superaquece o motor.",
    technicalDetails: "Protocolo de higienização e ferramentas recomendadas:\n• Frequência de limpeza preventiva: A cada 4 a 8 horas de operação contínua (ou a cada troca de trabalho de alta densidade);\n• Ferramentas de remoção: Pincel antiestático de cerdas naturais longas, pinça cirúrgica curva e aspirador portátil de precisão;\n• Uso de ar comprimido: Sopro direcionado de DENTRO PARA FORA (pressão máxima de 2 bar) apenas com a lançadeira desmontada para não empurrar poeira para dentro dos rolamentos blindados;\n• Zonas críticas de acúmulo: Cesto da lançadeira, mola de tensão da caixa de bobina, lâmina da faca de corte e sensor óptico de quebra.",
    howItWorks: [
      "1. Ao final de um longo dia bordando 30 toalhas felpudas com entretela rasgável grossa, a bordadeira desliga a máquina.",
      "2. Retira o bastidor e desparafusa a chapa de agulha metálica.",
      "3. Ao abrir o compartimento da lançadeira, depara-se com um grande 'ninho' de pó branco e fiapos acumulados ao redor da caixa de bobina.",
      "4. Ela retira a caixa de bobina plástica/metálica com cuidado.",
      "5. Com um pincel macio de cerdas compridas, varre todo o pó acumulado de dentro para fora.",
      "6. Utiliza um aspirador de pó miniatura ou um jato suave de ar comprimido para expulsar os fiapos ocultos nos cantos.",
      "7. Passa um pedaço de linha grossa por baixo da mola da caixa de bobina para remover a poeira que prende a linha de baixo.",
      "8. Pinga UMA única gota de óleo fino na pista da lançadeira.",
      "9. Remonta a chapa: a máquina fica limpa, silenciosa e pronta para rodar perfeitamente no dia seguinte!",
    ],
    beginnerExplanation: "Quando a máquina borda, a agulha fura a entretela e a linha milhares de vezes, soltando um pozinho branco parecido com um pozinho de giz. Com o tempo, esse pó vai se amontoando embaixo da chapa da agulha e na caixinha da bobina, virando uma pasta grossa com o óleo. Se você não limpar com um pincelzinho todo dia, esse pó trava a lançadeira, quebra a linha e deixa o bordado feio! Uma varridinha de 2 minutos com o pincel mantém sua máquina novinha!",
    applications: [
      "Manutenção diária preventiva para prolongar a vida útil de máquinas domésticas e industriais",
      "Eliminação de barulhos estranhos, rangidos e travamentos na caixa de bobina",
      "Prevenção de pontos soltos e laçadas causados por sujeira na mola da bobina",
      "Garantia de leitura perfeita nos sensores ópticos e facas de corte automático"
    ],
    commonErrors: [
      "Usar spray de ar comprimido soprando direto de cima para baixo com a chapa fechada (empurra a sujeira para o fundo dos eixos e motores da máquina)",
      "Assoprar com a boca (a saliva expelida oxida e enferruja as peças de aço da lançadeira)",
      "Passar semanas sem desparafusar a chapa de agulha para limpar"
    ],
    troubleshootingTips: [
      "REGRA DE OURO: Aspire ou varra a sujeira para FORA; nunca sopre a sujeira para DENTRO da máquina!",
      "Passe a quina de um cartão de visita ou fio dental sob a chapinha de tensão da caixa de bobina para tirar o pó invisível que desregula a tensão",
      "Crie a rotina de limpar o compartimento da bobina sempre que for trocar a agulha ou a cada 2 dias de uso intenso",
      "Após a limpeza, coloque sempre uma microgota de óleo de máquina na pista externa da lançadeira"
    ],
    dicaArtrelados: "O pincelzinho de limpeza é o melhor amigo da bordadeira! 80% das máquinas que chegam na oficina com 'defeito de tensão' não têm defeito nenhum: era só um tufo de pó de entretela entupindo a bobina! Limpe sua máquina e economize fortunas de assistência técnica!",
    voceSabia: "Em grandes tecelagens industriais no século XIX, crianças pequenas eram contratadas como 'scavengers' (limpadoras) para rastejar por baixo dos teares em movimento e varrer o pó de algodão para evitar que as máquinas pegassem fogo com o atrito mecânico!",
    practicalExercise: "Pegue a chavinha que veio com a sua máquina, retire a chapa de agulha e a caixinha da bobina: passe o pincelzinho em todos os cantos e veja a quantidade impressionante de fiapinhos que você vai tirar de lá!",
    quickSummary: "Remoção regular do pó de entretela e fiapos na lançadeira com pincel e aspiração para evitar travamentos e quebras.",
    relatedTerms: ["Lubrificação Preventiva", "Caixa de Bobina", "Lançadeira Rotativa", "Manutenção Periódica"],
    tags: ["i-036", "po de entretela", "limpeza", "manutencao", "fiapos", "lancadeira", "ar comprimido", "artrelados"],
    bibliographicReferences: [
      "SEWING & EMBROIDERY MACHINE MAINTENANCE MANUAL. Lint Prevention & Air Cleaning. Tokyo, 2023.",
      "TRIBOLOGY & DUST CONTAMINATION IN INDUSTRIAL TEXTILE MECHANISMS. Munich, 2022.",
      "ARTRELADOS. Máquina Limpa, Bordado Perfeito: O Passo a Passo Definitivo para Limpar e Cuidar da Sua Máquina de Bordar. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

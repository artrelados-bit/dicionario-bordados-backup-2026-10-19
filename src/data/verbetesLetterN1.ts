import { Verbete } from "../types";

export const VERBETES_LETTER_N_PART1: Verbete[] = [
  {
    id: "n-001-no-de-arremate-tie-off-lock-stitch",
    code: "N-001",
    term: "Nó de Arremate (Tie-off / Lock Stitch)",
    letter: "N",
    level: "Fundamental 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto / Do latim 'nodus' (laço, nó) e do inglês 'tie-off'.",
    origin: "Evolução dos nós de remate manuais para sequências algorítmicas de micro-pontos de travamento executadas antes do comando de corte (Trim) nas máquinas computadorizadas.",
    summary: "Sequência programada de 3 a 6 micro-pontos de ancoragem executada antes do corte de linha para impedir que o bordado desfie.",
    definition: "O nó de arremate digital (Tie-off / Lock Stitch) é uma sequência de micro-pontos de comprimento ultracurto (0,4 mm a 0,8 mm), executados em padrão geométrico específico (triângulo, vai-e-vem linear ou estrela) exatamente antes do comando de corte de linha (Trim) ou no término de um objeto de bordado. Sua função é entrelaçar irreversivelmente a linha superior e a linha da bobina na estrutura interna do tecido e da entretela, impedindo que a tensão residual da linha faça o ponto desfiar após o corte, no atrito do uso diário ou em repetidas lavagens industriais.",
    technicalDetails: "Arquitetura técnica do nó de arremate:\n• Comprimento de Ponto: 0,4 mm a 0,8 mm (pontos menores que 0,3 mm cortam as fibras);\n• Formatos Principais: Linear (no ângulo do ponto satim), Triângulo Invertido (máxima resistência mecânica) e Ponto Âncora;\n• Quantidade de Pontos: 3 a 5 penetrações alternadas de alta densidade concentrada;\n• Sincronismo com Corte: Executado imediatamente antes do recuo da faca móvel de corte e retenção da cauda de linha.",
    howItWorks: [
      "1. Ao finalizar o último ponto de uma coluna de satim ou tatami, o software gera um pequeno deslocamento de retorno.",
      "2. A agulha penetra de 3 a 5 vezes em posições milimetricamente alternadas.",
      "3. A laçada da bobina puxa a extremidade da linha superior, travando o nó no miolo da entretela.",
      "4. A máquina aciona o mecanismo de corte inferior com folga de segurança.",
      "5. O pantógrafo se desloca para o próximo bloco de bordado sem perigo de desmanchar o bloco anterior."
    ],
    beginnerExplanation: "Imagine que depois de costurar à mão, você precisa dar aquele nozinho firme antes de cortar a linha com a tesoura para a costura não desmanchar. Na máquina de bordar, o nó de arremate é esse nozinho automático feito com vários furinhos bem pequenininhos e juntos. Sem ele, quando a tesourinha da máquina corta a linha, a pontinha se solta e todo o bordado começa a abrir.",
    applications: [
      "Finalização de letras finas em satim de uniformes escolares, impedindo que as crianças puxem fios soltos",
      "Término de apliques em ponto cheio antes de saltar para a próxima cor da matriz",
      "Arremate em toalhas de banho felpadas onde a lavagem constante desfaz pontos que não tenham nó travado"
    ],
    commonErrors: [
      "Desativar o nó de arremate para tentar 'economizar pontos', resultando em bordados que desmancham na primeira lavagem",
      "Colocar o nó de arremate na ponta externa de uma letra cursiva em vez de escondê-lo no corpo interno do satim",
      "Utilizar nós excessivamente longos (acima de 1,5 mm) que aparecem como fios cruzados e desalinhados sobre a superfície do bordado"
    ],
    troubleshootingTips: [
      "Se as pontas das letras estão soltando tufos de linha após o corte, ative a opção 'Tie-off automático' no software de matrizes",
      "Para monogramas finos, configure o arremate no estilo 'Linear no Ângulo do Ponto' para que os micro-pontos fiquem invisíveis",
      "Em tecidos grossos, utilize nó em formato de triângulo de 4 pontos para máxima retenção mecânica"
    ],
    dicaArtrelados: "No Wilcom ou Embird, configure o nó de arremate com estilo 'Linear no Ângulo do Ponto' para objetos finos e 'Nó em Triângulo' para tatami largo. Em monogramas e textos finos, certifique-se de que o nó ocorra dentro da área que já recebeu sob-ponto (underlay), garantindo invisibilidade absoluta no lado direito da peça.",
    voceSabia: "Nas máquinas industriais multi-cabeças, a força de tração ao acelerar para o próximo bloco pode arrancar os últimos 10 pontos da matriz em menos de meio segundo se o nó de arremate não tiver sido executado com perfeição!",
    practicalExercise: "No seu software de programação, crie dois quadrados de tatami idênticos de 3x3 cm. No primeiro, ative o nó de arremate final de 4 micro-pontos; no segundo, desative o arremate e envie para a máquina. Ao retirar do bastidor, corte a cauda de linha rente ao tecido em ambos e esfregue vigorosamente com a unha no avesso: observe a diferença de fixação.",
    quickSummary: "Micro-pontos de travamento programados no final de cada objeto que impedem o desfiamento do bordado após o corte e uso.",
    relatedTerms: ["Nó de Entrada (Tie-in)", "Corte de Linha (Trim)", "Ponto de Salto (Jump)", "Densidade de Ponto"],
    imageUrl: "/images/n001_no_arremate_v1.jpg?v=1",
    imageCaption: "Anatomia do Nó de Arremate: Micro-pontos de ancoragem executados antes do corte de linha e os padrões de arremate linear (para monogramas) e em triângulo (para tatami) em máquina de 1 agulha.",
    tags: ["n-001", "no de arremate", "tie-off", "lock stitch", "corte", "arremate", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Embroidery Studio: Digitizing Fundamentals and Stitch Architecture. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Manual Técnico de Arremates, Travamentos e Cinemática de Pontos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-002-necessaire-no-bastidor-in-the-hoop-ith",
    code: "N-002",
    term: "Nécessaire no Bastidor (In The Hoop - ITH Nécessaire)",
    letter: "N",
    level: "Intermediário 🟡",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo feminino composto / Do francês 'nécessaire' e do inglês 'In The Hoop'.",
    origin: "Desenvolvida com a evolução das máquinas computadorizadas para confecção integral de peças utilitárias forradas diretamente dentro do bastidor sem necessidade de máquina de costura reta.",
    summary: "Técnica de confecção automatizada de bolsas e estojos com zíper, forro e acabamento embutido 100% dentro do bastidor.",
    definition: "Nécessaire ITH é uma técnica de engenharia de matriz e costura automatizada na qual um estojo ou bolsa tridimensional com zíper, forro embutido, quilting decorativo, apliques e acabamento invisível é inteiramente confeccionado, estruturado e fechado dentro dos limites do bastidor da máquina de bordar, sem necessidade de costura em máquina reta tradicional (exceto pelo fechamento final de uma pequena abertura de desviramento).",
    technicalDetails: "Sequência cinemática da matriz ITH:\n• Fase 1: Marcação da posição do zíper sobre a entretela presa no aro;\n• Fase 2: Pesponto de fixação dos dentes do zíper;\n• Fase 3: Emenda do tecido frontal e manta estruturadora (R1/R2) com costura rebatida;\n• Fase 4: Execução do bordado decorativo, monograma e matelassê;\n• Fase 5: Parada obrigatória para abertura parcial do cursor do zíper;\n• Fase 6: Sobreposição do tecido traseiro e forros avesso com avesso;\n• Fase 7: Costura perimetral dupla reforçada com parada para desviramento.",
    howItWorks: [
      "1. A entretela é colocada firme no bastidor e a máquina faz a primeira marcação do zíper.",
      "2. O zíper é fixado com fita crepe suave e a máquina costura as fitas laterais.",
      "3. O tecido principal com manta é costurado e rebatido para baixo.",
      "4. A máquina borda o desenho decorativo e o quilting frontal.",
      "5. O operador abre o cursor do zíper até a metade (etapa crucial para desvirar).",
      "6. O forro e o tecido traseiro são posicionados e a máquina executa a costura final.",
      "7. A peça é retirada do bastidor, refilada nos cantos e desvirada pelo zíper aberto."
    ],
    beginnerExplanation: "É a mágica de fazer uma bolsinha com zíper e forro perfeitinho sem encostar na máquina de costura! A própria máquina de bordar vai desenhando onde colocar o zíper, costura o tecido da frente, borda o desenho, costura o forro e fecha tudo por dentro. Você só vai colocando os tecidos no bastidor conforme a máquina vai parando e pedindo.",
    applications: [
      "Nécessaire farmacinha e porta-maquiagem com zíper superior embutido e bordado personalizado",
      "Estojo escolar infantil com forro impermeável em nylon resinado feito em bastidor 16x26 cm ou 20x30 cm",
      "Porta-moedas com chaveiro e aba com botão de pressão confeccionado em material sintético Montana/Dollaro"
    ],
    commonErrors: [
      "Esquecer de abrir o cursor do zíper até a metade antes da costura final de fechamento, impossibilitando desvirar a peça pronta",
      "Deixar o cursor metálico do zíper no caminho exato onde o calcador vai passar, quebrando a agulha e a barra de agulha",
      "Usar ponto muito denso ou agulha grossa em sintéticos, o que causa picote e faz o fundo da nécessaire abrir com o peso"
    ],
    troubleshootingTips: [
      "Se os cantos ficaram tortos ao desvirar, corte as pontas em diagonal (chanfro) antes de desvirar para reduzir o volume",
      "Use fita crepe de papel suave ou fita micropore para prender o zíper sem deixar resíduos de cola na agulha",
      "Ao prender tecidos por baixo do bastidor, fixe as 4 pontas com fita para que o tecido não dobre sob a chapa"
    ],
    dicaArtrelados: "Use fita crepe de papel suave ou fita micropore para prender o zíper e os tecidos no bastidor sem deixar cola na agulha. Na hora de prender o forro por baixo do bastidor, segure as pontas com fita para que o tecido não dobre por baixo da chapa de agulha durante o deslocamento do pantógrafo.",
    voceSabia: "A técnica ITH nasceu no início dos anos 2000 nos Estados Unidos e na Austrália, revolucionando pequenos ateliês que não dominavam corte e costura mas queriam produzir peças utilitárias com alto valor agregado e padronização geométrica perfeita.",
    practicalExercise: "Programe ou baixe uma matriz simples de porta-moedas ITH. Siga a ordem das cores rigorosamente: marque a entretela, fixe o zíper, borde um pequeno monograma no tecido principal, abra o cursor até o meio, coloque o forro traseiro e execute o fechamento. Desvire e confira o esquadro dos 4 cantos.",
    quickSummary: "Confecção de bolsas e estojos com zíper e forro embutidos executados 100% no bastidor através de etapas automatizadas.",
    relatedTerms: ["In The Hoop (ITH)", "Matriz de Bordado", "Ponto Reto de Costura", "Entretela Rasga-Fácil"],
    tags: ["n-002", "necessaire", "in the hoop", "ith", "ziper", "bastidor", "artrelados"],
    bibliographicReferences: [
      "KUBICEK, Sue. In The Hoop Embroidery Projects: Step-by-Step Guide. Ohio: Creative Publishing, 2021.",
      "ARTRELADOS. Engenharia de Matrizes ITH: Estruturas Tridimensionais no Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-003-nylon-poliamida-fios-e-tecidos-tecnicos",
    code: "N-003",
    term: "Nylon (Fios de Poliamida e Substratos Sintéticos)",
    letter: "N",
    level: "Intermediário 🟡",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo masculino / Do nome comercial da fibra de poliamida termoplástica.",
    origin: "Criado pela DuPont na década de 1930 como a primeira fibra sintética do mundo, hoje indispensável tanto em tecidos técnicos (Cordura, Ripstop, Tactel) quanto em linhas de alta tenacidade e fios monofilamento.",
    summary: "Polímero sintético de altíssima tenacidade usado em tecidos impermeáveis e linhas de alta resistência; requer densidade aliviada e agulhas finas.",
    definition: "O Nylon (poliamida) é um polímero sintético caracterizado por altíssima resistência à tração, excelente elasticidade de recuperação, baixa absorção de umidade e alta resistência à abrasão e intempéries. No universo do bordado eletrônico, divide-se em dois eixos fundamentais: 1) Como substrato têxtil técnico (jaquetas corta-vento em Tactel, mochilas em Nylon 600/Cordura, bandeiras em Ripstop); e 2) Como linha de bordado (fio monofilamento transparente para aplicações invisíveis ou linhas de poliamida bonderizada para calçados e equipamentos de segurança).",
    technicalDetails: "Parâmetros técnicos para bordar em Nylon e poliamida:\n• Ponto de Fusão: ~215°C a 250°C (termossensível ao atrito em alta velocidade);\n• Agulhas Recomendadas: 70/10 a 75/11 Ponta Bola Leve (SES) para tecidos impermeáveis ou 90/14 Titânio para Cordura pesada;\n• Densidade de Matriz: Espaçamento de 0,45 mm a 0,50 mm (alívio de 15% a 20% para evitar picote);\n• Compensação de Encolhimento: 0,40 mm a 0,50 mm para compensar o repuxo da fibra elástica.",
    howItWorks: [
      "1. Ao ser perfurado, o tecido de nylon não cicatriza como o algodão, exigindo agulhas finas e sem rebarbas.",
      "2. A entretela recortável ou No-Show Mesh é colada com spray temporário no verso do tecido sem esticá-lo.",
      "3. A matriz aplica pontos de suporte leves em grade aberta para travar a elasticidade da poliamida.",
      "4. A velocidade da máquina é ajustada para 550-650 PPM para diminuir o calor de fricção na agulha.",
      "5. O bordado finaliza com contornos alinhados e sem enrugamento ao redor das letras."
    ],
    beginnerExplanation: "Nylon é aquele tecido sintético resistente de jaqueta corta-vento, mochila, pochete e guarda-chuva. Bordar nele exige cuidado porque ele não fura e cicatriza como o algodão: se você colocar muitos pontos juntos com uma agulha grossa, você acaba cortando o tecido como se fosse uma folha de papel picotada.",
    applications: [
      "Bordado de logomarca institucional em jaquetas impermeáveis de nylon tactel com entretela hidrossolúvel ou malha recortável",
      "Bordado de identificação em bolsas e mochilas táticas confeccionadas em Nylon 600 / Cordura com agulha ponta redonda fina",
      "Aplicação de renda com fio de nylon transparente (monofilamento) para criar fixação invisível"
    ],
    commonErrors: [
      "Usar agulha 90/14 pesada em jaqueta corta-vento de nylon, abrindo furos visíveis que deixam vazar água e rasgam o tecido",
      "Aplicar densidade normal de algodão em tecidos de nylon resinado, provocando enrugamento grave e corte do tecido",
      "Prender nylon escorregadio no bastidor sem aperto uniforme ou sem entretela adequada, fazendo o desenho descasar o contorno"
    ],
    troubleshootingTips: [
      "Se o nylon corta ao redor do bordado, aumente o espaçamento entre pontos para 0,48 mm e troque a agulha por 70/10 SES",
      "Para jaquetas finas, utilize entretela No-Show Mesh colada com spray para dar estabilidade sem criar placa dura",
      "Nunca estique o nylon ao colocar no bastidor: apenas assente-o de forma plana para não repuxar ao soltar"
    ],
    dicaArtrelados: "Ao bordar jaquetas corta-vento de nylon que não podem ficar marcadas no avesso, utilize entretela No-Show Mesh (poliéster emalhado) colada com spray temporário. Nunca estique o nylon ao colocar no bastidor: apenas assente-o de forma plana e suave para que não volte enrugando quando for solto.",
    voceSabia: "O termo 'Nylon' foi popularizado como um acrônimo urbano para 'New York (NY) e London (LON)', embora a DuPont tenha registrado originalmente como uma variação fonética agradável derivada de 'norun' (que não desfia).",
    practicalExercise: "Faça um teste de bordado em um retalho de nylon tactel: borde um círculo de 4 cm com densidade padrão de 0,40 mm e agulha 80/12; ao lado, borde o mesmo círculo com densidade aliviada de 0,48 mm, agulha 70/10 SES e compensação de repuxo de 0,45 mm. Compare o enrugamento de ambos.",
    quickSummary: "Fibra sintética de alta tenacidade usada em tecidos técnicos; exige alívio de densidade e agulhas finas para evitar perfurações irreversíveis.",
    relatedTerms: ["Compensação de Repuxo", "Entretela No-Show Mesh", "Agulha Microtex", "Densidade de Ponto"],
    tags: ["n-003", "nylon", "poliamida", "tactel", "cordura", "sinteticos", "artrelados"],
    bibliographicReferences: [
      "DUPONT TEXTILE FIBERS. Nylon and Technical Polyamide Processing Manual. Wilmington: DuPont, 2020.",
      "ARTRELADOS. Guia de Substratos Sintéticos e Tecidos Técnicos no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-004-nivelamento-alinhamento-bastidor-pantografo",
    code: "N-004",
    term: "Nivelamento e Alinhamento do Bastidor (Hoop Leveling / Calibration)",
    letter: "N",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto / Do latim 'libella' (nível) e do grego 'pantographos'.",
    origin: "Da mecânica de precisão dos braços robóticos e servomotores X/Y dos pantógrafos nas máquinas industriais e domésticas de bordado computadorizado.",
    summary: "Calibração mecânica de planicidade e paralelismo do bastidor em relação à chapa de agulha para eliminar atrito e falhas de ponto.",
    definition: "Nivelamento e alinhamento do bastidor é o procedimento técnico e mecânico de calibração que assegura a perfeita horizontalidade, planicidade e paralelismo entre o plano inferior do bastidor de bordar e a chapa de agulha da máquina, bem como o esquadro ortogonal de 90° entre os braços de fixação do pantógrafo nos eixos X e Y. O desnível ou torção angular dos braços provoca atrito do aro contra a chapa, altura desuniforme do calcador e perda de precisão geométrica em matrizes de grande porte.",
    technicalDetails: "Parâmetros de alinhamento e tolerâncias mecânicas:\n• Folga com a Chapa de Agulha: 0,5 mm a 1,0 mm uniforme em todos os 4 quadrantes;\n• Esquadro dos Braços: Ângulo ortogonal de 90° ± 0,05° nos eixos X e Y;\n• Tolerância de Planicidade: Desvio máximo de 0,2 mm na extensão de bastidores de 30x20 cm;\n• Impacto Dinâmico: Evita a quebra de agulha por colisão e a formação do efeito bandeira (Flagging).",
    howItWorks: [
      "1. O técnico ou operador instala o suporte de bastidor nos trilhos do pantógrafo.",
      "2. Com a máquina desligada, verifica a distância entre o fundo do bastidor e a chapa de agulha em várias posições.",
      "3. Se houver inclinação, ajusta os parafusos de fixação dos suportes de alumínio nos braços tensores.",
      "4. Movimenta o pantógrafo nos extremos dos eixos X e Y para assegurar que não haja atrito em nenhum ponto.",
      "5. Testa com uma matriz de quatro cantos para confirmar o encaixe milimétrico dos contornos."
    ],
    beginnerExplanation: "É garantir que o bastidor fique retinho e paralelo à mesa da máquina, sem ficar torto, caído para a frente ou raspando na chapa de ferro onde a agulha entra. Se o bastidor estiver torto, de um lado a agulha bate e quebra a linha, e do outro o bordado fica frouxo e com pontos feios.",
    applications: [
      "Calibração dos suportes de bastidor de uma máquina industrial multi-cabeças para garantir tensão idêntica em todas as cabeças",
      "Ajuste dos trilhos do pantógrafo após transporte ou mudança de ateliê",
      "Correção de braço de encaixe de bastidor gigante (20x30 cm ou 36x20 cm) em máquina de grande porte"
    ],
    commonErrors: [
      "Apertar os parafusos do braço do pantógrafo com força desigual, causando torção permanente no suporte de alumínio",
      "Apoiar objetos pesados sobre o pantógrafo ou apoiar as mãos no bastidor enquanto a máquina está trabalhando",
      "Utilizar bastidores paralelos de marcas genéricas que possuem engates com espessura fora de tolerância mecânica"
    ],
    troubleshootingTips: [
      "Se o bastidor raspa audivelmente na chapa ao se movimentar, solte os parafusos do braço e nivele a altura com uma folha de papel",
      "Se as quebras de linha ocorrem sempre no mesmo quadrante do bastidor, meça a planicidade do aro externo sobre um vidro plano",
      "Nunca force o bastidor para baixo ao encaixá-lo: pressione suavemente as travas de liberação"
    ],
    dicaArtrelados: "Verifique a planicidade do seu bastidor colocando o aro externo sobre uma mesa de vidro perfeitamente plana: se ele mancar ao toque em qualquer um dos quatro cantos, o aro está empenado e deve ser substituído para não comprometer a precisão dos seus bordados.",
    voceSabia: "Em máquinas industriais de alta velocidade (1.000 a 1.200 PPM), um desnível de apenas 0,3 mm no bastidor pode aumentar a vibração harmônica do pantógrafo a ponto de gerar desgaste prematuro nas guias lineares de rolamento.",
    practicalExercise: "Com a máquina desligada e um bastidor vazio encaixado, deslize uma folha de papel sulfite sob o bastidor em toda a sua extensão: o papel deve passar suavemente sob todas as áreas sem prender em um ponto nem ficar excessivamente solto em outro. Se prender, ajuste a altura do suporte nos parafusos de regulagem do braço.",
    quickSummary: "Calibração da planicidade e paralelismo do bastidor com a chapa de agulha, prevenindo atritos, quebras de linha e desvios de ponto.",
    relatedTerms: ["Pantógrafo", "Altura do Calcador", "Flagging (Efeito Bandeira)", "Chapa de Agulha"],
    tags: ["n-004", "nivelamento", "bastidor", "pantografo", "calibracao", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL SEWING MACHINES. Maintenance & Mechanical Calibration Manual. Nagoya: Tajima, 2021.",
      "ARTRELADOS. Calibração Mecânica de Pantógrafos e Bastidores Industriais. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-005-non-woven-tnt-entretelas-termoligadas",
    code: "N-005",
    term: "Non-Woven / Não-Tecido (TNT e Entretelas Termoligadas)",
    letter: "N",
    level: "Fundamental 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo masculino / Expressão técnica / Do inglês 'non-woven' (não tecido).",
    origin: "Processo industrial de consolidação de véus de fibras termoplásticas (spunbond/meltblown) sem tecelagem tradicional, base de 90% das entretelas de bordado modernas.",
    summary: "Estrutura laminar de fibras sintéticas unidas por calor e pressão que forma a base das entretelas e sacolas ecológicas de bordado.",
    definition: "Non-Woven (ou Tecido Não-Tecido - TNT) é uma estrutura laminar plana formada por véus de fibras têxteis orientadas aleatoriamente ou direcionadas, consolidadas por fusão térmica (termoligadas), adesão química ou agulhamento mecânico. No bordado eletrônico, é a matéria-prima básica de 90% de todas as entretelas existentes no mercado (rasga-fácil, recortável, hidrossolúvel de fibras e termocolantes), bem como um substrato popular e econômico para confecção de sacolas ecológicas, brindes promocionais e capas de proteção.",
    technicalDetails: "Características e propriedades do Non-Woven:\n• Matéria-Prima: 100% Polipropileno (PP), Poliéster (PET) ou Blendas de Viscose/Celulose;\n• Gramaturas Usuais: 30g/m² a 120g/m²;\n• Isotropia Estrutural: Resistência multidirecional que não desfia ao ser perfurada pela agulha;\n• Comportamento Térmico: Termossensível (fusão entre 160°C e 260°C dependendo do polímero).",
    howItWorks: [
      "1. A manta de non-woven é cortada e posicionada sob o tecido no bastidor.",
      "2. Ao penetrar, a agulha desloca as microfibras termoligadas sem romper fios estruturais de trama.",
      "3. As fibras aleatórias travam a força de puxão da linha de bordar em todas as direções.",
      "4. Após o bordado, o non-woven rasga-fácil se rompe limpo na linha perfurada ou o recortável é aparado com tesoura."
    ],
    beginnerExplanation: "É o famoso TNT e a base de quase todas as entretelas de bordar! Ele não é feito como um tecido comum tecido em tear com fios cruzados; ele é como um papel macio feito de fibras sintéticas coladinhas pelo calor. Por isso ele não desfia e dá sustentação para o bordado não enrugar.",
    applications: [
      "Uso de entretela non-woven rasga-fácil de 50g/m² para bordar toalhas de banho e enxovais de bebê",
      "Bordado de logotipo institucional em ecobags e mochilas saco de TNT de gramatura 80g a 100g",
      "Entretela non-woven recortável (Cut-Away) aplicada no avesso de camisas polo de malha piquet para manter a forma após centenas de lavagens"
    ],
    commonErrors: [
      "Usar TNT comum de papelaria (fino e frágil de 30g) como entretela de bordado em tecidos nobres, resultando em deformação e furos",
      "Aplicar ferro de passar muito quente diretamente sobre o non-woven de polipropileno, derretendo a peça instantaneamente",
      "Bordar sacolas de TNT com densidade padrão de tatami fechado, criando um bloco duro que quebra e rasga como cartão perfurado"
    ],
    troubleshootingTips: [
      "Para sacolas de TNT, reduza a densidade em 20% e use sob-pontos leves em ziguezague",
      "Se a entretela rompe antes do bordado acabar, adote uma entretela non-woven de maior gramatura (80g) ou use duas camadas cruzadas",
      "Teste o rasgo com as mãos: a boa entretela rasga-fácil deve se romper em qualquer direção sem deixar fios compridos"
    ],
    dicaArtrelados: "Para saber se a entretela non-woven rasga-fácil é de boa qualidade para o ateliê, puxe um pedaço com as mãos: ela deve rasgar de forma limpa e multidirecional sem deixar fiapos compridos nem exigir tesoura para ser removida rente aos pontos.",
    voceSabia: "O processo de fabricação spunbond de non-woven é tão veloz que uma única linha industrial moderna pode produzir mais de 500 metros quadrados de TNT por minuto a partir de grânulos puros de polímero derretido!",
    practicalExercise: "Pegue três amostras de non-woven: um TNT comum de 40g, uma entretela rasga-fácil de 50g e uma entretela recortável de 80g. Tente rasgar cada uma com as mãos nas direções horizontal, vertical e diagonal. Anote como a orientação das fibras reage em cada amostra.",
    quickSummary: "Estrutura de fibras termoligadas que forma a base das entretelas e sacolas ecológicas; não desfia e oferece resistência mecânica aos pontos.",
    relatedTerms: ["Entretela Rasga-Fácil", "Entretela Recortável (Cut-Away)", "Gramatura da Entretela", "Isotropia Têxtil"],
    tags: ["n-005", "non-woven", "tnt", "entretela", "termoligada", "estabilizador", "artrelados"],
    bibliographicReferences: [
      "INDA (ASSOCIATION OF THE NONWOVEN FABRICS INDUSTRY). Nonwoven Technology Handbook. Cary: INDA, 2021.",
      "ARTRELADOS. Enciclopédia de Estabilizadores e Fibras Termoligadas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-006-numeracao-calibre-agulha-sizing-65-110",
    code: "N-006",
    term: "Numeração e Calibre de Agulha (Needle Sizing: 65/9 a 110/18)",
    letter: "N",
    level: "Fundamental 🟢",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo feminino composto / Do sistema métrico internacional e da escala Singer.",
    origin: "Padronização internacional baseada no sistema métrico europeu (Nm - centésimos de milímetro) e na escala norte-americana Singer.",
    summary: "Escala padronizada que expressa o diâmetro exato da haste da agulha (ex: 75/11 = 0,75 mm), determinando a compatibilidade com linhas e tecidos.",
    definition: "Numeração de agulha é a codificação numérica padronizada que especifica o diâmetro exato da haste cilíndrica da agulha de bordar, expressa conjuntamente nos sistemas Métrico (número maior, ex: 75) e Singer (número menor, ex: 11). A haste de uma agulha calibre 75 possui exatamente 0,75 mm de diâmetro. A escolha correta do calibre é o fator determinante para a penetração suave no tecido, a estabilidade da canaleta para passagem da linha sem atrito e a formação da laçada elíptica perfeita na lançadeira.",
    technicalDetails: "Tabela de calibres e aplicações:\n• 65/9 (0,65 mm): Linhas finas 60wt / 75wt, micro-letras e tecidos leves (seda, organza);\n• 70/10 e 75/11 (0,70 e 0,75 mm): Padrão universal para linhas 40wt em algodão, malha e toalhas;\n• 80/12 e 90/14 (0,80 e 0,90 mm): Linhas metálicas, sarja, jeans, bonés e veludos grossos;\n• 100/16 e 110/18 (1,00 e 1,10 mm): Couro pesado, lona, cinturões e correias industriais.",
    howItWorks: [
      "1. O operador avalia o peso do tecido e o título da linha de bordar.",
      "2. A canaleta frontal da agulha deve acomodar aproximadamente 40% a 50% do diâmetro do fio.",
      "3. A agulha penetra abrindo espaço entre os fios do tecido sem cortar as tramas.",
      "4. A cava traseira (Scarf) posiciona a linha perfeitamente para o bico da lançadeira laçar o fio.",
      "5. A agulha sobe deixando um ponto perfeito sem esgarçamento no tecido."
    ],
    beginnerExplanation: "É a grossura da agulha! O número na caixinha (como 75/11 ou 80/12) indica quão fina ou grossa ela é. Quanto menor o número, mais fininha é a agulha (ótima para tecidos delicados); quanto maior o número, mais grossa e resistente ela é (para jeans e tecidos pesados). No dia a dia, a 75/11 é a 'campeã' que serve para quase tudo!",
    applications: [
      "Uso de agulha calibre 65/9 para bordar textos médicos de 3 mm em bolsos de jalecos de microfibra",
      "Uso de agulha universal 75/11 para bordar toalhas de banho, camisetas de algodão e fraldas de bebê",
      "Uso de agulha calibre 90/14 para bordar jaquetas jeans e bonés estruturados com entretela pesada"
    ],
    commonErrors: [
      "Bordar tecidos finos (como seda ou tricoline leve) com agulha grossa 90/14, deixando furos aparentes ao redor dos pontos",
      "Usar agulha ultrafina 65/9 para bordar com linha metálica, causando quebra constante da linha por atrito",
      "Não trocar a agulha após 8 a 10 horas de uso contínuo, bordando com a ponta rombuda e desgastada"
    ],
    troubleshootingTips: [
      "Se você observa furos esbranquiçados ao redor das letras, reduza o calibre da agulha para 70/10 ou 75/11",
      "Se a linha 40wt desfia antes de formar o ponto, aumente o calibre para 80/12 ou verifique se o olho da agulha está lascado",
      "Para linhas metálicas, use agulhas especiais com olho 2x maior (Topstitch ou Metallic 80/12 e 90/14)"
    ],
    dicaArtrelados: "Tenha sempre no ateliê uma cartela de agulhas 75/11 ponta bola (SES) para malhas e toalhas, uma cartela de 75/11 ponta fina afiada (RG/Microtex) para tecidos planos e uma de 90/14 para linhas metálicas e bonés.",
    voceSabia: "Na escala métrica européia (Nm), uma agulha número 100 tem exatamente 1,00 milímetro de diâmetro na haste, facilitando a medição por paquímetro de precisão em qualquer bancada técnica!",
    practicalExercise: "Examine com uma lupa de ateliê uma agulha 65/9 ao lado de uma 90/14: observe a diferença de espessura da haste, o tamanho do olho da agulha e a profundidade da canaleta frontal por onde o fio corre.",
    quickSummary: "Escala padronizada (Métrica/Singer) que indica o diâmetro da agulha; deve ser equilibrada com o fio e o tecido.",
    relatedTerms: ["Ponta de Agulha (SES, RG, SPI)", "Linha 40wt vs 60wt", "Canaleta da Agulha", "Tensão de Linha"],
    tags: ["n-006", "numeracao de agulha", "calibre", "65/9", "75/11", "90/14", "groz-beckert", "schmetz", "artrelados"],
    bibliographicReferences: [
      "GROZ-BECKERT KG. Precision Needles for Embroidery and Technical Applications. Albstadt: Groz-Beckert, 2023.",
      "ARTRELADOS. Guia Definitivo de Agulhas, Calibres e Pontas no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-007-nivelamento-de-tensao-linha-i-beam-ratio",
    code: "N-007",
    term: "Nivelamento de Tensão de Linha (Tension Balancing / I-Beam Ratio)",
    letter: "N",
    level: "Intermediário 🟡",
    category: "Tensão & Calibração",
    grammarClass: "Substantivo masculino composto / Da engenharia mecânica têxtil.",
    origin: "Do princípio de equilíbrio de forças hidrostáticas e dinâmicas nos discos tensores superiores e mola da bobina para formação do ponto 301.",
    summary: "Calibração entre a tensão superior e a bobina para atingir a proporção perfeita de 1/3 de bobina centralizada no avesso das colunas de satim.",
    definition: "Nivelamento de tensão é o ajuste milimétrico e calibração proporcional entre a força de frenagem aplicada à linha superior (pelos discos tensores do cabeçote) e a força de retenção aplicada à linha da bobina (pela mola da caixa de bobina). O objetivo é alcançar o clássico padrão 'I-Beam' (viga I) no avesso de colunas de ponto cheio (satim), onde a linha superior ocupa exatamente 1/3 nas duas margens laterais e a linha da bobina ocupa o 1/3 central uniforme.",
    technicalDetails: "Equilíbrio de forças dinâmicas:\n• Tensão da Caixa de Bobina: 18 a 25 gramas-força (gf) aferida por tensiômetro Towa;\n• Tensão da Linha Superior: 100 a 130 gf para poliéster 40wt e 80 a 100 gf para viscose e fios metálicos;\n• Proporção no Avesso (I-Beam): 1/3 linha superior esquerda + 1/3 linha de bobina central + 1/3 linha superior direita;\n• Efeito na Superfície: 100% de cor pura sem pontinhos brancos da bobina na face do bordado.",
    howItWorks: [
      "1. A agulha desce e a lançadeira laça a linha superior.",
      "2. O estica-fio sobe recolhendo a folga de linha com a força calibrada pelos discos de tensão.",
      "3. O entrelaçamento ocorre no terço inferior do tecido, sem puxar a bobina para cima.",
      "4. No avesso, a linha superior abraça as laterais e a linha branca da bobina repousa reta no centro.",
      "5. O resultado é um bordado macio, plano e sem repuxamento no tecido."
    ],
    beginnerExplanation: "É a regulagem do cabo de guerra entre a linha de cima (colorida) e a linha de baixo (a bobina branca). Para o bordado ficar lindo, a linha colorida tem que ganhar um pouquinho desse cabo de guerra: no avesso do bordado, você deve ver uma listrinha branca no meio e duas faixas coloridas iguais dos lados. Na frente da peça, só deve aparecer a cor linda da linha colorida!",
    applications: [
      "Calibração matinal com teste de colunas 'H' ou 'E' de satim para conferir o equilíbrio de 1/3 antes da produção",
      "Ajuste da mola da caixa de bobina com tensiômetro Towa para atingir a faixa ideal de 18 a 25 gramas-força",
      "Alívio da tensão superior ao trocar de linha comum de poliéster para linha metálica brilhante"
    ],
    commonErrors: [
      "Tentar compensar uma bobina suja com fiapos apertando desesperadamente o tensor superior até arrebentar o fio",
      "Ignorar o aparecimento de pontinhos brancos da bobina na frente das letras, entregando peças manchadas",
      "Mexer no parafuso da caixa de bobina com giros completos de chave em vez de micro-ajustes de 1/8 de volta"
    ],
    troubleshootingTips: [
      "Se o avesso está 100% branco sem linha colorida nas bordas: solte a tensão superior ou aperte levemente a bobina",
      "Se o avesso está 100% colorido sem a faixa branca central: aperte a tensão superior ou solte a bobina",
      "Limpe os discos tensores passando uma linha dobrada com álcool isopropílico para retirar ceras e fiapos"
    ],
    dicaArtrelados: "Para regular a caixa de bobina sem tensiômetro digital, use o 'teste da gota': segure a ponta da linha da bobina com os dedos e solte a caixa; ela deve descer suavemente alguns centímetros e parar suspensa pelo próprio peso. Se cair direto no chão está frouxa; se não se mover nem sacudindo de leve, está apertada.",
    voceSabia: "O teste padrão mundial para aferir tensão em ateliês e indústrias de bordado consiste em bordar 5 letras 'H' em satim com 2,5 cm de altura, avaliando o percentual de cobertura da bobina no avesso de cada perna da letra.",
    practicalExercise: "Borde uma matriz de teste de tensão com 5 colunas de satim de 1 cm de largura por 5 cm de comprimento. Vire a peça do avesso e meça com uma régua milimétrica: a linha branca da bobina deve ocupar exatamente o terço central em toda a extensão.",
    quickSummary: "Equilíbrio de forças entre a linha superior e a bobina, garantindo a proporção ideal de 1/3 de bobina centralizada no avesso.",
    relatedTerms: ["Caixa de Bobina", "Tensiômetro Towa", "Estica-Fio", "Ponto Satim"],
    tags: ["n-007", "nivelamento de tensao", "i-beam", "tensao de linha", "bobina", "calibracao", "artrelados"],
    bibliographicReferences: [
      "TOWA INDUSTRIAL CO. Bobbin Tension Gauge Operating and Calibration Manual. Tokyo: Towa, 2022.",
      "ARTRELADOS. Manual de Calibração de Tensão Dinâmica e Equilíbrio I-Beam. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-008-nomes-bordados-crachas-corporativos-nametags",
    code: "N-008",
    term: "Nomes Bordados e Crachás Corporativos (Name Drop / Nametags)",
    letter: "N",
    level: "Fundamental 🟢",
    category: "Terminologia Geral",
    grammarClass: "Substantivo masculino composto / Da tradição de uniformização corporativa e militar.",
    origin: "Prática tradicional de identificação pessoal em uniformes corporativos, hospitalares e militares ('name drop' / 'nametag'), otimizada com fontes digitais e matrizes modulares.",
    summary: "Técnica de digitalização e aplicação de nomes individuais e tarjetas de identificação com rigor de legibilidade e alinhamento.",
    definition: "Nomes bordados e crachás corporativos referem-se à técnica especializada de digitalização, dimensionamento e execução de textos de identificação pessoal em peças de vestuário profissional, jalecos, uniformes industriais, kimonos e tags militares removíveis com fecho de contato (velcro). Exige rigor absoluto de legibilidade tipográfica, compensação de encolhimento para letras estreitas, densidade equilibrada para evitar sobreposição excessiva de nós de arremate e alinhamento milimétrico em relação a bolsos e lapelas.",
    technicalDetails: "Parâmetros técnicos para nomes e crachás:\n• Altura de Letra: Mínimo de 5 mm para fontes sem serifa e 7 mm para fontes serifadas com linha 40wt;\n• Densidade: 0,38 mm a 0,42 mm;\n• Sob-Pontos (Underlay): Center Walk para letras finas e Edge Walk para letras médias;\n• Compensação de Repuxo: 0,35 mm a 0,45 mm para manter a largura das hastes tipográficas.",
    howItWorks: [
      "1. O nome é digitado no software usando fontes pré-digitalizadas e testadas para bordado.",
      "2. Aplica-se a compensação de repuxo e sob-ponto central para estruturar cada letra.",
      "3. O operador utiliza um gabarito de alinhamento para marcar a posição exata acima do bolso (2 cm a 2,5 cm).",
      "4. O jaleco ou uniforme é montado no bastidor com entretela rasga-fácil dupla ou no-show mesh.",
      "5. A máquina executa o bordado com velocidade moderada (600 PPM) para máxima nitidez tipográfica."
    ],
    beginnerExplanation: "É o bordado de nomes e profissões em jalecos de médicos, uniformes de empresas, kimonos e toalhinhas escolares. O grande segredo é fazer com que as letras fiquem perfeitamente retinhas, fáceis de ler mesmo de longe, sem fios soltos entre as letras e sem repuxar o bolso do jaleco.",
    applications: [
      "Bordado de nome 'Dr. Carlos Eduardo' com especialidade 'Cardiologia' sobre o bolso superior de jaleco de microfibra",
      "Confecção de tarjeta militar bordada em tecido camuflado com moldura em ponto cheio e velcro macho costurado no avesso",
      "Personalização em lote de 50 camisas polo corporativas com o nome individual de cada colaborador bordado no peito direito"
    ],
    commonErrors: [
      "Tentar bordar nomes longos com altura menor que 4 mm usando linha comum 40wt, transformando as letras em borrões ilegíveis",
      "Bordar o nome torto por não usar gabarito de alinhamento com régua em relação à costura do ombro e do bolso",
      "Deixar cortes de linha automáticos entre cada letrinha de uma palavra cursiva, enchendo o avesso de nós grossos que incomodam"
    ],
    troubleshootingTips: [
      "Para letras menores que 5 mm, troque a linha 40wt por linha 60wt ultrafina e agulha 65/9",
      "Centralize o nome em relação à largura do bolso e não à costura lateral da camisa",
      "Em tecidos elásticos, use entretela recortável (Cut-Away) para evitar que as letras fiquem repuxadas após a lavagem"
    ],
    dicaArtrelados: "Para jalecos e uniformes finos, use entretela rasga-fácil dupla ou entretela solúvel com bastidor bem calibrado. Para posicionar perfeitamente sobre o bolso, use fita métrica marcando 2 cm acima da borda superior do bolso e centralize o nome em relação à largura do bolso, não à largura do peito.",
    voceSabia: "Em matrizes militares e de aviação civil, o padrão internacional de legibilidade exige fontes sem serifa em caixa alta (maiúsculas) com densidade reforçada para permitir leitura rápida a até 2 metros de distância em condições de baixa luminosidade.",
    practicalExercise: "Digitalize o mesmo nome em duas versões: uma com letra cursiva conectada sem cortes intermediários e outra com cortes entre cada letra. Borde ambas no mesmo tecido e cronometre o tempo de bordado e o acabamento no avesso.",
    quickSummary: "Bordado de identificação pessoal e crachás em uniformes; exige rigor de legibilidade, compensação de repuxo e alinhamento geométrico.",
    relatedTerms: ["Micro-Letras", "Compensação de Encolhimento", "Fonte Digitalizada", "Alinhamento com Gabarito"],
    tags: ["n-008", "nomes bordados", "crachas", "nametags", "jalecos", "uniformes", "tipografia", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Lettering and Monogramming Masterclass. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Tipografia Aplicada ao Bordado: Legibilidade, Escalas e Posicionamento. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

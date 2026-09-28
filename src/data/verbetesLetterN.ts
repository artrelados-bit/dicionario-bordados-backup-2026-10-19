import { Verbete } from "../types";

export const VERBETES_LETTER_N: Verbete[] = [
  {
    "id": "n-001-no-de-arremate-tie-off-lock-stitch",
    "code": "N-001",
    "term": "Nó de Arremate (Tie-off / Lock Stitch)",
    "letter": "N",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto / Do latim 'nodus' (laço, nó) e do inglês 'tie-off'.",
    "origin": "Evolução dos nós de remate manuais para sequências algorítmicas de micro-pontos de travamento executadas antes do comando de corte (Trim) nas máquinas computadorizadas.",
    "summary": "Sequência programada de 3 a 6 micro-pontos de ancoragem executada antes do corte de linha para impedir que o bordado desfie.",
    "definition": "O nó de arremate digital (Tie-off / Lock Stitch) é uma sequência de micro-pontos de comprimento ultracurto (0,4 mm a 0,8 mm), executados em padrão geométrico específico (triângulo, vai-e-vem linear ou estrela) exatamente antes do comando de corte de linha (Trim) ou no término de um objeto de bordado. Sua função é entrelaçar irreversivelmente a linha superior e a linha da bobina na estrutura interna do tecido e da entretela, impedindo que a tensão residual da linha faça o ponto desfiar após o corte, no atrito do uso diário ou em repetidas lavagens industriais.",
    "technicalDetails": "Arquitetura técnica do nó de arremate:\n• Comprimento de Ponto: 0,4 mm a 0,8 mm (pontos menores que 0,3 mm cortam as fibras);\n• Formatos Principais: Linear (no ângulo do ponto satim), Triângulo Invertido (máxima resistência mecânica) e Ponto Âncora;\n• Quantidade de Pontos: 3 a 5 penetrações alternadas de alta densidade concentrada;\n• Sincronismo com Corte: Executado imediatamente antes do recuo da faca móvel de corte e retenção da cauda de linha.",
    "howItWorks": [
      "1. Ao finalizar o último ponto de uma coluna de satim ou tatami, o software gera um pequeno deslocamento de retorno.",
      "2. A agulha penetra de 3 a 5 vezes em posições milimetricamente alternadas.",
      "3. A laçada da bobina puxa a extremidade da linha superior, travando o nó no miolo da entretela.",
      "4. A máquina aciona o mecanismo de corte inferior com folga de segurança.",
      "5. O pantógrafo se desloca para o próximo bloco de bordado sem perigo de desmanchar o bloco anterior."
    ],
    "beginnerExplanation": "Imagine que depois de costurar à mão, você precisa dar aquele nozinho firme antes de cortar a linha com a tesoura para a costura não desmanchar. Na máquina de bordar, o nó de arremate é esse nozinho automático feito com vários furinhos bem pequenininhos e juntos. Sem ele, quando a tesourinha da máquina corta a linha, a pontinha se solta e todo o bordado começa a abrir.",
    "applications": [
      "Finalização de letras finas em satim de uniformes escolares, impedindo que as crianças puxem fios soltos",
      "Término de apliques em ponto cheio antes de saltar para a próxima cor da matriz",
      "Arremate em toalhas de banho felpadas onde a lavagem constante desfaz pontos que não tenham nó travado"
    ],
    "commonErrors": [
      "Desativar o nó de arremate para tentar 'economizar pontos', resultando em bordados que desmancham na primeira lavagem",
      "Colocar o nó de arremate na ponta externa de uma letra cursiva em vez de escondê-lo no corpo interno do satim",
      "Utilizar nós excessivamente longos (acima de 1,5 mm) que aparecem como fios cruzados e desalinhados sobre a superfície do bordado"
    ],
    "troubleshootingTips": [
      "Se as pontas das letras estão soltando tufos de linha após o corte, ative a opção 'Tie-off automático' no software de matrizes",
      "Para monogramas finos, configure o arremate no estilo 'Linear no Ângulo do Ponto' para que os micro-pontos fiquem invisíveis",
      "Em tecidos grossos, utilize nó em formato de triângulo de 4 pontos para máxima retenção mecânica"
    ],
    "dicaArtrelados": "No Wilcom ou Embird, configure o nó de arremate com estilo 'Linear no Ângulo do Ponto' para objetos finos e 'Nó em Triângulo' para tatami largo. Em monogramas e textos finos, certifique-se de que o nó ocorra dentro da área que já recebeu sob-ponto (underlay), garantindo invisibilidade absoluta no lado direito da peça.",
    "voceSabia": "Nas máquinas industriais multi-cabeças, a força de tração ao acelerar para o próximo bloco pode arrancar os últimos 10 pontos da matriz em menos de meio segundo se o nó de arremate não tiver sido executado com perfeição!",
    "practicalExercise": "No seu software de programação, crie dois quadrados de tatami idênticos de 3x3 cm. No primeiro, ative o nó de arremate final de 4 micro-pontos; no segundo, desative o arremate e envie para a máquina. Ao retirar do bastidor, corte a cauda de linha rente ao tecido em ambos e esfregue vigorosamente com a unha no avesso: observe a diferença de fixação.",
    "quickSummary": "Micro-pontos de travamento programados no final de cada objeto que impedem o desfiamento do bordado após o corte e uso.",
    "relatedTerms": [
      "Nó de Entrada (Tie-in)",
      "Corte de Linha (Trim)",
      "Ponto de Salto (Jump)",
      "Densidade de Ponto"
    ],
    "imageUrl": "/images/n001_no_arremate_v1.jpg?v=1",
    "imageCaption": "Anatomia do Nó de Arremate: Micro-pontos de ancoragem executados antes do corte de linha e os padrões de arremate linear (para monogramas) e em triângulo (para tatami) em máquina de 1 agulha.",
    "tags": [
      "n-001",
      "no de arremate",
      "tie-off",
      "lock stitch",
      "corte",
      "arremate",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Embroidery Studio: Digitizing Fundamentals and Stitch Architecture. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Manual Técnico de Arremates, Travamentos e Cinemática de Pontos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-002-necessaire-no-bastidor-in-the-hoop-ith",
    "code": "N-002",
    "term": "Nécessaire no Bastidor (In The Hoop - ITH Nécessaire)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo feminino composto / Do francês 'nécessaire' e do inglês 'In The Hoop'.",
    "origin": "Desenvolvida com a evolução das máquinas computadorizadas para confecção integral de peças utilitárias forradas diretamente dentro do bastidor sem necessidade de máquina de costura reta.",
    "summary": "Técnica de confecção automatizada de bolsas e estojos com zíper, forro e acabamento embutido 100% dentro do bastidor.",
    "definition": "Nécessaire ITH é uma técnica de engenharia de matriz e costura automatizada na qual um estojo ou bolsa tridimensional com zíper, forro embutido, quilting decorativo, apliques e acabamento invisível é inteiramente confeccionado, estruturado e fechado dentro dos limites do bastidor da máquina de bordar, sem necessidade de costura em máquina reta tradicional (exceto pelo fechamento final de uma pequena abertura de desviramento).",
    "technicalDetails": "Sequência cinemática da matriz ITH:\n• Fase 1: Marcação da posição do zíper sobre a entretela presa no aro;\n• Fase 2: Pesponto de fixação dos dentes do zíper;\n• Fase 3: Emenda do tecido frontal e manta estruturadora (R1/R2) com costura rebatida;\n• Fase 4: Execução do bordado decorativo, monograma e matelassê;\n• Fase 5: Parada obrigatória para abertura parcial do cursor do zíper;\n• Fase 6: Sobreposição do tecido traseiro e forros avesso com avesso;\n• Fase 7: Costura perimetral dupla reforçada com parada para desviramento.",
    "howItWorks": [
      "1. A entretela é colocada firme no bastidor e a máquina faz a primeira marcação do zíper.",
      "2. O zíper é fixado com fita crepe suave e a máquina costura as fitas laterais.",
      "3. O tecido principal com manta é costurado e rebatido para baixo.",
      "4. A máquina borda o desenho decorativo e o quilting frontal.",
      "5. O operador abre o cursor do zíper até a metade (etapa crucial para desvirar).",
      "6. O forro e o tecido traseiro são posicionados e a máquina executa a costura final.",
      "7. A peça é retirada do bastidor, refilada nos cantos e desvirada pelo zíper aberto."
    ],
    "beginnerExplanation": "É a mágica de fazer uma bolsinha com zíper e forro perfeitinho sem encostar na máquina de costura! A própria máquina de bordar vai desenhando onde colocar o zíper, costura o tecido da frente, borda o desenho, costura o forro e fecha tudo por dentro. Você só vai colocando os tecidos no bastidor conforme a máquina vai parando e pedindo.",
    "applications": [
      "Nécessaire farmacinha e porta-maquiagem com zíper superior embutido e bordado personalizado",
      "Estojo escolar infantil com forro impermeável em nylon resinado feito em bastidor 16x26 cm ou 20x30 cm",
      "Porta-moedas com chaveiro e aba com botão de pressão confeccionado em material sintético Montana/Dollaro"
    ],
    "commonErrors": [
      "Esquecer de abrir o cursor do zíper até a metade antes da costura final de fechamento, impossibilitando desvirar a peça pronta",
      "Deixar o cursor metálico do zíper no caminho exato onde o calcador vai passar, quebrando a agulha e a barra de agulha",
      "Usar ponto muito denso ou agulha grossa em sintéticos, o que causa picote e faz o fundo da nécessaire abrir com o peso"
    ],
    "troubleshootingTips": [
      "Se os cantos ficaram tortos ao desvirar, corte as pontas em diagonal (chanfro) antes de desvirar para reduzir o volume",
      "Use fita crepe de papel suave ou fita micropore para prender o zíper sem deixar resíduos de cola na agulha",
      "Ao prender tecidos por baixo do bastidor, fixe as 4 pontas com fita para que o tecido não dobre sob a chapa"
    ],
    "dicaArtrelados": "Use fita crepe de papel suave ou fita micropore para prender o zíper e os tecidos no bastidor sem deixar cola na agulha. Na hora de prender o forro por baixo do bastidor, segure as pontas com fita para que o tecido não dobre por baixo da chapa de agulha durante o deslocamento do pantógrafo.",
    "voceSabia": "A técnica ITH nasceu no início dos anos 2000 nos Estados Unidos e na Austrália, revolucionando pequenos ateliês que não dominavam corte e costura mas queriam produzir peças utilitárias com alto valor agregado e padronização geométrica perfeita.",
    "practicalExercise": "Programe ou baixe uma matriz simples de porta-moedas ITH. Siga a ordem das cores rigorosamente: marque a entretela, fixe o zíper, borde um pequeno monograma no tecido principal, abra o cursor até o meio, coloque o forro traseiro e execute o fechamento. Desvire e confira o esquadro dos 4 cantos.",
    "quickSummary": "Confecção de bolsas e estojos com zíper e forro embutidos executados 100% no bastidor através de etapas automatizadas.",
    "imageUrl": "/images/n002_necessaire_ith_v1.jpg?v=1",
    "imageCaption": "Engenharia da Técnica Nécessaire no Bastidor (ITH) em 1 Agulha: confecção 100% automatizada no bastidor retangular com fixação do zíper, matelassê decorativo, cursor aberto para desviramento e forro embutido com acabamento invisível.",
    "relatedTerms": [
      "In The Hoop (ITH)",
      "Matriz de Bordado",
      "Ponto Reto de Costura",
      "Entretela Rasga-Fácil"
    ],
    "tags": [
      "n-002",
      "necessaire",
      "in the hoop",
      "ith",
      "ziper",
      "bastidor",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KUBICEK, Sue. In The Hoop Embroidery Projects: Step-by-Step Guide. Ohio: Creative Publishing, 2021.",
      "ARTRELADOS. Engenharia de Matrizes ITH: Estruturas Tridimensionais no Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-003-nylon-poliamida-fios-e-tecidos-tecnicos",
    "code": "N-003",
    "term": "Nylon (Fios de Poliamida e Substratos Sintéticos)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino / Do nome comercial da fibra de poliamida termoplástica.",
    "origin": "Criado pela DuPont na década de 1930 como a primeira fibra sintética do mundo, hoje indispensável tanto em tecidos técnicos (Cordura, Ripstop, Tactel) quanto em linhas de alta tenacidade e fios monofilamento.",
    "summary": "Polímero sintético de altíssima tenacidade usado em tecidos impermeáveis e linhas de alta resistência; requer densidade aliviada e agulhas finas.",
    "definition": "O Nylon (poliamida) é um polímero sintético caracterizado por altíssima resistência à tração, excelente elasticidade de recuperação, baixa absorção de umidade e alta resistência à abrasão e intempéries. No universo do bordado eletrônico, divide-se em dois eixos fundamentais: 1) Como substrato têxtil técnico (jaquetas corta-vento em Tactel, mochilas em Nylon 600/Cordura, bandeiras em Ripstop); e 2) Como linha de bordado (fio monofilamento transparente para aplicações invisíveis ou linhas de poliamida bonderizada para calçados e equipamentos de segurança).",
    "technicalDetails": "Parâmetros técnicos para bordar em Nylon e poliamida:\n• Ponto de Fusão: ~215°C a 250°C (termossensível ao atrito em alta velocidade);\n• Agulhas Recomendadas: 70/10 a 75/11 Ponta Bola Leve (SES) para tecidos impermeáveis ou 90/14 Titânio para Cordura pesada;\n• Densidade de Matriz: Espaçamento de 0,45 mm a 0,50 mm (alívio de 15% a 20% para evitar picote);\n• Compensação de Encolhimento: 0,40 mm a 0,50 mm para compensar o repuxo da fibra elástica.",
    "howItWorks": [
      "1. Ao ser perfurado, o tecido de nylon não cicatriza como o algodão, exigindo agulhas finas e sem rebarbas.",
      "2. A entretela recortável ou No-Show Mesh é colada com spray temporário no verso do tecido sem esticá-lo.",
      "3. A matriz aplica pontos de suporte leves em grade aberta para travar a elasticidade da poliamida.",
      "4. A velocidade da máquina é ajustada para 550-650 PPM para diminuir o calor de fricção na agulha.",
      "5. O bordado finaliza com contornos alinhados e sem enrugamento ao redor das letras."
    ],
    "beginnerExplanation": "Nylon é aquele tecido sintético resistente de jaqueta corta-vento, mochila, pochete e guarda-chuva. Bordar nele exige cuidado porque ele não fura e cicatriza como o algodão: se você colocar muitos pontos juntos com uma agulha grossa, você acaba cortando o tecido como se fosse uma folha de papel picotada.",
    "applications": [
      "Bordado de logomarca institucional em jaquetas impermeáveis de nylon tactel com entretela hidrossolúvel ou malha recortável",
      "Bordado de identificação em bolsas e mochilas táticas confeccionadas em Nylon 600 / Cordura com agulha ponta redonda fina",
      "Aplicação de renda com fio de nylon transparente (monofilamento) para criar fixação invisível"
    ],
    "commonErrors": [
      "Usar agulha 90/14 pesada em jaqueta corta-vento de nylon, abrindo furos visíveis que deixam vazar água e rasgam o tecido",
      "Aplicar densidade normal de algodão em tecidos de nylon resinado, provocando enrugamento grave e corte do tecido",
      "Prender nylon escorregadio no bastidor sem aperto uniforme ou sem entretela adequada, fazendo o desenho descasar o contorno"
    ],
    "troubleshootingTips": [
      "Se o nylon corta ao redor do bordado, aumente o espaçamento entre pontos para 0,48 mm e troque a agulha por 70/10 SES",
      "Para jaquetas finas, utilize entretela No-Show Mesh colada com spray para dar estabilidade sem criar placa dura",
      "Nunca estique o nylon ao colocar no bastidor: apenas assente-o de forma plana para não repuxar ao soltar"
    ],
    "dicaArtrelados": "Ao bordar jaquetas corta-vento de nylon que não podem ficar marcadas no avesso, utilize entretela No-Show Mesh (poliéster emalhado) colada com spray temporário. Nunca estique o nylon ao colocar no bastidor: apenas assente-o de forma plana e suave para que não volte enrugando quando for solto.",
    "voceSabia": "O termo 'Nylon' foi popularizado como um acrônimo urbano para 'New York (NY) e London (LON)', embora a DuPont tenha registrado originalmente como uma variação fonética agradável derivada de 'norun' (que não desfia).",
    "practicalExercise": "Faça um teste de bordado em um retalho de nylon tactel: borde um círculo de 4 cm com densidade padrão de 0,40 mm e agulha 80/12; ao lado, borde o mesmo círculo com densidade aliviada de 0,48 mm, agulha 70/10 SES e compensação de repuxo de 0,45 mm. Compare o enrugamento de ambos.",
    "quickSummary": "Fibra sintética de alta tenacidade usada em tecidos técnicos; exige alívio de densidade e agulhas finas para evitar perfurações irreversíveis.",
    "imageUrl": "/images/n003_nylon_sinteticos_v2.jpg?v=2",
    "imageCaption": "Engenharia de Bordado em Tecidos Sintéticos de Nylon e Poliamida em 1 Agulha: bastidor retangular eletrônico com assentamento plano, entretela No-Show Mesh no verso, agulha fina 70/10 e densidade aliviada a 0,48 mm para prevenir o picote e corte do substrato.",
    "relatedTerms": [
      "Compensação de Repuxo",
      "Entretela No-Show Mesh",
      "Agulha Microtex",
      "Densidade de Ponto"
    ],
    "tags": [
      "n-003",
      "nylon",
      "poliamida",
      "tactel",
      "cordura",
      "sinteticos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DUPONT TEXTILE FIBERS. Nylon and Technical Polyamide Processing Manual. Wilmington: DuPont, 2020.",
      "ARTRELADOS. Guia de Substratos Sintéticos e Tecidos Técnicos no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-004-nivelamento-alinhamento-bastidor-pantografo",
    "code": "N-004",
    "term": "Nivelamento e Alinhamento do Bastidor (Hoop Leveling / Calibration)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto / Do latim 'libella' (nível) e do grego 'pantographos'.",
    "origin": "Da mecânica de precisão dos braços robóticos e servomotores X/Y dos pantógrafos nas máquinas industriais e domésticas de bordado computadorizado.",
    "summary": "Calibração mecânica de planicidade e paralelismo do bastidor em relação à chapa de agulha para eliminar atrito e falhas de ponto.",
    "definition": "Nivelamento e alinhamento do bastidor é o procedimento técnico e mecânico de calibração que assegura a perfeita horizontalidade, planicidade e paralelismo entre o plano inferior do bastidor de bordar e a chapa de agulha da máquina, bem como o esquadro ortogonal de 90° entre os braços de fixação do pantógrafo nos eixos X e Y. O desnível ou torção angular dos braços provoca atrito do aro contra a chapa, altura desuniforme do calcador e perda de precisão geométrica em matrizes de grande porte.",
    "technicalDetails": "Parâmetros de alinhamento e tolerâncias mecânicas:\n• Folga com a Chapa de Agulha: 0,5 mm a 1,0 mm uniforme em todos os 4 quadrantes;\n• Esquadro dos Braços: Ângulo ortogonal de 90° ± 0,05° nos eixos X e Y;\n• Tolerância de Planicidade: Desvio máximo de 0,2 mm na extensão de bastidores de 30x20 cm;\n• Impacto Dinâmico: Evita a quebra de agulha por colisão e a formação do efeito bandeira (Flagging).",
    "howItWorks": [
      "1. O técnico ou operador instala o suporte de bastidor nos trilhos do pantógrafo.",
      "2. Com a máquina desligada, verifica a distância entre o fundo do bastidor e a chapa de agulha em várias posições.",
      "3. Se houver inclinação, ajusta os parafusos de fixação dos suportes de alumínio nos braços tensores.",
      "4. Movimenta o pantógrafo nos extremos dos eixos X e Y para assegurar que não haja atrito em nenhum ponto.",
      "5. Testa com uma matriz de quatro cantos para confirmar o encaixe milimétrico dos contornos."
    ],
    "beginnerExplanation": "É garantir que o bastidor fique retinho e paralelo à mesa da máquina, sem ficar torto, caído para a frente ou raspando na chapa de ferro onde a agulha entra. Se o bastidor estiver torto, de um lado a agulha bate e quebra a linha, e do outro o bordado fica frouxo e com pontos feios.",
    "applications": [
      "Calibração dos suportes de bastidor de uma máquina industrial multi-cabeças para garantir tensão idêntica em todas as cabeças",
      "Ajuste dos trilhos do pantógrafo após transporte ou mudança de ateliê",
      "Correção de braço de encaixe de bastidor gigante (20x30 cm ou 36x20 cm) em máquina de grande porte"
    ],
    "commonErrors": [
      "Apertar os parafusos do braço do pantógrafo com força desigual, causando torção permanente no suporte de alumínio",
      "Apoiar objetos pesados sobre o pantógrafo ou apoiar as mãos no bastidor enquanto a máquina está trabalhando",
      "Utilizar bastidores paralelos de marcas genéricas que possuem engates com espessura fora de tolerância mecânica"
    ],
    "troubleshootingTips": [
      "Se o bastidor raspa audivelmente na chapa ao se movimentar, solte os parafusos do braço e nivele a altura com uma folha de papel",
      "Se as quebras de linha ocorrem sempre no mesmo quadrante do bastidor, meça a planicidade do aro externo sobre um vidro plano",
      "Nunca force o bastidor para baixo ao encaixá-lo: pressione suavemente as travas de liberação"
    ],
    "dicaArtrelados": "Verifique a planicidade do seu bastidor colocando o aro externo sobre uma mesa de vidro perfeitamente plana: se ele mancar ao toque em qualquer um dos quatro cantos, o aro está empenado e deve ser substituído para não comprometer a precisão dos seus bordados.",
    "voceSabia": "Em máquinas industriais de alta velocidade (1.000 a 1.200 PPM), um desnível de apenas 0,3 mm no bastidor pode aumentar a vibração harmônica do pantógrafo a ponto de gerar desgaste prematuro nas guias lineares de rolamento.",
    "practicalExercise": "Com a máquina desligada e um bastidor vazio encaixado, deslize uma folha de papel sulfite sob o bastidor em toda a sua extensão: o papel deve passar suavemente sob todas as áreas sem prender em um ponto nem ficar excessivamente solto em outro. Se prender, ajuste a altura do suporte nos parafusos de regulagem do braço.",
    "quickSummary": "Calibração da planicidade e paralelismo do bastidor com a chapa de agulha, prevenindo atritos, quebras de linha e desvios de ponto.",
    "relatedTerms": [
      "Pantógrafo",
      "Altura do Calcador",
      "Flagging (Efeito Bandeira)",
      "Chapa de Agulha"
    ],
    "tags": [
      "n-004",
      "nivelamento",
      "bastidor",
      "pantografo",
      "calibracao",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA INDUSTRIAL SEWING MACHINES. Maintenance & Mechanical Calibration Manual. Nagoya: Tajima, 2021.",
      "ARTRELADOS. Calibração Mecânica de Pantógrafos e Bastidores Industriais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-005-non-woven-tnt-entretelas-termoligadas",
    "code": "N-005",
    "term": "Non-Woven / Não-Tecido (TNT e Entretelas Termoligadas)",
    "letter": "N",
    "level": "Fundamental 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo masculino / Expressão técnica / Do inglês 'non-woven' (não tecido).",
    "origin": "Processo industrial de consolidação de véus de fibras termoplásticas (spunbond/meltblown) sem tecelagem tradicional, base de 90% das entretelas de bordado modernas.",
    "summary": "Estrutura laminar de fibras sintéticas unidas por calor e pressão que forma a base das entretelas e sacolas ecológicas de bordado.",
    "definition": "Non-Woven (ou Tecido Não-Tecido - TNT) é uma estrutura laminar plana formada por véus de fibras têxteis orientadas aleatoriamente ou direcionadas, consolidadas por fusão térmica (termoligadas), adesão química ou agulhamento mecânico. No bordado eletrônico, é a matéria-prima básica de 90% de todas as entretelas existentes no mercado (rasga-fácil, recortável, hidrossolúvel de fibras e termocolantes), bem como um substrato popular e econômico para confecção de sacolas ecológicas, brindes promocionais e capas de proteção.",
    "technicalDetails": "Características e propriedades do Non-Woven:\n• Matéria-Prima: 100% Polipropileno (PP), Poliéster (PET) ou Blendas de Viscose/Celulose;\n• Gramaturas Usuais: 30g/m² a 120g/m²;\n• Isotropia Estrutural: Resistência multidirecional que não desfia ao ser perfurada pela agulha;\n• Comportamento Térmico: Termossensível (fusão entre 160°C e 260°C dependendo do polímero).",
    "howItWorks": [
      "1. A manta de non-woven é cortada e posicionada sob o tecido no bastidor.",
      "2. Ao penetrar, a agulha desloca as microfibras termoligadas sem romper fios estruturais de trama.",
      "3. As fibras aleatórias travam a força de puxão da linha de bordar em todas as direções.",
      "4. Após o bordado, o non-woven rasga-fácil se rompe limpo na linha perfurada ou o recortável é aparado com tesoura."
    ],
    "beginnerExplanation": "É o famoso TNT e a base de quase todas as entretelas de bordar! Ele não é feito como um tecido comum tecido em tear com fios cruzados; ele é como um papel macio feito de fibras sintéticas coladinhas pelo calor. Por isso ele não desfia e dá sustentação para o bordado não enrugar.",
    "applications": [
      "Uso de entretela non-woven rasga-fácil de 50g/m² para bordar toalhas de banho e enxovais de bebê",
      "Bordado de logotipo institucional em ecobags e mochilas saco de TNT de gramatura 80g a 100g",
      "Entretela non-woven recortável (Cut-Away) aplicada no avesso de camisas polo de malha piquet para manter a forma após centenas de lavagens"
    ],
    "commonErrors": [
      "Usar TNT comum de papelaria (fino e frágil de 30g) como entretela de bordado em tecidos nobres, resultando em deformação e furos",
      "Aplicar ferro de passar muito quente diretamente sobre o non-woven de polipropileno, derretendo a peça instantaneamente",
      "Bordar sacolas de TNT com densidade padrão de tatami fechado, criando um bloco duro que quebra e rasga como cartão perfurado"
    ],
    "troubleshootingTips": [
      "Para sacolas de TNT, reduza a densidade em 20% e use sob-pontos leves em ziguezague",
      "Se a entretela rompe antes do bordado acabar, adote uma entretela non-woven de maior gramatura (80g) ou use duas camadas cruzadas",
      "Teste o rasgo com as mãos: a boa entretela rasga-fácil deve se romper em qualquer direção sem deixar fios compridos"
    ],
    "dicaArtrelados": "Para saber se a entretela non-woven rasga-fácil é de boa qualidade para o ateliê, puxe um pedaço com as mãos: ela deve rasgar de forma limpa e multidirecional sem deixar fiapos compridos nem exigir tesoura para ser removida rente aos pontos.",
    "voceSabia": "O processo de fabricação spunbond de non-woven é tão veloz que uma única linha industrial moderna pode produzir mais de 500 metros quadrados de TNT por minuto a partir de grânulos puros de polímero derretido!",
    "practicalExercise": "Pegue três amostras de non-woven: um TNT comum de 40g, uma entretela rasga-fácil de 50g e uma entretela recortável de 80g. Tente rasgar cada uma com as mãos nas direções horizontal, vertical e diagonal. Anote como a orientação das fibras reage em cada amostra.",
    "quickSummary": "Estrutura de fibras termoligadas que forma a base das entretelas e sacolas ecológicas; não desfia e oferece resistência mecânica aos pontos.",
    "relatedTerms": [
      "Entretela Rasga-Fácil",
      "Entretela Recortável (Cut-Away)",
      "Gramatura da Entretela",
      "Isotropia Têxtil"
    ],
    "tags": [
      "n-005",
      "non-woven",
      "tnt",
      "entretela",
      "termoligada",
      "estabilizador",
      "artrelados"
    ],
    "bibliographicReferences": [
      "INDA (ASSOCIATION OF THE NONWOVEN FABRICS INDUSTRY). Nonwoven Technology Handbook. Cary: INDA, 2021.",
      "ARTRELADOS. Enciclopédia de Estabilizadores e Fibras Termoligadas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-006-numeracao-calibre-agulha-sizing-65-110",
    "code": "N-006",
    "term": "Numeração e Calibre de Agulha (Needle Sizing: 65/9 a 110/18)",
    "letter": "N",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino composto / Do sistema métrico internacional e da escala Singer.",
    "origin": "Padronização internacional baseada no sistema métrico europeu (Nm - centésimos de milímetro) e na escala norte-americana Singer.",
    "summary": "Escala padronizada que expressa o diâmetro exato da haste da agulha (ex: 75/11 = 0,75 mm), determinando a compatibilidade com linhas e tecidos.",
    "definition": "Numeração de agulha é a codificação numérica padronizada que especifica o diâmetro exato da haste cilíndrica da agulha de bordar, expressa conjuntamente nos sistemas Métrico (número maior, ex: 75) e Singer (número menor, ex: 11). A haste de uma agulha calibre 75 possui exatamente 0,75 mm de diâmetro. A escolha correta do calibre é o fator determinante para a penetração suave no tecido, a estabilidade da canaleta para passagem da linha sem atrito e a formação da laçada elíptica perfeita na lançadeira.",
    "technicalDetails": "Tabela de calibres e aplicações:\n• 65/9 (0,65 mm): Linhas finas 60wt / 75wt, micro-letras e tecidos leves (seda, organza);\n• 70/10 e 75/11 (0,70 e 0,75 mm): Padrão universal para linhas 40wt em algodão, malha e toalhas;\n• 80/12 e 90/14 (0,80 e 0,90 mm): Linhas metálicas, sarja, jeans, bonés e veludos grossos;\n• 100/16 e 110/18 (1,00 e 1,10 mm): Couro pesado, lona, cinturões e correias industriais.",
    "howItWorks": [
      "1. O operador avalia o peso do tecido e o título da linha de bordar.",
      "2. A canaleta frontal da agulha deve acomodar aproximadamente 40% a 50% do diâmetro do fio.",
      "3. A agulha penetra abrindo espaço entre os fios do tecido sem cortar as tramas.",
      "4. A cava traseira (Scarf) posiciona a linha perfeitamente para o bico da lançadeira laçar o fio.",
      "5. A agulha sobe deixando um ponto perfeito sem esgarçamento no tecido."
    ],
    "beginnerExplanation": "É a grossura da agulha! O número na caixinha (como 75/11 ou 80/12) indica quão fina ou grossa ela é. Quanto menor o número, mais fininha é a agulha (ótima para tecidos delicados); quanto maior o número, mais grossa e resistente ela é (para jeans e tecidos pesados). No dia a dia, a 75/11 é a 'campeã' que serve para quase tudo!",
    "applications": [
      "Uso de agulha calibre 65/9 para bordar textos médicos de 3 mm em bolsos de jalecos de microfibra",
      "Uso de agulha universal 75/11 para bordar toalhas de banho, camisetas de algodão e fraldas de bebê",
      "Uso de agulha calibre 90/14 para bordar jaquetas jeans e bonés estruturados com entretela pesada"
    ],
    "commonErrors": [
      "Bordar tecidos finos (como seda ou tricoline leve) com agulha grossa 90/14, deixando furos aparentes ao redor dos pontos",
      "Usar agulha ultrafina 65/9 para bordar com linha metálica, causando quebra constante da linha por atrito",
      "Não trocar a agulha após 8 a 10 horas de uso contínuo, bordando com a ponta rombuda e desgastada"
    ],
    "troubleshootingTips": [
      "Se você observa furos esbranquiçados ao redor das letras, reduza o calibre da agulha para 70/10 ou 75/11",
      "Se a linha 40wt desfia antes de formar o ponto, aumente o calibre para 80/12 ou verifique se o olho da agulha está lascado",
      "Para linhas metálicas, use agulhas especiais com olho 2x maior (Topstitch ou Metallic 80/12 e 90/14)"
    ],
    "dicaArtrelados": "Tenha sempre no ateliê uma cartela de agulhas 75/11 ponta bola (SES) para malhas e toalhas, uma cartela de 75/11 ponta fina afiada (RG/Microtex) para tecidos planos e uma de 90/14 para linhas metálicas e bonés.",
    "voceSabia": "Na escala métrica européia (Nm), uma agulha número 100 tem exatamente 1,00 milímetro de diâmetro na haste, facilitando a medição por paquímetro de precisão em qualquer bancada técnica!",
    "practicalExercise": "Examine com uma lupa de ateliê uma agulha 65/9 ao lado de uma 90/14: observe a diferença de espessura da haste, o tamanho do olho da agulha e a profundidade da canaleta frontal por onde o fio corre.",
    "quickSummary": "Escala padronizada (Métrica/Singer) que indica o diâmetro da agulha; deve ser equilibrada com o fio e o tecido.",
    "relatedTerms": [
      "Ponta de Agulha (SES, RG, SPI)",
      "Linha 40wt vs 60wt",
      "Canaleta da Agulha",
      "Tensão de Linha"
    ],
    "tags": [
      "n-006",
      "numeracao de agulha",
      "calibre",
      "65/9",
      "75/11",
      "90/14",
      "groz-beckert",
      "schmetz",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT KG. Precision Needles for Embroidery and Technical Applications. Albstadt: Groz-Beckert, 2023.",
      "ARTRELADOS. Guia Definitivo de Agulhas, Calibres e Pontas no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-007-nivelamento-de-tensao-linha-i-beam-ratio",
    "code": "N-007",
    "term": "Nivelamento de Tensão de Linha (Tension Balancing / I-Beam Ratio)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Tensão & Calibração",
    "grammarClass": "Substantivo masculino composto / Da engenharia mecânica têxtil.",
    "origin": "Do princípio de equilíbrio de forças hidrostáticas e dinâmicas nos discos tensores superiores e mola da bobina para formação do ponto 301.",
    "summary": "Calibração entre a tensão superior e a bobina para atingir a proporção perfeita de 1/3 de bobina centralizada no avesso das colunas de satim.",
    "definition": "Nivelamento de tensão é o ajuste milimétrico e calibração proporcional entre a força de frenagem aplicada à linha superior (pelos discos tensores do cabeçote) e a força de retenção aplicada à linha da bobina (pela mola da caixa de bobina). O objetivo é alcançar o clássico padrão 'I-Beam' (viga I) no avesso de colunas de ponto cheio (satim), onde a linha superior ocupa exatamente 1/3 nas duas margens laterais e a linha da bobina ocupa o 1/3 central uniforme.",
    "technicalDetails": "Equilíbrio de forças dinâmicas:\n• Tensão da Caixa de Bobina: 18 a 25 gramas-força (gf) aferida por tensiômetro Towa;\n• Tensão da Linha Superior: 100 a 130 gf para poliéster 40wt e 80 a 100 gf para viscose e fios metálicos;\n• Proporção no Avesso (I-Beam): 1/3 linha superior esquerda + 1/3 linha de bobina central + 1/3 linha superior direita;\n• Efeito na Superfície: 100% de cor pura sem pontinhos brancos da bobina na face do bordado.",
    "howItWorks": [
      "1. A agulha desce e a lançadeira laça a linha superior.",
      "2. O estica-fio sobe recolhendo a folga de linha com a força calibrada pelos discos de tensão.",
      "3. O entrelaçamento ocorre no terço inferior do tecido, sem puxar a bobina para cima.",
      "4. No avesso, a linha superior abraça as laterais e a linha branca da bobina repousa reta no centro.",
      "5. O resultado é um bordado macio, plano e sem repuxamento no tecido."
    ],
    "beginnerExplanation": "É a regulagem do cabo de guerra entre a linha de cima (colorida) e a linha de baixo (a bobina branca). Para o bordado ficar lindo, a linha colorida tem que ganhar um pouquinho desse cabo de guerra: no avesso do bordado, você deve ver uma listrinha branca no meio e duas faixas coloridas iguais dos lados. Na frente da peça, só deve aparecer a cor linda da linha colorida!",
    "applications": [
      "Calibração matinal com teste de colunas 'H' ou 'E' de satim para conferir o equilíbrio de 1/3 antes da produção",
      "Ajuste da mola da caixa de bobina com tensiômetro Towa para atingir a faixa ideal de 18 a 25 gramas-força",
      "Alívio da tensão superior ao trocar de linha comum de poliéster para linha metálica brilhante"
    ],
    "commonErrors": [
      "Tentar compensar uma bobina suja com fiapos apertando desesperadamente o tensor superior até arrebentar o fio",
      "Ignorar o aparecimento de pontinhos brancos da bobina na frente das letras, entregando peças manchadas",
      "Mexer no parafuso da caixa de bobina com giros completos de chave em vez de micro-ajustes de 1/8 de volta"
    ],
    "troubleshootingTips": [
      "Se o avesso está 100% branco sem linha colorida nas bordas: solte a tensão superior ou aperte levemente a bobina",
      "Se o avesso está 100% colorido sem a faixa branca central: aperte a tensão superior ou solte a bobina",
      "Limpe os discos tensores passando uma linha dobrada com álcool isopropílico para retirar ceras e fiapos"
    ],
    "dicaArtrelados": "Para regular a caixa de bobina sem tensiômetro digital, use o 'teste da gota': segure a ponta da linha da bobina com os dedos e solte a caixa; ela deve descer suavemente alguns centímetros e parar suspensa pelo próprio peso. Se cair direto no chão está frouxa; se não se mover nem sacudindo de leve, está apertada.",
    "voceSabia": "O teste padrão mundial para aferir tensão em ateliês e indústrias de bordado consiste em bordar 5 letras 'H' em satim com 2,5 cm de altura, avaliando o percentual de cobertura da bobina no avesso de cada perna da letra.",
    "practicalExercise": "Borde uma matriz de teste de tensão com 5 colunas de satim de 1 cm de largura por 5 cm de comprimento. Vire a peça do avesso e meça com uma régua milimétrica: a linha branca da bobina deve ocupar exatamente o terço central em toda a extensão.",
    "quickSummary": "Equilíbrio de forças entre a linha superior e a bobina, garantindo a proporção ideal de 1/3 de bobina centralizada no avesso.",
    "relatedTerms": [
      "Caixa de Bobina",
      "Tensiômetro Towa",
      "Estica-Fio",
      "Ponto Satim"
    ],
    "tags": [
      "n-007",
      "nivelamento de tensao",
      "i-beam",
      "tensao de linha",
      "bobina",
      "calibracao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA INDUSTRIAL CO. Bobbin Tension Gauge Operating and Calibration Manual. Tokyo: Towa, 2022.",
      "ARTRELADOS. Manual de Calibração de Tensão Dinâmica e Equilíbrio I-Beam. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-008-nomes-bordados-crachas-corporativos-nametags",
    "code": "N-008",
    "term": "Nomes Bordados e Crachás Corporativos (Name Drop / Nametags)",
    "letter": "N",
    "level": "Fundamental 🟢",
    "category": "Terminologia Geral",
    "grammarClass": "Substantivo masculino composto / Da tradição de uniformização corporativa e militar.",
    "origin": "Prática tradicional de identificação pessoal em uniformes corporativos, hospitalares e militares ('name drop' / 'nametag'), otimizada com fontes digitais e matrizes modulares.",
    "summary": "Técnica de digitalização e aplicação de nomes individuais e tarjetas de identificação com rigor de legibilidade e alinhamento.",
    "definition": "Nomes bordados e crachás corporativos referem-se à técnica especializada de digitalização, dimensionamento e execução de textos de identificação pessoal em peças de vestuário profissional, jalecos, uniformes industriais, kimonos e tags militares removíveis com fecho de contato (velcro). Exige rigor absoluto de legibilidade tipográfica, compensação de encolhimento para letras estreitas, densidade equilibrada para evitar sobreposição excessiva de nós de arremate e alinhamento milimétrico em relação a bolsos e lapelas.",
    "technicalDetails": "Parâmetros técnicos para nomes e crachás:\n• Altura de Letra: Mínimo de 5 mm para fontes sem serifa e 7 mm para fontes serifadas com linha 40wt;\n• Densidade: 0,38 mm a 0,42 mm;\n• Sob-Pontos (Underlay): Center Walk para letras finas e Edge Walk para letras médias;\n• Compensação de Repuxo: 0,35 mm a 0,45 mm para manter a largura das hastes tipográficas.",
    "howItWorks": [
      "1. O nome é digitado no software usando fontes pré-digitalizadas e testadas para bordado.",
      "2. Aplica-se a compensação de repuxo e sob-ponto central para estruturar cada letra.",
      "3. O operador utiliza um gabarito de alinhamento para marcar a posição exata acima do bolso (2 cm a 2,5 cm).",
      "4. O jaleco ou uniforme é montado no bastidor com entretela rasga-fácil dupla ou no-show mesh.",
      "5. A máquina executa o bordado com velocidade moderada (600 PPM) para máxima nitidez tipográfica."
    ],
    "beginnerExplanation": "É o bordado de nomes e profissões em jalecos de médicos, uniformes de empresas, kimonos e toalhinhas escolares. O grande segredo é fazer com que as letras fiquem perfeitamente retinhas, fáceis de ler mesmo de longe, sem fios soltos entre as letras e sem repuxar o bolso do jaleco.",
    "applications": [
      "Bordado de nome 'Dr. Carlos Eduardo' com especialidade 'Cardiologia' sobre o bolso superior de jaleco de microfibra",
      "Confecção de tarjeta militar bordada em tecido camuflado com moldura em ponto cheio e velcro macho costurado no avesso",
      "Personalização em lote de 50 camisas polo corporativas com o nome individual de cada colaborador bordado no peito direito"
    ],
    "commonErrors": [
      "Tentar bordar nomes longos com altura menor que 4 mm usando linha comum 40wt, transformando as letras em borrões ilegíveis",
      "Bordar o nome torto por não usar gabarito de alinhamento com régua em relação à costura do ombro e do bolso",
      "Deixar cortes de linha automáticos entre cada letrinha de uma palavra cursiva, enchendo o avesso de nós grossos que incomodam"
    ],
    "troubleshootingTips": [
      "Para letras menores que 5 mm, troque a linha 40wt por linha 60wt ultrafina e agulha 65/9",
      "Centralize o nome em relação à largura do bolso e não à costura lateral da camisa",
      "Em tecidos elásticos, use entretela recortável (Cut-Away) para evitar que as letras fiquem repuxadas após a lavagem"
    ],
    "dicaArtrelados": "Para jalecos e uniformes finos, use entretela rasga-fácil dupla ou entretela solúvel com bastidor bem calibrado. Para posicionar perfeitamente sobre o bolso, use fita métrica marcando 2 cm acima da borda superior do bolso e centralize o nome em relação à largura do bolso, não à largura do peito.",
    "voceSabia": "Em matrizes militares e de aviação civil, o padrão internacional de legibilidade exige fontes sem serifa em caixa alta (maiúsculas) com densidade reforçada para permitir leitura rápida a até 2 metros de distância em condições de baixa luminosidade.",
    "practicalExercise": "Digitalize o mesmo nome em duas versões: uma com letra cursiva conectada sem cortes intermediários e outra com cortes entre cada letra. Borde ambas no mesmo tecido e cronometre o tempo de bordado e o acabamento no avesso.",
    "quickSummary": "Bordado de identificação pessoal e crachás em uniformes; exige rigor de legibilidade, compensação de repuxo e alinhamento geométrico.",
    "relatedTerms": [
      "Micro-Letras",
      "Compensação de Encolhimento",
      "Fonte Digitalizada",
      "Alinhamento com Gabarito"
    ],
    "tags": [
      "n-008",
      "nomes bordados",
      "crachas",
      "nametags",
      "jalecos",
      "uniformes",
      "tipografia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Lettering and Monogramming Masterclass. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Tipografia Aplicada ao Bordado: Legibilidade, Escalas e Posicionamento. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-009-nevoa-spray-adesivo-temporario-spray-505",
    "code": "N-009",
    "term": "Névoa de Spray Adesivo Temporário (Temporary Mist Adhesive / Spray 505)",
    "letter": "N",
    "level": "Fundamental 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto / Do inglês 'temporary mist adhesive'.",
    "origin": "Desenvolvido na indústria têxtil francesa e norte-americana para fixação reposicionável de tecidos e mantas sem endurecimento das fibras nem transferência de resíduos gomosos.",
    "summary": "Aerossol de resinas reposicionáveis em micropartículas que fixa tecidos sobre a entretela na técnica de flutuação sem deixar resíduos de cola.",
    "definition": "A névoa de spray adesivo temporário é um composto químico aerossol de resinas sintéticas e polímeros elastoméricos de baixa pegajosidade residual, formulado especificamente para fixar temporariamente entretelas, tecidos, mantas estruturadoras e materiais de aplique durante o processo de bordado. Sua principal característica é a pulverização em partículas microscópicas uniformes (névoa fina), permitindo que os tecidos sejam reposicionados várias vezes sem manchar as fibras, sem empastamento na agulha e sem deixar resíduos pegajosos permanentes na peça após o término do bordado.",
    "technicalDetails": "Propriedades químicas e de aplicação do spray adesivo:\n• Composição: Polímeros acrílicos e borrachas sintéticas em solvente volátil não agressivo à camada de ozônio;\n• Distância de Pulverização: 25 cm a 30 cm para dispersão em névoa uniforme;\n• Tempo de Secagem para Cura Tátil: 10 a 15 segundos antes da sobreposição do tecido;\n• Removibilidade: Solúvel em água ou evaporação gradual sem manchar tecidos claros.",
    "howItWorks": [
      "1. A entretela é fixada no bastidor e esticada como a pele de um tambor.",
      "2. O operador aplica uma névoa suave e uniforme de spray adesivo a 30 cm de distância sobre a entretela.",
      "3. Aguarda 10 segundos para que os solventes evaporem, restando apenas a camada aderente reposicionável.",
      "4. O tecido base (ex: toalha, veludo ou sintético) é assentado suavemente com as mãos sem ser esticado.",
      "5. A máquina executa o bordado sem que o tecido escorregue ou deforme nos eixos X e Y."
    ],
    "beginnerExplanation": "É aquela famosa cola em spray temporária usada no bordado! Ela cria uma camadinha bem leve e pegajosa na entretela, parecida com um post-it: você gruda o tecido por cima sem precisar prender o tecido nos aros do bastidor, o que evita marcar tecidos delicados como veludo, toalhas e sintéticos.",
    "applications": [
      "Bordado de toalhas de veludo e roupões atoalhados usando a técnica de flutuação para não esmagar o pelo com o bastidor",
      "Fixação precisa de retalhos de tecido de aplique (patchwork) sobre a linha de marcação da matriz",
      "Adesivação de entretela hidrossolúvel em peças de renda guipir e laços infantis"
    ],
    "commonErrors": [
      "Aplicar o spray perto demais da máquina de bordar, criando uma névoa que gruda nos sensores, guias e barras de agulha",
      "Exagerar na quantidade de spray, empapando o tecido e criando crostas de cola na agulha que fazem a linha arrebentar",
      "Usar colas de artesanato comuns (cola de papel ou adesivo permanente) que endurecem o tecido e travam a lançadeira"
    ],
    "troubleshootingTips": [
      "Crie uma 'caixa de pulverização' de papelão longe da máquina para aplicar o spray sem contaminar os componentes eletrônicos",
      "Se a agulha ficar pegajosa, limpe-a com um algodão embebido em álcool isopropílico ou use agulhas antiaderentes (Anti-Glue)",
      "Para tecidos muito felpudos, passe a mão alisando suavemente o tecido sobre a entretela adesivada para garantir aderência total"
    ],
    "dicaArtrelados": "Crie uma 'caixa de pulverização' no ateliê (uma caixa de papelão funda dedicada longe das máquinas de bordar). Pulverize sempre a entretela dentro da caixa; assim, o ar do ateliê permanece limpo e nenhuma gotícula de cola atinge os componentes eletrônicos ou as engrenagens da máquina.",
    "voceSabia": "O lendário 'Spray 505' foi criado na França pela Odif e tornou-se o padrão mundial da indústria de patchwork e bordado de alta costura porque sua fórmula não contém ácidos, não agride a camada de ozônio e desaparece naturalmente com a evaporação e lavagem.",
    "practicalExercise": "Coloque uma entretela rasga-fácil no bastidor. Pulverize uma camada finíssima de spray adesivo a 30 cm de distância. Pressione um retalho de malha de algodão no centro sem esticar. Borde um círculo de 5 cm e observe como o tecido não enruga nas bordas.",
    "quickSummary": "Adesivo em aerossol de fixação temporária e reposicionável que une tecidos e entretelas sem deixar goma, ideal para técnica de flutuação.",
    "relatedTerms": [
      "Flutuação de Tecido (Floating)",
      "Entretela Rasga-Fácil",
      "Alinhavo Perimetral (Basting)",
      "Agulha Anti-Aderente"
    ],
    "tags": [
      "n-009",
      "spray adesivo",
      "spray 505",
      "cola temporaria",
      "flutuacao",
      "odif",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ODIF FRANCE. Temporary Adhesive Technologies for Textile Industry. Paris: Odif, 2021.",
      "ARTRELADOS. Guia de Insumos Químicos, Adesivos e Fixadores no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-010-neoprene-borracha-sintetica-revestida",
    "code": "N-010",
    "term": "Neoprene (Borracha Sintética Revestida)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino / Do policloropreno expandido revestido.",
    "origin": "Marca registrada da DuPont para a borracha sintética celular desenvolvida em 1931, revestida com malha de poliéster ou poliamida para brindes térmicos e artigos esportivos.",
    "summary": "Elastômero sintético alveolar espesso e flexível; exige montagem por flutuação, densidade aliviada e agulha 75/11 SES para não picotar a borracha.",
    "definition": "Neoprene é um elastômero sintético alveolar caracterizado por isolamento térmico, flexibilidade, memória elástica, impermeabilidade e alta densidade de massa. No bordado computadorizado, é amplamente utilizado na confecção de porta-garrafas térmicos, porta-latas, estojos para notebooks, capas de tablet, luvas esportivas e brindes corporativos. Sua estrutura de borracha espessa e compacta apresenta grande resistência à penetração da agulha e tendência a 'prender' a linha pelo atrito interno da borracha.",
    "technicalDetails": "Parâmetros técnicos para bordar em Neoprene:\n• Espessura Comercial: 2,0 mm a 5,0 mm de espuma de policloropreno revestida;\n• Agulhas Recomendadas: 75/11 ou 80/12 Ponta Bola Leve (SES) ou Ponta Cunha Suave (SD1);\n• Densidade de Matriz: 0,45 mm a 0,50 mm (alívio obrigatório de 15% a 20%);\n• Altura do Calcador: Elevada para 1,5 mm a 2,0 mm para não esmagar a borracha e permitir o deslocamento do pantógrafo.",
    "howItWorks": [
      "1. A entretela rasga-fácil ou recortável pesada é presa no bastidor.",
      "2. O neoprene é assentado por cima usando spray adesivo temporário (técnica de flutuação).",
      "3. Aplica-se um alinhavo perimetral para travar o material emborrachado na entretela.",
      "4. A máquina borda em velocidade moderada (500 a 600 PPM) para evitar superaquecimento da agulha.",
      "5. A matriz utiliza sob-pontos abertos em grade para não picotar o miolo de borracha."
    ],
    "beginnerExplanation": "É aquele material emborrachado e fofinho usado em roupas de mergulho, capas de notebook e porta-copos térmicos. Bordar nele exige cuidado para não encher de pontos juntos demais: como ele é de borracha por dentro, se você fizer muitos furinhos no mesmo lugar, ele corta e solta um pedaço!",
    "applications": [
      "Bordado de logomarcas em porta-latas e porta-garrafas térmicos de neoprene de 3 mm de espessura",
      "Personalização de capas de notebook e nécessaires com forro emborrachado antichoque",
      "Bordado de logotipos em cinturões esportivos e munhequeiras de proteção ortopédica"
    ],
    "commonErrors": [
      "Prender o neoprene com muita força no bastidor de aros plásticos, deixando uma marca permanente de compressão que nunca sai",
      "Usar densidade de ponto cheio muito fechada (menos de 0,35 mm), picotando a borracha e rasgando o logotipo",
      "Bordar em alta velocidade (acima de 700 PPM), superaquecendo a agulha e derretendo o miolo de borracha sintética"
    ],
    "troubleshootingTips": [
      "Se o calcador deixa marcas brilhantes ou prende no deslocamento, aplique fita de Teflon na sola do calcador e aumente a sua altura",
      "Use bastidores magnéticos ou flutuação com spray para eliminar completamente as marcas de bastidor no neoprene",
      "Aumente a compensação de repuxo para 0,50 mm no software para compensar a compressão vertical da borracha"
    ],
    "dicaArtrelados": "Para não marcar o neoprene com o bastidor, utilize bastidores magnéticos ou prenda apenas a entretela rasga-fácil ou recortável no bastidor e fixe o neoprene por cima com spray adesivo temporário e uma moldura de alinhavo suave.",
    "voceSabia": "O neoprene foi inventado por cientistas da DuPont em busca de um substituto artificial para a borracha natural durante a escassez global do início do século XX e foi um dos materiais secretos mais protegidos durante a Segunda Guerra Mundial.",
    "practicalExercise": "Pegue um retalho de neoprene de 3 mm. Monte-o no bastidor usando a técnica de flutuação com spray. Borde duas letras 'A' de 3 cm: uma com densidade padrão de 0,38 mm e outra com densidade aliviada de 0,48 mm. Compare a maciez e a integridade da borracha em ambas.",
    "quickSummary": "Borracha sintética revestida de alta memória elástica; exige flutuação com spray, densidade aliviada e agulha 75/11 SES para não picotar o núcleo celular.",
    "relatedTerms": [
      "Flutuação de Tecido (Floating)",
      "Altura do Calcador",
      "Compensação de Encolhimento",
      "Bastidor Magnético"
    ],
    "tags": [
      "n-010",
      "neoprene",
      "borracha sintetica",
      "termico",
      "flutuacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DUPONT PERFORMANCE ELASTOMERS. Neoprene Technical Processing Handbook. Wilmington: DuPont, 2020.",
      "ARTRELADOS. Guia de Bordados em Materiais Emborrachados e Elastômeros. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-011-no-frances-eletronico-candlewicking",
    "code": "N-011",
    "term": "Nó Francês Eletrônico / Ponto Nó (French Knot / Candlewicking)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino composto / Do ponto manual clássico e da técnica colonial norte-americana.",
    "origin": "Digitalização do ponto artesanal 'French Knot' e da técnica colonial 'Candlewicking' (bordado com pavio de vela) para repetições automáticas em matrizes computadorizadas.",
    "summary": "Ponto decorativo programado que emula pequenas pérolas de linha tridimensionais em alto relevo para enxovais vintage e flores clássicas.",
    "definition": "O nó francês eletrônico (ou ponto Candlewicking digital) é um elemento decorativo programado que emula a textura tridimensional, o relevo arredondado e o aspecto artesanal do nó francês manual. A matriz executa um grupo concêntrico de 8 a 16 micro-pontos superpostos de 0,5 mm a 1,0 mm em formato circular ou espiralado com travamento na base, criando uma pequena 'pérola' de linha em alto relevo sobre o tecido.",
    "technicalDetails": "Estrutura do nó francês eletrônico:\n• Diâmetro Típico: 1,5 mm a 3,5 mm;\n• Contagem de Pontos por Nó: 8 a 16 penetrações concêntricas empilhadas;\n• Linhas Recomendadas: Poliéster 40wt trilobal de alto brilho, algodão 30wt/40wt ou viscose;\n• Velocidade Ideal: 500 a 650 PPM para garantir perfeita redondeza geométrica.",
    "howItWorks": [
      "1. A agulha penetra sucessivamente no mesmo centro geométrico com micro-desvios radiais milimétricos.",
      "2. As camadas de linha superior vão se empilhando umas sobre as outras formando um domo esférico.",
      "3. A linha da bobina ancora a base inferior no verso do tecido.",
      "4. A máquina executa um micro-travamento e salta (ou conecta com ponto corrido sutil) para o próximo nó.",
      "5. O resultado visual é uma linha de 'pérolas' em relevo uniforme e com toque agradável."
    ],
    "beginnerExplanation": "É aquele pontinho que parece uma bolinha ou pérola gordinha de linha sobre o tecido, muito usado em toalhinhas clássicas de bebê, florzinhas vintage e enxovais nobres. A máquina dá vários pontinhos juntinhos no mesmo lugar até formar essa bolinha redondinha e fofa!",
    "applications": [
      "Miolo tridimensional de margaridas e flores em toalhas de lavabo e fraldas de boca",
      "Molduras clássicas estilo 'Candlewicking' ao redor de monogramas de casamento",
      "Olhos de pequenos bichinhos e detalhes de textura em roupinhas infantis de alta costura"
    ],
    "commonErrors": [
      "Programar nós com excesso de pontos (mais de 20 penetrações no mesmo furo), furando o tecido e quebrando a agulha",
      "Usar entretela muito fina em tecidos moles, fazendo com que o nó seja sugado para o avesso pela tensão da bobina",
      "Bordar nós franceses em velocidade máxima da máquina (acima de 850 PPM), gerando bolinhas deformadas"
    ],
    "troubleshootingTips": [
      "Se a bolinha afunda no tecido, reforce a entretela no avesso com rasga-fácil dupla ou coloque plástico solúvel por cima",
      "Para um efeito artesanal perfeito, use linha de algodão opaca ou poliéster fosco sobre linho ou fustão",
      "Verifique se as conexões entre nós estão com corte programado ou com pontos corridos curtos bem discretos"
    ],
    "dicaArtrelados": "Para um efeito vintage e nobre inconfundível em enxovais de bebê, borde nós franceses eletrônicos usando linha de bordar fosca (como algodão ou poliéster opaco) sobre tecido de percal 400 fios ou linho puro.",
    "voceSabia": "Na tradição colonial norte-americana do século XVIII, o 'Candlewicking' era feito pelas mulheres usando o próprio algodão cru torcido dos pavios de vela caseiros, criando colchas inteiras com texturas pontilhadas de nós em relevo que duravam gerações.",
    "practicalExercise": "No seu software de matrizes, crie uma linha curva com 10 nós franceses espaçados em 5 mm com diâmetro de 2 mm. Borde em um tecido de fustão ou percal estruturado com entretela rasga-fácil e sinta o relevo tátil das bolinhas com a ponta dos dedos.",
    "quickSummary": "Ponto decorativo que empilha micro-pontos concêntricos criando pequenas pérolas de linha tridimensionais em relevo sobre o tecido.",
    "relatedTerms": [
      "Ponto Cheio (Satim)",
      "Ponto de Haste",
      "Compensação de Encolhimento",
      "Linha de Viscose"
    ],
    "tags": [
      "n-011",
      "no frances",
      "french knot",
      "candlewicking",
      "relevo",
      "vintage",
      "enxoval",
      "artrelados"
    ],
    "bibliographicReferences": [
      "CLUCAS, Cindy. Complete Guide to Candlewicking and Textured Embroidery. London: Batsford, 2020.",
      "ARTRELADOS. Pontos Decorativos Especiais e Texturas Manuais Digitalizadas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-012-nanotecnologia-em-fios-de-bordado-smart-textiles",
    "code": "N-012",
    "term": "Nanotecnologia em Fios de Bordado (Smart Textiles e Fios Funcionais)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino composto / Da física molecular e da engenharia têxtil moderna.",
    "origin": "Da nanotecnologia e eletrônica vestível (E-Textiles / Smart Wearables), integrando nanopartículas de prata, carbono e grafeno nas fibras têxteis de bordar.",
    "summary": "Linhas tecnológicas com nanopartículas que conferem condutividade elétrica para circuitos vestíveis e propriedades antimicrobianas permanentes.",
    "definition": "Nanotecnologia em fios de bordado refere-se ao desenvolvimento e aplicação de linhas técnicas de bordado cujas fibras recebem tratamentos a nível molecular ou incorporam nanopartículas metálicas (prata, ouro, nanotubos de carbono, grafeno e óxidos cerâmicos). Esses fios especiais conferem aos bordados propriedades funcionais ativas, tais como condutividade elétrica para circuitos vestíveis, propriedades antimicrobianas permanentes, hidrofobicidade extrema (repelência a óleos e líquidos), fotoluminescência prolongada e dissipação de carga estática (ESD).",
    "technicalDetails": "Propriedades físicas e eletroquímicas dos fios nanotecnológicos:\n• Fios Condutivos: Resistência linear inferior a 50 Ω/m com núcleo de polímero revestido por nanopartículas de prata;\n• Fios Antibacterianos: Emissão contínua de íons Ag⁺ com taxa de redução bacteriana superior a 99,9% (norma ISO 20743);\n• Agulha Recomendada: Topstitch ou Titânio 80/12 com olho polido para evitar abrasão molecular;\n• Velocidade de Operação: 350 a 450 PPM para preservar a integridade do recobrimento metálico.",
    "howItWorks": [
      "1. A matriz é desenhada como um circuito impresso em ponto reto (trilhas condutivas).",
      "2. O fio com nanopartículas de prata é alimentado no cabeçote com tensão suave.",
      "3. A máquina costura conectando pontos de solda têxtil a sensores e microcontroladores.",
      "4. Em tecidos hospitalares, a linha antimicrobiana esteriliza as imediações da perfuração da agulha.",
      "5. A peça bordada adquire funções eletrônicas ativas sem perder a flexibilidade têxtil."
    ],
    "beginnerExplanation": "São linhas de bordar do futuro com superpoderes científicos! Elas podem conduzir eletricidade como um fio elétrico de verdade (para acender luzinhas na roupa ou medir os batimentos cardíacos) ou ter micropartículas que matam bactérias e não deixam a roupa pegar cheiro de suor.",
    "applications": [
      "Bordado de sensores de frequência cardíaca e eletrodos têxteis em camisetas esportivas de monitoramento atlético",
      "Bordado de logotipos e identificação em jalecos cirúrgicos e roupas hospitalares usando fios antibacterianos",
      "Trilhas bordadas condutivas conectando baterias flexíveis e iluminação LED em figurinos teatrais e trajes de segurança"
    ],
    "commonErrors": [
      "Bordar trilhas condutivas com pontos satim densos e sobrepostos, esmagando as nanopartículas e interrompendo o sinal elétrico",
      "Deixar pontas soltas de corte de linha que encostam em outras trilhas, provocando curto-circuito no circuito vestível",
      "Submeter peças com fios condutivos a ferros de passar em temperatura máxima ou alvejantes clorados concentrados"
    ],
    "troubleshootingTips": [
      "Meça a continuidade elétrica das trilhas com um multímetro digital em escala ôhmica após o bordado",
      "Limpe a lançadeira para eliminar restos de óleo que possam atuar como isolantes elétricos nos pontos de contato",
      "Utilize linhas de bobina finas (60wt/75wt) para que o verso da trilha não crie volume desnecessário"
    ],
    "dicaArtrelados": "Ao trabalhar com fios condutivos e funcionais, limpe rigorosamente a lançadeira e a caixa de bobina para evitar que resíduos microscópicos de óleo lubrificante isolem as conexões elétricas dos pontos de contato do bordado.",
    "voceSabia": "Bordados com fios condutivos e nanopartículas já foram testados com sucesso pela NASA e pela Agência Espacial Europeia (ESA) em trajes espaciais para monitorar a saúde dos astronautas sem a necessidade de cabos rígidos desconfortáveis!",
    "practicalExercise": "Se tiver acesso a uma amostra de linha condutiva com nanopartículas de prata, enfie-a na agulha superior com linha comum na bobina. Borde uma trilha reta contínua de 10 cm com ponto de 3 mm. Conecte um multímetro nas duas pontas e comprove a condução de corrente contínua.",
    "quickSummary": "Fios tecnológicos com nanopartículas que conferem condução elétrica para circuitos vestíveis e proteção antibacteriana ao bordado.",
    "relatedTerms": [
      "Linha de Bordar",
      "Agulha de Titânio",
      "Ponto Reto de Costura",
      "Tensão de Linha"
    ],
    "tags": [
      "n-012",
      "nanotecnologia",
      "fios condutivos",
      "smart textiles",
      "e-textiles",
      "wearables",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHWARZ, Anne. Smart Textiles and Wearable Electronics: Principles and Applications. Cambridge: Woodhead Publishing, 2022.",
      "ARTRELADOS. Eletrônica Vestível e Têxteis Inteligentes no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-013-nivelamento-sensor-ruptura-linha-optical-sensors",
    "code": "N-013",
    "term": "Nivelamento do Sensor de Ruptura de Linha (Optical & Rotary Break Sensors)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto / Da mecatrônica e sensoriamento optoeletrônico.",
    "origin": "Dos sistemas de monitoramento de fluxo de fio por encoders ópticos rotativos e contatos piezoelétricos em cabeçotes industriais de bordado.",
    "summary": "Calibração e manutenção dos sensores ópticos e rotativos que detectam a quebra de fio e interrompem a máquina no ponto exato da falha.",
    "definition": "Nivelamento do sensor de ruptura de linha é o processo de ajuste de sensibilidade, limpeza óptica e alinhamento mecânico dos sensores responsáveis por detectar instantaneamente a quebra ou término do fio superior ou da bobina. Em máquinas modernas, esses sensores operam por dois princípios fundamentais: 1) Sensores rotativos de pulso magnético/ótico (rodízios com ranhuras que giram com a passagem do fio); ou 2) Sensores de feixe infravermelho e contato elétrico na mola estica-fio (Check Spring sensor).",
    "technicalDetails": "Especificações dos sensores de quebra:\n• Tipo Rotativo: Encoder magnético/ótico gerando pulsos por milímetro de fio deslocado;\n• Janela de Detecção: Parada do motor em 3 a 5 pontos sem pulso de avanço;\n• Faixa de Calibração: Sensibilidade ajustável no painel em níveis (ex: 1 a 10);\n• Tempo de Resposta: Frenagem eletromagnética em menos de 0,05 segundos a 1.000 PPM.",
    "howItWorks": [
      "1. A linha passa pela ranhura do rodízio do sensor ao correr do cone para os discos tensores.",
      "2. O deslocamento do fio faz a polia girar, gerando pulsos elétricos contínuos para a placa-mãe.",
      "3. Se a linha quebrar ou a bobina acabar, o rodízio para de girar.",
      "4. O microprocessador detecta a ausência de pulso por mais de 3 pontos e aciona o freio do motor.",
      "5. A máquina emite aviso sonoro e recua o bastidor para a posição exata da quebra."
    ],
    "beginnerExplanation": "É a regulagem do 'olho eletrônico' da máquina que avisa quando a linha arrebentou ou a bobina acabou. Se ele estiver sujo de poeira ou desregulado, a máquina pode ficar parando à toa toda hora (achando que a linha quebrou) ou pior: continuar bordando no ar sem linha e estragar o tecido!",
    "applications": [
      "Limpeza com pincel e ar comprimido da poeira de linha acumulada dentro dos rodízios do cabeçote industrial",
      "Ajuste da sensibilidade do sensor no painel da máquina para evitar falsos alarmes com linhas metálicas",
      "Calibração do sensor da caixa de bobina que avisa antes do término total da linha inferior"
    ],
    "commonErrors": [
      "Ignorar o acúmulo de fiapos e ceras de linha no rodízio do sensor, travando-o e gerando alertas falsos contínuos",
      "Desativar o sensor de quebra no painel para 'acabar logo', fazendo a máquina bordar milhares de pontos 'no ar'",
      "Passar a linha fora da ranhura do rodízio do sensor durante o enfiamento da linha no cabeçote"
    ],
    "troubleshootingTips": [
      "Se a máquina para toda hora sem a linha ter quebrado: limpe os rodízios com álcool isopropílico e reduza a sensibilidade no painel em 1 ou 2 níveis",
      "Se a linha quebra e a máquina continua bordando sem linha: aumente a sensibilidade do sensor no menu de parâmetros",
      "Verifique se a mola estica-fio está fazendo o curso completo de contato elétrico"
    ],
    "dicaArtrelados": "Faça uma rotina semanal de limpeza com um pincel macio de cerdas naturais embebido em álcool isopropílico nos canais dos rodízios de passagem de linha; isso remove a gordura invisível das linhas e fiapos estáticos, eliminando 99% dos falsos alarmes.",
    "voceSabia": "Em máquinas industriais de altíssima velocidade, o sensor de ruptura de linha é capaz de detectar a parada do fio e frear o eixo principal girando a 1.000 RPM em menos de 0,05 segundos, minimizando o trabalho de retrocesso do bordador!",
    "practicalExercise": "No painel da sua máquina, localize o menu de diagnóstico de sensores. Observe o gráfico ou indicador de pulso do sensor enquanto puxa a linha manualmente pelo guia com velocidade constante. Verifique se o sinal responde de forma linear e limpa.",
    "quickSummary": "Calibração dos sensores ópticos e rotativos que detectam a quebra de linha, interrompendo a máquina no ponto exato da falha.",
    "relatedTerms": [
      "Mola Estica-Fio (Check Spring)",
      "Painel de Comando",
      "Quebra de Linha",
      "Caixa de Bobina"
    ],
    "tags": [
      "n-013",
      "sensor de quebra",
      "encoder",
      "rodizio",
      "sensor optico",
      "calibracao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN CO. LTD. Electronic Sensors and Machine Diagnostics Manual. Ichinomiya: Barudan, 2022.",
      "ARTRELADOS. Sensores Eletrônicos, Diagnóstico e Mecatrônica no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-014-normas-seguranca-bordadeiras-nr12-protecao",
    "code": "N-014",
    "term": "Normas Técnicas de Segurança em Bordadeiras (NR-12 e Proteção Operacional)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo feminino composto / Da legislação trabalhista e de engenharia de segurança.",
    "origin": "Normas regulamentadoras de segurança industrial (no Brasil, a NR-12) e padrões internacionais ISO 11111 para máquinas têxteis automatizadas.",
    "summary": "Dispositivos de proteção física e eletrônica (botões de emergência, cortinas de luz) que garantem a segurança do operador contra acidentes.",
    "definition": "Normas técnicas de segurança em bordadeiras referem-se ao conjunto de diretrizes de engenharia, dispositivos de proteção mecânica, sistemas eletroeletrônicos de intertravamento e práticas operacionais seguras concebidos para prevenir acidentes de trabalho com operadores de bordadeiras industriais e comerciais. Abrange proteção contra esmagamento pelo pantógrafo, perfuração por agulhas em alta velocidade (1.200 PPM), aprisionamento em eixos rotativos e cortes pelo mecanismo automatizado de facas inferiores.",
    "technicalDetails": "Dispositivos de segurança mandatórios:\n• Botões de Emergência: Tipo cogumelo vermelho com retenção mecânica e rearme manual por rotação;\n• Cortinas de Luz Infravermelha: Barreira óptica de segurança categoria 4 na zona frontal de deslocamento do bastidor;\n• Sensores de Intertravamento: Sensores magnéticos/indutivos que desarmam o motor caso a tampa do cabeçote seja aberta;\n• Proteção Individual: Uso obrigatório de óculos de segurança contra estilhaçamento de agulhas e cabelos presos.",
    "howItWorks": [
      "1. A máquina opera monitorada por relés de segurança de duplo canal.",
      "2. Se o operador cruzar o feixe da cortina de luz durante o bordado, o circuito desativa os servomotores.",
      "3. Os freios eletromagnéticos travam o eixo principal e o pantógrafo instantaneamente.",
      "4. O painel bloqueia o acionamento até que o obstáculo seja removido e o sistema rearmado.",
      "5. Em caso de quebra de agulha com estilhaços, os protetores de acrílico retêm os fragmentos de aço."
    ],
    "beginnerExplanation": "São todas as regras e travas de segurança que existem para proteger o operador de se machucar na máquina! Como as bordadeiras industriais são muito rápidas e têm peças afiadas e motores fortes, existem botões vermelhos de emergência, grades de proteção e sensores que param tudo na hora se alguém chegar perto demais da agulha em movimento.",
    "applications": [
      "Instalação de barreira óptica de cortina de luz na frente de uma máquina industrial multi-cabeças",
      "Acionamento imediato do botão de emergência pelo operador ao perceber uma linha enrolada no eixo principal",
      "Uso obrigatório de óculos de proteção contra estilhaços de agulha em produções pesadas de bonés e couros"
    ],
    "commonErrors": [
      "Burlar ou 'jumpear' sensores de tampa e cortinas de luz para acelerar a troca de bastidores",
      "Tentar puxar fiapos ou ajeitar tecidos perto da agulha com a máquina em funcionamento a 800 PPM",
      "Operar bordadeiras usando cabelos soltos, colares, anéis ou roupas com mangas largas que podem ser sugados"
    ],
    "troubleshootingTips": [
      "NUNCA coloque as mãos ou ferramentas de metal dentro do bastidor com o botão verde aceso: aperte sempre STOP",
      "Teste semanalmente o funcionamento mecânico dos botões de parada de emergência",
      "Mantenha os protetores de acrílico transparentes e limpos sobre a barra de agulha"
    ],
    "dicaArtrelados": "Crie a regra de ouro no seu ateliê: NUNCA coloque as mãos ou ferramentas de metal (tesouras, pinças) dentro da área do bastidor enquanto o botão verde estiver aceso ou a máquina estiver em ciclo de movimento. Aperte SEMPRE a tecla 'STOP' antes de tocar no tecido.",
    "voceSabia": "Uma agulha de bordadeira industrial descendo a 1.000 pontos por minuto atinge uma velocidade de ponta superior a 40 km/h: se atingir um dedo ou uma ferramenta de metal, ela se fragmenta em micro-estilhaços de aço que podem atingir os olhos do operador.",
    "practicalExercise": "Faça um checklist de segurança no seu equipamento: teste o botão de parada de emergência (ele deve travar no fundo e cortar a força do motor imediatamente), inspecione os protetores de acrílico das agulhas e verifique se as tampas laterais estão bem parafusadas.",
    "quickSummary": "Diretrizes e dispositivos de proteção mecânica e eletrônica que garantem a integridade física do operador contra acidentes.",
    "relatedTerms": [
      "Pantógrafo",
      "Painel de Comando",
      "Manutenção Preventiva",
      "Quebra de Agulha"
    ],
    "tags": [
      "n-014",
      "seguranca",
      "nr-12",
      "emergencia",
      "cortina de luz",
      "protecao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MINISTÉRIO DO TRABALHO E EMPREGO (BRASIL). Norma Regulamentadora NR-12: Segurança no Trabalho em Máquinas e Equipamentos. Brasília: MTE, 2022.",
      "ARTRELADOS. Manual de Segurança Operacional e Prevenção de Riscos em Bordados Industriais. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-015-no-cego-enrosco-guia-fio-snarl-kink",
    "code": "N-015",
    "term": "Nó Cego e Enrosco no Guia-Fio (Snarl / Loop Entanglement)",
    "letter": "N",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto / Do nó de torção elástica.",
    "origin": "Do comportamento dinâmico de torção Z nos cones de fios sintéticos de filamento contínuo durante o desenrolamento em alta rotação.",
    "summary": "Torção e enrolamento espontâneo do fio no suporte ou guia-fio antes dos tensores, prevenido com suporte alto e redinhas elásticas no cone.",
    "definition": "Nó cego e enrosco no guia-fio é a anomalia mecânica na qual a linha de bordar, ao desenrolar do cone em alta velocidade, sofre torção sobre o próprio eixo devido à memória elástica, eletricidade estática ou tensão irregular, formando pequenas laçadas retorcidas (kinks/snarls) que se fecham como laços corredios antes de entrar nos discos tensores ou ao passar pelos ilhoses dos guias-fios, causando estrangulamento imediato e quebra do fio.",
    "technicalDetails": "Fatores causadores de enrosco dinâmico:\n• Torção de Fábrica: Rotação Z no filamento que acumula torque durante o desenrolar vertical (Over-End);\n• Distância do Guia-Fio: O primeiro ilhós deve estar a pelo menos 2 a 2,5 vezes a altura do cone;\n• Eletricidade Estática: Agravada por umidade relativa do ar inferior a 40%;\n• Solução Mecânica: Uso de redinhas elásticas (Thread Nets) para contenção do balão de fio.",
    "howItWorks": [
      "1. A linha sai verticalmente do topo do cone em alta velocidade.",
      "2. Ao girar no ar (efeito balão), a linha escorrega e cai para a base do cone plástico.",
      "3. O laço solto se enrosca no pino metálico ou no suporte de linhas.",
      "4. O avanço da máquina puxa o laço, fechando um nó cego apertado.",
      "5. A linha trava abruptamente, quebrando com estalo seco antes de chegar à agulha."
    ],
    "beginnerExplanation": "É quando a linha do cone começa a dar piruetas no ar e dá aquele nó teimoso antes mesmo de entrar na máquina! Ela se enrola no ferrinho do suporte de linha ou cai por baixo do carretel, trava tudo e quebra a linha de repente com um estalo.",
    "applications": [
      "Controle de desenrolamento de cones de viscose de 5.000 metros com redinhas elásticas",
      "Eliminação de nós em fios metálicos rígidos que espiralam no ar",
      "Alinhamento da altura da árvore de linhas para evitar atrito nas bordas dos cones"
    ],
    "commonErrors": [
      "Usar cones de linha deitados ou em suportes improvisados muito baixos, forçando o fio a sair raspando na borda plástica",
      "Não utilizar a redinha de proteção elástica em cones de linhas muito escorregadias (como viscose e fios metálicos)",
      "Deixar rebarbas plásticas na base do cone que agarram a linha durante o desenrolar em alta velocidade"
    ],
    "troubleshootingTips": [
      "Coloque uma redinha elástica cobrindo a metade inferior do cone para controlar a saída do fio sem aumentar a tensão",
      "Eleve a haste do guia-fio superior para que a linha saia reta e perpendicular ao cone",
      "Passe uma lixa d'água 600 na base plástica do cone se houver rebarbas que prendam a linha"
    ],
    "dicaArtrelados": "Use sempre as 'redinhas de linha' (mangas de malha elástica) cobrindo a metade inferior dos cones de viscose e linhas metálicas. A redinha segura as voltas de linha soltas sem aumentar a tensão, evitando que o fio caia na base do cone e cause nós cegos.",
    "voceSabia": "Em fábricas de bordado têxtil de alta tecnologia, a umidade relativa do ar é mantida rigorosamente entre 50% e 60%: isso elimina a eletricidade estática dos fios sintéticos de poliéster, reduzindo em até 70% a incidência de enroscos nos guias-fios!",
    "practicalExercise": "Coloque um cone de linha metálica ou viscose no suporte sem redinha e puxe rapidamente 3 metros de linha com as mãos: observe como ela forma espirais no chão. Agora coloque a redinha elástica no cone e puxe novamente: veja como o fio sai reto e controlado.",
    "quickSummary": "Torção e enrolamento espontâneo do fio no suporte de linha, prevenido com suporte alto e redinhas elásticas no cone.",
    "relatedTerms": [
      "Redinha de Linha (Thread Net)",
      "Suporte de Linhas / Árvore de Cones",
      "Quebra de Linha",
      "Linha Metálica"
    ],
    "tags": [
      "n-015",
      "no cego",
      "enrosco",
      "guia-fio",
      "redinha",
      "snarl",
      "artrelados"
    ],
    "bibliographicReferences": [
      "COATS INDUSTRIAL THREADS. Thread Handling, Static Control and Feed Dynamics. London: Coats, 2021.",
      "ARTRELADOS. Guia de Gestão de Fios, Suportes e Dinâmica de Desenrolamento. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-016-niquelagem-revestimentos-agulhas-cromo-titanio-teflon",
    "code": "N-016",
    "term": "Niquelagem e Revestimentos de Agulhas (Cromo, Titânio e Teflon / PD Finish)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino composto / Da metalurgia de precisão e tratamentos termoquímicos.",
    "origin": "Desenvolvido pelos fabricantes alemães (Groz-Beckert, Schmetz) e japoneses (Organ) para dissipação térmica e resistência ao desgaste por atrito.",
    "summary": "Tratamentos de superfície (Cromo, Titânio dourado, Teflon antiaderente) que aumentam a vida útil da agulha, dissipam calor e repelem resíduos de cola.",
    "definition": "Niquelagem e revestimentos de agulhas são os tratamentos termoquímicos e deposições metalúrgicas superficiais aplicados sobre o corpo de aço carbono da agulha de bordar para aprimorar seu desempenho mecânico e térmico. Os principais tipos industriais incluem: 1) Revestimento de Níquel/Cromo (resistência clássica à oxidação e acabamento liso); 2) Revestimento de Nitreto de Titânio - PD/GEBEDUR (camada dourada de dureza cerâmica extrema que dura até 5 vezes mais que o cromo); e 3) Revestimento Anti-Aderente Anti-Glue / Teflon (camada polimérica escura que repele resíduos de colas spray e termocolantes).",
    "technicalDetails": "Comparações metalúrgicas de revestimento:\n• Revestimento de Cromo: Dureza ~900 HV, acabamento brilhante liso para uso geral em tecidos planos;\n• Revestimento de Titânio (TiN / GEBEDUR): Dureza ~2.300 HV, camada dourada ultrafina com durabilidade 5x superior em jeans e bonés;\n• Revestimento Antiaderente (Anti-Glue): Coeficiente de atrito ultra-baixo com polímero antiaderente que repele colas de spray 505 e adesivos.",
    "howItWorks": [
      "1. A agulha penetra em alta velocidade (1.000 PPM), gerando temperaturas superiores a 150°C pelo atrito.",
      "2. O revestimento de titânio dissipa o calor rapidamente, mantendo a afiação da ponta intacta.",
      "3. Em materiais com adesivo, o revestimento antiaderente impede que a cola grude no olho da agulha.",
      "4. A linha corre suavemente pela canaleta sem sofrer abrasão ou desfiamento.",
      "5. A vida útil da agulha é estendida de 8 horas (cromo) para até 40 horas contínuas (titânio)."
    ],
    "beginnerExplanation": "É a 'armadura' especial que a agulha recebe na fábrica! Tem agulha prateada tradicional (de cromo), agulha dourada (feita com titânio super resistente que não desgasta a ponta e dura muito mais) e agulha escura anti-cola (especial para bordar coisas com cola spray sem ficar empastando a linha).",
    "applications": [
      "Uso de agulhas de Titânio (douradas) em produções industriais contínuas de bonés estruturados e calçados",
      "Uso de agulhas Anti-Glue (antiaderentes) para bordar tecidos fixados com alto teor de spray adesivo ou entretelas autoadesivas",
      "Aplicação de agulhas de cromo polido padrão para bordados finos em seda e enxovais de algodão"
    ],
    "commonErrors": [
      "Usar agulhas comuns de cromo para bordar materiais com cola permanente, limpando a agulha a cada 5 minutos por empastamento",
      "Achar que agulha de titânio nunca precisa ser trocada: o olho da agulha sofre micro-desgaste após 40-50 horas de uso",
      "Limpar agulhas revestidas com lixas ou lâminas de metal, riscando o revestimento cerâmico e arruinando a peça"
    ],
    "troubleshootingTips": [
      "Se você borda muito com spray temporário e a agulha fica suja de cola, adote a agulha Schmetz Super NonStick",
      "Para bonés duros ou bordados 3D em E.V.A., utilize agulhas de titânio Groz-Beckert GEBEDUR para evitar deflexão",
      "Substitua a agulha a cada 35-40 horas de trabalho contínuo mesmo que a ponta pareça visualmente perfeita"
    ],
    "dicaArtrelados": "Para quem trabalha com patchwork, apliques e técnica de flutuação com spray, a agulha Schmetz Super NonStick (antiaderente) ou Groz-Beckert GEBEDUR com revestimento cerâmico é o melhor investimento do ateliê para eliminar paradas por quebra de linha.",
    "voceSabia": "O revestimento de Nitreto de Titânio (TiN) possui dureza Vickers de aproximadamente 2.300 HV — quase três vezes mais duro que o aço temperado comum — e é a mesma tecnologia utilizada em brocas industriais de perfuração aeroespacial!",
    "practicalExercise": "Pegue uma agulha comum e uma agulha antiaderente (Anti-Glue). Aplique uma gota de cola em spray diretamente no corpo de ambas e deixe secar por 1 minuto. Passe a ponta de um fio de linha de bordar pelo olho de cada uma e compare a facilidade de deslizamento.",
    "quickSummary": "Tratamentos superficiais (Cromo, Titânio cerâmico e Teflon) que multiplicam a durabilidade da agulha e repelem resíduos de cola.",
    "relatedTerms": [
      "Numeração e Calibre de Agulha",
      "Agulha Anti-Aderente",
      "Ponta de Agulha (SES, RG, SPI)",
      "Cava da Agulha (Scarf)"
    ],
    "tags": [
      "n-016",
      "niquelagem",
      "revestimento",
      "titanio",
      "teflon",
      "anti-glue",
      "gebedur",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ NEEDLES. Specialty Needles and Surface Coatings Guide. Herzogenrath: Schmetz, 2022.",
      "ARTRELADOS. Metalurgia de Agulhas: Revestimentos de Titânio, Cerâmica e Polímeros. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-017-numeracao-pantone-paleta-linhas-thread-matching",
    "code": "N-017",
    "term": "Numeração Pantone vs. Paleta de Linhas (Thread Matching / Color Chart)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo feminino composto / Da colorimetria gráfica internacional e indústria têxtil.",
    "origin": "Do sistema 'Pantone Matching System' (PMS) criado nos anos 1960 nos EUA, associado às tabelas de conversão das principais fiações mundiais de bordado.",
    "summary": "Conversão técnica entre as cores gráficas da escala Pantone e os códigos de cones de fios dos fabricantes, garantindo fidelidade cromática corporativa.",
    "definition": "Numeração Pantone vs. Paleta de Linhas é o processo técnico de conversão e correspondência colorimétrica entre as cores de uma identidade visual (especificadas pela escala gráfica internacional Pantone Solid Coated / PMS) e os códigos de cores reais das cartelas de fios de bordar dos fabricantes têxteis (como Madeira Polyneon, Gütermann, Lumina/Setta, Isacord, Marathon, Sulky e Ricoma). Envolve a compensação do brilho especular e do reflexo das fibras trilobais que alteram a percepção da cor sob diferentes fontes de iluminação (metamerismo).",
    "technicalDetails": "Processo de conversão colorimétrica:\n• Escala de Origem: Cores sólidas Pantone (PMS - Ex: Pantone 186 C / Vermelho Coca-Cola);\n• Cálculo Delta E (ΔE): Tolerância de diferença de cor perceptível (ΔE < 1,5 considerado imperceptível a olho nu);\n• Efeito de Fibras Trilobais: O filamento triangular de poliéster reflete a luz mudando de tom conforme o ângulo do ponto;\n• Iluminação Padronizada: Avaliação em cabine de luz normalizada D65 (luz do dia artificial a 6.500K).",
    "howItWorks": [
      "1. O cliente fornece o manual de marca com os códigos Pantone oficiais.",
      "2. O programador consulta a tabela de correspondência no software de bordado.",
      "3. O software sugere o código de linha comercial com o menor índice Delta E.",
      "4. O bordador confere a amostra real na cartela física de fios sob iluminação natural ou cabine D65.",
      "5. A máquina é abastecida com o cone de linha correspondente para a produção em lote."
    ],
    "beginnerExplanation": "É a 'tradução' das cores oficiais do cliente para as cores reais das linhas que você tem no ateliê! Como na tela do computador as cores são feitas de luz e no bordado usamos linhas de verdade com brilho, essa tabela diz qual o número exato do cone de linha que bate com o logotipo da empresa.",
    "applications": [
      "Conversão do vermelho exato de uma multinacional de bebidas (Pantone 186 C) para a linha de poliéster correspondente",
      "Montagem de catálogo de linhas do ateliê com correspondência direta dos códigos Lumina/Setta mais usados no Brasil",
      "Ajuste de cores em brasões militares que exigem tons exatos de verde-oliva e azul-aeronáutica conforme portaria oficial"
    ],
    "commonErrors": [
      "Confiar cegamente na cor que aparece na tela de um monitor não calibrado sem checar a cartela de fios física",
      "Trocar a linha de poliéster brilhante por linha de viscose opaca no meio de uma produção em lote",
      "Não avisar o cliente corporativo sobre o índice Delta E quando uma cor Pantone específica não possui linha têxtil 100% idêntica"
    ],
    "troubleshootingTips": [
      "Adquira a cartela física de amostras de fios com fios reais enrolados do fabricante que você mais usa no ateliê",
      "Avalie a cor do bordado sempre sob a luz natural do dia para evitar distorções de lâmpadas amareladas",
      "No Wilcom ou Embird, utilize a ferramenta 'Converter para Linha' selecionando a sua marca de linha favorita"
    ],
    "dicaArtrelados": "Adquira a cartela física de amostras de fios com fios reais enrolados do fabricante que você mais usa no ateliê (Lumina, Madeira, Ricoma). Coloque a cartela física ao lado do manual impresso do cliente sob a luz do dia (luz natural) para escolher a cor perfeita sem margem de erro.",
    "voceSabia": "As linhas de poliéster trilobal têm filamentos com seção transversal triangular que refletem a luz como pequenos prismas: por isso, uma mesma cor de linha pode parecer sutilmente diferente se for bordada na horizontal ou na vertical!",
    "practicalExercise": "Abra seu software de matrizes e crie um quadrado de tatami. No seletor de cores, escolha uma cor Pantone clássica (ex: Pantone 021 C - Laranja). Use a ferramenta 'Converter para Linha' e veja qual código de linha da sua marca favorita o programa recomenda.",
    "quickSummary": "Conversão técnica entre as cores gráficas Pantone e os códigos de cones de fios dos fabricantes para fidelidade cromática.",
    "relatedTerms": [
      "Mapeamento de Cores",
      "Linha de Poliéster Trilobal",
      "Ângulo de Ponto",
      "Delta E"
    ],
    "tags": [
      "n-017",
      "pantone",
      "paleta de linhas",
      "colorimetria",
      "madeira",
      "isacord",
      "lumina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "PANTONE LLC. Pantone Color Matching System & Textile Color Cross-Reference Guide. Carlstadt: Pantone, 2022.",
      "ARTRELADOS. Colorimetria Têxtil, Escalas Pantone e Mapeamento de Fios de Bordar. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-018-ninho-de-passarinho-embolamento-avesso-birds-nesting",
    "code": "N-018",
    "term": "Ninho de Passarinho / Embolamento no Avesso (Bird's Nesting)",
    "letter": "N",
    "level": "Fundamental 🟢",
    "category": "Solução de Problemas",
    "grammarClass": "Substantivo masculino / Expressão idiomática internacional do bordado.",
    "origin": "Da semelhança visual do emaranhado de fios acumulados sob a chapa com um ninho de pássaro ('bird's nest').",
    "summary": "Emaranhado caótico de linhas acumulado no avesso e na lançadeira, causado por linha superior sem tensão ou fora do estica-fio; trava a máquina.",
    "definition": "Ninho de passarinho (Bird's Nesting) é uma das falhas operacionais mais graves e frequentes no bordado computadorizado, caracterizada pelo acúmulo repentino e maciço de dezenas ou centenas de laçadas de linha superior soltas e emaranhadas no avesso do tecido, dentro da chapa de agulha e ao redor da pista da lançadeira. O acúmulo gera uma maça densa de fios que trava mecanicamente o movimento do bastidor, puxa o tecido para dentro do furo da chapa (engolimento) e pode provocar a quebra da agulha, empenamento da barra de agulha ou travamento com erro de sobrecarga no servomotor do eixo principal.",
    "technicalDetails": "Mecânica do colapso de tensão:\n• Causa Primária (95% dos casos): Enfiamento da linha superior com o calcador abaixado (discos tensores fechados);\n• Causa Secundária: Fio superior escapado do estica-fio (Take-up Lever);\n• Efeito Cinemático: O estica-fio não recolhe a folga de linha a cada ciclo; a lançadeira laça metros de linha frouxa sem tensão no fundo da chapa;\n• Risco Mecânico: Danos aos sensores de fim de curso e dentes da correia dentada do pantógrafo se forçado.",
    "howItWorks": [
      "1. A linha superior corre livre sem frenagem nos discos de tensão.",
      "2. A agulha desce e a lançadeira gira, puxando um laço largo de linha.",
      "3. Como o estica-fio não consegue recolher o fio solto, a laçada permanece sob a chapa.",
      "4. A cada nova descida de agulha, mais 5 a 10 cm de linha se acumulam na pista da lançadeira.",
      "5. O bolo de fios engole o tecido pelo orifício da chapa, travando os eixos X e Y da máquina."
    ],
    "beginnerExplanation": "É aquele pesadelo em que a máquina começa a fazer um barulho estranho e, quando você olha por baixo do bastidor, tem um bolo gigante de linhas emboladas parecendo um ninho de passarinho preso no buraco da máquina! Isso acontece quase sempre porque a linha de cima não passou direito nos discos de tensão ou escapou do ferrinho que sobe e desce (estica-fio).",
    "applications": [
      "Diagnóstico rápido de travamento mecânico do bastidor com erro 'Main Motor Overload'",
      "Remoção e limpeza segura de aglomerados de linha na lançadeira sem rasgar o tecido do cliente",
      "Procedimento padrão de passagem de linha sempre com o calcador levantado"
    ],
    "commonErrors": [
      "Puxar o bastidor com força bruta enquanto a peça está presa no ninho, entortando os braços do pantógrafo",
      "Tentar cortar o bolo de linha por cima rasgando o tecido do cliente em vez de desmontar a chapa com calma",
      "Continuar bordando após limpar o ninho sem repassar a linha superior desde o cone com o calcador levantado"
    ],
    "troubleshootingTips": [
      "DESLIGUE a máquina imediatamente ao ouvir o ruído surdo de travamento",
      "Desparafuse a chapa de agulha e corte as linhas por baixo com tesoura de ponta curva fina",
      "Ao reenviar a linha, LEVANTE a alavanca do calcador para que os discos de tensão se abram e abracem o fio"
    ],
    "dicaArtrelados": "Para remover um ninho de passarinho com segurança: DESLIGUE a máquina, desencaixe o bastidor do pantógrafo (sem puxar para cima), corte as linhas por baixo com uma lâmina curva fina ou tesoura de ponta e remova a chapa de agulha para limpar todos os restos de linha da lançadeira antes de recomeçar.",
    "voceSabia": "As máquinas de bordar têm uma mola de abertura nos discos de tensão que só se abre quando a alavanca do calcador está LEVANTADA. Por isso, passar a linha com o calcador abaixado é a causa raiz de quase todos os ninhos de passarinho do mundo!",
    "practicalExercise": "Com um retalho de tecido teste no bastidor, retire propositalmente a linha superior do estica-fio (deixando-a solta) e dê 10 pontos: pare imediatamente e olhe o avesso para entender visualmente como a falta de recolhimento gera o ninho de passarinho instantâneo.",
    "quickSummary": "Emaranhado denso de linhas acumulado no avesso e na lançadeira, causado por linha superior sem tensão ou fora do estica-fio.",
    "relatedTerms": [
      "Estica-Fio",
      "Tensão de Linha",
      "Caixa de Bobina",
      "Lançadeira Rotativa"
    ],
    "tags": [
      "n-018",
      "ninho de passarinho",
      "birds nest",
      "embolamento",
      "estica-fio",
      "solucao de problemas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER INDUSTRIES. Troubleshooting Guide & Mechanical Safety. Nagoya: Brother, 2022.",
      "ARTRELADOS. Guia de Solução de Problemas Mecânicos e Diagnóstico de Falhas de Ponto. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-019-nylon-monofilamento-fio-invisivel-transparente",
    "code": "N-019",
    "term": "Nylon Monofilamento / Fio Invisível (Monofilament Nylon Thread)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto / Da extrusão de filamento único de poliamida.",
    "origin": "Extrusão contínua de polímero de poliamida transparente sem torção multifilar, similar ao fio de pesca de altíssima maleabilidade para alta costura.",
    "summary": "Linha transparente de filamento único de poliamida que se camufla na cor do tecido; ideal para apliques invisíveis, quilt e vestidos de noiva.",
    "definition": "Nylon monofilamento (popularmente chamado de fio invisível de bordado) é uma linha de poliamida transparente e translúcida composta por um único filamento contínuo extremamente fino e maleável (título variando de 0,08 mm a 0,12 mm de espessura). Sua propriedade óptica de refletir a cor do tecido subjacente torna a linha praticamente imperceptível à vista humana, sendo indispensável para fixação de apliques recortados, acolchoamento livre (quilt invisível), fixação de lantejoulas e soutache, e costuras de embutimento em alta costura.",
    "technicalDetails": "Propriedades e ajustes do fio monofilamento:\n• Diâmetro Típico: 0,08 mm a 0,12 mm (título ~100 Denier monofilamento);\n• Tensão Superior Obrigatória: Ajuste ultrabaixo (quase nula, nível 1 a 2) para evitar estiramento elástico;\n• Agulha Recomendada: 65/9 ou 70/10 com olho polido (Microtex ou Metallic);\n• Temperatura de Fusão: ~215°C (exige cuidado extremo ao passar a ferro).",
    "howItWorks": [
      "1. O cone de monofilamento é colocado na máquina com redinha elástica de proteção.",
      "2. A tensão superior é ajustada no nível mais frouxo possível.",
      "3. A agulha fina 65/9 ou 70/10 conduz o fio transparente sem raspar na canaleta.",
      "4. Ao fixar o aplique com ponto ziguezague ou ponto de Paris, a linha assume a cor da estampa.",
      "5. A bobina utiliza linha de poliéster comum fina (60wt) na cor do avesso do tecido."
    ],
    "beginnerExplanation": "É a famosa 'linha transparente' ou invisível! Parece um fio de pesca bem fininho e macio. Quando você borda com ela, os pontos ficam quase invisíveis porque ela assume a cor do tecido que está embaixo. É maravilhosa para prender apliques sem que a linha apareça por cima.",
    "applications": [
      "Fixação de contorno de apliques de tecido estampado sem interferir nas cores da estampa",
      "Quilting e matelassê em colchas nobres onde as linhas não devem criar riscos de cores contrastantes",
      "Bordado de fixação de fitas de cetim, cordões e lantejoulas em vestidos de noiva e alta costura"
    ],
    "commonErrors": [
      "Bordar com tensão normal de linha de poliéster, fazendo o nylon esticar e enrugar todo o tecido após sair do bastidor",
      "Passar ferro quente diretamente sobre o bordado com fio de nylon, derretendo os pontos instantaneamente",
      "Usar o fio monofilamento na bobina e na agulha ao mesmo tempo, travando a caixa da bobina"
    ],
    "troubleshootingTips": [
      "Reduza a velocidade da máquina para 450-550 PPM para evitar aquecimento por fricção no olho da agulha",
      "Use versão 'Clear' para tecidos claros e versão 'Smoke' (fumê) para tecidos escuros ou pretos",
      "Utilize passador de linha manual se o enfiador automático da máquina não enxergar o fio transparente"
    ],
    "dicaArtrelados": "Use sempre uma redinha elástica no cone de nylon monofilamento: por ser muito escorregadio e ter memória elástica, ele tende a desenrolar sozinho do cone e dar nós cegos no suporte da máquina.",
    "voceSabia": "Existem duas tonalidades de fio monofilamento invisível: a versão 'Clear' (100% transparente para tecidos claros, brancos e coloridos) e a versão 'Smoke' (fumê translúcido, ideal para tecidos pretos e escuros para não criar reflexos brancos sob a luz).",
    "practicalExercise": "Coloque o fio monofilamento transparente na máquina com tensão no nível 1 (bem frouxa). Prenda um retalho de tecido florido com ponto ziguezague aberto de 2,5 mm sobre um tecido liso. Observe como a fixação fica resistente e o ponto praticamente desaparece visualmente sobre a estampa.",
    "quickSummary": "Linha transparente de poliamida de filamento único que se camufla na cor do tecido; ideal para apliques invisíveis e quilt com tensão ultrabaixa.",
    "relatedTerms": [
      "Nylon",
      "Aplique de Tecido (Appliqué)",
      "Tensão de Linha",
      "Redinha de Linha (Thread Net)"
    ],
    "tags": [
      "n-019",
      "fio invisivel",
      "monofilamento",
      "nylon transparente",
      "aplique",
      "quilt",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. Monofilament Invisible Thread Guide and Tensioning. St. George: Superior Threads, 2021.",
      "ARTRELADOS. Fios Especiais: Metálicos, Fotoluminescentes e Monofilamentos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-020-nivelamento-ponto-parada-stop-code-color-change",
    "code": "N-020",
    "term": "Nivelamento de Ponto de Parada (Stop Code vs. Color Change / M00-M01)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto / Da linguagem CNC de comandos de máquina.",
    "origin": "Das instruções binárias de controle numérico (código Stop / M00 e Parada Opcional / M01) utilizadas para pausar a execução e permitir intervenção manual.",
    "summary": "Instrução de pausa programada na matriz para intervenção manual (recortar apliques, abrir zíperes, colocar forro) antes de retomar a costura.",
    "definition": "Nivelamento de ponto de parada (Stop Code) é a inserção deliberada de uma instrução de pausa programada na matriz de bordado que faz a máquina interromper o ciclo de costura, elevar a barra de agulha e aguardar a intervenção manual do operador, sem necessariamente exigir a troca física de linha de cor no cabeçote. É a base operacional de técnicas como apliques de tecido, colocação de plástico vinil em matrizes ITH, posicionamento de zíperes, inserção de espuma 3D (E.V.A.) e colocação de forros no verso do bastidor.",
    "technicalDetails": "Diferenças computacionais dos comandos de máquina:\n• Color Change (Troca de Cor): Movimenta o cabeçote para a próxima agulha e continua o bordado sem parar;\n• Stop Code (Comando de Parada M00): Desliga o motor principal, eleva a agulha e aciona o indicador de espera no painel;\n• Frame Out / Offset: Desloca o pantógrafo trazendo o bastidor para a frente da máquina para facilitar o acesso da tesoura;\n• Compatibilidade: Suporte nativo em arquivos PES, JEF e EXP; em DST é emulado via comando de troca de cor com mesma agulha.",
    "howItWorks": [
      "1. A máquina borda a linha de marcação do aplique ou do zíper.",
      "2. Ao ler o código Stop na matriz, a máquina corta o fio e interrompe o motor.",
      "3. O pantógrafo se desloca para a frente (Frame Out) facilitando a visão do operador.",
      "4. O operador posiciona o tecido, recorta sobras ou abre o cursor do zíper.",
      "5. O operador aperta o botão verde de início e a máquina retoma o ciclo perfeitamente alinhada."
    ],
    "beginnerExplanation": "É o comando de 'pausa obrigatória' que a gente coloca na matriz para a máquina parar sozinha e esperar pela gente! Ela para quietinha com a agulha no alto para você poder colocar um tecido de aplique, passar uma cola, recortar a sobrinha com a tesoura ou ajeitar um zíper, e só volta a bordar quando você aperta o botão verde de novo.",
    "applications": [
      "Parada programada após a linha de marcação para colocar o tecido do aplique de patchwork",
      "Parada programada com ejeção do bastidor (Offset) para recortar o excesso de tecido do aplique rente à costura",
      "Pausa em matriz de nécessaire ITH para abertura manual do cursor do zíper antes da costura final"
    ],
    "commonErrors": [
      "Em máquinas industriais lendo arquivos DST, esquecer de configurar que a troca de cor é na verdade um comando Stop",
      "Não programar o corte de linha antes da parada, fazendo a agulha parar com o fio esticado no meio da área de trabalho",
      "Mexer ou forçar o bastidor com as mãos durante o momento da parada, desregulando o zero-máquina"
    ],
    "troubleshootingTips": [
      "No Wilcom ou Embird, use o recurso 'Inserir Parada / Stop' nos pontos onde for necessário manuseio de aplique",
      "Sempre corte a linha antes da parada para poder manusear a tesoura com total liberdade sobre o bastidor",
      "Se sua máquina não obedece o código Stop em DST, configure a função 'Parada na Troca de Cor' no painel"
    ],
    "dicaArtrelados": "No Wilcom ou Embird, sempre programe uma 'Troca de Cor' com um comando 'Frame Out' (Deslocamento de Bastidor) nos pontos de aplique. Assim, a máquina para e traz o bastidor para a sua frente automaticamente, facilitando o corte do tecido sem exigir que você se incline sobre a chapa de agulha.",
    "voceSabia": "No formato de matriz DST (padrão Tajima criado nos anos 1980), não existe um código nativo de cor; todas as instruções são comandos binários de Salto, Ponto e Parada/Troca. As cores coloridas que vemos na tela do computador são apenas atribuídas pelo software visual!",
    "practicalExercise": "Crie uma matriz de aplique simples: 1) Círculo em ponto reto (marcação); 2) Inserção de código Stop com corte de linha; 3) Círculo em ziguezague duplo (fixação); 4) Novo Stop; 5) Moldura em satim cheio. Borde e veja a fluidez do processo.",
    "quickSummary": "Instrução de pausa programada na matriz para intervenção manual (recortar apliques, abrir zíperes) antes de retomar o bordado.",
    "relatedTerms": [
      "In The Hoop (ITH)",
      "Aplique de Tecido (Appliqué)",
      "Corte de Linha (Trim)",
      "Painel de Comando"
    ],
    "tags": [
      "n-020",
      "stop code",
      "ponto de parada",
      "frame out",
      "aplique",
      "ith",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Embroidery Studio: Advanced Machine Commands and Functions. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Engenharia de Paradas, Apliques e Comandos CNC no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-021-no-show-mesh-entretela-poliester-emalhada",
    "code": "N-021",
    "term": "No-Show Mesh (Entretela de Poliéster Emalhada Transparente)",
    "letter": "N",
    "level": "Fundamental 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino / Do inglês 'no-show mesh' (malha que não aparece).",
    "origin": "Desenvolvida nos EUA como alternativa ultrafina, macia e semitransparente para camisetas esportivas e malhas finas sem marcar o avesso.",
    "summary": "Entretela recortável de poliéster emalhado ultrafina, macia e semitransparente; não marca camisetas claras, não coça a pele e mantém a forma após lavagens.",
    "definition": "No-Show Mesh (ou Poly Mesh) é uma entretela especial de poliéster 100% sintético com estrutura de malha fina emalhada multidirecional semitransparente, de toque extremamente macio e alta estabilidade dimensional. Ao contrário das entretelas grossas tradicionais de celulose/TNT que deixam um 'quadrado duro' visível e desconfortável no avesso de camisetas leves e de cores claras, a No-Show Mesh mantém a sustentação permanente dos pontos de bordado sem transparecer na frente da peça e sem arranhar a pele do usuário.",
    "technicalDetails": "Propriedades da entretela No-Show Mesh:\n• Composição: 100% Filamentos contínuos de Poliéster emalhados em relevo diagonal;\n• Gramatura: 40g/m² a 50g/m² com toque sedoso;\n• Tipo de Remoção: Recortável (Cut-Away) com tesoura de ponta curva ou bico de pato;\n• Estabilidade Dimensional: Não encolhe, não deforma e suporta centenas de ciclos de lavagem industrial.",
    "howItWorks": [
      "1. A folha de No-Show Mesh é colada suavemente no avesso da camiseta com spray temporário.",
      "2. A peça é colocada no bastidor sem esticar a malha de algodão ou poliamida.",
      "3. A máquina borda o logotipo com sob-pontos abertos e compensação de repuxo adequada.",
      "4. Ao retirar do bastidor, o excesso de entretela é recortado em formato oval a 5 mm do bordado.",
      "5. A camiseta fica com o avesso macio, flexível e sem o 'quadrado rígido' visível na frente."
    ],
    "beginnerExplanation": "É a entretela 'mágica' e macia para camisetas fininhas e roupas de bebê! Ela parece uma telinha ou gaze bem fininha de tecido sintético. Quando você borda com ela, ela segura os pontos com firmeza, mas não fica aquele quadrado duro e áspero no avesso que coça a pele ou fica aparecendo pela frente da camiseta branca.",
    "applications": [
      "Bordado de logomarcas em camisetas de poliamida esportiva (Dry-Fit / UV Protection)",
      "Bordado delicado em bodies e macacões de malha 100% algodão para recém-nascidos sem irritar a pele do bebê",
      "Personalização de camisas sociais de tecido fino de cambraia ou linho claro"
    ],
    "commonErrors": [
      "Tentar rasgar a No-Show Mesh à mão como se fosse rasga-fácil, deformando o bordado (ela DEVE ser recortada com tesoura)",
      "Cortar a No-Show Mesh rente demais aos nós de arremate, correndo o risco de cortar os pontos da própria matriz",
      "Usar entretela grossa de papelão em camiseta de malha fina de verão em vez de adotar a No-Show Mesh"
    ],
    "troubleshootingTips": [
      "Ao recortar no avesso, utilize uma tesoura bico de pato (Duckbill) para não correr o risco de furar o tecido da camiseta",
      "Recorte sempre em formato arredondado ou oval para que as pontas não dobrem após a lavagem",
      "Para bordados densos em malhas elásticas, coloque uma folha de rasga-fácil por baixo apenas para dar firmeza no bastidor"
    ],
    "dicaArtrelados": "Ao recortar a No-Show Mesh no avesso da peça pronta, use uma tesoura de ponta arredondada (estilo 'pato' / Duckbill) e corte em formato arredondado/oval ao redor do desenho: cantos arredondados nunca espetam a pele e não marcam o tecido ao passar a ferro.",
    "voceSabia": "A entretela No-Show Mesh foi adotada como padrão oficial nos uniformes dos atletas olímpicos porque o poliéster emalhado resiste a mais de 100 lavagens em água quente sem perder a memória elástica nem deformar os logotipos bordados dos patrocinadores.",
    "practicalExercise": "Borde o mesmo logotipo de 5.000 pontos em duas camisetas de malha iguais: na primeira, use entretela rasga-fácil de 50g comum; na segunda, use No-Show Mesh colada com spray temporário. Lave as duas camisetas na máquina de lavar e compare a estabilidade e o toque de ambas.",
    "quickSummary": "Entretela recortável de poliéster emalhado ultrafina e macia; não marca camisetas claras, não coça e resiste a lavagens.",
    "relatedTerms": [
      "Entretela Recortável (Cut-Away)",
      "Malha Piquet",
      "Dry-Fit e Tecidos Tecnológicos",
      "Tesoura Bico de Pato"
    ],
    "tags": [
      "n-021",
      "no-show mesh",
      "poly mesh",
      "entretela macia",
      "camisetas",
      "bebe",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA GARNWERKE. Stabilizers and Backings Application Guide. Freiburg: Madeira, 2022.",
      "ARTRELADOS. Guia de Estabilização para Malhas Finas e Tecidos Tecnológicos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-022-nodulo-inicio-ponto-cauda-linha-embutida",
    "code": "N-022",
    "term": "Nódulo de Início de Ponto e Cauda Embutida (Tailing & Trimming Algorithm)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto / Dos algoritmos de controle de movimento e corte.",
    "origin": "Dos controladores computacionais de cabeçotes de bordadeiras industriais dedicados à gestão e embutimento automático da cauda de início de fio.",
    "summary": "Algoritmo e mecanismo que controla a ponta inicial da linha superior, embutindo-a na entretela ou retendo-a para evitar fiapos soltos sobre o bordado.",
    "definition": "Nódulo de início de ponto e cauda embutida refere-se à dinâmica de inserção mecânica e controle algorítmico da ponta inicial da linha superior (cauda de início / thread tail) nos primeiros 3 a 5 pontos de um novo bloco de cor. Consiste na retenção eletropneumática ou mecânica da ponta do fio por uma mola prensa-fio ou gancho coletor no cabeçote, seguida pela execução de pontos iniciais que recobrem e embutem a ponta do fio sob o corpo do bordado, ou pela ejeção da cauda para o corte manual sem formar nós volumosos no direito da peça.",
    "technicalDetails": "Dinâmica cinemática da cauda inicial:\n• Comprimento Típico da Cauda: 15 mm a 25 mm após o corte;\n• Início Lento (Slow Start): Os primeiros 2 a 3 pontos são executados a 200-300 PPM para garantir a laçada da bobina;\n• Cauda Embutida (In-Stitch Tailing): A agulha cruza sobre o fio solto, travando-o no verso antes de acelerar;\n• Retenção Mecânica: Mola prensa-fio superior (Picker/Upper Thread Clamp) que segura o fio cortado até o primeiro ponto.",
    "howItWorks": [
      "1. A máquina posiciona a agulha no início da nova cor com a ponta da linha presa no clamp superior.",
      "2. A agulha penetra suavemente em baixa velocidade, descendo o fio para a lançadeira.",
      "3. A lançadeira laça o fio e puxa a cauda inicial para o avesso da entretela.",
      "4. A máquina executa o nó de entrada (Tie-in) cobrindo a pontinha com os primeiros pontos da matriz.",
      "5. A máquina acelera para a velocidade normal sem deixar fios soltos na face do bordado."
    ],
    "beginnerExplanation": "É o jeito que a máquina cuida daquela pontinha de linha que sobra quando ela começa uma cor nova! Se a máquina não prender essa pontinha direito, ela fica jogada por cima do desenho parecendo um fiapo solto que você tem que ficar caçando e cortando com a tesourinha depois.",
    "applications": [
      "Configuração no painel para corte curto de cauda inicial em monogramas delicados sobre toalhas de linho",
      "Uso da mola prensa-fio superior para segurar o fio de início em máquinas industriais multi-agulhas",
      "Ativação do algoritmo de arremate de entrada lento no software de digitalização para ocultar o nó sob o satim"
    ],
    "commonErrors": [
      "Deixar a cauda inicial longa demais solta sobre o tecido, fazendo a máquina costurar milhares de pontos por cima do fiapo solto",
      "Ajustar a faca de corte para deixar a cauda extremamente curta, fazendo a linha escapar do olho da agulha na primeira descida",
      "Puxar a cauda de linha com a tesoura enquanto a máquina está acelerando os primeiros pontos, entortando a agulha"
    ],
    "troubleshootingTips": [
      "Nas máquinas de 1 agulha, segure a ponta da linha suavemente com a mão esquerda durante os 3 primeiros pontos",
      "Verifique se o clamp ou mola prensa-fio superior no cabeçote não está com fiapos acumulados",
      "No software, ative a função 'Nó de Entrada / Tie-in' em estilo discreto no miolo do desenho"
    ],
    "dicaArtrelados": "Nas máquinas domésticas de uma agulha, segure a pontinha da linha superior suavemente com a mão esquerda apenas durante os primeiros 3 pontinhos e solte: isso garante que o nó inicial fique 100% limpo no avesso sem fiapos na frente.",
    "voceSabia": "As máquinas industriais japonesas de última geração possuem pequenos tubos de vácuo ultrassônicos em cada cabeçote que sugam a pontinha cortada da linha no exato milissegundo do corte, deixando o direito da peça 100% limpo e sem necessidade de limpeza pós-produção!",
    "practicalExercise": "No painel da sua máquina, verifique a opção 'Comprimento da Cauda de Linha de Início' (Short / Medium / Long). Faça três testes de início de ponto com cada configuração e observe qual entrega o início mais limpo no seu tecido preferido.",
    "quickSummary": "Algoritmo e mecanismo que controla a ponta inicial da linha superior, embutindo-a na entretela para evitar fiapos soltos sobre o bordado.",
    "relatedTerms": [
      "Nó de Entrada (Tie-in)",
      "Corte de Linha (Trim)",
      "Mola Prensa-Fio",
      "Limpeza Pós-Bordado"
    ],
    "tags": [
      "n-022",
      "cauda de linha",
      "inicio de ponto",
      "tie-in",
      "picker",
      "trimming",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL SERVICE. Automatic Thread Trimming & Upper Thread Clamp Systems. Nagoya: Tajima, 2021.",
      "ARTRELADOS. Mecatrônica de Corte, Retenção e Arremates no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-023-nivelamento-pressao-calcador-presser-foot",
    "code": "N-023",
    "term": "Nivelamento da Pressão do Calcador (Presser Foot Pressure)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina",
    "grammarClass": "Substantivo masculino composto / Da mecânica de precisão da barra do calcador.",
    "origin": "Do sistema de mola calibrada ou pistão pneumático que ajusta a força vertical exercida pelo calcador contra a chapa de agulha.",
    "summary": "Ajuste da força vertical da mola do calcador sobre o tecido; evita que o tecido suba com a agulha (flagging) e previne marcas de esmagamento.",
    "definition": "Nivelamento da pressão do calcador é a regulagem da intensidade da força mecânica vertical exercida pela mola do calcador sobre o sanduíche têxtil (tecido + entretela + manta) durante o ciclo em que a agulha penetra e sobe. Uma pressão equilibrada deve ser suficiente para conter firmemente o tecido contra a chapa de agulha no momento da subida da barra de agulha (eliminando o 'Flagging' ou içamento do tecido), mas suave o bastante para não esmagar as fibras, não deixar marcas de arrasto do calcador e permitir o deslocamento livre e fluido do pantógrafo.",
    "technicalDetails": "Dinâmica da pressão do calcador:\n• Força Nominal: 15 N a 35 N (ajustável via parafuso superior de mola ou atuador eletrônico);\n• Tecidos Leves (Seda, Voil): Pressão suave para não deixar marcas brilhantes de arrasto;\n• Tecidos Espessos (Couro, Bonés): Pressão mais firme para estabilizar a penetração pesada da agulha 90/14;\n• Prevenção de Flagging: Mantém o tecido imóvel na subida da agulha para permitir a abertura da laçada na lançadeira.",
    "howItWorks": [
      "1. O operador avalia a espessura e a textura do material a ser bordado.",
      "2. Gira o parafuso de regulagem de pressão no topo do cabeçote ou ajusta no menu eletrônico.",
      "3. A mola interna comprime a barra do calcador com a força calibrada.",
      "4. Quando a agulha sobe, o calcador mantém o tecido plano contra a chapa de agulha.",
      "5. A laçada elíptica se expande com perfeição e a máquina não pula pontos.",
      "6. No momento do salto do pantógrafo, o calcador sobe ligeiramente liberando o tecido."
    ],
    "beginnerExplanation": "É a força com que o 'pezinho' da máquina aperta o tecido para baixo enquanto a agulha sobe e desce. Se o pezinho apertar muito fraco, o tecido fica pulando e os pontos falham; se apertar com força demais, ele amassa o tecido, deixa marcas feias e não deixa o bastidor andar direito.",
    "applications": [
      "Aumento da pressão do calcador para bordar bonés estruturados e tecidos de lona grossa para evitar que o tecido pule",
      "Alívio da pressão do calcador para bordar veludo nobre e toalhas felpadas sem deixar marcas de esmagamento no pelo",
      "Regulagem fina para couro sintético e materiais emborrachados que agarram no metal do calcador"
    ],
    "commonErrors": [
      "Deixar a mesma pressão padrão de fábrica para bordar tecidos levíssimos (como organza) e materiais ultragrossos (como couro com manta)",
      "Apertar o parafuso de pressão ao máximo para tentar resolver problemas de entretela fraca ou agulha rombuda",
      "Ignorar o atrito do calcador em tecidos sintéticos que começam a chiar durante o deslocamento rápido do bastidor"
    ],
    "troubleshootingTips": [
      "Se o calcador deixa uma marca de arrasto no tecido ao redor das letras, alivie a pressão da mola ou use fita de Teflon",
      "Se o tecido fica subindo e descendo ritmicamente junto com a agulha (flagging) e a máquina pula pontos, aumente a pressão",
      "Para bordados em E.V.A. 3D Puff, eleve a altura do calcador e use pressão moderada para não esmagar a espuma antes do ponto"
    ],
    "dicaArtrelados": "Para bordar sintéticos e vinil sem marcas de arrasto do calcador metálico, cole um pequeno pedaço de fita de Teflon (fita antiaderente) na sola inferior do calcador: isso reduz o coeficiente de atrito a quase zero sem alterar a pressão da mola.",
    "voceSabia": "Em bordadeiras industriais de alta tecnologia com sistema de controle eletrônico digital, a pressão e a altura do calcador são ajustadas automaticamente por motores de passo controlados pelo arquivo de bordado, adaptando-se a diferentes espessuras dentro da mesma matriz!",
    "practicalExercise": "Pegue um pedaço de tecido atoalhado felpudo. Borde uma pequena linha com a pressão do calcador no nível máximo e outra com a pressão aliviada. Observe como na primeira a felpa fica esmagada permanentemente ao redor dos pontos e na segunda a felpa permanece fofa e íntegra.",
    "quickSummary": "Ajuste da força da mola do calcador sobre o tecido; evita o efeito bandeira (flagging) e previne marcas de esmagamento em tecidos nobres.",
    "relatedTerms": [
      "Altura do Calcador",
      "Flagging (Efeito Bandeira)",
      "Pantógrafo",
      "Ponto Pulado (Skipped Stitch)"
    ],
    "tags": [
      "n-023",
      "pressao do calcador",
      "calcador",
      "flagging",
      "mecanica",
      "calibracao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JANOME SEWING MACHINE CO. Technical Service & Presser Foot Dynamics Manual. Tokyo: Janome, 2022.",
      "ARTRELADOS. Mecânica do Calcador, Controle de Flagging e Dinâmica de Contato Têxtil. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-024-normalizacao-arquivos-matriz-format-conversion",
    "code": "N-024",
    "term": "Normalização de Arquivos de Matriz (Format Conversion & Stitch Recalculation)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo feminino composto / Da computação gráfica e engenharia de software.",
    "origin": "Dos algoritmos de interpolação e recálculo de densidade vetorial aplicados a arquivos binários de bordado computadorizado (DST, PES, JEF, EXP).",
    "summary": "Processo de conversão e recálculo proporcional de densidade ao redimensionar matrizes, evitando pontos ralos ou excessivamente amontoados.",
    "definition": "Normalização de arquivos de matriz é o procedimento computacional de conversão estruturada, recálculo de densidade, validação de limites de coordenadas X/Y e limpeza de dados espúrios em arquivos de bordado. Diferencia a simples 'conversão cega de formato' (que apenas traduz instruções de ponto sem alterar a quantidade de pontos) do verdadeiro 'recálculo com normalização inteligente', no qual o software reconhece os objetos de satim e tatami, recomputando a densidade proporcionalmente ao novo tamanho e eliminando micro-pontos menores que 0,3 mm que travam a máquina.",
    "technicalDetails": "Parâmetros computacionais da normalização:\n• Recálculo de Densidade: Ajuste automático do número de pontos para manter o espaçamento fixo (ex: 0,40 mm) ao ampliar ou reduzir;\n• Filtragem de Micro-Pontos: Remoção algorítmica de pontos menores que 0,3 mm que causam quebra de linha;\n• Re-escala Segura: Permite alterações superiores a 20% sem perda de cobertura ou dureza mecânica;\n• Centralização Automática: Redefinição do ponto de início e fim no centro matemático (0,0) do bastidor.",
    "howItWorks": [
      "1. O arquivo compilado (.PES, .DST, .JEF) é aberto em software profissional (Wilcom, Embird).",
      "2. O software converte as trilhas de pontos em objetos vetoriais editáveis aproximados.",
      "3. O usuário altera as dimensões (ex: ampliando em 30%).",
      "4. O motor de geração recomputa as colunas de satim e malhas de tatami, inserindo novos pontos.",
      "5. O arquivo normalizado é exportado no formato exato da máquina com a densidade perfeita.",
      "6. A máquina costura a matriz com a mesma maciez e acabamento do arquivo original."
    ],
    "beginnerExplanation": "É o jeito certo de mudar o tamanho ou o formato da matriz sem estragar os pontos! Se você só aumentar ou diminuir uma matriz pronta sem recalcular, os pontos vão ficar ou ralos demais com o tecido aparecendo ou tão amontoados que quebram a agulha. A normalização recalcula tudo para a matriz ficar perfeita de novo.",
    "applications": [
      "Conversão e normalização de uma matriz de 10x10 cm (PES) para rodar em bastidor 13x18 cm sem perder densidade",
      "Exportação de matrizes com extensão .DST para máquinas industriais com filtragem de micro-pontos menores que 0,4 mm",
      "Ajuste e centralização das coordenadas de início (0,0) no centro do bastidor para evitar colisões no pantógrafo"
    ],
    "commonErrors": [
      "Reduzir uma matriz complexa em 50% direto no painel da máquina sem recálculo, criando uma pedra dura que quebra agulhas",
      "Usar conversores online gratuitos que corrompem as ordens de parada (Stop) e juntam todas as cores em um único bloco",
      "Ignorar os limites de salto máximo (alguns formatos não aceitam pontos maiores que 12,7 mm sem saltos)"
    ],
    "troubleshootingTips": [
      "Guarde sempre a matriz original no formato vetorial do seu software (.EMB, .EOF) antes de exportar o compilado",
      "Se precisar redimensionar mais de 15%, abra o arquivo no software e use a opção 'Recalcular Pontos / Stitch Processor'",
      "Valide o arquivo no simulador visual antes de enviar para o pen drive da máquina"
    ],
    "dicaArtrelados": "Sempre guarde a matriz original no formato vetorial editável do seu software (ex: .EMB no Wilcom, .JAN no Digitizer, .EOB no Embird). Se precisar alterar o tamanho, altere SEMPRE no arquivo vetorial e só depois gere o arquivo compilado (.PES, .DST, .JEF) para a máquina.",
    "voceSabia": "O formato de matriz .DST (Tajima) foi desenvolvido para ser lido originalmente a partir de fitas de papel perfurado na década de 1980 e é até hoje o formato mais universal e robusto da indústria têxtil global!",
    "practicalExercise": "Pegue uma matriz compilada em .PES de 10 cm. Faça duas cópias: reduza a primeira para 5 cm usando um conversor simples sem recálculo e reduza a segunda no Wilcom/Embird com 'Recalcular Pontos' ativado. Compare a contagem final de pontos de ambas.",
    "quickSummary": "Processo de conversão e recálculo proporcional de densidade ao redimensionar matrizes, evitando pontos ralos ou excessivamente amontoados.",
    "relatedTerms": [
      "Extensões de Arquivo (DST, PES, JEF)",
      "Densidade de Ponto",
      "Micro-Pontos (Short Stitches)",
      "Compensação de Encolhimento"
    ],
    "tags": [
      "n-024",
      "normalizacao",
      "conversao",
      "recalculo de pontos",
      "dst",
      "pes",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. File Formats, Stitch Interpolation and Data Optimization. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Arquitetura de Formatos Binários, Conversões e Normalização Vetorial. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "n-025-nylon-ballistic-cordura-1000d-bordados-militares",
    "code": "N-025",
    "term": "Nylon Ballistic / Cordura 1000D (Tecidos Técnicos Militares e Táticos)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto / Da fiação de poliamida texturizada militar de alta tenacidade.",
    "origin": "Criado pela DuPont durante a Segunda Guerra Mundial para trajes de proteção contra estilhaços balísticos e aprimorado como a marca registrada Cordura de 1000 Denier.",
    "summary": "Tecido técnico de poliamida de altíssima tenacidade para artigos militares e táticos; requer agulhas reforçadas de titânio (90/14), linhas de poliéster e alta compensação de repuxo.",
    "definition": "Nylon Ballistic e Cordura 1000D são tecidos técnicos de poliamida ultradensa com fiação de alta tenacidade (geralmente título de 1000 Denier em ligamento tafetá ou sarja pesada com revestimento posterior de poliuretano impermeabilizante). São os substratos mais robustos e abrasivos utilizados no bordado de artigos táticos, coletes balísticos, mochilas militares, bolsas de resgate, coturnos e estojos de equipamentos pesados. Sua extrema rigidez e tenacidade impõem severos desafios mecânicos à agulha e ao sistema de tração do fio.",
    "technicalDetails": "Parâmetros técnicos para bordar Cordura 1000D e Nylon Ballistic:\n• Título do Fio do Tecido: 1000 Denier (filamento contínuo de poliamida texturizada a ar);\n• Agulha Recomendada: 90/14 ou 100/16 com revestimento de Nitreto de Titânio (PD / GEBEDUR) ponta RG ou SD1;\n• Linha Recomendada: Poliéster trilobal 40wt com acabamento lubrificado ou poliamida bonderizada;\n• Compensação de Repuxo: 0,50 mm a 0,60 mm para compensar o empuxo da lona rígida;\n• Velocidade da Máquina: 500 a 650 PPM para evitar deflexão e aquecimento de agulha.",
    "howItWorks": [
      "1. A lona rígida de Cordura 1000D é fixada em bastidor magnético ou por flutuação reforçada.",
      "2. A matriz aplica sob-pontos densos em tatami duplo para isolar a textura áspera da lona.",
      "3. A agulha de titânio 90/14 penetra a densa trama sem entortar nem quebrar a ponta.",
      "4. O fio de poliéster lubrificado corre suavemente pela canaleta sem sofrer abrasão mecânica.",
      "5. A matriz finaliza com cores sólidas e acabamento impermeável preservado."
    ],
    "beginnerExplanation": "É o tecido super grosso e quase indestrutível usado em mochilas militares, coletes à prova de balas e bolsas táticas! Bordar nele é como bordar em uma lona blindada: você precisa de agulha grossa e reforçada de titânio, linha muito resistente e uma máquina bem firme para não entortar nada.",
    "applications": [
      "Bordado de brasões e identificação de unidades táticas em mochilas militares de Cordura 1000D",
      "Personalização de coletes modulares e capas de proteção balística para segurança privada e forças policiais",
      "Bordado de logomarcas em malas de viagem para expedições pesadas e esportes radicais"
    ],
    "commonErrors": [
      "Tentar bordar Cordura 1000D com agulha comum 75/11 fina, causando deflexão severa da agulha contra a chapa e quebras constantes",
      "Usar linha de viscose delicada em artigos táticos, que se rompe facilmente com o atrito da lona e desbota em lavagens pesadas",
      "Prender a lona de nylon balístico em bastidores plásticos fracos sem aperto suficiente, fazendo o bastidor abrir no meio do bordado"
    ],
    "troubleshootingTips": [
      "Adote bastidores magnéticos de alta pressão para prender a lona sem deformar o tecido nem quebrar os aros plásticos",
      "Use agulhas de titânio com ponta levemente afiada (RG) e aplique silicone spray nos discos tensores para fios difíceis",
      "Aumente a compensação de repuxo no software para evitar que os contornos fiquem afastados do preenchimento"
    ],
    "dicaArtrelados": "Para prender Cordura e tecidos táticos pesados sem danificar os aros do bastidor, utilize bastidores magnéticos de neodímio de alta pressão ou fixe o material por flutuação reforçada com entretela pesada e costura de alinhavo perimetral duplo (Basting Stitch).",
    "voceSabia": "O tecido 'Ballistic Nylon' recebeu esse nome porque foi projetado na década de 1940 para proteger os pilotos da Força Aérea contra estilhaços de artilharia antiaérea (flak jackets) antes da invenção do Kevlar!",
    "practicalExercise": "Pegue um pedaço de Cordura ou lona pesada de mochila. Tente bordar uma estrela de 4 cm com agulha 75/11 e linha comum; depois troque para uma agulha 90/14 de Titânio e linha de poliéster lubrificada. Sinta a diferença de estabilidade e som da máquina.",
    "quickSummary": "Tecido técnico de poliamida de altíssima tenacidade para artigos militares e táticos; requer agulhas de titânio 90/14 e alta compensação de repuxo.",
    "relatedTerms": [
      "Nylon",
      "Niquelagem e Revestimento de Agulhas",
      "Compensação de Encolhimento",
      "Bastidor Magnético"
    ],
    "tags": [
      "n-025",
      "cordura",
      "nylon ballistic",
      "militar",
      "tatico",
      "1000d",
      "titanio",
      "artrelados"
    ],
    "bibliographicReferences": [
      "INVISTA CORDURA BRAND. Fabric Specifications and High-Tenacity Processing Guide. Wichita: Invista, 2021.",
      "ARTRELADOS. Bordado em Artigos Táticos, Cordura e Fibras Balísticas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "nylon-ripstop",
    "code": "N-026",
    "letter": "N",
    "term": "Nylon Ripstop (Tecido Antirasgo de Poliamida)",
    "pronunciation": "nai-lon rip-is-tóp",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Tipos de Tecidos",
    "summary": "Tecido técnico ultraleve de poliamida com grade quadriculada de reforço antirasgo; exige agulha fina 65/9 ou 70/10 ponta aguda e compensação de repuxo equilibrada.",
    "origin": "Do inglês 'rip' (rasgar) + 'stop' (parar), desenvolvido durante a Segunda Guerra Mundial como substituto para a seda nos paraquedas militares.",
    "definition": "O Nylon Ripstop é um tecido têxtil de alta performance confeccionado com fios de poliamida entrelaçados em tafetá, onde a cada intervalo milimétrico regular (geralmente 3 a 5 mm) são inseridos filamentos de maior tenacidade e espessura formando uma grade quadriculada visível. Essa malha estrutural impede que eventuais perfurações causadas pela agulha ou rasgos mecânicos se propaguem pelo restante do painel. Por ser extremamente fino, liso e impermeável ou repelente à água, é amplamente utilizado em jaquetas corta-vento, capas de chuva, estojos esportivos, pipas de kitesurf e mochilas ultraleves.",
    "howItWorks": [
      "1. O tecido fino tem pouca massa volumétrica, exigindo suporte de entretela rasga-fácil de 50g ou No-Show Mesh para não deformar.",
      "2. Ao ser perfurado pela agulha de bordado, a ponta aguda (Microtex/RG) deve penetrar entre os filamentos sem estourar as fibras do ripstop.",
      "3. A alta densidade de pontos em áreas sólidas pode gerar franzimento ao redor da grade; por isso, a compensação de repuxo deve ser calibrada em 0,40 mm.",
      "4. A tensão de linha superior e inferior deve ser ligeiramente aliviada para evitar o enrugamento das costuras.",
      "5. A montagem em bastidor é feita preferencialmente por flutuação com spray adesivo temporário para evitar marcas permanentes de pressão nos aros."
    ],
    "beginnerExplanation": "É aquele tecido fininho e quadriculado usado em jaquetas corta-vento, sacos de dormir e mochilas de camping que não rasga fácil! Para bordar nele sem enrugar nem furar, a gente usa uma agulha bem fininha (70/10 com pontinha afiada), não aperta muito o bastidor (o melhor é colar na entretela com cola spray) e diminui um pouquinho a densidade dos pontos para a agulha não picotar o tecido.",
    "applications": [
      "Bordado de logotipos corporativos em jaquetas corta-vento e anoraks esportivos",
      "Personalização de capas de instrumentos musicais e estojos técnicos leves",
      "Bordados em pipas esportivas, parapentes e velas náuticas",
      "Confecção de nécessaires impermeáveis e sacolas dobráveis ultraleves"
    ],
    "technicalDetails": "Devido ao baixo atrito superficial do ripstop resinado, a agulha sofre aquecimento por fricção em velocidades acima de 700 RPM. Recomenda-se agulha 70/10 com acabamento em cromo duro ou titânio, densidade de satim entre 0,42 mm e 0,45 mm, e pontos de suporte com tatami leve de 0,40 mm de espaçamento em ângulo oblíquo.",
    "commonErrors": [
      "❌ Utilizar agulha grossa 90/14 ponta bola, que cria furos visíveis e esgarça a grade de reforço",
      "❌ Apertar o bastidor com força excessiva, provocando marcas esbranquiçadas e esmagamento da resina impermeabilizante",
      "❌ Usar densidades maciças com subcamadas pesadas, transformando a área bordada em uma placa rígida que deforma o tecido leve",
      "❌ Passar a ferro quente diretamente sobre o nylon ripstop sem pano protetor, derretendo as fibras sintéticas"
    ],
    "troubleshootingTips": [
      "Se o tecido enrugar ao redor do bordado: Aumente a compensação de repuxo no software e use entretela No-Show Mesh colada com spray adesivo",
      "Se a linha desfiar ou quebrar: Troque a agulha por uma Schmetz Microtex 70/10 e reduza a velocidade da máquina para 600 RPM",
      "Se ficarem furos aparentes: Reduza o calibre da agulha para 65/9 e evite pontos concentrados no mesmo local"
    ],
    "dicaArtrelados": "Em jaquetas corta-vento de ripstop com forro embutido, abra o zíper de acesso interno ou a costura lateral para prender apenas o tecido externo com entretela no bastidor; isso preserva o forro solto e garante caimento impecável na peça pronta.",
    "voceSabia": "Durante a Segunda Guerra Mundial, quando as forças armadas americanas ficaram sem suprimento de seda natural do Japão, os químicos desenvolveram o nylon ripstop especificamente para evitar que os paraquedas se rasgassem durante o salto dos soldados em combate florestal!",
    "practicalExercise": "Pegue um retalho de nylon ripstop de 20x20 cm. Monte a entretela rasga-fácil no bastidor e cole o ripstop por cima com cola spray temporária. Borde duas estrelas de 3 cm: uma com agulha 90/14 e outra com agulha 70/10. Compare visualmente os furos no contorno.",
    "quickSummary": "Tecido de poliamida ultraleve com grade quadriculada de reforço; requer agulha 70/10 fina, flutuação com spray e densidade aliviada.",
    "relatedTerms": [
      "Nylon / Fibras de Poliamida",
      "Flutuação de Tecido (Floating)",
      "Agulha Microtex / RG",
      "Compensação de Encolhimento"
    ],
    "tags": [
      "n-026",
      "nylon ripstop",
      "corta-vento",
      "impermeavel",
      "agulha 70/10",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KAPLAN, S. Technical Textiles & Performance Fabrics in High-Speed Machine Embroidery. Textile Research Journal, 2019.",
      "GROZ-BECKERT. Needle Solutions for Technical Coated and Ripstop Fabrics. Technical Handbook, 2021."
    ],
    "recommendedSettings": {
      "speedPPM": "600-700 PPM",
      "needleType": "70/10 ou 65/9 Microtex / RG (Ponta Aguda)",
      "stabilizer": "Entretela No-Show Mesh ou Rasga-Fácil 50g com Spray Temporário",
      "threadTension": "Levemente frouxa (3.0 na escala padrão)",
      "density": "0,42 mm a 0,45 mm (densidade aliviada)"
    }
  },
  {
    "id": "navegacao-de-matriz-no-painel",
    "code": "N-027",
    "letter": "N",
    "term": "Navegação de Matriz no Painel (Stitch Forward / Backward)",
    "pronunciation": "na-ve-ga-são de ma-triz no pai-nel",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Operação da Máquina",
    "summary": "Recurso eletrônico do painel da bordadeira que permite avançar ou recuar pontos de forma unitária ou em blocos de 10, 100 ou 1.000 pontos para retomar bordados após paradas ou quebras.",
    "origin": "Do latim 'navigatio' (conduzir o curso), associado aos sistemas de comando numérico computadorizado (CNC) e microcontroladores industriais desde a década de 1980.",
    "definition": "A navegação de matriz no painel é a função operacional que permite ao bordador deslocar a posição atual do cabeçote ou pantógrafo ao longo da sequência cronológica de coordenadas (X, Y) do arquivo de bordado, sem acionar a costura mecânica. Esse controle permite retroceder pontos exatamente até o local onde a linha quebrou, avançar etapas para pular uma cor inteira, retornar ao início de uma seção ou reposicionar a máquina após uma queda repentina de energia elétrica.",
    "howItWorks": [
      "1. Ao ocorrer uma parada ou ruptura de linha, a máquina interrompe o motor principal e memoriza o índice do ponto atual.",
      "2. O operador acessa a tela de navegação no painel (ícone de agulha com sinais de +/- ou contador numérico).",
      "3. Utilizando os botões de -1, -10 ou -100 pontos, o pantógrafo recua com precisão micrométrica sobre os pontos já executados.",
      "4. Recomenda-se retroceder cerca de 5 a 10 pontos antes da falha para sobrepor as costuras e garantir que não haja emenda visível ou ponto solto.",
      "5. O operador reinicia a máquina pressionando o botão Start (Verde), e o ciclo de bordado é retomado com perfeição."
    ],
    "beginnerExplanation": "É o botão de 'voltar fita' da bordadeira! Quando a linha arrebenta e a máquina anda uns pontinhos sem costurar nada, você aperta esse botão no painel para fazer a máquina voltar 10 ou 20 pontinhos para trás. Aí você passa a linha de novo e aperta o botão verde para continuar de onde parou sem deixar nenhum buraco no desenho.",
    "applications": [
      "Correção de falhas e buracos causados por quebra de linha superior ou término da canelinha",
      "Retomada de bordados interrompidos por queda de energia elétrica ou desligamento acidental",
      "Pular blocos inteiros de cores em matrizes pré-digitalizadas quando não se deseja bordar determinado elemento",
      "Inspeção visual do trajeto do bastidor antes de iniciar o ciclo de bordado"
    ],
    "technicalDetails": "Nos controladores industriais (Dahao, Tajima, Barudan, Brother, Janome), a navegação por coordenadas utiliza a tabela de pulsos dos servomotores X/Y. Ao recuar pontos, o algoritmo mantém a sincronia do estica-fio e a posição angular da barra de agulha (normalmente no Ponto Morto Superior a 100°), assegurando que o primeiro novo ponto forme a laçada sem enroscar.",
    "commonErrors": [
      "❌ Retomar o bordado exatamente no ponto da parada sem retroceder 5 a 10 pontos, deixando um vão de tecido cru sem linha",
      "❌ Retroceder pontos com a agulha abaixada dentro do tecido, entortando a haste da agulha e danificando a chapa",
      "❌ Avançar cores no painel sem verificar se o calcador está levantado e a linha superior desengatada",
      "❌ Confundir avanço por 'Pontos' com avanço por 'Cores', pulando partes essenciais do preenchimento"
    ],
    "troubleshootingTips": [
      "Se o painel perder a contagem de pontos após queda de energia: Consulte o histórico de pontos gravado na memória interna ou use o recurso 'Power Failure Recovery'",
      "Se a máquina não retroceder: Verifique se a chave de emergência está desativada e se o volante mecânico está na posição correta (grau 100°)",
      "Se a agulha bater na borda ao recuar: Cheque se o bastidor não bateu nos limites físicos do pantógrafo"
    ],
    "dicaArtrelados": "Sempre volte de 5 a 8 pontos após reintroduzir a linha quebrada: a sobreposição desses pontinhos fica totalmente invisível no resultado final e amarra o fio com 100% de segurança mecânica sem perigo de desmanchar na primeira lavagem.",
    "voceSabia": "Em 1985, as primeiras bordadeiras com tela LCD monocromática só conseguiam retroceder pontos em velocidade ultralenta porque os processadores da época tinham menos de 1 MB de memória RAM para recalcular as curvas matemáticas do arquivo!",
    "practicalExercise": "Durante o bordado de um teste de satim, corte propositalmente a linha superior e deixe a máquina andar 15 pontos em falso. Pare a máquina, volte 20 pontos pelo painel, repasse a linha e reinicie. Observe como a emenda fica uniforme e sem falhas.",
    "quickSummary": "Função do painel para avançar ou recuar pontos; indispensável para retomar o trabalho após quebra de linha sem deixar buracos.",
    "relatedTerms": [
      "Painel de Comando",
      "Quebra de Linha",
      "Nó de Entrada / Nó Inicial",
      "Servomotor X/Y"
    ],
    "tags": [
      "n-027",
      "navegacao",
      "recuar pontos",
      "stitch forward",
      "painel",
      "operacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN CO. Embroidery Machine Controller Operating & Troubleshooting Manual. Barudan Technical Publications, 2020.",
      "BROTHER INDUSTRIES. Operation Manual & Stitch Navigation Features for PR Series. Brother Technical Support, 2022."
    ]
  },
  {
    "id": "no-duplo-de-emenda-manual",
    "code": "N-028",
    "letter": "N",
    "term": "Nó de Tecelão / Nó de Emenda Manual (Weaver's Knot)",
    "pronunciation": "nó de te-ce-lão / nó de e-men-da ma-nu-al",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Operação da Máquina",
    "summary": "Técnica manual de atar a ponta do cone de linha novo à ponta do cone antigo usando um nó plano ultracompacto para puxar a linha por todo o circuito da máquina sem despassar os tensores.",
    "origin": "Técnica milenar da tecelagem manual medieval, documentada formalmente na indústria têxtil inglesa do século XVIII como o nó mais compacto e resistente para unir fios de urdidura sem romper nos liços.",
    "definition": "O Nó de Tecelão (Weaver's Knot) é uma amarração técnica utilizada no ateliê de bordado para emendar o final de um cone de linha com o início de outro. Graças à sua geometria anatômica plana e reduzida, o nó consegue deslizar suavemente por todos os ilhoses, guias-fios, discos de tensão, molas estica-fio e tubos de alimentação da bordadeira. Quando a emenda chega à barra de agulha, o operador simplesmente corta o nó antes de passar a linha pelo olho da agulha, economizando até 80% do tempo de troca de cor ou reposição de cones.",
    "howItWorks": [
      "1. O operador corta a linha velha próximo ao cone que está na árvore de suporte.",
      "2. Substitui o cone antigo pelo cone novo de linha desejado.",
      "3. Cruza as pontas das duas linhas formando um laço e executa o nó de tecelão plano, puxando firmemente para travar.",
      "4. Corta os rabichos excedentes das pontas bem rentes ao nó (cerca de 2 mm) para não engancharem nos discos de tensão.",
      "5. Vai até a cabeça da máquina e puxa suavemente a linha velha por baixo do calcador até que a nova cor atravesse todos os guias.",
      "6. Corta o nózinho antes que ele tente atravessar o olho da agulha e enfia a ponta livre da nova linha manualmente no olho."
    ],
    "beginnerExplanation": "É o famoso 'truque do nózinho' que todo bordador adora! Em vez de passar a linha pelo caminho todo da máquina do zero toda vez que o cone acaba ou que você quer trocar de cor, você amarra a ponta da linha nova na velha com um nó bem pequenininho e puxa lá pela frente. A linha nova vem deslizando sozinha e você só precisa enfiar no buraco da agulha no final!",
    "applications": [
      "Troca rápida de cores de linhas em máquinas industriais multicabeçotes e domésticas",
      "Substituição de cones de linha vazios sem interrupção demorada da produção",
      "Passagem de linhas especiais e metálicas por circuitos longos de guias",
      "Treinamento de novos operadores e otimização do fluxo de trabalho no ateliê"
    ],
    "technicalDetails": "O nó de tecelão resiste a forças de tração axial superiores a 90% da resistência nominal do fio de poliéster 120D/2 (40wt). A espessura do nó bem executado não excede 0,45 mm, permitindo que ele passe sem travar pelos discos de tensão que trabalham com folgas médias de 0,60 mm sob baixa pressão.",
    "commonErrors": [
      "❌ Tentar fazer o nó passar através do olho da agulha, entortando a agulha ou quebrando o passador automático",
      "❌ Fazer nós comuns volumosos ('nó cego') com pontas longas que enroscam e entopem os ilhoses de porcelana",
      "❌ Puxar a linha com o calcador abaixado (tensão fechada), aplicando força excessiva que pode empenar a mola estica-fio",
      "❌ Não aparar as pontas excedentes do nó, deixando fiapos que se acumulam nos discos de tensão gerando descalibração"
    ],
    "troubleshootingTips": [
      "Se o nó travar no caminho: Levante a alavanca do calcador para abrir as placas dos tensores e puxe com suavidade",
      "Se o nó desatar ao puxar: Reforce o aperto com um puxão firme em direções opostas antes de aparar os fiapos",
      "Se a linha estiver escorregadia (poliéster brilhante): Dê uma volta dupla no laço antes de fechar o nó"
    ],
    "dicaArtrelados": "Sempre levante o pé calcador antes de puxar a linha emendada lá na frente! Quando o calcador está levantado, os pratinhos de tensão se abrem completamente e o nózinho passa lisinho e sem esforço, preservando as molas da sua máquina por anos.",
    "voceSabia": "Nas grandes tecelagens industriais automáticas, existem pequenos robôs manuais chamados 'atadores de urdume' que executam mais de 600 nós de tecelão por minuto para emendar milhares de fios simultaneamente!",
    "practicalExercise": "Pegue dois pedaços de linha de cores contrastantes (uma branca e uma vermelha). Pratique fazer o nó de tecelão três vezes até conseguir um nó minúsculo e firme. Puxe a linha emendada pelo circuito da sua bordadeira e sinta a facilidade de passagem.",
    "quickSummary": "Nó plano minúsculo para emendar fios e passá-los pelos tensores rapidamente, cortando a emenda antes do olho da agulha.",
    "relatedTerms": [
      "Passagem de Linha",
      "Tensão de Linha",
      "Mola Estica-Fio (Check Spring)",
      "Olho da Agulha"
    ],
    "tags": [
      "n-028",
      "no de tecelao",
      "weavers knot",
      "emenda de linha",
      "troca de cor",
      "agilidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "COATS INDUSTRIAL. Thread Handling & Knotting Efficiency in Industrial Embroidery. Technical Bulletin, 2021.",
      "ASHLEY, C. W. The Ashley Book of Knots. Doubleday Publishing, 1944 (Referência clássica de nós têxteis)."
    ]
  },
  {
    "id": "nesting-encaixe-de-matrizes",
    "code": "N-029",
    "letter": "N",
    "term": "Nesting / Encaixe Automático de Matrizes (Pattern Nesting)",
    "pronunciation": "nés-ting / en-cai-xe au-to-má-ti-co",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino (termo técnico em inglês/português).",
    "category": "Programação de Bordado",
    "summary": "Processo de agrupamento geométrico e otimização espacial de múltiplos bordados ou patches dentro da área útil do bastidor para economizar entretela, tecido e tempo de produção.",
    "origin": "Do inglês 'nesting' (aninhar, colocar no ninho), conceito originário da computação gráfica aplicada ao corte industrial de chapas metálicas e tecidos na década de 1970.",
    "definition": "O Nesting no bordado eletrônico é a técnica de planejamento e arranjo espacial que organiza duas ou mais matrizes de bordado dentro dos limites físicos do bastidor da máquina. Essa organização pode ser feita manualmente pelo programador ou por algoritmos de otimização no software (como Wilcom, Pulse ou Wings), que rotacionam, espelham e aproximam os elementos mantendo uma distância de segurança milimétrica entre eles. Além do aproveitamento máximo do tecido e estabilizador, o nesting avançado agrupa automaticamente as sequências de cores comuns, reduzindo drasticamente o número de trocas de linhas.",
    "howItWorks": [
      "1. O programador define o tamanho do bastidor e as margens de segurança em relação ao aro (geralmente 15 mm das bordas).",
      "2. Carrega as matrizes individuais que precisam ser bordadas em lote (ex: 12 brasões escolares).",
      "3. O software rotaciona e encaixa os desenhos nos espaços vazios, maximizando o número de unidades por bastidorada.",
      "4. O comando 'Color Sorting' (Agrupamento de Cores) unifica todas as seções da mesma cor em um único ciclo contínuo.",
      "5. São geradas linhas de corte ou marcas de alinhamento intermediárias para facilitar o recorte pós-bordado."
    ],
    "beginnerExplanation": "É como jogar Tetris com os seus bordados no computador! Se você precisa bordar 6 chaveirinhos ou 10 emblemas iguais, em vez de colocar um por um na máquina, você organiza todos eles bem juntinhos dentro de um bastidor grandão. O programa arruma as cores para bordar tudo o que é azul de uma vez só, depois tudo o que é dourado, economizando muito tempo e muita entretela!",
    "applications": [
      "Produção em massa de patches, chaveiros ITH e tags de identificação",
      "Confecção seriada de apliques cortados a laser ou tesoura",
      "Otimização de consumo de entretelas especiais caras (hidrossolúvel, termocolante)",
      "Redução do tempo ocioso de troca de bastidores em máquinas industriais"
    ],
    "technicalDetails": "A distância mínima recomendada entre matrizes vizinhas durante o nesting é de 5 a 8 mm. Esse espaçamento garante que a tensão de repuxo de um bordado não deforme a área do bordado adjacente. Ao unificar as cores, o software adiciona saltos longos (Jumps) com corte automático e nós de arremate seguros entre cada peça.",
    "commonErrors": [
      "❌ Posicionar as matrizes muito próximas (menos de 3 mm), causando sobreposição por deformação elástica do tecido",
      "❌ Fazer nesting próximo demais das bordas plásticas do bastidor, onde o tecido perde sustentação e a agulha pode bater no aro",
      "❌ Agrupar cores sem programar nós de arremate (tie-off) em cada elemento individual, fazendo com que as linhas se soltem ao cortar os patches",
      "❌ Esquecer de calibrar a ordem dos pontos, gerando deslocamentos cumulativos de tecido ao longo do bastidor"
    ],
    "troubleshootingTips": [
      "Se o tecido repuxar entre os bordados vizinhos: Aumente a distância entre as peças para 10 mm e use entretela mais encorpada",
      "Se ficarem fios esticados entre as peças: Ative o comando de corte automático (Trim) nos saltos entre objetos agrupados",
      "Se as peças das bordas ficarem desalinhadas: Verifique se o bastidor não está flexionado nas extremidades e reduza a velocidade da máquina"
    ],
    "dicaArtrelados": "Ao fazer nesting de chaveiros ITH ou tags, organize os objetos sempre do centro para as bordas externas do bastidor. Essa ordem distribui as tensões do tecido de maneira uniforme e evita que a última peça da ponta saia torta.",
    "voceSabia": "Em fábricas de bordado de grande porte com máquinas de 20 cabeçotes, o uso de algoritmos inteligentes de nesting e agrupamento de cores economiza em média 350 horas de trabalho humano por ano apenas em trocas de linhas!",
    "practicalExercise": "No seu software de matrizes, abra o gabarito do bastidor 13x18 cm. Insira um chaveiro de 5x5 cm e duplique-o. Tente fazer o arranjo manual para caber o maior número de unidades (geralmente 4 a 6) e aplique a ferramenta 'Otimizar Cores'.",
    "quickSummary": "Encaixe inteligente de múltiplos bordados no mesmo bastidor com agrupamento de cores para economizar material e tempo.",
    "relatedTerms": [
      "In The Hoop (ITH)",
      "Área Útil do Bastidor",
      "Corte de Linha (Trim)",
      "Nó de Saída / Arremate Final"
    ],
    "tags": [
      "n-029",
      "nesting",
      "encaixe",
      "otimizacao",
      "agrupamento de cores",
      "producao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Advanced Nesting & Multi-Design Layout Guide. Wilcom Embroidery Studio e4.5 Manual, 2021.",
      "PULSE MICROSYSTEMS. Production Automation & Batch Layout Strategies in Tajima DG/ML. Technical Papers, 2020."
    ]
  },
  {
    "id": "nylon-taslan",
    "code": "N-030",
    "letter": "N",
    "term": "Nylon Taslan (Tecido de Poliamida Texturizada a Ar)",
    "pronunciation": "nai-lon tas-lan",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Tipos de Tecidos",
    "summary": "Tecido de poliamida texturizada por jato de ar com toque macio similar ao algodão e alta durabilidade; exige agulha ponta aguda 75/11 ou 80/12 e entretela firme.",
    "origin": "Desenvolvido pela empresa DuPont na década de 1980 através do processo 'Taslanizing', que utiliza ar comprimido para conferir textura opaca e toque suave aos fios sintéticos contínuos.",
    "definition": "O Nylon Taslan é um tecido técnico de poliamida que combina a alta resistência mecânica do nylon com o toque suave, fosco e agradável das fibras naturais de algodão. Os fios passam por um processo de texturização por turbilhonamento de ar ('air-jet texturing') que cria pequenas laçadas microscópicas ao longo dos filamentos, eliminando o brilho plástico e o aspecto escorregadio do nylon comum. É amplamente empregado na confecção de uniformes industriais pesados, jaquetas de esqui, bermudas de surfe (boardshorts), agasalhos esportivos de inverno e mochilas.",
    "howItWorks": [
      "1. A superfície texturizada do Taslan oferece excelente ancoragem mecânica para os pontos de bordado.",
      "2. Como é um tecido encorpado e frequentemente resinado no verso para repelência à água, exige agulha ponta fina e afiada (RG ou Microtex).",
      "3. Utiliza-se entretela rasga-fácil de 60g ou recortável média (Cut-Away 70g) dependendo da densidade da matriz.",
      "4. A compensação de repuxo padrão de 0,35 mm a 0,40 mm é suficiente para garantir alinhamento perfeito de contornos.",
      "5. O bastidor pode ser montado normalmente com aperto moderado, sem risco de marcar o tecido de forma irreversível."
    ],
    "beginnerExplanation": "É aquele tecido de jaqueta esportiva e bermuda de marca que parece um algodão bem macio e fosco, mas na verdade é um nylon super resistente que seca rápido e não amassa! Ele é ótimo de bordar: não escorrega fácil, aceita bem o bastidor e fica lindo com linhas brilhantes de poliéster em contraste com o fundo fosco.",
    "applications": [
      "Jaquetas esportivas, anoraks e casacos de aventura ao ar livre",
      "Bermudas de água (boardshorts) e roupas de banho de secagem rápida",
      "Uniformes corporativos pesados para equipes técnicas de campo",
      "Bolsas de viagem, estojos e mochilas escolares reforçadas"
    ],
    "technicalDetails": "O tecido Taslan apresenta densidade linear média de 228T a 320D. Sua estrutura texturizada resiste bem a perfurações de agulhas calibre 75/11 a 80/12. Recomenda-se velocidade de bordado entre 700 e 800 RPM e subcamada de tatami leve de 0,38 mm para sustentar bordados densos sem enrugamento.",
    "commonErrors": [
      "❌ Utilizar agulha ponta bola cega que esmaga os filamentos texturizados, criando tufos esbranquiçados de fibra",
      "❌ Usar entretelas muito fracas (TNT 30g) em matrizes grandes, causando deformação nas bordas após lavagens",
      "❌ Aplicar temperatura de ferro de passar superior a 130°C diretamente no tecido, danificando o acabamento Taslan",
      "❌ Não usar compensação de repuxo adequada em logotipos circulares, resultando em formatos ovalados"
    ],
    "troubleshootingTips": [
      "Se a linha superior arrebentar frequentemente: Verifique se a agulha não está esquentando devido à resina do verso e use agulha com revestimento antiaderente",
      "Se o contorno desalinhar do preenchimento: Aumente a compensação de repuxo para 0,40 mm e reforce a fixação no bastidor",
      "Se ficarem marcas de bastidor: Esfregue suavemente uma esponja úmida com água morna sobre as marcas do aro"
    ],
    "dicaArtrelados": "O contraste entre o tecido Taslan fosco e a linha de bordar de poliéster trilobal brilhante cria um efeito visual de altíssimo luxo em uniformes corporativos; experimente bordar monogramas em tons metálicos ou acetinados para encantar seus clientes.",
    "voceSabia": "O processo de texturização Taslan foi patenteado pela DuPont em 1954 e revolucionou a indústria do vestuário porque permitiu criar roupas 100% sintéticas que não grudavam no corpo com o suor!",
    "practicalExercise": "Pegue uma amostra de nylon comum brilhante e uma de Nylon Taslan fosco. Borde o mesmo desenho de 5.000 pontos em ambos com linha brilhante. Compare o aspecto visual, o brilho e a firmeza do toque de cada peça.",
    "quickSummary": "Poliamida texturizada a ar com toque de algodão e alta resistência; ideal para agasalhos, bermudas e uniformes esportivos.",
    "relatedTerms": [
      "Nylon / Fibras de Poliamida",
      "Agulha Ponta Fina (RG / Microtex)",
      "Compensação de Encolhimento",
      "Entretela Recortável (Cut-Away)"
    ],
    "tags": [
      "n-030",
      "nylon taslan",
      "texturizado",
      "agasalho",
      "uniformes",
      "alta resistencia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DUPONT TEXTILE FIBERS. Taslan Air-Jet Texturing Technology & Fabric Applications. DuPont Technical Papers, 1988.",
      "TAYLOR, M. A. Technology of Textile Properties. Forbes Publications, London, 2018."
    ],
    "recommendedSettings": {
      "speedPPM": "750-850 PPM",
      "needleType": "75/11 ou 80/12 RG / Microtex",
      "stabilizer": "Entretela Rasga-Fácil 60g ou Recortável 70g",
      "threadTension": "Padrão (3.5 a 4.0)",
      "density": "0,38 mm a 0,40 mm"
    }
  },
  {
    "id": "nomenclatura-padrao-de-arquivos",
    "code": "N-031",
    "letter": "N",
    "term": "Nomenclatura Padrão de Arquivos de Bordado (File Naming Conventions)",
    "pronunciation": "no-men-cla-tu-ra pa-drão de ar-qui-vos de bor-da-do",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Softwares & Formatos",
    "summary": "Sistema padronizado e profissional de nomeação de arquivos de matrizes no computador do ateliê para evitar erros de versão, confusão de formatos e retrabalho na produção.",
    "origin": "Do latim 'nomenclatura' (relação de nomes), adotado nas boas práticas de engenharia de software e gerenciamento de arquivos digitais desde o surgimento dos sistemas operacionais modernos.",
    "definition": "A Nomenclatura Padrão de Arquivos de Bordado é o conjunto de regras e convenções adotado pelo programador e pelo operador de máquina para nomear as matrizes de bordado salvas no disco rígido, na nuvem ou no pen drive. Um arquivo devidamente nomeado traz em seu próprio título as informações cruciais para a produção, tais como o nome do cliente, o tema do bordado, as dimensões em milímetros ou centímetros, a indicação do bastidor, o número de cores e o número da versão (ex: 'EscolaAlpha_LogoPeito_9x7cm_3Cores_v2.dst'). Isso elimina totalmente o envio de versões desatualizadas para a máquina e agiliza a localização de matrizes no acervo do ateliê.",
    "howItWorks": [
      "1. Define-se uma estrutura lógica universal para todos os arquivos: [Cliente/Projeto]_[Elemento]_[Tamanho]_[Cores/Bastidor]_[Versão].[extensão].",
      "2. Evita-se o uso de caracteres especiais, acentos, cedilhas, barras e espaços em branco que podem corromper a leitura em painéis industriais antigos.",
      "3. Utiliza-se 'underline' (_) ou hífen (-) para separar os blocos informativos.",
      "4. Toda alteração solicitada pelo cliente gera uma nova versão numerada (v1, v2, v3), nunca sobrescrevendo a matriz anterior.",
      "5. Mantém-se sempre o arquivo fonte editável (.EMB, .JAN, .EOB) na mesma pasta com o mesmo nome exato da matriz exportada para a máquina (.DST, .PES, .JEF)."
    ],
    "beginnerExplanation": "É a forma organizada e inteligente de dar nome aos seus arquivos no computador! Em vez de salvar como 'bordado1.pes', 'teste.pes' ou 'logo_novo_final_mesmo.pes', você coloca um nome claro como 'Maria_ToalhaUrso_13x18_v1.pes'. Assim, se daqui a 6 meses a cliente pedir outra toalha igual, você acha em 3 segundos sem errar nada!",
    "applications": [
      "Organização de catálogos profissionais de matrizes em ateliês e indústrias de bordado",
      "Prevenção de envio de versões com erros ou sem aprovação final do cliente para a máquina",
      "Facilidade de busca instantânea no computador por nome de cliente, data ou dimensão",
      "Padronização de pen drives de produção utilizados pelos operadores de máquinas"
    ],
    "technicalDetails": "Máquinas de bordar com sistemas operacionais baseados em DOS ou arquiteturas antigas (como Tajima TME-DC, Barudan BEMS, SWF série A) limitam o nome do arquivo a 8 caracteres sem acento (padrão 8.3). Ao salvar para máquinas antigas, a matriz deve ser renomeada com códigos alfanuméricos compactos (ex: 'ESC_P01.DST'). Em máquinas modernas com painel touchscreen Linux/Android, nomes longos de até 64 caracteres são suportados sem problemas.",
    "commonErrors": [
      "❌ Usar nomes vagos como 'bordado.dst', 'logo.pes', 'teste123.jef', gerando caos no ateliê",
      "❌ Incluir acentos, emojis, 'ç' e símbolos como '#', '$', '%', que causam erro de leitura ou travamento no painel da bordadeira",
      "❌ Sobrescrever arquivos antigos após correções, perdendo a versão original aprovada pelo cliente",
      "❌ Não indicar o tamanho ou versão no nome do arquivo, bordando uma matriz de 15 cm onde deveria ser de 8 cm"
    ],
    "troubleshootingTips": [
      "Se a máquina não reconhecer o arquivo no pen drive: Remova acentos, espaços e caracteres especiais do nome e mantenha o nome curto com menos de 8 letras",
      "Se bordar a versão errada: Crie uma pasta 'ARQUIVADOS' para onde todas as versões antigas (v1, v2) são movidas quando a versão final (vFinal) for aprovada",
      "Se perder o arquivo fonte: Sempre salve o arquivo editável (.EMB) antes de gerar o arquivo compilado (.PES/.DST)"
    ],
    "dicaArtrelados": "Crie uma regra de ouro no seu ateliê: NUNCA use a palavra 'FINAL' no nome de um arquivo (pois sempre aparece um 'final_agora_vai_2.pes'). Use sempre 'v1', 'v2', 'v3'. A versão com o número mais alto é sempre a mais recente e validada!",
    "voceSabia": "Em grandes indústrias têxteis com mais de 50 máquinas conectadas em rede, erros de nomenclatura de arquivos são responsáveis por até 12% de todo o refugo de peças defeituosas causadas por operadores que carregaram matrizes antigas por engano!",
    "practicalExercise": "Abra a pasta de matrizes do seu computador. Escolha 5 arquivos salvos com nomes confusos e renomeie-os usando o padrão Artrelados: [Cliente]_[Tema]_[Tamanho]_[Versao].[extensao]. Sinta como a pasta fica profissional e visualmente organizada.",
    "quickSummary": "Padrão de nomeação claro e sem caracteres especiais para organizar matrizes, evitar retrabalho e garantir leitura perfeita na máquina.",
    "relatedTerms": [
      "Extensões de Arquivo (DST, PES, JEF)",
      "Painel de Comando",
      "Normalização de Arquivos de Matriz",
      "Programação de Bordado"
    ],
    "tags": [
      "n-031",
      "nomenclatura",
      "organizacao",
      "arquivos",
      "boas praticas",
      "padronizacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SMITH, R. Digital Asset Management for Commercial Embroidery Studios. Stitches Magazine, 2021.",
      "WILCOM. Best Practices for File Management & Production Networking. Wilcom Whitepaper Series, 2022."
    ]
  },
  {
    "id": "nivelamento-de-velocidade-em-curvas",
    "code": "N-032",
    "letter": "N",
    "term": "Nivelamento de Velocidade em Curvas e Ângulos (Corner Slowdown)",
    "pronunciation": "ni-ve-la-men-to de ve-lo-ci-da-de em cur-vas e ân-gu-los",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "summary": "Algoritmo eletrônico da bordadeira e do software que reduz dinamicamente a rotação do cabeçote (RPM) ao executar curvas acentuadas e cantos vivos para evitar quebras de linha e deflexão da agulha.",
    "origin": "Do inglês 'corner slowdown' / 'look-ahead acceleration control', tecnologia de controle de movimento adaptativo desenvolvida nos sistemas CNC industriais aeroespaciais e adaptada para bordadeiras nos anos 1990.",
    "definition": "O Nivelamento de Velocidade em Curvas e Ângulos é um recurso avançado de controle servomotor que calcula a aceleração e desaceleração do pantógrafo em função da geometria da matriz. Quando a agulha executa pontos com mudanças bruscas de direção em ângulos agudos (menores que 60°) ou arcos muito fechados, a força de inércia do bastidor pesado e a tensão lateral sobre a haste da agulha aumentam drasticamente. O sistema de controle reduz a rotação de 1.000 RPM para 600 ou 500 RPM durante o trecho crítico e acelera novamente nas retas, garantindo precisão milimétrica e eliminando a quebra de linha por flexão mecânica.",
    "howItWorks": [
      "1. O processador da máquina ou o software de matrizes analisa o vetor dos próximos 5 a 10 pontos à frente (função Look-Ahead).",
      "2. Detecta uma mudança angular severa na trajetória do bastidor.",
      "3. O inversor de frequência do motor principal reduz suavemente os giros por minuto (RPM) antes de atingir o vértice.",
      "4. O pantógrafo realiza o movimento angular com estabilidade absoluta, sem vibrações parasitas.",
      "5. Após contornar a curva, o motor retorna à velocidade máxima configurada pelo operador."
    ],
    "beginnerExplanation": "É como quando você está dirigindo um carro em uma estrada reta e precisa fazer uma curva bem fechada: você pisa no freio para fazer a curva com segurança e depois acelera de novo na reta! A bordadeira faz exatamente isso sozinha: quando o desenho tem biquinhos pontudos ou curvas difíceis, ela diminui a velocidade para a agulha não entortar e a linha não arrebentar.",
    "applications": [
      "Bordado de pequenos textos com serifa, brasões detalhados e monogramas complexos",
      "Confecção de bordados em bonés estruturados e materiais rígidos",
      "Execução de cantos perfeitos em molduras de ponto satim com corte esquadrejado (Mitre Corner)",
      "Proteção mecânica contra desgaste de correias e rolamentos do pantógrafo"
    ],
    "technicalDetails": "A aceleração centrípeta exercida sobre o bastidor em curvas fechadas a 1.000 RPM pode exceder 3G de força de inércia. O algoritmo de desaceleração angular aplica uma curva de aceleração em formato 'S-Curve' (S-Curve Profile), reduzindo o pico de torque nos eixos X e Y e mantendo o desvio da agulha dentro da tolerância de segurança de 0,05 mm em relação à lançadeira.",
    "commonErrors": [
      "❌ Desativar o controle automático de velocidade no painel da máquina para tentar forçar a produção no limite máximo",
      "❌ Programar cantos em satim com ângulos agudos sem divisão de cantos (sem 'Mitered Corner' ou 'Cap Corner'), sobrecarregando a agulha",
      "❌ Usar correias do pantógrafo frouxas, gerando folgas e deformações nas pontas dos vértices",
      "❌ Não reduzir a velocidade geral da máquina ao bordar com linhas metálicas em designs cheios de cantos vivos"
    ],
    "troubleshootingTips": [
      "Se a linha sempre quebrar nas pontas de estrelas ou vértices de letras: Ative o 'Auto Slowdown' no painel ou reduza a velocidade geral para 650 RPM",
      "Se as curvas saírem deformadas ou ovais: Verifique a tensão das correias dentadas dos motores X e Y da máquina",
      "Se a agulha bater na chapa nos cantos: Verifique se o gancho da lançadeira não está com folga e calibre a aceleração no software"
    ],
    "dicaArtrelados": "No Wilcom ou Embird, sempre use a opção 'Canto em Esquadria' (Mitre Corner) em molduras e letras serifadas: o programa divide o ângulo em duas metades perfeitas a 45 graus, distribuindo os pontos sem amontoar linhas no mesmo buraco!",
    "voceSabia": "Em bordadeiras industriais com sistema inteligente de Inteligência Artificial embarcada nos servomotores, o painel mede a vibração do chassi por acelerômetros e ajusta a velocidade de cada ponto individualmente em tempo real!",
    "practicalExercise": "Digitalize um zigue-zague com 10 pontas agudas de 30 graus. Borde a primeira metade a 950 RPM sem desaceleração e a segunda metade a 600 RPM ou com desaceleração ativada. Observe a nitidez dos vértices e a ausência de quebras de linha.",
    "quickSummary": "Redução automática de rotação em curvas e cantos para evitar quebra de linha, deflexão da agulha e vibração do bastidor.",
    "relatedTerms": [
      "Servomotor X/Y",
      "Deflexão da Agulha",
      "Ponto Cheio (Satim)",
      "Painel de Comando"
    ],
    "tags": [
      "n-032",
      "corner slowdown",
      "desaceleracao",
      "velocidade",
      "curvas",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA SEWING MACHINE CO. TMEZ Intelligent Thread Control & Look-Ahead Cornering. Tajima Technical Papers, 2021.",
      "WILCOM. Corner Stitching Methods & Mitred Angles Optimization. Wilcom e4 Reference Manual, 2022."
    ],
    "recommendedSettings": {
      "speedPPM": "600-750 RPM em matrizes com curvas fechadas",
      "needleType": "75/11 SES ou RG",
      "stabilizer": "Conforme o tecido base",
      "threadTension": "Padrão calibrada",
      "density": "0,38 mm com cantos divididos (Mitre)"
    }
  },
  {
    "id": "nylon-6-vs-nylon-66",
    "code": "N-033",
    "letter": "N",
    "term": "Nylon 6 vs. Nylon 6.6 (Diferenças Químicas e Térmicas em Fios e Tecidos)",
    "pronunciation": "nai-lon seis ver-sus nai-lon seis pon-to seis",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto com numerais.",
    "category": "Agulhas & Fios",
    "summary": "Comparativo técnico entre as duas principais poliamidas industriais; o Nylon 6.6 possui maior ponto de fusão, maior tenacidade e maior resistência mecânica em alta velocidade.",
    "origin": "O Nylon 6.6 foi sintetizado por Wallace Carothers na DuPont em 1935 a partir de hexametilenodiamina e ácido adípico (6+6 carbonos); o Nylon 6 foi sintetizado por Paul Schlack na IG Farben em 1938 a partir de caprolactama.",
    "definition": "O Nylon 6 e o Nylon 6.6 representam as duas principais formulações poliméricas de poliamida empregadas na indústria têxtil e no bordado eletrônico. Embora ambos compartilhem flexibilidade e excelente resistência à abrasão, o Nylon 6.6 possui arranjo molecular mais cristalino e denso, o que lhe confere um ponto de fusão superior (265°C contra 220°C do Nylon 6), maior estabilidade dimensional contra encolhimento térmico e superior resistência à tração sob altas velocidades de rotação do cabeçote.",
    "howItWorks": [
      "1. Em linhas de bordar técnicas e monofilamentos invisíveis, o Nylon 6.6 resiste melhor ao atrito térmico com o olho da agulha em velocidades de até 1.000 RPM.",
      "2. Em tecidos base como Cordura e Ripstop, o Nylon 6.6 resiste mais ao calor gerado pela penetração repetida da agulha sem derreter os bordos dos furos.",
      "3. O Nylon 6 absorve cerca de 4% a 4,5% de umidade ambiente e tem maior afinidade tintorial para cores vivas e tingimentos ácidos.",
      "4. O Nylon 6.6 absorve menos umidade (cerca de 2,5%), mantendo rigidez e tensão mais constantes durante longas jornadas de bordado.",
      "5. Ao passar a ferro produtos bordados com Nylon 6, a temperatura máxima do ferro deve ser de 110°C; para Nylon 6.6, tolera até 150°C com pano úmido."
    ],
    "beginnerExplanation": "São dois 'irmãos' de nylon usados na confecção de tecidos e linhas: o Nylon 6.6 é o irmão mais forte e resistente ao calor do ferro e à máquina rápida (ele não derrete fácil!), enquanto o Nylon 6 é um pouco mais macio, pega cores super vivas no tingimento, mas pede um ferro de passar mais morno para não queimar.",
    "applications": [
      "Especificação de tecidos para uniformes de combate militar e equipamentos de segurança (Nylon 6.6 Cordura)",
      "Seleção de fios monofilamento invisíveis para acolchoamento e apliques de alta resistência",
      "Confecção de vestuário esportivo e meias de compressão (Nylon 6 texturizado)",
      "Avaliação de temperatura máxima segura para passar e termofixar entretelas em tecidos sintéticos"
    ],
    "technicalDetails": "A resistência à ruptura do filamento contínuo de Nylon 6.6 atinge 8,5 a 9,5 g/dtex, enquanto o Nylon 6 varia entre 7,0 e 8,0 g/dtex. A temperatura de transição vítrea (Tg) do 6.6 é de aproximadamente 50°C (seco), o que minimiza a deformação elástica dos pontos em produtos submetidos a lavagem industrial e secagem em tambor.",
    "commonErrors": [
      "❌ Aplicar prensa térmica a 180°C em tecido de Nylon 6 sem proteção, provocando fusão e encolhimento irreversível da peça",
      "❌ Utilizar velocidade máxima de 1.000 RPM com agulha sem acabamento cromo em Nylon 6, gerando calor por fricção que derrete o tecido",
      "❌ Confundir poliamida com poliéster durante o processo de tingimento ou lavagem com alvejante clorado (cloro corrói o nylon)",
      "❌ Ignorar a absorção de umidade do nylon em ateliês sem controle de umidade, resultando em variações de tensão"
    ],
    "troubleshootingTips": [
      "Se o tecido sintético derreter ao redor dos pontos: Reduza a velocidade para 650 RPM e utilize agulha com revestimento cerâmico ou cromo duro",
      "Se a linha monofilamento arrebentar por aquecimento: Verifique se o fio é de Nylon 6.6 e use agulha de calibre maior (ex: 80/12)",
      "Se o bordado encolher após a primeira lavagem com água quente: Utilize entretela recortável e tecidos pré-lavados ou de Nylon 6.6 estabilizado"
    ],
    "dicaArtrelados": "Para saber se um tecido técnico é de nylon ou poliéster no ateliê, faça o teste da pontinha da chama em um retalho minúsculo: o nylon queima com cheiro característico de aipo/vegetal e forma uma bolinha dura e cinza; o poliéster queima com cheiro adocicado e fumaça preta!",
    "voceSabia": "O nome 'Nylon' foi criado pela DuPont em 1938 a partir de uma combinação fonética de 'Now You Lost, Old Nippon' (uma provocação comercial à indústria da seda japonesa da época) e tornou-se a primeira fibra 100% sintética produzida pela humanidade!",
    "practicalExercise": "Pegue duas amostras de tecido sintético (uma etiqueta de Nylon e um retalho de poliéster). Borde um monograma de 3 cm em cada uma. Aplique o ferro morno em ambas e sinta a diferença de textura e maleabilidade dos materiais.",
    "quickSummary": "Comparativo de poliamidas: Nylon 6.6 é mais resistente ao calor e tração; Nylon 6 é mais macio e absorve mais corantes.",
    "relatedTerms": [
      "Nylon / Fibras de Poliamida",
      "Nylon Ballistic / Cordura 1000D",
      "Tensão de Linha",
      "Niquelagem e Revestimentos de Agulhas"
    ],
    "tags": [
      "n-033",
      "nylon 6",
      "nylon 66",
      "poliamida",
      "quimica textil",
      "resistencia termica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MONCRIEFF, R. W. Man-Made Fibres. Butterworth-Heinemann, 7th Edition, 2018.",
      "DUPONT TECHNICAL ARCHIVES. Carothers and the Invention of Polyamide 6.6. DuPont Historical Science Series, 2020."
    ]
  },
  {
    "id": "no-cego-na-lancadeira",
    "code": "N-034",
    "letter": "N",
    "term": "Nó Cego e Enrosco na Lançadeira (Rotary Hook Thread Snag)",
    "pronunciation": "nó ce-go na lan-ça-dei-ra",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Solução de Problemas",
    "summary": "Retenção mecânica de fios soltos ou desfiados ao redor do cesto da lançadeira rotativa, travando o eixo principal e impedindo a rotação livre da máquina.",
    "origin": "Do latim 'lancea' (arma arremessada), termo náutico e mecânico adotado na máquina de costura no século XIX para designar o órgão oscilante ou rotativo de captura de laçada.",
    "definition": "O Nó Cego na Lançadeira é uma falha mecânica grave que ocorre quando restos de linha superior ou inferior se desprendem e ficam enroscados no vão micrométrico entre o cesto estacionário da bobina e o corpo rotativo da lançadeira. O acúmulo de linha comprimida cria uma força de frenagem mecânica tão intensa que pode travar o motor principal da bordadeira, disparar alarmes de sobrecorrente (Main Motor Overload Error) e desalinhar o ponto de sincronismo (timing) da máquina.",
    "howItWorks": [
      "1. Uma ponta de linha cortada pelo trimer não é recolhida e cai dentro do poço da lançadeira.",
      "2. Na rotação seguinte a 800 RPM, a ponta da lançadeira captura essa ponta solta e a enrola na pista de rolamento do cesto.",
      "3. A linha comprimida forma uma cunha rígida que trava a rotação livre do mecanismo.",
      "4. O painel da máquina acusa parada súbita ou erro de motor principal travado.",
      "5. O operador precisa desligar a máquina, desmontar a chapa de agulha, retirar a caixa de bobina e remover manualmente os fragmentos de fio.",
      "6. Após a limpeza profunda e lubrificação com óleo mineral, a máquina é destravada girando o volante manualmente."
    ],
    "beginnerExplanation": "É quando uma pontinha de linha perdida entra no fundinho da máquina (onde fica a caixinha da bobina) e se enrola tão apertada na peça giratória que a máquina inteira trava e dá um susto com um apito de erro no painel! Para resolver, a gente desliga a máquina, tira a chapinha de ferro, puxa a linha presa com uma pinça, pinga uma gotinha de óleo e gira o botão do volante na mão para ver se ficou levinha de novo.",
    "applications": [
      "Manutenção preventiva de rotina após quebras bruscas de linha com embolamento",
      "Diagnóstico de alarmes de sobrecarga do motor principal em máquinas de bordar",
      "Limpeza e desobstrução da pista de deslizamento da lançadeira rotativa",
      "Prevenção de danos permanentes aos dentes de engrenagem e correias do eixo principal"
    ],
    "technicalDetails": "A folga entre o aro do cesto da bobina (bobbin case holder) e a pista da lançadeira rotativa é de apenas 0,08 mm a 0,12 mm. Um único filamento de poliéster 120D tem diâmetro de aproximadamente 0,02 mm; quando múltiplos filamentos se sobrepõem e sofrem fricção térmica, eles se fundem parcialmente criando uma trava mecânica de alta resistência ao cisalhamento.",
    "commonErrors": [
      "❌ Forçar o volante mecânico com força bruta enquanto a máquina está travada, entortando a ponta da lançadeira ou quebrando engrenagens",
      "❌ Usar chaves de fenda ou tesouras pontiagudas para 'cavar' a linha presa na lançadeira, arranhando a superfície polida de aço",
      "❌ Religar a máquina e apertar Start repetidamente com o motor travado, podendo queimar a placa controladora dos servomotores",
      "❌ Não verificar se restaram pedacinhos microscópicos de linha na pista após o destravamento"
    ],
    "troubleshootingTips": [
      "Se a lançadeira continuar pesada após tirar a linha: Aplique duas gotas de óleo de máquina Singer/Klüber na pista e gire o volante para frente e para trás com suavidade",
      "Se a linha estiver inacessível: Solte a mola de retenção do cesto (Finger Guide) para soltar o cesto e limpar por trás",
      "Se a máquina continuar acusando erro de motor: Verifique se não há linha enrolada também no eixo do estica-fio ou no sensor de rotação"
    ],
    "dicaArtrelados": "Tenha sempre no ateliê uma pinça cirúrgica de ponta fina curva e uma lanterninha de LED: com elas, você enxerga e retira qualquer pedacinho de linha preso no fundo da lançadeira em menos de 1 minuto sem precisar desmontar peças complexas!",
    "voceSabia": "As lançadeiras industriais japonesas (como Koban e Hirose) são fabricadas com aço tratado termicamente e polimento com diamante, resistindo a mais de 100 milhões de rotações sem perder o fio de corte se forem limpas e lubrificadas diariamente!",
    "practicalExercise": "Com a máquina desligada e sem energia, retire a chapa de agulha e a caixa de bobina. Observe a folga entre o cesto e a lançadeira. Gire o volante com a mão e sinta como o movimento deve ser 100% suave, leve e silencioso.",
    "quickSummary": "Fios acumulados e presos na lançadeira rotativa que travam a máquina; exige limpeza com pinça, lubrificação e giro manual do volante.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Caixa de Bobina",
      "Ninho de Passarinho / Embolamento",
      "Volante Manual"
    ],
    "tags": [
      "n-034",
      "no cego",
      "lancadeira",
      "travamento",
      "manutencao",
      "solucao de problemas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KOBAN HOOK CO. Rotary Hook Maintenance & De-Jamming Procedures for Multi-Head Machines. Technical Guide, 2021.",
      "HIROSE HOOK MFG. Operational Clearances and Lubrication of Industrial Rotary Hooks. Hirose Technical Bulletins, 2020."
    ]
  },
  {
    "id": "nodulo-de-ponto-decorativo",
    "code": "N-035",
    "letter": "N",
    "term": "Nódulo de Ponto Decorativo / Ponto Pérola (Pearl Stitch / Granito)",
    "pronunciation": "nó-du-lo de pon-to de-co-ra-ti-vo / pon-to pé-ro-la",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Pontos Básicos & Decorativos",
    "summary": "Ponto eletrônico tridimensional composto pelo empilhamento concêntrico de micro-pontos com formato arredondado de pérola, clássico em bordados tradicionais de richelieu e enxovais nobres.",
    "origin": "Derivado dos pontos de nós da renda Renascença e do bordado 'Granito' da Ilha da Madeira, digitalizado nos softwares de matrizes modernos para reproduzir acabamentos manuais de luxo.",
    "definition": "O Nódulo de Ponto Decorativo (ou Ponto Pérola / Granito) é um elemento ornamental de matriz digitalizado através de sequências de micro-laçadas em formato espiralado ou em 'oito' que se sobrepõem exatamente no mesmo ponto geométrico do tecido. Ao empilhar de 6 a 12 camadas de fio de poliéster ou viscose em uma área circular de 1,5 a 3 mm de diâmetro, o ponto cria uma pequena meia-esfera tridimensional com brilho perolado e textura tátil marcante, muito apreciada em monogramas clássicos, toalhas de lavabo, barras de lençóis e contornos de rendas.",
    "howItWorks": [
      "1. O software de matrizes calcula a posição central do nódulo e gera uma grade de pontos concêntricos de raio decrescente.",
      "2. A agulha executa primeiro uma base de ancoragem de 2 pontos minúsculos (0,5 mm) para prender a entretela.",
      "3. Em seguida, a máquina executa de 6 a 10 perfurações alternadas em padrão radial com tensão de linha superior equilibrada.",
      "4. O volume da linha se acumula sobre a superfície do tecido, criando o domo esférico (nódulo perolado).",
      "5. Ao finalizar o nódulo, a máquina executa um micro-arremate invisível e dá um salto curto (Jump) com corte para o próximo nódulo da sequência."
    ],
    "beginnerExplanation": "É aquele pontinho decorativo lindo que parece uma perolazinha ou bolinha de linha brilhante costurada no tecido! O computador programa a agulha para dar várias voltinhas bem no mesmo lugar, fazendo a linha empilhar e virar uma bolinha em relevo que dá um charme todo especial para toalhinhas de bebê e jogos de cama elegantes.",
    "applications": [
      "Acabamento ornamental de monogramas e letras cursivas em enxovais de alto luxo",
      "Pontilhado decorativo em barras de toalhas de banho e lavabo estilo Granito",
      "Decoração perolada em bordados de Richelieu e rendas autoportantes",
      "Criação de miolos de flores em matrizes florais botânicas clássicas"
    ],
    "technicalDetails": "O diâmetro ideal do nódulo decorativo varia entre 1,8 mm e 3,2 mm. Para diâmetros maiores que 3,5 mm, o empilhamento excessivo de perfurações pode cortar o tecido (efeito broca); nesses casos, utiliza-se a técnica de anéis concêntricos com centro oco ou ponto de nó francês com deslocamento radial.",
    "commonErrors": [
      "❌ Empilhar mais de 16 pontos no mesmo diâmetro milimétrico em tecidos finos (como cambraia), cortando o tecido e gerando furos",
      "❌ Usar tensão de linha superior muito apertada, que achata a bolinha e puxa o relevo para dentro do furo da entretela",
      "❌ Não utilizar entretela solúvel ou No-Show Mesh por baixo em tecidos com felpa, fazendo a perolazinha sumir no meio dos pelos",
      "❌ Programar nós muito próximos sem compensação de repuxo, deformando a linha reta do desenho"
    ],
    "troubleshootingTips": [
      "Se o nódulo afundar no tecido: Coloque um pedaço de plástico hidrossolúvel (Avalon) por cima do tecido antes de bordar",
      "Se a linha desfiar durante o nódulo: Reduza a contagem de pontos do nódulo no software ou aumente o diâmetro da pérola",
      "Se o nódulo ficar torto ou oval: Verifique se o tecido está bem esticado no bastidor sem folgas"
    ],
    "dicaArtrelados": "Para criar miolos de margaridas e flores com efeito deslumbrante, use linha metálica dourada ou prateada apenas nos nódulos decorativos centrais: o relevo da bolinha faz o fio metálico brilhar como uma joia sob a luz!",
    "voceSabia": "Na Ilha da Madeira, no século XIX, as bordadeiras tradicionais competiam para ver quem conseguia fazer o 'Ponto Granito' com o menor diâmetro possível: as mestras mais famosas conseguiam fazer pérolas de menos de 1 milímetro com mais de 10 voltas de fio de seda pura!",
    "practicalExercise": "No seu software de matrizes, selecione a ferramenta 'Ponto Pérola' ou 'Ponto Nó'. Desenhe uma linha ondulada de 10 cm com 15 nódulos espaçados em 6 mm. Borde em um percal 200 fios e passe a mão para sentir o relevo perolado das bolinhas.",
    "quickSummary": "Ponto tridimensional que empilha micro-pontos criando pérolas brilhantes de linha; ideal para enxovais, richelieu e flores.",
    "relatedTerms": [
      "Nó Francês Eletrônico / Ponto Nó",
      "Ponto Cheio (Satim)",
      "Filme Hidrossolúvel",
      "Enxovais de Bebê"
    ],
    "tags": [
      "n-035",
      "nodulo decorativo",
      "ponto perola",
      "granito",
      "richelieu",
      "relevo",
      "enxoval",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Creative Stitch Types & Pearl Stitch Digitizing. Wilcom Studio Reference, 2021.",
      "MUSEU DO BORDADO DA MADEIRA. O Ponto Granito e a História do Bordado Tradicional Madeirense. Funchal, 2019."
    ]
  },
  {
    "id": "needle-plate-chapa-de-agulha",
    "code": "N-036",
    "letter": "N",
    "term": "Chapa de Agulha de Furo Redondo vs. Furo Oval (Straight Stitch Needle Plate)",
    "pronunciation": "xá-pa de a-gu-lha / ní-dəl pleit",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Componentes da Máquina",
    "summary": "Placa metálica que cobre a lançadeira com orifício calibrado para a passagem da agulha; a chapa de furo redondo pequeno é essencial no bordado para evitar que tecidos finos e malhas sejam sugados para baixo.",
    "origin": "Do inglês 'needle plate' (placa de agulha), componente fundamental patenteado desde as primeiras máquinas de costura de Elias Howe e Isaac Singer na década de 1850.",
    "definition": "A Chapa de Agulha (Needle Plate) é a placa de aço temperado e retificado fixada sobre a base do leito da máquina, logo acima da lançadeira rotativa e da caixa de bobina. No bordado eletrônico industrial e profissional, utiliza-se a Chapa de Furo Redondo Pequeno (Single Hole / Straight Stitch Plate, com orifício de 1,2 mm a 1,6 mm de diâmetro), diferentemente das máquinas de costura convencionais que utilizam chapas de Furo Oval Largo (5 mm a 7 mm) para permitir o zigue-zague lateral. O furo redondo estreito oferece suporte rígido de 360° ao redor do ponto de penetração da agulha, eliminando o efeito 'funil' onde tecidos finos, malhas e sedas são empurrados para dentro do poço da lançadeira.",
    "howItWorks": [
      "1. A agulha desce perpendicularmente através do orifício milimétrico central da chapa de agulha.",
      "2. O calcador pressiona o tecido plano diretamente contra a superfície de aço polido ao redor do furo.",
      "3. Por não haver espaço livre lateral, o tecido não consegue ceder para baixo (evitando o efeito 'flagging' e sucção de tecido).",
      "4. A laçada de linha é formada no verso de maneira estável e capturada pela ponta da lançadeira.",
      "5. A agulha sobe limpa, mantendo o tecido perfeitamente plano e sem rugas.",
      "6. A chapa deve ser inspecionada periodicamente contra rebarbas ou marcas de impacto de agulha que possam desfiar a linha."
    ],
    "beginnerExplanation": "É aquela chapinha de metal com um furinho por onde a agulha entra na máquina! Para bordar, o melhor é que esse furinho seja bem pequenininho e redondinho (do tamanho exato da agulha). Se o furo for aquele rasgo largo e oval de máquina de costura comum, tecidos fininhos como malha, seda e voil são 'engolidos' para dentro do buraco, fazendo um bolo de linha e furando a sua peça!",
    "applications": [
      "Bordado de alta precisão em malhas, sedas finas, cetim, organza e tecidos delicados",
      "Bordado de microletras e monogramas com detalhes minuciosos de 3 a 5 mm",
      "Substituição de chapas arranhadas por quebras anteriores de agulha para eliminar desfiamento de fios",
      "Configuração padrão para máquinas industriais e módulos exclusivos de bordado de máquinas combinadas"
    ],
    "technicalDetails": "O diâmetro do furo da chapa de bordado varia entre 1,2 mm (para agulhas finas 65/9 a 75/11) e 1,6 mm a 2,0 mm (para agulhas grossas 90/14 e linhas pesadas). A dureza superficial do aço da chapa atinge 58-62 HRC (Rockwell C). Qualquer risco ou 'agulhada' no bordo interno do furo cria uma aresta cortante que desfia o fio de poliéster em fração de segundos.",
    "commonErrors": [
      "❌ Bordar tecidos finos e elásticos em máquinas híbridas usando a chapa de zigue-zague de furo largo de 7 mm, engolindo o tecido",
      "❌ Continuar bordando com uma chapa de agulha arranhada por agulhas que bateram no metal, causando quebras misteriosas de linha",
      "❌ Apertar os parafusos da chapa de agulha de forma desalinhada, forçando a agulha a descer raspando na borda do orifício",
      "❌ Limpar a chapa com lixas grossas abrasivas que aumentam a folga do furo e removem o polimento original"
    ],
    "troubleshootingTips": [
      "Se a linha desfiar sem motivo aparente: Passe uma meia-fina de mulher ou fio de seda pelo furo da chapa; se desfiar, use uma lixa d'água 1200 ou pasta de polimento com fio dental para tirar as rebarbas",
      "Se o tecido for sugado para dentro do buraco: Instale a chapa de furo redondo simples (Straight Stitch) e use entretela mais firme",
      "Se a agulha bater na chapa ao iniciar: Verifique se a agulha está reta e se a chapa está parafusada na posição correta"
    ],
    "dicaArtrelados": "Para polir pequenos arranhões no furo da chapa de agulha sem gastar nada no ateliê, passe um pedaço de fio dental comum embebido em pasta de dente branca (que age como polidor micrométrico suave) para frente e para trás no furo até ficar brilhante e 100% liso!",
    "voceSabia": "Nas máquinas industriais modernas de alta precisão, o furo da chapa de agulha é cortado com jato de água de altíssima pressão e polido com pasta de diamante para garantir que a borda interna tenha um raio de curvatura de 0,05 mm sem arestas vivas!",
    "practicalExercise": "Desparafuse a chapa de agulha da sua máquina. Examine com uma lupa o contorno do orifício por onde a agulha passa: verifique se há marcas de batidas de agulha passadas. Se houver asperezas, faça o polimento suave com fio dental antes de recolocar.",
    "quickSummary": "Placa metálica com furo redondo estreito que apoia o tecido e evita que peças delicadas sejam sugadas para a lançadeira.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Agulha de Bordar",
      "Flagging (Efeito Bandeira)",
      "Desfiamento de Linha"
    ],
    "tags": [
      "n-036",
      "chapa de agulha",
      "needle plate",
      "furo redondo",
      "straight stitch",
      "componentes",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ NEEDLES. Needle & Needle Plate Interaction in Modern Stitch Formation. Technical Report, 2021.",
      "SINGER SEWING CO. Machine Mechanics: Needle Plates, Feed Mechanisms & Bobbin Interfaces. Historical Technical Series, 2019."
    ]
  },
  {
    "id": "nivelamento-do-bastidor-magnetico",
    "code": "N-037",
    "letter": "N",
    "term": "Nivelamento do Bastidor Magnético (Magnetic Hoop Clamping Force)",
    "pronunciation": "ni-ve-la-men-to do bas-ti-dor mag-né-ti-co",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Técnicas de Bastidor",
    "summary": "Ajuste e distribuição uniforme da força de retenção dos ímãs de neodímio em bastidores magnéticos para prender tecidos grossos ou delicados sem deixar marcas permanentes de pressão.",
    "origin": "Do grego 'magnitis lithos' (pedra de Magnésia), aplicado aos aros de bordado com ímãs de terras raras (Neodímio-Ferro-Boro) desenvolvidos a partir do ano 2000 pela empresa Mighty Hoop.",
    "definition": "O Nivelamento do Bastidor Magnético é a técnica de montagem e alinhamento dos aros de bordado que utilizam atração magnética de ímãs de neodímio no lugar dos parafusos de aperto tradicionais. O sistema consiste em uma base metálica ou plástica inferior e um aro superior embutido com múltiplos blocos magnéticos de alta potência que se atraem instantaneamente. Esse nivelamento garante que a pressão exercida sobre o tecido e a entretela seja 100% paralela e uniforme em todos os 360° do perímetro, eliminando distorções de estiramento manual, marcas de aro ('hoop burn') em veludos e toalhas, e reduzindo o estresse articular das mãos da bordadeira.",
    "howItWorks": [
      "1. A base inferior do bastidor magnético é posicionada sobre a estação de montagem (HoopMaster ou mesa plana).",
      "2. A entretela e a peça de vestuário são acomodadas sobre a base inferior sem esticar a fibra.",
      "3. O aro superior magnético é aproximado em um ângulo de 45° a partir do topo ou da lateral para evitar beliscar o tecido.",
      "4. Os ímãs de neodímio fecham o bastidor com força calibrada e uniforme em toda a extensão da moldura.",
      "5. O tecido fica retido com firmeza absoluta sem esmagamento de felpas nem estiramento elástico.",
      "6. O bastidor é acoplado ao pantógrafo da bordadeira através dos braços de fixação padrão."
    ],
    "beginnerExplanation": "É o bastidor moderno que fecha sozinho com ímãs super fortes em vez de você ter que apertar parafuso na mão! Ele é maravilhoso porque você só coloca a camiseta ou toalha por cima da base e solta o aro de cima: os ímãs 'puxam' com a força certinha, sem amassar a toalha, sem deixar aquela marca redonda feia que não sai e sem doer os dedos de tanto apertar parafuso!",
    "applications": [
      "Bordado em tecidos nobres que marcam facilmente com parafusos (veludo, camurça, couro sintético, cetim)",
      "Bordado de peças grossas e volumosas (moletom felpudo, jaquetas, toalhas de banho pesadas)",
      "Produção seriada rápida com trocas contínuas de bastidores em ateliês e indústrias",
      "Prevenção de Lesões por Esforço Repetitivo (LER/DORT) em operadores de bordado"
    ],
    "technicalDetails": "Os ímãs de Neodímio N42 a N52 empregados nos bastidores magnéticos geram forças de atração vertical entre 15 kg e 35 kg por ponto de contato. Essa força é distribuída por almofadas amortecedoras emborrachadas que mantêm o coeficiente de atrito estático sem concentrar estresse de cisalhamento nas fibras têxteis.",
    "commonErrors": [
      "❌ Deixar os dedos entre os aros superior e inferior ao fechar o bastidor, causando prensamento doloroso por atração brusca dos ímãs",
      "❌ Puxar o tecido pelas pontas depois que o ímã já fechou, desalinhando a trama do tecido e criando repuxo assimétrico",
      "❌ Guardar o bastidor magnético próximo a cartões magnéticos, marca-passos cardíacos, celulares ou telas sensíveis",
      "❌ Usar bastidores magnéticos pesados em máquinas domésticas pequenas sem suporte de mesa, sobrecarregando o braço do pantógrafo"
    ],
    "troubleshootingTips": [
      "Se o tecido escorregar no meio do bordado grosso: Adicione uma tira de entretela rasga-fácil extra nas bordas para aumentar a espessura de aderência magnética",
      "Se o bastidor for difícil de abrir: Deslize o aro superior lateralmente em vez de puxar reto para cima contra a força dos ímãs",
      "Se houver vibração no pantógrafo: Verifique se os parafusos dos braços adaptadores estão firmemente apertados nas canaletas da máquina"
    ],
    "dicaArtrelados": "Para abrir um bastidor magnético sem fazer força nos braços, não tente puxar reto para cima: apenas 'deslize' o aro de cima para o lado como se estivesse abrindo uma gaveta! A força de cisalhamento lateral é 5 vezes menor que a força de atração direta.",
    "voceSabia": "Os ímãs de neodímio utilizados nos bastidores magnéticos modernos são compostos por uma liga de Neodímio, Ferro e Boro (NdFeB) que mantém mais de 99% do seu magnetismo original mesmo após 100 anos de uso contínuo no ateliê!",
    "practicalExercise": "Experimente montar uma toalha de banho felpuda em um bastidor de parafuso tradicional e outra no bastidor magnético. Após 10 minutos, retire ambas e observe como o bastidor tradicional deixa um vinco esmagado enquanto o magnético mantém a felpa intacta.",
    "quickSummary": "Bastidor com ímãs de neodímio que prende tecidos grossos ou delicados com força uniforme e sem marcas de parafuso.",
    "relatedTerms": [
      "Bastidor Magnético",
      "Marcas de Bastidor (Hoop Burn)",
      "Técnicas de Bastidor",
      "Flutuação de Tecido (Floating)"
    ],
    "tags": [
      "n-037",
      "bastidor magnetico",
      "mighty hoop",
      "neodimio",
      "sem marcas",
      "ergonomia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MIDWEST PRODUCTS. Mighty Hoop Magnetic Hooping Systems & Industrial Ergonomics. Technical Guide, 2021.",
      "EMBROIDERY BUSINESS MAGAZINE. The Impact of Magnetic Hoops on Production Speed & Fabric Protection. Special Report, 2022."
    ]
  },
  {
    "id": "non-stick-needle-agulha-antiaderente",
    "code": "N-038",
    "letter": "N",
    "term": "Non-Stick Needle / Agulha Antiaderente (Teflon / Anti-Glue Coated)",
    "pronunciation": "non-is-tik ní-dəl / a-gu-lha an-ti-a-de-ren-te",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Agulhas & Fios",
    "summary": "Agulha de bordar revestida com camada antiaderente de Teflon ou polímero especial que repele resíduos de cola em spray, fitas adesivas, couro e materiais sintéticos emborrachados.",
    "origin": "Desenvolvida pelas fabricantes alemãs Schmetz (Super NonStick) e Groz-Beckert para resolver o acúmulo de colas e resinas adesivas nos processos de bordado e patchwork contemporâneos.",
    "definition": "A Agulha Antiaderente (Non-Stick Needle / Anti-Glue) é uma agulha técnica de bordado cuja superfície de aço recebe um revestimento cerâmico ou polimérico de Politetrafluoretileno (PTFE/Teflon) ou Nitreto de Titânio lubrificado (PD Finish). Esse tratamento reduz o coeficiente de atrito a níveis mínimos e cria uma barreira química que impede que colas de spray temporário, adesivos sensíveis à pressão, termocolantes, películas de PVC e borrachas sintéticas grudem na haste, na cava (scarf) ou dentro do olho da agulha. Como resultado, elimina-se a principal causa de quebra de linha por acúmulo de 'goma' adesiva na agulha.",
    "howItWorks": [
      "1. A agulha perfura o tecido previamente fixado com spray adesivo temporário ou entretela adesiva.",
      "2. Ao atravessar a camada de cola, as partículas adesivas não conseguem ancorar na superfície repelente de Teflon.",
      "3. O olho da agulha permanece 100% desobstruído, permitindo a passagem livre do fio de bordar.",
      "4. A cava (scarf) da agulha mantém-se limpa, assegurando que a ponta da lançadeira capture a laçada sem falhas de ponto.",
      "5. A agulha opera com menor aquecimento térmico durante longas séries de bordado contínuo."
    ],
    "beginnerExplanation": "É a agulha 'antiaderente' igualzinha àquela frigideira de Teflon que não gruda nada! Quando a gente usa cola spray para grudar o tecido na entretela ou borda sintéticos grudentos, a agulha comum fica cheia de caca de cola e a linha começa a quebrar a cada 2 minutos. A agulha antiaderente não deixa a cola grudar nela, então a máquina borda lisinha do começo ao fim sem quebrar a linha!",
    "applications": [
      "Bordados com técnica de flutuação utilizando adesivo spray temporário",
      "Fixação de apliques de tecido com termocolante definitivo ou papel colante",
      "Bordado em sintéticos, couro legítimo, vinil, plásticos cristal e lona emborrachada",
      "Confecção de patches com filme autoadesivo 'Peel and Stick' no verso"
    ],
    "technicalDetails": "O revestimento Non-Stick possui espessura nanométrica (cerca de 2 a 4 micrômetros) e suporta temperaturas de fricção de até 280°C. O olho da agulha é cerca de 15% mais amplo que o de uma agulha universal de mesmo calibre, acomodando micro-variações na espessura do fio sem atrito adicional.",
    "commonErrors": [
      "❌ Limpar a agulha antiaderente com lixas de unha ou lâminas de metal afiadas, raspando o revestimento especial de Teflon",
      "❌ Usar spray adesivo comum de papelaria (cola permanente) em vez de spray temporário de ateliê, sobrecarregando até agulhas antiaderentes",
      "❌ Aplicar álcool puro ou solventes corrosivos diretamente no corpo da agulha",
      "❌ Continuar usando a agulha após mais de 15 horas de uso intenso sem inspecionar o desgaste da ponta"
    ],
    "troubleshootingTips": [
      "Se a cola ainda estiver acumulando: Limpe suavemente a agulha com uma gotinha de óleo mineral em um paninho de microfibra",
      "Se a linha começar a desfiar: Verifique se o olho da agulha não sofreu desgaste do revestimento e substitua a agulha",
      "Se houver pontos pulados em sintéticos: Aumente o calibre da agulha antiaderente de 75/11 para 80/12 para abrir passagem suficiente para a laçada"
    ],
    "dicaArtrelados": "Se você faz muitos apliques, nécessaires ITH com plástico cristal ou usa muito spray adesivo no ateliê, a agulha Schmetz Super NonStick 75/11 é a sua melhor amiga: ela dura até 3 vezes mais que uma agulha comum sem quebrar linha por cola!",
    "voceSabia": "O revestimento de Teflon (PTFE) foi descoberto por acidente em 1938 pelo químico Roy Plunkett nos laboratórios da DuPont enquanto pesquisava novos gases refrigerantes para geladeiras!",
    "practicalExercise": "Borrife cola spray temporária generosamente em dois retalhos de sarja. Borde um retângulo preenchido no primeiro retalho com uma agulha comum e no segundo com uma agulha Non-Stick. Veja como a primeira fica suja de cola em poucos segundos enquanto a antiaderente permanece limpa.",
    "quickSummary": "Agulha com revestimento antiaderente que não acumula resíduos de cola spray ou sintéticos; evita quebras de linha em apliques e flutuação.",
    "relatedTerms": [
      "Flutuação de Tecido (Floating)",
      "Aplique de Tecido (Appliqué)",
      "Agulha de Bordar",
      "Niquelagem e Revestimentos de Agulhas"
    ],
    "tags": [
      "n-038",
      "non-stick",
      "anti-glue",
      "teflon",
      "agulha antiaderente",
      "spray adesivo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ. Super NonStick Needle Technology for Embroidery & Quilting. Schmetz Information Leaflet, 2022.",
      "GROZ-BECKERT. Anti-Adhesive Surface Coatings for Industrial Needles. Technical Papers, 2021."
    ],
    "recommendedSettings": {
      "speedPPM": "700-800 PPM",
      "needleType": "75/11 ou 80/12 Schmetz Super NonStick ou Groz-Beckert GEBEDUR Anti-Glue",
      "stabilizer": "Conforme o tecido base com Spray Temporário",
      "threadTension": "Padrão (3.5)",
      "density": "0,38 mm a 0,40 mm"
    }
  },
  {
    "id": "nitrato-de-prata-fios-condutivos",
    "code": "N-039",
    "letter": "N",
    "term": "Nitrato de Prata / Fios Condutivos em Bordado Inteligente (Smart Textiles)",
    "pronunciation": "ni-tra-to de pra-ta / fi-os con-du-ti-vos",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Agulhas & Fios",
    "summary": "Fios tecnológicos revestidos com nanopartículas de prata pura ou aço inoxidável que conduzem eletricidade; permitem bordar circuitos eletrônicos, sensores de toque e LEDs em tecidos inteligentes.",
    "origin": "Do latim 'argentum' (prata), tecnologia desenvolvida nos laboratórios do MIT Media Lab e centros de pesquisa aeroespacial a partir do final da década de 1990 para o desenvolvimento de 'E-Textiles' (têxteis eletrônicos).",
    "definition": "O Fio Condutivo revestido com Nitrato de Prata ou filamentos metálicos de aço inoxidável é um insumo de alta tecnologia para bordado computadorizado capaz de conduzir corrente elétrica e sinais digitais. Os filamentos de poliamida ou poliéster recebem um banho químico de deposição de prata metálica nanométrica, mantendo a maleabilidade de uma linha de costura comum e uma resistência elétrica extremamente baixa (geralmente entre 1 e 50 ohms por metro). Com ele, a bordadeira programa trilhas condutoras no tecido que conectam microcontroladores (Arduino LilyPad), baterias, sensores biomédicos, antenas RFID e lâmpadas LED sem necessidade de fios rígidos de cobre ou solda convencional.",
    "howItWorks": [
      "1. A matriz de bordado é digitalizada como um esquema de circuito elétrico, onde as trilhas são desenhadas em ponto reto contínuo duplo (Triple Run).",
      "2. As trilhas de polo positivo (+) e negativo (-) são programadas em trajetos estritamente paralelos sem nunca se cruzarem para evitar curto-circuito.",
      "3. O fio condutivo é passado na linha superior ou na bobina inferior com tensão reduzida.",
      "4. A máquina executa as ilhas de contato (pads de conexão) em pontos de satim denso com furo central.",
      "5. Os componentes eletrônicos (LEDs, chips) são costurados manualmente ou prensados sobre as ilhas bordadas.",
      "6. Ao alimentar o circuito com uma bateria de moeda de 3V, a corrente elétrica flui pelas linhas bordadas acendendo os dispositivos."
    ],
    "beginnerExplanation": "É uma linha mágica feita com banho de prata que conduz eletricidade de verdade! Você pode colocar essa linha na sua máquina de bordar e desenhar caminhos no tecido que ligam luzinhas de LED, teclados de toque e baterias em roupas, fantasias e jaquetas do futuro sem precisar de fios de metal rígidos!",
    "applications": [
      "Vestuário inteligente com iluminação LED para roupas de alta visibilidade e figurinos de show",
      "Sensores biomédicos e eletrodos têxteis para monitoramento cardíaco (ECG) em roupas esportivas",
      "Teclados de toque capacitivo bordados em almofadas e painéis automotivos",
      "Uniformes militares com antenas integradas e sistemas de aquecimento térmico por resistência"
    ],
    "technicalDetails": "A condutividade linear típica de um fio de poliamida banhado a prata de 235 dtex/34 filamentos é de aproximadamente 10 a 20 Ω/m. Deve-se utilizar agulha de calibre 80/12 ou 90/14 com olho alargado (Topstitch) para não raspar a camada condutora de prata contra a chapa. A velocidade deve ser moderada entre 500 e 650 RPM.",
    "commonErrors": [
      "❌ Permitir o cruzamento de linhas de polaridade oposta (+ e -) na mesma camada do tecido, gerando curto-circuito imediato",
      "❌ Lavar a peça bordada com alvejante de cloro ou ácidos fortes, que oxidam a prata e anulam a condutividade elétrica",
      "❌ Puxar a linha com tensão excessiva nos tensores, rompendo os microfilamentos metálicos internos",
      "❌ Deixar pontas e caudas de linha condutiva soltas no avesso que possam encostar umas nas outras"
    ],
    "troubleshootingTips": [
      "Se o circuito não acender o LED: Use um multímetro na escala de continuidade para testar se há corrente ao longo da trilha bordada",
      "Se a linha condutiva arrebentar na máquina: Aumente o tamanho da agulha para 90/14 Topstitch e lubrifique levemente a linha com silicone fluido",
      "Se houver perda de contato nos terminais: Borde uma área de ilha de contato (pad) com ponto cheio mais denso para aumentar a área de pressão com o chip"
    ],
    "dicaArtrelados": "Para criar pontos de contato perfeitos com baterias e LEDs tipo Lilypad, digitalize pequenos círculos em ponto satim com diâmetro de 4 mm: a densidade de pontos cria uma 'almofadinha de prata' super condutiva que garante contato elétrico perfeito sem chiar!",
    "voceSabia": "Trajes espaciais da NASA utilizam bordados computadorizados com fios condutivos de prata para criar redes de sensores vitais que monitoram a respiração e temperatura dos astronautas durante missões no espaço sideral!",
    "practicalExercise": "Adquira um pequeno carretel de fio condutivo de prata e um LED Lilypad de 3V. No seu software, desenhe duas linhas retas paralelas de 10 cm espaçadas em 2 cm. Borde em um feltro grosso. Conecte uma bateria moeda de 3V em uma ponta e encoste o LED na outra ponta para vê-lo brilhar através dos pontos.",
    "quickSummary": "Fios tecnológicos com prata que conduzem eletricidade; usados para bordar circuitos, sensores e LEDs em tecidos inteligentes.",
    "relatedTerms": [
      "Linha de Poliéster Trilobal",
      "Agulha Topstitch",
      "Nó de Entrada / Nó Inicial",
      "Tecnologia Têxtil"
    ],
    "tags": [
      "n-039",
      "fio condutivo",
      "nitrato de prata",
      "smart textiles",
      "led",
      "e-textiles",
      "circuitos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "POST, E. R. & ORTH, M. E-Broidery: Design and Technology of Digitally Embroidered Garments. MIT Media Lab, 2000.",
      "BUECHLEY, L. LilyPad Arduino: Using Wearable Electronics to Connect Craft and Technology. IEEE Computer Graphics, 2018."
    ]
  },
  {
    "id": "no-de-seguranca-alinhavo-basting-box",
    "code": "N-040",
    "letter": "N",
    "term": "Nó de Segurança no Bastidor / Alinhavo de Retenção (Basting Box Perimeter)",
    "pronunciation": "nó de se-gu-ran-ça no bas-ti-dor / a-li-nha-vo de re-ten-ção",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Técnicas de Bastidor",
    "summary": "Moldura perimetral em ponto reto longo (3 a 5 mm) executada logo no início do bordado para prender tecidos delicados ou flutuantes à entretela antes de iniciar o desenho principal.",
    "origin": "Do francês 'bâtir' (construir temporariamente), termo clássico da alta costura para costura provisória de fixação, automatizado nos softwares de bordado computadorizado.",
    "definition": "O Alinhavo de Retenção (Basting Box / Basting Stitch) é uma função técnica e programada que traça uma moldura de segurança ao redor da área de bordado ou ao longo de todo o perímetro interno do bastidor. Executado com pontos retos longos e nós de entrada/saída suaves, ele ancora firmemente tecidos colocados por flutuação (sem prender nos aros), toalhas felpudas com plástico hidrossolúvel por cima, malhas elásticas, couro e peças prontas (como bolsos e meias). Após o término do bordado, essa costura é desfeita e removida em segundos puxando um único fio.",
    "howItWorks": [
      "1. O operador monta apenas a entretela firme no bastidor.",
      "2. Posiciona o tecido por cima da entretela (utilizando ou não cola spray temporária).",
      "3. Se houver felpa, coloca uma folha de plástico hidrossolúvel sobre o tecido.",
      "4. Aciona a função 'Basting' no painel da máquina ou a primeira cor programada no software.",
      "5. A máquina borda uma moldura retangular com pontos largos de 4 mm ao redor do desenho a 400 RPM.",
      "6. Com todas as camadas 100% estabilizadas e imóveis, o bordado principal se inicia sem perigo de deslocamento.",
      "7. Ao final, corta-se o nó inicial do alinhavo e puxa-se a linha com facilidade."
    ],
    "beginnerExplanation": "É uma 'costurinha mágica' de quadradinho que a máquina faz ao redor do desenho bem antes de começar o bordado de verdade! Ela serve para segurar o tecido bem preso na entretela (ótimo para quando você não quer prender o tecido nos aros para não amassar). Quando o bordado termina, você só puxa essa linha de fora e ela sai inteira num instante!",
    "applications": [
      "Fixação de tecidos nobres e sintéticos pela técnica de flutuação sem marcas de bastidor",
      "Retenção de plástico hidrossolúvel (Avalon) sobre toalhas felpudas e veludo",
      "Bordado de peças pequenas ou difíceis de prender no aro (golas, punhos, meias, bolsos)",
      "Prevenção de enrugamento em malhas de alta elasticidade com elastano"
    ],
    "technicalDetails": "O comprimento de ponto recomendado para o alinhavo é de 3,5 mm a 5,0 mm com densidade linear zero (apenas linha de costura). A distância entre a moldura de alinhavo e a borda externa do bordado deve ser de 3 mm a 5 mm para evitar que a agulha transpasse o alinhavo durante o preenchimento, o que dificultaria a remoção posterior.",
    "commonErrors": [
      "❌ Usar ponto reto muito curto (menos de 2 mm), tornando o alinhavo impossível de puxar sem rasgar o tecido",
      "❌ Posicionar a moldura de alinhavo muito próxima do desenho, fazendo com que os pontos cheios cubram o alinhavo",
      "❌ Deixar a tensão da linha de alinhavo muito apertada, franzindo o tecido antes mesmo de começar o bordado",
      "❌ Puxar a linha com força excessiva na remoção sem cortar os nós intermediários, esgarçando a trama da peça"
    ],
    "troubleshootingTips": [
      "Se o tecido escorregar durante o bordado: Aumente a área do alinhavo para cobrir toda a extensão do bastidor ou faça um alinhavo duplo cruzado em 'X'",
      "Se a linha do alinhavo for difícil de tirar: Use uma cor de linha contrastante (ex: linha vermelha em tecido branco) para enxergar e cortar os pontos com clareza",
      "Se a agulha bater no aro do bastidor: Verifique se a margem de segurança do alinhavo respeita o limite de 15 mm do aro"
    ],
    "dicaArtrelados": "Use sempre uma cor de linha bem diferente do tecido no alinhavo (por exemplo, linha amarela se o tecido for azul): isso facilita enxergar a linha para cortar e puxar em 5 segundos no final do trabalho sem perigo de cortar o tecido por engano!",
    "voceSabia": "A palavra 'alinhavar' vem do latim 'ad lineam' (seguir a linha reta) e era o primeiro exercício obrigatório ensinado às aprendizes de ateliês reais na Europa renascentista antes de terem permissão para tocar em agulhas de ouro e prata!",
    "practicalExercise": "Pegue um retalho de tecido de veludo ou atoalhado. Monte apenas a entretela no bastidor. Coloque o veludo e o plástico solúvel por cima. Execute um alinhavo retangular de 4 mm. Puxe a linha após o teste e comprove a facilidade de remoção sem marcas.",
    "quickSummary": "Moldura perimetral em ponto largo para fixar tecidos flutuantes e plásticos solúveis à entretela com remoção fácil.",
    "relatedTerms": [
      "Flutuação de Tecido (Floating)",
      "Filme Hidrossolúvel",
      "Marcas de Bastidor (Hoop Burn)",
      "Ponto Reto (Running Stitch)"
    ],
    "tags": [
      "n-040",
      "alinhavo",
      "basting box",
      "flutuacao",
      "estabilizacao",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER EMBROIDERY CLUB. Mastering Basting Functions & Floating Techniques. Technical Bulletin, 2021.",
      "BERNINA INTERNATIONAL. Creative Embroidery & Hoop Stabilizing Strategies. Bernina Press, 2020."
    ]
  },
  {
    "id": "nivelamento-de-espacamento-colunas-satim",
    "code": "N-041",
    "letter": "N",
    "term": "Nivelamento de Espaçamento entre Colunas de Satim (Column Spacing / Auto-Split)",
    "pronunciation": "ni-ve-la-men-to de es-pa-ça-men-to en-tre co-lu-nas de sa-tim",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "summary": "Divisão e compensação técnica de colunas largas de ponto cheio (acima de 7 mm a 9 mm) através do recurso de partição automática (Auto-Split) para evitar pontos frouxos que se engancham e deformam com o uso.",
    "origin": "Do francês 'satin' (cetim) e do inglês 'auto-split' (divisão automática), desenvolvido nos softwares de digitalização para contornar a limitação mecânica máxima de salto do pantógrafo.",
    "definition": "O Nivelamento de Espaçamento entre Colunas de Satim é o parâmetro de programação que controla o comprimento máximo dos pontos de cetim/cheio em hastes e letras largas. Quando uma coluna de satim ultrapassa 7 mm a 9 mm de largura, a linha fica excessivamente frouxa sobre o tecido, tornando-se vulnerável a enroscar em botões, anéis, unhas e sofrer danos durante a lavagem. O algoritmo de 'Auto-Split' insere penetrações intermediárias de agulha distribuídas de forma intercalada ou aleatória ao longo da largura da coluna, mantendo a cobertura brilhante do satim sem permitir pontos soltos perigosos.",
    "howItWorks": [
      "1. O programador define o comprimento máximo de satim no software (geralmente fixado em 7,0 mm ou 8,0 mm).",
      "2. Ao criar uma coluna de satim que se alarga para 10 mm ou 12 mm, o software ativa o Auto-Split.",
      "3. A ferramenta divide cada ponto longo em dois ou três segmentos menores com penetrações intermediárias.",
      "4. As penetrações intermediárias são alternadas em padrão tijolinho (quincôncio) para não criar uma 'linha de costura' visível no centro.",
      "5. A máquina borda a coluna com firmeza estrutural absoluta e textura uniforme.",
      "6. A compensação de repuxo é calibrada proporcionalmente à largura da coluna para evitar o estreitamento das bordas."
    ],
    "beginnerExplanation": "Quando uma letra ou desenho tem uma faixa de ponto cheio muito grossa (mais larga que um dedo mindinho), a linha fica solta demais no meio e qualquer coisinha pode puxar o fio na máquina de lavar. O programa de bordado usa esse recurso para dar um pontinho discreto no meio da faixa, segurando a linha bem firme no tecido sem perder o brilho bonito do bordado!",
    "applications": [
      "Digitalização de números grandes e letras em uniformes esportivos de futebol e basquete",
      "Bordado de brasões e faixas decorativas largas com largura superior a 8 mm",
      "Prevenção de fios soltos em roupas infantis e produtos para bebês que exigem alta segurança",
      "Substituição de preenchimento tatami pesado por satim dividido para economizar pontos e tempo"
    ],
    "technicalDetails": "A maioria das bordadeiras possui limite físico de deslocamento do pantógrafo de 12,1 mm a 12,7 mm por ponto sem acionar o comando de salto (Jump). Um ponto satim sem divisão acima de 9 mm perde mais de 60% da tensão de contato com o tecido, aumentando drasticamente o atrito por fricção na lavagem doméstica (teste de abrasão Martindale).",
    "commonErrors": [
      "❌ Deixar pontos satim com mais de 10 mm sem ativar o Auto-Split, resultando em fios flácidos que se soltam facilmente",
      "❌ Dividir os pontos com penetrações perfeitamente alinhadas em linha reta, criando um vinco feio e rachado no meio da coluna",
      "❌ Trocar satim largo por tatami com densidade excessiva, deixando o bordado duro como uma tábua de madeira",
      "❌ Não usar pontos de suporte adequados (Underlay em zigue-zague duplo) sob colunas largas de satim dividido"
    ],
    "troubleshootingTips": [
      "Se a coluna satim parecer 'rachada' no meio: Ative a opção de divisão aleatória ('Random Split' ou 'Jitter') no software",
      "Se os fios ficarem frouxos após lavar: Reduza o limite máximo de comprimento do satim para 6,5 mm e reforce o ponto de suporte",
      "Se a borda da coluna encolher: Aumente a compensação de repuxo (Pull Compensation) para 0,45 mm"
    ],
    "dicaArtrelados": "Ao digitalizar letras grossas de jaquetas universitárias (estilo College), use a partição de satim com deslocamento aleatório: o visual fica com o mesmo brilho do ponto cheio, mas com a resistência e durabilidade de um preenchimento tatami industrial!",
    "voceSabia": "Em normas internacionais de segurança para roupas de bebês e crianças até 3 anos (norma ASTM F963), fios de bordado soltos com mais de 6 mm são proibidos por representarem risco de prender os dedinhos das crianças!",
    "practicalExercise": "No seu software, crie duas letras 'I' maiúsculas de 4 cm de altura com largura de coluna de 12 mm: na primeira deixe satim comum puro e na segunda ative o 'Auto-Split' a 7 mm. Borde ambas em um tecido de sarja e sinta com o dedo a diferença de firmeza de cada uma.",
    "quickSummary": "Divisão automática de pontos de satim muito largos para evitar fios soltos e garantir segurança e durabilidade.",
    "relatedTerms": [
      "Ponto Cheio (Satim)",
      "Compensação de Encolhimento",
      "Ponto Tatami",
      "Densidade de Ponto"
    ],
    "tags": [
      "n-041",
      "auto-split",
      "coluna satim",
      "divisao de pontos",
      "pontos longos",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Managing Long Satin Stitches & Auto-Split Features. Wilcom Knowledge Base, 2021.",
      "ASTM INTERNATIONAL. Standard Consumer Safety Specification for Toy and Children's Apparel Safety (ASTM F963). West Conshohocken, 2020."
    ]
  },
  {
    "id": "nylon-twill-sarja-poliamida-patches",
    "code": "N-042",
    "letter": "N",
    "term": "Nylon Twill / Sarja de Poliamida para Patches e Emblemas (Embroidered Patch Twill)",
    "pronunciation": "nai-lon tu-il / sar-ja de po-li-a-mi-da pa-ra pé-tchis",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Tipos de Tecidos",
    "summary": "Tecido estruturado com tecelagem sarjada diagonal de alta resistência, tratado termicamente com resina no verso para confecção de brasões, patches, distintivos e emblemas termocolantes.",
    "origin": "Do inglês 'twill' (sarja, padrão diagonal), originário da tecelagem tradicional britânica e aprimorado com poliamida e suporte de resina plástica para emblemas militares a partir dos anos 1960.",
    "definition": "O Nylon Twill (ou Sarja de Poliamida/Poliéster para Patches) é o tecido padrão de referência mundial para a fabricação de distintivos bordados, brasões escolares, insígnias de segurança e patches colecionáveis. Caracteriza-se por uma textura diagonal pronunciada em ângulo de 45° e por receber no verso uma laminação de resina vinílica ou película termoplástica que impede o desfiamento durante o corte com tesoura ou máquina laser. Por ter rigidez estrutural própria, ele serve de fundo colorido plano para o emblema, dispensando preenchimentos de tatami gigantescos e reduzindo o tempo de bordado em mais de 70%.",
    "howItWorks": [
      "1. O tecido Nylon Twill já resinado é preso no bastidor junto com uma folha de entretela rasga-fácil ou recortável média.",
      "2. A bordadeira executa os elementos gráficos do logotipo e os textos em ponto satim brilhante.",
      "3. Ao final, a máquina executa a borda perimetral de reforço (borda de bloqueio).",
      "4. O patch é recortado rente à borda externa com tesoura de precisão, cauterizador térmico ou laser de CO2.",
      "5. É aplicado o acabamento de overloque especial (Merrow Border) ou a própria borda de satim denso.",
      "6. No verso, prensa-se o filme termocolante definitivo para aplicação com ferro de passar na roupa final."
    ],
    "beginnerExplanation": "É aquele tecido clássico com risquinhos diagonais durinho que a gente vê no fundo dos escudos da polícia, times de futebol e jaquetas de motoqueiro! Como o tecido já é bonito, durinho e colorido, você não precisa bordar o fundo todo de linha: você só borda o desenho por cima, recorta a borda e o seu patch fica lindo, profissional e pronto para colar com ferro na roupa!",
    "applications": [
      "Confecção de patches militares, policiais, escoteiros e de motoclubes",
      "Emblemas corporativos para uniformes profissionais de mecânica e indústrias",
      "Chaveiros bordados e tags de bagagem com termocolante ou velcro no verso",
      "Bordados em peças de difícil acesso montados como apliques termofixados"
    ],
    "technicalDetails": "O Nylon Twill apresenta gramatura média entre 240 g/m² e 320 g/m² e construção de 2/1 ou 2/2 em sarja. Por ser resistente e termicamente estável, suporta temperaturas de prensagem de 160°C a 175°C por 15 segundos na aplicação de termocolante termofusível (Poliamida/Poliuretano) sem deformação dimensional.",
    "commonErrors": [
      "❌ Usar sarja comum de algodão sem resina no verso, que desfia nas pontas e fica mole no emblema pronto",
      "❌ Borda de satim final muito estreita (menos de 3,5 mm), não cobrindo o corte e permitindo desfiamento",
      "❌ Não usar compensação de repuxo no aro circular, resultando em patches ovais em vez de redondos",
      "❌ Aquecer excessivamente o cauterizador manual, queimando e escurecendo as bordas do tecido claro"
    ],
    "troubleshootingTips": [
      "Se as bordas do patch começarem a desfiar: Aplique um selador térmico de bordas (cauterizador) ou uma camada fina de termolina leitosa no verso",
      "Se o patch enrugar ao esfriar da prensa: Deixe a peça esfriar sob um peso plano (placa de mármore ou livro pesado) por 30 segundos",
      "Se o termocolante soltar na lavagem: Certifique-se de aplicar a prensa com pressão média/alta e temperatura correta por 15 segundos no direito e 10 segundos no avesso"
    ],
    "dicaArtrelados": "Para fazer patches redondos perfeitos sem ter máquina de corte a laser, use um cauterizador térmico de ponta fina (ou pirógrafo com ponta de agulha) para queimar o contorno externo de sarja sintética: o calor sela as fibras na hora e o acabamento fica igualzinho ao industrial!",
    "voceSabia": "Durante as missões Apollo da NASA nas décadas de 1960 e 1970, todos os patches dos astronautas eram confeccionados em Nylon Twill bordado com fios antichamas especiais de Nomex e fibra de vidro!",
    "practicalExercise": "Pegue um pedaço de sarja de poliamida para patches. Digitalize um escudo de 7 cm com uma borda satim de 4 mm. Borde com entretela firme. Recorte com tesoura rente ao satim e aplique um filme termocolante no verso com ferro de passar.",
    "quickSummary": "Tecido estruturado com textura diagonal para confecção de emblemas e patches; economiza pontos e aceita corte limpo.",
    "relatedTerms": [
      "Aplique de Tecido (Appliqué)",
      "In The Hoop (ITH)",
      "Borda Overloque (Merrow Border)",
      "Ponto Cheio (Satim)"
    ],
    "tags": [
      "n-042",
      "nylon twill",
      "patches",
      "emblemas",
      "brasoes",
      "termocolante",
      "sarja",
      "artrelados"
    ],
    "bibliographicReferences": [
      "EMBLEM PROFESSIONALS ASSOC. Industrial Patch Manufacturing & Twill Substrates. Official Industry Guide, 2021.",
      "MERROW MACHINE CO. The Art of the Emblem: Edge Finishing & Substrate Selection. Merrow Technical Series, 2020."
    ],
    "recommendedSettings": {
      "speedPPM": "750-850 PPM",
      "needleType": "75/11 ou 80/12 SES (Ponta Bola Leve)",
      "stabilizer": "Entretela Rasga-Fácil 60g ou Recortável 70g",
      "threadTension": "Padrão (3.5 a 4.0)",
      "density": "0,38 mm no satim de contorno"
    }
  },
  {
    "id": "needle-guard-guarda-agulha",
    "code": "N-043",
    "letter": "N",
    "term": "Guarda-Agulha e Defletor da Lançadeira (Hook Needle Guard)",
    "pronunciation": "ní-dəl gárd / guar-da a-gu-lha",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Componentes da Máquina",
    "summary": "Ressalto mecânico integrado ao corpo da lançadeira rotativa que atua como barreira física para impedir que a agulha flexione para trás e seja atingida pela ponta da lançadeira.",
    "origin": "Do inglês 'needle guard' (protetor de agulha), patente mecânica desenvolvida nas lançadeiras industriais automáticas de alta velocidade para prevenir quebras catastróficas de agulha.",
    "definition": "O Guarda-Agulha (Needle Guard) é uma projeção metálica de aço usinado com precisão milimétrica localizada na face frontal da lançadeira rotativa, logo antes da ponta de captura de laçada. Sua função vital é limitar a deflexão elástica da agulha durante a penetração em tecidos pesados, bonés e materiais rígidos. Quando a agulha sofre força lateral exercida pelo tecido ou pela tração da linha, ela encosta suavemente na superfície do guarda-agulha, que a mantém a uma distância de segurança constante de 0,05 mm a 0,10 mm da ponta da lançadeira, impedindo colisões diretas entre o aço da ponta e a haste da agulha.",
    "howItWorks": [
      "1. A agulha penetra em um tecido espesso (como a aba de um boné estruturado) e sofre deflexão elástica em direção à lançadeira.",
      "2. Ao descer até o ponto morto inferior, as costas da agulha entram em contato de apoio com a pista do guarda-agulha.",
      "3. O guarda-agulha estabiliza a haste da agulha e a impede de recuar mais para dentro da trajetória da ponta da lançadeira.",
      "4. A ponta da lançadeira passa rente à cava (scarf) da agulha sem tocá-la, capturando a laçada de linha com 100% de sucesso.",
      "5. A agulha sobe livremente e a máquina completa o ciclo de ponto em alta rotação sem choques mecânicos.",
      "6. A folga do guarda-agulha é ajustada pelo técnico durante a regulagem de ponto e timing da lançadeira."
    ],
    "beginnerExplanation": "É como um 'escudo protetor' de metal que fica do ladinho da lançadeira! Quando a agulha bate num tecido duro (como a frente dura de um boné) e tenta entortar para trás, esse ferrinho segura a agulha no lugar para a ponta afiada da lançadeira não bater de frente nela e quebrar tudo com um estalo!",
    "applications": [
      "Bordado de bonés estruturados, calçados e bolsas de couro espesso",
      "Operação contínua de bordadeiras em rotação máxima de 1.000 a 1.200 RPM",
      "Prevenção de quebra de agulhas e quebra da ponta de lançadeiras industriais",
      "Manutenção preventiva e alinhamento de ponto em máquinas multicabeçotes"
    ],
    "technicalDetails": "A distância de calibragem padrão entre o guarda-agulha e a haste traseira da agulha quando esta está no ponto mais baixo de deflexão é de 0,00 mm a 0,05 mm (leve contato de encosto sem deflexão forçada para a frente). Se o guarda-agulha estiver muito adiantado, ele empurra a agulha para fora do alcance da ponta da lançadeira gerando pontos pulados.",
    "commonErrors": [
      "❌ Lançadeira desregulada com guarda-agulha muito recuado, permitindo que a agulha flexione e quebre a ponta da lançadeira",
      "❌ Guarda-agulha empurrando a agulha excessivamente para a frente, provocando desgaste prematuro na lâmina e barulho metálico",
      "❌ Usar agulhas de cabo redondo incorretas ou colocadas ao contrário (cava para o lado errado), colidindo com o guarda-agulha",
      "❌ Não verificar marcas de impacto no guarda-agulha após quebras violentas de agulha"
    ],
    "troubleshootingTips": [
      "Se a máquina fizer um barulho de 'clique metálico' a cada descida da agulha: Verifique se a agulha está raspando com força no guarda-agulha e reajuste a folga",
      "Se houver pontos pulados apenas em tecidos grossos: Verifique se a agulha está fletindo para longe da lançadeira por falta de apoio do guarda-agulha",
      "Se a ponta da lançadeira quebrar: Substitua a lançadeira e calibre o guarda-agulha rigorosamente com calibrador de lâminas de 0,05 mm"
    ],
    "dicaArtrelados": "Ao trocar uma agulha que quebrou em um tecido pesado, gire o volante na mão bem devagarzinho para ver a agulha passar pela lançadeira com uma luz forte: a agulha deve passar quase encostando no ferrinho de proteção sem bater!",
    "voceSabia": "Em bordadeiras industriais de alta velocidade, a agulha atinge o tecido a uma velocidade linear de mais de 15 km/h e sofre forças de impacto equivalentes a mais de 20 kg de pressão concentrada em uma área menor que 1 milímetro!",
    "practicalExercise": "Com a máquina desligada e a chapa de agulha retirada, gire o volante manualmente até a agulha atingir a posição mais baixa ao lado da lançadeira. Empurre suavemente a agulha com o dedo para trás e observe como o guarda-agulha impede que ela encoste na ponta da lançadeira.",
    "quickSummary": "Protetor metálico na lançadeira que apoia a agulha em materiais grossos, evitando choques e quebras de agulha.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Deflexão da Agulha",
      "Cava da Agulha (Scarf)",
      "Ponto Pulado (Skipped Stitch)"
    ],
    "tags": [
      "n-043",
      "guarda-agulha",
      "needle guard",
      "lancadeira",
      "timing",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HIROSE HOOK MFG. Timing, Needle Clearance & Needle Guard Calibration Guide. Technical Manual, 2021.",
      "KOBAN HOOKS. Engineering Specifications for High-Speed Rotary Hooks. Industrial Bulletin, 2020."
    ]
  },
  {
    "id": "nivelamento-de-cor-mapeamento-digital",
    "code": "N-044",
    "letter": "N",
    "term": "Nivelamento de Cor no Mapeamento Digital (Palette Gamut & Thread Matching)",
    "pronunciation": "ni-ve-la-men-to de cor no ma-pe-a-men-to di-gi-tal",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Softwares & Formatos",
    "summary": "Calibração colorimétrica digital entre o monitor RGB do computador e as paletas reais de linhas de bordar (Madeira, Polyneon, Isacord, Lumina) para garantir fidelidade de tons entre a tela e o bordado físico.",
    "origin": "Do latim 'color' (cor) e do inglês 'gamut mapping' (mapeamento de gama de cores), desenvolvido na engenharia de computação gráfica da CIE (Comissão Internacional de Iluminação) desde 1931.",
    "definition": "O Nivelamento de Cor no Mapeamento Digital é o procedimento técnico executado no software de digitalização para associar cada objeto vetorial da matriz à referência exata do código de linha do fabricante utilizado no ateliê. Como os monitores emitem luz através do espaço aditivo RGB e as linhas refletem luz através de pigmentos físicos com brilho trilobal, existe uma diferença natural de percepção ótica (Gamut Mismatch). Ao carregar as tabelas digitais oficiais dos fabricantes (como Polyneon, Lumina ou Isacord) e calibrar a exibição da tela, o programador visualiza na simulação 3D o tom real mais próximo que a máquina irá costurar no tecido.",
    "howItWorks": [
      "1. O programador seleciona a marca de linha padrão do seu ateliê no menu de paletas do software (ex: Madeira Polyneon 40).",
      "2. Ao colorir as formas geométricas, escolhe os códigos numéricos reais de catálogo (ex: Madeira 1801 - Branco, Madeira 1988 - Azul Marinho).",
      "3. O software converte as coordenadas RGB da imagem original para a cor de fio mais próxima usando o algoritmo de cálculo de distância de cor Delta E (CIE Lab).",
      "4. A folha de aprovação do cliente (Approval Sheet / Color Film) é impressa com a lista exata dos códigos de cones que devem ser colocados na máquina.",
      "5. O operador abastece as agulhas da máquina exatamente de acordo com os números da folha de produção."
    ],
    "beginnerExplanation": "É o jeito certo de escolher as cores no computador para que a cor que você vê na tela fique igualzinha à linha de verdade que vai na máquina! Em vez de escolher um 'azul qualquer' na paleta do programa, você seleciona a marca e o número certinho do cone de linha que você tem na prateleira do seu ateliê. Assim, o cliente aprova o desenho no computador e não tem surpresa nenhuma na hora que a toalha fica pronta!",
    "applications": [
      "Aprovação de protótipos digitais de logomarcas corporativas com manuais de identidade visual rigorosos",
      "Padronização de receitas de cores em ateliês com múltiplos operadores e máquinas",
      "Geração automática de folhas de especificação de produção (Production Worksheet)",
      "Conversão precisa de artes enviadas por clientes em formato CorelDraw/Illustrator para linhas de bordar"
    ],
    "technicalDetails": "O olho humano detecta variações de cor quando a diferença cromática (Delta E) é superior a 1,0 a 2,0. Os motores de cor dos softwares líderes (Wilcom TrueSizer, Pulse, Embird Color Genius) calculam o espaço de cor Lab tridimensional (L=Luminosidade, a=Eixo Verde-Vermelho, b=Eixo Azul-Amarelo) para encontrar a linha do catálogo físico com o menor Delta E possível em relação ao vetor original.",
    "commonErrors": [
      "❌ Escolher cores genéricas aleatórias na tela sem vincular a códigos reais de cones, gerando divergências com o cliente",
      "❌ Confiar na exibição de telas de celulares ou monitores sem calibração de brilho e contraste",
      "❌ Trocar a marca da linha na produção física sem atualizar a tabela no software, alterando tons de pele ou logos oficiais",
      "❌ Não imprimir a folha de ordem de cores para o operador, levando a trocas erradas de cones nas cabeças da máquina"
    ],
    "troubleshootingTips": [
      "Se o cliente reclamar que a cor física ficou diferente da tela: Mostre a cartela física de fios sob iluminação natural de 5000K (Luz D50) para comprovar a fidelidade do código",
      "Se o software não encontrar uma cor parecida: Adicione paletas de outros fabricantes ou faça mesclagem de fios com tatami degradê",
      "Se a cor na máquina não bater com a simulação: Verifique se o formato exportado (como DST) não perdeu a informação de cor e forneça a folha de montagem impressa"
    ],
    "dicaArtrelados": "Sempre envie a simulação digital para aprovação do cliente em formato PDF com a tabela de códigos de linhas escrita no rodapé. Quando o cliente aprova o PDF, ele aprova também os códigos oficiais dos fios, protegendo o seu ateliê contra retrabalhos!",
    "voceSabia": "A empresa alemã Madeira Threads possui um dos maiores bancos de dados colorimétricos têxteis do planeta, com mais de 500 tons catalogados em poliéster, viscose e algodão, cada um medido por espectrofotômetros de altíssima precisão em cabines de luz controlada!",
    "practicalExercise": "Abra seu programa de bordados e selecione a paleta da sua marca favorita de linhas. Crie um círculo e use a ferramenta 'Conta-Gotas' para capturar a cor de uma foto real. Veja qual código numérico de linha o programa sugere automaticamente.",
    "quickSummary": "Calibração e mapeamento das cores da tela para os números reais de cones de linha, garantindo fidelidade visual e aprovação do cliente.",
    "relatedTerms": [
      "Numeração Pantone e Equivalência de Fios",
      "Linha de Poliéster Trilobal",
      "Softwares de Digitalização",
      "Folha de Produção"
    ],
    "tags": [
      "n-044",
      "mapeamento de cores",
      "paleta de linhas",
      "delta e",
      "gamut",
      "madeira",
      "isacord",
      "artrelados"
    ],
    "bibliographicReferences": [
      "CIE (Commission Internationale de l'Éclairage). Colorimetry: Technical Report CIE 015:2018. 4th Edition, Vienna, 2018.",
      "MADEIRA GARNGESELLSCHAFT. Color Management & Digital Thread Charts for Embroidery. Technical Bulletin, 2021."
    ]
  },
  {
    "id": "no-escondido-no-avesso-underlay-lock",
    "code": "N-045",
    "letter": "N",
    "term": "Nó Escondido no Avesso e Sob a Trama (Underlay Locking Stitch)",
    "pronunciation": "nó es-con-di-do no a-ves-so / an-der-lei ló-king",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "summary": "Técnica de programação em que os nós de entrada e arremate final são executados por baixo da camada de suporte (underlay) ou sob a coluna de satim, ficando 100% invisíveis tanto no direito quanto no avesso da peça.",
    "origin": "Do inglês 'underlay' (camada de suporte inferior) + 'locking' (travamento), técnica de acabamento de alta costura adaptada à digitalização de matrizes de luxo na década de 1990.",
    "definition": "O Nó Escondido sob a Trama (Underlay Locking Stitch) é uma estratégia avançada de digitalização onde os pontos de amarração inicial (tie-in) e final (tie-off) são estrategicamente posicionados no centro geométrico do objeto, embutidos por baixo dos pontos de suporte preliminares. Diferentemente dos nós convencionais que deixam pequenos nódulos visíveis nas bordas ou fiapos salientes no verso, o nó escondido é completamente coberto pela densa camada superficial de ponto cheio ou tatami, garantindo um toque suave e uma estética limpa de alta costura.",
    "howItWorks": [
      "1. Ao iniciar um novo objeto, o software não faz o nó na borda externa do desenho.",
      "2. A agulha penetra no centro exato da área que será coberta e executa 3 micro-pontos de amarração de 0,6 mm.",
      "3. Em seguida, a máquina borda a subcamada de suporte (Underlay em zigue-zague ou tatami leve) por cima do nózinho inicial.",
      "4. A cobertura final em satim ou tatami passa por cima de tudo, selando os pontos.",
      "5. Ao finalizar o objeto, a agulha dá 2 pontos de retorno para o centro do desenho e executa o nó final antes do corte, ficando oculto sob a própria coluna.",
      "6. O avesso da peça pronta fica liso, sem fiapos ásperos ou bolinhas de linha."
    ],
    "beginnerExplanation": "É o segredo dos bordados mais caros e perfeitos do mundo! Em vez da máquina dar o nózinho de arremate na ponta da letra (onde todo mundo vê e pode pinicar a pele), ela dá o nózinho bem no meinho escondidinho e cobre com os pontos bonitos por cima. O bordado fica tão limpo que parece que foi pintado no tecido, tanto na frente quanto no avesso!",
    "applications": [
      "Enxovais de bebê de alto padrão, pijamas e roupas íntimas (onde nós aparentes podem irritar a pele sensível)",
      "Bordados em tecidos transparentes ou semitransparentes (organza, linho fino, cambraia)",
      "Monogramas em camisas sociais masculinas e colarinhos de luxo",
      "Bordados em toalhas de mesa nobres e guardanapos finos onde o avesso fica exposto"
    ],
    "technicalDetails": "O nó sob a trama utiliza uma sequência de micro-pontos com deslocamento angular de 90° em relação à direção da cobertura final. Isso garante que a tensão exercida pela tração da linha de cobertura ajude a prensar o nó contra a entretela, aumentando a resistência à tração em mais de 40% em comparação a nós de borda externa.",
    "commonErrors": [
      "❌ Posicionar o nó de travamento fora dos limites do underlay, fazendo com que a ponta da cauda de linha escape para fora do contorno",
      "❌ Fazer nós com pontos muito longos (acima de 1,2 mm), criando relevos ou 'calombos' visíveis sob o satim liso",
      "❌ Desativar o nó sob a trama em tecidos elásticos, fazendo o bordado desmanchar após lavagem",
      "❌ Cortar o fio rente com tesoura no avesso sem verificar se a amarração foi executada no centro"
    ],
    "troubleshootingTips": [
      "Se o nó inicial aparecer como um pontinho escuro por baixo de linha clara: Programe o nó para ser executado 2 mm mais para o centro do objeto",
      "Se a linha soltar após o corte do trimer: Aumente o número de micro-pontos do nó escondido de 3 para 4 pontos com amplitude de 0,7 mm",
      "Se o avesso estiver áspero: Ative a função 'Invisi-Lock' ou 'Inside Underlay Lock' nas propriedades de acabamento do software"
    ],
    "dicaArtrelados": "Para toalhinhas de lavabo e fraldas de bebê, ative sempre o nó escondido sob o underlay no Wilcom ou Embird: o avesso fica tão macio que você nem precisa colocar termocolante protetor de avesso para proteger a pele do bebê!",
    "voceSabia": "Em camisarias sob medida na famosa rua Savile Row em Londres, o teste de qualidade dos monogramas bordados nos punhos das camisas dos lordes ingleses exige que o avesso seja tão limpo e imperceptível quanto o direito da peça!",
    "practicalExercise": "Digitalize uma letra 'B' com nó de borda comum e outra letra 'B' com o nó escondido sob o underlay. Borde ambas no mesmo tecido. Vire o avesso e sinta com a ponta dos dedos a diferença de textura e limpeza visual entre as duas.",
    "quickSummary": "Nó de amarração executado no centro e coberto pelos pontos principais; deixa o direito e o avesso limpos e sem fiapos.",
    "relatedTerms": [
      "Nó de Entrada / Nó Inicial",
      "Nó de Saída / Arremate Final",
      "Subcamada / Ponto de Suporte (Underlay)",
      "Enxovais de Bebê"
    ],
    "tags": [
      "n-045",
      "no escondido",
      "underlay lock",
      "invisivel",
      "avesso perfeito",
      "enxoval",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Professional Digitizing & Advanced Lock Stitch Placement. Wilcom Training Manual, 2021.",
      "SAVILE ROW BESPOKE TAILORS. Standards of Monogramming & Finishing in Fine Tailoring. London, 2019."
    ]
  },
  {
    "id": "needle-bar-driver-biela-de-agulha",
    "code": "N-046",
    "letter": "N",
    "term": "Biela e Eixo de Acionamento da Barra de Agulha (Needle Bar Reciprocator)",
    "pronunciation": "bi-e-la e ei-xo de a-cio-na-men-to / ní-dəl bar ri-si-pro-quei-tor",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Componentes da Máquina",
    "summary": "Mecanismo interno de alta precisão que converte o movimento rotativo do eixo principal no movimento linear alternado vertical da barra de agulha em velocidades de até 1.200 RPM.",
    "origin": "Do francês 'bielle' (haste articulada), componente fundamental das máquinas a vapor e motores de combustão do século XIX, adaptado com ligas ultraleves para os cabeçotes de bordadeiras modernas.",
    "definition": "O Mecanismo de Biela e Acoplamento da Barra de Agulha (Needle Bar Driver / Reciprocator) é o conjunto cinemático mecânico responsável por transmitir a força motriz do eixo superior da bordadeira para a barra de agulha individual selecionada no cabeçote. Fabricado em aço forjado ou compósito de polímero de alta resistência reforçado com fibra de carbono (para atuar como fusível mecânico de proteção), o mecanismo desliza em guias temperadas e conecta o pino da barra de agulha ao excêntrico principal, garantindo um curso vertical milimétrico rigorosamente constante durante cada ciclo de penetração e subida.",
    "howItWorks": [
      "1. O servomotor principal gira o eixo superior da máquina a 800-1.000 RPM.",
      "2. O excêntrico rotativo do eixo movimenta a biela articulada para cima e para baixo.",
      "3. O reciprocador (bloco condutor com canaleta de engate) recebe o movimento vertical contínuo.",
      "4. Durante a troca de cor, o cabeçote se desloca lateralmente e alinha a agulha escolhida com o reciprocador.",
      "5. O pino de trava da barra de agulha se engata no canal do reciprocador, acionando a descida da agulha.",
      "6. Se houver uma colisão violenta com o bastidor ou chapa, o reciprocador atua como protetor, desacoplando ou rompendo seu elo fusível para proteger o motor e o eixo principal."
    ],
    "beginnerExplanation": "É o 'bracinho mecânico' que fica escondido dentro da cabeça da máquina e faz a agulha subir e descer centenas de vezes por minuto com força e precisão! Ele é muito inteligente: quando você troca de cor, ele desengata de uma agulha e engata na outra num piscar de olhos, e se a agulha bater forte no aro do bastidor por acidente, ele protege a máquina para não estragar as peças mais caras lá dentro.",
    "applications": [
      "Transmissão mecânica vertical nos cabeçotes industriais de bordado de 1 a 24 cabeças",
      "Proteção de sobrecarga mecânica em colisões de bastidor ou travamentos por nós na lançadeira",
      "Sincronização angular exata do ciclo de formação de laçada com o estica-fio e a lançadeira",
      "Manutenção e substituição preventiva em cabeçotes com ruído excessivo ou folgas no curso da agulha"
    ],
    "technicalDetails": "O curso vertical padrão da barra de agulha varia entre 35 mm e 38 mm nas máquinas de bordar modernas. A aceleração no ponto morto superior ultrapassa 150 m/s². A folga radial entre o reciprocador e a barra de agulha é calibrada em menos de 0,02 mm; folgas superiores a 0,05 mm causam vibração lateral, deflexão da agulha e quebra constante de linha.",
    "commonErrors": [
      "❌ Operar a máquina sem lubrificação periódica nos feltros do reciprocador e da barra de agulha, causando atrito seco e travamento",
      "❌ Usar graxas ou óleos viscosos de baixa qualidade que ressecam e viram uma pasta escura e pegajosa dentro do cabeçote",
      "❌ Bater o bastidor com força no cabeçote e tentar forçar a máquina a rodar sem checar se o reciprocador não desengatou",
      "❌ Montar o reciprocador fora do ponto de sincronismo angular (grau 100° do volante) durante trocas de peças"
    ],
    "troubleshootingTips": [
      "Se a barra de agulha não descer mesmo com a máquina girando: O reciprocador pode ter quebrado o pino fusível de proteção após uma colisão e precisa ser substituído",
      "Se o cabeçote estiver fazendo barulho excessivo de 'batida oca': Aplique 2 gotas de óleo de máquina de bordar na barra e nas guias do reciprocador",
      "Se a troca de cor travar no meio do caminho: Verifique se a barra de agulha está travada na posição superior correta (Ponto Morto Superior)"
    ],
    "dicaArtrelados": "A cada 40 horas de bordado (uma vez por semana em ateliês ativos), pingue uma gota de óleo fino próprio de máquina de bordar nas barras de agulhas e acione cada uma por 10 segundos: isso mantém o reciprocador lubrificado, reduz o barulho do cabeçote pela metade e aumenta a vida útil da sua bordadeira por décadas!",
    "voceSabia": "Em máquinas industriais japonesas modernas como Tajima e Barudan, os reciprocadores são fabricados com resinas plásticas de engenharia autolubrificantes desenvolvidas originalmente para a indústria aeroespacial, operando por milhares de horas sem exigir manutenção pesada!",
    "practicalExercise": "Com a máquina desligada, remova a tampa frontal plástica do cabeçote (se o manual permitir). Gire o volante na mão e observe como o reciprocador sobe e desce, engatando suavemente na barra de agulha selecionada. Veja a precisão do mecanismo.",
    "quickSummary": "Mecanismo cinemático que transforma rotação em movimento vertical da agulha; engata na troca de cor e protege contra colisões.",
    "relatedTerms": [
      "Barra de Agulha",
      "Painel de Comando",
      "Troca de Cor Automática",
      "Manutenção Preventiva"
    ],
    "tags": [
      "n-046",
      "reciprocator",
      "biela",
      "barra de agulha",
      "mecanica",
      "manutencao",
      "componentes",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL SERVICE. Head Mechanics & Needle Bar Reciprocator Maintenance Guide. Tajima Technical Publications, 2021.",
      "BARUDAN CO. Mechanical Assembly, Timing & Head Overhaul Procedures. Barudan Manuals, 2020."
    ]
  },
  {
    "id": "nylon-monofilamento-fio-de-bobina",
    "code": "N-047",
    "letter": "N",
    "term": "Nylon Monofilamento como Fio de Bobina (Invisible Bobbin Threading)",
    "pronunciation": "nai-lon mo-no-fi-la-men-to co-mo fio de bo-bi-na",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Agulhas & Fios",
    "summary": "Uso de fio de poliamida transparente de espessura ultrafina (calibre 0,08 a 0,10 mm) na caixa de bobina para peças dupla face, rendas richelieu e artigos transparentes onde a linha branca comum não pode aparecer no verso.",
    "origin": "Do grego 'monos' (único) + 'filum' (fio), adaptado da técnica de quilt livre para o bordado computadorizado de luxo e rendas nobres a partir dos anos 1990.",
    "definition": "O uso de Nylon Monofilamento como Fio de Bobina é uma técnica especializada em que a linha de bobina padrão (fio 60wt spun/filament poliéster branco ou preto) é substituída por um fio contínuo transparente de poliamida extremamente fino. Por ser totalmente incolor e translúcido, o fio inferior se camufla na cor do tecido de fundo ou assume a cor da linha superior. É indispensável na confecção de rendas autoportantes (Free Standing Lace - FSL), toalhas de mesa dupla face, xales transparentes de organza, véus de noiva e apliques onde ambos os lados do bordado ficam visíveis para o usuário final.",
    "howItWorks": [
      "1. A bobina metálica ou plástica é enchida com nylon monofilamento fino em velocidade moderada para não estirar o fio elástico.",
      "2. A caixa de bobina tem sua mola de tensão aliviada (cerca de 10 a 15 gramas-força no tensiômetro de bobina).",
      "3. Como o fio é liso e escorregadio, a bobina gira com mínimo atrito dentro do cesto da lançadeira.",
      "4. A máquina executa os pontos com a mesma cor de linha no topo ou cores variadas.",
      "5. No avesso da peça pronta, a laçada inferior fica 100% transparente, sem a presença da tradicional linha branca de bobina.",
      "6. Ao lavar ou passar a ferro, a peça mantém estabilidade e caimento suave."
    ],
    "beginnerExplanation": "É quando a gente coloca aquela 'linha invisível' transparente na canelinha de baixo da máquina em vez da linha branca de sempre! Isso é perfeito para fazer coisas que aparecem dos dois lados (como um pano de bandeja chique, um véu de noiva ou uma renda), porque aí o avesso do bordado não fica com aquela linha branca feia: ele fica transparente e combinando com tudo!",
    "applications": [
      "Bordado de rendas FSL (Free Standing Lace) e brincos de renda solúvel",
      "Toalhas de banho e xales de festa em que o avesso fica exposto",
      "Bordados em tecidos transparentes como voil, tule, seda pura e organza",
      "Acolchoamento e quilt decorativo 'in-the-hoop' com fundo colorido"
    ],
    "technicalDetails": "O monofilamento para bobina deve ter diâmetro entre 0,08 mm e 0,11 mm (calibre 100 denier ou inferior). Fios mais grossos (como linha de pesca de 0,20 mm) são proibidos, pois travam a mola da caixa de bobina e cortam a lançadeira. A elasticidade do nylon monofilamento exige que o enrolamento da bobina seja feito com tensão quase nula para evitar deformação da canelinha plástica por contração elástica.",
    "commonErrors": [
      "❌ Encher a bobina com linha de monofilamento sob alta tensão, empenando ou quebrando as paredes da carretilha de plástico",
      "❌ Usar linha de pesca grossa na bobina, que arranha a caixa de bobina e quebra a agulha",
      "❌ Aplicar ferro de passar muito quente (acima de 120°C) diretamente sobre o monofilamento no avesso, derretendo a linha",
      "❌ Não afrouxar o parafuso da caixa de bobina, gerando tensão excessiva que deforma o tecido"
    ],
    "troubleshootingTips": [
      "Se a linha monofilamento enrolar no eixo da bobinadeira: Coloque uma redinha elástica no carretel e encha a canelinha em velocidade lenta",
      "Se o avesso estiver repuxando e enrugando: Solte o parafuso da mola da caixa de bobina em 1/4 de volta (sentido anti-horário)",
      "Se a linha superior vier toda para baixo: Aumente ligeiramente a tensão da linha superior no disco de tensão"
    ],
    "dicaArtrelados": "Tenha uma caixa de bobina reserva identificada com uma fitinha adesiva colorida para usar exclusivamente com fio invisível: assim você regula a tensão soltinha nela uma única vez e nunca desregula a sua caixinha de bobina principal do dia a dia!",
    "voceSabia": "Na confecção de vestidos de noiva de alta costura em Paris, os ateliês de bordado utilizam fios monofilamentos de poliamida com partículas refletoras de luz que imitam o brilho suave das teias de aranha sob a luz das velas!",
    "practicalExercise": "Encha uma bobina com fio monofilamento transparente e coloque na máquina. Borde um desenho floral de 5 cm em um pedaço de organza ou tule com entretela solúvel. Dissolva a entretela na água e veja como o avesso fica limpo e com acabamento de alta costura.",
    "quickSummary": "Uso de fio invisível na canelinha para peças dupla face, rendas e tecidos transparentes sem linha branca no avesso.",
    "relatedTerms": [
      "Nylon Monofilamento / Fio Invisível",
      "Caixa de Bobina",
      "Filme Hidrossolúvel",
      "Renda Guipir / FSL"
    ],
    "tags": [
      "n-047",
      "monofilamento",
      "bobina invisivel",
      "fsl",
      "rendas",
      "dupla face",
      "enxoval",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. MonoPoly Invisible Thread & Bobbin Applications Guide. Technical Bulletin, 2021.",
      "PARIS HAUTE COUTURE SYNDICATE. Technical Embroidery Methods for Transparent Textiles. Paris, 2019."
    ]
  },
  {
    "id": "nivelamento-de-densidade-tatami-gradiente",
    "code": "N-048",
    "letter": "N",
    "term": "Nivelamento de Densidade Tatami em Gradiente (Gradient Density / Shading)",
    "pronunciation": "ni-ve-la-men-to de den-si-da-de ta-ta-mi em gra-di-en-te",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "summary": "Técnica de programação que varia progressivamente o espaçamento entre as linhas de ponto tatami para criar transições suaves de cor, efeito de luz, sombras tridimensionais e degradês hiper-realistas.",
    "origin": "Do francês 'dégradé' (diminuição gradual de tom) e do japonês 'tatami' (esteira tecida), desenvolvido na digitalização artística moderna para reproduzir pinturas e fotografias no bordado.",
    "definition": "O Nivelamento de Densidade Tatami em Gradiente (ou Efeito Degradê / Color Blending) é uma técnica sofisticada de digitalização em que duas ou mais camadas de ponto tatami de cores diferentes são sobrepostas com densidades variáveis e inversamente proporcionais. Enquanto a primeira cor começa densa (0,35 mm) e vai se abrindo gradativamente até ficar rala (1,5 mm a 2,5 mm), a segunda cor faz o caminho inverso, penetrando nos espaços livres da primeira. O resultado ótico é uma fusão cromática contínua e suave que elimina linhas duras de divisão, permitindo criar pelagens de animais, pétalas de flores, reflexos metálicos e céus esfumados.",
    "howItWorks": [
      "1. O programador divide a área do desenho em duas ou mais camadas com o mesmo contorno vetorial.",
      "2. Na primeira camada (ex: Azul Escuro), aplica o perfil de gradiente linear ou curvo com densidade inicial de 0,38 mm e final de 1,8 mm.",
      "3. Na segunda camada (ex: Azul Claro), aplica o gradiente na direção oposta com a mesma inclinação de ângulo de ponto.",
      "4. As penetrações de agulha das duas cores se intercalam harmoniosamente na zona de transição intermediária.",
      "5. A máquina borda primeiro a cor de fundo e depois a cor de sobreposição.",
      "6. A mistura ótica dos filamentos brilhantes aos olhos do observador cria a ilusão perfeita de um degradê contínuo."
    ],
    "beginnerExplanation": "É a técnica que faz o bordado parecer uma pintura realista de aquarela! Em vez de ter uma divisão dura entre uma cor e outra, o programa faz os pontos de uma cor irem se espalhando e ficando mais ralinhos enquanto a outra cor vai entrando por cima. As duas cores se misturam e criam aquele efeito lindo de pôr do sol, bochecha rosada ou pelo de cachorrinho!",
    "applications": [
      "Bordados fotográficos hiper-realistas (PhotoStitch) de rostos e animais de estimação",
      "Pétalas de flores com transição suave de amarelo para laranja ou vermelho",
      "Efeitos de metalização dourada e prateada com pontos de luz (brilho e sombra)",
      "Logotipos modernos com identidade visual corporativa em degradê vetorial"
    ],
    "technicalDetails": "Para evitar o efeito 'moiré' (padrões de interferência ótica desagradáveis), ambas as camadas de tatami em gradiente devem compartilhar rigorosamente o mesmo ângulo de inclinação de ponto (ex: 45°) ou ter uma defasagem mínima de 2° a 3°. O deslocamento de padrão de tatami (Tatami Offset Fraction) deve ser calibrado em 0,25 ou 0,33 para garantir a dispersão uniforme dos pontos.",
    "commonErrors": [
      "❌ Sobrepor duas camadas com densidade normal fechada (0,38 mm em ambas), criando uma placa de linha grossa que quebra a agulha",
      "❌ Usar ângulos de ponto perpendiculares (ex: uma camada a 0° e outra a 90°), criando um efeito quadriculado em vez de degradê",
      "❌ Não usar compensação de repuxo adequada, fazendo o gradiente encolher mais na parte densa que na parte rala",
      "❌ Deixar a transição muito abrupta em uma faixa estreita (menos de 5 mm), onde o olho não percebe o efeito de fusão"
    ],
    "troubleshootingTips": [
      "Se a transição parecer listrada e áspera: Aumente a distância do gradiente no software e ative a distribuição aleatória de pontos (Random Pitch)",
      "Se o tecido enrugar sob o degradê: Reduza a densidade máxima da camada superior para 0,45 mm e use entretela recortável",
      "Se a cor de baixo não aparecer: Aumente o espaçamento final da camada superior para 2,2 mm para deixar a cor de base respirar"
    ],
    "dicaArtrelados": "Para criar um degradê de folha ou flor perfeito, use sempre 3 tons da mesma família (um escuro para a sombra, um médio para o corpo e um claro para a luz). A combinação de três camadas com gradiente aberto fica tão realista que parece bordada à mão!",
    "voceSabia": "A técnica de fusão de pontos por gradiente foi inspirada no 'Ponto Pintura' (Silk Shading / Needle Painting) criado na China imperial durante a dinastia Song (século X), onde artesãos usavam fios de seda divididos em até 16 microfilamentos para pintar retratos da nobreza!",
    "practicalExercise": "No seu software, desenhe um retângulo de 10x4 cm. Crie duas camadas iguais: uma vermelha e uma amarela. Aplique a ferramenta 'Gradiente de Densidade' com direções opostas e mesmo ângulo de 45°. Borde e veja o efeito de cor laranja suave que se forma no meio.",
    "quickSummary": "Variação progressiva do espaçamento do tatami para criar degradês perfeitos, sombras e efeitos fotográficos.",
    "relatedTerms": [
      "Ponto Tatami",
      "Ângulo de Ponto",
      "Densidade de Ponto",
      "Mapeamento de Cores"
    ],
    "tags": [
      "n-048",
      "tatami gradiente",
      "degrade",
      "color blending",
      "sombreamento",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. Mastering Color Blending & Creative Accordion Stitching. Wilcom User Guide, 2021.",
      "KEMP, B. The Art of Needle Painting: Shading and Realism in Machine Embroidery. Search Press, 2019."
    ]
  },
  {
    "id": "no-de-lacada-ponto-corrente",
    "code": "N-049",
    "letter": "N",
    "term": "Nó de Laçada do Ponto Corrente Eletrônico (Chainstitch Loop Formation)",
    "pronunciation": "nó de la-ça-da do pon-to cor-ren-te",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Pontos Básicos & Decorativos",
    "summary": "Formação mecânica de pontos decorativos contínuos através do entrelaçamento de uma única linha superior em laçadas sucessivas em máquinas especiais de bordado Chenille e Ponto Corrente.",
    "origin": "Do francês 'point de chaînette' (ponto de correntinha), uma das técnicas de bordado manual mais antigas da história, automatizada nas máquinas Cornely e Tajima Chenille no final do século XIX.",
    "definition": "O Nó de Laçada do Ponto Corrente Eletrônico (Chainstitch) é o método cinemático de formação de costura executado por máquinas de bordar especiais do tipo Chenille/Cornely que utilizam uma agulha com gancho na ponta (tipo crochê) e um laçador rotativo inferior (looper), sem a presença de caixa de bobina tradicional. A agulha desce, pesca a linha alimentada por baixo e puxa uma laçada para cima; no ponto seguinte, a nova laçada é puxada por dentro da laçada anterior, criando uma corrente contínua e flexível em relevo na superfície do tecido.",
    "howItWorks": [
      "1. A agulha de gancho (Hook Needle) desce através do tecido.",
      "2. O laçador giratório inferior (Nipple/Looper) enrola o fio de lã ou acrílico grosso ao redor da ponta da agulha.",
      "3. A agulha sobe girando no seu próprio eixo e traz a laçada de fio para a superfície.",
      "4. O pantógrafo se desloca para a próxima coordenada.",
      "5. A agulha desce novamente e pesca uma nova laçada, passando-a exatamente por dentro da laçada que ficou retida no tecido.",
      "6. A sequência ininterrupta cria uma textura tridimensional flexível que acompanha perfeitamente a elasticidade de jaquetas e agasalhos de moletom."
    ],
    "beginnerExplanation": "É aquele bordado clássico que parece um crochê ou uma correntinha de elos entrelaçados em relevo que a gente vê nas jaquetas de times de beisebol e basquete! Em vez de usar linha de bobina por baixo, a agulha tem um ganchinho na ponta que pesca a linha e vai fazendo uma correntinha fofa e elástica por cima do tecido.",
    "applications": [
      "Bordados em jaquetas universitárias (Letterman / Varsity Jackets) e moletons pesados",
      "Contornos decorativos de tapetes, flâmulas e bandeiras cerimoniais",
      "Customização de moda retrô, peças vintage e marcas de streetwear de luxo",
      "Bordados em tecidos de malha grossa que exigem alta elasticidade na costura"
    ],
    "technicalDetails": "As máquinas de ponto corrente operam com rotação angular controlada do cabeçote (mecanismo de rotação de 360° da agulha em sincronia com o vetor de movimento do pantógrafo). Utilizam fios espessos de lã, acrílico ou poliéster texturizado (calibre 2/28 a 2/32 Nm) com velocidade média de 600 a 800 RPM e curso de calcador elevado de 3,0 mm.",
    "commonErrors": [
      "❌ Rompimento de um único ponto na extremidade sem nó de arremate final, fazendo todo o bordado desmanchar como um zíper aberto",
      "❌ Tentar executar ponto corrente em máquinas de bordar convencionais sem cabeçote Chenille específico",
      "❌ Usar fios finos de bordar 40wt no cabeçote de ponto corrente, resultando em correntes frouxas sem corpo",
      "❌ Não calibrar a altura do calcador (Nipple Height), esmagando a laçada e prendendo a agulha"
    ],
    "troubleshootingTips": [
      "Se o ponto corrente desmanchar na ponta: Programe 3 pontos de sobreposição no final e aplique uma gota de selador têxtil no verso",
      "Se a máquina pular a laçada: Ajuste a sincronização angular do laçador inferior com a ranhura da agulha de gancho",
      "Se o tecido for puxado para baixo: Aumente a pressão do calcador circular e utilize entretela recortável encorpada"
    ],
    "dicaArtrelados": "Para proteger o ponto corrente e o chenille contra desfiamento após a lavagem, passe sempre uma entretela termocolante protetora de malha macia no verso da jaqueta com a prensa térmica: isso sela todos os nós e garante durabilidade eterna!",
    "voceSabia": "As máquinas originais Cornely de ponto corrente foram criadas na França em 1865 pelo inventor Antoine Bonnaz e eram operadas manualmente através de uma manivela giratória embaixo da mesa que o bordador girava enquanto guiava o tecido!",
    "practicalExercise": "Examine uma jaqueta universitária com letras de ponto corrente ou chenille. Puxe suavemente o relevo dos elos e observe como as laçadas são conectadas umas dentro das outras formando a corrente.",
    "quickSummary": "Ponto em formato de corrente entrelaçada feito com agulha de gancho; clássico em jaquetas esportivas universitárias e chenille.",
    "relatedTerms": [
      "Ponto Cheio (Satim)",
      "Ponto de Haste",
      "Ponto Decorativo",
      "Enxovais e Moda"
    ],
    "tags": [
      "n-049",
      "ponto corrente",
      "chainstitch",
      "chenille",
      "jaqueta universitaria",
      "cornely",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA MACHINERY. TMCE-Series Multi-Color Chenille & Chainstitch Manual. Tajima Technical Papers, 2021.",
      "BONNAZ, A. Mécanique Appliquée: Le Point de Chaînette et les Machines Cornely. Paris Historical Archives, 1875."
    ]
  },
  {
    "id": "needle-threader-passador-automatico",
    "code": "N-050",
    "letter": "N",
    "term": "Passador Automático de Linha na Agulha (Semi-Automatic Needle Threader)",
    "pronunciation": "ní-dəl tré-der / pas-sa-dor au-to-má-ti-co de li-nha",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Componentes da Máquina",
    "summary": "Dispositivo mecânico com micro-gancho flexível que atravessa o olho da agulha de trás para frente para laçar a linha e puxá-la automaticamente, poupando a visão e o tempo do operador.",
    "origin": "Do inglês 'needle threader' (enfiador de agulha), patenteado no início do século XX e incorporado nos cabeçotes modernos domésticos e industriais pela Brother e Janome nos anos 1990.",
    "definition": "O Passador Automático de Linha (Needle Threader) é um mecanismo articulado instalado na barra do cabeçote da bordadeira projetado para enfiar a linha superior através do minúsculo orifício do olho da agulha sem esforço manual. Ao abaixar a alavanca ou pressionar o botão eletrônico de enfiar linha, um garfo micrométrico com um gancho de arame de espessura inferior a 0,15 mm entra pelo olho da agulha, captura a linha posicionada pelo operador no guia e a recolhe de volta, formando uma laçada na parte traseira da agulha pronta para ser puxada.",
    "howItWorks": [
      "1. A agulha deve estar posicionada rigorosamente no ponto mais alto (Ponto Morto Superior / PMS).",
      "2. O operador puxa a linha pelo último guia frontal e a prende na canaleta de corte do passador.",
      "3. Abaixa-se a alavanca lateral do passador com movimento firme e suave.",
      "4. O mecanismo gira e insere o micro-araminho por dentro do olho da agulha.",
      "5. A linha é engatada no ganchinho.",
      "6. Ao soltar a alavanca, a mola interna recolhe o garfo puxando uma laçada de linha para o lado de trás da agulha.",
      "7. O operador puxa a ponta livre da laçada por baixo do calcador e inicia o trabalho."
    ],
    "beginnerExplanation": "É aquele botãozinho ou alavanca maravilhosa da máquina que coloca a linha no buraco da agulha para você num piscar de olhos! Você não precisa ficar forçando a vista, chupando a ponta da linha ou tentando acertar o buraquinho: é só passar a linha na guia, apertar a alavanca e a máquina puxa a linha para trás da agulha sozinha!",
    "applications": [
      "Troca rápida de cores de linhas em máquinas domésticas e profissionais de uma agulha",
      "Redução da fadiga visual e aumento da produtividade do operador no ateliê",
      "Passagem ágil de linhas finas e escuras em ambientes de iluminação moderada",
      "Treinamento de iniciantes e operação ergonômica da máquina de bordar"
    ],
    "technicalDetails": "O gancho do passador é confeccionado em arame de aço mola temperado com espessura entre 0,10 mm e 0,14 mm. Ele é compatível com agulhas de calibre 75/11 a 90/14. Em agulhas ultrafinas (como 65/9) ou agulhas especiais com formato de olho modificado (como agulhas asa de bordar), o uso do passador automático deve ser evitado para não entortar o micro-gancho.",
    "commonErrors": [
      "❌ Acionar a alavanca do passador com a agulha abaixada ou fora de posição, entortando ou quebrando o gancho de arame",
      "❌ Tentar usar o passador automático com agulhas muito finas (60/8 ou 65/9), cujo olho é menor que a espessura do gancho",
      "❌ Puxar a alavanca com força bruta ou movimentos bruscos, descalibrando o alinhamento de fábrica do garfo",
      "❌ Usar o passador com agulha dupla ou agulhas com cavas invertidas"
    ],
    "troubleshootingTips": [
      "Se o passador não entrar no olho da agulha: Gire o volante na mão até a agulha ficar na altura exata ou ajuste a agulha até o topo da barra",
      "Se o ganchinho estiver torto: Use uma pinça de precisão para realinhar suavemente o araminho central com o furo da agulha",
      "Se o araminho quebrou: Adquira a pecinha de reposição (conjunto do garfo passador) e troque soltando um único parafuso"
    ],
    "dicaArtrelados": "Para o passador automático nunca quebrar no seu ateliê, crie o hábito de apertar o botão de 'Posição da Agulha' (subir/descer) no painel antes de abaixar a alavanca: assim a agulha estará SEMPRE na altura matemática perfeita!",
    "voceSabia": "As primeiras máquinas computadorizadas com passador 100% eletrônico (acionado por botão no painel sem alavanca manual) foram lançadas pela Brother em 2004 e continham um motor de passo micrométrico exclusivo apenas para essa função!",
    "practicalExercise": "Pratique passar a linha três vezes usando o passador automático da sua máquina. Observe atentamente com uma boa luz como o micro-gancho entra pelo olho da agulha e puxa a laçada para trás.",
    "quickSummary": "Dispositivo mecânico com micro-gancho que enfia a linha no olho da agulha com rapidez e sem esforço visual.",
    "relatedTerms": [
      "Agulha de Bordar",
      "Olho da Agulha",
      "Passagem de Linha",
      "Painel de Comando"
    ],
    "tags": [
      "n-050",
      "passador automatico",
      "needle threader",
      "enfiador de linha",
      "ergonomia",
      "componentes",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER INDUSTRIES. Semi-Automatic & Fully Automatic Needle Threader Mechanics. Technical Service Manual, 2021.",
      "JANOME SEWING MACHINE CO. Maintenance and Alignment of Automatic Threading Units. Janome Bulletin, 2020."
    ]
  },
  {
    "id": "non-woven-hidrossoluvel-renda-fsl",
    "code": "N-051",
    "letter": "N",
    "term": "Non-Woven Hidrossolúvel em Renda Guipir e FSL (Heavy Water-Soluble Non-Woven)",
    "pronunciation": "non-wó-ven hi-dros-so-lú-vel / ren-da gui-pir / é-fi-és-si-él",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Estabilizadores & Entretelas",
    "summary": "Entretela de não-tecido pesado (80g a 100g) à base de fibras de álcool polivinílico (PVA) que se dissolve 100% em água morna; base estrutural essencial para confecção de rendas autoportantes e guipir sem tecido.",
    "origin": "Do inglês 'water-soluble non-woven' e do termo 'Free Standing Lace' (FSL / renda que se sustenta sozinha), desenvolvida na indústria têxtil suíça e alemã no final do século XX.",
    "definition": "O Non-Woven Hidrossolúvel Pesado (também conhecido como Entretela Solúvel em Água de Tecido Não Tecido ou Vilene / Solvy Fabric) é um estabilizador fabricado com fibras sintéticas biodegradáveis de PVA prensadas termicamente. Diferentemente do filme plástico solúvel fino (usado apenas sobre toalhas), o non-woven hidrossolúvel tem aparência, textura e resistência mecânica semelhantes a um tecido de feltro firme. Ele é montado diretamente no bastidor SEM NENHUM TECIDO por cima: a máquina borda a matriz de renda inteira sobre a entretela e, ao mergulhar a peça pronta em uma bacia com água morna, o estabilizador desaparece completamente, deixando apenas a renda de linhas estruturada e rígida.",
    "howItWorks": [
      "1. Prende-se uma ou duas camadas de non-woven hidrossolúvel de 80g no bastidor bem esticado como uma pele de tambor.",
      "2. A máquina borda a matriz de renda FSL (que contém uma grade preliminar densa de pontos de suporte cruzados).",
      "3. As camadas de satim e nós decorativos se entrelaçam sobre a grade, ancorando todos os pontos entre si.",
      "4. Ao término do bordado, retira-se o bastidor e recorta-se o excesso de entretela ao redor da renda com tesoura.",
      "5. A renda é imersa em uma tigela com água morna (30°C a 40°C) por 2 a 3 minutos para dissolver a entretela.",
      "6. Seca-se a renda sobre uma toalha plana: a resina de PVA residual atua como goma natural, deixando a renda armada e nobre."
    ],
    "beginnerExplanation": "É a entretela mágica mais incrível do bordado! Ela parece um tecido branco durinho, mas quando você coloca na água morna, ela derrete e some 100% como açúcar no café! A gente usa para bordar rendas, brincos de linha e anjinhos de Natal sem tecido nenhum: você borda em cima dela, mergulha na água e sobra só a rendinha perfeita na sua mão!",
    "applications": [
      "Confecção de rendas autoportantes (Free Standing Lace - FSL), toalhinhas e caminhos de mesa",
      "Produção de joias têxteis (brincos, colares e braceletes de linha bordada)",
      "Anjos de Natal, enfeites de árvore tridimensionais e marcadores de página",
      "Bordados em pontos vazados estilo Richelieu autêntico e aplicações em vestidos de noiva"
    ],
    "technicalDetails": "O não-tecido de PVA possui densidade de 80 g/m² a 100 g/m² e resiste a mais de 1.500 perfurações de agulha por centímetro quadrado sem rasgar prematuramente. A solubilização completa ocorre em água entre 20°C e 40°C em menos de 120 segundos, sem deixar resíduos químicos tóxicos (material ecologicamente correto e biodegradável).",
    "commonErrors": [
      "❌ Usar plástico solúvel fino (tipo filme de 20 micras) para fazer FSL, que rasga nos primeiros 500 pontos e estraga o bordado",
      "❌ Lavar a renda excessivamente em água corrente quente até remover 100% da goma, deixando a renda mole e desmilinguida",
      "❌ Borda matrizes comuns (que não foram digitalizadas especificamente para FSL), fazendo o desenho desmanchar ao dissolver",
      "❌ Guardar a entretela solúvel em locais úmidos do ateliê, fazendo o material absorver água do ar e amolecer"
    ],
    "troubleshootingTips": [
      "Se a renda ficar muito mole após secar: Dissolva um pedacinho da entretela em meio copo de água e pincele essa 'goma' sobre a renda antes de secar",
      "Se a entretela rasgar no bastidor durante os pontos: Use duas camadas de entretela cruzadas no bastidor e reduza a velocidade para 600 RPM",
      "Se a renda deformar ao secar: Estique a renda úmida sobre uma placa de isopor com alfinetes inoxidáveis e deixe secar na horizontal"
    ],
    "dicaArtrelados": "Não enxágue a renda FSL até a água sair 100% limpa: deixe uma 'chuvinha' de resíduo de goma da própria entretela na peça. Quando secar na sombra, a renda ficará durinha, impecável e armada como uma verdadeira joia de ateliê!",
    "voceSabia": "As rendas FSL eletrônicas foram criadas nos anos 1990 para recriar as famosas rendas renascentistas 'Punto in Aria' (Ponto no Ar) de Veneza do século XVI, que eram tão caras que apenas reis e rainhas tinham dinheiro para comprar!",
    "practicalExercise": "Coloque uma folha de non-woven hidrossolúvel de 80g no bastidor. Carregue uma matriz de brinco ou anjinho FSL e borde com linha colorida no topo e na bobina. Recorte a sobra e mergulhe em uma xícara de água morna para ver a mágica da dissolução.",
    "quickSummary": "Entretela não-tecido de PVA que dissolve totalmente na água; usada para criar rendas, brincos e FSL sem nenhum tecido.",
    "relatedTerms": [
      "Renda Guipir / FSL",
      "Filme Hidrossolúvel",
      "Nylon Monofilamento como Fio de Bobina",
      "Gramatura da Entretela"
    ],
    "tags": [
      "n-051",
      "non-woven hidrossoluvel",
      "pva",
      "fsl",
      "renda guipir",
      "joias texteis",
      "artrelados"
    ],
    "bibliographicReferences": [
      "FREUDENBERG VILENE. Water-Soluble Stabilizers & Technical Non-Wovens for Embroidery. Technical Datasheet, 2021.",
      "SULKY OF AMERICA. Free-Standing Lace Mastery & Soluble Stabilizer Guide. Sulky Publication, 2020."
    ],
    "recommendedSettings": {
      "speedPPM": "600-700 PPM",
      "needleType": "75/11 SES ou RG",
      "stabilizer": "1 ou 2 camadas de Non-Woven Hidrossolúvel 80g",
      "threadTension": "Equilibrada (3.5)",
      "density": "Específica para FSL com grade estrutural"
    }
  },
  {
    "id": "nivelamento-de-contorno-e-preenchimento",
    "code": "N-052",
    "letter": "N",
    "term": "Nivelamento de Contorno e Preenchimento (Outline-to-Fill Alignment)",
    "pronunciation": "ni-ve-la-men-to de con-tor-no e pre-en-chi-men-to",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "summary": "Ajuste milimétrico de sobreposição e compensação de repuxo no software para evitar vãos vazios (gaps / desalinhamentos) entre a área de preenchimento e a linha de contorno final.",
    "origin": "Do inglês 'outline-to-fill registration' (registro de contorno e preenchimento), princípio originário da serigrafia e impressão gráfica adaptado à mecânica têxtil do bordado.",
    "definition": "O Nivelamento de Contorno e Preenchimento é o controle de registro geométrico fundamental na programação de matrizes que assegura que as linhas de contorno em ponto satim ou ponto reto cubram exatamente a borda do preenchimento tatami, sem deixar 'buracos' de tecido cru aparente entre eles. Durante a costura, a tensão de milhares de pontos tatami encolhe o tecido na direção das linhas de ponto (Pull Effect) e expande o tecido nas extremidades perpendiculares (Push Effect). O programador compensa essa deformação física avançando as bordas do preenchimento para dentro do contorno em 0,4 mm a 0,8 mm (Overlap).",
    "howItWorks": [
      "1. O programador cria o objeto de preenchimento tatami de fundo.",
      "2. Cria o objeto de contorno em ponto satim que contornará a figura.",
      "3. Em vez de alinhar as bordas dos dois vetores 'linha com linha', aplica uma sobreposição (Overlap) de pelo menos 0,5 mm.",
      "4. Calibra a compensação de repuxo (Pull Compensation) no preenchimento de acordo com a elasticidade do tecido (0,35 mm a 0,50 mm).",
      "5. Programa o contorno para ser bordado IMEDIATAMENTE após a cor do preenchimento, evitando que o tecido se movimente.",
      "6. A máquina executa o bordado e o contorno assenta perfeitamente sobre a margem sem vãos de tecido visíveis."
    ],
    "beginnerExplanation": "Sabe quando você borda um desenho e o contorno preto fica torto, deixando um pedaço de pano em branco aparecendo entre o desenho e o risco de fora? Isso acontece porque o tecido encolhe quando a máquina borda! Para não acontecer isso, a gente faz o desenho de dentro passar um pouquinho 'por baixo' do risco do contorno no computador. Assim, quando o tecido der uma encolhidinha, o contorno ainda vai tampar tudo perfeitamente!",
    "applications": [
      "Logotipos corporativos multicoloridos com textos e contornos pretos finos",
      "Desenhos infantis com personagens contornados em ponto cheio",
      "Bordados em tecidos de alta elasticidade como malhas piquet, moletons e dry-fit",
      "Correção de matrizes antigas com problemas crônicos de encaixe de cores"
    ],
    "technicalDetails": "A força de repuxo (Pull Force) de um tatami com densidade 0,38 mm em tecido de malha pode encolher o painel em até 1,2 mm ao longo do eixo de costura. A sobreposição mínima recomendada entre o tatami e o satim é de 3 penetrações de agulha (aproximadamente 0,6 mm). Em tecidos muito elásticos, o uso de subcamada de tatami duplo cruzado (Double Tatami Underlay) reduz a deformação elástica em 50%.",
    "commonErrors": [
      "❌ Desenhar os vetores perfeitamente encostados no software sem sobreposição ('borda com borda'), gerando vãos no tecido bordado",
      "❌ Bordar todos os preenchimentos do desenho primeiro e deixar todos os contornos pretos para o final após 30 minutos de costura",
      "❌ Não considerar a direção da elasticidade da malha ao definir o ângulo de ponto do preenchimento",
      "❌ Usar entretela fraca que estica junto com o tecido durante o preenchimento"
    ],
    "troubleshootingTips": [
      "Se aparecer uma fresta de tecido branco entre o contorno e o desenho: Aumente o Overlap do preenchimento para 0,7 mm no software",
      "Se o contorno parecer descentralizado: Altere a ordem das cores para bordar o contorno logo após cada elemento colorido",
      "Se o tecido repuxar em uma direção específica: Mude o ângulo do tatami para 45° em relação à trama do tecido"
    ],
    "dicaArtrelados": "Nunca deixe para bordar todos os contornos pretos no final da matriz se o bordado tiver mais de 10.000 pontos! Programe a matriz por seções: borde a carinha do urso e contorne a carinha; borde o corpinho e contorne o corpinho. O alinhamento fica 100% perfeito!",
    "voceSabia": "Em matrizes industriais de desenhos animados da Disney e Warner Bros, os digitalizadores profissionais chegam a usar até 1,0 mm de sobreposição oculta sob os contornos pretos grossos para garantir que os personagens fiquem perfeitos em qualquer fábrica do mundo!",
    "practicalExercise": "Crie um quadrado de 5x5 cm de tatami com uma borda satim de 3 mm ao redor. Faça a primeira versão com sobreposição zero (0,0 mm) e a segunda com sobreposição de 0,6 mm. Borde ambas em uma malha de camiseta e compare o alinhamento das bordas.",
    "quickSummary": "Sobreposição e compensação programadas entre o fundo e a borda para eliminar frestas de tecido cru no desenho.",
    "relatedTerms": [
      "Compensação de Encolhimento",
      "Ponto Cheio (Satim)",
      "Ponto Tatami",
      "Sobreposição (Overlap)"
    ],
    "tags": [
      "n-052",
      "nivelamento de contorno",
      "overlap",
      "registro",
      "desalinhamento",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Pull Compensation & Outline Registration Strategies. Wilcom Masterclass, 2021.",
      "PULSE MICROSYSTEMS. Advanced Geometric Alignment & Stitch Dynamics. Tajima DG/ML Manual, 2020."
    ]
  },
  {
    "id": "nylon-tafeta-poliamida-resinada",
    "code": "N-053",
    "letter": "N",
    "term": "Nylon Tafetá / Poliamida Resinada (Resin-Coated Nylon / Windbreaker)",
    "pronunciation": "nai-lon ta-fe-tá / po-li-a-mi-da re-si-na-da",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Tipos de Tecidos",
    "summary": "Tecido plano e leve de poliamida com acabamento resinado impermeável no verso; utilizado em capas de chuva, agasalhos e guarda-chuvas, exigindo agulhas finas 65/9 ou 70/10 para não danificar a película protetora.",
    "origin": "Do persa 'tafta' (tecido brilhante e torcido), aperfeiçoado com fibras sintéticas de nylon e resina acrílica/poliuretano na segunda metade do século XX para vestuário esportivo e náutico.",
    "definition": "O Nylon Tafetá (ou Poliamida Resinada) é um tecido têxtil leve, fino e de superfície extremamente lisa e acetinada, caracterizado pela estrutura de tecelagem em tafetá simples (1x1) com filamentos contínuos de poliamida. No verso, o tecido recebe uma fina camada de resina acrílica ou poliuretano (PU Coating) que lhe confere propriedades corta-vento e repelência à água. No bordado eletrônico, sua baixa espessura e rigidez elástica exigem cuidados rigorosos com a densidade de pontos e calibre da agulha para que as perfurações não atuem como uma linha de picote, rasgando o tecido.",
    "howItWorks": [
      "1. O tecido fino e escorregadio é estabilizado com entretela No-Show Mesh ou rasga-fácil de 50g.",
      "2. É montado no bastidor preferencialmente por flutuação com spray adesivo temporário para evitar marcas no resinado.",
      "3. Utiliza-se agulha fina 65/9 ou 70/10 com ponta aguda (Microtex/RG).",
      "4. A densidade de satim é aliviada para 0,42 mm a 0,46 mm com pontos de suporte leves em tatami aberto.",
      "5. A máquina opera em velocidade controlada de 650 a 750 RPM.",
      "6. A peça bordada mantém a resistência do tecido sem rasgos perimetrais."
    ],
    "beginnerExplanation": "É aquele tecido bem fininho, brilhante e lisinho de capa de chuva, guarda-chuva e forro de jaqueta esportiva! Para bordar nele sem rasgar como papel picotado, a gente usa agulha bem fininha (70/10), não aperta muito os pontos (deixa os pontos mais soltinhos) e cola o tecido na entretela com cola spray em vez de apertar com força no aro.",
    "applications": [
      "Bordados promocionais em jaquetas corta-vento e agasalhos impermeáveis",
      "Personalização de guarda-chuvas, sombrinhas e capas de proteção",
      "Bolsas dobráveis ecológicas ultraleves e sacos esportivos tipo 'gym sack'",
      "Bandeiras de eventos esportivos e flâmulas de tecido sintético"
    ],
    "technicalDetails": "O Nylon Tafetá possui densidade de fios de 190T a 210T (número de fios por polegada quadrada) e gramatura entre 55 g/m² e 75 g/m². A camada resinada no verso tem espessura de 5 a 15 micras. A penetração de agulhas grossas (80/12 ou 90/14) cria furos permanentes que rompem a impermeabilidade e fragilizam a integridade da película de resina.",
    "commonErrors": [
      "❌ Utilizar agulha grossa 90/14 ponta bola, picotando o tecido fino e fazendo o bordado se desprender como um selo postal",
      "❌ Prender o nylon tafetá direto no bastidor de parafuso com força excessiva, esticando a resina e criando marcas brancas permanentes",
      "❌ Usar densidades elevadas (0,32 mm) com muitas camadas de pontos sobrepostos, rasgando o centro do bordado",
      "❌ Passar a ferro quente sobre o nylon tafetá, derretendo a resina acrílica do verso"
    ],
    "troubleshootingTips": [
      "Se o tecido picotar ou abrir furos nos cantos: Troque imediatamente para agulha 65/9 Microtex e aumente o espaçamento de pontos para 0,44 mm",
      "Se o tecido enrugar: Use entretela No-Show Mesh colada com spray temporário em toda a área de contato",
      "Se o aro do bastidor deixar marcas brilhantes: Borde com técnica de flutuação e passe um vapor suave de longe (sem encostar o ferro)"
    ],
    "dicaArtrelados": "Ao bordar guarda-chuvas de nylon tafetá, desparafuse a ponta da haste central para encaixar o tecido plano no bastidor e utilize cola spray temporária com entretela rasga-fácil: o bordado fica impecável e a armação não entorta!",
    "voceSabia": "O tafetá foi um dos tecidos mais cobiçados da nobreza persa no século XIV, mas foi somente em 1939 que a DuPont apresentou o primeiro tafetá 100% sintético de nylon na Feira Mundial de Nova York!",
    "practicalExercise": "Pegue um retalho de nylon tafetá de jaqueta. Borde duas letras 'M': uma com densidade padrão de 0,36 mm e agulha 90/14, e outra com densidade aliviada de 0,44 mm e agulha 70/10 Microtex. Tente puxar as bordas de ambas e veja como a segunda se mantém perfeitamente íntegra.",
    "quickSummary": "Tecido leve de poliamida com verso resinado; exige agulha 70/10 Microtex, flutuação e densidade aliviada para não picotar.",
    "relatedTerms": [
      "Nylon / Fibras de Poliamida",
      "Agulha Microtex / RG",
      "Flutuação de Tecido (Floating)",
      "Compensação de Encolhimento"
    ],
    "tags": [
      "n-053",
      "nylon tafeta",
      "corta-vento",
      "resinado",
      "impermeavel",
      "agulha fina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT. Needles for Microfibers, Coated Fabrics & Lightweight Synthetics. Technical Handbook, 2021.",
      "KAPLAN, S. Performance Fabrics in Commercial Embroidery. Stitches Journal, 2020."
    ],
    "recommendedSettings": {
      "speedPPM": "650-750 PPM",
      "needleType": "65/9 ou 70/10 Microtex / RG",
      "stabilizer": "Entretela No-Show Mesh ou Rasga-Fácil 50g com Spray Temporário",
      "threadTension": "Leve (3.0)",
      "density": "0,42 mm a 0,45 mm"
    }
  },
  {
    "id": "nodulo-de-travamento-ponto-de-cruz",
    "code": "N-054",
    "letter": "N",
    "term": "Nódulo de Travamento em Ponto de Cruz Eletrônico (Cross-Stitch Tie-In)",
    "pronunciation": "nó-du-lo de tra-va-men-to em pon-to de cruz",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Pontos Básicos & Decorativos",
    "summary": "Algoritmo de início e arremate programado em matrizes digitalizadas no estilo ponto de cruz manual, ancorando os cruzamentos em 'X' sem gerar nós volumosos ou pontos soltos.",
    "origin": "Do ponto de cruz tradicional artesanal (uma das técnicas têxteis mais antigas da história), adaptado para módulos digitais como Wilcom Cross Stitch e Embird Cross na década de 1990.",
    "definition": "O Nódulo de Travamento em Ponto de Cruz Eletrônico é o método de ancoragem inicial e final empregado na digitalização de matrizes que simulam o ponto de cruz manual. Como o ponto de cruz é formado por quadrículas de pontos em formato de 'X' (com 2 a 4 passagens de linha por cruzamento), os nós de amarração não podem ser executados nas bordas externas sem deformar a geometria perfeitamente quadrada da grade. O algoritmo insere micro-pontos de travamento no centro do primeiro 'X' e conduz a linha continuamente pelos braços diagonais dos pontos vizinhos, eliminando cortes desnecessários e mantendo o relevo rústico e tradicional.",
    "howItWorks": [
      "1. O programador define o tamanho da grade (ex: 14 a 18 cruzamentos por polegada / 1,4 a 1,8 mm por 'X').",
      "2. A agulha inicia no centro da primeira cruz com 3 micro-penetrações de 0,5 mm.",
      "3. Executa a primeira diagonal (ponto de ida: /) e a segunda diagonal de cruzamento (ponto de volta: \\).",
      "4. A máquina segue em trajeto contínuo ligando os 'X' adjacentes sem cortes intermediários de linha.",
      "5. No último 'X' do bloco de cor, a máquina executa o nó final oculto sob a perna diagonal superior.",
      "6. O resultado final é idêntico ao ponto de cruz feito à mão, com verso limpo e sem nós salientes."
    ],
    "beginnerExplanation": "É o jeito que o computador amarra a linha quando você manda a máquina fazer bordados de ponto de cruz (aqueles que parecem feitos à mão com vários 'X' iguaizinhos)! Ele dá um nozinho bem disfarçado no meio do primeiro 'X' e vai costurando todos os outros sem parar, deixando tudo firme e com aquela carinha linda de bordado de vovó feito na máquina rápida!",
    "applications": [
      "Bordado de temas folclóricos, rústicos e campestres em panos de prato e toalhas de mesa",
      "Quadros decorativos e marcadores de página com estética artesanal vintage",
      "Enxovais de bebê com motivos infantis digitalizados a partir de gráficos manuais",
      "Customização de toalhas de lavabo em tecido étamine ou percal"
    ],
    "technicalDetails": "No ponto de cruz eletrônico, cada braço da cruz pode receber 2, 3 ou 4 passagens de linha (Double Cross, Triple Cross, French Cross). Para tecidos de percal e linho, 2 passagens de linha 40wt são ideais. Para tecidos de étamine com trama aberta, 3 passagens garantem a cobertura e a espessura visual do fio de meada manual.",
    "commonErrors": [
      "❌ Programar cortes de linha (Trim) a cada 2 ou 3 cruzamentos, enchendo o avesso de caudas e diminuindo a velocidade da máquina",
      "❌ Fazer nós de amarração fora da grade, distorcendo a simetria quadrada dos 'X'",
      "❌ Usar tensão de linha superior muito frouxa, deixando os braços da cruz flácidos e sem definição geométrica",
      "❌ Borda ponto de cruz sobre tecidos atoalhados sem filme hidrossolúvel por cima, fazendo os 'X' sumirem entre as felpas"
    ],
    "troubleshootingTips": [
      "Se os 'X' ficarem tortos ou assimétricos: Verifique se o tecido está perfeitamente alinhado com o fio da trama no bastidor",
      "Se o verso ficar cheio de fios compridos: Ative a ferramenta 'Otimizar Trajetos de Ponto de Cruz' para criar linhas contínuas de ida e volta",
      "Se a cruz afundar no tecido: Coloque uma folha de plástico solúvel (Avalon) sobre a peça antes de iniciar"
    ],
    "dicaArtrelados": "Para dar um efeito ainda mais idêntico ao bordado manual em ponto de cruz, utilize linha de bordar fosca de poliéster opaco (ou linha de algodão 50wt para bordar): o acabamento sem brilho plástico engana até as bordadeiras mais experientes!",
    "voceSabia": "O ponto de cruz é considerado a forma mais antiga de bordado do mundo: arqueólogos encontraram fragmentos de roupas de linho com ponto de cruz perfeitamente preservados em tumbas egípcias de mais de 3.500 anos atrás!",
    "practicalExercise": "No seu software, abra o módulo de Ponto de Cruz e digitalize um pequeno coração de 3x3 cm com grade de 1,8 mm. Borde em um tecido de fustão ou étamine com linha vermelha fosca e encante-se com a precisão dos cruzamentos.",
    "quickSummary": "Amarração geométrica no centro dos 'X' em matrizes de ponto de cruz; garante estética de bordado manual sem fios soltos.",
    "relatedTerms": [
      "Ponto de Cruz Eletrônico",
      "Nó de Entrada / Nó Inicial",
      "Filme Hidrossolúvel",
      "Ponto Decorativo"
    ],
    "tags": [
      "n-054",
      "ponto de cruz",
      "cross stitch",
      "travamento",
      "etamine",
      "vintage",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Cross Stitch Digitizing & Traditional Craft Simulation. Wilcom e4 User Series, 2021.",
      "CLUCKIE, L. The Rise and Development of Cross-Stitch Embroidery. Manchester University Press, 2018."
    ]
  },
  {
    "id": "needle-clearance-folga-agulha-lancadeira",
    "code": "N-055",
    "letter": "N",
    "term": "Folga Agulha-Lançadeira e Sincronismo (Needle-to-Hook Clearance & Timing Gap)",
    "pronunciation": "ní-dəl cli-ren-ce / fol-ga a-gu-lha lan-ça-dei-ra",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Tensão & Calibração",
    "summary": "Distância micrométrica crítica (0,05 mm a 0,10 mm) entre a ponta da lançadeira rotativa e a cava (scarf) da agulha no momento da captura da laçada; regulagem mecânica mais importante da bordadeira.",
    "origin": "Do inglês 'needle clearance' (espaço livre da agulha), padrão internacional de tolerância micrométrica mecânica estabelecido pelas normas industriais ISO e JIS para máquinas de costura e bordado.",
    "definition": "A Folga Agulha-Lançadeira (Needle Clearance) é a distância dimensional medida com calibrador de lâminas de precisão entre a ponta afiada da lançadeira rotativa e a face côncava da agulha (cava/scarf) quando ambas se cruzam no ponto exato de formação da laçada. Essa folga deve ser a menor possível sem que haja contato físico entre as peças de aço. Se a folga for maior que 0,15 mm, a lançadeira 'passa no vazio' sem pescar o fio (ponto pulado); se for menor que 0,02 mm ou encostar, a ponta da lançadeira colide com a agulha, danificando o bico e desfiando a linha.",
    "howItWorks": [
      "1. A agulha desce até o ponto morto inferior (fundo do curso) e começa a subir de 1,8 mm a 2,2 mm.",
      "2. Ao subir, a linha superior folga e forma um pequeno laço (Loop) no lado da cava.",
      "3. A ponta da lançadeira rotativa chega ao centro da cava da agulha exatamente nesse milissegundo.",
      "4. A folga lateral deve ser de aproximadamente a espessura de uma folha de papel de seda (0,05 mm).",
      "5. A ponta da lançadeira entra suavemente por trás da linha dentro da laçada sem raspar no aço da agulha.",
      "6. A laçada é expandida e levada ao redor da caixa de bobina para entrelaçar com a linha inferior.",
      "7. O ponto é fechado perfeitamente com tensão balanceada."
    ],
    "beginnerExplanation": "É a distância milimétrica secreta entre a agulha e a pecinha giratória lá no fundo da máquina! A ponta da lançadeira tem que passar tão pertinho da agulha que quase raspa (como a espessura de um fio de cabelo), para conseguir pescar a linha certinho. Se ficar longe, a máquina pula pontos; se ficar perto demais e bater, quebra a agulha e estraga a peça giratória!",
    "applications": [
      "Ajuste e calibração de ponto (Timing) em manutenções preventivas e corretivas de rotina",
      "Solução definitiva para problemas crônicos de pontos pulados (Skipped Stitches)",
      "Recalibração da lançadeira após quebras violentas de agulha em bastidores ou tecidos duros",
      "Garantia de operação suave e silenciosa da bordadeira em altas velocidades"
    ],
    "technicalDetails": "A regulagem técnica padrão utiliza a escala de graus angular do volante da máquina (normalmente a captura ocorre entre 198° e 203° dependendo da marca). A altura da barra de agulha deve estar ajustada pela linha de referência marcada na haste. A folga é medida com a agulha nova e calibrada em 75/11 instalada até o batente superior.",
    "commonErrors": [
      "❌ Regular a folga da lançadeira com uma agulha torta ou usada, gerando erro de leitura e descalibração geral",
      "❌ Deixar a lançadeira encostando na agulha, criando rebarbas e calor por fricção que derrete o fio de poliéster",
      "❌ Apertar os parafusos da lançadeira de forma assimétrica, fazendo o eixo perder o paralelismo",
      "❌ Tentar calibrar o timing sem ferramentas adequadas (calibrador de lâminas e chave Allen correta)"
    ],
    "troubleshootingTips": [
      "Se a máquina pular pontos a cada 10 ou 20 pontos: A lançadeira está muito afastada da agulha (folga > 0,15 mm); aproxime o corpo da lançadeira",
      "Se a agulha quebrar com estalo no início: O timing está atrasado ou a lançadeira colidiu de frente com a haste",
      "Se a linha desfiar a cada início de ponto: Inspecione a ponta da lançadeira com uma lupa à procura de rebarbas causadas por impacto e faça o polimento"
    ],
    "dicaArtrelados": "Para checar a folga da lançadeira em casa sem aparelhos caros, pegue uma tirinha de papel sulfite comum (que tem cerca de 0,08 mm de espessura): com a máquina no ponto de timing, o papel deve passar suavemente entre a ponta da lançadeira e a agulha com uma leve resistência, sem rasgar!",
    "voceSabia": "Em 1851, quando Isaac Singer patenteou a máquina de costura moderna, a folga agulha-lançadeira era ajustada totalmente a olho nu pelos mecânicos; hoje, fábricas como Tajima e Brother utilizam câmeras a laser de alta velocidade para aferir a folga com precisão de 0,001 milímetro!",
    "practicalExercise": "Com a máquina desligada e chapa de agulha removida, gire o volante lentamente até a ponta da lançadeira cruzar atrás da agulha. Ilumine com a lanterna do celular e observe o espaço minúsculo entre a cava da agulha e a ponta da lançadeira.",
    "quickSummary": "Distância micrométrica (0,05 a 0,10 mm) entre agulha e lançadeira para capturar a laçada sem colisão nem ponto pulado.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Cava da Agulha (Scarf)",
      "Ponto Pulado (Skipped Stitch)",
      "Sincronismo / Timing"
    ],
    "tags": [
      "n-055",
      "needle clearance",
      "folga",
      "timing",
      "sincronismo",
      "mecanica",
      "calibracao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HIROSE HOOK MFG. Technical Guide on Rotary Hook Clearance & Needle Timing. Hirose Co., Osaka, 2021.",
      "KOBAN HOOKS. Industrial Sewing Machine Mechanics & Timing Clearance Specifications. Technical Manual, 2020."
    ]
  },
  {
    "id": "nivelamento-compensacao-repuxo-direcional",
    "code": "N-056",
    "letter": "N",
    "term": "Nivelamento de Compensação de Repuxo Diferencial por Direção (Directional Pull Compensation)",
    "pronunciation": "ni-ve-la-men-to de com-pen-sa-ção de re-pu-xo di-re-cio-nal",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "summary": "Ajuste assimétrico de compensação de repuxo no software com valores diferentes para o eixo X e eixo Y, respeitando a elasticidade desigual da urdidura e da trama dos tecidos.",
    "origin": "Do inglês 'directional pull compensation' (compensação direcional de repuxo), desenvolvido na física têxtil computacional aplicada a tecidos de malha e sarja com elasticidade bidirecional assimétrica.",
    "definition": "O Nivelamento de Compensação de Repuxo Diferencial por Direção é o recurso técnico avançado de digitalização onde o programador aplica valores distintos de expansão de ponto para o sentido horizontal (X) e vertical (Y) da matriz de bordado. Na grande maioria dos tecidos industriais (especialmente malhas piquet, moletons, dry-fit com elastano e sarjas), a elasticidade ao longo da largura (trama) é de 2 a 4 vezes maior que a elasticidade ao longo do comprimento (urdidura). Ao configurar uma compensação maior no eixo elástico (ex: 0,55 mm em X) e menor no eixo rígido (ex: 0,30 mm em Y), o bordado final mantém a proporção matemática e circularidade perfeitas após sair do bastidor.",
    "howItWorks": [
      "1. O programador analisa a direção do fio do tecido onde a matriz será bordada na peça final.",
      "2. Identifica o eixo de maior elasticidade mecânica (geralmente o eixo horizontal da camiseta/trama da malha).",
      "3. No software, desativa a compensação uniforme e ativa a 'Compensação Diferencial por Ângulo / Eixo'.",
      "4. Define a compensação para pontos horizontais em 0,50 mm a 0,60 mm e pontos verticais em 0,30 mm.",
      "5. A máquina executa o bordado no bastidor.",
      "6. Ao soltar a peça dos aros, o relaxamento elástico do tecido equilibra as forças opostas, mantendo círculos redondos e quadrados perfeitos."
    ],
    "beginnerExplanation": "Você já reparou que quase toda camiseta estica muito para os lados (para a gente conseguir vestir), mas quase não estica para cima e para baixo? Se você bordar uma bolinha perfeitamente redonda, quando você tira do bastidor ela vira um ovo esmagado! Esse recurso faz a máquina bordar a bolinha um pouquinho mais 'gordinha' pros lados que esticam, para quando o tecido relaxar ela ficar perfeitamente redonda!",
    "applications": [
      "Bordados de logotipos circulares precisos em camisetas polo de malha piquet",
      "Confecção de escudos e brasões esportivos em tecidos com elastano (Lycra, Dry-Fit)",
      "Bordados em meias, punhos e golas caneladas com alta memória elástica",
      "Ajuste fino de matrizes para produção em alta escala com zero refugo por deformação"
    ],
    "technicalDetails": "A taxa de relaxamento elástico de uma malha 100% algodão pós-bastidor varia entre 4% e 8% no sentido da trama e 1% a 2% no sentido da urdidura. A compensação diferencial compensa o vetor resultante através da fórmula trigonométrica: $Comp(\\theta) = Comp_X \\cdot |\\cos \\theta| + Comp_Y \\cdot |\\sin \\theta|$, ajustando cada ponto de acordo com seu ângulo de inclinação.",
    "commonErrors": [
      "❌ Aplicar compensação de repuxo padrão idêntica para todos os eixos em malhas elásticas, gerando deformação ovalada em círculos",
      "❌ Montar o tecido no bastidor com a trama enviesada (torta a 45°), tornando imprevisível o comportamento da compensação",
      "❌ Exagerar na compensação no eixo rígido (urdidura), deixando as letras espessas demais verticalmente",
      "❌ Esquecer de alinhar a entretela recortável no mesmo sentido do fio de maior estabilidade"
    ],
    "troubleshootingTips": [
      "Se um círculo bordado ficar achatado na horizontal: Aumente a compensação de repuxo especificamente para os ângulos horizontais (eixo X) no software",
      "Se as colunas verticais ficarem muito grossas: Reduza a compensação do eixo Y para 0,25 mm",
      "Se o tecido enrugar apenas nas laterais: Use duas camadas de entretela recortável cruzadas a 90° no bastidor"
    ],
    "dicaArtrelados": "Para testar a elasticidade do tecido no ateliê antes de digitalizar, puxe suavemente um pedaço do tecido com as duas mãos na horizontal e depois na vertical: o lado que esticar mais precisa receber mais compensação de repuxo no programa!",
    "voceSabia": "A compensação direcional de repuxo foi desenvolvida originalmente nos anos 1980 na Suíça por matemáticos que programavam os primeiros teares industriais automáticos para a indústria de alta costura europeia!",
    "practicalExercise": "Digitalize um círculo perfeito de 6 cm de diâmetro. Borde em uma camiseta de malha piquet com compensação uniforme de 0,30 mm. Agora borde outro com compensação direcional (0,55 mm em X e 0,30 mm em Y). Meça ambos com uma régua após tirar do bastidor e compare a circularidade.",
    "quickSummary": "Compensação de repuxo assimétrica para eixos X e Y; essencial para manter formas redondas em malhas elásticas.",
    "relatedTerms": [
      "Compensação de Encolhimento",
      "Malha Piquet",
      "Ângulo de Ponto",
      "Entretela Recortável (Cut-Away)"
    ],
    "tags": [
      "n-056",
      "compensacao direcional",
      "repuxo assimetrico",
      "malhas",
      "circularidade",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Advanced Pull Compensation & Directional Stretch Matrix. Wilcom Digitizing Series, 2021.",
      "TEXTILE INSTITUTE. Fabric Mechanics, Tensile Recovery & Anisotropic Distortion in Apparel. Manchester, 2020."
    ]
  },
  {
    "id": "nylon-flocked-tecido-flocado",
    "code": "N-057",
    "letter": "N",
    "term": "Nylon Flocado / Tecido Flocado com Base Poliamida (Flocked Suede)",
    "pronunciation": "nai-lon flo-ca-do / te-ci-do flo-ca-do",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Tipos de Tecidos",
    "summary": "Tecido especial com superfície aveludada composta por microfibras de poliamida fixadas eletrostaticamente sobre base resinada; exige técnica de flutuação e filme plástico solúvel para proteger o veludo.",
    "origin": "Do inglês 'flock' (tufo de lã/fibra), processo industrial eletrostático inventado na Alemanha na década de 1930 para criar tecidos semelhantes ao veludo e à camurça.",
    "definition": "O Nylon Flocado (ou Tecido com Flocagem Eletrostática de Poliamida) é um substrato têxtil onde milhões de microfibras curtas de poliamida (comprimento de 0,5 mm a 2,0 mm) são orientadas perpendicularmente e ancoradas por um campo eletrostático sobre uma base adesivada de tecido plano ou sarja. O resultado é um toque extremamente aveludado, rico e macio, com excelente durabilidade e resistência à fricção. É muito utilizado em forros de caixas de joias, estojos nobres, almofadas decorativas, calçados de festa e detalhes de alta moda.",
    "howItWorks": [
      "1. As microfibras aveludadas sofrem esmagamento permanente se forem prensadas entre os aros rígidos de um bastidor de parafuso comum.",
      "2. Por isso, a entretela rasga-fácil ou recortável é montada sozinha no bastidor e o tecido flocado é colocado por flutuação com spray adesivo suave.",
      "3. Uma camada de filme hidrossolúvel transparente (Avalon) é colocada por cima para evitar que os pontos afundem na felpa flocada.",
      "4. Utiliza-se agulha 75/11 SES (Ponta Bola Leve) para não cortar a resina da base adesiva.",
      "5. A máquina executa o bordado com pontos de suporte e satim brilhante.",
      "6. Ao finalizar, o filme solúvel é removido e as fibras aveludadas ao redor do bordado permanecem fofas e íntegras."
    ],
    "beginnerExplanation": "É aquele tecido macio que parece um veludinho ou camurça bem fofinha usado em caixas de joias, almofadas e bolsas chiques! Ele tem uma regrinha de ouro: NUNCA aperte ele dentro do bastidor de parafuso, porque a marca redonda do aro nunca mais sai! A gente cola ele por cima da entretela com cola spray, coloca um plástico transparente solúvel por cima e borda com todo o carinho.",
    "applications": [
      "Bordados em almofadas de luxo, mantas decorativas e cortinas aveludadas",
      "Personalização de forros de estojos de joias, caixas de relógio e porta-óculos",
      "Apliques recortados de tecido flocado para criar texturas aveludadas em roupas",
      "Bordados em calçados, bolsas e detalhes de vestuário de inverno"
    ],
    "technicalDetails": "A densidade de fibras na flocagem atinge cerca de 100 a 300 microfibras por milímetro quadrado. A resina de ancoragem da base de poliuretano tem espessura de 0,05 mm. Ao bordar, deve-se evitar velocidades superiores a 750 RPM para prevenir o aquecimento por fricção que pode descolar a flocagem nas bordas do desenho.",
    "commonErrors": [
      "❌ Apertar o tecido flocado diretamente no bastidor de parafuso, deixando um anel permanente de felpa esmagada ('hoop burn')",
      "❌ Bordar sem filme hidrossolúvel no topo, fazendo com que as linhas finas afundem na felpa aveludada e fiquem invisíveis",
      "❌ Passar ferro de passar quente diretamente sobre o veludo flocado, derretendo as microfibras sintéticas de nylon",
      "❌ Usar fitas adesivas muito fortes na frente do tecido, arrancando os tufos de flocagem na remoção"
    ],
    "troubleshootingTips": [
      "Se o tecido ficar com marcas leves de pressão: Aplique um jato de vapor de água de longe e escove suavemente com uma escovinha de dentes macia na direção do pelo",
      "Se os pontos de satim sumirem no meio da felpa: Adicione uma camada de suporte em tatami leve de 0,40 mm antes do satim e use filme plástico",
      "Se a linha superior desfiar: Troque para agulha 75/11 SES com olho polido para evitar atrito com a resina de flocagem"
    ],
    "dicaArtrelados": "Para reavivar a felpa de um tecido flocado ou veludo após o bordado, passe uma escovinha de cerdas naturais super macias com vapor morno do ferro a 10 cm de distância: a felpa levanta na hora e o bordado fica com acabamento de boutique!",
    "voceSabia": "O processo de flocagem eletrostática foi inspirado no efeito natural da eletricidade estática observado pelos cientistas que viam partículas de poeira saltarem e ficarem em pé sobre placas de vidro eletrizadas!",
    "practicalExercise": "Pegue um retalho de tecido flocado ou veludo. Monte a entretela no bastidor e flutue o tecido com spray adesivo e filme plástico por cima. Borde uma letra em satim. Remova o plástico com água morna e escove a felpa ao redor para ver o relevo perfeito.",
    "quickSummary": "Tecido com microfibras aveludadas de nylon; exige flutuação com spray e filme hidrossolúvel no topo para não esmagar a felpa.",
    "relatedTerms": [
      "Flutuação de Tecido (Floating)",
      "Filme Hidrossolúvel",
      "Marcas de Bastidor (Hoop Burn)",
      "Ponta de Agulha (SES, RG, SPI)"
    ],
    "tags": [
      "n-057",
      "nylon flocado",
      "veludo",
      "flocagem",
      "flutuacao",
      "filme soluvel",
      "artrelados"
    ],
    "bibliographicReferences": [
      "FLOCK ASSOCIATION OF EUROPE. Electrostatic Flocking Principles & Textile Applications. European Standard Handbook, 2021.",
      "KEMP, B. Embroidering on Velvets, Faux Suede and Flocked Substrates. Textile Crafts, 2020."
    ],
    "recommendedSettings": {
      "speedPPM": "650-750 PPM",
      "needleType": "75/11 SES (Ponta Bola Leve)",
      "stabilizer": "Entretela Rasga-Fácil 50g por baixo + Filme Hidrossolúvel no topo",
      "threadTension": "Padrão leve (3.2 a 3.5)",
      "density": "0,38 mm a 0,40 mm"
    }
  },
  {
    "id": "no-de-arremate-ponto-estrela",
    "code": "N-058",
    "letter": "N",
    "term": "Nó de Arremate com Ponto Estrela (Star Stitch Locking / Under-Cover Lock)",
    "pronunciation": "nó de ar-re-ma-te com pon-to es-tre-la",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "summary": "Padrão geométrico especial de três a quatro micro-pontos cruzados em formato de asterisco ou estrela de três pontas executado antes do corte de linha, ideal para tecidos de altíssima elasticidade e lavagens industriais pesadas.",
    "origin": "Do inglês 'star locking stitch' (nó em estrela), desenvolvido para uniformes militares, vestuário esportivo profissional e roupas de banho com elastano.",
    "definition": "O Nó de Arremate com Ponto Estrela (Star Stitch Lock) é uma técnica de programação de nós de segurança onde o travamento final da linha não é feito em uma linha reta simples de vai-e-vem, mas sim através de uma sequência radial de micro-penetrações (0,5 mm a 0,8 mm) formando uma pequena estrela de 3 ou 4 pontas no centro do objeto bordado. Por distribuir a tensão mecânica de ancoragem em múltiplas direções axiais (360°), o nó estrela impede que a ponta da linha se solte mesmo quando o tecido de malha com elastano é submetido a estiramentos severos ou centrifugação em lavanderias industriais.",
    "howItWorks": [
      "1. A máquina conclui a última coluna de satim ou área de preenchimento.",
      "2. Em vez de dar pontos de retorno na mesma linha, a agulha penetra no centro da área coberta.",
      "3. Executa um micro-ponto a 0°, retorna ao centro, executa outro a 120° e o terceiro a 240° (formando um 'Y' ou asterisco '*').",
      "4. As laçadas inferiores da bobina se entrelaçam em três ângulos opostos, travando o fio de forma definitiva.",
      "5. A máquina aciona o trimer (corte de linha).",
      "6. A cauda de linha cortada fica presa no nó central sem escapar para o direito da peça."
    ],
    "beginnerExplanation": "É o 'super nó de marinheiro' da bordadeira! Em vez de dar dois pontinhos comuns para frente e para trás antes de cortar a linha, a máquina faz um desenhinho minúsculo de estrelinha de 3 pontas bem escondidinho. Esse nozinho em estrela é tão forte que a roupa pode ir para a máquina de lavar 100 vezes e esticar para todo lado que o bordado NUNCA desmancha!",
    "applications": [
      "Bordados em roupas de banho (biquínis, maiôs e sungas de Lycra/Elastano)",
      "Uniformes esportivos de alta performance, futebol e roupas de ciclismo",
      "Peças submetidas a lavagens industriais pesadas (jalecos hospitalares e fardas)",
      "Bordados em toalhas de praia e artigos esportivos de alta abrasão"
    ],
    "technicalDetails": "O nó estrela apresenta resistência à tração 65% superior à de um nó linear de 2 pontos (Line Lock). O comprimento de cada braço da estrela deve ser rigorosamente calibrado entre 0,5 mm e 0,7 mm para não criar um nódulo volumoso que cause desconforto tátil na pele do usuário.",
    "commonErrors": [
      "❌ Fazer os braços da estrela muito longos (acima de 1,2 mm), criando uma ponta visível que escapa da cobertura de satim",
      "❌ Usar nós em linha reta em biquínis ou tecidos que esticam muito, fazendo a ponta da linha se soltar na primeira usada",
      "❌ Programar o nó estrela na borda externa do desenho em vez de programar no centro sob a cobertura",
      "❌ Não ativar o corte de linha automático após o nó, deixando fios esticados entre as seções"
    ],
    "troubleshootingTips": [
      "Se as pontas do bordado se soltarem após lavar: Altere o tipo de nó de saída no software de 'Linear Lock' para 'Star Lock' ou 'Radial Lock'",
      "Se o nó criar uma bolinha dura no avesso: Reduza a amplitude dos pontos da estrela para 0,5 mm",
      "Se a linha quebrar no momento do nó: Verifique se a velocidade de rotação no momento do nó de arremate está configurada para 400 RPM"
    ],
    "dicaArtrelados": "Para maiôs, biquínis e roupas de academia em suplex com elastano, o nó em estrela é obrigatório no seu software de matrizes: ele acompanha o estiramento do tecido no corpo sem nunca arrebentar a pontinha do arremate!",
    "voceSabia": "O nó em estrela para bordado foi inspirado no nó de sutura cirúrgica utilizado por cirurgiões plásticos para fechar tecidos corporais elásticos sob tensão contínua!",
    "practicalExercise": "No seu software de matrizes, acesse as propriedades de amarração (Tie-Off) e selecione o tipo 'Star' ou 'Radial'. Digitalize uma pequena estrela em satim e borde em um retalho de tecido elástico de Lycra. Estique o tecido com força e comprove a firmeza do nó.",
    "quickSummary": "Nó de arremate radial em formato de estrela; oferece máxima ancoragem em tecidos ultraelásticos e lavagens industriais.",
    "relatedTerms": [
      "Nó de Saída / Nó de Arremate Final",
      "Nó de Entrada / Nó Inicial",
      "Dry-Fit e Tecidos Tecnológicos",
      "Corte de Linha (Trim)"
    ],
    "tags": [
      "n-058",
      "no estrela",
      "star lock",
      "arremate",
      "lycra",
      "elastano",
      "resistencia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Tie-in and Tie-off Methods: Linear, Star and Radial Locking. Wilcom Reference Guide, 2021.",
      "SPORTSWEAR EMBROIDERY ALLIANCE. Durability Standards for High-Stretch Athletic Wear. Technical Report, 2020."
    ]
  },
  {
    "id": "nivelamento-de-torque-motor-de-passo",
    "code": "N-059",
    "letter": "N",
    "term": "Nivelamento de Torque do Motor de Passo do Bastidor (X/Y Stepper Motor Torque)",
    "pronunciation": "ni-ve-la-men-to de tór-que do mo-tor de pas-so",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Componentes da Máquina",
    "summary": "Calibração e controle eletrônico de torque e micro-passos nos motores X e Y do pantógrafo para garantir movimentação milimétrica suave e sem perda de passos sob o peso de bastidores grandes e tecidos pesados.",
    "origin": "Do latim 'torquere' (torcer/girar), princípio da mecânica vetorial de força rotacional aplicado aos servomotores e motores de passo híbridos bifásicos/trifásicos dos pantógrafos industriais.",
    "definition": "O Nivelamento de Torque do Motor de Passo (ou Controle de Corrente dos Drivers X/Y) é o equilíbrio eletrônico e mecânico que governa a força motriz fornecida pelos servomotores ou motores de passo responsáveis por movimentar o pantógrafo da bordadeira nas direções horizontal (eixo X) e vertical (eixo Y). Quando se utilizam bastidores gigantes (como 20x30 cm, 36x20 cm ou bastidores de boné metálicos pesados), a inércia do conjunto aumenta consideravelmente. O driver de controle calibra o fornecimento de corrente elétrica em miliamperes (mA) para que o motor mantenha torque estático e dinâmico suficiente para deslocar o bastidor com aceleração uniforme, sem trepidações, ruídos excessivos ou perda de coordenadas (Loss of Steps).",
    "howItWorks": [
      "1. A placa controladora da máquina calcula a trajetória e a distância do próximo ponto.",
      "2. Envia um trem de pulsos de alta frequência para os drivers dos motores X e Y.",
      "3. O driver aplica a corrente nominal calibrada para fornecer torque suficiente de aceleração em menos de 0,02 segundos.",
      "4. As correias sincronizadoras reforçadas com fios de aço ou fibra de vidro movem o braço do pantógrafo com precisão micrométrica.",
      "5. A frenagem ocorre com controle de rampa para evitar vibrações parasitas.",
      "6. A agulha penetra exatamente na coordenada matemática (X, Y) calculada no arquivo de matriz.",
      "7. A calibração de corrente garante que os motores operem com temperatura controlada abaixo de 60°C."
    ],
    "beginnerExplanation": "É a força elétrica dos 'motorzinhos' que empurram o bastidor para lá e para cá durante o bordado! Quando você coloca um bastidor grandão com uma jaqueta ou toalha bem pesada, esses motores precisam ter a força certa: se tiverem pouca força, o bastidor 'engasga' e o desenho sai todo torto e deslocado; se tiverem a força calibrada certinho, a máquina borda com precisão de relógio suíço!",
    "applications": [
      "Operação com bastidores magnéticos pesados e bastidores de bonés estruturados",
      "Prevenção de deslocamento de matrizes (perda de coordenadas no meio do bordado)",
      "Bordados em velocidade máxima contínua (850 a 1.000 RPM) sem distorção geométrica",
      "Manutenção e calibração de drivers em máquinas de bordar industriais e semiprofissionais"
    ],
    "technicalDetails": "Os motores de passo modernos utilizam micro-passo (Microstepping) de 1/16 a 1/64 de passo, dividindo cada giro de 1,8° em micropulsos que entregam resolução de posicionamento inferior a 0,01 mm. A corrente de pico varia tipicamente entre 1,5A e 3,5A por fase. O monitoramento de temperatura dos enrolamentos do motor impede a desmagnetização dos ímãs de neodímio do rotor.",
    "commonErrors": [
      "❌ Segurar ou apoiar as mãos no bastidor ou no pantógrafo enquanto a máquina está bordando, forçando o motor a perder passos",
      "❌ Borda peças muito pesadas penduradas para fora da mesa sem apoio, arrastando o bastidor por gravidade",
      "❌ Deixar as correias dentadas dos eixos X/Y muito frouxas (gerando folga) ou muito esticadas (sobrecarregando os rolamentos)",
      "❌ Obstrução física por objetos deixados na mesa da máquina (tesouras, cones de linha) que travam o deslocamento do bastidor"
    ],
    "troubleshootingTips": [
      "Se o bordado sofrer um 'degrau' ou deslocamento lateral repentino: Verifique se o bastidor não bateu em nenhum objeto na mesa ou se a corrente do driver precisa de ajuste",
      "Se os motores ficarem excessivamente quentes (acima de 70°C): Reduza a velocidade geral e verifique a ventilação da caixa eletrônica",
      "Se houver ruído de 'apito agudo' constante nos motores: Verifique o filtro de corrente e a tensão de alimentação da rede elétrica (estabilizador)"
    ],
    "dicaArtrelados": "Nunca deixe peças pesadas (como uma jaqueta de moletom ou toalha de banho grande) penduradas para fora da mesa da máquina durante o bordado: o peso da peça puxa o bastidor para baixo e faz o motor perder o passo! Apoie a sobra da peça sobre uma mesinha auxiliar nivelada.",
    "voceSabia": "Os primeiros motores de passo computadorizados utilizados em bordadeiras industriais na década de 1970 pesavam mais de 10 kg cada um e faziam tanto barulho que os operadores de fábrica precisavam usar protetores auriculares pesados!",
    "practicalExercise": "Com a máquina desligada, movimente o pantógrafo suavemente com as duas mãos para frente, para trás e para os lados. Sinta a suavidade do deslize das correias dentadas e a ausência de solavancos ou folgas mecânicas.",
    "quickSummary": "Controle de força e precisão nos motores X e Y do pantógrafo; garante movimentos suaves sem perda de coordenadas.",
    "relatedTerms": [
      "Servomotor X/Y",
      "Pantógrafo",
      "Área Útil do Bastidor",
      "Painel de Comando"
    ],
    "tags": [
      "n-059",
      "motor de passo",
      "torque",
      "pantografo",
      "eixo x y",
      "mecanica",
      "eletronica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DAHAO TECHNOLOGY. Stepper & Servo Driver Calibration Manual for Industrial Embroidery Machines. Beijing, 2021.",
      "ORIENTAL MOTOR CO. Stepping Motor Torque Characteristics & Microstepping Resolution in Automation. Technical Papers, 2020."
    ]
  },
  {
    "id": "non-woven-termocolante-fusible-tear-away",
    "code": "N-060",
    "letter": "N",
    "term": "Non-Woven Termocolante / Entretela Rasga-Fácil Termoaderente (Fusible Tear-Away)",
    "pronunciation": "non-wó-ven ter-mo-co-lan-te / fu-si-bol tiar a-uei",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Estabilizadores & Entretelas",
    "summary": "Entretela de tecido não tecido (TNT) com uma face revestida por resina termoplástica que adere temporariamente ao tecido com o calor do ferro de passar, dispensando o uso de cola spray no ateliê.",
    "origin": "Do latim 'therme' (calor) + 'fusibilis' (que se funde), desenvolvida pela Freudenberg e Pellon na década de 1980 para simplificar a estabilização de tecidos delicados e evitar aerossóis de cola.",
    "definition": "O Non-Woven Termocolante (ou Entretela Rasga-Fácil Termoaderente / Iron-On Tear-Away) é um estabilizador de alta tecnologia para bordado computadorizado fabricado com fibras isotrópicas de celulose e poliéster, cuja face de contato recebe uma camada pontilhada de microgrânulos de poliamida termofusível. Ao passar o ferro doméstico morno (110°C a 130°C) por 5 a 10 segundos, a resina amolece e adere uniformemente a toda a superfície do tecido, transformando o tecido e a entretela em um único bloco estável e sem bolhas. Após o bordado, a entretela rasga de forma limpa e os resíduos de resina se desprendem suavemente na primeira lavagem.",
    "howItWorks": [
      "1. Corta-se um pedaço da entretela termocolante ligeiramente maior que a área do bastidor.",
      "2. Posiciona-se o lado brilhante/áspero (lado com a resina adesiva) contra o avesso do tecido.",
      "3. Pressiona-se o ferro morno a seco (sem vapor) por 8 a 10 segundos sobre a entretela.",
      "4. O tecido e a entretela ficam perfeitamente colados sem nenhuma ruga ou bolha de ar.",
      "5. O conjunto é preso no bastidor como uma única folha de tecido firme.",
      "6. A máquina borda com precisão absoluta de alinhamento.",
      "7. Ao terminar, rasga-se o excesso de entretela com as mãos rente aos pontos de forma rápida e limpa."
    ],
    "beginnerExplanation": "É a entretela 'mágica' com cola seca que você gruda no pano usando o ferro de passar roupa! Você passa o ferro no verso e ela gruda lisinha sem nenhuma ruga, sem precisar usar cola spray (que suja tudo no ateliê e faz espirrar cheiro ruim). Você borda com o tecido super firme e depois só puxa a entretela com a mão que ela rasga facinho!",
    "applications": [
      "Bordado em tecidos finos e escorregadios (cetim, seda, percal, cambraia e viscose)",
      "Bordado de golas, punhos, bolsos e peças pequenas de camisaria",
      "Alternativa saudável e ecológica para ateliês fechados que evitam o uso de sprays adesivos",
      "Prevenção de franzimento em tecidos com elasticidade suave sem deixar resíduos pegajosos na agulha"
    ],
    "technicalDetails": "A resina termofusível é composta por microgrânulos de copoliéster ou copoliamida com ponto de fusão entre 105°C e 125°C e gramatura de cola de 10 a 15 g/m² sobre base de TNT de 45 g/m² a 55 g/m². Essa resina não é permanente e se degrada com a ação mecânica da lavagem com água e sabão neutro, devolvendo a maciez natural ao tecido.",
    "commonErrors": [
      "❌ Passar o ferro do lado errado (com a resina para cima), colando a entretela na sola do ferro de passar",
      "❌ Usar ferro com vapor ligado, impedindo a polimerização correta da resina a seco",
      "❌ Usar temperatura excessivamente alta (acima de 160°C), queimando o TNT e endurecendo a resina",
      "❌ Tentar usar entretela termocolante rasga-fácil em malhas de alta elasticidade que exigem entretela recortável definitiva"
    ],
    "troubleshootingTips": [
      "Se a entretela não colar direito: Aumente ligeiramente a temperatura do ferro e pressione por mais 5 segundos sem arrastar o ferro",
      "Se a resina grudar na base do ferro por engano: Limpe a sola do ferro morno com um pano grosso embebido em bicarbonato de sódio ou removedor próprio de ferro",
      "Se a entretela for difícil de rasgar: Apoie os pontos com o polegar enquanto puxa a entretela no sentido perpendicular à costura"
    ],
    "dicaArtrelados": "Para quem tem ateliê em apartamento ou tem sensibilidade ao cheiro de cola spray, a entretela rasga-fácil termocolante é a melhor escolha: você cola com o ferro em 10 segundos, não respira produtos químicos e o tecido fica com estabilidade 100% perfeita!",
    "voceSabia": "As primeiras entretelas termoaderentes foram desenvolvidas na Alemanha em 1948 para a confecção de colarinhos e punhos de camisas masculinas que precisavam ficar impecavelmente engomados mesmo após longas jornadas de trabalho!",
    "practicalExercise": "Pegue um pedaço de tecido fininho de percal ou cambraia. Cole um pedaço de entretela rasga-fácil termocolante com ferro morno por 8 segundos. Monte no bastidor e borde um monograma. Rasgue a entretela ao redor e sinta a limpeza e a firmeza da peça pronta.",
    "quickSummary": "Entretela rasga-fácil com resina que cola no tecido com o ferro de passar; dispensa spray e garante firmeza sem bolhas.",
    "relatedTerms": [
      "Entretela Rasga-Fácil",
      "Non-Woven / TNT",
      "Flutuação de Tecido (Floating)",
      "Gramatura da Entretela"
    ],
    "tags": [
      "n-060",
      "termocolante",
      "fusible tear-away",
      "iron-on",
      "entretela com cola",
      "sem spray",
      "artrelados"
    ],
    "bibliographicReferences": [
      "FREUDENBERG PERFORMANCE MATERIALS. Fusible Interlinings & Stabilizers: Technical Application Guide. Weinheim, 2021.",
      "PELLON CONSUMER PRODUCTS. Guide to Fusible Embroidery Stabilizers and Fabric Backings. Technical Papers, 2020."
    ],
    "recommendedSettings": {
      "speedPPM": "750-850 PPM",
      "needleType": "75/11 SES ou RG",
      "stabilizer": "Entretela Rasga-Fácil Termocolante 50g colada a ferro (120°C a seco)",
      "threadTension": "Padrão (3.5)",
      "density": "0,38 mm a 0,40 mm"
    }
  },
  {
    "id": "no-de-encerramento-rotina-manutencao",
    "code": "N-061",
    "letter": "N",
    "term": "Nó de Encerramento do Ciclo de Produção e Manutenção Preventiva (End-of-Shift Routine)",
    "pronunciation": "nó de en-cer-ra-men-to do ci-clo de pro-du-ção",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Operação da Máquina",
    "summary": "Protocolo operacional diário de final de turno no ateliê para limpeza da lançadeira, remoção de fiapos, lubrificação das guias, desligamento seguro e arquivamento de matrizes de bordado.",
    "origin": "Do conceito de '5S' da manufatura industrial japonesa (Seiri, Seiton, Seiso, Seiketsu, Shitsuke), adaptado para a gestão de ateliês e fábricas de bordado computadorizado.",
    "definition": "O Nó de Encerramento do Ciclo de Produção (ou Rotina de Fim de Expediente) é o conjunto padronizado de boas práticas e procedimentos operacionais executados pelo bordador ao término do dia de trabalho. Esse protocolo envolve o corte seguro e estacionamento das linhas superiores, a remoção da chapa de agulha para aspirar fiapos e poeira têxtil acumulada na lançadeira, a aplicação de gotas de óleo lubrificante mineral nos pontos vitais, o desligamento elétrico correto no painel e estabilizador, a cobertura da máquina com capa protetora contra poeira e a organização dos arquivos e ferramentas de trabalho no computador e na bancada.",
    "howItWorks": [
      "1. Ao concluir o último bordado, o operador retira o bastidor do pantógrafo e limpa a peça.",
      "2. Corta as linhas superiores deixando caudas de segurança nos guias-fios.",
      "3. Desliga a lâmpada de trabalho e retira a caixa de bobina.",
      "4. Utiliza um pincel macio de cerdas naturais ou mini-aspirador para remover fiapos da lançadeira e da barra de agulha (nunca usar ar comprimido forte).",
      "5. Aplica 1 gota de óleo mineral na pista da lançadeira rotativa e gira o volante manualmente para distribuir o filme lubrificante.",
      "6. Desliga a máquina no botão principal e em seguida desliga o estabilizador/filtro de linha da tomada.",
      "7. Cobre a bordadeira com sua capa antipoeira de tecido ou vinil.",
      "8. Salva e faz backup das matrizes finalizadas no computador do ateliê."
    ],
    "beginnerExplanation": "É o ritual diário de carinho e cuidado que todo bordador de sucesso faz com a sua máquina antes de ir dormir! Você tira a caixinha da bobina, passa um pincelzinho macio para tirar todos os pelinhos de linha do dia, pinga uma gotinha de óleo na pista da lançadeira, desliga tudo na tomada com segurança e coloca a capinha protetora. Fazendo isso todo dia, a sua máquina dura a vida inteira sem dar dor de cabeça!",
    "applications": [
      "Manutenção preventiva diária de máquinas de bordar domésticas, semiprofissionais e industriais",
      "Prevenção de travamentos, quebras de agulha e queima de placas eletrônicas por surtos elétricos noturnos",
      "Aumento da vida útil das engrenagens, rolamentos e lançadeiras rotativas",
      "Organização e padronização do fluxo de trabalho e higiene no ateliê"
    ],
    "technicalDetails": "A poeira têxtil (microfibras de poliéster e resinas de entretela) é higroscópica e absorve umidade e óleo, transformando-se em uma pasta abrasiva que acelera o desgaste das peças metálicas em até 400%. O uso de capas protetoras evita a sedimentação de poeira nos sensores ópticos e no encoder do eixo principal durante a noite.",
    "commonErrors": [
      "❌ Soprar ar com a boca ou com compressor de ar direto no fundo da lançadeira, empurrando os fiapos de linha para dentro dos rolamentos selados e motores",
      "❌ Deixar a máquina conectada direto na tomada durante a noite durante tempestades sem filtro de linha",
      "❌ Encharcar a lançadeira com óleo em excesso, espirrando óleo no primeiro bordado do dia seguinte e manchando tecidos brancos",
      "❌ Não cobrir a máquina com capa protetora, acumulando poeira ambiental nas canaletas do pantógrafo"
    ],
    "troubleshootingTips": [
      "Se o primeiro bordado da manhã seguinte sair manchado de óleo: Costure um retalho de tecido teste por 200 pontos antes de colocar a peça do cliente",
      "Se a máquina amanhecer dura ou pesada: Aplique 2 gotas de óleo na pista da lançadeira e rode a máquina em vazio por 30 segundos",
      "Se o painel apresentar erro de sensor ao ligar: Limpe os sensores ópticos de rotação com um cotonete seco sem álcool"
    ],
    "dicaArtrelados": "Deixe um retalho de tecido de algodão branco no bastidor montado na máquina ao final do expediente: de manhã cedo, o primeiro teste é feito nele para absorver qualquer micro-gotinha de óleo que tenha sobrado na lançadeira, garantindo que a toalha do seu cliente fique 100% imaculada!",
    "voceSabia": "Em fábricas de bordado no Japão, a rotina de limpeza e lubrificação de fim de turno é chamada de 'Souji' e é considerada uma atitude sagrada de respeito e gratidão à máquina que traz o sustento da família!",
    "practicalExercise": "Ao final do seu dia de bordado hoje, execute a rotina completa dos 5 passos Artrelados: 1) Pincelar fiapos da lançadeira; 2) Uma gota de óleo na pista; 3) Girar o volante manualmente; 4) Desligar na tomada; 5) Colocar a capa protetora. Sinta a paz e o profissionalismo do seu ateliê.",
    "quickSummary": "Protocolo diário de limpeza de fiapos, lubrificação com 1 gota de óleo, desligamento seguro e capa protetora para conservar a máquina.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Caixa de Bobina",
      "Manutenção Preventiva",
      "Normas Técnicas de Segurança em Bordadeiras"
    ],
    "tags": [
      "n-061",
      "rotina de encerramento",
      "manutencao diaria",
      "limpeza",
      "lubrificacao",
      "oleo",
      "5s",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JAPAN SEWING MACHINERY ASSOCIATION (JASMA). Daily Maintenance & Operational Standards for Industrial Embroidery. Tokyo, 2021.",
      "BROTHER INDUSTRIES. Care, Maintenance and Daily Inspection Procedures for PR & VR Series. Brother Service Manual, 2022."
    ]
  },
  {
    "id": "n-067-nitretacao-gasosa-e-tratamento-de-superficie-em-agulhas-e-lancadeiras",
    "code": "N-067",
    "term": "Nitretação Gasosa e Tratamento de Superfície em Agulhas e Lançadeiras (Gas Nitriding & Plasma Surface Hardening)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina e Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim nitrum (nitrogênio, salitre) e do grego gignomai (gerar). Processo metalúrgico termoquímico de endurecimento superficial desenvolvido no início do século XX na Alemanha por Adolf Fry.",
    "summary": "Tratamento térmico de infusão de nitrogênio no aço que eleva a dureza para mais de 1.000 HV, evitando desgaste e calor em alta rotação.",
    "definition": "A nitretação gasosa e tratamento iônico de superfície (Gas & Plasma Nitriding Hardening) é o processo termoquímico e metalúrgico aplicado a componentes de alto atrito em máquinas de bordar industriais, tais como pontas de lançadeiras rotativas, guias de fio e agulhas de alta performance (como as linhas Groz-Beckert GEBEDUR e Schmetz Gold). Ao expor as peças a uma atmosfera enriquecida de amônia ou plasma de nitrogênio a cerca de 500 °C a 550 °C, átomos de nitrogênio se difundem na camada superficial do aço, formando uma carcaça ultrafina de nitretos de ferro de dureza extrema (> 1.000 a 1.200 HV na escala Vickers) com coeficiente de atrito reduzido e excepcional resistência ao desgaste abrasivo e térmico a mais de 1.000 RPM.",
    "technicalDetails": "Dureza superficial atingida: 1.000 a 1.200 HV (equivalente a > 70 HRC). Profundidade da camada de nitretação: 10 µm a 25 µm. Temperatura de processo: 520 °C ± 10 °C. Coeficiente de atrito a seco: < 0,15.",
    "howItWorks": [
      "1. As lançadeiras e agulhas de aço-ferramenta de precisão são usinadas com tolerâncias micrométricas.",
      "2. As peças são colocadas em um reator sob vácuo e banhadas por gás de nitrogênio ionizado a 520 °C.",
      "3. O nitrogênio penetra na estrutura cristalina do metal criando uma camada dourada/prateada de nitretos ultra-resistentes.",
      "4. Instaladas na máquina de bordar, as peças trabalham a 1.200 rotações por minuto com atrito reduzido.",
      "5. A ponta da lançadeira não arredonda nem gera rebarbas mesmo após milhões de laçadas contra linhas sintéticas abrasivas.",
      "6. A durabilidade do conjunto de costura aumenta em até 5 a 8 vezes em relação ao aço polido convencional."
    ],
    "beginnerExplanation": "É um tratamento térmico super especial de alta tecnologia que 'blinda' o metal da pontinha da lançadeira e das agulhas douradas da máquina com nitrogênio. Isso faz o metal ficar tão duro e resistente quanto uma pedra preciosa, permitindo que a máquina trabalhe o dia todo em velocidade máxima sem esquentar e sem desgastar a ponta da peça.",
    "applications": [
      "Agulhas industriais de ponta reforçada (série Titânio/Nitreto de Titânio e GEBEDUR)",
      "Lançadeiras rotativas de alta velocidade para produção contínua em ateliês e confecções",
      "Guias de linha e ilhoses cerâmico-metálicos sujeitos a atrito contínuo de fios metálicos e sintéticos",
      "Lâminas e contra-facas do sistema de corte automático de linha"
    ],
    "commonErrors": [
      "❌ Lixar a pista da lançadeira ou a ponta da agulha com lixas manuais abrasivas grossas, removendo a camada endurecida de nitretação",
      "❌ Utilizar produtos químicos desengraxantes ácidos que atacam a camada de difusão de nitreto",
      "❌ Rodar a lançadeira completamente seca sem lubrificação regular de óleo mineral fino"
    ],
    "troubleshootingTips": [
      "Para limpar lançadeiras nitretadas, utilize apenas pincel macio, ar seco e solvente neutro próprio para máquinas de bordar",
      "Prefira agulhas com revestimento nitretado (douradas) ao bordar tecidos grossos (couro, lona, sarja pesada) ou usar linhas metalizadas",
      "Inspecione a ponta da lançadeira com uma lente de aumento de 10x: a superfície nitretada deve se manter lisa e espelhada sem riscos"
    ],
    "dicaArtrelados": "As famosas agulhas douradas que a gente adora no ateliê passam por esse tratamento de nitretação! Elas custam um pouquinho mais que as agulhas comuns, mas duram até cinco vezes mais e não esquentam mesmo bordando jaquetas jeans ou toalhas felpudas o dia inteiro!",
    "voceSabia": "O processo de nitretação gasosa foi originalmente desenvolvido para blindar canhões e motores de aeronaves de caça na Primeira Guerra Mundial, sendo adaptado para a indústria têxtil e de bordados de precisão pela japonesa Koban e pela alemã Schmetz na década de 1970.",
    "practicalExercise": "Pegue uma agulha dourada (Titanium/Gold) e uma agulha comum prateada que já foram bastante usadas no seu ateliê. Examine as duas sob uma boa luz com uma lupa de bordado: observe como a agulha dourada preserva a ponta perfeita e sem marcas de queima por muito mais tempo!",
    "quickSummary": "Tratamento metalúrgico de alta tecnologia com nitrogênio que deixa agulhas e lançadeiras ultra duras e resistentes ao calor.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Agulha de Titânio (Titanium Needle)",
      "Koban Hooks e Geometria de Ponta de Lançadeira Japonesa",
      "Mecânica da Máquina e Manutenção"
    ],
    "tags": [
      "n-067",
      "nitretacao",
      "tratamento de superficie",
      "metalurgia",
      "lancadeira",
      "agulhas",
      "durabilidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT. GEBEDUR Titanium Nitride Coating Technology and Needle Durability Manual. Albstadt, 2023.",
      "KOBAN HOOKS. Surface Engineering, Gas Nitriding and Hook Race Maintenance Guide. Tóquio, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "n-068-nodulo-de-retencao-e-mola-trava-da-caixa-de-bobina",
    "code": "N-068",
    "term": "Nódulo de Retenção e Mola Trava da Caixa de Bobina (Bobbin Case Latch & Anti-Spin Retention Spring)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina e Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim nodulus (pequeno nó, ressalto de encaixe) e retentio (ato de reter, travar). Engenharia de precisão de sistemas de lançadeira oscilante e rotativa tipo L e M.",
    "summary": "Lingueta móvel e micro-mola arqueada interna que travam a caixa de bobina no pino central e freiam a inércia da carretilha.",
    "definition": "O nódulo de retenção e mola trava da caixa de bobina (Bobbin Case Latch Mechanism & Anti-Spin Brake Spring) é o conjunto de retenção mecânica de precisão composto por uma lingueta articulada com mola de retorno localizada na face externa da caixa de bobina e uma mola circular de aço arqueada (freio anti-giro / anti-spin spring) instalada no fundo do seu compartimento interno. Sua dupla função técnica é: 1) travar a caixa de bobina com folga axial controlada (< 0,05 mm) sobre o pino central da lançadeira rotativa, impedindo seu desprendimento violento a 1.000 RPM; e 2) exercer uma leve pressão de frenagem mecânica contra a base da carretilha, impedindo que ela continue girando por inércia ao término de cada ponto rápido, eliminando a formação de nós, folgas de linha e 'ninhos de passarinho' no avesso.",
    "technicalDetails": "Pressão da mola anti-giro interna: 1,5 cN a 3,0 cN. Folga axial da lingueta no pino da lançadeira: 0,03 mm a 0,08 mm. Liga: Aço inoxidável cromo-níquel antimagnético.",
    "howItWorks": [
      "1. A bordadeira puxa a lingueta externa (latch) com os dedos para abrir as garras internas de retenção.",
      "2. Encaixa a caixa de bobina no pino central da lançadeira rotativa até ouvir o 'clique' mecânico característico.",
      "3. A lingueta se fecha travando no rebaixo chanfrado do pino da lançadeira.",
      "4. No interior da caixa, a carretilha comprime suavemente a mola arqueada anti-giro (anti-spin spring).",
      "5. Durante a costura em alta velocidade, quando a máquina freia bruscamente para trocar de direção ou cortar o fio, a mola interna freia o carretel instantaneamente.",
      "6. A linha inferior não desenrola frouxa e o ponto de bordado mantém a tensão calibrada de 20 a 25 gf de ponta a ponta."
    ],
    "beginnerExplanation": "É aquela alavanquinha de metal com mola que a gente puxa com o dedo para colocar ou tirar a caixinha da bobina na máquina, e a molinha redonda que fica lá no fundinho da caixinha. A alavanquinha serve para prender a caixa firme sem cair, e a molinha do fundo funciona como um 'freio de carro' para a carretilha parar de rodar na hora certa e não deixar a linha embolar embaixo do tecido!",
    "applications": [
      "Travamento firme e seguro da caixa de bobina em máquinas industriais e domésticas",
      "Eliminação de laçadas soltas e nós de linha inferior no início e fim de blocos de pontos",
      "Manutenção e substituição preventiva de caixas de bobina com molas cansadas ou desgastadas",
      "Operação contínua em alta velocidade sem risco de desencaixe da carretilha"
    ],
    "commonErrors": [
      "❌ Encaixar a caixa de bobina empurrando com força sem puxar a lingueta, desgastando o pino central da lançadeira",
      "❌ Retirar a molinha arqueada do fundo da caixa de bobina achando que é 'sujeira' ou 'peça solta', fazendo a carretilha girar solta e embolar a linha",
      "❌ Deixar fiapos de poeira e linha acumulados atrás da lingueta, impedindo o travamento completo no pino"
    ],
    "troubleshootingTips": [
      "Sempre puxe a lingueta com a ponta dos dedos ao colocar e tirar a caixa de bobina da máquina",
      "Ao ouvir um estalo forte embaixo da chapa, pare a máquina imediatamente e verifique se a lingueta está travada corretamente",
      "Verifique se a molinha de freio no fundo da caixa de bobina não está amassada ou com ferrugem: se estiver gasta, substitua a caixa de bobina"
    ],
    "dicaArtrelados": "Sempre que for encaixar a caixa de bobina na máquina, escute com carinho o 'clique'! Se ela não fizer o clique característico, ela não travou direito e pode soltar girando a mil por hora, quebrando a agulha e a lançadeira. Atenção a esse clique salva sua máquina!",
    "voceSabia": "A molinha de freio anti-giro (anti-spin spring) foi inventada no Japão na década de 1960. Antes dela, as máquinas industriais tinham que rodar em velocidades 40% menores para evitar que a carretilha girasse solta por inércia ao cortar o fio.",
    "practicalExercise": "Retire a caixa de bobina da sua máquina e olhe com uma boa luz lá no fundo onde a carretilha se assenta: observe a molinha de aço em formato de 'estrela' ou 'arco'. Pressione levemente com o dedo para sentir a elasticidade do freio!",
    "quickSummary": "Lingueta e mola de freio que travam a caixa de bobina e impedem que a carretilha gire solta e embole a linha.",
    "relatedTerms": [
      "Caixa de Bobina (Bobbin Case)",
      "Lançadeira Rotativa",
      "Tensão da Linha da Bobina",
      "Mecânica da Máquina e Manutenção"
    ],
    "tags": [
      "n-068",
      "caixa de bobina",
      "latch",
      "freio anti-giro",
      "mola trava",
      "retencao",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA APPLIANCE CO. Bobbin Case Mechanisms, Anti-Spin Spring Dynamics and Latch Assembly. Tóquio, 2023.",
      "TAJIMA. Rotary Hook Maintenance and Bobbin Case Engagement Standards. Nagoya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "n-069-neoprene-e-tecidos-emborrachados-bordados-em-acessorios-termicos",
    "code": "N-069",
    "term": "Neoprene e Tecidos Emborrachados: Bordados em Acessórios Térmicos (Neoprene Rubber & Foam-Laminated Embroidery Workflow)",
    "letter": "N",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da marca registrada Neoprene (elastômero de policloropreno inventado pela empresa química DuPont em 1931). Substrato emborrachado com revestimento têxtil bifacial.",
    "summary": "Parâmetros práticos com entretela rasgável pesada, agulha de ponta arredondada e densidade moderada para bordar neoprene sem furar.",
    "definition": "O bordado em neoprene (borracha sintética de policloropreno expandido de 2 mm a 5 mm de espessura com revestimento têxtil em poliéster ou poliamida) e materiais espumados/emborrachados é amplamente utilizado na confecção de porta-latas térmicos, capas de notebook, mousepads, nécessaires, bolsas esportivas e cintas modeladoras. Devido à sua estrutura elastomérica densa e com memória elástica, exige cuidados técnicos específicos: fixação no bastidor com entretela rasgável encorpada (70g a 80g) ou montagem flutuante com adesivo spray (para não marcar a borracha), agulhas ponta arredondada SES nº 75/11 ou 80/12, compensação de repuxo generosa (0,45 mm a 0,55 mm) e controle de densidade (0,42 mm a 0,48 mm) para evitar picotar e perfurar o miolo emborrachado.",
    "technicalDetails": "Espessura típica do substrato: 2,5 mm a 4,0 mm. Agulha: 75/11 SES (Light Ball Point) com revestimento de titânio para reduzir aquecimento por atrito. Densidade recomendada: 0,45 mm com underlay em contorno simples.",
    "howItWorks": [
      "1. A bordadeira prepara a placa de neoprene cortada no tamanho da peça (ex: porta-copos ou porta-garrafas térmico).",
      "2. Coloca uma folha de entretela rasgável de 80g firme no bastidor e aplica uma névoa de adesivo temporário em spray.",
      "3. Posiciona a placa de neoprene sobre a entretela (método de montagem flutuante, evitando prender a borracha nos aros do bastidor para não deixar vincos permanentes).",
      "4. Seleciona agulha ponta bola fina nº 75/11 e calibra a velocidade para 650–700 RPM.",
      "5. A máquina executa a matriz com pontos cheios bem compensados e sem perfurações excessivas.",
      "6. Ao finalizar, retira a peça e destaca a entretela pelo verso com facilidade.",
      "7. O acessório térmico fica impecável, com bordado em relevo macio e sem marcas na borracha."
    ],
    "beginnerExplanation": "É o passo a passo para bordar naquele material emborrachado gostoso usado em porta-garrafas de cerveja, porta-copos, capas de notebook e nécessaires térmicas. O grande segredo é não prender o neoprene direto no aro do bastidor para não amassar a borracha com marcas feias: você prende a entretela no bastidor e cola o neoprene por cima com colinha spray!",
    "applications": [
      "Porta-latas, porta-garrafas de cerveja e coolers térmicos personalizados para festas e brindes",
      "Capas de notebook, tablets, cases de fones de ouvido e nécessaires térmicas",
      "Mousepads gamers e tapetes de mesa ergonômicos personalizados com logotipos",
      "Cintas modeladoras, suportes ortopédicos e roupas esportivas aquáticas"
    ],
    "commonErrors": [
      "❌ Apertar o neoprene diretamente dentro dos aros do bastidor comum com força excessiva, deixando marcas de vinco esmagado que nunca mais saem da borracha",
      "❌ Usar agulhas de ponta fina cortante (Sharp) com densidade muito pesada, picotando a borracha como se fosse um selo postal e rasgando a peça",
      "❌ Bordar em velocidade máxima de 1.000 RPM, superaquecendo a agulha no atrito contra a borracha e derretendo a linha de poliéster"
    ],
    "troubleshootingTips": [
      "Utilize o método de bordado flutuante (colando o neoprene sobre a entretela adesivada no bastidor) ou use bastidores magnéticos",
      "Se a linha estiver desfiando por aquecimento no miolo da borracha, reduza a velocidade da máquina para 600 RPM",
      "Programe um underlay leve em ponto corrido para firmar o tecido superficial do neoprene antes de preencher com ponto cheio"
    ],
    "dicaArtrelados": "Brindes em neoprene para eventos e casamentos (como porta-latas e porta-garrafas) têm um custo de material super baixo e margem de lucro excelente no ateliê! Usando a técnica de colagem flutuante, você borda dezenas de peças por dia com acabamento de boutique!",
    "voceSabia": "O neoprene foi desenvolvido nos laboratórios da DuPont nos EUA em 1931 pelo cientista Wallace Carothers (o mesmo inventor do nylon), tornando-se famoso no mundo inteiro nos anos 1950 com as primeiras roupas térmicas de mergulho para surfistas na Califórnia.",
    "practicalExercise": "Pegue um pedaço de neoprene de 3 mm. Coloque uma entretela rasgável no bastidor com cola spray e assente o neoprene por cima. Borde as iniciais do seu nome com agulha 75/11 e veja como o relevo fica macio e luxuoso!",
    "quickSummary": "Técnica de montagem flutuante com cola spray e agulha ponta bola para bordar acessórios em neoprene sem vincos.",
    "relatedTerms": [
      "Bordado Flutuante (Floating Technique)",
      "Entretela Rasgável (Tear-Away)",
      "Compensação de Encolhimento (Pull Compensation)",
      "Técnicas de Bordado"
    ],
    "tags": [
      "n-069",
      "neoprene",
      "emborrachado",
      "porta-latas",
      "acessorios termicos",
      "brindes",
      "flutuante",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Guia Prático de Bordado em Neoprene, Couro Sintético e Substratos Especiais. São Paulo, 2024.",
      "DUPONT TEXTILES. Neoprene Technical Specifications and Industrial Processing Guidelines. Wilmington, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "n-070-no-cego-e-embolamento-de-linha-no-inicio-do-ponto",
    "code": "N-070",
    "term": "Nó Cego e Embolamento de Linha no Início do Ponto (Birdnesting & Thread Knot at Stitch Start)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Diagnóstico e Resolução de Problemas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do português nó cego (entrelaçamento denso e travado) e do inglês birdnesting (formação de ninho de passarinho embaixo do tecido). Ocorrência operacional clássica em bordado computadorizado.",
    "summary": "Diagnóstico e eliminação das causas do embolamento de linha debaixo da chapa logo nos primeiros 3 pontos do bordado.",
    "definition": "O nó cego e embolamento de linha inicial (conhecido internacionalmente como Birdnesting ou Thread Jamming at Startup) é uma falha operacional caracterizada pelo acúmulo desordenado de dezenas de laçadas de fio superior sob a chapa de agulha e no interior da lançadeira nos primeiros 3 a 5 pontos após um corte de linha (Trim) ou troca de cor. Esse emaranhado trava o movimento da lançadeira e do pantógrafo, podendo entortar a barra de agulha e romper o tecido. Suas causas mecânicas primárias incluem: passagem incorreta da linha superior fora dos discos tensores (tensão superior zero), falha do pegador de linha (wiper/picker) em reter a ponta da linha no corte, ou estica-fio despassado.",
    "technicalDetails": "Tempo crítico de contenção da linha pelo pegador: 80 ms a 120 ms no ciclo de retorno. Tensão residual inicial necessária: > 15 cN nos três primeiros pontos de amarração lenta.",
    "howItWorks": [
      "1. A máquina executa o corte automático de linha e posiciona o cabeçote para iniciar um novo bloco de bordado.",
      "2. Ao descer o primeiro ponto, se a ponta da linha da agulha estiver solta demais ou se a linha escapou do tensor principal, o estica-fio não consegue puxar a laçada de volta para cima.",
      "3. A lançadeira rotativa continua girando a cada volta e puxa mais e mais metros de linha solta para baixo do tecido.",
      "4. Em menos de 2 segundos, forma-se uma massa volumosa de linha embolada (o 'ninho') presa entre a chapa de agulha e a carretilha.",
      "5. O motor detecta sobrecarga de torque e trava a máquina com o alerta: 'Erro de Eixo Principal / Thread Jam'.",
      "6. A intervenção correta exige cortar o ninho com tesoura de precisão por baixo da chapa e repassar a linha inteira pelo tensor."
    ],
    "beginnerExplanation": "É quando a máquina começa a bordar e, de repente, embola um monte de linha debaixo do pano formando um verdadeiro 'ninho de passarinho' que trava tudo! Quase sempre isso acontece porque a linha de cima escapou dos discos de tensão (ficou solta demais) ou porque a pontinha da linha não foi segurada no começo.",
    "applications": [
      "Diagnóstico rápido para destravar a máquina sem puxar o tecido com força e rasgar a peça",
      "Regulagem do sistema de pegador de linha (wiper) e corte automático",
      "Ajuste da velocidade de arranque lento (Slow Start) nos primeiros 3 pontos da matriz",
      "Treinamento de operadores para passagem correta de linha com calcador levantado/abaixado"
    ],
    "commonErrors": [
      "❌ Puxar o tecido e o bastidor com força bruta quando a máquina travar, empenando a barra de agulhas e entortando os eixos do pantógrafo",
      "❌ Passar a linha superior na máquina com o calcador abaixado (o que impede a linha de entrar fundo entre os discos de tensão)",
      "❌ Tentar recomeçar o bordado sem limpar os fiapos de linha presos dentro da pista da lançadeira"
    ],
    "troubleshootingTips": [
      "Sempre passe a linha superior na máquina com o pé-calcador LEVANTADO, garantindo que o fio entre perfeitamente entre os pratos tensores",
      "Se a máquina travar com ninho de linha, solte o bastidor com cuidado, use uma tesourinha de bico curvo para cortar as linhas por baixo e limpe a lançadeira com pincel",
      "Ative a função de 'Início Lento' (Slow Start / 3 Slow Stitches) no painel da sua máquina para os primeiros pontos formarem amarração perfeita"
    ],
    "dicaArtrelados": "Se a sua máquina embolou linha embaixo logo no comecinho do bordado, 99% das vezes a culpa é da linha de cima que pulou para fora do tensor! Não precisa mexer na bobina: apenas retire a linha de cima e passe de novo do começo com o pezinho levantado!",
    "voceSabia": "O termo 'Birdnesting' (fazer ninho de pássaro) começou a ser usado por alfaiates e costureiras na Inglaterra vitoriana do século XIX ao descrever o emaranhado fofo de linha que parecia exatamente um ninho de pardal.",
    "practicalExercise": "Simule a passagem de linha na sua máquina: passe a linha uma vez com o calcador levantado e puxe a ponta para sentir o fio passar livre; depois abaixe o calcador e puxe de novo para sentir o tensor 'segurar' o fio com firmeza!",
    "quickSummary": "Embolamento de linha debaixo do tecido no início do bordado, quase sempre causado por linha solta fora do tensor.",
    "relatedTerms": [
      "Tensão da Linha Superior",
      "Lançadeira Rotativa",
      "Corte Automático de Linha (Auto-Trim)",
      "Diagnóstico e Resolução de Problemas"
    ],
    "tags": [
      "n-070",
      "no cego",
      "embolamento",
      "birdnesting",
      "ninho de linha",
      "travamento",
      "solucao de problemas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Guia Definitivo de Diagnóstico e Resolução de Falhas Mecânicas no Bordado Eletrônico. São Paulo, 2024.",
      "SCHMETZ. Troubleshooting Needle Breakage and Thread Jamming in Automatic Embroidery. Herzogenrath, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "n-071-nema-23-e-padroes-de-servomotores-de-passo-do-pantografo",
    "code": "N-071",
    "term": "NEMA 23 e Padrões de Servomotores de Passo do Pantógrafo (NEMA 23 & Hybrid Stepper Motor Standards)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Eletrônica da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Da National Electrical Manufacturers Association (NEMA - Associação Nacional de Fabricantes Elétricos dos EUA, fundada em 1926). Padrão global de dimensões de flange e carcaça de motores elétricos.",
    "summary": "Padrão dimensional de motores industriais que movimentam os eixos X e Y do bastidor com precisão de micro-passos e alto torque.",
    "definition": "O padrão NEMA 23 (com flange de montagem frontal quadrada de 2,3 x 2,3 polegadas ou 57 x 57 mm) e os servomotores híbridos de malha fechada (Closed-Loop Stepper / AC Servo) constituem a tecnologia de acionamento cinemático padrão dos eixos X e Y do pantógrafo em máquinas de bordar comerciais e industriais. Com ângulo de passo nativo de 1,8° por pulso (200 passos por volta completa) subdividido eletronicamente por microstepping (de 1/16 até 1/64 de passo) e codificadores ópticos de posição (encoders de 1.000 a 4.000 pulsos/rotação), esses motores entregam torque de sustentação de 1,2 Nm a 3,0 Nm, garantindo movimentação precisa, rápida e silenciosa do bastidor mesmo com tecidos pesados.",
    "technicalDetails": "Dimensão da flange: 57,2 mm x 57,2 mm (NEMA 23). Resolução angular por microstepping: até 0,028° por pulso. Torque de retenção (Holding Torque): 1,8 Nm a 2,8 Nm. Corrente nominal por fase: 2,5 A a 4,2 A DC.",
    "howItWorks": [
      "1. A placa controladora DSP da máquina calcula as coordenadas vetoriais do próximo ponto a ser bordado.",
      "2. Envia um trem de pulsos digitais de direção e passo (Step/Dir) para os drivers de potência NEMA 23 dos eixos X e Y.",
      "3. As bobinas eletromagnéticas do motor são excitadas em sequência de micro-passos suaves.",
      "4. O eixo do motor gira as polias sincronizadoras que tracionam as correias dentadas de poliuretano com alma de aço.",
      "5. O pantógrafo desloca o bastidor com a peça exatamente para a nova coordenada em menos de 40 milissegundos.",
      "6. O encoder traseiro confirma a posição milimétrica em tempo real com tolerância de 0,01 mm.",
      "7. A agulha desce no ponto exato planejado na matriz sem desvios de contorno."
    ],
    "beginnerExplanation": "É o tipo e o tamanho dos motores elétricos super fortes e precisos que ficam escondidos dentro da máquina para movimentar o bastidor para a esquerda, direita, frente e trás. O padrão 'NEMA 23' define o tamanho quadrado de ferro do motor, que é forte o suficiente para puxar até toalhas e casacos pesados bem rápido sem perder o lugar certo do ponto.",
    "applications": [
      "Acionamento dos eixos X e Y do pantógrafo em máquinas de bordar mono e multicabeças",
      "Substituição e manutenção de motores de passo e servomotores de mesa pantográfica",
      "Garantia de precisão milimétrica em contornos finos de monogramas e apliques",
      "Operação com baixo nível de ruído e sem aquecimento excessivo em jornadas de produção"
    ],
    "commonErrors": [
      "❌ Substituir um motor NEMA 23 original por um motor menor e mais fraco (NEMA 17), causando perda de passos em matrizes com movimentos rápidos",
      "❌ Desconectar os cabos dos motores com a máquina ligada na tomada, queimando instantaneamente os transistores do driver de potência",
      "❌ Deixar poeira e fiapos obstruírem o corpo de alumínio do motor, impedindo a dissipação natural de calor"
    ],
    "troubleshootingTips": [
      "Se o bordado estiver saindo 'deslocado' para o lado (perda de passos), verifique se as correias dentadas do motor não estão frouxas",
      "Os motores NEMA 23 podem trabalhar mornos ao toque (até 50 °C a 60 °C), o que é perfeitamente normal para motores industriais de passo",
      "Mantenha os conectores e fiações blindadas dos encoders bem fixados para evitar interferências elétricas"
    ],
    "dicaArtrelados": "A mecânica e os motores NEMA 23 são o que garantem que aquele contorno pretinho caia exatamente em cima do desenho sem ficar nem um milímetro fora de lugar! Máquinas com bons servomotores garantem bordados de alta definição que parecem impressos no tecido!",
    "voceSabia": "A padronização NEMA foi criada nos Estados Unidos para que indústrias pudessem comprar motores de diferentes fabricantes mundiais com a certeza de que a furação e os parafusos de encaixe seriam 100% intercambiáveis.",
    "practicalExercise": "Abra a tampa lateral de inspeção da sua máquina (com a máquina desligada) ou procure onde fica o suporte dos eixos X e Y: localize o motor de corpo quadrado de metal (cerca de 6 cm de lado). Esse é o coração do movimento do seu bastidor!",
    "quickSummary": "Padrão de motores elétricos industriais potentes e precisos que movimentam os eixos X e Y do bastidor sem perder pontos.",
    "relatedTerms": [
      "Servomotor de Eixo X e Y",
      "Hardware de Controle DSP e Placa-Mãe",
      "Pantógrafo CNC",
      "Eletrônica da Máquina"
    ],
    "tags": [
      "n-071",
      "nema 23",
      "motor de passo",
      "servomotor",
      "pantografo",
      "eixos x e y",
      "eletronica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "NEMA. Standards Publication ICS 16: Motion Control and Stepper Motor Specifications. Rosslyn, 2022.",
      "TAJIMA. Frame Drive Motor Calibration and NEMA Stepper Maintenance Manual. Nagoya, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "n-072-nomes-compostos-e-centralizacao-optica-em-duas-linhas",
    "code": "N-072",
    "term": "Nomes Compostos e Centralização Óptica em Duas Linhas (Two-Line Compound Names & Visual Hierarchy Layout)",
    "letter": "N",
    "level": "Iniciante 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim nomen (nome próprio de identificação) e do grego optikos (relativo à visão e percepção visual humana). Princípio clássico de diagramação e hierarquia tipográfica.",
    "summary": "Regras de proporção visual e espaçamento para bordar nomes duplos (como 'Maria Eduarda' ou 'Pedro Henrique') com equilíbrio perfeito.",
    "definition": "A diagramação de nomes compostos e centralização óptica em duas linhas (Two-Line Name Hierarchy & Optical Centering) é a técnica de composição tipográfica no software de matrizes aplicada a enxovais, uniformes profissionais e jalecos quando o nome da pessoa é longo ou duplo (ex: 'Maria Valentina / Pediatria' ou 'João Guilherme'). Em vez de espremer o texto em uma única linha longa e achatada (que fica ilegível e deforma as letras), a técnica divide a composição em duas linhas harmoniosas, utilizando a proporção áurea de alturas (linha principal com 100% de escala e linha secundária com 60% a 70% de escala) e alinhamento compensado pelo peso visual das fontes, garantindo legibilidade perfeita e refinamento estético no bordado.",
    "technicalDetails": "Proporção recomendada de altura de fontes: Linha 1 (Nome) = 14 mm a 18 mm; Linha 2 (Sobrenome ou Profissão) = 8 mm a 10 mm. Espaçamento vertical entre linhas (Leading): 25% a 35% da altura da fonte principal.",
    "howItWorks": [
      "1. A programadora recebe o pedido de bordado para um jaleco com o nome longo: 'Dra. Ana Carolina Medeiros / Cirurgia Geral'.",
      "2. Cria a primeira linha em caixa alta e baixa com fonte clássica (ex: cursiva nobre de 15 mm de altura).",
      "3. Cria a segunda linha com a especialidade em fonte bastão limpa e legível com 8 mm de altura.",
      "4. Ajusta o espaçamento entre linhas (Leading) para que as hastes inferiores (letras 'g', 'p', 'y') não toquem nas letras da linha de baixo.",
      "5. Realiza a centralização óptica (ajustando pequenas diferenças causadas por maiúsculas assimétricas ou títulos como 'Dr.').",
      "6. A matriz é bordada no peito do jaleco, transmitindo imponência, autoridade e elegância impecável."
    ],
    "beginnerExplanation": "É a regrinha prática e bonita para bordar nomes compridos de duas palavras (como 'Maria Fernanda' ou o nome de um médico com a profissão embaixo no jaleco). Em vez de tentar enfiar tudo numa linha só bem fininha e espremida, a gente coloca em duas linhas: o primeiro nome maior e mais imponente em cima, e o segundo nome ou a especialidade menorzinho e bem legível embaixo!",
    "applications": [
      "Bordados em jalecos de médicos, dentistas, enfermeiros, psicólogos e veterinários",
      "Uniformes corporativos com nome do funcionário em cima e cargo/departamento embaixo",
      "Enxovais de bebê com nomes compostos ('Luiz Felipe', 'Ana Vitória') em toalhas e mantas",
      "Faixas comemorativas de formatura, faixas de miss e aventais de gastronomia"
    ],
    "commonErrors": [
      "❌ Espremer um nome composto de 20 letras em uma única linha de 10 cm de largura, deixando as letras finas como palitos e ilegíveis",
      "❌ Colocar a segunda linha colada demais na primeira, fazendo o rabicho da letra 'y' ou 'g' de cima bater nas letras de baixo",
      "❌ Usar fontes cursivas rebuscadas e cheias de voltas nas duas linhas com o mesmo tamanho gigante, criando poluição visual"
    ],
    "troubleshootingTips": [
      "Para a profissão ou cargo na segunda linha, prefira fontes retas e limpas (tipo Sans-Serif / Bastão) para máxima legibilidade",
      "A largura total máxima recomendada para o peito de um jaleco ou camisa polo é de 10 cm a 12 cm de largura",
      "Utilize a ferramenta de 'Alinhar pelo Centro Horizontal' no software e faça um ajuste fino manual para equilibrar o visual"
    ],
    "dicaArtrelados": "O bordado em jalecos médicos é um dos serviços mais lucrativos e frequentes no ateliê! Usar a regra das duas linhas com a primeira linha em fonte elegante de 15 mm e a especialidade em fonte reta de 8 mm transforma um jaleco comum em uma peça de alto luxo que os profissionais amam!",
    "voceSabia": "A regra da hierarquia de duas linhas com proporção de 70% na linha secundária é baseada nas inscrições lapidares dos arcos de triunfo da Roma Antiga, considerada pelos designers gráficos a fórmula tipográfica mais elegante da história.",
    "practicalExercise": "Abra seu programa de bordados e digite o nome 'Dra. Beatriz Santos' em cima com 15 mm e 'Dermatologia' embaixo com 8 mm em fonte reta. Observe como a composição fica incrivelmente equilibrada e profissional!",
    "quickSummary": "Regra de ouro para diagramar nomes longos em duas linhas proporcionais com elegância e alta legibilidade.",
    "relatedTerms": [
      "Letras Pequenas (Small Lettering)",
      "Kerning Tipográfico e Compensação de Repuxo Interletra",
      "Software de Digitalização",
      "Programação de Bordado"
    ],
    "tags": [
      "n-072",
      "nomes compostos",
      "jalecos",
      "hierarquia tipografica",
      "duas linhas",
      "centralizacao",
      "monogramas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Manual de Tipografia e Monogramas Nobres para Jalecos e Uniformes. São Paulo, 2024.",
      "BRINGHURST, Robert. The Elements of Typographic Style & Optical Spacing. Vancouver, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "n-073-normalizacao-de-arquivos-dst-e-limpeza-de-cabecalho-hexadecimal",
    "code": "N-073",
    "term": "Normalização de Arquivos DST e Limpeza de Cabeçalho Hexadecimal (Tajima DST File Normalization & Header Hex Sanitization)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da Tajima Industries Ltd. (criadora do formato de comandos mecânicos .DST nos anos 1980) e do termo da ciência da computação sanitization (limpeza e validação de estruturas de dados binárias).",
    "summary": "Processo de saneamento de arquivos .DST que corrige cabeçalhos corrompidos e bytes defeituosos que travam a máquina.",
    "definition": "A normalização de arquivos Tajima DST e limpeza de cabeçalho (DST Header Sanitization & Coordinate Normalization) é o procedimento técnico de validação e correção da estrutura binária de arquivos de bordado no padrão industrial .DST. Um arquivo DST canônico possui exatamente 512 bytes de cabeçalho em formato ASCII (contendo nome do desenho, número de pontos, quantidade de trocas de cor e coordenadas máximas X+/X-/Y+/Y-) seguidos por blocos ternários de 3 bytes por ponto. Arquivos baixados da internet ou salvos por softwares descalibrados frequentemente contêm bytes nulos (0x00), caracteres especiais ou coordenadas fora de escala que fazem o painel da máquina travar, recusar o arquivo ou apresentar o erro 'Invalid File Format'.",
    "technicalDetails": "Tamanho fixo do cabeçalho canônico: exatamente 512 bytes. Estrutura de dados dos pontos: 3 bytes ternários por coordenada vetorial com bit 7 e bit 6 codificando comandos mecânicos de SALTO (Jump), CORTE (Trim) e FIM (End).",
    "howItWorks": [
      "1. A bordadeira coloca um arquivo .DST baixado em seu pen drive, mas ao tentar carregar na máquina, o painel exibe 'Erro de Leitura / Arquivo Inválido'.",
      "2. O arquivo é aberto no software de bordado ou em um utilitário de normalização de matrizes.",
      "3. O sistema analisa o cabeçalho de 512 bytes, remove caracteres não-ASCII e recalcula os limites absolutos dos eixos X e Y.",
      "4. Converte micropontos redundantes menores que 0,3 mm e valida a sequência de comandos mecânicos de salto.",
      "5. Salva um novo arquivo DST padronizado com o cabeçalho canônico 100% limpo e estruturado.",
      "6. A máquina de bordar lê o pen drive instantaneamente, reconhece todas as trocas de cores e borda com fluidez total."
    ],
    "beginnerExplanation": "É como se fosse uma 'faxina e revisão técnica' em arquivos de bordado que estão com algum defeitinho invisível no computador. Às vezes a gente pega uma matriz na internet e a máquina não quer abrir de jeito nenhum: fazendo essa limpeza rápida no programa, o arquivo volta a ficar 100% perfeitinho e abre no painel na hora!",
    "applications": [
      "Correção de matrizes antigas ou corrompidas que travam a leitura no painel da máquina",
      "Padronização de arquivos para envio em redes de máquinas de marcas diferentes (Tajima, Brother, Barudan, Janome)",
      "Eliminação de códigos de salto falso que causam paradas indevidas no meio do bordado",
      "Otimização de tempo de leitura e economia de memória no computador de bordo da máquina"
    ],
    "commonErrors": [
      "❌ Renomear a extensão de um arquivo manualmente no Windows (ex: mudar '.pes' para '.dst' digitando), gerando um arquivo corrompido que a máquina não consegue ler",
      "❌ Salvar arquivos com caracteres especiais no nome (como acentos, cedilha, símbolos '#@!*'), que quebram o cabeçalho ASCII",
      "❌ Usar pen drives com defeito de formatação ou cheios de vírus de atalho que danificam a estrutura dos arquivos"
    ],
    "troubleshootingTips": [
      "Sempre use nomes simples nos seus arquivos de máquina, sem acentos, sem espaços e com menos de 8 caracteres se sua máquina for antiga (ex: 'FLOR01.DST')",
      "Para normalizar um arquivo com problema, abra-o no seu software de bordado de confiança e escolha 'Salvar Como > Tajima .DST'",
      "Formate o seu pen drive de bordado periodicamente no padrão 'FAT32' para manter o sistema de arquivos sempre limpo e rápido"
    ],
    "dicaArtrelados": "Nunca renomeie um arquivo mudando a extensão no final com o teclado! Para transformar uma matriz de PES para DST ou JEF, sempre use a opção 'Salvar Como' ou 'Exportar' dentro do seu programa de bordados. Isso garante que a máquina leia o arquivo perfeitamente sem travar!",
    "voceSabia": "O formato .DST foi criado pela Tajima no Japão na década de 1980 para ser lido originalmente por fitas de papel perfuradas de 8 canais (Paper Tape), sendo hoje o padrão industrial mais universal e executado em todo o planeta.",
    "practicalExercise": "Abra qualquer matriz no seu software de bordado e exporte como .DST com um nome simples (ex: `TESTE01.DST`). Abra o arquivo gerado na sua máquina e observe como a leitura é instantânea!",
    "quickSummary": "Limpeza técnica de cabeçalhos e coordenadas em arquivos .DST para que qualquer máquina de bordar leia sem travar.",
    "relatedTerms": [
      "Formatos de Arquivo de Bordado",
      "Software de Digitalização",
      "Hardware de Controle DSP e Placa-Mãe",
      "Programação de Bordado"
    ],
    "tags": [
      "n-073",
      "dst",
      "tajima",
      "normalizacao",
      "cabecalho",
      "hexadecimal",
      "formatos de arquivo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Tajima Stitch Data (.DST) Binary Format Specifications and Header Architecture. Nagoya, 2022.",
      "ARTRELADOS. Gestão Operacional, Fichas Técnicas e Formatos de Arquivo no Ateliê de Bordados. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "n-074-normas-de-seguranca-nr-12-e-ergonomia-operacional-no-atelie",
    "code": "N-074",
    "term": "Normas de Segurança NR-12 e Ergonomia Operacional no Ateliê (NR-12 Machinery Safety Standards & Atelier Ergonomics)",
    "letter": "N",
    "level": "Iniciante 🟢",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Da Norma Regulamentadora Brasileira nº 12 (NR-12 - Segurança no Trabalho em Máquinas e Equipamentos, Ministério do Trabalho) e do grego ergon (trabalho) e nomos (leis naturais).",
    "summary": "Diretrizes essenciais de segurança, botão de emergência, proteção de mãos e postura ergonômica para bordar com saúde e tranquilidade.",
    "definition": "As normas de segurança NR-12 e ergonomia operacional constituem o conjunto de diretrizes regulamentares e boas práticas de saúde ocupacional aplicadas ao ambiente de trabalho do ateliê de bordado computadorizado. Abrangem a conformidade eletromecânica dos equipamentos (como a presença de botão de parada de emergência tipo cogumelo de fácil acesso, protetores transparentes de barra de agulha contra acidentes com quebra de agulha e aterramento elétrico contra choques), bem como a ergonomia física da operadora (bancadas de colocação de bastidor com altura correta entre 85 cm e 95 cm, cadeiras ergonômicas com suporte lombar e iluminação antirreflexo), garantindo produtividade sustentável sem riscos à saúde física.",
    "technicalDetails": "Conformidade com a Norma NR-12 e NR-17 (Ergonomia). Altura ideal de bancada de bastidores: 90 cm ± 5 cm para trabalho em pé/semi-sentado. Nível de ruído operacional: < 75 dBA a 1 metro. Iluminação de bancada: 500 a 750 lux com IRC > 90.",
    "howItWorks": [
      "1. O ateliê é montado com piso nivelado, espaço de circulação livre de fios soltos e tomadas aterradas para cada máquina.",
      "2. A bordadeira posiciona a bancada de colocação de bastidores em altura ergonômica que não force a coluna e os punhos.",
      "3. As máquinas de bordar operam com suas tampas de proteção mecânica instaladas e o botão de emergência livre de obstáculos.",
      "4. Durante o funcionamento a 800 RPM, a bordadeira nunca coloca os dedos perto da área das agulhas em movimento.",
      "5. São realizadas pausas ativas de 5 minutos a cada duas horas para alongamento de mãos, punhos e coluna.",
      "6. A produção ocorre de forma fluida, segura, altamente produtiva e com total bem-estar físico para a artesã."
    ],
    "beginnerExplanation": "São os cuidados simples e importantíssimos para você trabalhar segura, feliz e sem dores no seu ateliê! Isso inclui manter a bancada na altura certinha para não doer as costas na hora de colocar o bastidor, nunca colocar a mão perto da agulha quando a máquina estiver costurando e saber onde fica o botão vermelho de parada rápida da máquina para qualquer emergência.",
    "applications": [
      "Adequação técnica e segurança ocupacional em ateliês residenciais, comerciais e industriais",
      "Prevenção de acidentes com quebras de agulha e prensamento de dedos no pantógrafo",
      "Melhoria da postura e eliminação de dores na coluna e tendinites por esforço repetitivo (LER/DORT)",
      "Organização de bancadas de montagem de bastidores para máxima agilidade e conforto"
    ],
    "commonErrors": [
      "❌ Colocar a mão perto da barra de agulha com a máquina em movimento para 'puxar um fiapinho solto', correndo o risco de perfuração de dedo",
      "❌ Montar bastidores sentada em cadeiras inadequadas ou curvada sobre mesas muito baixas, causando fortes dores lombares",
      "❌ Ligar várias máquinas potentes em réguas plásticas de extensão baratas e sem aterramento elétrico"
    ],
    "troubleshootingTips": [
      "Se precisar ajustar qualquer coisa na linha ou no tecido perto da agulha, aperte sempre o botão de PAUSA da máquina antes de aproximar as mãos",
      "Utilize um gabarito de bastidor ou suporte inclinado de bancada para fechar os aros sem forçar as articulações dos punhos",
      "Mantenha uma boa luminária LED de luz neutra focada sobre a chapa de agulha para não forçar a vista ao enfiar a linha"
    ],
    "dicaArtrelados": "O seu bem mais precioso no ateliê é você mesma e a sua saúde! Trabalhar com conforto, postura reta e segurança faz seu dia render o dobro e mantém o bordado leve e prazeroso por muitos e muitos anos!",
    "voceSabia": "Nas máquinas industriais modernas, existem sensores a laser de barreira invisível: se a mão do operador passar perto da agulha enquanto ela estiver costurando, a máquina freia e para instantaneamente em menos de 50 milissegundos para evitar qualquer machucado.",
    "practicalExercise": "Olhe para a sua máquina de bordar e localize onde fica o botão de parada ou de emergência. Meça a altura da sua mesa onde você coloca os tecidos no bastidor: se ela estiver muito baixa, experimente elevar com calços para trabalhar com a postura retinha!",
    "quickSummary": "Cuidados de segurança, botão de emergência e ergonomia de postura para bordar com conforto e sem acidentes.",
    "relatedTerms": [
      "Kelvin Scale e Calibração de Temperatura de Cor no Ateliê",
      "Mesa de Extensão Tubular e Suporte Pantográfico de Braço Livre",
      "Gestão do Ateliê e Produção",
      "Componentes da Máquina"
    ],
    "tags": [
      "n-074",
      "seguranca",
      "nr-12",
      "ergonomia",
      "postura",
      "saude no trabalho",
      "atelie",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MINISTÉRIO DO TRABALHO E EMPREGO (MTE). Norma Regulamentadora NR-12: Segurança no Trabalho em Máquinas e Equipamentos. Brasília, 2022.",
      "ARTRELADOS. Ergonomia, Saúde Ocupacional e Boas Práticas Operacionais no Ateliê de Bordados. São Paulo, 2024."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "n-075-nivelamento-de-densidade-variavel-e-efeito-degrade-no-ponto-satim",
    "code": "N-075",
    "term": "Nivelamento de Densidade Variável e Efeito Degradê no Ponto Satim (Variable Density Leveling & Satin Gradient)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (igualar planos / nivelar) e densitas (concentração de massa). No bordado moderno, refere-se à modulação gradual do espaçamento entre pontos.",
    "summary": "Técnica de programação de matrizes que varia progressivamente a distância entre os pontos satim de 0,38 mm até 1,50 mm, criando transições suaves de cor, profundidade e volume sem sobrecarregar o tecido.",
    "definition": "Nivelamento de Densidade Variável e Efeito Degradê no Ponto Satim (Variable Density & Shading Satin Gradient) é a técnica avançada de digitalização em que o espaçamento entre as passadas de ponto cheio (satim) é modificado de forma contínua e matemática ao longo de um mesmo bloco de bordado. Ao cruzar duas camadas de satim de tonalidades diferentes com gradientes opostos (uma abrindo de 0,40 mm para 1,20 mm e a outra fechando no sentido inverso), obtém-se uma fusão cromática perfeita e tridimensional sem criar acúmulo excessivo de linha que endureceria a peça ou quebraria agulhas.",
    "technicalDetails": "Faixa de densidade variável: 0,38 mm (área densa) a 1,60 mm (área translúcida). Curvas de transição: Linear, Exponencial ou Logarítmica. Ângulo de inclinação relativa entre camadas: 0° a 5° (alinhamento paralelo de fios) ou 15° (efeito de mistura ótica). Agulha recomendada: 65/9 ou 75/11 SES.",
    "construction": [
      "Camada base com densidade progressiva aberta (0,45 mm a 1,20 mm) em tom escuro",
      "Segunda camada sobreposta com densidade inversa decrescente em tom claro ou intermediário",
      "Underlay leve em zigue-zague aberto de 2,5 mm para não bloquear a transparência das passadas",
      "Compensação de repuxo calibrada individualmente para cada extremo de densidade",
      "Linhas de poliéster 40wt trilobal de alto brilho para amplificar o gradiente de luz"
    ],
    "howItWorks": [
      "1. No software de digitalização (Wilcom, Embird ou Tajima DG), desenha-se o contorno do objeto em ponto satim.",
      "2. Ativa-se a ferramenta de 'Densidade de Fração / Efeito de Gradiente (Accordion Stitch)'.",
      "3. Define-se o ponto de início com densidade padrão (ex: 0,40 mm) e o ponto final aberto (ex: 1,40 mm).",
      "4. Duplica-se o objeto, inverte-se a direção do gradiente e atribui-se uma cor de linha complementar.",
      "5. A máquina borda primeiro a cor de fundo com densidade que vai se espaçando suavemente.",
      "6. Em seguida, a agulha da segunda cor borda sobre os espaços abertos, entrelaçando as fibras.",
      "7. O olho humano percebe uma transição contínua de luz e sombra, idêntica a uma pintura aerografada."
    ],
    "mainTypes": [
      "Degradê Satim Linear (Para transição de cor em pétalas de flores e letras decorativas)",
      "Degradê Satim Radial / Circular (Para reflexos de luz em esferas, escudos e olhos)",
      "Efeito Eletrocardiograma / Acordeão (Para fusão de 3 ou mais tonalidades em brasões realistas)"
    ],
    "characteristics": [
      "Transição cromática ultrassuave sem linhas duras de separação de cor",
      "Redução de até 40% no número total de pontos em comparação com sobreposição de tatami",
      "Bordado maleável, leve e flexível que não engoma nem deforma tecidos finos",
      "Excelente contraste e reflexo de luz metálica com fios trilobais"
    ],
    "limitations": [
      "Exige alinhamento milimétrico do bastidor para que as camadas não fiquem defasadas",
      "Não deve ser usado em tecidos felpudos sem película hidrossolúvel de topo",
      "Softwares de entrada ou gratuitos muitas vezes não possuem cálculo paramétrico de gradiente"
    ],
    "numberingSystem": [
      "Densidade Máxima (Início): 0,38 mm a 0,42 mm",
      "Densidade Mínima (Fim): 1,20 mm a 1,60 mm",
      "Taxa de Graduação: Variação de 0,05 mm a cada 5 pontos"
    ],
    "advantages": [
      "✔ Cria efeitos visuais de realismo fotográfico e sombreamento tridimensional em logotipos e arte têxtil",
      "✔ Evita o empastamento de linha e placas duras no peito de camisetas e camisas sociais",
      "✔ Aumenta a velocidade de produção pela redução inteligente da contagem de pontos da matriz"
    ],
    "commonErrors": [
      "❌ Sobrepor duas camadas com densidade de 0,40 mm total, criando um 'tijolo' de linha impenetrável",
      "❌ Usar underlay tatami denso embaixo do degradê, que aparece feio nos vãos abertos do satim",
      "❌ Borda em velocidade muito alta (> 900 PPM) em tecidos elásticos sem fixação adequada"
    ],
    "voceSabia": "A técnica de degradê no bordado computadorizado foi inspirada diretamente na técnica artesanal secular do 'Pintado a Agulha' (Needle Painting / Seda da China), onde bordadeiras usavam fios de seda de 10 espessuras diferentes para criar sombras perfeitas em kimonos imperiais!",
    "curiosidadeTecnica": "O olho humano a 50 cm de distância não consegue distinguir fios individuais de 0,1 mm de espessura quando espaçados a menos de 0,35 mm: ele funde as duas cores no córtex visual primário, criando uma nova cor intermediária por síntese aditiva refletiva.",
    "dicaArtrelados": "Ao criar efeito degradê entre duas cores fortes (como vermelho e amarelo para fazer fogo), use uma terceira cor intermediária (laranja) em uma faixa estreita de 2 mm com densidade 0,80 mm no meio das duas: a transição fica tão mágica que ninguém acredita que foi bordado em máquina comum!",
    "comparisonTable": {
      "headers": [
        "Parâmetro",
        "Satim com Densidade Fixa",
        "Satim com Nivelamento de Densidade Variável"
      ],
      "rows": [
        [
          "Aspecto Visual",
          "Cor sólida e chapada sem profundidade",
          "Degradê suave, realista e tridimensional"
        ],
        [
          "Flexibilidade do Tecido",
          "Média a Rígida na área bordada",
          "Ultra-leve e flexível (toque suave)"
        ],
        [
          "Contagem de Pontos",
          "Alta (100% de preenchimento duplo)",
          "Reduzida em até 35% a 40%"
        ],
        [
          "Risco de Quebra de Agulha",
          "Médio a Alto em sobreposições",
          "Mínimo (agulha penetra em espaços livres)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "65/9 ou 75/11 SES (Ponta Bola Leve) / H-E (Embroidery)",
      "stabilizer": "Entretela de Recorte PolyMesh 50 g/m² + Película Hidrossolúvel de Topo (se tecido texturizado)",
      "threadTension": "Superior: 105 a 115 gf / Bobina: 22 gf (Tensiômetro Towa)",
      "density": "Início em 0,40 mm variando linearmente até 1,40 mm"
    },
    "applications": [
      "Chamas, pôr do sol, plumagens de pássaros e pétalas de flores realistas",
      "Letras decorativas de estilo esportivo com transição de cor e brilho metálico",
      "Brasões comemorativos com reflexos dourados e prateados em gradiente",
      "Bordados em peças de alta costura e vestidos de noiva"
    ],
    "troubleshootingTips": [
      "Se o degradê parecer listrado, aumente a suavidade da rampa no software para ter mais pontos intermediários",
      "Se a cor de cima cobrir totalmente a de baixo, aumente o espaçamento final da camada de baixo para 1,50 mm",
      "Utilize linhas trilobais brilhantes em vez de fios foscos para maximizar o reflexo do degradê"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Satim / Ponto Cheio",
      "Efeito Degradê e Sombreamento",
      "Compensação de Repuxo",
      "Densidade de Ponto"
    ],
    "tags": [
      "n-075",
      "densidade variavel",
      "degrade satim",
      "ponto cheio",
      "shading",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Advanced Stitch Effects: Shading, Accordion & Variable Density. Sydney, 2021.",
      "PARRISH, Gail. Precision Digitizing: Mastering Color Blending and Gradients in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra seu programa de bordado e crie um retângulo de 60 mm x 20 mm. Aplique ponto cheio com densidade começando em 0,40 mm na esquerda e terminando em 1,40 mm na direita com linha azul marinho. Duplique o objeto com linha azul celeste invertendo a densidade. Borde em uma malha com entretela PolyMesh e observe o degradê perfeito!",
    "quickSummary": "Variação progressiva do espaço entre os pontos para criar sombras e misturas de cores sem pesar no tecido.",
    "beginnerExplanation": "É como quando você pinta com lápis de cor apertando forte no começo e soltando a mão bem de levinho até a cor sumir: a máquina borda bem juntinho num lado e vai espaçando os pontinhos para misturar com outra cor que vem do outro lado, criando aquele efeito de degradê lindo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-076-nylon-ripstop-e-tecidos-antirasgo-para-jaquetas-e-paraquedas",
    "code": "N-076",
    "term": "Nylon Ripstop e Tecidos Antirasgo para Jaquetas e Paraquedas (Ripstop Nylon & Tear-Resistant Outdoor Fabrics)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês rip (rasgar) e stop (parar / conter). Tecido técnico desenvolvido durante a Segunda Guerra Mundial para substituir a seda dos paraquedas militares.",
    "summary": "Técnicas especializadas para bordar em tecidos sintéticos ultraleves de poliamida com grade quadriculada de reforço antirasgo, comuns em jaquetas corta-vento, mochilas técnicas e velas náuticas.",
    "definition": "Nylon Ripstop e Tecidos Antirasgo (Ripstop Polyamide Technical Fabrics Embroidery) é o protocolo de preparação, estabilização e costura para tecidos leves (40 a 120 g/m²) de poliamida ou poliéster que possuem filamentos mais grossos (denier elevado) tecidos em intervalos regulares de 5 a 8 mm em formato de grade. Como o tecido é impermeável ou repelente à água e extremamente fino, o bordado exige agulhas ultrafinas (65/9 SES ou Microtex), densidades abertas (0,46 a 0,52 mm), entretelas de recorte leves (PolyMesh ou termossolúvel) e vedação posterior de furos com fita termocolante seladora para manter a estanqueidade.",
    "technicalDetails": "Gramatura do tecido: 45 a 110 g/m². Estrutura de trama: Tafetá com urdume de reforço a cada 5 mm. Agulha recomendada: 65/9 ou 70/10 Microtex ou SES. Compensação de repuxo: 0,35 mm a 0,45 mm. Selagem pós-bordado: Fita de poliuretano (Seam Sealing Tape) a 140°C.",
    "construction": [
      "Tecido Nylon Ripstop resinado ou com acabamento DWR (Durable Water Repellent)",
      "Entretela de recorte leve PolyMesh 40 a 50 g/m² fixada com adesivo spray reposicionável",
      "Bastidor magnético ou bastidor plano com fixação suave sem estiramento de grade",
      "Agulha ponta fina afiada (Microtex) ou ponta bola leve (SES) tamanho 65/9 ou 70/10",
      "Linha 40wt ou 60wt de poliéster 100% resistente a raios UV e intempéries"
    ],
    "howItWorks": [
      "1. Corta-se a entretela PolyMesh no tamanho do bastidor e aplica-se névoa leve de adesivo spray 505.",
      "2. O Nylon Ripstop é assentado sobre a entretela em repouso absoluto, sem tracionar a grade quadrada.",
      "3. Encaixa-se o conjunto no bastidor de pressão controlada (evitando esmagar o resinado do tecido).",
      "4. A máquina é regulada para 700 PPM com agulha fina 65/9 para produzir microfuros discretos.",
      "5. A matriz executa underlays em linha corrida simples com pontos de comprimento médio (2,5 mm).",
      "6. Após o bordado, recortam-se os excessos de entretela no avesso deixando margem de 3 mm.",
      "7. Aplica-se no avesso uma fita termosselável de PU com ferro a vapor para vedar os microfuros da agulha."
    ],
    "mainTypes": [
      "Ripstop Ultraleve de Corta-Vento (35 a 55 g/m² - Para jaquetas de corrida e ciclismo)",
      "Ripstop Técnico Militar / Tático (100 a 220 g/m² - Para fardamentos de combate e capas táticas)",
      "Ripstop Náutico e de Paraquedas (Siliconado e siliconizado para kitesurf, velas e parapentes)"
    ],
    "characteristics": [
      "Alta resistência mecânica à tração combinada com peso molecular ultraleve",
      "Grade visual geométrica quadriculada que impede a propagação de microfissuras",
      "Sensibilidade ao calor excessivo e furos densos de agulha (risco de efeito picotado)",
      "Toque macio e secagem quase instantânea após lavagem ou chuva"
    ],
    "limitations": [
      "Nunca utilizar agulhas grossas (80/12 ou 90/14) que perfuram buracos grandes visíveis",
      "Evitar densidades pesadas de satim (< 0,36 mm) que cortam o tecido como lâmina de estilete",
      "Não passar a ferro quente direto sobre o nylon sem pano de proteção (derrete a 180°C)"
    ],
    "numberingSystem": [
      "Gramatura Típica: 50 a 90 g/m²",
      "Fio da Agulha: 65/9 ou 70/10",
      "Densidade do Satim: 0,46 mm a 0,50 mm"
    ],
    "advantages": [
      "✔ Permite personalizar jaquetas esportivas de alta tecnologia de marcas como The North Face, Columbia e Nike",
      "✔ Garante que o logotipo não rasgue e não repuxe a estrutura quadriculada do tecido",
      "✔ Mantém o produto resistente à água com técnicas de vedação de costura de padrão industrial"
    ],
    "commonErrors": [
      "❌ Puxar o nylon no bastidor como se fosse sarja, deformando a grade de quadrados para sempre",
      "❌ Usar entretela rasgável grossa, que quebra o tecido no contorno na hora de destacar",
      "❌ Borda matrizes com milhares de pontos concentrados em área pequena, criando um buraco vazado"
    ],
    "voceSabia": "O padrão quadriculado do Ripstop foi criado porque os paraquedas de seda da Segunda Guerra Mundial, quando sofriam um furo por bala inimiga, rasgavam de ponta a ponta instantaneamente no ar. Com os fios de reforço em grade do Ripstop, o rasgo para no primeiro quadrado de 5 milímetros!",
    "curiosidadeTecnica": "O tecido Ripstop siliconado possui um coeficiente de atrito cinético de apenas μ = 0,15, o que faz a linha de bordado escorregar com facilidade; por isso a tensão da linha superior deve ser diminuída em cerca de 10% para evitar laçadas frouxas.",
    "dicaArtrelados": "Ao bordar jaquetas corta-vento de Ripstop impermeáveis, passe um selador de costura líquido (ou termocole uma fitinha de impermeabilização no avesso do bordado): assim a água da chuva nunca vai infiltrar pelos buraquinhos dos pontos de bordado e seu cliente vai amar a qualidade profissional!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Nylon Tafetá Comum",
        "Nylon Ripstop Antirasgo"
      ],
      "rows": [
        [
          "Resistência a Rasgos",
          "Baixa (o rasgo continua se puxado)",
          "Altíssima (a grade de fios barra o rasgo)"
        ],
        [
          "Comportamento ao Bordar",
          "Fácil de picotar se agulha for grossa",
          "Muito estável, mas requer agulha fina 65/9"
        ],
        [
          "Tipo de Entretela Ideal",
          "Recorte PolyMesh 50 g/m²",
          "Recorte PolyMesh + Spray 505"
        ],
        [
          "Densidade Recomendada",
          "0,42 mm a 0,45 mm",
          "0,46 mm a 0,50 mm (mais aberta)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "65/9 ou 70/10 Microtex ou SES (Ponta Bola Fina)",
      "stabilizer": "Entretela de Recorte PolyMesh 50 g/m² fixada com Spray Reposicionável",
      "threadTension": "Superior: 100 a 110 gf / Bobina: 20 a 22 gf",
      "density": "0.48 mm com compensação de repuxo de 0.40 mm"
    },
    "applications": [
      "Jaquetas esportivas corta-vento, anoraques de montanhismo e capas de chuva",
      "Mochilas leves de trekking, sacos de dormir e barracas de camping",
      "Uniformes de equipes de vela, parapente, paramotor e automobilismo",
      "Bolsas dobráveis, estojos e equipamentos táticos militares leves"
    ],
    "troubleshootingTips": [
      "Se o tecido estiver franzindo ao redor do bordado, aumente a compensação de repuxo e diminua a tensão da linha",
      "Use bastidores magnéticos para não deixar marcas brilhantes de atrito na resina do tecido",
      "Aplique ar quente morno com secador de cabelo se ficarem pequenas marcas de vinco no tecido"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Nylon",
      "Entretela de Recorte PolyMesh",
      "Agulha Microtex",
      "Compensação de Repuxo"
    ],
    "tags": [
      "n-076",
      "nylon ripstop",
      "antirasgo",
      "jaqueta corta vento",
      "polyamide",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "OUTDOOR Industry Association. Technical Textiles & Performance Apparel Embroidery Standards. Boulder, 2021.",
      "PARRISH, Gail. High-Performance Synthetic Fabrics and Microtex Needle Dynamics. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tecido de jaqueta corta-vento (Nylon Ripstop). Coloque no bastidor com entretela PolyMesh e borde um pequeno brasão com agulha 65/9 e densidade 0,48 mm. Observe como o bordado fica liso, sem furinhos aparentes e sem repuxar a grade do tecido!",
    "quickSummary": "Técnicas e cuidados para bordar em tecidos fininhos e super resistentes de jaquetas de chuva e esportes.",
    "beginnerExplanation": "O Nylon Ripstop é aquele tecido bem leve com quadradinhos desenhados na trama que é usado em jaquetas corta-vento e capas de chuva. Por ser fininho, a gente usa agulha bem fininha e entretela macia para não furar nem rasgar o tecido na hora de bordar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-077-numero-de-torcoes-por-metro-e-tenacidade-dos-fios-de-bordado",
    "code": "N-077",
    "term": "Número de Torções por Metro (TPM) e Tenacidade dos Fios de Bordado (Twists Per Meter & Thread Tensile Strength)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim torquere (girar / torcer) e tenacitas (capacidade de resistir à tração sem romper).",
    "summary": "Índice técnico que define quantas voltas helicoidais os filamentos de uma linha recebem por metro linear e a sua resistência à ruptura em rotações de até 1.200 PPM.",
    "definition": "Número de Torções por Metro (TPM / Twists Per Meter) e Tenacidade do Fio (Thread Tenacity & Twist Balance) é o parâmetro físico-químico fundamental que rege a estabilidade, o brilho, a elasticidade e a resistência mecânica das linhas de bordar industriais. A maioria das linhas de bordado de 2 cabos (2-ply) recebe torção em sentido Z (torção à esquerda) na faixa de 600 a 850 TPM. Uma torção balanceada impede que o fio se desfaça ao passar velozmente pelo olho da agulha, garantindo tenacidade de 35 a 45 cN/tex para suportar as desacelerações bruscas da laçada na lançadeira rotativa.",
    "technicalDetails": "Torção padrão para linha 40wt: 700 a 800 TPM (Sentido Z / Final). Tenacidade média de poliéster trilobal: 42 cN/tex (centinewtons por tex). Alongamento na ruptura: 18% a 24%. Coeficiente de atrito cinético: μ = 0,18 a 0,22 (lubrificação com silicone 3% a 5%).",
    "construction": [
      "Filamentos contínuos de poliéster trilobal de alta tenacidade (HT - High Tenacity)",
      "Primeira torção individual de cada cabo em sentido S",
      "Segunda torção de junção dos cabos em sentido Z termofixada a vapor",
      "Banho de acabamento com emulsão de micro-silicone e ceras termoplásticas antiestáticas",
      "Carretel cônico de enrolamento cruzado balanceado dinamicamente"
    ],
    "howItWorks": [
      "1. A linha sai do carretel no suporte superior desenrolando suavemente sem criar laçadas espirais.",
      "2. Passa pelos discos de tensão, onde a torção uniforme Z mantém todos os filamentos compactos.",
      "3. Desce pela mola compensadora e entra na canaleta profunda da agulha em alta velocidade.",
      "4. A torção calibrada (750 TPM) impede que a linha abra e desfie enquanto sobe e desce 16 vezes por segundo.",
      "5. Ao atingir o ponto morto inferior, a linha forma uma laçada firme e arredondada no rebaixo da agulha.",
      "6. A ponta da lançadeira captura a laçada com 100% de precisão sem furar filamentos soltos.",
      "7. A máquina borda a 1.000 PPM continuamente durante horas sem nenhuma parada por quebra de linha."
    ],
    "mainTypes": [
      "Torção Z Padrão (Sentido horário de rotação - Ideal para todas as máquinas de bordar modernas)",
      "Torção S Especial (Para costura manual ou aplicações industriais específicas de dupla laçada)",
      "Fios de Alta Torção (Crêpe / Twist Alto - Para textura mate e máxima resistência à abrasão)"
    ],
    "characteristics": [
      "Equilíbrio torcional nulo (a linha solta no ar não se enrola sobre si mesma em caracol)",
      "Máxima retenção de brilho refletivo nas facetas trilobais dos microfilamentos",
      "Resistência superior a nós, fiapos e desfiamento durante a passagem pela lançadeira",
      "Elasticidade controlada que absorve impactos mecânicos do estica-fio sem quebrar"
    ],
    "limitations": [
      "Fios com torção excessiva (> 950 TPM) tendem a formar laçadas torcidas (*kinking*) antes do tensor",
      "Fios com baixa torção (< 500 TPM) desmancham no olho da agulha causando desfiamento frequente",
      "Linhas velhas expostas a sol e calor perdem o silicone lubrificante, aumentando o atrito em 80%"
    ],
    "numberingSystem": [
      "Torção Padrão: 750 TPM ± 50",
      "Tenacidade Industrial: > 40 cN/tex",
      "Sentido de Torção: Z (Left-hand twist)"
    ],
    "advantages": [
      "✔ Reduz em mais de 90% as paradas de máquina causadas por desfiamento e nós na agulha",
      "✔ Garante nós de arremate perfeitos e planos no avesso sem sobras de linha",
      "✔ Proporciona reflexo de luz uniforme em toda a superfície do bordado de satim"
    ],
    "commonErrors": [
      "❌ Usar linha comum de costura reta (com torção e lubrificação inadequadas) em máquina de bordar rápida",
      "❌ Guardar cones de linha em locais com sol direto, secando a emulsão de silicone dos filamentos",
      "❌ Puxar a linha ao contrário no suporte de carretel, desfazendo a torção helicoidal de fábrica"
    ],
    "voceSabia": "A direção da torção em Z foi padronizada mundialmente para bordado porque a ponta da lançadeira rotativa gira no mesmo sentido da torção da linha; se a linha fosse torcida em S, cada volta da lançadeira abriria os fios como uma vassoura!",
    "curiosidadeTecnica": "Uma linha de bordado 40wt passando a 1.000 PPM sofre uma aceleração equivalente a 200 vezes a gravidade da Terra no momento em que o estica-fio puxa o nó para fechar o ponto na chapa de agulha.",
    "dicaArtrelados": "Para testar se a torção da sua linha está perfeita: puxe 50 cm de linha do cone, segure as duas pontas juntas e deixe o meio pendurado no ar. Se o fio ficar retinho sem se contorcer feito uma mola de telefone, a linha está fresca, balanceada e pronta para voar na máquina!",
    "comparisonTable": {
      "headers": [
        "Propriedade",
        "Linha de Bordado de Qualidade (750 TPM)",
        "Linha de Costura Comum (400-500 TPM)"
      ],
      "rows": [
        [
          "Sentido e Balanço",
          "Torção Z com termofixação anti-espiral",
          "Torção variável sem balanço térmico"
        ],
        [
          "Lubrificação",
          "Silicone especial para 1.200 PPM",
          "Parafina simples para 500 PPM"
        ],
        [
          "Desfiamento no Olho",
          "Zero (filamentos permanecem unidos)",
          "Frequente (abre e quebra no olho da agulha)"
        ],
        [
          "Brilho da Superfície",
          "Altíssimo brilho trilobal refletivo",
          "Fosco ou semi-brilho irregular"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 950 PPM",
      "needleType": "75/11 DBxK5 ou 130/705 H-E (Olho alongado de bordado)",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 a 24 gf",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Bordados em alta velocidade em máquinas industriais monocabeça e multicabeças",
      "Produção de fardamentos escolares, uniformes de trabalho e bonés estruturados",
      "Bordados finos de monogramas e vestidos de festa com alto brilho",
      "Costura decorativa e acolchoamento computadorizado de alto desempenho"
    ],
    "troubleshootingTips": [
      "Se a linha estiver quebrando com ponta parecendo um espanador de pó, a agulha está com rebarba no olho ou a linha perdeu a torção",
      "Troque de agulha a cada 8 a 10 horas de uso contínuo para evitar que o olho gasto raspe a torção do fio",
      "Mantenha os cones guardados em caixas plásticas fechadas longe de poeira e luz solar direta"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Linha de Poliéster Trilobal",
      "Sentido de Torção do Fio (Z vs S)",
      "Lançadeira Rotativa",
      "Guia-Fio e Antena de Linha"
    ],
    "tags": [
      "n-077",
      "torcao por metro",
      "tpm",
      "tenacidade",
      "resistencia de linha",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MADEIRA Thread Technical Engineering Guide. Twist per Meter, Tenacity and Lubrication. Freiburg, 2021.",
      "PARRISH, Gail. Thread Physics: Tensile Strength, Twist Dynamics and Loop Formation in Computerized Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de 10 cm de linha de bordado de boa marca e tente desenrolar a ponta com a unha para contar quantos fiozinhos finos formam o cabo. Depois faça o mesmo com uma linha de costura comum. Veja como a linha de bordar é muito mais unida e brilhante graças à torção perfeita!",
    "quickSummary": "O número de voltas que a linha tem para ser forte, brilhante e não arrebentar na velocidade da máquina.",
    "beginnerExplanation": "A torção é como uma trança bem feita no cabelo: quanto mais certinha e calibrada for a quantidade de voltas que a linha dá, mais resistente e brilhante ela fica, passando suave pela agulha da máquina sem desfiar nem arrebentar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-078-nivelamento-de-altura-e-calibracao-dos-sensores-de-fim-de-curso-do-pantografo",
    "code": "N-078",
    "term": "Nivelamento de Altura e Calibração dos Sensores de Fim de Curso do Pantógrafo (Pantograph Limit Switch Alignment)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (nivelar) e do francês pantographe (mecanismo articulado de ampliação de desenho / mesa CNC).",
    "summary": "Procedimento técnico de alinhamento milimétrico e calibração dos sensores ópticos e mecânicos que delimitam a área máxima útil de movimento dos eixos X e Y do bastidor.",
    "definition": "Nivelamento de Altura e Calibração dos Sensores de Fim de Curso do Pantógrafo (Pantograph Limit Switch & Frame Travel Optical Calibration) é o protocolo de manutenção mecânica e eletrônica responsável por calibrar as chaves de limite ópticas (foto-sensores infravermelhos) ou microswitches magnéticos posicionados nas extremidades dos eixos X e Y da máquina de bordar. Esses sensores enviam o sinal de interrupção para a placa-mãe caso o bastidor se aproxime do limite físico do chassi, impedindo colisões violentas entre o pantógrafo e as cabeças de costura ou quebra de agulhas e motores de passo.",
    "technicalDetails": "Distância de segurança do limite mecânico: 5,0 mm a 8,0 mm. Repetibilidade de detecção: ± 0,02 mm. Tipo de sensor: Barreira óptica infravermelha com fenda (Optical Interrupter / Photomicrosensor) ou sensor magnético Hall. Tensão de sinal: 5V DC ou 24V DC.",
    "construction": [
      "Sensores ópticos em formato de U montados em suportes de alumínio usinado",
      "Lâminas de obstrução metálicas (*flags*) fixadas nas guias móveis dos eixos X e Y",
      "Trilhos lineares de aço temperado com retificação micrométrica",
      "Cabos flexíveis blindados com proteção anti-ruído eletromagnético em esteira porta-cabos",
      "Software de diagnóstico de I/O na placa de controle da máquina de bordar"
    ],
    "howItWorks": [
      "1. Acessa-se a tela de diagnóstico técnico de entradas e saídas (I/O Test) no painel da máquina.",
      "2. Movimenta-se o pantógrafo manualmente nos eixos X e Y em direção às extremidades do curso útil.",
      "3. Verifica-se no painel se o indicador luminoso do sensor de limite acende antes de o suporte encostar no batente.",
      "4. Mede-se com paquímetro digital a folga física restante entre o pantógrafo e o chassi (deve ser de 5 a 8 mm).",
      "5. Se houver desvio, solta-se o parafuso do suporte do sensor e ajusta-se a lâmina de obstrução na posição correta.",
      "6. Limpa-se a lente do foto-sensor com cotonete seco para remover pó de linha acumulado.",
      "7. Executa-se o comando de 'Retorno à Origem (Home Origin)' para confirmar a centralização perfeita do bastidor."
    ],
    "mainTypes": [
      "Sensores de Limite Ópticos por Barreira de Luz (Os mais comuns e precisos em máquinas modernas)",
      "Sensores Magnéticos de Efeito Hall (Imunes a poeira têxtil e fiapos de linha)",
      "Micro-Chaves Eletromecânicas com Alavanca e Rolete (Usadas em máquinas clássicas e pesadas)"
    ],
    "characteristics": [
      "Proteção total contra colisões destrutivas entre o bastidor e a estrutura da máquina",
      "Precisão absoluta no retorno ao ponto de origem (Home / Ponto Zero da Matriz)",
      "Detecção instantânea de ultrapassagem de área em tempo real (< 5 milissegundos)",
      "Garantia de que o bordado fique exatamente centralizado no bastidor selecionado"
    ],
    "limitations": [
      "Poeira e fiapos de linha acumulados dentro do sensor óptico podem gerar falsos alarmes de limite",
      "Não protege contra a colocação de bastidores de tamanho errado no painel da máquina",
      "Exige ferramentas de precisão e desligamento da força antes de manusear cabos de sinal"
    ],
    "numberingSystem": [
      "Folga de Segurança: 6,0 mm",
      "Tolerância de Centralização: ± 0,05 mm",
      "Tempo de Resposta: < 5 ms"
    ],
    "advantages": [
      "✔ Evita quebras catastróficas de bastidores, agulhas e correias por batida no final do curso",
      "✔ Garante que o desenho bordado fique perfeitamente alinhado e sem desvios de posição",
      "✔ Elimina mensagens de erro falso de 'Limite Excedido' que travam a produção no meio do dia"
    ],
    "commonErrors": [
      "❌ Deixar acumular bolinhas de fiapo dentro da ranhura do sensor óptico, fazendo a máquina apitar direto",
      "❌ Entortar a lâmina de metal do sensor durante a troca de bastidores pesados",
      "❌ Desativar a função de limite de área no menu de serviço técnico para tentar bordar fora do campo"
    ],
    "voceSabia": "O termo 'Pantógrafo' vem dos instrumentos de desenho manuais criados pelo astrônomo alemão Christoph Scheiner em 1603 para copiar mapas e cartas celestes em escalas ampliadas; na máquina de bordar, o pantógrafo é o 'braço robótico' que movimenta o tecido sob a agulha!",
    "curiosidadeTecnica": "Quando o pantógrafo atinge a velocidade de 1.000 PPM, ele freia e inverte o sentido de movimento em menos de 15 milissegundos; se um sensor de fim de curso falhar nessa velocidade, o impacto mecânico pode empenar um eixo linear de aço em fração de segundo.",
    "dicaArtrelados": "Uma vez por mês, passe um pincel macio ou um jato suave de ar comprimido nas quatro pontas dos trilhos da sua máquina de bordar (onde ficam as luzinhas vermelhas dos sensores): limpar a poeira de linha dessas ranhuras evita 99% dos erros chatos de limite de bastidor que interrompem seu trabalho!",
    "comparisonTable": {
      "headers": [
        "Estado do Sensor",
        "Comportamento da Máquina",
        "Segurança Operacional",
        "Precisão de Ponto Zero"
      ],
      "rows": [
        [
          "Calibrado e Limpo",
          "Trabalha suave e para no limite perfeito",
          "Máxima (zero risco de impacto)",
          "Perfeita (± 0,02 mm)"
        ],
        [
          "Sujo com Fiapos",
          "Dá alarme de erro 'Limite' sem motivo",
          "Máquina para à toa",
          "Normal"
        ],
        [
          "Desalinhado / Frouxo",
          "Pode bater no chassi da máquina",
          "Perigoso (risco de quebra)",
          "Perde a centralização"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-calibração: Operação estável até velocidade máxima nominal",
      "needleType": "Compatível com a produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Padrão de trabalho",
      "density": "N/A"
    },
    "applications": [
      "Revisão técnica semestral de máquinas monocabeça e industriais multicabeças",
      "Calibração de área de bordado após transporte ou mudança de layout do ateliê",
      "Correção de desvios de centralização em bastidores gigantes de jaquetas e bonés",
      "Diagnóstico de erros recorrentes de 'Frame Limit Error' no painel de comando"
    ],
    "troubleshootingTips": [
      "Se a máquina acusar erro de limite logo ao ligar, limpe a fenda dos sensores ópticos X e Y com ar seco",
      "Verifique se o cabo flat ou fiação flexível não está partido dentro da esteira de proteção",
      "Teste o acionamento manual do sensor pela tela de diagnóstico do painel da máquina"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Pantógrafo",
      "Servomotores do Pantógrafo",
      "Alinhamento e Nivelamento do Bastidor",
      "Manutenção Preventiva"
    ],
    "tags": [
      "n-078",
      "fim de curso",
      "sensor optico",
      "pantografo",
      "calibracao",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BARUDAN Technical Service Manual. Optical Sensors, Limit Switches & Home Calibration. Ichinomiya, 2021.",
      "PARRISH, Gail. CNC Motion Limits and Optical Sensor Calibration in Embroidery Machinery. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina ligada no menu inicial e sem bastidor, aperte as setas de movimento do painel para levar o suporte até o canto extremo direito devagarzinho. Veja no visor como a máquina para sozinha com segurança e acende o aviso antes de encostar na parede de metal. É assim que ela se protege!",
    "quickSummary": "Regulagem dos sensores que avisam até onde o bastidor pode ir sem bater nas laterais da máquina.",
    "beginnerExplanation": "Os sensores de fim de curso são como os sensores de ré de um carro: eles avisam o computador da máquina que o bastidor chegou pertinho da borda máxima e mandam parar imediatamente, evitando que o bastidor bata com força na lateral da máquina!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-079-nodulo-de-arremate-oculto-em-ponto-tridimensional",
    "code": "N-079",
    "term": "Nódulo de Arremate Oculto em Ponto Tridimensional (3D Foam Hidden Lock Stitch & Anchor Security)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim nodulus (pequeno nó / nódulo de retenção) e do grego treis / diastasis (três dimensões / relevo volumétrico).",
    "summary": "Algoritmo de programação de microarremates posicionados no interior ou na base estrutural de matrizes de alto-relevo em EVA 3D, garantindo fixação absoluta sem amassar a espuma nem deixar pontas visíveis.",
    "definition": "Nódulo de Arremate Oculto em Ponto Tridimensional (3D Puffy Foam Hidden Lock Stitch & Anchor Node) é a técnica de digitalização especializada que substitui os nós de arremate comuns (que geram pequenos caroços visíveis de linha na superfície do relevo) por sequências microscópicas de ancoragem em zigue-zague ultra-curto (0,4 mm a 0,6 mm) embutidas diretamente na camada base (underlay de corte) ou no centro axial interno da coluna de satim antes da cobertura do EVA. Essa programação impede que a ponta da linha escape após o corte automático, mantendo o relevo 3D perfeitamente liso, esticado e inviolável.",
    "technicalDetails": "Comprimento do micro-ponto de arremate: 0,4 mm a 0,6 mm. Número de pontos de nódulo: 3 a 4 micro-pontos em triângulo ou linha reta interna. Direção do arremate: Paralela ao eixo longitudinal da coluna de satim. Tensão superior: 130 a 145 gf (alta para selar o EVA).",
    "construction": [
      "Underlay preliminar de corte de borda em linha reta ao longo do perímetro da letra 3D",
      "Nódulo de microarremate embutido no centro do traço antes de iniciar o ponto cheio",
      "Espuma de EVA de alta densidade (40 a 60 kg/m³) de 2,0 mm a 3,0 mm de espessura",
      "Ponto de cobertura em satim de alta densidade (0,20 mm a 0,26 mm)",
      "Microarremate final oculto executado sob as últimas 3 passadas de satim antes do corte"
    ],
    "howItWorks": [
      "1. Na digitalização da letra em 3D, programa-se o ponto de início no interior do objeto.",
      "2. O software insere 3 micro-pontos de 0,5 mm no meio da área onde ficará a espuma, criando a âncora.",
      "3. A máquina borda o contorno de perfuração (cut underlay) que vai cortar o EVA nas bordas.",
      "4. Posiciona-se a placa de EVA 3D sobre o tecido com uma fita adesiva de papel nas pontas.",
      "5. A máquina cobre o EVA com pontos satim bem apertados de um lado para o outro.",
      "6. Ao finalizar a coluna, o algoritmo executa o arremate final dentro da coluna, debaixo dos próprios fios.",
      "7. A faca corta a linha e o relevo fica 100% limpo, sem nenhuma pontinha de linha sobrando por fora."
    ],
    "mainTypes": [
      "Microarremate em Linha Reta Axial (Para colunas retas de letras de boné tipo New Era)",
      "Microarremate em Estrela Triangular (Para vértices agudos e pontas de letras onde o EVA é mais fino)",
      "Nódulo em Ponto de Retenção Subterrâneo (Executado no tecido base antes da colocação do EVA)"
    ],
    "characteristics": [
      "Superfície do bordado 3D perfeitamente lisa, brilhante e sem nós salientes",
      "Fixação ultra-segura da linha que não desmancha mesmo com atrito e lavagem",
      "Corte limpo do EVA pelas próprias passadas de satim sem deixar rebarbas",
      "Acabamento de padrão de marcas consagradas de bonés de beisebol (MLB, NBA)"
    ],
    "limitations": [
      "Exige software de nível avançado que permita controlar manualmente a posição dos nós de arremate",
      "Não deve ser feito com pontos muito longos que não consigam travar o nó",
      "O EVA deve ser de cor idêntica ou o mais próximo possível da cor da linha de topo"
    ],
    "numberingSystem": [
      "Comprimento do Microponto: 0,5 mm",
      "Quantidade de Pontos do Nó: 3 a 4 pontos",
      "Densidade do Satim 3D: 0,22 mm a 0,25 mm"
    ],
    "advantages": [
      "✔ Acaba com as feias 'pontinhas de linha' espetadas para fora no topo de letras em 3D de bonés",
      "✔ Garante que o bordado em alto relevo resista ao uso diário severo sem soltar nenhum fio",
      "✔ Proporciona um visual profissional idêntico aos bonés originais importados"
    ],
    "commonErrors": [
      "❌ Deixar o nó de arremate comum ativado na superfície do EVA, amassando a espuma e criando um buraco",
      "❌ Não fazer arremate nenhum para 'economizar ponto', fazendo a letra desmanchar na primeira lavagem",
      "❌ Fazer nós com pontos maiores que 1,2 mm que escapam debaixo do satim e aparecem na lateral"
    ],
    "voceSabia": "A tecnologia de bordado 3D com espuma de EVA foi criada no Japão na década de 1990 para os bonés da Major League Baseball (MLB); os nós ocultos foram desenvolvidos para que a linha não desmanchasse quando o boné sofresse o impacto de uma bola a 150 km/h!",
    "curiosidadeTecnica": "A densidade em um bordado 3D chega a 0,22 mm (quase o dobro do bordado normal); os micro-pontos de arremate ocultos geram uma pressão de retenção por atrito superior a 2,5 kgf dentro da coluna, tornando impossível desfazer a amarração à mão.",
    "dicaArtrelados": "Ao programar matrizes para boné 3D, coloque sempre o ponto de entrada e o ponto de saída do arremate exatamente no centro da coluna de satim e nunca nas bordinhas: assim, os fios de cobertura passam por cima do nó e escondem tudo perfeitamente, deixando a letra impecável!",
    "comparisonTable": {
      "headers": [
        "Tipo de Arremate",
        "Visual no Bordado 3D",
        "Fixação e Segurança",
        "Risco de Buraco no EVA"
      ],
      "rows": [
        [
          "Nódulo Oculto no Satim",
          "100% liso, limpo e uniforme",
          "Altíssima (travamento interno)",
          "Zero (o nó fica protegido)"
        ],
        [
          "Arremate Comum de Superfície",
          "Caroço visível e ponta solta",
          "Média",
          "Alto (esmaga o EVA)"
        ],
        [
          "Sem Arremate",
          "Liso no início",
          "Nula (desfia com o tempo)",
          "Zero"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "75/11 ou 80/12 SES (Ponta Bola) ou SAN 1 Reforçada",
      "stabilizer": "Entretela Rasgável Grossa de Boné 80 g/m² + EVA 3D 2,5 mm",
      "threadTension": "Superior: 135 a 145 gf / Bobina: 24 gf",
      "density": "0.22 mm a 0.25 mm (Satim de alta densidade)"
    },
    "applications": [
      "Bonés estruturados de aba reta e aba curva de times de beisebol e basquete",
      "Logotipos tridimensionais em jaquetas pesadas de couro e tactel",
      "Emblemas e patches em alto-relevo para vestuário tático e esportivo",
      "Monogramas acolchoados em bolsas, mochilas e estojos premium"
    ],
    "troubleshootingTips": [
      "Se ficarem pedacinhos de EVA aparecendo nas pontas, use um soprador térmico ou isqueiro rápido para encolher as rebarbas",
      "Regule a tensão superior mais apertada para que o satim corte o EVA de fora a fora perfeitamente",
      "Programe tampas de satim (capping) nas pontas abertas das letras antes de bordar o corpo principal"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Bordado 3D com Espuma EVA",
      "Nó de Arremate",
      "Ponto Satim / Ponto Cheio",
      "Boné Estruturado"
    ],
    "tags": [
      "n-079",
      "arremate oculto",
      "eva 3d",
      "bordado 3d",
      "bones",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "NEW ERA Cap Company Technical Embroidery Standards. 3D Puff Digitizing and Lock Stitch Specs. Buffalo, 2021.",
      "PARRISH, Gail. Advanced 3D Foam Digitizing: Hidden Anchor Nodes and Edge Perforation Mechanics. Cincinnati, 2022."
    ],
    "practicalExercise": "Digitalize uma letra 'A' em ponto satim com largura de 5 mm para bordar com EVA 3D. Programe os nós de arremate de início e fim no centro da coluna com 3 micropontos de 0,5 mm. Borde em um boné com EVA de 2,5 mm e veja como as pontas ficam lisas como mármore polido!",
    "quickSummary": "Nós de acabamento escondidos por dentro da espuma para o bordado 3D ficar perfeito e não soltar pontas.",
    "beginnerExplanation": "Em bordados altos em 3D de bonés, fazer o nó de arremate por cima deixa uma bolinha feia que amassa a espuma. O nó oculto é um segredinho de mestre onde o nó é dado escondido debaixo dos fios, deixando a letra alta, lisinha e super resistente!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-080-nivelamento-de-tensao-dinamica-em-linhas-metalicas-e-holograficas",
    "code": "N-080",
    "term": "Nivelamento de Tensão Dinâmica em Linhas Metálicas e Holográficas (Metallic Thread Dynamic Tension Leveling)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim metallum (metal precioso / folha metálica) e do grego dynamis (força em movimento).",
    "summary": "Protocolo completo de regulagem de tensão ultra-suave, lubrificação e passagem de linha em fios metalizados e holográficos para evitar quebras, torções e descolamento da fita de poliéster aluminizada.",
    "definition": "Nivelamento de Tensão Dinâmica em Linhas Metálicas e Holográficas (Metallic & Holographic Thread Tension Calibration) é a metodologia técnica de calibração de todos os pontos de atrito mecânico do percurso da linha superior na máquina de bordar ao operar com fios metalizados (núcleo de poliamida ou raiom envolvido por fita de poliéster aluminizada a vácuo com espessura de apenas 12 a 25 mícrons). Como a fita metálica não tem elasticidade e racha com facilidade se submetida a curvas bruscas ou tensões elevadas, o sistema exige redução de 30% a 40% na pressão dos discos de tensão (80 a 95 gf), agulhas de olho largo com acabamento de titânio (Topstitch ou Metallic 80/12 a 90/14) e velocidade moderada de costura.",
    "technicalDetails": "Composição do fio: 65% Fita de Poliéster Metalizada + 35% Núcleo de Poliamida/Raiom. Tensão de linha recomendada: 80 a 95 gf (Tensiômetro Towa). Velocidade ideal: 550 a 650 PPM. Agulha recomendada: 80/12 ou 90/14 Metallic / Topstitch (ranhura profunda e olho 2x maior).",
    "construction": [
      "Carretel de linha metálica posicionado verticalmente com rede de contenção elástica (Thread Net)",
      "Guia-fio superior com curva suave sem ângulos vivos de 90 graus",
      "Discos de tensão aliviados e limpos de resíduos de cola ou verniz metálico",
      "Mola compensadora de tensão com curso alongado e curso suave",
      "Agulha de bordado metálico com revestimento de nitreto de titânio (Gold / PD Finish)"
    ],
    "howItWorks": [
      "1. Envolve-se o carretel metálico com a redinha protetora de malha para controlar a saída do fio sem despenhadeiros.",
      "2. Passa-se a linha pelos guias superiores mantendo trajetórias retilíneas e suaves.",
      "3. Afrouxam-se os tensores superiores até atingir a leitura de 85 a 90 gramas-força no tensiômetro.",
      "4. Instala-se uma agulha especial para linha metálica tamanho 80/12 com olho grande polido.",
      "5. Reduz-se a velocidade da máquina no painel para 600 PPM.",
      "6. A matriz executa pontos com densidade ligeiramente mais aberta (0,46 mm a 0,50 mm) para não atritar fios.",
      "7. A máquina borda suavemente, produzindo reflexos dourados ou holográficos deslumbrantes sem quebrar nenhuma vez."
    ],
    "mainTypes": [
      "Linha Metálica Dourada e Prateada Clássica (Fio 40wt com brilho espelhado para brasões e alta costura)",
      "Linha Holográfica Prismática (Fita plana reflexiva que refrata as cores do arco-íris conforme a luz)",
      "Fio Metálico Suave Resistente a Lavagem (Núcleo de poliéster especial para fardamentos e uniformes)"
    ],
    "characteristics": [
      "Brilho luxuoso incomparável que simula ouro, prata, bronze e pedras preciosas",
      "Comportamento físico rígido com baixíssima memória elástica (alongamento < 5%)",
      "Sensibilidade extrema ao atrito e aquecimento térmico no olho da agulha",
      "Excelente solidez à oxidação quando fabricada com filmes de poliéster aluminizado premium"
    ],
    "limitations": [
      "Nunca bordar em velocidade máxima (850 a 1.000 PPM) com linhas metálicas convencionais",
      "Não usar agulhas normais de olho pequeno (75/11 padrão) que descascam a fita metálica",
      "Evitar lavagens com produtos clorados ou alvejantes à base de cloro forte"
    ],
    "numberingSystem": [
      "Tensão Dinâmica: 85 gf a 95 gf",
      "Calibre de Agulha: 80/12 ou 90/14 Metallic",
      "Velocidade Recomendada: 550 a 650 PPM"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor percebido e sofisticação a peças de festa, religiosas, fardas e noivas",
      "✔ Elimina o pesadelo de quebra constante de linha metálica a cada 20 segundos de máquina",
      "✔ Mantém o bordado macio e brilhante sem aspecto áspero de arame"
    ],
    "commonErrors": [
      "❌ Manter a mesma tensão apertada usada para poliéster comum, fazendo a linha metálica estourar direto",
      "❌ Deixar o carretel desenrolar solto sem redinha protetora, fazendo o fio cair na base e embolar",
      "❌ Borda matrizes com pontos muito curtos (< 1,5 mm) que moem a lâmina metálica no tecido"
    ],
    "voceSabia": "Nos séculos XVII e XVIII, as linhas metálicas dos mantos reais eram feitas de ouro e prata puros martelados em lâminas ultrafinas e enrolados à mão em fios de seda; hoje, o poliéster aluminizado a vácuo reflete a luz com a mesma nobreza, mas com custo acessível a todos os ateliês!",
    "curiosidadeTecnica": "O ponto de fusão do verniz protetor de uma linha metálica é de cerca de 130°C; em uma máquina a 900 PPM com agulha comum, o atrito atinge mais de 160°C no olho da agulha em apenas 8 segundos, derretendo a fita metálica instantaneamente.",
    "dicaArtrelados": "Ao bordar com linha dourada ou prateada, coloque uma redinha de proteção no cone de linha e abaixe a velocidade da máquina para 600 PPM. O segredo de ouro: use agulha tamanho 80/12 ou 90/14 própria para linha metálica (aquela que tem o buraquinho bem grandão): você vai bordar toalhas e mantos inteiros sem quebrar a linha nem uma única vez!",
    "comparisonTable": {
      "headers": [
        "Parâmetro",
        "Linha Poliéster Comum",
        "Linha Metálica / Holográfica"
      ],
      "rows": [
        [
          "Tensão Superior",
          "110 a 125 gf",
          "80 a 95 gf (30% mais frouxa)"
        ],
        [
          "Tamanho do Olho da Agulha",
          "Padrão",
          "Alongado 2x (Agulha Metallic / Topstitch)"
        ],
        [
          "Velocidade de Máquina",
          "750 a 950 PPM",
          "550 a 650 PPM (Moderação)"
        ],
        [
          "Elasticidade do Fio",
          "Alta (alongamento 20%)",
          "Quase nula (alongamento < 5%)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 ou 90/14 Metallic / Topstitch (Schmetz ou Groz-Beckert)",
      "stabilizer": "Entretela de Recorte Macia 60 g/m² ou Rasgável de boa qualidade",
      "threadTension": "Superior: 85 a 95 gf / Bobina: 20 a 22 gf",
      "density": "0.46 mm a 0.50 mm com pontos mínimos de 1.8 mm"
    },
    "applications": [
      "Vestidos de noiva, véus, mantos religiosos e vestes litúrgicas de luxo",
      "Brasões militares, dragonas, condecorações e insígnias de gala",
      "Fantasias de carnaval de alto padrão e figurinos teatrais e cinematográficos",
      "Toalhas comemorativas de bodas de ouro e prata e presentes finos de Natal"
    ],
    "troubleshootingTips": [
      "Se a linha estiver desfiando antes da agulha, use um pouco de silicone líquido para fios no cone",
      "Verifique se não há rebarbas de metal arranhadas nos discos de tensão ou na chapa de agulha",
      "Aumente o comprimento mínimo de ponto da matriz para 2,0 mm no software de digitalização"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Linha Metálica",
      "Nivelamento de Tensão de Linha",
      "Agulha para Fio Metálico",
      "Tensiômetro Towa"
    ],
    "tags": [
      "n-080",
      "linha metalica",
      "holografica",
      "tensao dinamica",
      "fio dourado",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MADEIRA Metallic Threads User Guide & Tension Leveling Dynamics. Freiburg, 2021.",
      "PARRISH, Gail. Metallic and Holographic Thread Engineering: Friction Reduction, Needle Selection and Machine Tuning. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um cone de linha metálica dourada. Ajuste a tensão superior da sua máquina para que a linha corra macia como seda puxando com os dedos. Troque para agulha 80/12 Metallic, coloque a velocidade em 600 PPM e borde um monograma em uma toalha. Veja a perfeição do brilho dourado!",
    "quickSummary": "Regulagem de tensão leve e velocidade suave para bordar com linhas douradas e prateadas sem quebrar.",
    "beginnerExplanation": "A linha dourada ou prateada é delicada porque tem uma capinha de metal fininha por fora que pode descascar se for puxada com muita força. Para bordar lindo com ela, a gente deixa a linha de cima mais soltinha, usa agulha de furo grande e diminui a velocidade da máquina!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-081-nao-tecidos-hidrossoluveis-em-filme-pva-vs-tela-emalhada",
    "code": "N-081",
    "term": "Não-Tecidos Hidrossolúveis em Filme PVA vs. Tela Emalhada (Cold-Water Soluble Film vs. Non-Woven PVA Fleece)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego hydor (água) e do latim solvere (dissolver / desmanchar em líquido) e do alemão Vlies (manta de fibras não-tecidas).",
    "summary": "Estudo comparativo e critérios técnicos de escolha entre filmes plásticos transparentes de álcool polivinílico (PVA) e entretelas não-tecidas hidrossolúveis de fibras têxteis prensadas.",
    "definition": "Não-Tecidos Hidrossolúveis em Filme PVA vs. Tela Emalhada (Cold-Water Soluble Stabilizers: Film vs. Non-Woven Fleece) é a classificação técnica dos materiais de sustentação solúveis em água fria utilizados no bordado computadorizado. O Filme Plástico de PVA (20 a 40 mícrons) é impermeável ao ar e atua como película de topo (*topping*) para evitar o afundamento dos pontos na felpa de toalhas e veludos. Já o Não-Tecido Hidrossolúvel (PVA Fleece / Soluvlies de 40 a 80 g/m²) é uma manta de microfibras tramadas multidirecionais com alta resistência à perfuração mecânica, ideal como suporte de base (*backing*) para rendas autoportantes (FSL - Free Standing Lace), richelieu e tecidos ultrafinos transparentes.",
    "technicalDetails": "Filme PVA (Topping): Espessura de 20 a 35 mícrons / Densidade 1,2 g/cm³ / Dissolução em água fria (20°C) em 15 segundos. Não-Tecido PVA (Backing): Gramatura de 40 a 80 g/m² / Resistência à tração multidirecional: > 25 N/cm² / Dissolução completa sem deixar resíduos viscosos.",
    "construction": [
      "Filme de polímero de álcool polivinílico (PVA) transparente com relevo antiestático gofrado",
      "Manta não-tecida hidrossolúvel de fibras cortadas de PVA hidroentrelaçadas (Spunlace)",
      "Agulha ponta bola leve (SES) para não rasgar o filme prematuramente",
      "Linha de bordado 40wt de poliéster ou algodão conforme o estilo da renda",
      "Recipiente com água fria limpa para enxágue final de dissolução"
    ],
    "howItWorks": [
      "1. Para toalhas felpudas: Coloca-se entretela rasgável no fundo e o Filme Plástico PVA por cima da felpa.",
      "2. Para rendas sem tecido (FSL): Colocam-se 2 camadas de Não-Tecido Hidrossolúvel (PVA Fleece) direto no bastidor.",
      "3. A máquina borda a matriz com densidade e nós de travamento integrados.",
      "4. O Não-Tecido suporta milhares de perfurações de agulha sem rasgar nem ceder no bastidor.",
      "5. Retira-se a peça do bastidor e destaca-se o excesso de material com a mão.",
      "6. Mergulha-se a peça em água fria corrente por 30 a 60 segundos.",
      "7. As fibras de PVA se dissolvem 100%, deixando apenas a renda pura ou a toalha macia sem nenhuma entretela visível."
    ],
    "mainTypes": [
      "Filme Hidrossolúvel Leve (20 mícrons - Plástico fininho para colocar em cima de toalhas e malhas)",
      "Não-Tecido Hidrossolúvel Spunlace (45 g/m² - Manta têxtil para tecidos finos, organza e sedas)",
      "Não-Tecido Hidrossolúvel Pesado (80 g/m² - Manta grossa para rendas pesadas, brincos e colares bordados)"
    ],
    "characteristics": [
      "Dissolução total e limpa em água fria ou morna sem necessidade de produtos químicos",
      "Não deixa fiapos, bordas duras ou resíduos perceptíveis ao toque no avesso da peça",
      "Alta flexibilidade que acompanha os movimentos de tecidos nobres e delicados",
      "Biodegradável e ambientalmente seguro para descarte em água comum"
    ],
    "limitations": [
      "Sensível à umidade do ar: deve ser guardado em sacos plásticos hermeticamente fechados com sílica gel",
      "Não molhar as mãos antes de manusear a entretela no ateliê para não começar a derreter",
      "O filme plástico fininho não serve como base para rendas soltas (rasga com muitos pontos)"
    ],
    "numberingSystem": [
      "Filme de Topo: 20 a 35 μm (Mícrons)",
      "Não-Tecido de Base: 40 a 80 g/m²",
      "Temperatura de Dissolução: 15°C a 30°C (Água fria)"
    ],
    "advantages": [
      "✔ Cria rendas artesanais deslumbrantes (Richelieu e Guipir) direto na máquina de bordar",
      "✔ Garante que nomes e monogramas fiquem 100% nítidos por cima das felpas das toalhas",
      "✔ Deixa o avesso de toalhas de lavabo e vestidos de bebê totalmente macio e limpo"
    ],
    "commonErrors": [
      "❌ Usar o plástico fininho de topo para tentar bordar renda solta no ar, fazendo a matriz rasgar e despencar",
      "❌ Deixar a entretela solúvel aberta em dias de chuva no ateliê, fazendo ela virar uma pasta grudenta",
      "❌ Não enxaguar direito a renda, deixando a peça dura e engomada demais após a secagem"
    ],
    "voceSabia": "O polímero PVA (Álcool Polivinílico) solúvel em água foi descoberto pelos químicos alemães Willy Herrmann e Wolfram Haehnel em 1924; hoje, além do bordado, é o mesmo material ecológico usado nas cápsulas de sabão líquido de lava-louças e lava-roupas que se dissolvem sozinhas na água!",
    "curiosidadeTecnica": "A resistência à tração de uma manta de Não-Tecido Hidrossolúvel de 60 g/m² é 4 vezes superior à de um filme de PVA comum de 35 mícrons, permitindo suportar mais de 1.800 furos de agulha por centímetro quadrado sem sofrer colapso estrutural.",
    "dicaArtrelados": "Para fazer rendas soltas perfeitas (FSL) que fiquem com a firmeza ideal para virar brincos, colares ou toalhinhas: enxágue a renda em água fria rapidamente por apenas 15 segundos sem esfregar tudo. Deixe secar plana sobre uma toalha: a pequena goma residual da entretela deixa a renda armada e firme como se tivesse saído de uma loja de alta costura!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Filme Plástico PVA (Topping)",
        "Não-Tecido PVA (Fleece / Backing)"
      ],
      "rows": [
        [
          "Aparência Física",
          "Filme plástico transparente",
          "Manta branca semelhante a tecido macio"
        ],
        [
          "Função Principal",
          "Ficar por cima da toalha (segurar pelos)",
          "Ficar no bastidor como base para rendas"
        ],
        [
          "Resistência a Perfuração",
          "Baixa (picota facilmente)",
          "Altíssima (aguenta milhares de pontos)"
        ],
        [
          "Local de Aplicação",
          "Topo do tecido (Topping)",
          "Base / Bastidor puro (Free Standing Lace)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES (Ponta Bola Leve) ou 75/11 H-E",
      "stabilizer": "Filme PVA 25μm (em cima) ou Não-Tecido PVA 60g/m² duplo (para rendas)",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf (Linha de bobina da mesma cor da linha de cima)",
      "density": "0.40 mm a 0.44 mm para rendas estruturadas"
    },
    "applications": [
      "Rendas guipir, toalhas de bandeja e caminhos de mesa estilo Richelieu",
      "Monogramas nítidos em toalhas de banho aveludadas, roupões e cobertores",
      "Bordados em vestidos de noiva transparentes de tule e organza de seda",
      "Acessórios de moda sustentável, brincos, pingentes e marcadores de página de renda"
    ],
    "troubleshootingTips": [
      "Se a renda desmanchar ao lavar, verifique se a matriz possui as redes de underlay cruzado obrigatórias",
      "Para toalhas felpudas, retire o excesso de plástico puxando a seco e passe um pano úmido nos cantinhos",
      "Guarde seus rolos de entretela solúvel dentro de sacos plásticos bem amarrados"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Non-Woven / Não-Tecido",
      "Película Hidrossolúvel",
      "Renda Solta no Bastidor (FSL - Free Standing Lace)",
      "Bordado Richelieu"
    ],
    "tags": [
      "n-081",
      "hidrossoluvel",
      "filme pva",
      "nao tecido solúvel",
      "renda fsl",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FREUDENBERG Performance Materials / Vilene. Soluvlies & Water-Soluble Fleece Technical Data. Weinheim, 2021.",
      "PARRISH, Gail. Water-Soluble Stabilizers: Chemical Physics, Hydro-dissolution and Free Standing Lace Engineering. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque duas camadas de Não-Tecido Hidrossolúvel no bastidor sem tecido nenhum. Borde um desenho de flor em renda FSL. Retire do bastidor e mergulhe em um pote de água fria: veja a mágica acontecer enquanto a entretela some todinha e fica só a florzinha de renda perfeita na sua mão!",
    "quickSummary": "O plástico transparente para segurar pelos de toalha versus a entretela de pano que derrete na água para fazer rendas.",
    "beginnerExplanation": "Existe o plástico transparente solúvel que a gente coloca em cima da toalha felpuda para o bordado não afundar nos pelinhos, e existe a entretela solúvel parecida com um paninho que a gente usa para fazer rendas puras sem tecido: na hora de lavar com água fria, as duas derretem e somem como mágica!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-088-nivelamento-de-angulos-de-ponto-e-fluxo-vetorial-em-curvas-complexas",
    "code": "N-088",
    "term": "Nivelamento de Ângulos de Ponto e Fluxo Vetorial em Curvas Complexas (Stitch Angle Smoothing & Vector Flow)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim angulus (canto / inclinação geométrica) e vector (condutor / direção de propagação matemática de curvas).",
    "summary": "Técnica matemática de digitalização que suaviza as linhas de inclinação do ponto satim ao longo de curvas orgânicas acentuadas, eliminando degraus visíveis e acúmulo de pontos na parte interna.",
    "definition": "Nivelamento de Ângulos de Ponto e Fluxo Vetorial em Curvas Complexas (Stitch Angle Smoothing, Vector Flow & Curve Interpolation) é o algoritmo de digitalização que interpola a inclinação dos fios ao longo de um contorno sinuoso ou curva fechada (como monogramas em estilo caligráfico, caules de plantas e arabescos). O software distribui os ângulos de maneira contínua e perpendicular à linha central, aplicando a função de 'compensação de curva interna' (onde os pontos do lado de dentro do raio diminuem em densidade e encurtam progressivamente) para evitar o empastamento de linha e o corte do tecido.",
    "technicalDetails": "Algoritmo de interpolação: B-Spline Cúbica ou Curvas de Bézier. Resolução de ângulo: 1° a cada 0,8 mm de comprimento de arco. Ângulo máximo de transição entre nós adjacentes: ≤ 15° (evita quebra visual do reflexo de luz). Compensação de raio interno: Redução de 25% a 40% na densidade dos pontos internos.",
    "construction": [
      "Vetor de contorno central com nós de curva Bézier suaves e equilibrados",
      "Linhas guia de inclinação de ponto posicionadas a cada vértice ou ponto de inflexão",
      "Underlay central em linha de contorno simples (Center Walk) que acompanha o raio da curva",
      "Compensação de repuxo dinâmica maior nas curvas acentuadas para evitar estreitamento",
      "Ponto satim com corte fracionado nos pontos internos (Short Stitch Filter ativado)"
    ],
    "howItWorks": [
      "1. No software de matriz, desenha-se o objeto curvilíneo com a ferramenta de Ponto Satim Coluna A/B.",
      "2. Inserem-se as linhas de ângulo de ponto manualmente nas curvas mais fechadas.",
      "3. Ativa-se a ferramenta de 'Suavização Automática de Ângulos (Angle Smoothing)' para criar transições graduais.",
      "4. O software calcula o espaçamento dos pontos: no lado de fora da curva o ponto se estende e no lado de dentro o software intercala pontos mais curtos.",
      "5. A máquina de bordar recebe a instrução sem criar 'degraus' ou paradas bruscas de pantógrafo.",
      "6. A luz reflete nos fios em um fluxo contínuo e sedoso como fita de cetim dobrada.",
      "7. O tecido permanece perfeitamente plano na parte interna da curva, sem formar caroços ou picotes."
    ],
    "mainTypes": [
      "Fluxo Vetorial Perpendicular Automático (Acompanha a linha central da curva de forma autônoma)",
      "Guia Multi-Ângulo Manual (Para monogramas de alta costura, caligrafia fina e brasões complexos)",
      "Interpolação de Curva com Filtro de Pontos Curtos (Para curvas ultra-fechadas de menos de 3 mm de raio)"
    ],
    "characteristics": [
      "Reflexo de luz suave e uniforme ao longo de toda a extensão da letra ou flor",
      "Eliminação definitiva de buracos e picotes de tecido causados por agulhadas concentradas na parte interna",
      "Visual fluido e profissional com acabamento comparável a bordados manuais em seda",
      "Redução de quebras de linha provocadas por atrito em pontos excessivamente amontoados"
    ],
    "limitations": [
      "Ângulos mal posicionados manualmente podem criar linhas de rachadura no meio da coluna",
      "Não colocar linhas de ângulo a menos de 2 mm de distância uma da outra para não confundir o software",
      "Exige compreensão da geometria de reflexo de luz dos fios trilobais"
    ],
    "numberingSystem": [
      "Variação Angular Máxima: 12° a 15° por nó",
      "Raio Mínimo de Curva: 1,5 mm",
      "Filtro de Ponto Curto: Ativado em 30%"
    ],
    "advantages": [
      "✔ Transforma letras cursivas e arabescos em obras de arte com brilho cintilante impecável",
      "✔ Impede que a máquina fure o tecido no mesmo buraquinho no meio de curvas fechadas",
      "✔ Agiliza o tempo de máquina com movimentos de pantógrafo muito mais harmônicos e suaves"
    ],
    "commonErrors": [
      "❌ Deixar uma linha de ângulo a 90° colada ao lado de uma a 45°, criando um dente feio no bordado",
      "❌ Esquecer de ligar o filtro de pontos curtos em curvas fechadas, embolando linha por baixo",
      "❌ Desenhar curvas cheias de pontas e nós desnecessários no software de digitalização"
    ],
    "voceSabia": "A matemática dos fluxos vetoriais usada nos softwares de bordado modernos é a mesma equação desenvolvida pelo engenheiro francês Pierre Bézier em 1962 para desenhar as curvas aerodinâmicas dos carros da Renault!",
    "curiosidadeTecnica": "Quando o ângulo de inclinação do ponto varia mais de 20° bruscamente, o coeficiente de reflexão especular da linha cai em 60%, criando a ilusão óptica de que a linha mudou de cor ou perdeu o brilho naquele ponto exato.",
    "dicaArtrelados": "Ao desenhar letras cursivas ou arabescos no Wilcom ou Embird, use o menor número possível de linhas de ângulo: menos é mais! Coloque uma linha de ângulo no começo da curva, uma exatamente no meio da curva e uma no final. Deixe o software fazer a suavização automática: as curvas ficam redondinhas e o brilho da linha fica um espetáculo!",
    "comparisonTable": {
      "headers": [
        "Aspecto",
        "Ângulos sem Nivelamento (Bruscos)",
        "Ângulos Nivelados com Fluxo Vetorial"
      ],
      "rows": [
        [
          "Reflexo de Luz",
          "Quebrado com linhas de sombra escuras",
          "Cintilante, uniforme e sedoso"
        ],
        [
          "Acúmulo de Linha na Curva",
          "Alto (risco de picotar o tecido)",
          "Perfeito (pontos curtos alternados)"
        ],
        [
          "Movimento do Pantógrafo",
          "Aos trancos e ruidoso",
          "Fluido, silencioso e contínuo"
        ],
        [
          "Acabamento de Letras",
          "Quadrado ou serrilhado nas pontas",
          "Curvas caligráficas perfeitas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 850 PPM",
      "needleType": "75/11 SES de ponta fina",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm com filtro de ponto curto ativado (Short Stitch 30%)"
    },
    "applications": [
      "Monogramas caligráficos clássicos em toalhas de casamento e enxovais de luxo",
      "Arabescos e folhagens barrocas em vestidos de festa e mantos tradicionais",
      "Logotipos corporativos com tipografias manuscritas elegantes e dinâmicas",
      "Ilustrações botânicas, caules florais e plumagens de pássaros realistas"
    ],
    "troubleshootingTips": [
      "Se aparecer uma fenda no meio do satim, delete a linha de ângulo mais próxima e deixe o programa recalcular",
      "Verifique na simulação 3D (TrueView) como a luz reage à inclinação dos pontos antes de mandar para a máquina",
      "Mantenha as linhas de ângulo sempre paralelas ao sentido natural em que uma caneta tinteiro escreveria"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Satim / Ponto Cheio",
      "Ponto Curto (Short Stitch)",
      "Compensação de Repuxo",
      "Underlay / Pontos de Suporte"
    ],
    "tags": [
      "n-088",
      "angulos de ponto",
      "fluxo vetorial",
      "curvas suaves",
      "monogramas",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Curve Smoothing, Stitch Angles & Vector Interpolation Guide. Sydney, 2021.",
      "PARRISH, Gail. Vector Flow Dynamics and Stitch Angle Geometry in Artistic Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Desenhe a letra 'S' em ponto satim no seu programa de matriz. Coloque 4 linhas de ângulo acompanhando a curva suavemente. Ligue a visualização 3D e gire a tela: veja como o reflexo da linha escorrega pela letra feito seda líquida! Depois borde em um retalho e confirme a perfeição ao vivo.",
    "quickSummary": "Como inclinar os pontos nas curvas para a linha brilhar sem quebrar o tecido nem embolar pontinhos.",
    "beginnerExplanation": "Quando a gente borda uma letra cheia de curvas (como a letra 'S'), os pontos precisam ir virando devagarinho para acompanhar a curva: nivelar os ângulos é garantir que essa virada seja bem suave, fazendo a linha brilhar como cetim e sem furar o tecido por dentro da curva!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-089-nomenclatura-e-tipologia-de-bastidores-especializados",
    "code": "N-089",
    "term": "Nomenclatura e Tipologia de Bastidores Especializados (Cilíndricos, Meia-Lua e Tubulares) (Specialty Frames & Hoops)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Bastidores & Acessórios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego onoma / kletos (sistema de nomes / classificação técnica) e do latim vasculum (aro / moldura de sustentação têxtil).",
    "summary": "Guia sistemático de identificação, geometria e uso correto dos bastidores especiais: modelos para bonés 270°, bastidores de bolso/manga, aros meia-lua para meias e bastidores magnéticos contínuos.",
    "definition": "Nomenclatura e Tipologia de Bastidores Especializados (Specialty Embroidery Hoops, Frames & Clamping Fixtures) é a padronização técnica da ampla família de dispositivos de fixação desenvolvidos para permitir o bordado computadorizado em áreas tridimensionais, tubulares, de difícil acesso ou com restrições geométricas severas onde os bastidores planos convencionais não conseguem entrar. Essa categoria abrange os Bastidores Cilíndricos de Boné (Cap Frames com rotação de 270°), Bastidores Meia-Lua e de Bolso (Pocket & Sock Frames), Bastidores Tubulares para Mangas e Pernas de Calça, e Grampos Pneumáticos ou Magnéticos Industriais.",
    "technicalDetails": "Raio de curvatura do bastidor de boné: 80 mm a 95 mm (arco de 270° / campo útil 360 x 70 mm). Bastidores de bolso: 65 x 65 mm a 100 x 100 mm com perfil ultrafino. Bastidores de meia: Clamp com mordentes de mola ajustáveis. Material dos aros: Alumínio aeronáutico anodizado, aço inox e poliacetal (POM) de alta rigidez.",
    "construction": [
      "Base de montagem com engate rápido tipo rabo de andorinha ou baioneta para o braço tubular",
      "Aros de fixação com perfil anatômico adaptado ao formato da peça (curvo, oval ou retangular estreito)",
      "Cintas de aço inox flexível com fecho de alavanca de pressão para bonés estruturados",
      "Gabarito de bancada (*hooping station*) com presilhas para pré-montagem rápida fora da máquina",
      "Revestimento interno emborrachado para máxima aderência sem marcas no tecido"
    ],
    "howItWorks": [
      "1. Identifica-se a peça a ser bordada (ex: bolso de camisa fechado, meia esportiva ou boné de aba curva).",
      "2. Seleciona-se o bastidor especializado correspondente à geometria da peça.",
      "3. Utiliza-se a estação de montagem de bancada para posicionar a entretela e a peça no bastidor correto.",
      "4. Trava-se a presilha de pressão ou a cinta de aço mantendo a área a ser bordada perfeitamente esticada.",
      "5. Encaixa-se o bastidor no braço tubular da máquina de bordar (a peça veste o braço livremente).",
      "6. A máquina executa o bordado com movimentação rotacional ou cartesiana sem costurar o fundo da peça.",
      "7. Destrava-se a alavanca rápida e a peça acabada sai pronta em segundos sem necessidade de desmanchar costuras."
    ],
    "mainTypes": [
      "Bastidor Cilíndrico de Boné 270° (Cap Driver / Wide Cap Frame para bordar frente e laterais de boné)",
      "Bastidor de Bolso e Meia (Pocket / Sock Clamp para bordar bolsos prontos e punhos sem descosturar)",
      "Bastidor de Manga Tubular Longo (Sleeve Frame estreito para pernas de calça, mangas e botas)",
      "Bastidores Magnéticos de Montagem Rápida (Mighty Hoops para fardamentos, mochilas e jaquetas)"
    ],
    "characteristics": [
      "Capacidade de bordar peças prontas e fechadas sem precisar descosturar nada",
      "Estrutura rígida de engenharia que impede a vibração da peça em rotações de até 850 PPM",
      "Engate rápido e seguro compatível com o sistema tubular da máquina industrial",
      "Versatilidade para personalizar centenas de produtos diferentes no mesmo ateliê"
    ],
    "limitations": [
      "Cada modelo de máquina possui medidas de encaixe próprias (não são 100% intercambiáveis entre marcas)",
      "Exigem matrizes digitalizadas com parâmetros específicos (ex: bordado de boné borda do centro para as pontas)",
      "Montagem incorreta pode causar colisão com a barra de agulha ou chapa de base"
    ],
    "numberingSystem": [
      "Bastidor de Boné: 270° (360 x 70 mm)",
      "Bastidor de Bolso: 75 x 75 mm",
      "Bastidor Tubular: 150 x 400 mm"
    ],
    "advantages": [
      "✔ Multiplica as oportunidades de faturamento do ateliê com produtos de alto valor (bonés, botas, bolsas)",
      "✔ Elimina o tempo perdido e o custo de mandar descosturar e recosturar bolsos e mangas de camisas",
      "✔ Agiliza o fluxo de produção com trocas de bastidor em menos de 10 segundos"
    ],
    "commonErrors": [
      "❌ Esquecer de inverter o sentido da matriz ao usar bastidor de boné (o boné fica de cabeça para baixo)",
      "❌ Borda muito perto da borda metálica do bastidor de boné, quebrando a agulha no aro de aço",
      "❌ Tentar usar bastidor plano tradicional em bolso fechado, costurando a camisa fechada junto"
    ],
    "voceSabia": "O primeiro bastidor rotativo de boné para máquinas de bordar foi desenvolvido no Japão pela Tajima em 1988 para os bonés da Fórmula 1; antes disso, todos os bonés precisavam ser bordados desmontados em pedaços planos antes de serem costurados na fábrica!",
    "curiosidadeTecnica": "Ao bordar em bastidor cilíndrico de boné a 800 PPM, a força centrífuga tenta empurrar a entretela para fora da aba; por isso as cintas de aço inox exercem uma pressão radial de mais de 8 kgf no perímetro inferior da copa.",
    "dicaArtrelados": "Ao montar boné no bastidor de 270°, puxe a entretela de boné bem firme para baixo antes de travar a fita de aço: o boné tem que ficar esticado e fazer barulho de tambor quando você bater o dedo no meio da copa: isso garante que o bordado 3D fique perfeito e sem nenhuma ruga!",
    "comparisonTable": {
      "headers": [
        "Tipo de Bastidor",
        "Geometria Principal",
        "Aplicação Indicada",
        "Velocidade Recomendada"
      ],
      "rows": [
        [
          "Bastidor Plano Tradicional",
          "Plana retangular / oval",
          "Camisetas abertas, toalhas, tecidos planos",
          "750 a 950 PPM"
        ],
        [
          "Bastidor de Boné 270°",
          "Cilíndrica curva",
          "Bonés estruturados, viseiras, gorros",
          "600 a 750 PPM"
        ],
        [
          "Bastidor de Bolso / Meia",
          "Grampo plano estreito",
          "Bolsos de camisa fechados, meias, luvas",
          "650 a 750 PPM"
        ],
        [
          "Bastidor Tubular de Manga",
          "Retangular alongado estreito",
          "Mangas compridas, pernas de calça jeans",
          "700 a 800 PPM"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 a 750 PPM para bonés / 750 PPM para outros bastidores",
      "needleType": "DBxK5 75/11 ou 80/12 SAN 1 conforme a rigidez da peça",
      "stabilizer": "Entretela pesada rasgável de boné (80 g/m²) ou recorte tubular",
      "threadTension": "Calibrada para o material",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Bonés promocionais, bonés esportivos de beisebol e chapéus de pescador",
      "Bolsos frontais de camisas sociais, jalecos médicos e jaquetas executivas",
      "Meias esportivas personalizadas, polainas e punhos de moletom",
      "Calçados de tecido, pantufas, botas de montaria e luvas de trabalho"
    ],
    "troubleshootingTips": [
      "Se a matriz bater no calcador, faça sempre a simulação de traçado de área (Trace) no painel antes de dar o Start",
      "Verifique se o braço livre da máquina está bem lubrificado no trilho de encaixe",
      "Utilize agulhas reforçadas (SAN 1) em bastidores de boné para evitar deflexão em costuras grossas centrais"
    ],
    "relatedTerms": [
      "Bastidores & Acessórios",
      "Bastidor de Boné",
      "Bastidores Magnéticos",
      "Braço Tubular da Máquina",
      "Nivelamento e Alinhamento do Bastidor"
    ],
    "tags": [
      "n-089",
      "bastidores especiais",
      "bastidor de bone",
      "bastidor de bolso",
      "tubular",
      "bastidores e acessorios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical Manual. Specialty Framing Systems, Cap Drivers & Tubular Clamping. Nagoya, 2021.",
      "PARRISH, Gail. Industrial Framing Fixtures: Cap Frames, Pocket Clamps and Tubular Workflows. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue uma camisa polo com bolso fechado. Experimente tentar colocar em um bastidor plano comum e veja a dificuldade. Agora imagine colocar em um bastidor de bolso que entra direto no vãozinho: compreenda na prática como cada bastidor tem a função perfeita para cada tipo de trabalho!",
    "quickSummary": "O guia completo dos bastidores especiais para bordar bonés, bolsos, meias e mangas sem sofrimento.",
    "beginnerExplanation": "Além dos bastidores comuns que usamos em toalhas, existem bastidores especiais feitos sob medida: tem o bastidor curvo para bordar bonés, o bastidor fininho que entra dentro de bolsos sem descosturar, e os bastidores compridos para mangas de camisa e calças!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-090-nao-tecidos-de-recorte-spunbonded-e-termofixados-de-alta-estabilidade",
    "code": "N-090",
    "term": "Não-Tecidos de Recorte Spunbonded e Termofixados de Alta Estabilidade (Spunbonded Polypropylene & Polyester Backing)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês spunbonded (filamentos contínuos termofundidos em esteira de ar) e do latim stabilis (firme / inalterável).",
    "summary": "Estudo aprofundado das entretelas de recorte de alta tecnologia fabricadas por fiação contínua termofixada (Spunbond), oferecendo resistência mecânica isotrópica para malhas pique e lycra.",
    "definition": "Não-Tecidos de Recorte Spunbonded e Termofixados (Spunbonded Continuous Filament Cut-Away Stabilizers) é a classe de entretelas industriais de poliéster ou polipropileno de alta tenacidade produzidas pela extrusão direta de microfilamentos contínuos entrelaçados e compactados sob cilindros térmicos gofrados (calandragem a 210°C). Diferente das entretelas rasgáveis comuns (cujas fibras curtas se partem facilmente), as entretelas spunbonded possuem resistência multidirecional isotrópica (igual em 360°), suportando mais de 30.000 pontos em malhas elásticas, tecidos piquet de camisas polo e jaquetas sem sofrer distorção dimensional nem encolhimento após lavagens industriais.",
    "technicalDetails": "Gramaturas industriais: 40 g/m² (PolyMesh leve), 60 g/m² (Padrão Corporativo) e 80 g/m² (Pesada para Jaquetas). Resistência à tração longitudinal: > 95 N/5cm / Transversal: > 85 N/5cm. Alongamento máximo sob carga: < 4,5%. Estabilidade térmica: Suporta ferro até 160°C sem deformação.",
    "construction": [
      "Filamentos contínuos de 100% poliéster virgem extrudados a quente",
      "Padrão de gofragem pontilhada em diamante (Diamond Point Bonding) para máxima flexibilidade",
      "Tratamento anti-estático e acabamento macio hipoalergênico para contato com a pele",
      "Borda limpa e indeformável ao ser recortada com tesoura curva de ponta de pato",
      "Compatibilidade química com lavagens a seco e detergentes enzimáticos industriais"
    ],
    "howItWorks": [
      "1. Corta-se a entretela spunbonded de recorte no tamanho do bastidor selecionado.",
      "2. Aplica-se uma névoa suave de adesivo temporário spray 505 no lado áspero da entretela.",
      "3. Assenta-se o tecido (ex: camisa polo de malha piquet) sobre a entretela de forma plana e sem esticar.",
      "4. Encaixa-se o conjunto no bastidor com tensão moderada uniforme.",
      "5. A máquina executa o bordado com matriz densa; os filamentos contínuos seguram o tecido contra a tração da linha.",
      "6. Retira-se a peça do bastidor e recorta-se a entretela no avesso deixando uma margem suave de 3 a 5 mm.",
      "7. A entretela recortada permanece permanentemente unida à malha, mantendo o bordado impecável por toda a vida útil da roupa."
    ],
    "mainTypes": [
      "Entretela PolyMesh / No-Show Mesh (45 g/m² - Fininha e translúcida, ideal para camisas brancas e malhas leves)",
      "Entretela de Recorte Padrão Spunbonded (60 g/m² - Para camisas polo, moletons e uniformes corporativos)",
      "Entretela de Recorte Pesada Termofixada (80 a 100 g/m² - Para jaquetas pesadas, casacos e tapeçaria)"
    ],
    "characteristics": [
      "Estabilidade dimensional permanente: o bordado nunca enruga após dezenas de lavagens",
      "Resistência absoluta contra o efeito de rasgo e picotamento de agulha",
      "Toque suave e macio que não pinica nem machuca o peito do usuário",
      "Não aparece pelo lado direito de roupas brancas ou transparentes (efeito No-Show)"
    ],
    "limitations": [
      "Exige recorte manual com tesoura curva no avesso após o término do bordado",
      "Não pode ser puxada para rasgar (ela não rasga e você deformaria a camisa)",
      "Cuidado para não cortar o tecido da roupa na hora de aparar as sobras no avesso"
    ],
    "numberingSystem": [
      "Gramatura Leve (Mesh): 45 g/m²",
      "Gramatura Média (Standard): 60 g/m²",
      "Gramatura Pesada (Heavy): 80 g/m²"
    ],
    "advantages": [
      "✔ Garante que camisas polo de clientes nunca fiquem enrugadas ou tortas depois de lavar na máquina de casa",
      "✔ Acaba de vez com reclamações de 'bordado que pinica o peito' em roupas finas",
      "✔ Mantém o logotipo esticado e perfeito durante anos de uso contínuo do uniforme"
    ],
    "commonErrors": [
      "❌ Tentar rasgar entretela de recorte com a mão como se fosse rasgável, rasgando a camisa do cliente",
      "❌ Cortar a entretela rente demais aos pontos no avesso com tesoura reta, arriscando furar a peça",
      "❌ Usar entretela rasgável barata em malha elástica, fazendo o bordado virar um 'bolo amassado' na primeira lavagem"
    ],
    "voceSabia": "A tecnologia Spunbond foi inventada pela DuPont na década de 1960 para criar materiais de proteção cirúrgica e isolamento de edifícios (como o famoso Tyvek); no bordado, essa mesma tecnologia de microfilamentos garante que o bordado dure mais que a própria roupa!",
    "curiosidadeTecnica": "A resistência mecânica de um Não-Tecido Spunbond vem do fato de que seus filamentos têm quilômetros de comprimento ininterrupto termofundidos a cada 1,5 milímetro, suportando trações de ruptura 600% maiores que o papel rasgável comum.",
    "dicaArtrelados": "Para camisas polo piquet e malhas esportivas: use SEMPRE entretela de recorte (Cut-Away) PolyMesh. No final, use uma tesoura de bico de pato (tesoura de aplique) para recortar o avesso deixando uma bordinha redondinha de 4 mm: seu cliente vai poder lavar a camisa 100 vezes na máquina e o bordado continuará lisinho e impecável como novo!",
    "comparisonTable": {
      "headers": [
        "Propriedade",
        "Entretela Rasgável Comum (Tear-Away)",
        "Entretela Spunbonded de Recorte (Cut-Away)"
      ],
      "rows": [
        [
          "Comportamento Pós-Lavagem",
          "Enruga e deforma em malhas elásticas",
          "Permanece 100% lisa e estável por anos"
        ],
        [
          "Resistência a Milhares de Pontos",
          "Média (pode picotar na borda)",
          "Máxima (isotrópica em 360 graus)"
        ],
        [
          "Sensação no Peito (Toque)",
          "Áspera com pontas de papel",
          "Macia, suave e flexível (efeito tecido)"
        ],
        [
          "Indicação Principal",
          "Tecidos planos (toalhas, sarja, jeans)",
          "Malhas, polos, lycra, tactel e suéteres"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 950 PPM (Estabilidade total)",
      "needleType": "75/11 SES (Ponta Bola Leve)",
      "stabilizer": "Spunbonded Cut-Away 50 a 60 g/m² fixada com Spray Reposicionável",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Padrão da matriz (0.40 mm)"
    },
    "applications": [
      "Camisas polo corporativas de algodão piquet e tecidos dry-fit de alta performance",
      "Camisetas de algodão penteado, malha fria e roupas infantis de bebê",
      "Agasalhos de moletom, suéteres de lã, jaquetas de tactel e coletes",
      "Uniformes profissionais de saúde, gastronomia e hotelaria sujeitos a lavagens frequentes"
    ],
    "troubleshootingTips": [
      "Utilize tesoura de bico de pato para recortar o avesso com segurança total sem risco de cortar a roupa",
      "Recorte as sobras em formato arredondado oval (sem pontas retas) para não marcar pelo lado de fora ao passar ferro",
      "Aplique uma camada de entretela termocolante protetora de bebê por cima do avesso se for roupa infantil"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Entretela de Recorte (Cut-Away)",
      "Entretela PolyMesh / No-Show",
      "Malha Piquet",
      "Adesivo Temporário em Spray 505"
    ],
    "tags": [
      "n-090",
      "spunbonded",
      "entretela de recorte",
      "cut away",
      "camisa polo",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FREUDENBERG Performance Materials. Industrial Spunbonded Continuous Filament Stabilizers. Weinheim, 2021.",
      "PARRISH, Gail. Continuous Filament Non-Wovens: Dimensional Stability & Cut-Away Engineering in Apparel Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde um logotipo em uma camisa polo usando entretela rasgável comum. Em outra polo idêntica, borde o mesmo logotipo usando entretela de recorte Spunbonded PolyMesh. Lave as duas camisas na máquina de lavar roupas e coloque para secar: veja como a polo com recorte continua perfeita e a outra ficou toda amassada!",
    "quickSummary": "A entretela de pano que você corta no avesso e que não deixa camisas polo enrugarem ao lavar.",
    "beginnerExplanation": "A entretela de recorte é feita com fios contínuos muito fortes que não rasgam com a mão: ela é colocada atrás de camisas polo e camisetas para segurar os pontos para sempre, fazendo o bordado ficar lisinho e bonito mesmo depois que o cliente lavar a roupa dezenas de vezes na máquina!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-091-nivelamento-de-folga-axial-do-eixo-da-lancadeira-e-ajuste-de-bronzinas",
    "code": "N-091",
    "term": "Nivelamento de Folga Axial do Eixo da Lançadeira e Ajuste de Bronzinas (Rotary Hook Axial Endplay & Bushing Fit)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (nivelar), axis (eixo central de rotação) e do francês bronze (liga de cobre-estanho com propriedades autolubrificantes).",
    "summary": "Procedimento de manutenção mecânica pesada para eliminar o jogo axial longitudinal (folga para frente e para trás) do eixo inferior da lançadeira rotativa e reajuste de bronzinas e anéis de encosto.",
    "definition": "Nivelamento de Folga Axial do Eixo da Lançadeira e Ajuste de Bronzinas (Hook Shaft Axial Endplay Calibration & Bushing Clearance) é a operação de precisão mecânica que elimina a folga longitudinal parasita (jogo para frente e para trás) do eixo que gira a lançadeira rotativa da máquina de bordar. Com o passar de milhares de horas de trabalho contínuo, as bronzinas de bronze sinterizado e os anéis de encosto (*thrust collars*) sofrem desgaste micrométrico, permitindo que a lançadeira se afaste ou se aproxime da agulha durante as acelerações do pantógrafo. Essa folga deve ser calibrada estritamente na faixa de 0,02 mm a 0,04 mm utilizando calibres de folga e micrômetro digital.",
    "technicalDetails": "Folga axial tolerada: 0,02 mm a 0,04 mm (medida com relógio comparador milesimal). Folga radial nas bronzinas: ≤ 0,015 mm. Material da bronzina: Bronze fosforoso sinterizado autolubrificante (SAE 660 / CuSn7ZnPb). Lubrificação: Óleo mineral ISO VG 10 ou 15 com aditivo anti-desgaste.",
    "construction": [
      "Eixo da lançadeira em aço cromo-níquel retificado com dureza 60 HRC",
      "Bronzinas de bronze sinterizado montadas por prensagem na carcaça inferior da base",
      "Anel de encosto temperado (*thrust collar*) com parafusos duplos de fixação Allen",
      "Engrenagem cônica helicoidal de transmissão de movimento sincronizado 2:1",
      "Relógio comparador com base magnética articulada de precisão 0,001 mm"
    ],
    "howItWorks": [
      "1. Desliga-se a máquina de bordar e retiram-se a chapa de agulha e o protetor inferior.",
      "2. Instala-se o relógio comparador com a ponta apalpadora encostada na face frontal do eixo da lançadeira.",
      "3. Empurra-se e puxa-se o eixo longitudinalmente com a mão para medir o deslocamento axial total.",
      "4. Se a folga medida for superior a 0,05 mm, soltam-se os parafusos Allen do anel de encosto traseiro.",
      "5. Pressiona-se o anel de encosto contra a face da bronzina utilizando um calibre de lâmina de 0,03 mm como calço.",
      "6. Aperta-se firmemente o anel de encosto com torque cruzado e retira-se a lâmina de calibração.",
      "7. Gira-se o volante com a mão para confirmar que o eixo gira suave, livre e sem nenhuma folga axial restante."
    ],
    "mainTypes": [
      "Ajuste em Máquinas Monocabeça de Braço Tubular (Manutenção preventiva semestral de oficina)",
      "Equalização de Eixos em Máquinas Multicabeças Industriais (Garante ponto idêntico em todos os cabeçotes)",
      "Substituição de Bronzinas Desgastadas por Prensagem Hidráulica (Revisão geral após 10 anos de uso)"
    ],
    "characteristics": [
      "Eliminação completa de ruídos metálicos secos e vibrações anormais no cabeçote inferior",
      "Estabilidade absoluta da distância agulha-lançadeira durante bordados em alta rotação (1.000 PPM)",
      "Fim de quebras inexplicáveis de agulha e pontos pulados intermitentes",
      "Prolongamento da vida útil da lançadeira rotativa e das engrenagens cônicas em mais de 5 anos"
    ],
    "limitations": [
      "Nunca apertar o anel de encosto a ponto de prender o eixo (risco de travamento e queima de motor)",
      "Exige instrumentos de metrologia (relógio comparador) e chaves Allen de alta qualidade",
      "Serviço avançado que deve ser executado por mecânico especializado ou operador treinado"
    ],
    "numberingSystem": [
      "Folga Axial Correta: 0,03 mm ± 0,01 mm",
      "Folga Limite de Alarme: > 0,06 mm",
      "Torque de Aperto dos Parafusos: 1,8 N.m"
    ],
    "advantages": [
      "✔ Zera problemas misteriosos de quebra de agulha que acontecem 'do nada' em velocidades altas",
      "✔ Deixa a máquina silenciosa, suave e trabalhando com som aveludado de fábrica",
      "✔ Garante que bordados em tecidos grossos (como bonés e jaquetas) não percam o ponto"
    ],
    "commonErrors": [
      "❌ Deixar o eixo com folga de quase 1 mm, fazendo a lançadeira bater de frente na agulha em alta velocidade",
      "❌ Apertar o colar de encosto sem deixar folga nenhuma (0,00 mm), fazendo o eixo superaquecer e travar",
      "❌ Usar chave Allen desgastada e espanar os parafusos de fixação do anel de encosto"
    ],
    "voceSabia": "As bronzinas de bronze sinterizado foram desenvolvidas na década de 1930 para os motores de aviões; elas possuem milhões de microporos microscópicos cheios de óleo que 'suam' lubrificante quando aquecem e o reabsorvem quando esfriam!",
    "curiosidadeTecnica": "Uma folga axial de apenas 0,10 mm no eixo da lançadeira faz a folga da ponta da agulha variar em mais de 100% durante a costura; isso é suficiente para fazer a agulha bater na ponta de aço da lançadeira a cada 50 pontos.",
    "dicaArtrelados": "Faça este teste simples a cada 6 meses: tire a chapa de agulha e, com a ponta dos dedos, tente empurrar e puxar a lançadeira para frente e para trás. Ela não pode ter nenhum joguinho perceptível para frente e para trás, mas tem que girar livre e macia: se você sentir ela chacoalhando, é hora de chamar seu técnico para ajustar o anel de encosto!",
    "comparisonTable": {
      "headers": [
        "Condição do Eixo",
        "Folga Axial",
        "Comportamento em 1.000 PPM",
        "Risco de Quebra"
      ],
      "rows": [
        [
          "Calibrado Perfeito",
          "0,02 mm a 0,04 mm",
          "Silencioso, suave e estável",
          "Zero (ponto 100% laçado)"
        ],
        [
          "Com Folga Excessiva",
          "> 0,08 mm",
          "Vibração e barulho metálico",
          "Altíssimo (bate na agulha)"
        ],
        [
          "Travado sem Folga",
          "0,00 mm (Preso)",
          "Superaquecimento e travamento",
          "Crítico (queima correia/motor)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-ajuste: Operação plena até 1.000 - 1.200 PPM",
      "needleType": "DBxK5 conforme a produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Revisão técnica preventiva anual de máquinas industriais de bordar",
      "Recuperação de máquinas antigas com ruído excessivo na base tubular",
      "Preparação de máquinas para produções pesadas contínuas de bonés estruturados",
      "Substituição de engrenagens de transmissão helicoidais desgastadas"
    ],
    "troubleshootingTips": [
      "Pingue duas gotas de óleo lubrificante de máquina na bronzina após o ajuste",
      "Gire o volante com a mão por 3 voltas completas para certificar-se de que não há pontos duros",
      "Verifique se o parafuso do anel de encosto possui trava química de rosca suave (Loctite 242)"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Nivelamento Estroboscópico de Sincronismo da Agulha",
      "Manutenção Preventiva",
      "Lubrificação Periódica"
    ],
    "tags": [
      "n-091",
      "folga axial",
      "eixo da lancadeira",
      "bronzinas",
      "manutencao pesada",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BARUDAN Industrial Service Manual. Hook Shaft Assembly, Axial Endplay & Bushing Tolerances. Ichinomiya, 2021.",
      "PARRISH, Gail. Rotary Shaft Kinematics, Bearing Clearance and Axial Alignment in Embroidery Machinery. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina desligada e sem agulha, segure o corpo de metal da lançadeira entre o polegar e o indicador e tente movimentar para frente e para trás. Sinta como o eixo deve ser firme e justo como uma peça maciça, sem folga frouxa. Esse é o segredo de uma máquina que borda anos sem quebrar agulhas!",
    "quickSummary": "Eliminar o jogo de para frente e para trás do eixo da lançadeira para a máquina não quebrar agulha.",
    "beginnerExplanation": "O eixo que gira a lançadeira embaixo da chapa precisa girar livre como uma roda de bicicleta, mas não pode ter nenhuma folga balançando para frente ou para trás: calibrar essa folga garante que a lançadeira passe sempre no milímetro exato atrás da agulha sem bater nela!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-092-nanotecnologia-hidrofobica-e-fios-com-protecao-antimicrobiana-e-uv",
    "code": "N-092",
    "term": "Nanotecnologia Hidrofóbica e Fios com Proteção Antimicrobiana e UV (Nano-Coated Hydrophobic & Antimicrobial Embroidery Threads)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego nanos (anão / escala de bilionésimos de metro 10⁻⁹ m), hydor (água) e phobos (repulsão / que repele líquidos).",
    "summary": "Nova geração de linhas técnicas tratadas com nanopartículas de sílica (repelência a água/manchas), íons de prata (ação antibacteriana para hospitais) e bloqueadores solares UV para toldos e náutica.",
    "definition": "Nanotecnologia Hidrofóbica e Fios com Proteção Antimicrobiana e UV (Functional Nano-Coated & High-Performance Technical Embroidery Threads) é o segmento avançado de fios de bordar de poliéster ou PTFE (Teflon) tratados quimicamente em nível molecular com nanorevestimentos funcionais. Essas linhas possuem propriedades de auto-limpeza (efeito lótus hidrofóbico onde água e óleo escorrem sem molhar o bordado), partículas nanométricas de prata coloidal que eliminam 99,9% de bactérias e fungos (essencial para jalecos médicos e roupas hospitalares) e aditivos fotoestabilizadores HALS contra degradação por radiação ultravioleta em embarcações náuticas.",
    "technicalDetails": "Ângulo de contato hidrofóbico: > 140° (Superhidrofobicidade). Eficácia antimicrobiana: Redução bacteriana de 99,9% (Norma ISO 20743 / JIS L 1902). Resistência UV: Solidez à luz Grau 8 (Escala de Lã Azul / > 2.000 horas de sol direto). Ponto de fusão: 260°C (Poliéster) a 327°C (Fio PTFE).",
    "construction": [
      "Filamentos contínuos de poliéster de alta tenacidade ou polímero de PTFE puro",
      "Banho nanotecnológico de nanopartículas de dióxido de titânio (TiO2) e prata coloidal (Ag+)",
      "Camada molecular hidrofóbica e oleofóbica de fluoropolímeros C6 ecológicos",
      "Fotoestabilizadores de amina impedida (HALS) integrados na massa do polímero antes da fiação",
      "Carretéis industriais com vedação anti-umidade para preservação dos aditivos"
    ],
    "howItWorks": [
      "1. A linha nanotecnológica passa pela máquina de bordar com a mesma facilidade de uma linha comum de poliéster.",
      "2. A matriz borda normalmente a 800 PPM em jalecos médicos, estofados de barco ou uniformes externos.",
      "3. Quando uma gota de café, molho ou sangue cai sobre o bordado, as nanopartículas impedem que o líquido penetre nos fios.",
      "4. O líquido forma uma bolinha perfeita e rola para fora sem manchar a cor do bordado.",
      "5. Em ambientes hospitalares, os íons de prata rompem a parede celular de bactérias em contato com a linha.",
      "6. Sob sol escaldante em alto-mar, os aditivos anti-UV absorvem a radiação sem permitir que as cores desbotem.",
      "7. O bordado permanece higiênico, brilhante e intacto por mais de 10 anos de exposição extrema."
    ],
    "mainTypes": [
      "Linhas Hidrofóbicas e Anti-Manchas (Para uniformes de garçons, chefs de cozinha e toalhas de mesa)",
      "Linhas Antimicrobianas e Antivirais com Prata (Para jalecos médicos, roupas de UTI e máscaras)",
      "Linhas Náuticas Solares de PTFE / Poliéster UV (Para velas de barco, toldos externos e bancos automotivos)"
    ],
    "characteristics": [
      "Repelência instantânea a líquidos, óleos, graxas e sujeiras pesadas",
      "Proteção biológica ativa contra proliferação de odores de suor e bactérias patogênicas",
      "Resistência incomparável contra desbotamento solar, maresia e cloro de piscinas",
      "Manutenção das propriedades funcionais mesmo após mais de 50 lavagens industriais a 90°C"
    ],
    "limitations": [
      "Custo por cone cerca de 40% a 80% superior ao das linhas de poliéster convencionais",
      "Exige que a entretela e o tecido base também possuam compatibilidade com o uso técnico final",
      "Não passar a ferro acima de 150°C para preservar a integridade da camada de nanopolímeros"
    ],
    "numberingSystem": [
      "Grau de Solidez UV: 8 / 8 (Máximo)",
      "Eficiência Antibacteriana: > 99,9%",
      "Título Disponível: 40wt e 30wt"
    ],
    "advantages": [
      "✔ Permite conquistar contratos corporativos nobres em hospitais, clínicas e iates de luxo",
      "✔ Garante que bordados em uniformes de restaurantes não fiquem encardidos com molhos e gorduras",
      "✔ Agrega altíssimo valor tecnológico ao produto final vendido pelo ateliê"
    ],
    "commonErrors": [
      "❌ Lavar a peça com alvejantes à base de cloro puro concentrado, que degradam o banho de nanopartículas",
      "❌ Borda toldos náuticos com linha comum de bordar, que apodrece e esfarela com 6 meses de sol",
      "❌ Cobrar o preço de um bordado comum ao utilizar fios técnicos certificados de alta performance"
    ],
    "voceSabia": "O efeito hidrofóbico da nanotecnologia foi copiado diretamente da folha da flor de Lótus (efeito lótus da natureza): a superfície da folha possui milhões de micro-pilares nanométricos de cera que fazem as gotas de água rolarem como bolinhas de gude levando toda a sujeira embora!",
    "curiosidadeTecnica": "Um grama de nanopartículas de prata aplicadas na linha de bordado possui uma área superficial equivalente a dois campos de futebol inteiros, garantindo contato instantâneo com qualquer microrganismo que pouse no bordado.",
    "dicaArtrelados": "Ao fechar pedidos de jalecos para médicos, dentistas e clínicas de estética, ofereça o diferencial do 'Bordado Antimicrobiano com Íons de Prata': profissionais de saúde adoram a ideia de ter um logotipo que não acumula bactérias no hospital e pagam com muito gosto um valor diferenciado pelo serviço!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Linha Poliéster Comum",
        "Linha Nanotecnológica Antimicrobiana/UV"
      ],
      "rows": [
        [
          "Repelência a Líquidos e Manchas",
          "Baixa (absorve água e molhos)",
          "Total (superhidrofóbica tipo Lótus)"
        ],
        [
          "Ação Antibacteriana",
          "Nula (bactérias proliferam no suor)",
          "99,9% de eliminação ativa por íons de prata"
        ],
        [
          "Resistência ao Sol / UV Náutico",
          "Desbota e enfraquece em 1-2 anos",
          "Garantia de mais de 10 anos sem desbotar"
        ],
        [
          "Mercado Alvo",
          "Moda e promocional comum",
          "Hospitais, náutica, gastronomia e luxo"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 ou 80/12 SES / SAN 1",
      "stabilizer": "Compatível com a aplicação (ex: entretela lavável resistente)",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm padrão"
    },
    "applications": [
      "Jalecos médicos, aventais cirúrgicos e fardamentos de equipes de enfermagem e odontologia",
      "Estofamentos de iates, lanchas, velas náuticas e capas protetoras de embarcações",
      "Uniformes de alta gastronomia para chefs, cozinheiros e baristas profissionais",
      "Toldos externos comerciais, guarda-sóis de piscina e bancos automotivos conversíveis"
    ],
    "troubleshootingTips": [
      "Armazene os cones em sacos plásticos fechados para não contaminar a superfície nanométrica com pó do ateliê",
      "Utilize linhas de bobina de poliéster de boa qualidade para acompanhar a durabilidade da linha de cima",
      "Forneça um tag informativo ao cliente explicando as instruções especiais de lavagem do produto"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Linha de Poliéster Trilobal",
      "Linhas Resistentes a Cloro e Alvejantes",
      "Numeração e Título Métrico de Linha",
      "Design, Teoria & Arte"
    ],
    "tags": [
      "n-092",
      "nanotecnologia",
      "antimicrobiana",
      "fio hidrofobico",
      "protecao uv",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "AMANN Group Technical Threads. Silver-Tech & Hydrophobic Nano-Coating Engineering. Bönnigheim, 2021.",
      "PARRISH, Gail. Nanotechnology in Technical Embroidery: Antimicrobial Silver, Hydrophobic Barriers and Solar UV Stability. Cincinnati, 2022."
    ],
    "practicalExercise": "Pingue uma gota d'água em cima de um bordado feito com linha comum e veja como a água é absorvida devagarzinho. Agora imagine pingar uma gota em um fio com nanotecnologia hidrofóbica: a gota fica redondinha como uma pérola e rola para fora sem molhar nem um único fiozinho!",
    "quickSummary": "Linhas modernas com nanotecnologia que não molham, não mancham, matam bactérias e não desbotam no sol.",
    "beginnerExplanation": "São linhas de bordar de alta tecnologia tratadas com partículas minúsculas que não deixam líquidos entrarem (como água, café ou sangue), combatem bactérias em roupas de médicos e não desbotam mesmo debaixo do sol forte da praia!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-093-normalizacao-de-arquivos-de-bordado-dst-vs-formatos-expandidos-e-condensados",
    "code": "N-093",
    "term": "Normalização de Arquivos de Bordado (DST vs. Formatos Expandidos e Condensados) (DST Standardization, Condensed vs Expanded)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim norma (regra / padrão universal) e da sigla DST (Data Stitch Tajima, padrão binário universal de coordenadas de bordado criado pela Tajima em 1982).",
    "summary": "Diferenciação estrutural e boas práticas de conversão entre arquivos condensados/editáveis (EMB, PES, ART) e arquivos expandidos/de máquina pura (DST, EXP, JEF), garantindo integridade de pontos e densidades.",
    "definition": "Normalização de Arquivos de Bordado (Embroidery File Architecture: Condensed Outline vs. Expanded Machine Stitch Code) é a distinção técnica fundamental entre os dois formatos de dados que governam o ecossistema do bordado computadorizado. Arquivos Condensados (Outline / Base Vetorial como .EMB, .ART, .JAN) armazenam formas geométricas vetoriais, tipos de ponto paramétricos e regras de densidade inteligente, permitindo redimensionar o desenho sem perder a densidade. Já os Arquivos Expandidos (Machine Stitch Files como .DST, .EXP, .PES final, .JEF) contêm apenas uma lista rígida de coordenadas binárias X/Y de cada agulhada individual e códigos de comando (Ponto, Salto, Corte, Parada), sem memória de densidade.",
    "technicalDetails": "Estrutura do arquivo DST: Cabeçalho de 512 bytes em ASCII seguido por blocos de 3 bytes por ponto (codificação binária ternária). Limite de deslocamento máximo por comando: +12,1 mm / -12,1 mm por agulhada (valores maiores viram múltiplos saltos). Capacidade de cores no DST: Não armazena códigos de cor reais (apenas comando genérico de Stop).",
    "construction": [
      "Cabeçalho com metadados: Nome da Matriz, Quantidade de Pontos, Dimensões X/Y e Saltos",
      "Tabela de vetores de deslocamento delta X e delta Y codificados em números inteiros",
      "Bits de controle de ação mecânica: 00 (Ponto Normal), 01 (Ponto de Salto), 10 (Comando de Stop/Troca de Cor)",
      "Código de fim de arquivo com comando de parada total (End of Data / 0x1A)",
      "Arquivo de visualização complementar (.JPG / .PNG / .PDF de folha de produção com sequência de cores)"
    ],
    "howItWorks": [
      "1. O programador cria a matriz em software nativo e salva o arquivo mestre em formato condensado (.EMB).",
      "2. Ao finalizar, exporta o arquivo de produção para a máquina no padrão industrial expandido (.DST).",
      "3. O arquivo .DST é transferido para o pen drive ou enviado via rede Wi-Fi para o painel da máquina de bordar.",
      "4. O computador da máquina lê a lista de agulhadas sem precisar fazer cálculos pesados de geometria.",
      "5. O operador configura no painel a ordem física das cores das linhas conforme a ficha técnica impressa.",
      "6. A máquina executa exatamente as coordenadas gravadas no arquivo com precisão de 0,1 mm.",
      "7. Se for necessário alterar o tamanho da matriz no futuro, o programador abre o .EMB original (e nunca o .DST) para manter a densidade perfeita."
    ],
    "mainTypes": [
      "Arquivos Condensados / Vetoriais Editáveis (.EMB do Wilcom, .ART da Bernina, .PES mestre da Brother)",
      "Padrão Universal Industrial Expandido (.DST da Tajima - O formato aceito em 100% das máquinas industriais)",
      "Formatos Expandidos Domésticos e Semi-Industriais (.PES, .JEF, .HUS, .VIP, .XXX com paleta de cor embutida)"
    ],
    "characteristics": [
      "Compatibilidade universal do formato .DST em qualquer máquina de bordar do planeta",
      "Execução rápida e leve que não sobrecarrega a memória do computador da máquina",
      "Arquivos condensados permitem redimensionar em 200% recalculando todos os pontos automaticamente",
      "Arquivos expandidos mantêm a quantidade fixa de pontos mesmo se você tentar esticar o desenho"
    ],
    "limitations": [
      "Nunca aumente ou diminua o tamanho de um arquivo .DST no painel da máquina em mais de 10% (estraga a densidade)",
      "O formato .DST não salva as cores reais da linha (sempre abre com cores aleatórias no software)",
      "A conversão de .DST de volta para .EMB gera objetos aproximados sem a perfeição do vetor original"
    ],
    "numberingSystem": [
      "Resolução de Coordenada: 0,1 mm (1 décimo de milímetro)",
      "Tamanho do Cabeçalho DST: 512 bytes",
      "Limite Seguro de Escala em DST: ± 5% a 10%"
    ],
    "advantages": [
      "✔ Garante que sua matriz rode em qualquer máquina de bordar do mundo sem erros de leitura",
      "✔ Preserva os arquivos mestres editáveis (.EMB) organizados para fazer alterações rápidas de clientes",
      "✔ Evita matrizes danificadas com pontos embolados causadas por redimensionamento indevido no painel"
    ],
    "commonErrors": [
      "❌ Reduzir um arquivo .DST de 10 cm para 5 cm no painel da máquina, criando uma placa de ferro que quebra agulha",
      "❌ Salvar a matriz apenas em .DST e jogar fora o arquivo .EMB editável original",
      "❌ Achar que o arquivo .DST está com defeito porque abriu na tela do computador com cores diferentes"
    ],
    "voceSabia": "O formato .DST foi criado em 1982 pela fabricante japonesa Tajima para armazenar desenhos de bordado em fitas de papel perfuradas (fitas de teletipo de 8 canais) antes mesmo de existirem disquetes ou computadores pessoais!",
    "curiosidadeTecnica": "Cada ponto no formato .DST ocupa exatamente 3 bytes de memória; isso significa que uma matriz rica de 10.000 pontos tem um tamanho de arquivo minúsculo de cerca de 30 kilobytes, rodando instantaneamente até nos microprocessadores mais simples.",
    "dicaArtrelados": "Tenha como regra sagrada no seu ateliê: NUNCA redimensione matriz em formato .DST no painel da máquina nem no computador! Se o cliente pedir para mudar o tamanho de um logotipo, abra o arquivo original .EMB ou .PES mestre no programa de edição, mude o tamanho lá para o software recalcular a densidade certinha e só depois exporte o novo .DST para a máquina: suas matrizes serão sempre perfeitas!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Arquivo Condensado (.EMB / .ART)",
        "Arquivo Expandido de Máquina (.DST / .EXP)"
      ],
      "rows": [
        [
          "Estrutura Interna",
          "Vetores, curvas matemáticas e densidade",
          "Lista fixa de coordenadas X/Y de cada ponto"
        ],
        [
          "Redimensionamento",
          "Perfeito (recalcula pontos automaticamente)",
          "Crítico (mantém pontos fixos, deforma densidade)"
        ],
        [
          "Informação de Cores",
          "Paleta de cores reais e marcas de linha",
          "Não salva cor (apenas comando genérico de parada)"
        ],
        [
          "Finalidade Principal",
          "Edição, criação e arquivo mestre de matriz",
          "Costura direta no computador da máquina de bordar"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "Adequada ao tecido",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Padrão",
      "density": "Gerenciada no arquivo original condensado"
    },
    "applications": [
      "Padronização de arquivos para envio de matrizes a fábricas terceirizadas e ateliês parceiros",
      "Organização do acervo mestre digital de clientes e logotipos corporativos",
      "Programação de matrizes para máquinas industriais monocabeça e multicabeças",
      "Conversão segura de matrizes entre diferentes marcas de máquinas (Brother, Janome, Tajima, Barudan)"
    ],
    "troubleshootingTips": [
      "Se uma matriz .DST não abrir no painel, certifique-se de que o pen drive está formatado em FAT32",
      "Guarde os arquivos mestres .EMB em uma pasta de backup na nuvem com o nome do cliente",
      "Imprima ou envie sempre a ficha de produção em PDF junto com o arquivo .DST para o operador saber as cores"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Densidade de Ponto",
      "Ponto Satim / Ponto Cheio",
      "Compensação de Repuxo",
      "Nivelamento de Ângulos de Ponto"
    ],
    "tags": [
      "n-093",
      "dst",
      "arquivos de bordado",
      "emb",
      "formatos de matriz",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical File Format Specifications. DST Binary Architecture & Stitch Coordinate Standards. Nagoya, 2021.",
      "PARRISH, Gail. Embroidery File Architectures: Condensed Object Geometry vs. Expanded Stitch Data. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra um arquivo .DST no seu programa de matriz e tente aumentar o tamanho em 50%: veja como os pontos ficaram super espaçados e ralos. Agora faça o mesmo em um arquivo .EMB: veja como o software coloca novos pontos para manter o bordado cheio e fechadinho. Entendeu por que o arquivo condensado é tão importante?",
    "quickSummary": "A diferença entre o arquivo mestre editável e o arquivo pronto que a máquina de bordar lê para costurar.",
    "beginnerExplanation": "O arquivo .EMB é como a receita do bolo onde você pode mudar os ingredientes e o tamanho da forma sem errar; já o arquivo .DST é o bolo pronto que a máquina vai costurar: por isso, para mudar o tamanho do bordado, a gente sempre mexe no arquivo mestre para a receita continuar perfeita!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-094-nivelamento-de-altura-e-curso-do-calcador-em-matrizes-mistas-com-lantejoulas-e-cordao",
    "code": "N-094",
    "term": "Nivelamento de Altura e Curso do Calcador em Matrizes Mistas com Lantejoulas e Cordão (Presser Foot Stroke in Sequin & Cording Attachments)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (nivelar) e pressura (calcador / sapata de compressão têxtil) e do francês paillette / cordon (lantejoula / fita decorativa).",
    "summary": "Protocolo mecânico de alinhamento e calibração de altura do calcador independente e curso vertical em dispositivos especiais acoplados de lantejoula simples/dupla (Sequin Device) e cordão rotativo (Cording Device).",
    "definition": "Nivelamento de Altura e Curso do Calcador em Matrizes Mistas com Lantejoulas e Cordão (Independent Presser Foot Height & Stroke Calibration for Sequin & Cording Attachments) é o ajuste de precisão que calibra a folga dinâmica entre a base inferior do calcador tubular e a chapa de agulha quando operando com dispositivos automáticos acoplados de aplicação de lantejoulas (Sequin Devices de 2 a 9 mm) ou aplicadores de fitas e cordões grossos. Como a lantejoula e o cordão possuem espessuras volumétricas rígidas que se somam ao tecido, o calcador deve ser elevado milimetricamente (para 1,2 a 1,8 mm acima da superfície do tecido) para segurar o tecido sem amassar, quebrar ou riscar as lantejoulas durante a descida da agulha.",
    "technicalDetails": "Altura do calcador no ponto morto inferior: 1,2 mm a 1,8 mm (com lantejoulas de 0,2 mm de espessura). Curso vertical do calcador: 3,5 mm a 4,5 mm. Sincronismo do alimentador de lantejoula: Acionamento pneumático ou motor de passo a 120° do ciclo de rotação. Folga do bocal aplicador de cordão: Diâmetro do cordão + 0,3 mm.",
    "construction": [
      "Calcador especial tubular com base chanfrada e abertura ampliada para passagem de lantejoulas",
      "Dispositivo aplicador de lantejoulas (Sequin Feeder) acoplado lateralmente na primeira agulha do cabeçote",
      "Lâmina de corte e faca micrométrica de separação de lantejoulas em fita contínua",
      "Haste de regulagem de altura do calcador com parafuso de travamento micrométrico",
      "Sensor de presença de rolo de lantejoulas e válvula solenoide de controle pneumático"
    ],
    "howItWorks": [
      "1. Instala-se o dispositivo de lantejoulas ou guia de cordão no cabeçote designado da máquina.",
      "2. Gira-se o volante manualmente até a agulha atingir o ponto morto inferior (180°).",
      "3. Solta-se o parafuso da haste do calcador independente da agulha do dispositivo.",
      "4. Insere-se um calibre de lâmina de 1,5 mm entre o calcador e a chapa de agulha com uma lantejoula de teste.",
      "5. Ajusta-se o calcador para encostar suavemente sobre o calibre e trava-se o parafuso firmemente.",
      "6. No software, programa-se o ponto de fixação em formato de estrela, Y ou cruz sobre a lantejoula.",
      "7. A máquina borda em velocidade de 650 a 800 PPM, dispensando e costurando lantejoulas brilhantes com fixação perfeita."
    ],
    "mainTypes": [
      "Dispositivo de Lantejoula Simples (Aplica lantejoulas de 3 mm a 7 mm com alimentação contínua)",
      "Dispositivo de Lantejoula Dupla / Sobreposta (Permite alternar entre duas cores ou tamanhos na mesma matriz)",
      "Dispositivo de Cordão Rotativo e Fitas (Cording Device para contornos em relevo com fios grossos)"
    ],
    "characteristics": [
      "Combinação de bordado tradicional de satim com brilho espetacular de lantejoulas e fitas",
      "Prevenção total de riscos, trincas ou quebras nas lâminas plásticas das lantejoulas",
      "Alimentação sincronizada em alta velocidade que aplica até 800 lantejoulas por minuto",
      "Acabamento luxuoso de padrão internacional para figurinos de carnaval, vestidos de festa e moda praia"
    ],
    "limitations": [
      "Exige agulhas adequadas de ponta arredondada (SES) para não rachar o furo central da lantejoula",
      "Requer velocidade moderada (600 a 750 PPM) para garantir a estabilidade da alimentação mecânica",
      "A fita de lantejoulas deve ter furação e diâmetro rigorosamente calibrados de fábrica"
    ],
    "numberingSystem": [
      "Altura do Calcador: 1,5 mm no ponto morto inferior",
      "Diâmetros Comuns de Lantejoulas: 3 mm, 5 mm, 7 mm e 9 mm",
      "Velocidade de Trabalho: 650 a 750 PPM"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor comercial a vestidos de gala, noivas, fantasias e moda de luxo",
      "✔ Elimina o trabalho manual demorado de pregar lantejoulas e cordões à mão",
      "✔ Garante que as lantejoulas fiquem 100% alinhadas, planas e com fixação ultra-resistente"
    ],
    "commonErrors": [
      "❌ Deixar o calcador muito baixo (altura normal de tecido plano), esmagando e quebrando as lantejoulas no meio",
      "❌ Deixar o calcador muito alto (> 2,5 mm), permitindo que o tecido suba junto com a agulha (flagging)",
      "❌ Usar linha de baixa qualidade que arrebenta ao passar pela borda cortante do furo da lantejoula"
    ],
    "voceSabia": "A palavra 'Lantejoula' (ou 'Paillette' em francês) vem das antigas moedas de ouro romanas que eram costuradas nas vestes dos generais para demonstrar riqueza e brilhar sob a luz do sol durante os desfiles de vitória!",
    "curiosidadeTecnica": "O tempo de alimentação de uma lantejoula entre uma agulhada e outra a 750 PPM é de apenas 0,04 segundo; nesse intervalo mínimo, a lingueta mecânica precisa avançar exatamente uma unidade de lantejoula com tolerância de 0,05 milímetro.",
    "dicaArtrelados": "Ao bordar matrizes com lantejoulas, use linha de poliéster 40wt de alta tenacidade ou fio monofilamento de poliamida transparente e regule o calcador para passar a 1,5 mm da chapa: a lantejoula corre suave, não racha e fica com um brilho espelhado deslumbrante!",
    "comparisonTable": {
      "headers": [
        "Ajuste do Calcador",
        "Comportamento das Lantejoulas",
        "Qualidade do Ponto",
        "Risco de Quebra"
      ],
      "rows": [
        [
          "Nivelado a 1,5 mm (Correto)",
          "Passam lisas e sem marcas",
          "Ponto firme e laçada perfeita",
          "Zero"
        ],
        [
          "Muito Baixo (< 0,8 mm)",
          "Racham, riscam e quebram",
          "Deforma a lâmina de plástico",
          "Alto (agulha bate na lasca)"
        ],
        [
          "Muito Alto (> 2,5 mm)",
          "Ficam frouxas e soltas",
          "Ponto frouxo e falhas de laçada",
          "Médio (laçada deformada)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 750 PPM",
      "needleType": "DBxK5 75/11 SES com acabamento polido",
      "stabilizer": "Entretela estável adequada ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Programada nos pontos de fixação da matriz"
    },
    "applications": [
      "Vestidos de noiva de alta costura, vestidos de debutante e trajes de gala",
      "Fantasias de luxo para escolas de samba, carnaval e companhias de dança",
      "Moda feminina jovem, jaquetas jeans estilizadas e camisetas de festa",
      "Moda praia de luxo, saídas de banho e biquínis com detalhes cintilantes"
    ],
    "troubleshootingTips": [
      "Se a lantejoula estiver sendo cortada no meio, ajuste a posição da lâmina de corte do dispositivo",
      "Verifique se o rolo de lantejoulas está desenrolando livre sem nós no suporte lateral",
      "Mantenha o trilho de alimentação de lantejoulas limpo de poeira e estática com um pincel antiestático"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Calcador da Máquina de Bordar",
      "Dispositivos Especiais (Sequin & Cording)",
      "Ponto Satim / Ponto Cheio",
      "Manutenção Preventiva"
    ],
    "tags": [
      "n-094",
      "lantejoulas",
      "sequin device",
      "cordao",
      "calcador",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Sequin & Twin Sequin Device Technical Manual. Mechanics, Stroke & Timing. Nagoya, 2021.",
      "PARRISH, Gail. Special Attachments in High-Speed Embroidery: Sequin Feeder Tuning and Presser Foot Stroke Dynamics. Cincinnati, 2022."
    ],
    "practicalExercise": "Abaixe a barra de agulha com a mão e coloque uma régua ao lado do pezinho (calcador) para medir quantos milímetros ele fica da chapa de ferro. Veja como no bordado comum ele fica bem pertinho (1 mm), mas para lantejoulas precisamos levantar para 1,5 mm para dar espaço do brilho passar sem amassar!",
    "quickSummary": "Regulagem de altura do pezinho da máquina para aplicar lantejoulas e fitas sem quebrar nem amassar o brilho.",
    "beginnerExplanation": "Quando a máquina usa o acessório de costurar lantejoulas brilhantes, o pezinho precisa ficar um pouquinho mais alto do que o normal para não esmagar as pecinhas de plástico na hora em que a agulha desce, mantendo o brilho lindo e sem quebrar nada!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-095-nivelamento-de-passo-em-ponto-tatami-e-prevencao-de-padroes-moire",
    "code": "N-095",
    "term": "Nivelamento de Passo em Ponto Tatami e Prevenção de Padrões Moiré (Tatami Pitch Leveling & Moiré Artifact Elimination)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do japonês tatami (esteira de palha trançada tradicional) e do francês moiré (tecido de seda com efeito óptico ondulado de interferência visual).",
    "summary": "Técnica matemática de fracionamento de passo e aleatoriedade controlada em pontos de preenchimento tatami para evitar padrões ópticos indesejados de moiré e linhas de fratura visual em grandes áreas.",
    "definition": "Nivelamento de Passo em Ponto Tatami e Prevenção de Padrões Moiré (Tatami Pitch Fractioning, Stagger Calibration & Anti-Moiré Algorithms) é a metodologia avançada de programação de matrizes que calibra a fração de deslocamento das penetrações da agulha entre passadas paralelas consecutivas de ponto tatami (tatami fill). Quando o deslocamento de passo coincide com frações simples (como 1/2 ou 1/4) ou quando o ângulo de inclinação do ponto alinha-se perfeitamente com os fios da trama do tecido base (como sarja ou piquet), forma-se uma interferência óptica de ondas espirais ou diagonais indesejadas (efeito moiré) e valas profundas na superfície. A técnica aplica frações irracionais (ex: 0,382 / Proporção Áurea) ou funções de variação de comprimento estocástico para garantir um preenchimento 100% homogêneo, liso e aveludado.",
    "technicalDetails": "Comprimento padrão do ponto tatami: 3,8 mm a 4,5 mm. Fração de passo recomendada: 0,33 (1/3) ou 0,382 (fração áurea). Ângulo de inclinação anti-moiré: Evitar 0°, 45° e 90° em tecidos sarjados; utilizar 15° a 22° ou 68° a 75°. Variação de comprimento randômico: 10% a 15% (Jitter / Random Stitch Length).",
    "construction": [
      "Objeto de preenchimento amplo desenhado com nós vetoriais suaves",
      "Algoritmo de ponto tatami com fração de deslocamento calibrada matematicamente",
      "Underlay preliminar em tatami leve aberto (0,8 mm) com ângulo perpendicular de 90° em relação à cobertura",
      "Filtro de pontos curtos e bordas com compensação de repuxo multidirecional",
      "Linha de poliéster 40wt com iluminação uniforme na visualização 3D de software"
    ],
    "howItWorks": [
      "1. No software de matriz, seleciona-se a grande área de preenchimento (ex: fundo de um brasão de 10 cm).",
      "2. Define-se o tipo de ponto como Tatami / Ponto Esteira com densidade padrão de 0,40 mm.",
      "3. Configura-se a fração de deslocamento de passo para 0,38 (evitando frações simétricas de 0,50).",
      "4. Ajusta-se o ângulo do ponto para 22,5° em relação ao urdume do tecido para cancelar o alinhamento de trama.",
      "5. Ativa-se uma leve aleatoriedade de comprimento (Random Stitch Length de 10%).",
      "6. A máquina de bordar costura a grande área sem concentrar furos de agulha em linhas retas visíveis.",
      "7. A superfície bordada resulta em um tecido uniforme, macio e sem nenhuma listra ou ondulação óptica de moiré."
    ],
    "mainTypes": [
      "Tatami com Fração Áurea Anti-Moiré (Para grandes brasões, bandeiras e fundos de jaquetas)",
      "Tatami com Variação Randômica de Pontos (Para pelagens de animais, grama, céu e texturas naturais)",
      "Tatami com Deslocamento em Ziguezague Alternado (Para tapetes, estofamentos e bordados com relevo fosco)"
    ],
    "characteristics": [
      "Superfície do bordado incrivelmente homogênea, lisa e com textura aveludada contínua",
      "Eliminação absoluta de linhas diagonais falsas, fendas e padrões ondulados de ilusão de ótica",
      "Melhor distribuição da tensão mecânica sobre o tecido, reduzindo deformações do bastidor",
      "Aparência visual de alta qualidade idêntica a tecidos nobres de tapeçaria francesa"
    ],
    "limitations": [
      "Softwares muito básicos ou antigos podem não ter ajuste fino da fração de deslocamento de passo",
      "Exige atenção redobrada ao ângulo da trama do tecido base em peças de alfaiataria",
      "Pontos tatami muito curtos (< 2,5 mm) aumentam excessivamente a quantidade total de pontos da matriz"
    ],
    "numberingSystem": [
      "Comprimento de Ponto: 4,0 mm",
      "Fração de Deslocamento: 0,382",
      "Densidade Padrão: 0,40 mm"
    ],
    "advantages": [
      "✔ Transforma grandes áreas de bordado em superfícies luxuosas sem defeitos visuais de listras",
      "✔ Impede que a agulha fure repetidamente nos mesmos canais da sarja ou jeans, evitando rasgos",
      "✔ Valoriza emblemas, escudos de clubes de futebol e brasões institucionais gigantes"
    ],
    "commonErrors": [
      "❌ Usar ângulo de 45° exato em tecido de sarja que também tem trama a 45°, criando fendas gigantes",
      "❌ Deixar a fração de passo em 0,50 exato em desenhos grandes, criando listras diagonais que parecem defeito de linha",
      "❌ Borda grandes fundos sem colocar a camada de underlay tatami leve por baixo"
    ],
    "voceSabia": "O termo 'Moiré' surgiu na Idade Média para descrever o tecido de seda moiré usado pelos reis da França, onde duas camadas de tecido eram prensadas juntas sob cilindros quentes para criar de propósito reflexos ondulados parecidos com ondas do mar!",
    "curiosidadeTecnica": "O efeito moiré no bordado é um fenômeno puramente geométrico de interferência espacial de frequências: quando a frequência de pontos (2,5 pontos/mm) aproxima-se da frequência de fios do tecido (3 fios/mm), surge uma nova frequência visual 'fantasma' com período de onda de 10 a 20 mm.",
    "dicaArtrelados": "Ao bordar grandes fundos de tatami (como escudos de futebol ou bandeiras de 10 cm), nunca use ângulo de 0° ou 45°: coloque o ângulo de ponto em 22° ou 68° e ative 10% de 'comprimento aleatório de ponto' no programa. O fundo fica liso e macio como veludo, sem nenhuma listrinha marcando!",
    "comparisonTable": {
      "headers": [
        "Configuração de Tatami",
        "Aparência Visual",
        "Interferência com Tecido",
        "Distribuição de Furos"
      ],
      "rows": [
        [
          "Tatami Nivelado Anti-Moiré (22° / Fração 0,38)",
          "Superfície 100% lisa, homogênea e nobre",
          "Zero interferência (cancela ondas)",
          "Perfeita e dispersa"
        ],
        [
          "Tatami Padrão a 45° em Sarja",
          "Aparecem listras diagonais e fendas",
          "Altíssima (entra nos canais da sarja)",
          "Alinhada em canais"
        ],
        [
          "Tatami com Fração 0,50 (Simétrica)",
          "Padrão de escamas de peixe aparente",
          "Média",
          "Padrão xadrez visível"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 900 PPM",
      "needleType": "75/11 SES de ponta fina",
      "stabilizer": "Entretela de recorte ou rasgável estável de 60 g/m²",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm a 0.42 mm com comprimento de ponto de 4.0 mm"
    },
    "applications": [
      "Fundos de brasões de armas, emblemas militares e escudos de times de futebol",
      "Grandes bandeiras nacionais e logotipos institucionais para costas de jaquetas",
      "Tapeçarias decorativas, almofadas bordadas e quadros de arte têxtil",
      "Preenchimentos em jaquetas jeans pesadas, sarjas e moletons felpados"
    ],
    "troubleshootingTips": [
      "Se notar linhas diagonais na visualização do software, mude o ângulo do tatami em 10 a 15 graus",
      "Aplique uma camada de underlay com ângulo cruzado a 90° da camada de acabamento",
      "Utilize linhas de poliéster trilobal para dar brilho sedoso e uniforme a todo o fundo"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Tatami / Ponto Esteira",
      "Densidade de Ponto",
      "Underlay / Pontos de Suporte",
      "Compensação de Repuxo"
    ],
    "tags": [
      "n-095",
      "ponto tatami",
      "moire",
      "fracao de passo",
      "anti moire",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Advanced Tatami Settings: Pitch Fractioning & Moiré Elimination. Sydney, 2021.",
      "PARRISH, Gail. Mathematical Stitch Patterns: Anti-Moiré Geometry and Stochastic Pitch Leveling. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra um retângulo de 50 x 50 mm no seu programa de matriz e preencha com ponto tatami a 45°. Depois mude o ângulo para 22° e ative o comprimento aleatório de ponto (10%). Olhe a simulação na tela do computador: perceba como o segundo desenho fica muito mais limpo, liso e sem marcas feias!",
    "quickSummary": "O jeito certo de regular os pontos de fundos grandes para não formar listras nem ondas esquisitas no bordado.",
    "beginnerExplanation": "Quando a gente borda um fundo grande (como o fundo de um escudo de time de futebol), se os pontos caírem certinho na mesma linha, o bordado fica cheio de listras que parecem defeito. O segredo é colocar os pontos em ângulos inclinados bem suaves para o fundo ficar lisinho e macio como veludo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-096-nao-tecidos-termocolantes-com-adesivo-de-poliamida-de-baixa-fusao",
    "code": "N-096",
    "term": "Não-Tecidos Termocolantes com Adesivo de Poliamida de Baixa Fusão (Low-Melt Polyamide Fusible Non-Wovens)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego therme (calor / temperatura) e do latim colare (grudar / fundir adesivo) e poliamida (polímero sintético de alta aderência têxtil).",
    "summary": "Estudo das entretelas não-tecidas revestidas com micro-pontos de resina termofusível de poliamida de baixa temperatura (110°C a 120°C) para estabilização de tecidos delicados, sedas e lycras.",
    "definition": "Não-Tecidos Termocolantes com Adesivo de Poliamida de Baixa Fusão (Low-Temperature Polyamide Dot-Coated Fusible Non-Wovens) é a tecnologia de estabilizadores de bordado que incorporam micro-pontos termoplásticos de copoliamida (CoPA) na face de contato com o tecido. Diferente das resinas antigas de polietileno (que exigiam ferros superquentes a 160°C que queimavam sedas e lycras), a resina de poliamida funde suavemente entre 110°C e 125°C com pressão leve de 5 a 8 segundos. Essa colagem microscópica temporária ou permanente une as fibras do tecido à entretela de forma 100% plana, impedindo totalmente o repuxo e dispensando o uso de adesivos spray no ateliê.",
    "technicalDetails": "Temperatura de fusão do adesivo: 110°C a 125°C. Pressão de aplicação: 1,5 a 2,5 bar (pressão manual média). Tempo de prensagem: 6 a 10 segundos. Gramatura da manta base: 35 a 50 g/m². Padrão de aplicação de resina: Micro-pontos computadorizados (Computer Dot Matrix / 50 a 70 pontos/cm²).",
    "construction": [
      "Manta não-tecida de poliéster/viscose com toque ultra-macio",
      "Revestimento com micro-gotas de resina termofusível de copoliamida pura",
      "Estrutura permeável ao vapor que permite colagem com ferro a vapor comum",
      "Compatibilidade com lavagens domésticas e a seco sem descolar nem criar bolhas",
      "Resina hipoalergênica livre de formaldeído e substâncias tóxicas"
    ],
    "howItWorks": [
      "1. Corta-se a entretela termocolante de poliamida no tamanho do bastidor ou da peça.",
      "2. Posiciona-se a face áspera (com os micro-pontos de resina) contra o avesso do tecido a ser bordado.",
      "3. Pressiona-se com o ferro morno (posição lã/seda a 120°C) durante 8 segundos sem arrastar o ferro.",
      "4. A resina derrete e adere suavemente na trama do tecido, transformando o tecido elástico em uma base estável.",
      "5. Encaixa-se o conjunto no bastidor com extrema facilidade (o tecido não escorrega e não forma rugas).",
      "6. A máquina borda a matriz com contornos e satins perfeitamente alinhados sem nenhum repuxo.",
      "7. No final, a entretela fica macia e integrada à peça (ou pode ser removida dependendo se for rasgável ou recorte)."
    ],
    "mainTypes": [
      "Entretela Termocolante Rasgável Suave (Para tecidos de algodão, camisas e enxovais delicados)",
      "Entretela Termocolante de Malha Bi-Elástica (Para lycra, suéteres e malhas com elastano)",
      "Filme Termocolante Protetor de Avesso (Para colar por cima do bordado pronto para não pinicar bebês)"
    ],
    "characteristics": [
      "Fixação perfeita e plana que elimina 100% o uso de colas spray inflamáveis no ateliê",
      "Não agride nem queima tecidos sensíveis ao calor (como sedas, poliéster fininho e lycra)",
      "Zero resíduo de cola pegajosa na agulha da máquina durante o bordado",
      "Toque leve, macio e flexível que acompanha o caimento natural da roupa"
    ],
    "limitations": [
      "Não aplicar o ferro quente demais (> 150°C), o que pode evaporar a resina e queimar o tecido",
      "Deixar a peça esfriar por 2 minutos após passar o ferro antes de colocar no bastidor para a cola curar",
      "Não utilizar em tecidos com acabamentos siliconados ou oleofóbicos que repelem colas"
    ],
    "numberingSystem": [
      "Temperatura de Aplicação: 115°C a 120°C",
      "Tempo de Prensagem: 8 segundos",
      "Gramatura Típica: 40 g/m²"
    ],
    "advantages": [
      "✔ Acaba com a sujeira e o cheiro forte de cola spray no ambiente do seu ateliê",
      "✔ Garante que tecidos que esticam (como lycra de biquíni e malhas) fiquem fáceis de bordar como papel",
      "✔ Proporciona um acabamento profissional impecável sem nenhuma ruga ao redor do bordado"
    ],
    "commonErrors": [
      "❌ Arrastar o ferro para lá e para cá na hora de colar, esticando e deformando a malha",
      "❌ Colocar a face com cola virada para o lado do ferro, sujando a base do ferro de passar",
      "❌ Tentar bordar logo após passar o ferro sem esperar a peça esfriar e a resina travar"
    ],
    "voceSabia": "As entretelas termocolantes foram desenvolvidas na década de 1950 na Alemanha para a alfaiataria de ternos masculinos; antes delas, todos os colarinhos e paletós precisavam ser acolchoados à mão com centenas de alinhavos invisíveis de costura manual!",
    "curiosidadeTecnica": "A resina de copoliamida de baixa fusão possui uma viscosidade no estado fundido de 350 Pa.s a 120°C, permitindo que ela penetre apenas 0,05 mm na superfície dos fios do tecido sem vazar para o lado direito da roupa.",
    "dicaArtrelados": "Ao usar entretela termocolante, apoie o ferro de passar em cima do tecido, conte devagar até 8 e levante o ferro para apoiar no próximo pedaço: nunca esfregue o ferro! Espere esfriar 1 minutinho antes de colocar no bastidor: o tecido fica tão firme e assentado que parece uma folha de papel, pronto para você bordar com perfeição!",
    "comparisonTable": {
      "headers": [
        "Método de Fixação",
        "Facilidade de Montagem",
        "Sujeira / Névoa no Ar",
        "Segurança em Tecidos Finos"
      ],
      "rows": [
        [
          "Entretela Termocolante de Poliamida",
          "Máxima (tecido cola plano e liso)",
          "Zero (limpo e sem cheiro)",
          "Altíssima (cola suave a 120°C)"
        ],
        [
          "Adesivo Temporário Spray 505",
          "Boa (requer prática)",
          "Gera névoa e gruda na bancada",
          "Boa"
        ],
        [
          "Sem Adesivo (Só no Bastidor)",
          "Difícil (o tecido elástico escorrega)",
          "Zero",
          "Risco alto de repuxo e rugas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 900 PPM",
      "needleType": "75/11 SES de ponta arredondada",
      "stabilizer": "Não-Tecido Termocolante de Baixa Fusão 40 g/m²",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Bordados em vestidos de festa de seda, cetim, crepe e musselina delicada",
      "Peças de moda fitness, maiôs, biquínis e bodies de lycra com alta elasticidade",
      "Colarinhos de camisas sociais, punhos e carcelas de alfaiataria masculina",
      "Proteção de avesso (termo-protetor) em bodies e macacões de bebê para não irritar a pele"
    ],
    "troubleshootingTips": [
      "Se a entretela soltar nas bordas, aumente a pressão do ferro por mais 3 segundos",
      "Utilize um pano fino de algodão (tecido de passar) entre o ferro e o tecido delicado",
      "Guarde os rolos de entretela termocolante em local seco e longe de fontes de calor"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Entretela Termocolante",
      "Entretela de Recorte (Cut-Away)",
      "Adesivo Temporário em Spray 505",
      "Tipos de Tecidos"
    ],
    "tags": [
      "n-096",
      "termocolante",
      "poliamida",
      "baixa fusao",
      "estabilizacao termica",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FREUDENBERG / VILENE Interlinings. Low-Melt Polyamide Fusibles & Technical Non-Wovens. Weinheim, 2021.",
      "PARRISH, Gail. Fusible Interfacings in Machine Embroidery: Polymer Chemistry, Thermal Bonding and Fabric Stabilization. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tecido de malha bem elástica que estica para todos os lados. Cole um pedaço de entretela termocolante de baixa fusão no avesso com o ferro morno durante 8 segundos. Tente esticar a malha agora: sinta como ela ficou estável e firme, pronta para receber o bordado mais lindo do mundo sem deformar!",
    "quickSummary": "Entretela que gruda no avesso da roupa com o calor leve do ferro de passar, deixando tecidos elásticos fáceis de bordar.",
    "beginnerExplanation": "É uma entretela mágica que tem pontinhos de cola suave: você encosta o ferro morninho no avesso da roupa por alguns segundos e ela cola no tecido, deixando até as malhas mais difíceis firminhas como papel para você bordar sem nenhuma ruga e sem precisar de cola spray!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-097-nivelamento-de-excentricidade-da-polia-dentada-do-eixo-principal",
    "code": "N-097",
    "term": "Nivelamento de Excentricidade da Polia Dentada do Eixo Principal (Main Shaft Timing Belt Pulley Runout)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim ex-centrum (fora do centro de rotação / desvio radial) e do grego tropos (polia de tração mecânica sincronizada).",
    "summary": "Procedimento metrológico de alinhamento e medição de desvio radial e axial (Runout < 0,03 mm) nas polias dentadas de sincronismo (HTD/GT2) que transmitem o torque do servomotor para o eixo principal da máquina de bordar.",
    "definition": "Nivelamento de Excentricidade da Polia Dentada do Eixo Principal (Main Shaft Synchronous Timing Pulley Radial & Axial Runout Calibration) é o procedimento de inspeção e alinhamento mecânico que mede e corrige qualquer desvio de concentricidade (empenamento radial ou oscilação lateral) nas polias dentadas de alumínio usinado montadas no eixo superior e inferior da máquina de bordar. Polias com excentricidade superior a 0,05 mm causam variação cíclica na tensão da correia dentada de sincronismo, gerando micro-vibrações harmônicas que afetam a formação da laçada, provocam ruídos de zumbido e aceleram o desgaste dos rolamentos dos servomotores.",
    "technicalDetails": "Tolerância de desvio radial (Radial Runout): ≤ 0,025 mm. Tolerância de desvio axial (Lateral Wobble): ≤ 0,030 mm. Tipo de perfil de dente: HTD 3M, 5M ou Gates GT3 de alta precisão. Tensão de correia recomendada: Medida com frequencímetro acústico na faixa de 110 Hz a 130 Hz. Torque de aperto do cubo: 4,5 N.m.",
    "construction": [
      "Polia dentada de precisão usinada em alumínio aeronáutico 7075 com bucha cônica de fixação",
      "Correia sincronizadora dentada com cordonéis internos de fibra de vidro ou fibra de carbono",
      "Relógio comparador milesimal (0,001 mm) com base magnética para medição de concentricidade",
      "Sensor frequencímetro acústico óptico para medição da frequência de ressonância da correia",
      "Chave de torque dinamométrica para aperto balanceado dos parafusos de fixação do cubo"
    ],
    "howItWorks": [
      "1. Remove-se a tampa de proteção traseira para expor as polias e a correia do eixo principal.",
      "2. Posiciona-se a ponta de contato do relógio comparador na face externa usinada da polia dentada.",
      "3. Gira-se o volante principal manualmente em 360° observando o deslocamento do ponteiro do relógio.",
      "4. Se o desvio de concentricidade (excentricidade) for superior a 0,03 mm, soltam-se os parafusos do cubo cônico.",
      "5. Realinha-se a posição da polia em relação ao eixo e reapertam-se os parafusos em cruz com torquímetro.",
      "6. Verifica-se a tensão da correia dentada medindo a frequência acústica com o medidor de tensão.",
      "7. A máquina é testada a 1.000 PPM: o funcionamento torna-se ultra-silencioso, suave e livre de qualquer vibração."
    ],
    "mainTypes": [
      "Calibração de Polia do Servomotor Principal (Garante acelerações e frenagens suaves a cada ponto)",
      "Nivelamento de Polia de Transmissão 2:1 da Lançadeira (Garante sincronismo angular perfeito da lançadeira)",
      "Inspeção de Polias dos Eixos X e Y do Pantógrafo (Garante movimentação milimétrica sem folgas nos desenhos)"
    ],
    "characteristics": [
      "Eliminação total de zumbidos mecânicos e vibrações que ressoam na mesa da máquina",
      "Precisão angular perfeita no sincronismo entre a subida da agulha e o giro da lançadeira",
      "Aumento da vida útil das correias dentadas e dos rolamentos dos motores em mais de 300%",
      "Bordados perfeitamente nítidos mesmo nas maiores velocidades nominais de trabalho"
    ],
    "limitations": [
      "Exige instrumentos metrológicos de precisão (relógio comparador e torquímetro)",
      "Não tentar bater com martelo de ferro na polia (o alumínio amassa e deforma para sempre)",
      "Procedimento avançado que deve ser realizado por técnico qualificado"
    ],
    "numberingSystem": [
      "Desvio Radial Máximo: 0,025 mm",
      "Frequência da Correia: 120 Hz ± 5 Hz",
      "Torque dos Parafusos: 4,5 N.m"
    ],
    "advantages": [
      "✔ Deixa a máquina de bordar incrivelmente silenciosa como se estivesse nova de fábrica",
      "✔ Previne a quebra inesperada de correias de transmissão no meio de uma grande produção",
      "✔ Garante que as linhas finas e contornos da matriz fechem com precisão de fração de milímetro"
    ],
    "commonErrors": [
      "❌ Apertar a correia dentada esticada demais como uma corda de violão, entortando o eixo do motor",
      "❌ Bater na polia com martelo para tentar 'alinhar no olho', estragando a engrenagem para sempre",
      "❌ Deixar óleo ou graxa respingar na correia de borracha dentada, causando apodrecimento dos dentes"
    ],
    "voceSabia": "As correias dentadas com dentes arredondados de perfil HTD foram criadas para os motores da Fórmula 1 na década de 1970 para transmitir centenas de cavalos de força sem nenhum milímetro de escorregamento; nas máquinas de bordar, elas garantem que a agulha e a lançadeira se encontrem no milissegundo exato!",
    "curiosidadeTecnica": "Uma polia com apenas 0,05 mm de excentricidade girando a 1.000 RPM gera uma força centrífuga desbalanceada de mais de 3,5 kgf que sacode o cabeçote da máquina 16 vezes por segundo, provocando micro-desvios visíveis nos pontos de satim.",
    "dicaArtrelados": "Se a sua máquina de bordar começou a fazer um zumbido estranho ou começou a vibrar a mesa quando passa de 800 PPM, o problema geralmente é a correia principal que está com a tensão descalibrada. Uma regulagem correta da correia pelo mecânico devolve o silêncio e a suavidade originais da sua máquina!",
    "comparisonTable": {
      "headers": [
        "Estado da Polia / Correia",
        "Nível de Ruído",
        "Vibração em 1.000 PPM",
        "Precisão dos Pontos"
      ],
      "rows": [
        [
          "Nivelada e Concentrica (< 0,025 mm)",
          "Silencioso e aveludado",
          "Zero vibração (estável)",
          "Perfeita (± 0,05 mm)"
        ],
        [
          "Com Excentricidade / Empenada",
          "Zumbido e ronco alto",
          "Alta vibração harmônica",
          "Micro-desvios de contorno"
        ],
        [
          "Correia Frouxa",
          "Estalos nas acelerações",
          "Perda de sincronismo",
          "Pontos pulados e desalinhamento"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-calibração: Estabilidade total até 1.000 - 1.200 PPM",
      "needleType": "Padrão de produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Manutenção preventiva especializada e revisão geral de fábrica",
      "Eliminação de ruídos excessivos e vibrações em máquinas monocabeça e industriais",
      "Substituição de correias dentadas principais desgastadas após anos de uso",
      "Calibração de motores de passo e servomotores após transporte da máquina"
    ],
    "troubleshootingTips": [
      "Inspecione os dentes da correia: se houver pó preto de borracha acumulado na tampa, a polia está desalinhada",
      "Utilize sempre correias originais de marcas renomadas (Gates, Bando ou Optibelt)",
      "Nunca lubrifique a correia dentada com graxa (ela deve trabalhar 100% seca e limpa)"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Servomotores do Pantógrafo",
      "Nivelamento de Folga Axial do Eixo da Lançadeira",
      "Manutenção Preventiva",
      "Lubrificação Periódica"
    ],
    "tags": [
      "n-097",
      "excentricidade",
      "polia dentada",
      "correia sincronizadora",
      "eixo principal",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GATES Corporation Industrial Timing Belt Engineering & Pulley Tolerances Guide. Denver, 2021.",
      "PARRISH, Gail. Synchronous Drive Dynamics, Pulley Runout and Vibration Analysis in Embroidery Machinery. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque a mão espalmada sobre a mesa da sua máquina enquanto ela borda em velocidade normal: sinta como a vibração deve ser suave e contínua como o ronronar de um gato. Se você sentir solavancos ou trepidações fortes, é sinal de que as correias precisam de uma conferência de alinhamento!",
    "quickSummary": "Regulagem das rodas dentadas e correias internas para a máquina trabalhar macia, silenciosa e sem tremer.",
    "beginnerExplanation": "Dentro da máquina existem correias dentadas e rodinhas de metal que giram o motor e movimentam a agulha: alinhar essas rodinhas para que girem perfeitamente redondas sem rebolar deixa a máquina super silenciosa e garante que ela não trema enquanto borda rápido!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-098-nucleo-de-bobinas-pre-enroladas-sem-flange-vs-carreteis-plasticos",
    "code": "N-098",
    "term": "Núcleo de Bobinas Pré-Enroladas Sem Flange vs. Carretéis Plásticos (Sideless Prewound Bobbins vs. Plastic Flanged)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Bobinas & Caixas de Bobina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês sideless (sem abas laterais / carretel de fio autoportante prensado) e do latim vasculum (bobina cilíndrica de retenção inferior).",
    "summary": "Estudo comparativo de eficiência operacional, capacidade métrica e estabilidade de tensão entre bobinas pré-bobinadas sem abas laterais (Sideless), com laterais de papelão (Cardboard Sided) e carretéis plásticos tradicionais.",
    "definition": "Núcleo de Bobinas Pré-Enroladas Sem Flange vs. Carretéis Plásticos (Sideless Magnetic-Core vs. Plastic Flanged Prewound Bobbins) é a análise técnica das diferentes construções de bobinas inferiores para máquinas de bordar industriais e comerciais. As Bobinas Sem Flange (*Sideless*, com filamento de poliéster 60wt ou 70wt compactado com adesivo termofusível leve ou núcleo magnético) comportam até 40% mais metragem de linha (120 a 140 metros no tamanho L) em comparação aos carretéis plásticos convencionais (80 a 90 metros). Como não possuem paredes plásticas laterais para atritar contra a caixa de bobina, oferecem uma saída de linha com coeficiente de atrito constante do primeiro ao último metro.",
    "technicalDetails": "Metragem por bobina Tamanho L: Sideless (130 m) vs. Carretel Plástico (90 m). Título da linha de bobina: 60wt ou 70wt Filamento Contínuo 100% Poliéster. Tensão de saída calibrada: 20 a 24 gf (Tensiômetro Towa). Peso da bobina: 2,8 g (Sideless) vs. 4,2 g (Carretel Plástico).",
    "construction": [
      "Filamento contínuo de poliéster de alta tenacidade com lubrificação de micro-silicone",
      "Enrolamento de precisão cruzado industrial com tensão controlada por computador",
      "Pequeno anel magnético central (Magnetic Core) para controle de inércia e fim de bobina",
      "Disco adesivo leve de retenção ou abas descartáveis de papelão prensado",
      "Embalagens seladas com proteção contra umidade e poeira do ateliê"
    ],
    "howItWorks": [
      "1. Retira-se a bobina pré-enrolada da caixa (não há necessidade de perder tempo enchendo bobina na máquina).",
      "2. Insere-se a bobina na caixa de bobina metálica (com o lado magnético voltado para o fundo da caixa, se houver).",
      "3. Passa-se a linha pela fenda e sob a lâmina da mola de tensão da caixa de bobina.",
      "4. Testa-se a saída no tensiômetro Towa: a leitura marca exatamente 22 gramas-força de forma constante.",
      "5. Encaixa-se a caixa de bobina na lançadeira rotativa da máquina.",
      "6. A máquina borda continuamente por milhares de pontos a mais sem interrupções para troca de linha inferior.",
      "7. A tensão no avesso do bordado permanece perfeitamente uniforme (1/3 de linha de cima e 1/3 de bobina) do início ao fim."
    ],
    "mainTypes": [
      "Bobinas Sideless Sem Aba (Fio autoportante colado - Máxima capacidade de metragem e menor atrito)",
      "Bobinas com Núcleo Magnético (Fil-Tec Magna-Glide - Elimina rotação residual e laçadas soltas)",
      "Bobinas com Laterais de Papelão (Cardboard Sided - Proteção mecânica tradicional com preço econômico)",
      "Carretéis Plásticos Rebobinados Manualmente (Opção econômica para sobras de linha de costura)"
    ],
    "characteristics": [
      "Ganho de até 40% a mais de tempo de costura contínua entre uma troca de bobina e outra",
      "Eliminação da oscilação de tensão causada por carretéis plásticos empenados ou com rebarbas",
      "Linha de filamento contínuo ultrafina (60wt/70wt) que não solta fiapos dentro da lançadeira",
      "Aumento substancial da produtividade e padronização da qualidade do ponto no ateliê"
    ],
    "limitations": [
      "Bobinas sideless exigem cuidado no manuseio para não amassar as laterais abertas antes de colocar na caixa",
      "Não utilizar bobinas magnéticas em caixas de bobina com molas de retenção incompatíveis",
      "Custo unitário de compra inicial ligeiramente superior ao de rebobinar linha comum em casa"
    ],
    "numberingSystem": [
      "Tamanho Padrão Industrial: Style L (Diâmetro 21 mm x Altura 9 mm)",
      "Tamanho Jumbo para Bonés: Style M (Diâmetro 25 mm x Altura 11 mm)",
      "Capacidade Média Style L: 130 metros de linha"
    ],
    "advantages": [
      "✔ Economiza horas preciosas de trabalho eliminando a tarefa chata e demorada de encher bobinas na mão",
      "✔ Zera pontos soltos no direito causados por bobinas caseiras enroladas frouxas ou tortas",
      "✔ Reduz em mais de 70% o acúmulo de poeira e fiapos de linha dentro da lançadeira da máquina"
    ],
    "commonErrors": [
      "❌ Encher bobina de plástico na mão em velocidade alta com linha comum de costura cheia de caroços",
      "❌ Usar carretéis de plástico velhos com as bordas mastigadas ou trincadas, travando a linha na caixa",
      "❌ Colocar a bobina magnética virada ao contrário na caixa de bobina"
    ],
    "voceSabia": "A primeira bobina sem laterais (Sideless) com núcleo magnético foi inventada nos Estados Unidos pela Fil-Tec na década de 1990; o ímã patenteado faz a bobina frear instantaneamente no milissegundo em que a máquina para, eliminando 100% das laçadas frouxas!",
    "curiosidadeTecnica": "Uma bobina rebobinada manualmente na máquina doméstica sofre até 15 variações de tensão diferentes ao longo de sua metragem; uma bobina pré-enrolada industrial tem desvio de tensão menor que 1,2 grama-força em todos os 130 metros de fio.",
    "dicaArtrelados": "Se você ainda perde tempo enchendo bobinas plásticas no ateliê, experimente comprar uma caixinha de bobinas pré-enroladas industriais (tamanho L) de filamento de poliéster: você vai ganhar quase uma hora a mais de produção por dia e o avesso dos seus bordados vai ficar tão perfeito e padronizado que parece uma pintura!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Bobina Pré-Enrolada Sideless",
        "Carretel Plástico Rebobinado Manualmente"
      ],
      "rows": [
        [
          "Metragem de Linha (Tam. L)",
          "120 a 140 metros (dura muito mais)",
          "75 a 90 metros (acaba rápido)"
        ],
        [
          "Constância de Tensão",
          "100% uniforme do início ao fim",
          "Instável (varia conforme foi enrolada)"
        ],
        [
          "Geração de Fiapos na Máquina",
          "Zero (filamento contínuo limpo)",
          "Alta (linha de algodão/spun solta pó)"
        ],
        [
          "Tempo de Preparação",
          "Zero segundos (pega da caixa e usa)",
          "5 a 10 minutos enchendo na máquina"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 1.000 PPM (Estabilidade total)",
      "needleType": "Padrão de produção",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Caixa de bobina ajustada para 22 a 24 gf no tensiômetro Towa",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Produção de alta escala de uniformes, camisetas e bonés em máquinas industriais",
      "Bordados finos de enxovais de bebê e cama/mesa com avesso limpo e impecável",
      "Ateliês comerciais que buscam maximizar a lucratividade e o tempo de máquina rodando",
      "Bordados em peças escuras ou brancas utilizando bobinas pré-enroladas na cor correspondente"
    ],
    "troubleshootingTips": [
      "Mantenha a caixinha de bobinas fechada para evitar que os fios peguem poeira do ar",
      "Limpe a lâmina da caixa de bobina passando um pedacinho de papel sulfite dobrado a cada troca de bobina",
      "Verifique sempre se a mola interna de pressão da caixa de bobina está limpa e reta"
    ],
    "relatedTerms": [
      "Bobinas & Caixas de Bobina",
      "Bobina de Filamento Contínuo",
      "Caixa de Bobina",
      "Tensiômetro Towa",
      "Nivelamento de Tensão de Linha"
    ],
    "tags": [
      "n-098",
      "bobina pre enrolada",
      "sideless",
      "magna glide",
      "caixa de bobina",
      "bobinas e caixas de bobina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FIL-TEC Magna-Glide Bobbins Engineering & Tension Consistency Standards. Hagerstown, 2021.",
      "PARRISH, Gail. Underthread Dynamics: Prewound Sideless Bobbins vs. Spun Polyester Spools in High-Speed Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque uma bobina pré-enrolada na caixa de bobina e borde um desenho. Depois coloque uma bobina de plástico que você mesma encheu na máquina. Olhe o avesso dos dois bordados: veja como o avesso da bobina pré-enrolada é retinho, lisinho e com a quantidade perfeita de linha branca no centro!",
    "quickSummary": "Bobinas prontas de fábrica que vêm com muito mais linha, não soltam fiapos e deixam o avesso perfeito.",
    "beginnerExplanation": "As bobinas pré-enroladas já vêm prontas de fábrica com uma linha fininha e super resistente enrolada por robôs com a pressão perfeita: você não perde tempo enchendo bobina na mão, a linha dura muito mais tempo e o avesso do seu bordado fica lindo e padronizado!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-099-nivelamento-de-tolerancia-geometrica-em-matrizes-de-alta-simetria-e-mandalas",
    "code": "N-099",
    "term": "Nivelamento de Tolerância Geométrica em Matrizes de Alta Simetria e Mandalas (Geometric Symmetry & Mandala Digitizing)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego symmetria (proporção harmônica entre as partes) e do sânscrito mandala (círculo sagrado de expansão radial perfeita).",
    "summary": "Algoritmos de compensação de repuxo radial, sequenciamento em espiral e cópia simétrica polar para matrizes circulares e mandalas sem deformação ovalada no bastidor.",
    "definition": "Nivelamento de Tolerância Geométrica em Matrizes de Alta Simetria e Mandalas (Geometric Radial Tolerance & Mandala Symmetry Balancing) é o conjunto de regras matemáticas de digitalização projetadas para anular as forças assimétricas de repuxo têxtil em matrizes com múltiplos eixos de reflexão ou rotação polar (como mandalas circulares, rosas dos ventos, arabescos caleidoscópicos e medalhões). Como o tecido estica mais no sentido da trama do que no urdume, círculos perfeitos tendem a se transformar em ovais defeituosos durante a costura se a compensação de repuxo for aplicada uniformemente; a técnica aplica compensação diferencial elíptica e sequenciamento de bordado em pétalas opostas balanceadas.",
    "technicalDetails": "Tolerância de circularidade geométrica: ≤ 0,3 mm de desvio radial. Sequenciamento de ramos simétricos: Ordem radial alternada em cruz (0° → 180° → 90° → 270°). Compensação de repuxo diferencial: Eixo X (trama) = 0,45 mm / Eixo Y (urdume) = 0,30 mm. Ângulos de rotação polar: 4, 6, 8, 12 ou 16 eixos de espelhamento.",
    "construction": [
      "Centro geométrico absoluto (X=0, Y=0) fixado como ponto zero da matriz",
      "Pétala ou elemento mestre digitalizado com nós vetoriais de alta precisão",
      "Ferramenta de Matriz Circular / Caleidoscópio (Circular Array Tool) com duplicação paramétrica",
      "Underlays radiais concêntricos em anéis interligados para travamento multidirecional do tecido",
      "Nós de arremate integrados nos pontos de cruzamento centrais para evitar saltos visíveis"
    ],
    "howItWorks": [
      "1. No software de matriz, define-se o ponto central da mandala no eixo de coordenadas (0,0).",
      "2. Desenha-se uma única pétala ou segmento angular com compensação de repuxo calibrada.",
      "3. Utiliza-se a ferramenta de 'Cópia Simétrica Polar (Radial Array)' para replicar o elemento em 8 ou 12 posições idênticas.",
      "4. Cria-se uma base de underlay em círculos concêntricos que ancora o tecido do centro para as bordas externas.",
      "5. O sequenciamento de costura é organizado para bordar em pares diametralmente opostos, equilibrando as tensões.",
      "6. A máquina borda a mandala com movimentos fluidos sem esticar o tecido para um único lado.",
      "7. Ao soltar do bastidor, o bordado resulta em um círculo milimetricamente perfeito e 100% plano."
    ],
    "mainTypes": [
      "Mandalas de Simetria Polar de 8 a 16 Eixos (Para almofadas, costas de jaquetas e toalhas redondas)",
      "Brasões com Medalhões Concéntricos e Coroas de Louro (Para insígnias oficiais e fardamentos)",
      "Rosas dos Ventos e Estrelas Náuticas de Alta Precisão (Para uniformes marítimos e mapas bordados)"
    ],
    "characteristics": [
      "Circularidade perfeita e simetria absoluta visível a qualquer ângulo de observação",
      "Eliminação definitiva do efeito de 'círculo ovalado' ou desenho torto ao tirar do bastidor",
      "Distribuição equilibrada das forças de tração da linha em todas as 360 direções",
      "Visual hipnotizante de alta arte têxtil com encaixes de pontas milimétricos"
    ],
    "limitations": [
      "Exige que o tecido seja montado no bastidor no esquadro perfeito da trama e do urdume",
      "Não bordar em sequência circular contínua (ex: 1, 2, 3, 4 em sentido horário), que deforma o tecido como um redemoinho",
      "Requer entretelas de excelente estabilidade isotrópica (como recorte PolyMesh)"
    ],
    "numberingSystem": [
      "Desvio Máximo de Raio: < 0,3 mm",
      "Eixos de Simetria Comuns: 8, 12 ou 16 eixos",
      "Compensação Diferencial: + 0,15 mm no eixo mais elástico"
    ],
    "advantages": [
      "✔ Permite criar peças de arte têxtil e decoração de altíssimo valor de mercado e sofisticação",
      "✔ Garante que círculos, medalhões e mandalas continuem perfeitamente redondos após soltar o bastidor",
      "✔ Impressiona clientes e decoradores com encaixes de desenhos de precisão geométrica cirúrgica"
    ],
    "commonErrors": [
      "❌ Borda todas as pétalas em círculo na sequência horária, torcendo o tecido como um parafuso",
      "❌ Usar entretela rasgável fraca, fazendo a mandala virar uma tigela funda enrugada no centro",
      "❌ Esquecer de ancorar o centro da mandala com círculos de underlay antes de bordar as pétalas"
    ],
    "voceSabia": "A geometria das mandalas e dos medalhões sagrados é baseada na Sequência de Fibonacci e na Proporção Áurea (1,618), a mesma proporção matemática encontrada no miolo dos girassóis, nas conchas dos caracóis e nas galáxias espirais do universo!",
    "curiosidadeTecnica": "Quando uma matriz circular de 100 mm é bordada sem compensação diferencial em uma malha, o repuxo faz o diâmetro transversal encolher até 6 mm enquanto o diâmetro longitudinal não encolhe nada, transformando o círculo em uma elipse com 6% de distorção.",
    "dicaArtrelados": "Ao programar mandalas ou medalhões redondos, nunca programe a máquina para bordar dando a volta no relógio (pétala 1, depois 2, depois 3...): programe para bordar em cruz! Borde a pétala de cima, depois a de baixo, depois a da esquerda, depois a da direita e só depois as diagonais: as forças se anulam e a mandala fica tão redonda que parece desenhada com compasso!",
    "comparisonTable": {
      "headers": [
        "Técnica de Programação",
        "Forma Final Pós-Bastidor",
        "Tensão no Tecido",
        "Encaixe dos Vértices"
      ],
      "rows": [
        [
          "Simetria Balanceada em Cruz com Underlay",
          "Círculo 100% perfeito e plano",
          "Equilibrada em 360 graus",
          "Milimétrico (zero folgas)"
        ],
        [
          "Sequenciamento Horário Contínuo",
          "Ovalado e torcido (efeito redemoinho)",
          "Torção assimétrica pesada",
          "Pontas desencontradas"
        ],
        [
          "Sem Compensação Diferencial",
          "Oval achatado nos lados",
          "Repuxo forte na trama",
          "Falhas de contorno"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES de alta precisão",
      "stabilizer": "Entretela de Recorte PolyMesh 60 g/m² fixada com Spray Reposicionável",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm com underlays concêntricos integrados"
    },
    "applications": [
      "Mandalas decorativas gigantes para almofadas, mantas e painéis de parede",
      "Medalhões e brasões institucionais para costas de jaquetas e fardamentos",
      "Toalhas de mesa circulares, sousplats e caminhos de mesa de luxo",
      "Customização de quimonos, vestidos boho-chic e jaquetas jeans artísticas"
    ],
    "troubleshootingTips": [
      "Se o centro da mandala formar um bico levantado, reduza a densidade de pontos no ponto de encontro central",
      "Utilize linhas trilobais brilhantes com direções de ponto radiais para criar reflexos cintilantes tipo estrela",
      "Monte o tecido no bastidor sem puxar os cantos para não tensionar a trama assimetricamente"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Compensação de Repuxo",
      "Ponto Satim / Ponto Cheio",
      "Underlay / Pontos de Suporte",
      "Nivelamento de Ângulos de Ponto"
    ],
    "tags": [
      "n-099",
      "mandalas",
      "simetria geometrica",
      "circulos perfeitos",
      "radial array",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Symmetry, Radial Arrays & Geometric Alignment Guide. Sydney, 2021.",
      "PARRISH, Gail. Geometric Mandala Engineering: Radial Pull Compensation and Symmetrical Stitch Balancing. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie uma mandala simples de 6 pétalas no seu software. Programe a ordem para bordar em pares opostos (uma de cima, uma de baixo). Borde em um tecido firme com entretela de recorte e meça com uma régua o diâmetro vertical e o horizontal: veja como os dois lados medem exatamente os mesmos milímetros!",
    "quickSummary": "O segredo para bordar mandalas e desenhos redondos que continuam perfeitamente redondos sem ficar ovais.",
    "beginnerExplanation": "Como o tecido estica mais para os lados do que para cima, quando a gente borda um círculo ele pode virar um ovo torto ao sair da máquina. O segredo é bordar as pétalas em pares opostos (em cruz) e colocar reforços redondos por baixo: assim a mandala fica perfeitamente redonda e linda!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-100-normas-tecnicas-globais-de-conformidade-e-seguranca-textil-no-bordado",
    "code": "N-100",
    "term": "Normas Técnicas Globais de Conformidade e Segurança Têxtil no Bordado (OEKO-TEX Standard 100, REACH & CPSIA)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Design, Teoria & Arte",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim norma (regra / regulamento internacional) e do alemão Öko-Tex (Associação Internacional de Pesquisa e Testes no Campo da Ecologia Têxtil, fundada em Zurique em 1992).",
    "summary": "Compêndio de normas e certificações internacionais de segurança química e humana (livre de metais pesados, ftalatos, chumbo e formaldeído) para insumos de bordado em roupas de bebês e exportação.",
    "definition": "Normas Técnicas Globais de Conformidade e Segurança Têxtil no Bordado (Global Textile Safety Standards: OEKO-TEX Standard 100 Class I, EU REACH & US CPSIA) é o conjunto de regulamentações internacionais e diretrizes toxicológicas que certificam que todas as matérias-primas utilizadas no processo de bordado computadorizado (linhas superiores, linhas de bobina, entretelas, adesivos spray, filmes hidrossolúveis e espumas de EVA) são 100% isentas de substâncias nocivas à saúde humana. A certificação OEKO-TEX Classe I é a mais rigorosa do mundo, auditando a ausência de corantes cancerígenos, pesticidas, chumbo, níquel, cádmio e plastificantes tóxicos, sendo obrigatória para artigos de bebês até 3 anos de idade e para exportação de vestuário.",
    "technicalDetails": "Classes de conformidade OEKO-TEX: Classe I (Bebês e crianças até 36 meses - Limite de pH 4,0 a 7,5 / Chumbo < 90 ppm / Formaldeído livre não-detectável). Regulamento Europeu REACH (EC 1907/2006): Isenção total de Substâncias de Alta Preocupação (SVHC). Norma Americana CPSIA (Consumer Product Safety Improvement Act): Testes rigorosos de chumbo e ftalatos em produtos infantis.",
    "construction": [
      "Laudos laboratoriais de conformidade emitidos por institutos credenciados (Hohenstein, Shirley, Centexbel)",
      "Linhas de poliéster virgem com corantes atóxicos certificados ecologicamente",
      "Entretelas não-tecidas hipoalergênicas produzidas sem ligantes químicos de formaldeído",
      "Filmes plásticos de PVA biodegradáveis e solúveis em água com grau alimentício/médico",
      "Fichas de Informação de Segurança de Produtos Químicos (FISPQ / SDS) arquivadas no ateliê"
    ],
    "howItWorks": [
      "1. O ateliê adquire insumos (linhas Madeira, Amann, Coats, entretelas Vilene/Freudenberg) com selo OEKO-TEX Classe I.",
      "2. Ao confeccionar enxovais de maternidade, roupas de bebê ou uniformes escolares, utilizam-se apenas insumos homologados.",
      "3. O processo de bordado é executado com máquinas limpas e lubrificadas com óleos minerais de grau atóxico.",
      "4. No avesso de peças infantis, aplica-se entretela protetora termocolante macia para evitar atrito com a pele sensível.",
      "5. Emite-se a etiqueta ou certificado de conformidade para marcas clientes que exportam ou vendem no varejo premium.",
      "6. A peça pode ser colocada na boca pelo bebê com segurança toxicológica absoluta e sem soltar corantes.",
      "7. O ateliê posiciona-se como uma empresa sustentável, ética, segura e em total conformidade com a legislação global."
    ],
    "mainTypes": [
      "OEKO-TEX Standard 100 Classe I (Para enxovais de bebê, roupas de recém-nascido e brinquedos de pelúcia)",
      "Diretrizes REACH da União Europeia (Obrigatórias para qualquer peça de vestuário exportada para a Europa)",
      "CPSIA dos Estados Unidos (Regulamentação de segurança para roupas infantis no mercado norte-americano)"
    ],
    "characteristics": [
      "Garantia absoluta de saúde e segurança para peles hipersensíveis e recém-nascidos",
      "Insumos 100% livres de metais pesados, corantes alergênicos e compostos cancerígenos",
      "Abertura imediata de portas comerciais com grandes redes de lojas de bebês e confecções de exportação",
      "Compromisso sustentável e ecológico com o meio ambiente e com o consumidor final"
    ],
    "limitations": [
      "Insumos certificados possuem custo ligeiramente superior a linhas e entretelas genéricas sem procedência",
      "Exige controle de rastreabilidade de lotes no ateliê para auditorias de conformidade",
      "O ateliê deve manter as fichas técnicas (laudos) sempre atualizadas junto aos distribuidores"
    ],
    "numberingSystem": [
      "Certificação: OEKO-TEX Standard 100 (Anexo 4 ou 6)",
      "Classe Mais Rigorosa: Classe I (Artigos Infantis)",
      "Limite de Formaldeído: 0,0 ppm (Não detectável)"
    ],
    "advantages": [
      "✔ Conquista a confiança total de mães, pediatras e marcas de bebê de alto padrão",
      "✔ Habilita o ateliê para fornecer bordados para marcas multinacionais e lojas de departamento",
      "✔ Protege o ateliê contra processos jurídicos de alergias ou intoxicações provocadas por insumos clandestinos"
    ],
    "commonErrors": [
      "❌ Usar linhas clandestinas sem procedência que soltam corantes tóxicos com a saliva do bebê",
      "❌ Usar colas spray industriais de marcenaria ou sapataria em roupas infantis (são tóxicas e perigosas)",
      "❌ Não proteger o avesso áspero de bordados em roupinhas de recém-nascidos"
    ],
    "voceSabia": "A pele de um bebê recém-nascido é 30% mais fina que a de um adulto e absorve substâncias químicas 3 vezes mais rápido; por isso a norma OEKO-TEX Classe I é tão rigorosa que até a saliva do bebê é simulada em laboratório para garantir que nenhum corante passe para a boca da criança!",
    "curiosidadeTecnica": "Para obter a certificação OEKO-TEX Classe I, os fios de bordado são testados contra mais de 300 substâncias químicas nocivas individuais, com limites de detecção da ordem de partes por bilhão (ppb) em cromatógrafos gasosos de espectrometria de massa.",
    "dicaArtrelados": "Ao divulgar seus enxovais de bebê nas redes sociais, destaque com orgulho: 'Nossos bordados são feitos exclusivamente com linhas e entretelas certificadas OEKO-TEX Classe I, 100% livres de substâncias tóxicas e seguras para a pele do seu bebê'. Isso transmite um carinho e profissionalismo gigantescos que encantam as mamães!",
    "comparisonTable": {
      "headers": [
        "Critério de Segurança",
        "Linhas Certificadas OEKO-TEX Classe I",
        "Linhas Genéricas Clandestinas"
      ],
      "rows": [
        [
          "Metais Pesados e Chumbo",
          "Zero (rigorosamente testado em laboratório)",
          "Desconhecido (risco de contaminação)"
        ],
        [
          "Contato com a Boca do Bebê",
          "100% seguro (resiste à saliva sem soltar cor)",
          "Perigoso (pode soltar corantes tóxicos)"
        ],
        [
          "Laudos e Documentação",
          "Certificados internacionais auditados anualmente",
          "Nenhum laudo de segurança"
        ],
        [
          "Aceitação para Exportação",
          "Aprovada na Europa, EUA e Japão",
          "Barrada nas alfândegas internacionais"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "75/11 SES de alta qualidade",
      "stabilizer": "Entretelas certificadas OEKO-TEX + Filme hidrossolúvel limpo",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Enxovais de recém-nascido, bodies de bebê, macacões, naninhas e fraldas de boca",
      "Uniformes escolares infantis e brinquedos de pelúcia personalizados",
      "Roupas hospitalares, aventais de maternidade e lençóis de berçário",
      "Exportação de coleções de moda infantil para os mercados europeu e norte-americano"
    ],
    "troubleshootingTips": [
      "Solicite ao seu fornecedor de linhas e entretelas os certificados OEKO-TEX atualizados em PDF",
      "Aplique sempre a película termocolante macia protetora no avesso de bodies de bebê",
      "Utilize apenas adesivos temporários atóxicos formulados especificamente para a indústria têxtil"
    ],
    "relatedTerms": [
      "Design, Teoria & Arte",
      "Linhas & Fios",
      "Estabilizadores & Entretelas",
      "Linha de Poliéster Trilobal",
      "Normatização de Cores de Referência e Tolerância Delta E"
    ],
    "tags": [
      "n-100",
      "oeko tex",
      "seguranca textil",
      "roupas de bebe",
      "certificacao",
      "design teoria e arte",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "OEKO-TEX Association. Standard 100 Certification Criteria & Test Methods. Zurich, 2021.",
      "PARRISH, Gail. Global Textile Safety Compliance: OEKO-TEX, REACH and CPSIA in Commercial Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Dê uma olhada nos cones de linha que você tem no seu ateliê e procure pelo selinho verde do 'OEKO-TEX Standard 100' impresso na etiqueta do carretel. Guarde essa informação com carinho: ela é a prova de que você oferece o melhor e mais seguro produto para todos os bebês e famílias que compram de você!",
    "quickSummary": "O selo mundial que garante que suas linhas e entretelas não têm veneno e são 100% seguras para roupas de bebê.",
    "beginnerExplanation": "É um selo internacional de garantia de saúde que prova que as linhas e entretelas que você usa não têm produtos químicos perigosos, chumbo ou tintas que façam mal: assim as mamães podem ficar tranquilas porque a roupinha bordada é 100% segura para a pele e a boquinha do bebê recém-nascido!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-101-navalha-movel-e-navalha-fixa-do-corte-de-linha-trimmer",
    "code": "N-101",
    "term": "Navalha Móvel e Navalha Fixa do Corte de Linha (Lâminas do Trimmer / Moving & Fixed Knife)",
    "pronunciation": "na-va-lha mó-vel e na-va-lha fik-sa do cór-ti de li-nha (lâ-mi-nas do tri-mer / mu-vin end fik-sed nai-fi)",
    "letter": "N",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Locução substantiva feminina.",
    "origin": "Desenvolvido na segunda metade do século XX com a automação eletromecânica das primeiras máquinas de bordar industriais multi-cabeças no Japão (Tajima, Barudan e Brother). Substituiu a demorada e arriscada limpeza manual de fios de salto feita com tesouras de arremate, incorporando um sistema de corte automatizado acionado por solenoides elétricos sob a chapa de agulha.",
    "summary": "Conjunto de corte automatizado de alta precisão situado sob a chapa da agulha, composto por uma lâmina oscilante em formato de gancho (navalha móvel) que captura simultaneamente a linha da agulha e a linha da bobina e as cisalha contra uma lâmina de aço de alta dureza (navalha fixa).",
    "definition": "A Navalha Móvel e a Navalha Fixa (conhecidas conjuntamente como Conjunto de Lâminas do Trimmer, Tesoura Automática de Base ou Moving & Fixed Knife Assembly) formam o núcleo mecânico do sistema de corte automático de linha (Underbed Thread Trimmer - UTT) de qualquer máquina de bordar computadorizada moderna. Instalado estrategicamente no leito inferior imediatamente abaixo da chapa de agulha e ao lado da laçadeira rotativa, o mecanismo opera em fração de segundo após o término de um bloco de pontos, em trocas de cor de linha ou antes de saltos de bastidor. A navalha móvel (dotada de um gancho perfilado e fio cortante) avança tracionada por uma biela, solenoide ou servomotor, 'pesca' simultaneamente a perna do fio da agulha e a ponta da linha da bobina, puxa-as em direção ao centro e as pressiona em movimento de tesoura (cisalhamento mecânico) contra o gume retificado da navalha fixa de aço rápido (HSS), decepando ambas as linhas com corte limpo e deixando sobras milimétricas ideais para a retomada do próximo ponto.",
    "technicalDetails": "Fabricadas em aço-ferramenta de alta liga e dureza extrema (HRC 60 a 64 na escala Rockwell C) ou pastilhas de metal duro (carbureto de tungstênio) para resistir ao atrito abrasivo contínuo de fios de poliéster e filamentos metálicos. A pressão de contato entre a navalha móvel e a navalha fixa é mantida por molas de pressão calibradas ou parafusos micrométricos de ajuste. O curso de avanço da navalha móvel varia entre 12 mm e 22 mm dependendo da marca e modelo da máquina. Em conjunto com a navalha fixa, atua uma lâmina elástica de retenção (Thread Retaining Spring / Bobbin Thread Holder), responsável por prender a pontinha da linha da bobina cortada para que ela não escape da caixa de bobina no reinício do bordado.",
    "construction": [
      "Navalha Móvel (Moving Knife): Lâmina curva com gancho capturador na ponta e gume de corte chanfrado na lateral",
      "Navalha Fixa (Fixed Knife / Counter Knife): Barra plana de aço retificado de alta dureza aparafusada na base do chassi inferior",
      "Mola Retentora de Linha da Bobina: Lâmina de latão ou aço mola que segura suavemente a ponta da linha de baixo após o corte",
      "Biela e Alavanca de Acionamento: Haste mecânica conectada ao solenoide de disparo ou ao excêntrico do eixo principal",
      "Parafuso de Regulagem de Pressão: Elemento que calibra a pressão de contato entre as duas lâminas para evitar mordedura sem corte",
      "Solenoide de Corte de Linha: Eletroímã de disparo rápido que puxa o conjunto de navalhas no instante exato determinado pelo comando do software"
    ],
    "howItWorks": [
      "1. A máquina conclui o bordado de uma letra ou cor e a agulha sobe até a posição de parada superior.",
      "2. A placa de comando eletrônico aciona o solenoide ou motor de corte embaixo da chapa da agulha.",
      "3. A Navalha Móvel avança em arco por baixo da chapa de agulha e entra no espaço entre a laçadeira e a caixa de bobina.",
      "4. O ganchinho da navalha móvel engata as duas linhas (a linha superior que vem da agulha e a linha inferior que sai da bobina).",
      "5. Ao recuar, a navalha móvel puxa as duas linhas contra o gume afiado da Navalha Fixa, realizando o cisalhamento instantâneo em forma de tesoura.",
      "6. A mola retentora prende a pontinha da linha da bobina para o próximo início, e o bastidor salta livremente para o próximo ponto sem repuxar o bordado!"
    ],
    "beginnerExplanation": "A Navalha Móvel e a Navalha Fixa são a 'tesourinha secreta' que mora escondidinha embaixo da chapa da sua máquina de bordar! Sabe quando a máquina termina de bordar uma letrinha e dá aquele estalinho gostoso 'clic!', corta a linha sozinha e pula para a próxima letra sem você precisar fazer nada? Foram essas duas lâminas! A navalha móvel é como um ganchinho com faquinha que vai lá no fundo, pesca as duas linhas (a de cima e a de baixo), traz de volta e esmaga contra a faquinha fixa, cortando tudo num piscar de olhos! Se elas ficarem cegas ou cheias de fiapos, a linha não corta e a máquina sai arrastando o tecido pelo bastidor!",
    "applications": [
      "Corte automatizado de saltos de linha entre letras, palavras e objetos isolados da matriz",
      "Corte limpo de fios em trocas automáticas de cores em máquinas multiagulhas e domésticas",
      "Prevenção do estiramento e deformação do tecido durante deslocamentos rápidos do pantógrafo",
      "Redução drástica do tempo de acabamento e limpeza manual de fios no ateliê de bordado",
      "Manutenção da ponta residual exata de linha de bobina para evitar desenfiamentos no ponto inicial"
    ],
    "mainTypes": [
      "Sistema de Corte Rotativo (Rotary Trimmer): Encontrado em máquinas industriais Tajima e Barudan, com navalha móvel em disco rotativo",
      "Sistema de Corte Linear / Oscilante (Reciprocating Trimmer): Sistema tradicional com haste móvel deslizante encontrado em máquinas Brother, Janome e Bai",
      "Navalhas com Pastilha de Metal Duro (Tungsten Carbide): Modelos de alta durabilidade projetados para resistir ao corte abrasivo de linhas metálicas e de lurex",
      "Conjunto de Navalha com Sucção a Vácuo: Módulo industrial de altíssimo padrão que aspira as pontas cortadas de linha para dentro de um coletor"
    ],
    "recommendedSettings": {
      "speedPPM": "O ciclo de corte opera durante a desaceleração programada da máquina de 100 a 250 RPM até a parada no ponto morto superior",
      "needleType": "Projetado para operar em perfeita harmonia com agulhas finas e grossas (tamanhos 65/9 a 90/14)",
      "stabilizer": "Adequado para todas as entretelas, exigindo atenção especial à limpeza de resíduos de entretela solúvel ou adesiva"
    },
    "advantages": [
      "✔ Agilidade incomparável na produção, realizando cortes precisos em menos de 0,3 segundo",
      "✔ Elimina 95% do trabalho manual cansativo de cortar linhas de salto com tesourinha de arremate",
      "✔ Mantém o comprimento da ponta de linha perfeitamente calibrado para a retomada do próximo ponto",
      "✔ Fabricado em aços especiais temperados de alta dureza para suportar centenas de milhares de cortes sem perder o fio"
    ],
    "limitations": [
      "Sujeito a cegamento prematuro se a máquina bordar constantemente fios metálicos abrasivos sem limpeza.",
      "Acúmulo de poeira de entretela e cerdas de linha sob a chapa pode travar o movimento do mecanismo."
    ],
    "commonErrors": [
      "❌ Continuar bordando quando a máquina falha o corte, permitindo que o bastidor salte e repuxe o tecido deformando a peça.",
      "❌ Limpar a área das navalhas com chaves de fenda ou tesouras pontiagudas de aço duro, riscando ou lascando o fio afiado das lâminas.",
      "❌ Apertar excessivamente o parafuso de regulagem das navalhas, travando o solenoide de corte e queimando o fusível ou bobina eletrônica.",
      "❌ Deixar fiapos de linha embolados na mola retentora, fazendo com que a linha da bobina escape da caixa no primeiro ponto."
    ],
    "troubleshootingTips": [
      "Máquina dá o comando de corte mas a linha não corta e arrasta o bastidor: Retire a chapa da agulha e limpe com um pincel e ar comprimido; se não houver sujeira, a navalha fixa e a móvel perderam o fio de corte e precisam ser substituídas ou afiadas por um técnico.",
      "Linha da bobina escapando da caixa logo após o corte (a máquina começa a bordar no ar): A molinha de retenção de linha de baixo está com fiapo ou sem pressão; limpe a molinha de latão com uma folha de papel sulfite dobrada.",
      "Barulho de batida seca 'clac!' no momento do corte seguido de aviso de erro de corte no painel: A navalha móvel não conseguiu voltar à posição inicial por acúmulo de sujeira na guia da biela; limpe os trilhos de deslizamento e aplique uma gota de óleo mineral branco."
    ],
    "dicaArtrelados": "Se a sua máquina começar a 'mascar' a linha na hora de cortar (desfiando o fio sem decepar de vez), nunca tente afiar as navalhas com lixas comuns! As lâminas têm um ângulo micrométrico de 45° retificado a laser. Mas faça este truque de ateliê da Artrelados: desmonte a chapa da agulha, retire a navalha móvel e a fixa e passe a pontinha de um pano com álcool isopropílico. Nove entre dez vezes a navalha não está cega: é apenas cola invisível de entretela termocolante e cera de linha grudada no gume que impede o fechamento perfeito da lâmina! Limpe, remonte com carinho e veja ela voltar a cortar com um estalo perfeito!",
    "voceSabia": "Antes da invenção do sistema de corte automático de navalhas sob a chapa, cada bordado que tinha 10 cores e 15 nomes exigia que a bordadeira ficasse com uma tesourinha na mão cortando manualmente cada pedacinho de linha que cruzava as letras! O sistema de navalha móvel e fixa economiza mais de 40 minutos de trabalho braçal em uma única jaqueta ou toalha bordada, sendo uma das maiores invenções de produtividade de toda a história têxtil!",
    "practicalExercise": "Diagnóstico Visual das Navalhas de Corte: Desligue a máquina, retire o bastidor e remova os dois parafusos da chapa da agulha com a chave original. Com uma lanterna bem forte ou o flash do celular, ilumine a área da laçadeira e localize a ponta de aço curvada da navalha móvel. Com um pincel de cerdas macias, varra todo o pó acumulado e os restos de linha cortada que ficam na gavetinha das lâminas. Veja como a tesourinha fica brilhando limpa e pronta para o próximo trabalho!",
    "quickSummary": "Conjunto de lâminas de alta precisão (uma fixa e uma móvel em forma de gancho) que decepa automaticamente as linhas superior e inferior em saltos e trocas de cor.",
    "relatedTerms": [
      "Chapa de Agulha",
      "Caixa de Bobina",
      "Laçadeira Rotativa",
      "Salto de Ponto",
      "Quebra de Linha",
      "Tempo da Máquina de Bordar",
      "Mola Tira-Fio / Mola de Compensação"
    ],
    "tags": [
      "n-101",
      "navalha-movel",
      "navalha-fixa",
      "trimmer",
      "corte-de-linha",
      "moving-knife",
      "fixed-knife",
      "mecanica",
      "manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA GROUP. Thread Trimming Mechanism: Technical Manual & Knife Timing Adjustment. Nagoya: Tajima, 2023.",
      "BROTHER INDUSTRIES, LTD. Service Manual: Underbed Thread Trimmer (UTT) Assembly and Blade Replacement. Nagoya, 2022.",
      "ARTRELADOS. A Tesourinha Secreta da Máquina: Manutenção, Limpeza e Diagnóstico das Navalhas de Corte de Linha. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-06"
  }
,
{
  "id": "n-nitrato-prata-revestimento-condutivo-fios-texteis",
  "code": "N-000",
  "term": "Nitrato de Prata e Revestimento Condutivo em Fios Têxteis / Linhas Inteligentes (Silver-Coated Conductive Embroidery Thread & Smart Wearables)",
  "letter": "N",
  "letterGroup": "N",
  "level": "Avançado 🔴",
  "category": "Bordados Técnicos, E-Textiles & Alta Tecnologia",
  "grammarClass": "Locução substantiva técnica",
  "origin": "Da química dos sais de nitrato de prata (AgNO3) e da tecnologia de galvanoplastia têxtil (electroless plating) desenvolvida no final do século XX para blindagem eletromagnética aeroespacial. No início dos anos 2000, pesquisadores do MIT Media Lab e indústrias têxteis avançadas (como Madeira com o fio HC e Statex Shieldex) aperfeiçoaram a deposição de prata metálica pura (99% Ag) sobre filamentos de poliamida/nylon, viabilizando a integração do bordado computadorizado à confecção de circuitos vestíveis (e-textiles, roupas inteligentes e dispositivos médicos).",
  "summary": "Tecnologia de fios técnicos revestidos quimicamente com prata condutiva para bordar circuitos elétricos, sensores biológicos e painéis touch capacitivos.",
  "definition": "O Nitrato de Prata e Revestimento Condutivo em Fios Têxteis (Silver-Plated Conductive Embroidery Threads & E-Textiles) compreende o uso de linhas técnicas para máquinas de bordar computadorizadas, cuja alma de poliamida de alta tenacidade recebe uma microcamada uniforme de prata metálica condutiva (aplicada por redução química a partir de nitrato de prata). Essas linhas aliam a flexibilidade, maleabilidade e resistência mecânica de uma linha têxtil com a condutividade elétrica de um fio de cobre. São empregadas para bordar trilhas de circuito impresso flexível em roupas, sensores biométricos de eletrocardiograma (ECG), antenas de radiofrequência (RFID), aquecedores têxteis e superfícies touch-screen capacitivas integradas a tecidos comuns.",
  "technicalDetails": "A engenharia do bordado com fios condutivos prateados exige rigor físico-elétrico: 1) Resistência Elétrica Linear: os fios condutivos comerciais possuem resistências calibradas expressas em Ohms por metro (Ω/m) — por exemplo, fios de alta condutividade apresentam de 50 a 100 Ω/m (como Madeira HC 12), enquanto fios de alta precisão para sensores possuem cerca de 250 a 500 Ω/m (Madeira HC 40); 2) Continuidade de Ponto na Matriz: para evitar quebras de contato elétrico, a matriz deve ser digitalizada preferencialmente em ponto corrido triplo contínuo ou zigue-zague denso sem comandos de corte automático de linha (trims) entre os polos; 3) Sob-costura e Isolamento: onde trilhas de polaridade positiva (+) e negativa (-) se cruzam, é obrigatório bordar uma camada intermediária de isolamento dielétrico (com linha comum de poliéster ou filme termocolante de poliuretano) para evitar curtos-circuitos; 4) Propriedades Antibacterianas Naturais: a prata pura confere ação biocida intrínseca, tornando esses bordados ideais para eletrodos em contato direto e prolongado com a pele humana sem causar irritações.",
  "beginnerExplanation": "Você sabia que a sua máquina de bordar pode bordar circuitos elétricos de verdade, como se o tecido fosse a placa de um computador? Em vez de usar fios de cobre duros e placas de plástico verde, a gente usa uma linha de bordar especial que é banhada em prata pura de verdade! Essa linha conduz eletricidade perfeitamente, mas continua macia, brilhante e flexível como uma linha comum. Com ela, você pode bordar botões no tecido que acendem luzes de LED, sensores que medem os batimentos do coração em uma camisa de academia ou botões de toque na manga de uma jaqueta para controlar a música do celular!",
  "characteristics": [
    "Conduz corrente elétrica e sinais eletrônicos mantendo a flexibilidade e o caimento do tecido",
    "Revestimento de prata metálica 99% pura com excelente condutividade e estabilidade térmica",
    "Ação antibacteriana e antifúngica natural, ideal para uso médico e hospitalar",
    "Permite conectar sensores, microcontroladores (como Arduino LilyPad) e baterias diretamente ao tecido",
    "Resistente a lavagens com sabão neutro sem perda drástica de condutividade"
  ],
  "construction": [
    "1. Alma do filamento: Poliamida 6.6 de alta tenacidade para resistência mecânica à tração",
    "2. Revestimento condutivo: Microcamada de prata metálica aderida quimicamente por galvanoplastia",
    "3. Bobina condutiva ou isolada: Uso de linha de bobina comum para isolar o verso ou condutiva para contato bilateral",
    "4. Componentes eletrônicos vestíveis: LEDs têxteis, sensores flexíveis e microcontroladores montados sobre o bordado",
    "5. Selagem de proteção: Aplicação de filme termoplástico (TPU) sobre as trilhas para proteção contra água e oxidação"
  ],
  "howItWorks": [
    "1. O circuito elétrico é desenhado no software de bordado como trilhas contínuas de ponto corrido ou zigue-zague.",
    "2. O tecido é montado no bastidor com entretela de suporte estável (rasgável ou hidrossolúvel).",
    "3. Instala-se a agulha de ponta arredondada SES calibre 75/11 ou 80/12 e ajusta-se a velocidade para 500 a 600 PPM.",
    "4. A máquina borda as trilhas condutivas do polo positivo até a ilha de conexão do componente.",
    "5. Aplica-se uma pausa para posicionar os micro-componentes (como LEDs ou sensores de pressão).",
    "6. A máquina executa pontos de amarração reforçados diretamente sobre os terminais metálicos do componente, travando a conexão elétrica.",
    "7. A máquina borda a trilha de retorno do polo negativo de volta à área da bateria, fechando o circuito funcional."
  ],
  "mainTypes": [
    "Fio de Alta Condutividade (Heavy HC): Menor resistência elétrica (50 a 100 Ω/m), ideal para alimentar circuitos de potência, LEDs e aquecedores têxteis.",
    "Fio de Média/Alta Resistência (Fine HC): Fio mais fino (250 a 500 Ω/m), perfeito para transmissão de dados, sensores capacitivos e botões touch.",
    "Fio Blindado Isolado (Insulated Conductive Yarn): Fio condutivo com capa externa emborrachada ou esmaltada que permite cruzamento direto de linhas sem curto-circuito.",
    "Fio Híbrido Prata-Aço Inox: Mistura fibras de prata com microfilamentos de aço inoxidável para máxima durabilidade contra abrasão e lavagens industriais."
  ],
  "applications": [
    "Roupas esportivas de alta performance com eletrodos de eletrocardiograma e monitoramento muscular",
    "Jaquetas e coletes aquecidos eletronicamente com trilhas de aquecimento por efeito Joule",
    "Uniformes militares e roupas de bombeiro com sensores de gases tóxicos e temperatura integrados",
    "Moda interativa e figurinos de palco com efeitos luminosos sincronizados por LEDs embutidos",
    "Bolsas e mochilas inteligentes com comandos touch capacitivos para controle de smartphones"
  ],
  "recommendedSettings": {
    "speedPPM": "500 a 650 PPM (velocidade moderada preserva a continuidade da camada de prata sob o atrito do olho da agulha)",
    "needleType": "Agulha 75/11 ou 80/12 com olho polido ou banho de titânio (olho áspero descasca o banho de prata)",
    "stabilizer": "Entretela de corte estável ou termocolante de poliuretano (evita que o tecido estique e quebre a trilha)",
    "density": "Comprimento de ponto de 2,5 mm a 3,0 mm para ponto corrido; densidade aberta de 0,60 mm em ponto cheio",
    "pullCompensation": "0,25 mm a 0,35 mm para assegurar contato elétrico firme nas ilhas de solda têxtil",
    "underlay": "Sob-costura em ponto corrido alinhado ao longo da trilha para duplicar o canal elétrico condutivo",
    "threadTension": "Tensão superior moderada e suave (tensão excessiva estica a poliamida e microfratura o banho metálico)"
  },
  "advantages": [
    "✔ Elimina cabos elétricos rígidos e conectores volumosos que incomodam o corpo e pesam na roupa",
    "✔ Circuito 100% lavável, flexível, respirável e esteticamente integrado ao design da peça",
    "✔ Conexões elétricas ultra-resistentes à vibração mecânica e movimento corporal contínuo",
    "✔ Prata pura não causa alergias e possui propriedades antimicrobianas permanentes"
  ],
  "limitations": [
    "Custo por metro consideravelmente superior ao de linhas tradicionais de poliéster de bordado",
    "A prata pode sofrer oxidação superficial (escurecimento) se exposta a cloro e alvejantes químicos fortes",
    "Exige planejamento cuidadoso na programação da matriz para que as trilhas elétricas não se toquem acidentalmente"
  ],
  "commonErrors": [
    "❌ Programar comandos automáticos de corte de linha (trim) entre dois polos: corta a corrente e inutiliza o circuito",
    "❌ Cruzar duas trilhas condutivas no mesmo nível: causa curto-circuito imediato na bateria",
    "❌ Usar agulha velha com farpas ou rebarbas: descasca o banho de prata da linha e cria pontos de alta resistência",
    "❌ Lavar a peça com produtos à base de cloro ou água sanitária: corrói quimicamente a prata metálica",
    "❌ Deixar os terminais da bateria sem proteção impermeável durante o uso em dias de chuva"
  ],
  "troubleshootingTips": [
    "Se o circuito não ligar após o bordado: use um multímetro digital na escala de bipe sonoro (continuidade) e toque nas duas pontas da trilha bordada para localizar onde o fio se rompeu.",
    "Se a lâmpada LED piscar ou ficar fraca: borde uma segunda camada de ponto corrido exatamente sobre a primeira para reduzir pela metade a resistência elétrica da trilha.",
    "Se as trilhas estiverem escurecendo com o tempo: passe um filme de poliuretano termocolante (filme de selagem de costura) com ferro morno sobre as trilhas para blindá-las contra o oxigênio do ar."
  ],
  "dicaArtrelados": "O Segredo do Multímetro de Bancada e da Fita de Cobre com Adesivo Condutivo: antes de carregar a bobina e passar a linha condutiva pela máquina, meça 1 metro da linha com o multímetro! Anote o valor dos Ohms para calcular a voltagem que a sua bateria precisa entregar. E para prender os micro-componentes (como os LEDs) no tecido com firmeza antes de bordar por cima, use pedacinhos minúsculos de fita de cobre autoadesiva condutiva: ela fixa o componente na entretela e garante que o ponto da agulha faça uma ponte elétrica perfeita sem precisar de ferro de solda!",
  "voceSabia": "A tecnologia de bordado com fios de prata foi utilizada pela Agência Espacial Europeia (ESA) e pela NASA para bordar sensores biométricos nos trajes dos astronautas da Estação Espacial Internacional (ISS)! Os fios prateados monitoram a respiração e os batimentos cardíacos dos astronautas em gravidade zero sem machucar a pele durante missões espaciais de longa duração!",
  "practicalExercise": "Exercício de Bancada (Seu Primeiro Circuito Bordado que Acende um LED):\n1. Monte um retalho de feltro no bastidor com entretela rasgável.\n2. No software, programe duas trilhas retas paralelas separadas por 1 cm, com 10 cm de comprimento cada.\n3. Coloque linha condutiva prateada na agulha e linha comum de poliéster na bobina de baixo.\n4. Borde as duas trilhas em 500 PPM.\n5. Nas extremidades finais, encoste as duas perninhas de uma lâmpada LED comum (uma perna em cada trilha).\n6. Na outra ponta das trilhas, encoste os polos de uma bateria de relógio tipo moeda (CR2032 de 3V): o LED acende magicamente através do bordado!",
  "quickSummary": "Tecnologia têxtil avançada que utiliza linhas revestidas com prata metálica para bordar circuitos elétricos, sensores corporais e painéis touch diretamente em peças do vestuário.",
  "relatedTerms": [
    "Fio Metalizado com Alma de Poliamida e Revestimento de Prata Pura",
    "Bordado Técnico / Smart Textiles",
    "Ponto Corrido / Ponto Reto (Running Stitch)",
    "Velocidade de Operação (PPM)",
    "Agulha de Ponta Arredondada vs Ponta Aguda"
  ],
  "tags": [
    "nitrato de prata",
    "fio condutivo",
    "smart textiles",
    "e-textiles",
    "circuitos bordados",
    "led no bordado",
    "arduino lilypad",
    "alta tecnologia"
  ],
  "updatedAt": "2026-09-28"
}
,
{
  "id": "n-nomex-fios-meta-aramida-retardantes-chama-epi",
  "code": "N-000",
  "term": "Nomex® e Fios de Meta-Aramida Retardantes de Chama no Bordado de EPI (Nomex® Meta-Aramid Flame-Resistant Embroidery Thread & Arc-Flash Safety Gear)",
  "letter": "N",
  "letterGroup": "N",
  "level": "Avançado 🔴",
  "category": "Bordados Técnicos, EPI & Conformidade Normativa",
  "grammarClass": "Locução substantiva técnica",
  "origin": "Marca registrada e polímero sintetizado pela química DuPont nos Estados Unidos na década de 1960. O poli(m-fenileno isoftalamida), conhecido comercialmente como Nomex®, foi desenvolvido para proteger pilotos militares e bombeiros de incêndios catastróficos. Sua aplicação como linha especializada para máquinas de bordar computadorizadas foi normatizada a partir das décadas de 1980 e 1990 pelas normas internacionais NFPA (National Fire Protection Association) e ISO 11612, estabelecendo a obrigatoriedade legal de que bordados de identificação em vestimentas retardantes a chamas (FR) não comprometam a segurança térmica do usuário.",
  "summary": "Linha técnica de meta-aramida antichama de alta temperatura que não derrete nem goteja, obrigatória para bordar logotipos em uniformes de segurança e EPIs.",
  "definition": "O uso de Nomex® e Fios de Meta-Aramida Retardantes de Chama no Bordado de EPI (Flame-Resistant Meta-Aramid Embroidery Thread) compreende a utilização mandatória de linhas 100% meta-aramida tanto na agulha superior quanto na bobina inferior para bordar logotipos, nomes e faixas refletivas em uniformes de proteção térmica. Ao contrário das linhas convencionais de poliéster e viscose (que pegam fogo ou derretem a partir de 250°C, fundindo plástico incandescente na pele humana), o fio de Nomex não funde, não goteja plástico fundido e se autoextingue imediatamente na ausência de chama direta, carbonizando-se apenas em temperaturas extremas acima de 370°C a 400°C, preservando a integridade da barreira protetora contra arco elétrico (arc-flash) e fogo repentino (flash-fire).",
  "technicalDetails": "A parametrização técnica do bordado com fios de meta-aramida Nomex envolve rigor mecânico e normativo: 1) Elasticidade e Tensão: a meta-aramida possui alongamento na ruptura significativamente menor que o poliéster (apenas 20% a 25% comparado a 30%-35% do poliéster comum); portanto, os discos tensores devem ser aliviados em 15% a 20% para evitar quebras por estiramento excessivo; 2) Obrigatoriedade da Linha de Bobina Retardante a Chamas: a legislação de segurança (normas NFPA 70E, NFPA 2112 e NR-10/NR-6 no Brasil) estipula que a linha da bobina também DEVE ser de meta-aramida (ou algodão tratado FR), sendo terminantemente proibido o uso de linha de bobina comum de poliéster 60wt sob pena de invalidação do laudo e CA (Certificado de Aprovação) do EPI; 3) Velocidade e Fricção: em virtude da textura ligeiramente mais áspera da fibra cortada de meta-aramida em comparação aos filamentos contínuos trilobais, recomenda-se limitar a velocidade da máquina a 650 - 750 PPM para conter o atrito no olho da agulha; 4) Entretela Especial Incombustível: a entretela de suporte utilizada no bastidor também deve ser de algodão tratado FR ou aramida hidrossolúvel, nunca entretelas plásticas sintéticas combustíveis.",
  "beginnerExplanation": "Imagine que você recebeu uma encomenda grande para bordar o logotipo de uma petroleira, da fábrica de aço ou de uma equipe de corrida em jaquetas de bombeiro ou eletricista. Essas roupas são mágicas: se bater fogo nelas, elas não queimam! Mas tem um perigo mortal que muitas bordadeiras iniciantes não sabem: se você bordar o logotipo usando a linha comum de poliéster que usa todo dia, aquela linha vira plástico derretido fervendo se o trabalhador passar por uma labareda, causando queimaduras graves na pele! Para essas roupas de vida ou morte, a lei exige o uso da linha de Nomex: uma linha especial de alta tecnologia que pode entrar no fogo que não derrete, não pinga e não queima! Usar Nomex na agulha e na bobina é um dever de responsabilidade e segurança que todo profissional de ateliê deve conhecer!",
  "characteristics": [
    "Propriedade antichama permanente inerente à molécula da fibra (não sai com lavagens)",
    "Não derrete e não pinga plástico fundido mesmo em temperaturas superiores a 370°C",
    "Autoextinguível: apaga imediatamente assim que a fonte de ignição é removida",
    "Atende aos requisitos de certificação das normas NFPA 2112, NFPA 70E e NR-10/NR-6",
    "Alta estabilidade dimensional sem encolhimento térmico significativo sob calor radiante"
  ],
  "construction": [
    "1. Fio superior de meta-aramida: Carretel de Nomex® nº 40 (geralmente fios como Madeira Fire Fighter ou Amann IsaTex)",
    "2. Fio de bobina compatível FR: Bobina enrolada com linha de meta-aramida pura ou fio antichama certificado",
    "3. Entretela incombustível de base: Entretela de algodão 100% tratado com retardante químico ou aramida não-tecida",
    "4. Agulha de cromo reforçado: Calibre 75/11 ou 80/12 ponta arredondada SES com acabamento sem rebarbas",
    "5. Matriz otimizada de baixa densidade: Programada para evitar rigidez mecânica na área peitoral do EPI"
  ],
  "howItWorks": [
    "1. Confere-se o Certificado de Aprovação (CA) da vestimenta para identificar a classe de risco térmico do cliente.",
    "2. Remove-se a bobina comum da lançadeira e instala-se uma bobina com linha de meta-aramida Nomex.",
    "3. Passa-se o fio Nomex na agulha superior e reduz-se levemente a pressão dos botões tensores.",
    "4. Monta-se a jaqueta ou macacão no bastidor com entretela incombustível certificada.",
    "5. Regula-se a velocidade da máquina para 650 PPM no painel de comando.",
    "6. A máquina executa o bordado do logotipo corporativo com precisão milimétrica.",
    "7. Ao final, apara-se o excesso de entretela incombustível do verso e emite-se a declaração técnica de rastreabilidade do fio utilizado para a segurança do trabalho."
  ],
  "mainTypes": [
    "Nomex® Spun Meta-Aramid: Fio fiado com aspecto fosco e toque semelhante ao algodão, com excepcional resistência à quebra sob calor.",
    "Fios Híbridos Nomex / Para-Aramida (Kevlar® Blend): Mistura fios de meta-aramida com Kevlar para resistência combinada a fogo e cortes por estilhaços.",
    "Filamento Contínuo Antichama Tratado: Fios especiais de poliéster quimicamente modificado com compostos fosforados (Trevira CS) para uso decorativo retardante leve em hotéis e teatros.",
    "Fio de Bobina Pré-Enrolada Nomex: Bobinas industriais prontas embaladas em caixas lacradas com certificado de conformidade térmica para auditorias."
  ],
  "applications": [
    "Macacões de pilotos de automobilismo (Fórmula 1, Rally, Stock Car e kartismo profissional)",
    "Uniformes de brigadas de incêndio e bombeiros civis e militares",
    "Vestimentas de eletricistas para proteção contra arco elétrico (normas NR-10 e NFPA 70E)",
    "Roupas de proteção para operários de refinarias de petróleo, plataformas offshore e gás",
    "Uniformes de siderúrgicas, fundições de metais e soldadores industriais"
  ],
  "recommendedSettings": {
    "speedPPM": "600 a 750 PPM (velocidades moderadas evitam aquecimento mecânico e desfiamento da meta-aramida)",
    "needleType": "Agulha 75/11 ou 80/12 Ponta Bola Leve (SES) com haste reforçada e acabamento cromado liso",
    "stabilizer": "Entretela incombustível de algodão tratado FR (nunca usar entretela termossolúvel plástica inflamável)",
    "density": "Densidade padrão de 0,40 mm a 0,45 mm (densidades excessivamente compactas deixam a peça dura)",
    "pullCompensation": "0,25 mm a 0,35 mm para compensar a rigidez dimensional do tecido grosso do macacão",
    "underlay": "Sob-costura em ponto corrido cruzado para boa ancoragem sem criar camada grossa",
    "threadTension": "Tensão superior mais frouxa que o normal para acomodar o menor alongamento elástico da aramida"
  },
  "advantages": [
    "✔ Garante conformidade total com a legislação trabalhista e normas técnicas de segurança à vida",
    "✔ Preserva a vida do trabalhador em acidentes com fogo e arco elétrico, impedindo queimaduras por plástico fundido",
    "✔ Permite aos ateliês e bordadeiras atenderem grandes contratos corporativos de multinacionais de energia e petróleo",
    "✔ O fio Nomex tem resistência excepcional à lavagem industrial pesada e produtos químicos de higienização"
  ],
  "limitations": [
    "Custo de aquisição do carretel significativamente mais caro que linhas convencionais de poliéster",
    "Cartela de cores mais restrita comparada às centenas de tons de linhas normais de bordar",
    "Aspecto fosco (não possui o brilho acetinado característico do poliéster trilobal ou viscose)"
  ],
  "commonErrors": [
    "❌ Usar linha de bobina de poliéster comum com fio Nomex em cima: invalida o teste antichama e põe vidas em risco",
    "❌ Usar entretela rasgável comum inflamável no verso da jaqueta de eletricista: o fogo queima pelo avesso",
    "❌ Puxar a tensão da linha Nomex como se fosse poliéster: o fio arrebenta repetidamente por ter menos elasticidade",
    "❌ Usar agulha velha com ponta cega em tecidos ripstop antichama: a agulha repuxa fios e danifica a trama de proteção do EPI",
    "❌ Borda em velocidade máxima de 1.000 PPM: o atrito da fibra desfia a linha e bloqueia o olho da agulha"
  ],
  "troubleshootingTips": [
    "Se o fio de Nomex estiver quebrando com frequência: afrouxe os tensores de linha superior e instale uma agulha nova 80/12 com olho maior.",
    "Se a cor corporativa do logotipo não existir exatamente na cartela Nomex: consulte a cartela de linhas antichama certificadas (como Madeira Fire Fighter) e apresente ao cliente as opções normatizadas mais próximas.",
    "Se o cliente corporativo exigir comprovação técnica: anexe à nota fiscal do serviço uma cópia do Certificado de Conformidade Técnica fornecido pelo fabricante da linha Nomex."
  ],
  "dicaArtrelados": "O Teste de Isqueiro para Diferenciar Nomex de Poliéster e a Ficha de Rastreabilidade de EPI: como ter 100% de certeza de que uma linha é realmente Nomex antes de bordar uma jaqueta de segurança? Corte 5 cm do fio e encoste a chama de um isqueiro! Se a linha derreter, virar uma bolinha plástica preta dura e continuar queimando com cheiro de plástico, é poliéster! Se ela carbonizar suavemente, virar cinza clara esfarelável e se apagar no exato milissegundo em que você afastar o isqueiro, é Nomex legítimo! Guarde sempre o lote do carretel anotado na sua ficha técnica de produção para comprovar auditorias em caso de fiscalização do trabalho!",
  "voceSabia": "A fibra de Nomex foi fundamental para salvar a vida do piloto de Fórmula 1 Romain Grosjean em seu terrível acidente no Grande Prêmio do Bahrein de 2020! O carro partiu ao meio e explodiu em uma bola de fogo de mais de 1.000°C na qual Grosjean ficou imerso por 28 segundos. Graças ao macacão e a todas as costuras e bordados feitos exclusivamente com Nomex certificado, o piloto escapou caminhando das chamas com apenas queimaduras leves nas mãos!",
  "practicalExercise": "Exercício de Laboratório (O Teste da Chama e a Calibração de Tensão de Meta-Aramida):\n1. Pegue um pedaço de 10 cm de linha comum de poliéster e 10 cm de linha Nomex.\n2. Com uma pinça de metal e longe de materiais inflamáveis, aproxime a chama de um fósforo do fio de poliéster e observe o derretimento plástico.\n3. Repita o teste com o fio de Nomex: veja como ele não queima e se autoextingue instantaneamente.\n4. Na máquina de bordar, coloque a bobina de Nomex e o fio de Nomex na agulha 80/12.\n5. Afrouxe a tensão superior em 2 pontos e borde um quadrado teste em 650 PPM.\n6. Comprove o assentamento perfeito dos pontos e a maciez do bordado técnico incombustível!",
  "quickSummary": "Linha técnica de meta-aramida incombustível e autoextinguível, obrigatória na agulha e na bobina para bordar logotipos e identificações em uniformes antichama e EPIs de alto risco.",
  "relatedTerms": [
    "Fio de Alta Tenacidade / Linha Ignífuga e Kevlar",
    "Linha Resistente a Chamas e Fogo",
    "Tensão de Linha Superior",
    "Agulha de Ponta Arredondada vs Ponta Aguda",
    "Normas Técnicas Globais de Conformidade e Segurança Têxtil no Bordado"
  ],
  "tags": [
    "nomex",
    "meta-aramida",
    "antichama",
    "bordado em epi",
    "segurança do trabalho",
    "nfpa 70e",
    "nr-10",
    "madeira fire fighter"
  ],
  "updatedAt": "2026-09-28"
}
,
{
  "id": "n-norma-iso-4915-classificacao-pontos-maquina",
  "code": "N-000",
  "term": "Norma ISO 4915 e Classificação Numérica de Pontos de Máquina (ISO 4915 Stitch Classification System - Stitch Type 301 Lockstitch)",
  "letter": "N",
  "letterGroup": "N",
  "level": "Avançado 🔴",
  "category": "Normalização Internacional, Metrologia & Engenharia Têxtil",
  "grammarClass": "Locução substantiva técnica",
  "origin": "Criada em 1991 pela International Organization for Standardization (ISO) com base na histórica norma militar norte-americana Federal Standard 751a (de 1965). A norma ISO 4915 (\"Textiles — Stitch types — Classification and terminology\") foi elaborada pelo comitê técnico ISO/TC 38 para padronizar globalmente a nomenclatura matemática e geométrica de todas as costuras e pontos mecânicos industriais em seis classes fundamentais (Classes 100 a 600), consagrando a Classe 300 (especificamente o Ponto 301) como a matriz universal de todas as máquinas de bordar computadorizadas.",
  "summary": "Padrão técnico global supremo da engenharia têxtil que classifica os pontos mecânicos, definindo o Ponto 301 (Ponto Preso / Lockstitch) como base do bordado eletrônico.",
  "definition": "A Norma ISO 4915 e Classificação Numérica de Pontos de Máquina (ISO 4915 Stitch Classification - Type 301 Lockstitch) é a norma internacional que estabelece a tipologia científica dos pontos mecânicos produzidos por agulhas industriais. No universo do bordado computadorizado, 100% das máquinas industriais e domésticas do mundo operam sob a égide da Classe 300 (Pontos Presos / Lockstitches), na qual o Ponto 301 é formado pelo entrelaçamento de dois grupos de fios: a linha superior (conduzida pela agulha) e a linha inferior (conduzida pela lançadeira rotativa ou oscilante que envolve a bobina). O entrelaçamento deve ocorrer teoricamente no centro neutro da espessura do material, garantindo máxima estabilidade mecânica sem desmanche espontâneo em caso de ruptura de ponto isolado.",
  "technicalDetails": "A cinemática e a física do Ponto 301 segundo a ISO 4915 envolvem parâmetros mecânicos fundamentais: 1) Formação da Laçada (Loop Formation): a agulha desce ao Ponto Morto Inferior (PMI) e sobe entre 1,8 mm e 2,2 mm; a folga criada na linha forma uma laçada aerodinâmica que é capturada pelo bico da lançadeira rotativa a 200° - 205° do ciclo angular; 2) Entrelaçamento e Nó (Interlacing Center): o estica-fio sobe ao Ponto Morto Superior (PMS), recolhendo o excesso de linha e tracionando o cruzamento entre o fio superior e o fio da bobina; no bordado decorativo, a ISO 4915 é adaptada de modo que o nó não fique no centro da camada (como na costura reta), mas seja ligeiramente puxado para o avesso na proporção áurea de 1/3 central de bobina branca e 2/3 laterais de fio colorido superior (colunas de satim); 3) Diferenciação de Classes Têxteis: a norma distingue o Ponto 301 da Classe 100 (ponto corrente simples de 1 fio, que desmancha se puxado), da Classe 400 (ponto corrente múltiplo de 2 ou mais fios) e da Classe 500 (pontos de sobreborda / overloque), enfatizando que apenas a Classe 300 possui a estabilidade bidirecional indispensável para pantógrafos computadorizados com deslocamentos simultâneos nos eixos X e Y.",
  "beginnerExplanation": "Sabe quando você aprende que tudo no mundo dos computadores funciona com zeros e uns? No mundo das máquinas de costura e bordado, existe um código mundial criado por cientistas e engenheiros que dá um número para cada tipo de ponto que existe na face da Terra: é a norma ISO 4915! E adivinha qual é o número do ponto que a sua máquina de bordar faz o dia todo? É o Ponto 301! Esse nome chique significa apenas que a linha de cima que desce com a agulha dá um \"abraço perfeito\" na linha de baixo que vem da bobina, prendendo uma na outra bem no meio do tecido. Se um pontinho arrebentar sem querer, os outros não desmancham como acontece em saco de batata ou barra de calça! É o ponto mais seguro e resistente da engenharia!",
  "characteristics": [
    "Padronização internacional universal aceita em auditorias de qualidade em mais de 160 países",
    "Alta segurança estrutural: ponto preso que não se desfaz em cadeia quando cortado",
    "Compatibilidade geométrica total com movimentos omnidirecionais nos eixos X e Y do pantógrafo",
    "Permite controle milimétrico de tensão diferencial entre o direito (face) e o avesso da peça",
    "Base teórica indispensável para laudos técnicos, perícias têxteis e fichas de especificação de produto"
  ],
  "construction": [
    "1. Linha da agulha (Grupo 1): Fio condutor superior que penetra o material através do olho da agulha",
    "2. Linha da bobina (Grupo 2): Fio inferior alojado no interior da caixa de bobina da lançadeira",
    "3. Ponto de entrelaçamento: Nó tridimensional formado pelo cruzamento dos dois fios",
    "4. Camada de substrato: Tecido e entretelas onde o cruzamento mecânico é assentado",
    "5. Curso do estica-fio: Componente mecânico responsável pela absorção e aperto da laçada ISO 301"
  ],
  "howItWorks": [
    "1. A agulha penetra o tecido transportando a linha superior até o ponto mais baixo do curso.",
    "2. Ao iniciar a subida de 2 mm, o atrito do tecido retém a linha, abrindo uma laçada elástica.",
    "3. O bico da lançadeira rotativa passa a 0,05 mm da lâmina da agulha e penetra no centro da laçada.",
    "4. A lançadeira gira e expande a laçada da linha superior, passando-a ao redor de toda a cápsula da bobina.",
    "5. A linha superior laça o fio da bobina, criando o entrelaçamento característico da Classe 300.",
    "6. O estica-fio sobe bruscamente, puxando a linha superior para cima e ajustando o nó na posição exata.",
    "7. O pantógrafo desloca o bastidor para as próximas coordenadas X e Y, repetindo o ciclo ISO 301 até 1.200 vezes por minuto."
  ],
  "mainTypes": [
    "Ponto 301 Padrão (Lockstitch Simples): Ponto reto básico com entrelaçamento no plano neutro do tecido.",
    "Ponto 301 Adaptado para Bordado (Embroidery Lockstitch): Calibrado com tensão superior aliviada para puxar o entrelaçamento 1/3 para o avesso, garantindo face superior 100% preenchida sem linha branca de bobina.",
    "Ponto 304 (Zigue-Zague Lockstitch): Ponto preso com deslocamento lateral alternado da agulha em ângulo.",
    "Ponto 308 (Zigue-Zague Duplo / Step Lockstitch): Ponto preso zigue-zague com passos múltiplos intermediários."
  ],
  "applications": [
    "Base normativa e estrutural de 100% dos bordados planos, 3D, apliques e emblemas em máquinas eletrônicas",
    "Fichas de especificação técnica para licitações públicas militares, uniformes hospitalares e corporativos",
    "Auditorias internacionais de vestuário e conformidade com normas de exportação (ISO, AATCC e ASTM)",
    "Calibração de lançadeiras e diagnóstico de ponto em centros de assistência técnica autorizada",
    "Desenvolvimento de softwares de digitalização (formação de arquivos DST, PES, EXP baseados em vetores 301)"
  ],
  "recommendedSettings": {
    "speedPPM": "Projetado para operar de 400 a 1.200 PPM mantendo a integridade da geometria da laçada",
    "needleType": "Agulhas de alta performance com canaleta de escoamento profundo (DBxK5 ou 130/705H)",
    "stabilizer": "Entretela compatível com a gramatura do tecido para manter a espessura do plano neutro",
    "density": "Variação de 0,35 mm a 0,45 mm em satim; passos de 2,0 mm a 4,0 mm em pontos corridos 301",
    "pullCompensation": "0,20 mm a 0,40 mm para compensar a tração centrípeta gerada pelo aperto do nó 301",
    "underlay": "Sob-costura estrutural em ponto 301 para erguer o tecido e acolchoar o ponto de cobertura",
    "threadTension": "Calibragem I-Beam: tensão superior entre 100 e 130 gf; tensão de bobina entre 20 e 25 gf"
  },
  "advantages": [
    "✔ Maior resistência mecânica à tração e lavagens industriais entre todas as classes de costura",
    "✔ Não desmancha se um ponto sofrer corte acidental, mantendo a integridade do restante do desenho",
    "✔ Menor consumo linear de linha inferior em comparação a pontos de corrente (Classes 100 e 400)",
    "✔ Acabamento extremamente plano e estético tanto no direito quanto no avesso da peça bordada"
  ],
  "limitations": [
    "Menor elasticidade natural que pontos de corrente da Classe 400 (exige compensação especial em malhas stretch)",
    "Capacidade limitada de linha na bobina (exige trocas periódicas ao contrário de teares contínuos de cone)",
    "Exige sincronismo micrométrico estrito entre a barra da agulha e a rotação da lançadeira (0,05 mm de folga)"
  ],
  "commonErrors": [
    "❌ Confundir a formação do Ponto 301 no bordado com a costura reta: tentar deixar o nó no meio exato da coluna de satim faz a linha branca de bobina subir para a frente do bordado",
    "❌ Lançadeira fora de ponto (timing desregulado): o bico da lançadeira passa antes ou depois da laçada, gerando falhas de ponto sistemáticas",
    "❌ Bobina frouxa com menos de 15 gf: o ponto superior afunda e o avesso fica cheio de laços frouxos (birdnesting)",
    "❌ Agulha inserida ao contrário: a canaleta fica do lado errado e a lançadeira não consegue pescar o Ponto 301",
    "❌ Bobina girando no sentido incorreto dentro da caixa de bobina: desestabiliza a saída de linha e quebra o nó"
  ],
  "troubleshootingTips": [
    "Se aparecer linha branca de bobina na frente do bordado: aperte o tensor superior ou solte ligeiramente o parafuso da caixa de bobina até que a linha branca fique restrita ao terço central do avesso.",
    "Se o tecido estiver franzindo nas costuras retas: reduza a tensão superior e aumente o comprimento de ponto do corrido 301 para no mínimo 2,5 mm.",
    "Se a máquina não laçar o ponto na troca de direção: verifique a altura da barra da agulha (subida de 2 mm a partir do ponto morto inferior)."
  ],
  "dicaArtrelados": "O Segredo da Inspeção 1/3 - 1/3 - 1/3 no Avesso e a Regra de Ouro da ISO 301 no Bordado: pegue uma lupa de ateliê e vire o seu bordado do avesso, olhando para uma coluna de ponto cheio de 4 mm de largura! O Ponto 301 perfeito de bordado deve apresentar exatamente três faixas verticais iguais: 1/3 da cor superior na borda esquerda, 1/3 de linha branca de bobina no meio e 1/3 da cor superior na borda direita! Se a faixa branca do meio tiver essa proporção de 33% da largura da coluna, você pode comemorar: a sua máquina está calibrada com a máxima precisão matemática da engenharia alemã e japonesa!",
  "voceSabia": "A primeira máquina a utilizar o princípio mecânico do Ponto 301 com agulha perfurada na ponta e lançadeira foi patenteada pelo inventor norte-americano Elias Howe em 1846! Howe venceu uma histórica batalha judicial contra Isaac Singer pelos direitos da patente, recebendo royalties de cada máquina de costura e bordado vendida no mundo até o fim de sua vida!",
  "practicalExercise": "Exercício de Bancada (Auditoria Numérica do Ponto ISO 301 no seu Ateliê):\n1. Borde uma coluna reta de ponto cheio de 5 mm de largura e 5 cm de comprimento em tecido sarja com linha vermelha em cima e branca embaixo.\n2. Retire o bastidor e vire a peça do avesso sob iluminação forte.\n3. Meça com uma régua milimétrica a largura da faixa branca central de bobina: ela deve medir entre 1,5 mm e 1,8 mm (exatamente um terço da largura total).\n4. Se estiver menor que 1,2 mm, aperte o botão da linha vermelha em 1 volta.\n5. Se estiver maior que 2,5 mm, solte o botão em 1 volta.\n6. Repita até cravar a proporção áurea: você agora domina a metrologia internacional da ISO 4915!",
  "quickSummary": "Padrão técnico internacional supremo que classifica os pontos industriais, definindo o Ponto 301 (ponto fixo por laço de agulha e lançadeira) como o pilar estrutural de todas as máquinas de bordar computadorizadas.",
  "relatedTerms": [
    "Tensão de Linha Superior",
    "Tensiômetro de Linha Superior e Bobina (Togometer / Gauge)",
    "Lançadeira Rotativa (Rotary Hook)",
    "Formação da Laçada da Agulha (Loop Formation)",
    "Normas Técnicas Globais de Conformidade e Segurança Têxtil no Bordado"
  ],
  "tags": [
    "norma iso 4915",
    "ponto 301",
    "lockstitch",
    "ponto preso",
    "metrologia textil",
    "engenharia textil",
    "lancadeira rotativa",
    "normas tecnicas"
  ],
  "updatedAt": "2026-09-28"
}
,
{
  "id": "n-no-pescador-duplo-fios-escorregadios-metalicos",
  "code": "N-000",
  "term": "Nó de Pescador Duplo para Fios Escorregadios e Metálicos (Double Fisherman’s Knot & Slippery Metallic Thread Splicing)",
  "letter": "N",
  "letterGroup": "N",
  "level": "Intermediário 🟡",
  "category": "Operação de Máquina, Métodos de Passagem de Fio & Manuseio",
  "grammarClass": "Locução substantiva técnica",
  "origin": "Do nó náutico ancestral utilizado por marinheiros e escaladores (Grapevine Knot ou Double Fisherman's Knot) para unir cabos escorregadios de nylon sob tração extrema. Foi adaptado para a indústria têxtil e de bordado eletrônico nas décadas de 1970 e 1980, quando o surgimento dos fios metalizados (foil de poliéster aluminizado) e dos fios sintéticos de alta lubricidade expôs a deficiência do tradicional nó de tecelão simples (weaver's knot), que escorregava e se desmanchava ao ser tracionado através dos discos tensores e tubos condutores da máquina.",
  "summary": "Nó manual de alta segurança formado por dois nós de volta dupla que se intertravam, ideal para emendar fios metalizados, viscose e monofilamentos sem escorregar.",
  "definition": "O Nó de Pescador Duplo para Fios Escorregadios e Metálicos (Double Fisherman’s Knot / Grapevine Splicing) é a técnica manual de emenda mais confiável utilizada por operadores de máquinas de bordar industriais para unir o término de uma meada antiga ao início de um novo cone de linha, especialmente quando se lida com fios com baixo coeficiente de atrito (como fios metalizados com fita de poliéster, viscose de alto brilho, monofilamentos de poliamida ou fios com acabamento siliconado). O nó é constituído por dois nós simples duplos (estranguladores) feitos ao redor da linha oposta, que ao serem tracionados correm um contra o outro até se travarem em uma cápsula cilíndrica compacta e simétrica, incapaz de afrouxar sob tensão.",
  "technicalDetails": "A física de atrito e a geometria do Nó de Pescador Duplo operam sob princípios mecânicos vantajosos: 1) Auto-Aperto sob Tração (Self-Locking Mechanics): à medida que o operador puxa o fio a partir da barra de agulhas para encher o percurso, a força de tração F força ambos os nós a colidirem axialmente, aumentando a pressão radial interna e impedindo o deslizamento mesmo em filmes de poliéster metalizado aluminizado (que possuem coeficiente de atrito estático extremamente baixo, μ < 0,15); 2) Perfil Cilíndrico Aerodinâmico: diferentemente do nó cego comum (que forma uma protuberância disforme que engancha nos ilhoses de porcelana), o pescador duplo forma um perfil suave e afunilado nas duas extremidades que desliza livremente através de tubos condutores de teflon e discos tensores de mola; 3) Ponto de Corte das Caudas: as sobras de linha das pontas devem ser aparadas rente (cerca de 1,0 mm a 1,5 mm do nó), permitindo a passagem inclusive por molas tira-fio sem que as pontas se enrosquem na hélice metálica; 4) Parada Obrigatória antes do Olho da Agulha: embora o nó atravesse com perfeição todos os 8 a 12 guia-fios superiores da máquina, o nó de pescador duplo em fios 40wt possui diâmetro em torno de 0,35 mm a 0,45 mm, devendo ser cortado antes de tentar passar pelo olho da agulha 75/11 (cujo diâmetro interno é de cerca de 0,38 mm a 0,40 mm) para não entortar a haste.",
  "beginnerExplanation": "Quem trabalha com máquina de bordar sabe: trocar as linhas da máquina cone por cone passando fio por fio em todos aqueles buraquinhos e araminhos demora uma eternidade! O truque que todo mundo usa é dar um nó na linha velha com a linha nova lá em cima no suporte e puxar tudo de uma vez por baixo! Só que quando a gente usa linha dourada ou prateada (aquelas linhas metalizadas brilhantes), a linha é tão lisa e escorregadia que o nozinho comum se desmancha no meio do caminho, a linha se solta dentro do tubinho e dá uma dor de cabeça danada! É aí que entra o Nó de Pescador Duplo: você faz uma laçadinha dupla de cada lado e, quando puxa, os dois nozinhos se abraçam e travam como um cadeado! A linha pode ser lisa como sabão que não escapa de jeito nenhum, passando macia por toda a máquina em 5 segundos!",
  "characteristics": [
    "Resistência de união de quase 95% da carga de ruptura do próprio fio têxtil",
    "Não escorrega mesmo em superfícies ultra-lisas como fios metalizados e monofilamentos",
    "Formato cilíndrico compacto que transita suavemente por discos de cerâmica e tensores de mola",
    "Economiza até 80% do tempo de troca de cores em máquinas multi-agulhas (12 a 15 agulhas)",
    "Fácil de aprender e executar rapidamente com a ponta dos dedos após pouco treino"
  ],
  "construction": [
    "1. Ponta da linha antiga (saindo do percurso da máquina)",
    "2. Ponta da linha nova (do cone recém-colocado no suporte)",
    "3. Primeiro nó simples de duas voltas (atado com o fio novo ao redor do fio velho)",
    "4. Segundo nó simples de duas voltas (atado com o fio velho ao redor do fio novo)",
    "5. Intertravamento central: tração de ambas as extremidades até que os dois blocos se unam rigidamente"
  ],
  "howItWorks": [
    "1. Posiciona-se as duas pontas de linha em direções opostas, paralelas uma à outra.",
    "2. Pega-se a ponta do fio novo e dão-se duas voltas completas ao redor do fio antigo.",
    "3. Passa-se a ponta de volta por dentro das duas voltas formadas e puxa-se para formar o primeiro nó.",
    "4. Inverte-se o procedimento com a ponta do fio antigo, dando duas voltas ao redor do fio novo.",
    "5. Puxa-se as linhas principais em sentidos opostos: os dois nós deslizam até se encontrarem e se travarem firmemente.",
    "6. Apara-se as duas sobrinhas de fio com tesourinha de arremate deixando 1,5 mm de folga.",
    "7. Segura-se a ponta da linha junto ao cabeçote e puxa-se continuamente: o nó desliza suavemente por todos os tensores e para logo acima da agulha."
  ],
  "mainTypes": [
    "Nó de Pescador Duplo Clássico (Double Fisherman): Duas voltas completas em cada extremidade (o padrão de ouro para fios metalizados e poliéster siliconado).",
    "Nó de Pescador Triplo (Triple Fisherman): Três voltas completas em cada extremidade, reservado para monofilamentos ultra-escorregadios de pesca ou aramidas enceradas.",
    "Nó de Pescador Simples (Single Fisherman): Uma única volta de cada lado, mais rápido porém menos confiável para superfícies com acabamento de silicone.",
    "Puxador com Fita Adesiva / Emenda Rápida: Método alternativo com fita crepe, rápido porém com risco de deixar resíduos de cola dentro dos tensores da máquina."
  ],
  "applications": [
    "Troca rápida de cones de fios metalizados (dourado, prateado, holográfico) em produções industriais",
    "Passagem de linhas de viscose (rayon) de alta lubricidade e toque sedoso",
    "Emenda de fios de nylon monofilamento transparente para bordado invisível",
    "Manutenção de fiação em máquinas de cabeçote múltiplo com tubos condutores de difícil acesso",
    "Treinamento de operadores novatos para redução do tempo de máquina parada (downtime)"
  ],
  "recommendedSettings": {
    "speedPPM": "Executado com a máquina parada (0 PPM) durante a troca de linha",
    "needleType": "Não passar o nó pelo olho da agulha! Cortar o nó a 5 cm antes da agulha e enfiar a linha manualmente",
    "stabilizer": "Não afeta o bastidor diretamente, mas agiliza a preparação do trabalho",
    "density": "Garante continuidade perfeita de produção sem perda de parâmetros da matriz",
    "pullCompensation": "Padrão da matriz em execução",
    "underlay": "Não se aplica diretamente",
    "threadTension": "Aliviar os tensores superiores abrindo os discos com a alavanca de desengate facilita a tração do nó"
  },
  "advantages": [
    "✔ Elimina 100% dos desmanches de nó durante a puxada de fios lisos",
    "✔ Evita que o fio escape dentro de dutos internos da máquina, poupando minutos preciosos de desmontagem",
    "✔ Mantém o alinhamento reto das linhas sem criar dobras angulares que prendem em arames",
    "✔ Não necessita de ferramentas ou adesivos para ser confeccionado"
  ],
  "limitations": [
    "Exige alguns segundos a mais de confecção do que um simples nó cego rápido",
    "Mais volumoso que o nó de tecelão plano simples (não passa em furos menores que 0,4 mm)",
    "Se o operador forçar a passagem do nó pelo olho da agulha, entortará a agulha ou romperá o fio"
  ],
  "commonErrors": [
    "❌ Tentar puxar o nó através do olho da agulha: entorta a haste da agulha e descalibra a chapa",
    "❌ Deixar caudas longas (mais de 5 mm) sem aparar: as pontas soltas se enroscam nas espirais das molas guia",
    "❌ Puxar o fio com os discos de tensão travados no aperto máximo: arrebenta a linha antes do nó passar",
    "❌ Fazer voltas no sentido errado que não travam os dois blocos: o nó desliza solto",
    "❌ Usar nó cego comum em fio metalizado: o nó abre na primeira curva e a linha volta para trás"
  ],
  "troubleshootingTips": [
    "Se o nó travar no primeiro tensor: abra manualmente os pratos do tensor com a ponta do dedo enquanto puxa a linha por baixo.",
    "Se as pontinhas do nó estiverem enganchando nos ilhoses: corte as pontas mais rente com um cortador de linha bem afiado.",
    "Se você tiver dificuldade para fazer as duas voltas com os dedos: use uma pinça de bico curvo de ateliê para segurar o laço com precisão milimétrica."
  ],
  "dicaArtrelados": "O Segredo da Tração Suave com Discos Abertos e o Pára-Agulha: quando você for puxar o nó do suporte de cones até o cabeçote, NUNCA puxe de tranco! Acione a alavanca de liberação dos tensores ou empurre levemente o estica-fio para frente com a mão para abrir os discos de cerâmica. E coloque a mão esquerda logo acima da barra da agulha como um \"sensor de parada\": quando você sentir o nózinho tocando no seu dedo, pare de puxar na hora! Corte o nó com a tesoura a 3 cm da agulha e passe a pontinha limpa no olho da agulha. Você ganha 5 minutos em cada cor sem nunca forçar a sua máquina!",
  "voceSabia": "O nó de pescador duplo é tão seguro e indestrutível sob tensão que é o único nó aprovado pela União Internacional das Associações de Alpinismo (UIAA) para unir fitas tubulares e cordas de salvamento em escalada esportiva e resgate vertical! Se ele aguenta o peso e a queda de uma pessoa de 100 kg em uma montanha, pode ter certeza absoluta de que ele nunca vai abrir ao passar pela sua máquina de bordar!",
  "practicalExercise": "Exercício de Bancada (Dominando o Nó de Pescador Duplo em 30 Segundos):\n1. Pegue dois pedaços de 30 cm de linha dourada metalizada e coloque-os paralelos na sua mesa.\n2. Enrole a ponta direita duas vezes ao redor do fio esquerdo e passe por dentro do laço, puxando firme.\n3. Faça a mesma coisa com a outra ponta, enrolando duas vezes e passando por dentro.\n4. Segure os dois fios compridos e puxe: veja os dois nozinhos correndo um de encontro ao outro e travando com um estalo seco!\n5. Corte as sobrinhas bem rente com a tesoura.\n6. Puxe com toda a força das suas mãos: a linha arrebentará no meio antes do nó se soltar! Treine até fazer em menos de 15 segundos!",
  "quickSummary": "Técnica manual de emenda ultrassegura baseada em dois nós estranguladores intertravados, indispensável para passar fios metalizados e escorregadios pela máquina sem desmanchar.",
  "relatedTerms": [
    "Nó de Tecelão / Nó de Emenda Manual (Weaver's Knot)",
    "Nó Cego de Segurança em Troca de Carretel",
    "Fio Metalizado com Alma de Poliamida e Revestimento de Prata Pura",
    "Tensão de Linha Superior",
    "Passador de Fio e Enfiador Automático de Agulha"
  ],
  "tags": [
    "no de pescador duplo",
    "double fishermans knot",
    "grapevine knot",
    "troca de linha",
    "fio metalizado",
    "emenda de fio",
    "operacao de maquina",
    "dica pratica"
  ],
  "updatedAt": "2026-09-28"
}
];

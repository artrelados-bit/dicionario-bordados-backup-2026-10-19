import { Verbete } from "../types";

export const VERBETES_LETTER_Q10: Verbete[] = [
  {
    "id": "q-075-quebra-de-agulha-e-analise-de-deflexao-mecanica",
    "code": "Q-075",
    "term": "Quebra de Agulha e Análise de Deflexão Mecânica (Needle Breakage Dynamics & Deflection Analysis)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim crepare (romper sob tensão mecânica) e do grego deflexio (desvio angular do eixo longitudinal).",
    "summary": "Investigação técnica dos fatores de flexão elástica da haste, colisão com a ponta da lançadeira ou chapa de ponto e protocolos mecânicos para eliminação de quebras catastróficas.",
    "definition": "Quebra de Agulha e Análise de Deflexão Mecânica (Needle Breakage Dynamics, Rotary Hook Collision & Flexural Failure) é o estudo e resolução do colapso estrutural da agulha de bordar durante o ciclo de costura. Quando a agulha penetra em tecidos densos, costuras grossas de jeans, bordados 3D com EVA ou sofre atrito por tecido mal tensionado no bastidor, a haste sofre um desvio lateral de sua trajetória retilínea (*Deflexão*). Se a deflexão exceder a folga de segurança agulha-lançadeira (0,05 mm a 0,10 mm), a ponta de aço endurecido da lançadeira rotativa a 900 PPM colide violentamente com a cava da agulha, partindo-a instantaneamente, gerando rebarbas na lançadeira e risco de danos à chapa de ponto.",
    "technicalDetails": "Limite elástico de deflexão da agulha 75/11: ~0,12 mm antes do risco de colisão. Folga regulamentar agulha-lançadeira: 0,05 mm a 0,10 mm. Folga vertical da chapa de ponto: Orifício de 1,8 mm centralizado. Causas primárias de deflexão: 1. Bastidor frouxo que gera efeito 'cama elástica' (*Flagging*); 2. Tecido muito espesso para o calibre (ex: agulha 65 em couro); 3. Pantógrafo acelerando antes da agulha sair 100% do tecido; 4. Densidade excessiva (> 0,28 mm) em pontos sobrepostos.",
    "construction": [
      "Haste e lâmina de aço carbono especial ou liga de titânio (SAN 1 GEBEDUR)",
      "Cava de proteção (Scarf) usinada para passagem rente do bico da lançadeira",
      "Chapa de agulha com orifício centralizado de passagem limpa",
      "Prentice do calcador regulado na altura correta para anular o levantamento do tecido",
      "Parafuso de fixação da barra de agulha apertado com torque adequado"
    ],
    "howItWorks": [
      "1. A máquina inicia o bordado de um logotipo denso sobre uma jaqueta jeans grossa a 850 PPM.",
      "2. A agulha 75/11 desce em alta velocidade; ao atingir a sobreposição de três camadas de sarja, a ponta sofre resistência assimétrica e entorta 0,15 mm para trás.",
      "3. A ponta da lançadeira rotativa gira a milímetros de distância para capturar a laçada da linha.",
      "4. Como a agulha entortou para trás, a lançadeira colide com a lateral da lâmina em vez de passar pela cava.",
      "5. Ouve-se um estalo seco característico: a ponta da agulha quebra e cai dentro da caixa de bobina.",
      "6. O sensor de linha para a máquina imediatamente.",
      "7. A operadora desliga a máquina, remove os fragmentos quebrados com pinça, passa o dedo para checar se a lançadeira não ficou com rebarba e troca para uma agulha reforçada 90/14 SAN 1, resolvendo o problema."
    ],
    "mainTypes": [
      "Quebra por Colisão com Lançadeira (Causada por deflexão mecânica em tecidos grossos ou sincronismo incorreto)",
      "Quebra por Impacto no Aro do Bastidor (Causada por erro de enquadramento ou matriz maior que o bastidor)",
      "Quebra por Fadiga Térmica e Flexão Cíclica (Agulha gasta que perdeu têmpera após 8 horas de uso ininterrupto)"
    ],
    "characteristics": [
      "Parada imediata da produção com risco de danificar a peça do cliente",
      "Potencial de criar rebarbas cortantes na ponta da lançadeira que passarão a desfiar a linha",
      "Indicativo claro de incompatibilidade entre calibre da agulha, densidade da matriz e tecido",
      "Prevenção eficaz mediante uso de agulhas estruturadas com perfil reforçado (SAN 1)"
    ],
    "limitations": [
      "Nunca continuar bordando sem inspecionar a lançadeira após uma quebra de agulha",
      "Não reutilizar pedaços de agulha ou tentar desentortar agulhas tortas",
      "Sempre recolher 100% dos cacos da agulha quebrada para evitar travamento da lançadeira"
    ],
    "numberingSystem": [
      "Folga Agulha-Lançadeira: 0,05 - 0,10 mm",
      "Tolerância de Deflexão: < 0,08 mm",
      "Vida Útil Segura da Agulha: 6 a 8 horas de bordado"
    ],
    "advantages": [
      "✔ Entender a deflexão evita a perda de tecidos caros e peças prontas no ateliê",
      "✔ Protege a lançadeira rotativa contra arranhões e gastos desnecessários com mecânico",
      "✔ Permite selecionar o calibre exato de agulha para cada tipo de tecido sem medo"
    ],
    "commonErrors": [
      "❌ Borda tecido grosso (jeans, sarja, couro) com agulha fina 65/9 que entorta na primeira batida",
      "❌ Deixar o tecido frouxo no bastidor, fazendo o tecido subir junto com a agulha e entortá-la",
      "❌ Trocar a agulha quebrada e voltar a bordar sem lixar a rebarba da lançadeira com lixa 1200"
    ],
    "voceSabia": "Quando uma agulha de bordar quebra a 1.000 PPM, a ponta de aço atinge uma desaceleração instantânea superior a 500G de força, o equivalente ao impacto de um micro-projétil metálico!",
    "curiosidadeTecnica": "As agulhas com tecnologia SAN 1 (Special Application Needle) possuem a haste 35% mais espessa e geometria cônica no cone de transição, reduzindo a deflexão mecânica em mais de 60% em comparação com agulhas convencionais.",
    "dicaArtrelados": "Se a sua máquina quebrou a agulha, siga este ritual de 3 passos do Ateliê Artrelados: **1.** Retire todos os pedacinhos da agulha quebrada com uma pinça e ímã. **2.** Passe a pontinha do dedo na ponta da lançadeira para sentir se tem algum 'dente' ou arranhão áspero (se tiver, passe uma lixinha de água 1200 com carinho). **3.** Coloque uma agulha nova e gire o volante na mão uma volta completa para garantir que a agulha não encosta em nada antes de ligar a máquina!",
    "comparisonTable": {
      "headers": [
        "Causa de Quebra",
        "Sintoma Visual",
        "Dano Mecânico",
        "Ação Corretiva"
      ],
      "rows": [
        [
          "Deflexão em Tecido Grosso",
          "Agulha entorta e quebra na ponta",
          "Rebarba no bico da lançadeira",
          "Aumentar calibre (90/14) ou usar SAN 1"
        ],
        [
          "Colisão com Bastidor",
          "Agulha quebra na haste superior",
          "Risco no aro / Chapa furada",
          "Fazer o Trace/Traçado antes de iniciar"
        ],
        [
          "Dessincronismo da Lançadeira",
          "Quebra repetitiva a cada 5 pontos",
          "Impacto seco no corpo da lançadeira",
          "Ajustar o ponto de sincronismo a 200°"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Reduzir 100 PPM em tecidos grossos",
      "needleType": "75/11 SES para malhas / 90/14 SAN 1 para tecidos pesados",
      "stabilizer": "Entretela firme bem esticada",
      "threadTension": "Padrão calibrado",
      "density": "Evitar sobreposições excessivas de ponto"
    },
    "applications": [
      "Diagnóstico preventivo em oficinas de bordado com alta demanda",
      "Bordados em peças com emendas grossas (costuras de calça jeans, bonés estruturados e mochilas)",
      "Rotina de treinamento de operadores novatos para prevenção de acidentes",
      "Manutenção corretiva pós-colisão mecânica"
    ],
    "troubleshootingTips": [
      "Se quebrar 2 agulhas seguidas no mesmo lugar, verifique se a matriz não tem pontos amontoados em nó",
      "Gire o volante manualmente e observe a distância entre a cava da agulha e a ponta da lançadeira",
      "Verifique se o parafuso que prende a agulha não está torto ou frouxo"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Placa de Agulha (Needle Plate) e Chapa de Ponto com Orifício Redondo",
      "Passagem de Linha Superior e Sistema de Guias, Pratos e Estica-Fio",
      "Acessórios & Bastidores",
      "Digitalização & Software"
    ],
    "tags": [
      "q-075",
      "quebra de agulha",
      "deflexao",
      "lancadeira",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GROZ-BECKERT. Needle Deflection Dynamics & SAN 1 Reinforced Geometry Standards. Albstadt, 2021.",
      "SCHMETZ. Technical Guide to Needle Deflection and Rotary Hook Collision Prevention. Herzogenrath, 2022."
    ],
    "practicalExercise": "Pegue uma agulha usada e uma nova. Coloque a agulha usada sobre uma mesa de vidro plana e role-a com o dedo; observe se a ponta balança (sinal de que estava torta e prestes a quebrar). Esse teste simples evita quebras surpresa no meio da produção!",
    "quickSummary": "O estudo de por que as agulhas entortam e quebram, e como evitar danos à lançadeira e ao tecido.",
    "beginnerExplanation": "A quebra de agulha acontece quando ela bate em um pano muito grosso ou fica frouxa, entorta de lado e bate com tudo na lançadeira lá embaixo. Para não quebrar, basta usar a agulha do tamanho certo para cada tecido, esticar bem o pano no bastidor e nunca puxar o tecido enquanto a máquina estiver bordando!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-076-quebra-de-linha-e-protocolo-de-diagnostico-sistematico",
    "code": "Q-076",
    "term": "Quebra de Linha e Protocolo de Diagnóstico Sistemático (Thread Breakage Troubleshooting Protocol)",
    "letter": "Q",
    "level": "Iniciante 🟢",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim crepare (rompimento) e do grego diagnostikos (arte de discernir a causa exata de uma falha).",
    "summary": "Árvore de decisão técnica e checklist metódico de 7 passos para identificar e solucionar quebras repetitivas de linha superior e inferior em máquinas de bordar.",
    "definition": "Quebra de Linha e Protocolo de Diagnóstico Sistemático (Thread Breakage Root-Cause Troubleshooting & Inspection Protocol) é a metodologia analítica padronizada para identificar, isolar e eliminar a causa-raiz de paradas operacionais causadas pelo rompimento do fio de bordar. Em vez de agir por tentativa e erro desordenada, o operador inspeciona a cadeia de costura em ordem sequencial: 1. Alimentação do cone de linha; 2. Tensão e molas tensoras; 3. Estado físico da agulha; 4. Condição da lançadeira e caixa de bobina; 5. Qualidade do tecido e estabilização; 6. Parâmetros de densidade da matriz; 7. Velocidade e sincronismo mecânico.",
    "technicalDetails": "Taxa aceitável de quebras na indústria: < 1 quebra para cada 100.000 pontos bordados. Força média de ruptura da linha poliéster 40wt: ~1.400 gf. Tensão de trabalho recomendada: Superior 100-120 gf / Bobina 20-25 gf. Ponto crítico de fricção: O olho da agulha, onde o fio passa de 30 a 50 vezes para frente e para trás antes de ser fixado no tecido.",
    "construction": [
      "Árvore lógica de diagnóstico em 7 etapas progressivas",
      "Tensiômetro analógico ou digital (Towa) para calibração precisa de gramas-força",
      "Lupa de relojoeiro ou conta-fios para inspeção de rebarbas no olho da agulha e lançadeira",
      "Lixa d'água grão 1200 / 1500 e polidor de metal para remoção de micro-ranhuras",
      "Spray lubrificante de silicone para fios difíceis ou metalizados"
    ],
    "howItWorks": [
      "1. A máquina para acusando 'Quebra de Linha Superior'. O operador não mexe na tensão aleatoriamente.",
      "2. Passo 1 (Cone): Checa se o fio não está laçado na base do carretel ou preso na haste superior.",
      "3. Passo 2 (Trajeto): Confere se a linha não escapou dos discos tensores ou da alavanca do estica-fio.",
      "4. Passo 3 (Agulha): Passa a unha na ponta e no olho da agulha; se sentir arranhão, troca a agulha imediatamente.",
      "5. Passo 4 (Lançadeira): Abre a tampa inferior e limpa a penugem acumulada na caixa de bobina com um pincel seco.",
      "6. Passo 5 (Puxão de Teste): Puxa a linha manualmente pela agulha com o calcador abaixado para sentir se corre suave e firme sem trancos.",
      "7. Religa a máquina: o bordado roda suave por horas sem nenhuma nova interrupção."
    ],
    "mainTypes": [
      "Quebra com Desfiamento em Pincel (Causada por atrito com agulha cega, rebarba na lançadeira ou olho áspero)",
      "Quebra com Corte Seco e Reto (Causada por linha presa na base do cone ou tensão excessivamente apertada)",
      "Quebra com Nó e Embolamento Inferior (Causada por linha que escapou do estica-fio ou caixa de bobina suja)"
    ],
    "characteristics": [
      "Diagnóstico rápido em menos de 2 minutos que resolve 99% das quebras de ateliê",
      "Eliminação da frustração de desregular tensões que já estavam corretas",
      "Aumento imediato da produtividade e do lucro do ateliê",
      "Conservação da vida útil das peças mecânicas da máquina"
    ],
    "limitations": [
      "Nunca tentar consertar quebras apenas puxando o botão de tensão sem checar o resto do trajeto",
      "Não usar cones de linha velhos guardados ao sol que perderam a resistência do polímero",
      "Não usar óleo lubrificante diretamente no fio de bordar (apenas silicone próprio se necessário)"
    ],
    "numberingSystem": [
      "Índice de Produtividade: > 98% sem quebras",
      "Tempo Médio de Resolução: < 2 minutos",
      "Inspeção em 7 Etapas Lógicas"
    ],
    "advantages": [
      "✔ Acaba de vez com a dor de cabeça de máquina quebrando linha a cada 20 segundos",
      "✔ Economiza horas de trabalho e evita retrabalhos frustrantes",
      "✔ Dá segurança total para você deixar a máquina bordando sem medo de paradas"
    ],
    "commonErrors": [
      "❌ Apertar ou soltar o botão de tensão no desespero sem saber onde está o problema de verdade",
      "❌ Continuar bordando com uma agulha que já tem mais de 20 horas de uso contínuo",
      "❌ Deixar o cone de linha tombar ou tremer no suporte, fazendo a linha enroscar no pé do carretel"
    ],
    "voceSabia": "Mais de 70% de todas as quebras de linha em máquinas de bordar são causadas simplesmente por agulha gasta ou por linha que enroscou na base do carretel, e não por defeito na máquina!",
    "curiosidadeTecnica": "A 900 PPM, cada centímetro de fio de bordar sofre acelerações de 0 a 15 metros por segundo em menos de 30 milissegundos; qualquer micro-rebarba invisível a olho nu na lançadeira age como uma navalha, fatiando os filamentos do fio.",
    "dicaArtrelados": "Se a linha começou a quebrar do nada e você já estava bordando bem: **coloque uma agulha novinha em folha!** Em 8 de cada 10 vezes, uma simples agulha nova resolve o problema na hora, porque a pontinha da agulha antiga já perdeu o fio ou o buraquinho ficou arranhado pelo atrito!",
    "comparisonTable": {
      "headers": [
        "Aspecto da Ponta Quebrada",
        "Causa Mais Provável",
        "Onde Inspecionar",
        "Ação Imediata"
      ],
      "rows": [
        [
          "Ponta Desfiada tipo Pincel",
          "Fricção e corte por atrito",
          "Olho da agulha / Ponta da lançadeira",
          "Trocar agulha e lixar rebarba da lançadeira"
        ],
        [
          "Corte Limpo e Reto",
          "Tranco por travamento brusco",
          "Base do carretel / Guia-fio superior",
          "Verificar se o fio não laçou na base do cone"
        ],
        [
          "Embolamento com 'Ninho' Embaixo",
          "Falta de tensão superior",
          "Alavanca do estica-fio / Discos tensores",
          "Repassar a linha superior com o calcador levantado"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES nova",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm padrão"
    },
    "applications": [
      "Checklist obrigatório de início de turno em produções industriais e artesanais",
      "Treinamento de bordadeiras iniciantes para autonomia operacional completa",
      "Solução rápida de problemas em linhas difíceis (metálicas, rayon e poliéster fino)",
      "Redução de custos com assistência técnica em chamados simples de regulagem"
    ],
    "troubleshootingTips": [
      "Sempre passe a linha com o pé calcador LEVANTADO para que a linha entre fundo nos discos tensores",
      "Use uma redinha de proteção no cone se a linha estiver escorregando e caindo na base",
      "Passe um pincelzinho para tirar a poeira da caixa de bobina toda vez que trocar a agulha"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Passagem de Linha Superior e Sistema de Guias, Pratos e Estica-Fio",
      "Linha de Bordar 40wt",
      "Poliéster Trilobal vs. Spun Polyester em Fios de Bordar",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-076",
      "quebra de linha",
      "diagnostico",
      "troubleshooting",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MADEIRA THREADS. Thread Breakage Elimination Guide & Tension Dynamics. Freiburg, 2021.",
      "PARRISH, Gail. Systematic Diagnostics in Computerized Embroidery: Root Cause Isolation Protocols. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina desligada e calcador abaixado, puxe a linha pela agulha com a mão e sinta a resistência suave. Agora levante o calcador e puxe de novo: a linha deve ficar super livre e leve. Esse exercício ensina seus dedos a sentir se a tensão está perfeita!",
    "quickSummary": "O método organizado de 7 passos para descobrir e consertar na hora o motivo pelo qual a linha está quebrando.",
    "beginnerExplanation": "Quando a linha começar a quebrar, não se desespere nem saia mexendo em todos os botões! Siga o passo a passo com calma: veja se a linha não enrolou no pé do cone, se o estica-fio está passado certo, troque a agulha por uma nova e limpe a caixinha da bobina. Quase sempre é uma coisa simples e sua máquina volta a bordar macio!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-077-quimica-de-removedores-de-manchas-de-oleo-e-adesivos",
    "code": "Q-077",
    "term": "Química de Removedores de Manchas de Óleo e Adesivos (Spot Cleaning & Degreaser Sprays Protocol)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego khemeia (transformação química) e do inglês spot cleaning spray (spray removedor de manchas por adsorção).",
    "summary": "Formulações químicas de aerossóis de solventes voláteis com talco microporoso e desengraxantes para remoção instantânea de respingos de óleo de máquina e resíduos de cola em tecidos nobres.",
    "definition": "Química de Removedores de Manchas de Óleo e Adesivos (Industrial Spot Remover Chemistry, Solvent Aerosol Degreasing & Adhesive Neutralization) é o conjunto de solventes industriais de evaporação ultrarrápida combinados com agentes adsorventes microporosos (como silicatos de magnésio ou talco ativo) desenvolvidos para resgatar peças bordadas manchadas por respingos de óleo da barra de agulha, graxa de pantógrafo ou excesso de cola spray temporária. Ao ser pulverizado sobre a mancha de óleo, o solvente quebra a tensão superficial do lubrificante e o dissolve; à medida que o solvente evapora em segundos, o óleo é 'puxado' para dentro do pó branco absorvente por capilaridade, bastando uma escovação suave para remover a mancha sem deixar auréolas (*Rings*) e sem molhar o tecido.",
    "technicalDetails": "Composição típica do spray tira-manchas a seco: Heptano/Tetracloroetileno modificado com carga de silicato absorvente. Tempo de secagem e reação: 45 a 90 segundos (formação do pó branco giz). Remoção de resíduos de cola spray de bastidor: Solvente à base de terpenos cítricos (D-Limoneno) ou álcool isopropílico 99%. Índice de resíduo têxtil: Zero resíduo oleoso após escovação mecânica.",
    "construction": [
      "Lata de aerossol de alta pressão com válvula dosadora de jato concentrado",
      "Solvente desengraxante atóxico de evaporação instantânea",
      "Pó adsorvente de micropartículas minerais ativas",
      "Escova de cerdas naturais macias para remoção do pó branco seco",
      "Espátula de teflon para descolar resíduos gomados de cola seca nos bastidores"
    ],
    "howItWorks": [
      "1. Durante o bordado de um vestido de batizado de fustão branco, cai uma microgota de óleo da barra de agulha sobre o tecido.",
      "2. A bordadeira não esfrega água nem sabão (o que espalharia a mancha para as fibras).",
      "3. Agita fortemente a lata do spray tira-manchas a seco (*Tira Manchas Têxtil*) e aplica um jato curto a 20 cm de distância sobre o óleo.",
      "4. O líquido penetra nas fibras e, em 60 segundos, seca completamente, transformando-se em uma crosta de pó branco e fosco.",
      "5. Todo o óleo da mancha foi absorvido e transferido para o pó mineral.",
      "6. A bordadeira passa uma escovinha de cerdas macias: o pó branco se solta facilmente.",
      "7. O tecido branco fica 100% limpo, impecável e sem nenhuma mancha, pronto para entrega ao cliente."
    ],
    "mainTypes": [
      "Spray Tira-Manchas a Seco em Pó (Para óleos minerais, graxas de máquina e sujeiras de bancada)",
      "Solvente Cítrico Limpa-Bastidor (D-Limoneno líquido para dissolver a cola temporária acumulada nos aros)",
      "Removedor Líquido Especial para Caneta Fantasminha Residual (Neutralizador de marcas térmicas reativas)"
    ],
    "characteristics": [
      "Recuperação imediata de peças manchadas que seriam perdidas com grande prejuízo",
      "Ação a seco sem necessidade de lavar ou passar a ferro a peça inteira",
      "Não desbota as linhas de poliéster nem mancha tecidos delicados (seda, linho, piquet)",
      "Secagem ultra rápida em menos de 2 minutos"
    ],
    "limitations": [
      "Aplicar sempre em ambiente bem ventilado e longe de fontes de calor ou faíscas",
      "Fazer um teste prévio em um retalho pequeno no caso de tecidos sintéticos estampados ou acetato",
      "Nunca esfregar o pó enquanto ele ainda estiver úmido; esperar secar completamente até virar giz"
    ],
    "numberingSystem": [
      "Distância de Aplicação: 15 a 25 cm",
      "Tempo de Secagem: 60 a 90 segundos",
      "Base Química: Solventes adsorventes microporosos"
    ],
    "advantages": [
      "✔ Salva vestidos de noiva, jalecos brancos e enxovais de bebê de manchas acidentais de óleo",
      "✔ Deixa seus bastidores limpinhos sem aquela gosma grudenta de cola spray",
      "✔ Transmite um acabamento impecável e cheiroso para o cliente final"
    ],
    "commonErrors": [
      "❌ Tentar tirar mancha de óleo passando água com sabão e esfregando com força, estragando as fibras",
      "❌ Passar ferro quente em cima de mancha de óleo antes de limpar, fixando o óleo para sempre no tecido",
      "❌ Deixar os bastidores cheios de cola velha até grudar poeira e sujar as roupas dos clientes"
    ],
    "voceSabia": "A tecnologia dos sprays de limpeza a seco com pó mineral adsorvente foi inventada nos anos 1970 para a indústria da alta costura de Paris, permitindo limpar vestidos de seda caríssimos direto na manequim sem precisar de lavanderia!",
    "curiosidadeTecnica": "O pó adsorvente atua através de forças de atração molecular de Van der Waals; sua área superficial interna é de mais de 300 m² por grama de pó, o que lhe confere a capacidade de absorver até 5 vezes seu próprio peso em óleo mineral puro em segundos.",
    "dicaArtrelados": "Tenha sempre duas latinhas mágicas na prateleira do seu ateliê: **1.** Uma lata de *Spray Tira-Manchas Têxtil a Seco* (se pingar óleo no tecido branco, borrife, espere 1 minuto virar pó de giz e escove: a mancha some como mágica!). **2.** Um frasco de removedor cítrico ou álcool isopropílico para limpar a cola dos seus bastidores uma vez por semana!",
    "comparisonTable": {
      "headers": [
        "Método de Limpeza",
        "Tempo de Ação",
        "Risco de Auréola / Mancha",
        "Preservação do Tecido"
      ],
      "rows": [
        [
          "Spray Tira-Manchas a Seco",
          "60 segundos",
          "Zero (adsorção total no pó)",
          "100% Preservado (não molha)"
        ],
        [
          "Água, Detergente e Esfregação",
          "1 a 2 horas (lavar e secar)",
          "Alto (espalha o óleo em auréola)",
          "Risco de desbotar ou amarrotar"
        ],
        [
          "Álcool Comum / Acetona",
          "Rápido",
          "Altíssimo (pode desbotar o tecido)",
          "Pode queimar fibras sintéticas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "N/A",
      "needleType": "N/A",
      "stabilizer": "N/A",
      "threadTension": "N/A",
      "density": "N/A"
    },
    "applications": [
      "Limpeza emergencial de peças brancas e claras após bordado no ateliê",
      "Remoção de marcas de óleo de barras de agulhas e engrenagens superiores",
      "Higienização periódica de bastidores plásticos e magnéticos impregnados de cola",
      "Controle de qualidade final antes de embalar e despachar encomendas"
    ],
    "troubleshootingTips": [
      "Se ficar uma marquinha esbranquiçada de pó no tecido escuro, passe uma escovinha úmida ou use o vapor do ferro a distância",
      "Sempre limpe a barra de agulha com um paninho seco após colocar óleo na máquina para não respingar no tecido",
      "Guarde as latas de spray em local fresco, longe da luz solar e do calor das prensas"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Mecânica & Manutenção",
      "Acessórios & Bastidores",
      "Protetor de Bastidor e Fita Antideslizante para Aros Metálicos e Plásticos",
      "Tipos de Tecidos"
    ],
    "tags": [
      "q-077",
      "tira manchas",
      "spray de oleo",
      "limpa bastidor",
      "solventes",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TEXTILE CARE & RESTORATION: Spot Cleaning Chemistry, Adsorbent Powders and Degreasing Solvents. Milan, 2021.",
      "PARRISH, Gail. Chemical Remediation in Embroidery Operations: Spot Solvents, Adhesive Stripping and Fabric Preservation. Cincinnati, 2022."
    ],
    "practicalExercise": "Pingue uma gotinha de óleo de máquina em um retalho de tecido branco velho. Aplique o spray tira-manchas a seco a 20 cm de distância. Observe o líquido se transformar em pó branco opaco em 1 minuto. Passe a escovinha e veja a mágica da limpeza a seco acontecer!",
    "quickSummary": "Os produtos químicos em spray que removem manchas de óleo de máquina e cola dos bastidores sem precisar lavar a peça.",
    "beginnerExplanation": "Se por acaso espirrar uma gotinha de óleo da máquina na sua peça novinha, não entre em pânico e não molhe com água! Basta espirrar um spray tira-manchas a seco especial: ele seca em 1 minuto virando um pozinho branco que suga todo o óleo. Você passa a escovinha e a peça fica limpinha como nova!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-078-quik-snap-e-bastidores-magneticos-de-fixacao-rapida",
    "code": "Q-078",
    "term": "Quik-Snap e Bastidores Magnéticos de Fixação Rápida (Magnetic Quick-Snap Framing Systems)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Acessórios & Bastidores",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês quick-snap (encaixe magnético de engate instantâneo) e do grego magnes (ímã de atração ferromagnética).",
    "summary": "Sistema moderno de bastidores com fechamento por ímãs de neodímio de alta potência que prendem o tecido instantaneamente sem parafusos, eliminando marcas de pressão em veludos, couros e peças grossas.",
    "definition": "Quik-Snap e Bastidores Magnéticos de Fixação Rápida (Magnetic Hooping Systems, Mighty Hoop & Quick-Snap Frame Engineering) é a inovação tecnológica no enquadramento de tecidos para bordado computadorizado que substitui a compressão por atrito e parafusos mecânicos pela força de atração magnética uniforme de ímãs de terras raras (Neodímio-Ferro-Boro N45/N52). O sistema consiste em uma base metálica inferior e um aro superior magnético revestido de polímero que se atraem com pressão distribuída constante de dezenas de quilogramas-força, prendendo tecidos delicados ou extremamente grossos (como toalhas felpudas, jaquetas com forro, couro e veludo) em menos de 5 segundos sem deixar a temida marca de bastidor (*Hoop Burn*).",
    "technicalDetails": "Força de atração magnética: ímãs de Neodímio N48 gerando pressão de 15 a 35 kgf uniformemente distribuída. Tempo médio de montagem: 3 a 5 segundos por peça (redução de 70% no tempo de setup). Eliminação de 'Hoop Burn': 100% de prevenção em veludo, piquet e tecidos acetinados. Espessura suportada: De sedas ultrafinas até casacos de inverno com manta de 15 mm sem ajuste de parafusos.",
    "construction": [
      "Base inferior em aço inoxidável ferromagnético usinado com encaixes para o pantógrafo",
      "Aro superior injetado em polímero de alta resistência contendo ímãs de neodímio embutidos",
      "Garras laterais de segurança ou alças ergonômicas para desacoplamento rápido",
      "Marcadores de alinhamento ortogonal gravados a laser nos eixos X e Y",
      "Proteção emborrachada para amortecimento e proteção contra beliscamento dos dedos"
    ],
    "howItWorks": [
      "1. A bordadeira posiciona a entretela e a jaqueta grossa sobre a base inferior do bastidor magnético na estação de montagem.",
      "2. Segura o aro superior magnético pelas alças de apoio.",
      "3. Aproxima o aro superior da base: os ímãs de neodímio puxam o aro com um 'clique' firme e instantâneo (*Snap*).",
      "4. O tecido fica perfeitamente preso, esticado e liso em 3 segundos, sem precisar girar nenhum parafuso manual.",
      "5. Encaixa o bastidor no pantógrafo da máquina e borda a peça a 900 PPM sem deslizamento.",
      "6. Ao término, a bordadeira puxa a alça de liberação, retira a peça e confere: o tecido não tem nenhuma marca de aro nem deformação."
    ],
    "mainTypes": [
      "Bastidores Magnéticos Quadrados e Retangulares (Para logotipos de peito, jaquetas e toalhas)",
      "Bastidores Magnéticos Especiais para Bolsos e Mangas (Estreitos para entrar em tubulares difíceis)",
      "Sistemas Quik-Snap com Janelas Intercambiáveis (Com réguas metálicas e gabaritos de troca rápida)"
    ],
    "characteristics": [
      "Enquadramento 4 vezes mais rápido do que com bastidores tradicionais de parafuso",
      "Eliminação definitiva de marcas de bastidor em tecidos escuros, veludo e microfibra",
      "Ergonomia superior: elimina dores nos pulsos e tendinites causadas por apertar parafusos",
      "Fixação ultra estável mesmo em tecidos muito grossos e escorregadios"
    ],
    "limitations": [
      "Pessoas com marca-passo cardíaco devem manter distância segura de bastidores magnéticos fortes",
      "Cuidado com os dedos ao fechar o bastidor (a atração dos ímãs de neodímio é muito potente)",
      "Custo de aquisição superior em relação aos bastidores plásticos convencionais"
    ],
    "numberingSystem": [
      "Força dos Ímãs: Grau N48 / N52 Neodímio",
      "Tempo de Montagem: 3 a 5 segundos",
      "Prevenção de Marcas: 100%"
    ],
    "advantages": [
      "✔ Agiliza a produção de pedidos grandes, economizando horas preciosas de montagem de bastidor",
      "✔ Borda toalhas grossas e jaquetas pesadas com a maior facilidade do mundo",
      "✔ Nunca mais estrague uma peça de veludo ou camisa preta com marca brilhosa de bastidor"
    ],
    "commonErrors": [
      "❌ Deixar os dedos entre os aros na hora do fechamento magnético brusco",
      "❌ Guardar cartões de crédito ou celulares colados no bastidor magnético forte",
      "❌ Tentar descolar o bastidor puxando pelo meio em vez de levantar pelas alças laterais"
    ],
    "voceSabia": "Os ímãs de Neodímio utilizados nos bastidores magnéticos modernos foram desenvolvidos nos anos 1980 pela General Motors e pela Sumitomo Special Metals e são os ímãs permanentes mais potentes conhecidos pela humanidade!",
    "curiosidadeTecnica": "A distribuição de pressão de um bastidor magnético é constante em todos os 360 graus do aro, ao contrário do bastidor de parafuso comum, cuja pressão é concentrada perto da tarraxa e até 60% menor no lado oposto.",
    "dicaArtrelados": "Se você borda muitas toalhas de banho felpudas, camisas polo ou jaquetas, investir em um **Bastidor Magnético** é o melhor presente que você pode dar ao seu ateliê! Ele não deixa marcas no tecido, você não cansa os pulsos apertando parafusos e monta cada peça em apenas 4 segundos!",
    "comparisonTable": {
      "headers": [
        "Característica Operacional",
        "Bastidor Magnético (Quik-Snap)",
        "Bastidor Tradicional de Parafuso"
      ],
      "rows": [
        [
          "Tempo de Montagem",
          "3 a 5 segundos",
          "20 a 45 segundos"
        ],
        [
          "Marcas de Bastidor (Hoop Burn)",
          "Zero marcas em qualquer tecido",
          "Frequente em veludo, piquet e escuros"
        ],
        [
          "Esforço Físico do Operador",
          "Nenhum (fechamento automático)",
          "Alto (torção constante de parafusos)"
        ],
        [
          "Adaptação a Tecidos Grossos",
          "Instantânea (auto-ajustável)",
          "Exige desapertar e regular parafusos"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção (850 - 950 PPM)",
      "needleType": "Padrão adequado",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Produção de uniformes corporativos em grande escala (camisas polo e jalecos)",
      "Bordados em toalhas de banho felpudas, roupões e cobertores de bebê",
      "Peças de vestuário prontas (bolsos montados, mangas, jaquetas forradas e couro)",
      "Tecidos ultrassensíveis à compressão mecânica (veludo alemão, camurça e seda)"
    ],
    "troubleshootingTips": [
      "Ao fechar o bastidor magnético, apoie a parte inferior primeiro e incline o topo para evitar beliscar o tecido",
      "Mantenha a superfície dos ímãs sempre limpa e livre de fiapos ou alfinetes metálicos perdidos",
      "Para abrir com facilidade, empurre o aro superior para o lado em vez de tentar puxar para cima com força"
    ],
    "relatedTerms": [
      "Acessórios & Bastidores",
      "Protetor de Bastidor e Fita Antideslizante para Aros Metálicos e Plásticos",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Piquet (Piqué) e Protocolo de Bordado em Camisas Polo",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "q-078",
      "bastidor magnetico",
      "quik-snap",
      "mighty hoop",
      "marcas de bastidor",
      "acessorios e bastidores",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MAGNETIC HOOPING SYSTEMS: Neodymium Clamping Dynamics & Industrial Ergonomics. Chicago, 2021.",
      "PARRISH, Gail. Advanced Workholding in Automated Embroidery: Magnetic Force Distribution and Hoop Burn Elimination. Cincinnati, 2022."
    ],
    "practicalExercise": "Experimente enquadrar uma toalha de banho bem grossa em um bastidor comum de parafuso e cronometre o tempo. Depois, faça o mesmo em um bastidor magnético: compare a velocidade e veja como o tecido sai do bastidor magnético sem nenhum amassado ou marca esbranquiçada!",
    "quickSummary": "O bastidor moderno com ímãs super fortes que fecha sozinho, não amassa o tecido e monta a peça em 4 segundos.",
    "beginnerExplanation": "O bastidor magnético é como uma mágica: em vez de você ficar sofrendo para apertar parafuso com a mão, ele tem ímãs super potentes que 'grudam' sozinhos no lugar! Ele prende tecidos finos ou toalhas super grossas na mesma hora e não deixa aquela marca feia redonda no pano!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-079-quadriculado-de-enquadramento-e-gabarito-transparente",
    "code": "Q-079",
    "term": "Quadriculado de Enquadramento e Gabarito Transparente (Grid Placement Template & Centering Gauge)",
    "letter": "Q",
    "level": "Iniciante 🟢",
    "category": "Acessórios & Bastidores",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quadrum (figura de quatro lados iguais) e do francês gabarit (modelo/molde referencial de medição).",
    "summary": "Placa plástica transparente com malha milimétrica gravada e orifícios centrais que se encaixa perfeitamente no bastidor para alinhamento ortogonal e marcação do ponto zero no tecido.",
    "definition": "Quadriculado de Enquadramento e Gabarito Transparente (Embroidery Hoop Grid Template, Centering Alignment Sheet & Crosshair Locator) é a ferramenta física de referência geométrica fornecida com os bastidores de bordado. Consiste em uma lâmina de acetato ou policarbonato translúcido de alta precisão dotada de uma malha quadriculada em centímetros e milímetros, eixos ortogonais principais (X e Y), círculos concêntricos e furos-guia. O gabarito é encaixado nas ranhuras do aro interno do bastidor sobre o tecido marcado, permitindo que a bordadeira verifique instantaneamente o paralelismo do tecido com a trama, centralize nomes e logotipos e faça coincidir o centro do bastidor com o ponto central marcado a giz na peça.",
    "technicalDetails": "Graduação da malha: Linhas principais a cada 10 mm e subdivisões a cada 1 mm ou 5 mm. Furos de marcação: Orifício central de 1,5 mm para inserção de ponta de giz/caneta fantasminha e furos nos eixos X/Y. Precisão dimensional: Tolerância geométrica de ± 0,2 mm. Compatibilidade: Modelado exclusivamente para as travas de encaixe de cada tamanho específico de bastidor (10x10, 13x18, 16x26, 20x30 cm).",
    "construction": [
      "Lâmina plana de policarbonato ou acetato transparente antirreflexo",
      "Gravação serigráfica ou a laser indelével com eixos X e Y destacados",
      "Pinos ou linguetas laterais para travamento exato nas bordas do aro do bastidor",
      "Orifícios passantes milimétricos no centro e nos extremos dos eixos",
      "Identificação do código do bastidor e orientação 'TOP / TOPO' gravada na peça"
    ],
    "howItWorks": [
      "1. A bordadeira marca o centro do bolso de uma camisa com uma cruzinha (+) de giz ou caneta fantasminha.",
      "2. Coloca o tecido com entretela sobre o aro externo do bastidor.",
      "3. Encaixa o gabarito quadriculado transparente dentro do aro interno.",
      "4. Posiciona o aro interno sobre o tecido, olhando através do plástico transparente para fazer o 'X' do gabarito bater perfeitamente em cima do 'X' de giz.",
      "5. Pressiona o aro para travar o bastidor.",
      "6. Verifica se as linhas da trama do tecido estão paralelas às linhas quadriculadas do gabarito (garantindo que o tecido não ficou torto).",
      "7. Retira o gabarito transparente antes de levar o bastidor para a máquina de bordar."
    ],
    "mainTypes": [
      "Gabarito Transparente Rígido Específico (Vem de fábrica com cada bastidor da máquina)",
      "Régua Gabarito Universal de Posicionamento para Golas e Bolsos (Para alinhamento prévio no peito da camisa)",
      "Gabarito Magnético Flexível (Para uso em conjunto com estações de montagem rápida)"
    ],
    "characteristics": [
      "Alinhamento visual milimétrico e 100% reto de bordados em qualquer peça",
      "Eliminação do risco de bordar desenhos inclinados ou tortos em relação à costura",
      "Facilidade para centralizar nomes em toalhas, fraldas e jalecos",
      "Uso intuitivo e imediato sem necessidade de cálculos matemáticos"
    ],
    "limitations": [
      "NUNCA esquecer o gabarito plástico dentro do bastidor na hora de ligar a máquina (a agulha vai bater e quebrar)",
      "Não limpar com acetona ou solventes fortes que possam deixar o plástico opaco ou apagar as linhas",
      "Guardar os gabaritos em local plano para não empenar"
    ],
    "numberingSystem": [
      "Graduação da Malha: 10 mm / 5 mm / 1 mm",
      "Precisão de Alinhamento: < 0,5 mm",
      "Espessura do Gabarito: 1,0 mm a 1,5 mm"
    ],
    "advantages": [
      "✔ Garante que o bordado saia 100% reto e alinhado com o bolso ou barra da peça",
      "✔ Acaba com o medo de colocar o tecido torto no bastidor",
      "✔ Torna o enquadramento de toalhas e camisas fácil e rápido"
    ],
    "commonErrors": [
      "❌ Esquecer o gabarito transparente dentro do bastidor e apertar o Start na máquina, quebrando a agulha",
      "❌ Enquadrar no 'olhômetro' sem usar o gabarito e entregar a peça com o nome torto para o cliente",
      "❌ Colocar o gabarito de cabeça para baixo ou invertido no aro"
    ],
    "voceSabia": "Os gabaritos quadriculados de precisão com eixos cartesianos foram adaptados das mesas de desenho técnico da arquitetura para o bordado eletrônico nos anos 1990 para permitir que bordadeiras alinhassem monogramas com a mesma precisão de engenheiros!",
    "curiosidadeTecnica": "O gabarito transparente possui linhas com espessura óptica de apenas 0,15 mm; isso permite que o olho humano detecte desvios angulares de alinhamento de apenas 0,5 grau em relação à trama do tecido.",
    "dicaArtrelados": "Crie o hábito de sempre usar o **plástico quadriculado** do seu bastidor para montar suas peças! Ele é a sua régua mágica. Faça um pontinho com a caneta que apaga com calor no tecido, encaixe o gabarito no bastidor e faça a cruzinha bater em cima do ponto. E uma regra sagrada: **tire o plástico do bastidor antes de encaixar na máquina!**",
    "comparisonTable": {
      "headers": [
        "Método de Alinhamento",
        "Precisão Angular",
        "Tempo de Ajuste",
        "Risco de Sair Torto"
      ],
      "rows": [
        [
          "Com Gabarito Quadriculado",
          "Perfeita (0° de desvio)",
          "10 segundos",
          "Zero"
        ],
        [
          "No Olhômetro Direto",
          "Imprevisível (2° a 5° de erro)",
          "5 segundos",
          "Altíssimo"
        ],
        [
          "Medindo com Fita Métrica",
          "Boa",
          "60 segundos",
          "Médio"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Centralização de nomes e monogramas em toalhas de banho, rosto e lavabo",
      "Alinhamento ortogonal em camisas polo, jalecos e uniformes corporativos",
      "Enquadramento de barras decorativas em panos de prato e lençóis",
      "Posicionamento exato de logotipos sobre bolsos e golas prontas"
    ],
    "troubleshootingTips": [
      "Se o plástico estiver meio solto no aro, confira se as linguetas de travamento estão encaixadas nas fendas certas",
      "Lave o gabarito com água morna e detergente neutro para retirar marcas de giz ou poeira",
      "Cole uma etiquetinha colorida na borda do gabarito para você sempre lembrar de retirá-lo antes de bordar"
    ],
    "relatedTerms": [
      "Acessórios & Bastidores",
      "Posicionador Laser de Ponto Cruz e Alinhamento de Enquadramento",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Protetor de Bastidor e Fita Antideslizante para Aros Metálicos e Plásticos",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-079",
      "gabarito transparente",
      "quadriculado",
      "alinhamento",
      "centralizacao",
      "acessorios e bastidores",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "EMBROIDERY HOOPING STANDARDS: Grid Templates, Parallax Elimination and Cartesian Alignment. London, 2021.",
      "PARRISH, Gail. Geometric Workholding in Apparel Embroidery: Grid Overlay Physics and Alignment Gauging. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue o bastidor da sua máquina e encaixe o gabarito transparente nele. Desenhe uma linha reta de giz em um pano e tente colocar o bastidor de forma que a linha do pano fique perfeitamente paralela à linha do plástico. Veja como é fácil deixar tudo retinho!",
    "quickSummary": "O plástico transparente com quadradinhos que vem no bastidor para deixar o bordado perfeitamente reto e no centro.",
    "beginnerExplanation": "O gabarito transparente é aquela plaquinha de plástico cheia de quadradinhos que veio junto com o seu bastidor. Você coloca ela no bastidor para enxergar através do plástico e ter certeza de que a sua camisa não ficou torta nem fora do centro. Só lembre de tirar a plaquinha antes de começar a bordar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-080-queima-de-tecido-por-friccao-de-agulha-e-prevencao-termica",
    "code": "Q-080",
    "term": "Queima de Tecido por Fricção de Agulha e Prevenção Térmica (Needle Friction Scorch & Melt Prevention Protocol)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim cremare (queimar por calor) e do grego frictio (atrito mecânico com geração de energia térmica).",
    "summary": "Física do aquecimento cinético da agulha em alta velocidade (acima de 250°C), derretimento de fibras sintéticas (poliéster, nylon, lycra) e soluções térmicas com revestimento cerâmico e agulhas antiaderentes.",
    "definition": "Queima de Tecido por Fricção de Agulha e Prevenção Térmica (Needle Thermal Friction Degradation, Polymer Melting & Anti-Adhesive Needle Technology) é o fenômeno físico-termodinâmico em que o atrito repetido da haste e lâmina de aço da agulha contra as fibras do tecido a 850-1.000 PPM gera temperaturas pontuais superiores a 250°C a 300°C. Em tecidos sintéticos com baixo ponto de fusão (como poliamida, poliéster, elastano/lycra, microfibra ou tecidos impermeabilizados com PU/PVC), esse calor extremo derrete as fibras ao redor do furo, criando bordas endurecidas, pequenos furos queimados escuros ou colando resíduos de polímero derretido no olho da agulha, provocando quebra imediata de linha e danos irreversíveis à peça.",
    "technicalDetails": "Temperatura de pico da agulha a 900 PPM em tecidos sintéticos: 240°C a 310°C. Ponto de amolecimento do poliéster: ~220°C (fusão a 255°C); Poliamida 6: ~215°C; PVC/PU: ~140°C a 180°C. Soluções de mitigação: 1. Agulhas com revestimento de Nitreto de Titânio (Tintânio Gold / SAN 1 GEBEDUR); 2. Agulhas antiaderentes Super Non-Stick (revestimento PTFE/cerâmica); 3. Redução da velocidade da máquina em 20% (para ~700 PPM); 4. Aplicação de spray lubrificante térmico de silicone no fio.",
    "construction": [
      "Agulha especial com revestimento cerâmico antiaderente ou Nitreto de Titânio (TiN)",
      "Geometria de lâmina cônica com canaleta reforçada para redução da área de atrito",
      "Sensor de temperatura ou controle paramétrico de rotação no software da máquina",
      "Linha de bordar com tratamento superficial de cera térmica de deslizamento",
      "Entretela de suporte que atua como dissipador térmico na face inferior"
    ],
    "howItWorks": [
      "1. A máquina está bordando um bordado denso sobre uma jaqueta impermeável de nylon/poliamida a 950 PPM.",
      "2. Após 3.000 pontos em tatami, a agulha de aço comum atinge 260°C devido ao atrito de penetração.",
      "3. As fibras de nylon começam a amolecer e derreter, grudando uma resina plástica queimada na ponta da agulha.",
      "4. A linha de bordar passa pelo olho quente da agulha, derrete e se rompe repetidamente.",
      "5. A operadora identifica o problema térmico e faz 3 correções: substitui a agulha comum por uma agulha *Super Non-Stick* (antiaderente de titânio), reduz a velocidade da máquina para 700 PPM e aplica uma camada de filme de silicone.",
      "6. A temperatura da agulha cai para menos de 140°C.",
      "7. O bordado termina impecável, sem furos queimados e com acabamento perfeito na jaqueta."
    ],
    "mainTypes": [
      "Agulhas com Revestimento de Titânio (Groz-Beckert Gebedur / Schmetz Gold com dureza 4x maior e dissipação térmica)",
      "Agulhas Antiaderentes Super Non-Stick (Com revestimento de fluoropolímero antiaderente que repele colas e plásticos)",
      "Sistemas de Refrigeração por Ar Comprimido (Bicos de micro-ar direcionados para o cabeçote em máquinas industriais)"
    ],
    "characteristics": [
      "Eliminação completa de furinhos queimados e bordas duras em tecidos sintéticos delicados",
      "Fim do acúmulo de 'chiclete' de cola ou plástico derretido no olho da agulha",
      "Costura suave e contínua em tecidos difíceis (lycra, tactel, neoprene, couro sintético)",
      "Durabilidade da agulha multiplicada por até 5 vezes"
    ],
    "limitations": [
      "Em tecidos sintéticos muito sensíveis, a velocidade da máquina obrigatoriamente deve ser reduzida",
      "Não utilizar agulhas grossas demais em tecidos sintéticos finos (prefira calibre 70/10 ou 75/11)",
      "Evitar densidades excessivas de ponto (< 0,35 mm) em materiais plastificados"
    ],
    "numberingSystem": [
      "Temperatura Crítica da Agulha: > 240°C",
      "Dureza do Revestimento de Titânio: ~2.800 HV (Vickers)",
      "Redução Segura de Velocidade: 700 PPM"
    ],
    "advantages": [
      "✔ Salva jaquetas de nylon, roupas de academia e tecidos impermeáveis caros de queimaduras",
      "✔ Acaba com a linha quebrando toda hora por derretimento no olho da agulha",
      "✔ Permite bordar tecidos sintéticos e sintéticos colados com total tranquilidade"
    ],
    "commonErrors": [
      "❌ Borda tecido 100% poliamida ou nylon fino a 1.000 PPM com agulha comum sem baixar a velocidade",
      "❌ Usar agulha velha com resíduo de cola de spray que queima e vira uma crosta dura no olho da agulha",
      "❌ Insistir em bordar com densidade pesadíssima sobre tecidos impermeabilizados com PVC"
    ],
    "voceSabia": "Em testes de laboratório com câmeras termográficas infravermelhas, comprovou-se que uma agulha de aço comum pode aquecer de 25°C para 280°C em menos de 45 segundos de bordado contínuo a 1.000 PPM em materiais sintéticos!",
    "curiosidadeTecnica": "O revestimento de Nitreto de Titânio (TiN) possui coeficiente de fricção de apenas 0,4 (contra 0,8 do aço cromado polido), reduzindo a geração de calor por atrito em mais de 45% durante a penetração nas fibras.",
    "dicaArtrelados": "Quando você for bordar roupas de ginástica (lycra, suplex), jaquetas corta-vento de nylon ou tecidos que usam cola spray: **baixe a velocidade da sua máquina para 650 ou 700 PPM** e use uma **agulha de Titânio ou Antiaderente (Non-Stick)**! A agulha não esquenta, o tecido não queima e a linha não quebra por nada!",
    "comparisonTable": {
      "headers": [
        "Tipo de Agulha",
        "Temperatura a 900 PPM",
        "Atrito com Tecido Sintético",
        "Risco de Queimar Tecido"
      ],
      "rows": [
        [
          "Agulha de Titânio / Non-Stick",
          "~130°C a 150°C",
          "Baixíssimo (deslizamento suave)",
          "Zero"
        ],
        [
          "Agulha Cromada Comum Nova",
          "~230°C a 260°C",
          "Médio a Alto",
          "Moderado a Alto"
        ],
        [
          "Agulha Gasta com Resíduo de Cola",
          "> 290°C",
          "Extremo (agarra nas fibras)",
          "Crítico (derrete o tecido)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM em sintéticos",
      "needleType": "75/11 SAN 1 GEBEDUR (Titânio) ou Super Non-Stick",
      "stabilizer": "Entretela de Recorte macia",
      "threadTension": "Superior: 105 gf / Bobina: 22 gf",
      "density": "0.40 a 0.45 mm (aberta)"
    },
    "applications": [
      "Bordados em jaquetas esportivas corta-vento, impermeáveis de nylon e tactel",
      "Vestuário fitness e moda praia em suplex, viscolycra, poliamida e neoprene",
      "Bordados sobre couro ecológico, courvin e materiais emborrachados com PU/PVC",
      "Trabalhos que utilizam cola spray temporária de alta aderência"
    ],
    "troubleshootingTips": [
      "Se a linha estiver saindo com uma bolinha derretida na ponta, troque imediatamente para agulha de titânio e baixe a velocidade",
      "Limpe a agulha com um paninho embebido em álcool isopropílico para retirar resíduos de cola grudada",
      "Abra um pouco a densidade dos pontos no software de matrizes para diminuir a quantidade de batidas no mesmo lugar"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Poliéster Trilobal vs. Spun Polyester em Fios de Bordar",
      "Química de Removedores de Manchas de Óleo e Adesivos",
      "Tipos de Tecidos",
      "Digitalização & Software"
    ],
    "tags": [
      "q-080",
      "queima de tecido",
      "agulha de titanio",
      "friccao termica",
      "sinteticos",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "THERMODYNAMICS IN TEXTILE PROCESSING: Needle Friction Heat, Synthetic Polymer Melting & Titanium Coatings. Zurich, 2021.",
      "PARRISH, Gail. Friction Dynamics & Thermal Degradation in High-Speed Embroidery Needles. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um retalho de tecido sintético tipo tactel ou nylon no bastidor. Borde um desenho a 950 PPM com agulha comum e depois outro com agulha de Titânio a 700 PPM. Sinta no verso do bordado a diferença de maciez: a versão térmica fica suave e sem furinhos endurecidos!",
    "quickSummary": "O fenômeno da agulha esquentar demais em alta velocidade e derreter panos sintéticos, e como evitar usando agulhas de titânio.",
    "beginnerExplanation": "Quando a máquina borda muito rápido em tecidos sintéticos (como nylon, lycra ou tactel), a agulha de aço esquenta tanto pelo atrito que pode derreter o pano e arrebentar a linha! Para resolver, basta diminuir um pouquinho a velocidade da máquina e usar agulhas especiais douradas de titânio que não esquentam!",
    "updatedAt": "2026-08-29"
  }
];

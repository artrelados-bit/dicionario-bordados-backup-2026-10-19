import { Verbete } from "../types";

export const VERBETES_LETTER_N_PART3: Verbete[] = [
  {
    id: "n-017-numeracao-pantone-paleta-linhas-thread-matching",
    code: "N-017",
    term: "Numeração Pantone vs. Paleta de Linhas (Thread Matching / Color Chart)",
    letter: "N",
    level: "Intermediário 🟡",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo feminino composto / Da colorimetria gráfica internacional e indústria têxtil.",
    origin: "Do sistema 'Pantone Matching System' (PMS) criado nos anos 1960 nos EUA, associado às tabelas de conversão das principais fiações mundiais de bordado.",
    summary: "Conversão técnica entre as cores gráficas da escala Pantone e os códigos de cones de fios dos fabricantes, garantindo fidelidade cromática corporativa.",
    definition: "Numeração Pantone vs. Paleta de Linhas é o processo técnico de conversão e correspondência colorimétrica entre as cores de uma identidade visual (especificadas pela escala gráfica internacional Pantone Solid Coated / PMS) e os códigos de cores reais das cartelas de fios de bordar dos fabricantes têxteis (como Madeira Polyneon, Gütermann, Lumina/Setta, Isacord, Marathon, Sulky e Ricoma). Envolve a compensação do brilho especular e do reflexo das fibras trilobais que alteram a percepção da cor sob diferentes fontes de iluminação (metamerismo).",
    technicalDetails: "Processo de conversão colorimétrica:\n• Escala de Origem: Cores sólidas Pantone (PMS - Ex: Pantone 186 C / Vermelho Coca-Cola);\n• Cálculo Delta E (ΔE): Tolerância de diferença de cor perceptível (ΔE < 1,5 considerado imperceptível a olho nu);\n• Efeito de Fibras Trilobais: O filamento triangular de poliéster reflete a luz mudando de tom conforme o ângulo do ponto;\n• Iluminação Padronizada: Avaliação em cabine de luz normalizada D65 (luz do dia artificial a 6.500K).",
    howItWorks: [
      "1. O cliente fornece o manual de marca com os códigos Pantone oficiais.",
      "2. O programador consulta a tabela de correspondência no software de bordado.",
      "3. O software sugere o código de linha comercial com o menor índice Delta E.",
      "4. O bordador confere a amostra real na cartela física de fios sob iluminação natural ou cabine D65.",
      "5. A máquina é abastecida com o cone de linha correspondente para a produção em lote."
    ],
    beginnerExplanation: "É a 'tradução' das cores oficiais do cliente para as cores reais das linhas que você tem no ateliê! Como na tela do computador as cores são feitas de luz e no bordado usamos linhas de verdade com brilho, essa tabela diz qual o número exato do cone de linha que bate com o logotipo da empresa.",
    applications: [
      "Conversão do vermelho exato de uma multinacional de bebidas (Pantone 186 C) para a linha de poliéster correspondente",
      "Montagem de catálogo de linhas do ateliê com correspondência direta dos códigos Lumina/Setta mais usados no Brasil",
      "Ajuste de cores em brasões militares que exigem tons exatos de verde-oliva e azul-aeronáutica conforme portaria oficial"
    ],
    commonErrors: [
      "Confiar cegamente na cor que aparece na tela de um monitor não calibrado sem checar a cartela de fios física",
      "Trocar a linha de poliéster brilhante por linha de viscose opaca no meio de uma produção em lote",
      "Não avisar o cliente corporativo sobre o índice Delta E quando uma cor Pantone específica não possui linha têxtil 100% idêntica"
    ],
    troubleshootingTips: [
      "Adquira a cartela física de amostras de fios com fios reais enrolados do fabricante que você mais usa no ateliê",
      "Avalie a cor do bordado sempre sob a luz natural do dia para evitar distorções de lâmpadas amareladas",
      "No Wilcom ou Embird, utilize a ferramenta 'Converter para Linha' selecionando a sua marca de linha favorita"
    ],
    dicaArtrelados: "Adquira a cartela física de amostras de fios com fios reais enrolados do fabricante que você mais usa no ateliê (Lumina, Madeira, Ricoma). Coloque a cartela física ao lado do manual impresso do cliente sob a luz do dia (luz natural) para escolher a cor perfeita sem margem de erro.",
    voceSabia: "As linhas de poliéster trilobal têm filamentos com seção transversal triangular que refletem a luz como pequenos prismas: por isso, uma mesma cor de linha pode parecer sutilmente diferente se for bordada na horizontal ou na vertical!",
    practicalExercise: "Abra seu software de matrizes e crie um quadrado de tatami. No seletor de cores, escolha uma cor Pantone clássica (ex: Pantone 021 C - Laranja). Use a ferramenta 'Converter para Linha' e veja qual código de linha da sua marca favorita o programa recomenda.",
    quickSummary: "Conversão técnica entre as cores gráficas Pantone e os códigos de cones de fios dos fabricantes para fidelidade cromática.",
    relatedTerms: ["Mapeamento de Cores", "Linha de Poliéster Trilobal", "Ângulo de Ponto", "Delta E"],
    tags: ["n-017", "pantone", "paleta de linhas", "colorimetria", "madeira", "isacord", "lumina", "artrelados"],
    bibliographicReferences: [
      "PANTONE LLC. Pantone Color Matching System & Textile Color Cross-Reference Guide. Carlstadt: Pantone, 2022.",
      "ARTRELADOS. Colorimetria Têxtil, Escalas Pantone e Mapeamento de Fios de Bordar. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-018-ninho-de-passarinho-embolamento-avesso-birds-nesting",
    code: "N-018",
    term: "Ninho de Passarinho / Embolamento no Avesso (Bird's Nesting)",
    letter: "N",
    level: "Fundamental 🟢",
    category: "Solução de Problemas",
    grammarClass: "Substantivo masculino / Expressão idiomática internacional do bordado.",
    origin: "Da semelhança visual do emaranhado de fios acumulados sob a chapa com um ninho de pássaro ('bird's nest').",
    summary: "Emaranhado caótico de linhas acumulado no avesso e na lançadeira, causado por linha superior sem tensão ou fora do estica-fio; trava a máquina.",
    definition: "Ninho de passarinho (Bird's Nesting) é uma das falhas operacionais mais graves e frequentes no bordado computadorizado, caracterizada pelo acúmulo repentino e maciço de dezenas ou centenas de laçadas de linha superior soltas e emaranhadas no avesso do tecido, dentro da chapa de agulha e ao redor da pista da lançadeira. O acúmulo gera uma maça densa de fios que trava mecanicamente o movimento do bastidor, puxa o tecido para dentro do furo da chapa (engolimento) e pode provocar a quebra da agulha, empenamento da barra de agulha ou travamento com erro de sobrecarga no servomotor do eixo principal.",
    technicalDetails: "Mecânica do colapso de tensão:\n• Causa Primária (95% dos casos): Enfiamento da linha superior com o calcador abaixado (discos tensores fechados);\n• Causa Secundária: Fio superior escapado do estica-fio (Take-up Lever);\n• Efeito Cinemático: O estica-fio não recolhe a folga de linha a cada ciclo; a lançadeira laça metros de linha frouxa sem tensão no fundo da chapa;\n• Risco Mecânico: Danos aos sensores de fim de curso e dentes da correia dentada do pantógrafo se forçado.",
    howItWorks: [
      "1. A linha superior corre livre sem frenagem nos discos de tensão.",
      "2. A agulha desce e a lançadeira gira, puxando um laço largo de linha.",
      "3. Como o estica-fio não consegue recolher o fio solto, a laçada permanece sob a chapa.",
      "4. A cada nova descida de agulha, mais 5 a 10 cm de linha se acumulam na pista da lançadeira.",
      "5. O bolo de fios engole o tecido pelo orifício da chapa, travando os eixos X e Y da máquina."
    ],
    beginnerExplanation: "É aquele pesadelo em que a máquina começa a fazer um barulho estranho e, quando você olha por baixo do bastidor, tem um bolo gigante de linhas emboladas parecendo um ninho de passarinho preso no buraco da máquina! Isso acontece quase sempre porque a linha de cima não passou direito nos discos de tensão ou escapou do ferrinho que sobe e desce (estica-fio).",
    applications: [
      "Diagnóstico rápido de travamento mecânico do bastidor com erro 'Main Motor Overload'",
      "Remoção e limpeza segura de aglomerados de linha na lançadeira sem rasgar o tecido do cliente",
      "Procedimento padrão de passagem de linha sempre com o calcador levantado"
    ],
    commonErrors: [
      "Puxar o bastidor com força bruta enquanto a peça está presa no ninho, entortando os braços do pantógrafo",
      "Tentar cortar o bolo de linha por cima rasgando o tecido do cliente em vez de desmontar a chapa com calma",
      "Continuar bordando após limpar o ninho sem repassar a linha superior desde o cone com o calcador levantado"
    ],
    troubleshootingTips: [
      "DESLIGUE a máquina imediatamente ao ouvir o ruído surdo de travamento",
      "Desparafuse a chapa de agulha e corte as linhas por baixo com tesoura de ponta curva fina",
      "Ao reenviar a linha, LEVANTE a alavanca do calcador para que os discos de tensão se abram e abracem o fio"
    ],
    dicaArtrelados: "Para remover um ninho de passarinho com segurança: DESLIGUE a máquina, desencaixe o bastidor do pantógrafo (sem puxar para cima), corte as linhas por baixo com uma lâmina curva fina ou tesoura de ponta e remova a chapa de agulha para limpar todos os restos de linha da lançadeira antes de recomeçar.",
    voceSabia: "As máquinas de bordar têm uma mola de abertura nos discos de tensão que só se abre quando a alavanca do calcador está LEVANTADA. Por isso, passar a linha com o calcador abaixado é a causa raiz de quase todos os ninhos de passarinho do mundo!",
    practicalExercise: "Com um retalho de tecido teste no bastidor, retire propositalmente a linha superior do estica-fio (deixando-a solta) e dê 10 pontos: pare imediatamente e olhe o avesso para entender visualmente como a falta de recolhimento gera o ninho de passarinho instantâneo.",
    quickSummary: "Emaranhado denso de linhas acumulado no avesso e na lançadeira, causado por linha superior sem tensão ou fora do estica-fio.",
    relatedTerms: ["Estica-Fio", "Tensão de Linha", "Caixa de Bobina", "Lançadeira Rotativa"],
    tags: ["n-018", "ninho de passarinho", "birds nest", "embolamento", "estica-fio", "solucao de problemas", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES. Troubleshooting Guide & Mechanical Safety. Nagoya: Brother, 2022.",
      "ARTRELADOS. Guia de Solução de Problemas Mecânicos e Diagnóstico de Falhas de Ponto. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-019-nylon-monofilamento-fio-invisivel-transparente",
    code: "N-019",
    term: "Nylon Monofilamento / Fio Invisível (Monofilament Nylon Thread)",
    letter: "N",
    level: "Intermediário 🟡",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo masculino composto / Da extrusão de filamento único de poliamida.",
    origin: "Extrusão contínua de polímero de poliamida transparente sem torção multifilar, similar ao fio de pesca de altíssima maleabilidade para alta costura.",
    summary: "Linha transparente de filamento único de poliamida que se camufla na cor do tecido; ideal para apliques invisíveis, quilt e vestidos de noiva.",
    definition: "Nylon monofilamento (popularmente chamado de fio invisível de bordado) é uma linha de poliamida transparente e translúcida composta por um único filamento contínuo extremamente fino e maleável (título variando de 0,08 mm a 0,12 mm de espessura). Sua propriedade óptica de refletir a cor do tecido subjacente torna a linha praticamente imperceptível à vista humana, sendo indispensável para fixação de apliques recortados, acolchoamento livre (quilt invisível), fixação de lantejoulas e soutache, e costuras de embutimento em alta costura.",
    technicalDetails: "Propriedades e ajustes do fio monofilamento:\n• Diâmetro Típico: 0,08 mm a 0,12 mm (título ~100 Denier monofilamento);\n• Tensão Superior Obrigatória: Ajuste ultrabaixo (quase nula, nível 1 a 2) para evitar estiramento elástico;\n• Agulha Recomendada: 65/9 ou 70/10 com olho polido (Microtex ou Metallic);\n• Temperatura de Fusão: ~215°C (exige cuidado extremo ao passar a ferro).",
    howItWorks: [
      "1. O cone de monofilamento é colocado na máquina com redinha elástica de proteção.",
      "2. A tensão superior é ajustada no nível mais frouxo possível.",
      "3. A agulha fina 65/9 ou 70/10 conduz o fio transparente sem raspar na canaleta.",
      "4. Ao fixar o aplique com ponto ziguezague ou ponto de Paris, a linha assume a cor da estampa.",
      "5. A bobina utiliza linha de poliéster comum fina (60wt) na cor do avesso do tecido."
    ],
    beginnerExplanation: "É a famosa 'linha transparente' ou invisível! Parece um fio de pesca bem fininho e macio. Quando você borda com ela, os pontos ficam quase invisíveis porque ela assume a cor do tecido que está embaixo. É maravilhosa para prender apliques sem que a linha apareça por cima.",
    applications: [
      "Fixação de contorno de apliques de tecido estampado sem interferir nas cores da estampa",
      "Quilting e matelassê em colchas nobres onde as linhas não devem criar riscos de cores contrastantes",
      "Bordado de fixação de fitas de cetim, cordões e lantejoulas em vestidos de noiva e alta costura"
    ],
    commonErrors: [
      "Bordar com tensão normal de linha de poliéster, fazendo o nylon esticar e enrugar todo o tecido após sair do bastidor",
      "Passar ferro quente diretamente sobre o bordado com fio de nylon, derretendo os pontos instantaneamente",
      "Usar o fio monofilamento na bobina e na agulha ao mesmo tempo, travando a caixa da bobina"
    ],
    troubleshootingTips: [
      "Reduza a velocidade da máquina para 450-550 PPM para evitar aquecimento por fricção no olho da agulha",
      "Use versão 'Clear' para tecidos claros e versão 'Smoke' (fumê) para tecidos escuros ou pretos",
      "Utilize passador de linha manual se o enfiador automático da máquina não enxergar o fio transparente"
    ],
    dicaArtrelados: "Use sempre uma redinha elástica no cone de nylon monofilamento: por ser muito escorregadio e ter memória elástica, ele tende a desenrolar sozinho do cone e dar nós cegos no suporte da máquina.",
    voceSabia: "Existem duas tonalidades de fio monofilamento invisível: a versão 'Clear' (100% transparente para tecidos claros, brancos e coloridos) e a versão 'Smoke' (fumê translúcido, ideal para tecidos pretos e escuros para não criar reflexos brancos sob a luz).",
    practicalExercise: "Coloque o fio monofilamento transparente na máquina com tensão no nível 1 (bem frouxa). Prenda um retalho de tecido florido com ponto ziguezague aberto de 2,5 mm sobre um tecido liso. Observe como a fixação fica resistente e o ponto praticamente desaparece visualmente sobre a estampa.",
    quickSummary: "Linha transparente de poliamida de filamento único que se camufla na cor do tecido; ideal para apliques invisíveis e quilt com tensão ultrabaixa.",
    relatedTerms: ["Nylon", "Aplique de Tecido (Appliqué)", "Tensão de Linha", "Redinha de Linha (Thread Net)"],
    tags: ["n-019", "fio invisivel", "monofilamento", "nylon transparente", "aplique", "quilt", "artrelados"],
    bibliographicReferences: [
      "SUPERIOR THREADS. Monofilament Invisible Thread Guide and Tensioning. St. George: Superior Threads, 2021.",
      "ARTRELADOS. Fios Especiais: Metálicos, Fotoluminescentes e Monofilamentos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-020-nivelamento-ponto-parada-stop-code-color-change",
    code: "N-020",
    term: "Nivelamento de Ponto de Parada (Stop Code vs. Color Change / M00-M01)",
    letter: "N",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto / Da linguagem CNC de comandos de máquina.",
    origin: "Das instruções binárias de controle numérico (código Stop / M00 e Parada Opcional / M01) utilizadas para pausar a execução e permitir intervenção manual.",
    summary: "Instrução de pausa programada na matriz para intervenção manual (recortar apliques, abrir zíperes, colocar forro) antes de retomar a costura.",
    definition: "Nivelamento de ponto de parada (Stop Code) é a inserção deliberada de uma instrução de pausa programada na matriz de bordado que faz a máquina interromper o ciclo de costura, elevar a barra de agulha e aguardar a intervenção manual do operador, sem necessariamente exigir a troca física de linha de cor no cabeçote. É a base operacional de técnicas como apliques de tecido, colocação de plástico vinil em matrizes ITH, posicionamento de zíperes, inserção de espuma 3D (E.V.A.) e colocação de forros no verso do bastidor.",
    technicalDetails: "Diferenças computacionais dos comandos de máquina:\n• Color Change (Troca de Cor): Movimenta o cabeçote para a próxima agulha e continua o bordado sem parar;\n• Stop Code (Comando de Parada M00): Desliga o motor principal, eleva a agulha e aciona o indicador de espera no painel;\n• Frame Out / Offset: Desloca o pantógrafo trazendo o bastidor para a frente da máquina para facilitar o acesso da tesoura;\n• Compatibilidade: Suporte nativo em arquivos PES, JEF e EXP; em DST é emulado via comando de troca de cor com mesma agulha.",
    howItWorks: [
      "1. A máquina borda a linha de marcação do aplique ou do zíper.",
      "2. Ao ler o código Stop na matriz, a máquina corta o fio e interrompe o motor.",
      "3. O pantógrafo se desloca para a frente (Frame Out) facilitando a visão do operador.",
      "4. O operador posiciona o tecido, recorta sobras ou abre o cursor do zíper.",
      "5. O operador aperta o botão verde de início e a máquina retoma o ciclo perfeitamente alinhada."
    ],
    beginnerExplanation: "É o comando de 'pausa obrigatória' que a gente coloca na matriz para a máquina parar sozinha e esperar pela gente! Ela para quietinha com a agulha no alto para você poder colocar um tecido de aplique, passar uma cola, recortar a sobrinha com a tesoura ou ajeitar um zíper, e só volta a bordar quando você aperta o botão verde de novo.",
    applications: [
      "Parada programada após a linha de marcação para colocar o tecido do aplique de patchwork",
      "Parada programada com ejeção do bastidor (Offset) para recortar o excesso de tecido do aplique rente à costura",
      "Pausa em matriz de nécessaire ITH para abertura manual do cursor do zíper antes da costura final"
    ],
    commonErrors: [
      "Em máquinas industriais lendo arquivos DST, esquecer de configurar que a troca de cor é na verdade um comando Stop",
      "Não programar o corte de linha antes da parada, fazendo a agulha parar com o fio esticado no meio da área de trabalho",
      "Mexer ou forçar o bastidor com as mãos durante o momento da parada, desregulando o zero-máquina"
    ],
    troubleshootingTips: [
      "No Wilcom ou Embird, use o recurso 'Inserir Parada / Stop' nos pontos onde for necessário manuseio de aplique",
      "Sempre corte a linha antes da parada para poder manusear a tesoura com total liberdade sobre o bastidor",
      "Se sua máquina não obedece o código Stop em DST, configure a função 'Parada na Troca de Cor' no painel"
    ],
    dicaArtrelados: "No Wilcom ou Embird, sempre programe uma 'Troca de Cor' com um comando 'Frame Out' (Deslocamento de Bastidor) nos pontos de aplique. Assim, a máquina para e traz o bastidor para a sua frente automaticamente, facilitando o corte do tecido sem exigir que você se incline sobre a chapa de agulha.",
    voceSabia: "No formato de matriz DST (padrão Tajima criado nos anos 1980), não existe um código nativo de cor; todas as instruções são comandos binários de Salto, Ponto e Parada/Troca. As cores coloridas que vemos na tela do computador são apenas atribuídas pelo software visual!",
    practicalExercise: "Crie uma matriz de aplique simples: 1) Círculo em ponto reto (marcação); 2) Inserção de código Stop com corte de linha; 3) Círculo em ziguezague duplo (fixação); 4) Novo Stop; 5) Moldura em satim cheio. Borde e veja a fluidez do processo.",
    quickSummary: "Instrução de pausa programada na matriz para intervenção manual (recortar apliques, abrir zíperes) antes de retomar o bordado.",
    relatedTerms: ["In The Hoop (ITH)", "Aplique de Tecido (Appliqué)", "Corte de Linha (Trim)", "Painel de Comando"],
    tags: ["n-020", "stop code", "ponto de parada", "frame out", "aplique", "ith", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Embroidery Studio: Advanced Machine Commands and Functions. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Engenharia de Paradas, Apliques e Comandos CNC no Bordado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-021-no-show-mesh-entretela-poliester-emalhada",
    code: "N-021",
    term: "No-Show Mesh (Entretela de Poliéster Emalhada Transparente)",
    letter: "N",
    level: "Fundamental 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo feminino / Do inglês 'no-show mesh' (malha que não aparece).",
    origin: "Desenvolvida nos EUA como alternativa ultrafina, macia e semitransparente para camisetas esportivas e malhas finas sem marcar o avesso.",
    summary: "Entretela recortável de poliéster emalhado ultrafina, macia e semitransparente; não marca camisetas claras, não coça a pele e mantém a forma após lavagens.",
    definition: "No-Show Mesh (ou Poly Mesh) é uma entretela especial de poliéster 100% sintético com estrutura de malha fina emalhada multidirecional semitransparente, de toque extremamente macio e alta estabilidade dimensional. Ao contrário das entretelas grossas tradicionais de celulose/TNT que deixam um 'quadrado duro' visível e desconfortável no avesso de camisetas leves e de cores claras, a No-Show Mesh mantém a sustentação permanente dos pontos de bordado sem transparecer na frente da peça e sem arranhar a pele do usuário.",
    technicalDetails: "Propriedades da entretela No-Show Mesh:\n• Composição: 100% Filamentos contínuos de Poliéster emalhados em relevo diagonal;\n• Gramatura: 40g/m² a 50g/m² com toque sedoso;\n• Tipo de Remoção: Recortável (Cut-Away) com tesoura de ponta curva ou bico de pato;\n• Estabilidade Dimensional: Não encolhe, não deforma e suporta centenas de ciclos de lavagem industrial.",
    howItWorks: [
      "1. A folha de No-Show Mesh é colada suavemente no avesso da camiseta com spray temporário.",
      "2. A peça é colocada no bastidor sem esticar a malha de algodão ou poliamida.",
      "3. A máquina borda o logotipo com sob-pontos abertos e compensação de repuxo adequada.",
      "4. Ao retirar do bastidor, o excesso de entretela é recortado em formato oval a 5 mm do bordado.",
      "5. A camiseta fica com o avesso macio, flexível e sem o 'quadrado rígido' visível na frente."
    ],
    beginnerExplanation: "É a entretela 'mágica' e macia para camisetas fininhas e roupas de bebê! Ela parece uma telinha ou gaze bem fininha de tecido sintético. Quando você borda com ela, ela segura os pontos com firmeza, mas não fica aquele quadrado duro e áspero no avesso que coça a pele ou fica aparecendo pela frente da camiseta branca.",
    applications: [
      "Bordado de logomarcas em camisetas de poliamida esportiva (Dry-Fit / UV Protection)",
      "Bordado delicado em bodies e macacões de malha 100% algodão para recém-nascidos sem irritar a pele do bebê",
      "Personalização de camisas sociais de tecido fino de cambraia ou linho claro"
    ],
    commonErrors: [
      "Tentar rasgar a No-Show Mesh à mão como se fosse rasga-fácil, deformando o bordado (ela DEVE ser recortada com tesoura)",
      "Cortar a No-Show Mesh rente demais aos nós de arremate, correndo o risco de cortar os pontos da própria matriz",
      "Usar entretela grossa de papelão em camiseta de malha fina de verão em vez de adotar a No-Show Mesh"
    ],
    troubleshootingTips: [
      "Ao recortar no avesso, utilize uma tesoura bico de pato (Duckbill) para não correr o risco de furar o tecido da camiseta",
      "Recorte sempre em formato arredondado ou oval para que as pontas não dobrem após a lavagem",
      "Para bordados densos em malhas elásticas, coloque uma folha de rasga-fácil por baixo apenas para dar firmeza no bastidor"
    ],
    dicaArtrelados: "Ao recortar a No-Show Mesh no avesso da peça pronta, use uma tesoura de ponta arredondada (estilo 'pato' / Duckbill) e corte em formato arredondado/oval ao redor do desenho: cantos arredondados nunca espetam a pele e não marcam o tecido ao passar a ferro.",
    voceSabia: "A entretela No-Show Mesh foi adotada como padrão oficial nos uniformes dos atletas olímpicos porque o poliéster emalhado resiste a mais de 100 lavagens em água quente sem perder a memória elástica nem deformar os logotipos bordados dos patrocinadores.",
    practicalExercise: "Borde o mesmo logotipo de 5.000 pontos em duas camisetas de malha iguais: na primeira, use entretela rasga-fácil de 50g comum; na segunda, use No-Show Mesh colada com spray temporário. Lave as duas camisetas na máquina de lavar e compare a estabilidade e o toque de ambas.",
    quickSummary: "Entretela recortável de poliéster emalhado ultrafina e macia; não marca camisetas claras, não coça e resiste a lavagens.",
    relatedTerms: ["Entretela Recortável (Cut-Away)", "Malha Piquet", "Dry-Fit e Tecidos Tecnológicos", "Tesoura Bico de Pato"],
    tags: ["n-021", "no-show mesh", "poly mesh", "entretela macia", "camisetas", "bebe", "artrelados"],
    bibliographicReferences: [
      "MADEIRA GARNWERKE. Stabilizers and Backings Application Guide. Freiburg: Madeira, 2022.",
      "ARTRELADOS. Guia de Estabilização para Malhas Finas e Tecidos Tecnológicos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-022-nodulo-inicio-ponto-cauda-linha-embutida",
    code: "N-022",
    term: "Nódulo de Início de Ponto e Cauda Embutida (Tailing & Trimming Algorithm)",
    letter: "N",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto / Dos algoritmos de controle de movimento e corte.",
    origin: "Dos controladores computacionais de cabeçotes de bordadeiras industriais dedicados à gestão e embutimento automático da cauda de início de fio.",
    summary: "Algoritmo e mecanismo que controla a ponta inicial da linha superior, embutindo-a na entretela ou retendo-a para evitar fiapos soltos sobre o bordado.",
    definition: "Nódulo de início de ponto e cauda embutida refere-se à dinâmica de inserção mecânica e controle algorítmico da ponta inicial da linha superior (cauda de início / thread tail) nos primeiros 3 a 5 pontos de um novo bloco de cor. Consiste na retenção eletropneumática ou mecânica da ponta do fio por uma mola prensa-fio ou gancho coletor no cabeçote, seguida pela execução de pontos iniciais que recobrem e embutem a ponta do fio sob o corpo do bordado, ou pela ejeção da cauda para o corte manual sem formar nós volumosos no direito da peça.",
    technicalDetails: "Dinâmica cinemática da cauda inicial:\n• Comprimento Típico da Cauda: 15 mm a 25 mm após o corte;\n• Início Lento (Slow Start): Os primeiros 2 a 3 pontos são executados a 200-300 PPM para garantir a laçada da bobina;\n• Cauda Embutida (In-Stitch Tailing): A agulha cruza sobre o fio solto, travando-o no verso antes de acelerar;\n• Retenção Mecânica: Mola prensa-fio superior (Picker/Upper Thread Clamp) que segura o fio cortado até o primeiro ponto.",
    howItWorks: [
      "1. A máquina posiciona a agulha no início da nova cor com a ponta da linha presa no clamp superior.",
      "2. A agulha penetra suavemente em baixa velocidade, descendo o fio para a lançadeira.",
      "3. A lançadeira laça o fio e puxa a cauda inicial para o avesso da entretela.",
      "4. A máquina executa o nó de entrada (Tie-in) cobrindo a pontinha com os primeiros pontos da matriz.",
      "5. A máquina acelera para a velocidade normal sem deixar fios soltos na face do bordado."
    ],
    beginnerExplanation: "É o jeito que a máquina cuida daquela pontinha de linha que sobra quando ela começa uma cor nova! Se a máquina não prender essa pontinha direito, ela fica jogada por cima do desenho parecendo um fiapo solto que você tem que ficar caçando e cortando com a tesourinha depois.",
    applications: [
      "Configuração no painel para corte curto de cauda inicial em monogramas delicados sobre toalhas de linho",
      "Uso da mola prensa-fio superior para segurar o fio de início em máquinas industriais multi-agulhas",
      "Ativação do algoritmo de arremate de entrada lento no software de digitalização para ocultar o nó sob o satim"
    ],
    commonErrors: [
      "Deixar a cauda inicial longa demais solta sobre o tecido, fazendo a máquina costurar milhares de pontos por cima do fiapo solto",
      "Ajustar a faca de corte para deixar a cauda extremamente curta, fazendo a linha escapar do olho da agulha na primeira descida",
      "Puxar a cauda de linha com a tesoura enquanto a máquina está acelerando os primeiros pontos, entortando a agulha"
    ],
    troubleshootingTips: [
      "Nas máquinas de 1 agulha, segure a ponta da linha suavemente com a mão esquerda durante os 3 primeiros pontos",
      "Verifique se o clamp ou mola prensa-fio superior no cabeçote não está com fiapos acumulados",
      "No software, ative a função 'Nó de Entrada / Tie-in' em estilo discreto no miolo do desenho"
    ],
    dicaArtrelados: "Nas máquinas domésticas de uma agulha, segure a pontinha da linha superior suavemente com a mão esquerda apenas durante os primeiros 3 pontinhos e solte: isso garante que o nó inicial fique 100% limpo no avesso sem fiapos na frente.",
    voceSabia: "As máquinas industriais japonesas de última geração possuem pequenos tubos de vácuo ultrassônicos em cada cabeçote que sugam a pontinha cortada da linha no exato milissegundo do corte, deixando o direito da peça 100% limpo e sem necessidade de limpeza pós-produção!",
    practicalExercise: "No painel da sua máquina, verifique a opção 'Comprimento da Cauda de Linha de Início' (Short / Medium / Long). Faça três testes de início de ponto com cada configuração e observe qual entrega o início mais limpo no seu tecido preferido.",
    quickSummary: "Algoritmo e mecanismo que controla a ponta inicial da linha superior, embutindo-a na entretela para evitar fiapos soltos sobre o bordado.",
    relatedTerms: ["Nó de Entrada (Tie-in)", "Corte de Linha (Trim)", "Mola Prensa-Fio", "Limpeza Pós-Bordado"],
    tags: ["n-022", "cauda de linha", "inicio de ponto", "tie-in", "picker", "trimming", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Automatic Thread Trimming & Upper Thread Clamp Systems. Nagoya: Tajima, 2021.",
      "ARTRELADOS. Mecatrônica de Corte, Retenção e Arremates no Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-023-nivelamento-pressao-calcador-presser-foot",
    code: "N-023",
    term: "Nivelamento da Pressão do Calcador (Presser Foot Pressure)",
    letter: "N",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo masculino composto / Da mecânica de precisão da barra do calcador.",
    origin: "Do sistema de mola calibrada ou pistão pneumático que ajusta a força vertical exercida pelo calcador contra a chapa de agulha.",
    summary: "Ajuste da força vertical da mola do calcador sobre o tecido; evita que o tecido suba com a agulha (flagging) e previne marcas de esmagamento.",
    definition: "Nivelamento da pressão do calcador é a regulagem da intensidade da força mecânica vertical exercida pela mola do calcador sobre o sanduíche têxtil (tecido + entretela + manta) durante o ciclo em que a agulha penetra e sobe. Uma pressão equilibrada deve ser suficiente para conter firmemente o tecido contra a chapa de agulha no momento da subida da barra de agulha (eliminando o 'Flagging' ou içamento do tecido), mas suave o bastante para não esmagar as fibras, não deixar marcas de arrasto do calcador e permitir o deslocamento livre e fluido do pantógrafo.",
    technicalDetails: "Dinâmica da pressão do calcador:\n• Força Nominal: 15 N a 35 N (ajustável via parafuso superior de mola ou atuador eletrônico);\n• Tecidos Leves (Seda, Voil): Pressão suave para não deixar marcas brilhantes de arrasto;\n• Tecidos Espessos (Couro, Bonés): Pressão mais firme para estabilizar a penetração pesada da agulha 90/14;\n• Prevenção de Flagging: Mantém o tecido imóvel na subida da agulha para permitir a abertura da laçada na lançadeira.",
    howItWorks: [
      "1. O operador avalia a espessura e a textura do material a ser bordado.",
      "2. Gira o parafuso de regulagem de pressão no topo do cabeçote ou ajusta no menu eletrônico.",
      "3. A mola interna comprime a barra do calcador com a força calibrada.",
      "4. Quando a agulha sobe, o calcador mantém o tecido plano contra a chapa de agulha.",
      "5. A laçada elíptica se expande com perfeição e a máquina não pula pontos.",
      "6. No momento do salto do pantógrafo, o calcador sobe ligeiramente liberando o tecido."
    ],
    beginnerExplanation: "É a força com que o 'pezinho' da máquina aperta o tecido para baixo enquanto a agulha sobe e desce. Se o pezinho apertar muito fraco, o tecido fica pulando e os pontos falham; se apertar com força demais, ele amassa o tecido, deixa marcas feias e não deixa o bastidor andar direito.",
    applications: [
      "Aumento da pressão do calcador para bordar bonés estruturados e tecidos de lona grossa para evitar que o tecido pule",
      "Alívio da pressão do calcador para bordar veludo nobre e toalhas felpadas sem deixar marcas de esmagamento no pelo",
      "Regulagem fina para couro sintético e materiais emborrachados que agarram no metal do calcador"
    ],
    commonErrors: [
      "Deixar a mesma pressão padrão de fábrica para bordar tecidos levíssimos (como organza) e materiais ultragrossos (como couro com manta)",
      "Apertar o parafuso de pressão ao máximo para tentar resolver problemas de entretela fraca ou agulha rombuda",
      "Ignorar o atrito do calcador em tecidos sintéticos que começam a chiar durante o deslocamento rápido do bastidor"
    ],
    troubleshootingTips: [
      "Se o calcador deixa uma marca de arrasto no tecido ao redor das letras, alivie a pressão da mola ou use fita de Teflon",
      "Se o tecido fica subindo e descendo ritmicamente junto com a agulha (flagging) e a máquina pula pontos, aumente a pressão",
      "Para bordados em E.V.A. 3D Puff, eleve a altura do calcador e use pressão moderada para não esmagar a espuma antes do ponto"
    ],
    dicaArtrelados: "Para bordar sintéticos e vinil sem marcas de arrasto do calcador metálico, cole um pequeno pedaço de fita de Teflon (fita antiaderente) na sola inferior do calcador: isso reduz o coeficiente de atrito a quase zero sem alterar a pressão da mola.",
    voceSabia: "Em bordadeiras industriais de alta tecnologia com sistema de controle eletrônico digital, a pressão e a altura do calcador são ajustadas automaticamente por motores de passo controlados pelo arquivo de bordado, adaptando-se a diferentes espessuras dentro da mesma matriz!",
    practicalExercise: "Pegue um pedaço de tecido atoalhado felpudo. Borde uma pequena linha com a pressão do calcador no nível máximo e outra com a pressão aliviada. Observe como na primeira a felpa fica esmagada permanentemente ao redor dos pontos e na segunda a felpa permanece fofa e íntegra.",
    quickSummary: "Ajuste da força da mola do calcador sobre o tecido; evita o efeito bandeira (flagging) e previne marcas de esmagamento em tecidos nobres.",
    relatedTerms: ["Altura do Calcador", "Flagging (Efeito Bandeira)", "Pantógrafo", "Ponto Pulado (Skipped Stitch)"],
    tags: ["n-023", "pressao do calcador", "calcador", "flagging", "mecanica", "calibracao", "artrelados"],
    bibliographicReferences: [
      "JANOME SEWING MACHINE CO. Technical Service & Presser Foot Dynamics Manual. Tokyo: Janome, 2022.",
      "ARTRELADOS. Mecânica do Calcador, Controle de Flagging e Dinâmica de Contato Têxtil. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-024-normalizacao-arquivos-matriz-format-conversion",
    code: "N-024",
    term: "Normalização de Arquivos de Matriz (Format Conversion & Stitch Recalculation)",
    letter: "N",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo feminino composto / Da computação gráfica e engenharia de software.",
    origin: "Dos algoritmos de interpolação e recálculo de densidade vetorial aplicados a arquivos binários de bordado computadorizado (DST, PES, JEF, EXP).",
    summary: "Processo de conversão e recálculo proporcional de densidade ao redimensionar matrizes, evitando pontos ralos ou excessivamente amontoados.",
    definition: "Normalização de arquivos de matriz é o procedimento computacional de conversão estruturada, recálculo de densidade, validação de limites de coordenadas X/Y e limpeza de dados espúrios em arquivos de bordado. Diferencia a simples 'conversão cega de formato' (que apenas traduz instruções de ponto sem alterar a quantidade de pontos) do verdadeiro 'recálculo com normalização inteligente', no qual o software reconhece os objetos de satim e tatami, recomputando a densidade proporcionalmente ao novo tamanho e eliminando micro-pontos menores que 0,3 mm que travam a máquina.",
    technicalDetails: "Parâmetros computacionais da normalização:\n• Recálculo de Densidade: Ajuste automático do número de pontos para manter o espaçamento fixo (ex: 0,40 mm) ao ampliar ou reduzir;\n• Filtragem de Micro-Pontos: Remoção algorítmica de pontos menores que 0,3 mm que causam quebra de linha;\n• Re-escala Segura: Permite alterações superiores a 20% sem perda de cobertura ou dureza mecânica;\n• Centralização Automática: Redefinição do ponto de início e fim no centro matemático (0,0) do bastidor.",
    howItWorks: [
      "1. O arquivo compilado (.PES, .DST, .JEF) é aberto em software profissional (Wilcom, Embird).",
      "2. O software converte as trilhas de pontos em objetos vetoriais editáveis aproximados.",
      "3. O usuário altera as dimensões (ex: ampliando em 30%).",
      "4. O motor de geração recomputa as colunas de satim e malhas de tatami, inserindo novos pontos.",
      "5. O arquivo normalizado é exportado no formato exato da máquina com a densidade perfeita.",
      "6. A máquina costura a matriz com a mesma maciez e acabamento do arquivo original."
    ],
    beginnerExplanation: "É o jeito certo de mudar o tamanho ou o formato da matriz sem estragar os pontos! Se você só aumentar ou diminuir uma matriz pronta sem recalcular, os pontos vão ficar ou ralos demais com o tecido aparecendo ou tão amontoados que quebram a agulha. A normalização recalcula tudo para a matriz ficar perfeita de novo.",
    applications: [
      "Conversão e normalização de uma matriz de 10x10 cm (PES) para rodar em bastidor 13x18 cm sem perder densidade",
      "Exportação de matrizes com extensão .DST para máquinas industriais com filtragem de micro-pontos menores que 0,4 mm",
      "Ajuste e centralização das coordenadas de início (0,0) no centro do bastidor para evitar colisões no pantógrafo"
    ],
    commonErrors: [
      "Reduzir uma matriz complexa em 50% direto no painel da máquina sem recálculo, criando uma pedra dura que quebra agulhas",
      "Usar conversores online gratuitos que corrompem as ordens de parada (Stop) e juntam todas as cores em um único bloco",
      "Ignorar os limites de salto máximo (alguns formatos não aceitam pontos maiores que 12,7 mm sem saltos)"
    ],
    troubleshootingTips: [
      "Guarde sempre a matriz original no formato vetorial do seu software (.EMB, .EOF) antes de exportar o compilado",
      "Se precisar redimensionar mais de 15%, abra o arquivo no software e use a opção 'Recalcular Pontos / Stitch Processor'",
      "Valide o arquivo no simulador visual antes de enviar para o pen drive da máquina"
    ],
    dicaArtrelados: "Sempre guarde a matriz original no formato vetorial editável do seu software (ex: .EMB no Wilcom, .JAN no Digitizer, .EOB no Embird). Se precisar alterar o tamanho, altere SEMPRE no arquivo vetorial e só depois gere o arquivo compilado (.PES, .DST, .JEF) para a máquina.",
    voceSabia: "O formato de matriz .DST (Tajima) foi desenvolvido para ser lido originalmente a partir de fitas de papel perfurado na década de 1980 e é até hoje o formato mais universal e robusto da indústria têxtil global!",
    practicalExercise: "Pegue uma matriz compilada em .PES de 10 cm. Faça duas cópias: reduza a primeira para 5 cm usando um conversor simples sem recálculo e reduza a segunda no Wilcom/Embird com 'Recalcular Pontos' ativado. Compare a contagem final de pontos de ambas.",
    quickSummary: "Processo de conversão e recálculo proporcional de densidade ao redimensionar matrizes, evitando pontos ralos ou excessivamente amontoados.",
    relatedTerms: ["Extensões de Arquivo (DST, PES, JEF)", "Densidade de Ponto", "Micro-Pontos (Short Stitches)", "Compensação de Encolhimento"],
    tags: ["n-024", "normalizacao", "conversao", "recalculo de pontos", "dst", "pes", "wilcom", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. File Formats, Stitch Interpolation and Data Optimization. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Arquitetura de Formatos Binários, Conversões e Normalização Vetorial. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "n-025-nylon-ballistic-cordura-1000d-bordados-militares",
    code: "N-025",
    term: "Nylon Ballistic / Cordura 1000D (Tecidos Técnicos Militares e Táticos)",
    letter: "N",
    level: "Avançado 🔴",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo masculino composto / Da fiação de poliamida texturizada militar de alta tenacidade.",
    origin: "Criado pela DuPont durante a Segunda Guerra Mundial para trajes de proteção contra estilhaços balísticos e aprimorado como a marca registrada Cordura de 1000 Denier.",
    summary: "Tecido técnico de poliamida de altíssima tenacidade para artigos militares e táticos; requer agulhas reforçadas de titânio (90/14), linhas de poliéster e alta compensação de repuxo.",
    definition: "Nylon Ballistic e Cordura 1000D são tecidos técnicos de poliamida ultradensa com fiação de alta tenacidade (geralmente título de 1000 Denier em ligamento tafetá ou sarja pesada com revestimento posterior de poliuretano impermeabilizante). São os substratos mais robustos e abrasivos utilizados no bordado de artigos táticos, coletes balísticos, mochilas militares, bolsas de resgate, coturnos e estojos de equipamentos pesados. Sua extrema rigidez e tenacidade impõem severos desafios mecânicos à agulha e ao sistema de tração do fio.",
    technicalDetails: "Parâmetros técnicos para bordar Cordura 1000D e Nylon Ballistic:\n• Título do Fio do Tecido: 1000 Denier (filamento contínuo de poliamida texturizada a ar);\n• Agulha Recomendada: 90/14 ou 100/16 com revestimento de Nitreto de Titânio (PD / GEBEDUR) ponta RG ou SD1;\n• Linha Recomendada: Poliéster trilobal 40wt com acabamento lubrificado ou poliamida bonderizada;\n• Compensação de Repuxo: 0,50 mm a 0,60 mm para compensar o empuxo da lona rígida;\n• Velocidade da Máquina: 500 a 650 PPM para evitar deflexão e aquecimento de agulha.",
    howItWorks: [
      "1. A lona rígida de Cordura 1000D é fixada em bastidor magnético ou por flutuação reforçada.",
      "2. A matriz aplica sob-pontos densos em tatami duplo para isolar a textura áspera da lona.",
      "3. A agulha de titânio 90/14 penetra a densa trama sem entortar nem quebrar a ponta.",
      "4. O fio de poliéster lubrificado corre suavemente pela canaleta sem sofrer abrasão mecânica.",
      "5. A matriz finaliza com cores sólidas e acabamento impermeável preservado."
    ],
    beginnerExplanation: "É o tecido super grosso e quase indestrutível usado em mochilas militares, coletes à prova de balas e bolsas táticas! Bordar nele é como bordar em uma lona blindada: você precisa de agulha grossa e reforçada de titânio, linha muito resistente e uma máquina bem firme para não entortar nada.",
    applications: [
      "Bordado de brasões e identificação de unidades táticas em mochilas militares de Cordura 1000D",
      "Personalização de coletes modulares e capas de proteção balística para segurança privada e forças policiais",
      "Bordado de logomarcas em malas de viagem para expedições pesadas e esportes radicais"
    ],
    commonErrors: [
      "Tentar bordar Cordura 1000D com agulha comum 75/11 fina, causando deflexão severa da agulha contra a chapa e quebras constantes",
      "Usar linha de viscose delicada em artigos táticos, que se rompe facilmente com o atrito da lona e desbota em lavagens pesadas",
      "Prender a lona de nylon balístico em bastidores plásticos fracos sem aperto suficiente, fazendo o bastidor abrir no meio do bordado"
    ],
    troubleshootingTips: [
      "Adote bastidores magnéticos de alta pressão para prender a lona sem deformar o tecido nem quebrar os aros plásticos",
      "Use agulhas de titânio com ponta levemente afiada (RG) e aplique silicone spray nos discos tensores para fios difíceis",
      "Aumente a compensação de repuxo no software para evitar que os contornos fiquem afastados do preenchimento"
    ],
    dicaArtrelados: "Para prender Cordura e tecidos táticos pesados sem danificar os aros do bastidor, utilize bastidores magnéticos de neodímio de alta pressão ou fixe o material por flutuação reforçada com entretela pesada e costura de alinhavo perimetral duplo (Basting Stitch).",
    voceSabia: "O tecido 'Ballistic Nylon' recebeu esse nome porque foi projetado na década de 1940 para proteger os pilotos da Força Aérea contra estilhaços de artilharia antiaérea (flak jackets) antes da invenção do Kevlar!",
    practicalExercise: "Pegue um pedaço de Cordura ou lona pesada de mochila. Tente bordar uma estrela de 4 cm com agulha 75/11 e linha comum; depois troque para uma agulha 90/14 de Titânio e linha de poliéster lubrificada. Sinta a diferença de estabilidade e som da máquina.",
    quickSummary: "Tecido técnico de poliamida de altíssima tenacidade para artigos militares e táticos; requer agulhas de titânio 90/14 e alta compensação de repuxo.",
    relatedTerms: ["Nylon", "Niquelagem e Revestimento de Agulhas", "Compensação de Encolhimento", "Bastidor Magnético"],
    tags: ["n-025", "cordura", "nylon ballistic", "militar", "tatico", "1000d", "titanio", "artrelados"],
    bibliographicReferences: [
      "INVISTA CORDURA BRAND. Fabric Specifications and High-Tenacity Processing Guide. Wichita: Invista, 2021.",
      "ARTRELADOS. Bordado em Artigos Táticos, Cordura e Fibras Balísticas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

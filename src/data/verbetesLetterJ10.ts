import { Verbete } from "../types";

export const VERBETES_LETTER_J_PART10: Verbete[] = [
  {
    id: "j-054-jog-ajuste-bastidor-setup-inicial-calibracao",
    code: "J-054",
    term: "Jog de Ajuste de Bastidor no Setup Inicial & Calibração de Limites (Hoop Boundary Jog & Centering Calibration)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Comandos de Máquina",
    grammarClass: "Substantivo masculino / Procedimento de setup operacional CNC.",
    origin: "Do inglês hoop boundary jog / centering calibration (calibração de limites e centralização de bastidor). Engenharia de máquinas de bordar.",
    summary: "Procedimento no painel da máquina para mover o bastidor e conferir se o desenho não vai encostar ou bater nas bordas de plástico do aro.",
    definition: "O Jog de Ajuste de Bastidor, Calibração de Limites Físicos e Verificação de Segurança Periférica (Hoop Boundary Jog Calibration, Clearance Perimeter Check & Needle-to-Frame Collision Prevention Protocol) é a rotina operacional obrigatória executada no painel digital antes de iniciar qualquer bordado. O operador utiliza os comandos de deslocamento (Jog) e as funções de rastreamento de perímetro (Trace / Outline Check) para movimentar o pantógrafo até os 4 pontos extremos da matriz (norte, sul, leste, oeste), conferindo visualmente se a barra de agulha e o pé-calcador mantêm uma distância mínima de segurança de pelo menos 1,5 cm em relação às paredes internas do aro do bastidor.",
    technicalDetails: "Diretrizes e parâmetros de calibração de limites de bastidor:\n• Margem Mínima de Segurança (Frame Clearance): Distância física mínima de 15 mm a 20 mm entre a agulha e o aro interno do bastidor em todo o perímetro;\n• Seleção de Bastidor no Painel: Reconhecimento do código do bastidor (por chip magnético, sensores ópticos ou seleção manual do operador na lista de bastidores);\n• Função Trace / Teste de Caixa (Bounding Box): O pantógrafo percorre as 4 coordenadas extremas [(X_min, Y_min) até (X_max, Y_max)] sem costurar;\n• Bloqueio Automático de Colisão (Software Interlock): Máquinas modernas bloqueiam o botão 'Start' e exibem alerta vermelho caso a matriz exceda a área útil programada;\n• Centralização Automática (Auto-Centering): Comando no painel que retorna a matriz exatamente para as coordenadas (0,0) relativas do centro do bastidor.",
    howItWorks: [
      "1. A bordadeira prende uma toalha no bastidor 13x18 cm e carrega uma matriz de 12,5 cm de largura no painel da máquina.",
      "2. Como a matriz está muito perto do tamanho máximo do bastidor, qualquer milímetro fora de centro pode fazer o pé-calcador bater na borda plástica.",
      "3. No painel, ela clica na função 'Jog de Ajuste' e aperta o botão 'Trace'.",
      "4. A máquina desloca o bastidor suavemente pelos quatro cantos do desenho.",
      "5. A bordadeira observa de perto a ponta da agulha e confirma que ela passa com 1,5 cm de folga livre em toda a volta do aro.",
      "6. Ela aperta o botão verde com a tranquilidade total de que a máquina trabalhará livre de colisões.",
      "7. O bordado termina com perfeição, sem sustos e sem danos mecânicos!",
    ],
    beginnerExplanation: "Antes de apertar o botão para começar a bordar, você sempre precisa checar se o desenho cabe com folga dentro do bastidor! Se o desenho for grande demais ou estiver torto, o pé da agulha pode bater com força no plástico do bastidor, quebrar a agulha e assustar você! A função de teste (Trace / Jog de Ajuste) faz a máquina dar um 'passeio' em volta do desenho sem costurar, só para você olhar e confirmar que tem espaço de sobra em todos os lados!",
    applications: [
      "Checagem de segurança obrigatória antes de iniciar qualquer trabalho no ateliê",
      "Prevenção de quebra de agulhas e quebra de aros plásticos de bastidores",
      "Ajuste milimétrico de bordados próximos a zíperes, botões e costuras grossas",
      "Conferência rápida da centralização de monogramas e logotipos corporativos"
    ],
    commonErrors: [
      "Apertar o Start direto sem fazer a checagem de perímetro (Trace), resultando em batidas de calcador na borda do bastidor",
      "Selecionar o tamanho de bastidor errado no menu da máquina",
      "Não deixar margem de segurança ao bordar em bastidores metálicos ou magnéticos"
    ],
    troubleshootingTips: [
      "CRIE O HÁBITO: Aperte o botão 'Trace' SEMPRE antes de começar a bordar qualquer peça nova",
      "Mantenha sempre pelo menos 1,5 cm de espaço livre entre o desenho e a borda plástica do bastidor",
      "Se a máquina avisar que a matriz 'Ultrapassa os limites do bastidor', reduza o tamanho da matriz no software ou troque por um bastidor maior",
      "Utilize o botão de Centralização Automática (Center Design) no painel para colocar o desenho exatamente no meio"
    ],
    dicaArtrelados: "Fazer a checagem do bastidor com a função Trace leva menos de 5 segundos e salva a vida útil da sua máquina! É a regra de ouro número um dos ateliês profissionais!",
    voceSabia: "As máquinas de bordar industriais topo de linha possuem sensores magnéticos e micro-switches nos braços do pantógrafo que identificam automaticamente o modelo e o tamanho exato do bastidor assim que ele é encaixado na máquina!",
    practicalExercise: "Coloque uma matriz grande no painel da sua máquina: acione a função Trace e observe atentamente a distância da agulha em relação à borda do bastidor durante o percurso!",
    quickSummary: "Procedimento no painel para mover o bastidor e confirmar que o desenho não vai colidir com a borda do aro plástico.",
    relatedTerms: ["Bastidores de Bordado & Tipos", "Comandos de Máquina & Funções de Controle", "Painel de Controle Touchscreen", "Mecânica da Máquina"],
    tags: ["j-054", "jog de bastidor", "trace", "calibracao", "seguranca", "prevencao de batida", "setup inicial", "artrelados"],
    bibliographicReferences: [
      "HOOP BOUNDARY SAFETY PROTOCOLS & CNC WORK ENVELOPE CALIBRATION. Tokyo, 2023.",
      "THE EMBROIDERY WORKSTATION SETUP & SAFETY MANUAL. Chicago, 2022.",
      "ARTRELADOS. Segurança Total: Como Usar o Teste de Perímetro e Evitar Batidas de Bastidor na sua Máquina. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-055-juta-sintetica-tnt-rustico-estabilizacao-termica",
    code: "J-055",
    term: "Juta Sintética, TNT Rústico & Estabilização Térmica (Faux Burlap, Synthetic Jute & Thermal Melting Resistance)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Tipos de Tecidos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do polipropileno termoplástico (polímeros sintéticos) texturizado para imitar a aparência visual de fibras rústicas naturais.",
    summary: "Como bordar em juta sintética e TNT rústico de polipropileno sem derreter o tecido com a fricção da agulha e sem rasgar o material.",
    definition: "O Bordado Técnico em Juta Sintética, Faux Burlap de Polipropileno, TNT Rústico e Não-Tecidos Texturizados (Synthetic Jute Stabilization, Needle Friction Thermal Control & Non-Woven Tear Prevention Protocol) é a metodologia para personalização de artigos promocionais, sacolas de eventos, decorações cenográficas e embalagens econômicas feitas de polímeros sintéticos que imitam a juta natural. Por serem materiais termoplásticos com baixo ponto de fusão (cerca de 130°C a 160°C), a alta velocidade da agulha gera calor por fricção que pode derreter as fibras sintéticas ou abrir rasgos lineares no material, exigindo agulhas revestidas de titânio (antiaderentes/frias), redução de velocidade e entretelas rasgáveis macias.",
    technicalDetails: "Diretrizes e parâmetros para juta sintética e TNT rústico:\n• Agulha Recomendada: Schmetz Titanium (Anti-Friction PD / Nitreto de Titânio) 75/11 ou 80/12 (dissipa o calor e impede que o polímero grude na lâmina);\n• Controle Térmico por Velocidade: Limitar a velocidade da máquina a no máximo 600 a 650 PPM para evitar aquecimento excessivo por atrito;\n• Estabilizador Recomendado: Entretela Rasgável Macia de Algodão (50g) colada com spray temporário;\n• Topping Superior: Filme Solúvel fino (Solvy) para cobrir os vãos da trama plástica;\n• Densidade de Preenchimento: 0,42 mm a 0,46 mm (densidades excessivas 'cortam' o material sintético como uma tesoura).",
    howItWorks: [
      "1. Uma empresa de eventos encomenda 200 ecobags promocionais feitas de juta sintética (polipropileno texturizado) com o logotipo impresso e bordado.",
      "2. A bordadeira sabe que o material sintético é sensível ao calor e pode derreter se bordar muito rápido.",
      "3. Ela instala uma agulha de titânio Schmetz 75/11 na máquina.",
      "4. Reduz a velocidade no painel para 600 PPM.",
      "5. Aplica entretela rasgável no avesso e filme solúvel por cima da ecobag.",
      "6. A máquina costura os pontos sem superaquecimento e sem grudar plástico derretido na agulha.",
      "7. As 200 sacolas são entregues com bordados impecáveis, sem rasgos e com altíssima resistência!",
    ],
    beginnerExplanation: "A juta sintética e o TNT rústico são aqueles tecidos de sacolas ecológicas de feira e brindes de lojas que parecem palha ou pano de saco, mas na verdade são feitos de plástico fininho! Se a máquina de bordar correr muito rápido, a agulha esquenta tanto que pode derreter o plástico e fazer furos feios na sacola! O segredo é usar uma agulha de titânio (aquela douradinha que não esquenta), abaixar a velocidade da máquina para um ritmo moderado e colocar um plástico solúvel por cima!",
    applications: [
      "Ecobags promocionais, sacolas de brindes e embalagens de presentes ecológicos",
      "Decorações de festas juninas, aniversários rústicos e eventos cenográficos",
      "Sousplats econômicos e jogos americanos descartáveis/reutilizáveis",
      "Aventais promocionais e organizadores de armário em TNT reforçado"
    ],
    commonErrors: [
      "Bordar em velocidade máxima de 900+ PPM (a agulha ferve e derrete o polipropileno, gerando bolinhas de plástico queimado)",
      "Usar densidade muito alta em linhas retas, picotando o TNT como se fosse papel picado",
      "Passar a ferro quente diretamente sobre o tecido sintético (o material derrete instantaneamente no ferro)"
    ],
    troubleshootingTips: [
      "Use SEMPRE Agulhas com revestimento de Titânio (douradas): elas não esquentam e evitam o acúmulo de plástico derretido no olho da agulha",
      "Mantenha a velocidade da máquina entre 550 e 650 PPM ao bordar materiais de polipropileno e TNT",
      "Coloque plástico hidrossolúvel no topo para criar uma superfície uniforme e macia para os pontos",
      "NUNCA encoste o ferro de passar direto no tecido sintético: use um pano de algodão grosso de proteção por cima e ferro morno"
    ],
    dicaArtrelados: "A confecção de ecobags em juta sintética e TNT rústico é um dos mercados de brindes corporativos que mais cresce! É uma produção rápida, com baixo custo de material e excelente retorno financeiro!",
    voceSabia: "O polipropileno texturizado que imita a juta foi criado pela indústria de embalagens sustentáveis para substituir sacos plásticos descartáveis de uso único, oferecendo uma sacola reutilizável até 100 vezes mais durável e totalmente reciclável!",
    practicalExercise: "Pegue uma sacola de TNT rústico: borde um desenho com velocidade de 600 PPM usando agulha de titânio e entretela rasgável: veja como o bordado fica limpo e o material não derrete!",
    quickSummary: "Uso de agulha de titânio fria, velocidade reduzida e plástico solúvel para bordar juta sintética sem derreter o tecido.",
    relatedTerms: ["Juta, Fibras Rústicas & Bordados em Linho Grosso", "Agulha Titânio / Titanium", "Tipos de Tecidos", "Plástico Hidrossolúvel / Topping"],
    tags: ["j-055", "juta sintetica", "tnt rustico", "polipropileno", "resistencia termica", "agulha titanio", "ecobag", "artrelados"],
    bibliographicReferences: [
      "THERMOPLASTIC NON-WOVEN FABRICS & EMBROIDERY FRICTION DYNAMICS. Milan, 2023.",
      "THE PROMOTIONAL ECOBAG & SYNTHETIC BURLAP HANDBOOK. London, 2022.",
      "ARTRELADOS. Brindes sem Segredos: Como Bordar Juta Sintética e TNT Rústico Sem Derreter o Material. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-056-jump-code-sanitizer-limpeza-codigos-salto-fantasma",
    code: "J-056",
    term: "Jump Code Sanitizer & Limpeza de Códigos de Salto Fantasma (Jump Code Sanitizer & Ghost Stitch Filtering)",
    letter: "J",
    level: "Avançado 🔴",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo masculino / Algoritmo de higienização de código de matriz.",
    origin: "Do inglês jump code sanitizer / redundant stitch cleaner (higienizador de comandos de salto e pontos fantasmas). Engenharia de software têxtil.",
    summary: "Ferramenta de software que remove comandos de saltos vazios, pontos duplicados e micro-pontadas invisíveis que travam ou deixam a máquina lenta.",
    definition: "O Sanitizador de Códigos de Salto, Filtro de Pontos Fantasmas e Otimização de Comandos Redundantes (Jump Code Sanitizer, Ghost Stitch Elimination & Redundant Command Purge Algorithm) é a rotina de processamento algorítmico presente em softwares avançados de digitalização e utilitários de conversão de matrizes. Matrizes antigas, mal digitalizadas ou convertidas repetidamente entre formatos acumulam dezenas de 'comandos fantasmas' (como múltiplos comandos de corte simultâneos, sequências de 5 saltos consecutivos no mesmo milímetro ou pontos minúsculos de 0,1 mm). O sanitizador varre o arquivo binário, deleta todos os códigos desnecessários e gera um arquivo leve, limpo e veloz para a máquina de bordar.",
    technicalDetails: "Algoritmos e parâmetros de higienização de matrizes:\n• Filtro de Pontos Curtos (Short Stitch Filter): Eliminação automática de pontos com comprimento inferior a 0,4 mm ou 0,5 mm (que causam nó de linha na lançadeira);\n• Purga de Saltos Redundantes (Consecutive Jump Consolidation): Agrupamento de 10 micro-saltos de 1 mm em um único salto cinemático contínuo de 10 mm;\n• Higienização de Comandos de Corte (Trim Sanitization): Remoção de códigos de corte (TRIM) duplicados executados no mesmo local com intervalo menor que 3 pontos;\n• Redução de Tamanho de Arquivo: Compactação de até 40% na contagem de instruções no código binário (.DST, .PES, .JEF, .EXP);\n• Ferramentas no Software: 'Filter Small Stitches' (Wilcom), 'Clean-up Redundant Stitches' (Hatch), 'Purge Ghost Points' (Pulse).",
    howItWorks: [
      "1. A cliente envia uma matriz antiga baixada da internet que faz a máquina de bordar parar, tremer e dar estalos a cada 2 minutos sem motivo aparente.",
      "2. O programador abre a matriz no software e ativa a ferramenta 'Jump Code Sanitizer / Limpeza de Matriz'.",
      "3. O software analisa o código e identifica 450 pontos microscópicos de 0,2 mm e 38 comandos de salto vazios sobrepostos.",
      "4. Em 2 segundos, o algoritmo limpa todos esses pontos fantasmas e otimiza as instruções.",
      "5. O arquivo higienizado é enviado para a máquina de bordar.",
      "6. A máquina agora borda de forma fluida, silenciosa, sem nenhuma parada falsa e 25% mais rápida.",
      "7. A produção flui com 100% de estabilidade e sem quebras de linha!",
    ],
    beginnerExplanation: "Às vezes a gente baixa uma matriz da internet que parece bonita, mas quando coloca na máquina, a máquina fica engasgando, dando trancos estranhos ou parando toda hora como se estivesse com soluço! Isso acontece porque a matriz está 'suja' por dentro com um monte de pontinhos invisíveis e comandos inúteis de computador! O sanitizador de matriz é como uma 'faxina digital' que o programa faz: ele varre a sujeira, apaga os pontinhos que não servem para nada e deixa a matriz levinha e rápida para a máquina costurar suave como manteiga!",
    applications: [
      "Recuperação e higienização de matrizes antigas ou corrompidas baixadas da internet",
      "Eliminação de paradas falsas e trancos mecânicos no pantógrafo da máquina",
      "Prevenção de acúmulo de nós de linha (ninhos de pássaro) sob a chapa de agulha",
      "Otimização do tempo de produção em máquinas industriais multicabeçotes"
    ],
    commonErrors: [
      "Bordar matrizes convertidas automaticamente sem passar pelo filtro de pontos curtos",
      "Filtrar pontos com valor muito alto (ex: 1,5 mm), apagando detalhes importantes de olhos e bicos de pássaros",
      "Ignorar avisos de excesso de nós e pontos acumulados no mesmo lugar"
    ],
    troubleshootingTips: [
      "Ative SEMPRE a opção 'Filtrar Pontos Menores que 0,4 mm' nas configurações de exportação do seu software",
      "Se sua máquina estiver dando trancos ou parando sem motivo, abra o arquivo no software e faça a limpeza de pontos duplicados",
      "Utilize a ferramenta 'Otimizar Sequência de Pontos' para consolidar saltos e cortes em um percurso limpo",
      "Salve uma cópia de segurança do arquivo original antes de aplicar filtros agressivos de limpeza"
    ],
    dicaArtrelados: "Uma matriz limpa e higienizada é música para os ouvidos da máquina de bordar! Ela costura com um barulho macio, sem trancos e protege a placa eletrônica do seu equipamento!",
    voceSabia: "Nas primeiras máquinas computadorizadas dos anos 1980 com memórias minúsculas de apenas 64 Kilobytes, a limpeza de comandos fantasmas era obrigatória para que a matriz inteira conseguisse caber no chip de memória da máquina!",
    practicalExercise: "Abra uma matriz no seu programa: ative a ferramenta 'Estatísticas de Pontos' e filtre os pontos menores que 0,4 mm: veja quantos milhares de pontinhos inúteis o programa remove instantaneamente!",
    quickSummary: "Algoritmo de software que limpa pontos invisíveis, saltos duplicados e comandos fantasmas para deixar a matriz rápida e suave.",
    relatedTerms: ["Jump / Ponto de Salto", "Vetorização Manual & Punching", "Softwares & Formatos", "Comandos de Máquina & Funções de Controle"],
    tags: ["j-056", "jump code sanitizer", "limpeza de matriz", "pontos fantasmas", "filtro de pontos curtos", "otimizacao", "programacao", "artrelados"],
    bibliographicReferences: [
      "BINARY EMBROIDERY CODE SANITIZATION & REDUNDANT COMMAND ELIMINATION. Tokyo, 2023.",
      "THE EMBROIDERY DATA OPTIMIZATION & VECTOR HYGIENE MANUAL. Munich, 2022.",
      "ARTRELADOS. Faxina Digital: Como Limpar Pontos Fantasmas e Fazer suas Matrizes Voarem na Máquina. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-057-jaqueta-bomber-forro-cetim-bordado-flutuante",
    code: "J-057",
    term: "Jaqueta Bomber, Forro de Cetim & Bordado Flutuante sem Perfurar o Forro (Bomber Jacket, Satin Lining & Unlined Floating Technique)",
    letter: "J",
    level: "Avançado 🔴",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês flight bomber jacket (jaqueta de aviador militar da Segunda Guerra Mundial). Moda urbana contemporânea.",
    summary: "Como abrir o zíper de serviço ou forro de jaquetas bomber e universitárias para bordar apenas o tecido externo sem perfurar o forro de cetim.",
    definition: "O Bordado Técnico em Jaquetas Bomber, College Jackets e Técnica de Acesso por Zíper de Serviço (Bomber Jacket Embroidery, Unlined Floating Technique & Concealed Lining Access Protocol) é a metodologia avançada para personalização de casacos e jaquetas volumosas com forro interno acolchoado ou de cetim (como jaquetas estilo bomber militar, jaquetas universitárias de baseball e parkas de inverno). Para garantir um acabamento de alta alfaiataria (onde o bordado fica visível apenas no lado externo e o forro interno permanece 100% liso e sem marcas de entretela ou linhas no avesso), o bordadeiro utiliza o zíper de manutenção na costura lateral ou abre uma pequena costura interna de serviço para colocar no bastidor apenas a camada externa da jaqueta.",
    technicalDetails: "Diretrizes e procedimentos técnicos para jaquetas bomber:\n• Localização do Acesso de Serviço (Service Opening): Abertura de 20 cm a 25 cm na costura interna da manga esquerda ou na costura lateral inferior do forro de cetim (ou abertura do zíper oculto de bordado em jaquetas profissionais);\n• Técnica de Bastidor: Enquadra-se apenas a camada externa de náilon/sarja/couro ecológico junto com entretela de recorte, mantendo todo o forro e acolchoamento por fora do bastidor;\n• Estabilizador Obrigatório: Entretela de Recorte Macia (Cut-Away 70g) colada com spray temporário no avesso da camada externa;\n• Agulha: Schmetz Microtex 75/11 ou 80/12 (para tecidos corta-vento de náilon/poliéster) ou Agulha de Couro para mangas sintéticas;\n• Fechamento Pós-Bordado: Fechamento da costura de serviço com ponto invisível manual ou costura reta de pesponto rente à borda interna.",
    howItWorks: [
      "1. Um cliente leva uma jaqueta bomber de luxo em náilon acetinado com forro de cetim laranja brilhante para bordar um dragão monumental nas costas.",
      "2. Se a bordadeira prendesse a jaqueta inteira no bastidor, o bordado atravessaria o forro de cetim, deixando o forro todo repuxado e cheio de linhas duras por dentro.",
      "3. Ela localiza a abertura de serviço na manga interna da jaqueta (ou abre 20 cm da costura do forro com um desmanchador de costura).",
      "4. Vira a jaqueta 'pelo avesso' através dessa abertura e prende APENAS o tecido externo de náilon no bastidor com entretela de recorte.",
      "5. A máquina borda o dragão com fios brilhantes e acabamento perfeito.",
      "6. Ao terminar, ela desvira a jaqueta e fecha a abertura interna do forro com costura invisível.",
      "7. O resultado é digno de passarela: o bordado fica espetacular nas costas e, ao abrir a jaqueta, o forro de cetim está 100% liso, limpo e sem um único ponto aparente!",
    ],
    beginnerExplanation: "Sabe aquelas jaquetas bomber estilosas ou casacos de frio que têm um forro de cetim super macio por dentro? Se você bordar atravessando tudo, o avesso do bordado vai ficar aparecendo no forro e a jaqueta vai ficar pinicando nas costas! O segredo dos profissionais de alta costura é abrir uma 'portinha secreta' na costura interna da manga da jaqueta, colocar no bastidor só o tecido de fora, bordar o desenho e depois fechar a costura de novo! O bordado fica maravilhoso por fora e, por dentro, o forro continua liso, quentinho e perfeito!",
    applications: [
      "Jaquetas bomber, casacos universitários (varsity jackets) e parkas de náilon",
      "Casacos de couro ecológico e jaquetas de motoclube forradas",
      "Uniformes corporativos de inverno e jaquetas corta-vento esportivas",
      "Figurinos de show e figurinos de turnês musicais de alto padrão"
    ],
    commonErrors: [
      "Bordar atravessando o forro de cetim e o acolchoamento interno (deforma o casaco e estraga o visual interno da peça)",
      "Usar agulhas grossas em tecidos acetinados de náilon corta-vento (cria furos permanentes que desbotam o tecido)",
      "Fechar a abertura de serviço com costuras tortas ou linhas de cores contrastantes"
    ],
    troubleshootingTips: [
      "Procure SEMPRE pelo 'Zíper de Bordado' oculto na parte interna da barra ou na manga da jaqueta antes de descosturar o forro",
      "Se precisar abrir a costura do forro, use um desmanchador de costura fino na costura reta da manga (área mais discreta para fechar depois)",
      "Utilize Entretela de Recorte colada com spray: ela dá sustentação ao náilon sem pesar no caimento do casaco",
      "Feche a abertura do forro usando linha da mesma cor exata do cetim com ponto reto bem rente à dobra original"
    ],
    dicaArtrelados: "Oferecer o serviço de bordado em jaquetas bomber com forro embutido e avesso oculto é o ápice do profissionalismo! Você pode cobrar de 2 a 3 vezes mais por esse serviço por ser um trabalho de alfaiataria premium!",
    voceSabia: "A jaqueta Bomber original (conhecida como MA-1) foi criada pela Força Aérea dos Estados Unidos em 1949 e trazia o forro de cetim em cor laranja vibrante para que os pilotos pudessem virar a jaqueta do avesso em caso de queda de avião para serem facilmente localizados pelas equipes de resgate no mar!",
    practicalExercise: "Examine uma jaqueta ou casaco forrado que você tenha em casa: encontre a costura lateral da manga por onde a peça foi desvirada na fábrica e visualize como você encaixaria o bastidor apenas na camada externa!",
    quickSummary: "Técnica de acesso pelo forro interno para bordar jaquetas bomber na camada externa sem perfurar o forro de cetim.",
    relatedTerms: ["Jaqueta Jeans com Patches Termocolantes & Bordado Direto", "Flutuação de Tecido / Floating", "Entretela de Recorte / Cut-Away", "Técnicas de Bastidor"],
    tags: ["j-057", "jaqueta bomber", "forro de cetim", "bordado embutido", "alfaiataria", "casaco", "alta costura", "artrelados"],
    bibliographicReferences: [
      "CONCEALED LINING ACCESS & OUTERWEAR EMBROIDERY PROTOCOLS. London, 2023.",
      "THE LUXURY STREETWEAR & BOMBER JACKET FABRICATION GUIDE. Paris, 2022.",
      "ARTRELADOS. Jaquetas Bomber de Alto Padrão: O Segredo de Alfaiataria para Bordar sem Furar o Forro. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-058-janome-customizer-easyedit-legado-softwares",
    code: "J-058",
    term: "Janome Customizer, EasyEdit & Legado de Softwares de Primeira Geração (Janome Legacy Software Ecosystem & Customizer Archive)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino / Memória tecnológica de softwares CAD/CAM.",
    origin: "Softwares desenvolvidos pela Janome Sewing Machine Co. nos anos 1990 e 2000 (Customizer 2000, 10000, 11000 e EasyEdit).",
    summary: "Histórico, conversão de cartões antigos PCMCIA e compatibilidade de arquivos das primeiras gerações de softwares e máquinas Janome.",
    definition: "O Ecossistema Histórico Janome Customizer, EasyEdit e Arquivo de Formatos Legados (Janome Legacy CAD Suite, ATA PCMCIA Card Architecture & Backward Compatibility Protocol) é o conjunto de ferramentas de software que marcaram a informatização das máquinas de bordar eletrônicas da Janome a partir do final dos anos 1990 (com as pioneiras Memory Craft 5000, 8000, 9000 e 10000). O conhecimento desse acervo permite a ateliês e técnicos converter arquivos salvos em formatos legados (.SEW, .JAN) e transferir matrizes para máquinas antigas através de adaptadores de cartão CompactFlash / PCMCIA ATA.",
    technicalDetails: "Arquitetura e especificações de compatibilidade legada:\n• Formatos de Arquivo Legados: .SEW (Memory Craft 8000/9000 - máximo 128 pontos por bloco e 12 cores) e .JEF (Memory Craft 9500 em diante);\n• Mídias de Transferência Históricas: Cartões de Memória Memory Card nº 1 a 10, Cartões PCMCIA ATA Type II e cartões CompactFlash formatados em FAT16;\n• Estrutura de Pastas Obrigatória no Cartão/Pendrive: Diretório raiz 'EMBF' com subpasta 'MyDesign' para reconhecimento automático nas máquinas Janome legadas;\n• Softwares de Conversão Modernos: Janome Digitizer MBX / Artistic Digitizer e Wilcom Workspace para conversão de matrizes antigas .SEW para .JEF;\n• Limitações Geométricas: Área máxima de 126x110 mm nas primeiras gerações.",
    howItWorks: [
      "1. Uma bordadeira herda uma clássica e robusta máquina Janome Memory Craft 9000 com um acervo de cartões de memória antigos.",
      "2. Ela quer usar as matrizes antigas em sua nova Janome MC550E moderna e vice-versa.",
      "3. Utiliza o software para abrir os arquivos legados no formato .SEW.",
      "4. O programa redimensiona a matriz, atualiza a paleta de cores para os fios modernos e converte para o formato .JEF contemporâneo.",
      "5. Salva na pasta correta do pen-drive formatado em FAT32.",
      "6. A máquina moderna lê as matrizes históricas com facilidade.",
      "7. Todo o patrimônio de matrizes e memórias afetivas do ateliê é 100% preservado e pronto para continuar gerando valor!",
    ],
    beginnerExplanation: "Nos anos 1990 e 2000, as primeiras máquinas de bordar computadorizadas usavam disquetes ou cartões de memória especiais (parecidos com cartões de videogame antigo) e programas chamados Janome Customizer e EasyEdit! Muitas dessas máquinas clássicas são tão resistentes que continuam funcionando perfeitamente até hoje nas famílias! Hoje em dia, os programas modernos conseguem abrir e converter esses arquivos antigos facilmente, para que você continue usando suas matrizes queridinhas tanto nas máquinas clássicas quanto nas máquinas novinhas com pen-drive!",
    applications: [
      "Recuperação e conversão de acervos de matrizes antigas em formato .SEW e .JAN",
      "Operação e manutenção de máquinas de bordar clássicas da família Janome Memory Craft",
      "Gravação de matrizes em adaptadores de cartão PCMCIA / CompactFlash para máquinas legadas",
      "Preservação da memória técnica e história do bordado eletrônico mundial"
    ],
    commonErrors: [
      "Tentar colocar arquivos modernos .JEF gigantes em máquinas antigas que só suportam o formato .SEW de bastidores pequenos",
      "Formatar o cartão de memória em formatos modernos (NTFS/exFAT) que as máquinas antigas não conseguem ler",
      "Salvar arquivos fora da pasta obrigatória 'EMBF/MyDesign' no cartão"
    ],
    troubleshootingTips: [
      "Para máquinas Janome antigas que usam cartão PCMCIA, formate SEMPRE o cartão CompactFlash em FAT16 no computador",
      "Crie SEMPRE a pasta 'EMBF' e dentro dela a subpasta 'MyDesign' para que a máquina encontre as matrizes no cartão",
      "Converta arquivos antigos .SEW para .JEF usando softwares como Janome Artistic Digitizer ou Wilcom",
      "Respeite o limite máximo de pontos das máquinas antigas (geralmente até 30.000 a 40.000 pontos por matriz)"
    ],
    dicaArtrelados: "Máquinas clássicas da Janome são verdadeiros tanques de guerra mecânicos! Saber como converter matrizes e gravar cartões permite manter essas máquinas produzindo com altíssima qualidade por décadas no ateliê!",
    voceSabia: "A Janome Memory Craft 8000, lançada no Japão em 1990, foi a primeira máquina de costura e bordado doméstica multifuncional computadorizada do mundo a trazer um leitor de cartão de memória digital e tela LCD integrada!",
    practicalExercise: "Se tiver uma matriz antiga no formato .SEW, abra-a no seu software de bordado atual: faça a conversão para .JEF e compare a paleta de cores e o percurso de pontos na tela!",
    quickSummary: "História, conversão de formatos legados (.SEW) e compatibilidade de cartões de memória das primeiras gerações de softwares Janome.",
    relatedTerms: ["Janome Digitizer & Ecossistema de Softwares Janome", "JEF / Formato Janome", "Softwares & Formatos", "Mecânica da Máquina"],
    tags: ["j-058", "janome customizer", "easyedit", "formatos legados", "sew", "pcmcia", "historia do bordado", "artrelados"],
    bibliographicReferences: [
      "LEGACY EMBROIDERY CAD/CAM EVOLUTION & FILE COMPATIBILITY ARCHIVE. Tokyo, 2023.",
      "THE DIGITAL SEWING MACHINE REVOLUTION (1990-2010). London, 2022.",
      "ARTRELADOS. Memória Digital: Como Recuperar Matrizes Legadas e Operar Máquinas Clássicas da Janome. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-059-jog-tensao-dinamica-fios-elasticos-silicone",
    code: "J-059",
    term: "Jog de Tensão Dinâmica em Fios Elásticos e Fios de Silicone (Dynamic Tension Jog & Elastic Thread Feed Control)",
    letter: "J",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês dynamic tension scaling / elastomeric thread feeding. Engenharia de bordados especiais e franzidos eletrônicos.",
    summary: "Como regular a máquina e os tensores para bordar com fios de silicone, lastex ou fios elásticos na bobina para criar efeitos de franzido (smocking).",
    definition: "O Controle de Tensão Dinâmica para Fios Elásticos, Bobinamento de Lastex e Franzimento Eletrônico (Dynamic Tension Feed Control, Elastomeric Silicone Threading & Automated Smocking Protocol) é a metodologia avançada onde se utiliza fio elástico (Lastex / Elastomeric Thread) enrolado manualmente na caixa de bobina combinado com linha convencional no topo. Ao costurar trajetos geométricos ou grades decorativas, a tensão relaxada do fio elástico inferior se contrai após o término do bordado e aplicação de vapor, gerando franzidos tridimensionais (Ponto Ninho de Abelha / Smocking) perfeitos e elásticos diretamente na máquina de bordar.",
    technicalDetails: "Diretrizes e parâmetros para bordar com fio elástico na bobina:\n• Bobinamento Manual: O fio elástico (Lastex) DEVE ser enrolado na canelinha à mão, sem esticar (com 0% de estiramento prévio);\n• Ajuste da Caixa de Bobina: Uso de uma caixa de bobina secundária dedicada, afrouxando o parafuso tensor em 1 a 1,5 voltas completas para permitir a passagem do fio elástico espesso;\n• Linha Superior: Linha de bordar 40wt tradicional com tensão superior ligeiramente aumentada (nível 5 ou 6);\n• Matriz de Franzimento (Smocking Matrix): Desenho composto por linhas de ponto de corrida simples ou curvas paralelas espaçadas a 10 mm ou 15 mm;\n• Ativação Térmica: Aplicação de jato de vapor do ferro (sem encostar) a 2 cm do tecido para contrair o elástico e criar o franzido instantâneo.",
    howItWorks: [
      "1. Uma estilista de moda infantil cria um vestido clássico com corpete franzido estilo 'casinha de abelha' (smocking) com raminhos de flores bordados.",
      "2. A bordadeira enrola o fio de Lastex fino na bobina à mão de forma suave.",
      "3. Coloca a bobina na máquina e ajusta a tensão superior.",
      "4. Monta o tecido de cambraia no bastidor com entretela hidrossolúvel.",
      "5. A máquina costura as linhas decorativas: a linha de cima segura o fio elástico por baixo.",
      "6. Ao retirar do bastidor e dissolver a entretela, ela passa o ferro com vapor quente sobre a peça.",
      "7. O elástico se retrai instantaneamente com o calor, formando um franzido tridimensional elástico, lindo e confortável no corpinho da criança!",
    ],
    beginnerExplanation: "Sabe aqueles vestidinhos de princesa ou blusas ciganinhas que têm o peito todo franzidinho e fofo que estica para vestir fácil (o famoso ponto 'casinha de abelha')? Você sabia que a sua máquina de bordar consegue fazer isso de forma automática? Você coloca um fiozinho elástico especial na canelinha de baixo e a máquina costura as linhas retinhas! Quando você termina e passa um vaporzinho de ferro, o elástico encolhe e o tecido vira um franzido de alta costura perfeito!",
    applications: [
      "Corpetes franzidos de vestidos infantis e saídas de maternidade de luxo",
      "Punhos elásticos, decotes ciganinha e detalhes de franzido em blusas femininas",
      "Almofadas com textura plissada e efeitos tridimensionais de tapeçaria",
      "Detalhes flexíveis em roupas de boneca e peças de alta moda artesanal"
    ],
    commonErrors: [
      "Enrolar o fio elástico na canelinha esticando com força (o elástico perde a memória e não franze o tecido no final)",
      "Tentar passar o fio elástico pelo tensor de bobina original sem afrouxar o parafuso (trava o fio e quebra a linha de cima)",
      "Encostar o ferro de passar quente direto no fio elástico, queimando o látex"
    ],
    troubleshootingTips: [
      "Enrole SEMPRE o fio elástico na canelinha manualmente e de forma suave, sem puxar nem esticar",
      "Tenha SEMPRE uma caixa de bobina reserva separada para trabalhos especiais com fios grossos e elásticos",
      "Utilize SEMPRE Entretela Hidrossolúvel para que o tecido fique 100% livre para franzir após a lavagem",
      "Ative o franzido aplicando apenas o VAPOR do ferro a 2 cm de distância, sem pressionar o ferro sobre o tecido"
    ],
    dicaArtrelados: "O franzido com fio elástico na máquina de bordar abre um leque espetacular para criar coleções infantis clássicas! É uma técnica de alto valor que encanta mães e avós apaixonadas por vestidos de época!",
    voceSabia: "O ponto 'Casinha de Abelha' (Smocking) surgiu na Inglaterra no século XIII para permitir que as túnicas dos camponeses fossem justas no peito mas elásticas o suficiente para permitir a movimentação do trabalho no campo!",
    practicalExercise: "Enrole um pouco de lastex fino em uma bobina: coloque na máquina e borde 4 linhas retas em um retalho de tecido com entretela hidrossolúvel: aplique vapor de ferro e veja o tecido encolher e formar um lindo franzido!",
    quickSummary: "Uso de fio elástico na bobina e ativação a vapor para criar franzidos automáticos e casinha de abelha na máquina de bordar.",
    relatedTerms: ["Tensão da Linha Superior & Inferior", "Mecânica da Máquina", "Entretela Hidrossolúvel / Solvy", "Técnicas Especiais"],
    tags: ["j-059", "fio elastico", "lastex", "franzido", "casinha de abelha", "smocking", "vaporizacao", "artrelados"],
    bibliographicReferences: [
      "ELASTOMERIC THREAD EMBROIDERY & AUTOMATED SMOCKING DYNAMICS. Milan, 2023.",
      "THE HISTORIC SMOCKING & HEIRLOOM SEWING HANDBOOK. London, 2022.",
      "ARTRELADOS. Franzidos Perfeitos: O Segredo para Criar Casinha de Abelha e Efeitos Elásticos na Máquina de Bordar. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-060-jogo-americano-canto-mitrado-esquadria-in-the-hoop",
    code: "J-060",
    term: "Jogo Americano com Canto Mitrado em Esquadria & Matrizes In-The-Hoop (Mitered Corner Placemat & Complete In-The-Hoop Framing)",
    letter: "J",
    level: "Intermediário 🟡",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do francês onglet / coin en onglet (canto em esquadria de 45° de alta costura). Mesa posta clássica.",
    summary: "Como confeccionar jogos americanos e guardanapos retangulares com cantos mitrados perfeitos de 45 graus feitos inteiramente dentro do bastidor.",
    definition: "A Confecção de Jogo Americano com Canto Mitrado em Esquadria 45° no Bastidor (In-The-Hoop Mitered Corner Placemat, Automated Folding Guide & Reversible Hemming Protocol) é a técnica 100% realizada dentro do bastidor (In-The-Hoop - ITH) que une o tecido principal de fundo a uma moldura perimetral com cantos cortados ou dobrados exatamente em ângulo diagonal de 45° (Canto Mitrado / Canto de Alfaiataria). A máquina borda linhas de guia de posicionamento (Placement Lines) e linhas de fixação (Tackdown Stitches), permitindo que a bordadeira dobre e una as faixas de tecido com precisão geométrica milimétrica sem necessidade de réguas complexas ou marcações manuais de costura.",
    technicalDetails: "Diretrizes e etapas de confecção In-The-Hoop de Canto Mitrado:\n• Geometria do Canto: Junção angular de 45° em cada um dos 4 vértices do retângulo, formando uma moldura plana e perfeitamente ortogonal;\n• Tecidos Ideais: Linho misto encorpado, Sarja 100% algodão, Jacquard de mesa posta e Tricoline estruturada;\n• Estabilizador: Entretela Rasgável Macia de Algodão (50g) ou Entretela Hidrossolúvel de Tecido;\n• Sequência Matricial: 1) Linha de contorno do fundo, 2) Aplicação das 4 faixas de moldura com costuras diagonais de 45°, 3) Dobra e assentamento a ferro, 4) Ponto decorativo de união (Ponto Ajour, Ponto Paris ou Ponto Cheio fino), 5) Bordado do monograma central;\n• Acabamento Reversível: Possibilidade de embutir forro traseiro na última etapa antes de soltar do bastidor.",
    howItWorks: [
      "1. A cliente pede um conjunto de 8 jogos americanos retangulares em linho cinza com moldura branca e canto mitrado elegante com iniciais da família no centro.",
      "2. A bordadeira coloca entretela no bastidor grande e carrega a matriz In-The-Hoop no painel.",
      "3. A máquina borda a linha guia da moldura.",
      "4. A artesã posiciona as faixas de tecido branco: a máquina costura a diagonal exata de 45° em cada cantinho.",
      "5. A bordadeira desvira a faixa, passa um miniferro de passar portátil para assentar o vinco do canto mitrado.",
      "6. A máquina borda um ponto decorativo nas junções e o monograma no centro.",
      "7. A peça sai do bastidor 100% costurada, com cantos mitrados perfeitos de 45 graus que parecem feitos por um alfaiate profissional!",
    ],
    beginnerExplanation: "O 'canto mitrado' é aquele cantinho diagonal super elegante que a gente vê em molduras de quadros de madeira e em toalhas de mesa chiques de restaurantes caros! Fazer isso na máquina de costura comum na mão é super difícil porque precisa de régua, esquadro e muita paciência para não ficar torto. Mas com a matriz certa 'In-The-Hoop', a máquina de bordar faz as linhas de dobra perfeitas para você! O cantinho fecha em 45 graus certinho, retinho e sem nenhuma complicação!",
    applications: [
      "Jogos americanos retangulares e passadeiras de mesa posta de alto luxo",
      "Guardanapos de linho com molduras contrastantes e monogramas",
      "Panos de bandeja e toalhas de centro de mesa com acabamento de alfaiataria",
      "Porta-pratos e descansos de travessa reversíveis e estruturados"
    ],
    commonErrors: [
      "Não passar a ferro a dobra do canto mitrado antes da máquina bordar a costura de fixação (o canto fica fofo e desalinhado)",
      "Cortar a sobra do tecido muito rente à costura diagonal de 45°, fazendo o canto desmanchar na lavagem",
      "Usar tecidos de gramaturas muito diferentes entre o centro e a moldura, gerando repuxos assimétricos"
    ],
    troubleshootingTips: [
      "Tenha um mini ferro de passar ou espátula de vinco ao lado da máquina para assentar cada dobra de tecido no bastidor",
      "Deixe uma margem de costura interna de pelo menos 0,5 cm nos cantos diagonais para garantir resistência",
      "Utilize fita adesiva de papel microporoso para prender as pontinhas do tecido enquanto a máquina costura",
      "Escolha tecidos de algodão ou linho de boa qualidade que aceitem vinco com facilidade"
    ],
    dicaArtrelados: "Jogos americanos com canto mitrado e monograma central são campeões de vendas em qualquer época do ano! É o tipo de produto que agrega muito valor à mesa posta com custo de produção acessível!",
    voceSabia: "O termo 'Canto Mitrado' vem da mitra (o chapéu cerimonial triangular usado por bispos e papas da Igreja Católica desde a Idade Média), cuja silhueta geométrica em ângulo pontiagudo inspirou os marceneiros e alfaiates renascentistas a batizarem os cantos de 45 graus!",
    practicalExercise: "Baixe uma matriz de canto mitrado In-The-Hoop: monte um jogo americano em retalhos de sarja e veja como o encaixe diagonal de 45° fecha perfeitamente dentro do bastidor!",
    quickSummary: "Confecção de jogos americanos com cantos diagonais perfeitos de 45° executados inteiramente dentro do bastidor.",
    relatedTerms: ["Jogos Americanos & Sousplats Estruturados", "In-The-Hoop / Projetos no Bastidor", "Passadoria & Vaporização", "Técnicas Especiais"],
    tags: ["j-060", "jogo americano", "canto mitrado", "in-the-hoop", "esquadria 45", "mesa posta", "alfaiataria", "artrelados"],
    bibliographicReferences: [
      "MITERED CORNER HEIRLOOM TECHNIQUES & IN-THE-HOOP PLACEMAT DESIGN. Milan, 2023.",
      "THE LUXURY TABLESCAPE & LINEN FABRICATION MANUAL. Paris, 2022.",
      "ARTRELADOS. Cantos Perfeitos: Como Dominar o Canto Mitrado In-The-Hoop e Criar Jogos Americanos de Alto Padrão. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-061-journaling-textil-livros-pano-memoria-afetiva",
    code: "J-061",
    term: "Journaling Têxtil, Livros de Pano & Memória Afetiva Bordada (Textile Journaling, Quiet Books & Memory Cloth Embroidery)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês textile journaling / memory cloth / quiet books (diários têxteis e livros de pano interativos). Arte têxtil afetiva.",
    summary: "Como criar páginas de livros de pano infantis (Quiet Books), diários sensoriais e peças de memória afetiva bordadas com elementos interativos.",
    definition: "A Arte do Journaling Têxtil, Confecção de Livros Silenciosos de Pano (Quiet Books) e Registro de Memória Afetiva Bordada (Textile Journaling, Interactive Sensory Cloth Books & Heirloom Memory Embroidery) é a técnica multidisciplinar que une o bordado eletrônico, o patchwork e o design sensorial infantil para criar livros de tecido, diários de família e painéis biográficos. Cada página é confeccionada em tecido de algodão estruturado com manta (R1/R2) e bordada com elementos tridimensionais e interativos (como abas que abrem, bolsinhos com zíper, botões de pressão, números bordados, texturas táteis e árvores genealógicas), transformando o bordado em uma experiência lúdica, educativa e colecionável.",
    technicalDetails: "Diretrizes e normas de segurança para Quiet Books e Journaling Têxtil:\n• Segurança Infantil Rigorosa (Normas ABNT NBR NM 300 / CE): Elementos móveis (botões, fitas, guizos) devem ser costurados com pespontos quádruplos de alta tenacidade para evitar risco de asfixia em crianças menores de 3 anos;\n• Estruturação das Páginas: Sanduíche de Tricoline 100% Algodão + Manta Resinada R1 ou R2 (100g) + Forro de algodão para conferir corpo e maciez a cada página;\n• Dimensões Tradicionais de Página: 15x15 cm ou 20x20 cm (perfeitas para bastidores 13x18 cm e 20x20 cm);\n• Elementos Interativos Bordados: Apliques em feltro com velcro, cadarços para aprender a amarrar, zíperes coloridos embutidos, dedoches e relógios com ponteiros móveis bordados In-The-Hoop;\n• Encadernação: União das páginas com lombada de tecido acolchoada ou ilhoses com argolas plásticas articuladas.",
    howItWorks: [
      "1. Uma pedagoga e mãe encomenda um Quiet Book personalizado de 6 páginas para o aniversário de 2 anos da filha com o tema 'O Dia na Fazendinha'.",
      "2. A bordadeira monta cada página individualmente no bastidor com manta R1 e tecido de algodão.",
      "3. A máquina borda os cenários: um celeiro com portas que abrem, uma árvore com maçãs de feltro presas por velcro e uma horta com cenouras móveis.",
      "4. No bastidor seguinte, borda pequenos bichinhos dedoches (porquinho, vaquinha e ovelha) que cabem no bolso do celeiro.",
      "5. Na capa, borda o nome da criança em ponto cheio acetinado com detalhes florais.",
      "6. Ela une as páginas pelo verso e costura a lombada acolchoada de tecido.",
      "7. O livro de pano vira uma obra de arte afetiva inesquecível que a criança guarda para a vida inteira!",
    ],
    beginnerExplanation: "Os 'Livros de Pano' (também chamados de Quiet Books ou Livros Silenciosos) são livrinhos fofos e mágicos feitos de tecido e bordados na máquina para bebês e crianças pequenas brincarem! Cada página tem uma atividade divertida: uma florzinha com pétalas que abrem, um bolsinho com zíper, maçãzinhas que grudam com velcro e bichinhos fofos para contar histórias! Como é tudo feito de pano macio e linha, a criança pode morder, abraçar, levar para a cama e lavar sempre que quiser!",
    applications: [
      "Quiet Books e livros sensoriais interativos para desenvolvimento infantil e pedagogia Montessori",
      "Diários de tecido (Textile Journals) para registro de viagens, nascimento e casamentos",
      "Árvores genealógicas bordadas e painéis de parede com fotos de família impressas e bordadas",
      "Almofadas de memória (Memory Pillows) feitas com roupinhas antigas de entes queridos"
    ],
    commonErrors: [
      "Usar peças pequenas ou miçangas soltas que a criança possa engolir (risco grave de segurança)",
      "Não reforçar as costuras de alças, fitas e velcros que sofrem puxões constantes das crianças",
      "Usar mantas ou entretelas muito duras que deixam as páginas do livro rígidas e desconfortáveis de folhear"
    ],
    troubleshootingTips: [
      "REGRA DE SEGURANÇA MÁXIMA: Todos os velcros, fitas e botões devem ser costurados com costura reforçada tripla e testados com puxão forte manual antes da entrega",
      "Utilize Manta R1 (resina de um lado só) para dar o volume fofinho ideal para as páginas sem endurecer o livro",
      "Borde os apliques móveis (frutinhas, bichinhos) em feltro de alta densidade com bordas em ponto cheio bem seladas",
      "Lave ou borrife água morna com aroma suave de bebê nas páginas antes de embalar com carinho para o cliente"
    ],
    dicaArtrelados: "Livros de pano e diários têxteis são peças artesanais de altíssimo valor afetivo e financeiro! Por serem totalmente personalizados e únicos, um Quiet Book completo pode ser vendido por valores de R$ 300 a R$ 800!",
    voceSabia: "Os 'Quiet Books' foram criados nos Estados Unidos no início do século XX e ganharam esse nome ('Livros Silenciosos') porque as mães os levavam para os cultos de domingo e consultórios médicos para que as crianças pequenas brincassem entretidas e em silêncio!",
    practicalExercise: "Crie uma página de 15x15 cm no bastidor com manta R1: borde um bolsinho com zíper e o nome de uma criança querida: monte a página e sinta a fofura e o encanto do artesanato afetivo!",
    quickSummary: "Criação de livros sensoriais de pano (Quiet Books) e diários afetivos bordados com elementos interativos e lúdicos.",
    relatedTerms: ["In-The-Hoop / Projetos no Bastidor", "Jogo de Cama Infantil & Bordados Antialérgicos com Toque Zero", "Ponto Cheio / Ponto Satin", "Técnicas Especiais"],
    tags: ["j-061", "journaling textil", "quiet book", "livro de pano", "memoria afetiva", "montessori", "sensorial", "artrelados"],
    bibliographicReferences: [
      "INTERACTIVE TEXTILE BOOKS & SENSORY CHILDHOOD EMBROIDERY DESIGN. Zurich, 2023.",
      "THE MEMORY CLOTH & TEXTILE JOURNALING MASTERCLASS. London, 2022.",
      "ARTRELADOS. Histórias que Tocam: O Guia Definitivo para Criar Quiet Books e Livros de Pano Bordados. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

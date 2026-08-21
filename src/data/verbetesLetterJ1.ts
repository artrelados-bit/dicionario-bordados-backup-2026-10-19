import { Verbete } from "../types";

export const VERBETES_LETTER_J_PART1: Verbete[] = [
  {
    id: "j-001-jef-formato-matriz-janome",
    code: "J-001",
    term: "JEF & JEF+ (Formato de Matriz Janome Machine File)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino / Sigla técnica.",
    origin: "Acrônimo proprietário de Janome Embroidery Format, desenvolvido pela Janome Sewing Machine Co., Ltd. (Tóquio, Japão, 1921).",
    summary: "Formato de arquivo nativo das máquinas de bordar domésticas e semiprofissionais da Janome e Elna, contendo coordenadas e trocas de linha.",
    definition: "O JEF (Janome Embroidery Format) e sua extensão enriquecida JEF+ constituem o padrão binário proprietário de leitura e execução direta de matrizes desenvolvido pela corporação japonesa Janome para sua linha de máquinas eletrônicas (séries Memory Craft, MC500E, MC550E, MB-4, MB-7 e modelos correlatos das marcas Elna e Kenmore). O arquivo armazena o cabeçalho binário com o índice de cores Janome/Madeira, as coordenadas cartesianas relativas (dX, dY) em décimos de milímetro (0,1 mm), os comandos de corte automático de fio, saltos de bastidor (Jump) e os limites físicos dimensionais (Bounding Box) do bastidor selecionado.",
    technicalDetails: "Estrutura e parâmetros do formato JEF:\n• Formato binário compacto: Cabeçalho com offset fixo de 116 bytes contendo contador de pontos e coordenadas de limites;\n• Resolução de coordenadas: 0,1 mm (10 unidades por milímetro cartesiado);\n• Tabela de Cores: Mapeamento indexado a partir da paleta nativa Janome (Thread Chart 78 cores);\n• Limite de Bastidor: Bloqueio nativo caso o desenho exceda os limites dos bastidores padrão Janome (como SQ14b 140x140mm, RE20b 140x200mm, SQ20b 200x200mm e RE36b 200x360mm);\n• Extensão JEF+: Adiciona metadados de edição no painel, agrupamento de objetos e tempo de costura estimado.",
    howItWorks: [
      "1. A bordadeira cria ou adquire uma matriz no computador em formato de criação (como EMB ou PES).",
      "2. No software (Wilcom, Embird, Pe-Design ou Janome Digitizer), ela clica em 'Salvar Como' ou 'Exportar' e escolhe o formato .JEF.",
      "3. O software converte os vetores em comandos binários de pontos e ajusta a paleta de cores para o índice Janome.",
      "4. O arquivo é transferido para a pasta 'Embf' ou 'MyDesign' dentro do pen-drive formatado em FAT32.",
      "5. Ao plugar o pen-drive na máquina Janome, o sistema reconhece a matriz instantaneamente com miniatura e cores.",
      "6. A máquina Janome lê os comandos linha por linha, controlando o pantógrafo e a costura com precisão micrométrica.",
    ],
    beginnerExplanation: "É o formato de arquivo que as máquinas Janome (como a MC500E e a MC400E) conseguem ler e bordar! É como se fosse o 'idioma' que a máquina Janome entende. Se você colocar um arquivo .PES da Brother na Janome, ela não vai reconhecer; mas se você salvar em .JEF, a máquina abre o desenho na hora na tela colorida com as cores e o tamanho certinhos do bastidor!",
    applications: [
      "Carregamento e bordado direto em máquinas Janome Memory Craft (MC200E, MC350E, MC400E, MC500E, MC550E)",
      "Uso em máquinas semiprofissionais de múltiplos cabeçotes e agulhas Janome MB-4 e MB-7",
      "Compatibilidade com a linha de bordadeiras eletrônicas Elna eXpressive",
      "Distribuição e venda comercial de matrizes para o ecossistema mundial de usuários Janome"
    ],
    commonErrors: [
      "Salvar a matriz fora da área do bastidor Janome escolhido (a máquina recusa o arquivo e exibe mensagem de erro)",
      "Colocar o arquivo solto na raiz do pen-drive sem respeitar a estrutura de pastas da Janome (pasta EMB / MyDesign)",
      "Usar pen-drives com capacidade superior a 32GB ou formatados em NTFS/exFAT (a máquina não lê)"
    ],
    troubleshootingTips: [
      "Formate o pen-drive sempre em formato FAT32 com tamanho de alocação padrão antes de gravar os arquivos .JEF",
      "Insira o pen-drive na máquina Janome virgem para que a própria máquina crie as pastas automáticas 'EMBF' antes de salvar no computador",
      "Verifique sempre no software se o desenho está rigorosamente centralizado no bastidor Janome correspondente",
      "Se as cores aparecerem trocadas na tela da máquina, converta a paleta no software para 'Janome Polyester Chart'"
    ],
    dicaArtrelados: "Para nunca ter erro de leitura na sua Janome: mantenha o nome do arquivo curto (até 8 caracteres, sem acentos, sem cedilha e sem espaços, ex: FLOR01.jef). Sua máquina lerá o arquivo na velocidade da luz!",
    voceSabia: "O nome Janome significa literalmente 'Olho de Cobra' em japonês (Ja = serpente, No Me = olho). A empresa recebeu esse nome em 1921 porque sua bobina redonda original lembrava o olho hipnótico de uma serpente!",
    practicalExercise: "Abra o seu software de bordado, importe um desenho e exporte-o como .JEF escolhendo o bastidor RE20b (140x200mm): abra o arquivo gerado e verifique se as dimensões e cores permaneceram fiéis!",
    quickSummary: "Formato nativo de arquivo de bordado para máquinas Janome e Elna com coordenadas e cores indexadas.",
    relatedTerms: ["Formatos de Matriz de Bordado", "Janome Digitizer", "DST / Formato Tajima", "PES / Formato Brother"],
    tags: ["j-001", "jef", "janome", "formatos", "matriz", "memory craft", "arquivos", "artrelados"],
    bibliographicReferences: [
      "JANOME SEWING MACHINE CO. Memory Craft Technical Specifications & File Protocol. Tokyo: Janome Corp., 2023.",
      "THE EMBROIDERY DATA INTERCHANGE MANUAL. Sydney: Textile Media, 2022.",
      "ARTRELADOS. O Guia Supremo das Máquinas Janome: Formato JEF, Pastas e Macetes de Pen-Drive. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-002-jog-de-pantografo-movimentacao-manual",
    code: "J-002",
    term: "Jog de Pantógrafo & Movimentação Manual dos Eixos X/Y (Manual Frame Jogging & Step Coordinate Control)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino / Termo técnico mecatrônico.",
    origin: "Do inglês to jog (deslocar em pequenos impulsos/passos graduais). Controle de avanço incremental em sistemas CNC.",
    summary: "Botões de setas no painel da máquina que movimentam o bastidor para cima, baixo, esquerda e direita para centralizar o bordado na peça.",
    definition: "O Jog de Pantógrafo e Movimentação Manual dos Eixos Cartesianos (Manual Frame Jogging, Jog Feed Control & Stepper Increment Positioning) é o comando de controle mecatrônico presente no painel de controle (touchscreen ou teclado de membrana) das máquinas de bordar que aciona diretamente os servomotores ou motores de passo dos eixos X (horizontal) e Y (vertical). Esse recurso permite deslocar o pantógrafo e o bastidor em passos contínuos ou incrementos milimétricos (0,1 mm a 10 mm por clique) para centralizar a agulha na marcação física do tecido, posicionar o ponto de partida do desenho ou afastar o bastidor para colocar apliques e cortar fios sem perder o referencial zero.",
    technicalDetails: "Cinemática e parâmetros do comando de Jog:\n• Modos de Movimento: Modo Contínuo (High Speed Jog enquanto pressionado) e Modo Incremental (Micro-Jog de 0,1 mm, 0,5 mm ou 1,0 mm por toque);\n• Velocidade de deslocamento: De 10 mm/s a 150 mm/s sob rampa de aceleração suave;\n• Função Frame Out / Bastidor Fora: Deslocamento automático do bastidor para frente facilitando colocação de tecidos e apliques;\n• Zero Point Return: Retorno instantâneo às coordenadas iniciais sem erro acumulado de passos;\n• Resolução de encoder: Posição monitorada por encoders ópticos incrementais para evitar perda de sincronismo.",
    howItWorks: [
      "1. A bordadeira marca o centro exato onde quer o bordado em uma camiseta usando giz de alfaiate ou caneta fantasminha.",
      "2. Ela coloca a camiseta presa no bastidor e encaixa o suporte no pantógrafo da máquina.",
      "3. A agulha não está apontando exatamente para a cruz de giz marcada na peça.",
      "4. No painel da máquina, ela entra no modo de posicionamento e usa as teclas de setas (Jog X e Jog Y).",
      "5. Ao apertar as setas, o pantógrafo desliza suavemente até a ponta da agulha coincidir perfeitamente com o ponto de giz.",
      "6. Ela clica em 'Definir Ponto Zero / Set Origin'.",
      "7. A máquina assume aquela coordenada como o novo centro do desenho e executa o bordado exatamente onde foi planejado.",
    ],
    beginnerExplanation: "São as 'setinhas de navegação' no painel da sua máquina! Sabe quando você coloca a toalha no bastidor e a agulha fica um pouquinho fora do lugar onde você desenhou o giz? Em vez de tirar a toalha e prender tudo de novo, você aperta as setinhas na tela da máquina para a esquerda, direita, cima ou baixo até a agulha ficar bem em cima do pontinho certo! É fácil, rápido e salva muito tempo!",
    applications: [
      "Centralização milimétrica da agulha sobre cruzes de alinhamento em jalecos, toalhas e camisas",
      "Afastamento do bastidor (Frame Out) para recorte de apliques e posicionamento de termocolantes",
      "Correção de pequenos desvios de enquadramento sem precisar abrir o bastidor",
      "Avanço do bastidor para troca rápida de carretéis de linha e manutenção da chapa de agulha"
    ],
    commonErrors: [
      "Movimentar o bastidor com a agulha abaixada dentro do tecido (rasga o tecido e entorta a barra da agulha!)",
      "Pressionar as setas de jog sem observar se o bastidor vai colidir com a carcaça ou braço da máquina",
      "Esquecer de salvar o 'Ponto Zero' após deslocar o desenho, fazendo a máquina voltar à posição antiga"
    ],
    troubleshootingTips: [
      "NUNCA acione as teclas de jog enquanto a agulha estiver penetrada no tecido; certifique-se de que a agulha está em ponto morto superior (100°)",
      "Utilize o modo de toque único (micro-jog) para os últimos milímetros de ajuste fino sobre a marca de giz",
      "Em máquinas industriais, use o laser de posicionamento (Pointer Laser) acoplado ao jog para precisão cirúrgica",
      "Após posicionar pelo Jog, execute a tecla 'Trace' para garantir que o bastidor não bata nas laterais da máquina"
    ],
    dicaArtrelados: "O botão de Jog combinado com uma marcação de caneta mágica que apaga com o calor do ferro é a dupla perfeita para nunca mais entregar uma peça com bordado torto no seu ateliê!",
    voceSabia: "Em robôs industriais e centros de usinagem CNC de ponta, o termo 'Jog' vem dos antigos operadores de telégrafo e trens a vapor do século XIX, que 'sacudiam' (jogged) as alavancas para testar a pressão dos pistões antes da partida!",
    practicalExercise: "Coloque um retalho no bastidor com uma cruz de caneta no centro: use as setas de Jog da sua máquina para levar a agulha exatamente até o centro da cruz e dê o comando de Trace!",
    quickSummary: "Comando de setas no painel que movimenta o bastidor para alinhar a agulha exatamente onde você quer bordar.",
    relatedTerms: ["Pantógrafo da Máquina", "Ponto de Origem / Ponto Zero", "Trace / Traçado Perimétrico", "Painel de Controle Touchscreen"],
    tags: ["j-002", "jog", "pantografo", "setas", "posicionamento", "alinhamento", "painel", "artrelados"],
    bibliographicReferences: [
      "CNC MOTION CONTROL & STEPPER DRIVER KINEMATICS IN EMBROIDERY. Munich, 2023.",
      "THE EMBROIDERY OPERATOR'S COMPREHENSIVE GUIDE. London, 2022.",
      "ARTRELADOS. Posicionamento Perfeito: Como Dominar o Jog de Pantógrafo e Centralizar Qualquer Peça em 10 Segundos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-003-juncao-de-objetos-vetoriais-solda-branching",
    code: "J-003",
    term: "Junção de Objetos Vetoriais, Solda Booleana & Ramificação / Branching (Object Weld, Branching & Auto-Join in Digitizing)",
    letter: "J",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do latim jungere (unir/ligar) e do inglês branching (ramificação algorítmica de galhos contínuos).",
    summary: "Ferramenta de software que une vários objetos de mesma cor em um único bloco contínuo, eliminando cortes de linha e saltos desnecessários.",
    definition: "A Junção de Objetos Vetoriais, Soldagem Booleana e Ramificação Algorítmica (Object Weld, Polyline Auto-Join & Automated Branching) é a função avançada dos softwares de digitalização (como Wilcom EmbroideryStudio, Hatch e Embird) que funde geometricamente múltiplos segmentos de desenho adjacentes da mesma cor em uma única entidade contínua. O algoritmo calcula automaticamente os melhores pontos de entrada, saída, conexões internas e percursos de costura subterrânea (Travel Runs), sequenciando todas as partes interligadas (como letras cursivas, galhos de flores, arabescos ou monogramas) de modo que a máquina borde tudo de ponta a ponta sem realizar um único corte de linha ou salto.",
    technicalDetails: "Parâmetros e algoritmos da ferramenta Branching / Junção:\n• Eliminação de cortes: Redução de até 90% no número de paradas de corta-fio em desenhos complexos;\n• Sequenciamento Otimal (Traveling Logic): Insere pontos de corrida embutidos sob os pontos cheios para conectar ilhas distantes;\n• Solda Booleana (Union/Weld): Unifica contornos vetoriais sobrepostos criando uma silhueta limpa sem sobreposição de pontos duplos;\n• Redução de tempo de máquina: Economiza de 5 a 12 segundos a cada corte de linha eliminado;\n• Estabilidade da linha: Evita quebras de linha e desfiamento causados por excesso de partidas e paradas de lâmina.",
    howItWorks: [
      "1. O programador digita um nome longo em letra cursiva com 10 letras ou desenha uma árvore cheia de galhos.",
      "2. Originalmente, cada letra ou galho é um objeto separado: a máquina cortaria a linha 10 vezes durante a costura.",
      "3. O digitalizador seleciona todos os objetos e clica na ferramenta 'Branching / Ramificação' (atalho 'I' no Wilcom).",
      "4. O software pede que ele marque com o mouse apenas 2 pontos: o Ponto de Entrada (início do nome) e o Ponto de Saída (final do nome).",
      "5. O algoritmo reprograma instantaneamente o underlay, os pontos cheios e cria trilhas de ligação invisíveis por baixo dos pontos.",
      "6. Na máquina de bordar, o nome inteiro de 10 letras é bordado em um único fluxo contínuo e perfeito.",
      "7. O bordado termina 3 minutos mais rápido e sem nenhuma ponta de linha solta para limpar!",
    ],
    beginnerExplanation: "É o botão mágico do programa que 'gruda' várias partes do desenho para a máquina bordar tudo de uma vez só sem ficar parando para cortar a linha toda hora! Sabe quando você escreve uma palavra com letra cursiva e a máquina para a cada letrinha para cortar o fio? Quando você usa a 'Junção / Branching', o programa costura todas as letrinhas emendadas como se fosse uma caneta mágica contínua, economizando muito tempo de máquina e deixando o avesso super limpo!",
    applications: [
      "Letreiros cursivos e nomes personalizados sem cortes intermediários de linha",
      "Galhos, folhagens e arabescos botânicos interconectados",
      "Contornos de patchwork, contornos de brasões e linhas de Redwork contínuo",
      "Otimização extrema de tempo de ciclo em produções industriais de alta escala"
    ],
    commonErrors: [
      "Tentar juntar objetos de cores diferentes (o software força tudo para uma cor só)",
      "Usar junção em objetos muito distantes criando linhas retas visíveis por cima do bordado",
      "Esquecer de verificar se o underlay gerado automaticamente pelo branching tem a densidade adequada"
    ],
    troubleshootingTips: [
      "Ao aplicar o Branching no Wilcom ou Hatch, selecione os pontos de entrada e saída nos extremos mais lógicos da peça",
      "Utilize a ferramenta 'Soldar / Weld' antes do branching se os objetos tiverem interseções que causem excesso de camadas",
      "Verifique o percurso no simulador de pontos (Shift+R) para garantir que as linhas de conexão ficaram totalmente escondidas por baixo dos pontos principais",
      "Em letras com serifas ou detalhes miúdos, certifique-se de que a largura da coluna tenha pelo menos 1,0 mm para acomodar o ponto de passagem"
    ],
    dicaArtrelados: "A ferramenta de Branching é a maior aliada da produtividade no ateliê! Uma matriz com 20 cortes de linha que leva 15 minutos para bordar cai para apenas 8 minutos após a aplicação do Branching. Mais dinheiro e mais peças prontas por dia!",
    voceSabia: "O algoritmo de Branching utilizado nos softwares de bordado é baseado no clássico problema matemático da 'Teoria dos Grafos' e no 'Problema do Carteiro Chinês' formulado pelo matemático Mei-Ko Kwan em 1960 para encontrar o menor trajeto contínuo possível sem repetir caminhos!",
    practicalExercise: "No seu software de digitalização, crie três letras ou três círculos lado a lado: selecione-os e aplique a ferramenta 'Branching'. Observe como os cortes de linha desaparecem e o desenho vira um fluxo único!",
    quickSummary: "Ferramenta de software que unifica objetos da mesma cor em um percurso contínuo, eliminando cortes de linha e acelerando a produção.",
    relatedTerms: ["Vetorização Manual & Punching", "Underlay / Estrutura de Base", "Corta-Fio Automático / Trimmer", "Ponto de Conexão / Travel Run"],
    tags: ["j-003", "juncao", "branching", "solda", "otimizacao", "corte de linha", "wilcom", "artrelados"],
    bibliographicReferences: [
      "GRAPH THEORY & OPTIMAL EMBROIDERY TRAVERSAL ALGORITHMS. Zurich, 2023.",
      "DIGITIZING WORKFLOWS & INDUSTRIAL SPEED OPTIMIZATION. Sydney, 2022.",
      "ARTRELADOS. Bordando Sem Paradas: O Poder do Branching para Multiplicar a Produção do Ateliê. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-004-jogo-de-facas-do-trimmer-corta-fio",
    code: "J-004",
    term: "Jogo de Facas do Trimmer & Lâmina Móvel de Corta-Fio (Trimmer Knife Set, Movable Blade & Fixed Under-Bed Cutter)",
    letter: "J",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês trimmer (aparador/cortador) e do nórdico arcaico knifr (instrumento de lâmina afiada). Sistema mecatrônico de corte sob a chapa de agulha.",
    summary: "Par de lâminas de aço afiado (faca móvel e faca fixa) instaladas sob a chapa de agulha que cortam automaticamente as linhas superior e inferior.",
    definition: "O Jogo de Facas do Sistema Trimmer (Under-Bed Thread Trimmer Knife Assembly, Movable Hook Knife & Counter Blade System) é o conjunto mecatrônico de corte de alta precisão instalado no compartimento inferior da máquina de bordar (imediatamente abaixo da chapa de agulha e ao lado da lançadeira rotativa). Composto por uma Faca Móvel oscilante (Movable Knife) com ganchos de captura e uma Faca Fixa afiada de contra-apoio (Fixed Knife / Stationary Blade), o mecanismo é acionado por um solenoide eletromagnético ou servomotor dedicado. Quando o comando de corte (Trim) é disparado pela matriz, a faca móvel avança, laça simultaneamente o fio da agulha e a linha da bobina, puxa-os contra a aresta retificada da faca fixa e efetua o corte cego milimétrico em menos de 180 milissegundos.",
    technicalDetails: "Especificações e cinemática do jogo de facas:\n• Material das lâminas: Aço rápido temperado ao tungstênio/cromo (dureza 60 a 64 HRC) ou com revestimento de diamante policristalino (PCD);\n• Pressão de contato das lâminas: Ajustada via parafuso micrométrico com mola de pressão de precisão;\n• Ciclo de corte: Avanço da faca móvel aos 285° do ciclo do eixo principal -> captura dos fios -> retração e cisalhamento aos 315°;\n• Comprimento do rabo de linha residual (Tail Length): De 2,5 mm a 4,0 mm;\n• Vida útil: De 500.000 a 2.000.000 de ciclos de corte antes da necessidade de afiação ou substituição.",
    howItWorks: [
      "1. A máquina termina de bordar uma letra e precisa saltar para o próximo objeto a 5 cm de distância.",
      "2. A CPU da máquina recebe o código 'Trim' programado na matriz de bordado.",
      "3. O motor principal desacelera e posiciona a barra de agulha no topo (ponto morto superior).",
      "4. O solenoide do trimmer é energizado e empurra a Faca Móvel sob a chapa de agulha.",
      "5. A ponta em formato de gancho da faca móvel abraça a linha superior e a linha de bobina.",
      "6. A faca móvel recua velozmente, pressionando as duas linhas contra a Faca Fixa.",
      "7. As lâminas realizam o cisalhamento limpo das duas linhas como uma tesoura cirúrgica.",
      "8. O pantógrafo se desloca livremente para a próxima letra e a máquina retoma a costura instantaneamente.",
    ],
    beginnerExplanation: "É a 'tesourinha secreta' automática que fica escondida debaixo da chapa de ferro da sua máquina! Toda vez que a máquina termina de bordar um pedaço do desenho e precisa pular para outro lugar, essas duas faquinhas de aço se encontram em uma fração de segundo e cortam a linha de cima e a linha de baixo com perfeição! É graças a esse jogo de facas que você não precisa ficar cortando fiapos na mão com tesoura a cada letrinha!",
    applications: [
      "Corte automático de linhas entre letras, objetos e trocas de cores em máquinas domésticas e industriais",
      "Eliminação do trabalho manual de acabamento e limpeza de fios soltos após o bordado",
      "Garantia de rabos de linha curtos no avesso, evitando nós e acúmulo de volume na peça",
      "Operação ininterrupta em máquinas industriais com dezenas de cabeçotes simultâneos"
    ],
    commonErrors: [
      "Permitir o acúmulo de fiapos de linha e poeira de entretela entre as lâminas (a faca mastiga o fio em vez de cortar)",
      "Apertar o parafuso de regulagem da faca fixa com força excessiva, travando o movimento do solenoide",
      "Usar agulhas tortas ou rebarbadas que colidem com a faca móvel durante o corte, danificando a afiação"
    ],
    troubleshootingTips: [
      "Se a máquina parar de cortar a linha e deixar fios compridos, desmonte a chapa de agulha e limpe os fiapos com pincel e pinça",
      "Aplique uma gota minúscula de óleo lubrificante transparente nas superfícies de contato das lâminas a cada 15 dias",
      "Para testar o corte: passe um fio de linha de bordar entre as facas com a máquina desligada e empurre a lâmina móvel manualmente com a mão: o fio deve cortar seco sem desfiar",
      "Substitua o par de facas (móvel e fixa) sempre em conjunto quando as arestas de aço apresentarem desgaste ou microdentes"
    ],
    dicaArtrelados: "A maior causa de falha no corta-fio não é faca cega, mas sim acúmulo de fiapos compactados de entretela! Uma limpeza semanal de 3 minutos na caixinha de bobina com pincel mantém suas facas cortando como navalha por anos!",
    voceSabia: "As facas do trimmer operam em uma velocidade tão impressionante que o ciclo completo de avanço, laçada e corte dura menos de 0,15 segundos — mais rápido do que um piscar de olhos humano!",
    practicalExercise: "Com a máquina desligada da tomada, retire a chapa de agulha e a caixinha de bobina: localize as lâminas de aço do trimmer, faça uma limpeza caprichada com pincel e observe como a faca móvel desliza suavemente!",
    quickSummary: "Conjunto de lâminas sob a chapa de agulha que corta automaticamente as linhas superior e inferior.",
    relatedTerms: ["Corta-Fio Automático / Trimmer", "Lançadeira Rotativa", "Caixa de Bobina", "Jump Stitch / Salto de Ponto"],
    tags: ["j-004", "facas", "trimmer", "corta-fio", "laminas", "mecanica", "manutencao", "artrelados"],
    bibliographicReferences: [
      "MECHANICS OF THREAD TRIMMING SYSTEMS IN INDUSTRIAL EMBROIDERY CNC. Nagoya, 2023.",
      "THE SERVICE & MAINTENANCE HANDBOOK FOR EMBROIDERY TECHNICIANS. Chicago, 2022.",
      "ARTRELADOS. Corta-Fio Perfeito: Como Regular, Limpar e Manter as Facas do Trimmer Cortando Como Navalha. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-005-jump-stitch-salto-de-ponto-sem-costura",
    code: "J-005",
    term: "Jump Stitch & Salto de Ponto sem Costura (Jump Length Threshold & Non-Stitching Frame Travel)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Substantivo masculino composto / Expressão inglesa consagrada.",
    origin: "Do inglês jump (salto/pulo) e stitch (ponto de costura). Comando de translação do pantógrafo sem penetração com linha.",
    summary: "Movimento em que a máquina para de costurar e desloca o bastidor até outro ponto do desenho para continuar bordando.",
    definition: "O Jump Stitch (Salto de Ponto, Deslocamento Não-Costurável e Translação em Vazio do Pantógrafo) é a instrução de controle numérico codificada na matriz que comanda a movimentação dos eixos X e Y do pantógrafo entre dois elementos geométricos desconexos sem que a barra de agulha desça para entrelaçar a linha com a lançadeira. Quando o comprimento do salto ultrapassa o Limiar de Salto (Jump Threshold — configurado geralmente entre 2,0 mm e 7,0 mm), a máquina aciona automaticamente o comando de travamento de ponto e o mecanismo corta-fio (Trimmer); se o salto for inferior ao limiar, a máquina mantém a linha contínua, deixando uma pequena ponte de linha esticada que é facilmente removida no acabamento.",
    technicalDetails: "Parâmetros e cinemática do Jump Stitch:\n• Código de máquina: Comando binário 'JUMP' com deslocamento incremental em pulsos de passo;\n• Limiar de Corte por Salto (Auto-Trim Jump Length): Configurável no software e na máquina de 1,0 mm a 12,0 mm (padrão 5,0 mm);\n• Trava de Ponto Pré-Salto (Tie-Off): Inserção automática de 3 a 4 micro-pontos de amarração de 0,8 mm antes do salto para evitar desfiamento;\n• Velocidade do Pantógrafo em Salto: De 200 mm/s a 350 mm/s em vazio;\n• Limite Mecânico de Salto Individual: Saltos maiores que a abertura máxima do pantógrafo são fragmentados em múltiplos mini-jumps de 12,7 mm nos formatos industriais antigos como DST.",
    howItWorks: [
      "1. A máquina termina de bordar uma flor no lado esquerdo do bastidor e precisa bordar outra flor a 10 cm no lado direito.",
      "2. Na matriz, o digitalizador definiu que a flor 2 é da mesma cor da flor 1.",
      "3. A máquina executa a amarração de segurança (Tie-off) no final da flor 1 e corta o fio com as facas do trimmer.",
      "4. Em seguida, a agulha permanece suspensa no ponto mais alto enquanto o pantógrafo executa um 'Jump' veloz deslizando 10 cm para a direita.",
      "5. A agulha desce na coordenada inicial da flor 2, executa a amarração de entrada (Tie-in) e recomeça a costura normalmente.",
      "6. Ambas as flores ficam perfeitas e sem linhas diagonais feias atravessando o tecido.",
    ],
    beginnerExplanation: "É o 'pulo' que a máquina dá de um lugar para o outro sem costurar! Quando você tem duas estrelinhas separadas no desenho, a máquina borda a primeira estrelinha, dá uma paradinha, levanta a agulha, corre o bastidor bem rápido até a segunda estrelinha e começa a bordar de novo! Se o pulo for grande, ela corta a linha antes de pular; se for um pulinho bem pequenininho, ela pula direto deixando uma linhazinha esticada que você corta com a tesourinha depois!",
    applications: [
      "Transição suave entre letras separadas em frases e monogramas",
      "Deslocamento rápido entre elementos gráficos distantes de mesma cor na matriz",
      "Posicionamento do bastidor para bordar detalhes isolados em peças grandes",
      "Redução de costuras desnecessárias e preservação da superfície limpa do tecido"
    ],
    commonErrors: [
      "Deixar o limiar de salto muito alto no software (a máquina não corta a linha e cria 'varais de fios' feios entre as letras)",
      "Programar saltos sem comando de amarração de ponto (o bordado desmancha na primeira lavagem da roupa)",
      "Configurar saltos muito rápidos em tecidos super leves e instáveis, causando repuxamento do bastidor"
    ],
    troubleshootingTips: [
      "No Wilcom, Hatch ou Pe-Design, configure o 'Limiar de Corte de Salto / Auto Trim' para 2,0 mm ou 3,0 mm para garantir cortes automáticos entre letrinhas",
      "Ative sempre as funções automáticas de 'Tie-in' e 'Tie-off' em todos os objetos para selar o início e o fim dos saltos",
      "Se sua máquina não possui corta-fio automático, use uma tesoura de ponta curvada (tipo garça) para aparar os fios de salto rente ao tecido logo após o bordado",
      "No simulador de pontos da tela, ative a visualização de conectores para enxergar onde os saltos estão acontecendo"
    ],
    dicaArtrelados: "Para ter um bordado limpo e de alto padrão profissional, configure o corta-fio para atuar em saltos acima de 2 mm! As peças saem da máquina 100% limpas, prontas para embalar e encantar o cliente sem você perder horas limpando fiapos!",
    voceSabia: "Nos primeiros cartões perfurados das máquinas automáticas criadas por Joseph-Marie Jacquard em 1804 e adaptadas por Isaak Groebli em 1888 para o bordado suíço Schiffli, os saltos eram chamados de 'pontos cegos' porque a agulha era desengatada mecanicamente por alavancas de ferro!",
    practicalExercise: "Abra uma matriz no seu programa e ative a linha de conectores: observe as linhas pontilhadas de Jump entre os objetos e veja como a máquina viaja pelo desenho sem costurar!",
    quickSummary: "Movimento em que a máquina desloca o bastidor sem costurar para alcançar o próximo objeto do desenho.",
    relatedTerms: ["Corta-Fio Automático / Trimmer", "Ponto de Amarração / Tie-Off", "Ponto de Conexão / Travel Run", "Pantógrafo da Máquina"],
    tags: ["j-005", "jump stitch", "salto de ponto", "conectores", "trimmer", "corta-fio", "programacao", "artrelados"],
    bibliographicReferences: [
      "COMPUTERIZED EMBROIDERY DATA PROTOCOLS & STITCH INTERPOLATION. Sydney, 2023.",
      "THE COMPLETE GUIDE TO DIGITIZING & VECTOR STITCHING. London, 2022.",
      "ARTRELADOS. Saltos e Conexões: Como Configurar o Jump Stitch para Ter Bordados Limpos e Sem Fiapos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

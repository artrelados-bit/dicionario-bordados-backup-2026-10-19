import { Verbete } from "../types";

export const VERBETES_LETTER_J: Verbete[] = [
  {
    "id": "j-001-jef-formato-matriz-janome",
    "code": "J-001",
    "term": "JEF & JEF+",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino / Sigla técnica.",
    "origin": "Acrônimo proprietário de Janome Embroidery Format, desenvolvido pela Janome Sewing Machine Co., Ltd. (Tóquio, Japão, 1921).",
    "summary": "Formato de arquivo nativo das máquinas de bordar domésticas e semiprofissionais da Janome e Elna, contendo coordenadas e trocas de linha.",
    "definition": "O JEF (Janome Embroidery Format) e sua extensão enriquecida JEF+ constituem o padrão binário proprietário de leitura e execução direta de matrizes desenvolvido pela corporação japonesa Janome para sua linha de máquinas eletrônicas (séries Memory Craft, MC500E, MC550E, MB-4, MB-7 e modelos correlatos das marcas Elna e Kenmore). O arquivo armazena o cabeçalho binário com o índice de cores Janome/Madeira, as coordenadas cartesianas relativas (dX, dY) em décimos de milímetro (0,1 mm), os comandos de corte automático de fio, saltos de bastidor (Jump) e os limites físicos dimensionais (Bounding Box) do bastidor selecionado.",
    "technicalDetails": "Estrutura e parâmetros do formato JEF:\n• Formato binário compacto: Cabeçalho com offset fixo de 116 bytes contendo contador de pontos e coordenadas de limites;\n• Resolução de coordenadas: 0,1 mm (10 unidades por milímetro cartesiado);\n• Tabela de Cores: Mapeamento indexado a partir da paleta nativa Janome (Thread Chart 78 cores);\n• Limite de Bastidor: Bloqueio nativo caso o desenho exceda os limites dos bastidores padrão Janome (como SQ14b 140x140mm, RE20b 140x200mm, SQ20b 200x200mm e RE36b 200x360mm);\n• Extensão JEF+: Adiciona metadados de edição no painel, agrupamento de objetos e tempo de costura estimado.",
    "howItWorks": [
      "1. A bordadeira cria ou adquire uma matriz no computador em formato de criação (como EMB ou PES).",
      "2. No software (Wilcom, Embird, Pe-Design ou Janome Digitizer), ela clica em 'Salvar Como' ou 'Exportar' e escolhe o formato .JEF.",
      "3. O software converte os vetores em comandos binários de pontos e ajusta a paleta de cores para o índice Janome.",
      "4. O arquivo é transferido para a pasta 'Embf' ou 'MyDesign' dentro do pen-drive formatado em FAT32.",
      "5. Ao plugar o pen-drive na máquina Janome, o sistema reconhece a matriz instantaneamente com miniatura e cores.",
      "6. A máquina Janome lê os comandos linha por linha, controlando o pantógrafo e a costura com precisão micrométrica."
    ],
    "beginnerExplanation": "É o formato de arquivo que as máquinas Janome (como a MC500E e a MC400E) conseguem ler e bordar! É como se fosse o 'idioma' que a máquina Janome entende. Se você colocar um arquivo .PES da Brother na Janome, ela não vai reconhecer; mas se você salvar em .JEF, a máquina abre o desenho na hora na tela colorida com as cores e o tamanho certinhos do bastidor!",
    "applications": [
      "Carregamento e bordado direto em máquinas Janome Memory Craft (MC200E, MC350E, MC400E, MC500E, MC550E)",
      "Uso em máquinas semiprofissionais de múltiplos cabeçotes e agulhas Janome MB-4 e MB-7",
      "Compatibilidade com a linha de bordadeiras eletrônicas Elna eXpressive",
      "Distribuição e venda comercial de matrizes para o ecossistema mundial de usuários Janome"
    ],
    "commonErrors": [
      "Salvar a matriz fora da área do bastidor Janome escolhido (a máquina recusa o arquivo e exibe mensagem de erro)",
      "Colocar o arquivo solto na raiz do pen-drive sem respeitar a estrutura de pastas da Janome (pasta EMB / MyDesign)",
      "Usar pen-drives com capacidade superior a 32GB ou formatados em NTFS/exFAT (a máquina não lê)"
    ],
    "troubleshootingTips": [
      "Formate o pen-drive sempre em formato FAT32 com tamanho de alocação padrão antes de gravar os arquivos .JEF",
      "Insira o pen-drive na máquina Janome virgem para que a própria máquina crie as pastas automáticas 'EMBF' antes de salvar no computador",
      "Verifique sempre no software se o desenho está rigorosamente centralizado no bastidor Janome correspondente",
      "Se as cores aparecerem trocadas na tela da máquina, converta a paleta no software para 'Janome Polyester Chart'"
    ],
    "dicaArtrelados": "Para nunca ter erro de leitura na sua Janome: mantenha o nome do arquivo curto (até 8 caracteres, sem acentos, sem cedilha e sem espaços, ex: FLOR01.jef). Sua máquina lerá o arquivo na velocidade da luz!",
    "voceSabia": "O nome Janome significa literalmente 'Olho de Cobra' em japonês (Ja = serpente, No Me = olho). A empresa recebeu esse nome em 1921 porque sua bobina redonda original lembrava o olho hipnótico de uma serpente!",
    "practicalExercise": "Abra o seu software de bordado, importe um desenho e exporte-o como .JEF escolhendo o bastidor RE20b (140x200mm): abra o arquivo gerado e verifique se as dimensões e cores permaneceram fiéis!",
    "quickSummary": "Formato nativo de arquivo de bordado para máquinas Janome e Elna com coordenadas e cores indexadas.",
    "relatedTerms": [
      "Formatos de Matriz de Bordado",
      "Janome Digitizer",
      "DST / Formato Tajima",
      "PES / Formato Brother"
    ],
    "imageUrl": "/images/j001_formato_jef_janome_v1.jpg?v=1",
    "imageCaption": "Esquema Técnico do Formato JEF: Estrutura binária de coordenadas X/Y e paradas de cor, organização no pendrive (pasta EMB) e leitura no painel da máquina Janome de 1 agulha.",
    "tags": [
      "j-001",
      "jef",
      "janome",
      "formatos",
      "matriz",
      "memory craft",
      "arquivos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JANOME SEWING MACHINE CO. Memory Craft Technical Specifications & File Protocol. Tokyo: Janome Corp., 2023.",
      "THE EMBROIDERY DATA INTERCHANGE MANUAL. Sydney: Textile Media, 2022.",
      "ARTRELADOS. O Guia Supremo das Máquinas Janome: Formato JEF, Pastas e Macetes de Pen-Drive. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-002-jog-de-pantografo-movimentacao-manual",
    "code": "J-002",
    "term": "Movimentação Manual dos Eixos do Pantógrafo",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino / Termo técnico mecatrônico.",
    "origin": "Do inglês to jog (deslocar em pequenos impulsos/passos graduais). Controle de avanço incremental em sistemas CNC.",
    "summary": "Botões de setas no painel da máquina que movimentam o bastidor para cima, baixo, esquerda e direita para centralizar o bordado na peça.",
    "definition": "O Jog de Pantógrafo e Movimentação Manual dos Eixos Cartesianos (Manual Frame Jogging, Jog Feed Control & Stepper Increment Positioning) é o comando de controle mecatrônico presente no painel de controle (touchscreen ou teclado de membrana) das máquinas de bordar que aciona diretamente os servomotores ou motores de passo dos eixos X (horizontal) e Y (vertical). Esse recurso permite deslocar o pantógrafo e o bastidor em passos contínuos ou incrementos milimétricos (0,1 mm a 10 mm por clique) para centralizar a agulha na marcação física do tecido, posicionar o ponto de partida do desenho ou afastar o bastidor para colocar apliques e cortar fios sem perder o referencial zero.",
    "technicalDetails": "Cinemática e parâmetros do comando de Jog:\n• Modos de Movimento: Modo Contínuo (High Speed Jog enquanto pressionado) e Modo Incremental (Micro-Jog de 0,1 mm, 0,5 mm ou 1,0 mm por toque);\n• Velocidade de deslocamento: De 10 mm/s a 150 mm/s sob rampa de aceleração suave;\n• Função Frame Out / Bastidor Fora: Deslocamento automático do bastidor para frente facilitando colocação de tecidos e apliques;\n• Zero Point Return: Retorno instantâneo às coordenadas iniciais sem erro acumulado de passos;\n• Resolução de encoder: Posição monitorada por encoders ópticos incrementais para evitar perda de sincronismo.",
    "howItWorks": [
      "1. A bordadeira marca o centro exato onde quer o bordado em uma camiseta usando giz de alfaiate ou caneta fantasminha.",
      "2. Ela coloca a camiseta presa no bastidor e encaixa o suporte no pantógrafo da máquina.",
      "3. A agulha não está apontando exatamente para a cruz de giz marcada na peça.",
      "4. No painel da máquina, ela entra no modo de posicionamento e usa as teclas de setas (Jog X e Jog Y).",
      "5. Ao apertar as setas, o pantógrafo desliza suavemente até a ponta da agulha coincidir perfeitamente com o ponto de giz.",
      "6. Ela clica em 'Definir Ponto Zero / Set Origin'.",
      "7. A máquina assume aquela coordenada como o novo centro do desenho e executa o bordado exatamente onde foi planejado."
    ],
    "beginnerExplanation": "São as 'setinhas de navegação' no painel da sua máquina! Sabe quando você coloca a toalha no bastidor e a agulha fica um pouquinho fora do lugar onde você desenhou o giz? Em vez de tirar a toalha e prender tudo de novo, você aperta as setinhas na tela da máquina para a esquerda, direita, cima ou baixo até a agulha ficar bem em cima do pontinho certo! É fácil, rápido e salva muito tempo!",
    "applications": [
      "Centralização milimétrica da agulha sobre cruzes de alinhamento em jalecos, toalhas e camisas",
      "Afastamento do bastidor (Frame Out) para recorte de apliques e posicionamento de termocolantes",
      "Correção de pequenos desvios de enquadramento sem precisar abrir o bastidor",
      "Avanço do bastidor para troca rápida de carretéis de linha e manutenção da chapa de agulha"
    ],
    "commonErrors": [
      "Movimentar o bastidor com a agulha abaixada dentro do tecido (rasga o tecido e entorta a barra da agulha!)",
      "Pressionar as setas de jog sem observar se o bastidor vai colidir com a carcaça ou braço da máquina",
      "Esquecer de salvar o 'Ponto Zero' após deslocar o desenho, fazendo a máquina voltar à posição antiga"
    ],
    "troubleshootingTips": [
      "NUNCA acione as teclas de jog enquanto a agulha estiver penetrada no tecido; certifique-se de que a agulha está em ponto morto superior (100°)",
      "Utilize o modo de toque único (micro-jog) para os últimos milímetros de ajuste fino sobre a marca de giz",
      "Em máquinas industriais, use o laser de posicionamento (Pointer Laser) acoplado ao jog para precisão cirúrgica",
      "Após posicionar pelo Jog, execute a tecla 'Trace' para garantir que o bastidor não bata nas laterais da máquina"
    ],
    "dicaArtrelados": "O botão de Jog combinado com uma marcação de caneta mágica que apaga com o calor do ferro é a dupla perfeita para nunca mais entregar uma peça com bordado torto no seu ateliê!",
    "voceSabia": "Em robôs industriais e centros de usinagem CNC de ponta, o termo 'Jog' vem dos antigos operadores de telégrafo e trens a vapor do século XIX, que 'sacudiam' (jogged) as alavancas para testar a pressão dos pistões antes da partida!",
    "practicalExercise": "Coloque um retalho no bastidor com uma cruz de caneta no centro: use as setas de Jog da sua máquina para levar a agulha exatamente até o centro da cruz e dê o comando de Trace!",
    "quickSummary": "Comando de setas no painel que movimenta o bastidor para alinhar a agulha exatamente onde você quer bordar.",
    "imageUrl": "/images/j002_jog_pantografo_movimentacao_v2.jpg?v=2",
    "imageCaption": "Cinemática do Jog de Pantógrafo na Máquina de 1 Agulha: o controle eletrônico que desloca o bastidor plano nos eixos X e Y através do módulo de bordar para centralizar a agulha única na marcação do tecido antes da costura.",
    "relatedTerms": [
      "Pantógrafo da Máquina",
      "Ponto de Origem / Ponto Zero",
      "Trace / Traçado Perimétrico",
      "Painel de Controle Touchscreen"
    ],
    "tags": [
      "j-002",
      "jog",
      "pantografo",
      "setas",
      "posicionamento",
      "alinhamento",
      "painel",
      "artrelados"
    ],
    "bibliographicReferences": [
      "CNC MOTION CONTROL & STEPPER DRIVER KINEMATICS IN EMBROIDERY. Munich, 2023.",
      "THE EMBROIDERY OPERATOR'S COMPREHENSIVE GUIDE. London, 2022.",
      "ARTRELADOS. Posicionamento Perfeito: Como Dominar o Jog de Pantógrafo e Centralizar Qualquer Peça em 10 Segundos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-003-juncao-de-objetos-vetoriais-solda-branching",
    "code": "J-003",
    "term": "Junção e Ramificação de Objetos Vetoriais",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Programação & Digitalização",
    "grammarClass": "Substantivo feminina composto.",
    "origin": "Do latim jungere (unir/ligar) e do inglês branching (ramificação algorítmica de galhos contínuos).",
    "summary": "Ferramenta de software que une vários objetos de mesma cor em um único bloco contínuo, eliminando cortes de linha e saltos desnecessários.",
    "definition": "A Junção de Objetos Vetoriais, Soldagem Booleana e Ramificação Algorítmica (Object Weld, Polyline Auto-Join & Automated Branching) é a função avançada dos softwares de digitalização (como Wilcom EmbroideryStudio, Hatch e Embird) que funde geometricamente múltiplos segmentos de desenho adjacentes da mesma cor em uma única entidade contínua. O algoritmo calcula automaticamente os melhores pontos de entrada, saída, conexões internas e percursos de costura subterrânea (Travel Runs), sequenciando todas as partes interligadas (como letras cursivas, galhos de flores, arabescos ou monogramas) de modo que a máquina borde tudo de ponta a ponta sem realizar um único corte de linha ou salto.",
    "technicalDetails": "Parâmetros e algoritmos da ferramenta Branching / Junção:\n• Eliminação de cortes: Redução de até 90% no número de paradas de corta-fio em desenhos complexos;\n• Sequenciamento Otimal (Traveling Logic): Insere pontos de corrida embutidos sob os pontos cheios para conectar ilhas distantes;\n• Solda Booleana (Union/Weld): Unifica contornos vetoriais sobrepostos criando uma silhueta limpa sem sobreposição de pontos duplos;\n• Redução de tempo de máquina: Economiza de 5 a 12 segundos a cada corte de linha eliminado;\n• Estabilidade da linha: Evita quebras de linha e desfiamento causados por excesso de partidas e paradas de lâmina.",
    "howItWorks": [
      "1. O programador digita um nome longo em letra cursiva com 10 letras ou desenha uma árvore cheia de galhos.",
      "2. Originalmente, cada letra ou galho é um objeto separado: a máquina cortaria a linha 10 vezes durante a costura.",
      "3. O digitalizador seleciona todos os objetos e clica na ferramenta 'Branching / Ramificação' (atalho 'I' no Wilcom).",
      "4. O software pede que ele marque com o mouse apenas 2 pontos: o Ponto de Entrada (início do nome) e o Ponto de Saída (final do nome).",
      "5. O algoritmo reprograma instantaneamente o underlay, os pontos cheios e cria trilhas de ligação invisíveis por baixo dos pontos.",
      "6. Na máquina de bordar, o nome inteiro de 10 letras é bordado em um único fluxo contínuo e perfeito.",
      "7. O bordado termina 3 minutos mais rápido e sem nenhuma ponta de linha solta para limpar!"
    ],
    "beginnerExplanation": "É o botão mágico do programa que 'gruda' várias partes do desenho para a máquina bordar tudo de uma vez só sem ficar parando para cortar a linha toda hora! Sabe quando você escreve uma palavra com letra cursiva e a máquina para a cada letrinha para cortar o fio? Quando você usa a 'Junção / Branching', o programa costura todas as letrinhas emendadas como se fosse uma caneta mágica contínua, economizando muito tempo de máquina e deixando o avesso super limpo!",
    "applications": [
      "Letreiros cursivos e nomes personalizados sem cortes intermediários de linha",
      "Galhos, folhagens e arabescos botânicos interconectados",
      "Contornos de patchwork, contornos de brasões e linhas de Redwork contínuo",
      "Otimização extrema de tempo de ciclo em produções industriais de alta escala"
    ],
    "commonErrors": [
      "Tentar juntar objetos de cores diferentes (o software força tudo para uma cor só)",
      "Usar junção em objetos muito distantes criando linhas retas visíveis por cima do bordado",
      "Esquecer de verificar se o underlay gerado automaticamente pelo branching tem a densidade adequada"
    ],
    "troubleshootingTips": [
      "Ao aplicar o Branching no Wilcom ou Hatch, selecione os pontos de entrada e saída nos extremos mais lógicos da peça",
      "Utilize a ferramenta 'Soldar / Weld' antes do branching se os objetos tiverem interseções que causem excesso de camadas",
      "Verifique o percurso no simulador de pontos (Shift+R) para garantir que as linhas de conexão ficaram totalmente escondidas por baixo dos pontos principais",
      "Em letras com serifas ou detalhes miúdos, certifique-se de que a largura da coluna tenha pelo menos 1,0 mm para acomodar o ponto de passagem"
    ],
    "dicaArtrelados": "A ferramenta de Branching é a maior aliada da produtividade no ateliê! Uma matriz com 20 cortes de linha que leva 15 minutos para bordar cai para apenas 8 minutos após a aplicação do Branching. Mais dinheiro e mais peças prontas por dia!",
    "voceSabia": "O algoritmo de Branching utilizado nos softwares de bordado é baseado no clássico problema matemático da 'Teoria dos Grafos' e no 'Problema do Carteiro Chinês' formulado pelo matemático Mei-Ko Kwan em 1960 para encontrar o menor trajeto contínuo possível sem repetir caminhos!",
    "practicalExercise": "No seu software de digitalização, crie três letras ou três círculos lado a lado: selecione-os e aplique a ferramenta 'Branching'. Observe como os cortes de linha desaparecem e o desenho vira um fluxo único!",
    "quickSummary": "Ferramenta de software que unifica objetos da mesma cor em um percurso contínuo, eliminando cortes de linha e acelerando a produção.",
    "imageUrl": "/images/j003_juncao_branching_v2.jpg?v=2",
    "imageCaption": "Engenharia de Ramificação e Junção Vetorial (Branching): a ferramenta de software que funde múltiplos objetos da mesma cor através de percursos subterrâneos ocultos, permitindo que a máquina de 1 agulha borde letreiros cursivos e arabescos em fluxo contínuo sem cortes de linha.",
    "relatedTerms": [
      "Vetorização Manual & Punching",
      "Underlay / Estrutura de Base",
      "Corta-Fio Automático / Trimmer",
      "Ponto de Conexão / Travel Run"
    ],
    "tags": [
      "j-003",
      "juncao",
      "branching",
      "solda",
      "otimizacao",
      "corte de linha",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GRAPH THEORY & OPTIMAL EMBROIDERY TRAVERSAL ALGORITHMS. Zurich, 2023.",
      "DIGITIZING WORKFLOWS & INDUSTRIAL SPEED OPTIMIZATION. Sydney, 2022.",
      "ARTRELADOS. Bordando Sem Paradas: O Poder do Branching para Multiplicar a Produção do Ateliê. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-004-jogo-de-facas-do-trimmer-corta-fio",
    "code": "J-004",
    "term": "Jogo de Facas do Trimmer & Lâmina Móvel de Corta-Fio",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês trimmer (aparador/cortador) e do nórdico arcaico knifr (instrumento de lâmina afiada). Sistema mecatrônico de corte sob a chapa de agulha.",
    "summary": "Par de lâminas de aço afiado (faca móvel e faca fixa) instaladas sob a chapa de agulha que cortam automaticamente as linhas superior e inferior.",
    "definition": "O Jogo de Facas do Sistema Trimmer (Under-Bed Thread Trimmer Knife Assembly, Movable Hook Knife & Counter Blade System) é o conjunto mecatrônico de corte de alta precisão instalado no compartimento inferior da máquina de bordar (imediatamente abaixo da chapa de agulha e ao lado da lançadeira rotativa). Composto por uma Faca Móvel oscilante (Movable Knife) com ganchos de captura e uma Faca Fixa afiada de contra-apoio (Fixed Knife / Stationary Blade), o mecanismo é acionado por um solenoide eletromagnético ou servomotor dedicado. Quando o comando de corte (Trim) é disparado pela matriz, a faca móvel avança, laça simultaneamente o fio da agulha e a linha da bobina, puxa-os contra a aresta retificada da faca fixa e efetua o corte cego milimétrico em menos de 180 milissegundos.",
    "technicalDetails": "Especificações e cinemática do jogo de facas:\n• Material das lâminas: Aço rápido temperado ao tungstênio/cromo (dureza 60 a 64 HRC) ou com revestimento de diamante policristalino (PCD);\n• Pressão de contato das lâminas: Ajustada via parafuso micrométrico com mola de pressão de precisão;\n• Ciclo de corte: Avanço da faca móvel aos 285° do ciclo do eixo principal -> captura dos fios -> retração e cisalhamento aos 315°;\n• Comprimento do rabo de linha residual (Tail Length): De 2,5 mm a 4,0 mm;\n• Vida útil: De 500.000 a 2.000.000 de ciclos de corte antes da necessidade de afiação ou substituição.",
    "howItWorks": [
      "1. A máquina termina de bordar uma letra e precisa saltar para o próximo objeto a 5 cm de distância.",
      "2. A CPU da máquina recebe o código 'Trim' programado na matriz de bordado.",
      "3. O motor principal desacelera e posiciona a barra de agulha no topo (ponto morto superior).",
      "4. O solenoide do trimmer é energizado e empurra a Faca Móvel sob a chapa de agulha.",
      "5. A ponta em formato de gancho da faca móvel abraça a linha superior e a linha de bobina.",
      "6. A faca móvel recua velozmente, pressionando as duas linhas contra a Faca Fixa.",
      "7. As lâminas realizam o cisalhamento limpo das duas linhas como uma tesoura cirúrgica.",
      "8. O pantógrafo se desloca livremente para a próxima letra e a máquina retoma a costura instantaneamente."
    ],
    "beginnerExplanation": "É a 'tesourinha secreta' automática que fica escondida debaixo da chapa de ferro da sua máquina! Toda vez que a máquina termina de bordar um pedaço do desenho e precisa pular para outro lugar, essas duas faquinhas de aço se encontram em uma fração de segundo e cortam a linha de cima e a linha de baixo com perfeição! É graças a esse jogo de facas que você não precisa ficar cortando fiapos na mão com tesoura a cada letrinha!",
    "applications": [
      "Corte automático de linhas entre letras, objetos e trocas de cores em máquinas domésticas e industriais",
      "Eliminação do trabalho manual de acabamento e limpeza de fios soltos após o bordado",
      "Garantia de rabos de linha curtos no avesso, evitando nós e acúmulo de volume na peça",
      "Operação ininterrupta em máquinas industriais com dezenas de cabeçotes simultâneos"
    ],
    "commonErrors": [
      "Permitir o acúmulo de fiapos de linha e poeira de entretela entre as lâminas (a faca mastiga o fio em vez de cortar)",
      "Apertar o parafuso de regulagem da faca fixa com força excessiva, travando o movimento do solenoide",
      "Usar agulhas tortas ou rebarbadas que colidem com a faca móvel durante o corte, danificando a afiação"
    ],
    "troubleshootingTips": [
      "Se a máquina parar de cortar a linha e deixar fios compridos, desmonte a chapa de agulha e limpe os fiapos com pincel e pinça",
      "Aplique uma gota minúscula de óleo lubrificante transparente nas superfícies de contato das lâminas a cada 15 dias",
      "Para testar o corte: passe um fio de linha de bordar entre as facas com a máquina desligada e empurre a lâmina móvel manualmente com a mão: o fio deve cortar seco sem desfiar",
      "Substitua o par de facas (móvel e fixa) sempre em conjunto quando as arestas de aço apresentarem desgaste ou microdentes"
    ],
    "dicaArtrelados": "A maior causa de falha no corta-fio não é faca cega, mas sim acúmulo de fiapos compactados de entretela! Uma limpeza semanal de 3 minutos na caixinha de bobina com pincel mantém suas facas cortando como navalha por anos!",
    "voceSabia": "As facas do trimmer operam em uma velocidade tão impressionante que o ciclo completo de avanço, laçada e corte dura menos de 0,15 segundos — mais rápido do que um piscar de olhos humano!",
    "practicalExercise": "Com a máquina desligada da tomada, retire a chapa de agulha e a caixinha de bobina: localize as lâminas de aço do trimmer, faça uma limpeza caprichada com pincel e observe como a faca móvel desliza suavemente!",
    "quickSummary": "Conjunto de lâminas sob a chapa de agulha que corta automaticamente as linhas superior e inferior.",
    "relatedTerms": [
      "Corta-Fio Automático / Trimmer",
      "Lançadeira Rotativa",
      "Caixa de Bobina",
      "Jump Stitch / Salto de Ponto"
    ],
    "tags": [
      "j-004",
      "facas",
      "trimmer",
      "corta-fio",
      "laminas",
      "mecanica",
      "manutencao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MECHANICS OF THREAD TRIMMING SYSTEMS IN INDUSTRIAL EMBROIDERY CNC. Nagoya, 2023.",
      "THE SERVICE & MAINTENANCE HANDBOOK FOR EMBROIDERY TECHNICIANS. Chicago, 2022.",
      "ARTRELADOS. Corta-Fio Perfeito: Como Regular, Limpar e Manter as Facas do Trimmer Cortando Como Navalha. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-005-jump-stitch-salto-de-ponto-sem-costura",
    "code": "J-005",
    "term": "Jump Stitch & Salto de Ponto sem Costura",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino composto / Expressão inglesa consagrada.",
    "origin": "Do inglês jump (salto/pulo) e stitch (ponto de costura). Comando de translação do pantógrafo sem penetração com linha.",
    "summary": "Movimento em que a máquina para de costurar e desloca o bastidor até outro ponto do desenho para continuar bordando.",
    "definition": "O Jump Stitch (Salto de Ponto, Deslocamento Não-Costurável e Translação em Vazio do Pantógrafo) é a instrução de controle numérico codificada na matriz que comanda a movimentação dos eixos X e Y do pantógrafo entre dois elementos geométricos desconexos sem que a barra de agulha desça para entrelaçar a linha com a lançadeira. Quando o comprimento do salto ultrapassa o Limiar de Salto (Jump Threshold — configurado geralmente entre 2,0 mm e 7,0 mm), a máquina aciona automaticamente o comando de travamento de ponto e o mecanismo corta-fio (Trimmer); se o salto for inferior ao limiar, a máquina mantém a linha contínua, deixando uma pequena ponte de linha esticada que é facilmente removida no acabamento.",
    "technicalDetails": "Parâmetros e cinemática do Jump Stitch:\n• Código de máquina: Comando binário 'JUMP' com deslocamento incremental em pulsos de passo;\n• Limiar de Corte por Salto (Auto-Trim Jump Length): Configurável no software e na máquina de 1,0 mm a 12,0 mm (padrão 5,0 mm);\n• Trava de Ponto Pré-Salto (Tie-Off): Inserção automática de 3 a 4 micro-pontos de amarração de 0,8 mm antes do salto para evitar desfiamento;\n• Velocidade do Pantógrafo em Salto: De 200 mm/s a 350 mm/s em vazio;\n• Limite Mecânico de Salto Individual: Saltos maiores que a abertura máxima do pantógrafo são fragmentados em múltiplos mini-jumps de 12,7 mm nos formatos industriais antigos como DST.",
    "howItWorks": [
      "1. A máquina termina de bordar uma flor no lado esquerdo do bastidor e precisa bordar outra flor a 10 cm no lado direito.",
      "2. Na matriz, o digitalizador definiu que a flor 2 é da mesma cor da flor 1.",
      "3. A máquina executa a amarração de segurança (Tie-off) no final da flor 1 e corta o fio com as facas do trimmer.",
      "4. Em seguida, a agulha permanece suspensa no ponto mais alto enquanto o pantógrafo executa um 'Jump' veloz deslizando 10 cm para a direita.",
      "5. A agulha desce na coordenada inicial da flor 2, executa a amarração de entrada (Tie-in) e recomeça a costura normalmente.",
      "6. Ambas as flores ficam perfeitas e sem linhas diagonais feias atravessando o tecido."
    ],
    "beginnerExplanation": "É o 'pulo' que a máquina dá de um lugar para o outro sem costurar! Quando você tem duas estrelinhas separadas no desenho, a máquina borda a primeira estrelinha, dá uma paradinha, levanta a agulha, corre o bastidor bem rápido até a segunda estrelinha e começa a bordar de novo! Se o pulo for grande, ela corta a linha antes de pular; se for um pulinho bem pequenininho, ela pula direto deixando uma linhazinha esticada que você corta com a tesourinha depois!",
    "applications": [
      "Transição suave entre letras separadas em frases e monogramas",
      "Deslocamento rápido entre elementos gráficos distantes de mesma cor na matriz",
      "Posicionamento do bastidor para bordar detalhes isolados em peças grandes",
      "Redução de costuras desnecessárias e preservação da superfície limpa do tecido"
    ],
    "commonErrors": [
      "Deixar o limiar de salto muito alto no software (a máquina não corta a linha e cria 'varais de fios' feios entre as letras)",
      "Programar saltos sem comando de amarração de ponto (o bordado desmancha na primeira lavagem da roupa)",
      "Configurar saltos muito rápidos em tecidos super leves e instáveis, causando repuxamento do bastidor"
    ],
    "troubleshootingTips": [
      "No Wilcom, Hatch ou Pe-Design, configure o 'Limiar de Corte de Salto / Auto Trim' para 2,0 mm ou 3,0 mm para garantir cortes automáticos entre letrinhas",
      "Ative sempre as funções automáticas de 'Tie-in' e 'Tie-off' em todos os objetos para selar o início e o fim dos saltos",
      "Se sua máquina não possui corta-fio automático, use uma tesoura de ponta curvada (tipo garça) para aparar os fios de salto rente ao tecido logo após o bordado",
      "No simulador de pontos da tela, ative a visualização de conectores para enxergar onde os saltos estão acontecendo"
    ],
    "dicaArtrelados": "Para ter um bordado limpo e de alto padrão profissional, configure o corta-fio para atuar em saltos acima de 2 mm! As peças saem da máquina 100% limpas, prontas para embalar e encantar o cliente sem você perder horas limpando fiapos!",
    "voceSabia": "Nos primeiros cartões perfurados das máquinas automáticas criadas por Joseph-Marie Jacquard em 1804 e adaptadas por Isaak Groebli em 1888 para o bordado suíço Schiffli, os saltos eram chamados de 'pontos cegos' porque a agulha era desengatada mecanicamente por alavancas de ferro!",
    "practicalExercise": "Abra uma matriz no seu programa e ative a linha de conectores: observe as linhas pontilhadas de Jump entre os objetos e veja como a máquina viaja pelo desenho sem costurar!",
    "quickSummary": "Movimento em que a máquina desloca o bastidor sem costurar para alcançar o próximo objeto do desenho.",
    "relatedTerms": [
      "Corta-Fio Automático / Trimmer",
      "Ponto de Amarração / Tie-Off",
      "Ponto de Conexão / Travel Run",
      "Pantógrafo da Máquina"
    ],
    "tags": [
      "j-005",
      "jump stitch",
      "salto de ponto",
      "conectores",
      "trimmer",
      "corta-fio",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "COMPUTERIZED EMBROIDERY DATA PROTOCOLS & STITCH INTERPOLATION. Sydney, 2023.",
      "THE COMPLETE GUIDE TO DIGITIZING & VECTOR STITCHING. London, 2022.",
      "ARTRELADOS. Saltos e Conexões: Como Configurar o Jump Stitch para Ter Bordados Limpos e Sem Fiapos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-006-jalecos-scrubs-posicionamento-brasoes",
    "code": "J-006",
    "term": "Jalecos, Scrubs & Posicionamento Técnico de Brasões e Nomes",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês jalot / galoche (traje de proteção) e do inglês scrub (uniforme cirúrgico hospitalar). Padronização de uniformização técnica profissional.",
    "summary": "Protocolo e medidas padrão para bordar nomes, especialidades e brasões em jalecos de médicos, dentistas, veterinários e estudantes.",
    "definition": "O Protocolo de Bordado e Posicionamento Técnico em Jalecos e Scrubs Hospitalares (Medical Apparel Embroidery Protocol, Pocket Placement & Chest Symmetry Standards) é o conjunto de normas dimensionais, estabilização e enquadramento utilizado para personalizar vestimentas de profissionais da saúde (médicos, enfermeiros, cirurgiões-dentistas, psicólogos, veterinários e farmacêuticos). O método estabelece a hierarquia visual obrigatória: Lado Esquerdo do Peito (coração) para Nome do Profissional, CRM/Conselho e Especialidade; Lado Direito do Peito para Logotipo do Hospital/Clínica; e Mangas para Brasão da Universidade/Faculdade. Exige gabaritos de medição precisos e técnicas de entretelamento que suportem lavagens industriais com autoclave e cloro sem deformar o tecido (geralmente Gabardine, Oxford ou Microfibra).",
    "technicalDetails": "Normas técnicas de posicionamento e medidas no jaleco:\n• Peito Esquerdo (Nomes e Especialidades): Posicionado de 16 cm a 18 cm abaixo da costura superior do ombro e alinhado a 8 cm a 10 cm da linha de abotoamento central (ou 1,5 cm acima do bolso superior, se existente);\n• Manga Esquerda / Direita (Brasões de Universidades): Posicionado de 10 cm a 12 cm abaixo da costura da cava do ombro;\n• Dimensões máximas recomendadas: Textos de peito com largura de 8,5 cm a 10,5 cm (altura de 3,5 cm a 5,0 cm); Brasões de manga com diâmetro de 6,5 cm a 8,0 cm;\n• Estabilizador recomendado: Entretela Rasgável 60g ou Termocolante com entretela de corte suave (Cut-Away) no avesso para evitar pinicação na pele;\n• Linhas: 100% Poliéster Trilobal com alta solidez ao cloro e lavagens a 60°C.",
    "howItWorks": [
      "1. O cliente encomenda a personalização de um jaleco de Gabardine de alta gramatura para um médico residente.",
      "2. A bordadeira dobra o jaleco no meio e, com uma régua de posicionamento Artrelados, mede 18 cm para baixo a partir do ombro esquerdo.",
      "3. Marca o centro da cruz com giz de alfaiate e traça a linha horizontal perfeitamente paralela aos botões.",
      "4. Como o jaleco tem tecido nobre e liso, ela utiliza a técnica de flutuação ou bastidor magnético com entretela rasgável de 60g para não deixar marcas de aro.",
      "5. No software, o texto 'Dr. Roberto Silveira' e 'Cardiologia' é configurado com altura mínima de 5 mm para cada letra e densidade 0,40 mm.",
      "6. A máquina executa o bordado com linha de poliéster de alta resistência a alvejantes.",
      "7. O jaleco fica perfeitamente alinhado, elegante e resistente a anos de lavagens hospitalares diárias."
    ],
    "beginnerExplanation": "É o passo a passo certinho para você nunca errar o lugar de bordar o nome do médico ou da dentista no jaleco! Existe uma regrinha de ouro: o nome do profissional e a especialidade ficam SEMPRE do lado esquerdo (em cima do coração), cerca de 18 centímetros para baixo da costura do ombro! Se tiver brasão de faculdade, ele vai na manga! Seguindo essas medidas com uma régua, seus jalecos ficam impecáveis e com padrão de loja de luxo!",
    "applications": [
      "Personalização de jalecos e aventais de médicos, dentistas, nutricionistas e biomédicos",
      "Bordados em conjuntos scrubs de centros cirúrgicos e clínicas de estética",
      "Brasões acadêmicos e símbolos de cursos universitários em mangas de formandos",
      "Uniformes corporativos de laboratórios farmacêuticos e hospitais"
    ],
    "commonErrors": [
      "Bordar o nome muito baixo (quase na altura da cintura) ou colado demais na costura do colarinho",
      "Bordar o texto torto em relação à linha vertical dos botões ou zíper",
      "Usar entretelas grossas e ásperas que incomodam o médico ao encostar na pele por baixo do jaleco"
    ],
    "troubleshootingTips": [
      "Utilize sempre uma Régua Gabarito de Posicionamento para garantir que todos os jalecos de uma mesma clínica fiquem rigorosamente com a mesma altura",
      "Em letras pequenas de jaleco (com menos de 6 mm de altura), utilize Agulha Schmetz 65/9 e reduza a densidade para 0,38 mm para o texto não empilotar",
      "Nunca use linha de viscose em jalecos de profissionais de saúde, pois o cloro e os desinfetantes hospitalares desbotam a viscose; use SEMPRE Poliéster Trilobal",
      "Cole uma película protetora macia termocolante (tipo protetor de bordado infantil) no avesso para cobrir os pontos e garantir conforto total"
    ],
    "dicaArtrelados": "Bordar jalecos é um dos nichos mais lucrativos do bordado computadorizado! Médicos e profissionais de saúde valorizam muito a elegância e pagam com alegria por um trabalho bem alinhado, sem fiapos e com tipografia refinada!",
    "voceSabia": "O uso de jalecos brancos na medicina tornou-se padrão mundial no final do século XIX pelo cirurgião inglês Joseph Lister e pelo médico alemão Robert Koch; antes disso, os médicos usavam sobretudos pretos escuros para esconder as manchas de sangue!",
    "practicalExercise": "Pegue uma camisa ou jaleco de teste: usando uma fita métrica, meça 18 cm para baixo a partir da junção da gola com o ombro esquerdo e 9 cm da linha dos botões: marque a cruz e veja como esse ponto é a posição visualmente perfeita!",
    "quickSummary": "Padrão de medidas e técnicas para bordar nomes, conselhos e brasões em jalecos hospitalares com alinhamento impecável.",
    "relatedTerms": [
      "Posicionamento Técnico de Bastidor",
      "Letreiros & Fontes Pequenas",
      "Flutuação de Tecido / Floating",
      "Linhas de Poliéster Trilobal"
    ],
    "tags": [
      "j-006",
      "jalecos",
      "scrubs",
      "medicina",
      "posicionamento",
      "uniformes",
      "enxoval profissional",
      "artrelados"
    ],
    "bibliographicReferences": [
      "STANDARDS FOR MEDICAL APPAREL EMBROIDERY & UNIFORM IDENTIFICATION. Chicago, 2023.",
      "THE PROFESSIONAL EMBROIDERER'S PLACEMENT GUIDE. London, 2022.",
      "ARTRELADOS. Jalecos Impecáveis: O Guia Definitivo de Medidas, Posicionamento e Fontes para a Área da Saúde. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-007-juta-aniagem-fibras-rusticas-naturais",
    "code": "J-007",
    "term": "Juta, Aniagem & Tecidos de Fibra Rústica Natural no Bordado",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminina / Termo têxtil vegetal.",
    "origin": "Do sânscrito juta / jhot (trança de fibras vegetais de Corchorus capsularis). Fibra têxtil vegetal de trama aberta e rústica.",
    "summary": "Técnica especial de bordar em sacaria de juta e tecidos rústicos com trama aberta usando plástico hidrossolúvel por cima e entretela pesada por baixo.",
    "definition": "O Bordado Técnico em Juta, Aniagem e Fibras Vegetais Rústicas de Trama Aberta (Jute Burlap Embroidery, Heavy Open-Weave Stabilization & Top Solvy Protocol) é o método de processamento mecânico para bordar sobre tecidos confeccionados com fibras grossas e ásperas de celulose vegetal natural (como juta, sisal, linho rústico e cânhamo). Devido aos vãos abertos entre os fios da trama e à aspereza natural da fibra, o bordado exige a técnica de 'Sanduíche Duplo': uma camada de entretela rasgável pesada (80g a 100g) ou termocolante no avesso para ancoragem estrutural e uma folha de filme hidrossolúvel (Solvy) no topo para impedir que os pontos afundem e sumam dentro dos buracos da trama.",
    "technicalDetails": "Diretrizes de engenharia de pontos e estabilização para juta:\n• Estabilização Obrigatória: Entretela Rasgável Pesada (80g a 100g) por baixo + Filme Hidrossolúvel (Solvy 25 a 35 micras) por cima;\n• Agulha recomendada: Schmetz ou Groz-Beckert 80/12 ou 90/14 Ponta Fina (Sharp / Microtex) para perfurar as fibras duras sem deflexão;\n• Densidade de ponto: Aumentar a densidade em 15% a 20% (espaçamento entre pontos de 0,36 mm a 0,38 mm);\n• Underlay obrigatório: Grade dupla em Tatami (Double Tatami Underlay) com ângulo cruzado a 45°/135° para criar uma laje que tampe os vãos da juta;\n• Velocidade operacional: Reduzir para 500 a 650 PPM.",
    "howItWorks": [
      "1. A cliente encomenda sacolas ecológicas de juta (Ecobags) ou caminhos de mesa rústicos de aniagem para um casamento no campo.",
      "2. Como a juta tem fendas abertas e solta fiapos, a bordadeira não prende o tecido direto no bastidor para não esgarçar a trama.",
      "3. Ela prende a entretela pesada de 80g no bastidor e aplica spray adesivo temporário reposicionável.",
      "4. Posiciona a juta sobre a entretela e coloca uma folha de plástico hidrossolúvel (Solvy) transparente por cima da juta.",
      "5. No software, a matriz foi programada com uma base sólida de tatami prévio para selar o tecido.",
      "6. A máquina borda o desenho: a agulha 90/14 corta as fibras duras e os pontos apoiam-se perfeitamente lisos sobre o plástico.",
      "7. Ao terminar, ela rasga o plástico excedente e passa um paninho úmido: o bordado fica super nítido, colorido e sem nenhum ponto engolido pela juta!"
    ],
    "beginnerExplanation": "A juta é aquele tecido rústico de saco de café ou de batata que é lindo para decoração rústica de festas e ecobags! Como os fios da juta são grossos e cheios de buracos, se você tentar bordar direto, os pontinhos caem nos buracos e o bordado fica horrível e invisível! O grande segredo é colocar um plástico transparente (hidrossolúvel) por cima da juta antes de bordar: os pontinhos costuram em cima do plástico e ficam perfeitamente lisos e brilhantes! Depois é só tirar o plástico com um pingo de água!",
    "applications": [
      "Ecobags, sacolas ecológicas e bolsas rústicas de praia em juta natural",
      "Caminhos de mesa, sousplats e jogos americanos rústicos para eventos campestres",
      "Embalagens de presentes finos, sacos de café gourmet e vinhos artesanais",
      "Almofadas rústicas e artesanato de luxo estilo Farmhouse e Boho Chic"
    ],
    "commonErrors": [
      "Bordar em juta sem filme hidrossolúvel no topo (os pontos afundam nos buracos e as letras somem)",
      "Usar agulhas finas (65/9 ou 70/10) que entortam e quebram ao bater na fibra dura e seca da juta",
      "Puxar a juta com força no bastidor comum, deformando as linhas da trama do tecido"
    ],
    "troubleshootingTips": [
      "Use SEMPRE a técnica de Flutuação (Floating): prenda a entretela no bastidor e cole a juta com cola spray temporária para manter a trama reta",
      "Aplique uma camada de filme plástico solúvel no topo e execute uma costura de alinhamento prévia (Basting Stitch) para segurar tudo",
      "Substitua a agulha por uma nova 90/14 Sharp (Microtex ou Jeans) com ponta afiada para atravessar o tecido seco sem esforço",
      "Limpe a lançadeira da máquina logo após bordar juta, pois o tecido solta bastante pó de fibra vegetal"
    ],
    "dicaArtrelados": "A combinação de juta com bordado em cores vivas (como branco, vermelho ou dourado) cria peças rústicas de altíssimo valor agregado! Com o plástico hidrossolúvel no topo, seu bordado na juta vai parecer uma pintura!",
    "voceSabia": "A juta é a segunda fibra vegetal mais cultivada e utilizada em todo o planeta Terra, perdendo apenas para o algodão; além de 100% biodegradável e sustentável, uma plantação de juta absorve toneladas de carbono da atmosfera por hectare!",
    "practicalExercise": "Pegue um pedaço de juta ou saco de aniagem: faça um teste bordando uma letra sem plástico e outra letra com plástico hidrossolúvel por cima: compare a nitidez impressionante da letra com plástico!",
    "quickSummary": "Técnica de bordar tecido de juta usando entretela firme por baixo e plástico solúvel por cima para os pontos não afundarem.",
    "relatedTerms": [
      "Filme Hidrossolúvel / Solvy",
      "Flutuação de Tecido / Floating",
      "Tipos de Tecidos",
      "Agulha Jeans / Denim"
    ],
    "tags": [
      "j-007",
      "juta",
      "aniagem",
      "fibras naturais",
      "ecobag",
      "solvy",
      "hidrossoluvel",
      "artrelados"
    ],
    "bibliographicReferences": [
      "NATURAL FIBER TEXTILES & OPEN-WEAVE EMBROIDERY TECHNIQUES. London, 2023.",
      "THE EMBROIDERER'S GUIDE TO SPECIALTY SUBSTRATES. New York, 2022.",
      "ARTRELADOS. Bordado Perfeito em Juta e Fibras Rústicas: O Segredo do Plástico Superior e da Flutuação. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-008-jeans-denim-pesado-bordado-bolsos",
    "code": "J-008",
    "term": "Jeans, Denim Pesado & Bordado em Bolsos e Costuras Espessas",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino / Termo têxtil de sarja de algodão.",
    "origin": "Do francês serge de Nîmes (tecido de sarja da cidade francesa de Nîmes = denim) e de Gênova (jeans, marinheiros genoveses).",
    "summary": "Técnicas e regulagens para bordar peças em jeans grosso, jaquetas e bolsos traseiros sem quebrar agulhas nem desviar pontos.",
    "definition": "O Bordado Técnico em Jeans, Denim Pesado e Estruturas de Sarja Encorpada (Heavy Denim Embroidery, Pocket Stitching & Seam Deflection Prevention) é a especialidade de bordar peças confeccionadas em sarja pesada de algodão com trama diagonal (gramaturas entre 10 oz e 14 oz / 300g/m² a 480g/m²). Devido à alta densidade dos fios de urdume e trama e à presença de costuras sobrepostas grossas (espigões de costura dupla ou pesponto grosso), o bordado em jeans requer agulhas reforçadas anti-deflexão (Jeans/Denim ou Titanium), compensação de repuxo generosa e suportes de bastidor especiais para bolsos fechados para evitar quebras de agulha e perda de sincronismo.",
    "technicalDetails": "Diretrizes técnicas para bordado em jeans e denim:\n• Agulha recomendada: Schmetz Jeans/Denim System 130/705H-J ou DBxK5-NY2 tamanho 80/12 a 90/14 (haste reforçada e ponta aguda de penetração média);\n• Estabilizador recomendado: Entretela Rasgável Média (50g a 60g) ou Entretela de Recorte Leve (Cut-Away) para jeans com elastano/stretch;\n• Compensação de Repuxo (Pull Compensation): 0,40 mm a 0,55 mm para compensar a rigidez da sarja;\n• Densidade de Ponto: Densidade padrão de 0,40 mm com underlay tipo tatami aberto ou contorno em ponto de corrida;\n• Velocidade da máquina: 600 a 750 PPM para absorver o impacto mecânico nas costuras duplas.",
    "howItWorks": [
      "1. A cliente traz uma jaqueta jeans grossa de 12 oz para bordar um grande logotipo floral nas costas e um detalhe no bolso frontal.",
      "2. No bolso frontal (que é uma peça fechada e estreita), a bordadeira utiliza um minibastidor ou a técnica de flutuação com entretela colada com spray temporário para não descosturar o forro do bolso.",
      "3. Instala na máquina uma agulha especial Schmetz Jeans 90/14 com haste reforçada que não entorta.",
      "4. No software, ela garante que os pontos não fiquem excessivamente concentrados em cima do caroço da costura grossa.",
      "5. Ajusta a velocidade da máquina para 650 PPM.",
      "6. A agulha perfura o jeans com som firme e seco, sem flexionar para os lados e sem raspar na chapa de agulha.",
      "7. O bordado sai com linhas perfeitas, preenchimento uniforme e o jeans mantém seu caimento original sem franzir."
    ],
    "beginnerExplanation": "O jeans é um tecido grosso, firme e maravilhoso de bordar, mas como é duro e tem aquelas costuras grossas de fábrica, ele pode entortar a agulha se você usar uma agulha comum fininha! Para bordar jeans como um profissional, você só precisa colocar uma agulha própria para jeans (tamanho 90/14) e diminuir um pouquinho a velocidade da máquina. Se o jeans tiver elastano (aquele que estica), use entretela de recorte para o desenho não enrugar quando a pessoa vestir a calça!",
    "applications": [
      "Bordados decorativos em costas e mangas de jaquetas jeans e coletes",
      "Personalização de bolsos traseiros e dianteiros de calças e shorts jeans",
      "Bonés e chapéus estilo bucket hat confeccionados em tecido denim",
      "Aventais profissionais e uniformes de oficinas em jeans pesado"
    ],
    "commonErrors": [
      "Usar agulha fina universal 70/10 (a agulha bate na costura grossa do jeans, entorta e bate na chapa de ferro)",
      "Bordar jeans com elastano usando entretela rasgável fraca (o bordado deforma após a primeira lavagem)",
      "Usar densidade de ponto excessiva criando uma placa dura como madeira sobre a roupa"
    ],
    "troubleshootingTips": [
      "Substitua a agulha comum pela agulha Schmetz Jeans/Denim 90/14: ela tem a haste mais grossa e ponta especial para não desviar",
      "Se a agulha tiver que passar por cima de uma costura muito grossa, use um martelinho de borracha para bater e amassar o volume da costura antes de bordar",
      "Para jeans com elastano (Strech Denim), utilize SEMPRE Entretela de Recorte (Cut-Away) com fixação por spray adesivo",
      "Lubrifique a linha com algumas gotas de silicone líquido para reduzir o atrito da passagem do fio pelo tecido grosso"
    ],
    "dicaArtrelados": "Bordados em jaquetas jeans estão super na moda e têm altíssimo valor comercial! Para bordar bolsos de calça jeans sem precisar descosturar o bolso, use a técnica de flutuação em bastidor pequeno de braço livre!",
    "voceSabia": "O tecido jeans azul tradicional chama-se 'Blue Jeans' porque no século XVI os marinheiros da cidade de Gênova (Itália) usavam calças resistentes feitas com esse tecido e tingidas com o pigmento azul de anil vegetal (índigo natural)!",
    "practicalExercise": "Pegue uma perna de calça jeans velha: coloque no bastidor com agulha 90/14 e teste o bordado de um monograma: sinta a firmeza dos pontos e a estabilidade maravilhosa do tecido!",
    "quickSummary": "Técnicas de agulha reforçada (90/14) e estabilização para bordar jeans pesado e jaquetas com total firmeza.",
    "relatedTerms": [
      "Agulha Jeans / Denim",
      "Compensação de Repuxo",
      "Flutuação de Tecido / Floating",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-008",
      "jeans",
      "denim",
      "sarja",
      "jaqueta jeans",
      "agulha jeans",
      "tecidos pesados",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DENIM MANUFACTURING & INDUSTRIAL EMBROIDERY PROCESSING. Greensboro, 2023.",
      "THE JEANSWEAR EMBROIDERY HANDBOOK. Milan, 2022.",
      "ARTRELADOS. Jaquetas e Jeans de Luxo: Como Bordar Denim Pesado Sem Quebrar Agulhas e Sem Enrugar. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-009-jaquetas-corta-vento-nylon-resinado",
    "code": "J-009",
    "term": "Jaquetas Corta-Vento, Nylon Resinado & Impermeabilização",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminina composto.",
    "origin": "Do inglês windbreaker (quebra-vento) e do polímero sintético Nylon (DuPont, 1935). Tecidos técnicos impermeáveis com resina PU.",
    "summary": "Técnica para bordar tecidos impermeáveis de nylon fino (corta-vento e jaquetas) sem furar demais o tecido e sem vazar água.",
    "definition": "O Bordado Técnico em Jaquetas Corta-Vento, Nylon Ripstop e Tecidos Técnicos Resinados (Windbreaker Shell Embroidery, Coated Nylon Stabilization & Seam Sealing Protection) é a metodologia aplicada na personalização de vestuário esportivo e corporativo confeccionado com tecidos sintéticos ultraleves de poliamida ou poliéster revestidos com membrana impermeável de Poliuretano (PU) ou Teflon (DWR - Durable Water Repellent). Como a penetração da agulha perfura a película impermeável e tecidos finos de nylon são propensos a repuxar e 'enrugar como papel celofane', o processo exige densidades mais leves, agulhas ultrafinas de ponta bola ou microtex (tamanho 65/9 ou 70/10), fixação por flutuação sem esticar o tecido e aplicação de fita termocolante seladora de costura (Seam Tape) no avesso para manter a impermeabilidade.",
    "technicalDetails": "Diretrizes de engenharia para bordados em nylon resinado e corta-vento:\n• Agulha recomendada: Schmetz Microtex ou Ball Point tamanho 65/9 a 70/10 (minimiza o diâmetro dos furos de penetração);\n• Estabilizador recomendado: Entretela de Recorte Macia (Cut-Away Leve 40g a 50g) colada com spray temporário para suporte permanente;\n• Densidade de Ponto: Reduzir a densidade para 0,45 mm a 0,50 mm (densidade leve para não cortar o tecido);\n• Underlay: Linha de contorno simples (Edge Run) ou zigue-zague leve; NUNCA usar tatami pesado de base;\n• Selagem Pós-Bordado: Aplicação de fita termoplástica seladora de costuras no avesso com ferro térmico a 130°C.",
    "howItWorks": [
      "1. Uma empresa de ciclismo encomenda 50 jaquetas corta-vento de nylon ripstop impermeável com o logotipo no peito.",
      "2. Como o nylon é liso, escorregadio e marca facilmente com o aperto do bastidor (queimadura de aro), a bordadeira utiliza a técnica de flutuação.",
      "3. Prende a entretela de recorte macia (Cut-Away) no bastidor e aplica uma névoa leve de cola spray reposicionável.",
      "4. Assenta o peito da jaqueta corta-vento suavemente sobre a cola, sem puxar nem esticar o tecido.",
      "5. No software, ela reduziu a densidade dos pontos cheios em 15% e removeu preenchimentos desnecessários.",
      "6. Instala uma agulha ultrafina 65/9 na máquina e costura o logotipo em velocidade moderada.",
      "7. No acabamento, ela passa uma fita seladora termoadesiva no avesso dos pontos com o ferrinho: os furos da agulha são 100% vedados contra chuva!"
    ],
    "beginnerExplanation": "A jaqueta corta-vento é feita daquele nylon fininho, brilhante e impermeável que protege do vento e da chuva! Se você tentar bordar uma jaqueta dessa do jeito comum, a agulha grossa fura tudo parecendo um picotado de papel e o tecido enruga todinho! O segredo é usar uma agulha bem fininha (65/9), programar uma matriz com menos pontos (mais leve) e nunca apertar o tecido dentro do aro do bastidor: você prende a entretela e 'cola' a jaqueta por cima com spray adesivo!",
    "applications": [
      "Jaquetas corta-vento para equipes de corrida, ciclismo, motociclismo e montanhismo",
      "Uniformes corporativos impermeáveis e jaquetas executivas esportivas",
      "Capas de chuva, jaquetas náuticas e bolsas de nylon esportivo",
      "Guarda-chuvas promocionais e tendas técnicas com logotipos bordados"
    ],
    "commonErrors": [
      "Apertar o nylon resinado direto no bastidor tradicional (cria marcas brancas de atrito e deforma o tecido para sempre)",
      "Usar agulha grossa 90/14 que abre buracos gigantes no nylon, rasgando o tecido ao longo da linha de bordado",
      "Usar entretela rasgável comum (com as lavagens e o vento, o bordado deforma e franze o peito da jaqueta)"
    ],
    "troubleshootingTips": [
      "NUNCA aperte jaqueta corta-vento dentro do bastidor convencional: use SEMPRE a técnica de Flutuação com spray temporário ou Bastidor Magnético",
      "Troque a agulha por uma Schmetz Microtex 65/9 ou 70/10 para criar furos microscópicos imperceptíveis",
      "Aplique Fita Seladora Termocolante de Costura (Seam Sealing Tape) no avesso com ferro morno para restabelecer 100% da barreira contra água",
      "Reduza a velocidade de bordado para 550 a 600 PPM para garantir formação perfeita da laçada sem repuxar o nylon liso"
    ],
    "dicaArtrelados": "Para valorizar jaquetas corta-vento, use matrizes com contornos limpos ou pontos tatami abertos! O acabamento fica levinho, a jaqueta mantém seu caimento macio e o cliente fica apaixonado pela qualidade!",
    "voceSabia": "O tecido Nylon foi a primeira fibra sintética criada pelo homem em 1935 pelo químico Wallace Carothers nos laboratórios da DuPont; seu primeiro uso comercial em grande escala foi nas meias-calças femininas em 1940 e nos paraquedas militares durante a Segunda Guerra Mundial!",
    "practicalExercise": "Pegue um pedaço de nylon fininho: coloque entretela de recorte no bastidor, use cola spray temporária, instale agulha 65/9 e borde uma frase pequena: sinta como o tecido fica lisinho e sem nenhuma ruga!",
    "quickSummary": "Técnica de flutuação e agulha fina (65/9) para bordar jaquetas corta-vento e nylon fino sem marcar nem enrugar.",
    "relatedTerms": [
      "Flutuação de Tecido / Floating",
      "Impermeabilização Pré-Bordado",
      "Agulha Ponta Fina / Microtex",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-009",
      "corta-vento",
      "nylon",
      "jaquetas",
      "impermeavel",
      "flutuacao",
      "microtex",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TECHNICAL TEXTILE EMBROIDERY: COATED FABRICS & WATERPROOF APPAREL. Munich, 2023.",
      "THE SPORTSWEAR EMBROIDERY PRODUCTION HANDBOOK. Manchester, 2022.",
      "ARTRELADOS. Corta-Vento Perfeito: Como Bordar Tecidos Impermeáveis e Nylon Fino Sem Deixar Marcas de Aro. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-010-jersey-meia-malha-algodao-enrolamento",
    "code": "J-010",
    "term": "Jersey, Meia Malha de Algodão & Prevenção de Enrolamento de Bordas",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino / Termo têxtil de malharia circular.",
    "origin": "Da Ilha de Jersey (Canal da Mancha, Inglaterra), famosa pela produção histórica de malhas finas de lã e algodão desde a Idade Média.",
    "summary": "Estratégia para bordar camisetas de meia malha 100% algodão e viscolycra sem enrugar, sem repuxar e sem deixar as bordas enrolarem.",
    "definition": "O Bordado Técnico em Tecidos de Malha Jersey, Meia Malha 100% Algodão e Malhas Circulares com Elastano (Single Jersey Knit Stabilization, Tension Balance & Edge Curl Control) é o conjunto de procedimentos de estabilização e parametrização de matrizes voltado para camisetas clássicas (T-shirts), bodies de bebês e roupas casuais de malharia por trama simples. Por sua estrutura elástica composta por laçadas interligadas que tendem a enrolar nas bordas e deformar facilmente quando esticadas no bastidor, o bordado em jersey exige agulhas Ponta Bola (Ball Point SES), entretelas de recorte macias (Cut-Away / Não-Tecido Poliéster) e compensação de repuxo adequada para evitar o franzimento (puckering) e furos nas fibras de algodão.",
    "technicalDetails": "Diretrizes e parâmetros para meia malha e jersey:\n• Agulha obrigatória: Schmetz ou Groz-Beckert Ponta Bola Leve (Ball Point 130/705H SUK / DBxK5-SES) tamanho 70/10 a 75/11 (afasta as laçadas da malha sem romper os fios);\n• Estabilizador recomendado: Entretela de Recorte Macia (Cut-Away Poliéster 50g) com fixação por spray temporário ou termocolante lavável;\n• Compensação de Repuxo (Pull Compensation): 0,40 mm a 0,50 mm;\n• Underlay obrigatório: Grade de Tatami com ângulo oposto (90°) ou zigue-zague leve para travar a elasticidade da malha antes do ponto cheio;\n• Tensão da Linha Superior: Reduzir ligeiramente a tensão em 10% a 15% para que o ponto não aperte a malha excessivamente.",
    "howItWorks": [
      "1. O ateliê recebe uma encomenda de 30 camisetas de meia malha penteada 100% algodão 30.1 para um evento corporativo.",
      "2. Se a bordadeira esticar a camiseta ao colocar no bastidor, quando ela tirar a peça do aro, a malha vai encolher de volta e o bordado ficará completamente enrugado.",
      "3. Ela coloca a entretela de recorte macia no bastidor e usa spray adesivo temporário para apoiar a camiseta no aro sem puxar nem 1 milímetro da elasticidade.",
      "4. Troca a agulha da máquina para uma Ponta Bola 75/11 (Ball Point).",
      "5. No software, a matriz tem compensação de repuxo de 0,45 mm e pontos de suporte (underlay) bem distribuídos.",
      "6. A máquina executa o bordado suavemente.",
      "7. Ao retirar a camiseta do bastidor, o tecido ao redor do bordado permanece perfeitamente liso e plano, com toque macio e caimento natural."
    ],
    "beginnerExplanation": "Meia malha (ou jersey) é o tecido clássico das nossas camisetas de algodão do dia a dia e dos macacõezinhos de bebê! Como a malha estica para todos os lados, tem um segredo que você NUNCA pode esquecer: NUNCA estique a camiseta ao colocar no bastidor! Se você esticar, na hora que tirar do aro o bordado enruga todinho como uma uva passa! Use sempre agulha Ponta Bola (que não fura a malha) e entretela de recorte macia colada com spray adesivo!",
    "applications": [
      "Camisetas promocionais, T-shirts de moda e camisetas corporativas em algodão 30.1 e 24.1",
      "Enxovais de bebês, bodies, mijões e pijaminhas infantis de malha macia",
      "Roupas fitness e peças casuais de viscolycra e algodão com elastano",
      "Bordados delicados em golas, mangas e bolsos de peças de malharia"
    ],
    "commonErrors": [
      "Esticar a camiseta com as mãos ao apertar o parafuso do bastidor (causa enrugamento e franzimento instantâneo)",
      "Usar agulha de ponta afiada comum (corta os fios de algodão da malha, abrindo pequenos furinhos que viram buracos na primeira lavagem)",
      "Usar entretela rasgável simples (após a lavagem, a entretela se desfaz e o bordado deforma no peito da camiseta)"
    ],
    "troubleshootingTips": [
      "Troque SEMPRE a agulha da máquina pela agulha Ponta Bola (Ball Point / SUK / SES): ela passa entre os fios da malha sem rasgar",
      "Para camisetas que esticam muito, use SEMPRE Entretela de Recorte (Cut-Away): ela fica invisível pelo avesso e sustenta o bordado para sempre",
      "Ao colocar a camiseta no bastidor, encoste o tecido com delicadeza: o tecido deve ficar plano, mas sem nenhuma tensão de estiramento",
      "Passe um ferro com vapor suave no avesso após o bordado para amaciar a fibra de algodão e dar caimento de alfaiataria à camiseta"
    ],
    "dicaArtrelados": "A regra de ouro das camisetas perfeitas: 'Malha no bastidor se apoia, nunca se estica!'. Usando agulha ponta bola e entretela de recorte, suas camisetas nunca mais vão enrugar!",
    "voceSabia": "O tecido Jersey ficou mundialmente famoso na alta moda em 1916 graças à estilista Coco Chanel, que foi a primeira designer a usar a meia malha jersey (usada até então apenas em roupas de baixo masculinas) para criar vestidos femininos elegantes e confortáveis!",
    "practicalExercise": "Pegue uma camiseta velha de algodão: borde um pequeno círculo usando agulha ponta bola com entretela de recorte e sinta como o tecido fica lisinho e sem nenhum repuxado!",
    "quickSummary": "Técnica com agulha ponta bola e entretela de recorte sem esticar a malha para camisetas perfeitamente lisas.",
    "relatedTerms": [
      "Agulha Ponta Bola / Ball Point",
      "Entretela de Recorte / Cut-Away",
      "Compensação de Repuxo",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-010",
      "jersey",
      "meia malha",
      "camisetas",
      "algodao",
      "ponta bola",
      "cut-away",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KNITWEAR EMBROIDERY MECHANICS & STRETCH FABRIC STABILIZATION. Zurich, 2023.",
      "THE APPAREL MANUFACTURING HANDBOOK: T-SHIRT & KNIT EMBROIDERY. Chicago, 2022.",
      "ARTRELADOS. Camisetas Perfeitas Sem Enrugar: O Manual de Ouro para Bordar Meia Malha e Jersey com Excelência. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-021-jogo-de-agulhas-dbxk5-130-705h",
    "code": "J-021",
    "term": "Agulhas Industriais DBxK5 e Domésticas",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Dos sistemas de padronização industrial alemães DIN e japoneses JIS desenvolvidos por Schmetz (1851), Groz-Beckert (1852) e Organ Needles (1920).",
    "summary": "Diferença vital entre agulhas de cabo redondo (industriais DBxK5) e agulhas de cabo achatado (domésticas 130/705H) e como escolher o tamanho certo.",
    "definition": "O Jogo de Agulhas Padronizadas Industriais Sistema DBxK5 e Domésticas Sistema 130/705H / HAx1EB (Industrial Round-Shank vs Flat-Shank Household Needle Systems) é a classificação metrológica que define a geometria do cabo (haste de fixação), da cava (Scarf) e do olho das agulhas de bordar computadorizado. As máquinas domésticas (Brother, Janome, Bernina, Singer) utilizam agulhas com cabo achatado em um dos lados (Flat Shank 130/705H / HAx1EB) para garantir que a agulha só entre na posição correta (cava virada para trás). Já as máquinas industriais e semiprofissionais (Tajima, Barudan, SWF, Happy, Ricoma, Brother PR) utilizam agulhas de cabo totalmente redondo e reforçado (Round Shank DBxK5 / 1738A), exigindo que o operador alinhe o olho e a cava manualmente a 5° em direção ao bico da lançadeira.",
    "technicalDetails": "Especificações comparativas dos sistemas de agulha:\n• Sistema Doméstico (130/705H / HAx1EB): Cabo de 2,04 mm com face achatada posterior, comprimento até o olho de 33,9 mm;\n• Sistema Industrial (DBxK5 / 1738A): Cabo cilíndrico liso de 1,62 mm a 2,00 mm, projetado para dissipação de vibração a mais de 1.200 PPM;\n• Geometria de Olho Especial de Bordado: Olho 2 vezes mais longo e alargado em relação a agulhas de costura comum para passagem suave do fio de poliéster 40wt;\n• Escala de Tamanhos (NM/Singer): 65/9 (para tecidos finos e sedas), 75/11 (o tamanho universal mais versátil), 80/12 (para sarja e toalhas) e 90/14 (para jeans e lonas);\n• Revestimentos: Aço niquelado polido, Nitreto de Titânio Dourado (PD/TIN) ou Cromo Duro.",
    "howItWorks": [
      "1. A bordadeira possui uma máquina doméstica (como a Brother PE810L ou Janome MC500E) e vai trocar a agulha após 8 horas de trabalho.",
      "2. Ela pega uma caixinha de agulhas Schmetz Embroidery 75/11 (Sistema 130/705H).",
      "3. Nota que a parte de trás do cabinho da agulha tem uma face reta e achatada.",
      "4. Encaixa a agulha com a parte chata virada para o fundo da máquina e sobe até o batente máximo.",
      "5. Aperta o parafuso com a mão ou chavinha de fenda leve.",
      "6. A cava da agulha fica automaticamente na posição milimétrica perfeita na frente da lançadeira.",
      "7. A máquina borda com laçada impecável, sem bater na chapa e sem quebrar fios."
    ],
    "beginnerExplanation": "É a regra número 1 sobre agulhas que toda bordadeira precisa saber! As agulhas de máquinas domésticas têm o cabinho 'achatadinho' de um lado: você SEMPRE coloca essa parte chatinha virada para trás! Isso foi feito de propósito para você nunca colocar a agulha torta! Já as máquinas industriais grandes de fábrica usam agulhas de cabo totalmente redondinho (DBxK5). Ter sempre caixinhas de agulhas 75/11 novas no ateliê é o maior segredo para um bordado sem falhas!",
    "applications": [
      "Seleção correta de agulhas para máquinas domésticas monoagulha (Brother, Janome, Bernina, Elna)",
      "Troca e alinhamento de agulhas em máquinas industriais multicabeçotes (Tajima, Barudan, SWF)",
      "Adaptação de espessura de agulha conforme o tecido (65/9 para seda até 90/14 para jeans)",
      "Prevenção de quebra de linha, furos no tecido e danos mecânicos na lançadeira"
    ],
    "commonErrors": [
      "Tentar colocar agulha de cabo redondo industrial em máquina doméstica (a agulha não encaixa ou fica torta)",
      "Colocar a agulha doméstica com a parte achatada virada para a frente (a máquina não forma a laçada e a agulha bate na lançadeira)",
      "Não empurrar a agulha até o topo máximo da barra de agulha ao apertar o parafuso"
    ],
    "troubleshootingTips": [
      "Ao instalar agulha em máquina doméstica: sinta com a ponta do dedo se a parte CHATA do cabo está 100% virada para trás",
      "Empurre a agulha para cima até o limite máximo do batente antes de girar o parafuso de fixação",
      "Substitua a agulha a cada 8 a 10 horas de bordado contínuo: uma agulha nova custa centavos e evita 90% dos problemas no ateliê",
      "Em máquinas industriais de cabo redondo (DBxK5): posicione a cava (o rebaixo da agulha) rigorosamente voltada para a parte de trás com inclinação de 5° para a direita"
    ],
    "dicaArtrelados": "Se sua máquina começar a arrebentar a linha sem motivo, a primeira coisa a fazer é: troque a agulha por uma Schmetz 75/11 novinha em folha! Em 9 a cada 10 vezes, isso resolve o mistério na hora!",
    "voceSabia": "A empresa alemã Schmetz fabrica agulhas de costura e bordado desde 1851 na cidade de Herzogenrath e produz mais de 300 milhões de agulhas de altíssima precisão por ano para atender o mundo todo!",
    "practicalExercise": "Pegue uma agulha da sua caixinha: passe o dedo no cabinho e sinta o lado achatado e o lado arredondado; depois olhe a pontinha bem de perto na luz para identificar a cava (o buraquinho rebaixado) e o olho da agulha!",
    "quickSummary": "Identificação dos padrões de agulhas domésticas (cabo achatado 130/705H) e industriais (cabo redondo DBxK5) para operação perfeita.",
    "relatedTerms": [
      "Agulha de Bordar",
      "Agulha de Titânio / Titanium",
      "Lançadeira Rotativa",
      "Tensão da Linha Superior"
    ],
    "tags": [
      "j-021",
      "agulhas",
      "dbxk5",
      "130/705h",
      "cabo achatado",
      "schmetz",
      "groz-beckert",
      "artrelados"
    ],
    "bibliographicReferences": [
      "NEEDLE GEOMETRY & KINEMATIC LOOP FORMATION IN EMBROIDERY MACHINES. Aachen, 2023.",
      "THE SCHMETZ TECHNICAL EMBROIDERY HANDBOOK. Herzogenrath: Schmetz GmbH, 2022.",
      "ARTRELADOS. O Guia Supremo das Agulhas: Como Escolher o Sistema e o Tamanho Perfeito para Nunca Mais Quebrar Linhas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-022-jaqueta-jeans-patches-termocolantes-bordado-direto",
    "code": "J-022",
    "term": "Jaqueta Jeans com Patches Termocolantes & Bordado Direto",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo feminina composto.",
    "origin": "Do inglês patch (remendo decorativo/emblema bordado) e do francês denim/jeans. Tendência de moda e customização personalizada de luxo.",
    "summary": "Técnicas profissionais para customizar jaquetas jeans usando bordado direto nas costas ou aplicando patches e apliques termocolantes.",
    "definition": "A Customização Técnica de Jaquetas Jeans com Bordado Direto, Apliques Estruturados e Patches Termocolantes (Denim Jacket Custom Embellishment, Direct Back Stitching & Heat-Seal Patch Application) é o processo artesanal e industrial de personalização de jaquetas em sarja jeans pesada. O processo abrange duas técnicas complementares de alto padrão: 1) O Bordado Direto nas Costas (Direct Embroidery), que requer desencaixe do forro, bastidores grandes de alta pressão ou magnéticos e agulhas Jeans 90/14; e 2) A Aplicação de Patches Bordados Termocolantes (Embroidered Heat-Seal Patches), onde os emblemas são bordados separadamente com bordas em ponto de overlock/merrow e selados à jaqueta com filme termofusível a 160°C sob prensa térmica.",
    "technicalDetails": "Parâmetros técnicos para jaquetas jeans personalizadas:\n• Bordado Direto nas Costas: Uso de Bastidor Grande (20x30 cm ou 20x36 cm) com entretela rasgável dupla ou recorte colada com spray;\n• Agulha recomendada: Schmetz Jeans 90/14 ou DBxK5-NY2 (reforçada);\n• Aplicação de Patches Termocolantes: Filme Termocolante Definitivo (Poliamida/Poliuretano 100 micras) prensado a 160°C por 15 segundos com pressão média (40 PSI);\n• Costura de Segurança perimétrica: Pesponto em ponto de corrida de 2,5 mm ao longo da borda do patch para garantir resistência a lavagens em máquina;\n• Compensação de repuxo no bordado direto: 0,45 mm a 0,55 mm para compensar o peso do denim.",
    "howItWorks": [
      "1. Uma marca de moda encomenda uma coleção de 20 jaquetas jeans vintage customizadas com ilustrações florais e frases nas costas.",
      "2. A bordadeira decide fazer o desenho principal das costas em bordado direto e 3 emblemas menores no estilo patch nos ombros.",
      "3. Para as costas: coloca a jaqueta no bastidor magnético grande com entretela firme, cuidando para o resto da jaqueta não puxar o bastidor para baixo.",
      "4. Instala agulha Schmetz Jeans 90/14 e borda a arte com pontos tatami e ponto cheio brilhantes.",
      "5. Para os ombros: ela borda os patches em entretela hidrossolúvel com filme termocolante no avesso, recorta a laser e sela na prensa térmica.",
      "6. Passa um pesponto sutil de reforço nas bordas dos patches.",
      "7. A jaqueta fica com visual espetacular de passarela de moda e durabilidade para a vida inteira!"
    ],
    "beginnerExplanation": "Customizar jaquetas jeans é um dos trabalhos mais valorizados e estilosos do mundo da moda! Você pode bordar direto nas costas da jaqueta usando um bastidor grande e agulha para jeans, ou pode criar aqueles emblemas bordados super descolados (os famosos patches) e colar na jaqueta com a prensa de ferro quente! Uma jaqueta jeans simples de R$ 100 reais, depois de receber um bordado lindo nas costas, é vendida facilmente por mais de R$ 400 reais em lojas e feiras de moda!",
    "applications": [
      "Customização de jaquetas jeans para coleções de moda, cantores e influenciadores",
      "Emblemas e patches para motoclubes, fardamentos e times esportivos",
      "Jaquetas jeans noivas ('Bride Jackets') personalizadas para casamentos modernos",
      "Jaquetas infantis com apliques divertidos, letras felpudas e nomes bordados"
    ],
    "commonErrors": [
      "Deixar o peso do restante da jaqueta pendurado fora da máquina (o peso puxa o bastidor e entorta o desenho)",
      "Usar agulhas finas de bordar comum que quebram ao bater na sarja grossa do jeans",
      "Colar patches termocolantes apenas com ferro doméstico fraco sem dar o tempo e a temperatura corretos de fusão da cola"
    ],
    "troubleshootingTips": [
      "Apoie sempre o peso da jaqueta jeans sobre uma mesa auxiliar ao lado da máquina para que o pantógrafo se mova livre e sem esforço",
      "Ao aplicar patches com filme termocolante, use SEMPRE papel manteiga ou folha de teflon por cima para proteger as linhas de bordar do calor direto do ferro",
      "Dê alguns pontinhos de costura de segurança com a máquina nas bordas do patch para que ele nunca descole, mesmo após centenas de lavagens",
      "Utilize linhas de poliéster trilobal de alta resistência para suportar o atrito diário nas jaquetas"
    ],
    "dicaArtrelados": "As jaquetas jeans bordadas para noivas (com a palavra 'Bride' e a data do casamento nas costas) são uma febre gigantesca e rendem lucros extraordinários no ateliê! Ofereça para suas clientes e encante!",
    "voceSabia": "A moda de customizar jaquetas jeans com patches bordados explodiu nos anos 1960 e 1970 com os movimentos de contracultura em Londres e Woodstock e foi adotada pelos pilotos da Força Aérea americana, que costuravam emblemas de suas missões nas jaquetas!",
    "practicalExercise": "Borde um pequeno patch redondo com seu logotipo em um pedaço de sarja: aplique filme termocolante no avesso, recorte a borda e passe a ferro sobre o bolso de uma jaqueta ou colete jeans: veja como fica incrível!",
    "quickSummary": "Técnicas de bordado direto e aplicação de patches termocolantes para personalização de alto valor em jaquetas jeans.",
    "relatedTerms": [
      "Jeans, Denim Pesado",
      "Patches Termocolantes",
      "Flutuação de Tecido / Floating",
      "Prensa Térmica"
    ],
    "tags": [
      "j-022",
      "jaqueta jeans",
      "patches",
      "termocolante",
      "customizacao",
      "moda",
      "denim",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DENIM EMBELLISHMENT & FASHION EMBROIDERY WORKSHOPS. London, 2023.",
      "THE EMBROIDERED PATCH MANUFACTURING HANDBOOK. New York, 2022.",
      "ARTRELADOS. Jaquetas Jeans de Passarela: Como Bordar Direto e Criar Patches Termocolantes de Alto Lucro. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-023-jogo-de-linhas-montagem-paletas-cromaticas",
    "code": "J-023",
    "term": "Jogo de Linhas & Montagem de Paletas Cromáticas Harmônicas",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim jocus (conjunto harmônico lúdico) e da teoria das cores de Isaac Newton (1666) e Johannes Itten (Bauhaus, 1921).",
    "summary": "Como organizar e combinar estojos de linhas de bordar usando o círculo cromático para criar bordados com combinações de cores deslumbrantes.",
    "definition": "O Jogo de Linhas, Curadoria de Estojos e Harmonização de Paletas Cromáticas Têxteis (Thread Set Color Palette Curation, Chromatic Harmony & Tone Matching Protocol) é o método técnico e artístico de seleção, organização e combinação de cones de linhas de bordar poliéster e viscose. Baseado na Teoria das Cores e no Círculo Cromático (harmonias análogas, complementares, triádicas e monocromáticas), o protocolo ensina a compor conjuntos de linhas com graduações tonais suaves (do claro ao escuro com 3 a 5 tons por família de cor) e contrastes de luminância calculados, garantindo que o bordado salte aos olhos sobre tecidos claros, escuros ou estampados.",
    "technicalDetails": "Diretrizes de composição e teoria de cores no bordado:\n• Famílias Tonais (Tone Ladders): Cada cor principal deve possuir no mínimo 3 graduações (Luz / Médio / Sombra) com diferença de saturação de 15% a 20%;\n• Harmonias Clássicas no Bordado: 1) Monocromática (tons de azul para enxovais clássicos), 2) Análoga (amarelo, laranja e vermelho para temas botânicos de outono), 3) Complementar (azul marinho e dourado para brasões de luxo);\n• Contraste de Valor Tonal (Luminance Contrast): Diferença mínima de 30% de luminosidade entre a cor da linha e a cor do tecido de fundo;\n• Paleta Essencial do Ateliê Artrelados: Conjunto básico de 40 a 60 cores de alto giro que cobrem 95% de todas as encomendas comerciais;\n• Efeito de Refração Trilobal: Como a luz incide nos filamentos triangulares de poliéster gerando brilho direcional dinâmico.",
    "howItWorks": [
      "1. A cliente pede um bordado de um passarinho realista sobre uma almofada de linho cru, mas quer que as cores fiquem elegantes e suaves.",
      "2. Em vez de pegar cores aleatórias na prateleira, a bordadeira consulta seu mostruário de linhas Artrelados.",
      "3. Seleciona uma família de 4 tons graduados de azul (Azul Bebê 1002, Azul Céu 1004, Azul Royal 1006 e Azul Marinho Profundo 1008).",
      "4. Adiciona um toque de cor complementar quente (Dourado Ocre) para o bico e os olhinhos do passarinho.",
      "5. No software, ela mapeia a sequência de cores da matriz exatamente para os códigos dos seus cones reais.",
      "6. A máquina borda com sobreposições suaves e degradês naturais.",
      "7. A peça ganha uma profundidade artística impressionante, com volume e brilho que encantam qualquer pessoa!"
    ],
    "beginnerExplanation": "É o jeito fácil de escolher as cores certas de linha para o seu bordado ficar lindo, harmônico e chique! Em vez de usar cores que brigam entre si, você aprende a brincar com as famílias de cores: ter um tom claro, um tom médio e um tom escuro da mesma cor (como três tons de verde para fazer uma folhinha com sombra e luz de verdade!). Quando você junta as cores certas, seu bordado ganha vida, profundidade e parece uma pintura feita com linhas!",
    "applications": [
      "Montagem de paletas cromáticas para coleções sazonais (Primavera/Verão, Natal, Páscoa)",
      "Bordados realistas de animais, flores botânicas e rostos com degradês perfeitos",
      "Combinação de cores de brasões corporativos respeitando o manual de identidade visual",
      "Organização de estojos e gaveteiros de linhas por famílias cromáticas no ateliê"
    ],
    "commonErrors": [
      "Usar cores com luminosidade idêntica à cor do tecido (o bordado fica apagado e invisível de longe)",
      "Misturar cores berrantes sem critério cromático, criando um visual poluído e amador",
      "Não ter tons de sombra (escuros) para dar profundidade aos preenchimentos e contornos"
    ],
    "troubleshootingTips": [
      "TESTE DA FOTO EM PRETO E BRANCO: Tire uma foto das linhas sobre o tecido com o celular e coloque no filtro 'P&B': se você conseguir enxergar claramente a diferença de contraste, o bordado ficará perfeito!",
      "Organize suas prateleiras de linhas em degradê de arco-íris: isso estimula sua criatividade e agiliza a escolha de cones na produção",
      "Tenha sempre no mínimo 3 tons de cada cor principal (verde claro, médio e escuro; rosa claro, médio e escuro)",
      "Para bordar sobre tecidos escuros (preto ou marinho), use cores com valores tonais altos (claras e brilhantes) para garantir contraste absoluto"
    ],
    "dicaArtrelados": "O segredo de um bordado que parece caro não é a quantidade de pontos, mas sim a harmonia das cores! Usar 3 tons da mesma família para criar luz e sombra faz qualquer flor simples parecer uma joia bordada!",
    "voceSabia": "O grande mestre holandês Johannes Vermeer (pintor da famosa obra 'A Moça com o Brinco de Pérola' em 1665) usava as mesmas regras de cores complementares e contraste de luz que hoje usamos para escolher as linhas de bordar computadorizado!",
    "practicalExercise": "Pegue 4 cones de linha que você nunca usou juntos: monte uma combinação de 3 tons análogos e 1 tom complementar de destaque e veja como eles formam uma paleta chique para a sua próxima encomenda!",
    "quickSummary": "Regras do círculo cromático e famílias de tons claros e escuros para montar paletas de linhas com harmonia e profundidade.",
    "relatedTerms": [
      "Linhas de Poliéster Trilobal",
      "Inversão de Cores e Paletas Digitais",
      "Isometria e TrueView",
      "Agulhas & Fios"
    ],
    "tags": [
      "j-023",
      "jogo de linhas",
      "paleta de cores",
      "harmonia cromatica",
      "circulo cromatico",
      "degrade",
      "fios",
      "artrelados"
    ],
    "bibliographicReferences": [
      "COLOR THEORY FOR TEXTILE DESIGNERS & EMBROIDERY ARTISTS. London, 2023.",
      "THE CHROMATIC HARMONY HANDBOOK IN APPAREL EMBROIDERY. Milan, 2022.",
      "ARTRELADOS. A Magia das Cores: Como Montar Paletas Harmônicas de Linhas e Criar Bordados Deslumbrantes. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-024-jumper-de-fio-formacao-incorreta-laco",
    "code": "J-024",
    "term": "Jumper de Fio & Formação Incorreta do Laço na Lançadeira",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Solução de Problemas",
    "grammarClass": "Substantivo masculino composto / Expressão técnica mecatrônica.",
    "origin": "Do inglês loop jump / skipped stitch (salto de laçada e ponto pulado). Falha cinemática de captura do laço entre agulha e lançadeira.",
    "summary": "Problema em que a máquina não laça a linha de baixo e pula pontos, fazendo a costura falhar ou a linha escapar da agulha.",
    "definition": "O Jumper de Fio, Salto de Laçada e Perda de Sincronismo da Lançadeira (Thread Loop Jumping, Skipped Stitch Phenomenon & Hook Timing Deflection) é o defeito mecatrônico no qual o bico da lançadeira rotativa (Hook Point) falha em penetrar e capturar a laçada de linha (Loop) formada na cava da agulha no exato momento da ascensão mecânica (Loop Lift de 1,8 mm a 2,2 mm). Isso resulta em pontos falhados (Skipped Stitches), quebras abruptas de linha, desmanche de costuras e nós falsos no avesso. O defeito é causado principalmente por folga axial excessiva entre a agulha e a lançadeira (distância maior que 0,05 mm a 0,1 mm), agulha ligeiramente torta, tensão excessivamente esticada da linha superior ou deflexão da agulha em tecidos pesados.",
    "technicalDetails": "Cinemática de sincronismo e tolerâncias do laço de linha:\n• Folga Agulha-Lançadeira (Needle-to-Hook Clearance): Tolerância estrita de 0,05 mm a 0,10 mm (espessura de uma folha de papel de seda sem encostar na agulha);\n• Ponto de Encontro do Ponto Morto Inferior (Timing Point): A ponta da lançadeira deve alcançar o centro da lâmina da agulha exatamente quando a barra de agulha sobe de 1,8 mm a 2,2 mm a partir do Ponto Morto Inferior (200° a 205° de rotação do eixo principal);\n• Altura da Barra de Agulha (Needle Bar Height): O bico da lançadeira deve passar a 0,5 mm a 1,0 mm acima do topo do olho da agulha;\n• Efeito de Flagging: Se o tecido pular junto com a agulha por falta de pressão do calcador ou entretela frouxa, a laçada colapsa e a lançadeira não captura o fio.",
    "howItWorks": [
      "1. A máquina de bordar começa a costurar um ponto cheio largo, mas a cada 10 pontos ela pula um ponto, deixando fios soltos e desfiados.",
      "2. O operador interrompe a máquina para diagnosticar a causa do salto de laçada (Thread Loop Jumping).",
      "3. Primeira checagem: retira a agulha e rola a haste sobre uma superfície de vidro plana: nota que a agulha estava levemente curvada por bater em uma costura grossa.",
      "4. Ao colocar uma agulha nova e girar o volante manual a 200°, ele observa pela chapa de agulha:",
      "5. A agulha sobe 2 mm, a linha abre uma barriguinha perfeita (laço) na cava da agulha.",
      "6. O bico afiado da lançadeira passa a 0,05 mm da lâmina e captura o laço com precisão microscópica.",
      "7. Ao dar a partida, a máquina volta a costurar com 100% dos pontos laçados e sem nenhum salto de ponto!"
    ],
    "beginnerExplanation": "É o famoso 'ponto pulado' que deixa falhas e buraquinhos no meio do bordado! Sabe quando a máquina está costurando e de repente você vê que ela pulou um pontinho e não costurou nada ali? Isso acontece porque a agulha desceu, mas a pecinha giratória lá de baixo (a lançadeira) não conseguiu pegar a laçada da linha no segundo exato! Quase sempre isso acontece porque a agulha está levemente torta ou gasta! Trocando a agulha por uma nova, o problema desaparece na hora!",
    "applications": [
      "Diagnóstico e correção rápida de pontos pulados e falhas em contornos e letras",
      "Calibração do tempo mecânico (Timing) de lançadeiras em oficinas de manutenção",
      "Ajuste da altura da barra de agulha e eliminação de folgas laterais",
      "Eliminação do efeito de vibração do tecido (Flagging) com aperto correto do bastidor"
    ],
    "commonErrors": [
      "Continuar bordando com agulha torta ou com a ponta rombuda (pula pontos e pode quebrar a ponta da lançadeira)",
      "Puxar a linha superior com tensão tão apertada que a linha não consegue formar a barriguinha da laçada lá embaixo",
      "Entretelar o tecido de forma frouxa, permitindo que o tecido suba e desça junto com a agulha (Flagging)"
    ],
    "troubleshootingTips": [
      "PASSO 1: Troque a agulha imediatamente por uma agulha nova Schmetz 75/11 ou 80/12: isso resolve 90% dos saltos de ponto",
      "PASSO 2: Verifique se o tecido está bem esticado e firme no bastidor (como uma pele de tambor) para que o tecido não dance junto com a agulha",
      "PASSO 3: Afrouxe ligeiramente a tensão da linha superior se a linha estiver excessivamente esticada",
      "PASSO 4: Se o problema persistir em todas as agulhas, chame o técnico para regular o ponto de sincronismo (Timing de 200°) da lançadeira"
    ],
    "dicaArtrelados": "Para saber se sua agulha está torta: coloque-a em cima de uma mesa de vidro ou espelho e role com o dedo. Se ela rolar manca ou com a ponta subindo e descendo, jogue no lixo na hora e coloque uma nova!",
    "voceSabia": "A física da formação da laçada de costura (o 'Loop') foi descoberta por Elias Howe e aperfeiçoada por Isaac Singer na década de 1850; até hoje, todas as máquinas de costura e bordado do planeta dependem exatamente dessa mesma laçada de 2 milímetros para entrelaçar os fios!",
    "practicalExercise": "Com a máquina desligada da tomada e sem chapa de agulha, gire o volante manual com a mão bem devagar: observe a agulha descer até o fundo e começar a subir 2 mm: veja o bico da lançadeira passando e capturando a linhazinha com precisão de relógio suíço!",
    "quickSummary": "Defeito de ponto pulado onde a lançadeira não captura o laço da linha por causa de agulha torta ou desregulagem de tempo.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Agulha de Bordar",
      "Tensão da Linha Superior",
      "Quebra de Linha"
    ],
    "tags": [
      "j-024",
      "jumper de fio",
      "ponto pulado",
      "laçada",
      "lancadeira",
      "timing",
      "sincronismo",
      "solucao de problemas",
      "artrelados"
    ],
    "bibliographicReferences": [
      "LOOP FORMATION KINEMATICS & HOOK TIMING IN HIGH-SPEED STITCHING. Aachen, 2023.",
      "THE EMBROIDERY TROUBLESHOOTING & REPAIR MANUAL. Chicago, 2022.",
      "ARTRELADOS. Ponto Pulado Nunca Mais: Como Identificar e Corrigir Falhas de Laçada na Lançadeira. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-025-justificacao-tipografica-alinhamento-letreiros",
    "code": "J-025",
    "term": "Justificação Tipográfica & Alinhamento de Letreiros no Software",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Programação & Digitalização",
    "grammarClass": "Substantivo feminina composto.",
    "origin": "Do latim justificare (tornar reto/ajustar com exatidão) e do grego typos (modelo/caractere tipográfico impresso).",
    "summary": "Comandos de alinhamento no software para deixar textos e nomes alinhados ao centro, à esquerda, à direita ou justificados em blocos perfeitos.",
    "definition": "A Justificação Tipográfica, Alinhamento de Frases e Espaçamento de Caracteres em Matrizes (Lettering Alignment, Text Justification & Kerning/Tracking Protocol) é o conjunto de ferramentas de composição textual presentes nos softwares de digitalização de bordado (Wilcom, Hatch, Pe-Design, Embird). As ferramentas controlam o posicionamento horizontal e vertical de linhas de texto (Alinhamento à Esquerda, Centralizado, À Direita, Justificado Total e Arco Circular) e realizam o ajuste fino do espaçamento entre letras (Kerning), espaçamento geral (Tracking) e entrelinhas (Line Spacing), garantindo que nomes compostos, poemas, frases de enxovais e blocos de endereços mantenham equilíbrio visual, proporção estética e legibilidade absoluta quando costurados.",
    "technicalDetails": "Parâmetros tipográficos no software de bordado:\n• Modos de Justificação: Alinhamento Central (Center Justified - o padrão para brasões e nomes em peças únicas), Esquerda (Left Justified), Direita (Right Justified) e Justificação Plena em Bloco (Full Justified);\n• Espaçamento Entre Caracteres (Tracking / Char Spacing): Ajustado de 5% a 20% da largura da fonte para compensar o repuxo e evitar que letras vizinhas se toquem no tecido;\n• Kerning Óptico Manual: Ajuste individual de pares de letras difíceis (como 'AV', 'To', 'WA') para manter a distância visual uniforme;\n• Altura Mínima Recomendada: De 5,0 mm a 6,0 mm para fontes em ponto cheio (fontes menores que 4,5 mm devem usar ponto de corrida simples);\n• Compensação de Linha de Base (Baseline Baseline Alignment): Alinhamento ao longo de retas horizontais, curvas em arco (Arc Top / Arc Bottom) ou linhas de contorno livres (Any Shape Baseline).",
    "howItWorks": [
      "1. A cliente encomenda uma toalha de batizado com uma oração de 4 linhas e o nome da criança no centro.",
      "2. No software de digitalização, a bordadeira digita o texto da oração na ferramenta de Letreiros (Lettering).",
      "3. Seleciona a opção de 'Justificação Centralizada (Center Alignment)' para que todas as frases fiquem perfeitamente alinhadas pelo eixo central.",
      "4. Como a fonte escolhida é delicada, ela aumenta o espaçamento entre letras (Tracking) para 10% para que as letrinhas não encostem umas nas outras durante a costura.",
      "5. Ajusta o espaçamento entrelinhas para 120% para que os pingos dos 'i' e as pernas dos 'g' e 'p' não se cruzem.",
      "6. A máquina executa o bordado com clareza tipográfica perfeita.",
      "7. A oração fica legível, harmoniosa e com estética digna de livro de luxo!"
    ],
    "beginnerExplanation": "São os botões do programa de computador que organizam as frases e nomes no lugar certo, igualzinho quando você usa o Word! Você pode deixar o nome bem no meinho da toalha (Centralizado), alinhado para o lado esquerdo ou fazer as letrinhas fazerem uma curva linda em arco! Além disso, você pode afastar um pouquinho as letrinhas para elas não ficarem grudadas e emboladas na hora que a máquina for costurar!",
    "applications": [
      "Centralização de nomes de bebês, noivos e aniversariantes em toalhas e lençóis",
      "Composição de orações de batizado, salmos e frases religiosas em quadros e mantilhas",
      "Alinhamento em arco superior e inferior de logotipos circulares e brasões corporativos",
      "Textos de identificação técnica em jalecos, uniformes de empresas e etiquetas bordadas"
    ],
    "commonErrors": [
      "Deixar as letras muito coladas umas nas outras (com o repuxo do bordado, as letras se fundem e viram um borrão ilegível)",
      "Reduzir o tamanho da letra para menos de 4 mm mantendo ponto cheio (a agulha costura no mesmo buraco e rasga o tecido)",
      "Alinhar textos no olhômetro em vez de usar a ferramenta de alinhamento automático centralizado"
    ],
    "troubleshootingTips": [
      "Para letreiros em toalhas e camisetas: utilize SEMPRE a Justificação Centralizada para manter simetria visual absoluta com a peça",
      "Aumente o espaçamento entre letras (Letter Spacing) em pelo menos 10% quando bordar sobre tecidos elásticos ou felpudos",
      "Para textos com menos de 5 mm de altura: utilize fontes desenhadas especificamente para tamanhos micro (Small Fonts / Micro Lettering) com Agulha 65/9",
      "Use as réguas guias virtuais do software para conferir se o topo e a base das linhas de texto estão rigorosamente paralelos"
    ],
    "dicaArtrelados": "Textos bem espaçados e centralizados são o cartão de visitas do bordador profissional! Dedique 1 minuto a mais para ajustar o espaçamento das letras no computador: seu bordado ficará tão nítido que dará gosto de ler até de longe!",
    "voceSabia": "O conceito de justificação tipográfica perfeita nasceu com a invenção da imprensa de tipos móveis por Johannes Gutenberg em 1450 na Alemanha, onde cada linha da famosa Bíblia de 42 Linhas era ajustada manualmente com pequenas lâminas de chumbo para formar colunas retas perfeitas!",
    "practicalExercise": "No seu software de bordado, digite seu nome completo em duas linhas: teste os botões de alinhar à esquerda, à direita e centralizar; depois aumente o espaçamento entre as letras e observe como a leitura fica muito mais limpa e bonita!",
    "quickSummary": "Ferramentas do software que centralizam, alinham e ajustam o espaçamento entre letras para letreiros e nomes perfeitamente legíveis.",
    "relatedTerms": [
      "Letreiros & Fontes Pequenas",
      "Vetorização Manual & Punching",
      "Janome Digitizer",
      "Wilcom EmbroideryStudio"
    ],
    "tags": [
      "j-025",
      "justificacao",
      "alinhamento",
      "letreiros",
      "fontes",
      "tracking",
      "kerning",
      "tipografia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DIGITAL TYPOGRAPHY & MICRO-LETTERING IN EMBROIDERY CAD. Sydney, 2023.",
      "THE EMBROIDERY LETTERING & FONT DIGITIZING HANDBOOK. London, 2022.",
      "ARTRELADOS. Letreiros Perfeitos: Como Dominar a Justificação e o Espaçamento de Fontes para Bordar Nomes Sem Erros. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-026-juta-sintetica-telas-plasticas-estruturadas",
    "code": "J-026",
    "term": "Juta Sintética & Telas Plásticas para Bordados Estruturados",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminina composto.",
    "origin": "Do bengali jhuto (fibra vegetal) e do grego plastikos (moldável por polímeros sintéticos). Materiais modernos para artesanato.",
    "summary": "Técnica para bordar telas plásticas e juta de polipropileno para confecção de bolsas de praia, cestos, sousplats e sacolas estruturadas.",
    "definition": "O Bordado Técnico em Juta Sintética, Telas Plásticas Estruturadas e Malhas de Polipropileno (Synthetic Burlap, Plastic Mesh Canvas & Heavy Polypropylene Bag Embroidery) é o protocolo para personalização de suportes sintéticos vazados de alta tenacidade. Ao contrário da juta vegetal pura, a juta sintética e as telas plásticas não soltam pó de celulose nem absorvem umidade, mas apresentam malhas rígidas com espaçamentos abertos de 1,5 mm a 3 mm que exigem bases de underlay densas em ponto de grade tatami e o uso de filmes hidrossolúveis pesados ou entretelas hidrossolúveis de tecido para que a agulha não desvie nem prenda nas fibras plásticas.",
    "technicalDetails": "Diretrizes técnicas para telas plásticas e juta sintética:\n• Estabilização Obrigatória: Entretela Rasgável Pesada (80g) no avesso + Filme Hidrossolúvel Pesado (35 a 80 micras) no topo para calçamento;\n• Agulha recomendada: Schmetz Topstitch ou Jeans 80/12 a 90/14 com ponta fina reforçada para perfurar a trama plástica sem deflexão mecânica;\n• Densidade de Matriz: Reduzida em 10% a 15% (0,45 mm a 0,50 mm) para evitar aglomeração excessiva de pontos que cortam a malha de plástico;\n• Velocidade da Máquina: 550 a 650 PPM para prevenir superaquecimento da agulha e derretimento por atrito térmico;\n• Linhas: Poliéster Trilobal 40wt com alta lubrificação.",
    "howItWorks": [
      "1. A cliente encomenda 30 bolsas de praia em juta sintética com monogramas coloridos para um evento corporativo de verão.",
      "2. A bordadeira prepara o bastidor com entretela rasgável e prende a tela sintética utilizando fita adesiva ou garras de bastidor magnético.",
      "3. Aplica uma folha de filme hidrossolúvel pesado sobre a área do bordado para dar apoio aos pontos de topo.",
      "4. No software, ela seleciona uma matriz com underlay reforçado em ponto de grade dupla (Double Grid Underlay).",
      "5. A máquina borda a 600 PPM com movimentos fluidos e sem quebras de linha.",
      "6. Ao finalizar, ela dissolve o filme superior com uma esponja úmida e rasga a entretela no avesso.",
      "7. A bolsa de juta sintética ganha um monograma firme, reluzente e 100% resistente à água e ao sol!"
    ],
    "beginnerExplanation": "A juta sintética e as telas plásticas são aqueles materiais modernos super duráveis usados para fazer bolsas de praia e sacolas que podem molhar sem estragar! Como a trama tem buraquinhos abertos, o segredo é colocar um plástico transparente solúvel por cima antes de bordar: assim a agulha costura retinha e os pontos ficam lisinhos como uma pintura, sem afundar nos buracos da tela!",
    "applications": [
      "Bolsas de praia, ecobags e sacolas térmicas estruturadas de verão",
      "Sousplats, descansos de prato e cestos organizadores de artesanato",
      "Tapetes náuticos e almofadas para áreas externas resistentes a intempéries",
      "Brindes corporativos e nécessaires impermeáveis personalizadas"
    ],
    "commonErrors": [
      "Bordar em velocidade máxima (800+ PPM), gerando atrito que aquece a agulha e derrete a trama plástica",
      "Usar densidade de pontos muito alta (menos de 0,35 mm), picotando a tela plástica como um selo postal",
      "Não usar filme solúvel no topo (os pontos cheios caem dentro dos buracos da malha)"
    ],
    "troubleshootingTips": [
      "Coloque SEMPRE Filme Hidrossolúvel de 35 a 80 micras no topo para que o ponto cheio forme uma ponte sólida sobre os vazados da trama",
      "Reduza a velocidade da máquina para 600 PPM para manter a agulha fria durante o atrito com o polipropileno",
      "Utilize agulhas de ponta fina Schmetz Topstitch 90/14 que atravessam os fios plásticos com precisão",
      "Prefira bastidores magnéticos ou a técnica de flutuação para não deformar a trama rígida da tela"
    ],
    "dicaArtrelados": "Bolsas de praia em juta sintética personalizadas são um sucesso absoluto no verão! O material é impermeável, não mofa e permite cobrar valores excelentes com acabamento de boutique!",
    "voceSabia": "O polipropileno sintético foi desenvolvido nos anos 1950 pelo químico italiano Giulio Natta (ganhador do Prêmio Nobel) e hoje é a fibra plástica mais reciclada e durável do planeta para sacarias e tecidos técnicos!",
    "practicalExercise": "Pegue um retalho de tela plástica ou juta sintética: coloque filme solúvel por cima, diminua a velocidade para 600 PPM e borde um coração em ponto cheio para ver a cobertura perfeita dos pontos!",
    "quickSummary": "Uso de filme solúvel no topo, velocidade moderada e agulha 90/14 para bordar telas plásticas e juta sintética sem derretimento.",
    "relatedTerms": [
      "Juta, Aniagem & Tecidos de Fibra Rústica Natural no Bordado",
      "Filme Hidrossolúvel / Solvy",
      "Flutuação de Tecido / Floating",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-026",
      "juta sintetica",
      "telas plasticas",
      "polipropileno",
      "bolsas de praia",
      "artesanato",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SYNTHETIC TEXTILES & POLYPROPYLENE MESH EMBROIDERY TECHNIQUES. Milan, 2023.",
      "THE MODERN BAGMAKING & CRAFT EMBROIDERY MANUAL. London, 2022.",
      "ARTRELADOS. Bolsas de Praia Perfeitas: Como Bordar Juta Sintética e Telas Plásticas Sem Deformar a Trama. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-027-jogging-eixo-z-movimento-barra-agulha",
    "code": "J-027",
    "term": "Jogging de Eixo Z & Movimento da Barra de Agulha",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina",
    "grammarClass": "Substantivo masculino / Termo mecatrônico de cinemática CNC.",
    "origin": "Do inglês Z-axis jogging (avanço por pulso no eixo vertical da máquina CNC). Engenharia de automação de servomotores.",
    "summary": "Controle da descida e subida gradual da agulha (eixo vertical Z) através do volante ou botões eletrônicos para teste de penetração e folga.",
    "definition": "O Jogging de Eixo Z, Movimentação Pulso a Pulso da Barra de Agulha e Teste Mecânico de Penetração Vertical (Z-Axis Kinematic Inching, Needle Bar Stroke Alignment & Vertical Clearance Calibration) é o procedimento mecatrônico de acionamento milimétrico do curso vertical da barra de agulha (eixo Z). Em máquinas computadorizadas modernas, o movimento é executado por pulsações manuais no volante eletrônico ou por menus de diagnóstico técnico no painel de serviço. O procedimento permite checar a penetração exata da ponta da agulha na chapa, a altura de subida do laço (Loop Lift de 2 mm) e a folga entre a agulha e o bico da lançadeira sem risco de colisões violentas do cabeçote em alta velocidade.",
    "technicalDetails": "Cinemática e grandezas do eixo vertical Z:\n• Curso da Barra de Agulha (Needle Bar Stroke): 34 mm a 38 mm de amplitude entre o Ponto Morto Superior (PMS a 0°) e o Ponto Morto Inferior (PMI a 180°);\n• Subida de Laçada (Loop Lift): 1,8 mm a 2,2 mm após o PMI para encontro com a lançadeira rotativa;\n• Folga do Protetor de Agulha (Needle Guard Clearance): 0,00 mm a 0,05 mm sem deflexão plástica;\n• Altura do Calcador no Eixo Z: 0,8 mm a 1,5 mm acima do tecido no ponto de compressão máxima;\n• Encoders Ópticos do Eixo Z: Resolução de 360 a 720 pulsos por revolução mecânica do eixo principal.",
    "howItWorks": [
      "1. Um técnico de manutenção acabou de substituir a barra de agulha entortada no cabeçote 1 de uma máquina de bordar.",
      "2. Antes de ligar o motor elétrico em velocidade real, ele precisa testar o alinhamento da descida vertical.",
      "3. Acessa a tela de manutenção e seleciona a função 'Z-Axis Inching / Jog Manual da Agulha'.",
      "4. Gira o volante ou clica nos pulsos de passo de 1° por clique.",
      "5. A agulha desce suavemente pelo centro do furo da chapa de agulha com folga de 0,3 mm em toda a volta circular.",
      "6. Acompanha a agulha subindo 2 mm e confere a passagem do bico da lançadeira a 0,05 mm da lâmina da agulha.",
      "7. Concluído o teste sem nenhuma raspagem mecânica, ele libera a máquina para bordar a 1000 PPM com segurança absoluta."
    ],
    "beginnerExplanation": "É o controle bem devagarzinho que você faz na agulha subindo e descendo, seja girando o botão redondo da lateral da máquina (o volante) com a mão ou apertando os botões na tela! Você usa isso sempre que quer ver se a agulha está descendo bem no centro do buraquinho de metal ou se está batendo em alguma coisa dura antes de ligar a máquina para costurar rápido!",
    "applications": [
      "Checagem de alinhamento da agulha no centro do furo da chapa de agulha após batidas",
      "Conferência da altura de passagem da agulha ao bordar sobre botões, zíperes ou apliques grossos",
      "Calibração milimétrica da altura do calcador (Presser Foot Clearance)",
      "Diagnóstico mecânico do ponto de sincronismo (Timing) entre agulha e lançadeira"
    ],
    "commonErrors": [
      "Ligar a máquina em alta velocidade após uma colisão de bastidor sem antes descer a agulha manualmente no volante para testar",
      "Girar o volante da máquina no sentido contrário ao indicado pela seta do fabricante (pode embaraçar linhas na lançadeira)",
      "Forçar a barra de agulha com alicate ou ferramentas rígidas"
    ],
    "troubleshootingTips": [
      "Após qualquer barulho estranho ou colisão de bastidor: desligue a máquina e gire o volante MANUALMENTE para conferir se a agulha desce livre",
      "Gire o volante SEMPRE na direção indicada (em direção a você na maioria das máquinas) para preservar o sincronismo das engrenagens",
      "Se a agulha encostar na borda de ferro da chapa de agulha ao descer, troque a agulha na hora pois ela está torta",
      "Mantenha a barra de agulha limpa e com 1 gota de óleo mineral em sua haste deslizante a cada 40 horas de uso"
    ],
    "dicaArtrelados": "O volante manual é o melhor amigo da bordadeira prevenida! Um giro de 5 segundos no volante antes de dar a partida em peças grossas evita quebrar dezenas de agulhas e protege sua lançadeira!",
    "voceSabia": "Nas máquinas industriais modernas com controle CNC avançado, cada grau de rotação do eixo Z é monitorado por sensores de infravermelho que conseguem parar o motor em menos de 0,02 segundos se a agulha encontrar uma resistência incomum!",
    "practicalExercise": "Com a máquina desligada, gire o volante devagar com a mão e observe a pontinha da agulha descer pelo buraquinho da chapa: veja a perfeição do alinhamento central da sua máquina!",
    "quickSummary": "Movimentação manual ou passo a passo da agulha no eixo vertical para checar descida, folgas e evitar quebras de agulha.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Jog Dial & Botão Giratório de Navegação de Pontos e Paradas",
      "Mecânica da Máquina",
      "Quebra de Agulha"
    ],
    "tags": [
      "j-027",
      "jogging eixo z",
      "barra de agulha",
      "volante manual",
      "cinematica",
      "sincronismo",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KINEMATICS & CNC MOTION CONTROL IN TEXTILE MACHINERY. Tokyo, 2023.",
      "THE EMBROIDERY MACHINE MECHANIC'S BENCH REFERENCE. Munich, 2022.",
      "ARTRELADOS. Mecânica Sem Segredos: Como Testar a Descida da Barra de Agulha e Prevenir Danos Graves na Lançadeira. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-028-jogo-de-calcadores-especiais-calcador-mola",
    "code": "J-028",
    "term": "Jogo de Calcadores Especiais & Calcador de Ponto Cheio com Mola",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim calcare (pressionar para baixo) e do inglês spring-loaded presser foot. Engenharia mecânica de contenção têxtil.",
    "summary": "Conjunto de pés calcadores (aberto, transparente, com mola e para cordões) e como a regulagem de altura do calcador impede o tecido de vibrar.",
    "definition": "O Jogo de Calcadores Especiais, Pés Calcadores com Ação de Mola e Calibração de Altura de Contenção (Embroidery Presser Foot Set, Spring-Loaded Hooping Foot & Height Clearance Adjustment) é a coleção de sapatilhas mecânicas intercambiáveis acopladas à barra de calcador da máquina de bordar. O calcador de bordado possui funcionamento dinâmico com mola interna (Spring Action) que desce para comprimir o tecido no exato instante em que a agulha penetra e sobe 1 mm durante o deslocamento do pantógrafo, impedindo o efeito de vibração vertical do tecido (Flagging) e permitindo que a linha forme a laçada sem quebras ou pontos pulados.",
    "technicalDetails": "Tipos de calcadores e parâmetros de ajuste de folga:\n• Calcador Padrão Redondo Fechado (Standard Embroidery Foot): Uso geral em tecidos planos, sarjas e tricolines;\n• Calcador Aberto / Visão Ampla (Open-Toe Foot): Abertura frontal em 'U' para visualização direta de linhas guias em apliques e ITH;\n• Calcador Transparente de Policarbonato: Permite visibilidade de 360° em monogramas e posicionamento de precisão;\n• Calcador com Roldana para Fitas e Cordões (Couching Foot): Guia embutida para aplicação de fios grossos decorativos;\n• Regulagem de Altura (Foot Height Clearance): Espaçamento de 1,0 mm a 1,5 mm acima da espessura do tecido comprimido;\n• Pressão da Mola de Retorno: Calibrada entre 2,5 N e 4,0 N para não deixar marcas de atrito em tecidos delicados.",
    "howItWorks": [
      "1. A bordadeira vai fazer um aplique delicado com recorte rente no bastidor e precisa enxergar exatamente a linha de contorno da tesoura.",
      "2. Ela solta o parafuso da haste de calcador e substitui o calcador fechado por um Calcador Aberto (Open-Toe) com mola.",
      "3. O campo de visão fica totalmente desobstruído na frente da agulha.",
      "4. Quando a máquina começa a costurar o ponto cheio de fixação, a mola do calcador desce, calça o tecido firmemente e sobe na translação.",
      "5. Ela acompanha cada curva milimétrica com visibilidade cristalina.",
      "6. A costura fica perfeitamente assentada sem marcas e sem puxar fios.",
      "7. O aplique é finalizado com qualidade profissional de alta costura!"
    ],
    "beginnerExplanation": "O calcador é o 'pezinho de ferro com mola' que fica pulando em cima do tecido enquanto a máquina borda! A função dele é segurar o tecido no lugar para ele não ficar pulando para cima junto com a agulha. Existem pezinhos fechados, pezinhos transparentes e pezinhos com abertura na frente para você enxergar tudo de perto quando faz apliques! Manter o pezinho limpo e na altura certa é um dos maiores segredos para o bordado não pular pontos!",
    "applications": [
      "Uso de calcador aberto (Open-Toe) para acompanhar costuras de aplique e técnicas ITH",
      "Uso de calcador transparente para alinhamento milimétrico em monogramas de luxo",
      "Bordado sobre tecidos grossos e mantas ajustando a altura do calcador no parafuso traseiro",
      "Eliminação do efeito de tecido pulando (Flagging) e prevenção de pontos pulados"
    ],
    "commonErrors": [
      "Deixar o calcador muito baixo em tecidos grossos (o calcador arrasta e trava o movimento do pantógrafo)",
      "Deixar o calcador muito alto em tecidos finos (o tecido pula junto com a agulha e quebra a linha)",
      "Esquecer de apertar bem o parafuso do calcador, fazendo a sapatilha soltar durante o bordado e quebrar a agulha"
    ],
    "troubleshootingTips": [
      "REGRA DA ALTURA: O calcador deve passar a cerca de 1 mm acima do tecido quando a agulha estiver no ponto mais baixo: use a ponta de um cartão de visita como gabarito",
      "Para bordar toalhas felpudas ou jaquetas acolchoadas: levante a altura do calcador no menu da máquina (ou no parafuso da haste) para 2,0 mm",
      "Aperte SEMPRE o parafuso de fixação do calcador com uma chavinha de fenda leve para garantir que ele não se solte com a vibração",
      "Limpe a base inferior do calcador com um pano seco para retirar resquícios de cola de spray temporário"
    ],
    "dicaArtrelados": "Ter um calcador aberto (Open-Toe) no ateliê é um divisor de águas para quem faz apliques e projetos In-The-Hoop! Você enxerga a costura com precisão cirúrgica e nunca mais corta tecido no lugar errado!",
    "voceSabia": "O mecanismo de calcador com mola oscilante (Spring-Loaded Foot) foi patenteado em 1860 nos Estados Unidos para permitir que o tecido se movesse livremente em qualquer direção X e Y durante a criação dos primeiros bordados manuais em máquinas de costura!",
    "practicalExercise": "Pegue o calcador da sua máquina: empurre a base dele para cima com o dedo e sinta a força da mola interna; depois confira no manual da sua máquina como regular a altura do calcador na tela ou no parafuso!",
    "quickSummary": "Pés calcadores com mola que mantêm o tecido assentado durante o bordado, com modelos abertos, transparentes e fechados.",
    "relatedTerms": [
      "Jumper de Fio & Formação Incorreta do Laço na Lançadeira",
      "Mecânica da Máquina",
      "Aplique Bordado / Appliqué",
      "In-The-Hoop / ITH"
    ],
    "tags": [
      "j-028",
      "calcador",
      "pezinho",
      "mola",
      "open toe",
      "flagging",
      "componentes da maquina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "PRESSER FOOT DYNAMICS & FABRIC FLAGGING MITIGATION IN TEXTILE CNC. London, 2023.",
      "THE COMPLETE GUIDE TO EMBROIDERY MACHINE ATTACHMENTS. Chicago, 2022.",
      "ARTRELADOS. O Poder dos Calcadores: Como Regular a Altura e Escolher o Pezinho Ideal para Cada Tecido. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-029-janome-embroidery-format-jef-plus-metadados",
    "code": "J-029",
    "term": "Formato JEF da Janome e Metadados",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino / Extensão de arquivo proprietária.",
    "origin": "Criado pela engenharia de software da Janome Sewing Machine Co. (Tóquio, Japão) para as gerações Memory Craft modernas.",
    "summary": "Formato avançado da Janome (.JEF+) que armazena informações de cores, agrupamento de objetos, tempo de máquina e marcas de corte.",
    "definition": "O Formato Avançado de Matriz Janome .JEF+ (Janome Extended Embroidery File Format Architecture) é a evolução estrutural do clássico formato binário .JEF. Enquanto o arquivo .JEF tradicional armazena apenas as coordenadas de movimento X/Y da agulha e trocas de cor básicas, o .JEF+ incorpora um cabeçalho estendido de metadados contendo informações avançadas de edição no painel da máquina: nomes e marcas comerciais de linhas (Janome Polyester, Madeira, Robison-Anton), agrupamento e desagrupamento de objetos gráficos, posições originais de camadas, tempo de execução estimado e comandos inteligentes de corte do trimmer por objeto.",
    "technicalDetails": "Estrutura do cabeçalho estendido do formato .JEF+:\n• Magic Header: Assinatura hexadecimal proprietária 'JANOME+' nos primeiros 32 bytes do arquivo;\n• Tabela de Cores Extendida: Mapeamento de até 128 cores com códigos numéricos de cones e índice de saturação RGB;\n• Metadados de Edição On-Board: Permite rotacionar, espelhar, redimensionar e desagrupar elementos individuais direto na tela da máquina Memory Craft;\n• Dados de Bastidor Integrados: Reconhecimento do bastidor mínimo necessário (SQ14b, RE20b, RE28b, RE36b, etc.);\n• Compatibilidade: Suportado nativamente pelas máquinas Janome MC400E, MC500E, MC550E, Skyline S9 e Continental M17.",
    "howItWorks": [
      "1. A bordadeira cria uma composição no software combinando um brasão corporativo com o nome de um funcionário.",
      "2. Ela salva a matriz no formato avançado .JEF+ no pen-drive.",
      "3. Conecta o pen-drive em sua Janome MC550E.",
      "4. No painel touchscreen da máquina, ela abre a matriz e clica no botão 'Desagrupar Objeto'.",
      "5. Como o arquivo é .JEF+, a máquina reconhece o nome e o brasão como elementos separados!",
      "6. Ela troca o nome do funcionário para outro cliente diretamente na tela da máquina, sem precisar voltar para o computador.",
      "7. Borda as peças em série com extrema velocidade e praticidade!"
    ],
    "beginnerExplanation": "O formato .JEF+ é como se fosse o 'irmão inteligente' do arquivo .JEF comum das máquinas Janome! Ele não só guarda os pontos do bordado, mas também guarda as cores certinhas de linha e separa os desenhos em bloquinhos! Se você colocar um desenho com nome e florzinha no formato .JEF+, você consegue mexer só no nome direto na telinha da sua máquina Janome, sem precisar abrir o computador de novo!",
    "applications": [
      "Edição e desagrupamento de elementos gráficos diretamente no painel de máquinas Janome modernas",
      "Exibição precisa do tempo restante de bordado e das cores reais das linhas na tela colorida",
      "Produção de uniformes com troca rápida de nomes individuais na própria máquina",
      "Reconhecimento automático do bastidor correto para evitar colisões no pantógrafo"
    ],
    "commonErrors": [
      "Tentar abrir arquivos .JEF+ em máquinas Janome muito antigas (modelos anteriores a 2010 que só leem .JEF clássico ou .SEW)",
      "Renomear manualmente a extensão do arquivo no Windows de .jef para .jef+ (o arquivo fica corrompido)",
      "Salvar matrizes com nomes gigantescos ou caracteres especiais (como ç e acentos) que travam a leitura no pen-drive"
    ],
    "troubleshootingTips": [
      "Salve os arquivos no pen-drive sempre dentro da pasta padrão 'EMB\\EMBF' criada automaticamente pela sua máquina Janome",
      "Utilize nomes curtos com até 8 caracteres sem acentos (Exemplo: FLOR_01.JEF+) para leitura 100% rápida",
      "Se sua máquina for uma Janome recente (MC500E ou MC550E), prefira SEMPRE exportar em .JEF+ para aproveitar os recursos de edição na tela",
      "Formate o pen-drive sempre em FAT32 no computador para garantir compatibilidade perfeita com a placa da máquina"
    ],
    "dicaArtrelados": "O recurso de desagrupar arquivos .JEF+ direto na tela da Janome MC500E/MC550E é fantástico para personalizar nomes em uniformes e lembrancinhas: você ganha minutos preciosos a cada peça!",
    "voceSabia": "A Janome foi a primeira fabricante do mundo a introduzir uma máquina de bordar computadorizada com tela touchscreen colorida e processador de metadados em 1990 com a lendária série Memory Craft 8000!",
    "practicalExercise": "No seu software de bordado (como Janome Artistic Digitizer ou Wilcom), exporte um desenho com duas cores em .JEF+: abra no painel da máquina e teste mover um dos objetos separadamente!",
    "quickSummary": "Versão avançada do formato Janome que armazena cores reais e permite desagrupar e editar objetos no painel da máquina.",
    "relatedTerms": [
      "JEF / Formato Janome",
      "Janome Digitizer & Ecossistema de Softwares Janome",
      "Formatos de Matriz de Bordado",
      "Painel de Controle Touchscreen"
    ],
    "tags": [
      "j-029",
      "jef+",
      "janome",
      "formato de arquivo",
      "metadados",
      "edicao na tela",
      "memory craft",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JANOME MEMORY CRAFT FILE SYSTEM & JEF+ SPECIFICATION MANUAL. Tokyo, 2023.",
      "THE EMBROIDERY DATA FORMATS COMPARATIVE COMPENDIUM. Sydney, 2022.",
      "ARTRELADOS. O Guia do Formato JEF+: Como Usar os Recursos Inteligentes de Edição na Tela da Sua Janome. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-030-jacquard-floral-monogramas-barrocos-relevo",
    "code": "J-030",
    "term": "Jacquard Floral & Monogramas Barrocos em Relevo Têxtil",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação & Digitalização",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês baroque (estilo ornamental rebuscado do séc. XVII) e do tear Jacquard de tecelagem artística de Lyon.",
    "summary": "Criação de monogramas de luxo com fundos florais texturizados no ponto tatami que parecem tecidos adamascados de palácios europeus.",
    "definition": "O Monograma Barroco em Jacquard Floral e Relevo Têxtil Esculpido (Baroque Floral Jacquard Monogramming, Sculptured Damask Underlay & High-Relief Lettering) é a técnica avançada de arte matricial que une tipografia clássica serifada a fundos de preenchimento ornamental inspirados no damasco e jacquard nobre europeu. Na programação, o digitalizador cria uma base de ponto tatami com microfissuras e divisões programadas de arabescos florais (Carving Stamp / Programmed Floral Splits) que refletem a luz em diferentes ângulos, sobrepondo letras de ponto cheio espessas com alto-relevo (3D Satin com EVA ou múltiplos underlays), criando um contraste visual de realeza.",
    "technicalDetails": "Arquitetura matricial de monogramas barrocos Jacquard:\n• Camada de Fundo (Damask Jacquard Fill): Ponto Tatami com comprimento de 4,0 mm, densidade de 0,40 mm e aplicação de carimbos florais (Carving Stamps) com sulcos de penetração de agulha em formato de folhas de acanto;\n• Letra Principal em Alto-Relevo: Ponto Cheio com densidade dupla (0,32 mm) e 3 camadas de underlay ortogonal (Center Run + Double Zig-zag + Edge Run) ou aplicação sobre EVA de 2 mm;\n• Contraste Tonal Monocromático: Executado com 2 tons da mesma família (ex: Ouro Velho no fundo e Ouro Brilhante na letra) ou linhas de viscose de alto reflexo;\n• Compensação de Repuxo: 0,45 mm a 0,55 mm nas colunas de ponto cheio para manter a curvatura perfeitamente lisa sobre o fundo Jacquard;\n• Estabilização: Entretela Rasgável Dupla ou Hidrossolúvel Pesada em linho nobre ou percal 400 fios.",
    "howItWorks": [
      "1. Um cliente de alta sociedade encomenda um brasão de casamento com monograma das iniciais dos noivos para toalhas de linho puro de banquete.",
      "2. No software de digitalização, o programador desenha a letra central com tipografia barroca clássica.",
      "3. Ao fundo, cria uma área de tatami e aplica o efeito 'Carving / Jacquard Floral' em arabescos renascentistas.",
      "4. Configura os ângulos de ponto para que a luz incida de forma diferente na textura floral e no monograma.",
      "5. Aplica underlay denso na letra principal para que ela salte em relevo 3D sobre a textura.",
      "6. Na máquina de bordar, o desenho é costurado com linhas de poliéster trilobal douradas.",
      "7. O resultado é uma peça de tirar o fôlego, digna dos grandes palácios e hotéis de luxo da Europa!"
    ],
    "beginnerExplanation": "É um dos bordados mais luxuosos do mundo: você cria uma letra clássica chiquérrima que fica em alto-relevo por cima de um fundo cheio de florzinhas e arabescos gravados na própria linha, parecendo aqueles tecidos nobres de palácio real! Quando você mexe a toalha na luz, o fundo brilha com desenhos florais discretos e a letra principal salta em destaque reluzente!",
    "applications": [
      "Enxovais de casamento de altíssimo luxo em linho puro e percal egípcio",
      "Monogramas de famílias tradicionais, brasões heráldicos e escudos de vinícolas",
      "Almofadas decorativas e tapeçarias de alto padrão para arquitetura de interiores",
      "Capas de cardápio e toalhas de banquete para restaurantes e hotéis 5 estrelas"
    ],
    "commonErrors": [
      "Usar cores com contraste exagerado (como fundo preto com letra amarela), perdendo a elegância da textura Jacquard",
      "Não colocar underlay suficiente na letra principal (a letra afunda na textura do fundo e perde o relevo)",
      "Bordar sobre tecidos com felpas longas (a felpa engole a delicadeza dos arabescos florais esculpidos)"
    ],
    "troubleshootingTips": [
      "Borde SEMPRE sobre tecidos planos e nobres (como linho puro, sarja acetinada, tricoline fio tinto ou percal)",
      "Utilize combinações de cores nobres monocromáticas (tons de bege/dourado, prata/cinza pérola ou branco sobre branco)",
      "Reforce o underlay da letra principal com ponto zigue-zague duplo para garantir que ela fique bem alta sobre o fundo",
      "Passe a ferro pelo avesso sobre uma toalha macia para não achatar o relevo tridimensional dos pontos"
    ],
    "dicaArtrelados": "Monogramas barrocos com efeito Jacquard são a joia da coroa de qualquer ateliê! Clientes de alto padrão pagam com alegria valores de 4 a 6 vezes maiores por peças com esse acabamento palaciano!",
    "voceSabia": "O estilo barroco ornamental com folhas de acanto e arabescos dourados foi popularizado na corte francesa do Rei Sol (Luís XIV) no Palácio de Versalhes, onde bordadeiras reais levavam até 6 meses para confeccionar uma única toalha de banquete!",
    "practicalExercise": "No seu software, crie uma letra 'M' grande em ponto cheio: faça um quadrado em tatami por trás e aplique um carimbo floral (Carving Stamp) com folhas: visualize em 3D TrueView e veja a nobreza do efeito!",
    "quickSummary": "Técnica de criar monogramas de luxo com letras em alto-relevo sobre fundos de textura floral Jacquard adamascada.",
    "relatedTerms": [
      "Jacquard Digital & Textura com Efeito de Tecelagem no Ponto Tatami",
      "Ponto Cheio / Ponto Satin",
      "Isometria e TrueView",
      "Vetorização Manual & Punching"
    ],
    "tags": [
      "j-030",
      "jacquard floral",
      "monograma barroco",
      "damasco",
      "alto relevo",
      "luxo",
      "linho",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BAROQUE EMBROIDERY ORNAMENTATION & HERALDIC DESIGN. Paris, 2023.",
      "THE LUXURY MONOGRAMMING & JACQUARD TEXTURE COMPENDIUM. Milan, 2022.",
      "ARTRELADOS. Monogramas de Realeza: O Segredo do Jacquard Floral e Relevo Barroco no Bordado de Luxo. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-031-jumper-de-fio-metalico-desfiamento-ouro-prata",
    "code": "J-031",
    "term": "Prevenção de Desfiamento em Fios Metálicos",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês metallic thread looping (escorregamento do revestimento metalizado sobre a alma de poliamida). Tecnologia de fiação têxtil.",
    "summary": "Como evitar que a linha metálica dourada ou prateada enrole, descasque, arrebente ou crie laçadas frouxas durante o bordado.",
    "definition": "O Jumper de Fio Metálico, Descascamento de Camada Metalizada e Instabilidade de Laçada (Metallic Thread Delamination, Loop Slump & Tension Snagging Protocol) é o conjunto de anomalias cinemáticas e atritos que ocorrem durante o uso de linhas metálicas especiais (fios de ouro, prata, bronze e holográficos). Como a linha metálica é composta por uma alma central de poliamida envolvida por uma fita microscópica de poliéster metalizado com vapor de alumínio (Mylar), ela possui alta rigidez, memória elástica de espiral e sensibilidade ao atrito nos discos de tensão e no olho da agulha, exigindo agulhas especiais de olho largo (Schmetz Metallic), redução de velocidade e alívio de tensão superior.",
    "technicalDetails": "Diretrizes técnicas para operação com linhas metálicas:\n• Agulha Obrigatória: Schmetz Metallic ou Topstitch 80/12 ou 90/14 (olho 2x mais longo com canaleta profunda e revestimento polido);\n• Redução de Tensão Superior: Diminuir a tensão em 30% a 40% em relação ao fio de poliéster comum (escala de 2,0 a 2,8 no painel);\n• Velocidade Máxima de Operação: 450 a 600 PPM (altas velocidades geram calor que rompe a fita metalizada);\n• Posicionamento do Cone: Usar porta-cones vertical afastado a pelo menos 50 cm da máquina para permitir que a linha desenrole a espiral antes de entrar no guia-fio;\n• Lubrificação de Fio: Aplicação de rede de proteção de cone (Thread Net) e opcionalmente uma gota de silicone líquido no feltro guia.",
    "howItWorks": [
      "1. A bordadeira vai bordar um brasão litúrgico com linha de ouro metálico brilhante em uma estola de veludo.",
      "2. Em vez de usar a agulha comum, ela instala uma agulha Schmetz Metallic 90/14.",
      "3. Coloca uma redinha de proteção no cone de linha metálica para evitar que o fio escorregue e caia na base do cone.",
      "4. Afrouxa a tensão superior da máquina para 2.2.",
      "5. Reduz a velocidade da máquina para 500 PPM.",
      "6. A linha metálica passa pelo olho largo da agulha de forma suave, sem raspar e sem descascar a película dourada.",
      "7. O bordado é executado com brilho reluzente, sem nenhuma quebra de linha e com acabamento impecável!"
    ],
    "beginnerExplanation": "A linha dourada ou prateada (metálica) é linda demais, mas é a linha que mais dá dor de cabeça para quem não conhece os segredinhos dela! Como ela tem uma 'capinha' brilhante por fora, se a agulha for apertada ou a máquina estiver muito rápida, a capinha descasca, vira um nó e a linha arrebenta toda hora! Os 3 segredos mágicos são: use agulha própria para linha metálica (com buraquinho bem grande), afrouxe a tensão da linha e diminua a velocidade da máquina para metade! Fazendo isso, ela borda como manteiga!",
    "applications": [
      "Bordados litúrgicos, mantos e paramentos religiosos com fios de ouro e prata",
      "Brasões de formatura, faixas de nobreza e distintivos militares de gala",
      "Vestidos de noiva, corpetes de festa e trajes de alta costura",
      "Detalhes de brilho em bordados natalinos e peças comemorativas de luxo"
    ],
    "commonErrors": [
      "Bordar com linha metálica usando agulha comum 75/11 (o olho estreito esmaga e descasca a película metálica)",
      "Bordar em velocidade alta de 800+ PPM (a linha esquenta, perde a resistência e quebra a cada 20 segundos)",
      "Não usar a redinha no cone (a linha metálica é lisa e escorrega para a base do suporte, travando o fio)"
    ],
    "troubleshootingTips": [
      "Use SEMPRE Agulha Schmetz Metallic 80/12 ou 90/14: o olho alongado é o segredo número 1 para o fio passar livre",
      "Coloque uma Redinha de Cone (Thread Net) envolvendo o carretel para que o fio desenrole suavemente sem dar nós",
      "Diminua a velocidade da máquina para 500 PPM: a linha não esquenta e borda com estabilidade total",
      "Afrouxe a tensão da linha superior até que o avesso mostre 1/3 de linha da bobina e a linha dourada corra macia"
    ],
    "dicaArtrelados": "A linha metálica transforma qualquer bordado simples em uma verdadeira joia cintilante! Siga os 3 segredos (agulha certa, velocidade baixa e redinha no cone) e perca de vez o medo de bordar com ouro e prata!",
    "voceSabia": "Na Idade Média, o fio de ouro para bordados da realeza (chamado 'Passamanaria de Canutilho') era feito literalmente de lâminas de ouro 24k puro marteladas até ficarem mais finas que um fio de cabelo e enroladas em fios de seda natural!",
    "practicalExercise": "Instale uma agulha Metallic 90/14, coloque uma redinha no cone dourado, ajuste a velocidade para 500 PPM e borde um monograma: comprove como a linha não quebra nenhuma vez!",
    "quickSummary": "Uso de agulha metálica de olho largo, redinha no cone, velocidade a 500 PPM e tensão frouxa para bordar fios de ouro e prata sem desfiamento.",
    "relatedTerms": [
      "Agulha de Bordar",
      "Tensão da Linha Superior",
      "Quebra de Linha",
      "Linhas de Poliéster Trilobal"
    ],
    "tags": [
      "j-031",
      "linha metalica",
      "ouro",
      "prata",
      "fio metalizado",
      "agulha metallic",
      "desfiamento",
      "artrelados"
    ],
    "bibliographicReferences": [
      "METALLIC THREAD BEHAVIOR & FRICTION REDUCTION IN AUTOMATED STITCHING. Aachen, 2023.",
      "THE EMBROIDERY METALLIC & SPECIALTY THREAD HANDBOOK. London, 2022.",
      "ARTRELADOS. Ouro e Prata Sem Segredos: Como Bordar com Linhas Metálicas Sem Quebrar e Sem Desfiar. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-032-juncao-de-contorno-ponto-apoio-snapping",
    "code": "J-032",
    "term": "Junção de Contorno com Ponto de Apoio & Encaixe de Nós",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação & Digitalização",
    "grammarClass": "Substantivo feminina composto.",
    "origin": "Do inglês node snapping (atração magnética vetorial de vértices) e anchoring underlay (ancoragem por pontos de suporte).",
    "summary": "Técnica de encaixe perfeito entre os nós vetoriais de contornos e preenchimentos para que o contorno nunca saia fora do lugar.",
    "definition": "A Junção de Contorno com Ponto de Apoio, Atração Magnética de Nós e Ancoragem Estrutural (Outline Node Snapping, Path Anchoring & Perimeter Underlay Fusion) é o protocolo de digitalização avançada que assegura a perfeita coalescência geométrica entre as bordas de um objeto de preenchimento (Tatami ou Satin) e o seu contorno perimétrico final (Run ou Satin Border). Para evitar que o contorno fique desalinhado ou 'fora do desenho' devido ao repuxamento elástico do tecido, o digitalizador utiliza o recurso de atração magnética de nós (Snapping) e programa pontos de underlay perimétricos compartilhados que 'costuram' previamente a margem do tecido exatamente na coordenada onde o contorno passará.",
    "technicalDetails": "Geometria vetorial e parâmetros de ancoragem de contorno:\n• Atração Magnética de Nós (Node Snapping Grid): Tolerância de captura vetorial de 0,1 mm para união perfeita de vértices;\n• Sobreposição de Ancoragem (Anchor Inset): O contorno em ponto cheio deve sobrepor o preenchimento interno em pelo menos 0,6 mm a 0,8 mm;\n• Underlay de Borda Compartilhado (Edge Run Underlay): Inserção de uma costura de corrida de suporte 0,4 mm para dentro da margem antes da camada de topo;\n• Sequenciamento Obrigatório: O contorno perimétrico deve ser costurado SEMPRE imediatamente após o preenchimento da respectiva cor para minimizar o deslocamento do tecido;\n• Compensação Direcional de Tração: Aumento de 0,3 mm na espessura do contorno no eixo perpendicular ao ângulo do tatami.",
    "howItWorks": [
      "1. O digitalizador está criando a matriz de um logotipo de uma empresa de engenharia composto por um círculo azul preenchido e um contorno amarelo grosso.",
      "2. Se ele apenas desenhar o contorno por fora do círculo, quando a máquina bordar no tecido elástico, o tecido vai encolher e o contorno amarelo vai ficar afastado do círculo azul, deixando uma fresta branca feia.",
      "3. Ele ativa a ferramenta de 'Atração aos Nós (Snap to Nodes)' no software Wilcom/Hatch.",
      "4. Faz o contorno amarelo entrar 0,8 mm por dentro do preenchimento azul.",
      "5. Programa o ponto de início (Start Point) do contorno exatamente na mesma coordenada onde o azul terminou.",
      "6. Na máquina de bordar, o contorno fecha com precisão cirúrgica sobre a borda do preenchimento.",
      "7. O logotipo fica perfeitamente encaixado, nítido e sem nenhuma fresta de tecido aparente!"
    ],
    "beginnerExplanation": "Sabe quando você borda um desenho que tem um preenchimento colorido e uma linha de contorno em volta, e na hora que a máquina termina você vê que o contorno ficou torto e fora do lugar, deixando uma frestinha branca aparecendo? Isso acontece porque o tecido estica durante a costura! O segredo é fazer o contorno 'entrar um pouquinho para dentro' do desenho no computador (cerca de 1 milímetro): assim, quando o tecido encolher, o contorno fecha certinho no lugar perfeito!",
    "applications": [
      "Encaixe perfeito de contornos em logotipos, emblemas e escudos corporativos",
      "Contornos de olhos, rostos e detalhes finos em matrizes de personagens infantis",
      "Bordado sobre tecidos elásticos (piquet, malha e elastano) sem desalinhamento",
      "Eliminação de frestas brancas e gaps entre cores adjacentes em desenhos complexos"
    ],
    "commonErrors": [
      "Desenhar o contorno encostando apenas na bordinha do desenho (o repuxo abre fendas visíveis)",
      "Bordar todos os preenchimentos da peça primeiro e deixar todos os contornos para o final de tudo (o tecido já se moveu e nada se encaixa)",
      "Não usar underlay de borda (Edge Run) sob o contorno"
    ],
    "troubleshootingTips": [
      "Sobreponha SEMPRE o contorno em pelo menos 0,8 mm para dentro do preenchimento para garantir cobertura total",
      "Borde o contorno de um elemento logo após preenchê-lo, antes de passar para outras áreas do bastidor",
      "Utilize entretela de gramatura adequada (como entretela de recorte colada com spray) para evitar que o tecido dance no bastidor",
      "Ative a visualização em grade no software de digitalização para conferir os nós de junção em zoom de 500%"
    ],
    "dicaArtrelados": "Contorno que encaixa perfeito no desenho é o maior sinal de matriz profissional bem feita! Sobreponha 0,8 mm no software e nunca mais sofra com contornos fora do lugar!",
    "voceSabia": "Na computação gráfica moderna e nos softwares de CAD e bordado, a ferramenta 'Snap' (atração magnética) foi inspirada nos sistemas de radar e rastreamento aeroespacial criados pelo MIT nos anos 1960!",
    "practicalExercise": "No seu software, desenhe um círculo preenchido em tatami e adicione um contorno em ponto cheio: aumente a sobreposição para 0,8 mm, borde em um retalho de malha e veja como o contorno fecha sem nenhuma fresta!",
    "quickSummary": "Sobreposição de nós e pontos de suporte entre contornos e preenchimentos para evitar que o contorno fique fora do lugar devido ao repuxo.",
    "relatedTerms": [
      "Compensação de Repuxo",
      "Vetorização Manual & Punching",
      "Underlay & Pontos de Suporte",
      "Ponto Cheio / Ponto Satin"
    ],
    "tags": [
      "j-032",
      "juncao de contorno",
      "snapping",
      "encaixe",
      "sobreposicao",
      "repuxo",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "VECTOR TOPOLOGY & CONTOUR REGISTRATION IN EMBROIDERY CAD. Sydney, 2023.",
      "THE EMBROIDERY DIGITIZER'S ADVANCED PATHING HANDBOOK. Zurich, 2022.",
      "ARTRELADOS. Contornos Perfeitos: Como Dominar a Junção de Nós e Eliminar Frestas em Matrizes. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-033-jaleco-odontologico-tecidos-hidrorrepelentes",
    "code": "J-033",
    "term": "Jaleco Odontológico & Bordados Antirrespingo em Tecidos Hidrorrepelentes",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês jalot (vestimenta protetora) e da odontologia moderna com barreiras biológicas de biossegurança.",
    "summary": "Como bordar jalecos e scrubs de dentistas em microfibra hidrorrepelente sem perfurar em excesso o tecido e mantendo a proteção impermeável.",
    "definition": "O Bordado Técnico em Jalecos Odontológicos, Scrubs Médicos e Tecidos com Acabamento Hidrorrepelente (Dental Protective Scrubs, Hydrophobic Microfiber Embroidery & Barrier Sealing Protocol) é a metodologia especializada para personalização de vestimentas de biossegurança utilizadas em clínicas odontológicas e ambientes cirúrgicos. Esses tecidos (microfibra com Teflon, poliéster impermeabilizado e elastano) recebem tratamentos químicos hidrofóbicos que repelem sangue, saliva e aerossóis. O bordado deve utilizar agulhas ultrafinas com ponta aguda (Microtex 65/9 a 70/10), densidades reduzidas e termosselagem no avesso para evitar que as perfurações da agulha quebrem a barreira de impermeabilidade do jaleco.",
    "technicalDetails": "Diretrizes técnicas e normas de biossegurança:\n• Posicionamento Padrão: Peito esquerdo (nome do cirurgião-dentista + especialidade), centralizado a 16-18 cm do ombro e 8 cm do centro do fechamento do zíper/botão;\n• Agulha Obrigatória: Schmetz Microtex 65/9 ou 70/10 (ponta aguda e fina que atravessa a microfibra sem romper as fibras sintéticas);\n• Densidade de Preenchimento: Aliviada em 15% (0,45 mm a 0,48 mm) para reduzir a quantidade de furos por centímetro quadrado;\n• Estabilizador: Entretela Rasgável Macia de Algodão (40g) ou Entretela Termocolante Fina;\n• Selagem de Barreira (Opcional): Aplicação de fita termocolante impermeável de poliuretano no avesso com ferro morno para selar os orifícios da agulha contra passagem de líquidos.",
    "howItWorks": [
      "1. Uma clínica odontológica encomenda a personalização de 12 jalecos de luxo em tecido hidrorrepelente com o brasão da odontologia e o nome dos doutores.",
      "2. A bordadeira mede o ponto exato no peito esquerdo e posiciona o jaleco no bastidor utilizando a técnica de flutuação para não marcar o tecido impermeável.",
      "3. Instala uma agulha nova Schmetz Microtex 70/10.",
      "4. No software, seleciona o brasão com densidade leve para não concentrar excesso de furos.",
      "5. A máquina borda o logotipo e o nome com fios de poliéster de alta resistência a desinfetantes.",
      "6. Ao finalizar, ela retira o excesso de entretela e aplica uma película protetora macia no avesso com ferro morno.",
      "7. O jaleco mantém sua elegância visual e toda a sua barreira protetora contra líquidos e aerossóis!"
    ],
    "beginnerExplanation": "Jalecos de dentistas e médicos são feitos de um tecido especial e moderno que não deixa a água e os líquidos passarem! Se você fizer um bordado com muitos furos e usar agulha grossa, você rasga essa proteção plástica do tecido. O segredo é usar agulha fininha (Microtex 70/10) e uma matriz mais levinha: o nome do doutor e o brasão do dente ficam lindos, chiques e o jaleco continua 100% impermeável e seguro!",
    "applications": [
      "Jalecos e scrubs para cirurgiões-dentistas, ortodontistas e implantodontistas",
      "Vestimentas cirúrgicas hidrorrepelentes para clínicas médicas e veterinárias",
      "Brasões de conselhos regionais (CRO / CRM) em mangas e bolsos frontais",
      "Toucas cirúrgicas e máscaras estruturadas personalizadas"
    ],
    "commonErrors": [
      "Usar agulhas grossas (como 80/12 ou 90/14) que abrem furos visíveis que vazam água no tecido hidrorrepelente",
      "Bordar com densidade muito pesada, criando um retalho rígido e perfurado como um papel picotado",
      "Apertar o bastidor com força, deixando anéis permanentes de brilho na microfibra acetinada"
    ],
    "troubleshootingTips": [
      "Utilize SEMPRE Agulha Schmetz Microtex 65/9 ou 70/10: a ponta agulhada afiada não rasga o revestimento impermeável",
      "Use a técnica de Flutuação com entretela colada com spray temporário para evitar marcas de bastidor no tecido fino",
      "Mantenha o tamanho das letras do nome com altura mínima de 6 mm para que as pontadas fiquem bem espaçadas e nítidas",
      "Aplique uma proteção termocolante tipo 'Cover-A-Stitch' no avesso para que o bordado não cause atrito na pele do profissional"
    ],
    "dicaArtrelados": "O mercado odontológico e médico é um dos que mais valoriza o bordado de alto luxo! Entregue os jalecos passados, com proteção no avesso e cheirinho de ateliê: você conquistará clínicas inteiras como clientes fixos!",
    "voceSabia": "O símbolo internacional da odontologia é composto pelo Caduceu de Esculápio (a serpente sagrada da cura) entrelaçado em uma haste de vara dourada e foi adotado como emblema médico há mais de 2.400 anos na Grécia Antiga!",
    "practicalExercise": "Pegue um retalho de microfibra hidrorrepelente: instale a agulha Microtex 70/10, borde o nome 'Dr. Silva' em ponto cheio e pingue uma gota de água por cima para ver a repelência impecável do tecido!",
    "quickSummary": "Uso de agulha fina Microtex 70/10 e matriz aliviada para bordar jalecos odontológicos hidrorrepelentes sem furar a barreira protetora.",
    "relatedTerms": [
      "Jalecos, Scrubs & Posicionamento Técnico de Brasões e Nomes",
      "Agulha de Bordar",
      "Flutuação de Tecido / Floating",
      "Letreiros & Fontes Pequenas"
    ],
    "tags": [
      "j-033",
      "jaleco odontologico",
      "scrubs",
      "hidrorrepelente",
      "microfibra",
      "microtex",
      "biosseguranca",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MEDICAL TEXTILES & BIO-PROTECTIVE SCRUB EMBROIDERY STANDARDS. Zurich, 2023.",
      "THE CLINICAL APPAREL EMBROIDERY & WORKWEAR GUIDE. Chicago, 2022.",
      "ARTRELADOS. Jalecos de Alto Padrão: O Guia Definitivo para Bordar Tecidos Hidrorrepelentes e Scrubs Médicos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-034-jogo-de-toalhas-lavabo-ponto-ajour-bainha",
    "code": "J-034",
    "term": "Jogo de Toalhas de Lavabo com Ponto Ajour & Bainha Aberta",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês à jour (aberto à luz / vazado rendado). Técnica clássica de desfiamento e bainha vazada de alta costura.",
    "summary": "Como confeccionar ou bordar toalhinhas de lavabo de linho e percal combinando monogramas clássicos com o requinte do ponto ajour e bainhas abertas.",
    "definition": "O Bordado Técnico em Jogos de Toalhas de Lavabo com Ponto Ajour, Bainha Aberta e Desfiamento Ornamental (Hemstitch Openwork Lavatory Linens, Drawn Thread Technique & Classical Monogramming) é a arte de criar toalhinhas de lavabo e visita de altíssimo padrão combinando monogramas em ponto cheio acetinado com bordas vazadas e bainhas em ponto Ajour (Hemstitch / Wing Needle Stitching). A técnica utiliza agulhas especiais com aletas laterais (Agulha Asa / Wing Needle) ou programação matricial de pontos rendados sobre entretela hidrossolúvel, recriando as clássicas aberturas geométricas vazadas que deixam a luz passar através do tecido de linho ou cambraia.",
    "technicalDetails": "Diretrizes técnicas e parâmetros de Ponto Ajour no bordado:\n• Agulha Recomendada para Ponto Ajour: Agulha Asa (Schmetz Wing Needle 100/16 ou 120/19) para tecidos de linho puro ou agulha comum 75/11 sobre entretela hidrossolúvel para simulação digital;\n• Matriz de Ponto Ajour: Programação de ponto de corrida triplo ou quádruplo que penetra no mesmo furo do tecido, abrindo os feixes de fios sem cortá-los;\n• Tecidos Tradicionais: Linho puro 100%, Cambraia de linho, Percal 400 fios e algodão de trama quadrada regular;\n• Dimensões de Toalha de Lavabo: 30x50 cm ou 35x50 cm, com o monograma posicionado a 4 cm acima da bainha de ajour;\n• Estabilização: Entretela Hidrossolúvel de Tecido (Water-Soluble Fabric 80g) para que a peça fique com transparência pura após a lavagem.",
    "howItWorks": [
      "1. A cliente pede um conjunto de 4 toalhinhas de lavabo de linho branco para a suíte de visitas com iniciais em monograma inglês e bainha rendada de ponto ajour.",
      "2. A bordadeira instala a Agulha Asa (Wing Needle) na máquina para fazer o ponto ajour na barra.",
      "3. A agulha com aletas laterais abre os fios do linho de forma elegante a cada descida da barra.",
      "4. Em seguida, troca para a agulha de bordar Schmetz 75/11 e carrega a matriz do monograma com entretela hidrossolúvel.",
      "5. A máquina borda o monograma em ponto cheio alto com linha branca acetinada (efeito branco sobre branco / White-on-White).",
      "6. Ao terminar, ela enxágua a toalhinha para dissolver a entretela e passa a ferro com goma suave.",
      "7. A toalha de lavabo ganha um visual clássico europeu de extrema sofisticação!"
    ],
    "beginnerExplanation": "O ponto ajour é aquela bordinha cheia de buraquinhos decorativos lindos que a gente vê em toalhas de linho e panos de bandeja super chiques de antigamente! A máquina de bordar consegue fazer esses buraquinhos perfeitos usando uma agulha especial chamada 'Agulha Asa' (que tem duas asinhas do lado para afastar os fios do tecido sem rasgar) ou fazendo pontos rendados por cima de uma entretela que derrete na água! Fica parecendo uma toalhinha de museu europeu!",
    "applications": [
      "Toalhas de lavabo e visita de luxo para residências de alto padrão e eventos",
      "Panos de bandeja e jogos de chá em linho puro com acabamento nobre",
      "Enxovais clássicos de batizado e primeira comunhão com temas religiosos",
      "Lembrancinhas refinadas de casamento para padrinhos e convidados especiais"
    ],
    "commonErrors": [
      "Tentar usar Agulha Asa em tecidos de malha ou sintéticos elásticos (a agulha rasga a malha e não forma o ajour)",
      "Usar entretela rasgável comum (ficam fiapos de papel presos dentro dos buraquinhos abertos do ajour)",
      "Bordar o ajour com velocidade excessiva de 800+ PPM (a agulha asa pode quebrar devido à largura das aletas)"
    ],
    "troubleshootingTips": [
      "Utilize SEMPRE linho puro ou tecidos de algodão com trama aberta para fazer o ponto ajour com Agulha Asa",
      "Reduza a velocidade da máquina para 400 a 500 PPM ao utilizar a Agulha Asa (Wing Needle)",
      "Use SEMPRE Entretela Hidrossolúvel: assim, após lavar com água morna, os buraquinhos do ajour ficam 100% livres e vazados",
      "Passe a toalhinha ainda levemente úmida sobre uma toalha macia para abrir bem os vazados da bainha"
    ],
    "dicaArtrelados": "O bordado clássico de linho com ponto ajour branco sobre branco nunca sai de moda e é sinônimo de luxo atemporal! É o tipo de trabalho que consolida a fama de um ateliê de alto nível!",
    "voceSabia": "O ponto Ajour (do francês 'mettre à jour' - trazer à luz) foi desenvolvido nos mosteiros franceses e italianos no século XVI e era tão precioso que apenas reis e cardeais tinham permissão para usar toalhas e lenços com essa técnica!",
    "practicalExercise": "Coloque um pedaço de linho com entretela hidrossolúvel no bastidor: instale uma matriz com ponto ajour vazado e borde com linha branca: veja como os buraquinhos abertos criam um efeito rendado deslumbrante!",
    "quickSummary": "Confecção de toalhas de lavabo nobres em linho combinando monogramas acetinados com o efeito vazado do ponto ajour.",
    "relatedTerms": [
      "Jogo de Banho, Toalhas Aveludadas & Bordados em Barrado",
      "Entretela Hidrossolúvel / Solvy",
      "Ponto Cheio / Ponto Satin",
      "Agulha de Bordar"
    ],
    "tags": [
      "j-034",
      "toalha de lavabo",
      "ponto ajour",
      "agulha asa",
      "linho",
      "bainha aberta",
      "enxoval classico",
      "artrelados"
    ],
    "bibliographicReferences": [
      "HEMSTITCH & OPENWORK TECHNIQUES IN DIGITAL EMBROIDERY. Paris, 2023.",
      "THE HERITAGE LINEN & LAVATORY EMBROIDERY MANUAL. Milan, 2022.",
      "ARTRELADOS. Clássicos do Lavabo: Como Dominar o Ponto Ajour e Criar Toalhas de Linho de Alto Padrão. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-035-jog-de-velocidade-curvas-fechadas-desaceleracao",
    "code": "J-035",
    "term": "Jog de Velocidade em Curvas Fechadas & Desaceleração Automática",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina",
    "grammarClass": "Substantivo masculino / Termo de controle de velocidade CNC.",
    "origin": "Do inglês cornering feed-rate deceleration (desaceleração de avanço em curvas). Algoritmo de controle cinemático CNC industrial.",
    "summary": "Função do software e da máquina que diminui a velocidade automaticamente em curvas apertadas para não quebrar a agulha e manter os cantos perfeitos.",
    "definition": "O Jog de Velocidade em Curvas Fechadas, Desaceleração Dinâmica de Avanço e Modulação de Inércia (Cornering Feed-Rate Deceleration, Dynamic Speed Scaling & Inertial Jerk Reduction) é o algoritmo de controle cinemático integrado nos processadores das máquinas de bordar e nos softwares de digitalização. Ao detectar uma mudança angular brusca na trajetória dos eixos X/Y (como bicos de estrelas, cantos de 90° em letras ou pontas afiadas de brasões), o sistema reduz temporariamente a velocidade angular do motor principal de 850 PPM para 400-500 PPM durante 3 a 6 pontos. Isso anula as forças de inércia do pantógrafo, impede a deflexão mecânica da agulha contra a chapa e garante que os vértices dos cantos fiquem nítidos e pontiagudos.",
    "technicalDetails": "Cinemática e parâmetros de desaceleração em curvas:\n• Ângulo Crítico de Desaceleração (Corner Angle Threshold): Curvas com deflexão superior a 60° disparam a redução automática de velocidade;\n• Taxa de Redução de Velocidade: Desaceleração de 40% a 50% da velocidade nominal nos 3 pontos anteriores e 3 pontos posteriores ao vértice;\n• Prevenção de Deflexão de Agulha: Redução do esforço lateral na lâmina da agulha de 12 N para menos de 3 N;\n• Parâmetro no Software de Digitalização: 'Auto Slowdown at Sharp Corners' (Wilcom / Pulse / Hatch);\n• Redução do Efeito Chicote (Jerk Control): Suavização da aceleração em rampas em S (S-Curve Acceleration Profiling).",
    "howItWorks": [
      "1. A máquina de bordar está operando em alta velocidade a 900 PPM bordando o escudo triangular de um time de futebol.",
      "2. Ao chegar no vértice pontiagudo inferior do triângulo, a direção do pantógrafo muda bruscamente em 120°.",
      "3. Se mantivesse 900 PPM, a inércia do bastidor pesado faria a agulha entortar e bater na borda da chapa de metal.",
      "4. O processador da máquina ativa o algoritmo de desaceleração dinâmica: reduz a velocidade instantaneamente para 450 PPM no vértice.",
      "5. A agulha penetra suavemente no cantinho, forma a ponta perfeita do triângulo sem nenhum tranco mecânico.",
      "6. Assim que a curva é superada e o trajeto volta a ser reto, a máquina reacelera suavemente de volta aos 900 PPM.",
      "7. O bordado termina com velocidade máxima, pontas afiadas e zero quebra de agulha!"
    ],
    "beginnerExplanation": "É como quando você está dirigindo um carro em uma estrada reta bem rápido e precisa fazer uma curva bem fechada: se você não frear antes da curva, o carro derrapa! A máquina de bordar moderna faz exatamente isso de forma automática: quando chega em um biquinho pontudo ou numa curva bem difícil do desenho, ela 'pisa no freio' por 2 segundinhos para fazer a pontinha perfeita sem entortar a agulha, e depois volta a correr rápido no trecho reto!",
    "applications": [
      "Bordado de estrelas, pontas de letras e escudos com cantos afiados em alta velocidade",
      "Prevenção de quebra de agulha e batidas de bastidor em máquinas industriais multicabeçotes",
      "Melhoria drástica da nitidez e geometria de detalhes microtipográficos",
      "Redução do desgaste mecânico das correias e servomotores dos eixos X e Y"
    ],
    "commonErrors": [
      "Desativar a função de desaceleração automática no painel da máquina para tentar ganhar 10 segundos na produção (resulta em quebras constantes de agulha)",
      "Programar ângulos muito fechados com densidade máxima acumulada no mesmo ponto",
      "Usar agulhas muito finas (como 65/9) em alta velocidade em desenhos cheios de cantos vivos sem desaceleração"
    ],
    "troubleshootingTips": [
      "Certifique-se de que a opção 'Desaceleração em Cantos / Corner Slowdown' esteja SEMPRE ativada no menu de configurações da sua máquina",
      "No software de digitalização, utilize a ferramenta 'Canto em Esquadria (Mitered Corner)' ou 'Canto Sobreposto (Cap Corner)' para distribuir os pontos nas curvas",
      "Se notar que a máquina está dando 'trancos' fortes em bicos pontudos, reduza a velocidade geral no painel em 100 PPM",
      "Verifique a tensão das correias dentadas dos eixos X e Y caso observe cantos arredondados onde deveriam ser pontas vivas"
    ],
    "dicaArtrelados": "Máquinas que desaceleram suavemente nas curvas duram muito mais tempo e bordam com cantos vivos de precisão milimétrica! Deixe a tecnologia trabalhar a seu favor!",
    "voceSabia": "Os algoritmos de curva em rampa (S-Curve Acceleration) usados nas máquinas de bordar modernas foram desenvolvidos originalmente pela indústria aeroespacial para controlar a trajetória suave dos braços robóticos da Estação Espacial Internacional!",
    "practicalExercise": "Borde uma estrela de 5 pontas em velocidade alta: observe e ouça atentamente o som do motor da sua máquina desacelerando ligeiramente em cada pontinha da estrela e acelerando no meio das retas!",
    "quickSummary": "Desaceleração automática da máquina em curvas fechadas para evitar que a agulha entorte e garantir cantos perfeitamente pontiagudos.",
    "relatedTerms": [
      "Pantógrafo da Máquina",
      "Quebra de Agulha",
      "Mecânica da Máquina",
      "Ponto Cheio / Ponto Satin"
    ],
    "tags": [
      "j-035",
      "jog de velocidade",
      "desaceleracao",
      "curvas fechadas",
      "cantos",
      "cinematica",
      "mecanica cnc",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ACCELERATION PROFILES & CORNERING DECELERATION IN EMBROIDERY CNC. Nagoya, 2023.",
      "THE INDUSTRIAL EMBROIDERY MACHINE CONTROLLER HANDBOOK. Munich, 2022.",
      "ARTRELADOS. Curvas Perfeitas: Como a Desaceleração Automática Protege Agulhas e Cria Cantos Vivos no Bordado. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-036-janome-acustitch-aplicativos-moveis-criacao",
    "code": "J-036",
    "term": "Janome AcuStitch & Aplicativos Móveis de Criação Rápida",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo masculino / Nome de aplicativo proprietário.",
    "origin": "Desenvolvido pela Janome Sewing Machine Co. (Tóquio, Japão) com conectividade Wi-Fi para tablets e smartphones iOS/Android.",
    "summary": "Aplicativos móveis da Janome (AcuStitch, AcuEdit, AcuMonitor) para criar arranjos de pontos decorativos, editar matrizes no celular e monitorar o bordado por Wi-Fi.",
    "definition": "O Ecossistema de Aplicativos Móveis Janome AcuStitch, AcuEdit e AcuSetter (Janome Wireless Mobile App & AcuStitch Pattern Generator Suite) é a plataforma digital sem fio desenvolvida pela Janome para conectar máquinas de bordar de última geração (como Skyline S9, MC550E e Continental M17) a smartphones e iPads via rede Wi-Fi local. O aplicativo AcuStitch permite criar percursos circulares, poligonais e bordas decorativas combinando pontos ornamentais com facilidade, enquanto o AcuEdit permite manipular matrizes e o AcuMonitor permite ao operador acompanhar o progresso e o tempo restante do bordado em tempo real na tela do celular de qualquer cômodo da casa.",
    "technicalDetails": "Recursos e conectividade dos aplicativos Janome Mobile:\n• Protocolo de Comunicação: Transmissão sem fio Wi-Fi Direct (IEEE 802.11 b/g/n) em rede local criptografada;\n• Suíte de Aplicativos: 1) AcuStitch (arranjos geométricos e curvas de pontos decorativos), 2) AcuEdit (edição completa de matrizes e fontes na tela do tablet), 3) AcuSetter (calibração de posicionamento por foto da câmera), 4) AcuMonitor (monitoramento de tempo e quebra de linha);\n• Exportação de Arquivos: Envio instantâneo sem fio em formato .JEF e .JEF+ diretamente para a memória interna da máquina;\n• Dispositivos Compatíveis: iPads, iPhones e tablets/celulares Android modernos.",
    "howItWorks": [
      "1. A bordadeira está no sofá da sala com seu iPad e precisa criar uma borda redonda de pontos decorativos para um sousplat de Natal.",
      "2. Abre o aplicativo Janome AcuStitch e desenha um círculo com o dedo na tela.",
      "3. Escolhe um ponto de folhinhas natalinas e o app distribui os pontos de forma perfeitamente simétrica em toda a circunferência.",
      "4. Clica no botão 'Enviar por Wi-Fi para a Máquina'.",
      "5. Ela vai até o ateliê, coloca o bastidor na sua Janome MC550E e aperta o Start.",
      "6. Enquanto a máquina borda, ela volta para a sala e acompanha no celular (pelo app AcuMonitor) quantos minutos faltam para a troca de cor.",
      "7. Produção moderna, confortável e com alta produtividade!"
    ],
    "beginnerExplanation": "É a tecnologia que conecta a sua máquina de bordar Janome direto no seu celular ou tablet sem precisar de nenhum fio ou pen-drive! Você pode desenhar bordinhas redondas e flores lindas com o dedo na tela do iPad usando o aplicativo AcuStitch e mandar direto para a máquina pelo Wi-Fi! E o mais legal de tudo: você pode ficar na cozinha tomando um café e olhar no celular para saber exatamente quando o bordado vai terminar!",
    "applications": [
      "Criação rápida de mandalas, círculos e molduras decorativas com pontos ornamentais",
      "Edição e montagem de monogramas com facilidade na tela touch do tablet",
      "Posicionamento milimétrico do bordado sobre o tecido tirando uma foto com o celular (AcuSetter)",
      "Monitoramento remoto de status da máquina e avisos de troca de linha (AcuMonitor)"
    ],
    "commonErrors": [
      "Tentar conectar o celular na máquina estando conectado em redes Wi-Fi diferentes (a máquina e o celular devem estar na mesma rede 2.4GHz)",
      "Não atualizar a versão do aplicativo na App Store ou Google Play, gerando falhas de comunicação",
      "Desligar o roteador Wi-Fi durante o envio de matrizes grandes"
    ],
    "troubleshootingTips": [
      "Certifique-se de que a sua máquina Janome e o seu celular/tablet estejam conectados rigorosamente na MESMA rede Wi-Fi da sua casa",
      "Para máquinas compatíveis com Wi-Fi, mantenha o sinal do roteador forte no ambiente do ateliê",
      "Utilize o aplicativo AcuSetter para fotografar a peça no bastidor: o app alinha a matriz no local exato da foto com perfeição milimétrica",
      "Mantenha o firmware da sua máquina Janome sempre atualizado com a última versão do fabricante"
    ],
    "dicaArtrelados": "A tecnologia Wi-Fi e os aplicativos móveis trazem uma liberdade incrível para o ateliê! Experimente usar o app no tablet para montar monogramas: é muito mais intuitivo e rápido do que usar o mouse do computador!",
    "voceSabia": "A Janome foi a pioneira mundial a lançar a tecnologia de conexão Wi-Fi direta entre máquinas de bordar domésticas e tablets iPad em 2014 com o lançamento da revolucionária Memory Craft 15000!",
    "practicalExercise": "Se a sua máquina tiver conexão Wi-Fi, baixe o aplicativo Janome AcuEdit ou AcuMonitor no seu celular: conecte na máquina e acompanhe o próximo bordado direto na tela do seu telefone!",
    "quickSummary": "Linha de aplicativos móveis da Janome para criar pontos decorativos, editar matrizes e monitorar o bordado por Wi-Fi no celular.",
    "relatedTerms": [
      "Janome Digitizer & Ecossistema de Softwares Janome",
      "JEF / Formato Janome",
      "Painel de Controle Touchscreen",
      "Softwares & Formatos"
    ],
    "tags": [
      "j-036",
      "acustitch",
      "acuedit",
      "acumonitor",
      "janome",
      "wi-fi",
      "aplicativos moveis",
      "tablet",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WIRELESS EMBROIDERY PROTOCOLS & MOBILE CAD/CAM USER INTERFACES. Tokyo, 2023.",
      "THE MODERN SMART SEWING ATELIER INTEGRATION GUIDE. London, 2022.",
      "ARTRELADOS. Bordado Sem Fio: Como Usar os Aplicativos Móveis Janome para Criar e Monitorar pelo Celular. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-037-jeans-estonado-acid-wash-fibras-rompidas",
    "code": "J-037",
    "term": "Jeans Estonado, Acid Wash & Compensação de Fibras Rompidas",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês stone-washed / acid wash (processo industrial de lavanderia têxtil com pedras-pomes e cloro). Moda denim vintage.",
    "summary": "Cuidados especiais para bordar calças e jaquetas jeans estonadas ou rasgadas que perderam resistência mecânica nos processos de lavanderia.",
    "definition": "O Bordado Técnico em Jeans Estonado, Denim Acid Wash e Tecidos com Efeito 'Destroyed' (Stone-Washed Denim Stabilization, Fiber Degradation Compensation & Heavy Underlay Shielding) é o protocolo para personalização de artigos jeans que passaram por tratamentos agressivos de lavanderia têxtil (desgaste abrasivo com pedras-pomes, banhos de cloro/ácido e lixamento manual). Esses processos amaciam o jeans, mas rompem até 40% das fibras de algodão da trama, tornando o tecido frágil e sujeito a rasgos durante o puncionamento da agulha de bordar, exigindo agulhas com ponta bola fina (SES/Ball Point), entretelas de recorte reforçadas e grades densas de underlay para reconstituir a resistência estrutural do tecido.",
    "technicalDetails": "Diretrizes técnicas para jeans estonado e destroyed:\n• Estabilizador Obrigatório: Entretela de Recorte Reforçada (Cut-Away 70g a 80g) colada com spray adesivo temporário no avesso;\n• Agulha Recomendada: Schmetz Ball Point (Ponta Bola Fina SES) 75/11 ou 80/12 (a ponta bola afasta as fibras fragilizadas sem cortá-las);\n• Arquitetura de Underlay: Grade Tatami de Suporte (Double Grid / Mesh Underlay) costurada antes dos pontos de topo para criar uma 'armadura' sobre as fibras lixadas;\n• Densidade de Preenchimento: 0,42 mm a 0,45 mm (densidades excessivas podem 'cortar' o jeans estonado);\n• Compensação de Repuxo: 0,40 mm a 0,50 mm devido à alta maleabilidade do tecido lavado.",
    "howItWorks": [
      "1. Uma confecção jovem envia 50 calças jeans estonadas estilo 'Acid Wash' com aspecto vintage para bordar o logotipo da marca nos bolsos traseiros.",
      "2. Como o tecido sofreu lavagem química forte, as fibras estão macias porém enfraquecidas.",
      "3. A bordadeira não usa entretela rasgável fina, mas sim entretela de recorte colada com spray no avesso.",
      "4. Instala uma agulha ponta bola Schmetz SES 75/11 para não romper os fios já desgastados.",
      "5. No software, programa uma primeira camada de ponto de grade tatami leve para ancorar o tecido na entretela.",
      "6. A máquina executa o bordado com firmeza e sem cortar o tecido.",
      "7. As peças são finalizadas com bordados impecáveis, que suportam dezenas de lavagens sem rasgar o jeans!"
    ],
    "beginnerExplanation": "O jeans estonado (aquele jeans com carinha de velhinho, bem macio, desbotado e lindo) passa por muitas lavagens fortes com pedras e produtos químicos na fábrica antes de chegar na nossa mão! Por isso, as linhazinhas dele ficam meio 'fracas'. Se você usar uma agulha pontuda de jeans comum e bordar muito apertado, a agulha pode rasgar o tecido e abrir um buraco! O segredo é usar uma agulha com pontinha levemente arredondada (Ponta Bola) e uma entretela de recorte bem firme coladinha por baixo!",
    "applications": [
      "Bordados em calças e jaquetas jeans estonadas e vintage para coleções de moda",
      "Personalização de bolsos de shorts e bermudas com lavagens acid wash",
      "Bordados próximos a rasgos decorativos (estilo destroyed) com reforço estrutural",
      "Customização de saias e coletes jeans desbotados de alta costura"
    ],
    "commonErrors": [
      "Usar agulha ponta agulhada cortante (como Jeans 90/14 afiada) em tecido já desgastado, picotando e furando o jeans",
      "Usar entretela rasgável simples (com a lavagem, a entretela sai e o bordado rasga o tecido fragilizado)",
      "Bordar com densidade muito pesada em áreas que foram lixadas na confecção"
    ],
    "troubleshootingTips": [
      "Use SEMPRE Agulha Ponta Bola Fina (SES / Ball Point 75/11): ela desliza entre os fios de algodão enfraquecidos sem cortá-los",
      "Utilize Entretela de Recorte (Cut-Away) no avesso: ela permanece na peça para sempre, segurando o bordado e impedindo o jeans de esgarçar",
      "Cole a entretela com spray adesivo temporário para unir o tecido à entretela como se fossem uma única camada rígida",
      "Evite bordar diretamente em cima de rasgos com fios soltos sem antes aplicar um tecido de forro reforçado por baixo"
    ],
    "dicaArtrelados": "O jeans estonado é o queridinho do público jovem e da moda urbana! Usar a entretela de recorte correta garante que seu cliente lave a calça centenas de vezes sem que o bordado rasgue o tecido!",
    "voceSabia": "A técnica de 'Acid Wash' (lavagem ácida) no jeans foi inventada acidentalmente na Itália nos anos 1980 pela fábrica Rifle Jeans, que patenteou o processo de embeber pedras-pomes em água sanitária e cloro para criar o efeito marmorizado que virou febre mundial com astros do rock!",
    "practicalExercise": "Pegue um retalho de jeans bem batido e lavado: use entretela de recorte com spray e agulha ponta bola: borde uma frase e veja como o tecido fica firme e com bordas 100% íntegras!",
    "quickSummary": "Uso de agulha ponta bola fina e entretela de recorte para bordar jeans estonados e desgastados sem rasgar as fibras.",
    "relatedTerms": [
      "Jeans, Denim Pesado",
      "Jaqueta Jeans com Patches Termocolantes & Bordado Direto",
      "Agulha Ponta Bola / Ball Point",
      "Entretela de Recorte / Cut-Away"
    ],
    "tags": [
      "j-037",
      "jeans estonado",
      "acid wash",
      "denim vintage",
      "ponta bola",
      "entretela recorte",
      "moda",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DENIM FINISHING PROCESSES & POST-WASH EMBROIDERY STABILIZATION. Milan, 2023.",
      "THE CASUAL WEAR & VINTAGE DENIM EMBROIDERY MANUAL. London, 2022.",
      "ARTRELADOS. Denim Vintage com Segurança: Como Bordar Jeans Estonado e Destroyed Sem Danificar o Tecido. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-038-jogo-de-cama-infantil-bordados-antialergicos",
    "code": "J-038",
    "term": "Jogo de Cama Infantil Antialérgico",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego allos (outro/sensibilidade dérmica) e do francês trousseau de bébé (enxoval de bebê clássico).",
    "summary": "Protocolo para bordar lençóis de berço, mantas e fronhas de bebê com avesso ultra macio ('Toque Zero') que não arranha e não irrita a pele sensível.",
    "definition": "O Bordado Técnico em Jogos de Cama Infantil, Enxovais de Bebê e Acabamento Antialérgico 'Toque Zero' (Baby Bedding Embroidery, Zero-Scratch Hypoallergenic Finishing & Soft-Seal Backing Protocol) é o protocolo rigoroso de confecção e pós-acabamento para peças de uso neonatal e infantil (lençóis de berço, fronhas de percal 100% algodão, mantilhas, naninhas e cueiros). Como a epiderme dos recém-nascidos e bebês é extremamente fina e suscetível a dermatites de contato, o bordado exige o uso obrigatório de entretelas 100% hidrossolúveis de toque zero ou a termofixação de uma película protetora ultrafina e aveludada (como Cover-A-Stitch / Soft Seal) selando todo o avesso, cobrindo nós e linhas ásperas.",
    "technicalDetails": "Diretrizes e normas de segurança para artigos infantis:\n• Tecidos Homologados: Percal 200 a 400 fios 100% Algodão Penteado, Tricoline hipoalergênica e Pima Cotton;\n• Estabilização Obrigatória: Entretela Hidrossolúvel de Tecido (Water-Soluble Fabric 80g) que se dissolve 100% na água SEM deixar resíduos fibrosos;\n• Proteção de Avesso Térmica (Soft Backing Seal): Aplicação de película termocolante macia (100% malha de poliamida ultrasoft) selada a 130°C por 10 segundos no avesso do bordado;\n• Linha de Bobina: Fio de poliéster contínuo ultrafino (60wt ou 70wt) para reduzir o volume e a espessura das laçadas;\n• Agulha recomendada: Schmetz Microtex ou Bordado 70/10 com ponta fina para furos microscópicos.",
    "howItWorks": [
      "1. A futura mãe encomenda um jogo de berço de luxo completo em percal 300 fios egípcios bordado com o nome do bebê e raminhos de oliveira.",
      "2. A bordadeira utiliza entretela hidrossolúvel de base para que nenhuma entretela áspera de papel fique presa no lençol.",
      "3. Instala linha de bobina fininha 60wt e agulha 70/10.",
      "4. Borda o nome do bebê com pontos cheios suaves e nós de amarração limpos.",
      "5. Ao retirar do bastidor, ela dissolve todo o excesso de entretela com uma esponjinha de água morna.",
      "6. Pelo avesso, aplica com o ferro de passar uma camada de película protetora aveludada 'Soft Seal'.",
      "7. Ao passar a mão no avesso, sente-se uma superfície lisa como seda, 100% macia e segura para a pele do recém-nascido!"
    ],
    "beginnerExplanation": "A pele de um bebezinho recém-nascido é super macia e sensível! Se você bordar uma fronha ou lençol de berço e deixar aquele avesso duro, cheio de nozinhos ou com entretela de papel que pinica, o bebê pode ficar com o rostinho vermelho e irritado! O segredo das bordadeiras de luxo é simples: use entretela que sai na água e, no final, cole uma película fofinha e macia por trás do bordado com o ferro! O avesso fica tão lisinho que parece um carinho de algodão!",
    "applications": [
      "Jogos de lençol de berço (vira de lençol, elástico e fronha) para recém-nascidos",
      "Naninhas, mantas de saída de maternidade e cueiros de percal e algodão pima",
      "Toalhinhas de boca e fraldas de tecido delicadas de passeio",
      "Bodys, macacões e pijamas infantis de alta costura para bebês"
    ],
    "commonErrors": [
      "Usar entretelas rasgáveis duras ou plásticas no enxoval de berço (as pontas duras pinicam e machucam o bebê)",
      "Deixar linhas compridas soltas no avesso que podem enroscar nos dedinhos da criança",
      "Não colocar proteção no avesso de roupas que ficam em contato direto com o peito do bebê"
    ],
    "troubleshootingTips": [
      "REGRA DE OURO INFANTIL: Use SEMPRE Entretela Hidrossolúvel ou aplique a película protetora 'Soft Seal' no avesso de todas as peças de bebê",
      "Apare todas as pontinhas de linha no avesso com uma tesoura de ponta curvada bem rente aos nós",
      "Utilize linhas de bobina finas (60wt) para que o avesso fique plano e sem calombos volumosos",
      "Lave ou borrife água morna na peça após finalizar para retirar qualquer goma antes de embalar para a cliente"
    ],
    "dicaArtrelados": "O acabamento 'Toque Zero' com película aveludada no avesso é o maior diferencial de vendas que você pode oferecer para mães e gestantes! É o detalhe que faz seu ateliê ser indicado em todas as maternidades!",
    "voceSabia": "A pele de um recém-nascido é cerca de 30% mais fina do que a pele de um adulto e absorve substâncias com facilidade, razão pela qual pediatras do mundo todo recomendam que roupas de bebê tenham costuras e bordados 100% planos e protegidos!",
    "practicalExercise": "Borde um nome em uma fraldinha de boca usando entretela solúvel: passe o dedo no avesso e sinta a diferença extrema de maciez em comparação com uma entretela comum!",
    "quickSummary": "Uso de entretelas hidrossolúveis e películas termocolantes aveludadas no avesso para criar bordados de bebê antialérgicos e com Toque Zero.",
    "relatedTerms": [
      "Jogo de Cama, Lençóis de Percal & Bordados de Alto Padrão",
      "Entretela Hidrossolúvel / Solvy",
      "Passadoria & Vaporização",
      "Ponto Cheio / Ponto Satin"
    ],
    "tags": [
      "j-038",
      "jogo de cama infantil",
      "bebe",
      "enxoval de berco",
      "toque zero",
      "antialergico",
      "soft seal",
      "artrelados"
    ],
    "bibliographicReferences": [
      "NEONATAL TEXTILE SAFETY & HYPOALLERGENIC EMBROIDERY PROTOCOLS. Zurich, 2023.",
      "THE LUXURY BABY APPAREL & NURSERY LINENS GUIDE. London, 2022.",
      "ARTRELADOS. Enxoval de Bebê Perfeito: O Segredo do Toque Zero e Bordados Antialérgicos para Maternidade. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-039-joint-curvas-bezier-tangencia-suave-pontos",
    "code": "J-039",
    "term": "Tangência Suave de Curvas Bézier",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação & Digitalização",
    "grammarClass": "Substantivo masculino / Homenagem matemática a Pierre Bézier (1910–1999).",
    "origin": "Do engenheiro francês Pierre Bézier (criador das curvas paramétricas na Renault nos anos 1960). Geometria vetorial computacional.",
    "summary": "Como criar curvas no software usando alças de Bézier com tangência suave para que os pontos de bordado fluam perfeitamente sem 'bicos' feios.",
    "definition": "O Joint de Curvas Bézier, Alinhamento de Âncoras e Tangência Suave de Trajetórias (Bézier Spline Joint, Tangent Handle Collinearity & Curvature Smoothness Protocol) é o método matemático e vetorial de digitalização no qual dois nós adjacentes de uma curva são interligados com continuidade de primeira ordem (C¹ - continuidade tangencial). Ao alinhar perfeitamente as hastes de controle (Handles) das âncoras vetoriais em ângulo colinear de 180°, o software gera uma transição curvilínea infinitamente suave para a agulha, eliminando microângulos pontiagudos (bicos) e redistribuindo os ângulos de costura (Stitch Angles) de forma gradual e fluida ao longo do preenchimento.",
    "technicalDetails": "Matemática e geometria das curvas Bézier no bordado:\n• Continuidade Tangencial C¹: As alças de controle do nó devem manter o mesmo ângulo no vetor de entrada e saída (Tangência Colinear);\n• Distribuição de Ângulo de Ponto (Stitch Angle Interpolation): Variação angular máxima de 5° a 8° por micropasso para evitar dobras abruptas no ponto cheio;\n• Densidade de Nós: Regra da 'Menor Quantidade de Nós': Menos nós geram curvas mais limpas e pantógrafos mais suaves;\n• Conversão de Nós no Software: Alternância entre Nós Suaves (Smooth Nodes - tecla 'Espaço' ou clique direito) e Nós de Canto (Corner Nodes - clique esquerdo);\n• Suavização Automática: Uso da ferramenta 'Smooth Curve / Reduzir Nós' para limpar ruídos de traçado manual.",
    "howItWorks": [
      "1. O digitalizador está vetorizando a asa de um cisne ou uma letra cursiva elegante no software Wilcom/Hatch.",
      "2. Em vez de dar dezenas de cliques com nós de canto que deixam a linha parecendo uma 'escadinha cheia de pontas', ele utiliza curvas Bézier.",
      "3. Clica com o botão direito para criar um 'Nó Suave (Smooth Bézier Node)'.",
      "4. Puxa as alças azuis de controle: a curva se molda perfeitamente ao contorno suave da asa.",
      "5. Ajusta as linhas de ângulo de ponto para acompanhar a curvatura natural da pena.",
      "6. Na máquina de bordar, o cabeçote costura em um fluxo contínuo e silencioso como uma seda.",
      "7. A peça bordada fica com curvas impecáveis, sem nenhuma quina e com brilho acetinado contínuo!"
    ],
    "beginnerExplanation": "As Curvas Bézier são as 'linhas elásticas mágicas' que você usa no programa de computador para desenhar curvas perfeitas sem esforço! Em vez de ficar dando um monte de cliques picadinhos que deixam a curva cheia de quinas e bicos feios, com a curva Bézier você coloca apenas dois pontinhos e puxa uma 'alcinha' com o mouse: a linha faz uma curva redondinha e suave como um arco-íris! Isso faz a máquina bordar macia e o desenho fica com acabamento profissional de desenho animado!",
    "applications": [
      "Desenho de letras caligráficas cursivas, arabescos barrocos e laços delicados",
      "Vetorização de personagens, curvas anatômicas e rostos sem arestas pontiagudas",
      "Transição fluida de ângulos de pontos em pétalas de flores e asas de pássaros",
      "Redução do tamanho do arquivo de matriz e suavização do movimento do pantógrafo"
    ],
    "commonErrors": [
      "Colocar 50 nós picados em uma curva simples (cria uma linha serrilhada e cheia de imperfeições)",
      "Quebrar a tangência das alças Bézier sem querer, transformando uma curva suave em uma quina afiada",
      "Colocar linhas de ângulo de ponto muito cruzadas que forçam a máquina a dar nós na curva"
    ],
    "troubleshootingTips": [
      "REGRA DE OURO DA VETORIZAÇÃO: Use o MENOR número de nós possível: dois nós com alças Bézier bem esticadas fazem uma curva muito mais bonita que 10 nós curtos!",
      "No Wilcom, Hatch e Pe-Design: use o botão DIREITO do mouse para criar pontos de curva suave e o botão ESQUERDO apenas para quinas afiadas",
      "Selecione o nó com a ferramenta de edição e segure 'Ctrl' para mover as alças mantendo a tangência perfeita de 180°",
      "Use a visualização de TrueView para checar o reflexo da luz: uma curva bem vetorizada brilha de forma uniforme e contínua"
    ],
    "dicaArtrelados": "Aprender a desenhar com curvas Bézier é o divisor de águas na vida de um programador de matrizes! Suas matrizes ficam leves, limpas e com uma fluidez artística que encanta qualquer bordadeira!",
    "voceSabia": "Pierre Bézier criou essas fórmulas matemáticas em 1962 para desenhar a carroceria do famoso carro Renault 8 na França; hoje, absolutamente todas as fontes do computador, o Adobe Illustrator, o CorelDraw e os softwares de bordado usam a mesma fórmula de Bézier!",
    "practicalExercise": "No seu software, tente desenhar a letra 'C' usando apenas 3 nós com o botão direito do mouse: ajuste as alças azuis e veja como a curva fica redonda e perfeita em menos de 10 segundos!",
    "quickSummary": "Uso de nós suaves e alças de Bézier alinhadas para criar curvas de bordado fluidas, sem quinas e com brilho contínuo.",
    "relatedTerms": [
      "Vetorização Manual & Punching",
      "Joint de Segmentos & Ponto de Ligação Oculto",
      "Ponto Cheio / Ponto Satin",
      "Wilcom EmbroideryStudio"
    ],
    "tags": [
      "j-039",
      "curvas bezier",
      "vetorizacao",
      "tangencia",
      "nos suaves",
      "wilcom",
      "hatch",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BÉZIER SPLINES & GEOMETRIC CONTINUITY IN TEXTILE CNC VECTORIZATION. Paris, 2023.",
      "THE EMBROIDERY DIGITIZING MATHEMATICAL FOUNDATIONS. Sydney, 2022.",
      "ARTRELADOS. Curvas de Mestre: Como Dominar as Curvas Bézier e Criar Matrizes com Fluidez Perfeita. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-040-juta-fibras-rusticas-linho-grosso",
    "code": "J-040",
    "term": "Bordado em Juta e Fibras Rústicas",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino / Fibra vegetal de Corchorus capsularis.",
    "origin": "Do sânscrito juta (trança de cabelos / fibra vegetal). Tecido rústico de trama aberta muito usado na decoração rústica e artesanato boho.",
    "summary": "Como bordar em tecido de juta e fibras naturais rústicas sem deixar os pontos afundarem nos vãos largos da trama aberta.",
    "definition": "O Bordado Técnico em Tecido de Juta, Fibras de Cânhamo, Serapilheira e Linho Grosso (Hessian Burlap Embroidery, Open-Mesh Stabilization & Heavy Fiber Sealing Protocol) é a metodologia especializada para personalização de artigos rústicos e ecológicos com trama extremamente aberta e fibras ásperas e espessas (como sacarias decorativas, jogos americanos rústicos, ecobags, embalagens de café gourmet e decorações no estilo Boho-Chic). Devido aos grandes espaços vazados entre os fios da juta, o bordado exige obrigatoriamente uma película de filme solúvel espesso no topo (Water-Soluble Topping) ou tela termocolante para servir de ponte e impedir que os pontos de bordado caiam nos vãos da trama.",
    "technicalDetails": "Diretrizes e parâmetros para bordar em juta:\n• Estabilizador Superior (Topping Obrigatório): Filme Hidrossolúvel de Alta Espessura (Solvy Topping 40 a 50 micras) colocado sobre a juta para criar um 'chão plano' para a agulha;\n• Estabilizador Inferior (Avesso): Entretela Rasgável Pesada (60g a 80g) ou Entretela de Recorte Macia colada com spray temporário;\n• Agulha Recomendada: Schmetz Jeans 80/12 ou Bordado 75/11 com ponta reforçada para perfurar as fibras vegetais duras sem desviar;\n• Densidade de Preenchimento: 0,38 mm a 0,40 mm com underlay de tatami denso (Full Grid Underlay) para ancorar toda a estrutura do ponto cheio;\n• Compensação de Repuxo: 0,45 mm a 0,55 mm devido à instabilidade geométrica da trama rústica.",
    "howItWorks": [
      "1. Um ateliê recebe a encomenda de 100 embalagens rústicas de juta natural para grãos de café especial gourmet com o logotipo da fazenda.",
      "2. A bordadeira sabe que a juta tem buracos grandes entre os fios e que os pontos normais sumiriam dentro desses buracos.",
      "3. Ela aplica entretela rasgável firme no avesso com spray e coloca uma folha de plástico hidrossolúvel (Solvy) por cima da juta.",
      "4. Instala uma agulha Jeans 80/12 na máquina.",
      "5. No programa, seleciona a matriz do logotipo com uma camada de ponto leve de suporte.",
      "6. A máquina costura os pontos cheios: a linha apoia perfeitamente sobre o plástico transparente, sem afundar nenhum milímetro.",
      "7. Ao terminar, ela destaca o plástico solúvel e passa um vapor leve: o bordado fica volumoso, nítido e em alto relevo sobre a textura rústica da juta!"
    ],
    "beginnerExplanation": "A juta é aquele tecido rústico de 'saco de café' ou de batata, lindo para decoração rústica de fazenda e casamentos boho! Como a juta tem a trama cheia de buraquinhos abertos, se você tentar bordar direto nela, a linha cai dentro dos buracos e o desenho fica todo feio e invisível! O segredo é muito simples: coloque um plástico transparente especial (plástico solúvel) por cima da juta antes de bordar. A linha vai deitar em cima do plástico e o desenho fica perfeito! Depois, basta puxar o plástico ou borrifar água morna que ele some como mágica!",
    "applications": [
      "Sacarias e embalagens rústicas para cafés especiais, vinhos e doces artesanais",
      "Jogos americanos, sousplats e caminhos de mesa rústicos em estilo Farmhouse e Boho",
      "Ecobags, sacolas ecológicas de feira e brindes corporativos sustentáveis",
      "Lembrancinhas de casamento rústico no campo, almofadas e decorações natalinas"
    ],
    "commonErrors": [
      "Bordar em juta sem colocar o plástico solúvel no topo (os pontos caem nos vãos e o bordado fica todo esburacado)",
      "Usar agulhas ultrafinas que entortam ao bater nas fibras duras da casca vegetal da juta",
      "Apertar o bastidor com força excessiva em juta ressecada, deformando a quadratura dos fios"
    ],
    "troubleshootingTips": [
      "Coloque SEMPRE Plástico Hidrossolúvel (Solvy Topping) no topo da juta antes de apertar o start",
      "Use agulha Jeans 80/12: a haste reforçada atravessa as fibras rústicas com facilidade sem quebrar",
      "No software, programe SEMPRE uma base de suporte (Underlay) em tatami ou grade dupla antes do ponto cheio",
      "Se a juta soltar muito pó ou fiapos secos, limpe a caixa da bobina da máquina com um pincel logo após terminar a produção"
    ],
    "dicaArtrelados": "O estilo rústico e sustentável está super em alta na alta gastronomia e decoração! Sacarias de juta personalizadas com bordado bem feito têm margem de lucro excelente e encantam clientes exigentes!",
    "voceSabia": "A juta é uma das fibras naturais mais biodegradáveis e ecologicamente sustentáveis do planeta: sua planta cresce em apenas 4 meses na Amazônia e na Índia sem necessidade de agrotóxicos ou fertilizantes químicos!",
    "practicalExercise": "Pegue um pedaço de juta: coloque plástico solúvel por cima e borde uma letra grande em ponto cheio: veja a perfeição dos pontos flutuando sobre a textura rústica da juta!",
    "quickSummary": "Uso obrigatório de plástico solúvel no topo e agulha resistente para bordar tecido rústico de juta sem afundar os pontos.",
    "relatedTerms": [
      "Plástico Hidrossolúvel / Topping",
      "Jogos Americanos & Sousplats Estruturados",
      "Agulha Jeans",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-040",
      "juta",
      "fibras rusticas",
      "sacaria",
      "topping soluvel",
      "boho",
      "sustentavel",
      "artrelados"
    ],
    "bibliographicReferences": [
      "NATURAL BAST FIBERS & BURLAP EMBROIDERY PROTOCOLS. New Delhi, 2023.",
      "THE RUSTIC HOME DECOR & TEXTILE CRAFT MANUAL. London, 2022.",
      "ARTRELADOS. Rústico e Sofisticado: Como Bordar em Juta e Fibras Naturais com Acabamento Impecável. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-041-jump-stitch-trimmer-facas-corte-pneumaticas",
    "code": "J-041",
    "term": "Cortador Automático de Saltos de Ponto",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina",
    "grammarClass": "Substantivo masculino / Mecanismo mecânico e pneumático de corte de linha.",
    "origin": "Do inglês jump stitch auto-trimmer (aparador de pontos de salto). Engenharia eletromecânica têxtil industrial.",
    "summary": "Como funciona o sistema de corte automático da máquina que apara as linhas de salto e da agulha por facas rotativas e pistões pneumáticos.",
    "definition": "O Jump Stitch Auto-Trimmer, Sistema de Corte Rotativo e Facas de Acionamento Pneumático/Solenóide (Automatic Jump Thread Trimmer, Rotary Knife Mechanism & Pneumatic Thread Gripping System) é o conjunto eletromecânico e pneumático de alta precisão localizado abaixo da chapa de agulha e acima do cabeçote das máquinas de bordar industriais e semiprofissionais. Quando o comando de corte (Trim Code - 0x7E) é lido no arquivo de matriz, um gancho móvel (Picker Hook) recolhe os fios superior e inferior, puxando-os contra uma lâmina fixa e uma lâmina móvel de vídia/aço temperado, cortando a linha em uma fração de segundo (menos de 0,3s) e prendendo a ponta do fio com uma pinça magnética/pneumática para a próxima descida sem desfiamento.",
    "technicalDetails": "Mecânica e parâmetros do sistema de corte automático:\n• Tipo de Lâminas: Conjunto de Faca Móvel (Movable Knife) e Contra-faca Fixa (Fixed Knife) com gume de afiação em ângulo de 15°;\n• Tempo de Ciclo de Corte: 250 a 350 milissegundos por operação de corte;\n• Posicionamento de Parada da Agulha: Agulha trava exatamente no Ponto Morto Superior (100° no encoder mecânico);\n• Pinça de Retenção de Fio (Thread Wiper / Thread Trap): Varinha retrátil superior que puxa a pontinha cortada da agulha para o avesso do tecido;\n• Manutenção e Lubrificação: Limpeza a cada 40 horas com jato de ar para remoção de fiapos acumulados nas guias da lâmina e lubrificação com microgota de óleo mineral ISO VG 10.",
    "howItWorks": [
      "1. A máquina está bordando um logotipo com 5 palavras separadas em letras pequenas.",
      "2. Ao terminar a primeira palavra, o software envia o comando 'TRIM (Cortar Linha)'.",
      "3. O motor principal reduz a velocidade e trava a agulha no ponto mais alto.",
      "4. Por baixo da chapa de metal, uma lâmina afiada em formato de bico avança rapidamente, pesca a linha de cima e a linha da bobina juntas.",
      "5. A lâmina fecha contra a contra-faca fixa, cortando as duas linhas rente à chapa.",
      "6. A pinça de retenção segura a pontinha da linha para não escapar da agulha, e o bastidor salta para a próxima palavra.",
      "7. A máquina reinicia o bordado instantaneamente sem deixar nenhum fio longo cruzando sobre o tecido!"
    ],
    "beginnerExplanation": "Sabe aquele trabalho chato e demorado de ter que pegar uma tesourinha e ficar cortando um por um todos aqueles fios compridos que sobram entre as letrinhas do bordado? As máquinas com 'Corte Automático de Linha' têm uma tesourinha microscópica de aço escondida embaixo da chapinha de metal! Toda vez que a máquina termina uma letra e precisa pular para a outra, essa mini tesoura corta a linha sozinha em meio segundo! Você tira a peça do bastidor limpinha e pronta para entregar!",
    "applications": [
      "Corte automático e instantâneo de linhas de salto entre palavras, letras e elementos dispersos",
      "Eliminação do trabalho manual de aparar fios soltos na pós-produção em confecções",
      "Troca rápida e automatizada de cores em máquinas industriais multicabeçotes",
      "Garantia de avesso limpo e sem acúmulo de laçadas emboladas"
    ],
    "commonErrors": [
      "Deixar fiapos de linha e pó de entretela acumularem embaixo da chapa de agulha (bloqueia o movimento da lâmina de corte)",
      "Lâmina de corte desgastada ou cega que apenas 'mastiga' a linha sem cortar, gerando erros de corte no painel",
      "Desregular a pressão da mola da faca, fazendo a linha escapar da agulha na retomada do bordado"
    ],
    "troubleshootingTips": [
      "Limpe a área da faca e a caixa da bobina SEMPRE com um pincel macio ou spray de ar comprimido a cada final de expediente",
      "Se a máquina parar de cortar as linhas ou ficar mastigando o fio, faça o teste de corte manual no painel e substitua as facas",
      "Certifique-se de que a distância de corte no seu software de matrizes esteja configurada para cortar a partir de 2 mm ou 3 mm de salto",
      "Evite usar objetos metálicos pontiagudos para cutucar as facas por baixo da chapa para não cegar o corte de precisão"
    ],
    "dicaArtrelados": "O sistema de corte automático de linha é um dos maiores ganhos de tempo e produtividade que existem! Cuidar da limpeza das lâminas mantém sua máquina sempre afiada e seus bordados limpinhos sem esforço!",
    "voceSabia": "As primeiras facas de corte automático de linha em máquinas de bordar eletrônicas foram introduzidas pela marca japonesa Tajima na década de 1970; antes dessa invenção, ateliês industriais precisavam contratar equipes inteiras de ajudantes apenas para passar o dia cortando linhas com tesouras!",
    "practicalExercise": "Abra a chapa de agulha da sua máquina e examine com uma lanterna o mecanismo da faquinha móvel: faça a limpeza de fiapos com o pincel e observe a perfeição do corte ao recolocar a chapa!",
    "quickSummary": "Mecanismo eletromecânico e facas rotativas sob a chapa que aparam as linhas de salto automaticamente.",
    "relatedTerms": [
      "Jump / Ponto de Salto",
      "Mecânica da Máquina",
      "Limpeza & Lubrificação Preventiva",
      "Comandos de Máquina & Funções de Controle"
    ],
    "tags": [
      "j-041",
      "jump stitch trimmer",
      "corte automatico",
      "facas rotativas",
      "mecanica",
      "limpeza de faca",
      "manutencao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "AUTOMATIC THREAD TRIMMING MECHANISMS & ROTARY KNIFE DYNAMICS. Tokyo, 2023.",
      "THE INDUSTRIAL SEWING MACHINE ELECTROMECHANICS MANUAL. Munich, 2022.",
      "ARTRELADOS. Corte Perfeito: Como Funciona o Sistema de Facas Automáticas e Como Manter o Corte Limpo. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-042-jacquard-digital-fusao-tecelagem-bordado",
    "code": "J-042",
    "term": "Bordado em Tecido Jacquard",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo masculino / Homenagem a Joseph Marie Jacquard (1752–1834).",
    "origin": "Criado pelo inventor francês Joseph Marie Jacquard em 1804 (tear mecânico com cartões perfurados programáveis, precursor dos computadores).",
    "summary": "Como criar peças híbridas de alta costura e tapeçaria combinando tecidos com padronagens tecidas em tear Jacquard com bordados computadorizados tridimensionais.",
    "definition": "A Técnica Híbrida de Jacquard Digital, Tapeçaria Texturizada e Bordado Computadorizado Sobreposto (Digital Jacquard Weaving Integration, Multi-Layer Surface Embroidery & Mixed-Media Textile Art) é a união da engenharia têxtil de tecelagem jacquard (onde padrões complexos de urdume e trama são tecidos simultaneamente com fios multicoloridos) com o bordado eletrônico de precisão. O bordado sobreposto utiliza as texturas e relevos já existentes no tecido jacquard como fundo estruturado, adicionando detalhes focais em ponto cheio brilhante, fios metálicos e aplicações 3D para gerar peças de tapeçaria, estofamento de luxo e figurinos teatrais de estética monumental.",
    "technicalDetails": "Diretrizes e parâmetros para bordar sobre tecidos Jacquard:\n• Estrutura do Tecido Jacquard: Tecido denso, encorpado e pesado (250g a 450g/m²), com relevos formados pelo entrelaçamento de múltiplos fios de trama;\n• Estabilizador Recomendado: Entretela Rasgável Média (50g) ou Entretela Hidrossolúvel grossa (o tecido já possui excelente estabilidade dimensional própria);\n• Agulha Obrigatória: Schmetz Jeans/Bordado 80/12 ou 90/14 com haste reforçada para penetrar as camadas espessas da tecelagem;\n• Alinhamento Óptico: Enquadramento preciso da matriz de bordado sobre o rapport (módulo de repetição) do padrão tecido do jacquard;\n• Densidade de Preenchimento: 0,40 mm a 0,42 mm, evitando sobreposição maciça que torne a peça excessivamente rígida.",
    "howItWorks": [
      "1. Um designer de alta decoração cria uma poltrona de luxo com tecido Jacquard floral adamascado em tons de dourado e verde escuro.",
      "2. O projeto exige bordar o brasão da família no encosto, harmonizando perfeitamente com o desenho floral já tecido no próprio tecido.",
      "3. O bordadeira posiciona o tecido no bastidor com entretela rasgável média e agulha 80/12.",
      "4. Utiliza o laser de mira da máquina para centralizar o brasão exatamente no meio de uma das flores de damasco do jacquard.",
      "5. A máquina borda o brasão com fios de poliéster acetinado e detalhes em fio metálico dourado reluzente.",
      "6. A combinação da textura fosca tecida do jacquard com o brilho em relevo do bordado metálico cria um contraste de tirar o fôlego.",
      "7. A peça é estofada e se torna o centro de atenções do ambiente!"
    ],
    "beginnerExplanation": "O tecido Jacquard é aquele tecido chique e encorpado de cortina de castelo, sofás caros ou vestidos de rainha, onde os desenhos de flores e arabescos já vêm tecidos e costurados diretamente na própria fábrica! Quando nós colocamos esse tecido na máquina de bordar e bordamos um brasão, letras douradas ou detalhes por cima desses desenhos, criamos uma peça de arte de museu! O segredo é usar uma agulha resistente (número 80 ou 90) e linhas brilhantes que contrastem com o fundo do tecido!",
    "applications": [
      "Almofadas de luxo, estofamento de poltronas e encostos de cadeiras nobres",
      "Figurinos de época, capas cerimoniais, mantos religiosos e vestes litúrgicas",
      "Bolsas de mão estruturadas, clutches e calçados finos em tecido jacquard",
      "Painéis artísticos de parede e tapeçarias decorativas contemporâneas"
    ],
    "commonErrors": [
      "Usar agulhas muito finas (como 65/9 ou 70/10) que entortam e quebram ao bater na tecelagem pesada do jacquard",
      "Não alinhar a matriz de bordado com os desenhos simétricos já existentes no tecido jacquard",
      "Colocar camadas excessivas de entretela grossa em um tecido que já é muito encorpado por natureza"
    ],
    "troubleshootingTips": [
      "Use agulha Schmetz Jeans 80/12 ou 90/14 para garantir perfurações limpas e sem desvio através da tecelagem densa",
      "Utilize o alinhamento a laser da sua máquina para posicionar o bordado exatamente no centro do desenho geométrico do jacquard",
      "Opte por fios metálicos e linhas acetinadas com alto brilho para criar um contraste marcante com a textura fosca do tecido de fundo",
      "Diminua a velocidade da máquina para 600 a 650 PPM ao bordar sobre áreas muito grossas do jacquard"
    ],
    "dicaArtrelados": "A fusão de tecidos nobres como o Jacquard com bordados computadorizados de alto relevo é um dos nichos mais lucrativos da decoração de interiores! Uma única almofada bordada assim pode ser vendida por valores muito superiores!",
    "voceSabia": "O tear de Jacquard de 1804 utilizava cartões perfurados de papelão para controlar os padrões de tecelagem e foi a inspiração direta que o matemático britânico Charles Babbage usou para inventar o primeiro conceito de computador do mundo!",
    "practicalExercise": "Pegue um pedaço de tecido jacquard floral adamascado: borde um monograma com linha dourada metálica bem no centro de uma flor e admire a riqueza do acabamento!",
    "quickSummary": "Técnica de alta decoração que combina tecidos com padronagens tecidas em tear Jacquard com bordados sobrepostos tridimensionais.",
    "relatedTerms": [
      "Linhas Metálicas",
      "Agulha Jeans",
      "Almofadas & Capas Decorativas Estruturadas",
      "Técnicas Especiais"
    ],
    "tags": [
      "j-042",
      "jacquard",
      "tecelagem",
      "alta costura",
      "tapecaria",
      "decoracao de luxo",
      "fio metalico",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JACQUARD TEXTILES & SURFACE EMBROIDERY INTEGRATION. Lyon, 2023.",
      "THE LUXURY UPHOLSTERY & HIGH-END HOME TEXTILES GUIDE. Milan, 2022.",
      "ARTRELADOS. A Nobreza do Jacquard: Como Combinar Tecidos Ricos com Bordados Computadorizados de Luxo. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-043-jogo-americano-redondo-cordone-ponto-festone",
    "code": "J-043",
    "term": "Jogo Americano com Borda Festonê",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês feston (guirlanda ondulada) e cordonnet (cordãozinho fino estruturado). Técnica de mesa posta refinada.",
    "summary": "Como bordar jogos americanos redondos (sousplats de tecido) com contornos recortados em ponto festonê recheado com cordone de alto relevo.",
    "definition": "A Confecção Estruturada de Jogo Americano Redondo com Borda em Ponto Festonê e Alma de Cordone (Round Scalloped Placemat with Raised Cordonnet Edge & Direct In-The-Hoop Finishing) é a técnica especializada de mesa posta onde o contorno circular ou ondulado (scalloped) da peça é finalizado inteiramente no bastidor da máquina com pontos cheios acetinados densos costurados sobre um cordão fino embutido (fio de cordone, cadarço ou recheio de ponto de corrida triplo). O cordone confere uma borda tridimensional arredondada, rígida e perfeitamente selada, permitindo que a bordadeira recorte o excesso de tecido rente aos pontos sem que a borda desfie, dispensando costuras manuais posteriores.",
    "technicalDetails": "Diretrizes técnicas e parâmetros de confecção in-the-hoop:\n• Tecidos Ideais: Linho rústico misto, Sarja acetinada 100% algodão, Jacquard impermeável ou Belga de mesa posta;\n• Recheio de Borda (Alma de Cordone): Ponto de corrida quádruplo concentrado na matriz ou aplicação manual de cordão de algodão nº 2 embutido sob o ponto cheio;\n• Parâmetros do Ponto Festonê: Ponto cheio com densidade de 0,35 mm a 0,38 mm e largura de coluna de 3,5 mm a 4,5 mm para selar todas as fibras cortadas;\n• Estabilizador: Entretela Hidrossolúvel de Tecido (80g) dupla ou Entretela Termossolúvel resistente;\n• Ferramenta de Acabamento: Tesoura de ponta de pato (Pelican Appliqué Scissors) ou pirógrafo de ponta fina para tecidos sintéticos.",
    "howItWorks": [
      "1. A cliente pede um conjunto de 6 jogos americanos redondos de 38 cm de diâmetro em linho cru com bordas onduladas festonê na cor verde oliva.",
      "2. A bordadeira monta o bastidor gigante (ou bastidor de repetição) com entretela hidrossolúvel dupla e o tecido de linho.",
      "3. A máquina borda a linha de posicionamento circular e, em seguida, a camada de cordone estrutural em relevo.",
      "4. Em seguida, a máquina executa o ponto festonê acetinado largo sobre o cordão, cobrindo-o totalmente com uma coluna densa e reluzente.",
      "5. No centro, borda o monograma da família.",
      "6. Ao retirar do bastidor, a artesã recorta o tecido rente à borda externa do festonê com a tesoura de ponta de pato.",
      "7. O jogo americano redondo fica com uma borda arredondada, firme, que não desfia nunca e pronta para decorar a mesa!"
    ],
    "beginnerExplanation": "O sousplat ou jogo americano redondo com borda de ondas (ponto festonê) é uma das peças mais vendidas e queridinhas da mesa posta! A borda fica parecendo um babadinho de luxo durinho e fofo porque a máquina borda um ponto cheio bem fechadinho por cima de uma linhazinha mais gordinha chamada 'cordone'! Quando o bordado termina, você só precisa pegar uma tesourinha bem afiada e cortar a sobra do tecido bem rente à costura: o tecido não desfia e a peça fica redonda e perfeita como um prato!",
    "applications": [
      "Jogos americanos redondos e sousplats de tecido para mesa posta de casamento e almoços de família",
      "Toalhas de bandeja circulares e centros de mesa decorativos com bordas recortadas",
      "Porta-copos redondos bordados in-the-hoop com acabamento em festonê",
      "Tapetes decorativos de lavabo e descansos de prato de alta durabilidade"
    ],
    "commonErrors": [
      "Fazer o ponto festonê muito estreito (menos de 2,5 mm), fazendo o tecido desfiar e soltar fiapos após as lavagens",
      "Usar entretela rasgável comum, deixando restos de papel aparecendo na bordinha recortada",
      "Cortar os pontos de bordado com a tesoura ao aparar a sobra do tecido"
    ],
    "troubleshootingTips": [
      "Mantenha a largura do ponto festonê SEMPRE entre 3,5 mm e 4,5 mm para garantir que a borda fique totalmente selada contra desfiamento",
      "Utilize SEMPRE Entretela Hidrossolúvel: assim, após dissolver com água, a borda ondulada fica limpa e 100% livre de fiapos",
      "Utilize uma Tesoura de Ponta de Pato (Pelican): a lâmina larga protege os pontos de bordado enquanto a lâmina fina corta o tecido rente",
      "Para tecidos sintéticos como Oxford ou Jacquard poliéster, você pode usar um pirógrafo de ponta fina para cortar e selar a quente ao mesmo tempo"
    ],
    "dicaArtrelados": "Jogos americanos redondos bordados com festonê e monograma são peças que têm procura constante o ano inteiro! Monte kits com 4 ou 6 unidades combinando com guardanapos de linho: é sucesso de vendas garantido!",
    "voceSabia": "O acabamento em ponto Festonê (scalloped edge) imita as tradicionais guirlandas de flores e conchas marítimas esculpidas na arquitetura dos palácios renascentistas franceses e italianos do século XVII!",
    "practicalExercise": "Crie no seu software um círculo de 15 cm com borda em ponto festonê de 4 mm: borde em um retalho de sarja com entretela hidrossolúvel, recorte com cuidado e teste a firmeza da sua primeira borda estruturada!",
    "quickSummary": "Confecção de jogos americanos redondos com bordas onduladas em ponto festonê e cordone que selam o tecido contra desfiamento.",
    "relatedTerms": [
      "Ponto Festonê / Scallop Stitch",
      "Jogos Americanos & Sousplats Estruturados",
      "Entretela Hidrossolúvel / Solvy",
      "Técnicas Especiais"
    ],
    "tags": [
      "j-043",
      "jogo americano redondo",
      "sousplat",
      "festone",
      "cordone",
      "mesa posta",
      "in-the-hoop",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ROUND PLACEMAT DESIGN & SCALLOPED EDGE EMBROIDERY PATTERNS. Milan, 2023.",
      "THE TABLE LINENS & LUXURY PLACEMAT FABRICATION GUIDE. Paris, 2022.",
      "ARTRELADOS. Mesa Posta Perfeita: O Guia Definitivo para Fazer Jogos Americanos Redondos com Festonê e Cordone. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-044-jeans-stretch-elastano-deformacao-bidirecional",
    "code": "J-044",
    "term": "Bordado em Jeans com Elastano",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês stretch denim (denim flexível com filamentos de elastano/Lycra). Vestuário moderno ajustado ao corpo.",
    "summary": "Técnicas essenciais para bordar calças e shorts jeans com elastano (stretch) sem esticar o tecido no bastidor e sem enrugar o desenho.",
    "definition": "O Bordado Técnico em Jeans com Stretch, Denim Elástico com Spandex e Controle de Deformação Bidirecional (Stretch Denim Embroidery, Elastane Warp Recovery & Tension Equilibrium Protocol) é o conjunto de procedimentos para bordar tecidos denim que contêm em sua composição de 2% a 10% de elastano (Spandex / Lycra / T400). Esses tecidos esticam facilmente sob a pressão mecânica dos aros do bastidor; caso sejam esticados durante o enquadramento, quando o bastidor é retirado, o tecido elástico se retrai violentamente para seu tamanho original, causando enrugamento severo (Puckering) ao redor de todo o bordado.",
    "technicalDetails": "Diretrizes técnicas para jeans com elastano/stretch:\n• Estabilizador Obrigatório: Entretela de Recorte Macia de Alta Gramatura (Cut-Away 70g ou 80g) colada com spray adesivo temporário no avesso;\n• Regra de Enquadramento no Bastidor: O tecido deve ser posicionado com TENSÃO ZERO ('Tensão Neutra' / Neutral Relaxation State) ou colocado em bastidor magnético / técnica de flutuação;\n• Agulha Recomendada: Schmetz Stretch ou Ball Point 75/11 ou 80/12 (ponta bola que não corta os filamentos de elastano internos);\n• Compensação de Repuxo (Pull Compensation): Aumentada para 0,45 mm a 0,55 mm no software;\n• Underlay: Malha de tatami dupla leve (Double Grid Underlay) cobrindo toda a extensão do desenho para fixar a elasticidade do jeans à entretela.",
    "howItWorks": [
      "1. Uma marca de moda envia 30 calças jeans femininas super skinny com 4% de elastano para bordar um logotipo estilizado no cós e no bolso traseiro.",
      "2. A bordadeira sabe que não pode 'puxar' o jeans no bastidor como se fosse um tambor, senão o bordado vai virar uma ameixa seca enrugada.",
      "3. Ela cola a entretela de recorte no avesso do jeans com spray adesivo temporário.",
      "4. Posiciona o jeans no bastidor de forma relaxada e lisa, sem puxar as bordas com as mãos.",
      "5. Instala uma agulha Schmetz Stretch 75/11.",
      "6. A máquina costura primeiro a grade de suporte e depois os pontos cheios do logotipo.",
      "7. Ao soltar do bastidor, o tecido relaxa e o bordado permanece 100% plano, sem nenhuma ruga ou ondulação no jeans!"
    ],
    "beginnerExplanation": "As calças jeans modernas são cheias de elastano (aquele material elástico que estica para a calça ficar justinha e confortável no corpo). Se você colocar essa calça no bastidor e ficar puxando o tecido com a mão para esticar, quando você tirar do bastidor o jeans vai encolher de volta e o seu bordado vai ficar todo enrugado e torto! O segredo é: NUNCA puxe o jeans elástico no bastidor! Deixe ele deitadinho, retinho e relaxado, use uma entretela de recorte colada por baixo e uma agulha própria para tecidos que esticam!",
    "applications": [
      "Bordados em bolsos, barras e cós de calças jeans femininas e masculinas skinny",
      "Shorts e saias jeans com elastano para coleções de moda jovem e casual",
      "Jaquetas jeans flexíveis com bordados monumentais nas costas",
      "Macacões e jardineiras infantis em denim com stretch"
    ],
    "commonErrors": [
      "Puxar as abas do tecido depois de fechar o bastidor (estica o elastano e causa enrugamento fatal)",
      "Usar entretela rasgável fina (o tecido elástico deforma e quebra os pontos após a primeira lavagem)",
      "Usar agulhas de ponta cortante que rompem os filamentos de elastano internos, criando furos e 'desfiados' no jeans"
    ],
    "troubleshootingTips": [
      "NUNCA puxe ou estique o jeans elastano ao colocar no bastidor: posicione o tecido com tensão neutra e 100% relaxado",
      "Use SEMPRE Entretela de Recorte (Cut-Away 70g) colada com spray: ela anula a elasticidade do jeans apenas na área do bordado",
      "Instale agulhas Schmetz Stretch ou Ball Point (Ponta Bola 75/11): elas afastam os fios de elastano sem arrebentá-los",
      "Utilize Bastidores Magnéticos ou a técnica de Flutuação para prender peças difíceis sem esticar o tecido elástico"
    ],
    "dicaArtrelados": "Dominar o bordado em jeans com elastano é essencial para atender lojas e marcas de moda! Com a técnica de tensão neutra e entretela de recorte, seus bordados no jeans elástico ficarão lisos e impecáveis como saídos de fábrica!",
    "voceSabia": "O elastano (Lycra) foi inventado pelo químico Joseph Shivers na DuPont em 1958 e revolucionou o mercado mundial do denim nos anos 1990, transformando o jeans pesado e rígido em uma segunda pele confortável e flexível!",
    "practicalExercise": "Pegue um pedaço de tecido jeans com stretch: cole entretela de recorte no avesso, enquadre sem esticar e borde um círculo em ponto tatami: solte do bastidor e veja como o círculo fica redondinho e plano!",
    "quickSummary": "Enquadramento com tensão neutra e entretela de recorte colada para bordar jeans com elastano sem enrugar o tecido.",
    "relatedTerms": [
      "Jeans, Denim Pesado",
      "Entretela de Recorte / Cut-Away",
      "Agulha Stretch",
      "Enrugamento do Tecido / Puckering"
    ],
    "tags": [
      "j-044",
      "jeans stretch",
      "elastano",
      "spandex",
      "denim flexivel",
      "tensao neutra",
      "cut-away",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ELASTOMERIC DENIM STABILIZATION & STRETCH EMBROIDERY PROTOCOLS. Milan, 2023.",
      "THE MODERN DENIM WEAR & SPANDEX HANDLING MANUAL. London, 2022.",
      "ARTRELADOS. Denim com Elastano Sem Rugas: Como Bordar Jeans com Stretch e Manter o Tecido 100% Plano. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-045-jump-deslocamento-longo-limite-cinematico",
    "code": "J-045",
    "term": "Salto de Deslocamento Longo",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês long jump feed rate / dynamic braking (frenagem dinâmica em saltos longos). Engenharia de servomotores CNC.",
    "summary": "Como o comprimento máximo do salto do pantógrafo afeta a velocidade da máquina e como a frenagem mecânica previne batidas de bastidor.",
    "definition": "O Limite Cinemático de Salto Longo, Frenagem Dinâmica de Servomotores e Controle de Inércia do Pantógrafo (Long Jump Velocity Scaling, Inertial Deceleration Profiling & Stepper Feed Limitations) é o conjunto de restrições eletromecânicas e algoritmos que governam o deslocamento do bastidor quando a agulha realiza saltos de grande amplitude (superiores a 10 mm ou 12,7 mm - limite padrão do formato DST). Como o bastidor não pode se mover a 1000 PPM em distâncias longas sem colidir ou perder passos de motor, a controladora da máquina aciona automaticamente ciclos múltiplos de rotação lenta (Multi-Step Jumps) ou aciona a frenagem regenerativa dos servomotores para absorver o impacto inercial.",
    "technicalDetails": "Cinemática e parâmetros de saltos longos:\n• Limite Físico de Salto por Ciclo de Agulha (Max Jump Stitch Length): Máximo de 12,1 mm a 12,7 mm por ponto no código binário Tajima DST;\n• Decomposição em Múltiplos Saltos (Jump Splitting): Saltos de 50 mm são divididos automaticamente em 4 ou 5 micro-saltos sucessivos de 10-12 mm;\n• Redução Dinâmica de Velocidade (Dynamic RPM Throttling): A velocidade angular cai instantaneamente para 300-400 PPM durante o deslocamento longo;\n• Frenagem Regenerativa de Motores: Dissipação de energia cinética em resistores de frenagem para evitar que a inércia do bastidor desalinhe as coordenadas X/Y;\n• Otimização no Software de Digitalização: Aplicação da ferramenta 'Otimizar Ordem de Objetos' para eliminar saltos longos desnecessários através da matriz.",
    "howItWorks": [
      "1. Uma matriz de bordado mal programada tem um elemento no canto superior esquerdo e o próximo elemento no canto inferior direito a 25 cm de distância.",
      "2. Se a máquina tentasse deslocar o bastidor pesado esses 25 cm no tempo de uma única descida de agulha a 900 PPM, o motor travaria ou o bastidor bateria com força na carcaça.",
      "3. O sistema eletrônico da máquina detecta a grande distância e divide o salto em vários passos menores.",
      "4. O motor freia suavemente, a agulha sobe e para no topo, e o pantógrafo desliza em movimento contínuo e silencioso até o novo ponto.",
      "5. Ao chegar na nova coordenada, a máquina acelera novamente de forma gradual.",
      "6. A integridade mecânica dos eixos X e Y é 100% preservada.",
      "7. O bordado recomeça na posição exata sem perder o sincronismo nem um décimo de milímetro!"
    ],
    "beginnerExplanation": "Imagine que você está correndo e precisa dar um pulo bem grande para o outro lado de uma sala: você precisa diminuir a velocidade, olhar onde vai pisar e pular com cuidado para não tropeçar na parede! A máquina de bordar faz a mesma coisa: quando um desenho tem duas partes muito longe uma da outra, ela 'freia' os motores com cuidado para levar o bastidor com calma até o outro lado, sem dar aquele tranco forte que assusta e sem desregular os motores da máquina!",
    "applications": [
      "Proteção de eixos, servomotores e correias dentadas do pantógrafo em bastidores grandes",
      "Prevenção de desalinhamento de coordenadas (perda de passos de motor de passo)",
      "Transição segura entre brasões e elementos distantes em matrizes de grande formato",
      "Redução de ruído mecânico e vibração estrutural na bancada de trabalho"
    ],
    "commonErrors": [
      "Criar matrizes com percursos desordenados e dezenas de saltos longos cruzando o bastidor à toa (aumenta o tempo de bordado e o desgaste da máquina)",
      "Desativar limites de segurança nos parâmetros de fábrica da placa-mãe da máquina",
      "Trabalhar com bastidores pesados em velocidade máxima sem fixação firme na bancada"
    ],
    "troubleshootingTips": [
      "No software de matrizes, utilize SEMPRE a ferramenta 'Otimizar Sequência de Cores e Trajetos' para diminuir saltos longos",
      "Programe caminhos de corrida de transição (Connecting Run Stitches) por baixo de outros objetos sempre que possível para evitar saltos desnecessários",
      "Se ouvir estalos secos ou notar que o bordado saiu do lugar após um salto longo, verifique a tensão das correias do pantógrafo",
      "Mantenha a guia linear do pantógrafo sempre limpa e lubrificada com vaselina sólida ou óleo fino de máquina"
    ],
    "dicaArtrelados": "Uma matriz profissional é reconhecida pelo menor número possível de saltos longos! Um percurso inteligente economiza tempo de máquina, poupa os motores e deixa a produção muito mais rápida!",
    "voceSabia": "O limite de 12,7 mm para saltos de ponto foi criado originalmente nos anos 1970 baseado na limitação de fita de papel perfurada de 8 canais (formato binário Jacquard/Tajima) e continua como padrão universal na indústria têxtil até hoje!",
    "practicalExercise": "Abra uma matriz no seu software e use o simulador de bordado (Player): observe se o bastidor fica pulando de um lado para o outro à toa e reorganize a sequência para deixá-lo mais fluido!",
    "quickSummary": "Controle eletrônico de velocidade e frenagem de motores em saltos longos do bastidor para proteger a mecânica da máquina.",
    "relatedTerms": [
      "Jump / Ponto de Salto",
      "Pantógrafo da Máquina",
      "Mecânica da Máquina",
      "Comandos de Máquina & Funções de Controle"
    ],
    "tags": [
      "j-045",
      "jump longo",
      "cinematica",
      "frenagem dinamica",
      "servomotores",
      "pantografo",
      "mecanica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "STEPPER & SERVO INERTIAL CONTROL IN TEXTILE EMBROIDERY CNC. Nagoya, 2023.",
      "THE ADVANCED CNC EMBROIDERY MOTION CONTROL HANDBOOK. Berlin, 2022.",
      "ARTRELADOS. Cinemática do Pantógrafo: Como Saltos Longos Afetam a Vida Útil da Máquina e Como Otimizar Trajetos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-046-jaleco-personalizado-bolsos-fechados-bastidor-bolso",
    "code": "J-046",
    "term": "Bordado em Bolsos de Jaleco",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês jalot e da engenharia de bastidores de pinça mecânica de bolso (Pocket Clamps / Fast Frames).",
    "summary": "Como bordar nomes e logotipos diretamente na tampa ou no bolso de jalecos já costurados e fechados sem costurar o bolso por dentro.",
    "definition": "O Bordado Técnico em Bolsos de Jalecos Fechados, Bastidores de Pinça Mecânica e Técnicas de Flutuação Tubular (Lab Coat Pocket Clamping, Closed Pocket Embroidery & Fast-Frame Floating Protocol) é o método especializado para bordar logotipos, nomes de médicos e brasões institucionais diretamente no tecido do bolso frontal ou superior de jalecos, camisas sociais e scrubs que já vêm totalmente montados e costurados da confecção. Para evitar o erro catastrófico de costurar a frente do bolso junto com o corpo do jaleco (fechando o bolso permanentemente para uso), utilizam-se bastidores especiais de bolso (Pocket Clamp Frames), réguas de inserção interna e a técnica de flutuação com entretela colante.",
    "technicalDetails": "Diretrizes técnicas para bordar em bolsos fechados:\n• Bastidores Recomendados: 1) Bastidor de Bolso com Braço de Pinça (Pocket Clamp Frame), 2) Fast Frames com janela aberta, 3) Bastidor Magnético estreito (10x10 cm);\n• Técnica de Flutuação Alternativa (Bastidor Comum): Enquadra-se apenas a entretela autoadesiva (Peel & Stick) no bastidor normal, cola-se uma chapa de papelão fino/plástico dentro do bolso e cola-se o bolso sobre a entretela, deixando o corpo do jaleco livre por baixo da base livre da máquina;\n• Área Máxima de Bordado no Bolso: 7x7 cm ou 8x8 cm (respeitando a margem de segurança de 1,5 cm das costuras laterais do bolso);\n• Agulha: Schmetz Microtex ou Bordado 70/10 ou 75/11;\n• Densidade: 0,42 mm para evitar repuxo excessivo no pequeno retalho do bolso.",
    "howItWorks": [
      "1. Um médico leva seu jaleco favorito importado já pronto e pede para bordar o logotipo da universidade e o nome dele bem no bolso superior esquerdo.",
      "2. Como o bolso já está costurado no jaleco, a bordadeira não pode simplesmente prender o jaleco inteiro no bastidor comum, senão a agulha vai costurar a boca do bolso e inutilizá-lo.",
      "3. Ela usa o bastidor de bolso (Pocket Clamp): a base metálica fina desliza por dentro do bolso e a pinça superior prende o tecido por cima.",
      "4. O restante do jaleco fica totalmente solto ao redor do braço tubular da máquina.",
      "5. A máquina borda o logotipo e o nome com precisão milimétrica.",
      "6. Ao terminar, a bordadeira solta a pinça do bastidor.",
      "7. O bolso continua 100% funcional e aberto por dentro, com o bordado nobre e perfeitamente posicionado!"
    ],
    "beginnerExplanation": "Quando um médico traz um jaleco já pronto e pede para bordar no bolsinho do peito, tem um perigo gigante: se você colocar no bastidor de qualquer jeito, a máquina vai costurar a frente do bolso junto com o jaleco e o bolso nunca mais vai abrir para colocar caneta! O segredo é usar um bastidor fininho que entra por dentro do bolsinho (como uma espátula) ou usar entretela colante com a técnica de flutuação: o bordado fica perfeito e o bolsinho continua abertinho para o doutor guardar as canetas dele!",
    "applications": [
      "Bordados em bolsos superiores e inferiores de jalecos médicos e odontológicos prontos",
      "Personalização de bolsos de camisas sociais masculinas e femininas fechadas",
      "Bordados em bolsos frontais de aventais de chef de cozinha e garçons",
      "Customização de bolsos de mochilas e jaquetas corporativas montadas"
    ],
    "commonErrors": [
      "Costurar a parte de trás do bolso junto com a frente, inutilizando o bolso da peça",
      "Bordar muito perto da costura da borda do bolso, fazendo o calcador bater na dobra e quebrar a agulha",
      "Usar matrizes maiores do que o espaço útil interno do bolso"
    ],
    "troubleshootingTips": [
      "SEMPRE insira a mão por dentro do bolso antes de apertar o start para garantir que a parte traseira do bolso e o jaleco estejam totalmente livres",
      "Utilize Bastidores de Bolso (Pocket Clamps) ou Bastidores Magnéticos pequenos para facilitar o encaixe em espaços estreitos",
      "Deixe uma margem de segurança de pelo menos 1,5 cm entre o bordado e as costuras laterais e inferiores do bolso",
      "Meça a altura exata para que o bordado não fique escondido sob a dobra da pala ou lapela do jaleco"
    ],
    "dicaArtrelados": "Personalizar jalecos e camisas já costuradas é um serviço muito valorizado! Ter um bastidor de bolso no ateliê abre as portas para atender médicos, advogados e profissionais liberais que trazem suas próprias peças prontas para bordar!",
    "voceSabia": "Os primeiros jalecos médicos eram pretos para disfarçar manchas e poeira; a transição para os jalecos brancos com bolsos frontais ocorreu no final do século XIX por recomendação do cirurgião britânico Joseph Lister para simbolizar a esterilização e higiene na medicina moderna!",
    "practicalExercise": "Pegue uma camisa ou jaleco velho com bolso: teste a técnica de flutuação colando apenas a frente do bolso sobre uma entretela autoadesiva: borde uma inicial e confirme que o interior do bolso continua livre!",
    "quickSummary": "Uso de bastidores especiais de bolso e técnicas de flutuação para bordar bolsos de jalecos prontos sem costurar o bolso por dentro.",
    "relatedTerms": [
      "Jalecos, Scrubs & Posicionamento Técnico de Brasões e Nomes",
      "Flutuação de Tecido / Floating",
      "Bastidores de Boné, Cilindros & Dispositivos Especiais",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-046",
      "jaleco com bolso",
      "bastidor de bolso",
      "pocket clamp",
      "scrubs",
      "flutuacao",
      "medicina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "POCKET CLAMPING & TUBULAR EMBROIDERY TECHNIQUES FOR WORKWEAR. London, 2023.",
      "THE MEDICAL APPAREL & CLINICAL ATTIRE CUSTOMIZATION MANUAL. Chicago, 2022.",
      "ARTRELADOS. Bordado em Bolsos Fechados: O Segredo para Personalizar Jalecos Prontos com Segurança Total. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-047-jersey-malhas-fluidas-viscose-estabilizacao",
    "code": "J-047",
    "term": "Bordado em Malha Jersey e Viscose",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino / Origem na Ilha de Jersey (Canal da Mancha).",
    "origin": "Originário da Ilha de Jersey (Reino Unido), onde era tricotado à mão para pescadores no século XVIII; popularizado na alta costura por Coco Chanel nos anos 1920.",
    "summary": "Como bordar em malha jersey e viscose fluída ultrafina sem furar o tecido, sem repuxar e garantindo que o caimento continue leve e macio.",
    "definition": "O Bordado Técnico em Tecido Jersey, Malha Fria de Viscose, Lyocell e Malhas Fluídas Ultrafinas (Single Jersey Knit Stabilization, Viscose Drapability & Soft-Touch Underlay Protocol) é a metodologia especializada para personalização de roupas de moda feminina, vestidos de festa, pijamas finos e camisetas premium feitas em malha de viscose com elastano ou jersey simples. Por serem tecidos extremamente leves, com alta elasticidade e caimento fluído (drapeado), qualquer excesso de densidade ou entretela pesada transforma o bordado em uma 'placa dura' que quebra o caimento natural da roupa, exigindo entretelas de recorte ultrafinas (Polymesh / No-Show Mesh), agulhas ponta bola SES 65/9 ou 70/10 e matrizes com densidades aliviadas.",
    "technicalDetails": "Diretrizes técnicas para tecidos Jersey e Malha Fluída:\n• Estabilizador Obrigatório: Entretela No-Show Mesh (Polymesh de Recorte 40g a 50g) colada com spray adesivo temporário no avesso (mantém o caimento sem rigidez);\n• Topping Superior: Filme Hidrossolúvel fino (Solvy 20 micras) para evitar que os pontos mergulhem entre os laços da malha;\n• Agulha Recomendada: Schmetz Ball Point (SES / Ponta Bola Leve) 65/9 ou 70/10 (previne 'furinhos de escada' na malha);\n• Densidade de Preenchimento: 0,45 mm a 0,50 mm (matrizes 20% mais leves que o padrão de algodão);\n• Compensação de Repuxo: 0,40 mm a 0,50 mm com underlays de linha central e contorno leve.",
    "howItWorks": [
      "1. Uma confecção de moda feminina encomenda a personalização de um vestido de festa em malha jersey fluída de viscose com um ramo de flores no decote.",
      "2. A bordadeira sabe que uma entretela comum deixaria o peito do vestido duro e desconfortável.",
      "3. Ela aplica a entretela No-Show Mesh (malha de recorte suave que não marca no tecido) no avesso com spray.",
      "4. Por cima da malha, coloca um filme plástico hidrossolúvel fino.",
      "5. Instala uma agulha ponta bola Schmetz SES 70/10 nova.",
      "6. Seleciona a matriz floral digitalizada com densidade aberta e pontos leves.",
      "7. Ao terminar, retira o filme com água e recorta a entretela em volta: o vestido mantém seu caimento ondulado e sedoso, com o bordado macio como uma carícia!"
    ],
    "beginnerExplanation": "A malha jersey ou malha fria de viscose é aquele tecido super molinho, gostoso, geladinho e que cai no corpo com a maior elegância! Se você colocar uma entretela dura de papel e bordar um desenho muito pesado nesse tecido, o bordado vira um 'tijolo duro' no meio da blusa! O segredo das marcas famosas é usar uma entretela de redinha especial chamada 'No-Show Mesh' (que é macia como tecido e quase invisível) e uma agulha de pontinha arredondada: o bordado fica fofinho, não machuca o tecido e a roupa continua com aquele caimento maravilhoso!",
    "applications": [
      "Vestidos femininos, saias e macacões em jersey fluído e malha de viscose",
      "Pijamas de luxo, camisolas de seda/viscose e homewear de alto padrão",
      "Camisetas finas de modal, tencel, lyocell e algodão pima com elastano",
      "Moda praia elegante, saídas de banho e quimonos acetinados"
    ],
    "commonErrors": [
      "Usar entretela rasgável grossa (aparece um quadrado rígido e feio por baixo da transparência da malha)",
      "Usar agulhas ponta agulhada afiada (rompe os anéis da malha e abre 'carreiras desfiadas' na primeira lavagem)",
      "Bordar com densidades muito pesadas que pesam no decote da roupa"
    ],
    "troubleshootingTips": [
      "Utilize SEMPRE Entretela No-Show Mesh (Polymesh): ela é macia, não arranha e não transparece através da malha fina",
      "Use Agulha Ponta Bola (SES 65/9 ou 70/10): a ponta arredondada desliza entre os fios da malha sem rasgar",
      "Coloque uma folha de plástico solúvel (Solvy) no topo para dar acabamento perfeito nos pontos cheios",
      "Enquadre a malha no bastidor de forma 100% relaxada, sem esticar os cantos do tecido"
    ],
    "dicaArtrelados": "A malha jersey de viscose exige delicadeza, mas quando bem trabalhada, resulta em peças de alto valor agregado! O segredo é sempre pensar na leveza do bordado!",
    "voceSabia": "Foi a estilista Coco Chanel que, em 1916, escandalizou e revolucionou a moda mundial ao usar o tecido jersey (até então usado apenas em roupas íntimas e suéteres de pescadores) para criar os primeiros vestidos elegantes e confortáveis da alta costura parisiense!",
    "practicalExercise": "Pegue um retalho de malha de viscose: aplique entretela No-Show Mesh com spray, agulha ponta bola 70/10 e plástico solúvel no topo: borde um coração e sinta a maleabilidade do tecido após o bordado!",
    "quickSummary": "Uso de entretela No-Show Mesh macia, agulha ponta bola fina e matriz leve para bordar malhas fluídas de viscose sem perder o caimento.",
    "relatedTerms": [
      "Entretela de Recorte / Cut-Away",
      "Agulha Ponta Bola / Ball Point",
      "Plástico Hidrossolúvel / Topping",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-047",
      "jersey",
      "malha fluida",
      "viscose",
      "no-show mesh",
      "ponta bola",
      "moda feminina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "FLUID KNIT FABRICS & LIGHTWEIGHT EMBROIDERY STABILIZATION. Zurich, 2023.",
      "THE LUXURY KNITWEAR & VISCOSE EMBROIDERY MANUAL. Paris, 2022.",
      "ARTRELADOS. Caimento Perfeito: O Guia Definitivo para Bordar Jersey, Viscose e Malhas Fluídas com Suavidade Total. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-048-jumper-fios-sensores-eletronicos-passagem-linha",
    "code": "J-048",
    "term": "Sensores Eletrônicos de Passagem de Linha",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina",
    "grammarClass": "Substantivo masculino / Engenharia de sensores optoeletrônicos.",
    "origin": "Do inglês thread jumper / optical thread break sensor (sensor óptico de ruptura de linha). Automação industrial têxtil.",
    "summary": "Como funcionam os sensores ópticos e jumpers eletrônicos que detectam instantaneamente se a linha superior ou da bobina quebrou ou acabou.",
    "definition": "O Sistema de Sensores de Linha, Jumpers Eletrônicos e Optoacopladores de Detecção de Ruptura (Optical Thread Break Detection, Rotary Encoder Sensors & Pulse Drop-Out Jumper Circuit) é o conjunto de circuitos ópticos, infravermelhos e magnéticos instalados nos passa-fios do cabeçote e na caixa de bobina das máquinas de bordar. O fio passa girando uma pequena roldana com discos ranhurados ou interrompendo feixes de luz infravermelha. Quando a linha quebra ou acaba na bobina, os pulsos elétricos cessam imediatamente; o circuito envia um comando de interrupção (Drop-Out Signal) que freia o motor principal em menos de 2 pontos e exibe o alerta 'Linha Rompida' na tela.",
    "technicalDetails": "Eletrônica e funcionamento dos sensores de linha:\n• Tipos de Sensores: 1) Sensores Rotativos Ópticos (Rotary Pulse Encoders nos passa-fios superiores), 2) Sensores Piezoelétricos de Vibração, 3) Sensores Infravermelhos de Reflexão na Bobina;\n• Tempo de Resposta: Detecção em 20 a 50 milissegundos (máquina para no máximo em 2 a 3 pontos após a quebra);\n• Ajuste de Sensibilidade (Sensitivity Threshold): Configurável no painel da máquina de 1 (alta sensibilidade para linhas finas) a 7 (baixa sensibilidade para linhas metálicas);\n• Jumpers de Placa de Circuito (Hardware Jumper Pins): Conectores elétricos na placa-mãe que permitem ativar, desativar ou calibrar canais individuais de agulhas em máquinas multicabeçotes;\n• Manutenção Preventiva: Limpeza periódica dos feixes ópticos contra poeira e fiapos de poliéster.",
    "howItWorks": [
      "1. A máquina está bordando a 850 PPM quando a linha superior da agulha 4 enrosca no cone e arrebenta.",
      "2. A roldana do sensor do cabeçote para de girar instantaneamente.",
      "3. O sensor optoeletrônico detecta a ausência de pulsos de luz.",
      "4. Em menos de 2 rotações, o microcontrolador aciona o freio do motor e sobe a barra de agulha.",
      "5. A máquina apita e acende a luz vermelha no cabeçote com a mensagem: 'Quebra de Linha Superior Agulha 4'.",
      "6. A operadora repassa a linha na agulha em 10 segundos, volta 3 pontos no painel e aperta o botão verde.",
      "7. A máquina retoma exatamente do ponto em que a linha quebrou, sem deixar falhas no bordado!"
    ],
    "beginnerExplanation": "Sabe como a máquina sabe na mesma hora quando a linha arrebentou ou quando a linha de baixo acabou? Ela tem pequenos 'olhinhos mágicos' (sensores eletrônicos) por onde a linha passa deslizando! Enquanto a linha estiver correndo e girando a rodinha, a máquina sabe que está tudo bem. Se a linha quebrar e parar de correr, o sensor percebe em uma fração de segundo, freia a máquina na hora e apita para você! Assim você não perde tempo e o bordado não fica com buracos sem costura!",
    "applications": [
      "Parada imediata de segurança em quebras de linha superior e esvaziamento de bobina",
      "Sincronização e monitoramento de cabeçotes em máquinas industriais de 1 a 20 cabeçotes",
      "Ajuste fino de sensibilidade para fios delicados, linhas metálicas e fios foscos",
      "Prevenção de 'pontos falsos' e falhas invisíveis em grandes produções"
    ],
    "commonErrors": [
      "Deixar poeira e fiapos de linha acumularem dentro dos sensores ópticos (a máquina fica apitando 'quebra de linha falsa' mesmo com a linha inteira)",
      "Passar a linha fora da roldana do sensor durante o enfiamento manual",
      "Desativar o sensor no painel e esquecer, fazendo a máquina bordar 'no vazio' quando a linha acabar"
    ],
    "troubleshootingTips": [
      "Se a máquina ficar apitando que a linha quebrou, mas a linha estiver perfeita, limpe a fenda do sensor com um pincel macio ou spray de ar",
      "Certifique-se de que a linha esteja passando DENTRO da ranhura da rodinha do sensor e dando a volta correta",
      "Ao bordar com linhas metálicas, reduza a sensibilidade do sensor no painel da máquina para evitar falsos alertas causados pela rigidez do fio",
      "Se a máquina não estiver parando quando a linha quebra, verifique no painel se a função 'Sensor de Linha' está ativada (ON)"
    ],
    "dicaArtrelados": "Manter os sensores de linha limpos é o segredo para trabalhar com tranquilidade! Você pode deixar a máquina bordando e cuidar de outras tarefas no ateliê com a certeza de que ela vai te avisar se algo acontecer!",
    "voceSabia": "Os primeiros sensores ópticos de linha foram desenvolvidos nos anos 1980 substituindo os antigos 'chicotinhos mecânicos de arame' que desgastavam e desfiavam as linhas de seda durante o atrito!",
    "practicalExercise": "Enquanto a máquina estiver bordando, corte a linha superior com a tesoura a 10 cm acima da agulha: observe quantos segundos e quantos pontinhos a sua máquina leva para frear e apitar!",
    "quickSummary": "Sensores optoeletrônicos que monitoram o fluxo da linha e param a máquina instantaneamente em caso de quebra.",
    "relatedTerms": [
      "Quebra de Linha & Desfiamento",
      "Mecânica da Máquina",
      "Painel de Controle Touchscreen",
      "Comandos de Máquina & Funções de Controle"
    ],
    "tags": [
      "j-048",
      "sensor de linha",
      "jumper",
      "optoacoplador",
      "quebra de linha",
      "mecanica",
      "eletronica cnc",
      "artrelados"
    ],
    "bibliographicReferences": [
      "OPTICAL THREAD BREAKAGE DETECTION & EMBROIDERY SENSOR ELECTRONICS. Munich, 2023.",
      "THE INDUSTRIAL TEXTILE AUTOMATION & OPTOELECTRONICS HANDBOOK. Tokyo, 2022.",
      "ARTRELADOS. O Olho Eletrônico da Máquina: Como Funcionam os Sensores de Linha e Como Eliminar Falsos Alarmes. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-049-jog-agulha-bordados-manuais-computadorizados",
    "code": "J-049",
    "term": "Deslocamento Manual de Agulha na Máquina",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Comandos de Máquina",
    "grammarClass": "Substantivo masculino / Função de ajuste micrométrico manual.",
    "origin": "Do inglês needle jog mode (movimentação manual de ajuste passo a passo da agulha). Painéis de controle de máquinas CNC.",
    "summary": "Botões direcionais no painel da máquina que movem o bastidor milímetro a milímetro para posicionar a agulha no local exato do início do bordado.",
    "definition": "O Modo Jog de Agulha, Deslocamento Manual de Eixos e Alinhamento Micrométrico de Coordenadas (Needle Jog Mode, Manual Coordinate Stepping & Point-of-Origin Alignment Protocol) é a função de controle manual presente nos painéis digitais e botões físicos das máquinas de bordar. Permite ao operador movimentar o bastidor nos eixos X e Y em micropassos ajustáveis (de 0,1 mm, 1 mm ou 10 mm por clique) para alinhar a ponta da agulha exatamente sobre uma marcação de giz no tecido, sobre uma costura de referência ou sobre o ponto de retomada após uma interrupção.",
    "technicalDetails": "Parâmetros e controles do modo Jog de Agulha:\n• Modos de Resolução de Passo (Jog Step Size): 1) Micropasso Fino (0,1 mm por toque), 2) Passo Padrão (1,0 mm), 3) Deslocamento Contínuo Rápido (ao segurar a tecla direcional pressionada);\n• Teclas de Controle: Setas direcionais (Cima, Baixo, Esquerda, Direita) ou botões na tela touchscreen;\n• Função de Zeramento de Origem (Set Origin / Point Zero): Gravação da coordenada atual como o centro ou o canto inicial (Start Point) da matriz;\n• Rotação em Jog: Ajuste angular manual da matriz em passos de 1°, 5° ou 90° para alinhar com listras ou estampas do tecido;\n• Função Trace / Moldura Virtual: Deslocamento em Jog ao redor de todo o perímetro externo da matriz para checar se o bordado cabe dentro do bastidor sem bater na borda.",
    "howItWorks": [
      "1. A bordadeira prende uma toalha de banho no bastidor e faz um pontinho com caneta fantasminha no local onde quer que fique o monograma.",
      "2. Encaixa o bastidor na máquina de bordar.",
      "3. No painel de controle, ela aperta os botões direcionais do modo 'Jog' (setinhas para a esquerda e para baixo).",
      "4. O pantógrafo se move suavemente até que a ponta da agulha fique exatamente em cima do pontinho marcado com a caneta.",
      "5. Ela aperta o botão 'Travar Ponto de Origem / Set 0,0'.",
      "6. Em seguida, aperta a função 'Trace' para a máquina passear em volta e confirmar que o monograma não vai bater no aro do bastidor.",
      "7. Ela aperta o Start com 100% de segurança de que o bordado vai sair reto e no local perfeito!"
    ],
    "beginnerExplanation": "O 'Jog' são aquelas setinhas no painel da máquina que você usa para movimentar o bastidor para a frente, para trás e para os lados, como se fosse o controle de um videogame! Você usa essas setinhas para 'mirar' a ponta da agulha bem em cima da marquinha que você fez no tecido antes de começar a bordar! É o jeito mais fácil e seguro do mundo para ter certeza de que o bordado vai ficar retinho e centralizado!",
    "applications": [
      "Centralização exata de bordados sobre marcações de giz, caneta solúvel ou laser",
      "Alinhamento milimétrico de matrizes com listras, xadrez ou barras de toalhas",
      "Recolocação da agulha no ponto exato da quebra de linha após reparos",
      "Conferência de limites da matriz (Trace) para evitar colisão do bastidor com o calcador"
    ],
    "commonErrors": [
      "Mover o bastidor em velocidade rápida de jog sem olhar para a agulha, podendo bater o bastidor no cabeçote da máquina",
      "Esquecer de travar o 'Ponto de Origem' após mover a matriz com o jog",
      "Usar o jog com a agulha abaixada dentro do tecido (rasga o tecido e entorta a barra da agulha)"
    ],
    "troubleshootingTips": [
      "Certifique-se SEMPRE de que a agulha esteja no ponto mais alto (Ponto Morto Superior) antes de usar as setas de Jog",
      "Utilize o micropasso de 0,1 mm para fazer o ajuste fino de encaixes e emendas difíceis",
      "Aperte SEMPRE a tecla 'Trace / Checagem de Moldura' após posicionar com o Jog para garantir que o bastidor tenha folga total",
      "Se sua máquina possuir Mira Laser (Pointer LED), use o Jog para colocar o pontinho vermelho de luz exatamente na marcação do tecido"
    ],
    "dicaArtrelados": "O modo Jog é o melhor amigo da bordadeira para nunca mais errar o alinhamento de uma peça! Use e abuse da função Trace antes de todo bordado: 5 segundos de checagem evitam bastidores quebrados e peças estragadas!",
    "voceSabia": "O termo 'Jog' vem dos primórdios do comando numérico computadorizado (CNC) na década de 1950 no MIT (Massachusetts Institute of Technology), onde botões manuais de 'jogging' permitiam dar pequenos empurrõezinhos nos motores elétricos!",
    "practicalExercise": "Coloque um tecido com uma marquinha de caneta no bastidor: use as setinhas de Jog do painel da sua máquina para levar a agulha bem em cima do ponto e faça o teste do Trace ao redor da área!",
    "quickSummary": "Movimentação manual do bastidor através de setas no painel para alinhar a agulha no local exato do início do bordado.",
    "relatedTerms": [
      "Painel de Controle Touchscreen",
      "Comandos de Máquina & Funções de Controle",
      "Laser de Posicionamento & LED Pointer",
      "Bastidores de Bordado & Tipos"
    ],
    "tags": [
      "j-049",
      "jog de agulha",
      "posicionamento manual",
      "trace",
      "painel touch",
      "ajuste micrometrico",
      "origem",
      "artrelados"
    ],
    "bibliographicReferences": [
      "CNC JOG CONTROL & MANUAL AXIS POSITIONING IN TEXTILE MACHINERY. Tokyo, 2023.",
      "THE EMBROIDERY MACHINE OPERATOR CONSOLE MANUAL. Munich, 2022.",
      "ARTRELADOS. Posicionamento Perfeito: Como Usar o Modo Jog e a Moldura de Checagem para Bordar sem Erros. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-050-jogo-de-cama-casal-queen-king-emenda-matrizes",
    "code": "J-050",
    "term": "Emenda de Matrizes para Jogos de Cama",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês Queen/King size bedding & split multi-hooping (emenda de grandes formatos em bastidores múltiplos). Enxovais de alto luxo.",
    "summary": "Como dividir, alinhar e emendar bordados monumentais de 1,5 a 2 metros de largura em lençóis de casal Queen e King usando marcações de cruzamento.",
    "definition": "O Bordado Técnico em Jogos de Cama de Casal Queen e King Size com Emenda de Múltiplos Bastidores (Giant Multi-Hoop Bedding Linens, Split-File Alignment & Continuous Border Stitching Protocol) é o método avançado de digitalização e operação no qual uma barra ou guirlanda ornamental monumental (que varia de 1,40 m a 2,60 m de largura na vira do lençol) é fatiada digitalmente no software em 4, 6 ou 8 seções conectáveis (Split Files). A bordadeira utiliza cruzes de alinhamento bordadas (Registration Marks), réguas milimétricas e bastidores de encaixe contínuo (Endless Hoops / Magnetic Hoops) para costurar cada parte perfeitamente encaixada na anterior, criando a ilusão visual de um bordado contínuo e sem nenhuma emenda aparente.",
    "technicalDetails": "Diretrizes e parâmetros para emendas em jogos de cama gigantes:\n• Dimensões de Viras de Lençol: Casal Padrão (2,20 m), Queen Size (2,40 m a 2,50 m), King Size (2,70 m a 2,90 m);\n• Fatiamento de Matriz no Software: Divisão por linhas de junção naturais (galhos, folhas ou nós de ponto cheio) com sobreposição de segurança (Overlap) de 1,5 mm a 2 mm;\n• Pontos de Registro (Registration Crosses): Duas cruzes de ponto de corrida simples bordadas no final da seção A que servem de mira exata para o início da seção B;\n• Estabilização: Entretela Rasgável Macia de Algodão (50g) contínua em toda a vira do lençol;\n• Alinhamento do Tecido: Uso de fita métrica de alfaiate e marcação a giz ou caneta fantasminha a cada 20 cm ao longo da barra.",
    "howItWorks": [
      "1. Uma noiva encomenda um jogo de cama King Size em percal 400 fios com um arabesco clássico monumental de 2,40 metros de comprimento na vira do lençol.",
      "2. Como o maior bastidor da máquina tem 30x20 cm, a bordadeira divide a matriz no software Wilcom/Pe-Design em 8 blocos perfeitamente sincronizados com cruzes de mira.",
      "3. Ela marca uma linha reta de giz com régua longa por toda a extensão do lençol.",
      "4. Enquadra a Parte 1 e a máquina borda os arabescos e as duas cruzinhas de mira no final.",
      "5. Solta o bastidor, desliza o lençol para a esquerda e enquadra a Parte 2.",
      "6. Com o modo Jog e a mira laser, ela posiciona a agulha exatamente no centro da cruzinha de registro bordada na Parte 1.",
      "7. Borda a Parte 2... e repete o processo até a Parte 8. Ao final, a vira do lençol tem um bordado monumental de 2,4 metros contínuo, perfeito e sem nenhuma emenda visível!"
    ],
    "beginnerExplanation": "Quando uma cliente quer um bordado gigante que atravessa o lençol de casal inteiro de uma ponta até a outra, nenhuma máquina comum tem um bastidor de 2 metros de largura! O segredo dos mestres do bordado é dividir o desenho no computador em pedacinhos de 20 ou 30 centímetros. A máquina borda o primeiro pedaço e faz duas 'cruzinhas mágicas' no final. Depois, você muda o tecido de lugar no bastidor, coloca a agulha bem em cima da cruzinha e borda o próximo pedaço! O desenho se conecta perfeitamente e ninguém consegue ver onde foi feita a emenda!",
    "applications": [
      "Barras e viras de lençóis de casal Queen Size, King Size e Super King",
      "Caminhos de mesa e toalhas de banquete de 3 metros de comprimento contínuas",
      "Cortinas de salão e barrados de colchas matelassadas monumentais",
      "Véus de noiva e mantos de cauda longa com arabescos ininterruptos"
    ],
    "commonErrors": [
      "Tentar emendar o lençol 'no olho' sem programar cruzes de registro no software (o desenho fica torto e descentralizado)",
      "Não alinhar o lençol em uma linha reta de giz, fazendo o bordado subir ou descer ao longo dos 2 metros",
      "Puxar o tecido de forma desigual entre um bastidor e outro, gerando repuxos e vãos visíveis na junção"
    ],
    "troubleshootingTips": [
      "Trace SEMPRE uma linha guia contínua de giz ou caneta fantasminha com régua longa por toda a vira do lençol antes de começar",
      "Programe cruzes de registro (cruzes de ponto de corrida simples) na matriz: elas são a sua referência milimétrica infalível",
      "Utilize Bastidores Magnéticos ou Bastidores de Repetição Contínua (Endless Hoops) para agilizar as trocas de posição do tecido",
      "Corte as cruzinhas de registro de linha com uma tesoura fina assim que a emenda for confirmada e finalizada"
    ],
    "dicaArtrelados": "Dominar a emenda de matrizes em jogos de cama gigantes coloca o seu ateliê em um patamar de elite! Pouquíssimas bordadeiras dominam essa técnica, o que permite cobrar valores premium por enxovais de noiva de alto luxo!",
    "voceSabia": "Em 1953, para a coroação da Rainha Elizabeth II na Abadia de Westminster, o vestido real de veludo de seda foi bordado com flores e folhas do Império Britânico usando a técnica manual de emenda contínua ao longo de 6 meses de trabalho ininterrupto!",
    "practicalExercise": "Pegue uma toalha ou faixa de tecido: crie no software uma matriz de 10 cm com cruzes de alinhamento: borde a Parte 1, mude o bastidor, alinhe na cruz e borde a Parte 2: comprove a perfeição do encaixe contínuo!",
    "quickSummary": "Técnica avançada de divisão digital e cruzes de alinhamento para bordar barras gigantescas contínuas em lençóis Queen e King.",
    "relatedTerms": [
      "Jogo de Cama, Lençóis de Percal & Bordados de Alto Padrão",
      "Multi-Hooping & Emendas de Matrizes",
      "Laser de Posicionamento & LED Pointer",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-050",
      "jogo de cama king",
      "queen size",
      "emenda de matrizes",
      "multi-hooping",
      "lençol de casal",
      "enxoval de luxo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MULTI-HOOPING SPLIT DIGITIZING & CONTINUOUS BORDER TECHNIQUES. London, 2023.",
      "THE LUXURY BEDDING & MASTER LINEN EMBROIDERY HANDBOOK. Milan, 2022.",
      "ARTRELADOS. Enxovais Monumentais: O Segredo das Emendas Invisíveis em Lençóis Queen e King Size. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-051-jeans-black-denim-fios-escuros-solidez",
    "code": "J-051",
    "term": "Bordado em Jeans Escuro e Black Denim",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês black sulfur denim (denim preto tingido com corantes de enxofre). Moda urbana e alfaiataria jeans dark.",
    "summary": "Como bordar jeans preto (black denim) evitando que o corante escuro manche as linhas claras e garantindo alto contraste e solidez de cor.",
    "definition": "O Bordado Técnico em Black Denim, Jeans Preto Profundo e Controle de Migração de Corantes de Enxofre (Black Sulfur Denim Embroidery, Dye Bleed Prevention & Colorfastness Protocol) é a metodologia para personalização de roupas e acessórios feitos em tecido jeans preto. O jeans preto utiliza corantes sulfurosos e de tingimento reativo que soltam pigmentos escuros sob atrito e calor (efeito 'Crocking'); quando bordado com linhas brancas ou claras, o corante do jeans pode migrar para a linha durante o bordado ou nas primeiras lavagens, manchando o desenho. O protocolo exige linhas 100% poliéster trilobal de alta solidez, agulhas afiadas que não soltem pó do tecido e entretelas escuras (pretas) para não contrastar no avesso.",
    "technicalDetails": "Diretrizes e normas de solidez para Black Denim:\n• Linhas Homologadas: Fios 100% Poliéster Trilobal com tratamento Bleach-Resistant (Resistente a alvejantes e tingimentos) e certificação Oeko-Tex Standard 100;\n• Estabilizador Obrigatório: Entretela Rasgável ou de Recorte PRETA (Black Backing 60g) para que nenhum fiapo branco apareça pelo lado direito ou no avesso;\n• Agulha: Schmetz Jeans 80/12 ou 90/14 com haste reforçada;\n• Prevenção de Migração (Colorfast Seal): Aplicação de película termocolante impermeável no avesso ou lavagem prévia da peça com vinagre branco/sal para fixar os corantes sulfurosos;\n• Contraste Cromático: Uso de linhas de cores saturadas (dourado, vermelho rubi, prata, branco puro e neon).",
    "howItWorks": [
      "1. Uma grife de moda masculina encomenda 40 jaquetas jeans preto fosco para bordar um logotipo geométrico branco e prata nas costas.",
      "2. A bordadeira sabe que o jeans preto pode soltar pó e manchar a linha branca se a agulha esquentar ou se usar fios de viscose.",
      "3. Ela escolhe linhas 100% poliéster de altíssima qualidade e entretela de recorte preta para o avesso.",
      "4. Instala uma agulha nova Schmetz Jeans 80/12.",
      "5. No software, programa o logotipo com compensação de repuxo adequada para o peso do jeans.",
      "6. A máquina borda o logotipo branco sobre o fundo negro profundo.",
      "7. O resultado é um contraste visual espetacular: o branco e a prata brilham com pureza total, sem nenhum borrão ou mancha escura!"
    ],
    "beginnerExplanation": "O jeans preto é lindo e super estiloso, mas ele tem uma pegadinha: o corante preto dele adora soltar tinta e sujar as linhas claras! Se você usar linha baratinha ou linha de viscose para bordar um nome branco no jeans preto, o nome pode ficar todo acinzentado e manchado na primeira lavagem! O segredo é simples: use SEMPRE linhas de poliéster de primeira linha (que não pegam mancha de nada), use entretela preta por baixo para não ficar aparecendo papel branco no avesso e use agulha novinha para jeans!",
    "applications": [
      "Jaquetas, calças e coletes jeans preto fosco e resinado para moda urbana",
      "Bonés e bolsas em black denim com monogramas metálicos dourados e prateados",
      "Uniformes executivos e aventais de barbearias/bistrôs modernos em jeans preto",
      "Patches e emblemas de bandas de rock e motoclubes sobre sarja preta"
    ],
    "commonErrors": [
      "Usar entretela branca em jeans preto (fiapos brancos ficam aparecendo nos furos dos pontos na frente da peça)",
      "Usar linhas de viscose/rayon de baixa qualidade que absorvem o corante preto do jeans na lavagem",
      "Usar agulhas cegas que esfarelam as fibras do jeans preto, gerando uma poeira escura sobre o bordado"
    ],
    "troubleshootingTips": [
      "Use SEMPRE Entretela PRETA no avesso de peças de jeans preto: assim os furos da agulha ficam totalmente camuflados",
      "Utilize Linha 100% Poliéster Trilobal: o poliéster é imune a manchas de outros tecidos e resiste até ao cloro e água sanitária",
      "Troque a agulha por uma Schmetz Jeans 80/12 nova para fazer perfurações limpas sem soltar fiapos",
      "Passe uma fita adesiva macia (ou rolinho tira-pelos) sobre o bordado ao terminar para retirar qualquer microfiapo solto"
    ],
    "dicaArtrelados": "O contraste de bordados brancos, dourados ou prateados sobre jeans preto é um dos efeitos visuais mais sofisticados e modernos do vestuário! Use entretela preta e surpreenda seus clientes com o acabamento!",
    "voceSabia": "O tingimento do 'Black Denim' foi criado nos anos 1970 usando corantes de sulfeto preto; ao contrário do jeans azul índigo tradicional que desbota rápido, o jeans preto de alta qualidade recebe banhos químicos especiais para manter a cor escura intensa por anos!",
    "practicalExercise": "Pegue um pedaço de jeans preto: borde uma letra com linha branca usando entretela preta e outra usando entretela branca: veja como a entretela preta deixa a peça infinitamente mais limpa e profissional!",
    "quickSummary": "Uso de entretela preta, linhas de poliéster resistentes e agulhas novas para bordar jeans preto sem manchar as cores claras.",
    "relatedTerms": [
      "Jeans, Denim Pesado",
      "Linha de Poliéster",
      "Entretela de Recorte / Cut-Away",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-051",
      "black denim",
      "jeans preto",
      "entretela preta",
      "poliester",
      "contraste",
      "moda masculina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BLACK DENIM DYE FASTNESS & CONTRAST EMBROIDERY STANDARDS. Milan, 2023.",
      "THE MODERN STREETWEAR & DARK FABRIC EMBROIDERY MANUAL. London, 2022.",
      "ARTRELADOS. Contraste Supremo: O Guia Definitivo para Bordar em Black Denim e Jeans Preto com Linhas Claras. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-052-janome-mb4-mb7-maquinas-compactas-multinagulha",
    "code": "J-052",
    "term": "Janome Séries MB Compactas",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Mecânica da Máquina",
    "grammarClass": "Substantivo feminino / Linha de máquinas semi-industriais de 4 e 7 agulhas.",
    "origin": "Desenvolvidas pela Janome Sewing Machine Co. (Japão) para atender ateliês compactos e pequenas confecções.",
    "summary": "Como operar, regular e extrair o máximo rendimento das máquinas compactas multinagulhas Janome MB-4 e MB-7 com braço tubular livre.",
    "definition": "A Plataforma de Máquinas Multinagulhas Compactas Janome MB-4 (4 agulhas) e MB-7 (7 agulhas) (Janome Multi-Needle Semi-Industrial Series & Remote Control Screen RCS Architecture) é a categoria de máquinas de bordar compactas projetadas com arquitetura híbrida: unem a precisão e a facilidade operacional das máquinas domésticas com a produtividade, a velocidade (até 800 PPM) e a liberdade do braço tubular livre das máquinas industriais. Equipadas com sistema de troca automática de agulhas e cores, suporte para bastidores de boné e painel independente destacável (RCS - Remote Computer Screen), são amplamente utilizadas por ateliês de personalização rápida em shoppings, feiras e pequenas empresas.",
    "technicalDetails": "Especificações e recursos técnicos da linha Janome MB:\n• Configuração de Agulhas: Sistema de 4 agulhas (MB-4 / MB-4S) ou 7 agulhas (MB-7) com sistema de agulha industrial DBxK5 ou doméstico 130/705H;\n• Velocidade Máxima de Operação: 800 PPM em peças planas e 600 PPM em bonés;\n• Sistema de Bobina: Bobina industrial de grande capacidade (Jumbo Bobbin M-Size - 1,4x mais linha que a bobina comum);\n• Painel de Controle: Sub-painel integrado na máquina + tela touch colorida destacável RCS com porta USB para pen-drive;\n• Bastidores Compatíveis: M1 (240x200 mm), M2 (126x110 mm), M3 (50x50 mm), Bastidor de Boné Snap-Hoop e bastidores de meia/manga.",
    "howItWorks": [
      "1. A dona de um ateliê de presentes personalizados recebe pedidos de 20 toalhas, 10 camisetas e 5 bonés para entrega no mesmo dia.",
      "2. Em uma máquina de 1 agulha, ela teria que parar e trocar a linha à mão 50 vezes.",
      "3. Na sua Janome MB-7, ela passa as 7 cores principais de linha nos tubos superiores de uma vez só.",
      "4. Encaixa a camiseta diretamente no braço livre tubular, sem risco de costurar as costas da blusa.",
      "5. Seleciona a matriz de 5 cores: a máquina borda a cor 1, corta a linha, troca para a agulha 2 sozinha, borda a cor 2... e finaliza tudo automaticamente sem precisar de ajuda humana!",
      "6. A velocidade e a autonomia aumentam em mais de 300%.",
      "7. Ela entrega todas as encomendas no prazo e com lucro multiplicado!"
    ],
    "beginnerExplanation": "As máquinas Janome MB-4 e MB-7 são o sonho de qualquer ateliê que quer crescer! Em vez de ter apenas 1 agulha (onde você tem que ficar trocando a cor da linha toda hora na mão), essas máquinas têm 4 ou 7 agulhas montadas ao mesmo tempo! Você coloca as linhas coloridas e a máquina troca de agulha e de cor totalmente sozinha! Além disso, ela tem um 'braço tubular' estreito que permite vestir camisetas, mangas e bonés com a maior facilidade do mundo!",
    "applications": [
      "Produção rápida de uniformes, camisetas e polos no braço tubular livre",
      "Bordados em bonés estruturados e viseiras com dispositivo rotativo",
      "Personalização contínua de toalhas e brindes corporativos multicoloridos",
      "Atendimento em quiosques de shopping e feiras de eventos com alta produtividade"
    ],
    "commonErrors": [
      "Usar agulhas domésticas comuns quando o modelo exige o sistema de haste industrial DBxK5",
      "Não regular a tensão individual dos 7 botões tensores superiores de cada agulha",
      "Esquecer de passar a linha pelo tensor secundário do cabeçote"
    ],
    "troubleshootingTips": [
      "Faça o teste de tensão de bobina (teste da letra I ou coluna de ponto cheio) em cada uma das 7 agulhas individualmente",
      "Aproveite a bobina grande M-Size: ela cabe muito mais linha e permite bordar dezenas de peças sem parar para rebobinar",
      "Utilize o braço tubular livre para vestir calças, mangas de camisa e bolsas sem precisar descosturar a peça",
      "Limpe a área da lançadeira rotativa e lubrifique a pista da lançadeira com 1 microgota de óleo a cada 8 horas de bordado contínuo"
    ],
    "dicaArtrelados": "A transição de uma máquina de 1 agulha para uma Janome multinagulha MB é o grande salto profissional de um ateliê! Sua capacidade produtiva triplica e você passa a atender clientes corporativos com facilidade!",
    "voceSabia": "A Janome MB-4 foi lançada no Japão em 2007 e entrou para a história como a primeira máquina semi-industrial de 4 agulhas com braço livre compacta do mundo a trazer um painel touch com tela LCD colorida destacável!",
    "practicalExercise": "Se tiver uma máquina multinagulha, programe uma matriz com 4 trocas de cores: configure a ordem das agulhas no painel e cronometre o tempo recorde que ela leva para terminar sem intervenção manual!",
    "quickSummary": "Linha de máquinas semi-industriais da Janome com 4 ou 7 agulhas, troca automática de cor e braço tubular livre para alta produtividade.",
    "relatedTerms": [
      "Janome Digitizer & Ecossistema de Softwares Janome",
      "Máquinas Multicabeçotes Industriais",
      "Braço Livre / Tubular",
      "Mecânica da Máquina"
    ],
    "tags": [
      "j-052",
      "janome mb4",
      "janome mb7",
      "multinagulha",
      "semi-industrial",
      "braco tubular",
      "producao rapida",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SEMI-INDUSTRIAL MULTI-NEEDLE EMBROIDERY WORKSTATIONS. Tokyo, 2023.",
      "THE COMPACT COMMERCIAL EMBROIDERY PRODUCTION HANDBOOK. Chicago, 2022.",
      "ARTRELADOS. O Salto da Produtividade: Como Dominar as Máquinas Multinagulhas Janome MB-4 e MB-7 no Ateliê. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-053-joint-ponto-cruz-digital-encaixe-pontos-x",
    "code": "J-053",
    "term": "Encaixe de Ponto Cruz Digital",
    "letter": "J",
    "level": "Fundamental 🟢",
    "category": "Programação & Digitalização",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do ponto cruz tradicional manual (técnica milenar de tecidos étamine/aida) adaptado para algoritmos de grid pixelado em matrizes eletrônicas.",
    "summary": "Como programar e bordar matrizes em ponto cruz computadorizado com alinhamento perfeito dos bracinhos em X sem sobreposições tortas.",
    "definition": "O Joint de Ponto Cruz Computadorizado, Alinhamento de Grids e Encaixe Geométrico de Pontos em X (Digital Cross-Stitch Interlocking Grid, Stitch-Joint Alignment & Counted Thread Emulation Protocol) é a técnica de digitalização e costura matricial que recria com fidelidade matemática o clássico ponto cruz artesanal (Counted Cross-Stitch). Cada ponto em forma de 'X' é composto por duas diagonais que compartilham exatamente os mesmos 4 furos nos vértices com os pontos vizinhos (Full Cross Stitch). O algoritmo do software sincroniza a direção das pernas inferiores e superiores de todos os 'X' para garantir reflexo de luz idêntico e textura visual uniforme em toda a peça.",
    "technicalDetails": "Geometria e parâmetros do Ponto Cruz Digital:\n• Contagem de Malha (Grid Count): Configuração do tamanho do ponto no software em contagens padrão: 10 count (2,5 mm por X), 14 count (1,8 mm por X) ou 18 count (1,4 mm por X);\n• Repetição de Pontadas por Braço: Ponto de 2 passagens (Single Pass) para aspecto delicado ou 4 passagens (Double Pass / Heavy Cross) para cobertura volumosa e rústica;\n• Unificação de Direção: Todas as pernas inferiores do X devem seguir no sentido diagonal / (sudoeste-nordeste) e todas as pernas superiores no sentido \\ (noroeste-sudeste);\n• Tecidos Ideais: Tecido Étamine, Talagarça, Linho rústico de trama quadrada, Percal e Sarja com entretela rasgável média;\n• Linha Recomendada: Linha de bordar 40wt tradicional ou linha de algodão fosco (Cotton 30wt/50wt) para efeito 100% artesanal.",
    "howItWorks": [
      "1. A cliente quer um quadro de nascimento para o quarto do bebê no estilo tradicional de ponto cruz com ursinho e letras bordadas, mas precisa da peça pronta no mesmo dia.",
      "2. O digitalizador abre o módulo de Ponto Cruz (Cross Stitch) do Wilcom/Pe-Design.",
      "3. Carrega o gráfico quadriculado: o software converte cada quadradinho de cor em um ponto X de 4 passadas com 1,8 mm de tamanho.",
      "4. Salva a matriz no formato da máquina e coloca tecido de linho com entretela rasgável no bastidor.",
      "5. A máquina de bordar costura centenas de pontinhos em 'X' com precisão milimétrica e velocidade incrível.",
      "6. Em apenas 25 minutos, o quadro completo está pronto.",
      "7. O resultado é idêntico a um trabalho manual que levaria 3 semanas para ser feito à mão!"
    ],
    "beginnerExplanation": "O ponto cruz é aquele bordado clássico e amado de vovó, cheio de 'xizinhos' perfeitos que formam florzinhas, bichinhos e letrinhas fofas! Hoje em dia, os programas de computador conseguem transformar esses desenhos quadriculados em matrizes para a máquina de bordar! A máquina costura cada xizinho com precisão matemática em segundos: todos os bracinhos do X ficam iguaizinhos e virados para o mesmo lado, parecendo que foram feitos à mão com o maior carinho do mundo!",
    "applications": [
      "Quadros de nascimento, porta-maternidade e árvores genealógicas em ponto cruz",
      "Barrados de panos de prato, toalhas de lavabo e caminhos de mesa estilo vintage",
      "Almofadas rústicas, sousplats e enfeites natalinos com estética folk e campestre",
      "Marcadores de página, capas de bíblia e lembrancinhas afetivas de batizado"
    ],
    "commonErrors": [
      "Configurar o tamanho do X muito pequeno (menos de 1,2 mm), fazendo a linha empelotar e furar o tecido",
      "Usar tecidos que esticam muito sem entretela firme (os xizinhos perdem a forma quadrada e ficam tortos)",
      "Programar direções de X invertidas no mesmo desenho, gerando reflexos manchados na luz"
    ],
    "troubleshootingTips": [
      "Utilize SEMPRE o tamanho de 14 count (cerca de 1,8 mm por X) para obter o equilíbrio ideal entre nitidez e beleza visual",
      "Experimente bordar ponto cruz digital com Linhas de Algodão Fosco: o acabamento fica 100% idêntico ao bordado manual clássico",
      "Use entretela rasgável firme de algodão: o tecido precisa ficar plano para que os 4 cantos de cada X se encaixem perfeitamente",
      "No software, ative a opção 'Double Cross (Cruz Dupla)' se quiser que os pontos fiquem bem gordinhos e salientes"
    ],
    "dicaArtrelados": "O ponto cruz computadorizado une a nostalgia do artesanato tradicional com a velocidade da máquina moderna! É perfeito para criar peças com valor sentimental e alta lucratividade!",
    "voceSabia": "O ponto cruz é considerado uma das técnicas de bordado mais antigas da humanidade: fragmentos de linho com pontos em X datados de 500 a.C. foram encontrados em escavações arqueológicas no Egito Antigo e na Grécia!",
    "practicalExercise": "Abra o módulo de ponto cruz do seu software: desenhe uma florzinha simples de 10x10 quadradinhos e borde em um retalho de tecido com linha vermelha: veja a perfeição dos cruzamentos de pontos!",
    "quickSummary": "Digitalização e execução precisa de matrizes em formato de ponto cruz com grade matemática e estética artesanal clássica.",
    "relatedTerms": [
      "Ponto de Cruz Computadorizado",
      "Vetorização Manual & Punching",
      "Softwares & Formatos",
      "Linha de Algodão / Fio Fosco"
    ],
    "tags": [
      "j-053",
      "ponto cruz digital",
      "cross stitch",
      "grade em x",
      "etamine",
      "vintage",
      "artesanato afetivo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "COUNTED CROSS-STITCH ALGORITHMS IN EMBROIDERY CAD SYSTEMS. Zurich, 2023.",
      "THE TRADITIONAL EMBROIDERY EMULATION HANDBOOK. London, 2022.",
      "ARTRELADOS. Ponto Cruz Digital: Como Recriar o Charme do Bordado Manual na Máquina Eletrônica. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-20"
  },
  {
    "id": "j-067-jogo-de-chavetas-e-travamento-do-eixo-principal",
    "code": "J-067",
    "term": "Chavetas do Eixo Principal",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim clavis (chave, elemento mecânico de travamento) e do germânico tramba (barra rígida). Sistema de acoplamento mecânico de torque inventado na Revolução Industrial para fixação de engrenagens de precisão.",
    "summary": "Travas mecânicas de aço e rasgos de precisão no eixo principal que garantem o sincronismo angular da máquina de bordar sem giro em falso.",
    "definition": "O jogo de chavetas e pinos de travamento do eixo principal (Main Shaft Keyways & Locking Pins) é o conjunto de elementos mecânicos usinados em aço temperado que acoplam rigidamente polias sincronizadoras, excêntricos de elevação da barra de agulhas e engrenagens cônicas ao eixo principal da máquina de bordar. O rasgo da chaveta (keyway) e o pino guia impedem qualquer escorregamento angular durante frenagens bruscas a 1.000 RPM, assegurando que o ponto zero mecânico (posição de parada a 100° do ciclo) permaneça inalterado por anos de operação contínua.",
    "technicalDetails": "Chavetas prismáticas padronizadas DIN 6885 com tolerância h6/JS9. Parafusos de travamento tipo Allen sem cabeça com ponta cônica ou plana tratados termicamente.",
    "howItWorks": [
      "1. O servomotor principal gira a polia dentada primária da máquina.",
      "2. A polia transfere o torque para o eixo principal através da chaveta de aço encaixada no rasgo.",
      "3. O eixo principal gira e aciona sincronizadamente os excêntricos das barras de agulha e a correia da lançadeira.",
      "4. Em paradas de emergência ou cortes de linha, a desaceleração instantânea é absorvida pela chaveta sem folga.",
      "5. O ângulo de 100° (agulha fora do tecido e estica-fio no topo) permanece milimetricamente sincronizado.",
      "6. A máquina nunca perde o tempo mecânico entre a descida da agulha e a rotação do gancho da lançadeira."
    ],
    "beginnerExplanation": "É uma pecinha de metal parecida com uma chavinha quadrada que fica encaixada dentro do eixo de ferro da máquina. Ela serve como uma trava de segurança para as rodas e engrenagens nunca escorregarem nem girarem em falso, mantendo a máquina sempre afinadinha no tempo certo.",
    "applications": [
      "Transmissão de torque de alta potência do servomotor para o cabeçote sem perda de passo",
      "Manutenção da posição de parada da agulha no ângulo padrão de 100° do painel",
      "Fixação de polias de correias sincronizadoras do cabeçote e eixo da lançadeira",
      "Substituição de eixos ou engrenagens cônicas em revisões gerais de oficina mecânica"
    ],
    "commonErrors": [
      "❌ Apertar parafusos de fixação fora do rasgo da chaveta, fazendo a polia girar em falso e quebrar agulhas",
      "❌ Utilizar chavetas improvisadas de metal mole (latão comum ou ferro doce), que amassam e criam folga angular",
      "❌ Esquecer de aplicar trava-rosca de média resistência (azul) nos parafusos de retenção durante manutenções"
    ],
    "troubleshootingTips": [
      "Se a máquina apresentar erro de 'Posição Não Encontrada' (Error 100°), verifique se os parafusos da polia do eixo principal não estão frouxos",
      "Durante revisões técnicas anuais, inspecione se não há folga radial ao forçar a polia manualmente com o eixo travado",
      "Nunca bata com martelo de ferro diretamente sobre as chavetas; use sempre punção de bronze ou martelo de borracha"
    ],
    "dicaArtrelados": "O sincronismo mecânico da sua máquina depende de travas perfeitas! Se você escutar um estalo metálico seco na hora que a máquina para de bordar, chame um técnico de confiança para conferir o aperto das chavetas e polias antes de continuar a produção!",
    "voceSabia": "Em máquinas industriais multicabeças de grande porte, um único eixo principal de aço retificado de mais de 5 metros de comprimento atravessa até 20 cabeçotes simultaneamente com desvio de sincronismo angular menor que 0,1 grau.",
    "practicalExercise": "Com a máquina desligada, olhe pelo visor lateral do cabeçote ou volante manual e observe o ponto zero marcado em graus (0° a 360°). Gire o volante suavemente com a mão e sinta como todo o conjunto mecânico se movimenta de forma rígida e sem solavancos graças às chavetas.",
    "quickSummary": "Travas de aço usinadas no eixo principal que garantem sincronismo perfeito das engrenagens sem giro em falso.",
    "relatedTerms": [
      "Encoder Óptico do Eixo Principal",
      "Barra de Agulha",
      "Lançadeira Rotativa",
      "Servomotor de Eixo X e Y",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-067",
      "chaveta",
      "eixo principal",
      "sincronismo",
      "mecanica",
      "engrenagens",
      "torque",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Main Shaft Drive Mechanism and Keyway Alignment Standards. Nagoya, 2023.",
      "BARUDAN. Mechanical Timing and Transmission Assembly Manual. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "j-068-jato-de-ar-seco-e-limpeza-pneumatica-de-sensores-e-facas",
    "code": "J-068",
    "term": "Jato de Ar Seco para Limpeza",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Cuidados e Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim jactare (lançar com força) e do grego pneûma (ar em movimento, sopro). Técnica padrão de manutenção preventiva eletromecânica industrial.",
    "summary": "Uso correto de ar comprimido seco e filtrado para desobstruir fotocélulas, carretilhas e facas sem danificar rolamentos blindados.",
    "definition": "O jato de ar seco e limpeza pneumática é o procedimento de conservação técnica que utiliza ar comprimido isento de umidade e óleo residual (pressão regulada entre 2 e 4 bar) ou spray de ar comprimido com gás seco para expelir pós de entretela, fiapos compactados e resíduos de fios de áreas inacessíveis ao pincel, como os canais ópticos dos sensores de quebra de linha, cavidades do trambulador de corte e a pista interna da lançadeira.",
    "technicalDetails": "Pressão máxima recomendada de 3,5 bar (50 PSI). Filtro coalescente de retenção de umidade com purga automática obrigatório em compressores de pistão do ateliê.",
    "howItWorks": [
      "1. A máquina é desligada da rede elétrica para segurança operacional.",
      "2. Remove-se a chapa de agulha e a caixa de bobina.",
      "3. O bico de ar seco é direcionado de dentro para fora na área das lâminas de corte.",
      "4. Jatos curtos e pulsados de 1 a 2 segundos são aplicados nas fotocélulas e sensores ópticos.",
      "5. A sujeira é expelida para fora da máquina, sem empurrar fiapos para dentro dos eixos dos servomotores.",
      "6. A pista da lançadeira recebe uma gota de óleo novo após a limpeza pneumática.",
      "7. A chapa é reinstalada e o sistema fica 100% desobstruído."
    ],
    "beginnerExplanation": "É o uso de um arzinho comprimido bem limpinho e sequinho para assoprar e tirar aquela poeira de linha escondida dentro dos sensores e das tesouras da máquina onde o pincel não alcança. É importante o ar ser bem seco para não enferrujar nada por dentro!",
    "applications": [
      "Limpeza rápida de fotocélulas e sensores ópticos que acusam falsos alarmes de quebra de linha",
      "Desobstrução do mecanismo de faca móvel travada por excesso de fiapos de entretela resinada",
      "Manutenção de frotas industriais de cabeçotes múltiplos com economia de tempo",
      "Remoção de penugem após produções intensivas de toalhas de veludo e pelúcia"
    ],
    "commonErrors": [
      "❌ Usar compressor de ar de oficina sem filtro secador, borrifando água condensada e óleo sujo nas placas eletrônicas e oxidando a lançadeira",
      "❌ Aplicar pressão excessiva (> 6 bar) muito perto de rolamentos blindados, empurrando fiapos para dentro da graxa interna",
      "❌ Soprar o ar em direção aos circuitos eletrônicos abertos do cabeçote em vez de direcionar para fora"
    ],
    "troubleshootingTips": [
      "Se usar latas de ar comprimido (spray aerossol), nunca vire a lata de cabeça para baixo para não espirrar líquido congelante nas peças",
      "Instale um purgador de água e filtro secador na saída do compressor do seu ateliê",
      "Faça jatos curtos e intermitentes em vez de um sopro contínuo para controlar o direcionamento dos fiapos"
    ],
    "dicaArtrelados": "Para quem tem uma máquina doméstica ou profissional de 1 cabeça, uma lata de ar comprimido seco para eletrônicos comprada em papelaria ou informática é perfeita! Um 'tuff' de ar no sensor óptico e debaixo da faquinha a cada semana mantém sua máquina sem erros misteriosos de quebra de linha!",
    "voceSabia": "Em grandes indústrias têxteis com mais de 50 cabeçotes de bordado, existem redes pneumáticas centralizadas com tubulações de ar comprimido seco de alta pureza conectadas diretamente a pistolas automáticas de limpeza em cada posto de trabalho.",
    "practicalExercise": "Retire a chapa de agulha e a caixa de bobina da sua máquina. Utilize jatos curtos de ar seco na região da faca de corte e veja a quantidade de penugem oculta saindo das canaletas que o pincel não conseguia alcançar.",
    "quickSummary": "Limpeza com jatos de ar comprimido seco e filtrado para retirar poeiras de sensores e do sistema de corte.",
    "relatedTerms": [
      "Higienização e Remoção de Fibras do Conjunto de Corte",
      "Haste do Sensor de Quebra de Linha",
      "Faca Móvel e Fixa de Corte",
      "Cuidados e Manutenção"
    ],
    "tags": [
      "j-068",
      "ar comprimido",
      "ar seco",
      "limpeza pneumatica",
      "sensores",
      "facas",
      "manutencao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Pneumatic Cleaning Protocols and Air Quality Requirements for Embroidery Equipment. Nagoya, 2023.",
      "ISO 8573-1. Compressed Air Quality Standards for Precision Machinery. Genebra, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "j-069-jumper-de-alimentacao-e-selecao-de-tensao-110v-220v",
    "code": "J-069",
    "term": "Seleção de Tensão da Máquina",
    "letter": "J",
    "level": "Iniciante 🟢",
    "category": "Eletrônica da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês jump (pular, ligar dois pontos por ponte condutora) e do latim tensio (diferença de potencial elétrico). Padrão da eletrônica analógica e digital para comutação de circuitos primários.",
    "summary": "Chave seletora ou conector tipo ponte na fonte que ajusta a máquina para funcionar com segurança em redes elétricas de 110V ou 220V.",
    "definition": "O jumper de alimentação e chave de seleção de tensão é o dispositivo comutador presente na fonte de alimentação chaveada (SMPS) ou no transformador de entrada da máquina de bordar. Sua função técnica é reconfigurar os enrolamentos primários ou a ponte retificadora para receber a tensão alternada da rede elétrica local (110V/127V ou 220V/240V), entregando tensões contínuas perfeitamente estabilizadas (como +24V, +36V, +5V e +3,3V) para os servomotores dos eixos X/Y, solenoides de corte e placas controladoras DSP.",
    "technicalDetails": "Fontes modernas possuem sistema de seleção automática 'Full-Range' (90V a 264V AC, 50/60Hz). Máquinas convencionais utilizam jumper de pino duplo ou chave deslizante mecânica com trava de segurança.",
    "howItWorks": [
      "1. A bordadeira confere a voltagem da tomada do novo local de instalação do ateliê.",
      "2. Verifica na etiqueta traseira ou na chave seletora a posição configurada (110V ou 220V).",
      "3. Caso seja necessário comutar, a máquina é totalmente desligada da tomada.",
      "4. A chave mecânica é mudada com o auxílio de uma chave plástica ou o jumper interno é reposicionado.",
      "5. Ao ligar a máquina, a fonte converte a energia para as tensões contínuas ideais sem sobretensão.",
      "6. Os servomotores recebem a potência ideal para bordar em alta velocidade com torque constante."
    ],
    "beginnerExplanation": "É aquela chavinha vermelha ou conectorzinho atrás da máquina que a gente ajusta para 110V ou 220V, dependendo da tomada da sua cidade ou do seu ateliê. Deixar na posição certa evita queimar a máquina ao ligar em 220V ou deixá-la sem força se ligar em 110V.",
    "applications": [
      "Instalação inicial de máquinas novas em diferentes estados e regiões do Brasil",
      "Mudança de endereço ou transporte da máquina para feiras e eventos de bordado",
      "Proteção de fontes de alimentação contra queima por sobretensão de rede elétrica",
      "Garantia de torque estável para motores de passo e servomotores"
    ],
    "commonErrors": [
      "❌ Ligar a máquina configurada em 110V direto em uma tomada de 220V, queimando instantaneamente os fusíveis, varistores e capacitores da fonte",
      "❌ Ligar a máquina configurada em 220V em uma tomada de 110V, fazendo o painel piscar fraco e os motores travarem por falta de voltagem",
      "❌ Mudar a chave seletora com o cabo de energia conectado na tomada"
    ],
    "troubleshootingTips": [
      "Sempre meça a voltagem da tomada com um multímetro ou identificador de tensão antes de ligar a máquina pela primeira vez",
      "Caso a máquina seja bivolt automática (Full-Range), utilize um bom filtro de linha com protetor contra surtos (DPS)",
      "Identifique as tomadas do seu ateliê com etiquetas coloridas adesivas (Ex: Vermelho para 220V e Azul para 110V)"
    ],
    "dicaArtrelados": "Vai levar sua máquina para bordar ao vivo em um bazar, feira ou evento? Antes de colocar o plugue na tomada, pergunte e confirme com a organização se a tomada é 110V ou 220V! Essa conferência de 5 segundos salva a vida da sua máquina!",
    "voceSabia": "No Brasil, a tensão da rede elétrica varia conforme a cidade e o estado: enquanto cidades como São Paulo e Curitiba usam predominantemente 110V/127V, cidades como Brasília e Florianópolis usam 220V nativo.",
    "practicalExercise": "Localize na parte traseira da sua máquina de bordar a placa metálica de especificações elétricas. Identifique se ela possui chave seletora manual (110/220V) ou se é bivolt automática de fábrica (100-240V).",
    "quickSummary": "Chave seletora que adapta a máquina de bordar com segurança para funcionar em tomadas de 110V ou 220V.",
    "relatedTerms": [
      "Hardware de Controle DSP e Placa-Mãe",
      "Isolação e Blindagem Eletrostática",
      "Servomotor de Eixo X e Y",
      "Eletrônica da Máquina"
    ],
    "tags": [
      "j-069",
      "jumper",
      "voltagem",
      "110v",
      "220v",
      "fonte de alimentacao",
      "seguranca eletrica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER INDUSTRIES. Electrical Supply and Voltage Switching Operations Guide. Nagoya, 2022.",
      "JANOME. Power Supply Unit Specifications and Safety Standards. Tóquio, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "j-070-juncao-perpendicular-de-colunas-satin-com-corte-em-meia-esquadria",
    "code": "J-070",
    "term": "Junção em Meia-Esquadria de Ponto Cheio",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim junctio (ligação de partes) e do francês onglet / miter (corte angular a 45 graus de molduras de marcenaria clássica aplicado à geometria vetorial de bordado).",
    "summary": "Estratégia de digitalização que divide cantos de molduras e letras em ângulo de 45° para evitar acúmulo de furos e criar cantos retos perfeitos.",
    "definition": "A junção perpendicular de colunas satin com corte em meia-esquadria (Mitered Corner Satin Joint) é a técnica avançada de programação em software de matrizes aplicada no encontro de 90° entre duas barras em ponto cheio (como em molduras retangulares, brasões e letras em bloco tipo 'E', 'F', 'H', 'L' e 'T'). Em vez de sobrepor uma coluna sobre a outra ou girar os pontos em leque fechado (que causaria dezenas de perfurações de agulha no mesmo ponto central, perfurando e rasgando o tecido), o software traça uma linha diagonal perfeita de 45°, distribuindo as penetrações da agulha de maneira escalonada e elegante.",
    "technicalDetails": "Ângulo de corte bissetriz exato de 45° em quinas de 90°. Densidade ajustada para 0,40 mm com compensação de sobreposição escalonada de 0,4 mm a 0,6 mm na linha de meia-esquadria.",
    "howItWorks": [
      "1. O programador cria uma moldura retangular com colunas em ponto cheio.",
      "2. Ao chegar nos quatro cantos, ativa a propriedade de canto em 'Meia-Esquadria' (Mitered Corner).",
      "3. O software divide a quina na linha diagonal de 45 graus.",
      "4. A coluna vertical borda até a linha divisória com pontos em comprimentos decrescentes.",
      "5. A coluna horizontal inicia exatamente na mesma linha diagonal, entrelaçando as laçadas.",
      "6. A quina do bordado fica perfeitamente esquadrada e nítida, com relevo uniforme e sem furos no tecido."
    ],
    "beginnerExplanation": "É o jeito certo de fazer cantinhos retos e molduras no programa de computador, igualzinho a moldura de quadro de madeira cortada a 45 graus na quina. Isso faz o cantinho ficar retinho, lindo e evita que a agulha fure o mesmo lugar várias vezes e rasgue a camiseta.",
    "applications": [
      "Molduras retangulares e quadradas de monogramas de toalhas e enxovais de luxo",
      "Letras em formato bloco reto com cantos vivos perfeitos (letras L, T, H, E, F)",
      "Brasões corporativos e faixas geométricas com bordas limpas",
      "Eliminação de furos e rasgos no tecido provocados por acúmulo de agulhadas nas quinas"
    ],
    "commonErrors": [
      "❌ Fazer uma coluna reta inteira passar por cima da outra sem corte, criando uma quina grossa, dura e volumosa que entorta a agulha",
      "❌ Usar curva em leque forçado em cantos vivos de 90°, concentrando 30 agulhadas no mesmo milímetro central",
      "❌ Não aplicar underlay diagonal na linha de junção, permitindo que a meia-esquadria se abra após as primeiras lavagens"
    ],
    "troubleshootingTips": [
      "Ative a opção automática de cantos inteligentes (Smart Corners / Mitered) no seu software de bordado favorito",
      "Em colunas muito largas (> 7 mm), aplique pontos fracionados ou meia-esquadria com leve sobreposição escalonada",
      "Sempre programe a costura de base (underlay) passando por baixo da quina para ancorar as fibras antes do acabamento"
    ],
    "dicaArtrelados": "Olhe para uma moldura de quadro na sua parede: a madeira é cortada a 45 graus nos cantos para ficar linda! No bordado computadorizado é igualzinho: usando a meia-esquadria nos cantos de molduras e letras retas, seu bordado ganha acabamento de alta alfaiataria!",
    "voceSabia": "Antes da introdução das ferramentas de cantos inteligentes nos softwares nos anos 1990, os programadores tinham que desenhar manualmente cada ponto individual da linha diagonal de 45° calculando a compensação de repuxo ponto por ponto.",
    "practicalExercise": "Digitalize no seu software um quadrado de 6x6 cm com contorno em ponto cheio de 4 mm de largura. Teste fazer uma versão com cantos sobrepostos comuns e outra com cantos em meia-esquadria. Compare no simulador 3D a diferença no visual da quina.",
    "quickSummary": "Corte diagonal de 45° nos cantos de molduras e letras que garante quinas nítidas e sem furos no tecido.",
    "relatedTerms": [
      "Ponto Cheio (Satin Stitch)",
      "Compensação de Repuxo",
      "Ângulo de Ponto (Stitch Angle)",
      "Underlay (Costura de Base)",
      "Programação de Bordado"
    ],
    "tags": [
      "j-070",
      "meia-esquadria",
      "juncao de colunas",
      "mitered corner",
      "cantos retos",
      "molduras",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. Corner Stitching Methods and Smart Mitered Joints Manual. Sydney, 2023.",
      "PULSE MICROSYSTEMS. Geometric Corner Digitizing Techniques Guide. Toronto, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "j-071-jogo-axial-e-folga-longitudinal-da-lançadeira-rotativa",
    "code": "J-071",
    "term": "Folga Axial da Lançadeira Rotativa",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Mecânica da Máquina e Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim axis (eixo central, rotação) e longitudo (comprimento, direção ao longo do eixo). Parâmetro mecânico de tolerância geométrica em engenharias de precisão.",
    "summary": "Folga milimétrica de vai-e-vem no eixo da lançadeira que, se excessiva, faz a ponta do gancho perder a laçada ou bater na agulha.",
    "definition": "O jogo axial e folga longitudinal da lançadeira rotativa (Rotary Hook End-Play) é a microfolga de deslocamento linear permitida ao longo do eixo horizontal ou vertical que sustenta e faz girar a lançadeira de bordado. A tolerância dimensional rigorosa dessa folga deve ser mantida entre 0,02 mm e 0,05 mm. Caso o anel de encosto (thrust collar) ou os mancais de bronze se desgastem, a lançadeira ganha movimentação axial livre, fazendo com que a ponta do gancho se afaste da cava da agulha (gerando falhas de ponto) ou se aproxime demais até colidir violentamente com a agulha, quebrando-a.",
    "technicalDetails": "Medição por relógio comparador com base magnética centesimal (resolução 0,01 mm). Ajuste por calços de precisão (shims) de aço mola ou aperto do anel posicionador com parafuso de trava dupla.",
    "howItWorks": [
      "1. A máquina gira o eixo inferior que transmite rotação à lançadeira.",
      "2. Quando a agulha desce, o gancho da lançadeira deve passar a exatamente 0,05 mm a 0,10 mm da cava da agulha.",
      "3. Se o jogo axial estiver correto, a lançadeira gira sem balançar para frente ou para trás.",
      "4. Se houver jogo axial excessivo, a vibração do bordado empurra a lançadeira para longe da agulha.",
      "5. A ponta do gancho erra a laçada de linha da agulha, causando pulo de ponto instantâneo.",
      "6. O técnico ajusta a folga aproximando o anel de encosto e travando os parafusos Allen.",
      "7. A precisão micrométrica é restaurada e a máquina volta a bordar sem quebras."
    ],
    "beginnerExplanation": "É aquela folguinha de 'vai-e-vem' que o miolo onde encaixa a carretilha pode ter se os parafusos internos ficarem frouxos com o uso. Se essa pecinha balançar para frente ou para trás, ela erra o fio da agulha e a máquina começa a pular pontos ou bater e quebrar agulhas sem parar.",
    "applications": [
      "Diagnóstico avançado de máquinas que pulam pontos mesmo após trocar a agulha",
      "Revisão e regulagem de folgas do cabeçote após 3.000 horas de bordado industrial",
      "Eliminação de quebras intermitentes de linha e estalos na região da bobina",
      "Ajuste fino de lançadeiras novas recém-instaladas no maquinário"
    ],
    "commonErrors": [
      "❌ Apertar o anel de encosto com pressão zero, travando o eixo da lançadeira por excesso de atrito e queimando o motor",
      "❌ Deixar folga longitudinal visível a olho nu (> 0,3 mm), provocando choques repetitivos do gancho com a agulha",
      "❌ Ajustar a distância da lançadeira sem antes zerar o jogo axial do eixo principal inferior"
    ],
    "troubleshootingTips": [
      "Com a máquina desligada e sem a caixa de bobina, empurre e puxe o corpo da lançadeira com a ponta dos dedos: não deve haver folga perceptível",
      "Se sentir um 'jogo' de vai-e-vem, chame a assistência técnica para efetuar o calibramento do anel de encosto",
      "Mantenha a pista e os mancais sempre lubrificados para evitar o desgaste prematuro dos anéis axiais"
    ],
    "dicaArtrelados": "Se você trocou a agulha, colocou linha nova, regulou as tensões e a máquina continua pulando pontos ou dando trancos misteriosos na lançadeira, peça para o técnico medir o jogo axial do eixo! Uma pequena regulagem no anel de encosto deixa sua máquina costurando macia como nova!",
    "voceSabia": "A ponta da lançadeira passa tão perto da agulha de bordar que a distância entre elas (cerca de 0,05 mm) é menor do que a espessura de um único fio de cabelo humano médio (que mede cerca de 0,07 mm).",
    "practicalExercise": "Retire a chapa de agulha e a carretilha da sua máquina. Segure a borda metálica da lançadeira com os dedos e teste suavemente se ela tem algum deslocamento para frente e para trás. Em uma máquina bem ajustada, o movimento deve ser estritamente de rotação, com folga axial imperceptível.",
    "quickSummary": "Folga de deslocamento do eixo da lançadeira que deve ser micrométrica para não errar a laçada da agulha.",
    "relatedTerms": [
      "Gancho da Lançadeira Rotativa",
      "Lançadeira Rotativa",
      "Cava da Agulha (Scarf)",
      "Mecânica da Máquina e Manutenção"
    ],
    "tags": [
      "j-071",
      "jogo axial",
      "folga",
      "lancadeira",
      "ajuste mecanico",
      "precisao",
      "manutencao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KOBAN HOOKS. Rotary Hook Installation, Axial Clearance and Timing Manual. Osaka, 2023.",
      "TAJIMA. Rotary Hook Shaft Maintenance and Axial Tolerances Guide. Nagoya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "j-072-jaleco-profissional-e-bordado-de-bracoes-medicos",
    "code": "J-072",
    "term": "Bordado de Brasões em Jalecos",
    "letter": "J",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês jaquette / jaleco (túnica de proteção de trabalho) e do latim brachium / brasão (insígnia heráldica de profissões). Nicho de alta rentabilidade para ateliês de bordado.",
    "summary": "Guia completo de posicionamento, gabarito, entretela e parâmetros de bordado para nomes e símbolos em jalecos de saúde.",
    "definition": "O bordado em jalecos profissionais e brasões da área da saúde (medicina, enfermagem, odontologia, fisioterapia, farmácia e veterinária) é um dos serviços mais nobres e procurados em ateliês de personalização. Envolve o posicionamento padronizado no peito superior esquerdo (ou bolso) e mangas, a utilização de entretelas rasgáveis de 80g ou hidrossolúveis para evitar irritação na pele, compensação de repuxo calibrada para tecidos planos estruturados (gabardine premium, oxfordine e two-way) e digitalização de letras finas (de 4 mm a 6 mm) com pontos nítidos e legíveis.",
    "technicalDetails": "Posicionamento padrão do nome/profissão: alinhado a 18 cm - 22 cm abaixo da costura do ombro esquerdo ou centralizado 1 cm acima da borda superior do bolso. Densidade de letras pequenas: 0,38 mm com underlay central em ponto corrido simples.",
    "howItWorks": [
      "1. A bordadeira confere o nome, titulação (ex: Dra. Camila Santos) e especialidade solicitados pelo profissional.",
      "2. Escolhe a fonte de letra nítida (serifada clássica ou manuscrita elegante) com altura mínima de 5 mm para boa leitura.",
      "3. Posiciona o brasão da profissão (ex: Caduceu, Serpente de Esculápio ou Dente estilizado).",
      "4. Marca o centro do bordado no jaleco com giz de alfaiate ou caneta fantasminha.",
      "5. Fixa o tecido com entretela rasgável de boa gramatura (80g) no bastidor sem repuxar as costuras.",
      "6. Borda com linha de poliéster brilhante 120 e agulha fina 70/10.",
      "7. Retira o excesso de entretela no avesso e passa a ferro com pano protetor para entrega impecável."
    ],
    "beginnerExplanation": "É o passo a passo para bordar jalecos de médicos, dentistas, enfermeiras e veterinários. Como o jaleco é uma peça de trabalho elegante, o bordado tem que ficar retinho em cima do bolso esquerdo, com letras bem nítidas, sem nós ásperos no avesso e com o símbolo da profissão bem brilhante.",
    "applications": [
      "Personalização de jalecos para formandos de medicina, odontologia, enfermagem e biomedicina",
      "Uniformes de clínicas médicas, laboratórios e consultórios de alto padrão",
      "Bordado de logotipos institucionais de hospitais e universidades nas mangas",
      "Identificação de estudantes em estágios e residências hospitalares"
    ],
    "commonErrors": [
      "❌ Bordar o nome muito baixo ou torto em relação ao bolso do jaleco",
      "❌ Usar letras menores que 4 mm com ponto cheio grosso, transformando o texto em uma mancha de linha ilegível",
      "❌ Deixar entretela grossa e dura espetando no avesso do tecido que fica em contato com a roupa do cliente"
    ],
    "troubleshootingTips": [
      "Em tecidos finos como gabardine de microfibra, use agulha ponta seta fina 70/10 para não furar o tecido",
      "Para nomes compostos longos, divida em duas linhas harmônicas: linha superior com o nome e linha inferior com a especialidade em tamanho menor",
      "Coloque uma folha de plástico solúvel (hidrossolúvel) por cima se o tecido do jaleco tiver trama aparente ou textura pique"
    ],
    "dicaArtrelados": "O nicho de jalecos é maravilhoso e muito valorizado! Sempre envie para o cliente uma foto da simulação do nome com a fonte escolhida pelo WhatsApp antes de colocar no bastidor. Esse cuidado encanta o profissional da saúde e garante fidelidade para todas as próximas peças!",
    "voceSabia": "O símbolo da Medicina é o Bastão de Esculápio (uma serpente enrolada em um cajado de madeira), enquanto o Caduceu de Hermes (duas serpentes com asas no topo) é frequentemente usado na área contábil e comercial.",
    "practicalExercise": "Pegue um jaleco ou camisa de teste. Meça 20 cm para baixo a partir do centro da costura do ombro esquerdo e marque o centro com giz. Posicione seu bastidor e borde um nome com titulação para praticar o alinhamento perfeito com o peito.",
    "quickSummary": "Técnicas de padronização, posicionamento e bordado de nomes e brasões para profissionais da saúde.",
    "relatedTerms": [
      "Letras Pequenas (Small Lettering)",
      "Agulha Ponta Seta (Sharp Point)",
      "Entretela Rasgável",
      "Gabarito de Posicionamento de Peito",
      "Técnicas de Bordado"
    ],
    "tags": [
      "j-072",
      "jaleco",
      "medicina",
      "brasaomedico",
      "posicionamento",
      "gabardine",
      "uniformes",
      "artrelados"
    ],
    "bibliographicReferences": [
      "ARTRELADOS. Manual de Padronização e Posicionamento de Bordados Profissionais. São Paulo, 2024.",
      "MADEIRA THREADS. Corporate Apparel and High-Definition Lettering Guide. Freiburg, 2023."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "j-073-juncao-de-trajetoria-e-eliminacao-de-saltos-em-letreiros",
    "code": "J-073",
    "term": "Eliminação de Saltos em Letreiros",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim junctio (união de trajetórias) e do germânico salt (salto de agulha sem costura). Estratégia clássica de otimização de matrizes criada para reduzir o tempo de máquina.",
    "summary": "Técnica de programação que conecta letras vizinhas por caminhos embutidos, eliminando cortes de linha e aumentando a velocidade da máquina.",
    "definition": "A junção de trajetória e eliminação de saltos em letreiros (Lettering Branching & Jump Elimination) é a metodologia avançada de digitalização em que o software une as letras de uma palavra por meio de sequenciamento contínuo inteligente. O programa planeja pontos corridos invisíveis que passam por baixo das próprias colunas cheias (underlay) ou por conexões cursivas naturais, fazendo com que a máquina borde palavras e frases inteiras com um único corte de linha no final, reduzindo o tempo de produção em até 40% e poupando o desgaste mecânico das facas.",
    "technicalDetails": "Algoritmo de ramificação automática (Automatic Branching). Conexões com comprimento de ponto travado em 2,0 mm por baixo das colunas satin. Redução de até 90% dos comandos de TRIM na matriz.",
    "howItWorks": [
      "1. A bordadeira digita o texto ou digitaliza a tipografia manuscrita no software.",
      "2. Em vez de deixar cada letra isolada com um corte de linha automático entre elas, aplica a função de 'Ramificação / Unir Trajetórias' (Branching).",
      "3. O software analisa a rota ideal de costura e define os pontos de entrada e saída de cada letra.",
      "4. Caminhos de costura de base (underlay) são usados como 'pontes' ocultas para viajar de uma letra à outra.",
      "5. A máquina de bordar executa todo o texto em um fluxo contínuo e veloz, sem parar para cortar a cada letra.",
      "6. A peça sai da máquina com o verso limpo e sem rabichos de linha para limpar à mão."
    ],
    "beginnerExplanation": "É um truque inteligente do programa de computador que junta as letrinhas do bordado por baixo, para a máquina não ter que parar e cortar a linha em cada letra. A máquina borda o nome inteiro rapidinho de uma vez só, sem ficar aquele monte de fiapos de linha para aparar com a tesoura depois!",
    "applications": [
      "Bordados de nomes em enxovais, toalhas de boca e uniformes escolares em grande escala",
      "Letreiros cursivos e monogramas elegantes em ponto cheio contínuo",
      "Aumento drástico de produtividade e redução do tempo de máquina em produções seriadas",
      "Preservação da vida útil das facas de corte automático e solenoides da máquina"
    ],
    "commonErrors": [
      "❌ Deixar fios de ligação expostos por cima de espaços em branco entre palavras distantes sem cortar",
      "❌ Passar a linha de conexão por baixo de um tecido fino transparente onde o fio preto fique visível por baixo do tecido branco",
      "❌ Desativar totalmente os cortes de linha em fontes com letras muito separadas, criando pontes compridas fáceis de enroscar"
    ],
    "troubleshootingTips": [
      "Utilize a ferramenta de ramificação automática (Branching) presente em programas profissionais como o Wilcom",
      "Em fontes manuscritas (script), faça as letras se tocarem suavemente para criar uma linha contínua natural",
      "Se a distância entre duas palavras for maior que 2 cm, programe o comando de corte (TRIM) normal para evitar puxões no tecido"
    ],
    "dicaArtrelados": "Para quem borda muitos nomes em toalhinhas e uniformes no ateliê, usar a junção de trajetórias é um divisor de águas! Além de cortar o tempo de produção quase pela metade, sua máquina agradece porque não fica dando trancos de corte a cada letrinha!",
    "voceSabia": "Em um bordado com 30 nomes de alunos para uma turma escolar, eliminar os cortes entre as letras pode economizar mais de 500 acionamentos de faca e reduzir o tempo total de produção em mais de 45 minutos.",
    "practicalExercise": "Escreva uma palavra com 6 letras no seu software de bordados. Veja a simulação com cortes entre todas as letras e anote o tempo. Em seguida, aplique o recurso de 'Branching/Ramificação' na mesma palavra e observe como os saltos desaparecem e o tempo total diminui.",
    "quickSummary": "União inteligente do caminho das letras que elimina cortes de linha e acelera a velocidade do bordado.",
    "relatedTerms": [
      "Corte Automático de Linha (Auto-Trim)",
      "Ponto de Salto (Jump Stitch)",
      "Letras Pequenas (Small Lettering)",
      "Software de Digitalização",
      "Programação de Bordado"
    ],
    "tags": [
      "j-073",
      "juncao de trajetoria",
      "branching",
      "eliminacao de saltos",
      "letras",
      "produtividade",
      "software",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. Branching Technology and Lettering Path Optimization Guide. Sydney, 2023.",
      "PULSE MICROSYSTEMS. Continuous Lettering Digitizing Standards. Toronto, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "j-074-jornada-de-manutencao-preventiva-semanal-e-mensal",
    "code": "J-074",
    "term": "Manutenção Preventiva Periódica",
    "letter": "J",
    "level": "Iniciante 🟢",
    "category": "Cuidados e Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim diurnata (trabalho de um dia, ciclo periódico) e praevenire (agir antes que o problema aconteça). Metodologia consagrada de Gestão da Qualidade Total (TPM - Total Productive Maintenance).",
    "summary": "Cronograma de cuidados diários, semanais e mensais de limpeza e lubrificação que garante vida longa e bordados perfeitos na máquina.",
    "definition": "A jornada de manutenção preventiva semanal e mensal é o plano estruturado de tarefas periódicas executadas pelo operador e técnico responsável para manter a máquina de bordar em condições ideais de trabalho. Abrange rotinas diárias (limpeza da lançadeira e conjunto de corte), semanais (lubrificação dos feltros das barras de agulha com óleo mineral branco e limpeza de sensores) e mensais (checagem de tensão de correias dentadas X/Y, graxa de lítio nas engrenagens e inspeção da chapa de agulha contra rebarbas).",
    "technicalDetails": "Óleo lubrificante de alta pureza (Viscosidade ISO VG 10 ou 15, transparente e sem ácido). Graxa branca de lítio com bissulfeto de molibdênio para caixas de engrenagens fechadas.",
    "howItWorks": [
      "1. Diariamente: Ao final do dia, retira-se a caixa de bobina, limpam-se os fiapos e pinga-se 1 gota de óleo na pista da lançadeira.",
      "2. Semanalmente: Aplica-se 1 gota de óleo nos feltros superiores das barras de agulha e limpam-se os tensores de linha com pano seco.",
      "3. Quinzenalmente: Inspeciona-se o orifício da chapa de agulha com o dedo para detectar possíveis marcas ou rebarbas de agulha quebrada.",
      "4. Mensalmente: Limpam-se as entradas de ar da placa eletrônica e confere-se o aperto dos parafusos dos suportes de bastidor.",
      "5. Semestralmente: Realiza-se a revisão técnica geral com regulagem de folgas e calibração de ponto zero.",
      "6. A máquina trabalha silenciosa, sem paradas imprevistas e com durabilidade de mais de 15 a 20 anos."
    ],
    "beginnerExplanation": "É o 'caderninho de saúde' da sua máquina de bordar. Assim como um carro precisa trocar óleo e calibrar os pneus, a máquina precisa de uma gotinha de óleo no lugar certo todo dia e uma limpeza no final da semana. Seguir esse calendário faz sua máquina durar muitos anos sem quebrar e sem dar dor de cabeça!",
    "applications": [
      "Planejamento de rotina operacional para ateliês individuais e médias confecções",
      "Redução de até 85% nos custos com consertos e trocas emergenciais de peças",
      "Eliminação de manchas de óleo em peças de clientes causadas por excesso de lubrificação",
      "Aumento do valor de revenda da máquina pelo excelente estado de conservação"
    ],
    "commonErrors": [
      "❌ Usar óleos grossos de motor de carro, óleos vegetais de cozinha ou desengripantes em spray na máquina de bordar",
      "❌ Encharcar as barras de agulha com excesso de óleo, fazendo o lubrificante escorrer e manchar a toalha branca do cliente",
      "❌ Passar meses sem colocar uma única gota de óleo na pista da lançadeira, travando o mecanismo por superaquecimento a seco"
    ],
    "troubleshootingTips": [
      "Crie uma tabela impressa ao lado da máquina com quadradinhos para marcar a data de cada limpeza e lubrificação",
      "Use sempre uma almotolia de bico fino ou seringa para aplicar apenas UMA gota exata de óleo em cada ponto indicado",
      "Depois de lubrificar as barras de agulha, borde um retalho de tecido velho por 2 minutos para absorver qualquer microgota antes de colocar a peça do cliente"
    ],
    "dicaArtrelados": "A regra de ouro do ateliê Artrelados é: 'Menos é mais!'. Uma única gotinha de óleo fino no lugar certo todo dia vale mais do que encharcar a máquina uma vez por ano. Cuide da sua máquina com carinho e ela vai retribuir com bordados impecáveis todos os dias!",
    "voceSabia": "Máquinas industriais que seguem rigorosamente o cronograma de manutenção preventiva mantêm uma precisão dimensional de pontos 98% idêntica à de uma máquina zero km mesmo após ultrapassarem a marca de 100 milhões de pontos bordados.",
    "practicalExercise": "Imprima ou desenhe um checklist semanal simples para o seu ateliê com os dias da semana (Segunda a Sexta). Marque com um 'OK' a cada dia após pingar a gota de óleo na lançadeira e limpar os fiapos com o pincel.",
    "quickSummary": "Calendário prático de limpeza e lubrificação preventiva que multiplica a vida útil da sua máquina de bordar.",
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Higienização e Remoção de Fibras do Conjunto de Corte",
      "Barra de Agulha",
      "Manutenção Preventiva",
      "Cuidados e Manutenção"
    ],
    "tags": [
      "j-074",
      "manutencao preventiva",
      "cronograma",
      "lubrificacao",
      "oleo",
      "limpeza",
      "cuidados",
      "gestao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Preventive Maintenance Schedules and Lubrication Specifications. Nagoya, 2023.",
      "BARUDAN. Operator Care and Periodic Maintenance Standards Manual. Ichinomiya, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "j-075-jogo-de-agulhas-para-bordado-em-jeans-e-sarja-pesada",
    "code": "J-075",
    "term": "Agulhas para Jeans e Sarja Pesada",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do termo histórico de origem francesa de Nîmes (denim) e da cidade italiana de Gênova (jeans). Adaptação industrial da geometria de agulhas para perfuração de tramas densas de sarja 3x1 com fios de urdume índigo.",
    "summary": "Sortimento de agulhas reforçadas com lâmina espessada e ponta bola média que transpassam tecidos pesados de brim sem deflexão nem quebra.",
    "definition": "O jogo de agulhas para bordado em jeans e sarja pesada (Jeans & Denim Needle Assortment) é o conjunto especializado de agulhas industriais e domésticas (calibres NM 80/12, 90/14 e 100/16 no sistema DBxK5 ou 130/705 H-J) projetadas com lâmina reforçada anti-deflexão, ponta bola média (SES/FFG) ou ponta de penetração de alta precisão (RG) e revestimento de cromo duro ou nitreto de titânio (SAN 1 / PD). Sua geometria evita que a agulha entorte ao cruzar as costuras duplas e espessas de calças e jaquetas jeans, garantindo laçadas uniformes e evitando danos às fibras do tecido.",
    "technicalDetails": "Haste cônica reforçada com transição rígida de lâmina, canaleta profunda para acomodação de fio poliéster 40 ou 30 wt e cava chanfrada projetada para aproximação máxima da ponta da lançadeira (0,05 mm a 0,10 mm) sem atrito.",
    "construction": [
      "Lâmina com reforço geométrico anti-deflexão",
      "Ponta bola média (SES) que afasta as tramas densas do brim",
      "Cava profunda com recuo otimizado para laçada estável",
      "Canaleta frontal ampliada que protege a linha contra abrasão severa",
      "Revestimento de cromo resistente ao atrito de lavagens químicas do jeans"
    ],
    "howItWorks": [
      "1. A ponta bola média encontra o fio grosso de algodão da sarja e desliza entre a trama sem cortar as fibras.",
      "2. A lâmina espessada penetra reto sem sofrer deflexão lateral mesmo ao bater sobre costuras rebatidas duplas.",
      "3. A linha de bordar corre livremente pela canaleta frontal sem sofrer esmagamento.",
      "4. No ponto morto inferior, a cava ampla forma a laçada perfeita de linha superior.",
      "5. A ponta da lançadeira captura a laçada sem raspar no metal da agulha.",
      "6. A agulha recua sem arrastar o tecido ou deixar furos alargados e desfiados."
    ],
    "mainTypes": [
      "Agulha Jeans 90/14 SES (Uso padrão para jaquetas e calças jeans médias)",
      "Agulha Jeans 100/16 RG (Para sarja grossa de 14 a 16 oz e bolsos traseiros)",
      "Agulha Revestida com Titânio SAN 1 GEBEDUR (Máxima durabilidade industrial)"
    ],
    "characteristics": [
      "Rigidez mecânica superior para tecidos pesados",
      "Evita quebra de agulhas em áreas com 4 a 6 camadas de tecido dobrado",
      "Reduz drasticamente o erro de falso corte de linha ou falha de ponto",
      "Compatível com linhas de bordar padrão 40 e linhas espessas 30 wt"
    ],
    "limitations": [
      "Inadequada para tecidos finos e sedas, onde a espessura da lâmina abriria furos visíveis",
      "Exige elevação correspondente do calcador para compensar a espessura do jeans",
      "Requer velocidade moderada ao bordar sobre costuras grossas para evitar desvio do pantógrafo"
    ],
    "numberingSystem": [
      "Sistema Schmetz / Organ: DBxK5 / 130/705 H-J",
      "Calibres: 80/12, 90/14, 100/16",
      "Ponta: SES (Ponta Bola Média) ou RG (Ponta Redonda de Precisão)"
    ],
    "advantages": [
      "✔ Elimina quebras de agulha sobre costuras rebatidas de calças e bolsos",
      "✔ Pontos nítidos sem enrugamento do tecido grosso",
      "✔ Vida útil prolongada mesmo em regime de produção contínua"
    ],
    "commonErrors": [
      "❌ Utilizar agulha fina 65/9 ou 75/11 em sarja pesada, causando deflexão e quebra imediata na costura",
      "❌ Usar ponta de lança cortante (de couro) em jeans, o que decepa os fios do tecido e cria buracos nas lavagens",
      "❌ Não aplicar entretela rasgável pesada por achar que o jeans já é firme o suficiente"
    ],
    "voceSabia": "O tecido jeans foi criado originalmente para os mineradores da corrida do ouro nos EUA em 1853 por sua resistência extrema, e a estrutura de sua sarja 3x1 possui até 70 fios por centímetro, exigindo agulhas de alta dureza mecânica.",
    "curiosidadeTecnica": "Ao cruzar a emenda de um cós de jeans com 6 camadas dobradas, a agulha sofre uma força de impacto superior a 15 kgf por fração de milissegundo, o que entortaria uma agulha comum em menos de 10 rotações.",
    "dicaArtrelados": "Ao bordar bolsos traseiros ou pernas de calça jeans montadas, use bastidor magnético ou bastidor de encaixe tubular livre com entretela rasgável de 80 g/m² e reduza a velocidade da máquina para 600 PPM para garantir precisão absoluta!",
    "comparisonTable": {
      "headers": [
        "Tipo de Agulha",
        "Calibre Recomendado",
        "Gramatura do Jeans",
        "Desempenho em Costuras"
      ],
      "rows": [
        [
          "Jeans Ponta Bola 90/14",
          "NM 90 / #14",
          "Até 10 a 12 oz (médio)",
          "Excelente sem corte de fios"
        ],
        [
          "Jeans Titânio 100/16",
          "NM 100 / #16",
          "14 a 16 oz (pesado)",
          "Ultra reforçada para emendas grossas"
        ],
        [
          "Universal Comum 75/11",
          "NM 75 / #11",
          "Inadequada",
          "Risco alto de deflexão e quebra"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "DBxK5 Jeans / Denim 90/14 SES ou 100/16 RG",
      "stabilizer": "Entretela Rasgável 80 g/m² ou 2 camadas de 50 g/m²",
      "threadTension": "110 a 130 gf (linha superior) e 22 a 25 gf (bobina)",
      "density": "0.40 mm a 0.45 mm"
    },
    "applications": [
      "Personalização de bolsos e pernas de calças jeans e bermudas",
      "Bordados corporativos em jaquetas e coletes de sarja pesada",
      "Bonés e chapéus estilo bucket confeccionados em brim grosso",
      "Aventais profissionais e uniformes industriais resistentes"
    ],
    "troubleshootingTips": [
      "Se a linha superior desfiar ao bater na costura grossa, aumente a folga do calcador em 0,5 mm e verifique a afiação da ponta da agulha",
      "Se o verso do jeans mostrar pontos soltos, aumente a pressão do disco de tensão superior em 10%",
      "Se a máquina bater a agulha na chapa, substitua a agulha por uma nova calibre 90/14 com haste reforçada SAN 1"
    ],
    "relatedTerms": [
      "Agulha Ponta Bola",
      "Deflexão da Agulha",
      "Entretela Rasgável",
      "Compensação de Repuxo",
      "Agulhas & Fios"
    ],
    "tags": [
      "j-075",
      "agulhas jeans",
      "denim",
      "sarja pesada",
      "brim",
      "agulhas e fios",
      "costura rebatida",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SCHMETZ. Technical Needle Guide for Denim and Heavy Twill Garments. Herzogenrath, 2023.",
      "GROZ-BECKERT. Sewing and Embroidery Needles: Special Application Needles (SAN). Albstadt, 2022."
    ],
    "practicalExercise": "Pegue um retalho de perna de jeans velha com costura dupla. Coloque entretela rasgável de 80 g/m² no bastidor, instale uma agulha 90/14 SES e borde um monograma em ponto cheio com 5 mm de largura passando bem em cima da costura. Observe como o ponto fica uniforme sem quebrar a agulha.",
    "quickSummary": "Conjunto de agulhas espessadas e reforçadas para bordar jeans e tecidos grossos sem entortar nem quebrar.",
    "beginnerExplanation": "É o kit de agulhinhas mais fortes e grossinhas feitas especialmente para furar o jeans e tecidos de brim sem quebrar nem estragar o tecido, perfeitas para jaquetas e calças!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-076-juncao-de-contornos-finos-com-compensacao-de-sobreposicao",
    "code": "J-076",
    "term": "Junção de Contornos Finos",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim junctio (ligação, união) e do inglês trapping (sobreposição gráfica de cores contíguas na impressão e bordado digital).",
    "summary": "Técnica de matrizaria que cria uma sobreposição milimétrica entre fundos e contornos para impedir frestas brancas após o repuxo do tecido.",
    "definition": "A junção de contornos finos com compensação de sobreposição (Outline Overlap & Trapping) é o método técnico de programação de matrizes onde o digitalizador estende intencionalmente a borda do preenchimento base (Tatami ou Ponto Cheio) entre 0,3 mm e 0,8 mm por baixo da linha central do contorno fino que o contorna. Essa ancoragem oculta absorve a retração mecânica natural provocada pela tração dos fios (push-pull effect), garantindo que o contorno fique perfeitamente alinhado sem revelar o tecido de fundo ou criar lacunas em relevos complexos.",
    "technicalDetails": "Overlap geométrico programado de 3 a 5 pontos de penetração (0,4 mm a 0,6 mm). Compensação de repuxo adicional de 0,2 mm a 0,4 mm na direção perpendicular ao ângulo dos pontos.",
    "construction": [
      "Camada de preenchimento Tatami com sobreposição perimetral estendida",
      "Grade de underlay cruzada que estabiliza as margens do bloco",
      "Contorno em Ponto Cheio ou Ponto Costura Triplo centralizado sobre a margem de overlap",
      "Sequenciamento otimizado: borda de contorno executada imediatamente após o bloco interno correspondente"
    ],
    "howItWorks": [
      "1. O software calcula o vetor do objeto de preenchimento e expande sua margem externa em 0,5 mm.",
      "2. A agulha executa a costura de suporte (underlay) cobrindo toda a área incluindo a margem expandida.",
      "3. O preenchimento principal é bordado, puxando suavemente as fibras do tecido para dentro.",
      "4. O contorno de acabamento é bordado logo em seguida sobre a borda estendida.",
      "5. Mesmo com o repuxo mecânico do tecido, o contorno fecha exatamente em cima da margem, sem frestas visíveis.",
      "6. O desenho final apresenta bordas perfeitamente nítidas e definidas."
    ],
    "mainTypes": [
      "Sobreposição Simétrica para Contorno em Ponto Cheio (Satin Trap)",
      "Sobreposição Fina para Ponto Costura Triplo (Bean Stitch Trap)",
      "Sobreposição com Compensação Direcional de Ângulo (Angle-Dependent Pull Trap)"
    ],
    "characteristics": [
      "Elimina 100% dos espaços vazios (frestas brancas) entre cores adjacentes",
      "Garante acabamento profissional em logomarcas com letras contornadas",
      "Compensa a elasticidade de malhas e tecidos com elastano",
      "Reduz a necessidade de entretelas excessivamente duras"
    ],
    "limitations": [
      "Sobreposição excessiva (> 1,2 mm) pode gerar calombos ou relevos indesejados sob o contorno",
      "Exige cálculo preciso do sentido de tensão do tecido no bastidor",
      "Requer software de digitalização profissional com controle manual de nós vetoriais"
    ],
    "numberingSystem": [
      "Overlap Padrão para Tecidos Planos: 0,35 mm a 0,45 mm",
      "Overlap para Malhas Piquet e Moletom: 0,50 mm a 0,75 mm",
      "Compensação de Repuxo Global: 0,30 mm a 0,50 mm"
    ],
    "advantages": [
      "✔ Desenho perfeito sem falhas de encaixe na primeira rodada de produção",
      "✔ Estabilidade visual de contornos finos em letras e arabescos",
      "✔ Redução de perdas de peças por desencaixe no ateliê"
    ],
    "commonErrors": [
      "❌ Alinhar o contorno exatamente no limite vetorial do preenchimento (overlap zero), gerando frestas no tecido",
      "❌ Aplicar contorno preto em toda a matriz só no final do bordado, quando o tecido já sofreu retração acumulada",
      "❌ Usar compensação de repuxo no preenchimento mas esquecer de estender os pontos de underlay"
    ],
    "voceSabia": "O termo 'trapping' veio da indústria gráfica de offset e serigrafia do século XIX, onde as matrizes de impressão colorida eram desenhadas com 0,2 mm de invasão para compensar a dilatação do papel com a umidade da tinta.",
    "curiosidadeTecnica": "Em malhas de algodão penteado, a retração na direção da trama pode chegar a 7% durante a execução de um preenchimento tatami denso, o que deslocaria um contorno fino em até 1,5 mm se não houvesse a compensação planejada.",
    "dicaArtrelados": "Sempre programe para o contorno ser bordado imediatamente após o preenchimento da mesma cor ou bloco! Não deixe todos os contornos da matriz para o final de uma matriz grande, pois o tecido já estará deslocado!",
    "comparisonTable": {
      "headers": [
        "Técnica de Programação",
        "Overlap Aplicado",
        "Resultado em Tecido Plano",
        "Resultado em Malha Elástica"
      ],
      "rows": [
        [
          "Alinhamento Seco (Zero Overlap)",
          "0,0 mm",
          "Frestas ocasionais visíveis",
          "Desencaixe grave com tecido exposto"
        ],
        [
          "Sobreposição Técnica Artrelados",
          "0,4 a 0,6 mm",
          "Encaixe 100% perfeito e limpo",
          "Borda nítida sem falha"
        ],
        [
          "Sobreposição Excessiva",
          "> 1,2 mm",
          "Relevo endurecido sob o contorno",
          "Borda espessa com rigidez"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES ou 70/10 FFG",
      "stabilizer": "Entretela Rasgável 60 g/m² ou Malha com Hidrossolúvel",
      "threadTension": "100 a 115 gf (linha de cima) e 20 a 22 gf (canelinha)",
      "density": "0.38 mm no contorno cheio / 0.42 mm no fundo"
    },
    "applications": [
      "Digitalização de logomarcas corporativas com texto em volta de escudos",
      "Personagens infantis com contornos expressivos finos e delicados",
      "Brasões militares e institucionais com fitas e medalhas detalhadas",
      "Monogramas elegantes com sombras e filetes dourados paralelos"
    ],
    "troubleshootingTips": [
      "Se aparecer uma linha de tecido branco entre a letra e o contorno, aumente o parâmetro 'Pull Compensation' em +0,2 mm no Wilcom/Embird",
      "Se o contorno ficar afundando dentro do preenchimento, adicione uma linha de suporte 'Center Walk' ou 'Edge Run' sob o contorno",
      "Se as quinas do contorno ficarem arredondadas, ative a opção 'Smart Corners' (Cantos em Esquadria) no software"
    ],
    "relatedTerms": [
      "Compensação de Repuxo",
      "Efeito Push-Pull",
      "Ponto Cheio (Satin)",
      "Ponto Tatami",
      "Programação de Bordado"
    ],
    "tags": [
      "j-076",
      "trapping",
      "sobreposicao",
      "contornos finos",
      "encaixe de matriz",
      "matrizaria",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. Advanced Embroidery Digitizing: Trapping, Overlap and Pull Compensation Rules. Sydney, 2023.",
      "DEVEREUX, Keith. Precision Digitizing for Industrial Embroidery Machines. London, 2021."
    ],
    "practicalExercise": "Crie no seu software um círculo de preenchimento Tatami de 40 mm de diâmetro e um contorno em Ponto Cheio de 1,5 mm de largura. Configure o círculo com 0,5 mm de expansão perimetral (overlap) e borde em uma camiseta de malha. Observe o encaixe milimétrico.",
    "quickSummary": "Extensão milimétrica do preenchimento por baixo do contorno para impedir que o repuxo abra frestas no tecido.",
    "beginnerExplanation": "É o truque de fazer o fundo colorido entrar um pedacinho para dentro da linha do contorno. Assim, quando a máquina puxar a linha, não fica aquele espacinho feio de tecido sem bordado aparecendo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-077-jateamento-criogenico-e-limpeza-termica-de-pecas-de-precisao",
    "code": "J-077",
    "term": "Limpeza Especial de Peças Mecânicas",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego kryos (gelo, frio extremo) e do latim jactare (arremessar). Tecnologia aeronáutica e mecânica fina adaptada para desincrustação de peças têxteis industriais.",
    "summary": "Método avançado que utiliza dióxido de carbono líquido ou arrefecido para congelar e quebrar gomas e óleos secos sem solventes químicos.",
    "definition": "O jateamento criogênico e limpeza térmica de peças de precisão (Cryogenic Dry-Ice Precision Cleaning) é o método técnico de manutenção industrial que aplica micro-pellets de gelo seco (CO2 a -78,5 °C) ou fluxos térmicos ultrafrios sob pressão controlada para remover ceras de entretelas resinadas, colas adesivas de spray e resíduos de graxa oxidada de peças móveis complexas (como blocos do trambulador, facas cortadoras e conjuntos de engrenagens de cabeçote) sem abrasão da superfície metálica e sem necessidade de desmontagem química completa.",
    "technicalDetails": "Temperatura de aplicação -78,5 °C. Sublimação imediata do CO2 gasoso sem deixar resíduos líquidos ou umidade nas peças. Pressão controlada entre 1,5 e 3 bar com bico direcionador de cerâmica de 2 mm.",
    "construction": [
      "Bico aplicador térmico microfocalizado",
      "Câmara de expansão criogênica",
      "Dióxido de carbono sólido em microgrânulos (dry ice pellets)",
      "Sistema de aterramento eletrostático de segurança",
      "Exaustor de ar forçado para ventilação do ambiente"
    ],
    "howItWorks": [
      "1. Os micro-pellets de gelo seco são acelerados por um fluxo de ar comprimido purificado.",
      "2. Ao atingirem a superfície impregnada com cola de spray e poeira, os grânulos congelam a sujeira instantaneamente a -78,5 °C.",
      "3. O choque térmico torna a camada de resíduo quebradiça (efeito de choque criogênico).",
      "4. O dióxido de carbono sublima (passa de sólido para gás instantaneamente), expandindo 800 vezes seu volume.",
      "5. Essa microexplosão de gás solta a crosta de sujeira sem arranhar o metal ou desgastar o corte das facas.",
      "6. A peça fica 100% limpa, seca e pronta para relubrificação imediata com óleo sintético."
    ],
    "mainTypes": [
      "Jateamento Criogênico com Pellets de Gelo Seco (Indústrias e Centros Técnicos)",
      "Congelamento Térmico por Spray Criogênico Focalizado (Oficinas de Manutenção)",
      "Limpeza Criogênica de Facas e Garras Móveis do Corta-Fio"
    ],
    "characteristics": [
      "Processo 100% ecológico, não tóxico e isento de solventes derivados de petróleo",
      "Não desgasta tratamentos de cromo duro ou nitretação das peças de precisão",
      "Não deixa resíduos secundários como pó de areia ou água oxidante",
      "Excelente para remover adesivos de spray termofixados nas guias da máquina"
    ],
    "limitations": [
      "Exige equipamento de proteção individual (luvas térmicas e óculos de proteção)",
      "Equipamento industrial de alto custo, restrito a autorizadas e grandes confecções",
      "Exige ambiente arejado para dissipação do gás carbônico"
    ],
    "numberingSystem": [
      "Temperatura Operacional: -78,5 °C",
      "Diâmetro dos Micro-Pellets: 0,5 mm a 1,5 mm",
      "Pressão de Jato: 2,0 a 3,5 bar"
    ],
    "advantages": [
      "✔ Remove cola de spray e resina queimada sem arranhar o aço das facas",
      "✔ Economia de tempo sem necessidade de desmontar todo o cabeçote",
      "✔ Preserva a afiação e o polimento espelhado das peças móveis"
    ],
    "commonErrors": [
      "❌ Utilizar solventes clorados agressivos que dissolvem vedações de borracha e oxidam rolamentos",
      "❌ Raspar peças de corte com chave de fenda ou faca de aço, criando ranhuras permanentes",
      "❌ Não usar luvas isolantes ao manusear sprays congelantes de bancada"
    ],
    "voceSabia": "A limpeza criogênica foi desenvolvida originalmente pela marinha norte-americana e pela NASA para limpar turbinas de foguetes sem danificar os revestimentos cerâmicos ultrafinos.",
    "curiosidadeTecnica": "O gelo seco não passa pelo estado líquido; ele evapora diretamente em gás CO2 puro. Por isso, a máquina fica completamente seca segundos após a aplicação, permitindo bordar imediatamente após a relubrificação.",
    "dicaArtrelados": "No ateliê do dia a dia, quando a faca do cortador de linha estiver travada de cola de spray, use spray desengraxante seco próprio para máquinas de bordar e um pincel de cerdas duras — nunca raspe com metal para não tirar o fio de corte!",
    "comparisonTable": {
      "headers": [
        "Método de Limpeza",
        "Abrasão no Metal",
        "Tempo de Secagem",
        "Remoção de Cola de Spray"
      ],
      "rows": [
        [
          "Jateamento Criogênico",
          "Nenhuma (Zero Abrasão)",
          "Instantâneo (0 segundos)",
          "100% Eficaz por choque térmico"
        ],
        [
          "Solvente Líquido Comum",
          "Química (risco em borrachas)",
          "10 a 30 minutos",
          "Média (deixa resíduos pegajosos)"
        ],
        [
          "Raspagem Mecânica",
          "Alta (arranha o metal)",
          "Seco",
          "Remove mas cega as lâminas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Procedimento de Manutenção)",
      "needleType": "Peça desmontada para revisão",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Manutenção de blocos de corte e trambuladores em máquinas multicabeças industriais",
      "Desincrustação de placas de suporte e guias de linha impregnadas de silicone",
      "Higienização de caixas de engrenagens sem resíduos químicos poluentes",
      "Recuperação de lançadeiras e porta-bobinas travados por linhas queimadas"
    ],
    "troubleshootingTips": [
      "Se o mecanismo de corte estiver lento, verifique se há crosta endurecida de cola de spray na lâmina móvel",
      "Após qualquer procedimento de limpeza profunda, aplique imediatamente óleo branco mineral grau ISO 10 ou 15 na pista da lançadeira",
      "Nunca direcione sprays térmicos ultracongelantes sobre displays eletrônicos de LCD ou cabos flexíveis planos"
    ],
    "relatedTerms": [
      "Mecanismo do Corta-Fio",
      "Lançadeira Rotativa",
      "Manutenção Preventiva",
      "Óleo para Máquina de Bordar",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-077",
      "limpeza criogenica",
      "manutencao industrial",
      "corta fio",
      "cola de spray",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "INTERNATIONAL COATING & CLEANING ASSOC. Cryogenic Cleaning Applications in Textile and Precision Machinery. Chicago, 2022.",
      "TAJIMA. Preventive Maintenance and Mechanical Decontamination Manual. Nagoya, 2023."
    ],
    "practicalExercise": "Observe a lâmina móvel do cortador de linha embaixo da chapa da sua máquina. Com o auxílio de uma boa luminária, verifique se há fiapos grudados com cola. Faça a limpeza suave com álcool isopropílico ou spray desengraxante seco e veja a lâmina brilhar.",
    "quickSummary": "Técnica ultra-avançada que congela e estilhaça a sujeira e cola das peças metálicas sem arranhar o metal.",
    "beginnerExplanation": "É uma limpeza muito moderna que usa um jato de gelo sequinho e congelante para soltar toda aquela cola de spray velha e sujeira dura das peças de ferro da máquina, deixando tudo limpo como novo sem precisar esfregar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-078-jacquard-computadorizado-integrado-ao-bordado-eletronico",
    "code": "J-078",
    "term": "Bordado Integrado em Jacquard",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Homenagem ao inventor francês Joseph Marie Jacquard (1752–1834), criador do tear com cartões perfurados que originou a automação têxtil e da computação.",
    "summary": "Técnicas de bordado sobre tecidos nobres com padronagens tecidas em relevo (brocados e jacquards) sem deformar a estampa da base.",
    "definition": "O tecido Jacquard no bordado eletrônico (Jacquard & Brocade Embroidery Integration) é o processo de aplicação de motivos bordados computadorizados sobre superfícies têxteis encorpadas tecidas com tramas complexas e relevos decorativos flutuantes (brocados, damascos e gobelins). Por apresentar alta densidade de fios de urdume e fios de lurex soltos na superfície, o jacquard exige estabilização com entretelas firmes de algodão, compensação de repuxo moderada e matrizes com pontos de suporte que não furem nem prendam os relevos originais do tear.",
    "technicalDetails": "Gramatura média de 180 a 350 g/m². Estrutura tecida em tear eletrônico com fios torcidos de algodão, viscose e poliéster metalizado. Uso recomendado de agulhas ponta bola leve (SES) calibre 75/11.",
    "construction": [
      "Base de tecido com fios de urdume e trama entrelaçados em padrões complexos",
      "Relevos de fios flutuantes que criam desenhos foscos e brilhantes na luz",
      "Entretela rasgável de 60 g/m² ou entretela de corte de toque macio no avesso",
      "Película hidrossolúvel no topo quando o jacquard possui fios soltos ou efeito chenille"
    ],
    "howItWorks": [
      "1. O tecido jacquard é colocado no bastidor com tensão homogênea sem esticar os fios da trama decorativa.",
      "2. Uma entretela estruturada no avesso impede que o peso dos pontos amasse o relevo do tecido.",
      "3. A agulha de ponta arredondada penetra entre as tramas grossas sem desfiar os fios de brilho.",
      "4. A matriz executa um underlay em grade leve para nivelar a base do bordado.",
      "5. Os pontos cheios e tatamis assentam sobre o jacquard criando um contraste luxuoso de texturas.",
      "6. A peça é finalizada com corte rente das linhas no verso, mantendo a sofisticação da tapeçaria."
    ],
    "mainTypes": [
      "Jacquard Damasco (Para toalhas de mesa nobres e enxovais clássicos)",
      "Jacquard Brocado com Fios Metálicos (Para vestuário litúrgico e alta costura)",
      "Jacquard Estofamento / Gobelin (Para almofadas, tapeçarias e bolsas de luxo)"
    ],
    "characteristics": [
      "Visual extremamente sofisticado com sobreposição de texturas nobres",
      "Excelente estabilidade dimensional natural (tecido firme e estruturado)",
      "Permite bordados com fios metálicos, foscos e seda para efeitos barrocos",
      "Grande valor agregado no mercado de decoração e moda festa"
    ],
    "limitations": [
      "Não tolera furações ultra densas com agulhas grossas, que podem romper os fios nobres da trama",
      "Requer bastidores com boa pressão para prender tecidos grossos sem deixar marcas de aro",
      "Avesso do jacquard possui fios longos que não devem ser puxados com pinça"
    ],
    "numberingSystem": [
      "Gramatura Típica: 200 a 400 g/m²",
      "Agulha Ideal: 75/11 SES ou 80/12 SES",
      "Densidade da Matriz: 0,42 mm a 0,46 mm"
    ],
    "advantages": [
      "✔ Peças com acabamento de alta costura e altíssimo valor de venda",
      "✔ Tecido naturalmente firme que aceita bordados grandes sem enrugar",
      "✔ Combinação perfeita para monogramas em brasão e florais clássicos"
    ],
    "commonErrors": [
      "❌ Utilizar agulha de ponta cortante ou agulha afiada desgastada que desfia os fios dourados do brocado",
      "❌ Programar pontos tatami com densidade excessiva (< 0,35 mm), criando um bloco duro que estraga o caimento da peça",
      "❌ Apertar o parafuso do bastidor com alicate amassando o relevo do jacquard com marcas permanentes"
    ],
    "voceSabia": "O tear de Jacquard de 1804 utilizava cartões de papelão perfurados para controlar a elevação dos fios de seda. Essa invenção de Joseph Marie Jacquard inspirou Charles Babbage e Ada Lovelace na criação do primeiro computador programável do mundo!",
    "curiosidadeTecnica": "Por ter uma tecelagem fechada, o jacquard tem coeficiente de atrito 30% maior na passagem da linha de bordar, o que exige lubrificação adequada da linha superior ou o uso de linhas trilobais siliconadas de alta qualidade.",
    "dicaArtrelados": "Para bordar almofadas de jacquard com sofisticação máxima, use bastidor magnético para não marcar o veludo ou relevo do tecido, e combine fios foscos (como o algodão ou poliéster fosco) com a linha dourada metalizada!",
    "comparisonTable": {
      "headers": [
        "Tipo de Jacquard",
        "Entretela Recomendada",
        "Tipo de Agulha",
        "Projeto Ideal"
      ],
      "rows": [
        [
          "Jacquard Brocado de Festa",
          "Entretela Rasgável 60 g/m²",
          "75/11 SES Ponta Bola Leve",
          "Vestidos de gala e estolas"
        ],
        [
          "Jacquard Estofamento / Tapeçaria",
          "Entretela de Recorte 70 g/m²",
          "80/12 SES Ponta Bola Média",
          "Almofadas e bolsas estruturadas"
        ],
        [
          "Jacquard de Toalha de Mesa",
          "Entretela Hidrossolúvel de Lavar",
          "75/11 RG Ponta Redonda",
          "Guardanapos e caminhos de mesa"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "75/11 SES ou 80/12 SES Ponta Bola Leve",
      "stabilizer": "Entretela Rasgável 60 g/m² de boa qualidade",
      "threadTension": "110 gf (linha superior) e 22 gf (linha da bobina)",
      "density": "0.42 mm a 0.45 mm"
    },
    "applications": [
      "Bordado de brasões e iniciais em enxovais de mesa de puro luxo",
      "Paramentos eclesiásticos e mantos em brocados litúrgicos com fios de ouro",
      "Almofadas de veludo jacquard e tapeçarias para decoração de interiores",
      "Bolsas de mão e carteiras de tecido estruturado de alta costura"
    ],
    "troubleshootingTips": [
      "Se os fios brilhantes do jacquard repuxarem durante o bordado, coloque uma folha de plástico filme hidrossolúvel por cima do tecido antes de bordar",
      "Se o bastidor marcar o relevo do tecido, forre o aro externo com tiras de feltro macio ou use bastidor magnético",
      "Se a linha metalizada arrebentar sobre o jacquard, diminua a velocidade para 500 PPM e use agulha Metallic 80/12 com olho largo"
    ],
    "relatedTerms": [
      "Fio Metalizado",
      "Bastidor Magnético",
      "Entretela Hidrossolúvel",
      "Ponto Cheio",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-078",
      "jacquard",
      "brocado",
      "alta costura",
      "tecidos nobres",
      "decoracao",
      "fios metalizados",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "COLCHESTER, Chloë. The New Textiles: Trends and Traditions. Thames & Hudson, 2021.",
      "WILSON, Jacquie. Classic and Modern Jacquard Weaving and Surface Embellishment. Woodhead Publishing, 2022."
    ],
    "practicalExercise": "Pegue um corte de 30x30 cm de tecido jacquard adamascado. Entreteles com rasgável 60 g/m², aplique filme solúvel no topo e borde um medalhão barroco com linha ouro rica. Lave a água para retirar o filme e admire o acabamento digno de realeza.",
    "quickSummary": "Técnica de bordado em tecidos nobres com desenhos em relevo de tear, unindo luxo e precisão.",
    "beginnerExplanation": "O jacquard é aquele tecido chique e grosso com desenhos lindos tecidos no próprio pano (como toalhas de banquete e almofadas nobres). Bordar nele é maravilhoso porque o tecido é firme e o bordado fica parecendo uma joia!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-079-juncao-de-paineis-em-patchwork-no-bastidor-ith",
    "code": "J-079",
    "term": "Junção de Painéis de Patchwork no Bastidor",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês In The Hoop (dentro do bastidor) e piecing (junção de retalhos de patchwork). Técnica artesanal centenária adaptada para precisão milimétrica por comando numérico computadorizado.",
    "summary": "Método de união e quiltagem de blocos de tecidos geométricos executado 100% de forma automatizada dentro do bastidor.",
    "definition": "A junção de painéis em patchwork no bastidor ITH (In-The-Hoop Block Piecing & Joining) é a técnica de montagem de blocos de retalhos e mantas acolchoadas onde a máquina de bordar executa sequencialmente as linhas de marcação (placement), costura de união frente-com-frente (seaming stitch) e o rebatimento com pesponto decorativo ou quilting. Ao substituir o corte e a costura manual na máquina reta tradicional, o processo ITH garante margens de costura idênticas de 1/4 de polegada (6,35 mm) com precisão de frações de milímetro, permitindo a construção de colchas, caminhos de mesa e bolsas com encaixes geométricos perfeitos.",
    "technicalDetails": "Costura de união programada com comprimento de ponto de 2,2 mm a 2,5 mm para resistência mecânica. Linhas de posicionamento com ponto corrido simples de 3,0 mm. Margem de costura padronizada de 6,0 mm.",
    "construction": [
      "Entretela rasgável ou manta R1/R2 resinada presa no bastidor",
      "Linha guia de posicionamento (Placement line)",
      "Retalhos de tricoline 100% algodão cortados com sobreposição planejada",
      "Costura de união reversa frente-com-frente (Seam line)",
      "Dobra e assentamento do retalho para frente com ferro ou espátula",
      "Quilting e pontos decorativos de acabamento"
    ],
    "howItWorks": [
      "1. A máquina borda a linha guia na manta ou entretela presa no bastidor.",
      "2. O primeiro retalho de tecido é posicionado com o direito para cima cobrindo a área marcada.",
      "3. O segundo retalho é colocado por cima com o direito virado para baixo, alinhado à borda guia.",
      "4. A máquina costura a linha de união reta e para automaticamente para troca de etapa.",
      "5. O operador tomba o tecido para a frente, alisando a dobra com uma espátula plástica.",
      "6. A máquina prende o retalho desdobrado com um pesponto e inicia o próximo bloco do desenho.",
      "7. No final, todo o painel de patchwork sai do bastidor montado, quiltado e perfeitamente quadrado."
    ],
    "mainTypes": [
      "Bloco Tradicional 'Crazy Quilt' no Bastidor (Retalhos assimétricos)",
      "Bloco 'Log Cabin' Automatizado (Tiras concêntricas perfeitas)",
      "Junção de Blocos Quiltados Prontos com Fita de Emenda ITH (Quilt As You Go)"
    ],
    "characteristics": [
      "Encaixes de quinas com precisão cirúrgica sem necessidade de alfinetes",
      "Montagem rápida e padronizada para produção em série de kits e lembrancinhas",
      "Possibilidade de embutir forro e manta térmica na mesma operação",
      "Combinação de costura estrutural com bordados e apliques decorativos"
    ],
    "limitations": [
      "O tamanho final do bloco é limitado pela área útil do bastidor da máquina",
      "Exige atenção rigorosa do operador nas pausas programadas para dobrar e virar os tecidos",
      "Consome mais entretela que o método de corte tradicional de bancada"
    ],
    "numberingSystem": [
      "Margem de Costura Padrão: 1/4 de polegada (6,35 mm)",
      "Comprimento do Ponto de União: 2,0 mm a 2,5 mm",
      "Gramatura de Tricoline: 120 a 140 g/m²"
    ],
    "advantages": [
      "✔ Quinas e bicos geométricos 100% alinhados sem margem de erro humano",
      "✔ Bloco já sai acolchoado, forrado e quiltado diretamente da máquina",
      "✔ Aproveitamento total de retalhos nobres de tricoline do ateliê"
    ],
    "commonErrors": [
      "❌ Esquecer de alisar bem a dobra do tecido antes da costura de pesponto, criando pregas indesejadas",
      "❌ Retirar o tecido do bastidor antes de finalizar todas as costuras da matriz",
      "❌ Usar tecidos com elasticidade diferente no mesmo bloco (ex: malha com algodão), causando repuxo torto"
    ],
    "voceSabia": "A técnica de unir retalhos (patchwork) tem registros históricos no Egito Antigo há mais de 3.000 anos antes de Cristo, e hoje a tecnologia ITH permite fazer em 15 minutos o que uma artesã levava dias para alinhavar à mão.",
    "curiosidadeTecnica": "A resistência mecânica de uma costura de união no bastidor com ponto de 2,2 mm e linha 40 wt é equivalente à costura reta de uma máquina industrial de confecção, suportando mais de 8 kgf de tração por polegada.",
    "dicaArtrelados": "Tenha sempre ao lado da sua máquina um 'ferro de passar de ponta fina' portátil ou uma espátula de osso/madeira para vincar a costura do retalho com perfeição antes da máquina dar o próximo passo!",
    "comparisonTable": {
      "headers": [
        "Método de Montagem",
        "Precisão das Quinas",
        "Tempo Médio por Bloco",
        "Exigência de Habilidade"
      ],
      "rows": [
        [
          "Patchwork ITH no Bastidor",
          "Milimétrica (100% perfeita)",
          "10 a 15 minutos",
          "Iniciante a Intermediário"
        ],
        [
          "Costura Tradicional em Máquina Reta",
          "Depende do corte e alfinetes",
          "30 a 45 minutos",
          "Alta experiência em corte"
        ],
        [
          "Costura Manual Inglesa (EPP)",
          "Artesanal excelente",
          "2 a 4 horas por bloco",
          "Muita paciência e treino manual"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 Universal ou 75/11 SES",
      "stabilizer": "Manta R1/R2 de 100 g/m² ou Entretela Rasgável 60 g/m²",
      "threadTension": "100 gf (superior) e 20 gf (bobina com linha da cor do forro)",
      "density": "2.2 mm a 2.5 mm no ponto corrido de emenda"
    },
    "applications": [
      "Confecção de jogos americanos, descansos de panela e caminhos de mesa",
      "Necessaires, carteiras e estojos montados 100% no bastidor sem costura manual",
      "Colchas de berço personalizadas com blocos temáticos e nomes embutidos",
      "Almofadas decorativas com técnicas de 'Crazy Quilt' e bordados florais"
    ],
    "troubleshootingTips": [
      "Se o tecido dobrado desviar durante a costura, use um pedacinho de fita crepe de papel ou fita micropore para prender a ponta na manta",
      "Se a costura de união ficar frouxa, reduza o comprimento do ponto na matriz para 2,0 mm",
      "Para evitar que a manta apareça na costura, use cortador rotativo afiado para refilar os excessos com calma"
    ],
    "relatedTerms": [
      "In The Hoop (ITH)",
      "Patchwork",
      "Quilting no Bastidor",
      "Ponto Corrido",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-079",
      "patchwork ith",
      "in the hoop",
      "juncao de retalhos",
      "quilting",
      "tricoline",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "REICHEL, Kimberly. In-The-Hoop Embroidery & Machine Piecing Masterclass. St. Paul, 2023.",
      "SMITH, Alison. The Sewing and Machine Quilting Bible. Dorling Kindersley, London, 2022."
    ],
    "practicalExercise": "Abra um projeto simples de jogo americano ITH no seu bastidor 13x18 cm. Coloque a manta R1, siga os passos de costura unindo três faixas de tricoline estampada, vire, vinque com a espátula e finalize com o quilting automático. Veja o bloco nascer pronto!",
    "quickSummary": "Montagem e costura de blocos de patchwork feitas automaticamente dentro do bastidor com precisão perfeita.",
    "beginnerExplanation": "É o jeito mágico de fazer patchwork na máquina de bordar! A máquina desenha a linha guia, você coloca o retalho por cima, ela costura retinho, você vira o tecido e ela já faz o acolchoado e o acabamento tudo sozinha no bastidor!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-080-jogo-de-molas-de-retorno-da-barra-de-agulhas",
    "code": "J-080",
    "term": "Molas de Retorno da Barra de Agulhas",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim molere (flexionar, mover) e do germânico spriutan (saltar). Componente elástico de aço de mola desenvolvido na mecânica têxtil suíça do século XIX.",
    "summary": "Conjunto de molas helicoidais calibradas que impulsionam a barra de agulha de volta para o ponto morto superior a cada rotação.",
    "definition": "O jogo de molas de retorno da barra de agulhas (Needle Bar Return Springs Set) é o conjunto de molas helicoidais de tração/compressão fabricadas em aço mola de alto teor de carbono ou aço inoxidável temperado montadas ao redor de cada barra de agulha no cabeçote de bordar. Sua função mecânica primária é fornecer a força elástica instantânea necessária para elevar a barra de agulha de volta ao ponto morto superior (Top Dead Center) imediatamente após a formação da laçada, sincronizando o movimento com o comando do excêntrico e impedindo o atraso mecânico em altas velocidades (850 a 1.200 PPM).",
    "technicalDetails": "Aço mola norma DIN 17223 classe C com tratamento térmico de alívio de tensões. Constante elástica k padronizada para permitir mais de 50 milhões de ciclos de compressão sem perda de memória mecânica.",
    "construction": [
      "Corpo helicoidal de passo uniforme retificado",
      "Extremidades planas usinadas para apoio coaxial estável",
      "Guia de teflon ou bucha de bronze anti-fricção",
      "Anel elástico de retenção (circlip / trava de topo)"
    ],
    "howItWorks": [
      "1. A biela do eixo principal empurra a barra de agulha para baixo durante o ciclo de descida.",
      "2. A mola de retorno é comprimida progressivamente, acumulando energia potencial elástica.",
      "3. No ponto morto inferior, a agulha atinge o curso máximo e forma a laçada na lançadeira.",
      "4. Quando a biela inicia o retorno, a mola se expande instantaneamente.",
      "5. A energia da mola eleva a barra com velocidade supersônica de volta ao topo da carcaça do cabeçote.",
      "6. A trava mecânica do selecionador de cor engata a barra na posição inativa sem repiques ou vibração."
    ],
    "mainTypes": [
      "Mola de Compressão Cilíndrica Padrão (Tajima, Barudan, Brother PR)",
      "Mola Cônica com Passo Progressivo (Alta velocidade > 1.200 PPM)",
      "Mola com Amortecedor de Elastômero Integrado (Redução de ruído acústico)"
    ],
    "characteristics": [
      "Resposta dinâmica ultrarrápida (milissegundos por ciclo de ponto)",
      "Alta resistência à fadiga por fadiga metálica cíclica",
      "Tolerância dimensional rigorosa para evitar atrito contra a parede do cabeçote",
      "Funcionamento silencioso com lubrificação periódica por óleo mineral"
    ],
    "limitations": [
      "Sofre fadiga natural após milhões de pontos, exigindo troca preventiva anual em indústrias",
      "Mola enfraquecida causa falha de ponto e erro de engate no troca-cores",
      "Requer ferramenta específica de compressão para desmontagem segura"
    ],
    "numberingSystem": [
      "Diâmetro do Fio: 0,8 mm a 1,2 mm",
      "Comprimento Livre: 45 mm a 65 mm (conforme o modelo do cabeçote)",
      "Dureza do Aço: 48 a 52 HRC"
    ],
    "advantages": [
      "✔ Garante que a agulha saia do tecido antes do pantógrafo se movimentar",
      "✔ Evita entortamento e colisão da agulha com a chapa de pontos",
      "✔ Mantém o funcionamento suave do troca-cores sem travamentos"
    ],
    "commonErrors": [
      "❌ Cortar ou esticar a mola manualmente para tentar 'ajustar' a pressão, descalibrando o cabeçote",
      "❌ Operar com molas quebradas em agulhas pouco usadas, travando o bloco selecionador de cor",
      "❌ Deixar acumular fiapos secos com óleo velho entre as espiras da mola, reduzindo o curso livre"
    ],
    "voceSabia": "Em uma máquina industrial bordando a 1.000 pontos por minuto, a mola de retorno é comprimida e liberada quase 17 vezes por segundo, acumulando mais de 1 milhão de compressões em apenas 16 horas de trabalho!",
    "curiosidadeTecnica": "Se a mola perder 15% de sua força elástica, a agulha demorará 4 milissegundos a mais para subir. Esse microssegundo de atraso é suficiente para o pantógrafo começar a andar com a agulha ainda dentro do tecido, rasgando a peça.",
    "dicaArtrelados": "Ao lubrificar as barras de agulha semanalmente, coloque 1 gota de óleo próprio na parte superior da mola e movimente a barra para cima e para baixo. Isso mantém as molas macias e sua máquina trabalhando silenciosa como nova!",
    "comparisonTable": {
      "headers": [
        "Estado da Mola",
        "Velocidade de Retorno",
        "Risco de Batida no Pantógrafo",
        "Comportamento do Troca-Cor"
      ],
      "rows": [
        [
          "Mola Nova Calibrada",
          "Instantânea (< 15 ms)",
          "Zero (Totalmente seguro)",
          "Engate suave e perfeito"
        ],
        [
          "Mola Enfraquecida/Fadigada",
          "Lenta com atraso",
          "Alto em velocidade > 800 PPM",
          "Falso travamento e erro de agulha"
        ],
        [
          "Mola Quebrada",
          "Nula (agulha fica descida)",
          "Colisão certa de agulha",
          "Travamento geral do cabeçote"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Componente Mecânico Interno)",
      "needleType": "Compatível com todas as agulhas do sistema DBxK5 / 130/705",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Retorno elástico de barras de agulha em máquinas multicabeças industriais",
      "Sistemas de troca de cor automática com desarme por solenóide",
      "Equipamentos semi-industriais de 1 a 10 cabeçotes",
      "Substituição em kits de revisão geral de 5.000 horas de bordado"
    ],
    "troubleshootingTips": [
      "Se uma agulha específica estiver demorando a subir após o corte de linha, inspecione a mola de retorno dessa barra",
      "Se ouvir um barulho de vibração metálica 'tipo sino' no cabeçote, verifique se a mola não quebrou uma das espiras da ponta",
      "Nunca aplique graxa automotiva grossa nas molas; use apenas óleo mineral fino para máquinas de costura (ISO 10)"
    ],
    "relatedTerms": [
      "Barra de Agulha",
      "Cabeçote de Bordar",
      "Troca Automática de Cores",
      "Ponto Morto Superior",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-080",
      "mola de retorno",
      "barra de agulha",
      "cabecote",
      "mecanica de precisao",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA. Head Mechanical Parts Catalog and Needle Bar Drive Assembly. Nagoya, 2023.",
      "BARUDAN. Multi-Head Embroidery Machine Maintenance Manual. Ichinomiya, 2022."
    ],
    "practicalExercise": "Com a máquina desligada e sem linha, selecione manualmente uma agulha no cabeçote e puxe a barra de agulha para baixo delicadamente até o fim do curso. Solte-a e observe como a mola puxa a barra de volta para cima com um estalo firme e rápido.",
    "quickSummary": "Molas de aço que fazem a agulha subir rapidíssimo a cada ponto para não bater no bastidor.",
    "beginnerExplanation": "São aquelas molinhas de metal que ficam escondidas dentro do cabeçote da máquina. Toda vez que a agulha desce para dar o ponto, essa molinha empurra ela de volta para cima num piscar de olhos, para a agulha não bater no bastidor enquanto ele se mexe!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-081-juta-e-tecidos-rusticos-naturais-no-bordado-computadorizado",
    "code": "J-081",
    "term": "Bordado Computadorizado em Juta",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do bengali jhuto (trança de fibras vegetais) e do latim rusticus (do campo, natural). Fibra têxtil vegetal extraída da casca da planta Corchorus capsularis.",
    "summary": "Técnicas de estabilização, matrizaria e proteção de superfície para bordar com perfeição em fibras rústicas e tecidos vazados de juta.",
    "definition": "O bordado em juta e tecidos rústicos naturais (Burlap, Hessian & Jute Embroidery) é o conjunto de procedimentos técnicos especializados de digitalização e bastidor necessários para bordar com nitidez sobre tecidos confeccionados com fibras vegetais grossas e trama aberta e irregular. Por apresentar grandes vãos entre os fios e alta aspereza superficial, a juta requer obrigatoriamente o uso de película hidrossolúvel espessa no topo (para impedir que os pontos afundem nos vãos) e entretela rasgável encorpada ou termossolúvel no avesso, combinadas a matrizes com underlay em grade dupla (Tatami Grid Underlay) e compensação de repuxo ampliada.",
    "technicalDetails": "Estrutura de tela aberta com gramatura de 200 a 380 g/m². Densidade de fios de 3 a 5 fios por centímetro. Uso de agulha ponta bola média (SES) 80/12 ou 90/14 para não esfiapar as fibras de celulose.",
    "construction": [
      "Base de tecido de juta natural ou juta tratada engomada",
      "Entretela rasgável pesada de 80 g/m² no avesso",
      "Filme plástico hidrossolúvel de 35 a 45 micras no topo",
      "Underlay reforçado em grade perpendicular aos fios da juta",
      "Pontos em Tatami ou Ponto Cheio com largura mínima de 1,5 mm"
    ],
    "howItWorks": [
      "1. A juta é colocada no bastidor com a entretela rasgável no verso e o filme solúvel sobre a superfície.",
      "2. O filme cria uma 'ponte' lisa e estável por cima dos buracos da trama da juta.",
      "3. A agulha penetra suavemente afastando as fibras vegetais sem arrebentá-las.",
      "4. A máquina costura uma grade de underlay que ancora a área do bordado na entretela.",
      "5. Os pontos de cobertura assentam perfeitamente sobre o filme plástico, mantendo o relevo nítido e brilhante.",
      "6. Após o término, o filme plástico superior é dissolvido com borrifador de água morna ou vapor.",
      "7. O bordado fica em alto relevo com acabamento limpo e rústico de alto valor decorativo."
    ],
    "mainTypes": [
      "Juta Natural de Trama Fechada (Para sacolas ecobags, embalagens de café e artesanato nobre)",
      "Juta Rústica Aberta / Serapilheira (Para decorações campestres e detalhes de mesas rústicas)",
      "Juta Sintética / Faux Burlap de Poliéster (Lavável e com trama mais regular)"
    ],
    "characteristics": [
      "Estética rústica, sustentável, ecológica e muito valorizada no mercado 'Farmhouse' e 'Boho'",
      "Fibra natural biodegradável de alta resistência mecânica à tração",
      "Exige pontos mais largos (evitar detalhes minúsculos < 3 mm)",
      "Solta penugem vegetal que exige limpeza mais frequente da caixa de bobina"
    ],
    "limitations": [
      "Não aceita micro-letras ou contornos em ponto corrido simples, que caem dentro dos vãos da trama",
      "Tecido não elástico que pode desfiar nas bordas se não for sobreposto ou embainhado",
      "Sensível à umidade excessiva e não deve ser lavado em máquinas automáticas pesadas"
    ],
    "numberingSystem": [
      "Gramatura Típica: 250 a 350 g/m²",
      "Agulha Recomendada: 80/12 SES ou 90/14 SES",
      "Densidade da Matriz: 0,40 mm a 0,44 mm (com underlay duplo)"
    ],
    "advantages": [
      "✔ Peças com identidade artesanal rústica muito procuradas para presentes e casamentos",
      "✔ Excelente sustentação quando combinada com filme plástico hidrossolúvel",
      "✔ Baixo custo do tecido e altíssima margem de lucro no produto bordado final"
    ],
    "commonErrors": [
      "❌ Bordar diretamente na juta sem filme solúvel no topo, fazendo os pontos sumirem dentro dos buracos",
      "❌ Usar agulha ponta fina afiada (Microtex), que corta as fibras de juta e faz o tecido esburacar",
      "❌ Digitalizar letras minúsculas em ponto cheio fino, resultando em caracteres ilegíveis e tortos"
    ],
    "voceSabia": "A juta é a segunda fibra vegetal mais cultivada no mundo, perdendo apenas para o algodão. Ela é 100% biodegradável e absorve mais de 15 toneladas de gás carbônico por hectare durante o seu crescimento rápido.",
    "curiosidadeTecnica": "A poeira vegetal da juta tem alto teor de sílica natural. Por isso, ao bordar grandes produções de ecobags de juta, é fundamental lubrificar a lançadeira a cada 4 horas e aspirar os fiapos do cabeçote.",
    "dicaArtrelados": "Para fazer ecobags e sacolas de praia em juta deslumbrantes, borde um brasão com aplique de tricoline ou linho cru no centro da juta: o contraste do tecido liso com a rusticidade da juta fica um espetáculo!",
    "comparisonTable": {
      "headers": [
        "Elemento do Bordado",
        "Sem Filme Solúvel no Topo",
        "Com Filme Solúvel Hidrossolúvel",
        "Efeito Visual Final"
      ],
      "rows": [
        [
          "Ponto Cheio em Letras",
          "Pontos caem nos buracos",
          "Letra 100% nítida e elevada",
          "Excelente legibilidade"
        ],
        [
          "Ponto Tatami em Desenhos",
          "Fundo irregular e com falhas",
          "Superfície uniforme e encorpada",
          "Cobertura homogênea de cor"
        ],
        [
          "Contornos Finos",
          "Distorcidos e engolidos",
          "Alinhados e bem definidos",
          "Traço limpo e profissional"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 SES ou 90/14 SES Ponta Bola Média",
      "stabilizer": "Entretela Rasgável 80 g/m² no verso + Plástico Hidrossolúvel 40 micras no topo",
      "threadTension": "110 a 125 gf (superior) e 22 a 25 gf (bobina)",
      "density": "0.40 mm com Tatami Grid Underlay duplo"
    },
    "applications": [
      "Ecobags ecológicas e sacolas personalizadas para feiras e eventos corporativos",
      "Jogos americanos e caminhos de mesa estilo rústico chique / casamento campestre",
      "Embalagens de presentes, sacos de café gourmet e sachês aromáticos",
      "Almofadas de varanda e decorações artesanais estilo 'Farmhouse'"
    ],
    "troubleshootingTips": [
      "Se as fibras da juta ficarem espetando por cima do bordado, passe um ferro a vapor suave sobre um pano úmido para assentá-las",
      "Se a linha superior quebrar com frequência, aplique uma gota de silicone spray na carretilha e diminua a velocidade para 550 PPM",
      "Limpe a lançadeira com pincel e aspirador após cada lote de peças de juta para evitar acúmulo de poeira vegetal"
    ],
    "relatedTerms": [
      "Entretela Hidrossolúvel",
      "Underlay em Grade",
      "Bastidor para Sacolas",
      "Ponto Cheio",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-081",
      "juta",
      "burlap",
      "tecidos rusticos",
      "ecobag",
      "hidrossoluvel",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KAVITA, D. Jute and Natural Bast Fibres: Processing and Modern Embroidery Embellishment. CRC Press, 2021.",
      "GORDON, Beverly. Textiles: The Whole Story - Natural and Rustic Fibers. Thames & Hudson, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de juta comum de saco de café. Coloque entretela rasgável embaixo, coloque um pedaço de plástico filme de cozinha ou hidrossolúvel por cima e borde um coração em ponto cheio de 40 mm. Remova o plástico e veja como os pontos ficaram perfeitamente lisos por cima da trama aberta.",
    "quickSummary": "Uso de plástico solúvel no topo e entretela forte no verso para bordar em tecidos rústicos de juta sem perder pontos.",
    "beginnerExplanation": "A juta é aquele tecido rústico de saco de batata ou café que tem furinhos abertos. Para bordar nele e ficar lindo, o segredo é colocar um plastiquinho solúvel em cima antes de bordar: os pontos ficam lisinhos e não caem dentro dos buracos do tecido!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-082-jogo-de-discos-de-tensao-e-polimento-microestrutural",
    "code": "J-082",
    "term": "Discos de Tensão e Polimento",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Tensão & Calibração",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim tendere (estender, puxar) e polire (alisar, dar brilho). Processo de usinagem e acabamento superficial originário da ótica e relojoaria de alta precisão.",
    "summary": "Conjunto de pratos metálicos côncavos com espelhamento micrométrico que comprimem a linha gerando a tensão superior de bordado.",
    "definition": "O jogo de discos de tensão e polimento microestrutural (Thread Tension Discs Set & Micro-Polishing Protocol) é o conjunto de pratos metálicos usinados em aço carbono cromado, inox ou cerâmica técnica instalados no tensionador primário de cada agulha do cabeçote de bordar. Suas superfícies internas de contato são polidas em nível de rugosidade Ra < 0,05 µm (acabamento espelhado) para permitir que a linha de poliéster, viscose ou metálica deslize com coeficiente de atrito constante, sem sofrer micro-abrasão, acúmulo de estática ou variações bruscas de gramas-força durante a produção a alta rotação.",
    "technicalDetails": "Discos côncavos com diâmetro padrão de 20 mm a 25 mm. Rugosidade superficial Ra de 0,02 a 0,05 µm. Mola cônica com compressão regulada por porca micrômetro graduada de 0 a 9.",
    "construction": [
      "Disco côncavo dianteiro de aço cromado retificado",
      "Disco côncavo traseiro com ranhura guia de alinhamento",
      "Mola cônica de pressão helicoidal de resposta linear",
      "Botão de ajuste milimétrico graduado",
      "Pino de abertura pneumática ou mecânica de alívio de tensão durante o corte de linha"
    ],
    "howItWorks": [
      "1. A linha superior entra pela guia e passa pelo canal entre os dois discos côncavos polidos.",
      "2. A mola comprime os dois discos com uma força controlada (ex: 110 gramas-força).",
      "3. O contato espelhado gera resistência por atrito suave e uniforme em toda a circunferência do fio.",
      "4. Quando o estica-fio puxa a linha no ciclo do ponto, o fio corre sem solavancos nem travamentos.",
      "5. No momento do corte automático, o pino interno afasta os discos para que a linha corra livre sem quebrar o rabicho.",
      "6. A laçada no verso do tecido mantém rigorosamente a proporção áurea de 1/3 sem necessidade de ajustes constantes."
    ],
    "mainTypes": [
      "Discos de Aço Cromado com Polimento Espelhado (Padrão para fios de poliéster e viscose)",
      "Discos Revestidos com Cerâmica de Zircônia (Para fios metalizados de alto atrito)",
      "Tensionadores Eletrônicos com Monitoramento Magnético de Tensão (Sistemas i-TACS e Inteligentes)"
    ],
    "characteristics": [
      "Deslizamento do fio 100% linear e sem variações de tensão",
      "Elimina desfiamento e arrepiamento de filamentos em linhas delicadas",
      "Fácil higienização e manutenção preventiva com fio dental ou pano de microfibra",
      "Garante estabilidade do verso do bordado em todas as cores do cabeçote"
    ],
    "limitations": [
      "Micro-ranhuras causadas por fios metálicos de baixa qualidade exigem polimento com pasta diamantada ou troca dos discos",
      "Acúmulo de cera de linha e poeira entre os discos causa perda temporária de tensão",
      "Não deve ser limpo com objetos metálicos pontiagudos que risquem o espelhamento"
    ],
    "numberingSystem": [
      "Faixa de Tensão Operacional: 90 a 130 gf (gramas-força)",
      "Rugosidade Superficial: Ra 0,02 a 0,05 µm",
      "Diâmetro dos Discos: 22 mm padrão industrial"
    ],
    "advantages": [
      "✔ Elimina nós de linha e quebras misteriosas durante o bordado",
      "✔ Pontos com brilho uniforme e sem laçadas soltas na frente do tecido",
      "✔ Vida útil de mais de 10 anos quando limpos e lubrificados corretamente"
    ],
    "commonErrors": [
      "❌ Passar estilete, tesoura ou chave de fenda para tirar fiapo de dentro dos discos, riscando a superfície de cromo",
      "❌ Deixar linha de bordar fora dos discos durante a passagem de linha, bordando com tensão zero",
      "❌ Apertar o botão de tensão até o batente final para tentar consertar problema que na verdade é na canelinha"
    ],
    "voceSabia": "A linha de bordar corre pelos discos de tensão a uma velocidade linear de mais de 60 metros por minuto em máquinas industriais, o que gera calor por atrito suficiente para desgastar metais não tratados termicamente.",
    "curiosidadeTecnica": "Um risco microscópico de apenas 5 micras na face interna do disco de tensão é suficiente para cortar 1 dos 48 microfilamentos de uma linha de poliéster 40 wt a cada 100 pontos, provocando o temido 'efeito cabeleira' de linha arrebentada.",
    "dicaArtrelados": "Uma vez por mês, pegue um pedaço de 30 cm de fio dental comum (sem sabor) ou uma linha grossa embebida em álcool isopropílico e passe várias vezes para frente e para trás entre os discos de tensão. Você vai tirar toda a cera acumulada e sua tensão voltará a ficar uma seda!",
    "comparisonTable": {
      "headers": [
        "Estado dos Discos",
        "Deslizamento da Linha",
        "Comportamento da Tensão",
        "Resultado no Bordado"
      ],
      "rows": [
        [
          "Polidos e Limpos",
          "Fluido e 100% contínuo",
          "Constante em 110 gf",
          "Pontos lisos com 1/3 perfeito no verso"
        ],
        [
          "Com Resíduo de Cera/Poeira",
          "Intermitente com solavancos",
          "Oscila entre 80 e 140 gf",
          "Laçadas frouxas e falsos nós"
        ],
        [
          "Riscados por Objeto de Metal",
          "Áspero com corte de filamento",
          "Instável com quebra de linha",
          "Desfiamento constante e perda de peças"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Procedimento de Manutenção)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Calibrar com tensiômetro analógico entre 100 e 120 gf",
      "density": "Não aplicável"
    },
    "applications": [
      "Calibração de precisão da tensão superior em cabeçotes industriais e domésticos",
      "Recuperação de discos com pasta de polimento diamantada em oficinas autorizadas",
      "Resolução de quebras crônicas de linha em posições específicas do cabeçote",
      "Padronização de tensão em máquinas multicabeças para uniformidade total de lote"
    ],
    "troubleshootingTips": [
      "Se uma cor específica estiver dando laçadas soltas por cima do bordado, limpe os discos dessa agulha com pano seco e verifique se a linha entrou até o fundo dos pratinhos",
      "Para polir discos foscos ou levemente riscados, use pasta diamantada de 1 mícron em um disco de feltro giratório suave",
      "Verifique com uma lanterna se a mola interna não perdeu a pressão por ferrugem ou sujeira compactada"
    ],
    "relatedTerms": [
      "Tensão da Linha Superior",
      "Tensiômetro Analógico (Towa)",
      "Caixa de Bobina",
      "Mola Estica-Fio (Take-Up Spring)",
      "Tensão & Calibração"
    ],
    "tags": [
      "j-082",
      "discos de tensao",
      "polimento",
      "tensao superior",
      "calibracao",
      "quebra de linha",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA. Thread Tension System and Disc Polishing Maintenance Guide. Nagoya, 2023.",
      "TOWA. Tension Measurement and Calibration Manual for Industrial Embroidery Machines. Tokyo, 2022."
    ],
    "practicalExercise": "Passe uma linha de bordar colorida pelo conjunto de tensão da sua máquina. Puxe a linha com a mão enquanto gira o botão da tensão de 2 em 2 números. Sinta na ponta dos dedos como a resistência aumenta suavemente e de forma progressiva.",
    "quickSummary": "Pratos metálicos espelhados que pressionam a linha para manter os pontos perfeitamente firmes e uniformes.",
    "beginnerExplanation": "São dois pratinhos de metal brilhante que ficam juntinhos no caminho da linha. Eles apertam a linha com a força certa para o bordado não ficar frouxo e nem apertado demais, garantindo que o desenho fique lisinho e lindo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-083-juncao-de-estilos-tipograficos-e-fontes-hibridas-na-matriz",
    "code": "J-083",
    "term": "Combinação de Fontes na Matriz",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego typos (impressão, modelo) e graphia (escrita). Princípio de design gráfico e diagramação de Johannes Gutenberg (século XV) aplicado à matrizaria moderna.",
    "summary": "Combinação harmoniosa entre fontes cursivas, serifadas e geométricas na mesma matriz para monogramas e logos de alto impacto.",
    "definition": "A junção de estilos tipográficos e fontes híbridas na matriz de bordado (Hybrid Font Combinations & Typographic Hierarchy) é a técnica de composição de design e programação de matrizes onde se combinam estrategicamente duas ou mais famílias tipográficas contrastantes (como uma fonte manuscrita 'Script' cursiva de grande porte com uma fonte linear sem serifa 'Sans-Serif' em caixa alta de tamanho reduzido) respeitando as regras de proporção áurea, contraste visual e limites físicos da mecânica do ponto (altura mínima de 4 mm para letras pequenas e densidade ajustada para evitar sobreposição excessiva de pontos nos nós das letras).",
    "technicalDetails": "Relação de escala recomendada de 3:1 ou 4:1 entre o nome principal e o subtítulo. Compensação de repuxo de 0,40 mm nas cursivas e 0,25 mm nas letras lineares minúsculas com densidade de 0,38 mm.",
    "construction": [
      "Nome principal em fonte Script elegante com Ponto Cheio largo (15 mm a 40 mm)",
      "Subtítulo ou profissão em fonte Sans-Serif maiúscula em Ponto Cheio fino ou Ponto Costura Triplo (4 mm a 6 mm)",
      "Espaçamento entre caracteres (kerning) ampliado em 15% para evitar fusão de letras",
      "Underlay centralizado (Center Walk) nas hastes finas e zigue-zague nas hastes largas"
    ],
    "howItWorks": [
      "1. O digitalizador define o texto principal em fonte cursiva caligráfica, ajustando a inclinação dos pontos a cada curva da letra.",
      "2. O texto secundário (ex: 'Médico', 'Ateliê', 'Advocacia') é composto em caixa alta sem serifa para máxima legibilidade.",
      "3. O software calcula a ordem de costura para que o texto principal seja bordado primeiro e os detalhes menores na sequência.",
      "4. A máquina executa as letras grandes com brilho intenso de ponto cheio e as letras pequenas com micro-pontos definidos.",
      "5. A hierarquia tipográfica guia o olhar do observador com elegância e profissionalismo.",
      "6. A peça bordada ganha status de luxo personalizado e facilidade de leitura imediata."
    ],
    "mainTypes": [
      "Combinação Script Cursiva + Sans-Serif Caixa Alta (Padrão Ouro para Jalecos e Uniformes Médicos)",
      "Combinação Serifada Clássica + Monograma Entrelaçado (Para Enxovais e Brasões de Casamento)",
      "Combinação Vintage Display + Letras Cárter (Para Marcas de Roupas Jeans e Estilo Urbano)"
    ],
    "characteristics": [
      "Composição visualmente equilibrada e de altíssima legibilidade",
      "Valoriza o nome da pessoa mantendo a descrição da função ou empresa bem legível",
      "Diferenciação estética de alto nível frente a matrizes genéricas e amadoras",
      "Adaptação perfeita para uniformes executivos, toalhas de lavabo e brindes de luxo"
    ],
    "limitations": [
      "Fontes manuscritas muito finas não podem ser reduzidas a menos de 10 mm de altura",
      "Letras em caixa alta não devem ter serifa complexa se a altura for menor que 5 mm",
      "Exige controle minucioso do espaçamento (tracking/kerning) para não embolar linhas"
    ],
    "numberingSystem": [
      "Altura da Fonte Principal: 18 mm a 35 mm",
      "Altura do Subtítulo: 4 mm a 6 mm (mínimo técnico legível)",
      "Proporção de Escala: 3 para 1"
    ],
    "advantages": [
      "✔ Visual extremamente elegante e profissional em jalecos e enxovais",
      "✔ Leitura clara tanto de longe (nome principal) quanto de perto (subtítulo)",
      "✔ Agilidade de aprovação do layout pelo cliente final"
    ],
    "commonErrors": [
      "❌ Misturar duas fontes manuscritas diferentes no mesmo bordado, criando confusão visual e poluição estética",
      "❌ Tentar bordar letras cursivas com menos de 5 mm de altura, resultando em nós de linha ilegíveis",
      "❌ Não alinhar o centro óptico dos dois blocos de texto, deixando o bordado com aspecto torto"
    ],
    "voceSabia": "A combinação de fontes manuscritas com letras romanas em caixa alta começou na época dos selos postais e certificados imperiais do século XVIII para transmitir ao mesmo tempo humanidade (assinatura) e autoridade (título).",
    "curiosidadeTecnica": "Em fontes manuscritas, a inclinação dos pontos cheios deve acompanhar a caligrafia a cada 5 graus de curva. Se os pontos forem digitalizados todos no mesmo ângulo reto de 90°, a letra perde 60% do seu brilho e profundidade.",
    "dicaArtrelados": "Para bordar jalecos médicos perfeitos, use a fonte cursiva para o nome do doutor (ex: 'Dra. Camila Ribeiro') com altura de 15 mm e a especialidade embaixo em caixa alta (ex: 'PEDIATRIA') com altura de 5 mm e espaçamento aberto: fica impecável!",
    "comparisonTable": {
      "headers": [
        "Composição Tipográfica",
        "Legibilidade de Longe",
        "Harmonia Visual",
        "Indicação de Uso"
      ],
      "rows": [
        [
          "Script Grande + Sans-Serif Pequena",
          "Excelente (10/10)",
          "Harmonia Perfeita por Contraste",
          "Jalecos, uniformes e marcas"
        ],
        [
          "Duas Fontes Cursivas Juntas",
          "Péssima (3/10)",
          "Conflitante e Poluída",
          "Não recomendada"
        ],
        [
          "Duas Fontes Caixa Alta Iguais",
          "Média (6/10)",
          "Monótona e sem Destaque",
          "Placas e sinalizações simples"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES ou 70/10 FFG Ponta Fina para micro-letras",
      "stabilizer": "Entretela Rasgável 60 g/m² no verso + Filme Solúvel no topo em tecidos texturizados",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.38 mm na cursiva / 0.40 mm no subtítulo"
    },
    "applications": [
      "Bordado de jalecos de médicos, dentistas, veterinários e nutricionistas",
      "Uniformes corporativos de gerentes, atendentes e recepcionistas de hotel",
      "Monogramas personalizados para enxovais de noiva e toalhas de banho",
      "Kits de maternidade com o nome do bebê e a data de nascimento"
    ],
    "troubleshootingTips": [
      "Se os buraquinhos de letras fechadas como 'e', 'a', 'o' fecharem, aumente o tamanho da letra em 1 mm ou reduza a compensação de repuxo para 0,20 mm",
      "Se as letras pequenas ficarem duras como pedra, use linha de espessura 60 wt com agulha 65/9",
      "Sempre borde uma amostra de teste em retalho antes de aplicar diretamente no jaleco do cliente"
    ],
    "relatedTerms": [
      "Micro-Lettering (Micro-Letras)",
      "Ponto Cheio (Satin)",
      "Compensação de Repuxo",
      "Densidade de Ponto",
      "Programação de Bordado"
    ],
    "tags": [
      "j-083",
      "tipografia",
      "fontes hibridas",
      "monogramas",
      "jalecos",
      "letras pequenas",
      "matrizaria",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BRINGHURST, Robert. The Elements of Typographic Style Applied to Embroidery. Hartley & Marks, 2022.",
      "WILCOM. Lettering and Typography Guidelines for Embroidery Software. Sydney, 2023."
    ],
    "practicalExercise": "No seu software de bordado, escreva seu primeiro nome com uma fonte cursiva de 20 mm de altura e embaixo escreva 'ATELIÊ DE BORDADOS' com fonte Arial ou Helvética em caixa alta de 5 mm de altura. Borde em um retalho de tecido e veja a elegância do resultado.",
    "quickSummary": "Técnica de misturar letras manuscritas elegantes com letras de forma pequenas para criar nomes perfeitos.",
    "beginnerExplanation": "É o jeito chique de montar nomes para bordar em jalecos e toalhas, colocando o nome principal em letra cursiva bonita e a profissão embaixo em letrinhas de forma bem retinhas e fáceis de ler!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-084-jogo-de-garras-de-fixacao-para-bastidor-de-bone",
    "code": "J-084",
    "term": "Garras de Fixação para Bastidor de Boné",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do germânico garfa (gancho, garra de retenção) e do latim fixare (prender firmemente). Dispositivo de travamento rápido desenvolvido para a indústria de confecção esportiva.",
    "summary": "Presilhas de aço inoxidável e clips articulados que travam a aba e a fita de suor do boné no aro curvo do bastidor.",
    "definition": "O jogo de garras de fixação para bastidor de boné (Cap Frame Clamps, Clips & Retention Band) é o conjunto de presilhas elásticas de aço mola, ganchos de fixação rápida e cinta de aço perfurada articulada que compõem o sistema de entelamento de bonés montados (Cap Frame System). Sua finalidade mecânica é prender firmemente a copa frontal do boné contra a curvatura cilíndrica de 270 graus do bastidor, puxando a fita de suor (sweatband) para fora da área de costura e tensionando a entretela resinada sem permitir folgas ou deslocamentos durante o movimento rotacional do pantógrafo.",
    "technicalDetails": "Fabricadas em fita de aço mola inoxidável com ganchos usinados de engate rápido. Cinta de retenção dentada com alavanca de pressão excêntrica ajustável por parafuso milimétrico.",
    "construction": [
      "Cinta periférica flexível de aço inox com guia de aba",
      "Grampos de travamento lateral (Side Clips) para prender as abas do boné",
      "Alavanca de pressão excêntrica de aperto rápido",
      "Canal guia de encaixe na estação de montagem de bancada (Cap Gauge / Framing Jig)"
    ],
    "howItWorks": [
      "1. O bastidor de boné é fixado na estação de montagem de bancada.",
      "2. A entretela de boné (tearaway resinada de 80 g/m²) é encaixada nos pinos guias do aro.",
      "3. O boné tem sua fita de suor virada para fora e é vestido sobre a curvatura do cilindro.",
      "4. A cinta de aço com as garras é puxada por cima da costura de união entre a aba e a copa.",
      "5. A alavanca excêntrica é travada, exercendo pressão uniforme de 360° em toda a borda.",
      "6. Os grampos laterais prendem as costas do boné mantendo a sarja esticada como a pele de um tambor.",
      "7. O conjunto é transferido para o motorista de boné (Cap Driver) da máquina para bordar com precisão total."
    ],
    "mainTypes": [
      "Cinta de Garras para Boné Tradicional 6 Painéis (Com ranhura central para a costura)",
      "Cinta de Garras para Boné Modelo 'Trucker' com Espuma Frontal",
      "Clips Laterais com Mola de Borboleta para Bonés Fechados (Flexfit)"
    ],
    "characteristics": [
      "Fixação rígida sem escorregamento mesmo na velocidade de 750 a 900 PPM",
      "Preserva o formato original da copa do boné sem vincos permanentes",
      "Permite bordados amplos em arco contínuo de até 270 graus (de orelha a orelha)",
      "Construção metálica de alta resistência para milhares de ciclos diários"
    ],
    "limitations": [
      "Garras mal ajustadas podem amassar a aba rígida ou marcar o tecido de sarja clara",
      "Exige treinamento do operador para entelar no esquadro exato da costura central",
      "Não é compatível com bastidores planos convencionais de mesa"
    ],
    "numberingSystem": [
      "Ângulo de Abertura: 270° (Wide Cap Frame) ou 180° (Standard)",
      "Espessura da Fita de Aço: 0,6 mm a 0,8 mm",
      "Altura Máxima de Bordado: 55 mm a 65 mm"
    ],
    "advantages": [
      "✔ Garante que o desenho fique 100% centralizado em relação à costura do boné",
      "✔ Elimina o empenamento e as quebras de agulha provocadas por tecido solto",
      "✔ Agiliza o tempo de colocação de bonés na linha de produção"
    ],
    "commonErrors": [
      "❌ Deixar a fita de suor dentro do campo de bordado, costurando o forro interno do boné junto com o desenho",
      "❌ Apertar a alavanca com pressão excessiva, entortando a fita de aço ou rasgando a entretela",
      "❌ Não usar os grampos laterais, fazendo o boné estufar na parte superior durante o bordado"
    ],
    "voceSabia": "A estrutura curva dos bonés de beisebol modernos exige que a máquina borde em um eixo rotativo especial de 3 dimensões (eixo cilíndrico), transformando o movimento plano X/Y em rotação angular.",
    "curiosidadeTecnica": "Se a fita de garras tiver uma folga de apenas 1 milímetro na base da aba, a vibração do pantógrafo fará o boné subir e descer (efeito 'flagging') a cada penetração da agulha, causando dezenas de quebras de linha.",
    "dicaArtrelados": "Ao prender o boné na estação de montagem, passe a mão alisando o tecido do centro para as laterais antes de travar as garras. O segredo do boné perfeito é o tecido ficar firme e liso sem formar nenhuma barriga!",
    "comparisonTable": {
      "headers": [
        "Dispositivo de Fixação",
        "Rigidez na Curva",
        "Área de Bordado Possível",
        "Risco de Deslocamento"
      ],
      "rows": [
        [
          "Cinta de Garras 270° Completa",
          "Máxima (Esticada como tambor)",
          "Ampla (Frente e laterais juntas)",
          "Quase Zero"
        ],
        [
          "Fixação com Alfinetes/Fitas",
          "Péssima e perigosa",
          "Apenas frente pequena",
          "Altíssimo risco de quebra de agulha"
        ],
        [
          "Garras sem Grampos Laterais",
          "Média (topo fica solto)",
          "Frente centralizada",
          "Risco de perda de registro"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM em bonés estruturados",
      "needleType": "DBxK5 80/12 SES ou 90/14 SES",
      "stabilizer": "Entretela Especial para Boné 80 a 100 g/m² resinada",
      "threadTension": "115 a 125 gf (superior) e 25 gf (bobina)",
      "density": "0.40 mm a 0.44 mm"
    },
    "applications": [
      "Bordado frontal e lateral em bonés promocionais e de marcas de streetwear",
      "Personalização de bonés de times de futebol, beisebol e esportes a motor",
      "Bordados em relevo 3D Foam de alta densidade em copas de sarja grossa",
      "Produção seriada em cabeçotes industriais múltiplos com troca rápida"
    ],
    "troubleshootingTips": [
      "Se o boné ficar com marcas de dentes na sarja, forre a parte interna da cinta de aço com fita crepe automotiva",
      "Se a costura central do boné desviar para o lado, solte a garra e recoloque o boné guiando-se pelo vinco central da estação de montagem",
      "Substitua as molas dos grampos laterais caso percam a pressão de aperto com o tempo de uso"
    ],
    "relatedTerms": [
      "Bastidor de Boné (Cap Frame)",
      "Cap Driver (Acionador de Boné)",
      "3D Foam (EVA para Boné)",
      "Entretela para Boné",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-084",
      "garras de bone",
      "cap frame",
      "bastidor de bone",
      "streetwear",
      "bones estruturados",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA. Cap Frame System Operation and Maintenance Manual. Nagoya, 2023.",
      "BARUDAN. Cap Embroidery Techniques and Clamping Adjustments. Ichinomiya, 2022."
    ],
    "practicalExercise": "Coloque um boné na estação de montagem do bastidor de boné. Posicione a entretela resinada, dobre a fita de suor para trás, encaixe a cinta de garras exatamente no vinco da aba e trave a alavanca. Dê leves batidinhas no centro do boné para sentir a firmeza do entelamento.",
    "quickSummary": "Travas e presilhas de metal que seguram o boné bem firme e esticadinho no bastidor redondo.",
    "beginnerExplanation": "São aquelas presilhas e cintas de ferro feitas especialmente para prender o boné no aro curvo da máquina. Elas deixam a frente do boné bem durinha e esticada para a máquina bordar sem enrugar nada!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-085-jogo-de-guias-e-passa-fios-de-ceramica-zirconia",
    "code": "J-085",
    "term": "Guias de Linha Cerâmicos Zircônia",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do árabe zarqun (dourado, brilhante, zircão) e do grego keramos (argila queimada, cerâmica técnica). Inovação da engenharia de materiais aeroespaciais aplicada a máquinas de alta velocidade.",
    "summary": "Ilhoses e tubos de cerâmica técnica ultrafina com coeficiente de atrito quase nulo para condução suave de fios de alta velocidade.",
    "definition": "O jogo de guias e passa-fios de cerâmica zircônia (Zirconia Ceramic Eyelets & Thread Guides) é o conjunto de anéis, ilhoses e tubos de cerâmica técnica avançada (óxido de zircônio estabilizado com ítria - Y-TZP) montados em todos os pontos de desvio do trajeto da linha, desde o suporte dos cones até o bloco de tensão do cabeçote. Sua altíssima dureza mecânica (superior ao aço temperado) e superfície ultra-polida eliminam o atrito por fricção, dissipam a eletricidade estática e impedem que linhas abrasivas (como fios metalizados de lurex e fios sintéticos) criem ranhuras nos guias, garantindo fluxo de linha contínuo e sem quebras a 1.000 PPM.",
    "technicalDetails": "Dureza Vickers > 1.200 HV. Coeficiente de atrito cinético < 0,10 contra fios de poliéster. Alta condutividade térmica que dissipa o calor gerado pelo desbobinamento em alta velocidade.",
    "construction": [
      "Ilhoses de cerâmica branca ou amarela com furo calibrado de raio arredondado",
      "Base de suporte em polímero amortecedor de vibrações",
      "Polimento interno espelhado por diamante líquido (Ra < 0,02 µm)",
      "Design anti-estático com aterramento passivo de carcaça"
    ],
    "howItWorks": [
      "1. A linha sai do cone no porta-fios e entra no primeiro passa-fio de cerâmica zircônia.",
      "2. A cerâmica lisa conduz o fio em ângulos de desvio sem oferecer resistência de atrito.",
      "3. O calor provocado pelo atrito do fio em alta rotação é dissipado instantaneamente pelo material cerâmico.",
      "4. Fios metalizados com películas de alumínio deslizam sem descascar ou perder o brilho.",
      "5. A linha chega aos discos de tensão com integridade estrutural perfeita e sem torções anômalas.",
      "6. A laçada é formada na agulha com máxima estabilidade e sem penugem acumulada nos guias."
    ],
    "mainTypes": [
      "Ilhós Cerâmico Tipo Olho de Boi (Para suporte superior de cones)",
      "Tubos Cerâmicos de Passagem Curva (Para trajetos internos de cabeçote)",
      "Guias de Cerâmica Ranhurada para Sensores de Quebra de Linha"
    ],
    "characteristics": [
      "Resistência infinita ao desgaste por abrasão (nunca sofre ranhuras por fios de poliéster)",
      "Não quebra e nem descasca os filamentos delicados de linhas de bordar",
      "Propriedade anti-estática que evita que a linha grude na carcaça da máquina",
      "Acabamento estético nobre e fácil limpeza com pano seco"
    ],
    "limitations": [
      "Material frágil a impactos diretos de ferramentas duras (não bater com martelo ou chaves de fenda)",
      "Custo mais elevado que passa-fios comuns de arame de aço dobrado",
      "Exige substituição caso sofra trincas por queda de objetos pesados"
    ],
    "numberingSystem": [
      "Dureza: 1.200 a 1.400 HV (Escala Vickers)",
      "Diâmetro Interno Padrão: 2,5 mm a 4,0 mm",
      "Material: Zircônia Y-TZP de Alta Pureza"
    ],
    "advantages": [
      "✔ Reduz em até 70% as quebras inexplicáveis de fios metalizados e de viscose",
      "✔ Nunca enferruja e nem cria rebarbas que cortam a linha",
      "✔ Mantém a tensão uniforme do começo ao fim do cone de linha"
    ],
    "commonErrors": [
      "❌ Utilizar passa-fios de ferro doce que com o tempo criam canais cortantes feitos pelo próprio fio de poliéster",
      "❌ Limpar guias cerâmicos com lixas abrasivas que tiram o polimento espelhado original",
      "❌ Apertar parafusos de fixação dos suportes de cerâmica com força excessiva, trincando a peça"
    ],
    "voceSabia": "A cerâmica de zircônia é o mesmo material utilizado na blindagem térmica de ônibus espaciais e na fabricação de próteses odontológicas e implantes de alta precisão pela sua dureza extrema e compatibilidade biológica.",
    "curiosidadeTecnica": "O fio de poliéster de bordar possui dióxido de titânio (TiO2) em sua composição como agente fosqueante. Esse mineral funciona como uma micro-lixa microscópica, sendo capaz de cortar um arame de aço comum em menos de 6 meses de produção contínua.",
    "dicaArtrelados": "Se você borda muito fio dourado ou prateado metalizado, verifique se os passa-fios da sua máquina são de cerâmica! Eles fazem uma diferença absurda, deixando a linha correr soltinha como água sem arrebentar!",
    "comparisonTable": {
      "headers": [
        "Material do Guia-Fio",
        "Resistência ao Desgaste",
        "Atrito no Fio Metalizado",
        "Vida Útil em Ateliê"
      ],
      "rows": [
        [
          "Cerâmica Zircônia Y-TZP",
          "Extrema (Não risca nunca)",
          "Mínimo (Deslizamento perfeito)",
          "Mais de 15 anos"
        ],
        [
          "Aço Cromado Padrão",
          "Média (risca após 1 a 2 anos)",
          "Moderado (aquece em alta rotação)",
          "3 a 5 anos"
        ],
        [
          "Arame de Ferro / Plástico",
          "Baixa (cria ranhura rápida)",
          "Alto (desfia e quebra a linha)",
          "Menos de 1 ano"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Componente Fixo do Cabeçote)",
      "needleType": "Compatível com todos os tipos de agulha",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Guiamento de linha em máquinas industriais multicabeças de alta velocidade (1.000+ PPM)",
      "Bordados contínuos com fios metalizados, lurex e fios refletivos técnicos",
      "Upgrades de precisão em máquinas de bordar domésticas e industriais",
      "Sistemas de alimentação de linha sem resistência em confecções de alto volume"
    ],
    "troubleshootingTips": [
      "Se a linha estiver desfiando antes de chegar na agulha, passe o dedo indicador nos ilhoses para sentir se há alguma trinca ou lasca no anel cerâmico",
      "Limpe a entrada dos passa-fios mensalmente com um cotonete com álcool para tirar restos de cera e fiapos",
      "Substitua imediatamente qualquer ilhós cerâmico que apresente trinca ou rachadura visível"
    ],
    "relatedTerms": [
      "Trajeto da Linha Superior",
      "Fio Metalizado",
      "Cabeçote de Bordar",
      "Tensão da Linha Superior",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-085",
      "guia de ceramica",
      "zirconia",
      "passa fios",
      "fios metalizados",
      "anti atrito",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "CERAMTEC. Advanced Technical Ceramics for High-Speed Textile and Sewing Machinery. Plochingen, 2022.",
      "TAJIMA. High Performance Thread Path & Ceramic Eyelet Specifications. Nagoya, 2023."
    ],
    "practicalExercise": "Examine a torre de linhas da sua máquina. Toque nos anéis branquinhos por onde a linha passa antes de descer para o cabeçote. Note como a superfície é extremamente lisa e fria ao toque: essa é a cerâmica técnica trabalhando para seu bordado.",
    "quickSummary": "Anéis de cerâmica ultra-lisa que guiam a linha sem atrito e sem deixar o fio quebrar.",
    "beginnerExplanation": "São aquelas pecinhas redondas branquinhas que parecem de porcelana por onde a linha passa lá no alto da máquina. Elas são super lisinhas e duras para a linha correr sem esquentar, sem desfiar e sem arrebentar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-086-juncao-de-cores-com-degrade-suave-em-ponto-cheio",
    "code": "J-086",
    "term": "Degradê Suave em Ponto Cheio",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês dégradé (suavização progressiva de tons) e do latim junctio (união harmoniosa). Técnica de pintura clássica transposta para o bordado artístico.",
    "summary": "Técnica de matrizaria que intercala pontos cheios de densidade decrescente e bordas dentadas para fundir duas ou mais cores.",
    "definition": "A junção de cores com degradê suave em ponto cheio (Satin Blending, Feather Edge & Color Merging) é a técnica avançada de digitalização artística onde duas ou mais camadas contíguas de ponto cheio (Satin) têm suas extremidades programadas com comprimentos de ponto variáveis (efeito pluma / feather stitch) e densidades graduais decrescentes. Ao sobrepor as pontas dentadas da primeira cor com as raízes intercaladas da segunda cor, o olho humano percebe uma transição tonal contínua e aveludada, sem linhas de corte bruscas, sendo fundamental para bordar pétalas de flores realistas, pelagem de animais, pôr do sol e logomarcas com gradientes.",
    "technicalDetails": "Graduação de densidade variando de 0,40 mm (base cheia) até 1,20 mm (zona de fusão). Variação estocástica de comprimento de ponto entre 20% e 60% nas bordas de encontro.",
    "construction": [
      "Camada base com cor mais escura programada com borda plumada (Feather Edge)",
      "Underlay leve em ponto corrido central para não criar rigidez na zona de fusão",
      "Segunda camada com cor mais clara intercalando os pontos nos espaços vazios",
      "Ângulo de ponto compartilhado rigorosamente paralelo entre as duas cores"
    ],
    "howItWorks": [
      "1. A primeira cor borda o início do objeto com densidade normal (0,40 mm).",
      "2. Conforme se aproxima da zona de transição, os pontos começam a alternar comprimentos longos e curtos.",
      "3. A densidade da primeira cor vai se abrindo progressivamente para 0,80 mm a 1,00 mm.",
      "4. A máquina troca para a segunda cor de linha (ex: de vermelho para amarelo).",
      "5. A segunda cor inicia com pontos intercalados penetrando exatamente entre os pontos da primeira cor.",
      "6. A densidade da segunda cor fecha novamente para 0,40 mm ao chegar no final do bloco.",
      "7. A fusão das duas linhas cria a ilusão óptica perfeita de uma terceira cor intermediária (laranja)."
    ],
    "mainTypes": [
      "Degradê Linear Bicolor (Transição direta de um tom para outro em colunas retas)",
      "Degradê Radial / Curvilíneo em Pétalas de Flores (Com variação angular de pontos)",
      "Degradê Multi-Tonal com 3 a 5 Cores (Para retratos hiper-realistas e arte botânica)"
    ],
    "characteristics": [
      "Efeito visual hiper-realista e artístico de alta complexidade",
      "Toque extremamente macio e flexível sem placas endurecidas de linha",
      "Elimina a aparência artificial de blocos de cores chapadas e duras",
      "Exige sincronismo absoluto de ângulo de ponto entre as camadas"
    ],
    "limitations": [
      "Requer linhas de brilho similar (ex: poliéster trilobal ou viscose da mesma marca)",
      "Aumenta ligeiramente a contagem total de pontos da matriz",
      "Exige software de matrizaria avançado com ferramenta nativa de 'Feathering' ou 'Gradient Fill'"
    ],
    "numberingSystem": [
      "Densidade da Zona de Fusão: 0,80 mm a 1,20 mm",
      "Variação de Pluma (Feathering): 30% a 50%",
      "Comprimento Máximo de Ponto: 7,0 mm para evitar laçadas soltas"
    ],
    "advantages": [
      "✔ Transições de cores perfeitas com efeito de pintura a óleo no tecido",
      "✔ Dá vida, profundidade e tridimensionalidade a flores, animais e rostos",
      "✔ Agrega altíssimo valor artístico e financeiro ao trabalho de bordado"
    ],
    "commonErrors": [
      "❌ Fazer as duas cores se encontrarem em linha reta com 100% de densidade, criando uma emenda grossa e feia",
      "❌ Usar ângulos de pontos diferentes entre a primeira e a segunda cor, quebrando o brilho da linha",
      "❌ Sobrepor camadas cheias sem abrir a densidade, criando uma área dura que quebra agulhas"
    ],
    "voceSabia": "A técnica de degradê no bordado manual é conhecida há séculos como 'Ponto Pintura' ou 'Needle Painting', onde bordadeiras renascentistas usavam fios de seda pura para imitar as pinturas da Capela Sistina.",
    "curiosidadeTecnica": "O cérebro humano não consegue distinguir fios individuais de 0,12 mm a uma distância de 50 cm; quando duas cores estão intercaladas com espaçamento de 0,6 mm, o sistema visual faz a mistura óptica aditiva das cores automaticamente.",
    "dicaArtrelados": "Para fazer uma pétala de rosa deslumbrante, use 3 tons de linha (vinho, vermelho vivo e coral claro). Use o efeito pluma com 40% de variação e mantenha os pontos todos apontando para o miolo da flor: o resultado fica digno de museu!",
    "comparisonTable": {
      "headers": [
        "Técnica de Transição",
        "Aspecto Visual",
        "Toque do Bordado",
        "Realismo Artístico"
      ],
      "rows": [
        [
          "Degradê com Efeito Pluma (Satin Blending)",
          "Suave e contínuo sem emendas",
          "Muito macio e flexível",
          "Hiper-realista (10/10)"
        ],
        [
          "Encontro Chapado de Cores",
          "Linha divisória dura e marcada",
          "Borda espessa e rígida",
          "Artificial / Desenho simples"
        ],
        [
          "Tatami com Degradê de Densidade",
          "Texturizado e fosco",
          "Leve e plano",
          "Bom para fundos grandes"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 700 PPM",
      "needleType": "75/11 SES Ponta Bola Leve ou 70/10 FFG",
      "stabilizer": "Entretela Rasgável 60 g/m² ou Entretela de Recorte Macia",
      "threadTension": "100 a 110 gf (linha superior) e 20 gf (bobina)",
      "density": "Gradiente de 0.40 mm a 1.00 mm com efeito pluma"
    },
    "applications": [
      "Bordados realistas de aves, animais de estimação e retratos humanos",
      "Artes botânicas com pétalas de orquídeas, rosas, folhas e frutos",
      "Logomarcas corporativas de alta tecnologia com degradês modernos",
      "Bordados sacros e mantos religiosos com efeitos de luz divina e auréolas"
    ],
    "troubleshootingTips": [
      "Se a transição ficar com 'buracos' mostrando o tecido, aumente a sobreposição da zona plumada em +1,0 mm",
      "Se o bordado ficar duro no meio da flor, certifique-se de que a densidade na zona de encontro foi reduzida para metade da densidade normal",
      "Use linhas de poliéster trilobal brilhante para realçar o efeito de reflexo de luz no degradê"
    ],
    "relatedTerms": [
      "Feather Stitch (Efeito Pluma)",
      "Ponto Cheio (Satin)",
      "Ponto Pintura",
      "Densidade de Ponto",
      "Programação de Bordado"
    ],
    "tags": [
      "j-086",
      "degrade",
      "satin blending",
      "efeito pluma",
      "bordado realista",
      "matrizaria artistica",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. Artistic Shading, Feathering and Color Blending Manual. Sydney, 2023.",
      "BURR, Trish. Needle Painting Embroidery: Fresh Ideas for Color Shading and Blending. Search Press, 2022."
    ],
    "practicalExercise": "No seu programa de matrizes, crie um retângulo de 30x50 mm dividido em duas cores (azul marinho e azul celeste). Ative a ferramenta 'Feather Edge' (Borda Plumada) na junção das duas cores com 50% de variação. Borde em um tecido branco e encante-se com a transição perfeita!",
    "quickSummary": "Intercalamento de pontos cheios dentados para criar transições suaves e realistas de cores sem emendas.",
    "beginnerExplanation": "É o jeito mágico de misturar duas cores de linha na máquina sem ficar aquela linha reta feia dividindo as cores. As pontinhas das linhas entram umas dentro das outras, criando aquele degradê lindo de pôr do sol ou pétala de flor!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-087-jogo-de-chaves-allen-e-torx-especificas-para-cabecote",
    "code": "J-087",
    "term": "Chaves de Precisão para Cabeçote",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Homenagem à Allen Manufacturing Company (1910, EUA) e à Camcar Textron (patente Torx de 6 pontas estreladas em 1967). Ferramentas padronizadas de torque milimétrico para mecânica de alta precisão.",
    "summary": "Estojo de ferramentas manuais milimétricas em aço cromo-vanádio calibradas para parafusos de cabeçote, chapa de agulha e lançadeira.",
    "definition": "O jogo de chaves Allen (sextavadas hexagonais) e Torx (estrela de seis pontas) específicas para cabeçote (Precision Hex & Torx L-Key Tool Set) é o conjunto de ferramentas manuais de mecânica de precisão fabricadas em aço cromo-vanádio ou cromo-molibdênio usinado com tolerâncias centesimais (medidas métricas padrão 1.5 mm, 2.0 mm, 2.5 mm, 3.0 mm, 4.0 mm e Torx T10, T15, T20). São projetadas especialmente com pontas esféricas (Ball-End) e hastes longas para permitir acesso ergonômico aos parafusos embutidos de fixação de agulhas, regulagem da distância da lançadeira, chapa de pontos e alinhamento do calcador sem espanar as fendas metálicas.",
    "technicalDetails": "Aço cromo-vanádio temperado norma DIN ISO 2936 com dureza 56 a 60 HRC. Ponta com magnetismo controlado para reter parafusos minúsculos sem derrubá-los dentro da caixa de engrenagens.",
    "construction": [
      "Chave em formato 'L' com braço longo de alcance profundo e braço curto de alto torque",
      "Ponta esférica (Ball Point) no braço longo permitindo aperto em ângulos de até 25°",
      "Ponta sextavada reta no braço curto para desaperto com força controlada",
      "Tratamento superficial fosfatizado ou niquelado anti-corrosão",
      "Estojo plástico compacto com marcação em relevo de cada milímetro"
    ],
    "howItWorks": [
      "1. O operador escolhe a chave da medida métrica exata do parafuso (ex: Allen 1.5 mm para o parafuso de prender a agulha).",
      "2. A ponta usinada encaixa perfeitamente no orifício sextavado sem folga lateral.",
      "3. O braço longo permite alcançar parafusos escondidos atrás da barra do calcador ou dentro do cárter da lançadeira.",
      "4. O operador gira a chave suavemente no sentido anti-horário para soltar ou horário para fixar.",
      "5. A geometria precisa distribui o torque pelas seis faces do parafuso, impedindo que a cabeça arredonde.",
      "6. A máquina recebe manutenção rápida, segura e sem riscos de travamento mecânico."
    ],
    "mainTypes": [
      "Jogo de Chaves Allen Métricas com Ponta Esférica (1.5 mm a 5.0 mm)",
      "Jogo de Chaves Torx T-Handle com Cabo Anatômico (Para parafusos de carcaça e motores)",
      "Chave de Fenda Curta 'Toco' para Troca Rápida de Chapa de Agulha"
    ],
    "characteristics": [
      "Encaixe milimétrico perfeito que protege parafusos originais da máquina",
      "Alcance facilitado em locais estreitos com a ponta esférica angular",
      "Alta durabilidade sem deformação das quinas mesmo sob torque firme",
      "Ferramental indispensável na bancada de qualquer bordadeira e técnico"
    ],
    "limitations": [
      "Nunca usar chaves em polegadas (SAE) em máquinas métricas japonesas/chinesas (espanará os parafusos)",
      "A ponta esférica do braço longo não deve ser usada para aplicar torque de aperto final máximo",
      "Requer limpeza periódica para não acumular óleo sujo e graxa no estojo"
    ],
    "numberingSystem": [
      "Medidas Allen Mais Usadas: 1.5 mm (agulha), 2.0 mm (chapa/calcador), 2.5 mm e 3.0 mm (lançadeira)",
      "Medidas Torx Mais Usadas: T10, T15, T20",
      "Norma Dimensional: DIN 911 / ISO 2936"
    ],
    "advantages": [
      "✔ Evita a perda de peças e parafusos espanados que paralisam a produção",
      "✔ Agiliza a troca de agulhas e a regulagem da lançadeira em minutos",
      "✔ Segurança total para o operador sem machucar as mãos no cabeçote"
    ],
    "commonErrors": [
      "❌ Tentar soltar parafuso de 1.5 mm com chave desgastada ou de 1/16 de polegada, arredondando a cabeça do parafuso",
      "❌ Apertar o parafuso da agulha com força bruta de alicate, quebrando a rosca da barra de agulha",
      "❌ Usar pontas de faca ou chaves de fenda inadequadas para mexer em parafusos Allen"
    ],
    "voceSabia": "A cabeça sextavada Allen foi patenteada na década de 1910 para substituir os parafusos de cabeça quadrada saliente que causavam graves acidentes de trabalho ao prenderem nas roupas dos operários em eixos rotativos industriais.",
    "curiosidadeTecnica": "O parafuso de fixação da agulha da maioria das máquinas industriais e domésticas utiliza rosca métrica M3 com soquete Allen de 1.5 mm. O torque de aperto ideal é de apenas 0,35 N.m — o equivalente à for��a suave de dois dedos segurando o braço curto da chave.",
    "dicaArtrelados": "Nunca guarde suas chaves Allen soltas na gaveta! Mantenha o joguinho sempre preso no estojo ao lado da máquina. E lembre-se: para apertar o parafuso da agulha, aperte só até firmar com dois dedos — nada de usar força exagerada para não estragar a barra de agulha!",
    "comparisonTable": {
      "headers": [
        "Tipo de Chave",
        "Material / Qualidade",
        "Encaixe no Parafuso",
        "Risco de Espanar a Fenda"
      ],
      "rows": [
        [
          "Chave de Precisão Cromo-Vanádio",
          "Aço temperado HRC 58",
          "Perfeito sem folga centesimal",
          "Quase Nulo"
        ],
        [
          "Chave Genérica de Ferro Macio",
          "Metal doce sem têmpera",
          "Folgado e arredonda fácil",
          "Altíssimo risco"
        ],
        [
          "Chave em Polegadas (SAE)",
          "Incompatível com métrico",
          "Folga de 0,1 mm crítica",
          "Espanamento garantido"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Ferramental Manual de Manutenção)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Troca rápida de agulhas e ajuste de altura do calcador",
      "Remoção da chapa de agulha para limpeza profunda da lançadeira e facas",
      "Regulagem de folga e tempo mecânico do gancho da lançadeira rotativa",
      "Montagem e aperto de bastidores de boné e garras mecânicas"
    ],
    "troubleshootingTips": [
      "Se um parafuso de agulha espanar a fenda Allen, use um extrator cônico de micro-parafusos ou uma ponta Torx T6 levemente prensada para retirá-lo",
      "Mantenha sempre 2 parafusos de agulha reservas originais guardados na gaveta de acessórios",
      "Se a ponta da sua chave Allen de 1.5 mm começar a ficar arredondada, lime a pontinha reta ou compre uma chave nova para não estragar seus parafusos"
    ],
    "relatedTerms": [
      "Barra de Agulha",
      "Chapa de Agulha",
      "Lançadeira Rotativa",
      "Manutenção Preventiva",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-087",
      "chave allen",
      "chave torx",
      "ferramental",
      "manutencao",
      "troca de agulha",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ISO. ISO 2936: Assembly Tools for Screws and Nuts - Hexagon Socket Screw Keys. Geneva, 2021.",
      "TAJIMA. Standard Toolkit and Maintenance Hardware Manual. Nagoya, 2023."
    ],
    "practicalExercise": "Pegue a chave Allen de 1.5 mm do estojo de acessórios da sua máquina. Encaixe-a com calma no parafuso que prende a agulha. Sinta como ela entra justo até o fundo. Solte meia volta, sinta a agulha descer soltinha, recoloque a agulha até o topo e aperte suavemente apenas com a força de dois dedos.",
    "quickSummary": "Conjunto de chavinhas de precisão milimétricas indispensáveis para trocar agulhas e regular a máquina sem estragar os parafusos.",
    "beginnerExplanation": "É aquele joguinho de chavinhas em formato de 'L' feitas sob medida para soltar o parafusinho da agulha, tirar a chapinha de ferro para limpar e fazer as regulagens da máquina com toda segurança e sem espanar nada!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-088-jumper-de-fim-de-curso-e-sensores-de-limite-de-eixo-xy",
    "code": "J-088",
    "term": "Sensores de Limite dos Eixos X e Y",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês jumper (ponte de conexão elétrica) e limit switch (interruptor de fim de curso). Princípio de automação mecatrônica e segurança de máquinas CNC.",
    "summary": "Sensores eletro-ópticos e chaves de segurança que impedem o pantógrafo de colidir contra os limites mecânicos do chassi.",
    "definition": "O conjunto de jumpers de fim de curso e sensores de limite de eixo X/Y (X/Y Axis Limit Switches & Limit Jumpers) é o sistema eletromecânico e optoeletrônico de proteção instalado nas extremidades das guias lineares do pantógrafo da máquina de bordar. Composto por microswitches de precisão ou sensores ópticos infravermelhos tipo 'ferradura' e pontes de configuração na placa-mãe (jumpers), sua função é detectar a aproximação máxima do carro nos limites físicos da área útil de bordado, enviando um sinal de interrupção imediata aos servomotores antes que ocorra uma colisão destrutiva com a estrutura da máquina.",
    "technicalDetails": "Sensores ópticos fotoelétricos infravermelhos com tempo de resposta < 1 milissegundo. Jumpers de configuração de lógica (Normalmente Aberto - NO / Normalmente Fechado - NC) com circuito de debounce digital.",
    "construction": [
      "Sensor óptico infravermelho transmissor/receptor em canal U",
      "Lâmina metálica de interrupção (flag/obturador) acoplada ao carro móvel",
      "Microswitch mecânico de segurança redundante com contato de prata",
      "Placa de interface com conectores e jumpers de seleção de modo",
      "Cabo blindado contra interferência eletromagnética (EMI)"
    ],
    "howItWorks": [
      "1. Ao ligar a máquina, o pantógrafo se desloca até o ponto zero mecânico (Home Position).",
      "2. A lâmina do carro entra no sensor óptico, cortando o feixe de luz infravermelha.",
      "3. O sensor envia o sinal para a CPU principal, que grava a coordenada (0,0) absoluta.",
      "4. Durante o bordado, se a matriz ultrapassar o tamanho do bastidor selecionado, o sensor de limite é acionado.",
      "5. O circuito do sensor dispara a frenagem dinâmica instantânea dos servomotores X e Y.",
      "6. O painel exibe o alerta 'Limite de Área Excedido' (Frame Limit Over), preservando correias e motores."
    ],
    "mainTypes": [
      "Sensores Ópticos Tipo Transmissivo (Isentos de desgaste mecânico por atrito)",
      "Microswitches Mecânicos de Alavanca com Rolete (Para proteção física extrema)",
      "Sensores de Proximidade Indutivos Blindados (Para ambientes industriais com poeira)"
    ],
    "characteristics": [
      "Proteção total contra quebras de bastidor e danos a motores de passo",
      "Calibração automática do ponto zero (homing) com precisão de 0,05 mm",
      "Resposta ultrarrápida para paradas de emergência em fração de segundo",
      "Alta durabilidade e facilidade de diagnóstico através dos LEDs na placa"
    ],
    "limitations": [
      "Poeira excessiva de linha ou óleo respingado no canal óptico pode acionar falsos alarmes de limite",
      "Jumpers configurados na polaridade errada impedem a inicialização da máquina",
      "Exige limpeza periódica com ar seco e pincel antiestático"
    ],
    "numberingSystem": [
      "Tensão Operacional: 5V DC ou 24V DC industrial",
      "Tempo de Resposta: < 1 ms",
      "Repetibilidade de Posição: ± 0,02 mm"
    ],
    "advantages": [
      "✔ Previne acidentes graves de quebra de bastidor e descarrilamento de correias",
      "✔ Garante o retorno exato ao ponto de origem após cortes de energia",
      "✔ Aumenta a vida útil dos fusos de esferas e guias lineares"
    ],
    "commonErrors": [
      "❌ Jampear ou desativar os sensores de limite para tentar 'forçar' matrizes maiores que o bastidor",
      "❌ Deixar acumular bolotas de poeira e fiapos dentro da ranhura do sensor óptico",
      "❌ Dobrar a lâmina metálica de acionamento do sensor durante trocas de bastidor brutas"
    ],
    "voceSabia": "O termo 'jumper' vem do verbo inglês to jump (pular), porque ele é uma pequena capinha plástica com condutor de metal que 'pula' e conecta dois pinos de uma placa eletrônica para ativar ou desativar funções específicas.",
    "curiosidadeTecnica": "Em caso de colisão a 1.000 PPM sem a ação dos sensores de fim de curso, a energia cinética do pantógrafo seria suficiente para romper uma correia dentada de poliéster com alma de aço de 15 mm de largura em menos de 0,1 segundo.",
    "dicaArtrelados": "Se sua máquina ligar e der mensagem de 'Erro de Limite' sem você ter mandado bordar nada, não entre em pânico! Na maioria das vezes é só uma poeirinha de entretela tampando a luz do sensor: passe um pincel macio ou um ar seco no cantinho do trilho que ela volta a funcionar na hora!",
    "comparisonTable": {
      "headers": [
        "Tecnologia de Fim de Curso",
        "Vida Útil em Ciclos",
        "Sensibilidade a Poeira",
        "Precisão de Ponto Zero"
      ],
      "rows": [
        [
          "Sensor Óptico Infravermelho",
          "Infinita (sem contato físico)",
          "Média (requer limpeza)",
          "Altíssima (± 0,01 mm)"
        ],
        [
          "Microswitch Mecânico",
          "1 a 2 milhões de cliques",
          "Excelente (imune à poeira)",
          "Boa (± 0,05 mm)"
        ],
        [
          "Sensor Magnético Hall",
          "Infinita (sem contato)",
          "Altíssima (totalmente selado)",
          "Excelente (± 0,02 mm)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Módulo Eletrônico de Segurança)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Autocalibração de ponto zero (Homing) na inicialização da máquina de bordar",
      "Interrupção de emergência antes de batidas de bastidor contra o cabeçote",
      "Limitação eletrônica de segurança em áreas de bastidores magnéticos e tubulares",
      "Diagnóstico e testes de movimentação em bancadas técnicas especializadas"
    ],
    "troubleshootingTips": [
      "Se o pantógrafo der solavancos e bater no fim do trilho, limpe a ranhura do sensor com álcool isopropílico",
      "Verifique se o cabo do sensor não está partido ou com mau contato no conector da placa-mãe",
      "Ao trocar a placa eletrônica, certifique-se de que os jumpers de seleção de bastidor estão na mesma posição da placa original"
    ],
    "relatedTerms": [
      "Pantógrafo",
      "Servomotor de Eixo X e Y",
      "Ponto Zero (Origem da Matriz)",
      "Área Útil de Bordado",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-088",
      "sensor de limite",
      "fim de curso",
      "pantografo",
      "seguranca eletromechanica",
      "ponto zero",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA. Electronic Control Board and Limit Switch Sensor Diagnostics. Nagoya, 2023.",
      "OMRON. Optical and Mechanical Limit Sensors for Automated Machinery. Kyoto, 2022."
    ],
    "practicalExercise": "Ligue sua máquina de bordar e observe atentamente o movimento inicial do pantógrafo. Ele vai até o cantinho da máquina, aciona os sensores suavemente e depois volta exatamente para o centro: esse é o sistema de fim de curso encontrando a casa dele!",
    "quickSummary": "Sensores de segurança que impedem o bastidor de bater e quebrar nos cantos da máquina.",
    "beginnerExplanation": "São pequenos olhinhos eletrônicos colocados no final dos trilhos da máquina. Quando o bastidor vai muito para o canto e chega perto de bater, esses sensores avisam o computador da máquina para parar imediatamente e não quebrar nada!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-089-jaleco-infantil-e-uniformes-escolares-tecnicas-de-fixacao",
    "code": "J-089",
    "term": "Bordado em Uniformes Escolares",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês jalot / jaquet (vestimenta protetora) e do latim uniformis (de uma só forma). Especialidade de personalização em massa para o mercado escolar e infantil.",
    "summary": "Métodos de bordado hipoalergênico, vedação de avesso suave e posicionamento rápido para aventais e roupas infantis.",
    "definition": "O bordado em jalecos infantis, babadores e uniformes escolares (School Uniform & Kids Apron Embroidery) é o conjunto de técnicas especializadas de bastidor, seleção de materiais hipoalergênicos e acabamento têxtil voltadas para peças de uso escolar de crianças. Caracteriza-se pela aplicação obrigatória de película termocolante ultra-macia no avesso (para proteger a pele sensível da criança contra o atrito áspero dos nós e linhas de poliéster), uso de linhas com certificação OEKO-TEX Standard 100 resistentes a lavagens frequentes com água sanitária e gabaritos de colocação rápida em bolsos pequenos e peitilhos.",
    "technicalDetails": "Tecidos típicos de Oxford, gabardine, microfibra e malha PV (67% poliéster / 33% viscose). Proteção de avesso com entretela de malha termocolante de 40 g/m² aplicada com ferro a 135 °C por 12 segundos.",
    "construction": [
      "Tecido base leve e resistente a manchas (Oxfordine, Gabardine ou Algodão)",
      "Entretela rasgável de toque suave (Soft Tearaway 50 g/m²)",
      "Linha de poliéster 100% trilobal com alta solidez de cor e certificação infantil",
      "Matriz com pontos cheios curtos e compensação de repuxo balanceada",
      "Película protetora termocolante de malha 'Toca Macia' cobrindo 100% do avesso"
    ],
    "howItWorks": [
      "1. O peito ou bolso do jaleco infantil é demarcado com gabarito de centralização.",
      "2. A peça é fixada no bastidor magnético ou bastidor pequeno com entretela rasgável macia.",
      "3. A máquina borda o nome da criança e o desenho temático (bichinhos, lápis, flores) com pontos limpos.",
      "4. A entretela do verso é rasgada delicadamente rente ao contorno dos pontos.",
      "5. As pontas de linha soltas são refiladas com tesoura de ponta curva de precisão.",
      "6. Aplica-se a película termocolante suave com ferro quente no avesso do bordado.",
      "7. A peça fica confortável como uma segunda pele, sem causar coceiras ou alergias na criança."
    ],
    "mainTypes": [
      "Bordado em Peitilho de Jaleco / Avental Escolar (Posicionamento no lado esquerdo superior)",
      "Bordado em Bolso Montado com Bastidor Tubular Livre ou Flutuante",
      "Identificação em Toalhinhas Escolares de Boca com Barrado de Tecido"
    ],
    "characteristics": [
      "Acabamento 100% suave no avesso, sem pinicar a pele das crianças",
      "Altíssima resistência a mais de 100 lavagens em máquina doméstica",
      "Cores vibrantes que não desbotam com o uso diário na escola",
      "Excelente nicho comercial com altíssima demanda na volta às aulas"
    ],
    "limitations": [
      "Bolsos pequenos montados exigem técnica de bordado flutuante para não fechar o bolso com costura",
      "Não utilizar linhas metálicas ásperas em áreas que tocam diretamente a pele do bebê ou criança",
      "Evitar densidades pesadas que transformem o peito do jaleco em uma placa dura"
    ],
    "numberingSystem": [
      "Gramatura do Oxford Infantil: 140 a 160 g/m²",
      "Tamanho Padrão do Nome: 60 mm a 90 mm de largura",
      "Temperatura de Termosselagem do Avesso: 130 °C a 140 °C"
    ],
    "advantages": [
      "✔ Fidelização de mães e escolas pela qualidade do conforto infantil",
      "✔ Produção rápida e lucrativa nos meses de janeiro, fevereiro e julho",
      "✔ Peças duradouras que resistem a todo o ano letivo"
    ],
    "commonErrors": [
      "❌ Entregar a peça com o avesso cru cheio de nós duros e entretela áspera, fazendo a criança chorar de coceira",
      "❌ Bordar através das duas camadas do bolso fechando a abertura e inutilizando o bolso da criança",
      "❌ Usar linha de algodão barata que desbota na primeira lavagem com sabão em pó forte"
    ],
    "voceSabia": "A certificação OEKO-TEX Standard 100 Classe 1 é o teste químico mais rigoroso do mundo têxtil, garantindo que as linhas e entretelas não soltem formaldeído, metais pesados ou substâncias cancerígenas na saliva ou suor dos bebês.",
    "curiosidadeTecnica": "O atrito repetitivo de um avesso de bordado áspero contra o peito de uma criança pequena durante 4 horas de aula pode provocar dermatite de contato mecânica em menos de 3 dias de uso escolar.",
    "dicaArtrelados": "Nunca entregue uma peça infantil sem aplicar a entretela de proteção termocolante no avesso (aquela malhazinha protetora de colar com o ferro). As mães amam esse carinho e vão indicar o seu ateliê para todas as amigas da escola!",
    "comparisonTable": {
      "headers": [
        "Tratamento do Avesso",
        "Sensação ao Toque",
        "Reação na Pele Infantil",
        "Valor Percebido"
      ],
      "rows": [
        [
          "Com Película Termocolante Macia",
          "Suave como algodão",
          "Zero irritação / 100% confortável",
          "Profissional Premium"
        ],
        [
          "Avesso Cru com Entretela Rasgada",
          "Áspero com nós de linha",
          "Pinica e causa vermelhidão",
          "Amador / Básico"
        ],
        [
          "Avesso com Entretela de Recorte Grossa",
          "Placa dura e rígida",
          "Incômodo constante ao se movimentar",
          "Inadequado para crianças"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Rasgável 50 g/m² + Protetor Termocolante de Avesso no final",
      "threadTension": "100 a 110 gf (superior) e 20 a 22 gf (bobina)",
      "density": "0.40 mm a 0.42 mm"
    },
    "applications": [
      "Personalização de aventais, jalecos e batas escolares infantis",
      "Uniformes de creches, escolas maternais e colégios particulares",
      "Toalhinhas de boca, mochilas e estojos para volta às aulas",
      "Uniformes de escolinhas de esportes, natação, balé e judô"
    ],
    "troubleshootingTips": [
      "Se o tecido fino de microfibra enrugar ao redor do nome, aumente a compensação de repuxo para 0,35 mm e use duas camadas de entretela rasgável leve",
      "Para bordar bolsos pequenos sem desmanchar a costura, use bastidor magnético ou prenda apenas a entretela no bastidor e cole o bolso por cima com fita crepe",
      "Corte sempre as pontinhas de linha no avesso com menos de 2 mm de comprimento antes de colar a malha protetora"
    ],
    "relatedTerms": [
      "Entretela Termocolante",
      "Protetor de Avesso Macio",
      "Bastidor Magnético",
      "Micro-Lettering (Micro-Letras)",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-089",
      "jaleco infantil",
      "uniforme escolar",
      "volta as aulas",
      "avesso macio",
      "hipoalergenico",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "OEKO-TEX. Standard 100: Testing and Certification for Baby and Children Wear. Zurich, 2023.",
      "PARRISH, Gail. Complete Guide to Children's Wear Embroidery and Comfort Finishing. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde um nome de criança em um retalho de tecido de jaleco. Limpe os fios do verso, corte um pedaço de entretela de malha termocolante 1 cm maior que o bordado e passe o ferro a vapor por 10 segundos. Passe as costas da sua mão no avesso e sinta a maciez do toque aveludado.",
    "quickSummary": "Técnicas especiais para bordar roupas e uniformes infantis com toque super macio e sem pinicar a pele.",
    "beginnerExplanation": "É o jeito especial de bordar o nome da criança no jaleco ou toalhinha da escola e depois colar uma pelinha de tecido bem macia no avesso com o ferro de passar. Assim o bordado fica lindo e nunca pinica a pele delicada da criança!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-090-juncao-de-formatos-vetoriais-svg-ai-eps-para-digitalizacao",
    "code": "J-090",
    "term": "Junção de Formatos Vetoriais",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim vector (aquele que conduz, grandeza orientada) e do inglês Scalable Vector Graphics (SVG). Princípios de computação gráfica e geometria analítica de Pierre Bézier (1960).",
    "summary": "Importação, limpeza de nós de curvas Bézier e fusão de arquivos vetoriais para geração de matrizes de bordado perfeitas.",
    "definition": "A junção e pré-processamento de formatos vetoriais (Vector Pre-Processing, Curve Merging & Bézier Optimization) é o procedimento técnico executado em softwares gráficos (como CorelDRAW, Illustrator ou Inkscape) e softwares de matrizaria (Wilcom, Embird, Bernina) onde arquivos em formatos vetoriais matemáticos (SVG, AI, EPS, DXF, CDR) são higienizados, fundidos (ferramentas Weld/Union) e simplificados antes da conversão em pontos de bordado. Elimina nós redundantes, preenchimentos sobrepostos desnecessários e linhas invisíveis, gerando formas vetoriais limpas que são interpretadas pelo software de bordado com traçados suaves e sem excesso de perfurações de agulha.",
    "technicalDetails": "Redução de nós Bézier com algoritmo de Douglas-Peucker (tolerância de 0,05 mm). Conversão de contornos em curvas preenchidas fechadas (Outline to Object) para correta interpretação de ponto cheio.",
    "construction": [
      "Arquivo vetorial original limpo (curvas fechadas sem auto-intersecções)",
      "Eliminação de nós duplos e alinhamento tangencial de nós suaves",
      "Fusão booleana de objetos da mesma cor (Weld / Merge)",
      "Importação direta no ambiente de digitalização automática ou manual",
      "Atribuição de parâmetros de pontos (Tatami, Ponto Cheio ou Costura)"
    ],
    "howItWorks": [
      "1. O cliente envia a logomarca em formato vetorial (ex: arquivo .AI ou .SVG do Corel/Illustrator).",
      "2. O designer abre o vetor e remove gradientes complexos de impressão e sombras em bitmap.",
      "3. As partes que se cruzam na mesma cor são unidas com o comando 'Soldar' (Weld/Unite).",
      "4. A ferramenta de redução de nós é aplicada, deixando apenas os pontos essenciais de curva.",
      "5. O arquivo vetorizado limpo é importado para o software de bordado.",
      "6. As curvas perfeitas são convertidas diretamente em blocos de pontos cheios e tatamis elegantes.",
      "7. A matriz gerada fica leve, com traçados impecáveis e zero pontos falsos."
    ],
    "mainTypes": [
      "SVG (Scalable Vector Graphics - Padrão universal leve para web e matrizaria moderna)",
      "AI / EPS (Adobe Illustrator - Padrão da indústria de design gráfico profissional)",
      "CDR (CorelDRAW - Formato amplamente integrado ao Wilcom EmbroideryStudio)"
    ],
    "characteristics": [
      "Qualidade matemática infinita sem perda de resolução ao redimensionar",
      "Redução de até 80% no tempo de criação de uma matriz profissional",
      "Contornos ultra-suaves sem 'dentes de serra' típicos de imagens pixeladas (JPG/PNG)",
      "Facilidade para alterar cores e proporções em segundos"
    ],
    "limitations": [
      "Vetores mal desenhados com milhares de nós sobrepostos criam matrizes defeituosas e cheias de cortes",
      "Degradês vetoriais complexos precisam ser simplificados manualmente para o bordado",
      "Exige conhecimento básico de edição gráfica vetorial"
    ],
    "numberingSystem": [
      "Padrão de Cores: RGB / CMYK convertido para Cartela de Cores de Linhas de Bordado",
      "Tolerância de Simplificação de Nós: 0,02 mm a 0,05 mm",
      "Extensões Principais: .SVG, .AI, .EPS, .CDR, .EMF"
    ],
    "advantages": [
      "✔ Matrizes com contornos perfeitamente lisos e curvas elegantes",
      "✔ Agilidade imensa na digitalização de logomarcas empresariais",
      "✔ Elimina o retrabalho de redesenhar imagens de baixa qualidade"
    ],
    "commonErrors": [
      "❌ Tentar digitalizar automaticamente arquivo JPG embaçado em vez de pedir o vetor original para o cliente",
      "❌ Importar vetor sem soldar as partes sobrepostas, fazendo a máquina bordar duas vezes no mesmo lugar",
      "❌ Deixar linhas invisíveis com espessura 'fio de cabelo' no arquivo vetorial, gerando pontos corridos indesejados"
    ],
    "voceSabia": "O formato SVG foi criado pelo consórcio W3C em 1999 e é baseado em linguagem XML de texto puro: se você abrir um arquivo SVG no bloco de notas, você verá as equações matemáticas exatas de cada curva do seu desenho!",
    "curiosidadeTecnica": "Uma curva desenhada com 50 nós desnecessários gera até 300 comandos extras de micropontos em uma matriz de bordado, aumentando a vibração do pantógrafo e o risco de quebra de agulha em 40%.",
    "dicaArtrelados": "Sempre que um cliente pedir para bordar uma logomarca de empresa, peça a ele o arquivo 'em vetor' (.AI, .Corel ou .PDF vetorizado). Você vai economizar horas de trabalho e sua matriz vai ficar com um acabamento perfeito de alta costura!",
    "comparisonTable": {
      "headers": [
        "Tipo de Arquivo Base",
        "Facilidade de Digitalização",
        "Qualidade das Curvas",
        "Tempo de Programação"
      ],
      "rows": [
        [
          "Vetor Limpo (.SVG / .AI / .CDR)",
          "Excelente e Imediata",
          "Curvas perfeitas e limpas",
          "5 a 15 minutos"
        ],
        [
          "Imagem PNG de Alta Resolução",
          "Média (exige redesenho)",
          "Boa se desenhada manualmente",
          "30 a 60 minutos"
        ],
        [
          "Foto de Baixa Qualidade (WhatsApp)",
          "Péssima e demorada",
          "Bordas serrilhadas e tortas",
          "Mais de 2 horas de redesenho"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Etapa de Design e Software)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Digitalização rápida de logomarcas empresariais e escudos esportivos",
      "Criação de apliques a laser integrando corte vetorial e bordado de contorno",
      "Conversão de artes tipográficas e monogramas desenhados no Illustrator/Corel",
      "Padronização de arquivos mestres para catálogos de ateliês de bordado"
    ],
    "troubleshootingTips": [
      "Se ao converter o vetor em bordado aparecerem pontos soltos indesejados, selecione o vetor no Corel/Illustrator e use o comando 'Simplificar Curvas'",
      "Certifique-se de que todas as fontes do arquivo foram convertidas em curvas (Ctrl+Q no Corel ou Ctrl+Shift+O no Illustrator) antes de importar",
      "Exclua camadas ocultas e guias de corte do arquivo gráfico para que o software de matriz não as interprete como linhas de costura"
    ],
    "relatedTerms": [
      "Digitalização Automática e Manual",
      "Software de Edição de Matrizes",
      "Curvas de Bézier",
      "Formatos de Arquivo (.DST, .PES, .JEF)",
      "Softwares & Formatos"
    ],
    "tags": [
      "j-090",
      "vetores",
      "svg",
      "illustrator",
      "coreldraw",
      "digitalizacao",
      "softwares e formatos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "W3C. Scalable Vector Graphics (SVG) 2 Specification. World Wide Web Consortium, 2022.",
      "WILCOM. CorelDRAW Graphics Suite Integration with EmbroideryStudio. Sydney, 2023."
    ],
    "practicalExercise": "Abra um arquivo vetorial em formato SVG simples no seu computador (como uma estrela ou coração). Abra o mesmo no software de matrizes e use a ferramenta de conversão automática em ponto cheio. Veja como as curvas se transformam instantaneamente em linhas de bordar perfeitamente orientadas.",
    "quickSummary": "Uso de desenhos em formato vetorial limpo para criar matrizes com curvas lisinhas e com rapidez incrível.",
    "beginnerExplanation": "O arquivo em vetor é aquele desenho que você pode aumentar do tamanho de uma moeda até o tamanho de um prédio sem perder nada de qualidade. Usar ele para fazer o bordado é o melhor caminho porque a máquina consegue entender cada curva com perfeição!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-091-jogo-de-escovas-de-carvao-e-manutencao-de-motores-auxiliares",
    "code": "J-091",
    "term": "Escovas de Carvão dos Motores",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim carbo (carvão mineral, grafite condutor) e do inglês brush (escova de contato elétrico rotativo). Invenção de Nikola Tesla e Werner von Siemens no século XIX.",
    "summary": "Pares de pastilhas de grafite eletrocondutor com mola que transmitem corrente para motores de bobinadores e exaustores.",
    "definition": "O jogo de escovas de carvão (Carbon Brushes & Commutator Maintenance Set) é o par de blocos condutores de grafite sintético de alta pureza e cobre prensado acoplados a molas espirais de pressão constante instalados nos motores elétricos auxiliares universais de corrente contínua da máquina de bordar (como motores de bobinadores externos de canelinha, bombas de vácuo, sopradores de aparas e motores de elevação de bancada). Sua função é conduzir a corrente elétrica para as lâminas do coletor rotativo (comutador) do rotor; seu desgaste natural por atrito exige inspeção periódica e substituição antes que o grafite atinja o limite mínimo de segurança.",
    "technicalDetails": "Composição em eletrografite de granulação ultrafina com condutividade de 98% IACS. Mola de pressão calibrada para exercer entre 150 e 250 g/cm² sobre o comutador.",
    "construction": [
      "Bloco prismático de grafite auto-lubrificante retificado",
      "Cordoalha flexível de cobre eletrolítico trançado (shunt wire)",
      "Mola helicoidal ou espiral de compressão em aço inox",
      "Terminal de contato tipo forquilha ou latão de engate rápido",
      "Porta-escova tubular de latão isolado termicamente"
    ],
    "howItWorks": [
      "1. A corrente elétrica passa pelo cabo e pela cordoalha de cobre até o bloco de carvão.",
      "2. O carvão encosta suavemente nas lâminas de cobre do comutador giratório do motor.",
      "3. O grafite transmite a eletricidade criando os campos magnéticos que fazem o motor girar.",
      "4. As propriedades auto-lubrificantes do grafite reduzem o atrito mecânico a altas rotações.",
      "5. A mola empurra o carvão continuamente para a frente conforme ele sofre microdesgaste natural.",
      "6. O motor opera com torque vigoroso, sem faíscas excessivas e de forma contínua."
    ],
    "mainTypes": [
      "Escovas de Grafite-Cobre para Motores Auxiliares de 24V/110V/220V",
      "Escovas com Dispositivo de Desarme Automático (Auto-Cut / Auto-Stop)",
      "Motores Brushless Modernos (Sem escovas, padrão dos servomotores do cabeçote principal)"
    ],
    "characteristics": [
      "Transmissão elétrica estável com baixa resistência ôhmica",
      "Propriedade auto-lubrificante que protege as lâminas de cobre do rotor",
      "Fácil substituição sem necessidade de desmontar todo o motor",
      "Garante que o bobinador de canelinhas funcione na velocidade máxima"
    ],
    "limitations": [
      "Gera micro-poeira de grafite que deve ser aspirada em manutenções preventivas",
      "Escovas gastas abaixo de 5 mm de comprimento geram faíscas e queimam o induzido",
      "Não aplicável aos servomotores principais modernos de acionamento do cabeçote (que são 'Brushless')"
    ],
    "numberingSystem": [
      "Dimensões Comuns: 5x5x12 mm / 6x9x15 mm",
      "Comprimento Mínimo de Descarte: 5,0 mm",
      "Dureza Shore do Grafite: 45 a 65 HD"
    ],
    "advantages": [
      "✔ Recupera a potência original de bobinadores e motores que ficaram fracos",
      "✔ Custo de manutenção extremamente baixo comparado à troca do motor inteiro",
      "✔ Evita queimas prematuras do comutador por centelhamento elétrico"
    ],
    "commonErrors": [
      "❌ Deixar o carvão gastar até o final, fazendo a mola de aço bater no cobre do rotor e destruir o motor",
      "❌ Lixar o carvão com formato torto, causando faíscas intensas e superaquecimento",
      "❌ Usar carvão de tamanho errado que fica preso dentro do porta-escovas sem descer"
    ],
    "voceSabia": "O grafite é uma das formas puras do elemento Carbono (assim como o diamante), mas sua estrutura atômica em camadas planas faz com que ele deslize facilmente, sendo um dos poucos materiais condutores de eletricidade que funcionam também como lubrificante sólido.",
    "curiosidadeTecnica": "O limite de descarte de uma escova de carvão é quando ela atinge 1/3 do seu comprimento original. Abaixo disso, a mola perde a pressão de contato, o que gera micro-arcos voltaicos que elevam a temperatura do comutador acima de 300 °C em minutos.",
    "dicaArtrelados": "Se o seu enchedor de canelinhas externo começar a ficar fraco, engasgando ou saindo um cheirinho de queimado, não jogue o aparelho fora! Abra a tampinha lateral e veja se não é apenas a escovinha de carvão que acabou: trocando o parzinho de carvão, ele volta a funcionar com força total!",
    "comparisonTable": {
      "headers": [
        "Condição da Escova",
        "Desempenho do Motor",
        "Nível de Faíscas",
        "Saúde do Coletor"
      ],
      "rows": [
        [
          "Escova Nova e Assentada",
          "Potência máxima e suave",
          "Mínimo (quase invisível)",
          "100% Protegido e polido"
        ],
        [
          "Escova Perto do Fim (< 5 mm)",
          "Motor fraco com engasgos",
          "Intenso e com estalos",
          "Superaquecimento com marcas pretas"
        ],
        [
          "Escova Totalmente Gasta",
          "Motor para de funcionar",
          "Fogo contínuo no interior",
          "Induzido riscado e destruído"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Manutenção Elétrica de Motores Auxiliares)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Manutenção preventiva de bobinadores elétricos externos de canelinhas de alta capacidade",
      "Revisão de motores de exaustão e sopradores de ar em ateliês industriais",
      "Sistemas de elevação automatizada de mesas de corte e bastidores",
      "Ferramentas elétricas auxiliares da bancada de manutenção do ateliê"
    ],
    "troubleshootingTips": [
      "Se o motor auxiliar estiver emitindo cheiro de ozônio ou faíscas visíveis pela grade traseira, desligue imediatamente e inspecione as escovas de carvão",
      "Ao instalar escovas novas, passe uma lixa d'água 600 muito fina no comutador de cobre para tirar a crosta preta de carvão velho",
      "Verifique se o carvão desliza livremente dentro do canal de latão sem travar antes de recolocar a tampa"
    ],
    "relatedTerms": [
      "Bobinador de Canelinha",
      "Servomotor de Eixo X e Y",
      "Manutenção Preventiva",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-091",
      "escova de carvao",
      "bobinador",
      "motores auxiliares",
      "manutencao eletrica",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SIEMENS. Carbon Brushes and Commutator Maintenance in Small Fractional Horsepower Motors. Munich, 2022.",
      "TAJIMA. Auxiliary Motor and Bobbin Winder Maintenance Guide. Nagoya, 2023."
    ],
    "practicalExercise": "Desconecte seu bobinador de canelinhas da tomada. Com uma chave de fenda comum, desrosqueie a tampinha plástica preta lateral do motor. Puxe a molinha com o pedacinho de carvão e observe o formato retangular de grafite brilhante com a cordoalha de cobre.",
    "quickSummary": "Pecinhas de carvão condutor com molas que alimentam a eletricidade de motores de encher canelinhas.",
    "beginnerExplanation": "São dois bloquinhos de carvão especial com molinhas que ficam dentro dos motorzinhos elétricos (como o enchedor de canelinha). Eles passam a eletricidade para o motor girar e se desgastam devagarinho com o tempo, precisando ser trocados quando ficam bem pequenininhos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-092-jateamento-de-ar-quente-para-retracao-de-pelos-em-toalhas",
    "code": "J-092",
    "term": "Tratamento Térmico de Felpas em Toalhas",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Acabamento & Finalização",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim jactare (lançar ar com pressão) e do germânico thwahljo (toalha, pano felpudo). Técnica de termofixação desenvolvida na indústria de acabamento de enxovais de banho.",
    "summary": "Técnica térmica de acabamento que utiliza fluxo de ar quente controlado para encolher micro-fiapos e selar a felpa ao redor do bordado.",
    "definition": "O jateamento de ar quente para retração de pelos em toalhas (Hot Air Fluff Flattening & Fiber Singeing Protocol) é o procedimento técnico de pós-acabamento de enxovais onde um soprador térmico com temperatura calibrada (entre 120 °C e 160 °C) ou ferro a vapor vertical com jato de ar quente seco é direcionado sobre a área bordada em toalhas de banho felpudas, veludos e tecidos 'Sherpa'. O calor controlado contrai termicamente os micro-fiapos soltos de algodão e dissolve instantaneamente resíduos microscópicos de filme hidrossolúvel aprisionados entre os pontos cheios, assentando as felpas periféricas e destacando o relevo do bordado com acabamento impecável de loja de luxo.",
    "technicalDetails": "Fluxo de ar térmico regulado entre 130 °C e 150 °C a uma distância de segurança de 8 a 15 cm com movimentação pendular contínua (tempo de exposição máximo de 3 a 5 segundos por área).",
    "construction": [
      "Soprador térmico profissional com display digital de temperatura ou ferro gerador de vapor seco",
      "Bico direcionador tipo fenda plana de 50 mm para dispersão homogênea do ar",
      "Pano de algodão cru ou folha de teflon para proteção em tecidos sensíveis",
      "Escovinha de cerdas naturais para alinhamento da felpa pós-térmico"
    ],
    "howItWorks": [
      "1. A toalha bordada é retirado do bastidor e o filme plástico solúvel superficial é rasgado.",
      "2. O operador liga o soprador térmico regulado exatamente em 140 °C.",
      "3. O bico de ar quente é movimentado suavemente em movimentos circulares sobre as letras e arabescos.",
      "4. Os pequenos micro-resíduos transparentes de plástico solúvel encolhem e desaparecem imediatamente com o calor.",
      "5. As fibras de algodão que estavam espetadas entre as letras de ponto cheio retraem e deitam.",
      "6. As letras ganham um contorno afiado, brilhante e em alto relevo contra o fundo macio da toalha.",
      "7. A peça fica pronta para embalagem com aspecto nobre e sem necessidade de molhar ou lavar a toalha."
    ],
    "mainTypes": [
      "Jateamento com Soprador Térmico Digital (Para ateliês de alta produtividade e personalização rápida)",
      "Termo-Assentamento com Ferro a Vapor Vertical / Steamer Profissional",
      "Termo-Limpeza com Prensa Térmica e Folha de Teflon Protetora"
    ],
    "characteristics": [
      "Elimina 100% das casquinhas plásticas de hidrossolúvel sem precisar molhar a toalha",
      "Assenta as felpas rebeldes ao redor de nomes e monogramas finos",
      "Realça o brilho das linhas de poliéster trilobal pelo alinhamento molecular térmico",
      "Permite entregar a toalha seca, cheirosa e embalada imediatamente para o cliente"
    ],
    "limitations": [
      "Manter o soprador parado no mesmo ponto por mais de 5 segundos pode queimar o tecido de algodão ou derreter linhas sintéticas",
      "Não aplicar sobre fios metalizados sensíveis ao calor sem proteção de pano",
      "Exige controle rigoroso da temperatura conforme a composição da toalha"
    ],
    "numberingSystem": [
      "Temperatura Ideal para Toalhas de Algodão: 130 °C a 150 °C",
      "Temperatura para Veludos de Poliéster: 110 °C a 125 °C",
      "Distância de Aplicação: 10 cm a 15 cm"
    ],
    "advantages": [
      "✔ Agilidade: entrega a toalha perfeita em 10 segundos sem esperar secar da água",
      "✔ Visual impecável com letras bem definidas e sem fiapos atravessando o bordado",
      "✔ Encantamento do cliente ao receber uma peça com apresentação impecável"
    ],
    "commonErrors": [
      "❌ Usar soprador térmico de obra em temperatura máxima (> 300 °C), derretendo o bordado e chamuscando a toalha",
      "❌ Deixar o bico de ar muito perto (< 3 cm) e parado no mesmo lugar",
      "❌ Tentar queimar fiapos com isqueiro aberto, correndo risco de queimar o tecido e criar fumaça preta"
    ],
    "voceSabia": "Na indústria têxtil de fiação de alta qualidade, existe um processo chamado 'Chamuscagem' (Singeing), onde os tecidos de algodão passam a mais de 100 km/h por cima de chamas de gás para queimar a penugem e deixar o tecido super liso como seda.",
    "curiosidadeTecnica": "O filme hidrossolúvel de PVA (Álcool Polivinílico) possui ponto de transição vítrea a 85 °C e ponto de fusão a 140 °C. O calor do ar quente dissolve e retrai o polímero instantaneamente em micro-esferas invisíveis a olho nu.",
    "dicaArtrelados": "Sabe aquelas casquinhas de plástico solúvel que ficam presas dentro de letrinhas miúdas como 'a', 'e' e 'o' em toalhas de banho? Em vez de ficar cutucando com pinça ou molhando a toalha inteira, passe o ar quente do secador de cabelo no modo bem quente ou um soprador a 130 °C: o plástico some na hora como mágica!",
    "comparisonTable": {
      "headers": [
        "Método de Limpeza de Toalha",
        "Tempo de Processo",
        "Remoção de Fiapos",
        "Necessidade de Secagem"
      ],
      "rows": [
        [
          "Ar Quente Controlado (140 °C)",
          "10 segundos",
          "Excelente (retrai e assenta)",
          "Nenhuma (entrega na hora seco)"
        ],
        [
          "Lavagem com Água",
          "2 a 4 horas de secagem",
          "Boa (mas despenteia a felpa)",
          "Obrigatória secagem completa"
        ],
        [
          "Pinça Manual",
          "10 a 15 minutos",
          "Regular (pode puxar fios)",
          "Seco mas muito demorado"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Procedimento de Pós-Acabamento)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Acabamento nobre em toalhas de banho, rosto e lavabo de alta gramatura (500 g/m²)",
      "Remoção de resíduos de filme solúvel em roupões de veludo e mantas de bebê",
      "Finalização de peças em tecido felpudo estilo 'Sherpa', carneirinho e pelúcia",
      "Higienização e alisamento rápido de peças antes da embalagem para presentes"
    ],
    "troubleshootingTips": [
      "Se a linha de poliéster perder o brilho, a temperatura estava muito alta; reduza para 120 °C e aumente a distância para 15 cm",
      "Para toalhas brancas de puro algodão egípcio, use sempre movimentos rápidos de vai-e-vem para não amarelar o tecido",
      "Mantenha o ambiente arejado durante o uso de sopradores térmicos"
    ],
    "relatedTerms": [
      "Entretela Hidrossolúvel",
      "Toalhas de Banho e Felpudos",
      "Pós-Acabamento de Bordado",
      "Tesoura de Limpeza",
      "Acabamento & Finalização"
    ],
    "tags": [
      "j-092",
      "ar quente",
      "toalhas de banho",
      "retracao de pelos",
      "felpa",
      "hidrossoluvel",
      "acabamento",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TOWEL MANUFACTURERS ASSOC. Finishing, Steaming and Thermal Embellishment of High-Pile Terry Towels. New York, 2022.",
      "PARRISH, Gail. Professional Finishing Techniques for Machine Embroiderers. Cincinnati, 2023."
    ],
    "practicalExercise": "Borde um monograma em uma toalha de banho usando plástico solúvel por cima. Rasgue o plástico superficial. Pegue um secador de cabelo comum na potência máxima e direcione o ar quente a 5 cm de distância fazendo movimentos circulares durante 10 segundos. Veja os pelinhos assentarem e as letrinhas ficarem perfeitas!",
    "quickSummary": "Uso de ar quente para sumir com restinhos de plástico solúvel e assentar os pelinhos de toalhas de banho.",
    "beginnerExplanation": "É o truque de passar um ventinho bem quente sobre a toalha bordada para fazer aquelas casquinhas de plástico transparente sumirem no mesmo instante e deixar as letras bem lisinhas e destacadas no meio da felpa, sem precisar molhar a toalha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-093-juncao-de-areas-preenchidas-com-ponto-tatami-reversivel",
    "code": "J-093",
    "term": "Junção de Áreas em Ponto Tatami",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do japonês tatami (esteira de palha trançada) e do latim reversibilis (que pode ser invertido). Princípio de tecelagem e matrizaria com equilíbrio bidirecional de forças mecânicas.",
    "summary": "Método de matrizaria que divide grandes fundos em blocos com direções de costura alternadas para anular o repuxo no tecido.",
    "definition": "A junção de áreas preenchidas com ponto tatami reversível (Reversible & Multi-Directional Tatami Stitch Geometry) é a técnica avançada de engenharia de matrizes onde uma grande superfície plana de preenchimento é particionada em sub-blocos contíguos com ângulos de inclinação alternados em 90° ou 45° e trajetos de costura em sentidos opostos (ida e volta balanceada). Ao inverter a direção da tração mecânica gerada pela linha a cada segmento, as forças de repuxo do tecido se auto-anulam, impedindo o enrugamento, o efeito de 'tigela' (empenamento côncavo) e permitindo bordar grandes brasões e fundos sólidos com caimento liso e toque leve.",
    "technicalDetails": "Divisão em grade de polígonos com junção em esquadria sem costuras visíveis (Seamless Joint). Densidade uniforme de 0,42 mm com compensação de repuxo cruzada de 0,35 mm em cada bloco.",
    "construction": [
      "Superfície grande fragmentada em blocos geométricos complementares",
      "Bloco A: Ângulo de penetração de ponto a 45°",
      "Bloco B: Ângulo de penetração de ponto a 135° (perpendicular ao Bloco A)",
      "Costura de transição sem nós ou paradas de máquina (Continuous Stitch Path)",
      "Underlay em grade Tatami a 90° unificando a base antes do preenchimento final"
    ],
    "howItWorks": [
      "1. O digitalizador identifica uma área grande de fundo (ex: escudo de 120 mm de largura).",
      "2. Em vez de bordar tudo em uma única direção horizontal que amassaria o tecido, divide a área em quatro quadrantes.",
      "3. O software traça o primeiro quadrante puxando o tecido para o canto superior direito.",
      "4. O segundo quadrante é bordado imediatamente no ângulo oposto, puxando o tecido no sentido contrário.",
      "5. A força mecânica de uma metade neutraliza a força da outra metade sobre as fibras do tecido.",
      "6. A junção entre os quadrantes é fundida com micro-intercalamento de pontos invisível.",
      "7. A peça sai do bastidor 100% reta, plana e sem nenhuma onda ou ruga."
    ],
    "mainTypes": [
      "Tatami Reversível em Quadrantes Cruzados (Para brasões e escudos esportivos grandes)",
      "Tatami com Efeito Óptico Damasco / Xadrez Tonal (Pelo reflexo diferenciado da luz nos ângulos)",
      "Tatami Espiral Concéntrico Reversível (Para fundos circulares e medalhões)"
    ],
    "characteristics": [
      "Eliminação quase total do enrugamento e deformação do tecido em matrizes gigantes",
      "Criação de efeitos visuais sofisticados onde a mesma cor de linha parece ter tons diferentes sob a luz",
      "Excelente flexibilidade e caimento da peça de vestuário",
      "Redução da necessidade de aplicar entretelas pesadas ou placas rígidas"
    ],
    "limitations": [
      "Exige domínio avançado de ferramentas de particionamento vetorial e controle de nós de ângulo",
      "A linha de encontro entre os blocos deve ser programada com cuidado para não deixar marcas visíveis indesejadas",
      "Não recomendada para figuras minúsculas menores que 20 mm"
    ],
    "numberingSystem": [
      "Ângulos Padrão de Reversão: 45° e 135° ou 30° e 120°",
      "Densidade Média: 0,40 mm a 0,44 mm",
      "Comprimento de Ponto Tatami: 4,0 mm a 4,5 mm"
    ],
    "advantages": [
      "✔ Tecido 100% plano após retirar do bastidor, sem efeito de 'canoa' ou 'tigela'",
      "✔ Efeito luxuoso de reflexo de luz e textura têxtil refinada",
      "✔ Maior estabilidade dimensional em peças grandes como costas de jaquetas"
    ],
    "commonErrors": [
      "❌ Preencher uma área de 15x15 cm com pontos todos no mesmo ângulo reto de 0°, deformando completamente o tecido",
      "❌ Deixar uma fresta vazia na linha de junção dos blocos por falta de sobreposição milimétrica",
      "❌ Usar underlays pesados demais que endurecem os blocos reversíveis"
    ],
    "voceSabia": "A técnica de alternar a direção das esteiras de palha 'Tatami' é uma tradição secular japonesa: as esteiras são colocadas em padrões cruzados nas salas de chá para garantir que o piso suporte o peso dos passos sem afundar em nenhuma direção específica.",
    "curiosidadeTecnica": "Quando dois blocos de ponto Tatami com a mesma linha são bordados a 90° um do outro, a reflexão especular da luz nas fibras cilíndricas de poliéster cria uma diferença de luminância de até 35%, fazendo parecer que foram usadas duas cores diferentes de linha!",
    "dicaArtrelados": "Ao bordar costas de jaquetas ou fundos grandes de brasões, divida o fundo em 4 partes no seu programa de matrizes e inverta o ângulo dos pontos em formato de 'X'. Seu bordado vai ficar incrivelmente plano e com um efeito de reflexo de luz de encher os olhos!",
    "comparisonTable": {
      "headers": [
        "Estratégia de Preenchimento",
        "Repuxo no Tecido",
        "Efeito de Reflexo de Luz",
        "Caimento da Peça"
      ],
      "rows": [
        [
          "Tatami Reversível Multi-Ângulo",
          "Mínimo (Forças neutralizadas)",
          "Rico e com brilho dimensional",
          "Super maleável e plano"
        ],
        [
          "Tatami Único Unidirecional",
          "Altíssimo (enruga o tecido)",
          "Plano e monótono",
          "Rígido com efeito concha"
        ],
        [
          "Ponto Cheio Gigante",
          "Extremo (inviável > 10 mm)",
          "Fios soltos e frouxos",
          "Estraga a peça"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES ou 80/12 SES",
      "stabilizer": "Entretela de Recorte Macia 70 g/m² ou 2 camadas de Rasgável 50 g/m²",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.42 mm com Underlay em Grade Leve"
    },
    "applications": [
      "Fundos sólidos de brasões corporativos, militares e de motoclubes",
      "Bordados gigantes de costas de jaquetas, kimonos e roupões",
      "Tapetes e almofadas com padronagens geométricas e xadrezes texturizados",
      "Painéis de arte têxtil contemporânea e quadros decorativos bordados"
    ],
    "troubleshootingTips": [
      "Se a linha de emenda entre os blocos ficar aparente demais, aplique um ligeiro 'Overlap' de 0,3 mm e ative o desalinhamento aleatório de pontos (Random Tatami)",
      "Certifique-se de que o underlay cruze toda a área antes dos blocos para dar unidade estrutural à base",
      "Use linhas trilobais brilhantes para valorizar ao máximo o jogo de luz entre os blocos invertidos"
    ],
    "relatedTerms": [
      "Ponto Tatami (Fill Stitch)",
      "Compensação de Repuxo",
      "Efeito Push-Pull",
      "Ângulo de Ponto",
      "Programação de Bordado"
    ],
    "tags": [
      "j-093",
      "tatami reversivel",
      "anti repuxo",
      "fundos grandes",
      "efeito optico",
      "matrizaria avancada",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. Stitch Types and Directional Fill Optimization in Large Scale Digitizing. Sydney, 2023.",
      "DEVEREUX, Keith. Advanced Structural Geometry for Automated Embroidery. London, 2021."
    ],
    "practicalExercise": "No seu software, crie um quadrado de 80x80 mm dividido na diagonal em dois triângulos. Configure o triângulo de cima com pontos a 45° e o de baixo com pontos a 135°. Borde ambos com a mesma linha azul marinho e admire como a luz cria dois tons maravilhosos no mesmo bordado!",
    "quickSummary": "Divisão de fundos grandes em blocos com direções de pontos opostas para não enrugar o tecido.",
    "beginnerExplanation": "É o segredo de dividir um fundo grande de bordado em pedaços e fazer as linhas irem para direções diferentes. Como um lado puxa para a direita e o outro puxa para a esquerda, o tecido fica retinho e não enruga de jeito nenhum!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-094-jogo-de-rolamentos-lineares-do-pantografo",
    "code": "J-094",
    "term": "Rolamentos Lineares do Pantógrafo",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês roulement (movimento de rolar) e do grego pantographos (desenhador universal). Sistema de translação mecânica linear de alta precisão (Hiroshi Teramachi / THK, 1972).",
    "summary": "Patins e guias com esferas recirculantes de aço temperado que sustentam e movimentam o bastidor com fluidez micrométrica.",
    "definition": "O jogo de rolamentos lineares e guias do pantógrafo (Linear Motion Bearings, Guide Rails & Ball Bushings) é o conjunto de trilhos retificados em aço cromo temperado (dureza 58-62 HRC) e blocos patins equipados com circuitos recirculantes de microesferas de aço que guiam a movimentação cartesiana nos eixos X (horizontal) e Y (profundidade) da máquina de bordar. Esse conjunto suporta o peso do pantógrafo e dos bastidores carregados, convertendo o giro dos servomotores em translações perfeitamente retilíneas com folga zero, mínimo atrito cinético e repetibilidade posicional micrométrica a cada ponto bordado.",
    "technicalDetails": "Guias lineares de precisão classe H ou P com pré-carga leve (ZF/Z0). Esferas de aço inoxidável AISI 52100 com retentores raspadores de poeira nas extremidades do bloco.",
    "construction": [
      "Trilho de aço perfilado com pistas de rolamento retificadas em arco gótico",
      "Bloco patim de aço com canais de recirculação interna de esferas",
      "Vedação raspadora frontal e lateral de borracha sintética nitrílica (NBR)",
      "Bico engraxador (Grease Nipple) para injeção de lubrificante lítio grau NLGI 2",
      "Calços de fixação com parafusos de alta resistência classe 12.9"
    ],
    "howItWorks": [
      "1. Os servomotores X e Y recebem pulsos digitais da placa-mãe para mover o pantógrafo.",
      "2. As correias dentadas ou fusos transferem o movimento para o carro do pantógrafo.",
      "3. O bloco patim desliza ao longo do trilho sustentado por centenas de microesferas de aço em circuito fechado.",
      "4. O atrito de rolamento é quase zero, permitindo acelerações instantâneas de até 2G sem vibração.",
      "5. Os raspadores de borracha limpam a poeira de linha do trilho conforme o carro se desloca.",
      "6. O bastidor para com precisão exata no local do próximo furo de agulha com desvio menor que 0,01 mm."
    ],
    "mainTypes": [
      "Guias Lineares Perfiladas com Patim de Esferas (Padrão das máquinas industriais modernas)",
      "Buxas Lineares Cilíndricas (Linear Ball Bushing) em Eixos Retificados Redondos",
      "Patins com Rolos Cruzados de Alta Rigidez para Máquinas Pesadas de Grande Formato"
    ],
    "characteristics": [
      "Movimentação suave e silenciosa sem folgas radiais ou axiais",
      "Altíssima capacidade de carga dinâmica suportando bastidores pesados",
      "Excelente precisão de repetibilidade garantindo contornos 100% alinhados",
      "Longa vida útil com lubrificação periódica com graxa de lítio com bissulfeto de molibdênio"
    ],
    "limitations": [
      "Sensível ao acúmulo de poeira de entretela resinada se os raspadores estiverem rasgados",
      "Nunca deve ser lubrificado com óleo vegetal ou graxa grafitada espessa",
      "Impactos mecânicos violentos no pantógrafo podem marcar as pistas do trilho (brinelling)"
    ],
    "numberingSystem": [
      "Largura do Trilho Padrão: 15 mm a 20 mm (Série MGN/HSR)",
      "Dureza do Trilho: 58 a 62 HRC",
      "Tolerância de Paralelismo: < 0,005 mm por metro"
    ],
    "advantages": [
      "✔ Movimento do bastidor macio, sem trancos e sem barulho de atrito",
      "✔ Garante que contornos finos fechem perfeitamente sobre os preenchimentos",
      "✔ Protege os servomotores contra sobrecarga de torque e superaquecimento"
    ],
    "commonErrors": [
      "❌ Deixar os trilhos do pantógrafo secos sem graxa, causando desgaste prematuro e folgas no bordado",
      "❌ Empurrar o pantógrafo com força bruta com a máquina ligada e os motores travados",
      "❌ Usar desengripante líquido (WD-40) nos trilhos, que dissolve a graxa interna dos rolamentos"
    ],
    "voceSabia": "A primeira guia linear com esferas recirculantes do mundo foi criada no Japão na década de 1970 pela empresa THK ('Toughness, High Quality, Know-how'), revolucionando a precisão dos robôs industriais e das máquinas de bordar computadorizadas.",
    "curiosidadeTecnica": "O coeficiente de atrito de uma guia linear de esferas é de apenas 0,002 — o que significa que é necessária uma força de apenas 20 gramas para empurrar um pantógrafo industrial de 10 kg de peso!",
    "dicaArtrelados": "Uma vez por mês, limpe a parte de cima dos trilhos do pantógrafo com um pano limpo e seco para tirar a poeira de linha. Em seguida, passe uma película fininha de graxa branca de lítio com a ponta do dedo: sua máquina vai deslizar macia como patins no gelo!",
    "comparisonTable": {
      "headers": [
        "Sistema de Guiamento",
        "Nível de Precisão",
        "Atrito Mecânico",
        "Desgaste com o Tempo"
      ],
      "rows": [
        [
          "Guia Linear com Esferas Recirculantes",
          "Centasimal (0,01 mm)",
          "Mínimo (0,002)",
          "Quase Nulo com lubrificação"
        ],
        [
          "Bucha de Bronze / Nylon Deslizante",
          "Média (0,1 mm)",
          "Médio a Alto",
          "Gera folga progressiva"
        ],
        [
          "Rodízios de Plástico em Canaleta",
          "Baixa (0,3 mm)",
          "Médio com folga",
          "Desgasta e entorta fácil"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Módulo Mecânico Estrutural)",
      "needleType": "Não aplicável",
      "stabilizer": "Não aplicável",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Movimentação cartesiana de alta precisão do pantógrafo em máquinas de bordar",
      "Sistemas de troca de mesa plana para tubular em máquinas industriais",
      "Translação do cabeçote em máquinas de acolchoamento e quilting de grande porte",
      "Manutenção e substituição em revisões estruturais de 10 anos de operação"
    ],
    "troubleshootingTips": [
      "Se o bordado estiver saindo com círculos ovalados ou contornos desencaixados, balance o pantógrafo manualmente para testar se há folga nos patins lineares",
      "Se ouvir um ruído seco de 'esferas estalando', aplique graxa de lítio com a pistola engraxadora pelo bico do patim",
      "Verifique se todos os parafusos de fixação do trilho estão apertados no torque correto com chave Allen"
    ],
    "relatedTerms": [
      "Pantógrafo",
      "Servomotor de Eixo X e Y",
      "Compensação de Repuxo",
      "Manutenção Preventiva",
      "Componentes da Máquina"
    ],
    "tags": [
      "j-094",
      "rolamento linear",
      "guia linear",
      "pantografo",
      "precisao mecanica",
      "componentes da maquina",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "THK. Linear Motion Systems Technical Handbook. Tokyo, 2022.",
      "TAJIMA. Pantograph Drive Mechanism and Linear Guide Maintenance. Nagoya, 2023."
    ],
    "practicalExercise": "Com a máquina desligada e sem bastidor, empurre suavemente a barra do pantógrafo com dois dedos para frente e para trás. Sinta a incrível suavidade do movimento linear sem nenhuma folga ou tranco: são os rolamentos de alta precisão em ação!",
    "quickSummary": "Trilhos e rolamentos especiais de aço que fazem o bastidor se movimentar lisinho e no lugar exato.",
    "beginnerExplanation": "São os trilhos de ferro super polidos com bolinhas de aço por onde o braço da máquina corre. Eles fazem o bastidor deslizar bem macio e sem tremer, garantindo que cada pontinho caia exatamente no lugar certo do desenho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-095-jaqueta-corta-vento-e-tecidos-impermeaveis-vedacao",
    "code": "J-095",
    "term": "Bordado em Corta-Vento e Tecidos Impermeáveis",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês jaquette (casaco leve) e do inglês windbreaker / waterproof (barreira contra vento e água). Tecnologia de tecidos técnicos laminados para vestuário outdoor.",
    "summary": "Técnicas de furação mínima, agulha fina e termosselagem de avesso para bordar jaquetas impermeáveis sem vazar água.",
    "definition": "O bordado em jaquetas corta-vento, anoraks e tecidos técnicos impermeáveis (Waterproof Shell & Windbreaker Embroidery) é a técnica especializada de digitalização, manuseio no bastidor e termovedação de costura aplicada sobre tecidos de poliamida/nylon resinado, poliéster Ripstop ou membranas microporosas hidrofóbicas (Gore-Tex, Dermizax). Por envolver tecidos onde cada penetração de agulha cria um microfuro permanente que compromete a barreira impermeável, exige matrizes de baixa densidade com pontos de contorno leves, agulhas ultrafinas afiadas (Microtex 65/9 ou 70/10) e a aplicação pós-bordado de fita seladora termoplástica no avesso para restaurar a estanqueidade à água.",
    "technicalDetails": "Tecidos com membrana laminada de poliuretano (PU) com coluna d'água de 5.000 a 20.000 mm. Vedação de avesso com fita seladora termocolante de 3 camadas aplicada a 160 °C com pressão média.",
    "construction": [
      "Tecido exterior de nylon resinado ou Ripstop com tratamento DWR (Durable Water Repellent)",
      "Entretela de recorte leve (Cutaway 40 g/m²) ou entretela solúvel que não retenha umidade",
      "Agulha Microtex 65/9 com ponta aguçada cônica fina",
      "Linha de poliéster com acabamento hidrofóbico anti-umidade",
      "Fita de termosselagem de costura (Seam Sealing Tape) colada no verso cobrindo os furos"
    ],
    "howItWorks": [
      "1. A jaqueta é fixada no bastidor magnético ou com fita de contato para não amassar a resina impermeável.",
      "2. A agulha fina Microtex perfura o nylon abrindo furos minúsculos de fração de milímetro.",
      "3. A matriz executa pontos cheios leves e contornos abertos, evitando concentração excessiva de furos.",
      "4. Após o término do bordado, a entretela de recorte no verso é aparada rente aos pontos.",
      "5. Uma fita seladora termoplástica impermeável é posicionada sobre todo o avesso do bordado.",
      "6. Aplica-se calor de 150 °C a 160 °C com uma mini-prensa ou ferro de ponta protegida por papel vegetal.",
      "7. A fita derrete e veda 100% dos microfuros de agulha, garantindo que nenhuma gota de chuva entre na jaqueta."
    ],
    "mainTypes": [
      "Bordado em Peito de Corta-Vento com Forro Interno Embutido (Acesso pelo zíper de serviço)",
      "Bordado em Jaquetas Técnicas de Montanhismo com Fita Seladora Termoplástica",
      "Personalização de Capas de Chuva e Coletes Náuticos de Nylon Resinado"
    ],
    "characteristics": [
      "Preserva a funcionalidade técnica do tecido esportivo e outdoor",
      "Evita o vazamento de água e a passagem de vento frio pelas costuras",
      "Visual esportivo de alta sofisticação para marcas de aventura e corporativas",
      "Alta durabilidade em lavagens frias sem descolamento da fita seladora"
    ],
    "limitations": [
      "Não aceita matrizes ultra-densas com milhares de pontos acumulados, que funcionariam como uma 'serra' picotando o nylon",
      "Não usar alfinetes no tecido fora do campo de bordado (cada furo é permanente)",
      "Não passar ferro quente direto sobre o nylon impermeável sem folha de proteção"
    ],
    "numberingSystem": [
      "Agulha Recomendada: 65/9 Microtex ou 70/10 RG",
      "Largura da Fita Seladora: 20 mm a 30 mm",
      "Temperatura de Termosselagem: 140 °C a 160 °C (tempo de 10 a 15 s)"
    ],
    "advantages": [
      "✔ Peças técnicas de alto valor de revenda com garantia total de impermeabilidade",
      "✔ Protege a jaqueta do cliente contra rasgos ao redor do bordado",
      "✔ Padrão de qualidade profissional comparável a marcas internacionais de montanhismo"
    ],
    "commonErrors": [
      "❌ Usar agulha grossa de ponta bola (90/14), que esburaca o nylon e cria rasgos ao redor das letras",
      "❌ Esquecer de selar o verso, fazendo a água da chuva escorrer para o peito do usuário",
      "❌ Apertar o aro do bastidor tradicional com muita força, quebrando a película impermeável do tecido"
    ],
    "voceSabia": "A tecnologia de fitas de termosselagem de costuras foi desenvolvida para os trajes espaciais da missão Apollo e roupas de mergulho profundo antes de se tornar o padrão mundial das jaquetas de esqui e montanha.",
    "curiosidadeTecnica": "Um bordado com 5.000 pontos em uma área de 5x5 cm perfura o tecido 5.000 vezes; sem a fita de selagem no verso, essa área perde 98% da sua resistência à pressão hidrostática, permitindo a infiltração de água mesmo sob chuva leve.",
    "dicaArtrelados": "Ao bordar jaquetas corta-vento de marca, procure por um zíper escondido na parte interna do forro (chamado zíper de acesso ou bordador). Ele serve exatamente para você colocar o bastidor só no tecido de fora, sem costurar o forro interno junto!",
    "comparisonTable": {
      "headers": [
        "Tratamento do Bordado",
        "Resistência à Chuva",
        "Risco de Picotar o Nylon",
        "Qualidade Final"
      ],
      "rows": [
        [
          "Agulha Fina + Fita Termosseladora",
          "100% Impermeável (Estanque)",
          "Quase Zero (furos mínimos)",
          "Padrão Internacional Outdoor"
        ],
        [
          "Bordado Comum sem Vedação",
          "Vaza água pelos furos da agulha",
          "Baixo se a matriz for leve",
          "Inadequado para chuva"
        ],
        [
          "Matriz Muito Densa sem Cuidado",
          "Vazamento total e rasgo fácil",
          "Altíssimo (corta o tecido)",
          "Perda da jaqueta do cliente"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "65/9 ou 70/10 Microtex Ponta Fina Aguda",
      "stabilizer": "Entretela de Recorte Leve 40 g/m² + Fita Seladora Termoplástica no verso",
      "threadTension": "95 a 105 gf (superior) e 20 gf (bobina)",
      "density": "0.45 mm a 0.48 mm (matriz leve)"
    },
    "applications": [
      "Personalização de jaquetas corta-vento para corrida, ciclismo e motoclubes",
      "Uniformes corporativos de alta tecnologia para engenharia de campo e petrolíferas",
      "Jaquetas impermeáveis de esqui, pesca esportiva e náutica",
      "Mochilas estanques e capas protetoras de equipamentos fotográficos"
    ],
    "troubleshootingTips": [
      "Se o tecido de nylon enrugar ao redor do bordado, reduza a densidade da matriz para 0,46 mm e use bastidor magnético",
      "Para aplicar a fita seladora no verso sem queimar o nylon, coloque uma folha de papel manteiga ou teflon entre o ferro e o tecido",
      "Teste a vedação após a secagem borrifando algumas gotas de água no bordado para confirmar que o tecido continua repelente"
    ],
    "relatedTerms": [
      "Agulha Microtex",
      "Bastidor Magnético",
      "Compensação de Repuxo",
      "Entretela de Recorte (Cutaway)",
      "Tipos de Tecidos"
    ],
    "tags": [
      "j-095",
      "corta vento",
      "jaqueta impermeavel",
      "nylon",
      "termosselagem",
      "outdoor",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GORE-TEX. Technical Seam Sealing and Embroidery Guidelines for Performance Outerwear. Newark, 2022.",
      "PARRISH, Gail. Technical and Performance Fabrics Machine Embroidery Guide. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue um pedaço de tecido de guarda-chuva velho ou nylon impermeável. Coloque entretela de recorte, use agulha 70/10 fina e borde uma palavra pequena com pontos leves. No verso, passe um pedaço de fita termocolante com o ferro morno protegido por papel vegetal. Pingue água em cima e veja que não vaza nada!",
    "quickSummary": "Uso de agulhas bem fininhas e fita térmica colada no verso para bordar casacos de chuva sem vazar água.",
    "beginnerExplanation": "É o jeito certo de bordar em jaquetas corta-vento e casacos de chuva. Usamos uma agulha fininha para não fazer furos grandes e depois colamos uma fitinha mágica de vedação no verso com o ferro morno para não deixar a água da chuva passar pelos furinhos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-096-juncao-de-camadas-de-enchimento-3d-foam-com-ponto-de-fixacao",
    "code": "J-096",
    "term": "Fixação de EVA em Bordado 3D",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês 3D Foam (espuma tridimensional de EVA) e tacking (alinhavo de fixação provisória). Técnica desenvolvida na indústria de bonés esportivos de beisebol nos anos 1990.",
    "summary": "Programação de costuras perfurantes e tampas em ponto cheio que prendem e cortam o EVA para relevos 3D perfeitos.",
    "definition": "A junção de camadas de enchimento 3D Foam com ponto de fixação e corte perimetral (3D Foam Tacking, Capping & Border Joints) é a metodologia técnica de matrizaria e execução de bordados em alto relevo tridimensional que utiliza placas de espuma de Etileno Vinil Acetato (EVA de 2 mm a 3 mm de densidade média/alta). O processo programa uma costura de ancoragem perimetral rápida (Tack-down stitch), seguida de 'tampas' nas extremidades abertas das letras (Capping stitches) e uma camada de ponto cheio de altíssima densidade (0,20 mm a 0,25 mm) que 'guilhotina' a espuma ao mesmo tempo em que a encapa, permitindo destacar as sobras de EVA manualmente sem deixar rebarbas visíveis.",
    "technicalDetails": "Densidade do Ponto Cheio 3D entre 0,20 mm e 0,26 mm (o dobro da densidade normal). Agulha ponta redonda afiada (RG ou SES) calibre 80/12 ou 90/14 com revestimento de titânio para perfurar a espuma.",
    "construction": [
      "Tecido base firme (sarja de boné ou brim estruturado)",
      "Costura de posicionamento que marca o local da placa de EVA",
      "Placa de EVA de 2 mm a 3 mm na mesma cor (ou tom próximo) da linha de bordar",
      "Tampas de vedação nas pontas das letras em ponto cheio perpendicular (End Capping)",
      "Camada principal em Ponto Cheio hiper-denso com compensação de repuxo de 0,50 mm",
      "Arremates de travamento reforçados nas pontas"
    ],
    "howItWorks": [
      "1. A máquina costura o underlay plano no tecido marcando o contorno da letra.",
      "2. A máquina para (Stop programado) e o operador coloca a placa de EVA sobre a área marcada.",
      "3. A máquina costura uma linha de ponto corrido leve para fixar a placa no lugar.",
      "4. As extremidades das letras recebem as 'tampas' em ponto cheio para fechar as pontas abertas.",
      "5. A máquina borda o Ponto Cheio ultra denso; a força e proximidade dos furos da agulha cortam o EVA como uma faca de picotar.",
      "6. Ao terminar, o operador puxa a placa de EVA e ela se solta perfeitamente rente à borda dos pontos.",
      "7. Um leve jato de ar quente retrai eventuais micro-fiapos de espuma, deixando o relevo impecável."
    ],
    "mainTypes": [
      "Bordado 3D Foam Tradicional em Bonés Fechados e Abertos",
      "Bordado Híbrido 3D + Ponto Plano (Combinação de letras em relevo com detalhes retos)",
      "Bordado 3D com Dupla Camada de EVA (Para relevos extremos de 4 mm a 5 mm em brasões)"
    ],
    "characteristics": [
      "Efeito visual tridimensional imponente com relevo de 2 a 4 mm de altura",
      "Acabamento padrão oficial de bonés de ligas americanas (MLB, NBA, NFL)",
      "Excelente rigidez e durabilidade sem deformar após lavagens",
      "Alto valor comercial agregado nas peças personalizadas"
    ],
    "limitations": [
      "Não aceita curvas finas menores que 2,5 mm de largura (a espuma não cabe dentro da coluna)",
      "Aumenta a contagem de pontos da matriz em cerca de 80% a 100%",
      "Exige que a cor do EVA seja idêntica ou muito parecida com a cor da linha para não aparecer no fundo"
    ],
    "numberingSystem": [
      "Espessura do EVA: 2,0 mm, 2,5 mm e 3,0 mm",
      "Dureza do EVA: 45 a 55 Shore A (espuma de alta densidade especial para bordado)",
      "Densidade do Ponto Cheio: 0,20 mm a 0,24 mm"
    ],
    "advantages": [
      "✔ Visual de alto impacto profissional que valoriza qualquer marca",
      "✔ Destaque fácil da espuma sem necessidade de tesouras manuais",
      "✔ Relevo firme que não murcha com o uso diário"
    ],
    "commonErrors": [
      "❌ Esquecer de programar as tampas nas pontas das letras ('Capping'), fazendo a espuma ficar exposta nas pontas",
      "❌ Usar densidade normal (0,40 mm), que não corta o EVA e deixa pedaços de borracha espetados para fora",
      "❌ Usar EVA comum escolar muito mole ou de cor contrastante (ex: EVA preto com linha branca)"
    ],
    "voceSabia": "O bordado 3D com EVA tornou-se febre mundial a partir dos anos 1990 quando o time de beisebol New York Yankees adotou o famoso monograma 'NY' em alto relevo tridimensional nos seus bonés oficiais da New Era.",
    "curiosidadeTecnica": "A densidade ultra-alta de 0,22 mm faz com que a agulha penetre a cada fração de milímetro. Essa perfuração concentrada funciona microscopicamente como o picote de um canhoto de cheque bancário, permitindo que a borracha se solte com a leve tração dos dedos.",
    "dicaArtrelados": "Para um bordado 3D perfeito sem nenhum fiapo de EVA aparecendo: use sempre EVA próprio para bordado (mais denso que o escolar), programe as 'tampas' nas pontas e, no final, passe um soprador térmico a 130 °C ou a pontinha do ferro: qualquer pontinha de espuma restante encolhe e desaparece na hora!",
    "comparisonTable": {
      "headers": [
        "Parâmetro do Bordado 3D",
        "Configuração Correta",
        "Configuração Errada",
        "Consequência do Erro"
      ],
      "rows": [
        [
          "Densidade do Ponto Cheio",
          "0,20 a 0,24 mm (Hiper-densa)",
          "0,40 mm (Padrão plano)",
          "Espuma não corta e fica presa"
        ],
        [
          "Tampas nas Pontas (Capping)",
          "Presentes e perpendiculares",
          "Ausentes",
          "Espuma fica aberta e feia nas pontas"
        ],
        [
          "Cor do EVA",
          "Idêntica à cor da linha",
          "Cor contrastante",
          "Borracha aparece entre os pontos"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "DBxK5 80/12 SES ou 90/14 SES Titânio",
      "stabilizer": "Entretela Especial para Boné 80 g/m² resinada",
      "threadTension": "115 a 130 gf (superior ligeiramente mais solta) e 25 gf (bobina)",
      "density": "0.20 mm a 0.24 mm"
    },
    "applications": [
      "Logomarcas e letras em relevo nos painéis frontais de bonés de marca",
      "Jaquetas esportivas e casacos de times universitários estilo 'Varsity'",
      "Bolsas esportivas, mochilas táticas e capas de raquetes de tênis",
      "Emblemas e brasões militares em alto relevo 3D"
    ],
    "troubleshootingTips": [
      "Se ficarem pontinhas de EVA saindo pelas laterais dos pontos cheios, passe um secador de cabelo no quente ou soprador térmico rápido para encolhê-las",
      "Se a linha superior arrebentar durante o bordado 3D, aplique um pouco de silicone líquido spray na carretilha e use agulha nova revestida com titânio",
      "Aumente a compensação de repuxo para 0,50 mm para que a largura da coluna de ponto cubra totalmente a altura do EVA"
    ],
    "relatedTerms": [
      "3D Foam (EVA para Bordado)",
      "Ponto Cheio (Satin)",
      "Bastidor de Boné (Cap Frame)",
      "Compensação de Repuxo",
      "Programação de Bordado"
    ],
    "tags": [
      "j-096",
      "3d foam",
      "eva",
      "alto relevo",
      "bones",
      "matrizaria 3d",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. 3D Puff and Foam Embroidery Digitizing Best Practices. Sydney, 2023.",
      "NEW ERA CAP CO. Technical Standards for 3D Embroidered Emblems. Buffalo, 2022."
    ],
    "practicalExercise": "No seu software, programe a letra 'A' com 40 mm de altura e colunas de 6 mm de largura. Configure densidade de 0,22 mm e coloque tampas nas pontas inferiores da letra. Coloque uma placa de EVA de 2 mm sobre o bastidor e borde. Destaque o EVA no final e sinta o relevo tridimensional incrível!",
    "quickSummary": "Técnica de colocar borracha EVA sob os pontos bem juntinhos para criar letras e desenhos em alto relevo 3D.",
    "beginnerExplanation": "É o jeito de fazer aquelas letras fofinhas e saltadas para fora nos bonés de marca! A gente coloca uma folhinha de EVA emborrachado na máquina, ela borda com os pontos bem juntinhos cortando a espuma, e quando termina você só puxa a sobra e o desenho fica em 3D maravilhoso!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-097-jogo-de-suportes-magneticos-de-bancada-para-atelie",
    "code": "J-097",
    "term": "Suportes Magnéticos para Ateliê",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego magnes (pedra imantada da Magnésia) e do latim supportare (sustentar). Equipamento ergonômico de produtividade inspirado nas linhas de montagem aeroespaciais.",
    "summary": "Estações de montagem e barras imantadas em neodímio para fixação ergonômica de bastidores e ferramentas de precisão.",
    "definition": "O jogo de suportes magnéticos de bancada e estação de montagem de bastidores (Magnetic Tool Holders & Hooping Station Array) é o conjunto de barras magnéticas em neodímio de alta atração (N45/N52), gabaritos angulares imantados e bases de bancada com fixação por ímãs permanentes. São projetados para organizar ferramentas críticas de corte (tesouras de precisão, pinças, chaves Allen) ao lado do cabeçote da máquina e prover um apoio ergonômico e antiderrapante para entelar peças difíceis (como camisetas, bolsas e toalhas) no esquadro exato sem necessidade de força física excessiva do operador.",
    "technicalDetails": "Ímãs de terras raras (Neodímio-Ferro-Boro - NdFeB) com revestimento triplo de níquel-cobre-níquel (Ni-Cu-Ni). Força de atração magnética de 5 a 15 kg por ponto de fixação.",
    "construction": [
      "Base de bancada em chapa de aço inoxidável escovado com grade milimetrada gravada a laser",
      "Barras magnéticas lineares com perfil emborrachado anti-arranhões",
      "Gabaritos e esquadros com pastilhas de neodímio embutidas",
      "Suporte articulado de pinça e tesoura de fácil alcance manual"
    ],
    "howItWorks": [
      "1. A base de montagem magnética é fixada na bancada ao lado da máquina de bordar.",
      "2. O aro inferior do bastidor magnético ou tradicional é posicionado sobre a base metálica.",
      "3. A grade milimetrada alinha a costura e o centro da peça no esquadro perfeito.",
      "4. A entretela e a peça de roupa são estendidas de forma plana e sem rugas.",
      "5. Os suportes magnéticos superiores travam o aro superior com pressão instantânea e homogênea.",
      "6. As ferramentas manuais (tesoura, pinça e chave) ficam sempre presas na barra imantada ao alcance dos olhos.",
      "7. O operador ganha em média 3 minutos a cada peça montada, reduzindo o cansaço das mãos."
    ],
    "mainTypes": [
      "Estação Magnética de Entelamento de Camisetas e Polos (HoopMaster / Hoop Station)",
      "Barras Magnéticas de Parede/Bancada para Tesouras e Pinças de Precisão",
      "Gabaritos Magnéticos Angulares para Centralização Rápida de Bolsos e Golas"
    ],
    "characteristics": [
      "Fixação rápida e ergonômica que previne dores nos pulsos e tendinites",
      "Mantém a bancada de trabalho 100% limpa, organizada e sem ferramentas perdidas",
      "Centralização exata e repetível em lotes de centenas de peças iguais",
      "Estrutura metálica ultra resistente com durabilidade vitalícia"
    ],
    "limitations": [
      "Não aproximar ímãs fortes de cartões magnéticos bancários, celulares ou marcapassos cardíacos",
      "Ímãs de neodímio não devem sofrer quedas no chão para não trincar a cerâmica magnética",
      "Exige bancada firme e nivelada para melhor aproveitamento da ergonomia"
    ],
    "numberingSystem": [
      "Grau Magnético: N45 ou N52 (Alta Potência)",
      "Tolerância da Grade Laser: 0,5 mm",
      "Dimensões da Base: 40x50 cm ou 50x60 cm"
    ],
    "advantages": [
      "✔ Agilidade: reduz o tempo de colocação no bastidor em mais de 50%",
      "✔ Todas as peças do lote saem com o bordado exatamente na mesma altura do peito",
      "✔ Fim do estresse de procurar tesouras e pinças sumidas na bagunça da mesa"
    ],
    "commonErrors": [
      "❌ Colocar tesouras soltas sobre a mesa da máquina onde a vibração pode derrubá-las na lançadeira",
      "❌ Deixar os ímãs de neodímio baterem bruscamente um contra o outro, lascando o revestimento",
      "❌ Entelar 'no olho' sem usar as linhas guias do suporte de esquadro"
    ],
    "voceSabia": "A metodologia japonesa '5S' de organização e o conceito 'Kaizen' de melhoria contínua utilizam suportes magnéticos e gabaritos visuais para eliminar movimentos inúteis, economizando até 2 horas de trabalho por dia em uma fábrica.",
    "curiosidadeTecnica": "Os ímãs de Neodímio perdem menos de 1% de sua força magnética a cada 100 anos em temperatura ambiente, sendo praticamente permanentes para toda a vida útil do seu ateliê.",
    "dicaArtrelados": "Instale uma barra magnética emborrachada bem na lateral da sua máquina de bordar. Coloque ali sua tesoura de bico de pato, sua pinça de precisão e a chavinha de agulha: suas ferramentas nunca mais vão sumir e seu ritmo de trabalho vai voar!",
    "comparisonTable": {
      "headers": [
        "Processo de Trabalho",
        "Tempo Médio por Peça",
        "Precisão de Alinhamento",
        "Cansaço do Operador"
      ],
      "rows": [
        [
          "Com Estação Magnética de Bancada",
          "30 a 45 segundos",
          "Milimétrica e idêntica no lote",
          "Quase Nulo (Ergonômico)"
        ],
        [
          "Montagem Manual na Mesa Comum",
          "2 a 3 minutos",
          "Varia conforme o cansaço",
          "Alto (dor nos pulsos)"
        ],
        [
          "Sem Gabarito / No Olho",
          "Demorado com retrabalho",
          "Frequente desvio de centro",
          "Estressante e improdutivo"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Equipamento Ergonômico de Bancada)",
      "needleType": "Não aplicável",
      "stabilizer": "Compatível com todos os tipos de entretelas",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Estações de colocação rápida de bastidores em confecções de uniformes e polos",
      "Organização de ferramentas manuais na área de operação de máquinas industriais",
      "Alinhamento repetitivo de monogramas em jogos de toalhas e lençóis de cama",
      "Bancadas de preparação e conferência de qualidade em ateliês de médio e grande porte"
    ],
    "troubleshootingTips": [
      "Se a peça estiver escorregando na base, limpe a superfície com álcool isopropílico para retirar a poeira e resíduos de spray adesivo",
      "Mantenha os ímãs protegidos com capas de silicone ou fita de tecido para não marcar tecidos finos de seda",
      "Fixe a base magnética na mesa com parafusos ou grampos sargentos para que ela não se desloque durante o manuseio"
    ],
    "relatedTerms": [
      "Bastidor Magnético",
      "Gabarito de Centralização",
      "Ergonomia no Ateliê",
      "Tesoura de Limpeza",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-097",
      "suporte magnetico",
      "estacao de bastidor",
      "ergonomia",
      "organizacao de atelie",
      "neodimio",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "HOOPMASTER. Ergonomic Hooping Stations and Magnetic Alignment Systems Manual. Brookfield, 2023.",
      "KAIZEN INSTITUTE. 5S Workplace Organization in Apparel and Embroidery Production. Zurich, 2022."
    ],
    "practicalExercise": "Coloque uma barra magnética ao lado da sua máquina. Prenda sua tesoura, sua pinça e sua chave de agulha nela. Durante um dia inteiro de produção de bordados, pegue e devolva as ferramentas sempre na barra magnética e note como sua bancada ficou limpa e seu trabalho rendeu muito mais!",
    "quickSummary": "Suportes e réguas com ímãs fortes para prender bastidores retos e organizar tesouras na bancada.",
    "beginnerExplanation": "São réguas e suportes especiais com ímãs potentes que você coloca na mesa para ajudar a colocar a camiseta no bastidor bem retinha e sem esforço, além de segurar as tesouras e pinças sempre no lugar certo para não sumirem!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-098-juncao-de-matrizes-espelhadas-para-monogramas-e-brasoes-simetricos",
    "code": "J-098",
    "term": "Matrizes Espelhadas e Simétricas",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim speculum (espelho, reflexo) e do grego symmetria (proporção harmônica entre as partes). Princípio clássico da arquitetura greco-romana e da heráldica renascentista.",
    "summary": "Método de programação por espelhamento vetorial exato com balanceamento de compensação de repuxo nos dois hemisférios.",
    "definition": "A junção de matrizes espelhadas para monogramas e brasões simétricos (Mirror Symmetry Digitizing & Dual-Hemisphere Joint) é a técnica de desenho e programação de matrizes onde uma metade perfeita do desenho (ramos de louro, asas, pergaminhos ou molduras barrocas) é digitalizada com rigor e posteriormente duplicada e espelhada no eixo vertical (Y) ou horizontal (X). O processo exige a reprogramação técnica do sequenciamento de costura e da compensação de repuxo no hemisfério espelhado para que a tração mecânica dos pontos não puxe o tecido assimetricamente, garantindo que o centro da matriz feche em uma linha invisível e perfeitamente reta.",
    "technicalDetails": "Espelhamento vetorial com alinhamento de nó central no esquadro exato (tolerância 0,00 mm). Inversão da ordem de costura para bordar de dentro para fora (Center-Out Sequencing) nos dois lados.",
    "construction": [
      "Metade mestre perfeitamente desenhada e limpa de nós",
      "Eixo de simetria vertical centralizado na coordenada X=0",
      "Duplicação espelhada com fusão dos nós centrais coincidentes",
      "Sequenciamento programado do centro para as extremidades em ambos os lados",
      "Elemento central (coroa, monograma ou escudo) bordado por cima da junção"
    ],
    "howItWorks": [
      "1. O digitalizador desenha com precisão cirúrgica apenas a metade esquerda da moldura do brasão.",
      "2. Aplica a ferramenta 'Espelhar e Copiar Horizontalmente' (Mirror Copy).",
      "3. Os nós que tocam o centro exato são soldados para criar uma forma contínua e sem degraus.",
      "4. O software reorganiza a ordem dos pontos para que a máquina borde primeiro o ramo esquerdo a partir do centro e depois o ramo direito também a partir do centro.",
      "5. A tensão do tecido no bastidor é distribuída igualmente para a esquerda e para a direita.",
      "6. A peça bordada final apresenta simetria visual 100% perfeita, transmitindo requinte e equilíbrio heráldico."
    ],
    "mainTypes": [
      "Simetria Bilateral Clássica (Para brasões de família, ramos de folhas e medalhões)",
      "Simetria Quádrupla / Caleidoscópica (Para toalhas de centro de mesa e mandalas)",
      "Espelhamento com Ajuste Diferencial de Ângulo de Ponto (Para manter o brilho da linha idêntico)"
    ],
    "characteristics": [
      "Economia de 50% no tempo de desenho vetorial da matriz",
      "Perfeição geométrica absoluta impossível de ser alcançada no desenho manual livre",
      "Equilíbrio de forças de repuxo evitando que o bordado entorte para um dos lados",
      "Padrão obrigatório para monogramas nobres de casamento e enxovais clássicos"
    ],
    "limitations": [
      "Textos e letras no centro do brasão nunca devem ser espelhados (ficariam invertidos)",
      "O ângulo dos pontos cheios deve ser verificado após o espelhamento para manter a reflexão de luz correta",
      "Exige compensação de repuxo idêntica nos dois lados da matriz"
    ],
    "numberingSystem": [
      "Tolerância de Centralização: 0,00 mm (Coordenada Zero no Software)",
      "Compensação de Repuxo Simétrica: 0,35 mm a 0,45 mm",
      "Densidade de Ponto Cheio: 0,38 mm a 0,42 mm"
    ],
    "advantages": [
      "✔ Simetria visual impecável digna de brasões imperiais e marcas de luxo",
      "✔ Agilidade extraordinária na criação de molduras e arabescos complexos",
      "✔ Bordado equilibrado que não torce nem enruga o tecido no bastidor"
    ],
    "commonErrors": [
      "❌ Espelhar a matriz inteira incluindo as letras do nome, deixando o texto ao contrário como se fosse no espelho",
      "❌ Deixar uma linha de costura visível ou um degrau na emenda central por falta de fusão dos nós",
      "❌ Bordar tudo da esquerda para a direita, empurrando o tecido e deixando o lado direito deformado"
    ],
    "voceSabia": "A heráldica medieval e os brasões da nobreza europeia exigiam simetria estrita como símbolo de honra, equilíbrio e justiça, sendo os desenhistas reais punidos se um dos lados do escudo tivesse um milímetro de diferença!",
    "curiosidadeTecnica": "Ao espelhar um objeto com pontos cheios, a inclinação dos pontos também é espelhada. Isso faz com que a luz reflita no mesmo ângulo em ambos os lados, dando a sensação de que o brasão é uma escultura metálica brilhante no tecido.",
    "dicaArtrelados": "Ao criar molduras e brasões para toalhas de casamento, desenhe só a metade esquerda com muito carinho. Depois use a ferramenta de espelhar com cópia do seu programa: você ganha metade do tempo e seu brasão fica perfeitamente simétrico como uma joia!",
    "comparisonTable": {
      "headers": [
        "Método de Criação",
        "Tempo de Digitalização",
        "Simetria dos Dois Lados",
        "Equilíbrio de Tensão"
      ],
      "rows": [
        [
          "Espelhamento Digital com Solda Central",
          "Rápido (15 minutos)",
          "Perfeita (100% idêntica)",
          "Totalmente equilibrado"
        ],
        [
          "Desenho Manual dos Dois Lados",
          "Lento (45 minutos)",
          "Sempre apresenta assimetrias",
          "Risco de repuxo assimétrico"
        ],
        [
          "Cópia sem Reordenação de Costura",
          "Rápido",
          "Simétrico mas entorta o tecido",
          "Deforma o lado final"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Rasgável 60 g/m² ou Hidrossolúvel de Lavar",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm no Ponto Cheio"
    },
    "applications": [
      "Brasões de casamento e monogramas com ramos de oliveira para enxovais",
      "Escudos heráldicos, condecorações militares e emblemas de famílias",
      "Molduras barrocas para toalhas de lavabo e jogos de cama de luxo",
      "Logomarcas simétricas de escritórios de advocacia e clínicas médicas"
    ],
    "troubleshootingTips": [
      "Se o centro da moldura ficar com um espaço vazio, amplie a sobreposição dos dois lados em 0,4 mm na coordenada X=0",
      "Certifique-se de que a ordem de bordado comece pelo centro e vá para as pontas para evitar empurrar o tecido",
      "Borde as iniciais ou texto central sempre por último para coroar o brasão no centro exato"
    ],
    "relatedTerms": [
      "Monograma",
      "Ponto Cheio (Satin)",
      "Compensação de Repuxo",
      "Sequenciamento de Cores",
      "Programação de Bordado"
    ],
    "tags": [
      "j-098",
      "matriz espelhada",
      "simetria",
      "brasao",
      "monograma",
      "enxoval de casamento",
      "matrizaria",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. Symmetry, Mirroring and Heraldic Design Digitizing. Sydney, 2023.",
      "FOX-DAVIES, Arthur. A Complete Guide to Heraldry and Symmetrical Embellishments. London, 2022."
    ],
    "practicalExercise": "No seu programa de bordados, desenhe um ramo de louro com 5 folhas do lado esquerdo da tela. Use a ferramenta 'Espelhar Horizontalmente com Cópia' e una as duas pontas no centro. Borde em uma toalhinha branca e veja a harmonia perfeita da simetria clássica.",
    "quickSummary": "Técnica de desenhar metade do brasão e espelhar para o outro lado com encaixe perfeito e no centro exato.",
    "beginnerExplanation": "É o truque de desenhar apenas um ladinho daquela moldura bonita de brasão ou raminhos de flores e depois mandar o computador espelhar para o outro lado. Fica tudo perfeitamente igualzinho dos dois lados, como se fosse no espelho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-099-jogo-de-reguas-e-gabaritos-de-esquadro-para-centralizacao",
    "code": "J-099",
    "term": "Réguas e Gabaritos de Centralização",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim regula (régua, padrão reto) e squadrare (tornar quadrado, esquadro de 90°). Ferramental clássico de alfaiataria e modelagem adaptado para a precisão do bordado computadorizado.",
    "summary": "Conjunto de réguas acrílicas transparentes milimetradas e gabaritos em 'L' para marcação rápida de centros e alinhamento no bastidor.",
    "definition": "O jogo de réguas e gabaritos de esquadro para centralização de bordado (Hooping Alignment Rulers, Placement Squares & Positioning Templates) é o conjunto de réguas transparentes cortadas a laser em acrílico óptico de alta resistência (gravação milimetrada em duas cores, transferidor angular de 0° a 360° e recortes específicos para golas em 'V', golas redondas e bolsos). Sua função é permitir a marcação instantânea e precisa do ponto central e dos eixos ortogonais (X e Y) em peças de vestuário prontas, eliminando bordados tortos, caídos ou fora do padrão industrial de posicionamento de peito esquerdo e barras de toalhas.",
    "technicalDetails": "Acrílico cristal de 3 mm com corte a laser e escala gravada em baixo-relevo anti-desgaste. Marcas de centro calibradas para distâncias oficiais de peito esquerdo (18 a 22 cm a partir da costura do ombro).",
    "construction": [
      "Gabarito curvo para gola redonda e gola pólo (Collar Placement Guide)",
      "Régua em 'T' com esquadro de 90° para alinhamento com a costura lateral da camiseta",
      "Gabarito em 'L' para bolsos de camisas sociais e jalecos médicos",
      "Furos centrais de marcação para caneta fantasminha ou giz de alfaiate",
      "Escalas duplas em centímetros e polegadas com linhas guias coloridas"
    ],
    "howItWorks": [
      "1. A camiseta ou camisa polo é estendida plana sobre a mesa de trabalho.",
      "2. O operador encaixa o gabarito curvo na costura da gola da peça.",
      "3. A régua indica automaticamente a posição padrão universal do peito esquerdo (ex: tamanho M = 19 cm abaixo do ombro e 9 cm do centro).",
      "4. O operador faz um pontinho com a caneta mágica apagável no furinho central da régua.",
      "5. O bastidor é posicionado sobre a peça alinhando a cruzeta transparente com a marcação feita.",
      "6. A peça é travada no bastidor 100% reta e no esquadro exato da trama do tecido.",
      "7. Todas as camisas da produção saem com o bordado exatamente no mesmo lugar."
    ],
    "mainTypes": [
      "Gabarito Universal para Peito de Camisetas e Polos (Adulto P, M, G, GG e Infantil)",
      "Régua de Esquadro para Centralização em Barras de Toalhas de Banho e Rosto",
      "Gabarito de Bolso e Lapela para Camisaria Social e Jalecos Médicos"
    ],
    "characteristics": [
      "Elimina 100% dos erros de bordados tortos ou descentralizados no peito",
      "Agilidade total: marcação de centro feita em menos de 10 segundos por peça",
      "Padronização visual impecável em encomendas corporativas de grandes lotes",
      "Material transparente que permite enxergar listras e estampas por baixo"
    ],
    "limitations": [
      "Não utilizar canetas permanentes ou giz com cera que manchem o acrílico ou o tecido",
      "Guardar as réguas penduradas ou em gavetas planas para não riscar a transparência",
      "Ajustar a distância conforme o biotipo específico caso o cliente solicite uma posição personalizada"
    ],
    "numberingSystem": [
      "Tamanhos Padronizados: Infantil (2 a 12 anos), Adulto Feminino e Adulto Masculino (P ao XG)",
      "Espessura do Acrílico: 3,0 mm padrão profissional",
      "Precisão Dimensional: ± 0,2 mm"
    ],
    "advantages": [
      "✔ Fim do medo de bordar camiseta e o logotipo ficar caído embaixo do braço ou na barriga",
      "✔ Rapidez impressionante na preparação de grandes pedidos de uniformes",
      "✔ Apresentação profissional que impressiona o cliente na visita ao ateliê"
    ],
    "commonErrors": [
      "❌ Medir a posição do bordado a olho, fazendo cada camiseta do lote sair com o bordado em uma altura diferente",
      "❌ Marcar a distância a partir da barra da camisa em vez de medir a partir da costura do ombro e da gola",
      "❌ Usar caneta comum que não apaga com o ferro ou com água, manchando a roupa do cliente"
    ],
    "voceSabia": "A posição padrão do bordado de peito esquerdo em polos corporativas tem um motivo psicológico: ela fica posicionada exatamente sobre a linha do coração, local onde as pessoas olham naturalmente ao cumprimentar alguém com um aperto de mão!",
    "curiosidadeTecnica": "A distância padrão do peito esquerdo para uma polo masculina tamanho 'G' é de 19 a 21 cm abaixo da costura do ombro e alinhada verticalmente com a linha divisória entre a gola e a manga. Usar a régua garante que essa proporção seja mantida mesmo em tecidos que esticam.",
    "dicaArtrelados": "Tenha sempre pendurado perto da sua mesa o joguinho de réguas de centralização de gola! Em 5 segundos você marca o centro da camiseta com a caneta fantasminha que apaga no ferro, encaixa o bastidor e tem certeza absoluta de que o bordado vai ficar perfeito!",
    "comparisonTable": {
      "headers": [
        "Método de Centralização",
        "Tempo por Peça",
        "Precisão no Lote",
        "Risco de Erro de Posição"
      ],
      "rows": [
        [
          "Com Jogo de Réguas / Gabaritos",
          "5 a 10 segundos",
          "100% Idêntica em todas as peças",
          "Quase Nulo"
        ],
        [
          "Com Fita Métrica Comum",
          "1 a 2 minutos",
          "Boa, mas sujeita a erros de leitura",
          "Baixo a Médio"
        ],
        [
          "No Olhômetro / Sem Medição",
          "Rápido mas perigoso",
          "Cada peça sai diferente",
          "Altíssimo (risco de perder peças)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Não aplicável (Instrumento de Medição Manual)",
      "needleType": "Não aplicável",
      "stabilizer": "Compatível com todos os estabilizadores",
      "threadTension": "Não aplicável",
      "density": "Não aplicável"
    },
    "applications": [
      "Marcação de centro em polos, camisetas e regatas para uniformes escolares e corporativos",
      "Alinhamento milimétrico de monogramas em toalhas de banho, lavabo e caminhos de mesa",
      "Centralização de nomes e especialidades em jalecos de médicos e dentistas",
      "Padronização de bordados em pernas de calças, shorts e bermudas de academia"
    ],
    "troubleshootingTips": [
      "Use caneta termossensível (fantasminha) de boa qualidade para marcar o centro pelo furinho da régua, testando sempre antes em um retalho",
      "Se o tecido for muito elástico (como lycra ou viscolycra), estenda-o suavemente sobre a mesa sem puxar antes de colocar a régua",
      "Limpe suas réguas acrílicas apenas com pano macio e água com sabão neutro para manter a transparência cristalina"
    ],
    "relatedTerms": [
      "Caneta Fantasminha (Termossensível)",
      "Gabarito de Centralização",
      "Bastidor Tradicional e Magnético",
      "Ponto Zero (Origem da Matriz)",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "j-099",
      "reguas de bordado",
      "gabaritos de gola",
      "centralizacao",
      "peito esquerdo",
      "uniformes",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "APPAREL SIZING STANDARDS. Standard Guide for Placement of Embroidered Emblems on Apparel. ASTM International, 2022.",
      "PARRISH, Gail. Precision Placement and Hooping Standards for Commercial Embroidery. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue uma camiseta polo do seu armário e coloque-a estendida na mesa. Encaixe a régua de gola no decote, olhe a marcação correspondente ao tamanho da camiseta e faça uma cruzinha com a caneta que apaga com ferro. Encaixe o bastidor e veja como o centro fica exatamente no lugar perfeito!",
    "quickSummary": "Réguas transparentes com encaixe de gola que mostram o lugar exato para bordar no peito da camiseta.",
    "beginnerExplanation": "São réguas transparentes feitas no formato certinho da gola da camiseta. Você só encosta ela na gola e ela já mostra com um furinho o lugar exato onde o bordado do peito tem que ficar, sem precisar ficar fazendo contas ou adivinhando!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-100-justaposicao-de-densidades-e-equilibrio-de-tensao-estrutural",
    "code": "J-100",
    "term": "Equilíbrio de Densidade Estrutural",
    "letter": "J",
    "level": "Avançado 🔴",
    "category": "Tensão & Calibração",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim juxta (ao lado de, junto) e ponere (colocar, dispor) e structura (construção organizada). Teoria avançada da física do ponto e biomecânica têxtil.",
    "summary": "Harmonização de áreas densas com áreas arejadas na mesma matriz para evitar o empenamento e garantir caimento perfeito.",
    "definition": "A justaposição de densidades e equilíbrio de tensão estrutural (Structural Density Juxtaposition & Mechanical Tension Balance) é o princípio supremo de engenharia e maestria em matrizaria de bordado eletrônico que rege a coexistência harmônica de diferentes zonas de densidade de pontos dentro de uma mesma matriz. Consiste em calibrar matematicamente a transição entre blocos compactos de alta cobertura (como pontos cheios de 0,38 mm) e áreas de suporte ou fundos leves e arejados (tatamis abertos de 0,60 mm a 0,80 mm), distribuindo as tensões residuais da linha de forma equilibrada por toda a trama do tecido para evitar repuxos localizados, quebras de agulha e rigidez excessiva na peça acabada.",
    "technicalDetails": "Gradiente estrutural com razão de densidade progressiva menor que 1:2 entre objetos adjacentes. Balanceamento vetorial de linhas de força mecânica em conformidade com o módulo de elasticidade de Young do tecido.",
    "construction": [
      "Camada de underlay estruturante com densidade aberta (1,5 mm a 2,5 mm)",
      "Áreas centrais densas com compensação de repuxo generosa (0,40 mm a 0,55 mm)",
      "Zonas perimetrais de alívio de tensão com densidade progressivamente decrescente",
      "Sequenciamento do centro para as bordas (Center-Out) dissipando as forças de tração",
      "Calibração milimétrica da proporção de 1/3 da linha da bobina no verso de todas as áreas"
    ],
    "howItWorks": [
      "1. O digitalizador analisa o peso e a elasticidade do tecido que receberá o bordado.",
      "2. Em vez de aplicar uma densidade única e pesada em toda a matriz, varia os espaçamentos de acordo com o tamanho de cada elemento.",
      "3. Letras pequenas recebem pontos mais finos e curtos com underlay leve; áreas grandes recebem tatami aberto e maleável.",
      "4. A máquina executa os pontos sem sobrecarregar a estrutura física das fibras do tecido.",
      "5. A tensão da linha superior (110 gf) e da bobina (22 gf) trabalha em equilíbrio perfeito com a densidade programada.",
      "6. Ao retirar a peça do bastidor, o tecido relaxa sem formar ondas, pregas ou efeito de 'couro duro'.",
      "7. O bordado integra-se ao tecido como uma segunda pele, mantendo a maciez, a beleza e a durabilidade eterna."
    ],
    "mainTypes": [
      "Equilíbrio Estrutural para Tecidos Leves e Delicados (Seda, Cambraia, Viscose)",
      "Equilíbrio Estrutural para Malhas Elásticas e Roupas Esportivas (Poliamida, Piquet, Moletom)",
      "Equilíbrio Estrutural para Bordados Gigantes de Alta Densidade (Jaquetas, Brasões e Bandeiras)"
    ],
    "characteristics": [
      "O ápice da qualidade e sofisticação técnica no bordado computadorizado",
      "Peça bordada com toque macio, maleável e caimento natural no corpo",
      "Zero enrugamento ou deformação dimensional após lavagens repetidas",
      "Longevidade extrema das linhas e do tecido sem rasgos ao longo do tempo"
    ],
    "limitations": [
      "Exige experiência avançada do digitalizador e conhecimento profundo da física dos tecidos",
      "Não pode ser obtida por digitalizações automáticas genéricas de programas básicos",
      "Requer máquina regulada com tensiômetro e sincronismo mecânico perfeito"
    ],
    "numberingSystem": [
      "Densidade de Ponto Cheio Fino: 0,38 mm a 0,40 mm",
      "Densidade de Tatami Equilibrado: 0,42 mm a 0,46 mm",
      "Densidade de Fundos Arejados: 0,60 mm a 0,90 mm"
    ],
    "advantages": [
      "✔ Bordados com caimento de alta costura que valorizam qualquer peça de vestuário",
      "✔ Elimina 100% das peças perdidas por enrugamento ou quebra de tecido",
      "✔ Reconhecimento do ateliê como referência máxima de qualidade técnica no mercado"
    ],
    "commonErrors": [
      "❌ Aplicar densidade pesada de 0,35 mm em uma matriz inteira de 20 cm, criando uma placa dura e estragando a roupa",
      "❌ Colocar contornos hiper-densos ao lado de fundos soltos sem transição suave, rasgando o tecido na divisa",
      "❌ Tentar compensar matriz mal programada apertando a tensão da máquina ao extremo"
    ],
    "voceSabia": "A engenharia têxtil moderna estuda o bordado computadorizado como uma estrutura de compósito mecânico flexível: quando a agulha insere 20.000 pontos em uma peça, ela está literalmente criando uma nova malha de reforço estrutural sobre o tecido base.",
    "curiosidadeTecnica": "Uma matriz desbalanceada com excesso de densidade pode exercer mais de 30 kgf de tração concentrada em uma área de 10 cm², o que é suficiente para deformar permanentemente a estrutura molecular de tecidos sintéticos.",
    "dicaArtrelados": "O segredo de um bordado de mestre não é colocar o máximo de pontos possível, mas sim colocar o ponto exato onde ele é necessário! Um bordado leve, com densidade bem dosada, fica mais bonito, mais brilhante, não enruga a roupa e ainda borda muito mais rápido!",
    "comparisonTable": {
      "headers": [
        "Abordagem de Matrizaria",
        "Caimento no Tecido",
        "Toque ao Tato",
        "Tempo de Máquina"
      ],
      "rows": [
        [
          "Justaposição Equilibrada Artrelados",
          "Perfeito e maleável como seda",
          "Macio e flexível",
          "Rápido e otimizado (15 min)"
        ],
        [
          "Densidade Pesada Uniforme",
          "Rígido como placa de papelão",
          "Duro e áspero",
          "Lento e sobrecarregado (30 min)"
        ],
        [
          "Densidade Frouxa sem Suporte",
          "Transparente com falhas",
          "Frouxo com laçadas soltas",
          "Rápido mas de má qualidade"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM em regime de produção contínua",
      "needleType": "75/11 SES Ponta Bola Leve ou 70/10 FFG",
      "stabilizer": "Entretela Rasgável 60 g/m² ou Entretela de Recorte Macia",
      "threadTension": "110 gf (linha superior) e 22 gf (bobina na proporção de 1/3)",
      "density": "Graduação harmonizada de 0.38 mm a 0.60 mm"
    },
    "applications": [
      "Bordados de alta costura em vestidos de festa, camisas finas e linho puro",
      "Coleções de marcas de moda feminina, masculina e infantil premium",
      "Enxovais completos de noiva e bebê com acabamento de luxo inigualável",
      "Padrão ouro de formação técnica para bordadeiras, matrizistas e ateliês profissionais"
    ],
    "troubleshootingTips": [
      "Se o bordado ficar duro como uma placa no peito da camisa, reduza a densidade geral da matriz em 15% e aumente o comprimento dos pontos de underlay",
      "Sempre verifique o verso do bordado: a linha branca da canelinha deve ocupar exatamente o terço central (1/3) de cada coluna de ponto cheio",
      "Borde uma amostra em tecido idêntico ao da peça final para validar o caimento antes de rodar a produção"
    ],
    "relatedTerms": [
      "Densidade de Ponto",
      "Compensação de Repuxo",
      "Efeito Push-Pull",
      "Tensão da Linha Superior",
      "Ponto Cheio (Satin)",
      "Ponto Tatami",
      "Tensão & Calibração"
    ],
    "tags": [
      "j-100",
      "justaposicao de densidades",
      "equilibrio estrutural",
      "fisica do ponto",
      "alta costura",
      "matrizaria de mestre",
      "tensao e calibracao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM. The Art and Science of Embroidery Digitizing: Structural Density & Balance. Sydney, 2023.",
      "DEVEREUX, Keith. Masterclass in Industrial Embroidery Mechanics and Thread Tension Dynamics. London, 2022."
    ],
    "practicalExercise": "Pegue um tecido fino de tricoline ou cambraia. Borde uma matriz com densidade equilibrada e underlay leve. Ao retirar do bastidor, passe a mão por cima do bordado de olhos fechados: sinta como a linha e o tecido parecem uma coisa só, macia e flexível. Esse é o bordado perfeito do DIBE Artrelados!",
    "quickSummary": "O equilíbrio perfeito entre partes cheias e partes leves na matriz para o bordado ficar macio e o tecido nunca enrugar.",
    "beginnerExplanation": "É o grande segredo dos mestres do bordado: dosar a quantidade certa de linhas para que o bordado fique lindo, brilhante e bem coberto, mas sem ficar pesado ou duro como uma tábua. A roupa continua macia, gostosa de vestir e perfeitamente lisinha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "j-101-janome-maquinas-de-bordado-eletronico",
    "code": "J-101",
    "term": "Janome",
    "pronunciation": "ja-nô-mi (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    "letter": "J",
    "level": "Intermediário 🟡",
    "category": "Máquinas e Equipamentos",
    "grammarClass": "Substantivo próprio / Locução substantiva.",
    "origin": "Fundada em 1921 em Tóquio (Japão) por Yosaku Ose como Pine Sewing Machine Mill, adotando em 1954 o nome definitivo Janome (que em japonês significa literalmente 'Olho de Serpente' 蛇の目, devido ao formato perfeitamente circular de sua inovadora carretilha rotativa). Pioneira global na introdução da primeira máquina de bordar e costurar computadorizada residencial do mundo (Memory Craft 8000 em 1990).",
    "summary": "Fabricante japonesa de renome mundial, consagrada pelo formato nativo .JEF, mecânica super robusta, linha Memory Craft e bastidores gigantes de até 20x36 cm.",
    "definition": "A Janome é uma das mais tradicionais, prestigiadas e respeitadas fabricantes japonesas de máquinas de costura e bordado eletrônico computadorizado do planeta. Destaca-se globalmente pela excepcional durabilidade mecânica de sua transmissão interna, baixíssimo nível de vibração e pela aclamada linha de bordado plano Memory Craft (com modelos reverenciados no Brasil como a MC-400E, MC-500E e a gigante MC-550E), além das multiagulhas semi-industriais compactas de braço livre MB-4S (4 agulhas) e MB-7 (7 agulhas). Seu ecossistema opera sob o padrão nativo de arquivos .JEF e .JPX.",
    "technicalDetails": "Equipadas com laçadeira rotativa horizontal magnética silenciosa com caixa de bobina de encaixe rápido e mola de tensão de alta sensibilidade para linha 60wt. Velocidade ajustável entre 400 e 860 PPM. Sistema exclusivo de pantógrafo com acionamento linear de alta precisão angular que suporta bastidores extragrandes sem deflexão do braço mecânico. Leitura de matrizes via porta USB 2.0 (formatada em FAT32) e suporte ao software de digitalização Digitizer MBX / Artistic Digitizer.",
    "construction": [
      "Chassi estrutural fundido em liga de alumínio reforçado com blindagem antivibração",
      "Tela sensível ao toque LCD colorida panorâmica de alta resolução com edição na tela",
      "Sistema de fixação do bastidor por pinos de travamento duplo de alta estabilidade",
      "Enfiador automático de agulha com proteção de descida para evitar empenamento",
      "Sensor duplo de quebra de linha: óptico superior e tacômetro de rotação na bobina",
      "Mecanismo de corte automático e programável de salto de pontos e final de cor",
      "Iluminação em LED distribuída em 5 pontos focais sobre toda a área do bastidor"
    ],
    "howItWorks": [
      "1. A matriz criada no software é exportada na extensão .JEF (ou .JPX com pré-visualização gráfica de alta resolução).",
      "2. O arquivo é transferido para o pendrive dentro da pasta padrão criada pela própria máquina ('Embf' ou 'MyDesign').",
      "3. O bastidor Janome adequado à dimensão do bordado é travado no carro pantográfico através dos pinos de encaixe com clique sonoro.",
      "4. Na tela colorida, a bordadeira visualiza o layout, ajusta escala, faz rotações finas em passos de 1 grau ou 45 graus e executa a simulação do traçado perimetral (Trace).",
      "5. A máquina inicia suavemente o ciclo de costura em aceleração progressiva, desacelerando automaticamente em curvas complexas de ponto cheio.",
      "6. Em caso de quebra ou término de fio, o sensor interrompe o motor em menos de 0,1 segundo e permite recuar os pontos com exatidão cirúrgica para retomar sem falhas visíveis."
    ],
    "beginnerExplanation": "A Janome é uma das máquinas de bordar mais queridas e resistentes do mundo! O grande destaque dela são os bastidores enormes: enquanto muitas máquinas domésticas só bordam até 13x18 cm, modelos como a Janome MC-500E bordam até 20x28 cm e a MC-550E chega a incríveis 20x36 cm! Isso significa que você borda toalhas de banho inteiras, costas de jaquetas e mantas grandiosas sem precisar ficar dividindo nem emendando a matriz.",
    "applications": [
      "Bordados contínuos de grande porte em barras de toalhas de banho e rosto sem emenda (bastidores RE28b e RE36b)",
      "Bordados infantis e de enxovais delicados com agulha especial Blue Tip para não furar malhas",
      "Personalização corporativa de jaquetas, casacos pesados e roupões atoalhados com alta densidade",
      "Bordados em peças tubulares montadas e bonés com os modelos multiagulhas MB-4S e MB-7",
      "Confecção de apliques e rendas FSL (Free Standing Lace) com estabilidade milimétrica"
    ],
    "mainTypes": [
      "Linha Memory Craft Histórica e Entrada (MC-200E, MC-300E, MC-350E): Bastidores 14x14 cm e 14x20 cm",
      "Linha Intermediária Robusta (MC-400E): Campo de bordado quadrado de 20x20 cm com mesa extensora",
      "Linha Campeã de Ateliê (MC-500E): Bastidor de 20x28 cm e pacote com 4 bastidores inclusos (14x14, 14x20, 20x20 e 20x28 cm)",
      "Linha de Bastidor Gigante (MC-550E): Bastidor monumental RE36b de 20x36 cm e mesa de extensão extralarga",
      "Linha Multiagulhas Profissional de Bancada (MB-4S de 4 agulhas e MB-7 de 7 agulhas): Troca automática de cones de linha e cilindro livre"
    ],
    "recommendedSettings": {
      "speedPPM": "MC-500E / MC-550E: 650 a 750 PPM para detalhes finos; até 860 PPM em pontos tatami",
      "needleType": "Sistema cabo chato 130/705 H (com recomendação das originais Janome Blue Tip 75/11 ou Red Tip 90/14)",
      "stabilizer": "Entretela rasgável de 60g/m² a 80g/m² ou entretela hidrossolúvel dupla para toalhas aveludadas"
    },
    "advantages": [
      "✔ Um dos maiores campos úteis de bordado em máquinas de cabeçote plano no mundo (20x36 cm na MC-550E)",
      "✔ Chassi metálico super reforçado que garante estabilidade e reduz a vibração ao mínimo",
      "✔ Sistema de fixação de bastidor que não empena nem desliza durante o bordado de peças pesadas",
      "✔ Mesa extensora generosa de série que suporta colchas e toalhas sem puxar o carro mecânico"
    ],
    "limitations": [
      "A máquina não lê matrizes cujo desenho exceda em 1 mm o limite do bastidor selecionado, exigindo atenção ao dimensionar no computador.",
      "Pendrives devem ser rigorosamente formatados em FAT32 e de capacidade moderada (até 16GB ou 32GB) para leitura ágil."
    ],
    "commonErrors": [
      "❌ Tentar abrir arquivos com bastidor maior do que a máquina suporta: a tela simplesmente não exibe a matriz ou emite mensagem de erro de tamanho.",
      "❌ Salvar a matriz fora da pasta padrão criada pela Janome no pendrive ('Embf'): a máquina não enxerga arquivos soltos na raiz.",
      "❌ Forçar o encaixe do bastidor para baixo sem acionar a alavanca de liberação dos pinos de pressão, danificando os rolamentos do pantógrafo.",
      "❌ Usar carretilhas plásticas de altura errada ou metálicas antigas na laçadeira horizontal, o que desregula o tensor inferior."
    ],
    "troubleshootingTips": [
      "Máquina não reconhece o pendrive: Conecte o pendrive limpo na máquina e entre no menu para formatá-lo diretamente na Janome. Ela criará a pasta oficial 'Embf'. Depois, coloque a matriz em .JEF dentro dessa pasta.",
      "Linha de cima quebrando em pontos pequenos: Substitua a agulha por uma Janome Blue Tip 75/11 original e reduza a velocidade da máquina de 860 para 650 PPM no menu de configurações.",
      "Ponto de bobina aparecendo em cima: Verifique se a linha superior não escapou do estica-fio móvel ou se não há poeira de entretela presa sob a lâmina da caixa de bobina."
    ],
    "dicaArtrelados": "O segredo de ouro das máquinas Janome é a agulha Blue Tip (tamanho 75/11 de ponta azul). Ela foi projetada com uma ponta bola especial e um olho ligeiramente ampliado que praticamente zera a perda de pontos (skipped stitches) e protege tecidos de malha e toalhas atoalhadas de puxarem fios. E nunca se esqueça: antes de passar suas matrizes para o pendrive, insira o pendrive virgem na Janome para ela criar a pastinha oficial dela!",
    "voceSabia": "A palavra 'Janome' (蛇の目) significa literalmente 'Olho de Cobra' em japonês! Esse nome foi escolhido pelo fundador em 1921 porque as primeiras carretilhas de bobina redonda que ele inventou para substituir as antigas laçadeiras longas de ferro pareciam exatamente com os olhos redondos e vigilantes de uma cobra!",
    "practicalExercise": "Aprenda o protocolo de formatação e pastas Janome: Insira um pendrive de 8GB ou 16GB na porta USB da sua máquina Janome. Acesse a tela de configurações e selecione 'Formatar USB'. Retire o pendrive e espete no computador: observe que foi criada automaticamente a pasta 'Embf'. Salve um bordado teste em .JEF dentro dela e espete de volta na máquina para comprovar a leitura instantânea!",
    "quickSummary": "Fabricante japonesa sinônimo de robustez e alta engenharia, mundialmente consagrada pelos bastidores gigantescos de 20x28 cm e 20x36 cm da linha Memory Craft e pelo formato .JEF.",
    "relatedTerms": [
      "Brother (Máquinas de Bordado Eletrônico)",
      "Formato JEF",
      "Bastidor de Bordado",
      "Agulha Blue Tip Janome",
      "Caixa de Bobina",
      "Tensão de Linha",
      "Ponto Tatami"
    ],
    "tags": [
      "j-101",
      "janome",
      "maquinas",
      "equipamento",
      "mc500e",
      "mc550e",
      "mc400e",
      "mb7",
      "jef",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JANOME SEWING MACHINE CO. Memory Craft 500E/550E Instruction Book and Service Reference. Tokyo: Janome, 2023.",
      "JANOME SEWING MACHINE CO. MB-Series Multi-Needle Embroidery Technical Guide. Tokyo, 2022.",
      "ARTRELADOS. Guia de Operação e Bastidores Especiais Janome para Grandes Dimensões. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-05"
  },
  {
    "id": "j-102-juki-maquinas-de-bordado-eletronico",
    "code": "J-102",
    "term": "Juki",
    "pronunciation": "dju-ki (má-qui-nas de bor-da-do e-le-trô-ni-co)",
    "letter": "J",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Máquinas e Equipamentos",
    "grammarClass": "Substantivo próprio / Locução substantiva.",
    "origin": "Fundada em 1938 em Tóquio (Japão) como Tokyo Juki Industrial Co., Ltd. Consolidou-se como a maior fabricante do planeta em maquinário industrial para vestuário e equipamentos mecatrônicos têxteis pesados. No bordado computadorizado, foi pioneira absoluta no desenvolvimento da primeira máquina com passagem de linha 100% autônoma por motor elétrico e sucção na tela LCD (série HZL-010) e nas consagradas máquinas industriais de bordado de ciclo programável da série AMS.",
    "summary": "Lendária fabricante japonesa (Tóquio, 1938), líder mundial em maquinário industrial pesado, célebre pela inovadora série HZL com enfiador robótico autônomo e pelas imponentes máquinas computadorizadas de bordado de ciclo programável AMS a até 2.800 PPM.",
    "definition": "A Juki é uma gigante industrial japonesa e a mais respeitada autoridade mundial em engenharia mecatrônica de costura e bordado programado. Destaca-se pelas inovadoras máquinas combinadas residenciais de bordado computadorizado da série HZL (como a lendária HZL-010, pioneira mundial no enfiamento de linha 100% automático por motor elétrico, tela colorida sensível ao toque e formato .JUK) e pela linha industrial líder global de bordados de ciclo programável da série AMS (modelos AMS-210EN, AMS-221EN e AMS-224EN), indispensáveis nas maiores indústrias de calçados esportivos, artigos em couro automotivo, jaquetas técnicas, cintos de segurança e etiquetas de marcas de luxo operando via formato universal .DST.",
    "technicalDetails": "Nas máquinas da série residencial HZL, o módulo de bordado de engate rápido opera com carro pantográfico motorizado de alta suavidade, leitura de cartões SmartMedia e formato .JUK/.DST. Na consagrada linha industrial programável AMS, os eixos X/Y são acionados por motores de passo de micropasso com servomotor direto AC no cabeçote atingindo até 2.800 PPM. Possui calcador intermediário programável com ajuste digital de altura a cada ponto, corte automático de linha pesada por lâmina rotativa de corte duplo e painel de comando programável IP-420 colorido touchscreen.",
    "construction": [
      "Chassi monobloco em ferro fundido de altíssima densidade mecânica para resistência a vibrações em alta velocidade",
      "Calcador intermediário programável acionado por motor de passo com regulagem digital de altura ponto a ponto",
      "Sistema de enfiador de agulha totalmente elétrico e autônomo acionado por botão (série HZL)",
      "Módulo de corte automático de linha reforçado com contrafaca temperada para cortar fios grossos e técnicos",
      "Painel de programação digital avançado IP-420 colorido com tela sensível ao toque e porta USB",
      "Laçadeira rotativa industrial de capacidade ampliada com lubrificação automática microdosada",
      "Grampos de fixação pneumáticos ou mecânicos de alta pressão para estabilização de couros e tecidos densos"
    ],
    "howItWorks": [
      "1. A matriz de bordado técnico ou decorativo em formato .DST ou .JUK é transferida para o painel de comando da máquina Juki via pendrive USB.",
      "2. No painel digital colorido, o operador confere os contornos do desenho, define a altura do calcador intermediário e ajusta a velocidade ideal para a gramatura do material.",
      "3. A peça (seja uma etiqueta nobre, cabedal de calçado, cinto ou tecido estruturado) é encaixada no grampo pantográfico e travada com segurança mecânica ou pneumática.",
      "4. O operador aciona o teste perimetral óptico para garantir que o ciclo de costura ocorrerá com folga total em relação às bordas metálicas da chapa.",
      "5. Ao pressionar o pedal de comando ou botão Start, a máquina inicia o ciclo operacional, acelerando até 2.500 ou 2.800 PPM com fixação milimétrica de cada ponto.",
      "6. Ao concluir o ciclo, a navalha de aço temperado corta o fio rente ao avesso e o calcador se eleva automaticamente, liberando a peça finalizada com perfeição industrial."
    ],
    "beginnerExplanation": "A Juki é a verdadeira rainha da força e da durabilidade no mundo da costura e do bordado! Sabe aquele tênis de corrida famoso que tem um bordado de reforço perfeito nas laterais, ou aquela jaqueta de couro e bolsa de marca que duram décadas sem soltar um único ponto? Quase tudo isso é feito em máquinas Juki! No ateliê, ela ficou famosa por inventar máquinas que colocavam a linha no buraquinho da agulha sozinhas com um simples toque na tela, e nas indústrias ela é a máquina mais respeitada do mundo quando você precisa bordar materiais grossos que nenhuma outra máquina consegue aguentar!",
    "applications": [
      "Bordados técnicos e decorativos em calçados esportivos, tênis e chuteiras de alta performance",
      "Gravação e bordado de monogramas e logotipos em couro nobre, bolsas e estofamentos automotivos",
      "Fixação de etiquetas tecidas e emblemas de marcas de luxo em camisas polo, jeans e jaquetas",
      "Bordados de reforço estrutural em cintos de segurança, mochilas táticas e equipamentos de proteção",
      "Bordados decorativos residenciais em roupas finas e enxovais com a linha combinada HZL"
    ],
    "mainTypes": [
      "Juki HZL-010 / HZL-009: Máquinas combinadas lendárias com enfiador elétrico robotizado e módulo de bordado",
      "Juki AMS-210EN: Máquina industrial de ciclo programável de bordado compacto (áreas de 13x10 cm e 22x10 cm)",
      "Juki AMS-221EN: Modelo industrial de médio porte de alta precisão (área de 25x16 cm e 30x20 cm)",
      "Juki AMS-224EN: Modelo de grande formato para couros automotivos e jaquetas com campo de até 60x40 cm"
    ],
    "recommendedSettings": {
      "speedPPM": "2.000 a 2.500 PPM em materiais industriais planos; 1.500 a 1.800 PPM em couros espessos e linhas grossas",
      "needleType": "Sistema industrial pesado DPx17 ou DPx5 (tamanhos 90/14 a 130/21) e 130/705 H na série doméstica HZL",
      "stabilizer": "Entretela resinada pesada, tecido termocolante estruturado ou bases plásticas de reforço industrial"
    },
    "advantages": [
      "✔ Líder mundial incontestável em robustez mecânica, precisão e longevidade operacional contínua",
      "✔ Calcador intermediário programável que elimina totalmente o salto do tecido e a perda de pontos em materiais grossos",
      "✔ Velocidades de trabalho extraordinárias de até 2.800 PPM com estabilidade de ponto insuperável",
      "✔ Corte automático de linha de alta potência capaz de cortar linhas grossas de nylon e poliéster técnico"
    ],
    "limitations": [
      "A linha industrial AMS é projetada para ciclos programados e requer conhecimentos de fixação em gabaritos metálicos.",
      "Equipamentos industriais de alto investimento voltados primariamente para produção especializada e confecção pesada."
    ],
    "commonErrors": [
      "❌ Bordar couro ou sintético com a altura do calcador intermediário desregulada, gerando marcas de compressão na superfície.",
      "❌ Utilizar agulhas de ponta comum redonda em couros rígidos em vez de agulhas com ponta cortante tipo LR ou S.",
      "❌ Operar em velocidades superiores a 2.000 PPM sem verificar o nível de óleo no cárter com bomba automática.",
      "❌ Esquecer de calibrar a pressão do grampo de fixação de acordo com a espessura do material bordado."
    ],
    "troubleshootingTips": [
      "Ponto pulando ou quebra de linha em tecidos grossos: Ajuste a altura do calcador intermediário programável no painel IP-420 para descer 0,5 mm mais rente à peça no momento da subida da agulha.",
      "Faca de corte não apara linha espessa: Afie ou substitua a navalha móvel temperada e verifique a pressão da mola do mecanismo de corte inferior.",
      "Alarme de erro no enfiador automático da linha HZL: Limpe os sensores ópticos do cabeçote com pincel macio e confirme se o estica-fio está no ponto mais alto."
    ],
    "dicaArtrelados": "Ao bordar etiquetas ou detalhes em couro em uma máquina programável Juki AMS, o segredo de mestre é a regulagem milimétrica do Calcador Intermediário Programável! Programe a descida do calcador para encostar suavemente no couro (deixando apenas 0,3 a 0,5 mm de folga): o couro não sobe junto com a agulha (acabando com o efeito de repuxo) e o seu bordado fica com uma definição geométrica tão perfeita que parece feito a laser!",
    "voceSabia": "O nome 'JUKI' é uma homenagem à tradição da mecânica de precisão japonesa: ele nasce da união das palavras japonesas 'JU' (que remete a armas de alta precisão e engenharia de tolerâncias micrométricas) e 'KI' (máquina)! A engenharia da Juki é tão avançada que a empresa colabora com tecnologias têxteis utilizadas inclusive em roupas e equipamentos da indústria aeroespacial!",
    "practicalExercise": "Ajuste Fino de Altura de Calcador no Painel Juki: Em uma máquina Juki com comando digital, acesse a tela de parâmetros do calcador intermediário. Posicione uma peça de couro de 2 mm de espessura no grampo de fixação. Altere o parâmetro de altura de 1.5 mm para 2.5 mm. Acione o ciclo de teste sem linha: observe como o calcador toca no couro sem esmagar o relevo e sobe suavemente sem fazer barulho nem deixar marcas na peça!",
    "quickSummary": "Lendária fabricante japonesa (Tóquio, 1938), líder mundial em maquinário industrial pesado, célebre pela inovadora série HZL com enfiador robótico e pelas imponentes máquinas programáveis de bordado AMS a até 2.800 PPM.",
    "relatedTerms": [
      "Janome (Máquinas de Bordado Eletrônico)",
      "Brother (Máquinas de Bordado Eletrônico)",
      "Tajima",
      "Formato DST",
      "Agulha DPx17",
      "Calcador de Bordado",
      "Velocidade PPM"
    ],
    "tags": [
      "j-102",
      "juki",
      "maquinas",
      "equipamento",
      "ams210en",
      "ams221en",
      "hzl",
      "industrial",
      "dst",
      "japonesa",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JUKI CORPORATION. Instruction Manual and Engineering Technical Reference: Computer-Controlled Cycle Machine AMS-EN Series. Tokyo: Juki, 2023.",
      "JUKI CORPORATION. The Heritage of Precision Stitching and Industrial Mecatronics. Tokyo, 2022.",
      "ARTRELADOS. Máquinas Industriais Programáveis e Tecnologia Mecatrônica Japonesa no Bordado. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-05"
  },
  {
    "id": "j-103-jack-maquinas-de-bordado-eletronico-e-automacao-textil",
    "code": "J-103",
    "term": "Jack",
    "pronunciation": "djek (má-qui-nas de bor-da-do e-le-trô-ni-co e au-to-ma-ção têx-til)",
    "letter": "J",
    "level": "Intermediário a Avançado 🟡🔴",
    "category": "Máquinas e Equipamentos",
    "grammarClass": "Substantivo próprio / Marca comercial / Locução substantiva.",
    "origin": "Fundada em 1995 em Taizhou, província de Zhejiang (China), como Jack Technology Co., Ltd. Consolidou-se como a maior fabricante global em volume de vendas de equipamentos de costura e mecatrônica têxtil do planeta, pioneira mundial na integração de inteligência artificial com comandos por voz em português, servomotores diretos integrados e sistemas computadorizados de bordado de ciclo programável da série JK-T.",
    "summary": "Maior fabricante mundial em volume da atualidade (Zhejiang, 1995), líder em tecnologia têxtil com comandos por voz em português, servomotores inteligentes e máquinas industriais de bordado de ciclo programável JK-T a até 2.700 PPM.",
    "definition": "A Jack Technology é uma das mais inovadoras e dominantes corporações globais de engenharia têxtil contemporânea, com presença expressiva e liderança de mercado nas confecções e ateliês de todo o Brasil. No segmento de bordado computadorizado e pesponto decorativo, consagrou-se com as avançadas máquinas computadorizadas de bordado de ciclo programável da série JK-T (como a JK-T1900, JK-T1906 e a versátil JK-T3020 para áreas de 30x20 cm), amplamente utilizadas para bordar logotipos, etiquetas tecidas, reforços geométricos, calçados, bolsas e detalhes decorativos em couro e tecidos pesados. Destaca-se por painéis digitais touchscreen coloridos com comandos e avisos falados por voz em português, motores de passo de micropasso nos eixos X/Y, servomotor direct-drive no cabeçote e total compatibilidade com o formato universal .DST.",
    "technicalDetails": "Equipada com servomotor de acionamento direto AC Direct-Drive coaxial acoplado ao cabeçote (eliminando correias e ruídos) e motores de passo de alta resolução nos eixos cartesianos X/Y para movimentação pantográfica do grampo com tolerância de 0,05 mm. Velocidade programável de costura e bordado técnico de até 2.700 PPM. Painel digital touchscreen com assistente de voz falada em língua portuguesa, porta USB frontal para importação de matrizes em formato universal Tajima .DST ou formato de padrão programado .VDP/.DXF, sistema de corte automático de linha com ponta ultracurta de até 2 mm e calcador intermediário programável com controle digital de altura.",
    "construction": [
      "Chassi monobloco fundido em ferro de alta densidade com pintura eletrostática anticorrosiva e design ergonômico moderno",
      "Servomotor Direct-Drive integrado diretamente no eixo superior sem correias de transmissão para silêncio e resposta imediata",
      "Motores de passo de micropasso independentes para os eixos cartesianos X e Y de alta precisão pantográfica",
      "Painel digital colorido touchscreen capacitivo com alto-falante integrado e inteligência de comando e aviso por voz",
      "Calcador intermediário programável com regulagem digital de altura ponto a ponto para evitar vibração do material",
      "Mecanismo de corte automático de linha reforçado com lâminas de aço rápido para corte de fios grossos e técnicos",
      "Grampos de fixação de troca rápida (mecânicos ou pneumáticos) com gabaritos vazados para áreas de até 300x200 mm"
    ],
    "howItWorks": [
      "1. A matriz de bordado técnico ou decorativo em formato universal Tajima .DST é inserida via pendrive USB na porta do painel Jack.",
      "2. A máquina reproduz uma saudação por voz em português confirmando a leitura do arquivo e exibe a prévia gráfica na tela touch.",
      "3. O operador seleciona o desenho, define a altura do calcador intermediário de acordo com a espessura da peça e fixa o material no grampo de aperto.",
      "4. O operador aciona o pedal de aproximação: o grampo desce prendendo firmemente a peça (etiqueta, bolso, calçado ou cinto).",
      "5. Ao acionar o pedal de costura, a máquina borda em altíssima velocidade (até 2.700 PPM), executando o desenho programado com exatidão micrométrica.",
      "6. Ao finalizar, o sistema corta a linha rente ao avesso, eleva o grampo e avisa por voz em português que a operação foi concluída com sucesso."
    ],
    "beginnerExplanation": "A Jack é a marca de máquinas inteligentes mais moderna e famosa do Brasil hoje em dia! O diferencial mais incrível dela é que as máquinas literalmente 'falam' com você em português! Se a linha arrebentar, se o óleo estiver baixo ou se ela terminar o bordado, uma voz simpática da própria máquina te avisa pelo alto-falante o que aconteceu! As máquinas de bordado programado da Jack são aquelas usadas para bordar etiquetas perfeitas de marcas famosas em camisas polo, bolsos de calças jeans e reforços de tênis esportivos em segundos!",
    "applications": [
      "Bordados técnicos e decorativos de logotipos em etiquetas de marcas de luxo e camisas polo",
      "Gravação e bordados geométricos em calçados esportivos, tênis e chuteiras de couro e sintético",
      "Bordados de reforço estrutural em bolsos de calças jeans, jaquetas e uniformes profissionais pesados",
      "Bordados personalizados e costuras programadas em alças de mochilas, bolsas e cintos de segurança",
      "Bordados em peças de couro legítimo, estofamentos automotivos e artigos de marroquinaria"
    ],
    "mainTypes": [
      "Jack JK-T1900: Máquina computadorizada de ciclo de alta velocidade para presilhas, travetes e pequenos bordados técnicos",
      "Jack JK-T1906: Modelo programável para bordados de etiquetas e monogramas compactos em área de 60x50 mm",
      "Jack JK-T3020: Máquina de bordado de ciclo programável de médio formato com campo amplo de 300x200 mm",
      "Jack JK-T6040: Modelo industrial de grande formato para painéis de couro, jaquetas técnicas e peças automotivas"
    ],
    "recommendedSettings": {
      "speedPPM": "2.000 a 2.500 PPM para tecidos planos e sarjas; 1.500 a 1.800 PPM para couros e linhas grossas",
      "needleType": "Sistema industrial resistente DPx17 ou DPx5 (tamanhos 80/12 a 120/19 de acordo com o material)",
      "stabilizer": "Entretela resinada pesada, tecido termocolante estruturado ou bases plásticas de reforço industrial"
    },
    "advantages": [
      "✔ Sistema interativo inovador com voz falada em português que orienta o operador e avisa sobre erros em tempo real",
      "✔ Servomotor Direct-Drive integrado extremamente econômico, gerando até 70% de economia de energia e zero ruído",
      "✔ Altíssima produtividade industrial operando em velocidades de até 2.700 PPM com estabilidade absoluta",
      "✔ Compatibilidade universal com o formato Tajima .DST, permitindo usar matrizes criadas em Wilcom e Embird"
    ],
    "limitations": [
      "Equipamento de ciclo programado com grampo de fixação, voltado para peças dentro da área útil do gabarito (ex.: 30x20 cm).",
      "Exige atenção ao posicionamento dos gabaritos metálicos para não haver colisão da agulha com a chapa de aperto."
    ],
    "commonErrors": [
      "❌ Iniciar o ciclo sem fazer a simulação visual sem linha para verificar se a agulha não toca na borda do grampo metálico.",
      "❌ Borda materiais espessos com o calcador intermediário muito alto, provocando repuxo e quebra de agulha.",
      "❌ Utilizar agulhas normais de ponta redonda em couros rígidos em vez de agulhas especiais com ponta tipo espada (LR).",
      "❌ Esquecer de ativar o volume da voz no painel digital, perdendo os alertas inteligentes de manutenção."
    ],
    "troubleshootingTips": [
      "Mensagem de voz avisando sobre sobrecarga no motor (Error E-07): Verifique se há linha enrolada no volante ou sob a chapa da agulha e reinicie a máquina.",
      "Ponta de linha sobrando muito comprida no final do ciclo: Acesse o menu de parâmetros de corte no painel touch e calibre a folga da navalha móvel para 1.5 mm.",
      "Ponto pulando no início do bordado: Ajuste a altura do calcador intermediário para descer 0,5 mm mais próximo da peça na tela digital."
    ],
    "dicaArtrelados": "Nas máquinas Jack com tecnologia de voz, ative sempre a função de Alerta de Manutenção Preventiva! A própria máquina monitora a quantidade de pontos executados e te avisa por voz exatamente quando é hora de colocar a gotinha de óleo na laçadeira e limpar a caixa de bobina: isso evita aquecimento prematuro das peças e mantém a sua Jack com precisão de fábrica por muitos anos!",
    "voceSabia": "A Jack foi a primeira fabricante do mundo a introduzir inteligência artificial com processamento de voz em máquinas têxteis industriais! Seus engenheiros gravaram vozes nativas em dezenas de idiomas — incluindo o português do Brasil com sotaque perfeitamente natural — para que operadores iniciantes possam aprender a operar a máquina sem sequer precisarem ler o manual impresso!",
    "practicalExercise": "Importação de Matriz .DST e Teste de Gabarito na Jack JK-T3020: Salve um logotipo de 10x10 cm em formato .DST em um pendrive. Conecte o pendrive na porta USB frontal da Jack. Ouça a confirmação sonora da máquina, toque no desenho na tela touch e acione a função 'Trace' (Traçado sem costura). Observe o grampo se mover enquanto a voz confirma o término do teste, garantindo segurança total para iniciar o bordado!",
    "quickSummary": "Maior fabricante mundial em volume da atualidade (Zhejiang, 1995), líder em tecnologia têxtil com comandos por voz em português, servomotores inteligentes e máquinas industriais de bordado de ciclo programável JK-T a até 2.700 PPM.",
    "relatedTerms": [
      "Zoje (Máquinas de Bordado Eletrônico)",
      "Typical (Máquinas de Bordado Eletrônico)",
      "Juki (Máquinas de Bordado Eletrônico)",
      "Formato DST",
      "Agulha DPx17",
      "Calcador de Bordado",
      "Velocidade PPM"
    ],
    "tags": [
      "j-103",
      "jack",
      "jkt3020",
      "jkt1900",
      "voz",
      "directdrive",
      "maquinas",
      "equipamento",
      "dst",
      "industrial",
      "artrelados"
    ],
    "bibliographicReferences": [
      "JACK TECHNOLOGY CO., LTD. Operation and Electronic Programming Manual: JK-T Series Computer-Controlled Cycle Machine. Taizhou: Jack, 2023.",
      "JACK TECHNOLOGY CO., LTD. Smart Sewing and IoT Mechanics in Modern Garment Production. Taizhou, 2023.",
      "ARTRELADOS. Inovações Tecnológicas, Interatividade por Voz e Produtividade no Bordado Industrial. Curitiba, 2024."
    ],
    "updatedAt": "2026-09-05"
  },
  {
    "id": "j-jogos-de-cama-lencois-e-fronhas-percal-ajour",
    "code": "J-104",
    "letter": "J",
    "term": "Jogos de Cama, Lençóis e Fronhas",
    "pronunciation": "jo-gus de ca-ma, len-sóis e fron-has (ˈʒɔɡuz dʒi ˈkɐmɐ)",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Locução substantiva masculina composta.",
    "origin": "Do latim 'iocus' (conjunto coordenado de peças de repouso) e do persa 'pargala' (tecido fino e nobre de algodão puro batido em alta densidade, originando a palavra 'percal').",
    "summary": "Manual para bordar jogos de cama de alto padrão em percal 200 a 400 fios, fronhas com abas e viras de lençol com simulação eletrônica de ponto ajour.",
    "definition": "O bordado em Jogos de Cama, Lençóis e Fronhas (Bedding & Pillowcase Embroidery / Enxovais de Alto Luxo em Percal e Cetim / Barrados Nobres de Cama) compreende a metodologia de projeto e execução de bordados decorativos sobre tecidos planos de alta densidade de fios (percal 200, 300 e 400 fios, cetim de algodão egípcio e puro linho). A técnica engloba a orientação invertida do bordado na vira do lençol (para que o desenho fique na posição correta quando a vira repousar dobrada sobre a colcha), a centralização simétrica nas abas das fronhas e a execução de bainhas vazadas computadorizadas inspiradas no clássico ponto ajour francês.",
    "technicalDetails": "Tecidos nobres de percal e cetim de algodão possuem fios finíssimos e trama densamente batida. Requisitos técnicos cruciais: 1) Orientação da Vira do Lençol: o bordado deve ser digitalizado ou girado de cabeça para baixo no painel em relação à borda da bainha do lençol, pois quando a cama é arrumada, o lençol é dobrado em 180° para fora sobre o cobertor; 2) Agulha 70/10 Microtex ou Ponta Aguda Fina: agulhas grossas provocam rompimento de fibras microscópicas na trama do percal, gerando pequenos orifícios irreparáveis ao redor do bordado; 3) Entretela Rasgável Macia de 50 g/m² com remoção limpa para não deixar rigidez sob a cabeça do usuário na fronha; e 4) Simulação Eletrônica de Ponto Ajour: matriz com pontos corridos de amarração que abrem vãos simétricos imitando a tecelagem vazada manual.",
    "beginnerExplanation": "Fazer um jogo de lençol bordado é o sonho de toda noiva! Mas tem um truque na vira do lençol que faz quase todo mundo errar na primeira vez: se você bordar o lençol do jeito normal, quando você dobrar a vira bonita para cima da colcha, o nome ou o desenho vai ficar de cabeça para baixo! O bordado da vira precisa ser feito virado para o lado contrário, para ficar perfeitamente de pé quando a cama estiver arrumada como em uma revista de decoração!",
    "howItWorks": [
      "1. Estende-se o lençol de cima na mesa e dobra-se a vira (cerca de 40 a 50 cm) exatamente como ela ficará arrumada na cama pronta.",
      "2. Marca-se o centro geométrico da vira do lençol e o centro das abas das duas fronhas com caneta mágica removível com calor.",
      "3. Gira-se a matriz em 180° para bordar na vira do lençol com a orientação correta de exibição.",
      "4. Prende-se o tecido com entretela rasgável fina e macia no bastidor longo (16x26, 20x30 cm ou bastidor de repetição contínua).",
      "5. Instala-se agulha nova ultrafina (calibre 70/10 Microtex) e linha de poliéster acetinada de toque suave.",
      "6. A máquina executa o bordado floral, monograma nobre ou o ponto ajour eletrônico em velocidade suave (650 PPM).",
      "7. Ao terminar, remove-se a entretela com delicadeza e passa-se o ferro a vapor para selar a trama e acomodar os pontos acetinados."
    ],
    "applications": [
      "Enxovais de casamento sofisticados em percal 400 fios com monogramas entrelaçados nas fronhas e vira.",
      "Jogos de cama temáticos para hotelaria de fazenda e pousadas históricas com ramos de oliveira e lavanda.",
      "Lençóis de berço e mini-camas infantis com detalhes delicados em ponto ajour.",
      "Fronhas avulsas com frases afetivas e personalizações para presentes de bodas."
    ],
    "characteristics": [
      "Acabamento extremamente liso e sedoso que não incomoda o rosto no travesseiro.",
      "Orientação geométrica correta quando a cama está estendida e arrumada.",
      "Sensação de frescor e sofisticação visual digna de grandes marcas de decoração."
    ],
    "commonErrors": [
      "❌ Bordar a vira do lençol com a matriz na posição normal: ao dobrar a vira sobre a cama, o bordado fica de cabeça para baixo.",
      "❌ Usar entretela dura ou recortável áspera na fronha do travesseiro, tornando o tecido áspero e desagradável para o rosto na hora de dormir.",
      "❌ Usar agulha grossa 90/14 em percal 300/400 fios: a agulha arrebenta os fios microscópicos do algodão, abrindo furos permanentes ao redor das letras."
    ],
    "troubleshootingTips": [
      "Ficaram furinhos visíveis ao redor dos pontos cheios no percal: substitua imediatamente a agulha por uma Schmetz Microtex 70/10 novinha e aumente o espaçamento de pontos (reduza a densidade) para 0,44 mm.",
      "O bordado ficou enrugado após passar o ferro: lave a peça para desmanchar a goma do tecido e aplique compensação de repuxo de 0,35 mm no software.",
      "A vira do lençol ficou torta no bastidor: dobre a vira com o ferro de passar previamente para criar um vinco guia retilíneo e alinhe com as miras do gabarito do bastidor."
    ],
    "dicaArtrelados": "A regra de ouro da Artrelados para fronhas perfeitas: nunca borde no meio do travesseiro onde a pessoa apoia o rosto! O lugar nobre e correto de bordar a fronha é na aba lateral direita (no acabamento em envelope) ou na faixa superior. Fica extremamente elegante, a pessoa dorme com conforto macio e o bordado aparece com destaque absoluto nas fotos do quarto arrumado!",
    "voceSabia": "Na tradição renascentista europeia dos séculos XVI e XVII, o enxoval de cama bordado de uma jovem nobre começava a ser preparado logo no seu nascimento, acumulando dezenas de lençóis de linho puro com monogramas heráldicos que serviam de herança familiar por gerações!",
    "practicalExercise": "Pegue uma fronha de percal lisa. Encontre o centro da aba lateral. Posicione no bastidor 13x18 com entretela rasgável fina e agulha 70/10. Borde um monograma clássico com ramos florais. Coloque um travesseiro fofo dentro e veja como a fronha simples se transforma em um item de cama de hotel 5 estrelas!",
    "quickSummary": "Procedimento de bordado de alto padrão em jogos de lençol e fronhas de percal com rotação correta da vira e agulhas ultrafinas para tecidos nobres.",
    "relatedTerms": [
      "Percal e Cetim de Algodão",
      "Vira do Lençol",
      "Agulha Microtex",
      "Ponto Ajour Eletrônico",
      "Fronha com Abas",
      "Enxoval de Cama",
      "Rotação 180 Graus"
    ],
    "tags": [
      "j-104",
      "jogosdecama",
      "lencois",
      "fronhas",
      "percal",
      "pontoajour",
      "enxovalcama",
      "altoluxo",
      "artrelados"
    ]
  }
];

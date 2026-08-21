import { Verbete } from "../types";

export const VERBETES_LETTER_Q8: Verbete[] = [
  {
    id: "quick-selection",
    code: "Q-056",
    letter: "Q",
    term: "Quick Selection",
    pronunciation: "cu-íc se-léc-tion",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino (termo técnico de software).",
    origin: "Do inglês quick (rápido) e selection (seleção, escolha de elementos).",
    summary: "Atalhos e filtros de seleção rápida no software para isolar objetos por cor, tipo de ponto ou densidade de forma instantânea.",
    definition: "O Quick Selection é o conjunto de filtros e comandos rápidos do software de bordado que permite selecionar simultaneamente todos os objetos que compartilham a mesma característica (ex: selecionar todos os pontos satim, todas as linhas de cor amarela, ou todos os pontos de suporte) com um único clique ou atalho de teclado.",
    technicalDetails: "Funciona por filtragem de metadados no DOM vetorial do arquivo de bordado. Permite aplicar alterações em massa (como trocar todas as linhas de 0.40 mm para 0.45 mm) sem ter que clicar em cada elemento individualmente na tela.",
    beginnerExplanation: "É um atalho mágico no programa: em vez de você clicar uma por uma em 20 florzinhas vermelhas para mudar a cor, você clica uma vez e o programa seleciona todas as flores vermelhas juntas para você trocar!",
    howItWorks: [
      "1. O usuário clica com o botão direito sobre um objeto ou na paleta de cores.",
      "2. Escolhe 'Selecionar Todos por Cor' ou 'Selecionar Todos por Tipo de Ponto'.",
      "3. O software destaca instantaneamente todos os elementos correspondentes na tela.",
      "4. Qualquer modificação feita nas propriedades é aplicada a todos os itens selecionados de uma vez."
    ],
    applications: [
      "Troca global de cores de um logotipo em segundos.",
      "Ajuste coletivo de compensação de encolhimento em todos os textos da matriz.",
      "Exclusão rápida de todos os pontos de salto ou conexões indesejadas."
    ],
    characteristics: [
      "Acelera a edição e personalização de matrizes complexas.",
      "Evita esquecer elementos isolados durante alterações globais.",
      "Permite agrupar e organizar camadas com facilidade."
    ],
    commonErrors: [
      "❌ Alterar parâmetros sem perceber que outros objetos da mesma cor também foram selecionados.",
      "❌ Deletar acidentalmente elementos pequenos de fundo selecionados em massa.",
      "❌ Não verificar a lista de camadas após edições coletivas."
    ],
    troubleshootingTips: [
      "Modificação alterou partes que não deviam mudar: desfaça (Ctrl+Z) e desative a seleção por cor antes de selecionar o objeto específico.",
      "Dificuldade para selecionar apenas os contornos: use o filtro 'Selecionar por Tipo: Satim / Ponto Corrido'.",
      "Objetos agrupados impedindo seleção individual: use o comando 'Desagrupar' (Ungroup / Ctrl+U)."
    ],
    dicaArtrelados: "Para mudar a cor de um bordado com 30 partes da mesma cor no Wilcom ou PE-Design, clique com o botão direito na cor desejada na barra inferior e selecione 'Selecionar por Cor'. Todas as partes ficam selecionadas em menos de 1 segundo!",
    voceSabia: "Em matrizes industriais de moda que chegam a ter mais de 2.000 pequenos objetos vetoriais, os recursos de seleção rápida reduzem o tempo de edição de 2 horas para menos de 5 minutos.",
    practicalExercise: "Abra uma matriz com várias folhas verdes espalhadas. Use o comando 'Selecionar por Cor' no software para mudar o tom de todas as folhas para verde oliva de uma só vez.",
    quickSummary: "Quick Selection é o recurso de seleção em massa por atributos comuns (como cor ou tipo de ponto), agilizando alterações globais na matriz.",
    relatedTerms: ["Filtros de Seleção", "Agrupar Objetos", "Edição em Massa", "Paleta de Cores"],
    tags: ["seleção", "software", "atalhos", "edição"]
  },
  {
    id: "quick-convert",
    code: "Q-057",
    letter: "Q",
    term: "Quick Convert",
    pronunciation: "cu-íc con-vért",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino (termo técnico de software).",
    origin: "Do inglês quick (rápido) e convert (transformar, converter formatos ou vetores).",
    summary: "Conversão instantânea entre formatos de arquivos de bordado ou transformação direta de gráficos vetoriais em pontos de bordado.",
    definition: "O Quick Convert refere-se a dois processos fundamentais: 1) A conversão rápida de vetores gráficos padrão (SVG, AI, EPS, EMF) diretamente em objetos de bordado com propriedades automáticas de preenchimento; e 2) A conversão em lote de arquivos de matriz de uma extensão de máquina para outra (ex: converter 50 arquivos PES para JEF ou DST com um único clique).",
    technicalDetails: "Na conversão gráfica, o motor vetorial traduz caminhos fechados em tatami e linhas abertas em pontos corridos ou satim. Na conversão de formatos de máquinas, o software recalcula o cabeçalho binário, funções de corte e limites de coordenadas X-Y de acordo com a marca da máquina de destino.",
    beginnerExplanation: "É a ferramenta que transforma arquivos de desenho (como SVG) em bordado num estalo, ou que transforma várias matrizes de uma marca de máquina para outra de uma vez só.",
    howItWorks: [
      "1. Para vetores: seleciona-se a arte SVG/AI e clica-se em 'Converter Vetor em Bordado'.",
      "2. O software gera os pontos correspondentes mantendo a fidelidade das curvas.",
      "3. Para formatos: seleciona-se uma pasta de arquivos e escolhe-se o formato de saída (ex: .PES -> .JEF).",
      "4. O programa gera todas as cópias compatíveis instantaneamente."
    ],
    applications: [
      "Importação direta de logos criados no CorelDraw ou Illustrator para o software de bordado.",
      "Conversão rápida de coleções inteiras de matrizes para máquinas Janome, Brother ou Singer.",
      "Transformação de contornos de satim em ponto corrido leve com um clique."
    ],
    characteristics: [
      "Ponte essencial entre o design gráfico publicitário e o universo do bordado.",
      "Compatibilidade universal com as principais extensões do mercado mundial.",
      "Agilidade extrema na conversão de grandes acervos de matrizes."
    ],
    commonErrors: [
      "❌ Converter arquivos de formato de ponto simples (ex: DST) para formatos ricos achando que os objetos vetoriais serão restaurados perfeitamente.",
      "❌ Não testar a matriz convertida no simulador de costura antes de enviar para a máquina.",
      "❌ Converter matrizes para bastidores maiores do que a máquina de destino suporta."
    ],
    troubleshootingTips: [
      "Máquina não reconhecendo o arquivo convertido: certifique-se de que a matriz cabe no tamanho do bastidor físico da máquina de destino.",
      "Cores mudando após a conversão: utilize formatos que salvam informações completas de cores (como PES, JEF ou VP3) em vez de DST.",
      "Linhas vetoriais convertidas ficando grossas demais: altere a propriedade do contorno de 'Ponto Satim' para 'Ponto Corrido'."
    ],
    dicaArtrelados: "Se você tem clientes com máquinas de várias marcas (Brother, Janome, Singer), use a ferramenta de conversão em lote (Batch Converter). Você converte uma pasta inteira de arquivos para todos os formatos em menos de 10 segundos!",
    voceSabia: "O formato DST da Tajima é o formato de ponto mais antigo do mundo ainda em uso diário, criado na década de 1980 e lido por praticamente 100% das máquinas industriais e domésticas existentes.",
    practicalExercise: "Pegue um arquivo de matriz em formato PES. Use a ferramenta de conversão do seu software para exportar uma versão em JEF e outra em DST. Abra os três no visualizador e compare a preservação das cores.",
    quickSummary: "Quick Convert é a conversão ágil de artes vetoriais em pontos de bordado ou a transformação em lote de formatos entre diferentes marcas de máquinas.",
    relatedTerms: ["Formatos de Bordado (PES, JEF, DST)", "Conversão em Lote", "Importação Vetorial", "CorelDraw / Wilcom"],
    tags: ["conversão", "formatos", "vetor", "software"]
  },
  {
    id: "quick-digitizing",
    code: "Q-058",
    letter: "Q",
    term: "Quick Digitizing",
    pronunciation: "cu-íc di-gi-tai-zing",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino (termo técnico de software).",
    origin: "Do inglês quick (rápido) e digitizing (digitalização, programação de matrizes).",
    summary: "Conjunto de métodos de digitalização automática e assistida que criam matrizes completas a partir de ilustrações com mínima intervenção manual.",
    definition: "O Quick Digitizing (também conhecido como Auto-Digitizing ou Digitalização Automática Inteligente) é o processo automatizado pelo qual o software analisa uma imagem gráfica completa, separa suas cores, reconhece contornos e formas e gera automaticamente uma matriz com sequenciamento, pontos de suporte, tatami e satim.",
    technicalDetails: "Embora extremamente rápido para formas simples e logos de alta resolução, o Quick Digitizing requer pós-edição humana para refinar compensações de encolhimento, ajustar ângulos de ponto em curvas e otimizar cortes de linha em peças de alta qualidade.",
    beginnerExplanation: "É o botão de 'criar bordado automático' do programa: você coloca a foto, aperta o botão e o programa faz a matriz inteira sozinho em poucos segundos!",
    howItWorks: [
      "1. A imagem é carregada e o software aplica redução de cores e alinhamento de bordas.",
      "2. O usuário define o tecido alvo (ex: algodão, malha ou piquê).",
      "3. O software gera as camadas de suporte e preenchimento automaticamente.",
      "4. O usuário faz a revisão final no simulador 3D antes de exportar para a máquina."
    ],
    applications: [
      "Criação rápida de matrizes para protótipos e testes visuais urgentes.",
      "Digitalização de silhuetas simples, corações, estrelas e formas geométricas.",
      "Primeiros passos de aprendizagem para iniciantes no universo da programação de matrizes."
    ],
    characteristics: [
      "Velocidade incomparável na geração inicial de matrizes.",
      "Requer imagens de alta resolução com excelente contraste cromático.",
      "Serve como excelente base de partida para posterior refino manual."
    ],
    commonErrors: [
      "❌ Usar digitalização automática em fotos complexas de rostos humanos sem edição, gerando matrizes com pontos embolados.",
      "❌ Enviar a matriz gerada automaticamente direto para a máquina sem inspecionar a ordem das camadas.",
      "❌ Não ajustar a compensação de encolhimento após o processo automático."
    ],
    troubleshootingTips: [
      "Bordado automático quebrando linha e furando o tecido: reduza a densidade e ative a compensação de encolhimento manualmente.",
      "Cores ficando misturadas: reduza o número de cores na janela de pré-processamento de imagem do assistente.",
      "Pontos em ângulos feios: use a ferramenta de editar ângulos de ponto para direcionar o brilho das colunas."
    ],
    dicaArtrelados: "Use a digitalização automática como um 'rascunho rápido': deixe o programa fazer a parte pesada de preencher as áreas grandes, e depois gaste 5 minutinhos arrumando os contornos e as entradas e saídas manualmente!",
    voceSabia: "Os algoritmos de Quick Digitizing mais modernos utilizam redes neurais treinadas com milhares de matrizes premiadas para aprender como os melhores programadores humanos posicionam os pontos.",
    practicalExercise: "Importe o desenho de uma flor simples com 3 cores. Utilize o assistente de Quick Digitizing (Auto-Digitizing). Em seguida, abra a lista de objetos e observe a ordem que o software escolheu para bordar cada parte.",
    quickSummary: "Quick Digitizing é a digitalização automática por software que transforma ilustrações em arquivos de bordado em segundos, ideal como ponto de partida para edição.",
    relatedTerms: ["Digitalização Automática", "Auto-Punch", "Qualidade da Digitalização", "Vetorização"],
    tags: ["digitalização", "automação", "software", "iniciante"]
  },
  {
    id: "quick-embroidery",
    code: "Q-059",
    letter: "Q",
    term: "Quick Embroidery",
    pronunciation: "cu-íc em-brói-de-ri",
    level: "Iniciante 🟢",
    category: "Terminologia Geral",
    grammarClass: "Substantivo masculino (conceito técnico e comercial).",
    origin: "Do inglês quick (rápido, expresso) e embroidery (bordado). Conceito de serviços rápidos e técnicas de bordado ágil no mercado de personalização.",
    summary: "Conceito de bordado expresso e técnicas otimizadas para personalização rápida e sob demanda em quiosques, lojas e eventos.",
    definition: "O Quick Embroidery (ou Bordado Rápido / Expresso) é o conjunto de métodos operacionais, matrizes compactas e fluxos de bastidoramento velozes projetados para personalizar peças em menos de 5 a 10 minutos na presença do cliente. É amplamente utilizado em lojas de shopping, feiras, eventos corporativos e quiosques de enxovais personalizados.",
    technicalDetails: "Baseia-se em matrizes de monogramas e nomes pré-digitalizados com conexões contínuas (sem cortes de linha), bastidores magnéticos de travamento instantâneo e gabaritos físicos de alinhamento rápido em camisetas, bonés e toalhas.",
    beginnerExplanation: "É o serviço de bordado na hora: aquele em que o cliente escolhe o nome ou desenho e você borda a peça na frente dele em 5 minutinhos, com tudo super organizado e rápido.",
    howItWorks: [
      "1. O cliente escolhe a fonte ou o tema pré-configurado no catálogo.",
      "2. A peça é posicionada no bastidor magnético em segundos usando gabarito de alinhamento.",
      "3. A máquina multi-agulhas executa o bordado com velocidade otimizada (850 PPM).",
      "4. Realiza-se a limpeza rápida de fios e a entrega imediata com embalagem de presente."
    ],
    applications: [
      "Personalização de toalhas e roupões em quiosques de shopping centers.",
      "Bordado de nomes em jalecos médicos e uniformes em lojas de pronta-entrega.",
      "Ativações de marcas em feiras de negócios e eventos corporativos de luxo."
    ],
    characteristics: [
      "Altíssima rentabilidade e valor percebido imediato pelo cliente.",
      "Fluxo de trabalho enxuto sem paradas ou processos demorados de pós-bordado.",
      "Uso intensivo de matrizes limpas com mínimo de trocas de cor."
    ],
    commonErrors: [
      "❌ Tentar fazer bordados de 30.000 pontos em serviços de atendimento expresso, atrasando a fila de clientes.",
      "❌ Não ter uma cartela clara de opções de fontes pré-testadas para o cliente escolher rapidamente.",
      "❌ Errar o alinhamento da peça por pressa no bastidoramento."
    ],
    troubleshootingTips: [
      "Demora no bastidoramento: adote bastidores magnéticos (Mighty Hoops) ou estações de enquadramento rápido (HoopMaster).",
      "Letras com fios soltos para limpar: utilize matrizes de fontes conectadas estilo cursivo contínuo.",
      "Linha quebrando na frente do cliente: mantenha a máquina lubrificada e agulhas novas instaladas diariamente."
    ],
    dicaArtrelados: "Para ter muito sucesso com bordado rápido, tenha um mostruário pronto com 4 estilos de letras bordadas em tecidos reais: 1 cursiva clássica, 1 moderna sem serifa, 1 infantil e 1 monograma elegante. O cliente escolhe em 30 segundos!",
    voceSabia: "Em grandes maratonas e corridas esportivas internacionais, estações de Quick Embroidery bordam o tempo oficial de prova nas camisetas dos atletas em menos de 90 segundos por participante.",
    practicalExercise: "Cronometre quanto tempo você leva para: 1) Abrir um nome na máquina, 2) Bastidorar uma toalha de lavabo, 3) Bordar e 4) Fazer o acabamento final. Treine o processo para reduzir o tempo total para menos de 6 minutos.",
    quickSummary: "Quick Embroidery é a metodologia de bordado expresso e sob demanda, que une matrizes otimizadas e bastidores ágeis para entrega rápida ao cliente.",
    relatedTerms: ["Bordado Expresso", "Bastidor Magnético", "Monogramas Rápidos", "Produtividade de Ateliê"],
    tags: ["expresso", "personalização", "atendimento", "mercado"]
  },
  {
    id: "quick-stop",
    code: "Q-060",
    letter: "Q",
    term: "Quick Stop",
    pronunciation: "cu-íc istóp",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino (termo técnico de segurança mecânica).",
    origin: "Do inglês quick (rápido, imediato) e stop (parar, interromper). Comando de frenagem eletromagnética de emergência.",
    summary: "Parada imediata de segurança da máquina ao detectar quebras de fio, travamento mecânico ou toque no botão de emergência.",
    definition: "O Quick Stop é a função eletrônica e mecânica de interrupção instantânea do ciclo de costura. Pode ser acionado automaticamente pelos sensores ópticos de quebra de linha superior/inferior, por sensores de fim de bastidor, por detecção de sobrecarga do motor (quando a agulha entorta e bate na chapa) ou manualmente pelo operador através do botão de 'Start/Stop' ou botão de emergência.",
    technicalDetails: "O sistema de frenagem dinâmica injeta corrente reversa no servomotor principal ou aciona um freio eletromagnético, imobilizando a barra de agulha em menos de 1 a 2 ciclos (fração de 0,05 segundos) no Ponto Morto Superior para evitar danos à lançadeira e ao tecido.",
    beginnerExplanation: "É a freada de emergência da máquina: quando a linha arrebenta ou você aperta o botão de parar, a máquina freia na mesma hora no ar para não estragar a sua peça.",
    howItWorks: [
      "1. Um sensor detecta a anomalia (fio quebrado, colisão ou botão pressionado).",
      "2. A placa eletrônica envia o sinal de corte imediato de energia e frenagem do motor.",
      "3. A agulha para na posição superior (PMS) fora do tecido.",
      "4. O painel grava na memória a coordenada exata do último ponto para permitir a retomada sem falhas."
    ],
    applications: [
      "Parada imediata de segurança para evitar rasgar o tecido quando a linha superior quebra.",
      "Interrupção rápida ao notar que uma dobra de tecido entrou por baixo do bastidor.",
      "Proteção mecânica do cabeçote contra quebras de lançadeira em caso de agulha presa."
    ],
    characteristics: [
      "Tempo de resposta quase instantâneo protegendo os componentes mecânicos.",
      "Mantém o registro numérico do ponto exato onde a máquina parou.",
      "Garante a segurança física das mãos da operadora durante o trabalho."
    ],
    commonErrors: [
      "❌ Continuar forçando a máquina a rodar após uma parada brusca sem inspecionar a causa.",
      "❌ Desligar a máquina direto da tomada em vez de usar o botão de parada, perdendo a coordenada do ponto na memória.",
      "❌ Puxar o tecido com força enquanto a agulha ainda está em movimento de parada."
    ],
    troubleshootingTips: [
      "Máquina parando do nada sem quebra aparente de linha: limpe o sensor óptico de linha e verifique se o fio não está frouxo na roda do sensor.",
      "Máquina demorando para parar: verifique as correias do motor principal e a calibração do freio dinâmico na assistência técnica.",
      "Após a parada, faltou bordar 3 pontos: use a função de retroceder pontos (Back Stitch) no painel e volte 5 a 10 pontos antes de reiniciar."
    ],
    dicaArtrelados: "Sempre que a máquina fizer uma parada de emergência por quebra de linha, use os botões de controle do painel para voltar 5 a 10 pontinhos para trás antes de dar 'Start'. Isso garante que não fique nenhuma falha no meio do desenho!",
    voceSabia: "Em máquinas multi-cabeças industriais de 20 cabeçotes, o sistema de Quick Stop consegue frear todas as 20 agulhas sincronizadas em menos de 40 milissegundos se qualquer uma das linhas quebrar.",
    practicalExercise: "Enquanto sua máquina estiver bordando uma matriz simples, aperte o botão 'Start/Stop' e observe a rapidez com que a agulha para na posição mais alta sem machucar o tecido. Em seguida, use o painel para avançar e recuar 5 pontos.",
    quickSummary: "Quick Stop é o sistema de frenagem eletrônica imediata que imobiliza a agulha ao detectar anomalias, garantindo segurança mecânica e salvando a peça.",
    relatedTerms: ["Sensores de Linha", "Parada de Emergência", "Ponto Morto Superior", "Retrocesso de Pontos"],
    tags: ["parada", "segurança", "sensores", "emergência"]
  },
  {
    id: "quick-start",
    code: "Q-061",
    letter: "Q",
    term: "Quick Start",
    pronunciation: "cu-íc istárt",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino (termo técnico de operação).",
    origin: "Do inglês quick (rápido, suave) e start (iniciar, partida de motor).",
    summary: "Inicialização rápida e progressiva da costura com rampa suave de aceleração para evitar estresse mecânico e quebra de fio inicial.",
    definition: "O Quick Start é o recurso eletrônico das máquinas computadorizadas que comanda a partida suave e rápida da costura (rampa de aceleração suave ou Soft Start). Ao iniciar um novo objeto ou retomar o trabalho após uma parada, a máquina executa os primeiros 3 a 5 pontos em baixa velocidade (cerca de 200 a 300 PPM) para assentar os pontos de arremate inicial antes de acelerar progressivamente até a velocidade máxima programada.",
    technicalDetails: "Evita o pico súbito de torque no fio superior e na alavanca estica-fio, que é o momento mais vulnerável para a linha escapar do olho da agulha ou romper-se por tração brusca.",
    beginnerExplanation: "É a partida suave da máquina: quando você aperta o botão verde, ela dá os primeiros pontinhos bem devagarzinho para prender a linha com calma, e só depois sai correndo na velocidade normal.",
    howItWorks: [
      "1. A operadora pressiona o botão de início (Start) com o pé calcador abaixado.",
      "2. O motor inicia o giro com curva de aceleração controlada eletronicamente.",
      "3. A máquina executa o nó de arremate inicial (Tie-in) em velocidade baixa e segura.",
      "4. Ao confirmar a ancoragem estável da laçada, o sistema atinge a velocidade plena de trabalho (ex: 800 PPM)."
    ],
    applications: [
      "Partida segura em linhas frágeis como fios metálicos e filamentos de viscose.",
      "Início suave em tecidos finos e delicados que poderiam repuxar sob arranque brusco.",
      "Retomada de costura após troca de linha manual em máquinas de uma agulha."
    ],
    characteristics: [
      "Elimina quebras de linha nos primeiros segundos de costura.",
      "Garante nós de amarração perfeitos e bem assentados.",
      "Preserva a mecânica da barra de agulha e dos discos de tensão."
    ],
    commonErrors: [
      "❌ Segurar a ponta da linha superior com muita força durante o Quick Start, entortando a agulha na partida.",
      "❌ Tentar acelerar bruscamente a máquina em fios metálicos sem usar a rampa suave de partida.",
      "❌ Iniciar a costura sem segurar suavemente a cauda da linha superior nas primeiras 3 laçadas em máquinas que não têm prendedor automático."
    ],
    troubleshootingTips: [
      "Linha escapando da agulha no primeiríssimo ponto: segure a pontinha da linha superior de leve com os dedos durante os 3 primeiros pontos.",
      "Máquina dando arranque com tranco forte: certifique-se de que a função 'Soft Start / Partida Suave' está ativada nas configurações da máquina.",
      "Pontos iniciais frouxos: confira se o nó de amarração inicial (Tie-in) está configurado no software da matriz."
    ],
    dicaArtrelados: "Ao dar a partida no bordado, segure a pontinha da linha de cima suavemente para o lado por apenas 3 segundos enquanto a máquina dá os primeiros pontinhos. Assim que ela acelerar, solte: a linha nunca mais vai escapar da agulha no início!",
    voceSabia: "O conceito de 'Rampa de Aceleração Suave' (Soft Start) foi desenvolvido na engenharia automotiva para trens de alta velocidade e adotado pelas máquinas de bordar industriais japonesas para proteger os fios de seda delicados.",
    practicalExercise: "Inicie um bordado prestando atenção no som e no movimento da agulha: conte mentalmente os primeiros 4 pontos lentos da partida suave e sinta a aceleração contínua e elegante até a velocidade final.",
    quickSummary: "Quick Start é a partida com rampa suave de aceleração que assenta os pontos de amarração iniciais e impede o rompimento da linha na arrancada.",
    relatedTerms: ["Partida Suave (Soft Start)", "Pontos de Amarração (Tie-in)", "Aceleração Progressiva", "Operação de Bordado"],
    tags: ["partida", "início", "aceleração", "operação"]
  }
];

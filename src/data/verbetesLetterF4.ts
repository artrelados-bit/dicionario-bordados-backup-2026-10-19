import { Verbete } from "../types";

export const VERBETES_LETTER_F_PART4: Verbete[] = [
  {
    id: "f-019-formato-pes-brother-embroidery-system",
    code: "F-019",
    term: "Formato PES - Brother Embroidery System (Brother & Baby Lock Format)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês PE-Design Stitch Format. Desenvolvido pela corporação japonesa Brother Industries Ltd. e Baby Lock nos anos 1990 para sua linha icônica de máquinas e softwares de bordado doméstico e semi-industrial (PE-Design).",
    summary: "O formato de bordado mais popular do mercado doméstico mundial, que armazena dados de pontos, cores reais e miniaturas gráficas para máquinas Brother e Baby Lock.",
    definition: "O Formato PES (.PES - PE-Design Stitch File) é a extensão proprietária desenvolvida pela Brother Industries para sua vasta linha de máquinas de bordar domésticas (como as séries PE, BP, NQ, Innov-is, Stellaire e Luminaire) e semi-industriais (séries PR-600 a PR-1055X). Ao contrário de formatos puramente numéricos como o DST, o arquivo .PES incorpora metadados avançados que incluem miniaturas gráficas coloridas (thumbnails) para pré-visualização no painel touchscreen da máquina, catálogo de cores reais com códigos de linhas comerciais (ex: Brother Poly, Madeira Polyneon), dimensões do bastidor e comandos de corte automático refinados.",
    technicalDetails: "Versões do formato: desde PES v1.0 até PES v11.0 (gerado pelo PE-Design 11). Cada versão adiciona suporte a novos bastidores magnéticos, pontos de quilting, preenchimentos especiais e paletas de cores ampliadas. É retrocompatível (máquinas novas leem versões antigas, mas máquinas antigas exigem que arquivos recentes sejam salvos em versões anteriores como PES v6 ou v9).",
    howItWorks: [
      "1. A bordadeira salva sua matriz no formato .PES compatível com a versão da sua máquina Brother.",
      "2. Copia o arquivo para um pendrive USB e insere na lateral da máquina.",
      "3. O processador da Brother lê o cabeçalho .PES e exibe instantaneamente a imagem colorida do bordado no visor colorido.",
      "4. A máquina mostra a lista sequencial de linhas recomendadas com os códigos das cores originais.",
      "5. Ao iniciar, a máquina executa os pontos, paradas e cortes de linha com sincronismo milimétrico.",
      "6. A peça bordada finaliza com máxima fidelidade às cores e formas desenhadas."
    ],
    beginnerExplanation: "É o formato oficial de todas as máquinas de bordar da marca Brother e Baby Lock! Quando você coloca um arquivo .PES no pendrive, a tela da sua máquina mostra a foto do desenho coloridinho com a miniatura perfeita e a lista de cores certinhas para você bordar sem erro!",
    applications: [
      "Uso nativo em 100% das máquinas de bordar Brother (PE770, PE810L, BP1430, BP1530, BP2150, PR670, PR1055X, etc.)",
      "Máquinas de bordar Baby Lock e equipamentos compatíveis",
      "Venda e distribuição de matrizes para o maior ecossistema de ateliês domésticos do mundo",
      "Exibição de miniaturas coloridas (thumbnails) no Windows Explorer através de programas como PE-Design ou Thumbnailer"
    ],
    commonErrors: [
      "Salvar a matriz em uma versão ultra-recente (ex: PES v11) e tentar abrir em uma máquina Brother mais antiga (como PE770 ou PE810) que só lê até PES v9, fazendo a máquina dizer 'arquivo não suportado'",
      "Salvar a matriz em tamanho maior do que a área física do bastidor da máquina (ex: salvar 13x18cm para máquina que só tem bastidor 10x10cm)",
      "Colocar arquivos .PES dentro de pastas com nomes cheios de acentos, caracteres especiais ou caminhos muito longos no pendrive"
    ],
    troubleshootingTips: [
      "Se a sua máquina Brother não reconhecer o arquivo .PES no pendrive, abra a matriz no software e salve como 'PES Versão 6' ou 'PES Versão 9' (máxima compatibilidade)",
      "Certifique-se de que as dimensões da matriz cabem com pelo menos 2mm de folga dentro do limite do bastidor",
      "Coloque os arquivos .PES soltos na raiz do pendrive ou em pastas simples sem acentos (ex: BORDADOS)"
    ],
    dicaArtrelados: "Tem uma máquina Brother e a matriz não abre de jeito nenhum? Na hora de salvar no software, escolha sempre a opção 'PES v9' ou 'PES v6'. Essa versão é a mais universal para máquinas Brother e abre tanto nas mais novinhas quanto nas mais antigas sem dor de cabeça!",
    voceSabia: "A extensão PES é a abreviação oficial de 'Personal Embroidery System' (Sistema Pessoal de Bordado), criado no Japão para revolucionar os ateliês caseiros nos anos 90!",
    practicalExercise: "Pegue uma matriz no seu programa de edição, clique em 'Salvar Como', selecione .PES e teste salvar em 'PES Versão 9'. Coloque no pendrive e veja a miniatura colorida abrir linda no visor da sua Brother!",
    quickSummary: "Formato proprietário padrão da Brother e Baby Lock com suporte a cores reais, miniaturas e cortes automáticos.",
    relatedTerms: ["Formato DST", "Formato JEF", "Formato EXP", "Software PE-Design"],
    tags: ["f-019", "formato pes", "brother", "baby lock", "pe design", "matriz brother", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES LTD. PE-Design 11 & Embroidery Machine File Formats Reference Manual. Nagoya, 2023.",
      "BABY LOCK USA. Multi-Needle & Single-Needle Embroidery Compatibility Guide. St. Louis, 2022.",
      "ARTRELADOS. O Guia Completo das Máquinas e Formatos Brother PES. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-020-formato-jef-janome-embroidery-format",
    code: "F-020",
    term: "Formato JEF - Janome Embroidery Format (Janome & Elna Format)",
    letter: "F",
    level: "Fundamental 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês Janome Embroidery Format. Criado pela fabricante japonesa Janome Sewing Machine Co. Ltd. (Tóquio) para sua conceituada família de máquinas Memory Craft (MC) e equipamentos da marca suíça Elna.",
    summary: "Formato oficial padrão de arquivos de bordado para todas as máquinas Janome e Elna, com suporte a paleta de cores e miniaturas.",
    definition: "O Formato JEF (.JEF - Janome Embroidery File) é a extensão nativa de costura desenvolvida pela Janome Sewing Machine Co. para sua linha de máquinas de bordar domésticas e profissionais Memory Craft (séries MC 200E, MC 350E, MC 400E, MC 500E, MC 550E, MB-4 e MB-7) e máquinas Elna (eXpressive). Armazena as coordenadas precisas de costura, paradas de troca de linha, miniaturas gráficas para visualização na tela LCD touchscreen e índices de correspondência com a cartela de cores oficial Janome e Madeira.",
    technicalDetails: "Estrutura do arquivo: Cabeçalho com deslocamento do centro (offset), limites de coordenadas X/Y em relação ao centro (0,0) do bastidor, contagem de pontos e tabela de cores. Exige que a matriz esteja estritamente centralizada dentro das dimensões oficiais dos bastidores Janome (ex: SQ14b 14x14cm, RE20b 14x20cm, SQ20b 20x20cm, RE28b 20x28cm, RE36b 20x36cm).",
    howItWorks: [
      "1. A bordadeira exporta o desenho do software no formato .JEF, selecionando o bastidor exato da sua máquina Janome.",
      "2. O arquivo é transferido para o pendrive USB.",
      "3. Importante: no pendrive Janome, o arquivo deve ser gravado dentro da estrutura de pastas padronizada: 'EMB' > 'EMBF'.",
      "4. Ao plugar o pendrive na máquina Janome, a tela Memory Craft exibe a miniatura colorida do bordado.",
      "5. A máquina posiciona o pantógrafo com suavidade a partir das coordenadas centrais.",
      "6. A costura é executada com a precisão mecânica japonesa característica da Janome."
    ],
    beginnerExplanation: "É o formato oficial de todas as máquinas de bordar da marca Janome e Elna! Para a sua Janome enxergar a matriz no pendrive, o arquivo tem que ser .JEF e precisa estar dentro da pastinha 'Embf' que a própria máquina cria no pendrive!",
    applications: [
      "Uso nativo obrigatório em todas as máquinas Janome (MC200E, MC350E, MC400E, MC500E, MC550E, MB-4S, MB-7)",
      "Máquinas de bordar da marca Elna (eXpressive 830, 860, 920)",
      "Produção de matrizes para ateliês especializados em bordados em toalhas, enxovais e vestuário com bastidores grandes Janome",
      "Padronização de catálogos no software Janome Digitizer MBX / Artistic Digitizer"
    ],
    commonErrors: [
      "Salvar o arquivo .JEF solto na raiz do pendrive em vez de colocar dentro da pasta 'EMB/EMBF', fazendo a máquina Janome mostrar 'nenhum arquivo encontrado'",
      "Exceder em 1 único milímetro o limite do bastidor Janome, fazendo a máquina recusar a abertura do arquivo",
      "Salvar matriz descentralizada fora do eixo (0,0)"
    ],
    troubleshootingTips: [
      "Formate o pendrive na própria máquina Janome: ela criará automaticamente a pasta 'EMBF' onde você deve colar seus arquivos .JEF",
      "Sempre centralize a matriz no eixo (0,0) do software antes de salvar como .JEF",
      "Se o desenho for maior que 20x28cm e você tiver uma Janome 550E, certifique-se de selecionar o formato .JEF+ ou o bastidor RE36b no software"
    ],
    dicaArtrelados: "Bordadeira da Janome: a dica de ouro para sua máquina ler o pendrive de primeira é colocar o pendrive zerado na máquina, ligar e esperar ela criar a pasta 'EMB'. Depois no computador, coloque suas matrizes .JEF dentro de 'EMB/EMBF'. Não tem erro, abre na hora!",
    voceSabia: "A Janome foi a empresa pioneira mundial a lançar a primeira máquina de bordar computadorizada doméstica programável do mundo, a revolucionária Memory Craft 8000, lançada no Japão em 1990!",
    practicalExercise: "Insira seu pendrive na sua Janome, formate pelo menu da máquina, leve ao computador e observe a pastinha 'EMBF' criada: cole uma matriz .JEF lá dentro e veja como ela aparece instantaneamente no visor!",
    quickSummary: "Formato proprietário padrão da Janome e Elna, exigindo gravação na pasta EMBF e centralização exata no bastidor.",
    relatedTerms: ["Formato PES", "Formato DST", "Formato EXP", "Bastidor Janome RE20b / SQ20b"],
    tags: ["f-020", "formato jef", "janome", "elna", "memory craft", "mc500e", "mc550e", "artrelados"],
    bibliographicReferences: [
      "JANOME SEWING MACHINE CO. LTD. Memory Craft Embroidery Machine User & Format Protocol Guide. Tokyo, 2023.",
      "ELNA INTERNATIONAL CORP. eXpressive Embroidery System & File Management. Genebra, 2022.",
      "ARTRELADOS. O Manual Completo do Usuário Janome: Da Pasta EMBF ao Bordado Perfeito. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-021-formato-exp-bernina-melco-expanded",
    code: "F-021",
    term: "Formato EXP - Bernina & Melco Expanded Format",
    letter: "F",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês Expanded Stitch Format. Desenvolvido pela corporação norte-americana Melco nos anos 1980 e adotado pela prestigiada fabricante suíça Bernina International para sua linha de máquinas de alta precisão.",
    summary: "Formato de alta precisão adotado pelas máquinas suíças Bernina e industriais Melco, acompanhado por arquivos auxiliares de cores (.INF).",
    definition: "O Formato EXP (.EXP - Expanded Format) é o padrão de arquivo de pontos utilizado pelas máquinas de bordar suíças Bernina (séries 5, 7, 8 e Bernina 700/790/880 Plus) e pelas máquinas industriais modulares Melco (Amaya e EMT16X). O arquivo .EXP contém puramente os dados matemáticos de coordenadas de agulha e saltos em alta densidade; para fornecer as informações completas de cores reais e miniaturas gráficas às máquinas Bernina, ele trabalha em conjunto com arquivos companheiros gerados na mesma pasta: o arquivo .INF (tabela de cores) e .BMP (miniatura visual).",
    technicalDetails: "Precisão de coordenadas cartesianas: passos de 0,1mm. O formato .EXP puro não carrega cores internas; em sistemas Bernina modernos, o trio de arquivos (.EXP + .INF + .BMP) garante que a tela exiba a arte colorida com os números das linhas comerciais e o posicionamento centralizado no bastidor suíço.",
    howItWorks: [
      "1. Ao salvar a matriz para Bernina no software (como Bernina Embroidery Software v9 ou Wilcom), são gerados os arquivos correspondentes (ex: 'desenho.exp' e 'desenho.inf').",
      "2. A bordadeira copia ambos os arquivos para o pendrive.",
      "3. Ao inserir o pendrive na máquina Bernina, o sistema operacional lê o .EXP para a costura e o .INF para carregar as cores reais no visor.",
      "4. A máquina Bernina executa os pontos com controle de tensão adaptativa e altíssima estabilidade mecânica.",
      "5. O resultado exibe a lendária perfeição de ponto da engenharia suíça."
    ],
    beginnerExplanation: "É o formato usado pelas máquinas de bordar suíças da marca Bernina e pelas máquinas industriais Melco! Quando você salva para Bernina, ele cria o arquivo .EXP dos pontos e um arquivinho de cor junto para a máquina saber as cores certas de cada parte do bordado!",
    applications: [
      "Uso nativo em todas as máquinas de bordar Bernina (B500, B570, B590, B700, B770, B790, B880)",
      "Máquinas industriais Melco Amaya e EMT16X",
      "Bordados de alta precisão em alta-costura, patchwork artístico e monogramas finos",
      "Ateliês profissionais que exigem máxima regularidade de tensão de ponto"
    ],
    commonErrors: [
      "Copiar apenas o arquivo .EXP para o pendrive e esquecer o arquivo .INF de cores, fazendo a Bernina abrir o desenho com cores aleatórias",
      "Usar pendrives com capacidade muito alta (acima de 32GB) em modelos mais antigos de máquinas Bernina",
      "Redimensionar o arquivo .EXP diretamente no painel da máquina sem conferir a densidade dos pontos"
    ],
    troubleshootingTips: [
      "Copie sempre TODOS os arquivos de mesmo nome (.EXP, .INF e .BMP) juntos para o seu pendrive",
      "Nas máquinas Bernina, utilize o software gratuito Bernina ArtLink para conferir e enviar arquivos perfeitamente formatados",
      "Se sua Bernina não ler o arquivo, verifique se o pendrive está formatado em FAT32"
    ],
    dicaArtrelados: "Se você borda em uma Bernina, lembre-se sempre de manter o arquivo .EXP e o .INF juntinhos na mesma pasta! É o .INF que diz para a sua máquina suíça quais são as cores lindas e verdadeiras do desenho!",
    voceSabia: "A Bernina foi fundada em 1893 na Suíça por Karl Friedrich Gegauf, o inventor da primeira máquina de costura de bainha aberta do mundo, batizada em homenagem ao pico Piz Bernina dos Alpes Suíços!",
    practicalExercise: "Exporte um desenho para Bernina no software: vá na pasta do seu computador e repare como foram criados o arquivo .EXP e o arquivo .INF de mesmo nome lado a lado!",
    quickSummary: "Formato padrão de alta precisão das máquinas suíças Bernina e industriais Melco, acompanhado do arquivo .INF de cores.",
    relatedTerms: ["Formato PES", "Formato JEF", "Formato DST", "Software Bernina ArtLink"],
    tags: ["f-021", "formato exp", "bernina", "melco", "suica", "alta precisao", "artrelados"],
    bibliographicReferences: [
      "BERNINA INTERNATIONAL AG. Bernina Embroidery System & File Formats Engineering Guide. Steckborn, 2023.",
      "MELCO EMBROIDERY SYSTEMS. Melco OS & EXP File Technical Specification. Denver, 2022.",
      "ARTRELADOS. A Engenharia Suíça no Bordado: Dominando o Formato Bernina EXP. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-022-formato-vp3-vip-pfaff-husqvarna",
    code: "F-022",
    term: "Formato VP3 / VIP - Pfaff & Husqvarna Viking Format",
    letter: "F",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês Viking Pfaff 3rd Generation. Desenvolvido pelo grupo sueco-alemão SVP Worldwide (Singer, Viking, Pfaff) como o formato digital avançado unificado para as máquinas premium Pfaff e Husqvarna Viking.",
    summary: "Formato avançado e estruturado utilizado nas máquinas Husqvarna Viking e Pfaff, capaz de armazenar parâmetros de tecidos, cores e bastidores articulados.",
    definition: "O Formato VP3 (.VP3 - Viking Pfaff 3) é a extensão de matriz de bordado contemporânea utilizada pelos equipamentos topo de linha das marcas Husqvarna Viking (Designer Epic, Ruby, Topaz) e Pfaff (Creative Icon, Creative 1.5 a 4.5). É um dos formatos mais ricos e modernos do mercado: em um único arquivo binário compacto, ele integra as coordenadas de costura, as cores originais com códigos comerciais (ex: Robison-Anton, Madeira), dados de bastidores múltiplos e contínuos (como bastidores giratórios e 'Grand Hoop' com articulações de reposicionamento) e metadados de tensão recomendada para o tipo de tecido selecionado.",
    technicalDetails: "Evolução histórica: HUS (1ª geração) -> VIP (2ª geração) -> VP3 (3ª geração atual). Suporta paletas de cores estendidas de múltiplos fabricantes mundiais, dados de pontos de quilting dimensional e instruções de posicionamento a laser.",
    howItWorks: [
      "1. O designer salva a matriz no formato .VP3 selecionando a máquina de destino (Pfaff ou Husqvarna).",
      "2. O arquivo é transferido via pendrive USB ou transmitido sem fio via nuvem (mySewnet Cloud) diretamente para a máquina.",
      "3. O painel da Pfaff ou Viking exibe a matriz com altíssima resolução gráfica 3D e as cores exatas.",
      "4. A máquina ajusta automaticamente parâmetros internos de acordo com as instruções gravadas no .VP3.",
      "5. O bordado é executado com perfeita fluidez e cortes milimétricos."
    ],
    beginnerExplanation: "É o formato moderno das máquinas de bordar das marcas Pfaff e Husqvarna Viking! Ele é super moderno e guarda tudo dentro de um arquivo só: as cores certinhas, a foto do desenho e até os comandos para bastidores grandes e giratórios!",
    applications: [
      "Máquinas de bordar Husqvarna Viking (Designer Epic 1 e 2, Designer Brilliance, Jade 35)",
      "Máquinas de bordar Pfaff (Creative Icon 1 e 2, Creative 1.5, 3.0, 4.5)",
      "Bordados em bastidores gigantes articulados (Grand Dream Hoop 36x35cm)",
      "Sincronização de matrizes via nuvem mySewnet"
    ],
    commonErrors: [
      "Tentar abrir arquivos .VP3 modernos em máquinas Husqvarna muito antigas dos anos 90 que só leem o formato antigo .HUS",
      "Salvar matrizes com dimensões que ultrapassam o bastidor selecionado na Pfaff",
      "Não atualizar o firmware da máquina para ler novas versões de arquivos gerados no mySewnet"
    ],
    troubleshootingTips: [
      "Se você tem uma Husqvarna mais antiga e ela não lê .VP3, converta o arquivo no computador para o formato .HUS ou .VIP",
      "Utilize o ecossistema mySewnet Embroidery para gerenciar e converter suas matrizes com facilidade",
      "Mantenha o firmware da sua Pfaff ou Viking atualizado através do site oficial do fabricante"
    ],
    dicaArtrelados: "Para quem tem máquinas Pfaff ou Husqvarna Viking, o formato .VP3 é perfeito! Ele guarda todas as cores e detalhes com precisão e se sua máquina tiver Wi-Fi, você manda a matriz direto do computador para a bordadeira sem nem precisar de pendrive!",
    voceSabia: "A marca Husqvarna foi fundada em 1689 na Suécia originalmente como uma fábrica real de mosquetes e armamentos para a Coroa Sueca, passando a fabricar máquinas de costura artesanais de ferro fundido em 1872!",
    practicalExercise: "Exporte um desenho em .VP3 no seu programa de bordado e abra no visualizador mySewnet: repare na riqueza de detalhes e na fidelidade das paletas de cores!",
    quickSummary: "Formato moderno e rico das máquinas Pfaff e Husqvarna Viking com suporte a nuvem mySewnet e bastidores especiais.",
    relatedTerms: ["Formato HUS", "Formato PES", "Formato DST", "Software mySewnet"],
    tags: ["f-022", "formato vp3", "pfaff", "husqvarna viking", "mysewnet", "creative icon", "artrelados"],
    bibliographicReferences: [
      "SVP WORLDWIDE. Husqvarna Viking & Pfaff VP3 File Architecture & mySewnet Cloud Protocol. Nashville, 2023.",
      "PFAFF INDUSTRIAL & HOUSEHOLD. Creative Series Machine Operation & Format Guide. Kaiserslautern, 2022.",
      "ARTRELADOS. Dominando os Formatos Europeus: Pfaff VP3 e Husqvarna no Bordado Digital. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-023-formato-hus-husqvarna-viking-legacy",
    code: "F-023",
    term: "Formato HUS - Husqvarna Viking Legacy Format",
    letter: "F",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do sueco Husqvarna (cidade histórica sueca onde a fábrica foi fundada). Primeiro formato digital criado pela Husqvarna Viking nos anos 1990 para suas pioneiras máquinas computadorizadas (série Orchidea, Rose e Iris).",
    summary: "Formato clássico e histórico da Husqvarna Viking, essencial para manter operantes máquinas clássicas consagradas dos anos 1990 e 2000.",
    definition: "O Formato HUS (.HUS - Husqvarna Stitch File) é o padrão de arquivo de bordado de primeira geração desenvolvido pela fabricante sueca Husqvarna Viking para seus modelos clássicos que marcaram época (como Husqvarna Orchidea, Rose, Iris, Scandinavia e série Designer I / II). Utiliza compressão interna de coordenadas e uma tabela fixa de cores da paleta Husqvarna clássica, limitada aos bastidores padrão da época (como 10x10cm e 15x24cm Plus Hoop).",
    technicalDetails: "Limitação técnica: trabalha com tabelas de cores indexadas fixas da paleta Husqvarna Viking dos anos 1990. Arquivos .HUS devem respeitar estritamente as áreas físicas dos bastidores dos modelos clássicos. Compatível com conversores universais modernos.",
    howItWorks: [
      "1. A bordadeira que possui uma máquina Husqvarna clássica exporta a matriz no formato .HUS.",
      "2. O arquivo é gravado no cartão de memória (D-Card), disquete de 3.5 polegadas ou pendrive compatível.",
      "3. A máquina lê a estrutura do arquivo .HUS e posiciona o cabeçote mecânico.",
      "4. Os comandos de troca de cor e corte de linha são executados conforme os índices originais.",
      "5. Permite que máquinas clássicas e robustas continuem produzindo com alta qualidade no ateliê."
    ],
    beginnerExplanation: "É o formato clássico mais antigo das máquinas da marca Husqvarna Viking (como os modelos Rose e Scandinavia). Se você herdou ou comprou uma máquina clássica dessa marca, é nessa extensão .HUS que ela vai ler seus bordados!",
    applications: [
      "Máquinas clássicas Husqvarna Viking (Orchidea, Rose, Iris, Scandinavia, Designer I e II)",
      "Conversão e restauração de coleções clássicas de matrizes vintage dos anos 1990",
      "Ateliês que utilizam máquinas suecas tradicionais de alta durabilidade mecânica"
    ],
    commonErrors: [
      "Salvar a matriz em .HUS com tamanho maior do que a área do bastidor da máquina antiga (ex: tentar colocar desenho 18x30cm em máquina que só aceita 10x10cm)",
      "Usar cores modernas não indexadas na tabela padrão do formato .HUS, resultando em troca automática de tonalidades",
      "Tentar usar pendrives de grande capacidade em adaptadores de disquete antigos"
    ],
    troubleshootingTips: [
      "Converta matrizes modernas para .HUS utilizando o Wilcom Workspace, Embird ou o antigo Husqvarna Customizing",
      "Redimensione o desenho para no máximo 100x100mm ou 150x240mm antes de salvar como .HUS",
      "Ao salvar em .HUS, confira se as cores selecionadas correspondem à paleta Husqvarna clássica"
    ],
    dicaArtrelados: "As máquinas antigas da Husqvarna são verdadeiros 'tanques de guerra' de ferro fundido que duram a vida toda! Se você tem uma em funcionamento, salve suas matrizes em .HUS respeitando o tamanho do bastidor e aproveite a durabilidade impecável dessas máquinas!",
    voceSabia: "A Husqvarna Orchidea, lançada em 1991, foi uma das primeiras máquinas do mundo a introduzir o conceito de cartões de bordado eletrônicos programáveis que podiam ser lidos diretamente no ateliê!",
    practicalExercise: "Abra um conversor de bordado, pegue uma matriz e converta para .HUS: observe a caixa de seleção de bastidores clássicos (100x100mm e 150x240mm) que o programa disponibiliza!",
    quickSummary: "Formato clássico e histórico da Husqvarna Viking, utilizado em máquinas consagradas dos anos 90 e 2000.",
    relatedTerms: ["Formato VP3 / VIP", "Formato DST", "Formato PES"],
    tags: ["f-023", "formato hus", "husqvarna viking", "rose", "orchidea", "matriz vintage", "artrelados"],
    bibliographicReferences: [
      "HUSQVARNA VIKING. Historical Embroidery File Formats & Machine Archive. Huskvarna, 2022.",
      "EMBIRD SOFTWARE. Legacy Stitch Format Conversion Handbook. Bratislava, 2023.",
      "ARTRELADOS. Máquinas Clássicas e Formatos Vintage no Bordado Digital. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "f-024-formato-xxx-singer-compucon-format",
    code: "F-024",
    term: "Formato XXX - Singer & Compucon Embroidery Format",
    letter: "F",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do código de projeto XXX criado pela empresa de software Compucon (Grécia) em parceria com a lendária fabricante norte-americana Singer Sewing Company para suas máquinas das séries Quantum, Futura e EM200.",
    summary: "Formato padrão de bordado utilizado na linha de máquinas computadorizadas Singer (séries Futura, Quantum e Superb EM200).",
    definition: "O Formato XXX (.XXX - Compucon / Singer Stitch File) é a extensão proprietária de dados de bordado desenvolvida pela Compucon para a linha de máquinas de bordar domésticas computadorizadas da marca Singer (incluindo as séries Singer Quantum XL-100, XL-1000, XL-6000, Singer Futura CE-100 a CE-350, XL-400 a XL-580, e Singer Superb EM200 / Legacy SE300). Armazena sequências de coordenadas de pontos, comandos de salto, cortes e a tabela de cores da paleta oficial Singer e Robison-Anton.",
    technicalDetails: "Precisão de coordenadas: 0,1mm. O formato .XXX possui estrutura de cabeçalho específica reconhecida pelo software Singer AutoPunch, HyperFont e pelos painéis USB das máquinas Singer mais recentes (como a EM200). Compatível com todos os softwares de digitalização líderes de mercado.",
    howItWorks: [
      "1. A bordadeira salva a matriz no formato .XXX no computador.",
      "2. Para máquinas que funcionam conectadas via cabo USB direto ao PC (como as antigas Singer Futura), o software envia os dados em tempo real para a máquina.",
      "3. Para modelos modernos com entrada de pendrive (como Singer EM200 Superb), o arquivo .XXX é salvo diretamente no pendrive.",
      "4. A máquina Singer reconhece a matriz, carrega a contagem de pontos e o bastidor correspondente (ex: bastidor grande 260x150mm ou pequeno 100x100mm).",
      "5. A costura é realizada seguindo o mapa de cores e posições.",
      "6. A peça finalizada é concluída com o estilo tradicional da marca Singer."
    ],
    beginnerExplanation: "É o formato oficial usado pelas máquinas de bordar da marca Singer (como a Singer Superb EM200 e a linha Singer Futura)! Quando você tem uma bordadeira da Singer, é nessa extensão .XXX que suas matrizes devem ser salvas!",
    applications: [
      "Máquinas de bordar Singer (Singer Superb EM200, Legacy SE300, Futura XL-400, XL-420, XL-550, XL-580)",
      "Máquinas de costura e bordado híbridas da Singer",
      "Conversão e padronização de arquivos para clientes que utilizam equipamentos Singer no ateliê"
    ],
    commonErrors: [
      "Tentar abrir formatos de outras marcas (como .PES ou .JEF) diretamente no painel da Singer EM200, fazendo a máquina não listar os arquivos",
      "Salvar matrizes com dimensões maiores que a área útil do bastidor grande Singer (260x150mm)",
      "Utilizar cabos USB defeituosos na comunicação direta entre o notebook e a máquina nas linhas Singer Futura"
    ],
    troubleshootingTips: [
      "Para máquinas Singer modernas com pendrive (EM200/SE300), formate o pendrive em FAT32 e salve os arquivos .XXX na pasta principal",
      "Converta suas matrizes de .PES para .XXX usando programas gratuitos como Wilcom TrueSizer ou Bernina ArtLink",
      "Nas máquinas da linha Futura conectadas ao computador, certifique-se de desativar o modo de suspensão de energia do Windows durante o bordado"
    ],
    dicaArtrelados: "Tem uma Singer EM200 Superb no seu ateliê? Converta suas matrizes sempre para o formato .XXX e salve no pendrive formatadinho em FAT32. O bastidor de 26x15cm dela é ótimo para toalhas e com o formato certo ela borda que é uma beleza!",
    voceSabia: "A Singer é a marca de máquinas de costura mais famosa da história, fundada por Isaac Merritt Singer em 1851 em Nova York, pioneira mundial no sistema de pagamento parcelado para que qualquer família pudesse ter uma máquina em casa!",
    practicalExercise: "Pegue uma matriz qualquer do seu computador, use um conversor para salvá-la em .XXX e confira o tamanho do arquivo final: ele estará pronto para rodar em qualquer máquina Singer!",
    quickSummary: "Formato proprietário padrão de arquivos de bordado para as máquinas Singer (Futura, Quantum e Superb EM200).",
    relatedTerms: ["Formato PES", "Formato JEF", "Formato DST", "Software Wilcom Workspace"],
    tags: ["f-024", "formato xxx", "singer", "singer em200", "futura", "compucon", "artrelados"],
    bibliographicReferences: [
      "SINGER SEWING COMPANY. Singer Superb EM200 & Legacy Embroidery Format Guide. La Vergne, 2023.",
      "COMPUCON SOFTWARE. Compucon Stitch Data Protocol (.XXX) Technical Reference. Thessaloniki, 2022.",
      "ARTRELADOS. Guia de Operação e Formatos para Máquinas de Bordar Singer. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

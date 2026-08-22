import { Verbete } from "../types";

export const VERBETES_LETTER_X5: Verbete[] = [
  {
    id: "x-grid-display-snap-to-grid-grade-geometrica-cad",
    code: "X-021",
    letter: "X",
    term: "X-Grid Display & Snap-to-Grid — Grade Geométrica no Eixo X & Encaixe Magnético no CAD",
    pronunciation: "éks-grid dis-plêi end snép tu grid — gra-de je-o-me-tri-ka no êi-shu shis",
    level: "Iniciante 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculina composta.",
    origin: "Do inglês 'grid' (grade milimetrada de coordenadas) e 'snap' (atração magnética automática de nós vetoriais aos vértices da malha gráfica).",
    summary: "Linhas guia milimétricas visíveis na tela do software CAD que atraem nós vetoriais para criar alinhamentos horizontais perfeitos e simetria absoluta.",
    definition: "O X-Grid Display & Snap-to-Grid (Grade Geométrica do Eixo X / Malha Ortogonal Magnética / Snap-to-X Coordinates / Grid Spacing & Alignment Guides) é o sistema de referência visual e vetorial em softwares de digitalização de bordado. Composto por linhas paralelas verticais e horizontais com espaçamento configurável (geralmente de 1,0 mm a 10,0 mm), a grade permite ao digitador visualizar as dimensões reais da matriz em milímetros. Ao ativar o 'Snap to Grid', qualquer nó vetorial, linha de corte ou ponto de entrada puxado com o mouse é 'atraído magneticamente' para a linha de grade mais próxima, garantindo precisão matemática no alinhamento de letras e colunas.",
    technicalDetails: "O sistema opera através do arredondamento das coordenadas flutuantes de tela para múltiplos inteiros do intervalo de grade configurado (por exemplo, com grade de 2,0 mm, um clique na posição X=5,8 mm é ajustado instantaneamente para X=6,0 mm). Isso impede desvios micrométricos imperceptíveis a olho nu que causariam assimetrias na costura de brasões, molduras geométricas e monogramas clássicos.",
    beginnerExplanation: "É como colocar um papel quadriculado na tela do seu computador com um 'ímã' nas linhas! Quando você vai desenhar ou arrumar um bordado, o programa puxa os pontos certinho para cima das linhas da régua, garantindo que tudo fique 100% reto, retinho e alinhado sem você ter que ficar adivinhando no olho!",
    howItWorks: [
      "1. O digitador abre a matriz no software e ativa a visualização da grade (tecla de atalho 'G').",
      "2. Configura o espaçamento do eixo X e Y (ex.: 5 mm para monogramas ou 1 mm para microletras).",
      "3. Ativa a função 'Snap to Grid' (Encaixe Magnético na Grade).",
      "4. Ao desenhar nós vetoriais com a ferramenta de satim, o cursor é puxado para os cruzamentos exatos da grade.",
      "5. As letras e formas geométricas ficam com alturas e larguras milimetricamente idênticas.",
      "6. Desativa-se o snap temporariamente segurando a tecla Alt quando for necessário fazer curvas orgânicas livres.",
      "7. A matriz final é gerada com simetria impecável e alinhamento geométrico profissional."
    ],
    applications: [
      "Alinhamento horizontal de linhas de texto com múltiplas palavras ou nomes compostos.",
      "Desenho de molduras geométricas, brasões retangulares e faixas simétricas.",
      "Criação de matrizes de ponto cruz (Cross-Stitch) em células quadradas perfeitas.",
      "Medição rápida de distâncias e margens de segurança em relação ao aro do bastidor."
    ],
    characteristics: [
      "Espaçamento de grade totalmente personalizável em milímetros ou polegadas.",
      "Função magnética com raio de atração ajustável para máxima ergonomia.",
      "Diferenciação visual de linhas mestras principais (Major Grid Lines a cada 10 mm)."
    ],
    commonErrors: [
      "❌ Deixar o Snap ativado ao desenhar curvas orgânicas finas (como rostos ou pétalas), criando curvas travadas e facetadas.",
      "❌ Usar grade com espaçamento muito grande (ex.: 20 mm) para desenhar detalhes pequenos de 3 mm.",
      "❌ Digitalizar sem nenhuma grade de referência, deixando textos levemente caídos para a direita."
    ],
    troubleshootingTips: [
      "O mouse está dando 'pulos' travados ao tentar mover um ponto suavemente: o recurso Snap to Grid está ligado; pressione a tecla de atalho correspondente para desativar o ímã da grade e ter movimento livre.",
      "As letras parecem desalinhadas na base: ative a grade X, selecione todas as letras e use a ferramenta de alinhamento pela base inferior (Align Bottom).",
      "As linhas da grade sumiram da tela: verifique o nível de zoom ou aperte 'Ctrl+G' para reexibir a malha na janela de desenho."
    ],
    dicaArtrelados: "Para criar logotipos corporativos com textos em duas linhas: configure sua grade em 2 mm com o Snap ativado. Coloque a primeira linha de texto na marca superior e a segunda linha na marca inferior. O espaçamento fica perfeito, padrão indústria e visualmente impecável!",
    voceSabia: "O conceito de grade cartesiana com atração magnética foi introduzido no primeiro software de desenho assistido por computador da história, o 'Sketchpad', desenvolvido por Ivan Sutherland no MIT em 1963!",
    practicalExercise: "No seu software de bordado, ative a grade e mude o espaçamento para 5,0 mm. Desenhe um quadrado de 4 nós usando o 'Snap to Grid'. Meça com a ferramenta de régua e veja como o quadrado fica com exatos 50,0 mm x 50,0 mm sem nenhum milímetro de erro.",
    quickSummary: "Grade milimetrada com atração magnética no CAD que orienta o posicionamento e alinhamento perfeito de vetores e letras no eixo X.",
    relatedTerms: ["Snap to Grid", "Linhas Guia", "Coordenadas Cartesianas", "Alinhamento", "Wilcom", "CAD", "Simetria"],
    tags: ["xgrid", "snaptogrid", "grade", "alinhamento", "software", "vetor", "cad"]
  },
  {
    id: "x-beam-cantilever-support-arm-viga-x-pantografo",
    code: "X-022",
    letter: "X",
    term: "X-Beam / Cantilever Support Arm — Viga Estrutural X & Braço Tubular em Balanço",
    pronunciation: "éks-biim / kán-ti-li-ver su-pórt árm — vi-ga es-tru-tu-ral shis e bra-su em ba-lan-su",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'beam' (viga estrutural de suporte mecânico) e 'cantilever' (estrutura em balanço suspensa sustentada em apenas uma extremidade).",
    summary: "Viga estrutural tubular de alumínio extrudado ou aço que percorre o pantógrafo horizontalmente, suportando os bastidores e suportes de boné com rigidez anti-torção.",
    definition: "O X-Beam / Cantilever Support Arm (Viga Estrutural do Eixo X / Braço Tubular do Pantógrafo / Horizontal Crossbeam Carriage / Cantilever Bridge Frame) é o componente de sustentação mecânica primária que cruza a máquina transversalmente de ponta a ponta. Fabricada em perfil tubular de liga de alumínio aeronáutico (série 6000 com tratamento T6) ou aço estrutural reforçado, essa viga abriga internamente os trilhos lineares, as correias dentadas e os cabos de controle do eixo X, oferecendo rigidez torsional extrema para evitar que o bastidor oscile verticalmente durante acelerações bruscas.",
    technicalDetails: "Por operar no formato em balanço (cantilever) ao redor do braço livre tubular da máquina (Free Arm), a viga X está sujeita a momentos de flexão dinâmica e vibrações harmônicas de 10 Hz a 60 Hz em altas velocidades de costura. O projeto de engenharia emprega perfis com nervuras internas em 'X' e alívio de massa por usinagem CNC, mantendo a inércia reduzida sem permitir deformações elásticas superiores a 0,02 mm sob carga de 15 kgf.",
    beginnerExplanation: "É aquela barra de metal resistente e comprida que fica na frente da máquina segurando o bastidor no ar. Ela é feita de um metal leve e forte para aguentar o peso das roupas e jaquetas pesadas sem entortar nem tremer quando a máquina borda super rápido!",
    howItWorks: [
      "1. A viga X é acoplada às guias mestras dos carros laterais do eixo Y.",
      "2. O motor do eixo X move o carro de fixação do bastidor ao longo da pista da viga.",
      "3. A estrutura rígida da viga absorve os impactos das descidas de agulha e a tração do tecido.",
      "4. Nervuras internas amortecem as ressonâncias mecânicas geradas pelo motor em 1.000 PPM.",
      "5. O bastidor mantém-se em plano rigorosamente paralelo à chapa de ponto em toda a extensão horizontal.",
      "6. Sensores de fim de curso embutidos na viga monitoram a distância de parada segura.",
      "7. O resultado é um bordado com contornos perfeitamente nítidos de ponta a ponta do bastidor."
    ],
    applications: [
      "Sustentação de bastidores de bonés (Cap Frame Drive) em movimentos rotacionais de 270°.",
      "Bordados em peças tubulares (mangas de camisa, pernas de calça e meias).",
      "Sustentação de bastidores de jaquetas pesadas e couro rígido.",
      "Operação com bastidores magnéticos pesados em máquinas industriais multicabeçotes."
    ],
    characteristics: [
      "Liga de alumínio aeronáutico de alta resistência e baixo peso inercial.",
      "Geometria interna com vigas em treliça contra torção lateral.",
      "Acabamento anodizado fosco resistente a riscos e corrosão por suor e adesivos."
    ],
    commonErrors: [
      "❌ Apoiar o peso do corpo ou pendurar caixas pesadas sobre o braço da viga X da máquina.",
      "❌ Bater no braço estrutural ao transportar a máquina, empenando a geometria do pantógrafo.",
      "❌ Esquecer de checar se os parafusos de união da viga com os suportes laterais estão apertados."
    ],
    troubleshootingTips: [
      "O bastidor encosta na chapa de agulha na ponta direita mas fica alto na ponta esquerda: a viga estrutural X sofreu empenamento ou os parafusos de fixação afrouxaram; nivele o braço do pantógrafo com gabarito de altura.",
      "Vibração excessiva e ruído metálico quando o bastidor vai para as extremidades: inspecione se os mancais de rolamento internos da viga X precisam de lubrificação ou se a correia está ressecada.",
      "O bordado sai torto em peças pesadas como jaquetas: o peso da peça está puxando o braço para baixo; utilize uma mesa extensora de apoio para sustentar o peso da jaqueta durante o bordado."
    ],
    dicaArtrelados: "Ao bordar jaquetas de couro pesadas ou mochilas grossas, nunca deixe a peça inteira pendurada no ar puxando o braço da máquina para baixo! Use uma mesa de apoio lateral ou coloque uma cadeira com almofada na altura da máquina para segurar o peso da roupa. Isso protege a mecânica da sua máquina!",
    voceSabia: "As máquinas de bordar industriais modernas usam simulação computacional de elementos finitos (FEA) para desenhar o interior oco das vigas de alumínio, copiando a estrutura óssea oca dos pássaros para que sejam ultra leves e incrivelmente resistentes ao mesmo tempo!",
    practicalExercise: "Com a máquina desligada, apoie levemente dois dedos sobre o braço tubular do pantógrafo e sinta sua firmeza estrutural. Note como ele não tem nenhuma flexão solta, mantendo o bastidor firme e estável no ar.",
    quickSummary: "Viga estrutural tubular de alumínio que cruza o pantógrafo, sustentando o bastidor com rigidez mecânica absoluta e sem oscilações.",
    relatedTerms: ["Pantógrafo", "Free Arm", "Cap Frame", "X-Axis", "Treliça Mecânica", "Hardware", "Tajima"],
    tags: ["xbeam", "vigaestrutural", "pantografo", "mecanica", "hardware", "freearm", "resistencia"]
  },
  {
    id: "x-guide-wire-tension-thread-path-guia-fios-horizontal-x",
    code: "X-023",
    letter: "X",
    term: "X-Guide Wire & Tension Thread Path — Guia-Fios Horizontal em X & Trajetória de Linha Superior",
    pronunciation: "éks-gáid uáir end tên-shon tréd path — gi-a fi-us ho-ri-zon-tal no êi-shu shis",
    level: "Intermediário 🟡",
    category: "Passagem de Linha & Tensão",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'guide wire' (arame guia-fios de aço inoxidável polido) e 'thread path' (trajetória de passagem da linha superior da bobina até a agulha).",
    summary: "Componente de arame de aço polido ou cerâmica instalado transversalmente na torre de fios que conduz as linhas suavemente sem atrito ou torções cruzadas.",
    definition: "O X-Guide Wire & Tension Thread Path (Guia-Fios Transversal em X / Barra Guia-Linhas Horizontal / Pre-Tension Thread Guide Rail / Ceramic Eyelet Traverse) é o conjunto de hastes metálicas polidas e anéis de ilhós cerâmicos dispostos transversalmente no cabeçote superior da máquina de bordar. Sua finalidade técnica é receber os filamentos de linha provenientes do suporte de cones (porta-cones) e direcioná-los com ângulo suave e constante em direção aos tensores de pré-tensão e discos de mola, evitando que linhas vizinhas se enrosquem ou sofram fricção estática.",
    technicalDetails: "A superfície do guia-fios passa por processo de polimento eletrolítico espelhado ou revestimento com óxido de titânio/zircônia, reduzindo o coeficiente de atrito para menos de 0,08. Isso evita que filamentos sintéticos de poliéster e fios metálicos sofram aquecimento por atrito a 1.000 PPM, prevenindo a formação de 'ninhos de pássaro', desfiamento da capa de alumínio dos fios metálicos e flutuações de tensão que gerariam laçadas frouxas.",
    beginnerExplanation: "São aqueles araminhos prateados e ganchinhos lisinhos que ficam na parte de cima da máquina por onde você passa a linha logo depois de sair do carretel. Eles servem para guiar as linhas retinhas, sem deixar uma linha enroscar na outra nem prender na hora em que a máquina acelera!",
    howItWorks: [
      "1. O filamento de linha sobe verticalmente do cone até o suporte superior de antena.",
      "2. É conduzido para a frente e entra nos furos do guia-fios transversal em X.",
      "3. O ilhós de cerâmica centraliza a linha sobre o disco do tensor correspondente.",
      "4. A linha percorre a barra estabilizadora de mola e o estica-fio sem desvios angulares.",
      "5. A tensão permanece estável mesmo com o esvaziamento progressivo do cone de linha.",
      "6. A laçada na lançadeira é formada com geometria perfeita e constante.",
      "7. Elimina-se o risco de arrebentamento súbito de fios delicados e metálicos."
    ],
    applications: [
      "Passagem de linhas metálicas douradas e prateadas de alta fricção.",
      "Alimentação de múltiplas agulhas (6, 12 ou 15 agulhas) em cabeçotes industriais sem entrelaçamento.",
      "Estabilização de fluxo em linhas 100% viscose de alto brilho.",
      "Operação contínua em fábricas climatizadas de alta produtividade."
    ],
    characteristics: [
      "Aço inoxidável 304 com polimento espelhado anti-abrasão.",
      "Ilhoses de cerâmica sinterizada ou porcelana de baixíssimo atrito.",
      "Resistência à corrosão por lubrificantes têxteis e umidade ambiente."
    ],
    commonErrors: [
      "❌ Pular um dos furos do guia-fios na passagem da linha, fazendo o fio chacoalhar no ar e enroscar no cone vizinho.",
      "❌ Deixar formar ranhuras ou sulcos de corte no guia-fios de metal por uso de linhas abrasivas desgastadas.",
      "❌ Passar duas linhas cruzadas pelo mesmo ilhós do guia."
    ],
    troubleshootingTips: [
      "A linha superior estoura a cada 2 minutos sem motivo aparente: passe a ponta do dedo ou um fio de meia de seda no guia-fios; se sentir qualquer rebarba ou cortezinho de metal, lixe com lixa d'água 2000 ou substitua o guia-fios.",
      "A linha metálica fica desfiando e embolando antes de chegar na agulha: passe a linha metálica por apenas um dos furos do guia superior para diminuir o atrito e aplique uma rede de proteção de cone (Thread Net).",
      "Linha vizinha puxou e arrebentou a agulha em uso: certifique-se de que todas as linhas estão passando individualmente por seus respectivos guias superiores sem cruzar na transversal."
    ],
    dicaArtrelados: "Ao bordar com linha metálica dourada ou prateada, que é mais áspera: diminua o caminho da linha pulando o primeiro furo duplo do guia superior e passe a linha direto no tensor. Menos atrito no guia significa zero quebra de linha metálica!",
    voceSabia: "Os ilhoses dos guias-fios industriais são feitos de cerâmica de zircônia, o mesmo material ultrarresistente usado nas pastilhas de freio de carros de Fórmula 1 e nas proteções térmicas dos ônibus espaciais!",
    practicalExercise: "Examine a passagem de linha superior da sua máquina desde o suporte de cones até o cabeçote. Passe os olhos em cada ganchinho e guia de metal e passe um pano seco para retirar a poeira e fiapos acumulados.",
    quickSummary: "Conjunto de guias e ilhoses cerâmicos polidos que conduzem as linhas superiores suavemente e sem atrito até os tensores da agulha.",
    relatedTerms: ["Passagem de Linha", "Tensores", "Ilhós Cerâmico", "Estica-Fio", "Linha Metálica", "Tensão Superior", "Porta-Cones"],
    tags: ["xguide", "guiafios", "passagemdelinha", "tensao", "hardware", "agulhas", "manutencao"]
  },
  {
    id: "x-pulley-timing-belt-drive-polia-correia-eixo-x",
    code: "X-024",
    letter: "X",
    term: "X-Pulley & Timing Belt Drive — Polia Dentada de Alumínio & Correia Sincronizadora do Eixo X",
    pronunciation: "éks-pú-lei end tái-ming belt dráiv — po-li-a den-ta-da e kor-rei-a sin-kro-ni-za-do-ra",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'pulley' (polia/roldana de transmissão mecânica) e 'timing belt' (correia dentada sincronizadora patenteada por Richard Case na década de 1940).",
    summary: "Sistema de transmissão mecânica formado por polias dentadas usinadas em alumínio e correia dentada de poliuretano com alma de aço que traciona o eixo X com precisão.",
    definition: "O X-Pulley & Timing Belt Drive (Polia Dentada e Correia Sincronizadora do Eixo X / X-Axis Synchronous Belt Drive / Toothed Pulley & HTD Timing Belt System) é o sistema de acionamento cinemático direto que converte a rotação angular do servomotor no deslocamento linear horizontal do pantógrafo. Utilizando perfis de dentes curvilíneos de alta precisão (como HTD 3M ou GT2) e correias de poliuretano termoplástico reforçadas internamente com cordões de fibra de vidro ou cabos de aço trançado, o sistema assegura transmissão de torque sem escorregamento e com folga angular (backlash) praticamente nula.",
    technicalDetails: "A tensão mecânica da correia do eixo X é calibrada rigorosamente com tensiômetro de frequência acústica (frequência de ressonância típica de 65 Hz a 85 Hz sob deflexão de 5 N). Correias frouxas causam histerese mecânica (fazendo círculos virarem formas ovais e contornos saírem desalinhados); correias excessivamente esticadas sobrecarregam os rolamentos axiais do motor de passo, causando superaquecimento e desgaste prematuro das polias de alumínio anodizado.",
    beginnerExplanation: "É a correia de borracha especial cheia de dentinhos e a rodinha de metal que ligam o motor ao braço do bastidor. Quando o motor gira, os dentinhos da correia puxam o bastidor para um lado e para o outro com a força e a precisão de um relógio suíço!",
    howItWorks: [
      "1. O servomotor gira seu eixo de saída milimetricamente a cada pulso eletrônico.",
      "2. A polia dentada de alumínio acoplada ao motor engrena perfeitamente nos dentes da correia.",
      "3. A correia dentada de poliuretano traciona o carro do pantógrafo no eixo X.",
      "4. A polia tensora na extremidade oposta mantém o esticamento constante da correia.",
      "5. O movimento é transferido com zero atraso mecânico e sem deslizar.",
      "6. Durante a desaceleração, a alma de aço da correia impede qualquer estiramento elástico.",
      "7. O ponto cai na coordenada milimétrica exata programada na matriz.",
    ],
    applications: [
      "Translação rápida do pantógrafo em saltos de alta velocidade (Jump de até 1.200 PPM).",
      "Garantia de repetibilidade em bordados industriais de grandes tiragens de uniformes.",
      "Movimentação precisa de bastidores de bonés de alta inércia.",
      "Eliminação de histerese mecânica em microbordados de brasões nobres."
    ],
    characteristics: [
      "Dentes com perfil curvilíneo para engrenamento silencioso e sem folgas.",
      "Alma de aço ou aramida (Kevlar) com índice de estiramento menor que 0,1%.",
      "Polias usinadas em alumínio naval com tratamento de anodização dura."
    ],
    commonErrors: [
      "❌ Deixar cair óleo lubrificante líquido na correia de borracha, amolecendo o poliuretano e fazendo os dentes espanarem.",
      "❌ Apertar o parafuso esticador da correia com força bruta excessiva, entortando o eixo do servomotor.",
      "❌ Operar com correia frouxa que salta dentes durante arrancadas rápidas de bordado."
    ],
    troubleshootingTips: [
      "O contorno preto do bordado ficou 2 mm fora de registro para o lado: a correia do eixo X está frouxa ou pulou um dente durante uma arrancada rápida; ajuste a tensão da correia dentada do pantógrafo.",
      "Ouviram-se estalos 'clac-clac' ao mover o bastidor rapidamente: a polia dentada está gasta ou a correia perdeu dentes; substitua o jogo de correia sincronizadora imediatamente.",
      "A correia está desfiando fios pretos no chão da máquina: a polia está desalinhada em relação ao eixo do motor; afrouxe os parafusos e alinhe o plano das polias com régua metálica."
    ],
    dicaArtrelados: "Nunca passe óleo ou graxa nas correias dentadas da sua máquina de bordar! As correias dentadas de precisão funcionam a seco. O óleo atrai pó de entretela e derrete a borracha sintética. Mantenha as correias sempre limpas e secas com um pano de microfibra!",
    voceSabia: "As correias dentadas com alma de aço usadas nas máquinas de bordar têm uma resistência à tração tão impressionante que uma tirinha de apenas 15 mm de largura é capaz de erguer um automóvel de mais de uma tonelada sem arrebentar!",
    practicalExercise: "Abra a tampa lateral ou inspecione a parte traseira do trilho do pantógrafo da sua máquina e localize a correia dentada preta. Pressione levemente com o dedo indicador no centro dela: ela deve estar firme e elástica como a corda de um violão afinado, sem ceder mais do que 3 mm a 5 mm.",
    quickSummary: "Sistema de polias de alumínio e correia dentada sincronizadora que transmite o movimento do servomotor ao pantógrafo com máxima precisão e sem folgas.",
    relatedTerms: ["Timing Belt", "Polia Dentada", "Backlash", "Servomotor", "Pantógrafo", "X-Axis", "Manutenção Preventiva"],
    tags: ["xpulley", "correia", "poliadentada", "mecanica", "hardware", "transmissao", "manutencao"]
  },
  {
    id: "x-bending-needle-deflection-x-plane-deflexao-agulha-x",
    code: "X-025",
    letter: "X",
    term: "X-Bending & Needle Deflection in X-Plane — Deflexão Lateral da Agulha no Plano X & Prevenção de Batidas",
    pronunciation: "éks-bên-ding end ní-dol di-flék-shon in éks-plêin — de-fle-ksão la-te-ral da a-gu-lha",
    level: "Avançado 🔴",
    category: "Agulhas & Mecânica",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'bending' (flexão/curvamento elástico) e 'needle deflection' (desvio angular da haste da agulha sob carga mecânica de penetração).",
    summary: "Fenômeno físico em que a agulha se encurva lateralmente no eixo X ao penetrar tecidos grossos ou costuras duras, podendo bater na chapa de ponto ou na ponta da lançadeira.",
    definition: "O X-Bending & Needle Deflection in X-Plane (Deflexão Lateral da Agulha no Plano X / Entortamento Dinâmico de Agulha / Lateral Needle Flex & Hook Collision) é o desvio angular indesejado da ponta da agulha em direção lateral (-X ou +X) durante o ciclo de penetração no tecido. Ocorre quando a agulha atinge costuras grossas de jeans, entretelas duras de boné, couro ou densidades excessivas de pontos em alta velocidade; sob o impacto, a haste de aço flexiona milimetricamente para o lado, errando a cava da lançadeira (Hook Scarf) ou colidindo violentamente contra a borda da chapa de agulha.",
    technicalDetails: "A rigidez à flexão de uma agulha de bordado varia com a quarta potência do seu diâmetro (I = π * d^4 / 64). Uma agulha fina 65/9 possui apenas 38% da rigidez mecânica de uma agulha 75/11. Quando a deflexão lateral no eixo X excede a folga padrão da ponta da lançadeira (folga recomendada de 0,05 mm a 0,10 mm), ocorrem falhas graves: perda de ponto (skip stitch), desfiamento por atrito da linha ou colisão direta que quebra a agulha e danifica a ponta temperada da lançadeira rotativa.",
    beginnerExplanation: "Quando a máquina está bordando muito rápido e a agulha bate numa parte muito dura (como a costura grossa de uma calça jeans ou a frente dura de um boné), a agulha é tão fininha que ela entorta um pouquinho para o lado como uma vara de pescar. Se ela entortar demais, bate na lata da máquina e quebra na hora!",
    howItWorks: [
      "1. A agulha desce a 850 PPM em direção a uma área com 4 camadas de tecido e costura reforçada.",
      "2. A ponta encontra resistência de penetração de até 40 N.",
      "3. A haste fina da agulha sofre flexão elástica lateral no plano do eixo X.",
      "4. A cava da agulha (Scarf) sai do alinhamento milimétrico com a ponta da lançadeira rotativa.",
      "5. A ponta da lançadeira passa no ar sem pescar o laço da linha (pula o ponto) ou bate na lateral da haste da agulha.",
      "6. Ouve-se um estalo metálico e a ponta da agulha se parte.",
      "7. A máquina para acusando quebra de agulha e erro de sensor de linha."
    ],
    applications: [
      "Bordados em peças com costuras transversais pesadas (bonés, jeans e jaquetas de couro).",
      "Seleção correta de calibres de agulhas reforçadas (Groz-Beckert SAN 1 / Gebedur de Titânio).",
      "Prevenção de danos e riscos na ponta da lançadeira rotativa (Rotary Hook).",
      "Otimização de rotas de digitalização para evitar agulhadas sobre emendas grossas de tecido."
    ],
    characteristics: [
      "Deformação elástica instantânea que se agrava com a velocidade da máquina.",
      "Causa número 1 de quebras repentinas de agulhas e perda de pontos em bonés.",
      "Prevenível pelo uso de agulhas especiais com geometria reforçada cônica."
    ],
    commonErrors: [
      "❌ Bordar a costura central dura de bonés estruturados com agulha fina 65/9 ou 70/10 comum.",
      "❌ Manter velocidade máxima (1.000 PPM) sobre emendas grossas de cós de calça jeans.",
      "❌ Continuar bordando após uma batida de agulha sem lixar a rebarba na ponta da lançadeira com lixa 2000."
    ],
    troubleshootingTips: [
      "A agulha quebra toda vez que passa pela costura do meio do boné: substitua a agulha comum por uma agulha especial reforçada de titânio (Groz-Beckert DBxK5 SAN 1 calibre 80/12 ou 90/14) e reduza a velocidade para 600 PPM.",
      "A máquina pula pontos sempre no lado esquerdo do desenho: a folga lateral da lançadeira no eixo X está descalibrada; ajuste o tempo e a distância da lançadeira para 0,05 mm da cava da agulha.",
      "A linha superior desfiou e arrebentou logo após a agulha quebrar: a batida da agulha criou uma rebarba áspera no furo da chapa de ponto; passe uma lixa d'água 2000 no orifício da chapa para deixá-lo espelhado novamente."
    ],
    dicaArtrelados: "Para bordar bonés de 6 gomos ou peças de sarja pesada com costuras grossas: use sempre agulha de cabo grosso ou ponta reforçada de Titânio calibre 80/12 (DBxK5). A haste mais rígida não entorta no eixo X e você borda a costura do boné com facilidade sem quebrar nenhuma agulha!",
    voceSabia: "A empresa alemã Groz-Beckert desenvolveu a tecnologia de agulhas 'SAN 1' (Special Application Needle) com a haste cônica e espessura reforçada justamente para reduzir em 60% a deflexão lateral no eixo X durante a costura de tecidos técnicos e bonés rígidos!",
    practicalExercise: "Pegue uma agulha 65/9 usada e uma agulha 90/14. Segure as pontas com a mão e tente flexionar suavemente as hastes com a ponta do dedo. Sinta como a 65/9 entorta com facilidade, enquanto a 90/14 é extremamente rígida e resistente à deflexão.",
    quickSummary: "Curvamento elástico lateral da agulha sob alta resistência que pode causar perda de pontos, quebra de agulha e batidas na lançadeira.",
    relatedTerms: ["Deflexão de Agulha", "Lançadeira Rotativa", "Pular Ponto", "Groz-Beckert SAN 1", "Chapa de Ponto", "Boné Estruturado", "Agulha de Titânio"],
    tags: ["xbending", "deflexao", "agulhas", "mecanica", "quebradeagulha", "grozbeckert", "bones"]
  }
];

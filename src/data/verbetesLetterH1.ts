import { Verbete } from "../types";

export const VERBETES_LETTER_H_PART1: Verbete[] = [
  {
    id: "h-001-hardanger-eletronico-bordado-rendado-noruegues",
    code: "H-001",
    term: "Hardanger Eletrônico & Bordado Rendado Norueguês (Electronic Hardanger & Norwegian Cutwork)",
    letter: "H",
    level: "Avançado 🔴",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do topônimo norueguês Hardanger (região dos fiordes no sudoeste da Noruega) e do grego elektron (âmbar/eletricidade). Tradicional técnica de bordado vazado desfiado do século XVII adaptada à digitalização contemporânea.",
    summary: "Digitalização e execução computadorizada do bordado tradicional norueguês, combinando blocos de ponto cheio (Kloster blocks), grades abertas e áreas vazadas em tela de linho.",
    definition: "O Hardanger Eletrônico (Electronic Hardanger Embroidery / Digitized Norwegian Cutwork & Drawn Thread Lace) é a transposição computacional de alta fidelidade da centenária arte têxtil norueguesa de Hardangersøm para matrizes de bordado digital. Caracteriza-se por uma rigorosa geometria ortogonal composta por blocos de pontos cheios acetinados paralelos (Kloster blocks), pontos ilhóses vazados, barras picotadas e grades geométricas rendadas. Na versão computadorizada, o efeito de fios puxados ou desfiados é reproduzido com perfeição milimétrica por meio de pontos de amarração estrutural sobrepostos a filmes hidrossolúveis de alta espessura ou tecidos de trama quadrada (linho étamine / zweigart), permitindo a criação de toalhas de mesa, caminhos e enxovais nobres de estética escandinava.",
    technicalDetails: "Geometria no software: Blocos Kloster com ponto cheio em densidade de 0.38mm a 0.42mm e contornos em ponto de amarração triplo antes da simulação de corte; barras de grade com espaçamento regular de 2.5mm a 3.0mm; compensação de repuxo fixada em +0.35mm para garantir o esquadrejamento perfeito dos ângulos de 90°.",
    howItWorks: [
      "1. No software de matriz, o digitalizador desenha a estrutura geométrica baseada em múltiplos de fios simétricos em ângulo reto (90°).",
      "2. Programa os blocos Kloster (séries de 5 pontos cheios perpendiculares) com underlay de ponto corrido para dar volume.",
      "3. Configura paradas programadas (Stop Commands) na máquina para os momentos de corte manual das janelas internas do tecido.",
      "4. No bastidor, a bordadeira estica o linho com entretela hidrossolúvel pesada (80g) no verso.",
      "5. A máquina borda os pontos de sustentação e os blocos de contorno.",
      "6. A máquina para: a bordadeira corta com tesoura curva de precisão os fios centrais das janelas vazadas sem encostar nos pontos de borda.",
      "7. A máquina reinicia e borda as barras de preenchimento e os pontos de aranha (Woven Bars) sobre o vazio com o filme solúvel dando apoio.",
      "8. Ao lavar a peça em água morna, a entretela dissolve-se, revelando uma renda geométrica escandinava deslumbrante."
    ],
    beginnerExplanation: "É a versão moderna daquele bordado tradicional norueguês chique cheio de janelinhas quadradas vazadas e pontos grossinhos que parecem rendas de castelo! Na máquina de bordar, o programa desenha os bloquinhos certinhos: a máquina borda em volta, a gente corta o tecidinho do meio com uma tesourinha bem pontuda, e a máquina depois faz teias de aranha e barras de linha por cima do buraco!",
    applications: [
      "Caminhos de mesa, toalhas de banquete e jogos americanos de altíssimo luxo",
      "Vestuário tradicional escandinavo, blusas de alta costura e golas rendadas",
      "Almofadas nobres de linho e capas de livros de casamento",
      "Enxovais clássicos de noiva e peças decorativas de colecionador"
    ],
    commonErrors: [
      "Cortar os fios do tecido muito perto dos pontos de Kloster, cortando as amarras e desfiando o bordado",
      "Usar tecidos elásticos com elastano (o Hardanger exige linho ou algodão de trama fechada sem elasticidade)",
      "Programar ângulos diagonais arredondados em vez de preservar a geometria estrita de 90°"
    ],
    troubleshootingTips: [
      "Utilize sempre tesoura de ponta curva e afiação cirúrgica (tipo Duckbill ou Pelican) para abrir as janelas vazadas",
      "Use duas camadas de entretela hidrossolúvel de 40g (ou uma de 80g) sob o linho para sustentar as pontes de linha",
      "Reduza a velocidade da máquina para 550 PPM durante as etapas de barras rendadas sobre o vão aberto",
      "Prefira linhas de algodão egípcio nº 50 ou poliéster fosco para preservar a textura artesanal original"
    ],
    dicaArtrelados: "O Hardanger computadorizado é uma das técnicas mais nobres e caras do mundo do bordado! Uma toalha de mesa de linho puro trabalhada em Hardanger pode ser vendida por mais de R$ 800,00 no mercado de alto padrão de mesa posta!",
    voceSabia: "O Hardanger tradicional era bordado por mulheres norueguesas durante os longos invernos polares do século XVII, utilizando fios de linho branco sobre tecido branco (Whitework), simbolizando a pureza da neve dos fiordes!",
    practicalExercise: "No seu software, desenhe um quadrado de 4x4cm formado por blocos Kloster de 5 pontos cheios perpendiculares: teste a matriz em um retalho de linho com hidrossolúvel e experimente o corte interno!",
    quickSummary: "Adaptação digital do bordado geométrico norueguês com blocos cheios em ângulo reto e janelas vazadas rendadas.",
    relatedTerms: ["Bordado Richelieu", "Guipure / Renda Guipir", "Entretela Hidrossolúvel", "Ponto Cheio / Ponto Satin"],
    imageUrl: "/images/h001_hardanger_eletronico_v1.jpg?v=1",
    imageCaption: "Esquema Técnico do Hardanger Eletrônico: Blocos de travamento em ponto cheio (Kloster), recorte de precisão do tecido interno e tecimento das barras rendadas sobre o vão vazado.",
    tags: ["h-001", "hardanger", "noruegues", "renda", "cutwork", "linho", "mesa posta", "alta costura", "artrelados"],
    bibliographicReferences: [
      "NORWEGIAN TRADITIONAL NEEDLEWORK SOCIETY. Hardanger Embroidery: Geometry and Digital Adaptation. Oslo, 2023.",
      "BERNINA DIGITIZING ADVANCED SERIES. Scandinavian Cutwork & Kloster Blocks. Steckborn, 2022.",
      "ARTRELADOS. Hardanger Eletrônico: Tradição Escandinava e Rendas Geométricas no Ateliê Moderno. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-002-haste-da-barra-de-agulhas-bucha-superior",
    code: "H-002",
    term: "Haste da Barra de Agulhas & Bucha Superior (Needle Bar Shaft & Bushing Assembly)",
    letter: "H",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do germânico hast (vara/haste cilíndrica) e do latim buxus (bucha/luva cilíndrica). Componente cinemático fundamental da mecânica de costura desde o século XIX.",
    summary: "Eixo cilíndrico retificado de aço cromado que sobe e desce guiado por buchas de bronze, conduzindo a agulha com tolerância milimétrica.",
    definition: "A Haste da Barra de Agulhas e Conjunto de Buchas (Needle Bar Shaft & Upper/Lower Bronze Bushings) é o elemento mecânico linear vertical responsável por transmitir o movimento alternativo do virabrequim principal à agulha de bordar a velocidades de até 1.200 PPM. Fabricada em aço cromo-molibdênio temperado e retificado com precisão micrométrica (tolerância h6), a haste desliza dentro de buchas usinadas em bronze sinterizado ou liga autolubrificante. O alinhamento coaxial entre a haste, o furo da chapa de agulha e a ponta da lançadeira é o fator crítico que determina a ausência de quebras de agulha e a precisão do ponto.",
    technicalDetails: "Tolerâncias dimensionais: Diâmetro da haste: 6,35mm (padrão industrial) ou 7,20mm; folga radial dentro da bucha: 0,012mm a 0,020mm; curso vertical total (Stroke): 32,0mm a 35,5mm; dureza superficial: 58 a 62 HRC.",
    howItWorks: [
      "1. O motor principal gira o eixo superior (Main Shaft) da máquina de bordar.",
      "2. A biela excêntrica converte a rotação contínua em movimento vertical alternativo linear.",
      "3. A biela empurra a haste da barra de agulha para baixo.",
      "4. As buchas superior e inferior mantêm a haste em curso estritamente retilíneo, sem qualquer oscilação lateral.",
      "5. A agulha penetra no tecido e desce até o Ponto Morto Inferior (PMI).",
      "6. Ao subir 1,8mm a 2,2mm, forma-se o laço de linha capturado pela lançadeira.",
      "7. A haste retorna ao Ponto Morto Superior (PMS) completando 1 ciclo em apenas 0,05 segundos a 1.200 PPM.",
      "8. A película de óleo mineral dosada pelas gaxetas de feltro previne o desgaste e superaquecimento da bucha."
    ],
    beginnerExplanation: "É aquele tubinho de aço brilhante que sobe e desce sem parar segurando a agulha na ponta! Ele desliza por dentro de anéis de metal amarelo chamados buchas. Para a agulha descer retinha e nunca quebrar nem bater na placa da máquina, essa barra precisa estar perfeitamente reta e com uma gotinha de óleo para não travar!",
    applications: [
      "Condução linear de agulhas em cabeçotes de máquinas domésticas e industriais de 1 a 15 agulhas",
      "Garantia de tolerância micrométrica na formação da laçada com a lançadeira rotativa",
      "Sustentação dos blocos de fixação de agulha, guias de fio e molas de compressão",
      "Transferência de força de perfuração em tecidos grossos, couro e bonés estruturados"
    ],
    commonErrors: [
      "Operar a máquina sem lubrificação nas buchas, causando engripamento (travamento mecânico por atrito)",
      "Puxar o bastidor com a agulha ainda dentro do tecido, entortando a haste de aço da barra",
      "Usar chaves inadequadas para apertar o parafuso da agulha, espanando o bloco inferior da haste"
    ],
    troubleshootingTips: [
      "Teste a folga lateral da barra com os dedos: se a barra balançar mais de 0,1mm dentro da bucha, é hora de substituir as buchas desgastadas",
      "Aplique 1 gota de óleo mineral branco puro nas buchas a cada 40 horas de produção contínua",
      "Em caso de impacto forte (ex: bastidor travado batendo na agulha), confira se a haste empenou girando a barra solta sobre um vidro plano",
      "Mantenha a barra livre de poeira têxtil e restos de cola spray usando pincel e desengraxante suave"
    ],
    dicaArtrelados: "Uma barra de agulha empenada apenas 0,2 milímetros é a causa invisível de 80% das quebras constantes de linha e falhas de ponto misteriosas! Se a sua máquina começou a quebrar linha do nada após uma batida de bastidor, peça ao técnico para conferir o empenamento da haste!",
    voceSabia: "As hastes de barra de agulha modernas passam por um processo de retificação com diamante e banho de cromo duro que confere resistência para suportar mais de 100 milhões de ciclos de perfuração ao longo de sua vida útil!",
    practicalExercise: "Com a máquina desligada, gire o volante manual e observe a haste da barra de agulha deslizando suavemente por dentro da bucha: veja como o movimento é perfeitamente suave e sem folgas laterais!",
    quickSummary: "Eixo retificado de aço que guia o movimento vertical da agulha com tolerância milimétrica dentro de buchas de bronze.",
    imageUrl: "/images/h002_haste_barra_agulha_bucha_v1.jpg?v=1",
    imageCaption: "Anatomia da Haste da Barra de Agulhas e Bucha: o conjunto de guia linear de aço retificado e buchas de bronze que assegura o movimento vertical micrométrico da agulha, exigindo lubrificação periódica e alinhamento perfeito com a lançadeira.",
    relatedTerms: ["Gancho da Lançadeira / Bico da Lançadeira", "Agulha de Bordado", "Gaxeta de Feltro Lubrificadora", "Hook Timing"],
    tags: ["h-002", "haste de agulha", "barra de agulhas", "bucha", "mecanica", "manutencao", "precisao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL EMBROIDERY SERVICE MANUAL. Needle Bar Assembly & Bushing Tolerances. Nagoya, 2023.",
      "GROZ-BECKERT TECHNICAL MANUAL. Needle Bar Dynamics and Penetration Forces. Albstadt, 2022.",
      "ARTRELADOS. Mecânica Fina de Bordadeiras: Calibração de Barras, Buchas e Lançadeiras. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-003-haste-do-calcador-ajuste-de-altura",
    code: "H-003",
    term: "Haste do Calcador & Ajuste de Altura (Presser Foot Shank & Height Alignment)",
    letter: "H",
    level: "Intermediário 🟡",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim calcare (pisar/pressionar) e hast (vara). Mecanismo de sustentação do calcador flutuante em máquinas de costura e bordado.",
    summary: "Haste mecânica vertical com parafuso de regulagem que sustenta o calcador de bordado e calibra sua folga sobre o tecido.",
    definition: "A Haste do Calcador e Mecanismo de Ajuste de Altura (Presser Foot Shank / Presser Bar Height Mechanism / Stepping Foot Assembly) é a barra cilíndrica secundária paralela à barra de agulhas que sustenta o pezinho calcador flutuante (ou calcador de salto/stepping foot). Sua principal função técnica é manter o tecido prensado contra a chapa de agulha durante o momento exato em que a agulha sobe para formar a laçada de linha, evitando o fenômeno de 'flagging' (quando o tecido é puxado para cima junto com a agulha). Possui um parafuso excêntrico de regulagem de altura que permite calibrar a distância livre (geralmente entre 0,5mm e 1,5mm) entre a sola do calcador e a superfície de materiais finos, toalhas felpudas ou bonés grossos.",
    technicalDetails: "Regulagem de folga padrão: 1.0mm a 1.5mm acima da superfície do tecido no Ponto Morto Inferior (PMI); força da mola de retorno: 12N a 18N; faixa de ajuste de elevação: 0mm a 8.0mm para acomodar jaquetas acolchoadas e tecidos espessos.",
    howItWorks: [
      "1. A bordadeira prepara o bastidor com um tecido espesso (ex: toalha aveludada ou jaqueta moletom).",
      "2. Gira o volante manual até a agulha atingir a posição mais baixa (PMI).",
      "3. Solta o parafuso de fixação da haste do calcador no cabeçote.",
      "4. Ajusta a altura da haste de forma que o calcador fique a exatamente 1,0mm da superfície do tecido.",
      "5. Aperta firmemente o parafuso de fixação.",
      "6. A máquina entra em operação: a haste do calcador desce sincronicamente com a agulha.",
      "7. O calcador apoia sobre o tecido sem esmagar as fibras nem prender o deslocamento do bastidor.",
      "8. Ao subir, a agulha sai livremente do tecido sem levantar o material, formando laçadas impecáveis na lançadeira."
    ],
    beginnerExplanation: "É o ferrinho vertical que segura o pezinho da máquina no lugar! Ele tem um parafusinho para você regular se o pezinho fica mais alto ou mais baixo. Se você for bordar uma toalha grossa ou moletom, você levanta um pouquinho a haste para o pezinho não ficar esmagando e travando o bastidor; se for bordar um tecidinho fino, você abaixa para o tecido não ficar pulando!",
    applications: [
      "Adaptação da máquina para diferentes espessuras de tecido (de seda fina a jaquetas acolchoadas)",
      "Eliminação de falhas de ponto causadas por tecido pulando durante a subida da agulha (Flagging)",
      "Prevenção de marcas de atrito do calcador sobre veludos, couros e tecidos resinados",
      "Troca e instalação de calcadores especiais (calcador de corte, calcador de cordone e lantejoulas)"
    ],
    commonErrors: [
      "Deixar o calcador baixo demais em toalhas grossas: o calcador bate e raspa no tecido, freando o motor do pantógrafo",
      "Deixar o calcador alto demais em tecidos finos: o tecido pula junto com a agulha, causando embolamento de linha embaixo",
      "Não apertar bem o parafuso da haste, fazendo o calcador cair no meio do bordado e bater na agulha"
    ],
    troubleshootingTips: [
      "A regra de ouro da folga do calcador é a espessura de 1 cartão de visita ou cartão de crédito entre o pé e o tecido",
      "Se estiver bordando toalhas felpudas com plástico hidrossolúvel, levante a haste em 0,5mm para o pé deslizar suavemente",
      "Em máquinas multulagulhas com ajuste eletrônico de calcador no painel, salve a altura ideal para cada tipo de tecido na memória",
      "Confira se o furo central do calcador está perfeitamente alinhado com a descida da agulha"
    ],
    dicaArtrelados: "O ajuste da altura do calcador é o segredo para bordar moletom grosso e toalhas sem quebrar agulhas! Um simples ajuste de 1 milímetro na haste transforma um bordado barulhento e cheio de falhas em um trabalho macio e perfeito!",
    voceSabia: "O mecanismo de calcador flutuante de salto alternado (Stepping Presser Foot) foi inventado para permitir que o bastidor de bordado se mova livremente em qualquer direção enquanto a agulha está fora do tecido!",
    practicalExercise: "Coloque um pedaço de moletom grosso sob o calcador: gire o volante até a agulha descer e confira se o calcador está prensando forte ou com a folga recomendada de 1mm!",
    quickSummary: "Haste ajustável que segura o calcador e calibra sua altura para impedir que o tecido pule com a agulha.",
    imageUrl: "/images/h003_haste_calcador_altura_v1.jpg?v=1",
    imageCaption: "Anatomia da Haste do Calcador e Ajuste de Altura: a barra de calibração que sustenta o calcador flutuante e regula a folga ideal de 1,0 mm sobre o tecido no Ponto Morto Inferior, prevenindo o flagging e garantindo laçadas perfeitas sem travar o bastidor.",
    relatedTerms: ["Haste da Barra de Agulhas & Bucha Superior", "Hook Timing", "Marca de Bastidor (Hoop Burn)", "Agulha de Bordado"],
    tags: ["h-003", "haste do calcador", "presser foot", "ajuste de altura", "flagging", "mecanica", "regulagem", "artrelados"],
    bibliographicReferences: [
      "BROTHER MULTI-NEEDLE SERVICE MANUAL. Presser Foot Height and Timing Adjustment. Nagoya, 2023.",
      "HAPPY JAPAN EMBROIDERY TECHNICAL GUIDE. Stepping Foot Clearance and Fabric Density. Tokyo, 2022.",
      "ARTRELADOS. Calibração Mecânica de Ateliê: Calcadores, Agulhas e Tensões para Tecidos Grossos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-004-haste-do-pantografo-eixo-de-transmissao-y",
    code: "H-004",
    term: "Haste do Pantógrafo & Eixo de Transmissão Y (Pantograph Drive Shaft & Linear Rail)",
    letter: "H",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do grego pan (tudo) e graphein (escrever/desenhar), e do latim transmissio (passagem/transferência de força). Sistema mecânico de movimentação cartesiana de matrizes.",
    summary: "Eixo mecânico de aço acoplado a correias dentadas e guias lineares que movimenta o bastidor com extrema precisão nos eixos X e Y.",
    definition: "A Haste do Pantógrafo e Eixo de Transmissão Y (Pantograph Drive Shaft / Linear Guide Rail & Y-Axis Timing Belt Assembly) é o conjunto cinemático de alta precisão responsável por transferir a rotação dos motores de passo ou servomotores para a estrutura que suporta os bastidores de bordado. Composto por eixos retificados de aço temperado, rolamentos lineares de esferas recirculantes e correias síncronas reforçadas com fibra de carbono ou aço, o sistema desloca o bastidor com resoluções de até 0,05mm (1/10 de milímetro por pulso de motor), suportando as acelerações bruscas geradas em velocidades de 1.000 PPM sem sofrer deformações estruturais nem perdas de passos.",
    technicalDetails: "Precisão posicional: Repetibilidade bidirecional de ±0,025mm; correia dentada tipo HTD ou STS com passo de 3mm reforçada com cordonéis de aço; guias lineares de perfil retificado com folga zero pré-carregada.",
    howItWorks: [
      "1. O processador da máquina lê a coordenada cartesiana (X, Y) do próximo ponto da matriz.",
      "2. O driver elétrico envia um trem de pulsos digitais para os servomotores dos eixos X e Y.",
      "3. O motor Y gira a haste do eixo de transmissão acoplada à polia de dentes de precisão.",
      "4. A correia dentada puxa a haste móvel do pantógrafo sobre os trilhos lineares.",
      "5. O bastidor é posicionado com precisão milesimal no exato local da próxima perfuração de agulha.",
      "6. A agulha desce e executa o ponto em menos de 50 milissegundos.",
      "7. O pantógrafo aguarda a agulha sair do tecido e inicia o deslocamento para o ponto seguinte.",
      "8. Mantém a simetria perfeita do bordado durante milhares de pontos consecutivos."
    ],
    beginnerExplanation: "É o conjunto de eixos de aço e correias dentadas lá atrás da máquina que carrega o bastidor para a frente, para trás e para os lados na velocidade da luz! É como o 'motorista' do bastidor: a cada pontinho que a agulha dá, ele mexe o bastidor uma fraçãozinha de milímetro para desenhar as letras e as flores no lugar exato!",
    applications: [
      "Movimentação cartesiana precisa de bastidores planos, tubulares e de boné",
      "Absorção de vibrações de inércia em máquinas multicabeçotes industriais de grande porte",
      "Garantia de alinhamento perfeito de contornos finos sobre preenchimentos de tatami",
      "Conexão rígida e livre de folgas entre os motores elétricos e o quadro do bastidor"
    ],
    commonErrors: [
      "Apoiar o peso do corpo ou objetos pesados sobre a haste do pantógrafo, empenando os trilhos de precisão",
      "Deixar acumular restos de linha e poeira nas engrenagens e correias dentadas do eixo Y",
      "Lubrificar as correias de borracha dentadas com óleo mineral (o óleo derrete e amolece a borracha da correia)"
    ],
    troubleshootingTips: [
      "Mantenha os trilhos lineares de aço sempre limpos com pano seco e aplique apenas uma fina camada de graxa com PTFE nas canaletas de rolamento",
      "Se as letras bordadas estiverem saindo deformadas (círculos virando ovais), confira a tensão das correias dentadas do eixo X e Y com o técnico",
      "Nunca empurre o pantógrafo com as mãos quando os motores da máquina estiverem ligados e energizados",
      "Em caso de perda de passos (bordado saindo do lugar no meio do desenho), verifique se há linhas presas enroladas no eixo do motor"
    ],
    dicaArtrelados: "O pantógrafo é o coração da precisão da sua máquina! Para mantê-lo impecável por anos, nunca empurre o carro do bastidor com força e faça uma limpeza semanal com pincel nas guias lineares para tirar os fiapinhos de linha!",
    voceSabia: "O termo 'pantógrafo' vem do grego e foi inventado em 1603 pelo astrônomo Christoph Scheiner como um mecanismo de réguas articuladas para copiar e ampliar desenhos à mão, sendo adaptado para teares mecânicos por Joseph-Marie Jacquard em 1804!",
    practicalExercise: "Borde um círculo perfeito de 5cm com um contorno fino de ponto corrido: observe se o contorno fecha exatamente em cima da linha inicial, atestando que a haste do pantógrafo está sem folgas!",
    quickSummary: "Conjunto de eixos retificados e correias que movimenta o bastidor nos eixos X e Y com precisão milimétrica.",
    relatedTerms: ["Grade Cartesiana X/Y & Coordenadas do Pantógrafo", "Garra do Bastidor", "Graxa Branca Sintética com PTFE", "Ponto de Origem / Ponto Zero"],
    tags: ["h-004", "haste do pantografo", "eixo y", "trilho linear", "mecanica", "precisao cartesiana", "motores", "artrelados"],
    bibliographicReferences: [
      "TAJIMA PANTOGRAPH ENGINEERING STANDARDS. Linear Guide Rails & Timing Belt Maintenance. Nagoya, 2023.",
      "BARUDAN EMBROIDERY DRIVE SYSTEMS. Cartesian Motion Dynamics and Stepper Motor Control. Ichinomiya, 2022.",
      "ARTRELADOS. Engenharia de Movimento em Bordadeiras: Calibração de Pantógrafos, Correias e Guias Lineares. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-005-hatch-embroidery-software-de-digitalizacao-wilcom",
    code: "H-005",
    term: "Hatch Embroidery & Software de Digitalização Wilcom (Hatch Embroidery Digitizing Suite)",
    letter: "H",
    level: "Fundamental 🟢",
    category: "Programação & Digitalização",
    grammarClass: "Substantivo próprio / Software comercial.",
    origin: "Do inglês hatch (chocar/criar ideias novas e também trama de hachura gráfica) e embroidery (bordado). Plataforma desenvolvida pela Wilcom International na Austrália.",
    summary: "Software profissional e intuitivo de criação e edição de matrizes de bordado desenvolvido pela Wilcom para artesãos, designers e pequenos ateliês.",
    definition: "O Hatch Embroidery (Hatch Digitizer by Wilcom / Suíte de Criação e Edição de Matrizes Hatch) é um dos mais modernos e conceituados softwares comerciais de digitalização de bordados para computadores com sistema Windows. Criado com o consagrado motor de processamento gráfico da Wilcom, o Hatch combina ferramentas avançadas de digitalização manual vetorial, conversão inteligente de fotos e ilustrações (Auto-Digitizing), biblioteca com centenas de fontes de letras pré-digitalizadas com compensação automática, controle minucioso de densidade, gradientes de cor (Color Blending) e conversão instantânea para mais de 30 formatos de máquinas de bordar (.PES, .JEF, .DST, .EXP, .VIP, .XXX).",
    technicalDetails: "Recursos técnicos: Motor gráfico vetorial nativo com curvas Bézier dinâmicas; ferramenta Auto-Fabric Assistant que ajusta underlays e densidades de acordo com o tecido escolhido; suporte a preenchimentos criativos esculpidos (Carving Stamps) e curvas senoidais (Wave Fill); exportação nativa em arquivo de edição .EMB e formatos finais de ponto.",
    howItWorks: [
      "1. O usuário importa uma imagem de alta resolução (PNG, JPG ou vetor SVG) para a área de trabalho do Hatch.",
      "2. Seleciona o tipo de tecido no 'Auto-Fabric' (ex: algodão piquet, malha ou toalha felpuda).",
      "3. O software calibra automaticamente as compensações de repuxo e as grades de underlay ideais para aquele tecido.",
      "4. O usuário digitaliza manualmente os objetos usando ferramentas de Ponto Cheio (Satin), Ponto Tatami e Contorno Corrido.",
      "5. Adiciona lettering usando fontes de bordado profissionais com traçado perfeito.",
      "6. Utiliza o visualizador 3D realista (TrueView) e o simulador de costura (Stitch Player) para conferir a sequência de produção.",
      "7. Exporta a matriz no formato da sua máquina (.PES para Brother, .JEF para Janome, .DST para industriais).",
      "8. Salva o arquivo original em .EMB para edições futuras sem perda de qualidade geométrica."
    ],
    beginnerExplanation: "É um dos melhores e mais fáceis programas de computador para criar e editar matrizes de bordado do mundo! Ele foi feito pela famosa Wilcom especialmente para quem tem ateliê: você abre o desenho no programa, clica e puxa com o mouse para desenhar os pontinhos, escolhe letras lindas que já vêm prontas e salva direto no pendrive para a sua máquina bordar perfeito!",
    applications: [
      "Criação completa de matrizes do zero a partir de logotipos, monogramas e ilustrações",
      "Edição rápida de matrizes prontas (redimensionamento com recálculo inteligente de pontos e troca de cores)",
      "Adição de nomes personalizados e monogramas para jalecos, uniformes e enxovais infantis",
      "Conversão universal de formatos de arquivos entre diferentes marcas de máquinas"
    ],
    commonErrors: [
      "Redimensionar arquivos de ponto final (.PES ou .DST) em mais de 20% sem usar o arquivo original de objeto (.EMB), deformando as densidades",
      "Digitalizar sem definir o tecido de base no assistente, gerando bordados com repuxo excessivo",
      "Usar auto-digitalização com imagens de baixa qualidade e cheias de ruído visual"
    ],
    troubleshootingTips: [
      "Guarde SEMPRE uma cópia de cada matriz no formato original .EMB do Hatch para que possa alterar qualquer letra ou tamanho no futuro",
      "Utilize o 'Stitch Player' (Simulador de Costura) antes de bordar para conferir se há cortes de linha desnecessários ou saltos longos",
      "Aproveite a ferramenta 'Branching' (Ramificação) para conectar múltiplos galhos e folhas em um único traçado contínuo sem cortes",
      "Ajuste a compensação de repuxo no menu de propriedades do objeto caso note frestas entre o contorno e o preenchimento"
    ],
    dicaArtrelados: "O Hatch é considerado por muitos mestres o 'Santo Graal' da digitalização moderna: ele tem toda a força e precisão matemática do Wilcom profissional com uma interface limpa e amigável que qualquer bordadeira aprende a dominar em poucas semanas!",
    voceSabia: "A Wilcom, criadora do Hatch, foi fundada em Sydney em 1979 e foi a pioneira mundial a desenvolver o primeiro sistema de digitalização gráfica computadorizada baseado em vetores geométricos da história!",
    practicalExercise: "Abra o Hatch: importe uma letra simples, aplique o ponto Satin (ponto cheio), altere a inclinação das linhas de ponto usando a ferramenta de ângulos e visualize o brilho no modo 3D TrueView!",
    quickSummary: "Software profissional e intuitivo de digitalização e edição de matrizes com tecnologia vetorial Wilcom.",
    relatedTerms: ["Auto-Digitizing / Geração Automática de Pontos", "Compensação de Repuxo", "Visualizador de Arquivos de Matriz", "Formato de Arquivo de Bordado"],
    tags: ["h-005", "hatch", "wilcom", "software", "digitalizacao", "matrizes", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Hatch Embroidery User & Digitizing Reference Manual. Sydney, 2023.",
      "HATCH DIGITIZING ACADEMY. Mastering Lettering, Underlays, and Auto-Fabric. Brisbane, 2022.",
      "ARTRELADOS. Guia Completo do Hatch Embroidery: Da Primeira Letra à Matriz Profissional de Alto Nível. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-006-hematita-imas-magneticos-de-fixacao-em-bancada",
    code: "H-006",
    term: "Hematita & Ímãs Magnéticos de Fixação em Bancada (Hematite & Neodymium Framing Magnets)",
    letter: "H",
    level: "Fundamental 🟢",
    category: "Acessórios & Ferramentas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do grego haimatites (semelhante a sangue/minério de ferro) e do latim magnes (pedra imã). Acessórios de bancada e bastidores com campos magnéticos de terras raras.",
    summary: "Conjunto de ímãs de neodímio ou hematita de alta atração utilizados na bancada e em bastidores para fixar entretelas e tecidos sem parafusos.",
    definition: "A Hematita e Conjunto de Ímãs Magnéticos de Bancada e Bastidor (Neodymium & Hematite Magnetic Framing Clamps / Retaining Magnets) são blocos, cilindros ou pastilhas magnéticas fabricadas em ligas de neodímio-ferro-boro (NdFeB de grau N42 a N52) revestidas por níquel ou hematita sintética resinada. São utilizados como ferramentas essenciais no ateliê moderno: na bancada de preparação, prendem a entretela esticada na estação de montagem; nos bastidores magnéticos (Mighty Hoop / Snap Hoop), exercem uma força de compressão vertical uniforme de até 15 kg/cm² sobre tecidos grossos, jaquetas e toalhas, eliminando por completo as marcas de bastidor (Hoop Burn) e o esforço de apertar parafusos mecânicos.",
    technicalDetails: "Propriedades físicas: Força de atração magnética (Pull Force): 4,5kg a 18kg por pastilha; revestimento triplo de Níquel-Cobre-Níquel ou borracha protetora antirrisco; resistência térmica de até 80°C; formato ergonômico com abas de alavanca de desengate.",
    howItWorks: [
      "1. A bordadeira apoia a entretela sobre a base metálica da estação de montagem.",
      "2. Posiciona duas pastilhas magnéticas nas pontas: os ímãs travam a entretela esticada e sem rugas instantaneamente.",
      "3. Veste a camiseta ou toalha sobre a base.",
      "4. Aproxima o aro magnético superior do bastidor.",
      "5. Os ímãs de neodímio puxam o aro superior contra o aro inferior com pressão perpendicular uniforme.",
      "6. O tecido é travado com tensão homogênea em 360°, sem distorções de trama.",
      "7. Durante o bordado, o campo magnético mantém o tecido perfeitamente estável mesmo a 1.000 PPM.",
      "8. Após o término, o operador levanta a aba de alavanca e solta a peça em menos de 2 segundos."
    ],
    beginnerExplanation: "São aqueles super-ímãs fortíssimos que a gente usa na mesa do ateliê e nos bastidores magnéticos para segurar o pano e a entretela sem precisar ficar apertando nenhum parafuso! Você só encosta o ímã e ele 'pá!'... gruda o tecido no lugar certo bem esticadinho, não machuca o tecido e não deixa aquela marca redonda feia amassada na roupa!",
    applications: [
      "Fixação rápida de entretelas na mesa de corte e estações de gabarito HoopMaster",
      "Montagem de jaquetas pesadas, toalhas de banho e couro em bastidores magnéticos",
      "Segurar sobras de tecidos longos nas laterais da máquina para não caírem no chão",
      "Fixação de filmes plásticos de PVA sobre aveludados durante a técnica de flutuação"
    ],
    commonErrors: [
      "Deixar os ímãs de neodímio baterem secamente uns nos outros sem controle, quebrando ou lascando o revestimento de níquel",
      "Prender os dedos entre dois ímãs potentes por descuido no manuseio (risco de beliscões fortes)",
      "Aproximar ímãs potentes de cartões de crédito magnéticos, relógios mecânicos ou telas sensíveis"
    ],
    troubleshootingTips: [
      "Para separar dois ímãs fortes, deslize-os lateralmente em vez de tentar puxá-los para cima",
      "Utilize ímãs com revestimento emborrachado ou cole uma fita de veludo adesivo na face de contato para proteger tecidos delicados de seda",
      "Mantenha os ímãs guardados em uma caixinha acolchoada longe da tela touchscreen da máquina de bordar",
      "Se o ímã perder força por sujeira metálica grudada, limpe a superfície com fita adesiva larga"
    ],
    dicaArtrelados: "Ter um kit de 4 a 6 super-ímãs de neodímio na bancada é como ter um par de mãos extras no ateliê! Eles agilizam a montagem de bastidor em mais de 50% e salvam suas mãos e punhos de qualquer cansaço!",
    voceSabia: "Os ímãs de Neodímio foram desenvolvidos simultaneamente em 1982 pela General Motors e pela Sumitomo Special Metals, e são os ímãs permanentes mais poderosos já criados pela humanidade, capazes de sustentar mais de 1.000 vezes o seu próprio peso!",
    practicalExercise: "Use duas pastilhas magnéticas para travar uma entretela na mesa: estique uma toalha felpuda por cima e veja como a entretela não sai do lugar e fica lisa sem nenhuma ruga!",
    quickSummary: "Ímãs de alta força para fixação instantânea de tecidos e entretelas sem marcas de parafuso.",
    relatedTerms: ["Grampo de Fixação do Bastidor Magnético", "Grip do Bastidor", "HoopMaster & Estação Industrial de Montagem", "Marca de Bastidor (Hoop Burn)"],
    tags: ["h-006", "imas", "neodimio", "hematita", "bastidor magnetico", "bancada", "produtividade", "artrelados"],
    bibliographicReferences: [
      "MAGNETIC FRAMING TECHNOLOGIES. Neodymium Clamping Systems for Commercial Embroidery. West Bend, 2023.",
      "WORKSHOP ERGONOMICS & EFFICIENCY. Magnetic Tooling in Modern Apparel Decoration. Chicago, 2022.",
      "ARTRELADOS. O Poder dos Bastidores e Fixadores Magnéticos: Velocidade, Saúde e Acabamento Sem Marcas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

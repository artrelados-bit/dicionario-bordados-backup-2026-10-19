import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART6: Verbete[] = [
  {
    id: "ondulacao-por-tensao-excessiva-bobina",
    code: "O-041",
    letter: "O",
    term: "Ondulação por Tensão Excessiva da Bobina (Bobbin-Induced Puckering)",
    pronunciation: "on-du-la-ção por ten-são ex-ces-si-va da bo-bi-na",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Problemas & Soluções",
    summary: "Deformação com rugas profundas no avesso e na frente da peça gerada pela calibragem muito apertada da mola da caixa de bobina (>25g no tensiômetro Towa), que traciona o tecido para baixo.",
    origin: "Fenômeno mecânico estudado nos laboratórios de controle de qualidade têxtil de Osaka e Albstadt a partir da introdução de tensiômetros de precisão nos anos 1990.",
    definition: "A Ondulação por Tensão Excessiva da Bobina (Bobbin-Induced Puckering / Lower Thread Stress) é o franzimento característico que surge quando o fio inferior de poliéster ou poliamida da bobina é alimentado com resistência excessiva de arraste. Ao puxar o ponto para dentro do tecido com força descomunal, a linha da bobina força a linha superior a penetrar excessivamente, criando uma depressão côncava na superfície da peça. Essa tração contínua contrai a trama do tecido em direção ao ponto de costura, gerando rugas radiadas que não desaparecem mesmo após lavagem e passadoria a quente.",
    howItWorks: [
      "1. A mola laminar da caixa de bobina é apertada em excesso pelo parafuso de ajuste (tensão > 25g a 30g).",
      "2. A cada laçada formada pela lançadeira, a linha inferior resiste à saída com força excessiva.",
      "3. A alavanca estica-fio precisa exercer força redobrada para puxar o nó do ponto para o interior do tecido.",
      "4. Essa tensão extrema atua como um elástico esticado que comprime o tecido e a entretela.",
      "5. Em tecidos leves ou médios (tricoline, percal, malha), a estrutura cede e enruga em direção ao bordado.",
      "6. No avesso da peça, a coluna de linha branca central (que deveria ocupar 1/3 da largura) fica extremamente fina (< 10%) ou some por completo.",
      "7. A peça fica dura, enrugada e deformada."
    ],
    beginnerExplanation: "É quando o parafuso da caixinha da bobina está apertado demais e a linha de baixo sai muito dura e pesada! Em vez do ponto assentar suave no tecido, a linha de baixo puxa tudo para baixo com tanta força que o tecido enruga todinho em volta, parecendo que você puxou o elástico de um franzido de saia! Para consertar, basta soltar um tiquinho o parafusinho da caixinha da bobina!",
    applications: [
      "Diagnóstico de franzimento crônico em toalhas de lavabo, camisas de tricoline e lençóis",
      "Calibragem correta com tensiômetro digital ou analógico Towa Gauge (18g a 22g)",
      "Equilíbrio da proporção perfeita de 1/3 de linha branca no avesso de pontos satim",
      "Prevenção de quebra de agulhas e quebra de linhas por sobretensão"
    ],
    technicalDetails: "A tensão ideal da linha da bobina para bordado computadorizado varia entre 18g e 22g de força de tração no tensiômetro Towa (ou o equivalente ao peso da própria caixa de bobina suspensa suavemente pela linha no teste de gravidade tipo 'ioiô'). Tensões superiores a 25g causam aumento de 40% nas forças de contração do tecido.",
    commonErrors: [
      "❌ Apertar o parafuso da caixa de bobina achando que 'quanto mais apertado, mais firme fica o bordado'",
      "❌ Tentar compensar a linha de cima frouxa apertando a bobina (o correto é soltar a de cima ou limpar resíduos)",
      "❌ Borda tecidos finos com bobinas bobinadas com linha grossa de costura comum (60wt) em vez de linha fina de bobina (120wt/150wt)",
      "❌ Não limpar os fiapos de linha e pó de cera acumulados sob a mola laminar da caixa de bobina"
    ],
    troubleshootingTips: [
      "Se o avesso não tiver a faixa branca de 1/3 no satim: Afrouxe o parafuso da mola da caixa de bobina no sentido anti-horário (cerca de 1/8 de volta)",
      "Se a linha da bobina sair aos trancos: Passe um pedaço de papel rígido ou fio dental sob a lâmina da caixa de bobina para remover fiapos presos",
      "Se o tecido estiver franzindo muito: Faça o teste do Towa Gauge e calibre para 20g"
    ],
    dicaArtrelados: "O 'teste do ioiô' Artrelados para a bobina: segure a ponta da linha da caixa de bobina com os dedos e dê um leve toquezinho para baixo com a mão, como se fosse um ioiô. A caixinha deve descer apenas uns 3 a 5 centímetros suavemente e parar! Se não descer nada, está apertada demais!",
    voceSabia: "Nas fábricas de alta costura da Suíça, os técnicos verificam a tensão de todas as caixas de bobina com tensiômetros eletrônicos calibrados a laser duas vezes por turno de trabalho!",
    practicalExercise: "Borde um retângulo de ponto cheio (satim) de 1x3 cm. Olhe o avesso: você deve ver uma faixa branca de linha de bobina ocupando exatamente o 1/3 central e duas faixas laterais com a cor de cima ocupando 1/3 de cada lado. Se a branca estiver muito fininha, solte 1/8 de volta na mola da bobina.",
    quickSummary: "Franzimento causado por mola da bobina muito apertada (>25g); corrigido soltando o parafuso para calibrar em 18-22g.",
    relatedTerms: ["Towa Gauge / Medidor de Tensão de Bobina", "Caixa de Bobina", "Nivelamento de Tensão de Linha", "Ondulação de Tecido no Bastidor / Efeito Onda"],
    tags: ["o-041", "tensao de bobina", "ondulacao", "puckering", "towa gauge", "solucoes", "artrelados"],
    bibliographicReferences: [
      "TOWA INDUSTRIAL CO. LTD. Bobbin Tension Gauge Operating Manual & Measurement Calibration. Osaka, 2021.",
      "KAPLAN, S. Thread Tension Dynamics: The Interplay Between Upper and Lower Threads. Stitches Mag, 2020."
    ]
  },
  {
    id: "organizacao-paleta-cores-digitais",
    code: "O-042",
    letter: "O",
    term: "Organização de Paleta de Cores Digitais (Custom Digital Palette Setup)",
    pronunciation: "or-ga-ni-za-ção de pa-le-ta de co-res di-gi-tais",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação de Bordado",
    summary: "Configuração personalizada das tabelas de cores virtuais no software de matrizes correspondendo exatamente às marcas e códigos numéricos reais dos cones de linha do ateliê (ex: Setta, Madeira, Ricamare).",
    origin: "Desenvolvido com a introdução dos primeiros monitores coloridos em sistemas de CAD/CAM de bordado na década de 1980.",
    definition: "A Organização de Paleta de Cores Digitais (Custom Thread Chart & Digital Palette Management) é o procedimento no software de bordado onde o usuário cria e salva sua própria biblioteca de fios com base no mostruário físico real de linhas presentes nas prateleiras do seu ateliê. Em vez de usar paletas genéricas de RGB ou marcas internacionais não disponíveis localmente, o digitalizador cadastra os códigos numéricos exatos dos fabricantes (como Linhas Setta Lumina, Polycron, Madeira Polyneon, Isacord ou Ricamare). Isso permite que a simulação 3D na tela represente com 100% de fidelidade cromática a peça que sairá da máquina.",
    howItWorks: [
      "1. O profissional acessa o menu 'Gerenciador de Paletas / Thread Charts' no software de digitalização.",
      "2. Cria uma nova paleta personalizada batizada com o nome do seu ateliê (ex: 'Minhas Linhas Setta').",
      "3. Seleciona a marca do fabricante e adiciona apenas os códigos dos cones reais que possui no estoque físico.",
      "4. Organiza as cores por famílias tonais (azuis, rosas, amarelos, neutros, tons de pele).",
      "5. Ao digitalizar ou editar qualquer matriz, utiliza exclusivamente as cores da sua paleta real.",
      "6. O software gera a folha de produção (Ficha Técnica / Print Worksheet) com os números exatos dos cones que o operador deve colocar em cada agulha.",
      "7. Elimina erros de escolha de tonalidade e agiliza o setup de máquina."
    ],
    beginnerExplanation: "É colocar no programa do computador a listinha exata das cores e dos números das linhas que você tem guardadas nas suas prateleiras do ateliê! Assim, quando você estiver montando o desenho na tela, você escolhe exatamente o número da linha de verdade que você tem em casa. Quando for bordar, a folhinha de instruções já sai dizendo direitinho: 'Coloque o cone número 2145 na agulha 1'!",
    applications: [
      "Padronização visual e fidelidade cromática em logotipos de empresas e marcas corporativas",
      "Geração de fichas técnicas de produção para operadores de máquinas de bordar",
      "Apresentação de mockups digitais realistas para aprovação de clientes no WhatsApp",
      "Controle e gestão de estoque de cones de linha no ateliê"
    ],
    technicalDetails: "As bibliotecas de cores digitais profissionais utilizam perfis de cores calibrados no espaço de cores CIE L*a*b* ou sRGB com valores de refletância calculados sob iluminação padrão D65 (luz do dia). A correspondência delta-E (dE) entre a linha física sob luz natural e a representação na tela do monitor deve ser inferior a 2,0 para garantir precisão perceptual.",
    commonErrors: [
      "❌ Usar cores RGB aleatórias na tela que não existem em nenhum cone de linha real do mercado",
      "❌ Enviar a matriz para o operador sem ficha técnica de cores, fazendo o operador 'chutar' os tons parecidos na hora",
      "❌ Não atualizar a paleta digital quando comprar novos cones de linha no ateliê",
      "❌ Confundir códigos de linhas de poliéster com códigos de linhas de algodão ou meadas de ponto cruz"
    ],
    troubleshootingTips: [
      "Se a cor bordada na toalha ficar muito diferente da cor vista no computador: Calibre a sua paleta no software selecionando a marca exata dos seus cones (ex: Setta Lumina)",
      "Se você perder muito tempo procurando os cones certos na hora de bordar: Imprima a ficha técnica de cores gerada pelo software e cole perto da máquina",
      "Se o cliente for muito exigente com o tom do logotipo: Peça a ele para escolher o número da cor diretamente na cartela física de mostruário de fios"
    ],
    dicaArtrelados: "Tenha uma gaveta ou prateleira numerada no seu ateliê: etiquete cada cone de linha com o seu código de fábrica e guarde na ordem numérica. Quando a ficha técnica do programa pedir o cone '3045', você acha em menos de 2 segundos!",
    voceSabia: "Os grandes fabricantes mundiais de fios como a Madeira e a Isacord possuem mais de 450 tonalidades diferentes de linha de poliéster em seus catálogos, cada uma com uma receita química exclusiva de tinturaria!",
    practicalExercise: "Abra o seu programa de matrizes, acesse o menu de paletas e monte uma paleta personalizada com as 10 cores que você mais usa no seu ateliê. Salve como 'Paleta Favoritos' e use em seu próximo projeto.",
    quickSummary: "Cadastro das cores e códigos reais das linhas do ateliê no software; garante fidelidade cromática e fichas técnicas perfeitas.",
    relatedTerms: ["Mapeamento de Cores", "Ordem de Bordado", "Linha 100% Poliéster", "Ficha Técnica de Produção"],
    tags: ["o-042", "paleta de cores", "gerenciador de fios", "fidelidade cromatica", "mostruario", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Managing Color Palettes, Thread Charts & Custom Catalogs. Wilcom Guide, 2021.",
      "MADEIRA THREADS. Color Matching Systems & Digital Thread Palette Calibration. Freiburg, 2020."
    ]
  },
  {
    id: "overfeed-alimentacao-forcada-fio",
    code: "O-043",
    letter: "O",
    term: "Alimentação Ativa de Linha / Sistema Positivo de Fio (Positive Thread Feeding System)",
    pronunciation: "a-li-men-ta-ção a-ti-va de li-nha / sis-te-ma po-si-ti-vo",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Componentes da Máquina",
    summary: "Tecnologia mecatrônica avançada que substitui discos de fricção passivos por roletes motorizados inteligentes que entregam a quantidade exata de linha em milímetros para cada ponto.",
    origin: "Desenvolvido pela Melco (tecnologia Acti-Feed) e adotado por Tajima (i-TM) e ZSK a partir dos anos 2010 para revolucionar o controle de tensão em bordados.",
    definition: "A Alimentação Positiva e Ativa de Linha (Positive Thread Feeding / Intelligent Thread Management - i-TM) é o avanço tecnológico que elimina os tradicionais discos tensores mecânicos de aperto por mola. Em vez de a agulha puxar a linha por atrito contra a mola tensora (sistema passivo), o computador da máquina calcula antecipadamente o comprimento exato do próximo ponto e a espessura do tecido montado no bastidor, acionando micromotores de passo com roletes emborrachados que alimentam a quantidade exata de milímetros de fio antes do movimento da agulha. Isso elimina completamente o franzimento de tecidos delicados e permite bordar em seda, couro e toalhas sem necessidade de reajustes manuais de tensão.",
    howItWorks: [
      "1. O sensor óptico ou mecânico do cabeçote mede a espessura física do tecido e da entretela no bastidor.",
      "2. O processador da máquina lê a distância do próximo ponto (ex: satim de 4,2 mm).",
      "3. Calcula a demanda volumétrica de linha superior e inferior necessária para formar o ponto ideal.",
      "4. O micromotor do alimentador ativo gira os roletes de tração positiva e desenrola exatamente o comprimento calculado.",
      "5. A agulha desce e executa a laçada com tensão zero de estresse no filamento.",
      "6. A alavanca estica-fio recolhe a folga sem puxar o tecido contra a chapa.",
      "7. O ponto assenta plano, com volume consistente e sem qualquer ondulação ou quebra de linha."
    ],
    beginnerExplanation: "É a tecnologia mais moderna do mundo que aposentou aquele botão de girar a tensão da linha! A própria máquina inteligente mede a grossura do tecido e 'entrega' na boquinha da agulha a quantidade exatinha de linha que ela precisa para dar cada pontinho. O bordado nunca mais repuxa, nunca mais embola e fica perfeito tanto em seda fininha quanto em jaqueta de couro grossa sem você precisar mexer em nada!",
    applications: [
      "Bordados em tecidos de extrema elasticidade (Lycra, tule, seda e tecidos esportivos)",
      "Transição contínua entre tecidos finos e lombadas grossas de costuras sem quebra de fio",
      "Padronização absoluta de qualidade em fábricas com dezenas de cabeçotes operando em série",
      "Bordados tridimensionais (3D Foam) com entrega de linha relaxada para alto relevo"
    ],
    technicalDetails: "O sistema i-TM (Intelligent Thread Management) da Tajima realiza o cálculo cinemático do volume de linha a cada ciclo de 1/1.000 de segundo. A tensão de tração média no filamento cai de 120-180 cN (em sistemas convencionais) para menos de 30-50 cN, reduzindo o estresse tênsil da linha em mais de 70% e zerando a quebra por estiramento elástico.",
    commonErrors: [
      "❌ Tentar instalar molas e tensores mecânicos manuais em cabeçotes projetados exclusivamente para alimentação positiva ativa",
      "❌ Deixar resíduos de adesivo ou óleo acumularem nos roletes emborrachados de tração ativa",
      "❌ Inserir espessura de tecido incorreta no menu de parâmetros do sistema de alimentação inteligente",
      "❌ Usar linhas de má qualidade com nós de fábrica que travam no rolete motorizado"
    ],
    troubleshootingTips: [
      "Se os pontos ficarem com laçadas frouxas no sistema ativo: Verifique se o parâmetro de espessura de tecido no painel não está calibrado para um valor maior que o real",
      "Se o bordado repuxar em tecido elástico: Aumente o fator de relaxamento de alimentação de linha (+5% a +10%) no painel",
      "Se os roletes de tração patinarem: Limpe a superfície emborrachada com álcool isopropílico seco"
    ],
    dicaArtrelados: "Se você tem uma máquina moderna com sistema inteligente de alimentação de linha (como o i-TM ou Acti-Feed): confie no computador da máquina! Deixe o modo automático ligado e apenas informe o tipo de tecido no painel; o resultado é impecável!",
    voceSabia: "A tecnologia de alimentação ativa de linha foi desenvolvida inicialmente em Denver, nos Estados Unidos, por engenheiros aeroespaciais que precisavam bordar fios de fibra de carbono em estruturas de foguetes sem aplicar nenhuma tensão que pudesse trincar as fibras!",
    practicalExercise: "Consulte o manual técnico de máquinas industriais modernas (Tajima TMEZ ou Melco EMT16X) e assista a vídeos do funcionamento dos roletes de alimentação positiva ativa sem discos de tensão.",
    quickSummary: "Tecnologia avançada que calcula e entrega ativamente o comprimento exato de linha por ponto, eliminando tensões e franzimentos.",
    relatedTerms: ["Nivelamento de Tensão de Linha", "Cabeçote de Bordadeira", "Linha 100% Poliéster", "Bordado em Alto Relevo 3D (EVA)"],
    tags: ["o-043", "alimentacao ativa", "positive thread feed", "i-tm", "acti-feed", "inovacao", "mecanica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIES. i-TM Intelligent Thread Management Technology & Dynamic Tensionless Stitching. Nagoya, 2021.",
      "MELCO EMBROIDERY SYSTEMS. Acti-Feed Mechanical Principles & Thread Delivery Optimization. Denver, 2020."
    ]
  },
  {
    id: "operacao-multi-cabecote-sincronismo",
    code: "O-044",
    letter: "O",
    term: "Operação Multi-Cabeçote em Sincronismo (Multi-Head Gang Operation)",
    pronunciation: "o-pe-ra-ção mul-ti ca-be-ço-te em sin-cro-nis-mo",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Operação da Máquina",
    summary: "Protocolos operacionais de máquinas industriais de 2, 4, 6, 8, 12 ou mais cabeçotes acionados por um único eixo principal sincronizado e pantógrafo comum de grande porte.",
    origin: "Desenvolvido no Japão e Alemanha nos anos 1960 para multiplicar a capacidade produtiva das indústrias de confecção de uniformes e moda em larga escala.",
    definition: "A Operação Multi-Cabeçote em Sincronismo (Multi-Head Embroidery System) é o método produtivo de escala industrial onde múltiplos cabeçotes mecânicos idênticos (de 2 a mais de 24 cabeçotes) são montados sobre uma mesma bancada estrutural rígida. Todos os cabeçotes são acionados simultaneamente por um eixo de transmissão principal comum (Main Shaft) conectado a um motor servo central, enquanto um único pantógrafo de grande porte movimenta todos os bastidores conectados em sincronia geométrica perfeita, bordando a mesma matriz de desenho em dezenas de peças ao mesmo tempo.",
    howItWorks: [
      "1. O operador carrega a matriz mestre no painel central da máquina industrial.",
      "2. Configura a sequência de agulhas e cores uma única vez para todos os cabeçotes.",
      "3. Monta as camisetas ou bonés em todos os bastidores simultaneamente nas estações de montagem.",
      "4. Encaixa os bastidores nos braços de suporte do pantógrafo longo.",
      "5. Executa o teste de área limite (Trace) em todos os cabeçotes.",
      "6. Inicia o bordado a 850 PPM: todas as 6, 12 ou 24 agulhas perfuram os tecidos rigorosamente no mesmo milissegundo.",
      "7. Se houver quebra de linha em um cabeçote específico, o sensor desativa individualmente a embreagem daquele cabeçote, a máquina para, o operador passa a linha, volta os pontos necessários e reinicia.",
      "8. Ao término do ciclo, dezenas de peças idênticas são finalizadas simultaneamente."
    ],
    beginnerExplanation: "É o funcionamento daquelas máquinas industriais gigantes que têm vários cabeçotes lado a lado (como 4, 6, 8 ou 12 cabeçotes)! O computador manda um único comando e todas as agulhas batem juntas ao mesmo tempo, bordando 6, 8 ou 12 camisetas idênticas de uma só vez! Se uma linha arrebentar em um cabeçote só, a máquina avisa exatamente qual cabeçote parou para você consertar!",
    applications: [
      "Produção em massa de uniformes corporativos, escolares e industriais",
      "Grandes pedidos de bonés promocionais e toalhas para hotelaria",
      "Fabricação em escala de emblemas e patches militares",
      "Exportação de vestuário e produtos têxteis para grandes redes varejistas"
    ],
    technicalDetails: "A estrutura de aço da bancada multi-cabeçote deve possuir rigidez torsional para absorver as vibrações harmônicas geradas por até 24 agulhas oscilando a 1.000 RPM (mais de 24.000 perfurações por minuto na estrutura). O sincronismo angular entre o primeiro e o último cabeçote é calibrado com tolerância de defasagem de fase inferior a 0,5° mecânico.",
    commonErrors: [
      "❌ Deixar um cabeçote sem linha ou com agulha errada ao iniciar a produção em série",
      "❌ Não conferir se todos os bastidores estão travados firmemente nos conectores do pantógrafo longo",
      "❌ Continuar a produção com um cabeçote desregulado em relação aos outros (ex: caixa de bobina muito apertada em apenas uma cabeça)",
      "❌ Não realizar a lubrificação coletiva de todos os cabeçotes no início do turno de trabalho"
    ],
    troubleshootingTips: [
      "Se um cabeçote específico sempre quebrar linha e os outros bordarem bem: O problema não é a matriz; revise a agulha, a caixa de bobina e a lançadeira daquele cabeçote",
      "Se o desenho do último cabeçote desalinhar em relação ao primeiro: Verifique o alinhamento e a folga nas conexões do braço do pantógrafo longo",
      "Se a máquina parar e não indicar qual cabeçote teve quebra: Inspecione os LEDs indicadores de quebra individuais no topo de cada cabeçote"
    ],
    dicaArtrelados: "A regra de ouro para fábricas multi-cabeçote: tenha uma 'ficha de calibração idêntica' para todas as cabeças! Use o Towa Gauge para deixar todas as caixas de bobina com exatamente 20g e use agulhas do mesmo lote em todas as posições!",
    voceSabia: "As maiores máquinas multi-cabeçotes já construídas no mundo pela ZSK na Alemanha possuem 56 cabeçotes em linha contínua, estendendo-se por mais de 40 metros de comprimento dentro de galpões fabris climatizados!",
    practicalExercise: "Se você visitar uma fábrica com máquina multi-cabeçote, observe o sincronismo espetacular das alavancas estica-fio subindo e descendo todas no mesmo ritmo, parecendo uma coreografia perfeita de dança mecânica.",
    quickSummary: "Operação sincronizada de múltiplos cabeçotes industriais que bordam a mesma matriz simultaneamente em alta escala.",
    relatedTerms: ["Cabeçote de Bordadeira", "Pantógrafo de Bordadeira", "Ordem de Bordado", "Sensor de Quebra de Linha"],
    tags: ["o-044", "multi-cabecote", "producao industrial", "sincronismo", "escala", "tajima", "barudan", "artrelados"],
    bibliographicReferences: [
      "BARUDAN INDUSTRIAL MACHINERY. Multi-Head Synchronization, Vibration Damping & Gang Control. Nagoya, 2021.",
      "TAJIMA ENGINEERING MANUAL. Multi-Head Setup, Drive Shaft Alignment & Frame Mechanics. Tokyo, 2020."
    ]
  },
  {
    id: "otimizacao-ponto-haste-contornos-finos",
    code: "O-045",
    letter: "O",
    term: "Otimização de Ponto de Haste e Contornos Finos (Stem Stitch Digitizing Rules)",
    pronunciation: "o-ti-mi-za-ção de pon-to de has-te e con-tor-nos fi-nos",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação de Bordado",
    summary: "Parâmetros de digitalização para contornos lineares elegantes em ponto de haste (Stem Stitch) e ponto cordão fino, com espessura entre 0,8 mm e 1,5 mm para desenhos botânicos e caligrafia.",
    origin: "Do tradicional ponto de bordado manual 'ponto haste' (Stem Stitch) da Idade Média, digitalizado nos anos 1990 para reproduzir ilustrações botânicas clássicas e florais.",
    definition: "O Ponto de Haste Digitalizado (Stem Stitch / Fine Outline Stitching) é a estrutura de pontos programados que simula o entrelaçamento diagonal característico do clássico ponto de haste manual. Ao contrário de uma coluna simples de satim estreito (que pode afundar nas fibras) ou de um ponto corrido simples (que fica muito fino e ralo), o ponto de haste eletrônico utiliza um arranjo de pontos sobrepostos em ângulo oblíquo com avanço helicoidal. Isso confere à linha uma espessura visual arredondada de 1,0 mm a 1,5 mm, com toque de cordão artesanal, ideal para caules de flores, arabescos, linhas de contorno em aquarela e caligrafia manuscrita delicada.",
    howItWorks: [
      "1. O digitalizador desenha o traçado vetorial do caule ou arabesco com a ferramenta de linha guia.",
      "2. Seleciona o tipo de ponto decorativo 'Ponto de Haste / Stem Stitch'.",
      "3. Define a espessura do ponto (ex: 1,2 mm) e o comprimento de avanço (ex: 2,5 mm a 3,0 mm).",
      "4. O software calcula o entrelaçamento dos pontos em ângulo de 15° a 25° em relação ao eixo da linha.",
      "5. A máquina costura com velocidade de 700 a 800 PPM.",
      "6. A linha de poliéster se projeta ligeiramente acima do tecido com acabamento arredondado e textura artesanal nobre.",
      "7. O contorno não afunda e mantém nitidez impecável mesmo em tecidos com leve textura."
    ],
    beginnerExplanation: "É aquele ponto lindo que imita o bordado à mão da vovó para fazer cabinhos de flores, galhinhos e letrinhas desenhadas! Em vez de ser uma linha reta simples ou um ponto cheio comum, ele dá voltinhas que parecem uma cordinha torcida. Fica com um charme artesanal maravilhoso e super delicado em toalhas de mesa e roupas de bebê!",
    applications: [
      "Ramos botânicos, caules de flores, trepadeiras e folhas de lavanda",
      "Letras manuscritas finas em estilo caligrafia com bico de pena",
      "Contornos artísticos em bordados estilo aquarela e pintura com agulha",
      "Detalhes decorativos em toalhas de linho, guardanapos e enxovais clássicos"
    ],
    technicalDetails: "O ponto de haste digitalizado deve manter um comprimento de ponto entre 2,5 mm e 3,5 mm com sobreposição de 30% a 40% entre os pontos adjacentes. O uso de agulha 70/10 com ponta fina (RG/SPI) e linha 40wt ou 50wt garante definição máxima dos gomos da haste.",
    commonErrors: [
      "❌ Usar ponto satim muito fino (< 0,7 mm) em vez de ponto de haste, fazendo os pontos sumirem dentro da trama do tecido",
      "❌ Fazer curvas muito fechadas com comprimento de ponto longo demais, deixando a linha reta e facetada",
      "❌ Borda ponto de haste em tecidos felpudos sem filme hidrossolúvel no topo",
      "❌ Usar linha grossa desregulada que desfigura o entrelaçamento da haste"
    ],
    troubleshootingTips: [
      "Se os cabos das flores sumirem no tecido: Troque o ponto corrido simples por Ponto de Haste com largura de 1,2 mm no software",
      "Se as curvas do galho ficarem com pontas duras: Reduza o comprimento do ponto nas curvas para 2,0 mm",
      "Se a linha puxar a trama do tecido: Adicione uma camada de entretela rasga-fácil e verifique a tensão superior"
    ],
    dicaArtrelados: "Para criar bordados com visual de bordado à mão nobre: use Ponto de Haste para os galhos e Ponto Folha (Leaf Stitch) para as folhinhas. Suas clientes vão jurar que você bordou tudo à mão com o maior carinho do mundo!",
    voceSabia: "Na famosa Tapeçaria de Bayeux do século XI (que tem 70 metros de comprimento e narra a conquista normanda da Inglaterra), mais de 80% de todas as inscrições e contornos foram bordados à mão usando o clássico ponto de haste!",
    practicalExercise: "Desenhe uma flor com haste longa no seu software. Configure a haste como ponto corrido triplo na versão A e como Ponto de Haste (1,2 mm) na versão B. Borde as duas em um tecido de algodão e compare a nobreza visual da versão B.",
    quickSummary: "Ponto decorativo entrelaçado que simula cordão artesanal (1,0-1,5 mm); ideal para caules botânicos e caligrafia.",
    relatedTerms: ["Ponto Triplo (Bean Stitch)", "Ponto Corrido (Running Stitch)", "Ponto Cheio (Satim)", "Monogramas e Letras Clássicas"],
    tags: ["o-045", "ponto de haste", "stem stitch", "contornos finos", "botanico", "artesanal", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Specialty Outline Stitches: Stem, Backstitch & Motif Runs. Wilcom Manual, 2021.",
      "SWIFT, G. The Art of Botanical Embroidery: Historical Stitches Digitized. London, 2020."
    ]
  },
  {
    id: "orla-de-tecido-borda-urdidura-alinhamento",
    code: "O-046",
    letter: "O",
    term: "Orla de Tecido e Alinhamento do Fio de Urdidura (Selvedge & Grainline Alignment)",
    pronunciation: "or-la de te-ci-do e a-li-nha-men-to do fio de ur-di-du-ra",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Tipos de Tecidos",
    summary: "Borda lateral de acabamento de fábrica do rolo de tecido (ourela) e o alinhamento rigoroso da trama e da urdidura com os eixos X e Y do bastidor para impedir deformações em losango (viés).",
    origin: "Do latim 'ora' (borda / margem), princípio fundamental da tecelagem tradicional desde a antiguidade e da geometria de corte de alfaiataria.",
    definition: "A Orla do Tecido (ou Ourela / Selvedge) é a extremidade lateral densamente tecida que corre paralela ao longo de todo o comprimento do rolo de tecido, correspondendo à direção dos fios longitudinais da Urdidura (Grainline). No bordado computadorizado, o alinhamento rigoroso dos fios de urdidura (sentido do comprimento) e de trama (sentido da largura) com as marcas de centro e eixos ortogonais (X e Y) do bastidor é um princípio mandatório. Montar um tecido enviesado (com a trama inclinada a 45° em relação ao bastidor) faz com que a tensão dos pontos deforme a peça em formato de losango assimétrico irrecuperável.",
    howItWorks: [
      "1. O operador identifica a ourela/orla lateral do tecido ou puxa um fio de trama para achar o fio reto.",
      "2. Marca o centro da peça com giz de alfaiate alinhando uma régua perfeitamente paralela à urdidura.",
      "3. Posiciona o tecido no bastidor fazendo a linha de giz coincidir exatamente com os entalhes de centro dos aros plásticos.",
      "4. Pressiona o aro externo garantindo que nenhum dos quatro cantos puxe o tecido em diagonal (ao viés).",
      "5. A estrutura ortogonal dos fios suporta de forma equilibrada as forças de repuxo dos pontos nos eixos X e Y.",
      "6. O bordado é executado com simetria dimensional impecável.",
      "7. Ao sair do bastidor, o tecido mantém o esquadro perfeito de 90° sem torções."
    ],
    beginnerExplanation: "É a beiradinha de fábrica do tecido (aquela parte mais grossinha que não desfia nas laterais do rolo)! O segredo mais importante de todos é prender o pano no bastidor sempre retinho acompanhando esses fios do tecido, nunca torto ou puxado de lado em diagonal! Se você prender o pano meio de lado (no viés), quando tirar do bastidor o bordado vai ficar todo torto parecendo um losango!",
    applications: [
      "Alinhamento de guardanapos, toalhas de mesa e jogos americanos no esquadro perfeito",
      "Montagem de camisas de tecido plano (tricoline, linho, sarja) no bastidor",
      "Prevenção de torção em barras de calças jeans e pernas de moletons",
      "Corte e montagem de tecidos de aplique respeitando o sentido do fio reto"
    ],
    technicalDetails: "Os tecidos planos possuem elasticidade quase nula no sentido da urdidura (0°), elasticidade baixa a média na trama (90°), mas altíssima deformação elástica no viés (45°). Se o bastidor for montado no viés, o tecido sofre distorção por cisalhamento (Shear Deformation) sob tensões de pontos tão baixas quanto 0,5 N, resultando em desalinhamento de contornos de até 2,0 mm.",
    commonErrors: [
      "❌ Puxar um dos cantos do tecido com mais força na hora de fechar o bastidor, enviesando a trama",
      "❌ Cortar retalhos de tecido de aplique no viés (em diagonal), fazendo o aplique esticar e deformar na costura",
      "❌ Ignorar as marcações de gabarito e cruzes de alinhamento dos aros do bastidor",
      "❌ Borda toalhas de banho com a barra diagonalmente inclinada no bastidor"
    ],
    troubleshootingTips: [
      "Se o bordado quadrado sair parecendo um losango inclinado: O tecido foi montado enviesado; alinhe a trama com o aro do bastidor usando uma régua",
      "Se o tecido torcer na primeira lavagem: O corte da peça ou a montagem no bastidor desrespeitou o fio reto da urdidura",
      "Para achar o fio reto em tecidos de algodão ou linho: Dê um pique na borda com a tesoura e rasgue reto com as mãos (o rasgo segue exatamente o fio da trama)"
    ],
    dicaArtrelados: "O 'truque do rasgo' Artrelados para jogos americanos e toalhas de linho: dê um cortezinho na beirada e rasgue o tecido com as duas mãos! O tecido rasga exatamente sobre o fio reto da trama, te dando uma linha guia 100% perfeita para alinhar no bastidor!",
    voceSabia: "Na alta costura francesa, cortar ou bordar um tecido fora do fio reto da urdidura sem intenção deliberada é considerado um dos erros mais graves de ateliê desde os tempos de Christian Dior nos anos 1940!",
    practicalExercise: "Pegue um pedaço de tricoline de 20x20 cm. Dobre ao meio e veja como a borda da ourela corre retinha. Monte no bastidor alinhando os fios com as quatro marcas do aro e sinta a estabilidade da montagem.",
    quickSummary: "Alinhamento dos fios do tecido (trama e urdidura) com os eixos do bastidor para evitar deformações em losango (viés).",
    relatedTerms: ["Alinhamento e Centralização no Bastidor", "Bastidor de Bordar", "Compensação de Encolhimento", "Estação de Montagem (Hooping Station)"],
    tags: ["o-046", "orla de tecido", "ourela", "fio reto", "urdidura", "vies", "alinhamento", "artrelados"],
    bibliographicReferences: [
      "TEXTILE INSTITUTE. Fabric Structures, Grainlines & Dimensional Stability in Garment Manufacture. Manchester, 2021.",
      "ALBERS, A. On Weaving: Structural Properties of Warp and Weft. Wesleyan University Press, 2020."
    ]
  },
  {
    id: "oleo-protetor-laminas-de-corte-trimmer",
    code: "O-047",
    letter: "O",
    term: "Óleo Protetor e Anticorrosivo para Lâminas de Corte (Trimmer Blade Anti-Rust Oil)",
    pronunciation: "ó-leo pro-te-tor e an-ti-cor-ro-si-vo pa-ra lâ-mi-nas",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Manutenção & Mecânica",
    summary: "Fluido lubrificante e desaguante micro-protetor aplicado no conjunto de navalha móvel e faca fixa do cortador automático de linha (Trimmer) para evitar oxidação por umidade e atrito a seco.",
    origin: "Desenvolvido na indústria de cutelaria cirúrgica e ferramentas de precisão mecânica para proteção de fios de corte temperados de alta dureza.",
    definition: "O Óleo Protetor de Navalhas (Trimmer Mechanism & Blade Conditioning Fluid) é um lubrificante sintético leve de película ultrafina formulado especificamente para o mecanismo de corte automático de linha sob a chapa de agulha. As lâminas móveis e fixas do cortador (Moving & Fixed Knives) operam em regime de alto impacto por cisalhamento mecânico. A umidade do ar, o ácido residual de colas spray e o atrito a seco aceleram o desgaste do fio da navalha e provocam micro-oxidação que trava o mecanismo de corte. A aplicação periódica desse óleo mantém o gume afiado, protege contra corrosão e garante cortes limpos sem mastigar a linha.",
    howItWorks: [
      "1. O operador retira a chapa de agulha e limpa os resíduos de fiapos e poeira do compartimento de corte com pincel.",
      "2. Aplica 1 gota de óleo protetor no ponto de pivô e na face de contato entre a navalha móvel e a faca fixa.",
      "3. O óleo se espalha por capilaridade formando uma microcamada hidrofóbica repelente de umidade.",
      "4. Ao acionar o cortador, o coeficiente de atrito entre os aços temperados cai em 80%.",
      "5. A navalha desliza suavemente sobre a faca fixa sem gerar aquecimento nem microsulcos.",
      "6. A linha superior e da bobina são seccionadas instantaneamente com corte limpo e reto.",
      "7. Prolonga a vida útil do conjunto de lâminas para mais de 500.000 cortes."
    ],
    beginnerExplanation: "É uma gotinha de óleo protetor que a gente passa na faquinha escondida que corta a linha embaixo da chapa da máquina! Quando a faquinha trabalha a seco ou enferruja com a umidade do ar, ela perde o corte e começa a 'mascar' e arrebentar a linha em vez de cortar lisinho. Com essa gotinha de cuidado, a faquinha dura anos cortando como se fosse nova!",
    applications: [
      "Manutenção preventiva semanal ou quinzenal do conjunto de corte automático (Trimmer)",
      "Proteção de facas industriais em ateliês situados em cidades litorâneas com maresia",
      "Eliminação de falhas de corte onde a linha é mastigada sem ser cortada",
      "Prevenção de travamento do solenóide de acionamento do cortador de linha"
    ],
    technicalDetails: "O óleo para navalhas de corte deve possuir propriedades desaguantes (Water Displacing) e viscosidade extremamente baixa (ISO VG 5 a 10) para não reter pó de linha em suspensão. Óleos graxos ou viscosos acumulam fiapos que formam uma pasta abrasiva, acelerando a perda do fio de corte das lâminas de aço rápido HSS.",
    commonErrors: [
      "❌ Colocar graxa pesada no mecanismo da faca de corte (acumula fiapos e trava o sistema em 24 horas)",
      "❌ Deixar a faca trabalhar a seco por meses em ambientes úmidos até enferrujar e perder o corte",
      "❌ Raspar as facas com estilete ou chaves de fenda tentando 'limpar' resíduos duros",
      "❌ Aplicar óleo em excesso que espirra na linha da bobina nas primeiras peças"
    ],
    troubleshootingTips: [
      "Se a máquina não cortar a linha e deixar a linha mastigada: Limpe a navalha com pincel e aplique 1 gota de óleo protetor no ponto de contato das facas",
      "Se a faca fizer um barulho metálico estalado ao cortar: Lubrifique o pivô móvel e verifique a pressão da mola de ajuste da faca fixa",
      "Se o cortador travar aberto impedindo o bordado: Desligue a máquina, recolha a navalha manualmente com cuidado e aplique óleo lubrificante no trilho"
    ],
    dicaArtrelados: "Uma vez por mês, tire a chapinha de agulha da sua máquina, limpe todo o pó de linha com o pincel e pingue UMA única gotinha de óleo na faquinha do cortador. Ela vai cortar as linhas sempre com um estalo perfeito e sem nunca mastigar nada!",
    voceSabia: "As lâminas de corte automático em máquinas industriais japonesas são afiadas com rebolos diamantados com tolerância de corte de 0,001 mm, capazes de cortar um fio de cabelo humano ao meio longitudinalmente!",
    practicalExercise: "Retire a chapa de agulha da sua máquina e localize a faquinha móvel (uma pequena lâmina de metal brilhante em formato de gancho). Observe como ela se move para laçar e cortar a linha. Limpe com o pincel e aplique uma microgota de óleo.",
    quickSummary: "Lubrificante protetor para navalhas do cortador automático; previne oxidação e desgaste do fio de corte.",
    relatedTerms: ["Corte de Linha (Trim)", "Lançadeira Rotativa", "Manutenção Preventiva", "Óleo Lubrificante Mineral Branco"],
    tags: ["o-047", "oleo protetor", "trimmer", "laminas de corte", "navalha", "manutencao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Automatic Trimmer Mechanism Maintenance, Lubrication & Knife Replacement. Tokyo, 2021.",
      "HIROSE KNIVES. Precision Blade Care & Anti-Corrosion Protocols in Sewing Machinery. Osaka, 2020."
    ]
  },
  {
    id: "offset-angular-tatami-decorativo",
    code: "O-048",
    letter: "O",
    term: "Offset Angular em Ponto Tatami Decorativo (Pattern Angle Deviation)",
    pronunciation: "óf-sét an-gu-lar em pon-to ta-ta-mi de-co-ra-ti-vo",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Programação de Bordado",
    summary: "Variação angular matemática aplicada às linhas de preenchimento tatami para criar efeitos ópticos de refração de luz, profundidade holográfica e separação de planos sem mudar a cor da linha.",
    origin: "Originário da técnica de gravura em metal (guilhochê / intaglio) do século XVIII e das pesquisas de ilusão de óptica (Op Art) aplicadas ao bordado digital nos anos 1990.",
    definition: "O Offset Angular em Tatami (ou Desvio Angular de Preenchimento / Optical Pattern Angle Shifting) é a técnica sofisticada de digitalização onde dois ou mais blocos contíguos de preenchimento que utilizam exatamente o mesmo cone de linha são programados com ângulos de ponto deliberadamente contrastantes (por exemplo, Bloco A a 15°, Bloco B a 75° e Bloco C a 135°). Como os filamentos de poliéster possuem seção transversal trilobal reflexiva, a variação angular de 60° a 90° faz com que a luz ambiente seja refletida em direções opostas, criando a ilusão visual de tons de cor diferentes (claro e escuro), relevo escultórico tridimensional e movimento holográfico sem a necessidade de trocar de agulha ou carretel.",
    howItWorks: [
      "1. O digitalizador desenha um desenho monocromático (ex: um leão estilizado, uma mandala ou um logotipo de cor única).",
      "2. Divide o desenho em múltiplos segmentos geométricos adjacentes.",
      "3. Configura todos os segmentos com a mesma cor de linha (ex: azul marinho ou dourado).",
      "4. Aplica ângulos de ponto com diferença de 45° a 90° entre os segmentos vizinhos.",
      "5. A máquina borda todo o desenho continuamente sem nenhuma parada para troca de cor.",
      "6. Conforme o observador anda ou a peça se move sob a luz, as facetas de linha brilham alternadamente.",
      "7. O resultado é um bordado de altíssimo requinte visual com economia total de tempo de máquina."
    ],
    beginnerExplanation: "É um truque visual mágico dos mestres do bordado! Você borda o desenho inteirinho usando uma única cor de linha (como azul ou dourado), mas inclina os pontinhos de cada pedaço para um lado diferente: um pedaço deitadinho, outro em pé e outro em diagonal. Quando a luz bate na linha brilhante, parece que você usou vários tons diferentes de azul e que o desenho é 3D!",
    applications: [
      "Bordados monocromáticos de luxo em tons de preto sobre preto (Black-on-Black) e dourado",
      "Brasões, mandalas, animais geométricos e logotipos corporativos elegantes",
      "Jaquetas esportivas, bonés de grife e alfaiataria masculina contemporânea",
      "Redução drástica do tempo de bordado mantendo alto valor estético agregado"
    ],
    technicalDetails: "A fibra de poliéster trilobal possui três prismas reflexivos contínuos ao longo do filamento. O contraste óptico máximo ocorre quando o ângulo de incidência da luz e o ângulo do ponto formam uma defasagem de 90° (Efeito de Refração Cruzada). As zonas de encontro entre blocos com ângulos contrastantes devem ter overlap de 0,4 mm para evitar frestas de tecido.",
    commonErrors: [
      "❌ Borda todos os blocos com o mesmo ângulo exato (ex: todos a 45°), fazendo o desenho virar uma mancha plana sem separação de formas",
      "❌ Usar linha de algodão 100% fosca para esse efeito (o efeito depende do brilho reflexivo de linhas de poliéster ou viscose)",
      "❌ Não dar sobreposição entre os blocos com ângulos diferentes, gerando linhas de corte aparentes",
      "❌ Usar ângulos com variação muito pequena (menos de 15°), onde a diferença de reflexo é quase imperceptível"
    ],
    troubleshootingTips: [
      "Se o desenho monocromático parecer um borrão sem divisão de partes: Aumente o contraste dos ângulos de ponto entre as partes para pelo menos 60°",
      "Se as divisões entre os pedaços abrirem frestas: Aplique overlap de 0,5 mm nas bordas de encontro de cada bloco",
      "Se quiser aumentar o efeito de brilho: Utilize linha de poliéster trilobal de alto brilho ou linha de seda/viscose"
    ],
    dicaArtrelados: "Para fazer bordados chiques estilo 'tom sobre tom' (como bordado preto em jaqueta preta): use a mesma linha preta brilhante para tudo, mas mude os ângulos dos pontos em cada parte do desenho. O bordado brilha no sol com um luxo inacreditável!",
    voceSabia: "A técnica de variação angular de fios brilhantes é a mesma utilizada pelas casas da moeda da Suíça e da Inglaterra para gravar elementos holográficos de segurança anticópia nas notas de dinheiro de papel!",
    practicalExercise: "Crie um cubo 3D no seu software dividido em três faces (topo, esquerda e direita). Pinte as três faces com a mesma cor azul. Configure o topo com ângulo de 0°, a face esquerda com 60° e a face direita com 120°. Borde com linha de poliéster brilhante e veja o cubo saltar para fora do tecido.",
    quickSummary: "Variação matemática de ângulos em tatami de cor única para criar efeitos de luz, relevo 3D e tons falsos.",
    relatedTerms: ["Ponto Tatami", "Ângulo de Ponto", "Polyester Trilobal", "Overlap / Sobreposição de Objetos"],
    tags: ["o-048", "offset angular", "tatami decorativo", "tom sobre tom", "brilho", "refracao", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Creative Stitch Effects, Angle Manipulation & Monochromatic Shading. Wilcom White Papers, 2021.",
      "GIBBON, P. Optical Textures & Light Reflection Mechanics in Machine Embroidery. Textile Press, 2020."
    ]
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_H_PART6: Verbete[] = [
  {
    id: "h-031-hoop-spacing-margem-de-seguranca-perimetral",
    code: "H-031",
    term: "Hoop Spacing & Margem de Segurança Perimetral do Bastidor (Hoop Margin & Safety Clearance Boundary)",
    letter: "H",
    level: "Fundamental 🟢",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês hoop (bastidor), spacing (espaçamento) e boundary (fronteira de segurança). Conceito fundamental de tolerância mecânica e prevenção de colisões.",
    summary: "Distância mínima de segurança (mínimo de 10mm a 15mm) que deve ser mantida entre o limite do bordado e o aro plástico do bastidor.",
    definition: "O Espaçamento de Segurança do Bastidor e Margem Perimetral (Hoop Clearance Spacing / Embroidery Frame Safety Buffer & Perimeter Margin) é a distância física livre obrigatória mantida entre a extremidade dos pontos mais externos de um bordado e a parede plástica interna do aro do bastidor. Durante a costura, o calcador da máquina (Presser Foot) e a própria barra de agulha movem-se dinamicamente com folga lateral de 6mm a 10mm em torno da agulha. Se o bordado for digitalizado ou posicionado colado na borda física do bastidor, o calcador colidirá contra a borda do aro a 800 PPM, quebrando a agulha, danificando o calcador e desalinhando o motor de passo do pantógrafo.",
    technicalDetails: "Diretrizes de tolerância mecânica: Margem mínima em bastidores planos padrão: 12mm a 15mm em toda a volta; margem em bastidores magnéticos: 15mm a 20mm; margem em bastidores de boné (Cap Frame): 15mm da borda do aro e 10mm da costura da aba.",
    howItWorks: [
      "1. A bordadeira abre a matriz no software de bordado com dimensões de 98x98mm.",
      "2. Pretende bordar no bastidor 10x10cm (100x100mm de área total).",
      "3. Percebe que restará apenas 1mm de folga para a borda plástica do aro.",
      "4. Lembra-se da regra de segurança: o calcador da máquina mede cerca de 8mm de largura total.",
      "5. Reduz a escala da matriz no software para 85x85mm (ou escolhe o bastidor maior de 13x18cm).",
      "6. Ao enviar para a máquina, executa o traçado perimétrico (Trace / Perimeter Check).",
      "7. A agulha e o calcador circulam toda a área com folga confortável de mais de 10mm de distância do aro plástico.",
      "8. O bordado é executado com 100% de segurança, sem risco de batida ou quebra de agulha."
    ],
    beginnerExplanation: "É a 'distância de segurança' que a gente tem que deixar sobrando entre o desenho do bordado e a bordinha de plástico do bastidor! Sabe o pezinho da máquina (o calcador)? Ele é gordinho e balança para cima e para baixo. Se você colocar um desenho muito colado na beirada do bastidor, o pezinho bate com tudo no plástico duro e quebra a agulha na hora! Por isso, sempre deixe pelo menos um dedo de folga (1cm a 1,5cm) em volta de todo o desenho!",
    applications: [
      "Dimensionamento correto de matrizes em relação ao bastidor disponível no ateliê",
      "Configuração de limites de área segura nos softwares de digitalização (Wilcom, Embird, Pe-Design)",
      "Traçado perimétrico (Trace Boundary) antes de apertar o botão de início na máquina",
      "Prevenção de quebra de calcadores e empenamento de barras de agulha"
    ],
    commonErrors: [
      "Tentar bordar um desenho de 10x10cm exato em um bastidor de 10x10cm sem deixar margem de segurança",
      "Não fazer o teste de traçado (Trace) na máquina antes de começar a bordar",
      "Fixar o tecido torto no bastidor, fazendo um dos lados encostar na borda plástica do aro"
    ],
    troubleshootingTips: [
      "Adote a 'Regra dos 10 Milímetros': o seu desenho deve ter SEMPRE no mínimo 10mm a menos do que o tamanho máximo do bastidor",
      "Se um desenho de 10cm não couber no bastidor 10x10 com folga, passe para o bastidor 13x18cm sem hesitar",
      "Use SEMPRE a função 'Trace' (o desenho de moldura na tela da máquina) para ver o calcador passear pela área sem bater",
      "Em bastidores magnéticos, mantenha margens ainda maiores (15mm) para evitar que o calcador bata nos ímãs superiores"
    ],
    dicaArtrelados: "Nunca arrisque a saúde mecânica da sua máquina para economizar entretela! Se o desenho ficou apertado no bastidor pequeno, mude para o bastidor maior: a segurança do seu equipamento vale muito mais do que um retalho de entretela!",
    voceSabia: "Em física mecânica, uma colisão a 1.000 PPM entre o calcador de aço e a borda de plástico do bastidor gera um torque de desaceleração instantâneo equivalente a um impacto de mais de 35 kgf no eixo do motor de passo do pantógrafo!",
    practicalExercise: "Coloque um bastidor na máquina sem tecido: acione a função 'Trace' e observe a distância livre entre o pezinho calcador e a borda plástica em todos os 4 cantos!",
    quickSummary: "Margem de segurança mínima (10mm a 15mm) entre o bordado e o aro para evitar colisões do calcador.",
    relatedTerms: ["Hoop Sensor & Sensor do Bastidor", "Garra do Bastidor", "Trace / Traçado Perimétrico", "Grip do Bastidor"],
    tags: ["h-031", "hoop spacing", "margem de seguranca", "calcador", "prevencao", "colisao", "bastidor", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY MACHINE SAFETY & CLEARANCE MANUAL. Frame Boundaries and Foot Clearance Standards. Osaka, 2023.",
      "COMMERCIAL APPAREL EMBROIDERY BEST PRACTICES. Hoop Spacing and Trace Verification. Chicago, 2022.",
      "ARTRELADOS. A Regra de Ouro do Bastidor: Como as Margens de Segurança Evitam Quebras de Agulha e Salvam sua Máquina. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-032-haste-conica-de-apoio-de-cones-grandes",
    code: "H-032",
    term: "Haste Cônica de Apoio de Cones Grandes (Spool Cone Adapter & Base Centering Stand)",
    letter: "H",
    level: "Fundamental 🟢",
    category: "Acessórios & Ferramentas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do germânico hast (haste) e do grego kōnos (cone geométrico). Acessório de adaptação ergonômica de carretéis industriais para máquinas domésticas.",
    summary: "Base de apoio plástica cônica e suporte externo vertical para usar cones industriais gigantes de 4.000m em máquinas de bordar domésticas.",
    definition: "O Adaptador de Haste Cônica e Suporte Externo de Cones Grandes (Spool Cone Adapter & Thread Base Stabilizer / Porta-Fio Cônico Universal) é um dispositivo mecânico auxiliar composto por uma base cônica de borracha ou plástico usinado que se encaixa no interior oco de cones industriais de linha de 4.000m a 5.000m, ou por uma torre de chão/mesa independente com haste aérea vertical. Permite que máquinas de bordar domésticas (que vêm de fábrica preparadas apenas para pequenos carretéis deitados de 500m) utilizem cones econômicos industriais em pé com saída de linha vertical livre, impedindo que o cone tombe, vibre ou prenda a linha sob o carretel.",
    technicalDetails: "Componentes e compatibilidade: Base cônica escalonada para cones de 25mm a 40mm de diâmetro interno; haste telescópica em aço inox com altura regulável de até 40cm; ilhós cerâmico no topo; base pesada de ferro fundido anti-tombamento.",
    howItWorks: [
      "1. A bordadeira compra cones industriais grandes de linha de 4.000 metros para economizar no ateliê.",
      "2. Tenta colocar o cone no pino deitado da sua máquina doméstica, mas o cone não cabe e cai.",
      "3. Posiciona o Suporte de Cones Grandes externo na bancada, logo atrás da máquina de bordar.",
      "4. Encaixa o cone na base cônica estabilizadora: o cone fica firme em pé sem oscilar.",
      "5. Estica a haste aérea telescópica até cerca de 35cm de altura.",
      "6. Passa o fio pelo ilhós aéreo do topo do suporte e segue para a passagem normal de linha da máquina.",
      "7. O fio sobe suavemente pelo topo do cone em espirais perfeitas sem atrito.",
      "8. A máquina borda perfeitamente por semanas com o mesmo cone grande sem nenhuma quebra de linha."
    ],
    beginnerExplanation: "É aquele suporte externo com haste comprida que a gente coloca atrás da máquina para conseguir usar aqueles cones grandões de linha de fábrica (cones de 4.000 metros)! Como os carretéis grandes não cabem deitados na maquininha doméstica, você coloca o cone em pé nesse suporte: a linha sobe retinha pelo ar e entra na máquina macia, economizando muito dinheiro com linhas!",
    applications: [
      "Uso de cones industriais de 4.000m e 5.000m em máquinas de bordar domésticas de 1 agulha (Brother, Janome, Singer)",
      "Estabilização de cones de linhas metálicas e fios elásticos que desenrolam com facilidade",
      "Redução drástica do custo por metro de linha de bordado no ateliê",
      "Eliminação de tombamentos e vibrações de carretéis na bancada durante altas velocidades"
    ],
    commonErrors: [
      "Colocar o cone grande em pé na mesa sem suporte aéreo (o fio sai pela lateral do cone, enrosca na base plástica e quebra a agulha)",
      "Deixar o suporte externo posicionado muito longe ou muito baixo em relação à máquina",
      "Usar suportes de plástico muito leves que tombam quando a máquina acelera"
    ],
    troubleshootingTips: [
      "Posicione o suporte externo a cerca de 10cm a 15cm atrás da máquina de bordar, ligeiramente alinhado com o primeiro passa-fio",
      "Coloque um peso de metal ou fita dupla-face na base do suporte para garantir que ele não se mova com a vibração da bancada",
      "Coloque uma redinha de linha (Thread Net) no cone grande se a linha for muito escorregadia ou metálica",
      "Mantenha a haste telescópica sempre esticada na altura máxima para um desbobinamento suave"
    ],
    dicaArtrelados: "O suporte externo para cones grandes é o acessório mais barato e que mais dá retorno no ateliê! Um cone grande de 4.000m custa quase o mesmo preço de dois carretéis pequenos de 500m: você ganha 4 vezes mais linha pelo mesmo valor!",
    voceSabia: "A padronização dos cones de linha em formato cônico de 4.000 metros (King Spool) foi introduzida na Revolução Industrial têxtil da Inglaterra para permitir que as tecelagens automáticas trabalhassem sem parar para trocas de carretel!",
    practicalExercise: "Coloque um cone grande no suporte externo: puxe a linha com a mão e observe como ela se desenrola livre pelo topo sem nenhum esforço ou atrito!",
    quickSummary: "Suporte e base adaptadora para uso econômico de cones industriais grandes em máquinas domésticas.",
    relatedTerms: ["Hastes Guias Antivibração da Torre", "Grelhador de Fios / Suporte Pré-Tensor", "Gasto de Linha & Cálculo de Consumo", "Guia-Fio & Passa-Fio"],
    tags: ["h-032", "haste conica", "porta-cone", "cone grande", "suporte de linha", "economia", "acessorios", "artrelados"],
    bibliographicReferences: [
      "DOMESTIC EMBROIDERY ACCESSORY STANDARDS. External Spool Stand Dynamics. Tokyo, 2023.",
      "TEXTILE SPOOL UNWINDING MECHANICS. King Spool Cone Adapters & Tension Balance. London, 2022.",
      "ARTRELADOS. Economia Inteligente no Ateliê: Como Usar Cones Industriais em Máquinas Domésticas com Perfeição. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-033-haste-fixadora-de-agulha-parafuso-de-bloqueio",
    code: "H-033",
    term: "Haste Fixadora de Agulha & Parafuso de Bloqueio (Needle Clamp Body & Locking Screw Assembly)",
    letter: "H",
    level: "Fundamental 🟢",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do germânico hast (haste) e do latim fixare (prender firmemente). Peça mecânica terminal da barra de agulha responsável pelo travamento axial da agulha.",
    summary: "Bloco de fixação usinado na ponta da barra de agulha com parafuso de aperto que trava a agulha na profundidade e orientação corretas.",
    definition: "O Bloco Fixador de Agulha e Parafuso de Bloqueio (Needle Clamp Assembly / Needle Clamp Body & Set Screw / Grampo de Trava de Agulha) é a peça mecânica usinada em aço temperado ou liga leve de precisão montada na extremidade inferior de cada barra de agulha da máquina de bordar. Possui uma cavidade cilíndrica vertical com batente de profundidade (Needle Stopper Pin) e um canal usinado para o parafuso de aperto manual ou de fenda. Sua função mecânica é segurar a agulha com firmeza absoluta contra forças axiais de impacto de até 50 kgf, garantindo que o cabo da agulha encoste no topo do batente e mantenha a cava posterior (Scarf) orientada no ângulo exato em direção à lançadeira.",
    technicalDetails: "Especificações de engenharia: Alojamento calibrado para cabos cilíndricos DBxK5 (2.0mm de diâmetro) ou cabos com chanfro plano 130/705 H-E; parafuso de trava de rosca métrica fina M3 ou M3.5 com fenda cruzada ou cabeça serrilhada manual; torque de aperto recomendado: 0,4 a 0,6 N·m.",
    howItWorks: [
      "1. A operadora precisa trocar a agulha que foi gasta após 8 horas de bordado contínuo.",
      "2. Com uma chave de fenda pequena específica ou com os dedos, afrouxa o parafuso de aperto girando no sentido anti-horário.",
      "3. A agulha antiga desliza suavemente para baixo e é descartada.",
      "4. Insere a nova agulha no alojamento do bloco da haste fixadora.",
      "5. Empurra a agulha para cima com firmeza até sentir que o topo do cabo bateu no pino limitador de profundidade (Needle Stop).",
      "6. Em agulhas industriais sem chanfro (DBxK5), alinha a ranhura longa frontal para frente (0°) e a cava posterior exatamente voltada para trás (180°).",
      "7. Aperta o parafuso de fixação com firmeza moderada (sem forçar além do limite do metal).",
      "8. A nova agulha está travada na altura e no ângulo exatos para a captura perfeita da laçada."
    ],
    beginnerExplanation: "É aquela pecinha de metal com um parafusinho que fica bem na ponta da barra onde a gente prende a agulha da máquina! Quando você vai trocar de agulha, você solta o parafusinho, tira a agulha velha, coloca a nova empurrando bem até o fundo lá em cima e aperta o parafuso de novo. Ela deixa a agulha presa firme e retinha para não cair durante o bordado!",
    applications: [
      "Fixação e troca rápida de agulhas em máquinas industriais multicabeçotes e máquinas domésticas",
      "Garantia da profundidade correta da agulha para formação da laçada de ponto na lançadeira",
      "Alinhamento angular rigoroso da cava e da ranhura de passagem de linha",
      "Prevenção de quebra de agulhas e perda de sincronismo mecânico"
    ],
    commonErrors: [
      "Apertar o parafuso com força brutal usando alicate, espanando a rosca da haste fixadora",
      "Não empurrar a agulha até o batente superior (a agulha fica muito comprida e colide com a lançadeira)",
      "Colocar a agulha com a cava virada para a frente ou de lado (a máquina não pesca a linha e pula todos os pontos)"
    ],
    troubleshootingTips: [
      "Empurre SEMPRE a agulha até o fim de curso superior antes de apertar o parafuso",
      "Use apenas a chave de fenda fornecida pelo fabricante da máquina: nunca use alicates ou ferramentas inadequadas",
      "Se o parafuso começar a ficar duro de girar, aplique uma micro-gota de óleo lubrificante na rosca ou substitua o parafuso por um novo original",
      "Em máquinas industriais, use a ferramenta de alinhamento de agulhas (Needle Angle Guide) para conferir se a agulha está reta a 0°"
    ],
    dicaArtrelados: "A altura da agulha no bloco fixador é milimétrica! Toda vez que trocar a agulha, confira com os dedos se o cabo encostou lá no topo do batente: esse pequeno cuidado evita agulhadas na lançadeira e muitas dores de cabeça!",
    voceSabia: "Em máquinas industriais de 15 agulhas, existem 15 blocos fixadores idênticos, cada um usinado com tolerância dimensional de menos de 0,01mm para que todas as cores bordem com a mesma profundidade exata de penetração!",
    practicalExercise: "Solte a agulha da sua máquina: olhe o alojamento interno do bloco com uma lanterna para ver o batente superior e treine a colocação empurrando até o topo antes de apertar!",
    quickSummary: "Bloco usinado com parafuso na ponta da barra que trava a agulha na altura e alinhamento corretos.",
    relatedTerms: ["Haste da Barra de Agulhas", "Agulha de Bordado", "Hook Timing", "Gabarito de Medição de Folga de Agulha"],
    tags: ["h-033", "haste fixadora", "needle clamp", "parafuso de agulha", "barra de agulha", "mecanica", "troca de agulha", "artrelados"],
    bibliographicReferences: [
      "TAJIMA NEEDLE BAR & CLAMP ASSEMBLY MANUAL. Precision Clamp Machining & Screw Torque Specs. Nagoya, 2023.",
      "ORGAN NEEDLES TECHNICAL GUIDE. Shank Dimensions, Stopper Pin Alignment and Clamping. Tokyo, 2022.",
      "ARTRELADOS. Manutenção Básica no Cabeçote: Como Cuidar do Bloco Fixador de Agulhas e Evitar Espanamento de Roscas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-034-haste-articulada-do-cortador-automatico-de-fio",
    code: "H-034",
    term: "Haste Articulada do Cortador Automático de Fio (Trimmer Knife Articulated Drive Arm)",
    letter: "H",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do germânico hast (haste) e do latim articulatus (composto por juntas móveis). Mecanismo cinemático de acionamento do corte de fio sob a chapa.",
    summary: "Braço mecânico articulado impulsionado por solenoide sob a chapa de agulha que movimenta a faca móvel para cortar a linha no final de cada objeto.",
    definition: "A Haste Articulada de Acionamento do Cortador Automático (Automatic Thread Trimmer Linkage Arm / Solenoid-Driven Articulated Knife Lever / Braço do Mecanismo de Trim) é uma biela mecânica articulada de precisão usinada em aço temperado localizada sob a chapa de agulha e acoplada a um solenoide eletromagnético ou servomotor de corte. Ao receber o comando de corte de linha (Trim) da matriz, o solenoide energiza-se instantaneamente, empurrando a haste articulada em um movimento angular rápido; a haste aciona a faca móvel (Movable Knife), que avança, captura os fios superior e inferior, puxa-os contra a lâmina fixa (Fixed Knife) e efetua o corte limpo, recolhendo-se em menos de 80 milissegundos.",
    technicalDetails: "Especificações de cinemática: Curso de avanço angular: 12mm a 18mm; tempo de acionamento do ciclo: 60ms a 80ms; mola de retorno de tração calibrada em aço mola; articulações com buchas autolubrificantes de bronze sinterizado; folga axial tolerada: máx. 0,05mm.",
    howItWorks: [
      "1. A máquina conclui uma letra em ponto cheio e lê o código de comando 'Trim' na matriz.",
      "2. A placa eletrônica envia um pulso de 24V para o solenoide do mecanismo de corte inferior.",
      "3. O solenoide dispara e puxa o pino principal da haste articulada.",
      "4. A haste transmite o movimento alavancado com força para a faca móvel.",
      "5. A faca móvel avança sob a chapa de agulha, abre o gancho de captura e laça a linha superior e a linha da bobina.",
      "6. A mola de retorno puxa a haste de volta com velocidade.",
      "7. A faca móvel esmaga os fios contra a borda afiada da faca fixa, cortando os dois fios instantaneamente.",
      "8. Uma pequena lâmina retentora (Picker) segura a pontinha da linha da bobina para o próximo início.",
      "9. O pantógrafo se desloca para o próximo objeto sem deixar nenhum fio de salto esticado sobre o tecido."
    ],
    beginnerExplanation: "É um bracinho de metal articulado que fica escondido embaixo da chapinha da máquina! Quando a máquina termina de bordar uma letra e vai para a outra, esse bracinho se mexe num piscar de olhos, empurrando uma faquinha afiada que corta as linhas de cima e de baixo de uma vez só! É graças a esse bracinho que você não precisa ficar cortando ponta de linha na tesoura o tempo todo!",
    applications: [
      "Execução de cortes automáticos rápidos (Trim) entre letras, números e blocos de cor",
      "Redução drástica do tempo de acabamento manual de corte de fios na produção",
      "Manutenção da ponta de linha de bobina no comprimento exato para a próxima laçada",
      "Operação contínua de alta produtividade em máquinas industriais e domésticas modernas"
    ],
    commonErrors: [
      "Acúmulo de pó de entretela e fiapos de linha endurecidos ao redor das articulações da haste, travando o movimento do corte",
      "Solenoide disparar mas a haste não se mover por falta de lubrificação periódica",
      "Mola de retorno solta ou quebrada (a faca móvel fica exposta e a agulha bate nela, quebrando violentamente)"
    ],
    troubleshootingTips: [
      "Faça a limpeza semanal sob a chapa de agulha usando pincel macio e ar comprimido para remover o pó acumulado nas articulações da haste",
      "Aplique 1 micro-gota de óleo de máquina fino ou graxa sintética com PTFE nos pivôs articulados a cada 3 meses",
      "Se a máquina der erro de 'Trimmer Error' ou não cortar a linha, teste o movimento manual da haste articulada com o dedo para sentir se ela desliza livre",
      "Verifique se o parafuso guia de articulação da biela está com o torque correto, sem folga excessiva e sem travar o movimento"
    ],
    dicaArtrelados: "O sistema de corte automático é o coração da agilidade da sua máquina! Mantenha as articulações da haste sempre limpas e lubrificadas: você nunca mais terá que gastar horas cortando fiapinhos na tesoura após o bordado!",
    voceSabia: "O primeiro sistema mecânico de corte automático de linha sob a chapa acionado por haste e solenoide foi desenvolvido no Japão pela Tajima em 1978, reduzindo em 85% a mão de obra de acabamento nas fábricas de vestuário!",
    practicalExercise: "Retire a chapa de agulha com a máquina desligada: localize o braço articulado da faca móvel e mova-o suavemente com o dedo para entender como ele faz a faca avançar e cortar!",
    quickSummary: "Braço mecânico articulado sob a chapa acionado por solenoide que movimenta a faca de corte automático.",
    relatedTerms: ["Gancho da Lançadeira", "Higienização & Assepsia do Cabeçote", "Faca Móvel & Faca Fixa de Corte", "Solenoide de Corte de Linha"],
    tags: ["h-034", "haste articulada", "cortador automatico", "trimmer", "faca movel", "mecanica", "manutencao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY AUTOMATION SERVICE MANUAL. Trimmer Linkage Arms, Solenoid Drivers & Knife Timing. Nagoya, 2023.",
      "INDUSTRIAL SEWING MECHANICS & AUTOMATION. Thread Trimming Linkages & Kinematics. Tokyo, 2022.",
      "ARTRELADOS. Manutenção do Sistema de Corte Automático: Como Cuidar das Hastes e Facas para Cortes Precisos. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-035-head-selection-selecao-individual-de-cabecotes",
    code: "H-035",
    term: "Head Selection & Seleção Individual de Cabeçotes (Multi-Head Individual Head Enable/Disable Selection)",
    letter: "H",
    level: "Avançado 🔴",
    category: "Produção & Produtividade",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês head (cabeçote de bordar) e selection (escolha/seleção operacional). Recurso operacional de controle de máquinas multicabeçotes industriais.",
    summary: "Função no painel de máquinas de 2 a 12 cabeças que permite ativar ou desligar cabeçotes individuais para bordar peças únicas, amostras ou consertos.",
    definition: "A Seleção Individual de Cabeçotes de Bordar (Multi-Head Head Selection Control / Individual Head Enable-Disable Switching) é o comando operacional eletrônico disponível nos painéis de comando de máquinas industriais multicabeçotes (máquinas de 2, 4, 6, 8 e 12 cabeças). Através deste comando, o operador pode ligar ou desligar individualmente qualquer um dos cabeçotes de costura sem interromper a produção dos demais. Permite bordar amostras de prova em um único cabeçote, isolar um cabeçote que esteja temporariamente aguardando manutenção ou consertar uma peça específica de um lote que teve quebra de linha sem precisar rodar a máquina inteira.",
    technicalDetails: "Controle eletrônico: Chaves eletromecânicas individuais por cabeçote com interruptores tipo 'Toggle' ou comando digital na tela touchscreen; solenoide de engate do eixo superior (Head Clutch Solenoid); desacoplamento do movimento de barra de agulha e lançadeira mantendo o pantógrafo ativo sincronizado.",
    howItWorks: [
      "1. A fábrica está rodando um pedido de 200 jaquetas em uma máquina industrial de 6 cabeças.",
      "2. No meio da produção, o operador nota que a jaqueta no cabeçote nº 3 teve uma quebra de linha e faltou bordar uma letra.",
      "3. O operador acessa o painel de comando e seleciona 'Head Selection'.",
      "4. Desativa os cabeçotes 1, 2, 4, 5 e 6, deixando apenas o cabeçote nº 3 ativado.",
      "5. Retrocede o pantógrafo da máquina até o ponto exato da letra que faltou bordar.",
      "6. Aperta 'Start': apenas o cabeçote nº 3 costura e completa a letra que faltava na peça danificada.",
      "7. Concluído o reparo, reativa todos os 6 cabeçotes no painel.",
      "8. A máquina retoma a produção em massa das 6 peças simultaneamente com desperdício zero."
    ],
    beginnerExplanation: "É um botão especial nas máquinas grandes de fábrica (aquelas que têm 4, 6 ou 12 cabeças bordando juntas) que deixa você desligar as cabeças que quiser e deixar só uma trabalhando! Se você precisa fazer só uma amostrinha rápida para mostrar para o cliente ou precisa consertar uma camiseta que ficou com um pedacinho sem bordar, você desliga as outras e usa só aquela cabeça sem estragar as outras roupas!",
    applications: [
      "Produção de amostras de aprovação unitárias em máquinas industriais multicabeçotes sem desperdiçar material",
      "Reparo pontual e conserto de falhas em peças específicas de um lote em andamento",
      "Continuidade da produção quando um dos cabeçotes precisa de troca de peça ou manutenção preventiva",
      "Bordados em peças extragrandes com área expandida (desligando cabeçotes alternados para dobrar o campo do bastidor)"
    ],
    commonErrors: [
      "Esquecer de reativar os cabeçotes desligados após fazer um conserto, iniciando o próximo lote com cabeçotes vazios",
      "Tentar desligar o cabeçote com a máquina em alta rotação (deve-se sempre pausar a máquina antes da comutação)",
      "Desacoplar o cabeçote mecanicamente na alavanca manual sem informar o painel eletrônico"
    ],
    troubleshootingTips: [
      "Confira SEMPRE o status das luzes indicadoras dos cabeçotes (LED verde = ativado / LED vermelho = desativado) antes de iniciar um lote novo",
      "Utilize a seleção individual para fazer testes de tensão de linha em um único cabeçote antes de liberar toda a máquina de 12 cabeças",
      "Em bordados grandes de bandeiras ou colchas, use a função 'Alternate Head' (cabeçotes alternados) para dobrar a largura do bastidor no pantógrafo",
      "Ao finalizar o turno, realize o teste de todos os cabeçotes para garantir que nenhum ficou travado"
    ],
    dicaArtrelados: "A seleção individual de cabeçotes é a ferramenta de ouro para salvar peças que tiveram acidentes na produção! Nunca jogue uma camisa cara fora por causa de uma letra falhada: isole o cabeçote, volte os pontos e conserte a peça em 1 minuto!",
    voceSabia: "As primeiras máquinas multicabeçotes da década de 1960 exigiam que o operador desengatasse manualmente uma embreagem de dentes de ferro em cada cabeçote com uma alavanca pesada, até a invenção dos solenoides de engate digital pela Barudan nos anos 1980!",
    practicalExercise: "Se você opera uma máquina industrial multicabeçote, pause a máquina e teste desativar cabeçotes pelo painel: veja as luzes de status mudarem e faça um teste de movimento!",
    quickSummary: "Recurso eletrônico em máquinas multicabeçotes que ativa ou desativa cabeçotes individuais para amostras e reparos.",
    relatedTerms: ["High-Speed Embroidery", "Hora-Máquina & Cálculo de Custo por Mil Pontos", "Haste do Pantógrafo & Eixo de Transmissão Y", "Grade Cartesiana X/Y"],
    tags: ["h-035", "head selection", "multicabecotes", "cabecote individual", "amostras", "conserto", "producao industrial", "artrelados"],
    bibliographicReferences: [
      "BARUDAN MULTI-HEAD OPERATOR MANUAL. Head Selection, Clutch Solenoids & Alternate Head Framing. Tokyo, 2023.",
      "TAJIMA INDUSTRIAL EMBROIDERY CONTROLLER GUIDE. Electronic Head Switching and Repair Logic. Nagoya, 2022.",
      "ARTRELADOS. Operação Industrial em Máquinas Multicabeçotes: Como Usar a Seleção Individual para Produção Lucrativa. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "h-036-heat-transfer-foil-folha-metalizada-termotransferivel",
    code: "H-036",
    term: "Heat Transfer Foil & Folha Metalizada Termotransferível (Embroidery Heat Foil & Metallic Stamping Foil)",
    letter: "H",
    level: "Avançado 🔴",
    category: "Materiais Especiais & Insumos",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês heat (calor), transfer (transferência) e foil (folha laminada metálica ultrafina). Tecnologia de estampagem a quente combinada com bordados de luxo.",
    summary: "Película metalizada ultrafina aplicada com calor e pressão sobre pontos de bordado para criar um brilho metálico espelhado de altíssimo impacto.",
    definition: "O Foil Termotransferível para Bordados e Película Metalizada a Quente (Embroidery Heat Transfer Foil / Hot Stamping Textile Foil / Laminação Metálica Termofixada) é um filme de poliéster ultrafino (espessura de 12µm a 15µm) revestido com uma microcamada de vapor metálico de alumínio ou ouro e uma camada inferior de resina termoadesiva sensível ao calor. Utilizado para conferir acabamento espelhado de luxo em monogramas, brasões e logotipos bordados. O processo consiste em bordar uma matriz com linha termosselável especial (ou aplicar filme adesivo termoativo sobre o bordado) e prensar a folha de foil a 150°C em prensa térmica: o metal funde-se permanentemente sobre o topo dos pontos cheios, conferindo um reflexo de ouro ou prata polido impossível de ser alcançado por linhas comuns.",
    technicalDetails: "Parâmetros de aplicação térmica: Temperatura da prensa térmica: 145°C a 155°C; tempo de prensagem: 10 a 15 segundos; pressão: média/alta (4 bar); destacamento da película: 100% a frio (Cold Peel); espessura do filme: 12 mícrons.",
    howItWorks: [
      "1. A bordadeira programa a matriz com pontos cheios lisos e densidade ligeiramente aberta (0,45mm).",
      "2. Borda o desenho na peça utilizando uma linha superior específica com resina termoadesiva ou linha de poliéster padrão com filme adesivo de contato.",
      "3. Retira a peça do bastidor e coloca na base da prensa térmica.",
      "4. Corta um pedaço de folha metalizada de Foil (dourado, prateado ou furta-cor) e posiciona com o lado brilhante para cima sobre o bordado.",
      "5. Prensa a 150°C por 12 segundos com pressão média.",
      "6. Retira a peça e aguarda esfriar completamente até atingir a temperatura ambiente (Cold Peel).",
      "7. Puxa a folha de foil pelas pontas com um movimento rápido e contínuo.",
      "8. A camada metálica desprende-se do filme e fica perfeitamente colada apenas no topo dos pontos do bordado.",
      "9. O resultado é um monograma com brilho de ouro líquido polido deslumbrante e toque suave."
    ],
    beginnerExplanation: "É uma folhinha de papel laminado super brilhante (parece papel alumínio colorido de bombom de luxo) que a gente cola em cima do bordado usando a prensa térmica quente! Quando a gente puxa a folhinha depois de fria, todo aquele brilho de ouro ou prata espelhado fica colado em cima das linhas do bordado! Fica com um visual de jóia dourada caríssima que chama a atenção de todo mundo!",
    applications: [
      "Monogramas de luxo em toalhas de casamento, robes de noiva e enxovais de alto padrão",
      "Bordados em peças de moda festa, vestidos de gala, jaquetas de couro e streetwear",
      "Emblemas e logotipos com efeito de placa de ouro polido em bonés e jaquetas",
      "Bordados comemorativos de premiações, formaturas e brasões heráldicos de luxo"
    ],
    commonErrors: [
      "Puxar a folha de foil ainda quente (o metal se descola em pedaços e estraga o acabamento; deve-se esperar esfriar 100%)",
      "Usar temperatura excessiva na prensa (acima de 170°C), queimando as linhas de poliéster do bordado",
      "Aplicar foil sobre pontos tatami muito abertos e ásperos onde o metal não consegue aderir por igual"
    ],
    troubleshootingTips: [
      "Espere SEMPRE o esfriamento TOTAL da peça (pelo menos 1 a 2 minutos) antes de fazer o puxamento (Cold Peel) do filme de foil",
      "Digitalize a matriz com pontos cheios (satin) bem orientados para que a folha de foil espelhe a luz em uma única direção nobre",
      "Coloque uma folha de papel manteiga ou teflon protetor sobre o foil antes de baixar a prensa térmica",
      "Instrua o cliente a lavar a peça sempre do avesso e em água fria para preservar o brilho espelhado do foil por anos"
    ],
    dicaArtrelados: "O efeito de Foil sobre bordado é o produto de maior valor agregado que você pode oferecer no seu ateliê! Ele custa centavos de folha para produzir e você pode cobrar o dobro ou o triplo em robes de noiva e peças de casamento!",
    voceSabia: "A técnica de laminação a quente de folhas metálicas (Hot Stamping Foil) foi inventada pelo encadernador alemão Ernst Oeser em 1892 para estampar letras de ouro nas capas de couro dos livros reais da nobreza europeia!",
    practicalExercise: "Borde um pequeno coração em ponto cheio na sua máquina: coloque um pedacinho de foil dourado por cima, prense com ferro quente sem vapor por 10 segundos, espere esfriar e puxe para ver o brilho espelhado!",
    quickSummary: "Película metálica ultrafina aplicada com calor sobre o bordado para criar efeito espelhado de ouro e prata.",
    relatedTerms: ["Hot-Melt & Termocolante Permanente", "Híbrido: Bordado com Sublimação e DTF", "Fios Metálicos de Bordado", "Ponto Cheio / Ponto Satin"],
    tags: ["h-036", "heat foil", "folha metalizada", "hot stamping", "luxo", "dourado", "espelhado", "noivas", "artrelados"],
    bibliographicReferences: [
      "HOT FOIL EMBEDDING STANDARDS IN TEXTILES. Metallic Lamination & Cold-Peel Adhesion. London, 2023.",
      "LUXURY APPAREL EMBELLISHMENT. Combining Embroidery Stitches with Hot Stamping Foils. Paris, 2022.",
      "ARTRELADOS. O Toque de Ouro no Bordado: Como Dominar a Aplicação de Foil Metalizado e Criar Peças de Alto Luxo. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

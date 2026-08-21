import { Verbete } from "../types";

export const VERBETES_LETTER_L_PART6: Verbete[] = [
  {
    id: "l-031-loop-laco-de-ponto-folga-linha-looping-error",
    code: "L-031",
    term: "Loop / Laço de Ponto e Folga de Linha (Stitch Loop & Thread Looping Error)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Defeitos e Soluções",
    grammarClass: "Substantivo masculino / Do inglês 'Loop' (argola/laço/alça de linha frouxa).",
    origin: "Termo técnico consagrado na mecânica têxtil para descrever tanto a laçada geométrica essencial formada atrás da agulha quanto a falha de costura caracterizada por laços e argolas de linha frouxa na superfície do bordado.",
    summary: "Defeito caracterizado por alças de linha frouxa projetando-se na superfície do bordado, causado por falta de tensão superior, linha solta ou mola estica-fio travada.",
    definition: "O Loop (ou Looping / Laço de Linha / Argolamento de Ponto) é um dos defeitos visuais mais comuns no bordado computadorizado. Ocorre quando a linha superior não é puxada de volta com a força necessária pela alavanca estica-fio ao final de cada ponto, deixando pequenas argolas, tufos ou laços soltos de linha na frente do tecido. Suas causas principais incluem: passagem de linha incorreta fora dos discos de tensão, tensão superior excessivamente frouxa, resíduos de fiapos travando os pratinhos de tensão, mola estica-fio (Check Spring) desregulada ou quebrada, ou carretel desenrolando livremente sem controle de rotação.",
    technicalDetails: "Diagnóstico e causas de looping de linha:\n• Sintoma Visual: Pequenas alças ou argolas de linha superior salientes sobre o ponto cheio ou tatami;\n• Causa Primária (80% dos casos): A linha superior escapou de dentro dos discos de tensão durante a passagem ou a tensão está zerada;\n• Causa Secundária: Poeira ou pedaços de linha presos entre os discos tensores, impedindo o fechamento da mola;\n• Causa Mecânica: Mola de recuperação (Check Spring) sem ação elástica ou regulada com curso insuficiente para recolher a folga do fio antes do fechamento do ponto;\n• Linhas de Bobina Frouxas: Se os laços aparecerem no avesso da peça em grande volume (efeito 'Ninho de Pássaro'), a causa é tensão superior totalmente solta; se os laços brancos aparecerem na frente, a tensão da bobina está solta ou a superior muito apertada.",
    howItWorks: [
      "1. A máquina inicia o bordado e a agulha desce para formar o ponto.",
      "2. A lançadeira laça a linha superior e expande a volta ao redor da canelinha.",
      "3. A alavanca estica-fio sobe para tracionar o excesso de linha de volta para cima.",
      "4. Se os discos de tensão estiverem abertos ou frouxos, não há resistência friccional no fio.",
      "5. A linha superior não é puxada com firmeza contra o tecido.",
      "6. A sobra de linha permanece acumulada na superfície do tecido na forma de uma argola frouxa (Loop).",
      "7. A cada novo ponto, novos laços se acumulam, arruinando o acabamento e a nitidez do desenho."
    ],
    beginnerExplanation: "O Loop de linha (ou 'argolinha de linha') é quando o bordado fica cheio de laços frouxos e fiapos soltos para cima, parecendo uma toalha desfiada! Isso acontece quase sempre quando a linha de cima não entrou direito no canalzinho de tensão da máquina ou quando a tensão está frouxa demais. A máquina costura, mas não consegue puxar a linha de volta para ficar esticadinha. Basta repassar a linha de cima com o pezinho levantado e apertar um pouquinho a tensão que o bordado volta a ficar lisinho e perfeito!",
    applications: [
      "Controle de qualidade e inspeção visual de peças bordadas no ateliê",
      "Calibração de conjuntos de discos tensores e molas estica-fio em manutenções preventivas",
      "Ajuste fino de tensão para diferentes tipos de fios (metálicos, viscose e poliéster)",
      "Treinamento de novos operadores na passagem correta de linha"
    ],
    commonErrors: [
      "Tentar cortar os loops soltos com a tesoura na frente da peça (a costura inteira vai se desmanchar)",
      "Passar a linha na máquina com o calcador abaixado (os discos de tensão ficam fechados e a linha não entra no canal)",
      "Apertar a tensão da bobina achando que a culpa é dela quando os laços estão na frente"
    ],
    troubleshootingTips: [
      "Levante sempre o pezinho calcador ao passar a linha superior para garantir que ela entre no fundo dos discos de tensão",
      "Passe um fio dental não encerado ou um cartão de visita dobrado entre os discos de tensão para limpar fiapos e poeiras acumuladas",
      "Verifique se o cone de linha não está tombando ou desenrolando linha em excesso descontroladamente"
    ],
    dicaArtrelados: "Apareceram laços soltos no bordado? Teste do puxão rápido: com o pé calcador abaixado, puxe a linha perto da agulha com a mão. Ela deve oferecer uma resistência firme como puxar a fita métrica. Se estiver soltinha e leve como uma pena, a linha não está passando no tensor!",
    voceSabia: "Em máquinas industriais de alta velocidade (1.200 PPM), a alavanca estica-fio sobe e desce 20 vezes por segundo, recolhendo e liberando cerca de 1 metro de linha por minuto em cada agulha com precisão de frações de milímetro!",
    practicalExercise: "Solte totalmente a tensão superior de uma cor na sua máquina e borde 10 pontos: veja os loops se formarem na hora. Agora repasse a linha corretamente, ajuste a tensão e veja os pontos assentarem lisos como seda!",
    quickSummary: "Defeito de pontos com argolas e laços frouxos na superfície, causado por falta de tensão superior ou passagem incorreta de linha.",
    relatedTerms: ["Tensão Superior", "Mola Estica-Fio (Check Spring)", "Ninho de Pássaro", "Alavanca Estica-Fio"],
    tags: ["l-031", "loop", "looping", "laco de linha", "pontos frouxos", "tensao", "defeitos", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS. Troubleshooting Looping, Birdnesting and Thread Tension Faults. Freiburg: Madeira, 2022.",
      "ARTRELADOS. Guia Definitivo de Resolução de Problemas: Tensões, Laçadas, Loops e Regulagens no Bastidor. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-032-lubrificacao-maquina-bordar-oleo-mineral-branco-iso-vg-10",
    code: "L-032",
    term: "Lubrificação da Máquina de Bordar (Machine Lubrication & White Mineral Oil ISO VG 10/22)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Manutenção & Mecânica",
    grammarClass: "Substantivo feminino / Da tribologia e mecânica de precisão industrial.",
    origin: "Prática indispensável de manutenção preventiva desde o surgimento dos teares mecânicos, utilizando óleos minerais brancos de alta pureza e baixa viscosidade que não mancham tecidos e reduzem o atrito cinemático a altas rotações.",
    summary: "Rotina essencial de aplicação de óleo mineral branco de alta pureza nas partes móveis da máquina (especialmente na pista da lançadeira) para evitar aquecimento, desgaste e quebra de componentes.",
    definition: "A Lubrificação da Máquina de Bordar (Maintenance Lubrication / Aplicação de Óleo Têxtil Branco de Precisão ISO VG 10 ou VG 22) é o procedimento técnico mais importante de manutenção preventiva diária e periódica. Máquinas de bordar computadorizadas operam em regimes severos de atrito contínuo, com a lançadeira girando a até 2.000 rotações por minuto e as barras de agulha oscilando centenas de vezes por segundo. O óleo mineral técnico forma uma película hidrodinâmica microscópica entre as peças de aço e bronze, dissipando calor, prevenindo travamento mecânico, reduzindo o ruído e prolongando a vida útil do equipamento em décadas.",
    technicalDetails: "Especificações e pontos críticos de lubrificação:\n• Tipo de Óleo: Exclusivamente Óleo Mineral Branco Têxtil de Alta Pureza (Grau Farmacêutico / ISO VG 10 a VG 22), 100% transparente, sem cheiro e lavável com água morna caso espirre no tecido;\n• Proibição Absoluta: NUNCA usar óleo Singer automotivo escuro, desengripantes tipo WD-40, óleos de cozinha ou óleos minerais pesados de motor;\n• Lubrificação Diária da Lançadeira (Rotary Hook): 1 a 2 gotas aplicadas diretamente na pista circular de atrito (Hook Race) a cada 4 a 8 horas de uso contínuo;\n• Lubrificação Semanal das Barras de Agulha: 1 gota de óleo nos feltros superiores e guias lineares das barras de agulha;\n• Engraxamento Mensal: Graxa branca especial à base de lítio ou PTFE nos eixos e engrenagens cônicas seladas internas.",
    howItWorks: [
      "1. A bordadeira desliga a máquina e remove o bastidor, a chapa de agulha e a canelinha.",
      "2. Limpa toda a poeira e fiapos acumulados com pincel macio ou aspirador portátil.",
      "3. Pinga exatamente 1 a 2 gotas de óleo mineral branco na canaleta da pista da lançadeira (Hook Race).",
      "4. Gira o volante manual 2 ou 3 voltas completas para o óleo se espalhar uniformemente por toda a circunferência de contato.",
      "5. Limpa qualquer excesso de óleo com um pedaço de tecido de algodão limpo.",
      "6. Reinstala a chapa de agulha e executa um pequeno bordado de teste em um retalho para absorver eventuais microgotas.",
      "7. A máquina roda com silêncio aveludado, temperatura fria e máxima precisão."
    ],
    beginnerExplanation: "A lubrificação é a 'água que mata a sede' da sua máquina de bordar! A lançadeira da máquina gira tão rápido que, se faltar óleo, o ferro esfrega no ferro a seco, esquenta como uma frigideira e pode travar e estragar a máquina. Por isso, pingar 1 gotinha de óleo transparente próprio para máquina de costura na pista da lançadeira todo dia de trabalho é a regra de ouro para a sua máquina durar muitos e muitos anos sem dar defeito!",
    applications: [
      "Rotina diária preventiva em ateliês e indústrias de bordado computadorizado",
      "Manutenção de barras de agulhas, cabeçotes e sistemas de facas de corte",
      "Eliminação de ruídos estridentes e aquecimento excessivo na base da máquina",
      "Proteção anticorrosiva de peças de aço polido contra maresia e umidade"
    ],
    commonErrors: [
      "Usar desengripante em spray tipo WD-40 (ele resseca os mecanismos, dissolve as graxas originais e estraga a máquina)",
      "Encharcar a lançadeira com dezenas de gotas de óleo (o excesso de óleo espirra e mancha a roupa do cliente)",
      "Bordar por meses seguidos sem pingar nenhuma gota de óleo (a lançadeira arranha, quebra a ponta e queima o motor)"
    ],
    troubleshootingTips: [
      "Use apenas óleo mineral têxtil 100% transparente; óleos amarelos escuros velhos oxidam e mancham os tecidos",
      "Após lubrificar a lançadeira, sempre borde uma frase ou desenho de teste em um retalho velho para limpar qualquer respingo antes de colocar a peça do cliente",
      "Em dias frios, ligue a máquina e deixe-a girar devagar por 1 minuto para o óleo aquecer e circular suavemente antes de acelerar no bordado"
    ],
    dicaArtrelados: "Guarde uma almotolia (bisnaga com bico longo e fino) com óleo mineral branco do lado da sua máquina. Criar o hábito de pingar 1 gota na lançadeira toda manhã antes de ligar a máquina leva apenas 10 segundos e evita 90% de todas as quebras mecânicas!",
    voceSabia: "Em máquinas de bordar industriais de grande porte com 20 cabeçotes, existem sistemas computadorizados de auto-lubrificação centralizada que injetam microgotas de óleo calibradas por pulsos pneumáticos a cada 100.000 pontos bordados!",
    practicalExercise: "Retire a canelinha e a chapa de agulha da sua máquina: passe um pincel para tirar os fiapos, pingue 1 gota de óleo mineral branco na pista da lançadeira e gire o volante na mão. Sinta como o movimento fica macio e suave instantaneamente!",
    quickSummary: "Aplicação diária de óleo mineral branco têxtil na lançadeira e mecanismos móveis para reduzir atrito, aquecimento e desgaste.",
    relatedTerms: ["Lançadeira Rotativa", "Caixa de Bobina", "Manutenção Preventiva", "Óleo Mineral Têxtil"],
    tags: ["l-032", "lubrificacao", "oleo mineral", "manutencao", "lancadeira", "preventiva", "mecanica", "artrelados"],
    bibliographicReferences: [
      "JUKI & TAJIMA TECHNICAL SERVICE. Industrial Machine Lubrication and Tribology Standards. Tokyo: Juki, 2022.",
      "ARTRELADOS. Manual de Manutenção Preventiva do Ateliê: Lubrificação, Higienização e Cuidados Diários. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-033-lupa-de-bancada-luz-led-articulada-inspecao",
    code: "L-033",
    term: "Lupa de Bancada com Luz LED Articulada (Magnifying Lamp & Inspection Lens)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Ferramentas & Acessórios",
    grammarClass: "Substantivo feminino / Da óptica aplicada e ergonomia de precisão.",
    origin: "Instrumento óptico desenvolvido para relojoaria e cirurgia, amplamente adotado em ateliês de bordado para inspeção microscópica de pontos, encaixe de fios em agulhas finas e limpeza de cabeçotes.",
    summary: "Equipamento óptico de bancada com lente de aumento de 3x a 10x e anel de iluminação LED fria circular para inspeção de precisão e passagem de linha em agulhas finas.",
    definition: "A Lupa de Bancada Articulada com Iluminação LED (Magnifying Lamp / Lente de Inspeção de Bordado) é um acessório essencial de bancada e controle de qualidade para ateliês modernos. Composta por uma lente de cristal óptico de alta transparência (com ampliação de 3 a 10 dioptrias) circundada por um anel de LEDs de luz branca fria (5.000K a 6.500K) sem cintilação (Flicker-Free) e montada sobre braços pantográficos articulados. Ela permite à bordadeira inspecionar a formação microscópica dos nós de ponto, passar linhas difíceis (como metálicas e fios finos 60wt) no olho minúsculo da agulha, retirar nós e rebarbas com pinças cirúrgicas e inspecionar a integridade da ponta de agulhas e facas sem forçar a visão humana.",
    technicalDetails: "Especificações técnicas da lupa de inspeção:\n• Ampliação Óptica: Lente principal de 3 a 5 Dioptrias (aumento de 1,75x a 2,25x) com mini-lente bifocal auxiliar de 8 a 12 Dioptrias (aumento de 3x a 4x);\n• Iluminação Integrada: Anel com 60 a 90 micro-LEDs SMD com temperatura de cor de 6.000K (Luz do Dia) e índice de reprodução de cor (CRI) > 85 para fidelidade de tons;\n• Braço Pantográfico Articulado: Estrutura metálica com molas balanceadas que permite posicionar a lente em qualquer ângulo a até 90 cm de alcance;\n• Proteção Ocular: Reduz a fadiga visual e a cefaleia por esforço de acomodação visual da bordadeira em jornadas longas;\n• Tampa de Proteção da Lente: Tampa articulada para cobrir a lente quando não estiver em uso (evitando efeito lupa com luz solar direta que pode causar princípios de incêndio).",
    howItWorks: [
      "1. A lupa é fixada na borda da mesa da máquina ou na bancada de acabamento por meio de uma morsa de pressão.",
      "2. A bordadeira articula o braço e posiciona a lente diretamente sobre o cabeçote ou sobre a peça bordada.",
      "3. Liga a luz LED circular para iluminar a área sem criar sombras direcionais.",
      "4. Olha através da lente de cristal para enxergar o olho da agulha e a passagem da linha com nitidez ampliada.",
      "5. Executa a limpeza de fiapos, desmanche cirúrgico de nós ou corte de fios de salto com total precisão.",
      "6. A qualidade do acabamento atinge o mais alto padrão profissional sem cansar a visão do profissional."
    ],
    beginnerExplanation: "A lupa de bancada com luz LED é o melhor amigo dos olhos de quem borda! Ela é uma lente redonda grandona que vem presa em um braço articulado com um anel de luz branca bem forte em volta. Quando você precisa passar uma linha teimosa em uma agulha fininha, achar uma pontinha de linha escondida ou ver se o ponto ficou perfeitinho, você puxa a lupa para perto e tudo fica gigante e super iluminado! É maravilhosa para não cansar a vista nem dar dor de cabeça no fim do dia!",
    applications: [
      "Passagem de linha em agulhas ultrafinas calibre 65/9 e linhas difíceis como metálicas e Lastex",
      "Inspeção minuciosa de qualidade em monogramas de micro-letras e detalhes artísticos",
      "Limpeza cirúrgica de fiapos presos na caixa de bobina e na pista da lançadeira",
      "Desmanche de pontos errados com desmanchador de costura sem furar o tecido"
    ],
    commonErrors: [
      "Deixar a lente de vidro exposta ao sol direto na janela sem tampa protetora (a lente funciona como uma lupa solar e pode queimar a bancada)",
      "Usar lâmpadas amareladas quentes que distorcem as cores reais das linhas de bordado",
      "Limpar a lente com panos ásperos cheios de poeira que riscam o cristal óptico"
    ],
    troubleshootingTips: [
      "Limpe a lente da lupa apenas com flanela de microfibra limpa e spray limpa-óculos",
      "Ajuste a intensidade do LED (se tiver dimmer) para não causar reflexos ofuscantes em tecidos metalizados ou plásticos",
      "Posicione a lupa de modo que a luz venha de cima sem refletir direto nos seus olhos"
    ],
    dicaArtrelados: "Para conferir se uma agulha velha ainda está boa ou se a ponta entortou: coloque a agulha embaixo da lupa com a luz LED no máximo. Você consegue ver até o menor arranhão microscópico ou rebarba na ponta da agulha em segundos!",
    voceSabia: "A utilização de iluminação LED com índice de reprodução de cor acima de 80 reduz em até 40% o índice de retrabalho em ateliês de bordado ao evitar confusão entre tons parecidos de linhas (como preto e azul-marinho ou off-white e bege)!",
    practicalExercise: "Coloque uma agulha fina 70/10 sob a lupa de bancada com a luz ligada: observe a canaleta frontal, o rebaixo traseiro e o olho da agulha com nitidez total e passe a linha de primeira sem esforço!",
    quickSummary: "Lente óptica articulada de bancada com anel de iluminação LED para inspeção de precisão, limpeza e passagem de linha.",
    relatedTerms: ["Passador de Linha", "Inspeção Visual", "Ergonomia do Ateliê", "Controle de Qualidade"],
    tags: ["l-033", "lupa de bancada", "luz led", "inspecao", "ferramentas", "ergonomia", "agulha", "artrelados"],
    bibliographicReferences: [
      "ILLUMINATING ENGINEERING SOCIETY. Ergonomic Lighting and Magnification Standards in Precision Manufacturing. New York: IES, 2021.",
      "ARTRELADOS. Ergonomia, Iluminação e Ferramental de Precisão no Ateliê de Bordado Computadorizado. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-034-lamina-aparador-linha-trimmer-knife-movable-fixed-blade",
    code: "L-034",
    term: "Lâmina do Aparador de Linha (Trimmer Knife / Movable & Fixed Trimmer Blade)",
    letter: "L",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo feminino / Da mecatrônica de corte e cutelaria de precisão.",
    origin: "Desenvolvida como parte do mecanismo de corte automático de linha (Under-Bed Thread Trimmer - UTT) introduzido pela Tajima e Brother nos anos 1980 para cortar a linha superior e inferior automaticamente sob a chapa de agulha.",
    summary: "Conjunto de navalhas de aço temperado (faca móvel e contranavalha fixa) posicionadas sob a chapa de agulha que cortam as linhas superior e da bobina após os comandos de corte da matriz.",
    definition: "A Lâmina do Aparador de Linha (Trimmer Knife / Faca Móvel e Faca Fixa do Cortador Automático / Under-Bed Trimmer Blade) é o componente mecânico de corte responsável pela execução física dos comandos de corte de linha na máquina de bordar. O conjunto é formado por uma Faca Móvel (Movable Knife / Gancho em formato de bico de papagaio acionado por solenoide ou came pneumático) e uma Faca Fixa (Counter Blade / Contranavalha afiada em aço tungstênio com mola de pressão). Quando a matriz envia o sinal de corte, a faca móvel avança sob a chapa de agulha, laça simultaneamente a linha da agulha e a linha da bobina e as puxa contra o fio de corte da faca fixa, cortando ambos os filamentos de forma instantânea e precisa.",
    technicalDetails: "Engenharia e operação das lâminas de corte:\n• Composição do Aço: Aço de alta liga temperado (SK-5 / D2 / Aço Rápido HSS com revestimento de Nitreto de Titânio);\n• Folga de Corte (Clearence): Ajustada em mícrons com mola de pressão calibrada para cortar desde microfilamentos 60wt até fios metálicos sem mastigar;\n• Ciclo Cinemático: Avanço da faca móvel -> captura dos 2 fios -> retração -> cisalhamento na faca fixa -> retenção da ponta da bobina pela mola de retenção (Holding Spring);\n• Comprimento da Ponta Residual: Projetada para deixar uma sobra de 2,5 cm a 3,5 cm de linha presa na agulha para o início perfeito do próximo ponto;\n• Vida Útil: Suporta de 500.000 a 2 milhões de ciclos de corte antes de necessitar de afiação ou substituição.",
    howItWorks: [
      "1. A matriz atinge um comando de corte programado após a amarração final (Tie-Off).",
      "2. O solenoide de corte da máquina é disparado por um pulso elétrico da placa-mãe.",
      "3. A faca móvel avança por baixo da chapa de agulha em movimento circular ou linear.",
      "4. O bico da faca móvel engata a linha da agulha e a linha da bobina juntas.",
      "5. A faca móvel recua tracionando os dois fios contra a navalha afiada da faca fixa.",
      "6. Ocorre o corte por cisalhamento perfeito (como uma tesoura microscópica).",
      "7. A mola retém a ponta da linha da canelinha para ela não escapar e o pantógrafo salta livremente para o próximo ponto."
    ],
    beginnerExplanation: "As lâminas do aparador são a 'tesourinha secreta' que fica escondida debaixo da chapa da sua máquina! Toda vez que a máquina termina de bordar uma cor ou uma letra e precisa pular para a outra, essa faquinha dispara lá embaixo, pega a linha de cima e a linha da canelinha juntas e corta tudo num piscar de olhos! Se a faquinha estiver cega ou cheia de fiapos, a linha não corta e a máquina fica dando aviso de erro de corte no painel.",
    applications: [
      "Corte automático de linha entre letras, trocas de cores e saltos de bastidor",
      "Eliminação de trabalho manual de limpeza de fios soltos após o bordado",
      "Produção industrial de alta velocidade em confecções e uniformes",
      "Manutenção e substituição periódica de facas de corte em revisões técnicas"
    ],
    commonErrors: [
      "Bater a agulha com força sobre a chapa de agulha e entortar a ponta da faca móvel lá embaixo",
      "Deixar pedaços de entretela dura e fiapos de linha acumularem entre as lâminas de corte",
      "Mexer nos parafusos de regulagem da faca fixa sem ferramentas adequadas de calibração"
    ],
    troubleshootingTips: [
      "Se a máquina parar de cortar a linha e apenas puxar o fio sem cortar: retire a chapa de agulha e limpe com um pincel os fiapos acumulados na navalha",
      "Evite usar linhas de má qualidade cheias de nós grossos ou arames metálicos que podem cegar a navalha",
      "Em máquinas que cortam com dificuldade: substitua o par de lâminas (faca fixa e móvel) juntas para garantir corte perfeito"
    ],
    dicaArtrelados: "A máquina começou a mastigar a linha no corte? 90% das vezes é apenas fiapo e poeira acumulada entre as lâminas! Desparafuse a chapa de agulha, passe um pincel com álcool isopropílico na faquinha e veja ela voltar a cortar como uma navalha novinha!",
    voceSabia: "O sistema de corte automático sob a chapa foi a maior revolução de produtividade da história do bordado, reduzindo em até 80% o tempo total de produção de uma peça que antigamente precisava ser toda cortada na tesourinha de mão!",
    practicalExercise: "Com a máquina desligada, retire a chapa de agulha e observe com uma lanterna as duas faquinhas de aço polido que ficam ao lado da lançadeira: veja como elas se cruzam perfeitamente para cortar a linha!",
    quickSummary: "Conjunto de facas de aço temperado sob a chapa de agulha que executam o corte automático e limpo das linhas superior e inferior.",
    relatedTerms: ["Aparador de Linha (Trimmer)", "Fio de Salto", "Tie-Off", "Chapa de Agulha"],
    tags: ["l-034", "lamina aparador", "trimmer knife", "faca de corte", "corte automatico", "mecanica", "pecas", "artrelados"],
    bibliographicReferences: [
      "TAJIMA & BROTHER SERVICE MANUALS. Under-Bed Thread Trimming Mechanism and Knife Timing Alignment. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Mecatrônica do Bordado: Solenoides, Facas de Corte, Lançadeiras e Sincronismo. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-035-lacre-seguranca-chave-allen-porta-agulhas-needle-clamp",
    code: "L-035",
    term: "Lacre de Segurança e Chave Allen do Porta-Agulhas (Needle Clamp Set Screw & Allen Key)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino / Da fixação mecânica de ferramentas de usinagem.",
    origin: "Mecanismo universal de fixação mecânica por parafuso sextavado interno (Allen / Hex Key) ou parafuso com fenda borboleta utilizado na extremidade inferior da barra de agulhas para travar a haste cilíndrica da agulha com rigidez absoluta.",
    summary: "Parafuso de aperto e ferramenta chave Allen de precisão utilizados para fixar, alinhar a orientação do rebaixo e travar a agulha na barra com segurança.",
    definition: "O Parafuso do Porta-Agulhas e sua Chave Allen de Ajuste (Needle Clamp Set Screw & Hex Screwdriver) é o elemento mecânico responsável pelo travamento firme e alinhamento geométrico da agulha no bloco do porta-agulhas (Needle Clamp) da barra de agulhas. Em máquinas industriais e multicabeçotes, esse parafuso utiliza cabeça sextavada interna (Allen de 1,5 mm a 2,0 mm) em aço de alta resistência temperado. O aperto correto garante que a agulha não gire no próprio eixo durante a vibração de alta velocidade (o que faria o rebaixo perder o sincronismo com a lançadeira) e impede que a agulha se solte e atinja a chapa com violência.",
    technicalDetails: "Especificações e cuidados com o parafuso do porta-agulhas:\n• Tipo de Rosca: Rosca métrica fina de precisão (M2,5 a M3,0) em aço carbono temperado Classe 10.9 ou 12.9;\n• Ferramenta de Aperto: Chave Allen sextavada de precisão (geralmente 1,5 mm ou 2,0 mm) com cabo ergonômico emborrachado;\n• Torque Recomendado: Aperto firme manual (cerca de 0,8 Nm a 1,2 Nm) — NUNCA apertar com força excessiva que espanhe a rosca de alumínio da barra;\n• Orientação da Agulha: A canaleta longa da agulha voltada para a frente (ou para o lado, conforme o modelo da máquina) e o rebaixo traseiro (Scarf) voltado exatamente para o bico da lançadeira;\n• Risco de Desgaste: O uso de chaves Allen gastas ou arredondadas espanha o encaixe do parafuso, exigindo extração cirúrgica por técnicos.",
    howItWorks: [
      "1. A bordadeira desliga a máquina ou ativa a trava de segurança no painel.",
      "2. Encaixa a chave Allen no parafuso do porta-agulhas e gira no sentido anti-horário 1/2 volta.",
      "3. Remove a agulha antiga gasta puxando para baixo.",
      "4. Insere a nova agulha empurrando-a até o topo máximo do batente interno.",
      "5. Alinha o rebaixo traseiro (ou a parte chanfrada) na orientação correta indicada no manual.",
      "6. Aperta o parafuso com a chave Allen com firmeza suave até travar.",
      "7. A agulha fica perfeitamente fixa, alinhada e pronta para bordar com total segurança."
    ],
    beginnerExplanation: "A chavinha Allen e o parafusinho da agulha são as pecinhas que seguram a agulha bem presa na máquina para ela não cair durante o bordado! Quando você vai trocar de agulha, você usa essa chavinha especial (que tem a ponta sextavada parecendo uma estrelinha de seis pontas) para afrouxar o parafuso, colocar a agulha nova empurrada até o finalzinho lá no topo e apertar de volta com carinho. Não precisa fazer força de leão: basta dar um aperto firme para a agulha não girar nem cair no pano!",
    applications: [
      "Troca periódica e substituição de agulhas cegas, tortas ou de calibres diferentes",
      "Alinhamento preciso do rebaixo (Scarf) em relação à lançadeira em máquinas industriais",
      "Ajuste e calibração de barras de agulhas em máquinas multicabeçotes",
      "Fixação de acessórios de perfuração (Borer) na barra de agulha"
    ],
    commonErrors: [
      "Apertar o parafuso com força brutal até espanar a rosca (precisa trocar a barra de agulha inteira da máquina)",
      "Usar chave Allen gasta ou tamanho errado que arredonda o parafuso",
      "Não empurrar a agulha até o batente máximo superior (a agulha fica comprida e bate na lançadeira)"
    ],
    troubleshootingTips: [
      "Tenha sempre parafusos do porta-agulha reservas no ateliê; se um começar a ficar gasto, troque-o imediatamente",
      "Use chaves Allen de boa qualidade de aço cromo-vanádio que não arredondem com o tempo",
      "Sempre confira com os dedos se a agulha está bem firme e não gira antes de apertar o play da máquina"
    ],
    dicaArtrelados: "Ao trocar a agulha, segure-a com a mão esquerda empurrando bem para cima enquanto aperta o parafuso com a mão direita. Isso garante que a agulha fique no batente máximo e nunca bata na chapa nem na lançadeira!",
    voceSabia: "O formato de parafuso sextavado interno foi patenteado pela Allen Manufacturing Company em 1910 nos Estados Unidos e revolucionou a indústria porque não escapava da chave como os antigos parafusos de fenda simples!",
    practicalExercise: "Pegue a chave Allen da sua máquina: desparafuse a agulha, sinta o batente superior com a ponta do dedo ao colocar a nova agulha e aperte com firmeza sentindo o ponto exato de travamento do torque!",
    quickSummary: "Parafuso sextavado e chave de precisão para travamento firme e alinhamento do rebaixo da agulha na barra.",
    relatedTerms: ["Barra de Agulha", "Agulha de Bordado", "Rebaixo da Agulha (Scarf)", "Troca de Agulha"],
    tags: ["l-035", "chave allen", "porta-agulhas", "parafuso", "needle clamp", "troca de agulha", "mecanica", "artrelados"],
    bibliographicReferences: [
      "SCHMETZ NEEDLES. Industrial Needle Clamping, Alignment and Torque Standards. Herzogenrath: Schmetz, 2022.",
      "ARTRELADOS. Anatomia da Máquina de Bordar: Barras de Agulha, Porta-Agulhas, Chaves e Fixações. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "l-036-limitador-bastidor-borda-segura-costura-hoop-limit-safe-margin",
    code: "L-036",
    term: "Limitador de Bastidor / Borda Segura de Costura (Hoop Limit & Frame Safe Margin)",
    letter: "L",
    level: "Fundamental 🟢",
    category: "Bastidores & Fixação",
    grammarClass: "Substantivo masculino / Do controle numérico e segurança operacional CNC.",
    origin: "Recurso algorítmico de proteção introduzido nos controladores eletrônicos de bordado para delimitar a área útil máxima do bastidor e impedir que a agulha ou o calcador colidam fisicamente com o aro de plástico ou metal durante a costura.",
    summary: "Margem de segurança programada que delimita a área útil real de bordado dentro do bastidor, evitando que a agulha colida com as bordas do aro.",
    definition: "O Limitador de Bastidor e Borda Segura de Costura (Hoop Limit / Safe Sewing Margin / Área Útil de Bastidor) é a fronteira virtual pré-definida no software de matrizes e no computador da máquina que restringe o movimento do pantógrafo dentro das dimensões físicas do bastidor selecionado. Embora um bastidor tenha dimensões nominais externas (ex: 13x18 cm ou 20x30 cm), a área real segura para costura é sempre cerca de 1,5 cm a 2,0 cm menor em toda a periferia. Essa margem de tolerância é obrigatória para acomodar a largura da sapata do pé calcador, a oscilação da barra de agulha e as folgas de deslocamento em alta velocidade, evitando colisões mecânicas destrutivas com os aros.",
    technicalDetails: "Geometria e parâmetros de margem de bastidor:\n• Margem de Segurança Padrão: 10 mm a 15 mm de distância livre entre o último ponto externo do desenho e a borda interna do aro plástico;\n• Sensores de Limite de Curso (Limit Switches / Soft Limits): Sensores ópticos ou magnéticos nos eixos X e Y que desarmam os motores se o pantógrafo atingir o fim de curso físico;\n• Função Trace / Moldura Virtual: O painel da máquina movimenta a agulha ao redor do perímetro do desenho antes de iniciar para o operador confirmar visualmente que não haverá colisão;\n• Risco de Colisão (Hoop Strike): Se um desenho extrapolar a borda segura, o pé calcador ou a agulha batem no aro plástico a 800 PPM, partindo a agulha, danificando o calcador e descalibrando o sincronismo dos eixos X/Y da máquina.",
    howItWorks: [
      "1. A bordadeira seleciona no software o bastidor que será utilizado (ex: 10x10 cm).",
      "2. O software desenha uma linha pontilhada delimitando a área de borda segura no display.",
      "3. Se o desenho ultrapassar essa linha, o programa alerta com aviso em vermelho.",
      "4. O arquivo é enviado para a máquina com o tamanho perfeitamente ajustado.",
      "5. No painel da máquina, o operador aperta o botão de 'Trace / Traçado de Perímetro'.",
      "6. A máquina percorre as 4 extremidades do desenho no bastidor real com uma luz laser ou agulha levantada.",
      "7. Confirmada a folga segura em todos os lados, o bordado é executado com 100% de segurança e tranquilidade."
    ],
    beginnerExplanation: "A borda segura do bastidor é a 'zona de perigo' que você nunca deve ultrapassar dentro do aro de bordar! Embora o bastidor pareça grande, o pezinho da máquina e a agulha precisam de um espacinho de sobra para não baterem no plástico da borda. Se você tentar bordar um desenho coladinho na beirada do bastidor, a agulha bate com tudo no plástico duro, quebra em pedaços e pode desregular sua máquina inteira! Por isso, deixe sempre um dedinho de folga em volta do desenho e sempre aperte o botão de 'Trace' antes de começar!",
    applications: [
      "Dimensionamento correto de matrizes no software antes de enviar para o ateliê",
      "Prevenção absoluta de colisões de agulhas e sapatas em aros de plástico e magnéticos",
      "Alinhamento de bordados contínuos em bastidores de giga e bastidores de boné",
      "Ajuste fino de centralização de logotipos e nomes em bolsos e golas estreitas"
    ],
    commonErrors: [
      "Ignorar o aviso de 'Desenho excede o bastidor' e forçar o início do bordado",
      "Bordar sem fazer o teste de 'Trace / Moldura' prévio no painel da máquina",
      "Dimensionar a matriz no tamanho exato do aro externo sem deixar a margem de segurança do calcador"
    ],
    troubleshootingTips: [
      "Sempre execute a função de 'Trace / Contorno' no painel da máquina antes de apertar o botão de iniciar para checar visualmente as folgas",
      "Deixe sempre pelo menos 15 mm de margem livre em todas as quatro laterais do bastidor",
      "Se o desenho for apenas 5 mm maior que o bastidor: prefira trocar para o bastidor maior em vez de arriscar uma colisão"
    ],
    dicaArtrelados: "Regra de ouro do ateliê Artrelados: antes de qualquer bordado, aperte o botão de 'Trace' (traçar moldura) no painel da máquina. Esse teste de 5 segundos salva agulhas, salva o bastidor e evita sustos e prejuízos caros!",
    voceSabia: "Quando a agulha de uma máquina de bordar industrial colide com o aro do bastidor a 1.000 PPM, a força de impacto na ponta da barra de agulha ultrapassa o equivalente a 50 kg de pressão instantânea!",
    practicalExercise: "Coloque um bastidor na sua máquina com um tecido montado: selecione um desenho e aperte o botão de traçado (Trace) no painel. Acompanhe com os olhos o movimento e observe a margem de segurança ao redor de toda a borda!",
    quickSummary: "Margem de segurança indispensável dentro do bastidor que impede a colisão da agulha e do calcador contra o aro de plástico.",
    relatedTerms: ["Bastidor de Bordado", "Trace / Traçado", "Eixos X e Y", "Pé Calcador"],
    tags: ["l-036", "limitador de bastidor", "hoop limit", "borda segura", "trace", "seguranca", "colisao", "artrelados"],
    bibliographicReferences: [
      "BROTHER & WILCOM TECHNICAL PAPERS. Hoop Limits, Clearance Zones and Collision Prevention Standards. Tokyo: Brother, 2022.",
      "ARTRELADOS. Segurança Operacional no Ateliê: Limites de Bastidor, Traçado de Perímetro e Proteção Mecânica. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

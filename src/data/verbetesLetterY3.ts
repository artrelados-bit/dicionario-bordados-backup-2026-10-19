import { Verbete } from "../types";

export const VERBETES_LETTER_Y3: Verbete[] = [
  {
    id: "yarn-break-sensor-sensor-quebra-linha-cabecote",
    code: "Y-007",
    letter: "Y",
    term: "Yarn Break Detection System — Sensor Eletrônico e Óptico de Quebra de Linha do Cabeçote",
    pronunciation: "iárn brêik di-ték-shon sís-tem — sen-sor de que-bra de li-nha do ca-be-so-te",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'thread break detector' desenvolvido com rodas codificadoras ópticas e sensores piezoelétricos na automação têxtil de cabeçotes multicabeças.",
    summary: "Sistema mecatrônico de alta precisão que detecta instantaneamente quando a linha de bordar arrebenta ou acaba, parando a máquina em menos de 3 agulhadas.",
    definition: "O Yarn Break Detection System (Sensor de Quebra de Linha / Sistema de Detecção de Ruptura de Fio / Optical & Rotary Thread Break Sensor) é o subsistema eletrônico integrado à passagem de linha superior de cada agulha no cabeçote de bordado. Sua função é monitorar continuamente o fluxo e a movimentação física da linha enquanto a máquina costura. Caso a linha arrebente, acabe no cone ou a bobina se esgote, o sensor envia um sinal elétrico de interrupção imediata para a placa-mãe.",
    technicalDetails: "Existem duas tecnologias principais de sensores de quebra: 1) **Roldanas Codificadoras Rotativas (Rotary Wheel Sensors)**: a linha gira uma pequena rodinha interna perfurada que interrompe um feixe óptico; se a roda parar de girar enquanto o eixo principal estiver em movimento, a máquina para; 2) **Sensores Piezoelétricos de Vibração**: detectam a microvibração mecânica do fio em movimento. A sensibilidade do sensor pode ser regulada no painel da máquina em pulsos de tolerância (tipicamente calibrada para disparar alarme após **2 a 4 pontos perdidos**), acionando o freio do motor e acendendo a luz de aviso vermelha do cabeçote.",
    beginnerExplanation: "É o 'alarme vigilante' da sua máquina! Quando a linha arrebenta ou acaba no cone, esse sensor percebe na mesma hora e desliga a máquina na hora, acendendo uma luzinha vermelha e apitando para você não perder tempo bordando 'no seco' sem linha!",
    howItWorks: [
      "1. A linha passa pela roldana do sensor de quebra antes de descer para o estica-fio.",
      "2. Conforme a agulha costura, a linha puxada faz a roldana girar continuamente.",
      "3. O disco interno emite pulsos ópticos para o microprocessador do cabeçote.",
      "4. Se a linha arrebentar, a roldana para de girar instantaneamente.",
      "5. O processador identifica que o motor Z está rodando mas o sensor parou de mandar pulsos.",
      "6. A CPU comanda a frenagem do motor principal, para a agulha no alto e acende o LED vermelho.",
      "7. O painel avisa qual agulha quebrou e permite retroceder alguns pontos para reiniciar perfeitamente."
    ],
    applications: [
      "Parada imediata de máquinas industriais multicabeçotes evitando peças com bordados incompletos.",
      "Aviso automático de término de linha no cone ou esgotamento da carretilha de bobina.",
      "Diagnóstico de passagens de linha incorretas ou discos de tensão excessivamente frouxos.",
      "Monitoramento de produção contínua sem necessidade de operador vigiando 100% do tempo."
    ],
    characteristics: [
      "Resposta ultrarrápida com detecção em até 3 a 5 pontos após a quebra.",
      "Sensibilidade programável no painel da máquina para diferentes tipos de linha.",
      "Sinalização luminosa individual por LED em cada cabeçote industrial."
    ],
    commonErrors: [
      "❌ Passar a linha por fora da roldana do sensor, fazendo a máquina disparar alarme falso de quebra a cada 10 segundos.",
      "❌ Deixar poeira e fiapos acumulados dentro da rodinha do sensor, travando o giro óptico.",
      "❌ Desativar o sensor de quebra no painel e esquecer a máquina bordando sem linha por centenas de pontos."
    ],
    troubleshootingTips: [
      "A máquina para e apita avisando que a linha quebrou, mas a linha está inteira na agulha (falso alarme): a linha deu uma volta frouxa na roldana ou há fiapo de linha preso no sensor óptico; limpe o sensor e dê uma volta completa de linha na roldana para dar atrito.",
      "A linha arrebenta e a máquina continua costurando 'no seco' sem avisar: o sensor de quebra está desativado no menu da máquina ou a sensibilidade está ajustada com valor muito alto (ex.: mais de 10 pontos); ajuste para 3 pontos no painel.",
      "O LED do cabeçote fica piscando sem parar: limpe a placa do sensor com spray limpa-contatos e ar comprimido seco."
    ],
    dicaArtrelados: "Se a sua máquina estiver dando alarme de quebra falso toda hora com a linha perfeitamente passada: passe a linha dando duas voltinhas completas na rodinha do sensor em vez de apenas uma! Essa voltinha extra cria a aderência perfeita para a rodinha girar sem patinar!",
    voceSabia: "Antes da invenção dos sensores ópticos eletrônicos, as máquinas de bordar antigas utilizavam arames de contato elétrico bem finos apoiados na linha; se a linha caísse, o araminho encostava na carcaça de ferro e fechava um curto para acender uma lâmpada!",
    practicalExercise: "Com a máquina bordando um retalho, puxe o cone de linha para simular uma quebra de fio. Observe quantos pontos a máquina leva para parar e veja a mensagem de aviso que aparece na tela do seu painel.",
    quickSummary: "Dispositivo mecatrônico de segurança que monitora o fluxo do fio e desliga a máquina imediatamente ao detectar ruptura de linha.",
    relatedTerms: ["Quebra de Linha", "Cabeçote", "Painel da Máquina", "Roldana Óptica", "Sensor de Bobina", "Retrocesso de Pontos"],
    tags: ["yarnbreaksensor", "sensordelinha", "quebradelinha", "manutencao", "hardware", "eletronica", "seguranca"]
  },
  {
    id: "yellowing-thermal-water-soluble-residuos-hidrossoluvel",
    code: "Y-008",
    letter: "Y",
    term: "Yellowing & Thermal Residue Prevention in Water-Soluble Toppings — Prevenção de Resíduos Térmicos e Manchas em Plástico Hidrossolúvel",
    pronunciation: "iê-lou-ing end thér-mal re-zí-diu pre-vên-shon — pre-ven-são de re-sí-duos no plás-ti-cu hi-dros-so-lú-vel",
    level: "Iniciante 🟢",
    category: "Entretelas & Estabilizadores",
    grammarClass: "Substantivo feminina composta.",
    origin: "Da química de polímeros de álcool polivinílico (PVA) e processos de termofixação e higienização em ateliês têxteis.",
    summary: "Técnicas essenciais de lavagem e remoção do filme hidrossolúvel (Soluwater / Aquafilm) antes de aplicar calor, evitando que o plástico caramelize ou manche o tecido.",
    definition: "A Yellowing & Thermal Residue Prevention (Prevenção de Amarelamento e Resíduos Térmicos de PVA / Water-Soluble Film Washing Protocol / Soluble Topping Cleanout) é o conjunto de procedimentos químicos e operacionais necessários para dissolver e eliminar 100% dos resíduos de filmes hidrossolúveis (Toppings de PVA) aplicados sobre tecidos felpudos (toalhas de banho, veludos, piquet e plush) antes de qualquer etapa de passadoria a ferro ou prensagem térmica.",
    technicalDetails: "O filme hidrossolúvel é formulado à base de álcool polivinílico (Polyvinyl Alcohol - PVA). Em contato com água em temperatura ambiente ou morna (20 °C a 40 °C), as pontes de hidrogênio do polímero se rompem rapidamente, dissolvendo a película por completo. No entanto, se o bordado for passado a ferro quente (acima de 130 °C) enquanto ainda contiver micropartículas secas de PVA não dissolvidas, o polímero sofre reação de reticulação e caramelização térmica irreversível, transformando-se em uma resina amarelada, dura e insolúvel que impregna as fibras do tecido e as linhas de bordar.",
    beginnerExplanation: "É o segredo importantíssimo de NUNCA passar o ferro quente na toalha de banho enquanto ainda tiver restos daquele plástico transparente que some na água! Primeiro a gente molha e lava bem o bordado para tirar todo o plástico; só depois de seco é que podemos passar a ferro, senão o plástico queima e mancha a toalha de amarelo!",
    howItWorks: [
      "1. A bordadeira finaliza o bordado na toalha felpuda feito com plástico hidrossolúvel por cima.",
      "2. Retira o excesso de plástico rasgando delicadamente pelas bordas do bordado.",
      "3. Borrifa água morna com um borrifador ou passa um paninho úmido com água pura sobre os pontinhos.",
      "4. Enxágua em água corrente ou utiliza uma toalhinha úmida para retirar todo o gel viscoso que se forma.",
      "5. Deixa a peça secar naturalmente à sombra ou em ambiente arejado.",
      "6. Verifica se o toque do bordado está 100% macio e sem nenhuma sensação engomada ou pegajosa.",
      "7. Somente após a secagem completa, passa a ferro pelo avesso com temperatura branda para finalizar a peça com perfeição."
    ],
    applications: [
      "Bordados em toalhas de banho e rosto de alto padrão, roupões e toalhas de bebê.",
      "Bordados em tecidos aveludados, plush, fleece e malhas caneladas.",
      "Enxovais brancos delicados e peças religiosas de linho com fio dourado.",
      "Garantia de acabamento de toque extremamente macio em roupas infantis."
    ],
    characteristics: [
      "Solubilidade total em água sem necessidade de produtos químicos agressivos.",
      "Proteção das fibras do tecido contra endurecimento ou queima por calor residual.",
      "Manutenção do brilho original e vivacidade das cores das linhas de poliéster."
    ],
    commonErrors: [
      "❌ Passar o ferro de passar roupas direto em cima da toalha com restos de hidrossolúvel, derretendo o plástico e grudando na base do ferro.",
      "❌ Usar água fervendo para dissolver o filme, o que pode cozinhar as fibras do tecido delicado.",
      "❌ Deixar a peça secar ao sol forte com restos de gel de PVA, causando amarelamento do tecido branco."
    ],
    troubleshootingTips: [
      "O bordado ficou duro e parecendo que foi engomado com cola: a peça ainda contém resíduos de hidrossolúvel; enxágue novamente em água morna corrente esfregando suavemente com uma escova de cerdas macias.",
      "O plástico grudou na base do ferro de passar: limpe o ferro com uma toalha grossa umedecida em água enquanto ele estiver morno (nunca use facas ou esponjas de aço).",
      "Ficaram pontinhas transparentes de plástico aparecendo entre os pontos de satim: umedeça um cotonete com água e passe delicadamente entre as letras; o plástico sumirá em segundos."
    ],
    dicaArtrelados: "A regra de ouro do ateliê Artrelados: água primeiro, ferro depois! Sempre tire todo o plástico hidrossolúvel com uma borrifada de água e uma toalhinha úmida antes de chegar perto da tábua de passar. O toque da toalha fica fofinho como uma nuvem!",
    voceSabia: "O polímero PVA utilizado no plástico hidrossolúvel de bordado é 100% biodegradável e atóxico, sendo da mesma família química dos filmes solúveis utilizados na medicina para embalar cápsulas de medicamentos e fios cirúrgicos absorvíveis!",
    practicalExercise: "Pegue um pedaço de 5 cm de plástico hidrossolúvel. Coloque dentro de um copo com água em temperatura ambiente e mexa com uma colher: veja como ele desaparece completamente em menos de 10 segundos sem deixar nenhum resíduo visível.",
    quickSummary: "Protocolo de dissolução e remoção completa do filme hidrossolúvel com água antes da passadoria a ferro para evitar amarelamento e endurecimento.",
    relatedTerms: ["Filme Hidrossolúvel", "Álcool Polivinílico (PVA)", "Toalhas de Banho", "Passadoria", "Topping", "Acabamento"],
    tags: ["yellowingprevention", "hidrossoluvel", "pva", "lavagem", "acabamento", "toalhas", "qualidade"]
  }
];

import { DiagnosticInputs } from "../types";

export interface DiagnosticResult {
  title: string;
  category: string;
  severity: "Baixa" | "Média" | "Alta" | "Crítica";
  summary: string;
  criticalAlerts?: string[];
  probableCauses: string[];
  stepByStepSolution: string[];
  preventiveAdvice: string;
  recommendedSettings: {
    needle?: string;
    stabilizer?: string;
    speed?: string;
    tension?: string;
  };
  artreladosTip: string;
}

export function analyzeEmbroideryProblem(
  problem: string,
  machineModel?: string,
  fabricType?: string,
  detailedInputs?: Partial<DiagnosticInputs>
): DiagnosticResult {
  const p = problem.toLowerCase();
  const m = (machineModel || "").toLowerCase();
  const f = (fabricType || "").toLowerCase();

  const thread = detailedInputs?.threadType || "";
  const needleNum = detailedInputs?.needleNumber || "";
  const needleTip = detailedInputs?.needleTip || "";
  const stabType = detailedInputs?.stabilizerType || "";
  const stabLayers = detailedInputs?.stabilizerLayers || "";
  const matrixPts = detailedInputs?.matrixPoints || "";
  const matrixHist = detailedInputs?.matrixHistory || "";
  const speed = detailedInputs?.speedSetting || "";
  const tension = detailedInputs?.tensionSetting || "";

  const machineLabel = machineModel?.trim() || "Máquina de bordar";
  const fabricLabel = fabricType?.trim() || "Tecido em uso";

  const criticalAlerts: string[] = [];

  // Verificações Cruzadas Inteligentes de Incompatibilidade
  if (thread.toLowerCase().includes("metálica") || thread.toLowerCase().includes("metalizada")) {
    if (speed.toLowerCase().includes("alta") || speed.toLowerCase().includes("700") || speed.toLowerCase().includes("800")) {
      criticalAlerts.push("⚠️ Incompatibilidade Crítica: Linha Metálica combinada com Alta Velocidade causa atrito excessivo, superaquecimento do olho da agulha e desfiamento constante.");
    }
    if (needleNum === "65/9" || needleNum === "70/10" || needleNum === "75/11") {
      criticalAlerts.push("⚠️ Calibre Inadequado: Linha Metálica exige agulha com olho especial alargado (Topstitch ou Metallic) e numeração mínima 80/12 ou 90/14.");
    }
  }

  if (f.includes("malha") || f.includes("piquet") || f.includes("viscolycra") || f.includes("dry")) {
    if (stabType.toLowerCase().includes("rasgável") || stabType.toLowerCase().includes("rasga")) {
      criticalAlerts.push("⚠️ Estabilização Instável: Tecidos de malha com elasticidade não suportam entretela rasgável comum, provocando enrugamento (puckering) e descompasso de contornos.");
    }
    if (needleTip.toLowerCase().includes("universal") || needleTip.toLowerCase().includes("aguda") || needleTip.toLowerCase().includes("microtex")) {
      criticalAlerts.push("⚠️ Risco de Perfuração da Malha: Agulhas com ponta cortante furam as fibras da malha gerando furinhos e rasgos ao redor dos pontos. Utilize ponta bola (SES / SUK).");
    }
  }

  if (matrixHist.toLowerCase().includes("nova") || matrixHist.toLowerCase().includes("baixada")) {
    if (matrixPts.toLowerCase().includes("muito densa") || matrixPts.toLowerCase().includes("pesada") || matrixPts.toLowerCase().includes("30.000")) {
      criticalAlerts.push("💡 Fator Matriz: Por ser uma matriz nova/baixada com alta densidade, verifique se há excesso de subpontos sobrepostos ou nós de travamento acumulados.");
    }
  }

  // Alerta para máquinas industriais / multicabeças
  if (m.includes("cabeça") || m.includes("cabeca") || m.includes("typical") || m.includes("jack") || m.includes("tajima") || m.includes("barudan") || m.includes("swf") || m.includes("feiya") || m.includes("promaker") || m.includes("multi")) {
    criticalAlerts.push("🏭 Ambiente Industrial / Cabeçote de Alta Produção detectado: A calibração de folga da lançadeira rotativa (0.05 a 0.08mm) e o sistema de agulhas cilíndricas DBxK5 / DPx5 operam com padrão de fábrica industrial.");
  }

  // 0. Problemas específicos de Máquinas Multicabeças ou Multiagulhas
  if (
    p.includes("cabeça") ||
    p.includes("cabeca") ||
    p.includes("uma cabeça") ||
    p.includes("outra cabeça") ||
    p.includes("troca de cor") ||
    p.includes("multiagulha") ||
    p.includes("multicabeça") ||
    p.includes("wiper") ||
    p.includes("picker") ||
    p.includes("falso alarme") ||
    p.includes("sensor de quebra")
  ) {
    return {
      title: `Diagnóstico Especializado: Ocorrência em Sistema Multiagulhas / Multicabeças (${machineLabel})`,
      category: "Multiagulhas & Industriais",
      severity: "Alta",
      summary: `Identificamos uma inconsistência operacional típica de equipamentos industriais ou multicabeças em ${machineLabel}. Em máquinas com múltiplas estações, falhas que afetam apenas uma agulha ou cabeça específica geralmente decorrem de microrrebarbas na chapa, sincronismo individual de laçadeira (hook timing) ou sujeira no sensor de rotação daquela estação.`,
      probableCauses: [
        `Rebarba ou arranhão na chapa de agulha ou na ponta da laçadeira da cabeça específica afetada.`,
        `Roldana do sensor óptico de quebra de linha com poeira têxtil ou linha não encaixada com volta de 360°.`,
        `Desalinhamento milimétrico do gancho móvel de corte inferior ou do limpador (wiper/picker).`,
        `Barra de agulha vizinha ligeiramente desencaixada do travador superior, gerando travamento no comando de troca de cor.`
      ],
      stepByStepSolution: [
        `1. Isole a cabeça ou agulha afetada: limpe o orifício da chapa com lixa d'água 1500 enrolada em palito e aplique ar comprimido no sensor óptico correspondente.`,
        `2. Verifique se a linha superior dá uma volta completa de 360° na roldana codificadora do sensor antes de seguir para os tensores.`,
        `3. Gire o volante manual até a marca de sincronismo (aprox. 198° a 201°) e confira se a ponta da laçadeira passa no centro da cava da agulha sem tocá-la.`,
        `4. Inspecione o conjunto de corte e wiper retirando resíduos de cola de entretela adesiva com álcool isopropílico.`,
        `5. Se o problema for de tensão em uma cor específica, passe fio dental não encerado entre os discos e confira se a mola tira-fio tem ação de retorno elástica livre.`
      ],
      criticalAlerts: criticalAlerts.length > 0 ? criticalAlerts : undefined,
      preventiveAdvice: `Em equipamentos multiagulhas, realize semanalmente a limpeza com ar comprimido de todas as roldanas de sensor e lubrificação das guias prismáticas do bloco de troca de cores.`,
      recommendedSettings: {
        needle: "DBxK5 NY2 Titânio (Tamanho 75/11 ou 80/12)",
        speed: "750 a 850 PPM",
        tension: "Bobina aferida com tensiômetro Towa entre 110g e 130g"
      },
      artreladosTip: `Dica de Ouro Artrelados: Quando apenas UMA cabeça apresentar defeito, troque a caixinha de bobina e o cone de linha por aqueles da cabeça ao lado que está funcionando perfeitamente. Se o defeito continuar na mesma cabeça, a causa é 100% mecânica (chapa ou laçadeira); se mudar de cabeça, o defeito era no fio ou na bobina!`
    };
  }


  // 1. Agulha torta / Agulha empenada / Agulha batendo / Quebra de agulha
  if (
    p.includes("agulha torta") ||
    p.includes("agulha empenada") ||
    p.includes("agulha bate") ||
    p.includes("agulha batendo") ||
    p.includes("quebra de agulha") ||
    p.includes("quebrando agulha") ||
    p.includes("agulha quebrou") ||
    p.includes("entortou a agulha")
  ) {
    return {
      title: `Diagnóstico: Agulha Flexionada / Torta ou Impacto na Chapa de Ponto (${machineLabel})`,
      category: "Linhas & Agulhas",
      severity: "Crítica",
      summary: `A agulha está sofrendo deflexão mecânica (entortando) ou sofrendo impacto contra a chapa de agulha, calcador ou laçadeira. Em tecidos como ${fabricLabel}, isso ocorre principalmente por tensão excessiva, velocidade alta, agulha muito fina para a espessura do material ou matriz com pontos aglomerados.`,
      probableCauses: [
        `Deflexão por excesso de velocidade ou penetração em área de alta densidade da matriz.`,
        `Agulha de numeração incorreta ou gasta (ex: usar 70/10 ou 75/11 onde era necessária 80/12 ou 90/14).`,
        `Puxar o tecido ou o bastidor com a agulha abaixada durante a regulagem ou parada da máquina.`,
        `Parafuso do prendedor da agulha frouxo ou agulha inserida com a parte chata (flat) na posição invertida.`,
        `Bastidor mal travado que se deslocou e colidiu com a barra de agulha.`
      ],
      stepByStepSolution: [
        `1. DESLIGUE A MÁQUINA e retire a agulha imediatamente. NUNCA tente desentortar uma agulha de bordado; descarte-a com segurança.`,
        `2. Inspecione a CHAPA DE AGULHA e a LAÇADEIRA: passe suavemente a unha ou um cotonete ao redor do furo da chapa. Se houver qualquer risco ou rebarba metálica deixada pelo choque da agulha, ela irá desfiar e arrebentar a linha constantemente.`,
        `3. Instale uma agulha NOVA com a canaleta voltada para a frente e o lado chato encaixado até o topo do bloco de fixação. Para ${fabricLabel}, recomendamos agulha Organ ou Schmetz 75/11 SUK (ponta bola leve) ou 80/12.`,
        `4. Gire o volante MANUALMENTE em sua direção (sentido anti-horário) para dar um ciclo completo de 360° e certificar-se de que a nova agulha entra no centro exato da chapa sem tocar nas laterais.`,
        `5. Reduza a velocidade de bordado para cerca de 550 a 650 PPM no painel da sua ${machineLabel}.`
      ],
      criticalAlerts: criticalAlerts.length > 0 ? criticalAlerts : undefined,
      preventiveAdvice: `Troque a agulha a cada 8 horas corridas de bordado. Agulhas perdem a têmpera e o fio muito antes de quebrarem, começando a entortar microscopicamente e danificar matrizes.`,
      recommendedSettings: {
        needle: f.includes("malha") || f.includes("algodão") ? "75/11 SUK (Ponta Bola)" : "80/12 ou 90/14 Ponta Seta/Universal",
        stabilizer: f.includes("malha") ? "Entretela Recorta (Cutaway) 80g a 200g" : "Entretela Rasga Fácil 60g a 80g",
        speed: "600 PPM",
        tension: "Tensão padrão superior entre 3.0 e 3.6"
      },
      artreladosTip: `Dica de Ouro Artrelados: Se a agulha bateu na chapa, use uma lixa d'água grão 1200 ou 1500 enrolada num palito para polir o orifício da chapa de ponto. Isso evita que rebarbas metálicas continuem estragando seus bordados!`
    };
  }

  // 2. Ninho de pássaro / Linha enrolando embaixo da chapa / Bloqueio na laçadeira
  if (
    p.includes("ninho") ||
    p.includes("enrolando embaixo") ||
    p.includes("embaixo do tecido") ||
    p.includes("bolo de linha") ||
    p.includes("laço embaixo") ||
    p.includes("travou embaixo") ||
    p.includes("linha de baixo embolou") ||
    p.includes("embolando")
  ) {
    return {
      title: `Diagnóstico: Ninho de Pássaro (Bird Nesting) / Acúmulo de Linha na Laçadeira`,
      category: "Tensão & Caixilho",
      severity: "Alta",
      summary: `Grande volume de laçadas e nós formando-se na parte inferior do bastidor em sua ${machineLabel}. Esse defeito clássico quase SEMPRE é causado pela falta de tensão na linha SUPERIOR (linha saiu do estica-fio ou foi passada com o calcador abaixado).`,
      probableCauses: [
        `A linha superior foi passada com o calcador ABAIXADO (os discos de tensão estavam fechados e a linha não encaixou entre eles).`,
        `A linha escapou do estica-fio (take-up lever) durante o movimento rápido.`,
        `Ponta da linha superior não foi segurada nos primeiros 3 a 5 pontos do início do bordado.`,
        `Fiapo de linha preso nos discos de tensão superiores impedindo o fechamento da mola.`,
        `Caixa de bobina solta ou desencaixada do batente limitador.`
      ],
      stepByStepSolution: [
        `1. Pare a máquina e levante o bastidor com cuidado. Se estiver preso à chapa, corte os fios por baixo com tesoura de ponta curva sem forçar o bastidor para não descalibrar o pantógrafo.`,
        `2. Retire a caixa de bobina e aspire ou limpe com pincel todos os restos de linha e poeira de feltro/entretela.`,
        `3. LEVANTE O CALCADOR DA MÁQUINA (essencial!) e passe toda a linha superior novamente desde o cone até a agulha, garantindo que passe pelo estica-fio.`,
        `4. Reinsira a bobina no sentido correto (formato da letra 'P' ou 'puxando no sentido anti-horário').`,
        `5. Ao reiniciar o bordado, segure a ponta da linha superior nos primeiros 4 pontos e corte a sobra rente.`
      ],
      preventiveAdvice: `Crie o hábito sagrado: NUNCA passe a linha com o calcador abaixado. Calcador para cima = discos abertos para receber a linha!`,
      recommendedSettings: {
        tension: "Superior em 3.2 a 3.8; Bobina 20g a 24g",
        needle: "75/11 Organ ou Schmetz",
        speed: "650 PPM"
      },
      artreladosTip: `Dica Artrelados: Quando embolar embaixo, o problema é 95% das vezes EM CIMA. Verifique sempre o estica-fio antes de mexer na bobina!`
    };
  }

  // 3. Linha superior quebrando com frequência
  if (
    p.includes("quebrando") ||
    p.includes("arrebenta") ||
    p.includes("arrebentando") ||
    p.includes("desfia") ||
    p.includes("desfiando") ||
    p.includes("sensor apita") ||
    p.includes("linha quebra")
  ) {
    return {
      title: `Diagnóstico: Quebra Recorrente ou Desfiamento da Linha Superior`,
      category: "Linhas & Agulhas",
      severity: "Alta",
      summary: `A linha de bordado está sofrendo atrito mecânico excessivo ou tensão além da resistência do poliéster 120/2. Em conjunto com ${fabricLabel}, isso interrompe a produção e gera falhas visíveis.`,
      probableCauses: [
        `Olho da agulha com micro-fissura ou rebarba cortante de fábrica ou por impacto prévio.`,
        `Linha enroscando na base do carretel, na rede de proteção ou na ranhura do carretel plástico.`,
        `Tensão da linha superior excessivamente esticada (acima de 4.5).`,
        `Linha ressecada por exposição prolongada a calor, luz solar ou poeira.`,
        `Uso de agulha de costura comum (ponta lança) em vez de agulha própria para bordado computadorizado (olho alongado).`
      ],
      stepByStepSolution: [
        `1. Substitua a agulha por uma nova agulha específica para bordado 75/11 ou 80/12 com olho polido.`,
        `2. Verifique o cone de linha: use redinha protetora se a linha estiver caindo sob a base do carretel.`,
        `3. Reduza a tensão da linha superior em 0.5 ponto e faça um teste num retalho com ${fabricLabel}.`,
        `4. Se a linha for metalizada (ouro/prata), borrife silicone líquido na lateral do cone e reduza a velocidade para 500 PPM.`,
        `5. Limpe os discos de tensão passando um fio dental não encerado ou retalho de entretela dobrado entre eles.`
      ],
      preventiveAdvice: `Armazene seus cones de linha em caixas organizadoras fechadas. Linha de bordado dura anos se protegida da umidade e raios UV.`,
      recommendedSettings: {
        needle: "Organ 75/11 DBxK5 ou 130/705 H-E",
        tension: "Superior calibrada entre 2.8 e 3.4",
        speed: "600 a 700 PPM"
      },
      artreladosTip: `Dica Artrelados: Faça o teste do puxão: com o calcador abaixado, puxe a linha na agulha. Ela deve deslizar com uma resistência suave e contínua, semelhante a puxar fita adesiva de um rolo.`
    };
  }

  // 4. Tecido repuxando / enrugando / franzindo (Puckering)
  if (
    p.includes("repuxa") ||
    p.includes("repuxando") ||
    p.includes("enrugado") ||
    p.includes("franzido") ||
    p.includes("franzindo") ||
    p.includes("deforma") ||
    p.includes("deformando") ||
    p.includes("ondulado")
  ) {
    return {
      title: `Diagnóstico: Efeito Repuxado / Enrugamento do Tecido (Puckering)`,
      category: "Bastidor & Programação",
      severity: "Média",
      summary: `O tecido ${fabricLabel} está sofrendo contração mecânica causada pela força de tração dos pontos da matriz associada a uma estabilização insuficiente no bastidor da ${machineLabel}.`,
      probableCauses: [
        `Uso de entretela inadequada para ${fabricLabel} (ex: usar entretela de rasgar fina em malha ou tecido com elastano).`,
        `Tecido esticado excessivamente na hora de fechar o bastidor (ao soltar do bastidor, o tecido volta ao tamanho normal e enruga o bordado).`,
        `Densidade de pontos excessivamente alta na matriz (pontos muito colados uns nos outros, abaixo de 0.35mm).`,
        `Falta de subponto (Underlay) estrutural para ancorar o tecido antes dos pontos cheios ou tatami.`
      ],
      stepByStepSolution: [
        `1. Ao colocar ${fabricLabel} no bastidor, NUNCA puxe as bordas do tecido para esticar. O tecido deve repousar liso, como se estivesse sobre uma mesa, sem tensão elástica.`,
        `2. Se o tecido tiver elasticidade (malha, piquet, dry-fit), use OBRIGATORIAMENTE entretela de recorte (Cutaway) com gramatura de 80g a 200g, ou duas camadas de entretela rasga-fácil cruzadas a 90°.`,
        `3. No software de matrizes, ajuste a densidade do ponto cheio (satin) para 0.40mm e tatami para 0.42mm.`,
        `4. Insira um subponto tatami ou zigue-zague leve para travar o tecido antes do preenchimento principal.`
      ],
      preventiveAdvice: `A regra de ouro: tecidos estáveis (algodão plano, sarja, brim) usam entretela rasga-fácil; tecidos com elasticidade exigem entretela de recorte permanente.`,
      recommendedSettings: {
        stabilizer: f.includes("malha") ? "Entretela Recorta (Cutaway) 100g/m²" : "Entretela Rasga Fácil 80g",
        needle: "75/11 Ponta Bola (SES/SUK)",
        tension: "Superior mais solta (2.8 a 3.2)"
      },
      artreladosTip: `Dica Artrelados: Use cola temporária em spray (505 ou similar) para colar o tecido na entretela antes de bastidorar. Isso elimina 90% dos enrugamentos!`
    };
  }

  // 5. Linha da bobina aparecendo por cima (pontinhos brancos em cima)
  if (
    p.includes("linha de baixo") ||
    p.includes("bobina aparecendo") ||
    p.includes("linha branca aparecendo") ||
    p.includes("pontos brancos") ||
    p.includes("bobina em cima")
  ) {
    return {
      title: `Diagnóstico: Desequilíbrio de Tensão - Linha de Bobina Subindo ao Topo`,
      category: "Tensão & Caixilho",
      severity: "Média",
      summary: `A linha inferior (bobina) está sendo puxada para a face superior do bordado em sua ${machineLabel}, criando pontinhos brancos indesejados nas bordas dos pontos cheios e letras.`,
      probableCauses: [
        `Tensão da linha superior muito mais forte do que a tensão da caixa de bobina.`,
        `Mola de tensão da caixa de bobina frouxa ou com fiapo de poeira alojado sob a lâmina metálica.`,
        `Bobina enrolada de forma fofa, desigual ou com linha de espessura incompatível (o ideal é linha de bobina 60wt ou 150D/2).`
      ],
      stepByStepSolution: [
        `1. Retire a caixa de bobina e limpe com um papel rígido (ex: cartão de visita) por baixo da lâmina metálica da mola de tensão para remover fiapos acumulados.`,
        `2. Se a bobina estiver muito solta, dê um aperto de 1/8 de volta (no sentido horário) no pequeno parafuso da mola da caixa de bobina.`,
        `3. Reduza a tensão da linha superior no painel ou botão seletor de 4.0 para cerca de 3.2 a 3.4.`,
        `4. Faça o teste clássico da coluna 'I' ou ponto cheio de 5mm: no avesso do tecido, a linha superior deve ocupar 1/3 em cada lateral e a linha branca da bobina exatamente 1/3 no centro.`
      ],
      preventiveAdvice: `Use bobinas pré-bobinadas com linha 100% filamento contínuo de poliéster 60wt para manter a tensão milimetricamente constante do início ao fim do cone.`,
      recommendedSettings: {
        tension: "Towa Gauge: Superior 110-130gf | Bobina 20-25gf",
        needle: "75/11 Organ",
        speed: "650 PPM"
      },
      artreladosTip: `Dica Artrelados: A regra de 1/3 no avesso: olhe as costas de uma letra bordada. Você deve ver: 1/3 de cor à esquerda, 1/3 de branco no meio e 1/3 de cor à direita. Perfeição pura!`
    };
  }

  // 6. Deslocamento de contorno / Registro fora de lugar (Registration Shift)
  if (
    p.includes("contorno fora") ||
    p.includes("desalinhado") ||
    p.includes("fora do lugar") ||
    p.includes("deslocamento") ||
    p.includes("matriz andou") ||
    p.includes("abriu vão") ||
    p.includes("vão branco")
  ) {
    return {
      title: `Diagnóstico: Deslocamento de Registro (Contorno Fora do Preenchimento)`,
      category: "Bastidor & Programação",
      severity: "Alta",
      summary: `O contorno do bordado não está coincidindo com o preenchimento de fundo em ${fabricLabel}, deixando espaços em branco ou sobreposições tortas.`,
      probableCauses: [
        `Falta de Compensação de Encolhimento (Pull Compensation) programada na matriz para compensar a tração dos fios.`,
        `Bastidor com aperto insuficiente, permitindo que o tecido deslize milimetricamente a cada batida da agulha.`,
        `O bastidor esbarrou fisicamente em algum obstáculo na mesa ou no braço livre da ${machineLabel}.`,
        `Ordem de bordado inadequada (bordar contornos muito tempo depois de preenchimentos extensos).`
      ],
      stepByStepSolution: [
        `1. Verifique se o bastidor está firmemente parafusado e sem folgas no engate do pantógrafo da ${machineLabel}.`,
        `2. Aplique entretela de maior estabilidade (ou duas folhas) para impedir a movimentação do tecido sob a agulha.`,
        `3. No programa de bordado, aumente o Pull Compensation dos preenchimentos para +0.30mm a +0.40mm.`,
        `4. Certifique-se de que o contorno sobreponha a borda do preenchimento em no mínimo 0.8mm a 1.0mm.`,
        `5. Desobstrua a área ao redor da máquina para que o braço do bastidor tenha movimento livre total em 360°.`
      ],
      preventiveAdvice: `Escolha sempre o menor bastidor que acomode a matriz com segurança. Bastidores grandes em matrizes pequenas aumentam a flexão do tecido no centro.`,
      recommendedSettings: {
        stabilizer: "Entretela pesada 80g a 120g",
        speed: "600 PPM",
        needle: "75/11"
      },
      artreladosTip: `Dica Artrelados: Para tecidos desafiadores, adicione uma moldura de alinhavo prévio (basting stitch) ao redor de todo o desenho antes de iniciar o bordado!`
    };
  }

  // 7. Pulos de ponto / Ponto falhando / Faltando ponto
  if (
    p.includes("pulo de ponto") ||
    p.includes("pulando ponto") ||
    p.includes("ponto falha") ||
    p.includes("falhando ponto") ||
    p.includes("pontos soltos") ||
    p.includes("não laçou")
  ) {
    return {
      title: `Diagnóstico: Pulos de Ponto (Skipped Stitches) / Falha no Laçamento`,
      category: "Linhas & Agulhas",
      severity: "Média",
      summary: `A laçadeira da ${machineLabel} não está capturando o laço da linha na agulha no momento exato do ciclo, gerando pontos abertos ou fios flutuantes sobre o tecido ${fabricLabel}.`,
      probableCauses: [
        `Agulha torta, rombuda ou colocada na altura errada no bloco de fixação.`,
        `Ponto de penetração da agulha com tecido 'flutuando' por falta de calcador bem regulado (efeito flag/bandeiramento).`,
        `Sincronismo entre o bico da laçadeira e a cava da agulha milimetricamente desregulado.`,
        `Tecido muito espesso ou elástico fazendo o laço colapsar antes do bico da laçadeira passar.`
      ],
      stepByStepSolution: [
        `1. Troque a agulha por uma nova e empurre-a até o fim do curso no bloco antes de apertar o parafuso.`,
        `2. Verifique a altura do calcador: quando a agulha atinge o ponto mais baixo, o calcador deve pressionar levemente o tecido contra a chapa, impedindo que o tecido suba junto com a agulha.`,
        `3. Se estiver bordando materiais elásticos ou felpudos em ${fabricLabel}, use filme solúvel por cima e entretela firme por baixo.`,
        `4. Reduza a velocidade de bordado para 550 PPM para dar mais estabilidade à formação do laço de linha.`
      ],
      preventiveAdvice: `Evite bordar com agulhas universais de costura; use sempre agulhas especiais de bordado (sistema DBxK5 ou 130/705 H-E) que possuem cava mais profunda para a laçadeira.`,
      recommendedSettings: {
        needle: "Agulha com cava profunda (Deep Scarf) 75/11 ou 80/12",
        speed: "550 a 600 PPM",
        tension: "Superior 3.2"
      },
      artreladosTip: `Dica Artrelados: Se o pulo de ponto ocorre apenas em pontos longos ou em saltos de cor, confira se o sensor de corte ou a tesoura automática não deixou o rabicho inicial muito curto!`
    };
  }

  // 8. Diagnóstico Geral Inteligente Personalizado para qualquer outro sintoma
  return {
    title: `Diagnóstico Técnico da Oficina Artrelados: Análise de Defeito em ${machineLabel}`,
    category: "Mecânica & Ajustes",
    severity: "Média",
    summary: `Analisamos os sintomas relatados ("${problem}") no contexto de trabalho com ${fabricLabel} na ${machineLabel}. Para sanar essa ocorrência e reestabelecer o padrão ótimo de pontos, siga a sequência técnica recomendada abaixo:`,
    probableCauses: [
      `Variação na estabilização do material (${fabricLabel}) em relação à densidade da matriz.`,
      `Agulha com desgaste de ponta ou leve desvio de alinhamento com a chapa de ponto.`,
      `Passagem de linha com atrito nos discos superiores ou acúmulo de pó têxtil na caixa de bobina.`,
      `Velocidade de trabalho descalibrada para o tipo de linha e ponto executado.`
    ],
    stepByStepSolution: [
      `1. Procedimento de Zeramento: Pare a máquina, corte as linhas e retire o bastidor.`,
      `2. Substitua a agulha por uma nova adequada para ${fabricLabel} (tamanho 75/11 ou 80/12 de bordado).`,
      `3. Faça a limpeza rápida da caixa de bobina retirando fiapos e partículas de linha com pincel.`,
      `4. Repasse a linha superior com o calcador levantado, certificando-se do encaixe no estica-fio.`,
      `5. Ajuste a velocidade para 600 PPM na sua ${machineLabel} e execute um teste padrão de 1.000 pontos em retalho com entretela correspondente.`
    ],
    preventiveAdvice: `A manutenção diária (limpeza de fiapos e lubrificação da laçadeira com 1 gota de óleo mineral branco apropriado) previne 95% das falhas operacionais.`,
    recommendedSettings: {
      needle: f.includes("malha") ? "75/11 SUK Ponta Bola" : "75/11 ou 80/12 Universal Bordado",
      stabilizer: f.includes("malha") ? "Entretela Recorta 80g+" : "Entretela Rasga Fácil 60g a 80g",
      speed: "600 PPM",
      tension: "Superior entre 3.0 e 3.6 | Bobina ~22g"
    },
    artreladosTip: `Dica Artrelados: Anote a combinação que funcionou para cada tecido em seu caderno de ateliê: tipo de agulha, entretela e velocidade. Isso vira o seu manual de excelência!`
  };
}

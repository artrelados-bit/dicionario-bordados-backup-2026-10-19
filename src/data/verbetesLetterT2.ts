import { Verbete } from "../types";

export const VERBETES_LETTER_T2: Verbete[] = [
  {
    id: "triple-run-stitch-ponto-triplo",
    code: "T-009",
    letter: "T",
    term: "Triple Run Stitch (Ponto Triplo / Bean Stitch)",
    pronunciation: "trí-pol rãn istítxi (pon-to trí-plo / bin istítxi)",
    level: "Iniciante 🟢",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Locução substantiva técnica (do inglês triple run stitch).",
    origin: "Originário da costura tradicional de reforço e do ponto de sela. No bordado eletrônico, foi batizado de Triple Run ou Bean Stitch por avançar, retroceder e avançar a cada passo, criando um relevo encorpado como um pequeno grão de feijão.",
    summary: "Ponto de contorno linear executado com três passadas de agulha sobre o mesmo trajeto (avança, recua e avança), garantindo espessura e destaque sem virar ponto cheio.",
    definition: "O Triple Run Stitch (também denominado Ponto Triplo, Bean Stitch ou Ponto Grão) é uma estrutura linear de costura em que a máquina executa um ciclo de três penetrações para cada segmento: a agulha avança um ponto, retrocede exatamente sobre a perfuração anterior e avança novamente para a posição seguinte. Esse movimento triplica a quantidade de linha em cada ponto, gerando um contorno grosso, nítido, resistente e de alto relevo, sem a largura lateral de um ponto cheio (satin).",
    technicalDetails: "O comprimento padrão do ponto triplo varia entre 2,5 mm e 3,5 mm. Comprimentos inferiores a 2,0 mm acumulam 6 a 9 penetrações em um espaço milimétrico, o que pode picotar o tecido e cortar as fibras. O Triple Run gera o triplo de pontos de um ponto corrido simples (Run Stitch) para a mesma distância linear, mas sua estabilidade mecânica e visibilidade em tecidos texturizados são insuperáveis.",
    beginnerExplanation: "É uma costurinha bem reforçada que a máquina faz indo pra frente, voltando pra trás e indo pra frente de novo no mesmo lugar. O traço fica grossinho e bem marcado, perfeito para desenhar detalhes de rostos ou contornos de bichinhos fofos sem precisar de ponto cheio.",
    howItWorks: [
      "1. A agulha penetra na posição A e avança até a posição B (passo 1: frente).",
      "2. A agulha recua da posição B e penetra novamente na posição A (passo 2: trás).",
      "3. A agulha avança da posição A até ultrapassar B e fixar na posição C (passo 3: frente).",
      "4. O ciclo se repete continuamente ao longo de toda a trajetória do vetor.",
      "5. O resultado é uma linha grossa, contínua e com leve relevo tátil."
    ],
    applications: [
      "Contornos de olhos, bocas, bigodes e expressões faciais em matrizes infantis.",
      "Costuras decorativas imitando pesponto manual em estilo country ou redwork.",
      "Contorno final de apliques bordados sobre tecidos finos.",
      "Linhas finas que precisam se destacar sobre tecidos felpudos ou malhas piquet."
    ],
    characteristics: [
      "Alta visibilidade e espessura com trajeto estritamente linear.",
      "Resistência máxima à tração e lavagem (não arrebenta com facilidade).",
      "Toque rústico, artesanal e com acabamento premium."
    ],
    commonErrors: [
      "❌ Usar comprimento de ponto muito curto (< 1,8 mm), transformando o ponto triplo em uma broca que fura o tecido.",
      "❌ Aplicar em curvas extremamente fechadas e pontiagudas sem suavizar os nós, entupindo a laçadeira com nós de linha.",
      "❌ Usar linha de baixa qualidade ou muito grossa (ex: 30 wt) sem reduzir a tensão, provocando quebra contínua."
    ],
    troubleshootingTips: [
      "Tecido furando ou rasgando nas curvas: aumente o comprimento de ponto para 3,0 mm e suavize os cantos no software.",
      "Linha quebrando constantemente: diminua ligeiramente a tensão da linha superior e verifique se a ponta da agulha não está rombuda.",
      "Ponto parecendo ralo: certifique-se de que selecionou Triple Run e não Run Stitch simples com repetição de objeto."
    ],
    dicaArtrelados: "Para dar aquele ar 'feito à mão' super sofisticado em almofadas e enxovais, use o Ponto Triplo com comprimento de 3,2 mm e linha fosca de algodão ou poliéster opaco. O desenho fica nítido e parece bordado livre à mão!",
    voceSabia: "Nas fábricas de jeanswear e estofados automotivos, o ponto triplo é utilizado nas costuras externas por ser até 300% mais resistente ao atrito do que a costura reta convencional.",
    practicalExercise: "Desenhe o contorno de uma folha no seu software de matrizes. Configure como Ponto Triplo com comprimento de 3,0 mm. Borde em um retalho de sarja e sinta o relevo e a firmeza da linha.",
    quickSummary: "Ponto linear reforçado com três passadas de agulha sobre o mesmo trajeto (avança-recua-avança), ideal para contornos destacados e expressões delicadas.",
    relatedTerms: ["Run Stitch", "Backstitch", "Ponto Cheio", "Redwork", "Bean Stitch"],
    tags: ["triple run", "ponto triplo", "bean stitch", "contorno", "redwork"]
  },
  {
    id: "tacking-stitch-ponto-de-fixacao-de-aplique",
    code: "T-010",
    letter: "T",
    term: "Tacking Stitch (Ponto de Fixação de Aplique)",
    pronunciation: "tá-king istítxi (pon-to de fi-xa-ção de a-pli-que)",
    level: "Iniciante 🟢",
    category: "Técnicas Especiais & Apliques",
    grammarClass: "Locução substantiva técnica (do inglês tacking stitch).",
    origin: "Termo herdado da costura manual (alinhavo de fixação) e adaptado para a sequência obrigatória de 3 etapas do bordado de aplique computadorizado.",
    summary: "Etapa de costura intermediária que prende firmemente o retalho de tecido de aplique sobre o tecido base antes do corte do excesso.",
    definition: "O Tacking Stitch (ou Ponto de Fixação / Tackdown) é a segunda costura na sequência padrão de bordado em aplique. Após a marcação do contorno na entretela (Placement Stitch) e a colocação do tecido sobre a área, a máquina executa o Tacking Stitch para prender o retalho com firmeza, permitindo que a operadora retire o bastidor da máquina (ou pause) e recorte o excesso de tecido bem rente à linha antes do acabamento final em ponto cheio ou festonê.",
    technicalDetails: "O tacking stitch pode ser executado em ponto corrido simples reforçado, ponto zig-zag leve ou ponto e-stitch (ponto manta). O comprimento ideal de ponto varia de 2,5 mm a 3,0 mm. A distância entre o tacking stitch e a borda final do acabamento deve ser de 0,5 mm a 1,0 mm para garantir que o corte da tesoura pelicano não danifique os pontos e que a cobertura final oculte completamente a margem crua.",
    beginnerExplanation: "É a costura que 'prende' o pedacinho de tecido do aplique no lugar certo da toalha ou da fralda. Depois que ela costura, a gente pega a tesoura curva e corta todo o tecido que sobrou em volta bem pertinho da linha.",
    howItWorks: [
      "1. A máquina faz o ponto de posicionamento indicando onde o aplique deve ser colocado.",
      "2. A máquina para e a bordadeira cobre a área com o tecido escolhido.",
      "3. A máquina executa o Tacking Stitch, costurando e fixando o tecido com precisão.",
      "4. A máquina para novamente com comando STOP para que o excesso de tecido seja recortado.",
      "5. A máquina retoma para aplicar o ponto de cobertura final (satin ou caseado)."
    ],
    applications: [
      "Fixação de retalhos de tricoline, plush, feltro e tecidos estampados em matrizes de aplique.",
      "Fixação de entretelas estruturais temporárias ou reforços em bolsas e sapatos.",
      "Ancoragem de materiais especiais como plástico vinil translúcido e glitter têxtil.",
      "Matrizes de patchwork in the hoop (feitas direto no bastidor)."
    ],
    characteristics: [
      "Costura precisa que delimita a margem de corte com total segurança.",
      "Impede que o retalho de aplique se mova ou enrugue durante o corte.",
      "Gera uma parada automática programada (Stop / Pause) no arquivo de bordado."
    ],
    commonErrors: [
      "❌ Cortar o tecido de aplique antes da execução do tacking stitch, fazendo com que o tecido desalinhe.",
      "❌ Recortar longe demais da linha de fixação, deixando pontas de tecido desfiando para fora do ponto cheio.",
      "❌ Recortar perto demais a ponto de cortar a própria linha do tacking stitch, soltando o aplique na lavagem."
    ],
    troubleshootingTips: [
      "Tecido do aplique escapando nas pontas: aumente a largura do ponto de fixação para um zig-zag leve de 1,5 mm de largura.",
      "Margem de tecido aparecendo fora do acabamento: use tesoura bico de pato (pelicano) e corte a 1 mm da linha do tacking stitch.",
      "Máquina não parando após a fixação: insira o comando de parada (Stop ou troca de cor de segurança) no software de matrizes."
    ],
    dicaArtrelados: "Para apliques perfeitos que não desfiam nem depois de 100 lavagens, use o Tacking Stitch em ponto zig-zag estreito (largura de 1,2 mm) e passe termocolante definitivo no avesso do retalho antes de posicionar no bastidor!",
    voceSabia: "Em matrizes industriais de alta velocidade, o Tacking Stitch é chamado de 'Tackdown' e é calculado para ser executado a 900 PPM sem puxar as bordas do tecido cortado a laser.",
    practicalExercise: "Crie uma matriz simples de aplique de estrela com as 3 etapas clássicas: 1) Placement (Ponto de Guia), 2) Tacking Stitch (Fixação) e 3) Satin de Cobertura. Borde uma amostra cortando o excesso com a tesoura pelicano.",
    quickSummary: "Costura intermediária que prende o retalho de tecido no aplique antes do corte rente, essencial para um acabamento perfeito e sem desfiados.",
    relatedTerms: ["Placement Stitch", "Aplique", "Tesoura Bico de Pato", "Stop Command", "Festonê"],
    tags: ["tacking stitch", "fixacao", "aplique", "tackdown", "patchwork"]
  },
  {
    id: "tie-in-arremate-de-entrada-trava-inicial",
    code: "T-011",
    letter: "T",
    term: "Tie-In (Arremate de Entrada / Trava Inicial)",
    pronunciation: "tái-in (ar-re-ma-te de en-tra-da / tra-va i-ni-ci-al)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino técnico (do inglês tie-in).",
    origin: "Desenvolvido na engenharia de software de bordado computadorizado para ancorar a linha no tecido logo após o corte ou início de um novo bloco de costura, evitando que a ponta da linha escape da agulha.",
    summary: "Sequência de 3 a 5 micro-pontos de segurança dados no exato início de um objeto para travar a linha superior com a da bobina.",
    definition: "O Tie-In (também conhecido como Arremate de Entrada, Trava Inicial ou Ponto de Amarração Inicial) é uma rotina automática de nós digitais gerada pelo software ou pela máquina de bordar antes de iniciar o desenho propriamente dito. Consiste em uma série rápida de 3 a 5 pontos minúsculos (comprimento de 0,5 mm a 1,0 mm) costurados em padrão de estrela, vai-e-vem ou ponto sobre ponto, que entrelaçam a linha superior com a linha da bobina, ancorando o fio com segurança contra trações mecânicas.",
    technicalDetails: "Existem três padrões principais de Tie-In: 1) Two-Way / Line (vai-e-vem sobre a linha de início), 2) Star / Cross (pontos em cruz de alta ancoragem) e 3) In-Place (pontos no mesmo orifício). O comprimento dos micropontos não deve ser inferior a 0,4 mm para evitar que a agulha perfure e quebre a linha no mesmo buraco. Em objetos com subponto (underlay), o Tie-In deve ser posicionado sob a área de cobertura futura.",
    beginnerExplanation: "É o 'nózinho invisível' que a máquina dá no comecinho de cada pedaço do bordado. Ela dá uns pontinhos bem pequenininhos e rápidos para a linha não escapar da agulha e o bordado não desmanchar quando a máquina começar a correr.",
    howItWorks: [
      "1. O pantógrafo se posiciona na coordenada inicial do objeto.",
      "2. A agulha desce com a ponta da linha livre deixada pelo corte anterior.",
      "3. A máquina executa de 3 a 5 micropontos muito próximos, laçando a bobina com firmeza.",
      "4. A tensão se estabiliza e a máquina acelera para a velocidade normal de produção.",
      "5. O restante do bordado cobre e esconde totalmente esses micropontos iniciais."
    ],
    applications: [
      "Início de qualquer segmento de bordado após um corte de linha (Trim) ou troca de cor.",
      "Início de letras pequenas e detalhes finos que não possuem área de subponto grande.",
      "Bordados em tecidos escorregadios (cetim, tafetá) e malhas com elastano.",
      "Programação de matrizes profissionais para máquinas industriais multi-cabeças."
    ],
    characteristics: [
      "Ancoragem instantânea da linha sem necessidade de puxar a ponta do fio manualmente.",
      "Totalmente imperceptível quando embutido sob o subponto ou ponto cheio.",
      "Previne a 'falsa quebra de linha' e o desfiamento na primeira pontada."
    ],
    commonErrors: [
      "❌ Desativar o Tie-In em letras pequenas para economizar pontos, fazendo com que as primeiras letras desmanchem na primeira lavagem.",
      "❌ Posicionar o Tie-In fora da área de cobertura do desenho, deixando um nó feio e visível no tecido de fundo.",
      "❌ Usar micropontos menores que 0,3 mm, causando acúmulo de linha e quebra da agulha logo na largada."
    ],
    troubleshootingTips: [
      "Linha escapando da agulha no início de cada cor: certifique-se de que o Tie-In está ativado e aumente a quantidade de micropontos de 3 para 5.",
      "Nó grosso visível no início da letra: mude o estilo do Tie-In de 'Star' (estrela) para 'Line' (linear dentro do eixo da coluna).",
      "Primeiro ponto solto ou com laço grande no avesso: regule a mola recuperadora (check spring) da máquina."
    ],
    dicaArtrelados: "No Wilcom ou no seu software favorito, configure o Tie-In para o estilo 'No início do subponto' (Underlay Start). Assim, a máquina trava a linha bem no meio do desenho e a cobertura de ponto cheio cobre tudo. Fica 100% limpo!",
    voceSabia: "Se uma máquina industrial der 1000 cortes de linha por hora e não tiver Tie-In calibrado, ela perderá em média 20 minutos de produção por turno recolocando linha nas agulhas.",
    practicalExercise: "Abra uma matriz no seu programa e insira uma letra 'A' de 25 mm. Vá nas propriedades de conectores e alterne o Tie-In entre 'Desativado', 'Linha' e 'Cruz'. Simule em câmera lenta para visualizar os micropontos de trava.",
    quickSummary: "Sequência de micropontos executada no início de cada objeto para ancorar firmemente a linha superior à bobina, evitando que o bordado desmanche.",
    relatedTerms: ["Tie-Off", "Trim", "Conectores", "Subponto", "Arremate"],
    tags: ["tie-in", "arremate", "trava inicial", "seguranca", "conectores"]
  },
  {
    id: "tie-off-arremate-de-saida-trava-final",
    code: "T-012",
    letter: "T",
    term: "Tie-Off (Arremate de Saída / Trava Final)",
    pronunciation: "tái-ófe (ar-re-ma-te de sa-í-da / tra-va fi-nal)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino técnico (do inglês tie-off).",
    origin: "Desenvolvido na digitalização de matrizes para garantir que a costura permaneça travada e inalterada após a ação mecânica da faca de corte de linha da máquina.",
    summary: "Sequência de 3 a 5 micro-pontos de segurança executados no final de um objeto antes do corte automático de linha para impedir desfiamentos.",
    definition: "O Tie-Off (também conhecido como Arremate de Saída, Trava Final ou Ponto de Amarração Final) é a rotina de encerramento programada antes de um salto (Jump) ou corte de linha (Trim). Consiste em um conjunto de pequenos pontos de travamento executados sob a última coluna de pontos, que bloqueiam o fio superior e inferior. Isso garante que, quando a tesoura ou navalha da máquina cortar a linha por baixo da chapa da agulha, a ponta do fio restante no bordado não se desfaça com o uso ou lavagens.",
    technicalDetails: "Os métodos mais comuns de Tie-Off são o 'Euro' (pontos alternados para a frente e para trás sobre a linha central do objeto), o 'Bowtie' (pequeno laço transversal) e o 'Micro-Stitch' (3 pontos de 0,6 mm). A ausência de Tie-Off é a causa número um de letras bordadas desmancharem pelas pontas após a limpeza com ferro de passar ou uso diário.",
    beginnerExplanation: "É o nó final que a máquina dá quando termina de bordar uma parte do desenho, bem antes de cortar a linha. É o que garante que você pode lavar a peça na máquina de lavar sem medo de o bordado desmanchar.",
    howItWorks: [
      "1. A máquina conclui o último ponto de cobertura do objeto.",
      "2. Em vez de acionar o corte imediatamente, o pantógrafo move a agulha milimetricamente para trás.",
      "3. A agulha executa 3 a 5 pontos de bloqueio sob o próprio corpo do bordado.",
      "4. A faca inferior é engatada, corta a linha rente ao avesso e a máquina salta para o próximo elemento.",
      "5. A ponta cortada permanece presa e protegida dentro do nó do Tie-Off."
    ],
    applications: [
      "Finalização obrigatória de letras, monogramas e textos bordados.",
      "Encerramento de blocos de cor antes de trocas automáticas de carretel.",
      "Bordados em uniformes industriais e roupas de cama que passam por lavagens pesadas.",
      "Contornos finais de apliques e patches antes da retirada do bastidor."
    ],
    characteristics: [
      "Garantia absoluta de durabilidade e integridade estrutural do bordado.",
      "Execução automática e imperceptível na superfície da peça.",
      "Reduz drasticamente o tempo de acabamento manual de limpeza com tesoura."
    ],
    commonErrors: [
      "❌ Cortar a linha manualmente com tesoura rente demais ao bordado sem verificar se havia Tie-Off, desmanchando a última letra.",
      "❌ Configurar o Tie-Off em ponto muito longo (> 1,5 mm), deixando uma ponta de laço solta e feia visível no direito da peça.",
      "❌ Usar Tie-Off agressivo em tecidos muito finos, criando um caroço duro e perceptível ao toque."
    ],
    troubleshootingTips: [
      "Pontas de letras desmanchando após lavar: ative a opção 'Sempre aplicar Tie-Off' (Always Tie-Off) nas configurações globais do software.",
      "Pequenos nós salientes aparecendo na frente: altere o tipo de arremate para 'Euro Tie-Off' que se esconde melhor sob o ponto cheio.",
      "Faca da máquina mastigando a linha sem cortar: certifique-se de que a agulha parou após o Tie-Off antes do acionamento do solenoide de corte."
    ],
    dicaArtrelados: "Para letras bem pequenas (menos de 6 mm), nunca use o arremate tradicional em cruz. Use o 'Half-Stitch Tie-Off' (meio ponto de arremate) com 3 pontinhos alinhados no centro da coluna. Fica perfeito e sem bolinhas visíveis!",
    voceSabia: "Em testes de laboratório têxtil, um bordado com Tie-Off correto resiste a mais de 150 ciclos de lavagem industrial com centrifugação sem perder um único filamento de linha.",
    practicalExercise: "Crie uma palavra com 4 letras no software. No conector da última letra, ative o Tie-Off do tipo Euro. Borde a palavra, puxe a ponta da linha cortada com uma pinça e comprove a força da trava.",
    quickSummary: "Sequência de micropontos de travamento executados no encerramento de cada objeto antes do corte de linha, garantindo durabilidade eterna contra desfiamentos.",
    relatedTerms: ["Tie-In", "Trim", "Navalha de Corte", "Conectores", "Acabamento"],
    tags: ["tie-off", "arremate final", "trava", "durabilidade", "corte"]
  },
  {
    id: "tack-stitch-ponto-de-pesponto-alinhavacao",
    code: "T-013",
    letter: "T",
    term: "Tack Stitch (Ponto de Pesponto / Alinhavação)",
    pronunciation: "ték istítxi (pon-to de pes-pon-to / a-li-nha-va-ção)",
    level: "Iniciante 🟢",
    category: "Estabilização & Bastidores",
    grammarClass: "Locução substantiva técnica (do inglês tack stitch).",
    origin: "Do termo inglês 'tack' (pregar, fixar provisoriamente). Na alfaiataria e no bordado eletrônico, é a costura preliminar rápida usada para segurar camadas antes do trabalho definitivo.",
    summary: "Costura perimetral aberta e temporária (basting) feita ao redor da área de bordado para fixar o tecido sobre a entretela sem prendê-lo no bastidor.",
    definition: "O Tack Stitch (também conhecido como Ponto de Alinhavação, Basting Stitch ou Costura de Bastidor) é uma linha de pontos corridos longos e espaçados (comprimento de 4,0 mm a 6,0 mm) bordada no perímetro do desenho antes do início do trabalho principal. É amplamente utilizado na técnica de 'bordado flutuante' (floating), onde apenas a entretela é presa no bastidor e a peça de roupa é colocada por cima, sendo fixada pelo Tack Stitch sem marcar o tecido com as bordas do aro.",
    technicalDetails: "A velocidade da máquina durante o tack stitch deve ser moderada (500 a 600 PPM) para assegurar o assentamento suave do tecido. Os pontos são propositalmente longos para facilitar sua remoção rápida após o término do trabalho com o uso de um desmanchador de costura (abridor de casas) ou pinça, sem deixar marcas ou furos permanentes nas fibras do tecido.",
    beginnerExplanation: "É um alinhavo bem largo e fácil de tirar que a máquina faz em volta do desenho logo no comecinho. Ele serve para segurar uma toalha grossa, um veludo ou um body de bebê na entretela sem precisar esmagar o tecido no aro do bastidor.",
    howItWorks: [
      "1. A entretela é presa firmemente no bastidor e colocada na máquina.",
      "2. O tecido ou peça de roupa é posicionado e alisado sobre a entretela (com ou sem adesivo temporário).",
      "3. A máquina executa o Tack Stitch com pontos bem longos contornando a área de trabalho.",
      "4. As duas camadas ficam perfeitamente unidas e estáveis sem enrugar.",
      "5. O bordado principal é executado normalmente.",
      "6. Ao final, puxa-se a linha do Tack Stitch, que sai facilmente em um segundo."
    ],
    applications: [
      "Bordado flutuante em tecidos delicados que marcam com o bastidor (veludo, camurça, couro, cetim).",
      "Peças prontas e difíceis de prender (golas, punhos, bolsos, meias e bodys de bebê).",
      "Fixação de plástico hidrossolúvel sobre toalhas felpudas e tecidos atoalhados.",
      "Alinhamento de tecidos com elasticidade em quatro direções."
    ],
    characteristics: [
      "Evita o 'hoop burn' (marcas de esmagamento ou brilho deixadas pelo aro do bastidor).",
      "Fixação segura e uniforme de materiais espessos ou peças tubulares.",
      "Remoção rápida e limpa sem danificar as fibras do tecido."
    ],
    commonErrors: [
      "❌ Usar ponto muito curto (< 2,5 mm), tornando o alinhavo quase impossível de ser removido sem furar a peça.",
      "❌ Posicionar o Tack Stitch muito perto do desenho, fazendo com que o bordado definitivo passe por cima dele e prenda a linha.",
      "❌ Usar cor de linha escura em tecido branco com nós apertados, podendo soltar pigmento ou desfiar a trama ao puxar."
    ],
    troubleshootingTips: [
      "Difícil de puxar a linha no final: aumente o comprimento de ponto para 5,0 mm no software e use uma linha de bobina lisa.",
      "Bordado definitivo cobriu o alinhavo: aumente a margem de afastamento (Offset) do basting para 5 mm a 8 mm longe do desenho.",
      "Tecido enrugou durante a alinhavação: segure levemente as bordas do tecido com as mãos (com cuidado) nos primeiros segundos."
    ],
    dicaArtrelados: "Quando for bordar toalhas felpudas, coloque a entretela por baixo, a toalha no meio e o plástico hidrossolúvel por cima. Mande a máquina fazer o Tack Stitch em volta de tudo! O plástico fica esticadinho e a toalha não se mexe nem um milímetro!",
    voceSabia: "As máquinas de bordar domésticas mais modernas já vêm com um botão dedicado chamado 'Basting' na tela, que gera automaticamente esse retângulo de alinhavação ao redor de qualquer matriz carregada.",
    practicalExercise: "Prenda apenas entretela no seu bastidor. Coloque um retalho de tecido por cima sem colar. Execute o comando de Basting/Tack Stitch a 5 mm do contorno. Sinta como o tecido fica firme como se estivesse no aro.",
    quickSummary: "Costura de alinhavo temporária com pontos longos ao redor do desenho para fixar tecidos flutuantes na entretela e evitar marcas de bastidor.",
    relatedTerms: ["Basting Stitch", "Bordado Flutuante", "Hoop Burn", "Entretela", "Bastidor"],
    tags: ["tack stitch", "alinhavo", "basting", "flutuante", "bastidor"]
  },
  {
    id: "top-stitch-ponto-de-cobertura-superior",
    code: "T-014",
    letter: "T",
    term: "Top Stitch (Ponto de Cobertura Superior)",
    pronunciation: "tóp istítxi (pon-to de co-ber-tu-ra su-pe-ri-or)",
    level: "Intermediário 🟡",
    category: "Pontos Básicos & Decorativos",
    grammarClass: "Locução substantiva técnica (do inglês top stitch).",
    origin: "Termo de alfaiataria para a costura visível na parte superior do tecido, adaptado no bordado computadorizado para designar a camada visível final (satin ou tatami) que fica sobre os subpontos.",
    summary: "Camada externa e visível do bordado que recobre o subponto e o tecido, definindo a cor, a textura, o brilho e o acabamento final.",
    definition: "O Top Stitch (ou Ponto Superior / Camada de Cobertura) é a camada definitiva de pontos de um objeto que repousa sobre a estrutura de suporte (underlay). Enquanto os subpontos têm a função oculta de nivelar e estabilizar, o Top Stitch é o responsável exclusivo pela aparência visual, reflexo da luz, definição estética e sensação tátil da peça. Ele pode ser configurado em ponto cheio (satin), tatami, ponto decorativo ou ponto de cordão.",
    technicalDetails: "A densidade do Top Stitch é calibrada de acordo com a espessura da linha utilizada (geralmente linha 40 wt com espaçamento de 0,38 mm a 0,42 mm). Deve trabalhar em harmonia com a compensação de repuxo (Pull Compensation) e ter seu ângulo cuidadosamente orientado para cruzar a estrutura do subponto em um ângulo de 45° a 90°, garantindo que os pontos superiores 'flutuem' elevados sem afundar na trama.",
    beginnerExplanation: "É a parte de cima do bordado, aquela que todo mundo vê e passa a mão! É a camada bonita de linha colorida que cobre a entretela e os pontos de baixo, dando todo o brilho e o acabamento final.",
    howItWorks: [
      "1. A máquina executa previamente o ponto de suporte (underlay) na entretela.",
      "2. O Top Stitch inicia sua varredura cobrindo totalmente a estrutura interna.",
      "3. As passadas de linha assentam suavemente sobre a malha de subponto, que impede que elas afundem.",
      "4. A tensão equilibrada da linha superior puxa 1/3 da linha para o avesso, mantendo a frente limpa.",
      "5. Revela-se uma superfície lisa, acetinada e com contornos perfeitamente nítidos."
    ],
    applications: [
      "Camada final visível de todas as letras, brasões e elementos em matrizes de bordado.",
      "Pespontos decorativos aparentes em bonés, jaquetas e bolsas de couro.",
      "Acabamento de bordas e monogramas de alto padrão em toalhas e lençóis.",
      "Aplicação de pontos com linhas metálicas ou luminescentes de destaque."
    ],
    characteristics: [
      "Superfície visível brilhante, contínua e de alta definição estética.",
      "Protegida contra o afundamento nas fibras pelo subponto subjacente.",
      "Determina a durabilidade visual e a resistência à abrasão superficial."
    ],
    commonErrors: [
      "❌ Borda de Top Stitch afundando no tecido por falta de subponto adequado por baixo.",
      "❌ Tensão da linha superior frouxa demais, criando laços e nós visíveis no Top Stitch.",
      "❌ Top Stitch paralelo ao subponto, fazendo com que as linhas caiam no mesmo sulco e fiquem com falhas de cobertura."
    ],
    troubleshootingTips: [
      "Linha superior com aspecto fosco ou repuxado: confira se a linha está bem encaixada nos discos de tensão e troque a agulha por uma nova.",
      "Subponto aparecendo pelas laterais do Top Stitch: aumente a compensação de repuxo (Pull Compensation) do Top Stitch em +0,10 mm.",
      "Linha da bobina branca aparecendo no meio do Top Stitch: afrouxe a tensão superior ou aperte a tensão da caixa de bobina."
    ],
    dicaArtrelados: "Para ter aquele brilho de espelho no Top Stitch em ponto cheio, use sempre agulha de ponta fina e certifique-se de que o ângulo do subponto cruza a 90° com o Top Stitch. A linha superior fica suspensa e reflete a luz como seda pura!",
    voceSabia: "A palavra 'Topstitch' na moda surgiu no século XIX para identificar os pespontos externos impecáveis das lapelas dos smokings ingleses feitos na lendária rua Savile Row em Londres.",
    practicalExercise: "Borde duas letras iguais: uma direto no tecido sem subponto e outra com subponto ziguezague sob o Top Stitch. Compare a nitidez, o relevo e o brilho do acabamento das duas letras.",
    quickSummary: "Camada externa visível de pontos que recobre a estrutura interna, responsável pela cor, definição estética, brilho e textura da peça bordada.",
    relatedTerms: ["Underlay", "Satin Stitch", "Tatami", "Densidade", "Pull Compensation"],
    tags: ["top stitch", "cobertura", "acabamento", "brilho", "qualidade"]
  },
  {
    id: "travelling-stitch-ponto-de-deslocamento-oculto",
    code: "T-015",
    letter: "T",
    term: "Travelling Stitch (Ponto de Deslocamento Oculto)",
    pronunciation: "tré-ve-ling istítxi (pon-to de des-lo-ca-men-to o-cul-to)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva técnica (do inglês travelling stitch).",
    origin: "Técnica de digitalização profissional criada para evitar cortes desnecessários de linha (trims) e conexões feias por cima do tecido, conduzindo a agulha por baixo de áreas que serão bordadas depois.",
    summary: "Trajeto de pontos corridos planejado estrategicamente para viajar por baixo de elementos futuros, eliminando cortes de linha e economizando tempo de máquina.",
    definition: "O Travelling Stitch (também denominado Ponto de Percurso Oculto, Caminhamento Interno ou Ponto de Deslocamento) é uma técnica avançada de sequenciamento em que o digitalizador insere pontos corridos simples (Running Stitches) para deslocar a agulha do final de um objeto até o início do próximo, fazendo esse trajeto exclusivamente por dentro de áreas que serão posteriormente cobertas por outros pontos. Com isso, elimina-se o corte de linha (Trim) e o salto (Jump), mantendo o avesso e a frente limpos sem fios soltos.",
    technicalDetails: "O comprimento dos pontos de deslocamento deve ser de 2,5 mm a 3,5 mm com tensão regular. Se o caminho passar por uma área vazia de tecido antes de chegar ao próximo objeto, o travelling stitch não pode ser usado (deve-se usar corte ou salto). O software deve calcular a ordem de camadas para que o objeto de cobertura seja bordado rigorosamente após o término do travelling stitch.",
    beginnerExplanation: "É como pegar um 'túnel secreto' por baixo do desenho. Em vez de a máquina parar, cortar a linha e dar um nó novo para ir pro outro lado, ela vai costurando escondidinha por baixo de um desenho que vai ser bordado depois, sem ninguém ver nada.",
    howItWorks: [
      "1. A máquina conclui o primeiro elemento bordado.",
      "2. Em vez de acionar a navalha de corte, a agulha faz pontos corridos caminhando pelo centro do desenho.",
      "3. O trajeto segue exatamente pelo espaço onde haverá um preenchimento futuro da mesma cor.",
      "4. A agulha chega à posição inicial do segundo elemento e inicia a costura sem parar a máquina.",
      "5. Mais tarde, a camada de cobertura tampa totalmente o caminho de deslocamento."
    ],
    applications: [
      "Bordado de letras manuscritas e cursivas conectadas sem cortes intermediários.",
      "Digitalização de matrizes industriais de alta produtividade (redução de 30% no tempo de ciclo).",
      "Matrizes de emblemas e brasões com muitos detalhes da mesma cor.",
      "Prevenção de nós e pontas de linha soltas no avesso de roupas de contato com a pele."
    ],
    characteristics: [
      "Economia expressiva de tempo de máquina e menor desgaste das facas de corte.",
      "Frente e avesso extremamente limpos sem pontas de linha para limpar com tesoura.",
      "Fluxo de bordado contínuo e silencioso em alta velocidade."
    ],
    commonErrors: [
      "❌ Passar o travelling stitch por cima de tecido exposto ou sob objetos que terão preenchimento aberto/transparente, deixando o traço visível.",
      "❌ Esquecer a ordem de camadas e bordar o elemento de cobertura antes do travelling stitch, fazendo a linha de caminhamento passar por cima do bordado pronto.",
      "❌ Fazer pontos de deslocamento muito longos (> 5 mm) que possam ser fisgados pela agulha na costura da cobertura."
    ],
    troubleshootingTips: [
      "Linha de caminhamento aparecendo sob a cobertura: centralize melhor o trajeto no meio do objeto e aumente ligeiramente a densidade da camada de cobertura.",
      "Bordado ficando grosso no trajeto: reduza para uma passada única de ponto corrido com comprimento de 3,0 mm.",
      "Máquina ainda cortando a linha entre os objetos: desative a propriedade de corte automático (Trim) nos conectores entre os dois objetos no software."
    ],
    dicaArtrelados: "O segredo de um digitalizador profissional é olhar para a matriz e pensar: 'Como posso bordar todas as partes da mesma cor com o menor número de cortes possível?'. Usar o Travelling Stitch com inteligência faz uma matriz de 15 minutos ser bordada em apenas 10 minutos!",
    voceSabia: "Em matrizes industriais para bonés, cada corte de linha eliminado economiza cerca de 6 a 8 segundos. Em uma produção de 10.000 peças, isso representa mais de 16 horas de máquina economizadas!",
    practicalExercise: "Abra um arquivo com duas letras 'O' da mesma cor separadas por 15 mm, com um retângulo de fundo entre elas. Desenhe um ponto corrido conectando as duas letras passando pelo meio do retângulo. Simule a costura e veja a continuidade sem corte.",
    quickSummary: "Técnica de conduzir a agulha por dentro de áreas que serão cobertas depois, eliminando cortes de linha e tornando a produção muito mais rápida e limpa.",
    relatedTerms: ["Branching", "Sequenciamento", "Trim", "Jump Stitch", "Conectores"],
    tags: ["travelling stitch", "deslocamento", "sequenciamento", "produtividade", "corte"]
  }
];

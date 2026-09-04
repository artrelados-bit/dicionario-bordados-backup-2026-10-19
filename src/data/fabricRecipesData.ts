export interface FabricRecipe {
  id: string;
  fabricName: string;
  category: "Algodão & Planos" | "Malhas & Elásticos" | "Felpudos & Texturizados" | "Delicados & Finos" | "Pesados & Estruturados" | "Especiais & Sintéticos";
  popularExamples: string;
  needleTip: string;
  needleSize: string;
  bottomStabilizer: string;
  topStabilizer: string;
  hoopingAdvice: string;
  tensionAdvice: string;
  speedRecommendation: string;
  underlayAdvice: string;
  commonPitfalls: string;
  artreladosProTip: string;
}

export const FABRIC_RECIPES: FabricRecipe[] = [
  {
    id: "toalha-banho-rosto-felpuda",
    fabricName: "Toalha de Banho / Rosto (Felpa Alta ou Veludo)",
    category: "Felpudos & Texturizados",
    popularExamples: "Toalhas Döhler, Karsten, Buddemeyer, roupões e toalhas de lavabo.",
    needleTip: "Ponta Redonda Normal ou Levemente Esférica (SES / Ball Point)",
    needleSize: "75/11 ou 80/12 H-E",
    bottomStabilizer: "Entretela Rasga-Fácil 60g a 80g (1 camada de boa qualidade)",
    topStabilizer: "Filme Hidrossolúvel (Solvy / Plástico Solúvel em Água de 20 a 35 micras)",
    hoopingAdvice: "Prender a toalha no bastidor sem esticar a trama. Caso a felpa seja muito espessa, use a técnica de bastidor 'flutuante' (prender a entretela no bastidor com fita crepe ou cola temporária spray 505 e assentar a toalha por cima).",
    tensionAdvice: "Tensão superior equilibrada ou 0.3 mais frouxa para os pontos assentarem suavemente sem estrangular a felpa.",
    speedRecommendation: "550 a 650 PPM",
    underlayAdvice: "OBRIGATÓRIO: Subponto Tatami aberto (Net Underlay / Grade) ou Subponto de Contorno duplo para criar uma 'cama' e impedir que os pontos cheios afundem na felpa.",
    commonPitfalls: "Bordar sem o plástico hidrossolúvel por cima faz os pelinhos da toalha brotarem entre os pontos, deixando o bordado com aspecto sujo e desfiado.",
    artreladosProTip: "Após bordar, arranque o excesso do plástico a seco com os dedos; passe um algodão umedecido em água morna ou borrife gotinhas de água para dissolver os cantinhos sem precisar lavar a toalha inteira."
  },
  {
    id: "fralda-bebe-cueiro",
    fabricName: "Fralda de Pano / Cueiro de Bebê (Gaze Dupla ou Crepom)",
    category: "Delicados & Finos",
    popularExamples: "Fraldas Cremer luxo, paninhos de boca, mantas de piquê leve e enxovais.",
    needleTip: "Ponta Bola Fina (SES / Light Ball Point) - NUNCA use ponta cortante ou agulha grossa",
    needleSize: "65/9 ou 70/10 H-E",
    bottomStabilizer: "Entretela Hidrossolúvel de Tecido (Water Soluble Fabric) ou Rasga-Fácil hipoalergênica 40g",
    topStabilizer: "Filme Hidrossolúvel fino (para dar nitidez nas letras pequenas)",
    hoopingAdvice: "Mantenha o bastidor ajustado suavemente. Nunca estique a trama da fralda ao fechar o parafuso, senão ao retirar do bastidor o tecido voltará e o bordado ficará enrugado.",
    tensionAdvice: "Tensão ligeiramente mais solta na linha superior para evitar repuxamento da gaze delicada.",
    speedRecommendation: "500 a 600 PPM",
    underlayAdvice: "Subponto leve de traço central (Center Run). Evite tatami denso para não deixar o bordado duro nas costas e não irritar a pele sensível do recém-nascido.",
    commonPitfalls: "Usar entretela grossa tradicional e deixar o verso áspero; usar agulha grossa (80 ou 90) que abre furos visíveis e permanentes na gaze.",
    artreladosProTip: "Finalize o verso com termocolante protetor de toque suave (tipo 'Cover-a-Stitch' ou 'Protege-Bebê'), uma película ultra macia aplicada com ferro de passar que esconde todas as linhas e protege a pele do bebê."
  },
  {
    id: "malha-camisa-polo-pique",
    fabricName: "Malha Piquet (Camisa Polo Algodão / Poliéster)",
    category: "Malhas & Elásticos",
    popularExamples: "Uniformes empresariais, camisas polo de eventos e escolas.",
    needleTip: "Ponta Bola Média (SUK / Medium Ball Point)",
    needleSize: "75/11 ou 80/12",
    bottomStabilizer: "Entretela de Recorte (Cut-Away) 60g a 80g ou Entretela Malha Termocolante (1 a 2 camadas)",
    topStabilizer: "Geralmente não é necessário, exceto em fontes caligráficas finíssimas (onde uma película solúvel ajuda a nivelar as colmeias da malha).",
    hoopingAdvice: "Encaixar no bastidor sem tracionar a malha. A malha deve descansar plana, sem esticar os alvéolos do piquet.",
    tensionAdvice: "Padrão de fábrica (linha da bobina aparecendo em 1/3 central no verso do ponto cheio).",
    speedRecommendation: "600 a 700 PPM",
    underlayAdvice: "Grade Tatami dupla em 90° (Edge Run + Grid Underlay) com compensação de puxão de no mínimo 0.40mm a 0.45mm na matriz.",
    commonPitfalls: "Usar entretela rasgável comum: com as lavagens sucessivas, a entretela se desfaz e o bordado na polo deforma, encolhe e vira um 'disco voador' abaulado.",
    artreladosProTip: "A entretela Cut-Away (recortável com tesoura de ponta curva ao redor do logo) é a única que garante que o logo da empresa permanecerá perfeitamente plano durante 2 anos de uso e lavagem da camisa polo."
  },
  {
    id: "malha-algodao-tshirt-viscolycra",
    fabricName: "Camiseta de Algodão (T-Shirt) / Malha Fria / Viscolycra",
    category: "Malhas & Elásticos",
    popularExamples: "Camisetas básicas 30.1 penteadas, pijamas, bodies de bebê e croppeds.",
    needleTip: "Ponta Bola Fina (SES / Ball Point)",
    needleSize: "70/10 ou 75/11",
    bottomStabilizer: "Entretela Malha Fusível / Cut-Away leve (40g a 60g)",
    topStabilizer: "Opcional (recomendado em viscolycra para travar a elasticidade).",
    hoopingAdvice: "Técnica do Bastidor com Entretela Pré-Fixada: prenda a entretela no bastidor e cole a camiseta por cima usando fita adesiva de papel nas bordas ou spray reposicionável.",
    tensionAdvice: "Tensão superior moderada; bobina sem folga excessiva.",
    speedRecommendation: "600 PPM",
    underlayAdvice: "Subponto de Contorno (Edge Walk) com densidade mais aberta (0.42mm) para evitar peso e rigidez no peito da camiseta.",
    commonPitfalls: "Prender a camiseta puxando os cantos para 'esticar o tecido': ao desbastonar, a malha encolhe de volta e forma ondas permanentes (puckering severo).",
    artreladosProTip: "Ao programar matrizes para camiseta de algodão, corte de 20% a 30% da densidade em relação a tecidos planos para manter o caimento gostoso da malha no corpo."
  },
  {
    id: "tecido-plano-tricoline-algodao",
    fabricName: "Tricoline 100% Algodão / Popeline / Percal",
    category: "Algodão & Planos",
    popularExamples: "Jogos americanos, panos de prato de luxo, camisaria, almofadas e enxovais de cama.",
    needleTip: "Ponta Universal (R) ou Ponta Levemente Arredondada (SES)",
    needleSize: "75/11 H-E",
    bottomStabilizer: "Entretela Rasga-Fácil 50g a 60g (1 camada para bordados leves; 2 camadas cruzadas para bordados densos)",
    topStabilizer: "Não requer estabilizador superior.",
    hoopingAdvice: "Esticar no bastidor como uma 'pele de tambor': firme, sem folga, com o fio do tecido perfeitamente alinhado em cruz com as marcas do bastidor.",
    tensionAdvice: "Tensão padrão equilibrada (1/3 da bobina no verso).",
    speedRecommendation: "650 a 800 PPM",
    underlayAdvice: "Subponto zigue-zague ou traço duplo com compensação de repuxo padrão de 0.30mm a 0.35mm.",
    commonPitfalls: "Deixar o tecido frouxo no bastidor, fazendo a agulha empurrar o tecido para baixo e desencontrar os contornos.",
    artreladosProTip: "Passe o tecido a ferro antes de colocar no bastidor para tirar qualquer vinco de dobra de gaveta, garantindo um assentamento plano e uniforme."
  },
  {
    id: "jeans-sarja-pesada-jaqueta",
    fabricName: "Jeans (Denim) / Sarja Pesada / Brim Profissional",
    category: "Pesados & Estruturados",
    popularExamples: "Jaquetas jeans, calças, uniformes pesados de oficina, aventais e bolsas.",
    needleTip: "Ponta Aguda Reforçada (Jeans / Denim / Microtex) ou Titânio",
    needleSize: "85/13 ou 90/14 (ou 100/16 em costuras grossas)",
    bottomStabilizer: "Entretela Rasga-Fácil encorpada (80g) ou Cut-Away resistente",
    topStabilizer: "Não requer.",
    hoopingAdvice: "Aperte o parafuso do bastidor com auxílio de chave de fenda (sem forçar para não espanar o plástico). Em locais de costuras grossas, use bastidor magnético ou prenda com grampos para evitar folga.",
    tensionAdvice: "Aumentar levemente a tensão superior (0.3 a 0.5) para firmar os pontos contra a rigidez da sarja.",
    speedRecommendation: "500 a 600 PPM (reduzir velocidade para poupar a barra de agulhas e evitar quebra por aquecimento).",
    underlayAdvice: "Subponto Tatami com ângulo de 45° em relação à trama diagonal do jeans.",
    commonPitfalls: "Bordar com agulha fina (75/11 comum), que entorta na penetração do tecido espesso, bate na laçadeira e arrebenta a linha ou danifica a chapa.",
    artreladosProTip: "Para passar por cima daquela costura central grossa do jeans sem quebrar agulha, borrife um pouquinho de álcool líquido 70% ou umedeça a costura para amaciar temporariamente as fibras na hora do bordado."
  },
  {
    id: "seda-chiffon-organza-cetim",
    fabricName: "Seda Pura / Chiffon / Organza / Cetim",
    category: "Delicados & Finos",
    popularExamples: "Vestidos de noiva, véus, camisolas de luxo, lenços e laços finos.",
    needleTip: "Ponta Aguda Microfina (Microtex / Sharp) ou Ponta Bola Ultrafina",
    needleSize: "60/8 ou 65/9",
    bottomStabilizer: "Entretela Hidrossolúvel de Tecido (Solvy Fabric / Avalon Plus) ou Rasga-Fácil termossolúvel delicada",
    topStabilizer: "Filme solúvel ultrafino (apenas se o tecido for escorregadio).",
    hoopingAdvice: "Bastidor forrado com fita de algodão ou flanela nos aros para evitar deixar a marca do bastidor (queimar o brilho do cetim).",
    tensionAdvice: "Tensão extremamente balanceada e leve.",
    speedRecommendation: "450 a 550 PPM",
    underlayAdvice: "Subponto mínimo (Center Run finíssimo); densidade de ponto cheio reduzida para não cortar o tecido.",
    commonPitfalls: "Agulha com rebarba microscópica ou ponta rombuda puxa fios do cetim, estragando a peça inteira irreversivelmente.",
    artreladosProTip: "SEMPRE troque a agulha por uma 100% zerada da caixinha antes de colocar uma peça de seda ou cetim na máquina."
  },
  {
    id: "couro-sintetico-sintetico-pvc",
    fabricName: "Couro Sintético / Suede / Sintético PVC / Montana",
    category: "Especiais & Sintéticos",
    popularExamples: "Bolsas, carteiras, nécessaires estruturadas, capas de cadernos e chaveiros.",
    needleTip: "Ponta Aguda Normal (Sharp / Microtex) ou Ponta Bola Leve (SES). ATENÇÃO: NUNCA use agulha ponta lança/cortante de couro legítimo em sintético, pois ela corta o vinil e o bordado rasga como picote de papel!",
    needleSize: "80/12 ou 85/13",
    bottomStabilizer: "Entretela Rasga-Fácil 80g ou Entretela de Recorte leve",
    topStabilizer: "Glicerina líquida (1 gotinha passada com algodão sobre a linha) ou filme plástico para o calcador não engripar na superfície aderente.",
    hoopingAdvice: "NUNCA aperte o couro sintético diretamente entre os aros do bastidor comum, pois a marca do bastidor fica cravada para sempre no vinil. Use bastidor magnético ou prenda a entretela no bastidor e cole o sintético com fita crepe nas bordas (bastidor flutuante).",
    tensionAdvice: "Tensão padrão; certifique-se de que a linha deslize suavemente.",
    speedRecommendation: "500 a 600 PPM",
    underlayAdvice: "Evite matrizes com densidade pesada (menos de 0.40mm). O excesso de furos muito próximos corta o sintético como uma folha de cheque destacável.",
    commonPitfalls: "Prender no bastidor e deixar a marca permanente do aro redondo/quadrado; usar densidade exagerada.",
    artreladosProTip: "Se o pé calcador estiver agarrando e freando no sintético, aplique um pedacinho de fita mágica ou teflon embaixo da sola do calcador, ou passe um cotonete levemente umedecido com silicone líquido onde o bordado vai passar."
  },
  {
    id: "bone-estruturado-sarja",
    fabricName: "Boné Estruturado (Sarja / Brim com Entre-tela Frontal Rígida)",
    category: "Pesados & Estruturados",
    popularExamples: "Bonés trucker, aba reta, bonés promocionais 6 gomos.",
    needleTip: "Ponta Aguda Reforçada Titânio (DBxK5 NY2 ou Schmetz Serv 7)",
    needleSize: "80/12 ou 90/14",
    bottomStabilizer: "Entretela Rasga-Fácil para Bonés (pesada 80g a 100g)",
    topStabilizer: "Não requer (exceto em modelos com relevo 3D Puff, onde se usa o EVA sobre o tecido).",
    hoopingAdvice: "Montagem no bastidor cilíndrico de boné (Cap Frame) com cinta metálica de tração bem esticada no perfil do bico do boné.",
    tensionAdvice: "Tensão superior ligeiramente mais firme para abraçar a curvatura.",
    speedRecommendation: "500 a 600 PPM",
    underlayAdvice: "Começar o bordado sempre do centro para as laterais (Center-Out) e de baixo para cima, evitando que a curvatura do boné empurre uma bolha de tecido para a aba.",
    commonPitfalls: "Bordar matriz plana não adaptada para boné (que borda da esquerda para a direita), criando rugas e quebra de agulha na costura central do gomo.",
    artreladosProTip: "Sempre planeje a matriz de boné para costurar 'de baixo para cima e do meio para fora'. Isso empurra o tecido uniformemente contra a base do bastidor sem acumular folgas."
  }
];

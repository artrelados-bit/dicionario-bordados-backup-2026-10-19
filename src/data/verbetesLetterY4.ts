import { Verbete } from "../types";

export const VERBETES_LETTER_Y4: Verbete[] = [
  {
    id: "yield-rate-efficiency-rendimento-producao-atelie",
    code: "Y-009",
    letter: "Y",
    term: "Yield Rate & Operating Efficiency — Taxa de Rendimento Operacional, Produtividade Real e OEE no Ateliê",
    pronunciation: "íild rêit end o-pe-rêi-ting e-fi-xi-en-si — ren-di-men-tu e pro-du-ti-vi-da-de no a-te-li-ê",
    level: "Avançado 🔴",
    category: "Gestão & Produtividade",
    grammarClass: "Substantivo feminina composta.",
    origin: "Da engenharia de produção industrial e metodologia de Eficiência Global dos Equipamentos (Overall Equipment Effectiveness - OEE) aplicada a ateliês e indústrias de bordado computadorizado.",
    summary: "Indicador quantitativo que calcula o tempo real de máquina costurando versus tempo parada, paradas por quebra de linha e custo por milheiro de pontos.",
    definition: "O Yield Rate & Operating Efficiency (Taxa de Rendimento Operacional / Eficiência Global da Máquina / OEE em Bordado / Machine Uptime & Stitch Cost Optimization) é a métrica financeira e de engenharia utilizada para medir a rentabilidade real de um cabeçote ou ateliê de bordado. O índice compara a quantidade teórica de pontos que a máquina deveria produzir pela velocidade nominal (ex.: 850 PPM) com a quantidade real efetivamente faturada e entregue sem defeitos.",
    technicalDetails: "A eficiência real de uma máquina de bordar moderna situa-se tipicamente entre **65% e 80%** do tempo total de turno ligado. As perdas de rendimento são causadas pelas 'Seis Grandes Perdas de Produção': 1) Trocas de bastidor e posicionamento de peças (Hooping Downtime); 2) Paradas de quebra de linha superior ou troca de bobina; 3) Ciclos lentos de corte de linha e trocas automáticas de cor (Color Changes levam de 4 a 8 segundos cada); 4) Redução forçada de velocidade em pontos longos de tatami ou saltos; 5) Peças defeituosas com repuxo ou furos de agulha; e 6) Manutenção preventiva e limpeza de laçadeiras.",
    beginnerExplanation: "É a continha esperta que toda dona de ateliê faz para saber quanto dinheiro a máquina está ganhando de verdade por hora! Mostra quantos minutos a máquina ficou bordando sem parar e quanto tempo a gente perdeu trocando linha, arrumando bastidor ou consertando linhas quebradas, ajudando a cobrar o preço certo dos clientes!",
    howItWorks: [
      "1. A bordadeira anota a contagem inicial do hodômetro de pontos da máquina no início do dia de trabalho.",
      "2. Registra o tempo total em que a máquina ficou ligada (ex.: 8 horas = 480 minutos).",
      "3. A máquina borda diversos lotes de encomendas ao longo do expediente.",
      "4. Ao final do turno, calcula o total de pontos faturados produzidos (ex.: 250.000 pontos).",
      "5. Compara a produção com a capacidade teórica (ex.: 800 PPM x 480 min = 384.000 pontos).",
      "6. Obtém a taxa de rendimento real do ateliê: $\\text{Eficiência} = \\frac{250.000}{384.000} = 65,1\\%$.",
      "7. Aplica melhorias (pré-montagem de bastidores com gabarito) para elevar a eficiência para mais de 75%."
    ],
    applications: [
      "Precificação exata de serviços de bordado com base no custo do milheiro de pontos por hora.",
      "Planejamento de prazos de entrega para grandes lotes corporativos de 100 a 1.000 peças.",
      "Identificação de gargalos no ateliê (se a demora está na máquina ou na montagem do bastidor).",
      "Comparação de produtividade entre máquinas de 1 cabeça e multicabeçotes."
    ],
    characteristics: [
      "Cálculo matemático preciso baseado em dados reais de produção.",
      "Identificação transparente de desperdícios de tempo e custos ocultos.",
      "Fundamento para aumento direto do lucro líquido do negócio de bordados."
    ],
    commonErrors: [
      "❌ Calcular o tempo de entrega dividindo os pontos da matriz apenas pela velocidade máxima (ex.: achar que uma matriz de 10.000 pontos a 1.000 PPM vai levar exatos 10 minutos).",
      "❌ Não contabilizar o tempo gasto montando a entretela no bastidor e limpando os fiapos de acabamento.",
      "❌ Ignorar o tempo perdido com linhas de má qualidade que arrebentam a cada 5 minutos."
    ],
    troubleshootingTips: [
      "A produção do ateliê está atrasando todos os dias: cronometre o tempo de montagem do bastidor; se estiver levando mais de 2 minutos por peça, adquira bastidores extras e uma estação de enquadramento (Hoop Station) para montar a próxima peça enquanto a máquina costura a anterior.",
      "O rendimento caiu de 75% para 50%: verifique o índice de quebras de linha; limpe e lubrifique a lançadeira, troque as agulhas gastas e use linha de poliéster lubrificada de primeira qualidade.",
      "A máquina passa muito tempo parada trocando de cor: ao digitalizar a matriz, agrupe elementos da mesma cor para reduzir as trocas de 15 para no máximo 4 ou 5."
    ],
    dicaArtrelados: "O segredo dos ateliês mais lucrativos: tenha sempre um bastidor extra para cada tamanho! Enquanto a máquina está bordando a peça número 1, você já deixa a peça número 2 montadinha e alinhada no bastidor extra. Quando a máquina apitar, você só troca os bastidores em 5 segundos e a máquina nunca fica parada!",
    voceSabia: "Nas maiores fábricas de bordado do mundo na Ásia, uma máquina multicabeçote de 24 cabeças operando com eficiência OEE de 82% chega a produzir mais de 20 milhões de pontos por dia de trabalho contínuo!",
    practicalExercise: "Escolha uma encomenda de 5 camisetas no seu ateliê. Anote o horário exato que você pegou a primeira peça e o horário que tirou a última peça da máquina pronta. Conte o total de pontos das 5 peças e calcule quantos pontos por minuto reais o seu ateliê produziu: esse é o seu índice de rendimento!",
    quickSummary: "Métrica de gestão de produção que quantifica a produtividade real, custos operacionais e tempo efetivo de costura da máquina de bordar.",
    relatedTerms: ["OEE", "Gestão de Ateliê", "Custo do Milheiro", "Velocidade (PPM)", "Tempo de Ciclo", "Troca de Cor", "Hoop Station"],
    tags: ["yieldrate", "eficiencia", "produtividade", "gestao", "custos", "atelie", "planejamento"]
  },
  {
    id: "yarn-stretch-elastic-stabilization-malhas-finas-eixo-y",
    code: "Y-010",
    letter: "Y",
    term: "Yarn & Fabric Elasticity Balancing — Estabilização e Controle de Elasticidade em Malhas Finas e Tecidos Elásticos no Eixo Y",
    pronunciation: "iárn end fá-brik i-las-tí-ci-ti bál-an-sing — es-ta-bi-li-za-são em ma-lhas fi-nas no êi-shu í-psi-lon",
    level: "Intermediário 🟡",
    category: "Técnicas Especiais",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do conceito de física têxtil de módulo de Young anisotrópico e deformação por tração em malhas de urdume e trama (Knitted Fabric Mechanics).",
    summary: "Estratégias avançadas de entretelamento, costuras de alinhamento e compensação para bordar tecidos com elastano sem deformar no sentido do movimento do bastidor.",
    definition: "O Yarn & Fabric Elasticity Balancing (Controle de Elasticidade e Estabilização no Eixo Y / Knitwear Elastic Distortion Management / Stretch Fabric Stabilization) é a metodologia técnica aplicada ao bordado de tecidos de malha com alta elasticidade bidirecional ou com elastano/spandex (suplex, dry-fit, viscolycra, ribana e piquet com elastano). Como o bastidor se desloca bruscamente para frente e para trás no eixo Y, o tecido elástico tende a se esticar e deformar na direção do movimento caso não esteja perfeitamente estabilizado.",
    technicalDetails: "As malhas possuem comportamento mecânico anisotrópico: a elasticidade transversal (no sentido da trama/largura da peça) é habitualmente de 40% a 80% maior do que a elasticidade longitudinal (sentido do urdume/comprimento). Quando o pantógrafo acelera no eixo Y, a inércia da malha combinada com a força de repuxo do ponto satim provoca o encolhimento das colunas verticais e a abertura de espaços brancos nas bordas. A solução envolve a utilização de **Entretela de Recorte Macia de Malha Multidirecional (Poly-Mesh Cutaway de 50 g/m²)** colada com spray temporário ou montagem com filme solúvel superior (Topping) e costura de alinhavo prévio (Basting Box).",
    beginnerExplanation: "É o jeito certo de bordar aquelas blusas de ginástica, regatas e roupinhas que esticam bastante como borracha! Para a máquina não repuxar nem deixar o desenho torto ou enrugado quando o bastidor anda para cima e para baixo, nós usamos uma entretela especial fininha que não estica e prendemos a peça com muito carinho sem esticar o pano!",
    howItWorks: [
      "1. A bordadeira posiciona a entretela especial de malha estável (Poly-Mesh Cutaway) sob a peça elástica.",
      "2. Aplica uma leve borrifada de cola spray temporária sem esticar as fibras da malha.",
      "3. Enquadra no bastidor suavemente como se estivesse fechando a tampa de uma caixa (sem puxar o tecido pelas beiradas).",
      "4. Adiciona uma camada de filme hidrossolúvel ou plástico fino por cima da malha.",
      "5. No painel da máquina, ativa a função de 'Alinhavo no Bastidor' (Basting Stitch) que costura uma moldura ao redor antes de começar.",
      "6. A máquina borda com densidade ligeiramente mais leve (espaçamento de 0,45 mm) e compensação de repuxo reforçada (0,40 mm).",
      "7. Ao soltar do bastidor, o tecido volta ao seu estado natural sem nenhuma onda, bico ou enrugamento."
    ],
    applications: [
      "Bordados em roupas esportivas (camisas dry-fit, regatas fitness, tops e calças de academia).",
      "Bordados em bodys de bebê, pijaminhas de suedine e malhas 100% algodão penteado.",
      "Camisas polo de piquet com lycra e uniformes elásticos de ciclismo.",
      "Bordados em vestidos de viscolycra e moda feminina contemporânea."
    ],
    characteristics: [
      "Uso mandatório de entretela de recorte (Cutaway) que acompanha o vestuário por toda a vida útil.",
      "Eliminação total do efeito 'ondulado' ou 'orelha de elefante' ao redor do bordado.",
      "Toque macio no avesso que não arranha a pele em roupas esportivas justas."
    ],
    commonErrors: [
      "❌ Puxar o tecido de malha com as mãos para 'esticar bem' dentro do aro do bastidor, fazendo o bordado virar uma bola enrugada assim que for retirado.",
      "❌ Usar entretela rasgável simples (Tearaway) em malha com elastano, deixando o bordado desmoronar e abrir buracos na primeira lavagem.",
      "❌ Bordar malhas finas com agulhas de ponta fina afiada (Sharp) que cortam os fios da malha em vez de agulhas ponta de bola (Ball Point)."
    ],
    troubleshootingTips: [
      "O tecido fez um franzido feio em volta de todo o desenho assim que você tirou do bastidor: você esticou o tecido elástico ao fechar o bastidor; nunca puxe o tecido pelas bordas depois que o aro estiver encaixado!",
      "Apareceram buraquinhos e furos ao lado das letras na camiseta de malha: troque imediatamente a agulha por uma agulha ponta de bola fina (Ball Point 70/10 ou 75/11) para que ela desvie dos filamentos elásticos sem furar o tecido.",
      "O desenho ficou achatado e ovalado no sentido vertical: adicione entretela Poly-Mesh e aumente a compensação de repuxo no software CAD para 0,40 mm no eixo Y."
    ],
    dicaArtrelados: "Para bordar malhas elásticas e tecidos esportivos sem erro: use sempre entretela de recorte macia (Poly-Mesh), agulha ponta de bola 75/11 e ative o alinhavo na máquina! E lembre-se: nunca estique a malha no bastidor — o tecido tem que entrar no aro soltinho e relaxado!",
    voceSabia: "O tecido Dry-Fit foi patenteado na década de 1990 pela Nike com microfibras hidrofílicas de poliéster que conduzem o suor para fora da roupa; sua estrutura de malha é tão flexível que exige agulhas especiais Ball Point com revestimento de cromo para não criar eletricidade estática durante o bordado!",
    practicalExercise: "Pegue um pedaço de malha elástica de camiseta velha. Tente enquadrar puxando bastante o tecido e borde um círculo. Em outro pedaço, enquadre sem puxar nada com entretela de recorte e borde o mesmo círculo: compare os dois após tirar do bastidor e veja a diferença impressionante de acabamento!",
    quickSummary: "Metodologia de estabilização mecânica e entretelamento para bordar tecidos elásticos e malhas finas sem deformações no eixo Y.",
    relatedTerms: ["Malhas", "Dry-Fit", "Entretela Poly-Mesh", "Agulha Ponta de Bola", "Alinhavo (Basting)", "Compensação de Repuxo", "Elastano"],
    tags: ["yarnstretchelastic", "malhas", "dryfit", "elastano", "estabilizacao", "eixoy", "tecnicasespeciais"]
  }
];

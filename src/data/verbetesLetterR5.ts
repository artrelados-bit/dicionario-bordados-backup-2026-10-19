import { Verbete } from "../types";

export const VERBETES_LETTER_R5: Verbete[] = [
  {
    id: "redimensionamento-da-matriz",
    code: "R-033",
    letter: "R",
    term: "Redimensionamento da Matriz",
    pronunciation: "re-di-men-si-o-na-men-to da ma-triz",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim re- (novamente) e dimensio (medida, escala). Operação fundamental de alteração de escala espacial.",
    summary: "Alteração do tamanho físico (largura e altura em milímetros) de um arquivo de bordado, exigindo recálculo de densidade de pontos.",
    definition: "O redimensionamento da matriz é o processo técnico de aumentar ou diminuir as dimensões físicas de um desenho de bordado. Em formatos de máquina puros (DST, PES, JEF, EXP), redimensionar além de 10% a 15% sem recálculo inteligente distorce a densidade original, gerando bordados excessivamente duros (se diminuídos) ou ralos e esburacados (se aumentados). Em arquivos vetoriais originais (EMB, ART), o software recalcula 100% dos pontos automaticamente.",
    technicalDetails: "Ao redimensionar uma matriz nativa baseada em contornos vetoriais (Stitch Processing / Outline file), o algoritmo recalcula o número total de pontos mantendo a densidade nominal constante (ex: 0.40 mm) e o comprimento de passo padrão (ex: 2.5 mm). Em arquivos de pontos fechados (Stitch files), o redimensionamento seguro é limitado a ±10% a ±15%.",
    beginnerExplanation: "É aumentar ou diminuir o tamanho do bordado. Fazer isso do jeito certo no computador recalcula todos os pontinhos para que o bordado não fique nem ralo demais (se aumentar) nem duro como pedra (se diminuir).",
    howItWorks: [
      "1. A usuária abre a matriz no software e digita a nova largura ou altura desejada em milímetros.",
      "2. O software analisa se o arquivo possui objetos vetoriais ou apenas pontos de máquina.",
      "3. O motor de cálculo adiciona pontos proporcionalmente (se aumentado) ou remove pontos excedentes (se reduzido).",
      "4. A matriz redimensionada mantém a maciez, a cobertura perfeita e a densidade correta.",
      "5. O novo arquivo é salvo e enviado para a máquina."
    ],
    applications: [
      "Ajustar um brasão de 10 cm para caber em um bolso de camisa de 8 cm.",
      "Aumentar um bordado de toalha de lavabo de 13 cm para 26 cm para toalha de banho.",
      "Dimensionar nomes e frases para caber exatamente na largura de faixas e fitas."
    ],
    characteristics: [
      "Preserva a qualidade técnica original quando feito com software adequado.",
      "Exige atenção ao tamanho mínimo de detalhes e letras pequenas.",
      "Diferença fundamental entre redimensionar arquivo vetorial vs. arquivo de pontos."
    ],
    commonErrors: [
      "❌ Redimensionar arquivos de pontos (como .PES ou .DST) em mais de 30% direto no painel da máquina sem recálculo de pontos.",
      "❌ Diminuir um desenho que já tinha letrinhas pequenas de 5 mm, fazendo as letras virarem bolinhas ilegíveis de 3 mm.",
      "❌ Aumentar um desenho em 200% sem aumentar a largura das colunas satim, deixando os pontos de cetim finos e ralos."
    ],
    troubleshootingTips: [
      "Bordado diminuído quebrando agulha e ficando duro como papelão: o arquivo foi diminuído sem recálculo de pontos; redimensione no software com a opção 'Recalcular Pontos' ativada.",
      "Bordado aumentado ficando ralo e aparecendo o tecido: regenere a matriz no software aumentando a contagem total de pontos.",
      "Letras sumindo após diminuir o desenho: digite os textos novamente em um tamanho legível ou use fonte específica para micro-letras."
    ],
    dicaArtrelados: "Se você precisa aumentar ou diminuir muito uma matriz (mais de 20%), sempre faça isso no software de criação no computador, e nunca direto no visor da máquina de bordar. O computador recalcula a densidade e o bordado fica perfeito!",
    voceSabia: "Quando você diminui uma matriz de 20.000 pontos pela metade na máquina sem recalcular, a mesma quantidade de 20.000 pontos é espremida em apenas 25% da área original, criando uma placa de linha quase impossível de furar!",
    practicalExercise: "Abra uma matriz de 10 cm no seu software. Redimensione para 15 cm com a opção 'Recalcular Pontos' ativada e observe como a contagem de pontos sobe automaticamente para manter a cobertura ideal.",
    quickSummary: "Redimensionamento da matriz é a alteração do tamanho do bordado com recálculo inteligente de pontos para manter a maciez e a cobertura intactas.",
    relatedTerms: ["Redimensionamento Proporcional", "Recálculo de Pontos", "Densidade Nominal", "Formatos Vetoriais"],
    tags: ["redimensionamento", "escala", "tamanho", "software", "densidade"]
  },
  {
    id: "redimensionamento-proporcional",
    code: "R-034",
    letter: "R",
    term: "Redimensionamento Proporcional",
    pronunciation: "re-di-men-si-o-na-men-to pro-por-ci-o-nal",
    level: "Iniciante 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim proportionalis (em razão constante). Manutenção da razão de aspecto (Aspect Ratio).",
    summary: "Alteração de escala onde largura e altura mudam juntas na mesma porcentagem, preservando a forma e simetria do desenho sem deformações.",
    definition: "O redimensionamento proporcional (ou Manutenção da Razão de Aspecto / Proportional Scaling) é a transformação de escala na qual a relação matemática entre a largura (eixo X) e a altura (eixo Y) do desenho é mantida rigorosamente constante (1:1). Ao alterar a largura em +20%, a altura é automaticamente recalculada em +20%, garantindo que círculos permaneçam perfeitamente redondos e figuras não fiquem esticadas ou achatadas.",
    technicalDetails: "Representado nos softwares pelo ícone de um 'Cadeado' fechado (Maintain Aspect Ratio / Proportional Lock). Garante que a geometria original, a angulação relativa dos pontos e o equilíbrio visual da arte permaneçam 100% fiéis à criação original.",
    beginnerExplanation: "É aumentar ou diminuir o desenho mantendo a forma original dele perfeita: se você puxar pelo cantinho, ele cresce por igual em todos os lados sem ficar nem esticado pra cima nem esmagado de lado.",
    howItWorks: [
      "1. A usuária clica no ícone do cadeado de proporção no software ou seleciona a alça diagonal de canto.",
      "2. Digita a nova medida desejada (ex: mudar a largura de 100 mm para 120 mm).",
      "3. O software multiplica a altura pelo mesmo fator de escala (1,20x).",
      "4. O desenho cresce de forma equilibrada mantendo a beleza e as proporções anatômicas exatas."
    ],
    applications: [
      "Redimensionamento de logotipos de empresas e brasões com proporções oficiais rigorosas.",
      "Ajuste de tamanho de ilustrações infantis, rostos e animais sem distorcer as feições.",
      "Escalonamento de monogramas redondos e mandalas simétricas."
    ],
    characteristics: [
      "Preserva a identidade visual e a estética original da matriz.",
      "Operação mais segura e recomendada para 95% dos trabalhos de bordado.",
      "Evita que letras fiquem deformadas, compridas ou gordinhas demais."
    ],
    commonErrors: [
      "❌ Puxar as alças laterais ou verticais da tela do computador com o mouse sem segurar a tecla de proporção, deformando o desenho sem perceber.",
      "❌ Destravar o cadeado de proporção ao alterar medidas para 'forçar' o desenho a caber no bastidor.",
      "❌ Alterar proporções de logotipos comerciais registrados de clientes."
    ],
    troubleshootingTips: [
      "Desenho ficou oval e deformado: desfaça (Ctrl+Z), clique no ícone do cadeado (Proporção) e redimensione apenas puxando pelos cantos diagonais.",
      "Desenho não cabe na largura do bastidor por 2 mm: em vez de esmagar o desenho, gire a matriz em 90° ou reduza proporcionalmente em 2% a 3%.",
      "Proporção destravou sozinha: confira se a tecla 'Shift' ou 'Ctrl' precisa ser pressionada durante o arrasto com o mouse no seu software."
    ],
    dicaArtrelados: "Sempre que for redimensionar um desenho na tela do computador, puxe sempre pelas 'alças dos quatro cantos' (diagonais) e nunca pelas alças do meio. Puxar pelos cantos garante que o desenho nunca fique deformado!",
    voceSabia: "Na Renascença italiana, mestres como Leonardo da Vinci utilizavam a 'Proporção Áurea' (número Phi = 1,618) para garantir que todas as figuras mantivessem uma harmonia proporcional perfeita perante o olho humano.",
    practicalExercise: "No seu software, desenhe um círculo perfeito. Experimente puxar pela alça lateral direita (veja como ele vira uma elipse deformada) e depois desfaça e puxe pela alça do canto diagonal (veja como ele se mantém perfeitamente redondo).",
    quickSummary: "Redimensionamento proporcional é a alteração de tamanho mantendo a largura e a altura na mesma proporção exata, sem deformar ou esticar o desenho.",
    relatedTerms: ["Razão de Aspecto (Aspect Ratio)", "Redimensionamento da Matriz", "Cadeado de Proporção", "Escala Cartesiana"],
    tags: ["proporcional", "escala", "tamanho", "simetria", "software"]
  },
  {
    id: "redimensionamento-nao-proporcional",
    code: "R-035",
    letter: "R",
    term: "Redimensionamento Não Proporcional",
    pronunciation: "re-di-men-si-o-na-men-to não pro-por-ci-o-nal",
    level: "Intermediário 🟡",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Modificação assimétrica de coordenadas cartesianas (Non-uniform Scaling / Stretch).",
    summary: "Alteração independente da largura ou da altura de uma matriz (esticar ou achatar) para acomodar o bordado em espaços restritos.",
    definition: "O redimensionamento não proporcional (ou escala não uniforme / distorção de aspecto) é a operação em que a largura (eixo X) ou a altura (eixo Y) do desenho é alterada de forma independente e assimétrica com o cadeado de proporção destravado. É utilizado tecnicamente para encaixar matrizes em espaços físicos específicos (como fitas compridas e estreitas) ou para criar variações de fontes tipográficas (condensadas ou expandidas).",
    technicalDetails: "Requer extremo cuidado com os pontos de satim e compensação de encolhimento: esticar um desenho no eixo Y sem alterar o eixo X altera os ângulos de costura e pode alargar as colunas de satim além do limite aceitável (> 8 mm) ou estreitá-las a ponto de quebrar a linha.",
    beginnerExplanation: "É esticar o desenho para cima ou para os lados de propósito: deixar uma letra mais compridinha para caber em uma fita estreita ou alargar um arabesco para cobrir toda a barra da toalha.",
    howItWorks: [
      "1. A usuária destrava o cadeado de proporção de aspecto no software de bordado.",
      "2. Altera apenas uma das dimensões (ex: mantém a altura em 40 mm e aumenta a largura de 80 mm para 130 mm).",
      "3. O software estica as coordenadas apenas naquele eixo escolhido.",
      "4. O programador revisa os pontos de satim e a densidade para garantir que nada ficou fora do padrão aceitável.",
      "5. A matriz assume um formato condensado ou estendido personalizado."
    ],
    applications: [
      "Ajustar nomes compridos para caber em fitas de cetim estreitas de 25 mm ou 38 mm.",
      "Alongar arabescos florais e molduras para cobrir a largura total de caminhos de mesa.",
      "Criar fontes condensadas (mais altas e finas) para bolsos com pouco espaço horizontal."
    ],
    characteristics: [
      "Permite flexibilidade total de enquadramento em locais com dimensões atípicas.",
      "Pode distorcer rostos e formas orgânicas se aplicado de forma descuidada.",
      "Exige revisão criteriosa da largura das colunas de ponto cheio."
    ],
    commonErrors: [
      "❌ Aplicar redimensionamento não proporcional em rostos humanos ou mascotes, deixando as figuras com aparência estranha e bochechas deformadas.",
      "❌ Esticar colunas de satim horizontais no sentido da costura, gerando pontos frouxos com mais de 10 mm.",
      "❌ Achatar matrizes corporativas com marcas registradas de clientes que proíbem distorção visual."
    ],
    troubleshootingTips: [
      "Pontos de satim ficando frouxos e compridos demais após esticar o desenho: converta as colunas mais largas em preenchimento tatami ou ative a divisão automática de satim (Auto-Split).",
      "Desenho parecendo 'esmagado': destrave e ajuste suavemente a proporção até recuperar a harmonia visual da arte.",
      "Letras ficando muito finas após esticar na vertical: aumente a compensação de puxamento das colunas verticais para 0.45 mm."
    ],
    dicaArtrelados: "Para bordar nomes em toalhas de lavabo com barrados compridos e baixos: você pode esticar a largura do nome em cerca de 10% a 15% mantendo a altura. O nome preenche o barrado lindamente sem parecer distorcido!",
    voceSabia: "Muitas famílias tipográficas clássicas da história da tipografia (como as fontes Helvetica Condensed e Impact) foram criadas originalmente aplicando distorções geométricas não proporcionais em caracteres padrão.",
    practicalExercise: "No seu software, pegue uma palavra bordada em satim. Destrave o cadeado e aumente apenas a largura em 20%. Dê um zoom nas colunas e veja como o espaçamento dos pontos se comportou.",
    quickSummary: "Redimensionamento não proporcional é a alteração assimétrica de apenas um dos eixos (esticar ou achatar) para adaptar a matriz a faixas e espaços específicos.",
    relatedTerms: ["Redimensionamento Proporcional", "Fontes Condensadas", "Divisão de Satim (Auto-Split)", "Razão de Aspecto"],
    tags: ["não proporcional", "esticar", "escala", "ajuste", "software"]
  },
  {
    id: "reposicionamento-da-matriz",
    code: "R-036",
    letter: "R",
    term: "Reposicionamento da Matriz",
    pronunciation: "re-po-si-ci-o-na-men-to da ma-triz",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim re- (novamente) e positio (lugar, postura). Ajuste de coordenadas absolutas no plano cartesiano.",
    summary: "Deslocamento de todo o desenho para uma nova posição dentro da área útil do bastidor através das setas de navegação da máquina.",
    definition: "O reposicionamento da matriz é o ato operacional de mover o arquivo de bordado como um bloco único nos eixos horizontal (X) e vertical (Y) na tela da máquina de bordar ou no software, com o objetivo de alinhar o ponto inicial ou o centro do desenho com a marcação física feita com giz ou caneta no tecido preso no bastidor.",
    technicalDetails: "Realizado através das teclas direcionais (jog keys / setas X-Y) no painel de controle. Cada toque curto na seta move a matriz em frações de 0.1 mm a 1.0 mm, permitindo alinhamento óptico milimétrico com a ajuda da luz de mira laser da agulha (Snowman / Laser Pointer).",
    beginnerExplanation: "É mexer o desenho na telinha da máquina usando as setinhas para a esquerda, direita, cima ou baixo, até ele ficar exatamente em cima da marcação que você fez na roupa com a caneta fantasminha.",
    howItWorks: [
      "1. A bordadeira prende o tecido no bastidor com uma cruz de marcação feita a giz/caneta.",
      "2. Encaixa o bastidor no pantógrafo da máquina de bordar.",
      "3. Toca nas setas direcionais da tela para movimentar o desenho no visor.",
      "4. A máquina desloca o bastidor até a ponta da agulha descer exatamente sobre o centro da cruz riscada.",
      "5. A matriz está perfeitamente reposicionada e pronta para bordar sem erros."
    ],
    applications: [
      "Correção de pequenas imperfeições de alinhamento ao prender o tecido no bastidor.",
      "Bordados em bolsos já confeccionados e locais com margem de manobra milimétrica.",
      "Posicionamento de nomes exatamente sobre linhas de guia de toalhas e mantas."
    ],
    characteristics: [
      "Evita o trabalho demorado de desbastar e prender o tecido novamente no aro.",
      "Permite centralização perfeita mesmo se o tecido ficou 5 mm deslocado no bastidor.",
      "Execução simples e intuitiva no painel de qualquer máquina moderna."
    ],
    commonErrors: [
      "❌ Mover a matriz para muito perto da borda do bastidor, fazendo o calcador bater no aro plástico durante a costura.",
      "❌ Não fazer a checagem de área (Trace / Traçado de Contorno) após mover a matriz para a nova posição.",
      "❌ Esquecer de fixar a posição antes de iniciar a costura."
    ],
    troubleshootingTips: [
      "Calcador quase batendo no aro do bastidor: mova a matriz alguns milímetros em direção ao centro e faça o teste de contorno (Trace) novamente.",
      "Agulha não caindo no centro da marcação: use as setas de micro-passo (0.1 mm) para fazer o ajuste fino com a agulha abaixada manualmente pelo volante.",
      "Desenho bloqueado para mover: verifique se o desenho já atingiu o limite máximo da área de segurança daquele tamanho de bastidor."
    ],
    dicaArtrelados: "Após mover o desenho na tela da máquina, SEMPRE aperte o botão de 'Traçado' (Trace / Moldura de Teste) antes de começar a bordar. O bastidor vai passear mostrando os quatro cantos do desenho e você tem 100% de certeza de que nada vai bater no aro!",
    voceSabia: "Máquinas industriais e domésticas de última geração possuem câmeras embutidas no cabeçote que escaneiam o tecido e reposicionam a matriz automaticamente sobre a marcação com inteligência artificial.",
    practicalExercise: "Risque uma pequena cruz com caneta que apaga com calor no tecido. Prenda no bastidor sem se preocupar em acertar o centro exato. Na máquina, use as setas do painel para reposicionar a matriz até a agulha ficar perfeitamente alinhada na cruz.",
    quickSummary: "Reposicionamento da matriz é o ajuste da posição do desenho na tela da máquina usando as setas para alinhar com a marcação no tecido.",
    relatedTerms: ["Traçado de Contorno (Trace)", "Mira Laser da Agulha", "Centro do Bastidor", "Coordenadas X-Y"],
    tags: ["reposicionamento", "painel", "alinhamento", "operação", "máquina"]
  },
  {
    id: "reposicionamento-do-bastidor",
    code: "R-037",
    letter: "R",
    term: "Reposicionamento do Bastidor",
    pronunciation: "re-po-si-ci-o-na-men-to do bas-ti-dor",
    level: "Intermediário 🟡",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo masculino composto.",
    origin: "Técnica de emenda contínua de peças grandes além da área de um único bastidor (Re-hooping).",
    summary: "Procedimento físico de desencaixar o tecido do bastidor e prendê-lo novamente em um novo segmento para continuar bordados extensos.",
    definition: "O reposicionamento do bastidor (Re-hooping / Troca de Posição de Bastidor) é a técnica pela qual a bordadeira retira a peça têxtil do bastidor após a conclusão da primeira seção de um grande bordado e a fixa novamente em uma posição adjacente milimetricamente alinhada, utilizando gabaritos, pontos de referência ou bastidores multiposição/magnéticos para dar continuidade ao desenho sem quebras visíveis na emenda.",
    technicalDetails: "Exige o uso de 'Cruzes de Registro de Alinhamento' (Alignment Marks) programadas nas matrizes divididas (Split Designs). As cruzes do final do bloco 1 devem ser exatamente perfuradas pela agulha na primeira etapa do bloco 2 com tolerância máxima de 0.5 mm.",
    beginnerExplanation: "É tirar o tecido do bastidor e prender de novo um pedacinho mais para o lado para conseguir bordar um desenho bem comprido (como uma barra inteira de lençol) que não cabia de uma vez só.",
    howItWorks: [
      "1. A máquina borda a Parte 1 da matriz, finalizando com duas cruzes de referência de linha.",
      "2. O tecido é retirado do bastidor com cuidado sem puxar a entretela.",
      "3. O tecido é reposicionado no bastidor alinhando o novo trecho com a ajuda do gabarito plástico.",
      "4. Na máquina, alinha-se a agulha exatamente sobre as cruzes bordadas na Parte 1.",
      "5. A Parte 2 é bordada encaixando perfeitamente na emenda como se fosse um desenho contínuo."
    ],
    applications: [
      "Barrados contínuos de lençóis de casal, toalhas de banho e caminhos de mesa de 1 a 2 metros.",
      "Bordados gigantes nas costas de jaquetas e roupões de banho.",
      "Painéis de parede artísticos e colchas de patchwork modulares."
    ],
    characteristics: [
      "Permite produzir bordados gigantescos mesmo em máquinas de bastidores menores.",
      "Exige paciência, precisão visual e excelente alinhamento de gabarito.",
      "Uso facilitado por bastidores de múltiplos estágios (Multiposição) ou magnéticos."
    ],
    commonErrors: [
      "❌ Prender o tecido torto no segundo bastidoramento, fazendo a emenda do desenho ficar inclinada.",
      "❌ Esticar o tecido no segundo encaixe com força diferente do primeiro, criando degraus visíveis na emenda.",
      "❌ Cortar as cruzes de referência de linha antes de alinhar a segunda parte na máquina."
    ],
    troubleshootingTips: [
      "Emenda ficando com degrau de 2 mm: utilize bastidor magnético ou de múltiplos estágios que desliza sem tirar o tecido do aro.",
      "Desenho ficando torto em relação à barra da toalha: use fita métrica e risque uma linha guia contínua de giz ao longo de toda a toalha.",
      "Tecido esgarçando na área da emenda: utilize entretela de recorte (Cut-Away) contínua por baixo de toda a extensão."
    ],
    dicaArtrelados: "Para fazer barrados longos perfeitos com reposicionamento de bastidor: risque uma linha reta de ponta a ponta na toalha com giz de alfaiate. Use essa linha para alinhar o gabarito do bastidor todas as vezes. As emendas ficam 100% invisíveis!",
    voceSabia: "Bordados clássicos de toalhas de banquete de cortes reais europeias mediam mais de 10 metros de comprimento e eram feitos com dezenas de reposicionamentos manuais de bastidores de madeira.",
    practicalExercise: "Borde uma matriz dividida em 2 partes em uma toalha: faça a parte 1, marque o ponto de encontro com alfinete, reposicione o bastidor e borde a parte 2, conferindo o encaixe da emenda.",
    quickSummary: "Reposicionamento do bastidor é a técnica de mudar o tecido de lugar no bastidor para continuar desenhos longos através de emendas precisas.",
    relatedTerms: ["Re-hooping", "Matriz Dividida (Split Design)", "Cruzes de Alinhamento", "Gabarito de Bastidor"],
    tags: ["bastidor", "reposicionamento", "re-hooping", "emendas", "barrados"]
  },
  {
    id: "reposicionamento-do-bordado",
    code: "R-038",
    letter: "R",
    term: "Reposicionamento do Bordado",
    pronunciation: "re-po-si-ci-o-na-men-to do bor-da-do",
    level: "Iniciante 🟢",
    category: "Operação da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Ajuste fino de localização espacial do motivo em relação à peça de vestuário.",
    summary: "Adequação da posição final do motivo bordado sobre a peça de vestuário (distância da gola, bolsos, barra ou costuras).",
    definition: "O reposicionamento do bordado é o processo global de planejamento e calibração de onde a figura bordada deve repousar fisicamente sobre uma peça de roupa confeccionada (como camisas pólo, jalecos, bonés, toalhas ou calças). Envolve regras universais de ergonomia e proporção visual da alfaiataria (como posicionar o logotipo no peito esquerdo a 18-20 cm do ombro e centralizado com a linha da cava).",
    technicalDetails: "Utiliza réguas de posicionamento de bordado (Embroidery Placement Rulers / Chassi de marcação) para padronizar a localização exata em dezenas de peças de uma grade de tamanhos (P, M, G, GG) sem variações visuais entre peças.",
    beginnerExplanation: "É acertar o lugar exato onde o bordado vai ficar na roupa: nem muito perto do ombro, nem caído perto da barriga, mas no lugar clássico e elegante onde todo mundo gosta de ver.",
    howItWorks: [
      "1. O operador utiliza uma régua de gabarito para marcar o ponto nobre do peito esquerdo ou bolso.",
      "2. Faz uma cruz central com giz de alfaiate no ponto medido.",
      "3. Posiciona o bastidor alinhado a essa cruz de marcação.",
      "4. Confere a simetria com a linha dos botões e a costura do ombro.",
      "5. Executa o bordado com a garantia de caimento perfeito na peça vestida."
    ],
    applications: [
      "Bordados corporativos no peito esquerdo de camisas pólo e uniformes.",
      "Posicionamento de nomes em jalecos de médicos e aventais de chefs.",
      "Bordados em bolsos traseiros de calças e laterais de bonés."
    ],
    characteristics: [
      "Garante padronização industrial impecável em encomendas de grande volume.",
      "Evita que bordados fiquem caídos para debaixo do braço ou sufocados na gola.",
      "Aumenta a percepção de valor e sofisticação das peças do ateliê."
    ],
    commonErrors: [
      "❌ Bordar no peito esquerdo usando a mesma distância do ombro para uma camisa tamanho P e uma tamanho GG, fazendo o bordado da GG ficar muito alto.",
      "❌ Não fechar os botões da camisa ao medir o centro, fazendo o bordado ficar torto ao vestir.",
      "❌ Bordar perto demais da cava da manga, fazendo a linha enrugar ao movimentar os braços."
    ],
    troubleshootingTips: [
      "Bordado ficando muito baixo no peito: utilize a regra padrão: trace uma linha horizontal na altura da parte inferior da cava e uma vertical descendo do meio do ombro; o encontro das duas é o ponto perfeito!",
      "Posições diferentes em camisas de tamanhos variados: use uma régua profissional de posicionamento com marcações para P, M, G e GG.",
      "Bordado torto em relação aos botões: alinhe o aro do bastidor paralelamente à vista de botões da camisa."
    ],
    dicaArtrelados: "A regra de ouro para camisa polo masculina e feminina: meça cerca de 18 a 20 cm para baixo a partir do meio da costura do ombro e alinhe com a reta do meio entre a gola e a manga. Fica impecável em qualquer corpo!",
    voceSabia: "Na alfaiataria militar do século XIX, a posição exata de condecorações e brasões era medida com compassos de latão e fiscalizada com rigor sob pena de advertência aos soldados.",
    practicalExercise: "Pegue uma camiseta pólo de uso próprio e vista no corpo. Olhe no espelho e marque com um alfinete onde você acha mais bonito o logo no peito. Tire a camisa e meça a distância do ombro até o alfinete com a fita métrica.",
    quickSummary: "Reposicionamento do bordado é a correta localização do motivo na peça de vestuário seguindo padrões estéticos e ergonômicos de vestibilidade.",
    relatedTerms: ["Régua de Posicionamento", "Bordado no Peito Esquerdo", "Padronização de Uniformes", "Marcação de Peça"],
    tags: ["posicionamento", "peça", "uniformes", "camisas", "alfaiataria"]
  },
  {
    id: "referencia-de-posicionamento",
    code: "R-039",
    letter: "R",
    term: "Referência de Posicionamento",
    pronunciation: "re-fe-rên-ci-a de po-si-ci-o-na-men-to",
    level: "Iniciante 🟢",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim referre (reportar-se a) e positio. Ponto ou marca física que ancora a medição espacial.",
    summary: "Marcação física no tecido (cruz de giz, adesivo alvo, pino guia) usada como ponto de ancoragem para centrar o bastidor.",
    definition: "A referência de posicionamento é qualquer elemento visual, físico ou digital (como uma cruz traçada com giz/caneta fantasminha, um adesivo de alvo de centralização, uma costura existente da peça ou um feixe de luz laser) utilizado como marco zero para orientar a colocação do bastidor e o ajuste da agulha da máquina antes de iniciar o bordado.",
    technicalDetails: "Serve como correspondente físico da origem de coordenadas (0,0) do software de digitalização. Garante que o operador reproduza com precisão submilimétrica o local exato planejado no projeto virtual.",
    beginnerExplanation: "É a marquinha que você faz na roupa (uma cruzinha de giz ou um adesivo de bolinha) para saber exatamente onde colocar o centro do bastidor e a agulha da máquina.",
    howItWorks: [
      "1. A bordadeira mede a peça e faz uma cruz de referência com caneta que apaga com água ou calor.",
      "2. Encaixa o gabarito plástico do bastidor alinhando os eixos da cruz do gabarito com a cruz do tecido.",
      "3. Prende o bastidor mantendo a referência estável.",
      "4. Na máquina, faz a agulha descer exatamente sobre o centro da marcação de referência.",
      "5. O bordado sai perfeitamente centralizado e alinhado."
    ],
    applications: [
      "Bordados em peças delicadas com tolerância mínima para erros de centralização.",
      "Bordado de bolsos, punhos de camisa e golas de vestidos.",
      "Alinhamento de peças repetitivas em produções seriadas de uniformes."
    ],
    characteristics: [
      "Elimina a adivinhação visual e o risco de bordar peças tortas.",
      "Facilmente removível com calor do ferro ou borrifo de água.",
      "Compatível com todos os modelos de bastidores e gabaritos."
    ],
    commonErrors: [
      "❌ Usar canetas esferográficas ou lápis comuns que mancham e não saem do tecido na lavagem.",
      "❌ Fazer referências muito grossas ou desalinhadas em relação ao fio do tecido.",
      "❌ Não apagar a marca de referência antes de passar o ferro quente (algumas tintas fixam com calor)."
    ],
    troubleshootingTips: [
      "Marca de caneta não saindo com calor: use caneta fantasminha original de boa procedência ou giz de alfaiate de cera lavável.",
      "Referência saindo do lugar ao apertar o bastidor: use bastidor magnético ou prenda o tecido sem forçar os aros de lado.",
      "Agulha fora da referência: use a luz laser de mira para conferir a coordenada central antes do primeiro ponto."
    ],
    dicaArtrelados: "Use sempre a 'Caneta Fantasminha' (que apaga com o calor do secador de cabelo ou do ferro) para fazer a sua cruz de referência de posicionamento. Ela faz um traço fino, super preciso e desaparece 100% como mágica no final!",
    voceSabia: "Nas máquinas industriais japonesas dos anos 1980, os operadores utilizavam réguas de aço com ponteiros mecânicos articulados fixados na mesa da máquina como referências físicas de alta precisão.",
    practicalExercise: "Faça uma cruz com caneta fantasminha no centro de um retalho. Use o gabarito do bastidor para centralizar o aro exatamente na cruz e confira o alinhamento da agulha na máquina.",
    quickSummary: "Referência de posicionamento é a marcação de guia (cruz de giz, adesivo ou laser) usada para centrar o bastidor e a agulha com precisão cirúrgica.",
    relatedTerms: ["Centro do Bastidor", "Caneta Fantasminha", "Gabarito de Bastidor", "Mira Laser"],
    tags: ["referência", "marcação", "posicionamento", "gabarito", "bastidor"]
  },
  {
    id: "referencia-de-alinhamento",
    code: "R-040",
    letter: "R",
    term: "Referência de Alinhamento",
    pronunciation: "re-fe-rên-ci-a de a-li-nha-men-to",
    level: "Intermediário 🟡",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do francês aligner (dispor em linha reta) e referre. Garantia de paralelismo e esquadro.",
    summary: "Linha guia longitudinal ou transversal usada para garantir que o bordado fique perfeitamente paralelo às costuras, dobras ou barras da peça.",
    definition: "A referência de alinhamento é a linha de orientação espacial (eixo horizontal ou vertical) tomada a partir de uma borda estrutural da peça de tecido (como a bainha da toalha, a linha de botões da camisa ou a costura lateral da calça) para garantir que a matriz seja bordada com esquadro perfeito (90°) e paralelismo absoluto, evitando bordados inclinados ou 'caídos'.",
    technicalDetails: "Utiliza o esquadro de alfaiate ou as linhas quadriculadas dos gabaritos de acrílico. Garante que o eixo X da matriz no pantógrafo seja rigorosamente paralelo à trama horizontal do tecido ou à barra de acabamento da peça.",
    beginnerExplanation: "É a linha reta que você usa para conferir se o bordado está retinho em relação à barra da toalha ou aos botões da camisa, sem ficar torto ou inclinado para um dos lados.",
    howItWorks: [
      "1. A bordadeira identifica a borda de referência mais importante da peça (ex: a faixa trabalhada da toalha de banho).",
      "2. Mede uma distância fixa em dois pontos e traça uma linha reta de alinhamento com giz.",
      "3. Posiciona o bastidor fazendo as marcações horizontais do gabarito coincidirem com a linha riscada.",
      "4. O bordado é executado com paralelismo milimétrico em relação à barra da peça."
    ],
    applications: [
      "Bordado de nomes e monogramas em barras de toalhas de banho e rosto.",
      "Textos em fitas de cetim e faixas decorativas retas.",
      "Alinhamento de logotipos com a linha de botões em camisas sociais."
    ],
    characteristics: [
      "Garante harmonia visual e esquadro perfeito com as costuras da peça.",
      "Elimina a sensação incômoda de bordado 'torto' ou desalinhado.",
      "Indispensável para peças que possuem linhas horizontais estampadas ou tecidas."
    ],
    commonErrors: [
      "❌ Confiar apenas no 'olho' para colocar o tecido no bastidor sem conferir o paralelismo com a barra.",
      "❌ Alinhar o bordado pela borda da mesa em vez de alinhar pela própria costura ou barra da peça.",
      "❌ Esquecer que muitas toalhas de fábrica já vêm com a costura da barra ligeiramente torta, exigindo compensação visual."
    ],
    troubleshootingTips: [
      "Bordado saindo torto em toalha com faixa: alinhe sempre o aro do bastidor paralelamente à própria faixa da toalha, e não pelo corte externo do tecido.",
      "Bordado inclinado na camisa: use um esquadro escolar apoiado na linha dos botões para traçar a linha horizontal de alinhamento no peito.",
      "Bastidor não permitindo girar o tecido: utilize o micro-ajuste de rotação de 1° a 1° no painel da máquina para alinhar a matriz com a linha riscada."
    ],
    dicaArtrelados: "Toalha de banho nunca mente: se o bordado estiver 1 milímetro torto em relação à barra, o olho percebe na hora! Sempre meça a distância da barra da toalha em duas pontas e passe um traço reto de giz para alinhar o seu bastidor com perfeição!",
    voceSabia: "O olho humano é biologicamente treinado para detectar desvios de paralelismo de até 0,5 grau em linhas horizontais retas, sendo extremamente sensível a qualquer pequeno desalinhamento visual.",
    practicalExercise: "Pegue uma toalha de rosto com faixa. Meça 3 cm a partir da faixa no lado esquerdo e 3 cm no lado direito. Ligue os dois pontos com uma régua e giz. Prenda no bastidor alinhando o gabarito nessa linha e veja a precisão.",
    quickSummary: "Referência de alinhamento é a linha reta de guia usada para assegurar que o bordado fique perfeitamente paralelo às barras, faixas e costuras da roupa.",
    relatedTerms: ["Paralelismo de Bastidor", "Esquadro de Bordado", "Referência de Posicionamento", "Gabarito Quadriculado"],
    tags: ["alinhamento", "paralelismo", "esquadro", "toalhas", "bastidor"]
  }
];

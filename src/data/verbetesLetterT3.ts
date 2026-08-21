import { Verbete } from "../types";

export const VERBETES_LETTER_T3: Verbete[] = [
  {
    id: "tensao-da-linha",
    code: "T-016",
    letter: "T",
    term: "Tensão da Linha",
    pronunciation: "ten-são da li-nha",
    level: "Iniciante 🟢",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução substantiva feminina.",
    origin: "Conceito fundamental da engenharia mecânica têxtil estabelecido com a invenção da máquina de costura de ponto fixo (lockstitch) por Elias Howe e Isaac Singer no século XIX.",
    summary: "Força de resistência e fricção aplicada aos fios superior e inferior para formar o ponto equilibrado entre as duas faces do tecido.",
    definition: "A Tensão da Linha é o controle dinâmico da resistência e do arrasto mecânico exercido sobre o fio superior (carretel/cone) e o fio inferior (bobina) durante o ciclo de formação do ponto. O equilíbrio milimétrico entre essas duas forças antagônicas determina se o entrelaçamento dos fios ocorrerá no centro geométrico do tecido ou no avesso da peça, influenciando diretamente a estabilidade, a nitidez, o toque e a durabilidade do bordado.",
    technicalDetails: "No bordado computadorizado industrial, a tensão é calibrada de forma assimétrica proposital: a linha superior deve trabalhar com uma tensão média entre 100 gf e 130 gf (gramas-força), enquanto a bobina deve operar entre 18 gf e 25 gf. Essa relação puxa 1/3 da linha superior para o avesso da peça em colunas de ponto cheio, deixando a face frontal 100% preenchida com a cor da linha superior sem pontos brancos de bobina.",
    beginnerExplanation: "É o cabo de guerra entre a linha de cima e a linha de baixo. As duas precisam puxar com a força certa para a costura ficar bonita e lisa na frente, sem fazer laços soltos e sem puxar a linha branca da bobina para o lado de cima.",
    howItWorks: [
      "1. A linha superior passa entre discos metálicos de fricção ou sensores eletrônicos de tensão.",
      "2. A linha da bobina passa sob a mola de lâmina da caixa de bobina.",
      "3. A agulha desce, a laçadeira engata a linha superior e forma uma laçada ao redor da bobina.",
      "4. O estica-fio sobe bruscamente, puxando a folga da linha para cima.",
      "5. A resistência calibrada nos discos e na mola assenta o nó exatamente no avesso da peça."
    ],
    applications: [
      "Calibragem diária no início de cada turno de produção em ateliês e fábricas.",
      "Ajuste fino ao trocar de tipo de linha (ex: de poliéster 40 wt para fio metálico ou algodão).",
      "Adaptação para bordados em tecidos delicados (seda/voal) versus pesados (couro/sarja).",
      "Garantia de padronização cromática e dimensional em matrizes de alta definição."
    ],
    characteristics: [
      "Determina a nitidez visual e a precisão das bordas do desenho.",
      "Controla a maciez do toque e a flexibilidade da peça após a lavagem.",
      "Evita quebras de agulha, desfiamento de fios e formação de 'ninhos de passarinho' (bird nests)."
    ],
    commonErrors: [
      "❌ Mexer na tensão da caixa de bobina sem antes conferir a passagem e a tensão da linha superior.",
      "❌ Bordar fios metálicos com a mesma tensão alta do poliéster comum, rompendo o fio instantaneamente.",
      "❌ Deixar a tensão frouxa na tentativa de deixar o bordado macio, criando laçadas soltas que engancham e desmancham."
    ],
    troubleshootingTips: [
      "Linha branca da bobina aparecendo na frente: afrouxe a tensão superior ou aperte ligeiramente a tensão da bobina.",
      "Linha superior embolando embaixo da chapa: a linha superior escapou dos discos de tensão; repasse a linha com o calcador levantado.",
      "Tecido enrugando ao redor das letras: a tensão superior está excessivamente apertada; solte 1 a 2 números no tensor."
    ],
    dicaArtrelados: "Nunca passe a linha na máquina com o calcador abaixado! Quando o calcador está abaixado, os discos de tensão ficam fechados e a linha não entra no canal. Levante sempre o calcador para a linha assentar perfeitamente entre os discos!",
    voceSabia: "Máquinas industriais de última geração usam sensores piezoelétricos digitais que medem a tensão da linha 1.000 vezes por segundo e ajustam a pressão automaticamente em tempo real.",
    practicalExercise: "Borde 3 letras 'I' maiúsculas em ponto cheio de 25 mm de altura. Vire a peça no avesso e observe: a faixa branca da bobina no meio deve ocupar exatamente 1/3 da largura total da coluna.",
    quickSummary: "Equilíbrio de força entre a linha superior e a da bobina que garante pontos firmes, cobertura perfeita na frente e ausência de laçadas soltas.",
    relatedTerms: ["Tensão da Linha Superior", "Tensão da Bobina", "Tensiómetro Towa", "Fox Test", "Estica-Fio"],
    tags: ["tensao", "mecanica", "calibragem", "ponto fixo", "manutencao"]
  },
  {
    id: "tensao-da-linha-superior",
    code: "T-017",
    letter: "T",
    term: "Tensão da Linha Superior",
    pronunciation: "ten-são da li-nha su-pe-ri-or",
    level: "Iniciante 🟢",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução substantiva feminina.",
    origin: "Componente regulável presente nas máquinas de costura e bordado desde a criação dos tensionadores de disco rotativos por volta de 1860.",
    summary: "Resistência exercida pelos discos tensores sobre a linha do cone superior, controlando a firmeza dos pontos e o assentamento na face do tecido.",
    definition: "A Tensão da Linha Superior é o nível de aperto e resistência friccional aplicado ao fio que vem do carretel superior conforme ele desliza entre os pratos tensores e passa pela mola recuperadora (check spring) e pelo estica-fio. Esse ajuste é a variável de controle mais frequentemente manipulada pela operadora para adaptar a máquina a diferentes marcas de linha, espessuras de fio e tipos de tecido.",
    technicalDetails: "A tensão superior recomendada para linhas de poliéster 40 wt situa-se entre 110 gf e 130 gf. Para linhas metálicas, deve ser reduzida para 70 gf a 90 gf; para linhas finas 60 wt (microletras), ajusta-se para 100 gf. Máquinas industriais possuem um conjunto de pré-tensão (pequeno tensor superior) e tensão principal (tensor primário) que devem trabalhar em sintonia para manter o fio estabilizado mesmo em altas velocidades.",
    beginnerExplanation: "É o botão giratório com números na frente da máquina (ou a regulagem na tela digital) que aperta ou solta a linha colorida do cone. Quando a gente aperta, a linha fica mais dura e esticada; quando solta, ela corre mais livre.",
    howItWorks: [
      "1. A linha passa entre dois pratos côncavos pressionados por uma mola helicoidal.",
      "2. Ao girar o botão no sentido horário (números maiores), a mola aperta os pratos, aumentando o atrito.",
      "3. Ao girar no sentido anti-horário (números menores), a mola relaxa, reduzindo a resistência.",
      "4. A linha tesa é puxada pelo estica-fio no momento exato do aperto do ponto no tecido."
    ],
    applications: [
      "Regulagem rápida ao trocar de linha comum para linha metálica ou fosca de algodão.",
      "Ajuste fino para bordados em malha e tecidos leves que enrugam facilmente.",
      "Compensação de variações climáticas (umidade e calor que afetam o deslizamento da linha).",
      "Calibragem independente em máquinas multicabeças com 12 a 15 agulhas."
    ],
    characteristics: [
      "Ajuste altamente acessível e rápido no painel ou corpo da máquina.",
      "Sensível ao acúmulo de fiapos e restos de linha entre os pratos tensores.",
      "Impacto imediato na qualidade visual da face superior do bordado."
    ],
    commonErrors: [
      "❌ Apertar a tensão superior ao máximo para tentar resolver laçadas no avesso causadas por linha fora do tensor.",
      "❌ Usar a mesma regulagem pesada para fios metálicos, provocando arrebentamento a cada 20 segundos.",
      "❌ Não limpar os discos de tensão periodicamente, acumulando cera e fiapos que travam a linha."
    ],
    troubleshootingTips: [
      "Laçadas soltas ou 'barbas' na frente da peça: aumente a tensão da linha superior em 1 ou 2 pontos na escala.",
      "Linha quebrando e pontas repuxadas: diminua a tensão superior e verifique se a linha não está prendendo na base do cone.",
      "Ponto irregular variando sozinho: passe um fio dental sem cera ou pincel entre os discos de tensão para remover fiapos presos."
    ],
    dicaArtrelados: "Se você tem uma máquina de uma agulha só e vai usar linha metálica dourada ou prateada, solte a tensão superior para o número 2 ou 2,5 e coloque uma agulha especial Metallic ou Topstitch 80/12. O bordado vai rodar lisinho sem quebrar!",
    voceSabia: "Os pratos de tensão das máquinas industriais modernas têm revestimento cerâmico de alta pureza para suportar o atrito de linhas correndo a mais de 1.200 pontos por minuto sem superaquecer.",
    practicalExercise: "Borde três palavras iguais: a primeira com tensão superior no nível 2, a segunda no nível 4 e a terceira no nível 7. Compare o avesso de cada uma e veja claramente o efeito do aperto nos pontos.",
    quickSummary: "Regulagem da força aplicada à linha superior através de pratos tensores, essencial para adaptar a máquina a diferentes fios e evitar laços ou quebras.",
    relatedTerms: ["Tensão da Linha", "Tensão da Bobina", "Pratos Tensores", "Mola Recuperadora", "Fio Metálico"],
    tags: ["tensao superior", "agulha", "pratos tensores", "regulagem", "fios"]
  },
  {
    id: "tensao-da-bobina-linha-inferior",
    code: "T-018",
    letter: "T",
    term: "Tensão da Bobina (Linha Inferior)",
    pronunciation: "ten-são da bo-bi-na (li-nha in-fe-ri-or)",
    level: "Intermediário 🟡",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução substantiva feminina.",
    origin: "Desenvolvida com a caixa de bobina rotativa industrial e a mola de lâmina ajustável por parafuso micrométrico no final do século XIX.",
    summary: "Resistência de saída do fio inferior regulada pelo pequeno parafuso da mola de lâmina na caixa de bobina, âncora do equilíbrio do bordado.",
    definition: "A Tensão da Bobina (ou Tensão Inferior) é a força de resistência exercida sobre a linha que sai da caixa de bobina (bobbin case / cápsula). Ela é calibrada através do aperto ou desaperto de um parafuso micrométrico que comprime uma mola metálica de lâmina contra o corpo da caixa. É considerada a 'tensão âncora' do sistema de bordado, pois deve ser ajustada primeiro como valor de referência estável para que todas as linhas superiores sejam calibradas a partir dela.",
    technicalDetails: "A tensão ideal da bobina em bordado computadorizado varia entre 18 gf e 25 gf quando medida em um tensiômetro digital ou analógico Towa (modelo TM-1 ou TM-3). Em bobinas descartáveis pré-bobinadas (pre-wound bobbins) de filamento contínuo de poliéster 60 wt, a saída de linha é extremamente suave e uniforme, reduzindo variações de atrito em comparação a bobinas enroladas manualmente.",
    beginnerExplanation: "É o aperto da linha fininha (geralmente branca ou preta) que fica lá embaixo na caixinha redonda da máquina. O aperto dela é ajustado em um parafusinho bem pequenininho na caixinha e serve de base para todo o resto do bordado dar certo.",
    howItWorks: [
      "1. A linha da bobina passa por baixo de uma lâmina metálica flexível na lateral da caixa de bobina.",
      "2. O parafuso menor fixa a lâmina; o parafuso maior ajusta a pressão da lâmina sobre a linha.",
      "3. Ao puxar o fio, a lâmina exerce atrito constante e suave.",
      "4. A laçadeira engata a linha superior e puxa a linha inferior com essa resistência controlada.",
      "5. A linha da bobina fica escondida no avesso em 1/3 da largura dos pontos cheios."
    ],
    applications: [
      "Ajuste da base mecânica antes de calibrar as agulhas superiores.",
      "Uso de bobinas de linha colorida para bordados com avesso aparente (toalhas de lavabo e lenços).",
      "Adaptação para linhas de bobina de diferentes espessuras (ex: 60 wt vs 80 wt).",
      "Manutenção preventiva periódica em caixas de bobina domésticas e industriais."
    ],
    characteristics: [
      "Ajuste micrométrico altamente sensível (1/4 de volta no parafuso altera drasticamente a tensão).",
      "Deve permanecer constante e estável durante toda a jornada de trabalho.",
      "Requer limpeza frequente de fiapos acumulados sob a lâmina metálica."
    ],
    commonErrors: [
      "❌ Girar o parafuso da bobina em várias voltas completas, soltando a lâmina ou espanando a rosca minúscula.",
      "❌ Tentar corrigir problemas de tensão superior mexendo desnecessariamente na bobina sem fazer testes prévios.",
      "❌ Não limpar fiapos sob a mola de tensão da caixa de bobina, deixando a saída de linha travada ou completamente frouxa."
    ],
    troubleshootingTips: [
      "Linha da bobina subindo toda para a frente do bordado: a tensão da bobina está frouxa demais ou há sujeira sob a lâmina; limpe e aperte 1/8 de volta.",
      "Linha da bobina quebrando dentro da lançadeira: a tensão está apertada demais ou a caixa de bobina está riscada por batida de agulha.",
      "Bordado enrugando no centro: solte 1/8 de volta no parafuso de ajuste da bobina no sentido anti-horário."
    ],
    dicaArtrelados: "Para saber se a tensão da sua caixa de bobina está boa sem tensiómetro: segure a ponta da linha da bobina com os dedos e deixe a caixinha suspensa no ar. Ela deve ficar parada; se você der um leve toque para cima com a mão, ela deve descer suavemente uns 2 a 3 cm e parar de novo (teste do ioiô)!",
    voceSabia: "As bobinas industriais pré-enroladas sem abas plásticas (bobinas magnéticas) possuem um microímã no centro que elimina a inércia e evita que a bobina gire em falso ao final de paradas bruscas.",
    practicalExercise: "Retire a caixa de bobina da máquina. Passe um pedaço de papel fino sob a mola metálica para remover fiapos invisíveis. Faça o teste de suspensão e recoloque na máquina.",
    quickSummary: "Resistência de saída da linha inferior ajustada pelo parafuso da caixa de bobina, servindo como referência fundamental para o equilíbrio de todo o bordado.",
    relatedTerms: ["Tensão da Linha", "Caixa de Bobina", "Tensiómetro Towa", "Bobina Pré-Enrolada", "Laçadeira"],
    tags: ["tensao bobina", "linha inferior", "caixa de bobina", "regulagem", "manutencao"]
  },
  {
    id: "tensao-excessiva-overtension",
    code: "T-019",
    letter: "T",
    term: "Tensão Excessiva (Overtension)",
    pronunciation: "ten-são e-kse-si-va (ou-ver-tên-chon)",
    level: "Intermediário 🟡",
    category: "Defeitos & Soluções",
    grammarClass: "Locução substantiva feminina.",
    origin: "Termo técnico descritivo para a condição mecânica de sobrecarga de tração exercida sobre os filamentos de linha na máquina de costura e bordado.",
    summary: "Aperto exagerado na linha superior ou inferior que provoca enrugamento do tecido, quebras constantes de linha, deformação de letras e toque rígido.",
    definition: "A Tensão Excessiva (Overtension) é o estado anômalo em que a linha superior ou inferior é submetida a uma resistência friccional desproporcionalmente alta. Essa tração exagerada estica elasticamente o fio de poliéster ou raiom durante o percurso da costura; ao ser depositado no tecido, o fio tenta retornar ao seu comprimento original, exercendo uma força elástica concentrada que franze o tecido, repuxa as bordas dos objetos, deforma círculos em elipses e causa quebras repetitivas por estresse mecânico.",
    technicalDetails: "Linhas de poliéster possuem cerca de 15% a 25% de elongação elástica antes da ruptura. Quando a tensão ultrapassa 160 gf na linha superior ou 35 gf na bobina, a linha entra na zona plástica de deformação. As consequências diretas incluem furos rasgados no tecido pela agulha, falhas de encaixe nos contornos (outline mismatch) e aquecimento por atrito na ponta da agulha.",
    beginnerExplanation: "É quando a linha está tão apertada e esticada que parece a corda de um violino super afinado. Ela puxa tanto o tecido que ele fica todo amassado, franzido e as letras ficam fininhas e tortas, além de a linha arrebentar a toda hora.",
    howItWorks: [
      "1. A linha passa com atrito exagerado pelos tensores ou fica enroscada em uma guia.",
      "2. O estica-fio puxa a linha sob alta tensão, esticando o filamento sintético como um elástico.",
      "3. O ponto é fixado no tecido com o fio sob tração máxima.",
      "4. Após a passagem da agulha, a linha encolhe no tecido, repuxando a trama e enrugando a peça.",
      "5. Em pontos densos, a força acumulada rompe o fio ou quebra a agulha."
    ],
    applications: [
      "Diagnóstico e correção de defeitos em peças de mostruário e produções em série.",
      "Identificação de passagens incorretas de linha presas em guias metálicas.",
      "Ajuste corretivo para bordar em tecidos finos, cetins e malhas delicadas.",
      "Treinamento de operadoras de bordado em controle de qualidade mecânica."
    ],
    characteristics: [
      "Tecido franzido e ondulado ao redor do bordado mesmo após passar a ferro.",
      "Letras em ponto cheio finas demais, com bordas recortadas e denteadas.",
      "Frequentes quebras de linha com a ponta arrebentada desfiada ou esticada."
    ],
    commonErrors: [
      "❌ Culpar a matriz pelo enrugamento do tecido sem antes checar se a tensão superior não está no máximo.",
      "❌ Passar a linha duas vezes em uma mesma guia por engano, dobrando a tensão de fricção sem perceber.",
      "❌ Deixar o carretel de linha com a ponta presa nas ranhuras plásticas da própria base do carretel."
    ],
    troubleshootingTips: [
      "Tecido enrugado e duro: gire o tensor superior no sentido anti-horário diminuindo 1 a 2 pontos e teste em retalho.",
      "Linha quebrando com estalo seco: verifique todo o trajeto do fio desde o cone até a agulha para achar onde está prendendo.",
      "Linha superior puxando a bobina para a frente em linha reta: reduza imediatamente a tensão da agulha correspondente."
    ],
    dicaArtrelados: "Se você estiver bordando malha de algodão ou body de bebê e o tecido começar a fazer ondinhas em volta do desenho, o problema quase sempre é Tensão Excessiva! Solte a tensão da linha superior até o bordado ficar macio como uma pintura!",
    voceSabia: "O poliéster tem memória elástica: se for bordado sob tensão excessiva, o enrugamento continuará piorando nas semanas seguintes conforme a peça é lavada e a linha tenta relaxar.",
    practicalExercise: "Pegue um retalho de tecido fino com entretela. Borde um círculo com tensão normal (3,5) e outro com a tensão no máximo (8). Compare o enrugamento e a deformação nas bordas dos dois círculos.",
    quickSummary: "Aperto exagerado na linha que estica o fio, provocando enrugamento permanente no tecido, quebras frequentes e rigidez no bordado.",
    relatedTerms: ["Tensão da Linha", "Tensão Insuficiente", "Repuxo", "Elongação da Linha", "Quebra de Linha"],
    tags: ["tensao excessiva", "overtension", "defeitos", "enrugamento", "quebra"]
  },
  {
    id: "tensao-insuficiente-frouxa-loose-tension",
    code: "T-020",
    letter: "T",
    term: "Tensão Insuficiente / Frouxa (Loose Tension)",
    pronunciation: "ten-são in-su-fi-ci-en-te / frou-xa (lu-zi tên-chon)",
    level: "Iniciante 🟢",
    category: "Defeitos & Soluções",
    grammarClass: "Locução substantiva feminina.",
    origin: "Termo técnico da mecânica têxtil para identificar a falta de fricção de retenção nos dispositivos de controle de linha da máquina.",
    summary: "Falta de aperto na linha superior ou na bobina, resultando em laços soltos na frente, 'ninhos' de linha no avesso e perda total de definição.",
    definition: "A Tensão Insuficiente / Frouxa (Loose Tension) ocorre quando o fio superior ou inferior não recebe a resistência necessária para recolher a folga durante o curso do estica-fio. Quando a tensão superior está frouxa, a linha sobra na laçada e forma laços, argolas ou 'barbas' no direito da peça e volumosos nós de linha acumulada (ninhos de passarinho) embaixo da chapa da agulha. Quando a bobina está frouxa, a linha branca sobe desordenadamente para a frente do bordado.",
    technicalDetails: "Uma tensão superior abaixo de 60 gf é insuficiente para recolher o laço formado pela laçadeira rotativa em velocidades superiores a 600 PPM. A folga de linha não recolhida pelo estica-fio fica livre na área da caixa de bobina, onde é fisgada repetidamente nas rotações subsequentes, travando o eixo da máquina com um emaranhado de filamentos que pode descalibrar o tempo da laçadeira (timing).",
    beginnerExplanation: "É quando a linha está tão solta e frouxa que fica sobrando linha por todo lado. Na frente do bordado ficam aquelas argolinhas e laços caídos parecendo pelos, e embaixo fica um bolo enorme de linha embaraçada que trava a máquina.",
    howItWorks: [
      "1. A linha passa solta sem entrar no meio dos discos de tensão (geralmente por erro de enfiamento).",
      "2. A laçadeira puxa uma quantidade de linha para formar o ponto.",
      "3. O estica-fio sobe, mas como não há resistência nos discos, ele apenas puxa mais linha do cone em vez de apertar o ponto no tecido.",
      "4. O excesso de linha fica pendurado no tecido formando laçadas soltas.",
      "5. Na próxima rotação, a agulha bate no bolo de linha e trava a máquina."
    ],
    applications: [
      "Resolução de travamentos de máquina e emaranhados de linha na lançadeira.",
      "Diagnóstico de problemas de enfiamento incorreto em máquinas domésticas e industriais.",
      "Ajuste da mola recuperadora (check spring) para manter a linha tensionada durante a descida.",
      "Prevenção de danos à caixa de bobina e à barra da agulha."
    ],
    characteristics: [
      "Laços soltos e argolas salientes na superfície do bordado.",
      "Emaranhado gigante de linha (ninho) travando a máquina por baixo da chapa.",
      "Pontos desordenados sem nitidez de contorno ou definição geométrica."
    ],
    commonErrors: [
      "❌ Passar a linha na máquina com o calcador abaixado, impedindo que a linha entre nos discos tensores.",
      "❌ Continuar forçando a máquina a rodar quando ela travar por ninho de linha, entortando a barra da agulha.",
      "❌ Achar que o ninho de linha embaixo é defeito da bobina, quando 95% das vezes é a linha superior que está sem tensão."
    ],
    troubleshootingTips: [
      "Bolo de linha gigante travou embaixo: corte as linhas por baixo com cuidado, retire o tecido, limpe a caixa de bobina e repasse a linha superior com o calcador levantado.",
      "Laçadas pequenas na frente do bordado: aperte o botão de tensão superior subindo 1 ou 2 números.",
      "Linha branca da bobina subindo em linha reta: aperte o parafuso da caixa de bobina em 1/8 de volta."
    ],
    dicaArtrelados: "Regra de ouro que toda bordadeira precisa gravar no coração: se o bolo de linha está EMBAIXO da peça, a culpa é da linha de CIMA que está fora do tensor! Repasse a linha superior inteirinha e o problema acaba na hora!",
    voceSabia: "O fenômeno do ninho de linha embaixo da chapa é chamado internacionalmente de 'Bird Nesting' porque o emaranhado de fios se parece exatamente com um ninho de passarinhos.",
    practicalExercise: "Passe a linha superior na sua máquina deixando-a intencionalmente fora dos discos de tensão. Borde 10 pontos em um retalho e pare imediatamente para ver a formação instantânea de laços frouxos.",
    quickSummary: "Falta de resistência na linha que provoca laçadas soltas na frente e grandes emaranhados de linha (ninhos) no avesso, travando a máquina.",
    relatedTerms: ["Tensão da Linha", "Tensão Excessiva", "Bird Nesting", "Pratos Tensores", "Estica-Fio"],
    tags: ["tensao frouxa", "loose tension", "ninho de linha", "lacadas", "defeitos"]
  },
  {
    id: "tensao-irregular",
    code: "T-021",
    letter: "T",
    term: "Tensão Irregular",
    pronunciation: "ten-são ir-re-gu-lar",
    level: "Intermediário 🟡",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução substantiva feminina.",
    origin: "Defeito funcional decorrente de desgaste mecânico, acúmulo de sujeira, conicidade defeituosa de carretéis ou passagens de linha obstruídas.",
    summary: "Variação inconstante da força de tração durante o bordado, alternando trechos perfeitos com pontos frouxos, laçadas e quebras imprevistas.",
    definition: "A Tensão Irregular é a instabilidade mecânica em que a força de tração da linha superior ou inferior flutua imprevisivelmente ao longo da execução da matriz. Diferente da tensão permanentemente alta ou baixa, a tensão irregular alterna trechos de costura perfeitamente balanceados com surtos repentinos de laçadas soltas, nós de linha, quebras súbitas ou repuxamentos isolados, tornando impossível prever o resultado final da peça.",
    technicalDetails: "As causas físicas mais comuns incluem: 1) Acúmulo de fiapos e parafina prensada entre os discos tensores, que faz a linha prender e soltar aos solavancos; 2) Mola recuperadora (check spring) quebrada ou sem curso correto; 3) Cone de linha com rebarbas plásticas na base que prendem o fio a cada rotação; 4) Bobina com enrolamento irregular ou amassada; e 5) Ranhuras de desgaste (grooves) cavadas pela linha nas guias de metal.",
    beginnerExplanation: "É quando a máquina parece que ficou 'maluca': começa bordando perfeito, do nada faz um pedaço com laços soltos, depois aperta e quase rasga o tecido, e depois volta ao normal. Isso acontece por sujeirinha nos discos ou linha enganchando no cone.",
    howItWorks: [
      "1. A máquina trabalha normalmente com fluxo regular de linha.",
      "2. A linha engata momentaneamente em uma rebarba do cone ou passa por um bloco de sujeira nos discos.",
      "3. A tensão sobe bruscamente por alguns centímetros, deformando os pontos.",
      "4. O fio se solta do obstáculo e a tensão cai bruscamente, gerando laços frouxos.",
      "5. O ciclo de instabilidade se repete a cada giro do carretel ou movimento da agulha."
    ],
    applications: [
      "Manutenção preventiva de rotina em cabeçotes de máquinas industriais e domésticas.",
      "Inspeção de qualidade de cones de linha e bobinas antes de produções comerciais.",
      "Polimento e substituição de guias de fio e molas recuperadoras desgastadas.",
      "Diagnóstico de defeitos intermitentes que não se resolvem apenas girando o botão do tensor."
    ],
    characteristics: [
      "Comportamento inconstante com perda intermitente de qualidade.",
      "Dificuldade de diagnóstico imediato sem inspeção minuciosa de todo o trajeto do fio.",
      "Avesso com proporção de bobina desordenada (ora muito larga, ora invisível)."
    ],
    commonErrors: [
      "❌ Ficar girando o botão de tensão continuamente tentando acertar um defeito que na verdade é sujeira nos discos.",
      "❌ Usar cones de linha deitados na máquina sem o pino e o prendedor adequado para permitir desenrolamento livre.",
      "❌ Reutilizar bobinas plásticas amassadas, trincadas ou com rebarbas que travam na caixa de bobina."
    ],
    troubleshootingTips: [
      "Tensão oscilando sem parar: limpe os discos tensores com álcool isopropílico e passe fio dental dobrado para remover ceras acumuladas.",
      "Linha dando trancos ao desenrolar: coloque uma rede de proteção de carretel (thread net) sobre o cone de linha para suavizar o desbobinamento.",
      "Pontos falhando em direções específicas: inspecione a mola recuperadora (check spring) e verifique se ela está ativa e flexível."
    ],
    dicaArtrelados: "Use sempre uma 'redinha' elástica para cones de linha, especialmente em fios de poliéster brilhante ou fios metálicos! A rede impede que a linha caia em cascata e enrosque na base do cone, garantindo uma tensão 100% lisa e constante do início ao fim do cone!",
    voceSabia: "Uma única partícula microscópica de cera de linha presa entre os pratos tensores pode alterar a tensão em mais de 40 gramas-força em frações de segundo.",
    practicalExercise: "Examine todos os cones de linha na sua mesa de trabalho. Passe a unha na base plástica de cada um para procurar rebarbas que possam prender o fio e descarte bobinas plásticas que estejam riscadas.",
    quickSummary: "Flutuação instável na força de tração da linha durante o bordado, causada por sujeira nos discos, carretéis defeituosos ou peças desgastadas.",
    relatedTerms: ["Tensão da Linha", "Redinha de Cone", "Mola Recuperadora", "Pratos Tensores", "Caixa de Bobina"],
    tags: ["tensao irregular", "instabilidade", "manutencao", "redinha", "defeitos"]
  },
  {
    id: "tensao-e-formacao-do-ponto-equilibrio-de-um-terco",
    code: "T-022",
    letter: "T",
    term: "Tensão e Formação do Ponto (Equilíbrio de 1/3)",
    pronunciation: "ten-são e for-ma-ção do pon-to (e-qui-lí-bri-o de um ter-ço)",
    level: "Intermediário 🟡",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução substantiva técnica.",
    origin: "Padrão de excelência e controle de qualidade industrial estabelecido internacionalmente para a inspeção de matrizes em ponto cheio no avesso do tecido.",
    summary: "Regra áurea de inspeção que determina que a linha da bobina deve ocupar exatamente 1/3 central da coluna no avesso, ladeada por 1/3 de linha superior em cada margem.",
    definition: "A relação entre Tensão e Formação do Ponto no bordado computadorizado é regida pela famosa 'Regra de Um Terço' (1/3 Rule). Diferente da costura reta tradicional (onde o nó deve ficar exatamente escondido entre as duas faces do tecido), no bordado eletrônico a linha superior deve ser intencionalmente puxada para o avesso em todas as colunas de ponto cheio (satin). No avesso perfeito, a linha da bobina (branca ou preta) deve ocupar o terço central (33%), enquanto a linha colorida superior deve ocupar os dois terços laterais (33% na esquerda e 33% na direita).",
    technicalDetails: "Essa configuração geométrica de 1/3 - 1/3 - 1/3 assegura dois objetivos técnicos cruciais: 1) Garante que a linha da bobina nunca apareça na frente do bordado, mesmo em curvas fechadas e mudanças rápidas de ângulo; 2) Proporciona uma borda arredondada e rica (rolotê) na frente da coluna de cetim, criando volume e brilho superior. Em pontos tatami, o nó deve repousar ligeiramente no avesso sem puxar o tecido.",
    beginnerExplanation: "É o segredo dos profissionais para saber se a máquina está regulada: quando você vira o bordado de costas, você deve ver três faixas iguaizinhas: uma faixa da cor do bordado na esquerda, uma faixa branca da bobina bem no meio, e outra faixa da cor do bordado na direita!",
    howItWorks: [
      "1. A máquina executa uma coluna de ponto cheio de 4 mm de largura.",
      "2. A tensão superior mais solta e a bobina firme permitem que a agulha puxe a linha colorida para o fundo.",
      "3. O ponto ancora nas duas margens externas do avesso.",
      "4. A linha da bobina fica centralizada como uma coluna vertebral sustentando a costura.",
      "5. A frente da peça exibe apenas a linha superior pura, brilhante e sem contaminações de cor."
    ],
    applications: [
      "Inspeção visual padrão de controle de qualidade em ateliês e indústrias têxteis.",
      "Calibragem padrão no início do dia através do bordado de tiras de teste.",
      "Ajuste para bordado de monogramas e letras de alta precisão em camisaria.",
      "Avaliação de compatibilidade entre linhas de diferentes fabricantes."
    ],
    characteristics: [
      "Critério visual objetivo e infalível de avaliação técnica de tensão.",
      "Garantia de acabamento frontal impecável sem pontos brancos.",
      "Sensação de toque macio e flexível no contato com a pele."
    ],
    commonErrors: [
      "❌ Querer que o avesso do bordado fique igual à costura reta (com a bobina invisível), o que faz a linha branca estourar na frente do bordado nas curvas.",
      "❌ Aceitar a linha da bobina ocupando mais de 80% do avesso, o que indica tensão superior excessivamente apertada.",
      "❌ Ter a linha da bobina encostada apenas em uma das laterais, denunciando que a linha superior está frouxa em um dos lados do curso."
    ],
    troubleshootingTips: [
      "Faixa branca central muito estreita (< 20% do avesso): aperte a tensão superior ou afrouxe ligeiramente a bobina.",
      "Faixa branca muito larga (> 50% do avesso): afrouxe a tensão superior ou aperte a bobina.",
      "Linha branca sumiu do avesso e está toda na frente: repasse a linha superior imediatamente pois ela está totalmente solta do tensor."
    ],
    dicaArtrelados: "Toda manhã, antes de começar as encomendas do dia, borde uma tira de teste de 5 colunas de ponto cheio em um retalho de tecido com entretela. Vire no avesso: se estiver com a regra de 1/3 certinha, sua máquina está pronta para um dia inteiro de bordados perfeitos!",
    voceSabia: "A regra de 1/3 foi desenvolvida na Suíça nos anos 1950 para as máquinas industriais de bordado Schifflí e continua sendo o padrão ouro universal adotado por todas as marcas de máquinas do mundo.",
    practicalExercise: "Borde uma letra 'H' em ponto cheio de 30 mm de altura. Vire a peça no avesso e use uma régua milimetrada para medir as 3 faixas das colunas: meça a margem esquerda, a faixa central branca e a margem direita.",
    quickSummary: "Padrão de excelência de tensão onde o avesso do ponto cheio apresenta a linha da bobina no terço central e a linha superior nas duas margens laterais.",
    relatedTerms: ["Tensão da Linha", "Fox Test", "Ponto Cheio", "Tensão da Bobina", "Controle de Qualidade"],
    tags: ["regra de um terco", "formacao do ponto", "qualidade", "avesso perfeito", "calibragem"]
  },
  {
    id: "tensao-e-cobertura",
    code: "T-023",
    letter: "T",
    term: "Tensão e Cobertura",
    pronunciation: "ten-são e co-ber-tu-ra",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Estudo da física aplicada ao bordado digital que analisa a interação direta entre a força de tensão mecânica e a densidade óptica de preenchimento.",
    summary: "Relação física onde a tensão da linha afeta diretamente a espessura aparente do fio, abrindo ou fechando a cobertura do tecido de fundo.",
    definition: "A relação entre Tensão e Cobertura descreve como a força de tração mecânica altera a morfologia física da linha depositada sobre o tecido. Quando a linha de bordado (especialmente o filamento de poliéster ou raiom) é submetida a alta tensão, ela se estica e seu diâmetro efetivo se reduz (afinamento por tração). Como consequência, o fio afinado não preenche totalmente o espaço programado na matriz, revelando o tecido de base entre as passadas de ponto e comprometendo a cobertura visual.",
    technicalDetails: "Uma linha 40 wt de poliéster tem diâmetro nominal de aproximadamente 0,25 mm sob repouso. Sob tensão excessiva (> 150 gf), o diâmetro pode cair para 0,19 mm (-24% de espessura aparente). Para restaurar a cobertura de uma matriz bordada sob alta tensão sem alterar o arquivo digital, a operadora deve relaxar a tensão mecânica nos discos, permitindo que os filamentos 'floresçam' e se expandam lateralmente sobre o tecido.",
    beginnerExplanation: "Quando a gente estica muito uma linha, ela fica mais fininha; quando ela fica mais soltinha, ela fica fofa e gordinha. Se a máquina estiver apertada demais, a linha fica tão fina que o tecido de baixo começa a aparecer no meio do bordado!",
    howItWorks: [
      "1. A linha sob tensão moderada preserva sua torção natural e seu volume de filamentos.",
      "2. Ao ser depositada sobre o subponto, a linha assenta e relaxa, ocupando toda a sua largura nominal.",
      "3. As passadas adjacentes encostam umas nas outras sem deixar frestas de luz.",
      "4. Se a tensão for aumentada em excesso, a linha estica, afina e cria espaços vazios entre as fileiras.",
      "5. O ajuste fino da tensão restaura a cobertura sem precisar aumentar a quantidade de pontos da matriz."
    ],
    applications: [
      "Otimização de matrizes para evitar aumento desnecessário de contagem de pontos (stitch count).",
      "Cobertura perfeita de tecidos escuros com linhas de tonalidade clara.",
      "Ajuste para bordados com fios especiais de baixa torção (como raiom e seda).",
      "Redução do consumo de linha e do tempo de máquina em produções industriais."
    ],
    characteristics: [
      "Permite excelente cobertura com menor densidade de programação.",
      "Preserva o brilho e o reflexo sedoso original dos filamentos.",
      "Reduz a rigidez e o peso total do bordado na peça."
    ],
    commonErrors: [
      "❌ Aumentar a densidade no software (colocando mais pontos) para tampar falhas causadas puramente por linha super tensionada e afinada.",
      "❌ Bordar com tensão muito apertada sobre tecidos de cor contrastante (ex: linha branca sobre tecido preto), deixando o fundo vazando.",
      "❌ Usar linha de baixa qualidade com espessura irregular, gerando trechos cobertos e trechos ralos na mesma matriz."
    ],
    troubleshootingTips: [
      "Tecido aparecendo entre as linhas do tatami: afrouxe ligeiramente a tensão da linha superior antes de cogitar alterar o arquivo da matriz.",
      "Bordado parecendo ralo e opaco: solte a tensão e certifique-se de que a agulha é do tamanho correto para a linha (ex: agulha 75/11 para linha 40 wt).",
      "Linha abrindo nas bordas das letras: ative a compensação de repuxo no software e reduza a tensão superior na máquina."
    ],
    dicaArtrelados: "Se você quer um bordado que cubra o tecido perfeitamente parecendo uma pintura a óleo, não aumente a densidade no programa! Apenas deixe a tensão da linha superior no ponto mais suave possível (sem fazer laçadas no avesso). A linha vai assentar fofinha e cobrir tudo com muito menos pontos!",
    voceSabia: "Os fios de raiom (viscose) têm até 30% mais volume aparente de cobertura do que os fios de poliéster comuns quando bordados sob baixa tensão, por isso são os favoritos da alta costura.",
    practicalExercise: "Borde dois quadrados de tatami de 30x30 mm com a mesma matriz: o primeiro com a tensão superior no nível 6 (apertada) e o segundo no nível 3 (suave). Coloque os dois contra a luz e compare a cobertura e a opacidade.",
    quickSummary: "Princípio físico onde a tensão suave permite que a linha mantenha sua espessura total e cubra o tecido com perfeição, enquanto a tensão alta afina o fio e gera falhas de cobertura.",
    relatedTerms: ["Densidade de Ponto", "Tensão da Linha", "Tatami", "Cobertura de Ponto", "Espessura da Linha"],
    tags: ["tensao", "cobertura", "densidade", "volume", "qualidade visual"]
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_T4: Verbete[] = [
  {
    id: "tensao-e-densidade",
    code: "T-024",
    letter: "T",
    term: "Tensão e Densidade",
    pronunciation: "ten-são e den-si-da-de",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Conceito de digitalização técnica que descreve como a densidade de programação de uma matriz exige calibração proporcional na tensão da máquina.",
    summary: "Relação interdependente onde matrizes de alta densidade exigem tensões mais suaves para evitar rigidez, enquanto baixas densidades pedem tensões firmes.",
    definition: "A correlação entre Tensão e Densidade é o princípio de engenharia do bordado que governa o comportamento mecânico conjunto da matriz e da máquina. Quanto maior a densidade de pontos programada em um objeto (espaçamento menor que 0,36 mm), mais suave e relaxada deve ser a tensão da linha na máquina para evitar acúmulo de tração que deforme o tecido ou quebre a agulha. Por outro lado, em matrizes abertas e de baixa densidade (espaçamento maior que 0,60 mm), a tensão deve ser levemente mais firme para manter os fios esticados e alinhados sem folgas.",
    technicalDetails: "Cada penetração de agulha com fio tensionado adiciona uma fração de força elástica ao tecido. Em um tatami denso com 10.000 pontos, a soma dessas forças pode atingir dezenas de quilogramas de tração concentrada. Se a tensão estiver alta (ex: 150 gf), o tecido sofrerá encolhimento tridimensional severo (cupping). Reduzir a tensão para 100 gf diminui a tração total acumulada em mais de 30%, preservando a estabilidade da peça.",
    beginnerExplanation: "É a regrinha que diz: se o bordado tem muitos pontos juntinhos e pesados, a máquina precisa costurar com a linha mais soltinha para não virar uma 'placa dura' nem enrugar o tecido. Se o bordado é levinho e aberto, a linha pode ficar um pouco mais firme.",
    howItWorks: [
      "1. O programador define a densidade no software (ex: 0,38 mm para ponto cheio).",
      "2. A operadora ajusta a tensão da máquina de acordo com a densidade da matriz e o tecido.",
      "3. Em áreas de densidade concentrada, a linha relaxada se acomoda sem puxar a estrutura têxtil.",
      "4. O bordado atinge cobertura total, toque maleável e preserva o alinhamento dos contornos.",
      "5. A peça final mantém o caimento natural sem deformações nas bordas."
    ],
    applications: [
      "Calibragem para bordados em camisas polo e camisetas de malha fina.",
      "Ajuste para bordar patches e emblemas com alta densidade sobre sarja.",
      "Otimização de arquivos com múltiplos níveis de densidade na mesma peça.",
      "Planejamento de matrizes de alta velocidade para confecções de grande porte."
    ],
    characteristics: [
      "Equilíbrio fundamental entre o arquivo digital e a máquina física.",
      "Garante maciez e flexibilidade mesmo em matrizes ricas em detalhes.",
      "Evita quebras de agulha e corte de fibras do tecido por compactação."
    ],
    commonErrors: [
      "❌ Manter a tensão da máquina super apertada ao bordar arquivos pesados e densos de brasões, rasgando o tecido ao redor.",
      "❌ Achar que a máquina deve manter a mesma regulagem fixa para todos os tipos de matrizes e tecidos.",
      "❌ Reduzir a densidade da matriz mas apertar a tensão da máquina, anulando o benefício da redução."
    ],
    troubleshootingTips: [
      "Bordado ficando muito duro e espesso: solte 1 ponto na tensão superior e reduza a densidade do arquivo em 10% no software.",
      "Contornos desencontrados em matriz densa: a tensão alta repuxou o tecido; diminua a tensão e aumente a entretela.",
      "Pontos soltos em desenhos abertos: aperte suavemente o tensor superior da máquina."
    ],
    dicaArtrelados: "Antes de carregar uma matriz pesada com muitos pontos, solte um pouquinho a tensão superior da sua máquina. O bordado vai correr mais rápido, a agulha não vai esquentar e a peça vai ficar com aquele toque aveludado maravilhoso!",
    voceSabia: "Em matrizes industriais de alta costura japonesa, a densidade é calculada levando em conta até o coeficiente de elasticidade do fio de poliéster sob diferentes temperaturas de atrito.",
    practicalExercise: "Borde um brasão denso com tensão superior em 5 e o mesmo brasão em outro retalho com tensão superior em 3,5. Dobre os dois tecidos com as mãos e sinta a diferença dramática de maciez entre as duas amostras.",
    quickSummary: "Princípio de ajuste onde matrizes densas requerem tensões mais suaves para evitar dureza e repuxo, enquanto matrizes abertas pedem tensão firme para alinhamento.",
    relatedTerms: ["Densidade de Ponto", "Tensão da Linha", "Repuxo", "Rigidez Têxtil", "Underlay"],
    tags: ["tensao e densidade", "programacao", "maciez", "calibragem", "tecido"]
  },
  {
    id: "tensao-e-quebra-de-linha",
    code: "T-025",
    letter: "T",
    term: "Tensão e Quebra de Linha",
    pronunciation: "ten-são e que-bra de li-nha",
    level: "Iniciante 🟢",
    category: "Defeitos & Soluções",
    grammarClass: "Locução substantiva feminina.",
    origin: "Principal causa mecânica de paradas não programadas em máquinas de bordado domésticas e industriais desde os primeiros teares automáticos.",
    summary: "Relação de causa e efeito onde tensões incorretas, trancos e passagens obstruídas provocam o rompimento contínuo do fio durante o bordado.",
    definition: "A correlação entre Tensão e Quebra de Linha descreve a relação direta entre o excesso de tração ou picos abruptos de fricção e a falha estrutural por ruptura dos filamentos de costura. Embora existam outras causas de quebra (como agulha torta ou tempo da lançadeira desregulado), mais de 70% das quebras de linha no bordado eletrônico são originadas por tensão excessiva, enrosco do fio em guias, discos tensores sujos ou choque térmico por atrito em altas velocidades.",
    technicalDetails: "Uma linha de poliéster 40 wt padrão possui uma resistência à tração (tenacidade) de aproximadamente 1.100 a 1.300 centinewtons (cN). Quando a tensão de operação ultrapassa esse limite ou quando ocorre um tranco brusco (efeito chicote), a linha atinge o ponto de ruptura. A quebra por tensão excessiva caracteriza-se por uma ponta arrebentada esticada e afilada, enquanto a quebra por corte de rebarba ou agulha cega deixa uma ponta esmagada ou em forma de pincel desfiado.",
    beginnerExplanation: "Quando a linha arrebenta toda hora, o motivo número um é que a linha está puxada forte demais ou ficou presa em algum cantinho da máquina. Aliviando a tensão ou destravando o caminho do fio, a máquina volta a bordar sem parar.",
    howItWorks: [
      "1. A linha corre sob tração elevada ou encontra uma obstrução no caminho do carretel.",
      "2. A agulha sobe e desce em alta velocidade (ex: 800 vezes por minuto), gerando calor e fricção no olho da agulha.",
      "3. O estica-fio dá o puxão para assentar o nó do ponto.",
      "4. A força combinada de tração e calor supera a resistência elástica do poliéster.",
      "5. A linha se rompe, o sensor óptico detecta a ausência de fio e para a máquina com alarme de quebra."
    ],
    applications: [
      "Diagnóstico e manutenção rápida durante a produção no ateliê.",
      "Regulagem de parâmetros para bordar com linhas delicadas (fios metálicos, raiom e algodão).",
      "Redução do tempo de parada de máquina e aumento da lucratividade por hora trabalhada.",
      "Inspeção visual da ponta do fio quebrado para identificar a causa raiz exata."
    ],
    characteristics: [
      "Diagnóstico identificável pelo aspecto da ponta do fio rompido.",
      "Causa paradas frequentes, perda de tempo e furos indesejados no tecido.",
      "Pode ser prevenida com calibragem correta e uso de cones de linha de qualidade."
    ],
    commonErrors: [
      "❌ Trocar a agulha três vezes sem antes verificar se o cone de linha não está engatando na própria base plástica.",
      "❌ Apertar ainda mais a tensão achando que a linha está quebrando porque está solta.",
      "❌ Usar linha velha, ressecada pelo sol ou guardada em gaveta úmida por anos."
    ],
    troubleshootingTips: [
      "Linha quebrando a cada 2 minutos: solte 1 a 2 números na tensão superior e coloque uma redinha no cone de linha.",
      "Ponta do fio quebrada parece um 'pincel' desfiado: troque a agulha imediatamente, pois o olho da agulha pode estar com rebarba cortante.",
      "Ponta do fio afilada e esticada: a tensão superior está alta demais; afrouxe os discos tensores."
    ],
    dicaArtrelados: "Se uma linha começar a quebrar sem motivo aparente, pegue um pedaço dela com as duas mãos e puxe com força. Se ela arrebentar fácil e sem elasticidade, a linha ressecou e perdeu a vida útil. Guarde sempre seus cones de linha longe da luz do sol e da umidade!",
    voceSabia: "A temperatura no olho de uma agulha de bordar a 1.000 PPM pode ultrapassar 180°C se a linha estiver sob alta tensão, o suficiente para derreter filamentos de poliéster em frações de segundo.",
    practicalExercise: "Pegue a linha da sua máquina e passe a mão ao longo de todo o caminho dela: do suporte do cone, passando pelos guias, discos tensores, estica-fio e olho da agulha. Puxe suavemente para sentir se o deslizamento é contínuo e sem trancos.",
    quickSummary: "Relação onde tração excessiva, trancos ou atrito térmico superam a resistência da linha, provocando quebras frequentes e paradas na produção.",
    relatedTerms: ["Tensão da Linha", "Quebra de Linha", "Olho da Agulha", "Estica-Fio", "Redinha de Cone"],
    tags: ["quebra de linha", "tensao", "defeitos", "manutencao", "resolucao"]
  },
  {
    id: "tensiometro-de-bobina-towa-tension-gauge",
    code: "T-026",
    letter: "T",
    term: "Tensiómetro de Bobina (Towa Tension Gauge)",
    pronunciation: "ten-si-ô-me-tro de bo-bi-na (tô-ua tên-chon gei-dji)",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Criado no Japão pela fabricante Towa Corporation, tornou-se o instrumento padrão de precisão em ateliês profissionais e fábricas de bordado do mundo inteiro.",
    summary: "Instrumento mecânico ou digital de medição de precisão em gramas-força (gf) para calibragem exata da tensão da caixa de bobina.",
    definition: "O Tensiómetro de Bobina (Towa Bobbin Tension Gauge) é um instrumento de medição de precisão projetado especificamente para aferir numericamente a força de atrito (em gramas-força / gf ou milinewtons) exercida pela mola de lâmina da caixa de bobina sobre a linha inferior. Ele elimina completamente a necessidade de testes empíricos imprecisos (como o 'teste da gota' ou puxões manuais), permitindo padronizar todas as caixas de bobina de uma fábrica no valor numérico exato.",
    technicalDetails: "O dispositivo possui modelos específicos para diferentes tamanhos de bobina: Tipo L (padrão doméstico e industrial compacto) e Tipo M (bobinas gigantes industriais). A caixa de bobina é encaixada no corpo do aparelho, a linha é passada por duas roldanas conectadas a uma mola calibrada de torção com mostrador de ponteiro ou display digital. A tensão padrão para bordado situa-se estritamente entre 18 gf e 25 gf para a grande maioria das aplicações.",
    beginnerExplanation: "É um aparelhinho medidor (como uma balança de precisão) onde a gente encaixa a caixinha da bobina e puxa a linha. O ponteiro mostra exatamente a força do aperto em números, para você nunca mais ter dúvida se a bobina está muito apertada ou muito frouxa.",
    howItWorks: [
      "1. A caixa de bobina com a bobina carregada é encaixada no alojamento do tensiómetro Towa.",
      "2. A ponta da linha inferior é passada entre as roldanas metálicas do dispositivo.",
      "3. A operadora puxa a linha suavemente a uma velocidade constante de 10 cm por segundo.",
      "4. O ponteiro do mostrador se desloca e indica o valor numérico exato da tensão (ex: 22 gf).",
      "5. Se o valor estiver fora da faixa ideal (18-25 gf), ajusta-se o parafuso da caixa de bobina com chave de fenda até atingir o número perfeito."
    ],
    applications: [
      "Calibragem e equalização de dezenas de caixas de bobina em fábricas de bordado.",
      "Padronização de qualidade rigorosa para ateliês que buscam acabamento de excelência.",
      "Diagnóstico instantâneo de caixas de bobina com lâminas danificadas ou gastas.",
      "Ajuste específico para bordados de alta definição, microletras e linhas metálicas."
    ],
    characteristics: [
      "Medição numérica precisa, reprodutível e livre de achismos.",
      "Construção mecânica japonesa robusta e de altíssima durabilidade.",
      "Compatível com caixas de bobina industriais e domésticas do tipo L e M."
    ],
    commonErrors: [
      "❌ Puxar a linha com trancos bruscos durante a leitura, fazendo o ponteiro oscilar e dar falsa indicação.",
      "❌ Usar o tensiómetro de tamanho errado (ex: tentar medir caixa tipo M no aparelho tipo L).",
      "❌ Não calibrar a bobina com a mesma linha que será realmente utilizada na produção."
    ],
    troubleshootingTips: [
      "Ponteiro oscilando descontroladamente durante o puxão: há sujeira ou fiapos sob a lâmina da caixa de bobina; limpe antes de medir.",
      "Tensão não muda ao girar o parafuso: a lâmina metálica perdeu a pressão ou a rosca do parafuso está espanada; substitua a caixa de bobina.",
      "Valor lido abaixo de 15 gf mesmo apertando: aperte o parafuso menor de retenção da mola ou troque a mola de lâmina."
    ],
    dicaArtrelados: "Ter um tensiómetro Towa no ateliê é o divisor de águas entre o amadorismo e o profissionalismo. Quando você calibra sua bobina em 22 gf no Towa, você resolve 80% de todas as dores de cabeça de regulagem da sua máquina de uma vez por todas!",
    voceSabia: "Nas auditorias de qualidade de marcas globais esportivas (como Nike e Adidas), a primeira coisa que os inspetores verificam nas fábricas terceirizadas é a leitura do tensiómetro Towa nas caixas de bobina.",
    practicalExercise: "Se tiver acesso a um tensiómetro Towa, insira sua caixa de bobina e meça a tensão. Gire o parafuso 1/8 de volta para a direita e observe o ponteiro subir 5 gf. Gire 1/8 para a esquerda e veja o ponteiro voltar.",
    quickSummary: "Instrumento de medição mecânico de alta precisão que afere a força da caixa de bobina em gramas-força (18 a 25 gf), garantindo calibragem perfeita.",
    relatedTerms: ["Tensão da Bobina", "Caixa de Bobina", "Calibragem", "Controle de Qualidade", "Fox Test"],
    tags: ["towa", "tensiometro", "bobina", "medicao", "precisao"]
  },
  {
    id: "teste-de-tensao-teste-da-letra-i-fox-test",
    code: "T-027",
    letter: "T",
    term: "Teste de Tensão (Teste da Letra 'I' / Fox Test)",
    pronunciation: "tês-ti de ten-são (tês-ti da le-tra 'i' / fóks tês-ti)",
    level: "Iniciante 🟢",
    category: "Mecânica & Manutenção",
    grammarClass: "Locução substantiva masculina.",
    origin: "Criado como protocolo de diagnóstico rápido na indústria de bordados para testar simultaneamente todas as agulhas de máquinas multi-agulhas através do bordado de colunas retas em ponto cheio.",
    summary: "Matriz de teste composta por colunas retas em ponto cheio (como letras 'I' ou faixas) usada para avaliar e calibrar a tensão no avesso do tecido.",
    definition: "O Teste de Tensão (frequentemente chamado de Teste da Letra 'I', Fox Test ou Coluna de Cetim de Teste) é uma matriz de calibração padrão composta por uma série de colunas verticais em ponto cheio (satin) de aproximadamente 25 a 35 mm de comprimento por 4 a 5 mm de largura. Ao bordar essas colunas em tecido com entretela e inspecionar o avesso da peça, a bordadeira avalia visualmente se a proporção de 1/3 da linha da bobina está perfeitamente centralizada em cada agulha da máquina.",
    technicalDetails: "Em máquinas industriais multi-cabeças com 6, 12 ou 15 agulhas por cabeça, o teste é executado bordando uma coluna para cada agulha em sequência automática. Isso permite regular individualmente cada tensor superior sem precisar bordar desenhos complexos. A espessura da coluna (4 mm) é matematicamente calculada para tornar evidente qualquer assimetria de tensão entre as margens esquerda e direita.",
    beginnerExplanation: "É um bordadinho simples de barrinhas retas (que parecem a letra I maiúscula) que a gente faz para olhar a parte de trás do tecido e ter certeza absoluta de que a máquina está regulada e pronta para trabalhar sem erros.",
    howItWorks: [
      "1. A máquina borda uma coluna vertical em ponto cheio de 30x4 mm para cada agulha.",
      "2. A peça é retirada do bastidor e virada com o avesso voltado para cima sob boa iluminação.",
      "3. A operadora analisa o terço central: a faixa branca da bobina deve ocupar 33% da largura.",
      "4. Se a faixa branca estiver muito estreita em uma agulha, aperta-se o tensor superior daquela agulha.",
      "5. Se a faixa branca estiver muito larga, afrouxa-se o tensor correspondente e repete-se a prova."
    ],
    applications: [
      "Rotina diária de abertura de turno em ateliês e indústrias.",
      "Inspeção após troca de lotes ou marcas de linha de bordado.",
      "Calibragem simultânea de todas as agulhas de máquinas multi-cabeças.",
      "Validação de regulagem após manutenção ou troca da caixa de bobina."
    ],
    characteristics: [
      "Método visual mais rápido, econômico e confiável de calibragem prática.",
      "Gasta pouquíssima linha e retalhos de tecido simples.",
      "Gera um histórico físico de controle de qualidade para o ateliê."
    ],
    commonErrors: [
      "❌ Fazer o teste em tecido solto sem entretela, gerando repuxo artificial que distorce a leitura da tensão.",
      "❌ Regular a tensão olhando apenas a frente do teste e ignorando a inspeção obrigatória do avesso.",
      "❌ Alterar a tensão de várias agulhas ao mesmo tempo sem anotar qual correspondia a cada coluna."
    ],
    troubleshootingTips: [
      "Faixa branca no avesso está torta (colada em um só lado): a linha superior está deslizando com folga em um dos cursos da agulha; verifique a mola recuperadora.",
      "Coluna 3 está com laçadas e as outras estão boas: o problema é exclusivo do tensor da agulha número 3; limpe os discos e repasse a linha.",
      "Todas as colunas estão com a bobina muito larga: aperte a mola da caixa de bobina em 1/8 de volta e repita o teste."
    ],
    dicaArtrelados: "Tenha uma matriz salva no seu pendrive chamada 'TESTE_TENSAO.DST' com 6 a 12 letrinhas 'I'. Toda vez que você colocar uma linha nova ou achar que o bordado está estranho, borde essa matriz em 1 minuto e tire a prova dos 9!",
    voceSabia: "O teste da letra 'I' também é conhecido como 'Fox Test' em homenagem à empresa americana Fox Embroidery, que distribuiu gratuitamente matrizes de teste padronizadas para milhares de fábricas no início dos anos 1990.",
    practicalExercise: "Crie uma matriz com 4 letras 'I' maiúsculas em fonte simples de 30 mm de altura e 4 mm de largura de coluna. Borde no seu bastidor com entretela, vire no avesso e meça a faixa de bobina de cada uma.",
    quickSummary: "Matriz de teste com colunas em ponto cheio para avaliação visual rápida da proporção de 1/3 de tensão no avesso do bordado.",
    relatedTerms: ["Regra de 1/3", "Tensão da Linha", "Fox Test", "Calibragem", "Ponto Cheio"],
    tags: ["teste de tensao", "fox test", "letra i", "calibragem", "controle de qualidade"]
  },
  {
    id: "tamborilamento-efeito-tambor-no-bastidor",
    code: "T-028",
    letter: "T",
    term: "Tamborilamento (Efeito Tambor no Bastidor)",
    pronunciation: "tam-bo-ri-la-men-to (e-fei-to tam-bor no bas-ti-dor)",
    level: "Iniciante 🟢",
    category: "Estabilização & Bastidores",
    grammarClass: "Substantivo masculino.",
    origin: "Técnica sensorial tradicional do bordado manual e eletrônico utilizada há mais de um século por artesãos para checar a tensão do tecido no aro do bastidor.",
    summary: "Teste tátil e sonoro clássico onde o tecido e a entretela bem esticados no bastidor produzem um som oco e firme como a pele de um tambor ao serem tocados.",
    definition: "O Tamborilamento (Efeito Pele de Tambor / Drum Tightening) é o estado de tensionamento ideal em que o tecido e a entretela estão assentados no bastidor de bordar com firmeza perfeitamente uniforme em todas as direções, sem estiramento elástico excessivo das fibras e sem folgas ou rugas. Ao dar leves batidinhas com a ponta dos dedos no centro do tecido montado, deve-se ouvir um som oco e seco semelhante ao toque na pele de um tambor musical.",
    technicalDetails: "O objetivo do tamborilamento correto é manter a estrutura da trama têxtil em seu estado de repouso natural, porém perfeitamente plano e bloqueado contra movimentações laterais durante a penetração da agulha. Em tecidos elásticos (como malha fria e suplex), o tecido NÃO deve ser puxado pelas bordas para evitar que as fibras fiquem sob tensão elástica artificial, o que causaria enrugamento severo após a liberação do aro.",
    beginnerExplanation: "É o jeito clássico de saber se você prendeu o tecido certinho no bastidor: você dá uns toquezinhos com os dedos no meio do tecido como se estivesse tocando um tamborzinho. Ele precisa estar firme, retinho e fazer um barulhinho oco ('tum-tum'), sem estar frouxo e sem estar repuxado.",
    howItWorks: [
      "1. A entretela e o tecido são colocados sobre o aro externo do bastidor.",
      "2. O aro interno é encaixado e pressionado suavemente para baixo de forma nivelada.",
      "3. O parafuso de aperto do bastidor é ajustado firmemente sem forçar com alicates.",
      "4. A bordadeira toca levemente no centro com a ponta dos dedos para escutar o som oco e sentir a firmeza elástica.",
      "5. A estrutura está perfeitamente ancorada para suportar a velocidade e as perfurações da máquina."
    ],
    applications: [
      "Preparação e montagem de qualquer tecido plano, sarja, tricoline e linho no bastidor.",
      "Inspeção prévia obrigatória antes de travar o bastidor no pantógrafo da máquina.",
      "Garantia de alinhamento perfeito entre contornos e preenchimentos em matrizes multicoloridas.",
      "Prevenção de falhas de registro e ondulações no tecido durante o bordado."
    ],
    characteristics: [
      "Avaliação sensorial rápida e sem necessidade de instrumentos complexos.",
      "Superfície plana, firme e resistente às vibrações mecânicas da máquina.",
      "Garante a estabilidade dimensional do desenho do início ao fim."
    ],
    commonErrors: [
      "❌ Puxar as bordas de tecidos de malha com força após fechar o bastidor, deformando a elasticidade e fazendo o bordado enrugar depois de pronto.",
      "❌ Deixar o tecido frouxo como uma rede, fazendo a agulha empurrar o tecido para baixo e pular pontos (efeito flagging).",
      "❌ Apertar o parafuso do bastidor com ferramentas pesadas, trincando o aro plástico do bastidor."
    ],
    troubleshootingTips: [
      "Tecido afundando como uma cama elástica mole: solte o bastidor, recoloque com uma entretela de maior gramatura e feche com pressão uniforme.",
      "Tecido escapando pelas bordas durante o bordado: forre os aros do bastidor com fita crepe ou viés de algodão para aumentar o atrito.",
      "Bordado ovalado em vez de redondo: o tecido foi esticado com força em apenas uma das direções ao fechar o bastidor."
    ],
    dicaArtrelados: "Para tecidos com elastano (como malha de camiseta): nunca puxe as pontinhas do tecido para esticar! Deixe o tecido repousar naturalmente sobre a entretela colada com adesivo temporário e apenas encaixe o aro interno com firmeza. O som de tambor virá da entretela firme por baixo, sem deformar a malha!",
    voceSabia: "A palavra 'tambour' (tambor em francês) deu origem histórica ao famoso ponto de bordado francês 'Point de Tambour', pois os bastidores redondos de madeira se pareciam literalmente com pequenos tambores militares.",
    practicalExercise: "Monte um retalho de tricoline com entretela rasgável em um bastidor de 13x18 cm. Aperte o parafuso e dê batidinhas com o dedo no centro escutando o som 'tum-tum'. Solte e tente de novo até dominar a sensação tátil exata.",
    quickSummary: "Tensionamento plano e firme do tecido no bastidor que produz um som oco e seco ao toque de dedos, garantindo estabilidade contra deformações.",
    relatedTerms: ["Bastidor", "Entretela", "Flagging", "Hoop Burn", "Estabilidade Dimensional"],
    tags: ["tamborilamento", "efeito tambor", "bastidor", "estabilizacao", "tecido"]
  }
];

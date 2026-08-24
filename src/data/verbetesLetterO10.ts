import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART10: Verbete[] = [
  {
    id: "o-067-offset-de-ponto-e-deslocamento-vetorial-de-contornos",
    code: "O-067",
    term: "Offset de Ponto e Deslocamento Vetorial de Contornos (Vector Stitch Offset & Border Outline Inset/Outset)",
    letter: "O",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês offset (deslocamento perpendicular a partir de uma linha de referência) e do latim vector (aquele que conduz, grandeza orientada no espaço).",
    summary: "Ajuste milimétrico de expansão ou contração do contorno em relação ao preenchimento para garantir sobreposição perfeita sem frestas.",
    definition: "O Offset de Ponto e Deslocamento Vetorial de Contornos (Vector Outline Offset & Inset/Outset Compensation) é o parâmetro geométrico programável em softwares de digitalização de bordados (como Wilcom EmbroideryStudio, Embrilliance e PE-Design) que gera uma curva paralela equidistante à borda original de um objeto vetorial. Aplicado com valor positivo (Outset, ex: +0,3 mm a +0,5 mm) ou negativo (Inset, ex: -0,2 mm), o offset serve para sobrepor deliberadamente cordões de contorno acetinado (Satin Border) sobre a margem de preenchimentos tatami ou sobre a linha de corte de tecidos de aplique, impedindo que o encolhimento dinâmico do tecido (Pull Effect) gere vãos, desencaixes ópticos ou desfiamento nas bordas.",
    technicalDetails: "Offset padrão para contorno sobre Tatami: +0,35 mm a +0,50 mm. Offset para corte de aplique (Placement/Tackdown): -0,20 mm a -0,30 mm. Tolerância de sobreposição do ponto cheio: 15% a 25% da largura da coluna.",
    howItWorks: [
      "1. A programadora desenha uma flor com pétalas amarelas preenchidas em ponto Tatami e cria um contorno preto em ponto cheio ao redor.",
      "2. Ao gerar os pontos sem offset, a linha do contorno fica exatamente tangente à borda do preenchimento.",
      "3. Quando a máquina borda, o repuxo natural do tecido traciona o amarelo para dentro, criando um espaço em branco feio entre a flor e o contorno preto.",
      "4. A programadora seleciona o contorno no software e aplica a ferramenta 'Offset' de +0,4 mm para fora e estende a terminação do tatami.",
      "5. O software recalcula as coordenadas vetoriais, fazendo o ponto cheio nascer 0,4 mm sobre a massa de pontos amarelos.",
      "6. Na máquina, mesmo com o tecido repuxando, o contorno fecha perfeitamente 'travando' as pétalas com acabamento impecável."
    ],
    beginnerExplanation: "É o segredo no programa de bordados para fazer aquele contorno pretinho abraçar o desenho por cima sem deixar nenhuma fresta ou buraquinho em branco aparecendo o tecido de fundo. A gente manda o contorno avançar um pouquinho de nada (meio milímetro) para cima do desenho colorido, assim quando o tecido esticar na máquina, o encaixe fica 100% perfeito!",
    applications: [
      "Contornos de logotipos corporativos sobre fundos densos de ponto Tatami",
      "Matrizes de aplique com ponto cheio largo cobrindo o corte do tecido sem desfiar",
      "Criação de bordas duplas e efeitos de sombra e relevo em monogramas",
      "Compensação de fendas em tecidos de malha e pique sujeitos a forte repuxo lateral"
    ],
    commonErrors: [
      "❌ Deixar o contorno exatamente faceando a borda do preenchimento com offset zero, gerando frestas brancas após o bordado",
      "❌ Aplicar offset excessivo (> 1,2 mm), fazendo o contorno invadir detalhes delicados no interior da figura",
      "❌ Esquecer de alinhar a direção dos pontos do contorno com a inclinação do preenchimento subjacente"
    ],
    troubleshootingTips: [
      "Para tecidos elásticos como malha e viscolycra, utilize um offset de contorno de pelo menos +0,5 mm para compensar o encolhimento",
      "Em apliques, garanta que a costura de fixação (Tackdown) fique no centro da coluna do ponto cheio final usando offset de -0,3 mm",
      "Use a visualização 3D realista (TrueView) no software para checar visualmente se a sobreposição está uniforme em todas as curvas"
    ],
    dicaArtrelados: "Se você bordou uma matriz e o contorno ficou um pouquinho fora do lugar parecendo um defeito de impressão, não mexa na máquina! É só abrir o programa e colocar um offset de 0,4 mm no contorno. Isso resolve o problema de vez e deixa sua matriz com qualidade profissional de exportação!",
    voceSabia: "O conceito geométrico de curva paralela de offset foi formulado originalmente pelo matemático holandês Christiaan Huygens em 1678 para calcular a propagação de ondas de luz, sendo hoje a base dos motores de renderização CAD/CAM de bordado computadorizado.",
    practicalExercise: "No seu programa de bordados, crie um círculo com preenchimento tatami e gere um contorno em ponto cheio. Aplique um offset de 0,4 mm e observe como a linha guia do contorno entra suavemente sobre a borda do círculo!",
    quickSummary: "Deslocamento milimétrico do contorno para sobrepor o preenchimento e evitar frestas e desencaixes no tecido.",
    relatedTerms: [
      "Compensação de Encolhimento (Pull Compensation)",
      "Ponto Cheio (Satin Stitch)",
      "Ponto Tatami",
      "Programação de Bordado"
    ],
    tags: [
      "o-067",
      "offset",
      "deslocamento vetorial",
      "contorno",
      "sobreposicao",
      "programacao de matrizes",
      "wilcom",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. EmbroideryStudio Vector Tools, Outline Offsets and Advanced Border Compensation. Sydney, 2023.",
      "ARTRELADOS. Manual de Digitalização Avançada: Encaixes Perfeitos, Offsets e Controle de Repuxo em Matrizes Nobres. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "o-068-osciloscopio-digital-e-diagnostico-de-sinais-de-encoders-e-sensores",
    code: "O-068",
    term: "Osciloscópio Digital e Diagnóstico de Sinais de Encoders e Sensores (Digital Oscilloscope & Encoder Signal Waveform Diagnostics)",
    letter: "O",
    level: "Avançado 🔴",
    category: "Eletrônica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim oscillare (balançar, oscilar) e do grego skopein (examinar, observar). Instrumento de metrologia eletroeletrônica criado no início do século XX.",
    summary: "Uso do osciloscópio na bancada técnica para testar ondas quadradas de encoders e sincronismo de sensores sem achismos.",
    definition: "O Osciloscópio Digital de Bancada e Diagnóstico de Formas de Onda em Sistemas de Bordado (Digital Storage Oscilloscope / DSO Signal Analysis) é o equipamento e procedimento metrológico avançado utilizado por técnicos e engenheiros eletrônicos para capturar, visualizar e medir as grandezas elétricas no tempo (tensão x microssegundos) dos sinais digitais e analógicos da máquina de bordar. É indispensável para testar os pulsos em quadratura (Canais A e B a 90° de defasagem) e o pulso de índice (Canal Z / Zero Marker) dos encoders ópticos do eixo principal e dos servomotores dos eixos X e Y, além de aferir a integridade dos sinais dos sensores de quebra de linha por infravermelho e detectar ruídos parasitários causados por aterramento deficiente ou fontes chaveadas ruidosas.",
    technicalDetails: "Largura de banda mínima recomendada: 50 MHz a 100 MHz com taxa de amostragem de 1 GSa/s. Níveis lógicos analisados: TTL 0–5V DC ou CMOS 0–3,3V DC. Defasagem de quadratura esperada: 90° ± 5° elétricos.",
    howItWorks: [
      "1. A máquina de bordar apresenta erro intermitente de 'Posicionamento de Eixo / Encoder Error' ou erra a parada da agulha em 100°.",
      "2. O técnico conecta a ponta de prova do osciloscópio digital nos canais de saída A e B do encoder do motor principal.",
      "3. Gira o volante manualmente e observa na tela duas ondas quadradas perfeitas e limpas defasadas em 90 graus.",
      "4. Se uma das ondas apresentar bordas arredondadas, ruído de alta frequência (jitter) ou pulsos fantasmas, diagnostica disco óptico sujo ou fototransistor danificado.",
      "5. Conecta a segunda sonda no sensor do estica-fio e valida a sincronia do pulso de corte de linha.",
      "6. Efetua a substituição pontual da placa do sensor ou limpa o disco óptico com álcool isopropílico.",
      "7. A máquina volta a rodar em sincronia absoluta de milissegundos sem falhas de parada ou leitura."
    ],
    beginnerExplanation: "É como se fosse um 'eletrocardiograma de alta tecnologia' da máquina de bordar! Os técnicos usam esse aparelho com tela para ver o desenho das correntes elétricas invisíveis que viajam pelos fios da máquina. Se a máquina estiver dando um erro esquisito de parar a agulha no lugar errado, o osciloscópio mostra exatamente qual pecinha eletrônica está cansada ou falhando, sem precisar ficar trocando peças na sorte!",
    applications: [
      "Diagnóstico preciso de falhas intermitentes no motor do eixo principal (Main Shaft Error)",
      "Verificação de defasagem dos sinais de microstepping dos servomotores dos eixos X e Y",
      "Medição de ruído elétrico e flutuação de tensão na linha de alimentação de 5V e 24V da placa-mãe",
      "Calibração de sensores ópticos de rotação do carretel e quebra de fio superior"
    ],
    commonErrors: [
      "❌ Conectar a garra de aterramento do osciloscópio em pontos de alta tensão sem isolamento, causando curto-circuito na placa lógica",
      "❌ Trocar placas-mãe inteiras caríssimas sem testar antes se o problema era apenas ruído elétrico na fiação do encoder",
      "❌ Usar pontas de prova descalibradas com compensação de frequência incorreta"
    ],
    troubleshootingTips: [
      "Ao medir sinais de encoder, verifique se a amplitude do sinal atinge o nível TTL limpo de 5V (tensão abaixo de 4,2V indica sobrecarga na linha)",
      "Certifique-se de que a máquina de bordar e o osciloscópio estejam conectados à mesma barra de terra físico com resistência < 5 ohms",
      "Verifique se o cabo do encoder possui malha de blindagem (shield) aterrada apenas em uma das extremidades para evitar laço de terra (ground loop)"
    ],
    dicaArtrelados: "Quando uma máquina começa a dar erros malucos no painel depois de anos de uso, na grande maioria das vezes é só poeira de linha acumulada dentro do leitor óptico do encoder! Uma limpeza cuidadosa com pincel antiestático e ar seco resolve o problema sem gastar rios de dinheiro em peças novas!",
    voceSabia: "O primeiro osciloscópio com tubo de raios catódicos foi inventado em 1897 pelo físico alemão Karl Ferdinand Braun (ganhador do Prêmio Nobel de Física com Marconi pelo desenvolvimento da radiotelegrafia sem fio).",
    practicalExercise: "Peça ao seu técnico de confiança, na próxima revisão anual da máquina, para lhe mostrar como funciona o teste de rotação do volante: observe no painel de diagnóstico da própria máquina os números do encoder mudando de 0° a 360° em tempo real!",
    quickSummary: "Instrumento eletrônico de diagnóstico que mede ondas elétricas e sincronia de encoders e sensores com precisão absoluta.",
    relatedTerms: [
      "Hardware de Controle DSP e Placa-Mãe",
      "Encoder Óptico e Sincronismo do Eixo Principal",
      "NEMA 23 e Padrões de Servomotores de Passo do Pantógrafo",
      "Eletrônica da Máquina"
    ],
    tags: [
      "o-068",
      "osciloscopio",
      "diagnostico",
      "encoder",
      "sensores",
      "ondas eletricas",
      "eletronica",
      "artrelados"
    ],
    bibliographicReferences: [
      "RIGOL TECHNOLOGIES. Digital Storage Oscilloscope Signal Measurement & Industrial Electronics Guide. Beaverton, 2023.",
      "TAJIMA. Electronic Control Systems, Encoder Diagnostics and Sensor Calibration Manual. Nagoya, 2022."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "o-069-organza-de-cristal-e-tule-bordados-em-camadas-transparentes",
    code: "O-069",
    term: "Organza de Cristal e Tule: Bordados em Camadas Transparentes (Crystal Organza & Tulle Sheer Layered Embroidery Workflow)",
    letter: "O",
    level: "Iniciante 🟢",
    category: "Técnicas de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do francês organcin (seda de fio torcido de alta tenacidade originária da cidade de Urgenc, no Uzbequistão histórico) e de Tulle (cidade francesa famosa pelas rendas e redes finas desde o século XVIII).",
    summary: "Guia completo para bordar vestidos de noiva, véus e alta-costura em tecidos transparentes com entretela hidrossolúvel e agulha fina.",
    definition: "O bordado em organza de cristal e tule (Sheer Fabric & Translucent Tulle Embroidery Workflow) é o conjunto de métodos artesanais e parâmetros técnicos de alta-costura empregados na personalização de vestidos de noiva, véus, mangas transparentes, lingeries de luxo e sobreposições decorativas. Por se tratar de tecidos ultraleves com trama aberta e transparente (gramatura entre 20g/m² e 45g/m²), o processo exige: montagem em bastidor com entretela hidrossolúvel de filme espesso (Cold Water Soluble Film de 80 µm) ou entretela solúvel em água quente tipo tecido não-tecido, agulhas finas 65/9 ou 70/10 com ponta aguda Microtex/Sharp, linhas de poliéster 60 ou fios de seda delicados, e matrizes com densidade reduzida (0,50 mm a 0,60 mm) e sob-pontos (underlay) leves para evitar repuxar ou esburacar a transparência.",
    technicalDetails: "Gramatura do substrato: 22g/m² a 38g/m². Agulha ideal: Schmetz Microtex 65/9 ou 70/10. Entretela: Hidrossolúvel 80 µm (Hot/Cold Water Soluble). Densidade de ponto cheio: 0,52 mm com underlay em pesponto central.",
    howItWorks: [
      "1. A bordadeira estende uma folha de entretela hidrossolúvel encorpada junto com a organza no bastidor, mantendo a tensão suave como a pele de um tambor.",
      "2. Instala uma agulha nova ultrafina nº 65/9 ou 70/10 Microtex para penetrar entre os microfilamentos da organza sem cortar os fios da trama.",
      "3. Utiliza linha superior fina nº 60 ou linha metalizada nobre e carretilha com linha branca de alta maciez.",
      "4. Ajusta a velocidade da máquina para 600–650 RPM para evitar puxões bruscos no tecido leve.",
      "5. A máquina executa os motivos florais ou arabescos com pontos arejados e bem compensados.",
      "6. Ao retirar do bastidor, a peça é enxaguada em água morna: a entretela desaparece 100%, deixando apenas o bordado suspenso na transparência cristalina.",
      "7. A peça é seca à sombra sobre uma toalha e passada pelo avesso com ferro brando, revelando acabamento digno de passarela internacional."
    ],
    beginnerExplanation: "É o passo a passo dos sonhos para bordar véus de noiva, vestidos de festa e detalhes transparentes que parecem mágica! Como o tecido é fininho e transparente, a gente usa uma entretela mágica solúvel em água: depois que a máquina termina de bordar, você molha a peça na torneira e a entretela derrete todinha, ficando apenas as florzinhas bordadas flutuando lindas no tecido transparente!",
    applications: [
      "Véus de noiva bordados com arabescos, iniciais e flores delicadas",
      "Mangas e decotes ilusão em vestidos de festa e alta-costura",
      "Lingeries finas, robes de seda e detalhes em transparência",
      "Acessórios para batizado, tiaras infantis e faixas de cabelo luxuosas"
    ],
    commonErrors: [
      "❌ Usar entretelas rasgáveis comuns de papel, que deixam fiapos brancos feios presos atrás da transparência do tecido que nunca mais saem",
      "❌ Usar agulhas grossas (nº 90 ou 100) com ponta cega, furando e puxando fios que desfiam a organza inteira",
      "❌ Usar matrizes pesadas com preenchimentos densos e compactos, que empelotam e deformam o tecido leve"
    ],
    troubleshootingTips: [
      "Sempre utilize entretela hidrossolúvel lavável para garantir que o avesso do bordado fique 100% limpo e sem resíduos",
      "Ao passar a ferro a organza após a lavagem, use sempre um pano de algodão fino por cima para não queimar as fibras sintéticas",
      "Se a linha estiver arrebentando no tecido leve, afrouxe ligeiramente a tensão da linha superior para os pontos assentarem macios"
    ],
    dicaArtrelados: "Bordados em véus de noiva e vestidos de festa têm o maior valor agregado do mercado de bordados! Um véu de noiva com organza e entretela solúvel gasta menos de R$ 30 em materiais e pode ser vendido por R$ 300 a R$ 600 tranquilamente no seu ateliê!",
    voceSabia: "Na alta-costura de Paris nos ateliês de Lesage e Dior, a organza de seda natural é o tecido preferido desde a década de 1940 para servir de base a bordados tridimensionais com cristais Swarovski e fios de ouro.",
    practicalExercise: "Pegue um retalho de organza ou tule, coloque no bastidor com uma folha de plástico hidrossolúvel e borde uma florzinha delicada com agulha 70/10. Depois lave em água corrente e sinta o orgulho de ver o bordado flutuando no tecido!",
    quickSummary: "Técnica de alta-costura com entretela hidrossolúvel e agulha fina para bordar véus e vestidos transparentes com perfeição.",
    relatedTerms: [
      "Entretela Hidrossolúvel (Water-Soluble)",
      "Agulha Microtex / Ponta Aguda",
      "Linha Metalizada (Metallic Thread)",
      "Técnicas de Bordado"
    ],
    tags: [
      "o-069",
      "organza",
      "tule",
      "transparencia",
      "noivas",
      "moda festa",
      "hidrossoluvel",
      "alta costura",
      "artrelados"
    ],
    bibliographicReferences: [
      "ARTRELADOS. Guia de Alta-Costura no Bordado Computadorizado: Noivas, Tules, Organzas e Sedas Puras. São Paulo, 2024.",
      "SCHMETZ. Needles for Microfiber, Silk, Chiffon and Sheer Fabrics Technical Bulletin. Herzogenrath, 2023."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "o-070-otimizacao-de-saltos-e-minimizacao-de-comandos-de-corte",
    code: "O-070",
    term: "Otimização de Saltos (Jumps) e Minimização de Comandos de Corte (Jump Optimization & Trimming Minimization Engine)",
    letter: "O",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim optimus (o melhor) e da teoria dos grafos e do problema do caixeiro-viajante (Traveling Salesperson Problem) aplicada ao sequenciamento de caminhos em controle numérico CNC.",
    summary: "Algoritmo de programação que interliga objetos por baixo de preenchimentos, cortando o tempo de máquina em até 30%.",
    definition: "A Otimização de Saltos e Minimização Inteligente de Comandos de Corte (Jump Stitch Routing & Smart Trimming Minimization) é o recurso avançado de roteamento e sequenciamento nos softwares de digitalização de bordados que reorganiza a ordem de costura de elementos de mesma cor e insere conectores em ponto corrido (Travel Running Stitches) sob áreas que serão posteriormente cobertas por pontos cheios ou tatami. Cada ciclo de corte automático (Trim) em uma máquina de bordar consome entre 4 e 7 segundos (frenagem, acionamento do pegador/faca, avanço lento e reaceleração); ao substituir 40 cortes desnecessários por pontes de ligação invisíveis, o algoritmo reduz drasticamente o desgaste da navalha, elimina pontas de linha soltas no avesso e aumenta a produtividade horária do ateliê.",
    technicalDetails: "Tempo médio consumido por comando de corte: 5,5 s ± 1,5 s. Comprimento máximo para ponto de salto sem corte: configurável entre 1,5 mm e 2,5 mm. Redução média de tempo de ciclo: 20% a 35%.",
    howItWorks: [
      "1. A programadora digitaliza uma matriz de arabesco com 35 folhinhas da mesma cor verde.",
      "2. Na programação automática sem otimização, o software insere um corte de linha (Trim) entre cada folha isolada, totalizando 35 cortes demorados.",
      "3. A máquina levaria 8 minutos para bordar o arabesco, parando e cortando a linha a cada 10 segundos.",
      "4. A programadora ativa a ferramenta de 'Otimização de Ramificação' (Branching) e sequenciamento de saltos.",
      "5. O software calcula a menor rota matemática entre as folhas e traça pontes em ponto corrido que passam exatamente sob as hastes do ramo.",
      "6. O número de cortes cai de 35 para apenas 1 corte final.",
      "7. O tempo de bordado da peça despenca de 8 minutos para apenas 3 minutos e meio na máquina."
    ],
    beginnerExplanation: "É o jeito inteligente de programar a matriz para a máquina não ficar parando para cortar a linha a cada letrinha ou folhinha! O programa cria um caminhozinho escondido de costura por baixo das outras partes do desenho, fazendo a máquina bordar direto sem parar. Isso faz a peça ficar pronta muito mais rápido, economiza a faquinha da máquina e deixa o avesso limpinho sem aquele monte de nós!",
    applications: [
      "Digitalização de fontes e textos cursivos interligados sem cortes entre as letras",
      "Matrizes de monogramas, florais e arabescos com múltiplos elementos da mesma cor",
      "Produção de grandes tiragens de uniformes corporativos com redução do tempo de máquina",
      "Preservação do conjunto de facas e contra-facas do sistema de corte automático"
    ],
    commonErrors: [
      "❌ Deixar conectores em ponto corrido passando por cima de áreas de tecido vazio que não serão cobertas, exigindo corte manual com tesoura depois",
      "❌ Configurar o software para cortar a linha em saltos minúsculos de menos de 1 mm, gerando nós excessivos e travamentos",
      "❌ Não agrupar as cores da matriz, fazendo a máquina trocar de linha várias vezes para a mesma cor"
    ],
    troubleshootingTips: [
      "Utilize a ferramenta de 'Ramificação Automática' (Branching) do seu software para digitalizar galhos e letras cursivas com um único corte",
      "Defina o comprimento mínimo de salto para corte (Trim Threshold) no software e na máquina para 2,0 mm",
      "Use a ferramenta de reordenamento por cor (Color Sort) para costurar todos os objetos da mesma tonalidade de uma só vez"
    ],
    dicaArtrelados: "Tempo de máquina é dinheiro no bolso! Se você tem uma produção de 50 camisas polo e reduz 3 minutos em cada bordado otimizando os cortes, você economiza duas horas e meia de trabalho no mesmo dia! Programe com carinho e faça sua máquina voar!",
    voceSabia: "O algoritmo de Branching (Ramificação) usado nos softwares de bordado foi adaptado de modelos matemáticos desenvolvidos nos anos 1950 para planejar as rotas de entrega mais rápidas dos caminhões dos correios nos Estados Unidos.",
    practicalExercise: "Abra uma matriz com várias letrinhas no seu programa. Veja quantos cortes ela tem na lista de objetos. Use a ferramenta de ramificação ou ligue as letras com ponto corrido escondido e veja o tempo total de bordado diminuir na hora!",
    quickSummary: "Técnica de programação que interliga partes do desenho com caminhos invisíveis, eliminando cortes e acelerando o bordado.",
    relatedTerms: [
      "Corte Automático de Linha (Auto-Trim)",
      "Ponto Corrido (Running Stitch)",
      "Software de Digitalização",
      "Programação de Bordado"
    ],
    tags: [
      "o-070",
      "otimizacao de saltos",
      "jumps",
      "corte de linha",
      "branching",
      "produtividade",
      "software de bordado",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Branching, Pathing Optimization & Trim Reduction in Commercial Embroidery. Sydney, 2023.",
      "ARTRELADOS. Otimização de Matrizes para Produção Industrial: Velocidade Máxima e Eficiência no Ateliê. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "o-071-oleo-mineral-sintetico-iso-vg-10-e-lubrificacao-automatizada",
    code: "O-071",
    term: "Óleo Mineral Sintético ISO VG 10 e Lubrificação Automatizada (ISO VG 10 Synthetic Needle Lubricating Oil & Centralized Oiling)",
    letter: "O",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina e Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da International Organization for Standardization (ISO - norma ISO 3448 de classificação de viscosidade) e VG (Viscosity Grade). Formulação petroquímica de alta pureza.",
    summary: "Óleo cristalino de baixíssima viscosidade que protege lançadeiras a 1.000 RPM sem manchar tecidos nem oxidar.",
    definition: "O Óleo Mineral Branco Sintético de Grau ISO VG 10 a VG 15 (Ultra-Low Viscosity Clear Embroidery Lubricant & Centralized Automatic Oiling System) é o fluido lubrificante técnico de alta pureza formulado especificamente para componentes de alta rotação e atrito em máquinas de bordar computadorizadas. Caracterizado por viscosidade cinemática ultrabaixa (10 mm²/s a 40 °C), índice de refração límpido (Water-White / Não manchante), ausência de ácidos graxos e elevada estabilidade térmica até 200 °C, esse óleo flui perfeitamente pelos tubos capilares e mechas de feltro dos sistemas de lubrificação centralizada e automática, formando uma película hidrodinâmica microscópica na pista da lançadeira rotativa que reduz o calor por atrito e evita o travamento mecânico sem respingar nem manchar tecidos claros.",
    technicalDetails: "Viscosidade cinemática a 40 °C: 9,0 a 11,0 cSt (ISO VG 10). Ponto de fulgor: > 175 °C. Ponto de fluidez: < -15 °C. Cor Saybolt: +30 (100% cristalino e inodoro).",
    howItWorks: [
      "1. A cada 4 a 6 horas de bordado contínuo (ou a cada troca de carretilha), a bordadeira aplica uma única microgota de óleo ISO VG 10 na pista da lançadeira rotativa.",
      "2. Em máquinas industriais com lubrificação automática, a bomba peristáltica pulsa microdoses de óleo pelos tubos de silicone a cada 50.000 pontos.",
      "3. O óleo se espalha uniformemente pela calha da lançadeira girando a 1.000 RPM.",
      "4. A fina película lubrificante impede o contato metal-metal entre o cesto da bobina e o corpo da lançadeira.",
      "5. A temperatura da ponta da lançadeira permanece estável (abaixo de 45 °C), evitando aquecer e derreter a linha sintética de poliéster.",
      "6. A máquina opera suave, com ruído macio e vida útil prolongada dos mecanismos por muitos anos."
    ],
    beginnerExplanation: "É o famoso 'óleo de máquina branquinho e transparente' que toda bordadeira precisa ter por perto! Ele é super fininho e límpido como água pura, feito especialmente para não manchar as roupas se espirrar uma gotinha. Pingando apenas UMA gotinha na lançadeira todo dia, a sua máquina costura macia, não esquenta e não arrebenta linha!",
    applications: [
      "Lubrificação diária da pista da lançadeira rotativa em máquinas domésticas e industriais",
      "Abastecimento dos reservatórios de lubrificação centralizada automática de máquinas multicabeças",
      "Manutenção preventiva das barras de agulha, estica-fios e eixos do cabeçote",
      "Proteção anticorrosiva de peças metálicas de precisão contra umidade do ar"
    ],
    commonErrors: [
      "❌ Usar óleos domésticos grossos multiuso (tipo óleo de bicicleta ou desengripante em spray), que grudam poeira, ressecam e viram uma graxa preta grudenta que trava a máquina",
      "❌ Pingar óleo em excesso (várias gotas grandes), encharcando a caixa de bobina e manchando de gordura a primeira toalha ou camisa bordada",
      "❌ Deixar a lançadeira rodar dias seguidos completamente seca e sem nenhuma lubrificação, desgastando o metal até quebrar"
    ],
    troubleshootingTips: [
      "Aplique exatamente UMA gota pequena de óleo mineral fino na pista da lançadeira no início do dia de trabalho",
      "Após pingar a gota de óleo, borde primeiro um retalho de tecido teste por 30 segundos antes de colocar a peça final do cliente",
      "Se respingar uma gota de óleo no tecido por acidente, aplique imediatamente um spray tira-manchas à base de giz ou lave com detergente neutro transparente"
    ],
    dicaArtrelados: "A regra de ouro do ateliê é: menos é mais! Uma única gotinha de óleo no lugar certo faz milagres pela sua máquina. E lembre-se: nunca use desengripante em spray (tipo WD-40) na lançadeira da máquina de bordar, pois ele não é lubrificante de costura e pode ressecar as vedações de borracha!",
    voceSabia: "O óleo mineral de grau farmacêutico e têxtil passa por um processo de hidrotratamento tão rigoroso que é o mesmo ingrediente base utilizado na fabricação de hidratantes corporais e óleos para bebês!",
    practicalExercise: "Pegue seu frasco de óleo de máquina e pingue uma gotinha num pratinho branco: observe como ele é 100% transparente e fininho. Agora, com a ponta de um palito ou bico dosador, pingue uma microgota na calha da sua lançadeira limpa!",
    quickSummary: "Óleo mineral transparente e ultrafino que lubrifica a lançadeira e componentes rápidos sem manchar tecidos.",
    relatedTerms: [
      "Lançadeira Rotativa",
      "Caixa de Bobina (Bobbin Case)",
      "Nitretação Gasosa e Tratamento de Superfície em Agulhas e Lançadeiras",
      "Mecânica da Máquina e Manutenção"
    ],
    tags: [
      "o-071",
      "oleo mineral",
      "iso vg 10",
      "lubrificacao",
      "lancadeira",
      "manutencao preventiva",
      "cuidados com a maquina",
      "artrelados"
    ],
    bibliographicReferences: [
      "KOBAN HOOKS. Rotary Hook Lubrication, Oil Viscosity Standards & Maintenance Protocols. Osaka, 2022.",
      "ARTRELADOS. O Guia Definitivo da Lubrificação de Precisão: Óleos Minerais, Pistas de Lançadeira e Saúde Mecânica da Bordadeira. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "o-072-overlock-embutido-e-acabamento-de-patches-com-ponto-merrow",
    code: "O-072",
    term: "Overlock Embutido e Acabamento de Patches com Ponto Merrow (Merrow Edge Border & Overlock Patch Finishing)",
    letter: "O",
    level: "Iniciante 🟢",
    category: "Técnicas de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da Merrow Sewing Machine Company (fundada em 1838 nos EUA por Joseph Merrow, inventora da primeira máquina de overlock do mundo). Padrão global de bordas arredondadas em brasões militares.",
    summary: "Técnica de confecção de bordas tubulares grossas e arredondadas para emblemas, patches e brasões com corte a quente.",
    definition: "O Acabamento de Patches e Brasões com Ponto Merrow e Overlock Embutido (Merrowed Edge Patch Construction & Mock-Merrow Satin Border) é a técnica especializada de confecção de bordas perimétricas densas e tridimensionais ao redor de emblemas termocolantes, patches de motoclubes, uniformes militares e brasões corporativos. O acabamento pode ser realizado de duas formas: 1) Merrow Autêntico, utilizando máquina de overlock de 3 fios específica para emblemas (Merrow MG-3U) que envolve a beirada do tecido com fio de lã/acrílico encorpado; ou 2) Efeito Merrow Embutido na Máquina de Bordar (Faux Merrow / Satin Wrap Border), que programa um cordão de ponto cheio duplo largo (3,5 mm a 5,0 mm) sobre tecido sarja com entretela hidrossolúvel ou filme termocolante, permitindo o selamento perfeito das bordas com ferro de solda ou pirógrafo.",
    technicalDetails: "Largura padrão da borda Merrow: 3,5 mm a 4,8 mm. Densidade da borda na máquina de bordar: 0,38 mm com underlay zig-zag duplo. Fio recomendado para Merrow tradicional: Acrílico texturizado ou poliéster grosso 100D/2.",
    howItWorks: [
      "1. A bordadeira prepara o emblema no software: programa a marcação de corte, o bordado central e a borda final larga em ponto cheio denso.",
      "2. Coloca no bastidor sarja grossa (ou feltro estruturado) sobre uma folha de entretela de alta densidade.",
      "3. A máquina borda o desenho central com as cores solicitadas pelo cliente.",
      "4. Executa a borda final larga em ponto acetinado duplo, cobrindo o perímetro do patch com uma borda arredondada impecável.",
      "5. Ao retirar do bastidor, a bordadeira utiliza um pirógrafo ou ponta de ferro de solda quente para queimar e cortar a sarja rente à borda, selando os fios de poliéster sem deixar desfiados.",
      "6. Aplica o filme termocolante no verso com prensa térmica a 160 °C.",
      "7. O patch fica pronto para ser colado ou costurado em jaquetas, bonés e uniformes com resistência de padrão militar."
    ],
    beginnerExplanation: "É aquela borda gordinha, grossa e arredondada clássica dos emblemas e patches de motoqueiros, fardas de polícia e jaquetas jeans! Você pode fazer essa borda direto na sua máquina de bordar comum programando um ponto cheio bem largo e fofinho, e depois recortar a beiradinha com um pirógrafo quente para a peça ficar com acabamento de fábrica profissional!",
    applications: [
      "Patches e brasões para fardas militares, polícia, bombeiros e empresas de segurança",
      "Emblemas termocolantes para motoclubes, academias de artes marciais e equipes esportivas",
      "Etiquetas decorativas para jaquetas jeans, bolsas, mochilas e bonés trucker",
      "Personalização de peças prontas sem precisar colocar a roupa inteira no bastidor"
    ],
    commonErrors: [
      "❌ Cortar o patch com tesoura comum deixando fiapos de tecido branco aparecendo nas laterais do bordado",
      "❌ Programar uma borda fina demais (menos de 2,5 mm), que não consegue selar as fibras do tecido e desfia com facilidade",
      "❌ Queimar a borda com pirógrafo encostando a ponta quente no ponto cheio, derretendo a linha colorida"
    ],
    troubleshootingTips: [
      "Ao usar pirógrafo para recortar patches, passe a ponta quente suavemente apenas no tecido de fundo encostando na lateral externa do bordado",
      "Para patches redondos ou ovais perfeitos, monte uma chapa de corte com gabarito de metal ou madeira",
      "Adicione sempre uma linha de sob-ponto (underlay) em zigue-zague denso antes do ponto cheio da borda para criar o relevo gordinho característico"
    ],
    dicaArtrelados: "Fazer patches e emblemas é um dos negócios mais lucrativos do mundo dos bordados! Você não precisa de uma máquina de overlock Merrow caríssima: programando a borda certinha na sua bordadeira e usando pirógrafo com termocolante definitivo, seus patches ficam idênticos aos importados!",
    voceSabia: "A máquina Merrow foi inventada em Connecticut (EUA) em 1838 e até hoje as fardas oficiais das Forças Armadas Americanas e da NASA utilizam obrigatoriamente patches com a legítima borda Merrow de 3 fios.",
    practicalExercise: "Programe um círculo de 7 cm com uma letra no centro e uma borda em ponto cheio com 4 mm de largura. Borde em sarja, recorte com pirógrafo ou tesoura de precisão e sinta a textura encorpada de um patch profissional!",
    quickSummary: "Técnica para criar bordas grossas e arredondadas em patches e brasões com corte selado a quente.",
    relatedTerms: [
      "Ponto Cheio (Satin Stitch)",
      "Filme Termocolante Definitivo",
      "Bordado de Emblemas e Patches",
      "Técnicas de Bordado"
    ],
    tags: [
      "o-072",
      "overlock",
      "merrow",
      "patches",
      "emblemas",
      "brasoes",
      "corte a quente",
      "termocolante",
      "artrelados"
    ],
    bibliographicReferences: [
      "MERROW SEWING MACHINE CO. Merrow MG-3U Emblem Edging & Industrial Patch Border Specifications. Fall River, 2023.",
      "ARTRELADOS. A Bíblia dos Patches e Emblemas: Criação, Bordas Nobres, Termocolantes e Acabamento com Pirógrafo. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "o-073-over-frame-protection-e-margens-de-seguranca-de-bastidor",
    code: "O-073",
    term: "Over-Frame Protection e Margens de Segurança de Bastidor (Over-Frame Protection & Safe-Zone Margin Management)",
    letter: "O",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês over (além, sobre) e frame (bastidor, quadro). Sistema de proteção e controle de limites geométricos de pantógrafo.",
    summary: "Configuração de margens de segurança perimétricas que impedem colisões físicas do calcador contra os aros do bastidor.",
    definition: "O Sistema de Proteção Over-Frame e Gestão de Margem de Segurança de Bastidor (Over-Frame Collision Protection & Safe Sewing Boundary) é o protocolo de segurança digital e mecânica que define uma margem de recuo perimétrica obrigatória (típica de 10 mm a 15 mm) entre a área física interna dos aros do bastidor e o limite máximo de deslocamento das agulhas da máquina de bordar. O sistema atua em duas etapas complementares: 1) No Software de Digitalização, gerando alertas visuais em vermelho quando um desenho ultrapassa a área útil segura do bastidor selecionado; e 2) No Computador de Bordo da Máquina (Painel DSP), bloqueando o início da costura com a mensagem 'Design Exceeds Frame Area' caso a rotação ou posicionamento inicial da matriz coloque a haste do pé-calcador em rota de colisão contra os aros plásticos ou os parafusos metálicos de fixação do bastidor.",
    technicalDetails: "Margem mínima de segurança: 10,0 mm para bastidores planos e 15,0 mm para bastidores de boné (Cap Frame). Distância de segurança do pé-calcador: raio mínimo de 6,5 mm a partir do centro da agulha.",
    howItWorks: [
      "1. A bordadeira carrega uma matriz de 12,8 cm x 12,8 cm para bordar em um bastidor padrão de 13 cm x 18 cm.",
      "2. No painel da máquina, seleciona o bastidor correspondente para visualizar a área delimitada na tela.",
      "3. Utiliza a função 'Traçar Contorno' (Trace / Frame Check) antes de dar a partida.",
      "4. O pantógrafo se desloca percorrendo os quatro cantos extremos da matriz sem acionar a agulha.",
      "5. A bordadeira observa visualmente se a sapatilha do calcador passa a pelo menos 1 cm de distância da borda plástica do bastidor.",
      "6. Se houver folga segura em toda a volta, aperta o botão verde de início.",
      "7. A máquina borda em velocidade plena com zero risco de colisão, quebra de calcador ou empenamento do pantógrafo."
    ],
    beginnerExplanation: "É a zona de segurança que a gente precisa respeitar para o pezinho da máquina não bater na beirada de plástico do bastidor enquanto estiver bordando! Para não quebrar o calcador nem estragar a máquina, a gente nunca deve colocar um desenho que ocupe o bastidor até a tampa: deixe sempre pelo menos um dedinho (1 cm) de folga entre o desenho e a borda do aro.",
    applications: [
      "Prevenção de quebra de agulhas, sapatilhas de calcador e desalinhamento de pantógrafo",
      "Seleção do tamanho correto de bastidor no software antes de enviar a matriz para a máquina",
      "Conferência visual de segurança usando o botão de 'Traçado' (Trace) no painel da máquina",
      "Bordado em bastidores de bonés e bastidores magnéticos com tolerância milimétrica"
    ],
    commonErrors: [
      "❌ Forçar o início do bordado desativando o aviso de limite no painel da máquina, resultando na batida violenta do calcador contra o parafuso do bastidor",
      "❌ Não usar a função de traçado (Trace) antes de iniciar matrizes grandes que ocupam quase todo o bastidor",
      "❌ Esquecer de centralizar o bastidor na tela da máquina após girar a matriz em 90 graus"
    ],
    troubleshootingTips: [
      "Sempre execute a função de 'Traçado / Trace' no painel da máquina antes de apertar o play em qualquer bordado novo",
      "Se a matriz estiver ultrapassando a margem de segurança por apenas 2 mm, reduza a escala da matriz no software em 3% ou 5% para acomodar com folga",
      "Em bastidores de boné, dobre a margem de segurança para 15 mm devido à curvatura da aba"
    ],
    dicaArtrelados: "Crie o hábito sagrado de sempre apertar o botão de 'Traçado' (Trace) na sua máquina antes de bordar qualquer peça! Esse botãozinho mágico leva apenas 5 segundos para conferir a área e evita 100% dos acidentes com batidas de bastidor no seu ateliê!",
    voceSabia: "As máquinas de bordar industriais mais modernas possuem sensores ópticos de infravermelho no cabeçote que escaneiam o aro do bastidor em tempo real, calculando a distância exata em 3D para impedir colisões mesmo se o operador errar o comando.",
    practicalExercise: "Coloque um bastidor na sua máquina, carregue qualquer matriz e aperte o botão 'Trace' no painel. Acompanhe com os olhos o caminho que o calcador faz ao redor da área de bordado!",
    quickSummary: "Margem de segurança perimétrica que impede a colisão do pé-calcador contra o aro do bastidor.",
    relatedTerms: [
      "Bastidor Tubular e Plano",
      "Pantógrafo CNC",
      "Software de Digitalização",
      "Programação de Bordado"
    ],
    tags: [
      "o-073",
      "over-frame",
      "seguranca",
      "margem de bastidor",
      "trace",
      "tracado",
      "prevencao de acidentes",
      "artrelados"
    ],
    bibliographicReferences: [
      "BROTHER INDUSTRIES. Operation Manual & Embroidery Frame Safe Boundaries. Nagoya, 2023.",
      "ARTRELADOS. Gestão Operacional, Fichas Técnicas e Segurança no Manuseio de Bastidores. São Paulo, 2024."
    ],
    updatedAt: "2026-08-24"
  },
  {
    id: "o-074-orcamento-precificado-por-milheiro-de-pontos-e-custo-operacional",
    code: "O-074",
    term: "Orçamento Precificado por Milheiro de Pontos e Custo Operacional (Stitch-Count Pricing Formula & Hourly Atelier Costing)",
    letter: "O",
    level: "Iniciante 🟢",
    category: "Gestão do Ateliê e Produção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da contabilidade industrial e economia de custos (Cost-Volume-Profit Analysis) adaptada para confecções de bordado de pequeno e médio porte.",
    summary: "Fórmula prática para precificar bordados com precisão, cobrindo linha, máquina, tempo e garantindo lucro real.",
    definition: "O Orçamento Precificado por Milheiro de Pontos e Custo da Hora Operacional (Embroidery Hourly Costing & Thousand-Stitch Pricing Formula) é a metodologia matemática de formação de preço de venda de serviços de bordado computadorizado. O cálculo integra quatro pilares essenciais: 1) Custo Direto de Materiais (consumo de linha superior e inferior a R$ 0,08/mil pontos + entretela + plásticos solúveis); 2) Custo da Hora de Máquina (energia elétrica, depreciação do equipamento e taxa de manutenção preventiva diluída); 3) Taxa por Milheiro de Pontos (geralmente entre R$ 2,50 e R$ 4,50 por 1.000 pontos em lotes, com taxa mínima de entrada para peças unitárias); e 4) Margem de Lucro Líquido Real (mínimo de 35% a 50%), permitindo ao ateliê orçar pedidos corporativos e peças avulsas com rentabilidade garantida e transparência profissional.",
    technicalDetails: "Consumo médio de linha por 1.000 pontos: 4,5 metros a 5,5 metros de fio superior e 2,5 metros de linha de bobina. Fórmula básica: Preço = (Insumos + (Minutos × Custo Minuto) + Taxa Matriz) × Margem Lucro.",
    howItWorks: [
      "1. A cliente solicita um orçamento para bordar um brasão de 18.000 pontos nas costas de 10 jalecos de formandos.",
      "2. A bordadeira consulta a quantidade de pontos da matriz no software (18.000 pontos = 18 milheiros).",
      "3. Calcula o custo de insumos por jaleco (linha + entretela rasgável dupla = R$ 3,20).",
      "4. Estima o tempo de máquina: a 750 RPM, a matriz leva cerca de 24 minutos por peça (Custo operacional = R$ 7,50).",
      "5. O custo total de produção de cada jaleco é de R$ 10,70.",
      "6. Ela aplica a taxa de margem de lucro de 50% e dilui o valor da digitalização da matriz entre as 10 peças.",
      "7. Apresenta a proposta formal com o valor de R$ 22,00 por bordado em cada jaleco.",
      "8. A turma de formandos aprova com satisfação e o ateliê fatura com lucro real garantido e comprovado."
    ],
    beginnerExplanation: "É a fórmula mágica e fácil para você nunca mais ter dúvida de 'quanto cobrar' por um bordado! Em vez de ter vergonha ou chutar um preço no escuro, você soma quanto gastou de linha e entretela, o tempo que a sua máquina trabalhou e coloca o seu lucro merecido por cima. Cobrando o valor certo, você conquista clientes fiéis e vê o dinheiro sobrar de verdade no fim do mês!",
    applications: [
      "Cálculo rápido de propostas para pedidos em grandes quantidades (escolas, empresas, eventos)",
      "Definição de taxa mínima de atendimento para bordados de uma única peça (peças piloto)",
      "Planejamento de faturamento mensal e metas de vendas para o ateliê",
      "Elaboração de tabela de preços profissional para enviar por WhatsApp e PDF aos clientes"
    ],
    commonErrors: [
      "❌ Cobrar valores irrisórios (como R$ 5 ou R$ 8 por bordados de 20 mil pontos), pagando para trabalhar sem cobrir nem o desgaste da máquina",
      "❌ Esquecer de cobrar o valor da criação ou adaptação da matriz em pedidos de uma única peça",
      "❌ Não considerar o custo de embalagens bonitas, saquinhos de organza e fitas de cetim no preço final"
    ],
    troubleshootingTips: [
      "Tenha sempre um 'Valor Mínimo de Entrada' no ateliê (ex: nenhum serviço sai por menos de R$ 20,00, mesmo que seja apenas um nome pequeno)",
      "Para pedidos grandes (mais de 30 peças), você pode conceder um desconto progressivo de 10% a 15% porque a máquina trabalha sem paradas de montagem",
      "Mantenha uma planilha simples ou caderninho com os custos fixos do ateliê anotados (luz, manutenção, agulhas e entretelas)"
    ],
    dicaArtrelados: "Lembre-se sempre: cliente que vem por preço baixo vai embora por qualquer centavo a menos; mas cliente que vem pela sua qualidade, acabamento nobre e pontualidade vira fã e recomenda seu ateliê para todo mundo! Valorize sua arte com uma precificação profissional!",
    voceSabia: "Na indústria têxtil internacional de bordados promocionais, a unidade padrão de cobrança mundial desde a década de 1970 é a taxa por 1.000 pontos (Stitch-Count Pricing / Per-1,000-Stitch Rate).",
    practicalExercise: "Pegue a última toalha ou camisa que você bordou: anote quantos pontos ela tinha e quanto tempo a máquina levou. Calcule o preço ideal pela nossa fórmula e compare com o que você cobrou!",
    quickSummary: "Método financeiro para precificar bordados com base na quantidade de pontos, custos de insumos e margem de lucro.",
    relatedTerms: [
      "Ficha Técnica de Produção",
      "Layout de Produção Contínua e Organização Modular",
      "Gestão do Ateliê e Produção",
      "Técnicas de Bordado"
    ],
    tags: [
      "o-074",
      "precificacao",
      "orcamento",
      "custo por mil pontos",
      "lucro",
      "gestao financeira",
      "atelie",
      "artrelados"
    ],
    bibliographicReferences: [
      "ARTRELADOS. Precificação de Ouro no Bordado: O Método Definitivo para Cobrar Certo, Multiplicar seus Lucros e Viver da sua Arte. São Paulo, 2024.",
      "NATIONAL EMBROIDERY GUILD. Commercial Embroidery Pricing, Overhead Recovery & Shop Profitability Guidelines. Dallas, 2022."
    ],
    updatedAt: "2026-08-24"
  }
];

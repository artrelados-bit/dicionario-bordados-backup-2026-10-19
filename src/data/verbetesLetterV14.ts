import { Verbete } from "../types";

export const VERBETES_LETTER_V14: Verbete[] = [
  {
    id: "v-076-velocidade-de-bordado-por-tipo-de-ponto-e-densidade",
    code: "V-076",
    term: "Velocidade de Bordado por Tipo de Ponto e Densidade (Embroidery Speed Optimization by Stitch Type & Density - SPM)",
    pronunciation: "ve-lo-si-da-de de bor-da-do por ti-po de pon-to e den-si-da-de",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Controle de Qualidade & Produtividade",
    origin: "Do latim 'velocitas' (rapidez) e da sigla 'SPM' (Stitches Per Minute / Pontos Por Minuto - PPM). Princípio da mecatrônica de bordado para controle de atrito térmico e inércia.",
    summary: "Calibração e escalonamento da rotação da máquina (PPM) conforme a largura, a densidade e o tipo de linha, prevenindo quebras por aquecimento e deformação de pontos.",
    definition: "A Velocidade de Bordado por Tipo de Ponto e Densidade (Embroidery Speed Optimization by Stitch Geometry & Thermal Dissipation) é a estratégia operacional e de programação que modula a cadência de rotação da máquina (medida em Pontos Por Minuto - PPM ou Stitches Per Minute - SPM) com base na física mecânica de cada elemento da matriz. Em pontos tatami com passos regulares de 3,5 a 4,5 mm, a máquina pode operar em velocidades elevadas (850 a 1.050 PPM). Em contrapartida, colunas largas de ponto cheio (cetim > 5 mm), microletras (< 4 mm), detalhes com linhas metálicas, fios fotossensíveis ou relevos em EVA 3D exigem redução obrigatória da velocidade para 500 a 700 PPM para evitar aquecimento excessivo da agulha, quebra de filamentos e perda de registro pantográfico.",
    technicalDetails: "Atrito térmico da agulha: a 1.000 PPM, a temperatura do olho da agulha pode ultrapassar 120 °C em tecidos densos. Ponto cheio longo (> 6 mm) aumenta o curso de desaceleração do bastidor, gerando forças inerciais elevadas que provocam flexão de agulha (*needle deflection*). A redução de velocidade diminui o estresse dinâmico em até 45%.",
    beginnerExplanation: "É saber acelerar e desacelerar a máquina na hora certa, como um carro na estrada! Em retas com pontos normais e fáceis, você pode acelerar para terminar rápido. Mas em curvas fechadas, letrinhas miúdas, linhas douradas ou pontos bem largos, você precisa reduzir a velocidade para a linha não arrebentar e a agulha não esquentar demais!",
    howItWorks: [
      "1. A bordadeira ou o programador analisa os elementos da matriz (letras, apliques, tatami, 3D).",
      "2. No software ou diretamente no painel da máquina, programa reduções de velocidade em cores específicas.",
      "3. Durante preenchimentos amplos de tatami, a máquina atinge a velocidade de cruzeiro (850 a 950 PPM).",
      "4. Ao trocar para uma linha metálica ou letras pequenas, a máquina reduz automaticamente para 600 PPM.",
      "5. A agulha penetra com precisão micrométrica, sem sofrer desvios por empurrão lateral do bastidor.",
      "6. O bordado termina com zero paradas por quebra de linha e acabamento acetinado impecável."
    ],
    applications: [
      "Produção seriada mista com logotipos que misturam grandes fundos e textos minúsculos.",
      "Bordados em fios metálicos de ouro e prata em paramentos e enxovais de luxo.",
      "Confecção de bordados 3D Puff com placas de EVA espessas.",
      "Otimização de tempo e preservação da vida útil de máquinas industriais."
    ],
    characteristics: [
      "Aumenta a produtividade real ao eliminar paradas constantes para reenfiamento.",
      "Preserva a integridade do fio e a lubrificação do cabeçote.",
      "Garante letras nítidas com bordas afiadas e sem deformação."
    ],
    commonErrors: [
      "❌ Rodar a máquina na velocidade máxima o tempo todo por pressa cega de terminar o lote.",
      "❌ Usar linha metálica a 900 PPM sem reduzir a rotação.",
      "❌ Bordar ponto cheio extra-largo em alta velocidade, entortando a agulha contra a chapa."
    ],
    troubleshootingTips: [
      "A linha arrebenta sempre nos mesmos pontos cheios largos: reduza a velocidade da máquina para 650 PPM nessa cor.",
      "A agulha quebra ao bordar detalhes minúsculos: diminua a velocidade para 600 PPM e use agulha ponta fina 65/9.",
      "O bordado está demorando muito: aumente a velocidade apenas nos grandes blocos de preenchimento tatami para 850 PPM."
    ],
    dicaArtrelados: "Produtividade não é a velocidade da máquina no painel, mas o número de peças prontas na caixa no final do dia! Rodar a 700 PPM sem quebrar nenhuma linha é infinitamente mais rápido do que tentar rodar a 1.000 PPM parando a cada dois minutos para passar a linha na agulha de novo!",
    voceSabia: "Em velocidades acima de 1.000 PPM, a agulha desce e sobe mais de 16 vezes por segundo no tecido, gerando uma força de impacto equivalente a centenas de quilos por centímetro quadrado na ponta da agulha!",
    practicalExercise: "Borde uma matriz com letras pequenas a 950 PPM e outra igual a 650 PPM. Compare a nitidez dos cantos, a ausência de laçadas e o estado da linha no verso em ambas as peças.",
    quickSummary: "Velocidade de Bordado por Ponto é o ajuste inteligente da rotação da máquina de acordo com a complexidade do ponto e o tipo de linha, evitando quebras e garantindo máxima nitidez.",
    recommendedSettings: {
      speedPPM: "Tatami: 800-950 PPM | Cetim: 700-800 PPM | Metálico/3D: 550-650 PPM",
      needleType: "Compatível com a linha",
      density: "Adequada à velocidade programada"
    },
    relatedTerms: [
      "Pontos Por Minuto (PPM / SPM)",
      "Atrito Térmico de Agulha",
      "Flexão de Agulha (Needle Deflection)",
      "Fios Metálicos",
      "Bordado 3D Puff"
    ],
    tags: [
      "v-076",
      "velocidade",
      "spm",
      "ppm",
      "produtividade",
      "rotacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY SYSTEMS. Machine Speed Modulation and High-Speed Dynamics. Nagoya, 2022.",
      "SCHMETZ NEEDLES. High-Speed Embroidery Needle Thermal Dissipation Guide. Herzogenrath, 2021.",
      "ARTRELADOS. Engenharia de Produção e Otimização de Rotação em Ateliês de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-077-veludo-de-algodao-e-veludo-molhado-no-bordado",
    code: "V-077",
    term: "Veludo de Algodão e Veludo Molhado no Bordado (Velvet Embroidery Techniques, Pile Protection & Stabilizing)",
    pronunciation: "ve-lu-do de al-go-dão e ve-lu-do mo-lha-do no bor-da-do",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Estruturação & Física Têxtil",
    origin: "Do latim 'villosus' (peludo, farto em fios). Tecido nobre de estrutura cortada tridimensional de alto valor agregado na moda e decoração.",
    summary: "Conjunto de técnicas de estabilização, bastidor flutuante e uso de filme solúvel superior para bordar veludos sem marcar o tecido nem engolir os pontos.",
    definition: "O Veludo de Algodão e Veludo Molhado no Bordado (Cut-Pile Velvet Embroidery, Crush Prevention & Stabilization Protocol) engloba o protocolo técnico de manuseio e bordado digital sobre tecidos aveludados com superfície de pelo cortado vertical (*pile*). Pela sua sensibilidade mecânica extrema, prender o veludo diretamente no bastidor convencional provoca o esmagamento permanente das fibras de pelo (*hoop burn* irreparável). O método correto exige a técnica de bastidor flutuante (*floating* com entretela colada com spray temporário ou bastidor magnético), aplicação de filme hidrossolúvel superior (*topper*) e matriz digitalizada com compensação de repuxo generosa e subpontos de grade reticulada.",
    technicalDetails: "Compensação de repuxo recomendada: 0,45 mm a 0,55 mm. Densidade de topo: 0,40 mm com underlay tatami aberto cruzado a 45°/135°. Utilização obrigatória de agulha Ponta Bola Fina (SES 75/11) para afastar os pelos sem cortar os tufos da trama de base.",
    beginnerExplanation: "O veludo é aquele tecido chique e fofinho cheio de pelinhos em pé. Se você apertar ele no aro do bastidor comum, o aro amassa os pelos para sempre e deixa uma marca redonda horrível que não sai nem lavando! Para bordar veludo, nós prendemos só a entretela no bastidor, colamos o veludo macio por cima e colocamos um plástico solúvel na frente!",
    howItWorks: [
      "1. A bordadeira prende apenas a entretela firme de corte limpo (Cut-Away) no bastidor.",
      "2. Aplica uma névoa suave de spray adesivo temporário sobre a entretela.",
      "3. Posiciona a peça de veludo delicadamente por cima, alisando com as mãos sem apertar os pelos.",
      "4. Coloca uma folha de plástico hidrossolúvel (Solvy) sobre o veludo e fixa com alfinetes ou ponto de alinhavo.",
      "5. A máquina borda a matriz com velocidade moderada (650 a 700 PPM).",
      "6. Ao terminar, retira-se o plástico solúvel (com água ou vapor leve) e a peça sai com o veludo 100% perfeito e sem nenhuma marca de bastidor."
    ],
    applications: [
      "Almofadas decorativas de luxo, cortinas e xales em veludo cotelê ou alemão.",
      "Becas de formatura universitária, capas eclesiásticas e estojos de joias.",
      "Vestidos de festa, saias e casacos de veludo molhado com elastano.",
      "Roupões finos de inverno e sapatilhas bordadas."
    ],
    characteristics: [
      "Preserva a textura aveludada original e o toque nobre da peça.",
      "Evita o afundamento das letras e contornos nos pelos do tecido.",
      "Garante bordados com relevo alto e brilho acetinado impecável."
    ],
    commonErrors: [
      "❌ Apertar o veludo diretamente no bastidor de parafuso com força (esmagamento irreversível das fibras).",
      "❌ Passar ferro quente diretamente sobre o veludo (queima e deita os pelos para sempre).",
      "❌ Bordar sem filme solúvel por cima, fazendo as letras desaparecerem no meio dos pelos."
    ],
    troubleshootingTips: [
      "O bastidor deixou uma marca esbranquiçada no veludo: aplique vapor leve de passadeira vertical pelo avesso e escove suavemente os pelos com escova macia.",
      "Os pelinhos do veludo estão espetando no meio da letra: utilize filme hidrossolúvel por cima e ative o underlay de grade na matriz.",
      "O tecido esticou e o bordado deformou: use entretela de corte limpo (Cut-Away) com gramatura de 60 a 80 g/m² no bastidor flutuante."
    ],
    dicaArtrelados: "Regra de ouro do ateliê para veludo: NUNCA aperte o veludo no bastidor e NUNCA encoste ferro de passar direto nele! Use o método flutuante (colando na entretela) e, para tirar amassadinhos, use apenas vapor de longe com a peça virada ao avesso!",
    voceSabia: "Na tecelagem tradicional de veludo, dois tecidos são tecidos juntos um de frente para o outro com fios verticais conectando ambos; uma navalha afiada passa no meio cortando os fios e criando duas peças de veludo perfeitas simultaneamente!",
    practicalExercise: "Borde um monograma em um retalho de veludo usando o método flutuante com filme solúvel por cima. Retire o filme com vapor úmido e observe como o bordado fica alto, nítido e o veludo ao redor continua macio e intocado.",
    quickSummary: "Bordado em Veludo é a técnica de usar bastidor flutuante e filme solúvel para bordar tecidos aveludados com segurança, evitando marcas de aro e afundamento dos pontos.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 Ponta Bola Fina (SES)",
      density: "Densidade: 0.40 mm com compensação de 0.45 mm"
    },
    relatedTerms: [
      "Método Flutuante (Floating)",
      "Marcas de Bastidor (Hoop Burn)",
      "Plástico Hidrossolúvel (Solvy)",
      "Entretela Cut-Away",
      "Underlay para Veludo"
    ],
    tags: [
      "v-077",
      "veludo",
      "veludo molhado",
      "floating",
      "hoop burn",
      "tecidos nobres",
      "artrelados"
    ],
    bibliographicReferences: [
      "EMBROIDERY MAGAZINE UK. Velvet & Cut-Pile Luxury Fabric Embroidery. London, 2022.",
      "MADEIRA THREADS. Specialty Fabric Stabilizing: Velvets, Furs & High-Pile Knits. Freiburg, 2021.",
      "ARTRELADOS. O Guia Secreto dos Tecidos Nobres e Delicados no Bordado Digital. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-078-variacao-de-comprimento-de-ponto-tatami",
    code: "V-078",
    term: "Variação de Comprimento de Ponto Tatami (Tatami Variable Stitch Length & Texture Breaking)",
    pronunciation: "va-ri-a-são de com-pri-men-to de pon-to ta-ta-mi",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do latim 'variatio' (mudança) e do japonês 'tatami' (esteira tradicional). Recurso matemático de aleatoriedade nos pontos para enriquecimento textural.",
    summary: "Recurso de software que varia aleatoriamente o comprimento dos pontos tatami, eliminando linhas geométricas indesejadas (efeito moiré) e criando texturas orgânicas.",
    definition: "A Variação de Comprimento de Ponto Tatami (Random Tatami Stitch Length & Moiré Pattern Suppression Algorithm) é o algoritmo de digitalização que introduz uma distribuição estocástica (pseudo-aleatória) calibrada nos comprimentos dos pontos em uma área de preenchimento esteira. Enquanto o tatami tradicional repete um comprimento fixo e regular de ponto (ex: rigorosamente 4,0 mm em todas as passadas, gerando linhas diagonais visíveis chamadas de 'costelas' ou padrões de interferência ótica moiré), a variação dinâmica oscila os passos entre limites programados (ex: de 2,5 mm a 5,0 mm), quebrando o alinhamento das perfurações e produzindo uma textura contínua, aveludada e orgânica.",
    technicalDetails: "Parâmetro de variação percentual de 20% a 40% sobre o comprimento médio base de 4,0 mm com fração de deslocamento de linha (*offset*) aleatória. Reduz o estresse repetitivo de perfuração na mesma linha de urdume do tecido, diminuindo o risco de furos e rasgos.",
    beginnerExplanation: "No preenchimento esteira comum, a máquina dá os passos com o mesmo tamanho certinho, o que cria aquelas linhas diagonais retas bem visíveis no fundo do desenho. Quando ativamos a variação de comprimento, a máquina dá passos um pouquinho maiores e outros um pouquinho menores de propósito! Isso esconde as linhas retas e deixa o fundo liso e macio como uma pintura a óleo!",
    howItWorks: [
      "1. O programador seleciona um objeto grande de preenchimento tatami no software.",
      "2. Ativa a opção 'Comprimento Variável / Random Length' nas propriedades de ponto.",
      "3. Define a porcentagem de variação (ex: 30%) e a faixa de tamanho dos pontos.",
      "4. O software calcula a matriz redistribuindo as perfurações de forma orgânica e não repetitiva.",
      "5. A máquina borda o objeto sem criar linhas diagonais artificiais na superfície.",
      "6. O preenchimento reflete a luz de maneira suave, criando um acabamento acetinado de galeria de arte."
    ],
    applications: [
      "Bordados realistas de pelagem de animais, penas de pássaros e folhagens botânicas.",
      "Rostos humanos, pele e retratos bordados hiper-realistas.",
      "Fundos amplos de brasões para eliminar linhas de interferência ótica em fotografias.",
      "Paisagens com efeitos de água, nuvens e sombras suaves."
    ],
    characteristics: [
      "Elimina 100% do efeito moiré e listras geométricas indesejadas.",
      "Distribui os furos das agulhas de forma irregular, preservando a resistência do tecido.",
      "Cria um efeito visual artístico e sofisticado de alta costura."
    ],
    commonErrors: [
      "❌ Configurar a variação muito extrema gerando micropontos menores que 1,2 mm (risco de emaranhamento de linha).",
      "❌ Usar em preenchimentos minúsculos onde a variação não tem espaço para se desenvolver.",
      "❌ Combinar com densidades excessivamente fechadas (< 0,35 mm)."
    ],
    troubleshootingTips: [
      "O fundo do bordado ficou cheio de listras diagonais que não combinam com o desenho: ative a 'Variação de Comprimento Tatami' a 30% nas propriedades do preenchimento.",
      "A agulha está quebrando em pontos muito curtos: configure o filtro de pontos mínimos para 1,5 mm no software.",
      "O bordado parece uma esteira plástica dura: combine a variação de comprimento com uma densidade mais suave de 0,42 mm."
    ],
    dicaArtrelados: "Se você quer que os seus bordados de animais e flores pareçam pinturas vivas e não um plástico computadorizado: ATIVE a variação aleatória de comprimento de ponto no tatami! O brilho da linha espalha de um jeito tão natural que valoriza o bordado em 300%!",
    voceSabia: "O efeito de interferência 'moiré' (aquelas listras onduladas estranhas) foi descoberto pelos tecelões de seda franceses no século XVII e batizado a partir do tecido 'moiré', que tinha relevos ondulados propositais!",
    practicalExercise: "Digitalize dois círculos de 6 cm de diâmetro com preenchimento tatami: um com comprimento fixo de 4,0 mm e outro com variação aleatória de 35%. Borde ambos e observe sob a luz do sol como o segundo tem um acabamento muito mais orgânico e luxuoso.",
    quickSummary: "Variação de Comprimento Tatami é o recurso que alterna o tamanho dos passos da esteira, eliminando listras geométricas e criando texturas orgânicas e aveludadas.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Fina ou Bola",
      density: "Comprimento base: 4.0 mm | Variação: 25% a 35%"
    },
    relatedTerms: [
      "Ponto Tatami (Fill Stitch)",
      "Efeito Moiré",
      "Filtro de Pontos Curtos",
      "Bordado Foto-Realista",
      "Frações de Deslocamento (Offset)"
    ],
    tags: [
      "v-078",
      "tatami",
      "comprimento variavel",
      "moire",
      "textura organica",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Advanced Tatami Textures & Random Pattern Generation. Sydney, 2022.",
      "PULSE MICROSYSTEMS. Creative Stitch Effects and Moiré Elimination. Mississauga, 2021.",
      "ARTRELADOS. Manual Avançado de Efeitos Artísticos e Texturas na Digitalização de Matrizes. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-079-vacuo-e-mesa-de-succao-para-enquadramento-rapido",
    code: "V-079",
    term: "Vácuo e Mesa de Sucção para Enquadramento Rápido (Vacuum Table & Suction Hooping System)",
    pronunciation: "va-cu-o e me-za de su-quis-são pa-ra en-qua-dra-men-to ra-pi-do",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Bastidores e Enquadramento",
    origin: "Do latim 'vacuum' (vazio, espaço sem ar) e 'succio' (sugar). Tecnologia de fixação pneumática por pressão negativa da indústria automotiva e aeroespacial adaptada ao bordado.",
    summary: "Mesa especial com tampo microperfurado e bomba de sucção a vácuo que imobiliza entretelas e peças têxteis instantaneamente sem necessidade de anéis ou parafusos.",
    definition: "O Vácuo e Mesa de Sucção para Enquadramento Rápido (Industrial Vacuum Clamping Table & Suction Hooping Station) é o dispositivo tecnológico composto por uma bancada de alumínio microperfurada conectada a uma bomba de vácuo de canal lateral de alto fluxo e turbina de sucção contínua. Ao acionar o sistema por pedal, o fluxo de ar em pressão negativa puxa a entretela e o painel de tecido uniformemente contra a superfície da mesa, mantendo-os perfeitamente planos, sem rugas e imobilizados sem qualquer contato perimétrico que possa marcar o tecido, permitindo a aplicação imediata de molduras magnéticas ou transporte direto para o pantógrafo.",
    technicalDetails: "Vácuo de operação: -0,3 a -0,6 bar (-30 a -60 kPa) com vazão de ar de 60 a 120 m³/h. Equipado com válvula de alívio rápido e filtro de cartucho para retenção de poeira e fiapos têxteis.",
    beginnerExplanation: "É uma mesa cheia de furinhos que 'chupa' o pano para baixo com força de ar! Quando você coloca a entretela e a camisa em cima da mesa e pisa no pedal, o ar suga o tecido de um jeito tão perfeito que ele fica lisinho na hora, sem você precisar ficar puxando nem sofrendo para colocar no aro do bastidor!",
    howItWorks: [
      "1. A bordadeira coloca a entretela sobre o tampo perfurado da mesa de vácuo.",
      "2. Posiciona a peça de tecido ou molde cortado alinhado com as réguas laser da bancada.",
      "3. Pisa no pedal elétrico para ligar a bomba de sucção a vácuo.",
      "4. O tecido é instantaneamente sugado contra a mesa, ficando plano como uma folha de papel.",
      "5. A operadora encaixa o aro magnético superior em 1 segundo com posicionamento milimétrico.",
      "6. Desliga o vácuo e retira o bastidor pronto para encaixar na máquina de bordar.",
      "7. O tempo de enquadramento cai de 40 segundos para apenas 5 segundos por peça."
    ],
    applications: [
      "Produção seriada em larga escala de cortes de camisaria, calçados e bonés.",
      "Enquadramento de tecidos ultradelicados como seda pura, cetim de noiva e organza.",
      "Fixação de entretelas adesivas e espumas de EVA para bordado 3D sem rugas.",
      "Fábricas de estofados de couro automotivo e painéis de aeronaves."
    ],
    characteristics: [
      "Zero marcas de bastidor em tecidos nobres e sensíveis.",
      "Aumento colossal na velocidade de preparação do operador.",
      "Alinhamento geométrico perfeito com réguas e miras laser integradas."
    ],
    commonErrors: [
      "❌ Trabalhar com o filtro da bomba de vácuo entupido de poeira têxtil, perdendo a força de sucção.",
      "❌ Tentar sugar tecidos de trama muito aberta (tule rústico) sem colocar uma folha de papel ou entretela por baixo.",
      "❌ Puxar o tecido à força com a sucção ligada, esticando a fibra de maneira desigual."
    ],
    troubleshootingTips: [
      "A mesa perdeu a força de sucção: limpe o filtro de cartucho da bomba e verifique se as mangueiras de ar não estão dobradas.",
      "O tecido está escorregando mesmo com o vácuo ligado: cubra as áreas não utilizadas da mesa perfurada com uma placa de borracha para concentrar a sucção sob a peça.",
      "O pedal não desliga o motor: verifique o sensor micro-switch do pedal de acionamento elétrico."
    ],
    dicaArtrelados: "Para confecções e ateliês de alto volume: mesas de apoio com gabarito de vácuo e bastidores magnéticos transformam a etapa mais cansativa da produção em um processo prazeroso e super rápido!",
    voceSabia: "As mesas de corte e enquadramento a vácuo foram inventadas originalmente pela NASA para manter as mantas térmicas de isolamento das naves espaciais perfeitamente imóveis durante a costura e o corte a laser de precisão!",
    practicalExercise: "Em feiras do setor têxtil ou demonstrações técnicas, teste uma estação de enquadramento com sucção: sinta com as mãos como a peça fica imóvel instantaneamente e a facilidade de colocar o aro magnético por cima.",
    quickSummary: "Mesa de Vácuo é a bancada de sucção a ar que imobiliza tecidos e entretelas em segundos, eliminando marcas de bastidor e acelerando a produção em série.",
    recommendedSettings: {
      speedPPM: "N/A (Etapa de Enquadramento)",
      needleType: "N/A",
      density: "Pressão de vácuo: -0.4 bar (-40 kPa)"
    },
    relatedTerms: [
      "Bastidor Magnético",
      "Marcas de Bastidor (Hoop Burn)",
      "Bomba de Vácuo",
      "Ergonomia no Ateliê",
      "Estação de Enquadramento"
    ],
    tags: [
      "v-079",
      "vacuo",
      "mesa de succao",
      "enquadramento",
      "bastidor",
      "produtividade",
      "artrelados"
    ],
    bibliographicReferences: [
      "GERBER TECHNOLOGY. Vacuum Clamping and Material Handling in Apparel Production. Tolland, 2022.",
      "HOOPMASTER INDUSTRIAL. Vacuum-Assisted Hooping & Quick-Clamp Fixtures. Dallas, 2021.",
      "ARTRELADOS. Automação e Engenharia de Processos para Alta Performance no Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-080-variacao-de-densidade-em-degrade",
    code: "V-080",
    term: "Variação de Densidade em Degradê (Gradient Stitch Density & Multi-Layer Shading Transition)",
    pronunciation: "va-ri-a-são de den-si-da-de em de-gra-de",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do latim 'densitas' (espessura, concentração) e do francês 'dégradé' (transição suave de tons). Técnica mestra de pintura com linhas de bordado.",
    summary: "Programação de transição suave entre duas ou mais cores combinando camadas de densidade decrescente com ângulos complementares, criando o efeito de esfumado artístico.",
    definition: "A Variação de Densidade em Degradê (Color Blending, Gradient Stitch Density & Accordion Stitch Modulation) é a metodologia avançada de digitalização artística na qual o espaçamento entre as passadas de ponto é modulado de forma contínua e gradual (ex: de uma densidade fechada de 0,38 mm até uma densidade aberta de 2,5 mm ao longo do comprimento do objeto). Ao sobrepor duas camadas de cores distintas com inclinações angulares ligeiramente defasadas (ex: 5° a 10°) e gradientes de densidade invertidos, os filamentos de linha se entrelaçam opticamente na retina humana, gerando uma terceira cor intermediária e uma transição de luz e sombra sem cortes bruscos.",
    technicalDetails: "Perfil de gradiente típico: Exponencial ou Logarítmico (*Accordion Profile*). Densidade inicial: 0,40 mm; densidade final: 2,0 mm com comprimento de ponto de 3,5 mm a 4,5 mm. Não utilizar underlays pesados na área de fusão para não criar acúmulo de espessura.",
    beginnerExplanation: "É o efeito de pintar com linha! Quando você quer fazer um pôr do sol que vai do vermelho para o amarelo bem suavemente, sem aquela linha dura dividindo as duas cores, você faz a linha vermelha ir ficando cada vez mais espaçada e a amarela entrar no meio dela bem fininha. As duas linhas se misturam e criam um laranja perfeito no meio!",
    howItWorks: [
      "1. O programador cria o primeiro objeto com a cor base (ex: azul escuro) e aplica o efeito 'Gradiente' com densidade abrindo para a direita.",
      "2. Cria o segundo objeto na mesma área com a cor seguinte (ex: azul claro) com o gradiente abrindo para a esquerda.",
      "3. Ajusta o ângulo do segundo objeto com uma diferença de 5 a 10 graus em relação ao primeiro.",
      "4. A máquina borda primeiro a cor escura e depois a cor clara sobreposta.",
      "5. Os fios claros penetram nos espaços vazios deixados pelos fios escuros.",
      "6. O resultado aos olhos de quem olha é um degradê perfeito e contínuo, com aspecto de pintura aquarela."
    ],
    applications: [
      "Bordados artísticos de animais, asas de pássaros, pelagens e olhos com brilho de vidro.",
      "Paisagens com pôr do sol, chamas de fogo, ondas do mar e auroras boreais.",
      "Logotipos corporativos modernos com gradientes de cores da marca.",
      "Pétalas de flores, rosas sombreadas e frutas hiper-realistas."
    ],
    characteristics: [
      "Cria efeitos tridimensionais de profundidade e realismo impressionantes.",
      "Permite gerar dezenas de tonalidades visuais usando apenas 2 ou 3 cones de linha.",
      "Mantém o bordado macio e flexível, sem o peso de camadas maciças empilhadas."
    ],
    commonErrors: [
      "❌ Deixar as duas camadas com o mesmo ângulo exato (os fios da segunda camada caem exatamente nos mesmos vãos e afundam).",
      "❌ Programar ambas as camadas com densidade normal (0,40 mm), criando uma placa grossa e quebrando a agulha.",
      "❌ Usar cores com contraste extremo (preto e branco puro) sem uma cor de transição cinza no meio."
    ],
    troubleshootingTips: [
      "O degradê ficou com uma divisão dura e feia no meio: aumente a área de sobreposição das duas camadas para pelo menos 15 mm e use um perfil de gradiente suave.",
      "O bordado ficou duro e a linha está arrebentando na transição: aumente o espaçamento final do gradiente para 2,5 mm e desative o underlay pesado nessa região.",
      "Apareceram falhas de tecido na parte mais clara: adicione uma camada de base aberta na cor intermediária."
    ],
    dicaArtrelados: "O segredo para um degradê perfeito que parece uma foto: NUNCA use o mesmo ângulo de ponto nas duas cores! Mude o ângulo da segunda cor em 7 graus em relação à primeira! Essa pequena inclinação faz as linhas se cruzarem suavemente como fios de cabelo!",
    voceSabia: "Na manufatura de Gobelins na França no século XVIII, os mestres tapeceiros usavam a técnica do 'hachure' (linhas entrelaçadas de densidade variável) para criar retratos a óleo do Rei Luís XIV usando apenas fios de lã tingida!",
    practicalExercise: "Crie um retângulo de 10x4 cm no seu programa. Aplique um degradê de vermelho para amarelo com inclinação de 45° na primeira cor e 52° na segunda cor. Borde e observe como o laranja nasce sozinho no centro da peça.",
    quickSummary: "Variação de Densidade em Degradê é a técnica de mesclar cores com espaçamentos graduais de pontos, criando sombras suaves, realismo e efeitos artísticos sofisticados.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Fina (Sharp)",
      density: "Gradiente de 0.40 mm a 2.2 mm com defasagem de 7°"
    },
    relatedTerms: [
      "Color Blending",
      "Efeito Esfumado (Shading)",
      "Ângulo de Ponto (Stitch Angle)",
      "Ponto Tatami Artístico",
      "Bordado Hiper-Realista"
    ],
    tags: [
      "v-080",
      "degrade",
      "gradiente",
      "densidade variavel",
      "color blending",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Color Blending & Complex Shading Mastery. Sydney, 2022.",
      "HATCH EMBROIDERY. Mastering Gradients, Accordeon Stitch & Artistic Blending. Melbourne, 2021.",
      "ARTRELADOS. A Arte do Realismo no Bordado Computadorizado: Cores, Luz e Sombras. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-081-valvula-solenoide-de-lubrificacao-automatica",
    code: "V-081",
    term: "Válvula Solenoide de Lubrificação Automática (Automatic Central Lubrication Solenoid Valve)",
    pronunciation: "val-vu-la so-le-noi-de de lu-bri-fi-ca-são au-to-ma-ti-ca",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Componentes e Mecânica da Máquina",
    origin: "Do latim 'valvula' (pequena porta) e 'lubricus' (liso, escorregadio). Mecanismo eletropneumático de dosagem de óleo em máquinas industriais CNC.",
    summary: "Componente eletromecânico que abre e fecha sob comando eletrônico da placa para injetar microgotas de óleo na lançadeira e nos eixos nos intervalos programados.",
    definition: "A Válvula Solenoide de Lubrificação Automática (Central Automatic Lubrication Solenoid Valve & Metering Block) é a válvula eletromecânica de acionamento proporcional instalada na linha mestre de distribuição do sistema de lubrificação centralizada de máquinas industriais de bordar. Alimentada por uma bomba de óleo de pistão com reservatório e filtro, a válvula abre seus orifícios dosadores por alguns milissegundos a cada ciclo predeterminado de pontos (ex: a cada 500.000 pontos ou 4 horas de máquina ligada), liberando uma quantidade micrométrica precisa de óleo mineral branco para as lançadeiras rotativas e mancais de bielas, prevenindo o desgaste prematuro sem encharcar o tecido.",
    technicalDetails: "Pressão de injeção: 1,5 a 3,0 bar controlada por solenoide de 24V DC com tempo de abertura ajustável no painel entre 1 e 5 segundos. Possui microfiltros de malha 100 mesh para impedir a passagem de impurezas que possam entupir as microtubulações de nylon de 2 mm.",
    beginnerExplanation: "É uma torneirinha elétrica inteligente que fica escondida dentro da máquina industrial. Em vez de você ter que lembrar de pingar óleo na lançadeira toda hora com a bisnaga de plástico, essa válvula abre sozinha no tempo certinho e joga uma gotinha microscópica de óleo nos lugares que precisam, deixando a máquina sempre lubrificada sem sujar a roupa do cliente!",
    howItWorks: [
      "1. A máquina conta continuamente a quantidade de pontos executados pelo cabeçote.",
      "2. Ao atingir o limite programado no painel (ex: 300.000 pontos), o processador envia sinal para o circuito de lubrificação.",
      "3. A válvula solenoide recebe 24V e abre seus êmbolos de precisão por 2 segundos.",
      "4. A bomba pressuriza o óleo mineral que corre pelos microtubos de nylon transparentes.",
      "5. O bico dosador goteja exatamente 0,05 ml de óleo na pista da lançadeira giratória.",
      "6. A válvula fecha instantaneamente por ação de mola, mantendo a pressão da linha e prevenindo vazamentos.",
      "7. A lançadeira trabalha macia, fria e sem desgaste por atrito de metal contra metal."
    ],
    applications: [
      "Máquinas industriais multicabeças operando em regime ininterrupto de 2 ou 3 turnos (24 horas).",
      "Prevenção do travamento de lançadeiras rotativas em alta velocidade (1.000 PPM).",
      "Eliminação do erro humano de esquecimento de lubrificação diária.",
      "Proteção das peças bordadas contra manchas causadas por excesso de óleo manual."
    ],
    characteristics: [
      "Dosagem milimetricamente calibrada e automatizada.",
      "Prolonga a vida útil das lançadeiras e engrenagens cônicas em mais de 300%.",
      "Painel com aviso automático de nível baixo de óleo no reservatório."
    ],
    commonErrors: [
      "❌ Colocar óleo grosso de motor de carro ou óleo vegetal no reservatório (entope a válvula solenoide e as tubulações).",
      "❌ Desativar os avisos de lubrificação no painel da máquina sem abastecer o reservatório de óleo.",
      "❌ Regular o tempo de injeção para mais de 10 segundos, fazendo o óleo escorrer para o bastidor."
    ],
    troubleshootingTips: [
      "A lançadeira está esquentando e fazendo barulho seco mesmo com óleo no tanque: a válvula solenoide ou o microtubo de nylon está entupido; purgue o sistema no menu técnico.",
      "Aparecem gotinhas de óleo na parte de trás dos bordados: o tempo de injeção da válvula solenoide está muito alto; reduza para 1,5 segundos no painel.",
      "Aparece alerta 'Oil Level Low / Falta de Óleo' no painel: complete o reservatório com óleo mineral branco especial para máquina de bordar (Viscosidade ISO VG 10 ou 15)."
    ],
    dicaArtrelados: "Use SEMPRE óleo mineral branco purificado e transparente (óleo de vaselina puro para bordado)! NUNCA use óleos amarelos ou reciclados; eles entopem as válvulas solenoides e, se encostarem em uma camisa branca, a mancha não sai nunca mais!",
    voceSabia: "Em máquinas industriais de 20 cabeçotes, o sistema de lubrificação automática distribui óleo simultaneamente por mais de 50 metros de microtubos de nylon transparentes com pressão milimetricamente igual em todas as cabeças!",
    practicalExercise: "No painel da sua máquina industrial, acesse o menu de manutenção e localize o comando 'Manual Lubrication / Injeção Manual'. Acione o comando e observe a gotinha de óleo descendo pelo tubo transparente até a lançadeira.",
    quickSummary: "Válvula Solenoide de Lubrificação é a torneira eletrônica que injeta microgotas de óleo nos eixos e lançadeiras no tempo certo, garantindo máquina lubrificada e sem manchas de óleo.",
    recommendedSettings: {
      speedPPM: "Operação contínua",
      needleType: "N/A",
      density: "Frequência: a cada 4 horas ou 300.000 pontos (Tempo: 1.5 a 2.0 s)"
    },
    relatedTerms: [
      "Lubrificação Centralizada",
      "Lançadeira Rotativa",
      "Óleo Mineral Branco (ISO VG 10)",
      "Manutenção Preventiva",
      "Solenoide de Controle"
    ],
    tags: [
      "v-081",
      "valvula solenoide",
      "lubrificacao automatica",
      "lancadeira",
      "manutencao",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Automatic Central Lubrication Systems & Solenoid Valve Maintenance. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL. Lubrication Circuit Engineering & Hook Oil Metering. Ichinomiya, 2021.",
      "ARTRELADOS. Mecânica, Lubrificação e Manutenção Preventiva de Máquinas de Bordar. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-082-viscose-vs-poliester-em-linhas-de-bordado",
    code: "V-082",
    term: "Viscose vs. Poliéster em Linhas de Bordado (Rayon Viscose vs. Polyester Embroidery Thread Analysis)",
    pronunciation: "vis-co-ze ver-sus po-li-es-ter em li-nhas de bor-da-do",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Linhas & Insumos",
    origin: "Do latim 'viscosus' (viscoso, celulose vegetal regenerada) e do grego 'polys + ester' (polímero sintético). O grande clássico comparativo dos insumos da indústria de bordados.",
    summary: "Análise técnica comparativa entre linhas de viscose (Rayon - toque sedoso e brilho nobre) e poliéster (100% resistente a cloro, lavagens industriais e alta rotação).",
    definition: "A Viscose vs. Poliéster em Linhas de Bordado (Rayon Viscose Filament vs. Trilobal Polyester Performance Matrix) é o estudo técnico comparativo das duas principais matérias-primas utilizadas na fabricação de linhas de bordar industriais. A linha de **Viscose (Rayon)** é derivada da celulose vegetal regenerada da madeira, oferecendo toque extremamente macio, flexibilidade superior e um brilho suave e luxuoso idêntico ao da seda natural, sendo ideal para moda praia, roupas de bebê e vestuário de alta costura, porém sensível a alvejantes com cloro. Já o **Poliéster Trilobal** é uma fibra sintética de alta tenacidade com excelente memória elástica, resistência total a descolorantes com cloro e lavanderias industriais a 95 °C, sendo a escolha mandatória para uniformes profissionais, jeans, bonés e roupas esportivas.",
    technicalDetails: "Tenacidade média: Poliéster = 4,5 a 5,5 cN/dtex (alongamento 18%); Viscose = 2,8 a 3,5 cN/dtex (alongamento 12%). Solidez à lavagem com cloro: Poliéster = Grau 5 (Excelente); Viscose = Grau 1-2 (Risco de desbotamento). Tensão de trabalho ideal: Viscose = 100 a 115 gf; Poliéster = 115 a 130 gf.",
    beginnerExplanation: "A **Viscose** é a 'linha de seda vegetal': super macia, gostosa de passar a mão e com um brilho nobre, perfeita para roupinhas de bebê e vestidos finos, mas que não pode com cândida (cloro)! O **Poliéster** é a 'linha super-herói': forte como ferro, aguenta a máquina correndo no máximo e não desbota nem se você jogar água sanitária pura nela, sendo a rainha dos uniformes!",
    howItWorks: [
      "1. A bordadeira avalia o destino da peça: uniforme de trabalho pesado ou enxoval fino de luxo.",
      "2. Para uniformes, toalhas de hotel e roupas esportivas que usam cloro: escolhe linha de **Poliéster**.",
      "3. Para moda íntima, roupas de bebê, vestidos de seda e peças que exigem toque macio: escolhe **Viscose**.",
      "4. Ajusta a tensão na máquina: um pouco mais solta para a viscose (105 gf) e padrão para poliéster (120 gf).",
      "5. A máquina executa os pontos com perfeição.",
      "6. A peça final atende exatamente às exigências de durabilidade ou maciez do cliente."
    ],
    applications: [
      "Poliéster: Uniformes hospitalares com cloro, roupas esportivas, bonés e jaquetas pesadas.",
      "Viscose: Enxovais finos de bebê, lingerie, vestidos de noiva, lenços de seda e moda praia.",
      "Combinação artística no mesmo bordado para gerar áreas com brilhos e texturas contrastantes.",
      "Bordados em peças vintage e réplicas históricas de museus."
    ],
    characteristics: [
      "Poliéster: Indestrutível, não quebra fácil na alta rotação e resiste a alvejantes.",
      "Viscose: Toque ultra-macio na pele, caimento perfeito e brilho sofisticado de seda.",
      "Ambas são compatíveis com a mesma máquina de bordar."
    ],
    commonErrors: [
      "❌ Bordar uniformes hospitalares ou toalhas de hotel com linha de viscose (o cloro da lavanderia vai desbotar todas as cores).",
      "❌ Apertar demais a tensão da linha de viscose, arrebentando o fio por falta de elasticidade.",
      "❌ Usar poliéster rígido em roupas de recém-nascido, podendo irritar a pele sensível do bebê."
    ],
    troubleshootingTips: [
      "O cliente reclamou que o logotipo desbotou na primeira lavagem com cândida: a peça foi bordada com viscose em vez de poliéster; refaça o trabalho com poliéster trilobal.",
      "A linha de viscose está desfiando na agulha: use agulha ponta fina 75/11 nova e reduza a tensão superior no botão do cabeçote.",
      "O bordado em tecido fino de seda ficou duro e empipocado: troque o poliéster grosso por viscose No 40 ou No 60."
    ],
    dicaArtrelados: "A regra de ouro do ateliê é simples: vai para lavanderia de hotel, hospital ou trabalho pesado? Use POLIÉSTER! É para bebê recém-nascido, noiva ou roupa chique que vai encostar na pele? Use VISCOSE! Saber escolher o fio certo evita 100% das reclamações de clientes!",
    voceSabia: "A viscose (Rayon) foi inventada em 1884 pelo químico francês Hilaire de Chardonnet como a primeira fibra têxtil artificial do mundo, criada com a missão de substituir a caríssima seda dos casulos do bicho-da-seda!",
    practicalExercise: "Pegue dois retalhos bordados com uma flor: um feito com linha de viscose e outro com linha de poliéster. Mergulhe ambos em um copo com água e um pouco de água sanitária (cloro) por 5 minutos: veja como o poliéster fica intacto e a viscose desbota.",
    quickSummary: "Viscose vs. Poliéster é a escolha entre a maciez e brilho nobre da celulose (Viscose) e a força indestrutível e resistência a cloro do polímero sintético (Poliéster).",
    recommendedSettings: {
      speedPPM: "Poliéster: 800-950 PPM | Viscose: 700-800 PPM",
      needleType: "75/11 Ponta Bola ou Fina",
      density: "Viscose: 0.38 mm | Poliéster: 0.40 mm"
    },
    relatedTerms: [
      "Poliéster Trilobal",
      "Viscose Rayon",
      "Solidez ao Cloro (Chlorine Fastness)",
      "Tenacidade e Alongamento",
      "Enxovais de Bebê"
    ],
    tags: [
      "v-082",
      "viscose",
      "poliester",
      "rayon",
      "linhas",
      "comparativo",
      "insumos",
      "artrelados"
    ],
    bibliographicReferences: [
      "MADEIRA THREADS. Classic Rayon vs. Polyneon Polyester Comprehensive Technical Guide. Freiburg, 2022.",
      "GUNOLD GMBH. Thread Fibers & Industrial Performance Comparison Manual. Stockstadt, 2021.",
      "ARTRELADOS. Guia de Escolha e Aplicação de Linhas no Bordado Profissional. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-083-vinil-perfurado-e-peliculas-especiais-para-apliques",
    code: "V-083",
    term: "Vinil Perfurado e Películas Especiais para Apliques (Perforated Vinyl, Heat-Transfer Vinyl & Embroidery Layering)",
    pronunciation: "vi-nil per-fu-ra-do e pe-li-cu-las es-pe-si-ais pa-ra a-pli-ques",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo masculino composto.",
    category: "Aplicações & Técnicas Especiais",
    origin: "Do latim 'vinum' (vinho/álcool vinílico) e do inglês 'heat-transfer vinyl' (filme termotransferível). Fusão entre corte digital e bordado computadorizado.",
    summary: "Técnica mista de combinar filmes de vinil sintético, glitter e PVC termocolante com pontos de bordado para criar chaveiros, patches impermeáveis e tags resistentes.",
    definition: "O Vinil Perfurado e Películas Especiais para Apliques (Mixed-Media Embroidery with Specialty Vinyls, HTV & Synthetic Leather) é a técnica híbrida que combina o corte prévio ou durante o bastidor de filmes poliméricos (como vinil sintético marrom tipo couro, vinil translúcido com glitter, poliuretano termocolante e filmes holográficos) com pontos de fixação, contornos satim e detalhes bordados. Esse método permite produzir peças 100% impermeáveis, com brilho reflexivo impossível de obter apenas com linhas, além de economizar milhares de pontos de preenchimento ao utilizar a textura do próprio vinil como fundo da peça.",
    technicalDetails: "Requer agulha de ponta arredondada suave (Ponta Bola Leve - SES 75/11 ou Ponta Fina afiada para vinil grosso). Densidade do ponto de acabamento de borda: 0,45 mm a 0,55 mm (não usar densidades muito fechadas < 0,35 mm para não cortar o vinil como uma serra).",
    beginnerExplanation: "É quando a gente mistura pedaços de corino, vinil brilhoso ou plástico colorido com o bordado! Em vez de ficar preenchendo um fundo enorme com milhares de pontos de linha, você coloca um pedaço de vinil bonito e borda só o contorno e o nome por cima! É o método perfeito para fazer chaveiros durinhos, tags de mala e apliques modernos!",
    howItWorks: [
      "1. A matriz faz a marcação do formato do aplique na entretela.",
      "2. A bordadeira coloca o pedaço de vinil ou corino sintético sobre a marcação.",
      "3. A máquina faz o ponto corrido de fixação (Tackdown Stitch) prendendo o vinil.",
      "4. A bordadeira recorta o excesso do vinil ao redor com a tesourinha de ponta curva.",
      "5. A máquina borda os detalhes centrais e fecha a borda com ponto cheio ou ponto caseado.",
      "6. A peça final fica com acabamento impermeável, moderno e com toque de couro ou glitter sofisticado."
    ],
    applications: [
      "Confecção de chaveiros bordados durinhos, tags de mala e porta-crachás.",
      "Patches e emblemas em vinil para jaquetas jeans e mochilas escolares.",
      "Bordados em couro sintético e corino para bolsas e carteiras.",
      "Bordados infantis com glitter em camisetas e laços de cabelo."
    ],
    characteristics: [
      "Economiza até 80% do tempo de máquina e quantidade de pontos da matriz.",
      "Material 100% lavável, impermeável e resistente a atrito mecânico.",
      "Visual moderno e tridimensional de altíssimo apelo comercial."
    ],
    commonErrors: [
      "❌ Bordejar o contorno do vinil com ponto de cetim muito denso e apertado, cortando o vinil fora do bastidor.",
      "❌ Usar agulhas de ponta cortante de couro (tipo lança) em vinis finos, picotando o plástico.",
      "❌ Passar ferro muito quente diretamente sobre o vinil sem usar papel manteiga ou teflon protetor."
    ],
    troubleshootingTips: [
      "O vinil rasgou e soltou durante o bordado da borda: reduza a densidade do ponto de acabamento para 0,48 mm e aumente a largura da coluna para 3,0 mm.",
      "O vinil está grudando no calcador e repuxando o tecido: coloque uma tira de plástico solúvel por cima ou cole uma fita de teflon na base do calcador da máquina.",
      "O vinil enrugou no meio: use cola spray temporária para fixar o vinil na entretela antes da costura de fixação."
    ],
    dicaArtrelados: "Para fazer chaveiros perfeitos em vinil ou corino: NUNCA use ponto de acabamento muito fininho nem muito denso! Use largura de 3 mm com espaçamento de 0,48 mm. A agulha não picota o vinil e o chaveiro dura anos na bolsa do cliente sem soltar nada!",
    voceSabia: "A técnica de misturar vinil com bordado começou na indústria automobilística de luxo nos anos 1990 para produzir os chaveiros de couro com brasões de carros esportivos da Ferrari e Porsche!",
    practicalExercise: "Faça um chaveiro simples em forma de coração: coloque um retalho de vinil glitter, faça a costura de fixação, recorte as sobras, borde o nome no centro e finalize a borda com ponto cheio. Descole da entretela e veja a perfeição do chaveiro.",
    quickSummary: "Vinil Perfurado para Apliques é a técnica de combinar filmes plásticos e couro sintético com bordados, criando chaveiros e patches impermeáveis com economia de pontos.",
    recommendedSettings: {
      speedPPM: "650 a 750 PPM",
      needleType: "75/11 Ponta Bola Leve (SES)",
      density: "Contorno: 0.45 a 0.50 mm (Largura > 2.5 mm)"
    },
    relatedTerms: [
      "Aplique no Bordado",
      "Ponto de Fixação (Tackdown)",
      "Chaveiros Bordados (In-The-Hoop)",
      "Tesoura Peliço / Ponta Curva",
      "Calcador de Teflon"
    ],
    tags: [
      "v-083",
      "vinil",
      "apliques",
      "chaveiros",
      "couro sintetico",
      "in-the-hoop",
      "artrelados"
    ],
    bibliographicReferences: [
      "SULLIVANS EMBROIDERY ARTS. Mixed-Media Embroidery: Vinyls, Synthetics & In-The-Hoop Crafts. Atlanta, 2022.",
      "EMBROIDERY DIGITIZING ALLIANCE. Appliqué Foundations and Synthetic Material Handling. London, 2021.",
      "ARTRELADOS. Chaveiros, Tags e Artesanato Lucrativo com Vinil e Bordado Computadorizado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-084-verificacao-de-centralizacao-e-tracado-perimetral-na-maquina",
    code: "V-084",
    term: "Verificação de Centralização e Traçado Perimetral na Máquina (Design Trace, Outline Check & Hoop Margin Safety)",
    pronunciation: "ve-ri-fi-ca-são de sen-tra-li-za-são e tra-sa-do pe-ri-me-tral na ma-qui-na",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Operação e Prática de Ateliê",
    origin: "Do latim 'verificare' (tornar verdadeiro) e 'perimetros' (medida ao redor). Procedimento padrão de segurança operacional obrigatório antes de iniciar a costura.",
    summary: "Execução do traçado de contorno (função Trace / Baste) no painel da máquina para confirmar que a agulha não vai bater no aro plástico do bastidor.",
    definition: "A Verificação de Centralização e Traçado Perimetral na Máquina (Hoop Collision Prevention Protocol & Optical Trace Verification) é o procedimento operacional de segurança obrigatório no qual o operador comanda o pantógrafo para percorrer as quatro coordenadas extremas (X mínimo, X máximo, Y mínimo e Y máximo) ou a caixa delimitadora (*bounding box*) da matriz carregada antes de acionar a costura. Essa rotina garante visualmente e mecanicamente que nenhum ponto da matriz ultrapassará os limites físicos do bastidor, prevenindo colisões catastróficas da barra de agulha e do calcador contra as paredes plásticas do aro, que resultam em quebra de agulhas, empenamento de eixos e perda de sincronismo do cabeçote.",
    technicalDetails: "Margem de segurança perimétrica mínima recomendada entre o ponto mais externo da matriz e a borda interna do aro do bastidor: 12 mm a 15 mm. Pode ser acompanhada por ponteiro laser de mira (*Crosshair Laser Pointer*) ou contorno de alinhavo prévio (*Basting Box*).",
    beginnerExplanation: "É o 'teste de passeio' que a máquina faz antes de começar a bordar! Você aperta o botão 'Trace' (ou traçado) no painel e o bastidor se mexe sozinho mostrando onde estão os quatro cantos do desenho. Isso serve para você ter 100% de certeza de que a agulha não vai bater e quebrar com força nas bordas plásticas do bastidor!",
    howItWorks: [
      "1. A bordadeira carrega a matriz do pen drive para a memória da máquina.",
      "2. Encaixa o bastidor com a peça no braço do pantógrafo.",
      "3. Centraliza a agulha na marcação de giz feita na roupa.",
      "4. Aperta o botão 'Trace' (Traçado de Limites) no painel de controle.",
      "5. A máquina move o bastidor percorrendo o retângulo ou contorno exato do desenho com o laser ligado.",
      "6. A bordadeira observa visualmente se a agulha fica a pelo menos 1,5 cm de distância do aro de plástico.",
      "7. Estando tudo seguro e centralizado, aperta o botão verde de início com total tranquilidade."
    ],
    applications: [
      "Procedimento padrão de segurança obrigatório em todos os bordados do ateliê.",
      "Posicionamento milimétrico de logotipos sobre bolsos de camisas e golas.",
      "Bordados em peças com zíperes, botões e rebites metálicos próximos.",
      "Prevenção de quebras de agulhas e perda de sincronismo da máquina."
    ],
    characteristics: [
      "Leva menos de 5 segundos e previne prejuízos mecânicos caros.",
      "Garante que o bordado saia perfeitamente reto e no local desejado.",
      "Aumenta a confiança e a segurança de bordadeiras iniciantes."
    ],
    commonErrors: [
      "❌ Apertar o botão de bordar diretamente sem fazer o traçado de limites prévio.",
      "❌ Usar bastidores no limite extremo da matriz com menos de 3 mm de margem da borda.",
      "❌ Ignorar o traçado em peças com botões ou zíperes na área de alcance do calcador."
    ],
    troubleshootingTips: [
      "A agulha bateu no plástico do bastidor e quebrou: desligue a máquina, troque a agulha, confira o sincronismo do cabeçote e SEMPRE faça o 'Trace' antes de reiniciar.",
      "O traçado mostrou que a matriz vai bater na borda superior: mova o ponto de origem pelo painel para baixo ou troque para um bastidor de tamanho maior.",
      "O bordado saiu inclinado em relação ao bolso: use o traçado contínuo para alinhar a linha inferior da matriz paralelamente à costura do bolso."
    ],
    dicaArtrelados: "Crie o mandamento sagrado no seu ateliê: NUNCA aperte o botão verde de bordar sem apertar o botão de TRACE antes! Esses 5 segundos de conferência salvam as suas agulhas, protegem o seu bastidor e garantem que o bolso da camisa nunca seja bordado torto!",
    voceSabia: "Em máquinas industriais modernas, sensores de proximidade ultrassônicos e miras a laser digitais bloqueiam o botão de início automaticamente se a matriz estiver a menos de 10 mm da borda do bastidor, impedindo colisões humanas por distração!",
    practicalExercise: "Coloque uma camisa no bastidor. Escolha uma matriz e use as setas do painel para posicionar. Execute a função 'Trace' e observe o caminho percorrido pelo ponteiro laser: confirme a folga de segurança em todos os 4 lados.",
    quickSummary: "Verificação de Traçado Perimetral é o teste de segurança que faz o bastidor percorrer os limites da matriz antes de bordar, garantindo centralização e evitando colisões com o aro.",
    recommendedSettings: {
      speedPPM: "Traçado manual ou lento",
      needleType: "N/A",
      density: "Margem mínima de segurança do aro: 12 mm a 15 mm"
    },
    relatedTerms: [
      "Traçado de Contorno (Trace)",
      "Ponteiro Laser (Laser Crosshair)",
      "Caixa Delimitadora (Bounding Box)",
      "Centralização de Matriz",
      "Alinhavo no Bastidor (Basting)"
    ],
    tags: [
      "v-084",
      "trace",
      "tracado",
      "seguranca",
      "centralizacao",
      "bastidor",
      "operacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "BROTHER EMBROIDERY OPERATIONS. Machine Safety, Hoop Clearance & Trace Functions Manual. Nagoya, 2022.",
      "JANOME SEWING MACHINE CO. Hoop Safety Boundaries and Centering Procedures. Tokyo, 2021.",
      "ARTRELADOS. Manual de Operação Segura e Boas Práticas no Ateliê de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-085-vibracao-estrutural-e-nivelamento-de-bancada-da-maquina",
    code: "V-085",
    term: "Vibração Estrutural e Nivelamento de Bancada da Máquina (Machine Vibration Damping & Workbench Leveling Protocol)",
    pronunciation: "vi-bra-são es-tru-tu-ral e ni-ve-la-men-to de ban-ca-da da ma-qui-na",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Manutenção & Ferramentas",
    origin: "Do latim 'vibratio' (oscilação mecânica) e 'libella' (nível de bolha). Princípio da engenharia civil e mecânica para estabilização de máquinas com massas oscilantes.",
    summary: "Protocolo de calibração de pés niveladores e uso de mantas antivibração na bancada, eliminando trepidações que causam perda de pontos, ruídos e fadiga de componentes.",
    definition: "A Vibração Estrutural e Nivelamento de Bancada da Máquina (Structural Vibration Damping & Machine Foundation Leveling Protocol) é o conjunto de procedimentos de instalação mecânica que garante que a máquina de bordar esteja apoiada sobre uma superfície perfeitamente nivelada no plano horizontal e desacoplada das ressonâncias harmônicas do piso. Máquinas de bordar geram forças inerciais alternadas complexas devido ao movimento alternado da barra de agulha (eixo Z) e aos deslocamentos rápidos e bruscos do pantógrafo (eixos X e Y). Bancadas instáveis, pés desnivelados ou mesas moles amplificam essas vibrações, provocando desencontro de contornos, quebra espontânea de agulhas e desgaste acelerado de rolamentos.",
    technicalDetails: "Nivelamento aferido com nível de bolha de precisão ou digital nos sentidos longitudinal e transversal (tolerância máxima de 0,5 mm/m). Instalação obrigatória de sapatas amortecedoras de borracha nitrílica (NBR) com dureza Shore A 60-70 para absorção de frequências na faixa de 10 a 50 Hz.",
    beginnerExplanation: "É deixar a mesa da sua máquina perfeitamente retinha e sem balançar nada! Se a mesa onde a máquina está apoiada for bamba ou tiver um pé mais curto que o outro, quando a máquina começar a correr a mil por hora ela vai ficar trepidando e pulando. Isso faz o bordado sair torto, faz um barulho horrível e pode até quebrar as peças da máquina!",
    howItWorks: [
      "1. A bordadeira posiciona a bancada ou cavalete da máquina no local definitivo de trabalho.",
      "2. Coloca um nível de bolha sobre a mesa da máquina nos eixos X (largura) e Y (profundidade).",
      "3. Ajusta os parafusos dos pés niveladores com chave de boca até a bolha ficar exatamente no centro.",
      "4. Aperta a contra-porca de trava de cada pé para não desregular com o tempo.",
      "5. Instala sapatas ou tapetes emborrachados antivibração sob os pés da bancada.",
      "6. A máquina opera em velocidade máxima (850 a 1.000 PPM) com suavidade, silêncio e estabilidade total.",
      "7. Os contornos pretos encaixam com precisão milimétrica sobre os preenchimentos coloridos."
    ],
    applications: [
      "Instalação e montagem inicial de máquinas de bordar industriais e domésticas.",
      "Eliminação de ruídos excessivos e trepidações em ateliês residenciais e apartamentos.",
      "Resolução definitiva de problemas de contornos que não encaixam em alta velocidade.",
      "Proteção de pisos e preservação da vida útil das correias dentadas e guias lineares."
    ],
    characteristics: [
      "Reduz o nível de ruído em decibéis no ambiente de trabalho.",
      "Garante precisão geométrica absoluta no encaixe de linhas e contornos.",
      "Previne a soltura acidental de parafusos internos por vibração contínua."
    ],
    commonErrors: [
      "❌ Colocar a máquina de bordar sobre mesas plásticas dobráveis ou móveis de madeira fina que balançam.",
      "❌ Deixar um dos quatro pés niveladores suspenso sem tocar o chão com firmeza.",
      "❌ Ignorar a inclinação do piso do cômodo."
    ],
    troubleshootingTips: [
      "O contorno preto do bordado está saindo deslocado para o lado em alta rotação: verifique se a mesa da máquina não está balançando; nivele os pés e aperte as contra-porcas.",
      "A máquina faz um barulho oco ensurdecedor que vibra o chão do quarto: instale uma manta de borracha densa (EVA de alta densidade ou borracha de pneu reciclado) sob a máquina.",
      "A máquina está 'andando' devagar sobre a bancada: limpe as sapatas de borracha dos pés com álcool para recuperar a aderência."
    ],
    dicaArtrelados: "A máquina de bordar precisa de uma bancada firme como uma rocha! Nada de usar mesinhas bambas de computador ou mesas de passar roupa. Uma mesa pesada e perfeitamente nivelada com nível de bolha faz o bordado ficar lisinho e diminui o barulho da máquina pela metade!",
    voceSabia: "Em grandes fábricas têxteis industriais na Europa, as máquinas de bordar de 15 metros de comprimento são parafusadas diretamente em blocos maciços de concreto de 30 toneladas enterrados no chão para anular 100% das vibrações do solo!",
    practicalExercise: "Coloque um copo com água sobre a bancada ao lado da máquina. Ligue a máquina a 850 PPM: observe as ondas na água. Nivele os pés e coloque uma base emborrachada sob a máquina e veja como a água fica praticamente imóvel.",
    quickSummary: "Nivelamento e Amortecimento de Vibração é o ajuste da estabilidade e pés da máquina sobre uma bancada firme, garantindo silêncio, precisão de contornos e longa durabilidade mecânica.",
    recommendedSettings: {
      speedPPM: "Operação contínua estável",
      needleType: "N/A",
      density: "Tolerância de nivelamento: < 0.5 mm por metro"
    },
    relatedTerms: [
      "Pés Niveladores",
      "Nível de Bolha de Precisão",
      "Manta Antivibração",
      "Encaixe de Contornos (Registration)",
      "Ruído Mecânico (Decibéis)"
    ],
    tags: [
      "v-085",
      "vibracao",
      "nivelamento",
      "bancada",
      "manutencao",
      "estabilidade",
      "artrelados"
    ],
    bibliographicReferences: [
      "BARUDAN INDUSTRIAL. Machine Installation, Floor Foundation & Leveling Standards. Ichinomiya, 2022.",
      "TAJIMA EMBROIDERY SYSTEMS. Vibration Analysis and Workshop Ergonomics Guide. Nagoya, 2021.",
      "ARTRELADOS. Infraestrutura, Elétrica e Instalação Perfeita do Ateliê de Bordados. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-086-variacao-de-tensao-superior-por-corrente-e-guia-fios",
    code: "V-086",
    term: "Variação de Tensão Superior por Corrente e Guia-Fios (Thread Path Friction & Multi-Color Upper Tension Variations)",
    pronunciation: "va-ri-a-são de ten-são su-pe-ri-or por cor-ren-te e gui-a fi-os",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Controle de Qualidade & Produtividade",
    origin: "Do latim 'frictio' (atrito, fricção) e 'tendere' (esticar). Princípio da física mecânica sobre perdas de carga por atrito em trajetos longos.",
    summary: "Compreensão e compensação do atrito adicional sofrido pelas linhas que percorrem trajetos mais longos nos guia-fios superiores do porta-cones até o cabeçote.",
    definition: "A Variação de Tensão Superior por Corrente e Guia-Fios (Thread Path Cumulative Friction & Angular Drag Analysis) é o fenômeno físico no qual linhas idênticas instaladas em diferentes posições do porta-cones (ex: agulha 1 na extremidade esquerda vs. agulha 8 no centro vs. agulha 15 na extremidade direita) chegam ao conjunto tensor com níveis desiguais de pré-tensão. A passagem da linha por múltiplos olhais de cerâmica, tubos telescópicos guia-fio e molas intermediárias acumula forças de atrito por arrasto angular, exigindo que o operador não utilize o mesmo aperto numérico de rosca em todos os botões tensores, mas sim calibre cada agulha individualmente com tensiômetro na saída do olho da agulha.",
    technicalDetails: "Cada curva de 90° em um guia-fio metálico adiciona de 3 a 8 gf de atrito dinâmico pela Lei de Euler-Eytelwein (equação do cabrestante: $T_2 = T_1 \\cdot e^{\\mu \\theta}$). Os canais com tubos de plástico longos e curvas fechadas sofrem maior resistência de tração do que os canais centrais retos.",
    beginnerExplanation: "Em uma máquina de várias agulhas, os cones de linha que ficam nas pontas de fora têm que passar por um caminho muito mais comprido e cheio de curvinhas até chegar na agulha do que os cones que ficam bem no meio! Cada voltinha que a linha dá nos buraquinhos de metal aperta ela um pouco mais. Por isso, você não pode só deixar todos os botões de tensão na mesma marquinha: tem que regular cada agulha sentindo a linha na saída!",
    howItWorks: [
      "1. A linha sai do cone no suporte superior e entra no primeiro guia-fio elevado.",
      "2. Passa pelos tubos intermediários, discos tensores primários, pré-tensores e mola tira-fio.",
      "3. O operador puxa a linha diretamente pelo olho da agulha para sentir a resistência real de trabalho.",
      "4. Mede a força com um dinamômetro digital de linha (ex: buscando 120 gf).",
      "5. Nas agulhas das pontas (com trajeto longo), alivia um pouco o botão tensor primário.",
      "6. Nas agulhas centrais (com trajeto reto e curto), ajusta o botão tensor normalmente.",
      "7. Todas as agulhas passam a entregar rigorosamente os mesmos 120 gf na hora de furar o tecido."
    ],
    applications: [
      "Calibração de máquinas industriais e semi-industriais de 6, 10, 12 e 15 agulhas.",
      "Eliminação de quebras repetitivas que acontecem sempre na agulha número 1 ou na última agulha.",
      "Padronização visual de pontos cheios multicoloridos no mesmo logotipo.",
      "Diagnóstico de guias-fio com rebarbas cortantes ou poeira acumulada."
    ],
    characteristics: [
      "Explica cientificamente por que agulhas diferentes reagem de formas diferentes.",
      "Garante tensão homogênea em todas as 15 cores da máquina.",
      "Reduz paradas operacionais e quebras inexplicáveis de fios."
    ],
    commonErrors: [
      "❌ Deixar todos os parafusos e botões tensores exatamente na mesma posição de rosca achando que a tensão ficará igual.",
      "❌ Passar a linha pulando algum dos guia-fios intermediários para tentar 'encurtar' o caminho.",
      "❌ Deixar a linha enrolar na haste metálica do porta-cones antes de entrar no guia-fio superior."
    ],
    troubleshootingTips: [
      "A agulha número 1 arrebenta a linha muito mais que a agulha 6: o trajeto da agulha 1 é longo e tem mais atrito; solte meia volta no tensor primário da agulha 1.",
      "A linha fica pulando fora do disco tensor: verifique se a linha está passando corretamente pelo guia-fio imediatamente anterior aos discos.",
      "Aparece linha branca da bobina na frente apenas na agulha 12: a linha superior da agulha 12 está muito esticada; reduza o aperto do tensor primário.",
      "A linha metálica quebra no trajeto: passe um silicone líquido nos guia-fios de cerâmica para diminuir o coeficiente de atrito dinâmico."
    ],
    dicaArtrelados: "Nunca confie apenas em olhar se os botões tensores estão na mesma altura! Puxe a linha com os dois dedos logo abaixo da agulha para sentir a força real. A agulha da ponta precisa ter o botão um tiquinho mais frouxo para compensar o caminho longo que a linha percorreu lá em cima!",
    voceSabia: "O fenômeno do atrito de cabos ao redor de curvas é a mesma fórmula matemática (Fórmula de Euler) usada por marinheiros em navios para conseguir segurar uma âncora de 5 toneladas dando apenas 3 voltas de corda em um poste de madeira no porto!",
    practicalExercise: "Com a máquina desligada, puxe com a mão a linha da agulha central (agulha 8) e depois a linha da agulha da ponta (agulha 1). Sinta a diferença de peso e resistência provocada pelo trajeto mais longo dos guia-fios.",
    quickSummary: "Variação de Tensão por Guia-Fios é a compensação do atrito natural ao longo do caminho da linha, garantindo que todas as agulhas bordem com a mesma força exata.",
    recommendedSettings: {
      speedPPM: "800 a 950 PPM",
      needleType: "75/11",
      density: "Tensão aferida na agulha: 115 a 125 gf em todas as cores"
    },
    relatedTerms: [
      "Trajeto da Linha (Thread Path)",
      "Discos Tensores Primários",
      "Guia-Fios de Cerâmica",
      "Dinamômetro Digital",
      "Atrito Dinâmico de Cabrestante"
    ],
    tags: [
      "v-086",
      "tensao superior",
      "guia-fios",
      "atrito",
      "calibracao",
      "multicor",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY SYSTEMS. Upper Thread Path Friction Dynamics & Tension Balancing. Nagoya, 2022.",
      "TOWA TENSION SYSTEMS. Thread Path Drag Measurement & Calibration Handbook. Osaka, 2021.",
      "ARTRELADOS. Dinâmica de Linhas, Tensão e Física dos Guia-Fios no Bordado Digital. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-087-visualizacao-3d-e-renderizacao-realista-de-pontos",
    code: "V-087",
    term: "Visualização 3D e Renderização Realista de Pontos no Software (TrueView 3D Stitch Simulation & Embroidery Rendering)",
    pronunciation: "vi-zu-a-li-za-são três-dê e ren-de-ri-za-são re-a-lis-ta de pon-tos",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do latim 'visualis' (da visão) e do inglês 'rendering' (geração gráfica fotorrealista). Recurso gráfico de computação visual essencial para validação de matrizes.",
    summary: "Modo de exibição tridimensional realista no software que simula o brilho, a espessura da linha e o relevo real do bordado antes de colocar a peça na máquina.",
    definition: "A Visualização 3D e Renderização Realista de Pontos no Software (TrueView Photorealistic Stitch Rendering & Digital Prototype Engine) é o motor gráfico computacional presente em softwares profissionais de digitalização de matrizes (como Wilcom TrueView, Pulse 3D Rendering e Hatch 3D) que converte as coordenadas vetoriais puras em uma representação gráfica tridimensional de alta fidelidade visual. O algoritmo projeta a espessura cilíndrica real do filamento de poliéster No 40, calcula o sombreamento de luz ambiente (*ambient occlusion*), renderiza o brilho especular dos pontos cheios e tatamis e permite visualizar falhas de cobertura, vazamentos de contornos, pulos longos e densidades excessivas na tela do computador sem gastar um único centímetro de tecido ou linha.",
    technicalDetails: "Simulação óptica baseada no diâmetro nominal da linha (0,25 mm para linha No 40 e 0,18 mm para linha No 60). Permite exportar fichas técnicas e aprovações virtuais em formato PDF ou PNG com textura real de tecido de fundo (piquet, jeans, algodão, brim).",
    beginnerExplanation: "É o botão mágico no programa de computador que transforma aquelas linhazinhas simples da tela em uma foto perfeita do bordado pronto! Você consegue ver o brilho da linha, o relevo dos pontos gordinhos e até como o desenho vai ficar em cima de uma camisa pólo ou jaqueta jeans, tudo antes de gastar qualquer linha na máquina!",
    howItWorks: [
      "1. O programador cria os objetos da matriz usando os modos de desenho vetorial.",
      "2. Aperta o botão 'TrueView / Visualização 3D' no software (ou a tecla de atalho '1' ou 'T').",
      "3. A tela é renderizada instantaneamente com a textura e o brilho tridimensional das linhas.",
      "4. O operador dá zoom para conferir se há vãos entre o contorno e o preenchimento ou se há pontos encavalados.",
      "5. Seleciona o tecido de fundo virtual (ex: malha piquet azul marinho) para conferir o contraste de cores.",
      "6. Gera uma imagem de aprovação virtual para enviar pelo WhatsApp do cliente.",
      "7. Com o 'OK' do cliente aprovado na hora, envia o arquivo para a máquina com segurança total."
    ],
    applications: [
      "Aprovação rápida e profissional de layouts com clientes pelo celular sem gastar tecido.",
      "Auditoria prévia de falhas de digitalização (pontos curtos, vãos e nós na matriz).",
      "Criação de catálogos virtuais de bordados para lojas online e redes sociais.",
      "Elaboração de fichas técnicas de produção com consumo estimado de linha e tempo de máquina."
    ],
    characteristics: [
      "Economiza horas de testes e evita o desperdício de peças prontas caras.",
      "Profissionaliza o atendimento ao cliente com mockups de altíssimo nível visual.",
      "Permite identificar problemas de densidade antes de quebrar agulhas na máquina."
    ],
    commonErrors: [
      "❌ Bordar apenas olhando a visualização de pontos simples sem ativar a renderização 3D.",
      "❌ Confiar 100% nas cores da tela sem checar a tabela oficial de números da cartela de linhas reais.",
      "❌ Enviar aprovação para o cliente sem simular a cor real do tecido de fundo."
    ],
    troubleshootingTips: [
      "O cliente aprovou a arte mas achou que a cor ficou diferente na camisa: lembre o cliente de que telas de celular alteram o brilho; mostre o cone da linha real ou use cartela de cores Pantone/Isacord.",
      "Aparece um vão branco entre a letra e o contorno na visualização 3D: aumente a compensação de repuxo e estenda a sobreposição em 0,8 mm no software.",
      "O programa está travando ao ligar o TrueView 3D: atualize os drivers da placa de vídeo do computador e ative a aceleração gráfica por hardware nas opções."
    ],
    dicaArtrelados: "Nunca mande foto feia de rascunho de matriz para o seu cliente aprovar! Exporte a imagem em TrueView 3D com o tecido de fundo da cor da camisa dele e com a marca do seu ateliê. O cliente fica encantado, aprova na hora e vê o valor profissional do seu trabalho!",
    voceSabia: "O recurso TrueView da Wilcom foi desenvolvido na Austrália no final dos anos 1980 e revolucionou a indústria mundial de bordados, permitindo pela primeira vez na história que estilistas de moda vissem a textura de bordados sem precisar de máquinas ligadas!",
    practicalExercise: "Abra uma matriz no seu programa de computador. Alterne entre o modo de visualização de pontos (Wireframe) e o modo TrueView 3D. Mude o tecido de fundo para sarja e depois para piquet: veja como a renderização simula a textura real com precisão.",
    quickSummary: "Visualização 3D é o recurso do software que mostra o bordado com textura, relevo e brilho realistas na tela, facilitando a aprovação do cliente e a correção de falhas.",
    recommendedSettings: {
      speedPPM: "N/A (Software)",
      needleType: "N/A",
      density: "Renderização baseada no filamento No 40 (0.25 mm)"
    },
    relatedTerms: [
      "TrueView (Wilcom)",
      "Mockup Virtual de Bordado",
      "Ficha Técnica de Produção",
      "Compensação de Repuxo",
      "Cartela de Cores de Linha"
    ],
    tags: [
      "v-087",
      "visualizacao 3d",
      "trueview",
      "renderizacao",
      "mockup",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. TrueView 3D Rendering & Customer Approval Workflows. Sydney, 2022.",
      "PULSE SIGNATURE. Photorealistic Embroidery Simulation & Catalog Generation. Mississauga, 2021.",
      "ARTRELADOS. Apresentação de Projetos, Fechamento de Vendas e Mockups Profissionais de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-088-voltagem-oscilacao-e-protecao-por-nobreak-senoidal",
    code: "V-088",
    term: "Voltagem, Oscilação Elétrica e Proteção por Nobreak Senoidal (Voltage Fluctuations, Surge Protection & True Sine Wave UPS)",
    pronunciation: "vol-ta-gem os-si-la-são e-le-tri-ca e pro-te-são por no-breik se-noi-dal",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Infraestrutura & Elétrica do Ateliê",
    origin: "Do italiano 'Alessandro Volta' (físico inventor da pilha) e do inglês 'UPS / Uninterruptible Power Supply' (fonte ininterrupta de energia). Proteção patrimonial eletroeletrônica.",
    summary: "Instalação de nobreaks senoidais puros com aterramento elétrico para blindar a placa-mãe, servomotores e a memória da máquina contra queima por raios e apagões.",
    definition: "A Voltagem, Oscilação Elétrica e Proteção por Nobreak Senoidal (Clean AC Power Conditioning, Surge Suppression & Online True Sine Wave UPS) é a disciplina de engenharia elétrica dedicada a garantir o fornecimento ininterrupto de energia estabilizada com onda senoidal pura para as máquinas de bordar computadorizadas. As fontes chaveadas e processadores DSP das máquinas modernas são extremamente sensíveis a picos de alta tensão (surtos de raios), variações de frequência e afundamentos de tensão (*brownouts*). O uso de nobreaks baratos de onda quadrada simulada danifica os servomotores de passo; a proteção ideal exige Nobreak Senoidal Puro com tempo de transferência zero (Online Dupla Conversão) e aterramento elétrico com resistência inferior a 5 ohms.",
    technicalDetails: "Forma de onda: Senoidal Pura com Distorção Harmônica Total (THD) < 3%. Potência recomendada para máquina de bordar de 1 a 2 cabeças: Nobreak de 1.500 VA a 2.200 VA com fator de potência 0.8 ou 0.9 e bateria selada VRLA para autonomia mínima de 15 a 30 minutos.",
    beginnerExplanation: "É o 'escudo protetor' elétrico da sua máquina! As placas de computador da máquina de bordar não aguentam aqueles piques de energia e raios que fazem as lâmpadas da casa piscarem. Um nobreak senoidal puro garante energia limpinha o tempo todo e, se a luz da rua acabar de repente, a máquina não desliga, não perde o lugar do ponto e não queima a placa!",
    howItWorks: [
      "1. A energia da rede da concessionária entra no Nobreak Senoidal Puro.",
      "2. O filtro de linha e os varistores (DPS) filtram ruídos, estática e surtos de raios.",
      "3. O inversor do nobreak recria uma onda de energia elétrica perfeita, limpa e estável a 110V ou 220V.",
      "4. A máquina de bordar recebe essa energia pura e trabalha com os motores frios e sem zumbidos.",
      "5. Quando ocorre uma queda de luz na rua, o nobreak assume as baterias instantaneamente em 0 segundos.",
      "6. A máquina continua bordando normalmente ou permite que o operador pause o trabalho e salve a posição exata.",
      "7. Nenhuma peça é perdida e a placa-mãe fica 100% protegida contra queimas que custam milhares de reais."
    ],
    applications: [
      "Proteção definitiva de máquinas industriais e domésticas em ateliês e fábricas.",
      "Salvação de bordados grandes (ex: costas de jaqueta com 80 mil pontos) durante tempestades e apagões.",
      "Instalações elétricas em cidades com rede instável ou ateliês próximos a marcenarias e serralherias.",
      "Preservação da memória de restauração de coordenadas de ponto da máquina."
    ],
    characteristics: [
      "Gera onda senoidal pura idêntica ou superior à rede elétrica ideal.",
      "Protege contra os 8 principais distúrbios elétricos da rede pública.",
      "Permite continuar trabalhando mesmo durante apagões e chuvas fortes."
    ],
    commonErrors: [
      "❌ Ligar a máquina em estabilizadores de computador velhos de estalos (relés que geram picos de tensão destrutivos).",
      "❌ Usar nobreak barato de 'onda quadrada / senoidal por aproximação' que ferve e queima os motores da máquina.",
      "❌ Operar a máquina sem tomada com pino de aterramento elétrico real conectado à terra."
    ],
    troubleshootingTips: [
      "A máquina desliga sozinha e perde o ponto sempre que o ar-condicionado ou compressor liga: a rede sofre queda de tensão; instale um Nobreak Senoidal Puro de 2.000 VA.",
      "Aparece erro de comunicação na placa após uma tempestade com raios: a rede elétrica sofreu surto de tensão; chame um eletricista para instalar protetores DPS no quadro de luz.",
      "O motor da máquina está fazendo um zumbido estranho e esquentando: a máquina está ligada em um nobreak de onda quadrada; troque imediatamente por um Nobreak Senoidal Puro."
    ],
    dicaArtrelados: "NUNCA ligue a sua máquina de bordar em estabilizadores baratos de computador que ficam fazendo 'clique-clique'! Eles são veneno para as placas eletrônicas. Use SEMPRE um Nobreak Senoidal Puro com aterramento. É o melhor seguro de vida que você pode dar para a sua máquina!",
    voceSabia: "Uma descarga atmosférica (raio) que cai a até 2 km de distância do seu ateliê pode induzir picos de mais de 5.000 volts na fiação da tomada, queimando instantaneamente qualquer placa eletrônica desprotegida em menos de um milionésimo de segundo!",
    practicalExercise: "Verifique a tomada da sua máquina com um testador de tomadas ou multímetro: confirme se a voltagem está estável (entre 115V-127V ou 210V-230V) e se o pino central de terra está realmente conectado ao aterramento da casa.",
    quickSummary: "Nobreak Senoidal Puro é a fonte de energia ininterrupta e limpa que protege a placa da máquina contra picos de luz e permite continuar bordando durante quedas de energia.",
    recommendedSettings: {
      speedPPM: "Operação contínua protegida",
      needleType: "N/A",
      density: "Nobreak: Senoidal Puro Online (1.500 a 2.200 VA) com aterramento < 5 ohms"
    },
    relatedTerms: [
      "Nobreak Senoidal Puro",
      "Aterramento Elétrico",
      "Surto de Tensão e Raios (DPS)",
      "Placa-Mãe e Fontes Chaveadas",
      "Recuperação de Ponto após Queda de Luz"
    ],
    tags: [
      "v-088",
      "nobreak senoidal",
      "voltagem",
      "eletrica",
      "protecao",
      "aterramento",
      "artrelados"
    ],
    bibliographicReferences: [
      "IEEE STANDARDS ASSOCIATION. Power Quality and Electronic Equipment Protection Guidelines. New York, 2022.",
      "TAJIMA EMBROIDERY SYSTEMS. Electrical Installation, Grounding & Power Quality Manual. Nagoya, 2021.",
      "ARTRELADOS. Guia de Infraestrutura Elétrica Segura para Máquinas de Bordar. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "v-089-variacao-de-angulo-em-folhagens-e-petalas",
    code: "V-089",
    term: "Variação de Ângulo em Folhagens e Pétalas (Branching Stitch Angles & Radial Flow in Floral Embroidery)",
    pronunciation: "va-ri-a-são de an-gu-lo em fo-lha-gens e pe-ta-las",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Programação e Digitalização de Matrizes",
    origin: "Do latim 'angulus' (canto, inclinação) e 'foliagium' (conjunto de folhas). Técnica clássica de escultura óptica por orientação de linhas.",
    summary: "Técnica de programação que direciona as linhas do ponto cheio acompanhando a anatomia natural de folhas e pétalas, criando relevo vivo e reflexo de luz dinâmico.",
    definition: "A Variação de Ângulo em Folhagens e Pétalas (Multi-Angle Radial Flow, Curving Stitch Lines & Leaf Vein Architecture) é a metodologia de digitalização botânica e artística em que múltiplos vetores de ângulo de ponto (*stitch angle lines*) são inseridos ao longo do contorno de pétalas e folhas. Em vez de preencher a folha com um ângulo rígido único (que resulta em uma aparência artificial e plana), os pontos curvam-se e fluem a partir da nervura central em direção às bordas externas, acompanhando a morfologia orgânica da planta e fazendo com que os filamentos de poliéster reflitam a luz em diferentes direções conforme o movimento da peça.",
    technicalDetails: "Inserção de linhas de ângulo com curvatura progressiva de 30° na base até 75° nas pontas da folha. Uso de ponto cheio dividido (*Split Satin*) ou ponto esteira curvo (*Curved Fill*) em pétalas com largura superior a 8 mm para evitar pontos excessivamente frouxos.",
    beginnerExplanation: "É ensinar a máquina a bordar a folha como a natureza fez! Em vez de costurar a folha inteira reta na mesma direção como se fosse um carimbo duro, você coloca as linhas saindo do cabinho do meio e se curvando para as pontas, como as veinhas de uma folha de verdade. Quando você mexe a roupa na luz, a folha brilha parecendo viva!",
    howItWorks: [
      "1. O digitalizador desenha o contorno da folha ou pétala no software usando a ferramenta de 'Coluna Complexa' ou 'Ponto Cheio com Múltiplos Ângulos'.",
      "2. Traça a linha da nervura central da folha como eixo de referência.",
      "3. Adiciona linhas de guia de ângulo acompanhando a curvatura natural das nervuras botânicas.",
      "4. Divide a folha em duas metades com ângulos simétricos opostos (efeito espinha de peixe).",
      "5. A máquina borda primeiro um lado e depois o outro com underlay central de sustentação.",
      "6. A folha ganha um vinco central perfeito e um brilho tridimensional fascinante sob a luz.",
      "7. O arranjo floral ganha elegância de alta costura e realismo inconfundível."
    ],
    applications: [
      "Bordados florais de luxo em toalhas de mesa, guardanapos e enxovais de noiva.",
      "Rosas, orquídeas e folhagens tropicais de alta definição.",
      "Brasões com ramos de louro, oliveiras e folhas de carvalho institucionais.",
      "Customização de vestidos de festa, moda praia e kimonos de seda."
    ],
    characteristics: [
      "Cria volume e profundidade visual sem necessidade de relevo em EVA.",
      "Multiplica o brilho óptico das linhas de poliéster e seda.",
      "Eleva a percepção de valor artesanal do bordado a nível de alta joalheria têxtil."
    ],
    commonErrors: [
      "❌ Bordejar folhas inteiras com um único ângulo reto a 45° (aspecto achatado e sem vida).",
      "❌ Colocar linhas de ângulo muito cruzadas e conflitantes, gerando nós e emaranhados de pontos no centro.",
      "❌ Deixar pontos cheios com mais de 10 mm de comprimento na ponta da folha sem ponto dividido."
    ],
    troubleshootingTips: [
      "A folha ficou parecendo uma mancha chapada sem brilho: divida a folha em duas metades na nervura central e aplique ângulos divergentes de 45° e 135°.",
      "Os pontos da ponta da folha ficaram soltos e frouxos: ative a função 'Auto Split / Ponto Dividido' para limitar os pontos a no máximo 7 mm.",
      "A folha repuxou no meio: adicione uma linha de subponto de contorno na nervura central antes do preenchimento."
    ],
    dicaArtrelados: "O segredo da folha perfeita: NUNCA faça a folha em um bloco só! Divida a folha ao meio pela nervura central: borde a metade esquerda com os pontos inclinados para cima e a metade direita inclinada para baixo. O vinco do meio aparece sozinho como mágica e o brilho fica surreal!",
    voceSabia: "Na antiga arte chinesa do bordado Xiang de mais de 2.000 anos, as bordadeiras mestras usavam mais de 30 direções de agulha diferentes em uma única pétala de lótus para imitar as gotas de orvalho da manhã refletindo a luz do sol!",
    practicalExercise: "Digitalize duas folhas de 4 cm: uma com ângulo reto único e outra dividida ao meio com ângulos em espinha de peixe (45° e 135°). Borde ambas no mesmo tecido e incline a amostra sob a luz de uma luminária para ver a diferença gritante de realismo e brilho.",
    quickSummary: "Variação de Ângulo em Folhagens é a técnica de orientar os pontos acompanhando a anatomia das plantas, gerando vincos naturais, volume tridimensional e brilho dinâmico.",
    recommendedSettings: {
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Fina (Sharp)",
      density: "Densidade: 0.38 mm a 0.40 mm com Auto-Split em 7 mm"
    },
    relatedTerms: [
      "Ângulo de Ponto (Stitch Angle)",
      "Bordado Floral Botânico",
      "Efeito Espinha de Peixe (Feather Stitch)",
      "Ponto Cheio Dividido (Auto Split)",
      "Reflexo Especular de Linha"
    ],
    tags: [
      "v-089",
      "folhagens",
      "petalas",
      "angulo de ponto",
      "bordado floral",
      "realismo",
      "digitalizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Botanical Digitizing & Multi-Angle Floral Stitching. Sydney, 2022.",
      "BERNINA ARTISTIC SUITE. Floral Vectorization and Curved Satin Mastery. Steckborn, 2021.",
      "ARTRELADOS. Guia de Alta Costura: Flores, Ramos e Botânica no Bordado Digital. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

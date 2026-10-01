import { Verbete } from "../types";

export const VERBETES_LETTER_D_LOTE2_ES: Record<string, Partial<Verbete>> = {
  "d-026-digitalizacao-manual-tecnica": {
    "term": "Digitalización Manual (Técnica y Decisiones de Picaje)",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Locución nominal formada Por Sustantivo femenino y adjetivo.",
    "origin": "Del latín digitalis manualis (programación manual) y techne (arte, ofício prático) y decisio (determinación clara tras ponderación, de decidere).",
    "summary": "Metodologia consciente de construción de matrices / diseños donde cada decisao técnica es controlada Por el digitalizador.",
    "definition": "En la digitalización (ponchado) manual, o profissional constrói los objetos de la matriz / diseño conscientemente, definindo parâmetros, caminhos, puntadas de entrada/salida, ângulos y underlays de acordo con a física del tejido / tela y el acabado pretendido. en vez de delegar decisoes al computador, o digitalizador assume el controle de toda a engenharia de la matriz / diseño.",
    "technicalDetails": "Permite calibrar tolerancias de Pull Compensation (+0.30mm a +0.60mm), aplicar underlays adequados (hilo central, ziguezague o tatami duplo) y construir caminhos contínuos que eliminam paradas de corte.",
    "beginnerExplanation": "É a tomada de decisoes conscientes del programador experiente: escolher si una pétala debe ser bordada Antes o después del caule, qual ângulo de puntada vai valorizar a luz y qual costura de base vai segurar el tejido / tela sin repuxar.",
    "howItWorks": [
      "1. El digitalizador estuda el desenho y define a ordem cronológica de costura.",
      "2. Traca los nós de contorno y aplica a hilo de direción del puntada.",
      "3. Configura a densidade y el underlay según el tejido / tela de destino.",
      "4. Conecta los objetos con pequenos puntadas de viagem ocultos."
    ],
    "construction": [
      "Definición de entrada y salida Por objeto",
      "Seleción criteriosa de tipo de puntada Por espessura",
      "Estruturación de underlay Por camadas",
      "Planejamento de sobreposición de seguridad (overlap)"
    ],
    "mainTypes": [
      "digitalización (ponchado) Manual Por Colunas (Colunas A, B, C en el Wilcom)",
      "digitalización (ponchado) Manual Por Preenchimento Complexo",
      "digitalización (ponchado) puntada a puntada Cirúrgica"
    ],
    "advantages": [
      "✔ Máxima precisao y encaixe perfeito Entre contornos y fundos",
      "✔ Zero quebras de hilo y bordado extremamente suave y flexível",
      "✔ Alta velocidade de produción en la máquina con revés limpíssimo"
    ],
    "limitations": [
      "Exige curva de aprendizado gradual y prática con el software de programación."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Clicar puntadas en excesso tentando desenhar contornos perfeitos, sobrecarregando a curva.",
      "❌ Esquecer de planejar donde el objeto anterior terminou Antes de criar el próximo.",
      "❌ no aplicar folga de transpasse (overlap) Entre el fundo y el contorno."
    ],
    "troubleshootingTips": [
      "al criar colunas Satin en curvas, mantenha as guias de ângulo siempre perpendiculares a las bordas de la coluna Para evitar distorciones."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Digitalizar manualmente no significa hacer tudo difícil: significa saber exatamente Por qué voce está fazendo cada escolha! El objetivo no es clicar más, é decidir melhor!",
    "voceSabia": "Digitalizadores experientes gastam 40% del tempo solo planejando a sequencia mental Antes de dar el primeiro clique en el software!",
    "practicalExercise": "Pegue un desenho de un pássaro: planeje en el papel a ordem exata de las camadas (1º o bico de fundo, 2º o corpo, 3º as asas sobrepostas, 4º os olhos y contornos finais). después digitalize en el software seguindo rigorosamente essa ordem: veja Cómo el pássaro ganha vida y volume perfeito en el tejido / tela!",
    "quickSummary": "digitalización (ponchado) manual técnica y decisória es o processo deliberado de engenharia de puntadas donde cada escolha atende a critérios estéticos y físicos precisos.",
    "relatedTerms": [
      "digitalización (ponchado) Automática",
      "puntada de Entrada",
      "puntada de salida",
      "puntada Satin",
      "Underlay"
    ]
  },
  "d-027-digitalizacao-por-objetos": {
    "term": "Digitalización Por Objetos Vectoriales (Object-Based Digitizing)",
    "level": "Intermedio 🟡",
    "category": "Programación de Matrices",
    "grammarClass": "Locución nominal formada Por Sustantivo femenino y locución prepositiva.",
    "origin": "Del latín digitalis (digital) y objectum (aquilo que está diante de los olhos, elemento delimitado, de objicere). Paradigma central de la computación gráfica moderna orientada a objetos vetoriais.",
    "summary": "Método de construción que divide el desenho en elementos individuais y independentes con configuraciones próprias.",
    "definition": "A digitalización (ponchado) Por objetos es a metodologia moderna de criación de matrices / diseños en la qual el desenho es decomposto en elementos vetoriais individuais y autonomos (Cómo pétala, folha, caule, letra, fundo). en vez de enxergar a imagem Cómo un bloco único, o digitalizador cria cada parte Cómo un 'objeto' inteligente con suas próprias propriedades de puntada, direción, densidade y underlay.",
    "technicalDetails": "Adotada Por los principais softwares modernos baseados en objetos (Wilcom EMB, Hatch, Brother PE-Design, Bernina). Permite redimensionar, alterar tipo de puntada y mudar propriedades a cualquier momento sin perder a integridade geométrica.",
    "beginnerExplanation": "digitalización (ponchado) Por objetos significa que voce constrói el desenho dividindo-o en 'piezas de Lego' inteligentes (cada folha es un objeto, cada letra es outro objeto). así, si voce quiser mudar el tamanho o el tipo de puntada después, o software recalcula tudo automaticamente sin estragar a matriz / diseño!",
    "howItWorks": [
      "1. El desenho es dividido mentalmente en suas partes constituintes.",
      "2. Cada parte es tracada Cómo un objeto independente en el software.",
      "3. Cada objeto recebe parâmetros específicos adequados a la sua función.",
      "4. Los objetos son ordenados en la lista de sequencia Para criar el fluxo de costura."
    ],
    "construction": [
      "Objeto vetorial fechado (área de preenchimento)",
      "Objeto vetorial aberto (hilo de contorno / puntada recta corrida)",
      "Objeto de coluna (largura variável en satin)",
      "Lista sequencial de objetos (Object List)"
    ],
    "mainTypes": [
      "Objetos de Preenchimento (Tatami, Padroes)",
      "Objetos de Coluna (puntada satín con ângulo dinâmico)",
      "Objetos de hilo (puntada recta corrida simples, triplo o decorativo)",
      "Objetos de Aplique Automatizado"
    ],
    "advantages": [
      "✔ Flexibilidade total Para editar cualquier parte del desenho a cualquier momento",
      "✔ Redimensionamento perfeito con recálculo automático de densidade",
      "✔ Facilidade Para reordenar a sequencia de costura arrastando objetos en la lista"
    ],
    "limitations": [
      "Exige que el archivo seja salvo en el formato proprietário original del software (ex: .EMB) Para manter as propriedades de objeto editáveis."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Criar una única área enorme tentando reproduzir vários elementos diferentes juntos.",
      "❌ Salvar a matriz / diseño solo en formato de máquina (.DST/.PES) y perder los dados vetoriais de los objetos.",
      "❌ Esquecer de ajustar a sobreposición Entre objetos que si encostam."
    ],
    "troubleshootingTips": [
      "siempre guarde una cópia mestra en el formato de objeto (.EMB, .JAN, .ART) Antes de gerar el archivo final de máquina."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "cuando olhar Para una imagem, tente 'quebrá-la' mentalmente en pequenas piezas! Pergunte: 'Quais objetos individuais eu consigo identificar aqui?' Essa habilidade es a base de todo el raciocínio de la digitalización (ponchado)!",
    "voceSabia": "cuando voce exporta una matriz / diseño Para formato de máquina (.DST o .PES), todos los objetos vetoriais sao 'achatados' en coordenadas brutas de puntadas, dificultando ediciones complexas posteriores!",
    "practicalExercise": "En el seu software, selecione una folha desenhada Cómo objeto vetorial de puntada satín (Satin): mude el tamanho dela aumentando en 50%. Observe Cómo el software aumentou a quantidade de puntadas automaticamente mantendo a misma densidade perfeita, gracas a la digitalización (ponchado) Por objetos!",
    "quickSummary": "digitalización (ponchado) Por objetos es a modelagem de matrices / diseños a través de elementos vetoriais paramétricos que preservam propriedades editáveis de puntadas y formas.",
    "relatedTerms": [
      "digitalización (ponchado) Manual",
      "Sequencia de puntadas",
      "Sobreposición",
      "Matriz / Archivo de Bordado"
    ]
  },
  "d-028-desenho-de-matriz": {
    "term": "Diseño de Matriz y Arquitectura del Bordado (Embroidery Punch Pattern)",
    "level": "fundamental 🟢",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo masculino composto.",
    "origin": "Del latín de- + signare (marcar, tracar contornos gráficos) y del latín matrix, -icis (molde gerador). En la engenharia mecatronica textil, refere-si a la composición estruturada y vetorial del archivo digital de bordado.",
    "summary": "Processo y resultado del tracado digital vetorial y de la programación de puntadas que compoem una matriz / diseño / diseño de bordado computarizado.",
    "definition": "El desenho de matriz / diseño es a concepción gráfica, estruturación geométrica y conversao de una imagem o conceito visual en objetos vetoriais de bordado. Compreende a definición de tipos de puntadas (tatami, satin, puntada recta corrida), ângulos de inclinación, densidades, camadas de base (underlay) y trajetórias de costura que orientam el cabezal y el pantógrafo de la máquina durante el ciclo de produción.",
    "technicalDetails": "Estruturado en entidades vetoriais paramétricas fechadas y abertas (polígonos Bézier) con atributos numéricos de densidade (0.35mm a 0.50mm), comprimentos de puntada (1.5mm a 7.0mm), compensación de tirantez (+0.30mm a +0.50mm) y comandos de máquina embutidos (Trim, Stop, Color Change).",
    "beginnerExplanation": "É a criación del archivo del bordado en el computador: é cuando voce transforma una foto, desenho o logo en pontinhos que a máquina de bordar consegue entender y costurar perfeitamente en el tejido / tela.",
    "howItWorks": [
      "1. A imagem de referencia (PNG, JPG o vetor SVG) é importada Para el área de trabalho del software de bordado.",
      "2. El designer desenha los objetos Por camadas, del fundo Para los detalhes superficiais, usando ferramentas de contorno y preenchimento.",
      "3. Sao parametrizados los tipos de puntada, densidades, underlays y ângulos de reflexao de luz.",
      "4. El software calcula el caminho de costura (Stitch Path) y gera as coordenadas binárias prontas Para envio a la máquina."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Desenhar a matriz / diseño en el mismo sentido de estiramento del tejido / tela sin aplicar compensación de tirantez, deformando el formato",
      "Sobrepor camadas densas sobrepostas en el mismo lugar sin remover puntadas ocultos, criando placas duras",
      "no planejar a ordem de costura de las cores, gerando dezenas de cambios de hilo desnecessárias"
    ],
    "troubleshootingTips": [
      "siempre utilice el simulador en tempo real (Stitch Player) del software Para inspecionar el desenho Antes de levar Para la máquina",
      "Mantenha a regra de desenhar del centro Para fora y de baixo Para cima Para evitar el empurrao del tejido / tela",
      "Agrupe partes de la misma cor Para reduzir as paradas de cambio de carrete"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "al desenhar una matriz / diseño, lembre-si de que a aguja no pinta Cómo un pincel: ela puxa y estica el tejido / tela! siempre adicione una folguinha de sobreposición (overlap) de 1.0mm a 1.5mm Entre los objetos vizinhos Para los contornos no si separarem en la hora de bordar.",
    "voceSabia": "En la era pioneira del bordado mecânico en los anos 1960, o 'desenho de matriz / diseño' era hecho a la mao en mesas digitalizadoras del tamanho de mesas de bilhar, onde el operador perfurava cartoes Jacquard con una aguja manual a cada salto de puntada.",
    "practicalExercise": "Importe una imagem simples de una estrela en el seu software: desenhe el preenchimento en tatami con ângulo a 45°, adicione un underlay leve y coloque una costura de contorno en satin de 2.0mm. Borde en el tejido / tela de teste y veja Cómo el seu desenho de matriz / diseño ganha vida y textura!",
    "quickSummary": "Processo de criación y vetorización gráfica del archivo digital de bordado que traduz imagens en trajetórias de puntadas executáveis.",
    "relatedTerms": [
      "Bordado Digitalizado",
      "Correción de puntadas",
      "Compensación de Empurrar y Puxar",
      "Caminho de Costura"
    ]
  },
  "d-029-deslocamento-de-origem": {
    "term": "Desplazamiento del Punto de Origen (Origin Offset & Center Point)",
    "level": "Intermedio 🟡",
    "category": "Operación de la Máquina",
    "grammarClass": "Sustantivo masculino composto.",
    "origin": "Del latín dis- + locare (mudar de lugar, afastar del sítio original) y origo, -inis (puntada de partida, nascimento). Princípio fundamental de las coordenadas cartesianas relativas en sistemas mecatronicos CNC.",
    "summary": "Ajuste milimétrico de las coordenadas espaciais del puntada zero inicial del bastidor Para posicionar el bordado en locais específicos de la pieza.",
    "definition": "El desplazamiento de origem (o ajuste de Offset / Zero Point Shift) é o procedimento operacional realizado en el painel de controle de la máquina de bordar o en el software Para transladar el puntada inicial de referencia (X:0, Y:0) del centro estándar del bastidor Para una posición customizada en el tejido / tela, permitindo alinhar el bordado con marcaciones físicas, bolsos, listras, costuras prévias o emendas de desenhos grandes.",
    "technicalDetails": "Executa a translación vetorial en las coordenadas cartesianas relativas (delta X y delta Y con resolución de 0.1mm). Bloqueia a execución en caso de que el desplazamiento force a trajetória Para fora de los limites seguros de la moldura del bastidor (limite de fim de curso / software limit switches).",
    "beginnerExplanation": "É cuando voce usa as setinhas del painel de la máquina Para andar con el bastidor y dizer: 'máquina, no comece en el meiao del bastidor, comece exatamente aqui donde eu fiz este risco en el tejido / tela!'. Isso ajuda a bordar en cima de bolsinhos o en cantos de toallas sin errar a mira.",
    "howItWorks": [
      "1. A pieza es colocada en el bastidor con una marcación de cruz hecha con giz o caneta fantasma en la posición desejada del bordado.",
      "2. En el painel de la máquina, o operador aciona as setas direcionais de movimentación manual del carro en los eixos X y Y.",
      "3. A ponta de la aguja (o el puntada de laser de posicionamento) é alinhada con el centro exato de la cruz riscada en el tejido / tela.",
      "4. El operador pressiona a tecla 'Definir Origem' (Set Origin/Origin Shift), redefinindo a coordenada zero Para aquela posición.",
      "5. A función de tracado de área (Trace) é executada Para confirmar que todo el perímetro del desenho cabe dentro del bastidor sin bater a aguja en el aro."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Deslocar a origem muy perto de la borda plástica del bastidor sin hacer el tracado de teste, provocando a colisao de la aguja con el aro plástico",
      "Esquecer de travar a nova origem en el painel, fazendo a máquina voltar al centro absoluto en el momento del primeiro puntada",
      "hacer el desplazamiento con a aguja abaixada dentro del tejido / tela, entortando a cenefa de aguja y rasgando a pieza"
    ],
    "troubleshootingTips": [
      "siempre levante a aguja Para la posición más alta (Top Dead Center) Antes de movimentar los eixos X y Y en el painel",
      "Após cualquier desplazamiento de origem, acione obrigatoriamente a función 'Trace' (Tracado de Perímetro)",
      "si a máquina emitir sinal sonoro de error de limite, mova a origem alguns milímetros de volta en direción al centro del bastidor"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Para acertar a origem en bolsos o cantos de toallas de olhos fechados, use el laser de mira de la máquina o abaixe a aguja suavemente girando el volante manual atEs la pontinha tocar exatamente en el centro de la cruzeta de giz: aperte 'Definir Origem' y el alinhamento fica cirúrgico!",
    "voceSabia": "en máquinas industriais de grande porte con mesas de 15 metros de comprimento, os operadores utilizam ponteiros laser cruzados de alta precisao Para deslocar a origem dezenas de vezes Por dia en rolos contínuos de tejido / tela sin Nunca precisar desmontar a pieza del pantógrafo.",
    "practicalExercise": "Risque una pequena cruz con caneta que apaga con calor a 4cm del canto de un retazo de tejido / tela colocado en el bastidor: use as setas del painel de la sua máquina Para levar a aguja atEs la marcación, aperte 'Set Origin', execute el tracado de área y borde una letra de 2cm. Veja Cómo el bordado fica perfeitamente posicionado en el local planejado!",
    "quickSummary": "Translación de las coordenadas del puntada inicial (X:0, Y:0) Para posicionar el bordado en regioes específicas del bastidor con precisao milimétrica.",
    "relatedTerms": [
      "Tracado de Área",
      "bastidor Virtual",
      "Centralización Automática en el bastidor",
      "Configuración de la Máquina de Bordado"
    ]
  },
  "d-030-digitalizacao-de-logotipo": {
    "term": "Digitalización de Logotipos y Emblemas Corporativos (Corporate Logo Digitizing)",
    "level": "Intermedio 🟡",
    "category": "Programación de Matrices",
    "grammarClass": "Locución nominal feminina.",
    "origin": "Del grego logos (palavra, conceito) y typos (marca, figura gravada), y del latín digitalis. Ramo comercial más lucrativo y técnico del bordado industrial contemporâneo.",
    "summary": "Processo técnico de adaptación y transformación de identidades visuais de marcas en matrices / diseños de alta precisao.",
    "definition": "A digitalización (ponchado) de logotipo es o processo técnico y de design responsável Por transformar a representación gráfica de una marca, símbolo o identidade corporativa en una matriz / diseño / diseño de bordado eletronico de alta qualidade. Esse processo no consiste en simplesmente converter un archivo de imagem (PNG o JPG): exige interpretar a arte, simplificar detalhes minúsculos y reconstruí-la en la linguagem física de puntadas, hilos y tejidos / telas.",
    "technicalDetails": "Envolve adequación a la escala (versoes Para peito de 8cm a 10cm vs costas de 25cm a 30cm), seleción de puntadas Para textos pequenos (mínimo de 4.5mm Para Satin con hilo 40 o uso de hilo fina 60), calibración de compensación de tirantez y compatibilización de la paleta de cores de la marca con los códigos de cones de poliéster.",
    "beginnerExplanation": "É a criación de matrices / diseños Para marcas y empresas (en camisas polo, gorras, batas / guardapolvos y uniformes). Exige muy capricho porque as letras precisam ficar retinhas, legíveis y con as cores fiéis a la marca del cliente.",
    "howItWorks": [
      "1. El digitalizador recebe el manual de marca o vetor del cliente.",
      "2. Avalia a escala de aplicación (camisa polo, boné, bata / guardapolvo, campera).",
      "3. Simplifica detalhes que desapareceriam en la escala de bordado.",
      "4. Aplica puntadas tatami en fundos y puntada satín en las letras y contornos.",
      "5. Realiza el teste prático en el tejido / tela definitivo del uniforme."
    ],
    "construction": [
      "Análise y vetorización limpa del logo",
      "Adaptación de pequenos textos y slogans",
      "Definición de la ordem de sobreposición de las cores",
      "Criación de transpasses de seguridad (overlap)"
    ],
    "mainTypes": [
      "Logotipo Para Peito / camisa polo (8cm a 10cm - foco en legibilidade)",
      "Logotipo Para Costas / campera (20cm a 28cm - foco en leveza y baixo peso)",
      "Logotipo Para Boné Estruturado (Costura del centro Para las bordas)",
      "Logotipo en Relevo 3D / EVA (Para marcas esportivas y gorras premium)"
    ],
    "advantages": [
      "✔ Fidelidade rigorosa a la identidade corporativa del cliente",
      "✔ Textos y contornos nítidos y perfeitamente legíveis mismo de longe",
      "✔ Alta durabilidade en lavagens industriais frequentes de uniformes"
    ],
    "limitations": [
      "Logotipos con degrades complexos o textos con menos de 3.5mm exigem adaptación o simplificación Para viabilidade en bordado."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Perguntar solamente 'qual es o programa que converte el logo automaticamente?'.",
      "❌ Tentar reproduzir letras minúsculas sin engrossar as hastes o simplificar el traco.",
      "❌ Usar a misma matriz / diseño de peito de camisa Para bordar en gorras o toallas."
    ],
    "troubleshootingTips": [
      "Para bordar slogans con letras de 4mm a 5mm, utilize aguja 65/9 y hilo de bordar fina Título 60 con puntada recta corrida duplo o satin leve."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Especial Para quem atende clientes: Nunca pergunte solamente 'qual es o archivo del logotipo?'. Pergunte siempre: 'onde, en qual tamanho y en qual tejido / tela esse logotipo será bordado?' Essas tres respostas mudam completamente a estrutura de la matriz / diseño!",
    "voceSabia": "un mismo logotipo de empresa frequentemente precisa de 3 o 4 versoes diferentes de matriz / diseño: una Para remera de tejido de punto, una Para camisa de vestir de tricoline, una Para boné y outra Para campera grossa!",
    "practicalExercise": "Pegue un logotipo corporativo que contenha un símbolo grande y un texto pequeno embaixo: digitalize el símbolo primeiro y después as letras, garantindo que letras con menos de 5mm usem puntada satín con compensación de tirantez (pull compensation) calibrada en 0.35mm. Borde en una camisa polo pique con entretela de tejido de punto!",
    "quickSummary": "digitalización (ponchado) de logotipo es a programación técnica de identidades visuais corporativas, exigindo alta precisao dimensional y máxima legibilidade tipográfica.",
    "relatedTerms": [
      "digitalización (ponchado) Manual",
      "Desenho Vetorial",
      "Compensación de Puxao",
      "puntada Satin"
    ]
  },
  "d-031-desenho-vetorial": {
    "term": "Diseño Vectorial Para Bordado (Vector Artwork for Embroidery)",
    "level": "Principiante 🟢",
    "category": "Diseño y Creación",
    "grammarClass": "Locución nominal masculina.",
    "origin": "Del latín deexsignare (desenhar) y vector, -oris (aquele que transporta, condutor geométrico, de vehere, transportar). Arte gráfica baseada en fórmulas matemáticas y curvas de Bézier.",
    "summary": "Representación gráfica baseada en fórmulas matemáticas y curvas que permite ampliación sin perda de definición.",
    "definition": "un desenho vetorial es una representación gráfica construída Por meio de elementos matemáticos Cómo hilos, curvas de Bézier, polígonos y puntadas de controle (nós), en lugar de ser formado Por una grade fixa de pixels. Isso permite que a imagem seja redimensionada Para cualquier tamanho sin perder a nitidez y sin apresentar el efeito serrilhado típico de imagens rasterizadas (JPG/PNG). En el bordado, serve Cómo a base gráfica ideal Para la digitalización (ponchado).",
    "technicalDetails": "Formatos vetoriais estándar incluem SVG, AI, EPS, CDR y PDF vetorial. al contrário de una imagem rasterizada que posee resolución fixa en DPI, o vetor posee definición geométrica infinita, facilitando el tracado exato de los objetos de bordado.",
    "beginnerExplanation": "Desenho vetorial es una imagem hecha Por hilos y curvas matemáticas en el computador (en formatos Cómo SVG, CDR o AI). al contrário de una foto común que fica cheia de quadradinhos (pixels) cuando voce amplia, o vetor Nunca perde a qualidade nem a nitidez!",
    "howItWorks": [
      "1. El designer cria o recebe a arte en formato vetorial.",
      "2. As curvas son manipuladas y simplificadas Para eliminar nós excessivos.",
      "3. El software de bordado importa el vetor y utiliza seus nós Cómo guias diretas Para gerar puntadas."
    ],
    "construction": [
      "puntadas de ancoragem y nós de controle",
      "Curvas matemáticas de Bézier",
      "hilos de contorno y preenchimentos vetoriais",
      "Camadas de objetos agrupados"
    ],
    "mainTypes": [
      "Vetor SVG (Formato aberto universal)",
      "Vetor AI / EPS (Adobe Illustrator)",
      "Vetor CDR (CorelDRAW - amplamente integrado con softwares de bordado)"
    ],
    "advantages": [
      "✔ Contornos ultra nítidos y formas perfeitamente definidas",
      "✔ Permite redimensionar a arte livremente Antes de gerar a matriz / diseño",
      "✔ Facilita a separación automática o manual de cores y objetos"
    ],
    "limitations": [
      "un archivo vetorial NAEl es una matriz / diseño / diseño de bordado: ele define solo a forma visual, no contendo informaciones de puntadas, direciones, underlay o cortes."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Achar que salvar un archivo Cómo .SVG já permite colocá-lo en el pendrive de la máquina de bordar.",
      "❌ Ampliar el vetor en 300% y achar que a matriz / diseño de puntadas gerada en el tamanho original continuará funcionando sin ajustes.",
      "❌ no simplificar nós desnecessários Antes de importar en el software de bordado."
    ],
    "troubleshootingTips": [
      "si el software de bordado travar al importar un vetor, use a ferramenta de 'Simplificar Curvas' en el Corel o Illustrator Para reduzir a quantidade de nós."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "El vetor es o desenho organizado; a matriz / diseño es o desenho traduzido Para la linguagem de la máquina! y guarde a regra de ouro: no tente hacer a máquina bordar tudo el que seus olhos conseguem ver en el vetor. Escolha el que realmente precisa y consegue aparecer con qualidade en el tejido / tela!",
    "voceSabia": "El CorelDRAW es o motor gráfico Por trás del software Wilcom EmbroideryStudio: voce desenha en vetor de un lado y el programa gera las puntadas de bordado en tempo real del outro!",
    "practicalExercise": "Abra un archivo en vetor en el seu computador y aumente el zoom Para 800%: repare Cómo as hilos continuam perfeitamente lisinhas y afiadas. ahora faca el mismo con una foto JPG: veja Cómo as bordas ficam embacadas. por ello el vetor es o melhor amigo del digitalizador de bordado!",
    "quickSummary": "Desenho vetorial es a representación gráfica composta Por coordenadas matemáticas que permite ampliaciones infinitas sin perda de definición Para el bordado.",
    "relatedTerms": [
      "Vetorización",
      "Desenho de Bordado",
      "digitalización (ponchado) de Bordado",
      "Matriz / Archivo de Bordado"
    ]
  },
  "d-032-definicao-de-sequencia": {
    "term": "Definición del Orden y Secuencia de Costura",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del concepto matricial Stitching Order & Sequence Planning fundamental en la arquitectura de digitalización computarizada.",
    "definition": "Planificación cronológica y lógica del orden exacto en que cada objeto, color y capa de una matriz será ejecutado Por la máquina de bordar, estructurada habitualmente desde el centro hacia afuera y desde los fondos hacia los detalles superficiales, optimizando la estabilidad de la tela y reduciendo al mínimo los cambios de color y desplazamientos innecesarios.",
    "howItWorks": [
      "1. En el software de ponchado, el digitalizador abre la lista de objetos o panel de secuencia de capas.",
      "2. si ordenan los elementos respetando la regla básica de profundidad: primero las bases y rellenos de fondo, luego los elementos intermedios y finalmente los detalles y contornos superiores.",
      "3. si agrupan los elementos del mismo color de hilo contiguos Para evitar cambios de aguja innecesarios.",
      "4. si planifica la dirección de avance: bordar preferentemente desde el centro hacia los extremos Para disipar las olas de tela hacia afuera.",
      "5. si ubican los puntos de inicio y fin (Entry/Exit Points) de cada objeto Para que el final de uno quede pegado al inicio del siguiente.",
      "6. El resultado es un bordado fluido, sin arrugas y con el menor tiempo de ciclo posible."
    ],
    "beginnerExplanation": "Es planificar qué si borda primero y qué si borda después, igual que cuando pintas un cuadro: primero pintas el cielo de fondo, después el árbol y al final de todo le pintas las manzanitas y los detalles. Si bordas las manzanas Antes que el árbol, el árbol te tapa las manzanas. Ordenar bien las capas en la computadora hace que el bordado quede prolijo, la tela no si arrugue y la máquina borde rápido sin cambiar de hilo a cada rato.",
    "practicalExamples": [
      "Bordado de la cara de un personaje primero, luego los ojos y al final las pupilas y el brillo blanco de la mirada.",
      "Agrupación de todos los detalles rojos de un escudo Para bordarlos juntos de una sola vez.",
      "Secuenciación de un texto bordando desde el centro hacia la izquierda y luego hacia la derecha Para que no si deforme."
    ],
    "matrixParametersRelation": [
      "Minimización de cambios de color: cada cambio de color consume tiempo y añade dos comandos de corte de hilo.",
      "Disipación de empuje textil: bordar del centro hacia afuera evita atrapar bolsas de tela en el medio.",
      "Alineación de contornos: los contornos perimetrales deben bordarse inmediatamente después del relleno correspondiente Para que la tela no si desplace."
    ],
    "commonErrors": [
      "Bordar los contornos negros primero y los rellenos de color después, tapando y ensuciando las líneas finas.",
      "Tener 15 cambios de color en un diseño que solo lleva 3 conos de hilo diferentes Por no haber agrupado los objetos.",
      "Saltar caóticamente de una esquina del bastidor a la otra, estirando la tela en direcciones cruzadas."
    ],
    "troubleshootingTips": [
      "Utiliza la herramienta 'Reordenar Por color' (Sequence by Color) de tu software Para agrupar tonos idénticos.",
      "Borda siempre desde el centro hacia afuera cuando trabajes Sobre telas elásticas o prendas grandes.",
      "Revisa la simulación completa en tu pantalla con el reproductor de puntadas Antes de guardar el archivo final."
    ],
    "whenToAdjust": "Revisa y ajusta la secuencia de capas en el software Antes de dar Por terminada la matriz de bordado.",
    "dicaArtrelados": "La regla del pintor Artrelados Para la secuencia: Cada vez que digitalices, pregúntate Cómo si estuvieras pintando con pincel: '¿Qué está más lejos y qué está más cerca del ojo?'. Lo que está más lejos en el fondo si borda primero; lo que está encima si borda después; y los brillitos y contornos si bordan al final de todo. ¡Tu matriz será una obra de arte con un orden perfecto!",
    "voceSabia": "¿Sabías que un buen reordenamiento de secuencia en una matriz puede reducir el tiempo de costura de 20 minutos a solo 12 minutos sin quitarle una sola puntada al diseño, simplemente eliminando viajes y cambios de hilo inútiles?",
    "practicalExercise": "Abre un diseño con varios colores en tu software. Abre el panel de secuencia: arrastra un objeto de color Para agruparlo con otro del mismo tono. Mira cómo el contador de cambios de color disminuye ahorrándote tiempo de producción en la máquina.",
    "quickSummary": "Planificación lógica del orden de costura de capas y colores Para evitar arrugas y minimizar cambios de hilo.",
    "summary": "Planificación lógica del orden de costura de capas y colores Para evitar arrugas y minimizar cambios de hilo.",
    "relatedTerms": [
      "Definición y Nitidez Visual del Bordado",
      "Software de Ponchado y Digitalización",
      "Puntadas de Viaje Ocultas (Travel Runs)",
      "Colores y Selección Cromática de Hilos"
    ]
  },
  "d-033-detalhamento-da-matriz": {
    "term": "Detallado Fino de la Matriz y Micro-Ajustes (Design Detailing & Fine Tuning)",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Locución nominal masculina.",
    "origin": "Del francés détailler (cortar en pedacos miúdos, examinar minuciosamente, de dé- + tailler, cortar) y del latín matrix (molde gerador).",
    "summary": "nivel de información, refinamento y quantidade de microelementos aplicados en la construción de un bordado.",
    "definition": "El detalhamento de la matriz / diseño corresponde al nivel de información, precisao visual y quantidade de elementos minuciosos utilizados en la construción de un desenho Para bordado. una matriz / diseño puede variar desde un estilo minimalista até una estrutura altamente complexa y realista. En el entanto, en el bordado computarizado vigora a lei física de los materiais: más detalhes no significam necessariamente un bordado melhor.",
    "technicalDetails": "El limite de detalhamento es determinado Por la física de la aguja (diâmetro de 0.70mm a 0.80mm), de la espessura del hilo (Título 40 = ~0.38mm) y de la estrutura de las tramas del tejido / tela. Tentar colocar microdetalhes abaixo de 1mm causa acúmulo de hilo y perda de legibilidade.",
    "beginnerExplanation": "Detalhamento de la matriz / diseño es o ajuste fino de cada minúsculo detalhe del bordado: acertar los olhos de un personagem, criar hilos de cabelo finos, hacer brilhos en las folhas y garantir que tudo fique nítido sin criar una montanha grossa de hilo.",
    "howItWorks": [
      "1. El digitalizador analisa a complexidade de la arte original.",
      "2. Identifica los elementos essenciais que garantizan el reconhecimento del desenho.",
      "3. Elimina o funde detalhes minúsculos que virariam borroes en el tejido / tela.",
      "4. Aplica puntadas con precisao en las áreas de maior impacto visual."
    ],
    "construction": [
      "Hierarquia visual de elementos principais y secundários",
      "Filtro de microdetalhes y hilos finas",
      "Escala proporcional de aplicación",
      "Adequación al relevo y textura del tejido / tela"
    ],
    "mainTypes": [
      "Detalhamento Minimalista / Alto Contraste (Ideal Para marcas y uniformes)",
      "Detalhamento Moderado (estándar Para ilustraciones y desenhos infantis)",
      "Detalhamento Realista / Avanzado (Para retratos, pelagens y arte sacra en grandes formatos)"
    ],
    "advantages": [
      "✔ Cria bordados nítidos, elegantes y de fácil reconhecimento visual",
      "✔ Mantém el bordado leve, confortável y flexível en la pieza de roupa",
      "✔ Otimiza el tempo de máquina y evita quebras repetitivas de aguja"
    ],
    "limitations": [
      "Bordados pequenos (abaixo de 5cm) exigem simplificación drástica del detalhamento Para manter a legibilidade."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Tentar reproduzir cada hilo de cabelo o ruga de una foto en un bordado de bolso de 8cm.",
      "❌ Aumentar a densidade en la tentativa de hacer microdetalhes aparecerem.",
      "❌ Ignorar que tejidos afelpados (toallas) engolem y escondem pequenos detalhes."
    ],
    "troubleshootingTips": [
      "si los detalhes de un rosto bordado ficarem irreconhecíveis, elimine as sombras intermediárias y mantenga solo los tracos de contorno principais."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "En el bordado, simplificar no significa empobrecer! a las vezes, simplificar y limpar el desenho es justamente el segredo que permite que el bordado fique incrivelmente elegante, nítido y profissional.",
    "voceSabia": "A técnica de simplificación inteligente es a maior virtude de un grande digitalizador: saber el que NAEl bordar es tao importante quanto saber el que bordar!",
    "practicalExercise": "Borde el rostinho de un ursinho de pelúcia: Para el focinho y olhos, use una aguja más fina (65/9 o 70/10) y hilo título 60 Para los microdetalhes pretos. Veja Cómo los detalhes ganham una nitidez impressionante que encanta los clientes de ajuar!",
    "quickSummary": "Detalhamento de la matriz / diseño es o refinamento técnico y artístico de los microelementos del bordado Para garantir nitidez, expressividade y acabado superior.",
    "relatedTerms": [
      "Definición del Bordado",
      "digitalización (ponchado) de Logotipo",
      "densidad de puntadas",
      "longitud de puntada"
    ]
  },
  "d-034-direcao-de-preenchimento": {
    "term": "Dirección de Relleno y Ángulo de Puntada (Fill Stitch Direction & Tatami Angle)",
    "level": "Principiante 🟢",
    "category": "Programación de Matrices",
    "grammarClass": "Locución nominal feminina.",
    "origin": "Del latín directio (direción) y del latín vulgar implere (encher, completar un espaco vazio).",
    "summary": "Orientación angular predominante en que las puntadas son distribuídos Para cobrir áreas sólidas de la matriz / diseño.",
    "definition": "A direción de preenchimento es a orientación angular predominante en la qual as passagens de puntadas son distribuídas dentro de una área sólida o fechada de la matriz / diseño / diseño de bordado (Cómo en blocos de puntada tatami / relleno o preenchimentos complexos). Essa escolha define Para que lado as hilos seguirao (horizontal, vertical, diagonal o curvilínea), alterando drasticamente el reflexo de luz, a textura, a rigidez y as forcas de repuxamento Sobre el tejido / tela.",
    "technicalDetails": "Configurada en graus en el software. en grandes áreas de preenchimento, ângulos diagonais a 45° o 135° sao preferidos porque distribuem as forcas de tración igualmente Entre los hilos de urdume y trama del tejido plano.",
    "beginnerExplanation": "Direción de preenchimento es o ângulo en que las puntadas correm dentro de una área grande (Cómo un círculo, un coración o una letra grande). Mudar esse ângulo ajuda a evitar que el tejido / tela encolha y dá vida y movimento al desenho.",
    "howItWorks": [
      "1. El programador define o ângulo de inclinación dentro del polígono vetorial.",
      "2. El software traca as passagens de aguja paralelas a esse eixo.",
      "3. A hilo de poliéster reflete a iluminación ambiente según a orientación de las fibras.",
      "4. Dois objetos vizinhos con direciones opostas criam contraste nítido de planos."
    ],
    "construction": [
      "hilo de ângulo de preenchimento",
      "Camada de underlay posicionada a 90° de suporte",
      "desplazamiento alternado de passagens",
      "compensación de tirantez (pull compensation) paralela al ângulo"
    ],
    "mainTypes": [
      "Preenchimento Diagonal (45° / 135° - estándar universal más estável)",
      "Preenchimento Horizontal (0° / 180°)",
      "Preenchimento Vertical (90° / 270°)",
      "Preenchimento con Direciones Cruzadas (Para criar efeito de xadrez o textura de tejido / tela)"
    ],
    "advantages": [
      "✔ Cria contrastes visuais ricos y separación de planos con a misma cor de hilo",
      "✔ Evita deformaciones excessivas al equilibrar a tración en el tejido / tela",
      "✔ Proporciona acabado liso y homogeneo con brilho sedoso"
    ],
    "limitations": [
      "Preenchimentos extensos con puntadas en el mismo sentido de las tramas del tejido / tela pueden afundar y perder cobertura."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Utilizar exatamente a misma direción en todos los preenchimentos de la matriz / diseño, deixando el desenho sin dinamismo.",
      "❌ Escolher a direción sin observar el sentido de la forma orgânica (ex: bordar una folha en la transversal pura).",
      "❌ Alinhar el preenchimento en la horizontal exata Sobre tejidos de punto muy elásticas."
    ],
    "troubleshootingTips": [
      "si una área grande de preenchimento estiver tironeando el tejido / tela Para dentro, mude a direción de 0° Para 45° y aumente a compensación de tirantez Para 0.35mm."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "no pense en la direción del puntada solo Cómo una simples seta: pense nela Cómo o 'sentido' del hilo dentro del desenho! cuando voce aprende a enxergar y direcionar a hilo, suas matrices / diseños ganham vida y volume!",
    "voceSabia": "Voce pode bordar una bandeira xadrez usando solo una única cor de hilo branca: basta programar los quadrados alternando a direción de preenchimento Entre 45° y 135°!",
    "practicalExercise": "en un coración dividido al meio Por una hilo central, preencha el lado esquerdo con puntadas a 45° y el lado direito con puntadas a 135°. Borde en tejido / tela vermelho: veja Cómo el coración parece ter duas metades tridimensionais que si encontram en el meio Por el jogo de luz!",
    "quickSummary": "Direción de preenchimento es a inclinación angular aplicada a las puntadas de cobertura de grandes áreas Para otimizar estabilidade y reflexao de luz.",
    "relatedTerms": [
      "Direción del puntada",
      "puntada de Preenchimento",
      "densidad de puntadas",
      "Underlay"
    ]
  },
  "d-035-distancia-de-salto": {
    "term": "Distancia de Salto y Umbral de Corte (Jump Distance & Trim Threshold)",
    "level": "fundamental 🟢",
    "category": "Programación de Matrices",
    "grammarClass": "Locución nominal feminina.",
    "origin": "Del latín distantia (afastamento) y del germânico salti (salto, pulo mecânico sin perfuración de aguja). Comando mecânico primário de los formatos industriais de bordado.",
    "summary": "Espaco percorrido Por el bastidor Entre dois puntadas sin formación de costura en aquel trecho.",
    "definition": "A distancia de salto (Jump Distance) é o espaco percorrido Por la máquina Entre dois puntadas o regioes del bordado durante un movimento de salto, sin realizar costura contínua en aquel trecho. De maneira simples: é a distancia que a aguja precisa 'atravessar' cuando sai de donde terminou un objeto y vai até onde comecará o próximo.",
    "technicalDetails": "En los softwares y máquinas, existe un parâmetro limite de corte automático (geralmente calibrado Entre 2.0mm y 5.0mm). Saltos menores que esse valor son realizados en movimento contínuo (deixando hilo esticado Para limpeza); saltos maiores acionam el comando mecânico de remate / puntada de seguridad y corte de hilo.",
    "beginnerExplanation": "Distancia de salto es a distancia que el bastidor percorre de un puntada a outro sin a aguja costurar (cuando a máquina pula de una letra Para la próxima). si el pulo for maior que a distancia configurada, a máquina aciona el cortador de hilo automático.",
    "howItWorks": [
      "1. A máquina conclui un objeto en el puntada de salida.",
      "2. Avalia si a distancia atEs el próximo objeto ultrapassa el limite de corte configurado.",
      "3. si for menor: a aguja sobe y el bastidor si desloca diretamente deixando el hilo esticado.",
      "4. si for maior: a máquina aciona el cortador, arremata y desloca-si con a hilo cortada."
    ],
    "construction": [
      "Vetor de desplazamiento livre del pantógrafo",
      "puntada de partida (salida del objeto anterior)",
      "puntada de chegada (entrada del próximo objeto)",
      "Comutación Entre salto livre y corte automático"
    ],
    "mainTypes": [
      "Salto Curto con Conexao (1mm a 3mm - no exige corte)",
      "Salto Longo con Corte Automático (Acima de 4mm a 7mm)",
      "Salto Oculto / puntada de Viagem (Caminho costurado Por baixo de outros objetos)"
    ],
    "advantages": [
      "✔ Saltos curtos bem planejados eliminam cortes desnecessários y aceleram a produción",
      "✔ Otimiza el movimento cinemático del pantógrafo",
      "✔ Evita el desgaste prematuro de la navalha de corte de la máquina"
    ],
    "limitations": [
      "Saltos longos deixados sin corte Sobre tejidos / telas claros geram hilos visíveis que pueden ser repuxados durante el uso si no forem aparados."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Confundir distancia de salto con distancia Entre puntadas normais de costura.",
      "❌ Tentar eliminar absolutamente todos los saltos o colocar corte en cualquier distancia de 2mm.",
      "❌ Ignorar saltos longos que cruzam áreas abertas del bordado."
    ],
    "troubleshootingTips": [
      "si as letras estiverem conectadas Por hilos feios que voce precisa cortar en la tesourinha, reduza el valor del 'Comprimento de Salto Para Corte' en el software Para 2.0mm."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "un bom bordado no depende solo de las puntadas que aparecem en el tejido / tela, pero también de los caminhos que a máquina percorre Entre eles! Procure saltos longos en la simulación Cómo quem procura estradas desnecessárias en un mapa: si puder encurtar a rota, seu bordado ficará más limpo y muy más rápido!",
    "voceSabia": "Cada comando de corte automático de hilo en una máquina industrial leva de 2 a 4 segundos: en una matriz / diseño con 50 cortes desnecessários, voce perde más de 3 minutos Por pieza solo cortando hilo!",
    "practicalExercise": "En el painel de la sua máquina o en el software, verifique el ajuste de corte Por salto (geralmente regulado en 2.0mm a 5.0mm). Borde una frase con letras cursivas: veja Cómo en los saltos pequenos ela passa direto y en los saltos maiores ela corta a hilo automaticamente.",
    "quickSummary": "Distancia de salto es o desplazamiento del bastidor Entre objetos sin perfuraciones, gatilho Para el acionamento del cortador de hilo automático.",
    "relatedTerms": [
      "puntada de Entrada",
      "puntada de salida",
      "Corte de hilo",
      "Sequencia de puntadas"
    ]
  },
  "d-036-diagrama-de-pontos": {
    "term": "Diagrama de Puntadas y Mapa de Perforaciones (Stitch Plan & Penetration Map)",
    "level": "Intermedio 🟡",
    "category": "Softwares y Formatos",
    "grammarClass": "Locución nominal masculina.",
    "origin": "Del grego diagramma (figura desenhada, esquema gráfico composto Por hilos, de diagraphein, marcar con hilos) y de punctum (puntada).",
    "summary": "Representación gráfica o esquemática que permite visualizar a estrutura interna, trajetórias y ordem de las puntadas de la matriz / diseño.",
    "definition": "El diagrama de puntadas es a representación gráfica y estrutural utilizada Para visualizar, analisar y compreender a organización de cada puntada individual que compoe una matriz / diseño / diseño de bordado. Enquanto a imagem simulada en la tela mostra Cómo el bordado deverá parecer, o diagrama de puntadas revela a sua 'planta baixa': a posición de cada furo de aguja, as trajetórias de desplazamiento, a sequencia de objetos y las puntadas de entrada y salida.",
    "technicalDetails": "Visualizado en los softwares al desativar el modo 3D / TrueView y ativar a visualización en grade con nós de puntada (Needle Points / Wireframe Mode), permitindo leitura técnica de penetraciones y trajetórias de viagem.",
    "beginnerExplanation": "Diagrama de puntadas es o mapa técnico del bordado en la tela del computador: voce consegue ver cada furinho de aguja, as hilos de costura Por baixo (underlay) y até onde a máquina vai pular o cortar a hilo Antes de colocar el tejido / tela en el bastidor.",
    "howItWorks": [
      "1. El operador abre a matriz / diseño en el software y desativa a visualización de hilo realista (3D).",
      "2. El diagrama expoe a tejido de punto real de puntadas y a densidade de furos.",
      "3. Utiliza-si a cenefa de reprodución (Stitch Player) Para simular a costura passo a passo.",
      "4. Identificam-si puntadas sobrepostos desnecessários o falhas de percurso."
    ],
    "construction": [
      "Marcación de puntadas de penetración de la aguja",
      "hilos vetoriais de conexao de trajeto",
      "Numeración cronológica de objetos y cores",
      "Indicadores visuais de paradas y cortes"
    ],
    "mainTypes": [
      "Visualización en Aramado / Wireframe (Mostra contornos y hilos de direción)",
      "Visualización puntada a puntada con Nós (Destaca cada furo de aguja)",
      "Diagrama de Ordem de Produción (Ficha Técnica impressa con dados y cores)"
    ],
    "advantages": [
      "✔ Permite enxergar a verdadeira estrutura interna del bordado além de la ilusao de la tela",
      "✔ Facilita el diagnóstico prévio de puntadas acumulados perigosos Para la aguja",
      "✔ Excelente ferramenta pedagógica Para aprender a 'ler' matrices / diseños de bordado"
    ],
    "limitations": [
      "A representación visual de los símbolos y cores varia de acordo con cada software de bordado."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Olhar solo Para la imagem 3D simulada y Nunca inspecionar el diagrama de puntadas.",
      "❌ Confundir el diagrama con el archivo final de la máquina.",
      "❌ no realizar a simulación virtual passo a passo Antes de carregar el archivo en la máquina."
    ],
    "troubleshootingTips": [
      "Use el reprodutor de puntadas (Stitch Player) en la velocidade máxima Para conferir si a ordem de bordado está lógica Antes de colocar a hilo en la máquina."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "no olhe una matriz / diseño solo Cómo una imagem: aprenda a enxergá-la Cómo un caminho hecho de puntadas! cuando voce comeca a observar donde comeca → Por donde passa → onde termina → Para donde vai después, voce passa a entender Cómo a máquina pensa!",
    "voceSabia": "A imagem 3D del software es Cómo a foto de una casa pronta; o diagrama de puntadas es a planta baixa arquitetonica con todas as vigas y encanamentos!",
    "practicalExercise": "Abra una matriz / diseño en el software y ative a visualiza��ao en 'Modo puntadas' o 'Modo 1:1' (desativando el efeito 3D realista TrueView). Use a cenefa de rolagem de la simulación Para ver a aguja descendo puntada Por puntada: analise Cómo as camadas de baixo son construídas Antes de las camadas de cima!",
    "quickSummary": "Diagrama de puntadas es a visualización analítica y esquemática de todas as penetraciones de aguja y comandos mecânicos de la matriz / diseño.",
    "relatedTerms": [
      "Sequencia de puntadas",
      "puntada de Entrada",
      "puntada de salida",
      "digitalización (ponchado) de Bordado"
    ]
  },
  "d-037-dimensao-da-matriz": {
    "term": "Dimensión de la Matriz y Escalamiento Seguro (Design Dimensions & Rescaling Limits)",
    "level": "fundamental 🟢",
    "category": "Terminologia Geral",
    "grammarClass": "Locución nominal feminina.",
    "origin": "Del latín dimensio, -onis (ación de medir, extensao mensurável, de dimetiri) y de matrix (molde gerador).",
    "summary": "Medidas físicas reais de largura y altura que el desenho ocupará en el tejido / tela cuando bordado.",
    "definition": "A dimensao de la matriz / diseño corresponde a las medidas físicas que indicam el espaco que el desenho bordado ocupará en el tejido / tela, expressas en largura y altura (normalmente en milímetros o centímetros, Cómo 100 x 80 mm o 10 x 8 cm). É fundamental compreender que a dimensao de la matriz / diseño representa el tamanho real del bordado, que debe ser totalmente compatível con a área útil del bastidor y el espaco disponível en la pieza física.",
    "technicalDetails": "Diferencia-si del tamanho en Kilobytes del archivo digital. El redimensionamento de una matriz / diseño en más de 10% a 15% exige recálculo automático de puntadas Por el software Para no comprometer a densidade original.",
    "beginnerExplanation": "Dimensao de la matriz / diseño es a altura y a largura exatas del desenho en milímetros o centímetros (Por ejemplo: 10cm x 10cm). É importantíssimo conferir a dimensao Para ter certeza de que el desenho vai caber dentro de su bastidor y en el peito de la remera!",
    "howItWorks": [
      "1. A bordadora confere as medidas en milímetros en el painel o software.",
      "2. Mede con una fita métrica el local exato de la pieza (ex: bolso, toalla, peito).",
      "3. Seleciona el bastidor adequado garantindo a folga de la distancia de seguridad."
    ],
    "construction": [
      "Largura física horizontal (X en mm)",
      "Altura física vertical (Y en mm)",
      "Área delimitadora retangular (Bounding Box)",
      "Área efetiva de cobertura Por puntadas"
    ],
    "mainTypes": [
      "Dimensao Nominal (Medida externa máxima de largura x altura)",
      "Área Efetiva de Bordado (Superfície real coberta Por las puntadas)",
      "Dimensao Proporcional Redimensionada"
    ],
    "advantages": [
      "✔ Garante el enquadramento perfeito del bordado en la pieza sin errores de proporción",
      "✔ Assegura a compatibilidade imediata con los bastidores disponíveis en el atelie",
      "✔ Permite planejar a compra correta de entretelas y el consumo de materiais"
    ],
    "limitations": [
      "Aumentar o diminuir drasticamente as dimensoes sin un software que recalcule puntadas deforma a densidade y quebra a matriz / diseño."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Confundir a dimensao de la matriz / diseño con el tamanho nominal del bastidor.",
      "❌ Dobrar el tamanho de la matriz / diseño sin verificar si las puntadas ficaram espacados demais y ralos.",
      "❌ Reduzir una matriz / diseño Para menos de la metade fazendo letras y detalhes virarem bolhas duras de hilo."
    ],
    "troubleshootingTips": [
      "si precisar mudar el tamanho de una matriz / diseño pronta en más de 20%, solicite al digitalizador que gere una nova versao recalculada Para la nova escala."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Antes de bordar, meca duas vezes: a matriz / diseño y el espaco disponível en la pieza! Pense siempre en el trio: 1. Tamanho de la matriz / diseño; 2. Capacidade del bastidor; 3. Espaco disponível en la pieza. cuando los tres están en harmonia, seu trabalho comeca con total seguridad!",
    "voceSabia": "Duas matrices / diseños con exatamente a misma dimensao de 10x10cm pueden ter 5.000 puntadas (si for un traco leve) o 25.000 puntadas (si for un escudo totalmente preenchido en tatami)!",
    "practicalExercise": "Antes de enviar un archivo Para la máquina, meca a área útil del bolso o del peito de la pieza con una fita métrica. Compare con a dimensao informada en el painel de la máquina: certifique-si de que el desenho deixa Por el menos 15mm de folga livre en todos los lados.",
    "quickSummary": "Dimensao de la matriz / diseño es a medida física real (largura y altura) del projeto de bordado, essencial Para enquadramento en el bastidor y proporción en la pieza.",
    "relatedTerms": [
      "Área Útil del Bastidor",
      "bastidor",
      "densidad de puntadas",
      "Distancia de seguridad"
    ]
  },
  "d-038-densidade-de-linha": {
    "term": "Densidad Lineal y Cobertura de Hilos",
    "level": "Intermedio 🟡",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal femenina",
    "origin": "De los títulos textiles estandarizados de densidad lineal (denier, dtex y sistema peso/longitud wt) aplicados al hilado de bordar.",
    "definition": "Medida física y volumétrica que relaciona el grosor o título real del hilo de bordar (típicamente 40wt Para hilo estándar, 60wt Para microletras o 30wt Para hilos gruesos) con el espacio físico milimétrico que cada filamento ocupa Sobre la tela, determinando cuántas pasadas paralelas si requieren Para lograr una cobertura visual absoluta sin que si transparente el fondo.",
    "howItWorks": [
      "1. Un hilo estándar calibre 40wt tiene un diámetro promedio aproximado de 0,35 mm a 0,38 mm cuando descansa Sobre la tela.",
      "2. En consecuencia, si si programa un espaciado Entre puntadas de 0,40 mm en el software, los filamentos quedan perfectamente yuxtapuestos uno al lado del otro.",
      "3. Si si utiliza un hilo fino calibre 60wt (con un diámetro de solamente 0,25 mm), un espaciado de 0,40 mm dejará espacios vacíos Entre hilos revelando la tela.",
      "4. Por ello, con hilo 60wt si debe cerrar la densidad lineal en el software a 0,28 mm o 0,30 mm.",
      "5. Si si usa hilo grueso calibre 30wt (diámetro de 0,45 mm), si debe abrir la densidad a 0,48 mm Para que los hilos no si encimen."
    ],
    "beginnerExplanation": "Es entender qué tan gordito o flaquito es el hilo que tienes puesto en la máquina y cómo acomodar la computadora según eso. Un hilo conún de bordar es Cómo un fideo espagueti fino: necesita cierta cantidad de puntadas Para tapar la tela. Si pones un hilo súper flaquito Para letras enanas, tienes que poner más puntadas juntas Para que tape bien; y si pones un hilo grueso Cómo lana, tienes que separar las puntadas Para que no si encimen y rompan la aguja.",
    "practicalExamples": [
      "Ajuste de densidad lineal a 0,30 mm Para bordar con hilo fino 60wt en monogramas de camisas.",
      "Apertura de densidad lineal a 0,50 mm Para bordados con hilos rústicos de lana acrílica o algodón 30wt.",
      "Cálculo de cobertura en hilos metálicos que requieren un 10% más de espacio libre Para no deshilacharse."
    ],
    "matrixParametersRelation": [
      "Relación inversamente proporcional: a mayor número de calibre comercial (60wt vs. 40wt), menor es el grosor del hilo y menor debe ser el espaciado.",
      "Selección de aguja correspondiente: hilo 40wt = aguja 75/11; hilo 60wt = aguja 65/9; hilo 30wt = aguja 90/14.",
      "Resistencia a la tensión: hilos más gruesos toleran mayor tensión de resorte que filamentos ultrafinos."
    ],
    "commonErrors": [
      "Cambiar de hilo estándar a hilo fino 60wt sin ajustar la densidad en la matriz, dejando el bordado transparente y ralo.",
      "Poner hilo grueso de fantasía con una matriz digitalizada Para hilo 40wt, partiendo agujas y troquelando la tela.",
      "Confundir el peso del hilo (wt) creyendo que un número más alto significa un hilo más grueso."
    ],
    "troubleshootingTips": [
      "Recuerda la regla mnemotécnica del peso del hilo: en el sistema 'wt', número más alto = hilo más flaquito.",
      "Si vas a bordar con hilo metálico, abre el espaciado en tu software al menos un 10% Para darle espacio al filamento retorcido.",
      "Guarda tus conos de hilos especiales identificados con su calibre Para no mezclarlos en el cabezal."
    ],
    "whenToAdjust": "Modifica el espaciado de puntada en el software cada vez que utilices hilos con calibre diferente al estándar 40wt.",
    "dicaArtrelados": "La tabla de equivalencias Artrelados de hilo y densidad: Guárdate estos tres números de oro Para tu taller: 1. Hilo estándar 40wt = densidad 0,40 mm. 2. Hilo fino 60wt = densidad 0,30 mm. 3. Hilo grueso 30wt = densidad 0,50 mm. ¡Con estos tres valores calibrados en tu software tus bordados siempre tendrán una cobertura perfecta!",
    "voceSabia": "¿Sabías que la denominación 'wt' (Weight) significa cuántos kilómetros de ese hilo pesan 1 kilogramo, de modo que en un kilo de hilo 60wt entran 60 kilómetros de hebra, demostrando lo increíblemente fino que es?",
    "practicalExercise": "Toma un cono de hilo estándar 40wt y uno de hilo fino 60wt. Colócalos lado a lado bajo una lupa o la cámara con zoom de tu celular: observa claramente la diferencia de grosor y comprende Por qué cada uno exige un espaciado diferente en la computadora.",
    "quickSummary": "Relación Entre el grosor físico del hilo y el espaciado necesario en la matriz Para lograr cobertura perfecta.",
    "summary": "Relación Entre el grosor físico del hilo y el espaciado necesario en la matriz Para lograr cobertura perfecta.",
    "relatedTerms": [
      "Densidad de Puntada y Espaciado Milimétrico",
      "Calibración Avanzada de Densidad Por Tejido",
      "Hilo de Poliéster Trilobal",
      "Aguja de Bordado Industrial"
    ]
  },
  "d-039-deteccao-de-cores": {
    "term": "Detección Automática de Colores y Asignación de Agujas (Color Detection & Thread Match)",
    "level": "Principiante 🟢",
    "category": "Softwares y Formatos",
    "grammarClass": "Locución nominal feminina.",
    "origin": "Del latín detectio, -onis (ación de descobrir, desvendar, de detegere, tirar el teto/revelar) y del latín color, -oris (cor, matiz óptico).",
    "summary": "Recurso del software Para identificar, agrupar y separar áreas cromáticas de una imagem durante a preparación.",
    "definition": "A detección de cores es o processo Por el qual un software de bordado identifica y analisa as diferentes tonalidades presentes en una imagem gráfica y utiliza essas informaciones Para separar regioes, agrupar cores semelhantes (redución de cores) y gerar propostas de objetos de bordado. É una etapa preliminar fundamental en la digitalización (ponchado) assistida y automática.",
    "technicalDetails": "Analisa los valores RGB de los pixels. en imagens con compresión JPG o degrades suaves, o algoritmo puede detectar centenas de variaciones de una misma cor devido al antialiasing, exigindo redución prévia Para una paleta controlada de 3 a 8 cores de hilo.",
    "beginnerExplanation": "Detección de cores es a ferramenta del software que le una imagem y separa automaticamente quais son as cores presentes nela. Ajuda a definir a ordem de cambio de hilo en la máquina sin que voce precise adivinhar as cores una a una.",
    "howItWorks": [
      "1. A imagem es importada y el software analisa a quantidade de cores en los pixels.",
      "2. El usuário define el número máximo de cores reais de hilo desejadas.",
      "3. El software agrupa tons vizinhos y delimita los contornos de cada bloco de cor.",
      "4. Cada bloco de cor vira un objeto o parada de cambio de hilo en la máquina."
    ],
    "construction": [
      "Algoritmo de leitura RGB / CMYK",
      "Tabela de redución de cores (Color Reduction Table)",
      "Agrupamento Por tolerancia cromática",
      "Mapeamento con catálogos de hilos de bordar"
    ],
    "mainTypes": [
      "Detección Automática Por Tolerancia (Varredura de pixels)",
      "Redución Manual de Cores (Agrupamento orientado Por el usuário)",
      "Mapeamento Automático con Paletas de hilos Comerciais (Madeira, Isacord, Lumina, etc.)"
    ],
    "advantages": [
      "✔ Agiliza imensamente a separación de camadas en desenhos multicoloridos",
      "✔ Elimina pequenas variaciones de ruído y sombras indesejadas de fotos",
      "✔ Associa as cores de la tela a los códigos reais de cones de hilo disponíveis en el atelie"
    ],
    "limitations": [
      "A detección automática de cores no substitui el planejamento de la sequencia de cambios de color Por el digitalizador."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Deixar el software detectar 30 variaciones de azul Para una imagem simples, gerando 30 cambios de hilo en la máquina.",
      "❌ Confundir a cor mostrada en el monitor con a tonalidade física exata del cone de hilo.",
      "❌ Ignorar a ordem y sequencia de las cambios de color, fazendo a máquina trocar Para la misma hilo várias vezes."
    ],
    "troubleshootingTips": [
      "si a matriz / diseño estiver exigindo muchas cambios de hilo desnecessárias, use a ferramenta de 'Reordenar Por Cores' (Color Sort) en el software Para agrupar todas as partes de la misma cor."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "En el bordado eletronico, nem toda cor que existe en la imagem precisa virar un cone de hilo! Antes de aceitar a detección automática, pergunte: 'Quais cores realmente son necessárias Para reconhecer el desenho?' El segredo es simplificar con inteligencia!",
    "voceSabia": "una foto de maca pode conter más de 2.000 tons diferentes de vermelho en la tela del computador, pero Para bordar con perfeición en el atelie voce precisa solo de 2 o 3 tons de hilo bem escolhidos!",
    "practicalExercise": "Importe una imagem con 4 cores bem contrastantes Para el seu software. Use a ferramenta de redución y detección de cores Para limitar a paleta exatamente a 4 cores: repare Cómo el programa remove automaticamente pequenas manchas y ruídos de tons intermediários.",
    "quickSummary": "Detección de cores es o recurso computacional de identificación y separación cromática de elementos visuais Para estruturación de las paradas de máquina.",
    "relatedTerms": [
      "digitalización (ponchado) Automática",
      "Matriz / Archivo de Bordado",
      "Cores de hilo",
      "Sequencia de puntadas"
    ]
  },
  "d-040-distorcao-do-bordado": {
    "term": "Distorsión del Bordado y Efecto Push-Pull (Embroidery Distortion & Fabric Pull)",
    "level": "Intermedio 🟡",
    "category": "Solución de Problemas",
    "grammarClass": "Locución nominal feminina.",
    "origin": "Del latín distortio, -onis (ación de torcer, deformar a forma original, de distorquere, torcer Para los lados) y del árabe al-burdā (bordado).",
    "summary": "Alteración de forma, proporción o alinhamento observada en el tejido / tela en relación al desenho original previsto en la matriz / diseño.",
    "definition": "A distorción del bordado ocurre cuando el desenho executado en el tejido / tela apresenta forma, proporciones o encaixes diferentes de aquellos visualizados en el computador (Por ejemplo: un círculo que vira una elipse oval, letras inclinadas o vaos Entre el fundo y el contorno). A distorción resulta del combate físico Entre a tración del hilo, a estabilidade de la entretela, o bastidoramento y a elasticidade natural del tejido / tela.",
    "technicalDetails": "Relaciona-si con el efeito mecânico Push & Pull: os puntadas puxam el tejido / tela en el sentido del ângulo del hilo (Pull) y expandem as laterais perpendiculares (Push). cuando a estabilización es insuficiente, a distorción torna-si visível.",
    "beginnerExplanation": "Distorción del bordado es cuando el desenho sai deformado en el tejido / tela: un círculo perfeito que vira un ovo achatado, un quadrado que vira losango o contornos que saem fora de la figura. Isso sucede porque a hilo puxa el tejido / tela enquanto costura!",
    "howItWorks": [
      "1. A aguja perfora el tejido / tela y a hilo exerce tración al travar el nó.",
      "2. Milhares de puntadas acumulam forca tirando as fibras texteis Para el centro.",
      "3. si a entretela no segurar el tejido / tela o el bastidor estiver flojo, a forma geométrica si deforma.",
      "4. al sair del bastidor, o tejido / tela relaxa evidenciando a distorción."
    ],
    "construction": [
      "Tración de encolhimento en el sentido de las puntadas",
      "Expansao en las bordas perpendiculares",
      "Deformación Por tensao desbalanceada",
      "Movimentación del tejido / tela dentro del aro del bastidor"
    ],
    "mainTypes": [
      "Distorción Por Repuxamento (Encolhimento paralelo al puntada)",
      "Distorción Por Bastidoramento Excessivo (tejido / tela esticado artificialmente en el aro)",
      "Distorción Por desplazamiento de Registro (Contorno fora del preenchimento)"
    ],
    "advantages": [
      "✔ Compreender a distorción permite aplicar compensaciones precisas en la digitalización (ponchado)"
    ],
    "limitations": [
      "Tentar corrigir distorciones solo aumentando a densidade piora a deformación."
    ],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Culpar imediatamente a matriz / diseño cuando el problema fue el tejido / tela flojo en el bastidor.",
      "❌ Esticar el tejido / tela con forca excessiva al montar el bastidor (Cómo una pele de tambor esticada demais).",
      "❌ Bordar tejidos de punto elásticas usando entretela desprendible (tear-away) en lugar de entretela recortable (cut-away)."
    ],
    "troubleshootingTips": [
      "si formas circulares estiverem saindo ovais, aumente a compensación de tirantez (Pull Compensation) en el software Para 0.40mm y use entretela más encorpada."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "cuando el bordado si distorcer, no procure un culpado: procure a causa! Compare a matriz / diseño con el bordado pronto y veja donde a forma comecou a mudar. Lembre-si de la regra de ouro: a matriz / diseño es criada en la tela, pero el bordado sucede en el tejido / tela! Observe siempre los dois!",
    "voceSabia": "si voce esticar demais una remera de tejido de punto al fechar el bastidor, ela parecerá linda enquanto estiver presa; pero así que voce abrir el aro, a tejido de punto encolherá de volta y el bordado ficará totalmente enrugado!",
    "practicalExercise": "Borde un círculo perfeito de 5cm en una tejido de punto con entretela fraca y floja en el bastidor. al tirar de la máquina, meca el círculo en la vertical y en la horizontal con una régua: veja Cómo ele ficou menor en el sentido de las puntadas (encolheu) y maior en el sentido oposto (esticou). Esse es o efeito clássico de distorción!",
    "quickSummary": "Distorción del bordado es a alteración geométrica indesejada de la forma original causada Por las forcas de repuxamento y compresión del hilo Sobre el tejido / tela.",
    "relatedTerms": [
      "Deformación del Bordado",
      "Compensación de Puxao",
      "Bastidoramento",
      "estabilizador"
    ]
  },
  "d-041-definicao-do-bordado": {
    "term": "Definición y Nitidez Visual del Bordado",
    "level": "principiante 🟢",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del concepto óptico de agudeza visual y nitidez de detalle (Embroidery Clarity & Edge Sharpness) en la apreciación textil.",
    "definition": "Cualidad estética y técnica que describe la claridad, limpieza geométrica, nitidez de bordes y legibilidad con que si aprecian los detalles finos, letras y contornos de un diseño bordado Sobre la tela, resultante del equilibrio perfecto Entre el calibre del hilo, el grosor de aguja, la compensación de tirantez y la adecuada estabilización de la prenda.",
    "howItWorks": [
      "1. La aguja clava con precisión geométrica sin deflexión ni desvío lateral.",
      "2. El hilo si entrelaza con tensión equilibrada formando bordes afilados y superficies lisas.",
      "3. La entretela inmoviliza las fibras de la tela evitando que los hilos del tejido interfieran con las puntadas.",
      "4. Las letras pequeñas mantienen sus aberturas interiores (Cómo los círculos de la 'y', 'a' y 'o') totalmente despejadas.",
      "5. El diseño si lee con absoluta claridad tanto a corta distancia Cómo a dos metros de alejamiento visual."
    ],
    "beginnerExplanation": "Es lo que hace que un bordado si vea 'en alta definición'. Cuando miras un bordado con buena definición, las letras chiquitas si leen perfecto sin que los agujeritos estén tapados, las líneas son derechitas, las curvas son suaves y los colores no si mezclan feo. Es la diferencia Entre un bordado borroso que parece una mancha y un bordado nítido y profesional que parece una foto dibujada con hilos.",
    "practicalExamples": [
      "Nombres y cargos legibles de solo 4 mm de altura en chaquetas méconsejos y ambos quirúrgicos.",
      "Detalles nítidos en escudos automovilísticos con letras y laureles microscópicos.",
      "Logotipos con líneas finas Sobre telas difíciles Cómo chombas de piquEs el buzos frizados."
    ],
    "matrixParametersRelation": [
      "Calibre del hilo: el hilo fino calibre 60wt o 75wt aumenta la definición en un 50% Para detalles pequeños.",
      "Tamaño de aguja adecuado: aguja delgada 65/9 o 70/10 Para perforaciones microscópicas.",
      "Densidad adaptada: densidades de 0,35 mm Para hilos finos evitando apelmazamiento de puntadas."
    ],
    "commonErrors": [
      "Intentar bordar letras de menos de 4 mm con hilo estándar 40wt y aguja gruesa 90/14, empastando las letras.",
      "Bordar Sobre toallas o telas con por el sin film hidrosoluble, haciendo que las letras si hundan y queden invisibles.",
      "Falta de compensación de tirantez, haciendo que las letras finas si adelgacen hasta desaparecer."
    ],
    "troubleshootingTips": [
      "Para letras menores a 5 mm de altura, cambia siempre a hilo fino calibre 60wt y aguja 65/9: la nitidez será fotográfica.",
      "Usa siempre película plástica hidrosoluble Sobre telas con textura (piqué, toalla, terciopelo) Para que el bordado flote nítido Por encima.",
      "Aumenta la compensación de tirantez a 0,40 mm en letras pequeñas Para que no queden raquíticas."
    ],
    "whenToAdjust": "Optimiza la definición seleccionando hilos finos cada vez que un cliente te pida textos corporativos pequeños o detalles intrincados.",
    "dicaArtrelados": "El combo secreto de la micro-letra Artrelados: Si te encargan un uniforme con letras chiquitas de 4 milímetros, no sufras: pon en esa aguja un cono de hilo fino calibre 60wt y pon una aguja finita 65/9. Las letras saldrán tan nítidas, afiladas y claritas que parecerán escritas con una pluma estilográfica de oro. ¡Tus clientes no podrán creer la calidad!",
    "voceSabia": "¿Sabías que los billetes de banco bordados que si fabrican en Suiza Cómo obras de arte utilizan hilos microscópicos calibre 100wt con agujas número 55, logrando bordar microtextos de seguridad invisibles a simple vista que solo si leen con microscopio?",
    "practicalExercise": "Borda una palabra de 5 mm de alto con hilo estándar 40wt y aguja 75/11. Luego borda la misma palabra al lado con hilo fino 60wt y aguja 65/9: compara ambas con una lupa y descubre la asombrosa nitidez que aporta el hilo fino.",
    "quickSummary": "Claridad y nitidez visual con que si aprecian los detalles finos y letras gracias a la correcta combinación de aguja y hilo.",
    "summary": "Claridad y nitidez visual con que si aprecian los detalles finos y letras gracias a la correcta combinação de aguja y hilo.",
    "relatedTerms": [
      "Hilo de Poliéster Trilobal",
      "Compensación de Tirantez (Pull Compensation)",
      "Película Hidrosoluble Superior",
      "Defectos de Bordado y Diagnóstico de Fallas"
    ]
  },
  "d-042-deformacao-do-bordado": {
    "term": "Deformación del Bordado y Distorsión Textil",
    "level": "Intermedio 🟡",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del fenómeno físico de distorsión elástica multiaxial (Fabric Distortion & Puckering) bajo tensión dinámica de costura.",
    "definition": "Alteración geométrica indeseada que sufre el diseño o la tela durante el proceso de bordado (Cómo fruncimiento, efecto cuenco, ondulaciones o pérdida de simetría circular), provocada Por el desequilibrio Entre la fuerza de tracción del hilo, la falta de estabilidad de la entretela o una colocación inadecuada en el bastidor.",
    "howItWorks": [
      "1. Cada puntada tensada ejerce una micro-fuerza de tracción que tira de las fibras de la tela hacia el centro del objeto.",
      "2. Al acumularse miles de puntadas en la misma dirección, la tensión combinada supera la resistencia elástica del tejido.",
      "3. Si la entretela utilizada es insuficiente o si la tela fue estirada al enmarcar, el tejido si contrae formando ondas y arrugas.",
      "4. Un círculo perfecto si deforma en óvalo y las líneas rectas si curvan hacia adentro.",
      "5. El defecto si estabiliza de forma permanente impidiendo que la prenda quede lisa incluso tras el planchado."
    ],
    "beginnerExplanation": "Es cuando el bordado te queda 'arrugado Cómo una pasa de uva' o cuando un círculo te sale achatado Cómo un huevo. Pasa porque el hilo de bordar tira de la tela con mucha fuerza y, si la tela es blandita o no le pusiste la entretela correcta, la máquina la arruga y la deforma toda. Entender cómo evitar la deformación te asegura que todas tus prendas queden lisas y planas Cómo un cuadro.",
    "practicalExamples": [
      "Fruncimiento en remeras de jersey fino Por usar entretela de rasgar liviana en vez de entretela de cortar.",
      "Ondulación de los bordes de un escudo circular bordado en tela de piqué elástica.",
      "Efecto de 'taza o cuenco' en parches muy densos que si curvan hacia arriba al desbastarlos."
    ],
    "matrixParametersRelation": [
      "Compensación Push-Pull adecuada: ensanchar en el software la dirección del encogimiento y reducir en el sentido del empuje.",
      "Selección de entretela: entretelas de cortar (Cut-away) de al menos 70 a 80 g/m² reducen la deformación en un 90%.",
      "Reducción de densidad: densidades más abiertas (0,42 mm a 0,45 mm) reducen drásticamente la tracción total acumulada."
    ],
    "commonErrors": [
      "Tirar de la tela con las manos Para 'estirarla Cómo un tambor' al cerrar el bastidor, deformándola al liberarla.",
      "Usar una sola capa de entretela de rasgar barata en tejidos elásticos de algodón.",
      "Bordar todas las puntadas del diseño en la misma dirección angular sin variar los ángulos."
    ],
    "troubleshootingTips": [
      "Coloca la tela en el bastidor plana y relajada, sin estirar sus fibras con los dedos.",
      "Usa siempre entretela de cortar (Cut-away) Para cualquier tela que tenga elasticidad.",
      "Añade una base de soporte en cuadrícula doble en el software Para crear un plano rígido que frene la deformación."
    ],
    "whenToAdjust": "Modifica la entretela o reduce la densidad de la matriz si notas arrugas alrededor de las figuras bordadas.",
    "dicaArtrelados": "El tip de la tela relajada Artrelados Para el bastidor: Nunca estires la remera con las manos cuando estés ajustando el tornillo del aro. La tela debe quedar plana y sin arrugas, pero sin tensión elástica forzada. Si la estiras en el aro, cuando la saques de la máquina la tela volverá a su tamaño original Cómo una gomita y ¡tu bordado quedará arrugado Para siempre!",
    "voceSabia": "¿Sabías que los laboratorios textiles de la NASA midieron que un bordado de 10.000 puntadas acumula una fuerza de compresión combinada de más de 15 kilogramos de tracción continua Sobre el tejido?",
    "practicalExercise": "Borda un círculo de 4 cm en un retazo de remera elástica con entretela de rasgar estirando la tela en el aro; luego borda otro idéntico con entretela de cortar apoyando la tela sin estirar: compara el aro arrugado con el círculo perfecto.",
    "quickSummary": "Alteración y fruncimiento no deseado de la tela Por exceso de tensión del hilo o estabilización inadecuada.",
    "summary": "Alteración y fruncimiento no deseado de la tela Por exceso de tensión del hilo o estabilización inadecuada.",
    "relatedTerms": [
      "Compensación de Empuje y Tirantez",
      "entretela de Cortar (Cut-away)",
      "Densidad de Puntada y Espaciado Milimétrico",
      "Defectos de Bordado y Diagnóstico de Fallas"
    ]
  },
  "d-043-defeito-de-bordado": {
    "term": "Defectos de Bordado y Diagnóstico de Fallas",
    "level": "principiante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "De los manuales de control de calidad textil y análisis de causa raíz (Troubleshooting & Quality Assurance) en la industria del bordado.",
    "definition": "Cualquier imperfección visual, táctil o estructural no deseada que compromete la calidad estética o funcional del bordado, tales Cómo bucles de hilo en el frente (Looping), rotura frecuente de hilo, fruncimiento de la tela (Puckering), desalineación Entre relleno y contorno, manchas de aceite o marcas de bastidor (Hoop Burn).",
    "howItWorks": [
      "1. La bordadora inspecciona visualmente la prenda terminada o en proceso de costura.",
      "2. si identifica el síntoma específico (Por ejemplo, puntos blancos de canilla en el derecho o arrugas alrededor de las letras).",
      "3. si aplica el método de diagnóstico de los 5 factores: Máquina, Aguja, Hilo, entretela y Matriz.",
      "4. si aísla la causa raíz (Por ejemplo: tensión superior excesiva, aguja despuntada o falta de compensación de tirantez).",
      "5. si ejecuta la acción correctiva correspondiente y si valida el resultado con una costura de prueba Antes de continuar."
    ],
    "beginnerExplanation": "Es el arte de saber qué le pasa a tu máquina cuando las cosas no salen Cómo querías. Si el bordado te sale con pelotitas de hilo, si la tela si te arruga, si el contorno negro te queda corrido o si el hilo si corta a cada rato, no es mala suerte: siempre hay una razón clara. Aprender a diagnosticar estos defectos te da el poder de solucionar cualquier problema en cinco minutos con una sonrisa y sin desesperarte.",
    "practicalExamples": [
      "Corrección de bucles sueltos en el derecho aflojando la canilla / bobina o apretando el tensor superior.",
      "Eliminación de arrugas en remeras de algodón cambiando entretela de rasgar Por entretela de cortar pesada.",
      "Solución al corte continuo de hilo cambiando una aguja que tenía la punta despuntada."
    ],
    "matrixParametersRelation": [
      "Matriz vs. Mecánica: el 50% de los defectos provienen de una matriz mal digitalizada y el otro 50% de ajustes mecánicos o estabilización.",
      "Compensación Push-Pull deficiente: genera huecos Entre contorno y relleno.",
      "Densidad excesiva: provoca roturas de tela y rotura constante de agujas."
    ],
    "commonErrors": [
      "Tocar todas las perillas de la máquina a la vez sin saber cuál era el problema, descalibrando todo el equipo.",
      "Seguir bordando con la misma aguja vieja creyendo que las agujas duran Para siempre.",
      "Echarle la culpa al hilo cuando el problema era la falta de entretela adecuada en la prenda."
    ],
    "troubleshootingTips": [
      "Ante cualquier problema misterioso, el primer paso sagrado es: ¡CAMBIA LA AGUJA Y REVISA EL ENHEBRADO!",
      "Anota en tu libreta de ateliê qué causó cada falla Para recordarlo si vuelve a ocurrir.",
      "Examina el revés del bordado: el revés de la tela revela el 90% de los secretos de la tensión."
    ],
    "whenToAdjust": "Detén la máquina inmediatamente ante la primera siñal de un defecto visual Para corregirlo Antes de arruinar la prenda.",
    "dicaArtrelados": "El método de los 3 pasos Artrelados ante cualquier falla: Cuando un bordado te salga mal, no te enojes ni toques los tornillos. Haz estos tres pasos en orden: 1. Pon una aguja nueva de paquete. 2. Enhebra de vuelta todo el hilo de arriba con el prensatelas levantado. 3. Saca la canilla y límpiale las pelusas a la caja. ¡El 95% de los problemas de bordado del mundo si resuelven con esos 3 pasos simples!",
    "voceSabia": "¿Sabías que los inspectores de calidad de las fábricas de indumentaria deportiva de alta gama tienen una tabla con más de 40 códigos de defecto diferentes Para clasificar cualquier falla en una prenda bordada Antes de enviarla a las tiendas?",
    "practicalExercise": "Examina un bordado viejo que no te haya gustado cómo quedó: identifícalo con lupa buscando si tiene fruncido, bucles o contornos desfasados, y determina cuál de los 5 factores (aguja, hilo, entretela, tensión o matriz) fue el responsable.",
    "quickSummary": "Identificación metóconsejo y resolución de imperfecciones de costura, estabilización o digitalización en el bordado.",
    "summary": "Identificación metóconsejo y resolución de imperfecciones de costura, estabilización o digitalización en el bordado.",
    "relatedTerms": [
      "Deformación del Bordado y Distorsión Textil",
      "Control de Calidad Cero Defectos y Inspección Final",
      "Control y Regulación de la Tensión del Hilo",
      "Mantenimiento Preventivo Mecánico"
    ]
  },
  "d-044-discos-de-tensao": {
    "term": "Discos de Tensión Mecánica (Thread Tension Discs)",
    "level": "fundamental 🟢",
    "category": "Componentes de la Máquina",
    "grammarClass": "Sustantivo masculino composto.",
    "origin": "Del latín discus (disco plano circular) y tensio, -onis (ato de esticar, esforco de tración). Mecanismo de frenagem mecânica Por atrito contínuo desenvolvido en la primeira Revolución Industrial textil.",
    "summary": "Par de pratos concavos metálicos prensados Por mola helicoidal que aplica resistencia y calibra el fluxo del hilo superior.",
    "definition": "Los discos de tensao son dois pratos metálicos espelhados, de formato concavo-convexo montados face a face Sobre un eixo en el cabezal de la máquina de bordar. Pressionados Por una mola helicoidal calibrada Por un botao giratório micrométrico o solenoide eletronico, eles exercem una forca de compresión controlada Sobre a hilo superior según ela desliza Entre eles, garantindo que el hilo chegue a la aguja con a resistencia exata Para la formación de puntadas firmes y sin lazadas.",
    "technicalDetails": "Fabricados en aco inoxidável retificado o con revestimento cerâmico antiaderente. A forca de aperto varia de 80gf a 150gf Para hilos de poliéster 120/40wt. Inclui pino central de liberación que afasta los discos automaticamente cuando el prensatelas es levantado.",
    "beginnerExplanation": "Sao dois pratinhos de metal brilhantes que ficam escondidos dentro de la máquina y funcionan Cómo un 'freio' Para la hilo. Eles seguram a hilo nem muy apertada nem muy floja, garantindo que el bordado fique perfeito en la frente y en el revés.",
    "howItWorks": [
      "1. A hilo superior desce de la cenefa guia y es inserida en el vao Entre los dois pratos metálicos espelhados.",
      "2. A mola helicoidal aplica presión radial constante Sobre a face externa del disco móvel.",
      "3. El atrito de contato freia suavemente el desenrolar del hilo, gerando a tensao dinâmica necessária.",
      "4. al girar el dial numérico (o ajustar el valor digital en el painel), a mola es más comprimida (tensao maior) o aliviada (tensao menor)."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Passar a hilo con el prensatelas abaixado en máquinas domésticas, fazendo a hilo no entrar dentro de los discos y ficar totalmente solta",
      "Deixar fiapos de hilo y restos de cola acumulados Entre los discos, impedindo que los pratos fechem y gerando ninhos de hilo gigantes Por baixo de la pieza",
      "Apertar el botao de tensao atEs el limite máximo, arrebentando a hilo a cada 20 puntadas y franzindo el tejido / tela"
    ],
    "troubleshootingTips": [
      "siempre pase a hilo con el prensatelas totalmente LEVANTADO Para que los discos estejam abertos Para receber el hilo",
      "Limpe los discos passando un pedaco de hilo grossa dobrada o un hilo dental sin cera Entre los pratos Para remover penugens",
      "al passar a hilo, puxe-a con as duas maos Para frente y Para trás até sentir el clique y a resistencia firme de encaixe"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Para saber si a hilo entrou de verdade dentro de los discos de tensao en la sua máquina doméstica, segure a hilo perto del cone y puxe Por la ponta de la aguja: con el prensatelas levantado, a hilo debe correr soltinha; cuando voce abaixa a alavanca del prensatelas, a hilo precisa ficar pesada y firme en la hora!",
    "voceSabia": "En las máquinas industriais modernas multicabezal más avancadas, os tradicionais discos de tensao acionados Por mola fueron substituídos Por tensores digitais comandados Por servomotores magnéticos, que recalculam a presión de los discos puntada a puntada de acordo con el sentido del bordado.",
    "practicalExercise": "Con a máquina desligada y prensatelas levantado, passe a hilo en el cabezal. Abaixe el prensatelas y puxe a hilo en la ponta de la aguja Para sentir a resistencia: gire el botao de tensao del número 4 Para el número 2 y puxe novamente Para sentir a hilo más leve; gire Para el número 6 y sinta el hilo más pesado. Volte Para la regulagem estándar (3.5 a 4.0)!",
    "quickSummary": "Dispositivo mecânico de pratos metálicos concavos acionados Por mola que regula a resistencia y a tración del hilo superior.",
    "relatedTerms": [
      "Controle de Tensión del Hilo",
      "cenefa de Tensao de los hilos",
      "Brilho del hilo",
      "Bobbin Thread (hilo de la canilla)"
    ]
  },
  "d-045-desfiador-de-bordado": {
    "term": "Descosedor y Desmanchador de Puntadas (Seam Ripper & Stitch Eraser)",
    "level": "fundamental 🟢",
    "category": "Acessórios y Ferramentas",
    "grammarClass": "Sustantivo masculino composto.",
    "origin": "Del latín dis- + filum (desfazer los hilos tejidos / telas) y del inglés stitch eraser (apagador elétrico de puntadas). Ferramenta manual y elétrica indispensável de socorro en oficinas de bordado.",
    "summary": "Ferramenta manual o eletromecânica de corte de precisao utilizada Para cortar y remover puntadas de bordado sin danificar el tejido / tela base.",
    "definition": "El desfiador de bordado (desmanchador de puntadas o 'apagador de bordado' / stitch eraser) é una ferramenta manual dotada de ponta afiada y esfera de proteción, o un aparelho elétrico con micrólâminas oscilantes en aco inoxidável, desenvolvido Para cortar cirurgicamente a hilo inferior de la canilla / canilla / bobina en el revés de la pieza, permitindo a extración rápida de las puntadas de la frente sin cortar a trama del tejido / tela y sin furar a roupa.",
    "technicalDetails": "Versoes manuais: aco temperado con ponta fina curvada de 0.5mm y microesfera plástica vermelha de proteción. Versoes elétricas (Stitch Eraser): motor rotativo de 6.000 RPM con lâmina de precisao de 10mm a 15mm de largura, alimentado Por bateria recarregável.",
    "beginnerExplanation": "É a ferramenta 'salva-vidas' del atelie Para cuando a gente borda un nome con letra errada o erra a cor del hilo. Ela corta los pontinhos Por el lado de trás de la roupa con muy cuidado Para voce tirar as hilos sin rasgar el tejido / tela y sin furar a pieza del cliente.",
    "howItWorks": [
      "1. A pieza a ser corrigida es virada con el revés voltado Para cima Sobre una superfície plana y rígida.",
      "2. A lâmina del desfiador es passada suavemente solo Sobre las puntadas brancos del hilo de la canilla.",
      "3. una vez cortadas as lazadas inferiores, vira-si a pieza Para la frente.",
      "4. Con una pinca de atelie o fita adesiva larga, puxam-si as hilos superiores de la frente, que saem inteiras y sin esforco."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Tentar desmanchar el bordado cortando las puntadas Por la frente, picotando el tejido / tela y abrindo buracos irreparáveis en la roupa",
      "Apertar el desmanchador elétrico con forca excessiva contra el tejido / tela en lugar de deslizar suavemente Sobre as hilos",
      "Puxar hilos teimosos en la forca bruta sin Antes cortar as lazadas en el revés, repuxando a trama de la camisa"
    ],
    "troubleshootingTips": [
      "siempre desmanche Por el revés de la pieza cortando unicamente as hilos de la canilla",
      "Mantenha el tejido / tela bem esticado con as maos o preso levemente en un bastidor enquanto passa a lâmina",
      "después de retirar as hilos, passe el ferro a vapor con un paninho Por cima Para fechar los furinhos deixados Por la aguja"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Para tirar cualquier bordado en 2 minutos sin sofrimento: vire a pieza Por el revés, passe el desfiador elétrico o a lâmina manual solo en la hilo branca de la canilla / canilla / bobina. después, pegue un pedaco de fita crepe larga, cole Por cima de la frente del bordado y puxe: todos los hilos coloridos saem colados en la fita Cómo mágica!",
    "voceSabia": "El desmanchador de costura clássico de metal con una bolinha vermelha en la ponta fue patenteado en 1883. A bolinha vermelha serve exatamente Para ficar virada Para baixo encostada en el tejido / tela, deslizando suavemente Para impedir que a ponta afiada fure o rasgue el pano!",
    "practicalExercise": "Pegue un retazo con una letra bordada de teste: vire el retazo Por el revés y, con el desmanchador de puntadas, corte cuidadosamente as lazadas del hilo de la canilla. Vire Para la frente, passe una escovinha o fita adesiva y veja Cómo as hilos superiores si soltam perfeitamente sin danificar el tejido / tela!",
    "quickSummary": "Instrumento manual o elétrico de corte de precisao projetado Para seccionar as lazadas del revés y desmanchar bordados con seguridad.",
    "relatedTerms": [
      "Bobbin Thread (hilo de la canilla)",
      "Defeito de Bordado",
      "Correción de puntadas",
      "Pinca de Atelie"
    ]
  },
  "d-046-dinamica-da-lacada": {
    "term": "Dinámica de Formación de la Lazada (Loop Formation Dynamics)",
    "level": "Avanzado 🔴",
    "category": "Terminologia Geral",
    "grammarClass": "Sustantivo femenino composto.",
    "origin": "Del grego dynamikós (relativo a la forca y movimento mecânico) y del latín laqueus (laco, nó corredio). Teoria cinemática y tribológica de la formación del puntada tipo 301 (Lockstitch).",
    "summary": "Fenomeno cinemático de expansao de la folga del hilo superior en la subida de la aguja Para captura precisa Por la ponta del garfio.",
    "definition": "A dinâmica de la lazada es o fenomeno físico-mecânico que ocurre en el puntada morto inferior del ciclo de costura: tras a aguja atingir a profundidade máxima y iniciar sua subida (recuo de 1.5mm a 2.5mm), o atrito del hilo con el tejido / tela retarda el movimento del hilo, fazendo con que a hilo superior si descole de la cava de la aguja y si expanda lateralmente en forma de arco (lazada o loop), permitindo que a ponta afiada del garfio rotativa pase Por dentro desse arco y entrelace a hilo de la canilla.",
    "technicalDetails": "Altura de recuo crítico: 1.8mm a 2.2mm a partir del puntada Morto Inferior (PMI). A folga Entre a ponta del garfio y a cava de la aguja en el instante de la captura de la lazada debe ser calibrada Entre 0.05mm y 0.10mm (espessura de una folha de papel).",
    "beginnerExplanation": "É a mágica que sucede embaixo de la máquina: cuando a aguja fura el pano y comeca a subir un pouquinho, a hilo hace una 'barriguinha' (un laco). A ponta afiada del garfio passa Por dentro desse laco en un piscar de olhos y dá o nó con a hilo de baixo.",
    "howItWorks": [
      "1. A aguja desce con a hilo superior atravessando el tejido / tela, a entretela y el furo de la chapa de aguja.",
      "2. En el puntada más baixo, a hilo fica esticada rente a la canaleta longa de la aguja.",
      "3. A cenefa de aguja sobe 2mm; a inércia y el atrito con el tejido / tela impedem que a hilo suba en la misma velocidade.",
      "4. El excesso de hilo projeta-si Para fora de la cava traseira de la aguja, formando un laco oval aberto.",
      "5. A ponta del garfio rotativa entra exatamente en el centro desse laco, conduzindo a hilo superior al redor de la caja de canilla / canilla / bobina / portacanilla."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Colocar a aguja con a cava virada Para el lado errado, impedindo a formación de la lazada y fazendo a máquina pular todos las puntadas",
      "Bordar sin entretela en tejidos de punto, fazendo el tejido / tela subir junto con a aguja (flagging) y destruindo a abertura de la lazada",
      "garfio con folga excessiva (más de 0.20mm de distancia de la aguja), passando Por fora de la lazada sin lacar el puntada"
    ],
    "troubleshootingTips": [
      "si a máquina estiver pulando puntadas, verifique si a aguja está colocada con a cava virada exatamente Para trás o Para el lado del garfio",
      "Utilize agujas novas con geometria de canaleta profunda (Cómo Schmetz Embroidery o Groz-Beckert DBxK5)",
      "Garanta que el tejido / tela esteja perfeitamente estabilizado en el bastidor Para evitar que ele oscile verticalmente"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "A maior inimiga de la lazada perfeita es a entretela fraca o el bastidor flojo! cuando el tejido / tela fica flojo, ele sobe junto con a aguja y a lazada no abre embaixo de la chapa: o resultado son puntadas pulados y hilos desfiadas. Mantenha el tejido / tela esticado Cómo un tambor!",
    "voceSabia": "en una máquina de bordar funcionando a 1.000 puntadas Por minuto, o ciclo completo de descida de la aguja, formación de la lazada, captura Por la garfio y aperto Por el tirahilos ocurre en solo 60 milissegundos (0,06 segundos)!",
    "practicalExercise": "Con a tampa del garfio aberta y a máquina desligada, gire el volante manualmente devagar: observe a aguja descer atEs el fundo y comecar a subir. Veja con seus próprios olhos a 'barriguinha' de hilo si abrir del lado de la cava y a ponta del garfio entrar perfeitamente dentro dela!",
    "quickSummary": "Processo cinemático de expansao de la folga del hilo superior en el recuo de la aguja Para permitir a captura precisa Por la garfio.",
    "relatedTerms": [
      "Canoa de la canilla / canilla / bobina",
      "Barra de Aguja",
      "aguja de bordado",
      "puntada de Bordado"
    ]
  },
  "d-047-divisao-de-matriz": {
    "term": "División de Matriz y Multiposicionamiento en Bastidor (Design Splitting & Multi-Hooping)",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo femenino composto.",
    "origin": "Del latín divisio, -onis (ato de repartir, separar en partes) y matrix, -icis (molde gerador). Técnica computacional criada Para superar as limitaciones físicas de campo útil de los bastidores.",
    "summary": "Técnica de fragmentación de matrices / diseños gigantes en seciones sequenciais con marcas de registro Para bordados que excedem el tamanho del bastidor.",
    "definition": "A divisao de matriz / diseño (o técnica de multiposicionamento / design splitting) é o método Avanzado de engenharia de digitalización (ponchado) que consiste en particionar un desenho de grandes dimensoes en duas o más seciones menores interligadas, inserindo cruzetas de alinhamento y puntadas de registro precisos Para que cada parte seja bordada sucessivamente en múltiplos bastidoramentos en el tejido / tela sin desencontros visíveis.",
    "technicalDetails": "Executada a través de ferramentas de hilo de corte de divisao (Multi-Hoop Tool). Insere puntadas de registro (Alignment Crosshairs/Marks) de 3 a 5 puntadas rectas corridas en las puntadas de encontro Entre bastidores vizinhos, con tolerancia máxima de encaixe de 0.3mm.",
    "beginnerExplanation": "É o método inteligente de cortar un desenho bem grandao en dois o tres pedacos en el computador Para conseguir bordar en la sua máquina mismo que el seu bastidor seja pequeno. El programa cria marquinhas de cruzinha Para voce emendar as partes en el tejido / tela certinho sin ninguém notar a emenda!",
    "howItWorks": [
      "1. El desenho completo de grande porte (ex: 20x40cm) é carregado en el software de bordado.",
      "2. El digitalizador define a grade de bastidores virtuais sobrepostos cobrindo toda a área de la arte.",
      "3. As hilos de corte son tracadas a través de caminhos naturais (espacos vazios o bajo contornos de satin) Para ocultar as emendas.",
      "4. El software gera los archivos individuais numerados (Parte 1, Parte 2, Parte 3) con suas respectivas cruzetas de alinhamento.",
      "5. En el atelie, o operador borda a Parte 1 con a cruzeta de marcación, rebastidora el tejido / tela alinhando a cruzeta Por el laser o aguja y executa a Parte 2 perfeitamente encaixada."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Cortar a matriz / diseño en el meio de un preenchimento tatami macico, gerando una cicatriz visível en la emenda de las puntadas",
      "Rebastidorar el tejido / tela con ângulo torto en relación a las cruzetas de registro, fazendo a segunda metade sair inclinada",
      "no levar en consideración el repuxo del tejido / tela Entre a primeira y a segunda parte bordada"
    ],
    "troubleshootingTips": [
      "siempre planeje a hilo de divisao passando Por contornos, hilos vazias o bajo colunas de puntada satín",
      "Utilize agujas o alfinetes finos espetados exatamente en el centro de la cruzeta de alinhamento Para acertar a posición de la aguja en el según bastidor",
      "Utilize bastidores magnéticos o gabaritos de alinhamento Para facilitar el rebastidoramento reto"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Para acertar a emenda de matrices / diseños divididas con precisao de aguja: cuando a máquina bordar a cruzeta de la primeira parte, abaixe a aguja de la máquina en el centro exato de la cruzeta con el volante Antes de iniciar a segunda parte. A emenda fica 100% invisível a los olhos!",
    "voceSabia": "Softwares profissionais Cómo el Wilcom EmbroideryStudio calculam automaticamente el melhor caminho de divisao inteligente (Smart Split), evitando cortar objetos sólidos y camuflando las puntadas de emenda en las transiciones de cores naturais de la arte.",
    "practicalExercise": "En el seu software de bordado, pegue una matriz / diseño de 15x25cm y ative a ferramenta Multi-Hoop con bastidores 13x18cm: divida a matriz / diseño en duas etapas con cruzetas de registro automáticas. Exporte los dois archivos y visualize en el simulador Cómo as cruzetas servem de guia de encaixe perfeito!",
    "quickSummary": "Particionamento sistemático de matrices / diseños de grande porte en seciones sequenciais con marcas de registro Para bastidores menores.",
    "relatedTerms": [
      "bastidor Virtual",
      "Bordado en bastidor Expandido",
      "Bordado Contínuo",
      "desplazamiento de Origem"
    ]
  },
  "d-048-dupla-face-bordado-limpo": {
    "term": "Doble Faz y Bordado Limpio en el Revés (Reversible & Clean-Back Embroidery)",
    "level": "Intermedio 🟡",
    "category": "acabado & Finalización",
    "grammarClass": "Sustantivo femenino composto.",
    "origin": "Del latín duplus (duplo, que tiene dois lados) y facies (rosto, aspecto visual). estándar de excelencia de la alta costura y del ajuar de luxo internacional.",
    "summary": "Técnica de digitalización (ponchado) y costura con hilo de canilla / canilla / bobina coordenada Para produzir piezas donde el revés tiene acabado perfeito y apresentável.",
    "definition": "El bordado dupla face (o técnica del revés perfeito / clean-back embroidery) é o conjunto de procedimentos de digitalización (ponchado) y parametrización mecatronica planejado Para que el revés del bordado apresente estética impecável, sin hilos de salto aparentes, sin nós grosseiros y sin entretelas visíveis, utilizando hilos inferiores de la misma tonalidade del hilo superior o entretelas hidrossolúveis 100% laváveis.",
    "technicalDetails": "Utilización de hilo inferior de poliéster 60wt/70wt tingida en la misma cor exata del hilo del topo. Programación de caminhos de conexao contínuos Por puntada recta corrida bajo colunas de satin (eliminación de comandos Trim en el revés) y entretela hidrosoluble (wash-away) de 40g a 80g de fácil remoción.",
    "beginnerExplanation": "É a técnica Para deixar a parte de trás del bordado tao bonita y limpinha quanto a parte de la frente, usando hilo de la canilla de la misma cor del hilo de cima y entretela que derrete en la água, ideal Para toallas y mantinhas de bebe onde el revés fica aparecendo.",
    "howItWorks": [
      "1. A canilla / canilla / bobina es enchida previamente con a misma hilo colorida utilizada en el cabezal superior.",
      "2. El tejido / tela (toalla, manta, lenco) é estabilizado exclusivamente con entretela hidrosoluble (wash-away).",
      "3. A matriz / diseño es digitalizada con caminhos de costura inteligentes, escondendo los trajetos de desplazamiento bajo las puntadas satín.",
      "4. A tensao superior y inferior es rigorosamente equilibrada Para que a hilo no repuxe Para nenhum de los lados.",
      "5. Após el bordado, a pieza es lavada y el revés fica suave, con as mismas cores y sin resíduos ásperos."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Usar entretela desprendible (tear-away) común, deixando pedacos brancos de papel presos y duros en el verso de la toalla",
      "Usar hilo branca común en la canilla / canilla / bobina Para bordar desenhos escuros o coloridos en piezas dupla face",
      "Deixar pontas soltas de hilo sin corte automático rente en el revés"
    ],
    "troubleshootingTips": [
      "Enrole canillas / bobinas con a misma hilo de bordar superior Para cada cor predominante del desenho",
      "Substitua todas as entretelas de papel Por entretela hidrosoluble (wash-away) solúvel en água morna",
      "Calibre a tensao de la canilla / canilla / bobina Para ficar perfeitamente neutra en relación a la tensao superior"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Para pañales de tela de bebe y toallas de luxo: use siempre hilo de la misma cor en la canilla / canilla / bobina y entretela hidrosoluble (wash-away). al final, passe un paninho úmido en el revés y corte los fiapos con tijera de remate / puntada de seguridad curva: o revés fica tao lindo y suave que a cliente no sabe dizer qual es a frente y qual es o verso!",
    "voceSabia": "En la tradición del bordado chines imperial de Xiang y Suzhou, o bordado dupla face manual era considerado o ápice supremo de la arte textil: os mestres artesaos conseguiam bordar un gato de olhos abertos en la frente y un tigre feroz en el verso de la misma seda transparente.",
    "practicalExercise": "Encha una carretilha con hilo de poliéster vermelha y coloque el mismo cone vermelho en el cabezal. Monte un pedaco de lino con entretela hidrosoluble (wash-away) y borde una flor en puntada satín. Lave a amostra en água morna y veja Cómo el revés fica incrivelmente limpo, suave y de la misma cor de la frente!",
    "quickSummary": "Método de produción con hilo de canilla / canilla / bobina combinando y entretela hidrosoluble (wash-away) Para gerar bordados con revés impecável.",
    "relatedTerms": [
      "Bobbin Thread (hilo de la canilla)",
      "entretela hidrosoluble (wash-away)",
      "Corte Automático de hilo",
      "Controle de Tensión del Hilo"
    ]
  },
  "d-049-debrum-bordado": {
    "term": "Ribete Bordado y Festón de Sellado Perimetral",
    "level": "Intermedio 🟡",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del francés bordure y del término técnico Bound Edge / Appliqué Overcasting utilizado Para sellar los bordes de parches y ribetes textiles.",
    "definition": "Cordón continuo y tupido de puntada satín o festón reforzado con una base de pespuntes en ambos márgenes (Double Edge Underlay), diseñado Para coserse montado Sobre el borde vivo cortado de un aplique, parche o dobladillo, encapsulando y abrazando completamente las fibras deshilachadas Para crear un marco pulido, limpio y resistente al roce.",
    "howItWorks": [
      "1. La máquina ejecuta primero una línea guía de corte o posicionamiento Para el material a ribetear.",
      "2. si recorta la tela sobrante a ras dejando el borde cortado expuesto.",
      "3. La matriz inicia el ribete bordando una costura de soporte doble que recorre ambos bordes del corte.",
      "4. La columna de satín avanza perpendicularmente: una penetración clava en la tela y la opuesta clava en el vacío o Sobre la entretela base.",
      "5. El hilo abraza la orilla cortada comprimiendo las fibras sueltas dentro de un tubo cilíndrico liso y brillante.",
      "6. El acabado final sella el perímetro evitando que los lavados mecánicos deshilachen el contorno."
    ],
    "beginnerExplanation": "Es el clásico borde grueso y prolijo que tienen los escudos y parches bordados en todo su contorno. Imagina que cortaste una tela con tijera y le quedan pelitos sueltos en la orilla: este ribete es un cordón tupido de puntada satín que cose 'abrazando' ese borde cortado, tapando todos los pelitos y dejándolo liso, redondeado y con un marco brillante hermoso que Nunca si deshilacha.",
    "practicalExamples": [
      "Sellado perimetral de escudos bordados Para camisetas deportivas y uniformes escolares.",
      "Terminación de bordes en toallas y servilletas de gala con festón decorativo festoneado.",
      "Ribeteado de parches con forma de escudo militar Antes de aplicar termoadhesivo."
    ],
    "matrixParametersRelation": [
      "Ancho de columna seguro: calibrado Entre 3,0 mm y 4,5 mm Para encapsular holgadamente el borde cortado.",
      "Compensación de tirantez (Pull Compensation): incremento de 0,40 mm a 0,50 mm Para evitar que el jale del hilo retraiga el satín hacia adentro.",
      "Densidad de sellado: densidad compacta de 0,38 mm a 0,40 mm Para garantizar cobertura total de los filamentos cortados."
    ],
    "commonErrors": [
      "Digitalizar un ribete muy estrecho (menos de 2 mm), haciendo que los pelitos de la tela cortada si asomen Cómo barba Por fuera del hilo.",
      "No colocar soporte de borde en el exterior, provocando que las puntadas caigan de forma irregular en el aire.",
      "Cortar la tela de aplique demasiado lejos de la costura guía, dejando excedentes que no caben dentro del cordón de satín."
    ],
    "troubleshootingTips": [
      "Recorta la tela del parche a menos de 1 mm de la costura de fijación previa Antes de iniciar el ribete de satín.",
      "Usa una aguja de punta de bola pequeña (SES) si el ribete si borda Sobre telas de punto Para no troquelar el borde.",
      "Aplica un ligero sellado térmico con encendedor en telas sintéticas Antes de bordar el ribete Para máxima prolijidad."
    ],
    "whenToAdjust": "Aumenta el ancho del ribete si notas que la tela de base si deshilacha con facilidad o tiene hilos gruesos.",
    "dicaArtrelados": "El tip de la tijera pelícano Artrelados Para ribetes: Para que tu ribete de satín quede limpio Cómo hecho Por una máquina láser de fábrica, corta la tela de tu parche usando una tijera de pelícano apoyando la parte ancha Sobre la costura. Cortarás a medio milímetro exacto de la guía sin peligro de cortar la entretela: al pasar el satín Por encima, ¡no si asomará ni un solo hilito rebelde!",
    "voceSabia": "¿Sabías que los primeros ribetes bordados a máquina fueron creados en Suiza a finales del siglo XIX en máquinas pantógrafo Schiffli Para imitar los carísimos encajes de bolillos de la nobleza europea?",
    "practicalExercise": "Dibuja un círculo de 5 cm en tu software con una columna de satín perimetral de 3,5 mm de ancho con soporte doble de borde. Bórdalo Sobre sarga y recorta la tela: comprueba cómo el cordón encapsula perfectamente el borde cortado sin dejar hilos visibles.",
    "quickSummary": "Cordón de satín tupido que abraza y encapsula los bordes vivos cortados de telas y parches evitando el deshilachado.",
    "summary": "Cordón de satín tupido que abraza y encapsula los bordes vivos cortados de telas y parches evitando el deshilachado.",
    "relatedTerms": [
      "Borde Sellado Por Láser y Corte Térmico de Emblemas",
      "Columna de Puntada Satín",
      "Bordado con Aplicación de Telas",
      "Esquinas en Inglete y Vértices Vivos"
    ]
  },
  "d-050-degrade-de-pontos": {
    "term": "Degradado de Puntadas y Fusión de Color",
    "level": "Avanzado 🔴",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "De la técnica artística de tramado pictórico Stitch Gradient & Color Blending desarrollada Para emular sombras y transiciones cromáticas continuas.",
    "definition": "Técnica avanzada de digitalización computarizada donde si superponen dos o más capas de puntadas tatami o satín con densidades progresivamente decrecientes y entrelazadas Entre sí, alternando los ángulos y penetraciones de aguja Para lograr una transición visual suave, gradual y sin saltos abruptos Entre dos conos de hilo de diferente color.",
    "howItWorks": [
      "1. El primer color si digitaliza con una densidad variable graduada (Por ejemplo: densa de 0,40 mm al inicio y abriéndose hasta 1,8 mm al final).",
      "2. El según color si digitaliza en sentido inverso, comenzando abierto a 1,8 mm y cerrándose hasta 0,40 mm.",
      "3. Las puntadas del según color penetran en los espacios vacíos dejados Entre los filamentos del primer color.",
      "4. El ojo humano a cierta distancia integra ópticamente ambos tonos de hilo Cómo una mezcla de color continua.",
      "5. Permite simular efectos de volumen 3D, atardeceres, fuego, agua en movimiento o sombras fotorealistas en el bordado."
    ],
    "beginnerExplanation": "Es la técnica mágica Para pasar de un color a otro suavemente sin que si note una raya dura en el medio, igual que cuando en un dibujo pasas del amarillo al naranja y luego al rojo Cómo en una puesta de sol. La máquina borda el primer color y va separando las puntaditas de a poco; luego borda el según color metiendo sus puntadas en el medio de las anteriores. De lejos si ve un degradado suave y perfecto que parece pintado con acuarela.",
    "practicalExamples": [
      "Transición cromática de amarillo a rojo fuego en las llamas de un logotipo de competición.",
      "Degradados de azul marino a celeste cielo en logotipos de empresas náuticas y aerolíneas.",
      "Sombreado tridimensional y volumen hiperrealista en los pétalos de flores y pelaje de animales."
    ],
    "matrixParametersRelation": [
      "Perfil de densidad variable (Gradient Profile): lineal, exponencial o gaussiano según la suavidad del fundido deseado.",
      "Desfase angular leve: orientar ambas capas con una diferencia angular de 5° a 10° Para facilitar la penetración sin apelmazamiento.",
      "Longitud de puntada uniforme: mantener longitudes de 3,5 mm a 4,5 mm Para evitar quiebres de textura."
    ],
    "commonErrors": [
      "Superponer dos capas al 100% de densidad sin abrir el espaciado, creando una placa dura y impenetrable que rompe agujas.",
      "Hacer la zona de transición demasiado estrecha (menos de 5 mm), viéndose Cómo dos bloques duros cortados a cuchillo.",
      "Usar colores con contraste lumínico extremo (blanco puro Sobre negro) sin tonos intermedios de transición."
    ],
    "troubleshootingTips": [
      "Utiliza la herramienta 'Color Blending' (Mezcla de color) o 'Acordeón de densidad' de tu software Para calcular el degradado automático.",
      "Para transiciones extremas, utiliza un tercer color intermedio Para suavizar la rampa cromática.",
      "Borda muestras de prueba en retazos: los degradados siempre si ven mucho más suaves en la tela real que en la pantalla de la computadora."
    ],
    "whenToAdjust": "Aplica degradados de puntada cada vez que digitalices paisajes, rostros, llamas o efectos de brillo metalizado realista.",
    "dicaArtrelados": "El tip del ángulo de 7 grados Artrelados Para degradados: Cuando mezcles dos colores de hilo Para hacer un degradado, no los bordes en el mismo ángulo exacto: pon el primer color a 45 grados y el según a 52 grados (solamente 7 grados de diferencia). Al tener esa inclinación sutil, las agujas del según color Nunca chocarán contra las puntadas de abajo y los hilos si mezclarán con una suavidad tan perfecta que parecerá magia.",
    "voceSabia": "¿Sabías que esta técnica de mezcla óptica de puntadas está inspirada en la corriente artística del 'Puntillismo' de Georges Seurat en 1886 en París, donde diminutos puntos puros de pintura puestos uno al lado del otro eran mezclados directamente Por la retina humana?",
    "practicalExercise": "Crea dos rectángulos solapados de 40x20 mm en tu software: uno amarillo y uno rojo. Aplica la herramienta de densidad degradada en la zona de solape: borda la muestra y admira cómo en el centro nace un naranja vibrante creado Por la mezcla óptica de ambos hilos.",
    "quickSummary": "Superposición de capas de puntadas con densidad decreciente Para lograr transiciones suaves y sombras continuas.",
    "summary": "Superposición de capas de puntadas con densidad decreciente Para lograr transiciones suaves y sombras continuas.",
    "relatedTerms": [
      "Colores y Selección Cromática de Hilos",
      "Puntada Tatami (Tatami Stitch)",
      "Densidad de Puntada y Espaciado Milimétrico",
      "Software de Ponchado y Digitalización"
    ]
  }
};

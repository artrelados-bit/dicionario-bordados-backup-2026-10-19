import { Verbete } from "../types";

export const VERBETES_LETTER_D_LOTE3_ES: Record<string, Partial<Verbete>> = {
  "d-051-deslocamento-do-pantografo": {
    "term": "Desplazamiento del Pantógrafo y Cinemática del Carro",
    "level": "fundamental 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del grego pan (todo, todo) y graphein (escrever, desenhar). Sistema cinemático de bracos mecânicos articulados inventado Por Christoph Scheiner en 1603 y eletrificado en la automación textil en los anos 1970.",
    "summary": "Movimento mecatronico bidimensional en los ejes X y Y que posiciona el bastidor a cada pulso de rotación del cabezal de costura.",
    "definition": "El desplazamiento del pantógrafo es el movimiento mecatrónico sincronizado ejecutado por el carro del pantógrafo de bastidores a lo largo de los ejes cartesianos ortogonais X (movimiento lateral) y Y (movimiento longitudinal), acionado Por servomotores de passo de alta resolución y correias dentadas de precisión, responsável Por transladar el bastidor con el tejido / tela Para las coordenadas exatas de la próxima penetración de la aguja durante el intervalo en que a aguja está fora del tejido / tela.",
    "technicalDetails": "Acionado Por servomotores digitais AC con encoders ópticos de 10.000 pulsos Por volta. Desloca-si en una janela temporal de solo 25 a 35 milissegundos Por ciclo de puntada a velocidades lineares de até 1.500mm/s con precisión posicional repetible de Â±0.05mm.",
    "beginnerExplanation": "É o movimiento que el brazo mecánico de la máquina hace llevando el bastidor a la izquierda, derecha, adelante y atrás con gran rapidez mientras la aguja sube y baja, desenhando el bordado en la tela con absoluta precisión.",
    "howItWorks": [
      "1. A placa controladora de la máquina decodifica as coordenadas X/Y del próximo puntada de la matriz / diseño.",
      "2. cuando a aguja sobe y sai completamente del tejido / tela (atingindo o ângulo de seguridad de 100° del ciclo de rotación), o comando de movimiento es disparado.",
      "3. Los servomotores tracionam as correias dentadas, movimentando el braco del pantógrafo con el bastidor acoplado.",
      "4. El bastidor chega y Para exatamente en la nova coordenada milissegundos Antes de la aguja descer novamente.",
      "5. A aguja penetra el tejido / tela estabilizado, reiniciando el ciclo cinemático contínuo."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Segurar o esbarrar a mao en el braco del pantógrafo mientras la máquina está bordando, fazendo el motor perder el passo y desalinhando el diseño todo",
      "Deixar objetos pesados (tijeras, cones de hilo, tejidos / telas caídos) Sobre a mesa atrás del pantógrafo, travando el percurso mecánico",
      "Bordar sin verificar si a área al redor de la máquina está livre de obstáculos en los ejes X y Y"
    ],
    "troubleshootingTips": [
      "Mantenha a mesa y as guias lineares del pantógrafo siempre limpas de poeira textil y lubrificadas según el manual",
      "si el bordado comecar a sair torto en escadinha, verifique a tensao de las correias dentadas del pantógrafo",
      "Nunca empurre el carro del pantógrafo con la máquina ligada Para no forcar los servomotores"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Deixe siempre una folga livre de Por el menos 20 centímetros en volta de toda a sua máquina de bordar! una tijera esquecida o un casaco pendurado perto del braco móvel del pantógrafo puede travar el carro y hacer el bordado perder el prumo en el meio de la pieza!",
    "voceSabia": "En las máquinas industriais multicabezal con 20 cabezales, o pantógrafo es una estrutura de aco con más de 10 metros de longitud que pesa centenas de quilos, pero que consegue si mover, parar y estabilizar con precisión milimétrica más de 15 vezes Por según!",
    "practicalExercise": "Con la máquina ligada y en modo de teste, acione as setas manuais del painel Para movimentar el pantógrafo en los quatro extremos (X+, X-, Y+, Y-): repare en la suavidade del desplazamiento de los ejes y veja Cómo el brazo mecánico responde instantaneamente a cada comando!",
    "quickSummary": "Translación mecatronica en los ejes X y Y controlada Por servomotores que posiciona el bastidor a cada subida de la aguja.",
    "relatedTerms": [
      "Carro de la Máquina de Bordado",
      "Tracado de Área",
      "desplazamiento de Origem",
      "Controle de Velocidade"
    ]
  },
  "d-052-desbobinamento-de-linha-e-sentido-do-fio": {
    "term": "Desbobinado del Hilo y Sentido del Devanado",
    "level": "fundamental 🟢",
    "category": "Agujas y Hilos",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del prefixo des- (separación, liberación) y del francés bobine (carrete cilíndrico). Princípio de la física textil que rege el comportamento rotacional y a torción intrínseca de las hilos durante a alimentación de la máquina.",
    "summary": "Comportamento dinâmico de liberación del hilo del cone (enrolamento cruzado Para cima) versus carrete pequeno (alimentación lateral deitada) que previne nós y torciones.",
    "definition": "El desbobinamento de hilo (Thread Delivery & Unwinding Dynamics) é o processo físico Por el cuál el filamento de poliéster, viscose o hilo metálico es liberado de la sua embalagem primária (cone grande de 4.000m o carrete pequeno de 1.000m) en direción a los tensores de la máquina de bordar (Brother, Janome, Bernina/Bernette y Sun Special). Los cones industriais grandes poseen enrolamento cruzado en 'X' (Cross-Wound), projetados Para ficar parados en la vertical y desenrolar a hilo Para CIMA Por una vástago / cabo alta; já os carretes pequenos poseen enrolamento paralelo reto (Stacked-Wound), devendo girar deitados en un pino horizontal con prendedor de carrete.",
    "technicalDetails": "si un cone grande de enrolamento cruzado sea colocado deitado en el pino horizontal, a hilo sofre acúmulo de torción (Kinking / Twist) a cada volta, gerando 'espirais' que travam en los pratinhos tensores y quebram a hilo. Cones de 4.000m exigem alimentación vertical con mastro elevado a Por el menos 30cm.",
    "beginnerExplanation": "É o jeito certo que a hilo debe sair del carrete Para la máquina. Cones grandoes de 4.000m deben permanecer en pé paradinhos con a hilo subindo Para el alto Por un ferrinho; já os carretes pequenos deben ficar deitados en el pino de la máquina. Usar el jeito certo evita que a hilo fique dando lacos, embolando o quebrando toda hora!",
    "howItWorks": [
      "1. A bordadora identifica el formato del suporte de hilo: si es cone conico grande (4.000m) o carrete reto pequeno (1.000m).",
      "2. Para el cone grande: instala-o en la base porta-cones vertical con el mastro alto esticado.",
      "3. A hilo desenrola Para el alto Por el topo del cone con el carrete 100% parado y sin atrito.",
      "4. Para carretes retos pequenos: instala-o en el pino horizontal de la máquina y coloca el prendedor de carrete (tampa plástica) del tamanho correto.",
      "5. A hilo entra en el circuito de la máquina con tensao suave y linear.",
      "6. A formación del puntada ocurre sin trancos, sin quebras y sin nós en el meio de la costura."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Colocar el cone grande de 4.000m deitado en el pino horizontal original de la máquina Brother o Janome, travando el cone y estourando a hilo",
      "Usar carrete pequeno sin el disco prendedor de plástico, fazendo el carrete pular Para fora del pino durante el bordado",
      "Usar prendedor de carrete muy maior que el próprio carrete, fazendo a hilo enganchar en la borda del plástico a cada volta"
    ],
    "troubleshootingTips": [
      "Para carretes pequenos deitados, escolha siempre una tampinha de carrete que tenha el mismo diâmetro o seja ligeiramente menor que a borda del carrete",
      "Para cones grandes en pé, mantenha el ferrinho de la torre de hilo siempre bem esticado Para el alto",
      "si a hilo estiver saindo en espirais apertadas parecendo un 'rabinho de porco', coloque una redinha de proteción en el cone"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "A hilo vive quebrando y voce já trocou a aguja 3 vezes? Olhe Cómo el carrete está en la máquina! si sea cone grande, ele tiene que desenrolar Para CIMA en la torrinha vertical; si sea carrete pequeno, ele tiene que girar deitado con a tampinha plástica certa. Acerte a posición y a quebra de hilo acaba en la hora!",
    "voceSabia": "al desenrolar un cone de bordado de 4.000 metros deitado, a hilo ganha más de 10.000 voltas extras de torción Sobre si misma, o que cria una forca elástica invisible capaz de arrebentar el hilo más resistente!",
    "practicalExercise": "Pegue un cone grande de 4.000m y puxe 1 metro de hilo Para el lado: solte a ponta y veja Cómo el hilo si enrola en si mismo dando nós. ahora puxe 1 metro de hilo Para CIMA: solte y veja Cómo el hilo cai perfeitamente liso y esticado!",
    "quickSummary": "Dinâmica correta de liberación del hilo (vertical Para cones grandes y horizontal Para carretes) que previne torciones y quebras.",
    "relatedTerms": [
      "Base de Cones y Porta-carrete Vertical",
      "Armazenamento de hilos y Cones",
      "Ajuste de Tensión del Hilo",
      "Quebra de hilo superior"
    ]
  },
  "d-053-dispositivo-de-bone-para-maquinas-domesticas": {
    "term": "Dispositivo de Gorras Para Máquinas Domésticas y Semi-Industriales",
    "level": "Intermedio 🟡",
    "category": "bastidores & Fixación",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del latín dispositivus (aparato mecánico adaptado) y del francés bonnet (sombrero, touca). Acessório de fixación desarrollado Para adaptar el movimiento cartesiano plano a las superfícies curvas de gorras.",
    "summary": "Acessório mecánico curvo con presilhas de aba y entretela rígida que permite bordar en la frente curva de gorras estruturados en máquinas de 1 aguja.",
    "definition": "El dispositivo de boné Para máquinas domésticas y semi-industriais (Cap Frame Insert / Hat Hoop Attachment) é un acessório mecánico especializado compatível con bastidores convencionais y pantógrafos de máquinas de 1 aguja (Brother BP/PE/NV, Janome MC500E/550E, Bernina y Sun Special). É compuesto Por una placa de fixación con mola de retención Para la aba del boné, grampos laterais y gabarito curvo que mantém a copa frontal del boné aberta, esticada y estabilizada Sobre entretela pesada o adesiva, permitindo que a aguja borde logotipos y nomes en superfícies tridimensionais sin deformar a pieza.",
    "technicalDetails": "Área útil de bordado en máquinas domésticas de 1 aguja: cerca de 10x6cm a 13x8cm (delimitada Por la curvatura de la copa y folga del prensatelas). Exige rotación de la matriz / diseño en 180° en el painel de la máquina y desativación de bordados en el topo de la aba.",
    "beginnerExplanation": "É una pecinha o bastidor especial con garras de presión que serve Para prender a aba del boné bem firme y abrir a parte de la frente dele lisinha, Para voce conseguir bordar gorras en la sua máquina de casa sin amassar el sombrero y sin bater a aguja en la aba dura.",
    "howItWorks": [
      "1. A bordadora desdobra a carneira (fita interna de suor) del boné Para fora.",
      "2. Aplica entretela grossa de boné (rasgável pesada de 80g o autoadesiva) en el verso de la frente del boné.",
      "3. Encaixa a aba del boné en el grampo central del dispositivo de boné y aperta a mola de bloqueo.",
      "4. Estica as laterais de la copa del boné prendendo con los grampos elásticos en las bordas del aro.",
      "5. Encaixa el bastidor en el pantógrafo de la máquina garantindo que a aba fique apontada Para fora.",
      "6. Gira a matriz / diseño en el painel de la máquina de cabeca Para baixo (180°) y executa o 'Trace' (tracado de área).",
      "7. La máquina borda el logotipo centralizado con precisión en la curvatura del boné."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Bordar sin rebater a carneira interna del boné, costurando el forro de suor fechado Por engano",
      "Esquecer de girar a matriz / diseño en 180° en la tela de la máquina, fazendo el bordado sair de cabeca Para baixo en el boné",
      "Bordar muy perto de la costura central de la aba, quebrando a aguja en el reforco de plástico rígido del boné"
    ],
    "troubleshootingTips": [
      "Faca siempre el tracado de área (Trace) en la tela de la máquina Para ter certeza absoluta de que el pé prensatelas no va encostar en la aba del boné",
      "Use aguja más grossa y resistente (calibre 90/14 ponta agucada o de Titânio) Para furar a sarja dura y a entretela del boné",
      "Reduza a velocidad de la sua máquina Brother o Janome Para 450 - 550 PPM al bordar gorras Para máxima seguridad Mecánica"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Quer pegar encomendas lucrativas de gorras en la sua máquina de bordar caseira? Use el bastidor/dispositivo de boné con entretela firme de 80g, dobre a fita de dentro del boné Para fora y disminuya a velocidad de la máquina Para 500 PPM: seus gorras vao sair lindos, retinhos y con acabado de loja!",
    "voceSabia": "Los gorras profissionais poseen una entretela interna plástica chamada 'buckram'; en máquinas industriais usam-si bastidores circulares giratórios de 270°, pero los dispositivos planos Para máquinas caseiras conseguem hacer a frente completa del boné con perfeición!",
    "practicalExercise": "Pegue un boné promocional y vire a fita de suor interna Para fora: posicione-o Sobre una hoja de entretela adesiva presa en el bastidor de la sua máquina y prenda a aba con un grampo de presión; gire a matriz / diseño en 180° en la tela y faca el tracado de área Para ver Cómo a aguja passeia perfeitamente en la frente del boné!",
    "quickSummary": "Acessório con presilhas de aba que estabiliza a copa de gorras y viseras Para bordar en máquinas de 1 aguja.",
    "relatedTerms": [
      "Adaptador de bastidor de gorras / Dispositivo Cap Driver",
      "Bastidor de Bordado",
      "aguja de Titânio",
      "Bordado en Alto Relevo con EVA / 3D Puff"
    ]
  },
  "d-054-dupla-entretela-estabilizacao-em-camadas": {
    "term": "Doble entretela y Estrategia de Estabilización en Capas",
    "level": "fundamental 🟢",
    "category": "estabilizadores & entretelas",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "Del latín duplus (duplicado, reforcado) y del francés entoilage (tejido / tela interno de reforco estrutural). Técnica de ingeniería de estabilización textil criada Para controlar el fruncimiento en matrices / diseños de alta densidade.",
    "summary": "Uso estratégico de dos camadas de entretela (sobrepostas con sentidos de corte cruzados a 90°) Para impedir deformaciones en matrices / diseños pesadas.",
    "definition": "A dupla entretela (Double Layering Stabilizer Technique) é a metodologia fundamental de estabilización donde dos hojas de entretela de bordado (geralmente rasgáveis de 40g a 60g, o una camada de tejido de punto recortável combinada con una rasgável) sao aplicadas bajo el tejido / tela en el bastidor. A chave de la técnica consiste en cruzar el sentido de las fibras no-tecidas de las dos hojas a un ângulo de 90° (una hoja en el sentido vertical y outra en el horizontal), criando una barreira bidirecional indeformável que anula completamente as forcas de tracción del puntada satín y del puntada tatami / relleno.",
    "technicalDetails": "As entretelas no-tecidas poseen maior resistencia en una direción (sentido longitudinal de la máquina de fabricación). al sobrepor dos hojas con los sentidos cruzados a 90°, a resistencia a la deformación Mecánica aumenta en más de 300% con ganho mínimo de grosor.",
    "beginnerExplanation": "É usar dos hojas de entretela juntas embaixo del tejido / tela al invés de una só, colocando una hoja 'en pé' y a outra 'deitada' cruzadas. Isso deixa a base bem firme y forte, impedindo que desenhos grandes y cheios de puntadas enruguem a roupa o furem a entretela Antes del bordado terminar.",
    "howItWorks": [
      "1. A bordadora avalia a matriz / diseño: si ela posee más de 15.000 puntadas, áreas grandes de puntada tatami / relleno o contornos finos Sobre fundo cheio.",
      "2. Corta dos hojas de entretela desprendible (tear-away) de 50g.",
      "3. Gira a segunda hoja a 90 graus en relación a la primeira (cruzando as tramas de fibra).",
      "4. Monta as dos hojas juntas en el bastidor bajo el tejido / tela.",
      "5. La máquina de bordar (Brother, Janome, Bernina o Sun Special) executa el bordado denso.",
      "6. As dos camadas sustentam as milhares de agulhadas sin rasgar prematuramente y sin deixar el tejido / tela franzir.",
      "7. En el final, as dos hojas son rasgadas facilmente, una de cada vez, deixando el revés limpo y el tejido plano."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Colocar solo una hoja de entretela fina de 30g en un bordado de 25.000 puntadas, fazendo a entretela rasgar en el meio del bordado y estragar a pieza",
      "Usar dos hojas de entretela recortável muy grossa en pañal de tela de bebe, deixando el revés duro Cómo una tábua de madeira",
      "Rasgar as dos camadas de entretela de una só vez tirando con forca, esticando las puntadas del bordado"
    ],
    "troubleshootingTips": [
      "Para toallas de baño y panos de prato con matrices / diseños cheias, 2 camadas de entretela desprendible (tear-away) de 50g cruzadas es a fórmula del sucesso garantido",
      "Para bodies de bebe y remeras de tejido de punto, use 1 camada de entretela de tejido de punto recortável colada en el ferro + 1 camada de entretela desprendible (tear-away) Por baixo en el bastidor",
      "al retirar a entretela en el final, rasgue siempre una hoja de cada vez apoiando los dedos rente a las puntadas"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "El contorno de su bordado está saindo fora del lugar o el tejido / tela está ficando enrugado en volta del desenho? En la próxima pieza, coloque 2 hojas de entretela desprendible (tear-away) cruzadas en el bastidor: o tejido / tela queda esticado Cómo una tela de pintura y el contorno fecha en el milímetro exato!",
    "voceSabia": "Usar dos entretelas médias de 50g cruzadas es muy más eficiente Para evitar enrugamento del que usar una única entretela super grossa de 100g, porque el cruzamento de las fibras a 90° bloqueia el fruncimiento en todas as direciones!",
    "practicalExercise": "Rasgue una hoja de entretela con as maos en el sentido del longitud (veja Cómo rasga fácil); ahora tente rasgar en el sentido de la ancho (veja Cómo es más resistente). ahora junte dos hojas cruzadas y tente rasgar: sinta a forca y estabilidade incrível dessa dupla!",
    "quickSummary": "Uso de dos camadas de entretela sobrepostas con fibras cruzadas a 90° Para máxima sustentación en matrices / diseños densas.",
    "relatedTerms": [
      "Backing",
      "compensación de tirantez",
      "Alinhamento de Contorno",
      "Bastidoramento"
    ]
  },
  "d-055-dente-do-calcador-e-altura-de-flutuacao": {
    "term": "Diente del Prensatelas y Altura de Flotación",
    "level": "Intermedio 🟡",
    "category": "Mecánica y Ajustes",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del latín dens (saliencia de apoio mecánico) y fluctuare (mover-si en suspensao suave). Parâmetro mecánico de tolerancia vertical del pé prensatelas pulsante de bordar.",
    "summary": "Espacamento milimétrico calibrado (0.5mm a 1.5mm) Entre a base del pé prensatelas y el tejido / tela en el puntada morto inferior Para evitar el esmagamento de la pieza.",
    "definition": "El diente del prensatelas y altura de flutuación (Hopping Foot Clearance / Presser Foot Height) é a distancia milimétrica livre existente Entre a sola circular del pé prensatelas de bordar (prensatelas pula-pula) y a superfície del tejido / tela cuando a cenefa de la aguja atinge el puntada morto inferior (fundo de la descida). En las máquinas de bordar modernas (Brother séries BP/Innov-is, Janome MC, Bernina y Sun Special), essa altura puede ser regulada eletronicamente en el painel (ex: de 1.0mm a 4.0mm) o mecanicamente Por parafuso en la cenefa, impedindo que el prensatelas esmague as felpas de toallas grossas o bata en mantas acolchoadas durante el desplazamiento del bastidor.",
    "technicalDetails": "Calibración estándar de fábrica Para tejidos planos de algodao: 1.0mm a 1.5mm de folga. Para toallas felpudas y mantas con R1/R2, a altura es aumentada Para 2.5mm a 3.5mm; Para tejidos / telas finos y sedas, é reduzida Para 0.5mm a 1.0mm a fim de evitar el efeito de flutuación y vibración del tejido / tela (Flagging).",
    "beginnerExplanation": "É a regulagem en la tela de la máquina que decide a que altura o 'pezinho de ferro' va ficar flutuando en cima del tejido / tela mientras borda. si sea una toalla grossa o una manta fofa de bebe, voce manda el pezinho ficar un pouquinho más alto Para ele deslizar Por cima sin amassar y sin dar tranco en el bastidor!",
    "howItWorks": [
      "1. A bordadora prepara una toalla de baño espessa o una capa acolchoada de caderneta de vacinación.",
      "2. Acessa el menu de 'Configuraciones de Bordado' en la tela touchscreen de la sua máquina (Brother, Janome o Bernina).",
      "3. Localiza a opción 'Altura del prensatelas / Embroidery Foot Height'.",
      "4. Eleva el valor de 1.5mm (estándar) Para 2.5mm o 3.0mm.",
      "5. La máquina de bordar ajusta el motor de passo interno de la cenefa del prensatelas.",
      "6. Durante el bordado, o prensatelas pula suavemente Sobre as felpas sin prensar nem arranhar el tejido / tela.",
      "7. El bastidor si desloca livremente sin ruídos secos de atrito y sin travar los motores.",
      "8. al voltar Para una remera fina de algodao, a bordadora regresa a altura Para el estándar (1.5mm)."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Deixar el prensatelas en la altura mínima (1.0mm) al bordar toallas felpudas grossas, fazendo el pezinho bater en las felpas y desalinhar el bastidor",
      "Deixar el prensatelas muy alto (4.0mm) en tejidos de punto finas, fazendo el tejido / tela subir junto con a aguja y embolar a hilo embaixo",
      "Tentar dobrar o entortar el pé prensatelas de metal con alicate Para tentar alterar a altura manualmente"
    ],
    "troubleshootingTips": [
      "En las máquinas Brother BP y PE, Entre en las configuraciones de la tela y ajuste a 'Altura del Pé prensatelas' Para 2.5mm o 3.0mm en piezas grossas",
      "En las máquinas Janome MC500E/550E, ajuste a folga del prensatelas en el menu de regulagem del garfio / lanzadera",
      "si voce ouvir un som de 'estalo de plástico' toda vez que la máquina anda en una toalla, o prensatelas está muy baixo y batendo en el tejido / tela"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "va bordar toalla de baño bem grossa o manta de bebe en la sua Brother o Janome? no deixe el pezinho esmagar el tejido / tela! Entre en el menu de la máquina y aumente a Altura del prensatelas Para 2.5mm o 3.0mm: o pezinho va flutuar suave Cómo una pluma y el bordado queda impecável!",
    "voceSabia": "El prensatelas de bordar pula cerca de 700 a 850 vezes Por minuto durante el bordado, y el momento en que ele toca el tejido / tela dura menos de 30 milissegundos a cada puntada!",
    "practicalExercise": "Coloque una toalla grossa en el bastidor y gire el volante con a mao: observe el momento en que a aguja desce y veja a folga Entre a sola del prensatelas y a felpa de la toalla. Altere a altura en la tela de la máquina y repita el movimiento Para ver el pezinho flutuando más alto con espaco livre!",
    "quickSummary": "Ajuste manual o eletronico de la altura de flutuación del pé prensatelas que evita atrito en tejidos / telas grossos y vibración en tejidos / telas finos.",
    "relatedTerms": [
      "prensatelas de bordado / prensatelas Pula-Pula",
      "cenefa de Presión y Regulador del prensatelas",
      "Alavanca del prensatelas",
      "Efeito Flutuación del tejido / tela"
    ]
  },
  "d-056-deslocamento-por-queda-de-energia-retomada-de-ponto": {
    "term": "Desplazamiento Por Corte de Energía y Recuperación de Puntada",
    "level": "fundamental 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del latín dislocare (mover de posición) y recuperare (recuperar coordenada gravada). Sistema de memória no-volátil (EEPROM/Flash) introduzido en la eletronica de bordadoras en los anos 2000.",
    "summary": "Recurso inteligente de seguridad que grava a coordenada exata del último puntada en la memória, permitindo retomar el bordado perfeitamente tras queda de luz.",
    "definition": "El sistema de retomada tras queda de energia (Power Failure Resume & Stitch Recovery System) é o recurso eletronico de proteción y seguridad operacional incorporado en la placa-mae de las máquinas de bordar modernas (Brother séries BP/PE/NV, Janome MC500E/550E, Bernina y Sun Special). en caso de que ocorra una queda repentina de energia elétrica, desligamento acidental del cabo o parada de emergencia en el meio de una matriz / diseño de 30.000 puntadas, a memória no-volátil de la máquina salva el número exato del puntada y as coordenadas cartesianas (X/Y). al religar la máquina, o sistema pergunta: 'Deseja retomar el bordado anterior?', retornando el bastidor exatamente Para el puntada de parada sin perder a pieza.",
    "technicalDetails": "Gravación instantânea en chip Flash EEPROM a cada bloque de puntadas. A bordadora puede todavía utilizar los botoes de avanco y recuo de puntadas (+/- 1, 10, 100 puntadas) en la tela Para retroceder cerca de 5 a 10 puntadas Antes del local de la parada, garantindo que no fique nenhum espaco vazio o falha en la cobertura.",
    "beginnerExplanation": "É a 'memória mágica' de salvación de la máquina de bordar! si acabar a forca en la sua casa o alguém tropecar en el hilo en el meio de un bordado demorado, no debe entrar en pânico: cuando a luz voltar, voce liga la máquina, aperta 'OK' en la tela y ela volta sozinha exatamente en el mismo pontinho donde parou!",
    "howItWorks": [
      "1. La máquina está bordando una matriz / diseño grande y complexa (ex: puntada 14.350 de 25.000).",
      "2. Falta energia elétrica en el bairro y la máquina si apaga instantaneamente.",
      "3. A bordadora NAEl mexe en el tejido / tela nem retira el bastidor de la máquina.",
      "4. cuando a energia elétrica retorna, a bordadora liga el interruptor de la máquina.",
      "5. A tela touchscreen exibe a mensagem de seguridad: 'El bordado anterior fue interrompido. Deseja retomar? [OK]'.",
      "6. A bordadora clica en 'OK'; o pantógrafo si movimenta Por sí solo y posiciona a aguja en la coordenada exata.",
      "7. En el painel de navegación de puntadas, a bordadora clica en '-10 puntadas' Para hacer una pequena sobreposición de seguridad.",
      "8. Aperta el botao Start/Stop verde y el bordado continua normalmente, salvando a pieza 100% perfeita!"
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Tirar el tejido / tela de dentro del bastidor logo tras a queda de luz achando que perdeu a pieza Para siempre",
      "Puxar o empurrar el carro del bastidor con forca con as maos con la máquina desligada, descalibrando a posición salva",
      "Clicar en 'Cancelar / no' en la tela al religar la máquina, apagando a memória de la coordenada salva"
    ],
    "troubleshootingTips": [
      "REGRA DE OURO: Acabou a luz? NAEl toque en el bastidor y NAEl desmonte el tejido / tela! Deixe todo exatamente Cómo está atEs la luz voltar!",
      "al religar y clicar en 'Retomar', use el botao de '-10 puntadas' en la tela de la máquina Para hacer a aguja recuar alguns pontinhos y arrematar sin deixar unión aparente",
      "Use siempre un bom filtro de hilo o estabilizador/nobreak Para proteger a placa eletronica de la sua máquina contra picos de tensao"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Faltou luz en el meio del bordado? Calma, no Entre en desespero y NAEl tire a toalla del bastidor! A sua máquina Brother, Janome o Bernina gravou el puntada exato en la memória! cuando a luz voltar, é só ligar, apertar OK en la tela y voltar 5 pontinhos Para trás: a pieza queda tao perfeita que ninguém Nunca va saber que faltou luz!",
    "voceSabia": "As máquinas eletronicas modernas poseen un microcapacitor de emergencia en la placa que armazena energia Por 50 milissegundos tras el corte de luz, tempo suficiente Para la CPU salvar as coordenadas en la memória flash Antes de desligar Por completo!",
    "practicalExercise": "Borde un retazo simples y desligue la máquina en el botao liga/desliga en el meio de la costura: ligue la máquina de novo y veja a tela perguntando si deseja retomar el bordado; aperte OK y assista el bastidor viajando Por sí solo de volta Para el puntada exato!",
    "quickSummary": "Recurso de memória que grava a coordenada del último puntada y permite retomar el bordado con perfeición tras queda de luz.",
    "relatedTerms": [
      "Botao Start/Stop y Operación Sin Pedal",
      "Carregamento de matriz / diseño",
      "Correia Dentada del Pantógrafo y Eixo X/Y",
      "Operación de la Máquina"
    ]
  },
  "d-057-dinamometro-textil-medidor-de-tensao-towa": {
    "term": "Dinamómetro Textil y Tensiómetro Digital Towa",
    "level": "Avanzado 🔴",
    "category": "Mecánica y Ajustes",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del grego dynamis (forca física) y metron (medida de precisión). Instrumento de metrologia Mecánica de precisión desarrollado Por la empresa japonesa Towa Corporation Para calibración de máquinas de bordar.",
    "summary": "Instrumento metrológico de precisión con mostrador numérico en gramas-forca (gf) Para aferir y calibrar a tensao exata de la caja de canilla / canilla / bobina / portacanilla y del hilo superior.",
    "definition": "El dinamometro textil (Medidor de Tensao Towa / Towatec Thread Tension Gauge) é a ferramenta metrológica de precisión indispensável Para técnicos y tallers profissionais de bordado computarizado. compuesto Por un alojamento Para cajas de canilla / canilla / bobina / portacanillas (modelo TM-1 Para caixa tipo L/classe 15 y TM-2 Para caixa tipo M) con roldanas de precisión y un ponteiro de escala calibrada en gramas-forca (0 a 50 gf Para canilla / canilla / bobina; 0 a 300 gf Para hilo superior), permite medir numericamente a resistencia de arraste del hilo, eliminando achismos y regulagens 'en el tato' de la caja de canilla / canilla / bobina / portacanilla en máquinas Brother, Janome, Bernina y Sun Special.",
    "technicalDetails": "Calibración estándar de tensao inferior (canilla / canilla / bobina): 20gf a 25gf Para poliéster título 60. Calibración estándar de tensao superior (aguja): 100gf a 130gf Para poliéster título 40. Permite padronizar rigorosamente a tensao en tallers con múltiplas máquinas.",
    "beginnerExplanation": "É un pequeno 'reloginho medidor' japones super preciso donde voce coloca a caixinha de canilla / canilla / bobina y puxa a hilo: ele te mostra en la hora, con un número exato en gramas, si a hilo de baixo está apertada demais o floja demais, Para voce Nunca más ter que adivinhar a regulagem en el olho!",
    "howItWorks": [
      "1. A bordadora o técnico retira a caja de canilla / canilla / bobina / portacanilla de la máquina con a canilla / canilla / bobina cheia instalada.",
      "2. Encaixa a caja de canilla / canilla / bobina / portacanilla dentro del suporte del dinamometro Towa.",
      "3. Passa a hilo Por las roldanas de medición y Por el gancho del ponteiro de precisión.",
      "4. Puxa a ponta del hilo en velocidad constante y suave.",
      "5. El ponteiro si desloca en la escala indicando el valor real de la tensao en gramas-forca (ex: 22 gf).",
      "6. si a leitura estiver en 15 gf (muy floja) o 35 gf (muy apertada), ajusta-si el parafuso de la caixa con chave de fenda micrométrica até cravar en los 22 gf perfeitos.",
      "7. A caja de canilla / canilla / bobina / portacanilla es recolocada en la máquina con precisión cientíqueda absoluta."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Puxar a hilo en el dinamometro en trancos rápidos y violentos al invés de un movimiento suave y contínuo",
      "Apertar el parafuso de la caja de canilla / canilla / bobina / portacanilla con chaves de fenda grandes inadequadas, espanando a fenda del parafuso micrométrico",
      "Usar el dinamometro con poeira o fiapos de hilo presos Entre as roldanas de rolamento"
    ],
    "troubleshootingTips": [
      "A tensao ideal de la canilla / canilla / bobina Para máquinas domésticas (Brother, Janome, Bernina) con hilo de poliéster 60 es Entre 20 y 25 gramas-forca",
      "si no tiver el dinamometro Towa en el início, faca o 'teste de la gota' (Drop Test): suspenda a caja de canilla / canilla / bobina / portacanilla Por la hilo; ela debe descer suavemente solo cuando voce der un leve toque con el pulso",
      "Gire el parafuso de la caja de canilla / canilla / bobina / portacanilla siempre en fraciones minúsculas"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "El segredo de los técnicos de máquinas Para regular a caixinha de canilla / canilla / bobina sin errar Nunca es o medidor Towa! Regulou a canilla / canilla / bobina en 22 gramas y a hilo de cima en 110 gramas, a sua máquina borda Cómo seda y el revés sai con el terco central branquinho más perfeito del mundo!",
    "voceSabia": "El dinamometro de tensao Towa fue inventado en el Japao en la década de 1970 y até hoje es a ferramenta estándar mundial obrigatória utilizada Por las fábricas de la Brother, Janome y Tajima en suas hilos de montagem!",
    "practicalExercise": "Pegue a caja de canilla / canilla / bobina / portacanilla de la sua máquina con hilo passada: segure a ponta del hilo y suelte a caixinha en el ar; de un leve tranco con el pulso Para cima; observe si ela desce 2 a 3 centímetros y Para suavemente (tensao perfeita) o si despenca atEs el chao (tensao floja)!",
    "quickSummary": "Instrumento metrológico con escala numérica en gramas que afere y calibra a tensao exata de la canilla / canilla / bobina y hilo superior.",
    "relatedTerms": [
      "Ajuste de Tensión del Hilo",
      "Caixa de la canilla / canilla / bobina",
      "Bobbin Case",
      "bloque Tensor y Discos de Tensao Superiores"
    ]
  },
  "d-058-digitalizacao-de-monogramas-e-micro-letras": {
    "term": "Digitalización de Monogramas y Micro-Letras en Alta Resolución",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "Del grego monos (único, inicial) y gramma (letra del alfabeto). Ramo especializado de la digitalización (ponchado) de matrices / diseños focado en la legibilidade de tipografias en escalas reduzidas.",
    "summary": "Técnica de programación de matrices / diseños Para letras pequenas (3mm a 6mm) con ajustes de compensación, densidade aliviada y underlay simplificado.",
    "definition": "A digitalización (ponchado) de monogramas y micro-letras (Small Lettering & Monogram Digitizing) é a disciplina técnica especializada de criación y edición de matrices / diseños de bordado voltada Para la execución de tipografias en dimensoes reduzidas (letras de 3mm a 6mm de altura, comunes en nomes de batas méconsejos, bolsos y monogramas de ajuares). Exige parámetros de software exclusivos: substituición de underlays convencionais Por hilo de suporte central única (Center Run), redución de densidade (espacamento alargado Para 0.45mm a 0.50mm), aplicación de compensación de tirantez reforcada (0.35mm) y uso de agujas finas 65/9 o 70/10 con hilos especiais título 60.",
    "technicalDetails": "As letras minúsculas en puntada satín tienen colunas muy estreitas (0.6mm a 1.0mm). si a densidade sea mantida en el estándar normal (0.40mm), o acúmulo de agulhadas corta el tejido / tela y fecha os 'olhos' de las letras Cómo 'y', 'a', 'o' y 's'.",
    "beginnerExplanation": "É a técnica de computadora y máquina Para conseguir bordar aquellos nominhos bem pequenininhos (Cómo nomes de médicos en batas / guardapolvos o iniciais en toalhinhas) sin que as letrinhas fiquem borradas, fechadas o parecendo un borrao ilegível de hilo.",
    "howItWorks": [
      "1. A bordadora seleciona o digita el nome en el software de bordado (Wilcom, PE-Design, Janome Digitizer o Bernina).",
      "2. Escolhe fontes especializadas Para micro-letras (Small Fonts / Micro Fonts) pré-digitalizadas con tracos limpos.",
      "3. Ajusta el suporte (underlay) Para una única hilo reta en el centro (Center Walk).",
      "4. Aumenta a compensación de tirantez (Pull Compensation) Para compensar el afundamento del hilo en el tejido / tela.",
      "5. En el cabezal de la máquina (Brother, Janome o Bernina), instala una aguja fina 65/9 o 70/10 ponta aguda (Microtex).",
      "6. Utiliza hilo más fina (título 60) y entretela firme bem esticada.",
      "7. La máquina borda el nome con nitidez cirúrgica, onde cada letrinha de 4mm puede ser lida con perfeición absoluta."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Tentar diminuir una fonte conún grande Para 4mm de altura en el programa, fazendo as piernas de las letras ficarem con colunas microscópicas que a aguja no consegue costurar",
      "Usar aguja grossa (90/14) y hilo conún grossa (título 40) Para bordar letras de 4mm, transformando a letra 'y' y 'o' en bolinhas fechadas de hilo",
      "Colocar suporte duplo (Edge Run + Zigzag) en letras minúsculas, criando un bolo duro de hilo Antes mismo de comecar el puntada satín"
    ],
    "troubleshootingTips": [
      "Para letras menores que 6mm, use siempre aguja 65/9 o 70/10 y hilo fina de título 60 en el cabezal",
      "En el PE-Design y Wilcom, utilize exclusivamente as fontes de la categoría 'Small Fonts / Letras Pequenas'",
      "Desative el underlay de ziguezague y deixe solo o 'Center Run' (suporte central) ativado Para micro-letras"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "va bordar nomes pequenos en batas / guardapolvos o pañales de tela y as letrinhas están saindo fechadas y borradas? Use aguja 70/10 fininha, escolha una fonte própria Para letras pequenas en el seu programa y tire el excesso de suporte: as letras de 5mm vao sair tao nítidas que parecem impressas en el papel!",
    "voceSabia": "A menor letra já bordada con perfeición legível Por una máquina computarizada media solo 1.8 milímetro de altura, utilizando aguja calibre 55/7 y hilo de poliéster título 75 ultrafina!",
    "practicalExercise": "En el seu software, digite un nome con 5mm de altura usando una fonte normal y outro usando una fonte 'Small Font': borde los dois lado a lado en un retazo con aguja 70/10 y compare a diferenca brutal de legibilidade y beleza Entre as dos!",
    "quickSummary": "Técnica de programación y costura de micro-letras (3mm a 6mm) con densidade aliviada y suporte central Para máxima legibilidade.",
    "relatedTerms": [
      "puntada satín",
      "Compensación de Puxao",
      "aguja Microtex / Ponta Aguda Agucada",
      "Branching / Ramificación Automática en el Software"
    ]
  },
  "d-059-desgaste-e-rebarba-de-agulha": {
    "term": "Desgaste y Rebabas en la Punta de la Aguja",
    "level": "fundamental 🟢",
    "category": "Agujas y Hilos",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del latín desgastare (consumir Por fricción contínua) y del francés ébarbure (pequena ponta metálica cortante levantada Por impacto). Principal causa de deshilachado de hilos en máquinas de costura y bordar.",
    "summary": "Microdeformación cortante en la ponta o en el olho de la aguja provocada Por impactos leves contra a chapa o bastidor que desfia a hilo y quebra el hilo.",
    "definition": "A rebaba de aguja (Needle Burr & Point Damage) é o microdano mecánico invisible a olho nu que ocurre en la ponta agucada, en la canaleta longitudinal o en la borda interna del olho de la aguja de bordado. É causada Por el impacto microscópico de la aguja contra a placa de aguja, prensatelas o aro del bastidor, o Por el atrito prolongado con tejidos / telas sintéticos abrasivos tras 8 a 10 horas de uso contínuo. A rebaba metálica atua Cómo una microsserra afiada, desfiando los filamentos del hilo superior a cada subida y descida até provocar el rompimento del hilo.",
    "technicalDetails": "una aguja de bordar perfora el tejido / tela Entre 40.000 y 50.000 vezes a cada hora de produción a 750 PPM. Vida útil recomendada de una aguja de cromo estándar: 8 a 10 horas de trabalho efetivo (o cerca de 500.000 a 1.000.000 de puntadas).",
    "beginnerExplanation": "É cuando a pontinha de la aguja queda 'machucada', tortinha o con una farpinha de ferro microscópica en la ponta después de bater de leve en la chapa o en el aro. Essa farpinha funciona Cómo una serrinha que corta a hilo de bordar toda hora. Trocar a aguja Por una nova resolve el problema en 1 minuto!",
    "howItWorks": [
      "1. La máquina sofre un pequeno tranco o a aguja raspa de leve en la chapa metálica durante un salto.",
      "2. A ponta de la aguja entorta 0.05mm o levanta una microfarpinha de aco en la borda del olho.",
      "3. A hilo de bordar passa Por el olho de la aguja más de 30 vezes en el mismo centímetro Antes de formar el puntada.",
      "4. A rebaba raspa repetidamente en la hilo de poliéster a 750 PPM.",
      "5. A hilo comienza a desfiar, abrindo pelinhos en la frente del cabezal.",
      "6. en pocos segundos, o hilo si rompe y la máquina Para con aviso de 'hilo superior Quebrada'.",
      "7. A bordadora substitui a aguja Por una nova; a rebaba desaparece y la máquina volta a bordar suavemente sin quebras."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Bordar Por semanas con a misma aguja velha até ela quebrar fisicamente al meio",
      "Tentar 'lixar' a ponta de una aguja torta con lixa de unha al invés de colocar una aguja nova",
      "no perceber el barulho de 'tuc-tuc-tuc' seco y pesado que a aguja desafilada / despuntada hace al furar el tejido / tela"
    ],
    "troubleshootingTips": [
      "El TESTE de la media / calcetín DE seda: Passe a ponta de la aguja suavemente Sobre una media / calcetín fina de nylon velha; si a ponta puxar cualquier fiapinho, a aguja tiene rebaba y debe ser jogada en el lixo imediatamente!",
      "Troque a aguja de la sua máquina a cada 8 a 10 horas de bordado",
      "si a hilo comecar a desfiar repetidamente, no perca tempo mexendo en la tensao: troque a aguja primeiro!"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "A hilo comecou a desfiar y quebrar a cada 2 minutos y voce já está perdendo a paciencia? no mexa en nenhum parafuso de la máquina! 90% de las quebras de hilo son causadas Por una aguja gasta o con micro-rebaba invisible! Coloque una aguja nova y veja la máquina voltar a bordar en el mismo según con a maior paz del mundo!",
    "voceSabia": "una aguja nova custa menos de 3 reais, pero una aguja gasta con rebaba puede hacer voce perder horas de trabalho y estragar una toalla nobre de 80 reais!",
    "practicalExercise": "Pegue una aguja que já foi muy usada en el seu atelie y pase a unha del polegar delicadamente de cima Para baixo atEs la pontinha: sinta si a ponta 'engancha' en la sua unha; ahora compare con una aguja nova tirada del pacote y sinta a diferenca de la ponta lisa y perfeita!",
    "quickSummary": "Microdeformación cortante en la aguja que age Cómo una microsserra, desfiando y rompendo a hilo superior.",
    "relatedTerms": [
      "Aguja de Bordado Computarizado",
      "aguja de Titânio / Nitreto de Titânio",
      "placa de aguja",
      "Deshilachado del Hilo"
    ]
  },
  "d-060-distorcao-termica-em-entretela-termossoluvel": {
    "term": "Distorsión Térmica en entretela Termosoluble y Limpieza en Seco",
    "level": "Intermedio 🟡",
    "category": "estabilizadores & entretelas",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "Del grego therme (calor, energia térmica) y del latín solvere (dissolver, desintegrar). estabilizador sintético termoplástico patenteado Para remoción sin uso de água.",
    "summary": "Filme estabilizador especial que si desintegra en pó seco y marrom al contato con ferro de passar quente (140°C a 160°C), ideal Para tejidos / telas que no pueden ser molhados.",
    "definition": "A entretela termossolúvel (Heat-Away Film / Thermal Dissolving Stabilizer) é o filme estabilizador sintético transparente o fosco confeccionado en polímero plástico especial sensível a altas temperaturas. al contrário de la entretela hidrosoluble (wash-away) (que exige lavagem con água abundante Para sair), a entretela termossolúvel mantém a sustentación Mecánica durante el bordado y si desintegra completamente en pó seco al receber el calor de un ferro de passar a seco o prensa térmica (Entre 140°C y 160°C). É a solución ideal Para bordados en tejidos / telas nobres que mancham con água (veludos, sedas, cuero ecológico, lanas y panos de prato con barrados engomados).",
    "technicalDetails": "Temperatura de dissolución térmica: 140°C a 160°C sin vapor (ferro a seco). al atingir a temperatura crítica, o filme perde a elasticidade, sofre pirólise branda y si converte en microflocos secos que son facilmente escovados con una escovinha suave.",
    "beginnerExplanation": "É un plástico estabilizador especial Para usar embaixo o en cima de tejidos / telas finos que voce NAEl quer molhar con água (Cómo terciopelo, seda o cuero). después de bordar, voce só encosta el ferro de passar quente y el plástico vira un pozinho seco en la hora: é só passar una escovinha que sai todo sin precisar lavar a pieza!",
    "howItWorks": [
      "1. A bordadora monta el tejido / tela delicado (ex: terciopelo o seda) con a entretela termossolúvel en el bastidor.",
      "2. La máquina (Brother, Janome, Bernina o Sun Special) executa el bordado con firmeza total.",
      "3. A pieza es retirada del bastidor y el excesso de película plástica al redor del bordado es rasgado con a mao.",
      "4. A bordadora aquece el ferro de passar a seco en la temperatura 'La/Algodao' (sin vapor).",
      "5. Pressiona el ferro en movimientos circulares Sobre el revés del bordado Por 5 a 10 segundos.",
      "6. A entretela termossolúvel si esfarela instantaneamente en pequenos flocos secos.",
      "7. Passa-si una escovinha suave de roupa y todo el resíduo cai en la bancada, deixando el bordado limpo, suave y 100% seco."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Usar ferro con vapor ligado, fazendo el plástico derreter y grudar Cómo cola líquida en el tejido / tela",
      "Usar ferro en temperatura baixa demais (menos de 120°C), no atingindo el puntada de quebra del filme",
      "Deixar el ferro parado en el mismo puntada Por muy tempo, queimando a hilo de poliéster"
    ],
    "troubleshootingTips": [
      "Use siempre el ferro de passar en modo SECO",
      "Coloque un pedaco de tejido / tela de algodao fino o papel manteiga Entre el ferro y el bordado Para proteger a pieza",
      "Remova los resíduos de pó con una escovinha de cerdas suaves de roupas o fita adesiva leve"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Precisa entregar un bordado urgente en terciopelo o seda y no puede molhar a pieza con água de jeito nenhum? Use a entretela termossolúvel: encostou el ferro quente a seco, ela vira pó y sai en la escovinha en 10 segundos! A cliente recebe a pieza seca, limpa y cheirosa en la hora!",
    "voceSabia": "A entretela termossolúvel fue desarrollada en la Alemanha Para la confección de vestidos de noiva de alta-costura, onde as rendas bordadas en hilos de ouro no podiam entrar en contato con água Para no perder el brilho metálico!",
    "practicalExercise": "Coloque un pedaco de entretela termossolúvel en un retazo: encoste a ponta del ferro de passar seco y quente Por 5 segundos; observe el plástico encolhendo y si transformando en pó seco soltinho que sai con un simples sopro!",
    "quickSummary": "Filme estabilizador que si desintegra en pó seco con el calor del ferro, ideal Para tejidos / telas que no pueden ser molhados.",
    "relatedTerms": [
      "entretela hidrosoluble",
      "Backing",
      "acabado & Limpeza de Bordado",
      "Blower / Soprador Térmico y Pistola de Ar Quente"
    ]
  },
  "d-061-deslocamento-do-eixo-y-troca-de-bobina-estacionamento": {
    "term": "Desplazamiento del Eje Y Para Cambio de Canilla y Posición de Aparcamiento",
    "level": "fundamental 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del inglés park position (posición de estacionamento seguro del carro del bastidor) y del latín axis (eje cartesiano Y de profundidade). Función ergonomica de software presente en las máquinas modernas.",
    "summary": "Comando en la tela de la máquina que move el bastidor Para trás o hacia adelante, liberando espaco amplo Para trocar a canilla / canilla / bobina o cortar hilos sin tirar el bastidor.",
    "definition": "El desplazamiento del eje Y Para cambio de canilla / canilla / bobina (o Posición de Estacionamento del bastidor / Hoop Clearance Shift / Park Position) é a función operacional presente en los menus de controle de las máquinas de bordar domésticas (Brother séries BP/PE/Innov-is, Janome MC500E/550E y Bernina). Con un simples toque en un ícone en el visor touchscreen, la máquina movimenta el carro del pantógrafo en el eje Y Para la posición extrema traseira o dianteira del trilho, afastando el aro del bastidor Para longe de la placa de aguja y permitindo abrir a tampa del garfio / lanzadera, trocar a canilla / canilla / bobina o recortar tejidos / telas de aplique con tijera de ponta curva sin precisar desencaixar el bastidor de la máquina.",
    "technicalDetails": "desplazamiento milimétrico con memória de retorno absoluto. al clicar novamente en el botao tras a cambio de la canilla / canilla / bobina, o pantógrafo regresa con precisión de Â±0.01mm exatamente Para la coordenada de costura sin perda de alinhamento.",
    "beginnerExplanation": "É un botaozinho en la tela de la sua máquina que hace el bastidor andar Para trás Por sí solo y 'abrir espaco' Para voce conseguir abrir a tampinha y trocar a canilla / canilla / bobina de baixo (o cortar un tecidinho de aplique) bem confortável con a mao, sin ter que tirar el bastidor de la máquina y correr el risco de desalinhar el bordado!",
    "howItWorks": [
      "1. La máquina avisa en la tela que a hilo de la canilla acabou en el meio de una toalla grande en el bastidor 13x18cm o 20x30cm.",
      "2. A bordadora clica en el ícone de 'cambio de canilla / canilla / bobina / Mover bastidor' en la tela de la máquina.",
      "3. El braco del bastidor viaja suavemente Para trás, deixando a placa de aguja y a caixinha de canilla / canilla / bobina totalmente livres y desobstruídas.",
      "4. A bordadora abre a tampa acrílica del garfio / lanzadera con facilidade y insere a nova canilla / canilla / bobina cheia en 5 segundos.",
      "5. Clica en el botao de 'Retorno' en la tela touchscreen.",
      "6. El bastidor regresa con precisión matemática Para la coordenada exata del bordado.",
      "7. Aperta el botao Start/Stop verde y continua a costura con produtividade máxima."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "Desencaixar el bastidor de la máquina con forca toda vez que a canilla / canilla / bobina acaba, correndo el risco de bater y entortar el pantógrafo",
      "Tentar enfiar a mao embaixo de bastidores grandes Para trocar a canilla / canilla / bobina en el escuro y entortar el aro de plástico",
      "Desligar la máquina con el bastidor en la posición de estacionamento sin salvar a coordenada de retorno"
    ],
    "troubleshootingTips": [
      "En las máquinas Brother BP y PE, toque en el ícone del 'bastidor con Setas' en la tela de bordado Para afastar el bastidor en la hora",
      "En las máquinas Janome MC500E/550E, toque en la tecla de 'Posición de Manutención / Hoop Shift'",
      "Nunca empurre el bastidor con as maos Para abrir espaco: use siempre el comando eletronico en la tela de la máquina"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "A canilla / canilla / bobina acabou en el meio de una toalla enorme en el bastidor grande? no tire el bastidor de la máquina! Aperte el botaozinho de 'Mover bastidor' en la tela: la máquina joga el bastidor lá Para trás, voce cambio a canilla / canilla / bobina en 5 segundos, aperta voltar y ela continua bordando con alinhamento perfeito!",
    "voceSabia": "A función de estacionamento del bastidor fue criada originalmente Para las costuras de aplique, permitindo que a bordadora corte el excesso de tejido / tela con a tesourinha con as dos maos livres mientras la máquina segura a pieza imóvel!",
    "practicalExercise": "Con un bastidor montado en la sua máquina, vá en la tela de bordado y procure o ícone de 'Mover bastidor / Posición de cambio de canilla / canilla / bobina': toque nele y veja a elegancia del bastidor deslizando Para trás Para te dar espaco; toque novamente y veja-o voltando exatamente Para el milímetro donde estava!",
    "quickSummary": "Comando eletronico que afasta el bastidor en el eje Y Para liberar espaco confortável Para cambio de canilla / canilla / bobina y apliques.",
    "relatedTerms": [
      "Caixa de la canilla / canilla / bobina",
      "Autodetección de Fim de hilo y canilla / canilla / bobina",
      "desplazamiento del Pantógrafo",
      "Carro de la Máquina de Bordado"
    ]
  },
  "d-062-deflexao-da-agulha-needle-deflection": {
    "term": "Deflexión Dinámica y Flexión Elástica de la Aguja",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del fenómeno físico-mecánico Needle Deflection & Dynamic Bending documentado Por los fabricantes de agujas Schmetz y Groz-Beckert.",
    "definition": "Desviación lateral o flexión elástica no deseada que sufre la hoja de la aguja de bordar al impactar a gran velocidad contra telas pesadas, costuras gruesas, apliques rígidos o materiales gomosos, provocando que la punta de la aguja si curve milimétricamente perdiendo la sincronización exacta con la puntera del garfio / lanzadera rotativo y causando saltos de puntada, deshilachado de hilo o colisiones destructivas contra la placa de aguja.",
    "howItWorks": [
      "1. La aguja desciende a velocidades de hasta 1000 penetraciones Por minuto penetrando el material con gran energía cinética.",
      "2. Si la tela es muy dura (Cómo sarga gruesa, denim de 14 oz o la costura central de una gorra), la resistencia opuesta genera una fuerza transversal Sobre la punta cónica.",
      "3. La hoja de la aguja si flexiona elásticamente hacia un costado varios milímetros (deflexión).",
      "4. Debido a esta flexión, la muesca o chaflán de la aguja no queda en la coordenada prevista cuando la puntera del garfio / lanzadera pasa rozando a 0,05 mm.",
      "5. Si la aguja si desvía hacia afuera: el garfio / lanzadera no pesca el lazo y si produce un salto de puntada (Skipped Stitch).",
      "6. Si la aguja si desvía hacia adentro: choca violentamente contra el garfio / lanzadera o contra la placa de aguja, partiéndose en pedazos con riesgo de mellar piezas internas."
    ],
    "beginnerExplanation": "Es cuando la aguja si 'dobla Cómo un arco' al clavar en una parte dura de la tela. Aunque parezca de acero indestructible, cuando la aguja baja a mil puntadas Por minuto y choca contra una costura gruesa de un jean o el frente duro de una gorra, si dobla una fracción de milímetro hacia el costado. Al doblarse, el ganchito de abajo no la encuentra Para pescar el hilo (y deja puntadas sin coser) o, peor todavía, ¡la aguja choca contra el metal de la máquina y si rompe con un ruido tremendo!",
    "practicalExamples": [
      "Flexión de aguja al cruzar la costura central reforzada de una gorra estructurada de 6 paneles.",
      "Deflexión en telas de cuero grueso tratadas que obliga a usar agujas reforzadas antidesvío (Groz-Beckert SAN 1).",
      "Saltos de puntada en bordados de parches con múltiples capas de pegamento termoadhesivo."
    ],
    "matrixParametersRelation": [
      "Rigidez geométrica del vástago: agujas calibre 80/12 o 90/14 ofrecen un 40% más de resistencia a la deflexión que agujas finas 65/9.",
      "Diseño reforzado antidesvío (SAN 1 / Gebedur): sección transversal reforzada en la hoja que reduce la flexión elástica.",
      "Velocidad de penetración: reducir la velocidad de la máquina a 600 PPM reduce proporcionalmente la fuerza de deflexión."
    ],
    "commonErrors": [
      "Bordar gorras duras o cuero con agujas delgadas 70/10 estándar, quebrando agujas continuamente Por deflexión.",
      "Bordar Sobre costuras gruesas a máxima velocidad sin desacelerar la máquina.",
      "Continuar bordando con una aguja que sufrió deflexión y quedó ligeramente curvada de forma permanente."
    ],
    "troubleshootingTips": [
      "Utiliza agujas técnicas especiales reforzadas Cómo Groz-Beckert DBxK5 SAN 1 Para materiales pesados y gorras.",
      "Aumenta el calibre de la aguja de 75/11 a 80/12 o 90/14 cuando bordes Sobre tejidos rígidos o parches gruesos.",
      "Reduce la velocidad de la máquina a 600-650 PPM en diseños de gorras Para darle tiempo a la aguja de penetrar sin desviarse."
    ],
    "whenToAdjust": "Cambia a una aguja de mayor calibre o de geometría reforzada antidesvío si notas saltos de puntada en telas duras.",
    "dicaArtrelados": "El tip de la aguja dorada Para gorras duras Artrelados: Si estás bordando gorras con la costura del medio muy dura y la aguja si te parte a cada rato o si salta puntadas, no reniegues: pon una aguja de titanio reforzada calibre 80/12 (las de color dorado). Su acero templado con recubrimiento de titanio no si flexiona ante nada y atravesará la costura de la gorra Cómo si fuera manteca blanda.",
    "voceSabia": "¿Sabías que los fabricantes líderes de agujas utilizan cámaras de video ultra-lentas de 100.000 cuadros Por según con rayos X Para estudiar la deflexión de la aguja dentro de la tela y diseñar agujas con costillas de refuerzo invisibles a simple vista?",
    "practicalExercise": "Toma una aguja usada y presiona suavemente su punta contra la mesa de madera: siente la asombrosa elasticidad con la que si dobla el acero. Comprenderás Por quEs la 1000 puntadas Por minuto contra una costura dura la aguja si curva si no usas el calibre adecuado.",
    "quickSummary": "Flexión elástica de la aguja al chocar contra telas duras que descalibra la puntada y provoca roturas o saltos.",
    "summary": "Flexión elástica de la aguja al chocar contra telas duras que descalibra la puntada y provoca roturas o saltos.",
    "relatedTerms": [
      "Aguja de Bordado Industrial",
      "Aguja Para Bordado de Gorras",
      "Placa de Aguja de Orificio Redondo Para Puntada Recta",
      "Sincronización Mecánica del Garfio"
    ]
  },
  "d-063-desfiamento-de-linha-thread-fraying": {
    "term": "Deshilachado del Hilo y Separación de Filamentos",
    "level": "fundamental 🟢",
    "category": "Agujas y Hilos",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del latín 'disfilare' (separar los hilos). Ocorrencia cotidiana en los tallers decorrente de incompatibilidade Entre calibre de aguja, tensao o qualidade del hilo.",
    "summary": "Abrasao Mecánica o atrito térmico excessivo que rompe los microfilamentos del hilo de bordar Antes que ela consiga formar el puntada, criando 'ninhos' de fiapos en el olho de la aguja.",
    "definition": "El deshilachado de hilo (Thread Fraying / Thread Shredding) é o processo de degradación física y abrasao Mecánica contínua sofrido Por el hilo superior de bordado al passar repetidas vezes (de 20 a 40 vezes Antes de ser definitivamente ancorado en el tejido / tela) através del olho de la aguja y de los discos de tensao. cuando a hilo encontra arestas cortantes (burrs), olho de aguja muy apertado, atrito térmico elevado o tensao excessiva, os microfilamentos individuais que compoem el cabo de poliéster o a lâmina metálica comecam a si romper y si amontoar en forma de bola de fiapos imediatamente encima del olho de la aguja, até travar y quebrar a hilo.",
    "technicalDetails": "Para hilos estándar de bordado 120/2 (40wt), a grosor del hilo debe ocupar en el máximo 40% a 50% de la abertura útil del olho de la aguja. si el olho estiver desgastado o tiver micro-ranhuras causadas Por el uso contínuo de hilos metálicos, a taxa de cisalhamento de los filamentos aumenta en até 300%.",
    "beginnerExplanation": "É cuando a hilo de bordar no arrebenta de una vez só, pero comienza a 'esfiar' y formar una bolinha de fiapos peludinhos bem en cima del buraquinho de la aguja atEs la hilo travar y arrebentar. Parece que a aguja está 'mastigando' a hilo!",
    "howItWorks": [
      "1. A hilo passa Por el olho de la aguja Para baixo y Para cima dezenas de vezes en alta velocidad.",
      "2. una micro-rebaba en el olho de la aguja o en los guias de hilo comienza a raspar a superfície del hilo.",
      "3. Los filamentos externos de poliéster o a fita metalizada rompem-si y comecam a deslizar Para trás.",
      "4. Cria-si un pequeno tufo o casulo de penugem acumulada Sobre el olho de la aguja.",
      "5. El tufo de fiapos queda grande demais Para atravessar el tejido / tela o el orifício de la placa de puntada.",
      "6. A hilo es estrangulada Mecánica y termicamente y parte-si Por tracción.",
      "7. La máquina detecta a quebra y aciona el sensor de parada."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Insistir en bordar con a misma aguja después que ela comecou a desfiar a hilo, achando que el problema es a marca del hilo",
      "â�Œ Usar aguja de costura conún 70/10 con olho pequeno Para bordar en alta velocidad con hilo 40wt",
      "â�Œ Passar a hilo Por guias metálicos enferrujados, sujos con cola spray seca o con rebabas",
      "â�Œ Borda en velocidad máxima de 1.000 PPM con hilos metálicos secas y sin lubrificante"
    ],
    "troubleshootingTips": [
      "si a hilo comecar a esfiar y acumular fiapos en el olho de la aguja: Troque a aguja imediatamente Por una aguja nova própria Para bordado (con olho 2x maior) o aguja Topstitch/Titânio",
      "si el deshilachado ocorrer con hilo metálico: Passe 2 gotas de silicone líquido Para hilo en el cone y use aguja Metallic tamanho 80/12 o 90/14",
      "si a hilo estiver desfiando Antes mismo de chegar en la aguja: Verifique si el cone de hilo no está con rebabas plásticas en la base raspando el hilo"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "hilo esfiando Cómo un espanadorzinho en cima de la aguja? NAEl PERCA TEMPO: 95% de las vezes es a aguja que já deu el tempo de vida dela y criou una micro-rebaba invisible en el furinho! Coloque una aguja nova y voce va ver a hilo deslizar Cómo manteiga!",
    "voceSabia": "Antes de un puntada ser fixado en el tejido / tela, cada pedacinho del hilo de bordar sube y baja Por el olho de la aguja en média 35 vezes devido al movimiento alternado del tirahilos!",
    "practicalExercise": "Pegue una aguja velha que desfiou hilo y pase un pedaco de hilo dental o hilo de costura Por el olho tirando Para los lados con los olhos fechados: sinta con a sensibilidade de los dedos os 'degraus' y rebabas que estaban cortando a sua hilo!",
    "quickSummary": "Degradación y quebra de microfilamentos del hilo Por atrito excessivo con rebabas o olho inadequado de aguja.",
    "relatedTerms": [
      "Aguja de Bordado Computarizado",
      "Cera y Lubrificante de hilo / Óleo de Silicone",
      "Ajuste de Tensión del Hilo",
      "hilo de poliéster 120/2"
    ]
  },
  "d-064-densidade-fracionada-e-pontos-curtos-short-stitch-filter": {
    "term": "Densidad Fraccionada y Filtro de Puntadas Cortas",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "Del latín 'fractio' (divisao en fraciones) y del inglés 'short stitch' (puntada curto). Recurso patenteado desarrollado Por la Wilcom y Tajima en los anos 1990 Para digitalización (ponchado) de precisión.",
    "summary": "Algoritmo de processamento vetorial que recua as pontadas internas en cantos afiados y curvas fechadas Para evitar concentración destrutiva de perfuraciones de aguja.",
    "definition": "A Densidade Fracionada con Filtro de puntadas Curtos (Fractional Stitch Density / Short Stitch Filtering / Corner Stitch Reduction) é o algoritmo matemático de controle de perfuración que analisa a geometria de cantos vivos (pontas agudas en 'V'), curvas sinuosas y vértices estreitos en colunas de puntada satín (satim). Cómo las puntadas de bordado convergem en direción al vértice, a densidade física en el puntada de encontro tenderia al infinito, resultando en dezenas de perfuraciones en el mismo milímetro cúbico. El filtro fracionado encurta y omite alternadamente as penetraciones internas, recuando-as en 30% a 60% de la ancho de la coluna, mantendo a cobertura visual sin perfurar el tejido / tela en excesso.",
    "technicalDetails": "Configurável en el software de matrices / diseños bajo parámetros Cómo 'Short Stitch Length' y 'Margin Threshold'. en ângulos inferiores a 45°, o filtro elimina automaticamente até 50% de las puntadas internos mientras preserva a totalidade de las penetraciones en el raio externo del desenho.",
    "beginnerExplanation": "Sabe cuando voce va bordar a pontinha de una estrela o un biquinho de triángulo y la máquina queda batendo 15 vezes en el mismo buraquinho até cortar el tejido / tela? El filtro de puntadas curtos es una función inteligente en el programa que hace la máquina 'escalonar' os pontinhos Para trás, deixando a ponta perfeita y fininha sin judiar del tejido / tela!",
    "howItWorks": [
      "1. El programador cria una forma vetorial con pontas afiadas (ex: as pontas de una estrela o a cauda de una letra).",
      "2. El motor del software detecta o ângulo agudo estreito en el vértice de la coluna.",
      "3. El algoritmo de puntadas curtos es acionado automaticamente Por el software de bordado.",
      "4. un puntada viaja atEs la borda externa, o puntada seguinte recua Para 40% de la coluna y el terceiro recua Para 70%.",
      "5. La máquina executa el bordado suavemente sin concentrar agulhadas en el mismo local.",
      "6. A ponta queda nítida, afiada, sin calombo endurecido en el revés y sin furar el tejido / tela.",
      "7. A aguja no sofre choque mecánico y a hilo no arrebenta."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Desativar el filtro de puntadas curtos en las propriedades del software Para 'garantir cobertura', criando una bola dura de hilo en el revés",
      "â�Œ Usar recuos muy longos (encima de 80%), criando una faixa de tejido / tela vazia en el meio de la coluna satim",
      "â�Œ Digitalizar vértices muy agudos (menos de 15°) con puntada satín en lugar de finalizar en puntada recta reto"
    ],
    "troubleshootingTips": [
      "si a ponta de la letra estiver fazendo un nó duro que quebra a aguja: Acesse as propriedades de satim en el Wilcom/Hatch y marque a caixa 'puntadas Curtos / Short Stitches' con espacamento automático",
      "si el bico de la estrela furar el tejido / tela: Reduza a densidade de la ponta y ative el escalonamento fracionário de puntadas",
      "si a ponta externa parecer falhada: Certifique-si de que las puntadas de ancoragem externos continuam indo atEs el contorno vetorial"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "al programar estrelas, escudos o letras con pontas fininhas en el computadora: mantenha el recurso de 'puntadas Curtos' (Short Stitches) siempre ativado! Suas pontas vao ficar finas, pontudinhas, brilhantes y Nunca más vao hacer calombos de hilo o rasgar el tejido / tela!",
    "voceSabia": "Sin el filtro de puntadas curtos, una ponta de estrela de 30 graus con densidade estándar de 0.40mm acumula más de 16 perfuraciones de aguja en una área menor que a cabeca de un alfinete!",
    "practicalExercise": "Digitalize un triángulo con ponta bem fina en satim: primeiro sin puntadas curtos y veja a nuvem densa de pontinhos azuis amontoados en la ponta; ahora ative o 'Short Stitch' y observe Cómo las puntadas si escalonam en degraus suaves y elegantes!",
    "quickSummary": "Algoritmo que recua alternadamente las puntadas en vértices y curvas fechadas Para evitar nós duros y furos en el tejido / tela.",
    "relatedTerms": [
      "puntada satín",
      "Auto-Spaced Satin",
      "densidad de puntadas",
      "Ângulo de puntada"
    ]
  },
  "d-065-digitalizacao-manual-punching": {
    "term": "Digitalización Manual y Picaje Vectorial Puntada a Puntada",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "Del inglés 'punching' (furar cartoes perfurados en el tear Jacquard y en las primeiras máquinas de bordar automáticas del século XIX) y del latín 'digitale' (hecho con los dedos / digital).",
    "summary": "Método artesanal y profissional de programación de matrices / diseños donde el digitalizador traza / diseña cada vetor, define el sentido de las agulhadas y calibra manualmente el underlay y as compensaciones.",
    "definition": "A digitalización (ponchado) Manual (Manual Digitizing / Professional Embroidery Punching) é a arte y técnica especializada de criar matrices / diseños de bordado computarizado a partir de ilustraciones o logotipos vetoriais, en la cuál el programador de matrices / diseños (Puncher / Digitizer) traza / diseña manualmente cada bloque de objeto, define a ordem cronológica exata de costura, seleciona los tipos de puntadas adequados (tatami, satim, costura reta), direciona as hilos de fluxo y ângulos de puntada, programa las puntadas estruturais de base (underlays) y aplica compensaciones matemáticas de encolhimento específicas Para el tejido / tela en que a pieza será confeccionada.",
    "technicalDetails": "Diferencia-si fundamentalmente de la 'Auto-digitalización (ponchado)' (Auto-Digitizing / Varinha Mágica automática de los softwares), que gera excesso descontrolado de puntadas, cortes desnecessários y ausencia de camadas de suporte. A digitalización (ponchado) manual produz matrices / diseños con até 40% menos puntadas, bordado suave, revés limpo y zero quebra de hilo.",
    "beginnerExplanation": "É o jeito profissional de criar matrices / diseños en el computadora desenhando todo con carinho y precisión, puntada Por puntada, en lugar de usar aquel botao automático del programa que hace todo torto y cheio de cortes de hilo. una matriz / diseño digitalizada a la mao borda muy más rápido, gasta menos hilo y queda linda y suave en la tela!",
    "howItWorks": [
      "1. El programador importa a imagem de referencia en alta resolución en el software de criación.",
      "2. Faz el planejamento mental de la sequencia: o que está en el fundo borda primeiro, o que está en la frente borda Por último.",
      "3. traza / diseña los bloques con ferramentas vetoriais de curvas de Bézier respeitando a anatomia del desenho.",
      "4. Define a inclinación exata de los ângulos de puntada Para criar reflexos de luz y relevo.",
      "5. Aplica camadas de sustentación (underlay) adequadas Para la gramatura del tejido / tela final.",
      "6. Insere conexoes inteligentes (travamentos y puntadas de salto planejados) Para evitar cortes de hilo excessivos.",
      "7. Testa el archivo en la máquina física Para validar a maciez y el caimento del bordado real."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Confiar en la ferramenta de 'Auto-digitalización (ponchado)' de un clique Para bordar produtos comerciais de clientes",
      "â�Œ no planejar a ordem de sobreposición de las camadas, fazendo la máquina bordar un detalhe de la frente y después ter que voltar Para el fundo",
      "â�Œ Deixar todos los objetos con el mismo ângulo reto de puntada (90°), resultando en un bordado plano, sin brilho y sin profundidade visual"
    ],
    "troubleshootingTips": [
      "si a matriz / diseño comprada Por la internet estiver quebrando hilo y cheia de cortes: Abra en el software y redesenhe as conexoes manualmente usando puntada recta reto escondido",
      "si el bordado parecer pesado y duro Cómo papelao: Refaca a digitalización (ponchado) manual reduzindo a densidade Para 0.42 mm y ajustando el underlay Para una camada única de tatami aberto",
      "si los contornos ficarem desencaixados del preenchimento: Aumente a compensación de tirantez (pull compensation) manual Para 0.35 mm en el objeto de fundo"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "El maior diferencial de una bordadora profissional de sucesso es saber digitalizar manualmente! Fuja de la digitalización (ponchado) automática de un clique: desenhar cada pedacinho de la matriz / diseño en el Wilcom o en el Embird es o que hace el seu bordado ter brilho de seda, revés limpo y encantar cualquier cliente!",
    "voceSabia": "En los anos 1970, Antes de los computadores pessoais, a profisión de 'Puncher' de bordado exigia furar fitas de papel cartao gigantescas con un teclado mecánico y pedais pesados Para programar cada coordenada X y Y de la máquina de bordar!",
    "practicalExercise": "Escolha un motivo simples de una maca con una hoja. en vez de usar el botao automático, pegue a ferramenta de desenho manual de su software y crie a hoja con ângulo inclinado a 45° y a maca con ângulo a 90°. Borde y compare el brilho deslumbrante que os ângulos manuais dao a la pieza!",
    "quickSummary": "Criación profissional y artesanal de matrices / diseños en el computadora desenhando cada vetor, ângulo y suporte estrutural.",
    "relatedTerms": [
      "Ângulo de puntada",
      "Compensación de Tirantez",
      "Estrutura de Base",
      "densidad de puntadas"
    ]
  },
  "d-066-dupla-face-bordado-clean-back": {
    "term": "Doble Faz en Bordado Computarizado y Revés Limpio",
    "level": "Intermedio 🟡",
    "category": "Técnicas de Bordado",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "Del latín 'duplus' y 'facies' (dos faces). Inspirado en el célebre bordado tradicional de dupla face chines de Suzhou (Xiang embroidery) adaptado al maquinário computarizado moderno.",
    "summary": "Método de execución y digitalización (ponchado) especializado Para piezas transparentes o con dos vistas, onde el revés del bordado es perfeitamente identico y limpo Cómo a frente.",
    "definition": "El Bordado Dupla Face computarizado (Clean Back Embroidery / Reversible Machine Embroidery) é a técnica avancada de preparación, digitalización (ponchado) y montagem en el bastidor en la cuál a pieza final apresenta un verso absolutamente limpo, estético y simétrico, sin hilos sueltos, sin nós aparentes, sin entretelas visíveis y con a misma cor y brilho del hilo superior reproduzida en la hilo de canilla / canilla / bobina. É a técnica de excelencia exigida Para artigos nobres que exibem ambos los lados durante el uso, Cómo toallas de lavabo nobres, xales transparentes de organza, servilletas de lino, cortinas, véus y bandeiras comemorativas.",
    "technicalDetails": "Requer el uso de hilo de bordar identica (misma cor y mismo hilo 40wt de poliéster o seda) tanto en el cone superior quanto en la canilla / canilla / bobina inferior. Utiliza-si entretela hidrosoluble (wash-away) de filme solúvel en água (Solvy) que desaparece completamente tras a lavagem, deixando el revés del tejido / tela 100% livre de resíduos sintéticos.",
    "beginnerExplanation": "É cuando voce borda una toalla o un servilleta de lino y el verso del bordado queda tao perfeito, lindo y con a misma cor del hilo de la frente que a pessoa nem sabe cuál es o lado certo y cuál es o lado del revés! Nada de entretela branca colada nem fiapos sueltos atrás!",
    "howItWorks": [
      "1. A bordadora enche a canilla / canilla / bobina de la máquina con a misma hilo de bordar colorida usada en el carrete de cima.",
      "2. El tejido / tela (lino, cambraia o toalla) é montado en el bastidor con entretela hidrosoluble (wash-away) en la frente y en el verso.",
      "3. A tensao superior es ajustada Para equilíbrio neutro 1:1 con a tensao inferior (sin puxar más Para baixo).",
      "4. A matriz / diseño programada debe conter puntadas de amarración invisibles embutidos bajo los próprios puntadas satín.",
      "5. Los cortes de salto son eliminados o programados Para caminhar Por baixo de áreas preenchidas.",
      "6. Após el bordado, a pieza es enxaguada en água corrente Para dissolver toda a entretela.",
      "7. A pieza seca exibindo una frente y un verso igualmente belos y sin defeitos."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Usar hilo de canilla / canilla / bobina branca conún de poliéster fino, deixando el revés cheio de hilos brancas misturadas con a cor del bordado",
      "â�Œ Usar entretela desprendible (tear-away) conún que queda presa en el revés y no sai, estragando el visual de la pieza",
      "â�Œ Deixar saltos longos de hilo atravessando el revés del bordado",
      "â�Œ Tensao desregulada que puxa a hilo de la canilla Para la frente del tejido / tela"
    ],
    "troubleshootingTips": [
      "si el verso estiver mostrando pontinhos brancos: Encha una canilla con a misma hilo de cima y calibre a tensao superior y inferior Para ficarem perfeitamente equilibradas",
      "si ficarem resíduos de entretela en el revés: Mergulhe a pieza en una vasilha con água morna Por 10 minutos Para dissolver completamente a película hidrossolúvel",
      "si el revés estiver con pontas de hilo arrepiadas: Faca el remate / puntada de seguridad manual de las pontas con una aguja de mao fina Antes de molhar a pieza"
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Para hacer un servilleta de lino chique con revés perfeito: encha a canilla / canilla / bobina con a misma hilo de bordar colorida del cone de cima y use entretela hidrosoluble (wash-away) que some en la água. Seu cliente va virar el servilleta del revés y ficar de boca aberta con a perfeición!",
    "voceSabia": "En la China Imperial, as mestras bordadoras de Suzhou criavam piezas en seda transparente donde bordavam un gato de un lado y un cachorro del outro lado del mismo tejido / tela usando solo una única aguja manual!",
    "practicalExercise": "Encha una canilla / canilla / bobina con hilo de bordar azul royal igual al seu cone superior. Monte un pedaco de tricoline branca con entretela hidrosoluble (wash-away) y borde una flor simples. Lave en la torneira y veja a magia de ter un bordado con frente y verso identicos!",
    "quickSummary": "Técnica que cria un bordado con revés limpo y identico a la frente usando canilla / canilla / bobina colorida y entretela hidrosoluble (wash-away).",
    "relatedTerms": [
      "entretela hidrosoluble",
      "Ajuste de Tensión del Hilo",
      "Bainha Aberta computarizada",
      "hilo de canilla / canilla / bobina"
    ]
  },
  "d-067-desbobinador-conico-rede-contencao-linha": {
    "term": "Desbobinador Cónico y Malla de Contención Para Hilo",
    "level": "Principiante 🟢",
    "category": "Acessórios y Insumos",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del desenvolvimento de redes elásticas tubulares de poliamida en la indústria textil Para controlar el desbobinamento de hilos sintéticos resbaladizos y filamentos metálicos.",
    "summary": "Redinha elástica protetora colocada Sobre cones de hilo de bordar Para evitar que el hilo despenque, forme lacos sueltos en la base y quebre Por atrito en la máquina.",
    "definition": "El Desbobinador Conico y Rede de Contención de hilo (Thread Netting / Spool Sock) é un acessório textil en tejido de punto tubular flexível que envolve el cone de hilo de poliéster, viscose, hilo metálico o multifilamento, aplicando una leve presión perimétrica que impede que los enrolamentos de hilo escorreguem Para la base del cone (efeito cascata) Antes de serem puxados Por el guia-hilo superior.",
    "technicalDetails": "Essencial Para cones del tipo King Spool (1.000m a 5.000m) y carretes cruzados (Cross-Wound), mantendo o ângulo de salida vertical constante y eliminando variaciones repentinas en el tensor superior que causam franzimento o quebra.",
    "beginnerExplanation": "É aquella 'meinha' o redinha furadinha que a gente veste en el cone de hilo de bordar. Ela serve Para la hilo no escorregar toda Para el chao o ficar caindo en el pé del cone, evitando que a hilo de nós y arrebente a aguja.",
    "howItWorks": [
      "1. A bordadora veste a rede de contención en el cone de hilo de baixo Para cima.",
      "2. Puxa a ponta del hilo Por el topo aberto de la redinha atEs el mastro guia-hilo.",
      "3. A rede exerce una contención suave mientras el cone gira o desbobina estático.",
      "4. hilos resbaladizos (Cómo hilo dourada metálica o trilobal 100% poliéster) saem sin criar lazadas caídas.",
      "5. La máquina borda en velocidad máxima sin paradas Por bloqueo de cone."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Apertar a rede en excesso en el topo del cone, travando a passagem del hilo y aumentando a tensao a puntada de arrebentar el hilo.",
      "â�Œ Deixar el cone de hilo metálico suelto sin rede, permitindo que a hilo caia y si enrole en el pino suporte del carrete.",
      "â�Œ Usar pedacos de rede rasgados que enroscam en la hilo durante el bordado."
    ],
    "troubleshootingTips": [
      "si a hilo estiver arrebentando a cada 2 minutos con hilo metálico: Vista a redinha cobrindo del meio Para baixo del cone y disminuya a velocidad de la máquina Para 500 PPM.",
      "si a hilo estiver saindo muy dura de la redinha: Corte a redinha en la metade del longitud Para reduzir a presión elástica."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "al bordar con hilo metálico dourada o prateada, vista a redinha cobrindo todo el cone y pase una gota de silicone líquido textil en la rede! A hilo deslizará Cómo seda, sin arrebentar nenhuma vez!",
    "voceSabia": "A maioria de los fabricantes de máquinas multiagulhas y hilos premium (Cómo Madeira y Gutermann) inclui pacotes de redes de contención originais en la caixa de acessórios básicos de la máquina.",
    "practicalExercise": "Pegue un cone de hilo metálico y puxe a ponta sin a rede: repare Cómo a hilo cai y si enrola. ahora coloque a rede de contención y puxe novamente: veja Cómo el hilo sai perfeitamente alinhado y controlado!",
    "quickSummary": "Rede elástica tubular colocada Sobre el cone de hilo Para evitar el desmoronamento y enrosco de hilos resbaladizos y metálicos.",
    "relatedTerms": [
      "carrete de hilo",
      "Desbobinamento de hilo y Sentido del hilo",
      "Ajuste de Tensión del Hilo",
      "Cera y Lubrificante de hilo / Óleo de Silicone Líquido"
    ]
  },
  "d-068-deslocamento-gradual-ponto-angulo-curvatura": {
    "term": "Desplazamiento Gradual de Ángulo de Puntada y Efecto Onda",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del desenvolvimento de ferramentas de preenchimento inteligente de contorno complexo con hilos de direción múltiplas en los softwares Wilcom ES y Compucon.",
    "summary": "Técnica de programación que hace a direción de las puntadas girar suavemente acompanhando a anatomia del desenho, criando reflexos de luz y movimiento natural en el hilo.",
    "definition": "El desplazamiento Gradual de puntada en Ângulo (Curved Stitch Angles / Flowing Stitch Direction) é o método Avanzado de digitalización (ponchado) de matrices / diseños en que múltiplos ângulos de inclinación son distribuídos a lo largo de un objeto sinuoso (Cómo una fita ondulada, corpo de animal, hoja o pétalo de rosa), fazendo con que cada puntada siga a curvatura orgânica de la forma en lugar de manter una direción fixa y estática.",
    "technicalDetails": "Permite criar el efeito de gradiente óptico de brilho (Sheen Gradient), já que el filamento de poliéster reflete a luz ambiente de acordo con o ângulo en que está assentado Sobre el tejido / tela.",
    "beginnerExplanation": "en vez de bordar todo reto en la misma direción, os puntadas vao fazendo a curva del desenho devagarzinho, Cómo si fossem a pintura de un pincel. cuando a luz bate en el bordado, a hilo brilha y parece que el diseño está vivo y en movimiento!",
    "howItWorks": [
      "1. El programador cria el contorno del objeto en el software de matrices / diseños.",
      "2. en vez de definir solo un ângulo global, adiciona várias 'hilos de direción de puntada' a lo largo de la curva.",
      "3. El software interpola matematicamente a transición angular Entre cada hilo guia.",
      "4. La máquina executa las puntadas girando fración Por fración de grau a cada batida de aguja.",
      "5. El resultado es un preenchimento curvo perfeito, anatomico y sin cantos duros."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Colocar hilos de ângulo muy próximas y en direciones opostas repentinas, criando un puntada de cruzamento que forma un 'caroco' duro en la matriz / diseño.",
      "â�Œ no ativar a compensación de tirantez adequada Para objetos curvos, deixando frestas de tejido / tela aparecendo en las dobras de la curva."
    ],
    "troubleshootingTips": [
      "si a hilo estiver amontoando en el lado interno de la curva: Ative a opción 'puntadas Curtos Automáticos' (Auto Short Stitch) en el menu del software Para desbastar el raio interno.",
      "si a curvatura parecer serrilhada: Aumente a quantidade de hilos de direción intermediárias Para suavizar a transición angular."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "al criar hojas y pétalos, Nunca use un único ângulo reto de 45°! Adicione 3 hilos de ângulo acompanhando a nervura central de la hoja. A diferenca de brilho y realismo en el bordado pronto es simplesmente profissional!",
    "voceSabia": "El brilho característico de las hilos de bordar de poliéster trilobal ocurre porque cada filamento tiene seción transversal triangular, funcionando Cómo pequenos prismas que refletem a luz de acordo con o ângulo del puntada!",
    "practicalExercise": "En el seu software, desenhe una letra 'S' en puntada satín con ângulo único de 90° y outra letra 'S' con ângulos curvos acompanhando a letra. Borde as dos lado a lado y compare el brilho bajo a luz del atelie!",
    "quickSummary": "Distribuición de ângulos variáveis que acompanham as curvas del desenho, criando reflexos de luz naturais y acabado orgânico.",
    "relatedTerms": [
      "Ângulo de puntada",
      "Curva Bézier en la digitalización",
      "puntada satín",
      "Brilho del hilo de bordar"
    ]
  },
  "d-069-desativacao-ponto-curto-curvas-fechadas": {
    "term": "Desactivación de Puntadas Cortas en Curvas Cerradas",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "Del controle de parámetros algorítmicos en digitalización (ponchado) avancada Para gestao de furos en la chapa y cortes de tejido / tela en bordados finos.",
    "summary": "Configuración en el software que desabilita o recalcula a filtragem de micropontos en curvas muy estreitas Para preservar a cobertura total sin perfurar el tejido / tela.",
    "definition": "A Desativación o Calibración de puntada Curto en Curvas Fechadas (Short Stitch Control / Custom Corner Stitch Filter) é o ajuste técnico en los parámetros de preenchimento en puntada satín (Satin) que define si el software debe o no suprimir alternadamente las puntadas internos de una curva acentuada. cuando desativado o calibrado con precisión, garante que áreas delicadas (Cómo pontas de hojas o cantos de letras góticas) mantenham el contorno nítido sin criar buracos en el tejido / tela Por perfuración repetida.",
    "technicalDetails": "Por estándar, o filtro de puntadas curtos remove até 50% de las puntadas en el raio interno de una curva Para evitar acúmulo. En el entanto, en hilos muy finas (menores que 1.5 mm), essa filtragem puede deixar el tejido / tela exposto, exigindo a desativación manual o redución de la porcentagem de filtragem Para 20%.",
    "beginnerExplanation": "cuando la máquina hace una curva bem fechadinha, ela puede dar muchas agulhadas en el mismo buraquinho y rasgar el tejido / tela. Esse ajuste en el computadora decide si la máquina pula alguns pontinhos Por dentro de la curva Para no furar el pano, mantendo el diseño bonito y seguro.",
    "howItWorks": [
      "1. El programador identifica un objeto con curvas fechadas o cantos agudos en la matriz / diseño.",
      "2. Acessa as propriedades del objeto en la aba 'puntadas Curtos / Short Stitches'.",
      "3. Avalia a ancho de la coluna: si sea muy estreita, reduz el longitud mínimo del filtro.",
      "4. Define si el puntada curto será alternado en 1:1, 1:2 o desativado Para aquel segmento específico.",
      "5. El software gera a distribuición perfeita de furos en la placa de aguja sin picotar el tejido / tela.",
      "6. A pieza borda con contorno liso y sin rasgos en la borda."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Deixar el filtro estándar de puntada curto ativado en colunas finas de 1 mm, resultando en pontas desdentadas y tejido / tela aparente.",
      "â�Œ Desativar el filtro en colunas largas y pesadas de 6 mm, gerando acúmulo de hilo y quebra de aguja en el vértice interno."
    ],
    "troubleshootingTips": [
      "si a curva fechada de la letra estiver abrindo un buraco en el tejido / tela: Ative el puntada curto en nivel alto (40%) y disminuya a densidade del objeto.",
      "si a ponta de la letra estiver parecendo 'mordida' o rala: Reduza el filtro de puntada curto Para 15% o desative-o solo en aquel objeto fino."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "en fontes pequenas (menores que 8 mm de altura), configure a compensación de canto Para 'Canto Inteligente' (Smart Corner) y ajuste el puntada curto Para 20%! Suas letrinhas ficarao nítidas y con as pontas perfeitamente desenhadas!",
    "voceSabia": "Sin el recurso de puntada curto, una curva fechada de 90 graus en puntada satín chegaria a concentrar até 12 perfuraciones de aguja en un espaco de solo meio milímetro, cortando el tejido / tela Cómo si fosse una tijera!",
    "practicalExercise": "Programe un triángulo pontiagudo con puntada curto 0% y outro con puntada curto 50%. Aplique el simulador de puntadas en la tela con zoom máximo y veja Cómo el según distribui los furos suavemente a lo largo del canto!",
    "quickSummary": "Controle algorítmico en el software que gerencia a quantidade de puntadas en el interior de curvas fechadas Para evitar rasgos en el tejido / tela.",
    "relatedTerms": [
      "Compensación de Fración de puntada y puntada Curto Automático",
      "Cantos Vivos y Esquadro de puntada",
      "puntada satín",
      "densidad de puntadas"
    ]
  },
  "d-070-densidade-progressiva-sombra-relevo-optico": {
    "term": "Densidad Progresiva Para Sombras y Relieve Óptico",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "De la fusao de la técnica de pintura de aguja (Thread Painting) con el controle paramétrico de densidade gradiente en los softwares modernos de matrices / diseños.",
    "summary": "Técnica de programación donde a densidade varia gradualmente de fechada Para aberta en el mismo objeto, criando transición de cor, luz, sombra y volume 3D.",
    "definition": "A Densidade Progressiva Para Sombra y Relevo Óptico (Gradient Density / Variable Stitch Pitch) é a técnica de digitalización (ponchado) que programa un único objeto de preenchimento (Tatami o Satin) con espacamento de puntadas dinâmico, variando suavemente de una área densa y compacta (ex: 0.35 mm) até una área rarefeita y translúcida (ex: 1.20 mm o 2.0 mm). Essa variación permite misturar dos cores sobrepostas o deixar el tejido / tela de fundo transparecer, criando efeitos de luz, sombra y volume tridimensional sin cortes de hilo.",
    "technicalDetails": "Permite curvas de aceleración linear, exponencial o senoidal en la distribuición de puntadas, sendo fundamental Para bordados realistas (animais, rostos, paisagens y frutas) y efeitos de metal polido.",
    "beginnerExplanation": "É Cómo hacer un sombreado en el diseño usando lápis de cor: voce aperta forte de un lado y va soltando a mao devagarzinho Para clarear. En el bordado, la máquina dá muchos pontinhos juntos onde es escuro y va afastando las puntadas onde es claro, criando una pintura linda con relevo!",
    "howItWorks": [
      "1. El programador cria el primeiro objeto de base con densidade progressiva (ex: escuro embaixo clareando Para cima).",
      "2. Cria un según objeto sobreposto con cor más clara y densidade invertida (aberto embaixo fechando en cima).",
      "3. las puntadas de las dos cores si intercalam perfeitamente en el meio del trayectoria.",
      "4. La máquina borda primeiro a cor escura y después a clara con el mismo ângulo de puntada.",
      "5. A fusao de las dos cores cria un degrade contínuo y sin emendas marcadas."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Usar ângulos de puntada diferentes en las camadas sobrepostas de degrade, quebrando a harmonia de la mistura de hilos.",
      "â�Œ Programar a transición con início muy brusco, criando una hilo de corte visível en lugar de una sombra suave.",
      "â�Œ Deixar a camada de cima con densidade muy pesada, cobrindo totalmente a cor de baixo."
    ],
    "troubleshootingTips": [
      "si el degrade ficou con una faixa dura en el meio: Aumente el longitud de la zona de transición en el software y use el perfil de gradiente senoidal (suave).",
      "si el tejido / tela de fundo estiver aparecendo donde no deveria: Coloque una camada prévia de tatami leve de suporte bajo a área Antes de iniciar el sombreado."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Para hacer efeito de ouro envelhecido o brilho 3D en letras de escudo: programe a base con hilo marrom en densidade progressiva de 0.40 mm a 1.0 mm y cubra con hilo dourada en densidade invertida. El resultado parece joia reluzente!",
    "voceSabia": "A técnica de densidade progressiva fue desarrollada originalmente en el Japao Para reproduzir a milenar técnica de bordado manual 'Nihon Shishu' en máquinas computarizadas Tajima y Barudan.",
    "practicalExercise": "Crie un quadrado en el software con preenchimento tatami y ative el efeito 'Gradiente de Densidade' variando de 0.35 mm en la esquerda até 1.20 mm en la direita. Borde en hilo vermelha Sobre tejido / tela branco y veja el lindo degrade surgir!",
    "quickSummary": "Variación programada en el espacamento de puntadas que cria sombras, luz y fusao de cores Para efeito realista y tridimensional.",
    "relatedTerms": [
      "Degrade de puntadas / puntada Sombreado",
      "densidad de puntadas",
      "Pintura de aguja",
      "puntada tatami / relleno"
    ]
  },
  "d-071-dreno-eletricidade-estatica-maquinas-bordar": {
    "term": "Descarga y Drenaje de Electricidad Estática en Bordadoras",
    "level": "Intermedio 🟡",
    "category": "Manutención y Cuidados",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "De la eletrotécnica aplicada a equipamentos industriais automatizados Para proteción de placas eletronicas y microprocessadores contra descargas eletrostáticas (ESD).",
    "summary": "Sistema y procedimentos de aterramento elétrico Para dissipar cargas estáticas geradas Por el atrito de hilos de poliéster y tejidos / telas sintéticos en alta velocidad.",
    "definition": "El Dreno de Eletricidade Estática (ESD Protection & Machine Grounding) é o conjunto de medidas técnicas de aterramento y descarga eletrostática en la carcaca, placa de aguja y mastro guia-hilo de la máquina de bordar. El atrito constante de hilos 100% poliéster y tejidos / telas sintéticos (Cómo tactel, microfibra y nylon) en ambientes secos con ar-condicionado gera milhares de volts de eletricidade estática que pueden causar travamentos en el painel LCD, descalibración del pantógrafo o queima de sensores ópticos.",
    "technicalDetails": "Requer tomada con aterramento estándar (hilo terra con resistencia inferior a 5 ohms), controle de umidade relativa del ar en el atelie Entre 45% y 60% y hilos de cobre o escovas de descarga estática en los suportes de cone en hilos de alta produción.",
    "beginnerExplanation": "cuando voce borda muy rápido con hilo de poliéster en dia seco o en el ar-condicionado, a hilo gera choque de eletricidade estática. si la máquina no tiver un bom hilo terra, esse choque puede hacer a tela digital piscar, travar en el meio del bordado o queimar una plaquinha cara de la máquina.",
    "howItWorks": [
      "1. Durante el bordado en alta rotación (800 PPM), o atrito del hilo de poliéster en los tensores gera cargas elétricas estáticas.",
      "2. As cargas acumulam en la carcaca metálica y en el pantógrafo de la máquina.",
      "3. El sistema de aterramento conduz con seguridad essa eletricidade Para el solo Por el pino terra de la tomada.",
      "4. si el atelie estiver muy seco, o uso de umidificador de ar o spray antiestático en el suporte de hilos neutraliza as cargas.",
      "5. A eletronica de la máquina opera con estabilidade total y sin bugs o reinicializaciones involuntárias."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Quebrar o remover el terceiro pino (pino terra) del plugue de la máquina Para usar en tomadas antigas de dois furos.",
      "â�Œ Ligar la máquina de bordar en la misma extensao o régua de ferro de passar roupa a vapor, causando ruído y surtos elétricos.",
      "â�Œ Deixar el atelie con umidade debajo de 30%, aumentando as faíscas estáticas."
    ],
    "troubleshootingTips": [
      "si a tela de la máquina piscar o reiniciar sozinha cuando voce toca en el bastidor: Desligue imediatamente y providencie a instalación de una tomada con aterramento verdadeiro con eletricista.",
      "si voce estiver llevando pequenos choques al tocar en la máquina: Coloque un tapete de borracha antiestático en el chao donde a operadora trabalha y use umidificador de ambiente."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Nunca corte el pino terra de la sua máquina de bordar! A placa mae y el visor touch custam caro Para consertar. un bom aterramento elétrico en el atelie garante que sua máquina dure muchos anos sin dar nenhum susto nem queimar a la toa!",
    "voceSabia": "El simples movimiento de desenrolar 1.000 metros de hilo de poliéster en alta velocidad puede gerar una carga estática de más de 10.000 volts, suficiente Para danificar circuitos integrados de microprocessadores!",
    "practicalExercise": "Verifique a tomada donde sua máquina está ligada. Certifique-si de que el plugue tiene los 3 pinos originais y teste si a tomada posee aterramento real con un testador de tomadas simples.",
    "quickSummary": "Procedimentos y aterramento elétrico Para eliminar cargas estáticas geradas Por el atrito de hilos sintéticas y proteger a eletronica de la máquina.",
    "relatedTerms": [
      "Operación de la Máquina",
      "Manutención Preventiva",
      "Carcaca de la Máquina de Bordado",
      "Controle de Velocidade"
    ]
  },
  "d-072-duplicacao-contorno-compensacao-sobreposicao": {
    "term": "Duplicación de Contorno con Compensación de Superposición",
    "level": "Intermedio 🟡",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "De las regras fundamentais de ingeniería de digitalización (ponchado) de matrices / diseños Para evitar frestas y deslocamentos de registro Entre preenchimento y contorno final.",
    "summary": "Técnica de matriz / diseño que cria una margem de seguridad y sobreposición calculada Entre el preenchimento de fundo y el contorno externo Para que eles Nunca si desencontrem.",
    "definition": "A Duplicación de Contorno con Compensación de Sobreposición (Overlap Border Compensation / Registration Trapping) é o procedimento técnico ejecutado en el software de bordado en que el contorno de un objeto preenchido es ligeiramente expandido Para dentro de el área de preenchimento (sobreposición de 0.8 mm a 1.2 mm). Isso assegura que, mismo con a tracción mecánica del tejido / tela durante a costura (fruncimiento), o contorno final de puntada satín o puntada cordao cubra perfeitamente a borda del desenho sin deixar fendas de tejido / tela cru aparentes.",
    "technicalDetails": "Diferencia-si de la simples duplicata geométrica Por aplicar compensación direcional de tracción (Pull Compensation) solamente en el eje perpendicular a la direción del puntada, alinhando a sequencia de costura del centro Para fora.",
    "beginnerExplanation": "Sabe cuando voce borda un motivo y el contorno preto de fora queda torto, saindo del lugar y deixando un espaco en branco feio Entre el diseño y el contorno? Essa técnica hace el contorno 'entrar' un milímetrozinho Para dentro de la cor de fundo, garantindo que el encaixe fique siempre perfeito, mismo que el tejido / tela puxe un poco!",
    "howItWorks": [
      "1. El programador cria el objeto de preenchimento de fundo (ex: círculo vermelho en tatami).",
      "2. Duplica a forma vetorial Para gerar el contorno de acabado (ex: puntada satín preto).",
      "3. Aplica una sobreposición Para dentro de 1.0 mm (Overlap/Trapping).",
      "4. Adiciona puntada de soporte (underlay) (underlay) en el preenchimento Para firmar el tejido / tela en la entretela.",
      "5. Programa a ordem de costura Para bordar el fundo primeiro y el contorno logo en seguida.",
      "6. En la máquina, o contorno fecha perfeitamente colado al desenho, sin frestas."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Desenhar el contorno encostando exatamente en la borda teórica del desenho (sin sobreposición), fazendo el fruncimiento abrir una fresta branca Entre el fundo y a borda.",
      "â�Œ hacer sobreposición excessiva de más de 2.5 mm, criando una faixa dura y grossa en el encontro de las puntadas."
    ],
    "troubleshootingTips": [
      "si el contorno estiver saindo fora del lugar en el lado direito: Aumente a sobreposición Para 1.2 mm y aumente a compensación de tirantez del preenchimento en el software.",
      "si el contorno estiver quebrando hilo al passar Por cima del fundo: Reduza a densidade del preenchimento en las bordas o mude el underlay de tatami Para traco simples."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Regra de ouro del atelie Artrelados: Nunca faca contorno de bordado encostando en la beiradinha exata! Deixe siempre 1 milímetro de preenchimento passando Por baixo del contorno. É o segredo Para ter matrices / diseños perfeitas que Nunca saem del registro!",
    "voceSabia": "En la indústria gráqueda de impresión offset, esse mismo conceito de sobreposición preventiva Para evitar frestas brancas Entre cores es chamado de 'Trapping' (armadilha de cores).",
    "practicalExercise": "En el seu software, desenhe un quadrado azul y coloque un contorno preto de 2 mm de ancho con 1 mm de sobreposición Para dentro. Borde en un pedaco de tejido de punto y veja Cómo el encaixe queda 100% perfeito y sin nenhuma folga!",
    "quickSummary": "Técnica de matriz / diseño que cria una margem de sobreposición Entre el fundo y el contorno Para evitar frestas y desalinhamento causados Por el fruncimiento del tejido / tela.",
    "relatedTerms": [
      "Alinhamento de Contorno",
      "Compensación de Puxao",
      "Contorno de Bordado",
      "puntada satín"
    ]
  },
  "d-073-desencaixe-encaixe-rapido-bastidor-trava-magnetica": {
    "term": "Desenganche rápido de Bastidor y Cierre Magnético",
    "level": "Principiante 🟢",
    "category": "Equipamentos y Máquinas",
    "grammarClass": "Sustantivo masculino compuesto.",
    "origin": "Del desenvolvimento de sistemas ergonomicos de fixación rápida y bastidores magnéticos de neodímio Para alta produtividade en confecciones y tallers modernos.",
    "summary": "Mecanismo de engate rápido y bastidores magnéticos que travam el tejido / tela en el bastidor instantaneamente con ípero sin necessidade de parafusos manuais.",
    "definition": "El Desencaixe y Encaixe rápido de bastidor con Trava Magnética (Magnetic Quick-Release Hoop System) é a tecnologia de fixación que substitui los tradicionais anéis plásticos con parafuso de aperto manual Por aros dotados de potentes ípero industriais de neodímio. El sistema permite posicionar, travar y retirar tejidos / telas finos, toallas grossas o piezas já costuradas en segundos, eliminando el cansaco de los puños de la bordadora y prevenindo marcas de esmagamento (marcas de bastidor) en los tejidos / telas delicados.",
    "technicalDetails": "Proporciona presión perimétrica homogenea y autorregulável que si adapta automaticamente a cualquier grosor de material (de 0.2 mm a 8.0 mm) sin exigir ajustes mecânicos de parafusos.",
    "beginnerExplanation": "É un bastidor moderno que fecha con ípero super fortes en lugar de voce ter que ficar apertando parafuso con a mao até doer los dedos. Voce coloca a entretela, o tejido / tela en cima y encosta el aro de cima: ele gruda en la hora, no marca a toalla y voce tira en un clique rápido!",
    "howItWorks": [
      "1. A bordadora apoia a base inferior del bastidor magnético en la bancada con a entretela.",
      "2. Posiciona a pieza a ser bordada (ex: remera o toalla) Sobre a base.",
      "3. Aproxima el aro superior magnético, que es atraído y trava instantaneamente el tejido / tela con presión uniforme.",
      "4. Encaixa el bastidor en el suporte del pantógrafo de la máquina a través de la trava de engate rápido.",
      "5. Borda a matriz / diseño con total estabilidade y sin folgas.",
      "6. al terminar, puxa a alca de desencaixe rápido y libera a pieza pronta en un según."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Deixar los dedos Entre os ípero de neodímio durante el fechamento del bastidor, causando beliscoes fortes.",
      "â�Œ Aproximar cartoes de crédito, relógios mecânicos o pendrives de los ípero de alta intensidade.",
      "â�Œ Puxar el tejido / tela tras el fechamento magnético, desfiando a trama."
    ],
    "troubleshootingTips": [
      "si el tejido / tela escorregar en el bastidor magnético en bordados pesados: Use entretela adesiva o coloque una tira de entretela desprendible (tear-away) dobrada en las bordas Para aumentar a fricción.",
      "si el bastidor estiver difícil de soltar en la bancada: Deslize el aro superior lateralmente en lugar de puxar Para cima reto."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Los bastidores magnéticos son a salvación Para bordar toallas de terciopelo y camisas de lino! Eles Nunca deixam aquel 'aro brilhante' de tejido / tela esmagado que el bastidor tradicional con parafuso costuma deixar!",
    "voceSabia": "Los ípero de neodímio utilizados en bastidores magnéticos profissionais son compostos Por una liga de neodímio, ferro y boro (NdFeB), sendo os ípero permanentes más potentes já criados Por la ciencia moderna!",
    "practicalExercise": "Experimente colocar una toalla de baño bem grossa en un bastidor magnético y outra en el bastidor conún de parafuso. Compare a rapidez del encaixe y veja Cómo en el magnético a toalla no queda deformada nem mastigada!",
    "quickSummary": "Sistema de bastidores con ípero de alta potencia que prendem el tejido / tela instantaneamente sin parafusos y sin marcar a pieza.",
    "relatedTerms": [
      "Aro del bastidor / Anel Interno y Externo",
      "Clipe de bastidor y Travas de Retención de tejido / tela",
      "Operación de la Máquina",
      "Marcas de bastidor"
    ]
  },
  "d-074-divisao-ponto-longo-ponto-dividido-automatico": {
    "term": "División de Puntada Larga y Puntada Dividida Automática",
    "level": "Avanzado 🔴",
    "category": "Programación de Matrices",
    "grammarClass": "Sustantivo femenino compuesto.",
    "origin": "De la evolución de los processadores de matrices / diseños en los softwares de digitalización (ponchado) Para respeitar el limite mecánico de amplitude del garfio / lanzadera y de la aguja.",
    "summary": "Recurso que divide automaticamente puntadas satín excessivamente largos en múltiplos puntadas menores Para evitar hilos sueltos que enroscam y quebram.",
    "definition": "A Divisao de puntada Longo (Auto-Split Satin / Split Stitch Function) é o algoritmo presente en los softwares de digitalización (ponchado) de bordado que fraciona automaticamente puntadas satín (Satin) cuja ancho ultrapasse el limite de seguridad estrutural (geralmente Entre 7.0 mm y 9.0 mm). El software insere una o más penetraciones intermediárias de aguja con estándar alternado, impedindo que el hilo fique flojo, sin sustentación o vulnerável a deshilachados durante el uso y a lavagem de la pieza.",
    "technicalDetails": "Permite configurar el longitud máximo de puntada (ex: limite de 7.5 mm) y el estándar de intercalación de los furos intermediários (estilo randomizado Para acabado invisible o estilo texturizado Para efeitos decorativos).",
    "beginnerExplanation": "La máquina de bordar no puede dar una puntada demasiado larga de un extremo al otro (como una puntada de más de 1 centímetro), porque el hilo quedaría suelto y flojo. La división automática de puntada larga añade una o dos pequeñas puntadas intermedias que sujetan el hilo firmemente contra la tela, manteniendo el bordado impecable y seguro.",
    "howItWorks": [
      "1. El programador cria una letra grande o figura en puntada satín que posee anchos variando Entre 4 mm y 12 mm.",
      "2. En el menu de propriedades del puntada satín, ativa a opción 'Divisao Automática / Auto-Split'.",
      "3. Define el longitud máximo permitido (ex: 7.0 mm).",
      "4. En los trechos estreitos, la máquina borda puntada satín liso tradicional.",
      "5. En los trechos que ultrapassam 7 mm, o software insere penetraciones intermediárias imperceptíveis.",
      "6. A matriz / diseño borda suave, resistente y con acabado plano y durável."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "â�Œ Deixar puntadas satín con más de 10 mm sin divisao automática, resultando en lacos flojos que si soltam en la primeira lavagem del cliente.",
      "â�Œ Alinhar todas as divisoes en la misma hilo reta, criando una 'risca' feia en el meio de la letra en lugar de una divisao suave intercalada."
    ],
    "troubleshootingTips": [
      "si el cliente reclamou que el hilo de la letra grande está repuxando o suelto: Abra a matriz / diseño en el software, ative 'Auto-Split' con limite de 7.0 mm y marque a opción 'Divisao Aleatória / Random Split'.",
      "si la máquina acusar error de 'Salto Excedido / Max Stitch Length': Aplique a divisao de puntadas longos Para que nenhum puntada ultrapasse 9.0 mm."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "siempre ative a 'Divisao Automática de puntada' con valor máximo de 7.0 mm en letras grandes! Use a opción de divisao con textura sutil o aleatória. El bordado queda luxuoso, resistente a puxoes y parece un trabalho de alta-costura!",
    "voceSabia": "A maioria de las máquinas de bordar domésticas posee un limite mecánico rígido de seguridad de 12.7 mm de salto; si a matriz / diseño tiver un puntada maior que isso, la máquina trava o converte el puntada en un corte forcado con salto!",
    "practicalExercise": "En el seu software, desenhe una cenefa retangular de puntada satín con 15 mm de ancho sin divisao y outra con 'Auto-Split' ativado en 7 mm. Observe en el simulador 3D Cómo a segunda queda perfeitamente assentada y firme!",
    "quickSummary": "Recurso que divide puntadas satín maiores que 7 mm en puntadas menores y firmes Para evitar hilos sueltos y garantir durabilidade.",
    "relatedTerms": [
      "puntada satín",
      "longitud de puntada",
      "densidad de puntadas",
      "puntada tatami / relleno"
    ]
  },
  "d-075": {
    "term": "Densidad Fraccionada y Densidad Gradiente",
    "level": "Intermedio 🟡",
    "category": "Programación de Matrices",
    "grammarClass": "Locución nominal formada Por los substantivos densidade, fración y gradiente.",
    "origin": "Del latín densitas (grosor, compresión) y del latín gradiens (que caminha Por degraus).",
    "summary": "Técnica de variación progressiva del espacamento Entre puntadas Para criar degrades suaves, sombreados realistas y transiciones de cor perfeitas sin sobrecarregar el tejido / tela.",
    "definition": "A densidade fracionada o gradiente es a técnica de digitalización (ponchado) avancada en que a distancia Entre as hilos de penetración de puntada no permanece constante, pero varia de forma progressiva y contínua a lo largo de un eje geométrico (Por ejemplo, iniciando en una densidade fechada de 0,38 mm y espacando gradativamente até 1,20 mm o 2,00 mm). Isso permite misturar dos o más cores de hilos sobrepostas sin gerar acúmulo excessivo de massa de hilo nem rigidez en el tejido / tela.",
    "technicalDetails": "Baseia-si en curvas de distribuición matemática (linear, exponencial o logarítmica) aplicadas al cálculo de las hilos de varredura en el software de matrices / diseños. al sobrepor dois bloques de puntadas con gradientes invertidos (un abrindo de 0,4 mm Para 1,5 mm y el seguinte fechando de 1,5 mm Para 0,4 mm con outra cor), os hilos si intercalam opticamente, gerando a ilusao de una terceira cor intermediária Por síntese aditiva visual.",
    "beginnerExplanation": "É o jeito de hacer 'degrade' en el bordado, Cómo el Por del sol o el sombreado de un pétalo. en vez de rellenar todo apertadinho, la máquina va deixando los pontinhos cada vez más afastados, permitindo que outra cor de hilo si misture Por cima sin ficar un bloque duro de hilo.",
    "howItWorks": [
      "1. En el software de matrices / diseños, seleciona-si el objeto de preenchimento (tatami o puntada satín).",
      "2. Ativa-si a ferramenta de 'Gradiente de Densidade / Efeito Acordeom'.",
      "3. Define-si a densidade inicial (ex: 0,40 mm) y a densidade final (ex: 1,50 mm), bem Cómo el sentido del gradiente.",
      "4. Cria-si una segunda camada sobreposta con a cor secundária y el gradiente en el sentido inverso.",
      "5. La máquina borda primeiro a cor de base y después a cor de sobreposición, mesclando los hilos perfeitamente."
    ],
    "construction": [],
    "mainTypes": [],
    "advantages": [],
    "limitations": [],
    "practicalExamples": [],
    "commonErrors": [
      "❌ Deixar as dos camadas con densidade estándar fechada (0,40 mm), gerando sobreposición pesada que quebra aguja y empedra el tejido / tela",
      "❌ Espacar demais a densidade final (encima de 2,5 mm) en tejidos de punto, fazendo a cor de fundo del tejido / tela vazar de forma descontrolada",
      "❌ Usar puntada de soporte (underlay) (underlay) muy denso embaixo de el área de degrade, que compete visualmente con a transición de cores"
    ],
    "troubleshootingTips": [
      "si a transición de cor ficar marcada Cómo una hilo reta: Aumente el intervalo de sobreposición de las dos camadas en Por el menos 3 mm en el software.",
      "si el degrade ficar ralo y sin cor: Diminua a densidade máxima Para 1,2 mm y utilice hilo trilobal de alto brilho.",
      "si a aguja quebrar en el área de encontro de las cores: Desative el underlay de la segunda camada de gradiente."
    ],
    "whenToAdjust": "",
    "dicaArtrelados": "Para hacer el degrade perfeito en el estilo Artrelados, use underlay solo en la primeira cor de fundo. A segunda cor del gradiente debe entrar con 'Underlay Nenhum' y compensación de tirantez (pull compensation) de 0,35 mm — o resultado queda leve, sedoso y con toque de terciopelo!",
    "voceSabia": "A técnica de gradiente de densidade fue inspirada en el pontilhismo de la pintura impressionista francesa del século XIX (Cómo en las obras de Georges Seurat), onde pequenos puntadas de cores puras colocados lado a lado son mesclados diretamente Por el olho humano!",
    "practicalExercise": "Crie en el seu software un retángulo de 6x4 cm dividido en dos metades con gradiente invertido (una azul abrindo Para la direita y una amarela abrindo Para la esquerda). Borde Sobre tricoline y veja Cómo el centro forma un verde suave y natural.",
    "quickSummary": "Variación progressiva del espacamento de las puntadas Para criar degrades suaves, sombreados y transiciones de cores realistas.",
    "relatedTerms": [
      "densidad de puntadas",
      "puntada tatami / relleno",
      "Curvatura y Ângulo de puntada",
      "Puntada de Soporte",
      "hilo de Poliéster Trilobal"
    ]
  }
};

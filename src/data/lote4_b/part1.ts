import { Verbete } from "../../types";

export const LOTE4_B_PART1_ES: Record<string, Partial<Verbete>> = {
  "b-095-borda-selada-a-laser-corte-termico-de-emblemas": {
    "term": "Borde Sellado por Láser y Corte Térmico de Emblemas (Laser-Cut Sealed Patch Border)",
    "level": "Avanzado 🔴",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del acrónimo inglés LASER (Light Amplification by Stimulated Emission of Radiation) y del método de sellado térmico de polímeros desarrollado para la confección industrial de escudos y parches de alta precisión.",
    "definition": "Proceso automatizado de acabado perimetral donde un haz de láser de CO2 o una cuchilla térmica focalizada corta y funde simultáneamente los bordes de telas sintéticas (poliéster, nailon, microfibra) alrededor de un bordado, cauterizando los filamentos estructurales para evitar el deshilachado sin requerir una costura de sobrehilado o reborde Merrow.",
    "howItWorks": [
      "1. La matriz de bordado incluye marcas ópticas de registro perimetral cruzadas (Target Crosshairs) leídas por la cámara CCD del cabezal láser.",
      "2. El bordado y los apliques se completan en el bastidor con hilos de poliéster estándar.",
      "3. El cabezal láser emite un haz infrarrojo enfocado a nivel submilimétrico a lo largo del contorno vectorizado.",
      "4. El calor instantáneo del haz supera la temperatura de fusión del poliéster (250 °C a 260 °C), evaporando el sustrato y sellando los bordes con un cordón vítreo uniforme.",
      "5. El parche queda liberado limpiamente del sustrato base con una tolerancia dimensional inferior a 0,1 mm."
    ],
    "beginnerExplanation": "En vez de cortar un parche a mano con tijeras o hacerle un borde grueso con máquina overlock, la máquina le dispara un rayo láser invisible que corta la tela sintética y a la vez derrite los hilitos del borde para que queden sellados como si fueran plástico duro. El parche sale perfecto, con bordes filosos y prolijos que nunca se deshilachan.",
    "practicalExamples": [
      "Corte perimetral de escudos para camisetas de fútbol profesional con base de sarga de poliéster.",
      "Troquelado de números y letras de aplique multicapa para uniformes de hockey y béisbol.",
      "Fabricación de parches militares con microletras y fijación posterior por velcro o termoadhesivo."
    ],
    "matrixParametersRelation": [
      "Línea de vector de corte (Cut Vector Path): debe coincidir exactamente con una distancia de 0,3 mm a 0,5 mm del satín exterior.",
      "Potencia del láser vs. velocidad de avance: típicamente 20 W a 35 W con velocidad de 150 a 300 mm/s para evitar bordes quemados o amarillentos.",
      "Ventilación por asistencia de aire comprimido (Air Assist): desvía los humos y evita llamaradas sobre el hilo de bordar."
    ],
    "commonErrors": [
      "Utilizar telas con alto contenido de algodón o rayón, que se queman y carbonizan en vez de derretirse y sellarse.",
      "Desalineación entre la cámara óptica de registro y el pantógrafo de la máquina, cortando puntadas del bordado.",
      "Exceso de potencia del láser, generando rebordes rígidos y cortantes que raspan la piel del usuario."
    ],
    "troubleshootingTips": [
      "Calibra siempre el punto cero focal (Focus Height) del láser colocando el espaciador acrílico sobre la superficie del bastidor.",
      "Limpia el lente óptico de ZnSe (seleniuro de zinc) con alcohol isopropílico antes de cada turno para mantener la potencia pura del haz.",
      "Usa sarga 100% poliéster resinada con película termoadhesiva trasera de poliuretano para un sellado estanco y limpio."
    ],
    "whenToAdjust": "Ajusta la calibración óptica si el corte láser se desvía más de 0,2 mm del borde bordado o si notas bordes marrones por quemado.",
    "dicaArtrelados": "El secreto industrial Artrelados para bordes láser impecables: Si cortas parches blancos o de colores claros, reduce la potencia del láser y aumenta la presión de aire comprimido asistido a 2,5 bares. De este modo expulsarás los gases calientes antes de que puedan teñir o ahumar el hilo blanco del contorno.",
    "voceSabia": "¿Sabías que los sistemas láser para máquinas de bordar utilizan galvanómetros con espejos de silicio que mueven el haz de luz a velocidades de hasta 1200 milímetros por segundo, cortando un escudo completo en menos de dos segundos?",
    "practicalExercise": "Compara al microscopio o con lupa de relojero el borde de un parche cortado a tijera frente a uno sellado por láser: notarás cómo en el láser cada fibra de poliéster tiene una microesfera fundida que sella por completo la trama.",
    "quickSummary": "Tecnología de corte perimetral de parches mediante haz láser de CO2 que corta y fusiona los bordes sintéticos sin deshilachado.",
    "summary": "Tecnología de corte perimetral de parches mediante haz láser de CO2 que corta y fusiona los bordes sintéticos sin deshilachado.",
    "relatedTerms": [
      "Borde de Parche / Acabado Merrow de Emblemas",
      "Bordado Cutwork con Agujas de Corte Electrónico",
      "Termofijación y Sellado Térmico",
      "Marcas de Registro Óptico"
    ]
  },
  "b-022-bordado-applique": {
    "term": "Bordado Appliqué (Bordado con Aplicación)",
    "level": "Iniciante 🟢",
    "category": "Técnicas Especiales",
    "grammarClass": "Sustantivo masculino",
    "origin": "Del francés appliquer (poner encima, superponer). Técnica centenaria adaptada a la programación digital automatizada para reducir tiempo de bordado y consumo de hilo en grandes áreas.",
    "definition": "Técnica fundamental del bordado computarizado que consiste en fijar piezas de tela recortadas sobre el tejido base mediante secuencias programadas de costura perimetral (hilván de posición, puntada de sujeción y remate en cordón satín o festón), rellenando extensas superficies con volumen, textura y bajo recuento de puntadas.",
    "howItWorks": [
      "1. Marcado de posición (Placement Stitch): la máquina borda una línea recta sencilla que dibuja el contorno exacto donde se colocará la tela de aplique.",
      "2. Colocación de la tela: la bordadora detiene la máquina o el pantógrafo avanza automáticamente para colocar la tela sobre la marca.",
      "3. Fijación o sujeción (Tackdown Stitch): la máquina cose una puntada recta reforzada o zigzag fino atrapando la tela sobre el sustrato base.",
      "4. Recorte perimetral: se corta el sobrante de tela al ras de la costura de fijación con tijera de pico de pato (Duckbill).",
      "5. Cordón de cobertura (Satin / Cover Stitch): se borda una columna densa de satín (de 3,5 mm a 4,5 mm de ancho) que sella y embellece los bordes cortados."
    ],
    "beginnerExplanation": "Es la técnica mágica para bordar dibujos grandes (como letras de buzos universitarios o animalitos infantiles) sin tener que llenar todo con millones de puntadas de hilo. La máquina marca dónde va la forma, tú apoyas un pedazo de tela bonita, la máquina la sujeta con unas costuritas, recortas el sobrante alrededor y finalmente la máquina borda un borde gordito de satín que tapa el corte.",
    "practicalExamples": [
      "Letras grandes de buzos universitarios con tela de paño lenci o toalla (chenille).",
      "Diseños infantiles en camisetas con telas estampadas de algodón o piqué.",
      "Escudos corporativos donde el fondo es una tela de sarga contrastante."
    ],
    "matrixParametersRelation": [
      "Parada programada (Stop / Color Change): indispensable insertar un comando de parada en la matriz entre la puntada de posición y la de fijación.",
      "Compensación de tirantez (Pull Compensation): aplicar entre 0,4 mm y 0,6 mm en la columna de satín de cobertura para que no se escape el borde recortado.",
      "Densidad del satín final: entre 0,38 mm y 0,42 mm para tapar completamente la trama de la tela de aplique."
    ],
    "commonErrors": [
      "Cortar la tela de aplique demasiado lejos de la costura de fijación, haciendo que asomen pelusas o flecos fuera del satín.",
      "Cortar las puntadas de sujeción con la tijera al recortar, aflojando la tela durante el bordado.",
      "No usar pegamento temporal en spray o fiselina adhesiva, provocando burbujas y arrugas en el centro de la tela de aplique."
    ],
    "troubleshootingTips": [
      "Utiliza tijeras de aplique 'pico de pato' (Duckbill): su paleta plana protege la tela de base mientras recortas al ras.",
      "Si la tela de aplique es elástica (como jersey o modal), plánchale entretela de rasgar o termoadhesiva por detrás antes de colocarla en el bastidor.",
      "Asegúrate de que la tela de aplique esté prelavada si la prenda final va a lavarse con frecuencia, para evitar encogimientos desparejos."
    ],
    "whenToAdjust": "Modifica el ancho de la columna de satín si observas que la tela base se asoma o si la tela de aplique se deshilacha fácilmente.",
    "dicaArtrelados": "El tip de oro Artrelados para recortar apliques sin sacar el bastidor: Nunca desabroches el bastidor de la máquina ni saques la tela del aro. Si tu máquina no tiene botón de avance de bastidor ('Frame Out'), mueve el volante manualmente hasta la posición más alta de la aguja y apoya tu mano izquierda plana sobre el bastidor para sostener la tela mientras recortas con la tijera pico de pato.",
    "voceSabia": "¿Sabías que un diseño grande de 15 cm bordado 100% en puntada tatami puede requerir más de 45.000 puntadas y 40 minutos de máquina, mientras que el mismo diseño realizado en técnica de appliqué consume menos de 7.000 puntadas y tarda apenas 8 minutos?",
    "practicalExercise": "Crea una letra 'A' de 8 cm en tu software con tres pasos: 1) línea guía, 2) puntada de fijación, 3) satín perimetral de 4 mm. Bórdala en una tela plana usando un retazo de tela estampada y evalúa la prolijidad de tu corte perimetral.",
    "quickSummary": "Técnica de fijación de retazos de tela sobre la prenda con costura perimetral para cubrir áreas extensas con bajo recuento de puntadas.",
    "summary": "Técnica de fijación de retazos de tela sobre la prenda con costura perimetral para cubrir áreas extensas con bajo recuento de puntadas.",
    "relatedTerms": [
      "Bordado con Aplicación de Telas",
      "Puntada de Fijación (Tackdown Stitch)",
      "Tijera Pico de Pato (Duckbill Scissors)",
      "Compensación de Tirantez (Pull Compensation)"
    ]
  },
  "b-bordado-bobbin-work-avesso-fio-especial-bobina": {
    "term": "Bordado Bobbin Work / Bordado por el Revés con Hilo Especial en la Bobina (Reverse Bobbin Work)",
    "level": "Avanzado 🔴",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés bobbin work (trabajo de bobina). Técnica de bordado libre y programado nacida en máquinas de coser y adaptada a máquinas de bordar computarizadas para aplicar hilados decorativos pesados.",
    "definition": "Técnica especializada donde se carga un hilo grueso decorativo (lana, cinta de seda, hilo de tapicería, cordón trenzado o hilo metalizado pesado de calibre 12wt o mayor) en la caja de bobina inferior, bordando con la tela colocada boca abajo en el bastidor para que el efecto texturado principal quede visible en la cara superior al desbastar la pieza.",
    "howItWorks": [
      "1. Se desactiva o afloja drásticamente la tensión del resorte de la caja de bobina secundaria (o se utiliza una caja de bobina específica para Bobbin Work).",
      "2. El hilo grueso decorativo se devana a mano o a velocidad muy lenta en la canilla de metal sin estirarlo.",
      "3. En la aguja superior se enhebra un hilo de bordar fino (calibre 50wt o 60wt) del mismo color o transparente de monofilamento de poliamida.",
      "4. La matriz se programa en modo espejo horizontal (Horizontal Flip / Mirror Image), dado que la tela se coloca con el revés hacia arriba en el bastidor.",
      "5. La máquina cose puntadas rectas largas (3 mm a 5 mm) o motivos de contorno abierto, permitiendo que el hilo inferior forme bucles y relieves mullidos."
    ],
    "beginnerExplanation": "Hay hilos tan gruesos y hermosos (como lana de tejer, cordoncitos dorados o cintitas de raso) que no pasan por el ojo de la aguja sin romperla. Con el Bobbin Work, ponemos ese hilo gordo en la canilla de abajo, ponemos la tela al revés en el bastidor (la parte linda mirando hacia la mesa) y cosemos desde arriba con un hilo fino común. Cuando sacas el bordado y lo das vuelta, ¡aparece todo el relieve gordito del hilo especial!",
    "practicalExamples": [
      "Contornos de mantelería fina y tapices bordados con hilo de rayón grueso mouliné trenzado.",
      "Detalles mullidos en chaquetas y abrigos de lana utilizando cordoncillo trenzado en la canilla.",
      "Efectos de caligrafía artesanal y filigranas doradas en prendas de alta costura."
    ],
    "matrixParametersRelation": [
      "Modo Espejo (Mirror Horizontal): obligatorio invertir el diseño en el software antes de enviar a la máquina.",
      "Longitud de puntada de contorno: mínimo 3,0 mm a 4,5 mm para dar espacio al grosor del hilo inferior.",
      "Densidad de puntada: prohibido usar puntada satín densa o tatami cerrado; solo puntadas de corrida (Run Stitch) abiertas y curvas suaves."
    ],
    "commonErrors": [
      "Olvidar invertir el diseño en espejo, haciendo que textos y monogramas queden al revés en la cara visible de la tela.",
      "Apretar demasiado el tornillo del resorte de la caja de bobina, bloqueando el avance del hilo grueso y quebrando agujas.",
      "Devanar el hilo grueso en la canilla con devanador automático a alta velocidad, aplastando y deformando el hilado."
    ],
    "troubleshootingTips": [
      "Ten una caja de bobina adicional marcada con esmalte rojo destinada exclusivamente para Bobbin Work, sin alterar la caja calibrada estándar.",
      "Devana la bobina despacio con los dedos, guiando el hilo con suavidad para que quede parejo y sin nudos.",
      "Usa una aguja estándar 90/14 o 100/16 Topstitch: su ojal ancho evita la fricción excesiva con el hilo superior fino al atrapar el lazo grueso."
    ],
    "whenToAdjust": "Afloja el tornillo del muelle de la caja de bobina si el hilo grueso no sale suavemente al tirar de él con la mano con una leve resistencia.",
    "dicaArtrelados": "El tip maestro Artrelados para Bobbin Work: Coloca siempre una entretela hidrosoluble pesada o entretela de rasgar suave por el revés (que en este caso quedará hacia arriba mirando a la aguja). Esto evitará que los dientes de arrastre o el prensatelas de bordado raspen la tela delicada mientras trabajas.",
    "voceSabia": "¿Sabías que el Bobbin Work fue la técnica secreta de los grandes diseñadores de moda de París en los años 1950 para imitar bordados artesanales a mano con lanas sobre vestidos de noche de tweed y terciopelo?",
    "practicalExercise": "Toma una bobina de metal vacía y enróllale a mano 3 metros de hilo de bordar a mano de 6 hebras (mouliné). Afloja el tornillo de tu caja de bobina de repuesto hasta que el hilo pase sin trabarse. Programa una espiral en puntada recta de 3,5 mm, borda por el revés y admira el resultado.",
    "quickSummary": "Bordado invertido con hilo grueso decorativo cargado en la canilla inferior para generar texturas ricas en la cara visible.",
    "summary": "Bordado invertido con hilo grueso decorativo cargado en la canilla inferior para generar texturas ricas en la cara visible.",
    "relatedTerms": [
      "Caja de Bobina / Portacanilla (Bobbin Case)",
      "Tensión de Hilo de Bobina",
      "Bordado Chenille / Punto Musgo Electrónico",
      "Espejo Horizontal (Mirror Image)"
    ]
  },
  "b-bordado-chenille-ponto-musgo-eletronico": {
    "term": "Bordado Chenille / Punto Musgo Electrónico (Chenille & Loop Stitch Embroidery)",
    "level": "Avanzado 🔴",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del francés chenille (oruga, por su parecido con el cuerpo velloso de una oruga). Técnica textil mecánica originada en Francia e industrializada en Estados Unidos para chaquetas universitarias (Letterman Jackets).",
    "definition": "Modalidad de bordado computarizado ejecutada mediante cabezales especializados (o dispositivos mixtos) que operan con una aguja de gancho (Hook Needle / Crotchet Needle) y un looper oscilante inferior sin hilo de canilla tradicional, formando bucles densos de hilo de lana o acrílico en la superficie de la tela que producen una textura aterciopelada de pelo esponjoso (Loop Stitch / Moss Stitch).",
    "howItWorks": [
      "1. La aguja de gancho perfora la tela hacia abajo girando según la dirección del vector de la puntada.",
      "2. En la parte inferior, un enlazador giratorio alimenta un hilo grueso de lana o acrílico sobre el gancho de la aguja.",
      "3. La aguja sube a través de la tela levantando un lazo a una altura calibrada por el prensatelas neumático.",
      "4. El cambio de dirección del cabezal crea dos efectos: bucle cerrado (Loop Stitch / Rizo) o bucle cortado y afelpado (Moss Stitch / Chenille verdadero).",
      "5. Los bucles contiguos se entrelazan formando una alfombra densa y mullida con volumen de 2 mm a 5 mm de espesor."
    ],
    "beginnerExplanation": "Es el bordado clásico con textura de toalla suave o peluche que tienen las letras gigantes de las chaquetas deportivas americanas. No se hace con puntadas comunes planas: la máquina tiene una aguja con gancho que va sacando rulitos de lana gruesa hacia arriba, creando una superficie esponjosa y mullida como una mini alfombrita.",
    "practicalExamples": [
      "Letras y números emblemáticos en chaquetas universitarias y de equipos de béisbol colegial.",
      "Figuras infantiles aterciopeladas en mantas polares, toallones y buzos.",
      "Parches de moda urbana con relieve táctil esponjoso y contornos en satín fino."
    ],
    "matrixParametersRelation": [
      "Dirección del vector y rotación del gancho: la matriz chenille contiene códigos específicos de giro angular de aguja (M-Codes / Chenille Data).",
      "Espaciado de hilera de puntada (Loop Spacing): típicamente entre 1,2 mm y 1,8 mm; demasiado tupido apelmaza los bucles y demasiado abierto deja huecos.",
      "Altura de bucle (Loop Height): ajustada mecánicamente o por motor paso a paso entre nivel 1 (bajo) y nivel 6 (alto y voluminoso)."
    ],
    "commonErrors": [
      "Deshilachado o desarme de bucles al no programar una puntada de anclaje perimetral en puntada recta de cadeneta (Chain Stitch).",
      "Utilizar hilos con nudos o fibras quebradizas que traban el gancho de la aguja especializada.",
      "Tensión excesiva en el suministro del cono de lana, provocando bucles irregulares de distintas alturas."
    ],
    "troubleshootingTips": [
      "Asegúrate de que la orientación del ojo abierto del gancho de la aguja coincida con las marcas de graduación del eje del cabezal.",
      "Aplica entretela de fieltro o tela sarga pesada en la base; evita tejidos finos que no puedan retener la tensión de los bucles.",
      "Sella el revés del bordado chenille con entretela termoadhesiva fusible de punto para blindar los bucles contra tirones accidentales."
    ],
    "whenToAdjust": "Regula la altura del looper inferior si los bucles salen desparejos o si la aguja rasga los bucles ya formados en la pasada anterior.",
    "dicaArtrelados": "El secreto de acabado Artrelados para letras Chenille: Siempre programa un borde de contorno en puntada de cadeneta (Chainstitch) o una columna de satín apretada rodeando toda la letra antes de rellenar con el punto musgo. El borde actúa como un dique de contención que mantiene todos los bucles de lana firmes y con siluetas nítidas.",
    "voceSabia": "¿Sabías que las máquinas industriales combinadas Chenille-Bordado Estándar tienen dos tipos de cabezales en el mismo puente: cabezales normales de 9 a 15 agujas para satín y detalles, y cabezales chenille dedicados que cambian entre bucle y cadeneta de forma automática?",
    "practicalExercise": "Toca una chaqueta con letras chenille: pasa tus dedos sobre los bucles para sentir la densidad de los lazos y fíjate por detrás cómo una fina cadeneta invisible sostiene toda esa montaña de terciopelo.",
    "quickSummary": "Bordado con aguja de gancho que crea bucles de lana con textura afelpada tipo toalla o musgo para letras universitarias y moda.",
    "summary": "Bordado con aguja de gancho que crea bucles de lana con textura afelpada tipo toalla o musgo para letras universitarias y moda.",
    "relatedTerms": [
      "Puntada Cadeneta (Chain Stitch)",
      "Cabezal Mixto de Bordado",
      "Bordado en Alto Relieve con EVA / 3D Puff",
      "Termofijación y Sellado Térmico"
    ]
  },
  "b-033-bordado-com-aplicacao-de-tecidos": {
    "term": "Bordado con Aplicación de Telas (Fabric Appliqué Technique)",
    "level": "Iniciante 🟢",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín applicare (juntar, arrimar). Evolución técnica del remiendo artístico tradicional convertido en uno de los pilares más rentables de la industria del bordado personalizado.",
    "definition": "Método integral de confección y digitalización en el que fragmentos seleccionados de tejidos planos, estampados o texturados se integran al bordado principal mediante una secuencia programada de costuras de referencia, fijación y ribeteado ornamental, permitiendo combinar texturas complejas y optimizar los costos de producción.",
    "howItWorks": [
      "1. Trazado guía: la máquina borda la silueta de referencia en la prenda base.",
      "2. Montaje del tejido de aplique previamente tratado con adhesivo termofusible o fijador temporal.",
      "3. Costura de fijación: una puntada recta doble o zigzag ligero asegura la tela.",
      "4. Desbaste del sobrante: recorte manual con tijera fina de manicura o tijera pico de pato.",
      "5. Costura de terminación: cordón perimetral en satín, festón francés o puntada manta que encierra y decora los bordes."
    ],
    "beginnerExplanation": "Consiste en bordar uniendo telas distintas en vez de rellenar todo con hilo. Imagina que quieres hacer un oso: en vez de gastar hilo marrón durante media hora, la máquina te marca el cuerpo, pegas un retazo de tela de corderito o algodón suave, lo cose, recortas los bordes sobrantes y la máquina le hace un marco bordado impecable alrededor.",
    "practicalExamples": [
      "Nombres y escudos en mochilas y toallas con telas estampadas infantiles.",
      "Banderas y logotipos empresariales sobre camperas de abrigo utilizando telas de sarga impermeable.",
      "Camisones y toallas de bautismo con apliques de piqué blanco y festones calados."
    ],
    "matrixParametersRelation": [
      "Superposición de satín de ribete (Overlap): mínimo de 1,5 mm de pisada sobre la tela de aplique y 2,0 mm sobre la tela base.",
      "Comandos de salto y corte: paradas forzadas entre fases para manipular la pieza con seguridad.",
      "Puntada bajo satín (Underlay): refuerzo en zigzag o doble corrida centrado para dar cuerpo al cordón final."
    ],
    "commonErrors": [
      "Usar telas de aplique que destiñen al lavarse, arruinando la prenda principal blanca.",
      "Recortar la tela dejando hilachas largas que se escapan entre las puntadas de satín.",
      "No considerar el sentido del hilo (al hilo o al bies) de la tela de aplique, generando arrugas al planchar."
    ],
    "troubleshootingTips": [
      "Plancha siempre entretela termoadhesiva de doble cara (fiselina adhesiva) por detrás de la tela de aplique antes de recortar: el pegamento sella la trama y evita deshilaches.",
      "Realiza una prueba de lavado de la tela de aplique para verificar solidez de color.",
      "Utiliza hilo del mismo tono exacto de la tela de aplique en el satín final para un acabado óptico impecable."
    ],
    "whenToAdjust": "Ensancha la columna de satín si la tela del aplique tiene una trama gruesa o tendencia al deshilache como el lino o la gasa.",
    "dicaArtrelados": "El tip de corte rápido Artrelados: Si tienes que producir 50 remeras con el mismo aplique, no recortes sobre el bastidor una por una. Usa tu plotter de corte o envía a cortar por láser las siluetas de tela con 0,3 mm de sobrante: luego solo tendrás que calzar la tela pre-cortada exactamente sobre la línea de marcado y la máquina la coserá sin pausas de recorte.",
    "voceSabia": "¿Sabías que la técnica de appliqué ahorra hasta un 80% de consumo de hilo superior y reduce a la quinta parte el tiempo de máquina en figuras mayores a 10 cm?",
    "practicalExercise": "Toma un retazo de tela de jeans viejo y aplícalo sobre un lienzo de algodón con forma de estrella. Borda un contorno de festón con puntada de 3,5 mm y observa la firmeza del resultado.",
    "quickSummary": "Integración de telas estampadas o texturadas en el bordado para crear piezas ricas en volumen con ahorro de hilo y tiempo.",
    "summary": "Integración de telas estampadas o texturadas en el bordado para crear piezas ricas en volumen con ahorro de hilo y tiempo.",
    "relatedTerms": [
      "Bordado Appliqué (Bordado con Aplicación)",
      "Puntada de Fijación (Tackdown Stitch)",
      "Entretela Termoadhesiva Doble Faz",
      "Compensación de Tirantez"
    ]
  },
  "b-bordado-cordao-fita-soutache-eletronico": {
    "term": "Bordado con Cordón, Cinta y Soutache Electrónico (Cording, Taping & Coiling Device)",
    "level": "Avanzado 🔴",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del francés soutache (galón trenzado de pasamanería militar) y del inglés cording/coiling device. Dispositivos mecatrónicos añadidos a máquinas industriales para costura de cordoncillos continuos.",
    "definition": "Sistema avanzado de bordado mecatrónico consistente en un dispositivo accesorio montado en el cabezal que alimenta y guía automáticamente cordones, cintas planas, soutache o hilos trenzados frente a la aguja, mientras esta ejecuta puntadas en zigzag o puntadas invisibles de anclaje oscilando y rotando 360 grados sincronizada con la trayectoria vectorial.",
    "howItWorks": [
      "1. El dispositivo guía gira mecánicamente mediante servomotores dirigidos por códigos angulares de la matriz.",
      "2. El cordón o soutache desciende por una boquilla central justo por delante de la penetración de la aguja.",
      "3. La aguja cose a izquierda y derecha del cordón atrapándolo contra la tela base sin perforar el núcleo del cordoncillo.",
      "4. En la técnica de cinta (Taping), la boquilla plana pliega y dobla la cinta con precisión en las esquinas.",
      "5. En la técnica en espiral (Coiling), un rotor enrolla un hilo secundario de color brillante alrededor del cordón base mientras se cose a la tela."
    ],
    "beginnerExplanation": "Es un accesorio especial que se le pone a la máquina para que cosa automáticamente cordones gruesos, cintas de raso o tiras trenzadas sobre la ropa formando arabescos y firuletes. La máquina tiene una pequeña boquilla que va guiando el cordón y una aguja que va dando saltitos de lado a lado para sujetarlo a la tela sin aplastarlo.",
    "practicalExamples": [
      "Galones militares y ornamentos de trajes tradicionales en soutache dorado.",
      "Arabescos y guardas florales en vestidos de fiesta y trajes de novia con cintas de seda.",
      "Diseños étnicos y caligrafías voluminosas sobre camperas de denim con cordón de algodón grueso."
    ],
    "matrixParametersRelation": [
      "Códigos de control angular (Steering Angles): la matriz debe exportarse en formatos industriales que soporten datos de rotación de cabezal (como Tajima .tbf o Barudan .fdr).",
      "Ancho de zigzag de fijación: típicamente de 1,2 mm a 2,5 mm según el diámetro del cordón utilizado.",
      "Velocidad de trabajo recomendada: entre 450 y 650 PPM para permitir giros limpios en ángulos agudos."
    ],
    "commonErrors": [
      "Programar giros cerrados en 90 grados sin curva de radio mínimo, haciendo que la boquilla pellizque la tela o desvíe el cordón.",
      "Utilizar una aguja demasiado fina que se desvíe al rozar el cordón, provocando impactos contra la placa.",
      "Tensión excesiva en la bobina de alimentación del cordón, frunciendo la tela al avanzar el pantógrafo."
    ],
    "troubleshootingTips": [
      "Elige la boquilla guía de cordón con el diámetro interior inmediatamente superior al calibre del cordón para que deslice sin fricción.",
      "Usa hilo superior transparente de monofilamento de poliamida calibre 0,08 mm para que las puntadas de sujeción resulten invisibles.",
      "Lubrica semanalmente los engranajes de rotación de 360° del dispositivo de cording con grasa de teflón blanca."
    ],
    "whenToAdjust": "Regula la altura de la boquilla guía si el cordón baila suelto o si raspa la tela provocando arrugas durante las curvas.",
    "dicaArtrelados": "El tip de pasamanería Artrelados: Si no tienes el costoso dispositivo automático de cording, puedes hacer un efecto similar en tu máquina familiar usando el prensatelas de cordoncillo ranurado (Braiding Foot): pasas el cordón por el agujerito frontal del prensatelas y programas un contorno en puntada zigzag angosta de 2 mm a velocidad baja.",
    "voceSabia": "¿Sabías que los dispositivos industriales de soutache y cording pueden alternar entre bordado tradicional de agujas y bordado de cordón en el mismo diseño sin detener la máquina para cambios manuales?",
    "practicalExercise": "Observa un saco de gala militar o traje de torero auténtico: fíjate cómo el soutache forma bucles perfectos donde el hilo de anclaje se oculta en la hendidura central del cordón trenzado.",
    "quickSummary": "Dispositivo accesorio que cose automáticamente cordones, cintas y soutache sobre la tela con rotación mecánica sincronizada.",
    "summary": "Dispositivo accesorio que cose automáticamente cordones, cintas y soutache sobre la tela con rotación mecánica sincronizada.",
    "relatedTerms": [
      "Borda Cordoncillo / Cordón de Realce",
      "Dispositivo de Lentejuelas (Sequin Device)",
      "Puntada Zigzag de Anclaje",
      "Prensatelas de Cordoncillo"
    ]
  },
  "b-bordado-efeito-franja-3d-ponto-fringe": {
    "term": "Bordado con Efecto Fleco 3D / Punto Fringe (Fringe Embroidery & 3D Thread Loops)",
    "level": "Intermedio 🟡",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés fringe (fleco, orla de hilos). Técnica digital de ateliê desarrollada para crear melenas de animales, barbas, flores tridimensionales y flecos de alfombras con hilo estándar de bordar.",
    "definition": "Efecto especial de bordado donde se programa una columna de satín con una costura de remate firme y apretada en uno de sus extremos y ausencia de trabado en el extremo opuesto; tras bordarse, se corta el hilo de la bobina por el revés de la tela y se tiran de las puntadas desde el derecho, liberando los bucles para formar flecos tupidos y móviles en tres dimensiones.",
    "howItWorks": [
      "1. La matriz traza una hilera de puntada recta de anclaje reforzado en la línea de base del fleco.",
      "2. Se borda una columna de satín perpendicular muy ancha (de 8 mm a 15 mm) con alta densidad.",
      "3. En el extremo superior del satín se aplican 4 a 6 puntadas de remate de seguridad (Lock Stitches); en el extremo inferior no se coloca ningún anclaje.",
      "4. Se retira la prenda del bastidor y se voltean las piezas hacia el revés.",
      "5. Con una tijera de precisión o descosedor, se cortan cuidadosamente los hilos de canilla a lo largo de la línea sin anclaje.",
      "6. Al peinar o cepillar el bordado por el derecho, las hebras superiores se sueltan formando una cascada de flecos suaves."
    ],
    "beginnerExplanation": "Es un truco genial para hacer que el bordado tenga pelito de verdad, como la melena de un león, la barba de Papá Noel o flecos de un vestido. La máquina borda una franja de puntadas largas muy apretadas que están súper agarradas de un lado y flojas del otro. Cuando termina, cortas los hilitos blancos del revés con una tijerita, peinas por adelante ¡y todos los hilos se abren formando pelusa y flequitos sueltos!",
    "practicalExamples": [
      "Melena de leones, caballos y colas de animales en diseños infantiles.",
      "Pétalos esponjosos y centros tridimensionales de margaritas y girasoles.",
      "Flecos decorativos en bordes de almohadones, mantas de bebé y marcapáginas."
    ],
    "matrixParametersRelation": [
      "Densidad de la columna de satín: debe ser alta (0,32 mm a 0,35 mm) para que los flecos queden frondosos y cubran la base.",
      "Ancho de columna de satín: mínimo 6,0 mm y máximo 15,0 mm para no sobrepasar el salto máximo permitido sin corte de la aguja.",
      "Línea de bloqueo (Lock Line): fundamental programar una línea de puntada corrida triple (Triple Bean Stitch) sobre el borde anclado antes de liberar el fleco."
    ],
    "commonErrors": [
      "Cortar por error la línea de hilos anclados por el revés, desarmando el bordado por completo.",
      "No reforzar el extremo anclado, haciendo que los flecos se caigan solos durante el primer lavado.",
      "Hacer puntadas de fleco demasiado cortas (menos de 4 mm), lo que produce cerdas duras y difíciles de peinar."
    ],
    "troubleshootingTips": [
      "Aplica una fina línea de pegamento textil para tela o sellador de costuras sobre la hilera de anclaje por el revés antes de cortar los hilos flojos.",
      "Utiliza un cepillo de dientes suave o cepillo de cejas para peinar los hilos liberados y darles volumen esponjoso.",
      "Usa hilo de bordar 100% rayón si buscas flecos brillantes y con caída sedosa, o poliéster si prefieres flecos resistentes al agua caliente."
    ],
    "whenToAdjust": "Aumenta la densidad del satín en la matriz si al peinar los flecos se observan huecos o falta de volumen en la mata de pelo.",
    "dicaArtrelados": "El tip de peinado Artrelados: Si quieres que los flecos queden abiertos como pompones esponjosos en vez de hilitos rectos, acerca suavemente el vapor de una plancha a 5 cm de distancia (sin tocar la tela) mientras los peinas con un cepillito de cerdas suaves. El vapor abrirá los filamentos del hilo de poliéster haciéndolo lucir como terciopelo.",
    "voceSabia": "¿Sabías que esta técnica en los antiguos ateliês europeos se hacía a mano pasando el hilo alrededor de reglas de madera y luego cortando los bucles con navaja, mientras que hoy una máquina electrónica borda cientos de flecos calibrados en un solo minuto?",
    "practicalExercise": "Crea una flor sencilla de 5 cm: borda el centro redondo en puntada tatami amarillo y los pétalos como columnas de satín de 10 mm con anclaje interno. Corta el hilo inferior de los pétalos por el revés y admira tu primera flor 3D con flecos.",
    "quickSummary": "Técnica de puntadas satín con un extremo sin anclaje que se liberan cortando la bobina por el revés para crear pelos y flecos 3D.",
    "summary": "Técnica de puntadas satín con un extremo sin anclaje que se liberan cortando la bobina por el revés para crear pelos y flecos 3D.",
    "relatedTerms": [
      "Bordado Chenille / Punto Musgo Electrónico",
      "Puntada Satín (Satin Stitch)",
      "Puntada de Remate (Lock Stitch)",
      "Efecto Peluche en Bordado"
    ]
  },
  "b-bordado-efeito-ponto-palito-ajour-eletronico": {
    "term": "Bordado con Efecto Punto Vainica y Ajour Electrónico (Hemstitch & Entredeux Machine Embroidery)",
    "level": "Intermedio 🟡",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del francés ajour (abertura que deja pasar la luz) y del español vainica / punto palito (calado tradicional de lencería de cama y ajuar de bautismo).",
    "definition": "Técnica de bordado computarizado que emula los calados y vainicas de costura fina tradicional mediante el uso de agujas aladas (Wing Needles) o patrones matriciales de punzonado múltiple, donde la aguja penetra reiteradas veces en los mismos orificios de la tela abriendo las fibras de la trama sin romperlas y ciñéndolas con puntadas en abanico para formar galerías de orificios decorativos regulares.",
    "howItWorks": [
      "1. Se monta en la máquina una aguja con aletas laterales (Needle System 130/705 H-WING calibre 100 o 120).",
      "2. La matriz ejecuta un patrón geométrico específico en forma de flor, triángulo o escalera.",
      "3. Las alas laterales de la aguja separan los hilos de urdimbre y trama de la tela de lino o algodón puro abriendo un orificio visible.",
      "4. En la penetración consecutiva, la aguja entra en el mismo hueco llevando hilo fino de algodón (calibre 50wt o 60wt).",
      "5. La tensión del hilo ciñe y agrupa las fibras separadas, dejando el orificio permanentemente abierto y bordeado por elegantes radios de puntada."
    ],
    "beginnerExplanation": "Es ese detalle clásico y aristocrático que se ve en las sábanas de hilo antiguas y en los baberos y vestidos de bautismo blancos, donde hay una fila de agujeritos prolijos que parecen encaje transparente. En la máquina de bordar se logra usando una aguja especial que tiene como dos 'alitas' a los costados: la aguja abre la tela sin romperla y el hilo cose alrededor para que los huequitos queden abiertos como ventanas diminutas.",
    "practicalExamples": [
      "Guardas caladas y bordes de sábanas finas de cuna en lino y percal de algodón.",
      "Monogramas con fondo ajour en toallas de tocador y servilletas de lino de lujo.",
      "Vestidos tradicionales de bautismo y batas ceremoniales de alta costura infantil."
    ],
    "matrixParametersRelation": [
      "Coincidencia exacta de perforación (Hole Registration): la matriz debe ordenar 3 a 5 penetraciones en la coordenada central de cada agujerito.",
      "Velocidad de máquina reducida: máximo 400 a 500 PPM para no doblar las aletas de la aguja ni desgarrar la tela.",
      "Entretela hidrosoluble pesada: imprescindible usar hidrosoluble (Solvy Film o tela soluble) para que el calado quede limpio sin restos de entretela blanca en los orificios."
    ],
    "commonErrors": [
      "Usar aguja alada en telas sintéticas elastizadas o con Lycra: las fibras elásticas se cierran inmediatamente y tapan los orificios.",
      "Usar entretela de rasgar (Tear-away) o cortar: deja restos de papel atrapados en los huequitos que arruinan la transparencia del ajour.",
      "Coser a velocidades altas de 800 PPM, lo que desafila las aletas de la aguja alada y produce orificios desparejos."
    ],
    "troubleshootingTips": [
      "Utiliza telas 100% naturales de ligamento tafetán abierto como lino batista, lino rústico, hilo de algodón o percal de 200 hilos.",
      "Humedece ligeramente la tela de lino con agua o almidón antes de colocar en el bastidor: las fibras húmedas se separan con mayor plasticidad.",
      "Usa hilo de algodón fino Mercerizado calibre 50wt o 60wt en tono mate idéntico a la tela para imitar el trabajo artesanal tradicional."
    ],
    "whenToAdjust": "Reduce la velocidad a 400 PPM y disminuye la tensión del hilo superior si notas que la aguja rasga los hilos transversales de la tela.",
    "dicaArtrelados": "El truco de herencia Artrelados para el ajour perfecto: Si tu máquina no tiene aguja alada o no cabe en la barra de aguja, puedes lograr el mismo efecto de punto palito usando una aguja común gruesa calibre 110/18 en una matriz digitalizada con 'Triple Hole Punch' (la aguja entra tres veces en el mismo punto exacto y luego hace puntadas radiales hacia afuera). El resultado en tela de lino puro es casi idéntico.",
    "voceSabia": "¿Sabías que la aguja alada (Wing Needle) fue patentada en el siglo XIX inspirada en las leznas romanas de marfil que usaban las hilanderas para separar los hilos de lino sin cortar las hebras?",
    "practicalExercise": "Coloca un retazo de tela de lino blanco en el bastidor con doble capa de entretela hidrosoluble. Coloca una aguja alada 100/16, programa un monograma con punto ajour y lávalo bajo agua tibia para ver cómo emergen los calados transparentes.",
    "quickSummary": "Calado decorativo tradicional que abre orificios regulares en telas de fibras naturales usando agujas aladas y puntadas radiales.",
    "summary": "Calado decorativo tradicional que abre orificios regulares en telas de fibras naturales usando agujas aladas y puntadas radiales.",
    "relatedTerms": [
      "Aguja Alada / Hemstitch (Wing Needle)",
      "Bordado Cutwork (Bordado Calado / Richelieu)",
      "Entretela Hidrosoluble (Water Soluble Film)",
      "Lino y Tejidos de Fibras Naturales"
    ]
  },
  "b-bordado-fio-condutivo-eletronica-textil-vestivel": {
    "term": "Bordado con Hilo Conductivo y Electrónica Textil Vestible (Conductive Thread & E-Textiles Embroidery)",
    "level": "Avanzado 🔴",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés e-textiles (electronic textiles) y wearable technology. Fusión de la nanotecnología textil y la microelectrónica con la precisión del bordado computarizado.",
    "definition": "Técnica industrial de vanguardia donde se bordan circuitos impresos flexibles, pistas conductoras de electricidad, teclados táctiles capacitivos y conexiones para microcontroladores (como Arduino LilyPad o ESP32) utilizando hilos compuestos por fibras sintéticas recubiertas de plata, cobre, níquel o acero inoxidable de baja resistencia óhmica.",
    "howItWorks": [
      "1. El circuito esquemático electrónico se vectoriza y se convierte en una matriz de bordado respetando distancias de aislamiento para evitar cortocircuitos.",
      "2. El hilo conductivo se enhebra en la aguja o en la bobina según su resistencia a la flexión y elasticidad.",
      "3. La máquina borda pistas continuas en puntada recta doble o triple garantizando continuidad eléctrica sin saltos ni cortes de hilo intermedios.",
      "4. Se bordan almohadillas de conexión (Pads) donde se montarán los sensores, luces LED SMD y baterías.",
      "5. Tras el bordado, se verifica la resistencia en ohmios con un multímetro digital y se sellan las pistas con resina epoxi textil o silicona para aislarlas de la humedad."
    ],
    "beginnerExplanation": "Es la unión del bordado con la tecnología del futuro. En vez de usar hilos comunes de colores, la máquina borda con hilos metálicos especiales que conducen electricidad como si fueran cables finitos. Con esto se pueden bordar chaquetas con luces LED que prenden al doblar el codo, camperas con botones táctiles en la manga para cambiar la música del celular o ropa deportiva que mide el ritmo cardíaco.",
    "practicalExamples": [
      "Camperas inteligentes con botoneras táctiles bordadas en la manga para control de audio y llamadas.",
      "Prendas deportivas para atletas con electrodos textiles de monitoreo cardíaco y muscular (EMG / ECG).",
      "Vestuarios escénicos y disfraces para espectáculos con secuencias de luces LED programadas en la tela."
    ],
    "matrixParametersRelation": [
      "Continuidad de vector sin corte (Continuous Path): prohibido programar comandos de corte de hilo (Trimmer) dentro de la misma pista eléctrica.",
      "Separación mínima de aislamiento: al menos 3,0 mm entre pistas paralelas de polaridades distintas (+ y -) para evitar puentes y cortocircuitos.",
      "Longitud de puntada recta: entre 2,5 mm y 3,0 mm; puntadas demasiado cortas aumentan la resistencia eléctrica en las uniones."
    ],
    "commonErrors": [
      "Dejar colas de hilo sueltas en los remates que toquen la pista adyacente y generen cortocircuitos.",
      "Lavar la prenda en lavarropas con agua salada o cloro, oxidando la capa de plata del hilo y perdiendo la conductividad.",
      "Tensiones de hilo muy apretadas que quiebren los microfilamentos metálicos durante la flexión de la prenda."
    ],
    "troubleshootingTips": [
      "Mide siempre con la escala de ohmios (Ω) de tu multímetro la resistencia de inicio a fin de la pista: debe ser inferior a 10 Ω/metro.",
      "Usa agujas con ojo pulido de titanio calibre 80/12 o 90/14 para no raspar la película plateada conductora del hilo.",
      "Cubre las pistas terminadas por el revés con entretela termofusible de poliuretano impermeable para proteger el circuito del sudor y los lavados."
    ],
    "whenToAdjust": "Reemplaza el hilo conductivo si la resistencia óhmica supera los 20 Ω por cada 20 cm o si el sensor capacitivo no responde al tacto.",
    "dicaArtrelados": "El tip de ateliê tecnológico Artrelados: Si el hilo de acero inoxidable es muy rígido y se enreda en el enhebrador superior de tu máquina, cárgalo en la canilla de abajo y borda el circuito por el revés de la prenda (como en Bobbin Work) usando hilo fino de poliéster en la aguja. De esta manera el circuito quedará del lado interno de la prenda protegido y en contacto directo con los sensores.",
    "voceSabia": "¿Sabías que los trajes espaciales de la NASA y los guantes de los astronautas utilizan bordados con hilos de plata para calentar los dedos en el espacio exterior y enviar datos telemétricos a la estación espacial?",
    "practicalExercise": "Dibuja una pista recta de 10 cm con dos círculos de 8 mm en los extremos en tu software de bordado. Bórdala con hilo conductivo sobre fieltro, conecta una pila botón de 3V en un extremo y un diodo LED en el otro, y comprueba cómo enciende a través del hilo bordado.",
    "quickSummary": "Bordado de circuitos eléctricos y conexiones sensoriales flexibles en prendas usando hilos con aleaciones conductoras de plata o acero.",
    "summary": "Bordado de circuitos eléctricos y conexiones sensoriales flexibles en prendas usando hilos con aleaciones conductoras de plata o acero.",
    "relatedTerms": [
      "Bordado con Línea Metálica",
      "Bordado Bobbin Work / Bordado por el Revés",
      "Puntada Recta Reforzada (Triple Bean)",
      "Tecnología Textil Vestible (Wearables)"
    ]
  }
};

import { Verbete } from "../../types";

export const LOTE1_B_PART2_ES: Record<string, Partial<Verbete>> = {
  "b-082": {
    "term": "Balance de Tensión del Hilo (Proporción 1/3 Artrelados)",
    "level": "Intermedio 🟡",
    "category": "Tensión & Mecánica",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín bis-lanx (balanza de dos platos) y del método empírico de ajuste textil desarrollado en los talleres de bordado industrial europeos y sistematizado como regla pedagógica por Artrelados.",
    "definition": "Regla técnica fundamental de calibración del entrelazamiento de puntadas de bordado computarizado que establece que, al observar el reverso de una columna de punto satén, el hilo superior de color debe ocupar exactamente los dos tercios exteriores (un tercio a la izquierda y un tercio a la derecha), mientras que el hilo inferior blanco de la canilla debe ocupar con perfecta simetría el tercio central exacto (proporción 1/3).",
    "howItWorks": [
      "1. Se borda una columna de satén de prueba de 25 mm de largo por 4 mm de ancho a velocidad estándar.",
      "2. Se extrae la prenda del bastidor y se inspecciona el reverso bajo buena iluminación.",
      "3. Se verifica visualmente el ancho de la franja blanca central de hilo de canilla respecto a las bandas de color laterales.",
      "4. Si la franja blanca es menor a 1/3, se aprieta la tensión superior o se afloja la canilla; si es mayor a 1/3, se afloja la tensión superior."
    ],
    "beginnerExplanation": "Es la regla de oro para saber si su máquina está bien ajustada: al mirar el bordado por detrás en una columna gruesa, debe verse una franja blanca de hilo de canilla en el centro que ocupe exactamente un tercio del ancho, con un tercio de color a cada lado.",
    "practicalExamples": [
      "Bordado de prueba de columnas 'I' o 'H' en satén para regular la tensión matutina del taller.",
      "Calibración de la tensión al cambiar de hilo de poliéster 40 a hilo metálico en uniformes.",
      "Ajuste de la caja de bobina con tensiómetro Towa a 20-22 gf para lograr el tercio exacto."
    ],
    "matrixParametersRelation": "Evita el fenómeno del 'puntos blancos visibles por delante' cuando la tensión inferior está floja o la rotura constante de hilo cuando la tensión superior está excesivamente apretada.",
    "commonErrors": [
      "❌ Intentar corregir el problema apretando el hilo superior cuando en realidad la canilla está completamente floja o mal enhebrada.",
      "❌ Juzgar la tensión mirando el frente del bordado en lugar de examinar siempre el reverso.",
      "❌ Olvidar que hilos de diferente grosor (ej. 60wt vs. 40wt) requieren tensiones distintas."
    ],
    "whenToAdjust": "Ajuste de inmediato si en el reverso ve solo hilo superior (hilo blanco ausente) o si el hilo blanco de la canilla sube a la cara frontal de la prenda formando nudos antiestéticos.",
    "dicaArtrelados": "¡Regla sagrada Artrelados: calibre primero la caja de bobina (tensión inferior) para que baje suavemente con su propio peso al suspenderla con el hilo (prueba de caída o 20-22 gf en tensiómetro Towa); después, regule la tensión superior hasta lograr el tercio perfecto!",
    "voceSabia": "¿Sabías que la regla del tercio (1/3) es el estándar de calidad internacional exigido por marcas como Adidas y Nike para homologar bordados en prendas de alto rendimiento?",
    "practicalExercise": "Borde una fila de 5 columnas de satén de 5 mm de ancho con letras 'I': afloje el tensor superior media vuelta en cada una y observe en el reverso cómo la franja central blanca cambia de tamaño.",
    "summary": "Estándar de calidad visual que determina la calibración ideal del bordado: un tercio de hilo de canilla en el centro del reverso flanqueado simétricamente por dos tercios de hilo superior.",
    "quickSummary": "Regla de calibración de tensión: 1/3 de hilo de canilla central visible en el reverso del punto satén.",
    "relatedTerms": [
      "Tensión del Hilo Superior",
      "Caja de Bobina (Portacanilla)",
      "Tensiómetro Towa",
      "Punto Satén"
    ],
    "applications": [
      "Calibración diaria al inicio del turno de producción en todas las cabezas",
      "Ajuste fino para bordado de nombres y escudos escolares",
      "Control de calidad en prendas corporativas de alta gama"
    ],
    "technicalDetails": "Tensión de canilla objetivo: 18 a 22 gf (gramos-fuerza). Tensión de hilo superior recomendada: 110 a 130 gf para poliéster calibre 40 estándar.",
    "bibliographicReferences": [
      "Tajima Maintenance & Tension Balance Guide",
      "Organ Needles & Thread Tension Technical Specification",
      "Manual de Calibración y Control de Calidad Artrelados"
    ],
    "troubleshootingTips": [
      "Si no aparece hilo blanco de la canilla en el reverso: Afloje el tornillo de la caja de bobina un cuarto de vuelta o apriete el tensor superior del hilo de color.",
      "Si el hilo blanco sube a la cara frontal de la prenda: Apriete el tornillo de la caja de bobina o afloje el tensor superior hasta restablecer la proporción de 1/3.",
      "Si la tensión varía entre diferentes agujas de la máquina: Calibre individualmente cada perilla de tensión superior utilizando un tensiómetro digital o de resorte."
    ]
  },
  "overhang-balanco-frontal-braco-pantografo": {
    "term": "Vuelo Frontal y Rigidez Mecánica del Pantógrafo (Pantograph Cantilever Stability)",
    "level": "Avanzado 🔴",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del inglés cantilever (viga en voladizo) y del griego pantographos. Concepto de ingeniería estructural aplicado a los brazos extensibles que sostienen el bastidor sin apoyo frontal.",
    "definition": "Cálculo estructural y medida de deflexión milimétrica del conjunto del brazo tubular móvil del pantógrafo en su extremo frontal saliente (voladizo). Evalúa la capacidad del sistema de guías lineales y perfiles extruidos de aluminio o magnesio para resistir la flexión vertical y horizontal generada por el peso del bastidor, las prendas pesadas y la inercia a más de 1.000 PPM.",
    "howItWorks": [
      "1. El bastidor se ancla en los dos brazos laterales del pantógrafo que proyectan hacia el frente sin apoyos en el suelo.",
      "2. Al acelerar en los ejes X e Y, el centro de gravedad del tejido genera un momento de fuerza y microvibración en la punta del brazo.",
      "3. La rigidez de las guías lineales prismáticas y los rodamientos de bolas recirculantes absorben la torsión.",
      "4. Se garantiza que la aguja mantenga una distancia constante de 0,5 a 1,0 mm sobre la placa de aguja en toda la superficie de bordado."
    ],
    "beginnerExplanation": "Es la firmeza de los brazos metálicos que sostienen el bastidor en el aire: como no tienen patas por delante, deben ser extremadamente rígidos para que el bastidor no cabecee ni vibre cuando la máquina borda a máxima velocidad.",
    "practicalExamples": [
      "Bordado de edredones o toallas pesadas en bastidores gigantes de 50x50 cm sin pandeo frontal.",
      "Verificación de holguras tras 2.000 horas de trabajo continuo en máquinas multicabezal.",
      "Uso de abrazaderas magnéticas en bastidores de gran vuelo para reducir el peso suspendido."
    ],
    "matrixParametersRelation": "Si hay flexión en el voladizo, la distancia entre el prensatelas y la tela varía según la posición del diseño, exigiendo compensaciones de tracción mayores (0,45 mm) en los extremos frontales.",
    "commonErrors": [
      "❌ Apoyarse con las manos o colgar peso sobre los brazos del pantógrafo descalibrando los rodamientos lineales.",
      "❌ Borde de artículos extrapesados (como mantas empapadas) sin soporte auxiliar de mesa.",
      "❌ No apretar firmemente los tornillos mariposa de fijación lateral del bastidor."
    ],
    "whenToAdjust": "Revise cuando observe que el prensatelas golpea la tela en la parte delantera del bastidor pero vuela demasiado alto en la parte trasera.",
    "dicaArtrelados": "¡Consejo de oro Artrelados: coloque la mesa plana accesoria siempre que borde prendas grandes y pesadas; apoyar el peso sobre la mesa elimina el 80% del estrés mecánico en los brazos del pantógrafo!",
    "voceSabia": "¿Sabías que los brazos del pantógrafo en máquinas industriales modernas se diseñan con perfiles tubulares de aleación aeronáutica de aluminio 7075 para combinar ligereza y rigidez extrema?",
    "practicalExercise": "Coloque el bastidor vacío en la máquina, presione suavemente con un dedo hacia abajo en el borde frontal y mida con un comparador de esfera: una flexión mayor a 0,8 mm indica desgaste en los patines de guía.",
    "summary": "Resistencia mecánica y estabilidad a la flexión del conjunto de brazos voladizos que soportan el bastidor durante el bordado de alta velocidad.",
    "quickSummary": "Rigidez estructural de los brazos en voladizo del pantógrafo para evitar cabeceos y vibraciones.",
    "relatedTerms": [
      "Pantógrafo",
      "Guías Lineales Prismáticas",
      "Deflexión Mecánica",
      "Bastidor Plano"
    ],
    "applications": [
      "Bordados de gran formato en ropa de cama y tapicería",
      "Mantenimiento preventivo anual en talleres con múltiples cabezales",
      "Calibración de altura del prensatelas en campos extendidos de 500x400 mm"
    ],
    "technicalDetails": "Deflexión estática admisible inferior a 0,5 mm con carga de 2 kg en el extremo del brazo. Rodamientos lineales con precarga clase C1.",
    "bibliographicReferences": [
      "Barudan Multi-Head Frame Drive and Cantilever Mechanical Engineering Specs",
      "THK Linear Motion Guides Technical Manual",
      "Mantenimiento Mecánico de Pantógrafos Industriales - Artrelados"
    ],
    "troubleshootingTips": [
      "Si el prensatelas golpea la tela en la parte frontal del bastidor: Monte la mesa plana de apoyo auxiliar para descargar el peso de prendas pesadas.",
      "Si los brazos del pantógrafo vibran intensamente a más de 800 PPM: Revise el apriete de los tornillos de las guías lineales y limpie los rieles prismáticos.",
      "Si el diseño se desalinea en la parte delantera del bastidor: Verifique que las abrazaderas laterales del pantógrafo no tengan holgura mecánica."
    ]
  },
  "b-113-bandeja-coletora-oleo-residual-drenagem-cabecote": {
    "term": "Bandeja Colectora de Aceite Residual y Drenaje de Cabezal (Oil Drain Pan & Residual Head Catch Basin)",
    "level": "Intermedio 🟡",
    "category": "Mecánica & Mantenimiento",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín panus (bandeja) y del árabe az-zayt (aceite). Elemento de bioseguridad textil incorporado en máquinas industriales para evitar manchas en telas nobles.",
    "definition": "Recipiente colector metálico o de polímero técnico ubicado en la base inferior del cabezal de bordado, diseñado con pendientes de drenaje, filtros de fieltro o imán de captura de micropartículas metálicas para recolectar el exceso de aceite lubricante que gotea de las bielas, barras de aguja y mecanismos de palanca tirahilos, canalizándolo a un depósito de descarte seguro.",
    "howItWorks": [
      "1. Durante la lubricación manual o automática del cabezal, el exceso de aceite desciende por gravedad.",
      "2. El lubricante fluye por conductos internos hacia la bandeja colectora situada bajo el conjunto mecánico.",
      "3. Un fieltro absorbente o filtro tamiz retiene pelusas de hilo e impurezas impidiendo su desborde.",
      "4. El líquido se drena periódicamente mediante un tapón o manguera de vaciado a un frasco de recolección."
    ],
    "beginnerExplanation": "Es la bandeja que recoge el aceite sobrante debajo de los mecanismos de la máquina para que las gotas no caigan sobre las prendas bordadas y las arruinen con manchas difíciles.",
    "practicalExamples": [
      "Vaciado quincenal del depósito de aceite usado en talleres con producción de 16 horas diarias.",
      "Sustitución del fieltro colector saturado de pelusa de hilo de algodón.",
      "Prevención de manchas de grasa en vestidos blancos de fiesta y lencería nupcial."
    ],
    "matrixParametersRelation": "Aunque es un componente mecánico de drenaje, su mantenimiento previene paradas de emergencia en medio de matrices largas y elimina rechazos de producción por manchas de aceite.",
    "commonErrors": [
      "❌ Dejar que la bandeja colectora se llene hasta desbordarse sobre el brazo de la máquina y la prenda.",
      "❌ Usar solventes agresivos como acetona para limpiarla que degraden los sellos de goma.",
      "❌ Olvidar limpiar el fieltro colector, convirtiéndolo en un nido de pelusa inflamable."
    ],
    "whenToAdjust": "Vacíe y limpie de inmediato si el nivel de aceite en el visor o recipiente colector alcanza la línea máxima indicada por el fabricante.",
    "dicaArtrelados": "¡Consejo de oro Artrelados: coloque una servilleta de papel absorbente limpia dentro de la bandeja colectora tras cada limpieza; le permitirá ver con claridad el color del aceite drenado (si sale negro, indica desgaste prematuro de piezas metálicas)!",
    "voceSabia": "¿Sabías que una sola gota de aceite industrial sobre un bordado de hilo de rayón blanco puede requerir hasta tres lavados químicos con quitamanchas en seco para eliminarse?",
    "practicalExercise": "Localice la bandeja colectora o depósito de drenaje de su máquina, retire el tapón con un vasito debajo y registre en una planilla la cantidad de aceite residual acumulada en el último mes.",
    "summary": "Depósito inferior que recoge de forma higiénica los excesos de lubricante del cabezal evitando manchas en las prendas y protegiendo el entorno del taller.",
    "quickSummary": "Bandeja de recolección de aceite sobrante del cabezal para evitar manchas en telas y mantener limpia la máquina.",
    "relatedTerms": [
      "Lubricación Automática",
      "Aceite Mineral Blanco",
      "Cabezal de Bordado",
      "Mantenimiento Preventivo"
    ],
    "applications": [
      "Producción de lencería blanca y prendas infantiles de alta pureza",
      "Mantenimiento en talleres industriales con múltiples cabezales",
      "Control ecológico de vertidos y reciclaje de lubricantes usados"
    ],
    "technicalDetails": "Capacidad de retención de 100 a 250 ml. Fabricada en aleación de aluminio fundido o ABS antiaceite con sellos de nitrilo NBR.",
    "bibliographicReferences": [
      "Brother Industrial Embroidery Technical Service Manual: Head Lubrication & Drainage",
      "Norma ISO 14001: Gestión de Residuos Líquidos y Lubricantes en la Industria Textil",
      "Manual de Limpieza y Bioseguridad Textil - Artrelados"
    ],
    "troubleshootingTips": [
      "Si la bandeja rebosa lubricante: Drene el depósito aflojando la válvula inferior y limpie el filtro tamiz con desengrasante biodegradable.",
      "Si el aceite drenado presenta coloración oscura con partículas: Alerta de desgaste severo por fricción seca en bujes o bielas; solicite revisión técnica urgente.",
      "Si percibe olor a aceite recalentado en el cabezal: Compruebe que la bomba de lubricación automática no esté bombeando caudal en exceso."
    ]
  },
  "b-066-bandeja-de-desbobinamento-porta-cones-thread-stand": {
    "term": "Bandeja de Desbobinado / Portaconos Externo (Thread Stand & Cone Holder)",
    "level": "Fundamental 🟢",
    "category": "Accesorios & Soportes",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín panus y del verbo desbobinar. Sistema de soporte vertical introducido con la llegada de los conos industriales de 5.000 metros a las bordadoras computarizadas.",
    "definition": "Estructura vertical accesoria compuesta por una base pesada antivuelco con asientos circulares antideslizantes para conos, varillas guía telescópicas de acero y ojales o antenas aéreas de salida superior, diseñada para permitir que el hilo de bordar se desenrolle verticalmente hacia arriba sin fricción lateral, torsión ni enganches antes de entrar a los tensores de la máquina.",
    "howItWorks": [
      "1. El cono de hilo se asienta sobre la bandeja de goma o espuma estriada.",
      "2. El hilo se eleva verticalmente hacia la guía aérea situada al menos 20 cm directamente sobre el cono.",
      "3. El hilo se desprende de forma helicoidal suave sin rozar la base plástica del carrete.",
      "4. Se entrega un flujo continuo y sin variaciones de tensión a los discos de pretensión del cabezal."
    ],
    "beginnerExplanation": "Es el árbol metálico o soporte con varillas altas donde se colocan los conos grandes de hilo: permite que el hilo salga hacia arriba volando libremente sin enredarse en la base del cono.",
    "practicalExamples": [
      "Uso de conos gigantes de 5.000 metros en máquinas domésticas que solo tienen portacarretes pequeños horizontales.",
      "Organización cromática de 15 colores listos para enhebrar en el portaconos superior de la máquina multiaguja.",
      "Colocación de mallas elásticas sobre conos de hilo metálico resbaladizo para evitar caídas a la bandeja."
    ],
    "matrixParametersRelation": "Un desbobinado sin fricción mantiene constante la tensión dinámica programada para densidades finas de 0,38 mm y evita puntadas sueltas o roturas repentinas.",
    "commonErrors": [
      "❌ Bajar la antena telescópica demasiado cerca del cono impidiendo el desenrollado helicoidal libre.",
      "❌ Colocar la antena ladeada en lugar de perfectamente centrada sobre el eje vertical del cono.",
      "❌ Permitir que el hilo caiga bajo la base plástica del cono atrapándose y quebrando la aguja."
    ],
    "whenToAdjust": "Suba la varilla telescópica a su máxima altura si el hilo forma lazos al subir o si siente tirones irregulares en la entrada al tensor.",
    "dicaArtrelados": "¡Consejo de oro Artrelados: coloque una almohadilla de espuma redonda o una base de silicona bajo cada cono en la bandeja; evita que el cono gire sobre sí mismo y absorbe las microvibraciones del motor!",
    "voceSabia": "¿Sabías que si desbobina un cono de bordar en posición horizontal en lugar de vertical superior, el hilo adquiere una torsión parasitaria de 360 grados por cada vuelta, duplicando el riesgo de nudos?",
    "practicalExercise": "Pruebe a bordar una matriz con la varilla de la antena a 10 cm del cono y luego elévela a 35 cm: notará inmediatamente una costura más silenciosa y un hilo que fluye sin tirones.",
    "summary": "Soporte vertical esencial con antena elevada que garantiza el desenrollado libre y vertical del hilo desde conos de gran formato hacia la máquina.",
    "quickSummary": "Portaconos vertical con antena aérea para desbobinado fluido sin fricción ni enredos.",
    "relatedTerms": [
      "Cono de Hilo",
      "Guiahilos Superior",
      "Malla Protectora de Hilo",
      "Tensión Dinámica"
    ],
    "applications": [
      "Adaptación de conos industriales en bordadoras de 1 aguja domésticas",
      "Alimentación simultánea de 12 a 15 conos en cabezales multiaguja",
      "Uso de hilos especiales, viscosas y metálicos de alta torsión"
    ],
    "technicalDetails": "Altura recomendada de la antena: de 250 a 400 mm sobre la punta del cono. Base con peso mínimo de 450 g o anclada al chasis de la máquina.",
    "bibliographicReferences": [
      "Madeira Thread Spool & Cone Stand Guidelines",
      "Gunold Thread Handling and Unwinding Principles",
      "Manual de Accesorios y Ergonomía del Taller de Bordado - Artrelados"
    ],
    "troubleshootingTips": [
      "Si el hilo forma nudos y lazos antes de entrar al tensor: Eleve la varilla telescópica del portaconos a su altura máxima (al menos 35 cm sobre el cono).",
      "Si el hilo resbala y cae a la base del cono (efecto charco): Coloque una malla elástica de protección para carretes cubriendo el cono.",
      "Si el soporte se tambalea o vuelca: Asegúrese de que la base metálica pesada descanse sobre una superficie plana, firme y nivelada."
    ]
  },
  "b-015-barra-de-agulha": {
    "term": "Barra de Aguja (Needle Bar)",
    "level": "Fundamental 🟢",
    "category": "Agujas & Hilos",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín barra (pieza rígida transversal) y acucula (aguja). Mecanismo cinemático perfeccionado desde la primera máquina de coser de Elias Howe (1846).",
    "definition": "Varilla cilíndrica de acero templado rectificado o con recubrimiento de diamante DLC (Diamond-Like Carbon) que sostiene la aguja en su extremo inferior mediante un tornillo prisionero y ejecuta el movimiento vertical alternativo sincronizado con el eje principal y el garfio rotativo para introducir el hilo superior en el tejido.",
    "howItWorks": [
      "1. La biela motriz conectada al eje principal impulsa la barra de aguja hacia abajo.",
      "2. La aguja perfora la tela y desciende hasta su punto muerto inferior (PMI).",
      "3. La barra asciende entre 1,8 y 2,2 mm para formar la lazada de hilo en el chaflán.",
      "4. Tras la captura por el garfio, la barra regresa a su punto muerto superior (PMS) guiada por sus bujes.",
      "5. En máquinas multiaguja, el reciprocador engancha solo la barra activa seleccionada para esa secuencia de color."
    ],
    "beginnerExplanation": "Es la barrita metálica que sube y baja rapidísimo llevando la aguja: en las máquinas industriales multiaguja hay 10, 12 o 15 de estas barras alineadas, pero solo se mueve la del color que está bordando en cada momento.",
    "practicalExamples": [
      "Ajuste milimétrico de la altura de la barra de aguja tras una colisión contra el bastidor.",
      "Lubricación semanal de la barra con una gota de aceite blanco para evitar recalentamiento.",
      "Sustitución de la barra de aguja torcida por impacto severo contra una tachuela metálica."
    ],
    "matrixParametersRelation": "La perfecta sincronización de la barra de aguja con el garfio es la base mecánica para que funcionen las densidades de 0,40 mm y las puntadas cortas de 1,0 mm sin fallas.",
    "commonErrors": [
      "❌ Apretar el tornillo de la aguja con fuerza desmedida mellando la ranura de la barra.",
      "❌ Operar con la barra de aguja descalibrada en altura (demasiado alta provoca saltos; muy baja choca con el garfio).",
      "❌ Dejar que se acumule pelusa seca en el buje superior de la barra provocando atascamientos."
    ],
    "whenToAdjust": "Calibre la altura de la barra con galga de espesores si la aguja roza la punta del garfio o si experimenta saltos continuos de puntada en todas las telas.",
    "dicaArtrelados": "¡Consejo de oro Artrelados: la altura estándar de la barra de aguja se calibra haciendo coincidir la marca de la línea grabada superior de la barra con la base del buje cuando la aguja está en su punto muerto inferior!",
    "voceSabia": "¿Sabías que a 1.000 PPM, la barra de aguja recorre más de 70 metros de distancia lineal por minuto subiendo y bajando en un espacio de apenas 35 milímetros?",
    "practicalExercise": "Gire manualmente el volante de su máquina hasta que la barra de aguja alcance su punto más bajo: observe con una linterna la distancia entre el ojo de la aguja y la punta del garfio rotativo.",
    "summary": "Varilla cilíndrica de alta precisión que transporta la aguja en su recorrido vertical alternativo sincronizado con el garfio para la formación de cada puntada.",
    "quickSummary": "Componente móvil vertical que sujeta la aguja y la impulsa a través del tejido en cada puntada.",
    "relatedTerms": [
      "Aguja de Bordado",
      "Reciprocador de Aguja",
      "Buje Guía",
      "Garfio Rotativo"
    ],
    "applications": [
      "Elemento central de formación de puntada en todas las bordadoras",
      "Mantenimiento correctivo tras impactos contra el bastidor",
      "Calibración de cabezales multiaguja en talleres industriales"
    ],
    "technicalDetails": "Diámetro estándar de 6,0 mm o 6,35 mm. Carrera vertical típica de 35 a 40 mm. Tolerancia de rectificado dimensional H6 (menor a 8 micras).",
    "bibliographicReferences": [
      "Tajima Technical Service Manual: Needle Bar Height & Timing Adjustment",
      "Schmetz: Needle Bar Mechanics and Loop Formation Fundamentals",
      "Manual de Sincronización Mecánica de Cabezales - Artrelados"
    ],
    "troubleshootingTips": [
      "Si la máquina salta puntadas sistemáticamente en una sola aguja: Compruebe si la altura de esa barra de aguja subió tras un quiebre fuerte.",
      "Si la barra se calienta durante el trabajo continuo: Aplique una gota de aceite mineral blanco en las ranuras de la barra cada 40 horas de producción.",
      "Si la barra se traba al bajar: Limpie el buje superior retirando hilos y pelusas compactadas con una aguja de limpieza."
    ]
  },
  "b-107-barra-de-agulha-e-bucha-guia-needle-bar-bushing": {
    "term": "Barra de Aguja y Buje Guía (Needle Bar & Bushing)",
    "level": "Intermedio a Avanzado 🟡🔴",
    "category": "Mecánica & Mantenimiento",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín barra y del germánico buxse (caja/cilindro). Componente tribológico esencial en la maquinaria de precisión moderna.",
    "definition": "Conjunto mecánico de precisión formado por la barra cilíndrica de aguja y sus dos bujes guías (superior e inferior) fabricados en bronce sinterizado autolubricante o aleaciones de fósforo-bronce. Los bujes mantienen la barra en perfecta verticalidad perpendicular a la placa de aguja, impidiendo desviaciones axiales u holguras laterales durante penetraciones a alta velocidad.",
    "howItWorks": [
      "1. La barra de aguja desliza en sentido axial dentro de los orificios microrectificados de ambos bujes.",
      "2. La microporosidad del bronce sinterizado libera microgotas de aceite al calentarse por fricción.",
      "3. La película hidrodinámica de lubricante minimiza el rozamiento y el desgaste de los metales.",
      "4. Se evita que la aguja se desplace lateralmente al perforar costuras gruesas o parches duros."
    ],
    "beginnerExplanation": "Son los pequeños tubos de bronce donde entra la barra de aguja para subir y bajar derechita sin bailar hacia los lados; son como los rieles de precisión que mantienen la aguja apuntando al milímetro.",
    "practicalExamples": [
      "Detección y cambio de buje inferior desgastado tras 5 años de producción continua en 3 turnos.",
      "Eliminación de roturas misteriosas de aguja al bordar sobre costuras gruesas de gorras.",
      "Prueba de holgura lateral moviendo la punta de la barra con la mano cuando la aguja está abajo."
    ],
    "matrixParametersRelation": "La holgura cero en los bujes garantiza que la aguja no se doble hacia atrás en telas densas, manteniendo estable la calibración de la matriz en satines finos.",
    "commonErrors": [
      "❌ Lubricar los bujes con aceites pesados para motores de coche que taponan los microporos del bronce.",
      "❌ Utilizar barras de aguja lijadas a mano con papel de lija que rayan irreversiblemente el interior del buje.",
      "❌ Trabajar con holgura lateral mayor a 0,2 mm arriesgando choque frontal con la punta del garfio."
    ],
    "whenToAdjust": "Reemplace los bujes o la barra de aguja cuando pueda mover la punta de la barra lateralmente con los dedos y perciba un juego o chasquido evidente.",
    "dicaArtrelados": "¡Consejo de oro Artrelados: para comprobar el desgaste del buje inferior, baje la barra de aguja, tome la punta con los dedos índice y pulgar e intente moverla de adelante hacia atrás; si hay más de medio milímetro de juego, es hora de cambiar el buje!",
    "voceSabia": "¿Sabías que los bujes de bronce sinterizado se fabrican prensando polvo de bronce a altísima temperatura y sumergiéndolos al vacío en aceite lubricante caliente para absorberlo como una esponja metálica?",
    "practicalExercise": "Retire la aguja, tome la barra por el tornillo de sujeción y mueva lateralmente con suavidad: compare la sensación de una aguja de uso diario con una aguja poco usada (como la posición 15 de su máquina).",
    "summary": "Par cinemático de alta precisión que asegura el guiado vertical rígido de la aguja con mínimo coeficiente de fricción y máxima durabilidad mecánica.",
    "quickSummary": "Conjunto de barra de aguja y casquillo de bronce que garantiza alineación vertical sin holguras.",
    "relatedTerms": [
      "Barra de Aguja",
      "Buje de Bronce Sinterizado",
      "Tribología Textil",
      "Holgura Mecánica"
    ],
    "applications": [
      "Bordado industrial sobre tejidos densos como cuero, loneta y gorras",
      "Revisión en mantenimientos preventivos mayores de cabezales",
      "Preservación de la sincronización milimétrica del garfio"
    ],
    "technicalDetails": "Holgura diametral de diseño entre 0,015 y 0,030 mm. Rugosidad superficial Ra inferior a 0,2 micras. Material del buje: Bronce SAE 841.",
    "bibliographicReferences": [
      "Barudan Head Mechanical Assembly & Bushing Tolerances",
      "Tribology of High-Speed Textile Needles and Bearings - CRC Press",
      "Manual de Mantenimiento Preventivo de Cabezales - Artrelados"
    ],
    "troubleshootingTips": [
      "Si la aguja quiebra continuamente o roza la punta del garfio: Compruebe si la barra tiene holgura; con la máquina apagada, mueva la barra hacia adelante y hacia atrás: si hay juego visible, los bujes deben reemplazarse.",
      "Si la máquina produce un chirrido agudo metálico en el cabezal: Falta lubricación urgente; aplique una sola gota de aceite mineral blanco en el fieltro superior y gire manualmente el volante.",
      "Si se producen saltos continuos sin rotura de hilo: Calibre la altura de la barra para que el ojo de la aguja quede entre 0,5 mm y 1,0 mm por debajo de la punta del garfio."
    ]
  },
  "b-063-barra-de-agulha-needle-bar": {
    "term": "Barra de Aguja y Tornillo de Fijación (Needle Bar & Needle Clamp)",
    "level": "Intermedio 🟡",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín barra y del latín tornus (tornillo). Pieza crítica de acople directo entre la aguja y la cinemática de la máquina.",
    "definition": "Conjunto formado por el extremo inferior de la barra de aguja, el bloque o mordaza de fijación (needle clamp) y el tornillo roscado prisionero de ajuste manual o por destornillador, diseñado para asegurar mecánicamente el cabo de la aguja con precisión angular exacta de 0 grados y a la profundidad vertical de tope estipulada.",
    "howItWorks": [
      "1. El operador inserta el cabo de la aguja en el orificio inferior empujándolo hasta hacer tope superior firme.",
      "2. En agujas de cabo redondo (DBxK5), se alinea la ranura larga exactamente hacia el frente (0 grados).",
      "3. Se aprieta el tornillo prisionero sujetando firmemente el cabo contra la pared rectificada de la barra.",
      "4. Se asegura la inmovilidad de la aguja contra impactos de hasta 25 newtons en cada penetración."
    ],
    "beginnerExplanation": "Es la parte de abajo de la barra donde colocamos la aguja y la apretamos con un tornillo pequeño: debe quedar bien metida hasta arriba del todo y con la ranura larga mirando recta hacia adelante.",
    "practicalExamples": [
      "Cambio rutinario de aguja desgastada usando destornillador imantado para no perder el tornillo.",
      "Sustitución de tornillos de fijación con cabeza desgastada para evitar que la aguja se suelte a mitad de un bordado.",
      "Instalación de agujas especiales de cabo plano (130/705H) asegurando la parte plana hacia atrás."
    ],
    "matrixParametersRelation": "Si la aguja no se introduce hasta el tope de la mordaza, quedará más baja de lo normal, provocando que choque contra el garfio rotativo y rompa la punta o raye el cangrejo.",
    "commonErrors": [
      "❌ Dejar el tornillo medio flojo permitiendo que la aguja se mueva o se caiga en plena costura.",
      "❌ Colocar la ranura frontal de la aguja de lado impidiendo que el hilo corra por el canal protector.",
      "❌ Apretar el tornillo con alicates dañando la rosca milimétrica de la barra."
    ],
    "whenToAdjust": "Revise o apriete si la aguja oscila, si nota que el tornillo gira en falso (rosca barrida) o si la aguja se desliza hacia abajo al bordar telas gruesas.",
    "dicaArtrelados": "¡Consejo de oro Artrelados: use siempre un destornillador corto con mango ergonómico y aplique solo la fuerza de dos dedos para apretar el tornillo; nunca use alicates ni apriete con todo el puño, pues romperá la rosca interior de la barra de aguja!",
    "voceSabia": "¿Sabías que en una jornada de 8 horas a 800 PPM, el tornillo de fijación de la aguja soporta más de 380.000 impactos violentos sin aflojarse gracias a su rosca cónica autoblocante?",
    "practicalExercise": "Afloje el tornillo, retire la aguja, limpie el orificio con un cepillito de cerdas suaves para quitar pelusas compactadas, inserte una aguja nueva comprobando el tope superior y apriete con suavidad.",
    "summary": "Mecanismo terminal de la barra de aguja que garantiza la sujeción rígida, alineación angular y posicionamiento en altura de la aguja de bordar.",
    "quickSummary": "Mordaza y tornillo prisionero para la fijación firme y alineada de la aguja en su barra.",
    "relatedTerms": [
      "Barra de Aguja",
      "Aguja DBxK5",
      "Ranura Frontal",
      "Garfio Rotativo"
    ],
    "applications": [
      "Cambio de agujas por tamaño (75/11 a 90/14) según la tela",
      "Mantenimiento básico diario por el operador de bordado",
      "Ajuste de orientación angular para hilos complicados"
    ],
    "technicalDetails": "Rosca métrica M3 o M3.5 de paso fino. Torque de apriete recomendado: 0,35 a 0,45 N·m. Acero de alta resistencia grado 12.9.",
    "bibliographicReferences": [
      "Organ Needles: Installation and Orientation Guide for Embroidery Needles",
      "Schmetz Service Manual: Needle Clamping and Mechanical Safety",
      "Guía de Operación y Mantenimiento Diario de Bordadoras - Artrelados"
    ],
    "troubleshootingTips": [
      "Si la máquina comenzó a saltar puntadas tras romperse una aguja: La barra pudo haberse desplazado hacia arriba por el impacto; calibre la altura del punto muerto inferior.",
      "Si la aguja se cae durante el bordado: Apriete el tornillo de fijación con el destornillador original aplicando firmeza moderada sin forzar.",
      "Si el hilo se deshilacha justo al descender: Compruebe que el orificio de inserción de la barra de aguja no tenga rebabas o muescas cortantes."
    ]
  },
  "b-073-barra-de-agulhas-multiplas-troca-de-cor": {
    "term": "Barra de Agujas Múltiples / Bloque de Cambio de Color (Multi-Needle Bar & Color Changer)",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín multiplex (múltiple) y del diseño de cabezal móvil automatizado introducido por Tajima en 1979 para posibilitar el cambio automático de hilos sin intervención manual.",
    "definition": "Conjunto electromecánico compuesto por un bastidor o carro frontal deslizante que alberga entre 4 y 15 barras de aguja independientes con sus respectivos resortes de recuperación y prensatelas. Un servomotor lineal o un tambor de levas desplaza el bloque lateralmente para alinear con exactitud de décimas de milímetro la barra de aguja del color seleccionado con el reciprocador central y el eje principal de la máquina.",
    "howItWorks": [
      "1. El microprocesador lee una orden de cambio de color en el archivo de bordado.",
      "2. La máquina ejecuta el corte y arremate del hilo actual y eleva la barra activa a su posición de reposo.",
      "3. El motor de cambio de color desplaza el bloque de agujas transversalmente hacia la posición deseada.",
      "4. Un sensor óptico o microinterruptor de levas confirma que la aguja objetivo está alineada al 100%.",
      "5. El reciprocador se acopla a la nueva barra de aguja y la máquina reanuda el bordado en menos de dos segundos."
    ],
    "beginnerExplanation": "Es el cabezal frontal que se mueve de izquierda a derecha en las máquinas profesionales para cambiar de hilo automáticamente: en lugar de cambiar los conos a mano, la máquina desplaza todas sus agujas para que trabaje la del color que toca.",
    "practicalExamples": [
      "Bordado continuo de logotipos complejos con 12 colores distintos sin pausas operativas.",
      "Calibración del sensor de posición cero (color change home sensor) tras un atasco de hilo.",
      "Lubricación mensual del riel de deslizamiento horizontal del bloque de agujas."
    ],
    "matrixParametersRelation": "En el software de diseño, cada objeto vectorial debe asignarse al número de cono correspondiente (del 1 al 15) para que el bloque de agujas ejecute la coreografía cromática correcta.",
    "commonErrors": [
      "❌ Dejar un tirahilos caído que choque contra el chasis al desplazarse el bloque lateralmente.",
      "❌ Mover el bloque de cambio de color a mano mientras la máquina está encendida descalibrando el motor paso a paso.",
      "❌ Acumulación de grasa seca con polvo en las ranuras del carro que bloquea el movimiento transversal."
    ],
    "whenToAdjust": "Ajuste o calibre cuando la máquina muestre un error de cambio de color (error 130 / Color Change Error) o cuando la barra seleccionada no baje al primer intento.",
    "dicaArtrelados": "¡Consejo de oro Artrelados: antes de encender la máquina al comienzo del día, asegúrese de que todos los tirahilos superiores estén arriba en la misma línea horizontal; si uno está abajo, puede doblarse al hacer el primer cambio de color automático!",
    "voceSabia": "¿Sabías que la primera máquina de bordar multiaguja automática comercializada en el mundo tenía solo 3 agujas por cabeza, mientras que hoy existen máquinas industriales con hasta 20 agujas por cabezal?",
    "practicalExercise": "Ejecute una secuencia de prueba de cambio de color continuo del 1 al 15 en el panel de su máquina: escuche el sonido del motor y verifique la suavidad del acople del reciprocador en cada aguja.",
    "summary": "Carro mecánico móvil que agrupa múltiples barras de aguja y las conmuta automáticamente con rapidez para bordar diseños multicolores sin detener la producción.",
    "quickSummary": "Bloque móvil que conmuta automáticamente entre múltiples agujas de color en máquinas profesionales.",
    "relatedTerms": [
      "Reciprocador de Aguja",
      "Tirahilos (Palanca)",
      "Motor Paso a Paso de Cambio de Color",
      "Sensor de Posición Cero"
    ],
    "applications": [
      "Bordado industrial continuo de escudos y logotipos multicolores",
      "Producción seriada en máquinas de 1 a 24 cabezales",
      "Bordado multicolor en gorras, camisetas y uniformes"
    ],
    "technicalDetails": "Tiempo medio de cambio de color: 1,2 a 1,8 segundos. Desplazamiento por husillo de bolas o leva helicoidal ranurada. Sensor de centrado por encoder absoluto.",
    "bibliographicReferences": [
      "Tajima Maintenance & Parts Manual: Automatic Color Change Mechanism",
      "Barudan Color Change Timing and Mechanical Alignment Guide",
      "Manual de Reparación y Diagnóstico de Cabezales Industriales - Artrelados"
    ],
    "troubleshootingTips": [
      "Si la máquina se traba durante el cambio de color: Limpie el sensor óptico de posición del cabezal y aplique una gota de aceite blanco en el riel deslizante.",
      "Si una aguja específica rompe el hilo constantemente: Verifique que el ojal del guiahilos de esa barra específica no tenga ranuras ni rebabas.",
      "Si el reciprocador no engancha la barra: Ajuste la sincronización de reposo de la leva de cambio de color en el panel de control."
    ]
  },
  "b-109-barra-de-iluminacao-led-spot-focado-agulha": {
    "term": "Barra de Iluminación LED Flexible / Spot Focalizado de Aguja (Needle Area LED Illumination Bar)",
    "level": "Iniciante a Intermedio 🟢🟡",
    "category": "Mecánica & Mantenimiento",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín barra, del latín lumen (luz) y de la tecnología moderna de diodos emisores de luz (LED - Light Emitting Diode) adoptada masivamente en maquinaria de costura y bordado.",
    "definition": "Dispositivo auxiliar de iluminación de alta luminosidad compuesto por módulos lineales de LED de espectro diurno (5.000K a 6.500K) con brazo articulado flexible o integrado directamente en el chasis bajo el cabezal de aguja, diseñado para proporcionar iluminación fría, focalizada y sin sombras sobre la placa de aguja, el enhebrado del ojo y el punto exacto de penetración en la tela.",
    "howItWorks": [
      "1. Se energiza mediante el circuito de baja tensión de la máquina (12V/24V) o puerto USB externo.",
      "2. El brazo de cuello de cisne orienta el haz luminoso directamente sobre la zona de formación de la lazada.",
      "3. La luz blanca pura reproduce los colores reales de los hilos sin calentamiento superficial.",
      "4. El operador visualiza al instante saltos de puntada, deshilachados o desalineaciones en la tela."
    ],
    "beginnerExplanation": "Es la pequeña lámpara LED flexible o integrada que alumbra justo donde clava la aguja: le permite enhebrar fácilmente sin forzar la vista y ver los colores reales de los hilos sin que dé calor a la máquina.",
    "practicalExamples": [
      "Enhebrado rápido de agujas finas número 65/9 con hilo oscuro bajo iluminación focalizada.",
      "Inspección inmediata de la calidad del bordado en el interior de gorras o bolsos estrechos y oscuros.",
      "Trabajo cómodo en jornadas nocturnas sin fatiga ocular para el bordador."
    ],
    "matrixParametersRelation": "Facilita la verificación visual de la alineación de contornos finos de 0,35 mm respecto a bases de relleno en telas oscuras.",
    "commonErrors": [
      "❌ Orientar la lámpara hacia los ojos del operador produciendo encandilamiento en lugar de apuntar a la placa de aguja.",
      "❌ Usar lámparas incandescentes calientes que resecan los hilos o derriten hilos sintéticos.",
      "❌ Dejar cables sueltos que puedan engancharse con el movimiento del pantógrafo."
    ],
    "whenToAdjust": "Reoriente o limpie el difusor plástico de los LEDs si nota que el polvo o la pelusa acumulada reducen la claridad sobre la aguja.",
    "dicaArtrelados": "¡Consejo de oro Artrelados: elija siempre iluminación LED con índice de reproducción cromática alto (CRI > 90) y temperatura fría (6.000K); esto le permitirá distinguir con total seguridad entre hilo azul marino y negro azabache mientras borda!",
    "voceSabia": "¿Sabías que cambiar la bombilla tradicional de filamento por iluminación LED en una máquina de bordar reduce la temperatura en la zona de la aguja en hasta 15 °C, evitando que los hilos sintéticos se debiliten por calor?",
    "practicalExercise": "Coloque tres conos de hilo negro, azul noche y gris grafito en la máquina: encienda el spot LED y compruebe lo fácil que resulta identificarlos comparado con la luz ambiente común del taller.",
    "summary": "Sistema de iluminación LED frío y focalizado sobre la zona de costura que mejora la precisión del operador y la inspección de calidad sin fatiga visual.",
    "quickSummary": "Iluminación LED orientable y sin sombras sobre la aguja para facilitar el enhebrado y control visual.",
    "relatedTerms": [
      "Zona de Aguja",
      "Ergonomía de Taller",
      "Enhebrado",
      "Control de Calidad Textil"
    ],
    "applications": [
      "Talleres de bordado artesanal y producción industrial",
      "Enhebrado de hilos finos y agujas para monogramas pequeños",
      "Inspección de parches y gorras bajo sombras de bastidor"
    ],
    "technicalDetails": "Consumo de 3W a 5W. Flujo luminoso de 250 a 450 lúmenes. Temperatura de color 6.000K (luz día). Vida útil superior a 50.000 horas.",
    "bibliographicReferences": [
      "OSHA Ergonomic Guidelines for Sewing and Embroidery Workstations",
      "Brother User Guide: LED Lighting Maintenance and Adjustment",
      "Manual de Ergonomía e Iluminación en el Taller de Bordado - Artrelados"
    ],
    "troubleshootingTips": [
      "Si el LED parpadea o alumbra débilmente: Revise la fuente de alimentación de 12V y ajuste los conectores de la placa electrónica.",
      "Si la luz parece más tenue que antes: Limpie la lente plástica protectora con un paño de microfibra humedecido en alcohol isopropílico para retirar pelusas y restos de aceite.",
      "Si la lámpara flexible no sostiene su posición: Apriete los tornillos de la base o coloque una abrazadera de sujeción para neutralizar la vibración de la máquina."
    ]
  }
};

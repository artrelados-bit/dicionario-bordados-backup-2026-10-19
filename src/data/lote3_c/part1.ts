import { Verbete } from "../../types";

export const LOTE3_C_PART1_ES: Record<string, Partial<Verbete>> = {
  "c-086-cartao-calibracao-tensao-bobina-tensiometro": {
    "term": "Tensiómetro de Bobina y Medidor de Tensión",
    "level": "Intermedio 🟡",
    "category": "Equipamiento & Herramientas",
    "grammarClass": "Sustantivo masculino",
    "origin": "Desarrollado en Japón por la corporación Towa Industry (Towa Bobbin Tension Gauge), pionera mundial en instrumentos dinamométricos de precisión para costura y bordado.",
    "definition": "Instrumento dinamométrico de medición de alta precisión provisto de un reloj comparador analógico o sensor de carga digital y un soporte para cajas de bobina (tipo L o tipo M), diseñado para cuantificar con exactitud matemática la fuerza de fricción en gramos que ejerce el muelle de lámina sobre el hilo de la canilla inferior al deslizarse.",
    "howItWorks": [
      "1. Se monta la caja de bobina con la canilla devanada en el soporte cilíndrico del tensiómetro.",
      "2. El hilo se enhebra pasando por debajo de la lámina tensora y se enrolla entre las dos poleas de guiado del instrumento.",
      "3. El operador tira del extremo del hilo con una velocidad suave y constante hacia adelante.",
      "4. La aguja del reloj indicador oscila y se estabiliza mostrando la lectura directa de resistencia en gramos fuerza (g/f).",
      "5. Si el valor difiere del rango óptimo para bordado (habitualmente de 18 g a 25 g), se ajusta el microtornillo del muelle con el destornillador milimétrico hasta lograr el valor exacto deseado."
    ],
    "beginnerExplanation": "Es como una pequeña balanza de reloj donde colocas la cajita de la bobina de abajo y tiras del hilo para saber exactamente cuánta fuerza está haciendo. En vez de adivinar a ojo o al tacto si el tornillito está muy apretado o muy flojo, este relojito te dice el número exacto en gramos. Es la herramienta secreta de los grandes talleres para que todas las máquinas borden parejo y sin nudos.",
    "practicalExamples": [
      "Calibración de 12 cajas de bobina al mismo valor exacto de 22 gramos para una máquina industrial de 12 cabezales.",
      "Diagnóstico rápido de muelles tensores vencidos o sucios con restos de pelusa compactada.",
      "Ajuste diferenciado para hilos elásticos de canilla o hilos gruesos de bordado por el revés."
    ],
    "matrixParametersRelation": [
      "Punto de partida del balance de tensión: la tensión superior de la matriz solo puede regularse con éxito si la bobina inferior está calibrada a un valor numérico fijo y conocido.",
      "Rango estándar de bordado: entre 18g y 24g para hilo de bobina de poliéster 60wt / 70wt.",
      "Uniformidad entre cabezales: asegura que los 12 cabezales de una máquina produzcan satines idénticos con el mismo tercio blanco en el revés."
    ],
    "commonErrors": [
      "Tirar del hilo con tirones secos y rápidos en vez de un movimiento continuo y fluido, provocando saltos erráticos en la lectura del reloj.",
      "Usar el tensiómetro con suciedad o pelusas dentro de las poleas de giro del instrumento.",
      "Apretar el tornillo de la caja con destornilladores inadecuados que mellan la cabeza del tornillo de ajuste."
    ],
    "troubleshootingTips": [
      "Tira siempre del hilo en línea recta y de forma continua para que la aguja del comparador se estabilice en un número fijo.",
      "Si la aguja tiembla con oscilaciones grandes de más de 10 gramos, la canilla está devanada de forma despareja o la caja tiene rebabas internas.",
      "Guarda el tensiómetro en su estuche acolchado original para proteger el delicado mecanismo interno de muelles dinamométricos."
    ],
    "whenToAdjust": "Utiliza el tensiómetro cada vez que cambies de marca o calibre de hilo de bobina, o al iniciar cada jornada de producción industrial.",
    "dicaArtrelados": "El número mágico Artrelados para el tensiómetro de bobina: Para hilos de canilla finos 60wt estándar (de poliéster continuo blanco), calibra tu caja de bobina exactamente en 20 gramos en tu reloj Towa. Con esa base perfecta, cualquier tensión superior que pongas en tu máquina te dará el famoso tercio blanco en el revés sin renegar jamás.",
    "voceSabia": "¿Sabías que los tensiómetros Towa fueron inventados originalmente para calibrar las máquinas de bordar los uniformes de las tripulaciones espaciales japonesas, donde un solo fallo de puntada en los trajes presurizados no estaba permitido?",
    "practicalExercise": "Coloca tu caja de bobina en el tensiómetro Towa. Tira del hilo suavemente y anota el valor. Gira el tornillo de la caja apenas un octavo de vuelta hacia la derecha y vuelve a medir: observa cómo la aguja sube exactamente 4 gramos demostrando la increíble sensibilidad del tornillo.",
    "quickSummary": "Instrumento dinamométrico japonés que mide con exactitud de gramos la resistencia de la caja de bobina para un balance perfecto.",
    "summary": "Instrumento dinamométrico japonés que mide con exactitud de gramos la resistencia de la caja de bobina para un balance perfecto.",
    "relatedTerms": [
      "Caja de Bobina",
      "Canilla e Hilo Inferior de Bobina",
      "Balance de Tensión del Hilo (Proporción 1/3)",
      "Ajuste de Tensión del Hilo"
    ]
  },
  "c-059-cartao-de-cores-e-tabela-de-conversao-de-linhas": {
    "term": "Carta de Colores y Tabla de Conversión de Hilos",
    "level": "Iniciante 🟢",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal femenina",
    "origin": "De los catálogos textiles con muestras reales de hilados entorchados creados por hilanderías alemanas y japonesas (Madeira, Gunold, Isacord, Marathon, Setta).",
    "definition": "Catálogo físico encuadernado compuesto por muestras reales de hilo brillante montadas en hebras sobre fichas numeradas, complementado con tablas matriciales de equivalencia que permiten convertir con fidelidad óptica los códigos de color entre diferentes fabricantes y sistemas universales como Pantone (PMS).",
    "howItWorks": [
      "1. La bordadora identifica el código de color sugerido en la hoja técnica de la matriz (Production Sheet) o la referencia Pantone solicitada por el cliente corporativo.",
      "2. Si el taller no posee esa marca exacta de hilo, se consulta la tabla de equivalencias cruzadas en el software o en el catálogo impreso.",
      "3. Se localiza el número de cono correspondiente a la marca que tiene disponible el taller (por ejemplo, convertir Madeira 1147 a Isacord 1902 o Setta 4210).",
      "4. Se compara visualmente la hebra de hilo real de la carta bajo luz neutra de 5000K sobre la tela que se va a bordar.",
      "5. Se monta el cono seleccionado en el cabezal asegurando fidelidad cromática al logotipo original."
    ],
    "beginnerExplanation": "Es el muestrario o libro gordo de colores donde vienen pegadas las hebras reales de hilo de todos los tonos que existen. Como cada fábrica de hilos le pone un número diferente a sus colores (lo que para una marca es el 1800, para otra es el 1147), esta carta y sus tablas de equivalencia te permiten encontrar el mellizo exacto en la marca de hilos que tú tienes en tu taller sin equivocarte de tono.",
    "practicalExamples": [
      "Conversión exacta del color Pantone corporativo de un banco al cono de hilo de poliéster disponible en el taller.",
      "Selección del matiz exacto de piel humana para bordados artísticos realistas con degradados.",
      "Presentación profesional del catálogo al cliente en el ateliê para que elija el tono exacto de su monograma."
    ],
    "matrixParametersRelation": [
      "Tablas de paletas en software: los programas de digitalización (Wilcom, Hatch, PE-Design) incluyen bibliotecas digitales de todas las marcas con algoritmos de mejor coincidencia (Delta-E).",
      "Hojas técnicas de producción (Job Sheets): documentos impresos con el listado ordenado de números de cono por parada.",
      "Precisión cromática corporativa: exigencia contractual de coincidencia con guías de estilo institucionales."
    ],
    "commonErrors": [
      "Guiarse únicamente por los colores que se ven en el monitor de la computadora, los cuales varían drásticamente según el brillo y calibración de la pantalla.",
      "Comprar cartas de colores impresas con tinta común sobre papel en lugar de cartas con hebras reales de hilo físico.",
      "Dejar la carta de colores expuesta al sol en la ventana del taller, decolorando los tonos de muestra con los rayos UV."
    ],
    "troubleshootingTips": [
      "Invierte en una carta de colores con hebras reales de hilo: es una de las inversiones más profesionales y económicas para un ateliê.",
      "Examina siempre la carta de colores bajo luz blanca natural o luz LED neutra de 5500K para evitar confusiones entre azules marinos y negros.",
      "Usa la herramienta 'Convertir a mi marca de hilo' en tu software de digitalización para traducir matrices extranjeras a tus conos habituales con un solo clic."
    ],
    "whenToAdjust": "Consulta la tabla de conversión cada vez que vayas a reproducir un logotipo corporativo con colores institucionales estrictos.",
    "dicaArtrelados": "El tip de venta infalible Artrelados con la carta de colores: Cuando un cliente exigente venga a tu taller dudando de si el bordado le quedará del mismo color de su remera, abre tu carta de colores reales sobre la prenda del cliente delante de sus ojos. Pídele que toque la hebra y elija él mismo el número. El cliente quedará fascinado con el nivel de profesionalismo de tu ateliê y jamás discutirá tu presupuesto.",
    "voceSabia": "¿Sabías que los fabricantes líderes de hilo como Madeira e Isacord cuentan con laboratorios de espectrofotometría donde miden las longitudes de onda de cada baño de teñido para garantizar que el color del cono número 1000 sea idéntico hoy y dentro de diez años?",
    "practicalExercise": "Toma un diseño que tenga un color rojo en tu software. Usa la herramienta de reemplazo de hilos para ver cómo el programa te sugiere automáticamente el código equivalente entre tres marcas diferentes (por ejemplo, Madeira, Isacord y Robison-Anton).",
    "quickSummary": "Catálogo físico con hebras reales de hilo y tablas de correspondencia para traducir códigos entre distintas marcas y Pantone.",
    "summary": "Catálogo físico con hebras reales de hilo y tablas de correspondencia para traducir códigos entre distintas marcas y Pantone.",
    "relatedTerms": [
      "Paleta de Colores Personalizada en el Software",
      "Código Numérico de Color de Hilo",
      "Brillo del Hilo (Thread Sheen)",
      "Software de Ponchado y Digitalización"
    ]
  },
  "c-070-cartela-de-cores-personalizada-no-software": {
    "term": "Paleta de Colores Personalizada en el Software",
    "level": "Intermedio 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Locución nominal femenina",
    "origin": "De las herramientas de gestión de activos digitales (Digital Asset Management) integradas en los entornos de diseño asistido por computadora (CAD) para bordado.",
    "definition": "Función de configuración avanzada dentro del software de digitalización y ponchado que permite al digitalizador crear, guardar y cargar una biblioteca digital personalizada que contiene exclusivamente los conos de hilo, marcas y números de código que realmente existen en el inventario físico de su propio taller o ateliê.",
    "howItWorks": [
      "1. El operador ingresa al gestor de hilos (Thread Palette Editor / Color Manager) de su software de ponchado.",
      "2. Selecciona la marca de hilos que utiliza comercialmente (por ejemplo, Lumina, Madeira, Isacord o Setta).",
      "3. Marca uno a uno los números de cono exactos que tiene comprados en los estantes de su taller.",
      "4. Guarda esta selección con un nombre personalizado (por ejemplo, 'Mi Inventario Ateliê 2026').",
      "5. Al digitalizar o abrir nuevas matrices, el software colorea el diseño utilizando única y exclusivamente los colores de su inventario real, optimizando la asignación de agujas."
    ],
    "beginnerExplanation": "Es como armar tu propia cajita de lápices virtual en la computadora. En vez de que el programa te muestre una lista gigante con 500 colores que no tienes en tu taller, tú le dices a la computadora: 'estos son los 30 conos de hilo que yo compré'. Así, cada vez que diseñes o abras una matriz, la computadora pintará el dibujo solo con los colores que tienes guardados en tu estante, sin inventar colores raros que tendrías que salir a comprar.",
    "practicalExamples": [
      "Configuración de una paleta exclusiva para uniformes escolares con los 6 colores reglamentarios del colegio.",
      "Creación de una paleta reducida para máquinas semi-industriales de 6 agujas para agilizar la producción.",
      "Simulación hiperrealista en 3D de la apariencia final de la prenda antes de tocar la máquina."
    ],
    "matrixParametersRelation": [
      "Asignación automática de hilos (Auto-Match to Palette): reasigna los colores de cualquier archivo descargado a los conos disponibles en stock.",
      "Exportación de hojas de producción: genera fichas de trabajo donde cada cambio de color coincide exactamente con la etiqueta física del cono.",
      "Mapeo de agujas multiaguja: facilita configurar qué número de aguja física corresponde a cada color de la paleta digital."
    ],
    "commonErrors": [
      "Digitalizar usando paletas genéricas de colores RGB del monitor, provocando que los colores se vean diferentes al bordar con hilos reales.",
      "No actualizar la paleta personalizada cuando se compran nuevos conos o se agota un color en el taller.",
      "Guardar paletas con nombres confusos sin respaldar el archivo de configuración al actualizar el software."
    ],
    "troubleshootingTips": [
      "Dedica una tarde a inventariar tus conos de hilo y crea tu paleta personalizada: te ahorrará cientos de horas de dudas en el futuro.",
      "Configura tu paleta personalizada como la paleta predeterminada (Default Palette) al iniciar tu software.",
      "Exporta una copia de seguridad de tu archivo de paleta (.PLT / .THD) en una memoria USB para recuperarla en caso de reinstalación."
    ],
    "whenToAdjust": "Actualiza tu paleta en el software cada vez que incorpores nuevos conos de hilo o nuevas marcas a tu taller.",
    "dicaArtrelados": "El tip de velocidad dorada Artrelados: Si tienes una máquina de 6 o 10 agujas y casi siempre dejas fijos los mismos colores base (blanco, negro, dorado, rojo, azul marino), crea una paleta llamada 'Mis Agujas Fijas'. Al ponchar cualquier diseño nuevo, usa solo esos colores: podrás bordar pedidos rápidos en minutos sin tener que cambiar conos de hilo de la máquina.",
    "voceSabia": "¿Sabías que los softwares de gama alta como Wilcom calculan el consumo de hilo en metros exactos por cada color de tu paleta personalizada, permitiéndote saber exactamente cuántos gramos de hilo te quedan en cada cono de tu taller?",
    "practicalExercise": "Abre tu software de digitalización, busca la herramienta 'Paleta de hilos' y crea una pequeña paleta con tus 5 colores favoritos. Asigna esos colores a un diseño sencillo y observa lo cómodo que resulta trabajar sabiendo que tienes esos conos en mano.",
    "quickSummary": "Biblioteca virtual de hilos configurada en el software que contiene únicamente los conos reales que el bordador tiene en stock.",
    "summary": "Biblioteca virtual de hilos configurada en el software que contiene únicamente los conos reales que el bordador tiene en stock.",
    "relatedTerms": [
      "Carta de Colores y Tabla de Conversión de Hilos",
      "Código Numérico de Color de Hilo",
      "Software de Ponchado y Digitalización",
      "Asignación de Agujas y Mapeo de Color"
    ]
  },
  "c-099-celofane-bordado-filme-furta-cor-mylar": {
    "term": "Película Tornasolada Mylar y Efecto Vitral",
    "level": "Intermedio 🟡",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del tereftalato de polietileno metalizado y tornasolado (BoPET / Mylar) desarrollado por DuPont en los años 1950, adaptado artísticamente al bordado como sustituto ligero y económico de los hilos metálicos pesados.",
    "definition": "Técnica decorativa especial consistente en colocar una lámina muy delgada de película plástica iridiscente o tornasolada (Mylar / Film de poliéster nacarado) sobre la tela antes de bordar, fijándola con una matriz digitalizada con puntadas abiertas o motivos geométricos translúcidos que atrapan la luz y desprenden destellos multicolores similares a un vitral o escama de sirena, tras lo cual el film sobrante se desprende limpiamente por perforación perimetral.",
    "howItWorks": [
      "1. Se monta la tela de base con su entretela en el bastidor.",
      "2. La máquina borda una línea de referencia o hilván perimetral que delimita la figura.",
      "3. Parada programada (Stop): se apoya una pequeña hoja de película tornasolada Mylar sobre la zona señalada fijándola con cinta o spray suave.",
      "4. La máquina ejecuta un relleno especial de baja densidad (puntadas tatami abiertas a 1,2 mm o puntos de cruz de encaje) con hilos de poliéster semitransparentes o de colores vivos.",
      "5. El film queda atrapado por debajo de las puntadas reflejando destellos holográficos que cambian con el ángulo de la luz.",
      "6. Se borda un cordón perimetral de satín denso que perfora y troquela el film en los bordes.",
      "7. Al retirar el bastidor, el exceso exterior de film se arranca tirando suavemente con la mano igual que un troquelado de papel."
    ],
    "beginnerExplanation": "Es una técnica divertida y brillante que parece magia: colocas un pedacito de papel celofán tornasolado o plástico holográfico arriba de la tela y bordas por encima con puntadas abiertas. La máquina cose atrapando el celofán y, al final, arrancas el plástico que sobra con la mano como si fuera una estampilla. El bordado queda con unos brillos tornasolados espectaculares como escamas de sirena, alas de hada o piedras preciosas, ¡y no gasta hilos caros metálicos!",
    "practicalExamples": [
      "Bordado de alas de mariposas y hadas en vestidos de fiesta infantiles con reflejos nacarados.",
      "Efecto de escamas holográficas en colas de sirena para disfraces y accesorios de playa.",
      "Destellos tipo piedras preciosas y efecto vitral en bordados religiosos y trajes teatrales."
    ],
    "matrixParametersRelation": [
      "Matrices diseñadas para Mylar: no utilizar matrices comunes con tatami denso a 0,40 mm; el relleno debe ser abierto (1,0 mm a 1,5 mm) para dejar ver el brillo del film.",
      "Perforación de borde troquelado: el contorno exterior debe tener puntadas concentradas que perforen el film para facilitar el desprendimiento manual.",
      "Velocidad de máquina reducida: coser a 600-700 PPM para que la aguja no arrugue el film antes de fijarlo."
    ],
    "commonErrors": [
      "Usar papel celofán común quebradizo de envolver regalos escolares en lugar de film de poliéster Mylar textil, el cual se deshace con el primer lavado.",
      "Planchar el bordado con calor directo sobre el film sin paño protector, derritiendo el plástico tornasolado.",
      "Digitalizar puntadas de satín muy cerrado sobre el film, tapando por completo el brillo iridiscente."
    ],
    "troubleshootingTips": [
      "Utiliza exclusivamente film Mylar textil de poliéster: es resistente al lavado doméstico en lavarropas y no se descolora.",
      "Usa una aguja estándar 75/11 con punta afilada (Sharp / Microtex) para perforar el film limpiamente sin rasgarlo.",
      "Para planchar una prenda con Mylar, hazlo siempre por el revés o colocando una tela de algodón encima a temperatura media sin vapor."
    ],
    "whenToAdjust": "Reduce la densidad de relleno en el software si notas que el hilo cubre más del 50% de la superficie del film tornasolado.",
    "dicaArtrelados": "El tip de efecto mágico Artrelados con film tornasolado: Si bordas alas de libélula o mariposa, pon debajo una tela negra o azul noche y arriba el film tornasolado verde-azul. Borda con hilo violeta fino con puntadas de encaje abiertas. El contraste del fondo oscuro hará que el brillo parezca una joya de cristal Swarovski que hipnotizará a todos tus clientes.",
    "voceSabia": "¿Sabías que el material Mylar con el que se borda este efecto es el mismo film ultraligero y térmico con el que la NASA recubre los trajes de los astronautas y los satélites espaciales para reflejar la radiación solar en el espacio exterior?",
    "practicalExercise": "Consigue una tira de film Mylar tornasolado. En tu software, programa una estrella de 5 cm con relleno de líneas cruzadas abiertas a 1,5 mm de espaciado y un borde de satín fino. Bórdala y arranca el film sobrante: verás nacer una estrella brillante con destellos de arcoíris.",
    "quickSummary": "Técnica decorativa que atrapa película plástica tornasolada bajo puntadas abiertas para lograr reflejos holográficos tipo vitral.",
    "summary": "Técnica decorativa que atrapa película plástica tornasolada bajo puntadas abiertas para lograr reflejos holográficos tipo vitral.",
    "relatedTerms": [
      "Bordado con Aplicación de Telas",
      "Puntadas de Soporte (Underlay)",
      "Brillo del Hilo (Thread Sheen)",
      "Técnicas Especiales de Relieve"
    ]
  },
  "c-049-centralizacao-automatica-bastidor": {
    "term": "Centrado Automático en el Bastidor",
    "level": "Iniciante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "De los algoritmos de geometría analítica vectorial implementados en los firmwares de máquinas computarizadas para calcular el centroide instantáneo de los objetos.",
    "definition": "Función automatizada del procesador de la máquina de bordar que calcula el centro geométrico absoluto de las dimensiones máximas en X e Y del diseño digital y desplaza el pantógrafo para alinear ese punto de origen exactamente con el centro mecánico de simetría del bastidor seleccionado.",
    "howItWorks": [
      "1. Al cargar un nuevo archivo de bordado, la computadora analiza los límites perimetrales (Bounding Box) del dibujo.",
      "2. El procesador calcula el punto medio sumando los extremos: X_centro = (X_max + X_min) / 2 e Y_centro = (Y_max + Y_min) / 2.",
      "3. El operador pulsa la tecla de centrado automático (Center Key / Hoop Origin) en la pantalla táctil.",
      "4. Los servomotores mueven el carro del bastidor hasta hacer coincidir esas coordenadas con el punto de referencia de fábrica.",
      "5. El diseño queda distribuido con márgenes idénticos a la izquierda, derecha, arriba y abajo respecto al aro."
    ],
    "beginnerExplanation": "Es el botón salvador con icono de diana o bastidor con una cruz en el medio que tiene la pantalla de tu máquina. Si estuviste corriendo el dibujo con las flechas para un lado y para el otro y ya no sabes dónde quedó, tocas este botón y ¡zas!: la máquina lleva el dibujo solita al centro exacto del aro, asegurando que quede perfectamente centrado y lejos de los bordes plásticos.",
    "practicalExamples": [
      "Centrado instantáneo de toallas y manteles marcados con cruz central de sastre.",
      "Recuperación del origen simétrico tras haber probado giros o desplazamientos angulares.",
      "Prevención de colisiones de aguja al garantizar márgenes de seguridad en todas direcciones."
    ],
    "matrixParametersRelation": [
      "Coordenadas X=0, Y=0: convención universal donde el punto cero representa el centro geométrico de la matriz.",
      "Márgenes de seguridad del bastidor: el software bloquea el inicio de costura si el diseño centrado supera el campo útil.",
      "Sincronización con el puntero láser: el punto de luz apunta exactamente al centro del diseño al pulsar centrado automático."
    ],
    "commonErrors": [
      "Asumir que el centrado automático de la máquina coincide con el centro del cuerpo humano en prendas asimétricas (como bolsillos laterales).",
      "No verificar que la tela esté colocada perfectamente centrada dentro del bastidor antes de pulsar la tecla.",
      "Confundir el centro geométrico del archivo con el punto de inicio de costura si la matriz fue programada para empezar en una esquina."
    ],
    "troubleshootingTips": [
      "Pulsa siempre la tecla de centrado automático al cargar cualquier diseño nuevo antes de realizar ajustes finos de posición.",
      "Verifica la coincidencia visual con la plantilla de plástico transparente provista con tu bastidor.",
      "Si deseas bordar descentrado intencionalmente, pulsa primero el centrado automático y luego desplaza con las flechas contando los milímetros en pantalla."
    ],
    "whenToAdjust": "Toca la tecla de centrado automático cada vez que cambies de tamaño de bastidor en la pantalla de la máquina.",
    "dicaArtrelados": "El tip de seguridad Artrelados al centrar: Después de pulsar el botón de centrado automático en la pantalla, realiza siempre un trazado de contorno perimetral (Trace) con la aguja arriba. Ver el bastidor recorrer los 4 extremos en silencio te dará la tranquilidad absoluta de que tu aguja nunca tocará los bordes plásticos del bastidor.",
    "voceSabia": "¿Sabías que los primeros sistemas de bordado por computadora no tenían centrado automático y el operador debía medir con regla metálica y mover manivelas micrométricas para encontrar el centro de cada bastidor a mano?",
    "practicalExercise": "Carga un diseño en tu máquina y desplázalo hacia una esquina con las flechas de la pantalla táctil. Luego busca el botón con el icono de la mira o bastidor centrado y presiónalo: disfruta viendo cómo el pantógrafo regresa solo al centro perfecto en medio segundo.",
    "quickSummary": "Función digital que alinea automáticamente el centro geométrico del diseño con el centro físico del bastidor.",
    "summary": "Función digital que alinea automáticamente el centro geométrico del diseño con el centro físico del bastidor.",
    "relatedTerms": [
      "Calibración de Punto Cero y Origen Central",
      "Función de Trazado de Contorno (Trace)",
      "Plantilla de Posicionamiento de Bastidor",
      "Área Útil del Bastidor"
    ]
  },
  "c-094-centralizacao-marcacao-giz-alfaiate": {
    "term": "Centrado con Tiza de Sastre",
    "level": "Iniciante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "De la tradición secular de la sastrería clásica europea que utilizaba piedra de arcilla natural y esteatita (jaboncillo de sastre) para marcas de corte no permanentes.",
    "definition": "Protocolo técnico de alineación manual y posicionamiento que utiliza tiza de sastre sólida (arcilla prensada tradicional o pastillas triangulares a base de cera desvanecible) para trazar los ejes cartesianos vertical y horizontal sobre la prenda, permitiendo alinear el centro físico del bastidor o el puntero luminoso de la máquina con exactitud milimétrica.",
    "howItWorks": [
      "1. La operaria dobla la prenda por sus costuras simétricas o mide con regla la posición anatómica indicada.",
      "2. Con el canto afilado de la tiza de sastre, traza una cruz perpendicular de líneas finas (eje X e Y) en el centro exacto donde debe quedar el bordado.",
      "3. Se coloca la prenda sobre la estación de enmarcado haciendo coincidir las líneas de tiza con las muescas de alineación del bastidor.",
      "4. En la máquina, se desplaza el pantógrafo con las flechas hasta posicionar la punta de la aguja o el puntero LED exactamente sobre el cruce de las dos líneas de tiza.",
      "5. Al concluir el bordado, el polvo de tiza residual se elimina fácilmente pasando un cepillo de cerdas suaves o una esponja seca."
    ],
    "beginnerExplanation": "Es el método tradicional y más seguro de todos los talleres: marcar una cruz suave con tiza de coser en la tela exactamente donde quieres que vaya el dibujo. Las marcas de tiza te sirven de guía para que al poner el aro no te quede torcido y para que la aguja de la máquina apunte directo al centro de la cruz antes de empezar. Cuando terminas de bordar, pasas un cepillito y la tiza sale volando sin dejar manchas.",
    "practicalExamples": [
      "Marcado del centro del pecho en chombas polo de piqué y remeras de algodón peinado.",
      "Centrado de iniciales en sábanas, toallas y fundas de almohada de hotelería.",
      "Alineación de nombres sobre el bolsillo de ambos lados de chaquetillas médicas y guardapolvos."
    ],
    "matrixParametersRelation": [
      "Coincidencia con el punto cero (X0, Y0): el cruce de las líneas de tiza debe corresponder con el origen matemático de la matriz.",
      "Verificación de paralelismo: la línea horizontal de tiza debe ser perfectamente paralela al riel del eje X de la máquina.",
      "No interferencia con sensores: el polvo de tiza fino no afecta la lectura de barreras ópticas ni cámaras de escaneo."
    ],
    "commonErrors": [
      "Usar tizas de arcilla grasosa o jaboncillos baratos con perfume que dejan marcas de grasa imposibles de quitar en sedas o linos claros.",
      "Trazar líneas de tiza gruesas y desprolijas con el borde gastado de la pastilla, perdiendo la precisión milimétrica del centrado.",
      "Frotar la tiza con agua antes de cepillarla en seco, empastando el polvo en la trama del tejido."
    ],
    "troubleshootingTips": [
      "Mantén siempre afilado el canto de tu tiza de sastre pasándolo suavemente sobre un trozo de papel de lija o con un afilador de tiza.",
      "Para retirar la tiza al terminar de bordar, usa siempre un cepillo seco: el polvo de tiza saldrá en dos pasadas sin necesidad de mojar la prenda.",
      "Usa tiza blanca en telas oscuras y tiza azul o amarilla suave en telas blancas para máxima visibilidad sin riesgo."
    ],
    "whenToAdjust": "Afina el borde de la tiza con una lija cada vez que notes que el trazo supera un milímetro de ancho.",
    "dicaArtrelados": "El tip del jaboncillo seco Artrelados: Si no consigues tiza de sastre de buena calidad en tu ciudad, guarda los culitos o restos finitos de jabón de tocador blanco de tu baño. Déjalos secar al sol durante una semana hasta que queden duros como piedra y raspa el borde con un cuchillo para afilarlo. Es el mejor marcador del mundo: marca suave, no mancha, y con solo pasar la plancha tibia desaparece por completo sin dejar rastros.",
    "voceSabia": "¿Sabías que los antiguos sastres de Nápoles inventaron las pastillas de tiza triangulares en el siglo XVIII precisamente para tener siempre tres vértices afilados disponibles para marcar líneas finas en los trajes de lana sin tener que afilar la pastilla constantemente?",
    "practicalExercise": "Toma un retazo de tela y traza dos líneas perpendiculares con el canto fino de tu tiza de sastre. Monta la tela en el aro y usa las flechas de tu pantalla hasta apoyar la aguja exactamente en el cruce: comprueba lo fácil y seguro que resulta centrar cualquier bordado con este método.",
    "quickSummary": "Método tradicional de marcado manual con tiza textil para trazar ejes de centrado precisos que se eliminan con cepillado seco.",
    "summary": "Método tradicional de marcado manual con tiza textil para trazar ejes de centrado precisos que se eliminan con cepillado seco.",
    "relatedTerms": [
      "Calibración de Punto Cero y Origen Central",
      "Bolígrafo Termoamovible para Marcación Textil",
      "Marcador Textil Hidrosoluble de Marcación Rápida",
      "Plantilla de Posicionamiento de Bastidor"
    ]
  },
  "c-082-cera-silicone-liquido-passagem-linha": {
    "term": "Silicona Líquida para Lubricación de Hilos",
    "level": "Intermedio 🟡",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal femenina",
    "origin": "De los aceites de polidimetilsiloxano (PDMS) de grado textil desarrollados para reducir el coeficiente de fricción y disipar el calor extremo en agujas de coser industriales a alta velocidad.",
    "definition": "Fluido lubricante transparente, inodoro, no graso y de evaporación limpia a base de silicona textil pura (Thread Lubricant / Sewer's Aid), formulado para aplicarse en fieltros lubricadores del árbol de conos o directamente sobre los carretes de hilo, reduciendo drásticamente la fricción en el ojo de la aguja y evitando el corte y desflecado de hilos metálicos y sintéticos.",
    "howItWorks": [
      "1. Se aplican unas gotas de silicona líquida en el depósito de fieltro absorbente ubicado en la guía aérea del árbol de conos de la máquina.",
      "2. El hilo pasa rozando suavemente el fieltro saturado, absorbiendo una película microscópica de fluido lubricante.",
      "3. Al viajar a alta velocidad a través de los canales tensores y la palanca tirahilos, la silicona reduce el roce mecánico y elimina la electricidad estática.",
      "4. Al atravesar el ojo de la aguja a más de 1000 penetraciones por minuto, la silicona disipa el calor térmico generado por la fricción contra la tela.",
      "5. El hilo mantiene su elasticidad y resistencia a la tracción sin quemarse ni romperse.",
      "6. La silicona se disipa limpiamente sin dejar manchas de grasa ni alterar el color de las telas."
    ],
    "beginnerExplanation": "Es un líquido transparente especial de silicona pura que es como un bálsamo milagroso para los hilos rebeldes. Hay hilos que se calientan mucho, se despeluzan o se cortan a cada rato (como los hilos dorados metálicos o los hilos de poliéster en telas muy duras). Le pones unas gotitas de esta silicona en el hilo o en las almohadillas de la máquina, y el hilo pasa resbalando suavecito como la seda por la aguja, ¡sin cortarse nunca más y sin manchar la tela!",
    "practicalExamples": [
      "Bordado continuo sin cortes con hilos metálicos dorados o plateados en escudos y estandartes.",
      "Bordado sobre telas pesadas tratadas con pegamentos o impermeabilizantes vinílicos que recalientan la aguja.",
      "Eliminación de la electricidad estática en talleres secos durante el invierno en bordados a 1000 PPM."
    ],
    "matrixParametersRelation": [
      "Reducción de roturas de hilo: disminuye hasta en un 80% las paradas imprevistas por fatiga térmica en el ojo de la aguja.",
      "Estabilización de la tensión: el coeficiente de fricción constante evita picos de tensión bruscos.",
      "Compatibilidad total con agujas de titanio con ranura ancha."
    ],
    "commonErrors": [
      "Usar aceites de máquina de coser comunes o aceite de cocina sobre los hilos, arruinando y manchando para siempre las prendas de los clientes.",
      "Empapar en exceso el cono de hilo hasta que chorree líquido sobre los discos tensores de la máquina.",
      "Aplicar silicona sobre hilos que no la necesitan, ensuciando innecesariamente las guías mecánicas."
    ],
    "troubleshootingTips": [
      "Utiliza exclusivamente silicona líquida grado textil formulada para bordado (como Sewer's Aid o Madeira Thread Lubricant).",
      "Aplica apenas 2 o 3 gotas a lo largo del cono de hilo en forma de línea vertical: la silicona se difundirá sola por capilaridad.",
      "Limpia los discos de tensión con un paño seco si observas acumulación excesiva de fluido con pelusa."
    ],
    "whenToAdjust": "Aplica una gota de silicona en el hilo cada vez que trabajes con hilos metálicos o bordes sobre telas plastificadas difíciles.",
    "dicaArtrelados": "El tip salvador Artrelados para hilos metálicos: Si estás bordando con hilo dorado metálico y se te corta cada diez puntadas, no tires el cono a la basura. Ponle dos gotitas de silicona líquida textil en el cono y pásale el hilo por una almohadilla de fieltro humedecida. La aguja se mantendrá fría y bordarás el diseño completo a 800 puntadas por minuto con un sonido celestial y cero cortes.",
    "voceSabia": "¿Sabías que a 1000 puntadas por minuto la punta de una aguja de bordar alcanza una temperatura de más de 250 grados Celsius por la fricción con la tela, suficiente para derretir instantáneamente los hilos sintéticos si no se utiliza una buena lubricación?",
    "practicalExercise": "Toma un cono de hilo metálico dorado. Pásale el dedo en seco para sentir su aspereza. Aplícale una gota de silicona líquida textil y vuelve a tocarlo: siente cómo se vuelve suave, flexible y deslizante como seda en tus manos.",
    "quickSummary": "Fluido lubricante no graso que enfría la aguja y reduce la fricción, indispensable para bordar con hilos metálicos sin roturas.",
    "summary": "Fluido lubricante no graso que enfría la aguja y reduce la fricción, indispensable para bordar con hilos metálicos sin roturas.",
    "relatedTerms": [
      "Aceite de Silicona Líquido para Hilos Técnicos",
      "Lubricante Textil Antifricción para Hilos",
      "Aguja para Hilos Metálicos",
      "Mantenimiento Preventivo Mecánico"
    ]
  },
  "c-065-cera-lubrificante-de-linha-silicone-oil": {
    "term": "Aceite de Silicona Líquido para Hilos Técnicos",
    "level": "Intermedio 🟡",
    "category": "Insumos & Materiales",
    "grammarClass": "Sustantivo masculino",
    "origin": "De los compuestos organosilícicos industriales de alta viscosidad (Silicone Oil 350-500 cSt) empleados en el acabado y embobinado de hilados de alta tenacidad.",
    "definition": "Variante de lubricante textil líquido de viscosidad media-alta diseñado para impregnar esponjas y reservorios integrados en el árbol de guiahilos de máquinas de bordar industriales multicabezal, creando una barrera hidrofóbica y térmica que acompaña al hilado durante su paso por guías y tensores hasta la formación del lazo en el garfio rotativo.",
    "howItWorks": [
      "1. El aceite de silicona se vierte en los pequeños vasitos dosificadores o esponjas cilíndricas del sistema de alimentación aérea.",
      "2. El hilo atraviesa el núcleo de la esponja recibiendo un recubrimiento microscópico y homogéneo de polímero de silicona.",
      "3. La viscosidad controlada del aceite de silicona amortigua las vibraciones transversales del hilado a altas revoluciones.",
      "4. Al penetrar la tela, el aceite reduce la adhesión de los adhesivos en spray temporal presentes en la entretela sobre el vástago de la aguja.",
      "5. Previene la acumulación de gomas y residuos pegajosos en el ojo de la aguja, manteniendo el orificio 100% despejado.",
      "6. La formulación es inerte, no amarillea con el paso del tiempo y se elimina por completo en el primer lavado con agua tibia."
    ],
    "beginnerExplanation": "Es un aceitito de silicona un poquito más espeso que se usa en las máquinas grandes o cuando bordas telas que tienen mucho pegamento en aerosol abajo. Cuando bordas con adhesivo, la aguja se pone pegajosa como cinta adhesiva y rompe el hilo. Este aceite de silicona le hace como un escudo antiadherente a la aguja y al hilo para que nada se le pegue y pueda coser a fondo durante horas sin frenar.",
    "practicalExamples": [
      "Producción masiva de parches termoadhesivos donde la aguja atraviesa múltiples capas de pegamento en película.",
      "Bordado industrial continuo a 1000 PPM con hilos oscuros de alta fricción.",
      "Lubricación de hilos de rayón viscosa en ambientes de taller con muy baja humedad relativa."
    ],
    "matrixParametersRelation": [
      "Protección antiadhesivo: neutraliza el efecto de arrastre de pegamentos temporales en spray sobre la caña de la aguja.",
      "Disipación calórica constante: mantiene la temperatura de la aguja por debajo del punto de fusión del poliéster (220 °C).",
      "Reducción de pelusa textil: compacta las microfibras sueltas del hilo evitando que se acumulen en los discos tensores."
    ],
    "commonErrors": [
      "Saturar las esponjas dosificadoras con exceso de aceite haciendo que gotee sobre la ropa bordada.",
      "Mezclar el aceite de silicona con aceites minerales lubricantes de engranajes mecánicos.",
      "Usarlo en telas impermeables que no permiten la posterior evaporación o lavado del producto."
    ],
    "troubleshootingTips": [
      "Añade solo 4 a 6 gotas de aceite de silicona en la esponja dosificadora al inicio del turno de producción.",
      "Limpia la caña de la aguja con un trapo con alcohol al finalizar el día para retirar cualquier residuo atrapado.",
      "Almacena la botella de silicona bien cerrada para evitar la contaminación con polvo y pelusas del taller."
    ],
    "whenToAdjust": "Recarga el depósito de silicona cuando sientas que la esponja superior está seca al tacto.",
    "dicaArtrelados": "El tip anti-pegamento Artrelados: Si estás bordando apliques y usaste mucho spray adhesivo 505, la aguja se pondrá pegajosa en 5 minutos y el hilo empezará a reventar. Pasa una gota de aceite de silicona por el hilo superior: la silicona limpiará la aguja sola mientras cose y nunca más tendrás que parar a limpiar la aguja con alcohol.",
    "voceSabia": "¿Sabías que los aceites de silicona textil son completamente inocuos para la piel humana y se utilizan también en la formulación de cosméticos y cremas hidratantes de alta gama gracias a su extrema pureza química?",
    "practicalExercise": "Coloca una gota de aceite de silicona entre tus dedos pulgar e índice: frótalos y siente cómo desaparece casi toda la fricción entre la piel. Comprenderás al instante el alivio que siente la aguja y el hilo al coser a 1000 puntadas por minuto.",
    "quickSummary": "Aceite de silicona para esponjas dosificadoras que evita el sobrecalentamiento de la aguja y repele adhesivos en spray.",
    "summary": "Aceite de silicona para esponjas dosificadoras que evita el sobrecalentamiento de la aguja y repele adhesivos en spray.",
    "relatedTerms": [
      "Silicona Líquida para Lubricación de Hilos",
      "Lubricante Textil Antifricción para Hilos",
      "Cola Temporal en Spray 505",
      "Aguja de Bordar con Recubrimiento de Titanio"
    ]
  },
  "c-051-cera-lubrificante-linhas-silicone": {
    "term": "Lubricante Textil Antifricción para Hilos",
    "level": "Intermedio 🟡",
    "category": "Insumos & Materiales",
    "grammarClass": "Sustantivo masculino",
    "origin": "De los tradicionales bloques sólidos de cera de abejas utilizados por los sastres clásicos para lubricar hilos de coser a mano, modernizados en fórmulas sintéticas de polímeros deslizantes para bordadoras.",
    "definition": "Producto auxiliar formulado en forma de emulsión líquida o bloque ceroso suave (Thread Conditioner / Sewer's Aid) que acondiciona la estructura molecular de los hilos de bordar, sellando las microfibras periféricas rebeldes, suavizando la superficie áspera de filamentos metalizados y proporcionando una capa protectora antifricción que facilita el paso por los tensores mecánicos.",
    "howItWorks": [
      "1. El lubricante se aplica trazando una línea vertical directamente a lo largo del cono o frotando el hilo a través de una almohadilla impregnada.",
      "2. Los tensioactivos penetran en el entorchado del hilo cohesionando los filamentos microscópicos sin apelmazarlos.",
      "3. Al viajar por los discos tensores, el hilo se desliza con una fluidez homogénea eliminando saltos y tirones de tensión.",
      "4. Reduce drásticamente la tendencia de los hilos de rayón y viscosa a enrollarse sobre sí mismos formando nudos de torsión (Kinking).",
      "5. Permite que las agujas finas calibre 65/9 manejen hilos complejos con total suavidad sin deshilacharse en el ojo."
    ],
    "beginnerExplanation": "Es el acondicionador de cabello pero para tus hilos de bordar. Así como te pones crema de enjuague para que el pelo quede sedoso y no se enrede, este producto acondiciona los hilos secos o duros. Hace que no se retuerzan como resortes, que no hagan rulitos antes de entrar a la aguja y que pasen patinando suavemente por toda la máquina sin trabarse jamás.",
    "practicalExamples": [
      "Acondicionamiento de hilos viejos o resecos que han estado guardados en cajones durante años.",
      "Control de filamentos rebeldes en hilos metalizados de fantasía y lurex.",
      "Bordado de alta velocidad en telas sintéticas densas que acumulan estática."
    ],
    "matrixParametersRelation": [
      "Prevención de nudos de torsión (Kinking): neutraliza el giro helicoidal excesivo de hilos de alta torsión (Z-Twist / S-Twist).",
      "Mantenimiento de tensión constante: elimina las fluctuaciones de resistencia en los discos tensores superiores.",
      "Reducción de desgaste en guías: prolonga la vida útil de los pasahilos de cerámica y acero."
    ],
    "commonErrors": [
      "Usar velas de parafina común de iluminación doméstica, las cuales dejan trozos duros de cera que bloquean los discos tensores mecánicos.",
      "Aplicar acondicionadores en exceso provocando manchas grasas en telas de raso o seda pura.",
      "No verificar la fecha de vencimiento o secado del producto dentro del envase."
    ],
    "troubleshootingTips": [
      "Aplica apenas una pasada ligera sobre el cono: no es necesario saturar todo el grosor del hilo.",
      "Para hilos que forman rulos o bucles antes del tirahilos, coloca una red elástica tubular sobre el cono y aplica el lubricante sobre la red.",
      "Limpia periódicamente los fieltros del árbol de conos con agua tibia para retirar restos de polvo acumulado."
    ],
    "whenToAdjust": "Acondiciona el hilo si notas que al desenrollarse del cono tiende a retorcerse sobre sí mismo formando pequeños lazos.",
    "dicaArtrelados": "El rescate de conos viejos Artrelados: Si te regalaron o compraste una caja de hilos de bordar hermosos pero tienen años guardados y el hilo se corta con mirarlo porque está seco, no los tires. Dales una pincelada suave con acondicionador textil de silicona y déjalos reposar una noche dentro de una bolsa plástica cerrada. El hilo absorberá la humedad y la elasticidad, y bordará suave y brillante como si fuera nuevo.",
    "voceSabia": "¿Sabías que los hilos de bordar industriales ya vienen lubricados de fábrica con un 2% a un 3% de silicona técnica en el momento del embobinado final para garantizar que soporten las pruebas de velocidad de 1200 PPM?",
    "practicalExercise": "Corta un metro de un hilo que tienda a retorcerse. Sujétalo de ambos extremos y acércalos: verás cómo el hilo en seco se enrolla formando lazos. Aplícale una gota de acondicionador y repite la prueba: observa cómo cae recto y dócil sin formar nudos.",
    "quickSummary": "Acondicionador textil que sella fibras rebeldes, elimina nudos de torsión y suaviza el paso del hilo por los tensores.",
    "summary": "Acondicionador textil que sella fibras rebeldes, elimina nudos de torsión y suaviza el paso del hilo por los tensores.",
    "relatedTerms": [
      "Silicona Líquida para Lubricación de Hilos",
      "Aceite de Silicona Líquido para Hilos Técnicos",
      "Brillo del Hilo (Thread Sheen)",
      "Conjunto Tensor Superior de Discos"
    ]
  },
  "c-100-certificacao-oeko-tex-standard-100-fios": {
    "term": "Certificación Ecológica OEKO-TEX Standard 100 para Hilos",
    "level": "Intermedio 🟡",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal femenina",
    "origin": "Creada en 1992 por el Instituto Hohenstein de Alemania y el Instituto Austriaco de Investigación Textil (OETI) como el sello ecológico y de seguridad toxicológica líder a nivel mundial.",
    "definition": "Certificación internacional rigurosa e independiente que audita y garantiza que los hilos de bordar, tintes, lubricantes y componentes químicos utilizados en su fabricación están 100% libres de sustancias nocivas para la salud humana (pesticidas, metales pesados como plomo o níquel, formaldehídos, ftalatos y colorantes cancerígenos prohibidos), siendo la Clase 1 el estándar de máxima seguridad exigido para artículos destinados a bebés y niños hasta 3 años de edad.",
    "howItWorks": [
      "1. Los fabricantes de hilos (como Madeira, Isacord, Gunold, Marathon) envían muestras de cada lote de hilado a laboratorios certificados europeos.",
      "2. Se realizan análisis químicos y biológicos extremos, incluyendo pruebas de resistencia al sudor y a la saliva infantil.",
      "3. Si el hilo no desprende ningún químico tóxico ni produce irritación dérmica, se otorga el certificado OEKO-TEX Standard 100 Clase 1.",
      "4. El número de certificado se imprime en la base de los conos de hilo y en las cartas de colores comerciales.",
      "5. El ateliê puede certificar ante sus clientes que sus prendas bordadas son completamente seguras para la piel delicada de recién nacidos y personas alérgicas."
    ],
    "beginnerExplanation": "Es el sello de garantía que demuestra que los hilos con los que bordas son 100% limpios y seguros, sin venenos, tintes tóxicos ni metales pesados. Es fundamental cuando bordas ropita de bebés recién nacidos, baberos o juguetes de tela que los niños se llevan a la boca y chupan todo el día. Usar hilos con este sello te da la tranquilidad de que tu trabajo jamás causará alergias ni lastimará la piel de ningún bebé.",
    "practicalExamples": [
      "Bordado de ajuares de nacimiento, mantitas y bodies para bebés prematuros y recién nacidos.",
      "Uniformes médicos, quirúrgicos y de enfermería en contacto con piel lesionada.",
      "Juguetes textiles infantiles, peluches y muñecos de apego para el mercado europeo y americano."
    ],
    "matrixParametersRelation": [
      "Exigencia de exportación: mercados internacionales exigen obligatoriamente la certificación Clase 1 para comercializar indumentaria infantil.",
      "Solidez al lavado higiénico: los hilos certificados resisten lavados a más de 60 °C y uso de desinfectantes hospitalarios sin liberar tintes.",
      "Compatibilidad con entretelas ecológicas biodegradables."
    ],
    "commonErrors": [
      "Comprar conos de hilo sin marca de origen dudoso fabricados con tintes prohibidos para bordar prendas de bebés para abaratar costos.",
      "Confundir un hilo certificado OEKO-TEX con una prenda terminada certificada (la tela y la entretela también deben ser seguras).",
      "Afirmar que un bordado es hipoalergénico si el revés contiene nudos plásticos duros que lastiman la piel por fricción mecánica."
    ],
    "troubleshootingTips": [
      "Busca siempre el logotipo de OEKO-TEX Standard 100 Clase 1 en las etiquetas de los conos de hilo de tu taller.",
      "Combina siempre hilos certificados con entretela suave Poly-Mesh y película termoadhesiva de protección de revés (Cloud Cover).",
      "Destaca en la publicidad de tu ateliê y en las redes sociales que utilizas exclusivamente hilos certificados para bebés: aumentará el valor de tu marca."
    ],
    "whenToAdjust": "Exige hilos certificados OEKO-TEX Clase 1 cada vez que fabriques prendas infantiles, baberos o ropa de dormir.",
    "dicaArtrelados": "El sello de confianza Artrelados para ventas infantiles: Imprime una pequeña tarjetita colgante en tus prendas de bebé que diga: 'Bordado con hilos ecológicos certificados OEKO-TEX Standard 100 Clase 1: seguros para la piel de tu bebé'. Las mamás y papás pagarán con gusto un precio premium por tus prendas al sentir la tranquilidad de cuidar la salud de sus hijos.",
    "voceSabia": "¿Sabías que la prueba de certificación OEKO-TEX Clase 1 para hilos de bordar incluye sumergir las hebras en una solución química que simula la saliva ácida de un bebé durante horas para garantizar que ningún átomo de tinte pase a su organismo si chupa el bordado?",
    "practicalExercise": "Revisa los conos de hilo de tu taller: busca en la etiqueta inferior el pequeño logotipo cuadrado con el árbol o las palabras 'OEKO-TEX Standard 100'. Identifica cuáles de tus hilos tienen el sello y sepáralos en una canasta especial dedicada a bebés.",
    "quickSummary": "Certificación ecológica internacional que garantiza que los hilos están libres de químicos tóxicos, seguros para bebés.",
    "summary": "Certificación ecológica internacional que garantiza que los hilos están libres de químicos tóxicos, seguros para bebés.",
    "relatedTerms": [
      "Bordado en Camisetas de Punto y Acabado de Revés Suave",
      "Hilo de Poliéster Trilobal",
      "Protección Termoadhesiva de Revés (Cover-A-Stitch)",
      "Insumos & Materiales"
    ]
  }
};

import { Verbete } from "../../types";

export const LOTE2_B_PART1_ES: Record<string, Partial<Verbete>> = {
  "b-038-base-de-ponto-tatami": {
    "term": "Base de Puntada Tatami (Underlay para Relleno Tatami)",
    "level": "Intermedio 🟡",
    "category": "Digitalización & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del japonés tatami (estera tradicional de paja de arroz entrelazada) y del inglés underlay (capa inferior o base estructural). En la digitalización de matrices, designa la estructura previa de puntadas que ancla la tela antes de bordar el bloque de relleno definitivo.",
    "definition": "La base de puntada Tatami es la subestructura geométrica previa de puntadas ejecutada antes del bloque final de relleno denso. Su propósito principal es estabilizar la tela, unificar la tensión superficial con la entretela, prevenir el arrugamiento por contracción y evitar que las filas de relleno se hundan en el tejido, asegurando una cobertura cromática sólida y uniforme.",
    "howItWorks": [
      "1. Trazado del contorno de fijación perimetral (Edge Run) a 0,8 mm a 1,2 mm dentro del límite exterior del diseño para delimitar la zona de relleno.",
      "2. Ejecución de una o dos cuadrículas de puntadas rectas espaciadas (Tatami Underlay / Red / Grilla) con un ángulo de 45° a 90° respecto al ángulo del relleno final.",
      "3. Densidad calibrada y abierta: espaciado de paso amplio (de 1,5 mm a 3,0 mm) con longitudes de puntada de 3,5 mm a 4,5 mm para evitar rigidez excesiva.",
      "4. Fusión de fibras: la base compacta las fibras superficiales de la tela (especialmente en piqué, toallas y sargas), creando una superficie lisa y plana para recibir el relleno superior."
    ],
    "beginnerExplanation": "Imagina que vas a pintar una pared rugosa: primero aplicas una capa de sellador para que la pintura quede lisa y no sea absorbida. En el bordado, la base de Tatami hace exactamente eso: coloca una camita de hilos espaciados sobre la tela para que el bordado final quede suave, tupido y sin arrugas.",
    "practicalExamples": [
      "Bordado de logotipos grandes en espaldas de camperas o buzos de algodón frizado.",
      "Escudos institucionales y parches sobre tela sarga o cordura que requieren una base perfectamente plana.",
      "Relleno de fondo en toallas o batas de baño utilizando cuadrícula doble previa para aplastar el pelo del tejido."
    ],
    "matrixParametersRelation": [
      "Ángulo de puntada: la base debe programarse a 45° o 90° respecto al ángulo final del Tatami superior para anular la contracción textil.",
      "Densidad del relleno: una base bien calibrada permite reducir la densidad del relleno superior de 0,40 mm a 0,43 mm, ahorrando miles de puntadas sin perder cobertura.",
      "Compensación de estiramiento (Pull Compensation): reduce notablemente el desplazamiento lateral del tejido durante el bordado."
    ],
    "commonErrors": [
      "Bordar rellenos extensos sin ninguna base previa, provocando que la tela se arrugue y se deforme la matriz.",
      "Programar la base con el mismo ángulo que el relleno superior, lo que hace que las puntadas caigan en los mismos surcos y se hunda el bordado.",
      "Usar una base excesivamente densa que acartona la prenda y provoca roturas de agujas por acumulación excesiva de hilos."
    ],
    "troubleshootingTips": [
      "Si la tela se ondea al terminar el relleno, activa una base de doble cuadrícula abierta a 90° cruzados.",
      "Si el borde del relleno queda desalineado respecto al contorno satinado, verifica que la base contenga un hilván de borde (Edge Run) perimetral.",
      "Si el bordado queda acartonado como una tabla, aumenta el espaciado de la base a 2,5 mm y aligera la densidad superior."
    ],
    "whenToAdjust": "Aumenta la firmeza de la base en telas elásticas, finas o afelpadas; aligérala o utiliza solo puntada de contorno en telas rígidas, lona o cuero.",
    "dicaArtrelados": "El secreto de oro de Artrelados: Para rellenos de más de 5 cm de ancho, nunca uses una base con el mismo ángulo del relleno final. Programa siempre una cuadrícula abierta a 45° y otra a 135°; esto crea una malla invisible que retiene la tela en ambas direcciones y te garantiza un relleno sedoso y sin una sola ondulación.",
    "voceSabia": "¿Sabías que el término Tatami proviene de las esteras japonesas hechas de junco entrelazado? En el bordado industrial, la base imita exactamente esa estructura trenzada para distribuir las fuerzas mecánicas de tracción sobre toda la superficie de la prenda.",
    "practicalExercise": "Abre tu software de digitalización y crea dos círculos idénticos de 60 mm con relleno Tatami. Al primero colócale base de doble cuadrícula a 45°/135°. Al segundo déjalo sin ninguna base. Borda ambos sobre una remera de algodón común y observa cómo el primero queda plano y perfecto, mientras que el segundo arruga y deforma toda la tela.",
    "quickSummary": "Estructura interna de puntadas preliminares que ancla la tela y la entretela, evitando arrugas y hundimientos en bloques de relleno extensos.",
    "relatedTerms": [
      "Base de Puntadas (Underlay)",
      "Puntada Tatami",
      "Compensación de Encogimiento",
      "Densidad de Puntada"
    ]
  },
  "b-014-base-de-pontos-underlay": {
    "term": "Base de Puntadas (Underlay / Puntadas de Soporte)",
    "level": "Iniciante 🟢",
    "category": "Digitalización & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del inglés underlay (capa subyacente, cimiento o soporte inferior). Introducido en el bordado computadorizado por Wilcom y Tajima en la década de 1980 como fundamento de la digitalización profesional.",
    "definition": "La base de puntadas (underlay) es el cimiento invisible de puntadas automáticas que se bordan antes de los elementos visibles (satín, tatami o contornos). Cumple tres funciones críticas: une el tejido con el estabilizador, aplasta las fibras textiles superficiales y compensa la tracción mecánica del hilo, evitando deformaciones en la matriz.",
    "howItWorks": [
      "1. Puntada de hilván central (Center Run): una sola línea de puntadas por el centro de columnas finas para dar cuerpo y fijación mínima.",
      "2. Puntada de borde perimetral (Edge Run): línea trazada justo dentro de los bordes del satín para evitar que los extremos se desgajen o se hundan.",
      "3. Zig-zag y doble zig-zag: estructura en vaivén que aporta volumen 3D y estabilidad a columnas satinadas medianas y anchas.",
      "4. Malla / Cuadrícula (Tatami / Mesh Underlay): retícula cruzada para grandes áreas de cobertura que bloquea el encogimiento del tejido."
    ],
    "beginnerExplanation": "La base de puntadas es como los cimientos de una casa: no se ven cuando la casa está terminada, pero sin ellos la estructura se cae. En el bordado, si no pones puntadas de base antes del bordado principal, las puntadas bonitas se hundirán en la tela y el bordado quedará deformado y fruncido.",
    "practicalExamples": [
      "Aplicación de puntada de borde en textos pequeños para que las letras no se corten ni se pierdan en el piqué.",
      "Uso de doble zig-zag bajo letras satinadas de 10 mm para darles un relieve elevado y aspecto profesional.",
      "Fijación de polar o toalla con una base reticulada para que los bucles de la tela no asomen entre las puntadas."
    ],
    "matrixParametersRelation": [
      "Ancho de columna: columnas menores a 1,5 mm usan solo Center Run; de 2 a 5 mm usan Edge Run con Zig-zag; mayores a 5 mm usan doble Zig-zag.",
      "Margen de contorno (Margin / Inset): debe ajustarse entre 0,2 mm y 0,5 mm dentro del borde para que la base jamás asome fuera del diseño final.",
      "Tensión del hilo: una buena base absorbe el 70% de la tensión del hilo superior, permitiendo un acabado impecable en el frente."
    ],
    "commonErrors": [
      "Eliminar el underlay para reducir el número de puntadas en la cotización, dejando el bordado endeble y defectuoso.",
      "Colocar el margen de la base demasiado cerca del borde exterior, provocando que las puntadas de soporte asomen por los costados.",
      "Usar bases pesadas en telas livianas como seda o microfibra, generando fruncidos alrededor del motivo."
    ],
    "troubleshootingTips": [
      "Si se ven puntadas blancas o hilos de base sobresaliendo del satín, aumenta el margen interior (Inset) en el software a 0,4 mm.",
      "Si las letras se ven delgadas y transparentes, añade una base de zig-zag antes de aumentar la densidad del satín.",
      "Si la aguja corta la tela en los contornos, aligera la base y verifica que no esté demasiado cerca del borde."
    ],
    "whenToAdjust": "Aumenta la densidad y cobertura del underlay al bordar telas inestables, toallas o tejidos elásticos; disminúyelo en tejidos firmes como gabardina gruesa o cuerina.",
    "dicaArtrelados": "Consejo maestro de Artrelados: Si quieres bordar letras satinadas con apariencia de relieve 3D sin gastar en goma EVA, programa una base de doble zig-zag con paso cerrado antes del satín superior. La columna adquiere cuerpo, firmeza y un brillo sensacional que dura cientos de lavados.",
    "voceSabia": "¿Sabías que los softwares modernos de digitalización analizan automáticamente el tipo de tela que seleccionas y calculan la combinación matemática óptima de underlay? Sin embargo, el ojo y la experiencia de la bordadora siempre afinan ese parámetro para lograr la perfección.",
    "practicalExercise": "Crea una letra 'M' de 25 mm de alto en puntada satín. Haz una prueba en tela piqué: la primera versión sin ninguna base y la segunda con base de contorno (Edge Run) combinada con zig-zag. Compara la nitidez de los bordes y comprueba cómo la base transforma por completo la calidad.",
    "quickSummary": "Capa preliminar de puntadas estructurales no visibles que fijan la tela, dan volumen y garantizan la estabilidad dimensional del diseño.",
    "relatedTerms": [
      "Base de Puntada Tatami",
      "Puntada Satín",
      "Compensación de Encogimiento",
      "Densidad de Puntada"
    ]
  },
  "b-096-base-flutuante-em-entretela-hidrossoluvel": {
    "term": "Base Flotante en Estabilizador Hidrosoluble (Técnica de Montaje Flotante con Film Soluble)",
    "level": "Avanzado 🔴",
    "category": "Bastidores & Fijación",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del inglés water-soluble floating base technique. Desarrollada por talleres de alta costura y lencería personalizada para bordar telas ultradelicadas sin dejar marcas mecánicas del bastidor.",
    "definition": "Técnica de enbastorado profesional donde únicamente la entretela o film hidrosoluble se sujeta en el aro del bastidor, mientras que la tela principal (seda, gasa, terciopelo o toalla delicada) se apoya 'flotando' sobre la superficie, fijada mediante adhesivo temporal o hilván perimetral sin sufrir la presión de los aros.",
    "howItWorks": [
      "1. Se monta firmemente en el bastidor una lámina de entretela hidrosoluble (Solvy pesado o entretela de tela soluble en agua) bien templada como un tambor.",
      "2. Se aplica una capa muy suave de adhesivo temporal en aerosol o cinta bifaz para bordado sobre el estabilizador montado.",
      "3. Se posiciona la prenda o tejido delicado sobre el área de trabajo, alisando suavemente con las manos sin estirar.",
      "4. Se ejecuta una caja de hilván (Basting Box) en la máquina a baja velocidad para sellar la unión entre la prenda y el film soluble.",
      "5. Tras el bordado, el remanente de entretela se disuelve en agua tibia al 100%, dejando el revés y el derecho totalmente limpios y sin rigidez."
    ],
    "beginnerExplanation": "Cuando tienes una tela tan delicada como el terciopelo o una toalla gruesa que se estropearía si la aprietas dentro del bastidor, enbastoras únicamente el plástico soluble transparente. Luego apoyas la tela encima como si estuviera flotando y la sostienes con adhesivo suave o unas puntadas largas de hilván. Al terminar, la enjuagas con agua y el plástico desaparece mágicamente.",
    "practicalExamples": [
      "Bordado de monogramas en toallas de terciopelo o batas de baño sin dejar marcas circulares de aplastamiento.",
      "Bordado de gasas, tules y encajes para vestidos de novia donde no puede quedar ningún residuo visible en el revés.",
      "Bordado de piezas pequeñas ya confeccionadas (como puños de camisas de seda o baberos finos) que no entran en aros estándar."
    ],
    "matrixParametersRelation": [
      "Velocidad de costura: reducir la máquina a 450 - 550 PPM para evitar que la tela flotante vibre o se desplace durante las aceleraciones.",
      "Caja de hilván perimetral: imprescindible programar un Basting Box con puntadas de 4 mm a 5 mm antes de comenzar el bordado real.",
      "Densidad de matriz: usar matrices livianas; densidades excesivas perforarán la entretela soluble antes de terminar el diseño."
    ],
    "commonErrors": [
      "Aplicar exceso de pegamento en aerosol, empastando la aguja de bordar y provocando cortes continuos de hilo.",
      "No colocar hilván perimetral, lo que permite que la tela se levante o se desplace con el movimiento rápido del pantógrafo.",
      "Usar agua fría para retirar la entretela soluble, lo que puede dejar una película pegajosa en las fibras en lugar de disolverla por completo."
    ],
    "troubleshootingTips": [
      "Si la aguja se pone pegajosa por el adhesivo, límpiala con una toallita con alcohol isopropílico y aplica una gota de aceite de silicona en la punta.",
      "Si la entretela soluble se rasga durante el bordado, coloca dos capas cruzadas en el bastidor o utiliza un gramaje superior (80 micrones).",
      "Si quedan restos gelatinosos al lavar, sumerge la pieza en agua tibia corriente durante 2 minutos y déjala secar sobre una toalla seca."
    ],
    "whenToAdjust": "Aplica esta técnica siempre que el tejido sea susceptible a marcas de bastidor (hoop burn), en telas con pelo elevado, prendas confeccionadas de difícil acceso o piezas de alta costura.",
    "dicaArtrelados": "El tip secreto de Artrelados: Si estás bordando toallas de microfibra o terciopelo con esta técnica, coloca una lámina de plástico soluble por debajo en el bastidor y OTRA lámina fina por encima (Topping). Así la tela queda atrapada en un 'sándwich soluble' que mantiene el pelo totalmente plano y logra puntadas hiperbrillantes y perfectas.",
    "voceSabia": "¿Sabías que la entretela hidrosoluble está hecha a base de alcohol polivinílico (PVA), un polímero biodegradable y no tóxico que se disuelve instantáneamente al contacto con agua a 20°C - 40°C sin contaminar el medio ambiente?",
    "practicalExercise": "Toma un retazo de toalla afelpada. Monta en tu bastidor únicamente entretela hidrosoluble de 80 micrones bien tirante. Rocía una pizca de adhesivo temporal y apoya la toalla encima. Ejecuta el hilván perimetral de tu máquina y borda un monograma sencillo. Lava con agua tibia y admira un revés y un frente 100% limpios sin marcas de aro.",
    "quickSummary": "Procedimiento de bordado donde solo la entretela soluble se ajusta en el aro y la tela reposa en la superficie, evitando marcas mecánicas y residuos plásticos.",
    "relatedTerms": [
      "Entretela Hidrosoluble",
      "Basting Box / Caja de Hilván Perimétrico",
      "Montaje en Bastidor / Enbastorado (Hooping)",
      "Marcas de Bastidor (Hoop Burn)"
    ]
  },
  "b-058-bastidor-de-bolso-e-grampos-de-fixacao-rapida": {
    "term": "Bastidor de Bolsillo y Abrazaderas de Fijación Rápida (Pocket Clamp Hoop & Fast Frames)",
    "level": "Intermedio 🟡",
    "category": "Bastidores & Fijación",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés pocket clamp hoop y fast frames. Desarrollado en la industria del bordado promocional estadounidense para personalizar bolsillos de camisas de trabajo sin descoser la prenda.",
    "definition": "Dispositivo especializado de fijación compuesto por brazos mecánicos de sujeción por presión o resortes de acción rápida que permiten inmovilizar bolsillos estrechos, solapas, mangas, calzados y áreas de difícil acceso donde los bastidores tradicionales de dos aros no pueden introducirse.",
    "howItWorks": [
      "1. La base metálica plana con ventana de bordado se inserta dentro de la cavidad interna del bolsillo o manga de la prenda.",
      "2. El brazo superior con abrazadera de resorte o accionamiento neumático/manual presiona la tela contra la placa inferior.",
      "3. Se utiliza generalmente entretela autoadhesiva o entretela con adhesivo en aerosol debajo de la abertura para evitar el desplazamiento.",
      "4. El área superior queda completamente despejada para que el pie prensatelas se mueva libremente sin chocar con botones o costuras de la camisa."
    ],
    "beginnerExplanation": "¿Alguna vez intentaste bordar el bolsillo de una camisa ya cosida? Es casi imposible con un bastidor redondo normal porque no cabe adentro. El bastidor de bolsillo es una lámina delgada de metal con una pinza fuerte: metes la lámina dentro del bolsillo, aprietas la pinza y listo, puedes bordar directo sobre el bolsillo sin tener que descoserlo ni dañar la prenda.",
    "practicalExamples": [
      "Personalización de bolsillos delanteros de camisas de vestir y chombas corporativas sin descoser el forro.",
      "Bordado de mochilas, bolsos deportivos, estuches y cartucheras donde el acceso interno es muy reducido.",
      "Bordado de zapatillas, botines y lengüetas de calzado utilizando abrazaderas angostas tipo clamp."
    ],
    "matrixParametersRelation": [
      "Área de bordado limitada: restringir el diseño al ancho útil de la ventana (habitualmente 80x80 mm o 100x100 mm).",
      "Centrado de matriz: calibrar con precisión milimétrica el punto de inicio en el panel de la máquina para que el pie prensatelas no golpee el marco metálico.",
      "Velocidad de costura: trabajar entre 500 y 650 PPM para absorber las vibraciones provocadas por el brazo en voladizo del dispositivo."
    ],
    "commonErrors": [
      "No realizar el recorrido previo (Trace) del diseño y romper la aguja al estrellarse contra los laterales de acero de la abrazadera.",
      "Bordar atravesando ambas capas del bolsillo, dejándolo clausurado e inservible.",
      "No usar suficiente entretela autoadhesiva, permitiendo que la tela se mueva dentro de la pinza por la vibración."
    ],
    "troubleshootingTips": [
      "Si la aguja golpea el marco, ajusta los límites en el software y mantén un margen de seguridad mínimo de 10 mm en todo el perímetro.",
      "Si la tela se desliza de la pinza, forra los bordes de la mordaza con cinta de enmascarar o goma antideslizante para aumentar el agarre.",
      "Para evitar coser el fondo del bolsillo, desliza un trozo de cartulina o plástico semirrígido dentro del bolsillo por debajo de la base."
    ],
    "whenToAdjust": "Imprescindible para bordar bolsillos armados, puños, calcetines, laterales de mochilas, botines y artículos promocionales prearmados.",
    "dicaArtrelados": "El tip de seguridad Artrelados: Cada vez que coloques un bastidor de bolsillo o abrazadera metálica, presiona SIEMPRE el botón de simulación de área (Trace o Traçado) manteniendo la vista fija en la aguja. Verifica con un dedo que el pie prensatelas pase holgadamente lejos del borde de acero. ¡Esa simple rutina salva cientos de agujas y costosos garfios!",
    "voceSabia": "¿Sabías que los sistemas de Fast Frames y abrazaderas intercambiables reducen el tiempo de preparación de prendas complejas en un 70% en comparación con descoser el bolsillo, bordarlo plano y volverlo a coser en máquina recta?",
    "practicalExercise": "Coloca una camisa con bolsillo en tu máquina utilizando una abrazadera de bolsillo y entretela adhesiva. Realiza el trazado del contorno (Trace) a baja velocidad observando la distancia de seguridad con el marco metálico. Borda un logotipo de 40 mm y comprueba que el bolsillo continúe abriéndose normalmente.",
    "quickSummary": "Dispositivo mecánico de mordazas y placas delgadas diseñado para sujetar bolsillos y prendas tubulares cerradas sin descoser las costuras originales.",
    "relatedTerms": [
      "Bastidor Tubular para Brazo Libre",
      "Montaje en Bastidor / Enbastorado (Hooping)",
      "Bastidor Magnético",
      "Trazado del Área (Trace)"
    ]
  },
  "b-075-bastidor-de-bone-cap-frame-sistema-270": {
    "term": "Bastidor de Gorras (Cap Frame / Sistema Tubular 270°)",
    "level": "Avanzado 🔴",
    "category": "Bastidores & Fijación",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés cap frame / 270-degree cap drive system. Creado por los fabricantes de máquinas bordadoras industriales multicabezal (Tajima, Barudan, Brother) para bordar gorras armadas de frente a laterales en una sola operación continua.",
    "definition": "Sistema cilíndrico rotativo de sujeción mecánica que se monta sobre el pantógrafo de máquinas de bordar industriales y semi-industriales con brazo libre. Permite sujetar una gorra armada mediante una banda de acero flexible y girarla hasta 270 grados, bordando la parte frontal y ambos laterales en un único ciclo continuo de costura.",
    "howItWorks": [
      "1. Estación de calzado (Cap Gauging Station): la gorra se monta sobre una horma fija de mesa, se introduce la entretela pesada (80 a 100 g/m²) y se sujeta la badana o sudadera interna hacia afuera.",
      "2. Banda flexible con fleje de acero: se envuelve alrededor de la base de la gorra, encajando los dientes en la costura de la visera y asegurándola con trabas de resorte.",
      "3. Montaje en el Driver rotativo: el conjunto se encastra en el anillo móvil montado sobre el brazo cilíndrico de la bordadora.",
      "4. Rotación sincronizada 270°: el pantógrafo convierte los movimientos lineales del eje Y en rotación angular, permitiendo bordar desde la sien izquierda hasta la sien derecha."
    ],
    "beginnerExplanation": "Una gorra no es plana como una remera; es redonda y tiene una visera dura que estorba. El sistema 270° es como una rueda metálica especial que se pone en la máquina: encajas la gorra curva en ella y la máquina va girando la gorra hacia los lados mientras borda. Así puedes bordar el logo en el frente y seguir bordando los costados sin tener que sacar la gorra del bastidor.",
    "practicalExamples": [
      "Bordado continuo de logotipos envolventes que abarcan el panel frontal y el lateral izquierdo de gorras snapback.",
      "Producción masiva de gorras para empresas y clubes deportivos en máquinas multicabezal.",
      "Bordado de gorras tácticas de 6 paneles estructuradas con entretela bucran pesada."
    ],
    "matrixParametersRelation": [
      "Digitalización de centro a laterales y de abajo hacia arriba: regla obligatoria en gorras para evitar que la tela se arrugue contra la visera.",
      "Rotación de matriz en 180°: la mayoría de los sistemas leen la gorra invertida respecto al pantógrafo estándar.",
      "Velocidad de máquina: limitar a 600 - 750 PPM para compensar el peso e inercia del sistema giratorio."
    ],
    "commonErrors": [
      "Bordar de arriba hacia abajo, acumulando tela sobrante en la unión con la visera y causando arrugas y roturas de aguja.",
      "No doblar ni fijar la banda antisudor (badana) hacia atrás, provocando que quede cosida a la parte frontal de la gorra.",
      "Usar entretela liviana de remera, lo que hace que la copa de la gorra pierda rigidez y se deformen las letras."
    ],
    "troubleshootingTips": [
      "Si la aguja choca contra la costura central gruesa delantera, utiliza agujas 80/12 o 90/14 de punta lanza reforzada (Titanio / SAN 1).",
      "Si el diseño se desalinea en los laterales, tensa con mayor fuerza la correa de fleje metálico en la estación de montaje.",
      "Si las puntadas quedan flojas en la corona, aumenta ligeramente la tensión del hilo superior y activa el prensatelas de gorras."
    ],
    "whenToAdjust": "Indispensable para bordar gorras ya confeccionadas, viseras de tenis y sombreros estructurados donde se requiere bordado frontal y lateral continuo.",
    "dicaArtrelados": "Regla de oro Artrelados para gorras: Al digitalizar o programar para el sistema 270°, planifica SIEMPRE el orden de bordado empezando por el centro inferior (cerca de la visera) hacia los costados y hacia arriba. Imagina que estás alisando un papel adhesivo con la mano: si pegas los extremos primero, en el centro te quedará una burbuja inevitable.",
    "voceSabia": "¿Sabías que los sistemas de gorras tradicionales solo permitían un ángulo plano de 120° (solo el frente), y que la introducción del sistema 270° en la década de 1990 revolucionó la moda urbana al permitir logotipos que nacen en el frente y terminan detrás de la oreja?",
    "practicalExercise": "Monta una gorra promocional en la estación de enbastorado 270° utilizando entretela para gorras de 80 g/m². Sujeta la sudadera con clips de papelería, ajusta la banda de acero asegurando que los dientes toquen la costura de la visera y coloca el conjunto en el driver. Realiza un trazado completo de 180 mm y verifica la perfecta tensión de la tela.",
    "quickSummary": "Mecanismo rotativo tubular para máquinas con brazo libre que permite bordar frentes y laterales de gorras armadas en un arco continuo de hasta 270 grados.",
    "relatedTerms": [
      "Bastidor para Gorras (Cap Frame & Driver)",
      "Brazo Libre / Cilíndrico",
      "Agujas Reforzadas SAN 1",
      "Entretela para Gorras"
    ]
  },
  "b-003-bastidor-de-bone": {
    "term": "Bastidor para Gorras (Cap Frame & Driver Tubular)",
    "level": "Intermedio 🟡",
    "category": "Bastidores & Fijación",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del término anglosajón cap frame / cap hoop. Accesorio indispensable en el equipamiento de máquinas bordadoras con brazo cilíndrico desde su introducción industrial.",
    "definition": "Conjunto electromecánico compuesto por un aro curvo de fijación textil y un soporte cilíndrico móvil (driver) que se acopla al pantógrafo para bordar la copa curvada de gorras, viseras y sombreros rígidos en máquinas de brazo libre.",
    "howItWorks": [
      "1. El aro de gorras abraza la curvatura anatómica del accesorio infantil o para adultos, manteniendo el panel frontal tenso y plano bajo la aguja.",
      "2. El aro se sujeta mediante pestillos de encaje rápido en el anillo móvil (driver) montado concéntricamente sobre el brazo libre de la máquina.",
      "3. Durante la costura, la máquina coordina el giro circular del driver con los desplazamientos axiales del pantógrafo.",
      "4. Permite un bordado rígido y estable de hasta 60 a 70 mm de altura vertical por 130 a 180 mm de ancho horizontal."
    ],
    "beginnerExplanation": "Es el accesorio cilíndrico que viene con tu máquina bordadora de brazo libre para poder bordar gorras. En vez de poner la tela en un bastidor plano como una remera, la gorra se encaja en este aro curvo que gira sobre el brazo metálico de la máquina, permitiendo que la aguja trabaje justo en la parte redonda de la gorra.",
    "practicalExamples": [
      "Bordado del logotipo de una empresa en el panel frontal de gorras tipo camionero (Trucker con red).",
      "Bordado de insignias náuticas o deportivas en gorros y viseras de golf.",
      "Bordado de iniciales en gorras infantiles escolares."
    ],
    "matrixParametersRelation": [
      "Altura máxima de diseño: nunca superar los 60 mm a 65 mm de alto para evitar que la aguja choque con la parte superior de la copa.",
      "Densidad de puntada: reducir la densidad entre un 5% y un 10% en comparación con telas planas para evitar acartonamiento.",
      "Longitud de puntada: puntadas mínimas de 1,5 mm; las puntadas más cortas cortan la tela gruesa de la costura central."
    ],
    "commonErrors": [
      "Colocar un diseño de 75 mm de alto que hace chocar el pie prensatelas contra la curva superior del bastidor.",
      "No alinear la costura delantera con el punto cero del bastidor, dejando el bordado torcido a la vista.",
      "Olvidar colocar entretela rígida, provocando que la tela de la gorra se hunda con cada puntada."
    ],
    "troubleshootingTips": [
      "Si el diseño queda torcido, utiliza la línea de guía marcada con láser o ranura central del bastidor para alinear la costura media delantera.",
      "Si la aguja rompe hilo constantemente en el medio, comprueba que la unión de paneles no tenga un remache o cinta de refuerzo plástica dura.",
      "Si la gorra se desliza, ajusta la tensión del tornillo de cierre del aro y coloca una tira de cinta de carrocero en la visera."
    ],
    "whenToAdjust": "Utilízalo cada vez que necesites bordar artículos con forma cilíndrica o semicilíndrica rígida montados en máquinas con brazo cilíndrico.",
    "dicaArtrelados": "El tip Artrelados para gorras perfectas: Antes de cerrar el seguro del bastidor de gorra, presiona suavemente con los pulgares hacia abajo la unión entre la visera y la copa. Ese pequeño gesto quita la holgura de la tela y asegura que la primera puntada de fijación quede exactamente al ras de la visera, luciendo como un bordado de fábrica internacional.",
    "voceSabia": "¿Sabías que las gorras bordadas representan más del 35% de todos los ingresos de bordado promocional a nivel mundial, siendo uno de los productos más rentables para un ateliê?",
    "practicalExercise": "Toma una gorra lisa, dobla la badana interior hacia afuera y móntala en el bastidor cilíndrico. Ajusta la traba inferior y encastra el conjunto en el driver de tu máquina. Haz un trazado visual comprobando que el prensatelas mantenga al menos 15 mm de distancia de la visera en todo el recorrido.",
    "quickSummary": "Accesorio curvo y soporte móvil acoplado al pantógrafo de máquinas tubulares para bordar con máxima precisión gorras y viseras rígidas.",
    "relatedTerms": [
      "Bastidor de Gorras (Cap Frame / Sistema Tubular 270°)",
      "Brazo Libre / Cilíndrico",
      "Estación de Montaje (Gauging Station)",
      "Prensatelas para Gorras"
    ]
  },
  "b-062-bastidor-de-bone-cap-frame-270": {
    "term": "Bastidor de Gorras y Soporte Tubular 270° (Cap Frame & Wide Angle Driver)",
    "level": "Avanzado 🔴",
    "category": "Bastidores & Fijación",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés wide angle cap driver and frame. Evolución técnica de los sistemas de gran angular de Tajima, SWF y Ricoma para alcanzar el campo completo de la sien de la gorra.",
    "definition": "Conjunto mecánico de alta gama compuesto por un soporte de tracción gran angular (Wide Angle Driver) montado sobre rulemanes de precisión y marcos semirrígidos de acero inoxidable que garantizan una rotación suave y sin holguras a través de los 270 grados de recorrido del panel textil.",
    "howItWorks": [
      "1. El aro metálico abraza la visera y se ancla con pasadores templados en el contorno inferior de la gorra.",
      "2. El driver de gran angular se monta firmemente con tornillos de bloqueo rápido en el carro del eje X/Y de la máquina.",
      "3. Un sistema de cables de acero o engranajes helicoidales transmite el movimiento del motor paso a paso con cero juego mecánico.",
      "4. Se pueden bordar áreas continuas de hasta 360 mm de longitud por 65 mm a 70 mm de altura con sincronismo absoluto."
    ],
    "beginnerExplanation": "Es la versión profesional y extra ancha del soporte de gorras para máquinas industriales. Su ventaja es que está construido con piezas de acero y rodamientos súper suaves que no tienen juego, permitiéndote bordar desde la oreja izquierda, pasando por todo el frente de la gorra, hasta llegar a la oreja derecha sin que el diseño se mueva ni un milímetro.",
    "practicalExamples": [
      "Bordados corporativos con el logo principal al frente y la dirección web de la empresa en el lateral izquierdo.",
      "Bordados de moda urbana con llamas o tribales que recorren toda la circunferencia frontal y lateral de la gorra.",
      "Bordados de equipos deportivos con el escudo en el centro y las banderas o patrocinadores en las sienes."
    ],
    "matrixParametersRelation": [
      "Compensación de curvatura: a medida que el bordado se acerca a las sienes laterales (más allá de los 90° desde el centro), debe aplicarse un factor de compensación de estiramiento del 15% adicional.",
      "Secuencia de color por cuadrante: agrupar los cambios de color para coser primero el panel frontal y luego desplazarse hacia las sienes para minimizar los viajes del carro.",
      "Tensión de hilo constante: el sistema exige hilos de poliéster 40 de alta tenacidad con cono lubricado."
    ],
    "commonErrors": [
      "Instalar el driver sin verificar la alineación de los rodamientos con el eje del brazo libre, desgastando prematuramente el mecanismo.",
      "No ajustar los clips de fijación lateral de la gorra, provocando 'ondas' o tela suelta en las puntas de las sienes.",
      "Bordar a máxima velocidad en las sienes laterales, causando roturas de aguja por el efecto centrífugo del aro pesado."
    ],
    "troubleshootingTips": [
      "Si el bordado se aplana en los laterales, incrementa la compensación de arrastre (Pull Compensation) a 0,35 mm en las letras de las sienes.",
      "Si se oye un chirrido metálico en los giros rápidos, lubrica la pista circular del driver con una gota de grasa blanca de litio o aceite mineral fino.",
      "Si la máquina pierde pasos al girar, reduce la velocidad a 600 PPM y verifica que no haya hilos enredados en los rodillos guía del driver."
    ],
    "whenToAdjust": "Utilízalo cuando el cliente solicite bordados envolventes panorámicos o personalizaciones simultáneas en el frente y en los costados de la gorra.",
    "dicaArtrelados": "El tip maestro Artrelados: Cuando bordes un logo que continúe hacia el lateral de la gorra, coloca siempre una pequeña tira de cinta de papel engomada o cinta de carrocero sosteniendo la tela de la sien contra la banda metálica lateral. Eso anula por completo la vibración lateral y hace que las letras pequeñas de tu página web queden tan legibles como impresas en papel.",
    "voceSabia": "¿Sabías que los primeros bastidores de gorras en la década de 1970 requerían desarmar la visera y descoser toda la costura interior para poder bordar en plano? La invención del Wide Angle Driver cambió para siempre la industria de la indumentaria deportiva.",
    "practicalExercise": "Configura en tu software una matriz continua de 200 mm de largo que tenga un texto frontal y dos iconos a los lados. Realiza la prueba con el bastidor de gran angular 270° sobre una gorra de gabardina gruesa y verifica cómo el texto se mantiene perfectamente horizontal a lo largo de toda la curvatura de la prenda.",
    "quickSummary": "Sistema de tracción gran angular para máquinas industriales que borda con absoluta precisión frentes y laterales completos de gorras en un arco ininterrumpido de 270 grados.",
    "relatedTerms": [
      "Bastidor de Gorras (Cap Frame / Sistema Tubular 270°)",
      "Wide Angle Driver",
      "Brazo Libre / Cilíndrico",
      "Compensación de Encogimiento"
    ]
  },
  "b-114-bastidor-de-bone-13x18-suporte-adaptador-presilha-aba-gabarito-agb": {
    "term": "Bastidor de Gorras 13x18 / Soporte Adaptador con Abrazadera de Visera (Plantilla AGB para Máquinas Monocabeza Planas)",
    "level": "Intermedio 🟡",
    "category": "Bastidores & Fijación",
    "grammarClass": "Locución nominal masculina",
    "origin": "Desarrollo técnico originado en talleres y tornerías de bordado para viabilizar el bordado de gorras cerradas en máquinas domésticas y semi-industriales de cama plana de una aguja (como las series Brother PE y Janome MC).",
    "definition": "Dispositivo mecánico adaptador que se acopla directamente sobre el marco del bastidor plano estándar de 13x18 cm. Consta de una placa base con ranuras de trabajo y tornillos mariposa que aprisionan la visera rígida hacia afuera y proyectan la copa frontal estirada sobre el estabilizador, posibilitando el bordado frontal de gorras en máquinas de mesa plana sin chocar el pie prensatelas.",
    "howItWorks": [
      "1. Se monta una lámina de entretela resinada o rasga-fácil pesada en el bastidor plano estándar de 13x18 cm.",
      "2. El soporte adaptador (en acrílico o MDF de ingeniería) se apoya sobre el bastidor y se alinea en el centro.",
      "3. La visera de la gorra se coloca apuntando hacia el operador y se aprisiona fuertemente mediante dos presillas con tuercas mariposa.",
      "4. La corona o copa frontal de la gorra se aplana hacia atrás sobre la entretela y se sujeta en sus bordes con cinta de carrocero.",
      "5. En el panel de la máquina, se gira la matriz obligatoriamente 180° para que el diseño coincida con la posición invertida de la gorra."
    ],
    "beginnerExplanation": "Quien tiene una máquina de bordar de una aguja sabe lo difícil que es bordar gorras porque no tienen el brazo tubular de las máquinas de fábrica. Este soporte es una solución ingeniosa: lo colocas sobre tu bastidor normal 13x18, metes la visera dura de la gorra en las mariposas y aprietas con la mano. El soporte mantiene la visera baja y la frente de la gorra queda estiradita y plana para bordar sin peligro de romper agujas.",
    "practicalExamples": [
      "Bordado de logotipos y nombres en gorras promocionales con máquinas Brother PE810L, PE910L o BP1430.",
      "Personalización de gorras trucker infantiles y juveniles en pequeños talleres y ateliês hogareños.",
      "Bordado de escudos en gorros de pescador (bucket hats) utilizando la placa plana de prensado."
    ],
    "matrixParametersRelation": [
      "Rotación obligatoria en 180°: la matriz debe rotarse para bordar desde la visera prensada hacia la corona superior.",
      "Área útil restringida: área real recomendada de 100x60 mm a 120x65 mm para no golpear las tuercas mariposa laterales.",
      "Velocidad de trabajo: ajustar la velocidad de la máquina a 400 - 500 PPM para no generar vibraciones excesivas en el pantógrafo plano."
    ],
    "commonErrors": [
      "Olvidar rotar la matriz en 180°, bordando el logotipo boca abajo en la frente de la gorra.",
      "No realizar el recorrido previo (Trace), haciendo que la aguja o el pie prensatelas choquen contra las tuercas mariposa metálicas.",
      "Dejar la copa frontal suelta sin fijar con cinta en los laterales, lo que genera arrugas y desalineación en las puntadas de contorno."
    ],
    "troubleshootingTips": [
      "Pasa siempre una tira de cinta de carrocero en la parte interna de la visera antes de apretar las mariposas para no marcar la tela del cliente.",
      "Si el prensatelas roza contra la visera, afloja levemente las mariposas y empuja la visera 3 mm más hacia afuera del área de costura.",
      "Usa aguja 90/14 de punta lanza reforzada para perforar limpiamente la tela dura de la gorra y la entretela pesada sin deflexión."
    ],
    "whenToAdjust": "La opción ideal para propietarios de máquinas domésticas y semi-industriales de cama plana que desean ingresar al lucrativo mercado de gorras sin invertir en una máquina industrial tubular.",
    "dicaArtrelados": "El 'Golpe Maestro Artrelados' para bordar gorras en máquina plana 13x18: Antes de apretar las mariposas, coloca un trozo de cinta de papel en la cara inferior de la visera para evitar marcas de presión. Y lo más importante: ejecuta SIEMPRE la función Trace en el visor de tu máquina con tu mano lista en el botón de paro. ¡Comprueba que la aguja pase al menos a un dedo de distancia de cualquier tornillo metálico!",
    "voceSabia": "¿Sabías que la invención de estos soportes de acrílico y corte láser en Brasil y Latinoamérica permitió que miles de pequeñas emprendedoras familiares atendieran pedidos de gorras para empresas y eventos locales con la misma calidad estética que grandes talleres industriales?",
    "practicalExercise": "Coloca entretela firme en tu bastidor 13x18 cm y monta el soporte adaptador de gorras. Toma una gorra vieja de prueba, sujeta la visera con las tuercas mariposa y fija los costados de la corona con cinta. En el visor de tu máquina rota un monograma 180° y realiza el trazado visual (Trace). Borda con aguja 90/14 a 450 PPM y comprueba la solidez del resultado.",
    "quickSummary": "Dispositivo adaptador plano para bastidores 13x18 cm que inmoviliza la visera y aplana la copa frontal, permitiendo bordar gorras en máquinas de 1 aguja.",
    "relatedTerms": [
      "Bastidor para Gorras (Cap Frame & Driver)",
      "Trazado del Área (Trace)",
      "Entretela para Gorras",
      "Agujas de Punta Lanza"
    ]
  },
  "b-001-bastidor-de-bordado": {
    "term": "Bastidor de Bordado (Aro / Marco de Tensión Textil)",
    "level": "Iniciante 🟢",
    "category": "Bastidores & Fijación",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del germánico basti (corteza o fibra vegetal trenzada) a través del latín vulgar bastum (soporte o armazón rígido). Pieza central presente desde los orígenes del bordado manual y mecanizado.",
    "definition": "Herramienta fundamental compuesta por dos aros o marcos concéntricos (uno interno y otro externo con tornillo de ajuste regulable) diseñados para atrapar y tensar uniformemente la tela junto con su estabilizador, fijándose rígidamente al carro del pantógrafo para guiar los movimientos del bordado.",
    "howItWorks": [
      "1. El aro interno se coloca por debajo de la tela y la entretela.",
      "2. El aro externo se posiciona encima y se presiona hacia abajo para calzar sobre el aro interno.",
      "3. El tornillo de apriete manual o micrométrico regula la presión periférica según el grosor del tejido.",
      "4. El soporte metálico o plástico del bastidor se encastra en el brazo de conexión del pantógrafo de la máquina.",
      "5. El pantógrafo mueve el bastidor entero en los ejes X e Y con precisión micrométrica al ritmo de las puntadas de la aguja."
    ],
    "beginnerExplanation": "Es el marco de plástico o metal que aprieta tu tela como si fuera la piel de un tambor para que quede bien estirada mientras la máquina borda. Viene con dos aros: uno que va por debajo y otro por encima que se ajusta con una rueda o tornillo. Sin un buen bastidor bien colocado, la tela se arrugaría con cada puntada y el bordado saldría completamente torcido.",
    "practicalExamples": [
      "Enbastorado de bastidor 10x10 cm para insignias de pecho en chombas escolares.",
      "Uso de bastidor 13x18 cm y 16x26 cm para nombres grandes en toallas y sábanas de ajuar infantil.",
      "Montaje en bastidor gigante 20x30 cm para espaldas de camperas de egresados o batas de satén."
    ],
    "matrixParametersRelation": [
      "Límite de campo físico: el software y la máquina detectan el tamaño del bastidor para impedir que la aguja golpee los bordes plásticos.",
      "Compensación de tracción: telas tensadas correctamente en el bastidor requieren menos compensación de encogimiento (Pull Compensation).",
      "Tensión del hilo: una tela floja en el bastidor absorbe mal la lazada inferior, provocando bucles e irregularidades."
    ],
    "commonErrors": [
      "Apretar el tornillo con pinzas o alicates hasta quebrar la lengüeta plástica del aro exterior.",
      "Estirar la tela tironeando de las puntas DESPUÉS de haber cerrado el bastidor, deformando la trama y provocando frunces al retirarla.",
      "Usar un bastidor gigante (ej. 20x30 cm) para bordar un logo minúsculo de 40 mm, aumentando las vibraciones innecesariamente."
    ],
    "troubleshootingTips": [
      "Si la tela queda con marcas circulares blancas o aplastadas (marcas de bastidor), humedece suavemente con vapor de plancha sin apoyar la base metálica.",
      "Si la tela se afloja durante el bordado, coloca tiras de entretela adhesiva o forra el aro interior con cinta de papel para evitar que resbale.",
      "Si el tornillo gira en falso, reemplaza la tuerca de inserción interna o el perno desgastado para recuperar la presión de sujeción."
    ],
    "whenToAdjust": "Regula la presión del tornillo en cada cambio de tela: más suelto para toallas y polar grueso; más ajustado para popelín, microfibra y camisas finas.",
    "dicaArtrelados": "El mandamiento de oro del ateliê Artrelados: ¡Nunca estires la tela tirando de sus bordes una vez que el aro exterior esté encajado! Si tironeas de la tela, estiras los hilos elásticos de la trama; cuando saques el bastidor al terminar, la tela volverá a su tamaño natural y tu bordado quedará totalmente arrugado. Coloca la tela plana y déjala tan templada como un tambor, pero sin forzar su elasticidad natural.",
    "voceSabia": "¿Sabías que los primeros bastidores de bordado de la historia se fabricaban con ramas flexibles de mimbre o bambú amarradas con tiras de cuero, y que el tornillo regulador de metal no se patentó hasta mediados del siglo XIX?",
    "practicalExercise": "Practica el enbastorado perfecto: afloja el tornillo, coloca entretela y un retazo de algodón sobre el aro interno. Presiona el aro externo con ambas palmas de la mano en movimiento parejo hacia abajo. Ajusta el tornillo solo con la fuerza de los dedos. Golpea la tela suavemente con la yema del dedo: debe sonar hueco y firme como un tamboril.",
    "quickSummary": "Marco rígido de dos aros concéntricos que tensa y estabiliza la tela conectándola al pantógrafo para garantizar puntadas nítidas y sin deformaciones.",
    "relatedTerms": [
      "Montaje en Bastidor / Enbastorado (Hooping)",
      "Marcas de Bastidor (Hoop Burn)",
      "Bastidor Magnético",
      "Bastidor Tubular para Brazo Libre"
    ]
  }
};

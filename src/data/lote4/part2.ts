import { Verbete } from "../../types";

export const LOTE4_PART2_ES: Record<string, Partial<Verbete>> = {
  "a-014-arremate-automatico": {
    "term": "Remate Automático de Entrada y Salida (Auto Tie-Off)",
    "level": "Fundamental 🟢",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del latín ad-rematare (concluir, sellar firmemente) y del griego automatos (que actúa por sí mismo). Función informática estandarizada en software de diseño y consolas de bordado industrial desde los años 1980.",
    "summary": "Secuencia paramétrica de micropuntadas de bloqueo que la máquina inserta al inicio y al final de cada objeto para asegurar el hilo e impedir el deshilachado.",
    "definition": "El remate automático (Automatic Tie-off & Tie-in Function) es una rutina mecatrónica programada en el software de matrices o en el panel de control de la máquina bordadora que inserta una serie de 3 a 5 micropuntadas de anclaje (de 0,4 a 0,8 mm) antes de iniciar una columna de satén o tatami (remate de entrada / tie-in) y justo antes de efectuar el corte de hilo de salto (remate de salida / tie-off). Esta costura de microbloqueo genera una traba mecánica indestructible entre el hilo superior y el hilo de la canilla sin engrosar la silueta visual del diseño.",
    "howItWorks": "1. Al comenzar un nuevo segmento, la aguja clava de 3 a 4 puntadas diminutas alineadas con el ángulo del relleno.\n2. Al finalizar el objeto, la aguja da dos puntadas en cruz o retroceso corto de 0,5 mm.\n3. La cuchilla móvil corta el hilo dejando una cola de seguridad de 3 mm sostenida por la traba.\n4. El pantógrafo salta velozmente al siguiente objeto sin que el bordado previo se desarme.",
    "beginnerExplanation": "El remate automático es como hacer un nudito invisible antes de empezar a coser y otro nudo justo antes de cortar el hilo. Si usted no le pone remate automático a las letras o figuras, cuando lave la prenda o corte los hilos de salto, las puntadas se desharán como un suéter deshilachado.",
    "practicalExamples": [
      "Letras pequeñas de uniformes escolares donde un nudo manual dejaría pelotitas feas.",
      "Cambios de color en parches corporativos lavados intensivamente en tintorerías industriales.",
      "Bordado continuo de monogramas en toallas y sábanas de hotelería."
    ],
    "matrixParametersRelation": "Debe ajustarse la longitud del remate a un máximo de 0,6 mm en letras pequeñas para que las micropuntadas no sobresalgan por fuera de los contornos finos de satén.",
    "commonErrors": [
      "❌ Desactivar los remates en el software para 'ahorrar puntadas', causando el desprendimiento del bordado tras el primer lavado.",
      "❌ Programar micropuntadas excesivamente cortas (menores a 0,3 mm) en tejidos delgados, cortando la tela.",
      "❌ Dejar remates circulares en el borde exterior visible de letras finas."
    ],
    "whenToAdjust": "Active el remate automático siempre; elija remate tipo 'estrella' o 'dos puntadas en línea' según el ancho de la columna de satén.",
    "dicaArtrelados": "Para textos pequeños (menores a 7 mm), configure el remate automático en modo 'A lo largo de la columna' (In-Line Tie-off). De esta forma las micropuntadas quedan camufladas dentro de la línea de costura sin asomar en los costados.",
    "curiosities": "¿Sabía que antes de los algoritmos automáticos de 1985, los ponchadores debían hacer clic tres veces con el ratón al inicio y al final de cada objeto para asegurar manualmente cada remate de aguja?",
    "practicalExercise": "En su software, digitalice tres letras de 10 mm: la primera sin remates, la segunda con remate automático estándar y la tercera con remate manual. Borde la muestra, corte las colas traseras al ras y tire de los hilos frontales para comprobar cómo la letra sin remate se deshace.",
    "quickSummary": "Puntadas diminutas de amarre al inicio y fin de cada tramo que bloquean el hilo evitando deshilachados con los lavados continuos.",
    "relatedTerms": [
      "Remate de Entrada y Salida",
      "Corte Automático de Hilo",
      "Puntada Satén",
      "Comando de Salto",
      "Pespunte de Fijación"
    ],
    "applications": [
      "Uniformes de trabajo y vestuario escolar",
      "Prendas deportivas de lycra y poliéster",
      "Toallas y ropa de cama hotelera"
    ],
    "technicalDetails": "Cantidad de micropuntadas: 3 a 5 puntadas. Longitud de paso de remate: 0,5 a 0,8 mm. Ángulo de penetración: paralelo a la línea central del vector.",
    "recommendedSettings": [
      {
        "parameter": "Tipo de Remate al Inicio (Tie-in)",
        "value": "2 micropuntadas en línea"
      },
      {
        "parameter": "Tipo de Remate al Corte (Tie-off)",
        "value": "3 puntadas en bloqueo alternado"
      },
      {
        "parameter": "Paso de Micropuntada",
        "value": "0,6 mm"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Bordes deshilachados en el primer lavado de prendas corporativas",
        "cause": "Remates automáticos desactivados en el archivo o longitud de remate menor a 0,3 mm",
        "solution": "Active la función global de remates automáticos con 3 a 4 puntadas de 0,6 mm en el software de ponchado"
      }
    ],
    "calculatorAd": "El remate correcto ahorra garantías y devoluciones de clientes insatisfechos. Calcule precios seguros y confiables con la Calculadora de Bordados Artrelados."
  },
  "a-049-arremate-de-entrada-e-arremate-de-saida": {
    "term": "Remate de Entrada (Tie-In) y Remate de Salida (Tie-Off)",
    "level": "Fundamental 🟢",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina compuesta",
    "origin": "Del latín ad-ramare (sujetar ramales de cuerda) y del inglés técnico de confección textil tie-in (nudo inicial de anclaje) y tie-off (bloqueo terminal previo a la guillotina).",
    "summary": "Dúo coordinado de secuencias de puntadas: una asegura el hilo tras el corte anterior y la otra amarra la fibra antes de la tijera mecánica.",
    "definition": "El remate de entrada y remate de salida (Tie-in & Tie-off Sequence) constituye el protocolo binario de seguridad del filamento en la digitalización profesional. El remate de entrada ejecuta de tres a cuatro penetraciones milimétricas concéntricas para entrelazar la lazada con la bobina antes de someter el hilo a la máxima velocidad del cabezal, previniendo que la hebra se desenebre de la aguja. El remate de salida fija el cabo final en la masa del tejido mediante un cambio de sentido angular cerrado de dos a tres puntadas, impidiendo que la cuchilla del cortahilos tire del bordado hacia el fondo de la placa de aguja.",
    "howItWorks": "1. Tras el salto del pantógrafo, la aguja desciende suavemente haciendo el nudo de entrada.\n2. La máquina borda la estructura y el relleno decorativo principal.\n3. Al llegar a la última puntada, el software ordena el remate de salida en zigzag microscópico.\n4. La guillotina inferior corta el hilo y el capturador lo retiene para el próximo inicio.",
    "beginnerExplanation": "Piense en el remate de entrada como en clavar una estaca firme en el suelo antes de levantar una carpa, y en el remate de salida como en atar bien la cuerda antes de irse. Si falla el de entrada, la máquina empieza a coser en el aire con la aguja vacía; si falla el de salida, el bordado se abre solo con el roce de la ropa.",
    "practicalExamples": [
      "Letras cursivas conectadas donde cada letra separada exige remates dobles.",
      "Estrellas y lunares aislados en ropa infantil con múltiples saltos de aguja.",
      "Líneas de pespunte decorativo en gorras armadas de béisbol."
    ],
    "matrixParametersRelation": "En bordados de alta densidad en satén fino, el remate de entrada debe ubicarse preferentemente debajo de la futura cama de puntadas para que quede 100% oculto.",
    "commonErrors": [
      "❌ Colocar el remate de entrada fuera del área del relleno, dejando un punto suelto visible.",
      "❌ Usar remates de salida con pasos superiores a 1 mm, creando bultos notorios al tacto en camisetas delgadas.",
      "❌ Cortar a mano con tijera el remate de entrada creyendo que es una hebra sucia."
    ],
    "whenToAdjust": "Ajuste el estilo de remate de entrada si nota que la máquina 'pierde el hilo' en la primera puntada tras un salto de color largo.",
    "dicaArtrelados": "Para objetos que nacen de un salto largo, programe un remate de entrada con 'desaceleración de arranque' (Slow Start) de tres puntadas en el panel de su máquina. La aguja formará el lazo con tranquilidad sin que el hilo se escape del ojo.",
    "curiosities": "¿Sabía que un bordado de 10.000 puntadas con 15 cambios de color y 20 saltos ejecuta más de 70 remates individuales entre entradas y salidas durante sus 12 minutos de costura?",
    "practicalExercise": "Digitalice 5 puntos redondos aislados de 5 mm de diámetro distanciados por 3 cm. Aplique remates de entrada y salida automáticos. Borde la hilera y examine con lupa la cara posterior: verá pequeños nudos perfectos y planos en cada punto.",
    "quickSummary": "Pareja indispensable de nudos mecánicos: el de entrada ancla el hilo al arrancar y el de salida lo bloquea antes del corte de guillotina.",
    "relatedTerms": [
      "Remate Automático",
      "Corte de Salto (Jump Trim)",
      "Lanzadera Rotativa",
      "Hebra de Salto",
      "Puntada de Bloqueo"
    ],
    "applications": [
      "Letras y tipografías pequeñas en uniformes",
      "Diseños calados y motivos con islas aisladas",
      "Bordados corporativos con múltiples logotipos en una prenda"
    ],
    "technicalDetails": "Geometría de remate de entrada: 3 puntadas de 0,5 mm en avance lineal. Geometría de remate de salida: 3 micropuntadas alternadas con inversión angular de 90°.",
    "recommendedSettings": [
      {
        "parameter": "Longitud de Remate Entrada",
        "value": "0,5 mm - 0,7 mm"
      },
      {
        "parameter": "Longitud de Remate Salida",
        "value": "0,5 mm"
      },
      {
        "parameter": "Cantidad de Puntadas de Traba",
        "value": "3 a 4 puntadas"
      }
    ],
    "troubleshooting": [
      {
        "problem": "La aguja arranca desenebrada tras cada corte de hilo",
        "cause": "Remate de entrada inexistente o cola de hilo retenida por la cuchilla demasiado corta",
        "solution": "Active remate de entrada con 3 puntadas y aumente la longitud de cola de inicio en el panel a 35 mm"
      }
    ],
    "calculatorAd": "Los cortes de hilo limpios y remates perfectos ahorran horas de despuntado manual a tijera. Cuantifique este ahorro con la Calculadora de Bordados Artrelados."
  },
  "a-005-arremate-de-ponto": {
    "term": "Remate de Puntada y Nudo de Bloqueo (Lock Stitch)",
    "level": "Fundamental 🟢",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del latín ad-ramare (trabar cabos) y del término técnico anglosajón lock stitch (puntada de traba mecánica), desarrollado en las primeras máquinas automáticas suizas y sajonas de bordado para evitar el desprendimiento por fricción.",
    "summary": "Concepto estructural de entrelazamiento forzado entre hilo de aguja y bobina que solidifica las terminaciones de cualquier hilera de bordado.",
    "definition": "El remate de puntada (Lock Stitch / Tie-in / Tie-off) es el concepto nuclear de seguridad textil que designa la fijación mecánica de los extremos de un haz de filamento en la estructura del tejido. Consiste en la inserción controlada de micropuntadas sucesivas en una distancia inferior al paso estándar del relleno (usualmente entre 0,4 y 0,8 mm), obligando al hilo superior a entrelazarse repetidamente con el hilo de la canilla en un mismo punto nodal. Esta trabazón física resiste las fuerzas de cizallamiento y rozamiento generadas por el uso cotidiano, lavados domésticos y ciclos de secado en máquina.",
    "howItWorks": "1. La máquina detiene el avance amplio del pantógrafo reduciendo el paso a una fracción de milímetro.\n2. La aguja baja alternativamente sobre el mismo eje o con ángulo cruzado de 45°.\n3. El lazo inferior atrapa repetidamente el filamento de la bobina creando un núcleo compacto de fricción.\n4. La costura queda sellada permanentemente contra tracciones mecánicas externas.",
    "beginnerExplanation": "Hacer un remate de puntada es el equivalente digital a cuando usted cose a mano con aguja e hilo y al terminar le da dos o tres puntaditas en el mismo lugar antes de cortar. Sin ese nudo, la costura no tiene agarre y se sale con solo jalar la punta.",
    "practicalExamples": [
      "Bordes externos de escudos bordados que se cortarán con calor para hacer parches.",
      "Finales de columnas de satén en cuellos de camisas sometidos a fricción constante.",
      "Costuras de refuerzo en esquinas de bolsillos de camperas de trabajo."
    ],
    "matrixParametersRelation": "La densidad de la matriz influye en el remate: en tatamis densos basta con 3 micropuntadas, mientras que en telas abiertas de punto piqué se recomiendan 4 puntadas en triángulo.",
    "commonErrors": [
      "❌ Dejar puntadas de remate de más de 1,2 mm que parecen un error o mancha en la orilla del diseño.",
      "❌ Clavar más de 6 puntadas de remate en un mismo punto exacto, perforando y agujereando la tela fina.",
      "❌ Confundir el remate de puntada con el pespunte de hilván preliminar."
    ],
    "whenToAdjust": "Ajuste el remate si al examinar el reverso de la tela observa que los extremos del hilo se deslizan hacia el frente con facilidad.",
    "dicaArtrelados": "Si borda prendas de seda o batista ultra liviana, configure los remates con micropaso en ángulo de 30° en lugar de 90°. La aguja no coincidirá en el mismo poro del tejido, protegiendo las fibras más frágiles.",
    "curiosities": "¿Sabía que en las antiguas máquinas de coser mecánicas el remate se lograba bajando una palanca manual de retroceso, mientras que hoy un microprocesador calcula su posición en microsegundos?",
    "practicalExercise": "Cosa en un retal dos líneas rectas de puntada continua: una con remate al final y otra sin él. Frote vigorosamente la tela con un cepillo de cerdas duras para ver cómo la línea con remate se mantiene intacta.",
    "quickSummary": "Fijación nodal de microagujas que traba el hilo superior con el de la bobina para que el bordado soporte fricción y lavados sin abrirse.",
    "relatedTerms": [
      "Remate Automático",
      "Puntada Satén",
      "Puntada Tatami",
      "Cuchilla Cortahilos",
      "Tensión de Bobina"
    ],
    "applications": [
      "Confección y personalización de uniformes",
      "Lencería fina y ropa infantil delicada",
      "Parches termoadhesivos cortados al ras"
    ],
    "technicalDetails": "Fuerza de retención estática del nudo: > 1,5 kgf con hilo de poliéster 40 wt. Configuración estándar: 3 puntadas de 0,6 mm en retroceso.",
    "recommendedSettings": [
      {
        "parameter": "Cantidad de Puntadas de Bloqueo",
        "value": "3 a 4 puntadas"
      },
      {
        "parameter": "Paso de Puntada",
        "value": "0,5 mm - 0,7 mm"
      },
      {
        "parameter": "Ubicación en el Objeto",
        "value": "Bajo la cobertura del relleno"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Pequeño agujero visible en la tela al inicio o fin del bordado",
        "cause": "Demasiadas penetraciones de remate acumuladas en una misma coordenada sin avance",
        "solution": "Reduzca los remates a 3 puntadas y asegúrese de que tengan un desplazamiento mínimo de 0,5 mm"
      }
    ],
    "calculatorAd": "Evite devoluciones por bordados deshechos dominando los remates de calidad. Cotice trabajos seguros con la Calculadora de Bordados Artrelados."
  },
  "a-020-arremate-manual-no-software": {
    "term": "Remate Manual de Puntadas en el Software (Manual Digitizing Lock)",
    "level": "Avanzado 🔴",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del latín ad-rematare (concluir de forma artesanal) y manualis (conducido a mano por el operario). Herencia directa de los ponchadores maestros que picaban cinta perforadora punto a punto.",
    "summary": "Digitalización punto a punto de las puntadas de bloqueo realizada por el diseñador para camuflar el nudo en zonas críticas o letras diminutas.",
    "definition": "El remate manual en el software (Manual Lock Stitch Digitizing) es una técnica refinada de ponchado artesanal donde el diseñador desactiva los automatismos estándar del programa e introduce individualmente, mediante clics vectoriales precisos de puntada manual, la secuencia de penetraciones de anclaje (tie-in y tie-off). Se emplea indispensablemente en tipografías en miniatura (letras de 3 a 5 mm), contornos caligráficos finos, bordados en seda o transparencias, donde los remates automáticos predeterminados suelen crear bultos visibles, nudos deformes o penetraciones fuera de los límites del vector.",
    "howItWorks": "1. El ponchador desmarca la casilla de remate automático en las propiedades del objeto seleccionado.\n2. Con la herramienta de puntada corrida manual (Manual Stitch), dibuja 3 micropuntadas de 0,5 mm en zigzag dentro del área que luego será tapada por el satén.\n3. Digitaliza la columna de satén decorativa pasando por encima del nudo inicial.\n4. Al llegar al final, traza 3 micropuntadas en retroceso escondidas exactamente en la línea central del cordón.",
    "beginnerExplanation": "Normalmente el programa de computadora pone los nudos automáticamente donde él cree conveniente. Pero en letras chiquititas como las de un bolsillo médico, ese nudo automático puede parecer un manchón feo. El remate manual consiste en dibujar nosotros mismos, punto por punto con el ratón, las tres puntaditas de nudo justo en el medio del cordón para que queden totalmente invisibles.",
    "practicalExamples": [
      "Letras minúsculas de 4 mm en batas médicas y tarjetas de presentación textiles.",
      "Monogramas delicados sobre pañuelos de bolsillo de seda o batista.",
      "Detalles microscópicos en escudos de armas y heráldica institucional."
    ],
    "matrixParametersRelation": "Exige planificar el orden de costura para que las micropuntadas manuales siempre queden sepultadas bajo capas posteriores de refuerzo o relleno de satén.",
    "commonErrors": [
      "❌ Diseñar el remate manual por fuera de la línea de contorno final, dejándolo al descubierto.",
      "❌ Colocar puntadas con paso menor a 0,3 mm que rompen el filamento del hilo durante la costura rápida.",
      "❌ Olvidar añadir el comando de corte (Trim) tras el remate manual de salida."
    ],
    "whenToAdjust": "Utilice remates manuales siempre que el ancho de la columna de satén sea inferior a 1,5 mm o en letras de altura inferior a 6 mm.",
    "dicaArtrelados": "Dibuje el remate manual en forma de pequeña 'Z' o 'T' acostada a lo largo del eje del cordón. Las puntadas se fundirán dentro del propio brillo del satén sin engrosar la silueta ni un ápice.",
    "curiosities": "¿Sabía que en los grandes concursos internacionales de ponchado, la presencia de remates automáticos no supervisados en tipografías pequeñas suele ser penalizada por los jueces técnicos?",
    "practicalExercise": "En su software, escriba la palabra 'PRO' a 5 mm de altura. En la primera versión use remates automáticos y en la segunda dibuje remates manuales en la línea central de cada trazo. Borde ambas y compare con lupa la pureza tipográfica de la versión manual.",
    "quickSummary": "Diseño artesanal punto por punto de las micropuntadas de anclaje para ocultarlas perfectamente en letras diminutas y contornos finos.",
    "relatedTerms": [
      "Remate Automático",
      "Puntada Manual",
      "Microbordado y Tipografía Pequeña",
      "Puntada Satén",
      "Orden de Costura"
    ],
    "applications": [
      "Bordado de nombres en etiquetas y solapas",
      "Lencería de alta gama y bordado nupcial",
      "Escudos militares con leyendas en miniatura"
    ],
    "technicalDetails": "Paso de micropuntada manual: 0,4 a 0,6 mm. Trazado: axial a la dirección dominante de la columna de satén. Tolerancia de desvío: 0,1 mm del eje central.",
    "recommendedSettings": [
      {
        "parameter": "Longitud de Cada Puntada Manual",
        "value": "0,5 mm exactos"
      },
      {
        "parameter": "Cantidad de Clics de Anclaje",
        "value": "3 a 4 clics en línea recta"
      },
      {
        "parameter": "Ubicación Relativa",
        "value": "Eje neutro central de la columna"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Nudo visible que deforma la terminación de una letra pequeña",
        "cause": "Remate automático aplicado en un extremo con poco espacio de cobertura",
        "solution": "Desactive el remate automático del objeto y dibuje manualmente 3 puntadas de 0,5 mm en el centro del trazo"
      }
    ],
    "calculatorAd": "El ponchado artesanal de alta precisión para letras pequeñas requiere destreza y tiempo de diseño. Califique su tarifa con la Calculadora de Bordados Artrelados."
  },
  "a-071-assentamento-de-ponto": {
    "term": "Asentamiento de Puntada y Estructura de Refuerzo (Underlay)",
    "level": "Intermedio 🟡",
    "category": "Programación y Digitalização de Matrices",
    "grammarClass": "Locución sustantiva masculina compuesta",
    "origin": "Del latín assidere (establecerse sólidamente sobre una base) y del término técnico textil anglosajón underlay foundation (capa base de sostén subyacente).",
    "summary": "Red invisible de puntadas preliminares que adhiere la tela a la entretela, aplasta las fibras superficiales y crea los cimientos del bordado.",
    "definition": "El asentamiento de puntada o refuerzo estructural (Underlay Foundation / Structural Pre-Stitching) comprende la trama preliminar de costura invisible que la máquina ejecuta antes del relleno decorativo visible. Su función ingenieril es triple: inmoviliza y ancla el tejido a la entretela eliminando el deslizamiento por tracción; aplasta la textura, pelos o irregularidades del tejido de base; y proporciona una cama elevada o esqueleto interno que otorga relieve tridimensional y estabilidad dimensional al bordado definitivo, impidiendo que los hilos superiores se hundan en el paño.",
    "howItWorks": "1. La máquina borda primero un contorno simple, zigzag abierto o cuadrícula tatami espaciada sobre la entretela.\n2. La tela queda unida en bloque a la entretela sin poder estirarse.\n3. Las puntadas decorativas posteriores de satén o tatami caen perpendicularmente sobre este esqueleto.\n4. El bordado adquiere brillo, nitidez y firmeza sin arrugar la prenda circundante.",
    "beginnerExplanation": "Piense en el asentamiento de puntadas como en los cimientos y vigas de hierro de una casa. Antes de poner las paredes bonitas (el relleno que se ve), la máquina teje una red oculta por debajo que pega la tela a la entretela y la deja bien firme. Si usted no le pone asentamiento, la tela se encoge, el bordado queda fláccido y las puntadas se hunden como si cayeran en arenas movedizas.",
    "practicalExamples": [
      "Refuerzo en zigzag abierto (Zigzag Underlay) debajo de cordones de satén en gorras.",
      "Cuadrícula doble tipo tatami espaciada (Tatami Grid) bajo escudos grandes en camperas.",
      "Línea de contorno interior (Edge Run) bajo letras para que los bordes queden afilados como una navaja."
    ],
    "matrixParametersRelation": "El ángulo del asentamiento debe ser oblicuo o perpendicular al ángulo del relleno superior (por ejemplo, refuerzo a 45° y relleno a 135°) para evitar que las puntadas caigan en la misma hendidura.",
    "commonErrors": [
      "❌ Omitir el asentamiento para 'terminar más rápido', provocando que el bordado arrugue la tela como un acordeón.",
      "❌ Poner refuerzos con densidad excesiva que transforman el bordado en una placa de cartón duro.",
      "❌ Colocar la línea de refuerzo de borde (Edge Run) demasiado cerca de la orilla, asomando por fuera del satén."
    ],
    "whenToAdjust": "Incremente la densidad de refuerzo en tejidos elásticos o porosos como piqué y friza; reduzca en sedas o popelinas livianas.",
    "dicaArtrelados": "Para letras en satén de 5 a 10 mm, use siempre combinación doble: un pespunte central (Center Run) más un zigzag liviano (Zigzag Underlay). El resultado tendrá un relieve hermoso y los bordes jamás se deformarán.",
    "curiosities": "¿Sabía que un bordado profesional de alta calidad contiene entre un 15% y un 30% de puntadas invisibles de asentamiento que nunca se aprecian a simple vista pero garantizan su durabilidad por diez años?",
    "practicalExercise": "Borde dos cuadrados iguales de 4x4 cm sobre tela piqué: uno sin ningún refuerzo y el otro con refuerzo de doble cuadrícula (Double Tatami). Toque ambos y observe cómo el cuadrado sin refuerzo quedó deformado y arrugado mientras el segundo luce terso y perfecto.",
    "quickSummary": "Cimientos invisibles de puntadas que unen tela y estabilizador, dan volumen y garantizan bordados lisos sin arrugas.",
    "relatedTerms": [
      "Pespunte Central (Center Run)",
      "Pespunte de Borde (Edge Run)",
      "Refuerzo Tatami (Tatami Underlay)",
      "Compensación de Tracción",
      "Densidad de Puntada"
    ],
    "applications": [
      "Polos de piqué de golf y camisas de punto",
      "Gorras de béisbol y mochilas rígidas",
      "Toallas, polares y camperas con felpa"
    ],
    "technicalDetails": "Densidad típica de refuerzo zigzag: 1,5 a 3,0 mm de separación. Margen de distancia del borde (Margin/Inset): 0,3 a 0,5 mm hacia adentro del contorno exterior.",
    "recommendedSettings": [
      {
        "parameter": "Refuerzo para Satén Angosto (2-4 mm)",
        "value": "Center Run (Pespunte central)"
      },
      {
        "parameter": "Refuerzo para Satén Ancho (4-8 mm)",
        "value": "Edge Run + Zigzag abierto"
      },
      {
        "parameter": "Refuerzo para Tatami Grande",
        "value": "Tatami Underlay a 90° con densidad 1,8 mm"
      },
      {
        "parameter": "Margen de Borde (Inset)",
        "value": "0,40 mm"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Bordes desparejos con aspecto de serrucho en telas de piqué",
        "cause": "Falta de línea de refuerzo de borde (Edge Run) para contener las columnas de satén",
        "solution": "Añada refuerzo perimetral con margen de 0,4 mm en las propiedades de objeto del software"
      }
    ],
    "calculatorAd": "El cálculo correcto de puntadas de asentamiento optimiza el balance entre calidad y consumo de hilo. Programe su producción con la Calculadora de Bordados Artrelados."
  },
  "a-058-atalho-de-teclado-no-software": {
    "term": "Atajos de Teclado en el Software de Digitalización (Shortcuts)",
    "level": "Intermedio 🟡",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina compuesta",
    "origin": "Del latín ad-taliare (tomar un atajo o abreviar un camino) y del inglés keyboard shortcut (secuencia abreviada de comandos de teclado de ordenador). Introducido en las estaciones CAD textiles desde 1982.",
    "summary": "Combinaciones rápidas de teclas que agilizan el ponchado vectorial, permitiendo alternar herramientas, cambiar vistas y editar curvas sin tocar el ratón.",
    "definition": "Los atajos de teclado en el software de bordado (Keyboard Shortcuts in Digitizing Software) son combinaciones alfanuméricas predeterminadas y configurables que activan funciones algorítmicas, herramientas de dibujo vectorial y vistas de renderizado sin recurrir a la barra de menús desplegables del puntero del ratón. El dominio de estas combinaciones (como alternar entre clics curvos y rectos, zoom instantáneo, división de objetos, visualización 3D TrueView y regeneración de puntadas) duplica o triplica la velocidad de digitalización y reduce la fatiga muscular del ponchador.",
    "howItWorks": "1. La mano izquierda del digitalizador descansa sobre las teclas guías del teclado mientras la derecha maneja el ratón o lápiz óptico.\n2. Con toques de una sola tecla (ej. 'T' para vista real, 'H' para editar nodos, 'D' para ocultar imagen) se cambia el entorno al instante.\n3. La tecla barra espaciadora o clic derecho alterna entre vértices curvos suaves y esquinas vivas en pleno trazo.",
    "beginnerExplanation": "Son pequeños trucos del teclado que le ahorran horas de trabajo. En vez de estar buscando con el ratón por toda la pantalla dónde está la lupa, la tijera o el botón de guardar, usted aprieta una sola letra en el teclado y el programa hace la magia al instante. Con solo aprenderse cinco atajos básicos, usted terminará sus matrices en la mitad del tiempo.",
    "practicalExamples": [
      "Uso de 'Ctrl + S' constante para respaldar el archivo maestro ante cortes de luz.",
      "Presionar 'T' en Wilcom para alternar entre vista de puntadas técnicas y simulación 3D TrueView.",
      "Uso de la tecla 'H' (Reshape) para acomodar nodos y direcciones de puntada al vuelo."
    ],
    "matrixParametersRelation": "No alteran directamente las puntadas en máquina, pero aceleran exponencialmente la creación de compensaciones de tracción y refuerzos sin errores visuales.",
    "commonErrors": [
      "❌ Trabajar utilizando exclusivamente clics de ratón en los menús superiores, demorando el triple en cada diseño.",
      "❌ Pulsar combinaciones de teclas con el cursor fuera del área de trabajo activa, ejecutando comandos inesperados.",
      "❌ No personalizar los atajos más frecuentes acordes a la ergonomía de su propia mano izquierda."
    ],
    "whenToAdjust": "Memorice y use atajos desde el primer día; cree una plantilla de consulta rápida plastificada al lado de su monitor de diseño.",
    "dicaArtrelados": "Aprenda la alternancia clave de su software para marcar nodos: en la mayoría de programas líderes, el clic izquierdo crea esquinas en ángulo recto y el clic derecho crea curvas elípticas suaves. Dominar este ritmo de dedos transforma el ponchado en un juego de niños.",
    "curiosities": "¿Sabía que un digitalizador profesional que utiliza con maestría los atajos de teclado ahorra más de 20.000 movimientos de ratón y cerca de dos horas de trabajo en una sola jornada laboral?",
    "practicalExercise": "Digitalice una flor de 5 pétalos usando exclusivamente el ratón para seleccionar herramientas. Luego, repita la misma flor usando los atajos de teclado de su programa (dibujo, nodos, rotar y guardar). Compare el cronómetro: ¡se sorprenderá de la diferencia!",
    "quickSummary": "Pulsaciones rápidas de teclas que ejecutan comandos al instante, acelerando el ponchado y reduciendo el esfuerzo de la mano.",
    "relatedTerms": [
      "Digitalización de Matrices",
      "Software de Bordado",
      "Simulación 3D (TrueView)",
      "Edición de Nodos (Reshape)",
      "Ergonomía de Taller"
    ],
    "applications": [
      "Estaciones de ponchado y digitalización profesional",
      "Edición rápida de textos y monogramas en tiendas",
      "Adaptación de matrices descargadas en mostradores"
    ],
    "technicalDetails": "Estándares comunes: Tecla Espacio/Intro = finalizar objeto; Shift = alternar restricción ortogonal; Ctrl+Z = deshacer último nodo; G = agrupar objetos vectoriales.",
    "recommendedSettings": [
      {
        "parameter": "Postura Recomendada",
        "value": "Mano izquierda en teclado (teclas ASDF), mano derecha en ratón"
      },
      {
        "parameter": "Atajos Vitales",
        "value": "Guardar (Ctrl+S), Deshacer (Ctrl+Z), Nodos (H), Vista 3D (T)"
      },
      {
        "parameter": "Respaldo Automático de Software",
        "value": "Cada 5 a 10 minutos activado"
      }
    ],
    "troubleshooting": [
      {
        "problem": "El software de diseño responde con pitidos o no activa la herramienta al pulsar la tecla",
        "cause": "Bloqueo de mayúsculas (Caps Lock) activado o foco del ratón retenido en una ventana flotante de valores",
        "solution": "Desactive mayúsculas, presione la tecla Esc para liberar la ventana y vuelva a pulsar el atajo deseado"
      }
    ],
    "calculatorAd": "Ahorrar tiempo en la digitalización significa poder cotizar y entregar más pedidos en el mismo día. Multiplique su rendimiento con la Calculadora de Bordados Artrelados."
  },
  "a-atoalhado-tecidos-felpudos-toalhas": {
    "term": "Bordado en Tejidos de Toalla y Materiales de Felpa (Terrycloth)",
    "level": "Iniciante 🟢 a Intermedio 🟡",
    "category": "Tejidos y Estabilización",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del latín toacula (paño de lino o algodón para secar) y del francés tiré / bouclé (rizos buclés de algodón absorbente). Técnica perfeccionada en la década de 1980 con la invención de los filmes hidrosolubles (Solvy).",
    "summary": "Metodología integral de estabilización y ponchado para toallas y albornoces de rizo alto, impidiendo que las puntadas se hundan en los bucles de algodón.",
    "definition": "El bordado en tejidos toalla y géneros afelpados (Terrycloth & Towel Embroidery) comprende el compendio técnico de estabilización, parámetros de digitalización y manipulación en bastidor para materiales con estructura de rizo o bucles salientes de algodón (toallas de baño, batas, felpas y terciopelos). Su éxito radica en el principio del sándwich técnico: entretela rasgable o recortable tupida por debajo para dar estabilidad estructural y film plástico hidrosoluble (película de polivinilo transparente) por encima, cuya función es comprimir los rizos de felpa evitando que asomen entre las columnas de puntada y devoren el brillo del hilo.",
    "howItWorks": "1. Se enbastidore la toalla con entretela rasgable de 60 a 80 g/m² en la base inferior.\n2. Se coloca una lámina de film plástico hidrosoluble sobre la felpa superior.\n3. Se activa un hilván perimetral liviano para fijar el plástico sin dejar marcas.\n4. La máquina borda con densidad aumentada (0,38 mm) y refuerzo doble.\n5. Al finalizar, se rasga el plástico seco sobrante y los restos microscópicos se disuelven con vapor o enjuague.",
    "beginnerExplanation": "Bordar una toalla sin preparación previa es como escribir con tiza sobre un césped alto: las puntadas se caen entre los pelitos de la toalla y no se lee nada. El secreto infalible de todo taller profesional consiste en poner una lámina de plástico transparente soluble en agua (plástico mágico hidrosoluble) arriba de la toalla antes de coser. El plástico aplasta los pelos, el bordado queda gordito y brillante arriba, y al final usted moja la toalla y el plástico desaparece como por encanto.",
    "practicalExamples": [
      "Juegos de toallas de baño de lujo personalizadas con monogramas en satén ancho.",
      "Bordado de nombres en toallas infantiles con motivos de aplique de tela estampada.",
      "Batas y salidas de baño de felpa gruesa para spas y hoteles de 5 estrellas."
    ],
    "matrixParametersRelation": "Exige reforzar las puntadas con compensación de tracción mínima de 0,45 mm y programar refuerzo de enrejado tatami previo que aplaste los bucles antes del satén final.",
    "commonErrors": [
      "❌ Bordar directamente sobre la felpa sin colocar plástico soluble superior, tragándose el bordado.",
      "❌ Usar puntadas excesivamente angostas (menores a 1,8 mm), que desaparecen entre los rizos.",
      "❌ Dejar el tornillo del bastidor demasiado apretado, provocando 'quemaduras' o aplastamiento irreversible de la felpa toallera.",
      "❌ Usar agua fría hirviendo para quitar el plástico, dejando residuos gomosos adheridos."
    ],
    "whenToAdjust": "Coloque siempre plástico hidrosoluble superior en toallas, polares, corderito y terciopelo; use doble capa si el rizo de algodón es excepcionalmente largo.",
    "dicaArtrelados": "Para quitar el film soluble sobrante sin tener que lavar y secar toda la toalla completa, arranque el sobrante con la mano seca y aplique vapor suave con la plancha a 2 cm de distancia o use una toallita húmeda dando pequeños toques. El plástico se desvanecerá al instante.",
    "curiosities": "¿Sabía que el tejido toallero moderno fue introducido en Europa tras la Exposición Universal de Londres de 1851 por fabricantes que copiaron los telares tradicionales de toallas turcas de la corte otomana?",
    "practicalExercise": "Tome una toalla vieja: borde una letra 'B' de 4 cm en la felpa derecha sin plástico y otra idéntica en la felpa izquierda colocando una lámina de hidrosoluble arriba. Compare visualmente: la diferencia de relieve, brillo y definición le demostrará la regla de oro de la felpa.",
    "quickSummary": "Técnica del sándwich con film hidrosoluble superior que aplasta los bucles de la toalla, garantizando bordados en relieve sin pelos asomados.",
    "relatedTerms": [
      "Film Hidrosoluble (Solvy)",
      "Entretela Rasgable",
      "Puntada Satén",
      "Compensación de Tracción",
      "Marcas de Bastidor"
    ],
    "applications": [
      "Toallas de mano, rostro y baño personalizadas",
      "Batas de baño, salidas de piscina y albornoces de spa",
      "Mantas polares y almohadones de peluche o terciopelo"
    ],
    "technicalDetails": "Estabilizador superior: film de alcohol polivinílico (PVA) de 20 a 35 micrones. Aguja: 75/11 o 80/12 punta de bola pequeña (SES/Ball Point) para deslizarse entre bucles.",
    "recommendedSettings": [
      {
        "parameter": "Plástico Hidrosoluble Superior",
        "value": "PVA 25 micrones obligatorio"
      },
      {
        "parameter": "Densidad de Satén",
        "value": "0,36 mm - 0,38 mm (tupida)"
      },
      {
        "parameter": "Compensación de Tracción",
        "value": "0,45 mm - 0,55 mm"
      },
      {
        "parameter": "Ancho Mínimo de Columna",
        "value": "2,0 mm"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Pelos o rulos de la toalla asoman entre medio de las puntadas de las letras",
        "cause": "Densidad de puntada insuficiente o ausencia de lámina hidrosoluble superior",
        "solution": "Coloque film soluble arriba y aumente la densidad de la matriz en un 15% con refuerzo de doble enrejado"
      }
    ],
    "calculatorAd": "El consumo de película soluble y entretelas especiales para toallas debe incluirse en el costo de materiales. Calcule presupuestos exactos con la Calculadora de Bordados Artrelados."
  },
  "a-046-auto-espacamento-de-pontos": {
    "term": "Auto-Espaciado y Compensación de Densidad (Auto-Spacing)",
    "level": "Avanzado 🔴",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del griego autos (por sí mismo) y del latín spatium (distancia entre elementos). Término informático acuñado en la década de 1980 por los pioneros de software CAD de bordado (Wilcom y Pulse).",
    "summary": "Algoritmo inteligente que recalcula y abre automáticamente las puntadas en curvas pronunciadas para impedir el amontonamiento de hilo en el radio interno.",
    "definition": "El auto-espaciado de puntos (Auto-Spacing / Density Curve Compensation) es una función algorítmica matemática integrada en los motores de generación de puntadas vectoriales. Al bordar columnas de satén que describen arcos o curvas sinuosas, el radio interior es geométricamente mucho más corto que el radio exterior. Sin auto-espaciado, las penetraciones de aguja en el interior se amontonarían en el mismo milímetro provocando cortes de hilo y orificios en la tela. El algoritmo detecta el ángulo de curvatura y expande el espaciado interior escalonadamente, manteniendo una cobertura homogénea en toda la superficie.",
    "howItWorks": "1. El diseñador dibuja una columna curva de ancho variable con la herramienta de satén.\n2. El algoritmo analiza el diferencial de longitud entre la curva interior y la exterior.\n3. En el borde interno, el programa omite penetraciones alternadas o redistribuye el paso lineal.\n4. En el borde externo, mantiene la distancia nominal de densidad (ej. 0,40 mm).\n5. La columna resultante dobla suavemente sin bultos ni roturas de aguja.",
    "beginnerExplanation": "Imagínese una fila de soldados marchando en círculo: los de afuera tienen que dar pasos muy largos y los de adentro tienen que dar pasitos cortitos casi en el mismo lugar. En el bordado pasa lo mismo en las curvas: si la máquina cose igual adentro que afuera, adentro se amontonan tantas puntadas que la aguja rompe la tela. El auto-espaciado es el cerebro de la computadora que reparte las puntadas para que en la curva no haya amontonamientos.",
    "practicalExamples": [
      "Letras curvas de tipografías caligráficas con grandes bucles (como la 'S', la 'O' o la 'C').",
      "Tallos de flores y cintas ondeantes en motivos ornamentales.",
      "Líneas de contorno alrededor de mascotas y logotipos deportivos circulares."
    ],
    "matrixParametersRelation": "Trabaja en estrecha relación con el 'Fraccionamiento de Esquinas' y la 'Longitud Mínima de Puntada' para garantizar la fluidez mecánica del pantógrafo.",
    "commonErrors": [
      "❌ Desactivar el auto-espaciado en curvas cerradas, generando nidos de hilo en el borde interior.",
      "❌ Configurar un porcentaje de auto-espaciado excesivo (mayor al 70%), dejando huecos vacíos en curvas pronunciadas.",
      "❌ Combinar auto-espaciado agresivo con densidades ya de por sí muy abiertas."
    ],
    "whenToAdjust": "Active el auto-espaciado por defecto en todas sus columnas de satén complejas; ajuste el factor de curvatura si nota acumulación de grosor al tacto.",
    "dicaArtrelados": "Mantenga el parámetro de auto-espaciado en un valor estándar del 35% al 45% en su software de digitalización. Esto asegura una curva perfectamente tersa sin que se aprecie ninguna transparencia de tela en el giro.",
    "curiosities": "¿Sabía que este algoritmo resolvió a mediados de los años 80 uno de los mayores dolores de cabeza de los bordadores, reduciendo en más de un 60% las roturas de aguja en curvas de tipografías cursivas?",
    "practicalExercise": "Dibuje una letra 'S' mayúscula de 5 cm en satén: la primera con auto-espaciado desactivado y la segunda con auto-espaciado activado al 40%. Borde ambas y observe al trasluz cómo la primera tiene bultos duros en los codos interiores mientras la segunda es dócil y plana.",
    "quickSummary": "Algoritmo que modula el paso de aguja en las curvas para que el hilo no se amontone en el radio interno ni se abra en el externo.",
    "relatedTerms": [
      "Puntada Satén",
      "Densidad de Puntada",
      "Fraccionamiento de Esquinas",
      "Auto-Spaced Satin",
      "Compensación de Tracción"
    ],
    "applications": [
      "Digitalización de tipografías y fuentes de bordado",
      "Diseño de arabescos, volutas y ornamentación clásica",
      "Logotipos con ribetes circulares y óvalos"
    ],
    "technicalDetails": "Modulación matemática: relación proporcional entre Radio Interior (Ri) y Radio Exterior (Ro). Factor de corrección típico: 1 - (Ri / Ro) aplicado al paso nominal de densidad.",
    "recommendedSettings": [
      {
        "parameter": "Factor de Auto-Espaciado",
        "value": "35% - 40%"
      },
      {
        "parameter": "Densidad Nominal Exterior",
        "value": "0,40 mm"
      },
      {
        "parameter": "Paso Mínimo en Radio Interior",
        "value": "0,32 mm"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Rotura constante de hilo o aguja justo en las curvas más cerradas de una letra",
        "cause": "Auto-espaciado desactivado, causando superposición de más de 8 puntadas por milímetro",
        "solution": "Active la compensación de curvas / auto-espaciado al 40% en las propiedades del software de diseño"
      }
    ],
    "calculatorAd": "Las matrices técnicamente pulidas con auto-espaciado no rompen agujas ni paran máquinas. Calcule su costo operativo real con la Calculadora de Bordados Artrelados."
  },
  "a-065-auto-spaced-satin-espacamento-automatico": {
    "term": "Satén con Espaciado Automático en Curvas (Auto-Spaced Satin)",
    "level": "Avanzado 🔴",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del inglés auto-spaced (espaciado automáticamente) y satin (punto lleno lustroso). Algoritmo desarrollado específicamente para software de élite como Wilcom ES, Tajima DG/ML y Hatch.",
    "summary": "Función especializada de control de columnas de satén que mantiene la densidad visual equilibrada en radios divergentes mediante escalonamiento de puntadas cortas.",
    "definition": "El Auto-Spaced Satin (o Satén con Espaciado Automático en Curvas de Alta Precisión) es el protocolo avanzado de renderizado vectorial de columnas de satén que previene la sobreconcentración de masa textil en los bordes internos cóncavos y la apertura de huecos en los bordes convexos. Mediante la inserción de puntadas fraccionadas alternadas (parting / stitch shortening), el algoritmo escalona los puntos de caída de la aguja hacia adentro del cordón, distribuyendo la densidad de forma progresiva. El resultado es un satén con brillo uniforme continuo sin efecto abanico ni perforación excesiva del paño.",
    "howItWorks": "1. En giros cerrados, el software calcula la diferencia de velocidad tangencial de los extremos del vector.\n2. Una de cada dos o tres puntadas se detiene a mitad de camino del cordón en lugar de llegar al borde interior.\n3. La siguiente puntada realiza el recorrido completo de lado a lado.\n4. La aguja nunca penetra dos veces en el mismo punto del radio cerrado, protegiendo la fibra del tejido.",
    "beginnerExplanation": "Cuando una columna de satén brillante gira bruscamente, las puntadas tienden a abrirse como un abanico por fuera y a encimarse como una piedra por dentro. El satén con espaciado automático soluciona esto haciendo que algunas puntadas queden más cortitas en el medio del camino; de esa manera, el cordón se ve siempre tupido, brillante y parejo en cualquier curva sin hacerse duro al tacto.",
    "practicalExamples": [
      "Letras góticas y cursivas inglesas con curvas cerradas de gran ancho de cordón.",
      "Cinturones y cintas de banderas con curvas onduladas en escudos oficiales.",
      "Pétalos de flores estilizadas con bordes de satén de espesor variable."
    ],
    "matrixParametersRelation": "Se complementa con la 'Acortación de Puntada' (Stitch Shortening), la cual actúa en conjunto para mantener la línea exterior del cordón perfectamente nítida.",
    "commonErrors": [
      "❌ Utilizar columnas de satén muy anchas (mayores a 8 mm) en curvas cerradas sin activar división automática de puntadas.",
      "❌ Desactivar la opción de escalonamiento alternado, creando una línea visible de partición en el centro del satén.",
      "❌ Subir la densidad nominal para compensar la apertura exterior, agravando el amontonamiento interno."
    ],
    "whenToAdjust": "Active esta función en todo objeto de satén cuyo radio interior sea menor que el ancho propio de la columna.",
    "dicaArtrelados": "Verifique en la vista previa 3D de su software que el satén en las curvas no muestre 'líneas oscuras' de sombra. La presencia de sombras revela que las puntadas se están amontonando y necesitan mayor espaciado automático.",
    "curiosities": "¿Sabía que en la alta costura tradicional el satén manual en curvas se lograba con la técnica de aguja llamada 'punto de pluma', donde las puntadas se entrecruzan en espiga para doblar esquinas sin bultos?",
    "practicalExercise": "Digitalice un arco de círculo cerrado de 180 grados con satén de 5 mm de ancho: primero con satén rígido estándar y luego con Auto-Spaced Satin. Borde ambas muestras y pase el dedo: sentirá la absoluta suavidad y ausencia de nudos de la versión adaptada.",
    "quickSummary": "Algoritmo para columnas de satén que intercala puntadas intermedias en las curvas, evitando amontonamientos y abanicos abiertos.",
    "relatedTerms": [
      "Auto-Espaciado de Puntos",
      "Puntada Satén",
      "Acortamiento de Puntadas",
      "Compensación de Tracción",
      "Densidad de Puntada"
    ],
    "applications": [
      "Monogramas elegantes para mantelería y sábanas",
      "Bordes curvos de parches con terminación de cordón",
      "Insignias con lazos, cintas y arabescos"
    ],
    "technicalDetails": "Relación de acortamiento alternado: 1 puntada completa / 1 puntada al 60% del ancho. Rango de ancho eficaz: 2,5 mm a 7,5 mm.",
    "recommendedSettings": [
      {
        "parameter": "Estado del Algoritmo",
        "value": "Activado (Modo Auto / Variable)"
      },
      {
        "parameter": "Densidad Base de Satén",
        "value": "0,38 mm - 0,40 mm"
      },
      {
        "parameter": "Porcentaje de Acortamiento Alternado",
        "value": "30% - 50%"
      }
    ],
    "troubleshooting": [
      {
        "problem": "El bordado se siente duro y acartonado en las partes curvas de los nombres",
        "cause": "Acumulación excesiva de puntadas en el radio interno por falta de espaciado dinámico de satén",
        "solution": "Active la casilla de 'Auto-Spaced Satin' y acortamiento de puntadas en las propiedades del software"
      }
    ],
    "calculatorAd": "El diseño óptimo de columnas de satén disminuye los tiempos de bordado y el consumo de hilo superior. Cuantifique su ganancia neta en la Calculadora de Bordados Artrelados."
  },
  "a-030-auto-compensacao-de-canto-mitered-corner": {
    "term": "Autocompensación de Esquinas a Inglete (Auto-Cornering & Mitered)",
    "level": "Avanzado 🔴",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva femenina técnica",
    "origin": "Del latín mitra (bonete o remate en bisel angular) y del griego autos (automático). Principio clásico de ebanistería y sastrería de uniones a 45° adaptado a los algoritmos vectoriales de bordado.",
    "summary": "Tratamiento informático inteligente de esquinas pronunciadas que divide automáticamente el satén en corte a inglete o redondeado, eliminando bultos duros.",
    "definition": "La autocompensación de esquinas y esquinas a inglete (Auto-Cornering & Mitered Cornering Algorithm) es la propiedad algorítmica de los programas profesionales de digitalización que detecta automáticamente los giros angulares agudos u obtusos (entre 45° y 110°) en columnas de satén y contornos. En lugar de forzar a la aguja a girar en un punto fijo —lo que provocaría una masa abultada e intratable de puntadas en el vértice interior—, el software corta la columna en diagonal formando una unión a inglete (mitered corner) con solape milimétrico o aplica una transición en abanico compensado (caping corner), asegurando aristas afiladas, elegantes y planas.",
    "howItWorks": "1. El vector de satén detecta un cambio de dirección de 90 grados en una esquina de marco.\n2. El algoritmo traza una línea divisoria biselada a 45° en el vértice exterior e interior.\n3. Borda la primera rama rematando en bisel con puntadas entrelazadas.\n4. La segunda rama arranca en bisel solapando 0,4 mm sobre la anterior.\n5. La esquina terminada luce como el ángulo perfecto de un marco de pintura sin deformación.",
    "beginnerExplanation": "Cuando una cinta ancha o un marco bordado dobla en una esquina cuadrada, si no se hace nada especial, todas las puntadas se apilan en la esquina de adentro como un bulto feo y duro. La autocompensación de esquinas hace que la computadora corte la esquina en diagonal a 45 grados, igualito que cuando un carpintero junta dos maderas de un marco de fotos, logrando esquinas lisas, filosas y súper elegantes.",
    "practicalExamples": [
      "Bordes exteriores rectangulares de escudos y parches de seguridad.",
      "Marcos dorados en almohadones de estilo clásico o manteles de altar.",
      "Letras con esquinas rectas como la 'E', la 'H' o la 'F' de gran tamaño."
    ],
    "matrixParametersRelation": "Debe configurarse con un solapamiento interno de 0,35 a 0,45 mm para evitar que la tensión del hilo abra una rendija en la línea diagonal de unión.",
    "commonErrors": [
      "❌ Dejar la esquina sin compensación, convirtiendo el vértice en una zona dura que quiebra agujas.",
      "❌ Olvidar el solape en la línea de inglete, dejando una rendija visible de tela en el lavado.",
      "❌ Aplicar inglete en curvas suaves donde un giro continuo en abanico luciría más natural."
    ],
    "whenToAdjust": "Active la compensación a inglete en todos los giros mayores a 70 grados con columnas de satén de más de 3 mm de ancho.",
    "dicaArtrelados": "Para escudos y parches de uniforme, seleccione la opción 'Esquina a Inglete con Solape Escalado'. Este tipo de inglete cruza las puntadas como si fueran los dientes de una cremallera microscópica, creando una unión indestructible que jamás se abre con el roce.",
    "curiosities": "¿Sabía que la unión a inglete a 45° fue adoptada en el bordado industrial militar de los años 70 para garantizar que los bordes de los parches de combate mantuvieran su escuadra geométrica tras embarrarse y lavarse con agua hirviendo?",
    "practicalExercise": "Digitalice un marco cuadrado de 6x6 cm con satén de 4 mm: en dos esquinas use giro simple sin compensar y en las otras dos aplique esquina a inglete automática. Borde sobre paño lenci y compare con los dedos la diferencia de espesor y geometría en los vértices.",
    "quickSummary": "División automática de esquinas en diagonal a 45° que elimina amontonamientos de puntadas y otorga esquinas planas y definidas como marcos de cuadro.",
    "relatedTerms": [
      "Puntada Satén",
      "Esquina Biselada Tatami",
      "Compensación de Tracción",
      "Superposición de Objetos",
      "Ángulo de Puntada"
    ],
    "applications": [
      "Bordes y filetes de parches termoadhesivos",
      "Marcos geométricos de diplomas y toallas de etiqueta",
      "Bordados corporativos con formas cuadradas y rombos"
    ],
    "technicalDetails": "Rango de activación angular: 45° a 110°. Ángulo biselado simétrico: 45° en giros ortogonales (90°). Solape de seguridad en inglete: 0,35 a 0,50 mm.",
    "recommendedSettings": [
      {
        "parameter": "Tipo de Esquina en Giros > 70°",
        "value": "A Inglete (Mitered Corner)"
      },
      {
        "parameter": "Solape en Línea Diagonal",
        "value": "0,40 mm"
      },
      {
        "parameter": "Tipo de Esquina en Giros < 60°",
        "value": "Tapa / Caping Corner"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Se abre una pequeña fisura en la diagonal de la esquina cuadrada tras lavar la prenda",
        "cause": "Falta de solapamiento programado en la costura de unión a inglete",
        "solution": "Añada un valor de solape de 0,45 mm en las propiedades de esquina a inglete del software"
      }
    ],
    "calculatorAd": "El acabado pulcro de esquinas profesionales eleva el valor cotizado de sus parches e insignias. Calcule sus ganancias con la Calculadora de Bordados Artrelados."
  }
};

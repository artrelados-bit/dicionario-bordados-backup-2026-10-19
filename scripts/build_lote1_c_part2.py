import json

PART2_DATA = {
  "c-062-calibracao-ponto-zero-central": {
    "term": "Calibración de Punto Cero y Origen Central",
    "level": "Iniciante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del sistema de coordenadas cartesianas (X=0, Y=0) aplicado a la robótica de control numérico computarizado (CNC) para definir el origen matemático del pantógrafo.",
    "definition": "Procedimiento técnico fundamental mediante el cual el operador o el sistema automatizado de la máquina alinea el centro geométrico o punto de inicio del diseño digital con las coordenadas centrales exactas del bastidor físico, garantizando que el bordado quede centrado y equidistante de los cuatro límites mecánicos del aro.",
    "howItWorks": [
      "1. Al cargar la matriz en la máquina, el procesador calcula el centroide geométrico del diseño asignándole las coordenadas relativas X0, Y0.",
      "2. El pantógrafo traslada el soporte del bastidor hasta la posición central de fábrica programada en la memoria ROM.",
      "3. La bordadora coloca la plantilla plástica de centrado provista con el bastidor para verificar la coincidencia física con la punta de la aguja.",
      "4. Si se requiere un desplazamiento milimétrico, se utilizan las teclas de flechas (Jog Keys) en la pantalla táctil.",
      "5. Se pulsa la tecla 'Establecer Origen' (Set Origin / Center Key), fijando la nueva referencia cero para todo el ciclo de bordado."
    ],
    "beginnerExplanation": "Es como poner la aguja justo en el ombligo del aro. Antes de empezar a bordar, le dices a la máquina: 'este es el centro de mi tela'. La máquina mueve el bastidor hasta el medio exacto para que el dibujo no quede chueco, ni pegado contra un borde, ni torcido. Así te aseguras de que el diseño entre cómodo y que la aguja no choque contra los bordes de plástico del aro.",
    "practicalExamples": [
      "Centrado de un logotipo circular exactamente en el medio de una toalla de tocador.",
      "Alineación del punto de origen con piquetes de tiza marcados en el centro de un bolsillo de camisa.",
      "Verificación de seguridad en bastidores ovalados pequeños antes de bordar nombres largos."
    ],
    "matrixParametersRelation": [
      "Coordenadas de inicio y fin (Start/End Coordinates): configurar en el software que el diseño empiece y termine en el centro (Center-Center).",
      "Comprobación de límites perimetrales: verificar que la distancia desde el punto cero hasta el extremo más lejano no supere el radio útil del aro.",
      "Retorno automático al origen (Return to Origin): función que devuelve el pantógrafo al centro al terminar el bordado o tras una parada de emergencia."
    ],
    "commonErrors": [
      "Bordar sin verificar el punto cero, haciendo que la aguja golpee y rompa el borde plástico del bastidor.",
      "Mover el bastidor con la mano forzando los motores en vez de usar las flechas del panel táctil, perdiendo la referencia de pasos del servomotor.",
      "Olvidar retirar la plantilla de plástico transparente de centrado antes de apretar el botón de arranque verde."
    ],
    "troubleshootingTips": [
      "Usa la función de centrado automático (Center Hoop Key) presente en el panel de control antes de colocar la prenda.",
      "Realiza siempre una prueba de recorrido perimetral (Trace) con la aguja arriba para confirmar que el diseño entra con holgura.",
      "Marca el centro de la tela doblando la prenda en cuatro partes y haciendo una suave presión con la uña o un punto de tiza al agua."
    ],
    "whenToAdjust": "Presiona la tecla de recentrado si moviste el bastidor manualmente durante una revisión de hilo y perdiste la posición de origen.",
    "dicaArtrelados": "El tip de la cruz de tiza Artrelados: Dobla tu remera exactamente por la mitad enfrentando las costuras de los hombros, y plancha una suave línea de quiebre vertical. Luego haz lo mismo horizontalmente a la altura de la axila. Donde se cruzan las dos líneas, ese es el centro sagrado de tu prenda: calza la aguja ahí con la función de punto cero y nunca más tendrás un bordado torcido.",
    "voceSabia": "¿Sabías que en las máquinas industriales las coordenadas del punto cero se guardan en una memoria no volátil respaldada por batería interna, lo que permite apagar la máquina por la noche y reanudar el bordado al día siguiente exactamente en la misma micra de milímetro?",
    "practicalExercise": "Carga un diseño en tu máquina. Mueve el bastidor a una esquina usando las flechas de la pantalla. Luego presiona el botón con el icono de la mira o bastidor con punto central: observa cómo el pantógrafo viaja solo y se detiene exactamente en el centro matemático.",
    "quickSummary": "Procedimiento de alineación que hace coincidir el origen del diseño con el centro físico del bastidor para evitar choques.",
    "summary": "Procedimiento de alineación que hace coincidir el origen del diseño con el centro físico del bastidor para evitar choques.",
    "relatedTerms": [
      "Calibración de Sensores de Fin de Carrera del Pantógrafo",
      "Función de Trazado de Contorno (Trace)",
      "Plantilla de Posicionamiento de Bastidor",
      "Pantógrafo de Máquina de Bordar"
    ]
  },

  "c-calibracao-de-ponto-zero-e-sensores-de-fim-de-curso": {
    "term": "Calibración de Sensores de Fin de Carrera del Pantógrafo",
    "level": "Avanzado 🔴",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés limit switches & home position sensors. Mecanismos electromecánicos y ópticos de seguridad para delimitación de coordenadas físicas en robótica industrial.",
    "definition": "Protocolo técnico de ajuste y diagnóstico de los sensores de fin de carrera (microrruptores mecánicos, sensores de efecto Hall magnéticos o barreras ópticas infrarrojas) montados en los extremos de los ejes X e Y del pantógrafo, responsables de definir la posición de origen absoluto (Home Position) de la máquina al encender y evitar colisiones mecánicas del bastidor contra el chasis.",
    "howItWorks": [
      "1. Al encender la máquina, la CPU ejecuta la rutina de búsqueda de inicio (Homing Routine).",
      "2. Los motores paso a paso desplazan el pantógrafo lentamente hacia los límites negativos de los ejes X e Y.",
      "3. Una lengüeta metálica interrumpe el haz de luz del sensor óptico o acciona el microinterruptor de fin de carrera.",
      "4. La placa principal detecta el cambio de estado eléctrico y fija el contador de pulsos del encoder en cero absoluto (X=0, Y=0).",
      "5. El pantógrafo retrocede automáticamente unos milímetros a su zona segura de trabajo; si un sensor falla o se ensucia, la máquina emite un error de límite de bastidor (Limit Over Error)."
    ],
    "beginnerExplanation": "Son los pequeños sensores guardianes que están escondidos en los rieles donde se mueve el bastidor. Cuando prendes la máquina, el bastidor se mueve hacia una esquina despacito hasta tocar estos sensores: así la computadora sabe exactamente dónde está parada en el mundo real. Además, evitan que el bastidor se vaya de largo y choque con fuerza contra los bordes de la máquina.",
    "practicalExamples": [
      "Rutina automática de encendido y centrado de pantógrafo en máquinas familiares e industriales.",
      "Protección contra sobrecarreras cuando se carga una matriz de mayor tamaño que el bastidor seleccionado.",
      "Recuperación precisa de coordenadas tras una pérdida de pasos provocada por un trabamiento del aro."
    ],
    "matrixParametersRelation": [
      "Campo de bordado máximo de seguridad (Soft Limits): límites por software calculados a partir de la señal del sensor físico para no permitir desplazamientos mayores.",
      "Resolución de pasos de motor: típicamente calibrada a 0,1 mm por pulso tras el contacto con el sensor de inicio.",
      "Alarma de límite de bastidor: detención inmediata del motor si el pantógrafo alcanza el sensor durante la costura."
    ],
    "commonErrors": [
      "Acumulación de pelusas apelmazadas en las ranuras de los sensores ópticos infrarrojos, impidiendo el paso del haz de luz y bloqueando el encendido.",
      "Forzar con las manos el carro del pantógrafo cuando los motores están energizados, desfasando la lectura física respecto al sensor.",
      "Cables de conexión de los sensores cortados o aplastados por el movimiento repetitivo de las orugas pasacables."
    ],
    "troubleshootingTips": [
      "Limpia las ranuras de los sensores ópticos de fin de carrera con aire comprimido seco cada seis meses.",
      "Verifica en la pantalla de diagnóstico técnico que el indicador del sensor cambie de 0 a 1 al pasar una cartulina por la ranura óptica.",
      "Comprueba que los topes de goma mecánicos de los extremos de los rieles estén enteros para amortiguar cualquier eventual choque."
    ],
    "whenToAdjust": "Revisa y limpia los sensores si la máquina emite un pitido continuo con mensaje 'Límite de bastidor superado' nada más encender.",
    "dicaArtrelados": "El tip de arranque suave Artrelados: Nunca dejes tijeras, conos de hilo ni reglas apoyadas sobre la mesa de la máquina antes de encenderla. Cuando la máquina arranca, el pantógrafo hace el barrido automático de búsqueda de sensores: si choca contra una tijera olvidada en la mesa, forzará las correas dentadas y descalibrará el punto cero de fábrica.",
    "voceSabia": "¿Sabías que los sensores ópticos de las máquinas de bordar utilizan luz infrarroja modulada a frecuencias específicas para que la luz del sol o las lámparas del taller no confundan al sensor?",
    "practicalExercise": "Enciende tu máquina de bordar y observa atentamente el movimiento inicial del pantógrafo: verás cómo viaja suavemente hacia una esquina, se detiene con precisión milimétrica al tocar los sensores invisibles y regresa al centro lista para trabajar.",
    "quickSummary": "Sensores ópticos o mecánicos en los extremos de los rieles que establecen el punto de inicio absoluto y evitan colisiones.",
    "summary": "Sensores ópticos o mecánicos en los extremos de los rieles que establecen el punto de inicio absoluto y evitan colisiones.",
    "relatedTerms": [
      "Calibración de Punto Cero y Origen Central",
      "Pantógrafo de Máquina de Bordar",
      "Servomotor de Árbol Principal",
      "Área Útil del Bastidor"
    ]
  },

  "c-061-calibragem-do-sensor-de-bobina": {
    "term": "Calibración del Sensor de Hilo de Bobina",
    "level": "Intermedio 🟡",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del desarrollo de fotosensores ópticos y ruedas codificadoras magnéticas infrarrojas (Low Bobbin Sensor) para alertar al operador antes de que se agote el hilo inferior.",
    "definition": "Ajuste técnico del umbral de sensibilidad de los sensores ópticos o de rotación ubicados en la caja de lanzadera, encargados de monitorear la presencia y consumo del hilo de la canilla inferior para detener la máquina con un margen de seguridad (típicamente 1 a 2 metros de hilo remanente) antes de que la puntada quede vacía en medio del bordado.",
    "howItWorks": [
      "1. En sistemas ópticos reflexivos: un haz infrarrojo rebota contra el núcleo de la canilla; cuando el hilo se agota y deja al descubierto el metal brillante, el fotodiodo detecta la luz y activa la alarma.",
      "2. En sistemas por rueda sensora: un rodillo microdentado gira impulsado por el paso del hilo; si la canilla se vacía, la rueda se detiene y la CPU frena la máquina.",
      "3. El operador puede regular la sensibilidad en el menú de ajustes de la pantalla táctil (ajustando niveles del 1 al 5 o activando/desactivando el aviso).",
      "4. La máquina detiene el ciclo de costura suavemente, corta el hilo superior y muestra en pantalla el mensaje 'Hilo de bobina agotado o bajo'.",
      "5. El usuario recarga la canilla y la máquina retoma exactamente desde la última puntada sin dejar zonas sin coser."
    ],
    "beginnerExplanation": "Es el ojo mágico que avisa cuando se está por acabar el hilo de abajo. No hay nada más frustrante que ver a la máquina cosiendo 'en el aire' durante diez minutos porque se terminó el carretel de abajo y nadie se dio cuenta. Este sensor te avisa con un pitido en la pantalla cuando le queda poquito hilo, para que cambies la canilla a tiempo y el bordado no se arruine.",
    "practicalExamples": [
      "Aviso anticipado antes de iniciar un bloque largo de satín denso o tatami de gran formato.",
      "Prevención de costura en vacío durante turnos nocturnos o desatendidos en producción industrial.",
      "Uso de canillas predevanadas con núcleo magnético que optimizan la lectura del sensor."
    ],
    "matrixParametersRelation": [
      "Parada segura por fin de hilo: la máquina retrocede automáticamente 3 a 5 puntadas al reanudar para solapar y anclar el hilo nuevo sobre el anterior.",
      "Sensibilidad a canillas transparentes vs. metálicas: calibración en el panel según el material de la bobina utilizada.",
      "Incompatibilidad con hilos oscuros en sistemas ópticos: hilos negros o marrones en la bobina absorben el infrarrojo y pueden requerir mayor sensibilidad."
    ],
    "commonErrors": [
      "Dejar que el sensor óptico inferior se tape de pelusa de hilo y polvo, generando falsas alarmas de bobina vacía cada 2 minutos.",
      "Usar canillas de plástico opaco o de color no homologadas que engañan el haz infrarrojo del sensor.",
      "Desactivar el sensor en la pantalla por pereza y olvidar reponer hilo, bordando piezas enteras en el aire."
    ],
    "troubleshootingTips": [
      "Limpia el pequeño lente del sensor situado en el fondo de la lanzadera con un bastoncillo de algodón humedecido en alcohol isopropílico.",
      "Si el aviso suena cuando todavía queda media canilla llena, baja la sensibilidad del sensor de nivel 4 a nivel 2 en el menú de ajustes.",
      "Utiliza canillas predevanadas de cartón o plástico transparente recomendadas por el fabricante para una lectura óptica impecable."
    ],
    "whenToAdjust": "Modifica la sensibilidad si la máquina avisa demasiado tarde (cuando ya se acabó el hilo) o demasiado temprano (con más de media canilla llena).",
    "dicaArtrelados": "El tip de ateliê Artrelados para el cambio de canilla: Cuando el sensor te avise que queda poco hilo, no intentes 'estirarlo' para terminar la letra: cambia la canilla inmediatamente. Y al reanudar, haz retroceder la máquina 4 puntadas con la flecha de retroceso de pantalla: la máquina coserá las primeras puntadas sobre el hilo anterior y el empalme quedará totalmente invisible e indestructible.",
    "voceSabia": "¿Sabías que algunas máquinas industriales modernas calculan el consumo del hilo inferior mediante algoritmos matemáticos que cuentan el número exacto de puntadas de la matriz en vez de sensores ópticos, sabiendo que una canilla estándar rinde exactamente entre 25.000 y 30.000 puntadas?",
    "practicalExercise": "Entra al menú de configuración de tu máquina, busca la opción 'Sensor de hilo de bobina' y prueba a variar su sensibilidad. Observa con una linterna el fondo del portabobinas para identificar el pequeño orificio por donde el haz infrarrojo vigila tu canilla.",
    "quickSummary": "Ajuste de sensibilidad del fotosensor inferior que alerta antes de que se acabe el hilo de la canilla para evitar coser en vacío.",
    "summary": "Ajuste de sensibilidad del fotosensor inferior que alerta antes de que se acabe el hilo de la canilla para evitar coser en vacío.",
    "relatedTerms": [
      "Canilla e Hilo Inferior de Bobina",
      "Caja de Bobina",
      "Sensor de Rotura de Hilo",
      "Garfio Rotativo"
    ]
  },

  "c-010-camada-de-bordado": {
    "term": "Capa de Bordado",
    "level": "Iniciante 🟢",
    "category": "Digitalización & Matrices",
    "grammarClass": "Sustantivo femenino",
    "origin": "Del latín cappa (capa, estrato que cubre). Principio heredado del diseño gráfico digital por capas (Layers) aplicado a la secuencia cronológica de puntadas.",
    "definition": "Nivel o estrato individual dentro de la estructura de un diseño de bordado computarizado que agrupa objetos de puntada que comparten un orden temporal de costura, una función técnica (base de soporte, relleno principal, sombreado o detalles) o un color específico, permitiendo organizar y editar la matriz de forma independiente.",
    "howItWorks": [
      "1. En el software de ponchado, el diseño se organiza en una jerarquía vertical de capas similar a un programa de dibujo vectorial.",
      "2. Capa inferior: puntadas de hilván perimetral y bases estructurales de refuerzo (Underlay) que fijan la tela.",
      "3. Capa media: bloques de relleno extenso en puntada tatami o satines anchos que forman los fondos y colores dominantes.",
      "4. Capa superior: sombras, degradados, detalles finos, letras y contornos perimetrales que cierran la figura.",
      "5. La máquina ejecuta las capas estrictamente de abajo hacia arriba, garantizando que los elementos de primer plano cubran las terminaciones de las capas de fondo."
    ],
    "beginnerExplanation": "Es como hacer una torta de varios pisos o pintar un cuadro: primero pones la masa de abajo, luego el dulce en el medio y al final la frutilla decorativa arriba. En el bordado es igual: la máquina borda primero el piso de abajo para que la tela quede firme, luego rellena los colores grandes y al final le hace los ojitos, la boquita y las letras finas por encima. Cada uno de esos niveles es una capa.",
    "practicalExamples": [
      "Capa de fondo verde sobre la que se borda la capa de pétalos rojos y finalmente el centro amarillo de una flor.",
      "Capa de base tatami para una letra 3D antes de colocar la goma EVA y bordar la capa de satín exterior.",
      "Ocultamiento temporal de capas en el software para editar textos sin modificar el escudo de fondo."
    ],
    "matrixParametersRelation": [
      "Lista de secuencias de objetos (Object Sequence): orden numérico de ejecución de cada capa que determina el flujo de trabajo de la máquina.",
      "Compensación de tirantez intercapas: calcular el encogimiento de la capa de fondo para que la capa de contorno superior coincida exactamente.",
      "Control de visibilidad y bloqueo (Lock/Hide Layers): herramientas del digitalizador para trabajar con comodidad en matrices densas."
    ],
    "commonErrors": [
      "Bordar una capa de contorno antes que la capa de relleno, haciendo que el relleno tape y deforme el contorno fino.",
      "Superponer demasiadas capas densas en la misma coordenada, provocando roturas continuas de aguja y acartonamiento de la tela.",
      "No agrupar por capas los objetos del mismo color, obligando a la máquina a realizar decenas de cambios de aguja innecesarios."
    ],
    "troubleshootingTips": [
      "Utiliza el panel de capas (Layer Manager) de tu software de digitalización para nombrar y ordenar cada sección del diseño.",
      "Aplica la función de 'Eliminación de puntadas solapadas' (Remove Overlaps) para recortar las capas de fondo que quedan totalmente tapadas por capas superiores.",
      "Revisa la simulación 3D capa por capa antes de exportar el archivo para confirmar que ningún detalle importante quede oculto."
    ],
    "whenToAdjust": "Reordena las capas en la matriz si en la prueba física observas que un elemento de fondo está tapando un detalle que debería estar al frente.",
    "dicaArtrelados": "La regla de oro de capas Artrelados: 'Del fondo hacia adelante y del centro hacia afuera'. Si sigues siempre ese orden al organizar tus capas de bordado, la tela irá expulsando las tensiones naturales hacia los bordes y tus contornos superiores calzarán con una precisión matemática perfecta.",
    "voceSabia": "¿Sabías que los softwares profesionales de ponchado permiten crear matrices complejas de arte textil con más de 200 capas independientes, permitiendo a los artistas textiles ajustar la transparencia y el brillo de cada hilo de forma individual?",
    "practicalExercise": "Abre un diseño que tenga una letra con contorno en tu software. Abre la lista de objetos y arrastra el contorno para que se borde antes que el relleno. Ejecuta la simulación y comprueba cómo el relleno se come el contorno: entenderás para siempre la importancia del orden de capas.",
    "quickSummary": "Estrato independiente dentro de la matriz que agrupa puntadas con un orden cronológico, función o color determinado.",
    "summary": "Estrato independiente dentro de la matriz que agrupa puntadas con un orden cronológico, función o color determinado.",
    "relatedTerms": [
      "Capas de Puntadas",
      "Bordado en Capas / Superposición de Puntadas",
      "Software de Ponchado y Digitalización",
      "Puntadas de Soporte (Underlay)"
    ]
  },

  "c-047-camada-cobertura-topping": {
    "term": "Película Hidrosoluble Superior",
    "level": "Iniciante 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del inglés topping (cobertura superior) y del polímero sintético biodegradable alcohol polivinílico (PVA - Polyvinyl Alcohol) disoluble en agua fría o tibia sin residuos químicos.",
    "definition": "Lámina plástica transparente y delgada (Topping Film) fabricada con alcohol polivinílico hidrosoluble que se coloca sobre la cara visible de tejidos con pelo, rizo, textura abierta o felpa (como toallas, polar, terciopelo, piqué y tejidos de punto), cuya función es comprimir y alisar los bucles de la tela para evitar que las puntadas de bordado se hundan y desaparezcan en la textura del tejido.",
    "howItWorks": [
      "1. Se corta un trozo de película hidrosoluble ligeramente mayor al diseño a bordar.",
      "2. Se apoya sobre la cara superior de la tela montada en el bastidor, sosteniéndola con alfileres en las esquinas, cinta de papel o una suave gota de agua en los bordes.",
      "3. La máquina borda normalmente sobre el film plástico transparente.",
      "4. El film actúa como una membrana elástica que mantiene las puntadas de satín y tatami elevadas y tersas por encima de los rulos de la tela.",
      "5. Al finalizar el bordado, el film sobrante se arranca fácilmente con los dedos a lo largo de las perforaciones de la aguja.",
      "6. Los pequeños restos atrapados dentro de las letras se disuelven de forma instantánea al rociar unas gotas de agua o pasar un paño húmedo."
    ],
    "beginnerExplanation": "Es como un papel celofán mágico transparente que se pone arriba de telas peluditas (como toallas de baño, buzos de polar o remeras de piqué). Si bordas sobre una toalla sin este plástico, los rulos de la toalla se meten entre los hilos del bordado y las letras quedan tapadas y desprolijas. Poniendo este plástico arriba, las letras quedan perfectas y flotando por encima. ¡Y lo mejor es que cuando lo mojas con un poquito de agua, el plástico desaparece como por arte de magia!",
    "practicalExamples": [
      "Bordado nítido de nombres y monogramas en toallas de baño de felpa gruesa de 500 g/m².",
      "Bordado de logotipos corporativos sobre chombas de piqué abierto sin que la trama se coma el satín.",
      "Definición de microletras en mantas de micropolar y camperas de abrigo de lana sintética."
    ],
    "matrixParametersRelation": [
      "Ahorro de densidad: el uso de topping permite bordar con densidades normales (0,40 mm) en toallas sin necesidad de sobrecargar la matriz con puntadas excesivas.",
      "Pespunte de hilván perimetral (Basting Stitch): programar un marco de hilván previo para sujetar el film superior al bastidor antes de comenzar el diseño.",
      "Longitud mínima de puntada: evitar puntadas menores a 1,5 mm que troquelarían el film en exceso antes de completar la cobertura."
    ],
    "commonErrors": [
      "Confundir la película hidrosoluble de cobertura (Topping fino de 20 a 25 micrones) con la entretela hidrosoluble gruesa de base (Wash-away de 80 micrones).",
      "Planchar el bordado con la plancha caliente antes de haber retirado los restos de film con agua, derritiendo el plástico sobre los hilos.",
      "Bordar sobre toallas o terciopelo sin topping superior, obteniendo bordados hundidos con pelos que asoman entre las letras."
    ],
    "troubleshootingTips": [
      "Guarda tus rollos de película hidrosoluble siempre dentro de una bolsa plástica cerrada con cierre hermético para protegerlos de la humedad ambiente.",
      "Pasa una esponja o paño húmedo con agua tibia para disolver los restos pequeños de film en segundos sin necesidad de lavar toda la prenda.",
      "Si el film tiende a resbalarse en telas resbaladizas, humedece ligeramente las cuatro esquinas con la punta del dedo: el propio pegamento del PVA se adherirá a la tela."
    ],
    "whenToAdjust": "Coloca siempre película hidrosoluble superior en cualquier tela que tenga textura, pelo, bucles o trama abierta.",
    "dicaArtrelados": "El truco del agua tibia Artrelados para retirar el topping: No jales fuerte de los pedacitos chiquitos de film que quedan atrapados adentro de letras como la 'A' o la 'O' porque puedes aflojar las puntadas. Toma un pulverizador con agua tibia, dale un rocío suave y pasa un cepillito de dientes suave: el film se disolverá al instante como azúcar en agua caliente y el bordado quedará reluciente.",
    "voceSabia": "¿Sabías que el alcohol polivinílico (PVA) con el que se fabrica el topping de bordado es el mismo polímero biodegradable y ecológico que se utiliza en las cápsulas monodosis de jabón para lavarropas y en las cápsulas medicinales solubles?",
    "practicalExercise": "Toma un retazo de toalla de baño. Borda la misma letra dos veces: una directamente sobre la toalla sin nada, y la otra colocando una capa de film hidrosoluble encima. Compara ambos resultados: la diferencia de nitidez y brillo te dejará sin palabras.",
    "quickSummary": "Membrana plástica soluble en agua que se coloca sobre telas con pelo para evitar que las puntadas se hundan en el tejido.",
    "summary": "Membrana plástica soluble en agua que se coloca sobre telas con pelo para evitar que las puntadas se hundan en el tejido.",
    "relatedTerms": [
      "Entretela Hidrosoluble Pesada",
      "Pespunte de Hilván Perimetral (Basting)",
      "Puntada Satín (Satin Stitch)",
      "Bordado en Toallas y Tejidos con Pelo"
    ]
  },

  "c-011-camadas-de-pontos": {
    "term": "Capas de Puntadas",
    "level": "Intermedio 🟡",
    "category": "Digitalización & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del concepto físico de superposición de capas textiles (Stitch Layering) para generar cobertura tridimensional, mezclas de colores y densidad progresiva.",
    "definition": "Técnica matricial consistente en la aplicación consecutiva de dos o más estratos de puntadas sobre la misma zona geométrica con diferentes densidades, orientaciones angulares y tonalidades, empleada para crear degradados cromáticos (Color Blending), efectos de pelaje y plumaje hiperrealistas o bases estructurales de soporte sin deformar el tejido.",
    "howItWorks": [
      "1. Primera capa: se digitaliza una base de puntada tatami abierta (densidad 0,80 mm a 1,0 mm) en un ángulo de 45° con el color más oscuro.",
      "2. Segunda capa: se superpone una capa de puntadas con densidad media (0,65 mm a 0,75 mm) en ángulo de 75° con un color intermedio.",
      "3. Tercera capa: se aplican trazos con terminación en bordes dentados (Feathered Edge / Jagged Stitches) con el tono más claro para fundir los colores.",
      "4. El ojo humano percibe la mezcla óptica de las hebras entrelazadas como una transición suave de acuarela sin líneas de corte duras.",
      "5. Al estar cada capa digitalizada con densidades abiertas, la suma total de puntadas no apelmaza la tela ni quiebra agujas."
    ],
    "beginnerExplanation": "Es como colorear con lápices de colores encimando tonos suaves: primero pintas suavemente de azul oscuro, luego pasas por encima un celeste clarito y al final un blanco para dar brillo. En el bordado se hace igual: en vez de clavar un bloque duro de hilo de un solo color, pones varias capas de hilos finos cruzados que se mezclan entre sí para crear sombras, luces y degradados hermosos que parecen una pintura al óleo.",
    "practicalExamples": [
      "Degradados de color en pétalos de orquídeas y rosas de alta definición.",
      "Pintura con aguja de pelaje brillante de animales (perros, caballos, leones).",
      "Efectos de cielo al atardecer y nubes con transiciones de color en paisajes textiles."
    ],
    "matrixParametersRelation": [
      "Densidad matemática fraccionada: la regla básica es que la suma de densidades de las capas no debe superar la densidad de una capa estándar (0,40 mm).",
      "Ángulos de cruce direccionales: variar los ángulos en 20° a 45° entre capas para que los filamentos no se hundan en los canales de la capa previa.",
      "Bordes irregulares (Feathering): programar longitudes de puntada aleatorias en los bordes de unión para difuminar la frontera entre capas."
    ],
    "commonErrors": [
      "Superponer capas con densidades normales de 0,40 mm, creando un bloque rígido como cartón piedra que rompe hilos y desgarra la tela.",
      "Bordar todas las capas con el mismo ángulo exacto de puntada, haciendo que el color superior se esconda dentro del inferior.",
      "No compensar la tirantez acumulada, provocando frunces alrededor de la zona multicapa."
    ],
    "troubleshootingTips": [
      "Utiliza hilos finos de calibre 60wt o 75wt para las capas superiores de detalle y degradado: aportan color sin engrosar la prenda.",
      "Aplica entretela pesada de cortar (Cut-away) por debajo para sostener la tracción combinada de las múltiples capas de costura.",
      "Usa una aguja delgada de punta fina 70/10 para no deshilachar las hebras de las capas que ya están bordadas debajo."
    ],
    "whenToAdjust": "Abre el espaciado de las capas en el software si la aguja emite un sonido seco y pesado al atravesar las áreas superpuestas.",
    "dicaArtrelados": "El secreto de la mezcla óptica Artrelados: Para lograr un degradado perfecto entre dos colores (por ejemplo, de rojo a amarillo para hacer fuego), nunca intentes mezclar hilos en la misma capa. Borda una capa roja con densidad abierta de 0,80 mm y encima una capa amarilla con densidad de 0,70 mm con ángulo cambiado 30 grados. A un metro de distancia, el ojo humano verá un naranja radiante y vivo que ningún hilo monocromático puede igualar.",
    "voceSabia": "¿Sabías que las bordadoras de la corte imperial de la antigua China utilizaban hasta diez capas de hilos de seda microscópicos superpuestos para bordar los ojos de los dragones imperiales, logrando que parecieran seguir al observador desde cualquier rincón de la sala?",
    "practicalExercise": "Crea una hoja de 4 cm en tu software con dos capas: capa base verde bosque a 45° con espaciado de 0,85 mm, y capa superior verde lima a 75° con espaciado de 0,75 mm y borde irregular. Bórdala y admira la riqueza del degradado resultante.",
    "quickSummary": "Superposición metódica de estratos de puntadas abiertas con diferentes ángulos y colores para crear degradados y texturas vivas.",
    "summary": "Superposición metódica de estratos de puntadas abiertas con diferentes ángulos y colores para crear degradados y texturas vivas.",
    "relatedTerms": [
      "Capa de Bordado",
      "Bordado en Capas / Superposición de Puntadas",
      "Degradado de Color (Color Blending)",
      "Hilo de Bordar Calibre 60wt"
    ]
  },

  "c-103-came-acionamento-trimmer-excentrico-corte-linha": {
    "term": "Leva de Accionamiento del Cortahilos",
    "level": "Avanzado 🔴",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés trimmer cam & knife drive eccentric. Mecanismo de sincronización cinemática desarrollado para accionar cuchillas mecánicas a partir del giro del árbol inferior.",
    "definition": "Leva mecánica excéntrica mecanizada en acero templado montada en el árbol inferior de la máquina de bordar, provista de un perfil perimetral calibrado que, al ser acoplada por un solenoide o actuador mecánico, transforma el movimiento rotativo continuo del eje en el desplazamiento alternativo preciso del conjunto cortahilos para atrapar y cortar los hilos en el grado angular exacto.",
    "howItWorks": [
      "1. Durante la costura normal, el pasador seguidor permanece desacoplado de la leva de corte girando libre.",
      "2. Al ejecutarse un comando de corte en la matriz, el solenoide eléctrico se activa bajando el pasador seguidor a la pista de la leva.",
      "3. La rampa excéntrica de la leva empuja el brazo oscilador, extendiendo la cuchilla móvil bajo la placa de aguja.",
      "4. El perfil inverso de la leva devuelve la cuchilla móvil atrapando el hilo superior y el hilo inferior contra la contracuchilla fija.",
      "5. El pasador se desacopla automáticamente por la acción de un muelle de retorno al completar los 360° del ciclo de corte."
    ],
    "beginnerExplanation": "Es una rueda de metal con una forma especial parecida a un huevo que gira adentro de la máquina. Cuando la máquina necesita cortar el hilo, un electroimán empuja una patita que apoya sobre esta rueda: la forma de la rueda empuja las tijeras mecánicas hacia adelante para agarrar los hilos y las vuelve a tirar hacia atrás para cortarlos con fuerza milimétrica. Todo pasa en una fracción de segundo mientras la aguja está arriba.",
    "practicalExamples": [
      "Corte automático y sincronizado de colas de hilo en bordados a alta velocidad de 1000 PPM.",
      "Sincronización milimétrica entre la cuchilla móvil y la posición superior de la aguja para evitar impactos.",
      "Ajuste técnico del ángulo de enganche del cortahilos durante la puesta a punto mecánica de la máquina."
    ],
    "matrixParametersRelation": [
      "Grado de inicio de corte (Trimmer Timing Angle): típicamente calibrado entre 285° y 315° del árbol principal.",
      "Longitud de cola de hilo remanente: la geometría de la leva define el recorrido de la cuchilla, garantizando colas de hilo de 3 mm a 5 mm para arranques limpios.",
      "Comandos de corte en la matriz (Trimmer Codes): activan el circuito eléctrico del solenoide que acopla la leva."
    ],
    "commonErrors": [
      "Desincronización angular de la leva respecto al volante de la máquina, haciendo que la cuchilla corte antes de tiempo o choque con la aguja.",
      "Falta de lubricación en la pista de rodadura de la leva excéntrica, provocando desgaste prematuro del pasador seguidor.",
      "Tornillos de fijación de la leva flojos sobre el árbol inferior, perdiendo la referencia de corte y trabando la máquina."
    ],
    "troubleshootingTips": [
      "Aplica una fina película de grasa blanca de litio en la pista perimetral de la leva de corte durante el servicio de mantenimiento semestral.",
      "Verifica con el volante manual que el pasador seguidor entre y salga de la ranura de la leva con absoluta fluidez sin trabarse.",
      "Calibra el ángulo de sincronización con un disco graduado de grados (Timing Wheel) según el manual de servicio técnico del fabricante."
    ],
    "whenToAdjust": "Revisa la leva si la máquina hace el ruido de corte pero las cuchillas no se mueven o se mueven fuera de tiempo.",
    "dicaArtrelados": "El tip de seguridad mecánica Artrelados para el cortahilos: Si alguna vez la máquina se clava con un ruido sordo durante un corte de hilo, nunca fuerces el volante con fuerza bruta. Desenchufa la máquina, retira la placa de aguja y revisa si la cuchilla móvil quedó trabada contra un nudo de hilo inferior. Corta el nudo con una tijera fina: la leva excéntrica se liberará sola sin forzar los engranajes.",
    "voceSabia": "¿Sabías que el acero de las levas de cortahilos se somete a un tratamiento térmico de nitruración que eleva la dureza superficial a más de 60 Rockwell C, haciéndolas casi tan duras como el diamante para no desgastarse tras millones de cortes?",
    "practicalExercise": "Gira el volante de tu máquina con la mano hasta la posición de 300 grados: fíjate cómo en esa ventana angular la aguja está completamente arriba y el garfio ha liberado el hilo, dejando el espacio perfecto para que la leva accione las cuchillas de corte.",
    "quickSummary": "Rueda excéntrica en el eje inferior que transforma el giro continuo en el movimiento sincronizado de corte de las cuchillas.",
    "summary": "Rueda excéntrica en el eje inferior que transforma el giro continuo en el movimiento sincronizado de corte de las cuchillas.",
    "relatedTerms": [
      "Brazo Oscilador del Cortahilos Inferior",
      "Cuchilla Cortahilos Móvil y Fija",
      "Solenoide del Cortahilos",
      "Sincronización Mecánica del Garfio (Timing)"
    ]
  },

  "c-096-came-excentrico-elevacao-calcador": {
    "term": "Leva Excéntrica de Elevación del Prensatelas",
    "level": "Avanzado 🔴",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del francés came (disco excéntrico) y del inglés hopping foot lift cam. Mecanismo cinemático superior que coordina el salto vertical del prensatelas con la aguja.",
    "definition": "Disco excéntrico de acero templado fijado al árbol superior del cabezal de bordado, cuyo perfil ovalado transmite movimiento vertical oscilante a la biela de accionamiento del prensatelas, sincronizando con exactitud matemática el momento en que el prensatelas comprime la tela contra la placa y el instante en que se eleva para permitir el avance del bastidor.",
    "howItWorks": [
      "1. El árbol superior gira a velocidades de 600 a 1200 RPM impulsado por el servomotor principal.",
      "2. El perfil descentrado de la leva excéntrica empuja la biela vertical del prensatelas hacia abajo.",
      "3. El prensatelas comprime el tejido exactamente en el grado angular en que la aguja perfora la tela.",
      "4. Al continuar el giro, la sección rebajada de la leva permite que el resorte de elevación levante el prensatelas de 1,5 mm a 2,5 mm sobre el tejido.",
      "5. El espacio libre resultante permite que el pantógrafo desplace el bastidor en coordenadas X-Y sin rozar la superficie de la prenda."
    ],
    "beginnerExplanation": "Es la ruedita con forma ovalada que está escondida arriba en la cabeza de la máquina y que hace que el prensatelas suba y baje dando saltitos. Gracias a su forma curva, empuja el prensatelas para abajo justo cuando la aguja entra a coser, y lo deja subir rápido cuando la aguja sale para que el aro pueda saltar a la próxima puntada sin frenar la tela.",
    "practicalExamples": [
      "Sincronización perfecta del prensatelas para evitar que las telas elásticas salten con la aguja (Anti-Flagging).",
      "Ajuste de la carrera vertical del prensatelas para bordar colchas acolchadas o camperas de plumas.",
      "Mantenimiento y calibración del juego mecánico en cabezales industriales de alta velocidad."
    ],
    "matrixParametersRelation": [
      "Ángulo de bajada del prensatelas: debe iniciar su contacto con la tela entre 10° y 15° antes de que la punta de la aguja perfore el tejido.",
      "Ángulo de elevación del prensatelas: debe despegar de la tela inmediatamente cuando el ojo de la aguja emerge completamente del tejido.",
      "Carrera de elevación (Stroke Length): regulable mecánicamente según el espesor del material a bordar."
    ],
    "commonErrors": [
      "Desfasaje angular de la leva en el árbol superior, haciendo que el prensatelas se levante mientras la aguja todavía está cosiendo la tela.",
      "Falta de lubricación en la pista de contacto de la biela de la leva, generando chirridos agudos y desgaste metálico.",
      "Tornillos prisioneros de la leva flojos sobre el eje, provocando que el prensatelas pierda altura y golpee la placa de aguja."
    ],
    "troubleshootingTips": [
      "Aplica dos gotas de aceite mineral ISO VG 10 en la ranura de contacto de la leva excéntrica durante el mantenimiento semanal.",
      "Comprueba la sincronización girando el volante a mano: el prensatelas debe tocar la tela antes de que la aguja penetre y despegar antes del salto.",
      "Si bordas materiales muy gruesos como cuero o lona pesada, calibra la leva en la posición de carrera larga para mayor despeje."
    ],
    "whenToAdjust": "Revisa la leva excéntrica si notas que el prensatelas se frena a mitad de camino o no aplasta la tela con suficiente firmeza.",
    "dicaArtrelados": "El tip de silencio Artrelados para el cabezal: Si tu máquina hace un ruido de martilleo constante en la parte superior del cabezal al bordar rápido, revisa la holgura entre la leva excéntrica y la biela del prensatelas. Un pequeño ajuste de una décima de milímetro en el tornillo excéntrico eliminará el ruido al 100% y la máquina sonará suave como un reloj suizo.",
    "voceSabia": "¿Sabías que en las máquinas de bordar industriales computarizadas modernas existen sistemas de leva con servomotor digital independiente que permiten regular la altura del salto del prensatelas desde la pantalla táctil para cada aguja sin usar destornillador?",
    "practicalExercise": "Gira el volante de tu máquina despacio hacia ti mientras miras de costado el piecito del prensatelas: observa el instante milimétrico en que el prensatelas toca la tela y compáralo con el momento en que baja la aguja. Comprenderás la armonía perfecta de la leva excéntrica.",
    "quickSummary": "Leva ovalada en el árbol superior que sincroniza el descenso y la elevación rítmica del prensatelas con la aguja.",
    "summary": "Leva ovalada en el árbol superior que sincroniza el descenso y la elevación rítmica del prensatelas con la aguja.",
    "relatedTerms": [
      "Prensatelas de Bordado con Resorte",
      "Cabezal de Bordado",
      "Efecto de Flameo de la Tela (Flagging)",
      "Servomotor de Árbol Principal"
    ]
  },

  "c-071-camera-integrada-de-posicionamento-e-escaneamento": {
    "term": "Cámara Integrada de Posicionamiento del Bastidor",
    "level": "Intermedio 🟡",
    "category": "Equipamiento & Herramientas",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del inglés built-in hoop camera & smart vision scanner. Tecnología de visión artificial (InnovEye / Smart Eye) adaptada a máquinas de bordar por Brother y Tajima.",
    "definition": "Sistema óptico de visión artificial compuesto por una microcámara digital de alta resolución montada en el chasis del cabezal y software de procesamiento de imágenes, que escanea la tela montada en el bastidor y proyecta la imagen real en la pantalla táctil para posicionar, rotar y encajar el bordado con precisión milimétrica sobre estampados, rayas o marcas físicas.",
    "howItWorks": [
      "1. La bordadora monta la prenda en el bastidor y pulsa el botón de escaneo en la pantalla de la máquina.",
      "2. El pantógrafo desplaza el bastidor bajo el objetivo de la cámara realizando un barrido fotográfico completo de la zona útil.",
      "3. La pantalla táctil muestra la fotografía nítida y en color real de la prenda colocada en el aro.",
      "4. El operador arrastra el diseño digital con el dedo sobre la pantalla, ubicándolo exactamente sobre las rayas de la tela o marcas de tiza.",
      "5. El sistema utiliza marcas de registro ópticas adhesivas (Snowman Sensor) para calcular automáticamente el ángulo de inclinación y rotar la matriz sin error humano."
    ],
    "beginnerExplanation": "Es como tener una cámara de fotos inteligente arriba de la máquina que le saca una foto a tu prenda en el bastidor y te la muestra en la pantalla a todo color. Puedes agarrar el dibujito con tu dedo en la pantalla y acomodarlo exactamente arriba del bolsillo, entre las rayas de la camisa o sobre una marca que hiciste. La máquina acomoda el diseño sola y borda exactamente donde tú ves en la foto.",
    "practicalExamples": [
      "Calce perfecto de bordados entre las rayas de una camisa a cuadros sin desfasaje visual.",
      "Conexión milimétrica de diseños continuos y guardas infinitas entre un bastidor y el siguiente.",
      "Bordado exacto alrededor de estampados previos o cuellos redondeados confeccionados."
    ],
    "matrixParametersRelation": [
      "Rotación angular asistida por visión: el software de la cámara detecta la inclinación de la tela y rota la matriz con precisión de 0,1 grados.",
      "Alineación por dos puntos (2-Point Alignment): lectura de dos marcas adhesivas para ajustar escala y posición automáticamente.",
      "Calibración de lente óptica: rutina interna para corregir la distorsión de ojo de pez del lente gran angular de la cámara."
    ],
    "commonErrors": [
      "Tocar el lente de la cámara con los dedos grasientos o aceitados, empañando la imagen del escaneo en la pantalla.",
      "Escanear la prenda con sombras duras o iluminación deficiente en el taller, dificultando la lectura de las marcas de registro.",
      "Mover la tela con la mano dentro del bastidor después de haber realizado el escaneo fotográfico."
    ],
    "troubleshootingTips": [
      "Limpia el pequeño lente de la cámara situado junto a las barras de aguja con un paño de microfibra para lentes.",
      "Utiliza las pegatinas oficiales de reconocimiento óptico (tipo muñeco de nieve) pegadas en el centro deseado de la tela.",
      "Asegúrate de que la iluminación LED de la máquina esté encendida para que la cámara capture colores fieles y contrastados."
    ],
    "whenToAdjust": "Recalibra la cámara desde el menú de configuración técnica si notas que el bordado final queda desplazado 1 mm respecto a la imagen de la pantalla.",
    "dicaArtrelados": "El tip de producción mágica Artrelados con cámara: Si tienes que bordar iniciales en 10 camisas a rayas y te da terror que queden chuecas, no uses regla ni escuadra. Escanea con la cámara: amplía la imagen en la pantalla al 200% y alinea la base de las letras exactamente sobre la raya de la tela con las flechas de microgiro. ¡Todas las camisas quedarán bordadas con un nivel de perfección que parece magia!",
    "voceSabia": "¿Sabías que los algoritmos de visión de estas cámaras de bordado reconocen patrones geométricos a una velocidad de 30 fotogramas por segundo, siendo capaces de reubicar un diseño aunque coloques la prenda en el bastidor totalmente inclinada a 45 grados?",
    "practicalExercise": "Coloca una tela a rayas en tu bastidor en forma ligeramente diagonal. Activa la función de escaneo con cámara en tu máquina, alinea el diseño paralelo a una de las rayas usando la herramienta de rotación visual y borda para comprobar cómo el bordado sigue la línea con total perfección.",
    "quickSummary": "Sistema óptico con microcámara que escanea la tela en el bastidor para encajar y rotar el diseño con precisión visual en pantalla.",
    "summary": "Sistema óptico con microcámara que escanea la tela en el bastidor para encajar y rotar el diseño con precisión visual en pantalla.",
    "relatedTerms": [
      "Prensatelas con Guía de Luz LED",
      "Puntero Láser de Posicionamiento",
      "Calibración de Punto Cero y Origen Central",
      "Brother (Máquinas de Bordar Electrónicas)"
    ]
  },

  "c-009-caminho-de-costura": {
    "term": "Trayectoria de Costura",
    "level": "Iniciante 🟢",
    "category": "Digitalización & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del latín trajectus (acción de cruzar, recorrido) y del inglés stitch path / travel path. Concepto matemático de grafos aplicado al orden vectorial de penetración de aguja.",
    "definition": "Recorrido secuencial y continuo que trazan las puntadas de bordado a lo largo de los diferentes elementos de un diseño, planificado estratégicamente por el digitalizador para minimizar los saltos de aguja, eliminar cortes de hilo innecesarios y controlar la acumulación de tensiones mecánicas sobre la tela.",
    "howItWorks": [
      "1. El digitalizador analiza el arte gráfico e imagina la ruta más lógica como si dibujara el diseño sin levantar el lápiz del papel.",
      "2. Se establecen los puntos de entrada (Start Point) y salida (End Point) de cada bloque de color.",
      "3. Se utilizan puntadas de viaje ocultas (Travel Runs) que se camuflan por debajo de áreas que luego recibirán satín o tatami.",
      "4. La trayectoria avanza de forma progresiva, preferentemente desde el centro hacia los extremos para expulsar las olas de tela.",
      "5. La máquina recorre el camino de forma fluida a máxima velocidad sin frenadas bruscas ni cortes mecánicos innecesarios."
    ],
    "beginnerExplanation": "Es el caminito que sigue la aguja mientras va bordando el dibujo. Imagina que es como caminar por una ciudad: si planificas bien tu camino, vas de una esquina a la otra rápido sin dar vueltas en círculos. En el bordado es igual: una buena trayectoria hace que la máquina cosa sin parar, sin cortar el hilo a cada rato y sin tironear de la tela, logrando que el bordado termine más rápido y quede prolijo.",
    "practicalExamples": [
      "Camino continuo entre letras de una palabra en cursiva utilizando ramificación automática (Auto-Branching).",
      "Trayectoria centrífuga en escudos grandes para evitar la formación de arrugas en el centro de la prenda.",
      "Conexión oculta de pequeños detalles del mismo color bajo un contorno perimetral negro."
    ],
    "matrixParametersRelation": [
      "Puntos de conexión (Connectors): definición de saltos directos, cortes de hilo (Trim) o puntadas de corrida para enlazar objetos.",
      "Optimización de tiempo de costura: una trayectoria eficiente puede reducir el tiempo total de máquina hasta en un 30%.",
      "Control de frunces: caminos mal planificados que van y vuelven en direcciones opuestas arrugan la tela en el centro de la figura."
    ],
    "commonErrors": [
      "Digitalizar objetos de forma aleatoria, obligando a la máquina a saltar de un extremo al otro del bastidor en cada letra.",
      "Dejar puntadas de viaje al descubierto sobre zonas de tela visible donde no se bordará nada encima.",
      "Bordar los contornos exteriores antes de terminar los rellenos interiores, provocando desfasajes por el encogimiento de la tela."
    ],
    "troubleshootingTips": [
      "Utiliza el reproductor de puntadas (Stitch Player / Slow Redraw) del software para ver la trayectoria animada en pantalla antes de bordar.",
      "Planifica la trayectoria siempre en el sentido natural de las agujas del reloj o desde el centro hacia afuera.",
      "Agrupa todos los objetos contiguos del mismo color para unificarlos en una trayectoria continua sin cortes intermedios."
    ],
    "whenToAdjust": "Rediseña la trayectoria en el software si notas que la máquina realiza cortes de hilo constantes para coser elementos que están pegados.",
    "dicaArtrelados": "El principio del río Artrelados para digitalizar: La trayectoria de costura debe fluir como un río de agua: suave, hacia adelante y sin remolinos. Si ves que en tu pantalla la aguja va y viene saltando como loca de una punta a la otra, detente: reordena los objetos para que la aguja viaje de forma armoniosa. Una matriz con una trayectoria fluida cose más rápido, no rompe hilos y deja una prenda lisa como una seda.",
    "voceSabia": "¿Sabías que los primeros programas de digitalización en los años 1980 no tenían herramientas automáticas de trayectoria y los ponchadores debían ingresar las coordenadas de cada puntada de viaje una por una con una tableta digitalizadora gigante?",
    "practicalExercise": "Abre una matriz de un nombre en tu software y activa la simulación lenta de costura. Observa el camino que hace el hilo: fíjate por dónde viaja entre letra y letra y detecta si hay saltos que podrías conectar de forma invisible.",
    "quickSummary": "Ruta secuencial planificada que sigue la aguja para bordar el diseño minimizando cortes, saltos y arrugas en la tela.",
    "summary": "Ruta secuencial planificada que sigue la aguja para bordar el diseño minimizando cortes, saltos y arrugas en la tela.",
    "relatedTerms": [
      "Branching / Ramificación Automática",
      "Puntada de Puente y Conexión (Bridge Stitch)",
      "Puntadas de Viaje Ocultas (Travel Runs)",
      "Software de Ponchado y Digitalización"
    ]
  }
}

content = """import { Verbete } from "../../types";

export const LOTE1_C_PART2_ES: Record<string, Partial<Verbete>> = """ + json.dumps(PART2_DATA, indent=2, ensure_ascii=False) + """;
"""

with open("src/data/lote1_c/part2.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated lote1_c part2.ts with {len(PART2_DATA)} verbetes.")

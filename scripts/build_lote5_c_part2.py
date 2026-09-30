import json

PART2_DATA = {
  "c-105-corpo-giratorio-lacadeira-carcaca-externa-gancho-rotativo": {
    "term": "Cuerpo Giratorio del Garfio Rotativo y Puntera de Lanzadera",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del diseño cinemático de garfio rotativo de doble rotación (Rotary Hook Outer Body & Driving Shell) inventado para pespunte industrial de alta velocidad.",
    "definition": "Carcasa exterior cilíndrica de acero templado y rectificado montada sobre el árbol inferior de la máquina de bordar, dotada de una puntera afilada templada (Hook Point), una pista de deslizamiento interna pulida y aletas deflectoras, que gira de forma continua a 360 grados al doble de revoluciones del árbol superior para capturar el lazo del hilo de la aguja y expandirlo alrededor de la caja de bobina.",
    "howItWorks": [
      "1. Por cada ciclo de penetración de la aguja (una puntada), el cuerpo giratorio del garfio da dos giros completos de 360 grados.",
      "2. En el primer giro, cuando la aguja asciende de 1,8 mm a 2,2 mm desde su punto muerto inferior, la puntera del garfio pasa a una distancia micrométrica de 0,05 mm del chaflán de la aguja.",
      "3. La puntera penetra en el lazo formado por el hilo superior atrapándolo limpiamente.",
      "4. Al continuar el giro, el contorno exterior de la carcasa expande el lazo guiándolo sobre la cesta estacionaria y alrededor de la caja de la bobina.",
      "5. En el segundo giro (giro ciego), el tirahilos recupera el hilo superior cerrando la puntada en el tejido mientras el garfio completa su ciclo cinemático.",
    ],
    "beginnerExplanation": "Es la pieza de metal brillante con forma de gancho afilado que gira como loca en la parte de abajo de la máquina. Gira dos veces por cada puntada: en la primera vuelta, su puntita afilada pasa rozando la aguja y 'pesca' el hilito de arriba justo cuando se forma un globito, lo hace girar alrededor del carretel de abajo para abrazar el hilo blanco y forma la puntada. Es una de las piezas más precisas y delicadas de toda la máquina.",
    "practicalExamples": [
      "Sincronización milimétrica del tiempo de garfio (Hook Timing) respecto a la aguja.",
      "Inspección y pulido con lija de agua de la puntera tras un impacto por aguja doblada.",
      "Lubricación con una gota de aceite mineral cada 4 a 6 horas de trabajo continuo."
    ],
    "matrixParametersRelation": [
      "Distancia de separación de la aguja (Hook Clearance): calibrada entre 0,03 mm y 0,08 mm (el grosor de un cabello humano).",
      "Altura de sincronización: la puntera debe pasar exactamente entre 0,5 mm y 1,0 mm por encima del ojo de la aguja.",
      "Rotación al doble de velocidad: gira a 2000 RPM cuando la máquina cose a 1000 PPM."
    ],
    "commonErrors": [
      "Seguir bordando con la puntera mellada por un choque de aguja, deshilachando y cortando el hilo superior en cada puntada.",
      "Dejar secar el garfio sin aceite mineral, provocando calentamiento extremo y agarrotamiento mecánico.",
      "Tocar los tornillos de ajuste del engranaje del garfio sin conocimiento técnico de sincronización de grados."
    ],
    "troubleshootingTips": [
      "Aplica una sola gota de aceite mineral blanco en la pista de giro del garfio al inicio de cada jornada de trabajo.",
      "Pasa una uña por la punta del gancho: si sientes que raspa o está mellada, púlela suavemente con una tira de lija al agua grano 2000.",
      "Limpia las pelusas y restos de hilo atrapados en el interior del cuerpo giratorio con un pincel seco antes de lubricar."
    ],
    "whenToAdjust": "Revisa la puntera del garfio inmediatamente después de cualquier colisión violenta donde la aguja se haya partido en la placa.",
    "dicaArtrelados": "El tip del pañuelo de seda Artrelados para probar el gancho: Si tienes dudas de si la puntera del garfio quedó dañada tras romperse una aguja, toma una media fina de mujer (cancán de nylon) y pásala despacio por la punta del garfio. Si la media se engancha o se corre un hilo, la punta tiene una rebaba invisible al ojo. Púlela con lija 2000 hasta que la media resbale como mantequilla sin engancharse.",
    "voceSabia": "¿Sabías que los garfios rotativos fueron inventados por Allen B. Wilson en 1851 en Estados Unidos y que su principio cinemático de giro continuo fue lo que permitió que las máquinas superaran los límites de velocidad de las antiguas lanzaderas oscilantes?",
    "practicalExercise": "Gira el volante de tu máquina lentamente hacia ti con la mano mirando la zona de la lanzadera sin la placa de aguja: observa cómo la afilada punta del garfio pasa por detrás del huequito de la aguja atrapando el lazo en una fracción de segundo.",
    "quickSummary": "Carcasa giratoria exterior con punta afilada que gira a 360° para pescar el lazo del hilo superior en cada puntada.",
    "summary": "Carcasa giratoria exterior con punta afilada que gira a 360° para pescar el lazo del hilo superior en cada puntada.",
    "relatedTerms": [
      "Garfio Rotativo",
      "Cesta del Garfio Rotativo y Portacápsula",
      "Sincronización Mecánica del Garfio (Timing)",
      "Caja de Bobina"
    ]
  },

  "c-039-correcao-de-pontos": {
    "term": "Edición y Corrección Manual de Puntadas",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "De las herramientas de edición a nivel de nodo y lista de comandos binarios (Stitch Edit Mode) presentes en los softwares profesionales de ponchado.",
    "definition": "Operación de precisión quirúrgica digital dentro del software de bordado que permite al digitalizador o bordador seleccionar, mover, añadir o eliminar penetraciones de aguja individuales puntada por puntada, corregir saltos innecesarios, reubicar comandos de corte defectuosos o reparar micro-nudos sin alterar el resto de los objetos de la matriz.",
    "howItWorks": [
      "1. El operador activa el 'Modo de Edición de Puntadas' (Stitch Edit Mode / Point Mode) en el software.",
      "2. El diseño muestra cada penetración de aguja individual representada por una pequeña cruz o nodo vectorial.",
      "3. Se localiza la puntada problemática (por ejemplo, una puntada que quedó en el aire o una penetración que troquela la tela).",
      "4. El operador puede hacer clic sobre el nodo y arrastrarlo a una nueva coordenada cartesiana, o presionar la tecla Delete para eliminarlo.",
      "5. Permite insertar manualmente comandos de parada (Stop), comandos de corte de hilo (Trim) o cambiar el orden de una puntada aislada.",
      "6. El software recalcula la lista binaria de instrucciones preservando la integridad del diseño final.",
    ],
    "beginnerExplanation": "Es como usar una pincita de depilar digital para acomodar puntadita por puntadita en la computadora. Si compraste o descargaste un diseño y ves que tiene una sola puntada rebelde que quedó clavando en el aire afuera del dibujo, o dos puntaditas que se enciman y rompen el hilo, entras a este modo, agarras esa puntadita con el mouse y la borras o la corres al lugar correcto. Es la herramienta definitiva para pulir detalles.",
    "practicalExamples": [
      "Eliminación de micro-puntadas residuales menores a 0,4 mm en las esquinas de letras pequeñas.",
      "Inserción manual de un comando de corte de hilo entre dos objetos que estaban unidos por una hebra larga.",
      "Acomodamiento de la última puntada de un contorno fino para cerrar una unión sin bultos."
    ],
    "matrixParametersRelation": [
      "Edición a nivel de máquina: trabaja directamente sobre las instrucciones de bajo nivel (coordenadas X, Y y bytes de función).",
      "Preservación de comandos de función: permite revisar que los códigos de corte (Trim) y cambio de color estén en la posición exacta.",
      "Inmutabilidad del objeto paramétrico: al editar puntadas individuales, algunos programas convierten el objeto a bloque de puntada pura."
    ],
    "commonErrors": [
      "Borrar puntadas de anclaje de remate (Tie-in / Tie-off) por error, haciendo que el bordado se desarme al cortar el hilo.",
      "Mover puntadas al azar sin verificar la simulación previa, generando saltos de aguja largos imprevistos.",
      "Modificar miles de puntadas a mano en vez de corregir las propiedades del objeto paramétrico en el software."
    ],
    "troubleshootingTips": [
      "Utiliza el zoom al 1000% y la vista de aguja lenta (Slow Redraw) para identificar exactamente cuál es la puntada que falla.",
      "Guarda siempre una copia de seguridad de tu archivo antes de iniciar una edición manual de puntadas.",
      "Usa la edición de puntadas como último recurso de afinación fina: si el problema es general, ajusta los parámetros de objeto."
    ],
    "whenToAdjust": "Utiliza la edición de puntadas cuando un diseño presente una sola falla puntual o un nudo molesto en un área específica.",
    "dicaArtrelados": "El tip del bisturí digital Artrelados: Si compraste una matriz de internet que borda hermosa pero al final de una letra hace un corte de hilo y deja un nudo feo arriba, ábrela en tu software en modo puntada. Busca el último puntito, bórralo y mueve el penúltimo medio milímetro hacia adentro del satín. Guardas el archivo y ¡listo!: el nudo quedará 100% escondido y tu cliente verá un acabado de sastrería.",
    "voceSabia": "¿Sabías que los primeros operadores de máquinas de bordar automáticas de los años 1970 corregían las puntadas físicas una por una tapando los agujeritos de las cintas de papel perforado con cinta adhesiva negra y volviendo a perforar con un punzón manual?",
    "practicalExercise": "Abre un diseño sencillo en tu software. Activa el modo de edición de puntadas: haz clic sobre una puntada de la esquina, muévela 2 milímetros hacia afuera con el mouse y mira en la vista 3D cómo se alteró el recorrido. Presiona Ctrl+Z para devolverla a su sitio y domina la herramienta.",
    "quickSummary": "Herramienta digital que permite mover, añadir o borrar penetraciones de aguja individuales para pulir detalles.",
    "summary": "Herramienta digital que permite mover, añadir o borrar penetraciones de aguja individuales para pulir detalles.",
    "relatedTerms": [
      "Software de Ponchado y Digitalización",
      "Longitud de Puntada de Bordado",
      "Comandos de Corte de Hilo (Trimmer Codes)",
      "Puntada de Remate (Lock Stitch)"
    ]
  },

  "c-060-correia-dentada-do-pantografo-e-eixo-xy": {
    "term": "Correa Dentada Sincronizada del Pantógrafo",
    "level": "Avanzado 🔴",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución nominal femenina",
    "origin": "De las correas sincrónicas de distribución de perfil curvilíneo (Timing Belts HTD / GT2) desarrolladas para transmisión de movimiento sin holgura angular (Zero-Backlash).",
    "definition": "Banda flexible continua de poliuretano termoplástico o caucho sintético reforzada internamente con cordones longitudinales de acero trenzado o fibra de vidrio, dotada de dientes moldeados con paso milimétrico de alta precisión (comúnmente 2 mm o 3 mm) que engranan con las poleas motrices de los servomotores X e Y para trasladar el pantógrafo sin deslizamiento ni elongación elástica.",
    "howItWorks": [
      "1. La polea motriz dentada del servomotor engrana con los dientes de la correa transmitiendo par motor instantáneo.",
      "2. Los cordones internos de acero absorben las violentas fuerzas de aceleración y frenado del pantógrafo sin estirarse.",
      "3. La correa traslada el carro del bastidor a lo largo de las guías lineales de acero templado.",
      "4. Un tensor mecánico de resorte o tornillo regulador mantiene la correa con una tensión estática calibrada (típicamente entre 15 y 25 Newtons).",
      "5. Garantiza que un desplazamiento de 100 pulsos de motor se traduzca exactamente en 1,00 mm de movimiento físico del aro en la tela.",
    ],
    "beginnerExplanation": "Es la correa con dientitos de goma reforzada con alambres de acero que está escondida adentro de la máquina y que mueve el brazo del bastidor hacia adelante, atrás y los costados. Funciona igual que la cadena de una bicicleta pero con dientes de goma precisos: cada vez que el motor gira, la correa tira del bastidor para que la aguja caiga en el lugar exacto. Si la correa se afloja con los años, el dibujo queda deformado o los círculos salen ovalados.",
    "practicalExamples": [
      "Ajuste de tensión de las correas de los ejes X e Y tras 2000 horas de bordado industrial continuo.",
      "Sustitución de correas desgastadas que presentan dientes saltados o cuerdas de acero deshilachadas.",
      "Limpieza de pelusas textiles acumuladas en las ranuras de las poleas dentadas de aluminio."
    ],
    "matrixParametersRelation": [
      "Precisión de posicionamiento repetitivo: mantiene una tolerancia de centrado inferior a 0,05 mm entre miles de puntadas.",
      "Eliminación de juego mecánico (Backlash): una correa con la tensión correcta evita que los contornos se desfacen al cambiar de sentido de marcha.",
      "Resolución de pasos de motor: calibración del factor de pulsos por milímetro en la memoria de la máquina."
    ],
    "commonErrors": [
      "Tensar la correa con fuerza exagerada doblando los ejes de los motores paso a paso y quemando sus rodamientos.",
      "Dejar la correa demasiado floja, provocando que los bordados circulares queden achatados como huevos y los contornos desalineados.",
      "Permitir que caiga aceite de motor sobre las correas de poliuretano, degradando el polímero y ablandando los dientes."
    ],
    "troubleshootingTips": [
      "Verifica la tensión de la correa presionando con el pulgar en el centro: debe ceder unos 4 a 6 mm bajo presión moderada.",
      "Revisa que los dientes de la correa no tengan hilos enrollados ni pelusas apretadas en las ranuras de las poleas.",
      "Si notas que los círculos salen desfasados siempre hacia el mismo lado, calibra la tensión de la correa de ese eje."
    ],
    "whenToAdjust": "Comprueba y calibra la tensión de las correas dentadas del pantógrafo cada año o si observas círculos ovalados.",
    "dicaArtrelados": "La prueba del círculo perfecto Artrelados para correas: Si dudas de si las correas de tu máquina están flojas, borda un círculo simple de 5 cm de diámetro en una tela rígida con entretela firme. Mídelo con un calibre o regla milimétrica en sentido horizontal y vertical. Si mide 50 mm en un sentido y 48 mm en el otro, ¡la correa de ese eje está floja! Un ajuste de tornillo de 5 minutos te devolverá la precisión de fábrica.",
    "voceSabia": "¿Sabías que los finos filamentos de acero trenzado que están dentro de las correas dentadas de las máquinas de bordar profesionales tienen una resistencia a la tracción superior a los 500 kilos, impidiendo que la correa se alargue incluso tras bordar más de 50 millones de puntadas?",
    "practicalExercise": "Con la máquina apagada, retira la tapa de servicio del brazo del pantógrafo: observa la correa dentada negra y su polea dentada de aluminio. Presiona suavemente con el dedo para sentir la firme tensión elástica con la que está calibrada.",
    "quickSummary": "Banda dentada con alma de acero que transmite el movimiento sincrónico de los servomotores al carro del bastidor sin holgura.",
    "summary": "Banda dentada con alma de acero que transmite el movimiento sincrónico de los servomotores al carro del bastidor sin holgura.",
    "relatedTerms": [
      "Carro Móvil del Pantógrafo de Bordado",
      "Carro Eje Y del Pantógrafo",
      "Pantógrafo de Máquina de Bordar",
      "Servomotor de Árbol Principal"
    ]
  },

  "c-089-cortador-circular-rotativo-apliques": {
    "term": "Cúter Circular Rotativo para Apliques y Parches",
    "level": "Iniciante 🟢",
    "category": "Equipamiento & Herramientas",
    "grammarClass": "Locución nominal masculina",
    "origin": "Inventado en 1979 por la corporación japonesa Olfa (Rotary Cutter) para la industria de la costura y el acolchado de precisión.",
    "definition": "Herramienta manual de corte de alta precisión equipada con un mango ergonómico y una cuchilla circular giratoria de acero al tungsteno templado (comúnmente de 28 mm o 45 mm de diámetro), utilizada conjuntamente con una base de corte autorregenerable (Cutting Mat) y reglas acrílicas para cortar telas de aplique, sintéticos y parches con bordes limpios sin deshilachado.",
    "howItWorks": [
      "1. La cuchilla circular gira sobre su eje central a medida que la bordadora presiona y rueda la herramienta hacia adelante.",
      "2. El filo continuo de acero al tungsteno corta múltiples capas de tela con una sola pasada y sin ejercer fuerza de cizallamiento.",
      "3. A diferencia de las tijeras comunes que levantan la tela de la mesa, el cúter mantiene la tela 100% plana sobre la base de corte.",
      "4. Permite recortar tiras rectas perfectas, cuadrados para fondos y piezas de aplicación con tolerancia menor a 0,5 mm.",
      "5. Incorpora una guarda protectora de seguridad retráctil que cubre el filo cuando la herramienta no está en uso.",
    ],
    "beginnerExplanation": "Es como un cortador de pizza pero con una hoja circular de acero tan filosa como un bisturí. En vez de cortar con tijera levantando la tela (lo que hace que los bordes queden chuecos), apoyas la tela sobre una plancha de corte, pones la regla encima y pasas esta ruedita rodando: ¡corta hasta 5 telas juntas como si fueran manteca! Es la herramienta número uno para preparar telas de apliques y cortar parches en segundos.",
    "practicalExamples": [
      "Corte rápido de 50 cuadrados de tela de sarga para confección seriada de parches termoadhesivos.",
      "Corte milimétrico de tiras de tela para bies y pestañas de cierre en proyectos ITH.",
      "Recorte de entretelas pesadas y guatas de acolchado sin cansar las manos con tijeras duras."
    ],
    "matrixParametersRelation": [
      "Ajuste milimétrico a las líneas de colocación (Placement Lines): las piezas cortadas con cúter calzan exactamente dentro de la silueta bordada.",
      "Bordes libres de hilos deshilachados: facilita que la puntada de festón o satín cubra el borde del aplique en una sola pasada.",
      "Ahorro de tiempo operativo: reduce el tiempo de preparación de telas en un 70% frente al uso de tijeras manuales."
    ],
    "commonErrors": [
      "Usar el cúter circular sobre mesas de madera o vidrio común sin plancha de corte, arruinando el filo de la cuchilla en dos pasadas.",
      "Dejar el cúter abierto con la cuchilla expuesta sobre la mesa de trabajo, provocando cortes accidentales graves en los dedos.",
      "Cortar sin presionar firmemente la regla acrílica, permitiendo que la cuchilla se desvíe y corte la regla plástica."
    ],
    "troubleshootingTips": [
      "Utiliza siempre una base de corte autorregenerable (Cutting Mat) de color verde para proteger tu mesa y prolongar el filo de la hoja.",
      "Cierra la traba de seguridad de la cuchilla cada vez que sueltes el cúter de la mano: conviértelo en un reflejo automático.",
      "Cambia la hoja circular cuando sientas que tienes que hacer fuerza o cuando deje pequeños hilos sin cortar a su paso."
    ],
    "whenToAdjust": "Reemplaza la hoja circular de acero cuando notes que saltan pequeños tramos sin cortar al rodar la herramienta.",
    "dicaArtrelados": "El hábito de seguridad de oro Artrelados: El filo de un cúter circular es tan filoso como el bisturí de un cirujano. Cada vez que termines de hacer un corte, activa el seguro de la cuchilla con el pulgar ANTES de apoyar el cúter sobre la mesa. Ese hábito de un segundo evitará accidentes y protegerá tus manos para que sigas bordando feliz toda la vida.",
    "voceSabia": "¿Sabías que el fundador de la empresa japonesa Olfa inventó el cúter circular rotativo inspirándose en la forma en que los pizzeros italianos cortaban las masas recién salidas del horno con una rueda rodante de acero?",
    "practicalExercise": "Coloca tres retazos de tela superpuestos sobre tu base de corte. Apoya una regla acrílica encima y pasa el cúter circular rodando con presión firme y pareja hacia adelante: maravíllate viendo cómo las tres capas quedan cortadas con un borde perfecto y liso como un espejo.",
    "quickSummary": "Herramienta con cuchilla circular giratoria de acero que corta múltiples capas de tela de forma plana y limpia para apliques.",
    "summary": "Herramienta con cuchilla circular giratoria de acero que corta múltiples capas de tela de forma plana y limpia para apliques.",
    "relatedTerms": [
      "Bordado con Aplicación de Telas",
      "Llaveros y Monederos en el Bastidor con Sintético Montana",
      "Borde Sellado por Láser y Corte Térmico de Emblemas",
      "Equipamiento & Herramientas"
    ]
  },

  "c-102-cortador-de-fio-superior-inferior-guilhotina-linha": {
    "term": "Mecanismo Cortahilos de Cuchilla Móvil y Fija",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del sistema cinemático de corte de hilo tipo guillotina tijera (Thread Trimmer Knife Mechanism) introducido por Tajima en 1980.",
    "definition": "Subconjunto mecánico de corte montado debajo de la placa de aguja compuesto por una cuchilla móvil con gancho de captura (Moving Knife) impulsada por un solenoide o leva excéntrica y una contracuchilla fija afilada (Fixed Knife), encargado de atrapar simultáneamente el hilo superior y el hilo de la bobina inferior y cortarlos en el grado angular exacto tras una orden de la matriz.",
    "howItWorks": [
      "1. Al finalizar un bloque de color o recibir un comando de salto largo, la CPU detiene el cabezal e inicia el ciclo de corte.",
      "2. El solenoide eléctrico o leva mecánica extiende la cuchilla móvil deslizándola hacia adelante bajo la placa de aguja.",
      "3. La punta en forma de anzuelo de la cuchilla móvil ingresa en la zona de la lanzadera y atrapa tanto el hilo superior como el hilo de canilla.",
      "4. La cuchilla móvil retrocede tirando de ambos hilos hacia la contracuchilla fija de acero templado.",
      "5. El filo de ambas piezas actúa con efecto tijera o guillotina cortando limpiamente ambos hilos a la vez.",
      "6. Una pequeña lámina de resorte o pinza retiene la punta del hilo cortado para evitar que se desenebre al reiniciar la costura.",
    ],
    "beginnerExplanation": "Es la pequeña tijera mecánica automática que está escondida abajo de la chapita de la máquina. Cuando el dibujo termina de coser un color o tiene que viajar lejos a otra letra, un bracito de metal con forma de ganchito sale volando por abajo, agarra el hilo de arriba y el hilo de abajo juntos, y los tira contra una cuchilla fija bien afilada para cortarlos de un solo golpe limpio. Así te ahorras tener que cortar miles de hilos a mano con la tijera.",
    "practicalExamples": [
      "Corte automático y sincronizado de hilos al cambiar de color en máquinas multiaguja.",
      "Corte de hebras puente entre letras separadas en textos corporativos a 1000 PPM.",
      "Ajuste y afilado de la contracuchilla fija durante el mantenimiento anual de la máquina."
    ],
    "matrixParametersRelation": [
      "Sincronización angular de corte: el accionamiento ocurre estrictamente cuando la aguja está arriba (entre 280° y 310° de rotación).",
      "Longitud de cola remanente de inicio: calibrada para dejar una colita de 3 a 5 mm que permite arrancar la siguiente figura sin soltarse.",
      "Comandos de corte en la matriz (Trim Codes): instrucciones digitales que disparan el circuito de corte."
    ],
    "commonErrors": [
      "Permitir la acumulación de bolas de pelusa compactada entre la cuchilla móvil y fija, impidiendo que el filo cierre y dejando el hilo sin cortar.",
      "Cuchilla fija desafilada o mellada por haber atrapado hilos metálicos gruesos o trozos de alambre.",
      "Desincronización mecánica que provoca que la cuchilla choque contra la aguja mientras está abajo."
    ],
    "troubleshootingTips": [
      "Retira la placa de aguja una vez por semana y limpia con una brocha seca las pelusas alrededor de las cuchillas de corte.",
      "Si la máquina hace el ruido de corte pero el hilo no se corta, reemplaza la cuchilla fija: suele costar pocos dólares y renueva el corte al 100%.",
      "Aplica una gota de aceite mineral fino en la guía deslizante de la cuchilla móvil durante el mantenimiento preventivo."
    ],
    "whenToAdjust": "Revisa las cuchillas si notas que la máquina intenta cortar el hilo pero deja colas largas deshilachadas o hilos sin cortar.",
    "dicaArtrelados": "El tip del cepillito para el cortahilos Artrelados: Si de repente tu máquina deja de cortar el hilo y empieza a avisar error de corte, el 95% de las veces no es que las cuchillas se rompieron: es simplemente una pequeña bolita de pelusa dura que se metió entre las dos cuchillas e impide que se toquen. Saca la placa, pasa un cepillito de cerdas duras para sacar la pelusa y volverá a cortar perfecto como una navaja suiza.",
    "voceSabia": "¿Sabías que las cuchillas fijas de los cortahilos industriales están fabricadas con carburo de tungsteno, un material casi tan duro como el diamante, capaz de realizar más de un millón de cortes continuos antes de requerir afilado?",
    "practicalExercise": "Retira la placa de aguja de tu máquina. Con la máquina apagada, busca el mecanismo cortahilos inferior: observa la cuchilla móvil pulida con su pequeño gancho receptor y la pequeña contracuchilla fija contra la que roza.",
    "quickSummary": "Mecanismo inferior con cuchilla móvil y fija que corta automáticamente el hilo superior y de bobina con efecto tijera.",
    "summary": "Mecanismo inferior con cuchilla móvil y fija que corta automáticamente el hilo superior y de bobina con efecto tijera.",
    "relatedTerms": [
      "Corte Automático de Hilo del Sistema Trimmer",
      "Leva de Accionamiento del Cortahilos",
      "Comandos de Corte de Hilo (Trimmer Codes)",
      "Corte Inferior de Hilo de Canilla"
    ]
  },

  "c-007-corte-automatico-de-linha": {
    "term": "Corte Automático de Hilo del Sistema Trimmer",
    "level": "Iniciante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del término industrial automático Trimmer System desarrollado para eliminar el desbastado manual de hebras en la industria textil seriada.",
    "definition": "Función electromecánica integrada en la máquina de bordar que ejecuta automáticamente el seccionamiento simultáneo del hilo superior y del hilo de la bobina al concluir cada bloque de color, al finalizar el diseño o al realizar desplazamientos de salto que superan la longitud programada, ahorrando hasta un 40% del tiempo de acabado manual de la prenda.",
    "howItWorks": [
      "1. La CPU de la máquina lee el comando de corte (Trim) programado en el archivo de la matriz.",
      "2. El motor principal frena el árbol superior con la aguja detenida en su punto muerto superior fuera de la tela.",
      "3. El solenoide de corte activa el brazo de la cuchilla móvil bajo la placa de aguja.",
      "4. Las cuchillas cortan el hilo superior y el hilo de la canilla simultáneamente por debajo de la tela.",
      "5. El pantógrafo se desplaza libremente al siguiente punto sin arrastrar hebras de hilo visibles sobre la superficie de la prenda.",
    ],
    "beginnerExplanation": "Es la función más amada por todas las bordadoras: la máquina corta el hilo sola cada vez que termina una letra o cambia de color. En las máquinas más viejas o muy básicas, cada vez que la máquina terminaba un pedacito tenías que pararla, agarrar la tijera y cortar el hilo a mano. Con el cortahilos automático, la máquina hace todo el trabajo limpio y rápido por ti, dejando la prenda lista para entregar.",
    "practicalExamples": [
      "Corte automático de hilo entre las letras de un nombre personalizado sin dejar puentes de hilo.",
      "Corte limpio al concluir cada bloque de color antes de que el cabezal multiaguja cambie a la siguiente barra.",
      "Corte final automático al terminar la última puntada de la matriz para poder retirar el bastidor sin tijeras."
    ],
    "matrixParametersRelation": [
      "Comandos Trim en la matriz: códigos binarios insertados en el software de ponchado entre objetos separados.",
      "Puntadas de remate previas (Tie-off): el cortahilos siempre debe ir precedido de micro-remates para que la costura no se desarme.",
      "Retención de colita de inicio: la pinza superior sostiene la colita cortada para que la aguja no se desenebre al volver a arrancar."
    ],
    "commonErrors": [
      "Digitalizar matrices sin comandos de corte entre figuras lejanas, dejando hilos cruzados por toda la prenda.",
      "Activar cortes de hilo en letras minúsculas cursivas muy pegadas, ralentizando la máquina innecesariamente.",
      "Olvidar limpiar las pelusas de la zona de corte provocando fallas intermitentes del cortahilos."
    ],
    "troubleshootingTips": [
      "Verifica en la pantalla táctil de la máquina que el icono del cortahilos (símbolo de tijerita) esté encendido y activado.",
      "En el software de ponchado, configura el corte automático para saltos mayores a 4 mm o 5 mm.",
      "Si la aguja se desenebra al reanudar después de un corte, revisa la tensión de la pinza de retención superior de hilo."
    ],
    "whenToAdjust": "Activa o desactiva la función de cortahilos en el panel de la máquina según el tipo de matriz que vayas a bordar.",
    "dicaArtrelados": "El tip de producción veloz Artrelados: Si estás bordando un texto cursivo largo con letras que están casi pegadas unas con otras, desactiva el cortahilos automático en esa sección en tu software y deja que la máquina cosa de corrido. Cortarás los pequeños puentes de hilo con tijera en 20 segundos al final, y la máquina bordará el texto en la mitad de tiempo sin frenadas continuas.",
    "voceSabia": "¿Sabías que una bordadora industrial que borda 100 prendas al día con corte automático se ahorra más de 2 horas de trabajo manual diario que antes se gastaban recortando hilos con tijeras?",
    "practicalExercise": "Borda un diseño con tres estrellas separadas con el botón de cortahilos encendido en la máquina. Observa cómo al terminar cada estrella la máquina hace un clic sutil, corta el hilo por abajo y salta a la siguiente estrella dejando la tela limpia de hebras.",
    "quickSummary": "Función automática que corta los hilos superior e inferior al terminar bloques de color o saltos largos.",
    "summary": "Función automática que corta los hilos superior e inferior al terminar bloques de color o saltos largos.",
    "relatedTerms": [
      "Mecanismo Cortahilos de Cuchilla Móvil y Fija",
      "Funciones y Parámetros del Cortahilos Automático",
      "Comandos de Corte de Hilo (Trimmer Codes)",
      "Longitud de Salto de Puntada"
    ]
  },

  "c-019-corte-automatico-de-linha-funcoes": {
    "term": "Funciones y Parámetros del Cortahilos Automático",
    "level": "Intermedio 🟡",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "De los menús de configuración avanzada de corte por software (Trimmer Settings & Parameters) en máquinas computarizadas modernas.",
    "definition": "Conjunto de opciones y parámetros configurables en la pantalla táctil de la máquina de bordar que permiten personalizar el comportamiento del sistema cortahilos, incluyendo la activación/desactivación global del corte, la distancia mínima de salto para ejecutar el corte, la longitud de la cola remanente y la velocidad del ciclo de seccionamiento.",
    "howItWorks": [
      "1. El operador ingresa a la pestaña 'Configuración de Costura / Cortahilos' en el menú de la consola.",
      "2. Se establece la 'Distancia de Salto para Corte' (Jump Trim Distance): típicamente regulable entre 2 mm y 10 mm.",
      "3. Se activa la opción de 'Corte al final del color' (Color Change Trim) para cambiar de aguja con hilos cortados.",
      "4. Se configura la 'Longitud de cola inicial' (Initial Tail Length): corta, media o larga, para asegurar que la aguja no se desenebre.",
      "5. El procesador aplica estos parámetros dinámicamente durante la lectura de cada bloque de la matriz.",
    ],
    "beginnerExplanation": "Son los controles en la pantalla de la máquina donde tú decides cómo quieres que corte la tijerita automática. Puedes decirle a la máquina: 'corta solo cuando el salto sea de más de medio centímetro', 'deja la colita del hilo un poquito más larga para que no se salga de la aguja al arrancar' o 'apaga la tijera para este diseño'. Te da el control total de la prolijidad de tu bordado.",
    "practicalExamples": [
      "Ajuste de la cola inicial a 'Larga' cuando se trabaja con hilos metálicos resbaladizos que tienden a salirse de la aguja.",
      "Configuración de salto a 3 mm para eliminar cortes manuales en tipografías imprenta con letras separadas.",
      "Desactivación del cortahilos en técnicas de calado o bordados rústicos continuos."
    ],
    "matrixParametersRelation": [
      "Prioridad de máquina vs. matriz: definir si prevalecen las órdenes del archivo digital o las reglas globales de la máquina.",
      "Compatibilidad con formatos neutros (.DST): permite a la máquina ejecutar cortes por conteo de saltos (Jump Counting) aunque el archivo no tenga códigos explícitos de corte.",
      "Sensibilidad a paradas de seguridad: cancelación del corte si se detecta un atasco en la lanzadera."
    ],
    "commonErrors": [
      "Configurar la cola inicial como 'Muy Corta' con hilos resbaladizos, provocando que la aguja se desenebre en el primer pespunte tras cada corte.",
      "Ajustar la distancia de salto a un valor menor que el espaciado de las letras, obligando a la máquina a cortar en cada milímetro.",
      "Desactivar el cortahilos global por error y preguntarse por qué la máquina deja hilos cruzados por toda la prenda."
    ],
    "troubleshootingTips": [
      "Si la aguja se desenebra constantemente al iniciar un nuevo color, entra al menú y selecciona 'Cola de hilo: Media o Larga'.",
      "Para la mayoría de los trabajos, configura la distancia de corte de salto en 4 mm o 5 mm.",
      "Verifica si tu máquina reconoce el código 'Corte por 3 saltos consecutivos' en archivos de formato .DST antiguo."
    ],
    "whenToAdjust": "Modifica estos parámetros cada vez que cambies entre hilos estándar de poliéster e hilos resbaladizos o metálicos.",
    "dicaArtrelados": "El tip de la colita larga para hilos rebeldes Artrelados: Si estás bordando con hilo dorado o plateado y cada vez que la máquina corta el hilo se te sale de la aguja y tienes que volver a enhebrar, entra al menú de configuración del cortahilos en la pantalla y pon la cola de hilo en 'Larga' (o sube 2 segundos el tiempo del tirahilos). La máquina dejará un centímetro más de hilo colgando de la aguja y nunca más se desenebrará al arrancar.",
    "voceSabia": "¿Sabías que los procesadores de las máquinas industriales modernas tienen una función inteligente llamada 'Look-Ahead Trim' que mira las próximas 50 puntadas y decide automáticamente si vale la pena cortar el hilo o si es más rápido hacer un viaje oculto?",
    "practicalExercise": "Entra al menú de tu máquina y localiza la sección 'Ajustes de corte de hilo'. Observa las opciones de longitud de cola (Corta / Normal / Larga) y el valor de distancia de salto en milímetros para familiarizarte con su control.",
    "quickSummary": "Menú de control que permite graduar la distancia de salto, la longitud de la cola de hilo y el comportamiento del cortahilos.",
    "summary": "Menú de control que permite graduar la distancia de salto, la longitud de la cola de hilo y el comportamiento del cortahilos.",
    "relatedTerms": [
      "Corte Automático de Hilo del Sistema Trimmer",
      "Mecanismo Cortahilos de Cuchilla Móvil y Fija",
      "Longitud de Salto de Puntada",
      "Comandos de Corte de Hilo (Trimmer Codes)"
    ]
  },

  "c-079": {
    "term": "Corte Automático de Hilos de Salto y Conexión",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del concepto de automatización integral Auto-Jump Trimming que sustituyó el corte manual con tijeras de cigüeña al final del bordado.",
    "definition": "Proceso automatizado y coordinado entre el software de digitalización y el hardware de la máquina que detecta y corta sistemáticamente todas las hebras de hilo conectoras que se extienden entre objetos independientes de un diseño (como entre letras sueltas, estrellas o monogramas), garantizando que la prenda salga del bastidor con un frente limpio y sin puentes de hilo visibles.",
    "howItWorks": [
      "1. En el software de ponchado, el digitalizador activa la opción 'Cortar tras saltos de conexión' (Auto-Trim on Jumps).",
      "2. El software inserta automáticamente una secuencia de remate seguro (Tie-off) al terminar el objeto activo.",
      "3. Genera el código binario de corte de hilo (Trim Command) en el archivo.",
      "4. El pantógrafo salta con aguja arriba hasta el nuevo objeto sin arrastrar la hebra de color.",
      "5. La máquina ejecuta un micro-remate de inicio (Tie-in) y continúa bordando el nuevo elemento con total prolijidad.",
    ],
    "beginnerExplanation": "Es la función que se encarga de que no te queden hilitos cruzados entre las letras o dibujos como si fueran puentes colgantes. Imagina que bordas la palabra 'H O L A' con letras separadas: sin esta función, la máquina deja un hilo estirado de la H a la O, otro de la O a la L y otro de la L a la A, y tendrías que cortarlos todos con tijera después. Con esta función activada, la máquina corta solita entre letra y letra y la palabra queda impecable sin ningún hilo suelto.",
    "practicalExamples": [
      "Bordado de iniciales separadas en camisas de vestir de alta costura.",
      "Bordado de constelaciones de estrellas o lunares dispersos en mantas infantiles.",
      "Producción de escudos con letras imprenta mayúsculas donde cada letra debe quedar aislada y limpia."
    ],
    "matrixParametersRelation": [
      "Distancia umbral de activación: habitualmente programada a partir de 3 mm o 4 mm de salto en el software.",
      "Protección contra deshilachado: remates dobles automáticos antes de cada orden de corte para que las letras no se desarmen.",
      "Equilibrio de tiempo de producción: un diseño con 50 cortes automáticos demora unos 60 segundos más pero ahorra 5 minutos de tijera manual."
    ],
    "commonErrors": [
      "Activar cortes automáticos en saltos microscópicos de menos de 1 mm, sobrecalentando el solenoide de corte.",
      "Olvidar incluir remates antes del corte, provocando que las primeras o últimas puntadas de las letras se deshilachen.",
      "No verificar en la simulación del software si el programa insertó los cortes en los lugares correctos."
    ],
    "troubleshootingTips": [
      "Activa siempre la opción 'Corte automático de saltos' en las propiedades de texto de tu software de digitalización.",
      "Configura una distancia mínima de salto de 3 mm para que no corte en uniones de letras que van pegadas.",
      "Revisa la vista previa de puntadas en pantalla: los cortes suelen mostrarse como pequeños triángulos o tijeritas sobre el camino del hilo."
    ],
    "whenToAdjust": "Activa el corte de saltos cada vez que digitalices textos con letras imprenta separadas o figuras dispersas.",
    "dicaArtrelados": "El tip de las letras separadas Artrelados: Si estás digitalizando un nombre en letra de imprenta (donde las letras no se tocan), activa siempre el corte automático de saltos en tu software. El bordado tardará unos segundos más en la máquina, pero cuando saques la prenda del bastidor no tendrás que pasar 10 minutos cortando hilos con tijerita con el peligro de picar la tela de tu cliente. ¡Saldrá perfecta y lista para embolsar!",
    "voceSabia": "¿Sabías que en las antiguas máquinas de bordar de los años 1980 las bordadoras tenían que contratar a personas exclusivamente dedicadas a 'desbastar' (cortar a mano con tijeras los hilos de salto de cada prenda), un oficio que desapareció con la invención del corte automático?",
    "practicalExercise": "Abre tu software y escribe un texto con letras mayúsculas imprenta. Activa la opción 'Cortar en saltos' y mira la simulación: observa cómo el hilo no viaja estirado entre letra y letra, sino que la máquina corta y reanuda limpiamente en cada carácter.",
    "quickSummary": "Automatización que corta sistemáticamente los hilos conectores entre letras y figuras para evitar el corte manual con tijera.",
    "summary": "Automatización que corta sistemáticamente los hilos conectores entre letras y figuras para evitar el corte manual con tijera.",
    "relatedTerms": [
      "Corte Automático de Hilo del Sistema Trimmer",
      "Longitud de Salto de Puntada",
      "Comandos de Corte de Hilo (Trimmer Codes)",
      "Puntada de Remate (Lock Stitch)"
    ]
  },

  "c-042-corte-de-apontamento-jump-cut": {
    "term": "Corte Selectivo de Hilos Puente y Saltos",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del término técnico Jump Cut (corte selectivo de puntadas de salto) en la ingeniería de control numérico textil.",
    "definition": "Estrategia de digitalización y programación que permite al diseñador decidir de forma selectiva y objeto por objeto si un salto determinado debe cortarse automáticamente con la cuchilla mecánica o dejarse como una puntada de puente continua para ser recortada manualmente o camuflada debajo de capas posteriores, optimizando el balance entre velocidad de producción y limpieza estética.",
    "howItWorks": [
      "1. El digitalizador analiza los desplazamientos del pantógrafo a lo largo de la matriz.",
      "2. En saltos largos expuestos sobre la tela limpia, se asigna obligatoriamente un código de corte (Jump Cut / Trim).",
      "3. En saltos cortos entre dos elementos contiguos que luego serán tapados por un relleno de fondo, se elimina la orden de corte.",
      "4. La máquina ejecuta un salto continuo a toda velocidad sin frenar el árbol principal ni activar el solenoide de las cuchillas.",
      "5. El hilo puente queda camuflado debajo del bordado posterior sin perder tiempo operativo y sin fatigar el mecanismo cortahilos.",
    ],
    "beginnerExplanation": "Es la decisión inteligente de elegir cuándo sí vale la pena cortar el hilo y cuándo conviene dejarlo pasar de largo. Si la máquina tiene que cortar el hilo en cada detalle chiquito, tarda una eternidad; pero si no corta en saltos largos, deja la ropa llena de hilos cruzados. Con esta técnica, le dices a la computadora: 'acá corta porque se va a ver feo, pero acá no cortes porque este hilito va a quedar tapado por el relleno de arriba'. Así tu máquina borda mucho más rápido.",
    "practicalExamples": [
      "Camuflaje de puntadas puente debajo de una capa de tatami negro de fondo.",
      "Corte obligado en saltos que cruzan sobre zonas de tela blanca visible.",
      "Optimización de matrices comerciales para reducir el tiempo de costura de 12 minutos a 8 minutos por prenda."
    ],
    "matrixParametersRelation": [
      "Propiedades de conexión de objeto (Connector Properties): configuración individual de cortes automáticos vs. saltos libres.",
      "Reducción de desgaste mecánico: cada ciclo de corte evitado prolonga la vida útil de cuchillas, solenoides y motores.",
      "Aceleración de producción seriada en pedidos de cientos de unidades."
    ],
    "commonErrors": [
      "Dejar hilos puente sin cortar sobre zonas donde no se bordará nada encima, obligando a un tedioso corte manual posterior.",
      "Cortar sistemáticamente en cada puntada de conexión en monogramas caligráficos fluidos.",
      "No colocar remates de seguridad al activar el corte selectivo en figuras aisladas."
    ],
    "troubleshootingTips": [
      "Revisa la matriz con la vista de 'Conectores' activa en tu software para ver con líneas punteadas dónde habrá cortes y dónde puentes.",
      "Si un salto va a quedar completamente cubierto por otra capa de puntadas, desactiva el corte: ahorrarás tiempo y la máquina no se frenará.",
      "Asegúrate de que todo salto que quede a la vista tenga su orden de corte y remate correspondiente."
    ],
    "whenToAdjust": "Aplica el corte selectivo al pulir y optimizar matrices para producción seriada en grandes cantidades.",
    "dicaArtrelados": "El tip de la producción inteligente Artrelados: Cada corte de hilo le toma a la máquina entre 3 y 5 segundos (frenar, cortar, acelerar y arrancar). Si un diseño tiene 30 cortes innecesarios, estás perdiendo más de 2 minutos por cada remera. En un pedido de 100 remeras, son más de 3 horas de máquina parada al vicio. Revisa tus conectores y elimina los cortes que queden tapados: ¡ganarás dinero y tiempo libre!",
    "voceSabia": "¿Sabías que los grandes digitalizadores industriales de marcas de ropa deportiva cobran bonificaciones especiales basadas en la cantidad de segundos que logran ahorrar en una matriz eliminando cortes innecesarios sin perder calidad estética?",
    "practicalExercise": "Abre un diseño con varios elementos en tu software. Abre la lista de conectores: cambia dos cortes que queden tapados por un salto directo sin corte. Borda el diseño y cronometra cómo el tiempo de máquina se reduce notablemente manteniendo la misma calidad.",
    "quickSummary": "Programación selectiva que decide cuándo cortar y cuándo dejar puentes de hilo para optimizar tiempo y calidad.",
    "summary": "Programación selectiva que decide cuándo cortar y cuándo dejar puentes de hilo para optimizar tiempo y calidad.",
    "relatedTerms": [
      "Corte Automático de Hilos de Salto y Conexión",
      "Puntadas de Viaje Ocultas (Travel Runs)",
      "Comandos de Corte de Hilo (Trimmer Codes)",
      "Longitud de Salto de Puntada"
    ]
  },

  "c-030-corte-de-bobina": {
    "term": "Corte Inferior de Hilo de Canilla",
    "level": "Intermedio 🟡",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del subsistema de corte inferior del garfio rotativo (Bobbin Thread Trimming) patentado para independizar el corte del hilo inferior.",
    "definition": "Acción mecánica sincronizada ejecutada por las cuchillas inferiores del sistema cortahilos que atrapa, tensa y secciona exclusivamente el hilo de la bobina inferior (canilla) en el momento del corte general, manteniendo retenido el cabo remanente bajo el muelle de la caja de bobina para asegurar la correcta formación del lazo en el siguiente inicio de costura.",
    "howItWorks": [
      "1. Al activarse el ciclo de corte, la cuchilla móvil bajo la placa avanza barriendo la zona superior de la caja de bobina.",
      "2. El gancho de la cuchilla atrapa la hebra que sube desde el muelle tensor de la canilla hacia la tela.",
      "3. La cuchilla móvil retrae el hilo inferior contra la contracuchilla fija cortándolo limpiamente.",
      "4. Un resorte retenedor o pinza inferior sostiene el extremo cortado del hilo de bobina con una longitud calibrada de 15 mm a 25 mm.",
      "5. Al descender la aguja en el nuevo inicio, la punta del garfio puede abrazar fácilmente el hilo inferior sin que la canilla se desenebre ni el hilo escape de la caja.",
    ],
    "beginnerExplanation": "Es el corte del hilito blanco de abajo que hace la máquina junto con el hilo de arriba. Es súper importante que este corte se haga bien: la máquina tiene que cortar el hilo que va a la tela pero dejar una 'colita' de hilo agarrada en la cajita de abajo. Si corta esa colita muy corta, en la próxima puntada la máquina no encuentra el hilo de abajo y no puede coser; y si la deja perfecta, arranca de inmediato sin fallar.",
    "practicalExamples": [
      "Corte limpio del hilo de bobina al cambiar de color en máquinas industriales.",
      "Retención de la colita inferior para evitar que el hilo se escape de la caja de bobina en arranques a 1000 PPM.",
      "Ajuste de la presión de la lámina retenedora inferior durante el mantenimiento de la lanzadera."
    ],
    "matrixParametersRelation": [
      "Longitud de colita remanente inferior: calibrada entre 18 mm y 25 mm dentro del alojamiento de la lanzadera.",
      "Coordinación con el corte superior: ambos hilos deben cortarse simultáneamente para evitar tirones asimétricos.",
      "Prevención de nudos en el revés: un corte limpio elimina colas largas que podrían ser atrapadas por las puntadas siguientes."
    ],
    "commonErrors": [
      "Cuchilla inferior desafilada que no corta el hilo de la canilla sino que lo desgarra o lo jala con fuerza sacando la canilla de su posición.",
      "Lámina retenedora vencida o sucia que no sostiene la colita del hilo de bobina, provocando que la aguja cosa 'en el aire' al reanudar.",
      "Acumulación de pelusas que traban el recorrido de la cuchilla móvil inferior."
    ],
    "troubleshootingTips": [
      "Retira la placa de aguja y sopla con aire seco la zona de la cuchilla inferior para despejar restos de hilos cortados.",
      "Comprueba que el resorte retenedor de hilo de bobina debajo de la placa no esté doblado ni deformado.",
      "Si al arrancar un nuevo bordado la máquina no agarra el hilo de abajo, verifica que la colita de la canilla no haya quedado demasiado corta tras el corte anterior."
    ],
    "whenToAdjust": "Revisa el mecanismo de corte inferior si la máquina corta el hilo superior pero el hilo blanco de abajo queda enganchado a la tela.",
    "dicaArtrelados": "El tip del arranque sin fallas Artrelados para el hilo de bobina: Si después de cada corte automático la máquina arranca y no agarra el hilo de abajo durante las primeras 3 puntadas, no toques el software: limpia la laminita retenedora que está abajo de la placa de aguja. Esa laminita es la que sostiene la colita del hilo blanco para que el garfio la pesque al arrancar. Límpiala con un trapito con alcohol y tus arranques volverán a ser 100% infalibles.",
    "voceSabia": "¿Sabías que los sistemas de corte inferior de las bordadoras de alta gama utilizan un soplido microscópico de aire comprimido sincronizado para dirigir la colita del hilo de bobina hacia la trampa de succión de pelusas y mantener la lanzadera siempre limpia?",
    "practicalExercise": "Haz un corte manual desde la consola de tu máquina. Retira el bastidor y mira el revés: observa el corte limpio del hilo blanco de la canilla y comprueba con una linterna cómo queda asomando una colita de 2 cm en la caja de bobina lista para la próxima puntada.",
    "quickSummary": "Seccionamiento coordinado del hilo inferior de la canilla que conserva una colita calibrada para el siguiente arranque.",
    "summary": "Seccionamiento coordinado del hilo inferior de la canilla que conserva una colita calibrada para el siguiente arranque.",
    "relatedTerms": [
      "Mecanismo Cortahilos de Cuchilla Móvil y Fija",
      "Corte Automático de Hilo del Sistema Trimmer",
      "Caja de Bobina",
      "Canilla e Hilo Inferior de Bobina"
    ]
  }
}

content = """import { Verbete } from "../../types";

export const LOTE5_C_PART2_ES: Record<string, Partial<Verbete>> = """ + json.dumps(PART2_DATA, indent=2, ensure_ascii=False) + """;
"""

with open("src/data/lote5_c/part2.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated lote5_c part2.ts with {len(PART2_DATA)} verbetes.")

import { Verbete } from "../../types";

export const LOTE3_B_PART1_ES: Record<string, Partial<Verbete>> = {
  "b-085-bloco-excentrico-do-estica-fio": {
    "term": "Bloque Excéntrico del Tirahilos",
    "level": "Avanzado 🔴",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín excentricus (fuera del centro geométrico) y del inglés thread take-up lever cam assembly. Mecanismo cinemático patentado en máquinas de bordar automáticas industriales.",
    "definition": "Conjunto mecánico de precisión montado sobre el árbol principal superior del cabezal de bordado, compuesto por una leva excéntrica de acero cementado y una biela oscilante que transforma la rotación continua del motor en el ciclo no simétrico de elevación y descenso sincronizado del tirahilos.",
    "howItWorks": [
      "1. La rotación continua del eje principal transmite movimiento a la leva excéntrica equilibrada mediante contrapesos dinámicos.",
      "2. El canal de la leva guía el rodillo de arrastre del tirahilos con un perfil asimétrico diseñado por computadora.",
      "3. Durante el descenso de la aguja, el tirahilos desciende rápidamente suministrando la longitud exacta de hilo superior para abrir el lazo.",
      "4. En el instante de cruce con la punta del garfio, el mecanismo retiene el hilo en reposo momentáneo.",
      "5. Cuando el lazo rodea la caja de bobina, la leva provoca una subida vertiginosa del tirahilos, cobrando el sobrante y ajustando el nudo con firmeza en el centro de la tela."
    ],
    "beginnerExplanation": "Es como el corazón mecánico que mueve la palanquita del tirahilos (esa que sube y baja rápido arriba de la aguja). Tiene una rueda con una forma especial que gira con el motor: cuando la aguja baja, le da hilo suelto; y cuando la aguja sube, la palanca pega un tirón rápido hacia arriba para ajustar el nudo del bordado. Si esta pieza tiene juego o suciedad, las puntadas quedan flojas o el hilo se rompe.",
    "practicalExamples": [
      "Sincronización del ángulo de subida del tirahilos en grados del dial mecánico tras una revisión mayor.",
      "Ajuste de la lubricación por mecha de fieltro en el canal excéntrico de máquinas Tajima y Barudan.",
      "Eliminación de ruidos secos de golpeteo en la parte superior del cabezal reemplazando el rodillo de leva gastado."
    ],
    "matrixParametersRelation": [
      "Tiempo de ajuste del nudo (Take-up timing): coincide con el ángulo de 280° a 310° del ciclo mecánico de la máquina.",
      "Tensión de hilo superior: una leva impecable permite trabajar con tensiones suaves en los discos tensores sin aflojar el nudo.",
      "Velocidad de bordado: levas equilibradas dinámicamente reducen las vibraciones armónicas a más de 1000 PPM."
    ],
    "commonErrors": [
      "Dejar secar la mecha de lubricación del bloque excéntrico, provocando agarrotamiento por fricción y rotura del tirahilos.",
      "Intentar regular la posición de la leva aflojando sus tornillos prisioneros sin un calibrador de grados angular.",
      "Permitir la entrada de polvo textil o fragmentos de hilo cortado en el canal de la leva."
    ],
    "troubleshootingTips": [
      "Aplica tres gotas de aceite mineral fino ISO VG 10 en la ranura de lubricación de la leva cada 40 horas de trabajo.",
      "Si los nudos quedan flojos en la cara inferior de la tela a pesar de apretar los tensores, verifica el desgaste del rodillo de la leva.",
      "Si el cabezal vibra excesivamente a 850 PPM, revisa la fijación del contrapeso excéntrico sobre el árbol principal."
    ],
    "whenToAdjust": "Inspecciona durante el mantenimiento preventivo anual o ante ruidos metálicos anormales en la parte superior del cabezal.",
    "dicaArtrelados": "El tip de mantenimiento preventivo Artrelados: El tirahilos se mueve tan rápido que en un solo día de trabajo sube y baja medio millón de veces. Una vez al mes, retira la tapa plástica superior de tu cabezal, limpia con un pincel limpio las pelusas acumuladas alrededor de la leva excéntrica y coloca una sola gota de aceite especial de máquina en la unión de la biela. Tu máquina bordará mucho más silenciosa y suave.",
    "voceSabia": "¿Sabías que el movimiento del tirahilos no es uniforme ni simétrico? Sube mucho más rápido de lo que baja: tarda apenas el 35% del tiempo del ciclo en dar el tirón ascendente para cerrar el nudo sin frenar el avance del bastidor.",
    "practicalExercise": "Gira el volante manual de tu máquina despacio con la mano. Observa con atención cómo la palanquita del tirahilos desciende suavemente mientras la aguja penetra la tela y luego se dispara hacia arriba en una fracción de segundo justo cuando la aguja sale. Esa velocidad asimétrica es obra de la leva excéntrica.",
    "quickSummary": "Mecanismo cinemático de leva asimétrica que sincroniza la subida y bajada veloz del tirahilos para cerrar cada nudo de puntada.",
    "relatedTerms": [
      "Tirahilos (Take-up Lever)",
      "Árbol Principal de la Máquina",
      "Sincronismo Mecánico (Timing)",
      "Aceite Textil ISO VG 10"
    ]
  },
  "b-057-bloco-tensor-e-discos-de-tensao-superiores": {
    "term": "Bloque Tensor y Discos de Tensión Superiores",
    "level": "Intermedio 🟡",
    "category": "Tensión & Mecánica",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín tensio (acción de estirar o aplicar fuerza restrictiva) y del inglés upper thread tension assembly.",
    "definition": "Conjunto regulador mecánico o electromagnético montado en el frontal del cabezal de bordado compuesto por dos discos pulidos de acero inoxidable presionados por un resorte calibrado y una perilla numerada, cuya función es aplicar la fricción constante y precisa requerida sobre el hilo superior antes de ingresar al tirahilos.",
    "howItWorks": [
      "1. El hilo superior desciende desde los guiahilos y pasa obligatoriamente entre los dos discos pulidos convexos.",
      "2. Al girar la perilla en sentido horario, el resorte interno helicoidal se comprime aumentando la presión entre los discos.",
      "3. La fricción controlada frena el flujo del hilo, generando la resistencia requerida medida en gramos-fuerza (gf).",
      "4. El resorte compensador de oscilación (Check Spring) absorbe los tirones bruscos durante el cambio de dirección del bastidor.",
      "5. En máquinas electrónicas modernas, un solenoide abre automáticamente los discos al cortar el hilo para facilitar el enhebrado."
    ],
    "beginnerExplanation": "Es la ruedita con números por donde pasa el hilo de bordar en la parte delantera de tu máquina. Adentro tiene dos platitos de metal apretados por un resorte. Si giras la ruedita apretando el resorte, el hilo pasa más frenado y tenso; si la aflojas, el hilo corre más suelto. Es la encargada de lograr que el hilo no quede ni flojo ni tan apretado que se corte.",
    "practicalExamples": [
      "Calibración de la tensión a 110-130 gramos-fuerza para hilo de poliéster calibre 40 con dinamómetro Towa.",
      "Afloje de tensión a 90-100 gf para bordar con hilos metalizados delicados de oro o plata.",
      "Limpieza de pelusa de cera acumulada entre los discos con un hilo dental o trozo de entretela."
    ],
    "matrixParametersRelation": [
      "Equilibrio de tensión 1/3: en el revés de una columna satinada debe verse 1/3 de hilo superior a cada lado y 1/3 de hilo blanco de bobina en el centro.",
      "Calibre del hilo: hilos finos (Nº 60) demandan menor presión de discos para no estirarse elásticamente.",
      "Velocidad de máquina: a velocidades superiores a 850 PPM, la fricción dinámica aumenta y suele requerir aflojar levemente la perilla."
    ],
    "commonErrors": [
      "Enhebrar la máquina con el prensatelas abajo sin que el hilo entre en el fondo de los discos de tensión.",
      "Apretar la perilla al máximo para corregir bucles inferiores que en realidad eran causados por una bobina vacía o mal enhebrada.",
      "No limpiar periódicamente los discos, permitiendo que restos de parafina y polvo textil mantengan los discos abiertos."
    ],
    "troubleshootingTips": [
      "Si el hilo superior se ve totalmente suelto abajo formando nidos, enhebra de nuevo asegurando que el hilo calce entre los discos.",
      "Pasa una tarjeta de visita o un trozo de entretela doblada entre los platillos para retirar pelusa acumulada sin rayar el metal pulido.",
      "Utiliza un tensiómetro de hilo superior para estandarizar la misma tensión en las 15 agujas de tu máquina."
    ],
    "whenToAdjust": "Ajusta la perilla al cambiar de marca o tipo de hilo (poliéster vs. rayón vs. metalizado) o ante variaciones climáticas de humedad.",
    "dicaArtrelados": "El tip de enhebrado Artrelados: Antes de enhebrar tu máquina, levanta SIEMPRE el prensatelas o presiona el botón de desbloqueo de tensión. Cuando el prensatelas está arriba, los discos de tensión se abren; así el hilo se desliza suavemente hasta el fondo del canal. Si enhebras con el prensatelas abajo, el hilo queda afuera de los discos y al bordar harás un nudo gigante debajo de la tela.",
    "voceSabia": "¿Sabías que los fabricantes de hilos premium lubrican la hebra con una capa microscópica de silicona especial para que deslice por los discos de tensión con un coeficiente de fricción constante sin desgastar el acero pulido?",
    "practicalExercise": "Toma un retazo de entretela doblada. Pásala entre los dos platillos del tensor como si fuera hilo dental y muévela hacia adelante y atrás. Te sorprenderá la cantidad de pelusa y restos de cera invisible que sale de los discos en apenas 10 segundos, devolviendo la suavidad original a la tensión.",
    "quickSummary": "Dispositivo frontal de discos pulidos y resorte regulable que aplica la resistencia exacta al hilo superior para un bordado balanceado.",
    "relatedTerms": [
      "Equilibrio de Tensión de Hilo",
      "Resorte Compensador (Check Spring)",
      "Tensiómetro Towa",
      "Hilo de Poliéster para Bordado"
    ]
  },
  "b-048-bloqueio-bastidor-mecanico": {
    "term": "Bloqueo de Bastidor / Traba Mecánica",
    "level": "Iniciante 🟢",
    "category": "Bastidores & Fijación",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del francés bloquer (inmovilizar, asegurar) y del inglés hoop locking lever.",
    "definition": "Sistema mecánico de sujeción integrado por palancas de leva excéntrica, clips de resorte o pernos de traba rápida incorporados en los aros de bordado modernos, permitiendo fijar la tela con presión firme e instantánea sin necesidad de apretar tornillos manuales con destornillador.",
    "howItWorks": [
      "1. El operador coloca la entretela y la tela sobre el aro interior del bastidor.",
      "2. El aro exterior con la palanca de bloqueo en posición abierta se superpone sobre la prenda.",
      "3. Se presiona el aro exterior hacia abajo encajándolo suavemente sobre la tela.",
      "4. Se acciona la palanca de leva girándola 90 grados hacia su tope de seguridad.",
      "5. La leva excéntrica contrae el perímetro del aro exterior, ejerciendo una presión uniforme y bloqueando el conjunto rígidamente."
    ],
    "beginnerExplanation": "Es la palanquita de cierre rápido que traen muchos bastidores modernos. En vez de pasarte un minuto girando un tornillo chiquito hasta que te duelan los dedos, colocas el bastidor sobre la prenda y bajas la palanquita: ¡clic! El bastidor se aprieta solo al instante con la fuerza justa para no arrugar la tela.",
    "practicalExamples": [
      "Bastidores Durkee EZ Frames con palanca de cierre rápido para talleres de alta producción.",
      "Bastidores originales de máquinas Brother y Janome con palanca tensora rápida en aros 13x18 y 16x26 cm.",
      "Enbastorado veloz de uniformes escolares reduciendo el cansancio en las muñecas del operario."
    ],
    "matrixParametersRelation": [
      "Tensión perimetral simétrica: evita deformaciones diagonales en letras y marcos geométricos.",
      "Espesor del tejido: la palanca posee un tornillo de ajuste previo para calibrar según telas finas o camperas gruesas.",
      "Registro de repetición: mantiene exactamente la misma tensión en series de decenas de prendas iguales."
    ],
    "commonErrors": [
      "Forzar el cierre de la palanca sobre telas excesivamente gruesas sin haber aflojado el tornillo de calibración previa, quebrando la leva plástica.",
      "Cerrar la palanca con la tela torcida, pellizcando pliegues permanentes en la prenda del cliente.",
      "Utilizar herramientas como pinzas para forzar la palanca de bloqueo."
    ],
    "troubleshootingTips": [
      "Si la palanca está muy dura para bajar, afloja media vuelta el tornillo moleteado antes de presionar la palanca.",
      "Si la tela queda floja tras bajar la palanca, abre la traba, ajusta una vuelta el tornillo y vuelve a bloquear.",
      "Aplica una gota de lubricante seco de teflón en el pivote de la palanca si notas resistencia al abrirla."
    ],
    "whenToAdjust": "Calibra el tornillo base cada vez que cambies el tipo de prenda (de una remera de algodón fina a un polar o toalla gruesa).",
    "dicaArtrelados": "El consejo ergonómico Artrelados: Si sufres de dolor en los dedos o muñecas por apretar tornillos de bastidor todo el día, los bastidores con palanca de bloqueo rápido son una bendición. Calibra el tornillo una sola vez al inicio del pedido con la primera prenda; para las otras 49 prendas solo tendrás que abrir y cerrar la palanquita. ¡Tus manos rendirán el doble con cero fatiga!",
    "voceSabia": "¿Sabías que los bastidores con palancas de bloqueo rápido fueron inspirados en los cierres rápidos de las ruedas de las bicicletas de carrera inventados por Tullio Campagnolo en 1930?",
    "practicalExercise": "Toma un bastidor con palanca de bloqueo rápido. Regula el tornillo moleteado para una remera polo. Abre la palanca, cambia de tela colocando una toalla gruesa e intenta cerrarla sin forzar. Nota cómo requiere aflojar dos vueltas el tornillo para que la palanca cierre suave y sin peligro de rotura.",
    "quickSummary": "Mecanismo de palanca excéntrica que aprieta y bloquea el bastidor al instante con presión pareja y sin fatiga en las manos.",
    "relatedTerms": [
      "Bastidor de Bordado",
      "Montaje en Bastidor / Enbastorado (Hooping)",
      "Bastidor Magnético",
      "Marcas de Bastidor (Hoop Burn)"
    ]
  },
  "b-016-bloqueio-de-matriz": {
    "term": "Bloqueo de Matriz",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del francés bloquer y del inglés stitch locking / design write-protection en sistemas informáticos de bordado.",
    "definition": "Función de seguridad digital en software de diseño y paneles de bordadoras que inmoviliza los elementos vectoriales, puntadas o propiedades de una matriz para impedir alteraciones accidentales de escala, rotación, posición o edición de nodos durante la preparación de la producción.",
    "howItWorks": [
      "1. En el software de diseño (Wilcom, Embrilliance, PE-Design), el diseñador selecciona uno o todos los objetos y activa la opción Lock (Bloquear).",
      "2. Los elementos bloqueados se muestran con candados o bordes protegidos en la lista de capas (Color Object List).",
      "3. El operador del taller puede mover o centrar la matriz completa pero no puede mover accidentalmente una letra o un detalle fuera de lugar.",
      "4. En formatos compilados de máquina como .DST o .EXP, la información vectorial queda bloqueada de origen convirtiéndose exclusivamente en coordenadas de puntada.",
      "5. Para editar un nodo o cambiar un parámetro, el diseñador debe desbloquear expresamente el objeto mediante contraseña o comando de desbloqueo."
    ],
    "beginnerExplanation": "Es como ponerle un candado a tu dibujo en la computadora. Cuando terminas de diseñar un logotipo con letras y figuras perfectamente alineadas, activas el 'Bloqueo': así, si haces un clic sin querer o mueves el mouse por error, ninguna letra se va a mover de su lugar. Te asegura que la matriz que mandas a la máquina esté exactamente como la diseñaste.",
    "practicalExamples": [
      "Bloqueo de las letras corporativas de un escudo para poder agregar un nombre personalizado sin desalinear el logo oficial.",
      "Bloqueo de líneas de guía y bastidores virtuales para no moverlos mientras se compone un motivo.",
      "Exportación de matrices a clientes en formato cerrado para proteger la propiedad intelectual del ateliê."
    ],
    "matrixParametersRelation": [
      "Integridad de compensación: garantiza que los valores de compensación de estiramiento calculados no se alteren en el taller.",
      "Secuencia de colores intacta: impide que el operador altere involuntariamente el orden cronológico de costura.",
      "Escala protegida: previene deformaciones asimétricas de aspecto (mantener proporción 1:1)."
    ],
    "commonErrors": [
      "Intentar cambiar la densidad de un archivo .DST bloqueado de solo puntadas en lugar de editar el archivo vectorial original.",
      "Olvidar desbloquear una capa antes de intentar cambiar el color de un objeto específico en el software.",
      "Redimensionar una matriz bloqueada en la pantalla de la máquina más de un 10%, deformando la densidad sin recálculo de puntadas."
    ],
    "troubleshootingTips": [
      "Si no puedes seleccionar un objeto en tu programa, busca el icono del candado en la lista de objetos y haz clic para desbloquearlo.",
      "Conserva siempre el archivo editable original (.EMB, .ART, .PES) antes de exportar la versión bloqueada para la máquina.",
      "Si necesitas agrandar un diseño cerrado en formato .DST más de un 15%, utiliza un software con convertidor a objetos inteligentes."
    ],
    "whenToAdjust": "Aplica el bloqueo al finalizar la digitalización de cada elemento y antes de enviar el archivo definitivo a la línea de producción.",
    "dicaArtrelados": "El hábito profesional Artrelados: Cada vez que termines de acomodar las letras de un bordado sobre un escudo, selecciona todo el bloque y presiona la tecla de bloqueo (K en muchos programas). Eso evita que un roce involuntario del mouse desalinee una letra por un milímetro, garantizando que tu bordado salga perfecto a la primera.",
    "voceSabia": "¿Sabías que los formatos como el .DST de Tajima nacieron en la era de las cintas perforadas de papel de los años 80 y no guardan colores ni curvas editables, funcionando por naturaleza como un archivo totalmente 'bloqueado' que solo lee coordenadas mecánicas de aguja?",
    "practicalExercise": "Abre tu software de bordado. Escribe una palabra y colócale una estrella al lado. Selecciona la estrella y bloquéala con el comando de candado. Intenta arrastrar la estrella con el cursor: notarás que el programa no te lo permite. Desbloquéala y vuelve a moverla para comprobar el control total de edición.",
    "quickSummary": "Función digital que congela elementos o matrices para impedir alteraciones involuntarias de posición, tamaño o densidad.",
    "relatedTerms": [
      "Digitalización & Matrices",
      "Formato .DST",
      "Formato .EMB y .PES",
      "Software de Bordado"
    ]
  },
  "b-060-blower-soprador-termico-de-acabamento": {
    "term": "Soplador Térmico / Pistola de Aire Caliente",
    "level": "Iniciante 🟢",
    "category": "Herramientas & Taller",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés heat gun / thermal blower for embroidery finishing. Herramienta adoptada en talleres de bordado profesional para el acabado térmico de goma EVA 3D y plásticos Topping.",
    "definition": "Herramienta eléctrica de taller provista de resistencia blindada y turbina de aire que emite un flujo concentrado de calor regulable (entre 100°C y 350°C), utilizada para encoger y retraer microscópicamente los restos visibles de goma EVA en bordados con relieve 3D Puff y desintegrar rebabas de film hidrosoluble o termofusible sin tocar las telas con planchas.",
    "howItWorks": [
      "1. Tras terminar el bordado en relieve 3D Puff, se retira manualmente el sobrante de goma EVA arrancándolo de los bordes.",
      "2. Pequeños fragmentos o pelusas de goma suelen asomar entre las puntadas satinadas.",
      "3. El operador enciende el soplador térmico a temperatura media (alrededor de 150°C a 200°C).",
      "4. Se realizan pasadas rápidas y circulares manteniendo una distancia segura de 10 a 15 cm de la prenda.",
      "5. El calor encoge instantáneamente la espuma de polietileno, que se retrae hacia adentro del cordón satinado desapareciendo a la vista.",
      "6. El hilo de poliéster de bordado, resistente al calor hasta 250°C, permanece totalmente inalterado y brillante."
    ],
    "beginnerExplanation": "Es una pistola de aire caliente parecida a un secador de pelo, pero tira mucho más calor. Cuando haces bordados en relieve 3D para gorras usando goma EVA, al arrancar la goma siempre quedan pelitos o pedacitos de plástico asomando entre las puntadas. Le pasas la pistola de calor unos segundos por encima y, como por arte de magia, los pedacitos de goma se encogen y se esconden solos adentro del bordado, dejándolo limpito y perfecto.",
    "practicalExamples": [
      "Limpieza y acabado final de gorras con letras en relieve 3D Puff de equipos deportivos.",
      "Eliminación instantánea de restos de film plástico hidrosoluble (Topping) en toallas sin necesidad de lavarlas con agua.",
      "Retracción de hilos sueltos y microfibras sintéticas en parches de tela cordura."
    ],
    "matrixParametersRelation": [
      "Poliéster vs. Rayón: el hilo de poliéster resiste mucho más calor (hasta 250°C) que el rayón; con rayón usar temperaturas bajas.",
      "Densidad de cobertura 3D: con una densidad adecuada (0,20 mm a 0,22 mm en satín), el soplador termina de sellar el relieve de forma impecable.",
      "Espesor de goma EVA: goma de 2 mm a 3 mm de alta densidad responde instantáneamente al golpe de calor térmico."
    ],
    "commonErrors": [
      "Dejar la pistola fija en un solo punto, quemando o derritiendo la tela de la gorra o achicharrando los hilos.",
      "Usar temperaturas extremas (500°C) diseñadas para despintar madera, chamuscando prendas sintéticas en un segundo.",
      "Acercar la boquilla a menos de 5 cm de la prenda."
    ],
    "troubleshootingTips": [
      "Mantén siempre la pistola en movimiento continuo en vaivén circular; ¡jamás la dejes quieta sobre el bordado!",
      "Comienza con la temperatura más baja e incrementa gradualmente hasta ver que los restos de goma se contraigan.",
      "Si la gorra es de poliéster liviano o nylon sensible, coloca una toalla húmeda o prueba primero en un retazo sobrante."
    ],
    "whenToAdjust": "Utilízalo en la mesa de desbaste y control de calidad inmediatamente después de retirar la prenda de la máquina.",
    "dicaArtrelados": "El secreto de acabado boutique Artrelados: Cuando hagas bordados 3D con goma EVA, no pierdas 15 minutos intentando sacar los piquitos de goma con una pinza de depilar. Enciende tu soplador térmico a calor medio y dale 3 pases rápidos a unos 12 cm de distancia. Los piquitos de goma se encogen al instante y se esconden debajo del hilo. ¡En 5 segundos tienes un bordado 3D de calidad profesional sin esfuerzo!",
    "voceSabia": "¿Sabías que la goma EVA (copolímero de etileno y acetato de vinilo) tiene memoria térmica y se contrae hasta un 40% de su volumen al recibir aire a más de 120°C, mientras que el hilo de bordar de poliéster soporta hasta 260°C antes de fundirse?",
    "practicalExercise": "Borda una letra en relieve 3D con goma EVA sobre un retazo de tela. Arranca la goma y observa los pequeños piquitos en las esquinas. Pasa el soplador térmico a temperatura media en movimientos circulares durante 4 segundos. Observa con una lupa cómo la goma desaparece al instante dejando un cordón satinado impecable.",
    "quickSummary": "Pistola de aire caliente para retractar residuos de goma EVA en bordados 3D y eliminar films plásticos rápidamente.",
    "relatedTerms": [
      "Bordado 3D en Relieve (Puff Foam)",
      "Puntada Satín",
      "Film Hidrosoluble (Topping)",
      "Control de Calidad en Ateliê"
    ]
  },
  "b-006-bobbin": {
    "term": "Bobina / Canilla Inferior",
    "level": "Iniciante 🟢",
    "category": "Insumos & Materiales",
    "grammarClass": "Sustantivo femenino",
    "origin": "Del francés bobine (carrete o cilindro giratorio para enrollar hilo). En inglés bobbin, término adoptado internacionalmente en la industria textil.",
    "definition": "Pequeño carrete cilíndrico de acero, aluminio o plástico (generalmente de tamaño Clase 15 / L o M) que aloja el hilo inferior o de fondo dentro de la caja de bobina, proporcionando el hilo necesario para cruzarse con la lazada del hilo superior y consolidar la puntada en el revés de la tela.",
    "howItWorks": [
      "1. La bobina se devana uniformemente con hilo fino de poliéster o algodón (calibre 60 a 80 wt).",
      "2. Se introduce en la caja de bobina orientando el giro en sentido horario o antihorario según el diseño de la lanzadera.",
      "3. El hilo pasa bajo el muelle de tensión de la caja, que regula la resistencia en gramos-fuerza.",
      "4. Al girar el garfio rotativo, el lazo de la aguja rodea la bobina completa.",
      "5. El hilo inferior se desenrolla fluidamente formando una línea continua de anclaje en el revés del bordado."
    ],
    "beginnerExplanation": "Es el carretelito chiquito de metal o plástico que va escondido abajo de la placa de tu máquina. Lleva el hilo de abajo (que casi siempre es finito y de color blanco o negro). Cada vez que la aguja baja, se cruza con el hilo de este carretel para que las puntadas queden cosidas y no se desarmen. Si la canilla se queda sin hilo, la máquina sigue cosiendo en el aire sin hacer nada.",
    "practicalExamples": [
      "Uso de canillas de aluminio tamaño 'L' en máquinas semi-industriales Brother PR y Tajima.",
      "Uso de bobinas gigantes tamaño 'M' en máquinas industriales de gran campo para duplicar el tiempo de costura sin cambios de canilla.",
      "Bobinas predevanadas magnéticas con hilo de poliéster continuo para tensión ultraestable."
    ],
    "matrixParametersRelation": [
      "Grosor del hilo: hilo de bobina calibre 60 a 75 wt permite almacenar hasta 120 metros de hilo en una bobina tamaño L.",
      "Balance de tensión: la bobina debe calibrarse entre 18 y 25 gramos-fuerza con tensiómetro Towa para lograr el tercio central en el satín.",
      "Capacidad de puntadas: una bobina tamaño L rinde habitualmente entre 25.000 y 35.000 puntadas de bordado antes de agotarse."
    ],
    "commonErrors": [
      "Devanar la canilla de forma irregular o despareja, provocando tirones que aflojan la tensión en el frente.",
      "Usar canillas de plástico dobladas o melladas que rebotan dentro de la caja de bobina.",
      "Llenar la bobina con hilo grueso de coser remeras en lugar de hilo fino especial para bobina de bordado."
    ],
    "troubleshootingTips": [
      "Descarta inmediatamente cualquier canilla metálica que presente golpes o bordes abollados.",
      "Si la máquina avisa de canilla vacía cuando aún tiene hilo, limpia la pelusa del sensor infrarrojo ubicado en el alojamiento del garfio.",
      "Verifica que la canilla gire con suavidad dentro de la caja de bobina tirando de la punta del hilo con la mano."
    ],
    "whenToAdjust": "Revisa el nivel de hilo de la canilla antes de iniciar matrices grandes de más de 20.000 puntadas para no interrumpir el bordado.",
    "dicaArtrelados": "El tip de organización Artrelados: Nunca devanes una sola canilla a la vez. Cuando comiences la jornada en tu taller, devana 5 o 10 canillas juntas y guárdalas en una cajita organizadora con espuma. Cuando se te termine la canilla en medio de un pedido urgente, la cambias en 5 segundos y sigues bordando sin perder el ritmo de producción.",
    "voceSabia": "¿Sabías que en las máquinas industriales modernas existen bobinas tamaño 'M' (un 40% más grandes que las comunes) que almacenan más de 200 metros de hilo y permiten bordar durante horas seguidas sin necesidad de detener la máquina?",
    "practicalExercise": "Retira la canilla de tu máquina y examina sus bordes con la yema del dedo buscando abolladuras. Pesa la canilla en una balanza de precisión y compara con una canilla predevanada de fábrica: comprobarás la increíble uniformidad y mayor cantidad de hilo que traen las industriales.",
    "quickSummary": "Carrete cilíndrico que suministra el hilo inferior desde la caja de bobina para entrelazarse con el hilo de la aguja.",
    "relatedTerms": [
      "Caja de Bobina / Portacanilla",
      "Hilo de Bobina / Hilo Inferior",
      "Bobina Predevanada",
      "Garfio Rotativo"
    ]
  },
  "b-007-bobbin-case": {
    "term": "Caja de Bobina / Portacanilla",
    "level": "Intermedio 🟡",
    "category": "Tensión & Mecánica",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del inglés bobbin case. Componente esencial del sistema de lanzadera desarrollado por Singer y Wheeler & Wilson a finales del siglo XIX.",
    "definition": "Cápsula de precisión de aleación de acero pulido y muelles templados que alberga la bobina inferior en el interior del garfio rotativo, equipada con un fleje tensor regulable mediante un microtornillo que calibra la resistencia y salida del hilo inferior hacia la tela.",
    "howItWorks": [
      "1. La bobina con hilo se introduce en el receptáculo cilíndrico de la caja de bobina.",
      "2. La hebra de hilo se pasa por la ranura lateral y se desliza por debajo del fleje de tensión de acero templado.",
      "3. El microtornillo de cabeza plana regula la presión que el fleje ejerce sobre el hilo.",
      "4. La caja se introduce en el eje central de la lanzadera rotativa hasta escuchar el 'clic' del pestillo de traba.",
      "5. La lanzadera gira a su alrededor mientras el soporte amortiguador evita que la caja rote junto con el garfio."
    ],
    "beginnerExplanation": "Es la cajita de metal brillante donde metes la canilla antes de colocarla en la máquina. Tiene una pestañita metálica con un tornillo muy chiquitito: ese tornillo aprieta una chapita que frena el hilo de abajo. Si ese tornillo está muy suelto, el hilo sale volando y el bordado queda blanco arriba; si está muy apretado, el hilo se corta o frunce la prenda.",
    "practicalExamples": [
      "Calibración de la tensión con el medidor digital o mecánico Towa Gauge en el rango de 20 a 25 gf.",
      "Prueba empírica de la 'gota' o 'yo-yo': sostener el hilo de la caja y verificar que caiga suavemente al dar un leve movimiento de muñeca.",
      "Reemplazo del fleje tensor desgastado tras años de producción continua."
    ],
    "matrixParametersRelation": [
      "Proporción de tensión en el satín: la caja de bobina es el estándar fijo del ateliê; se calibra una vez y solo se ajustan las tensiones superiores.",
      "Puntadas sin nudos: una caja de bobina limpia asegura que el hilo salga con tensión continua sin saltos ni tirones.",
      "Compensación de arrugas: una tensión inferior excesivamente alta frunce las telas finas y el piqué."
    ],
    "commonErrors": [
      "Girar el microtornillo de tensión como si fuera un tornillo común: un giro de apenas un cuarto de vuelta altera la tensión drásticamente.",
      "Dejar acumular pelusa compactada debajo de la chapita de tensión, haciendo que el hilo quede totalmente suelto.",
      "Dejar caer la caja de bobina al suelo: el impacto dobla el labio de acero microscópicamente arruinando la tensión para siempre."
    ],
    "troubleshootingTips": [
      "Pasa una tarjeta de plástico fina o una aguja sin punta por debajo de la chapita tensora para desalojar pelusa compactada.",
      "Si el tornillo gira en falso, reemplaza el tornillo o el muelle tensor; jamás intentes pegarlo.",
      "Ten siempre en el taller una caja de bobina de repuesto previamente calibrada para emergencias."
    ],
    "whenToAdjust": "Verifica la tensión con tensiómetro una vez por semana o cada vez que limpies a fondo el alojamiento del garfio.",
    "dicaArtrelados": "La regla de oro de Artrelados para la caja de bobina: ¡Trátala como si fuera de cristal! Si la caja de bobina se te cae al piso de baldosas o cemento del taller, el borde de acero se abolla aunque no lo veas a simple vista, la canilla empieza a raspar por dentro y tus tensiones se volverán locas. Mantenla siempre sobre tu mesa de trabajo sobre un paño suave.",
    "voceSabia": "¿Sabías que el tornillo de tensión de la caja de bobina es tan sensible que un giro de apenas 15 grados (un milímetro de reloj) cambia la tensión en más de 5 gramos-fuerza?",
    "practicalExercise": "Realiza la clásica prueba del yo-yo: coloca una canilla llena en la caja de bobina, sostén el extremo del hilo con dos dedos en el aire. La caja debe mantenerse suspendida sin caerse sola; al dar un pequeño sacudón suave con la muñeca, debe bajar apenas 3 o 4 centímetros y frenarse. Si se va al piso, está muy floja; si no baja nada, está muy apretada.",
    "quickSummary": "Cápsula de acero de la lanzadera rotativa que aloja la canilla y calibra la tensión del hilo inferior mediante un fleje regulable.",
    "relatedTerms": [
      "Bobina / Canilla Inferior",
      "Tensiómetro Towa",
      "Garfio Rotativo",
      "Equilibrio de Tensión de Hilo"
    ]
  },
  "b-019-bobbin-thread": {
    "term": "Hilo de Bobina / Hilo Inferior",
    "level": "Iniciante 🟢",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés bobbin thread (hilo de canilla para bordado computadorizado). Estandarizado mundialmente en poliéster de filamento continuo.",
    "definition": "Hilo técnico especializado de alta resistencia y calibre extremadamente fino (generalmente Nº 60, 70 u 80 wt), fabricado en 100% poliéster de filamento continuo o algodón mercerizado, formulado específicamente para trabajar en la bobina inferior sin aportar volumen ni rigidez al revés de las prendas bordadas.",
    "howItWorks": [
      "1. El hilo inferior se desenrolla desde la canilla bajo una tensión suave y continua regulada en la caja de bobina.",
      "2. Al subir la aguja, el garfio rotativo pasa el bucle del hilo superior alrededor de la caja de bobina envolviendo el hilo inferior.",
      "3. El tirahilos jala el hilo superior hacia arriba, arrastrando el punto de enlace exactamente al centro del espesor de la tela.",
      "4. Por su calibre ultrafino, el hilo de bobina permite que las puntadas queden suaves al contacto con la piel.",
      "5. En el revés del bordado, el hilo blanco o negro forma una columna central compacta que asegura el anclaje de todos los colores superiores."
    ],
    "beginnerExplanation": "Es el hilo especial que va en la canilla de abajo. A diferencia del hilo de arriba (que es brillante y de muchos colores), el hilo de bobina casi siempre es blanco o negro y es mucho más delgadito y suave. Es finito a propósito para que la parte de atrás del bordado no quede dura ni raspe la piel, y para que quepa mucho más hilo en la canillita sin tener que cambiarla a cada rato.",
    "practicalExamples": [
      "Uso de hilo de bobina blanco calibre 60 wt para el 90% de las prendas claras y medianas.",
      "Uso de hilo de bobina negro calibre 60 wt en remeras, camperas y gorras de color negro o marino para que no asomen fibras blancas.",
      "Uso de hilo de bobina ultrafino calibre 80 wt en ajuar de bebés y sábanas de recién nacido para máxima suavidad."
    ],
    "matrixParametersRelation": [
      "Relación de consumo de hilo: en un bordado estándar se consume aproximadamente un tercio de hilo de bobina por cada dos tercios de hilo superior.",
      "Calibre de hilo superior: armoniza perfectamente con hilo superior estándar Nº 40 sin sobrecargar la trama del tejido.",
      "Tensión de remate: la suavidad del filamento continuo permite que los remates automáticos queden invisibles y firmes."
    ],
    "commonErrors": [
      "Colocar hilo de coser común de algodón grueso en la canilla de bordado, engrosando el bordado y arruinando las tensiones.",
      "Usar hilo de bobina blanco en prendas de color negro profundo, arriesgando que pequeños puntos blancos asomen en las esquinas del diseño.",
      "Comprar hilo de bobina de mala calidad con nudos y variaciones de grosor que traban el fleje tensor de la caja."
    ],
    "troubleshootingTips": [
      "Si el hilo de bobina asoma en la cara delantera del bordado, afloja media vuelta el tensor superior o ajusta un poco el tornillo de la caja de bobina.",
      "Utiliza hilo de bobina de filamento continuo (Filament Polyester) para evitar que suelte pelusa dentro de la pista del garfio.",
      "Guarda siempre un par de conos de hilo de bobina negro para trabajos en prendas oscuras."
    ],
    "whenToAdjust": "Cambia a hilo de bobina negro siempre que la tela de fondo sea negra, azul noche o gris plomo para un acabado impecable.",
    "dicaArtrelados": "El tip de etiqueta negra de Artrelados: Si vas a bordar una chomba o gorra negra con letras doradas o rojas, ¡usa hilo de bobina NEGRO! Si usas hilo blanco y alguna puntada apretada tira un milímetro de más, se verá un puntito blanco en el frente de la prenda arruinando la entrega. Con hilo de bobina negro, el revés queda invisible y el frente impecable como de alta costura.",
    "voceSabia": "¿Sabías que un solo cono de 5.000 metros de hilo de bobina alcanza para bordar más de 1.500.000 de puntadas, equivalente a unas 150 chombas bordadas completas?",
    "practicalExercise": "Borda dos columnas satinadas idénticas sobre una tela azul marino: una con hilo de bobina blanco y otra con hilo de bobina negro. Da vuelta las prendas y observa cómo el hilo negro se mimetiza con la tela sin llamar la atención, ofreciendo una terminación premium para tus clientes más exigentes.",
    "quickSummary": "Hilo técnico ultrafino de filamento continuo de poliéster que se coloca en la canilla para anclar el bordado con suavidad en el revés.",
    "relatedTerms": [
      "Bobina / Canilla Inferior",
      "Caja de Bobina / Portacanilla",
      "Equilibrio de Tensión de Hilo",
      "Bobina Predevanada"
    ]
  },
  "bobbin-winding-enrolamento-automatico-da-canelinha": {
    "term": "Devanado Automático de Bobina",
    "level": "Iniciante 🟢",
    "category": "Maquinaria & Equipamiento",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del francés dévider (desenrollar y volver a enrollar) y del inglés automatic bobbin winding system.",
    "definition": "Operación electromecánica mediante la cual el hilo inferior se transfiere desde un cono grande hacia el carrete cilíndrico de la canilla con distribución transversal homogénea, velocidad constante y parada automática por sensor óptico o palanca de nivel, asegurando una densidad de bobinado uniforme esencial para mantener la estabilidad de la tensión en la costura.",
    "howItWorks": [
      "1. El hilo del cono grande se enhebra pasando por un disco tensor previo calibrado a baja presión.",
      "2. Se fija el extremo del hilo en el orificio de la canilla vacía montada en el husillo rotativo del devanador.",
      "3. Se acciona el motor independiente o se presiona el eje hacia el embrague mecánico.",
      "4. El husillo gira a altas revoluciones guiando el hilo de izquierda a derecha de forma pareja entre las paredes de la bobina.",
      "5. Al alcanzar el volumen de llenado programado (aproximadamente el 80% al 85% de la capacidad), el sensor o palanca detiene el giro automáticamente."
    ],
    "beginnerExplanation": "Es el proceso de cargar tu canillita vacía con hilo usando el motorcito devanador que viene en tu máquina o en un aparato externo. El secreto está en que el hilo se enrolle bien prolijo y apretado parejo de lado a lado. Si queda fofo o con montañitas chuecas, cuando lo pongas en la máquina el hilo se va a trabar y te va a hacer nudos.",
    "practicalExamples": [
      "Devanado de canillas mientras la máquina borda en talleres semi-industriales con devanador independiente.",
      "Uso de bobinadores externos motorizados de alta velocidad para preparar decenas de canillas para máquinas multicabezal.",
      "Ajuste del tornillo de tope de llenado para que la canilla no quede sobrecargada."
    ],
    "matrixParametersRelation": [
      "Tensión de devanado: debe ser firme pero no excesiva para no estirar elásticamente el hilo sintético de poliéster.",
      "Uniformidad de capas: evita saltos de tensión que afecten la calidad visual de columnas satinadas largas.",
      "Límite de diámetro: dejar al menos 1 mm de holgura respecto al borde exterior de la canilla para que no roce contra las paredes de la caja de bobina."
    ],
    "commonErrors": [
      "Llenar la canilla hasta que rebalse el borde de metal, haciendo que la bobina se frene contra la caja y corte el hilo.",
      "Devanar con la mano guiando el hilo de forma despareja, creando baches y conos desalineados.",
      "Devanar el hilo sin pasarlo por el platillo tensor previo, dejando un enrollado fofo y blando como un algodón."
    ],
    "troubleshootingTips": [
      "Presiona la canilla devanada con la uña: debe sentirse sólida y firme como madera, ¡nunca blanda como una esponja!",
      "Si el hilo se acumula más arriba que abajo en la canilla, sube o baja la altura del poste guía del devanador con un destornillador.",
      "No uses canillas devanadas a mano en emergencias; siempre usa el sistema mecánico guiado por los platillos tensores."
    ],
    "whenToAdjust": "Regula la altura de la guía si notas que las canillas se cargan en forma de cono en vez de quedar perfectamente cilíndricas.",
    "dicaArtrelados": "El test de firmeza Artrelados para tus canillas: Cuando termines de devanar una canilla, aprieta el hilo con la yema del pulgar. Si la canilla se hunde como un almohadón blando, ¡no la uses en la máquina! Ese hilo fofo se aplastará en el primer tirón y el bordado saldrá desparejo. Deséchalo o rebobínalo pasando bien el hilo por el disco tensor para que quede dura y compacta como una roca.",
    "voceSabia": "¿Sabías que si devanas una canilla con demasiada tensión estiras el hilo de poliéster hasta un 15% de su longitud natural? Luego, cuando el bordado está terminado, ese hilo intenta recuperar su tamaño original y arruga toda la prenda desde abajo.",
    "practicalExercise": "Coloca una canilla vacía en el devanador. Pasa el hilo correctamente por el disco tensor previo y llena la canilla hasta que el sensor corte solo. Toca la canilla con los dedos comprobando su firmeza cilíndrica y verifica que quede 1 mm libre antes del borde del metal.",
    "quickSummary": "Carga mecánica uniforme de hilo en la canilla con tensión y velocidad controladas para asegurar puntadas estables.",
    "relatedTerms": [
      "Bobina / Canilla Inferior",
      "Devanador Externo Independiente",
      "Caja de Bobina / Portacanilla",
      "Hilo de Bobina / Hilo Inferior"
    ]
  }
};

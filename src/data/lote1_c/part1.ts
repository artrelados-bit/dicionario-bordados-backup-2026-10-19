import { Verbete } from "../../types";

export const LOTE1_C_PART1_ES: Record<string, Partial<Verbete>> = {
  "c-001-cabecote-de-bordado": {
    "term": "Cabezal de Bordado",
    "level": "Iniciante 🟢",
    "category": "Componentes de la Máquina",
    "grammarClass": "Sustantivo masculino",
    "origin": "Del latín capitium (cabeza, extremidad superior). En la ingeniería textil industrial británica y alemana del siglo XIX (Embroidery Head), designa la unidad mecánica motriz que alberga las agujas, tirahilos y prensatelas.",
    "definition": "Conjunto electromecánico superior de la máquina de bordar que agrupa las barras de aguja, el bloque de tirahilos, las guías tensoras, el prensatelas oscilante y los mecanismos de selección de color, responsable de coordinar la penetración vertical de la aguja con la alimentación sincronizada del hilo superior hacia la tela.",
    "howItWorks": [
      "1. El árbol principal superior transmite rotación sincrónica al cigüeñal interno del cabezal.",
      "2. La biela motriz transforma el giro continuo en el movimiento vertical alternativo de la barra de aguja seleccionada.",
      "3. La leva excéntrica acciona la palanca tirahilos en sincronía exacta con el descenso de la aguja.",
      "4. En cabezales multiaguja, una caja de cambio de color traslada lateralmente el bloque de agujas para conectar la barra elegida al perno de arrastre.",
      "5. El prensatelas desciende una fracción de milisegundo antes de la penetración y sube cuando la aguja abandona la tela, evitando el desplazamiento del tejido."
    ],
    "beginnerExplanation": "Es la 'cabeza' de la máquina de bordar, donde están puestas todas las agujas y los tensores de hilo. Cuando la máquina cose, esta parte baja la aguja elegida, mueve el tirahilos hacia arriba y hacia abajo a toda velocidad y empuja el prensatelas para que la tela no se levante. En las máquinas grandes puede haber varios cabezales cosiendo la misma remera a la vez.",
    "practicalExamples": [
      "Cabezal individual en máquinas de mesa familiares para personalización de piezas únicas.",
      "Batería de 6 a 12 cabezales sincronizados en máquinas industriales para producción seriada de uniformes.",
      "Cabezal especial con dispositivo de corte por láser integrado para emblemas y parches."
    ],
    "matrixParametersRelation": [
      "Asignación de agujas (Needle Assignment): orden numérico de colores programado en la consola que indica al cabezal qué barra de aguja acoplar.",
      "Sincronización angular de costura: el cabezal opera en un ciclo de 360 grados donde la penetración ocurre entre los 180° y los 200° del eje principal.",
      "Comandos de parada (Stop Codes): pausas automáticas enviadas al cabezal para cambios de aplicación o revisiones manuales."
    ],
    "commonErrors": [
      "No aceitar regularmente los fieltros superiores de las barras de aguja, provocando chirridos y recalentamiento del cabezal.",
      "Forzar manualmente el desplazamiento lateral del cabezal mientras la aguja está abajo clavada en la placa.",
      "Permitir la acumulación de pelusas de hilo detrás de las palancas tirahilos, bloqueando los sensores de rotura."
    ],
    "troubleshootingTips": [
      "Aplica dos gotas de aceite mineral blanco en las guías de deslizamiento de la barra de aguja al inicio de cada jornada.",
      "Verifica que el selector de color esté perfectamente centrado en el número de aguja antes de iniciar la costura.",
      "Limpia los sensores ópticos de rotura de hilo ubicados en el frontal del cabezal con un pincel de cerdas suaves y secas."
    ],
    "whenToAdjust": "Revisa el ajuste del cabezal si escuchas un golpe seco al cambiar de color o si la barra de aguja no desciende con suavidad.",
    "dicaArtrelados": "El tip de cuidado Artrelados para el cabezal: Al finalizar el trabajo diario, pasa una funda de tela limpia sobre el cabezal de tu máquina. El polvo ambiental y las pelusas que flotan en el aire del taller se pegan al aceite de las barras de aguja formando una pasta abrasiva que acorta la vida útil de los bujes mecánicos.",
    "voceSabia": "¿Sabías que los primeros cabezales de bordado automático inventados en Japón en los años 1960 pesaban más de 40 kilos por unidad y requerían motores trifásicos externos, mientras que hoy los cabezales compactos de aluminio aeroespacial pesan menos de 10 kilos y son controlados por micromotores paso a paso?",
    "practicalExercise": "Con la máquina apagada, observa cómo al mover el selector de cambio de color todo el bloque frontal del cabezal se desliza suavemente sobre rieles prismáticos hasta alinear la aguja elegida con el émbolo impulsor central.",
    "quickSummary": "Conjunto electromecánico superior que alberga barras de aguja, tensores y tirahilos para ejecutar el bordado sobre la tela.",
    "summary": "Conjunto electromecánico superior que alberga barras de aguja, tensores y tirahilos para ejecutar el bordado sobre la tela.",
    "relatedTerms": [
      "Cabezal Multiaguja",
      "Barra de Aguja de Bordado",
      "Palanca Tirahilos",
      "Caja de Cambio de Color y Selector de Agujas"
    ]
  },
  "c-015-cabecote-multiagulhas": {
    "term": "Cabezal Multiaguja",
    "level": "Intermedio 🟡",
    "category": "Componentes de la Máquina",
    "grammarClass": "Sustantivo masculino",
    "origin": "Del latín multus (muchos) y acus (aguja). Desarrollo mecatrónico japonés que transformó el bordado al permitir cambios automáticos entre 4, 6, 10, 12 o 15 colores sin intervención humana.",
    "definition": "Tipo avanzado de cabezal de bordado que incorpora un bloque móvil con múltiples barras de aguja independientes (comúnmente de 6 a 15 agujas por cabezal), cada una enhebrada con un cono de color o tipo de hilo diferente, que se desplaza horizontalmente para posicionar la aguja programada bajo el perno de arrastre principal en fracciones de segundo.",
    "howItWorks": [
      "1. Cada cono de hilo se enhebra de forma permanente en su propio juego de tensores, guiahilos y aguja numerada (del 1 al 15).",
      "2. Al recibir un comando de cambio de color en la matriz, el motor paso a paso de cambio de color gira una leva helicoidal.",
      "3. La leva desplaza el bloque completo de barras de aguja lateralmente hacia la izquierda o derecha.",
      "4. El perno de arrastre principal se desacopla de la barra anterior y se engancha automáticamente en la nueva barra seleccionada.",
      "5. El tirahilos correspondiente entra en acción y la máquina retoma la costura a velocidad plena sin pausas para enhebrado manual."
    ],
    "beginnerExplanation": "En una máquina común de una sola aguja, cada vez que el dibujo cambia de color tienes que frenar, sacar el hilo, poner el nuevo y enhebrar a mano. En una máquina con cabezal multiaguja, tienes 6, 10 o 15 conos ya puestos y listos: la máquina borda todo lo rojo, corta el hilo, corre las agujas hacia un costado sola, ¡y sigue con el azul en un segundo sin que tengas que tocar nada!",
    "practicalExamples": [
      "Bordado de escudos multicolores con 8 o 10 tonos en uniformes deportivos sin pausas operativas.",
      "Uso de combinaciones complejas de hilo brillante de poliéster, hilo metálico dorado e hilo mate en la misma prenda.",
      "Producción continua de gorras y parches corporativos en talleres boutique y ateliês comerciales."
    ],
    "matrixParametersRelation": [
      "Mapeo de agujas (Needle Map): correspondencia exacta entre los bloques de color del diseño digital y los números de aguja física de la máquina.",
      "Comando de cambio de color (Color Change): instrucción binaria que activa el motor de desplazamiento del bloque multiaguja.",
      "Tiempo de ciclo reducido: elimina hasta un 80% del tiempo improductivo de máquina en comparación con modelos de aguja única."
    ],
    "commonErrors": [
      "Asignar en el panel de control un número de aguja que no tiene el cono de color correspondiente al diseño.",
      "Cruzar los hilos superiores entre tensores vecinos al enhebrar el árbol de conos superior.",
      "Dejar colas de hilo largas sueltas que se enganchen con las barras de aguja vecinas durante los traslados laterales."
    ],
    "troubleshootingTips": [
      "Etiqueta con cinta adhesiva numerada cada base de cono para mantener siempre el mismo orden mental de colores.",
      "Usa la pinza de resortes retenedores frontal para trabar las puntas de los hilos de las agujas que no están cosiendo.",
      "Revisa la tensión individual de cada aguja con un tensiómetro de hilo, ya que cada tensor puede tener un desgaste levemente diferente."
    ],
    "whenToAdjust": "Calibra la posición del potenciómetro de cambio de color si la máquina se detiene con error de 'Alineación de aguja' o 'Error de cambio de color'.",
    "dicaArtrelados": "El tip de producción continua Artrelados: Si tu cabezal tiene 15 agujas y tu diseño usa solo 4 colores, puedes enhebrar dos juegos de los mismos colores (por ejemplo, agujas 1 a 4 y agujas 5 a 8). Si se acaba el hilo blanco de la aguja 1 en medio de un pedido urgente, solo cambias la asignación a la aguja 5 en pantalla y continúas produciendo sin frenar a devanar.",
    "voceSabia": "¿Sabías que los cabezales multiaguja más grandes del mundo tienen hasta 24 barras de aguja en el mismo cabezal, permitiendo bordar tapices multicolores gigantes con degradados hiperrealistas sin repetir tonos?",
    "practicalExercise": "Programa en la consola de tu máquina una secuencia de prueba que cambie sucesivamente de la aguja 1 a la 6. Observa la precisión con la que el bloque se detiene frente al impulsor central y escucha el clic suave de acoplamiento.",
    "quickSummary": "Cabezal con múltiples barras de aguja independientes que se desplazan automáticamente para bordar varios colores sin enhebrar a mano.",
    "summary": "Cabezal con múltiples barras de aguja independientes que se desplazan automáticamente para bordar varios colores sin enhebrar a mano.",
    "relatedTerms": [
      "Cabezal de Bordado",
      "Caja de Cambio de Color y Selector de Agujas",
      "Asignación de Agujas y Mapeo de Color",
      "Palanca Tirahilos"
    ]
  },
  "c-050-cabo-de-agulha-fixador": {
    "term": "Soporte de Aguja y Bloque Fijador",
    "level": "Intermedio 🟡",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín caput (cabeza, empuñadura) y del inglés needle clamp / set screw. Componente de sujeción mecánica de precisión presente en todas las barras de aguja.",
    "definition": "Bloque metálico mecanizado de acero o bronce fijado en el extremo inferior de la barra de aguja, provisto de un orificio cilíndrico calibrado para recibir el talón de la aguja, un tornillo prisionero de apriete (Needle Set Screw) y una pequeña guía inferior por donde ingresa el hilo superior inmediatamente antes de atravesar el ojo de la aguja.",
    "howItWorks": [
      "1. El talón de la aguja se introduce verticalmente en el orificio del soporte hasta hacer tope firme contra el perno superior de calibración.",
      "2. Se aprieta el tornillo prisionero con un destornillador de pala plana o llave hexagonal calibrada.",
      "3. La presión del tornillo fija la aguja en su orientación angular correcta (con la ranura larga hacia el frente y el chaflán hacia el garfio).",
      "4. El hilo superior desciende desde la guía de la barra, pasa por la colita de alambre del soporte de aguja y desciende en línea recta al ojo de la aguja.",
      "5. El soporte transmite toda la aceleración y fuerza de penetración de la barra de aguja sin permitir desviaciones ni giros del vástago."
    ],
    "beginnerExplanation": "Es la piecita de metal que está abajo de todo en la barrita de la aguja, donde aflojas el tornillito para cambiar la aguja cuando se gasta o se rompe. Adentro tiene un huequito exacto donde calza la parte gruesa de la aguja. Es fundamental apretar bien el tornillito: si queda flojo la aguja se cae y choca contra la máquina; y si lo aprietas con una fuerza exagerada puedes falsear la rosca.",
    "practicalExamples": [
      "Reemplazo rápido de aguja estándar 75/11 por aguja gruesa 90/14 para bordar telas pesadas de jean.",
      "Cambio de aguja punta de bola por aguja cortante de cuña para bordar sobre cuero o cuerina.",
      "Ajuste preventivo del tornillo prisionero durante el mantenimiento semanal para evitar vibraciones."
    ],
    "matrixParametersRelation": [
      "Orientación angular del chaflán: la aguja debe quedar posicionada con el rebaje mirando hacia la punta del garfio rotativo con una tolerancia menor a 3 grados.",
      "Tope superior de altura: si la aguja no sube hasta el fondo del soporte, quedará demasiado larga y chocará contra la caja de bobina.",
      "Distancia de seguridad con la placa: el ancho del bloque fijador no debe rozar el prensatelas en su punto muerto inferior."
    ],
    "commonErrors": [
      "Apretar el tornillo con alicates o destornilladores gigantes, barriendo la rosca milimétrica del bloque fijador.",
      "No subir la aguja hasta el tope superior del orificio, provocando colisiones destructivas contra el garfio.",
      "Colocar la aguja girada o con la ranura al revés, impidiendo la formación del lazo y generando saltos de puntada continuos."
    ],
    "troubleshootingTips": [
      "Utiliza exclusivamente el destornillador corto oficial provisto con la máquina para aplicar el torque exacto con los dedos.",
      "Verifica con una linterna pequeña que el talón de la aguja toque el perno de tope en la ventanita superior del soporte.",
      "Si el tornillo prisionero muestra la rosca desgastada o la cabeza mellada, reemplázalo de inmediato por un repuesto original."
    ],
    "whenToAdjust": "Reemplaza el tornillo prisionero si notas que se afloja solo durante el bordado por la vibración de la máquina.",
    "dicaArtrelados": "El truco del imán Artrelados para cambiar agujas: Cuando vayas a aflojar el tornillo del soporte de aguja, coloca una pequeña tarjeta de cartón o un imán plano sobre el agujero de la placa de aguja. Si la aguja vieja se te resbala de los dedos, no caerá dentro de la lanzadera ni de los engranajes inferiores, ahorrándote minutos de desarme.",
    "voceSabia": "¿Sabías que en las máquinas industriales los tornillos del soporte de aguja tienen rosca fina métrica M2.5 o M3 con puntas ligeramente cóncavas para no mellar el acero del talón de la aguja al apretar?",
    "practicalExercise": "Afloja el tornillo del soporte, retira la aguja y vuelve a colocarla asegurándote de sentir el tope metálico superior. Aprieta el tornillo firmemente solo con la fuerza de tu pulgar e índice y verifica que quede perfectamente firme.",
    "quickSummary": "Pieza mecánica en el extremo de la barra de aguja que sujeta la aguja mediante un tornillo prisionero y guía el hilo.",
    "summary": "Pieza mecánica en el extremo de la barra de aguja que sujeta la aguja mediante un tornillo prisionero y guía el hilo.",
    "relatedTerms": [
      "Barra de Aguja de Bordado",
      "Aguja de Bordar",
      "Garfio Rotativo",
      "Prensatelas de Bordado"
    ]
  },
  "c-002-caixa-da-bobina": {
    "term": "Caja de Bobina",
    "level": "Iniciante 🟢",
    "category": "Componentes de la Máquina",
    "grammarClass": "Sustantivo femenino",
    "origin": "Del latín capsa (caja, estuche) y del francés bobine (carrete de hilo). Pieza central del mecanismo de doble pespunte inventado por Elias Howe e Isaac Singer en el siglo XIX.",
    "definition": "Cápsula metálica de acero inoxidable o aleación pulida (Bobbin Case) que aloja la canilla o bobina inferior dentro del garfio rotativo, equipada con un muelle tensor de lámina regulable mediante un microtornillo que controla con precisión de gramos la fuerza con la que se libera el hilo inferior durante la formación de cada puntada.",
    "howItWorks": [
      "1. La canilla devanada con hilo inferior se introduce dentro de la caja orientada en el sentido de giro correcto (generalmente en sentido horario o antihorario según el manual).",
      "2. El hilo se pasa por la ranura lateral y se desliza por debajo del muelle de tensión de lámina hasta salir por la guía frontal.",
      "3. La caja de bobina se introduce en el eje central del garfio rotativo hasta escuchar un clic firme del pestillo de seguridad.",
      "4. El garfio gira alrededor de la caja pasando el lazo del hilo superior alrededor de ella sin tocar el cuerpo de la canilla.",
      "5. El muelle tensor ejerce una resistencia constante (típicamente de 18 a 25 gramos fuerza) equilibrando el pespunte con el hilo superior."
    ],
    "beginnerExplanation": "Es la tapita o cápsula de metal donde metes el carretel chiquito de hilo blanco que va abajo de la máquina. Tiene una chapita metálica fina con un tornillito diminuto que aprieta el hilo para que no salga ni muy suelto ni muy duro. Es el corazón de la tensión de tu máquina: si esta cajita está sucia o mal regulada, el bordado se llena de nudos por abajo o el hilo blanco se sube a la cara linda de la tela.",
    "practicalExamples": [
      "Ajuste de tensión milimétrica para lograr la clásica proporción de un tercio blanco de canilla en el revés del satín.",
      "Uso de cajas de bobina estándar con resorte de freno (Pigtail) para bordado industrial a 1000 PPM.",
      "Extracción rápida mediante palanca para recargar la canilla vacía sin descalibrar el garfio."
    ],
    "matrixParametersRelation": [
      "Tensión de referencia base: la tensión de la caja de bobina se calibra primero y se mantiene fija; todas las tensiones superiores se adaptan a ella.",
      "Sensibilidad al tipo de hilo: hilos finos de bobina de calibre 60wt o 70wt requieren un ajuste más ceñido del muelle tensor.",
      "Tolerancia de balance: una tensión de bobina entre 20g y 25g garantiza columnas de satín con bordes limpios sin pliegues en la tela."
    ],
    "commonErrors": [
      "Girar el tornillito del muelle con vueltas enteras en vez de ajustes microscópicos de un cuarto de vuelta, perdiendo la calibración.",
      "Permitir la acumulación de pelusa compacta debajo de la lámina del muelle tensor, dejando el hilo totalmente suelto sin resistencia.",
      "Dejar caer la caja de bobina al piso de baldosas, deformando su borde circular e impidiendo el paso suave del hilo superior."
    ],
    "troubleshootingTips": [
      "Pasa una esquina de papel de lija al agua ultra fina (grano 1200) o un trozo de hilo dental bajo el muelle tensor para retirar pelusas viejas.",
      "Calibra la tensión usando un tensiómetro Towa: desliza la caja en el soporte del reloj y hala el hilo para una lectura exacta en gramos.",
      "Verifica que el resorte en espiral interno (freno de la canilla) esté entero para evitar que la canilla siga girando por inercia al frenar la máquina."
    ],
    "whenToAdjust": "Ajusta el tornillo del muelle si al hacer el test de pespunte no logras que el hilo blanco ocupe el tercio central en el revés de la tela.",
    "dicaArtrelados": "La prueba de la gota Artrelados (Drop Test) para calibrar la caja de bobina sin tensiómetro: Coloca la canilla con hilo en la caja. Sostén la colita del hilo con dos dedos en el aire: la caja debe quedar suspendida sin caerse. Da un suave golpecito con la muñeca hacia arriba: la caja debe caer apenas 2 o 3 centímetros y frenarse sola. Si cae hasta el piso, aprieta el tornillo un octavo de vuelta; si no cae nada, aflójalo un poquito.",
    "voceSabia": "¿Sabías que existen cajas de bobina industriales que incorporan un imán de neodimio en el fondo para estabilizar canillas de aluminio con núcleo ferromagnético, eliminando totalmente la vibración a 1200 puntadas por minuto?",
    "practicalExercise": "Toma tu caja de bobina y retira la canilla. Pasa una cerda de cepillo o hilo dental debajo de la chapita metálica del muelle tensor: te sorprenderá ver la pequeña bolita de pelusa prensada que sale y que estaba arruinando tus tensiones.",
    "quickSummary": "Cápsula metálica que aloja la canilla inferior y regula la tensión del hilo de bobina mediante un muelle de lámina.",
    "summary": "Cápsula metálica que aloja la canilla inferior y regula la tensión del hilo de bobina mediante un muelle de lámina.",
    "relatedTerms": [
      "Canilla e Hilo Inferior de Bobina",
      "Garfio Rotativo",
      "Tensiómetro de Bobina",
      "Ajuste de Tensión del Hilo"
    ]
  },
  "c-058-caixa-de-bobina-para-linha-grossa-bobbin-work": {
    "term": "Caja de Bobina Secundaria para Hilos Gruesos",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del concepto de personalización de herramientas de ateliê para técnicas especiales como el Bobbin Work (bordado por el revés) y el uso de hilados pesados decorativos.",
    "definition": "Caja de bobina complementaria destinada exclusivamente a trabajar con hilados gruesos no convencionales (lana fina, cordoncillo torzal, cinta de seda o hilos de calibre 12wt a 30wt), cuyo muelle tensor ha sido aflojado drásticamente o retirado, permitiendo el paso suave de filamentos anchos sin descalibrar la caja de bobina principal calibrada para costura estándar.",
    "howItWorks": [
      "1. La bordadora reserva una caja de bobina de repuesto identificada visualmente (generalmente marcada con esmalte de uñas de color en el pestillo).",
      "2. El tornillo del muelle tensor de esta caja se afloja de media a una vuelta completa para abrir la separación de la lámina.",
      "3. Se devana a mano o a velocidad muy lenta un hilo grueso decorativo en la canilla de metal sin estirar las fibras.",
      "4. Se introduce la canilla en la caja secundaria comprobando que el hilo grueso deslice con una resistencia suave y constante sin atascarse.",
      "5. En la máquina, la aguja superior se enhebra con hilo fino regular mientras la tela se coloca con el revés hacia arriba en el bastidor.",
      "6. Al coser, el hilo grueso de la caja secundaria queda visible en la cara superior al desbastar la pieza, logrando texturas de alto relieve."
    ],
    "beginnerExplanation": "Es una segunda cajita de canilla que guardas en tu taller para experimentos lindos. Como hay hilos hermosos pero muy gordos (como lanas finas o hilos dorados pesados) que no pasan por la aguja común, se ponen abajo en la canilla. Para no descalibrar la cajita normal de tu máquina que tiene la tensión perfecta, usas esta segunda caja con el tornillo bien flojo para que el hilo gordo pase sin trabarse.",
    "practicalExamples": [
      "Bordados con lanas finas y cintas de raso para detalles mullidos en ropa de invierno y tapices.",
      "Efectos de caligrafía artesanal y contornos rústicos con hilo de torzal en chaquetas de lona.",
      "Técnica de Bobbin Work decorativo en mantelería de lino y vestidos de fiesta de alta costura."
    ],
    "matrixParametersRelation": [
      "Modo Espejo obligatorio (Mirror Image): la matriz debe invertirse horizontalmente porque la tela se monta boca abajo en el bastidor.",
      "Longitud de puntada alargada: de 3,5 mm a 5,0 mm para dar espacio al volumen del hilado inferior.",
      "Prohibición de satín cerrado: solo puntadas rectas abiertas o contornos fluidos; el satín denso apelmazaría el hilo grueso formando nudos gigantes."
    ],
    "commonErrors": [
      "Modificar el tornillo de la caja de bobina principal de la máquina, perdiendo la calibración estándar para siempre.",
      "Devanar el hilo grueso a máxima velocidad en el devanador automático, estirando y quebrando el hilado decorativo.",
      "Usar diseños digitalizados para hilo normal, provocando atascos inmediatos del garfio por exceso de densidad."
    ],
    "troubleshootingTips": [
      "Pinta el pestillo de tu caja secundaria con esmalte de uñas rojo o dorado para distinguirla al instante de la caja original de fábrica.",
      "Enhebra en la aguja superior un hilo fino de poliéster 60wt o hilo transparente de monofilamento para que las puntadas de anclaje no se vean.",
      "Coloca entretela hidrosoluble pesada o entretela de rasgar suave por el lado que mira hacia arriba para proteger la tela de base."
    ],
    "whenToAdjust": "Afloja el tornillo del muelle un cuarto de vuelta más si sientes que el hilo grueso se frena o se deshilacha al tirar con la mano.",
    "dicaArtrelados": "El tip maestro Artrelados para cajas secundarias: Nunca compres cajas de bobina genéricas de plástico barato para Bobbin Work. Compra una caja de bobina original de acero de la misma marca de tu máquina. Aunque le aflojes el tornillo, la estructura de acero mantendrá el garfio protegido y evitarás descalibrar el tiempo de sincronización de la máquina.",
    "voceSabia": "¿Sabías que marcas japonesas de alta gama como Janome y Brother venden comercialmente kits oficiales de Bobbin Work que incluyen una caja de bobina amarilla con el muelle calibrado de fábrica a cero tensión para facilitar esta técnica?",
    "practicalExercise": "Toma una caja de bobina de repuesto. Enhebra una bobina con hilo de bordar a mano de 3 hebras. Afloja el tornillo hasta que deslice como seda. Borda una espiral con la tela al revés y descubre el espectacular cordón en relieve que aparece al dar vuelta la tela.",
    "quickSummary": "Caja de canilla adicional con muelle aflojado para bordar por el revés con hilos gruesos y lanas decorativas.",
    "summary": "Caja de canilla adicional con muelle aflojado para bordar por el revés con hilos gruesos y lanas decorativas.",
    "relatedTerms": [
      "Caja de Bobina",
      "Bordado Bobbin Work / Bordado por el Revés",
      "Canilla e Hilo Inferior de Bobina",
      "Ajuste de Tensión del Hilo"
    ]
  },
  "c-063-caixa-transporte-dentes-rebaixados": {
    "term": "Mecanismo de Dientes de Arrastre Retráctiles",
    "level": "Iniciante 🟢",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés drop feed mechanism (mecanismo de descenso de arrastre) y darning plate. Innovación mecánica de principios del siglo XX para permitir el zurcido libre y el acolchado.",
    "definition": "Sistema electromecánico o palanca manual presente en máquinas de coser y bordar combinadas que desacopla y desciende los dientes dentados de arrastre (Feed Dogs) por debajo del nivel de la placa de aguja, o bien los cubre mediante una placa ciega de zurcido, eliminando el empuje automático de la tela para que el movimiento quede controlado exclusivamente por el pantógrafo o las manos de la artesana.",
    "howItWorks": [
      "1. La operaria acciona la palanca deslizante trasera o inferior identificada con el símbolo de dientes bajados.",
      "2. La leva del árbol inferior desciende el soporte de la cremallera dentada 2 milímetros por debajo de la superficie de la placa.",
      "3. En máquinas combinadas computarizadas, al conectar el módulo de bordado, un microinterruptor baja los dientes de forma 100% automática.",
      "4. La tela y la entretela quedan apoyadas sobre una superficie lisa y plana sin fricción dentada.",
      "5. El pantógrafo o bastidor manual se desplaza en 360 grados sin que los dientes enganchen ni raspen el revés del tejido."
    ],
    "beginnerExplanation": "Son los 'dientitos' de metal que asoman en la chapita de la máquina de coser y que empujan la tela hacia atrás cuando estás cosiendo una costura recta. Para bordar, esos dientitos molestan porque la máquina necesita mover la tela para cualquier lado libremente. Este mecanismo baja esos dientitos debajo de la chapa para que la mesa quede lisa como una pista de hielo y el bastidor pueda patinar suavemente en todas direcciones.",
    "practicalExamples": [
      "Conexión automática del módulo de bordado computarizado en máquinas híbridas de costura y bordado.",
      "Bordado libre artesanal (Free-Motion) y zurcido de prendas con bastidor guiado a mano.",
      "Acolchado libre (Stippling) de mantas y acolchados sin arrastre direccionado."
    ],
    "matrixParametersRelation": [
      "Bloqueo de arrastre: en bordado computarizado el transporte mecánico de la tela es asumido en un 100% por los servomotores X-Y del pantógrafo.",
      "Superficie plana sin marcas: evita que los dientes metálicos piquen o desgarren la entretela inferior durante movimientos laterales rápidos.",
      "Sensor de módulo conectado: si los dientes no bajan, la máquina bloquea el arranque emitiendo una alarma de seguridad en pantalla."
    ],
    "commonErrors": [
      "Intentar bordar con el módulo conectado sin haber bajado los dientes en máquinas que requieren la palanca manual, rompiendo agujas al chocar con el aro.",
      "Olvidar subir los dientes y dar una vuelta al volante con la mano cuando se desea volver a la costura recta tradicional.",
      "Acumulación de pelusas apelmazadas en los huecos de los dientes que impiden que bajen por completo."
    ],
    "troubleshootingTips": [
      "Retira la placa de aguja una vez por semana y limpia con un pincel duro la pelusa atrapada entre las hileras de los dientes.",
      "Si los dientes no suben al mover la palanca de regreso, gira el volante de la máquina una vuelta completa hacia ti para que la leva vuelva a enganchar.",
      "En máquinas familiares que no tienen palanca de descenso, coloca la placa cobertora de zurcido de plástico sobre la placa metálica."
    ],
    "whenToAdjust": "Baja los dientes de arrastre siempre que vayas a colocar el módulo de bordado o a realizar bordado libre con bastidor manual.",
    "dicaArtrelados": "El tip de transición suave Artrelados: Si tu máquina es combinada (costura y bordado), cuando vuelvas a subir los dientes para coser una prenda, no te asustes si ves que los dientes siguen abajo: giran el volante hacia adelante con la mano. Los dientes mecánicos necesitan medio giro del eje para que el resorte los levante a su posición de costura recta.",
    "voceSabia": "¿Sabías que las máquinas industriales dedicadas exclusivamente al bordado computarizado ni siquiera traen dientes de arrastre ni ranuras en la placa, sino una placa de aguja completamente circular y ciega de acero cromado?",
    "practicalExercise": "Localiza la palanca de descenso de dientes en tu máquina. Muévela y observa cómo los dientitos se esconden debajo de la placa de aguja. Pasa tu dedo por encima para sentir la superficie totalmente lisa y despejada.",
    "quickSummary": "Mecanismo que retrae los dientes de transporte bajo la placa de aguja para que el bastidor se mueva libremente en 360°.",
    "summary": "Mecanismo que retrae los dientes de transporte bajo la placa de aguja para que el bastidor se mueva libremente en 360°.",
    "relatedTerms": [
      "Bordado Libre (Free-Motion)",
      "Placa de Aguja de Bordado",
      "Pantógrafo de Máquina de Bordar",
      "Prensatelas de Bordado con Resorte"
    ]
  },
  "c-101-caixa-de-troca-de-cor-came-seletor-de-agulhas": {
    "term": "Caja de Cambio de Color y Selector de Agujas",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés color change cam box & needle selector mechanism. Sistema mecatrónico desarrollado por fabricantes japoneses (Tajima, Barudan) para automatizar la selección secuencial de barras de aguja.",
    "definition": "Subconjunto mecánico de alta precisión compuesto por un motor paso a paso, una leva cilíndrica de ranura helicoidal (Color Change Cam), un bloque de levas deslizante y un sensor de posición angular o potenciómetro, encargado de desplazar transversalmente el bloque de agujas para conectar la barra de aguja correspondiente con el mecanismo principal de accionamiento según los códigos de la matriz.",
    "howItWorks": [
      "1. La CPU de la máquina lee el comando de cambio de aguja (por ejemplo, pasar de aguja 3 a aguja 8).",
      "2. El motor paso a paso acciona la leva helicoidal haciéndola girar el número exacto de grados angulares.",
      "3. El pasador seguidor de leva desplaza horizontalmente todo el carro frontal del cabezal sobre guías de precisión prismáticas.",
      "4. Un tope de retención mecánico (Catcher / Indexer) asegura que el cabezal se enclave exactamente en la posición de la aguja 8 con tolerancia menor a 0,02 mm.",
      "5. El potenciómetro o encoder óptico confirma la posición a la placa central y el ciclo de costura continúa de inmediato."
    ],
    "beginnerExplanation": "Es la cajita mecánica inteligente que se encarga de mover las agujas hacia los costados para cambiar de color. Cuando el dibujo dice que ahora toca bordar de amarillo, un motorcito gira una pieza especial con ranuras curvas que empuja todo el bloque de agujas hasta dejar la aguja amarilla exactamente debajo del motor que la empuja. Todo pasa en menos de un segundo y con una precisión milimétrica.",
    "practicalExamples": [
      "Cambios secuenciales automáticos entre 15 colores distintos en escudos y logotipos de alta complejidad.",
      "Transición rápida entre hilo normal de poliéster e hilo grueso en la misma matriz.",
      "Detección y recuperación automática de posición tras una detención de emergencia durante el cambio de color."
    ],
    "matrixParametersRelation": [
      "Comandos de cambio de aguja (Color Change Codes): códigos matriciales binarios que especifican el número de aguja de destino.",
      "Tiempo de transición por cambio: típicamente entre 0,8 y 1,5 segundos; una buena digitalización agrupa colores para minimizar estos ciclos.",
      "Parada en punto muerto superior: el cambio de color solo puede ejecutarse cuando todas las agujas están completamente elevadas a 100° de sincronización."
    ],
    "commonErrors": [
      "Falta de lubricación en la ranura de la leva helicoidal, provocando sobrecalentamiento del motor de cambio y paradas por error.",
      "Intentar mover manualmente el bloque de agujas con fuerza cuando el freno del motor paso a paso está activado.",
      "Descalibración del potenciómetro angular, provocando que la aguja baje ligeramente desplazada y choque contra el borde del prensatelas."
    ],
    "troubleshootingTips": [
      "Aplica grasa blanca de litio o teflón en la ranura helicoidal de la leva de cambio de color cada seis meses.",
      "Verifica en la pantalla de diagnóstico técnico que el valor numérico del sensor de posición coincida exactamente con cada número de aguja.",
      "Limpia las guías prismáticas horizontales con un paño seco para eliminar pelusas textiles apelmazadas."
    ],
    "whenToAdjust": "Calibra el sensor de cambio de color si la máquina se frena con mensaje 'Error de centrado de aguja' o 'Half Color Change'.",
    "dicaArtrelados": "El tip de diagnóstico Artrelados para el cambio de color: Si tu máquina se detiene a mitad de un cambio de aguja (queda en posición intermedia), nunca fuerces el cabezal con las manos. Apaga la máquina, busca el eje hexagonal posterior de la leva de cambio de color y gíralo con la llave manual hasta que el cabezal calce en el número de aguja más cercano con un suave 'clic'. Al encender, la máquina se calibrará sola sin romper piezas.",
    "voceSabia": "¿Sabías que las levas helicoidales de cambio de color se mecanizan en tornos CNC de 5 ejes con tolerancias de ajuste micrométricas para que el movimiento sea completamente silencioso y no vibre a alta velocidad?",
    "practicalExercise": "Observa el lateral del cabezal de tu máquina mientras seleccionas manualmente un cambio de aguja en la pantalla: fíjate en el giro sincronizado de la leva helicoidal y en cómo el carro se desplaza suavemente hasta la posición exacta.",
    "quickSummary": "Mecanismo mecatrónico con leva helicoidal que traslada el bloque de agujas para seleccionar el color programado en la matriz.",
    "summary": "Mecanismo mecatrónico con leva helicoidal que traslada el bloque de agujas para seleccionar el color programado en la matriz.",
    "relatedTerms": [
      "Cabezal Multiaguja",
      "Asignación de Agujas y Mapeo de Color",
      "Potenciómetro de Cambio de Color",
      "Servomotor de Árbol Principal"
    ]
  },
  "c-053-calcador-com-mira-led-ponteiro-de-luz": {
    "term": "Prensatelas con Guía de Luz LED",
    "level": "Iniciante 🟢",
    "category": "Equipamiento & Herramientas",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés LED pointer embroidery foot. Innovación óptica desarrollada por marcas japonesas para reemplazar la visualización estimada por un haz luminoso exacto de caída de aguja.",
    "definition": "Prensatelas especializado de bordado equipado con un diodo emisor de luz (LED) o microdiodo láser integrado que proyecta un punto brillante concentrado (de color rojo, verde o blanco) exactamente en la coordenada física donde penetrará la aguja sobre la tela, permitiendo una alineación visual instantánea, precisa e intuitiva del centro y los límites del diseño en el bastidor.",
    "howItWorks": [
      "1. El prensatelas se conecta a la toma eléctrica auxiliar del cabezal o se activa automáticamente desde el panel de control.",
      "2. El lente óptico colimador enfoca un rayo de luz visible en forma de punto o cruz milimétrica sobre la tela.",
      "3. La bordadora desplaza el pantógrafo con las flechas de dirección de la pantalla observando el punto luminoso sobre las marcas trazadas en la prenda.",
      "4. Al recorrer el perímetro del diseño (función de trazado o Trace), el punto LED dibuja los cuatro vértices del campo de bordado en tiempo real.",
      "5. El sistema elimina la necesidad de bajar manualmente la aguja con el volante para corroborar el punto de inicio."
    ],
    "beginnerExplanation": "Es un prensatelas especial que tiene una pequeña lucecita roja o blanca que apunta directo a la tela como si fuera la mira láser de una película. Te muestra exactamente en qué punto exacto va a clavar la aguja antes de que la máquina empiece a coser. Es ideal para que nunca más te quede un bordado torcido o descentrado en el bolsillo o en el pecho de una remera.",
    "practicalExamples": [
      "Centrado milimétrico de monogramas sobre el bolsillo de camisas confeccionadas.",
      "Alineación precisa de diseños continuos y guardas largas entre un bastidor y el siguiente.",
      "Verificación de que el diseño no choque contra botones, cierres o bordes metálicos del bastidor."
    ],
    "matrixParametersRelation": [
      "Comprobación de origen (Origin Check): uso del puntero óptico para alinear el punto inicial de la matriz con piquetes marcados en la tela.",
      "Función de trazado de contorno (Trace Function): verificación del área total de bordado antes de presionar Start.",
      "Calibración de desfase de haz (LED Offset): compensación en el menú técnico de la máquina para que el haz coincida exactamente con la penetración real de la aguja."
    ],
    "commonErrors": [
      "Golpear el prensatelas LED al colocar bastidores pesados, desalineando el lente colimador del haz luminoso.",
      "Olvidar conectar el cable eléctrico del prensatelas al montarlo en la barra del cabezal.",
      "Confiar ciegamente en el haz sin verificar que la máquina esté calibrada con el centro exacto de la aguja."
    ],
    "troubleshootingTips": [
      "Limpia el pequeño lente del LED con un bastoncillo de algodón seco para retirar polvo textil y mantener el haz nítido.",
      "Si el punto de luz no coincide exactamente con el agujero de la aguja, calíbralo desde el menú 'Ajuste de puntero LED' en la pantalla de la máquina.",
      "Desactiva la luz LED durante bordados largos si tu modelo no la apaga automáticamente, prolongando la vida útil del diodo."
    ],
    "whenToAdjust": "Calibra el puntero LED si al clavar la aguja con el volante notas que cae más de 0,5 mm desplazada respecto al punto de luz.",
    "dicaArtrelados": "El tip de precisión absoluta Artrelados con puntero LED: Cuando tengas que bordar un bolsillo con una cruz marcada con tiza, no mires solo el centro. Haz que la máquina trace los cuatro extremos del diseño con el LED encendido: observa cómo el punto de luz viaja paralelo a la costura superior del bolsillo. Si la luz no viaja perfectamente paralela, rota el diseño 1 o 2 grados en la pantalla antes de coser. ¡Te quedará impecable!",
    "voceSabia": "¿Sabías que la tecnología del puntero LED en bordado fue adaptada de los sistemas de puntería quirúrgica usados en oftalmología para centrar lentes intraoculares con tolerancia de micrones?",
    "practicalExercise": "Coloca una tela en el bastidor con un punto marcado con tiza. Enciende el prensatelas LED y mueve el bastidor hasta hacer coincidir la luz con el punto de tiza. Baja la aguja lentamente con la mano y comprueba cómo la punta de la aguja entra exactamente en el centro de la marca.",
    "quickSummary": "Prensatelas con haz de luz luminoso concentrado que proyecta el punto exacto de penetración de la aguja para centrado perfecto.",
    "summary": "Prensatelas con haz de luz luminoso concentrado que proyecta el punto exacto de penetración de la aguja para centrado perfecto.",
    "relatedTerms": [
      "Prensatelas de Bordado con Resorte",
      "Puntero Láser de Posicionamiento",
      "Función de Trazado de Contorno (Trace)",
      "Calibración de Punto Cero y Origen Central"
    ]
  },
  "c-044-calcador-de-bordado": {
    "term": "Prensatelas de Bordado con Resorte",
    "level": "Iniciante 🟢",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín calcare (pisar, presionar) y del inglés embroidery hopping foot (prensatelas saltarín). Componente mecánico esencial que sustituyó los prensatelas fijos de costura recta.",
    "definition": "Elemento mecánico oscilante provisto de un resorte helicoidal y un anillo circular inferior pulido, accionado sincrónicamente por una leva del árbol principal para descender y comprimir firmemente la tela contra la placa en el momento exacto en que la aguja penetra y forma el lazo, elevándose de inmediato cuando la aguja sale del tejido para permitir el libre desplazamiento horizontal del bastidor.",
    "howItWorks": [
      "1. La barra de aguja desciende impulsando la biela superior del prensatelas.",
      "2. El resorte helicoidal amortigua el contacto mientras la suela circular aplasta la tela contra la placa de aguja.",
      "3. La tela queda inmovilizada, evitando el efecto de flameo (Flagging) donde el tejido se levantaría siguiendo a la aguja.",
      "4. La aguja sube unos milímetros formando el lazo inferior que es atrapado por la punta del garfio rotativo.",
      "5. El prensatelas se eleva 1 a 2 milímetros sobre la superficie, liberando la tela para que el pantógrafo traslade el bastidor a la siguiente coordenada."
    ],
    "beginnerExplanation": "Es el piecito redondo de metal con resortito que está al lado de la aguja y que sube y baja a los saltitos como un conejito ('hopping'). Su función es súper importante: aplasta la tela justo cuando la aguja entra para que la tela no se mueva ni se arrugue, y se levanta en una fracción de segundo para que el aro pueda avanzar libremente a la siguiente puntada.",
    "practicalExamples": [
      "Bordado estable y sin deformaciones sobre telas elásticas de punto, jersey y polar.",
      "Uso de suelas circulares abiertas (Open-Toe) para mayor visibilidad en bordados de precisión.",
      "Amortiguación de capas gruesas en técnicas de acolchado y bordado de parches en sarga pesada."
    ],
    "matrixParametersRelation": [
      "Altura del prensatelas (Presser Foot Height): regulable mecánicamente o por software para adaptarse al grosor de la tela (0,5 mm para seda, 2,5 mm para toallas gruesas).",
      "Sincronización de carrera (Stroke Timing): debe mantener la tela aplastada exactamente durante el instante de formación del lazo (Loop Formation).",
      "Prevención de flameo (Anti-Flagging): evita saltos de puntada provocados por el rebote vertical del tejido."
    ],
    "commonErrors": [
      "Ajustar el prensatelas demasiado bajo, aplastando telas delicadas como terciopelo o pana y dejando marcas imborrables de frote.",
      "Ajustar el prensatelas demasiado alto en telas finas, permitiendo que la tela salte hacia arriba y produzca nudos inferiores o saltos de aguja.",
      "Dejar que el tornillo de sujeción del prensatelas se afloje, permitiendo que la aguja baje y choque contra el anillo metálico partiéndose."
    ],
    "troubleshootingTips": [
      "Regula la altura de modo que en el punto más bajo pase apenas una hoja de papel doblada entre el prensatelas y la tela.",
      "En telas acolchadas o con goma EVA de 3D Puff, eleva la altura del prensatelas 1 mm para que no aplaste el volumen del relieve.",
      "Revisa periódicamente la suela del prensatelas: debe estar perfectamente lisa sin rayaduras causadas por agujas despuntadas."
    ],
    "whenToAdjust": "Modifica la altura del prensatelas cada vez que cambies drásticamente de espesor de tejido (de batista fina a toalla gruesa).",
    "dicaArtrelados": "El tip de la altura perfecta Artrelados: Si estás bordando y escuchas un chasquido continuo rítmico ('tac-tac-tac') en cada puntada, tu prensatelas está golpeando la tela demasiado bajo. Súbelo apenas medio milímetro con el tornillo de regulación lateral. El sonido de la máquina cambiará inmediatamente a un murmullo suave y parejo, y el hilo no se fatigará.",
    "voceSabia": "¿Sabías que a 1000 puntadas por minuto, el prensatelas de bordado sube, comprime y salta más de 16 veces por segundo, soportando una fuerza de impacto acumulada de varias toneladas durante una jornada de trabajo?",
    "practicalExercise": "Coloca una tela de toalla en el bastidor. Observa a baja velocidad cómo el prensatelas aplasta los bucles de felpa justo en el momento en que baja la aguja y cómo se despega limpiamente antes de que el bastidor pegue el salto.",
    "quickSummary": "Elemento oscilante con resorte que sujeta la tela durante la penetración de la aguja y se eleva para permitir el salto del bastidor.",
    "summary": "Elemento oscilante con resorte que sujeta la tela durante la penetración de la aguja y se eleva para permitir el salto del bastidor.",
    "relatedTerms": [
      "Cabezal de Bordado",
      "Leva Excéntrica de Elevación del Prensatelas",
      "Efecto de Flameo de la Tela (Flagging)",
      "Prensatelas con Guía de Luz LED"
    ]
  },
  "c-calcas-jeans-e-jaquetas-jeans-bordado-denim-pesado": {
    "term": "Pantalones y Chaquetas de Denim",
    "level": "Intermedio 🟡",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del término francés Serge de Nîmes (sarga de Nimes / Denim) y del inglés jeans (por los marineros de Génova / Gênes). Tejido resistente de sarga cruzada de algodón teñido con índigo, icono de la moda mundial.",
    "definition": "Especialización técnica de bordado computarizado sobre prendas de tela vaquera pesada (denim de 10 a 14 onzas), caracterizada por la presencia de costuras dobles gruesas, remaches metálicos y áreas de difícil acceso (bolsillos traseros, canesús y espaldas completas), que demanda agujas reforzadas antidesvío, entretelas estables y bastidores de alta presión.",
    "howItWorks": [
      "1. Se analiza la zona a intervenir (espalda abierta, bolsillo cerrado o pernera de pantalón).",
      "2. En bolsillos traseros confeccionados, se utiliza un bastidor de bolsillo de inserción delgada o se descosen las esquinas superiores para acceder con el aro.",
      "3. Se monta en la máquina una aguja de caña reforzada Jeans / Denim o aguja de titanio calibre 90/14 o 100/16 con punta afilada.",
      "4. Se utiliza entretela de cortar (Cut-away) de gramaje medio-alto (70 a 80 g/m²) para sostener la firmeza de la sarga cruzada.",
      "5. La máquina borda a velocidad moderada (650 a 750 PPM) para evitar que la aguja se desvíe al cruzar costuras dobles con pespunte grueso."
    ],
    "beginnerExplanation": "Bordar sobre camperas o pantalones de jean es uno de los trabajos más lindos y pedidos, pero el jean es una tela gruesa y pesada que tiene costuras muy duras. Si usas agujas comunes finitas, la aguja choca contra la costura dura, se dobla y se parte al instante. Por eso se usan agujas fuertes especiales para jean, entretelas firmes que no se estiren y se baja un poquito la velocidad de la máquina para que cosa con fuerza y prolijidad.",
    "practicalExamples": [
      "Grandes espaldas completas con águilas, calaveras y logotipos en camperas de denim para moda urbana.",
      "Monogramas y flores delicadas bordadas en los bolsillos traseros de pantalones vaqueros femeninos.",
      "Bordados desgastados tipo vintage en faldas y bermudas de denim lavado a la piedra."
    ],
    "matrixParametersRelation": [
      "Compensación de tirantez media: el denim es un tejido plano estable pero el lavado posterior puede encogerlo; aplicar 0,40 mm de Pull Compensation.",
      "Densidad estándar: no sobrepasar densidades de 0,38 mm; la propia densidad de la tela denim proporciona una base sólida sin necesidad de saturar de hilo.",
      "Control de cruce de costuras: en la matriz, evitar colocar letras diminutas o satines muy finos exactamente sobre las costuras gruesas remalladas del canesú."
    ],
    "commonErrors": [
      "Usar agujas finas 75/11 de punta de bola, provocando desviaciones de aguja y roturas al atravesar las costuras dobles reforzadas.",
      "Usar entretela de rasgar débil que se quiebra con el peso del denim, produciendo arrugas alrededor del diseño.",
      "No verificar que la aguja no choque contra los remaches metálicos de cobre de las esquinas del bolsillo."
    ],
    "troubleshootingTips": [
      "Utiliza agujas Schmetz o Groz-Beckert Jeans (System 130/705 H-J) de calibre 90/14: su caña reforzada evita la flexión al atravesar costuras.",
      "Aplica spray lubricante de silicona en la zona de costura gruesa para enfriar la aguja y facilitar la penetración.",
      "Usa bastidores magnéticos para camperas gruesas: evitan tener que forzar y desgastar los tornillos de los bastidores plásticos tradicionales."
    ],
    "whenToAdjust": "Reduce la velocidad a 600 PPM cuando el diseño pase directamente por encima de una costura transversal gruesa de la prenda.",
    "dicaArtrelados": "El tip de ateliê para bordar bolsillos de jean Artrelados: Si quieres bordar un bolsillo trasero de un pantalón vaquero confeccionado sin tener que descoser todo el pantalón, descose únicamente las presillas de las dos esquinas superiores del bolsillo y desliza un bastidor pequeño de bolsillo con entretela autoadhesiva. Borda tu diseño, vuelve a coser las dos esquinitas con hilo torzal amarillo de jean y tu cliente quedará deslumbrado con un acabado de fábrica.",
    "voceSabia": "¿Sabías que el clásico tinte azul índigo tradicional de los pantalones de jean se deposita únicamente en la superficie de los hilos de urdimbre exteriores dejando el centro blanco, lo que permite que los bordados de colores vivos resalten con un contraste visual inigualable?",
    "practicalExercise": "Toma un retazo de jean viejo que tenga una costura doble gruesa. Prueba a bordar una línea recta a velocidad normal con aguja común y luego con aguja para jean 90/14. Sentirás cómo la aguja de denim atraviesa la costura dura con un sonido limpio sin vibrar.",
    "quickSummary": "Bordado sobre tela vaquera pesada que requiere agujas reforzadas para jean, entretela estable y control de costuras dobles.",
    "summary": "Bordado sobre tela vaquera pesada que requiere agujas reforzadas para jean, entretela estable y control de costuras dobles.",
    "relatedTerms": [
      "Aguja para Tejidos Pesados y Denim",
      "Bastidor Magnético",
      "Entretela de Cortar (Cut-away)",
      "Bordado en Bastidor Expandido / Gran Formato"
    ]
  }
};

import { Verbete } from "../../types";

export const LOTE2_PART2_ES: Record<string, Partial<Verbete>> = {
  // A-041
  "a-031-ajuste-de-folga-da-chapa-de-agulha": {
    term: "Ajuste de Holgura de la Placa de Aguja",
    level: "Avanzado 🔴",
    category: "Mecánica y Componentes de la Máquina / Calibración",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín lamina (placa) y del francés gorge (garganta / placa de aguja). Componente de paso vertical para la formación de la puntada.",
    summary: "Calibración del orificio central de la placa de aguja para evitar que la tela se hunda en la cavidad y asegurar que el hilo pase sin rebarbas.",
    definition: "El ajuste de holgura de la placa de aguja (Needle Plate Clearance) es el centrado geométrico y selección del diámetro del orificio de la placa metálica por donde desciende la aguja. Determina el soporte que recibe la tela alrededor del punto de perforación e impide que la aguja raspe los bordes metálicos.",
    technicalDetails: "El orificio estándar para bordado con aguja 75/11 tiene un diámetro de 1,6 mm a 2,0 mm. Si la aguja golpea la placa metálica por desalineación, se generan micro-rebarbas filosas que cortan el hilo superior a cada segundo.",
    beginnerExplanation: "Es la chapita de metal lisa que está justo debajo de la aguja con un agujerito en el medio. La aguja tiene que entrar perfectamente en el centro de ese agujerito sin tocar los bordes. Si la aguja choca la chapa, le deja una muesca filosa que muerde y corta el hilo todo el tiempo.",
    construction: [
      "Placa de aguja de acero templado cromado pulido",
      "Orificio central calibrado (diámetro 1,6 mm a 2,2 mm)",
      "Tornillos avellanados de fijación a la bancada",
      "Bisel inferior de entrada para el garfio rotativo"
    ],
    howItWorks: [
      "1. La aguja desciende guiada por la barra hacia el centro del orificio de la placa.",
      "2. Pasa con una holgura regular de 0,3 mm a 0,5 mm en todo su perímetro.",
      "3. La placa sostiene la tela plana evitando que sea empujada hacia la canilla.",
      "4. El hilo se desliza suavemente sin rozar contra aristas metálicas dañadas."
    ],
    mainTypes: [
      "Placa de Aguja Estándar Circular (orificio de 1,8 mm)",
      "Placa de Aguja para Tejidos Finos (micro-orificio de 1,3 mm)",
      "Placa de Aguja de Ranura Ancha para Aguja Doble / Vainica"
    ],
    advantages: [
      "✔ Soporte plano total que elimina el hundimiento de telas finas",
      "✔ Previene roturas crónicas de hilo por aristas melladas",
      "✔ Mejora la definición de detalles pequeños y contornos"
    ],
    limitations: [
      "Si la aguja se desvía por chocar con el bastidor, dañará el orificio de la placa de inmediato."
    ],
    commonErrors: [
      "❌ Continuar bordando después de que una aguja se quebró y golpeó la placa.",
      "❌ Instalar placas de aguja genéricas mal centradas.",
      "❌ No lijar ni pulir las rebarbas del orificio tras un impacto de aguja."
    ],
    troubleshootingTips: [
      "Si el hilo se corta justo al penetrar la tela: pase la uña o un palillo por el orificio de la placa; si siente una muesca, lije con lija al agua 1200 y pula con pasta.",
      "Si la tela fina se mete dentro del agujero: cambie a una placa de orificio estrecho."
    ],
    dicaArtrelados: "¡Cada vez que se le quiebre una aguja en la máquina, pase la uña alrededor del agujerito de la placa de metal! Si siente un raspón o muesca, ¡esa rebarba le va a cortar todos los hilos del día! Pula la placa con un cordón de hilo embebido en pasta de pulir metales hasta dejarla suave como un espejo.",
    voceSabia: "¡El orificio de la placa de aguja está pulido con diamante industrial para garantizar que el hilo de bordar resbale sin la más mínima fricción a 1.000 PPM!",
    practicalExercise: "Retire la placa de aguja de su máquina e inspeccione el orificio con una lupa y buena luz. Pase un hisopo de algodón: si suelta fibras, el orificio tiene rebarba y necesita ser pulido.",
    quickSummary: "Calibración y mantenimiento del orificio de la placa metálica para garantizar paso suave de aguja e hilo sin aristas cortantes.",
    relatedTerms: [
      "Barra de Aguja",
      "Rotura de Hilo (Thread Break)",
      "Mantenimiento Preventivo"
    ]
  },

  // A-042
  "a-084-ajuste-de-folga-entre-agulha-e-lan-adeira-needle-to-hook-clearance-timing-gap": {
    term: "Ajuste de Holgura entre Aguja y Garfio Rotativo",
    level: "Avanzado 🔴",
    category: "Mecánica y Componentes de la Máquina / Calibración",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín acicula (aguja) y del provenzal lansar (lanzar / lanzadera). Ajuste micrométrico maestro de la costura computarizada.",
    summary: "Calibración de la distancia de 0,05 mm a 0,10 mm entre la punta del garfio y el chaflán de la aguja para capturar la lazada sin chocar.",
    definition: "El ajuste de holgura entre aguja y garfio (Hook Timing & Needle Clearance) es la distancia microscópica horizontal que separa la punta afilada del garfio rotativo del chaflán (scarf) de la aguja en el momento exacto de captura de la lazada inferior. Es la calibración mecánica más crítica de toda la máquina de bordar.",
    technicalDetails: "La distancia ideal es de 0,05 mm a 0,10 mm (el grosor de una hoja de papel de 80g). Si la holgura es mayor a 0,15 mm, la punta del garfio pasará de largo saltando la puntada; si es menor a 0,03 mm o roza, la punta chocará contra la aguja desafilándose o quebrándola.",
    beginnerExplanation: "Por debajo de la tela hay un gancho giratorio veloz (el garfio) que pasa rozando la aguja para atrapar el hilo. La distancia entre la punta del gancho y la aguja tiene que ser tan finita como el espesor de una hoja de papel: si pasa muy lejos no atrapa el hilo y salta puntos; si pasa muy cerca choca y rompe la aguja.",
    construction: [
      "Punta del garfio rotativo templado con filo rectificado",
      "Chaflán (scarf) posterior de la aguja de bordado",
      "Tornillos micrométricos de fijación del garfio sobre el eje",
      "Calibre de espesores (galga de 0,05 mm)"
    ],
    howItWorks: [
      "1. La aguja desciende a su punto más bajo y sube entre 1,8 mm y 2,2 mm.",
      "2. La subida forma un bucle de hilo (lazada) en el chaflán.",
      "3. La punta del garfio pasa a 0,05 mm capturando la lazada limpiamente.",
      "4. El hilo inferior se entrelaza formando la puntada perfecta sin vibración."
    ],
    mainTypes: [
      "Ajuste en Máquinas Industriales Multiaguja (con reloj comparador o galga)",
      "Ajuste en Bordadoras Domésticas de Garfio Horizontal o Vertical",
      "Sincronización Avanzada con Protección de Aguja (Needle Guard Deflection)"
    ],
    advantages: [
      "✔ Cero saltos de puntada a cualquier velocidad de trabajo",
      "✔ Funcionamiento silencioso, suave y regular del cabezal",
      "✔ Previene roturas catastróficas de agujas y garfios"
    ],
    limitations: [
      "Requiere herramientas de precisión (lupa, galga de espesores y destornillador adecuado).",
      "Una mala regulación puede desafilar la punta del garfio rotativo."
    ],
    commonErrors: [
      "❌ Dejar que el garfio golpee la aguja produciendo un chasquido metálico 'clic-clic'.",
      "❌ Ajustar la holgura con una aguja doblada o despuntada.",
      "❌ No apretar firmemente los tornillos del garfio tras calibrar."
    ],
    troubleshootingTips: [
      "Si la máquina no forma puntadas y el hilo superior sale entero sin coser: la holgura aguja-garfio se abrió o el garfio se atrasó.",
      "Si la aguja se rompe en cuanto pulsa Start: el garfio está adelantado y colisiona de frente con la caña de la aguja."
    ],
    dicaArtrelados: "Para calibrar la distancia perfecta entre aguja y garfio sin herramientas caras: corte una tirita de papel común de fotocopiadora (de 75g a 80g) y colóquela entre la punta del garfio y el chaflán de la aguja. El garfio debe deslizar rozando el papel suavemente sin cortarlo ni doblar la aguja. ¡Esa es la distancia sagrada de 0,08 mm!",
    voceSabia: "¡A 1.000 puntadas por minuto, la punta del garfio pasa por detrás de la aguja más de 16 veces por segundo a una velocidad de más de 30 km/h en un espacio menor al grosor de un cabello humano!",
    practicalExercise: "Retire la placa de aguja y la caja de bobina. Gire el volante lentamente con la mano y observe con una linterna el momento mágico en que la punta del garfio cruza por detrás del chaflán de la aguja sin tocarla.",
    quickSummary: "Calibración micrométrica de la distancia (0,05 a 0,10 mm) entre la aguja y la punta del garfio rotativo para capturar la lazada sin saltos ni colisiones.",
    relatedTerms: [
      "Garfio Rotativo / Lanzadera",
      "Chaflán de la Aguja (Scarf)",
      "Tiempo de Lanzadera (Hook Timing)"
    ]
  },

  // A-043
  "a-024-ajuste-de-ponto-de-entrada-e-saida": {
    term: "Ajuste de Punto de Entrada y Salida",
    level: "Intermedio 🟡",
    category: "Parámetros y Software",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del inglés entry & exit points. Parámetro de ramificación y trayectoria óptima en software de digitalización.",
    summary: "Configuración estratégica del inicio y final de cada elemento bordado para minimizar saltos de hilo y traslados innecesarios del bastidor.",
    definition: "El ajuste de punto de entrada y salida es la definición deliberada de las coordenadas X e Y exactas donde un objeto vectorial comienza y termina de bordarse. Permite que el final de un elemento coincida con el principio del siguiente, reduciendo cortes automáticos de hilo y acelerando la producción.",
    technicalDetails: "Se programa en el software mediante las herramientas de ramificación automática (Branching) o reposicionamiento manual de nodos verdes (entrada) y rojos (salida). Un diseño optimizado reduce hasta un 50% los saltos de hilo (jump stitches).",
    beginnerExplanation: "Es decidir por dónde empieza y por dónde termina de coser cada letra o dibujo. Si una letra termina justo donde empieza la letra que le sigue, la máquina pasa de una a otra sin cortar el hilo ni dar saltos largos, bordando mucho más rápido y prolijo.",
    construction: [
      "Nodo verde de entrada (Start Point)",
      "Nodo rojo de salida (Stop Point)",
      "Línea de viaje interna oculta (Travel Run)",
      "Puntadas de remate inicial y final integradas"
    ],
    howItWorks: [
      "1. El digitalizador selecciona el objeto de bordado en el software.",
      "2. Mueve el nodo verde al punto más cercano al elemento anterior.",
      "3. Mueve el nodo rojo al punto más próximo al elemento siguiente.",
      "4. La máquina borda sin cortes intermedios ni desplazamientos vacíos del bastidor."
    ],
    mainTypes: [
      "Ajuste Manual de Nodos (máxima precisión en textos y monogramas)",
      "Ramificación Automática / Branching (el software conecta todo automáticamente)",
      "Optimización de Secuencia por Proximidad (Nearest Point Optimization)"
    ],
    advantages: [
      "✔ Reduce hasta un 40% el tiempo total de bordado de una prenda",
      "✔ Minimiza los cortes de hilo y el desgaste del mecanismo cortahilos",
      "✔ Revés ultra-limpio sin nudos ni cables de hilo atravesados"
    ],
    limitations: [
      "Exige verificar que las líneas de viaje internas queden cubiertas por las puntadas posteriores."
    ],
    commonErrors: [
      "❌ Dejar la salida de una letra en el lado izquierdo cuando la siguiente empieza a la derecha.",
      "❌ Permitir que el hilo de conexión viaje a la vista sobre tela limpia sin cortar.",
      "❌ Cortar hilo entre cada letra pequeña de un texto cuando podrían conectarse fluidamente."
    ],
    troubleshootingTips: [
      "Si la máquina corta el hilo entre cada letra pequeña: use la función 'Ramificar' (Branching) en el software para unificar todo el texto en una sola corrida continua.",
      "Si queda un hilo atravesado visible: oculte la línea de viaje debajo del satín o active el corte automático."
    ],
    dicaArtrelados: "¡El secreto de los digitalizadores profesionales: al escribir un nombre o texto en satín, haga que la salida de cada letra coincida con la entrada de la siguiente! La máquina bordará todo el nombre de un tirón continuo sin cortar el hilo ni una sola vez. ¡Ahorrará tiempo y el revés quedará impecable!",
    voceSabia: "¡Cada corte de hilo automático con su remate correspondiente le consume a la máquina entre 5 y 8 segundos! En un diseño con 30 cortes innecesarios, ¡se pierden casi 4 minutos por prenda!",
    practicalExercise: "En su software de digitalización, tome una palabra de 5 letras, aplique la función de ramificación (Branching) y compare la simulación de puntadas: verá cómo desaparecen todos los cortes de hilo intermedios.",
    quickSummary: "Configuración del inicio y final de cada elemento bordado para conectar figuras fluidamente sin cortes de hilo ni traslados inútiles.",
    relatedTerms: [
      "Corte de Hilo Automático",
      "Ramificación (Branching)",
      "Puntadas de Remate (Tie-off)"
    ]
  },

  // A-044
  "a-042-ajuste-de-ponto-decorativo-motif": {
    term: "Ajuste de Puntada Decorativa y de Motivo",
    level: "Intermedio 🟡",
    category: "Parámetros y Software",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del francés motif (dibujo o patrón temático ornamental recurrente). Elemento de diseño algorítmico geométrico textil.",
    summary: "Programación de patrones decorativos repetitivos (estrellas, cadenas, corazones) a lo largo de líneas de contorno o fondos.",
    definition: "El ajuste de puntada decorativa o motif es la aplicación de un micro-patrón predeterminado que se repite de manera continua a lo largo de una trayectoria vectorial o se distribuye como relleno de fondo ornamental, sustituyendo el pespunte simple por secuencias artísticas estilizadas.",
    technicalDetails: "Se define mediante escala porcentual (tamaño en mm del motivo), espaciado entre repeticiones y compensación de esquinas para que las figuras no se deformen al girar en curvas pronunciadas.",
    beginnerExplanation: "En vez de que la máquina cosa una simple línea recta, la puntada motif va haciendo caminitos de corazones, cadenitas, estrellas o pequeñas flores repetidas a lo largo de la costura. Es ideal para decorar dobladillos de sábanas, toallas y guardas.",
    construction: [
      "Patrón base vectorial del motivo (Motif Stamp)",
      "Línea guía vectorial de trayectoria",
      "Parámetro de escala y proporción (ancho y alto)",
      "Algoritmo de ajuste de esquinas y curvas"
    ],
    howItWorks: [
      "1. Se dibuja una línea o contorno en el software de bordado.",
      "2. Se selecciona el diseño de motif deseado (ej. flor o greca geométrica).",
      "3. El software distribuye las repeticiones escalándolas proporcionalmente.",
      "4. La máquina borda la secuencia decorativa con puntadas firmes y estéticas."
    ],
    mainTypes: [
      "Motif de Línea de Contorno (guardas decorativas y dobladillos)",
      "Motif de Relleno Ornamental (fondos con texturas de diamantes o estrellas)",
      "Puntada de Cruz Digitalizada (Cross-Stitch Motif)"
    ],
    advantages: [
      "✔ Gran impacto estético con mínimo consumo de puntadas e hilo",
      "✔ Ideal para bordados tradicionales de mantelería, toallas y ropa de cuna",
      "✔ Permite crear motivos personalizados con la firma o logo del cliente"
    ],
    limitations: [
      "Exige telas con buena estabilidad para que las figuras repetidas no se deformen.",
      "En curvas muy cerradas los motivos pueden encimarse si no se ajusta el espaciado."
    ],
    commonErrors: [
      "❌ Escalar el motivo demasiado pequeño empastando las puntadas.",
      "❌ Borde motifs delicados en toallas sin colocar entretela hidrosoluble encima.",
      "❌ Usar motivos muy densos en curvas cerradas deformando la tela."
    ],
    troubleshootingTips: [
      "Si los motivos se hunden en telas con relieve: coloque una película de entretela hidrosoluble fina por encima antes de bordar.",
      "Si los motivos se amontonan en las esquinas: reduzca el tamaño del motivo o active 'Ajustar al Contorno' en el software."
    ],
    dicaArtrelados: "Para lograr guardas decorativas de revista en toallas de baño con puntadas Motif: use hilo de rayón brillante o hilo metálico suave y coloque SIEMPRE una capa de entretela hidrosoluble fina por encima. ¡Las figuras quedarán elevadas y brillantes sin hundirse en la felpa de la toalla!",
    voceSabia: "¡Los patrones de puntadas motif replican electrónicamente las complejas técnicas de pasamanería que las costureras reales de Versalles tardaban semanas en coser a mano!",
    practicalExercise: "En su software, aplique una puntada motif de flores en el dobladillo de una toalla virtual y experimente cambiando el espaciado y la escala hasta lograr un diseño armonioso.",
    quickSummary: "Programación de figuras decorativas repetitivas a lo largo de costuras o rellenos para crear guardas ornamentales de alta costura.",
    relatedTerms: [
      "Pespunte Decorativo",
      "Entretela Hidrosoluble",
      "Digitalización de Matrices"
    ]
  },

  // A-045
  "a-038-ajuste-de-folga-da-lancadeira": {
    term: "Ajuste de Holgura y Tiempo del Garfio Rotativo",
    level: "Avanzado 🔴",
    category: "Mecánica y Componentes de la Máquina / Calibración",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín lansare (lanzadera mecánica) y del inglés timing. Sincronización rotativa angular fundamental del ciclo de costura.",
    summary: "Sincronización angular entre la elevación de la aguja y la rotación del garfio para capturar la lazada en el punto muerto inferior.",
    definition: "El ajuste de tiempo y holgura de la lanzadera o garfio rotativo (Rotary Hook Timing) es la sincronización de precisión que coordina la posición angular del garfio con la carrera vertical de la barra de aguja: cuando la aguja sube entre 1,8 mm y 2,2 mm desde su punto más bajo, la punta del garfio debe coincidir exactamente en el centro del chaflán de la aguja.",
    technicalDetails: "Se calibra con la máquina en su posición angular de grado específico (generalmente entre 195° y 205° según la marca Tajima, Barudan o Brother) y una distancia axial de 0,05 mm a 0,10 mm respecto a la aguja.",
    beginnerExplanation: "Es la 'puesta a punto' del corazón de la máquina: cuando la aguja baja al fondo y empieza a subir, forma un rulito de hilo por detrás. El gancho giratorio tiene que pasar en ese milisegundo exacto para enganchar el rulito. Si pasa antes choca, si pasa tarde no agarra nada.",
    construction: [
      "Cuerpo del garfio rotativo con pista de rotación",
      "Punta captadora de lazada rectificada",
      "Eje motriz sincronizado por engranajes cónicos o correa dentada",
      "Disco graduado en grados (Timing Wheel) en el volante principal"
    ],
    howItWorks: [
      "1. La barra de aguja llega a su punto muerto inferior (180° en el volante).",
      "2. La aguja sube 2 mm y el hilo se ahueca formando la lazada (200° en el volante).",
      "3. La punta del garfio cruza a la altura del chaflán capturando el bucle.",
      "4. El hilo de la aguja rodea la caja de bobina entrelazándose con la canilla."
    ],
    mainTypes: [
      "Tiempo de Garfio Rotativo Industrial (rotación continua de 2 vueltas por puntada)",
      "Tiempo de Lanzadera Oscilante (en máquinas familiares tradicionales)",
      "Ajuste Fino con Reloj Comparador Micrométrico"
    ],
    advantages: [
      "✔ Elimina definitivamente los saltos de puntada crónicos",
      "✔ Permite bordar a velocidades de más de 1.000 PPM sin fallas",
      "✔ Asegura tensión equilibrada y uniforme en toda la prenda"
    ],
    limitations: [
      "Requiere conocimientos mecánicos rigurosos; un mal ajuste puede romper el garfio rotativo."
    ],
    commonErrors: [
      "❌ Calibrar el tiempo del garfio sin verificar primero la altura de la barra de aguja.",
      "❌ Apretar los tornillos del garfio desalineando la distancia axial.",
      "❌ Intentar sincronizar con una aguja usada o ligeramente doblada."
    ],
    troubleshootingTips: [
      "Si la máquina cose unos puntos y luego salta varios seguidos: el tiempo del garfio está levemente atrasado.",
      "Si el hilo se deshilacha y sale con aceite: limpie la pista del garfio y aplique solo una micro-gota de aceite de bordar."
    ],
    dicaArtrelados: "¡Antes de tocar los tornillos del garfio rotativo, instale SIEMPRE una aguja nueva y verifique que la altura de la barra de aguja esté en su marca grabada de fábrica! El 90% de las veces que parece que el garfio se descalibró, el verdadero culpable era una aguja mal colocada o una barra que se subió por un golpe.",
    voceSabia: "¡En las máquinas industriales modernas, el garfio da dos vueltas completas de 360 grados por cada puntada que hace la aguja, alcanzando más de 2.000 revoluciones por minuto!",
    practicalExercise: "Mire el volante graduado de su máquina: gírelo despacio con la mano y observe cómo a los 200 grados la punta del garfio se alinea perfectamente con la aguja.",
    quickSummary: "Sincronización angular entre la subida de la aguja y la rotación del garfio que asegura la captura impecable de cada puntada.",
    relatedTerms: [
      "Garfio Rotativo / Lanzadera",
      "Barra de Aguja",
      "Volante Graduado (Timing Wheel)"
    ]
  },

  // A-046
  "a-028-ajuste-de-posicionamento-do-bastidor": {
    term: "Ajuste de Posicionamiento del Bastidor y Desplazamiento",
    level: "Fundamental 🟢",
    category: "Operación de la Máquina",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín positio (colocación) y del inglés frame offset. Función electrónica para desplazar el pantógrafo y facilitar la carga de prendas.",
    summary: "Desplazamiento automático del bastidor hacia el frente para colocar apliques o cambiar canillas y retorno exacto al punto de bordado.",
    definition: "El ajuste de posicionamiento del bastidor u Offset es la función del panel de control que desplaza temporalmente el pantógrafo hacia adelante o hacia un extremo despejado de la máquina para facilitar tareas manuales (colocar telas de aplique, recortar hilos o reemplazar la canilla) y devolverlo luego a las coordenadas exactas de costura sin perder la alineación.",
    technicalDetails: "El desplazamiento se almacena en la memoria volátil del procesador como un vector de coordenadas relativas (Offset X / Y). Garantiza una repetibilidad de retorno con tolerancia de menos de 0,05 mm mediante servomotores con encoder óptico.",
    beginnerExplanation: "Es el botón que hace que el bastidor se mueva solito hacia adelante hacia usted para que pueda cambiar la canilla de abajo o acomodar una tela de aplique cómodamente, y que al tocar de nuevo vuelve exactamente al milímetro donde estaba cosiendo sin perderse.",
    construction: [
      "Codificadores ópticos de posición (Encoders) en motores X e Y",
      "Memoria de coordenadas de origen en el panel digital",
      "Función dedicada de tecla Offset en el teclado de control",
      "Límite de software de área de seguridad (Soft Limits)"
    ],
    howItWorks: [
      "1. La máquina se detiene en una parada programada (Stop).",
      "2. La operadora presiona la tecla 'Offset' o la máquina avanza automáticamente.",
      "3. El bastidor se adelanta despejando la zona de la aguja.",
      "4. Se realiza la tarea manual con total comodidad y visibilidad.",
      "5. Al pulsar Start, el bastidor regresa con precisión milimétrica y continúa bordando."
    ],
    mainTypes: [
      "Offset de Cambio de Canilla (despeja el brazo libre)",
      "Offset de Colocación de Aplique (acerca el bastidor a la bordadora)",
      "Desplazamiento de Centrado de Origen (Origin Shift para alinear el diseño)"
    ],
    advantages: [
      "✔ Comodidad ergonómica total para la operadora",
      "✔ Elimina el riesgo de quemarse los dedos o pincharse con la aguja",
      "✔ Precisión absoluta de retorno sin desfasar contornos"
    ],
    limitations: [
      "Si la máquina se apaga durante el desplazamiento de Offset sin guardar coordenadas, se puede perder el origen del bordado."
    ],
    commonErrors: [
      "❌ Mover el bastidor con las manos con la máquina encendida en vez de usar la función Offset.",
      "❌ No verificar que no haya objetos detrás de la mesa antes de que el bastidor retroceda.",
      "❌ Apagar la máquina con el bastidor desplazado fuera de coordenadas."
    ],
    troubleshootingTips: [
      "Si el bordado vuelve desfasado tras un Offset: compruebe que la correa del pantógrafo esté bien tensa y no patine en los cambios bruscos.",
      "Si el bastidor no se mueve al pulsar Offset: verifique si la función está configurada en el menú de parámetros de la máquina."
    ],
    dicaArtrelados: "¡NUNCA empuje ni tire del bastidor con las manos con la bordadora encendida! Si necesita espacio para cambiar la bobina o recortar un aplique, use siempre la tecla 'Offset' del panel. Empujar el bastidor a mano fuerza los motores paso a paso y descalibra todo el dibujo.",
    voceSabia: "¡Los encoders de los motores de bordado registran más de 4.000 pulsos por cada vuelta completa, garantizando que el bastidor vuelva al mismo punto exacto con precisión de micrones!",
    practicalExercise: "En la pantalla de su bordadora, programe una posición de Offset hacia el frente en una matriz de aplique y verifique cómo el bastidor avanza y regresa sin desfasar el contorno.",
    quickSummary: "Función electrónica que adelanta el bastidor para facilitar cambios de bobina o apliques y regresa al punto exacto sin perder coordenadas.",
    relatedTerms: [
      "Pantógrafo",
      "Parada Programada (Stop)",
      "Aplique en Bordado"
    ]
  },

  // A-047
  "a-061-ajuste-de-salto-e-velocidade-maxima": {
    term: "Ajuste de Salto y Velocidad Máxima",
    level: "Fundamental 🟢",
    category: "Operación de la Máquina",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín saltus (salto) y velocitas (rapidez). Parámetro de control cinemático para desplazamientos no bordados.",
    summary: "Configuración de la distancia de salto del pantógrafo y limitación de PPM para bordar piezas complejas sin roturas ni vibraciones.",
    definition: "El ajuste de salto y velocidad máxima es la configuración que determina la velocidad de crucero en puntadas continuas (de 600 a 1.200 PPM) y la distancia mínima a partir de la cual el pantógrafo desacelera para ejecutar un salto sin clavar la aguja (Jump Stitch) o accionar el cortahilos automático.",
    technicalDetails: "Se recomienda limitar la velocidad máxima según el tipo de prenda: gorras a 600-700 PPM; tejidos de punto y toallas a 750-850 PPM; telas planas de uniforme a 900-1.000 PPM. Para hilos metálicos la velocidad no debe superar las 600 PPM.",
    beginnerExplanation: "Es el acelerador de su bordadora: le permite elegir a cuántas puntadas por minuto quiere que trabaje la máquina. No siempre más rápido es mejor: para telas difíciles o hilos brillantes, bajar un poquito la velocidad hace que la máquina trabaje suave y no rompa hilos.",
    construction: [
      "Selector de velocidad en pantalla (teclas +/- PPM)",
      "Regulador de longitud de salto automático (Jump Length)",
      "Algoritmo de desaceleración previa al corte de hilo",
      "Limitador de velocidad máxima por bastidor en memoria"
    ],
    howItWorks: [
      "1. La operadora ajusta la velocidad según la tela y el hilo utilizado.",
      "2. El motor principal alcanza la velocidad crucero en tramos de puntadas regulares.",
      "3. Al encontrar un salto mayor a 5 mm, la máquina frena para mover el bastidor.",
      "4. La aguja no perfora en vano y el hilo no se estira ni se corta."
    ],
    mainTypes: [
      "Velocidad Máxima Crucero (para producción plana)",
      "Velocidad Reducida de Seguridad (para gorras armadas y calzado)",
      "Velocidad Especial para Hilos Delicados (metálicos y seda pura a 550 PPM)"
    ],
    advantages: [
      "✔ Previene roturas de hilo causadas por vibración y calor excesivo",
      "✔ Acabado de puntadas más prolijo, cerrado y uniforme",
      "✔ Prolonga la vida útil de los rodamientos y componentes mecánicos"
    ],
    limitations: [
      "Reducir la velocidad incrementa ligeramente el tiempo de producción por prenda."
    ],
    commonErrors: [
      "❌ Trabajar siempre a la velocidad máxima (1.000 o 1.200 PPM) con cualquier tela o hilo.",
      "❌ Borde gorras armadas a máxima velocidad quebrando agujas por vibración.",
      "❌ No reducir la velocidad al bordar con hilo dorado o plateado."
    ],
    troubleshootingTips: [
      "Si el hilo se corta a cada rato a alta velocidad: baje la velocidad 150 PPM (ej. de 850 a 700 PPM) y compruebe cómo cesan las roturas.",
      "Si el bastidor vibra mucho en saltos largos: aumente el parámetro de sensibilidad de salto en el menú de la máquina."
    ],
    dicaArtrelados: "¡El secreto de la productividad no es correr a 1.000 PPM, sino no parar la máquina nunca! Si borda a 750 PPM sin ninguna rotura de hilo, terminará su producción mucho más rápido que si borda a 1.000 PPM deteniéndose cada dos minutos a enhebrar de nuevo.",
    voceSabia: "¡A 1.000 puntadas por minuto, la aguja penetra la tela 16 veces por segundo, generando vibraciones mecánicas que pueden descalibrar bastidores si no están perfectamente ajustados!",
    practicalExercise: "Borde un logotipo a 950 PPM y luego el mismo diseño a 750 PPM: compare con lupa la nitidez de las letras y escuche la diferencia de serenidad en el sonido del motor.",
    quickSummary: "Calibración de la velocidad de trabajo y longitud de desplazamientos para lograr bordados prolijos y sin roturas de hilo.",
    relatedTerms: [
      "Corte de Hilo Automático",
      "Pantógrafo",
      "Hilo Metálico"
    ]
  },

  // A-048
  "a-007-ajuste-de-tensao": {
    term: "Ajuste de Tensión del Hilo",
    level: "Fundamental 🟢",
    category: "Tensión y Calibración",
    grammarClass: "Locución sustantiva masculino.",
    origin: "Del latín tensio (acción de estirar). Equilibrio de fuerzas dinámicas entre el hilo superior y el hilo de la canilla.",
    summary: "Equilibrio de fuerzas entre el hilo superior y el hilo de la canilla para lograr la regla del tercio (1/3) en el revés del bordado.",
    definition: "El ajuste de tensión del hilo es la regulación combinada de los discos tensores del hilo superior y del muelle de presión de la caja de bobina (hilo inferior). Su objetivo es lograr que el cruce de los dos hilos quede oculto exactamente en el revés de la tela, asegurando que el frente luzca impecable y sin asomos de hilo blanco.",
    technicalDetails: "La regla de oro técnica en columnas de satín establece que en el revés el hilo blanco de la canilla debe ocupar el tercio central (1/3), flanqueado por dos tercios laterales (1/3 a cada lado) del color superior. La tensión de la bobina debe calibrarse entre 18g y 25g con tensiómetro (o prueba de caída / Drop Test), y la superior entre 110g y 130g.",
    beginnerExplanation: "Es el 'tira y afloja' entre el hilo de color de arriba y el hilo blanco de abajo. Si el de arriba tira muy fuerte, el hilo blanco de la canilla se va a ver en el frente arruinando el dibujo; si el de arriba está muy flojo, abajo se hace una maraña de bucles. En el revés debe verse un tercio blanco en el medio y color en los costados.",
    construction: [
      "Discos tensores superiores con resorte y tuerca micrométrica",
      "Muelle tensor de lámina de acero en la caja de bobina",
      "Muelle tirahilos compensador (Check Spring)",
      "Postes guía-hilos con pretensión"
    ],
    howItWorks: [
      "1. El hilo superior pasa por los discos reguladores que ejercen fricción controlada.",
      "2. La canilla libera el hilo inferior con una resistencia constante de 20g.",
      "3. La aguja desciende y el tirahilos tensa la puntada en el momento exacto.",
      "4. La unión de los dos hilos queda equilibrada en el revés de la prenda."
    ],
    mainTypes: [
      "Tensión Manual por Perilla Rotativa (estándar en la mayoría de bordadoras)",
      "Tensión Automática Digitalizada (ajustada por sensores en máquinas de gama alta)",
      "Calibración con Tensiómetro Digital (Towa Gauge)"
    ],
    advantages: [
      "✔ Frente perfecto sin asomos del hilo blanco de la canilla",
      "✔ Cero bucles, lazos o marañas en el revés de la prenda",
      "✔ Bordados suaves y flexibles que no acartonan la ropa"
    ],
    limitations: [
      "Debe recalibrarse ligeramente al cambiar de tipo de hilo (poliéster, metálico, algodón o rayón)."
    ],
    commonErrors: [
      "❌ Tocar la tensión superior sin haber regulado primero la tensión de la canilla.",
      "❌ Apretar la tensión al máximo para 'arreglar' bucles causados por enhebrado incorrecto.",
      "❌ Borde con pelusa acumulada debajo del muelle de la caja de bobina."
    ],
    troubleshootingTips: [
      "Si el hilo blanco de la canilla asoma por el frente del bordado: afloje la tensión superior o apriete un toque el tornillito de la caja de bobina.",
      "Si se forman bucles de hilo en el revés: verifique que el hilo superior haya encajado bien adentro de los discos tensores."
    ],
    dicaArtrelados: "¡Regla sagrada del bordador: la tensión de la canilla es la base de todo! Nunca toque los tensores superiores de su máquina hasta no haber ajustado la bobina con la 'Prueba de la Gota': sostenga la caja de bobina por el hilo, dé un suave movimiento de muñeca y debe caer entre 5 y 10 cm y frenarse sola. ¡Con la bobina bien calibrada, ajustar la tensión superior es un juego de niños!",
    voceSabia: "¡Más del 85% de los problemas de tensión en el bordado se deben a pelusas o restos de hilo atrapados debajo de la chapita de la caja de bobina y no a los tensores superiores!",
    practicalExercise: "Borde una columna de satín de 1 cm de ancho en una tela de prueba. Dé vuelta la prenda y examine el revés con buena luz: verifique que el hilo blanco ocupe exactamente el tercio del medio.",
    quickSummary: "Equilibrio de fuerzas entre el hilo superior y la canilla para lograr un frente impecable y la regla del tercio central en el revés.",
    relatedTerms: [
      "Regla del Tercio (1/3)",
      "Prueba de la Gota (Drop Test)",
      "Caja de Bobina (Portacanilla)"
    ]
  },

  // A-049
  "a-091-ajuste-fino-de-sincronismo-de-lancadeira": {
    term: "Ajuste Fino de Sincronismo del Garfio Rotativo",
    level: "Avanzado 🔴",
    category: "Mecánica y Componentes de la Máquina / Calibración",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín synchronus (simultáneo en el tiempo). Calibración micrométrica de tolerancia cero para máquinas industriales.",
    summary: "Microrregulación milimétrica del ángulo y altura de la punta del garfio respecto al ojo de la aguja para bordados de alta velocidad.",
    definition: "El ajuste fino de sincronismo del garfio rotativo es el procedimiento de microcalibración mecánica que fija la posición angular del eje del garfio con precisión de fracciones de grado respecto al movimiento de subida de la barra de aguja, posicionando la punta del garfio exactamente entre 0,5 mm y 1,0 mm por encima del ojo de la aguja.",
    technicalDetails: "Se realiza utilizando un comparador de cuadrante o rueda graduada en el volante. Requiere comprobar la holgura en todas las agujas del cabezal (de la aguja 1 a la 15) para compensar posibles mínimas variaciones de deflexión entre barras.",
    beginnerExplanation: "Es la afinación más precisa del motor de la máquina, como afinar las cuerdas de una guitarra de concierto: asegura que el gancho pase justo por encima del agujerito de la aguja en el momento exacto, ni un pelo antes ni un pelo después.",
    construction: [
      "Eje de transmisión del garfio con engranajes cónicos rectificados",
      "Punta del garfio de carburo de tungsteno o acero templado",
      "Tornillos de fijación de cabeza hexagonal o plana de alta dureza",
      "Nonio o escala milimétrica de barra de aguja"
    ],
    howItWorks: [
      "1. Se alinea la barra de aguja con su marca superior de referencia.",
      "2. Se posiciona el volante de la máquina en los grados exactos de captura (ej. 201°).",
      "3. Se desliza el garfio hasta colocar la punta a 0,8 mm por encima del ojo de la aguja.",
      "4. Se aprietan los tornillos en cruz garantizando sincronismo perfecto en todas las agujas."
    ],
    mainTypes: [
      "Ajuste en Máquinas Multiaguja de Cabezal Fijo",
      "Sincronismo en Máquinas de Múltiples Cabezales (sincronización en tándem)",
      "Calibración de Garfio Jumbo para Hilos Pesados"
    ],
    advantages: [
      "✔ Permite alcanzar velocidades máximas de 1.000 a 1.200 PPM sin saltos",
      "✔ Captura impecable de hilos elásticos, metálicos y de rayón",
      "✔ Previene el desgaste prematuro de la punta del garfio"
    ],
    limitations: [
      "Operación de nivel técnico avanzado; se recomienda realizar con buena iluminación y lupas ópticas."
    ],
    commonErrors: [
      "❌ Dejar la punta del garfio pasando por debajo del ojo de la aguja, cortando el hilo.",
      "❌ No verificar el sincronismo en la primera y última aguja del cabezal.",
      "❌ Apretar los tornillos con herramientas desgastadas que deforman las cabezas."
    ],
    troubleshootingTips: [
      "Si la aguja 1 cose bien pero la aguja 15 salta puntadas: compruebe la alineación de la barra de aguja 15 antes de mover el garfio.",
      "Si el hilo se deshilacha en satines densos: verifique que la punta del garfio no tenga filo mellado."
    ],
    dicaArtrelados: "Al sincronizar el garfio rotativo en una máquina de muchas agujas (como de 12 o 15 colores), verifique el paso de la punta siempre en tres agujas: en la aguja 1, en la del medio (aguja 8) y en la última (aguja 15). ¡Esto le asegura que todas las barras de aguja coserán perfecto sin sorpresas!",
    voceSabia: "¡La punta del garfio rotativo está sometida a fuerzas de aceleración centrífuga de cientos de G en cada giro continuo a alta velocidad!",
    practicalExercise: "Con una lupa y una linterna brillante, observe la punta del garfio mientras gira lentamente el volante: compruebe visualmente que la punta cruza exactamente por encima del ojo de la aguja en el tercio superior del chaflán.",
    quickSummary: "Calibración de precisión absoluta que ubica la punta del garfio justo por encima del ojo de la aguja para bordados continuos a máxima velocidad.",
    relatedTerms: [
      "Garfio Rotativo / Lanzadera",
      "Chaflán de la Aguja (Scarf)",
      "Cabezal Multiaguja"
    ]
  },

  // A-050
  "a-085-alargador-de-coluna-de-cetim-por-repuxo-satin-column-auto-widener-pull-stretch": {
    term: "Compensación de Tirantez en Columnas de Satín",
    level: "Intermedio 🟡",
    category: "Parámetros y Software",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín ampliare (ensanchar) y del inglés pull compensation. Corrección dimensional contra la contracción elástica de la tela.",
    summary: "Herramienta de software que engrosa automáticamente las columnas de satín para que el bordado terminado no quede más fino de lo deseado.",
    definition: "El ampliador de columna de satín por compensación de tirantez (Pull Compensation / Column Auto-Widener) es la función algorítmica de los programas de digitalización que sobreextiende deliberadamente las puntadas de satín hacia afuera en ambos lados (de 0,15 mm a 0,40 mm) para contrarrestar la tensión natural del hilo que contrae la tela hacia adentro.",
    technicalDetails: "Sin compensación de tirantez, una columna de satín programada en 3,0 mm de ancho se reducirá en la tela real a 2,5 mm o 2,6 mm por la tracción del hilo. En telas elásticas como piqué o jersey, se programa una compensación de +0,30 mm a +0,40 mm; en telas rígidas, de +0,15 mm a +0,20 mm.",
    beginnerExplanation: "Cuando la máquina borda una letra en satín, el hilo tira de la tela hacia adentro como apretando un cinto, haciendo que la letra quede más flaquita y angosta de lo que se veía en la computadora. Esta función hace que el programa dibuje las letras un poquito más 'gorditas' para que al coser queden del tamaño real exacto.",
    construction: [
      "Parámetro de compensación absoluta en milímetros (+0,20 mm a +0,40 mm)",
      "Compensación porcentual proporcional (105% a 115%)",
      "Algoritmo de detección automática de dirección de puntada",
      "Subcapa de fijación de contorno (Edge Run)"
    ],
    howItWorks: [
      "1. El software calcula el ancho original de la columna vectorial.",
      "2. El algoritmo extiende las puntadas hacia ambos extremos exteriores.",
      "3. La máquina borda la columna en la prenda.",
      "4. La contracción del tejido encoge la puntada hasta la medida exacta proyectada."
    ],
    mainTypes: [
      "Compensación de Tirantez en Milímetros (estándar para letras y textos)",
      "Compensación Porcentual (para figuras ornamentales grandes)",
      "Compensación Automática por Tipo de Tejido (Fabric Auto-Tuning)"
    ],
    advantages: [
      "✔ Letras legibles, gruesas y bien proporcionadas en cualquier tela",
      "✔ Cero espacios en blanco entre el relleno y el contorno exterior",
      "✔ Diseños perfectamente encajados sin desfasajes de color"
    ],
    limitations: [
      "Una compensación desmedida en letras muy pequeñas puede empastar los orificios internos de letras como la 'e' o la 'a'."
    ],
    commonErrors: [
      "❌ Dejar compensación cero (0,0 mm) al bordar telas elásticas de piqué o camisetas.",
      "❌ Aumentar la compensación en exceso cerrando los huecos de letras de 4 mm.",
      "❌ Confundir compensación de tirantez con aumento de densidad."
    ],
    troubleshootingTips: [
      "Si entre el contorno de satín y el relleno de color queda una luz blanca visible: aumente la compensación de tirantez en el satín a +0,35 mm.",
      "Si las letras se ven 'flaquitas' y desprolijas en polos piqué: suba la compensación a +0,40 mm."
    ],
    dicaArtrelados: "¡El secreto número uno para bordar polos de piqué o sudaderas deportivos sin que queden huecos entre los colores: suba siempre la Compensación de Tirantez (Pull Compensation) en su software a +0,35 mm o +0,40 mm! Las letras quedarán con cuerpo, bien llenitas y no se verá la tela por ningún lado.",
    voceSabia: "¡La fuerza combinada de miles de puntadas de satín en un diseño puede encoger una tela elástica más de 4 milímetros hacia el centro si no se programa la compensación de tirantez!",
    practicalExercise: "En su software, tome un texto con letra cursiva y aplique dos valores: uno con compensación 0,0 mm y otro con +0,35 mm. Borde ambos en una camiseta de algodón y compare cómo el segundo luce mucho más profesional y nítido.",
    quickSummary: "Herramienta que ensancha automáticamente las columnas de satín para compensar la contracción del hilo y lograr el ancho real deseado en la tela.",
    relatedTerms: [
      "Compensación de Tirantez (Pull Compensation)",
      "Puntada Satín (Satin Stitch)",
      "Subcapa de Puntadas (Underlay)"
    ]
  }
};

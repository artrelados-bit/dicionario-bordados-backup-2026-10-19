import { Verbete } from "../../types";

export const LOTE3_PART3_ES: Record<string, Partial<Verbete>> = {
  "a-097-analise-espectral-de-correspondencia-de-cores": {
    "term": "Análisis Espectral de Correspondencia de Colores",
    "level": "Avanzado 🔴",
    "category": "Agujas y Hilos",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín spectrum (imagen, aparición de luz) y del griego metron (medida). Procedimiento óptico instrumental de la ingeniería colorimétrica textil para igualación cromática exacta.",
    "summary": "Medición óptica del color de la tela mediante espectrofotómetro que indica el código exacto del cono de hilo con fidelidad absoluta de tono.",
    "definition": "El análisis espectral de correspondencia de colores (Color Matching Spectrophotometry / Digital Thread Color Audit) es el procedimiento instrumental que utiliza un espectrofotómetro digital de reflectancia para medir con exactitud científica la longitud de onda de la luz reflejada por una tela o muestra textil en el espacio de color tridimensional CIELAB (L*, a*, b*). Esta medición elimina la subjetividad del ojo humano y la distorsión lumínica ambiental, cruzando los valores espectrales contra la biblioteca digital de hilos de bordar para determinar el cono idéntico con un Delta E inferior a 0,8.",
    "technicalDetails": "La percepción humana del color varía notablemente bajo diferentes fuentes de luz (metamerismo), haciendo que un hilo parezca idéntico a la tela bajo luz incandescente y desentone al sol. El espectrofotómetro emite pulsos de luz normalizada D65 (luz de día a 6.500 K) y lee la reflectancia a intervalos de 10 nm entre 400 y 700 nm. La fórmula CIE2000 calcula la distancia cromática exacta, indicando si el tono coincide dentro de los estándares de tolerancia de marcas multinacionales.",
    "beginnerExplanation": "¿Alguna vez eligió un cono de hilo en su taller pensando que era del mismo color que la camiseta y, al salir a la calle bajo la luz del sol, se dio cuenta de que no combinaba para nada? Este aparato es un sensor óptico que se apoya sobre la tela: mide el color real con un destello de luz y le dice en la pantalla: 'Ponga el hilo número 1245 de tal marca, que es exactamente igual'.",
    "construction": [
      "Espectrofotómetro digital portátil con geometría óptica d/8° o 45°/0°",
      "Cámara de calibración blanca de cerámica patrón certificada",
      "Software de conversión colorimétrica (CIELAB, RGB, CMYK, Pantone TCX)",
      "Base de datos de catálogos de hilos de bordar (Madeira, Isacord, Gütermann, Lumina)"
    ],
    "howItWorks": [
      "1. La operadora calibra el espectrofotómetro en su base de cerámica blanca pura.",
      "2. Apoya la lente del sensor sobre la tela de la prenda del cliente.",
      "3. El aparato emite un destello de luz calibrada y mide la curva de reflectancia espectral.",
      "4. El software calcula las coordenadas cromáticas L* (brillo), a* (eje verde-rojo) y b* (eje azul-amarillo).",
      "5. El sistema compara los datos con los catálogos de hilos cargados en memoria.",
      "6. Muestra en pantalla el código exacto del cono de hilo de bordar más cercano con su porcentaje de fidelidad."
    ],
    "mainTypes": [
      "Espectrofotómetro Digital de Contacto Portátil (ColorReader textil)",
      "Cabina de Luz Normalizada con Iluminantes Controlados (D65 / TL84 / UV)",
      "Mapeo de Paleta Pantone en Software de Ponchado y Digitalización"
    ],
    "advantages": [
      "✔ Garantiza la igualación exacta de tonos en logotipos corporativos y uniformes de marca",
      "✔ Elimina discusiones con clientes exigentes respecto a si el hilo es o no el color oficial",
      "✔ Ahorra compras innecesarias de conos de hilo que luego no combinan",
      "✔ Permite bordar en vestidos de fiesta donde el hilo debe camuflarse invisiblemente"
    ],
    "limitations": [
      "Los equipos espectrofotométricos de precisión representan una inversión de capital profesional.",
      "En telas semitransparentes o de encaje abierto se requiere colocar un fondo blanco opaco detrás para no falsear la lectura."
    ],
    "commonErrors": [
      "❌ Elegir el color del hilo bajo lámparas incandescentes amarillas de taller.",
      "❌ Medir telas con brillo excesivo o lentejuelas sin polarizador óptico.",
      "❌ No limpiar periódicamente la lente del sensor dejando depósitos de pelusa."
    ],
    "troubleshootingTips": [
      "Si el cliente reclama que el color se ve distinto en exteriores: Explique el fenómeno del metamerismo y utilice cabinas de luz D65 para las aprobaciones de muestra.",
      "Si el aparato arroja error de lectura: Vuelva a calibrarlo sobre la placa de cerámica blanca limpia suministrada por el fabricante.",
      "Si ningún cono del catálogo es 100% idéntico: Elija siempre el tono medio punto más oscuro que la tela; el tono oscuro se funde en la fibra, mientras que un tono más claro resalta de forma estridente."
    ],
    "dicaArtrelados": "¡La regla de oro de Artrelados cuando no tenga el color exacto! Si está en la duda entre dos conos de hilo y ninguno es 100% igual a la tela, elija siempre el que sea un tono más OSCURO. El hilo más oscuro se hunde en la trama y pasa casi desapercibido a la vista; en cambio, el hilo más claro 'grita' y llama la atención de inmediato.",
    "voceSabia": "¡El ojo humano entrenado de una bordadora experta puede distinguir cerca de 2 millones de matices de color, pero un espectrofotómetro digital diferencia más de 16 millones de variaciones cromáticas sin fatigarse!",
    "practicalExercise": "Tome tres recortes de tela de colores sutiles. Elija el hilo a ojo por la noche bajo la luz de su taller y luego llévelo a la ventana a plena luz natural de la mañana. Compruebe cómo la luz del sol revela diferencias de matiz que parecían invisibles por la noche.",
    "quickSummary": "Medición óptica del color del tejido mediante sensor espectrofotométrico para seleccionar el cono de hilo exacto con fidelidad cromática científica.",
    "imageCaption": "Espectrofotómetro digital de precisión midiendo la reflectancia cromática sobre una tela de confección para bordado.",
    "relatedTerms": [
      "Catálogo de Colores de Hilos de Bordar",
      "Metamerismo Visual en Textiles",
      "Espacio de Color CIELAB",
      "Pantone Textil (TCX)"
    ],
    "applications": [
      "Uniformes corporativos de marcas internacionales con código cromático estricto.",
      "Bordados invisibles en vestidos de novia y trajes de alta costura.",
      "Creación de muestrarios oficiales y catálogos de tonos para talleres de bordado."
    ],
    "recommendedSettings": {
      "speedPPM": "Velocidad estándar de bordado",
      "needleType": "75/11 Universal o Punta de Bola",
      "stabilizer": "Acorde al tejido seleccionado",
      "density": "Sin alteración",
      "threadTension": "Normal de trabajo"
    }
  },
  "a-021-analise-de-matriz-previa": {
    "term": "Auditoría Previa de la Matriz",
    "level": "Iniciante 🟢",
    "category": "Programación de Bordado",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del griego analysis (descomposición metódica de un todo en sus partes para examen) y del latín matrix (molde original). Protocolo técnico de aseguramiento de la calidad (Quality Assurance) en la industria moderna.",
    "summary": "Verificación de la secuencia de costura, densidad, cortes y paradas en el simulador digital antes de bordar la prenda física en la máquina.",
    "definition": "La auditoría previa de la matriz (denominada en la industria como Pre-Sewing Stitch Audit o Simulación en Stitch Player) es el protocolo técnico de inspección sistemática realizado en el software de bordado o en la pantalla de la máquina antes de coser la primera puntada sobre tela real. Consiste en reproducir la costura virtualmente paso a paso para verificar el orden cronológico de capas, la presencia de remates de seguridad iniciales y finales, la lógica de los saltos de hilo, la densidad por milímetro cuadrado y la ausencia de acumulaciones destructivas de puntadas en el mismo punto.",
    "technicalDetails": "A través del simulador acelerado (Slow Redraw / Stitch Player) se evalúan cinco variables críticas: 1) Direccionalidad de costura (del centro hacia afuera y de abajo hacia arriba); 2) Cantidad de cambios de color programados; 3) Longitud máxima de saltos (Jump Stitches mayores a 7 mm deben tener corte automático); 4) Densidad de puntada; 5) Presencia de puntadas de anclaje (Underlay) en cada bloque.",
    "beginnerExplanation": "Es el hábito sagrado de 'mirar la película' de cómo va a bordar la máquina en la pantalla de la computadora antes de poner la camiseta del cliente. El programa cose el dibujo a cámara rápida para que usted vea si todo está en orden, si no va a cortar el hilo a cada rato y si los colores se bordan en la secuencia lógica correcta.",
    "construction": [
      "Motor de simulación gráfica vectorial de puntadas (Stitch Player Simulator)",
      "Contador digital de puntadas, metros de hilo y cambios de color",
      "Analizador visual de saltos y comandos automáticos de recorte de hilo (Trims)",
      "Verificador de márgenes y compatibilidad de bastidores"
    ],
    "howItWorks": [
      "1. La bordadora abre el archivo de la matriz en el software de diseño o en el visor de la máquina.",
      "2. Activa la función de simulación de costura acelerada (Stitch Player).",
      "3. Observa en la pantalla que los fondos se cosan antes que las letras y contornos.",
      "4. Confirma que no existan saltos largos de hilo cruzando por encima del dibujo.",
      "5. Verifica que los colores iguales estén agrupados para evitar cambios de cono innecesarios.",
      "6. Tras validar que el archivo está impecable, lo carga en la bordadora con total tranquilidad."
    ],
    "mainTypes": [
      "Simulación Gráfica Acelerada en Software de Ponchado (Revisión completa en computadora)",
      "Comprobación de Lista de Secuencia de Color en Pantalla de la Máquina",
      "Auditoría con Mapa de Densidad y Detección de Micropuntadas"
    ],
    "advantages": [
      "✔ Previene arruinar prendas costosas de clientes por errores de programación de la matriz",
      "✔ Reduce drásticamente el tiempo de trabajo agrupando colores y eliminando paradas",
      "✔ Evita roturas de agujas descubriendo nudos de puntadas amontonadas a tiempo",
      "✔ Permite calcular con exactitud el tiempo real de máquina y el costo del trabajo"
    ],
    "limitations": [
      "La simulación en pantalla muestra la trayectoria matemática de la aguja, pero no reproduce el comportamiento elástico del tejido real; siempre se aconseja una prueba en retazo de tela similar."
    ],
    "commonErrors": [
      "❌ Cargar una matriz descargada de internet y poner a bordar la camiseta del cliente sin haber visto la simulación en pantalla.",
      "❌ Descubrir tarde que el contorno se cose antes del relleno, echando a perder la prenda.",
      "❌ Tener que cambiar 10 veces de cono de hilo porque los mismos colores no fueron agrupados en el archivo."
    ],
    "troubleshootingTips": [
      "Si la máquina se detiene a cada momento sin motivo aparente: Abra la matriz en el software y elimine las órdenes de cambio de color o paradas innecesarias agrupando los bloques iguales.",
      "Si observa que la aguja viaja de una esquina a otra dejando una línea de hilo cruzada: Inserte un comando de corte automático de hilo (Trim) antes del salto."
    ],
    "dicaArtrelados": "¡La regla de oro innegociable de Artrelados! ¿Compró o descargó una matriz nueva? NUNCA, bajo ningún concepto, la ponga a coser directo en la prenda del cliente. Ábrala en su computadora, dele 'Play' al simulador de puntadas y mírela 30 segundos. ¡Ese pequeño hábito le ahorrará lágrimas, prendas arruinadas y horas de descoser puntos!",
    "voceSabia": "¡En las grandes plantas industriales de confección, cada minuto de máquina detenida por una mala matriz representa pérdidas de cientos de prendas; por eso, todo diseño pasa obligatoriamente por una auditoría técnica digital antes de llegar a la fábrica!",
    "practicalExercise": "Abra una matriz en su computadora y active el simulador de bordado a máxima velocidad. Observe el orden de costura: si nota que el dibujo va y viene de forma desordenada, use la herramienta de resecuenciación para ordenar los elementos y comprobar cuánto tiempo ahorra.",
    "quickSummary": "Inspección sistemática de la secuencia, capas, cortes y densidad de una matriz en el simulador digital antes de bordarla físicamente.",
    "imageCaption": "Pantalla del simulador de puntadas (Stitch Player) auditando la secuencia cronológica de bordado en tiempo real.",
    "relatedTerms": [
      "Digitalización y Ponchado de Matrices",
      "Corte Automático de Hilo (Trimmer)",
      "Densidad de Puntada",
      "Puntadas de Amarre y Fijación (Underlay)"
    ],
    "applications": [
      "Verificación de todo archivo nuevo antes de bordar en prendas de clientes.",
      "Optimización de secuencias de color para aumentar la productividad del taller.",
      "Presupuestación precisa calculando metros de hilo con la Calculadora de Bordados."
    ],
    "recommendedSettings": {
      "speedPPM": "Simulación digital a máxima velocidad en pantalla",
      "needleType": "No aplica (etapa previa de diseño)",
      "stabilizer": "No aplica",
      "density": "Auditoría de 0,38 a 0,42 mm estándar",
      "threadTension": "No aplica"
    }
  },
  "a-018-anel-de-vedacao-e-retencao-da-bobina": {
    "term": "Muelle de Freno y Anillo de Retención de Canilla",
    "level": "Intermedio 🟡",
    "category": "Mecánica y Ajustes de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín anellus (anillo circular pequeño) y del francés bobine (carrete cilíndrico de devanar). Mecanismo de precisión mecatrónica desarrollado para el control inercial de la canilla inferior.",
    "summary": "Lámina elástica de acero en el fondo de la caja de canilla que frena la rotación inercial de la bobina al desacelerar la máquina, evitando marañas en el revés.",
    "definition": "El muelle de freno y anillo de retención de canilla (denominado técnicamente Bobbin Anti-Backlash Spring o Brake Ring) es una delgada arandela o lámina de acero armónico abombado de tres o cuatro pestañas elásticas situada en el fondo interior de la caja de canilla (porta-canillas). Su función mecánica es aplicar una resistencia de fricción constante y ligera en la base de la canilla (bobina metálica o plástica), deteniéndola instantáneamente cuando la máquina frena o corta el hilo, impidiendo que la inercia continúe girando la bobina y desoville hilo suelto en el fondo del garfio rotativo.",
    "technicalDetails": "A 900 PPM, la canilla gira a cientos de revoluciones por minuto para suministrar hilo inferior a la aguja. Cuando la máquina desacelera abruptamente para hacer un giro o un salto de corte, la inercia rotacional de la canilla provocaría un desovillado sobrante de 20 a 50 mm de hilo flojo (efecto backlash). El muelle de acero templado ejerce una presión de rozamiento calibrada de 1,5 a 3 gramos-fuerza, actuando como un embrague de frenado instantáneo.",
    "beginnerExplanation": "Adentro de la cajita de metal donde colocás la canilla (la piecita de abajo de la máquina), en el fondo, hay una chapita circular de acero con pestañas arqueadas que parece una florcita de metal. Cuando la máquina cose rápido y de repente frena, esa chapita frena la canilla para que no siga girando loca por inercia y no te haga un nido de pájaro de hilos trabados abajo.",
    "construction": [
      "Arandela elástica de acero inoxidable templado de 0,15 mm de grosor",
      "Pestañas arqueadas en abanico que ejercen presión vertical constante",
      "Traba de centrado perimetral encastrada en la caja de canilla",
      "Superficie pulida para evitar rozamientos abrasivos en el reborde de la canilla"
    ],
    "howItWorks": [
      "1. La operadora introduce la canilla en la caja presionándola suavemente contra el muelle de fondo.",
      "2. El muelle elástico se comprime ligeramente sosteniendo la canilla en suspensión rozante.",
      "3. Durante la costura continua, la fuerza de tracción del hilo vence la fricción y la canilla gira libremente.",
      "4. Al producirse un corte de hilo o parada súbita, el muelle detiene la canilla de forma instantánea.",
      "5. El hilo inferior se mantiene ordenado y sin holgura listo para reiniciar la costura en el siguiente punto."
    ],
    "mainTypes": [
      "Muelle de Freno de Chapa Estrella (Para cajas de canilla estándar industriales tamaño L)",
      "Muelle de Freno Reforzado para Canillas Jumbo (Tamaño M para máquinas de gran escala)",
      "Arandela de Teflón Antifricción Deslizante (Para canillas de aluminio pulido)"
    ],
    "advantages": [
      "✔ Elimina para siempre los nidos de pájaro y enredos de hilo inferior en el garfio",
      "✔ Garantiza una tensión inferior regular tanto a 400 PPM como a 1.000 PPM",
      "✔ Previene que la canilla salte o vibre dentro de su compartimento al girar",
      "✔ Alarga la vida de las canillas evitando golpes contra las paredes de la caja"
    ],
    "limitations": [
      "Con los años puede aplastarse perdiendo su arco elástico o ensuciarse con pelusa compactada.",
      "Si se dobla accidentalmente puede frenar en exceso la canilla, provocando roturas de hilo inferior."
    ],
    "commonErrors": [
      "❌ Retirar el muelle durante una limpieza pensando que es una suciedad o arandela que sobra.",
      "❌ Dejar pelusa acumulada debajo del muelle levantando la canilla fuera de su nivel.",
      "❌ Colocar la canilla al revés en máquinas que exigen giro horario estricto."
    ],
    "troubleshootingTips": [
      "Si el hilo inferior se enreda abajo cada vez que la máquina frena o corta hilo: Retire la caja de canilla y verifique si el muelle de freno del fondo está presente y limpio; si está aplastado, cámbielo por uno nuevo.",
      "Si la tensión inferior se siente demasiado dura aunque el tornillo de tensión esté flojo: Desmonte el muelle del fondo y limpie con alcohol el polvillo prensado acumulado debajo."
    ],
    "dicaArtrelados": "¡El secreto de la cajita de bobina! Cada vez que limpie el garfio con su pincelito, sople el interior de la caja de canilla para que no se junte polvillo debajo de esa chapita elástica del fondo. ¡Esa simple limpieza le garantiza una tensión inferior suave y pareja como un reloj suizo!",
    "voceSabia": "¡La ausencia de este pequeño resorte de freno que cuesta centavos es la causa del 90% de los enredos masivos de hilo inferior que traban la máquina durante los cortes automáticos de hilo!",
    "practicalExercise": "Saque la canilla de su caja. Mire el fondo con una linterna: verá la delgada chapita de acero arqueada. Presiónela suavemente con la punta de una pinza para sentir cómo rebota elásticamente. Esa resistencia es la que frena la canilla con suavidad milimétrica.",
    "quickSummary": "Lámina elástica en el fondo de la caja de canilla que frena la inercia de la bobina al detenerse la máquina evitando marañas y enredos inferiores.",
    "imageCaption": "Fondo de la caja de canilla mostrando el muelle de freno elástico (Brake Spring) instalado en su alojamiento.",
    "relatedTerms": [
      "Caja de Canilla y Tensión Inferior",
      "Canilla de Bordado (Bobbin)",
      "Garfio Rotativo y Lanzadera",
      "Tensión del Hilo Inferior"
    ],
    "applications": [
      "Componente interno estándar de todas las cajas de canilla de bordadoras tipo L y M.",
      "Bordados a alta velocidad con numerosos cortes de hilo automáticos consecutivos.",
      "Garantía de tensión regular en textos pequeños y bordados monograma."
    ],
    "recommendedSettings": {
      "speedPPM": "Apto para todas las velocidades",
      "needleType": "Cualquier calibre de aguja",
      "stabilizer": "No aplica (pieza mecánica interna)",
      "density": "No aplica",
      "threadTension": "Tensión de canilla equilibrada: 20 a 25 gf"
    }
  },
  "a-098-anel-o-ring-de-retencao-de-carretel": {
    "term": "Anillo O-Ring Antideslizante para Porta-Conos y Carreteles",
    "level": "Iniciante 🟢",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del inglés O-ring (anillo de sección circular en forma de O) y del francés carretel / bobina. Solución elastomérica de agarre adoptada para estabilizar conos sobre pasadores lisos.",
    "summary": "Anillo de goma elástica insertado en el pasador del porta-conos que sujeta el cono o carretel evitando que gire loco o vibre al devanar.",
    "definition": "El anillo O-ring de retención de carretel (Spool Pin O-Ring Gripper / Bobbin Winder Friction Ring) es un aro toroidal de caucho sintético de nitrilo o silicona de alta fricción colocado a presión sobre los vástagos metálicos cilíndricos del devanador de canillas o de los soportes porta-conos de la máquina de bordar. Su cometido mecánico es actuar como cuña elastomérica antideslizante, sujetando firmemente el núcleo plástico o de cartón del cono para transmitir el giro sin patinamientos en el devanado, o impidiendo que el carretel brinque o vibre sobre el vástago durante la alimentación de hilo a alta velocidad.",
    "technicalDetails": "Al devanar canillas a más de 3.000 RPM en los motores independientes de bobinado, la aceleración rotacional hace que el núcleo liso de la canilla patine sobre el eje de acero si no existe un medio de agarre elástico con coeficiente de fricción superior a 0,7. El anillo O-ring encastrado en la ranura del pasador compensa las tolerancias milimétricas de los diferentes fabricantes de canillas, garantizando un bobinado uniforme y parejo.",
    "beginnerExplanation": "Es esa gomita redonda y negra que está encajada en el palito de metal donde ponés la canilla para llenarla de hilo. Sirve para que la canilla entre justita y no patine en falso cuando el motorcito gira a mil por hora para cargarla de hilo.",
    "construction": [
      "Aro toroidal moldeado en caucho de nitrilo (NBR) de sección circular de 2 a 3 mm",
      "Dureza Shore A 70 para máxima resistencia al desgaste por rozamiento",
      "Ranura mecanizada de alojamiento en el pasador de acero cromado",
      "Resistencia a la degradación por lubricantes y calor por fricción"
    ],
    "howItWorks": [
      "1. La operadora coloca la canilla vacía empujándola hacia abajo sobre el pasador del devanador.",
      "2. El anillo O-ring de goma se comprime contra la pared interior del orificio central de la canilla.",
      "3. La goma traba la canilla por fricción mecánica.",
      "4. Se activa el motor de devanado y el eje transmite toda su potencia de giro sin patinar.",
      "5. El hilo se enrolla parejo, firme y con tensión homogénea.",
      "6. La canilla llena se retira tirando hacia arriba con facilidad."
    ],
    "mainTypes": [
      "O-Ring para Pasador de Devanador de Canillas (Microanillo de tracción directa)",
      "Tope O-Ring para Pasador Horizontal Porta-Cono (Retén de carretel chico)",
      "Anillo de Silicona para Adaptador de Conos Industriales de 5.000 metros"
    ],
    "advantages": [
      "✔ Asegura que las canillas se llenen bien apretadas y sin zonas flojas",
      "✔ Evita que los carretes de hilo pequeño salten del vástago por la vibración",
      "✔ Muy económico y fácil de sustituir cuando se desgasta por los años",
      "✔ Protege los ejes de metal de rayaduras por fricción con plásticos duros"
    ],
    "limitations": [
      "Con los años el caucho puede resequarse, quebrarse o desgastarse; debe cambiarse si la canilla gira floja.",
      "Debe mantenerse limpio y seco, sin lubricantes que anulen el efecto de fricción."
    ],
    "commonErrors": [
      "❌ Aceitar el pasador del devanador haciendo que la goma patine y no gire la canilla.",
      "❌ Dejar un O-ring roto devanando canillas flojas que luego arruinan la tensión del bordado.",
      "❌ Forzar canillas de metal no compatibles con el calibre del pasador."
    ],
    "troubleshootingTips": [
      "Si el motor del devanador gira pero la canilla se queda quieta: Limpie el anillo O-ring con alcohol para quitar grasas o cámbielo por una gomita nueva si está desgastado.",
      "Si la canilla entra tan dura que cuesta sacarla: Pase suavemente un hisopo apenas húmedo sobre la goma para facilitar la inserción."
    ],
    "dicaArtrelados": "¡El chequeo para canillas perfectas! Si nota que sus canillas quedan fofas o blandas como esponjas al llenarlas, revise el arito de goma del devanador. Si está seco o gastado, la canilla patina y el hilo se llena sin fuerza. Cambie esa gomita que cuesta dos monedas y sus canillas volverán a quedar firmes como una goma de borrar.",
    "voceSabia": "¡Los anillos toroidales O-ring fueron inventados por el maquinista Niels Christensen en 1937 y se hicieron famosos durante la Segunda Guerra Mundial en los sistemas hidráulicos de los aviones de combate!",
    "practicalExercise": "Coloque una canilla vacía en el devanador. Intente hacerla girar con los dedos con la máquina apagada: debe sentir una resistencia elástica firme que no le permite girar en falso. Esa es la acción perfecta del anillo O-ring.",
    "quickSummary": "Anillo de goma en el pasador del devanador o porta-conos que sujeta la bobina por fricción para evitar patinamientos y vibraciones durante el bobinado.",
    "imageCaption": "Anillo O-ring de goma montado en la ranura del eje del devanador de canillas independiente.",
    "relatedTerms": [
      "Devanador de Canillas Independiente",
      "Canilla de Bordado (Bobbin)",
      "Devanado y Bobinado de Hilo Inferior",
      "Porta-Conos y Guía-Hilos"
    ],
    "applications": [
      "Devanadores automáticos de canillas en todas las marcas de bordadoras.",
      "Soportes de pasadores horizontales para carreteles pequeños de hilo.",
      "Adaptadores de conos grandes para máquinas de una sola aguja."
    ],
    "recommendedSettings": {
      "speedPPM": "Apto para devanadores de hasta 4.000 RPM",
      "needleType": "No aplica (accesorio de devanado)",
      "stabilizer": "No aplica",
      "density": "No aplica",
      "threadTension": "Devanado firme y consistente"
    }
  },
  "a-080-anel-o-ring-de-reten-o-de-carretel-spool-pin-rubber-friction-ring": {
    "term": "Anillo de Retención y Fricción de Carretel en Goma",
    "level": "Iniciante 🟢",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín anellus (anillo) y del inglés técnico spool pin friction ring (anillo de fricción para pasador de carrete). Accesorio auxiliar para control de desbobinado en máquinas textiles.",
    "summary": "Tope de goma amortiguador que fija el carretel en el porta-hilos horizontal para que no vibre ni se desplace hacia afuera durante el bordado.",
    "definition": "El anillo de retención y fricción de carretel en goma (Spool Pin Rubber Friction Ring / Spool Cap Cushion) es un retenedor elastomérico circular con orificio central calibrado diseñado para insertarse en el pasador portacarretes horizontal o vertical de las máquinas de bordar. Su función es fijar firmemente la tapa plástica retenedora (Spool Cap) o apoyar la base del carretel sobre una superficie de goma blanda, absorbiendo las sacudidas inerciales generadas por el desbobinado rápido del hilo y evitando que el carretel cabecee o se desplace hacia el extremo libre del vástago.",
    "technicalDetails": "En bordadoras que utilizan pasadores portahilos horizontales, el hilo sale por el extremo del carretel en espiral. Si el carretel tiene holgura axial y vibra contra la base plástica, el hilo se engancha periódicamente en la muesca de corte de fábrica del carretel, cortándose de inmediato. El anillo de fricción de nitrilo mantiene una precarga axial suave que estabiliza el cono sin frenar la salida libre del hilo hacia la guía superior.",
    "beginnerExplanation": "Es un arito o tapita de goma que se pone en el palito donde calzas el carrete de hilo. Sirve para que el carrete no baile, no vibre y no se salga volando cuando la máquina borda a toda velocidad, evitando que el hilo se enganche y se corte.",
    "construction": [
      "Anillo moldeado en caucho de nitrilo (NBR) o poliuretano de alta resiliencia",
      "Orificio central ajustado a la medida exacta del vástago (4 a 6 mm de diámetro)",
      "Superficie exterior estriada o lisa con borde biselado para fácil extracción",
      "Resistencia a la luz solar y no mancha plásticos ni metales"
    ],
    "howItWorks": [
      "1. La bordadora coloca el carretel de hilo en el vástago porta-conos horizontal.",
      "2. Coloca la tapa plástica adecuada según el tamaño del carretel.",
      "3. Desliza el anillo de fricción de goma empujándolo suavemente contra la tapa plástica.",
      "4. El anillo fija el conjunto en su posición sin dejar holgura de juego longitudinal.",
      "5. El hilo se desbobina suavemente por el lateral sin tirones ni enganches.",
      "6. La máquina borda sin cortes intempestivos de hilo superior."
    ],
    "mainTypes": [
      "Anillo de Retención Posterior (Amortigua la base del carretel contra la máquina)",
      "Anillo de Bloqueo Frontal (Asegura la tapa plástica en el extremo del pasador)",
      "Manguito Tubular de Goma Antivibratorio para Conos Cónicos Industriales"
    ],
    "advantages": [
      "✔ Previene cortes repentinos de hilo provocados por el enganche en las ranuras del carrete",
      "✔ Elimina zumbidos y ruidos molestos de plástico vibrando en el cabezal",
      "✔ Evita que los carretes de hilo pequeño se salgan del vástago a altas velocidades",
      "✔ Accesorio muy económico que prolonga la estabilidad de la costura"
    ],
    "limitations": [
      "No debe apretarse contra el carretel hasta frenar el desbobinado libre del hilo.",
      "Debe retirarse con cuidado para no estirarlo con fuerza excesiva."
    ],
    "commonErrors": [
      "❌ Dejar el carrete suelto sin ningún tope haciendo que vibre y se trabe el hilo.",
      "❌ Usar una tapa o anillo más pequeño que el carrete, haciendo que el hilo se enganche en el borde de plástico.",
      "❌ Dejar el anillo apoyado al revés frenando el hilo."
    ],
    "troubleshootingTips": [
      "Si el hilo superior se corta cada pocos minutos sin causa aparente: Revise el carretel en el vástago; asegúrese de que el anillo de retención mantenga la ranura del carrete orientada hacia el lado contrario a la salida del hilo.",
      "Si el anillo se desliza y no sujeta: Limpie el eje de metal con un paño seco para eliminar restos de lubricante que le hagan perder adherencia."
    ],
    "dicaArtrelados": "¡El secreto para usar carretes chicos sin dolores de cabeza! Siempre coloque el carrete de manera que la pequeña ranura donde viene trabado el hilo de fábrica quede hacia el fondo (mirando hacia la máquina), y ajústelo con su arito de goma. De esa forma, el hilo saldrá siempre hacia adelante libre y nunca se enganchará en esa ranura traicionera.",
    "voceSabia": "¡La fuerza centrífuga del desbobinado a 1.000 PPM puede hacer vibrar un carretel de hilo cientos de veces por minuto, generando microtirones imperceptibles que alteran la tensión superior si no está bien amortiguado!",
    "practicalExercise": "Coloque un carretel de hilo sin tope y haga correr la máquina a 800 PPM: verá cómo vibra y se desplaza hacia afuera. Luego coloque el anillo de retención de goma y vuelva a bordar: notará que permanece quieto y sereno, entregando el hilo con total suavidad.",
    "quickSummary": "Tope de goma elástica que asegura el carretel en el porta-hilos horizontal para absorber vibraciones y evitar cortes por desbobinado descontrolado.",
    "imageCaption": "Anillo de goma de retención fijando la tapa del carretel en el vástago porta-hilos de la bordadora.",
    "relatedTerms": [
      "Porta-Conos y Guía-Hilos",
      "Conjunto Tensor del Hilo Superior",
      "Desbobinado de Hilo y Tensión Dinámica",
      "Rotura de Hilo y Tensión Inadecuada"
    ],
    "applications": [
      "Uso de carreteles pequeños de hilo (de 500 a 1.000 metros) en máquinas de bordar.",
      "Sujeción de bobinas de hilo metálico y filamentos especiales.",
      "Estabilización de conos en máquinas hogareñas y de una sola aguja."
    ],
    "recommendedSettings": {
      "speedPPM": "Apto para todas las velocidades",
      "needleType": "Cualquier calibre de aguja",
      "stabilizer": "No aplica",
      "density": "No aplica",
      "threadTension": "Desbobinado fluido sin resistencia de arrastre"
    }
  },
  "a-077-aparador-autom-tico-de-fio-de-bobina-under-bed-thread-trimmer": {
    "term": "Cortahilos Automático de Hilo Inferior de Canilla",
    "level": "Avanzado 🔴",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín apparare (preparar, disponer) y del inglés técnico under-bed thread trimmer (cortador de hilo bajo la bancada). Sistema mecatrónico automatizado que revolucionó la productividad en las bordadoras industriales desde finales del siglo XX.",
    "summary": "Mecanismo electromecánico situado bajo la placa de aguja que engancha y corta los hilos superior e inferior al finalizar cada bloque o salto de bordado.",
    "definition": "El cortahilos automático de bancada inferior (Under-Bed Thread Trimmer / Sub-Bed Knife System) es el conjunto mecatrónico ubicado inmediatamente debajo de la placa de aguja y junto a la caja de canilla. Está compuesto por un solenoide o motor paso a paso, una leva de accionamiento, un gancho captor móvil (Moving Knife) y una cuchilla fija de carburo de tungsteno (Fixed Knife). Su función es capturar simultáneamente la lazada del hilo superior y el hilo de la canilla al recibir la orden electrónica en la matriz, cortándolos limpiamente y reteniendo una colita corta calibrada para reiniciar la costura sin deshebrarse.",
    "technicalDetails": "El ciclo de corte se ejecuta en menos de 180 milisegundos con el volante detenido en la posición angular de corte (típicamente entre 100° y 110° del ciclo de máquina). El gancho móvil avanza, captura ambos hilos, los arrastra contra la contracuchilla afilada y activa un fleje elástico retenedor que sujeta el cabo inferior para evitar que la canilla se desoville. La holgura de corte entre cuchillas debe ajustarse con galgas micrométricas con una tolerancia menor a 0,02 mm.",
    "beginnerExplanation": "Es la tijerita mágica y automática que está escondida debajo de la chapita de metal de la máquina. Cuando el bordado termina una letra o cambia de color, esta tijera invisible corta los hilos por debajo para que usted no tenga que cortar nada a mano con tijeritas, dejando la prenda limpia y lista para usar.",
    "construction": [
      "Cuchilla móvil oscilante o giratoria de acero para herramientas templado",
      "Cuchilla fija de carburo de tungsteno con filo rectificado al espejo",
      "Solenoide electromagnético de tracción o servomotor paso a paso",
      "Muelle retenedor de cabo de hilo inferior para evitar deshebrados en el arranque"
    ],
    "howItWorks": [
      "1. La bordadora llega al final de un bloque de puntadas o a un comando de salto largo.",
      "2. La computadora emite la señal de parada en el ángulo de corte predeterminado.",
      "3. El solenoide se energiza y desplaza la cuchilla móvil hacia adelante.",
      "4. La cuchilla móvil atrapa el hilo superior y el hilo de la canilla.",
      "5. Al retraerse, presiona los hilos contra la cuchilla fija y los secciona limpiamente.",
      "6. La lámina retenedora pinza el hilo inferior para que no se escape de la canilla.",
      "7. El pantógrafo salta a la siguiente posición e inicia el bordado al instante."
    ],
    "mainTypes": [
      "Sistema de Cuchilla Móvil y Fija Neumática / Electromagnética (Estándar industrial)",
      "Sistema de Cuchilla Giratoria de Tambor (Para alta velocidad continua)",
      "Cortador Mecánico Accionado por Leva de Eje Principal (Bordadoras familiares clásicas)"
    ],
    "advantages": [
      "✔ Ahorra cientos de horas de trabajo manual de limpieza y despunte con tijera",
      "✔ Deja el reverso de la prenda limpio, prolijo y con terminación profesional",
      "✔ Reduce el consumo de hilo eliminando puentes largos entre letras",
      "✔ Permite la operación desatendida de la máquina en tiradas de producción masiva"
    ],
    "limitations": [
      "Requiere limpieza frecuente de pelusas acumuladas entre los filos de las cuchillas.",
      "Si las cuchillas pierden filo, mastican el hilo en vez de cortarlo, trabando el mecanismo."
    ],
    "commonErrors": [
      "❌ Dejar acumular pelusa compactada de hilo y estabilizador alrededor de las cuchillas.",
      "❌ Golpear el filo de la cuchilla fija al retirar agujas rotas con pinzas de metal.",
      "❌ Forzar el mecanismo manualmente sin girar el volante a su posición de inicio."
    ],
    "troubleshootingTips": [
      "Si la máquina intenta cortar pero deja los hilos unidos: Retire la placa de aguja y limpie la pelusa acumulada con un cepillo; si las cuchillas están melladas, sustituya el conjunto de cuchilla fija y móvil.",
      "Si la aguja se deshebra justo después de cada corte: La colita de corte quedó demasiado corta; ajuste el parámetro de longitud de hilo post-corte en el menú de configuración técnica de la máquina."
    ],
    "dicaArtrelados": "¡El mantenimiento que evita dolores de cabeza con el cortahilos! Una vez por semana, retire la chapita de la aguja y con un pincelito seco o una perita de aire limpie toda la pelusa que se junta alrededor de las cuchillas. ¡Esa simple limpieza de un minuto evita que la tijera se trabe y le asegura cortes limpios y perfectos durante años!",
    "voceSabia": "¡En un bordado con decenas de letras y detalles, el cortahilos automático realiza entre 20 y 50 cortes en pocos minutos, ahorrándole a la bordadora más de 15 minutos de trabajo manual de tijera por cada prenda!",
    "practicalExercise": "Borde un nombre de cinco letras con la función de corte activada entre cada letra. Observe cómo la cuchilla actúa por debajo de la placa en fracciones de segundo y admire la prolijidad con la que el frente queda terminado sin hilos cruzados.",
    "quickSummary": "Dispositivo electromecánico bajo la placa de aguja que corta automáticamente los hilos superior e inferior al finalizar letras o bloques de color.",
    "imageCaption": "Mecanismo cortahilos de bancada inferior mostrando la cuchilla móvil y la cuchilla fija bajo la placa de aguja.",
    "relatedTerms": [
      "Corte Automático de Hilo (Trimmer)",
      "Caja de Canilla y Tensión Inferior",
      "Placa de Aguja de Bordado",
      "Salto de Puntada y Desplazamiento (Jump Stitch)"
    ],
    "applications": [
      "Sistemas de corte automático en bordadoras de una o múltiples agujas.",
      "Bordado de nombres personalizados y monogramas con corte entre letras.",
      "Grandes producciones industriales donde el despunte manual no es rentable."
    ],
    "recommendedSettings": {
      "speedPPM": "Freno automático a 0 PPM durante el ciclo de corte de 180 ms",
      "needleType": "Apto para todas las agujas",
      "stabilizer": "No aplica",
      "density": "No aplica",
      "threadTension": "Tolerancia de cuchillas: 0,02 mm de holgura"
    },
    "practicalExamples": [
      "Corte automático de cola de canilla al cambiar de color en escudos de 8 tonos.",
      "Despunte limpio de letras de nombres corporativos sin colas visibles.",
      "Producción seriada nocturna sin paradas manuales de tijera."
    ],
    "matrixParametersRelation": "Se vincula con los comandos de corte (Trim / M05) programados tras los remates de salida; exige una cola mínima retenida de 30 a 35 mm.",
    "whenToAdjust": "Ajuste o afile la contracuchilla fija si el hilo inferior queda deshilachado o si la máquina se desenebra al comenzar el tramo siguiente."
  },
  "a-060-aplicacao-com-corte-a-laser": {
    "term": "Aplique con Corte Láser Integrado en Bastidor",
    "level": "Avanzado 🔴",
    "category": "Técnicas de Aplique y Relieve",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín applicare (unir una cosa a otra) y del acrónimo inglés laser. Tecnología mecatrónica de vanguardia que combina óptica de corte láser CO2 con cabezales de bordado computarizado.",
    "summary": "Sistema automatizado que proyecta un haz láser CO2 para cortar siluetas de tela directamente dentro del bastidor, eliminando el recorte manual con tijera.",
    "definition": "El aplique con corte láser integrado (Laser-Cut Appliqué / Laser Bridge Embroidery System) es la tecnología mecatrónica de alta precisión que incorpora un tubo láser de CO2 sellado (de 30 a 100 W) montado en un carro deslizante sobre el puente de la bordadora o integrado directamente en el cabezal de costura. Permite que, tras bordar la línea de fijación del aplique, el haz láser corte el contorno del tejido superpuesto en fracciones de segundo con tolerancia de 0,1 mm directamente dentro del bastidor, sellando térmicamente los bordes sintéticos y eliminando por completo la intervención manual con tijeras.",
    "technicalDetails": "El haz láser opera enfocado por una lente óptica de seleniuro de zinc (ZnSe) con distancia focal de 50 mm, vaporizando el tejido sobrante mediante calor concentrado sin quemar la prenda base ni el estabilizador subyacente. En telas sintéticas como sarga de poliéster, microfibra o raso, la energía térmica cauteriza instantáneamente los bordes cortados, evitando el deshilachado y permitiendo rematar con cordones de satén delgados de apenas 1,5 mm de ancho o incluso con puntadas decorativas abiertas.",
    "beginnerExplanation": "En el aplique tradicional, cuando la máquina cose la telita del dibujo, tenés que sacar el bastidor o meter la tijerita con mucho cuidado para cortar el sobrante a mano sin pinchar la tela de abajo. Con este sistema, la máquina tiene una 'varita mágica láser' que corta la telita en un segundo con un rayo de luz invisible y perfecto, dejando los bordes derretidos y sellados sin deshilacharse nunca más.",
    "construction": [
      "Tubo láser de CO2 sellado por radiofrecuencia (longitud de onda de 10,6 micrómetros)",
      "Cabezal óptico con lentes de enfoque y espejo deflector guiado por galvanómetro",
      "Sistema de soplado de aire comprimido (Air Assist) para apagar posibles humos y chispas",
      "Turbina de extracción de humos y filtrado con carbón activado"
    ],
    "howItWorks": [
      "1. La bordadora cose la línea guía de marcado sobre la prenda.",
      "2. La operadora apoya un recorte de tela de aplique sobre el área marcada.",
      "3. La máquina cose una puntada recta rápida de sujeción (Tackdown).",
      "4. El cabezal láser se activa y recorre el contorno exterior cortando el sobrante en 2 segundos.",
      "5. La operadora retira el retazo sobrante sin usar tijeras de ningún tipo.",
      "6. La bordadora cubre el borde con una puntada de satén delgada y perfecta."
    ],
    "mainTypes": [
      "Sistema de Puente Láser (Laser Bridge que recorre múltiples cabezales industriales)",
      "Cabezal Láser Individual Montado en Máquina Tubular (Compact Laser Attachment)",
      "Apliques Precortados en Mesa de Corte Láser Externa y ensamblados en bastidor"
    ],
    "advantages": [
      "✔ Aumenta la velocidad de producción hasta en un 400% respecto al aplique manual con tijera",
      "✔ Sellado térmico de bordes sintéticos que garantiza cero deshilachado en el uso",
      "✔ Precisión geométrica milimétrica incluso en letras con curvas y calados diminutos",
      "✔ Reduce el ancho del cordón final de satén ahorrando miles de puntadas de hilo"
    ],
    "limitations": [
      "En telas de 100% algodón natural el láser corta pero no sella térmicamente las fibras.",
      "Requiere sistemas certificados de ventilación y extracción de humos al exterior."
    ],
    "commonErrors": [
      "❌ Calibrar una potencia excesiva de láser que termine perforando la prenda base de soporte.",
      "❌ No utilizar telas sintéticas o con termoadhesivo que aprovechen el sellado térmico.",
      "❌ Trabajar sin soplado de aire de asistencia dejando manchas amarillas de humo en la tela."
    ],
    "troubleshootingTips": [
      "Si el láser no corta la tela por completo: Aumente la potencia en un 5% o limpie la lente óptica de enfoque con alcohol isopropílico de alta pureza.",
      "Si el corte deja un borde tostado o amarillento: Aumente la presión del aire comprimido de asistencia (Air Assist) y reduzca levemente la potencia del haz."
    ],
    "dicaArtrelados": "¡La combinación soñada para escudos y números deportivos! Si no cuenta con una máquina con corte láser integrado, mande a cortar sus telas de aplique previamente en una cortadora láser de mesa externa con termoadhesivo en el revés. Al bordarlas en su máquina, encajarán como piezas de rompecabezas sin necesidad de usar tijeras en el bastidor.",
    "voceSabia": "¡Los sistemas de puente láser para bordado fueron desarrollados en Italia a finales de la década de 1990 y son capaces de volar a más de 1.500 mm por segundo cortando apliques en decenas de cabezales sincronizados!",
    "practicalExercise": "Compare un aplique cortado a mano con tijera contra uno cortado a láser: pase la uña por el borde del corte láser y observe cómo las fibras están completamente fusionadas y selladas sin un solo pelito suelto.",
    "quickSummary": "Tecnología que corta las telas de aplique directamente en el bastidor mediante un rayo láser CO2 de alta precisión, sellando bordes y ahorrando tiempo.",
    "imageCaption": "Cabezal de corte láser de CO2 integrado en una bordadora seccionando el contorno de un aplique textil.",
    "relatedTerms": [
      "Apliqué en Bordado Computarizado",
      "Aplique Termoadhesivo Definitivo",
      "Puntada Plumetis / Satén",
      "Tijera Pelícano para Aplique"
    ],
    "applications": [
      "Números y letras gigantes en sudaderas universitarios y camisetas de básquetbol.",
      "Escudos corporativos y parches militares con bordes recortados perfectos.",
      "Grandes producciones industriales de moda y ropa deportiva de alta rotación."
    ],
    "recommendedSettings": {
      "speedPPM": "750 a 900 PPM en bordado de satén",
      "needleType": "75/11 Punta de Bola",
      "stabilizer": "Entretela recortable pesada de 80 g/m²",
      "density": "Cordón satén de 2,0 a 2,5 mm (más fino gracias al corte perfecto)",
      "threadTension": "Normal de trabajo"
    },
    "practicalExamples": [
      "Parches de sarga y cordura con corte perimetral fundido sin deshilachado.",
      "Números universitarios de doble capa en tela de sudadera con corte milimétrico en bastidor.",
      "Letras para uniformes deportivos cortadas por puente láser sobre la máquina."
    ],
    "matrixParametersRelation": "Requiere compensación de sangría láser de 0,15 mm en el vector y festón satén posterior de 2,5 a 3,0 mm para cubrir los cantos termosellados.",
    "whenToAdjust": "Calibre la potencia del tubo láser (vatios) si observa quemaduras marrones en telas claras o si el rayo no corta totalmente la fibra sintética."
  },
  "a-aplicacao-com-termocolante-definitivo-patch-aplique": {
    "term": "Aplique Termoadhesivo Definitivo / Parche Bordado Termofijable",
    "level": "Intermedio 🟡",
    "category": "Técnicas de Aplique y Relieve",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín applicare (adherir) y del griego therme (calor) más del latín colare (pegar con firmeza). Técnica moderna de ensamble textil mediante películas de adhesivo de poliamida reactiva.",
    "summary": "Técnica que combina telas pre-adheridas con film termoadhesivo y bordado de festón, creando parches resistentes que no se deshilachan ni se despegan en el lavado.",
    "definition": "El aplique con termoadhesivo definitivo (Patch Appliqué / Permanent Fusible Film Appliqué) es la técnica de bordado y confección que utiliza una película de resina termoplástica de poliamida o poliuretano de alta adherencia (sin soporte de papel o con papel siliconado retirado) fijada en el revés de la tela de aplique mediante calor y presión antes de bordar. Su objetivo es termosoldar permanentemente las fibras del aplique a la prenda base, garantizando que el diseño soporte lavados intensivos sin deshilacharse en los bordes, incluso si se utilizan puntadas de cobertura abiertas como festón o punto París.",
    "technicalDetails": "El film termoadhesivo definitivo (como Teabond, Decofix o HeatnBond Ultrahold) se activa en dos etapas: primero se aplica a la tela del aplique a 130 °C durante 5 segundos para transferir la resina sólida. Una vez bordada la pieza con sus contornos en la máquina, se somete a un planchado térmico final en prensa térmica industrial a 160 °C con 4 bares de presión durante 15 a 20 segundos. La resina líquida penetra en los poros de ambos tejidos formando una unión molecular irrompible.",
    "beginnerExplanation": "Es el famoso aplique con pegamento térmico de plancha. En lugar de coser una telita común que con el tiempo se deshilacha o se levanta en las puntas, se le pega por detrás un papel termoadhesivo especial con la plancha. Al bordarlo y volver a plancharlo al final, la tela queda pegada y soldada para siempre a la camiseta, como si fuera una sola pieza de fábrica.",
    "construction": [
      "Tela base de aplique (sarga, gabardina, paño lenci, lino o algodón estampado)",
      "Film termoadhesivo permanente de poliamida pura de 50 a 100 micrones",
      "Puntadas de fijación previa y cordón de satén perimétrico (festón)",
      "Prenda base receptora lista para ensamblaje"
    ],
    "howItWorks": [
      "1. La bordadora adhiere con plancha el film termoadhesivo en el reverso de la tela del aplique.",
      "2. Corta la silueta deseada (a mano con tijera o con plotter de corte).",
      "3. La máquina borda la línea guía de marcado en la prenda montada en el bastidor.",
      "4. Se posiciona el aplique y la máquina cose el cordón de satén perimétrico cubriendo los bordes.",
      "5. Al salir del bastidor, se aplica prensa térmica a 160 °C durante 15 segundos para fundir el adhesivo definitivamente.",
      "6. La prenda queda lista, con tacto plano y resistencia total al lavarropas."
    ],
    "mainTypes": [
      "Aplique Termoadhesivo Cosido (Reforzado con bordado perimetral de satén)",
      "Parche Termofijable Independiente (Se borda primero y luego se plancha a la prenda)",
      "Aplique con Termoadhesivo Doble Cara Temporal para fácil reposicionamiento"
    ],
    "advantages": [
      "✔ Previene al 100% que la tela del aplique se deshilache o forme pelusas en los bordes",
      "✔ Evita que la tela del aplique se arrugue o forme bolsas de aire con los lavados",
      "✔ Permite utilizar puntadas de satén más angostas reduciendo el tiempo de bordado",
      "✔ Soporta más de 60 lavados domésticos con agua tibia sin despegarse jamás"
    ],
    "limitations": [
      "No debe aplicarse sobre telas con tratamientos impermeabilizantes de teflón o silicona sin prueba previa.",
      "Requiere calor y presión controlados; una plancha hogareña tibia no logra el fundido permanente."
    ],
    "commonErrors": [
      "❌ Confundir entretela termoadhesiva común (que se despega al lavar) con film termoadhesivo definitivo.",
      "❌ Tocar el film caliente con la suela de la plancha manchando la base metálica.",
      "❌ Lavar la prenda antes de que transcurran 48 horas de curado del adhesivo."
    ],
    "troubleshootingTips": [
      "Si el aplique se despega en una esquina tras el lavado: Vuelva a aplicar calor con plancha bien caliente y presión firme durante 15 segundos protegiendo con papel vegetal o teflón.",
      "Si la aguja sale pegajosa con residuos de adhesivo: Utilice agujas con revestimiento antiadherente (Anti-Glue) o limpie la hoja de la aguja con alcohol."
    ],
    "dicaArtrelados": "¡El secreto de Artrelados para parches que nunca se despegan! Use siempre film termoadhesivo definitivo (como Teabond o Decofix) en el revés de sus telas de aplique. Le da cuerpo a la tela, hace que la tijera pelícano corte con precisión quirúrgica y asegura que sus clientes laven la prenda una y mil veces ¡y el bordado siga intacto como el primer día!",
    "voceSabia": "¡Este tipo de film termoadhesivo de poliamida fue creado originariamente para el pegado de las insignias militares en los uniformes del ejército, donde ninguna costura puede fallar en situaciones de combate!",
    "practicalExercise": "Pegue un pedacito de tela con film termoadhesivo definitivo sobre un retazo de jean usando calor y presión. Deje enfriar dos minutos e intente despegarlo con los dedos con toda su fuerza: comprobará que la tela se rompe antes de que el adhesivo ceda.",
    "quickSummary": "Fijación permanente de telas de aplique mediante lámina adhesiva activada por calor que fusiona las fibras impidiendo el deshilachado.",
    "imageCaption": "Planchado térmico de un aplique textil con film termoadhesivo definitivo sobre una prenda terminada.",
    "relatedTerms": [
      "Apliqué en Bordado Computarizado",
      "Aguja Antiadherente (Anti-Glue)",
      "Puntada Plumetis / Satén",
      "Tijera Pelícano para Aplique"
    ],
    "applications": [
      "Parches termoadhesivos para chaquetas, mochilas y gorras.",
      "Nombres y figuras infantiles en toallas de jardín y batas escolares.",
      "Personalización de ropa de trabajo y uniformes gastronómicos de alta exigencia."
    ],
    "recommendedSettings": {
      "speedPPM": "650 a 800 PPM",
      "needleType": "75/11 Anti-Glue o Punta de Bola",
      "stabilizer": "Entretela recortable o rasgable según prenda",
      "density": "Cordón satén de 3,0 mm de ancho con espaciado de 0,40 mm",
      "threadTension": "Normal de trabajo"
    },
    "practicalExamples": [
      "Emblemas termoadhesivos para gorras y chalecos fijados con plancha térmica a 160 °C.",
      "Rodilleras y coderas escolares en tela reforzada fijadas en 15 segundos.",
      "Monogramas para toallas sin puntadas visibles en el revés mediante film termoplástico."
    ],
    "matrixParametersRelation": "El festón perimetral debe programarse con puntada de borde reforzada y densidad de 0,38 mm para sellar herméticamente la película polimérica.",
    "whenToAdjust": "Aumente el tiempo de planchado y presión si los bordes del aplique se despegan tras pruebas de lavado con agua tibia."
  },
  "a-004-aplique-de-bordado": {
    "term": "Apliqué en Bordado Computarizado",
    "level": "Iniciante 🟢",
    "category": "Técnicas de Aplique y Relieve",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del francés appliquer (poner una cosa sobre otra) y del latín applicare. Técnica ancestral de bordado manual rescatada y perfeccionada por la digitalización textil electrónica.",
    "summary": "Técnica que cubre áreas del diseño con recortes de tela contorneados con puntadas de satén o festón, ahorrando miles de puntadas de hilo y otorgando ligereza.",
    "definition": "El apliqué en bordado computarizado (Appliqué Embroidery Technique / Cut-in-the-Hoop Appliqué) es la técnica mixta que consiste en rellenar grandes áreas geométricas o figuras de un diseño utilizando piezas de tela superpuesta (estampada, texturada o lisa) en lugar de coser millones de puntadas de hilo de relleno (tatami). La matriz automatiza la secuencia mediante tres fases obligatorias: 1) Línea de marcado o posición (Placement Line); 2) Línea de fijación provisoria (Tackdown Stitch); 3) Cordón perimétrico de cobertura final en puntada de satén o festón (Cover Stitch).",
    "technicalDetails": "Un diseño bordado completamente con puntada de relleno de 15x15 cm puede demandar más de 45.000 puntadas, haciendo que la prenda quede pesada, rígida y demore 45 minutos de máquina. Ese mismo motivo resuelto con técnica de apliqué consume apenas 5.000 puntadas de contorno exterior, demorando menos de 8 minutos de costura y dejando una pieza suave, liviana y flexible con un ahorro del 85% en tiempo de máquina e hilo.",
    "beginnerExplanation": "En vez de que la máquina tarde media hora gastando un montón de hilo para pintar todo un corazón de color rojo, la máquina cose una línea de guía en la tela; vos apoyás un retazo de tela roja encima, la máquina le da una costurita rápida para sujetarlo, cortás el sobrante con una tijerita curva y luego la máquina le borda un cordón hermoso y prolijo alrededor de todo el borde. ¡Queda divino, rápido y suave!",
    "construction": [
      "Línea guía de posicionamiento (Placement Stitch)",
      "Línea de fijación provisoria de sujeción (Tackdown Stitch)",
      "Tela de aplique recortada a ras con tijera pelícano o precortada",
      "Borde final en puntada plumetis / satén de 3,5 a 4,5 mm o festón"
    ],
    "howItWorks": [
      "1. La bordadora cose la Línea de Posicionamiento mostrando dónde irá la tela.",
      "2. La máquina se detiene automáticamente (parada programada).",
      "3. La operadora coloca el recorte de tela cubriendo el área marcada.",
      "4. Se presiona el botón verde y la máquina cose la Línea de Fijación sujetando la tela.",
      "5. La operadora recorta el exceso de tela bien al ras de la costura sin desbastar la prenda.",
      "6. La máquina ejecuta el cordón final de satén sellando todos los bordes cortados."
    ],
    "mainTypes": [
      "Apliqué Tradicional (Recorte manual en el bastidor con tijera pelícano)",
      "Apliqué Precortado (Corte previo con plotter o láser para encaje instantáneo)",
      "Apliqué Rústico / Raw Edge (Con bordes desflecados a propósito y costura recta)",
      "Apliqué Acolchado 3D (Con relleno de guata para efecto esponjoso)"
    ],
    "advantages": [
      "✔ Ahorra hasta un 85% del tiempo de bordado y miles de metros de hilo",
      "✔ Prendas súper livianas, cómodas y flexibles sin rigidez de 'escudo'",
      "✔ Permite incorporar estampados, brillos y texturas que no existen en hilos",
      "✔ Altísimo margen de rentabilidad comercial en ajuar de bebés y ropa escolar"
    ],
    "limitations": [
      "Exige que la bordadora esté presente junto a la máquina para colocar y recortar la tela en las pausas programadas.",
      "Requiere tijeras especiales de punta curva o tipo pelícano para no cortar la prenda."
    ],
    "commonErrors": [
      "❌ Recortar la tela demasiado lejos de la costura de fijación dejando pelusas que asoman fuera del cordón de satén.",
      "❌ Cortar accidentalmente la tela de la prenda o el estabilizador con la tijera.",
      "❌ Usar telas de aplique que destiñan al lavarse arruinando la camiseta blanca."
    ],
    "troubleshootingTips": [
      "Si los hilachas de la tela asoman fuera del borde de satén: Aumente el ancho del cordón a 4,0 mm en el software y aplique entretela termoadhesiva en el revés de la tela de aplique antes de recortar.",
      "Si la máquina no frena después de la línea de marcado: Inserte una orden de cambio de color o comando de STOP programado en la matriz entre cada paso."
    ],
    "dicaArtrelados": "¡El secreto de los apliques perfectos que parecen de fábrica! Antes de poner la telita en el bastidor, pegue un film termoadhesivo liviano en su revés y use una tijera pelícano (esa que tiene una paleta redondeada abajo). La paleta apoya sobre el bastidor sin riesgo de pellizcar la camiseta y le permite cortar a 1 milímetro exacto de la costura. ¡El borde de satén quedará impecable y sin un solo hilito asomando!",
    "voceSabia": "¡Una figura de un osito de 15 cm completamente rellena en puntada tatami insume cerca de 40.000 puntadas; esa misma figura resuelta con tela de aplique insume apenas 4.500 puntadas de contorno exterior!",
    "practicalExercise": "Descargue una matriz sencilla de corazón en apliqué. Deje que la máquina marque la línea, coloque un recorte de tela de algodón floreada, espere la puntada de fijación y recorte el sobrante con tijera pelícano. Deje que la máquina cierre el cordón satén y sienta la suavidad de la prenda terminada.",
    "quickSummary": "Técnica que cubre áreas del diseño con retazos de tela enmarcados con puntadas de satén, ahorrando tiempo de costura y brindando ligereza textil.",
    "imageCaption": "Secuencia de apliqué en bastidor mostrando la tela recortada al ras y el remate final en cordón de satén.",
    "relatedTerms": [
      "Puntada Plumetis / Satén",
      "Puntada de Relleno Tatami",
      "Parada Programada de Máquina (Stop Command)",
      "Tijera Pelícano para Aplique"
    ],
    "applications": [
      "Ajuar y ropa de cuna para bebés (bodies, sábanas, toallitas).",
      "Letras gigantes en sudaderas universitarios y uniformes escolares.",
      "cojines decorativos, bolsos maternales y mantelería."
    ],
    "recommendedSettings": {
      "speedPPM": "600 a 750 PPM",
      "needleType": "75/11 Punta de Bola",
      "stabilizer": "Entretela recortable o rasgable firme",
      "density": "Cordón de satén de 3,5 a 4,0 mm de ancho con espaciado de 0,40 mm",
      "threadTension": "Equilibrada habitual"
    },
    "practicalExamples": [
      "Nombres infantiles con telas estampadas sobre camisetas de algodón.",
      "Grandes números de espalda en chaquetas deportivas reemplazando tatami pesado.",
      "Bordado de toallas de baño con figuras de piqué de nido de abeja."
    ],
    "matrixParametersRelation": "Requiere secuencia estricta en 3 pasos (trazado guía, puntada de fijación hilván y festón satén de cobertura) con compensación de tracción de 0,45 mm.",
    "whenToAdjust": "Aumente el ancho del festón a 3,2 mm si la tela de recorte asoma por fuera del cordón de satén."
  },
  "a-099-aplique-rendado-em-richelieu-eletronico": {
    "term": "Aplique de Encaje Richelieu Electrónico en Bastidor",
    "level": "Avanzado 🔴",
    "category": "Técnicas de Aplique y Relieve",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del cardenal francés Armand Jean du Plessis, Cardenal de Richelieu (siglo XVII, gran mecenas e impulsor de las cortes de encaje francesas) y del latín applicare. Adaptación digital a bordadoras de la histórica técnica europea de calado al hilo.",
    "summary": "Técnica clásica que cala áreas de tela suspendidas sobre entretela hidrosoluble y construye puentes de satén combinados con tul para crear encajes finos.",
    "definition": "El aplique de encaje Richelieu electrónico en bastidor (Electronic Richelieu Lace Appliqué / In-The-Hoop Cutwork Lace) es una técnica sofisticada de bordado computarizado que combina el calado mecánico de aberturas ornamentales en el tejido principal (Cutwork) con la costura de puentes de unión reforzados en puntada de satén (Barrettes o Richelieu Bars) y la inserción de tul transparente o tejido de encaje suspendido sobre entretela hidrosoluble pesada, recreando con absoluta precisión mecatrónica los históricos encajes franceses de corte renacentista.",
    "technicalDetails": "La secuencia digitalizada consta de 5 fases estandarizadas: 1) Línea guía perimetral del área a calar; 2) Pausa programada para vaciado del tejido con microtijera curva sobre estabilizador hidrosoluble de 80 g/m²; 3) Tendido de tul de fondo; 4) Construcción de puentes de satén con base de doble hilo de refuerzo (Underlay Bars); 5) Sellado perimétrico final en cordón de satén denso de 2,5 a 3,5 mm con acabado en festón o picot. Tras el lavado en agua tibia, la entretela se disuelve por completo dejando el encaje etéreo flotando en el aire.",
    "beginnerExplanation": "Es una técnica de reinas y castillos. La máquina marca un dibujito en la tela, vos recortás el centro del agujerito dejando solo un plástico transparente que se disuelve con agua debajo, ponés un pedacito de tul finito y la máquina teje 'puentecitos' y flores de encaje bordadas sobre el vacío. Cuando lavás la toalla con agua tibia, el plástico desaparece como por arte de magia y te queda un encaje calado bordado que parece una joya antigua.",
    "construction": [
      "Tela noble de soporte (lino puro, batista de algodón, percal de 300 a 400 hilos o seda)",
      "Doble capa de entretela hidrosoluble pesada (Water-Soluble Stabilizer de 80 g/m²)",
      "Capa intermedia de tul fino ilusión o microgasa de seda",
      "Hilo de bordar de rayón viscosa o poliéster brillante de calibre 40wt o 50wt"
    ],
    "howItWorks": [
      "1. La bordadora monta la tela junto a dos capas de entretela hidrosoluble en el bastidor.",
      "2. La máquina cose la línea de corte de las zonas que se van a calar.",
      "3. La operadora corta con tijerita de punta curva la tela del interior con cuidado de no pinchar la entretela de abajo.",
      "4. Se coloca una pieza de tul transparente sobre el hueco calado.",
      "5. La máquina teje los puentes de unión en puntada de satén de lado a lado.",
      "6. Remata todas las orillas con un cordón de festón compacto que sella los bordes.",
      "7. La prenda se sumerge en agua tibia: la entretela se disuelve revelando un encaje suspendido deslumbrante."
    ],
    "mainTypes": [
      "Richelieu Tradicional con Puentes Simples (Calado clásico sobre lino)",
      "Richelieu con Tul Ilusión Transparente (Efecto velado romántico)",
      "Richelieu Tridimensional con Pétalos Volantes (Efecto relieve multicapa)"
    ],
    "advantages": [
      "✔ Uno de los bordados de mayor cotización comercial en blanco de lujo y ajuares ceremoniales",
      "✔ Reproduce piezas de museo que demandaban meses de labor manual en pocos minutos de máquina",
      "✔ Agrega una distinción inigualable a toallas de banquete, sábanas de novia y vestidos de bautismo",
      "✔ Acabado duradero y lavable que perdura durante generaciones familiares"
    ],
    "limitations": [
      "Requiere destreza y paciencia de la operadora para recortar el tejido con precisión sin perforar la entretela soluble.",
      "No admite telas sintéticas que se deshilachen con facilidad a menos que se use sellado térmico previo."
    ],
    "commonErrors": [
      "❌ Cortar la entretela hidrosoluble de abajo con la tijera al recortar la tela del calado.",
      "❌ Usar entretela rasgable común de papel; al mojarla quedarán pedazos blancos atrapados en el encaje.",
      "❌ Bordar las columnas de satén con densidad demasiado baja dejando hilos de lino asomando."
    ],
    "troubleshootingTips": [
      "Si la entretela soluble se rompe o perfora durante el calado: Coloque un parche de film soluble por debajo adherido con una gota de agua con la yema del dedo.",
      "Si los puentes de encaje quedan torcidos o deshilachados: Reduzca la velocidad de la máquina a 550 PPM durante la fase de puentes y asegúrese de que el bastidor esté tensado como parche de tambor."
    ],
    "dicaArtrelados": "¡El truco maestro para recortar el Richelieu sin pinchar la entretela soluble de abajo! Utilice una tijerita de manicura con punta curva bien afilada y mantenga SIEMPRE la punta curvada hacia arriba, mirando al techo, mientras va cortando la tela. De esa forma, la panza redonda de la tijera desliza suavemente sobre la entretela sin clavarse jamás en el plástico transparente.",
    "voceSabia": "¡El encaje Richelieu original era bordado a mano con aguja fina por monjas en los conventos de Francia e Italia en el siglo XVII; una sola toalla para banquetes de reyes podía demandar más de dos años de bordado continuo!",
    "practicalExercise": "Enbastidore un recorte de lino con dos capas de entretela soluble de 80 g. Borde una pequeña flor de Richelieu. Haga la pausa programada, recorte el centro con la tijera con punta curva hacia arriba, coloque un trocito de tul y deje que la máquina termine el cordón de satén. Enjuague bajo la canilla con agua tibia y maravíllese con el encaje perfecto.",
    "quickSummary": "Técnica refinada que combina áreas caladas en la tela con puentes de satén y tul sobre entretela soluble, creando encajes de corte clásicos.",
    "imageCaption": "Detalle de encaje Richelieu electrónico en bastidor con calados geométricos y puentes de unión en puntada de satén.",
    "relatedTerms": [
      "Bordado Richelieu (Cutwork)",
      "Entretela Hidrosoluble de Bordado",
      "Puntada Plumetis / Satén",
      "Puentes de Encaje (Richelieu Bars)",
      "Lino Puro y Cambray"
    ],
    "applications": [
      "Manteles y caminos de mesa para banquetes y fiestas de gala.",
      "Vestidos de novia, velos ceremoniales y faldones de bautismo.",
      "Juegos de sábanas nupciales en algodón egipcio de 400 hilos."
    ],
    "recommendedSettings": {
      "speedPPM": "500 a 600 PPM para máxima precisión de puentes",
      "needleType": "75/11 Punta Fina / Microtex o Aguja Cutwork",
      "stabilizer": "Dos capas de entretela hidrosoluble pesada (80 g/m²)",
      "density": "Cordón satén denso de 0,36 mm a 0,38 mm de espaciado",
      "threadTension": "Ligeramente relajada para evitar tirones en el vacío"
    }
  }
};

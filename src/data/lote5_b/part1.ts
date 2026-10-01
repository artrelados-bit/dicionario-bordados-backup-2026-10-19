import { Verbete } from "../../types";

export const LOTE5_B_PART1_ES: Record<string, Partial<Verbete>> = {
  "b-035-bordado-estrutural-em-camadas": {
    "term": "Bordado Estructural en Capas",
    "level": "Avanzado 🔴",
    "category": "Digitalización & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín structura (construcción ordenada) y stratum (capa tendida). Principio de ingeniería textil aplicado a la digitalización de alta resistencia.",
    "definition": "Estrategia arquitectónica de programación matricial donde el bordado se divide en múltiples niveles funcionales superpuestos (base de anclaje de tejido, capas de soporte direccional cruzado, volumen intermedio y cobertura satinada o tatami final), diseñada para neutralizar la elasticidad anisotrópica de la tela y evitar deformaciones estructurales en diseños de alta complejidad.",
    "howItWorks": [
      "1. Nivel 1 (Fijación de sustrato): costura perimetral abierta (Basting Stitch) que une la tela a la entretela evitando desplazamientos.",
      "2. Nivel 2 (Estructura reticular): base tatami ligera en ángulo opuesto a la elasticidad dominante de la tela para estabilizar la urdimbre.",
      "3. Nivel 3 (Cuerpo y compensación): capas intermedias de relleno con densidad graduada que amortiguan la tensión del hilo final.",
      "4. Nivel 4 (Puntada vista): columnas de satín o tatami final con ángulo calibrado y compensación de tirantez milimétrica.",
      "5. El diseño resultante mantiene estabilidad dimensional idéntica antes y después del lavado industrial sin encoger la prenda."
    ],
    "beginnerExplanation": "Es como construir una casa: no puedes pintar las paredes antes de hacer los cimientos y levantar las columnas. En el bordado estructural, en vez de tirar puntadas pesadas sobre la tela de golpe, primero la máquina hace una base de hilos suaves que sostienen la tela, luego una capa intermedia que le da fuerza y finalmente el dibujo lindo que se ve por fuera. Así el bordado nunca queda arrugado ni deforma la ropa.",
    "practicalExamples": [
      "Escudos densos bordados sobre telas técnicas elastizadas de camisetas deportivas (Spandex y Dry-Fit).",
      "Bordados corporativos de gran tamaño en la espalda de camperas impermeables multicapa.",
      "Parches de alta definición bordados directamente sobre suéteres de punto grueso de lana."
    ],
    "matrixParametersRelation": [
      "Graduación de densidad por capa: capa base a 0,85 mm, capa intermedia a 0,60 mm y capa exterior a 0,40 mm.",
      "Ángulos de cruce ortogonales: rotar el ángulo de cada capa sucesiva entre 45° y 90° respecto a la anterior para máxima rigidez mecánica.",
      "Filtrado de penetraciones acumuladas: eliminar puntadas redundantes en el centro del diseño para evitar roturas de aguja."
    ],
    "commonErrors": [
      "Superponer capas con densidades cerradas estándar (0,38 mm), convirtiendo el bordado en una placa de acero que rompe agujas.",
      "Colocar la capa exterior en el mismo ángulo de puntada que la base, hundiendo el hilo superior dentro de los surcos del fondo.",
      "Bordar capas estructurales en telas livianas sin entretela de soporte adecuada, provocando ondulaciones irreparables."
    ],
    "troubleshootingTips": [
      "Utiliza entretela estable de cortar (Cut-away) de poliéster prensado para soportar las fuerzas de las diferentes capas.",
      "Usa hilo de calibre fino 60wt en las capas intermedias si necesitas mucho detalle sin engrosar la prenda.",
      "Prueba la flexibilidad de la pieza doblando el bordado: debe arquearse suavemente sin quebrarse ni formar pliegues duros."
    ],
    "whenToAdjust": "Abre el espaciado de las capas base si la máquina produce vibraciones o chasquidos duros al clavar la aguja en las áreas centrales.",
    "dicaArtrelados": "El tip arquitectónico Artrelados: Si tienes que bordar sobre una tela muy elástica como lycra de natación o calzas de ciclismo, no luches contra la elasticidad con más entretela. Diseña una base estructural en forma de telaraña radial (Underlay en estrella): fijará la tela en todas las direcciones a la vez con un 50% menos de puntadas que una cuadrícula pesada.",
    "voceSabia": "¿Sabías que los fabricantes de parches para trajes ignífugos de bomberos y pilotos militares exigen bordados estructurales en capas para que el escudo no se desprenda ni se encoja al ser expuesto a temperaturas extremas?",
    "practicalExercise": "Diseña un círculo de 50 mm con tres capas: base tatami a 45° con 0,80 mm de densidad, segunda capa a 135° con 0,60 mm y satín perimetral de 4 mm. Bórdalo sobre tejido de punto y comprueba que la tela alrededor queda totalmente lisa.",
    "quickSummary": "Programación arquitectónica del bordado en capas superpuestas con ángulos cruzados para anclar telas elásticas y dar estabilidad.",
    "summary": "Programación arquitectónica del bordado en capas superpuestas con ángulos cruzados para anclar telas elásticas y dar estabilidad.",
    "relatedTerms": [
      "Bordado en Capas / Superposición de Puntadas",
      "Puntadas de Soporte (Underlay)",
      "Compensación de Tirantez (Pull Compensation)",
      "Entretela de Cortar (Cut-away)"
    ]
  },
  "b-042-bordado-fringe-ponto-franja": {
    "term": "Bordado Fringe / Punto Fleco",
    "level": "Intermedio 🟡",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés fringe (orla, fleco suelto). Técnica nacida en el diseño de guardas para alfombras orientales y adaptada al bordado computarizado moderno.",
    "definition": "Variante técnica del bordado en satín donde las puntadas de un bloque perimetral se anclan con remates firmes en un solo extremo, dejando el extremo opuesto sin traba; tras cortar el hilo de la canilla por el revés, las puntadas se extraen por el derecho formando flecos largos, bucles y orlas tridimensionales que aportan movimiento táctil a la prenda.",
    "howItWorks": [
      "1. La matriz traza una hilera de puntada recta de anclaje (Lock Stitch) reforzada en el borde superior del fleco.",
      "2. Se ejecuta una columna de satín con longitud de puntada de 8 mm a 12 mm y densidad tupida (0,32 mm).",
      "3. En el borde inferior, la aguja no ejecuta ningún nudo de seguridad ni remate, permitiendo el deslizamiento del hilo.",
      "4. Al desbastar la pieza del bastidor, se cortan con bisturí textil o descosedor los hilos inferiores a lo largo del canal libre.",
      "5. Se cepillan las hebras superiores con un peine fino liberando una cascada de flecos suaves y regulares."
    ],
    "beginnerExplanation": "Es una forma muy divertida de bordar flequitos sueltos como los de una bufanda, la cola de un caballito o la pollera de flecos de una bailarina. La máquina cose una franja de puntadas largas muy apretadas que están bien agarradas de arriba pero sueltas de abajo. Cuando la máquina termina, cortas los hilitos blancos por atrás, peinas por adelante ¡y todos los flequitos quedan bailando libres!",
    "practicalExamples": [
      "Barbas blancas de duendes y Papá Noel en decoraciones navideñas de fieltro.",
      "Melena de leones, crines de caballos y pelaje largo de animales en toallitas infantiles.",
      "Bordes decorativos con flecos rústicos en caminos de mesa y mantas camperas."
    ],
    "matrixParametersRelation": [
      "Línea de remate triple: indispensable programar 3 a 5 pasadas de puntada recta de seguridad sobre el extremo que no se cortará.",
      "Ancho de satín largo: mínimo 7 mm para flecos cortos y hasta 14 mm para flecos tupidos sin exceder el salto del pantógrafo.",
      "Densidad de puntada alta: de 0,30 mm a 0,35 mm para que el fleco tenga volumen y tape el sustrato base."
    ],
    "commonErrors": [
      "Cortar el lado equivocado por el revés de la tela, desarmando la costura de anclaje y perdiendo todo el bordado.",
      "Programar remates de inicio y fin automáticos en ambos lados, impidiendo que el hilo se libere.",
      "Usar hilos de poliéster baratos con nudos que se traban al peinar los flecos."
    ],
    "troubleshootingTips": [
      "Pinta una línea con tiza roja por el revés en el lado que debes cortar para no equivocarte de borde.",
      "Coloca pegamento sellador de costuras líquido (Fray Check) sobre la línea de anclaje antes de cortar los hilos inferiores.",
      "Peina los flecos con un cepillo de dientes nuevo con movimientos suaves desde la raíz hacia las puntas."
    ],
    "whenToAdjust": "Aumenta la densidad del satín en la matriz si al peinar los flecos la base de tela queda visible.",
    "dicaArtrelados": "El tip de peinado Artrelados: Si quieres que los flecos queden ondeados y con volumen rizado en vez de rectos, vaporízalos suavemente con plancha de vapor a 10 cm de distancia y enróllalos unos segundos en un palito de brochette mientras se enfrían. Mantendrán el rulo durante meses.",
    "voceSabia": "¿Sabías que los vestidos de charleston de los años 1920 tenían flecos cosidos uno por uno a mano, mientras que hoy una máquina electrónica borda más de 500 flecos por minuto con precisión milimétrica?",
    "practicalExercise": "Borda un rectángulo de satín de 10x40 mm con anclaje superior de 4 pasadas. Corta el hilo inferior del borde libre con tu descosedor, peina los hilos hacia adelante y comprueba la firmeza del fleco resultante.",
    "quickSummary": "Técnica de puntadas satín con anclaje unidireccional que se liberan cortando la bobina para formar flecos y pelos tridimensionales.",
    "summary": "Técnica de puntadas satín con anclaje unidireccional que se liberan cortando la bobina para formar flecos y pelos tridimensionales.",
    "relatedTerms": [
      "Bordado con Efecto Franja 3D / Punto Fringe",
      "Puntada Satín (Satin Stitch)",
      "Puntada de Remate (Lock Stitch)",
      "Descosedor y Bisturí Textil"
    ]
  },
  "b-011-bordado-industrial": {
    "term": "Bordado Industrial",
    "level": "Avanzado 🔴",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución nominal masculina",
    "origin": "De la Revolución Industrial textil y la invención del autómata de bordado en masa en Suiza y Japón para abastecer la producción seriada a gran escala.",
    "definition": "Segmento productivo de alta manufactura que emplea máquinas multicabezal sincronizadas (de 2 a 32 cabezales mecánicos trabajando en paralelo sobre el mismo pantógrafo) operando a velocidades continuas de 850 a 1200 PPM, equipadas con sistemas automáticos de cambio de color, corte de hilo neumático, lubricación centralizada y control por servomotores industriales de corriente alterna.",
    "howItWorks": [
      "1. El operador carga la matriz de producción en la consola central y programa la asignación de conos para los cabezales.",
      "2. El pantógrafo maestro traslada un marco tubular unificado o una barra de bastidores que mueve todas las prendas a la vez.",
      "3. El árbol principal superior e inferior gira accionado por servomotores AC sin escobillas (Brushless) con encoder óptico de posición angular.",
      "4. Cada cabezal ejecuta las mismas puntadas simultáneamente con tolerancia mecánica inferior a 0,05 mm entre cabezales.",
      "5. Los sensores piezoeléctricos o fotodiodos detectan roturas de hilo instantáneas deteniendo la máquina en menos de dos puntadas para subsanar el fallo."
    ],
    "beginnerExplanation": "Es el bordado a gran escala de las fábricas. En vez de tener una maquinita que borda una remera por vez, son máquinas gigantes que tienen 4, 8, 12 o hasta 24 cabezales trabajando juntos al mismo tiempo. Pones 12 gorras o 12 buzos en fila, aprietas un botón, ¡y la máquina borda los 12 exactamente iguales a mil puntadas por minuto!",
    "practicalExamples": [
      "Producción de miles de gorras promocionales para campañas corporativas y eventos multitudinarios.",
      "Bordado masivo de escudos y nombres en uniformes policiales, militares y hospitalarios.",
      "Fabricación seriada de ropa de cama para cadenas de hoteles y prendas de exportación."
    ],
    "matrixParametersRelation": [
      "Optimización de cambios de aguja: reducir los cambios de color al mínimo indispensable; cada cambio en una máquina de 12 cabezales detiene la producción de 12 prendas simultáneamente.",
      "Minimización de cortes de hilo (Trims): sustituir saltos cortos con corte por puntadas de unión ocultas bajo otros elementos (Bridge Stitches).",
      "Formato binario industrial: uso preferencial de formato Tajima .DST por su compatibilidad universal y solidez operativa."
    ],
    "commonErrors": [
      "No nivelar el puente de la máquina con gatos mecánicos de precisión sobre piso de hormigón, provocando vibraciones destructivas.",
      "Dejar cabezales descalibrados respecto al ángulo del garfio, provocando que un cabezal rompa hilo mientras los otros diez bordan normalmente.",
      "Usar hilos de baja calidad con nudos industriales que paralizan toda la planta productiva."
    ],
    "troubleshootingTips": [
      "Realiza el plan de lubricación diario: aceite mineral blanco ISO VG 10 en las pistas de garfio cada 4 horas de trabajo continuo.",
      "Calibra la tensión de todos los cabezales con un tensiómetro analógico de hilo (Towa) para garantizar uniformidad absoluta en todas las prendas.",
      "Instala estabilizadores de tensión eléctrica trifásica y sistemas UPS para proteger la placa CPU de la máquina contra microcortes de red."
    ],
    "whenToAdjust": "Revisa la sincronización angular del eje (Timing) si notas saltos de puntada o roturas reiteradas en un cabezal específico de la línea.",
    "dicaArtrelados": "El indicador clave de producción Artrelados: En bordado industrial el tiempo se mide en 'puntadas por minuto efectivas'. Si tu matriz tiene 10.000 puntadas y 15 cortes de hilo inútiles, perderás 2 minutos por prenda solo en paradas mecánicas. Limpia las matrices en el software eliminando cortes redundantes: en una tirada de 1.000 prendas ahorrarás más de 30 horas de máquina.",
    "voceSabia": "¿Sabías que una máquina industrial moderna de 20 cabezales puede producir más de 1.200.000 puntadas por hora, lo que equivale a la labor de más de 300 bordadoras manuales expertas trabajando sin descanso?",
    "practicalExercise": "Calcula el costo por minuto de tu máquina sumando energía, amortización, hilo y mano de obra. Verás cómo optimizar una matriz para recortar 3 minutos por corrida multiplica la rentabilidad neta de tu taller.",
    "quickSummary": "Producción automatizada en masa con máquinas multicabezal sincronizadas para confección seriada de alta velocidad.",
    "summary": "Producción automatizada en masa con máquinas multicabezal sincronizadas para confección seriada de alta velocidad.",
    "relatedTerms": [
      "Bordado Industrial a Gran Escala",
      "Cabezal de Bordado Industrial",
      "Tensiómetro de Hilo (Towa Gauge)",
      "Formato Tajima (.DST)"
    ]
  },
  "b-028-bordado-industrial-em-larga-escala": {
    "term": "Bordado Industrial a Gran Escala",
    "level": "Avanzado 🔴",
    "category": "Mantenimiento & Mecánica",
    "grammarClass": "Locución nominal masculina",
    "origin": "De los modelos de manufactura esbelta (Lean Manufacturing) y producción continua en parques industriales textiles para abastecimiento de marcas globales.",
    "definition": "Ecosistema productivo de manufactura textil intensiva que coordina baterías de máquinas industriales multicabezal en turnos rotativos continuos, soportado por estaciones ergonómicas de montaje rápido de bastidores (Hooping Stations), software de control de planta en tiempo real, logística de insumos automatizada y controles estadísticos de calidad por muestreo AQL.",
    "howItWorks": [
      "1. Los pedidos se procesan mediante sistemas MES (Manufacturing Execution System) que distribuyen las matrices automáticamente a las máquinas vía red Ethernet.",
      "2. Estaciones de montaje de bastidores pre-ensamblan las prendas mientras la máquina está bordando el lote anterior (reducción del tiempo de parada a cero).",
      "3. Se utilizan conos gigantes de hilo de 5.000 metros y bobinas predevanadas magnéticas para minimizar recargas.",
      "4. Al terminar el ciclo, los bastidores se intercambian en bloque y el operador inicia inmediatamente la siguiente corrida.",
      "5. Inspectores de calidad revisan las prendas desbastadas bajo lámparas de inspección óptica de 1000 lux antes del empaque final."
    ],
    "beginnerExplanation": "Es cuando un taller de bordado se convierte en una fábrica gigante que trabaja día y noche para hacer miles y miles de prendas. Todo está cronometrado: mientras las máquinas bordan a fondo, los operarios ya tienen listos los aros con las siguientes remeras preparadas. Nadie pierde un segundo, se usan conos de hilo gigantes que no se acaban nunca y cada remera se revisa con lupas de control para que no vaya ningún hilo suelto.",
    "practicalExamples": [
      "Confección masiva de camisetas para mundiales de fútbol y eventos deportivos internacionales.",
      "Bordado de dotaciones completas de ropa de trabajo para multinacionales de minería y petróleo.",
      "Lotes masivos de gorras y accesorios para cadenas de tiendas minoristas globales."
    ],
    "matrixParametersRelation": [
      "Estandarización de paleta de colores: asignar posiciones fijas de cono en los cabezales (por ejemplo, aguja 1 blanco, 2 negro, 3 marino) para no cambiar conos entre diseños.",
      "Reducción de velocidad en zonas críticas: programar en la matriz frenadas automáticas solo en curvas de alta fricción para mantener 1000 PPM en el resto.",
      "Compensación estandarizada por tejido: bases de datos matriciales precalibradas para piqué, polar, gabardina y tejido de punto."
    ],
    "commonErrors": [
      "Cuellos de botella en la mesa de enbastidorable: tener las máquinas paradas esperando que los operarios coloquen las telas en los aros.",
      "Falta de mantenimiento preventivo programado, provocando paradas imprevistas de máquinas completas en plena entrega urgente.",
      "No controlar la humedad y temperatura ambiental del taller, provocando estática y roturas de hilo masivas."
    ],
    "troubleshootingTips": [
      "Mantén la humedad relativa del ambiente de bordado entre 50% y 60% para que los hilos de poliéster y viscosa conserven su flexibilidad elástica.",
      "Implementa estaciones de enbastidorable neumáticas (Pneumatic Hooping Stations): reducen la fatiga del operario y aceleran el montaje un 300%.",
      "Lleva una planilla de control de vida útil de agujas: reemplaza las agujas de toda la batería cada 40 horas de costura para evitar saltos de puntada."
    ],
    "whenToAdjust": "Reorganiza el flujo de trabajo en planta si el tiempo de máquina parada entre tandas supera el 15% del tiempo total del turno.",
    "dicaArtrelados": "El principio de eficiencia Artrelados para plantas de bordado: El dinero de una fábrica de bordado se gana cuando la aguja está cosiendo; cada minuto que la máquina está parada es dinero que se pierde. Ten siempre el doble de bastidores que cabezales tiene tu máquina: un juego borda mientras el otro juego se monta en la mesa. El cambio de lote debe tardar menos de 60 segundos.",
    "voceSabia": "¿Sabías que en las grandes plantas de bordado de Asia se utilizan sistemas de cámaras con inteligencia artificial montados sobre cada cabezal que detectan una puntada fallida o rotura de aguja en menos de 0,02 segundos y avisan al operario con una luz estroboscópica?",
    "practicalExercise": "Cronometra con un reloj cuánto tardas en sacar una prenda bordada, limpiar sus hilos y colocar la siguiente prenda lista para coser. Analiza qué movimientos puedes simplificar para reducir ese tiempo a la mitad.",
    "quickSummary": "Organización productiva a escala industrial con flujos continuos, estaciones de montaje rápido y control de planta.",
    "summary": "Organización productiva a escala industrial con flujos continuos, estaciones de montaje rápido y control de planta.",
    "relatedTerms": [
      "Bordado Industrial (Commercial Multi-Head)",
      "Estación de Montaje de Bastidores (Hooping Station)",
      "Control de Calidad Textil (AQL)",
      "Mantenimiento Preventivo Mecánico"
    ]
  },
  "b-010-bordado-livre": {
    "term": "Bordado Libre",
    "level": "Iniciante 🟢",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "De la costura creativa tradicional anterior a los microprocesadores, donde la artesana guiaba la tela con sus manos tras bajar los dientes de arrastre de la máquina de coser.",
    "definition": "Modalidad de bordado a máquina en la que se desactiva el arrastre mecánico automático (dientes de transporte bajados y sin pantógrafo computarizado) y se utiliza un prensatelas de zurcido con resorte (Darning Foot), permitiendo que la bordadora desplace el bastidor libremente con sus manos en cualquier dirección (360°) para dibujar, contornear y rellenar con hilo de forma gestual y espontánea.",
    "howItWorks": [
      "1. Se bajan o cubren los dientes de arrastre de la máquina de coser con una placa de zurcido.",
      "2. Se instala el prensatelas de bordado libre o acolchado que salta con cada subida de aguja liberando la tela.",
      "3. La tela se tensa fuertemente en un bastidor liviano de madera o plástico sin tornillos abultados.",
      "4. Se acciona el motor a velocidad constante mientras las manos de la artesana mueven el bastidor sobre la placa.",
      "5. La longitud y dirección de cada puntada dependen exclusivamente de la coordinación rítmica entre la velocidad del motor y la velocidad del movimiento de las manos."
    ],
    "beginnerExplanation": "Es como pintar o dibujar con lápiz sobre una hoja, ¡pero el lápiz es la aguja de la máquina cosiendo! Le quitas los dientitos a la máquina para que no empuje la tela sola, agarras el bastidor con las dos manos y lo vas moviendo hacia donde quieras: adelante, atrás, en círculos o en zigzag. Tú eres el cerebro y el motor que dibuja con el hilo.",
    "practicalExamples": [
      "Pintura con aguja (Thread Painting) de retratos, aves y paisajes con textura artística.",
      "Acolchado libre (Free-Motion Quilting) con dibujos de plumas y arabescos sobre colchas.",
      "Firmas, caligrafía gestual y arreglos creativos en prendas vintage de algodón."
    ],
    "matrixParametersRelation": [
      "Sin programación matricial: no utiliza archivos digitales ni software de ponchado.",
      "Coordinación ojo-mano-pedal: el ritmo constante del pie en el pedal define la cadencia de puntada.",
      "Tensión de hilo superior ligeramente aflojada: para permitir que el lazo se forme suavemente en giros rápidos de 360 grados."
    ],
    "commonErrors": [
      "Mover el bastidor mientras la aguja está clavada dentro de la tela, doblando y quebrando agujas al instante.",
      "Mover las manos demasiado rápido con la máquina yendo despacio, produciendo puntadas gigantes de más de 8 mm que quedan flojas.",
      "Tener la tela floja en el bastidor, provocando que la tela 'baile' hacia arriba con la aguja (efecto Flagging) y se salten puntadas."
    ],
    "troubleshootingTips": [
      "Usa guantes de acolchado con dedos de goma antideslizante (Quilting Gloves): te dan control total del bastidor sin cansarte las muñecas.",
      "Mantén la vista dos centímetros por delante de donde está clavando la aguja, anticipando la curva del dibujo.",
      "Mantén el motor de la máquina a una velocidad media constante y regula la longitud de las puntadas variando la velocidad de tus manos."
    ],
    "whenToAdjust": "Afloja el tornillo del prensatelas o ajusta la altura del resorte si el aro se traba al deslizarse sobre la placa de aguja.",
    "dicaArtrelados": "El secreto de relajación Artrelados para bordado libre: No aprietes el bastidor con fuerza como si fueras a levantarlo. Apoya las palmas planas de tus manos sobre el aro relajando los hombros y respira con calma. Mueve el bastidor como si estuvieras deslizando un plato sobre una mesa enjabonada: la fluidez de tus manos se reflejará en puntadas suaves y curvas perfectas.",
    "voceSabia": "¿Sabías que las primeras máquinas de bordar de la historia en el siglo XIX eran todas de bordado libre y que las operarias debían pedalear con los pies al compás de la música para mantener la regularidad de las puntadas?",
    "practicalExercise": "Dibuja una espiral con lápiz en una tela de algodón en el bastidor. Pon la máquina en bordado libre e intenta coser sobre la línea manteniendo todas las puntadas del mismo largo (aproximadamente 2 mm).",
    "quickSummary": "Costura artística manual sobre máquina sin arrastre mecánico, donde la artesana guía la tela en 360° con sus manos.",
    "summary": "Costura artística manual sobre máquina sin arrastre mecánico, donde la artesana guía la tela en 360° con sus manos.",
    "relatedTerms": [
      "Bordado Libre Artesanal",
      "Prensatelas de Zurcido / Acolchado Libre",
      "Pintura con Hilo (Thread Painting)",
      "Dientes de Arrastre de Máquina"
    ]
  },
  "b-029-bordado-livre-artesanal": {
    "term": "Bordado Libre Artesanal",
    "level": "Iniciante 🟢",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "De las tradiciones de costura de autor y artesanato textil manual, donde la imperfección deliberada y el trazo humano aportan valor exclusivo e irrepetible.",
    "definition": "Técnica de expresión textil manual y mixta que utiliza la máquina de coser o bordar como herramienta de dibujo artístico libre, combinando hilos de diferentes naturalezas (algodón, lino, seda rústica) con retazos de tela, rasgados y texturas orgánicas para crear piezas de autor de alto valor poético y coleccionable.",
    "howItWorks": [
      "1. La artista dibuja bocetos libres sobre la tela con carbonilla textil, tiza o marcadores solubles al agua.",
      "2. Se bajan los dientes mecánicos de la máquina para tener libertad total de trayectoria.",
      "3. Se intercalan pasadas de costura recta gestual, pespuntes entrelazados y garabatos de hilo (Scribble Stitch).",
      "4. Se superponen hilachas, hilos deshilachados o tules transparentes atrapados por las pasadas de aguja.",
      "5. Cada obra terminada es una pieza única irrepetible que no responde a patrones numéricos ni matrices digitales."
    ],
    "beginnerExplanation": "Es el bordado hecho a máquina pero con alma de artista plástico. En vez de buscar que todo quede simétrico y matemático como una computadora, juegas con el movimiento de tus manos: haces líneas desparejas, curvas espontáneas, encimas hilos de colores y mezclas telas viejas para crear cuadros, flores o figuras que parecen dibujadas con acuarela y tinta china.",
    "practicalExamples": [
      "Retratos textiles de autor expuestos en galerías de arte contemporáneo y ferias de diseño.",
      "Prendas de vestir personalizadas 'Upcycling' donde se rescatan chaquetas usadas con bordados libres.",
      "Bolsos ecológicos de lienzo con ilustraciones botánicas y caligrafías bordadas a pulso."
    ],
    "matrixParametersRelation": [
      "Técnica 100% analógica: prescinde de matrices digitales y de controles computarizados de pantógrafo.",
      "Selección de hilados mixtos: libertad para usar hilos de coser comunes, hilos de hilván o hilados artesanales.",
      "Presión de prensatelas manual: regulada para permitir que la tela fluya sin resistencia sobre la cama de la máquina."
    ],
    "commonErrors": [
      "Intentar que las líneas queden matemáticamente rectas y parejas, perdiendo la frescura y expresividad artesanal.",
      "Tensionar la tela en bastidores pesados que cansan las manos en sesiones largas de trabajo.",
      "Usar telas sintéticas rígidas que no acompañan el movimiento gestual del bastidor."
    ],
    "troubleshootingTips": [
      "Utiliza telas nobles de fibras naturales: lino lavado, lienzo de algodón, batista o gabardina rústica.",
      "Combina el hilo de la aguja con un hilo de diferente color en la bobina para que al doblar rápido aparezcan destellos del color inferior.",
      "Coloca música instrumental en tu taller: ayuda a encontrar un ritmo constante de pedaleo y movimiento corporal."
    ],
    "whenToAdjust": "Afloja la tensión superior si quieres que el hilo inferior forme pequeños nudos o bucles decorativos en la cara superior.",
    "dicaArtrelados": "El valor del bordado de autor Artrelados: En un mundo lleno de ropa fabricada por millones de computadoras, el bordado libre artesanal tiene un valor incalculable porque lleva la huella digital de tus manos. Nunca tapes un error: si una puntada salió torcida o se hizo un bucle, intégralo al dibujo como una flor, una sombra o una firma. La belleza está en lo imperfecto y humano.",
    "voceSabia": "¿Sabías que los grandes diseñadores de moda de Milán y Nueva York contratan artistas de bordado libre para intervenir camperas de pasarela exclusivas que se venden por miles de dólares como piezas de arte?",
    "practicalExercise": "Coloca una foto vieja o una flor en tu mesa. Con la máquina en bordado libre, intenta 'dibujar' su silueta con hilo negro sobre lienzo blanco sin levantar el pie del pedal durante tres minutos continuos. Descubre tu propio estilo de trazo.",
    "quickSummary": "Expresión artística gestual y de autor sobre máquina de coser sin matrices digitales, donde cada obra es única e irrepetible.",
    "summary": "Expresión artística gestual y de autor sobre máquina de coser sin matrices digitales, donde cada obra es única e irrepetible.",
    "relatedTerms": [
      "Bordado Libre (Free-Motion)",
      "Pintura con Hilo (Thread Painting)",
      "Upcycling Textil y Moda Sostenible",
      "Bastidor de Madera para Bordar"
    ]
  },
  "b-030-bordado-monocromatico": {
    "term": "Bordado Monocromático",
    "level": "Iniciante 🟢",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del griego monos (uno solo) y chroma (color). Estilo atemporal derivado del tradicional 'White-work' (bordado blanco sobre blanco) de los conventos europeos del siglo XVI.",
    "definition": "Enfoque estético y técnico de bordado computarizado ejecutado con un único color de hilo o con variaciones tonales mínimas del mismo matiz sobre una tela del mismo tono exacto (tono sobre tono / Tone-on-Tone), donde el volumen, el contraste y la legibilidad visual se logran exclusivamente mediante la interacción de la luz con diferentes direcciones de puntada, texturas y relieves.",
    "howItWorks": [
      "1. Se selecciona un hilo de bordar del mismo tono cromático de la tela base (por ejemplo, hilo blanco sobre lino blanco o hilo negro sobre tela negra).",
      "2. El diseño se digitaliza variando metódicamente los ángulos de puntada en cada bloque contiguo (de 0° a 90° y 45°).",
      "3. Se combinan diferentes densidades y patrones de puntada: zonas de tatami liso, columnas de satín abultado y pespuntes calados.",
      "4. La máquina ejecuta todo el diseño con un solo cono de hilo sin paradas ni cambios de color.",
      "5. Al mover la prenda, la luz rasante se refleja de forma diferente en cada bloque de hilo, revelando el diseño con una elegancia tridimensional sutil."
    ],
    "beginnerExplanation": "Es cuando bordas con un hilo del mismo color exacto de la tela: hilo blanco sobre remera blanca, o hilo negro sobre campera negra. Parece que no se fuera a ver, pero como el hilo de bordar es brillante y la tela es mate, y además las puntadas van para distintos lados, la luz hace que el dibujo se vea con un relieve elegante, sobrio y súper sofisticado que nunca pasa de moda.",
    "practicalExamples": [
      "Sábanas y mantelería fina de lujo para hoteles boutique con monogramas bordados blanco sobre blanco.",
      "Camperas corporativas y chalecos de marcas prémium con logos negros bordados sobre tela negra mate.",
      "Ajuar de bautismo y vestidos ceremoniales con flores y festones en tono sobre tono crudo o marfil."
    ],
    "matrixParametersRelation": [
      "Variación obligatoria de ángulos (Stitch Angle Contrast): indispensable cambiar los ángulos en al menos 45° entre secciones contiguas para que se distingan entre sí.",
      "Uso de realces en satín alto: emplear bases de underlay voluminosas bajo el satín para proyectar sombras naturales sobre la tela plana.",
      "Cero tiempos muertos: no requiere comandos de cambio de hilo ni paradas de aguja, maximizando la velocidad neta de bordado."
    ],
    "commonErrors": [
      "Digitalizar todas las partes del diseño en el mismo ángulo de puntada, haciendo que el bordado se camufle y resulte invisible.",
      "Usar hilo mate de algodón sobre tela opaca del mismo color, perdiendo el reflejo reflectivo necesario para la legibilidad.",
      "Aplicar densidades excesivas que endurecen la prenda sin aportar contraste visual."
    ],
    "troubleshootingTips": [
      "Utiliza hilo brillante de rayón o poliéster trilobal brillante: su brillo satinado contrastará hermosamente contra la textura mate de la tela.",
      "Digitaliza un contorno en puntada satín de 2 mm alrededor de las figuras de tatami para enmarcar el reflejo de la luz.",
      "Inspecciona el diseño terminado bajo una luz lateral rasante: es la prueba de fuego de un bordado monocromático exitoso."
    ],
    "whenToAdjust": "Modifica los ángulos de puntada en el software si en la prueba física dos secciones vecinas parecen fundirse en una sola masa sin forma.",
    "dicaArtrelados": "El secreto de elegancia Artrelados: El bordado monocromático negro sobre negro o azul marino sobre azul marino es el favorito de las grandes marcas de lujo porque transmite sofisticación absoluta sin estridencias. Para que resalte al máximo, borda las letras principales con técnica de 3D Puff usando goma EVA del mismo color: el relieve tridimensional creará sombras naturales imponentes.",
    "voceSabia": "¿Sabías que en la realeza europea los ajuares de bodas reales se bordaban exclusivamente en técnica monocromática 'White-work' blanco sobre blanco porque el uso de hilos de colores en la ropa de cama era considerado de mal gusto y reservado solo a las clases populares?",
    "practicalExercise": "Toma un retazo de tela blanca o cruda. Borda tu inicial con hilo blanco brillante combinando una base tatami a 45° y un contorno satín a 90°. Obsérvala a la luz del sol y disfruta de la magia del relieve monocromático.",
    "quickSummary": "Diseño refinado ejecutado con un único color de hilo sobre tela idéntica, donde el contraste nace del reflejo de la luz en las puntadas.",
    "summary": "Diseño refinado ejecutado con un único color de hilo sobre tela idéntica, donde el contraste nace del reflejo de la luz en las puntadas.",
    "relatedTerms": [
      "Bordado Multicolor",
      "Brillo del Hilo (Thread Sheen)",
      "Ángulo de Puntada (Stitch Angle)",
      "Bordado en 3D (Alto Relieve con Goma EVA)"
    ]
  },
  "b-031-bordado-multicolorido": {
    "term": "Bordado Multicolor",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín multus (mucho) y color (colorido). Evolución cromática que floreció con el desarrollo de cabezales de agujas múltiples automáticos.",
    "definition": "Modalidad de bordado computarizado que incorpora una rica paleta de tonalidades cromáticas (de 3 hasta 15 o más colores de hilo) secuenciadas de forma ordenada y lógica en la matriz, coordinando cambios automáticos de aguja, cortes de salto y transiciones visuales para reproducir logotipos corporativos complejos, ilustraciones artísticas o escudos heráldicos polícromos.",
    "howItWorks": [
      "1. El diseño gráfico original se separa por canales o familias de color en el software de ponchado.",
      "2. El digitalizador agrupa las figuras por color para evitar cambios de aguja innecesarios (por ejemplo, bordar todos los elementos rojos juntos antes de pasar al azul).",
      "3. Se inserta un comando mecánico de cambio de color (Color Change / Stop) al final de cada grupo cromático.",
      "4. En la máquina, el operador asigna cada número de cambio a una aguja física que tiene enhebrado el cono correspondiente.",
      "5. El cabezal traslada automáticamente el bloque de barras de aguja al recibir el código y retoma la costura con el nuevo color en fracciones de segundo."
    ],
    "beginnerExplanation": "Es el bordado lleno de colores vivos y alegres como los escudos de fútbol, dibujos de dibujitos animados o flores con muchos tonos. La máquina tiene varios conos de hilo puestos arriba: borda primero todo lo que va de rojo, corta el hilo, mueve las agujas hacia el costado sola, y empieza a bordar todo lo que va de amarillo, y así con cada color hasta completar el dibujo perfecto.",
    "practicalExamples": [
      "Escudos oficiales de clubes deportivos con bordes dorados, fondos bicolores y estrellas brillantes.",
      "Personajes animados e ilustraciones infantiles con tonos vivos y degradados en ropa de bebé.",
      "Logotipos corporativos complejos con múltiples submarcas y eslóganes cromáticos en uniformes."
    ],
    "matrixParametersRelation": [
      "Agrupación cromática por capas (Color Sorting): fundamental no saltar de un color a otro y volver al primero; cada retorno de color multiplica el tiempo de máquina.",
      "Orden de superposición (Layering Order): los colores de fondo deben bordarse antes que los colores de primer plano para que los contornos cierren prolijos.",
      "Comandos de corte entre colores: programar siempre corte de hilo (Trim) y remate de seguridad (Tie-off) antes de cada cambio de aguja."
    ],
    "commonErrors": [
      "Digitalizar sin ordenar colores, provocando 25 cambios de aguja en un diseño que podría bordarse con solo 6 cambios.",
      "Asignar mal los números de aguja en la pantalla de la máquina, bordando por ejemplo la cara de un personaje con hilo verde en vez de piel.",
      "No verificar que la aguja asignada tenga hilo en el cono, provocando paradas por sensor de rotura apenas arranca el color."
    ],
    "troubleshootingTips": [
      "Imprime siempre la hoja de producción (Color Film / Production Sheet) de tu software: muestra la secuencia exacta de colores con su código de cono.",
      "Usa la función 'Clasificación de Color' (Color Sort) del software para que el programa combine automáticamente los colores idénticos.",
      "Revisa la tensión de cada aguja individualmente en máquinas multicabezal; cada color puede tener sutiles variaciones de fricción según el tinte."
    ],
    "whenToAdjust": "Reorganiza la secuencia de colores en la matriz si observas que la máquina cambia a un color para dar apenas cuatro puntadas y luego lo descarta.",
    "dicaArtrelados": "El tip de organización de conos Artrelados: Si tienes una máquina de varias agujas, deja siempre las primeras dos agujas con los colores que más se usan en tu taller (por ejemplo, aguja 1 blanco y aguja 2 negro). Así no tendrás que desenhebrar y cambiar conos básicos cada vez que entre un trabajo nuevo, ahorrando valiosos minutos en cada jornada.",
    "voceSabia": "¿Sabías que los tintes oscuros de hilo (como el negro o el azul marino) contienen mayor concentración de pigmentos químicos que los hilos blancos, lo que hace que a veces sean microscópicamente más rígidos y requieran una mínima gota de lubricante para bordar a alta velocidad?",
    "practicalExercise": "Abre un diseño multicolor en tu software que tenga 12 cambios de aguja. Usa la herramienta de optimización de secuencia para reducirlo a 6 cambios agrupando tonos. Compara el tiempo estimado de bordado antes y después.",
    "quickSummary": "Bordado con múltiples colores de hilo coordinados por secuencia digital y cambios automáticos de barra de aguja.",
    "summary": "Bordado con múltiples colores de hilo coordinados por secuencia digital y cambios automáticos de barra de aguja.",
    "relatedTerms": [
      "Bordado Monocromático",
      "Cambio Automático de Color (Color Change)",
      "Hoja de Producción y Secuencia de Conos",
      "Bordado en Capas / Superposición de Puntadas"
    ]
  },
  "b-012-bordado-personalizado": {
    "term": "Bordado Personalizado",
    "level": "Iniciante 🟢",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del concepto moderno de personalización a demanda (Custom on-demand) impulsado por el comercio minorista, regalos exclusivos y el comercio electrónico.",
    "definition": "Modalidad de producción textil a pequeña y mediana escala enfocada en la confección de piezas individuales o lotes reducidos adaptados a las especificaciones exactas del cliente final (nombres, fechas conmemorativas, monogramas familiares, frases emotivas o insignias individuales), que requiere agilidad en la digitalización rápida, versatilidad en bastidores y trato directo con el cliente.",
    "howItWorks": [
      "1. El cliente define el texto, tipografía, paleta de colores y prenda a intervenir (toallas, batas, remeras, mochilas).",
      "2. El operador utiliza fuentes pre-digitalizadas de alta calidad en el software o teclado de la máquina para componer el diseño en minutos.",
      "3. Se selecciona el bastidor exacto con la menor holgura posible para estabilizar la prenda sin marcar la tela.",
      "4. Se realiza una prueba de ubicación visual con plantilla de papel o puntero láser sobre la prenda real.",
      "5. La máquina ejecuta el bordado en pocos minutos y se entrega un producto con un valor emocional y económico muy superior al de una prenda estándar."
    ],
    "beginnerExplanation": "Es el servicio más buscado y rentable de un ateliê de bordados: cuando alguien te pide bordar el nombre de su bebé en una toallita, las iniciales de los novios en unas batas de casamiento o el nombre de un veterinario en su ambo de trabajo. No necesitas hacer miles de prendas; haces una sola, pero queda tan linda y especial que el cliente se emociona y paga con gusto.",
    "practicalExamples": [
      "Kits de nacimiento con el nombre del bebé bordado en mantitas, baberos y portachupetes.",
      "Batas de baño y toallones de lujo con monogramas para regalos de bodas y aniversarios.",
      "Uniformes de profesionales independientes (médicos, chefs, esteticistas) con su nombre y especialidad en el pecho."
    ],
    "matrixParametersRelation": [
      "Uso de fuentes nativas (Keyboard Lettering): fuentes vectoriales con densidades y compensaciones pre-ajustadas que no se deforman al cambiar el tamaño.",
      "Líneas de base curvadas y arcos: adaptar los textos a la forma del bolsillo o cuello de la prenda.",
      "Densidad adecuada para tipografías pequeñas: reducir densidad y usar puntada satín limpia para que las letras chicas no se empasten."
    ],
    "commonErrors": [
      "Bordar nombres con faltas de ortografía por no pedir confirmación escrita al cliente antes de arrancar.",
      "Bordar textos de menos de 5 mm de altura con hilo estándar 40wt grueso, haciendo que las letras salgan como manchas ilegibles.",
      "Ubicar el bordado torcido o descentrado por no marcar la prenda con regla y piquetes de referencia."
    ],
    "troubleshootingTips": [
      "Envía siempre una simulación digital por WhatsApp o correo al cliente para que dé su visto bueno escrito a los nombres y fechas.",
      "Utiliza hilo fino calibre 60wt e introduce una aguja 65/9 si tienes que bordar letras muy pequeñas de menos de 6 mm.",
      "Marca el centro exacto de la prenda doblando la tela por el medio y planchando una suave línea de quiebre o usando tiza de sastre al agua."
    ],
    "whenToAdjust": "Modifica el espaciado entre letras (Kerning) en el software si ves que dos caracteres quedan pegados y confunden la lectura.",
    "dicaArtrelados": "La regla de oro de atención Artrelados: El cliente de bordado personalizado no compra hilo sobre tela; compra una emoción o la imagen de su propia marca. Entrega siempre la prenda impecablemente planchada, sin un solo hilito suelto, envuelta en papel de seda con una tarjeta perfumada. Ese detalle convierte a un cliente ocasional en un embajador fiel de tu ateliê de por vida.",
    "voceSabia": "¿Sabías que los servicios de personalización textil con nombres y monogramas tienen un margen de ganancia neta de hasta un 300% superior al de la confección de prendas lisas en el mercado minorista?",
    "practicalExercise": "Elige tres toallitas de mano económicas. Borda en cada una un nombre con tres estilos tipográficos distintos (cursiva clásica, letra de imprenta moderna y monograma con arabesco). Úsalas como muestrario físico para que tus clientes puedan tocarlas y elegir.",
    "quickSummary": "Producción a demanda de piezas individuales con nombres, monogramas o fechas personalizadas con alto valor emocional.",
    "summary": "Producción a demanda de piezas individuales con nombres, monogramas o fechas personalizadas con alto valor emocional.",
    "relatedTerms": [
      "Bordado Personalizado en Ateliê",
      "Tipografías Pre-Digitalizadas (Keyboard Lettering)",
      "Plantilla de Posicionamiento de Bastidor",
      "Hilo de Bordar Calibre 60wt"
    ]
  }
};

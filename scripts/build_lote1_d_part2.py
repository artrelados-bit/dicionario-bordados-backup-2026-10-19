import json

PART2_DATA = {
  "d-042-deformacao-do-bordado": {
    "term": "Deformación del Bordado y Distorsión Textil",
    "level": "Intermedio 🟡",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del fenómeno físico de distorsión elástica multiaxial (Fabric Distortion & Puckering) bajo tensión dinámica de costura.",
    "definition": "Alteración geométrica indeseada que sufre el diseño o la tela durante el proceso de bordado (como fruncimiento, efecto cuenco, ondulaciones o pérdida de simetría circular), provocada por el desequilibrio entre la fuerza de tracción del hilo, la falta de estabilidad de la entretela o una colocación inadecuada en el bastidor.",
    "howItWorks": [
      "1. Cada puntada tensada ejerce una micro-fuerza de tracción que tira de las fibras de la tela hacia el centro del objeto.",
      "2. Al acumularse miles de puntadas en la misma dirección, la tensión combinada supera la resistencia elástica del tejido.",
      "3. Si la entretela utilizada es insuficiente o si la tela fue estirada al enmarcar, el tejido se contrae formando ondas y arrugas.",
      "4. Un círculo perfecto se deforma en óvalo y las líneas rectas se curvan hacia adentro.",
      "5. El defecto se estabiliza de forma permanente impidiendo que la prenda quede lisa incluso tras el planchado.",
    ],
    "beginnerExplanation": "Es cuando el bordado te queda 'arrugado como una pasa de uva' o cuando un círculo te sale achatado como un huevo. Pasa porque el hilo de bordar tira de la tela con mucha fuerza y, si la tela es blandita o no le pusiste la entretela correcta, la máquina la arruga y la deforma toda. Entender cómo evitar la deformación te asegura que todas tus prendas queden lisas y planas como un cuadro.",
    "practicalExamples": [
      "Fruncimiento en remeras de jersey fino por usar entretela de rasgar liviana en vez de entretela de cortar.",
      "Ondulación de los bordes de un escudo circular bordado en tela de piqué elástica.",
      "Efecto de 'taza o cuenco' en parches muy densos que se curvan hacia arriba al desbastarlos."
    ],
    "matrixParametersRelation": [
      "Compensación Push-Pull adecuada: ensanchar en el software la dirección del encogimiento y reducir en el sentido del empuje.",
      "Selección de entretela: entretelas de cortar (Cut-away) de al menos 70 a 80 g/m² reducen la deformación en un 90%.",
      "Reducción de densidad: densidades más abiertas (0,42 mm a 0,45 mm) reducen drásticamente la tracción total acumulada."
    ],
    "commonErrors": [
      "Tirar de la tela con las manos para 'estirarla como un tambor' al cerrar el bastidor, deformándola al liberarla.",
      "Usar una sola capa de entretela de rasgar barata en tejidos elásticos de algodón.",
      "Bordar todas las puntadas del diseño en la misma dirección angular sin variar los ángulos."
    ],
    "troubleshootingTips": [
      "Coloca la tela en el bastidor plana y relajada, sin estirar sus fibras con los dedos.",
      "Usa siempre entretela de cortar (Cut-away) para cualquier tela que tenga elasticidad.",
      "Añade una base de soporte en cuadrícula doble en el software para crear un plano rígido que frene la deformación."
    ],
    "whenToAdjust": "Modifica la entretela o reduce la densidad de la matriz si notas arrugas alrededor de las figuras bordadas.",
    "dicaArtrelados": "El tip de la tela relajada Artrelados para el bastidor: Nunca estires la remera con las manos cuando estés ajustando el tornillo del aro. La tela debe quedar plana y sin arrugas, pero sin tensión elástica forzada. Si la estiras en el aro, cuando la saques de la máquina la tela volverá a su tamaño original como una gomita y ¡tu bordado quedará arrugado para siempre!",
    "voceSabia": "¿Sabías que los laboratorios textiles de la NASA midieron que un bordado de 10.000 puntadas acumula una fuerza de compresión combinada de más de 15 kilogramos de tracción continua sobre el tejido?",
    "practicalExercise": "Borda un círculo de 4 cm en un retazo de remera elástica con entretela de rasgar estirando la tela en el aro; luego borda otro idéntico con entretela de cortar apoyando la tela sin estirar: compara el aro arrugado con el círculo perfecto.",
    "quickSummary": "Alteración y fruncimiento no deseado de la tela por exceso de tensión del hilo o estabilización inadecuada.",
    "summary": "Alteración y fruncimiento no deseado de la tela por exceso de tensión del hilo o estabilización inadecuada.",
    "relatedTerms": [
      "Compensación de Empuje y Tirantez",
      "Entretela de Cortar (Cut-away)",
      "Densidad de Puntada y Espaciado Milimétrico",
      "Defectos de Bordado y Diagnóstico de Fallas"
    ]
  },

  "d-090-deformacao-viscoelastica-couros-sinteticos-perfuracao": {
    "term": "Deformación Viscoelástica en Cueros y Sintéticos",
    "level": "Avanzado 🔴",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal femenina",
    "origin": "De la física de polímeros y biomecánica de materiales dérmicos (Viscoelastic Leather Needle Creep & Perforation Recovery).",
    "definition": "Comportamiento reológico y mecánico específico de los cueros naturales y materiales sintéticos laminados (poliuretano, PVC, sintético Montana y ecocuero), que combinan elasticidad retardada y memoria plástica, provocando que los orificios dejados por la aguja no se cierren como en las telas tejidas, sino que tiendan a desgarrarse o troquelar el material si la densidad de puntadas o la distancia entre penetraciones es excesiva.",
    "howItWorks": [
      "1. A diferencia de las telas tejidas donde la aguja desliza entre hilos de urdimbre y trama, en el cuero la aguja perfora o corta físicamente la matriz colágena o de polímero.",
      "2. El orificio perforado por la aguja es permanente e irreversible.",
      "3. La viscosidad del material ejerce una fricción de fricción térmica sobre la aguja durante la penetración y extracción.",
      "4. Si dos penetraciones caen a menos de 1,0 mm de distancia, la tensión de tracción rasga el puente intermedio troquelando el cuero como si fuera una estampilla postal.",
      "5. El digitalizador debe reducir deliberadamente la densidad a 0,50 mm o 0,60 mm y utilizar agujas con sección especial de corte elíptico o de diamante.",
    ],
    "beginnerExplanation": "Es lo que pasa cuando bordas en cuero o cuerina sintética. En una remera común, la aguja pasa separando los hilitos sin romperlos; pero en el cuero, cada vez que la aguja clava, ¡hace un agujero que no se cierra nunca más! Si pones muchas puntadas muy juntitas, la máquina corta el cuero como si fuera el troquelado de un boleto y el pedazo de cuero se cae. Por eso en cuero se bordan puntadas más separadas y con menos densidad.",
    "practicalExamples": [
      "Bordado de logotipos en tapicería de asientos de cuero de automóviles de lujo.",
      "Fabricación de llaveros y billeteras en sintético Montana de 1,4 mm dentro del bastidor.",
      "Personalización de camperas de motoquero en cuero vacuno grueso sin debilitar la piel."
    ],
    "matrixParametersRelation": [
      "Densidad aligerada en un 30%: espaciado de satín y tatami abierto a 0,55 mm a 0,70 mm para proteger la integridad estructural.",
      "Longitud de puntada alargada: longitud mínima de 3,0 mm a 4,0 mm para mantener puentes sólidos entre orificios.",
      "Selección de aguja adecuada: uso de aguja de punta de bola pequeña (SES) en sintéticos con base textil o aguja de corte lanceolado (LR) en cuero natural rígido."
    ],
    "commonErrors": [
      "Usar una matriz estándar para remeras sobre ecocuero, troquelando y desprendiendo letras enteras durante el bordado.",
      "Apretar el cuero directamente entre los dos aros plásticos del bastidor, dejando marcas de presión aplastada (Hoop Burn) imborrables.",
      "Bordar bases de soporte pesadas innecesarias que llenan el cuero de micro-perforaciones debilitantes."
    ],
    "troubleshootingTips": [
      "Utiliza técnica flotante: monta solo la entretela en el bastidor y adhiere el cuero con cinta de enmascarar o spray 505.",
      "Reduce la densidad de toda la matriz entre un 25% y un 35% en tu software antes de bordar sobre cuero.",
      "Aplica una gota de silicona líquida en el hilo o una aguja con recubrimiento de teflón para evitar el sobrecalentamiento por fricción."
    ],
    "whenToAdjust": "Aligera la densidad de puntadas y elimina soportes densos cada vez que vayas a bordar sobre cueros legítimos o sintéticos.",
    "dicaArtrelados": "El tip de la densidad abierta Artrelados para cuero: Cuando vayas a bordar una billetera o llavero de cuerina o cuero Montana, entra a las propiedades de tu dibujo en la computadora y ponle densidad 0,55 mm (en vez del clásico 0,40 mm). A la vista el bordado se verá súper tupido y brillante, pero el cuero no se romperá ni se agujereará jamás y te durará toda la vida.",
    "voceSabia": "¿Sabías que los artesanos de marroquinería de marcas como Louis Vuitton o Hermès calculan matemáticamente los milímetros exactos de distancia entre cada puntada para asegurar que el cuero conserve más del 95% de su resistencia mecánica al desgarro?",
    "practicalExercise": "Toma un retazo de cuerina vieja. Borda una letra con densidad normal de 0,38 mm y mira cómo los bordes se desgarran con un tirón; luego borda la misma letra con densidad 0,55 mm y comprueba la solidez indestructible con la que queda fija al material.",
    "quickSummary": "Comportamiento del cuero ante la aguja que exige densidades abiertas para evitar el troquelado y desgarro del material.",
    "summary": "Comportamiento del cuero ante la aguja que exige densidades abiertas para evitar el troquelado y desgarro del material.",
    "relatedTerms": [
      "Llaveros y Monederos en el Bastidor con Sintético Montana",
      "Densidad de Puntada y Espaciado Milimétrico",
      "Deflexión Dinámica y Flexión Elástica de la Aguja",
      "Bordado In The Hoop (ITH)"
    ]
  },

  "d-050-degrade-de-pontos": {
    "term": "Degradado de Puntadas y Fusión de Color",
    "level": "Avanzado 🔴",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "De la técnica artística de tramado pictórico Stitch Gradient & Color Blending desarrollada para emular sombras y transiciones cromáticas continuas.",
    "definition": "Técnica avanzada de digitalización computarizada donde se superponen dos o más capas de puntadas tatami o satín con densidades progresivamente decrecientes y entrelazadas entre sí, alternando los ángulos y penetraciones de aguja para lograr una transición visual suave, gradual y sin saltos abruptos entre dos conos de hilo de diferente color.",
    "howItWorks": [
      "1. El primer color se digitaliza con una densidad variable graduada (por ejemplo: densa de 0,40 mm al inicio y abriéndose hasta 1,8 mm al final).",
      "2. El segundo color se digitaliza en sentido inverso, comenzando abierto a 1,8 mm y cerrándose hasta 0,40 mm.",
      "3. Las puntadas del segundo color penetran en los espacios vacíos dejados entre los filamentos del primer color.",
      "4. El ojo humano a cierta distancia integra ópticamente ambos tonos de hilo como una mezcla de color continua.",
      "5. Permite simular efectos de volumen 3D, atardeceres, fuego, agua en movimiento o sombras fotorealistas en el bordado.",
    ],
    "beginnerExplanation": "Es la técnica mágica para pasar de un color a otro suavemente sin que se note una raya dura en el medio, igual que cuando en un dibujo pasas del amarillo al naranja y luego al rojo como en una puesta de sol. La máquina borda el primer color y va separando las puntaditas de a poco; luego borda el segundo color metiendo sus puntadas en el medio de las anteriores. De lejos se ve un degradado suave y perfecto que parece pintado con acuarela.",
    "practicalExamples": [
      "Transición cromática de amarillo a rojo fuego en las llamas de un logotipo de competición.",
      "Degradados de azul marino a celeste cielo en logotipos de empresas náuticas y aerolíneas.",
      "Sombreado tridimensional y volumen hiperrealista en los pétalos de flores y pelaje de animales."
    ],
    "matrixParametersRelation": [
      "Perfil de densidad variable (Gradient Profile): lineal, exponencial o gaussiano según la suavidad del fundido deseado.",
      "Desfase angular leve: orientar ambas capas con una diferencia angular de 5° a 10° para facilitar la penetración sin apelmazamiento.",
      "Longitud de puntada uniforme: mantener longitudes de 3,5 mm a 4,5 mm para evitar quiebres de textura.",
    ],
    "commonErrors": [
      "Superponer dos capas al 100% de densidad sin abrir el espaciado, creando una placa dura e impenetrable que rompe agujas.",
      "Hacer la zona de transición demasiado estrecha (menos de 5 mm), viéndose como dos bloques duros cortados a cuchillo.",
      "Usar colores con contraste lumínico extremo (blanco puro sobre negro) sin tonos intermedios de transición."
    ],
    "troubleshootingTips": [
      "Utiliza la herramienta 'Color Blending' (Mezcla de color) o 'Acordeón de densidad' de tu software para calcular el degradado automático.",
      "Para transiciones extremas, utiliza un tercer color intermedio para suavizar la rampa cromática.",
      "Borda muestras de prueba en retazos: los degradados siempre se ven mucho más suaves en la tela real que en la pantalla de la computadora."
    ],
    "whenToAdjust": "Aplica degradados de puntada cada vez que digitalices paisajes, rostros, llamas o efectos de brillo metalizado realista.",
    "dicaArtrelados": "El tip del ángulo de 7 grados Artrelados para degradados: Cuando mezcles dos colores de hilo para hacer un degradado, no los bordes en el mismo ángulo exacto: pon el primer color a 45 grados y el segundo a 52 grados (apenas 7 grados de diferencia). Al tener esa inclinación sutil, las agujas del segundo color nunca chocarán contra las puntadas de abajo y los hilos se mezclarán con una suavidad tan perfecta que parecerá magia.",
    "voceSabia": "¿Sabías que esta técnica de mezcla óptica de puntadas está inspirada en la corriente artística del 'Puntillismo' de Georges Seurat en 1886 en París, donde diminutos puntos puros de pintura puestos uno al lado del otro eran mezclados directamente por la retina humana?",
    "practicalExercise": "Crea dos rectángulos solapados de 40x20 mm en tu software: uno amarillo y uno rojo. Aplica la herramienta de densidad degradada en la zona de solape: borda la muestra y admira cómo en el centro nace un naranja vibrante creado por la mezcla óptica de ambos hilos.",
    "quickSummary": "Superposición de capas de puntadas con densidad decreciente para lograr transiciones suaves y sombras continuas.",
    "summary": "Superposición de capas de puntadas con densidad decreciente para lograr transiciones suaves y sombras continuas.",
    "relatedTerms": [
      "Colores y Selección Cromática de Hilos",
      "Puntada Tatami (Tatami Stitch)",
      "Densidad de Puntada y Espaciado Milimétrico",
      "Software de Ponchado y Digitalización"
    ]
  },

  "d-089-delineamento-ponto-trancado-efeito-cordao-sao-francisco": {
    "term": "Delineado con Puntada de Tallo Trenzado",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del bordado tradicional a mano Stem Stitch y del bordado de cordoncillo trenzado religioso franciscano (Braided Stem Stitch Run).",
    "definition": "Variante lineal decorativa programada en la matriz que simula una cuerda textil o cordón retorcido mediante un algoritmo de puntadas que avanzan en ángulo oblicuo superponiéndose parcialmente a un lado y al otro del eje central, generando un contorno con textura en espiral tridimensional y acabado rústico artesanal sin necesidad de prensatelas especiales.",
    "howItWorks": [
      "1. El software digitaliza un recorrido de pespunte compuesto por pequeñas puntadas diagonales orientadas a 30° o 45° del eje.",
      "2. Cada puntada avanza retrocediendo ligeramente por el flanco opuesto de la puntada anterior.",
      "3. La acumulación de pasadas inclinadas genera una ondulación helicoidal continua sobre la superficie de la tela.",
      "4. El relieve resultante se asemeja al aspecto de una soga marinera en miniatura o un cordoncillo de San Francisco.",
      "5. Proporciona una textura cálida, artesanal y orgánica ideal para motivos botánicos, tallos y letras vintage.",
    ],
    "beginnerExplanation": "Es una puntada decorativa que imita una pequeña soguita retorcida o cordón artesanal. En vez de ser una línea recta común o un satín liso, la máquina va cruzando las puntadas como si estuviera tejiendo una trencita de hilo. Se usa muchísimo para bordar los tallos de las flores, marcos de estilo rústico y dibujos de estilo campesino europeo porque parece hecho a mano con gran delicadeza.",
    "practicalExamples": [
      "Tallos y ramas de flores en bordados botánicos ornamentales en manteles y cortinas.",
      "Contornos de letras con textura rústica en prendas de lino y algodón crudo.",
      "Marcos decorativos de inspiración medieval en tapices y escudos tradicionales."
    ],
    "matrixParametersRelation": [
      "Espaciado de torsión (Spacing Pitch): calibrado habitualmente entre 1,5 mm y 2,5 mm según el grosor del cordón deseado.",
      "Ancho de relieve: genera un grosor visual de 1,2 mm a 2,0 mm con hilo estándar 40wt.",
      "Flexibilidad en curvas: excelente adaptación a curvas cerradas sin perder la textura retorcida."
    ],
    "commonErrors": [
      "Digitalizar con espaciado excesivamente tupido, convirtiendo el efecto cordón en un bulto apelmazado sin definición.",
      "Usarlo en trazos diminutos de menos de 5 mm donde la torsión no alcanza a desarrollarse estéticamente.",
      "Bordar con hilo débil que se deshilacha por la fricción de las penetraciones cruzadas."
    ],
    "troubleshootingTips": [
      "Configura un espaciado de 2,0 mm en tu software para que las hélices del cordón se vean nítidas y elegantes.",
      "Usa hilos con brillo suave (como rayón viscosa o poliéster mate) para resaltar la textura tridimensional del retorcido.",
      "Es la alternativa perfecta cuando una columna de satín se ve demasiado moderna o pesada para un diseño campestre."
    ],
    "whenToAdjust": "Elige la puntada de tallo trenzado cuando desees lograr un estilo artesanal, vintage o botánico en tus contornos.",
    "dicaArtrelados": "El toque botánico Artrelados para tallos: Si estás bordando rosas o flores silvestres, nunca hagas los tallos verdes con satín común: ponles puntada de tallo trenzado (Stem Stitch). Los tallos parecerán ramas de verdad con textura de corteza vegetal y tu bordado ganará un valor artesanal que cautivará a los amantes de la alta costura botánica.",
    "voceSabia": "¿Sabías que la puntada de tallo es uno de los puntos de bordado más antiguos de la humanidad, habiendo sido encontrada en los famosos tapices funerarios del faraón Tutankamón en Egipto con más de 3.300 años de antigüedad?",
    "practicalExercise": "Dibuja una línea ondulada en tu software. Aplícale primero puntada recta común y luego cámbiala a puntada de tallo trenzado (Stem Stitch): observa en la simulación 3D cómo se transforma instantáneamente en una hermosa soguita textil con relieve.",
    "quickSummary": "Puntada lineal decorativa con puntadas oblicuas que emulan la textura tridimensional de un cordón o cuerda retorcida.",
    "summary": "Puntada lineal decorativa con puntadas oblicuas que emulan la textura tridimensional de un cordón o cuerda retorcida.",
    "relatedTerms": [
      "Punto Grano de Frijol y Pespunte Triple de Realce",
      "Contorno de Bordado y Delineado Perimetral",
      "Columna de Puntada Satín",
      "Software de Ponchado y Digitalización"
    ]
  },

  "d-086-densidade-adaptativa-area-smart-density-scaling": {
    "term": "Densidad Adaptativa Inteligente por Área",
    "level": "Avanzado 🔴",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del algoritmo paramétrico de optimización vectorial Smart Density Scaling Algorithm desarrollado por Wilcom y Pulse Microsystems.",
    "definition": "Algoritmo computacional avanzado de digitalización que analiza automáticamente la geometría, el ancho variable y el área volumétrica de los objetos de bordado, modificando dinámicamente el espaciado entre puntadas milímetro a milímetro para evitar el amontonamiento en zonas angostas y asegurar una cobertura total y uniforme en las zonas más amplias.",
    "howItWorks": [
      "1. En una columna de satín tradicional con ancho variable (por ejemplo, una letra que va de 1 mm a 7 mm), una densidad fija amontona puntadas en la parte fina y las abre en la gruesa.",
      "2. El algoritmo de densidad adaptativa mide el ancho de la columna en cada coordenada cartesiana.",
      "3. En los tramos estrechos (menos de 2 mm), abre automáticamente el espaciado (hasta 0,55 mm) para que la tela no se perfore ni se acumule hilo duro.",
      "4. En los tramos anchos (más de 5 mm), densifica las puntadas proporcionalmente (a 0,38 mm) para garantizar que la tela de fondo no se asome.",
      "5. Mantiene una cobertura visual idéntica y una flexibilidad homogénea en toda la superficie de la prenda.",
    ],
    "beginnerExplanation": "Es como un cerebro inteligente adentro del programa que regula qué tan juntas van las puntadas según el grosor del dibujo. Si una letra se vuelve finita como un hilito, el programa separa las puntadas para que no hagan un nudo duro que rompa la tela; y cuando la letra se hace ancha y gorda, junta las puntadas para que no se vea la remera de fondo. El resultado es que todo el bordado queda parejito, suave y perfecto sin que tengas que calcular nada a mano.",
    "practicalExamples": [
      "Digitalización de tipografías caligráficas con serifas pronunciadas que varían de 1 mm a 8 mm de ancho.",
      "Bordado de hojas botánicas que terminan en puntas finísimas de aguja.",
      "Reducción de consumo de hilo en escudos corporativos de gran escala sin perder calidad visual."
    ],
    "matrixParametersRelation": [
      "Rango de compensación dinámica: regulación automática del espaciado entre 0,36 mm y 0,60 mm según el ancho del objeto.",
      "Protección contra troquelado textil: reduce la concentración de penetraciones por mm² en áreas críticas.",
      "Ahorro de puntadas: disminuye el conteo total de puntadas del diseño entre un 10% y un 15% manteniendo idéntica cobertura visual."
    ],
    "commonErrors": [
      "Desactivar la densidad adaptativa en tipografías cursivas, provocando bultos duros en los remates finos de las letras.",
      "Combinar densidad adaptativa con densidades manuales extremas que anulan el cálculo algorítmico del software.",
      "No verificar en el visor de densidad visual (Heatmap) las zonas con sobrecarga de penetraciones."
    ],
    "troubleshootingTips": [
      "Mantén siempre activada la opción 'Smart Density / Densidad Inteligente' en las propiedades predeterminadas de tu software.",
      "Utiliza la vista de mapa de calor de puntadas (Stitch Density Map) para corroborar que no queden zonas rojas de apelmazamiento.",
      "En letras caligráficas, la densidad adaptativa combinada con puntadas cortas automáticas garantiza bordados de calidad internacional."
    ],
    "whenToAdjust": "Activa la densidad adaptativa cada vez que digitalices objetos vectoriales con anchos variables o tipografías complejas.",
    "dicaArtrelados": "El mapa de calor Artrelados para evitar nudos: Antes de mandar un archivo a la máquina, activa la vista de 'Mapa de densidad' en tu programa. Si ves manchas de color rojo brillante en algunas esquinas, significa que hay demasiadas puntadas apelmazadas que pueden romper tu aguja. Activa la 'Densidad inteligente': las manchas rojas se volverán verdes al instante y tu máquina bordará suave como la seda.",
    "voceSabia": "¿Sabías que los algoritmos de densidad adaptativa fueron desarrollados inicialmente a partir de los métodos de elementos finitos (FEM) que utilizan los ingenieros estructurales para calcular la distribución de tensiones en las alas de los aviones comerciales?",
    "practicalExercise": "Dibuja un triángulo largo que empiece en 8 mm y termine en punta de 1 mm. Desactiva la densidad inteligente y mira cómo en la punta se amontonan cientos de puntadas; luego actívala y observa cómo el software espacia suavemente las puntadas finales manteniendo una punta limpia.",
    "quickSummary": "Algoritmo que modula el espaciado de puntada según el ancho del objeto evitando apelmazamientos en zonas estrechas.",
    "summary": "Algoritmo que modula el espaciado de puntada según el ancho del objeto evitando apelmazamientos en zonas estrechas.",
    "relatedTerms": [
      "Densidad de Puntada y Espaciado Milimétrico",
      "Compensación de Puntadas Cortas en Curvas y Vértices",
      "Columna de Puntada Satín",
      "Software de Ponchado y Digitalización"
    ]
  },

  "d-002-densidade-de-bordado": {
    "term": "Densidad Global del Bordado Computarizado",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del concepto milimétrico fundamental de saturación superficial de hilado en la ingeniería textil computarizada.",
    "definition": "Parámetro macroscópico que define la concentración general de hilo depositado sobre la prenda a lo largo de toda la matriz de bordado, calculado a partir del promedio del espaciado entre pasadas, el número total de capas de soporte y la densidad de los rellenos, cuyo equilibrio determina si el bordado resultará suave y flexible o rígido y acartonado.",
    "howItWorks": [
      "1. Cada objeto de la matriz aporta una cantidad de puntadas en función de su área y su valor de espaciado programado.",
      "2. El software calcula el conteo total de puntadas (Stitch Count) y la densidad promedio por centímetro cuadrado.",
      "3. Si la densidad global es óptima, la prenda conserva su caída natural, suavidad al tacto y flexibilidad ergonómica.",
      "4. Si la densidad es insuficiente, la tela se asoma entre los hilos provocando un aspecto desteñido o transparente.",
      "5. Si la densidad es excesiva, la tela se vuelve dura como un cartón rígido, produciendo incomodidad al vestir y rotura de agujas.",
    ],
    "beginnerExplanation": "Es qué tan 'cargado' o 'liviano' de hilo está el bordado en general. Si un bordado tiene la cantidad justa de hilo, cubre perfecto el color de la remera y queda suavecito y flexible como la tela de la ropa. Si tiene muy poco hilo, se ve ralo y se nota la tela por abajo; pero si tiene demasiado hilo, queda duro como una tabla de madera que molesta al usarlo y dobla las agujas. Encontrar el punto justo es el secreto de un trabajo profesional.",
    "practicalExamples": [
      "Bordado liviano y flexible para remeras de bebés y niños pequeños para no irritar su piel.",
      "Densidad reforzada en escudos de trabajo industrial que deben soportar lavados pesados con detergentes agresivos.",
      "Calibración de densidad media en chombas corporativas de piqué para una caída elegante del pecho."
    ],
    "matrixParametersRelation": [
      "Relación con el gramaje textil: telas livianas requieren densidades globales más bajas para no deformarse.",
      "Consumo de hilo total: influye directamente en el costo de insumos y el tiempo de máquina por prenda.",
      "Flexibilidad ergonómica de la prenda: prendas de vestir exigen acabados flexibles mientras parches admiten mayor densidad."
    ],
    "commonErrors": [
      "Creer que 'más puntadas significan mejor calidad', sobrecargando la matriz y haciendo el bordado duro como una chapa.",
      "Bordar matrices descargadas de internet sin verificar su densidad global para la tela en la que se va a coser.",
      "Usar la misma densidad global para un buzo pesado de abrigo que para una camisa fina de seda."
    ],
    "troubleshootingTips": [
      "Como regla general de ateliê, un escudo de pecho de 8x8 cm debe rondar entre 6.000 y 10.000 puntadas; más de 14.000 suele ser excesivo.",
      "Toca el bordado con la mano al terminar: debe doblarse con suavidad acompañando el movimiento de la tela sin crujir.",
      "Aligera la densidad global en un 15% en prendas de verano o telas de algodón peinado liviano."
    ],
    "whenToAdjust": "Modifica la densidad global cada vez que adaptes un diseño para bordarlo sobre una prenda de diferente grosor o peso.",
    "dicaArtrelados": "La prueba de la servilleta Artrelados para densidad: Toma la remera que acabas de bordar y arrúgala suavemente con la mano en la zona del bordado como si fuera una servilleta. Si el bordado se dobla dócilmente y vuelve a su forma sin oponer resistencia, ¡tu densidad es perfecta! Si sientes que parece un cartón duro que cruje, bájale la densidad en tu programa para el próximo lote.",
    "voceSabia": "¿Sabías que los diseñadores de indumentaria deportiva para deportistas olímpicos reducen la densidad global del bordado al mínimo estricto para ahorrar unos pocos gramos de peso en las camisetas de los corredores de maratón?",
    "practicalExercise": "Compara al tacto un parche militar rígido con el bordado en el pecho de una chomba polo de marca: siente la enorme diferencia de densidad global pensada para diferentes funciones de uso.",
    "quickSummary": "Concentración general de hilo en el diseño que equilibra la cobertura total con la suavidad y flexibilidad de la prenda.",
    "summary": "Concentración general de hilo en el diseño que equilibra la cobertura total con la suavidad y flexibilidad de la prenda.",
    "relatedTerms": [
      "Densidad de Puntada y Espaciado Milimétrico",
      "Calibración Avanzada de Densidad por Tejido",
      "Densidad Excesiva y Empastamiento de Puntadas",
      "Software de Ponchado y Digitalización"
    ]
  },

  "d-038-densidade-de-linha": {
    "term": "Densidad Lineal y Cobertura de Hilos",
    "level": "Intermedio 🟡",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal femenina",
    "origin": "De los títulos textiles estandarizados de densidad lineal (denier, dtex y sistema peso/longitud wt) aplicados al hilado de bordar.",
    "definition": "Medida física y volumétrica que relaciona el grosor o título real del hilo de bordar (típicamente 40wt para hilo estándar, 60wt para microletras o 30wt para hilos gruesos) con el espacio físico milimétrico que cada filamento ocupa sobre la tela, determinando cuántas pasadas paralelas se requieren para lograr una cobertura visual absoluta sin que se transparente el fondo.",
    "howItWorks": [
      "1. Un hilo estándar calibre 40wt tiene un diámetro promedio aproximado de 0,35 mm a 0,38 mm cuando descansa sobre la tela.",
      "2. En consecuencia, si se programa un espaciado entre puntadas de 0,40 mm en el software, los filamentos quedan perfectamente yuxtapuestos uno al lado del otro.",
      "3. Si se utiliza un hilo fino calibre 60wt (con un diámetro de apenas 0,25 mm), un espaciado de 0,40 mm dejará espacios vacíos entre hilos revelando la tela.",
      "4. Por ello, con hilo 60wt se debe cerrar la densidad lineal en el software a 0,28 mm o 0,30 mm.",
      "5. Si se usa hilo grueso calibre 30wt (diámetro de 0,45 mm), se debe abrir la densidad a 0,48 mm para que los hilos no se encimen.",
    ],
    "beginnerExplanation": "Es entender qué tan gordito o flaquito es el hilo que tienes puesto en la máquina y cómo acomodar la computadora según eso. Un hilo común de bordar es como un fideo espagueti fino: necesita cierta cantidad de puntadas para tapar la tela. Si pones un hilo súper flaquito para letras enanas, tienes que poner más puntadas juntas para que tape bien; y si pones un hilo grueso como lana, tienes que separar las puntadas para que no se encimen y rompan la aguja.",
    "practicalExamples": [
      "Ajuste de densidad lineal a 0,30 mm para bordar con hilo fino 60wt en monogramas de camisas.",
      "Apertura de densidad lineal a 0,50 mm para bordados con hilos rústicos de lana acrílica o algodón 30wt.",
      "Cálculo de cobertura en hilos metálicos que requieren un 10% más de espacio libre para no deshilacharse."
    ],
    "matrixParametersRelation": [
      "Relación inversamente proporcional: a mayor número de calibre comercial (60wt vs. 40wt), menor es el grosor del hilo y menor debe ser el espaciado.",
      "Selección de aguja correspondiente: hilo 40wt = aguja 75/11; hilo 60wt = aguja 65/9; hilo 30wt = aguja 90/14.",
      "Resistencia a la tensión: hilos más gruesos toleran mayor tensión de resorte que filamentos ultrafinos."
    ],
    "commonErrors": [
      "Cambiar de hilo estándar a hilo fino 60wt sin ajustar la densidad en la matriz, dejando el bordado transparente y ralo.",
      "Poner hilo grueso de fantasía con una matriz digitalizada para hilo 40wt, partiendo agujas y troquelando la tela.",
      "Confundir el peso del hilo (wt) creyendo que un número más alto significa un hilo más grueso."
    ],
    "troubleshootingTips": [
      "Recuerda la regla mnemotécnica del peso del hilo: en el sistema 'wt', número más alto = hilo más flaquito.",
      "Si vas a bordar con hilo metálico, abre el espaciado en tu software al menos un 10% para darle espacio al filamento retorcido.",
      "Guarda tus conos de hilos especiales identificados con su calibre para no mezclarlos en el cabezal."
    ],
    "whenToAdjust": "Modifica el espaciado de puntada en el software cada vez que utilices hilos con calibre diferente al estándar 40wt.",
    "dicaArtrelados": "La tabla de equivalencias Artrelados de hilo y densidad: Guárdate estos tres números de oro para tu taller: 1. Hilo estándar 40wt = densidad 0,40 mm. 2. Hilo fino 60wt = densidad 0,30 mm. 3. Hilo grueso 30wt = densidad 0,50 mm. ¡Con estos tres valores calibrados en tu software tus bordados siempre tendrán una cobertura perfecta!",
    "voceSabia": "¿Sabías que la denominación 'wt' (Weight) significa cuántos kilómetros de ese hilo pesan 1 kilogramo, de modo que en un kilo de hilo 60wt entran 60 kilómetros de hebra, demostrando lo increíblemente fino que es?",
    "practicalExercise": "Toma un cono de hilo estándar 40wt y uno de hilo fino 60wt. Colócalos lado a lado bajo una lupa o la cámara con zoom de tu celular: observa claramente la diferencia de grosor y comprende por qué cada uno exige un espaciado diferente en la computadora.",
    "quickSummary": "Relación entre el grosor físico del hilo y el espaciado necesario en la matriz para lograr cobertura perfecta.",
    "summary": "Relación entre el grosor físico del hilo y el espaciado necesario en la matriz para lograr cobertura perfecta.",
    "relatedTerms": [
      "Densidad de Puntada y Espaciado Milimétrico",
      "Calibración Avanzada de Densidad por Tejido",
      "Hilo de Poliéster Trilobal",
      "Aguja de Bordado Industrial"
    ]
  },

  "d-001-densidade-de-pontos": {
    "term": "Densidad de Puntada y Espaciado Milimétrico",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del parámetro paramétrico Stitch Spacing / Pitch milimétrico universal en todos los sistemas de ponchado y digitalización CAD/CAM.",
    "definition": "Distancia física lineal medida en milímetros (o fracciones de milímetro) que separa dos líneas o pasadas paralelas consecutivas de hilo dentro de una columna de satín o relleno tatami, cuyo valor estándar para hilo clásico 40wt oscila habitualmente entre 0,38 mm y 0,45 mm para garantizar una cobertura textil hermética, brillante y uniforme.",
    "howItWorks": [
      "1. En el software de digitalización, el operador abre la ventana de propiedades de puntada del objeto.",
      "2. Se introduce el valor de espaciado numérico deseado (habitualmente 0,40 mm para tejidos comunes).",
      "3. El motor de cálculo genera las penetraciones de aguja separando cada fila de puntadas exactamente por esa distancia.",
      "4. Al bordar, los filamentos del hilo se acomodan uno al lado del otro cubriendo la superficie de la tela al 100%.",
      "5. Si el espaciado es menor (por ejemplo, 0,30 mm), las puntadas se aprietan más; si es mayor (0,50 mm), el relleno queda más abierto y aireado.",
    ],
    "beginnerExplanation": "Es la distancia en milímetros que hay entre una pasada de hilo y la pasada de al lado. Imagina que estás pintando una cerca de madera con un pincel: la densidad es qué tan pegaditas pasas las pinceladas una al lado de la otra. Si las pasas con la separación justa (alrededor de 0,4 milímetros), la madera queda totalmente cubierta y reluciente; si las pasas muy separadas, se ve la madera de fondo; y si pasas diez veces por el mismo lugar, chorreas la pintura.",
    "practicalExamples": [
      "Densidad estándar de 0,40 mm en letras de satín para uniformes corporativos.",
      "Densidad abierta de 0,48 mm en rellenos grandes tatami sobre remeras para que no queden rígidas.",
      "Densidad apretada de 0,36 mm en cordones finos perimetrales que requieren brillo de espejo."
    ],
    "matrixParametersRelation": [
      "Relación inversa del valor numérico: un número menor de espaciado (0,35 mm) significa mayor densidad de puntadas; un número mayor (0,50 mm) significa menor densidad.",
      "Interacción con la compensación de tirantez: mayor densidad genera mayor retracción elástica de la tela.",
      "Conteo de puntadas directo: reducir el espaciado de 0,40 mm a 0,30 mm incrementa el número de puntadas en un 33%."
    ],
    "commonErrors": [
      "Confundir espaciado con conteo de puntadas y poner números microscópicos como 0,15 mm, perforando y troquelando la tela.",
      "Usar densidades ultra-cerradas para 'tapar' la tela en vez de usar una base de soporte adecuada por debajo.",
      "Dejar el mismo valor de densidad para todo tipo de objetos sin discriminar el tamaño ni el material."
    ],
    "troubleshootingTips": [
      "Utiliza 0,40 mm como el valor dorado de partida para el 90% de tus columnas de satín y rellenos con hilo 40wt.",
      "En telas elásticas de remeras, abre el espaciado a 0,44 mm o 0,46 mm: el bordado quedará mucho más suave y flexible.",
      "Si notas que se transparenta la tela, añade una base de soporte (Underlay) en vez de apretar la densidad superficial."
    ],
    "whenToAdjust": "Modifica el valor de espaciado en el software según el tipo de tejido, el calibre del hilo y el tamaño del objeto.",
    "dicaArtrelados": "El número mágico 0.40 Artrelados: Si estás empezando a digitalizar y no sabes qué número ponerle a tus puntadas, anota en tu monitor con un marcador este número mágico: '0.40 mm'. Con 0,40 mm de espaciado y un buen soporte abajo, tus letras y rellenos saldrán siempre tupidos, brillantes y sin arrugar la tela en cualquier máquina del mundo.",
    "voceSabia": "¿Sabías que algunos programas antiguos expresaban la densidad en 'puntadas por pulgada' o 'líneas por milímetro', y que la unificación internacional al estándar métrico de espaciado en milímetros fue impulsada en 1990 para simplificar la vida de las bordadoras?",
    "practicalExercise": "Digitaliza tres rectángulos de 30x10 mm en tu software: uno con espaciado de 0,32 mm, otro con 0,40 mm y otro con 0,55 mm. Bórdalos en una tela de prueba: comprueba con tus propios dedos la diferencia de rigidez, cobertura y flexibilidad entre los tres.",
    "quickSummary": "Distancia en milímetros entre pasadas consecutivas de hilo que define la cobertura y flexibilidad del bordado.",
    "summary": "Distancia en milímetros entre pasadas consecutivas de hilo que define la cobertura y flexibilidad del bordado.",
    "relatedTerms": [
      "Calibración Avanzada de Densidad por Tejido",
      "Densidad Excesiva y Empastamiento de Puntadas",
      "Columna de Puntada Satín",
      "Puntada Tatami (Tatami Stitch)"
    ]
  },

  "d-021-densidade-de-pontos-avancada": {
    "term": "Calibración Avanzada de Densidad por Tejido",
    "level": "Avanzado 🔴",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "De las tablas de ingeniería textil de densidad adaptativa según el coeficiente de elasticidad y gramaje del sustrato.",
    "definition": "Metodología técnica de precisión en el software de digitalización que ajusta de forma personalizada los valores de espaciado de puntada, longitud y bases de soporte en función directa de las características físicas del tejido receptor (peso en g/m², composición elástica de elastano, textura superficial y estabilidad dimensional), garantizando acabados óptimos sin acartonamiento.",
    "howItWorks": [
      "1. Tejidos rígidos y pesados (sarga, denim, lona): admiten densidades estándar o compactas de 0,38 mm a 0,40 mm con soportes estándar.",
      "2. Tejidos livianos y elásticos (jersey de algodón 100%, modal, viscosa): requieren densidades abiertas de 0,44 mm a 0,48 mm con bases de soporte enrejadas.",
      "3. Tejidos con textura o pelo (toalla, terciopelo, polar): requieren densidades de 0,40 mm complementadas con película hidrosoluble superior y soporte tatami.",
      "4. Materiales no tejidos y cueros (sintético Montana, vinilo, cuero): exigen densidades aligeradas de 0,50 mm a 0,60 mm para evitar el troquelado.",
      "5. El software Wilcom o Hatch aplica estas recetas automáticamente al seleccionar el perfil de tejido (Fabric Assistant).",
    ],
    "beginnerExplanation": "Es aprender que no todas las telas son iguales y que no puedes usar las mismas puntadas para un jean duro que para una remera finita de verano. El jean aguanta muchas puntadas apretadas sin problemas; pero si le pones esa misma cantidad de puntadas a una remera de algodón fino, la remera se arruga toda y parece un cartón. Calibrar la densidad para cada tela es el secreto de los mejores digitalizadores del mundo para que cada prenda quede suave y perfecta.",
    "practicalExamples": [
      "Configuración de espaciado a 0,46 mm para bordar remeras de algodón peinado liviano de 140 g/m².",
      "Ajuste a 0,38 mm para escudos herméticos en sarga pesada de pantalones de trabajo.",
      "Calibración a 0,55 mm en tapicería de ecocuero para evitar que el material se desgarre al bordar."
    ],
    "matrixParametersRelation": [
      "Gramaje del tejido (g/m²): a menor gramaje, mayor debe ser el espaciado para evitar el colapso del tejido.",
      "Porcentaje de elasticidad transversal: telas con más del 5% de spandex requieren bases de cuadrícula y densidades aligeradas.",
      "Perfiles de tejido en el software (Fabric Profiles): plantillas automáticas que precargan estos valores de fábrica."
    ],
    "commonErrors": [
      "Bordar una matriz comprada para camperas de invierno directamente sobre una remera de seda o lino fino.",
      "Ignorar el efecto de rigidez que genera el hilo de bordar al acumularse en grandes masas en telas livianas.",
      "Modificar la densidad de puntada sin cambiar simultáneamente el tipo de entretela adecuado."
    ],
    "troubleshootingTips": [
      "Utiliza el asistente de telas (Fabric Assistant) de tu software de diseño como guía de partida para cada proyecto.",
      "En telas de punto elásticas, compensa la densidad más abierta utilizando entretela de cortar de buena calidad por debajo.",
      "Ten una libreta de recetas en tu taller donde anotes qué valor de densidad te dio el mejor resultado en cada marca de remera."
    ],
    "whenToAdjust": "Calibra la densidad en el software cada vez que vayas a bordar un diseño en un tipo de prenda diferente al original.",
    "dicaArtrelados": "El recetario de densidades Artrelados: Guarda esta pequeña guía en un papel pegado a tu computadora: Remeras finas = 0,46 mm. Chombas polo de piqué = 0,42 mm. Camperas y buzos = 0,40 mm. Cuerina y sintéticos = 0,55 mm. Si aplicas estos cuatro números a tus matrices según la ropa que te traiga el cliente, tus bordados nunca se arrugarán y ganarás fama de tener las manos más suaves de la ciudad.",
    "voceSabia": "¿Sabías que los programas de digitalización modernos de última generación cuentan con perfiles de más de 80 tipos de telas textiles diferentes calibrados en laboratorios suizos y japoneses con microscopios electrónicos?",
    "practicalExercise": "Abre tu programa de digitalización y prueba la herramienta 'Configuración de tela / Fabric Settings': cambia de 'Sarga pesada' a 'Jersey fino' y observa en la pantalla cómo el programa recalcula automáticamente el espaciado para proteger la prenda.",
    "quickSummary": "Metodología que calibra el espaciado y soporte en función directa del gramaje y elasticidad de cada tejido receptor.",
    "summary": "Metodología que calibra el espaciado y soporte en función directa del gramaje y elasticidad de cada tejido receptor.",
    "relatedTerms": [
      "Densidad de Puntada y Espaciado Milimétrico",
      "Densidad Global del Bordado Computarizado",
      "Deformación del Bordado y Distorsión Textil",
      "Entretela de Cortar (Cut-away)"
    ]
  },

  "d-004-densidade-excessiva": {
    "term": "Densidad Excesiva y Empastamiento de Puntadas",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del defecto técnico de sobre-saturación de puntadas Over-Stitching & Needle Jamming documentado en los manuales de fallas de bordado.",
    "definition": "Error crítico de digitalización donde se programa una concentración exagerada de puntadas en un espacio reducido (espaciado menor a 0,30 mm o capas densas superpuestas sin desfase), creando una masa rígida, dura e impenetrable de hilo que corta o troquela la tela, quiebra las agujas, rompe el hilo continuamente y genera un bordado áspero e incómodo al vestir.",
    "howItWorks": [
      "1. La aguja clava cientos de veces en el mismo milímetro cuadrado sin espacio físico para acomodar el volumen del hilo.",
      "2. El hilo superior se acumula formando una costra dura y abultada sobre la superficie de la tela.",
      "3. La fricción térmica se dispara en el ojo de la aguja, quemando o cortando el hilo de poliéster repetidamente.",
      "4. La fuerza mecánica de penetración perfora las fibras del tejido tantas veces que la tela se desprende en un agujero limpio (troquelado).",
      "5. En el revés, se forma un nudo compacto y duro que puede trabar el garfio rotativo y descalibrar el tiempo de la máquina.",
    ],
    "beginnerExplanation": "Es cuando le metes tantas puntadas apretadas a un dibujo que la tela se convierte en un pedazo de chapa dura como una piedra. La máquina sufre, hace ruido feo, parte las agujas a cada rato y corta el hilo cada treinta segundos. Y lo peor de todo: a tu cliente le pica y le raspa la piel, y cuando lava la remera se le hace un agujero alrededor del bordado. Más puntadas NO significa mejor: significa romper agujas y arruinar la ropa.",
    "practicalExamples": [
      "Rotura constante de hilo en las esquinas de letras pequeñas por acumulación de cientos de micro-puntadas.",
      "Agujeros irreparables alrededor de escudos bordados con tres capas densas superpuestas sobre remeras finas.",
      "Bordados en el pecho de remeras de niños que quedan tan duros que raspan y lastiman la piel del bebé."
    ],
    "matrixParametersRelation": [
      "Límite inferior de seguridad: nunca descender de 0,35 mm de espaciado en puntada satín para hilo estándar 40wt.",
      "Eliminación de puntadas solapadas (Overlap Removal): usar herramientas para cortar y quitar el relleno que queda debajo de otro color.",
      "Filtro de puntadas pequeñas: eliminar puntadas de menos de 0,5 mm que solo aportan apelmazamiento sin estética."
    ],
    "commonErrors": [
      "Montar un satín tupido directamente arriba de un relleno tatami tupido sin recortar el fondo que no se ve.",
      "Aumentar la densidad en el software creyendo que eso solucionará un hilo de bobina que se asoma por mala tensión.",
      "Digitalizar letras diminutas en satín grueso en vez de usar puntada recta simple o hilo fino."
    ],
    "troubleshootingTips": [
      "Abre el espaciado de puntada a 0,40 mm o 0,42 mm: la máquina bordará en silencio y el diseño quedará suave y brillante.",
      "Usa la herramienta 'Eliminar solapamientos' (Remove Overlaps) en tu software para recortar las capas de tela ocultas.",
      "Activa el filtro de puntadas pequeñas en 0,6 mm para limpiar la matriz de nudos basura microscópicos."
    ],
    "whenToAdjust": "Aligera la densidad inmediatamente si tu máquina rompe hilos o agujas repetidamente en la misma zona del diseño.",
    "dicaArtrelados": "El tip del colador Artrelados para solapamientos: Si vas a bordar un dibujo con un círculo rojo y encima le vas a poner una estrella amarilla grande, ¡nunca bordes la estrella arriba del círculo macizo! Usa la herramienta de tu software para recortar la parte del círculo que queda tapada por la estrella. Ahorrarás la mitad de las puntadas, tu máquina no romperá agujas y el bordado quedará suave y liviano como una caricia.",
    "voceSabia": "¿Sabías que los técnicos de servicio oficial estiman que más del 60% de las reparaciones por garfios mellados y barras de aguja dobladas se deben a matrices mal digitalizadas con densidad excesiva que obligan a la aguja a golpear contra bloques macizos de hilo?",
    "practicalExercise": "Abre una matriz que te haya dado problemas de rotura de aguja. Haz un zoom grande en la zona donde se cortaba el hilo: observa la maraña oscura de puntadas apretadas. Aplícale el filtro de puntadas pequeñas y aligera la densidad: comprueba cómo los puntos se despejan y la máquina vuelve a coser en paz.",
    "quickSummary": "Error de digitalización por acumulación desmedida de puntadas que troquela la tela y rompe agujas e hilos.",
    "summary": "Error de digitalização por acumulação desmedida de puntadas que troquela la tela y rompe agujas e hilos.",
    "relatedTerms": [
      "Densidad de Puntada y Espaciado Milimétrico",
      "Densidad Global del Bordado Computarizado",
      "Defectos de Bordado y Diagnóstico de Fallas",
      "Deflexión Dinámica y Flexión Elástica de la Aguja"
    ]
  }
}

content = """import { Verbete } from "../../types";

export const LOTE1_D_PART2_ES: Record<string, Partial<Verbete>> = """ + json.dumps(PART2_DATA, indent=2, ensure_ascii=False) + """;
"""

with open("src/data/lote1_d/part2.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated lote1_d part2.ts with {len(PART2_DATA)} verbetes.")

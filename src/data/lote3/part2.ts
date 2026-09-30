import { Verbete } from "../../types";

export const LOTE3_PART2_ES: Record<string, Partial<Verbete>> = {
  "a-064-alongamento-de-ponto-stitch-elongation": {
    "term": "Alargamiento y Calibración de Paso de Puntada (Stitch Elongation & Pitch Calibration)",
    "level": "Avanzado 🔴",
    "category": "Programación de Bordado",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín elongare (extender, prolongar) y punctum (punto de costura). Función avanzada de digitalización textil que recalcula el paso longitudinal de los motivos sin alterar su escala exterior.",
    "summary": "Parámetro que ajusta la distancia longitudinal entre puntadas decorativas manteniendo el equilibrio y la densidad sin generar rigidez en la tela.",
    "definition": "El alargamiento y calibración de paso de puntada (Stitch Elongation & Pitch Calibration) es el parámetro digital de los programas de ponchado y bordado que permite estirar o comprimir la distancia longitudinal de avance entre dos penetraciones sucesivas de la aguja a lo largo de una trayectoria vectorial o motivo ornamental, sin alterar el ancho de columna ni deformar la escala general del diseño.",
    "technicalDetails": "A diferencia del escalado proporcional (Scale Tool), que amplía tanto el ancho como el largo del objeto aumentando la cantidad de puntadas, el factor de alargamiento (Pitch/Elongation Multiplier) modifica exclusivamente la longitud de la zancada (ejemplo: pasando de un paso estándar de 2,5 mm a 4,5 mm). Esto aligera la carga de hilo en un 30% a 50%, reduce el tiempo de máquina y proporciona una flexibilidad textil superior en prendas livianas.",
    "beginnerExplanation": "Imagínese dar pasos al caminar: puede dar pasitos cortitos y pegados o zancadas largas. Cuando la máquina borda un festón o un arabesco, el alargamiento le dice qué tan largas deben ser las zancadas de la aguja. Con zancadas más largas el bordado queda más sueltito, liviano y suave; con pasos muy cortitos queda apretado y duro como un cartón.",
    "construction": [
      "Algoritmo de cálculo de paso métrico (Pitch / Spacing) en software CAD",
      "Control de aceleración y desaceleración del servomotor de pantógrafo",
      "Límite de salto máximo antes de activar corte de hilo o puntada flotante",
      "Curva de interpolación de Bézier para trazados sinuosos y guardas"
    ],
    "howItWorks": [
      "1. El ponchador selecciona un objeto lineal decorativo o motivo de puntada corrida en el software.",
      "2. En la ventana de propiedades, accede al campo 'Longitud de Puntada / Factor de Alargamiento'.",
      "3. Modifica el multiplicador (por ejemplo, aumentando de 2,5 mm a 4,0 mm).",
      "4. El programa recalcula las coordenadas de inserción manteniendo la forma curva perfecta.",
      "5. La bordadora ejecuta el motivo con mayor ligereza y fluidez mecánica sin tirones.",
      "6. La prenda conserva su caída natural sin rigidez ni acartonamiento."
    ],
    "mainTypes": [
      "Alargamiento de Puntada Decorativa en Motivo (Motif Elongation)",
      "Ajuste de Paso de Relleno Tatami (Tatami Pitch Stretching)",
      "Compresión de Puntada para Curvas Cerradas (Corner Pitch Compression)"
    ],
    "advantages": [
      "✔ Reduce el tiempo de máquina hasta en un 25% en guardas y cenefas extensas",
      "✔ Evita que telas finas (percal, batista, lino) se acartonen bajo bordados densos",
      "✔ Ahorra metros valiosos de hilo de bordar en producciones a gran escala",
      "✔ Otorga una textura suave y sedosa de altísima calidad al tacto"
    ],
    "limitations": [
      "Alargar puntadas de satén más allá de 8,5 o 9 mm genera hebras flojas que pueden engancharse en el lavado.",
      "En curvas muy pronunciadas, pasos excesivamente largos convierten arcos suaves en polígonos facetados."
    ],
    "commonErrors": [
      "❌ Alargar puntadas de cordón sin activar la división automática de puntada (Auto-Split).",
      "❌ Reducir el paso a menos de 0,8 mm provocando que la aguja pique repetidas veces en el mismo orificio troquelando la tela.",
      "❌ Olvidar que las telas elásticas requieren pasos intermedios para no deformarse."
    ],
    "troubleshootingTips": [
      "Si el motivo decorativo quedó rígido como tabla: Incremente la longitud de paso en un 30% en el software para oxigenar las penetraciones de la aguja.",
      "Si el hilo queda flojo o flotando tras lavar la prenda: Limite la longitud máxima de puntada a 6,0 mm.",
      "Si las curvas circulares se ven rectas o angulosas: Reduzca el paso de puntada en las zonas de radio cerrado."
    ],
    "dicaArtrelados": "¡Consejo de oro para bordar sábanas y toallas de alta gama! Al programar rellenos tatami grandes sobre percal o batista de algodón, aumente la longitud de paso de 3,5 mm a 4,5 mm. ¡El bordado reflejará un brillo espectacular de la luz, consumirá menos hilo y la prenda quedará suave como la seda para la piel del cliente!",
    "voceSabia": "¡Aumentar la longitud de puntada del relleno tatami en apenas 1 mm en un diseño de 100.000 puntadas puede reducir el tiempo total de bordado en casi 15 minutos de máquina sin perder cobertura visual!",
    "practicalExercise": "Digitalice dos rectángulos de 5x5 cm: el primero con puntada tatami de 3,0 mm de paso y el segundo con 5,0 mm. Borde ambos en tela de algodón con el mismo cono de hilo. Toque ambos con los dedos: el segundo será incomparablemente más suave y brilloso.",
    "quickSummary": "Calibración del paso longitudinal entre puntadas que equilibra la cobertura estética con la suavidad, flexibilidad y rapidez de costura.",
    "imageCaption": "Comparativa técnica de paso de puntada mostrando la densidad estándar frente al alargamiento estilizado con menor rigidez.",
    "relatedTerms": [
      "Densidad de Puntada",
      "Puntada de Relleno Tatami",
      "División Automática de Puntada (Auto-Split)",
      "Puntada Plumetis / Satén"
    ],
    "applications": [
      "Cenefas y guardas decorativas en sábanas, manteles y toallas de lujo.",
      "Alivio de rigidez en figuras grandes de ropa infantil y remeras ligeras.",
      "Motivos geométricos y arabescos ornamentales para acolchados y fundas."
    ],
    "recommendedSettings": {
      "speedPPM": "700 a 850 PPM",
      "needleType": "75/11 Universal o Punta Fina",
      "stabilizer": "Entretela rasgable o recortable liviana",
      "density": "Paso de 4,0 a 4,5 mm con espaciado de 0,40 mm",
      "threadTension": "Equilibrada suave"
    }
  },
  "a-093-alongamento-termico-de-linha-sintetica": {
    "term": "Deformación Térmica de Hilo Sintético por Fricción (Synthetic Thread Heat Creep & Thermal Elongation)",
    "level": "Avanzado 🔴",
    "category": "Agujas y Hilos",
    "grammarClass": "Locución sustantiva femenina.",
    "origin": "Del latín elongare (prolongarse) y del griego therme (calor). Principio de física polimérica y reología textil aplicado a la costura industrial de alta rotación.",
    "summary": "Estiramiento transitorio o permanente de las fibras de poliéster causado por el calor de fricción de la aguja a alta velocidad, provocando arrugas en la tela al enfriarse.",
    "definition": "La deformación térmica de hilo sintético (Synthetic Thread Heat Creep & Thermal Elongation) es la alteración viscoelástica reversible o plástica que experimentan los filamentos de poliéster trilobal o poliamida al deslizarse a través del ojo de una aguja sobrecalentada por rozamiento durante bordados continuos a más de 850 PPM. La temperatura en la ranura y el ojo de la aguja puede superar los 180 °C, reblandeciendo la matriz polimérica del hilo, lo que provoca que se estire bajo tensión y posteriormente se encoja al enfriarse a temperatura ambiente, frunciendo la tela.",
    "technicalDetails": "Al atravesar la zona de fricción térmica del cabezal, el filamento termoplástico de poliéster se estira elásticamente un 5% a 15% bajo la resistencia del tensor. Al depositarse en la tela caliente, la puntada parece perfecta; sin embargo, al cabo de 30 a 60 minutos, el hilo recupera su estado térmico basal contrayéndose (efecto memoria molecular), lo que genera un arrugamiento tardío ('puckering retardado') que no se aprecia en el momento exacto en que la prenda sale de la bordadora.",
    "beginnerExplanation": "Cuando la máquina borda a toda velocidad, la aguja metálica se pone caliente como una plancha por rozar contra la tela miles de veces por minuto. Como el hilo es de poliéster (una especie de plástico fino), con el calor se ablanda y se estira como un chicle. Cuando el bordado termina y se enfría en la mesa, el hilo vuelve a su tamaño normal y encoje, arrugando toda la remera alrededor del dibujo.",
    "construction": [
      "Polímero sintético termoplástico (Poliéster 100% trilobal de alta tenacidad)",
      "Zona de fricción crítica en el ojo de la aguja (Eye Friction Hotspot)",
      "Agujas con recubrimiento térmico disipador (Nitrato de titanio o cromo duro)",
      "Tensión de hilo residual en el enrollado de la bobina"
    ],
    "howItWorks": [
      "1. La máquina borda a 950 PPM en un tejido tupido o impermeable.",
      "2. El rozamiento continuo eleva la temperatura del ojo de la aguja a más de 160 °C.",
      "3. El hilo de poliéster atraviesa el ojo caliente, ablandándose de manera instantánea.",
      "4. El hilo estirado se fija en la tela con tensión elástica acumulada.",
      "5. La prenda sale de la máquina y reposa en el taller.",
      "6. Al enfriarse a temperatura ambiente, el hilo se contrae y arruga la tela circundante."
    ],
    "mainTypes": [
      "Elongación Térmica Reversible (Contracción retardada por memoria elástica)",
      "Deformación Plástica Permanente (Pérdida de resistencia por calor excesivo)",
      "Fusión por Fricción (Rotura de hilo con bolita fundida en la punta)"
    ],
    "advantages": [
      "✔ Su comprensión permite calibrar velocidades y tensiones evitando piezas arrugadas",
      "✔ Guía la selección de agujas con disipadores de calor para tiradas largas de producción",
      "✔ Previene roturas inexplicables de hilo en bordados de escudos densos"
    ],
    "limitations": [
      "Ineludible en máquinas industriales que trabajan sin refrigeración por aire comprimido a más de 900 PPM continuas.",
      "Más pronunciado en telas densas como cordura, gabardina pesada o mochilas."
    ],
    "commonErrors": [
      "❌ Bordar a máxima velocidad (1.000 PPM) piezas densas utilizando agujas estándar cromadas.",
      "❌ Apretar la tensión del hilo pensando que el punto está flojo, lo que empeora el estiramiento térmico.",
      "❌ Utilizar hilos de poliéster de baja calidad con puntos de fusión irregulares."
    ],
    "troubleshootingTips": [
      "Si la tela aparece arrugada horas después de sacarla del bastidor: Reduzca la velocidad de bordado en 150 PPM para permitir que la aguja disipe temperatura.",
      "Si el hilo se corta dejando una pequeña bolita derretida en el extremo: Reemplace la aguja por una con baño de Nitruro de Titanio (dorada), que reduce el calor por rozamiento en un 40%.",
      "Si borda telas impermeables engomadas: Utilice una aguja de calibre superior (80/12 en vez de 75/11) con ojo alargado para que el hilo pase con mayor holgura térmica."
    ],
    "dicaArtrelados": "¡El secreto de los talleres profesionales para bordar sin arrugas traicioneras! En matrices muy pesadas y tupidas, instale agujas con baño de titanio (las de color dorado). El titanio no absorbe calor como el acero común, el hilo viaja fresco sin estirarse y el bordado le quedará plano como una hoja de papel, ¡incluso al día siguiente!",
    "voceSabia": "¡En ensayos de laboratorio textil con cámaras termográficas, se comprobó que la punta de una aguja de bordar puede alcanzar 220 °C tras apenas 40 segundos de costura continua a 1.000 PPM en tela denim gruesa!",
    "practicalExercise": "Borde un logotipo tupido en dos recortes de microfibra sintética: el primero a 950 PPM con aguja común y el segundo a 650 PPM con aguja de titanio. Deje reposar las telas dos horas sobre una mesa y compruebe cómo la pieza bordada a velocidad moderada permanece perfectamente plana.",
    "quickSummary": "Estiramiento del hilo por el calor de fricción de la aguja a alta velocidad que provoca arrugamiento tardío en la prenda al enfriarse.",
    "imageCaption": "Representación del calor por fricción en el ojo de la aguja provocando el estiramiento molecular del hilo de poliéster.",
    "relatedTerms": [
      "Aguja de Titanio / Nitruro de Titanio",
      "Hilo de Poliéster Trilobal",
      "Velocidad de Bordado (PPM)",
      "Fruncimiento del Tejido (Puckering)"
    ],
    "applications": [
      "Bordados industriales de alta velocidad en camperas y rompevientos.",
      "Bordado de logotipos densos sobre microfibra y tejidos deportivos sintéticos.",
      "Producción continua en serie de bolsos y mochilas de cordura o nylon."
    ],
    "recommendedSettings": {
      "speedPPM": "650 a 800 PPM para evitar calor excesivo",
      "needleType": "75/11 o 80/12 Titanio (Gebedur / Gold)",
      "stabilizer": "Entretela recortable de 80 g/m² para soportar tensión",
      "density": "Estándar con compensación de tracción de 0,40 mm",
      "threadTension": "Tensión relajada y suave (100 a 110 gf)"
    }
  },
  "a-059-amaciamento-de-bordado-no-avesso-protetor": {
    "term": "Protector Termoadhesivo de Revés / Suavizador de Bordado (Iron-On Backing Cover / Cloud Cover)",
    "level": "Iniciante 🟢",
    "category": "Acabado y Mantenimiento",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín admollire (volver blando, suavizar) y del inglés técnico textil cloud cover / tender touch (cobertura protectora tacto de nube). Creado para la confección infantil para cumplir con normas de confort dermatológico pediátrico.",
    "summary": "Entretela de malla ultrafina termofijable que se adhiere en el revés del bordado para sellar hilos cortados y proteger pieles delicadas de rozaduras.",
    "definition": "El protector termoadhesivo de revés (conocido comercialmente como Suavizador de Bordado, Cloud Cover, Tender Touch o Soft Seal) es una entretela de punto de poliamida o poliéster de extrema ligereza (25 a 35 g/m²) recubierta en una de sus caras con microgránulos de adhesivo termoplástico de bajo punto de fusión. Se aplica con calor de plancha sobre el reverso del bordado terminado para encapsular los cabos de hilo cortados, nudos y estabilizadores rígidos, creando una barrera hipoalergénica suave y sedosa al contacto directo con la piel humana.",
    "technicalDetails": "Al bordar con máquinas electrónicas, cada corte automático de hilo deja una pequeña colita rígida y un nudo de seguridad en el revés. En ropa de bebé o indumentaria deportiva de compresión, estos nudos rozan la epidermis causando irritaciones o dermatitis de contacto. El protector termoadhesivo se funde a temperaturas moderadas (entre 120 °C y 140 °C durante 10 a 15 segundos con presión media), soldando las fibras sin traspasar el adhesivo hacia el frente ni acartonar la prenda.",
    "beginnerExplanation": "Cuando la máquina termina de bordar una remera, por atrás quedan cientos de nuditos, puntitas de hilos duros y restos de entretela que pueden raspar o picar la piel, sobre todo en bebés. El protector es una telita mágica, finita y suave como una gasa, que se pega con la plancha por detrás del bordado para que quede acolchadito, suave como una caricia y no pique nunca más.",
    "construction": [
      "Malla de punto urdido de microfibra de poliéster o poliamida de tacto sedoso",
      "Capa de adhesivo termoplástico micropunto (poliamida fusible de bajo punto de fusión)",
      "Estructura bielástica que se estira y acompaña los movimientos de remeras y bodies",
      "Resistencia certificada para soportar más de 50 lavados domésticos sin despegarse"
    ],
    "howItWorks": [
      "1. La bordadora recorta los excesos de estabilizador y limpia los hilos largos del revés.",
      "2. Corta una pieza del protector termoadhesivo redondeando las esquinas con una tijera (para que no se desprendan las puntas).",
      "3. Coloca la cara brillante rugosa (con adhesivo) contra el revés del bordado.",
      "4. Aplica la plancha caliente a 130 °C con presión firme durante 12 segundos sin deslizar.",
      "5. Deja enfriar la prenda sobre una superficie plana antes de manipularla.",
      "6. El reverso queda completamente sellado, liso y suave al tacto."
    ],
    "mainTypes": [
      "Protector Elástico de Punto (Ideal para bodies de bebé, remeras y trajes de baño)",
      "Protector Tejido Plano Liviano (Para camisas de vestir y uniformes)",
      "Protector Hidrosoluble Provisional (Para sellados de limpieza temporal)"
    ],
    "advantages": [
      "✔ Elimina al 100% las quejas de clientes por bordados que 'pican' o raspan el pecho",
      "✔ Cumple los estrictos requerimientos de seguridad para ropa de recién nacidos y bebés",
      "✔ Previene que los nudos del revés se desarmen con los lavados en lavarropas",
      "✔ Aumenta notablemente el valor percibido y la calidad profesional de sus prendas"
    ],
    "limitations": [
      "No debe aplicarse calor con vapor de agua excesivo en planchas hogareñas para no debilitar el pegamento.",
      "El calor directo de una plancha demasiado caliente puede deformar la malla sintética; use siempre un paño de teflón intermedio."
    ],
    "commonErrors": [
      "❌ Cortar la pieza cuadrada con esquinas en punta (las esquinas se despegan con los lavados).",
      "❌ Poner el lado con pegamento contra la plancha en lugar de contra el bordado.",
      "❌ Planchar con la temperatura al máximo quemando la malla de poliamida.",
      "❌ Usar prendas para bebés sin colocar este protector en el revés."
    ],
    "troubleshootingTips": [
      "Si el protector se despega tras el primer lavado: Vuelva a planchar aplicando mayor presión física con la plancha durante 15 segundos y temperatura de 135 °C.",
      "Si las esquinas se levantan: Recuerde redondear siempre los cuatro bordes con tijera en forma de óvalo antes de aplicar calor."
    ],
    "dicaArtrelados": "¡El toque distintivo de distinción para su taller! Cuando entregue bodies de bebé, remeras escolares o toallitas con el protector de revés colocado, coloque una etiqueta que diga: 'Bordado con reverso suave antialérgico para el cuidado de la piel'. ¡Sus clientes valorarán ese detalle con devoción y volverán siempre a encargarle a usted!",
    "voceSabia": "¡En las normas de confección de la Unión Europea y Estados Unidos para indumentaria infantil de 0 a 24 meses, la cobertura de revés en bordados de contacto directo es un estándar técnico recomendado para prevenir abrasiones dérmicas!",
    "practicalExercise": "Tome una remera bordada densa. Pegue una mitad del revés con el protector termoadhesivo y deje la otra mitad con los hilos al aire. Pase el dorso de su mano o apóyela sobre su mejilla: sentirá al instante la diferencia abismal entre la aspereza de los hilos y la suavidad de caricia del protector.",
    "quickSummary": "Malla termoadhesiva suave que se fija con plancha en el reverso del bordado para tapar hilos, nudos y proteger pieles delicadas de rozaduras.",
    "imageCaption": "Reverso de una prenda infantil mostrando el protector termoadhesivo suave sellando los nudos y cabos de hilo.",
    "relatedTerms": [
      "Acabado y Limpieza de Bordado",
      "Entretela Termoadhesiva",
      "Bordado en Ropa de Bebé e Infantil",
      "Corte Automático de Hilo (Trimmer)"
    ],
    "applications": [
      "Bodies, batitas, ranitas y baberos para recién nacidos y bebés.",
      "Remeras deportivas de lycra y prendas térmicas de compresión atlética.",
      "Camisas de etiqueta y uniformes de personal con piel hipersensible."
    ],
    "recommendedSettings": {
      "speedPPM": "No aplica (etapa de posbordado)",
      "needleType": "No aplica",
      "stabilizer": "Compatible con cualquier entretela previa",
      "density": "No aplica",
      "threadTension": "No aplica"
    }
  },
  "a-095-amaciamento-de-matriz-por-filtragem-de-densidade": {
    "term": "Suavizado de Matriz por Filtrado Inteligente de Densidad (Smart Density Filter Softening)",
    "level": "Avanzado 🔴",
    "category": "Programación de Bordado",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín admollire (suavizar) y filtrum (colador o depurador). Algoritmo computarizado de software CAD de bordado para depurar acumulaciones dañinas de puntadas.",
    "summary": "Herramienta digital que detecta y elimina automáticamente micro-puntadas amontonadas y capas excesivas de hilo, aligerando el peso y la rigidez de la matriz.",
    "definition": "El suavizado de matriz por filtrado inteligente de densidad (Smart Density Filter Softening / Stitch Density Reduction & Micro-Stitch Purge) es una función algorítmica avanzada presente en los programas de diseño y ponchado que analiza el mapa tridimensional de penetraciones de la matriz. Su función es identificar acumulaciones críticas donde coinciden más de 3 o 4 capas superpuestas de hilo en un radio menor a 1,5 mm, eliminando automáticamente las puntadas redundantes de menos de 0,4 mm de longitud y recalculando el espaciado de relleno para evitar que la prenda quede rígida, quebren agujas o se trabe el garfio.",
    "technicalDetails": "Al convertir imágenes vectoriales complejas o al superponer rellenos de fondo con sombras y letras, es común que se generen puntos ciegos con densidades peligrosas de más de 8 a 10 puntadas por milímetro cuadrado. El filtro inteligente escanea el archivo y aplica una curva de adelgazamiento (Thinning Filter) que respeta los contornos visuales pero redistribuye las penetraciones intermedias, reduciendo la cuenta total de puntadas entre un 10% y un 25% sin perder un ápice de nitidez estética.",
    "beginnerExplanation": "A veces, cuando descargás o comprás una matriz de internet, está tan cargada de puntadas amontonadas que la máquina parece una ametralladora clavando en el mismo lugar, rompe agujas o deja el dibujo duro como una piedra. Esta función en la computadora actúa como un colador inteligente: saca todas esas puntaditas invisibles que sobran para que el bordado quede liviano, suave y cosa sin atascar la máquina.",
    "construction": [
      "Algoritmo matemático de detección de distancias de penetración (Cluster Detection)",
      "Filtro de purga de micropuntadas menores a 0,4 mm (Short Stitch Eliminator)",
      "Módulo de compensación de capas superpuestas (Overlap Layer Reducer)",
      "Visualizador de mapa de calor de densidad (Density Heatmap Inspector)"
    ],
    "howItWorks": [
      "1. El usuario abre la matriz en el software de bordado y activa la vista de mapa de densidad.",
      "2. Las zonas críticas sobrecargadas se iluminan en color rojo de alerta.",
      "3. Se selecciona la herramienta 'Filtro de Densidad Inteligente / Suavizar Matriz'.",
      "4. El programa elimina automáticamente las puntadas duplicadas y las que miden menos de 0,4 mm.",
      "5. Aplica un alivio en las capas de relleno que quedan tapadas por otros objetos superiores.",
      "6. Se guarda la matriz limpia y depurada, lista para bordar con suavidad garantizada."
    ],
    "mainTypes": [
      "Filtro de Eliminación de Puntadas Cortas (Purga de penetraciones menores a 0,5 mm)",
      "Reducción de Superposiciones (Ocultamiento de puntadas de relleno bajo cordones)",
      "Apertura Progresiva de Densidad para Telas Ligeras (Light Fabric Density Softening)"
    ],
    "advantages": [
      "✔ Previene roturas constantes de agujas y cortes de hilo en zonas concentradas",
      "✔ Deja la prenda flexible y cómoda sin formar 'escudos de hierro' pesados",
      "✔ Reduce el tiempo de máquina hasta en un 20% aumentando la productividad",
      "✔ Disminuye la fuerza de penetración del motor alargando la vida de la bordadora"
    ],
    "limitations": [
      "Un filtrado excesivamente agresivo puede dejar huecos de cobertura en pequeños detalles de satén.",
      "Siempre se debe realizar una simulación en pantalla antes de enviar el archivo a coser."
    ],
    "commonErrors": [
      "❌ Bordar matrices compradas de dudosa procedencia sin antes inspeccionar su mapa de densidad.",
      "❌ Aplicar el filtro a letras diminutas de menos de 4 mm, donde las puntadas cortas son necesarias para definir trazos finos.",
      "❌ Pensar que mayor cantidad de puntadas siempre significa mayor calidad de bordado."
    ],
    "troubleshootingTips": [
      "Si la aguja se parte con un ruido seco en el mismo punto del dibujo: Abra la matriz en el software, active el zoom al 500% y elimine manualmente el nudo de micropuntadas superpuestas.",
      "Si el bordado queda con agujeros transparentes tras el filtrado: Restaure la tolerancia mínima de puntada a 0,4 mm en lugar de 0,7 mm."
    ],
    "dicaArtrelados": "¡Recuerde usar la Calculadora de Bordados Artrelados para cotizar y verificar sus proyectos! Una matriz bien filtrada que pasa de 40.000 a 32.000 puntadas no solo borda más suave y cuida su máquina, sino que le ahorra minutos de producción que impactan directamente en su ganancia neta por hora.",
    "voceSabia": "¡Muchas matrices antiguas digitalizadas automáticamente contienen hasta un 15% de puntadas 'parásitas' de menos de 0,3 mm que no aportan nada al diseño y son las responsables del 80% de los cortes de hilo en el taller!",
    "practicalExercise": "Abra un logotipo complejo en su programa de diseño y verifique la cantidad de puntadas. Aplique la función de eliminar puntadas cortas (Short Stitch Filter a 0,4 mm) y la eliminación de fondos ocultos. Compruebe cómo se reducen miles de puntadas sin que el dibujo cambie en absoluto a la vista.",
    "quickSummary": "Depuración informática que elimina puntadas microscópicas y capas superpuestas innecesarias para lograr un bordado suave, flexible y sin roturas de aguja.",
    "imageCaption": "Mapa de calor de densidad en software de bordado mostrando zonas rojas críticas antes y después del suavizado.",
    "relatedTerms": [
      "Densidad de Puntada",
      "Eliminación de Puntadas Cortas (Short Stitch Filter)",
      "Digitalización y Ponchado de Matrices",
      "Fruncimiento del Tejido (Puckering)"
    ],
    "applications": [
      "Optimización de matrices descargadas o adquiridas en bancos de diseños comerciales.",
      "Adaptación de bordados pesados para remeras de verano y ropa ligera de niños.",
      "Acondicionamiento de escudos con múltiples capas de letras y ornamentos."
    ],
    "recommendedSettings": {
      "speedPPM": "Ajustada a la matriz optimizada",
      "needleType": "75/11 Punta de Bola o Universal",
      "stabilizer": "Acorde al tejido final",
      "density": "Espaciado uniforme de 0,40 a 0,42 mm",
      "threadTension": "Normal de trabajo"
    }
  },
  "a-096-amortecedor-de-balanco-de-pantografo": {
    "term": "Amortiguador de Balanceo de Pantógrafo (Pantograph Counterbalance Damper)",
    "level": "Avanzado 🔴",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del francés amortir (amortiguar, atenuar) y del griego pantographos (instrumento para reproducir a escala). Ingeniería mecánica para la absorción de inercia cinética en el desplazamiento cartesiano de bordadoras.",
    "summary": "Mecanismo cinemático hidráulico o de muelle que absorbe las sacudidas del bastidor en aceleraciones y frenadas bruscas a alta velocidad.",
    "definition": "El amortiguador de balanceo de pantógrafo (Pantograph Counterbalance Damper / XY Axis Motion Stabilizer) es un dispositivo de amortiguación cinética instalado en los extremos de los rieles lineales o junto a las correas dentadas del sistema de traslación cartesiana X e Y del pantógrafo. Su cometido es disipar las vibraciones mecánicas y las inercias provocadas por los saltos largos y aceleraciones violentas del bastidor cuando la máquina trabaja a más de 800 PPM con bastidores tubulares grandes o pesados.",
    "technicalDetails": "Durante una puntada de salto de 12 mm ejecutada a 850 PPM, el pantógrafo acelera y desacelera en menos de 30 milisegundos con una fuerza g considerable. Sin amortiguadores mecánicos o acoples elásticos de poliuretano, la masa inercial del bastidor genera micro-oscilaciones elásticas que distorsionan las líneas rectas, provocando bordes serruchados o pérdida de definición en las esquinas de los bordados.",
    "beginnerExplanation": "Son como los amortiguadores de las ruedas de un auto, pero para el brazo de metal que sostiene el bastidor. Cuando la máquina cose muy rápido y pega saltos grandes de un lado al otro del dibujo, estos amortiguadores evitan que el bastidor tiemble o sacuda, logrando que todas las líneas queden derechitas y prolijas.",
    "construction": [
      "Pistón amortiguador micro-hidráulico o celda elastomérica de poliuretano de alta densidad",
      "Guías lineales de bolas recirculantes con precarga de precisión",
      "Poleas de reenvío con rodamientos sellados de doble hilera",
      "Soportes de montaje rígidos fijados al chasis de fundición de acero de la máquina"
    ],
    "howItWorks": [
      "1. El servomotor envía un impulso de alta corriente para desplazar el bastidor a gran velocidad.",
      "2. El pantógrafo se traslada rápidamente hacia la nueva coordenada cartesiana.",
      "3. Al frenar en el punto exacto de clavado de la aguja, la inercia intenta seguir moviendo el bastidor.",
      "4. El amortiguador de balanceo absorbe la energía cinética instantáneamente.",
      "5. El bastidor se detiene con rigidez absoluta en milésimas de segundo.",
      "6. La aguja penetra con precisión nanométrica exactamente en el píxel programado."
    ],
    "mainTypes": [
      "Amortiguadores Hidráulicos Miniatura de Desaceleración Lineal",
      "Topes Amortiguadores Elastoméricos de Nitrilo (Bumpers mecánicos)",
      "Control de Amortiguación Dinámica Electrónica (Freno regenerativo por servomotores)"
    ],
    "advantages": [
      "✔ Elimina bordes temblorosos o serruchados en columnas de letras pequeñas",
      "✔ Protege las correas de distribución de desgastes prematuros o saltos de diente",
      "✔ Reduce el ruido estructural y los temblores en la mesa de trabajo del taller",
      "✔ Garantiza la perfecta concentricidad en círculos y siluetas geométricas"
    ],
    "limitations": [
      "En máquinas hogareñas compactas la amortiguación depende exclusivamente del ajuste de las correas y poleas.",
      "Los amortiguadores mecánicos requieren inspección periódica de estanqueidad cada dos años."
    ],
    "commonErrors": [
      "❌ Cargar bastidores gigantescos con prendas pesadas (como camperas gruesas) a más de 950 PPM continuas.",
      "❌ No ajustar la tensión de las correas del pantógrafo provocando rebotes mecánicos.",
      "❌ Utilizar bordadoras sobre mesas endebles o pisos desparejos que aumentan las vibraciones."
    ],
    "troubleshootingTips": [
      "Si las letras pequeñas salen con contornos vibrados o torcidos: Reduzca la velocidad de costura en 100 PPM y verifique la firmeza del soporte del pantógrafo.",
      "Si se escucha un golpe seco al hacer saltos largos de desplazamiento: Inspeccione los topes de amortiguación al final del riel del eje X y lubrique las guías lineales."
    ],
    "dicaArtrelados": "¡Para lograr letras chiquitas que parezcan impresas con láser! Cuando borde nombres de 4 a 6 mm en chombas o guardapolvos, baje la velocidad a 600 PPM. El pantógrafo frena con calma, no vibra absolutamente nada y las letritas salen tan limpias y legibles que sorprenderán a sus clientes.",
    "voceSabia": "¡En las bordadoras industriales de 20 cabezales, el pantógrafo completo puede pesar más de 250 kilogramos y es capaz de frenar en seco en 0,02 segundos gracias a potentes sistemas mecatrónicos de compensación inercial!",
    "practicalExercise": "Borde una cuadrícula de líneas paralelas finas de 1 mm a 900 PPM y otra idéntica a 650 PPM. Compare con una lupa: a 650 PPM las líneas son rectas perfectas, mientras que a alta velocidad las vibraciones crean diminutas ondulaciones en los bordes.",
    "quickSummary": "Dispositivo mecánico que atenúa las vibraciones e inercias del pantógrafo para lograr trayectorias suaves, firmes y líneas de bordado sin distorsiones.",
    "imageCaption": "Amortiguador hidráulico de desaceleración montado en el riel cartesiano del pantógrafo de una bordadora.",
    "relatedTerms": [
      "Pantógrafo de Bordadora",
      "Servomotor de Ejes X e Y",
      "Velocidad de Bordado (PPM)",
      "Vibración Mecánica y Estabilidad de Chasis"
    ],
    "applications": [
      "Bordado de alta velocidad en máquinas industriales multicabezal.",
      "Bordados con bastidores grandes de colchas, mantas y banderas pesadas.",
      "Letras minúsculas de alta definición en camisas corporativas."
    ],
    "recommendedSettings": {
      "speedPPM": "650 a 750 PPM para máxima nitidez de texto",
      "needleType": "Universal o punta bola según tejido",
      "stabilizer": "Estabilizador firme",
      "density": "Estándar",
      "threadTension": "Normal de trabajo"
    }
  },
  "a-106-amortecedor-borracha-barra-agulha-anel-batente": {
    "term": "Amortiguador de Goma de la Barra de Aguja / Anillo de Tope de Impacto (Needle Bar Buffer)",
    "level": "Avanzado 🔴",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín admortire (atenuar el golpe) y del francés bague (anillo de tope). Pieza de precisión mecatrónica del cabezal de costura.",
    "summary": "Anillo elastomérico montado en la barra de aguja que amortigua el choque mecánico en el punto muerto superior durante el ciclo alternativo.",
    "definition": "El amortiguador de goma de la barra de aguja y anillo batiente de impacto (Needle Bar Rubber Cushion & Stop Ring Buffer) es un microanillo o arandela de caucho sintético de nitrilo (NBR) o poliuretano vulcanizado colocado sobre la barra de aguja, entre el bloque reciprocador y el buje guía superior del cabezal. Su función mecánica es absorber la energía de choque y disipar las ondas sonoras provocadas cuando la barra alcanza el punto muerto superior (PMS) a más de 1.000 golpes por minuto, evitando el desgaste por fatiga de metales y reduciendo el ruido estridente del cabezal.",
    "technicalDetails": "A 1.000 PPM, cada barra de aguja cambia de sentido de movimiento 2.000 veces por minuto experimentando violentas deceleraciones de parada y arranque. Sin un anillo elastomérico de dureza Shore A 70-80, el choque metal con metal no solo generaría un ruido ensordecedor en el taller, sino que transferiría micro-vibraciones directas al tornillo de sujeción de la aguja, provocando que se afloje en plena costura o desgastando los bujes de bronce sinterizado.",
    "beginnerExplanation": "Es un pequeño arito o gomita suave colocada alrededor de la barra de metal que sostiene la aguja, justo adentro de la máquina. Cuando la aguja sube a toda velocidad, esta gomita hace de almohadilla para que el metal no golpee contra el metal con cada puntada. Así la máquina hace mucho menos ruido y sus piezas no se desgastan.",
    "construction": [
      "Anillo toroidal de caucho sintético nitrílico (NBR) o silicona de alta resiliencia",
      "Arandela metálica espaciadora rectificada de acero cementado",
      "Traba de retención elástica en ranura mecanizada de la barra de aguja",
      "Resistencia certificada al aceite lubricante caliente y temperaturas de hasta 120 °C"
    ],
    "howItWorks": [
      "1. La barra de aguja es impulsada hacia arriba por el mecanismo reciprocador excéntrico.",
      "2. Al llegar a la cúspide de su carrera ascendente, el anillo amortiguador hace contacto contra el tope del buje.",
      "3. El caucho se comprime milimétricamente absorbiendo el impacto cinético.",
      "4. La barra invierte su dirección hacia abajo de forma suave y sin rebotes metálicos.",
      "5. El movimiento alternativo se mantiene silencioso, fluido y preciso durante millones de puntadas."
    ],
    "mainTypes": [
      "Anillo O-Ring Amortiguador Simple (Para bordadoras familiares y semiprofesionales)",
      "Tope Compuesto con Arandela de Fricción (Para cabezales industriales de alta resistencia)",
      "Amortiguador de Poliuretano Termoplástico Moldeado (De larga vida útil)"
    ],
    "advantages": [
      "✔ Reduce de manera notable el nivel de decibelios y ruidos mecánicos en el taller",
      "✔ Previene el aflojamiento espontáneo del tornillo prensor de aguja",
      "✔ Evita microfisuras por fatiga mecánica en la barra de aguja y la biela",
      "✔ Alarga la vida útil de los bujes de bronce del cabezal de bordado"
    ],
    "limitations": [
      "Con los años de trabajo el caucho puede resecarse, endurecerse o romperse debido al aceite y al calor; debe reemplazarse en los servicios de mantenimiento.",
      "Un amortiguador degradado genera un golpeteo seco metálico característico en el cabezal."
    ],
    "commonErrors": [
      "❌ Retirar el anillo de goma durante una limpieza profunda y olvidar volver a colocarlo.",
      "❌ Utilizar gomas comunes o arandelas plásticas caseras que se deshacen con el aceite mineral.",
      "❌ No reemplazar anillos resecos que ya perdieron su elasticidad y parecen plástico duro."
    ],
    "troubleshootingTips": [
      "Si un cabezal de su máquina hace un golpeteo metálico mucho más ruidoso que los demás: Retire la tapa frontal e inspeccione el anillo de goma de la barra de aguja; probablemente esté roto o partido.",
      "Si el tornillo de aguja se afloja solo continuamente mientras borda: Revise la amortiguación superior de la barra; el exceso de vibración es la causa número uno de este problema."
    ],
    "dicaArtrelados": "¡El secreto de un taller sereno y sin ruidos ensordecedores! En cada mantenimiento técnico preventivo anual, solicite el cambio de los aritos de goma de las barras de aguja. La máquina bordará con un zumbido suave y parejito, como si fuera un auto cero kilómetro recién salido de fábrica.",
    "voceSabia": "¡El reemplazo de estos pequeños anillos de goma que cuestan apenas unos centavos evita reparaciones costosas de cambio de barras de aguja y bielas que pueden superar cientos de dólares!",
    "practicalExercise": "Encienda su máquina a 800 PPM y escuche atentamente el sonido del cabezal. Un sonido rítmico, metálico suave y amortiguado indica que los topes de impacto están sanos y en perfecto funcionamiento.",
    "quickSummary": "Anillo amortiguador de caucho en la barra de aguja que atenúa los impactos mecánicos superiores, reduciendo el ruido y previniendo el desgaste.",
    "imageCaption": "Despiece técnico del cabezal mostrando el anillo amortiguador de goma ubicado en la barra de aguja.",
    "relatedTerms": [
      "Barra de Aguja de Bordado",
      "Reciprocador de Aguja",
      "Mantenimiento Preventivo de la Bordadora",
      "Aceite Mineral Blanco para Bordadora"
    ],
    "applications": [
      "Componente interno de todos los cabezales de bordadoras hogareñas, semiprofesionales e industriales.",
      "Mantenimiento de reducción acústica en talleres urbanos y locales comerciales.",
      "Prevención de roturas en producciones de alta velocidad a tres turnos."
    ],
    "recommendedSettings": {
      "speedPPM": "Apto para todas las velocidades (hasta 1.200 PPM)",
      "needleType": "No aplica (pieza mecánica interna)",
      "stabilizer": "No aplica",
      "density": "No aplica",
      "threadTension": "No aplica"
    }
  },
  "a-016-amortecedor-de-calcador": {
    "term": "Amortiguador de Prensatelas y Regulación de Presión (Presser Foot Spring & Cushion Adjustment)",
    "level": "Intermedio 🟡",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín admortire (atenuar) y del latín calcare (pisar firmemente). Mecanismo de suspensión por resorte desarrollado para estabilizar telas compresibles bajo la acción de la aguja.",
    "summary": "Resorte de suspensión y tornillo regulador que gradúa la fuerza con que el pie prensatelas sujeta la tela contra la placa sin aplastar las fibras.",
    "definition": "El amortiguador y regulador de prensatelas (Presser Foot Spring & Cushion Adjustment / Foot Pressure Regulator) es el conjunto mecánico compuesto por un resorte helicoidal de compresión, una barra guía y un dial o tornillo micrométrico ubicado en la parte superior del cabezal de bordado. Su propósito es regular dinámicamente la fuerza vertical descendente ejercida por el pie prensatelas para sujetar la tela contra la placa de aguja en el momento exacto en que la aguja sube, evitando que la tela se levante con ella (efecto flagging) pero sin ejercer una presión desmedida que estrangule tejidos voluminosos.",
    "technicalDetails": "La fuerza de presión del resorte del prensatelas oscila entre 1,5 y 4,5 kgf dependiendo del tipo de tejido. En telas acolchadas o toallas, una presión excesiva aplasta el rizo de la felpa y frena el movimiento del pantógrafo provocando saltos de puntada; por el contrario, una presión demasiado débil permite que la tela rebote hacia arriba siguiendo la aguja, lo que impide la correcta apertura de la lazada e induce saltos de puntada continuos.",
    "beginnerExplanation": "Es el resorte que empuja hacia abajo el piecito de metal que sostiene la tela. Si bordás una toalla mullida o una tela con guata, no podés apretarla como si fuera un papel; tiene que estar lo suficientemente ajustado para que la tela no salte cuando la aguja sube, pero lo bastante suave para que el bastidor se mueva libremente sin frenarse.",
    "construction": [
      "Resorte helicoidal de acero templado al carbono de compresión progresiva",
      "Tornillo de ajuste micrométrico o dial de escala numérica en la carcasa superior",
      "Barra de presión cilíndrica rectificada conectada al balancín excéntrico",
      "Tope limitador de altura mínima de descenso de seguridad"
    ],
    "howItWorks": [
      "1. La bordadora evalúa el grosor del material montado en el bastidor (ejemplo: polar grueso o batista fina).",
      "2. Gira el dial o tornillo de ajuste superior para incrementar o relajar la compresión del resorte.",
      "3. La máquina borda: al descender la aguja, el prensatelas baja y el resorte amortigua el contacto.",
      "4. El resorte mantiene la tela plana contra la placa mientras la aguja sube formando la lazada.",
      "5. El prensatelas se eleva 1 mm para liberar la tela permitiendo que el pantógrafo avance al siguiente punto."
    ],
    "mainTypes": [
      "Regulación Manual por Dial Superior (Presente en máquinas hogareñas y semiprofesionales)",
      "Regulación Digital Neumática / Electrónica (Bordadoras industriales de última generación)",
      "Resorte Amortiguador de Acción Rápida para Bordado 3D en Goma EVA"
    ],
    "advantages": [
      "✔ Previene saltos de puntada causados por el rebote de la tela (Flagging)",
      "✔ Evita aplastar o marcar telas delicadas como terciopelo, raso o toalla afelpada",
      "✔ Permite bordar con comodidad materiales con relieve grueso como goma EVA o acolchados",
      "✔ Asegura la formación uniforme y constante de la lazada en el garfio rotativo"
    ],
    "limitations": [
      "Una presión mal calibrada puede dejar marcas de rozamiento permanentes en telas brillantes.",
      "No reemplaza el ajuste de altura milimétrica del prensatelas."
    ],
    "commonErrors": [
      "❌ Dejar la presión al máximo para bordar toallas afelpadas aplastando el tejido.",
      "❌ Dejar el resorte completamente flojo en telas densas provocando que la tela se levante con la aguja.",
      "❌ Olvidar reajustar el dial al cambiar de un tejido muy grueso a una tela muy fina."
    ],
    "troubleshootingTips": [
      "Si la máquina salta puntadas continuamente en telas elásticas o esponjosas: Aumente la presión del resorte girando el dial media vuelta hacia el sentido horario para fijar mejor la tela.",
      "Si el pie prensatelas deja un brillo circular o marca en la tela: Afloje el tornillo de regulación para reducir la presión de compresión sobre la prenda."
    ],
    "dicaArtrelados": "¡El truco maestro para saber si la presión del prensatelas está perfecta! Con la máquina apagada y la aguja en su punto más bajo, intente mover suavemente la tela con los dedos dentro del bastidor: debe sentirse firme sin levantarse, pero si pasa una hoja de papel doblada entre el prensatelas y la tela, debe poder deslizarse con leve resistencia. ¡Ese es el equilibrio ideal!",
    "voceSabia": "¡En las bordadoras industriales de última generación, sensores piezoeléctricos leen el grosor del tejido en tiempo real y ajustan la presión del resorte en milisegundos mediante actuadores electrónicos!",
    "practicalExercise": "Tome una muestra de toalla gruesa. Borde un círculo con la presión al máximo y otro aflojando el tornillo a la mitad. Observe cómo en el segundo el rizo esponjoso de la toalla conserva todo su volumen y esponjosidad original.",
    "quickSummary": "Mecanismo de resorte regulable que controla la fuerza de presión del pie prensatelas sobre la tela para evitar saltos de puntada y marcas por aplastamiento.",
    "imageCaption": "Dial de regulación superior y resorte amortiguador del prensatelas en el cabezal de bordado.",
    "relatedTerms": [
      "Pie Prensatelas de Bordado",
      "Ajuste de Altura del Prensatelas para Telas Gruesas",
      "Efecto Rebote de Tela (Flagging)",
      "Formación de la Lazada y Garfio Rotativo"
    ],
    "applications": [
      "Bordado de toallas de baño, albornoces y sábanas de franela.",
      "Bordado 3D con relieve en gorras y camperas con espuma de goma EVA.",
      "Telas delicadas de seda, raso y satén de fiesta susceptibles a marcas."
    ],
    "recommendedSettings": {
      "speedPPM": "650 a 800 PPM",
      "needleType": "75/11 Punta de Bola",
      "stabilizer": "Entretela recortable o rasgable según tejido",
      "density": "Estándar de matriz",
      "threadTension": "Normal equilibrada"
    }
  },
  "a-044-amortecedor-de-linha-mola-puxa-fio": {
    "term": "Resorte Amortiguador Tira-Hilos (Check Spring)",
    "level": "Avanzado 🔴",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín admortire (suavizar) y del inglés técnico textil check spring / take-up spring. Componente vital del sistema de tensión superior presente desde las primeras máquinas de coser mecánicas del siglo XIX.",
    "summary": "Pequeño resorte elástico ubicado en el conjunto tensor que absorbe el tirón brusco de la palanca tira-hilos y mantiene la línea tensa durante la lazada.",
    "definition": "El resorte amortiguador tira-hilos (denominado técnicamente Check Spring, Muelle de Compensación o Resorte Tira-Hilos) es un fino resorte espiral de acero de alta flexibilidad montado concéntricamente en el conjunto tensor del hilo superior. Su función es amortiguar la aceleración violenta que sufre el hilo cuando la palanca tira-hilos sube a toda velocidad, manteniendo el hilo bajo una suave tensión constante para que no quede flojo ni forme bucles hasta que la punta de la aguja penetre en la tela.",
    "technicalDetails": "El resorte tiene un recorrido angular limitado de 6 a 10 mm por un tope metálico de apoyo. Si el resorte está roto, vencido o mal calibrado, el hilo se destensa por completo durante el descenso de la aguja, lo que provoca bucles en el frente de la prenda (efecto pájaro carpintero), nudos en el garfio rotativo y la activación errónea de los sensores de corte de hilo por fluctuación de tensión.",
    "beginnerExplanation": "Es ese alambrecito flexible y finito como un rulito que se mueve arriba y abajo cada vez que pasa el hilo por los platillos de tensión. Parece una piecita insignificante, pero es el guardián de la costura: absorbe los tirones bruscos para que el hilo no se corte y no se afloje cuando la máquina cose a mil puntadas por minuto.",
    "construction": [
      "Resorte de alambre de acero armónico sueco de 0,4 a 0,6 mm de espesor",
      "Tope limitador de recorrido angular graduado en grados",
      "Tornillo de fijación sobre el eje central del tensor de hilo",
      "Brazo terminal acodado con lazo pulido o ranura abierta de enhebrado rápido"
    ],
    "howItWorks": [
      "1. La palanca tira-hilos sube para cerrar la puntada anterior generando un tirón en el hilo.",
      "2. El resorte amortiguador cede flexionándose hacia arriba para absorber el impacto elástico.",
      "3. La palanca desciende para suministrar hilo fresco a la aguja.",
      "4. El resorte recupera su posición empujando el hilo hacia abajo para evitar que se desvíe o quede flojo.",
      "5. Cuando la aguja penetra en la tela, el resorte hace tope, permitiendo que la aguja reciba el hilo con tensión precisa.",
      "6. Este ciclo armónico se repite hasta 1.000 veces por minuto."
    ],
    "mainTypes": [
      "Resorte Tira-Hilos de Ranura Abierta (Enhebrado directo sin pasar por el orificio)",
      "Resorte de Bucle Cerrado (Mayor seguridad para hilos metálicos y filamentos especiales)",
      "Muelle Tensor de Doble Acción para Máquinas Industriales Multicabezal"
    ],
    "advantages": [
      "✔ Previene la rotura prematura de hilos finos (como hilo 60wt para letras chicas)",
      "✔ Elimina la formación de bucles flojos y nidos de pájaro en el revés de la prenda",
      "✔ Assegura la estabilidad y precisión de los sensores electrónicos de rotura de hilo",
      "✔ Permite bordar con hilos metálicos difíciles sin que se descarrilen de los tensores"
    ],
    "limitations": [
      "Es una pieza propensa a la fatiga mecánica; con millones de puntadas pierde elasticidad y debe reemplazarse.",
      "Una suciedad de pelusa acumulada en su interior puede frenar su movimiento libre."
    ],
    "commonErrors": [
      "❌ Omitir pasar el hilo por el resorte durante el enhebrado superior.",
      "❌ Doblar el alambre con las manos o con tijeras al desarmar una maraña de hilo.",
      "❌ Dejar pelusas y restos de hilo enroscados en el eje del resorte.",
      "❌ Apretar el tornillo de sujeción sin dejar el juego libre de 8 mm reglamentario."
    ],
    "troubleshootingTips": [
      "Si la máquina forma bucles flojos en la superficie de la tela en bordados rápidos: Verifique si el resorte amortiguador se mueve con vitalidad; si está inmóvil o caído, está roto o trabado con pelusa.",
      "Si el sensor de rotura de hilo pita constantemente pero el hilo está entero: La tensión del resorte está demasiado floja y no activa el disco sensor; aumente la precarga del resorte un cuarto de vuelta."
    ],
    "dicaArtrelados": "¡La prueba casera para verificar el resorte en un segundo! Tome el hilo enhebrado antes de que entre a la aguja y tire suavemente de él con la mano: debe ver cómo el pequeño resorte baja unos milímetros y vuelve a subir elástico como un trampolín. Si se queda quieto o no vuelve rápido, ¡limpie con un pincel el tensor o cambie el resorte!",
    "voceSabia": "¡Este ingenioso resortito fue patentado a mediados del siglo XIX por Elias Howe e Isaac Singer, y su geometría mecánica básica sigue siendo idéntica en las bordadoras computarizadas más avanzadas del siglo XXI!",
    "practicalExercise": "Con la máquina enhebrada y sin coser, tire despacio del hilo desde la aguja y observe cómo actúa el resorte amortiguador. Notará la suavidad con la que absorbe la fuerza, protegiendo al hilo de romperse ante cualquier tirón imprevisto.",
    "quickSummary": "Pequeño resorte elástico en el conjunto tensor que absorbe los tirones de la palanca y mantiene el hilo tenso y ordenado durante todo el ciclo de bordado.",
    "imageCaption": "Detalle del conjunto tensor superior señalando el resorte amortiguador tira-hilos (Check Spring) en plena acción elástica.",
    "relatedTerms": [
      "Conjunto Tensor del Hilo Superior",
      "Palanca Tira-Hilos (Take-up Lever)",
      "Sensor Electrónico de Rotura de Hilo",
      "Rotura de Hilo y Tensión Inadecuada"
    ],
    "applications": [
      "Componente esencial en cada una de las agujas de máquinas bordadoras industriales y hogareñas.",
      "Bordados con hilos metálicos y de rayón propensos a deshilacharse por tirones.",
      "Bordado de alta velocidad en producción seriada continua."
    ],
    "recommendedSettings": {
      "speedPPM": "Apto para todas las velocidades",
      "needleType": "Cualquier calibre de aguja",
      "stabilizer": "No aplica (mecanismo de enhebrado)",
      "density": "No aplica",
      "threadTension": "Regulación de resorte: 8 a 10 mm de recorrido libre"
    }
  },
  "a-070-amortecedor-de-linha": {
    "term": "Muelle Compensador de Hilo / Tensor Amortiguador (Take-up Spring / Check Spring)",
    "level": "Avanzado 🔴",
    "category": "Agujas y Hilos",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín admortire (atenuar el impacto) y del inglés técnico textil take-up spring / check spring. Desarrollado para garantizar la estabilidad de alimentación de hilo en bordado automatizado.",
    "summary": "Dispositivo de amortiguación de tensión que mantiene la reserva de hilo estirada para evitar enredos en el ojo de la aguja y en el garfio.",
    "definition": "El muelle compensador de hilo (Take-up Spring / Auxiliary Thread Buffer) es el mecanismo de resorte de torsión o ballesta auxiliar integrado en la trayectoria del hilo superior entre el disco tensor primario y la palanca tira-hilos. Su cometido técnico es gestionar la holgura dinámica (slack thread) que se produce en el momento en que la palanca tira-hilos desciende a su posición más baja, impidiendo que el hilo sobrante caiga en bucle sobre la placa de aguja o se enrede alrededor de la punta antes de la penetración.",
    "technicalDetails": "La calibración del muelle compensador contempla dos variables fundamentales: la carrera de desplazamiento (Stroke, graduada entre 7 y 11 mm) y la fuerza elástica de precarga (Tension, ajustada entre 5 y 15 gramos-fuerza mediante el giro del eje ranurado central). Un muelle con carrera demasiado corta no logra retener el hilo flojo en tejidos gruesos; por el contrario, una precarga excesiva genera tensión suplementaria indeseada que induce roturas en hilos finos de bordar 50wt o 60wt.",
    "beginnerExplanation": "Imagínese sostener una manguera de regar: si de repente abre y cierra la canilla muy rápido, la manguera se sacude para todos lados. Este muelle es como un brazo elástico que recoge la 'pancita' de hilo que sobra cada vez que la máquina da una puntada, manteniéndolo siempre derechito y listo para que entre perfecto por el ojo de la aguja.",
    "construction": [
      "Muelle espiral de torsión en alambre de aleación de níquel-cromo o acero inoxidable",
      "Eje de fijación ranurado para graduación micrométrica con destornillador plano",
      "Disco de tope y graduación de carrera angular en grados sexagesimales",
      "Ojo guía cerámico o de alambre pulido para mínimo coeficiente de rozamiento"
    ],
    "howItWorks": [
      "1. El hilo sale de los discos de tensión y se engancha en el lazo del muelle compensador.",
      "2. Cuando la palanca tira-hilos baja, el muelle sube elásticamente absorbiendo el hilo flojo sobrante.",
      "3. La aguja desciende y penetra el tejido en un hilo perfectamente alineado y sin desvíos.",
      "4. En el instante en que el garfio rotativo captura la lazada inferior, el muelle hace tope en su límite inferior.",
      "5. El hilo queda firme y la lazada se forma con claridad milimétrica en el revés.",
      "6. La palanca tira-hilos sube, el muelle se recarga elásticamente y el ciclo recomienza."
    ],
    "mainTypes": [
      "Muelle Compensador Integrado en Conjunto Tensor Frontal (Estándar en bordadoras familiares)",
      "Muelle Tensor Auxiliar Individual por Cabezal (Máquinas multicabezal industriales)",
      "Sistema de Compensación Neumática / Sensorizada para Hilos Metálicos"
    ],
    "advantages": [
      "✔ Garantiza lazadas uniformes sin importar las fluctuaciones de velocidad de la máquina",
      "✔ Evita que el hilo salte fuera de las guías intermedias durante giros bruscos del pantógrafo",
      "✔ Previene el deshebrado accidental al inicio de un nuevo bloque de color",
      "✔ Protege la integridad estructural de hilos delicados de seda, rayón y lúrex metálico"
    ],
    "limitations": [
      "La acumulación de polvo y aceites secos puede frenar su pivoteo libre.",
      "Requiere calibración precisa si se cambia de hilos estándar (40wt) a hilos muy gruesos (12wt o lana)."
    ],
    "commonErrors": [
      "❌ Girar el eje de calibración a la fuerza sin aflojar previamente el tornillo prisionero lateral.",
      "❌ Confundir este mecanismo con el tornillo de tensión principal apretándolo sin necesidad.",
      "❌ No revisar su estado cuando se producen roturas constantes de hilo en una sola aguja."
    ],
    "troubleshootingTips": [
      "Si el hilo se deshebra solo de la aguja al comenzar a bordar: Aumente la carrera del muelle compensador para que absorba mejor el tirón inicial del corte de hilo.",
      "Si el hilo se corta deshilachado con aspecto de pelusa: El muelle tiene demasiada fuerza de precarga; afloje un octavo de vuelta el eje ranurado con un destornillador."
    ],
    "dicaArtrelados": "¡El chequeo que salva producciones enteras! Cuando una aguja de su máquina empiece a cortar hilo cada dos minutos y ya cambió la aguja y la bobina sin éxito: ¡mire el muelle compensador! Si se trabó con una basurita de hilo o pelusa, basta limpiarlo y volverá a coser suave y perfecto como el primer día.",
    "voceSabia": "¡La precisión del muelle compensador es tan crítica que en las máquinas de bordado industrial que operan a 1.200 PPM, este alambrecito se flexiona y recupera más de 72.000 veces por hora ininterrumpidamente!",
    "practicalExercise": "Enhebre una aguja y tome el hilo justo por encima de la palanca tira-hilos. Mueva el hilo con la mano hacia arriba y abajo y observe cómo el muelle compensador baila con agilidad manteniendo la hebra tensa. Esa danza es la que permite un bordado sin enredos.",
    "quickSummary": "Resorte de compensación de tensión que gestiona el sobrante dinámico de hilo durante la puntada para evitar nudos y deshebrados en el ojo de la aguja.",
    "imageCaption": "Vista ampliada del muelle compensador de hilo operando en conjunto con los discos tensores de una máquina de bordar.",
    "relatedTerms": [
      "Resorte Amortiguador Tira-Hilos (Check Spring)",
      "Palanca Tira-Hilos (Take-up Lever)",
      "Conjunto Tensor del Hilo Superior",
      "Garfio Rotativo y Lazada"
    ],
    "applications": [
      "Regulación fina en bordadoras industriales de 1 a 15 agujas por cabezal.",
      "Bordado de hilos metálicos lúrex, hilos de rayón viscosa y filamentos reflectivos.",
      "Ajuste para bordados de alta velocidad en telas elásticas y prendas armadas."
    ],
    "recommendedSettings": {
      "speedPPM": "Apto para todas las velocidades",
      "needleType": "Compatible con todos los tipos de aguja",
      "stabilizer": "No aplica",
      "density": "No aplica",
      "threadTension": "Carrera recomendada de 8 a 10 mm con 10 gf de precarga"
    }
  },
  "a-079-amortecedor-de-vibra-o-de-base-de-m-quina-anti-vibration-mounts-leveling-pads": {
    "term": "Tacos Antivibratorios y Soportes Niveladores de Base (Anti-Vibration Mounts & Leveling Pads)",
    "level": "Avanzado 🔴",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva masculina.",
    "origin": "Del latín admortire (atenuar) y vibratio (oscilación). Elementos de aislamiento elastodinámico adoptados para mitigar la resonancia estructural de máquinas textiles pesadas sobre pisos industriales y muebles de taller.",
    "summary": "Patas de goma vulcanizada o poliuretano con tornillo de nivelación que aíslan las vibraciones del chasis, estabilizando la máquina y eliminando ruidos molestos.",
    "definition": "Los tacos antivibratorios y soportes niveladores de base (Anti-Vibration Machine Mounts & Leveling Pads) son pies mecánicos desacopladores fijados a la estructura inferior del chasis o mesa soporte de la bordadora. Están formados por una base circular de caucho elastomérico de alta densidad (nitrilo o neopreno vulcanizado) unida a un vástago roscado de acero galvanizado con tuerca de bloqueo. Su objetivo es aislar la energía oscilatoria generada por las masas desbalanceadas en rotación y por el movimiento de vaivén del pantógrafo a alta velocidad, impidiendo que las vibraciones se transmitan a la mesa, al piso o a las estructuras edilicias del taller.",
    "technicalDetails": "Una máquina de bordar industrial o semiprofesional de cabezal múltiple genera una doble fuente de vibración: una oscilación armónica de alta frecuencia (producida por el eje principal a 15-20 Hz) y una oscilación inercial de baja frecuencia pero gran amplitud (originada por los cambios bruscos de sentido del pantógrafo X-Y). Los tacos antivibratorios con dureza Shore A de 60 a 70 y frecuencia propia inferior a 8 Hz proporcionan un coeficiente de aislamiento superior al 85%, garantizando una nivelación horizontal con tolerancia menor a 0,5 mm por metro en nivel de burbuja de precisión.",
    "beginnerExplanation": "Son como las patas de goma pesadas que se le ponen a un lavarropas para que no 'baile' ni camine por el piso cuando centrifuga. En una máquina de bordar, estas patas sostienen todo el peso sobre una base de goma especial que se puede subir o bajar girando una tuerca para dejar la máquina bien derechita, nivelada y sin que tiemble la mesa cuando borda a fondo.",
    "construction": [
      "Base de elastómero vulcanizado de alta resiliencia (neopreno o caucho nitrílico de 20 a 30 mm de grosor)",
      "Perno roscado de acero de alta resistencia M12 a M20 con tuerca y contratuerca de bloqueo",
      "Campana metálica superior de protección contra goteos de aceite mineral",
      "Placa de apoyo inferior estriada antideslizante con alto coeficiente de fricción estática"
    ],
    "howItWorks": [
      "1. Se instalan los cuatro tacos antivibratorios en las esquinas de la base del chasis o mesa de la máquina.",
      "2. Con un nivel de burbuja de precisión sobre la placa de aguja, se ajustan las tuercas de cada pata hasta nivelar los ejes X e Y a 0 grados.",
      "3. Se aprietan las contratuercas para sellar la altura alcanzada.",
      "4. Al bordar a alta velocidad, el caucho absorbe y disipa las oscilaciones mecánicas en forma de micro-energía térmica.",
      "5. La mesa y el piso permanecen inmóviles, sin ruidos molestos y protegiendo la electrónica interna de la bordadora."
    ],
    "mainTypes": [
      "Tacos Antivibratorios Niveladores con Perno Roscado de Acero (Estándar para máquinas industriales)",
      "Alfombrillas Amortiguadoras de Goma Eva / Neopreno para Máquinas Familiares de Mesa",
      "Soportes con Amortiguación Neumática por Cámara de Aire (Para bordadoras pesadas en pisos altos)"
    ],
    "advantages": [
      "✔ Elimina vibraciones que distorsionan contornos y provocan fallas de registro en matrices",
      "✔ Reduce drásticamente la transmisión de ruidos y zumbidos hacia habitaciones o vecinos linderos",
      "✔ Previene el aflojamiento espontáneo de tornillos, conectores electrónicos y placas de control",
      "✔ Evita que la máquina 'camine' o se desplace sobre la mesa durante bordados pesados"
    ],
    "limitations": [
      "Deben revisarse periódicamente con nivel de burbuja para compensar asentamientos del suelo.",
      "No deben apoyarse sobre pisos flexibles de madera sin colocar una placa de distribución de carga."
    ],
    "commonErrors": [
      "❌ Usar la bordadora sobre mesas plegables o escritorios livianos que tiemblan con cada puntada.",
      "❌ No ajustar la contratuerca dejando que el perno roscado se mueva libremente con la vibración.",
      "❌ Dejar una de las cuatro patas sin contacto firme en el suelo, provocando cabeceo en la máquina."
    ],
    "troubleshootingTips": [
      "Si la máquina tiembla tanto que los conos de hilo caen del porta-conos: Coloque tacos de goma antivibratorios de al menos 20 mm de espesor bajo la mesa y nivele con exactitud.",
      "Si se transmiten ruidos molestos al piso inferior del edificio: Coloque una alfombra densa de caucho reciclado debajo de los tacos para absorber el sonido de impacto estructural."
    ],
    "dicaArtrelados": "¡El secreto para cuidar su espalda y su máquina! Si tiene su bordadora sobre una mesa común de madera, coloque debajo de cada pata un taco de goma gruesa o una alfombrilla antivibratoria de neopreno. ¡El ruido del taller bajará a la mitad, la mesa no temblará y las letras pequeñas saldrán mucho más nítidas y derechitas!",
    "voceSabia": "¡En las fábricas de confección instaladas en pisos superiores de edificios comerciales, el uso de soportes antivibratorios homologados es obligatorio por ley para no dañar las losas de hormigón con las frecuencias de resonancia de decenas de máquinas bordando al unísono!",
    "practicalExercise": "Coloque un vaso de agua transparente sobre la mesa junto a su máquina. Borde a 850 PPM y observe la superficie del agua: si se forman olas y remolinos intensos, su mesa necesita urgentemente tacos antivibratorios niveladores.",
    "quickSummary": "Patas de goma antivibratoria con tornillo nivelador que absorben sacudidas y zumbidos, dejando la bordadora firme, nivelada y silenciosa.",
    "imageCaption": "Taco antivibratorio de goma con perno roscado instalado en la base metálica del bastidor de una máquina de bordar.",
    "relatedTerms": [
      "Chasis y Estructura de la Bordadora",
      "Amortiguador de Balanceo de Pantógrafo",
      "Vibración Mecánica y Estabilidad de Chasis",
      "Mantenimiento Preventivo de la Bordadora"
    ],
    "applications": [
      "Instalación y nivelación de máquinas industriales de 1 a 8 cabezales.",
      "Aislamiento acústico de talleres de bordado instalados en departamentos o locales comerciales.",
      "Estabilización de mesas soporte de bordadoras familiares y semiprofesionales."
    ],
    "recommendedSettings": {
      "speedPPM": "Apto para todas las velocidades",
      "needleType": "No aplica (accesorio de soporte y base)",
      "stabilizer": "No aplica",
      "density": "No aplica",
      "threadTension": "Nivelación exacta con nivel de burbuja a 0°"
    }
  }
};

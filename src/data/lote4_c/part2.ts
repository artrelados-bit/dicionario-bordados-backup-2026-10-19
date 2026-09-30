import { Verbete } from "../../types";

export const LOTE4_C_PART2_ES: Record<string, Partial<Verbete>> = {
  "c-074-compensacao-dinamica-de-densidade-por-tamanho": {
    "term": "Compensación Dinámica de Densidad por Escala",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal femenina",
    "origin": "De los motores de regeneración paramétrica vectorial (Dynamic Density Scaling) introducidos en el software de bordado profesional para superar la limitación de los formatos de puntada pura.",
    "definition": "Capacidad algorítmica del software de diseño o del procesador de la máquina de bordar para recalcular automáticamente el número total de puntadas manteniendo constante el espaciado entre hilos (densidad) cuando un diseño se escala hacia arriba o hacia abajo, evitando que un diseño agrandado quede transparente o un diseño reducido se convierta en una masa sólida e impenetrable de hilo.",
    "howItWorks": [
      "1. En archivos de puntada fija (como .DST), si se agranda un diseño al 150%, las puntadas simplemente se separan, dejando ver la tela entre los hilos.",
      "2. Si se reduce al 70%, las puntadas se comprimen en el mismo espacio creando un nudo rígido que rompe agujas.",
      "3. La compensación dinámica de densidad analiza las formas vectoriales originales y regenera el cálculo matemático de puntadas.",
      "4. Al agrandar el diseño al 150%, el software añade automáticamente un 50% más de puntadas para mantener exactamente la misma cobertura suave de 0,40 mm.",
      "5. Al reducirlo al 70%, elimina proporcionalmente las puntadas sobrantes garantizando que la pieza conserve su flexibilidad sin atascar la máquina."
    ],
    "beginnerExplanation": "Es la magia que hace que puedas agrandar o achicar un dibujo sin arruinarlo. Si intentas agrandar una foto común en el teléfono, se pixela y se ve fea; en el bordado, si agrandas un dibujo sin esta función, las puntadas se separan y se ve la tela de fondo como una reja abierta. Con esta función inteligente, cuando agrandas el dibujo la computadora le agrega más puntadas automáticamente para que siga viéndose tupido y brillante; y cuando lo achicas, le quita puntadas para que no se haga una bola dura de hilo.",
    "practicalExamples": [
      "Ampliación de un escudo de pecho de 8 cm a 25 cm para la espalda de una campera de cuero.",
      "Reducción proporcional de un logotipo de 10 cm a 4 cm para bordar en el puño de una camisa fina.",
      "Adaptación del mismo diseño descargado para bastidores de diferentes tamaños sin perder calidad."
    ],
    "matrixParametersRelation": [
      "Límites seguros de reescalado: el rango óptimo de escalado paramétrico seguro se sitúa entre el 80% y el 120% del tamaño original.",
      "Ajuste proporcional de longitud de puntada: al escalar más allá del 130%, verificar que las puntadas no superen los 9 mm de largo.",
      "Mantenimiento del espaciado constante: mantiene fijo el valor de densidad programado (por ejemplo, 0,40 mm) independientemente de la escala física."
    ],
    "commonErrors": [
      "Escalar un archivo de puntada (.DST o .EXP) directamente en la pantalla de la máquina más de un 15% sin que la máquina tenga regeneración de puntadas, aplastando o abriendo el bordado.",
      "Achicar un diseño al 50% sin recalcular puntadas, convirtiendo las letras pequeñas en bloques duros que parten la aguja y troquelan la tela.",
      "Agrandar un diseño tatami al 200% sin verificar las puntadas de salto generadas."
    ],
    "troubleshootingTips": [
      "Realiza siempre el cambio de tamaño en tu software de computadora antes de enviar el archivo a la máquina para un recálculo vectorial perfecto.",
      "Si escalas un diseño más de un 20%, revisa visualmente las letras pequeñas: puede ser necesario cambiar de satín a puntada recta simple.",
      "Comprueba en la barra de estado de tu programa que al cambiar las medidas cambie también el número total de puntadas (Stitch Count)."
    ],
    "whenToAdjust": "Aplica la compensación dinámica cada vez que necesites adaptar el tamaño de una matriz para adaptarla a diferentes prendas o talles.",
    "dicaArtrelados": "El límite de seguridad del 10% Artrelados en la pantalla de la máquina: Aunque tu máquina te permita agrandar o achicar un dibujo tocando los botones de la pantalla, como regla de oro en el ateliê no lo cambies más de un 10% arriba o abajo directamente en la consola. Si necesitas cambiarlo más del 10%, ábrelo en tu programa de computadora: regenerará las puntadas desde cero y tu bordado mantendrá una calidad de fábrica inigualable.",
    "voceSabia": "¿Sabías que los primeros programas de bordado computarizado de 1980 cobraban miles de dólares extra por el módulo de compensación dinámica de escala porque requería procesadores matemáticos equivalentes a los usados en estaciones de trabajo aeroespaciales?",
    "practicalExercise": "Abre un diseño de 10.000 puntadas en tu software de digitalización. Agrándalo al 130% observando el contador de puntadas: fíjate cómo sube automáticamente a 13.000 puntadas demostrando que la compensación dinámica añadió el hilo necesario para mantener la cobertura perfecta.",
    "quickSummary": "Recálculo automático del número de puntadas al escalar un diseño para mantener la densidad y cobertura constantes.",
    "summary": "Recálculo automático del número de puntadas al escalar un diseño para mantener la densidad y cobertura constantes.",
    "relatedTerms": [
      "Densidad de Puntada",
      "Software de Ponchado y Digitalización",
      "Longitud de Puntada de Bordado",
      "Formato Tajima (.DST)"
    ]
  },
  "c-018-comprimento-de-salto": {
    "term": "Longitud de Salto de Puntada",
    "level": "Iniciante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés jump stitch length. Parámetro electromecánico de control de carrera del pantógrafo para desplazamientos no cosidos.",
    "definition": "Distancia máxima en milímetros que el pantógrafo de la máquina puede desplazarse en una sola coordenada entre dos penetraciones sucesivas sin que la aguja baje a clavar en la tela (típicamente calibrada entre 7 mm y 12 mm en máquinas modernas), por encima de la cual el sistema activa un comando de salto sin costura o ejecuta el corte automático de hilo.",
    "howItWorks": [
      "1. Cuando el diseño necesita trasladarse de una letra a la siguiente o entre figuras separadas, la máquina genera un código de salto (Jump Code).",
      "2. La aguja se detiene en su punto muerto superior mientras el mecanismo desembraga la barra de aguja o retiene el tirahilos.",
      "3. El pantógrafo desplaza el bastidor velozmente a máxima aceleración sobre las coordenadas X e Y.",
      "4. Si la distancia de salto supera el umbral configurado por el usuario (por ejemplo, más de 5 mm), el solenoide acciona las cuchillas cortahilos antes de iniciar el viaje.",
      "5. Si el salto es corto (menos de 2 mm), la máquina puede ejecutar pequeñas puntadas de viaje intermedias para no perder tiempo cortando y reanudando."
    ],
    "beginnerExplanation": "Es el 'salto largo' que pega el aro de la máquina cuando termina de bordar una letra y tiene que viajar por el aire para empezar la letra que sigue. Durante ese viaje en el aire, la aguja no clava en la tela. Si la distancia es cortita, la máquina deja un hilito estirado que después cortas con tijera; si la distancia es larga, la máquina corta el hilo sola con su tijerita interna antes de pegar el salto para que el bordado quede limpio y prolijo.",
    "practicalExamples": [
      "Viaje veloz del pantógrafo entre las letras de un nombre personalizado sin coser en el medio.",
      "Configuración del umbral de corte automático en 3 mm para eliminar hebras puente en tipografías cursivas.",
      "Saltos largos de 50 mm entre los diferentes elementos de un escudo corporativo."
    ],
    "matrixParametersRelation": [
      "Umbral de corte por salto (Jump Length to Trim): parámetro configurable (habitualmente de 3 mm a 7 mm) que define cuándo activar el cortahilos.",
      "Velocidad de salto del pantógrafo: los servomotores se desplazan a su máxima velocidad angular durante los saltos largos para ahorrar tiempo de producción.",
      "Prevención de nudos de salto: remate previo obligatorio antes de saltos mayores a 10 mm."
    ],
    "commonErrors": [
      "Configurar el umbral de salto demasiado bajo (1 mm), obligando a la máquina a cortar y reanudar cientos de veces aumentando el tiempo de bordado innecesariamente.",
      "Configurar el umbral demasiado alto (15 mm), dejando puentes de hilo largos por toda la superficie que pueden engancharse en el prensatelas.",
      "No limpiar las hebras de salto antes de que la máquina comience a bordar una capa superior de satín por encima de ellas."
    ],
    "troubleshootingTips": [
      "Configura tu máquina para que corte el hilo automáticamente en saltos mayores a 4 mm o 5 mm en diseños estándar.",
      "En letras caligráficas cursivas muy juntas, desactiva el corte y deja puentes de hilo que se recortan en 5 segundos con una tijera curva.",
      "Limpia siempre las hebras de salto manuales con una tijera de cigüeña a ras de la tela para que no queden colitas visibles."
    ],
    "whenToAdjust": "Modifica la longitud de salto en la pantalla de la máquina si notas que corta demasiado seguido o deja demasiados hilos cruzados.",
    "dicaArtrelados": "El tip de la tijera pico de pato Artrelados para hilos de salto: Si estás bordando un texto cursivo y tu máquina no tiene cortahilos automático o lo tienes desactivado para ir más rápido, no esperes a terminar todo el bordado para cortar los hilos puentes. Pon pausa en la máquina a mitad del texto y córtalos con una tijera de punta curva hacia arriba. Evitarás que la aguja borde por encima de los hilos sueltos y los atrape para siempre.",
    "voceSabia": "¿Sabías que en las máquinas industriales los motores del pantógrafo alcanzan aceleraciones de más de 3G durante los saltos largos, desplazando el bastidor más rápido que la aceleración de un automóvil de Fórmula 1 en los primeros metros?",
    "practicalExercise": "Carga un diseño de dos letras separadas por 20 mm. Configura el umbral de corte en 10 mm y borda: observa cómo la máquina frena, corta el hilo, pega el salto veloz en el aire y retoma la costura en la segunda letra con total prolijidad.",
    "quickSummary": "Distancia que recorre el bastidor en el aire sin clavar la aguja entre dos elementos separados del diseño.",
    "summary": "Distancia que recorre el bastidor en el aire sin clavar la aguja entre dos elementos separados del diseño.",
    "relatedTerms": [
      "Comandos de Corte de Hilo (Trimmer Codes)",
      "Puntadas de Puente y Conexión (Bridge Stitch)",
      "Pantógrafo de Máquina de Bordar",
      "Longitud de Puntada de Bordado"
    ]
  },
  "c-027-comprimento-do-ponto": {
    "term": "Longitud de Puntada de Bordado",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del concepto milimétrico fundamental de avance entre penetraciones sucesivas de aguja en la ingeniería mecánica textil.",
    "definition": "Distancia física lineal medida en milímetros (o décimas de milímetro) entre dos perforaciones consecutivas de la aguja sobre la tela, regulada matemáticamente por el software de ponchado para controlar la textura, flexibilidad, durabilidad mecánica y apariencia óptica de los diferentes tipos de puntada (recta, tatami o satín).",
    "howItWorks": [
      "1. En puntada recta o pespunte (Running Stitch): la longitud típica es de 2,0 mm a 3,0 mm para contornos y detalles finos.",
      "2. En relleno tatami: la longitud estándar de cada segmento individual se calibra habitualmente entre 3,5 mm y 4,5 mm para una textura regular.",
      "3. En columnas de satín: la longitud coincide exactamente con el ancho de la columna transversal (de 1,5 mm a 8,0 mm).",
      "4. El software incorpora filtros de puntada mínima (habitualmente 0,5 mm a 0,8 mm) para eliminar micro-puntadas que perforarían la tela sin aportar hilo.",
      "5. El procesador de la máquina calcula el tiempo de desaceleración del pantógrafo en función directa de la longitud de cada puntada."
    ],
    "beginnerExplanation": "Es la distancia en milímetros que hay entre un agujerito de la aguja y el siguiente agujerito. Si las puntadas son muy cortitas (menos de 1 milímetro), la aguja perfora la tela como si fuera una estampilla y la rompe; si son muy largas (más de 8 milímetros), el hilo queda colgando suelto como un lazo flojo que se puede enganchar y romper. Calibrar la longitud justa hace que el bordado sea resistente, suave al tacto y duradero.",
    "practicalExamples": [
      "Longitud de 2,5 mm en pespuntes de contorno para trazar curvas suaves y definidas.",
      "Longitud de 4,0 mm en rellenos tatami para lograr fondos lisos y flexibles en escudos grandes.",
      "Longitud reducida a 1,5 mm en micro-detalles y ojos de personajes pequeños."
    ],
    "matrixParametersRelation": [
      "Filtro de puntadas pequeñas (Small Stitch Filter): elimina automáticamente puntadas menores a 0,5 mm para evitar cortes de hilo y roturas de tela.",
      "Relación con la velocidad de costura: puntadas largas (más de 6 mm) requieren que la máquina desacelere de 1000 a 600 PPM para dar tiempo al pantógrafo a recorrer la distancia.",
      "Flexibilidad de la prenda: puntadas muy cortas aumentan la rigidez de la tela haciéndola dura como un cartón."
    ],
    "commonErrors": [
      "Dejar puntadas microscópicas de 0,3 mm generadas por conversiones automáticas de imágenes, rompiendo hilos y haciendo pozos en la tela.",
      "Programar puntadas de más de 9 mm en satín sin partición, dejando hebras sueltas que se enganchan en el lavado.",
      "Usar longitudes largas de 5 mm en curvas cerradas, haciendo que las curvas se vean poligonales y facetadas en vez de redondeadas."
    ],
    "troubleshootingTips": [
      "Configura siempre el filtro de puntada mínima en tu programa en 0,6 mm o 0,8 mm: limpiará tus archivos de micro-nudos basura.",
      "Para contornos curvos cerrados, acorta la longitud de puntada a 1,8 mm o 2,0 mm: la aguja dibujará una curva suave y perfecta.",
      "En telas acolchadas o con pelo, alarga la puntada a 3,5 mm para que el hilo descanse suavemente sobre el volumen sin aplastarlo."
    ],
    "whenToAdjust": "Modifica la longitud de puntada en el software si notas curvas toscas o troquelado excesivo de la tela en pequeños detalles.",
    "dicaArtrelados": "El filtro de limpieza Artrelados para matrices de internet: Si descargaste o compraste una matriz de internet y tu máquina rompe hilos a cada rato, abre el archivo en tu programa y pásale el 'Filtro de puntadas pequeñas' configurado en 0,7 milímetros. Te sorprenderá ver que el programa elimina hasta 1.000 puntadas microscópicas inútiles que estaban destrozando tus agujas. ¡Tu máquina bordará suave y silenciosa!",
    "voceSabia": "¿Sabías que una matriz de bordado típica de un escudo de pecho de 10.000 puntadas contiene un promedio acumulado de más de 40 metros de hilo entrelazado con longitudes medias de 4 milímetros por puntada?",
    "practicalExercise": "Crea una línea curva en tu programa con longitud de 4 mm y otra idéntica al lado con longitud de 2 mm. Observa cómo la primera se ve formada por segmentos rectos toscos mientras la segunda dibuja una curva suave y orgánica como hecha a mano.",
    "quickSummary": "Distancia en milímetros entre dos penetraciones de aguja que define la definición, textura y flexibilidad del bordado.",
    "summary": "Distancia en milímetros entre dos penetraciones de aguja que define la definición, textura y flexibilidad del bordado.",
    "relatedTerms": [
      "Longitud de Salto de Puntada",
      "Puntada Tatami (Tatami Stitch)",
      "Columna de Puntada Satín",
      "Densidad de Puntada"
    ]
  },
  "c-080-comutador-de-cores-motor-de-passo": {
    "term": "Conmutador de Color y Motor Paso a Paso de Selección de Agujas",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del mecanismo de Cruz de Malta (Geneva Mechanism) y de la cinemática de motores paso a paso híbridos de dos fases para indexación angular precisa.",
    "definition": "Conjunto mecatrónico de alta velocidad compuesto por un motor paso a paso (Stepping Motor) de alto par y una leva helicoidal o rueda de Ginebra, encargado de trasladar transversalmente el carro frontal de barras de aguja para desacoplar la aguja anterior y enclavar la nueva barra de aguja programada en la matriz con tolerancia posicional inferior a 0,02 mm.",
    "howItWorks": [
      "1. Al leer un comando de cambio de color en la memoria, la CPU detiene el motor principal con la aguja en su punto muerto superior (100°).",
      "2. El motor paso a paso de cambio de color recibe el tren de pulsos eléctricos digitales correspondiente al número de aguja deseado.",
      "3. El eje del motor gira un ángulo específico haciendo girar la leva helicoidal de ranura curva.",
      "4. La leva traslada el bloque de agujas suavemente hacia la izquierda o derecha.",
      "5. Un sensor óptico o potenciómetro de posición angular (Encoder) confirma a la placa madre que la aguja está centrada al 100%.",
      "6. El pestillo de trinquete fija mecánicamente la posición y la máquina retoma la costura en menos de un segundo."
    ],
    "beginnerExplanation": "Es el motor inteligente que mueve el bloque de agujas para cambiar de color en las máquinas multiaguja. Imagina un motorcito muy obediente que cuenta pasos milimétricos: cuando la máquina termina de bordar el color rojo, este motor gira la cantidad exacta de vueltas para correr las agujas y poner la aguja del hilo azul justo en el medio. Todo pasa en un abrir y cerrar de ojos sin que tengas que tocar nada.",
    "practicalExamples": [
      "Cambio secuencial automático entre 15 colores en escudos multicolores complejos.",
      "Detección de posición mediante potenciómetro multivuelta para evitar choques mecánicos.",
      "Calibración del centrado del motor tras una parada de emergencia a mitad de cambio de aguja."
    ],
    "matrixParametersRelation": [
      "Tiempo de ciclo por cambio: típicamente entre 0,7 y 1,2 segundos; una buena digitalización agrupa colores para minimizar estos cambios.",
      "Bloqueo de seguridad angular (Stop Position): el motor paso a paso tiene prohibido activarse si la aguja no está arriba a 100°.",
      "Comandos de cambio de aguja (Needle Commands): instrucciones de parada binaria en los formatos de archivo de bordado."
    ],
    "commonErrors": [
      "Intentar forzar el bloque de agujas con las manos mientras el motor paso a paso está energizado y bloqueado.",
      "Falta de lubricación en la leva helicoidal, provocando que el motor pierda pasos y se detenga con mensaje 'Error de cambio de color'.",
      "Desgaste del potenciómetro de lectura angular, haciendo que la aguja quede ligeramente desplazada respecto al orificio de la placa."
    ],
    "troubleshootingTips": [
      "Aplica grasa blanca de litio en la ranura de la leva de cambio de color cada seis meses.",
      "Si el cabezal queda a mitad de camino por un corte de luz, utiliza la llave manual en el eje trasero para llevarlo suavemente a la aguja más cercana.",
      "Verifica en la pantalla de diagnóstico del panel técnico que el sensor indique el número de aguja correcto sin oscilaciones."
    ],
    "whenToAdjust": "Recalibra el potenciómetro de cambio de color si la máquina se detiene con frecuencia con error 'Needle Position Error'.",
    "dicaArtrelados": "El tip de recuperación sin pánico Artrelados: Si se corta la luz en tu taller justo en el segundo en que la máquina estaba cambiando de aguja y el cabezal queda torcido a mitad de camino, ¡no fuerces el carro empujándolo con las manos! Apaga el interruptor, busca la perilla o eje hexagonal manual que está detrás del cabezal y gírala con la mano hasta escuchar el suave 'clic' de la aguja calzada. Al volver la luz, enciende la máquina y arrancará como si nada hubiera pasado.",
    "voceSabia": "¿Sabías que los motores paso a paso de cambio de color dividen una vuelta completa de 360 grados en más de 400 micro-pasos magnéticos, lo que les permite posicionar el carro de agujas con una precisión de micrones imposible de lograr a simple vista?",
    "practicalExercise": "Cambia manualmente de la aguja 1 a la aguja 6 desde la pantalla de tu máquina: observa de costado el giro rápido del motor paso a paso y la leva helicoidal trasladando el bloque de agujas hasta calzar en el número exacto.",
    "quickSummary": "Motor mecatrónico de alta precisión que gira la leva helicoidal para trasladar el bloque de agujas en cada cambio de color.",
    "summary": "Motor mecatrónico de alta precisión que gira la leva helicoidal para trasladar el bloque de agujas en cada cambio de color.",
    "relatedTerms": [
      "Caja de Cambio de Color y Selector de Agujas",
      "Carro Frontal Deslizante de Barras de Aguja",
      "Cabezal Multiaguja",
      "Servomotor de Árbol Principal"
    ]
  },
  "c-081-cone-de-linha-fotoluminescente": {
    "term": "Hilo Fotoluminiscente que Brilla en la Oscuridad",
    "level": "Intermedio 🟡",
    "category": "Insumos & Materiales",
    "grammarClass": "Sustantivo masculino",
    "origin": "Del descubrimiento de los cristales inorgánicos de aluminato de estroncio dopados con europio (SrAl2O4:Eu,Dy) que absorben fotones de luz y los emiten lentamente en la oscuridad durante horas.",
    "definition": "Hilo especial para bordado computarizado compuesto por un núcleo de poliéster recubierto con microcristales fotoluminiscentes de última generación, capaz de cargarse rápidamente al exponerse a la luz natural o luz ultravioleta (UV) y emitir un brillo fosforescente verde, aguamarina o azul brillante y duradero en la oscuridad absoluta sin necesidad de baterías ni aditivos radiactivos.",
    "howItWorks": [
      "1. Durante el día o bajo iluminación artificial, los cristales de aluminato de estroncio incorporados en el hilo absorben fotones de luz visible y UV excitando sus electrones.",
      "2. Al entrar en un ambiente oscuro, los electrones regresan lentamente a su estado fundamental liberando la energía acumulada en forma de luz visible fría.",
      "3. El brillo alcanza su máxima intensidad durante los primeros 30 minutos y continúa emitiendo una suave luminiscencia visible durante 4 a 8 horas.",
      "4. El hilado tiene propiedades mecánicas similares al poliéster estándar 40wt, permitiendo bordar a velocidades de 700 a 850 PPM.",
      "5. Resiste más de 50 lavados domésticos sin perder su capacidad de recarga lumínica continua e indefinida."
    ],
    "beginnerExplanation": "Es el mágico hilo que brilla en la oscuridad (lo que muchos llaman hilo fosforescente). De día o con la luz prendida parece un hilo blanco, cremita o pastel común y corriente; pero cuando apagas la luz de la habitación, ¡se enciende solo con un brillo verde o azul fluorescente espectacular como en una película de ciencia ficción! Se recarga solo con ponerlo un ratito bajo la luz del sol o una lámpara.",
    "practicalExamples": [
      "Bordado de ojos, fantasmas y detalles de disfraces y pijamas infantiles de Halloween.",
      "Logotipos de seguridad y señalización de emergencia en chalecos de rescatistas y ropa de ciclistas nocturnos.",
      "Detalles luminosos en gorras, zapatillas y mochilas para festivales de música electrónica y moda nocturna."
    ],
    "matrixParametersRelation": [
      "Aprovechamiento de la superficie: digitalizar con satines tupidos y rellenos tatami generosos para acumular la mayor cantidad de hilo emisor de luz.",
      "Tensión superior ligeramente aflojada: el recubrimiento de microcristales minerales genera un leve incremento de fricción en los discos tensores.",
      "Uso de aguja con ranura ancha (Topstitch o aguja 80/12) para evitar el roce abrasivo de los microcristales en el ojo de la aguja."
    ],
    "commonErrors": [
      "Bordar textos diminutos de menos de 4 mm con este hilo, donde la concentración de luz es tan pequeña que apenas se percibe en la oscuridad.",
      "Lavar prendas bordadas con hilo fotoluminiscente usando blanqueadores con cloro agresivo, degradando los cristales fluorescentes.",
      "Esperar que brille con fuerza en una habitación que no está completamente a oscuras (se requiere oscuridad real para apreciar el resplandor)."
    ],
    "troubleshootingTips": [
      "Carga el hilo rápidamente durante 10 segundos con la linterna ultravioleta de un llavero o la luz de tu teléfono celular para mostrar el efecto al cliente.",
      "Utiliza una aguja Schmetz Topstitch 80/12: su ojo alargado y pulido permite que el hilo fosforescente viaje sin fricción ni desprendimiento de partículas.",
      "Combina hilo normal negro alrededor de las letras fotoluminiscentes para lograr un contraste visual dramático e hipnótico en la oscuridad."
    ],
    "whenToAdjust": "Afloja ligeramente el tensor superior un cuarto de vuelta si notas que el hilo fotoluminiscente genera polvillo mineral en las guías.",
    "dicaArtrelados": "El tip de venta infalible Artrelados para pijamas infantiles: Borda una luna y estrellas con hilo que brilla en la oscuridad en el pecho de un pijama de niños. Cuando las mamás acuesten a sus hijos y apaguen la luz del dormitorio, las estrellas quedarán brillando suavemente en la oscuridad acompañando el sueño del bebé. ¡Es un producto que se vende solo y que los padres recomiendan a todos sus amigos!",
    "voceSabia": "¿Sabías que los modernos hilos fotoluminiscentes de aluminato de estroncio brillan hasta diez veces más fuerte y diez veces más tiempo que los antiguos productos fosforescentes a base de sulfuro de zinc que se usaban en los juguetes de los años 1980?",
    "practicalExercise": "Borda un corazón o una estrella de 4 cm con hilo fotoluminiscente en un retazo de tela oscura. Apoya la linterna de tu celular sobre el bordado durante 15 segundos, entra a una habitación oscura o baño sin ventanas y maravíllate viendo cómo el bordado resplandece como una lámpara mágica.",
    "quickSummary": "Hilo técnico de poliéster con cristales que absorben luz natural o UV y brillan intensamente en la oscuridad durante horas.",
    "summary": "Hilo técnico de poliéster con cristales que absorben luz natural o UV y brillan intensamente en la oscuridad durante horas.",
    "relatedTerms": [
      "Hilo de Poliéster Trilobal",
      "Brillo del Hilo (Thread Sheen)",
      "Aguja para Hilos Especiales (Topstitch)",
      "Insumos & Materiales"
    ]
  },
  "c-048-conectividade-wifi-nuvem": {
    "term": "Conectividad Wi-Fi y Gestión en la Nube",
    "level": "Iniciante 🟢",
    "category": "Softwares & Formatos",
    "grammarClass": "Locución nominal femenina",
    "origin": "De la integración del Internet de las Cosas (IoT) y la Industria 4.0 en el ecosistema de máquinas de bordar modernas (Brother Design Database Transfer, Bernina Cloud, Tajima DG.NET).",
    "definition": "Módulo de comunicación inalámbrica integrado en el hardware de la máquina de bordar que permite conectar la máquina a la red local Wi-Fi del taller o a servidores seguros en la nube, posibilitando la transferencia instantánea de matrices de bordado desde la computadora o teléfono móvil sin usar cables ni memorias USB, así como el monitoreo del estado de costura en tiempo real.",
    "howItWorks": [
      "1. La máquina de bordar se conecta a la red inalámbrica de 2,4 GHz del taller ingresando la contraseña en la pantalla táctil.",
      "2. En la computadora, el software de bordado reconoce automáticamente la máquina conectada a la misma red local.",
      "3. El operador termina de digitalizar y pulsa el botón 'Enviar a Máquina vía Wi-Fi'.",
      "4. El archivo binario viaja por el aire en un segundo y aparece en la bandeja de entrada de la memoria de la máquina.",
      "5. A través de aplicaciones móviles en el teléfono (como Brother My Stitch Monitor), el bordador puede vigilar el progreso de las puntadas, paradas y cambios de color desde cualquier lugar del taller."
    ],
    "beginnerExplanation": "Es como tener a tu máquina conectada a internet igual que tu teléfono celular. Te olvidas para siempre de estar enchufando y desenchufando pendrives: terminas tu dibujo en la computadora, tocas 'Enviar por Wi-Fi' y el dibujo aparece al instante en la pantalla de la máquina volando por el aire. Y además, si vas a tomar un café o estás en otra habitación, puedes mirar tu celular para saber cuántas puntadas faltan o si se cortó el hilo.",
    "practicalExamples": [
      "Envío inalámbrico de 20 nombres personalizados desde la computadora a tres máquinas familiares en un ateliê.",
      "Recepción de notificaciones en el reloj inteligente o teléfono cuando una máquina termina de bordar o se acaba la canilla.",
      "Actualización automática del firmware de la máquina a través de internet con un solo clic en pantalla."
    ],
    "matrixParametersRelation": [
      "Transferencia de archivos sin corrupción: elimina los errores comunes de sectores defectuosos producidos por pendrives USB desgastados.",
      "Sincronización de bases de datos: compatibilidad con sistemas como Design Database Transfer y plataformas en la nube.",
      "Monitoreo de telemetría de producción: registro de tiempos de ciclo, cantidad de puntadas bordadas por día y paradas por rotura."
    ],
    "commonErrors": [
      "Intentar conectar la máquina a redes Wi-Fi empresariales con protocolo de autenticación por página web (redes de hotel o café).",
      "Conectar la máquina a una red de 5 GHz en máquinas que solo soportan la banda de 2,4 GHz.",
      "Colocar la máquina en una zona del taller donde la señal del router Wi-Fi llega débil o con cortes intermitentes."
    ],
    "troubleshootingTips": [
      "Conecta siempre tu máquina de bordar a la banda Wi-Fi estándar de 2,4 GHz de tu router doméstico.",
      "Si la máquina pierde conexión, apágala, espera 10 segundos y vuelve a encenderla para que renueve su dirección IP.",
      "Mantén siempre un pendrive USB de 8 GB formateado en FAT32 guardado en tu cajón como respaldo por si se corta internet en el taller."
    ],
    "whenToAdjust": "Reconfigura la conexión Wi-Fi en el menú de ajustes de la máquina si cambiaste de router o de contraseña de internet.",
    "dicaArtrelados": "El tip de la libertad Artrelados con la app del celular: Si tu máquina tiene conexión Wi-Fi, descárgate la aplicación oficial en tu teléfono móvil (como My Stitch Monitor). Podrás ir a cocinar, atender a tus hijos o cortar telas en la otra mesa con total tranquilidad: tu teléfono sonará con una campanita en el segundo exacto en que la máquina termine el bordado o si necesita que le cambies el color del hilo. ¡Ganarás una libertad impagable!",
    "voceSabia": "¿Sabías que en las fábricas textiles industriales de Japón los ingenieros controlan flotas de más de 200 cabezales de bordado sincronizados a través de servidores en la nube, sabiendo desde su tableta el rendimiento exacto de cada aguja en tiempo real?",
    "practicalExercise": "Conecta tu máquina a la red Wi-Fi de tu casa o taller siguiendo el asistente en pantalla. Envía un diseño de prueba directamente desde tu programa de computadora a través de la red: comprueba la comodidad mágica de verlo aparecer en pantalla sin tocar un pendrive.",
    "quickSummary": "Comunicación inalámbrica que envía matrices por Wi-Fi y permite monitorear el bordado desde el teléfono celular.",
    "summary": "Comunicación inalámbrica que envía matrices por Wi-Fi y permite monitorear el bordado desde el teléfono celular.",
    "relatedTerms": [
      "Carga y Transferencia de Matrices de Bordado",
      "Puerto y Conector USB de la Máquina",
      "Software de Ponchado y Digitalização",
      "Búfer de Memoria y Cola de Puntadas de la CPU"
    ]
  },
  "c-037-conector-usb": {
    "term": "Puerto y Conector USB de la Máquina",
    "level": "Iniciante 🟢",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del estándar universal de bus de comunicaciones serie (Universal Serial Bus - USB Implementers Forum) introducido en las máquinas de bordar a partir de los años 2000.",
    "definition": "Puerto hembra de conexión física estandarizada tipo USB-A (y puerto auxiliar USB-B para conexión directa a PC) ubicado en el lateral o frontal del chasis de la máquina de bordar, provisto de cuatro contactos de cobre dorados para alimentación y transferencia diferencial de datos digitales entre memorias flash USB externas y el procesador central de la máquina.",
    "howItWorks": [
      "1. La unidad flash USB (pendrive) se inserta en el puerto USB-A con la orientación correcta.",
      "2. El circuito integrado host USB de la máquina energiza la memoria flash con 5 voltios de corriente continua.",
      "3. El firmware lee la tabla de particiones del pendrive buscando sistemas de archivos compatibles (típicamente FAT16 o FAT32).",
      "4. El procesador escanea los directorios buscando extensiones de archivo de bordado reconocidas (.PES, .DST, .JEF, etc.).",
      "5. El usuario visualiza los archivos en la pantalla táctil y selecciona el diseño para cargarlo al búfer interno de memoria RAM."
    ],
    "beginnerExplanation": "Es la ranura o puertito metálico donde enchufas tu pendrive en el costado de la máquina para pasarle los dibujos de bordado. Es la forma más clásica y usada en todo el mundo para llevar los archivos desde tu computadora hasta la máquina. Tiene cuatro patitas de metal adentro que leen la memoria en dos segundos para mostrarte todos tus dibujos en la pantalla.",
    "practicalExamples": [
      "Conexión de pendrives de memoria de 4 GB a 16 GB formateados en FAT32 para cargar matrices diarias.",
      "Conexión directa mediante cable USB tipo impresora (USB-A a USB-B) desde la computadora a la máquina.",
      "Conexión de ratones ópticos USB en máquinas de pantalla táctil grande para dibujar y editar cómodamente en pantalla."
    ],
    "matrixParametersRelation": [
      "Integridad de lectura binaria: un puerto limpio asegura que los archivos de puntada no sufran corrupción durante la carga.",
      "Consumo de corriente protegido: el puerto incluye fusibles térmicos autoreseteables (Polyfuse) contra cortocircuitos.",
      "Compatibilidad de capacidad: la mayoría de los sistemas embebidos de máquinas de bordar gestionan memorias de hasta 16 GB o 32 GB."
    ],
    "commonErrors": [
      "Forzar la entrada del pendrive al revés, rompiendo la lengüeta plástica central de cuatro pines del puerto de la máquina.",
      "Usar pendrives gigantescos de 64 GB, 128 GB o discos duros externos formateados en NTFS / exFAT que bloquean el lector de la máquina.",
      "Retirar el pendrive de golpe mientras el led indicador está parpadeando leyendo datos, corrompiendo los archivos de la memoria."
    ],
    "troubleshootingTips": [
      "Utiliza un pendrive pequeño exclusivo para tu máquina (de 4 GB a 8 GB) formateado en sistema de archivos FAT32.",
      "Si la ranura del puerto USB está floja por el uso repetido, utiliza un cable alargador USB corto de 15 cm fijo a la máquina: conectarás tu pendrive al cable protegiendo el puerto de la máquina de por vida.",
      "Protege el puerto con una tapita plástica antipolvo cuando no esté en uso para evitar que entren pelusas textiles."
    ],
    "whenToAdjust": "Formatea tu pendrive en FAT32 en tu computadora si la máquina no reconoce los archivos o se queda congelada al enchufarlo.",
    "dicaArtrelados": "El tip del cable protector Artrelados para el puerto USB: El puerto USB soldado a la placa madre de tu máquina cuesta cientos de dólares cambiarlo si se rompe por enchufar y desenchufar el pendrive miles de veces. Compra un cable prolongador USB corto de 20 centímetros y déjalo enchufado permanentemente a tu máquina. A partir de hoy, enchufa y desenchufa tu pendrive en la punta del cable: si el conector se desgasta con los años, solo cambias un cable de dos dólares y tu máquina seguirá intacta.",
    "voceSabia": "¿Sabías que antes de la masificación del puerto USB en el año 2002, las bordadoras utilizaban tarjetas de memoria gigantescas llamadas CompactFlash o disquetes flexibles de 3.5 pulgadas de apenas 1.44 megabytes de capacidad?",
    "practicalExercise": "Inspecciona el puerto USB de tu máquina con una linterna pequeña: observa los cuatro pines dorados y la lengüeta plástica guía. Conecta un pendrive suavemente sin forzar hasta sentir el calce firme y seguro.",
    "quickSummary": "Ranura de conexión estandarizada que permite conectar memorias flash USB para transferir matrices a la máquina.",
    "summary": "Ranura de conexão estandarizada que permite conectar memorias flash USB para transferir matrices a la máquina.",
    "relatedTerms": [
      "Carga y Transferencia de Matrices de Bordado",
      "Conectividad Wi-Fi y Gestión en la Nube",
      "Búfer de Memoria y Cola de Puntadas de la CPU",
      "Configuración y Ajustes del Menú de la Máquina"
    ]
  },
  "c-036-configuracao-da-maquina-de-bordado": {
    "term": "Configuración y Ajustes del Menú de la Máquina",
    "level": "Iniciante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal femenina",
    "origin": "Del menú de parámetros globales de firmware (System Settings / Machine Preferences) integrados en el sistema operativo embebido de la bordadora.",
    "definition": "Conjunto de parámetros operativos y preferencias de sistema accesibles a través de la pantalla táctil de la máquina de bordar (representado típicamente por el icono de una llave inglesa o engranaje), que permite al operador personalizar el idioma, la unidad de medida (milímetros o pulgadas), la sensibilidad de los sensores de hilo, la velocidad máxima de costura, el comportamiento del cortahilos y la iluminación.",
    "howItWorks": [
      "1. El operador pulsa el icono de 'Ajustes / Configuración' en la pantalla principal de la consola.",
      "2. El menú despliega páginas de parámetros organizadas por categorías (pantalla, costura, sensores, conexión).",
      "3. Se selecciona la unidad de medida preferida (milímetros para máxima precisión de ponchado técnico).",
      "4. Se ajusta la velocidad máxima del cabezal (por ejemplo, limitando a 700 PPM para hilos metálicos o telas complejas).",
      "5. Se regula la sensibilidad del sensor de rotura de hilo superior y sensor de hilo inferior de bobina.",
      "6. Los ajustes quedan guardados de forma permanente en la memoria EEPROM de la máquina, manteniéndose activos incluso al apagar el equipo."
    ],
    "beginnerExplanation": "Es el menú de 'Ajustes' o 'Configuración' de la máquina de bordar, igual que el menú de ajustes de tu teléfono celular. Tocando ese botoncito con forma de llave inglesa o ruedita de engranaje, puedes cambiar el idioma al español, poner las medidas en milímetros, regular el brillo de la luz LED, bajarle la velocidad para hilos difíciles o ajustar qué tan sensible quieres que sea la alarma que avisa cuando se corta el hilo.",
    "practicalExamples": [
      "Cambio de unidades de pulgadas (Inches) a milímetros (mm) para coincidir con el software de digitalización.",
      "Ajuste del brillo de la pantalla táctil LCD y volumen de los pitidos de alarma en el taller.",
      "Regulación de la altura máxima de salto del prensatelas para bordados sobre colchas gruesas."
    ],
    "matrixParametersRelation": [
      "Límite máximo de velocidad (Max Speed Limit): anula los límites de la matriz protegiendo telas delicadas.",
      "Comportamiento de corte de hilo: activar o desactivar cortes automáticos entre saltos.",
      "Calibración de la pantalla táctil (Touch Screen Calibration): ajuste de precisión táctil para presionar botones con exactitud."
    ],
    "commonErrors": [
      "Dejar la máquina en pulgadas (Inches), generando confusiones al medir tamaños de bastidor y compensaciones milimétricas.",
      "Desactivar las alarmas sonoras de rotura de hilo y no darse cuenta cuando la máquina se queda sin hilo de canilla.",
      "Modificar parámetros del menú de servicio técnico sin consultar el manual oficial del fabricante."
    ],
    "troubleshootingTips": [
      "Configura siempre tu máquina en milímetros: es el lenguaje universal de la ingeniería de bordado internacional.",
      "Si la pantalla táctil parece no responder donde tocas con el dedo, entra al menú y realiza la 'Calibración de pantalla táctil' (Touch Screen Calibration) tocando los puntos guía.",
      "Anota en tu libreta de taller cualquier ajuste especial de velocidad o sensores que modifiques para recordar volver al estándar."
    ],
    "whenToAdjust": "Ingresa al menú de configuración cada vez que incorpores nuevos accesorios, bastidores magnéticos o hilos de fantasía.",
    "dicaArtrelados": "El chequeo de milímetros Artrelados: Si compraste una máquina nueva o usada y ves números extraños con fracciones raras en la pantalla (como 3.93\" x 3.93\"), no te asustes: tu máquina vino configurada de fábrica para Estados Unidos en pulgadas. Entra al menú de la llave inglesa, busca la opción 'mm / inch' y ponla en 'mm'. Al instante verás tu clásico bastidor 10x10 cm con números limpios y redondos en milímetros.",
    "voceSabia": "¿Sabías que los firmwares de las máquinas de bordar modernas tienen un registro interno que contabiliza cada puntada que ha dado la máquina desde el día en que nació en la fábrica, funcionando igual que el odómetro de kilómetros de un automóvil?",
    "practicalExercise": "Entra al menú de configuración de tu máquina tocando el icono del engranaje o llave inglesa. Navega por las páginas del menú, verifica que las unidades estén en milímetros y comprueba a cuántas puntadas por minuto está configurada tu velocidad de fábrica.",
    "quickSummary": "Menú del sistema operativo donde se personalizan unidades de medida, velocidades, idiomas y sensores de la máquina.",
    "summary": "Menú del sistema operativo donde se personalizan unidades de medida, velocidades, idiomas y sensores de la máquina.",
    "relatedTerms": [
      "Calibración del Sensor de Hilo de Bobina",
      "Sensor de Rotura de Hilo",
      "Iluminación LED del Campo de Bordado",
      "Búfer de Memoria y Cola de Puntadas de la CPU"
    ]
  },
  "c-106-conjunto-de-pre-tensao-linha-superior-sub-tensor": {
    "term": "Conjunto de Pretensión Superior y Subtensor del Cabezal",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del diseño de amortiguación cinemática de hilados en máquinas industriales multicabezal (Upper Thread Pre-Tension Assembly & Sub-Tensioner).",
    "definition": "Conjunto de pequeños discos tensores auxiliares con resorte de baja presión montados en la parte superior del cabezal de bordado inmediatamente después de las guías aéreas, cuya función es aplicar una resistencia inicial suave y constante al hilo para eliminar vibraciones helicoidales y bucles flojos antes de que el hilo ingrese a la rueda sensora de rotura y a los discos de tensión principal.",
    "howItWorks": [
      "1. El hilo sale del cono superior y atraviesa el ojal de la guía aérea descendiendo hacia el cabezal.",
      "2. El hilo se enhebra pasando entre los dos platillos pulidos del subtensor o pretensor auxiliar.",
      "3. La tuerca moleteada del subtensor aplica una presión ligera (típicamente entre 5 y 10 gramos fuerza).",
      "4. Esta pretensión estira el hilo eliminando la inercia rotativa y los rulos de desbobinado generados a 1000 PPM.",
      "5. El hilo abraza firmemente la rueda del sensor óptico o magnético de rotura de hilo sin patinar ni rebotar.",
      "6. Ingresa al conjunto de tensión principal perfectamente alineado, garantizando que el tensor principal trabaje con una alimentación 100% estable."
    ],
    "beginnerExplanation": "Es un juego de pequeños platillos tensores con resortito que está arriba de todo en la cabeza de la máquina, antes de los tensores grandes. Su trabajo es hacer una 'pre-tensión' suavecita: como el hilo viene volando a toda velocidad desde el cono y a veces viene dando saltitos o medio retorcido, este subtensor lo plancha suavemente y lo calma para que entre derechito y prolijo a los tensores principales sin hacer lazos flojos.",
    "practicalExamples": [
      "Estabilización de hilos resbaladizos de rayón viscosa en cabezales industriales de 12 o 15 agujas.",
      "Eliminación de falsas alarmas de rotura de hilo causadas por el patinado del hilo sobre la rueda sensora.",
      "Control de tensión previa en hilos gruesos calibre 30wt o hilos metálicos retorcidos."
    ],
    "matrixParametersRelation": [
      "Estabilidad de lectura del sensor de hilo: la pretensión asegura un contacto constante del hilo contra el rodillo codificador de pulsos.",
      "Independencia de la tensión principal: la pretensión nunca debe ser excesiva; su única función es alinear y guiar el hilo.",
      "Amortiguación de tirones del tirahilos: absorbe el impacto de retroceso del hilo cuando el tirahilos desciende."
    ],
    "commonErrors": [
      "Apretar la tuerca del subtensor con demasiada fuerza, sumando una tensión excesiva que corta el hilo superior en la aguja.",
      "Dejar el subtensor completamente suelto, haciendo que el hilo salte fuera de los discos durante aceleraciones bruscas.",
      "Permitir la acumulación de pelusa y restos de cera lubricante entre los platillos del subtensor."
    ],
    "troubleshootingTips": [
      "Calibra el subtensor de modo que ofrezca apenas una resistencia suave (el hilo debe sentirse dócil al tirar con los dedos sin frenarse).",
      "Pasa una esquina de tela de algodón doblada entre los discos del subtensor una vez por semana para retirar pelusas.",
      "Si la máquina avisa falsamente que se cortó el hilo cuando el hilo sigue entero, aprieta el subtensor un cuarto de vuelta para que abrace mejor la rueda sensora."
    ],
    "whenToAdjust": "Regula el subtensor si notas que el hilo flamea o forma bucles flojos entre la guía aérea y el tensor principal.",
    "dicaArtrelados": "El tip de la resistencia pluma Artrelados para el subtensor: La tuerca del subtensor superior no está para apretar el hilo como si fuera una prensa. Su fuerza debe ser suavecita como una pluma: tira del hilo con tu mano hacia abajo y debes sentir apenas una leve caricia de resistencia. La verdadera tensión se hace abajo en el tensor principal; el subtensor solo está para que el hilo viaje ordenado y sin bailar en el aire.",
    "voceSabia": "¿Sabías que los subtensores de las máquinas de bordar profesionales tienen discos fabricados en acero inoxidable cromado duro o cerámica técnica para soportar el paso de más de 500 kilómetros de hilo al año sin marcar un solo surco en el metal?",
    "practicalExercise": "Localiza los pequeños discos de pretensión arriba de los tensores principales en tu cabezal. Pasa el hilo entre ellos y gira la tuerca hacia un lado y hacia el otro sintiendo con los dedos la delicada diferencia de suavidad en la alimentación del hilo.",
    "quickSummary": "Discos tensores auxiliares superiores que aplican una suave resistencia previa para estabilizar el hilo antes de los tensores principales.",
    "summary": "Discos tensores auxiliares superiores que aplican una suave resistencia previa para estabilizar el hilo antes de los tensores principales.",
    "relatedTerms": [
      "Conjunto Tensor Superior de Discos",
      "Sensor de Rotura de Hilo",
      "Canal de Enhebrado del Hilo",
      "Palanca Tirahilos"
    ]
  },
  "c-041-contorno-de-bordado": {
    "term": "Contorno de Bordado y Delineado Perimetral",
    "level": "Iniciante 🟢",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "De la tradición del dibujo artístico y de la técnica de cordoncillo y delineado (Outline Stitch / Border Run) para enmarcar figuras y aportar contraste visual.",
    "definition": "Elemento lineal o banda de puntadas (ejecutado en pespunte simple, triple pespunte bean stitch o columna estrecha de satín) que recorre todo el perímetro exterior o interior de un diseño de bordado, cuya función es delimitar nítidamente los bordes de los rellenos de color, tapar las terminaciones irregulares y proporcionar contraste y tridimensionalidad estética a la figura.",
    "howItWorks": [
      "1. La máquina borda primero las bases de soporte y los rellenos interiores de color en puntada tatami o satín.",
      "2. Los rellenos interiores se expanden milimétricamente hacia los bordes mediante compensación de empuje y tirantez.",
      "3. En la secuencia final de la matriz, la máquina selecciona el color de contraste (frecuentemente hilo negro, azul marino u oscuro).",
      "4. El contorno se ejecuta montándose sobre el borde del relleno interior (solapamiento de al menos 0,5 mm a 0,8 mm).",
      "5. El delineado sella las hebras de fondo creando un borde limpio, estilizado y perfectamente afilado que resalta el motivo contra la tela."
    ],
    "beginnerExplanation": "Es la línea negra o de color oscuro que borda la máquina al final de todo alrededor del dibujo para 'cerrarlo' y enmarcarlo prolijo, igual que cuando en un libro de colorear infantil repasas los bordes con un marcador negro grueso para que el dibujo resalte con fuerza. Tapa las puntitas desparejas del relleno de adentro y hace que el bordado se vea limpio, profesional y con un relieve hermoso.",
    "practicalExamples": [
      "Delineado negro estilo cómic alrededor de personajes infantiles y mascotas bordadas.",
      "Cordón de satín fino de 1,5 mm que enmarca los pétalos de una flor multicolor.",
      "Contorno perimetral con puntada triple para definir escudos heráldicos y letras de estilo universitario."
    ],
    "matrixParametersRelation": [
      "Secuencia cronológica estricta: los contornos deben bordarse siempre al final del bloque de color que delimitan.",
      "Margen de solapamiento obligatorio (Overlap Margin): el centro del contorno debe caer ligeramente hacia adentro del borde del relleno para absorber la tirantez de la tela.",
      "Ancho de contorno recomendado: entre 1,2 mm y 2,5 mm para columnas de satín; o triple pasada para líneas finas de costura recta."
    ],
    "commonErrors": [
      "Bordar el contorno antes que el relleno interior, haciendo que el relleno tape y deforme el contorno fino.",
      "Digitalizar el contorno exactamente al borde sin solapamiento, provocando que la tirantez de la tela deje huecos blancos entre el relleno y el contorno.",
      "Hacer contornos de satín extremadamente delgados (menos de 1 mm) que troquelan la tela y parten el hilo continuo."
    ],
    "troubleshootingTips": [
      "Superpone siempre el contorno al menos 0,6 mm sobre el relleno de fondo en el software: compensarás la física de la tela y calzará a la perfección.",
      "En letras pequeñas de menos de 8 mm, utiliza contorno de puntada recta simple en vez de satín para que la letra no pierda legibilidad.",
      "Usa hilos de alta tenacidad calibre 40wt para contornos perimetrales que requieren máxima cobertura visual."
    ],
    "whenToAdjust": "Incrementa el solapamiento del contorno en el software si en la prueba física observas que se abre una línea de tela entre el color y el borde.",
    "dicaArtrelados": "El secreto del calce perfecto Artrelados para contornos: Si sufres porque los contornos negros de tus dibujos siempre te quedan corridos hacia un lado dejando una franja vacía, nunca muevas el contorno en el programa a ojo. Revisa la dirección de las puntadas del relleno: la tela se encoge en la dirección del satín. Ensancha el relleno 0,4 mm en esa dirección y el contorno negro calzará cerrado y hermético como un guante a medida.",
    "voceSabia": "¿Sabías que la técnica del contorno negro para separar colores planos en bordado es la adaptación textil del método 'Cloisonné' inventado por los orfebres de la antigua Bizancio en el siglo VI para separar los esmaltes de vidrio con finos alambres de oro?",
    "practicalExercise": "Abre un diseño con un relleno circular y un contorno en tu software. Separa el contorno 1 mm hacia afuera a propósito y mira la simulación. Luego acércalo solapándolo 0,6 mm sobre el borde del relleno: comprenderás la seguridad que brinda el solapamiento técnico.",
    "quickSummary": "Línea o cordón perimetral que enmarca los bordes del relleno aportando contraste, nitidez y acabado profesional.",
    "summary": "Línea o cordón perimetral que enmarca los bordes del relleno aportando contraste, nitidez y acabado profesional.",
    "relatedTerms": [
      "Compensación de Empuje y Tirantez",
      "Columna de Puntada Satín",
      "Punto Grano de Frijol (Bean Stitch)",
      "Puntadas de Viaje Ocultas (Travel Runs)"
    ]
  }
};

import json

PART1_DATA = {
  "c-095-contorno-duplo-triplo-ponto-grao-feijao": {
    "term": "Punto Grano de Frijol y Pespunte Triple de Realce",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del término inglés Bean Stitch (punto grano de frijol) y Heavy Outline Run, originario de la guarnicionería y sastrería de pespuntes reforzados.",
    "definition": "Variante de pespunte lineal continuo donde la máquina avanza dos pasos hacia adelante y retrocede uno (o avanza, retrocede y vuelve a avanzar en cada coordenada), acumulando tres o cinco hebras de hilo sobre el mismo trazo para crear un contorno grueso, audaz y con relieve redondeado que resalta en telas pesadas sin requerir el ancho de una columna de satín.",
    "howItWorks": [
      "1. La aguja clava en el punto A, avanza al punto B, retrocede exactamente al punto A y vuelve a avanzar al punto B.",
      "2. Cada segmento de avance queda compuesto por tres pasadas de hilo superpuestas con un entrelazado compacto.",
      "3. El trazo adquiere un grosor visual equivalente a tres veces el calibre del hilo (de 0,8 mm a 1,2 mm con hilo estándar 40wt).",
      "4. Al mantener una longitud de puntada de 2,5 mm a 3,5 mm, la línea mantiene su flexibilidad sin perforar ni cortar la tela.",
      "5. Genera un efecto rústico artesanal similar al pespunte a mano de talabartería o contornos de cómic con alta presencia estética.",
    ],
    "beginnerExplanation": "Es una puntada lineal 'gordita' y fuerte que la máquina hace yendo hacia adelante, volviendo un pasito hacia atrás y volviendo a ir hacia adelante, como si diera tres pasadas de hilo en el mismo lugar. En vez de ser una línea finita y tímida que se pierde en la tela, queda un contorno grueso, redondeado y con cuerpo que parece hecho a mano con hilo de zapatero. Es ideal para bordar siluetas vintage, caritas infantiles y bordes de parches.",
    "practicalExamples": [
      "Contornos de animales y personajes infantiles de estilo rústico y vintage en prendas de lino.",
      "Costura decorativa reforzada en bolsillos y canesús de camperas de jean y lona.",
      "Líneas de acolchado decorativo en proyectos de colchas y fundas ITH donde se busca que el trazo resalte."
    ],
    "matrixParametersRelation": [
      "Multiplicador de puntadas: el punto frijol triplica el número de puntadas del trazo respecto a una costura simple.",
      "Longitud recomendada: de 2,5 mm a 3,5 mm; nunca usar longitudes menores a 2,0 mm para no apelmazar el hilo ni troquelar el tejido.",
      "Tensión superior equilibrada: requiere un balance perfecto para que las tres pasadas queden paralelas sin formar nudos en el derecho."
    ],
    "commonErrors": [
      "Digitalizar punto frijol con longitud muy corta (1,5 mm), troquelando la tela y provocando la rotura de la aguja.",
      "Usar punto frijol en curvas cerradísimas de letras micro, deformando la tipografía por acumulación de hilo.",
      "Usar hilos gruesos calibre 30wt sin aflojar la tensión superior, provocando tirones que fruncen la tela."
    ],
    "troubleshootingTips": [
      "Configura una longitud de puntada de al menos 3,0 mm para que el grano de frijol luzca definido, elegante y con relieve.",
      "Usa una aguja calibre 80/12 para que el orificio dé paso fluido a las tres hebras superpuestas.",
      "Elige el punto frijol en vez del satín cuando bordes sobre telas rústicas como sarga, arpillera o lino grueso."
    ],
    "whenToAdjust": "Selecciona pespunte triple bean stitch cuando necesites un contorno visible y audaz que no se hunda en telas pesadas.",
    "dicaArtrelados": "El toque vintage Artrelados con punto frijol: Si estás digitalizando dibujos infantiles lineales de acuarela o animales de bosque, no les pongas satín negro brillante: ponles punto grano de frijol (Bean Stitch) con hilo marrón oscuro o gris carbón. El diseño adquirirá un estilo nórdico artesanal de boutique europea que enamorará a tus clientes de inmediato.",
    "voceSabia": "¿Sabías que los fabricantes de pantalones de mezclilla tradicionales utilizan variaciones del punto frijol de cinco pasadas para reforzar las esquinas de los bolsillos traseros, siendo capaces de soportar más de 50 kilos de tracción mecánica sin descoserse?",
    "practicalExercise": "Dibuja un corazón en tu software: a una mitad asígnale puntada recta simple de 2,5 mm y a la otra mitad puntada triple Bean Stitch de 3,0 mm. Bórdalo en un retazo de tela y compara al tacto y a la vista la imponente presencia tridimensional del punto frijol.",
    "quickSummary": "Pespunte lineal de triple pasada (dos adelante, una atrás) que crea contornos gruesos y con relieve artesanal.",
    "summary": "Pespunte lineal de triple pasada (dos adelante, una atrás) que crea contornos gruesos y con relieve artesanal.",
    "relatedTerms": [
      "Contorno de Bordado y Delineado Perimetral",
      "Longitud de Puntada de Bordado",
      "Llaveros y Monederos en el Bastidor con Sintético Montana",
      "Bordado In The Hoop (ITH)"
    ]
  },

  "c-083-controlador-tensao-eletronico-digital": {
    "term": "Controlador Electrónico Digital de Tensión Activa",
    "level": "Avanzado 🔴",
    "category": "Componentes de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "De los sistemas electromecánicos servocontrolados (Active Thread Tension Technology) desarrollados por Tajima, Barudan y Melco para sustituir los tensores de resorte manuales.",
    "definition": "Sistema mecatrónico digital avanzado gobernado por microprocesador que reemplaza los tensores analógicos de disco y resorte por actuadores electromagnéticos o motores de pasos que alimentan activamente la longitud matemática exacta de hilo requerida para cada puntada individual, variando la tensión en tiempo real según la velocidad, el ángulo y el espesor del tejido.",
    "howItWorks": [
      "1. La CPU calcula en microsegundos la longitud volumétrica exacta de hilo necesaria para la siguiente coordenada cartesiana.",
      "2. El actuador electromagnético o rodillo de alimentación activa motorizado (Acti-Feed) gira la fracción angular precisa liberando la cantidad justa de hilo.",
      "3. Elimina por completo la dependencia del jale de la aguja para sacar hilo del cono.",
      "4. Si la máquina acelera de 400 a 1200 PPM, el sistema compensa instantáneamente la inercia sin apretar ni aflojar la puntada.",
      "5. Permite programar tensiones numéricas independientes para cada aguja desde la pantalla táctil sin tocar perillas manuales.",
    ],
    "beginnerExplanation": "Es como tener un piloto automático inteligente para la tensión del hilo. En las máquinas tradicionales tienes que girar rueditas con números a mano para ajustar la tensión; en las máquinas con tensión activa digital, una computadora mide cada puntada y entrega la cantidad exacta de milímetros de hilo que necesita la aguja en cada segundo. No importa si coses rápido, despacio, en tela finita o en cuero grueso: la máquina regula la tensión sola y el bordado sale siempre perfecto.",
    "practicalExamples": [
      "Bordado continuo a 1200 PPM en gorras de béisbol sin variaciones de tensión entre paneles.",
      "Transición fluida en la misma prenda entre cuero rígido y seda sin calibrar tensores manuales.",
      "Guardado de perfiles de tensión digital por tipo de tela en la memoria interna de la máquina."
    ],
    "matrixParametersRelation": [
      "Alimentación bajo demanda (Feed-on-Demand): la longitud de hilo se calcula a partir de las coordenadas X-Y de la matriz.",
      "Compensación de velocidad dinámica: neutraliza el aumento de fricción a velocidades extremas.",
      "Reducción del estrés del hilado: prolonga la vida útil de hilos delicados de rayón o metálicos reduciendo roturas en un 90%."
    ],
    "commonErrors": [
      "Ingresar un grosor de tela incorrecto en el panel táctil, haciendo que el sistema alimente más o menos hilo del necesario.",
      "No limpiar los rodillos ópticos de alimentación de hilo, provocando lecturas descalibradas del sensor.",
      "Intentar ajustar manualmente piezas mecánicas de un cabezal de tensión activa servocontrolado."
    ],
    "troubleshootingTips": [
      "Calibra el sensor de espesor de material (Material Thickness Sensor) al montar un tipo nuevo de prenda en el bastidor.",
      "Verifica en la pantalla táctil que el valor numérico de tensión activa esté dentro del rango recomendado por el fabricante para ese tejido.",
      "Mantén las ruedas de arrastre del hilo libres de pelusa utilizando un pincel seco o aire comprimido limpio."
    ],
    "whenToAdjust": "Modifica el ajuste numérico de tensión activa en pantalla si el revés del bordado muestra exceso o falta de hilo blanco de canilla.",
    "dicaArtrelados": "El perfil de telas guardado Artrelados: Si tu máquina cuenta con control de tensión digital, guarda en la memoria tus recetas favoritas: crea un perfil llamado 'Piqué Polo', otro 'Toalla Baño' y otro 'Remera Jersey'. Cada vez que cambies de prenda, cargas el perfil en pantalla con un toque y la máquina se ajustará sola como por arte de magia sin hacer pruebas de costura.",
    "voceSabia": "¿Sabías que los sistemas de tensión activa fueron inspirados originalmente en los mecanismos de alimentación de cinta magnética de las grabadoras de audio de estudio de la NASA, donde la más mínima variación de tensión deformaba las señales de telemetría espacial?",
    "practicalExercise": "En una máquina con tensión activa digital, cambia la velocidad de 600 a 1000 PPM mientras borda: observa cómo la calidad y el aspecto de la puntada en el derecho y el revés permanecen idénticos gracias al recálculo electromagnético continuo.",
    "quickSummary": "Sistema digital con actuadores que entrega la cantidad exacta de hilo calculada por computadora para cada puntada.",
    "summary": "Sistema digital con actuadores que entrega la cantidad exacta de hilo calculada por computadora para cada puntada.",
    "relatedTerms": [
      "Control y Regulación de la Tensión del Hilo",
      "Balance de Tensión del Hilo (Proporción 1/3)",
      "Cabezal Multiaguja",
      "Control de Velocidad de Costura en Puntadas por Minuto"
    ]
  },

  "c-controle-de-qualidade-zero-defeito-no-atelie": {
    "term": "Control de Calidad Cero Defectos e Inspección Final",
    "level": "Intermedio 🟡",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "De la filosofía industrial japonesa de manufactura esbelta Kaizen y el principio Poka-Yoke (a prueba de errores) adaptado a ateliês de bordado de alta confección.",
    "definition": "Protocolo sistemático de control y verificación técnica aplicado en tres fases rigurosas (pre-bordado, durante la costura e inspección post-bastidor) para garantizar que ninguna prenda salga del ateliê con saltos de puntada, manchas de aceite, hebras colgantes, desalineaciones anatómicas, marcas de bastidor o entretelas ásperas en el revés.",
    "howItWorks": [
      "1. Fase 1 (Pre-bastidor): verificación de ortografía del nombre, código de hilo, centrado con tiza, aguja nueva sin rebabas y canilla llena.",
      "2. Fase 2 (En máquina): supervisión de las primeras 100 puntadas para corroborar tensión equilibrada (tercio blanco en revés) y ausencia de bucles.",
      "3. Fase 3 (Post-bastidor): desbastado de la prenda en mesa de luz para detectar hebras sueltas de salto y recortarlas a ras.",
      "4. Limpieza del revés: recorte redondeado de la entretela dejando margen de seguridad de 10 mm y aplicación de lámina termoadhesiva suave de protección.",
      "5. Vaporizado térmico: eliminación de marcas de aro (Hoop Burn) y disolución de marcas de tiza o película hidrosoluble superior.",
      "6. Embalaje premium: doblado, perfumado textil sutil y embolsado individual con etiqueta de instrucciones de lavado.",
    ],
    "beginnerExplanation": "Es la lista de chequeo sagrada que hace que tus clientes te amen y nunca te devuelvan un trabajo. Significa revisar la prenda como un detective antes de entregarla: que el nombre esté bien escrito sin faltas de ortografía, que no queden hilos largos sueltos, que no haya manchas de aceite de la máquina, que el revés esté suave y prolijo sin nudos duros y que la prenda esté planchada y perfumada lista para usar. ¡Es lo que diferencia a una aficionada de una profesional exitosa!",
    "practicalExamples": [
      "Revisión de nombres personalizados en 50 guardapolvos escolares para evitar entregar una prenda con una letra cambiada.",
      "Inspección de tensión en el revés de batas de spa para asegurar un acabado de satín esponjoso sin asperezas.",
      "Eliminación de halos de bastidor en camisas blancas de vestir mediante vapor vertical."
    ],
    "matrixParametersRelation": [
      "Tolerancia cero a hilos cortados en la cara superior: remoción meticulosa de colas con pinzas de precisión.",
      "Prueba de fuego del tercio blanco: el revés debe exhibir la proporción reglamentaria 1/3 de hilo de canilla central.",
      "Certificación de ortografía cruzada: corroboración del texto digital contra el pedido escrito del cliente antes de presionar Start."
    ],
    "commonErrors": [
      "Bordar nombres de memoria sin revisar el mensaje o ficha del cliente, cometiendo errores imperdonables de ortografía.",
      "Arrancar la entretela de cortar con fuerza bruta en vez de cortarla con tijeras, deformando la prenda y rompiendo puntadas.",
      "Entregar prendas con manchas de aceite o marcas de bastidor sin planchar.",
    ],
    "troubleshootingTips": [
      "Ten una estación de desbastado con buena luz blanca, pinzas finas de punta curva y tijera de cigüeña afilada.",
      "Si una gota de aceite salpica la tela, aplica inmediatamente tiza blanca en polvo o talco neutro: absorberá el aceite en 10 minutos sin frotar.",
      "Usa una plancha de vapor vertical para eliminar cualquier marca de bastidor en segundos sin aplastar el relieve del hilo."
    ],
    "whenToAdjust": "Aplica la lista de verificación de calidad en el 100% de las prendas que salgan de tu taller, sin excepciones.",
    "dicaArtrelados": "El perfume de la firma Artrelados: Rocía una bruma sutil de perfume para ropa (aroma a vainilla suave, algodón limpio o lavanda) sobre el papel de seda que envuelve la prenda terminada dentro de la bolsa plástica. Cuando tu cliente abra el paquete en su casa, sentirá un aroma celestial combinado con un bordado perfecto. Ese cliente jamás buscará otro ateliê en su vida.",
    "voceSabia": "¿Sabías que los mejores talleres de bordado de alta costura de Milán tienen una 'mesa de luz' inclinada donde colocan cada prenda a contraluz para que cualquier pequeño salto de puntada o microagujero quede al descubierto antes del planchado final?",
    "practicalExercise": "Toma la última prenda que bordaste. Hazle la inspección de los 6 puntos: 1. Ortografía, 2. Limpieza de hilos sueltos, 3. Tensión del revés, 4. Entretela prolija, 5. Sin marcas de bastidor, 6. Presentación. Descubre cómo pequeños retoques elevan el valor de tu trabajo.",
    "quickSummary": "Protocolo metódico de inspección antes, durante y después del bordado para asegurar entregas impecables sin fallas.",
    "summary": "Protocolo metódico de inspección antes, durante y después del bordado para asegurar entregas impecables sin fallas.",
    "relatedTerms": [
      "Protección Termoadhesiva de Revés (Cover-A-Stitch)",
      "Balance de Tensión del Hilo (Proporción 1/3)",
      "Mantenimiento Preventivo Mecánico",
      "Control y Regulación de la Tensión del Hilo"
    ]
  },

  "c-034-controle-de-tensao-da-linha": {
    "term": "Control y Regulación de la Tensión del Hilo",
    "level": "Iniciante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del principio mecánico de fricción controlada por discos y muelles calibrados inventado en las primeras máquinas de coser de pespunte doble en 1851.",
    "definition": "Ajuste dinámico y armónico de las fuerzas de resistencia aplicadas tanto al hilo superior (mediante los discos tensores del cabezal) como al hilo inferior (mediante el muelle de la caja de bobina), cuyo equilibrio exacto hace que el nudo de cruce de ambas hebras quede oculto en el centro del tejido, garantizando que el revés exhiba el tercio central de hilo blanco sin asomar en la cara superior.",
    "howItWorks": [
      "1. El hilo superior pasa entre dos discos metálicos presionados por un resorte helicoidal cuya fuerza se gradúa con una perilla numerada o tuerca moleteada.",
      "2. El hilo inferior pasa por debajo de una lámina metálica flexible presionada por un microtornillo en la caja de bobina.",
      "3. Al penetrar la aguja y subir el tirahilos, ambos hilos jalan con fuerzas contrarias.",
      "4. Si la tensión superior es correcta, el hilo de color de arriba rodea los bordes del satín hacia el revés ocupando aproximadamente un tercio de cada lado.",
      "5. El hilo blanco de la canilla queda centrado en el tercio interior del revés sin que ningún punto blanco asome jamás en la cara visible del diseño.",
    ],
    "beginnerExplanation": "Es como una cinchada de cuerda entre el hilo de arriba y el hilo de abajo. Si el hilo de arriba tira muy fuerte, el hilo blanco de abajo se asoma en la cara linda de la prenda y queda horrible; si el hilo de arriba está muy flojo, abajo se hace una maraña de lazos y nudos gigantescos. Regular la tensión es lograr que los dos hilos tiren con la fuerza justa para que el bordado quede limpio, liso y brillante como una joya.",
    "practicalExamples": [
      "Ajuste de tensión superior para bordar con hilo metálico fino aflojando la perilla un punto.",
      "Prueba de la letra 'I' mayúscula de satín para verificar el balance de un tercio blanco en el revés.",
      "Regulación de tensión en máquinas industriales multiaguja calibrando aguja por aguja de forma independiente."
    ],
    "matrixParametersRelation": [
      "Regla de oro del tercio blanco (1/3): en el revés de una columna satín, debe verse 1/3 de color a la izquierda, 1/3 de blanco en el medio y 1/3 de color a la derecha.",
      "Interacción con el calibre del hilo: hilos finos 60wt requieren mayor presión tensora que hilos estándar 40wt.",
      "Tensión de bobina fija: la bobina se calibra primero a 20 gramos y nunca se toca; todas las agujas superiores se adaptan a ella."
    ],
    "commonErrors": [
      "Girar desesperadamente las perillas superiores sin haber verificado primero si el hilo saltó fuera de la palanca tirahilos.",
      "Apretar la caja de bobina para compensar un enhebrado superior defectuoso con el prensatelas bajado.",
      "No realizar pruebas de pespunte al cambiar de marca o tipo de hilo en el taller."
    ],
    "troubleshootingTips": [
      "Enhebra siempre la máquina con el prensatelas levantado para que el hilo entre profundamente entre los discos de tensión.",
      "Si ves puntitos blancos de canilla arriba en tu bordado, afloja la tensión superior bajando un número en la perilla o aprieta suavemente la bobina.",
      "Si ves lazos sueltos de hilo de color en el revés, aprieta la tensión superior subiendo un número en la perilla."
    ],
    "whenToAdjust": "Revisa la tensión cada vez que cambies de tipo de hilo (de poliéster brillante a hilo metálico o de algodón).",
    "dicaArtrelados": "El test de la letra 'I' Artrelados: Cada mañana antes de empezar a producir, borda una letra 'I' mayúscula de satín de 2,5 cm de alto en un retazo con entretela. Dale vuelta a la tela y mira el revés: si ves la franja blanca de la canilla ocupando el tercio central prolijo, tu máquina está calibrada como un violín y lista para trabajar todo el día sin problemas.",
    "voceSabia": "¿Sabías que en las máquinas de bordar a 1000 puntadas por minuto los discos tensores abren y cierran su presión más de 16 veces por segundo para permitir el escape libre del hilo durante el salto del tirahilos?",
    "practicalExercise": "Borda una columna de satín de 4 mm con tu tensión habitual. Dale la vuelta y mírala con lupa: identifica la franja blanca central y las dos bandas de color laterales. Ajusta medio punto la perilla superior y comprueba cómo cambia inmediatamente la proporción de color en el revés.",
    "quickSummary": "Regulación armónica de las fuerzas del hilo superior e inferior para lograr el tercio blanco perfecto en el revés.",
    "summary": "Regulación armónica de las fuerzas del hilo superior e inferior para lograr el tercio blanco perfecto en el revés.",
    "relatedTerms": [
      "Balance de Tensión del Hilo (Proporción 1/3)",
      "Tensiómetro de Bobina y Medidor de Tensión",
      "Controlador Electrónico Digital de Tensión Activa",
      "Conjunto de Pretensión Superior y Subtensor del Cabezal"
    ]
  },

  "c-029-controle-de-velocidade": {
    "term": "Control de Velocidad de Costura en Puntadas por Minuto",
    "level": "Iniciante 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del tacómetro de revoluciones por minuto (Stitches Per Minute - SPM / PPM) aplicado al control dinámico de servomotores industriales.",
    "definition": "Parámetro operativo fundamental que determina el ritmo de producción cinemático del cabezal de bordado, expresado en puntadas por minuto (PPM), regulable mediante potenciómetros deslizantes en máquinas familiares o menús digitales en consolas industriales, cuyo ajuste estratégico optimiza la calidad de puntada, disipa el calor térmico y evita roturas en hilos delicados o telas complejas.",
    "howItWorks": [
      "1. El operador fija el límite máximo de velocidad en la consola (por ejemplo, 650 PPM para gorras o 1000 PPM para prendas planas).",
      "2. El servomotor de corriente continua acciona el árbol principal acelerando hasta la velocidad consignada.",
      "3. El procesador incorpora algoritmos de rampa que reducen automáticamente la velocidad en puntadas largas de más de 6 mm para permitir el desplazamiento del bastidor sin vibración.",
      "4. Al bordar curvas cerradas o satines de alta densidad, la máquina desacelera suavemente para proteger la formación del lazo.",
      "5. Al llegar a tramos rectos largos, acelera de forma progresiva maximizando la productividad sin tirones mecánicos.",
    ],
    "beginnerExplanation": "Es el acelerador de tu máquina de bordar, que mide qué tan rápido cose contando cuántas puntadas clava por minuto (PPM). Las máquinas familiares suelen coser entre 400 y 800 puntadas por minuto, y las industriales llegan hasta 1000 o 1200. No siempre coser a fondo es lo mejor: si estás bordando con hilos difíciles como los dorados, telas gruesas o gorras duras, bajarle un poco la velocidad a la máquina hace que cosa como una seda sin cortar el hilo jamás.",
    "practicalExamples": [
      "Reducción a 550 PPM para bordados seguros con hilos metálicos dorados o plateados.",
      "Aceleración a 850-950 PPM en producción continua de parches planos sobre sarga.",
      "Baja de velocidad a 600 PPM al bordar sobre costuras gruesas de pantalones vaqueros o gorras armadas."
    ],
    "matrixParametersRelation": [
      "Velocidad adaptativa automática: el software desacelera cuando la longitud de salto o puntada excede los límites mecánicos del pantógrafo.",
      "Disipación térmica: menores velocidades reducen la temperatura por fricción en el ojo de la aguja.",
      "Estabilidad del bastidor: evitar vibraciones que desalineen contornos finos en bastidores de gran formato."
    ],
    "commonErrors": [
      "Bordar siempre a la velocidad máxima permitida por la máquina con hilos metálicos, provocando roturas cada 30 segundos.",
      "Bordar gorras estructuradas a 1000 PPM, produciendo flexión de aguja y choques destructivos contra la placa.",
      "Bajar la velocidad al mínimo absoluto (300 PPM) para todo tipo de trabajo, duplicando innecesariamente los costos de tiempo de taller."
    ],
    "troubleshootingTips": [
      "Utiliza 650 a 700 PPM como velocidad de crucero óptima para el 90% de los trabajos de ateliê: equilibrio perfecto entre velocidad y cero fallas.",
      "Baja a 500-600 PPM cuando uses hilos especiales (metálicos, fotoluminiscentes, lana o hilos gruesos 30wt).",
      "Si notas que la máquina vibra en tu mesa al subir la velocidad, baja 100 PPM y asegura que la mesa esté bien nivelada."
    ],
    "whenToAdjust": "Modifica la velocidad cada vez que cambies de tipo de hilo o cuando enfrentes materiales difíciles con costuras gruesas.",
    "dicaArtrelados": "La velocidad del dinero Artrelados: Muchas bordadoras principiantes creen que para ganar más dinero hay que poner la máquina a 1000 puntadas por minuto a fondo. Pero si a esa velocidad el hilo se te corta tres veces en un diseño, tardarás 10 minutos más enhebrando y arreglando nudos. Si bajas la máquina a 750 PPM, coserá parejito sin frenar una sola vez y terminarás tu pedido 15 minutos antes. ¡La verdadera velocidad es no frenar!",
    "voceSabia": "¿Sabías que las máquinas de bordar industriales más rápidas del mundo alcanzan las 1500 puntadas por minuto, lo que significa que la aguja baja, clava en la tela, forma el lazo con el garfio y sube 25 veces en un solo segundo?",
    "practicalExercise": "Carga un diseño sencillo. Borda una mitad a 400 PPM escuchando el ritmo tranquilo del motor. Luego súbela a 800 PPM y siente el cambio de aceleración: aprende a reconocer de oído el ritmo donde tu máquina suena más descansada y armoniosa.",
    "quickSummary": "Regulación de las puntadas por minuto (PPM) para equilibrar la productividad con el cuidado del hilo y la tela.",
    "summary": "Regulación de las puntadas por minuto (PPM) para equilibrar la productividad con el cuidado del hilo y la tela.",
    "relatedTerms": [
      "Servomotor de Árbol Principal",
      "Controlador Electrónico Digital de Tensión Activa",
      "Aguja para Hilos Metálicos",
      "Pantógrafo de Máquina de Bordar"
    ]
  },

  "c-038-conversao-de-arquivo-de-bordado": {
    "term": "Conversión de Archivos y Formatos de Bordado",
    "level": "Iniciante 🟢",
    "category": "Softwares & Formatos",
    "grammarClass": "Locución nominal femenina",
    "origin": "De la necesidad de interoperabilidad informática entre las diferentes marcas propietarias de máquinas de bordar (Brother, Janome, Bernina, Singer, Tajima).",
    "definition": "Proceso de traducción digital mediante software especializado que transforma un archivo de matriz de bordado desde su formato nativo original a otro formato compatible con la máquina de destino, transcribiendo las coordenadas vectoriales de puntada, saltos, paradas de cambio de hilo y órdenes de corte a la estructura binaria específica del nuevo fabricante.",
    "howItWorks": [
      "1. El operador abre el archivo de diseño en un programa de conversión o digitalización (por ejemplo, Wilcom, TrueSizer, Embrilliance o Hatch).",
      "2. El software decodifica las coordenadas cartesianas X-Y y la tabla de comandos de costura del archivo original.",
      "3. El usuario selecciona la función 'Guardar como' o 'Exportar archivo de máquina'.",
      "4. Se elige el formato de destino deseado (.PES para Brother, .JEF para Janome, .DST universal, .VP3 para Husqvarna/Pfaff, etc.).",
      "5. El conversor reescribe el encabezado binario y el bloque de puntadas, generando un nuevo archivo listo para transferir por USB a la máquina.",
    ],
    "beginnerExplanation": "Es como usar un traductor de idiomas para los archivos de bordado. Como cada marca de máquina habla su propio 'idioma' (las Brother leen archivos .PES, las Janome leen .JEF y las industriales leen .DST), si tienes un archivo en un formato que tu máquina no entiende, este proceso lo convierte al formato correcto en dos segundos para que tu máquina lo pueda leer y bordar sin problemas.",
    "practicalExamples": [
      "Conversión de una matriz .PES comprada en internet a formato .JEF para bordarla en una máquina Janome.",
      "Exportación de un diseño moderno a formato universal .DST para producción en máquinas industriales Tajima o Barudan.",
      "Conversión masiva por lotes de 100 archivos antiguos para modernizar el catálogo del ateliê."
    ],
    "matrixParametersRelation": [
      "Preservación de comandos de corte (Trims): verificar que el conversor mantenga los cortes automáticos de hilo originales.",
      "Pérdida de paleta de colores en formatos industriales: el formato universal .DST no guarda colores reales, por lo que se deben asignar manualmente en la máquina.",
      "Comprobación de escala 1:1: asegurar que las medidas en milímetros no se alteren durante la exportación."
    ],
    "commonErrors": [
      "Cambiar la extensión del archivo a mano renombrándolo en Windows (por ejemplo, cambiar .PES a .JEF escribiendo con el teclado), dañando el archivo al corromper su estructura binaria interna.",
      "Convertir un formato de puntada fija (.DST) a otro formato y pretender escalarlo al doble de tamaño sin redigitalizar.",
      "Olvidar que los formatos antiguos tienen límites de tamaño de bastidor y rechazan diseños que superen sus dimensiones."
    ],
    "troubleshootingTips": [
      "Utiliza programas de conversión oficiales y confiables como Wilcom Workspace o convertidores certificados gratuitos.",
      "Guarda siempre tu archivo original de diseño máster (.EMB o .ART) en una carpeta segura antes de exportar a formatos de máquina.",
      "Abre el archivo recién convertido en un visor de puntadas para comprobar que las medidas y el número de puntadas sigan intactos."
    ],
    "whenToAdjust": "Convierte el archivo cada vez que compres una matriz en un formato diferente al que lee tu modelo de máquina.",
    "dicaArtrelados": "El salvavidas universal Artrelados: Si tienes un cliente que te mandó una matriz y tu máquina no la lee o dice 'error de archivo', guárdala como formato Tajima (.DST). Es el formato más noble y antiguo del mundo: no tiene colores predefinidos pero el 100% de las máquinas del planeta lo abren y lo bordan a la perfección. ¡Te sacará de apuros siempre!",
    "voceSabia": "¿Sabías que los primeros formatos de archivo de bordado fueron desarrollados en tarjetas perforadas de cartón por el inventor francés Joseph Marie Jacquard en 1801, sentando las bases de lo que más tarde sería la informática moderna?",
    "practicalExercise": "Toma un archivo de bordado de tu computadora. Ábrelo en tu programa o visor gratuito y expórtalo en formato .DST y en formato .PES. Abre ambos archivos y comprueba cómo las medidas se mantienen exactamente idénticas en ambas versiones.",
    "quickSummary": "Traducción digital de matrices entre formatos de diferentes marcas (.PES, .JEF, .DST) para compatibilidad con la máquina.",
    "summary": "Traducción digital de matrices entre formatos de diferentes marcas (.PES, .JEF, .DST) para compatibilidad con la máquina.",
    "relatedTerms": [
      "Conversión entre Formatos de Matriz",
      "Formato Tajima (.DST)",
      "Formato de Archivo .PES",
      "Software de Ponchado y Digitalización"
    ]
  },

  "c-057-conversao-de-formatos-de-matriz": {
    "term": "Conversión entre Formatos de Matriz",
    "level": "Intermedio 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Locución nominal femenina",
    "origin": "De los estándares de codificación binaria propietarios creados por consorcios tecnológicos japoneses, europeos y norteamericanos desde los años 1980.",
    "definition": "Especialización técnica de traducción y gestión de formatos de bordado que distingue entre formatos de objeto de diseño paramétrico editable (.EMB, .ART, .JAN) y formatos de puntada pura de máquina de bajo nivel (.PES, .JEF, .EXP, .DST, .XXX, .HUS, .VP3), gestionando la integridad de comandos de cortahilos, asignación de colores y compensaciones de densidad durante el traspaso.",
    "howItWorks": [
      "1. Archivos de diseño enriquecido (.EMB, .ART): contienen curvas vectoriales, propiedades de puntada, tipos de relleno y fuentes tipográficas totalmente reescalables.",
      "2. Al exportar a un formato de máquina (.PES, .JEF): el software 'congela' los vectores convirtiéndolos en una lista de coordenadas de puntada física (X, Y).",
      "3. El formato Tajima (.DST): guarda coordenadas y saltos pero carece de cabecera de color (utiliza colores aleatorios en pantalla).",
      "4. El formato Brother (.PES): almacena coordenadas, colores indexados, datos de bastidor y vista previa en miniatura de alta definición.",
      "5. El software conversor reasigna las tablas de color correspondientes y recalcula los códigos de fin de color y salto para cada marca.",
    ],
    "beginnerExplanation": "Es la guía para entender por qué hay tantos tipos de archivos en el bordado. Los archivos que terminan en .EMB o .ART son como los archivos editables de diseño donde puedes cambiar todo fácilmente; y los archivos que terminan en .PES, .JEF o .DST son los archivos finales 'listos para coser' que van directo a la máquina. Convertir entre ellos correctamente te asegura que la máquina respete los cortes de hilo, las medidas y los colores del dibujo.",
    "practicalExamples": [
      "Conversión de archivos .PES de máquinas Brother para usarlos en máquinas Singer (.XXX) o Janome (.JEF).",
      "Exportación de archivos .EXP para máquinas Bernina y Melco industriales.",
      "Traducción de matrices para máquinas Husqvarna Viking utilizando formato .VP3 con información de hilos."
    ],
    "matrixParametersRelation": [
      "Mantenimiento de los comandos de parada (Stops): esenciales para técnicas ITH y apliques al cambiar de formato.",
      "Límite máximo de coordenadas: formatos antiguos como .DST manejan desplazamientos máximos de salto de 12,1 mm por instrucción binaria.",
      "Conservación de la paleta de color: formatos como .PES y .VP3 conservan los tonos exactos en la pantalla de la consola."
    ],
    "commonErrors": [
      "Intentar agrandar o achicar un archivo .DST convertido como si fuera un vector editable, arruinando la densidad de puntada.",
      "Convertir un diseño que supera las medidas del bastidor físico de la máquina receptora, impidiendo que la máquina cargue el archivo.",
      "Perder los colores reales al exportar a formatos neutros industriales sin imprimir la hoja de producción con la guía de tonos."
    ],
    "troubleshootingTips": [
      "Conserva siempre una copia del archivo máster editable (.EMB) de cada matriz que digitalices en tu taller.",
      "Al convertir a .DST, anota en un papel o imprime la hoja técnica de colores para saber qué cono montar en cada cambio.",
      "Verifica que el software conversor no elimine los remates de seguridad al traducir entre formatos propietarios."
    ],
    "whenToAdjust": "Elige el formato nativo exacto de tu máquina cada vez que exportes desde el software de digitalización.",
    "dicaArtrelados": "La tabla de memoria rápida Artrelados para formatos de máquina: Guárdate esta reglita de tres en tu ateliê: Brother / Baby Lock = .PES; Janome / Elna = .JEF; Bernina = .EXP o .ART; Singer = .XXX; Husqvarna / Pfaff = .VP3; Máquinas industriales de todas las marcas = .DST. ¡Con esta tablita en tu pared sabrás qué formato usar en un segundo!",
    "voceSabia": "¿Sabías que el formato .DST fue creado en 1985 por la empresa japonesa Tajima y sus siglas significan 'Data Stitch Tajima', convirtiéndose en el formato más longevo y universal de toda la historia de la informática textil?",
    "practicalExercise": "Abre un diseño en tu programa. Expórtalo a formato .PES y luego a formato .DST. Abre ambos archivos en la pantalla de tu máquina o visor: comprueba cómo el archivo .PES muestra los colores reales del diseño mientras el archivo .DST muestra colores genéricos, demostrando cómo funciona cada formato.",
    "quickSummary": "Gestión técnica de equivalencias entre formatos vectoriales editables (.EMB) y formatos de puntada final (.PES, .JEF, .DST).",
    "summary": "Gestión técnica de equivalencias entre formatos vectoriales editables (.EMB) y formatos de puntada final (.PES, .JEF, .DST).",
    "relatedTerms": [
      "Conversión de Archivos y Formatos de Bordado",
      "Formato Tajima (.DST)",
      "Formato de Archivo .PES",
      "Software de Ponchado y Digitalización"
    ]
  },

  "c-090-conversao-paletas-rgb-linhas-comerciais": {
    "term": "Conversión de Paletas RGB a Hilos Comerciales",
    "level": "Intermedio 🟡",
    "category": "Softwares & Formatos",
    "grammarClass": "Locución nominal masculina",
    "origin": "De los espacios de color tricromáticos de luz digital (RGB - Red, Green, Blue) y la fórmula matemática de diferencia cromática Delta-E (CIE 1976 / CIEDE2000) aplicada a pigmentos textiles.",
    "definition": "Algoritmo computacional de coincidencia cromática que analiza los valores numéricos RGB de una imagen gráfica digital en pantalla y calcula matemáticamente la menor distancia espectrofotométrica para seleccionar el código numérico de cono de hilo real más cercano dentro del catálogo del fabricante elegido.",
    "howItWorks": [
      "1. El operador carga una imagen gráfica de un logotipo (en formato PNG o JPG) en el software de bordado.",
      "2. El algoritmo analiza el valor RGB de cada píxel (por ejemplo: R=220, G=30, B=45 para un rojo intenso).",
      "3. El software traduce los valores RGB al espacio de color perceptual LAB (que simula la visión del ojo humano).",
      "4. Mediante la fórmula matemática Delta-E, compara ese color con los cientos de muestras de hilo digitalizadas en la base de datos de la marca seleccionada.",
      "5. El programa sugiere automáticamente el número de cono exacto (por ejemplo: Madeira 1147 o Isacord 1902) con el menor margen de discrepancia visual.",
    ],
    "beginnerExplanation": "Es el traductor de colores de la computadora que convierte los colores de una foto en números reales de conos de hilo. Como las fotos en la pantalla de la computadora están hechas de luces de colores (rojo, verde y azul), y los hilos son de tela teñida con tintes reales, este algoritmo busca en la fábrica de hilos el cono que más se parezca al color de la foto para que no tengas que adivinar a ojo cuál comprar.",
    "practicalExamples": [
      "Conversión automática de un logotipo vectorial corporativo a los conos exactos de la carta de hilos disponible en el taller.",
      "Selección automática de sombras y luces para degradados en rostros y paisajes textiles.",
      "Búsqueda del tono de hilo más cercano para combinar con el color de una tela estampada."
    ],
    "matrixParametersRelation": [
      "Fórmula de distancia cromática (Delta-E): valores de Delta-E menores a 2,0 son prácticamente imperceptibles para el ojo humano.",
      "Influencia del brillo y acabado: los valores RGB no contemplan el brillo trilobal ni el acabado mate, por lo que la confirmación visual física en la carta de hilos sigue siendo indispensable.",
      "Asignación directa a las paradas de la matriz: vincula cada bloque de diseño con el código numérico sugerido."
    ],
    "commonErrors": [
      "Confiar ciegamente en la conversión automática sin verificar con la carta de hilos física bajo luz real.",
      "Usar imágenes de baja calidad con sombras comprimidas en JPG, provocando que el software sugiera tonos sucios o apagados.",
      "Olvidar que los monitores de computadora sin calibrar muestran colores que difieren de la realidad textil."
    ],
    "troubleshootingTips": [
      "Utiliza imágenes vectoriales limpias (AI, SVG, EPS) o imágenes de alta resolución para que el algoritmo capture el color puro.",
      "Compara siempre el cono de hilo sugerido contra tu carta física de colores reales bajo luz blanca natural.",
      "Configura tu marca de hilos favorita como biblioteca predeterminada en las opciones de color de tu software."
    ],
    "whenToAdjust": "Utiliza este algoritmo cada vez que digitalices un logotipo nuevo a partir de una imagen provista por un cliente.",
    "dicaArtrelados": "El chequeo de luz natural Artrelados: Aunque el software te diga con total seguridad qué número de cono usar según la foto de la computadora, toma siempre el cono de hilo físico, sal a la puerta de tu taller o acércalo a una ventana con luz natural de día y apóyalo sobre la prenda del cliente. La luz del sol es el juez definitivo que nunca miente.",
    "voceSabia": "¿Sabías que la fórmula Delta-E utilizada por los programas de bordado para comparar colores fue desarrollada originalmente por la Comisión Internacional de la Iluminación (CIE) en Viena y es la misma que usan los laboratorios de pintura automotriz de Ferrari?",
    "practicalExercise": "Carga un logotipo con un color azul en tu software de ponchado. Utiliza la herramienta 'Coincidencia automática de hilo' y mira qué número de código de tu marca te sugiere el programa. Compara ese número con tu catálogo físico y confirma la asombrosa cercanía del tono.",
    "quickSummary": "Algoritmo digital que traduce los colores de pantalla (RGB) al código numérico de cono de hilo real más parecido.",
    "summary": "Algoritmo digital que traduce los colores de pantalla (RGB) al código numérico de cono de hilo real más parecido.",
    "relatedTerms": [
      "Carta de Colores y Tabla de Conversión de Hilos",
      "Paleta de Colores Personalizada en el Software",
      "Código Numérico de Color de Hilo",
      "Brillo del Hilo (Thread Sheen)"
    ]
  },

  "c-092-cording-aplicacao-cordao-grosso": {
    "term": "Dispositivo de Aplicación de Cordón Grueso",
    "level": "Avanzado 🔴",
    "category": "Equipamiento & Herramientas",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del término inglés Cording Device (dispositivo de cordón) y soutache, adaptado a la robótica de bordado por Tajima y Barudan para moda de alta gama.",
    "definition": "Dispositivo accesorio electromecánico compuesto por un prensatelas ranurado con guía tubular orientable y un sistema de alimentación motriz montado en el cabezal de bordado, diseñado para guiar y coser cordones gruesos, cintas, soutache o cordoncillos de fantasía sobre la tela mediante puntadas de zigzag estrechas que abrazan el cordón fijándolo con precisión milimétrica.",
    "howItWorks": [
      "1. El cordón grueso o cinta decorativa se alimenta desde un carrete suspendido en la parte superior del cabezal.",
      "2. El cordón desciende atravesando el tubo guía orientable del dispositivo de cording.",
      "3. La punta del tubo ubica el cordón directamente debajo de la aguja con la orientación exacta del avance del bastidor.",
      "4. La máquina utiliza hilo fino transparente de monofilamento o hilo del mismo color del cordón en la aguja superior.",
      "5. La aguja ejecuta un pespunte en zigzag oscilante que clava a ambos lados del cordón abrazándolo firmemente contra la tela sin perforar su núcleo central.",
      "6. Permite trazar líneas caligráficas, volutas barrocas y contornos de gran volumen con rapidez industrial.",
    ],
    "beginnerExplanation": "Es un accesorio especial que se le agrega a la máquina para poder coser cordones gruesos, soguitas de adorno o cintas doradas arriba de la ropa. Como esos cordones son muy gordos y no pasan por el ojo de la aguja, este aparatito sostiene el cordón en su lugar mientras la aguja va cosiendo en zigzag por encima para 'abrazarlo' y dejarlo bien pegado a la tela. Queda con un relieve imponente y un estilo de vestido de fiesta espectacular.",
    "practicalExamples": [
      "Detalles barrocos con cordón dorado soutache en trajes de gala y vestidos de novia.",
      "Letras caligráficas con cordón grueso en camperas de moda y buzos de diseño.",
      "Guardas decorativas en mantelería de lujo y almohadones de decoración de interiores."
    ],
    "matrixParametersRelation": [
      "Matrices diseñadas para Cording: programadas con puntada recta o zigzag estrecho que sigue exactamente la trayectoria del cordón.",
      "Rotación del dispositivo: en sistemas avanzados de cording, un motor paso a paso gira la guía del cordón en 360 grados sincronizado con el pantógrafo.",
      "Velocidad de máquina calibrada: coser a velocidades moderadas de 500 a 700 PPM para una colocación prolija en curvas cerradas."
    ],
    "commonErrors": [
      "Usar un zigzag muy estrecho que clava la aguja en el medio del cordón en vez de abrazarlo por los bordes, deshilachando el hilado.",
      "Tirar del cordón con fuerza con la mano frenando la alimentación del dispositivo.",
      "Bordar curvas extremadamente agudas a alta velocidad, haciendo que el cordón se desvíe y escape de la guía del prensatelas."
    ],
    "troubleshootingTips": [
      "Utiliza hilo invisible de monofilamento de poliamida en la aguja superior si deseas que las puntadas de sujeción no se noten en absoluto.",
      "Asegúrate de que el cordón desbobine suavemente desde su carrete superior sin tirones ni trabas.",
      "En curvas pronunciadas, reduce la velocidad de la máquina a 500 PPM para que la guía del cordón gire suavemente con el bastidor."
    ],
    "whenToAdjust": "Instala el dispositivo de cordón cada vez que desees realizar efectos de realce grueso de alta costura sin sobrecargar de puntadas la tela.",
    "dicaArtrelados": "El tip del hilo invisible Artrelados para cordón: Cuando apliques cordón grueso de color o dorado, enhebra tu aguja con hilo transparente de nylon ultrafino (calibre 0,08 mm). Las puntadas de zigzag abrazarán el cordón con una fuerza indestructible pero serán 100% invisibles a la vista: parecerá que el cordón flotara pegado mágicamente sobre la prenda con un acabado digno de la alta costura europea.",
    "voceSabia": "¿Sabías que los dispositivos de cordón computarizados modernos de 360 grados giran con micromotores sincronizados en tiempo real con los ejes X e Y del pantógrafo para que la boquilla siempre apunte en la dirección exacta hacia donde viaja la costura?",
    "practicalExercise": "Observa un vestido de fiesta con detalles de cordón soutache: pasa los dedos para sentir la firmeza del cordón y mira de cerca cómo una puntada fina casi invisible lo abraza a cada milímetro manteniéndolo soldado a la tela.",
    "quickSummary": "Dispositivo con prensatelas ranurado que guía y cose cordones gruesos sobre la tela mediante puntadas en zigzag.",
    "summary": "Dispositivo con prensatelas ranurado que guía y cose cordones gruesos sobre la tela mediante puntadas en zigzag.",
    "relatedTerms": [
      "Prensatelas de Bordado con Resorte",
      "Puntada Satín (Satin Stitch)",
      "Cabezal de Bordado",
      "Técnicas Especiales de Relieve"
    ]
  },

  "c-026-cores-de-linha": {
    "term": "Colores y Selección Cromática de Hilos",
    "level": "Iniciante 🟢",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal femenina",
    "origin": "De la teoría del color de Johannes Itten y los procesos de teñido en madeja y cono bajo normas de solidez a la luz y al lavado químico.",
    "definition": "Conjunto de principios estéticos, técnicos y químicos relativos a la selección, armonización y comportamiento de los tonos de hilo en el bordado computarizado, considerando factores como el contraste con la tela de fondo, el brillo según el ángulo de luz, la solidez cromática frente al cloro y el lavado, y la correspondencia visual con logotipos corporativos.",
    "howItWorks": [
      "1. La bordadora evalúa la tela de soporte considerando su color, textura y caída.",
      "2. Se eligen colores con suficiente contraste tonal (por ejemplo, colores claros sobre fondos oscuros o colores saturados sobre fondos neutros).",
      "3. Se selecciona el tipo de filamento: poliéster trilobal (alto brillo y resistencia al cloro) o rayón viscosa (brillo sedoso suave de alta costura).",
      "4. Se verifica la orientación angular de las puntadas en la matriz: el mismo hilo de color cambia de tono aparente según cómo le dé la luz al relieve.",
      "5. Se agrupan los colores en la secuencia de bordado para minimizar los cambios de aguja y cortes de hilo.",
    ],
    "beginnerExplanation": "Es el arte y la técnica de elegir los colores de hilo adecuados para cada trabajo. No se trata solo de que quede lindo: hay que pensar en que el dibujo resalte bien sobre el color de la remera, que los hilos no destiñan cuando el cliente lave la prenda con lavandina o agua caliente, y que los tonos combinen armoniosamente. Saber elegir los colores transforma un bordado común en una verdadera obra de arte.",
    "practicalExamples": [
      "Elección de tonos contrastantes para letras legibles en uniformes de seguridad (blanco o amarillo sobre azul marino).",
      "Uso de tonos matizados (degradados) de 3 colores para crear volumen en rostros y flores.",
      "Selección de hilos de poliéster 100% resistentes a lavados con cloro para sábanas de hoteles y toallas."
    ],
    "matrixParametersRelation": [
      "Orden cronológico de colores (Color Sequence): planificar la costura de colores oscuros de fondo primero y detalles claros al final.",
      "Ángulos de puntada contrastantes: variar los ángulos en 90° entre objetos del mismo color para que la luz los diferencie como piezas separadas.",
      "Asignación de conos a agujas: mapeo digital en la consola de la máquina para producción continua."
    ],
    "commonErrors": [
      "Bordar letras oscuras (azul marino o marrón) sobre telas oscuras (negras o grises), haciendo que el bordado sea invisible a más de un metro.",
      "Usar hilo de rayón en uniformes de trabajo que se lavan con lavandina, provocando la decoloración inmediata del bordado.",
      "No considerar el brillo del hilo: telas muy brillantes pueden competir visualmente con el bordado apagando su protagonismo."
    ],
    "troubleshootingTips": [
      "Para textos corporativos, busca siempre un alto contraste de valor lumínico entre el hilo y la tela de la prenda.",
      "Utiliza hilo 100% poliéster para uniformes de trabajo, ropa deportiva y toallas: resiste el lavado con cloro sin perder un ápice de color.",
      "Si tienes que bordar dos piezas del mismo color que se tocan, cambia el ángulo de puntada entre ellas: la luz creará dos tonos visuales distintos con el mismo cono."
    ],
    "whenToAdjust": "Revisa la paleta de colores antes de montar los conos en la máquina para confirmar la aprobación del cliente.",
    "dicaArtrelados": "El truco del ángulo para ahorrar conos Artrelados: Si tienes que bordar una manzana roja con dos gajos y quieres que se noten separados pero no tienes dos tonos de rojo distintos en tu taller, no te preocupes: borda el primer gajo con el hilo a 45 grados y el segundo gajo con el mismo hilo a 135 grados. La luz reflejará de forma diferente en cada gajo y parecerán dos tonos de rojo distintos hechos por un maestro pintor.",
    "voceSabia": "¿Sabías que los ojos humanos son capaces de distinguir más de 10 millones de matices de color diferentes, pero que nuestro cerebro es especialmente sensible a las variaciones de brillo en las fibras textiles gracias a la orientación de las puntadas?",
    "practicalExercise": "Coloca un cono de hilo rojo brillante bajo la lámpara de tu mesa. Gíralo con la mano y observa cómo cambia de un rojo fuego encendido a un rojo oscuro profundo según cómo le pega el rayo de luz: entenderás para siempre la magia de la orientación del hilo en el bordado.",
    "quickSummary": "Principios estéticos y técnicos de selección de tonos, contraste y solidez de los hilos para maximizar la belleza del diseño.",
    "summary": "Principios estéticos y técnicos de selección de tonos, contraste y solidez de los hilos para maximizar la belleza del diseño.",
    "relatedTerms": [
      "Carta de Colores y Tabla de Conversión de Hilos",
      "Código Numérico de Color de Hilo",
      "Brillo del Hilo (Thread Sheen)",
      "Hilo de Poliéster Trilobal"
    ]
  }
}

content = """import { Verbete } from "../../types";

export const LOTE5_C_PART1_ES: Record<string, Partial<Verbete>> = """ + json.dumps(PART1_DATA, indent=2, ensure_ascii=False) + """;
"""

with open("src/data/lote5_c/part1.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated lote5_c part1.ts with {len(PART1_DATA)} verbetes.")

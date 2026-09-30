import { Verbete } from "../../types";

export const LOTE4_PART3_ES: Record<string, Partial<Verbete>> = {
  "a-035-autodeteccao-de-fim-de-linha-bobina": {
    "term": "Autodetección de Rotura y Fin de Hilo de Canilla",
    "level": "Fundamental 🟢",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución sustantiva femenina técnica",
    "origin": "Del griego autos (por sí mismo) y del latín detectio (revelación o aviso sensorial). Sistema sensorial mecatrónico óptico y piezoeléctrico incorporado a las bordadoras industriales desde los años 1990.",
    "summary": "Sensores mecatrónicos de rueda de pulsos y fotocélula infrarroja que detienen la máquina al instante cuando se rompe el hilo superior o se agota la canilla.",
    "definition": "La autodetección de fin de línea y bobina (Thread Break & Low Bobbin Sensor System) es el sistema de control sensorial mecatrónico que monitoriza en tiempo real la continuidad de la alimentación del hilo superior y la presencia de hilo en la caja de bobina inferior. Se basa en dos sensores principales: un sensor de giro mecánico o rueda codificadora óptica superior, movida por la fricción del hilo en su avance, y un sensor infrarrojo o de conteo de puntadas inferior calibrado para advertir el agotamiento de la canilla. Al detectar la detención del flujo de hilo durante 2 a 4 puntadas consecutivas, el microcontrolador frena de inmediato el motor principal, activa una alarma luminosa y retrocede automáticamente el pantógrafo.",
    "howItWorks": "1. El hilo superior gira una pequeña polea ranurada provista de ranuras ópticas o imanes bipolares.\n2. Con cada descenso de aguja, el sensor envía un pulso eléctrico a la placa lógica.\n3. Si la aguja baja sin que la polea gire (rotura o desenebrado), el circuito corta la corriente del motor.\n4. La pantalla muestra el número de aguja afectada y la máquina retrocede 3 puntadas para reiniciar la costura.",
    "beginnerExplanation": "Es el 'ojo inteligente' de la bordadora. Si el hilo de arriba se corta o se acaba el hilo blanco de abajo en la canilla, usted no tiene que estar mirando fijamente la máquina: un sensor se da cuenta en menos de un segundo, la máquina se detiene sola, pita una alarma y le avisa exactamente qué aguja tiene el problema para que usted enhebre y siga bordando sin arruinar nada.",
    "practicalExamples": [
      "Producción desatendida en talleres donde un solo operario supervisa múltiples máquinas.",
      "Bordados nocturnos continuos de grandes tiradas de banderas o sábanas.",
      "Detección instantánea de agotamiento de bobina en diseños densos de satén."
    ],
    "matrixParametersRelation": "No depende de la digitalización, pero matrices con puntadas cortas menores a 1,0 mm pueden no mover la polea sensorial con fuerza suficiente, generando falsas alarmas de rotura de hilo.",
    "commonErrors": [
      "❌ Desactivar el sensor en el panel porque 'pita a cada rato', bordando luego minutos enteros en el aire sin hilo.",
      "❌ Permitir que la pelusa textil y restos de cera tapen la fotocélula infrarroja o traben la ruedita sensorial.",
      "❌ Enhebrar el hilo por fuera de la ranura de la polea del sensor.",
      "❌ Usar canillas de metal no reflectantes en máquinas con sensor óptico de fondo."
    ],
    "whenToAdjust": "Limpie el sensor si la máquina se detiene acusando rotura cuando el hilo sigue perfectamente enhebrado, o calibre la sensibilidad en el panel.",
    "dicaArtrelados": "Sople con aire comprimido seco o limpie con un pincel suave las ruedas sensoriales ubicadas arriba de los tensores una vez por semana. La pelusa que desprende el hilo se mete dentro del codificador óptico y produce paradas falsas cada 5 minutos.",
    "curiosities": "¿Sabía que antes de los sensores ópticos de 1990 las bordadoras continuaban cosiendo en el aire tras una rotura, obligando al operario a rebobinar a mano cientos de puntadas con una rueda mecánica?",
    "practicalExercise": "Con la máquina bordando en prueba, corte intencionalmente el hilo antes de los tensores con una tijera. Compruebe cómo la máquina se detiene en 3 o 4 puntadas y retrocede automáticamente al punto exacto de la rotura.",
    "quickSummary": "Sensores electrónicos que detectan cortes de hilo superior o falta de bobina y frenan la bordadora de inmediato protegiendo el trabajo.",
    "relatedTerms": [
      "Caja de Bobina",
      "Tensor Superior",
      "Placa de Aguja",
      "Tirahilos",
      "Retroceso de Pantógrafo"
    ],
    "applications": [
      "Máquinas bordadoras multicabezal de producción masiva",
      "Bordadoras comerciales monocabezal de alta velocidad",
      "Bordados en turnos continuos"
    ],
    "technicalDetails": "Tiempo de respuesta del sensor: 2 a 3 ciclos de aguja (< 0,25 segundos a 800 RPM). Tipo de codificador: óptico infrarrojo de disco ranurado o sensor piezoeléctrico de onda.",
    "recommendedSettings": [
      {
        "parameter": "Sensibilidad de Sensor Superior",
        "value": "3 a 4 puntadas de retardo"
      },
      {
        "parameter": "Limpieza de Sensores",
        "value": "Semanal con aire comprimido seco"
      },
      {
        "parameter": "Retroceso Automático al Parar",
        "value": "3 a 5 puntadas para sobreponer el empalme"
      }
    ],
    "troubleshooting": [
      {
        "problem": "La máquina se detiene falsamente con aviso de rotura pero el hilo está intacto",
        "cause": "Polvo textil bloqueando la fotocélula o hilo salido de la ranura de la rueda sensora",
        "solution": "Limpie el disco sensor con aire suave y verifique que el hilo pase abrazando la rueda tensora"
      }
    ],
    "calculatorAd": "Menos paradas falsas equivalen a mayor tiempo de máquina encendida facturando. Maximice su productividad con la Calculadora de Bordados Artrelados."
  },
  "a-010-autodigitizacao": {
    "term": "Autodigitalización de Imágenes (Auto-Digitizing)",
    "level": "Avanzado 🔴",
    "category": "Software y Formatos de Ponchado",
    "grammarClass": "Locución sustantiva femenina técnica",
    "origin": "Del griego autos (por sí mismo) y del inglés digitize (convertir gráficos analógicos en instrucciones vectoriales de puntada). Tecnología desarrollada a mediados de los años 1990 en paquetes CAD de bordado.",
    "summary": "Conversión algorítmica de ilustraciones bitmap en objetos de bordado con un solo clic, requiriendo revisión y corrección técnica manual.",
    "definition": "La autodigitalización (Auto-Digitizing / Image-to-Stitch Conversion) es una herramienta automatizada presente en los programas de diseño de matrices que aplica algoritmos de segmentación de color y detección de bordes para transformar una imagen en mapa de bits (JPEG, PNG, BMP) en objetos de puntadas de satén o tatami de manera instantánea. Aunque resulta tentadora para principiantes por su aparente rapidez, genera vectores no optimizados con excesivos cambios de color, trayectorias caóticas, sobrecargas de puntadas y ausencia de compensación de tracción adecuada, exigiendo una profunda intervención manual de depuración para alcanzar estándares comerciales aceptables.",
    "howItWorks": "1. El algoritmo reduce la paleta de colores de la imagen rasterizada a un número seleccionado.\n2. Traza contornos vectoriales alrededor de cada mancha cromática.\n3. Asigna arbitrariamente tipos de puntada (tatami para áreas grandes y satén para líneas).\n4. Genera una secuencia lineal de costura sin contemplar el empuje ni la contracción del tejido.",
    "beginnerExplanation": "Es el botón de 'conversión mágica' que prometen los programas: usted le mete una foto o un dibujo y el programa lo convierte en bordado en dos segundos. Sin embargo, el programa no sabe qué tela va a usar usted ni dónde se frunce la ropa, por lo que casi siempre crea miles de nudos, hilos cruzados y bordes torcidos. Sirve como borrador rápido, pero siempre hay que corregirlo a mano.",
    "practicalExamples": [
      "Bocetos preliminares rápidos para mostrar una idea visual aproximada a un cliente.",
      "Conversión de siluetas monocolor de alto contraste (logos negros sobre blanco puro).",
      "Base de trazado para acelerar la digitalización manual posterior de escudos sencillos."
    ],
    "matrixParametersRelation": "La autodigitalización suele fijar un ángulo único de 0° o 45° para todos los objetos, ignorando la orientación anatómica que da volumen y brillo al diseño.",
    "commonErrors": [
      "❌ Enviar una matriz autodigitalizada directamente a la máquina sin verificar cortes ni densidades.",
      "❌ Intentar autodigitalizar fotografías complejas o imágenes degradadas con baja resolución.",
      "❌ Confiar en que el programa calculó la compensación de tracción para tejidos elásticos."
    ],
    "whenToAdjust": "Use autodigitalización solo en gráficos vectoriales limpios y de colores sólidos; limpie y redigitalice siempre los textos manualmente.",
    "dicaArtrelados": "Jamás autodigitalice letras ni textos pequeños. La computadora redondea las esquinas de las tipografías y crea remates caóticos que quiebran agujas. Dibuje siempre las letras con las fuentes digitales del propio programa o a mano alzada.",
    "curiosities": "¿Sabía que la autodigitalización utiliza algoritmos de binarización similares a los lectores ópticos OCR de reconocimiento de texto desarrollados en los laboratorios de inteligencia artificial?",
    "practicalExercise": "Tome un logotipo sencillo de dos colores: use la herramienta de autodigitalización automática y luego borde el resultado. Anote cuántas veces cortó hilo y compare con una matriz hecha a mano: notará que la versión manual cose en la mitad de tiempo.",
    "quickSummary": "Generación automática de puntadas desde imágenes que sirve como borrador inicial pero requiere limpieza y ajuste manual riguroso.",
    "relatedTerms": [
      "Digitalización Manual",
      "Vectorización de Imágenes",
      "Compensación de Tracción",
      "Puntada Satén",
      "Optimización de Secuencia"
    ],
    "applications": [
      "Prototipos de muestra ultrarrápidos para cotización visual",
      "Siluetas vectoriales de alto contraste sin detalles finos",
      "Enseñanza inicial de conceptos de diseño digital"
    ],
    "technicalDetails": "Umbral de posterización: reducción obligatoria a menos de 6 a 8 colores puros. Resolución de imagen mínima recomendada para escaneo: 300 DPI.",
    "recommendedSettings": [
      {
        "parameter": "Uso Recomendado",
        "value": "Boceto o silueta base únicamente"
      },
      {
        "parameter": "Revisión Obligatoria",
        "value": "Reordenar secuencia y rehacer textos a mano"
      },
      {
        "parameter": "Resolución de Imagen Fuente",
        "value": "Mínimo 300 DPI con bordes limpios"
      }
    ],
    "troubleshooting": [
      {
        "problem": "La máquina da saltos caóticos de aguja y corta el hilo cada 10 segundos",
        "cause": "Matriz autodigitalizada sin unir objetos contiguos del mismo color",
        "solution": "Abra la lista de colores en el programa y agrupe los objetos por color usando ramificación automática"
      }
    ],
    "calculatorAd": "El ponchado manual profesional justifica un precio superior porque no desperdicia tiempo en máquina. Valore su servicio con la Calculadora de Bordados Artrelados."
  },
  "a-023-autotracado-de-vetores-bitmap": {
    "term": "Autotrazado Vectorial de Imágenes Bitmap (Vector Tracing)",
    "level": "Intermedio 🟡",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del griego autos (por sí mismo), del latín tractus (línea de trazado continuo) y del inglés bitmap (mapa de píxeles). Algoritmo de computación gráfica adaptado al CAD textil en la década de 1990.",
    "summary": "Herramienta que analiza imágenes de mapa de bits y traza curvas vectoriales Bézier editables, sirviendo de base sólida antes de aplicar puntadas.",
    "definition": "El autotrazado de vectores o vectorización automática de mapa de bits (Bitmap Vector Tracing in Digitizing) es la funcionalidad algorítmica integrada en las plataformas de diseño de bordado que convierte imágenes rasterizadas compuestas de píxeles (PNG, JPG, BMP) en trazados vectoriales matemáticos limpios de líneas y curvas de Bézier. A diferencia de la autodigitalización directa a puntadas, el autotrazado genera vectores geométricos limpios sin puntadas impuestas, permitiendo al diseñador revisar, suavizar nodos, fusionar siluetas y asignar posteriormente tipos de puntada, refuerzos y compensaciones con pleno control técnico.",
    "howItWorks": "1. El diseñador importa una imagen gráfica a la mesa de trabajo del software.\n2. La herramienta de vectorizado escanea el contraste y delimita los perímetros de cada tono de color.\n3. Se generan polígonos vectoriales con nodos modificables.\n4. El usuario ajusta los nodos suavizando esquinas y luego convierte cada vector en satén o tatami según convenga.",
    "beginnerExplanation": "Una imagen común de internet está hecha de cuadraditos (píxeles) que al hacer zoom se ven borrosos. El autotrazado es una lupa mágica de la computadora que dibuja líneas limpias y suaves alrededor de ese dibujo borroso. Así usted obtiene un dibujo vectorial perfecto que puede estirar, encoger y rellenar con puntadas hermosas sin perder nada de calidad.",
    "practicalExamples": [
      "Conversión de bocetos dibujados a mano con plumón escaneados a 300 DPI.",
      "Trazado rápido de logotipos corporativos recibidos en formatos de baja resolución.",
      "Creación de plantillas vectoriales para bordado de aplicaciones con tela superpuesta."
    ],
    "matrixParametersRelation": "Produce líneas vectoriales puras que aceptan sin distorsión la aplicación de compensación de tracción y refuerzos personalizados.",
    "commonErrors": [
      "❌ Vectorizar imágenes borrosas con fondo sucio o degradados complejos, creando miles de nodos inútiles.",
      "❌ No simplificar los nodos resultantes, dejando curvas rugosas que causan movimientos toscos en el bastidor.",
      "❌ Olvidar solapar los vectores adyacentes para prevenir espacios en blanco durante el bordado."
    ],
    "whenToAdjust": "Ajuste el umbral de tolerancia de color para que el contorno vectorial capture la forma sin agregar manchas parásitas.",
    "dicaArtrelados": "Tras aplicar el autotrazado vectorial, use siempre la herramienta 'Suavizar Curvas' o 'Reducir Nodos'. Una curva con 4 nodos bien ubicados cose infinitamente más rápido y terso que una curva con 40 nodos apiñados.",
    "curiosities": "¿Sabía que los primeros algoritmos de vectorizado se originaron en la cartografía militar de satélites para trazar mapas de costas y carreteras de forma automática?",
    "practicalExercise": "Descargue un dibujo lineal en blanco y negro. Aplique el autotrazado vectorial en su programa, reduzca los nodos a la mitad con la herramienta de limpieza y aplique una puntada satén regular: admirará la perfección de las curvas.",
    "quickSummary": "Conversión de gráficos de píxeles a líneas vectoriales limpias con nodos editables, paso previo ideal para un ponchado perfecto.",
    "relatedTerms": [
      "Curvas de Bézier",
      "Digitalización Vectorial",
      "Edición de Nodos",
      "Autodigitalización",
      "Compensación de Tracción"
    ],
    "applications": [
      "Rediseño y rescate de logotipos antiguos de clientes",
      "Digitalización de dibujos artísticos e infantiles",
      "Bordados corporativos basados en tarjetas de presentación"
    ],
    "technicalDetails": "Método de cálculo: interpolación cúbica de Bézier. Filtro de reducción de ruido: eliminación de islas menores a 5 píxeles cuadrados.",
    "recommendedSettings": [
      {
        "parameter": "Tolerancia de Curvatura",
        "value": "Media (suavizado automático de esquinas)"
      },
      {
        "parameter": "Umbral de Contraste",
        "value": "Alto para separar figura del fondo"
      },
      {
        "parameter": "Reducción de Nodos",
        "value": "Aplicar siempre antes de convertir a puntadas"
      }
    ],
    "troubleshooting": [
      {
        "problem": "El vector resultante tiene bordes temblorosos o con aspecto de serrucho",
        "cause": "Imagen bitmap original con píxeles muy comprimidos o baja resolución",
        "solution": "Aumente el filtro de suavizado de curvas en el software o limpie la imagen con contraste alto antes de vectorizar"
      }
    ],
    "calculatorAd": "El servicio de vectorización y rescate gráfico tiene un alto valor en el mercado textil. Cotícelo con precisión usando la Calculadora de Bordados Artrelados."
  },
  "a-avental-no-bastidor-computadorizado-peitilho-pantografo": {
    "term": "Bordado de Delantales en Bastidor y Alivio de Peso del Pantógrafo",
    "level": "Iniciante 🟢 a Intermedio 🟡",
    "category": "Técnicas de Enmarcado y Montaje en Bastidor",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del francés avantau (pieza delantera protectora de cocineros y artesanos). Prenda clásica de la hostelería industrial adaptada al bordado computarizado en los años 1990 y 2000.",
    "summary": "Procedimiento técnico para el centrado, enbastidorado y sujeción del peso colgante de delantales pesados para que no arrastren ni desalineen el pantógrafo.",
    "definition": "El bordado de delantales en el bastidor computarizado (Apron Framing & Pantograph Weight Relief Techniques) comprende la metodología de estabilización, alineación de pechera y sustentación física de la masa textil sobrante durante el bordado de delantales de chef, camarero, barista o jardinería (gabardina, dril, lona de algodón o denim pesado). Al enbastidorar la zona superior de la pechera, el peso del cuerpo del delantal (que suele superar los 400 a 700 gramos) cuelga por fuera del bastidor. Si este peso no es sostenido mecánicamente, genera una fuerza de tracción gravitacional descendente que descalza los motores de paso del pantógrafo, deforma las letras y tuerce los contornos.",
    "howItWorks": "1. Se marca el centro geométrico de la pechera del delantal a 5-8 cm debajo del borde superior del escote.\n2. Se enbastidore con entretela rasgable pesada de 80 g/m² o estabilizador recortable si la tela es flexible.\n3. Se coloca el bastidor en la máquina asegurando los clips de fijación.\n4. La masa colgante del delantal se enrolla y sostiene con pinzas de fijación a la mesa de soporte o se apoya en una bandeja auxiliar para evitar arrastre.\n5. Se ejecuta el bordado a velocidad moderada verificando que la tela no se enganche bajo el pantógrafo.",
    "beginnerExplanation": "Bordar delantales de cocina parece fácil, pero tiene una trampa: son prendas grandes y pesadas. Si usted deja que toda la falda del delantal cuelgue libre fuera de la máquina, ese peso tira del bastidor hacia abajo con tanta fuerza que hace que la máquina pierda el paso y las letras queden torcidas. Para solucionarlo, apoye la tela sobrante sobre una mesa o sujétela con una pinza de ropa para que la máquina cosa ligera y sin esfuerzo.",
    "practicalExamples": [
      "Uniformes de restaurantes y cafeterías con logotipos bordados en la pechera central.",
      "Delantales de barista en denim rústico con apliques de cuero sintético.",
      "Delantales de asador personalizados para regalos corporativos de fin de año."
    ],
    "matrixParametersRelation": "En telas de lona o gabardina gruesa, incremente la compensación de tracción a 0,45 mm y use refuerzo de tatami en rejilla para dominar la textura del tejido.",
    "commonErrors": [
      "❌ Dejar la falda del delantal colgando libre hacia el piso, frenando el avance del pantógrafo.",
      "❌ Permitir que las cintas o tirantes del cuello se enganchen debajo del bastidor móvil.",
      "❌ Usar bastidores demasiado flojos, permitiendo que la tela pesada se deslice durante el bordado.",
      "❌ Bordar con aguja fina 70/10 en lonas duras, causando desvíos y roturas de aguja."
    ],
    "whenToAdjust": "Apoye siempre la tela sobre una mesa auxiliar si el delantal excede los 300 gramos o si nota que el pantógrafo emite un zumbido forzado al moverse en el eje Y.",
    "dicaArtrelados": "Enrolle el cuerpo y las correas del delantal hacia arriba como un cilindro y asegúrelas con una pinza de plástico de acolchado (Wonder Clip). De esta forma el delantal se mueve como un paquete compacto sin colgar ni atascarse con los brazos del cabezal.",
    "curiosities": "¿Sabía que en las cocinas de alta gastronomía los delantales de chef se lavan a temperaturas superiores a 80 °C con químicos blanqueadores, por lo que el hilo del bordado debe ser estrictamente poliéster 100% trilobal resistente al cloro?",
    "practicalExercise": "Pese un delantal de lona en una balanza de cocina: se asombrará al ver que pesa más de medio kilo. Enbastidórelo, monte el bastidor y use una bandeja o pinzas para sostener el excedente. Borde un logo y admire la precisión de registro lograda al anular el peso.",
    "quickSummary": "Técnica de enbastidorado y alivio del peso colgante del delantal con pinzas o soportes para que el pantógrafo se mueva libremente sin descalces.",
    "relatedTerms": [
      "Pantógrafo",
      "Enbastidorado",
      "Alivio de Peso Textil",
      "Compensación de Tracción",
      "Entretela Rasgable Pesada"
    ],
    "applications": [
      "Uniformes para restaurantes, panaderías y cafeterías",
      "Delantales promocionales de marcas de cerveza y parrilla",
      "Vestuario de peluquerías, barberías y talleres mecánicos"
    ],
    "technicalDetails": "Aguja recomendada: calibre 80/12 o 90/14 punta de bola fina SES o punta cortante universal R. Estabilizador: entretela rasgable multidireccional de 75 a 90 g/m².",
    "recommendedSettings": [
      {
        "parameter": "Sujeción de Exceso Textil",
        "value": "Enrollado con pinzas de plástico"
      },
      {
        "parameter": "Velocidad de Bordado en Lonas",
        "value": "650 - 750 RPM"
      },
      {
        "parameter": "Aguja Recomendada",
        "value": "80/12 SES para gabardina de algodón"
      }
    ],
    "troubleshooting": [
      {
        "problem": "El contorno de satén queda corrido o desplazado hacia arriba respecto al relleno",
        "cause": "El peso colgante del delantal tiró del bastidor hacia abajo durante el desplazamiento del pantógrafo",
        "solution": "Sostenga el excedente de tela sobre una mesa auxiliar o fíjelo con pinzas para anular la gravedad"
      }
    ],
    "calculatorAd": "El tiempo extra de enbastidorado y enrollado de prendas pesadas debe reflejarse en su precio final. Calcule presupuestos justos con la Calculadora de Bordados Artrelados."
  },
  "a-101-alimentacao-positiva-de-linha": {
    "term": "Alimentación Positiva de Hilo (Active Positive Thread Feed)",
    "level": "Avanzado 🔴",
    "category": "Mecánica y Ajustes",
    "grammarClass": "Locución sustantiva femenina técnica",
    "origin": "Del latín alimentatio (suministro constante) y del inglés positive thread feed. Tecnología patentada originalmente por Melco (sistema Acti-Feed) y modernizada por Tajima y ZSK en bordado industrial.",
    "summary": "Sistema mecatrónico que entrega la longitud exacta de hilo milimétrica calculada digitalmente para cada puntada, reemplazando la tensión por discos de fricción pasiva.",
    "definition": "La alimentación positiva de hilo (Positive Thread Feed / Active Thread Delivery System) es la evolución tecnológica de los sistemas de tensión en las máquinas bordadoras modernas. En lugar de basarse en discos de presión pasivos que frenan el hilo por fricción mecánica, este sistema cuenta con rodillos motorizados controlados por microprocesador que entregan activamente a la aguja la cantidad exacta de filamento requerida para la longitud y el espesor del tejido medido por sensores. Esto elimina la dependencia del clima, la humedad del cono o la variación de grosor del hilo, permitiendo bordar telas ultra delicadas y cueros sin alterar la tensión manual.",
    "howItWorks": "1. Un sensor mide el espesor de la tela en cada ciclo de penetración.\n2. La computadora calcula la cantidad de hilo superior requerida para completar la lazada.\n3. Un servomotor acciona el rodillo de alimentación positiva liberando la fracción exacta de milímetro.\n4. La puntada se asienta con suavidad absoluta sin estirar el filamento ni arrugar la tela.",
    "beginnerExplanation": "En las máquinas tradicionales, el hilo pasa por discos que lo aprietan como un freno de bicicleta. En las máquinas con alimentación positiva, un motorcito inteligente le da a la aguja exactamente la cantidad de hilo que necesita en cada puntada, ni un milímetro más ni un milímetro menos. Esto hace que el bordado quede esponjoso, parejo y sin arrugas en cualquier tela sin tener que pasar horas ajustando tornillos de tensión.",
    "practicalExamples": [
      "Bordado continuo de parches en telas elásticas de punto sin deformación.",
      "Uso de hilos delicados de filamento metálico que se cortan con tensores mecánicos.",
      "Producción de gorras con cambios bruscos de espesor entre la costura central y los laterales."
    ],
    "matrixParametersRelation": "Optimiza la compensación de tracción al mantener constante la elasticidad del hilo en todo el diseño sin acumulación de tensión residual.",
    "commonErrors": [
      "❌ Intentar apretar con pinzas los rodillos motorizados de alimentación activa.",
      "❌ Introducir valores de espesor de tela erróneos en el panel de control de la máquina.",
      "❌ No calibrar el sensor de espesor tras cambiar de entretela rasgable a entretela acolchada."
    ],
    "whenToAdjust": "Ajuste el valor de alimentación activa en el software de la máquina según el grosor del tejido: aumente puntos para telas esponjosas y reduzca para tafetanes finos.",
    "dicaArtrelados": "Si su bordadora dispone de alimentación positiva (como el sistema Acti-Feed), recuerde que no necesita aflojar ni apretar tensiones manualmente al cambiar de hilo 40 wt a hilo 60 wt: el sistema se calibra automáticamente midiendo el arrastre.",
    "curiosities": "¿Sabía que la alimentación positiva de hilo fue desarrollada inspirándose en los sistemas de alimentación de fibra óptica de alta precisión de las telecomunicaciones?",
    "practicalExercise": "En una máquina con alimentación positiva, borde un diseño sobre seda y luego el mismo diseño sobre jean grueso sin tocar ninguna perilla. Verifique que ambos bordados quedan con el mismo balance de hilo trasero sin deformaciones.",
    "quickSummary": "Entrega motorizada y calculada de la cantidad exacta de hilo para cada puntada, reemplazando la tensión manual por fricción.",
    "relatedTerms": [
      "Tensión de Hilo Superior",
      "Disco Pre-Tensor",
      "Compensación de Tracción",
      "Tirahilos",
      "Sensor de Espesor Textil"
    ],
    "applications": [
      "Máquinas bordadoras de alta tecnología monocabezal y multicabezal",
      "Bordado de alta velocidad en cueros y tapicerías automotrices",
      "Prendas de tejido elástico de rendimiento deportivo"
    ],
    "technicalDetails": "Resolución de entrega: pasos de 0,05 mm de filamento. Sensor de espesor: transductor electromagnético de pie de presión con precisión micrométrica.",
    "recommendedSettings": [
      {
        "parameter": "Modo de Operación",
        "value": "Automático adaptativo por espesor de tejido"
      },
      {
        "parameter": "Alimentación Base para Poliéster 40",
        "value": "18 a 22 puntos en panel digital"
      },
      {
        "parameter": "Alimentación para Hilos Metálicos",
        "value": "24 a 28 puntos para máxima holgura"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Buclecitos sueltos de hilo en la superficie superior de la tela en satenes anchos",
        "cause": "Valor de entrega de hilo configurado excesivamente alto en el panel de alimentación activa",
        "solution": "Reduzca el valor de entrega en 2 o 3 unidades hasta que el lazo se asiente plano en la tela"
      }
    ],
    "calculatorAd": "La tecnología avanzada agiliza las entregas y reduce mermas de hilo. Monitoree su rentabilidad por hora con la Calculadora de Bordados Artrelados."
  },
  "a-102-angulo-de-ponto-satin-e-tatami": {
    "term": "Ángulo de Puntada y Líneas de Dirección (Stitch Angle)",
    "level": "Intermedio 🟡",
    "category": "Programación y Digitalización de Matrices",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del latín angulus (esquina o inclinación respecto a un eje) y punctum (punto de penetración). Concepto fundamental de la geometría paramétrica en software CAD textil.",
    "summary": "Orientación angular en grados que siguen las puntadas en un relleno, determinante para el reflejo del brillo, la tracción y el volumen visual del bordado.",
    "definition": "El ángulo de puntada (Stitch Angle & Direction Lines) es el parámetro vectorial primario que define la orientación geométrica en el plano cartesiano (de 0° a 360°) con la que descienden las puntadas de un objeto de satén o tatami. El ángulo determina el comportamiento mecánico del tejido durante el bordado —el fenómeno de tracción y empuje actúa siempre a lo largo y a través del ángulo de puntada— y es el responsable absoluto del brillo satinado tridimensional del hilo de poliéster trilobal o rayón, cuya superficie refleja la luz de forma especular según la inclinación de las fibras.",
    "howItWorks": "1. En bloques de tatami planos, se traza una línea directriz que fija un ángulo uniforme (ej. 45°).\n2. En columnas de satén complejas, se insertan múltiples líneas de ángulo para que las puntadas giren suavemente siguiendo la curvatura natural del dibujo.\n3. La aguja se alinea perpendicularmente a las líneas de dirección trazadas.\n4. La luz incide en diferentes direcciones, creando sombras, contrastes y sensación de relieve.",
    "beginnerExplanation": "El ángulo de puntada es la dirección hacia donde apuntan las puntadas: acostadas, paradas o en diagonal. Es lo más importante para que un bordado se vea vivo. Si usted borda dos hojas de un árbol con el mismo hilo verde pero a una le pone las puntadas a 45 grados y a la otra a 135 grados, parecerán dos verdes diferentes por el brillo de la luz. Además, ayuda a que la tela no se arrugue.",
    "practicalExamples": [
      "Inclinación de 45° en rellenos de letras para equilibrar las tensiones de la urdimbre y la trama del tejido.",
      "Líneas de ángulo radiales en pétalos de flores para simular la forma orgánica natural.",
      "Contraste de ángulos opuestos en diseños de escudos para diferenciar zonas contiguas del mismo color."
    ],
    "matrixParametersRelation": "La compensación de tracción debe calcularse en función del ángulo: el tejido se contrae en la dirección de las puntadas y se expande en la dirección perpendicular.",
    "commonErrors": [
      "❌ Dejar todas las partes de un diseño con un único ángulo de 0°, haciendo que el bordado luzca plano y opaco.",
      "❌ Poner ángulos paralelos entre el relleno de tatami superior y el refuerzo inferior, provocando que las puntadas se hundan en las mismas hendiduras.",
      "❌ Curvar demasiado rápido los ángulos en satén, dejando esquinas con abanicos abiertos."
    ],
    "whenToAdjust": "Varíe el ángulo de puntada entre partes vecinas de un mismo color para generar contraste óptico sin necesidad de cambiar de hilo.",
    "dicaArtrelados": "Para lograr ese efecto de brillo lujoso en letras de satén, oriente las líneas de ángulo estrictamente perpendiculares al trazo de la letra (a 90° de la columna). El brillo del hilo trilobal resaltará con la máxima intensidad bajo la luz.",
    "curiosities": "¿Sabía que en el bordado tradicional de seda chino de Suzhou, los maestros utilizaban hasta 40 ángulos de puntada diferentes en un solo pez dorado para crear la ilusión de movimiento en el agua?",
    "practicalExercise": "Digitalice dos cuadrados contiguos del mismo color celeste: el izquierdo con ángulo de 45° y el derecho con ángulo de 135°. Borde la muestra y muévala bajo una lámpara: verá cómo uno brilla intensamente mientras el otro parece más oscuro, todo con el mismo hilo.",
    "quickSummary": "Dirección geométrica de las puntadas que controla la contracción de la tela y genera brillos, sombras y volumen óptico en el diseño.",
    "relatedTerms": [
      "Puntada Satén",
      "Puntada Tatami",
      "Compensación de Tracción",
      "Líneas de Dirección Vectorial",
      "Brillo del Hilo Trilobal"
    ],
    "applications": [
      "Digitalización artística de rostros, animales y paisajes",
      "Logotipos corporativos con texturas diferenciadas",
      "Letras con terminación de brillo satinado"
    ],
    "technicalDetails": "Rango angular: 0° a 359°. Diferencial mínimo para contraste de brillo perceptible al ojo humano: 30° a 45° de inclinación relativa.",
    "recommendedSettings": [
      {
        "parameter": "Ángulo en Relleno Tatami Plano",
        "value": "45° o 135° (oblicuo a urdimbre y trama)"
      },
      {
        "parameter": "Ángulo en Satén Curvo",
        "value": "Perpendicular al eje de la columna"
      },
      {
        "parameter": "Ángulo de Refuerzo respecto a Relleno",
        "value": "45° a 90° de diferencia angular"
      }
    ],
    "troubleshooting": [
      {
        "problem": "El bordado se ve apagado, sin brillo y con aspecto de calcomanía plástica",
        "cause": "Uso de un ángulo plano uniforme en todos los objetos del diseño sin seguir las formas naturales",
        "solution": "Añada líneas de dirección variables que acompañen la curvatura y separen los objetos con ángulos contrastantes"
      }
    ],
    "calculatorAd": "El conocimiento experto del ángulo de puntada distingue a los ponchadores profesionales de los aficionados. Cotice su maestría con la Calculadora de Bordados Artrelados."
  },
  "a-103-ajuste-de-folga-da-lancadeira": {
    "term": "Ajuste de Holgura entre Aguja y Punta de la Lanzadera (Hook Timing)",
    "level": "Avanzado 🔴",
    "category": "Mecánica y Ajustes",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del latín ad-iuxtare (calibrar con precisión milimétrica) y del árabe al-nashash (lanzadera o gancho rotativo de captura de hilo). Norma universal de sincronismo de ingeniería textil.",
    "summary": "Distancia crítica micrométrica (0,05 a 0,10 mm) entre la punta de la lanzadera rotativa y el rebaje de la aguja que asegura la captura del bucle sin colisiones.",
    "definition": "El ajuste de holgura de la lanzadera y la aguja (Hook-to-Needle Clearance & Timing Adjustment) es la calibración mecánica fundamental del mecanismo de formación de la puntada. Determina la distancia transversal entre la punta afilada del gancho rotativo y el rebaje o muesca posterior (scarf) de la aguja cuando esta asciende entre 1,8 y 2,2 mm desde su punto muerto inferior. Una holgura ideal de 0,05 mm a 0,10 mm (el espesor de una hoja de papel de fumar) permite que la lanzadera intercepte el bucle de hilo formado con total seguridad sin tocar jamás el acero de la aguja, evitando puntadas saltadas, roturas de hilo o roturas catastróficas de la punta de la lanzadera.",
    "howItWorks": "1. La aguja baja hasta el punto más profundo y comienza a subir unos 2 mm.\n2. La elasticidad del hilo crea una bolsa abierta o bucle en el rebaje de la aguja.\n3. La punta del gancho pasa rasante a través del rebaje capturando el hilo.\n4. La lanzadera expande el lazo rodeando la caja de bobina para entrelazarlo con el hilo inferior.",
    "beginnerExplanation": "Adentro de la máquina hay un gancho giratorio que pasa volando al lado de la aguja para pescar el hilito en cada puntada. Si ese gancho pasa muy lejos de la aguja, no pesca el hilo y la máquina salta puntadas dejando huecos. Si pasa demasiado cerca, choca contra la aguja, despuntándola y haciendo chispas. Calibrar esa distancia para que pase a un pelo de distancia es el ajuste mecánico más importante de su taller.",
    "practicalExamples": [
      "Ajuste periódico de cabezales tras sufrir un choque violento con el bastidor de gorras.",
      "Calibración de la máquina tras cambiar de agujas finas 65/9 a agujas gruesas 90/14.",
      "Eliminación de saltos de puntada sistemáticos en telas elásticas de licra."
    ],
    "matrixParametersRelation": "Permite que la máquina ejecute con total seguridad puntadas de alta velocidad en matrices con saltos rápidos y columnas tupidas sin saltar puntadas.",
    "commonErrors": [
      "❌ Permitir que la punta de la lanzadera roce físicamente la aguja, mellando el gancho y cortando hilos futuros.",
      "❌ Dejar una distancia mayor a 0,15 mm, causando saltos continuos de puntada en telas difíciles.",
      "❌ Apretar los tornillos prisioneros de la lanzadera sin verificar el sincronismo angular del eje principal a 198°-202°."
    ],
    "whenToAdjust": "Compruebe la holgura si la máquina salta puntadas en una o varias agujas o tras escuchar un fuerte golpe metálico durante el bordado.",
    "dicaArtrelados": "Para verificar la holgura sin herramientas caras, coloque una aguja nueva y gire el volante a mano hasta que la punta del gancho quede detrás del rebaje. Pase una hoja de papel de diario o folio fino de 80 g entre el gancho y la aguja: debe deslizarse con suave resistencia sin doblar la aguja.",
    "curiosities": "¿Sabía que la punta de una lanzadera rotativa industrial gira a más de 1.000 revoluciones por minuto pasando a menos de una décima de milímetro de la aguja hasta 16 veces por segundo sin tocarla jamás?",
    "practicalExercise": "Con la máquina desenchufada y la placa de aguja retirada, gire el volante manual lentamente. Observe con una lupa y una linterna el momento mágico en que la punta del gancho cruza exactamente detrás de la muesca de la aguja capturando el lazo de hilo.",
    "quickSummary": "Calibración milimétrica de la distancia aguja-gancho (0,05 mm) que garantiza la captura perfecta del hilo sin choques ni puntadas saltadas.",
    "relatedTerms": [
      "Lanzadera Rotativa",
      "Rebaje de la Aguja (Scarf)",
      "Puntada Saltada",
      "Sincronismo de Máquina",
      "Punto Muerto Inferior"
    ],
    "applications": [
      "Mantenimiento técnico preventivo y correctivo de bordadoras",
      "Sincronización de cabezales en máquinas multicabezal",
      "Puesta a punto tras colisiones mecánicas severas"
    ],
    "technicalDetails": "Holgura transversal óptima: 0,05 mm a 0,10 mm. Altura de paso de la punta: 0,5 a 1,0 mm por encima del ojo de la aguja. Posición del eje: 198° a 203° en el cuadrante de sincronismo.",
    "recommendedSettings": [
      {
        "parameter": "Distancia Punta-Aguja",
        "value": "0,05 mm - 0,08 mm"
      },
      {
        "parameter": "Aguja de Calibración",
        "value": "Aguja nueva calibre 75/11 recta"
      },
      {
        "parameter": "Par de Apriete de Prisioneros de Lanzadera",
        "value": "Firme con destornillador plano de precisión"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Saltos continuos de puntada tras un atasco con el bastidor",
        "cause": "La lanzadera se desfasó o se desplazó hacia atrás alejándose de la aguja por el impacto",
        "solution": "Afloje los tornillos prisioneros de la lanzadera, recalibre la holgura a 0,05 mm a 200° y reajuste firmemente"
      }
    ],
    "calculatorAd": "El mantenimiento a tiempo previene gastos mayores en repuestos de lanzaderas y agujas. Reserve su fondo técnico en la Calculadora de Bordados Artrelados."
  },
  "a-104-amortecedor-pneumatico-pantografo": {
    "term": "Amortiguación y Estabilidad Dinámica del Pantógrafo (Vibration Damping)",
    "level": "Avanzado 🔴",
    "category": "Componentes y Mecánica de la Máquina",
    "grammarClass": "Locución sustantiva femenina técnica",
    "origin": "Del latín ad-mortire (atenuar o absorber impactos cinéticos) y del griego pantographos (instrumento para copiar a escala). Tecnología de amortiguación elástica de vibraciones armónicas.",
    "summary": "Sistemas de tacos elásticos de poliuretano, guías lineales de precisión y amortiguadores de inercia que eliminan oscilaciones del bastidor a alta velocidad.",
    "definition": "La amortiguación y estabilidad estructural del pantógrafo (Pantograph Vibration Damping & Dynamic Stability) comprende el conjunto de soluciones mecánicas, amortiguadores elastoméricos y contrapesos inerciales diseñados para neutralizar las vibraciones resonantes generadas por las aceleraciones y frenadas bruscas del bastidor móvil en los ejes X e Y a regímenes de 800 a 1.200 puntadas por minuto. Al realizar saltos largos de aguja o movimientos rápidos de satén ancho, la inercia del peso del bastidor cargado con prendas tiende a flexionar los perfiles de aluminio. Los amortiguadores absorben los picos de fuerza cinética, asegurando que el bastidor se detenga en la coordenada milimétrica exacta antes de la penetración de la aguja.",
    "howItWorks": "1. El servomotor acelera el bastidor hacia una nueva coordenada con una fuerza de varios Newtons.\n2. Al frenar en seco, los topes de poliuretano de alta densidad y las guías de recirculación disipan la oscilación elástica.\n3. La aguja penetra en una tela completamente inmóvil, eliminando el cabeceo del aro.\n4. Las líneas de bordado resultantes quedan nítidas, rectas y perfectamente registradas.",
    "beginnerExplanation": "Cuando una bordadora corre a 1.000 puntadas por minuto, el pantógrafo (los brazos metálicos que sostienen el bastidor) se mueve como un rayo de un lado a otro. Si la máquina no tuviera amortiguadores especiales para absorber esos sacudones, el bastidor temblaría como un flan y las líneas de las letras saldrían todas onduladas o borrosas. Los amortiguadores mantienen la tela firme como una roca en cada frenada.",
    "practicalExamples": [
      "Bordado de textos diminutos de 3 mm donde un temblor de 0,1 mm arruina la letra.",
      "Bordados a máxima velocidad en bastidores gigantes de 50x40 cm con mucho peso.",
      "Líneas de contorno precisas en escudos corporativos de alta definición."
    ],
    "matrixParametersRelation": "Permite al ponchador programar saltos de mayor longitud (hasta 7 mm) sin miedo a que el cabeceo del bastidor desvíe la posición de la puntada siguiente.",
    "commonErrors": [
      "❌ Instalar la máquina sobre pisos desnivelados o mesas endebles que multiplican la resonancia del pantógrafo.",
      "❌ Cargar bastidores con prendas excesivamente pesadas que sobrepasan la capacidad de carga inercial del pantógrafo.",
      "❌ No limpiar las guías lineales de aluminio, permitiendo que la suciedad trabe el deslizamiento amortiguado."
    ],
    "whenToAdjust": "Nivele las patas de la máquina con un nivel de burbuja si nota que el mueble tiembla durante los cambios rápidos de sentido del bastidor.",
    "dicaArtrelados": "Asegúrese de que las cuatro patas de goma antivibración de su máquina apoyen con la misma presión sobre un piso macizo de hormigón. Una máquina perfectamente nivelada no solo borda con mayor nitidez, sino que reduce el ruido de su taller a la mitad.",
    "curiosities": "¿Sabía que los pantógrafos modernos de fibra de carbono y aluminio aeroespacial aceleran a fuerzas superiores a 2G, comparables a las que experimenta un piloto de automovilismo en curvas rápidas?",
    "practicalExercise": "Coloque un vaso lleno de agua sobre la mesa de la bordadora mientras cose a 900 RPM. Si la máquina está bien nivelada y sus amortiguadores en buen estado, la superficie del agua apenas formará pequeñas ondas concéntricas sin derramarse.",
    "quickSummary": "Disipadores elásticos y guías de precisión que frenan las sacudidas del pantógrafo garantizando bordados firmes y contornos afilados.",
    "relatedTerms": [
      "Pantógrafo",
      "Servomotor de Pasos",
      "Guías Lineales de Recirculación",
      "Bastidor Tubular",
      "Velocidad de Crucero (RPM)"
    ],
    "applications": [
      "Bordadoras industriales multicabezal de gran envergadura",
      "Microbordado tipográfico de alta precisión",
      "Bordados en bastidores planos extendidos para mantelería"
    ],
    "technicalDetails": "Material de amortiguación: elastómero de poliuretano Shore A 75-85. Tolerancia de deflexión máxima del pantógrafo en freno brusco: < 0,03 mm a 1.000 RPM.",
    "recommendedSettings": [
      {
        "parameter": "Nivelación de la Estructura",
        "value": "Cero grados en ambos ejes (nivel de burbuja)"
      },
      {
        "parameter": "Limpieza de Guías Lineales",
        "value": "Quincenal con paño sin pelusa y lubricante seco de teflón"
      },
      {
        "parameter": "Carga Máxima de Bastidor",
        "value": "Respetar límite recomendado por fabricante"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Líneas de satén con ondulaciones o bordes borrosos en un solo lado del diseño",
        "cause": "Holgura en las correas del pantógrafo o base de la máquina desnivelada generando resonancia",
        "solution": "Nivele las cuatro patas de apoyo de la bordadora y verifique la tensión de las correas dentadas de los ejes X/Y"
      }
    ],
    "calculatorAd": "Una máquina estable que no vibra alarga su durabilidad y previene roturas mecánicas caras. Proteja su capital de trabajo con la Calculadora de Bordados Artrelados."
  },
  "a-105-avanco-angular-do-eixo-principal": {
    "term": "Grado Angular del Eje Principal y Posicionador (Main Shaft Degree)",
    "level": "Avanzado 🔴",
    "category": "Operación de la Máquina",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del latín axis (eje de rotación mecánico) y angulus (grados de un círculo). Escala angular cinemática de 0° a 360° que rige la coreografía mecatrónica de una máquina bordadora.",
    "summary": "Lectura digital en grados (0° a 360°) del eje motriz principal que sincroniza con precisión de microsegundos la aguja, el tirahilos, el pantógrafo y el cortahilos.",
    "definition": "El avance angular del eje principal y escala de grados (Main Shaft Degree Positioning & Encoder System) es el sistema cinemático de referencia circular absoluta sobre el que se sincronizan todas las acciones de una máquina de bordado computarizada. El giro de 360 grados del eje principal gobierna la sincronía temporal de cada puntada: a 100° la aguja penetra en el tejido, a 198°-202° la lanzadera pesca el hilo en el punto muerto inferior, a 280° el tirahilos alcanza su punto máximo cerrando el nudo y a 100° (o 270° según la marca) el pantógrafo desplaza el bastidor. El codificador óptico (encoder) montado en el eje reporta permanentemente la posición angular a la computadora central con precisión de décimas de grado.",
    "howItWorks": "1. El motor del eje principal rota impulsando el mecanismo del cabezal.\n2. El disco encoder óptico lee continuamente el grado angular exacto.\n3. La placa lógica activa los servomotores del pantógrafo únicamente en la ventana de grados donde la aguja está fuera de la tela (zona segura de movimiento, aprox. 270° a 100°).\n4. La posición de reposo o parada segura se calibra a 100° (o punto rojo del volante) para permitir el cambio de aguja o corte de hilo.",
    "beginnerExplanation": "El eje principal es el corazón que gira dentro de la máquina como un reloj redondo de 360 grados. En cada vuelta completa se hace una puntada entera: en unos grados baja la aguja, en otros el gancho pesca el hilo, y en otros la aguja sale de la tela para que el bastidor se mueva. Cuando la máquina se frena para cambiar de color o porque se cortó el hilo, siempre se detiene en su 'punto de parada seguro' (usualmente a 100 grados) con la aguja bien arriba.",
    "practicalExamples": [
      "Comprobación del punto de parada a 100° antes de accionar el cambio manual de agujas.",
      "Sincronización del tiempo de corte de hilo cuando la cuchilla actúa a 285°-305°.",
      "Giro manual del volante para desatascar una prenda atrapada en la placa de aguja."
    ],
    "matrixParametersRelation": "Los comandos de corte y cambio de color programados en el software se activan en la máquina únicamente cuando el eje principal alcanza su grado de parada angular asignado.",
    "commonErrors": [
      "❌ Forzar el cambio de barra de aguja con el eje principal desfasado (por ejemplo, a 180° con la aguja clavada en la placa).",
      "❌ Descalibrar el disco encoder óptico al intentar limpiar el volante con solventes agresivos.",
      "❌ Encender la máquina con el volante trabado a mano por el operario."
    ],
    "whenToAdjust": "Gire el volante hasta el punto de grado 100° si la máquina muestra en pantalla error de 'Eje fuera de posición' al encender o tras una frenada de emergencia.",
    "dicaArtrelados": "Si su máquina se clava con un nido de hilo, jamás intente tirar de la prenda con fuerza bruta. Gire lentamente el volante con la mano en el sentido de la flecha hasta llevar la marca de grado al punto rojo (100°). La aguja subirá libremente y podrá cortar el nudo inferior sin torcer la barra de aguja.",
    "curiosities": "¿Sabía que a 1.000 puntadas por minuto el eje principal completa una vuelta entera de 360° en apenas 60 milisegundos, ejecutando todas las fases de costura en una fracción de parpadeo?",
    "practicalExercise": "En su máquina, localice el indicador graduado del volante. Gire el volante despacio a mano observando la pantalla: vea cómo el número de grados cambia de 0° a 360° y observe cómo la aguja sube y baja en sincronía con cada número de la escala.",
    "quickSummary": "Mapa circular de 0° a 360° del eje de la máquina que sincroniza aguja, garfio y movimiento del bastidor para que nada colisione.",
    "relatedTerms": [
      "Encoder Óptico",
      "Sincronismo de Lanzadera",
      "Punto de Parada Seguro (100°)",
      "Tirahilos",
      "Servomotor de Eje Principal"
    ],
    "applications": [
      "Calibración y diagnóstico técnico en consolas de bordado",
      "Sincronización de sistemas cortahilos mecánicos",
      "Ajuste de secuencias de cambio de aguja automático"
    ],
    "technicalDetails": "Resolución del encoder: 360 a 720 pulsos por vuelta (precisión angular < 0,5°). Punto de parada estándar: Tajima/Barudan/SWF a 100° ± 2°; Brother/Janome en posición de aguja arriba (Top Dead Center).",
    "recommendedSettings": [
      {
        "parameter": "Posición Angular de Reposo",
        "value": "100° (marca roja en volante)"
      },
      {
        "parameter": "Ventana Segura de Movimiento de Pantógrafo",
        "value": "280° a 95° con aguja fuera de tela"
      },
      {
        "parameter": "Tolerancia de Encoder",
        "value": "± 1° de posición teórica"
      }
    ],
    "troubleshooting": [
      {
        "problem": "Mensaje de alarma en pantalla: 'Main Shaft Not at 100 Degrees / Eje Fuera de Posición'",
        "cause": "La máquina se detuvo por emergencia o corte de luz en medio de un ciclo de penetración",
        "solution": "Gire manualmente el volante en el sentido de las agujas del reloj hasta alinear la marca con el índice de 100° y presione el botón de reset en la pantalla"
      }
    ],
    "calculatorAd": "El conocimiento de la mecánica de su máquina evita paradas de producción innecesarias. Optimice su tiempo de taller con la Calculadora de Bordados Artrelados."
  },
  "a-106-anel-antideslizante-de-bastidor": {
    "term": "Anillo y Cinta Antideslizante para Bastidor (Hoop Non-Slip Grip)",
    "level": "Fundamental 🟢",
    "category": "Bastidores y Fijación",
    "grammarClass": "Locución sustantiva masculina técnica",
    "origin": "Del latín anellus (anillo circular de sujeción) y del inglés non-slip grip tape (cinta de fricción antideslizante). Técnica de taller nacida en la sastrería clásica y aplicada a los aros plásticos de bordado.",
    "summary": "Revestimiento rugoso o cinta de fricción aplicada al contorno del aro interior del bastidor para aprisionar telas resbaladizas y elásticas sin resbalamientos.",
    "definition": "El anillo y cinta antideslizante para bastidor (Hoop Non-Slip Friction Grip / Hoop Wrapping Tape) comprende el sistema o tratamiento superficial de incremento del coeficiente de fricción estática aplicado sobre las paredes del anillo interior del bastidor. En telas sumamente resbaladizas (satén de seda, microfibra, lycra deportiva, tafetán impermeable o polar fino), las paredes lisas de plástico pulido del bastidor estándar permiten que el tejido se deslice microscópicamente bajo la tensión de las puntadas, provocando arrugas y descalces. Al forrar el anillo interior con cinta de papel crepé, cinta al bies de algodón o anillos de silicona vulcanizada, se multiplica el agarre mecánico reteniendo la tela con fuerza firme sin necesidad de sobreapretar el tornillo.",
    "howItWorks": "1. Se limpia con alcohol el canto perimetral exterior del aro interior del bastidor.\n2. Se enrolla en espiral cinta de papel de carrocero o cinta al bies de algodón cubriendo todo el contorno.\n3. Se coloca la tela y la entretela sobre el aro exterior.\n4. Al calzar el aro forrado, la rugosidad de la cinta traba la fibra textil impidiendo cualquier desplazamiento longitudinal o transversal.",
    "beginnerExplanation": "Cuando usted borda telas resbalosas como satén o camisetas deportivas, el bastidor de plástico liso patina y la tela se afloja mientras la máquina borda, dejando el diseño arrugado. El truco de taller más famoso del mundo consiste en forrar el aro de adentro del bastidor con cinta de papel de enmascarar o cinta de tela. Esa textura rugosa 'muerde' la tela suavemente y la deja clavada sin tener que apretar el tornillo con tanta fuerza.",
    "practicalExamples": [
      "Enbastidorado de camisetas deportivas de lycra y poliéster dry-fit resbaladizo.",
      "Bordado de batas de novia y pijamas de seda satén fina sin dejar marcas permanentes.",
      "Sujeción de cortavientos impermeables de nylon resbaladizo."
    ],
    "matrixParametersRelation": "Garantiza que la compensación de tracción programada en la matriz actúe con exactitud milimétrica al anular el deslizamiento del tejido en el marco.",
    "commonErrors": [
      "❌ Usar cintas adhesivas con pegamento gomoso que rezuma con el tiempo y mancha las prendas caras.",
      "❌ Forrar con capas demasiado gruesas que impiden que el aro interior entre en el aro exterior.",
      "❌ Dejar uniones abultadas en la cinta que crean zonas de presión irregular sobre la prenda."
    ],
    "whenToAdjust": "Aplique cinta antideslizante siempre que borde telas satinadas, sedas, microfibra o tejidos con lycra que tiendan a perder tensión con las puntadas rápidas.",
    "dicaArtrelados": "Utilice cinta de pintor de papel azul o cinta al bies de algodón 100% pegada con cinta bifaz finísima. Jamás use cinta aislante de electricista ni cintas adhesivas transparentes, ya que el pegamento se degrada con el calor y deja un residuo pegajoso imposible de quitar.",
    "curiosities": "¿Sabía que en los talleres de alta costura de París, los bastidores de madera de los bordadores se forran tradicionalmente con cintas de sarga de lino blanco desde hace más de trescientos años para proteger las telas de seda de la realeza?",
    "practicalExercise": "Forre el aro interior de un bastidor redondo pequeño con cinta de carrocero. Enbastidore un retal de tela deportiva brillante. Tire con fuerza de las orillas: comprobará que la tela no cede ni un milímetro, conservando la tensión perfecta de parche de tambor.",
    "quickSummary": "Forrado del aro del bastidor con cinta rugosa que sujeta firmemente telas resbaladizas y elásticas impidiendo arrugas sin apretar de más.",
    "relatedTerms": [
      "Enbastidorado",
      "Aros del Bastidor",
      "Marcas de Bastidor",
      "Compensación de Tracción",
      "Bastidor Magnético"
    ],
    "applications": [
      "Confección y personalización de camisetas de fútbol y ropa deportiva",
      "Lencería, pijamería y vestidos de fiesta en seda y satén",
      "Prendas de microfibra y camperas de nylon impermeable"
    ],
    "technicalDetails": "Material de agarre recomendado: cinta de papel crepé de enmascarar o cinta de sarga de algodón. Incremento del coeficiente de fricción estática: de µ = 0,25 (plástico liso) a µ = 0,65 (superficie textil).",
    "recommendedSettings": [
      {
        "parameter": "Material de Forrado",
        "value": "Cinta de papel crepé o cinta de bies de algodón"
      },
      {
        "parameter": "Espesor de Capa",
        "value": "Una sola vuelta en espiral sin solapes gruesos"
      },
      {
        "parameter": "Renovación de Cinta",
        "value": "Cada 3 a 6 meses según intensidad de uso"
      }
    ],
    "troubleshooting": [
      {
        "problem": "La tela de lycra o satén se escapa por los costados del bastidor a mitad del bordado",
        "cause": "Paredes del aro de plástico pulido resbaladizas y tornillo con apriete insuficiente",
        "solution": "Forre el aro interior con cinta de papel crepé para multiplicar la fricción y sujeción de la prenda"
      }
    ],
    "calculatorAd": "Soluciones simples de taller reducen prendas arruinadas y disparan la rentabilidad. Lleve el control de sus costos con la Calculadora de Bordados Artrelados."
  }
};

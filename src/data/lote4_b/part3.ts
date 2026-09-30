import { Verbete } from "../../types";

export const LOTE4_B_PART3_ES: Record<string, Partial<Verbete>> = {
  "b-009-bordado-eletronico": {
    "term": "Bordado Electrónico / Computarizado (Computerized Machine Embroidery)",
    "level": "Iniciante 🟢",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín computer (calcular) y del germánico borda (orla, borde decorado). Revolución tecnológica que reemplazó el control manual y mecánico por microprocesadores digitales a partir de la década de 1980.",
    "definition": "Disciplina técnico-productiva y artística en la cual una máquina electromecánica guiada por computadora ejecuta de forma completamente automática patrones de costura decorativa de alta velocidad sobre materiales textiles, mediante la traslación biaxial de un pantógrafo en coordenadas X-Y sincronizada con el movimiento vertical de la aguja y la rotación del garfio de bobina.",
    "howItWorks": [
      "1. El archivo binario de la matriz (.DST, .PES, etc.) se carga en la memoria del panel de control de la máquina vía USB, cable de red o Wi-Fi.",
      "2. La bordadora ajusta la prenda en el bastidor con entretela tensada y monta el conjunto en los brazos del pantógrafo.",
      "3. El operador asigna los números de aguja correspondientes a cada bloque de color de la matriz.",
      "4. Al pulsar arranque, los servomotores mueven el pantógrafo en microfracciones de milímetro mientras la aguja sube y baja entre 600 y 1200 veces por minuto.",
      "5. Los sensores de rotura de hilo ópticos y mecánicos monitorean la continuidad del hilado; al completarse el diseño, las cuchillas del trimmer cortan los hilos y el pantógrafo regresa al punto de origen."
    ],
    "beginnerExplanation": "Es el arte de bordar llevado a la era moderna. En vez de coser con aguja e hilo a mano durante horas o mover la tela a pulso en una máquina vieja, pones la tela en un aro plástico llamado bastidor, le enchufas a la máquina un archivo desde una memoria USB con el dibujo que quieres y la máquina cose sola a toda velocidad con precisión microscópica, cambiando los colores y cortando los hilos automáticamente.",
    "practicalExamples": [
      "Personalización de uniformes escolares y corporativos con logotipos bordados en el pecho.",
      "Confección masiva de gorras deportivas y sombreros con diseños en relieve 3D.",
      "Bordados de arte y alta costura en vestidos de gala, trajes ceremoniales y ropa de cama."
    ],
    "matrixParametersRelation": [
      "Resolución del pantógrafo: precisión de movimiento de 0,1 mm por impulso de motor paso a paso.",
      "Sincronización de grados de máquina: el pantógrafo solo se desplaza durante la ventana angular en que la aguja está completamente fuera de la tela (típicamente entre 280° y 100° del ciclo).",
      "Formatos matriciales estándar: comandos universales de salto (Jump), puntada (Stitch), fin (End) y cambio de aguja (Color Change)."
    ],
    "commonErrors": [
      "Montar la tela floja en el bastidor sin la tensión adecuada 'de parche de tambor', provocando arrugas y desfasaje de contornos.",
      "Usar entretelas inadecuadas para el tipo de tejido (por ejemplo, entretela fina de rasgar en una tela de punto elástica).",
      "No realizar mantenimiento ni lubricación regular en el garfio y las barras de aguja, provocando recalentamiento y ruidos secos."
    ],
    "troubleshootingTips": [
      "Limpia las pelusas de la caja de bobina y la lanzadera con un pincel limpio al inicio de cada jornada de trabajo.",
      "Reemplaza la aguja cada 8 a 10 horas de trabajo continuo o ante el primer síntoma de enganche de fibras.",
      "Verifica la balanza de tensiones realizando un test de pespuntes en la tela antes de arrancar pedidos grandes."
    ],
    "whenToAdjust": "Revisa las tensiones de hilo y la altura del prensatelas cada vez que cambies drásticamente de tipo de tela (de lona pesada a seda fina).",
    "dicaArtrelados": "El pilar de éxito Artrelados: El bordado electrónico de calidad se apoya en un trípode inseparable: 1) una matriz bien digitalizada, 2) una correcta combinación de aguja y entretela, y 3) una máquina limpia y bien lubricada. Si uno de estos tres pilares falla, el resultado final no será perfecto. Domina los tres y serás un maestro del bordado.",
    "voceSabia": "¿Sabías que la primera máquina de bordar electrónica moderna fue presentada en Japón en 1980 por Tajima (modelo TMEF), y revolucionó el mundo textil porque permitía cambiar de color automáticamente sin detener la producción?",
    "practicalExercise": "Observa tu máquina bordando a velocidad reducida: fíjate en el instante exacto en que la aguja sale de la tela; verás cómo en esa milésima de segundo el bastidor da un brinco suave hacia la siguiente coordenada. Esa sincronización milimétrica es el corazón del bordado electrónico.",
    "quickSummary": "Automatización electromecánica del bordado guiada por computadora mediante servomotores y lectura digital de matrices.",
    "summary": "Automatización electromecánica del bordado guiada por computadora mediante servomotores y lectura digital de matrices.",
    "relatedTerms": [
      "Bordado Digitalizado / Ponchado",
      "Pantógrafo de Máquina de Bordar",
      "Bastidor de Bordado",
      "Ajuste de Tensión del Hilo"
    ]
  },
  "b-021-bordado-em-3d-puff": {
    "term": "Bordado en 3D (Alto Relieve con Goma EVA / 3D Puff)",
    "level": "Intermedio 🟡",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés 3D puff embroidery (bordado hinchado o inflado). Técnica icónica popularizada en las gorras oficiales de las grandes ligas de béisbol de Estados Unidos (MLB).",
    "definition": "Técnica de bordado de alto impacto visual y táctil que logra un volumen tridimensional sobresaliente (de 2 mm a 3 mm de espesor) mediante la colocación de una lámina de espuma de etilvinilacetato (goma EVA / Puffy Foam) de alta densidad sobre la tela, la cual es encapsulada por puntadas satín muy tupidas y cortada limpiamente en su perímetro por la penetración perforante de la aguja.",
    "howItWorks": [
      "1. La matriz se digitaliza con tapas o cierres de borde perimetral (Capping / End Stitches) para sellar los extremos de las columnas.",
      "2. La máquina borda primero las partes planas del diseño directamente sobre la tela.",
      "3. La máquina se detiene y la bordadora coloca una lámina de goma EVA del mismo tono del hilo sobre el área en relieve, fijándola con cinta o adhesivo temporal.",
      "4. Se ejecutan puntadas satín transversales de alta densidad (0,20 mm a 0,25 mm de espaciado) perforando y encapsulando la espuma.",
      "5. Al terminar, la lámina sobrante de EVA se desprende tirando suavemente con la mano; los pequeños restos asomados se contraen aplicando calor rápido con un soplador térmico.",
      "6. El diseño queda con una silueta dura, acolchada y con volumen tridimensional permanente."
    ],
    "beginnerExplanation": "Es el bordado gordito con relieve que tienen las letras de las gorras deportivas originales (como las de los Yankees). En vez de bordar sobre la tela plana, se apoya una lámina de goma EVA (gomaespuma de manualidades) sobre la gorra y la máquina borda puntadas de satín súper apretadas por encima. La aguja va troquelando la goma en los bordes y al final arrancas el sobrante: la letra queda inflada y tridimensional como si fuera de goma dura.",
    "practicalExamples": [
      "Logotipos y letras iniciales de gran tamaño en el panel frontal de gorras de béisbol y visera plana.",
      "Letras de marca y números deportivos en chaquetas pesadas de abrigo y bolsos deportivos.",
      "Monogramas tridimensionales de lujo en mochilas tácticas y calzado urbano."
    ],
    "matrixParametersRelation": [
      "Densidad duplicada (Double Density): espaciado muy cerrado de 0,20 mm a 0,26 mm (casi el doble de puntadas que un satín normal) para que la espuma no se vea a través del hilo.",
      "Tapas de columna (Capping): obligatorio digitalizar puntadas perpendiculares en las esquinas y extremos para encerrar la espuma y que no asome por los lados.",
      "Longitud de puntada satín: no debe superar los 8 mm; si la columna es más ancha, se aplasta la espuma y pierde volumen.",
      "Prohibido el Underlay tradicional: no usar tatami ni zigzag bajo el satín, solo una línea central simple (Center Walk) para no aplastar el grosor del EVA."
    ],
    "commonErrors": [
      "Usar goma EVA de color contrastante al hilo (por ejemplo, EVA blanca bajo hilo negro): cualquier microespacio dejará ver la espuma blanca.",
      "Olvidar colocar las tapas de cierre en los extremos de las letras, haciendo que la gomaespuma salga deshilachada por las puntas.",
      "Usar plancha de calor directo para derretir los restos de espuma en vez de soplador de aire caliente, aplastando el relieve para siempre."
    ],
    "troubleshootingTips": [
      "Usa siempre goma EVA especial para bordado de 2 mm a 3 mm con densidad media-alta (fácil de perforar y quebrar).",
      "Utiliza una aguja gruesa de punta de cuña o aguja de titanio 90/14: perfora agujeros más definidos que cortan la espuma como bisturí.",
      "Pasa una pistola de calor o soplador térmico a 15 cm de distancia durante 3 segundos para que los microhilitos de EVA se retraigan y desaparezcan al instante."
    ],
    "whenToAdjust": "Aumenta la densidad del satín si al retirar la espuma sobrante observas que el color de la goma se transparenta entre las hebras de hilo.",
    "dicaArtrelados": "El tip de campeonato Artrelados para 3D Puff: Si vas a bordar gorras armadas con EVA, reduce la velocidad de tu máquina a 550 o 600 PPM y afloja ligeramente la tensión del hilo superior. El volumen de la espuma ejerce una resistencia extra sobre la aguja: con menor velocidad evitarás roturas de aguja y lograrás un satín con brillo satinado de nivel profesional.",
    "voceSabia": "¿Sabías que la goma EVA especial para bordado (Puffy Foam) se fabrica con burbujas de aire microscópicas homogéneas para que al ser picada por la aguja se desprenda limpiamente como papel troquelado sin dejar rebabas?",
    "practicalExercise": "Crea una letra 'B' sencilla de 4 cm en satín con tapas de remate en los extremos y densidad de 0,24 mm. Bórdala sobre un retazo de tela rígida con un trozo de goma EVA negra de 2 mm y retira el excedente para experimentar el corte perfecto de la espuma.",
    "quickSummary": "Técnica de bordado en alto relieve que encapsula una lámina de goma EVA bajo puntadas satín densas para crear efectos 3D.",
    "summary": "Técnica de bordado en alto relieve que encapsula una lámina de goma EVA bajo puntadas satín densas para crear efectos 3D.",
    "relatedTerms": [
      "Bordado en Alto Relieve con EVA / 3D Puff Técnico",
      "Soplador Térmico / Pistola de Aire Caliente",
      "Bastidor de Gorras (Cap Frame)",
      "Puntadas de Cierre y Encapsulado (Capping)"
    ]
  },
  "b-013-bordado-em-alta-densidade": {
    "term": "Bordado en Alta Densidad (High Density Stitching)",
    "level": "Avanzado 🔴",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del concepto físico de densidad de puntada (número de pasadas de hilo por unidad de longitud o milímetro de tejido).",
    "definition": "Configuración técnica avanzada de digitalización y bordado en la que se concentra un número extraordinariamente elevado de puntadas en un espacio reducido (espaciados inferiores a 0,30 mm o densidades superiores a 4,5 líneas/mm), empleada deliberadamente para lograr opacidad total, texturas escultóricas, técnicas de 3D Puff o microletras de alta definición.",
    "howItWorks": [
      "1. El digitalizador calibra el valor de densidad en el software reduciendo el espaciado entre hileras a valores de 0,22 mm a 0,28 mm.",
      "2. Se compensa la tirantez aumentando los márgenes laterales (Pull Compensation de 0,45 mm a 0,60 mm) para contrarrestar la intensa fuerza de tracción del hilo concentrado.",
      "3. La máquina ejecuta múltiples penetraciones contiguas en una superficie compacta.",
      "4. La entretela pesada de cortar (Cut-away) absorbe la deformación estructural de la tela base.",
      "5. La acumulación de filamentos genera una placa textil sólida, compacta y con resistencia extrema al desgaste."
    ],
    "beginnerExplanation": "Significa poner muchas puntadas de hilo muy juntitas y apretadas en un espacio chiquito. Es lo contrario a un bordado ralo o transparente: aquí no queda ni un solo huequito visible y el dibujo queda grueso, sólido y con color súper intenso. Hay que saber usarlo con cuidado, porque si pones demasiado hilo en el mismo lugar, la aguja puede agujerear la tela como un cartón picado.",
    "practicalExamples": [
      "Microletras y textos corporativos de menos de 4 mm de altura en uniformes bancarios.",
      "Cobertura absoluta sobre goma EVA en técnicas de bordado 3D para gorras.",
      "Escudos militares de alta resistencia al frote y al lavado industrial intensivo."
    ],
    "matrixParametersRelation": [
      "Espaciado de puntada (Stitch Spacing): entre 0,20 mm y 0,28 mm según el calibre del hilo (60wt para microletras, 40wt para 3D).",
      "Selección de aguja: aguja fina 65/9 o 70/10 para microletras de alta densidad para evitar picar la tela; aguja 90/14 para 3D.",
      "Distribución de puntos de penetración: evitar clavar la aguja en las mismas coordenadas exactas para prevenir desgarros (Stitch Jitter)."
    ],
    "commonErrors": [
      "Aplicar alta densidad sobre telas finas o elásticas (seda, gasa, modal), destruyendo las fibras y dejando agujeros visibles.",
      "No reforzar con entretela pesada, haciendo que la tela se arrugue en forma de embudo hacia el centro del bordado.",
      "Aumentar la densidad sin aflojar la tensión superior, provocando constantes roturas de hilo por sobrecalentamiento."
    ],
    "troubleshootingTips": [
      "Utiliza hilo fino de calibre 60wt o 75wt si buscas alta definición y densidad en textos diminutos; permite puntadas muy juntas sin bultos.",
      "Usa entretela estable de cortar (Cut-away) de al menos 80 g/m² para que sostenga la fuerza del entramado denso.",
      "Asegúrate de que la punta de la aguja esté impecable; una rebaba microscópica cortará los hilos contiguos ante tanta concentración de puntadas."
    ],
    "whenToAdjust": "Aumenta el espaciado (reduce la densidad) si notas que el bordado queda acartonado e inflexible como un trozo de madera.",
    "dicaArtrelados": "El tip de equilibrio Artrelados: Más puntadas no siempre significa mejor bordado. Una matriz bien calibrada con una buena base de soporte (Underlay) logra una cobertura perfecta con un espaciado estándar de 0,40 mm, mientras que una matriz mal diseñada intenta tapar huecos subiendo la densidad a 0,25 mm arruinando la tela. Usa la alta densidad solo cuando la técnica lo exija (como en 3D Puff o microtextos).",
    "voceSabia": "¿Sabías que si la densidad supera las 6 puntadas por milímetro, el hilo de bordar de poliéster genera tanta fricción térmica contra el ojal de la aguja que puede alcanzar los 180 °C, derritiéndose literalmente dentro del ojo de la aguja?",
    "practicalExercise": "Diseña dos letras 'X' de 10 mm en satín: una con espaciado de 0,40 mm e hilo 40wt, y otra con espaciado de 0,26 mm e hilo 60wt fino. Bórdalas en la misma tela y observa la nitidez superior y suavidad táctil de la segunda opción.",
    "quickSummary": "Concentración extrema de puntadas por milímetro para cobertura total, microletras nítidas o encapsulado de relieves 3D.",
    "summary": "Concentración extrema de puntadas por milímetro para cobertura total, microletras nítidas o encapsulado de relieves 3D.",
    "relatedTerms": [
      "Densidad de Puntada (Stitch Density)",
      "Bordado en 3D (Alto Relieve con Goma EVA)",
      "Hilo de Bordar Calibre 60wt",
      "Compensación de Tirantez"
    ]
  },
  "b-059-bordado-em-alto-relevo-3d-puff-eva": {
    "term": "Bordado en Alto Relieve con EVA / 3D Puff Técnico (3D Foam Industrial Embroidery)",
    "level": "Avanzado 🔴",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Metodología industrial avanzada normada por especificaciones técnicas de licencias deportivas internacionales (NBA, NFL, MLB) para bordados en relieve de alta durabilidad.",
    "definition": "Protocolo industrial estandarizado para la digitalización y producción de bordados en alto relieve dimensional utilizando láminas técnicas de espuma de etilvinilacetato (EVA) de dureza calibrada (Shore A 25 a 35), que integra secuencias matriciales de sellado perimetral biselado, perforación perimetral por aguja de titanio y retracción térmica asistida por aire caliente para lograr bordes limpios sin rebabas visibles.",
    "howItWorks": [
      "1. Programación de tapas transversales (Capping) en ángulo de 90° respecto a las columnas principales para crear esquinas cerradas y herméticas.",
      "2. Trazado de una línea guía de colocación en puntada recta que marca el perímetro exacto donde se ubicará el rectángulo de EVA.",
      "3. Posicionamiento del EVA fijado por adhesivo en aerosol reposicionable libre de residuos sobre la tela armada de la gorra.",
      "4. Ejecución del satín principal con puntada perpendicular reforzada y avance controlado del pantógrafo a velocidad estable de 550 PPM.",
      "5. Desprendimiento mecánico manual del EVA sobrante a lo largo de las microperforaciones creadas por la aguja.",
      "6. Termocontracción con pistola de calor a 180 °C durante 2 segundos para encoger los microporos residuales de espuma hacia el interior del cordón."
    ],
    "beginnerExplanation": "Es la versión profesional y perfeccionada del bordado con gomita en gorras. En vez de poner la goma a ojo y que queden pelusas en las puntas, aquí se programa la computadora para que haga unas costuras especiales en las esquinas que envuelven la gomaespuma como si fuera un paquete de regalo. Luego, con un golpe de aire caliente, cualquier pedacito de goma que haya quedado asomando se encoge y se esconde solo.",
    "practicalExamples": [
      "Letras con corte biselado y relieves nítidos en gorras de béisbol de alta gama y visera rígida.",
      "Emblemas tridimensionales en camperas universitarias de cuero y lana pesada.",
      "Marcas deportivas en bolsos de cordura y mochilas de aventura con relieve de 3 mm."
    ],
    "matrixParametersRelation": [
      "Densidad matemática: espaciado de 0,22 mm a 0,24 mm; si se usa hilo de poliéster 40wt brillante.",
      "Compensación de tirantez ampliada: Pull Compensation de 0,5 mm a 0,7 mm para cubrir los laterales verticales de la espuma sin que se achique el cordón.",
      "Longitud máxima de puntada: 7,5 mm; para anchos mayores se debe combinar con una división o satín compuesto.",
      "Comandos de biselado: disminución progresiva de la longitud de puntada en las puntas para crear un cierre redondeado perfecto."
    ],
    "commonErrors": [
      "Usar goma EVA de cotillón común con burbujas de aire irregulares y dureza blanda, dejando bordes deshechos e hilos hundidos.",
      "No sellar los extremos de las columnas, dejando la espuma cortada al descubierto en las puntas de las letras.",
      "Acercar demasiado la pistola de calor, quemando o derritiendo el hilo de poliéster superior."
    ],
    "troubleshootingTips": [
      "Utiliza espuma técnica certificada para bordado (como Gunold Puffy Foam o Madeira Body): su densidad uniforme garantiza desprendimiento instantáneo.",
      "Elige agujas con punta de lanza o cuña afilada (SES / RG) calibre 90/14 recubiertas de nitruro de titanio para mantener el filo durante miles de perforaciones.",
      "Limpia el prensatelas de la máquina regularmente para evitar que acumule estática o restos adhesivos del spray."
    ],
    "whenToAdjust": "Reduce la velocidad a 500 PPM si escuchas un chasquido fuerte al perforar la espuma en el panel central de gorras con costura gruesa.",
    "dicaArtrelados": "El tip de acabado definitivo Artrelados para 3D Puff: Si te quedan pequeños puntitos de goma del color del hilo asomándose en los bordes, pasa rápidamente la llama azul de un encendedor a 3 cm de distancia con un movimiento rápido de barrido (apenas una fracción de segundo). El calor instantáneo vaporiza los microfilamentos de espuma sin tocar el hilo.",
    "voceSabia": "¿Sabías que para lograr un bordado en relieve con dos colores superpuestos se puede colocar una primera capa de satín plano de un color y luego colocar el EVA encima y bordar un segundo color en 3D con un registro perfecto?",
    "practicalExercise": "Prueba a bordar una letra 'T' con técnica de 3D técnico: digitaliza primero el trazo horizontal con tapas en ambos extremos y luego el trazo vertical solapando 1 mm sobre el horizontal. Observa la solidez arquitectónica del cruce.",
    "quickSummary": "Protocolo industrial riguroso para bordado tridimensional en gorras y prendas con goma EVA técnica, tapas de columna y acabado térmico.",
    "summary": "Protocolo industrial riguroso para bordado tridimensional en gorras y prendas con goma EVA técnica, tapas de columna y acabado térmico.",
    "relatedTerms": [
      "Bordado en 3D (Alto Relieve con Goma EVA)",
      "Puffy Foam y Gomaespuma Técnica",
      "Soplador Térmico / Pistola de Aire Caliente",
      "Bastidor de Gorras (Cap Frame)"
    ]
  },
  "b-037-bordado-em-bastidor-expandido": {
    "term": "Bordado en Bastidor Expandido / Gran Formato (Extended & Jumbo Hoop Embroidery)",
    "level": "Intermedio 🟡",
    "category": "Equipamiento & Herramientas",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés extended hoop / jumbo hoop. Desarrollo de aros sobredimensionados para bordar piezas enteras de espaldas de camperas y estandartes sin necesidad de cortes ni uniones intermedias.",
    "definition": "Técnica y equipamiento de bordado para áreas de gran envergadura (dimensiones superiores a 360x200 mm hasta bastidores gigantes de 500x1200 mm en máquinas industriales), que requiere sistemas de soporte adicionales para el pantógrafo, estabilización reforzada contra la vibración y un control riguroso de la tensión de la tela a lo largo de extensiones amplias.",
    "howItWorks": [
      "1. La matriz se divide o se procesa como un diseño monumental que abarca toda la espalda de una prenda o el ancho de una manta.",
      "2. Se monta un bastidor expandido con brazos de anclaje anchos acoplados directamente al puente reforzado del pantógrafo.",
      "3. La prenda se tensa utilizando mesas accesorias de extensión plana para evitar que el peso de la tela cuelgue y frene los servomotores.",
      "4. Se utilizan entretelas de gran ancho en rollos de 1 metro o 1,5 metros para cubrir el área completa sin solapes ni parches.",
      "5. La máquina borda a velocidad moderada (600 a 750 PPM) compensando las fuerzas de inercia y las vibraciones armónicas del aro grande."
    ],
    "beginnerExplanation": "Cuando tienes que bordar la espalda entera de una campera de motoquero o el logo gigante de un equipo en un buzo, un bastidor normal no alcanza. Se usa un bastidor gigante ('Jumbo' o expandido) que parece un cuadro grande. Como es tan pesado y grande, hay que apoyar la tela en una mesa especial para que la máquina no haga fuerza de más y no vibre mientras cose.",
    "practicalExamples": [
      "Espaldas completas de camperas de cuero y denim para clubes de motociclistas y comparsas.",
      "Estandartes ceremoniales, banderas patrióticas y mantos litúrgicos de gran formato.",
      "Kimonos de artes marciales, batas de boxeo y mantas de cuna bordadas de borde a borde."
    ],
    "matrixParametersRelation": [
      "Campo de bordado máximo (Max Sewing Field): configurar en el software el límite exacto del bastidor Jumbo para evitar choques con el marco.",
      "Secuencia de bordado desde el centro hacia afuera (Center-Out Sequence): regla obligatoria en matrices grandes para expulsar las olas de tela hacia los márgenes.",
      "Compensación de tirantez incremental: aumentar la compensación en las figuras ubicadas lejos del centro por la mayor elasticidad del tejido en áreas amplias."
    ],
    "commonErrors": [
      "Dejar que la campera o manta cuelgue libremente fuera de la mesa, provocando sobrecarga en los motores del pantógrafo y pérdida de pasos (desfasaje).",
      "No ajustar los tornillos laterales del bastidor grande de forma uniforme, dejando la tela floja en el centro como una hamaca.",
      "Bordar a 1000 PPM con bastidores pesados, generando vibraciones excesivas que desafilan agujas y descalibran el pantógrafo."
    ],
    "troubleshootingTips": [
      "Instala siempre la mesa plana de soporte extendido (Wide Table) alrededor del brazo libre de tu máquina para sostener el peso de la prenda.",
      "Aplica pinzas de sujeción adicionales (Hoop Clips) en los cuatro lados del bastidor para evitar que la tela se deslice por la tracción.",
      "Utiliza doble capa de entretela pesada de cortar (Cut-away) cruzando el sentido de la fibra a 90 grados para máxima firmeza estructural."
    ],
    "whenToAdjust": "Reduce la velocidad a 600 PPM si notas que el marco del bastidor tiembla ostensiblemente durante los desplazamientos largos de puntada.",
    "dicaArtrelados": "El truco de los imanes Artrelados para bastidores Jumbo: Si estás bordando una espalda grande y notas que en el centro la tela tiende a levantarse con el prensatelas, coloca pequeños imanes de neodimio planos (cubiertos con cinta para no manchar) por encima y por debajo de las zonas libres de bordado. Actuarán como prensatelas invisibles manteniendo la tela perfectamente plana.",
    "voceSabia": "¿Sabías que los bastidores planos industriales más grandes del mundo se usan para bordar telas de tapicería de aviones y cortinas de teatros de ópera, y pueden superar los 3 metros de ancho con máquinas de 30 cabezales trabajando en simultáneo?",
    "practicalExercise": "Coloca una sábana o tela grande en tu bastidor más amplio. Presiona suavemente con la palma de tu mano en el centro del aro: debe rebotar con firmeza y tensión elástica uniforme sin hundirse ni formar pliegues diagonales.",
    "quickSummary": "Equipamiento y técnica para bordar diseños monumentales en áreas sobredimensionadas con soportes de mesa y control de peso.",
    "summary": "Equipamiento y técnica para bordar diseños monumentales en áreas sobredimensionadas con soportes de mesa y control de peso.",
    "relatedTerms": [
      "Área Útil del Bastidor",
      "Mesa de Extensión Plana (Wide Table)",
      "Pantógrafo de Máquina de Bordar",
      "Secuencia de Bordado desde el Centro"
    ]
  },
  "b-020-bordado-em-camadas": {
    "term": "Bordado en Capas / Superposición de Puntadas (Layered Embroidery & Color Blending)",
    "level": "Intermedio 🟡",
    "category": "Digitalização & Matrices",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín complicare y del concepto pictórico del claroscuro y la veladura al óleo, donde sucesivas capas semitransparentes generan volumen y realismo fotográfico.",
    "definition": "Estrategia avanzada de digitalización y bordado que construye imágenes complejas y tridimensionales mediante la superposición metódica de múltiples estratos de puntadas con diferentes orientaciones angulares, densidades graduadas y tonalidades cromáticas, permitiendo fusionar colores (Color Blending / Sombreo) y crear texturas vivas de pelaje, plumaje, piel y paisajes con profundidad óptica.",
    "howItWorks": [
      "1. Capa base estructural: se borda primero el fondo general con una densidad baja o media para dar el tono primario y asentar la tela.",
      "2. Capa intermedia de modelado: se superponen bloques de puntadas con densidad abierta (0,70 mm a 1,0 mm) cuyos ángulos cruzan los de la base en 30° a 45°.",
      "3. Capa de luces y sombras: se bordan hilos más claros u oscuros con puntadas de terminación irregular o plumeteado (Feather Stitch / Jagged Edge).",
      "4. Capa de detalles de primer plano: contornos en satín fino, brillos en los ojos y líneas de relieve que cierran la composición.",
      "5. La combinación óptica de los hilos superpuestos engaña al ojo humano creando la ilusión de un degradado continuo y textura viva."
    ],
    "beginnerExplanation": "Es como pintar un cuadro al óleo pero con hilos. En vez de rellenar una figura con un solo color plano como en un dibujo para colorear, vas bordando capas unas sobre otras: primero un color de fondo, luego hilos más claritos con puntadas abiertas para dar luz, luego hilos oscuros para dar sombra, y al final los detallitos finos. El resultado parece una foto real o un animalito con pelo de verdad.",
    "practicalExamples": [
      "Retratos realistas de mascotas (perros, gatos, caballos) con texturas de pelaje brillante.",
      "Pétalos de flores hiperrealistas (rosas, orquídeas) con degradados suaves de color desde el cáliz a la punta.",
      "Bordados de arte textil con rostros humanos y paisajes con profundidad de campo."
    ],
    "matrixParametersRelation": [
      "Bordes irregulares desfasados (Feathered / Jagged Edges): fundamental programar que las puntadas terminen con longitudes desiguales para que los colores se entremezclen sin una línea dura de separación.",
      "Densidad reducida acumulada: cada capa individual debe tener una densidad abierta (entre 0,60 mm y 0,90 mm); si se usan densidades normales (0,40 mm), la superposición generará un bloque de cartón impenetrable.",
      "Control de penetraciones compartidas: activar la función de filtrado de micropuntadas del software para que la aguja no choque en los mismos orificios de la capa inferior."
    ],
    "commonErrors": [
      "Superponer tres o cuatro capas con densidad estándar (0,40 mm), provocando que la tela se rompa por exceso de puntadas y quebrando agujas.",
      "Bordar todas las capas con el mismo ángulo de puntada, haciendo que las hebras superiores se hundan dentro de las inferiores y desaparezcan.",
      "No considerar el grosor del hilo: intentar hacer capas densas con hilo 40wt en vez de hilo fino de calibre 60wt."
    ],
    "troubleshootingTips": [
      "Utiliza hilo fino calibre 60wt para las capas superiores de detalles y luces: penetra con suavidad y no agrega bultos rígidos.",
      "Varía los ángulos entre capas sucesivas en al menos 20° a 30° para que las hebras superiores descansen sobre las inferiores reflejando la luz.",
      "Usa una aguja delgada de punta fina 70/10 o punta de bola pequeña (SES) para no desgarrar las hebras ya bordadas debajo."
    ],
    "whenToAdjust": "Abre el espaciado de las capas en el software si notas que la aguja emite un sonido sordo y pesado al atravesar las áreas superpuestas.",
    "dicaArtrelados": "El secreto pictórico Artrelados para pelajes realistas: Al digitalizar animales en capas, trabaja siempre en la dirección natural del crecimiento del pelo. Empieza bordando desde la cola hacia la cabeza o desde el cuello hacia el hocico: cada nueva capa de pelo bordada caerá suavemente sobre el inicio de la capa anterior, creando un efecto de pelo natural con volumen real que dan ganas de acariciar.",
    "voceSabia": "¿Sabías que los retratos bordados hiperrealistas en capas pueden contener más de 60 cambios de hilo distintos y más de 100.000 puntadas en un área de apenas 15x15 cm, logrando reproducir fielmente las pupilas y expresiones de un rostro humano?",
    "practicalExercise": "Crea una hoja de árbol de 5 cm: borda una base en verde oscuro con ángulo de 45° y densidad abierta de 0,80 mm; encima borda una capa verde manzana con ángulo de 75° y densidad de 0,70 mm con bordes irregulares. Observa cómo nace un degradado natural perfecto.",
    "quickSummary": "Superposición metódica de capas de puntadas abiertas con diferentes ángulos y colores para crear degradados y texturas realistas.",
    "summary": "Superposición metódica de capas de puntadas abiertas con diferentes ángulos y colores para crear degradados y texturas realistas.",
    "relatedTerms": [
      "Degradado de Color (Color Blending)",
      "Bordes Irregulares (Jagged Edges)",
      "Hilo de Bordar Calibre 60wt",
      "Bordado Decorativo"
    ]
  },
  "b-050-bordado-couro-sinteticos": {
    "term": "Bordado en Cuero y Cueros Sintéticos (Leather & Vinyl Industrial Embroidery)",
    "level": "Avanzado 🔴",
    "category": "Insumos & Materiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del latín corium (piel curtida de animal). Especialización industrial en marroquinería, calzado y tapicería automotriz de alta gama.",
    "definition": "Proceso técnico riguroso de bordado computarizado sobre pieles naturales curtidas, cuero descarne o cueros sintéticos poliméricos (cuerina, vinilo, poliuretano, biopiel), que exige el uso mandatorio de agujas especiales cortantes (Needle Leather / Punta Lanza o Cortante DI/LL), reducción drástica de la densidad de puntada y sujeción sin marcas para evitar el troquelado y desgarro irreparable del material.",
    "howItWorks": [
      "1. Se selecciona una aguja con punta cortante biselada (System 130/705 H-LL para máquinas familiares o DBxK5-LL para industriales) que corta una microincisión en ángulo en vez de empujar fibras.",
      "2. El diseño se digitaliza con densidades abiertas (espaciado no menor a 0,48 mm a 0,55 mm) y longitudes de puntada largas (mínimo 3,0 mm a 4,0 mm).",
      "3. El cuero se monta en el bastidor utilizando marcos magnéticos o bastidores con almohadillas protectoras (nunca a presión extrema de aros plásticos rígidos para no dejar marcas permanentes conocidas como Hoop Burn).",
      "4. Se utiliza entretela de cortar de gramaje medio o entretela adhesiva no tejida por debajo.",
      "5. La máquina borda a velocidad moderada (500 a 650 PPM) para evitar el calentamiento de la aguja que funde la resina sintética o quema el colágeno del cuero natural."
    ],
    "beginnerExplanation": "Bordar sobre cuero o cuerina es muy distinto a bordar sobre una remera de algodón. El cuero no tiene hilos que se abren y se cierran: cada vez que la aguja baja, hace un agujero permanente que nunca más se borra. Si pones muchas puntadas juntas, la máquina actúa como una máquina de picar carne y corta el cuero en pedazos. Por eso se usan agujas especiales que cortan limpiamente, puntadas largas y separadas, y aros especiales que no dejen marcas de aplastamiento.",
    "practicalExamples": [
      "Logotipos y personalización en asientos y apoyacabezas de cuero para autos deportivos.",
      "Emblemas de clubes de motociclistas en chalecos y camperas de cuero vacuno grueso.",
      "Billeteras, cinturones, calzado de seguridad y carteras de cuero y cuerina de lujo."
    ],
    "matrixParametersRelation": [
      "Densidad reducida: aumentar el espaciado a 0,50 mm o 0,55 mm (un 25% menos de puntadas que en tela común).",
      "Longitud mínima de puntada: prohibidas puntadas menores a 2,5 mm; las micropuntadas troquelan el cuero como una estampilla postal y desprenden la pieza.",
      "Puntadas de soporte (Underlay) mínimas: eliminar cuadrículas tatami densas debajo; usar únicamente una línea simple de corrida centrada (Center Walk) con puntadas largas de 4 mm."
    ],
    "commonErrors": [
      "Usar aguja común de punta de bola: rebota contra el cuero duro, desvía la barra de aguja, choca contra la placa y rompe el hilo.",
      "Apretar el bastidor común con tornillo con fuerza sobre cuero o vinilo blando, dejando un círculo aplastado que no sale con nada (Hoop Burn).",
      "Usar diseños digitalizados para remeras de algodón con 0,38 mm de densidad, rajando el cuero a lo largo del contorno."
    ],
    "troubleshootingTips": [
      "Utiliza bastidores magnéticos (Magnetic Hoops): sujetan el cuero con imanes planos sin pellizcar ni dejar marcas circulares de presión.",
      "Si usas bastidor tradicional, coloca tiras de goma eva fina, fieltro o frisa entre el aro y el cuero para amortiguar la presión.",
      "Aplica silicona líquida en spray o lubricante de aguja para que la aguja cortante deslice sin levantar olor a quemado ni fundir el vinilo sintético."
    ],
    "whenToAdjust": "Alarga la puntada y reduce la densidad en la matriz si observas que el cuero muestra microfisuras o tendencia al desgarro entre agujeros contiguos.",
    "dicaArtrelados": "El tip de taller de marroquinería Artrelados: Si no tienes bastidor magnético y no quieres arriesgarte a marcar una campera de cuero carísima, tensa en el bastidor únicamente una entretela pesada con adhesivo en spray y 'pega' el cuero por encima sin apretarlo dentro de los aros. La entretela sostendrá todo el bordado y el cuero quedará 100% libre de marcas de aro.",
    "voceSabia": "¿Sabías que las agujas para cuero tienen puntas cortantes con formas geométricas específicas (forma de cuña, lanza o diamante) diseñadas para que la pequeña incisión quede inclinada en 45 grados respecto a la costura, logrando que el hilo tape el orificio y no se desgarre el cuero al tirar?",
    "practicalExercise": "Toma un retazo de cuerina o cuero sintético viejo. Intenta bordar un círculo en satín normal de 0,38 mm y otro con satín alargado de 0,55 mm y aguja para cuero. Tira de ambos con las manos: verás cómo el primero se arranca como un troquelado de papel y el segundo queda indestructible.",
    "quickSummary": "Especialización para bordar pieles y vinilos con agujas cortantes, puntadas largas, baja densidad y bastidores sin marcas.",
    "summary": "Especialización para bordar pieles y vinilos con agujas cortantes, puntadas largas, baja densidad y bastidores sin marcas.",
    "relatedTerms": [
      "Aguja Punta Lanza / Cortante (DI / LL)",
      "Bastidor Magnético",
      "Marca de Bastidor (Hoop Burn)",
      "Compensación de Tirantez en Cuero"
    ]
  },
  "b-067-bordado-em-relevo-3d-puffy-foam": {
    "term": "Bordado en Relieve 3D / Puffy Foam (Técnica de Gomaespuma EVA para Bordado)",
    "level": "Intermedio 🟡",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del inglés puffy foam (espuma inflada) y de las patentes de insumos termoplásticos desarrollados en Alemania y Estados Unidos para gorras de merchandising internacional.",
    "definition": "Técnica ornamental y publicitaria basada en la inserción de una capa de material celular espumado (gomaespuma de acetato de etilvinilo) entre el tejido de soporte y las puntadas superiores de satín, generando letras, monogramas y siluetas con un perfil tridimensional prominente, aristas rectas y textura almohadillada de alta resistencia al impacto.",
    "howItWorks": [
      "1. La matriz se programa para bordar primero cualquier detalle plano circundante en hilo estándar.",
      "2. La máquina efectúa una pausa automática en la que se extiende la lámina de Puffy Foam sobre la zona diana.",
      "3. La aguja cose columnas de satín transversales continuas cuya densidad multiplicada aplasta y corta la gomaespuma en los flancos de la columna.",
      "4. Se retira el bastidor al concluir el bordado y se hala la lámina de Puffy Foam hacia afuera, arrancándose limpiamente a lo largo de las perforaciones de aguja.",
      "5. Se aplica aire caliente focalizado para encoger los poros residuales microscópicos de espuma que pudieran sobresalir.",
      "6. La estructura de hilo queda auto-soportada sobre el núcleo elástico de gomaespuma encapsulada."
    ],
    "beginnerExplanation": "Es el nombre comercial y técnico de la técnica de bordado en relieve con gomaespuma (Puffy Foam). Te permite hacer letras y números que sobresalen de la tela como si fueran bloques de goma inflada. Al bordar con puntadas muy tupidas por encima de la espuma, la aguja corta la goma por los bordes como un cortante de galletitas, y al sacar el sobrante te queda la letra en relieve 3D impecable.",
    "practicalExamples": [
      "Iniciales en relieve 3D en gorras oficiales de equipos de béisbol, básquetbol y fútbol.",
      "Logotipos tridimensionales en bolsos de cordura para laptops y cámaras de fotos.",
      "Nombres y escudos en camperas de egresados y buzos deportivos pesados."
    ],
    "matrixParametersRelation": [
      "Densidad de puntada cerrada: 0,22 mm a 0,25 mm de separación entre pasadas de satín.",
      "Tapas de extremo (End Caps): puntadas perpendiculares en los bordes abiertos para no dejar la goma expuesta.",
      "Longitud de puntada segura: entre 3,0 mm y 7,5 mm; fuera de este rango la espuma se deforma o el hilo no cubre.",
      "Compensación de tirantez adicional: añadir entre 0,45 mm y 0,60 mm a los laterales del satín."
    ],
    "commonErrors": [
      "Usar goma EVA de grosor excesivo (más de 3,5 mm) en máquinas familiares, provocando choques del prensatelas y descalibración.",
      "Colocar Puffy Foam de color blanco debajo de hilo rojo oscuro o azul marino, dejando ver puntos blancos en el bordado.",
      "Arrancar la gomaespuma bruscamente hacia arriba en vez de jalarla en plano a ras de la tela, aflojando las puntadas de satín."
    ],
    "troubleshootingTips": [
      "Elige siempre el color de la lámina de Puffy Foam más cercano al tono del hilo que vas a utilizar.",
      "Tira de la espuma sobrante en un ángulo plano de 180° pegado a la tela; saldrá como un sello postal troquelado.",
      "Si alguna punta de la espuma se asoma, empújala suavemente hacia adentro con la punta de una pinza de depilar o dale un toque rápido de aire caliente."
    ],
    "whenToAdjust": "Aumenta la densidad si el hilo no logra ocultar la textura de la gomaespuma en el centro de las columnas de satín.",
    "dicaArtrelados": "El tip de la cinta de papel Artrelados para Puffy Foam: Para que la lámina de goma no se mueva ni se levante con el viento del prensatelas antes de que empiece a bordar, pégale dos tiritas de cinta de papel en las esquinas libres (bien lejos de donde va a clavar la aguja). Así te aseguras de que quede plana y sin burbujas durante todo el proceso.",
    "voceSabia": "¿Sabías que la densidad del Puffy Foam se mide en densidad de microburbujas por centímetro cúbico, y que la espuma especial para bordado tiene una densidad 4 veces superior a la goma EVA común de papelería para resistir los lavados sin aplastarse?",
    "practicalExercise": "Toma un retazo de tela firme de jean y prueba hacer un número '1' en satín de 5 mm de ancho con Puffy Foam de 2 mm. Sigue los pasos de sellado y calentamiento para apreciar la textura gomosa y profesional del relieve.",
    "quickSummary": "Insumo espumado de etilvinilacetato y técnica de encapsulado bajo satín denso para crear relieves 3D en gorras y moda.",
    "summary": "Insumo espumado de etilvinilacetato y técnica de encapsulado bajo satín denso para crear relieves 3D en gorras y moda.",
    "relatedTerms": [
      "Bordado en 3D (Alto Relieve con Goma EVA)",
      "Bordado en Alto Relieve con EVA / 3D Puff Técnico",
      "Soplador Térmico / Pistola de Aire Caliente",
      "Bastidor de Gorras (Cap Frame)"
    ]
  },
  "b-036-bordado-em-relevo-termico": {
    "term": "Bordado en Relieve Térmico (Thermal Embossing & Heat-Puff Embroidery)",
    "level": "Avanzado 🔴",
    "category": "Técnicas Especiales",
    "grammarClass": "Locución nominal masculina",
    "origin": "Del griego thermos (calor) y del inglés thermal embossing / puff film. Fusión de la química de polímeros termofusibles con el bordado automático.",
    "definition": "Técnica combinada de bordado y termofijación que genera efectos de relieve escultórico mediante dos vías principales: el uso de películas termoplásticas espumantes que se expanden tridimensionalmente al aplicar calor de plancha o prensa térmica tras el bordado, o el gofrado térmico (embossing) donde matrices bordadas a alta densidad actúan como molde en relieve prensado sobre tejidos aterciopelados, polar o felpa.",
    "howItWorks": [
      "1. En la modalidad de film expansivo: se coloca una lámina fina termoplástica reactiva bajo las puntadas; al someter la pieza a una prensa térmica a 150 °C durante 10 segundos, los agentes espumantes reaccionan inflando el bordado desde adentro.",
      "2. En la modalidad de gofrado/embossing: la máquina borda un bajo relieve negativo denso (en puntada tatami hundida) alrededor de una figura en tejidos con pelo (como toalla, polar o terciopelo).",
      "3. La plancha térmica asienta las fibras aplastadas mientras el diseño central emerge en alto relieve esponjoso natural.",
      "4. Se crea un contraste permanente entre zonas aplastadas brillantes y áreas en relieve suave al tacto.",
      "5. No requiere gomas gruesas en el bastidor, logrando relieves flexibles que no se parten ni se deforman al doblarse."
    ],
    "beginnerExplanation": "Es una forma moderna de hacer relieves sin tener que coser sobre gomas duras. Hay dos formas de hacerlo: una es bordar con una lámina especial que al ponerle la plancha caliente se infla como pochoclo levantando el hilo hacia arriba; y la otra es bordar sobre telas peluditas (como toallas o buzos de polar) aplastando todo el fondo con puntadas apretadas para que la figura del centro quede sobresaliendo sola como si fuera un bajo relieve esculpido.",
    "practicalExamples": [
      "Efectos de gofrado en toallones de baño de hotel de cinco estrellas con monogramas en relieve natural.",
      "Camperas y buzos de micropolar con siluetas y marcas talladas en bajo relieve.",
      "Prendas de diseño contemporáneo con volúmenes termoplásticos inflados por calor posterior."
    ],
    "matrixParametersRelation": [
      "Densidad de contraste: para embossing en toalla, el fondo tatami debe tener alta densidad (0,35 mm) para hundir por completo los bucles de felpa.",
      "Ausencia de bordes cortantes: las figuras centrales en relieve no llevan puntada de satín exterior, sino que la propia felpa de la tela forma el relieve.",
      "Parámetros de prensa térmica: temperatura de 145 °C a 160 °C con presión media (3 a 4 bares) durante 8 a 12 segundos según la ficha técnica del film."
    ],
    "commonErrors": [
      "Quemar las fibras sintéticas de telas de polar o terciopelo al aplicar calor directo de la plancha sin un paño de teflón protector.",
      "Usar densidades de fondo flojas (más de 0,50 mm) en toallas, haciendo que los rulos de felpa se escapen entre las puntadas.",
      "Lavar la prenda con agua hirviendo antes de fijar térmicamente el film expansivo, perdiendo el volumen 3D."
    ],
    "troubleshootingTips": [
      "Utiliza siempre una lámina de teflón o papel siliconado de hornear entre la plancha térmica y el bordado para proteger el brillo de los hilos.",
      "Coloca film hidrosoluble sobre la toalla o tela de pelo durante el bordado para que el prensatelas no se trabe con los bucles.",
      "Realiza pruebas de temperatura en un retazo sobrante del mismo tejido para calibrar los segundos exactos de exposición térmica."
    ],
    "whenToAdjust": "Aumenta la densidad del tatami de fondo si los pelos de la toalla o felpa logran asomarse a través del aplastado.",
    "dicaArtrelados": "El tip de distinción Artrelados para toallas de hotel: El bordado por gofrado térmico (embossing) usando el hilo del mismo color exacto de la toalla es el acabado más sofisticado que existe. No añade peso ni rigidez a la toalla y absorbe el agua perfectamente en el centro del diseño mientras el logotipo luce con una elegancia insuperable.",
    "voceSabia": "¿Sabías que los primeros experimentos de gofrado térmico en telas se hacían en los telares de seda de Lyon en el siglo XVIII usando rodillos de bronce calentados al carbón que grababan arabescos en terciopelo real?",
    "practicalExercise": "Toma un retazo de toalla de baño. En tu software digitaliza un cuadrado de 6x6 cm en tatami con una letra hueca en el centro sin puntadas. Borda con hilo del mismo color de la toalla, plancha con teflón y admira cómo la letra queda en alto relieve natural.",
    "quickSummary": "Técnica de relieve tridimensional lograda mediante películas termoplásticas inflables o fondos de gofrado denso en telas con pelo.",
    "summary": "Técnica de relieve tridimensional lograda mediante películas termoplásticas inflables o fondos de gofrado denso en telas con pelo.",
    "relatedTerms": [
      "Bordado en 3D (Alto Relieve con Goma EVA)",
      "Prensa Térmica y Plancha de Termofijación",
      "Puntada de Relleno (Fill Stitch / Tatami)",
      "Entretela Hidrosoluble Superior (Topping Film)"
    ]
  }
};

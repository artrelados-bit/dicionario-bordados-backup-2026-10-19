import { Verbete } from "../../types";

export const LOTE1_PART1_ES: Record<string, Partial<Verbete>> = {
  // A-001
  "a-074-abastecimento-automatico-de-bobina-enchedor": {
    term: "Abastecimiento Automático de Bobina y Devanador Integrado (Built-in Bobbin Winder & Independent Winding Motor)",
    level: "Intermedio 🟡",
    category: "Operación de la Máquina",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín vulgar ad-bastire (proveer/abastecer) y del latín alveolus (canilla). Desarrollado para permitir el devanado simultáneo sin detener la producción principal.",
    summary: "Dispositivo auxiliar motorizado incorporado en la bordadora diseñado para devanar hilo de canilla de forma continua e independiente durante el bordado.",
    definition: "El sistema de abastecimiento automático de bobina y devanador integrado es el mecanismo electromecánico accionado por motor independiente que permite devanar canillas de hilo inferior simultáneamente mientras la máquina borda a máxima velocidad.",
    technicalDetails: "Opera con sensor óptico o tope mecánico al 90-95% de carga. La tensión de devanado debe mantenerse entre 18g y 22g para evitar estiramiento elástico del hilo 60wt u 80wt.",
    beginnerExplanation: "Es el devanador inteligente de su bordadora: mientras la máquina borda una prenda, va llenando las canillas con hilo blanco por separado para que nunca se detenga su trabajo.",
    construction: [
      "Motor devanador independiente de accionamiento continuo",
      "Eje de fijación con resorte de expansión para canilla estándar",
      "Poste guía con disco de pre-tensión regulable",
      "Palanca limitadora de llenado con parada automática"
    ],
    howItWorks: [
      "1. Se coloca una canilla vacía en el eje y se pasa el hilo inferior por el tensor auxiliar.",
      "2. Se dan varias vueltas manuales y se acciona el devanador.",
      "3. El motor bobina el hilo a velocidad constante durante el bordado de la prenda.",
      "4. Al completarse la carga, se desactiva automáticamente sin derramar hilo."
    ],
    mainTypes: [
      "Devanador Integrado de Motor Independiente (en máquinas multiaguja)",
      "Devanador Superior con Embrague de Volante (en máquinas domésticas)",
      "Estación Devanadora Externa de Alta Velocidad (para talleres industriales)"
    ],
    advantages: [
      "✔ Cero tiempo muerto: llena canillas mientras la máquina produce sin pausa",
      "✔ Tensión de bobinado homogénea y regular",
      "✔ Evita atascos por bobinas desparejas o sobrellenadas",
      "✔ Duplica la productividad diaria del taller"
    ],
    limitations: [
      "Exige calibrar periódicamente la tensión auxiliar para que el bobinado no quede fofo ni tenso en exceso."
    ],
    commonErrors: [
      "❌ Llenar la canilla en exceso hasta que roce contra las paredes de la caja de bobina.",
      "❌ Bobinar hilo con tensión descalibrada, generando bucles en el revés.",
      "❌ Usar hilo con pelusa excesiva en el devanador."
    ],
    troubleshootingTips: [
      "Si la canilla queda blanda: apriete ligeramente la tuerca del tensor auxiliar.",
      "Si el motor se traba: revise que no haya hilos enrollados bajo el eje metálico."
    ],
    dicaArtrelados: "¡Regla de oro del taller Artrelados: antes de iniciar la jornada de bordado, devane una tanda de 10 canillas y guárdelas en un estuche cerrado libre de polvo! Trabajar con canillas listas evita pausas imprevistas.",
    voceSabia: "¡Una canilla de tamaño estándar L contiene entre 100 y 130 metros de hilo continuo 60wt, lo que rinde entre 25.000 y 40.000 puntadas de bordado!",
    practicalExercise: "Devane una canilla y presiónela entre el pulgar y el índice: debe sentirse firme como una goma de borrar, sin ceder como una esponja ni estar dura como una piedra.",
    quickSummary: "Mecanismo que llena canillas con hilo inferior de forma continua y simultánea durante el bordado, garantizando tensión constante.",
    imageCaption: "Mecanismo de devanador de canilla independiente con disco de pretensión y limitador automático de llenado.",
    relatedTerms: [
      "Canilla / Bobina Inferior",
      "Caja de Bobina (Portacanilla)",
      "Tensión de Hilo Inferior"
    ]
  },

  // A-002
  "a-017-abertura-de-campo-de-bordado": {
    term: "Abertura de Campo de Bordado (Hoop Clearance & Border Margin)",
    level: "Fundamental 🟢",
    category: "Operación de la Máquina",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín apertura (espacio libre) y campus (campo plano). Concepto de cinemática industrial para despejar ejes mecánicos en movimiento.",
    summary: "Margen de tolerancia y espacio libre alrededor de la máquina y del bastidor necesario para el desplazamiento fluido del pantógrafo durante el bordado.",
    definition: "La abertura de campo de bordado es la distancia física libre de obstáculos que debe mantenerse en todo el perímetro de la máquina bordadora, de la mesa de apoyo y del brazo libre para que el bastidor no colisione.",
    technicalDetails: "Exige un mínimo de 30 cm a 50 cm de espacio despejado detrás y a los lados de la máquina. El exceso de tela debe enrollarse y asegurarse con pinzas.",
    beginnerExplanation: "Es el espacio libre que su máquina necesita tener a su alrededor en la mesa para que el bastidor pueda moverse hacia adelante, atrás y a los lados sin chocar contra la pared ni herramientas.",
    construction: [
      "Mesa de trabajo nivelada y despejada",
      "Área perimétrica de seguridad en ejes X e Y",
      "Pinzas de sujeción para exceso de prenda",
      "Guías de apoyo del bastidor"
    ],
    howItWorks: [
      "1. Se ubica la bordadora sobre una mesa firme con margen libre en laterales y parte posterior.",
      "2. Se acopla el bastidor y se ejecuta la función de recorrido (Trace).",
      "3. La tela sobrante se enrolla y asegura con pinzas de bastidor.",
      "4. El pantógrafo se mueve libremente en sus coordenadas sin resistencia."
    ],
    mainTypes: [
      "Abertura Perimétrica de Mesa (despeje de objetos)",
      "Margen Interior de Seguridad del Bastidor (distancia de 1.5 cm del aro al dibujo)",
      "Espacio Inferior de Brazo Libre (prendas tubulares)"
    ],
    advantages: [
      "✔ Previene impactos violentos que desalinean el pantógrafo",
      "✔ Evita pérdida de pasos en los motores y contornos desfasados",
      "✔ Protege la tela contra manchas de grasa o roces mecánicos"
    ],
    limitations: [
      "En talleres reducidos, ubicar máquinas junto a paredes puede limitar el área útil."
    ],
    commonErrors: [
      "❌ Dejar tijeras, reglas o tazas cerca del recorrido del bastidor.",
      "❌ Permitir que una toalla pesada cuelgue hacia abajo frenando los motores.",
      "❌ Programar un motivo que exceda el límite del bastidor sin margen de seguridad."
    ],
    troubleshootingTips: [
      "Si el bastidor golpea un objeto: apague y encienda la máquina para resetear el origen de coordenadas.",
      "Si el bordado se desfasa hacia un lado: compruebe si la prenda se trabó con la mesa."
    ],
    dicaArtrelados: "¡Regla de oro del taller Artrelados: la mesa de bordar es sagrada! Jamás deje tijeras, bolígrafos ni vasos cerca del recorrido del bastidor. ¡Un solo impacto desalinea todo el bordado y descalibra los motores de la máquina!",
    voceSabia: "¡A 1.000 puntadas por minuto, el pantógrafo cambia de dirección decenas de veces por segundo con una inercia capaz de doblar brazos de acero si choca!",
    practicalExercise: "Antes de pulsar 'Start' en un bordado grande, realice siempre la función 'TRACE' en la pantalla de su máquina mientras observa si el bastidor roza con algún objeto de la mesa.",
    quickSummary: "Espacio físico despejado indispensable alrededor de la bordadora para que el bastidor se mueva libremente sin colisiones ni desalineaciones.",
    imageCaption: "Diagrama de bastidor técnico destacando el área útil interna de bordado y el margen de holgura perimetral de seguridad.",
    relatedTerms: [
      "Pantógrafo",
      "Bastidor de Bordado",
      "Función Traza (Trace)"
    ]
  },

  // A-003
  "a-087-abrasao-de-fio-em-ilhos-guia": {
    term: "Abrasión de Hilo en Ojal Guía (Thread Eyelet Abrasion)",
    level: "Avanzado 🔴",
    category: "Componentes y Mecánica de la Máquina",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín abrasio (desgaste por fricción) y del francés œillet (ojal pasahilos). Concepto de tribología textil y mantenimiento predictivo.",
    summary: "Desgaste y surcos cortantes generados en los pasahilos y guías cerámicas por el roce continuo del hilo de bordar a alta velocidad.",
    definition: "La abrasión de hilo en ojal guía es el desgaste mecánico que ocurre en los orificios cerámicos o metálicos de los pasahilos. El frotamiento continuo de miles de metros de hilo talla microrranuras filosas que deshilachan y cortan el hilo imprevistamente.",
    technicalDetails: "El dióxido de titanio presente en los hilos de poliéster tiene dureza Mohs 6.0, actuando como una minisierra que desgasta los pasahilos con el tiempo.",
    beginnerExplanation: "Cuando el hilo corre todo el día por los agujeritos de metal o cerámica, actúa como una cuerdita raspando una piedra hasta abrir una ranura afilada que muerde y corta el hilo del bordado.",
    construction: [
      "Ojal cerámico de alúmina pulida",
      "Guía-hilo de acero templado cromado",
      "Punto de fricción del hilo",
      "Soporte antivibración del pasahilos"
    ],
    howItWorks: [
      "1. El hilo corre bajo tensión constante por los ojales del cabezal.",
      "2. El rozamiento continuo desgasta microscópicamente el pasahilos.",
      "3. Se forma una ranura milimétrica afilada.",
      "4. El hilo se atora en la ranura y se corta por cizallamiento."
    ],
    mainTypes: [
      "Abrasión en Ojal Cerámico Superior",
      "Abrasión en Guía de Barra de Aguja",
      "Abrasión en Muelle Tirahilos (Check Spring)"
    ],
    advantages: [
      "✔ Resuelve roturas crónicas e inexplicables de hilo",
      "✔ Prolonga la vida útil de los cabezales",
      "✔ Asegura paso suave para hilos metálicos y delicados"
    ],
    limitations: [
      "Las ranuras suelen ser invisibles a simple vista y demandan inspección táctil."
    ],
    commonErrors: [
      "❌ Apretar los tensores cuando el hilo se corta en vez de revisar los ojales.",
      "❌ Continuar bordando con cerámicas astilladas o agrietadas.",
      "❌ Limpiar guías con alambres ásperos que rayan la superficie."
    ],
    troubleshootingTips: [
      "Si el hilo se corta siempre en la misma aguja: pase un trozo de media de nylon por el interior del ojal; si se engancha, el ojal tiene una ranura cortante.",
      "Si la cerámica está marcada: gírela hacia una zona intacta o cámbiela."
    ],
    dicaArtrelados: "¡El truco de la media de nylon: pase un pedacito de media fina de mujer por todos los guías y agujeros por donde corre el hilo! Si la media se engancha en algún punto, ¡encontró exactamente dónde se estaba cortando el hilo!",
    voceSabia: "¡El dióxido de titanio que da opacidad a los hilos de poliéster es el mismo mineral utilizado en bloqueadores solares y pinturas blancas!",
    practicalExercise: "Tome una lupa o la cámara con zoom del teléfono e inspeccione los ojales de la aguja que más utiliza buscando hendiduras brillantes.",
    quickSummary: "Desgaste en los pasahilos de la máquina provocado por el roce del hilo, causante de roturas continuas de hilo.",
    imageCaption: "Ojal cerámico y metálico pasahilos con vista en sección transversal evidenciando la ranura de desgaste por fricción del hilo.",
    relatedTerms: [
      "Pasahilos / Guía-Hilo",
      "Muelle Tirahilos (Check Spring)",
      "Rotura de Hilo (Thread Break)"
    ]
  },

  // A-004
  "a-068-abrasao-de-linha": {
    term: "Abrasión de Hilo (Friction Wear / Desgaste Mecánico del Hilo)",
    level: "Fundamental 🟢",
    category: "Agujas y Hilos",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín abrasio y filum (hilo). Deterioro mecánico de los filamentos textiles sometidos a fricción en máquinas automáticas.",
    summary: "Deterioro mecánico y térmico que sufren los filamentos del hilo de bordar al pasar a alta velocidad bajo tensión por guías, ojo de la aguja y tela.",
    definition: "La abrasión de hilo es la degradación estructural y calentamiento que experimenta la hebra de bordado por el frotamiento reiterado contra los pasadores, el ojo de la aguja y la densidad del tejido antes de fijarse en la puntada.",
    technicalDetails: "En una puntada satín, el mismo segmento de hilo puede atravesar el ojo de la aguja de 20 a 40 veces antes de asentarse en la tela, requiriendo lubricación siliconada y aguja pulida.",
    beginnerExplanation: "Antes de quedar cosido en la tela, el hilo entra y sale muchísimas veces por el agujerito de la aguja. Si la aguja es muy chica o áspera, el hilo se deshilacha como una cuerda vieja hasta cortarse.",
    construction: [
      "Filamento central de alta tenacidad",
      "Retorcido de 2 o 3 hebras de poliéster trilobal",
      "Recubrimiento de lubricante antiestático",
      "Ojo pulido de la aguja de bordado"
    ],
    howItWorks: [
      "1. El hilo avanza y retrocede velozmente por el ojo de la aguja.",
      "2. La fricción acumula calor y desgaste superficial.",
      "3. Los filamentos exteriores se cortan formando pelusa.",
      "4. La pelusa obstruye el ojo de la aguja y corta la hebra."
    ],
    mainTypes: [
      "Abrasión Térmica (fundición de microfilamentos por aguja desafilada)",
      "Abrasión por Ojo Estrecho (aguja 65/9 con hilo 40wt)",
      "Abrasión por Tejido Rígido (mezclilla, lona o cuero)"
    ],
    advantages: [
      "✔ Evita el 90% de las roturas de hilo en el taller",
      "✔ Permite elegir el tamaño de aguja adecuado para cada hilo",
      "✔ Proporciona acabado satín brillante y suave"
    ],
    limitations: [
      "Los hilos metálicos y de rayón son más vulnerables a la fricción que el poliéster."
    ],
    commonErrors: [
      "❌ Usar hilo grueso con aguja demasiado fina.",
      "❌ Bordar telas densas sin cambiar la aguja durante días.",
      "❌ Aplicar tensiones excesivas que multiplican la fricción."
    ],
    troubleshootingTips: [
      "Si el hilo se deshilacha como motas de algodón: aumente el calibre de la aguja (de 75/11 a 80/12) para tener un ojo más amplio.",
      "Con hilos metálicos: use aguja especial Metallic de teflón."
    ],
    dicaArtrelados: "¡Si nota que el hilo se corta despeluchándose como algodón dulce, frote un hilo de algodón común hacia los lados dentro del ojo de la aguja: si se traba, el ojo tiene rebarba interna! Reemplace la aguja de inmediato.",
    voceSabia: "¡A 1.000 PPM, la aguja puede superar los 180°C por la fricción contra la tela, suficiente para fundir el poliéster si no tiene el recubrimiento adecuado!",
    practicalExercise: "Enhebre una aguja 75/11 con hilo 40wt e incline el hilo a 45 grados: la aguja debe deslizarse libremente hacia abajo por su propio peso.",
    quickSummary: "Desgaste del hilo generado por el frotamiento continuo contra la aguja y la tela, prevenible calibrando el calibre de aguja y la tensión.",
    relatedTerms: [
      "Aguja de Bordado Computadorizado",
      "Hilo de Poliéster 40wt",
      "Tensión de Hilo Superior"
    ]
  },

  // A-005
  "a-009-abridor-de-casas": {
    term: "Abridor de Ojales / Descosedor (Seam Ripper)",
    level: "Principiante 🟢",
    category: "Acabado y Finalización",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín dis-consuere (soltar costuras). Herramienta manual milenaria perfeccionada con bola protectora a mediados del siglo XIX.",
    summary: "Herramienta manual afilada indispensable en el taller para abrir ojales limpios y retirar puntadas erróneas sin dañar la tela.",
    definition: "El abridor de ojales o descosedor es un instrumento manual cortante compuesto por una punta afilada, filo cóncavo interior y una bolita de seguridad roja que evita perforar la tela.",
    technicalDetails: "La bolita roja corre por dentro de las costuras protegiendo el tejido base mientras la cuchilla interior corta únicamente las hebras de hilo.",
    beginnerExplanation: "Es el clásico descosedor con puntita afilada y bolita roja. Sirve para cortar hilos sobrantes, desarmar bordados torcidos y abrir ojales sin cortar la tela.",
    construction: [
      "Punta penetrante fina de acero endurecido",
      "Cuchilla cóncava micro-afilada interior",
      "Bola esférica protectora roja de polímero",
      "Mango ergonómico con capuchón protector"
    ],
    howItWorks: [
      "1. Se desliza la punta bajo las puntadas en el revés de la prenda.",
      "2. La bolita roja se apoya en la tela impidiendo perforaciones.",
      "3. Se avanza con suavidad para que el filo corte las hebras.",
      "4. Se retiran los hilos sueltos con pinza de precisión."
    ],
    mainTypes: [
      "Descosedor Estándar con Bolita Roja",
      "Descosedor Quirúrgico Bisturí (para microdetalles)",
      "Descosedor Ergonómico con Lupa y Luz LED"
    ],
    advantages: [
      "✔ Retira puntadas erróneas sin rasgar la tela base",
      "✔ Abre ojales con precisión milimétrica",
      "✔ Permite descoser zonas puntuales sin desarmar el resto"
    ],
    limitations: [
      "Un descosedor desafilado exige fuerza excesiva y puede resbalar, cortando la tela del cliente."
    ],
    commonErrors: [
      "❌ Empujar con fuerza desmedida hacia adelante.",
      "❌ Utilizar descosedores viejos que muerden la tela.",
      "❌ Intentar cortar puntadas desde el frente en vez de desarmar por el revés."
    ],
    troubleshootingTips: [
      "Para descoser un bordado completo: rasure suavemente el hilo blanco de la canilla en el revés; los hilos de color frontales saldrán solos con cinta adhesiva.",
      "Si el descosedor pierde filo: reemplácelo por uno nuevo."
    ],
    dicaArtrelados: "¡Tenga siempre 2 o 3 descosedores de excelente marca (como Prym o Clover) en su mesa y cámbielos apenas note que el filo perdió suavidad! Un descosedor gastado es la causa número uno de agujeros accidentales.",
    voceSabia: "¡La bolita roja del descosedor fue diseñada para correr por dentro de las costuras sin pinchar la tela exterior!",
    practicalExercise: "En un retazo bordado, practique cortar los hilos de la canilla en el revés con la bolita apoyada en la entretela y retire el hilo frontal con cinta de enmascarar.",
    quickSummary: "Herramienta manual afilada con bola de seguridad indispensable para descoser y abrir ojales con rapidez y seguridad.",
    relatedTerms: [
      "Pinza de Precisión de Bordado",
      "Tijera Pelícano",
      "Acabado y Limpieza de Bordado"
    ]
  },

  // A-006
  "a-088-absorcao-termica-de-entretela-termocolante": {
    term: "Absorción Térmica de Entretela Termoadhesiva (Fusible Interfacing Thermal Absorption)",
    level: "Intermedio 🟡",
    category: "Entretelas y Estabilizadores",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín absorptio y del griego therme (calor). Principio termodinámico de adhesión textil mediante polímeros termoplásticos.",
    summary: "Tiempo, presión y temperatura ideales para la fusión de la resina adhesiva de la entretela en la tela sin quemar las fibras.",
    definition: "La absorción térmica de entretela termoadhesiva es la relación entre temperatura, tiempo de contacto y presión mecánica necesarios para que los micropuntos de resina adhesiva se fundan y penetren de forma homogénea en el tejido.",
    technicalDetails: "El rango óptimo de fusión de las entretelas termoadhesivas de bordado oscila entre 120°C y 145°C, con presión de 2 a 3 bar y tiempo de contacto de 10 a 15 segundos.",
    beginnerExplanation: "Es la combinación justa de calor, tiempo y fuerza al planchar para que el pegamento de la entretela se derrita y se pegue al revés de la prenda sin quemarla ni soltarse durante el bordado.",
    construction: [
      "Sustrato no tejido de fibras de viscosa o poliéster",
      "Puntos de resina adhesiva termoplástica",
      "Plancha térmica con control de temperatura y presión",
      "Lámina de teflón protectora"
    ],
    howItWorks: [
      "1. Se coloca la cara resinada de la entretela contra el revés de la tela.",
      "2. Se aplica calor y presión vertical continua durante 12 segundos.",
      "3. La resina se funde penetrando en las fibras del tejido.",
      "4. Se deja enfriar completamente para que solidifique la unión."
    ],
    mainTypes: [
      "Entretela Termoadhesiva Ligera (blusas y tejidos delicados)",
      "Entretela Termoadhesiva de Malla Elástica (tejidos con spandex)",
      "Entretela Termoadhesiva Pesada (gorras y cuellos estructurados)"
    ],
    advantages: [
      "✔ Estabilización total sin arrugas ni desplazamientos en el bastidor",
      "✔ Elimina el uso excesivo de spray adhesivo",
      "✔ Acabado plano y profesional en tejidos finos"
    ],
    limitations: [
      "No debe usarse en telas sensibles al calor como terciopelo o cueros sintéticos."
    ],
    commonErrors: [
      "❌ Deslizar la plancha de lado a lado deformando la tela caliente.",
      "❌ Retirar el tejido de la plancha antes de que se enfríe la resina.",
      "❌ Usar temperatura insuficiente que provoca que se despegue al bordar."
    ],
    troubleshootingTips: [
      "Si la entretela se despega en los bordes: aumente 5°C la temperatura y mantenga la presión 3 segundos más.",
      "Si la tela queda acartonada: elija una entretela con menor gramaje de resina."
    ],
    dicaArtrelados: "¡Nunca deslice la plancha sobre la entretela termoadhesiva! Apoye la plancha hacia abajo firmemente durante 10 a 12 segundos, levántela y apóyela en el sector siguiente. Si la desliza, deformará la trama del tejido.",
    voceSabia: "¡La resina de la entretela termoadhesiva necesita enfriarse por completo durante 2 minutos antes de bordar para alcanzar el 100% de su fuerza adhesiva!",
    practicalExercise: "Pegue una muestra de entretela termoadhesiva en un retazo. Déjelo enfriar e intente despegar una esquina: si la tela y la entretela se resisten como una sola pieza, la temperatura fue perfecta.",
    quickSummary: "Calibración precisa de calor, presión y tiempo para fundir entretelas termoadhesivas con adherencia firme y sin deformar la tela.",
    relatedTerms: [
      "Entretela Termoadhesiva",
      "Estabilizadores de Bordado",
      "Plancha Térmica"
    ]
  },

  // A-007
  "a-012-acabamento-de-bordado": {
    term: "Acabado y Limpieza de Bordado (Trimming & Finishing)",
    level: "Fundamental 🟢",
    category: "Acabado y Finalización",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín ad-caput (llevar a término) y del francés nettoyer (limpiar). Fase de control de calidad y presentación final de la prenda.",
    summary: "Secuencia de corte de hilos sueltos, retiro de entretela, vaporizado y planchado para dejar la prenda impecable para su entrega.",
    definition: "El acabado y limpieza de bordado comprende todos los procedimientos manuales y térmicos realizados tras retirar el bastidor: corte de saltos de hilo, desprendimiento de entretelas, sellado de revés y remoción de marcas de bastidor (hoop burn).",
    technicalDetails: "Incluye el corte al ras de saltos de hilo menores a 1 mm con tijera pelícano o pinza curva, y la termofijación de entretela de protección suave (Cloud Cover / Tender Touch) en el revés de prendas infantiles.",
    beginnerExplanation: "Es el paso en el que dejamos el bordado impecable: cortamos todos los hilitos sobrantes, sacamos la entretela que sobra, planchamos con vapor para borrar la marca del bastidor y doblamos la prenda para entregarla como de fábrica.",
    construction: [
      "Tijera curva o pelícano de corte al ras",
      "Pinza de precisión para hilos",
      "Plancha a vapor vertical",
      "Entretela suave de sellado térmico para el revés"
    ],
    howItWorks: [
      "1. Se retira la prenda del bastidor y se corta el excedente de entretela en el revés.",
      "2. Se recortan los saltos de hilo y colas en el frente y revés.",
      "3. Se aplica vapor suave para eliminar la marca de presión del bastidor.",
      "4. Se inspecciona la alineación y se empaca la prenda terminada."
    ],
    mainTypes: [
      "Acabado Estándar para Uniformes y Remeras",
      "Acabado Pediátrico Suave (con sellado térmico en revés para bebés)",
      "Acabado de Lujo para Toallas y Mantelería"
    ],
    advantages: [
      "✔ Agrega valor visual inmediato y presencia profesional a sus trabajos",
      "✔ Previene que los hilos se deshilachen con los lavados",
      "✔ Garantiza tacto ultra-suave en prendas en contacto con la piel"
    ],
    limitations: [
      "Demanda tiempo manual dedicado y tijeras con excelente filo para no pellizcar la tela."
    ],
    commonErrors: [
      "❌ Cortar los saltos de hilo demasiado al ras desarmando los nudos de remate.",
      "❌ Arrancar entretelas de corte con las manos desgarrando las puntadas.",
      "❌ Planchar directamente sobre el hilo de poliéster brillante derritiendo su lustre."
    ],
    troubleshootingTips: [
      "Para borrar la marca del bastidor (hoop burn): pulverice un rocío suave de agua tibia y aplique vapor a 5 cm de distancia.",
      "Si los hilos se deshilachan tras cortar: verifique que la matriz tenga remates automáticos de cierre."
    ],
    dicaArtrelados: "Para eliminar en segundos la marca redonda que deja el bastidor en la tela, pulverice un rocío ligero de agua con una gotita de suavizante sobre la marca y pase el vapor de la plancha a 5 cm sin apoyarla. ¡La fibra se esponja y la marca desaparece!",
    voceSabia: "¡Un acabado cuidadoso y un buen empaque duplican el valor percibido del bordado ante los ojos del cliente final!",
    practicalExercise: "Tome una prenda recién bordada, recorte con tijera pelícano los hilos sobrantes, aplique vapor sobre la marca del bastidor y examine el resultado bajo buena luz.",
    quickSummary: "Proceso final de recorte de hilos, remoción de entretela y vaporizado que transforma un bordado común en una prenda de alta costura.",
    relatedTerms: [
      "Tijera Pelícano",
      "Marca de Bastidor (Hoop Burn)",
      "Remate de Puntada (Tie-off)"
    ]
  },

  // A-008
  "a-acolchoamento-trapunto-eletronico-quilting-bastidor": {
    term: "Acolchado / Trapunto Electrónico (Trapunto & Quilting en el Bastidor)",
    level: "Avanzado 🔴",
    category: "Técnicas Especiales y Relieve",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del italiano trapunto (bordado acolchado en relieve). Técnica renacentista del siglo XIV perfeccionada en el bordado digitalizado con bastidor.",
    summary: "Técnica que combina guata, muletón o espuma interior con costuras computarizadas para generar volúmenes y relieves tridimensionales.",
    definition: "El trapunto y acolchado electrónico en el bastidor es la técnica mediante la cual se colocan capas intermedias de guata siliconada o espuma de relleno bajo la tela para crear motivos en relieve esculpido delimitados por pespuntes continuos.",
    technicalDetails: "Requiere una secuencia de tres paradas programadas (Stop): 1. Puntada guía del contorno; 2. Fijación de la guata y recorte al ras; 3. Colocación de la tela superior y bordado de pespunte o satín de cobertura.",
    beginnerExplanation: "Es la técnica para hacer que partes del bordado queden acolchonaditas y esponjosas en relieve, como en los almohadones y colchas finas, usando una capita de guata escondida por dentro.",
    construction: [
      "Tela base superior",
      "Capa intermedia de guata resinada o espuma de trapunto",
      "Entretela desprendible o soluble en el bastidor",
      "Pespunte de contorno y fondo matelassé"
    ],
    howItWorks: [
      "1. La bordadora marca la silueta del motivo sobre la entretela en el bastidor.",
      "2. Se coloca la guata y la máquina ejecuta la costura de fijación.",
      "3. La operadora recorta el exceso de guata con tijera curva.",
      "4. Se coloca la tela principal y la máquina cose el contorno creando el acolchado 3D."
    ],
    mainTypes: [
      "Trapunto Tradicional de Guata (relieve suave)",
      "Trapunto con Espuma EVA (relieve geométrico firme)",
      "Quilting en el Bastidor con Fondo Micro-stippling"
    ],
    advantages: [
      "✔ Impacto tridimensional y sensorial de altísimo valor comercial",
      "✔ No requiere máquinas especiales de acolchado",
      "✔ Acabados limpios con precisión milimétrica en el bastidor"
    ],
    limitations: [
      "Requiere recortar manualmente la guata en el bastidor con tijera pelícano."
    ],
    commonErrors: [
      "❌ Recortar la guata demasiado lejos de la costura de fijación.",
      "❌ Usar guata demasiado densa que desvíe la aguja de bordado.",
      "❌ No programar paradas automáticas (Stop) entre las fases."
    ],
    troubleshootingTips: [
      "Si el relieve queda aplastado: use guata siliconada de mayor volumen o doble capa.",
      "Si la tela hace arrugas al acolchar: fije la tela a la guata con spray temporal antes de coser."
    ],
    dicaArtrelados: "El Secreto de la Guata Resinada con Plancha Tibia: utilice siempre guata R1 (con resina termoadhesiva en una cara) y fíjela con plancha tibia en el revés de la tela antes de montar el bastidor. ¡Esto evita que la guata se mueva o forme bolsas!",
    voceSabia: "¡El trapunto nació en Sicilia en el siglo XIV para confeccionar colchas reales de boda sin peso excesivo, brindando calidez con elegancia!",
    practicalExercise: "Borde un diseño sencillo de estrella con técnica de trapunto: coloque un retazo de guata, fíjelo, recorte el borde y cubra con la tela superior para comprobar el relieve esponjoso.",
    quickSummary: "Bordado con volumen acolchado en relieve obtenido cosiendo capas de guata en el bastidor mediante paradas programadas.",
    relatedTerms: [
      "Parada Programada (Stop)",
      "Tijera Pelícano",
      "Compensación de Tirantez"
    ]
  },

  // A-009
  "a-101-acoplador-da-barra-de-agulha-reciprocador": {
    term: "Acoplador de la Barra de Aguja / Reciprocador (Needle Bar Driver / Reciprocator)",
    level: "Avanzado 🔴",
    category: "Mecánica y Mantenimiento",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín reciprocus (movimiento alternativo). Componente cinemático fundamental en cabezales multiaguja para transmitir fuerza vertical.",
    summary: "Pieza móvil del cabezal multiaguja que conecta selectivamente la biela motriz a la barra de aguja activa para accionar su subida y bajada.",
    definition: "El acoplador de barra de aguja o reciprocador es la pieza de polímero técnico o aleación de aluminio que sube y baja impulsada por la biela principal del cabezal. Al cambiar de color, conecta el perno de la aguja activa, actuando además como fusible mecánico que se parte ante un impacto violento para proteger el eje de la máquina.",
    technicalDetails: "Fabricado en polímeros como POM (poliacetal) o aleación de magnesio con tolerancia micrométrica. Debe lubricarse con grasa blanca de litio o teflón según el manual del fabricante.",
    beginnerExplanation: "Es el 'ganchito' interno del cabezal de las máquinas de varias agujas: cuando la máquina elige un color, esta pieza engancha esa aguja específica para hacerla subir y bajar, manteniéndose desconectada de las demás.",
    construction: [
      "Cuerpo central de polímero técnico con guía de biela",
      "Perno de enganche rápido para barra de aguja",
      "Ranura amortiguadora antifricción",
      "Punto de rotura controlada (fusible mecánico)"
    ],
    howItWorks: [
      "1. El motor principal rota transmitiendo movimiento alternativo a la biela.",
      "2. El mecanismo selector de color desplaza el cabezal sobre la aguja deseada.",
      "3. El reciprocador engancha el perno de la barra de aguja seleccionada.",
      "4. Transmite el impacto de bajada y subida a la aguja activa sin mover las demás."
    ],
    mainTypes: [
      "Reciprocador de Plástico Técnico (fusible en máquinas Tajima, Brother, Barudan)",
      "Reciprocador Metálico Reforzado (máquinas industriales de ultra-alta velocidad)",
      "Conjunto Doble Reciprocador / Prensatelas"
    ],
    advantages: [
      "✔ Selecciona y acciona agujas individuales en fracciones de segundo",
      "✔ Protege la máquina rompiéndose ante una colisión con el bastidor",
      "✔ Garantiza movimiento vertical rígido sin holgura lateral"
    ],
    limitations: [
      "Si la aguja choca contra el bastidor o una pieza metálica, el reciprocador se rompe y debe ser reemplazado."
    ],
    commonErrors: [
      "❌ Continuar forzando la máquina tras un choque violento con el bastidor.",
      "❌ Lubricar el reciprocador con aceites inadecuados que degradan el plástico técnico.",
      "❌ Instalar un reciprocador genérico sin la holgura micrométrica recomendada."
    ],
    troubleshootingTips: [
      "Si una aguja no baja mientras el cabezal gira: verifique si el reciprocador se partió por un golpe previo.",
      "Si se oye un chasquido seco en el cabezal: revise el estado de las guías de plástico del reciprocador."
    ],
    dicaArtrelados: "¡Bordadora prevenida nunca detiene su producción! El reciprocador cuesta una fracción del valor de una revisión técnica y es la pieza que más protege su máquina multiaguja. Tenga siempre un reciprocador de repuesto en el cajón de herramientas de su máquina.",
    voceSabia: "¡El reciprocador está diseñado intencionalmente para romperse ante un choque, evitando reparaciones de miles de dólares en el eje principal de la máquina!",
    practicalExercise: "Con la máquina apagada, mueva suavemente el cabezal selector de color y observe por las ranuras frontales cómo el reciprocador conecta y libera cada barra de aguja.",
    quickSummary: "Pieza móvil del cabezal que acciona la aguja activa en máquinas multiaguja y actúa como fusible protector ante colisiones.",
    relatedTerms: [
      "Barra de Aguja",
      "Cabezal Multiaguja",
      "Cambio Automático de Color"
    ]
  },

  // A-010
  "a-acoplador-calcador-mola-bordado-eletronico": {
    term: "Acoplador de Prensatelas con Muelle de Bordado Electrónico",
    level: "Intermedio 🟡",
    category: "Mecánica y Componentes de la Máquina / Calibración",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín copulare (acoplar) y premere (presionar). Mecanismo amortiguador sincronizado con la barra de aguja.",
    summary: "Mecanismo articulado con muelle vertical que sujeta el prensatelas de bordado y sincroniza la liberación de la tela con el pantógrafo.",
    definition: "El acoplador de prensatelas con muelle es el conjunto mecánico que sostiene y amortigua el prensatelas circular de bordado. Su resorte interno ejerce presión sobre la tela cuando la aguja penetra y sube, impidiendo que la tela se levante (flagging) y liberándola de inmediato al moverse el pantógrafo.",
    technicalDetails: "La holgura entre la base del prensatelas y la placa de aguja debe calibrarse exactamente en 1,0 mm a 1,5 mm con la aguja en su punto muerto inferior.",
    beginnerExplanation: "Es la pieza con resortito que sostiene el piecito redondo de la bordadora. Aprieta la tela en el momento exacto en que la aguja entra y sale para que la tela no salte, y se levanta apenas la aguja sube para dejar que la máquina avance.",
    construction: [
      "Varilla guía de acero con resorte helicoidal de compresión",
      "Tornillo micrométrico de fijación y altura",
      "Base anular de contacto (prensatelas circular)",
      "Tope amortiguador de goma o teflón"
    ],
    howItWorks: [
      "1. La barra de aguja desciende y acciona la bajada del prensatelas.",
      "2. El resorte comprime la tela contra la placa de aguja.",
      "3. La aguja penetra y forma la lazada sin que la tela aletee.",
      "4. El prensatelas se eleva permitiendo el desplazamiento del bastidor."
    ],
    mainTypes: [
      "Prensatelas Estándar de Aro Cerrado (para prendas planas)",
      "Prensatelas Abierto de Visibilidad (para apliques)",
      "Prensatelas con Resorte Reforzado para Gorras y Tejidos Gruesos"
    ],
    advantages: [
      "✔ Elimina por completo el aleteo de la tela (flagging)",
      "✔ Previene saltos de puntada y roturas de hilo",
      "✔ Evita marcas de aplastamiento en toallas y terciopelos"
    ],
    limitations: [
      "Si el resorte se vence o la altura queda descalibrada, el prensatelas dejará marcas o causará saltos de puntada."
    ],
    commonErrors: [
      "❌ Dejar el prensatelas demasiado bajo aplastando la felpa de toallas y velour.",
      "❌ Dejar el prensatelas demasiado alto provocando que la tela suba con la aguja.",
      "❌ No limpiar la pelusa acumulada alrededor del resorte."
    ],
    troubleshootingTips: [
      "Si el bordado salta puntadas en telas gruesas: baje ligeramente la altura del prensatelas aflojando el tornillo lateral.",
      "Si el prensatelas marca círculos blancos en la tela: elévelo 0,5 mm para reducir la compresión."
    ],
    dicaArtrelados: "La Prueba Infalible de la Tarjeta de Visita: para calibrar la altura del prensatelas de bordado en cualquier máquina, baje la aguja manualmente girando el volante hasta su punto más bajo. Deslice una tarjeta de visita común por debajo del prensatelas: debe pasar con suave resistencia (exactamente 1,0 mm de holgura). Si no entra, está muy bajo; si baila con espacio, está muy alto.",
    voceSabia: "¡El levantamiento de la tela con la aguja (flagging) es responsable del 70% de los saltos de puntada en telas elásticas!",
    practicalExercise: "Gire el volante de su bordadora con la mano hasta el punto más bajo de la aguja e introduzca una tarjeta de visita bajo el prensatelas para verificar la holgura de 1 mm.",
    quickSummary: "Mecanismo con resorte que sujeta la tela durante la formación de la puntada evitando el aleteo y saltos de hilo.",
    relatedTerms: [
      "Prensatelas de Bordado",
      "Aleteo de la Tela (Flagging)",
      "Barra de Aguja"
    ]
  }
};

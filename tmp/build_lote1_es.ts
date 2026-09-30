import * as fs from "fs";

// Load Portuguese data
const ptItems = JSON.parse(fs.readFileSync("/tmp/lote1_pt.json", "utf-8"));

// Master dictionary of the 30 items
const esMap: Record<string, any> = {
  // 1. [A-001]
  "a-074-abastecimento-automatico-de-bobina-enchedor": {
    term: "Abastecimiento Automático de Bobina y Devanador Integrado (Built-in Bobbin Winder & Independent Winding Motor)",
    level: "Intermedio 🟡",
    category: "Operación de la Máquina",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín vulgar ad-bastire (proveer/abastecer) y del latín alveolus (cavidad/canilla). Desarrollado con la automatización electromecánica industrial para permitir el devanado continuo sin detener la costura principal del cabezal.",
    summary: "Dispositivo auxiliar motorizado incorporado en la bordadora diseñado para devanar hilo de canilla de forma continua e independiente durante el bordado.",
    definition: "El sistema de abastecimiento automático de bobina y devanador integrado es el mecanismo electromecánico accionado por un motor eléctrico independiente (o embrague mecánico en máquinas domésticas) que permite devanar y cargar canillas de hilo inferior simultáneamente mientras la máquina borda a máxima velocidad. Evita paradas forzadas de producción al garantizar un stock constante de bobinas cargadas con tensión uniforme.",
    technicalDetails: "Opera con un sensor óptico o palanca de tope mecánico que desacopla la rotación al alcanzar el 90-95% de la capacidad de la canilla. La tensión de devanado debe regularse rigurosamente entre 18g y 22g para evitar que el hilo de poliéster 60wt o 80wt se estire elásticamente durante el llenado.",
    beginnerExplanation: "Es el devanador inteligente de su bordadora: mientras la máquina trabaja bordando una prenda, este motorcito paralelo va llenando las canillas con hilo blanco por separado. ¡Así nunca se queda sin canillas listas y no pierde ni un solo minuto de trabajo!",
    construction: [
      "Motor devanador independiente de accionamiento continuo",
      "Eje de fijación con resorte de expansión para canilla estándar (tipo L o M)",
      "Poste guía con disco de pre-tensión regulable",
      "Palanca limitadora de llenado con sensor de parada automática"
    ],
    howItWorks: [
      "1. Se coloca una canilla vacía en el eje del devanador y se pasa el hilo inferior por el tensor auxiliar.",
      "2. Se dan 3 o 4 vueltas manuales en la canilla y se activa el interruptor del devanador.",
      "3. El motor bobina el hilo a velocidad constante mientras la máquina borda la prenda principal.",
      "4. Al completarse la carga, el sensor desactiva el motor automáticamente sin derramar hilo."
    ],
    mainTypes: [
      "Devanador Integrado de Motor Independiente (en máquinas industriales multiaguja)",
      "Devanador Superior con Embrague de Volante (en máquinas domésticas)",
      "Estación Devanadora Externa de Alta Velocidad (de 2 a 4 puestos para grandes talleres)"
    ],
    advantages: [
      "✔ Cero tiempo muerto: llena canillas mientras la bordadora produce sin parar",
      "✔ Tensión de bobinado homogénea y constante de la primera a la última vuelta",
      "✔ Evita atascos por bobinas desparejas o sobrellenadas",
      "✔ Duplica la productividad diaria del taller"
    ],
    limitations: [
      "Requiere calibrar periódicamente el disco de tensión auxiliar para evitar que el hilo se bobine demasiado apretado o fofo."
    ],
    commonErrors: [
      "❌ Llenar la canilla en exceso hasta que roce contra las paredes de la caja de bobina.",
      "❌ Bobinar hilo inferior con tensión descalibrada, causando bucles y fruncidos en el revés.",
      "❌ Utilizar hilo de mala calidad con pelusa excesiva en el devanador."
    ],
    troubleshootingTips: [
      "Si la canilla queda blanda y esponjosa: apriete ligeramente la tuerca del tensor auxiliar del devanador.",
      "Si la máquina se detiene al devanar: verifique que no haya restos de hilo enrollados debajo del eje metálico."
    ],
    dicaArtrelados: "¡Regla de oro del taller Artrelados: antes de iniciar la jornada de bordado, devane una tanda de 10 canillas y guárdelas en un organizador cerrado libre de polvo! Trabajar con canillas listas evita pausas imprevistas y garantiza que todas las prendas tengan exactamente la misma tensión en el revés.",
    voceSabia: "¡Una canilla de tamaño estándar L contiene aproximadamente entre 100 y 130 metros de hilo continuo de poliéster 60wt, lo que rinde entre 25.000 y 40.000 puntadas de bordado!",
    practicalExercise: "Devane una canilla en su máquina y presiónela suavemente entre el pulgar y el índice: debe sentirse firme como una goma de borrar, sin ceder como una esponja ni estar dura como una piedra.",
    quickSummary: "Mecanismo que llena canillas con hilo inferior de forma continua y simultánea durante el bordado, garantizando tensión constante y máxima productividad.",
    relatedTerms: [
      "Canilla / Bobina Inferior",
      "Caja de Bobina (Portacanilla)",
      "Tensión de Hilo Inferior",
      "Hilo de Bobina 60wt / 80wt"
    ]
  },

  // 2. [A-002]
  "a-017-abertura-de-campo-de-bordado": {
    term: "Abertura de Campo de Bordado (Hoop Clearance & Border Margin)",
    level: "Fundamental 🟢",
    category: "Operación de la Máquina",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín apertura (espacio libre, paso despejado) y campus (superficie plana o campo). Concepto de cinemática industrial para despejar ejes mecánicos en movimiento.",
    summary: "Margen de tolerancia y espacio libre alrededor de la máquina y del bastidor necesario para el desplazamiento fluido del pantógrafo durante el bordado.",
    definition: "La abertura de campo de bordado (o tolerancia libre de movimiento del pantógrafo / pantograph clearance) es la distancia física libre de obstáculos que debe mantenerse en todo el perímetro de la máquina bordadora, de la mesa de apoyo y del brazo libre. Garantiza que el bastidor acoplado se desplace libremente en sus recorridos máximos en los ejes X e Y sin colisionar con paredes, conos de hilo, muebles, herramientas ni pliegues de prendas voluminosas.",
    technicalDetails: "Exige una distancia mínima de 30 cm a 50 cm de espacio despejado detrás y a los lados de la máquina de bordar. El exceso de tela de la prenda bordada debe enrollarse y sujetarse con pinzas para no caer debajo del brazo de la máquina ni trabarse en la mesa.",
    beginnerExplanation: "Es el espacio libre que su máquina necesita tener a su alrededor en la mesa para que el bastidor pueda moverse hacia adelante, hacia atrás y hacia los lados libremente sin chocar contra la pared, la tijera o bultos de tela.",
    construction: [
      "Mesa de trabajo nivelada con radio de giro despejado",
      "Área perimétrica de seguridad en ejes X e Y",
      "Pinzas y clips de sujeción para tela excedente",
      "Guías de soporte de bastidor antivibración"
    ],
    howItWorks: [
      "1. La máquina se ubica en una mesa firme y nivelada con margen libre en laterales y parte posterior.",
      "2. La operadora acopla el bastidor y realiza el recorrido de prueba (Trace / Traza de contorno).",
      "3. La tela sobrante de la prenda se enrolla y fija con pinzas de bastidor.",
      "4. El pantógrafo se mueve suavemente por toda el área sin resistencia de peso ni rozamiento.",
      "5. Los motores paso a paso operan con torque nominal sin desalinearse ni perder coordenadas."
    ],
    mainTypes: [
      "Abertura Perimétrica de Mesa (despeje de muebles y accesorios)",
      "Margen Interior de Seguridad del Bastidor (distancia de 1.5 cm del aro al borde del dibujo)",
      "Espacio Inferior de Brazo Libre (despeje de prendas tubulares)"
    ],
    advantages: [
      "✔ Previene colisiones violentas que doblan los brazos del pantógrafo",
      "✔ Evita pérdida de pasos en los motores y desfasajes en el contorno",
      "✔ Garantiza libertad total de movimiento para bastidores gigantes de 20x30 cm o más",
      "✔ Protege la tela contra manchas de grasa o roces con piezas mecánicas"
    ],
    limitations: [
      "En talleres pequeños con poco espacio, colocar máquinas pegadas a la pared reduce el campo útil y causa bloqueos."
    ],
    commonErrors: [
      "❌ Dejar tijeras, reglas o tazas cerca del bastidor mientras la máquina borda a 1.000 PPM.",
      "❌ Permitir que una toalla pesada o colcha cuelgue hacia abajo frenando el motor X/Y por peso.",
      "❌ Programar un diseño que supere el límite físico del bastidor sin respetar el margen de seguridad."
    ],
    troubleshootingTips: [
      "Si el bastidor golpea un objeto durante el bordado: detenga la máquina de inmediato, apague y encienda para resetear las coordenadas de origen y verifique el calado del pantógrafo.",
      "Si el diseño se desfasa lateralmente: compruebe si la tela enganchó en la parte trasera de la bancada."
    ],
    dicaArtrelados: "¡Regla de oro del taller Artrelados: la mesa de bordar es sagrada! Jamás deje tijeras, bolígrafos, celulares ni vasos cerca del recorrido del bastidor. ¡Un solo impacto del bastidor contra un objeto desalinea todo el bordado y descalibra los motores de la máquina!",
    voceSabia: "¡A 1.000 puntadas por minuto, el pantógrafo cambia de dirección decenas de veces por segundo! La inercia generada es tan alta que una colisión puede doblar brazos de acero de 3 mm en una fracción de segundo.",
    practicalExercise: "Antes de pulsar 'Start' en un bordado grande, realice siempre la función 'TRACE' (recorrido de contorno) en la pantalla de su máquina mientras observa con atención si el bastidor roza en alguna pared, cable o accesorio de la mesa.",
    quickSummary: "Espacio físico despejado indispensable alrededor de la bordadora para que el bastidor se mueva libremente sin colisiones ni desalineaciones de diseño.",
    relatedTerms: [
      "Pantógrafo",
      "Bastidor de Bordado",
      "Función Traza (Trace)",
      "Motores Paso a Paso (Stepping Motors)"
    ]
  },

  // 3. [A-003]
  "a-087-abrasao-de-fio-em-ilhos-guia": {
    term: "Abrasión de Hilo en Ojal Guía (Thread Eyelet Abrasion)",
    level: "Avanzado 🔴",
    category: "Componentes y Mecánica de la Máquina",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín abrasio (raspado o desgaste mecánico) y del francés œillet (pequeño orificio pasahilos). Concepto de tribología textil y mantenimiento predictivo.",
    summary: "Desgaste y surcos cortantes generados en los pasahilos y guías cerámicas por el roce continuo del hilo de bordar a alta velocidad.",
    definition: "La abrasión de hilo en ojal guía (Thread Eyelet Abrasion / Guide Grooving) es el fenómeno físico de desgaste mecánico progresivo que ocurre en los orificios de cerámica, porcelana o acero templado de los pasadores de hilo. La fricción constante de miles de metros de hilo de poliéster o metálico a más de 800 PPM talla micro-ranuras filosas en los guías, que comienzan a deshilachar y cortar el hilo de manera imprevista.",
    technicalDetails: "Las fibras sintéticas de poliéster incorporan dióxido de titanio (TiO2) como agente mateante, un mineral con dureza Mohs 6.0 (superior a muchos aceros estándar). En contacto continuo bajo tensión, actúa como una sierra microscópica, creando rebarbas y hendiduras cortantes en los ojales que provocan roturas repetitivas inexplicables.",
    beginnerExplanation: "Cuando el hilo corre a toda velocidad todo el día por los agujeritos de metal o cerámica de la máquina, actúa como una cuerdita que raspa una piedra y termina cortando una pequeña hendidura afilada. Esa hendidura empieza a morder y cortar el hilo del bordado sin que usted entienda qué está pasando.",
    construction: [
      "Ojal cerámico de alúmina sinterizada de alta pureza",
      "Guía-hilo de acero templado con cromado duro",
      "Punto de deflexión y contacto continuo del hilo",
      "Soporte antivibración del pasahilos"
    ],
    howItWorks: [
      "1. El hilo corre bajo tensión a través de los ojales y pasadores del cabezal.",
      "2. Las partículas microscópicas del hilo desgastan gradualmente la superficie del orificio.",
      "3. Se forma una ranura milimétrica afilada en el punto de mayor fricción.",
      "4. El hilo se introduce en la ranura, se atora y se rompe por cizallamiento."
    ],
    mainTypes: [
      "Abrasión en Ojal Cerámico Superior (árbol de hilos)",
      "Abrasión en Guía de Barra de Aguja",
      "Abrasión en Muelle Tirahilos (Check Spring)"
    ],
    advantages: [
      "✔ Diagnóstico certero que resuelve roturas crónicas de hilo",
      "✔ Prolonga la vida útil de los cabezales mediante mantenimiento preventivo",
      "✔ Garantiza paso fluido de hilos sensibles y metálicos",
      "✔ Reduce tiempos de inactividad técnica en la producción"
    ],
    limitations: [
      "Las micro-ranuras suelen ser invisibles a simple vista y requieren inspección táctil o con lente de aumento."
    ],
    commonErrors: [
      "❌ Apretar los tensores cuando el hilo se corta en vez de revisar los ojales.",
      "❌ Continuar bordando con guías cerámicas astilladas o agrietadas.",
      "❌ Limpiar pasahilos con alambres o lijas gruesas que rayan la superficie interna."
    ],
    troubleshootingTips: [
      "Si el hilo se corta siempre en la misma aguja: pase un trozo de media de nylon por el interior del ojal tirando hacia los lados; si se engancha, el ojal tiene una ranura cortante.",
      "Si el ojal cerámico tiene surco: gírelo para presentar una zona intacta o cámbielo de inmediato."
    ],
    dicaArtrelados: "¡El truco de la media de nylon: pase un pedacito de media fina de mujer por dentro de todos los guías y agujeros por donde corre el hilo! Si la media se engancha o saca hilos en algún punto, ¡encontró con exactitud matemática el lugar donde su hilo se estaba cortando!",
    voceSabia: "¡El dióxido de titanio presente en los hilos opacos de poliéster para dar color es el mismo mineral utilizado en bloqueadores solares y pinturas de pared para brindar blancura y opacidad!",
    practicalExercise: "Tome una lupa o la cámara con zoom de su teléfono y examine con buena luz los ojales pasahilos de la aguja que más utiliza. Busque pequeñas ranuras brillantes o muescas cortantes.",
    quickSummary: "Desgaste abrasivo provocado por la fricción del hilo en los ojales de la máquina, que crea muescas filosas causantes de roturas continuas de hilo.",
    relatedTerms: [
      "Pasahilos / Guía-Hilo",
      "Muelle Tirahilos (Check Spring)",
      "Rotura de Hilo (Thread Break)",
      "Mantenimiento Preventivo"
    ]
  },

  // 4. [A-004]
  "a-068-abrasao-de-linha": {
    term: "Abrasión de Hilo (Friction Wear / Desgaste Mecánico del Hilo)",
    level: "Fundamental 🟢",
    category: "Agujas y Hilos",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín abrasio y filum (hilo continuo). Análisis físico del deterioro mecánico de las fibras textiles sometidas a fricción en máquinas automáticas.",
    summary: "Deterioro mecánico y térmico que sufren los filamentos del hilo de bordar al pasar a alta velocidad bajo tensión por guías, ojo de la aguja y tela.",
    definition: "La abrasión de hilo (Friction Wear / Thread Fraying) es el proceso de degradación estructural y calentamiento que experimenta la hebra de bordado por el frotamiento reiterado contra los pasadores metálicos, el ojo de la aguja y la densidad del tejido antes de fijarse en la puntada. Si el roce supera la resistencia del hilo, las microfibras exteriores se desprenden formando una bola de pelusa (birdnest) que obstruye el ojo de la aguja y corta el hilo.",
    technicalDetails: "En una puntada de satín estándar, el mismo segmento de hilo puede atravesar el ojo de la aguja de 20 a 40 veces antes de asentarse definitivamente en la tela. Por eso, el uso de agujas con ojo pulido y lubricación de silicona en hilos de poliéster trilobal es indispensable para reducir el coeficiente de fricción a más de 800 PPM.",
    beginnerExplanation: "Antes de que cada puntada quede cosida en la ropa, el hilo pasa y repasa varias veces por el agujerito de la aguja a toda velocidad. Si la aguja es muy pequeña o el hilo roza contra piezas ásperas, se va deshilachando como una cuerda vieja hasta que se corta.",
    construction: [
      "Filamento central de alta tenacidad",
      "Retorcido de cabos (2 a 3 hebras de poliéster trilobal o rayón)",
      "Capa exterior de lubricante antiestático y siliconado",
      "Ojo pulido de la aguja de bordado"
    ],
    howItWorks: [
      "1. El hilo avanza y retrocede velozmente a través del ojo de la aguja durante la formación de la lazada.",
      "2. La fricción genera calor acumulado y microabrasión superficial.",
      "3. Los filamentos exteriores se cortan y forman un abultamiento deshilachado.",
      "4. El abultamiento choca contra el ojo de la aguja y bloquea el paso de la hebra."
    ],
    mainTypes: [
      "Abrasión Térmica (fundición de microfilamentos por calor de aguja desafilada)",
      "Abrasión Mecánica por Ojo de Aguja Estrecho (uso de aguja 65/9 con hilo 40wt)",
      "Abrasión por Tejido Abrasivo (lona, cuero sintético o mezclilla rígida)"
    ],
    advantages: [
      "✔ Comprensión clave para evitar el 90% de las roturas de hilo en el taller",
      "✔ Selección correcta del número de aguja según el grosor del hilo",
      "✔ Acabado satín suave y brillante sin pelusa superficial",
      "✔ Mayor durabilidad de las prendas bordadas en lavados industriales"
    ],
    limitations: [
      "Los hilos metálicos y de rayón son 3 veces más propensos a la abrasión que el poliéster trilobal."
    ],
    commonErrors: [
      "❌ Usar hilo grueso (30wt o 40wt) con aguja demasiado fina (65/9 o 70/10).",
      "❌ Bordar telas gruesas sin cambiar la aguja durante días enteros.",
      "❌ Mantener tensiones excesivas que aumentan exponencialmente la fricción en el ojo."
    ],
    troubleshootingTips: [
      "Si el hilo se deshilacha formando motitas de algodón antes de cortarse: cambie la aguja a un número mayor (ej. pase de 75/11 a 80/12) para que el ojo sea más amplio.",
      "Si borda con hilo metálico: utilice siempre aguja especial 'Metallic' con ojo alargado de teflón."
    ],
    dicaArtrelados: "¡Si nota que el hilo se corta despeluchándose como algodón dulce, pase un hilo de algodón común por el ojo de la aguja y frote hacia los lados: si se traba o corta, el ojo tiene rebarba interna! Reemplace la aguja inmediatamente y el problema desaparecerá por arte de magia.",
    voceSabia: "¡A 1.000 PPM, la aguja puede alcanzar temperaturas de más de 180°C por la fricción contra la tela! Esa temperatura basta para fundir filamentos de poliéster si la aguja no está adecuadamente cromada o tratada con titanio.",
    practicalExercise: "Enhebre una aguja 75/11 con hilo de poliéster 40wt y sostenga el hilo con las manos inclinado a 45 grados: la aguja debe deslizarse libremente hacia abajo por su propio peso. Si se queda trabada, el ojo es demasiado pequeño para ese grosor de hilo.",
    quickSummary: "Desgaste del hilo provocado por el frotamiento contra la aguja y la tela, prevenible eligiendo el tamaño de aguja correcto y tensiones equilibradas.",
    relatedTerms: [
      "Aguja de Bordado Computadorizado",
      "Hilo de Poliéster 40wt",
      "Tensión de Hilo Superior",
      "Aguja Revestida de Titanio"
    ]
  },

  // 5. [A-005]
  "a-009-abridor-de-casas": {
    term: "Abridor de Ojales / Descosedor (Seam Ripper)",
    level: "Principiante 🟢",
    category: "Acabado y Finalización",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín dis-consuere (soltar costuras). Herramienta manual milenaria perfeccionada con protección de bola de seguridad a mediados del siglo XIX.",
    summary: "Herramienta manual afilada indispensable en el taller para abrir ojales limpios y retirar puntadas erróneas sin dañar la tela.",
    definition: "El abridor de ojales o descosedor (Seam Ripper) es un instrumento manual cortante compuesto por una varilla de acero templado curvada en horquilla con filo cóncavo ultra-afilado, una punta penetrante y una micro-esfera de plástico roja de protección. Esencial para retirar bordados fallidos, cortar arandelas de hilo en el revés y abrir el interior de ojales bordados.",
    technicalDetails: "La bolita roja sirve como tope de seguridad deslizante para colocar dentro del forro o tela sin perforar la prenda mientras el filo interior corta únicamente las puntadas de hilo. Su filo se desafila tras descoser bordados densos de satín o tatami, por lo que debe renovarse periódicamente.",
    beginnerExplanation: "Es el clásico descosedor con puntita afilada y bolita roja que todas las bordadoras tienen en la mesa. Sirve para cortar hilitos sobrantes, desarmar con cuidado un bordado que salió torcido y abrir el medio de los ojales sin cortar la tela de la prenda.",
    construction: [
      "Punta penetrante fina de acero endurecido",
      "Cuchilla cóncava micro-afilada interna",
      "Bola esférica protectora roja de polímero",
      "Mango ergonómico antideslizante con capuchón protector"
    ],
    howItWorks: [
      "1. Se introduce la punta fina por debajo de las puntadas de hilo en el revés de la prenda.",
      "2. La bolita de protección se apoya contra la tela para impedir que la punta rompa el tejido.",
      "3. Se empuja suavemente hacia adelante para que la cuchilla cóncava corte las hebras de hilo.",
      "4. Se retiran los hilos sueltos con una pinza de precisión o cinta adhesiva."
    ],
    mainTypes: [
      "Descosedor Estándar con Bolita Roja (para uso diario)",
      "Descosedor Quirúrgico Bisturí (para microdetalhes y calados)",
      "Descosedor Ergonómico con Lupa y Luz LED integrada"
    ],
    advantages: [
      "✔ Retira puntadas erróneas sin cortar las fibras de la tela base",
      "✔ Agiliza la apertura precisa de ojales en batas y uniformes",
      "✔ Permite cortes milimétricos en el revés sin desarmar zonas correctas",
      "✔ Bajo costo y reemplazo inmediato en cualquier mercería"
    ],
    limitations: [
      "Un descosedor desafilado exige hacer demasiada fuerza y puede resbalar, rasgando accidentalmente la prenda del cliente."
    ],
    commonErrors: [
      "❌ Descoser empujando con fuerza descontrolada hacia adelante.",
      "❌ Usar descosedores viejos y desafilados que muerden la tela en vez de cortar el hilo.",
      "❌ Cortar puntadas desde el frente de la prenda en vez de rasparlas por el revés."
    ],
    troubleshootingTips: [
      "Para descoser un bordado grande sin romper la tela: pase una afeitadora eléctrica de cabello o descosedor especial sobre el hilo blanco de la canilla en el revés; los hilos de color superiores saldrán solos por el frente.",
      "Si el descosedor pierde filo: reemplácelo de inmediato, no intente afilar la cuchilla cóncava manual."
    ],
    dicaArtrelados: "¡Tenga siempre 2 o 3 descosedores de excelente marca (como Prym o Clover) en su mesa y cámbielos apenas note que el filo perdió suavidad! Un descosedor gastado es la causa número uno de agujeros accidentales en las prendas de los clientes al descoser.",
    voceSabia: "¡La bolita roja del descosedor fue inventada para correr por dentro de las costuras de las telas sin pinchar ni rasgar el tejido exterior, actuando como patín de seguridad!",
    practicalExercise: "Tome un retazo bordado inservible y practique cortar los hilos de la canilla por el revés deslizando la bolita roja contra la entretela. Compruebe cómo los hilos frontales se liberan de un tirón suave con cinta de enmascarar.",
    quickSummary: "Instrumento manual cortante con bola de seguridad indispensable para descoser puntadas y abrir ojales con precisión milimétrica sin rasgar la tela.",
    relatedTerms: [
      "Pinza de Precisión de Bordado",
      "Tijera Pelícano",
      "Tijera Curva de Bordado",
      "Acabado y Limpieza de Bordado"
    ]
  }
};

console.log("Configured entries:", Object.keys(esMap));

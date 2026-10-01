import { Verbete } from "../../types";

export const LOTE2_PART1_ES: Record<string, Partial<Verbete>> = {
  // A-031
  "a-027-agulha-para-couro-ponta-cortante": {
    term: "Aguja para Cuero y Punta Cortante",
    level: "Avanzado 🔴",
    category: "Agujas y Hilos",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín corium (cuero) y cultellus (cuchilla cortante). Desarrollada para seccionar las fibras colágenas de pieles sin rasgar.",
    summary: "Aguja con aristas cortantes en forma de lenteja inclinada (LL) que incide el cuero limpiamente para bordados planos sin desgarro.",
    definition: "La aguja para cuero (Leather / Wedge Point LL / LR) es una herramienta de penetración cortante cuya punta no es cónica sino una microcuchilla afilada con inclinación de 45° que secciona las fibras dérmicas en lugar de apartarlas, permitiendo el paso del hilo sin sobrecargar el motor de la bordadora.",
    technicalDetails: "La punta LL (Lens Left) corta una incisión diagonal orientada hacia la izquierda, lo que asegura que las puntadas se asienten alineadas en línea recta. Requiere matrices digitalizadas con densidad reducida (espaciado mínimo de 0,45 mm a 0,55 mm) para no troquelar el material como estampilla postal.",
    beginnerExplanation: "El cuero natural o sintético no tiene trama de hilos como una remera; es una piel dura y compacta. Esta aguja tiene una micro-cuchillita en la punta que corta una ranurita milimétrica limpia para que la máquina cosa suave sin forzar el motor ni quebrar la aguja.",
    construction: [
      "Punta cortante con bisel en cuña o lenteja (LL / LR)",
      "Caña de acero reforzada contra deflexión",
      "Ojo alargado pulido al espejo",
      "Ranura profunda para protección de hilo 30wt o 40wt"
    ],
    howItWorks: [
      "1. La cuchilla penetra seccionando una ranura limpia a 45° en el cuero.",
      "2. El hilo se asienta en la hendidura sin roce excesivo.",
      "3. El garfio captura la lazada con sincronización perfecta.",
      "4. Se obtiene una costura firme y decorativa sin perforaciones circulares abiertas."
    ],
    mainTypes: [
      "Punta LL (Corte inclinado a la izquierda - estándar de bordado)",
      "Punta LR (Corte inclinado a la derecha - costuras decorativas de calzado)",
      "Punta Di (Corte en diamante de 4 aristas para cueros pesados)"
    ],
    advantages: [
      "✔ Reduce la resistencia de penetración en más de un 60%",
      "✔ Evita que la aguja se doble y choque contra el garfio rotativo",
      "✔ Costuras decorativas con alineación perfecta en tapicería y calzado"
    ],
    limitations: [
      "Nunca debe usarse en tejidos convencionales de punto o algodón porque cortaría los hilos de la trama provocando agujeros.",
      "No admite densidades de puntada excesivas."
    ],
    commonErrors: [
      "❌ Usar aguja de cuero en camisetas de algodón o toallas.",
      "❌ Programar puntadas tatami densas que perforan el cuero como una línea de puntos de corte.",
      "❌ Borde a 1.000 PPM sobrecalentando el cuero y fundiendo adhesivos sintéticos."
    ],
    troubleshootingTips: [
      "Si el cuero se corta como una línea de puntos: reduzca la densidad en el software y aumente la longitud de puntada a un mínimo de 3,0 mm.",
      "Si la aguja sale con adhesivo pegajoso: use aguja de cuero antiadherente o lubrique con aceite de silicona."
    ],
    dicaArtrelados: "¡Regla sagrada para bordar cuero natural o sintético: NUNCA use matrices comunes de remeras! El cuero exige puntadas más largas (mínimo 3,0 mm) y densidad suave. Si las puntadas quedan muy pegadas, la aguja actuará como un troquel cortador y la figura se desprenderá entera de la prenda.",
    voceSabia: "¡La inclinación de la cuchilla LL a 45 grados fue calculada por ingenieros alemanes para que la tensión de la lazada cierre la incisión del cuero ocultando el orificio de penetración!",
    practicalExercise: "Tome un retazo de cuero sintético y borde dos líneas rectas: una con aguja común de punta redonda y otra con aguja cortante LL. Observe con una lupa cómo la LL corta limpio sin abollar el material.",
    quickSummary: "Aguja con arista cortante biselada para perforar cuero y materiales sintéticos pesados sin fatigar los motores de la bordadora.",
    relatedTerms: [
      "Aguja de Bordado Computadorizado",
      "Densidad de Puntada",
      "Longitud de Puntada"
    ]
  },

  // A-032
  "a-034-agulha-para-malha-jersey-stretch": {
    term: "Aguja para Tejidos de Punto y Elásticos",
    level: "Fundamental 🟢",
    category: "Agujas y Hilos",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del inglés jersey / stretch needle. Geometría esférica creada para deslizarse entre las mallas de tejidos elastizados sin cortarlas.",
    summary: "Aguja con punta esférica calibrada y rebaje de chaflán que aparta las mallas elásticas sin perforar ni cortar filamentos de elastano o licra.",
    definition: "La aguja para tejidos de punto y elásticos (Jersey Ball Point SUK / Stretch H-S) posee una punta redondeada esférica y una sección de caña con chaflán profundo especialmente diseñado para acercar la aguja al garfio, impidiendo que telas elásticas flexibles se eleven (flagging) y generen saltos de puntada.",
    technicalDetails: "La punta SUK tiene un radio de bola medio (0,2 mm a 0,3 mm) que penetra abriendo la estructura de bucles de las mallas jersey y piqué. La versión Stretch incluye un chaflán más corto y ojo modificado para capturar la lazada en tejidos con alto porcentaje de lycra/spandex.",
    beginnerExplanation: "Las remeras, buzos y mallas tienen un tejido que estira como un elástico. Si usa una aguja común afilada, va a cortar los hilados finitos y a los días van a aparecer agujeritos en la ropa. Esta aguja tiene la punta redondeada como una micro-bolita que se desliza entre los hilos sin romperlos.",
    construction: [
      "Punta esférica redondeada (radio de bola medio SUK)",
      "Chaflán (scarf) profundo antidesfasaje de lazada",
      "Ojo pulido para paso fluido de hilo de poliéster 40wt",
      "Caña cilíndrica de absorción de flexión"
    ],
    howItWorks: [
      "1. La bolita redondeada de la punta toca la superficie del tejido de punto.",
      "2. En lugar de cortar, aparta lateralmente los lazos de hilo y elastano.",
      "3. Desciende a la placa de aguja sin romper ninguna fibra elástica.",
      "4. El chaflán profundo permite al garfio atrapar la lazada sin saltar puntadas."
    ],
    mainTypes: [
      "Punta Bola Media SUK (estándar para chombas piqué, buzos y remeras)",
      "Punta Bola Ligera SES (camisetas livianas de algodón y modal)",
      "Punta Stretch H-S (mallas de baño, calzas deportivas con lycra y ropa interior)"
    ],
    advantages: [
      "✔ Cero agujeros o 'carreras' en las remeras tras los lavados",
      "✔ Elimina los saltos de puntada en telas elásticas rebeldes",
      "✔ Bordados flexibles que acompañan el estiramiento de la prenda"
    ],
    limitations: [
      "No recomendada para tejidos planos rígidos muy densos (como popelinas o linos) donde una punta aguda perfora mejor."
    ],
    commonErrors: [
      "❌ Bordar camisetas de piqué con agujas filosas comunes (Universal o Microtex).",
      "❌ No colocar entretela de corte (Cut-away) por debajo de tejidos elásticos.",
      "❌ Tirar de la tela hacia los lados al encajar el bastidor deformando la malla."
    ],
    troubleshootingTips: [
      "Si la máquina salta puntadas en telas con lycra: instale una aguja Stretch 75/11 de chaflán profundo.",
      "Si aparecen puntitos blancos o agujeros alrededor del bordado: cambie de inmediato la aguja por una nueva punta bola SUK."
    ],
    dicaArtrelados: "¿El cliente se quejó de que su remera de piqué apareció con pequeños agujeritos alrededor del bordado después del primer lavado? ¡Eso ocurre por usar aguja común que corta las mallas! Use siempre aguja Punta de Bola SUK (Ball Point) con entretela de recorte: ¡nunca más tendrá un solo agujero!",
    voceSabia: "¡Una sola fibra de elastano cortada en una remera puede desteñir o correrse hasta 5 centímetros de longitud tras un lavado en lavarropas!",
    practicalExercise: "Tome una remera vieja de algodón y borde dos círculos de prueba: uno con aguja filosa Microtex y otro con aguja Punta de Bola SUK. Lave la remera y estire la tela: note cómo en la primera se abren microagujeros.",
    quickSummary: "Aguja esférica redondeada que aparta los bucles de tejidos elásticos y de punto sin cortar fibras, evitando saltos de puntada y roturas.",
    relatedTerms: [
      "Aguja Punta Bola",
      "Entretela de Recorte (Cut-away)",
      "Aleteo de la Tela (Flagging)"
    ]
  },

  // A-033
  "a-002-agulha-ponta-bola": {
    term: "Aguja de Punta de Bola",
    level: "Fundamental 🟢",
    category: "Agujas y Hilos",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín sphaera (bola / esfera) y acus (aguja). Estandarización técnica de radios esféricos para la industria textil del punto.",
    summary: "Aguja con extremo redondeado esférico que penetra deslizando entre las fibras sin cortarlas, esencial para remeras, piqué y polar.",
    definition: "La aguja de punta de bola es una variante técnica cuya punta cónica finaliza en una esfera calibrada (clasificada según su radio en SES fina, FFG media o SUK gruesa). Al impactar contra la tela, la esfera desvía los hilos de la urdimbre y trama sin lacerar sus fibras.",
    technicalDetails: "La punta SES (Light Ball Point) tiene un radio de 0,1 mm ideal para camisetas de algodón 100%; la punta SUK (Medium Ball Point) tiene un radio de 0,2 mm diseñada para telas elásticas gruesas, buzos de polar y ropa deportiva.",
    beginnerExplanation: "En vez de tener una punta filosa como un alfiler, la aguja punta de bola termina en una bolita microscópica redondeada. Al clavar en la tela, esquiva los hilos como una persona abriéndose paso entre la multitud sin lastimar a nadie.",
    construction: [
      "Punta esférica con micro-radio de curvatura controlado",
      "Conicidad progresiva sin aristas cortantes",
      "Ranura profunda de absorción de fricción",
      "Acabado cromado o bañado en titanio"
    ],
    howItWorks: [
      "1. La esfera de la punta contacta con el entrelazado de los hilos del tejido.",
      "2. La fuerza descendente desliza los filamentos hacia los costados.",
      "3. La aguja desciende suavemente al ojo de la placa.",
      "4. La lazada se forma limpia manteniendo la integridad estructural de la prenda."
    ],
    mainTypes: [
      "SES / Light Ball Point (Punta bola fina para camisetas comunes y camisería)",
      "SUK / Medium Ball Point (Punta bola media para buzos, polar y toallas)",
      "SKF / Heavy Ball Point (Punta bola pesada para fajas y elásticos gruesos)"
    ],
    advantages: [
      "✔ Preserva al 100% la resistencia de la tela en la zona bordada",
      "✔ Acabado suave y regular sin perforaciones agresivas",
      "✔ Estándar universal para más del 70% de las prendas de un taller"
    ],
    limitations: [
      "No apta para cueros, lonas pesadas ni tejidos técnicos rígidos de alta densidad."
    ],
    commonErrors: [
      "❌ Utilizar agujas cortantes en tejidos de punto elastizados.",
      "❌ No reemplazar la aguja cuando la bolita se desgasta o aplana.",
      "❌ Borde con calibres muy gruesos (como 90/14) en remeras de modal livianas."
    ],
    troubleshootingTips: [
      "Si la tela se frunce alrededor del bordado: verifique que esté usando aguja punta de bola SES 75/11.",
      "Si siente aspereza al tocar la punta con la uña: descarte la aguja inmediatamente."
    ],
    dicaArtrelados: "¡Tenga siempre en su taller agujas Punta de Bola SES 75/11! Son el verdadero 'caballito de batalla' para bordar remeras, bodies de bebé, toallas y buzos. Cuidan la tela del cliente y garantizan un trabajo impecable de principio a fin.",
    voceSabia: "¡La punta de bola fina SES tiene un radio de curvatura de apenas 0,1 milímetros, invisible al ojo humano sin una lupa de 20 aumentos!",
    practicalExercise: "Mire con una lupa la punta de una aguja Universal y una Punta de Bola: descubrirá la perfecta curvatura redondeada que protege las telas de sus clientes.",
    quickSummary: "Aguja esférica redondeada indispensable para bordar remeras, toallas y tejidos de punto sin romper las fibras textiles.",
    relatedTerms: [
      "Aguja de Bordado Computadorizado",
      "Aguja para Tejidos de Punto",
      "Entretela de Recorte"
    ]
  },

  // A-034
  "a-003-agulha-ponta-lanca": {
    term: "Aguja de Punta de Lanza Cortante",
    level: "Avanzado 🔴",
    category: "Agujas y Hilos",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del latín lancea (lanza) y del alemán schneidspitze (punta cortante). Geometría cortante para materiales no textiles de alta tenacidad.",
    summary: "Aguja con aristas cortantes en diamante o cuña que secciona materiales densos como cuero, vinilo y lona pesada con baja resistencia.",
    definition: "La aguja de punta de lanza o cortante (Leather Cutting Point DI / LL / LR) presenta aristas afiladas rectificadas en la caña que generan una hendidura controlada en materiales no tejidos rígidos, impidiendo el recalentamiento de la máquina y roturas de hilo.",
    technicalDetails: "La punta cortante en diamante (DI) produce cortes de 4 facetas ideales para puntadas rectas gruesas en cueros de calzado; la punta LL (Lens Left) corta incisiones diagonales suaves recomendadas para bordados ornamentales de tapicería a 600-750 PPM.",
    beginnerExplanation: "Es una aguja con la punta afilada como una lanza de cuatro lados. No se usa en remeras comunes, sino para bordar cueros duros, mochilas de lona o asientos de autos donde una aguja normal rebotaría o se doblaría.",
    construction: [
      "Sección cortante en lanza o diamante (DI / LL)",
      "Aristas de corte micro-pulidas",
      "Caña rígida con resistencia superior a la deflexión",
      "Ranura profunda para hilos gruesos de torzal"
    ],
    howItWorks: [
      "1. Las aristas afiladas perforan seccionando el material compacto.",
      "2. El corte milimétrico abre el paso para la caña y el hilo.",
      "3. El esfuerzo de perforación del motor se reduce drásticamente.",
      "4. Se asientan puntadas firmes y alineadas en el cuero."
    ],
    mainTypes: [
      "Punta Lanza en Diamante DI (para cueros pesados y correajes)",
      "Punta Cortante LL (para tapizados de autos y calzado bordado)",
      "Punta Cortante Micro-Wedge para cuero sintético y parches"
    ],
    advantages: [
      "✔ Penetra cueros gruesos y sintéticos con suavidad y precisión",
      "✔ Elimina la flexión lateral de la aguja y choques con el garfio",
      "✔ Agujeros limpios sin desgarros irregulares"
    ],
    limitations: [
      "Prohibido su uso en telas tejidas convencionales porque corta hilos estructurales.",
      "Exige digitalización con puntadas más espaciadas."
    ],
    commonErrors: [
      "❌ Colocar aguja cortante en prendas de punto arruinando la tela.",
      "❌ Borde con densidades apretadas cortando el parche de cuero en pedazos.",
      "❌ No reducir la velocidad de la máquina en cueros rígidos."
    ],
    troubleshootingTips: [
      "Si el cuero se abre a lo largo de la costura: aumente la longitud de puntada y reduzca la densidad.",
      "Si la aguja chirría al clavar: aplique un toque de lubricante de silicona textil sobre la línea de costura."
    ],
    dicaArtrelados: "Al bordar parches o cueros con aguja cortante, use siempre entretela desprendible pesada o lona de soporte por debajo. ¡Esto mantiene la base rígida y evita que el cuero se estire o deforme con los cortes de la aguja!",
    voceSabia: "¡La aguja con punta cortante en diamante genera hasta un 70% menos de calor por fricción en cuero que una aguja redonda convencional!",
    practicalExercise: "Enhebre una aguja punta de lanza con hilo calibre 30wt en un retazo de cuero vacuno: compruebe cómo la máquina perfora con un sonido limpio sin vibraciones forzadas.",
    quickSummary: "Aguja cortante en forma de lanza diseñada para atravesar cueros, lonas y sintéticos pesados con mínima resistencia mecánica.",
    relatedTerms: [
      "Aguja para Cuero",
      "Aguja de Titanio",
      "Longitud de Puntada"
    ]
  },

  // A-035
  "a-069-agulha-titanio": {
    term: "Aguja de Titanio de Larga Duración",
    level: "Fundamental 🟢",
    category: "Agujas y Hilos",
    grammarClass: "Locución sustantiva femenina.",
    origin: "Del elemento titanio (nombre derivado de los titanes de la mitología griega, sinónimo de resistencia colosal) y del alemán titannadel.",
    summary: "Aguja dorada recubierta con nitruro de titanio que resiste el desgaste por fricción, disipa el calor y dura hasta 5 veces más que las comunes.",
    definition: "La aguja de titanio para bordado computarizado es un componente de acero al que se le aplica una fina película superficial dorada de nitruro de titanio mediante evaporación al vacío (PVD). Esto le confiere una dureza superficial extraordinaria y una conductividad térmica que disipa el calor rápidamente.",
    technicalDetails: "Posee una dureza de 2.200 a 2.500 Vickers (comparada con 800-900 Vickers del cromo estándar), garantizando que el ojo y la punta mantengan su pulido intacto a velocidades de hasta 1.200 PPM sin recalentar los hilos de poliéster.",
    beginnerExplanation: "Es la famosa aguja dorada: gracias a su baño especial de titanio, no pierde el filo, no se calienta tanto y dura hasta cinco veces más tiempo que una aguja plateada normal. Es la mejor amiga del bordador para no parar la máquina a cada rato.",
    construction: [
      "Núcleo de acero de alta flexibilidad",
      "Capa externa de nitruro de titanio dorado de 2 a 3 micras",
      "Ojo expandido con pulido electrolítico",
      "Chaflán (scarf) reforzado anti-salto de lazada"
    ],
    howItWorks: [
      "1. La capa dorada disipa el calor generado por el roce continuo con la tela.",
      "2. La punta de la aguja resiste el desgaste sin perder su forma esférica o aguda.",
      "3. El hilo de poliéster corre sin quemarse ni derretirse a altas revoluciones.",
      "4. Se reducen las roturas de hilo y paradas técnicas en el taller."
    ],
    mainTypes: [
      "Titanio H-ET / 130/705 H-ET (para máquinas domésticas y semi-industriales)",
      "Titanio DBxK5-PD (para máquinas industriales multiaguja)",
      "Titanio Punta Bola SUK-PD (para grandes producciones de buzos y remeras)"
    ],
    advantages: [
      "✔ Vida útil hasta 5 veces superior a las agujas cromadas comunes",
      "✔ Previene que los hilos sintéticos se quemen o deshilachen por fricción",
      "✔ Excelente relación costo-beneficio para talleres de alta producción"
    ],
    limitations: [
      "Costo por unidad ligeramente mayor que una aguja estándar.",
      "Si sufre un golpe violento contra el aro metálico del bastidor, puede doblarse y debe ser sustituida."
    ],
    commonErrors: [
      "❌ Mantener la aguja durante meses enteros creyendo que es 'eterna'.",
      "❌ No verificar el estado del vástago tras una colisión con el bastidor.",
      "❌ Borde telas sintéticas a alta velocidad con agujas de cromo gastadas en vez de titanio."
    ],
    troubleshootingTips: [
      "Si el hilo se deshilacha a 800 PPM: reemplace la aguja por una de Titanio Gold 75/11.",
      "Si la punta dorada pierde color en la zona de fricción: es hora de cambiarla por una nueva."
    ],
    dicaArtrelados: "Para producciones en serie de uniformes, mochilas o toallas: equipe todas las barras de aguja de su máquina con agujas de Titanio Gold. ¡Notará que las máquinas trabajan mucho más serenas, no cortan hilo y pueden bordar todo el día sin interrupciones!",
    voceSabia: "¡El nitruro de titanio aplicado a estas agujas es el mismo material dorado protector con que se recubren los instrumentos de los transbordadores espaciales!",
    practicalExercise: "Coloque una aguja de titanio y una cromada en cabezales vecinos bordando el mismo diseño denso durante 4 horas. Al finalizar, toque suavemente las cañas de ambas agujas: sentirá la aguja de titanio notablemente más fría.",
    quickSummary: "Aguja con recubrimiento cerámico dorado de nitruro de titanio que minimiza la fricción, disipa el calor y multiplica la durabilidad en producciones continuas.",
    relatedTerms: [
      "Aguja de Titanio PD",
      "Abrasión de Hilo",
      "Mantenimiento Preventivo"
    ]
  },

  // A-036
  "a-072-ajuste-de-altura-do-calcador-tecidos-espessos": {
    term: "Ajuste de Altura del Prensatelas para Tejidos Gruesos",
    level: "Intermedio 🟡",
    category: "Mecánica y Componentes de la Máquina / Calibración",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín altitudo (altura) y premere (presionar). Calibración cinemática vertical para materiales de gran volumen.",
    summary: "Regulación de la holgura del prensatelas para bordar colchas, toallas afelpadas y camperas acolchadas sin aplastar el tejido ni frenar el bastidor.",
    definition: "El ajuste de altura del prensatelas para tejidos gruesos es la calibración de la posición vertical mínima y máxima de la base del prensatelas circular de bordado. Asegura que el prensatelas mantenga la tela comprimida durante la penetración de la aguja sin ejercer una presión aplastante que deje marcas de arrastre o frene el movimiento del pantógrafo.",
    technicalDetails: "En tejidos gruesos o con acolchado (polar, toallones de 500 g/m², camperas térmicas), la holgura entre la base del prensatelas y la placa debe aumentarse de 1,5 mm a 2,5 mm en el punto muerto inferior de la aguja.",
    beginnerExplanation: "Cuando borda prendas acolchonadas, toallas gorditas o camperas de abrigo, el piecito de la máquina no puede estar aplastando la tela con fuerza porque la va a dejar marcada y va a frenar el bastidor. Hay que subirle un poquito la altura para que la tela pase cómoda y suave.",
    construction: [
      "Tornillo de bloqueo de altura de la barra del prensatelas",
      "Resorte de compresión vertical",
      "Base anular circular de teflón o acero pulido",
      "Indicador milimétrico de nivel en máquinas modernas"
    ],
    howItWorks: [
      "1. Se gira el volante manual hasta que la aguja alcance su punto más bajo.",
      "2. Se afloja el tornillo regulador del prensatelas.",
      "3. Se gradúa la altura dejando una holgura de 2,0 mm sobre el material grueso.",
      "4. Se aprieta el tornillo y la máquina borda sin frenar el avance del bastidor."
    ],
    mainTypes: [
      "Ajuste Manual por Tornillo de Barra (máquinas industriales tradicionales)",
      "Regulación Electrónica por Pantalla Táctil (máquinas modernas Brother, Bernina)",
      "Prensatelas de Resorte Flotante Autocalibrable"
    ],
    advantages: [
      "✔ Elimina marcas blancas circulares de aplastamiento en toallas y terciopelos",
      "✔ Previene desfasajes de diseño por arrastre pesado del bastidor",
      "✔ Suaviza el ruido mecánico del cabezal"
    ],
    limitations: [
      "Si se sube en exceso, la tela subirá con la aguja (flagging) generando saltos de puntada."
    ],
    commonErrors: [
      "❌ Dejar el prensatelas a la altura estándar de remeras cuando se bordan toallones gruesos.",
      "❌ Elevar tanto el prensatelas que la tela elástica aletee y salte la lazada.",
      "❌ No apretar con fuerza el tornillo de fijación, descalibrándose a mitad del bordado."
    ],
    troubleshootingTips: [
      "Si el prensatelas aplasta la felpa dejando un círculo brillante: súbalo 0,5 mm a 1,0 mm aflojando el tornillo de ajuste.",
      "Si la máquina salta puntadas al subir el prensatelas: bájelo un toque hasta que roce la tela sin apretarla."
    ],
    dicaArtrelados: "Para calibrar el prensatelas en toallas gruesas o buzos de abrigo: baje la aguja hasta su punto más bajo con el volante y deslice dos tarjetas plásticas superpuestas (como tarjetas de crédito) debajo del piecito. Si pasan justas rozando sin atorarse, ¡la altura quedó calibrada a la perfección!",
    voceSabia: "¡En las máquinas industriales más avanzadas, sensores piezoeléctricos leen el grosor de la tela en tiempo real y ajustan la altura del prensatelas automáticamente en microsegundos!",
    practicalExercise: "Coloque un retazo de toalla gruesa en el bastidor, baje la aguja con la mano y compruebe si el prensatelas está aplastando la felpa. Realice el ajuste con el truco de las dos tarjetas de plástico.",
    quickSummary: "Regulación vertical del prensatelas para bordar prendas voluminosas y afelpadas sin dejar marcas de compresión ni frenar el pantógrafo.",
    relatedTerms: [
      "Prensatelas de Bordado",
      "Aleteo de la Tela (Flagging)",
      "Marca de Bastidor"
    ]
  },

  // A-037
  "a-ajuste-de-altura-para-relevo-3d-com-eva": {
    term: "Ajuste de Altura para Relieve 3D con Goma EVA",
    level: "Avanzado 🔴",
    category: "Técnicas Especiales y Relieve",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del inglés 3D puff embroidery height adjustment. Calibración cinemática para espumas de etilvinilacetato (EVA / Puffy foam).",
    summary: "Elevación milimétrica del prensatelas y holgura de barra para bordar letras con relieve 3D sobre espuma EVA sin aplastar su volumen.",
    definition: "El ajuste de altura para relieve 3D es el procedimiento mecánico que eleva la base del prensatelas de bordado entre 2,5 mm y 3,5 mm por encima de la placa de aguja para acomodar el grosor de la espuma EVA (Puffy foam de 2 mm a 3 mm). Permite que la aguja perfore la espuma sellando los bordes en satín sin aplastar el volumen tridimensional.",
    technicalDetails: "Requiere agujas de titanio con punta SES o aguda número 80/12 o 90/14, incremento de tensión superior (para forzar al hilo a cortar la espuma en los bordes) y densidad cerrada en satín (espaciado entre 0,18 mm y 0,22 mm).",
    beginnerExplanation: "Para hacer letras infladas y gorditas con relieve en gorras, ponemos una gomita EVA debajo del hilo. Si el piecito de la máquina está muy bajo, va a aplastar la goma y el relieve se arruina. Hay que levantar un poquito el prensatelas para que la espuma quede inflada y perfecta.",
    construction: [
      "Espuma de EVA especial de bordado (Puffy Foam 2 mm a 3 mm)",
      "Prensatelas regulado a 3 mm de altura libre",
      "Aguja de titanio de penetración reforzada (DBxK5 PD 80/12)",
      "Puntadas de corte perimetral en satín denso"
    ],
    howItWorks: [
      "1. Se borda un bajo-punto de contorno sobre la tela.",
      "2. Se coloca la lámina de goma EVA sobre la zona a bordar.",
      "3. La aguja penetra y el prensatelas elevado no comprime la espuma.",
      "4. El hilo satín tenso y denso perfora los extremos de la espuma troquelándola.",
      "5. Se retira el excedente de goma EVA a mano, dejando el bordado en relieve 3D perfecto."
    ],
    mainTypes: [
      "Relieve 3D Estándar en Gorras (EVA de 2,5 mm)",
      "Relieve 3D de Alta Densidad en Espalda de Chaquetas (EVA de 3 mm a 4 mm)",
      "Micro-relieve 3D para Escudos y Emblemas"
    ],
    advantages: [
      "✔ Impacto visual y relieve tridimensional idéntico al de marcas de primera línea",
      "✔ Agrega altísimo valor comercial a gorras y uniformes",
      "✔ Acabado limpio cuando el prensatelas y la densidad están bien calibrados"
    ],
    limitations: [
      "No admite fuentes tipográficas con trazos menores a 4 mm de ancho.",
      "Requiere retirar manualmente los restos pequeños de goma EVA con calor o pinza."
    ],
    commonErrors: [
      "❌ Dejar el prensatelas bajo aplastando la goma EVA y quitándole el relieve.",
      "❌ Usar densidades normales de satín que dejan asomar trocitos de goma de colores.",
      "❌ Borde letras con esquinas abiertas sin puntadas de remate de sellado."
    ],
    troubleshootingTips: [
      "Si la goma EVA asoma entre las puntadas de satín: aumente la densidad en el software (reduzca el espaciado a 0,20 mm) y use goma EVA del mismo color del hilo.",
      "Para retirar pequeñas pelusas de goma sobrante: pase un secador de pelo con aire caliente o pistola térmica suave a 10 cm."
    ],
    dicaArtrelados: "¡El secreto de oro del bordado 3D con goma EVA: use siempre la espuma del mismo color exacto del hilo! Si el hilo es azul marino, use EVA azul marino; si es blanco, use EVA blanca. Así, aunque quede un micro-punto invisible, jamás se notará a los ojos del cliente.",
    voceSabia: "¡Al aplicar aire caliente con un secador sobre el bordado 3D terminado, las puntitas de goma EVA microscópicas que quedan afuera se encogen hacia adentro por el calor, dejando el bordado 100% impecable!",
    practicalExercise: "Programe una letra 'A' en satín con 0,20 mm de densidad. Eleve el prensatelas 1 mm más de lo habitual, coloque una lámina de goma EVA de 2 mm y borde a 600 PPM para comprobar el relieve esponjoso.",
    quickSummary: "Calibración vertical del prensatelas para alojar la espuma EVA y lograr bordados en relieve 3D de alto impacto en gorras y camperas.",
    relatedTerms: [
      "Bordado 3D con Goma EVA",
      "Puntada Satín (Satin Stitch)",
      "Bastidor de Gorras"
    ]
  },

  // A-038
  "a-033-ajuste-de-comprimento-de-ponto": {
    term: "Ajuste de Longitud de Puntada",
    level: "Fundamental 🟢",
    category: "Parámetros y Software",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del latín longitudo (extensión espacial) y punctum (punto de aguja). Parámetro central de la digitalización vectorial de matrices.",
    summary: "Calibración de la distancia mínima y máxima entre perforaciones de la aguja para garantizar bordados flexibles, nítidos y sin roturas de hilo.",
    definition: "El ajuste de longitud de puntada es la distancia física medida en milímetros (mm) entre dos perforaciones consecutivas de la aguja. Determina la estabilidad mecánica del diseño: puntadas demasiado cortas rompen el hilo y agujerean la tela; puntadas excesivamente largas quedan flojas y se enganchan en los lavados.",
    technicalDetails: "El estándar industrial establece una longitud mínima de puntada de 1,0 mm a 1,2 mm (para evitar acumulación de nudos) y una longitud máxima de 7,0 mm a 8,0 mm en satín (para que las hebras no queden sueltas). En puntadas tatami o pespunte continuo, la longitud media se sitúa entre 3,5 mm y 4,5 mm.",
    beginnerExplanation: "Es el largo de cada pasadita de hilo: si los puntos son demasiado cortitos y quedan todos amontonados en el mismo lugar, la aguja pica como loca, rompe la tela y hace un nudo enorme. Y si son demasiado largos como cuerdas de guitarra, se van a enganchar con todo.",
    construction: [
      "Filtro de puntadas cortas del software (Short Stitch Filter)",
      "Longitud máxima de salto en satín (Split Stitch)",
      "Paso de puntada en relleno tatami (Stitch Length)",
      "Interpolación cinemática del pantógrafo"
    ],
    howItWorks: [
      "1. El software de digitalización calcula la trayectoria del dibujo.",
      "2. El filtro automático elimina cualquier puntada menor a 1,0 mm.",
      "3. Si un salto supera los 8,0 mm, la matriz divide la puntada automáticamente.",
      "4. El pantógrafo se desplaza con suavidad garantizando una costura firme y duradera."
    ],
    mainTypes: [
      "Longitud de Pespunte Recto (Run Stitch: 2,5 mm a 3,5 mm)",
      "Longitud de Puntada Tatami / Relleno (3,8 mm a 4,5 mm)",
      "Longitud Máxima de Puntada Satín (7,0 mm a 8,5 mm)"
    ],
    advantages: [
      "✔ Previene nudos gigantes en la caja de bobina (birdnesting)",
      "✔ Elimina perforaciones continuas que agujerean la tela del cliente",
      "✔ Garantiza prendas suaves, maleables y resistentes a los lavados"
    ],
    limitations: [
      "Puntadas satín de más de 9 mm quedan muy flojas y exigen división automática (Split)."
    ],
    commonErrors: [
      "❌ Dejar puntadas de 0,3 mm o 0,5 mm en vértices agudos perforando la tela.",
      "❌ Crear líneas de satín de 12 mm sin división que se enganchan con los dedos.",
      "❌ Usar puntadas tatami muy largas en telas finas produciendo ondulaciones."
    ],
    troubleshootingTips: [
      "Si la aguja se clava y hace una bola de hilos debajo de la tela: active en el software el 'Filtro de Puntadas Cortas' eliminando todo punto menor a 1,2 mm.",
      "Si las letras grandes tienen hilos sueltos: active la opción de división de puntada (Split Stitch)."
    ],
    dicaArtrelados: "¡Active siempre en su programa de bordado el filtro para eliminar puntadas menores a 1,0 mm! Esas micropuntadas invisibles son las culpables del 80% de las roturas de aguja y de esos nudos gigantescos que traban la máquina.",
    voceSabia: "¡Una sola matriz mal digitalizada de un logotipo pequeño puede tener más de 800 micropuntadas inútiles de menos de 0,8 mm que solo sirven para cortar el hilo y romper la tela!",
    practicalExercise: "Abra un diseño en su software de digitalización, active la vista de puntadas y aplique el filtro de limpieza eliminando puntos menores a 1,0 mm: observe cómo el archivo se aligera y borda más rápido.",
    quickSummary: "Regulación milimétrica de la distancia entre puntadas que asegura costuras firmes, evita nudos en la canilla y previene agujeros en la tela.",
    relatedTerms: [
      "Filtro de Puntadas Cortas",
      "División de Puntada (Split Stitch)",
      "Puntada Tatami"
    ]
  },

  // A-039
  "a-015-ajuste-de-densidade": {
    term: "Ajuste de Densidad",
    level: "Fundamental 🟢",
    category: "Parámetros y Software",
    grammarClass: "Locución sustantiva masculino.",
    origin: "Del latín densitas (concentración de masa) y del inglés stitch pitch. Parámetro clave para regular la cobertura de hilo por milímetro.",
    summary: "Regulación de la separación entre líneas de puntadas para lograr una cobertura visual perfecta sin sobrecargar la tela de hilo.",
    definition: "El ajuste de densidad (espaciado de puntada / Pitch) es la distancia que separa dos pasadas consecutivas de hilo en columnas de satín o zonas de relleno tatami. Define la cantidad de puntadas requeridas para cubrir una superficie textil determinada.",
    technicalDetails: "En satín estándar con hilo 40wt, el espaciado ideal oscila entre 0,40 mm y 0,45 mm. En puntadas tatami, oscila entre 0,38 mm y 0,42 mm. Para hilos finos 60wt se cierra a 0,30 mm; para hilos gruesos 30wt se abre a 0,55 mm.",
    beginnerExplanation: "Es qué tan 'juntitos' o 'separaditos' quedan los hilitos del bordado. Si están muy separados, se ve el color de la tela de abajo; si están muy apretados, el bordado queda duro como una tabla de madera y puede romper la aguja. Hay que encontrar el punto justo.",
    construction: [
      "Espaciado lineal de puntadas en milímetros (mm)",
      "Densidad variable con compensación de curvas",
      "Subcapa de soporte (Underlay) para ahorro de densidad",
      "Ajuste proporcional al grosor del hilo (40wt / 60wt / 30wt)"
    ],
    howItWorks: [
      "1. El digitalizador define el espaciado entre hilos en el software.",
      "2. El motor de puntadas distribuye las líneas de satín o relleno de manera homogénea.",
      "3. La subcapa previa levanta el hilo superior para que rinda más cobertura.",
      "4. La prenda queda bordada con brillo, suavidad y flexibilidad al tacto."
    ],
    mainTypes: [
      "Densidad Estándar para Satín (0,40 mm a 0,44 mm con hilo 40wt)",
      "Densidad Fina para Microletras (0,30 mm a 0,35 mm con hilo 60wt)",
      "Densidad Abierta para Telas Delicadas o Efectos Sombreados (0,60 mm a 0,80 mm)"
    ],
    advantages: [
      "✔ Prendas suaves y flexibles que no molestan en la piel",
      "✔ Ahorro monumental de hilo y tiempo de máquina en el taller",
      "✔ Previene arrugas severas (puckering) en telas livianas"
    ],
    limitations: [
      "Una densidad excesivamente abierta dejará asomar el color de la entretela o tela de base."
    ],
    commonErrors: [
      "❌ Colocar densidad de 0,25 mm creyendo que el bordado va a quedar 'más lindo', dejándolo duro como una armadura.",
      "❌ No ajustar la densidad al cambiar de hilo 40wt a hilo fino 60wt.",
      "❌ Dejar alta densidad sin colocar subcapas de base (underlay)."
    ],
    troubleshootingTips: [
      "Si el bordado parece un cartón duro: abra el espaciado en el programa de 0,35 mm a 0,42 mm y coloque una subcapa suave en zigzag.",
      "Si la tela de fondo asoma entre el bordado: verifique que la subcapa esté activa antes de aumentar la densidad exterior."
    ],
    dicaArtrelados: "¡Menos es más en el bordado profesional! Nunca aumente la densidad de satín a lo loco para tapar la tela: active una buena subcapa (Underlay) en zigzag por debajo con densidad normal de 0,42 mm arriba. ¡Ahorrará miles de puntadas y el bordado quedará suave y flexible!",
    voceSabia: "¡Aumentar la densidad de una matriz de 0,42 mm a 0,30 mm incrementa en más de un 40% el número total de puntadas y el tiempo de máquina sin aportar ninguna mejora visual perceptible!",
    practicalExercise: "Borde dos cuadrados de satín idénticos de 3x3 cm: uno con densidad de 0,32 mm y otro con 0,42 mm con subcapa. Tóquelos con los ojos cerrados y compare la enorme diferencia de suavidad.",
    quickSummary: "Calibración de la separación entre líneas de puntadas que equilibra la cobertura visual perfecta con la suavidad y flexibilidad de la prenda.",
    relatedTerms: [
      "Puntada Satín (Satin Stitch)",
      "Puntada Tatami",
      "Subcapa de Puntadas (Underlay)"
    ]
  },

  // A-040
  "a-ajuste-de-desaceleracao-em-curvas-cornering-slowdown": {
    term: "Ajuste de Desaceleración en Curvas",
    level: "Avanzado 🔴",
    category: "Operación de la Máquina",
    grammarClass: "Locución sustantiva masculina.",
    origin: "Del inglés cornering slowdown (desaceleración en esquinas). Algoritmo de control cinemático para servomotores industriales.",
    summary: "Control automático de velocidad que frena el pantógrafo en esquinas y curvas cerradas para evitar desalineaciones y puntadas deformadas.",
    definition: "El ajuste de desaceleración en curvas (Cornering / Curve Slowdown) es la función integrada en el software y procesador de la máquina que detecta cambios bruscos de dirección angular en la matriz y reduce temporalmente la velocidad de costura (por ejemplo, de 900 PPM a 600 PPM) durante el vértice para garantizar la inercia controlada de los ejes X e Y.",
    technicalDetails: "Calcula el ángulo de deflexión vectorial: cuando el vector de desplazamiento cambia más de 60° a 90°, el controlador disminuye las revoluciones por minuto para que los motores paso a paso o servomotores no pierdan pulsos por inercia física del bastidor.",
    beginnerExplanation: "Igual que cuando maneja un auto en la ruta y frena un poco antes de doblar en una curva cerrada para no derrapar, la máquina de bordar frena automáticamente su velocidad al llegar a esquinas afiladas para que las puntas queden perfectas y no se desfasen.",
    construction: [
      "Controlador de servomotores con compensación de inercia",
      "Algoritmo de cálculo de ángulo vectorial de puntada",
      "Parámetro de velocidad mínima en esquinas configurado en pantalla",
      "Perfil de aceleración y desaceleración en rampa suave (S-Curve)"
    ],
    howItWorks: [
      "1. El procesador de la bordadora analiza las coordenadas de las próximas 10 puntadas.",
      "2. Detecta una esquina puntiaguda o curva cerrada de más de 60°.",
      "3. Reduce suavemente las PPM del cabezal antes de alcanzar el vértice.",
      "4. El pantógrafo clava la puntada con precisión milimétrica sin vibraciones.",
      "5. Retoma la velocidad crucero en las rectas siguientes."
    ],
    mainTypes: [
      "Desaceleración Automática de Software de Máquina (integrada en Tajima, Barudan, Brother)",
      "Compensación de Esquinas en Software de Digitalización (Smart Corners)",
      "Curva de Velocidad Dinámica Programable"
    ],
    advantages: [
      "✔ Vértices y esquinas puntiagudas nítidas y perfectas",
      "✔ Previene pérdidas de pasos en los motores de los ejes X e Y",
      "✔ Reduce drásticamente las roturas de hilo en ángulos cerrados"
    ],
    limitations: [
      "Puede incrementar levemente el tiempo de bordado en logotipos geométricos con muchos ángulos."
    ],
    commonErrors: [
      "❌ Desactivar la desaceleración automática para 'apurar' la producción, obteniendo vértices redondeados y desfasados.",
      "❌ Borde esquinas afiladas con bastidores gigantes pesados sin amortiguación.",
      "❌ Ignorar vibraciones ruidosas en el pantógrafo durante cambios de giro."
    ],
    troubleshootingTips: [
      "Si los picos de las estrellas o letras salen redondeados o desfasados: active en el menú de la máquina la opción 'Cornering Slowdown' o 'Reducción en Curvas'.",
      "Si el hilo se corta siempre en los vértices: active esquinas en inglete (Mitred Corners) en su software."
    ],
    dicaArtrelados: "Si las puntas de sus estrellas, escudos o letras puntiagudas están saliendo redondeadas o con el contorno corrido, ¡no es culpa de la aguja! Active la función de reducción de velocidad en esquinas en la pantalla de su máquina: las puntas quedarán afiladas como una flecha.",
    voceSabia: "¡La inercia de un bastidor pesado de 30x30 cm desplazándose a 1.000 PPM equivale a una fuerza de varios kilogramos cambiando de dirección en milésimas de segundo!",
    practicalExercise: "Borde un diseño de estrella de cinco puntas a 900 PPM sin desaceleración y luego active la función de reducción en curvas: compare con una lupa la nitidez de las puntas.",
    quickSummary: "Reducción automática de la velocidad del pantógrafo al girar en curvas y esquinas para lograr puntadas nítidas y evitar desalineaciones.",
    relatedTerms: [
      "Esquinas Inteligentes (Smart Corners)",
      "Motores Paso a Paso (Stepping Motors)",
      "Pantógrafo"
    ]
  }
};

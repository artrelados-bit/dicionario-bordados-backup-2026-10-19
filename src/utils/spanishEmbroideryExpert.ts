import { Verbete, VerbeteCategory } from "../types";
import { CATEGORY_TRANSLATIONS_ES } from "./i18n";
import { VERBETES_LETTER_A_LOTE1_ES } from "../data/verbetesLetterA_Lote1_ES";
import { VERBETES_LETTER_A_LOTE2_ES } from "../data/verbetesLetterA_Lote2_ES";
import { VERBETES_LETTER_A_LOTE3_ES } from "../data/verbetesLetterA_Lote3_ES";
import { VERBETES_LETTER_A_LOTE4_ES } from "../data/verbetesLetterA_Lote4_ES";
import { VERBETES_LETTER_B_LOTE1_ES } from "../data/verbetesLetterB_Lote1_ES";
import { VERBETES_LETTER_B_LOTE2_ES } from "../data/verbetesLetterB_Lote2_ES";
import { VERBETES_LETTER_B_LOTE3_ES } from "../data/verbetesLetterB_Lote3_ES";
import { VERBETES_LETTER_B_LOTE4_ES } from "../data/verbetesLetterB_Lote4_ES";
import { VERBETES_LETTER_B_LOTE5_ES } from "../data/verbetesLetterB_Lote5_ES";
import { VERBETES_LETTER_C_LOTE1_ES } from "../data/verbetesLetterC_Lote1_ES";
import { VERBETES_LETTER_C_LOTE2_ES } from "../data/verbetesLetterC_Lote2_ES";
import { VERBETES_LETTER_C_LOTE3_ES } from "../data/verbetesLetterC_Lote3_ES";
import { VERBETES_LETTER_C_LOTE4_ES } from "../data/verbetesLetterC_Lote4_ES";
import { VERBETES_LETTER_C_LOTE5_ES } from "../data/verbetesLetterC_Lote5_ES";
import { VERBETES_LETTER_C_LOTE6_ES } from "../data/verbetesLetterC_Lote6_ES";
import { VERBETES_LETTER_D_LOTE1_ES } from "../data/verbetesLetterD_Lote1_ES";
import { VERBETES_LETTER_D_LOTE2_ES } from "../data/verbetesLetterD_Lote2_ES";
import { VERBETES_LETTER_D_LOTE3_ES } from "../data/verbetesLetterD_Lote3_ES";
import { VERBETES_LETTER_D_LOTE4_ES } from "../data/verbetesLetterD_Lote4_ES";
import { VERBETES_LETTER_E_LOTE1_ES } from "../data/verbetesLetterE_Lote1_ES";
import { VERBETES_LETTER_E_LOTE2_ES } from "../data/verbetesLetterE_Lote2_ES";
import { VERBETES_LETTER_E_LOTE3_ES } from "../data/verbetesLetterE_Lote3_ES";
import { VERBETES_LETTER_E_LOTE4_ES } from "../data/verbetesLetterE_Lote4_ES";
import { VERBETES_LETTER_F_LOTE1_ES } from "../data/verbetesLetterF_Lote1_ES";
import { VERBETES_LETTER_F_LOTE2_ES } from "../data/verbetesLetterF_Lote2_ES";
import { CURATED_SPANISH_APPLICATIONS } from "../data/spanishApplications";

/**
 * Mapeamento de Títulos de Verbetes Traduzidos para Espanhol Especializado
 */
export const ALPHABET_TERMS_ES: Record<string, string> = {
  // Letra A
  "Agulha de Bordado Computadorizado": "Aguja de Bordado Computarizado",
  "Agulha Ponta Bola (SES / FFG / SUK)": "Aguja Punta de Bola",
  "Agulha Ponta Lança / Cortante (DI / LL)": "Aguja Punta de Lanza / Cortante",
  "Apliquê (Appliqué no Bordado Computadorizado)": "Aplique",
  "Ajuste de Tensão de Linha": "Ajuste de Tensión del Hilo",
  "Arremate (Tie-off / Lock Stitch)": "Remate",
  "Alfinetada / Ponto de Fixação (Tackdown Stitch)": "Puntada de Fijación",
  "Abertura de Bastidor (Hoop Clearance)": "Apertura del Bastidor",
  "Auto-Densidade / Densidade Automática": "Autodensidad / Densidad Automática",
  "Aparador de Fio / Trimmer Automático": "Cortahilos / Trimmer Automático",
  "Agulha Revestida com Titânio (Gold)": "Aguja Recubierta con Nitruro de Titanio",
  "Agulha Antiaderente / Teflon": "Aguja Antiadherente / Teflón",
  "Agulha Asa / Hemstitch": "Aguja Alada / Hemstitch",
  "Agulha Gêmea / Dupla": "Aguja Doble / Gemela",
  "Arame Guia-Fio": "Alambre Guiahilos",
  "Área Útil do Bastidor": "Área Útil del Bastidor",
  "Acabamento em Ponto Cheio": "Acabado en Puntada Satín",
  "Avesso Perfeito": "Revés Perfecto",

  // Letra B
  "Babador e Prendedor de Chupeta (Babetes Infantis & Acessórios no Bastidor ITH)": "Babero y Sujetachupetes",
  "Babador e Prendedor de Chupeta": "Babero y Sujetachupetes",
  "Bastidor de Bordado": "Bastidor de Bordado",
  "Bastidor Magnético": "Bastidor Magnético",
  "Bastidor de Boné (Cap Frame)": "Bastidor de Gorras",
  "Bastidor Tubular": "Bastidor Tubular",
  "Bobina / Canelinha": "Canilla / Bobina Inferior",
  "Barra de Agulha": "Barra de Aguja",
  "Bainha Aberta": "Vainica / Calado",
  "Base Cilíndrica": "Brazo Libre / Base Cilíndrica",

  // Letra C
  "Caixa de Bobina": "Caja de Bobina / Portacanilla",
  "Compensação de Encolhimento (Pull Compensation)": "Compensación de Tirantez",
  "Corte de Linha Automático": "Corte de Hilo Automático",
  "Caminho de Ponto (Pathing / Branching)": "Ruta de Puntada",
  "Calcador de Bordado": "Prensatelas de Bordado",
  "Cartela de Cores (Color Chart)": "Carta de Colores",
  "Conector de Bastidor": "Enganche / Conector de Bastidor",

  // Letra D
  "Densidade de Ponto": "Densidad de Puntada",
  "Digitalização de Matrizes (Punching / Ponchado)": "Digitalización de Diseños",
  "Desfiamento de Linha": "Deshilachado del Hilo",
  "Divisão de Ponto (Split Stitch)": "División de Puntada",
  "Direção do Ponto (Stitch Angle)": "Ángulo / Dirección de Puntada",

  // Letra E
  "Entretela Rasgável (Tear-away)": "Entretela Desprendible",
  "Entretela de Recorte (Cut-away)": "Entretela Recortable",
  "Entretela Hidrossolúvel (Wash-away)": "Entretela Hidrosoluble",
  "Entretela Termocolante": "Entretela Termoadhesiva",
  "Entretela Malha": "Entretela de Punto / Malla",
  "Estica-Fio (Take-up Lever)": "Tirahilos",
  "Espaçamento de Ponto": "Espaciado de Puntada",
  "Enrugamento do Tecido (Puckering)": "Arrugamiento / Fruncido de la Tela",

  // Letra F
  "Formato DST (Tajima)": "Formato DST",
  "Formato PES (Brother / Babylock)": "Formato PES",
  "Formato JEF (Janome)": "Formato JEF",
  "Formato EXP (Bernina / Melco)": "Formato EXP",
  "Fio de Poliéster 40wt": "Hilo de Poliéster 40wt",
  "Fio de Viscose / Rayon": "Hilo de Viscosa / Rayón",
  "Fio Metálico": "Hilo Metálico",
  "Fio de Bobina 60wt / 80wt": "Hilo de Canilla 60wt / 80wt",
  "Feltro para Bordado": "Fieltro para Bordado",

  // Letra G
  "Gabarito de Posicionamento": "Plantilla de Posicionamiento / Guía",
  "Gasto de Linha / Cálculo de Consumo": "Cálculo de Consumo de Hilo",
  "Graduação de Matriz (Resizing)": "Escalado de Matriz",
  "Garfio / Laçadeira Rotativa": "Garfio Rotativo / Lanzadera",

  // Letra L
  "Laçadeira Rotativa (Rotary Hook)": "Garfio Rotativo",
  "Laçada de Linha (Loop)": "Lazada de Hilo",
  "Linha Superior": "Hilo Superior",
  "Linha Inferior / Linha da Bobina": "Hilo Inferior / Hilo de Canilla",
  "Lubrificação da Máquina": "Lubricación de la Máquina",

  // Letra M
  "Matriz de Bordado": "Matriz / Archivo de Bordado",
  "Mecanismo de Salto (Jump Stitch)": "Mecanismo de Salto",
  "Microfibra": "Microfibra",
  "Malha Piquet": "Piqué / Tela Polo",

  // Letra P
  "Ponto Cheio (Satin Stitch)": "Puntada Satín",
  "Ponto Tatami (Fill Stitch / Preenchimento)": "Puntada Tatami / Relleno",
  "Ponto Corrido (Running Stitch)": "Puntada Recta Corrida",
  "Ponto Triplo (Triple / Bean Stitch)": "Puntada Triple",
  "Ponto de Suporte (Underlay)": "Puntada de Soporte",
  "Ponto de Cruz Computadorizado": "Punto de Cruz Computarizado",
  "Ponto Decorativo": "Puntada Decorativa",
  "Ponto E / Ponto Caseado": "Puntada Festón / Ojal",
  "Puff 3D (Bordado em Relevo com EVA)": "Bordado 3D en Relieve",
  "Parada Programada (Stop)": "Parada Programada",
  "Pressão do Calcador": "Presión del Prensatelas",

  // Letra Q
  "Quebra de Linha": "Rotura de Hilo",
  "Quebra de Agulha": "Rotura de Aguja",

  // Letra R
  "Ranhura da Agulha (Needle Groove)": "Ranura de la Aguja",
  "Relação 1/3 e 2/3 no Avesso": "Regla 1/3 y 2/3 en el Revés",
  "Relevo 3D": "Relieve 3D",
  "Resolução de Matriz": "Resolución de Matriz",

  // Letra S
  "Scarf da Agulha (Chanfro)": "Chaflán de la Aguja",
  "Sensor de Linha": "Sensor de Rotura de Hilo",
  "Simulação de Bordado": "Simulación de Bordado",
  "Sincronismo da Laçadeira (Hook Timing)": "Sincronización del Garfio",

  // Letra T
  "Tensão da Linha Superior": "Tensión del Hilo Superior",
  "Tensão da Bobina": "Tensión de la Canilla",
  "Tensiómetro Towa": "Tensiómetro Towa",
  "Termocolante Definitivo": "Termoadhesivo Definitivo",
  "Termocolante Temporário": "Termoadhesivo Temporal",
  "Troca de Cor Automática": "Cambio de Color Automático",

  // Letra V
  "Velocidade em PPM (Pontos Por Minuto)": "Velocidad en PPM",
  "Viscose / Rayon": "Viscosa / Rayón",
};

/**
 * Curadoria de Alto Nível de Verbetes Principais em Espanhol com 16 Designações
 */
export const CURATED_SPANISH_VERBETES: Record<string, Partial<Verbete>> = {
  // A-001
  "a-001-agulha-de-bordado": {
    term: "Aguja de Bordado Computarizado",
    level: "Fundamental 🟢",
    grammarClass: "Sustantivo femenino.",
    origin: "Del latín vulgar acucula (diminutivo de acus, aguja de coser) y del árabe hispánico al-burdā (tejido bordado). Desarrollada en acero templado con ranura protectora desde la invención de la primera máquina automática de bordar por Joseph Heilmann en 1828.",
    category: "Agulhas & Fios",
    summary: "Componente de alta precisión responsable de conducir el hilo superior a través del tejido para la formación perfecta de cada puntada.",
    definition: "La aguja de bordado computarizado es el componente mecánico perforante fabricado en aleación de acero cromado o titanio, diseñado específicamente para soportar el impacto continuo de hasta 1.200 perforaciones por minuto en máquinas industriales y domésticas. A diferencia de las agujas de costura convencional, la aguja de bordado cuenta con un ojo ligeramente mayor, una ranura frontal profunda para proteger el hilo de poliéster o rayón de la fricción y un chaflán (scarf) optimizado para que la punta del garfio/lanzadera capture la lazada inferior sin causar saltos de puntada.",
    technicalDetails: "El sistema estándar más utilizado en máquinas industriales multiaguja es el DBxK5 (con ojo ampliado en un 21% respecto al sistema DBx1 tradicional), mientras que las máquinas domésticas utilizan el sistema 130/705H-E. La calibración de la altura de la barra de aguja y la alineación de la ranura longitudinal (rigurosamente a 0° orientada hacia el frente) son vitales para evitar roturas de hilo y deshilachados.",
    beginnerExplanation: "La aguja de bordado es el 'bolígrafo' de acero de su máquina: perfora la tela cientos de veces por minuto llevando el hilo de color superior a encontrarse con el hilo blanco de la canilla por debajo. Cuenta con una ranura protectora especial para no dañar el hilo a alta velocidad.",
    construction: [
      "talón / cabo (vástago de fijación)",
      "tronco / caña / hoja",
      "ranura frontal profunda",
      "ojo expandido para hilo de bordar",
      "chaflán posterior (scarf / rebaje)",
      "punta (fina, punta de bola ligera o cortante)"
    ],
    howItWorks: [
      "1. Perfora el tejido conduciendo el hilo superior hasta la posición inferior máxima.",
      "2. Se eleva ligeramente para formar una lazada de hilo en el lado del chaflán (scarf).",
      "3. Permite que la punta del garfio rotativo capture la lazada y la entrelace con el hilo de la canilla.",
      "4. Regresa a la posición superior liberando la tensión para que el tirahilos ajuste la puntada."
    ],
    mainTypes: [
      "Cromada Estándar (Económica para uso diario)",
      "Recubierta con Nitruro de Titanio (Gold - alta durabilidad y menor calentamiento)",
      "Antiadherente / Teflón (para uso con adhesivos temporales y entretelas autoadhesivas)",
      "Ojo Expandido (Bordado con hilo metálico)"
    ],
    numberingSystem: [
      "65/9 (Tejidos ligerísimos y finos como seda y organza)",
      "70/10 (Tejidos finos, microfibra y satén)",
      "75/11 (Estándar universal absoluto para el 85% de los bordados)",
      "80/12 (Tejidos de peso medio a grueso, sarga y dril)",
      "90/14 (Mezclilla/jeans pesado, cuero sintético y lona)"
    ],
    advantages: [
      "✔ Formación regular de puntadas sin saltos en la lazada",
      "✔ Menor desgaste y deshilachado del hilo de poliéster",
      "✔ Reducción drástica de roturas de hilo a alta velocidad",
      "✔ Acabado visual impecable y preciso en la superficie de la prenda"
    ],
    limitations: [
      "Vida útil limitada (cambio recomendado cada 8 a 10 horas de uso continuo o 2 millones de puntadas)."
    ],
    commonErrors: [
      "❌ Mantener la misma aguja durante semanas en la máquina hasta que se rompa.",
      "❌ Insertar la aguja torcida o con el chaflán orientado hacia el lado equivocado.",
      "❌ Utilizar aguja de costura recta común (130/705H simple) en máquinas industriales."
    ],
    voceSabia: "¡Una aguja operando a 1.000 PPM perfora la tela más de 16 veces por segundo! La fricción generada alcanza temperaturas superiores a 180°C si la aguja está desgastada o sin el recubrimiento adecuado.",
    dicaArtrelados: "Pase la punta del dedo índice o una media fina por la punta de la aguja antes de iniciar un trabajo importante: si siente el más mínimo enganche, ¡deséchela de inmediato! Una punta ligeramente despuntada deshilacha telas y arruina bordados enteros.",
    recommendedSettings: {
      speedPPM: "600 a 1000 PPM",
      needleType: "DBxK5 tamaño 75/11",
      stabilizer: "Desprendible (Tear-away) o Recortable (Cut-away) según el tejido",
      threadTension: "110g a 130g de tensión en el tensiómetro mecánico"
    },
    applications: [
      "Uso universal en todas las etapas y modalidades del bordado computarizado."
    ],
    troubleshootingTips: [
      "En caso de rotura frecuente del hilo superior, verifique primero si hay rebabas en el ojo o chaflán de la aguja.",
      "Si hay puntadas saltadas puntuales, asegúrese de que la aguja no esté ligeramente doblada."
    ],
    practicalExercise: "Retire la aguja instalada en su máquina y examínela con una lupa o la cámara con zoom del teléfono. Identifique el cabo, la ranura profunda frontal y el rebaje posterior (scarf). Pase una media fina por la punta: si la media engancha un hilo, la aguja tiene rebaba y debe desecharse de inmediato.",
    quickSummary: "La aguja de bordado es la herramienta de acero de alta precisión que penetra el tejido a alta velocidad conduciendo el hilo superior para formar lazadas perfectas con la canilla.",
    imageCaption: "Esquema Técnico de la Aguja de Bordado Computarizado: Cabo, Tronco, Ranura Frontal, Chaflán y Geometría de la Punta.",
    relatedTerms: [
      "Aguja Punta de Bola (SES / FFG / SUK)",
      "Aguja Punta de Lanza / Cortante (DI / LL)",
      "Ajuste de Tensión del Hilo",
      "Garfio Rotativo (Rotary Hook)",
      "Caja de Bobina / Portacanilla"
    ]
  },

  // A-002
  "a-002-agulha-ponta-bola": {
    term: "Aguja Punta de Bola (SES / FFG / SUK)",
    level: "Fundamental 🟢",
    grammarClass: "Sustantivo femenino.",
    origin: "Del inglés ball point needle, creada en la década de 1950 con la popularización de las telas de punto circular y tejidos con elastano para evitar el corte mecánico de los filamentos durante la costura.",
    category: "Agulhas & Fios",
    summary: "Aguja con extremo suavemente redondeado diseñada para apartar la trama de tejidos elásticos y de punto sin perforar ni cortar los hilos.",
    definition: "La aguja punta de bola es un tipo especial de aguja cuyo extremo cónico no posee punta afilada, presentando en su lugar una microesfera redondeada. Su geometría fue diseñada para que, en el instante del impacto sobre la tela, la aguja se deslice entre los hilos del tejido de punto, piqué, lycra o suéter, apartando las fibras de algodón o elastano en lugar de perforarlas o cortarlas.",
    technicalDetails: "La clasificación internacional divide las puntas de bola en tres niveles: SES / FFG (Punta de Bola Ligera - más común y versátil para camisetas y piqué), SUK (Punta de Bola Media - indicada para elásticos fuertes y lycra) y SKF (Punta de Bola Gruesa - para tejidos de punto grueso). Usar aguja afilada en telas elásticas produce diminutos orificios que se hacen visibles tras los primeros lavados.",
    beginnerExplanation: "En vez de ser puntiaguda como un alfiler cortante, la aguja punta de bola tiene la punta redondeada como un bolígrafo. Al descender en la camiseta de algodón, solo aparta los hilitos hacia los lados sin cortarlos, evitando agujeros indeseados alrededor del bordado.",
    construction: [
      "punta con microesfera esférica (SES / SUK)",
      "área de transición cónica pulida",
      "ranura y ojo idénticos al estándar de bordado DBxK5"
    ],
    howItWorks: [
      "1. La punta redondeada penetra en el tejido buscando el espacio natural entre los hilos.",
      "2. Aparta lateralmente las fibras del tejido sin romper la estructura tejida.",
      "3. Permite la penetración limpia sin crear pequeños cortes ni deshilachar la tela.",
      "4. Regresa permitiendo que el tejido vuelva a su posición elástica original."
    ],
    mainTypes: [
      "SES / FFG (Punta de Bola Ligera - Uso general en tejido de punto y piqué)",
      "SUK (Punta de Bola Media - Tejidos elásticos, lycra y trajes de baño)",
      "SKF (Punta de Bola Gruesa - Prendas tejidas gruesas, suéteres y mallas abiertas)"
    ],
    advantages: [
      "✔ Previene agujeros y roturas en prendas de punto después del lavado",
      "✔ Conserva la elasticidad natural del tejido bordado",
      "✔ Proporciona una penetración suave y silenciosa en la máquina",
      "✔ Elimina el efecto de pelusas y fibras cortadas en la superficie del bordado"
    ],
    limitations: [
      "No debe utilizarse en tejidos planos muy densos (como sarga pesada, microfibra resinada o cuero), ya que puede deformar el diseño."
    ],
    commonErrors: [
      "❌ Utilizar aguja de punta afilada (Sharp / Universal) en camisetas de punto o chombas polo de piqué.",
      "❌ Confundir la punta de bola ligera (SES) con la punta de bola pesada (SUK) en tejidos muy finos."
    ],
    voceSabia: "¡Muchos clientes reclaman que el bordado 'agujereó la camiseta' después de lavarla! En el 99% de los casos, la causa fue el uso de agujas afiladas en lugar de agujas punta de bola (SES) durante la producción.",
    dicaArtrelados: "Para toda la línea de uniformes en Piqué (Camisas Polo) y camisetas 100% Algodón o Poliéster, estandarice su taller con la aguja DBxK5 SES calibre 75/11. ¡Es la garantía total de cero agujeros en la entrega al cliente!",
    applications: [
      "Camisetas de algodón, camisas polo en piqué, sudaderas, ropa deportiva, trajes de baño y ajuares de bebé."
    ],
    troubleshootingTips: [
      "Si aparecen pequeños orificios alrededor del contorno del bordado en la tela de punto, cambie de inmediato las agujas al modelo SES (Punta de Bola)."
    ],
    practicalExercise: "Borde dos muestras idénticas de una letra sobre un retazo de camiseta: una con aguja afilada (Sharp) y otra con aguja punta de bola (SES). Lave el retazo y estire la tela con las manos: observe cómo la muestra con aguja afilada abre diminutos agujeros en el contorno, mientras que la punta de bola permanece intacta.",
    quickSummary: "Aguja con extremo redondeado que se desliza entre los hilos de telas de punto y tejidos elásticos sin cortarlos, previniendo agujeros tras el lavado.",
    imageCaption: "Anatomía de la Aguja Punta de Bola (SES/SUK): la microesfera en la punta que aparta las fibras de la tela elástica sin cortar los hilos, garantizando bordados impecables y libres de orificios tras el lavado.",
    relatedTerms: [
      "Aguja de Bordado Computarizado",
      "Aguja Punta de Lanza / Cortante (DI / LL)",
      "Tipos de Tejidos",
      "Entretela de Punto / Malla"
    ]
  },

  // A-003
  "a-003-agulha-ponta-lanca": {
    term: "Aguja Punta de Lanza / Cortante (DI / LL)",
    level: "Avanzado 🔴",
    grammarClass: "Sustantivo femenino.",
    origin: "Del latín lancea (arma con astil y punta cortante). Desarrollada en la cuchillería alemana para calzado y talabartería militar a finales del siglo XIX, adaptada posteriormente a telares y máquinas de bordar automáticas.",
    category: "Agulhas & Fios",
    summary: "Aguja especial con filo cortante diseñada para perforar materiales densos y no tejidos, como cuero, vinilo y gamuza.",
    definition: "La aguja punta de lanza (también conocida como aguja cortante o de punta diamante) posee una geometría especial en el extremo donde la punta presenta microbiseles afilados en forma de hoja o diamante (DI, LL, LR). A diferencia de las agujas tradicionales que apartan los hilos, esta aguja realiza una microincisión limpia en el material para permitir el paso del hilo sin deformar el sustrato.",
    technicalDetails: "En materiales como cuero natural, cuero sintético, vinilo y napa, la aguja común sufre enorme resistencia mecánica, se calienta y produce orificios deformados por estiramiento. La aguja punta de lanza reduce hasta un 40% el esfuerzo de la barra de aguja y evita que el material se rasgue. La orientación del corte (ángulo del bisel) determina el aspecto de la puntada.",
    beginnerExplanation: "A diferencia de la aguja común que empuja hilos de tela, la aguja cortante tiene microcuchillas en la punta. Funciona como un pequeño bisturí que hace un corte limpio en el cuero o vinilo para que el hilo entre suavemente sin arrugar ni rasgar la pieza.",
    construction: [
      "punta cortante con hojas microafiladas (DI / LL)",
      "cuerpo reforzado para resistir la deflexión",
      "ranura profunda y chaflán para alta velocidad"
    ],
    howItWorks: [
      "1. La punta cortante realiza una microincisión precisa en el cuero o vinilo.",
      "2. La hoja atraviesa el material sin ejercer presión excesiva sobre la estructura.",
      "3. La lazada se forma en el revés con holgura ideal para el anclaje de la puntada."
    ],
    mainTypes: [
      "DI / Diamond Point (Punta Diamante - corte en forma de rombo)",
      "LL / Leather Left (Corte inclinado a la izquierda - crea puntadas decorativas levemente entrelazadas)",
      "DH / Heavy Leather (Para cueros gruesos y tapicería automotriz)"
    ],
    advantages: [
      "✔ Penetración sin esfuerzo en cueros sintéticos y naturales",
      "✔ Reducción del calentamiento de la aguja y fusión del vinilo",
      "✔ Puntadas perfectamente alineadas sin desgarrar la pieza"
    ],
    limitations: [
      "NUNCA debe usarse en tejidos de trama o telas de punto, pues cortará los hilos de la tela creando agujeros irreparables."
    ],
    commonErrors: [
      "❌ Usar aguja cortante con matrices de alta densidad de puntadas en cuero, transformando la costura en una 'sierra' que desprende el material.",
      "❌ Dejar la aguja cortante instalada por error y bordar camisetas de algodón."
    ],
    voceSabia: "¡Al bordar cuero con aguja cortante, la densidad de la matriz de puntadas debe reducirse entre un 20% y un 30% respecto al bordado convencional para evitar que los orificios queden demasiado juntos y corten el cuero!",
    dicaArtrelados: "Para bordar chaquetas de ecocuero o tapicería: use aguja punta de lanza 80/12 o 90/14, reduzca la densidad de la matriz a 0,45mm o 0,50mm y utilice hilo de poliéster de alta resistencia.",
    applications: [
      "Chaquetas de cuero, calzado, carteras, asientos automotrices, marroquinería y artículos de vinilo."
    ],
    troubleshootingTips: [
      "Si el cuero se rasga a lo largo de la línea de contorno, aumente el espaciado entre puntadas (reduzca la densidad) y verifique el tipo de aguja cortante."
    ],
    practicalExercise: "Tome un retazo de cuero sintético o vinilo. Borde un contorno con aguja común 75/11 y otro con aguja cortante LL 80/12. Observe cómo el orificio de la aguja cortante queda limpio y regular, sin deformar los bordes del material.",
    quickSummary: "Aguja con microcuchillas afiladas en la punta diseñada para perforar materiales densos sin trama como cuero y vinilo sin deformar la prenda.",
    imageCaption: "Anatomía de la Aguja Punta de Lanza / Cortante (DI/LL): los microbiseles afilados que ejecutan incisiones limpias en cuero, vinilo y sintéticos, y el espaciado correcto de la matriz para evitar el troquelado del material.",
    relatedTerms: [
      "Aguja de Bordado Computarizado",
      "Aguja Punta de Bola (SES / FFG / SUK)",
      "Densidad de Puntada"
    ]
  },

  // A-004
  "a-004-aplique-de-bordado": {
    term: "Aplique (Appliqué en Bordado Computarizado)",
    level: "Intermedio 🟡",
    grammarClass: "Sustantivo masculino.",
    origin: "Del francés appliquer (aplicar, superponer), consagrado en la alta costura francesa del siglo XVIII para la superposición de tejidos nobles y consolidado en el bordado industrial para ahorro de puntadas y reducción de peso.",
    category: "Pontos Básicos & Decorativos",
    summary: "Técnica que combina piezas de telas recortadas fijadas mediante puntadas de bordado para cubrir grandes áreas con alto impacto visual y bajo número de puntadas.",
    definition: "El aplique en el bordado computarizado es la técnica artesanal e industrial en la que retazos de telas (algodón, fieltro, cuero, material sintético o estampado) se fijan a la prenda principal mediante secuencias automáticas de puntadas de bordado. En lugar de rellenar una vasta superficie con decenas de miles de puntadas de hilo (Puntada Tatami / Relleno), la máquina delimita el contorno del diseño, permite la colocación de la tela y la remata con un acabado en puntada satín o festón.",
    technicalDetails: "La programación de una matriz de aplique sigue obligatoriamente tres etapas secuenciales de color (o paradas programadas de máquina - STOP): 1. Puntada de Marcado (Guía / Placement Stitch); 2. Puntada de Fijación (Tackdown Stitch); 3. Puntada de Acabado Final (Satín o Festón de 3mm a 4mm de ancho).",
    beginnerExplanation: "El aplique es la técnica de fijar un trozo de tela bonita (como una tela estampada o cuadrillé) con la silueta del dibujo y luego coser los bordes con puntada satín en la bordadora. Es fantástico porque consume muchísimo menos hilo y deja el bordado ligero y suave al tacto.",
    construction: [
      "Puntada Guía / Marcado (Placement Line)",
      "Puntada de Fijación / Hilván (Tackdown Line)",
      "Tela de superposición recortada",
      "Puntada de Acabado Final (Satin Border / Satín de Cobertura)"
    ],
    howItWorks: [
      "1. La máquina borda la Puntada de Marcado directamente sobre la entretela/tela.",
      "2. La máquina realiza una pausa automática (Stop / Parada programada).",
      "3. La operadora coloca la tela del aplique sobre la zona marcada.",
      "4. La máquina ejecuta la Puntada de Fijación (costura recta o zigzag suave).",
      "5. La operadora recorta el exceso de tela al ras de la costura (o usa tela precortada a láser).",
      "6. La máquina ejecuta la Puntada Satín final que cubre completamente el borde recortado."
    ],
    mainTypes: [
      "Aplique Tradicional (Corte manual en el bastidor con tijera pelícano o curva)",
      "Aplique Precortado a Láser / Plotter (Precisión milimétrica sin recorte manual)",
      "Aplique 3D / En Relieve (Con uso de espumas o telas acolchadas)",
      "Aplique Deshilachado / Raw Edge (Con bordes rústicos intencionalmente deshilachados)"
    ],
    advantages: [
      "✔ Ahorro colosal en tiempo de máquina y cantidad de puntadas",
      "✔ Prendas extremadamente livianas y confortables (no quedan rígidas ni pesadas)",
      "✔ Permite incorporar estampados, texturas y brillos imposibles de lograr solo con hilo",
      "✔ Altísimo valor percibido en ajuares infantiles, moda y accesorios para mascotas"
    ],
    limitations: [
      "Requiere intervención manual de la operadora para posicionar y recortar la tela si no se utilizan piezas precortadas."
    ],
    commonErrors: [
      "❌ Recortar la tela demasiado lejos de la costura de fijación, impidiendo que la puntada satín cubra el borde.",
      "❌ Utilizar tela de aplique sin entretela termoadhesiva en el revés, provocando que se deshilache dentro del satín."
    ],
    voceSabia: "¡Una matriz de aplique de un osito de 15 cm puede requerir apenas 4.000 puntadas, mientras que el mismo osito bordado totalmente en Puntada Tatami consumiría más de 35.000 puntadas!",
    dicaArtrelados: "Aplique película termoadhesiva (como papel adhesivo de doble cara o termofusible) en el revés de las telas de aplique antes de cortar. Esto duplica el cuerpo de la tela, evita al 100% que se deshilache y deja el acabado satín impecable.",
    applications: [
      "Ajuares de bebé, uniformes escolares, camisetas personalizadas, moda juvenil y cojines decorativos."
    ],
    troubleshootingTips: [
      "Si los hilos de la tela del aplique asoman fuera de la puntada satín, aumente el ancho del satín a un mínimo de 3.5mm a 4.0mm en el software."
    ],
    practicalExercise: "En su software o máquina de bordar, cargue una matriz simple de corazón en aplique. Realice el primer marcado en la entretela, coloque un retazo con termoadhesivo, deje que la máquina realice la fijación y recorte con la tijera pelícano a 1 mm de la costura. Deje que la máquina cierre el satín y compruebe la suavidad del acabado.",
    quickSummary: "Técnica de cubrir zonas del bordado con piezas de tela recortadas y contorneadas con puntada satín o festón, ahorrando miles de puntadas y aportando ligereza.",
    relatedTerms: [
      "Puntada Satín (Satin Stitch)",
      "Puntada Tatami / Relleno (Fill Stitch)",
      "Parada Programada (Stop)",
      "Tijera Pelícano"
    ]
  },

  // B-001 (Bastidor de Bordado)
  "b-001-bastidor-de-bordado": {
    term: "Bastidor de Bordado",
    level: "Fundamental 🟢",
    grammarClass: "Sustantivo masculino.",
    origin: "Del provenzal bastidor y del latín bastum (soporte o armazón estructural). Utilizado manualmente desde la Edad Media y adaptado como armazón mecánico conectado al pantógrafo en la era de la automatización textil.",
    category: "Técnicas de Bastidor",
    summary: "Accesorio mecánico esencial diseñado para sujetar y tensar uniformemente la tela y la entretela durante la ejecución del bordado.",
    definition: "El bastidor de bordado es el accesorio mecánico y estructural utilizado para sujetar, alinear y mantener la tela y el estabilizador perfectamente tensados durante todo el proceso de bordado computarizado. Su función primordial es garantizar estabilidad dimensional absoluta a la prenda textil mientras la máquina desplaza la aguja y el pantógrafo en los ejes X e Y a velocidades de hasta 1.200 puntadas por minuto, impidiendo arrugas, tiranteces y desalineaciones de contorno.",
    technicalDetails: "Constituido por dos aros o marcos concéntricos (aro interno y aro externo) con encaje de precisión accionado por tornillo moleteado, muelle de presión o imanes de neodimio de alta inducción. Se conecta mecánicamente a los brazos de tracción del pantógrafo mediante presillas de enganche rápido calibradas.",
    beginnerExplanation: "El bastidor es como el marco de un tambor: 'abraza' y sujeta la tela junto con la entretela bien estirada para que la máquina pueda clavar las puntadas sin arrugar, deformar ni fruncir la prenda.",
    quickSummary: "El bastidor es el marco que tensa y sujeta la tela firme en el pantógrafo, garantizando estabilidad y precisión para las puntadas de la máquina.",
    relatedTerms: [
      "Bastidor Magnético",
      "Bastidor de Gorras (Cap Frame)",
      "Compensación de Tirantez (Pull Compensation)",
      "Entretela Desprendible (Tear-away)"
    ]
  },

  // B-115 / Babador e Prendedor de Chupeta
  "b-babador-e-prendedor-de-chupeta-acessorios-infantis": {
    term: "Babero y Sujetachupetes (Baberos Infantiles y Accesorios en el Bastidor ITH)",
    level: "Principiante 🟢",
    grammarClass: "Locución sustantiva masculina compuesta.",
    origin: "Del francés arcaico 'bave' (baba infantil, originando el término 'babero'), conjugado con el sistema moderno de cintas salvachupetes confeccionadas en el bastidor (In The Hoop) con pinza tipo cocodrilo y broches de presión plásticos (Ritas/Kam).",
    category: "Técnicas de Bastidor",
    summary: "Guía técnica para bordar y confeccionar baberos de toalla y sujetachupetes con seguridad pediátrica, impermeabilización y tacto ultrasuave.",
    definition: "El Babero y Sujetachupetes (Baberos Pediátricos / Baby Bibs & Pacifier Clips ITH / Accesorios Infantiles de Alimentación Bordados) comprende la metodología de bordado y confección en el bastidor de piezas utilitarias destinadas a la primera infancia. El proceso engloba la selección de tejidos hipoalergénicos (tela de toalla 100% algodón, piqué nido de abeja, popelina y capa interna impermeable de plástico siliconado o nylon resinado), bordados con puntadas suaves y remates reforzados antideshilachado que resistan decenas de lavados diarios en agua caliente, además de la confección de tiras con broches de presión seguros para evitar desprendimientos o asfixias.",
    technicalDetails: "Al confeccionar baberos y sujetachupetes en la máquina de bordar, el digitalizador y la bordadora deben respetar 4 normas técnicas esenciales: 1) Densidad Reducida: satín entre 0,42 mm y 0,46 mm para no crear una 'placa dura' en el pecho del bebé que cause fricción en la barbilla; 2) Capa Impermeable Interna: el plástico impermeable debe fijarse tras el bordado del motivo principal o en técnica sándwich para no perforarse excesivamente con la aguja; 3) Hilos de Poliéster Trilobal 100% con Certificación OEKO-TEX: exentos de metales pesados y tintes tóxicos, soportando saliva y lavado con blanqueadores oxigenados; y 4) Remate de Cintas (Box X-Stitch): la cinta de falla/gorgurán del sujetachupetes exige costura en 'X' dentro de un recuadro con puntada triple, soportando hasta 10 kgf de tracción mecánica según normas de seguridad infantil (NBR/EN).",
    beginnerExplanation: "¡Es la pieza más vendida para baby showers y ajuares! Un babero suave con el nombre del bebé bordado y el sujetachupetes a juego. El gran secreto es que el bordado no puede quedar rígido ni raspar el cuellito del niño. Usamos telas suaves como toalla de algodón por fuera, un plástico impermeable oculto por dentro para que las papillas no mojen la ropa, y un protector suave en el revés para no irritar la piel sensible.",
    howItWorks: [
      "1. Se monta entretela desprendible de 60 g/m² en el bastidor y se borda la línea guía con la silueta del babero.",
      "2. Se posiciona el tejido de toalla o piqué sobre la entretela con adhesivo temporal o cinta adhesiva.",
      "3. La máquina borda el monograma o dibujo infantil con hilo de poliéster suave y aguja 70/10 punta de bola.",
      "4. Se añade la capa impermeable interna y la tela de forro trasera con parada programada.",
      "5. La máquina ejecuta la costura de unión perimetral dejando una pequeña abertura para dar la vuelta a la pieza.",
      "6. Se extrae del bastidor, se da la vuelta a la prenda, se cierra con puntada invisible o festón y se instalan los broches de presión."
    ],
    mainTypes: [
      "Babero Bandana ITH (Estilo moderno y triangular con forro absorbente)",
      "Babero Tradicional Redondo con Cierre Lateral (Para alimentación y lactancia)",
      "Sujetachupetes de Cinta con Pinza Cocodrilo y Broche de Presión",
      "Conjunto Completo de Ajuar de Bebé con Toalla y Babita a Juego"
    ],
    advantages: [
      "✔ Confección 100% en el bastidor (ITH) con acabado limpio y profesional",
      "✔ Máxima absorción e impermeabilización para proteger la ropa del bebé",
      "✔ Seguridad garantizada con remates reforzados en 'X' y broches plásticos",
      "✔ Producto de altísima demanda y margen comercial en el taller"
    ],
    limitations: [
      "Exige uso riguroso de materiales hipoalergénicos certificados y revisión de bordes para evitar asperezas en la piel del recién nacido."
    ],
    commonErrors: [
      "❌ Usar densidades excesivas de puntada que dejen el bordado rígido y áspero sobre el pecho del bebé.",
      "❌ Perforar la capa impermeable con miles de puntadas antes de cerrarla, perdiendo la protección hidrófuga.",
      "❌ Utilizar cintas sin costura de seguridad reforzada que puedan soltarse con la fuerza del niño."
    ],
    dicaArtrelados: "Para el revés de los baberos y ropa de bebé, aplique siempre entretela termoadhesiva suave de protección (tipo Tender Touch o Cloud Cover) sobre los hilos del bordado. ¡Esto sella el revés y garantiza un tacto de seda que jamás raspará la piel del recién nacido!",
    voceSabia: "¡Las normas internacionales de seguridad infantil exigen que la cinta del sujetachupetes no supere los 22 cm de longitud para evitar cualquier riesgo de enrollamiento en el cuello del bebé!",
    applications: [
      "Ajuares de bebé, regalos para recién nacidos, canastillas de maternidad y ferias de artesanía."
    ],
    troubleshootingTips: [
      "Si el tejido de toalla asoma pelusas a través del bordado, coloque siempre una película de entretela hidrosoluble fina (Wash-away) sobre la superficie antes de bordar.",
      "Si los broches plásticos se sueltan, verifique que la matriz de la pinza aplicadora corresponda al tamaño exacto del botón (Kam T5 12mm)."
    ],
    practicalExercise: "Confeccione una muestra en el bastidor: cosa una cinta de gorgurán con remate en 'X' y pruébela tirando con fuerza. Compruebe cómo la puntada triple dentro del recuadro resiste tirones sin desgarrar la cinta.",
    quickSummary: "Pieza confeccionada en el bastidor con telas hipoalergénicas y capa impermeable, combinada con cinta sujetachupetes de alta seguridad para la primera infancia.",
    relatedTerms: [
      "Técnicas de Bastidor",
      "Aguja Punta de Bola (SES / FFG / SUK)",
      "Entretela Hidrosoluble (Wash-away)",
      "Parada Programada (Stop)"
    ]
  },
  "B-115": {
    term: "Babero y Sujetachupetes (Baberos Infantiles y Accesorios en el Bastidor ITH)",
    level: "Principiante 🟢",
    grammarClass: "Locución sustantiva masculina compuesta.",
    origin: "Del francés arcaico 'bave' (baba infantil, originando el término 'babero'), conjugado con el sistema moderno de cintas salvachupetes confeccionadas en el bastidor (In The Hoop) con pinza tipo cocodrilo y broches de presión plásticos (Ritas/Kam).",
    category: "Técnicas de Bastidor",
    summary: "Guía técnica para bordar y confeccionar baberos de toalla y sujetachupetes con seguridad pediátrica, impermeabilización y tacto ultrasuave.",
    definition: "El Babero y Sujetachupetes (Baberos Pediátricos / Baby Bibs & Pacifier Clips ITH / Accesorios Infantiles de Alimentación Bordados) comprende la metodología de bordado y confección en el bastidor de piezas utilitarias destinadas a la primera infancia.",
    technicalDetails: "Al confeccionar baberos y sujetachupetes en la máquina de bordar, el digitalizador y la bordadora deben respetar 4 normas técnicas esenciales: 1) Densidad Reducida; 2) Capa Impermeable Interna; 3) Hilos con Certificación OEKO-TEX; 4) Remate de Cintas (Box X-Stitch).",
    beginnerExplanation: "¡Es la pieza más vendida para baby showers y ajuares! Un babero suave con el nombre del bebé bordado y el sujetachupetes a juego.",
    quickSummary: "Pieza confeccionada en el bastidor con telas hipoalergénicas y capa impermeable, combinada con cinta sujetachupetes de alta seguridad para la primera infancia."
  },
  ...VERBETES_LETTER_A_LOTE1_ES,
  ...VERBETES_LETTER_A_LOTE2_ES,
  ...VERBETES_LETTER_A_LOTE3_ES,
  ...VERBETES_LETTER_A_LOTE4_ES,
  ...VERBETES_LETTER_B_LOTE1_ES,
  ...VERBETES_LETTER_B_LOTE2_ES,
  ...VERBETES_LETTER_B_LOTE3_ES,
  ...VERBETES_LETTER_B_LOTE4_ES,
  ...VERBETES_LETTER_B_LOTE5_ES,
  ...VERBETES_LETTER_C_LOTE1_ES,
  ...VERBETES_LETTER_C_LOTE2_ES,
  ...VERBETES_LETTER_C_LOTE3_ES,
  ...VERBETES_LETTER_C_LOTE4_ES,
  ...VERBETES_LETTER_C_LOTE5_ES,
  ...VERBETES_LETTER_C_LOTE6_ES,
  ...VERBETES_LETTER_D_LOTE1_ES,
  ...VERBETES_LETTER_D_LOTE2_ES,
  ...VERBETES_LETTER_D_LOTE3_ES,
  ...VERBETES_LETTER_D_LOTE4_ES,
  ...VERBETES_LETTER_E_LOTE1_ES,
  ...VERBETES_LETTER_E_LOTE2_ES,
  ...VERBETES_LETTER_E_LOTE3_ES,
  ...VERBETES_LETTER_E_LOTE4_ES,
  ...VERBETES_LETTER_F_LOTE1_ES,
  ...VERBETES_LETTER_F_LOTE2_ES
};

/**
 * Motor Lingüístico Maestro de Bordado Português -> Espanhol
 */
export function translateEmbroideryTextToSpanish(text: any): any {
  if (text === null || text === undefined) return text;
  if (Array.isArray(text)) {
    return text.map((item) => (typeof item === "string" ? translateEmbroideryTextToSpanish(item) : item));
  }
  if (typeof text !== "string") {
    return text;
  }
  if (!text.trim()) return text;

  let str = text;

  // 1. Títulos exatos conhecidos
  for (const [ptTitle, esTitle] of Object.entries(ALPHABET_TERMS_ES)) {
    if (str === ptTitle) return esTitle;
  }

  // 2. Frases e Expressões Completas Típicas de Bordado
  const PHRASE_REPLACEMENTS: [RegExp, string][] = [
    [/Ficha Técnica do Verbete/gi, "Ficha Técnica del Término"],
    [/Ficha Técnica/gi, "Ficha Técnica"],
    [/Prancha técnica ilustrada do verbete/gi, "Lámina técnica ilustrada del término"],
    [/Prancha técnica ilustrada/gi, "Lámina técnica ilustrada"],
    [/Manual Técnico DIBE/gi, "Manual Técnico DIBE"],
    [/Dicionário de Bordados Eletrônicos/gi, "Diccionario de Bordado Electrónico"],
    [/Dicionário Ilustrado de Bordado Eletrônico/gi, "Diccionario Ilustrado de Bordado Electrónico"],
    [/Dica Artrelados/gi, "Consejo Artrelados"],
    [/Você Sabia\?/gi, "¿Sabías Que...?"],
    [/Você sabia/gi, "¿Sabías que...?"],
    [/Exercício Prático/gi, "Ejercicio Práctico"],
    [/Resumo Rápido/gi, "Resumen Rápido"],
    [/Como funciona no bordado eletrônico/gi, "Cómo funciona en el bordado electrónico"],
    [/Como funciona/gi, "Cómo funciona"],
    [/Explicação para quem está começando/gi, "Explicación para principiantes"],
    [/Para quem está começando/gi, "Para principiantes"],
    [/Erros comuns/gi, "Errores comunes"],
    [/Conselho Preventivo/gi, "Consejo Preventivo"],
    [/Passo a Passo da Solução/gi, "Paso a Paso de la Solución"],
    [/Relação com outros parâmetros da matriz/gi, "Relación con otros parámetros de la matriz"],
    [/Como identificar quando o ajuste é necessário/gi, "Cómo identificar cuándo el ajuste es necesario"],
    [/Exemplos práticos/gi, "Ejemplos prácticos"],
    [/Veja também/gi, "Ver también"],
    [/Termos relacionados/gi, "Términos relacionados"],
    [/Características Principais/gi, "Características Principales"],
    [/Construção & Partes Principais/gi, "Construcción y Partes Principales"],
    [/Construção e Partes Principais/gi, "Construcción y Partes Principales"],
    [/Principais Tipos e Variações/gi, "Principales Tipos y Variaciones"],
    [/Tamanhos & Numerações Mais Utilizados/gi, "Tamaños y Numeraciones Más Utilizados"],
    [/Tamanhos e Numerações Mais Utilizados/gi, "Tamaños y Numeraciones Más Utilizados"],
    [/Comparação Técnica/gi, "Comparación Técnica"],
    [/Ajustes Recomendados na Máquina/gi, "Ajustes Recomendados en la Máquina"],
    [/Velocidade Recomendada/gi, "Velocidad Recomendada"],
    [/Tipo de Agulha/gi, "Tipo de Aguja"],
    [/Estabilizador \/ Entretela/gi, "Estabilizador / Entretela"],
    [/Tensão da Linha/gi, "Tensión del Hilo"],
    [/Densidade do Ponto/gi, "Densidad de la Puntada"],
    [/Aplicações Práticas/gi, "Aplicaciones Prácticas"],
    [/Dicas de Resolução de Problemas/gi, "Consejos de Resolución de Problemas"],
    [/Pronúncia:/gi, "Pronunciación:"],
  ];

  for (const [pattern, repl] of PHRASE_REPLACEMENTS) {
    str = str.replace(pattern, repl);
  }

  // 3. Vocabulário Têxtil Especializado
  const TEXTILE_TERMS: [RegExp, string][] = [
    // Mecanismos de corte y cuchillas
    [/\bfaca móvel e faca fixa\b/gi, "cuchilla móvil y cuchilla fija"],
    [/\bfaca móvel\b/gi, "cuchilla móvil"],
    [/\bfaca fixa\b/gi, "cuchilla fija"],
    [/\bfaca de corte\b/gi, "cuchilla de corte"],
    [/\bfacas de corte\b/gi, "cuchillas de corte"],
    [/\bfacas\b/gi, "cuchillas"],
    [/\bbloco de corte de fio\b/gi, "bloque de corte de hilo"],
    [/\bbloco de corte\b/gi, "bloque de corte"],
    [/\bbloco\b/gi, "bloque"],
    [/\bblocos\b/gi, "bloques"],
    [/\bsub-placa\b/gi, "subplaca"],
    [/\bchapa de agulha\b/gi, "placa de aguja"],
    [/\bchapa de aguja\b/gi, "placa de aguja"],
    [/\beletromecânico\b/gi, "electromecánico"],
    [/\beletromecânica\b/gi, "electromecánica"],
    [/\bpneumático\b/gi, "neumático"],
    [/\bpneumática\b/gi, "neumática"],
    [/\bdesenvolvido\b/gi, "desarrollado"],
    [/\bdesenvolvida\b/gi, "desarrollada"],
    [/\bdesenvolvidos\b/gi, "desarrollados"],
    [/\bdesenvolvidas\b/gi, "desarrolladas"],
    [/\bcomposto\b/gi, "compuesto"],
    [/\bcomposta\b/gi, "compuesta"],
    [/\banos 19\b/gi, "años 19"],
    [/\banos 20\b/gi, "años 20"],
    [/\bMecânica & Ajustes\b/gi, "Mecánica y Ajustes"],
    [/\bMecânica e Ajustes\b/gi, "Mecánica y Ajustes"],
    [/\bMecânica\b/gi, "Mecánica"],
    [/\bmecânica\b/gi, "mecánica"],
    [/\bfaça o teste\b/gi, "realice la prueba"],
    [/\bfaça um teste\b/gi, "realice una prueba"],
    [/\bfaça\b/gi, "haga"],
    [/\bFaça\b/gi, "Haga"],

    // Agulhas e anatomia
    [/\bagulhas de bordado\b/gi, "agujas de bordado"],
    [/\bagulha de bordado\b/gi, "aguja de bordado"],
    [/\bagulhas ponta bola\b/gi, "agujas punta de bola"],
    [/\bagulha ponta bola\b/gi, "aguja punta de bola"],
    [/\bagulhas ponta lança\b/gi, "agujas punta de lanza"],
    [/\bagulha ponta lança\b/gi, "aguja punta de lanza"],
    [/\bagulhas cortantes\b/gi, "agujas cortantes"],
    [/\bagulha cortante\b/gi, "aguja cortante"],
    [/\bagulha cega\b/gi, "aguja desafilada / despuntada"],
    [/\bagulhas cegas\b/gi, "agujas desafiladas"],
    [/\bagulhas\b/gi, "agujas"],
    [/\bagulha\b/gi, "aguja"],
    [/\bbarra de agulha\b/gi, "barra de aguja"],
    [/\bbarras de agulha\b/gi, "barras de aguja"],
    [/\bolho da agulha\b/gi, "ojo de la aguja"],
    [/\bolho expandido\b/gi, "ojo expandido"],
    [/\branhoura frontal\b/gi, "ranura frontal"],
    [/\branhura profunda\b/gi, "ranura profunda"],
    [/\branhura\b/gi, "ranura"],
    [/\branuras\b/gi, "ranuras"],
    [/\bchanfro\b/gi, "chaflán (scarf)"],
    [/\bchanfros\b/gi, "chaflanes (scarfs)"],
    [/\bhaste de fixação\b/gi, "vástago / talón de fijación"],
    [/\bhaste\b/gi, "vástago / cabo"],

    // Linhas e fios
    [/\blinha superior\b/gi, "hilo superior"],
    [/\blinhas superiores\b/gi, "hilos superiores"],
    [/\blinha da bobina\b/gi, "hilo de la canilla"],
    [/\blinhas da bobina\b/gi, "hilos de la canilla"],
    [/\blinha de bordado\b/gi, "hilo de bordar"],
    [/\blinhas de bordado\b/gi, "hilos de bordar"],
    [/\blinha de poliéster\b/gi, "hilo de poliéster"],
    [/\blinhas de poliéster\b/gi, "hilos de poliéster"],
    [/\blinha de algodão\b/gi, "hilo de algodón"],
    [/\blinhas de algodão\b/gi, "hilos de algodón"],
    [/\blinha metálica\b/gi, "hilo metálico"],
    [/\blinhas metálicas\b/gi, "hilos metálicos"],
    [/\bfio metálico\b/gi, "hilo metálico"],
    [/\bfios metálicos\b/gi, "hilos metálicos"],
    [/\blinhas\b/gi, "hilos"],
    [/\blinha\b/gi, "hilo"],
    [/\bcone de linha\b/gi, "cono de hilo"],
    [/\bcones de linha\b/gi, "conos de hilo"],
    [/\bcarretel\b/gi, "carrete"],
    [/\bcarretéis\b/gi, "carretes"],
    [/\bcanelinha\b/gi, "canilla"],
    [/\bcanelinhas\b/gi, "canillas"],
    [/\bcaixa de bobina\b/gi, "caja de bobina / portacanilla"],
    [/\bcaixas de bobina\b/gi, "cajas de bobina / portacanillas"],
    [/\bbobina\b/gi, "canilla / bobina"],
    [/\bbobinas\b/gi, "canillas / bobinas"],
    [/\blaçadeira rotativa\b/gi, "garfio rotativo"],
    [/\blaçadeira\b/gi, "garfio rotativo / lanzadera"],
    [/\blaçadeiras\b/gi, "garfios rotativos / lanzaderas"],
    [/\bestica-fio\b/gi, "tirahilos"],
    [/\bestica-fios\b/gi, "tirahilos"],
    [/\baparador de fio\b/gi, "cortahilos automático"],
    [/\bcorte de linha\b/gi, "corte de hilo"],
    [/\bcortes de linha\b/gi, "cortes de hilo"],
    [/\bpassador de linha\b/gi, "enhebrador de hilo"],
    [/\bpassagem de linha\b/gi, "enhebrado del hilo"],
    [/\bdesfiamento\b/gi, "deshilachado"],
    [/\bdesfiamentos\b/gi, "deshilachados"],
    [/\bquebra de linha\b/gi, "rotura de hilo"],
    [/\bquebras de linha\b/gi, "roturas de hilo"],
    [/\bquebra de agulha\b/gi, "rotura de aguja"],
    [/\bquebras de agulha\b/gi, "roturas de aguja"],
    [/\bninho de linha\b/gi, "nido de hilo / enredo"],
    [/\blaçada\b/gi, "lazada"],
    [/\blaçadas\b/gi, "lazadas"],
    [/\barremate\b/gi, "remate / puntada de seguridad"],
    [/\barremates\b/gi, "remates"],

    // Pontos e Parâmetros
    [/\bponto cheio\b/gi, "puntada satín"],
    [/\bpontos cheios\b/gi, "puntadas satín"],
    [/\bponto tatami\b/gi, "puntada tatami / relleno"],
    [/\bpontos tatami\b/gi, "puntadas tatami"],
    [/\bponto corrido\b/gi, "puntada recta corrida"],
    [/\bpontos corridos\b/gi, "puntadas rectas corridas"],
    [/\bponto triplo\b/gi, "puntada triple"],
    [/\bpontos triplos\b/gi, "puntadas triples"],
    [/\bponto de suporte\b/gi, "puntada de soporte (underlay)"],
    [/\bpontos de suporte\b/gi, "puntadas de soporte (underlay)"],
    [/\bponto de sustentação\b/gi, "puntada de soporte (underlay)"],
    [/\bponto de fixação\b/gi, "puntada de fijación (tackdown)"],
    [/\bpontos de fixação\b/gi, "puntadas de fijación"],
    [/\bponto de marcação\b/gi, "puntada de marcado (placement)"],
    [/\bpontos de marcação\b/gi, "puntadas de marcado"],
    [/\bponto caseado\b/gi, "puntada festón / ojal"],
    [/\bponto cruz\b/gi, "punto de cruz"],
    [/\bponto de costura\b/gi, "puntada recta"],
    [/\bpontos por minuto\b/gi, "puntadas por minuto"],
    [/\bcontagem de pontos\b/gi, "conteo de puntadas"],
    [/\bcomprimento do ponto\b/gi, "longitud de puntada"],
    [/\blargura do ponto\b/gi, "ancho de puntada"],
    [/\bdensidade de ponto\b/gi, "densidad de puntada"],
    [/\bdensidade de pontos\b/gi, "densidad de puntadas"],
    [/\bcompensação de encolhimento\b/gi, "compensación de tirantez (pull compensation)"],
    [/\bcompensação de repuxo\b/gi, "compensación de tirantez"],
    [/\bcomputadorizado\b/gi, "computarizado"],
    [/\bcomputadorizada\b/gi, "computarizada"],
    [/\bcomputadorizados\b/gi, "computarizados"],
    [/\bcomputadorizadas\b/gi, "computarizadas"],

    // Entretelas e Estabilizadores
    [/\bentretela rasgável\b/gi, "entretela desprendible (tear-away)"],
    [/\bentretela rasga-fácil\b/gi, "entretela desprendible (tear-away)"],
    [/\bentretela de corte\b/gi, "entretela recortable (cut-away)"],
    [/\bentretela recorta-fácil\b/gi, "entretela recortable (cut-away)"],
    [/\bentretela hidrossolúvel\b/gi, "entretela hidrosoluble (wash-away)"],
    [/\bentretela solúvel\b/gi, "entretela hidrosoluble"],
    [/\bentretela termocolante\b/gi, "entretela termoadhesiva"],
    [/\bentretela malha\b/gi, "entretela de punto / malla"],
    [/\bfilme termossolúvel\b/gi, "película termosoluble"],
    [/\bfilme plástico\b/gi, "película plástica"],
    [/\bentretelas\b/gi, "entretelas"],
    [/\bentretela\b/gi, "entretela"],
    [/\bestabilizador\b/gi, "estabilizador"],
    [/\bestabilizadores\b/gi, "estabilizadores"],

    // Tecidos e materiais
    [/\btecido plano\b/gi, "tejido plano"],
    [/\btecidos planos\b/gi, "tejidos planos"],
    [/\btecido de malha\b/gi, "tejido de punto"],
    [/\btecidos de malha\b/gi, "tejidos de punto"],
    [/\btecido felpudo\b/gi, "tejido afelpado / toalla"],
    [/\btecidos felpudos\b/gi, "tejidos afelpados"],
    [/\btoalha de banho\b/gi, "toalla de baño"],
    [/\btoalhas de banho\b/gi, "toallas de baño"],
    [/\btoalha de rosto\b/gi, "toalla de mano"],
    [/\btoalhas de rosto\b/gi, "toallas de mano"],
    [/\btoalha\b/gi, "toalla"],
    [/\btoalhas\b/gi, "toallas"],
    [/\bfralda de pano\b/gi, "pañal de tela"],
    [/\bfraldas de pano\b/gi, "pañales de tela"],
    [/\bfralda\b/gi, "pañal de tela"],
    [/\bfraldas\b/gi, "pañales de tela"],
    [/\bcamisa polo\b/gi, "camisa polo"],
    [/\bcamisas polo\b/gi, "camisas polo"],
    [/\bmoletom\b/gi, "sudadera / felpa"],
    [/\bmoletons\b/gi, "sudaderas / felpas"],
    [/\bboné\b/gi, "gorra"],
    [/\bbonés\b/gi, "gorras"],
    [/\balmofada\b/gi, "cojín"],
    [/\balmofadas\b/gi, "cojines"],
    [/\bretalho\b/gi, "retazo"],
    [/\bretalhos\b/gi, "retazos"],
    [/\bcouro sintético\b/gi, "cuero sintético"],
    [/\bcouro legítimo\b/gi, "cuero natural"],
    [/\bcouro\b/gi, "cuero"],
    [/\bveludo\b/gi, "terciopelo"],
    [/\blinho\b/gi, "lino"],
    [/\bseda\b/gi, "seda"],
    [/\bcetim\b/gi, "satén"],
    [/\bfeltro\b/gi, "fieltro"],
    [/\btecido\b/gi, "tejido / tela"],
    [/\btecidos\b/gi, "tejidos / telas"],

    // Bastidores e ferramentas
    [/\bbastidor magnético\b/gi, "bastidor magnético"],
    [/\bbastidores magnéticos\b/gi, "bastidores magnéticos"],
    [/\bbastidor de boné\b/gi, "bastidor de gorras"],
    [/\bbastidores de boné\b/gi, "bastidores de gorras"],
    [/\bbastidor tubular\b/gi, "bastidor tubular"],
    [/\bbastidores tubulares\b/gi, "bastidores tubulares"],
    [/\bbastidor\b/gi, "bastidor"],
    [/\bbastidores\b/gi, "bastidores"],
    [/\btesourinha pelicano\b/gi, "tijera pelícano"],
    [/\btesoura pelicano\b/gi, "tijera pelícano"],
    [/\btesoura curva\b/gi, "tijera curva"],
    [/\btesoura de arremate\b/gi, "tijera de remate"],
    [/\btesouras\b/gi, "tijeras"],
    [/\btesoura\b/gi, "tijera"],
    [/\bcalcador de bordado\b/gi, "prensatelas de bordado"],
    [/\bcalcador\b/gi, "prensatelas"],
    [/\bcalcadores\b/gi, "prensatelas"],

    // Matriz e Software
    [/\bmatriz de bordado\b/gi, "matriz / diseño de bordado"],
    [/\bmatrizes de bordado\b/gi, "matrices / diseños de bordado"],
    [/\bmatriz\b/gi, "matriz / diseño"],
    [/\bmatrizes\b/gi, "matrices / diseños"],
    [/\bprogramação de bordado\b/gi, "programación / digitalización de bordado"],
    [/\bdigitalização\b/gi, "digitalización (ponchado)"],
    [/\bparada programada\b/gi, "parada programada (Stop)"],
    [/\bparadas programadas\b/gi, "paradas programadas (Stops)"],
    [/\btroca de cor\b/gi, "cambio de color"],
    [/\btrocas de cores\b/gi, "cambios de color"],
    [/\btrocas de cor\b/gi, "cambios de color"],
    [/\bcartela de cores\b/gi, "carta de colores"],
    [/\bcartelas de cores\b/gi, "cartas de colores"],

    // Ateliê e Ambiente
    [/\bno ateliê\b/gi, "en el taller"],
    [/\bdo ateliê\b/gi, "del taller"],
    [/\bao ateliê\b/gi, "al taller"],
    [/\bateliê de bordados\b/gi, "taller de bordado"],
    [/\bateliê\b/gi, "taller"],
    [/\bateliês\b/gi, "talleres"],
    [/\bbordadeira\b/gi, "bordadora"],
    [/\bbordadeiras\b/gi, "bordadoras"],
    [/\bbordador\b/gi, "bordador"],
    [/\bbordadores\b/gi, "bordadores"],

    // Níveis e Classes Gramaticais
    [/\bIniciante 🟢\b/gi, "Principiante 🟢"],
    [/\bIniciante\b/gi, "Principiante"],
    [/\bIntermediário 🟡\b/gi, "Intermedio 🟡"],
    [/\bIntermediário\b/gi, "Intermedio"],
    [/\bAvançado 🔴\b/gi, "Avanzado 🔴"],
    [/\bAvançado\b/gi, "Avanzado"],
    [/\bLocução substantiva masculina composta\b/gi, "Locución sustantiva masculina compuesta"],
    [/\bLocução substantiva feminina composta\b/gi, "Locución sustantiva feminina compuesta"],
    [/\bSubstantivo masculino\b/gi, "Sustantivo masculino"],
    [/\bSubstantivo feminino\b/gi, "Sustantivo femenino"],

    // Acessórios Infantis, Enxoval e Confecção ITH
    [/\bbabadores atoalhados\b/gi, "baberos de toalla"],
    [/\bbabador atoalhado\b/gi, "babero de toalla"],
    [/\bbabador e prendedor de chupeta\b/gi, "babero y sujetachupetes"],
    [/\bbabadores e prendedores de chupeta\b/gi, "baberos y sujetachupetes"],
    [/\bprendedores de chupeta\b/gi, "sujetachupetes"],
    [/\bprendedor de chupeta\b/gi, "sujetachupetes"],
    [/\bsalva-chupetas\b/gi, "salvachupetes"],
    [/\bchupeta\b/gi, "chupete"],
    [/\bchupetas\b/gi, "chupetes"],
    [/\bbabetes infantis\b/gi, "baberos infantiles"],
    [/\bbabetes pediátricos\b/gi, "baberos pediátricos"],
    [/\bbabetes\b/gi, "baberos"],
    [/\bbabete\b/gi, "babero"],
    [/\bbabadores\b/gi, "baberos"],
    [/\bbabador\b/gi, "babero"],
    [/\batoalhados\b/gi, "de toalla / afelpados"],
    [/\batoalhado\b/gi, "de toalla / afelpado"],
    [/\bfecho tipo jacaré\b/gi, "pinza tipo cocodrilo"],
    [/\bfecho jacaré\b/gi, "pinza cocodrilo"],
    [/\bbotões de pressão plásticos\b/gi, "broches de presión plásticos (snaps)"],
    [/\bbotões de pressão\b/gi, "broches de presión (snaps)"],
    [/\bbotão de pressão\b/gi, "broche de presión (snap)"],
    [/\bfitas salva-chupetas\b/gi, "cintas salvachupetes"],
    [/\bfita de gorgurão\b/gi, "cinta de gorgurán / falla"],
    [/\bfitas de gorgurão\b/gi, "cintas de gorgurán"],
    [/\bsegurança pediátrica\b/gi, "seguridad pediátrica"],
    [/\bsegurança\b/gi, "seguridad"],
    [/\bimpermeabilização\b/gi, "impermeabilización"],
    [/\bimpermeabilizações\b/gi, "impermeabilizaciones"],
    [/\bimpermeável\b/gi, "impermeable"],
    [/\bimpermeáveis\b/gi, "impermeables"],
    [/\bultra-macio\b/gi, "ultrasuave"],
    [/\bmacio\b/gi, "suave"],
    [/\bmacia\b/gi, "suave"],
    [/\bmacios\b/gi, "suaves"],
    [/\bmacias\b/gi, "suaves"],
    [/\bchá de bebê\b/gi, "baby shower"],
    [/\benxovais\b/gi, "ajuares"],
    [/\benxoval\b/gi, "ajuar"],
    [/\broupinha\b/gi, "ropita"],
    [/\broupinhas\b/gi, "ropitas"],
    [/\bpescocinho\b/gi, "cuellito"],
    [/\bpele sensível\b/gi, "piel sensible"],
    [/\bfrancês arcaico\b/gi, "francés arcaico"],
    [/\bfrancês\b/gi, "francés"],
    [/\binglês\b/gi, "inglés"],
    [/\balemão\b/gi, "alemán"],
    [/\bitaliano\b/gi, "italiano"],
    [/\bportuguês\b/gi, "portugués"],
    [/\blatim vulgar\b/gi, "latín vulgar"],
    [/\blatim\b/gi, "latín"],
    [/\btermo português\b/gi, "término portugués"],
    [/\btermo espanhol\b/gi, "término español"],
    [/\btermo\b/gi, "término"],
    [/\btermos\b/gi, "términos"],
  ];

  for (const [pattern, repl] of TEXTILE_TERMS) {
    str = str.replace(pattern, repl);
  }

  // 4. Transformação Gramatical e Conectivos (Português -> Espanhol)
  const GRAMMAR_REPLACEMENTS: [RegExp, string][] = [
    // Preposições no início de frases (Maiúsculas)
    [/\bDo\b/g, "Del"],
    [/\bDa\b/g, "De la"],
    [/\bDos\b/g, "De los"],
    [/\bDas\b/g, "De las"],
    [/\bNo\b/g, "En el"],
    [/\bNa\b/g, "En la"],
    [/\bNos\b/g, "En los"],
    [/\bNas\b/g, "En las"],
    [/\bPelo\b/g, "Por el"],
    [/\bPela\b/g, "Por la"],
    [/\bPelos\b/g, "Por los"],
    [/\bPelas\b/g, "Por las"],
    [/\bCom\b/g, "Con"],
    [/\bSem\b/g, "Sin"],
    [/\bPara\b/g, "Para"],
    [/\bO\b/g, "El"],
    [/\bOs\b/g, "Los"],

    // Preposições combinadas e artigos (minúsculas com lookarounds seguros)
    [/(?<![a-záéíóúñãõçêô])da(?![a-záéíóúñãõçêô])/gi, "de la"],
    [/(?<![a-záéíóúñãõçêô])do(?![a-záéíóúñãõçêô])/gi, "del"],
    [/(?<![a-záéíóúñãõçêô])das(?![a-záéíóúñãõçêô])/gi, "de las"],
    [/(?<![a-záéíóúñãõçêô])dos(?![a-záéíóúñãõçêô])/gi, "de los"],
    [/(?<![a-záéíóúñãõçêô])na(?![a-záéíóúñãõçêô])/gi, "en la"],
    [/(?<![a-záéíóúñãõçêô])no(?![a-záéíóúñãõçêô])/gi, "en el"],
    [/(?<![a-záéíóúñãõçêô])nas(?![a-záéíóúñãõçêô])/gi, "en las"],
    [/(?<![a-záéíóúñãõçêô])nos(?![a-záéíóúñãõçêô])/gi, "en los"],
    [/(?<![a-záéíóúñãõçêô])pela(?![a-záéíóúñãõçêô])/gi, "por la"],
    [/(?<![a-záéíóúñãõçêô])pelo(?![a-záéíóúñãõçêô])/gi, "por el"],
    [/(?<![a-záéíóúñãõçêô])pelas(?![a-záéíóúñãõçêô])/gi, "por las"],
    [/(?<![a-záéíóúñãõçêô])pelos(?![a-záéíóúñãõçêô])/gi, "por los"],
    [/(?<![a-záéíóúñãõçêô])numa(?![a-záéíóúñãõçêô])/gi, "en una"],
    [/(?<![a-záéíóúñãõçêô])num(?![a-záéíóúñãõçêô])/gi, "en un"],
    [/(?<![a-záéíóúñãõçêô])numas(?![a-záéíóúñãõçêô])/gi, "en unas"],
    [/(?<![a-záéíóúñãõçêô])nuns(?![a-záéíóúñãõçêô])/gi, "en unos"],
    [/(?<![a-záéíóúñãõçêô])às(?![a-záéíóúñãõçêô])/gi, "a las"],
    [/(?<![a-záéíóúñãõçêô])aos(?![a-záéíóúñãõçêô])/gi, "a los"],
    [/(?<![a-záéíóúñãõçêô])ao(?![a-záéíóúñãõçêô])/gi, "al"],
    [/\bcom\b/g, "con"],
    [/\bsem\b/g, "sin"],
    [/\bsob\b/g, "bajo"],
    [/\bsobre\b/g, "sobre"],
    [/\bentre\b/g, "entre"],
    [/\baté\b/g, "hasta"],
    [/\bapós\b/g, "tras"],
    [/\bantes de\b/g, "antes de"],
    [/\bdurante\b/g, "durante"],
    [/\bconforme\b/g, "según"],
    [/\bsegundo\b/g, "según"],
    [/\bem vez de\b/g, "en lugar de"],
    [/\bao redor de\b/g, "alrededor de"],
    [/\batravés de\b/g, "a través de"],
    [/\b o \b/g, " el "],
    [/\b os \b/g, " los "],

    // Conjunções e advérbios
    [/\b e \b/g, " y "],
    [/\b ou \b/g, " o "],
    [/\b mas \b/g, " pero "],
    [/\b porém \b/g, " sin embargo "],
    [/\b além disso\b/g, " además"],
    [/\b também \b/g, " también "],
    [/\b sempre \b/g, " siempre "],
    [/\b nunca \b/g, " nunca "],
    [/\b ainda \b/g, " todavía "],
    [/\b muito \b/g, " muy "],
    [/\b muita \b/g, " mucha "],
    [/\b muitos \b/g, " muchos "],
    [/\b muitas \b/g, " muchas "],
    [/\b mais \b/g, " más "],
    [/\b menos \b/g, " menos "],
    [/\b apenas \b/g, " solo "],
    [/\b somente \b/g, " solamente "],
    [/\b quase \b/g, " casi "],
    [/\b quando \b/g, " cuando "],
    [/\b onde \b/g, " donde "],
    [/\b porque \b/g, " porque "],
    [/\b por que \b/g, " por qué "],
    [/\b portanto \b/g, " por lo tanto "],
    [/\b assim \b/g, " así "],
    [/\b então \b/g, " entonces "],

    // Verbos frequentes em manuais técnicos
    [/\b é \b/g, " es "],
    [/\b são \b/g, " son "],
    [/\b foi \b/g, " fue "],
    [/\b foram \b/g, " fueron "],
    [/\b era \b/g, " era "],
    [/\b eram \b/g, " eran "],
    [/\b está \b/g, " está "],
    [/\b estão \b/g, " están "],
    [/\b estava \b/g, " estaba "],
    [/\b estavam \b/g, " estaban "],
    [/\b tem \b/g, " tiene "],
    [/\b têm \b/g, " tienen "],
    [/\b tinha \b/g, " tenía "],
    [/\b tinham \b/g, " tenían "],
    [/\b há \b/g, " hay "],
    [/\b havia \b/g, " había "],
    [/\b faz \b/g, " hace "],
    [/\b fazem \b/g, " hacen "],
    [/\b feito \b/g, " hecho "],
    [/\b feita \b/g, " hecha "],
    [/\b feitos \b/g, " hechos "],
    [/\b feitas \b/g, " hechas "],
    [/\b pode \b/g, " puede "],
    [/\b podem \b/g, " pueden "],
    [/\b deve \b/g, " debe "],
    [/\b devem \b/g, " deben "],
    [/\b deveria \b/g, " debería "],
    [/\b deveriam \b/g, " deberían "],
    [/\b possui \b/g, " posee "],
    [/\b possuem \b/g, " poseen "],
    [/\b permite \b/g, " permite "],
    [/\b permitem \b/g, " permiten "],
    [/\b garante \b/g, " garantiza "],
    [/\b garantem \b/g, " garantizan "],
    [/\b proporciona \b/g, " proporciona "],
    [/\b proporcionam \b/g, " proporcionan "],
    [/\b funciona \b/g, " funciona "],
    [/\b funcionam \b/g, " funcionan "],
    [/\b ocorre \b/g, " ocurre "],
    [/\b ocorrem \b/g, " ocurren "],
    [/\b acontece \b/g, " sucede "],
    [/\b acontecem \b/g, " suceden "],
    [/\b perfura \b/g, " perfora "],
    [/\b perfuram \b/g, " perforan "],
    [/\b perfurando \b/g, " perforando "],
    [/\b eleva-se \b/g, " se eleva "],
    [/\b retorna \b/g, " regresa "],
    [/\b conduzindo \b/g, " conduciendo "],
    [/\b levando \b/g, " llevando "],
    [/\b cortando \b/g, " cortando "],
    [/\b puxando \b/g, " tirando "],
    [/\b enrugando \b/g, " arrugando "],
    [/\b repuxando \b/g, " tironeando "],
    [/\b verificar \b/g, " verificar "],
    [/\b verifique \b/g, " verifique "],
    [/\b certifique-se \b/g, " asegúrese "],
    [/\b examine \b/g, " examine "],
    [/\b retire \b/g, " retire "],
    [/\b coloque \b/g, " coloque "],
    [/\b insira \b/g, " inserte "],
    [/\b aperte \b/g, " apriete "],
    [/\b solte \b/g, " suelte "],
    [/\b regule \b/g, " regule "],
    [/\b ajuste \b/g, " ajuste "],
    [/\b calibre \b/g, " calibre "],
    [/\b limpe \b/g, " limpie "],
    [/\b lubrifique \b/g, " lubrique "],
    [/\b troque \b/g, " cambie "],
    [/\b descarte \b/g, " deseche "],
    [/\b diminua \b/g, " disminuya "],
    [/\b reduza \b/g, " reduzca "],
    [/\b aumente \b/g, " aumente "],
    [/\b utilize \b/g, " utilice "],
    [/\b use \b/g, " use "],
    [/\b evite \b/g, " evite "],
    [/\b mantenha \b/g, " mantenga "],
    [/\b borde \b/g, " borde "],
    [/\b costure \b/g, " cosa "],
    [/\b lave \b/g, " lave "],
    [/\b passe \b/g, " pase "],
  ];

  for (const [pattern, repl] of GRAMMAR_REPLACEMENTS) {
    str = str.replace(pattern, repl);
  }

  // Ajustes finos: " y " antes de palabras con sonido "i" en español se convierte en " e "
  str = str.replace(/\b y ([ií][a-zá-ú])/gi, " e $1");

  // Limpeza final ortográfica (evita resquícios de escrita do português)
  str = str.replace(/([a-záéíóúñ])ção\b/gi, "$1ción");
  str = str.replace(/([a-záéíóúñ])ções\b/gi, "$1ciones");
  str = str.replace(/([a-záéíóúñ])ssão\b/gi, "$1sión");
  str = str.replace(/([a-záéíóúñ])ssões\b/gi, "$1siones");
  str = str.replace(/([a-záéíóúñ])ência\b/gi, "$1encia");
  str = str.replace(/([a-záéíóúñ])ências\b/gi, "$1encias");
  str = str.replace(/([a-záéíóúñ])ância\b/gi, "$1ancia");
  str = str.replace(/([a-záéíóúñ])âncias\b/gi, "$1ancias");
  str = str.replace(/\bateliê\b/gi, "taller");
  str = str.replace(/\bateliês\b/gi, "talleres");
  str = str.replace(/\benchedor\b/gi, "devanador");
  str = str.replace(/\bcanelinha\b/gi, "canilla");
  str = str.replace(/\bcanelinhas\b/gi, "canillas");
  str = str.replace(/\bilhós\b/gi, "ojal");
  str = str.replace(/\bilhoses\b/gi, "ojales");
  str = str.replace(/\bsaída\b/gi, "salida");
  str = str.replace(/\bsaídas\b/gi, "salidas");
  str = str.replace(/\bsaíde la\b/gi, "salida");

  // Preposições e palavras essenciais do português
  str = str.replace(/(?<![a-záéíóúñãõçêô])em(?![a-záéíóúñãõçêô])/gi, "en");
  str = str.replace(/(?<![a-záéíóúñãõçêô])com(?![a-záéíóúñãõçêô])/gi, "con");
  str = str.replace(/(?<![a-záéíóúñãõçêô])sem(?![a-záéíóúñãõçêô])/gi, "sin");
  str = str.replace(/\bpunhos\b/gi, "puños");
  str = str.replace(/\bpunho\b/gi, "puño");
  str = str.replace(/\bpernas\b/gi, "piernas");
  str = str.replace(/\bperna\b/gi, "pierna");
  str = str.replace(/\bcalças\b/gi, "pantalones");
  str = str.replace(/\bcalcas\b/gi, "pantalones");
  str = str.replace(/\bcalça\b/gi, "pantalón");
  str = str.replace(/\bcalca\b/gi, "pantalón");
  str = str.replace(/\bmeias grossas\b/gi, "calcetines gruesos");
  str = str.replace(/\bmeias\b/gi, "calcetines / medias");
  str = str.replace(/\bmeia\b/gi, "media / calcetín");
  str = str.replace(/\bcanos de botas\b/gi, "cañas de botas");
  str = str.replace(/\bcanos\b/gi, "cañas");
  str = str.replace(/\bjalecos médicos\b/gi, "batas médicas");
  str = str.replace(/\bjalecos\b/gi, "batas / guardapolvos");
  str = str.replace(/\bjaleco\b/gi, "bata / guardapolvo");
  str = str.replace(/\bagasalho\b/gi, "ropa deportiva / buzo");
  str = str.replace(/\bagasalhos\b/gi, "ropa deportiva / buzos");
  str = str.replace(/\bcamisas sociais\b/gi, "camisas de vestir");
  str = str.replace(/\bcamisa social\b/gi, "camisa de vestir");
  str = str.replace(/\bbrasões\b/gi, "escudos");
  str = str.replace(/\bbrasoes\b/gi, "escudos");
  str = str.replace(/\bbrasão\b/gi, "escudo");
  str = str.replace(/\bbrasao\b/gi, "escudo");
  str = str.replace(/\bgolas\b/gi, "cuellos");
  str = str.replace(/\bgola\b/gi, "cuello");
  str = str.replace(/\blapelas\b/gi, "solapas");
  str = str.replace(/\blapela\b/gi, "solapa");
  str = str.replace(/\bescorregadios\b/gi, "resbaladizos");
  str = str.replace(/\bescorregadio\b/gi, "resbaladizo");
  str = str.replace(/\bcobertorzinhos de berco\b/gi, "colchas de cuna");
  str = str.replace(/\bcobertorzinhos\b/gi, "colchas");
  str = str.replace(/\bcobertorzinho\b/gi, "colcha");
  str = str.replace(/\bmaternidade\b/gi, "maternidad");
  str = str.replace(/\bcalibragem\b/gi, "calibración");
  str = str.replace(/\bfrouxas\b/gi, "flojas");
  str = str.replace(/\bfrouxo\b/gi, "flojo");
  str = str.replace(/\bfrouxos\b/gi, "flojos");
  str = str.replace(/\bfrouxa\b/gi, "floja");
  str = str.replace(/\btravamento axial mecânico positivo\b/gi, "bloqueo axial mecánico positivo");
  str = str.replace(/\btravamento\b/gi, "bloqueo");
  str = str.replace(/\bdeslocamento frontal\b/gi, "desplazamiento frontal");
  str = str.replace(/\bdeslocamento\b/gi, "desplazamiento");
  str = str.replace(/\bpincamento\b/gi, "sujeción / pinzado");
  str = str.replace(/\bpinçamento\b/gi, "sujeción / pinzado");
  str = str.replace(/\brecolhimento\b/gi, "recogida");
  str = str.replace(/\bacabamento\b/gi, "acabado");
  str = str.replace(/\bacabamentos\b/gi, "acabados");
  str = str.replace(/\bamarração\b/gi, "anudado / lazada");
  str = str.replace(/\bamarracão\b/gi, "anudado / lazada");
  str = str.replace(/\blombadas\b/gi, "uniones / relieves");
  str = str.replace(/\bcasamento\b/gi, "boda");
  str = str.replace(/\bprecisam encaixar\b/gi, "deben encajar");
  str = str.replace(/\bfios de ouro y prata\b/gi, "hilos de oro y plata");
  str = str.replace(/\bfios metalizados\b/gi, "hilos metalizados");
  str = str.replace(/\bfios finos\b/gi, "hilos finos");
  str = str.replace(/\bfio\b/gi, "hilo");
  str = str.replace(/\bfios\b/gi, "hilos");

  // Palavras e preposições residuais do português
  str = str.replace(/(?<![a-záéíóúñãõçêô])do(?![a-záéíóúñãõçêô])/gi, "del");
  str = str.replace(/(?<![a-záéíóúñãõçêô])da(?![a-záéíóúñãõçêô])/gi, "de la");
  str = str.replace(/(?<![a-záéíóúñãõçêô])das(?![a-záéíóúñãõçêô])/gi, "de las");
  str = str.replace(/(?<![a-záéíóúñãõçêô])dos(?![a-záéíóúñãõçêô])/gi, "de los");
  str = str.replace(/(?<![a-záéíóúñãõçêô])no(?![a-záéíóúñãõçêô])/gi, "en el");
  str = str.replace(/(?<![a-záéíóúñãõçêô])na(?![a-záéíóúñãõçêô])/gi, "en la");
  str = str.replace(/(?<![a-záéíóúñãõçêô])nos(?![a-záéíóúñãõçêô])/gi, "en los");
  str = str.replace(/(?<![a-záéíóúñãõçêô])nas(?![a-záéíóúñãõçêô])/gi, "en las");
  str = str.replace(/(?<![a-záéíóúñãõçêô])pelo(?![a-záéíóúñãõçêô])/gi, "por el");
  str = str.replace(/(?<![a-záéíóúñãõçêô])pela(?![a-záéíóúñãõçêô])/gi, "por la");
  str = str.replace(/(?<![a-záéíóúñãõçêô])pelos(?![a-záéíóúñãõçêô])/gi, "por los");
  str = str.replace(/(?<![a-záéíóúñãõçêô])pelas(?![a-záéíóúñãõçêô])/gi, "por las");
  str = str.replace(/(?<![a-záéíóúñãõçêô])ao(?![a-záéíóúñãõçêô])/gi, "al");
  str = str.replace(/(?<![a-záéíóúñãõçêô])aos(?![a-záéíóúñãõçêô])/gi, "a los");
  str = str.replace(/(?<![a-záéíóúñãõçêô])à(?![a-záéíóúñãõçêô])/gi, "a la");
  str = str.replace(/(?<![a-záéíóúñãõçêô])às(?![a-záéíóúñãõçêô])/gi, "a las");
  str = str.replace(/\bcom o\b/gi, "con el");
  str = str.replace(/\bcom a\b/gi, "con la");
  str = str.replace(/\bcom os\b/gi, "con los");
  str = str.replace(/\bcom as\b/gi, "con las");
  str = str.replace(/\bpara o\b/gi, "para el");
  str = str.replace(/\bpara a\b/gi, "para la");
  str = str.replace(/\bpara os\b/gi, "para los");
  str = str.replace(/\bpara as\b/gi, "para las");
  str = str.replace(/\bvocê\b/gi, "usted");
  str = str.replace(/\bvocês\b/gi, "ustedes");
  str = str.replace(/\bnão\b/gi, "no");
  str = str.replace(/\btambém\b/gi, "también");
  str = str.replace(/\bpeças\b/gi, "piezas");
  str = str.replace(/\bpeça\b/gi, "pieza");
  str = str.replace(/\btroca\b/gi, "cambio");
  str = str.replace(/\btrocas\b/gi, "cambios");
  str = str.replace(/\btecido\b/gi, "tela");
  str = str.replace(/\btecidos\b/gi, "telas");
  str = str.replace(/\bponto\b/gi, "puntada");
  str = str.replace(/\bpontos\b/gi, "puntadas");
  str = str.replace(/\blinha\b/gi, "hilo");
  str = str.replace(/\blinhas\b/gi, "hilos");
  str = str.replace(/\bagulha\b/gi, "aguja");
  str = str.replace(/\bagulhas\b/gi, "agujas");
  str = str.replace(/\bbastidor\b/gi, "bastidor");
  str = str.replace(/\bbastidores\b/gi, "bastidores");
  str = str.replace(/\bavesso\b/gi, "revés");
  str = str.replace(/\bavessos\b/gi, "reveses");
  str = str.replace(/\btoalha\b/gi, "toalla");
  str = str.replace(/\btoalhas\b/gi, "toallas");
  str = str.replace(/\bmalha\b/gi, "tejido de punto");
  str = str.replace(/\bmalhas\b/gi, "tejidos de punto");
  str = str.replace(/\bmoletom\b/gi, "sudadera");
  str = str.replace(/\bmoletons\b/gi, "sudaderas");
  str = str.replace(/\bcamisa\b/gi, "camisa");
  str = str.replace(/\bcamisas\b/gi, "camisas");
  str = str.replace(/\bcamisetas\b/gi, "remeras");
  str = str.replace(/\bcamiseta\b/gi, "remera");
  str = str.replace(/\bjaqueta\b/gi, "campera");
  str = str.replace(/\bjaquetas\b/gi, "camperas");
  str = str.replace(/\bgorros\b/gi, "gorros");
  str = str.replace(/\bgorro\b/gi, "gorro");
  str = str.replace(/\bchapéu\b/gi, "sombrero");
  str = str.replace(/\bchapéus\b/gi, "sombreros");
  str = str.replace(/\blã\b/gi, "lana");
  str = str.replace(/\bboné\b/gi, "gorra");
  str = str.replace(/\bbonés\b/gi, "gorras");
  str = str.replace(/\bviseira\b/gi, "visera");
  str = str.replace(/\bviseiras\b/gi, "viseras");
  // Termos mecânicos e industriais de precisão
  str = str.replace(/\bbarra de agulha\b/gi, "barra de aguja");
  str = str.replace(/\bbarras de agulha\b/gi, "barras de aguja");
  str = str.replace(/\bbarra de agulhas\b/gi, "barra de agujas");
  str = str.replace(/\bbarras de agulhas\b/gi, "barras de agujas");
  str = str.replace(/\bbarra estabilizadora\b/gi, "barra estabilizadora");
  str = str.replace(/\bbarra condutora\b/gi, "barra conductora");
  str = str.replace(/\bbarra de pressão\b/gi, "barra de presión");
  str = str.replace(/\bbarra de tensão\b/gi, "barra de tensión");
  str = str.replace(/\bbarrado\b/gi, "cenefa");
  str = str.replace(/\bbarrados\b/gi, "cenefas");
  str = str.replace(/\businado em aço-ferramenta\b/gi, "mecanizado en acero para herramientas");
  str = str.replace(/\businado em aco-ferramenta\b/gi, "mecanizado en acero para herramientas");
  str = str.replace(/\baço-ferramenta\b/gi, "acero para herramientas");
  str = str.replace(/\baco-ferramenta\b/gi, "acero para herramientas");
  str = str.replace(/\baço\b/gi, "acero");
  str = str.replace(/\baco\b/gi, "acero");
  str = str.replace(/\bferro nodular\b/gi, "fundición nodular");
  str = str.replace(/\bmédio carbono\b/gi, "medio carbono");
  str = str.replace(/\btemperado por indução\b/gi, "templado por inducción");
  str = str.replace(/\btemperado por inducao\b/gi, "templado por inducción");
  str = str.replace(/\btemperado\b/gi, "templado");
  str = str.replace(/\btemperados\b/gi, "templados");
  str = str.replace(/\bfenda de arraste\b/gi, "ranura de arrastre");
  str = str.replace(/\bfenda\b/gi, "ranura");
  str = str.replace(/\bfendas\b/gi, "ranuras");
  str = str.replace(/\barraste\b/gi, "arrastre");
  str = str.replace(/\bcanal de engate\b/gi, "canal de acoplamiento");
  str = str.replace(/\bengate\b/gi, "acoplamiento");
  str = str.replace(/\bdeslizamento lateral suave\b/gi, "deslizamiento lateral suave");
  str = str.replace(/\bdeslizamento\b/gi, "deslizamiento");
  str = str.replace(/\bpino de arraste\b/gi, "pasador de arrastre");
  str = str.replace(/\bpino\b/gi, "pasador");
  str = str.replace(/\bpinos\b/gi, "pasadores");
  str = str.replace(/\btroca de cores\b/gi, "cambio de color");
  str = str.replace(/\btroca de cor\b/gi, "cambio de color");
  str = str.replace(/\bfolga axial\b/gi, "holgura axial");
  str = str.replace(/\bfolgas axiais\b/gi, "holguras axiales");
  str = str.replace(/\bsem folga\b/gi, "sin holgura");
  str = str.replace(/\bfolga\b/gi, "holgura");
  str = str.replace(/\bfolgas\b/gi, "holguras");
  str = str.replace(/\bgeraria vibração harmônica e ruído\b/gi, "generaría vibración armónica y ruido metálico");
  str = str.replace(/\bgeraria vibração\b/gi, "generaría vibración");
  str = str.replace(/\bgeraria\b/gi, "generaría");
  str = str.replace(/\bharmônica\b/gi, "armónica");
  str = str.replace(/\bruído\b/gi, "ruido");
  str = str.replace(/\bparafuso prisioneiro\b/gi, "tornillo prisionero");
  str = str.replace(/\bparafusos prisioneiros\b/gi, "tornillos prisioneros");
  str = str.replace(/\bparafuso\b/gi, "tornillo");
  str = str.replace(/\bparafusos\b/gi, "tornillos");
  str = str.replace(/\btorque de aperto\b/gi, "par de apriete");
  str = str.replace(/\baperto\b/gi, "apriete");
  str = str.replace(/\bsuportar forças\b/gi, "soportar fuerzas");
  str = str.replace(/\bsuportar\b/gi, "soportar");
  str = str.replace(/\bforças de impacto\b/gi, "fuerzas de impacto");
  str = str.replace(/\bforças\b/gi, "fuerzas");
  str = str.replace(/\bforcas\b/gi, "fuerzas");
  str = str.replace(/\businado\b/gi, "mecanizado");
  str = str.replace(/\businada\b/gi, "mecanizada");
  str = str.replace(/\businados\b/gi, "mecanizados");
  str = str.replace(/\businadas\b/gi, "mecanizadas");
  str = str.replace(/\businagem\b/gi, "mecanizado");
  str = str.replace(/\bfixado na barra de agulha\b/gi, "fijado a la barra de aguja");
  str = str.replace(/\bfixado na barra\b/gi, "fijado a la barra");
  str = str.replace(/\bfixada na barra\b/gi, "fijada a la barra");
  str = str.replace(/\bfixado no\b/gi, "fijado en el");
  str = str.replace(/\bfixada no\b/gi, "fijada en el");
  str = str.replace(/\bfixado na\b/gi, "fijado en la");
  str = str.replace(/\bfixada na\b/gi, "fijada en la");
  str = str.replace(/\bfixado\b/gi, "fijado");
  str = str.replace(/\bfixada\b/gi, "fijada");

  str = str.replace(/\blençol\b/gi, "sábana");
  str = str.replace(/\blençóis\b/gi, "sábanas");
  str = str.replace(/\bguardanapo\b/gi, "servilleta");
  str = str.replace(/\bguardanapos\b/gi, "servilletas");
  str = str.replace(/\bbatizado\b/gi, "bautismo");
  str = str.replace(/\benxoval\b/gi, "ajuar");
  str = str.replace(/\benxovais\b/gi, "ajuares");
  str = str.replace(/\bcabeçote\b/gi, "cabezal");
  str = str.replace(/\bcabeçotes\b/gi, "cabezales");
  str = str.replace(/\bmulticabeças\b/gi, "multicabezal");
  str = str.replace(/\blançadeira\b/gi, "garfio");
  str = str.replace(/\blançadeiras\b/gi, "garfios");
  str = str.replace(/\bde la hilo\b/gi, "del hilo");
  str = str.replace(/\bde la cauda\b/gi, "de la cola");
  str = str.replace(/\blos puntadas\b/gi, "las puntadas");
  str = str.replace(/\bla cambio\b/gi, "el cambio");
  str = str.replace(/\bla área\b/gi, "el área");
  str = str.replace(/\bde la garfio\b/gi, "del garfio");

  // Conversão de caracteres gráficos exclusivamente portugueses residuais
  str = str.replace(/ç/g, "c").replace(/Ç/g, "C");
  str = str.replace(/ã/g, "a").replace(/Ã/g, "A");
  str = str.replace(/õ/g, "o").replace(/Õ/g, "O");
  str = str.replace(/ê/g, "e").replace(/Ê/g, "E");
  str = str.replace(/ô/g, "o").replace(/Ô/g, "O");

  return str;
}

const SPANISH_LOCALIZE_CACHE = new Map<string, Verbete>();

/**
 * Obtém rapidamente apenas o termo em espanhol de forma ultrarrápida (sem traduzir os 16 campos)
 */
export function getVerbeteTermInSpanish(verbete: Verbete): string {
  if (!verbete) return "";
  const curated = CURATED_SPANISH_VERBETES[verbete.id] || (verbete.code ? CURATED_SPANISH_VERBETES[verbete.code] : undefined) || CURATED_SPANISH_VERBETES[verbete.term];
  if (curated?.term) return curated.term;
  if (ALPHABET_TERMS_ES[verbete.term]) return ALPHABET_TERMS_ES[verbete.term];
  return translateEmbroideryTextToSpanish(verbete.term);
}

/**
 * Localiza um Verbete completo para Espanhol com Nível de Perícia de Mestre de Bordado
 */
export function expertLocalizeVerbeteToSpanish(verbete: Verbete): Verbete {
  if (!verbete) return verbete;
  const cacheKey = verbete.id || verbete.code || verbete.term;
  if (cacheKey && SPANISH_LOCALIZE_CACHE.has(cacheKey)) {
    return SPANISH_LOCALIZE_CACHE.get(cacheKey)!;
  }

  // 1. Se existir na lista curada, aplicar prioritariamente
  const curated = CURATED_SPANISH_VERBETES[verbete.id] || (verbete.code ? CURATED_SPANISH_VERBETES[verbete.code] : undefined) || CURATED_SPANISH_VERBETES[verbete.term];
  const rawCat = CATEGORY_TRANSLATIONS_ES[verbete.category] || translateEmbroideryTextToSpanish(verbete.category);
  const categoryEs = (rawCat ? rawCat.replace(/Acabamento/g, "Acabado") : rawCat) as VerbeteCategory;

  const translatedTerm = ALPHABET_TERMS_ES[verbete.term] || translateEmbroideryTextToSpanish(verbete.term);
  const curatedApps = CURATED_SPANISH_APPLICATIONS[verbete.id] || (verbete.code ? CURATED_SPANISH_APPLICATIONS[verbete.code] : undefined);

  const base: Verbete = {
    ...verbete,
    term: curated?.term || translatedTerm,
    pronunciation: curated?.pronunciation || undefined,
    category: categoryEs,
    tags: (verbete.tags ? verbete.tags.map(translateEmbroideryTextToSpanish) : verbete.tags),
    bibliographicReferences: (verbete.bibliographicReferences ? verbete.bibliographicReferences.map(translateEmbroideryTextToSpanish) : verbete.bibliographicReferences),
    applications: (curatedApps && curatedApps.length > 0) ? curatedApps : (curated?.applications && curated.applications.length > 0) ? curated.applications : (verbete.applications ? verbete.applications.map(translateEmbroideryTextToSpanish) : verbete.applications),
    level: curated?.level || (verbete.level ? translateEmbroideryTextToSpanish(verbete.level) : verbete.level),
    grammarClass: curated?.grammarClass || (verbete.grammarClass ? translateEmbroideryTextToSpanish(verbete.grammarClass) : verbete.grammarClass),
    origin: curated?.origin || (verbete.origin ? translateEmbroideryTextToSpanish(verbete.origin) : verbete.origin),
    summary: curated?.summary || curated?.quickSummary || (verbete.summary ? translateEmbroideryTextToSpanish(verbete.summary) : verbete.summary),
    definition: curated?.definition || (verbete.definition ? translateEmbroideryTextToSpanish(verbete.definition) : verbete.definition),
    technicalDetails: curated?.technicalDetails || (verbete.technicalDetails ? translateEmbroideryTextToSpanish(verbete.technicalDetails) : verbete.technicalDetails),
    beginnerExplanation: curated?.beginnerExplanation || (verbete.beginnerExplanation ? translateEmbroideryTextToSpanish(verbete.beginnerExplanation) : verbete.beginnerExplanation),
    practicalExamples: curated?.practicalExamples || (verbete.practicalExamples ? verbete.practicalExamples.map(translateEmbroideryTextToSpanish) : verbete.practicalExamples),
    matrixParametersRelation: curated?.matrixParametersRelation || (verbete.matrixParametersRelation ? translateEmbroideryTextToSpanish(verbete.matrixParametersRelation) : verbete.matrixParametersRelation),
    whenToAdjust: curated?.whenToAdjust || (verbete.whenToAdjust ? translateEmbroideryTextToSpanish(verbete.whenToAdjust) : verbete.whenToAdjust),
    curiosities: curated?.curiosities || (verbete.curiosities ? translateEmbroideryTextToSpanish(verbete.curiosities) : verbete.curiosities),
    calculatorAd: curated?.calculatorAd || (verbete.calculatorAd ? translateEmbroideryTextToSpanish(verbete.calculatorAd) : verbete.calculatorAd),
    troubleshooting: curated?.troubleshooting || verbete.troubleshooting,
    dicaArtrelados: curated?.dicaArtrelados || (curated as any)?.troubleshootingTips || (curated as any)?.consejoArtrelados || (verbete.dicaArtrelados ? translateEmbroideryTextToSpanish(verbete.dicaArtrelados) : verbete.dicaArtrelados),
    curiosidadeTecnica: curated?.curiosidadeTecnica || (verbete.curiosidadeTecnica ? translateEmbroideryTextToSpanish(verbete.curiosidadeTecnica) : verbete.curiosidadeTecnica),
    voceSabia: curated?.voceSabia || (curated as any)?.curiosities || (curated as any)?.curiosidades || (verbete.voceSabia ? translateEmbroideryTextToSpanish(verbete.voceSabia) : (verbete.curiosities ? translateEmbroideryTextToSpanish(verbete.curiosities) : undefined)),
    practicalExercise: curated?.practicalExercise || (verbete.practicalExercise ? translateEmbroideryTextToSpanish(verbete.practicalExercise) : verbete.practicalExercise),
    quickSummary: curated?.quickSummary || (verbete.quickSummary ? translateEmbroideryTextToSpanish(verbete.quickSummary) : verbete.quickSummary),
    imageCaption: curated?.imageCaption || (verbete.imageCaption ? translateEmbroideryTextToSpanish(verbete.imageCaption) : verbete.imageCaption),
    howItWorks: curated?.howItWorks || (verbete.howItWorks ? (Array.isArray(verbete.howItWorks) ? verbete.howItWorks.map(translateEmbroideryTextToSpanish) : translateEmbroideryTextToSpanish(verbete.howItWorks)) : verbete.howItWorks),
    advantages: curated?.advantages || (verbete.advantages ? verbete.advantages.map(translateEmbroideryTextToSpanish) : verbete.advantages),
    limitations: curated?.limitations || (verbete.limitations ? verbete.limitations.map(translateEmbroideryTextToSpanish) : verbete.limitations),
    commonErrors: curated?.commonErrors || (verbete.commonErrors ? verbete.commonErrors.map(translateEmbroideryTextToSpanish) : verbete.commonErrors),
    troubleshootingTips: curated?.troubleshootingTips || (verbete.troubleshootingTips ? verbete.troubleshootingTips.map(translateEmbroideryTextToSpanish) : verbete.troubleshootingTips),
    mainTypes: curated?.mainTypes || (verbete.mainTypes ? verbete.mainTypes.map(translateEmbroideryTextToSpanish) : verbete.mainTypes),
    characteristics: curated?.characteristics || (verbete.characteristics ? verbete.characteristics.map(translateEmbroideryTextToSpanish) : verbete.characteristics),
    construction: curated?.construction || (verbete.construction ? verbete.construction.map(translateEmbroideryTextToSpanish) : verbete.construction),
    numberingSystem: curated?.numberingSystem || (verbete.numberingSystem ? verbete.numberingSystem.map(translateEmbroideryTextToSpanish) : verbete.numberingSystem),
    relatedTerms: curated?.relatedTerms || (verbete.relatedTerms ? verbete.relatedTerms.map((rt) => ALPHABET_TERMS_ES[rt] || translateEmbroideryTextToSpanish(rt)) : verbete.relatedTerms),
    recommendedSettings: curated?.recommendedSettings || (verbete.recommendedSettings ? {
      speedPPM: verbete.recommendedSettings.speedPPM ? translateEmbroideryTextToSpanish(verbete.recommendedSettings.speedPPM) : undefined,
      needleType: verbete.recommendedSettings.needleType ? translateEmbroideryTextToSpanish(verbete.recommendedSettings.needleType) : undefined,
      stabilizer: verbete.recommendedSettings.stabilizer ? translateEmbroideryTextToSpanish(verbete.recommendedSettings.stabilizer) : undefined,
      density: verbete.recommendedSettings.density ? translateEmbroideryTextToSpanish(verbete.recommendedSettings.density) : undefined,
      threadTension: verbete.recommendedSettings.threadTension ? translateEmbroideryTextToSpanish(verbete.recommendedSettings.threadTension) : undefined,
    } : undefined),
  };

  if (cacheKey) {
    SPANISH_LOCALIZE_CACHE.set(cacheKey, base);
  }

  return base;
}

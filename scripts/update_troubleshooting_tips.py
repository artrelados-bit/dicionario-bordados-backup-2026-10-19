import json
import re

# Curated Spanish troubleshooting tips for all 27 verbetes
TIPS_ES = {
  "b-babador-e-prendedor-de-chupeta-acessorios-infantis": [
    "Si la tela de forro se desplaza al coser el pespunte de cierre: Asegure los bordes con cinta adhesiva de papel para bordado (micropore textil) antes de la puntada perimetral.",
    "Si el accesorio infantil queda arrugado al darle la vuelta: Realice piquetes triangulares en las curvas exteriores con tijera de pico de pato sin cortar la costura.",
    "Si las puntadas se hunden en el rizo de la toalla: Coloque film plástico hidrosoluble sobre la parte superior del babero antes de bordar el diseño."
  ],
  "b-104-baby-lock-maquinas-de-bordado-eletronico": [
    "Si la cámara de posicionamiento IQ no enfoca con nitidez: Limpie el lente óptico con un paño de microfibra seco para fotografía.",
    "Si el cortahilos automático no corta el hilo de la canilla: Retire la placa de aguja y aspire la pelusa acumulada en la cuchilla móvil.",
    "Si la máquina se detiene con error de bastidor: Compruebe que el brazo conector del bastidor magnético esté encajado firmemente en su guía."
  ],
  "b-008-backing": [
    "Si el bordado se frunce o encoge al lavar la prenda: Sustituya la entretela rasgable por entretela recortable (cutaway) de 80 g/m².",
    "Si los contornos quedan desfasados respecto al relleno: Agregue una segunda capa de entretela cruzada a 90 grados para neutralizar la elasticidad del tejido.",
    "Si quedan restos blancos visibles tras rasgar la entretela: Humedezca los bordes con un bastoncillo de agua para ablandar las fibras antes de tirar."
  ],
  "b-071-backing-textil-entretela-estrutural": [
    "Si la entretela termoadhesiva forma burbujas: Aumente la presión de la prensa térmica a 4 bares y mantenga el calor a 150 °C durante 12 segundos.",
    "Si la prenda queda excesivamente acartonada: Reduzca el gramaje del backing a 90 g/m² o use entretela de soporte flexible de poliamida.",
    "Si el contorno exterior se desprende tras el corte: Asegure un ribeteado satinado denso con un ancho mínimo de 3,5 mm sobre el borde sellado."
  ],
  "b-105-bai-baili-maquinas-de-bordado-eletronico": [
    "Si la aguja golpea el bastidor de gorras: Verifique en la pantalla Dahao que el límite de campo esté configurado para sistema tubular de 270 grados.",
    "Si se producen falsas alarmas de rotura de hilo en las agujas 12 a 15: Limpie los rodillos sensores ópticos superiores con aire comprimido seco.",
    "Si el motor principal vibra a más de 900 PPM: Asegure que los cuatro pies niveladores de la máquina descansen firmemente sobre el piso de concreto."
  ],
  "b-065-bainha-aberta-computadorizada-openwork": [
    "Si el calado queda cerrado tras el bordado: Asegúrese de usar aguja wing needle número 100/16 o 120/19 y lino puro de ligamento abierto.",
    "Si el hilo superior se parte al frotar con la aleta: Reduzca la velocidad de bordado a 400 PPM y reduzca la tensión superior un 15%.",
    "Si la aleta de la aguja roza la placa metálica: Compruebe que la máquina admita el ancho del orificio ovalado de la placa para aguja de aleta."
  ],
  "b-040-bainha-aberta-eletronica": [
    "Si los calados se deforman al retirar el estabilizador: Utilice siempre film hidrosoluble doble y disuélvalo sumergiendo la prenda en agua tibia sin frotar.",
    "Si la aguja rompe los hilos de la urdimbre: Use aguja de punta de bola ligera para que separe los hilos sin cortarlos.",
    "Si la greca se curva en las esquinas: Programe giros ingleteados con reducción de velocidad en los vértices en el software de digitalización."
  ],
  "b-bainha-aberta-em-ponto-cheio": [
    "Si los orificios calados quedan tapados por el satén: Aumente la distancia entre el centro del calado y el borde interior de la columna satinada a 1,5 mm.",
    "Si el cordoncillo satinado se deshilacha en los bordes: Programe una puntada de refuerzo recta bajo el satén antes de ejecutar la columna densa.",
    "Si la tela se frunce a lo largo del festón: Afloje ligeramente la tensión del hilo superior y use estabilizador al agua de alta resistencia."
  ],
  "b-087-balanco-de-ponto-e-compensacao-de-inercia-do-pantografo": [
    "Si las figuras geométricas circulares se bordan ovaladas a alta velocidad: Reduzca la velocidad a 750 PPM y ajuste la tensión de las correas dentadas de los ejes X e Y.",
    "Si las esquinas puntiagudas quedan achatadas o redondeadas: Active en el software la compensación de esquina inteligente o reduzca la aceleración del pantógrafo.",
    "Si escucha ruidos sordos de golpe al cambiar de dirección: Verifique la holgura en los acoples del servomotor con un comparador de esfera."
  ],
  "b-082": [
    "Si no aparece hilo blanco de la canilla en el reverso: Afloje el tornillo de la caja de bobina un cuarto de vuelta o apriete el tensor superior del hilo de color.",
    "Si el hilo blanco sube a la cara frontal de la prenda: Apriete el tornillo de la caja de bobina o afloje el tensor superior hasta restablecer la proporción de 1/3.",
    "Si la tensión varía entre diferentes agujas de la máquina: Calibre individualmente cada perilla de tensión superior utilizando un tensiómetro digital o de resorte."
  ],
  "overhang-balanco-frontal-braco-pantografo": [
    "Si el prensatelas golpea la tela en la parte frontal del bastidor: Monte la mesa plana de apoyo auxiliar para descargar el peso de prendas pesadas.",
    "Si los brazos del pantógrafo vibran intensamente a más de 800 PPM: Revise el apriete de los tornillos de las guías lineales y limpie los rieles prismáticos.",
    "Si el diseño se desalinea en la parte delantera del bastidor: Verifique que las abrazaderas laterales del pantógrafo no tengan holgura mecánica."
  ],
  "b-113-bandeja-coletora-oleo-residual-drenagem-cabecote": [
    "Si la bandeja rebosa lubricante: Drene el depósito aflojando la válvula inferior y limpie el filtro tamiz con desengrasante biodegradable.",
    "Si el aceite drenado presenta coloración oscura con partículas: Alerta de desgaste severo por fricción seca en bujes o bielas; solicite revisión técnica urgente.",
    "Si percibe olor a aceite recalentado en el cabezal: Compruebe que la bomba de lubricación automática no esté bombeando caudal en exceso."
  ],
  "b-066-bandeja-de-desbobinamento-porta-cones-thread-stand": [
    "Si el hilo forma nudos y lazos antes de entrar al tensor: Eleve la varilla telescópica del portaconos a su altura máxima (al menos 35 cm sobre el cono).",
    "Si el hilo resbala y cae a la base del cono (efecto charco): Coloque una malla elástica de protección para carretes cubriendo el cono.",
    "Si el soporte se tambalea o vuelca: Asegúrese de que la base metálica pesada descanse sobre una superficie plana, firme y nivelada."
  ],
  "b-015-barra-de-agulha": [
    "Si la máquina salta puntadas sistemáticamente en una sola aguja: Compruebe si la altura de esa barra de aguja subió tras un quiebre fuerte.",
    "Si la barra se calienta durante el trabajo continuo: Aplique una gota de aceite mineral blanco en las ranuras de la barra cada 40 horas de producción.",
    "Si la barra se traba al bajar: Limpie el buje superior retirando hilos y pelusas compactadas con una aguja de limpieza."
  ],
  "b-107-barra-de-agulha-e-bucha-guia-needle-bar-bushing": [
    "Si la aguja quiebra continuamente o roza la punta del garfio: Compruebe si la barra tiene holgura; con la máquina apagada, mueva la barra hacia adelante y hacia atrás: si hay juego visible, los bujes deben reemplazarse.",
    "Si la máquina produce un chirrido agudo metálico en el cabezal: Falta lubricación urgente; aplique una sola gota de aceite mineral blanco en el fieltro superior y gire manualmente el volante.",
    "Si se producen saltos continuos sin rotura de hilo: Calibre la altura de la barra para que el ojo de la aguja quede entre 0,5 mm y 1,0 mm por debajo de la punta del garfio."
  ],
  "b-063-barra-de-agulha-needle-bar": [
    "Si la máquina comenzó a saltar puntadas tras romperse una aguja: La barra pudo haberse desplazado hacia arriba por el impacto; calibre la altura del punto muerto inferior.",
    "Si la aguja se cae durante el bordado: Apriete el tornillo de fijación con el destornillador original aplicando firmeza moderada sin forzar.",
    "Si el hilo se deshilacha justo al descender: Compruebe que el orificio de inserción de la barra de aguja no tenga rebabas o muescas cortantes."
  ],
  "b-073-barra-de-agulhas-multiplas-troca-de-cor": [
    "Si la máquina se traba durante el cambio de color: Limpie el sensor óptico de posición del cabezal y aplique una gota de aceite blanco en el riel deslizante.",
    "Si una aguja específica rompe el hilo constantemente: Verifique que el ojal del guiahilos de esa barra específica no tenga ranuras ni rebabas.",
    "Si el reciprocador no engancha la barra: Ajuste la sincronización de reposo de la leva de cambio de color en el panel de control."
  ],
  "b-109-barra-de-iluminacao-led-spot-focado-agulha": [
    "Si el LED parpadea o alumbra débilmente: Revise la fuente de alimentación de 12V y ajuste los conectores de la placa electrónica.",
    "Si la luz parece más tenue que antes: Limpie la lente plástica protectora con un paño de microfibra humedecido en alcohol isopropílico para retirar pelusas y restos de aceite.",
    "Si la lámpara flexible no sostiene su posición: Apriete los tornillos de la base o coloque una abrazadera de sujeción para neutralizar la vibración de la máquina."
  ],
  "b-053-barra-de-pressao-e-regulador-do-calcador": [
    "En máquinas domésticas y semindustriales: Ajuste la presión del prensatelas a valores negativos (-1 o -2) en piezas gruesas para no aplastar el tejido.",
    "En bordadoras industriales: Regule la altura del prensatelas en el menú técnico a 3,5 mm o 4,0 mm al trabajar con mantas o prendas acolchadas.",
    "Si la máquina produce chasquidos al mover el bastidor en toallas: El prensatelas está ejerciendo presión excesiva; afloje el regulador superior."
  ],
  "b-051-barra-tensao-fios": [
    "Compruebe visualmente que el hilo de cada aguja pase por todos los orificios de la barra sin cruzarse con los hilos adyacentes.",
    "Pase un hilo de algodón limpio y seco entre los discos de pre-tensión para remover restos de cera y pelusas acumuladas.",
    "Utilice mallas protectoras en conos de hilo metálico para evitar que el hilo resbale y caiga flojo sobre la base de la barra."
  ],
  "b-097-barra-estabilizadora-de-agulhas-multiplas-e-guia-anti-deflexao": [
    "Si la barra de aguja desciende pesada o se traba a medio recorrido: Aplique 1 gota de aceite de máquina puro en la ranura de la barra estabilizadora y mueva manualmente.",
    "Si escucha un zumbido de vibración aguda en el cabezal a 1.000 PPM: Verifique el apriete de los tornillos de fijación de la barra estabilizadora en el chasis frontal.",
    "Si la aguja raspa el garfio únicamente al bordar telas gruesas: La barra estabilizadora puede presentar holgura excesiva en las ranuras de guía."
  ],
  "b-093-barra-estabilizadora-de-tensao-superior-pente-guia-fios": [
    "Si el hilo salta fuera del tensor durante el bordado rápido: Verifique que el hilo pase correctamente por el orificio central de la barra estabilizadora.",
    "Si el hilo presenta deshilachados antes de llegar a la aguja: Examine los anillos cerámicos con lupa; si hay cerámica fisurada o con muesca cortante, reemplace el ojal.",
    "Si un hilo inactivo cae y se enreda en el cono vecino: Pase el hilo por el fieltro de retención de la barra superior para mantenerlo ligeramente tenso."
  ],
  "b-088-barramento-can-bus-em-maquinas-de-bordar": [
    "Si la máquina reporta error de fallo de comunicación con cabezal: Verifique que el cable del bus CAN no tenga conectores flojos ni pines oxidados.",
    "Si todos los sensores dejan de responder al mismo tiempo: Mida con un multímetro la resistencia entre las líneas CAN-H y CAN-L (debe indicar aproximadamente 60 ohmios con terminadores correctos).",
    "Si la pantalla se reinicia durante cambios de color: Revise la toma a tierra física del taller para eliminar picos de inducción electromagnética."
  ],
  "b-102-barudan-maquinas-de-bordado-eletronico": [
    "Si la punta del hilo se deshilacha a alta velocidad: Verifique la orientación de la aguja DBxK5 (ranura frontal a 0 grados) y compruebe que no esté despuntada.",
    "Si aparece alarma de fin de carrera (Limit Switch Error): Recentre la matriz en la pantalla asegurando que el diseño respete los márgenes del bastidor.",
    "Si el bordado 3D en gorra perfora la goma EVA sin cubrirla: Reduzca la velocidad a 700 PPM, aumente la densidad de satén un 15% y use aguja de punta de bola ligera 80/12."
  ],
  "b-084-base-antiestatica-para-cones-de-linha": [
    "Si nota que el hilo se pega por estática al cono plástico: Instale una almohadilla antiestática conductiva y humidifique ligeramente el ambiente del taller.",
    "Si el cono vibra y genera ruido en el portaconos a alta velocidad: Coloque el disco de goma bajo la base del carrete para absorber la vibración mecánica.",
    "Si el hilo se rompe repetidamente siempre en el mismo cono: Revise que la base del carrete no tenga rebabas plásticas que enganchen el hilo al descender."
  ],
  "b-080": [
    "Si el tejido se desplaza u ondula al bordar con técnica de tela flotante: Incorpore la puntada de hilván perimetral como primer paso de la matriz.",
    "Si las puntadas de hilván resultan difíciles de retirar con pinza: Aumente la longitud de puntada a 5,0 mm o 6,0 mm en el software de digitalización.",
    "Si el hilván atraviesa un área que llevará relleno denso de tatami: Programe el hilván únicamente en los bordes exteriores del diseño."
  ],
  "b-054-base-de-cones-e-porta-carretel-vertical": [
    "Mantenga la varilla telescópica siempre extendida a la altura máxima para que el hilo ascienda en línea vertical perpendicular.",
    "Posicione el soporte de conos entre 5 y 10 cm detrás de la máquina, alineado con las guías de entrada del cabezal.",
    "Para hilos metálicos o resbaladizos, coloque una malla protectora en el cono para evitar que el hilo caiga en la base del soporte."
  ]
}

def update_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Load JSON from export
    m = re.search(r"export const (\w+) = (\{[\s\S]+\});\s*$", content)
    if not m:
        print("Could not match export in", path)
        return
    var_name = m.group(1)
    data = json.loads(m.group(2))

    for verb_id, tips in TIPS_ES.items():
        if verb_id in data:
            data[verb_id]["troubleshootingTips"] = tips

    new_content = f'import {{ Verbete }} from "../../types";\n\nexport const {var_name}: Record<string, Partial<Verbete>> = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Updated", path)

update_file("src/data/lote1_b/part1.ts")
update_file("src/data/lote1_b/part2.ts")
update_file("src/data/lote1_b/part3.ts")

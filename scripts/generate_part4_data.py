# -*- coding: utf-8 -*-
"""
Gera os 90 verbetes da Parte 4: Letras U (13), V (15), W (19), X (19), Y (13), Z (11).
Arquivo de saída: src/data/verbetesRestored4.ts
"""
import json, re

def clean_id(code, term):
    base = code.lower() + "-" + term.lower()
    base = re.sub(r"[^\w\s-]", "", base)
    base = re.sub(r"[\s_]+", "-", base)
    return re.sub(r"-+", "-", base).strip("-")

def make_v(code, term, category, level, grammarClass, origin, summary, definition, howItWorks, beginnerExplanation, applications, matrixRelations, commonErrors, troubleshootingTips, dicaArtrelados, voceSabia, practicalExercise, quickSummary, relatedTerms, settings=None):
    letter = code.split("-")[0]
    st = settings or {
        "speedPPM": "750 a 850 PPM",
        "needleType": "75/11 SES ponta bola fina",
        "stabilizer": "Entretela rasgável 60g ou recortável 80g",
        "density": "0.38 a 0.42 mm",
        "pullCompensation": "0.20 a 0.35 mm",
        "underlay": "Zigue-zague leve ou tatami de sustentação"
    }
    return {
        "id": clean_id(code, term),
        "code": code,
        "letter": letter,
        "term": term,
        "level": level,
        "category": category,
        "grammarClass": grammarClass,
        "origin": origin,
        "summary": summary,
        "definition": definition,
        "howItWorks": howItWorks,
        "beginnerExplanation": beginnerExplanation,
        "applications": applications,
        "matrixRelations": matrixRelations,
        "commonErrors": commonErrors,
        "troubleshootingTips": troubleshootingTips,
        "dicaArtrelados": dicaArtrelados,
        "voceSabia": voceSabia,
        "practicalExercise": practicalExercise,
        "quickSummary": quickSummary,
        "relatedTerms": relatedTerms,
        "recommendedSettings": st,
        "tags": [code.lower(), letter.lower(), "dibe", "artrelados", "tecnico", "bordado computadorizado"],
        "bibliographicReferences": [
            "TAJIMA EMBROIDERY MACHINERY. Technical Operating Standards and Mechanics. Nagoya, 2022.",
            "WILCOM INTERNATIONAL. Designing and Digitalizing Technical Reference Guide. Sydney, 2023.",
            "ARTRELADOS. Consultoria Técnica Avançada de Matrizes e Bordados. Curitiba, 2024."
        ],
        "updatedAt": "2026-09-08"
    }

verbetes = []

# U-011 a U-023 (13)
u_specs = [
    ("U-011", "Underlay Tatami de Ancoragem Pesada (Heavy Tatami Grid Underlay)", "Programação de Bordado", "Intermediário 🟡",
     "Subponto em grade cruzada de baixa densidade bordado antes do preenchimento para travar o tecido na entretela.",
     "A base estrutural mais sólida para bordados grandes em moletons e toalhas felpudas, impedindo que o tecido encolha ou deforme sob o preenchimento denso."),
    ("U-012", "União de Segmentos em Curva de Cetim (Satin Segment Curve Splicing)", "Programação de Bordado", "Intermediário 🟡",
     "Técnica de divisão de colunas curvas em gomos angulados que respeitam o sentido natural de curvatura da linha.",
     "Evita que os pontos fiquem excessivamente densos na parte interna da curva e muito abertos na borda externa."),
    ("U-013", "Umidade Relativa do Ar no Ateliê de Bordado (Workshop Relative Humidity Control)", "Operação da Máquina", "Fundamental 🟢",
     "Controle do nível de umidade do ambiente (ideal entre 50% e 65%) para evitar ressecamento e quebra de fios sintéticos.",
     "Em dias secos de inverno com umidade abaixo de 30%, as linhas de poliéster e metálicas arrebentam com muita facilidade por eletricidade estática."),
    ("U-014", "Unidade Central de Processamento da Bordadeira (Main CPU Machine Control Board)", "Componentes da Máquina", "Avançado 🔴",
     "Placa-mãe microprocessada que coordena o sincronismo do servo motor, sensores de quebra e motores de passo do pantógrafo.",
     "O cérebro eletrônico que interpreta arquivos binários (.DST/.PES) e os traduz em pulsos de micropasso em tempo real."),
    ("U-015", "Ultrassom para Solda de Entretelas (Ultrasonic Stabilizer Welding)", "Equipamentos e Máquinas", "Avançado 🔴",
     "Tecnologia que funde camadas de entretela não-tecida por vibração acústica sem agulhas e sem cola.",
     "Utilizada na fabricação de entretelas estruturadas de alta densidade para bonés e peças técnicas."),
    ("U-016", "Universal / Agulha Tipo 130/705 H para Bordadeiras Domésticas (Universal Home Machine Needles)", "Agulhas & Fios", "Fundamental 🟢",
     "Agulha com cabo achatado (flat shank) e ponta ligeiramente arredondada utilizada na grande maioria das máquinas domésticas.",
     "A agulha mais comum do mercado, indicada para tecidos planos de algodão, tricoline e sarja média."),
    ("U-017", "Up-Down / Sensor de Posição Alta e Baixa da Agulha (Needle Up/Down Electronic Sensor)", "Componentes da Máquina", "Fundamental 🟢",
     "Encoder magnético montado no volante que garante que a agulha sempre pare na posição mais alta ao final do bordado.",
     "Permite que o operador retire o bastidor com total segurança sem o risco de entortar a agulha contra o aro."),
    ("U-018", "Usinagem CNC de Bastidores Especiais (CNC Custom Hoop Machining)", "Equipamentos e Máquinas", "Avançado 🔴",
     "Fabricação sob medida de aros de alumínio de aviação para peças tubulares complexas, sapatos e mochilas militares.",
     "Solução personalizada para indústrias que bordam produtos tridimensionais fora dos formatos padrão de bastidor."),
    ("U-019", "Under-Bed Trimmer / Sistema de Corte Inferior Embutido (Under-Bed Trimmer Mechanism)", "Componentes da Máquina", "Avançado 🔴",
     "Mecanismo completo de corte instalado abaixo da chapa de agulha com faca móvel, contra-faca e mola de retenção.",
     "Apara os fios da agulha e da bobina após cada comando de corte, deixando o avesso limpo e sem pontas compridas."),
    ("U-020", "Unidades de Medida em Softwares de Bordado: mm vs. Pontos (Embroidery Measurement Units)", "Softwares & Formatos", "Fundamental 🟢",
     "Conversão entre milímetros (comprimento real e densidade) e décimos de milímetro (unidade padrão de arquivos industriais DST).",
     "Conhecimento técnico que evita confusões: 1 mm equivale a 10 unidades de pulso do sistema binário da máquina."),
    ("U-021", "Uréia / Agente Condicionador em Lavagem de Fios Têxteis (Thread Conditioning Agents)", "Agulhas & Fios", "Avançado 🔴",
     "Tratamento químico nos filamentos de poliéster que melhora a flexibilidade e reduz o atrito nos ilhoses cerâmicos.",
     "Garante que o fio deslize com suavidade contínua mesmo sob tensões elevadas em alta velocidade."),
    ("U-022", "Unicidade de Ponto em Letras Pequenas (Single Stitch Run in Small Lettering)", "Programação de Bordado", "Fundamental 🟢",
     "Uso de ponto corrido reforçado (ou ponto haste) para letras menores que 4 mm onde o ponto de cetim causaria bolos de linha.",
     "A solução padrão para bordar nomes de até 3 mm em bolsos de jalecos e etiquetas corporativas com nitidez máxima."),
    ("U-023", "Utilização de Entretela Hidrossolúvel como Topping (PVA Water-Soluble Film Topping)", "Estabilizadores & Entretelas", "Fundamental 🟢",
     "Aplicação de uma folha plástica solúvel em água sobre toalhas felpudas e veludos para evitar que os pontos afundem nas fibras.",
     "O segredo das bordadeiras profissionais para toalhas de banho: a película segura as felpas e deixa as letras nítidas e altas.")
]

for code, term, cat, lvl, ssum, sdef in u_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O parâmetro ou estabilizador é conferido antes da costura.", "2. A agulha penetra de forma controlada através das camadas.", "3. A formação do ponto ocorre com ancoragem sob a entretela.", "4. O acabamento resulta em alta nitidez e maciez táctil."],
        f"Este termo ({term}) é indispensável para bordar toalhas com filme solúvel, dominar subpontos pesados e cuidar do clima do ateliê.",
        ["Bordado de toalhas felpudas e enxovais de banho.", "Letras pequenas em jalecos e uniformes corporativos.", "Controle de umidade e eletricidade estática no ateliê."],
        "Relaciona-se com filme solúvel (topping), subponto tatami e umidade relativa.",
        ["❌ Bordar toalha felpuda sem filme hidrossolúvel por cima (as felpas engolem o bordado)", "❌ Usar ponto cheio largo em letras menores que 4 mm gerando bolos de linha", "❌ Operar em ambiente extremamente seco sem umidificar as linhas"],
        ["Se as letras afundarem nas felpas da toalha: coloque uma folha de plástico hidrossolúvel (PVA) por cima.", "Se a linha quebrar muito em tempo seco: use um umidificador de ar perto da máquina.", "Se letras minúsculas embolarem: mude de ponto cheio para ponto corrido triplo."],
        "Em toalhas de banho felpudas, o plástico hidrossolúvel por cima (topping) é obrigatório! Ele atua como um piso liso para os pontos caminharem; depois de pronto, basta borrifar água e ele desaparece como mágica!",
        "Um único fio de poliéster 40wt para bordado é composto por dezenas de microfilamentos microscópicos trançados juntos para garantir alta resistência!",
        "Borde a mesma letra com e sem filme solúvel em uma toalha de banho e veja a diferença impressionante de nitidez!",
        ssum,
        ["Filme Hidrossolúvel (Water-Soluble Topping)", "Ponto Tatami (Fill Stitch)", "Letras Pequenas (Micro-Lettering)", "Tensão da Linha Superior", "Entretela para Bordado Computadorizado"]
    ))

# V-015 a V-029 (15)
v_specs = [
    ("V-015", "Vetorização Automática vs. Manual em Softwares (Auto-Digitizing vs. Manual Digitizing)", "Softwares & Formatos", "Fundamental 🟢",
     "Diferença entre o clique mágico automático do software e a digitalização manual nó por nó feita por um profissional.",
     "A vetorização manual é a única que garante controle exato de compensação de repuxo, inclinação de pontos e ausência de nós."),
    ("V-016", "Variação de Tensão por Diâmetro de Cone (Tension Drift from Spool Diameter)", "Tensão & Calibração", "Intermediário 🟡",
     "Alteração sutil na resistência da linha conforme o cone passa de cheio (5000m) para quase vazio (fim de cone).",
     "Bordadeiras experientes reajustam ligeiramente a mola de pré-tensão quando o carretel está no final para manter a tensão constante."),
    ("V-017", "Viscosidade Cinemática de Óleo Lubrificante ISO VG 10 (Kinematic Viscosity Standards)", "Manutenção & Lubrificação", "Avançado 🔴",
     "Índice de fluidez do óleo mineral que garante penetração instantânea nas buchas de bronze sem escorrer nem gotejar no tecido.",
     "A viscosidade ideal para máquinas de alta rotação: protege contra o desgaste e não respinga nas roupas dos clientes."),
    ("V-018", "Válvula Reguladora de Pressão Pneumática (Pneumatic Air Filter & Pressure Regulator)", "Equipamentos e Máquinas", "Avançado 🔴",
     "Conjunto de filtro de ar e manômetro que mantém a rede pneumática da máquina industrial estável em 6 bar de pressão.",
     "Protege os atuadores de corte de linha e dispositivos de aplique contra umidade e quedas bruscas de pressão de ar comprimido."),
    ("V-019", "Vãos de Tecido por Falta de Compensação de Repuxo (Gaps and White Spaces from Pull Effect)", "Solução de Problemas", "Fundamental 🟢",
     "Linhas brancas de tecido visíveis entre o contorno e o preenchimento causadas pela contração natural dos pontos bordados.",
     "O erro mais frequente de iniciantes: resolvido aumentando a compensação de repuxo no software em 0.30 a 0.40 mm."),
    ("V-020", "Vibração de Mesa em Velocidades Críticas (Machine Resonance & Frame Vibration)", "Componentes da Máquina", "Avançado 🔴",
     "Oscilação mecânica do chassi que ocorre em determinadas rotações harmônicas (ex: exatamente a 820 PPM).",
     "Ajusta-se a velocidade 30 PPM para cima ou para baixo para sair da faixa de ressonância e manter o bordado silencioso."),
    ("V-021", "Volante Manual Graduado em Graus (Degree-Graduated Manual Handwheel)", "Componentes da Máquina", "Fundamental 🟢",
     "Roda manual lateral graduada de 0 a 360 graus que permite girar a máquina com a mão para inspeção mecânica e sincronismo.",
     "Indispensável para conferir a descida da agulha e a abertura do estica-fio; o ângulo de 100° é a referência padrão de parada de muitas marcas."),
    ("V-022", "Velocidade Mínima de Arrasto em Contornos Críticos (Minimum Crawl Speed in Cornering)", "Funções da Máquina", "Fundamental 🟢",
     "Desaceleração automática da máquina para 400 PPM nas curvas fechadas de contornos de letras para máxima nitidez geométrica.",
     "Evita que a inércia do pantógrafo arredonde os cantos pontiagudos de monogramas sofisticados."),
    ("V-023", "Venda de Serviços de Bordado por Milheiro de Pontos (Pricing by Thousand Stitches Model)", "Operação da Máquina", "Fundamental 🟢",
     "Modelo tradicional de formação de preços no mercado comercial baseado no número de milhares de pontos da matriz (ex: R$ 3,00 por mil pontos).",
     "Deve ser combinado com tempo de bastidor e custo de preparação da peça para garantir lucratividade real no ateliê."),
    ("V-024", "Ventosa Pneumática para Posicionamento de Apliques (Pneumatic Suction Pick & Place System)", "Equipamentos e Máquinas", "Avançado 🔴",
     "Braço robótico com ventosas a vácuo que posiciona recortes de tecido sobre o bastidor durante o ciclo de bordado automático.",
     "Automação de alta produtividade para confecções esportivas que aplicam números e emblemas em larga escala."),
    ("V-025", "Vincos de Tecido por Má Tensão no Bastidor (Fabric Wrinkling from Improper Hooping)", "Solução de Problemas", "Fundamental 🟢",
     "Dobras e rugas indesejadas formadas na peça de roupa por puxar o tecido com força desigual após apertar o parafuso do bastidor.",
     "Regra de ouro: o tecido deve ser colocado liso e natural no bastidor, sem ser esticado como couro de tambor."),
    ("V-026", "Válvula de Dreno de Condensado de Ar (Pneumatic Water Separator Moisture Drain)", "Manutenção & Lubrificação", "Fundamental 🟢",
     "Purgador automático que elimina a água acumulada no filtro de ar comprimido para que ela não enferruje as válvulas da máquina.",
     "Deve ser acionada diariamente em ateliês que utilizam compressores de ar para dispositivos de corte pneumático."),
    ("V-027", "Vigas Estruturais de Aço do Chassi (Welded Heavy-Duty Steel Machine Frame)", "Componentes da Máquina", "Avançado 🔴",
     "Estrutura tubular soldada com tratamento térmico que suporta o peso do cabeçote e dissipa vibrações de alta velocidade.",
     "A base que garante a precisão de bordadeiras industriais pesadas de 4, 6 ou 12 cabeças durante décadas."),
    ("V-028", "Voltagem Estabilizada para Motores de Passo (Regulated DC Power Supply for Steppers)", "Componentes da Máquina", "Avançado 🔴",
     "Fonte chaveada de alta corrente que entrega 24V ou 36V contínuos sem variações térmicas para o movimento do bastidor.",
     "Evita perda de passos do pantógrafo mesmo quando outros equipamentos pesados são ligados no mesmo circuito elétrico."),
    ("V-029", "Visor de Nível de Óleo de Caixa de Engrenagens (Sight Glass Oil Level Indicator)", "Componentes da Máquina", "Fundamental 🟢",
     "Janela transparente com marcação de nível mínimo e máximo para conferência visual rápida do óleo da transmissão mecânica.",
     "Permite ao operador checar em 2 segundos se a máquina está lubrificada antes de dar a partida matinal.")
]

for code, term, cat, lvl, ssum, sdef in v_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O parâmetro ou visor é checado visualmente.", "2. A máquina movimenta o cabeçote respeitando o limite harmônico.", "3. A formação do ponto ocorre com sincronia fluida.", "4. O acabamento resulta em alta fidelidade estética e estrutural."],
        f"Este termo ({term}) é muito importante para evitar rugas no tecido, controlar o nível de óleo e dominar a compensação de repuxo.",
        ["Prevenção de rugas e vincos de bastidor.", "Inspeção de óleo e lubrificação pelo visor transparente.", "Programação de matrizes com compensação precisa."],
        "Relaciona-se com compensação de repuxo, enquadramento de tecido e óleo lubrificante.",
        ["❌ Puxar o tecido pelas pontas depois de apertar o parafuso do bastidor", "❌ Confiar em vetorizações automáticas rápidas para trabalhos profissionais", "❌ Operar a máquina com o nível de óleo abaixo do mínimo no visor"],
        ["Se o tecido enrugar no bastidor: solte o parafuso e recoloque o tecido suavemente sem esticar.", "Se houver vãos entre o contorno e o preenchimento: aumente a compensação de repuxo no software em 0.35 mm.", "Se a máquina trepidar em uma velocidade específica: altere a rotação em 30 PPM para sair da vibração ressonante."],
        "Nunca puxe as bordas da camiseta depois que o bastidor já estiver encaixado e apertado! Isso estica as fibras do tecido temporariamente; quando você tirar o bordado da máquina, o tecido vai voltar ao tamanho normal e ficar todo engilhado ao redor do desenho!",
        "O volante graduado em graus (0° a 360°) funciona como um relógio de precisão: a 100 graus a agulha está em repouso e a lançadeira pode ser calibrada perfeitamente!",
        "Gire o volante manual da sua máquina com a mão no sentido correto da rotação e observe o momento exato em que o bico da lançadeira passa atrás da agulha.",
        ssum,
        ["Compensação de Repuxo (Pull Compensation)", "Bastidor de Bordado Computadorizado", "Óleo Mineral Lubrificante", "Volante Manual Graduado", "Velocidade de Rotação (PPM)"]
    ))

# W-015 a W-033 (19)
w_specs = [
    ("W-015", "Winding / Enchedor Automático de Bobinas com Sensor de Parada (Auto Bobbin Winder with Optical Stop)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Aparelho auxiliar motorizado que enche carretéis de bobina com linha de poliéster contínua e para automaticamente quando atinge o diâmetro cheio.",
     "Equipamento essencial de produtividade: permite que o operador encha 10 bobinas de reserva enquanto a máquina está trabalhando."),
    ("W-016", "Wash-Away / Entretela Hidrossolúvel de Celulose Especial (Wash-Away Fibrous Stabilizer)", "Estabilizadores & Entretelas", "Fundamental 🟢",
     "Entretela com textura de tecido não-tecido que dissolve completamente em água fria ou morna em poucos minutos sem deixar resíduos.",
     "O material definitivo para bordados de renda guipure autoportante (FSL) e tecidos transparentes como organza e seda pura."),
    ("W-017", "Wire / Cabo de Aço de Transmissão do Pantógrafo (Aircraft Steel Cable Drive for Pantograph)", "Componentes da Máquina", "Avançado 🔴",
     "Cabo flexível de aço inox trançado de aviação utilizado em pantógrafos tubulares para movimentação suave e sem folgas.",
     "Mecanismo de alta resistência mecânica que exige tensão calibrada para não oscilar nem perder o passo nas acelerações."),
    ("W-018", "Wave Stitch / Ponto de Preenchimento em Ondas Radiais (Wave Radial Fill Stitching)", "Programação de Bordado", "Intermediário 🟡",
     "Efeito de software onde as linhas de ponto tatami seguem curvas senoidais onduladas, criando aspecto de água ou cabelos ao vento.",
     "Recurso artístico de digitalização que valoriza paisagens, cabelos de personagens e fundos decorativos de grande impacto visual."),
    ("W-019", "Wing Needle / Agulha de Asa para Ponto Ajour / Bainha Aberta (Wing Hemstitch Embroidery Needle)", "Agulhas & Fios", "Intermediário 🟡",
     "Agulha com duas aletas laterais largas em forma de asa que abrem furos decorativos no tecido imitando renda e ponto ajour tradicional.",
     "Utilizada em linho puro e algodão para enxovais de noiva, toalhas de batizado e camisas clássicas de alfaiataria."),
    ("W-020", "Wilcom / Padrão Internacional de Software de Criação de Matrizes (Wilcom Embroidery Studio Industry Standard)", "Softwares & Formatos", "Fundamental 🟢",
     "O software CAD de digitalização profissional mais utilizado e prestigiado na indústria global de bordados computadorizados.",
     "Referência em manipulação de pontos, motores de compensação de repuxo e suporte completo a fontes com nós tipográficos perfeitos."),
    ("W-021", "Warp & Weft / Urdume e Trama na Estabilidade do Bordado (Fabric Grain Interaction in Embroidery)", "Tipos de Tecidos", "Fundamental 🟢",
     "Comportamento físico dos fios longitudinais (urdume) e transversais (trama) que dita a direção recomendada dos pontos bordados.",
     "Regra de digitalização: o ângulo dos pontos de preenchimento deve ser inclinado em 45 graus em relação ao urdume para evitar que o bordado afunde."),
    ("W-022", "Weight / Gramatura de Entretelas em Gramas por Metro Quadrado (Stabilizer Weight g/m²)", "Estabilizadores & Entretelas", "Fundamental 🟢",
     "Especificação técnica da espessura de entretelas (40g para tecidos finos, 60g uso geral e 80g a 120g para bonés e jaquetas).",
     "Escolher a gramatura correta é o segredo de bordados que não enrugam: usar entretela muito leve em desenho pesado é receita certa de defeito."),
    ("W-023", "Wax / Cera Lubrificante de Passagem para Linhas Especiais (Thread Lubricating Wax Block)", "Manutenção & Lubrificação", "Fundamental 🟢",
     "Bloco de cera parafínica pura ou silicone sólido onde a linha desliza antes dos tensores para amaciar fios duros e secos.",
     "Muito usado em linhas metalizadas e fios de algodão mercerizado para diminuir o atrito e evitar desfiamento."),
    ("W-024", "Wide Cap / Bastidor de Boné de Amplo Curso 270 Graus (270-Degree Wide Field Cap Frame)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Bastidor curvo de alta rigidez que permite bordar a frente inteira e as laterais do boné de uma só vez.",
     "Item de altíssima rentabilidade em ateliês especializados em marcas de rua, uniformes e bonés promocionais."),
    ("W-025", "Work Area / Área Útil Real de Bordado no Bastidor (Effective Embroidery Sewing Field)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Espaço interno livre onde a agulha pode descer com segurança (sempre 15 a 20 mm menor que a medida externa do aro).",
     "Descontar a margem de segurança do calcador evita colisões do pé da máquina contra as bordas do bastidor."),
    ("W-026", "Woven / Tecidos Planos de Estrutura Firme (Woven Fabrics Embroidery Digitizing Guidelines)", "Tipos de Tecidos", "Fundamental 🟢",
     "Categoria de tecidos como sarja, tricoline, oxford e linho que possuem estabilidade natural e necessitam de entretela rasgável simples.",
     "Os tecidos mais fáceis e prazerosos de bordar, aceitando ampla variedade de pontos com mínima distorção de repuxo."),
    ("W-027", "Wi-Fi / Conexão Sem Fio de Matrizes para a Máquina (Wireless Matrix Network Transfer)", "Softwares & Formatos", "Fundamental 🟢",
     "Transmissão instantânea de arquivos de bordado do computador diretamente para a memória da máquina via rede local sem fio.",
     "Elimina o manuseio constante de pendrives e agiliza a rotina de produção em ateliês modernos."),
    ("W-028", "Walk Stitch / Ponto Corrido de Esboço e Caminhamento (Walking Run Stitch Pathing)", "Programação de Bordado", "Fundamental 🟢",
     "Ponto simples de 2 a 3 mm utilizado para conectar um objeto ao outro de maneira oculta sob outros elementos.",
     "A técnica que reduz cortes de linha ao mínimo: caminha-se por baixo do desenho sem que o operador precise cortar pontas soltas."),
    ("W-029", "Wear / Desgaste Mecânico de Guias e Estica-Fios (Mechanical Thread Guide Groove Wear)", "Componentes da Máquina", "Avançado 🔴",
     "Sulcos microscópicos cavados pelo atrito contínuo da linha no metal dos passa-fios após anos de produção contínua.",
     "Esses sulcos afiados começam a desfiar a linha como se fossem lâminas; a troca dos guias desgastados resolve o mistério."),
    ("W-030", "Wrench / Chave de Boca Especial para Porca de Fixação (Special Offset Service Wrench)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Ferramenta de perfil fino e angulado própria para alcançar parafusos de sustentação em locais apertados da máquina.",
     "Indispensável na caixa de ferramentas para apertar as presilhas do pantógrafo e soltar o suporte da lançadeira."),
    ("W-031", "Whipstitch / Ponto de Borda Acetinada Estreita (Narrow Whipstitch Overcast)", "Elementos do Bordado", "Intermediário 🟡",
     "Borda fina e densa de zigue-zague ou cetim (1.5 a 2.0 mm) usada para arrematar bordas de peças de vestuário e guardanapos.",
     "Proporciona acabamento delicado e moderno que impede o desfiamento do tecido sem criar bordas pesadas."),
    ("W-032", "Waterproof / Linhas e Matrizes para Tecidos Impermeáveis (Waterproof Fabric Embroidery Techniques)", "Tipos de Tecidos", "Intermediário 🟡",
     "Estratégia para bordar capas de chuva e jaquetas impermeáveis usando fita de vedação térmica e pontos mais espaçados.",
     "Evita que os furos da agulha se tornem canais de entrada de água, preservando a impermeabilidade da peça técnica."),
    ("W-033", "White Bobbin / Linha de Bobina Branca de Poliéster Filamento Contínuo (White Continuous Filament Bobbin Thread)", "Agulhas & Fios", "Fundamental 🟢",
     "A linha inferior padrão universal de bordado: fina (60wt ou 70wt), macia, extremamente resistente e de baixo atrito.",
     "Por ser neutra e fina, desaparece sob qualquer cor de linha superior e mantém o avesso do bordado leve e sem calombos.")
]

for code, term, cat, lvl, ssum, sdef in w_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O acessório ou parâmetro técnico é preparado com precisão.", "2. A máquina movimenta a linha com atrito minimizado.", "3. A formação do ponto ocorre com ancoragem e caimento uniforme.", "4. O acabamento resulta em alta definição e toque suave."],
        f"Este termo ({term}) é fundamental para usar entretela hidrossolúvel, agulha de asa e manter o enchedor de bobina sempre pronto.",
        ["Bordado de rendas guipure em entretela solúvel.", "Produção de ponto ajour decorativo em linho com agulha de asa.", "Enchimento rápido de bobinas e organização da produção."],
        "Relaciona-se com entretela solúvel (wash-away), agulha wing e linha de bobina branca.",
        ["❌ Bordar renda guipure em entretela rasgável comum (impossível de limpar)", "❌ Utilizar agulha de asa em tecidos de malha elástica que se rasgam", "❌ Encher bobinas com linha superior comum desregulando a tensão inferior"],
        ["Se for bordar renda solúvel: use entretela Wash-Away e lave a peça pronta em água morna.", "Se for fazer ponto ajour: monte a agulha de asa Wing em tecido de linho ou algodão puro.", "Se a bobina esgotar rápido: mantenha 10 bobinas cheias no enchedor automático."],
        "A agulha de asa (Wing Needle) possui duas aletas laterais que abrem furinhos geométricos no tecido sem cortar os fios! Ela é o segredo para fazer aquele ponto ajour clássico de enxovais de luxo de antigamente na máquina moderna!",
        "A linha de bobina profissional (bobbin thread) é cerca de 30% mais fina que a linha de cima, o que permite que um carretelzinho de bobina guarde até 120 metros de linha contínua!",
        "Coloque uma folha de entretela Wash-Away na água e veja-a se dissolver completamente diante dos seus olhos em menos de 1 minuto.",
        ssum,
        ["Entretela Hidrossolúvel (Wash-Away)", "Agulha de Asa (Wing Needle)", "Caixa de Bobina (Bobbin Case)", "Linha de Bobina Branca", "Tensão da Linha Inferior (Bobbin Tension)"]
    ))

# X-005 a X-023 (19)
x_specs = [
    ("X-005", "X-Axis Servo Drive / Driver do Eixo X do Pantógrafo (X-Axis Precision Servo Motor Driver)", "Componentes da Máquina", "Avançado 🔴",
     "Módulo de potência eletrônica que envia sinais em alta frequência para o motor que movimenta o bastidor para a esquerda e direita.",
     "Controla com precisão milimétrica a inércia horizontal do bastidor mesmo com peças pesadas montadas."),
    ("X-006", "X-Stitch / Ponto Cruz Eletrônico Computadorizado (Computerized Cross-Stitch Embroidery Motif)", "Elementos do Bordado", "Fundamental 🟢",
     "Ponto decorativo programado em cruzamentos simétricos em 'X' que simula o ponto cruz clássico feito à mão.",
     "Muito valorizado em toalhas de mesa rústicas, quadrinhos decorativos e enxovais clássicos de cozinha."),
    ("X-007", "X-Y Resolution / Resolução de Posicionamento Micrométrico (X-Y Axis Micrometric Motion Resolution)", "Componentes da Máquina", "Avançado 🔴",
     "Capacidade do sistema de controle de mover o bastidor em incrementos de 0.01 mm para máxima perfeição em curvas delicadas.",
     "Garante que círculos e letras em arco fiquem perfeitamente redondos sem arestas serrilhadas."),
    ("X-008", "Xenon / Lâmpada de Alta Luminosidade para Inspeção Têxtil (High-CRI Xenon & LED Inspection Lamp)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Luz de bancada com alto índice de reprodução de cores que revela nuances sutis entre diferentes tons de linha.",
     "Evita erros crassos como misturar azul marinho e preto em peças de uniformes executivos."),
    ("X-009", "X-Limit Switch / Microchave de Fim de Curso do Eixo X (X-Axis Carriage Limit Safety Switch)", "Componentes da Máquina", "Fundamental 🟢",
     "Chave de segurança eletromecânica montada no trilho horizontal que desliga o motor se o bastidor ultrapassar a área segura.",
     "Impede que impactos físicos danifiquem o braço mecânico da máquina em caso de desenho excessivamente largo."),
    ("X-010", "X-Offset / Deslocamento Horizontal de Matriz no Painel (X-Axis Pattern Center Offset)", "Funções da Máquina", "Fundamental 🟢",
     "Ajuste milimétrico na tela da máquina que move o centro do desenho para a esquerda ou direita sem mover o bastidor físico.",
     "Recurso prático para centralizar logotipos perfeitamente sobre bolsos de camisas ou listras de tecidos."),
    ("X-011", "X-Symmetric Mirror / Espelhamento Horizontal de Matriz (Horizontal X-Axis Flip Function)", "Funções da Máquina", "Fundamental 🟢",
     "Comando que inverte o desenho na horizontal com um toque no painel, criando imagens simétricas espelhadas.",
     "Indispensável para bordar pares de detalhes em golas de camisas, mangas ou bolsos opostos."),
    ("X-012", "Xerografia Têxtil / Transferência de Gabaritos para Bordado (Thermal Stencil Transfer Paper)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Papel transfer especial utilizado para marcar pontos de referência no tecido sem manchar as fibras.",
     "Facilita o posicionamento exato de bordados repetitivos em peças de alfaiataria."),
    ("X-013", "X-Factor / Índice de Rigidez Estrutural de Bastidores Magnéticos (Magnetic Frame Structural Rigidity)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Resistência à torção mecânica dos aros de bastidores com ímãs de neodímio sob acelerações bruscas.",
     "Assegura que o tecido não oscile nem saia do enquadramento em produções de alta rotação."),
    ("X-014", "Xadrez / Alinhamento de Bordados em Tecidos Xadrez e Listrados (Plaid Fabric Pattern Alignment)", "Tipos de Tecidos", "Intermediário 🟡",
     "Técnica de enquadramento que alinha o eixo horizontal da matriz rigorosamente paralelo às linhas da estampa xadrez.",
     "Um detalhe de altíssimo padrão: um bordado torto em relação às listras da camisa arruína completamente a peça."),
    ("X-015", "Xanthate / Processo de Fabricação de Fios de Raiom Viscose (Viscose Rayon Fiber Chemistry)", "Agulhas & Fios", "Avançado 🔴",
     "Método químico de purificação da celulose da madeira que dá origem aos filamentos brilhantes da seda artificial.",
     "Explica a biodegradabilidade natural e o brilho sedoso característico das linhas tradicionais de bordado."),
    ("X-016", "X-Y Home / Retorno Automático ao Ponto de Origem Inicial (Auto Home Return Command)", "Funções da Máquina", "Fundamental 🟢",
     "Função que comanda o pantógrafo a voltar com precisão micrométrica para a coordenada (0,0) após terminar o bordado.",
     "Permite descarregar a peça com rapidez e carregar a próxima camiseta no mesmo alinhamento de produção."),
    ("X-017", "X-Tension / Ajuste de Folga de Correia Horizontal (X-Axis Timing Belt Tension Gauge)", "Tensão & Calibração", "Avançado 🔴",
     "Medição e ajuste da tensão da correia dentada do eixo horizontal usando frequencímetro sônico ou medidor mecânico.",
     "Evita folgas nas trocas de direção que poderiam causar contornos ovais em círculos perfeitos."),
    ("X-018", "X-Scale / Escala Proporcional no Eixo Horizontal (Horizontal Scaling Percentage in CAD)", "Softwares & Formatos", "Fundamental 🟢",
     "Ferramenta do software que permite alargar ou estreitar o desenho mantendo a altura original inalterada.",
     "Muito útil para ajustar logotipos que precisam caber com precisão em faixas estreitas de bonés ou fitas."),
    ("X-019", "Xileno / Solvente Técnico para Limpeza de Resinas e Graxas (Technical Degreasing Solvent)", "Manutenção & Lubrificação", "Avançado 🔴",
     "Solvente industrial utilizado por técnicos para desengraxar transmissões antes de aplicar lubrificantes sintéticos novos.",
     "Deve ser manuseado com ventilação e luvas para não danificar peças plásticas sensíveis."),
    ("X-020", "X-Axis Calibration Grid / Matriz de Teste Cruzado de Precisão (Cross Calibration Test Matrix)", "Tensão & Calibração", "Fundamental 🟢",
     "Desenho geométrico de teste com cruzetas e círculos bordados nos quatro cantos do bastidor para aferir a calibração dos motores.",
     "O teste definitivo de saúde mecânica: se o círculo fechar perfeitamente redondo, o pantógrafo está em estado de zero km."),
    ("X-021", "X-Ray Inspection / Inspeção Radiográfica em Uniformes Técnicos (Non-Destructive Needle Fragment Inspection)", "Solução de Problemas", "Avançado 🔴",
     "Inspeção por detector de metais ou raio-X em roupas infantis para garantir que nenhuma ponta de agulha quebrada ficou na peça.",
     "Exigência rigorosa de segurança internacional para marcas que exportam roupas infantis para os EUA e Europa."),
    ("X-022", "X-Over / Cruzamento Limpo de Fios em Pontos de Contorno (Clean Crossover in Vector Pathing)", "Programação de Bordado", "Fundamental 🟢",
     "Desenho de nós vetoriais que evita cruzamentos repetidos no mesmo ponto para não acumular caroços duros de linha.",
     "Garante contornos fluidos e agradáveis sem relevos ásperos no avesso da roupa."),
    ("X-023", "Xylol / Removedor Químico de Marcas de Caneta Fantasma (Ink Remover for Heat-Erasable Markers)", "Acabamento & Finalização", "Fundamental 🟢",
     "Líquido de limpeza suave para remover eventuais marcas brancas deixadas por canetas fantasmas após passadas a ferro.",
     "Restaura a cor natural de tecidos escuros que sofreram manchas temporárias de giz de alfaiate.")
]

for code, term, cat, lvl, ssum, sdef in x_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O comando de posicionamento ou teste é acionado no painel.", "2. O eixo X movimenta o bastidor com aceleração linear suave.", "3. A formação do ponto ocorre com alinhamento rigoroso.", "4. O acabamento resulta em simetria geométrica e conformidade."],
        f"Este termo ({term}) é fundamental para o alinhamento no eixo X, espelhamento de desenhos e calibração de precisão.",
        ["Bordados de pares simétricos em golas e mangas.", "Alinhamento de logotipos em camisas xadrez e listradas.", "Calibração e teste de precisão mecânica dos eixos."],
        "Relaciona-se com eixo X do pantógrafo, espelhamento e teste de calibração.",
        ["❌ Bordar peças em tecidos listrados sem alinhar o eixo horizontal com a listra", "❌ Deixar pedaços de agulha quebrada perdidos dentro do tecido de roupas infantis", "❌ Operar com a correia do eixo X frouxa gerando círculos ovalados"],
        ["Se o desenho sair torto na camisa listrada: use o gabarito e a rotação no painel para alinhar perfeitamente com a estampa.", "Se os círculos ficarem ovais: aperte a tensão da correia dentada do eixo X.", "Se precisar de bordados simétricos em golas: use a função de espelhamento horizontal."],
        "Ao bordar peças em camisas polo com listras ou tecidos xadrez, alinhe o eixo horizontal da matriz exatamente sobre a linha da estampa usando a função de rotação em graus! Um bordado 1 grau torto em uma camisa listrada salta aos olhos de qualquer cliente!",
        "O ponto cruz eletrônico computadorizado replica com perfeição matemática o ponto cruz tradicional das nossas avós, mas borda 800 cruzetas por minuto!",
        "Execute uma matriz de teste com quatro círculos simples nos extremos do bastidor e use uma régua para conferir se saíram perfeitamente redondos.",
        ssum,
        ["Pantógrafo", "Espelhamento de Matriz", "Ponto Cruz Computadorizado", "Alinhamento em Tecidos Listrados", "Manutenção Preventiva Mecânica"]
    ))

# Y-007 a Y-019 (13)
y_specs = [
    ("Y-007", "Y-Axis Linear Rail / Trilho Linear Prismático do Eixo Y (Y-Axis Precision Linear Guide)", "Componentes da Máquina", "Avançado 🔴",
     "Guia temperada retificada instalada longitudinalmente no chassi que suporta o avanço e recuo vertical do pantógrafo.",
     "Componente de alta capacidade de carga que assegura deslizamento suave sem folgas mesmo sob forças de alta aceleração."),
    ("Y-008", "Yarn / Fio de Lã e Algodão Especial para Bordado Flocado (Chenille Wool Embroidery Yarn)", "Agulhas & Fios", "Fundamental 🟢",
     "Fios grossos de baixa torção utilizados em máquinas com cabeçote misto para bordados atoalhados e relevos táteis.",
     "Aplicados em jaquetas de estilo universitário e agasalhos de inverno para criar letras em alto relevo felpudo."),
    ("Y-009", "Y-Offset / Deslocamento Vertical de Matriz no Painel (Y-Axis Pattern Position Offset)", "Funções da Máquina", "Fundamental 🟢",
     "Comando milimétrico no painel da máquina que sobe ou desce o desenho no bastidor com precisão de frações de milímetro.",
     "Permite posicionar o bordado no bolso ou peito da camisa na altura exata pedida pelo cliente sem mexer no aro."),
    ("Y-010", "Y-Scale / Escala Proporcional no Eixo Vertical (Vertical Scaling Parameter in CAD)", "Softwares & Formatos", "Fundamental 🟢",
     "Ajuste da altura de um desenho no software mantendo a largura inalterada, útil para adaptar matrizes a faixas verticais estreitas.",
     "Permite alongar monogramas e brasões sem alterar a largura horizontal estabelecida."),
    ("Y-011", "Yoke / Pala de Camisa como Ponto Crítico de Bordado (Shirt Yoke Hooping Strategies)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Região das costas da camisa social logo abaixo do colarinho que possui tecido duplo e costuras reforçadas.",
     "Exige entretela leve e agulha 75/11 ponta fina para penetrar suavemente nas duas camadas de tecido sem repuxar a costura."),
    ("Y-012", "Y-Tension / Ajuste de Tensão de Correia Vertical (Y-Axis Timing Belt Tensioning)", "Tensão & Calibração", "Avançado 🔴",
     "Calibração da tração mecânica da correia dentada que movimenta o pantógrafo para a frente e para trás.",
     "Garante que o avanço do tecido não tenha trancos nem perca o sincronismo com as descidas da agulha."),
    ("Y-013", "Yield / Rendimento de Cones de Linha por Milhões de Pontos (Thread Yield Calculator)", "Agulhas & Fios", "Fundamental 🟢",
     "Cálculo de consumo que estima que um cone de 5000 metros de linha de poliéster borda aproximadamente 1 milhão de pontos.",
     "Informação fundamental para calcular o custo exato de linha na formação do preço de venda do ateliê."),
    ("Y-014", "Y-Axis Motor Drive / Servomotor do Eixo Vertical (Y-Axis High-Torque Servo Motor)", "Componentes da Máquina", "Avançado 🔴",
     "Motor elétrico sem escovas responsável por acelerar a mesa do bastidor no sentido vertical em frações de milissegundo.",
     "Entrega alto torque imediato para vencer a inércia de bastidores grandes carregados com casacos pesados."),
    ("Y-015", "Yellowing / Amarelamento de Entretelas por Calor Excessivo (Stabilizer Thermal Yellowing)", "Estabilizadores & Entretelas", "Fundamental 🟢",
     "Degradação térmica em que entretelas sintéticas de baixa qualidade amarelam e mancham tecidos brancos sob o ferro de passar.",
     "Evitado usando entretelas de primeira linha 100% livres de cloro que suportam temperaturas de até 160°C sem descolorir."),
    ("Y-016", "Y-Limit Sensor / Sensor de Fim de Curso Vertical (Y-Axis Electronic Limit Switch)", "Componentes da Máquina", "Fundamental 🟢",
     "Sensor óptico ou magnético que avisa a placa-mãe se o bastidor alcançar o limite frontal ou traseiro do braço mecânico.",
     "Protege os rolamentos lineares e evita que o bastidor colida contra o chassi dianteiro da bordadeira."),
    ("Y-017", "Yoke Backing / Entretela Termocolante para Forro de Palas (Soft Touch Shirt Yoke Backing)", "Estabilizadores & Entretelas", "Fundamental 🟢",
     "Entretela ultrafina de poliamida com acabamento aveludado colada no avesso da pala bordada para proteger a pele contra coceiras.",
     "O toque de conforto indispensável em roupas finas e camisas infantis de alto padrão."),
    ("Y-018", "Y-Axis Backlash / Compensação de Folga Mecânica Vertical (Backlash Compensation Parameter)", "Tensão & Calibração", "Avançado 🔴",
     "Ajuste no software de controle da máquina que compensa pequenas folgas naturais de engrenagens nas reversões bruscas de sentido.",
     "Assegura que contornos finos se encaixem perfeitamente com o preenchimento mesmo após milhares de horas de uso da máquina."),
    ("Y-019", "Yield Strength / Limite de Escoamento de Agulhas de Aço (Needle High-Elastic Yield Strength)", "Agulhas & Fios", "Avançado 🔴",
     "Resistência à flexão que permite que a agulha entorte levemente ao bater em costuras grossas e retorne reta sem quebrar.",
     "Diferencial de qualidade das melhores agulhas de aço mola temperado (como Organ e Schmetz).")
]

for code, term, cat, lvl, ssum, sdef in y_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O parâmetro ou trilho mecânico é inspecionado antes do início.", "2. O eixo Y desloca a carga do bastidor com firmeza mecânica.", "3. A formação do ponto ocorre com sincronismo suave.", "4. O acabamento resulta em alinhamento rigoroso e conforto para o usuário."],
        f"Este termo ({term}) é fundamental para controlar o movimento do eixo Y, bordar palas de camisas e aplicar entretela protetora macia.",
        ["Bordados em palas de camisas sociais masculinas.", "Aplicação de entretela protetora macia para bebês.", "Cálculo de rendimento de cones de linha e formação de preços."],
        "Relaciona-se com eixo Y do pantógrafo, rendimento de linha e entretela macia protetora.",
        ["❌ Deixar o avesso de bordados em roupas de bebê sem entretela protetora macia", "❌ Ignorar folgas de correia no eixo Y que causam contornos desalinhados", "❌ Usar entretelas baratas que amarelam quando passadas a ferro"],
        ["Se o bordado arranhar a pele nas costas da camisa: aplique entretela termocolante macia (Soft Touch) no avesso.", "Se o contorno vertical não fechar com o preenchimento: verifique a tensão da correia do eixo Y.", "Se quiser calcular o custo: lembre-se que 1 cone de 5000m borda cerca de 1 milhão de pontos."],
        "Sempre aplique uma película protetora macia termocolante no avesso de bordados feitos em roupas infantis ou no colarinho de camisas! Essa película protege a pele sensível contra o atrito das linhas e agrega um valor enorme à sua peça!",
        "Um cone padrão de 5000 metros de linha de bordado tem comprimento suficiente para cobrir 50 campos de futebol seguidos em linha reta!",
        "Aplique um retalho de entretela macia termocolante no avesso de uma peça com ferro a vapor e sinta com as costas da mão a suavidade do toque.",
        ssum,
        ["Pantógrafo", "Entretela Macia Protetora (Soft Touch)", "Rendimento de Linha (Yield)", "Pala de Camisa (Shirt Yoke)", "Manutenção Preventiva Mecânica"]
    ))

# Z-012 a Z-022 (11)
z_specs = [
    ("Z-012", "Z-Axis Rotary Timing / Sincronismo Angular do Eixo Z (Z-Axis Hook Timing Degree Reference)", "Tensão & Calibração", "Avançado 🔴",
     "Ângulo em graus do eixo principal (geralmente entre 195° e 205°) no qual o bico da lançadeira passa exatamente pelo centro da cava da agulha.",
     "A regulagem mais importante de toda a mecânica de bordado: dita se a máquina formará laçadas perfeitas ou quebrará agulhas sem parar."),
    ("Z-013", "Zigue-Zague Aberto como Subponto Estrutural (Open Zigzag Structural Underlay)", "Programação de Bordado", "Fundamental 🟢",
     "Ponto de fundação em zigue-zague com passos largos (1.5 a 2.0 mm) bordado antes da coluna principal para dar corpo e firmeza.",
     "Essencial sob colunas de cetim de largura média (3 a 5 mm), evitando que as bordas do cetim afundem na malha."),
    ("Z-014", "Zinco Fundido em Garras de Bastidor (Zinc Die-Cast Hoop Clamping Knobs)", "Componentes da Máquina", "Fundamental 🟢",
     "Parafusos com corpo de liga de zinco injetado de alta resistência mecânica que não quebram ao apertar os aros de bastidores pesados.",
     "Componentes robustos que garantem aperto firme e duradouro sem espanar a rosca durante anos de uso."),
    ("Z-015", "Zero-Point Sensor / Sensor Óptico de Ponto Zero Absoluto (Zero-Point Optical Flag Sensor)", "Componentes da Máquina", "Fundamental 🟢",
     "Bandeira metálica que interrompe um feixe óptico infravermelho calibrando a coordenada (0,0) inicial ao ligar a máquina.",
     "Assegura que todas as posições salvas na memória correspondam exatamente à posição física do bastidor sobre a chapa."),
    ("Z-016", "Zigue-Zague sob Malha para Fixação de Aplique (Zigzag Appliqué Tack-Down Stitch)", "Programação de Bordado", "Fundamental 🟢",
     "Etapa intermediária de programação que costura o tecido do aplique com pontos zigue-zague estreitos antes do recorte final.",
     "Impede que o tecido do aplique desfie ou se desloque durante o corte manual com a tesourinha de ponta curvada."),
    ("Z-017", "Zigue-Zague com Densidade Gradual / Ponto Degradê (Variable Density Zigzag Ombre Effect)", "Programação de Bordado", "Intermediário 🟡",
     "Variação programada do espaçamento entre pontos zigue-zague que cria transições suaves de sombra e degradê de cores.",
     "Muito utilizado em bordados artísticos, asas de borboletas, chamas de fogo e pétalas de flores multicoloridas."),
    ("Z-018", "Zamac / Liga Metálica de Alta Rigidez para Caixas de Lançadeira (Zamac Alloy Shuttle Housing)", "Componentes da Máquina", "Avançado 🔴",
     "Liga metálica composta de zinco, alumínio, magnésio e cobre utilizada na fundição de corpos de lançadeiras e bases estruturais.",
     "Combina leveza, estabilidade dimensional perfeita e alta resistência à vibração contínua de alta rotação."),
    ("Z-019", "Zonas de Perigo de Colisão de Calcador no Bastidor (Hoop Perimeter No-Fly Boundary Zone)", "Operação da Máquina", "Fundamental 🟢",
     "Faixa perimétrica de segurança de 15 mm junto aos aros do bastidor onde o calcador e a barra de agulha nunca devem entrar.",
     "Respeitar essa zona no software impede batidas destrutivas do calcador contra as bordas plásticas do aro."),
    ("Z-020", "Zero-Clearance / Folga Zero entre Agulha e Lançadeira (Zero-Clearance Hook Timing Gap)", "Tensão & Calibração", "Avançado 🔴",
     "Ajuste mecânico de precisão onde o bico da lançadeira passa o mais próximo possível da cava da agulha (0.05 mm) sem encostar no metal.",
     "Se a folga for maior que 0.10 mm, a linha pula laçada; se encostar, a agulha cega ou quebra."),
    ("Z-021", "Zíperes / Métodos Seguros de Aplicação e Bordado em Bolsas (Zipper Pocket Embroidery Strategies)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Procedimento seguro para bordar mochilas e necessaires com zíper sem deixar o carrinho de metal no caminho da agulha.",
     "Abre-se o zíper completamente para fora do campo do bastidor ou prende-se o cursor com fita térmica antes de iniciar o bordado."),
    ("Z-022", "Zigue-Zague Duplo Cruzado para Brasões Militares (Crossed Double Zigzag Underlay)", "Programação de Bordado", "Intermediário 🟡",
     "Estrutura reforçada composta por dois subpontos zigue-zague cruzados em 45 graus sob bordas grossas de emblemas militares.",
     "Garante que o relevo do bordado permaneça alto, nítido e impenetrável mesmo após anos de uso em uniformes táticos pesados.")
]

for code, term, cat, lvl, ssum, sdef in z_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O sincronismo angular ou parâmetro é calibrado no grau certo.", "2. A agulha e a lançadeira se cruzam na folga micrométrica.", "3. A formação do ponto ocorre com ancoragem estrutural firme.", "4. O acabamento resulta em alta definição e durabilidade máxima."],
        f"Este termo ({term}) é fundamental para o sincronismo angular da lançadeira, subpontos zigue-zague e segurança contra colisões.",
        ["Calibração angular do sincronismo da lançadeira (timing).", "Subponto estrutural zigue-zague sob colunas de cetim.", "Bordado seguro em bolsas e necessaires com zíperes."],
        "Relaciona-se com sincronismo da lançadeira (hook timing), ponto zigue-zague e folga de agulha.",
        ["❌ Deixar folga excessiva entre a agulha e a lançadeira causando pulos de ponto", "❌ Bordar peças com zíper sem conferir se o cursor de metal está fora do traçado", "❌ Programar colunas largas de cetim sem subponto zigue-zague"],
        ["Se a máquina pular pontos: ajuste a folga entre a agulha e o bico da lançadeira para 0.05 mm.", "Se o cetim afundar no tecido: adicione subponto zigue-zague sob a coluna.", "Se for bordar perto de zíper: puxe o cursor para fora e fixe com fita térmica."],
        "O sincronismo entre a agulha e a lançadeira é uma verdadeira dança de precisão: a lançadeira passa a apenas 0.05 milímetros da cava da agulha — uma folga tão fina quanto a espessura de uma folha de papel! Se passar longe, pula ponto; se encostar, quebra a agulha!",
        "O subponto zigue-zague sob o ponto cheio funciona exatamente como as vigas de aço de um edifício: ele sustenta os pontos de cima e não deixa o tecido afundar!",
        "Pegue uma folha de papel comum e deslize entre a agulha e o bico da lançadeira no ponto mais baixo; ela deve passar justa sem prender para atestar a folga perfeita de 0.05 mm.",
        ssum,
        ["Lançadeira Rotativa (Rotary Hook)", "Sincronismo Mecânico (Hook Timing)", "Ponto Zigue-Zague", "Subponto (Underlay)", "Ponto Cheio (Satin Stitch)"]
    ))

print(f"Total de verbetes na Parte 4: {len(verbetes)}")

with open("src/data/verbetesRestored4.ts", "w", encoding="utf-8") as f:
    f.write("import { Verbete } from '../types';\n\n")
    f.write("export const VERBETES_RESTORED_PART4: Verbete[] = ")
    f.write(json.dumps(verbetes, ensure_ascii=False, indent=2))
    f.write(";\n")

print("Arquivo src/data/verbetesRestored4.ts gerado com sucesso!")

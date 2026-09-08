# -*- coding: utf-8 -*-
"""
Gera os 89 verbetes da Parte 3: Letras N (11), O (8), P (8), Q (23), R (16), S (7), T (16).
Arquivo de saída: src/data/verbetesRestored3.ts
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

# N-062 a N-072 (11)
n_specs = [
    ("N-062", "Nivelamento a Laser de Chapa de Agulha (Laser Leveling & Needle Plate Alignment)", "Tensão & Calibração", "Avançado 🔴",
     "Aferição óptica com nível laser que garante a horizontalidade absoluta da chapa em relação à lançadeira.",
     "Procedimento de oficina para evitar que chapas empenadas por impactos de agulha causem atrito unilateral ou quebra de agulhas."),
    ("N-063", "Número de Título de Linha / Denier e Dtex (Thread Count & Linear Mass Density)", "Agulhas & Fios", "Fundamental 🟢",
     "Sistema internacional de classificação da espessura de fios (ex: 40wt, 120D/2, 135 dtex) que determina a densidade ideal da matriz.",
     "Conhecimento essencial: linhas mais grossas (30wt) cobrem mais e exigem densidade menor (0.45mm); linhas finas (60wt) exigem densidade maior (0.35mm)."),
    ("N-064", "Nó Cego de Segurança em Troca de Carretel (Weaver's Knot for Quick Threading)", "Operação da Máquina", "Fundamental 🟢",
     "Nó de tecelão com pontas aparadas que passa pelos guias e tensores sem prender na hora de puxar a nova cor de linha.",
     "O truque mais rápido do ateliê para trocar cores em segundos: amarra-se o fio novo no velho e puxa-se suavemente por todo o circuito da máquina."),
    ("N-065", "Navegação por Código de Cores no Painel (Color Block Forward/Backward Stepping)", "Funções da Máquina", "Fundamental 🟢",
     "Comando que permite avançar ou retroceder a matriz bloco por bloco de cor para reparar falhas ou saltar partes indesejadas.",
     "Função que salva o bordador quando a linha acaba no meio de uma cor: recua-se exatamente até o início daquele bloco para cobrir as falhas."),
    ("N-066", "Nitreto de Titânio em Agulhas de Bordado (Titanium Nitride Golden Needle Coating)", "Agulhas & Fios", "Fundamental 🟢",
     "Revestimento dourado cerâmico (TIN) que confere dureza extrema à agulha e prolonga sua vida útil em até 5 vezes em tecidos abrasivos.",
     "Agulhas de alta performance (como Schmetz Gold ou Organ PD) que resistem ao calor e ao atrito contínuo em bonés, lonas e couro pesado."),
    ("N-067", "Ninho de Pássaro / Emaranhado sob a Chapa (Birdnesting & Thread Jam Clearing)", "Solução de Problemas", "Fundamental 🟢",
     "Bolo denso de linhas acumulado dentro da lançadeira que trava o motor e impede a subida da agulha.",
     "Causado quase sempre por falta de tensão superior ou linha fora do estica-fio; exige corte cuidadoso com lâmina fina sem arranhar a lançadeira."),
    ("N-068", "Nódulo de Início de Ponto (Tie-In Micro-Knot in Digitizing)", "Programação de Bordado", "Fundamental 🟢",
     "Primeira ancoragem discreta de linha inserida pelo software para travar o fio antes de iniciar colunas de ponto cheio.",
     "Garante que o ponto não escape no primeiro movimento rápido do pantógrafo após o corte automático."),
    ("N-069", "Normalização de Densidade em Redimensionamento (Density Normalization in Scaling)", "Softwares & Formatos", "Intermediário 🟡",
     "Recurso inteligente de software que recalcula o número de pontos ao ampliar ou reduzir um desenho para manter o toque macio.",
     "Impede que um desenho ampliado fique ralo e transparente ou que um desenho reduzido vire uma placa dura de linha que quebra agulhas."),
    ("N-070", "Náilon Termossolúvel para Apliques e Emblemas (Heat-Soluble Nylon Backing)", "Estabilizadores & Entretelas", "Intermediário 🟡",
     "Película que desaparece completamente sob o calor do ferro ou prensa térmica (120°C a 140°C), deixando bordas limpas sem fiapos.",
     "Perfeita para emblemas e toalhas nobres onde não se deseja lavar a peça para retirar sobras de entretela."),
    ("N-071", "Nível de Ruído Acústico em Decibéis (Machine Operating Sound Level dB)", "Componentes da Máquina", "Fundamental 🟢",
     "Faixa sonora recomendada (65 a 72 dB a 800 PPM) para operação ergonômica sem risco à audição em ateliês residenciais.",
     "Máquinas bem lubrificadas e niveladas operam com ruído suave de costura; barulhos metálicos secos acima de 80 dB indicam falta urgente de óleo."),
    ("N-072", "Nó Francês Eletrônico Simulado (Digital French Knot Stitch Motif)", "Elementos do Bordado", "Intermediário 🟡",
     "Ponto decorativo programado com múltiplas laçadas concêntricas que simula o nó francês do bordado manual tradicional.",
     "Muito valorizado em bordados infantis, miolos de flores e enxovais de bebê pelo charme artesanal clássico.")
]

for code, term, cat, lvl, ssum, sdef in n_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O parâmetro ou procedimento é conferido antes do início.", "2. A máquina movimenta a agulha com sincronismo preciso.", "3. A formação do ponto ocorre com tensão equilibrada.", "4. O acabamento resulta em alta definição e toque agradável."],
        f"Este termo ({term}) é muito importante para evitar travamentos de linha, garantir a correta densidade e manter o ateliê funcionando perfeitamente.",
        ["Bordados em peças infantis e enxovais finos.", "Troca rápida de cores em produção seriada.", "Manutenção preventiva e desobstrução de lançadeira."],
        "Relaciona-se com título de linha, tensão da linha e lubrificação da lançadeira.",
        ["❌ Puxar o tecido à força quando ocorrer ninho de pássaro embaixo da chapa", "❌ Trocar a linha sem fazer o nó de tecelão correto", "❌ Redimensionar arquivos sem normalizar a densidade de pontos"],
        ["Se a máquina travar com bolo de linhas embaixo: desligue a máquina e corte os fios com cuidado por baixo da chapa.", "Se a agulha esquentar e quebrar em tecidos duros: use agulha com banho de nitreto de titânio.", "Se o bordado ficar duro após redimensionar: ative a normalização automática de densidade no software."],
        "Quando embolar linha embaixo da chapa (ninho de pássaro), NUNCA force o bastidor puxando para cima! Você pode entortar a barra de agulha ou quebrar a lançadeira. Solte o bastidor da máquina e corte as linhas por baixo com calma!",
        "As agulhas com nitreto de titânio recebem o mesmo revestimento dourado usado em brocas aeroespaciais para suportar perfurações extremas!",
        "Pratique o nó de tecelão unindo duas pontas de linha e passe o nó pelos discos tensores da sua máquina com a mão para sentir a fluidez.",
        ssum,
        ["Chapa de Agulha", "Caixa de Bobina (Bobbin Case)", "Agulha com Banho de Titânio", "Densidade de Pontos", "Solução de Problemas"]
    ))

# O-001 a O-008 (8)
o_specs = [
    ("O-001", "Olhal de Passagem de Fio em Cerâmica (Ceramic Eyelet Thread Guide)", "Componentes da Máquina", "Fundamental 🟢",
     "Anel cerâmico vitrificado instalado nos pontos de curva da linha para eliminar o atrito de fricção em alta velocidade.",
     "Peça de extrema durabilidade que impede que fios abrasivos criem sulcos cortantes no metal da árvore de linha."),
    ("O-002", "Oscilação Harmônica de Barra de Agulha (Needle Bar Harmonic Vibration)", "Componentes da Máquina", "Avançado 🔴",
     "Vibração ressonante lateral da agulha que pode causar choque contra a lançadeira em velocidades críticas de rotação.",
     "Estudada na mecânica de precisão para determinar a velocidade ideal de cruzeiro de cada modelo de máquina (geralmente entre 750 e 850 PPM)."),
    ("O-003", "Otimizador de Saltos e Cortes de Linha (Auto Jump & Trim Optimizer in CAD)", "Programação de Bordado", "Fundamental 🟢",
     "Algoritmo de software que reordena os objetos bordados para reduzir os deslocamentos longos do pantógrafo e economizar cortes.",
     "Ferramenta indispensável que reduz o tempo de máquina em até 25% sem alterar o visual final do bordado."),
    ("O-004", "Origem Absoluta de Coordenadas da Máquina (Machine Home Position / Absolute Zero)", "Funções da Máquina", "Fundamental 🟢",
     "Ponto zero mecânico calibrado nos fins de curso que serve de referência geométrica para todo o movimento do pantógrafo.",
     "Posição para a qual o bastidor retorna ao ligar a máquina, garantindo que o desenho nunca se perca mesmo após desligamento repentino."),
    ("O-005", "Overlock Simulado em Bordado Eletrônico (Faux Overlock Border Stitch)", "Elementos do Bordado", "Intermediário 🟡",
     "Ponto programado na borda de emblemas que simula o entrelaçamento característico de uma máquina overloque industrial de acabamento.",
     "Muito usado em brasões e patches para criar acabamento rústico reforçado sem necessidade de costura overloque externa."),
    ("O-006", "Óleo Mineral Branco Atóxico para Máquinas (White Mineral Lubricating Oil ISO 10)", "Manutenção & Lubrificação", "Fundamental 🟢",
     "Lubrificante translúcido de baixa viscosidade altamente refinado que não mancha tecidos e não resseca mecanismos finos.",
     "O único tipo de óleo permitido em máquinas de bordar computadorizadas; óleos vegetais ou automotivos estragam os rolamentos."),
    ("O-007", "Organ Agulhas com Ponta de Esfera Leve (Organ Ball Point SES Needles)", "Agulhas & Fios", "Fundamental 🟢",
     "Agulhas japonesas de alta precisão com ponta arredondada que desliza entre as fibras de malhas sem furar nem cortar os fios da trama.",
     "A agulha mais recomendada em todo o mundo para camisas polo, camisetas e tecidos de malharia em geral."),
    ("O-008", "Offset de Bastidor para Posicionamento de Aplique (Hoop Offset Function for Appliqué)", "Funções da Máquina", "Fundamental 🟢",
     "Comando que desloca o bastidor temporariamente para a frente do operador para recortar o aplique e depois retorna com precisão ao ponto exato.",
     "Função muito prática para bordar apliques com tecidos sobrepostos sem precisar desencaixar o bastidor da máquina.")
]

for code, term, cat, lvl, ssum, sdef in o_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O dispositivo ou comando é ativado no momento adequado.", "2. A máquina executa os movimentos de acordo com os limites físicos.", "3. A formação do ponto ocorre com suavidade mecânica.", "4. A peça atinge acabamento de primeira linha."],
        f"Este termo ({term}) é essencial para a lubrificação correta, corte de apliques e proteção das malhas.",
        ["Bordado de apliques em roupas infantis.", "Confecção de camisas polo sem furos na malha.", "Lubrificação diária e semanal de ateliê."],
        "Relaciona-se com tipo de agulha, lubrificante mineral e função offset.",
        ["❌ Usar óleo de cozinha ou óleo automotivo na máquina de bordar", "❌ Bordar malha com agulha ponta fina comum (cortando os fios da camisa)", "❌ Retirar o bastidor do pantógrafo para cortar aplique em vez de usar o offset"],
        ["Se o tecido de malha furar ao redor do bordado: troque imediatamente por agulha ponta bola SES.", "Se a máquina fizer ruído seco nos eixos: aplique gotas de óleo mineral branco ISO 10.", "Se a matriz demorar muito para bordar: use o otimizador de saltos no software."],
        "Nunca retire o bastidor da máquina para recortar o tecido de um aplique! Use a função Offset do painel: ela empurra o bastidor para a frente, você corta o aplique com tesoura de ponta curvada e aperta o botão para ela voltar ao ponto zero perfeito!",
        "As agulhas ponta de bola SES não furam os fios da malha; elas suavemente empurram as fibras para os lados como se fossem dedos abrindo passagem!",
        "Teste a função Offset no painel da sua máquina com um bastidor vazio e veja como o pantógrafo se move e retorna com precisão.",
        ssum,
        ["Ponta de Bola (Ball Point SES)", "Óleo Mineral Lubrificante", "Bordado de Aplique", "Pantógrafo", "Velocidade de Rotação (PPM)"]
    ))

# P-001 a P-008 (8)
p_specs = [
    ("P-001", "Ponto E-Stitch / Ponto Caseado de Aplique (E-Stitch / Blanket Appliqué Stitch)", "Elementos do Bordado", "Fundamental 🟢",
     "Ponto decorativo em forma de 'E' que prende as bordas de tecidos de aplique com estética tradicional e toque macio.",
     "Alternativa elegante e leve ao ponto cheio tradicional para fixar apliques em roupas de bebê sem deixar a borda dura."),
    ("P-002", "Ponto Puc / Ponto de Fixação Provisória (Basting / Tacking Stitch)", "Elementos do Bordado", "Fundamental 🟢",
     "Contorno de pontos largos (4 a 6 mm) bordado ao redor da área de trabalho para prender o tecido à entretela antes do desenho principal.",
     "Excelente recurso de segurança que substitui o alfinetamento manual e impede que tecidos lisos ou escorregadios saiam do lugar."),
    ("P-003", "Polia Sincronizadora de Correia Dentada (Timing Belt Synchronous Pulley)", "Componentes da Máquina", "Avançado 🔴",
     "Roda dentada usinada em alumínio de alta resistência que traciona a correia do pantógrafo sem escorregamento.",
     "Garante que o passo do motor de passo seja transferido rigorosamente 1:1 para o movimento do bastidor em qualquer velocidade."),
    ("P-004", "Protetor de Dedos de Barra de Agulhas (Needle Finger Guard Safety Bracket)", "Componentes da Máquina", "Fundamental 🟢",
     "Haste de proteção de arame de aço instalada em frente às agulhas para evitar acidentes de trabalho com o operador.",
     "Dispositivo de segurança obrigatório em ambientes fabris para evitar que os dedos alcancem a descida da agulha durante o trabalho."),
    ("P-005", "Ponto Chenille / Ponto Flocado em Máquina Eletrônica (Electronic Chenille & Loop Stitch)", "Elementos do Bordado", "Intermediário 🟡",
     "Ponto texturizado em laçadas fofas que cria relevo atoalhado similar ao ponto russo tradicional de jaquetas colegiais.",
     "Feito com linha de lã ou poliéster grossa e calcador especial de laçada, conferindo aspecto vintage e aconchegante a agasalhos."),
    ("P-006", "Ponto Flexível para Malhas Esportivas (Stretchable Knit Zigzag Stitch)", "Programação de Bordado", "Intermediário 🟡",
     "Estrutura elástica de zigue-zague programada para acompanhar a distensão de lycra, suplex e roupas de ginástica sem estourar fios.",
     "Essencial para moda praia e fitness: permite que a peça seja esticada no corpo sem que as linhas do bordado arrebentem."),
    ("P-007", "Painel Touchscreen Colorido Industrial (Industrial Color Touchscreen Operator Interface)", "Componentes da Máquina", "Fundamental 🟢",
     "Tela sensível ao toque de alta resolução que exibe a simulação real dos pontos e permite controle total de parâmetros.",
     "A central de comando da bordadeira moderna, facilitando a escolha de matrizes, edição rápida de cores e rotação em graus."),
    ("P-008", "Pré-Tensão com Disco de Pressão Regulável (Pre-Tension Assembly with Tension Nut)", "Tensão & Calibração", "Fundamental 🟢",
     "Primeiro conjunto de discos de atrito por onde a linha passa antes de entrar no tensor principal de cada agulha.",
     "Elimina pequenas ondulações e nós frouxos que vêm do cone, entregando o fio estável e alinhado para o tensor principal.")
]

for code, term, cat, lvl, ssum, sdef in p_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O parâmetro ou mecanismo é regulado previamente.", "2. A linha e o tecido recebem a ancoragem no ponto certo.", "3. A formação do ponto ocorre com ritmo e flexibilidade controlados.", "4. O trabalho exibe resistência a lavagens e acabamento impecável."],
        f"Este termo ({term}) é fundamental para bordar apliques, proteger a segurança do operador e bordar malhas elásticas.",
        ["Bordado de apliques em enxovais de bebê.", "Roupas esportivas em tecidos com elastano.", "Segurança operacional no cabeçote de bordado."],
        "Relaciona-se com ponto caseado, basting stitch e elasticidade têxtil.",
        ["❌ Bordar aplique pesado em roupa de bebê com ponto de cetim grosso que endurece a peça", "❌ Bordar lycra com pontos rígidos sem flexibilidade", "❌ Remover a proteção de agulhas colocando as mãos em risco"],
        ["Se o tecido escorregar no bastidor: execute um alinhavo prévio (basting/ponto puc) ao redor da área.", "Se a roupa de lycra arrebentar o bordado ao vestir: use ponto de estrutura flexível zigue-zague.", "Se a linha chegar frouxa ao tensor: aperte ligeiramente a porca da pré-tensão."],
        "Em roupas de bebê, prefira sempre o ponto caseado (E-Stitch) para apliques em vez de ponto cheio pesado. Ele fica macio, não endurece a roupinha e não irrita a pele sensível do bebê!",
        "O ponto de alinhavo (basting stitch) leva menos de 20 segundos para rodar na máquina e salva horas de trabalho ao prender o tecido com total firmeza!",
        "Programe um quadrado simples no software e ative o ponto de basting de 5 mm ao redor para testar a fixação antes de bordar.",
        ssum,
        ["Ponto Caseado (Blanket Stitch)", "Ponto de Alinhavo (Basting Stitch)", "Tensão da Linha Superior", "Bastidor de Bordado Computadorizado", "Aplique em Bordado"]
    ))

# Q-017 a Q-039 (23)
q_specs = [
    ("Q-017", "Quebra de Agulha por Flexão Lateral (Needle Deflection & Breakage Mechanics)", "Solução de Problemas", "Fundamental 🟢",
     "Dano mecânico em que a haste da agulha enverga lateralmente durante a penetração e bate com força contra a chapa ou a lançadeira.",
     "Causado por velocidade excessiva em tecidos grossos, tensão exagerada da linha ou repuxo severo do pantógrafo durante a perfuração."),
    ("Q-018", "Quilting Automatizado em Bastidor (In-The-Hoop Computerized Quilting)", "Elementos do Bordado", "Fundamental 🟢",
     "Técnica de união de três camadas (tecido superior, manta acrílica e forro) com padrões decorativos contínuos de pontos corridos.",
     "Permite criar colchas, almofadas e bolsas estruturadas com acabamento acolchoado impecável diretamente na máquina de bordar."),
    ("Q-019", "Quadro de Comando Elétrico do Servo Motor (Servo Drive Control Enclosure)", "Componentes da Máquina", "Avançado 🔴",
     "Gabinete ventilado com filtros que abriga as placas de potência, fusíveis e fontes de alimentação da máquina industrial.",
     "O cérebro elétrico do equipamento; deve ser aspirado periodicamente para remover fiapos têxteis que podem causar curto-circuito."),
    ("Q-020", "Queima de Fio por Atrito Térmico (Frictional Heat Thread Melting)", "Solução de Problemas", "Intermediário 🟡",
     "Fusão do poliéster provocada pelo superaquecimento da agulha em alta rotação (acima de 900 PPM) em tecidos densos como lona ou EVA.",
     "Evitado com uso de agulhas com revestimento cerâmico/titânio ou aplicação de lubrificante de silicone puro no cone de linha."),
    ("Q-021", "Qualidade Óptica de Brilho da Linha (Thread Optical Luster & Reflectance)", "Agulhas & Fios", "Fundamental 🟢",
     "Capacidade dos filamentos de poliéster ou raiom de refletir a luz de maneira uniforme, conferindo aspecto acetinado e nobre ao bordado.",
     "Fator determinante na escolha de marcas premium para valorizar o produto final aos olhos do cliente."),
    ("Q-022", "Química de Dissolução de Filmes PVA (Polyvinyl Alcohol Water Solubility Dynamics)", "Estabilizadores & Entretelas", "Fundamental 🟢",
     "Propriedade físico-química dos filmes hidrossolúveis que permite sua dissolução total em água sem necessidade de solventes agressivos.",
     "Garante que rendas guipure e toalhas fiquem 100% livres de plástico após uma rápida lavagem em água corrente."),
    ("Q-023", "Quebra de Linha por Rebarba na Lançadeira (Rotary Hook Burr Thread Shredding)", "Solução de Problemas", "Fundamental 🟢",
     "Desfiamento e quebra imediata da linha superior causada por arranhões microscópicos no bico ou na pista da lançadeira.",
     "Defeito que surge após impactos fortes de agulha; polimento com pasta diamantada ou lixa d'água 1500 restaura a superfície."),
    ("Q-024", "Quadro de Sequenciamento de Cores (Color Palette Setup Table)", "Softwares & Formatos", "Fundamental 🟢",
     "Tabela digital onde o programador define a ordem cronológica de aplicação das linhas no arquivo de matriz.",
     "Evita trocas de agulha desnecessárias e assegura que os detalhes de sombra e contorno sejam bordados na ordem correta."),
    ("Q-025", "Quilometragem de Pontos para Troca de Agulha (Needle Lifespan in Stitch Milestones)", "Agulhas & Fios", "Fundamental 🟢",
     "Regra de manutenção preventiva que recomenda a substituição da agulha a cada 1 a 2 milhões de pontos ou 8 horas de costura contínua.",
     "Substituir agulhas gastas antes de quebrarem previne danos caros à chapa e à lançadeira da máquina."),
    ("Q-026", "Quebra-Fios Pneumático Automático (Pneumatic Thread Clipper Mechanism)", "Componentes da Máquina", "Avançado 🔴",
     "Dispositivo de corte acionado por ar comprimido que apara os fios com velocidade ultra-rápida em máquinas multi-cabeças industriais.",
     "Oferece corte potente e limpo mesmo em linhas grossas ou fios metalizados difíceis."),
    ("Q-027", "Queda de Ponto por Falha de Captura (Missed Loop Stitch Drop)", "Solução de Problemas", "Avançado 🔴",
     "Defeito em que a agulha desce mas a lançadeira não fisga a laçada, deixando um vão de tecido sem pontos bordados.",
     "Indica quase sempre folga excessiva entre a agulha e a lançadeira (maior que 0.15 mm) ou agulha entortada."),
    ("Q-028", "Qualificação de Entretelas por Direção de Rasgo (Directional vs. Bi-Directional Tearaway)", "Estabilizadores & Entretelas", "Fundamental 🟢",
     "Classificação entre entretelas que rasgam apenas em um sentido (unidirecionais) e entretelas nobres que rasgam limpamente em todas as direções.",
     "Entretelas multidirecionais preservam a integridade dos contornos bordados sem puxar as costuras na hora da limpeza."),
    ("Q-029", "Quick-Clamp / Bastidores de Aperto Rápido por Alavanca (Cam-Action Quick Hoops)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Bastidores ergonômicos dotados de trava rápida de fecho que aceleram o enquadramento de peças sem cansar as mãos.",
     "Muito utilizados em linhas de camisetas promocionais para elevar a produtividade por operador."),
    ("Q-030", "Quebra de Linha de Bobina por Excesso de Tensão (Bobbin Thread Breakage from High Tension)", "Solução de Problemas", "Fundamental 🟢",
     "Ruptura do fio inferior provocada por aperto excessivo do parafuso da caixa de bobina ou acúmulo de fiapo sob a lâmina.",
     "Faz a máquina parar constantemente ou puxa a linha superior para o avesso em pontos tortos."),
    ("Q-031", "Quociente de Compressão de Espuma 3D (3D Puff Foam Compression Ratio)", "Elementos do Bordado", "Intermediário 🟡",
     "Taxa em que o EVA de bordado em relevo (geralmente 2mm ou 3mm) é prensado e perfurado pela densidade do ponto de cetim.",
     "Requer densidade dobrada no software (0.20 mm a 0.25 mm) e pontos de tampa nas pontas para esconder completamente a espuma."),
    ("Q-032", "Querosene Têxtil / Solvente de Limpeza de Cola (Adhesive Solvent Cleaner for Needles)", "Manutenção & Lubrificação", "Fundamental 🟢",
     "Solvente especial de evaporação rápida utilizado para remover resíduos gomados de cola spray acumulados nas agulhas e tesouras.",
     "Mantém as agulhas brilhantes e sem resíduos que poderiam causar atrito e quebra de fios."),
    ("Q-033", "Quebra de Agulha em Zíperes e Botões (Hardware Impact Needle Breakage)", "Solução de Problemas", "Fundamental 🟢",
     "Impacto catastrófico da agulha contra dentes de zíper de metal ou rebites durante o bordado de bolsas e jaquetas.",
     "Evitado com a simulação prévia do traçado de contorno (Trace) no painel antes de iniciar o bordado definitivo."),
    ("Q-034", "Quadrícula de Ajuste de Simetria em CAD (Orthogonal Grid for Symmetry Alignment)", "Softwares & Formatos", "Fundamental 🟢",
     "Grade milimétrica de fundo nos programas de matriz que assegura o paralelismo exato de brasões e formas geométricas.",
     "Evita que desenhos desenhados à mão fiquem tortos ou assimétricos na hora de bordar."),
    ("Q-035", "Quantização de Cores em Imagens Raster (Color Quantization in Auto-Digitizing)", "Softwares & Formatos", "Intermediário 🟡",
     "Redução algorítmica de milhares de tons de uma foto para 4 a 12 cores sólidas de linha de bordado.",
     "Passo inicial essencial na vetorização de logotipos recebidos em baixa resolução."),
    ("Q-036", "Quick-Set / Troca Rápida de Caixa de Bobina (Quick-Drop Drop-In Bobbin System)", "Componentes da Máquina", "Fundamental 🟢",
     "Sistema moderno onde a bobina é inserida diretamente por cima na chapa sem necessidade de retirar o braço livre.",
     "Comum em máquinas domésticas e semi-industriais modernas, facilitando o acompanhamento visual do consumo de linha."),
    ("Q-037", "Queima de Pontas de Linha com Ferro de Selagem (Thread Tail Heat Sealing Tool)", "Acabamento & Finalização", "Fundamental 🟢",
     "Aparamento térmico de rabichos de linha em emblemas bordados, derretendo a ponta do poliéster para que não se solte.",
     "Procedimento que confere padrão de exportação aos patches e chaveiros bordados."),
    ("Q-038", "Queda de Tensão Elétrica e Proteção por Nobreak (Voltage Drop & UPS Protection)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Uso de nobreak senoidal online para proteger a máquina de bordar contra desligamentos repentinos no meio de peças caras.",
     "Investimento preventivo que evita a perda de casacos caros ou toalhas finas por quedas de energia momentâneas no ateliê."),
    ("Q-039", "Quilting com Ponto Triplo / Ponto Feijão (Bean Stitch Triple Run Quilting)", "Elementos do Bordado", "Fundamental 🟢",
     "Ponto corrido reforçado onde a agulha dá três passos (dois para a frente e um para trás), criando linhas grossas e marcantes.",
     "Excelente para contornos rústicos, detalhes de olhos e quilting decorativo de alta visibilidade.")
]

for code, term, cat, lvl, ssum, sdef in q_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O parâmetro é calibrado no software ou equipamento.", "2. A máquina movimenta o cabeçote com controle dinâmico.", "3. A formação do ponto ocorre de forma protegida contra atritos.", "4. O acabamento resulta em durabilidade e precisão técnica."],
        f"Este termo ({term}) é fundamental para prevenir quebras de agulha, fazer quilting perfeito e dominar a manutenção do ateliê.",
        ["Bordados de quilting acolchoado em bastidor.", "Prevenção de quebras de agulha e queima de fios.", "Acabamento e selagem de emblemas e patches."],
        "Relaciona-se com vida útil de agulha, tensão da bobina e velocidade PPM.",
        ["❌ Bordar peças com zíper sem fazer o traçado (trace) prévio no painel", "❌ Usar agulhas velhas que já ultrapassaram 2 milhões de pontos", "❌ Trabalhar em dias de chuva sem nobreak senoidal na máquina"],
        ["Se a agulha quebrar com frequência no mesmo ponto: confira se o traçado não está colidindo com o bastidor ou zíper.", "Se o fio de poliéster derreter na agulha: reduza a velocidade para 700 PPM e use agulha dourada de titânio.", "Se a lançadeira desfiar a linha: passe uma lixa 1500 no bico para tirar rebarbas."],
        "Sempre faça o 'Trace' (traçado de contorno) na tela da máquina antes de apertar o start! Esse teste de 5 segundos mostra o perímetro exato do bordado e impede que a agulha bata na borda plástica do bastidor ou nos dentes de um zíper!",
        "Uma agulha de máquina industrial bate no tecido até 1000 vezes por minuto, gerando temperaturas na ponta que chegam a passar de 150°C pelo puro atrito com o tecido!",
        "Programe um desenho simples com ponto triplo (bean stitch) e compare com o ponto corrido comum para ver como a linha fica encorpada e bonita.",
        ssum,
        ["Quebra de Agulha", "Quilting em Bastidor", "Lançadeira Rotativa (Rotary Hook)", "Agulha com Banho de Titânio", "Ponto Triplo (Bean Stitch)"]
    ))

# R-017 a R-032 (16)
r_specs = [
    ("R-017", "Repuxo Longitudinal de Ponto Tatami (Tatami Longitudinal Shrinkage Mechanics)", "Programação de Bordado", "Avançado 🔴",
     "Contração física do tecido na direção paralela às linhas de preenchimento que deforma contornos redondos.",
     "Fenômeno que exige do programador aplicar subponto em grade (grid underlay) cruzado para ancorar as fibras antes do preenchimento principal."),
    ("R-018", "Rolo de Alimentação Contínua de Entretela (Continuous Roll Stabilizer Dispenser)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Suporte de bancada com guilhotina manual para corte rápido de folhas de entretela a partir de rolos de 100 metros.",
     "Acessório indispensável para organizar o ateliê e cortar entretelas na medida exata de cada bastidor sem desperdício."),
    ("R-019", "Respiro de Arremate / Folga de Tensão Final (Tie-Off Tension Release Slack)", "Programação de Bordado", "Fundamental 🟢",
     "Comando milimétrico do software que libera alguns milímetros de linha frouxa antes do corte para não repuxar o ponto arrematado.",
     "Evita que o último ponto fique excessivamente tracionado e deforme o desenho após a máquina cortar o fio."),
    ("R-020", "Régua Guia de Alinhamento para Bastidor de Boné (Cap Frame Framing Gauge & Base)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Dispositivo de bancada que prende o bastidor de boné permitindo esticar a carneira e a lona com as duas mãos livres.",
     "Fundamental para bordar bonés sem rugas e sem desvios na costura central do bico."),
    ("R-021", "Rolamento de Eixo Principal com Vedação Dupla (Double-Sealed Main Shaft Bearing)", "Componentes da Máquina", "Avançado 🔴",
     "Mancal de esferas com blindagem em borracha que impede a entrada de pó de entretela nas pistas de rolamento.",
     "Garante giro silencioso e suave do motor principal durante mais de 10 anos de operação pesada contínua."),
    ("R-022", "Raiom / Linha de Bordado de Seda Artificial (Viscose Rayon Classical Embroidery Thread)", "Agulhas & Fios", "Fundamental 🟢",
     "Fio brilhoso de celulose regenerada reconhecido mundialmente pela maciez incomparável e caimento sedoso.",
     "A escolha perfeita para roupas de bebê, peças de gala e tecidos nobres que não toleram a rigidez de linhas sintéticas."),
    ("R-023", "Redução Automática de Velocidade em Pontos Longos (Auto Speed Slowdown on Long Stitches)", "Funções da Máquina", "Fundamental 🟢",
     "Recurso inteligente da máquina que desacelera o motor para 500 PPM ao detectar saltos ou pontos maiores que 6 mm.",
     "Protege a agulha e o pantógrafo contra forças de inércia bruscas e assegura que a lançadeira não perca a laçada."),
    ("R-024", "Reposição de Pontos por Parada de Quebra (Auto Reverse Stitch Recovery on Thread Break)", "Funções da Máquina", "Fundamental 🟢",
     "Comando no painel que faz o bastidor recuar 5 a 10 pontos automaticamente para reiniciar exatamente onde a linha arrebentou.",
     "Elimina vãos em branco no bordado sem que o operador precise navegar manualmente pelos pontos da matriz."),
    ("R-025", "Rebarbador de Bico de Lançadeira (Rotary Hook Deburring Tool & Emery Cord)", "Manutenção & Lubrificação", "Avançado 🔴",
     "Fio abrasivo fino ou lâmina de polimento diamantada usada para remover riscos microscópicos do gancho da lançadeira.",
     "Ferramenta de socorro do mecânico para recuperar lançadeiras danificadas por impactos de agulhas sem precisar trocá-las."),
    ("R-026", "Resolução de Movimento do Pantógrafo (Pantograph Stepping Pulse Resolution)", "Componentes da Máquina", "Avançado 🔴",
     "Menor incremento mecânico que o bastidor consegue se deslocar (geralmente 0.05 mm por micropasso do motor).",
     "Define a nitidez de curvas e detalhes finos: quanto maior a resolução do encoder, mais suaves serão as bordas bordadas."),
    ("R-027", "Recuo Térmico de Linha de Poliéster (Heat Shrinkage Resistance in Polyester)", "Agulhas & Fios", "Fundamental 🟢",
     "Propriedade de estabilidade dimensional que garante que o bordado não encolha nem deforme quando passado a ferro a 150°C.",
     "Vantagem expressiva do poliéster trilobal moderno em relação a fios naturais ou sintéticos de baixa qualidade."),
    ("R-028", "Restauração de Arquivos Danificados de Matriz (Corrupted Embroidery File Recovery)", "Softwares & Formatos", "Intermediário 🟡",
     "Procedimento de conversão e limpeza de cabeçalho em software para recuperar arquivos .DST ou .PES corrompidos por pendrives.",
     "Evita a perda de matrizes raras ou de clientes antigos que sofreram erros de gravação em mídias magnéticas."),
    ("R-029", "Roda Dentada de Troca de Cores (Color Change Geneva Drive & Indexing Gear)", "Componentes da Máquina", "Avançado 🔴",
     "Mecanismo em cruz de malta ou came indexador que converte o giro contínuo do motor na parada exata de cada agulha.",
     "Assegura que a troca de agulhas trave no canal milimétrico exato sem vibração nem travamento mecânico."),
    ("R-030", "Rolo de Fita Térmica de Fixação de Matrizes (Heat-Resistant Embroidery Placement Tape)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Fita adesiva resistente ao calor que prende tecidos e entretelas no bastidor sem deixar cola na agulha.",
     "Excelente para fixar apliques, toalhas e materiais lisos de maneira limpa e prática."),
    ("R-031", "Recobrimento de Ponto Cheio sobre Tatami (Satin Border Capping on Tatami Fill)", "Programação de Bordado", "Fundamental 🟢",
     "Técnica clássica de emoldurar grandes áreas preenchidas com uma borda elegante de ponto acetinado.",
     "Confere destaque tridimensional e acabamento limpo a escudos de times, logomarcas e emblemas corporativos."),
    ("R-032", "Rotina de Aquecimento Matinal da Máquina (Morning Warm-Up Routine for Embroidery Machines)", "Operação da Máquina", "Fundamental 🟢",
     "Procedimento de rodar a máquina vazia por 2 minutos em velocidade média (500 PPM) para distribuir o óleo nos rolamentos antes de iniciar o turno.",
     "Prática profissional que prolonga a vida útil dos componentes mecânicos em dias frios de inverno.")
]

for code, term, cat, lvl, ssum, sdef in r_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. A verificação do procedimento ou parâmetro é executada com rigor.", "2. A máquina movimenta o pantógrafo com dinâmica equilibrada.", "3. A formação do ponto ocorre com tensão uniforme e tração suave.", "4. O trabalho exibe resistência a lavagens e apresentação estética perfeita."],
        f"Este termo ({term}) é fundamental para controlar o repuxo em tatami, aquecer a máquina nos dias frios e emoldurar bordados com perfeição.",
        ["Bordado de brasões e emblemas corporativos.", "Produção de enxovais em tecidos delicados.", "Manutenção preventiva e aquecimento mecânico diário."],
        "Relaciona-se com compensação de repuxo, recuperação de quebras e velocidade PPM.",
        ["❌ Iniciar a produção pesada em dias frios sem fazer o aquecimento matinal da máquina", "❌ Bordar blocos gigantes de tatami sem compensação de repuxo longitudinal", "❌ Ignorar rebarbas na lançadeira que desfiam a linha"],
        ["Se a máquina falhar na troca de cor: limpe o mecanismo indexador de troca.", "Se o bordado abrir vão entre o tatami e o contorno: aumente a compensação de repuxo e cruze o subponto.", "Se a linha arrebentar: use a função de recuo de 5 a 10 pontos do painel."],
        "Nos dias frios de inverno, nunca ligue a máquina e coloque logo para rodar a 900 PPM! O óleo fica viscoso e frio nas engrenagens. Rode um desenho de teste vazio a 500 PPM por 2 minutos para aquecer o motor e espalhar o óleo!",
        "A fita térmica usada em bordado resiste a mais de 200°C e não deixa nenhuma meleca de cola na agulha nem no tecido!",
        "Pratique fazer o recuo de 5 pontos no painel da sua máquina para ver como ela volta exatamente no mesmo trilho sem errar a posição.",
        ssum,
        ["Ponto Tatami (Fill Stitch)", "Compensação de Repuxo (Pull Compensation)", "Lançadeira Rotativa (Rotary Hook)", "Linha de Bordado de Raiom", "Velocidade de Rotação (PPM)"]
    ))

# S-039 a S-045 (7)
s_specs = [
    ("S-039", "Sensor Óptico de Giro de Linha Superior (Optical Thread Rotation Sensor)", "Componentes da Máquina", "Fundamental 🟢",
     "Polia com fendas ópticas ou sensor infravermelho que detecta o fluxo de linha superior e para a máquina se a linha arrebentar.",
     "Mecanismo de controle em tempo real que interrompe o bordado em menos de 3 pontos quando o fio acaba ou arrebenta."),
    ("S-040", "Solenoide de Acionamento da Faca de Corte (Trimmer Knife Actuator Solenoid)", "Componentes da Máquina", "Avançado 🔴",
     "Eletroímã de ação rápida que dispara a alavanca da navalha móvel para aparar a linha sob a chapa de agulha.",
     "Componente eletromecânico que executa o curso de corte em frações de segundo sincronizado com o ângulo do eixo principal."),
    ("S-041", "Suporte de Bastidores de Mesa Plana (Flat Table Sash Frame Bracket)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Braços laterais extensíveis de aço reforçado que sustentam bastidores gigantes de até 50x120 cm para bordado contínuo de tecidos planos.",
     "Acessório indispensável para transformar a máquina tubular em máquina plana para bordar colchas, vestidos de noiva e tecidos pesados."),
    ("S-042", "Subdivisão Fractal de Ponto de Preenchimento (Fractal Fill Stitch Generation)", "Programação de Bordado", "Avançado 🔴",
     "Algoritmo matemático moderno de digitalização que preenche formas orgânicas com caminhos fractais sem linhas retas visíveis.",
     "Cria texturas ricas e inovadoras similares a camuflagens, pétalas de flores e padrões de folhas naturais sem repetições monótonas."),
    ("S-043", "Sapatilha Magnética para Fixação de Emblemas (Magnetic Patch Embroidery Shoe)", "Técnicas de Bastidor", "Fundamental 🟢",
     "Acessório com ímãs embutidos que fixa emblemas já recortados no bastidor para bordar apenas os contornos de fixação.",
     "Ideal para ateliês que prestam serviços para fardamentos escolares e jaquetas de motociclistas em grandes volumes."),
    ("S-044", "Servo Motor Brushless de Eixo Principal (Brushless AC Servo Main Motor)", "Componentes da Máquina", "Avançado 🔴",
     "Motor elétrico sem escovas de alto rendimento que comanda o giro da máquina com silêncio total e zero manutenção de carvão.",
     "O padrão moderno de acionamento em máquinas industriais: consome até 40% menos energia e entrega rotação constante de até 1200 PPM."),
    ("S-045", "Sensor de Posição Zero do Pantógrafo (Pantograph Limit Microswitch Sensor)", "Componentes da Máquina", "Fundamental 🟢",
     "Sensor óptico ou mecânico que identifica os limites físicos do bastidor e calibra o ponto de origem toda vez que a máquina liga.",
     "Garante que o carro do pantógrafo saiba sua posição exata no espaço tridimensional e não colida contra as laterais da máquina.")
]

for code, term, cat, lvl, ssum, sdef in s_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O sensor ou solenoide é verificado na inicialização da máquina.", "2. A máquina responde a pulsos elétricos com velocidade controlada.", "3. A formação do ponto ocorre com sincronia eletrônica e mecânica.", "4. O acabamento resulta em alta precisão sem falhas de corte."],
        f"Este termo ({term}) é vital para o funcionamento eletrônico seguro e o controle dos cortes automáticos da máquina.",
        ["Bordado em bastidores gigantes de mesa plana.", "Fixação rápida de emblemas e patches prontos.", "Diagnóstico de sensores de linha e pantógrafo."],
        "Relaciona-se com solenoide de corte, sensor de quebra e servo motor principal.",
        ["❌ Bloquear os sensores de limite do pantógrafo arriscando colisões mecânicas", "❌ Deixar poeira de linha cobrir a lente do sensor óptico de rotação", "❌ Operar sem verificar a calibração da posição zero"],
        ["Se a máquina não acusar quebra de linha: limpe a polia do sensor óptico com pincel macio.", "Se o corte de linha falhar repetidamente: revise o acionamento do solenoide sob a mesa.", "Se o pantógrafo bater no fim de curso: ajuste a chave microswitch de limite."],
        "Uma vez por semana, passe um pincel macio ou um jato de ar seco nos sensores de quebra de linha da torre do cabeçote. O pó de entretela acumulado nas fendas ópticas faz a máquina achar que a linha está correndo normal mesmo quando ela já quebrou!",
        "Os servo motores modernos sem escovas (brushless) possuem rendimento superior a 90% e conseguem frear de 1000 PPM a zero em menos de 1/4 de volta!",
        "Aperte o botão de corte manual no painel e ouça o clique seco do solenoide acionando a faca sob a chapa.",
        ssum,
        ["Sensor de Quebra de Linha (Thread Break Sensor)", "Solenoide de Corte", "Pantógrafo", "Servo Motor Brushless", "Corte Automático de Linha (Auto-Trim)"]
    ))

# T-033 a T-048 (16)
t_specs = [
    ("T-033", "Trava de Fixação de Bastidor no Pantógrafo (Hoop Retaining Latch Bracket)", "Componentes da Máquina", "Fundamental 🟢",
     "Mecanismo de engate rápido com mola e pino de aço que prende as hastes do bastidor ao carro móvel da máquina.",
     "Garante que o bastidor não balance nem se solte durante as acelerações bruscas em velocidades acima de 800 PPM."),
    ("T-034", "Tensor Eletrônico Digital de Linha (Digital Closed-Loop Thread Tensioner)", "Componentes da Máquina", "Avançado 🔴",
     "Sistema inteligente com atuador eletromagnético que calibra a tensão da linha automaticamente para cada tipo de ponto.",
     "Tecnologia de ponta que ajusta a tensão de forma contínua: afrouxa nos pontos longos e aperta nos contornos curtos."),
    ("T-035", "Torre de Cones Anti-Vibração (Thread Stand Anti-Vibration Tree)", "Componentes da Máquina", "Fundamental 🟢",
     "Estrutura metálica vertical que sustenta 12 a 15 cones de linha de bordado com estabilidade contra oscilações mecânicas.",
     "Mantém os carretéis alinhados sob os arames superiores, impedindo que tombem ou enrosquem fios vizinhos."),
    ("T-036", "Técnica de Camadas em Ponto Tatami (Multi-Layer Tatami Stitch Density)", "Programação de Bordado", "Intermediário 🟡",
     "Divisão de uma área densa em duas camadas sobrepostas de densidade leve (ex: 0.70 mm cada) com ângulos cruzados em 90 graus.",
     "Método profissional para criar cobertura perfeita sem rigidez e sem repuxar o tecido como faria um bloco maciço único."),
    ("T-037", "Tubo de Silicone para Passagem de Linhas Metálicas (Silicone Thread Feeder Tube)", "Componentes da Máquina", "Fundamental 🟢",
     "Tubo flexível transparente por onde o fio metalizado corre suavemente protegido do contato abrasivo com peças metálicas.",
     "Acessório que reduz a quebra de linhas douradas e prateadas em até 80% em ateliês especializados em fantasias e vestuário de luxo."),
    ("T-038", "Tolerância de Pulo de Ponto em Alta Rotação (Skipped Stitch Tolerance Window)", "Tensão & Calibração", "Avançado 🔴",
     "Margem cronométrica em microssegundos durante a qual o gancho da lançadeira deve cruzar a cava da agulha para capturar o laço.",
     "Se o tempo mecânico (timing) estiver adiantado ou atrasado mesmo em 5 graus, a máquina pulará pontos repetidamente."),
    ("T-039", "Tampa de Caixa de Bobina com Mola de Aço (Steel Spring Latch Bobbin Case Cap)", "Componentes da Máquina", "Fundamental 🟢",
     "Alavanca articulada que trava a bobina dentro do compartimento e serve para retirá-la com uma só puxada da ponta dos dedos.",
     "Componente prático e robusto presente em todas as caixas de bobina industriais padrão L e padrão M."),
    ("T-040", "Teclado Numérico de Atalhos no Painel (Quick Numeric Keypad Operator Panel)", "Componentes da Máquina", "Fundamental 🟢",
     "Conjunto de teclas físicas de acesso rápido para mudar cores, girar matrizes ou acionar o corte de linha com um único toque.",
     "Agiliza o controle diário da máquina sem necessidade de navegar por menus complexos na tela sensível ao toque."),
    ("T-041", "Tensão da Linha de Bobina com Calibrador Towa (Bobbin Thread Tension Calibration)", "Tensão & Calibração", "Fundamental 🟢",
     "Medição padronizada da resistência da mola da caixa de bobina que deve ficar rigorosamente entre 20 e 25 gramas-força.",
     "A base de toda a tensão de bordado: com a bobina calibrada, basta regular a linha superior para ter pontos impecáveis."),
    ("T-042", "Toque Macio em Bordado Direto (Soft Hand Feel in Direct Embroidery)", "Acabamento & Finalização", "Fundamental 🟢",
     "Propriedade de peças bordadas que permanecem confortáveis e flexíveis ao toque da pele sem parecerem placas rígidas de plástico.",
     "Alcançado com o uso de entretelas corretas, densidades equilibradas (0.40 a 0.42 mm) e fios de viscose ou poliéster fino."),
    ("T-043", "Trilho Guia Prismático com Rolamento Linear (Prismatic Linear Guide Rail)", "Componentes da Máquina", "Avançado 🔴",
     "Trilho de aço temperado com perfil prismático usinado por onde o pantógrafo desliza com atrito quase nulo e folga zero.",
     "Garante precisão milimétrica de posicionamento em movimentos circulares rápidos e diagonais."),
    ("T-044", "Transformador Isolador de Voltagem (Industrial Voltage Isolation Transformer)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Equipamento elétrico que filtra ruídos e oscilações da rede pública e fornece energia pura para a eletrônica da bordadeira.",
     "Protege as placas controladoras contra queimas caras em regiões com instabilidade na rede elétrica."),
    ("T-045", "Trocador Rápido de Agulha com Imã Guia (Magnetic Needle Inserter & Changer Tool)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Pequena ferramenta com pastilha magnética que segura a agulha na posição correta da cava na hora de fixar o parafuso.",
     "Evita que a agulha caia dentro do compartimento da lançadeira na hora da troca e garante que a cava fique voltada exatamente para trás."),
    ("T-046", "Traçado Pré-Operacional de Área (Pre-Sew Trace Area Verification)", "Operação da Máquina", "Fundamental 🟢",
     "Movimento rápido do pantógrafo que contorna o perímetro retangular do bordado antes de costurar para evitar colisões.",
     "Regra de ouro de segurança de ateliê que poupa bastidores quebrados e agulhas entortadas."),
    ("T-047", "Tapete de Corte com Base Autocicatrizante (Self-Healing Cutting Mat for Appliqué)", "Equipamentos e Máquinas", "Fundamental 🟢",
     "Base de corte milimetrada para bancada que não risca com o estilete rotativo e facilita o preparo de apliques e entretelas.",
     "Item obrigatório na mesa de montagem para cortar peças no esquadro com rapidez e segurança."),
    ("T-048", "Termo-Adesivo Permanente para Emblemas (Permanent Heat-Seal Film for Embroidered Patches)", "Acabamento & Finalização", "Fundamental 🟢",
     "Filme termocolante de poliuretano de alta aderência aplicado no avesso de patches com prensa térmica a 160°C.",
     "Permite colar emblemas em jaquetas e bonés sem costura, resistindo a dezenas de lavagens industriais sem descolar.")
]

for code, term, cat, lvl, ssum, sdef in t_specs:
    verbetes.append(make_v(
        code, term, cat, lvl,
        "Locução nominal técnica.", "Terminologia internacional da indústria de máquinas e softwares de bordado.",
        ssum, sdef,
        ["1. O dispositivo ou procedimento é verificado antes da carga.", "2. A máquina movimenta os eixos com precisão mecânica.", "3. A formação da laçada de linha ocorre com tensão uniforme.", "4. O trabalho exibe toque macio e acabamento de padrão internacional."],
        f"Este termo ({term}) é indispensável para travar o bastidor com segurança, fazer o traçado prévio e calibrar a bobina.",
        ["Bordado de brasões e patches com termocolante.", "Calibração de tensão de bobina com medidor Towa.", "Verificação de segurança e traçado pré-operacional."],
        "Relaciona-se com traçado de área (trace), tensão da bobina e travas de bastidor.",
        ["❌ Bordar sem conferir a trava de fixação do bastidor no pantógrafo", "❌ Deixar a agulha torta com a cava virada para a frente", "❌ Deixar o bordado excessivamente pesado sem toque macio"],
        ["Se o bastidor vibrar ou soltar no bordado: confira a trava do pantógrafo.", "Se o bordado ficar duro e pesado: reduza a densidade e divida em duas camadas leves.", "Se a bobina estiver muito frouxa ou apertada: calibre com o tensiômetro Towa em 22 a 25 gramas."],
        "Ao trocar a agulha da máquina, a cava (aquela cavidade na parte de trás) DEVE ficar voltada exatamente para trás, em direção à lançadeira! Se você colocar a agulha de lado ou virada para a frente, a máquina não fisga a linha e quebra na hora!",
        "O termo-adesivo de alta fusão para patches atinge sua colagem definitiva quando resfriado sob pressão, aguentando até lavagens com alvejante sem soltar as bordas!",
        "Use o trocador magnético ou uma chave de agulha para segurar a agulha nova e confira com o dedo se a cava está perfeitamente alinhada para trás.",
        ssum,
        ["Bastidor de Bordado Computadorizado", "Caixa de Bobina (Bobbin Case)", "Towa Medidor de Tensão", "Trace / Traçado de Contorno", "Agulhas & Fios"]
    ))

print(f"Total de verbetes na Parte 3: {len(verbetes)}")

with open("src/data/verbetesRestored3.ts", "w", encoding="utf-8") as f:
    f.write("import { Verbete } from '../types';\n\n")
    f.write("export const VERBETES_RESTORED_PART3: Verbete[] = ")
    f.write(json.dumps(verbetes, ensure_ascii=False, indent=2))
    f.write(";\n")

print("Arquivo src/data/verbetesRestored3.ts gerado com sucesso!")

import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART14: Verbete[] = [
  {
    "id": "i-088-insercao-matriz-multi-bastidor-alinhamento-cruzetas",
    "code": "I-088",
    "letter": "I",
    "term": "Inserção de Matriz Multi-Bastidor com Alinhamento de Cruzetas (Multi-Hooping Splitting & Crosshair Registration)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação e Software",
    "origin": "Criado na transição do bordado mecânico para o digital nos anos 1990 para permitir bordar desenhos maiores que o campo físico do bastidor da máquina.",
    "summary": "Técnica de divisão matemática de desenhos gigantes em várias partes com pontos de encaixe e cruzetas de alinhamento para bordar em múltiplas etapas.",
    "definition": "A Inserção de Matriz Multi-Bastidor com Alinhamento de Cruzetas (Multi-Hooping Sectioning & Crosshair Registration Protocol) é o método técnico de fragmentação e sincronização espacial de desenhos de bordado cujas dimensões excedem o limite físico do bastidor da máquina. O software divide a arte em dois ou mais blocos lógicos adjacentes e programa cruzetas de costura (Alignment Crosshairs / Registration Marks) na junção de cada pedaço. Ao terminar a primeira parte, a bordadeira remove o bastidor, remonta o tecido alinhando as cruzetas com alfinetes ou ponteiro laser e prossegue a costura sem nenhuma fenda ou sobreposição visível na emenda.",
    "technicalDetails": "A margem de sobreposição (Overlap Margin) recomendada entre setores multi-bastidor é de 5 mm a 8 mm com divisão feita ao longo de linhas naturais do desenho (veios de folhas, contornos de pétalas). As cruzetas de alinhamento são digitalizadas em ponto corrido fino de 2,0 mm com três braços ortogonais de 10 mm em cor contrastante de fácil remoção.",
    "construction": [
      "Definição da malha de corte no software respeitando o campo máximo de cada bastidor",
      "Geração de cruzetas de registro (Registration Crosshairs) no final da Parte 1",
      "Geração das mesmas cruzetas de referência no início da Parte 2",
      "Margem de transição com pontos intercalados (Feathered Edge / Overlap Blend)",
      "Paradas automáticas (Stop) para conferência e reposicionamento milimétrico do tecido"
    ],
    "howItWorks": [
      "1. O desenho gigante de 40 cm é dividido em 2 arquivos no programa (Parte A e Parte B).",
      "2. A máquina borda a Parte A e, no finalzinho, faz duas cruzetinhas com linha de cor chamativa.",
      "3. A bordadeira tira o bastidor, prende o tecido mais para frente e coloca a agulha exatamente em cima das cruzetinhas.",
      "4. Ao dar o play na Parte B, a máquina continua o bordado exatamente de onde parou, emendando tudo perfeitamente!"
    ],
    "mainTypes": [
      "Divisão Linear Simples (Para faixas longas de toalhas e barras de lençol)",
      "Divisão em Quadrantes 2x2 (Para grandes brasões circulares de jaquetas)",
      "Multi-Bastidor com Sistema Magnético de Troca Contínua (Para rolos de tecido e cortinas)"
    ],
    "characteristics": [
      "Permite bordar desenhos enormes mesmo em máquinas com bastidores menores (ex: 13x18 cm)",
      "Emenda 100% invisível quando planejada nas linhas naturais do desenho",
      "Multiplica o faturamento do ateliê ao aceitar pedidos de peças grandes e luxuosas"
    ],
    "limitations": [
      "Exige atenção redobrada e paciência na hora de prender o tecido no segundo bastidor",
      "Se o tecido esticar ou escorregar na remontagem, a emenda pode ficar torta"
    ],
    "numberingSystem": [
      "Tamanho das Cruzetas de Alinhamento: 10 mm x 10 mm",
      "Margem de Sobreposição Recomendada: 5,0 mm a 8,0 mm",
      "Tolerância de Desvio Aceitável: < 0,5 mm"
    ],
    "advantages": [
      "✔ Nunca mais recuse um trabalho lindo porque seu bastidor é pequeno",
      "✔ Crie barras contínuas maravilhosas de ponta a ponta em toalhas de banho",
      "✔ Emendas perfeitas e invisíveis que deixam os clientes impressionados"
    ],
    "commonErrors": [
      "❌ Dividir o desenho bem no meio do rosto de uma pessoa ou de uma letra em vez de buscar um espaço vazio",
      "❌ Esquecer de colocar as cruzetas de alinhamento na matriz",
      "❌ Puxar o tecido com força diferente no segundo bastidor (a segunda parte fica encolhida)"
    ],
    "voceSabia": "Mantos reais e vestidos de coroação históricos de até 3 metros de comprimento eram bordados em partes separadas usando gabaritos de madeira perfurada e depois unidos à mão com pontos invisíveis!",
    "curiosidadeTecnica": "Os softwares modernos utilizam inteligência de borda emplumada (Feathering Edge) para que as pontas da Parte A e da Parte B se entrelacem de forma aleatória, tornando impossível para o olho humano enxergar a linha de emenda.",
    "dicaArtrelados": "Ao fazer a segunda montagem do tecido no multi-bastidor: espete um alfinete de cabeça bem fino no centro exato da cruzeta bordada e use a função de girar ou mover o desenho no painel da máquina até a ponta da agulha encostar certinho no alfinete! É acerto de 100% na primeira tentativa!",
    "applications": [
      "Barras inteiras de toalhas de mesa, caminhos e jogos de cama king size",
      "Bordados gigantes nas costas de jaquetas jeans e de couro",
      "Estandartes de igreja, bandeiras solenes e brasões acadêmicos",
      "Painéis decorativos de parede e quadros artísticos bordados"
    ],
    "troubleshootingTips": [
      "Se a emenda ficou com um espaço em branco mostrando o tecido, aumente a sobreposição para 8 mm no software.",
      "Se a Parte B ficou inclinada, use o botão de rotação de 1 grau no painel da máquina para alinhar as duas cruzetas.",
      "Depois de bordar e conferir o encaixe, puxe a linha das cruzetinhas e corte para tirá-las do tecido."
    ],
    "relatedTerms": [
      "Multi-Bastidor (Multi-Hooping)",
      "Cruzeta de Alinhamento",
      "Gabarito de Encaixe",
      "Ponteiro Laser",
      "Sobreposição (Overlap)"
    ],
    "tags": [
      "multi-bastidor",
      "multi-hooping",
      "cruzetas",
      "alinhamento",
      "emenda",
      "divisao-matriz",
      "grandes-formatos"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Multi-Hooping and Large Design Management. Sydney: Wilcom, 2023. EMBIRD SUITE. Multi-Hoop Alignment and Splitting Tutorial. Košice: Balarad, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Multi-Hooping and Large Design Management. Sydney: Wilcom, 2023.",
      "EMBIRD SUITE. Multi-Hoop Alignment and Splitting Tutorial. Košice: Balarad, 2022.",
      "ARTRELADOS. Engenharia de Fracionamento e Registro Espacial Multi-Bastidor. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Pegue um desenho longo de 25 cm e divida em duas partes no seu programa, colocando duas cruzetas de alinhamento no meio. Borde a Parte 1 em um tecido, remonte no bastidor alinhando a agulha pelas cruzetas com auxílio de um alfinete e borde a Parte 2. Veja como a emenda fica perfeita!",
    "quickSummary": "É o método de dividir um bordado bem grande em 2 ou mais partes para caber no bastidor da sua máquina com encaixe perfeito.",
    "beginnerExplanation": "Se você quer bordar um desenho bem grandão mas o seu bastidor é pequeno, o computador divide o desenho em dois pedaços e faz marquinhas de cruzinha para você saber exatamente onde emendar o segundo pedaço. Assim você faz bordados gigantes com a sua máquina atual!",
    "recommendedSettings": {
      "speedPPM": "650 a 750 PPM",
      "needleType": "Padrão",
      "stabilizer": "Entretela Rasgável Média 60g",
      "threadTension": "Padrão",
      "density": "Sobreposição de 6,0 mm com cruzetas de 10 mm"
    }
  },
  {
    "id": "i-089-interseccao-camadas-enchimento-tatami",
    "code": "I-089",
    "letter": "I",
    "term": "Intersecção de Camadas de Enchimento Tatami (Underlay Grid Angle Offsets & Orthogonal Cross-Lattice)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação e Software",
    "origin": "Da engenharia de fundações estruturais civis e treliças de concreto armado aplicadas à física de deformação do tecido no bordado digital.",
    "summary": "Cruzamento angular entre as camadas de suporte e a cobertura final de tatami (grades ortogonais a 90° e 45°) para criar uma base sólida que anula o repuxamento do tecido.",
    "definition": "A Intersecção de Camadas de Enchimento Tatami (Underlay Grid Angle Offsets & Lattice Stabilization) é o princípio de matrizaria que estabelece a relação geométrica entre a orientação angular das camadas de base preliminar (Tatami Underlay / Grid) e a camada de cobertura superficial (Top Cover Tatami). Quando a cobertura é orientada a 45°, o enchimento de grade deve ser digitalizado com duas camadas cruzadas em 90° e 0° (ou 135° e 45°). Esse entrelaçamento em treliça (Cross-Hatch Lattice) cria uma malha armada invisível que bloqueia a elasticidade do tecido nos eixos X e Y, impedindo o encolhimento e o aparecimento de 'buracos' no meio do desenho.",
    "technicalDetails": "A grade de suporte (Double Grid Underlay) deve ter espaçamento de linha de 2,5 mm a 3,5 mm com comprimento de ponto de 3,5 mm a 4,0 mm. O ângulo de corte entre a camada de suporte final e a cobertura deve manter uma deflexão mínima de 30° a 45° para evitar que os pontos de cobertura 'afundem' nas valas dos pontos de baixo.",
    "construction": [
      "Camada de contorno de contenção perimetral (Edge Run Underlay)",
      "Primeira grade diagonal de sustentação (Grid 1 a 45°)",
      "Segunda grade perpendicular de amarração (Grid 2 a 135°)",
      "Camada de cobertura final Tatami compacta orientada a 0° ou 90°",
      "Distribuição uniforme de nós de penetração sem sobreposição de furos"
    ],
    "howItWorks": [
      "1. A máquina inicia o bordado fazendo uma grade aberta e cruzada no tecido parecendo uma cerquinha.",
      "2. Essa grade 'grampeia' o tecido na entretela criando uma base firme e plana.",
      "3. Em seguida, a máquina borda a cobertura linda e lisinha de tatami por cima da grade.",
      "4. O bordado fica plano como um tapete, sem repuxar a camiseta e sem deixar o tecido aparecer por baixo."
    ],
    "mainTypes": [
      "Grade Dupla Ortogonal (Double Grid - Máxima estabilidade para malhas e dry-fit)",
      "Grade Simples com Contorno Perimetral (Para tecidos planos de algodão e sarja)",
      "Treliça Tatami Rala Redutora de Densidade (Para bordados grandes de jaquetas e bolsas)"
    ],
    "characteristics": [
      "Eliminação de 90% do encolhimento e repuxo em grandes áreas preenchidas",
      "Cobertura visual perfeita e aveludada mesmo com densidades mais econômicas por cima",
      "O tecido não franze nem fica parecendo uma 'concha' ou 'cuia' após sair do bastidor"
    ],
    "limitations": [
      "Em tecidos ultrafinos de seda, uma grade excessivamente densa pode deixar a peça armada e pesada",
      "Ângulos idênticos entre suporte e cobertura fazem o ponto cair dentro do buraco da base"
    ],
    "numberingSystem": [
      "Espaçamento da Grade de Suporte: 2,5 mm a 3,5 mm",
      "Ângulo de Deflexão Obrigatório: Mínimo de 30° a 45° em relação à cobertura",
      "Densidade da Cobertura Superior: 0,40 mm a 0,45 mm"
    ],
    "advantages": [
      "✔ Fim daquela frustração de bordar um escudo grande e ver a camiseta toda franzida",
      "✔ Permite economizar até 20% de pontos na cobertura mantendo a cor 100% fechada",
      "✔ O bordado fica plano, liso e profissional em qualquer tipo de tecido"
    ],
    "commonErrors": [
      "❌ Borda o tatami de cobertura direto no mesmo ângulo da grade de baixo (os pontos afundam e o tecido aparece)",
      "❌ Não colocar nenhuma grade de suporte em áreas grandes achando que economiza tempo (a peça enruga toda)",
      "❌ Usar grade muito apertada (menos de 1,5 mm) deixando o bordado duro como uma tábua"
    ],
    "voceSabia": "A ideia da grade cruzada sob o tatami veio diretamente da engenharia civil, onde os engenheiros colocam telas de aço cruzadas antes de jogar o concreto para que a laje nunca rache nem envergue!",
    "curiosidadeTecnica": "Quando o ângulo do enchimento cruza a 90° com a cobertura, a força de tração da linha superior é distribuída de forma isotrópica (igual em todas as direções), anulando o efeito de puxar o tecido para um lado só.",
    "dicaArtrelados": "Ao digitalizar brasões ou fundos grandes de tatami: nunca use apenas o contorno simples de suporte! Ative a opção 'Grade Dupla Tatami' (Double Grid) com espaçamento de 3,0 mm e ângulo a 45° da cobertura! O seu bordado vai sair perfeitamente liso e sem nenhuma ruga na roupa!",
    "applications": [
      "Grandes escudos, brasões de futebol e logotipos corporativos maciços",
      "Bordados em tecidos elásticos, malhas piquet de camisa polo e moletom",
      "Bordados em bolsas, mochilas e tecidos sintéticos pesados",
      "Fundo decorativo de quadros e almofadas com preenchimento total"
    ],
    "troubleshootingTips": [
      "Se o tecido está aparecendo em linhas falhadas no meio do tatami, mude o ângulo da grade em 45° em relação à cobertura.",
      "Se a camiseta ficou parecendo um prato fundo após tirar do bastidor, adicione a grade dupla de suporte no software.",
      "Se o bordado ficou muito duro e pesado, aumente o espaçamento da grade de 2,0 mm para 3,2 mm."
    ],
    "relatedTerms": [
      "Ponto Tatami",
      "Costura de Suporte (Underlay)",
      "Grade Dupla (Double Grid)",
      "Ângulo de Ponto",
      "Compensação de Repuxo"
    ],
    "tags": [
      "tatami",
      "grade-suporte",
      "underlay",
      "interseccao-angulos",
      "estabilidade",
      "anti-rugas",
      "matrizaria"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Underlay Architecture and Structural Foundations. Sydney: Wilcom, 2023. TAJIMA GROUP. Advanced Digitizing for Dimensional Stability. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Underlay Architecture and Structural Foundations. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. Advanced Digitizing for Dimensional Stability. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Arquitetura Estrutural de Malhas e Grades no Bordado Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Digitalize dois quadrados de 50 x 50 mm: o primeiro com cobertura tatami sem suporte nenhum e o segundo com Grade Dupla a 45°/135° e cobertura a 0°. Borde os dois em um pedaço de malha e veja como o segundo fica incrivelmente plano e perfeito enquanto o primeiro repuxa e deforma o tecido!",
    "quickSummary": "É o cruzamento de caminhas de linha por baixo do bordado para criar uma base firme que não deixa a roupa enrugar nem repuxar.",
    "beginnerExplanation": "Antes de fazer o piso de uma casa, os pedreiros colocam uma malha de ferro por baixo para o chão não afundar nem rachar. No bordado fazemos igualzinho: uma gradinha de linhas cruzadas por baixo que segura a roupa bem firme para o bordado ficar lisinho e perfeito por cima!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Entretela Rasgável 60g ou Malha",
      "threadTension": "Padrão",
      "density": "Grade de Suporte: 3,0 mm de espaçamento / Ângulo 45°"
    }
  },
  {
    "id": "i-090-inspecao-desgaste-ponta-lancadeira-lupa-bancada",
    "code": "I-090",
    "letter": "I",
    "term": "Inspeção de Desgaste da Ponta da Lançadeira com Lupa de Bancada (Hook Point Wear Audit & Micro-Burr Inspection)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Mecânica da Máquina",
    "origin": "Dos manuais técnicos de precisão das fabricantes japonesas Koban e Hirose Hooks para manutenção de alta velocidade.",
    "summary": "Protocolo de auditoria visual com lupa de 10x ou microscópio de bolso para identificar micro-rebarbas e desgaste na ponta da lançadeira causados por batidas de agulha.",
    "definition": "A Inspeção de Desgaste da Ponta da Lançadeira com Lupa de Bancada (Rotary Hook Point Audit & Optical Micro-Burr Diagnostics) é o exame óptico minucioso realizado periodicamente na extremidade afilada da lançadeira rotativa. A ponta da lançadeira (Hook Point) é responsável por interceptar o laço formado pela agulha em uma janela temporal de menos de 15 milissegundos. Quando ocorrem quebras de agulha ou deflexões violentas, o impacto metálico cria micro-rebarbas, riscos microscópicos e arredondamento da ponta. Esses defeitos invisíveis a olho nu desfiam a linha superior, causam quebras constantes e provocam falhas de ponto (Skipped Stitches).",
    "technicalDetails": "A inspeção utiliza uma lupa de relojoeiro ou lupa de bancada com iluminação LED de ampliação de 10x a 20x. O raio de curvatura da ponta da lançadeira deve ser mantido entre 0,03 mm e 0,05 mm. Rebarbas superficiais devem ser polidas delicadamente com pasta diamantada de granulação 3 a 5 micra ou lixa d'água grão 2000; se o desgaste na ponta exceder 0,2 mm de comprimento, a lançadeira deve ser substituída.",
    "construction": [
      "Lupa de bancada com anel de LED e lente acromática de 10x ou 20x",
      "Pincel macio e ar comprimido para limpeza prévia de fiapos e óleo",
      "Haste de teste de feltro ou ponta de unha para verificação tátil de rebarbas",
      "Lixa d'água superfina grão 2000 e pedras abrasivas especiais de polimento (Oilstone)",
      "Pasta de polimento à base de óxido de alumínio ou diamante micronizado"
    ],
    "howItWorks": [
      "1. A bordadeira desliga a máquina, retira a chapa de agulha e a caixa de bobina.",
      "2. Limpa toda a poeira de linha da lançadeira com um pincel macio.",
      "3. Posiciona a lupa de 10x sobre a ponta da lançadeira e gira o volante manualmente.",
      "4. Observa a ponta: se houver riscos ou uma pontinha amassada, ela faz o polimento suave com lixa 2000.",
      "5. Ao recolocar a máquina para rodar, as quebras de linha desaparecem como mágica!"
    ],
    "mainTypes": [
      "Inspeção Preventiva Semanal (Para ateliês com produção diária intensa)",
      "Inspeção Imediata Pós-Colisão (Obrigatória sempre que uma agulha bater forte e quebrar)",
      "Polimento de Precisão em Bancada com Micromotor e Disco de Feltro"
    ],
    "characteristics": [
      "Diagnóstico preciso e definitivo de quebras de linha misteriosas",
      "Economia enorme: recupera lançadeiras que pareciam 'estragadas' com um polimento de 1 minuto",
      "Garante a formação de laçada perfeita mesmo em linhas difíceis e metálicas"
    ],
    "limitations": [
      "Polimento com lixas grossas (grão 400 ou 600) destrói a geometria da ponta e inutiliza a lançadeira",
      "Não recupera lançadeiras cujo bico foi quebrado ou entortado profundamente"
    ],
    "numberingSystem": [
      "Ampliação Recomendada da Lupa: 10x a 20x com LED",
      "Granulação da Lixa de Polimento: Grão 2000 a 3000 (Superfina)",
      "Tolerância de Folga Agulha-Lançadeira: 0,05 mm a 0,10 mm"
    ],
    "advantages": [
      "✔ Acabe com as quebras inexplicáveis de linha que atrasam suas encomendas",
      "✔ Economize centenas de reais prolongando a vida útil da sua lançadeira original",
      "✔ Máquina funcionando suave, silenciosa e sem pular nenhum pontinho"
    ],
    "commonErrors": [
      "❌ Trocar a lançadeira inteira por achar que estragou, quando era apenas uma micro-rebarba fácil de polir",
      "❌ Usar lixa de unha comum ou lixa de ferro grossa (isso arredonda a ponta e estraga a peça)",
      "❌ Continuar bordando logo após uma quebra violenta de agulha sem conferir a ponta da lançadeira"
    ],
    "voceSabia": "Uma micro-rebarba de apenas 0,02 milímetros (a metade da espessura de um fio de cabelo) na ponta da lançadeira atua como uma lâmina afiada, cortando até 50 vezes a linha durante um único dia de bordado!",
    "curiosidadeTecnica": "As lançadeiras de topo de linha das marcas japonesas Koban e Hirose são revestidas com nitreto de titânio dourado ou carbono tipo diamante (DLC) com dureza superior a 80 HRC para resistir a milhões de rotações sem perder a afiação da ponta.",
    "dicaArtrelados": "Toda vez que uma agulha quebrar com barulho estalado na sua máquina: pare tudo! Pegue uma lupa ou a câmera com zoom do seu celular e olhe a pontinha da lançadeira! Se sentir um 'dente' raspando na sua unha, passe uma lixa d'água 2000 de levezinho com um pingo de óleo! Sua máquina volta a bordar sem quebrar linha nenhuma!",
    "applications": [
      "Manutenção corretiva e preventiva de máquinas domésticas e industriais",
      "Rotina de inspeção pós-quebra de agulhas grossas ou batidas em bastidor",
      "Recuperação de lançadeiras com rebarbas superficiais no próprio ateliê",
      "Garantia de qualidade na produção de bordados finos com linhas de seda e metálicas"
    ],
    "troubleshootingTips": [
      "Se a linha de cima desfiou várias vezes seguidas logo após trocar a agulha, a ponta da lançadeira está com rebarba da batida anterior.",
      "Para testar se há rebarba sem lupa, passe delicadamente a ponta de um cotonete na ponta da lançadeira: se o algodão desfiar e grudar nela, há rebarba.",
      "Polir sempre no sentido do comprimento da ponta, nunca em movimentos perpendiculares."
    ],
    "relatedTerms": [
      "Lançadeira Rotativa (Rotary Hook)",
      "Ponta da Lançadeira (Hook Point)",
      "Quebra de Agulha",
      "Polimento de Lançadeira",
      "Sincronismo de Ponto"
    ],
    "tags": [
      "inspecao",
      "lancadeira",
      "ponta-lancadeira",
      "rebarba",
      "lupa",
      "polimento",
      "manutencao-preventiva",
      "quebra-linha"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "KOBAN HOOKS CO. Rotary Hook Maintenance, Hook Point Inspection and Micro-Finishing. Osaka: Koban, 2023. HIROSE MANUFACTURING. Rotary Hook Engineering and Maintenance Handbook. Osaka: Hirose, 2022.",
    "bibliographicReferences": [
      "KOBAN HOOKS CO. Rotary Hook Maintenance, Hook Point Inspection and Micro-Finishing. Osaka: Koban, 2023.",
      "HIROSE MANUFACTURING. Rotary Hook Engineering and Maintenance Handbook. Osaka: Hirose, 2022.",
      "ARTRELADOS. Metrologia Óptica e Recuperação Micro-Mecânica de Lançadeiras de Bordado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Retire a chapa de agulha da sua máquina e use a câmera do seu celular com zoom de 5x e lanterna acesa para observar a pontinha da lançadeira. Passe suavemente a cabeça de um cotonete na beirada: veja como o exame óptico revela o estado real de conservação do coração da sua máquina!",
    "quickSummary": "É o exame com lupa na pontinha da lançadeira para achar marquinhas de batidas de agulha e polir para a linha parar de arrebentar.",
    "beginnerExplanation": "Sempre que uma agulha quebra, ela pode bater na pontinha da peça que puxa a linha lá embaixo (a lançadeira), deixando um machucadinho invisível que corta a linha de bordar. Olhando com uma lupinha e passando uma lixa bem macia, a gente tira o machucado e a máquina volta a bordar sem quebrar nenhuma linha!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Inspeção visual mensal com lupa 10x"
    }
  },
  {
    "id": "i-091-insercao-textura-couro-sintetico-tatami-leather-grain",
    "code": "I-091",
    "letter": "I",
    "term": "Inserção de Textura de Couro Sintético no Ponto Tatami (Leather Grain Simulation & Asymmetric Offset Texture)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Do design automotivo e da digitalização de texturas orgânicas na indústria de calçados e jaquetas de couro na Itália e Alemanha.",
    "summary": "Técnica de programação em ponto tatami com deslocamento assimétrico e micropartições de pontos que reproduz com realismo visual os poros e ranhuras do couro legítimo.",
    "definition": "A Inserção de Textura de Couro Sintético no Ponto Tatami (Leather Grain Texture Digitizing & Organic Emboss Effect) é a personalização matemática do padrão de repetição do ponto de preenchimento tatami para simular o relevo tátil e óptico da pele animal e do couro granulado (Full-Grain Leather). Em vez do tatami uniforme clássico (onde os pontos se repetem a cada 1/3 ou 1/4 de linha), o programador altera o fracionamento para sequências pseudo-aleatórias com comprimentos de ponto variáveis (de 3,0 mm a 6,5 mm) e linhas de relevo esculpido (Carving Lines). A variação do ângulo de reflexão da luz cria a ilusão de poros e dobras naturais de couro.",
    "technicalDetails": "A matriz é configurada com partição aleatória de pontos (Random Jitter Offset de 15% a 25%) combinada com linhas de baixo-relevo (Curved Carving Lines) com espaçamento orgânico de 2,0 mm a 4,5 mm. Utiliza-se linha de poliéster fosco (Matte Thread) ou linha encerada calibre 40/2 com densidade moderada de 0,42 mm para evitar rigidez no bordado.",
    "construction": [
      "Mapa vetorial de ranhuras orgânicas em curvas suaves (Leather Wrinkles)",
      "Configuração de partição assimétrica de passos no tatami (Random Fractioning)",
      "Aplicação de linhas de corte esculpido (Carving / Emboss Stamps)",
      "Uso de linha com baixo brilho (Fosca) para realçar a sensação de couro natural",
      "Camada de suporte rala para manter a maciez e maleabilidade da peça"
    ],
    "howItWorks": [
      "1. O programador desenha o corpo de uma bota, banco de carro, sela de cavalo ou jaqueta.",
      "2. Aplica o padrão de textura 'Couro / Granulado' no preenchimento tatami.",
      "3. O software embaralha o alinhamento dos pontos criando micro-ondulações no relevo.",
      "4. Na máquina, o bordado ganha um aspecto realista impressionante, parecendo couro de verdade trabalhado."
    ],
    "mainTypes": [
      "Couro Granulado Bovino (Para selas, botas country, cintos e brasões rústicos)",
      "Couro Liso com Rugas Suaves (Para jaquetas e sofás clássicos)",
      "Textura Pele de Réptil / Crocodilo (Com gomos geométricos em relevo escupido)"
    ],
    "characteristics": [
      "Realismo visual impressionante que encanta clientes do ramo country e automotivo",
      "Toque agradável com textura diferenciada em relação ao bordado comum chapado",
      "Agrega altíssimo valor artístico e comercial a matrizes de objetos e animais"
    ],
    "limitations": [
      "Linhas muito brilhantes de viscose pura reduzem a ilusão óptica; prefira linhas foscas",
      "Em áreas menores que 20 mm, os detalhes da granulação de couro perdem definição"
    ],
    "numberingSystem": [
      "Comprimento de Ponto Tatami: 3,5 mm a 6,0 mm com variação aleatória de 20%",
      "Densidade de Cobertura: 0,42 mm a 0,46 mm",
      "Espaçamento de Ranhuras Carving: 2,5 mm a 4,0 mm"
    ],
    "advantages": [
      "✔ Seus bordados de cavalos, botas e temas rústicos ganham vida e realismo inéditos",
      "✔ Diferencial criativo que pouquíssimos ateliês sabem fazer no mercado",
      "✔ Economiza pontos em relação ao ponto cheio mantendo uma estética espetacular"
    ],
    "commonErrors": [
      "❌ Usar tatami comum 1/3 liso e chapado em desenhos de bota country ou jaqueta de couro",
      "❌ Fazer a textura tão densa que o bordado fica duro como papelão",
      "❌ Usar cores muito claras onde a sombra das ranhuras não aparece"
    ],
    "voceSabia": "As marcas de carros esportivos de luxo (como Ferrari e Porsche) encomendam bordados com essa técnica para personalizar encostos de bancos de couro, combinando a textura da linha com o couro legítimo do carro!",
    "curiosidadeTecnica": "A ilusão de ótica da granulação de couro ocorre porque o cérebro humano interpreta as micro-variações no comprimento do ponto como sombras tridimensionais de micro-elevações da pele.",
    "dicaArtrelados": "Ao bordar botas country, selas ou jaquetas no estilo rústico: use linhas de poliéster em tons terrosos (marrom café, caramelo ou pinhão) e aplique a textura de couro no tatami com linhas de entalhe (Carving)! O resultado fica tão real que todo mundo vai querer passar a mão para sentir!",
    "applications": [
      "Bordados para o segmento country, montaria, vaquejada e rodeio (botas, selas, cavalos)",
      "Logotipos automotivos em bancos, almofadas e jaquetas de motociclistas",
      "Bolsas, carteiras e calçados personalizados em courino e couro sintético",
      "Brasões e escudos de marcas de moda masculina e acessórios vintage"
    ],
    "troubleshootingTips": [
      "Se a textura não está aparecendo direito, use uma cor de linha marrom um pouco mais escura e reduza o brilho com linha fosca.",
      "Se o bordado repuxou demais nas bordas, aumente o comprimento dos pontos tatami para 5,0 mm.",
      "Se as ranhuras ficaram muito fundas mostrando o tecido, coloque um suporte de tatami ralo por baixo antes do entalhe."
    ],
    "relatedTerms": [
      "Ponto Tatami",
      "Efeito Carving / Entalhe",
      "Textura Orgânica",
      "Linha Fosca (Matte)",
      "Bordado Automotivo"
    ],
    "tags": [
      "textura-couro",
      "leather-grain",
      "tatami",
      "carving",
      "country",
      "automotivo",
      "relevo-organico",
      "matrizaria"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Creative Textures, Carving and Organic Patterns. Sydney: Wilcom, 2023. AUTOMOTIVE INTERIOR DESIGN GUILD. Technical Embroidery and Surface Embellishment. Stuttgart: AIDG, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Creative Textures, Carving and Organic Patterns. Sydney: Wilcom, 2023.",
      "AUTOMOTIVE INTERIOR DESIGN GUILD. Technical Embroidery and Surface Embellishment. Stuttgart: AIDG, 2022.",
      "ARTRELADOS. Simulação de Superfícies Naturais e Texturização Paramétrica em Bordados. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Desenhe a silhueta de uma bota country de 70 mm. Aplique o preenchimento tatami com textura Leather Grain e linhas de entalhe em curva. Borde com linha marrom em um pedaço de sarja ou courino e veja como o desenho parece feito de couro genuíno esculpido!",
    "quickSummary": "É a técnica do programa que faz o ponto de preenchimento imitar com perfeição as ranhuras e poros do couro legítimo.",
    "beginnerExplanation": "Em vez de deixar o fundo do bordado lisinho e sem graça, a gente configura a máquina para dar pontos em tamanhos diferentes e pequenas curvinhas. Isso cria um efeito incrível que parece couro de verdade, perfeito para botas de vaqueiro, cavalos e jaquetas!",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Ponta Aguda (SPI)",
      "stabilizer": "Entretela Rasgável 60g",
      "threadTension": "110 a 120gf",
      "density": "0,42 mm com partição aleatória"
    }
  },
  {
    "id": "i-092-instabilidade-fio-metalizado-tubo-guia-drag",
    "code": "I-092",
    "letter": "I",
    "term": "Instabilidade do Fio Metalizado no Tubo Guia e Condução Anti-Atrito (Metallic Thread Loop Drag & Tube Feeding Stability)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Mecânica da Máquina",
    "origin": "Desenvolvido a partir da física de escoamento de fios laminados e sistemas de alimentação pneumática de máquinas de bordar industriais.",
    "summary": "Métodos mecânicos para evitar o encarroçamento, dobras em espiral e atrito estático de linhas metálicas dentro dos tubos e guias de passagem da máquina.",
    "definition": "A Instabilidade do Fio Metalizado no Tubo Guia (Metallic Thread Drag & Spiral Kink Prevention) é o comportamento mecânico adverso caracterizado pela formação de nós em 'rabicho de porco' (Kinking) e resistência ao escoamento que os fios metalizados (Lurex / Mylar) sofrem ao percorrer os tubos plásticos e olhais de condução do porta-cones até a agulha. Como o fio metálico é composto por uma fita plana de alumínio laminada sobre uma alma sintética, ele possui memória de torção elástica (Spring Effect). Se o tubo de condução gerar eletricidade estática ou curvas de raio pequeno, o fio empaca, tensiona repentinamente e quebra antes de atingir a agulha.",
    "technicalDetails": "O raio mínimo de curvatura dos tubos plásticos de alimentação deve ser superior a 80 mm. Recomenda-se a utilização de tubos com tratamento antiestático de PTFE (Teflon) ou silicone, redinha de tensão elástica no cone e substituição dos furos de passagem com ângulos agudos por guia-fios de cerâmica polida com coeficiente de atrito $\\mu < 0.15$.",
    "construction": [
      "Tubo guia de PTFE / Polietileno de alta densidade com diâmetro interno de 4 mm a 6 mm",
      "Redinha elástica tubular de contenção no cone de linha metálica",
      "Dispositivo lubrificador com feltro de silicone puro líquido no cabeçote",
      "Guia-fios cerâmicos de óxido de alumínio sinterizado de alto polimento",
      "Agulha especial para bordado metálico com canalete e olho 2x ampliados (Metafil / Metallic)"
    ],
    "howItWorks": [
      "1. O cone de linha dourada ou prateada é protegido com uma redinha elástica para não desenrolar de vez.",
      "2. A linha sobe reta e entra no tubo plástico de condução sem fazer curvas fechadas.",
      "3. Passa por um feltro com duas gotinhas de silicone para resfriar e deslizar suavemente.",
      "4. Desce pela agulha especial metálica e borda macio, brilhante e sem nenhuma quebra a 700 PPM."
    ],
    "mainTypes": [
      "Alimentação por Tubo Antiestático Reto (Para máquinas industriais multi-cabeçotes)",
      "Suporte de Desbobinamento Vertical com Redinha (Para máquinas domésticas e de 1 cabeçote)",
      "Lubrificação Contínua por Banho de Silicone Têxtil em Feltro"
    ],
    "characteristics": [
      "Eliminação de 95% das quebras crônicas de linha metálica dourada e prateada",
      "Fio chega à agulha sem dobras, nós ou descascamento da película de ouro/prata",
      "Bordados luxuosos com produção rápida e sem paradas a cada 2 minutos"
    ],
    "limitations": [
      "Exige uso de agulha adequada para linha metálica (Schmetz Metallic calibre 80 ou 90)",
      "Nunca se deve puxar o fio metálico com força se ele engasgar no tubo"
    ],
    "numberingSystem": [
      "Calibre Recomendado da Agulha: 80/12 ou 90/14 Metallic",
      "Raio Mínimo de Curva do Tubo Guia: 80 mm",
      "Velocidade Máxima de Operação: 600 a 750 PPM"
    ],
    "advantages": [
      "✔ Acabe com o medo de bordar com fios dourados e prateados no seu ateliê",
      "✔ Pontos com brilho máximo, sem descascar e sem arrebentar",
      "✔ Aumento imediato da lucratividade ao vender bordados de luxo para festas e igrejas"
    ],
    "commonErrors": [
      "❌ Bordar com linha metálica usando agulha fina comum 75/11 (a agulha esquenta e corta o fio)",
      "❌ Não usar a redinha no carretel (a linha escorrega para a base do cone e trava tudo)",
      "❌ Rodar a máquina a 1.000 PPM com fio metálico (a velocidade gera calor e quebra o fio)"
    ],
    "voceSabia": "A linha de ouro genuína usada nos mantos dos imperadores medievais era feita de fios de ouro puro martelados e enrolados em fios de seda; hoje, a tecnologia moderna usa filmes de poliéster metalizados com alumínio a vácuo para criar o mesmo brilho!",
    "curiosidadeTecnica": "O olho da agulha especial para linha metálica (Metallic Needle) é polido com jato de diamante e é 200% maior que o olho de uma agulha comum, para que a fita metálica passe deitada sem amassar.",
    "dicaArtrelados": "Ao bordar com linha dourada ou prateada: coloque uma redinha no cone, diminua a velocidade para 650 PPM, use Agulha Metallic 80 ou 90 e passe a linha por um feltro com uma gotinha de silicone líquido! O fio vai deslizar como seda e você vai bordar uma peça inteira sem quebrar nenhuma vez!",
    "applications": [
      "Vestidos de noiva, vestidos de 15 anos e roupas de festa de alto luxo",
      "Estandartes sacros, paramentos religiosos e toalhas de altar",
      "Brasões militares, condecorações e faixas presidenciais",
      "Logotipos com detalhes em ouro e prata para moda premium"
    ],
    "troubleshootingTips": [
      "Se a linha metálica está descascando e empacando no olho da agulha, troque imediatamente para uma Agulha Schmetz Metallic 90/14.",
      "Se a linha desce do carretel toda encrespada como mola, passe por dentro de um canudo plástico reto para tirar o efeito mola.",
      "Se a máquina acusa quebra de linha sem estar quebrada, limpe a poeira metálica do sensor óptico."
    ],
    "relatedTerms": [
      "Linha Metálica (Metallic Thread)",
      "Agulha Metallic",
      "Redinha para Cone",
      "Silicone Líquido Têxtil",
      "Eletricidade Estática"
    ],
    "tags": [
      "linha-metalica",
      "dourada",
      "prateada",
      "tubo-guia",
      "instabilidade",
      "silicone",
      "agulha-metallic",
      "luxo"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "MADEIRA GARNFABRIK. Metallic Thread Handling, Needles and Tension Guidelines. Freiburg: Madeira, 2023. GUNOLD GMBH. Metallic Thread Processing and Lubrication Solutions. Grossostheim: Gunold, 2022.",
    "bibliographicReferences": [
      "MADEIRA GARNFABRIK. Metallic Thread Handling, Needles and Tension Guidelines. Freiburg: Madeira, 2023.",
      "GUNOLD GMBH. Metallic Thread Processing and Lubrication Solutions. Grossostheim: Gunold, 2022.",
      "ARTRELADOS. Mecânica de Alimentação e Controle de Atrito para Linhas Especiais e Metálicas. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Coloque uma linha dourada na sua máquina com uma agulha comum 75/11 e tente bordar um monograma a 900 PPM: note como ela quebra logo. Agora coloque uma Agulha Metallic 90/14, a redinha no cone e baixe para 650 PPM: sinta a facilidade e a perfeição do bordado dourado!",
    "quickSummary": "São os cuidados mecânicos para guiar a linha dourada e prateada sem enrolar nem arrebentar antes de chegar na agulha.",
    "beginnerExplanation": "Linhas douradas e prateadas são lindas, mas adoram enrolar e engasgar no caminho como se fossem molinhas. Usando uma redinha no cone, um tubinho reto e uma agulha especial de olho grande, a linha desce lisinha e borda um ouro maravilhoso sem dor de cabeça!",
    "recommendedSettings": {
      "speedPPM": "600 a 700 PPM",
      "needleType": "80/12 ou 90/14 Metallic / Metafil",
      "stabilizer": "Entretela Rasgável Média 60g",
      "threadTension": "100 a 110gf (Mais frouxa que o normal)",
      "density": "0,45 mm a 0,50 mm (Mais rala)"
    }
  },
  {
    "id": "i-093-ilhos-oval-passador-fita-projetos-ith",
    "code": "I-093",
    "letter": "I",
    "term": "Ilhós Oval e Passador de Fita em Projetos ITH (Oval Eyelet, Ribbon Slot & In-The-Hoop Hardware Digitizing)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Projetos ITH (In The Hoop)",
    "origin": "Criado na era moderna dos projetos 100% no bastidor (In-The-Hoop) para confecção de necessaires, tags de mala, chaveiros e laços de enxoval infantil.",
    "summary": "Digitalização estruturada de fendas ovais reforçadas com ponto cheio no bastidor para passagem de fitas de cetim, cadarços, gorgurão e mosquetões.",
    "definition": "O Ilhós Oval e Passador de Fita ITH (Embroidered Ribbon Slot & Oval Eyelet Hardware) é a programação de uma abertura longitudinal reforçada executada inteiramente dentro do bastidor da máquina de bordar. Ao contrário de um ilhós metálico que requer alicate de pressão, o passador de fita é composto por uma sequência de costura interna de ancoragem (Walk Underlay), uma costura de corte guia e uma densa coluna perimetral de ponto cheio (Satin Column) com cantos arredondados de 3 a 4 mm de largura. A fenda permite passar fitas de cetim, elásticos, tiras de couro e alças de chaveiro sem que o tecido rasgue com o uso diário.",
    "technicalDetails": "A coluna perimetral em ponto cheio deve ter largura de 3,0 mm a 3,8 mm com densidade de 0,35 mm e compensação de repuxo de +0,4 mm. No centro da fenda, o software insere uma linha de corte simples ou ponto duplo indicando o local exato para abertura manual com abridor de casas (desmanchador de costura) ou perfurador tipo cinzel.",
    "construction": [
      "Costura reta de marcação preliminar de posição (Placement Stitch)",
      "Costura de fixação da camada de tecido e forro (Tackdown Stitch)",
      "Costura de reforço em ziguezague interno ao redor da fenda (Zigzag Underlay)",
      "Cobertura final em Ponto Cheio largo com extremidades arredondadas",
      "Abertura interna da fenda com abridor de casa de botão protegido por alfinete de segurança"
    ],
    "howItWorks": [
      "1. A máquina borda a moldura oval reforçada em volta do local da fita.",
      "2. A peça ITH é finalizada e retirada do bastidor.",
      "3. A bordadeira coloca um alfinete na ponta da costura e abre o centro com o abridor de casas.",
      "4. Passa a fita de cetim ou a alça pelo passador; o acabamento fica limpo, reforçado e perfeito."
    ],
    "mainTypes": [
      "Passador Reto Horizontal / Vertical (Para fitas de cetim de 10 mm a 25 mm em laços e babadores)",
      "Ilhós Oval Curvo com Reforço Duplo (Para chaveiros de sintético e alças de necessaires)",
      "Passador de Elástico em Máscaras e Toucas Cirúrgicas ITH"
    ],
    "characteristics": [
      "Dispensa o uso de rebites e ilhoses de metal que enferrujam ou soltam",
      "Resistência mecânica fantástica para puxar fitas e pendurar chaves pesadas",
      "Toque 100% macio e seguro para a pele de bebês e crianças"
    ],
    "limitations": [
      "Ao abrir o centro da fenda com a lâmina, deve-se tomar cuidado para não cortar os pontos cheios laterais",
      "A largura interna da fenda deve ser sempre 2 mm maior que a largura da fita para ela passar sem amassar"
    ],
    "numberingSystem": [
      "Largura da Fenda Interna: 12 mm, 17 mm, 22 mm ou 27 mm (Compatível com fitas comerciais)",
      "Largura do Ponto Cheio de Borda: 3,0 mm a 3,8 mm",
      "Densidade de Cobertura: 0,32 mm a 0,36 mm"
    ],
    "advantages": [
      "✔ Agrega funcionalidade fantástica aos seus chaveiros, tags e necessaires",
      "✔ Economiza dinheiro não precisando comprar ilhoses e matrizes de balancim",
      "✔ Peça lavável que nunca enferruja nem solta rebarbas de metal"
    ],
    "commonErrors": [
      "❌ Fazer a coluna de ponto cheio muito fininha (menos de 2 mm), rasgando o tecido ao puxar a fita",
      "❌ Cortar os pontos cheios da beirada com o desmanchador por não colocar um alfinete de trava",
      "❌ Fazer a fenda menor que a fita de cetim (a fita entra toda enrugada)"
    ],
    "voceSabia": "Em roupinhas de bebês prematuros e crianças pequenas, os ilhoses bordados de linha são obrigatórios por normas internacionais de segurança pediátrica, pois os ilhoses de metal podem se soltar e ser engolidos pelos bebês!",
    "curiosidadeTecnica": "O desenho oval arredondado distribui a força de tração da fita em 360 graus na trama do tecido, enquanto fendas com cantos vivos concentram a tensão nos vértices, rasgando o tecido com o tempo.",
    "dicaArtrelados": "Ao abrir o passador de fita com o abridor de casas: espete SEMPRE um alfinete de costura atravessado bem na ponta final da fenda! O alfinete serve como um 'freio' de segurança e não deixa a lâmina escapar e rasgar o bordado! Fica perfeito sempre!",
    "applications": [
      "Passadores de fita de cetim em toalhas, fraldas de boca e babadores de bebê",
      "Chaveiros ITH em sintético e tags identificadoras de mala e mochila",
      "Casas de botão estilizadas em almofadas e capas de caderneta de vacinação",
      "Necessaires, estojos e bolsinhas com alça de mão em fita ou cadarço"
    ],
    "troubleshootingTips": [
      "Se a fita de cetim ficou apertada e dobrando, aumente o comprimento da fenda em 3 mm no software.",
      "Se a fenda começou a desfiar após o corte, passe um pingo minúsculo de cola pano ou selador de costura no centro do corte.",
      "Se o ponto cheio afundou no tecido sintético, coloque um pedaço de plástico filme solúvel por cima."
    ],
    "relatedTerms": [
      "Projetos ITH (In The Hoop)",
      "Abridor de Casas de Botão",
      "Passador de Fita",
      "Ponto Cheio (Satin)",
      "Chaveiro no Bastidor"
    ],
    "tags": [
      "ilhos-oval",
      "passador-fita",
      "ith",
      "in-the-hoop",
      "chaveiro",
      "fita-cetim",
      "enxoval-bebe",
      "acessorios"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "EMBROIDERY DIGITIZING GUILD. In-The-Hoop Accessories and Functional Hardware Digitizing. London: EDG, 2023. WILCOM INTERNATIONAL. Buttonholes, Eyelets and Slits Masterclass. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "EMBROIDERY DIGITIZING GUILD. In-The-Hoop Accessories and Functional Hardware Digitizing. London: EDG, 2023.",
      "WILCOM INTERNATIONAL. Buttonholes, Eyelets and Slits Masterclass. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Engenharia de Acessórios Funcionais e Projetos ITH 100% no Bastidor. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Crie no seu software uma tag retangular de 80 x 40 mm com um ilhós oval de 22 mm no topo para passar uma fita de 20 mm. Borde em um pedaço de sintético no bastidor, faça o corte central protegido com alfinete e passe a fita. Veja como fica lindo e super-reforçado!",
    "quickSummary": "É a fenda oval bordada com ponto cheio que serve para passar fitas de cetim, alças e cadarços com acabamento perfeito.",
    "beginnerExplanation": "É como se fosse uma casinha de botão bem gordinha e bonitinha feita pela máquina no bastidor. Você abre o meio dela com cuidado e passa uma fita de cetim ou uma alcinha para fazer laços lindos em fraldinhas, necessaires e chaveiros!",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Ponta Bola (SES)",
      "stabilizer": "Entretela Rasgável 60g",
      "threadTension": "110 a 120gf",
      "density": "0,35 mm na coluna perimetral"
    }
  },
  {
    "id": "i-094-inversao-polaridade-servomotores-encoder-phase",
    "code": "I-094",
    "letter": "I",
    "term": "Inversão de Polaridade de Servomotores X/Y e Calibração de Encoders (Servo Phase Polarity & Closed-Loop Encoder Feedback)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Mecânica da Máquina",
    "origin": "Da eletrônica de potência e controle de servomotores industriais sem escovas (Brushless AC Servos) da Yaskawa, Panasonic e Sanyo Denki.",
    "summary": "Diagnóstico de inversão de fase e alinhamento de encoders digitais nos servomotores que movimentam o bastidor nos eixos X e Y, garantindo posicionamento exato sem erros de drift.",
    "definition": "A Inversão de Polaridade de Servomotores X/Y e Calibração de Encoders (Servo Motor Phase Polarity & Encoder Alignment Routine) é o procedimento técnico eletrotécnico de parametrização e ajuste das fases elétricas (U, V, W) e dos sinais de quadratura do encoder (A, B, Z) responsáveis pela movimentação cartesiana do pantógrafo da máquina de bordar. Quando há uma troca de motor, reparo na placa de acionamento (Driver) ou inversão acidental de fiação, o motor pode girar no sentido oposto ou entrar em disparo de sobrecorrente (Runaway Error). O correto alinhamento de fase e quadratura garante o controle de malha fechada (Closed Loop) com repetibilidade posicional de 0,01 mm.",
    "technicalDetails": "Os servomotores trabalham com sinal senoidal trifásico modulado por largura de pulso (SVPWM) a 20 kHz e encoders ópticos absolutos/incrementais de 2.500 a 10.000 pulsos por rotação (PPR). A rotação horária do motor deve corresponder estritamente ao incremento positivo no contador de pulsos do canal A adiantado em 90° elétricos em relação ao canal B.",
    "construction": [
      "Servomotores AC Brushless de ímãs permanentes de neodímio nos eixos X e Y",
      "Driver microprocessado com controle vetorial de campo orientado (FOC)",
      "Disco de encoder óptico com máscara de vidro e fototransistores diferenciais",
      "Cabo de potência blindado com malha trançada para aterramento de ruídos EMI",
      "Painel de diagnóstico de parâmetros técnicos da placa controladora (Mainboard)"
    ],
    "howItWorks": [
      "1. A CPU da máquina envia a coordenada de onde o bastidor deve se mover.",
      "2. O driver aplica corrente nas fases U, V e W do motor para mover o bastidor.",
      "3. O encoder lê o giro milimétrico do eixo e avisa a CPU em tempo real que o bastidor chegou no lugar exato.",
      "4. Se houver qualquer micro-desvio de milésimo de milímetro, o sistema corrige a posição instantaneamente antes da agulha descer."
    ],
    "mainTypes": [
      "Alinhamento de Fase Eletrônica por Auto-Tuning no Painel da Máquina",
      "Inversão de Sentido de Eixo por Parâmetro de Software (Direction Invert Parameter)",
      "Calibração Óptica de Pulso Zero (Index Z-Pulse Homing Calibration)"
    ],
    "characteristics": [
      "Precisão cirúrgica de posicionamento: contornos casam 100% no lugar mesmo após 50.000 pontos",
      "Operação suave e sem vibrações estridentes dos motores do bastidor",
      "Proteção eletrônica total contra colisões e disparos involuntários do pantógrafo"
    ],
    "limitations": [
      "Procedimento de nível técnico que exige conhecimento de eletrônica e comandos de serviço",
      "Nunca inverta fios de potência com a máquina ligada na tomada sob risco de queimar o driver"
    ],
    "numberingSystem": [
      "Resolução Típica de Encoder: 2.500 PPR (10.000 contagens por quadratura)",
      "Precisão de Repetibilidade: $\\pm 0,01$ mm",
      "Tensão de Barramento DC: 48V a 310V DC"
    ],
    "advantages": [
      "✔ Garante que o desenho não vai sair deformado, espelhado ou com contorno fora do lugar",
      "✔ Movimentação silenciosa, macia e sem solavancos durante todo o dia",
      "✔ Diagnóstico rápido de falhas após manutenções e trocas de componentes eletrônicos"
    ],
    "commonErrors": [
      "❌ Inverter duas fases do servomotor (o motor treme loucamente e entra em alarme na hora)",
      "❌ Ligar cabos de sinal do encoder perto de cabos de força sem blindagem (gera ruído e o bastidor erra o ponto)",
      "❌ Alterar parâmetros ocultos de fábrica no painel sem anotar os valores originais"
    ],
    "voceSabia": "O sistema de controle de malha fechada com encoder dos servomotores da máquina de bordar é o mesmo princípio que guia os telescópios espaciais da NASA para mirar em estrelas a bilhões de anos-luz de distância!",
    "curiosidadeTecnica": "O tempo de resposta de correção de posição de um driver moderno de bordado é de apenas 50 microssegundos, o que significa que ele corrige a posição do bastidor 20.000 vezes por segundo!",
    "dicaArtrelados": "Se após uma manutenção o seu bastidor se mover para o lado esquerdo quando você aperta para a direita no painel: não desmonte a máquina! Esse ajuste é feito em segundos nas configurações de serviço da máquina mudando o parâmetro 'Sentido do Eixo X' (Axis Direction Invert)!",
    "applications": [
      "Manutenção e calibração de placas controladoras e motores X/Y",
      "Substituição e parametrização de servomotores de alta precisão",
      "Eliminação de erros de posicionamento e desvio progressivo de contornos",
      "Configuração de fábrica de máquinas industriais novas e recondicionadas"
    ],
    "troubleshootingTips": [
      "Se a máquina ligar e der um tranco forte apitando 'Erro de Encoder X', desligue e verifique o conector do encoder.",
      "Se o bastidor estiver andando espelhado em relação à tela, inverta o parâmetro de polaridade do eixo no menu de serviço.",
      "Se o contorno vai se deslocando aos poucos para um lado ao longo do bordado, limpe o disco óptico do encoder."
    ],
    "relatedTerms": [
      "Servomotor AC",
      "Encoder Óptico",
      "Controle de Malha Fechada (Closed Loop)",
      "Pantógrafo X/Y",
      "Driver de Potência"
    ],
    "tags": [
      "servomotor",
      "encoder",
      "polaridade",
      "eixos-xy",
      "mecanica-avancada",
      "eletronica",
      "calibracao",
      "precisao"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "PANASONIC INDUSTRIAL MOTORS. AC Servo Driver Minas Series Technical Manual. Osaka: Panasonic, 2023. TAJIMA GROUP. Electronic Control Systems and Axis Driver Servicing. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "PANASONIC INDUSTRIAL MOTORS. AC Servo Driver Minas Series Technical Manual. Osaka: Panasonic, 2023.",
      "TAJIMA GROUP. Electronic Control Systems and Axis Driver Servicing. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Eletrotécnica e Controle Servomotorizado em Máquinas Têxteis CNC. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "No painel da sua máquina de bordar, acesse o menu de movimentação manual do bastidor. Mova 10 mm para a direita e 10 mm para cima, observando como o movimento é silencioso e suave: isso é a mágica do servomotor com encoder garantindo que cada ponto caia no milímetro exato!",
    "quickSummary": "É o ajuste eletrônico dos motores que movem o bastidor para frente e para os lados com precisão milimétrica e sem errar o caminho.",
    "beginnerExplanation": "O bastidor da máquina se mexe para lá e para cá graças a motores muito inteligentes. Eles têm um olhinho digital chamado encoder que fica vigiando a posição o tempo todo para o bastidor nunca sair do lugar e o bordado sair certinho sem nada fora da linha!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    }
  },
  {
    "id": "i-095-insercao-ponto-caseado-ingles-apliques-blanket",
    "code": "I-095",
    "letter": "I",
    "term": "Inserção de Ponto Caseado Inglês em Apliques (Blanket Stitch Appliqué Border & Heritage Country Edge)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Dos cobertores de lã rústica (Blankets) e colchas de retalhos (Patchwork) artesanais tradicionais da Inglaterra e Estados Unidos dos séculos XVIII e XIX.",
    "summary": "Ponto de contorno decorativo em formato de pequenos dentes retos e espaçados ('pente') que prende tecidos de aplique com charme rústico e toque artesanal macio.",
    "definition": "A Inserção de Ponto Caseado Inglês em Apliques (Blanket Stitch Appliqué Border / E-Stitch) é a rotina de programação de contorno composta por uma costura linear perimetral intercalada periodicamente por pontos perpendiculares que entram em direção ao interior da aplicação (formando a silhueta da letra 'E' ou de um pente de dentes espaçados). Ao contrário do ponto cheio denso (Satin), o ponto caseado consome 70% menos linha, deixa a borda do aplique extremamente maleável e macia ao toque e confere um visual aconchegante de peça feita à mão, sendo o padrão favorito para enxovais de bebê, toalhas de prato e peças de patchwork.",
    "technicalDetails": "O ponto caseado é programado com passo linear de 2,5 mm a 3,5 mm e dentes perpendiculares com comprimento de 2,5 mm a 4,0 mm. Para evitar o desfiamento do tecido do aplique, aplica-se uma costura de ancoragem corrida simples (Tackdown Run) 0,5 mm antes da linha externa e utiliza-se repetição dupla ou tripla nos dentes para dar volume visual encorpado.",
    "construction": [
      "Costura guia de posicionamento do retalho (Placement Line)",
      "Costura de fixação para recorte do tecido de aplique (Tackdown Line)",
      "Linha de caminhamento linear na margem externa do aplique",
      "Dentes perpendiculares para dentro do desenho com repetição dupla (Bean Blanket)",
      "Compatibilidade com termocolantes definitivos ou entretela de sustentação"
    ],
    "howItWorks": [
      "1. A máquina marca onde o pedaço de tecido de aplique deve ser colocado.",
      "2. A bordadeira coloca o tecido estampado e a máquina faz uma costura prendendo.",
      "3. A bordadeira recorta o excesso do tecido com uma tesourinha de ponta curva.",
      "4. A máquina borda o Ponto Caseado em volta: os dentinhos prendem a borda com charme rústico de patchwork.",
      "5. A peça fica macia, fofinha e com acabamento de ateliê artesanal."
    ],
    "mainTypes": [
      "Caseado Simples Clássico (Para peças leves de enxoval e bodies de bebê)",
      "Caseado Duplo / Triplo Encorpado (Bean Blanket - Dentes grossinhos e chamativos)",
      "Caseado Inclinado / Decorativo (Com dentinhos em ângulo para estilo folk country)"
    ],
    "characteristics": [
      "Toque incrivelmente macio: não fica duro nem áspero na pele delicada do bebê",
      "Economia impressionante de tempo de máquina e quantidade de linha",
      "Estética afetiva e artesanal de colcha de retalhos tradicional"
    ],
    "limitations": [
      "Tecidos que desfiam muito (como cetim ou sarja solta) precisam de papel termocolante colado atrás",
      "Não cobre bordas cortadas de forma muito irregular como o ponto cheio grosso faz"
    ],
    "numberingSystem": [
      "Espaçamento entre Dentes: 2,5 mm a 3,5 mm",
      "Comprimento do Dente: 2,5 mm a 4,0 mm",
      "Espessura do Dente: Ponto Duplo (2-Pass) ou Triplo (3-Pass)"
    ],
    "advantages": [
      "✔ O aplique fica molinho e supergostoso de usar em roupinhas infantis",
      "✔ Bordado muito mais rápido de produzir em comparação com a borda de ponto cheio",
      "✔ Dá aquele ar de 'feito à mão com amor' que as mamães e clientes amam"
    ],
    "commonErrors": [
      "❌ Usar tecido de algodão cru sem termocolante e cortar muito rente (ele pode desfiar entre os dentes)",
      "❌ Fazer os dentinhos muito curtinhos (menos de 1,5 mm), não segurando o retalho direito",
      "❌ Cortar o tecido de aplique longe da costura deixando sobras feias para fora do caseado"
    ],
    "voceSabia": "Originalmente, as avós usavam esse ponto para casear as bordas de cobertores grossos de lã (por isso o nome inglês 'Blanket', que significa cobertor) para que a lã não desmanchasse!",
    "curiosidadeTecnica": "O ponto caseado exerce praticamente zero tensão de encolhimento no tecido da camiseta, permitindo bordar apliques gigantes sem enrugar nada da peça!",
    "dicaArtrelados": "Para um aplique caseado perfeito em fraldas e bodies de bebê: cole sempre um termocolante de boa qualidade no avesso do tecidinho estampado antes de cortar! O termocolante sela as fibras, o tecido nunca desfia e o caseado fica perfeito para sempre!",
    "applications": [
      "Bodies, macacões, babadores e fraldinhas de boca de enxoval de bebê",
      "Panos de prato, jogos de cozinha e aventais no estilo country",
      "Almofadas de patchwork, mantas e colchas decorativas",
      "Detalhes de bichinhos, flores e casinhas em peças infantis"
    ],
    "troubleshootingTips": [
      "Se o tecido do aplique está desfiando na lavagem, use termocolante definitivo e aumente o comprimento dos dentes para 3,5 mm.",
      "Se os dentinhos ficaram muito finos e quase não aparecem, selecione a opção 'Caseado Duplo' (Double Blanket) no programa.",
      "Se a máquina está mordendo o tecido para fora, calibre a posição da linha guia de recorte no software."
    ],
    "relatedTerms": [
      "Aplique (Appliqué)",
      "Ponto Caseado (Blanket Stitch)",
      "Papel Termocolante",
      "Ponto Cheio (Satin)",
      "Patchwork"
    ],
    "tags": [
      "ponto-caseado",
      "blanket-stitch",
      "aplique",
      "patchwork",
      "enxoval-bebe",
      "artesanal",
      "country",
      "maciez"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "AMERICAN QUILTER'S SOCIETY. Machine Appliqué and Blanket Stitch Techniques. Paducah: AQS, 2023. WILCOM INTERNATIONAL. Appliqué Digitizing and Border Variations. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "AMERICAN QUILTER'S SOCIETY. Machine Appliqué and Blanket Stitch Techniques. Paducah: AQS, 2023.",
      "WILCOM INTERNATIONAL. Appliqué Digitizing and Border Variations. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Técnicas de Aplicação Têxtil e Bordado Tradicional Country. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Digitalize uma maçãzinha de aplique com borda em Ponto Caseado Triplo (Blanket Stitch) de 3 mm. Aplique em um retalho de tecido usando papel termocolante e sinta com a mão como o bordado fica leve, macio e com um visual lindo de peça feita à mão!",
    "quickSummary": "É o ponto em formato de dentinhos que prende tecidos de aplique com charme artesanal, deixando a peça macia e sem ficar dura.",
    "beginnerExplanation": "Em vez de cobrir a beirada do tecidinho com aquela costura grossa e pesada, a máquina faz dentinhos charmosos que parecem feitos à mão pela vovó! Fica super fofinho, muito macio para roupinhas de neném e muito rápido de bordar!",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Ponta Bola (SES)",
      "stabilizer": "Entretela Rasgável 40g a 60g",
      "threadTension": "110 a 120gf",
      "density": "Espaçamento de 2,5 mm a 3,0 mm / Dentes de 3,0 mm"
    }
  },
  {
    "id": "i-096-indice-cobertura-pontos-densidade-especifica-tecido",
    "code": "I-096",
    "letter": "I",
    "term": "Índice de Cobertura de Pontos e Densidade Específica por Tecido (Coverage Factor Ratio & Fabric-Specific Density Index)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Software",
    "origin": "Desenvolvido a partir da teoria de cobertura têxtil de Peirce (Peirce's Cloth Geometry) e equações de calibração de matrizes da Wilcom e Tajima.",
    "summary": "Cálculo matemático que define o espaçamento ideal entre linhas de bordado conforme a espessura da linha e a gramatura do tecido, evitando tanto a transparência quanto o endurecimento.",
    "definition": "O Índice de Cobertura de Pontos e Densidade Específica por Tecido (Coverage Factor Ratio & Fabric-Calibrated Density Index) é o coeficiente numérico ($K_c$) que expressa a relação entre o diâmetro óptico da linha de bordar, o espaçamento entre linhas adjacentes de ponto (Spacing / Density em mm) e a estrutura superficial do tecido de base. Uma densidade incorreta pode gerar dois extremos prejudiciais: se for muito aberta (> 0,55 mm em tecido escuro com linha clara), o fundo transparece; se for muito fechada (< 0,30 mm), a peça fica dura como uma chapa de papelão, quebra agulhas e rasga a roupa na primeira lavagem.",
    "technicalDetails": "Para linha padrão de poliéster 120 (diâmetro efetivo de aproximadamente 0,22 mm), o espaçamento nominal de cobertura ideal é calculado pela fórmula: $Espaçamento = \\frac{Diâmetro_{linha}}{\\sqrt{Fator_{cobertura}}}$. Em tecidos claros de algodão plano, utiliza-se 0,40 mm a 0,42 mm; em tecidos escuros de alto contraste (linha branca sobre fundo preto) ou piquets texturizados, recomenda-se 0,36 mm a 0,38 mm com reforço de suporte tatami correspondente.",
    "construction": [
      "Tabela de calibração de densidade integrada aos perfis de tecido do software (Fabric Auto-Density)",
      "Ajuste automático de densidade proporcional ao comprimento do ponto (Auto-Spacing)",
      "Compensação de contraste cromático entre linha e fundo têxtil",
      "Cálculo de alívio de peso em áreas de sobreposição de camadas (Auto-Density Offsets)",
      "Exportação com densidade ajustada para evitar o efeito armadura na peça acabada"
    ],
    "howItWorks": [
      "1. O programador seleciona no software o tipo de tecido onde a matriz será bordada (ex: Piquet, Malha Fina ou Sarja).",
      "2. O software ajusta automaticamente a densidade dos pontos para aquele tecido específico.",
      "3. A máquina borda com a quantidade exata de linha necessária para cobrir 100% sem desperdício.",
      "4. O bordado fica com cores vivas e fechadas, mantendo o tecido macio, maleável e gostoso de usar."
    ],
    "mainTypes": [
      "Densidade para Tecidos Leves e Malhas (0,42 mm a 0,46 mm - Máxima maciez)",
      "Densidade Padrão para Algodão e Sarja (0,38 mm a 0,40 mm - Equilíbrio perfeito)",
      "Densidade para Alto Contraste e Brasões (0,34 mm a 0,36 mm com suporte denso)"
    ],
    "characteristics": [
      "Bordados com cobertura impecável sem deixar o tecido transparente por baixo",
      "Eliminação total do 'efeito armadura' onde o bordado fica duro e pesado",
      "Economia de até 15% a 25% de pontos e tempo de máquina por lote de produção"
    ],
    "limitations": [
      "Linhas mais grossas (calibre 30) exigem abrir a densidade para 0,55 mm para não empastelar",
      "Linhas finas de micro-detalhes (calibre 60) exigem fechar a densidade para 0,28 mm a 0,30 mm"
    ],
    "numberingSystem": [
      "Densidade Padrão Linha 40: 0,38 mm a 0,42 mm",
      "Densidade Linha Grossa 30: 0,50 mm a 0,60 mm",
      "Densidade Linha Fina 60: 0,28 mm a 0,32 mm"
    ],
    "advantages": [
      "✔ Bordados macios que dobram junto com a roupa sem machucar o corpo",
      "✔ Cores sólidas e vivas sem o fundo do tecido aparecer no meio dos pontos",
      "✔ Redução comprovada do custo de linha e aumento da produtividade do ateliê"
    ],
    "commonErrors": [
      "❌ Usar a mesma densidade pesada de 0,32 mm para tudo (deixa camisetas de malha duras e repuxadas)",
      "❌ Não levar em conta o contraste de cores (bordar branco sobre tecido preto com densidade muito aberta)",
      "❌ Aumentar a densidade para cobrir falhas em vez de colocar uma costura de suporte correta por baixo"
    ],
    "voceSabia": "Aumentar a densidade de 0,40 mm para 0,30 mm aumenta em mais de 33% a quantidade de pontos da matriz, fazendo sua máquina gastar 1/3 a mais de tempo e energia para bordar exatamente o mesmo desenho!",
    "curiosidadeTecnica": "O olho humano percebe a cor de um bordado não apenas pelos pontos, mas pelo contraste de sombra projetado entre as fileiras de linha; uma boa costura de base (underlay) engana o olho, dando a sensação de 100% de cobertura com muito menos pontos.",
    "dicaArtrelados": "Nunca tente cobrir o tecido apenas socando densidade no ponto de cobertura! O segredo de um bordado bonito e macio é: use densidade suave de 0,40 mm na cobertura e coloque uma boa Grade Dupla (Underlay) por baixo! O bordado fica 100% fechado, não repuxa a roupa e fica supermacio!",
    "applications": [
      "Programação de matrizes profissionais para confecções e marcas de moda",
      "Otimização de tempo e consumo de insumos em linhas de produção industrial",
      "Adaptação de matrizes para bordar em tecidos finos, sedas e malhas de bebê",
      "Padronização técnica de densidades no catálogo de arquivos do ateliê"
    ],
    "troubleshootingTips": [
      "Se o tecido está aparecendo por baixo dos pontos, adicione uma camada de suporte tatami a 90° em vez de apenas fechar a densidade.",
      "Se o bordado parece uma placa dura que fica em pé sozinha, abra a densidade no software de 0,34 mm para 0,42 mm.",
      "Se for bordar com linha fina 60 para letrinhas de 3 mm, reduza a densidade para 0,30 mm."
    ],
    "relatedTerms": [
      "Densidade de Ponto (Density)",
      "Espaçamento de Ponto",
      "Efeito Armadura (Bulletproof)",
      "Titulagem de Linhas (Tex/Denier)",
      "Costura de Suporte (Underlay)"
    ],
    "tags": [
      "densidade",
      "cobertura",
      "indice-cobertura",
      "espacamento",
      "maciez",
      "otimizacao",
      "matrizaria",
      "engenharia-pontos"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "PEIRCE, F. T. The Geometry of Cloth Structure. Journal of the Textile Institute, 1937. WILCOM INTERNATIONAL. Fabric Management and Automatic Density Calibration. Sydney: Wilcom, 2023.",
    "bibliographicReferences": [
      "PEIRCE, F. T. The Geometry of Cloth Structure. Journal of the Textile Institute, 1937.",
      "WILCOM INTERNATIONAL. Fabric Management and Automatic Density Calibration. Sydney: Wilcom, 2023.",
      "ARTRELADOS. Cálculo de Cobertura e Otimização de Densidade em Superfícies Têxteis. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Borde dois círculos de 40 mm com linha branca em um tecido preto: o primeiro com densidade de 0,40 mm sem suporte, e o segundo com densidade de 0,42 mm com uma Grade Dupla por baixo. Compare: o segundo círculo gasta menos linha, fica mais macio e a cor branca fica muito mais limpa e fechada!",
    "quickSummary": "É o cálculo da distância certa entre os pontos para cobrir o tecido perfeitamente sem deixar o bordado duro nem transparente.",
    "beginnerExplanation": "Se os pontos ficarem muito longe um do outro, o tecido de baixo aparece. Se ficarem grudados demais, o bordado vira uma tábua dura que incomoda no corpo. Ajustando a densidade certinha para cada tecido, a cor fica linda, viva e o bordado fica bem macio!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "0,38 mm a 0,42 mm para linha 120 padrão"
    }
  },
  {
    "id": "i-097-infiltracao-agua-bordados-expostos-sol-hydrophobic",
    "code": "I-097",
    "letter": "I",
    "term": "Infiltração de Água em Bordados Expostos ao Sol e Selagem Hidrofóbica (Hydrophobic Sealing & Outdoor Weather Resistance)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Materiais e Insumos",
    "origin": "Da indústria náutica, toldos de proteção solar e jaquetas impermeáveis de alta montanha (Gore-Tex e Sunbrella).",
    "summary": "Técnicas de selagem no avesso e sprays impermeabilizantes à base de fluoropolímeros para vedar os furos da agulha e proteger bordados externos contra chuvas e raios UV.",
    "definition": "A Selagem Hidrofóbica e Proteção contra Infiltração de Água em Bordados Expostos (Outdoor Weatherproofing & Needle Hole Seam Sealing) é o conjunto de procedimentos técnicos aplicados para impermeabilizar peças bordadas destinadas ao uso externo rigoroso (toldos comerciais, capas de barcos, estofados náuticos, mochilas de trilha e jaquetas corta-vento). Como a agulha de bordar fura a membrana impermeável do tecido milhares de vezes (criando microcanais de infiltração de água), a técnica utiliza termocolantes de selagem no avesso (Seam Tape) e linhas 100% poliéster com tratamento anti-UV e repelência química à água.",
    "technicalDetails": "A selagem do avesso é feita com fita termoplástica de poliuretano (PU Seam Sealing Tape de 0,10 mm) prensada a 140°C por 12 segundos com pressão de 3,5 bar, vedando 100% das perfurações da agulha contra colunas d'água de até 10.000 mm. As linhas superiores devem conter aditivo de absorção de luz ultravioleta (UVA/UVB) para manter a tenacidade mecânica por mais de 2.000 horas de exposição solar contínua.",
    "construction": [
      "Linha de poliéster de filamento contínuo com acabamento repelente e anti-UV",
      "Fita termoplástica seladora de costuras no avesso (Hot-Melt Seam Tape)",
      "Agulha de ponta fina e afiada (Microtex / SPI) para criar o menor furo possível no tecido",
      "Entretela impermeável sintética que não absorve umidade nem mofa",
      "Aplicação de spray protetor hidrofóbico à base de fluoropolímeros pós-bordado"
    ],
    "howItWorks": [
      "1. A peça impermeável (jaqueta, capa de lancha ou toldo) é bordada com agulha fina e linha anti-UV.",
      "2. A peça sai da máquina com os micro-furos da costura.",
      "3. Aplica-se no avesso a fita seladora transparente com ferro morno ou prensa térmica.",
      "4. A fita derrete e veda totalmente cada buraquinho de agulha.",
      "5. A água da chuva bate no bordado e escorrega em gotas perfeitas sem vazar nem uma gota para dentro!"
    ],
    "mainTypes": [
      "Selagem Térmica com Fita de Poliuretano no Avesso (Para jaquetas impermeáveis e capas náuticas)",
      "Linhas Técnicas Especiais com Tratamento Hidrofóbico e Anti-UV (Para toldos e ombrelones)",
      "Impermeabilização Spray Superficial Pós-Bordado (Para mochilas e calçados esportivos)"
    ],
    "characteristics": [
      "Garantia absoluta de que a água da chuva não vai infiltrar pelos furos do bordado",
      "Cores que não desbotam e linhas que não apodrecem mesmo sob o sol forte da praia",
      "Proteção contra mofo e proliferação de fungos em ambientes úmidos e náuticos"
    ],
    "limitations": [
      "O ferro de selagem no avesso não pode ser quente demais para não derreter o tecido sintético",
      "A fita de selagem deve cobrir pelo menos 5 mm além da borda do bordado para vedação total"
    ],
    "numberingSystem": [
      "Resistência à Coluna D'Água: > 5.000 mm $H_2O$ após selagem",
      "Temperatura de Aplicação da Fita Seladora: 130°C a 145°C",
      "Proteção UV: Mais de 2.000 horas de sol contínuo sem perda de cor"
    ],
    "advantages": [
      "✔ Permite atender o mercado de luxo náutico, jaquetas esportivas e eventos ao ar livre",
      "✔ As jaquetas continuam 100% impermeáveis mesmo com grandes logos bordados",
      "✔ Bordados que duram anos sob chuva e sol sem esfarelar nem mofar"
    ],
    "commonErrors": [
      "❌ Bordar jaquetas impermeáveis caras sem selar o avesso (a água entra pelos furos e molha o cliente)",
      "❌ Usar linha comum de viscose em toldos externos (a linha apodrece e quebra em poucos meses de sol)",
      "❌ Usar entretela de papel que molha e apodrece dentro da peça impermeável"
    ],
    "voceSabia": "As capas dos barcos que ficam ancorados em marinas de alto padrão usam linhas especiais de poliéster com tratamento militar que resistem a tempestades marítimas, maresia e sol do Caribe sem perder a cor por mais de 5 anos!",
    "curiosidadeTecnica": "O efeito de repelência da água (onde as gotas ficam redondinhas e escorregam sem molhar o bordado) é conhecido na física como 'Efeito Lótus', inspirado nas folhas da flor de lótus que nunca se molham na natureza.",
    "dicaArtrelados": "Ao bordar jaquetas corta-vento ou capas de chuva: depois de bordar, corte um pedaço de fita termoplástica seladora de costura (Seam Tape) e passe a ferro pelo avesso em cima do bordado! Isso veda todos os furinhos da agulha e a jaqueta continua 100% à prova d'água!",
    "applications": [
      "Jaquetas impermeáveis de trilha, corta-ventos e casacos esportivos de neve",
      "Bordados em capas de barco, estofamentos de iates e jet-skis",
      "Toldos comerciais, ombrelones de piscina e coberturas externas",
      "Mochilas de viagem, barracas de camping e equipamentos de aventura"
    ],
    "troubleshootingTips": [
      "Se a água está vazando pelos furinhos do bordado na jaqueta, aplique a fita seladora de costura a quente pelo avesso.",
      "Se as linhas do toldo externo começaram a quebrar sozinhas, substitua por linha de poliéster 100% com filtro UV.",
      "Para testar a impermeabilidade, borrife água no bordado e veja se ela forma gotas redondas na superfície."
    ],
    "relatedTerms": [
      "Selagem de Costura (Seam Sealing)",
      "Proteção UV",
      "Tecido Impermeável",
      "Agulha Microtex",
      "Bordado Náutico"
    ],
    "tags": [
      "impermeavel",
      "selagem",
      "hidrofobico",
      "nautico",
      "toldos",
      "protecao-uv",
      "outdoor",
      "seam-tape"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "OUTDOOR FABRICS ASSOCIATION. Waterproofing, Seam Sealing and UV Durability Standards. Chicago: OFA, 2023. GORE-TEX TECHNICAL DIVISION. Seam Taping and Puncture Sealing Guidelines. Newark: W. L. Gore, 2022.",
    "bibliographicReferences": [
      "OUTDOOR FABRICS ASSOCIATION. Waterproofing, Seam Sealing and UV Durability Standards. Chicago: OFA, 2023.",
      "GORE-TEX TECHNICAL DIVISION. Seam Taping and Puncture Sealing Guidelines. Newark: W. L. Gore, 2022.",
      "ARTRELADOS. Engenharia de Vedação e Proteção Hidrofóbica em Bordados Técnicos e Náuticos. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Borde um desenho pequeno em um pedaço de tecido impermeável (como nylon resinado). Aplique a fita seladora termoplástica no avesso com ferro morno e jogue água por cima: veja como a frente repele a água e o verso permanece completamente seco!",
    "quickSummary": "É a técnica de colar uma fita seladora no avesso do bordado para tampar os furinhos da agulha e não deixar a água da chuva vazar.",
    "beginnerExplanation": "Quando a agulha borda uma jaqueta impermeável, ela faz furinhos por onde a água da chuva pode entrar. Colocando uma fita protetora mágica colada a ferro no avesso, todos os furinhos ficam vedados e a roupa continua 100% sequinha na chuva!",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "70/10 ou 75/11 Ponta Aguda (SPI / Microtex)",
      "stabilizer": "Entretela Sintética Hidrofóbica 50g",
      "threadTension": "110 a 120gf",
      "density": "Padrão"
    }
  },
  {
    "id": "i-098-insercao-marcador-centro-laser-crosshair-pointer",
    "code": "I-098",
    "letter": "I",
    "term": "Inserção de Marcador de Centro a Laser e Posicionamento Óptico (Crosshair Laser Pointer & Optical Origin Alignment)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Equipamentos e Acessórios",
    "origin": "Da tecnologia de alinhamento laser industrial alemã e japonesa aplicada a centros de usinagem CNC e adaptada para cabeçotes de bordado.",
    "summary": "Dispositivo emissor de feixe laser em formato de cruz ('+') acoplado ao cabeçote da máquina que projeta a posição exata da agulha sobre o tecido sem precisar abaixá-la.",
    "definition": "O Marcador de Centro a Laser e Posicionamento Óptico (Needle Laser Crosshair Pointer & Optical Origin Alignment System) é um acessório optoeletrônico composto por um diodo laser semicondutor (de cor vermelha ou verde) com lente colimadora cilíndrica instalado próximo à barra de agulhas. O dispositivo projeta um feixe luminoso em formato de cruzeta ortogonal exatamente no ponto de penetração da agulha número 1 no tecido. Isso permite que a bordadeira localize o centro exato de bolsos, golas, listras e marcas de giz em questão de segundos, sem precisar rodar o volante na mão ou arriscar furar o tecido com a agulha parada.",
    "technicalDetails": "O módulo laser opera com potência de saída classe II (< 1 mW / 650 nm para laser vermelho ou 520 nm para laser verde de alto contraste). A calibração mecânica de offset compensa a distância física entre o eixo do feixe laser e o centro da haste da agulha com precisão de $\\pm 0,1$ mm através de dois parafusos micrométricos de ajuste angular.",
    "construction": [
      "Diodo laser de estado sólido com comprimento de onda de 520 nm a 650 nm",
      "Lente óptica prismática geradora de cruz ortogonal de 90° (Crosshair Lens)",
      "Suporte de fixação em alumínio usinado CNC acoplado ao chassi do cabeçote",
      "Alimentação regulada de 5V DC integrada à placa de acessórios da máquina",
      "Parafusos de calibração micrométrica de foco e alinhamento X/Y"
    ],
    "howItWorks": [
      "1. A bordadeira prende a camisa no bastidor com uma marquinha de giz de alfaiate no peito.",
      "2. Encaixa o bastidor na máquina e aperta o botão do Laser no painel.",
      "3. A cruz de luz vermelha ou verde brilha direto sobre o tecido da camisa.",
      "4. Com as setas do painel, a bordadeira move o bastidor até a cruz de luz bater exatamente em cima da marquinha de giz.",
      "5. Aperta 'Origem / Ponto Zero' e o bordado começa no lugar 100% exato sem nenhum erro!"
    ],
    "mainTypes": [
      "Laser de Cruz Vermelha Integrado de Fábrica (Padrão nas máquinas modernas)",
      "Laser de Cruz Verde de Alta Visibilidade (Excelente para tecidos claros, escuros e reflexivos)",
      "Módulo Laser Magnético Universal de Bancada (Para instalar em máquinas antigas)"
    ],
    "characteristics": [
      "Agilidade fantástica: centraliza qualquer peça em menos de 5 segundos",
      "Eliminação de peças perdidas por bordado fora do centro ou torto",
      "Totalmente seguro: não encosta no tecido e não machuca as mãos"
    ],
    "limitations": [
      "Nunca se deve olhar diretamente para o feixe de luz do laser sob risco de danos à visão",
      "Deve ser calibrado periodicamente para garantir que a cruz bate exatamente onde a agulha desse"
    ],
    "numberingSystem": [
      "Potência do Laser: Classe II (< 1,0 mW - Seguro para uso em ateliê)",
      "Comprimento de Onda: 650 nm (Vermelho) ou 520 nm (Verde)",
      "Precisão de Posicionamento: $\\pm 0,1$ mm"
    ],
    "advantages": [
      "✔ Nunca mais perca tempo girando o volante na mão para ver onde a agulha vai bater",
      "✔ Centralização perfeita de nomes em jalecos, toalhas, bonés e camisas polo",
      "✔ Aumenta a velocidade de produção do ateliê de forma espetacular"
    ],
    "commonErrors": [
      "❌ Usar o laser sem antes conferir a calibração com a agulha real descendo no centro da cruz",
      "❌ Deixar poeira e fiapos de linha taparem a lente do laser (a luz fica fraca e borrada)",
      "❌ Não usar a função de traçado de área (Trace) junto com o ponto laser"
    ],
    "voceSabia": "A mira a laser foi criada originalmente para sistemas de mira cirúrgica e equipamentos militares de precisão antes de ser adotada pelas fábricas de bordado para facilitar a vida das bordadeiras no mundo inteiro!",
    "curiosidadeTecnica": "O laser verde de 520 nm é percebido pelo olho humano com uma sensibilidade 5 vezes maior que o laser vermelho comum, sendo a melhor escolha para ateliês muito iluminados.",
    "dicaArtrelados": "Para saber se o seu laser está bem calibrado: coloque um pedaço de fita crepe no bastidor, ligue o laser e marque o centro da cruz com uma caneta fina. Em seguida, desça a agulha número 1: a ponta deve furar exatamente em cima da marquinha da caneta! Se estiver fora, ajuste os parafusinhos do suporte do laser!",
    "applications": [
      "Centralização de logotipos em bolsos de jalecos e camisas sociais",
      "Alinhamento de nomes e monogramas em toalhas de banho e enxovais",
      "Posicionamento de escudos em bonés montados no bastidor cilíndrico",
      "Alinhamento de cruzetas em projetos multi-bastidor de grandes formatos"
    ],
    "troubleshootingTips": [
      "Se a cruz do laser estiver embaçada ou torta, limpe a lente de vidro com um cotonete seco e gire o foco.",
      "Se a agulha está descendo 2 mm ao lado do ponto de luz, calibre a posição do suporte nos parafusos de ajuste.",
      "Se o laser não acende, verifique o conector de alimentação de 5V na lateral do cabeçote."
    ],
    "relatedTerms": [
      "Ponteiro Laser (Laser Pointer)",
      "Ponto de Origem (X/Y Origin)",
      "Centralização de Bastidor",
      "Traçado de Área (Trace)",
      "Gabarito de Posicionamento"
    ],
    "tags": [
      "laser",
      "marcador-centro",
      "ponteiro-laser",
      "alinhamento",
      "origem-xy",
      "precisao",
      "produtividade",
      "acessorios"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "TAJIMA GROUP. Laser Pointer Alignment and Origin Setup Manual. Nagoya: Tajima, 2023. BARUDAN CO. Optical Crosshair Device and Positioning Systems. Ichinomiya: Barudan, 2022.",
    "bibliographicReferences": [
      "TAJIMA GROUP. Laser Pointer Alignment and Origin Setup Manual. Nagoya: Tajima, 2023.",
      "BARUDAN CO. Optical Crosshair Device and Positioning Systems. Ichinomiya: Barudan, 2022.",
      "ARTRELADOS. Metrologia Óptica e Tecnologias de Posicionamento Laser em Máquinas de Bordar. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Faça um 'X' com giz de alfaiate no peito de uma camiseta montada no bastidor. Ligue o laser da sua máquina e use o painel para levar a cruz iluminada bem em cima do 'X'. Execute a função de traçado de contorno (Trace) e veja como o bordado vai sair 100% reto e centralizado!",
    "quickSummary": "É a cruzinha de luz laser que brilha no tecido mostrando exatamente onde a agulha vai começar a bordar.",
    "beginnerExplanation": "É como uma mirinha de luz vermelha ou verde que a máquina projeta no tecido. Você mexe o bastidor até a cruzinha de luz ficar bem em cima do lugar que você quer bordar. Assim você nunca erra o centro nem borda nada torto!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Calibração óptica de offset a cada troca de cabeçote"
    }
  },
  {
    "id": "i-099-intercalamento-pontos-contornos-finos-staggering",
    "code": "I-099",
    "letter": "I",
    "term": "Intercalamento de Pontos em Contornos Finos e Letras Pequenas (Stitch Staggering, Jitter & Micro-Lettering Precision)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Software",
    "origin": "Desenvolvido pelas pioneiras Wilcom e Compucon na Grécia e Austrália para permitir o bordado legível de letras de 3 a 5 mm em uniformes corporativos.",
    "summary": "Técnica de matrizaria que distribui os pontos de penetração de forma escalonada e alternada para evitar o serrilhado e o empastelamento em textos minúsculos.",
    "definition": "O Intercalamento de Pontos em Contornos Finos e Letras Pequenas (Stitch Staggering & Micro-Lettering Node Optimization) é a estratégia matemática de digitalização aplicada a colunas ultrafinas de ponto cheio (menores que 1,2 mm) e contornos corridos de alta definição. Em letras muito pequenas (como nomes de cargos em jalecos ou tags de etiquetas com 3 mm a 5 mm de altura), o impacto alinhado e contínuo da agulha no mesmo trilho perfura o tecido como uma serra e deforma os nós. O intercalamento alterna as penetrações pares e ímpares com micro-deslocamentos longitudinais de 0,15 mm a 0,25 mm, resultando em letras nítidas, legíveis e sem linhas serrilhadas.",
    "technicalDetails": "A técnica reduz a densidade nominal em até 20% e aplica comprimentos mínimos de ponto de 0,8 mm a 1,2 mm com compensação de repuxo de +0,25 mm. Recomenda-se o uso mandatório de linha ultrafina calibre 60 ou 75 (composta por 2 cabos de microfilamentos) e agulha 65/9 ou 60/8 de ponta bola fina (SES/RG).",
    "construction": [
      "Fracionamento alternado das coordenadas de penetração esquerda e direita",
      "Supressão de costura de suporte central (Center Run) para não engordar a letra",
      "Substituição de nós de arremate volumosos por micro-travamentos lineares de 3 pontos",
      "Ajuste da inclinação angular dos pontos a 90° em relação à curvatura da letra",
      "Uso de agulha fina 65/9 e linha calibre 60 para fidelidade tipográfica máxima"
    ],
    "howItWorks": [
      "1. O programador digita o texto minúsculo de 4 mm de altura para um jaleco médico.",
      "2. Ativa o recurso de 'Letras Pequenas' (Small Lettering Optimization / Staggered Stitch).",
      "3. O software programa os pontinhos de forma intercalada, sem acumular furos no mesmo lugar.",
      "4. Na máquina, as letrinhas saem limpas, perfeitamente legíveis e parecendo uma impressão de gráfica."
    ],
    "mainTypes": [
      "Intercalamento de Pontos para Fontes Serifadas Clássicas (Para jalecos e peças de luxo)",
      "Ponto Corrido Triplo Escalonado para Letras Cursivas Minúsculas",
      "Micro-Contorno Intercalado para Olhos e Detalhes Faciais em Retratos Bordados"
    ],
    "characteristics": [
      "Legibilidade perfeita em textos minúsculos de 3 mm a 5 mm de altura",
      "Eliminação de furos rasgados e empastelamento de nós na malha fina",
      "Acabamento limpo e refinado de altíssimo padrão profissional"
    ],
    "limitations": [
      "Exige o uso de linha fina 60 e agulha 65/9 para que os micro-pontos caibam com perfeição",
      "Não deve ser bordado em tecidos felpudos sem colocar plástico solúvel por cima"
    ],
    "numberingSystem": [
      "Altura Mínima de Letra Legível: 3,5 mm a 4,0 mm",
      "Calibre Recomendado da Linha: Linha 60 ou 75 (Mais fina que a normal 40)",
      "Calibre da Agulha: 65/9 ou 60/8 Ponta Fina"
    ],
    "advantages": [
      "✔ Bordados com nomes pequenininhos que qualquer pessoa consegue ler perfeitamente",
      "✔ Nunca mais sofra com letrinhas que viram um borrão ilegível de linha",
      "✔ Conquiste contratos de jalecos de clínicas e hospitais exigentes"
    ],
    "commonErrors": [
      "❌ Tentar bordar letras de 3 mm com linha grossa 40 comum e agulha grossa 80/12 (vira um garrancho)",
      "❌ Colocar enchimento duplo por baixo de letras minúsculas (a letra fica parecendo uma salsicha)",
      "❌ Usar nós de amarração gigantes no final de cada letra pequena"
    ],
    "voceSabia": "As marcas de relógios suíços e grifes famosas de camisaria usam linhas especiais de calibre 75 com essa técnica para bordar seus nomes em letras de apenas 2 milímetros de altura nos punhos das camisas!",
    "curiosidadeTecnica": "Em uma letra 'E' de 4 mm, o espaço interno entre os tracinhos horizontais é menor que 0,6 mm; se os pontos não forem intercalados, os furos da agulha se fundem e abrem um buraco no tecido.",
    "dicaArtrelados": "Ao bordar nomes pequenos em jalecos ou camisas sociais: use Linha 60 (mais fininha), Agulha 65/9 e ative a fonte própria para 'Letras Pequenas' no seu software de bordado! As letras saem tão nítidas e perfeitas que parecem desenhadas com caneta de ponta fina!",
    "applications": [
      "Nomes de médicos, dentistas e cargos em jalecos e uniformes corporativos",
      "Etiquetas de composição, tamanhos e tags bordadas de alta definição",
      "Monogramas pequenos e discretos no punho de camisas sociais masculinas",
      "Detalhes minúsculos de olhos, sobrancelhas e dedos em bordados artísticos"
    ],
    "troubleshootingTips": [
      "Se a letrinha minúscula virou um borrão redondo, troque a linha comum 40 por uma linha fina calibre 60.",
      "Se a letra rasgou o tecido de baixo, aumente o espaçamento dos pontos e retire a costura de suporte central.",
      "Se os cantinhos das letras sumiram, coloque plástico filme hidrossolúvel por cima antes de bordar."
    ],
    "relatedTerms": [
      "Micro-Letras (Small Lettering)",
      "Linha Calibre 60",
      "Agulha 65/9",
      "Legibilidade Tipográfica",
      "Ponto Cheio Fino"
    ],
    "tags": [
      "intercalamento",
      "letras-pequenas",
      "micro-lettering",
      "linha-60",
      "agulha-fina",
      "jalecos",
      "tipografia",
      "precisao"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Micro-Lettering and High-Definition Typography Standards. Sydney: Wilcom, 2023. MADEIRA GARNFABRIK. Polyneon 60 and 75 Micro-Thread Applications. Freiburg: Madeira, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Micro-Lettering and High-Definition Typography Standards. Sydney: Wilcom, 2023.",
      "MADEIRA GARNFABRIK. Polyneon 60 and 75 Micro-Thread Applications. Freiburg: Madeira, 2022.",
      "ARTRELADOS. Tipografia Digital e Micro-Engenharia de Pontos para Bordado de Alta Resolução. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Digitalize a palavra 'Dr. Carlos' com 4,5 mm de altura. Borde primeiro com linha 40 comum e agulha 75/11; depois borde a mesma palavra com Linha 60 e agulha 65/9 usando pontos intercalados. Coloque as duas lado a lado e veja a diferença espetacular de nitidez e beleza!",
    "quickSummary": "É a técnica do programa que espalha os pontinhos para que letras bem pequenininhas fiquem 100% nítidas e fáceis de ler.",
    "beginnerExplanation": "Quando você quer bordar um nome bem pequenininho no bolso de um jaleco, se colocar pontos normais as letras viram um borrão feio. Essa técnica espalha os pontinhos de forma inteligente para que cada letrinha saia perfeita, fininha e linda!",
    "recommendedSettings": {
      "speedPPM": "650 a 750 PPM",
      "needleType": "65/9 Ponta Bola Fina (SES)",
      "stabilizer": "Entretela Rasgável 50g",
      "threadTension": "100 a 110gf",
      "density": "0,36 mm a 0,40 mm com linha calibre 60"
    }
  },
  {
    "id": "i-100-isencao-tensao-desbobinamento-canelinha-tension-free",
    "code": "I-100",
    "letter": "I",
    "term": "Isenção de Tensão no Desbobinamento da Canelinha e Mola de Freio (Tension-Free Bobbin Unwinding & Anti-Backlash Brake Spring)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Mecânica da Máquina",
    "origin": "Das pesquisas de dinâmica de fios da Towa Industrial e Koban no Japão para eliminar o repuxo e variações cíclicas de tensão no avesso.",
    "summary": "Calibração e uso da lâmina elástica de freio (Anti-Backlash Spring) dentro da caixa de bobina que impede a canelinha de girar em falso e garante saída uniforme do fio de baixo.",
    "definition": "A Isenção de Variação de Tensão no Desbobinamento da Canelinha (Anti-Backlash Bobbin Dynamics & Brake Spring Calibration) é o princípio mecânico que assegura a saída contínua, homogênea e desprovida de picos de tensão da linha inferior (bobina/canelinha). Quando a máquina para bruscamente a 1.000 PPM ou muda de direção, a inércia faz a canelinha continuar girando livremente dentro da caixa (efeito Over-Spin ou Backlash), desenrolando fio em excesso. Na batida seguinte, esse excesso é puxado de golpe, travando a mola tensora e puxando a linha superior para o avesso. A presença e correta pressão da mola de freio estelar (Brake Spring) anula essa inércia, garantindo tensão constante de 20 a 25 gramas-força.",
    "technicalDetails": "A mola de freio interna (arruela elástica de bronze fosforoso ou aço mola em formato de estrela/côncava) exerce uma pré-carga axial controlada de 3 a 5 gf contra a face lateral da canelinha. A medição da tensão estática e dinâmica de saída do fio de baixo deve ser aferida com dinamômetro de precisão (Towa Digital Bobbin Gauge) entre 20 gf e 28 gf para bobinas de filamento contínuo com ou sem núcleo (Magnetic Core / Sideless).",
    "construction": [
      "Caixa de bobina em aço cromado com alojamento retificado",
      "Lâmina elástica inferior anti-giro livre (Anti-Backlash Brake Spring)",
      "Mola de tensão plana superior com parafuso micrométrico de ajuste",
      "Canelinhas de alumínio usinado perfurado ou bobinas prontas sem flange (Sideless)",
      "Bobinas magnéticas (Magnetic Core) que dispensam molas mecânicas com atrito nulo"
    ],
    "howItWorks": [
      "1. A canelinha com linha de baixo é inserida na caixa de bobina sobre a mola de freio.",
      "2. A máquina borda a 1.000 pontos por minuto; a mola mantém a canelinha suavemente apoiada.",
      "3. Quando a máquina corta a linha ou faz uma curva rápida, a canelinha para instantaneamente sem soltar linha a mais.",
      "4. O avesso do bordado fica perfeito: uma faixa branca central uniforme de exatamente 1/3 da largura da coluna.",
      "5. Nenhuma linha branca sobe para a frente do bordado e nenhuma laçada fica frouxa no avesso."
    ],
    "mainTypes": [
      "Caixa de Bobina com Mola Anti-Backlash de Aço (Padrão industrial universal)",
      "Bobinas Magnéticas com Núcleo Magnético (Elimina 100% da inércia por atração magnética suave)",
      "Canelinhas de Alumínio Perfuradas de Baixa Inércia (Para máquinas de alta rotação)"
    ],
    "characteristics": [
      "Equilíbrio de tensão perfeito de 1/3 no avesso durante toda a costura da bobina (do início ao fim)",
      "Eliminação total do aparecimento de pontinhos brancos na frente do bordado",
      "Fim das laçadas soltas e 'ninhos' de linha embaixo do tecido"
    ],
    "limitations": [
      "Acúmulo de poeira e fiapos de linha embaixo da mola de freio trava a canelinha e desregula a tensão",
      "Canelinhas de plástico amassadas ou tortas giram travando e estragam o ajuste"
    ],
    "numberingSystem": [
      "Tensão Recomendada da Linha de Baixo: 20 a 25 gramas-força (gf)",
      "Proporção Ideal no Avesso: 1/3 de linha de baixo no centro e 1/3 de linha de cima em cada lado",
      "Pressão da Mola de Freio: 3 a 5 gf"
    ],
    "advantages": [
      "✔ Avesso de bordado lindo, limpo e padronizado como nos melhores ateliês do mundo",
      "✔ Nunca mais veja a linha branca da canelinha aparecer na frente do desenho",
      "✔ Confiança total para bordar peças grandes sem medo de desregulagem da linha de baixo"
    ],
    "commonErrors": [
      "❌ Tirar a molinha de dentro da caixa de bobina achando que ela não serve para nada",
      "❌ Usar canelinhas de plástico tortas que ficam dançando e travando dentro da caixa",
      "❌ Deixar poeira de linha acumulada embaixo da lâmina de tensão sem limpar com a ponta de um estilete"
    ],
    "voceSabia": "Mais de 70% dos problemas de bordado que as pessoas acham que são culpa da 'tensão da linha de cima' são na verdade causados por sujeira ou falta da mola de freio na caixa de bobina lá embaixo!",
    "curiosidadeTecnica": "As bobinas industriais modernas com núcleo magnético (Magnetic Core) utilizam um ímã minúsculo no centro que se fixa ao fundo da caixa de bobina, fazendo o fio desenrolar com tensão constante do primeiro até o último metro.",
    "dicaArtrelados": "Toda semana: tire a canelinha da máquina, passe a ponta de um cartão de visita ou a quina de uma folha de papel embaixo da chapinha da caixa de bobina para tirar fiapos escondidos, e pingue uma gotinha de óleo na pista da lançadeira! Sua tensão vai ficar perfeita e seu bordado com acabamento de cinema!",
    "applications": [
      "Calibração de rotina da tensão inferior em máquinas domésticas e industriais",
      "Controle de qualidade de avesso com proporção áurea de 1/3 de linha",
      "Uso de bobinas prontas industriais (Pre-Wound Bobbins) e magnéticas",
      "Eliminação definitiva de linha branca subindo para a frente do bordado"
    ],
    "troubleshootingTips": [
      "Se a linha branca da bobina está aparecendo na frente do bordado, aperte 1/8 de volta o parafuso da caixa de bobina ou afrouxe o tensor de cima.",
      "Se a linha de baixo está toda frouxa e embolando embaixo do tecido, limpe a sujeira embaixo da lâmina tensora da caixa de bobina.",
      "Se a canelinha parece que gira solta demais e dá trancos, verifique se a molinha estelar não caiu de dentro da caixa."
    ],
    "relatedTerms": [
      "Caixa de Bobina (Bobbin Case)",
      "Canelinha / Bobina",
      "Mola de Freio (Anti-Backlash Spring)",
      "Tensiómetro Towa (Towa Gauge)",
      "Proporção de 1/3 no Avesso"
    ],
    "tags": [
      "tensao-canelinha",
      "caixa-bobina",
      "freio-canelinha",
      "anti-backlash",
      "avesso-perfeito",
      "towa",
      "mecanica-precisao",
      "qualidade"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "TOWA INDUSTRIAL CO. Bobbin Tension Gauges, Anti-Backlash Springs and Quality Standards. Tokyo: Towa, 2023. KOBAN HOOKS. Bobbin Case Maintenance and Thread Tension Dynamics. Osaka: Koban, 2022.",
    "bibliographicReferences": [
      "TOWA INDUSTRIAL CO. Bobbin Tension Gauges, Anti-Backlash Springs and Quality Standards. Tokyo: Towa, 2023.",
      "KOBAN HOOKS. Bobbin Case Maintenance and Thread Tension Dynamics. Osaka: Koban, 2022.",
      "ARTRELADOS. Dinâmica de Desbobinamento e Metrologia de Tensão Inferior em Bordado Digital. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Borde uma coluna simples de ponto cheio de 5 mm de largura. Vire a peça no avesso e observe: você deve ver exatamente 1/3 de linha de cima na esquerda, 1/3 de linha branca da canelinha no centro e 1/3 de linha de cima na direita. Esse é o clássico 'Padrão Ouro Artrelados' de tensão perfeita!",
    "quickSummary": "É a molinha especial dentro da caixa da canelinha que não deixa ela girar solta, mantendo o avesso perfeito e sem linha branca na frente.",
    "beginnerExplanation": "A canelinha com a linha de baixo precisa girar bem macia, mas sem ficar rodando solta igual uma roda solta na ladeira. Essa molinha de freio inteligente segura a canelinha no ponto certo para que o avesso fique lindo e a linha branca nunca apareça na frente da roupa!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "22 a 25gf no tensiômetro Towa para linha de baixo",
      "density": "Padrão"
    }
  }
];

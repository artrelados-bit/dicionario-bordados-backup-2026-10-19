import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART14: Verbete[] = [
  {
    "id": "o-087-offset-angular-de-lancadeira-e-ponto-de-cruzamento-com-a-agulha",
    "code": "O-087",
    "term": "Offset Angular de Lançadeira e Ponto de Cruzamento com a Agulha (Hook Timing Offset & Needle Scarf Crossover)",
    "letter": "O",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês offset (deslocamento angular calibrado) e do latim transire (cruzar milimetricamente no espaço tridimensional).",
    "summary": "Procedimento metrológico de precisão para sincronismo angular (Hook Timing) entre a ponta da lançadeira rotativa e a cava (scarf) da agulha durante a subida de formação da laçada (1,8 mm a 2,2 mm).",
    "definition": "Offset Angular de Lançadeira e Ponto de Cruzamento com a Agulha (Rotary Hook Timing Calibration, Radial Gap & Scarf Clearance) é o ajuste mecânico mais crítico de uma máquina de bordar industrial. Ele estabelece a relação temporal e espacial milimétrica entre a rotação da lançadeira (relação 2:1, girando duas voltas a cada penetração da agulha) e o curso ascendente da barra de agulha. Quando a agulha atinge o ponto morto inferior (BDC) e sobe exatamente entre 1,8 mm e 2,2 mm, o bico da lançadeira deve cruzar o eixo central da agulha exatamente entre 0,5 mm e 1,0 mm acima do topo do olho da agulha (dentro da cava/scarf), mantendo uma folga lateral livre de apenas 0,03 mm a 0,05 mm sem encostar no metal da agulha.",
    "technicalDetails": "Curso de subida da barra de agulha (Loop Stroke): 1,8 mm a 2,2 mm após BDC (ou 196° a 202° no transferidor angular do volante). Altura da ponta da lançadeira sobre o olho: 0,8 mm ± 0,2 mm. Folga lateral entre ponta e cava (Radial Gap): 0,03 mm a 0,05 mm (espessura de uma folha de papel de cigarro). Torque dos parafusos de fixação da lançadeira: 3,0 N.m.",
    "construction": [
      "Lançadeira rotativa industrial de alta velocidade com bico temperado e cesto com mola de freio",
      "Gabarito de sincronismo de fábrica (Timing Gauge) com batente de subida milimétrico",
      "Calibre de folga de lâminas de aço (Feeler Gauge de 0,04 mm)",
      "Lupa de precisão de 10x com iluminação LED direcionada para inspeção visual do cruzamento",
      "Chave de fenda de alta resistência para aperto balanceado dos três parafusos do cubo da lançadeira"
    ],
    "howItWorks": [
      "1. Remove-se a chapa de ponto, a caixa de bobina e o calcador para ter visibilidade total do bico da lançadeira.",
      "2. Instala-se uma agulha 75/11 nova e perfeitamente reta no cabeçote de teste.",
      "3. Gira-se o volante manualmente até a barra de agulha descer ao ponto mais baixo (Ponto Morto Inferior / 180°).",
      "4. Continua-se girando até o grau exato marcado no manual (ex: 200° ou 2,0 mm de subida), onde a linha forma a laçada na cava.",
      "5. Soltam-se levemente os três parafusos de fixação da lançadeira no eixo inferior.",
      "6. Gira-se o corpo da lançadeira até que a ponta afiada fique centralizada na cava da agulha (0,8 mm acima do olho).",
      "7. Ajusta-se a distância lateral para 0,04 mm com o calibre de lâmina (sem encostar na agulha para não riscar o metal).",
      "8. Apertam-se os três parafusos firmemente em cruz. A máquina é ligada a 900 PPM: zero falhas de ponto e zero quebras de agulha."
    ],
    "mainTypes": [
      "Sincronismo Padrão a 200° (Para tecidos convencionais e linhas 40wt de uso diário)",
      "Sincronismo com Avanço Angular a 196° (Para bordados em bonés e tecidos rígidos que atrasam a laçada)",
      "Sincronismo com Atraso Angular a 203° (Para linhas grossas 30wt ou fios metálicos delicados)"
    ],
    "characteristics": [
      "Garante a captura infalível de 100% das laçadas de linha mesmo a 1.000 PPM",
      "Eliminação absoluta de pontos pulados, nós frouxos e arrebentamento de linha",
      "Preservação da vida útil da ponta da lançadeira e da ponta da agulha contra impactos",
      "Funcionamento suave, silencioso e estável em todos os tipos de tecidos"
    ],
    "limitations": [
      "Procedimento de altíssima precisão mecânica que deve ser feito com ferramentas adequadas",
      "Nunca deixar a ponta da lançadeira raspar na agulha (o atrito cega o bico da lançadeira e quebra a agulha)",
      "Exige que a agulha usada para calibração seja 100% nova e sem desvios"
    ],
    "numberingSystem": [
      "Subida da Agulha (Loop Stroke): 2,0 mm",
      "Folga Lateral (Gap): 0,04 mm",
      "Altura Acima do Olho: 0,8 mm"
    ],
    "advantages": [
      "✔ Acaba de vez com o problema crônico de 'pontos pulados' e linhas que não laçam",
      "✔ Permite que a máquina trabalhe em velocidade máxima sem falhas de acabamento",
      "✔ Evita o desgaste prematuro e a compra desnecessária de lançadeiras novas"
    ],
    "commonErrors": [
      "❌ Regular o sincronismo no 'olhômetro' empurrando a lançadeira encostada na agulha com força",
      "❌ Fazer a regulagem com uma agulha velha torta ou com a barra de agulha frouxa",
      "❌ Apertar apenas um parafuso da lançadeira, fazendo a peça soltar e girar em falso durante a costura"
    ],
    "voceSabia": "A lançadeira rotativa gira duas vezes para cada ponto que a máquina faz: na primeira volta, ela laça a linha de cima e passa ao redor da bobina; na segunda volta, ela gira vazia para dar tempo do estica-fio puxar a linha de volta!",
    "curiosidadeTecnica": "A janela temporal em que a laçada de linha permanece perfeitamente aberta para a captura da lançadeira a 1.000 PPM dura apenas 4,5 milissegundos; um desvio angular de apenas 3 graus no sincronismo é suficiente para a lançadeira passar no vazio e pular o ponto.",
    "dicaArtrelados": "Se a sua máquina começou a pular pontos em uma agulha específica ou fez um estalo forte após bater em um bastidor de boné, a lançadeira provavelmente 'saiu do ponto' (desregulou o sincronismo). Um técnico com a chavinha certa e um calibre alinha a lançadeira em 10 minutos e a máquina volta a bordar macia como nova!",
    "comparisonTable": {
      "headers": [
        "Estado do Sincronismo",
        "Captura da Laçada",
        "Comportamento a 900 PPM",
        "Risco de Danos Mecânicos"
      ],
      "rows": [
        [
          "Perfeito (2,0 mm / Folga 0,04 mm)",
          "100% precisa e limpa",
          "Estabilidade total e silenciosa",
          "Zero risco"
        ],
        [
          "Atrasado (> 2,5 mm)",
          "Passa depois da laçada sumir",
          "Pontos pulados constantes",
          "Baixo"
        ],
        [
          "Adiantado com Encosto na Agulha",
          "Bate na lateral da haste",
          "Ruído metálico e quebras",
          "Altíssimo (destrói o bico da lançadeira)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-calibração: Estabilidade total até 1.000 PPM",
      "needleType": "Padrão de produção (DBxK5)",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Manutenção corretiva após colisões da agulha com o aro do bastidor de boné ou metal",
      "Revisão periódica de sincronismo de cabeçotes industriais e máquinas monocabeça",
      "Substituição de lançadeiras rotativas antigas por peças novas de titânio (Koban / Hirose)",
      "Calibração fina para bordados difíceis em couro, bonés estruturados e tecidos pesados"
    ],
    "troubleshootingTips": [
      "Utilize sempre agulhas originais de boa procedência para realizar a conferência do ponto",
      "Inspecione a ponta da lançadeira com a unha: se sentir uma rebarba áspera, faça o polimento com lixa 2000 e pasta diamantada",
      "Verifique se o cesto da lançadeira gira livremente sem folga axial excessiva"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Chapa de Ponto",
      "Agulha de Bordar",
      "Manutenção Preventiva"
    ],
    "tags": [
      "o-087",
      "offset angular",
      "sincronismo da lancadeira",
      "hook timing",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KOBAN Rotary Hook Engineering & Precision Timing Manual. Osaka, 2021.",
      "PARRISH, Gail. Rotary Hook Kinematics, Loop Formation Dynamics and Timing Calibration in Automated Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Gire o volante da sua máquina bem devagarzinho com a tampa aberta e observe por baixo da chapa: veja como a pontinha pontiaguda da lançadeira passa raspando por trás da agulha exatamente no milímetro em que a agulha começa a subir. É uma dança mecânica perfeita e fascinante!",
    "quickSummary": "O ajuste do relógio interno da máquina para a lançadeira pescar a linha no momento exato sem bater na agulha.",
    "beginnerExplanation": "Para formar o ponto, a agulha desce com a linha e, quando ela começa a subir, o bico da lançadeira (onde fica a bobina) passa por trás dela para puxar o fio. O sincronismo é a regulagem que garante que esse encontro aconteça no segundo exato: nem adiantado, nem atrasado, sem bater na agulha e sem perder o ponto!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-088-oxford-e-tecidos-de-poliester-estruturados-para-fardamentos-e-toalhas",
    "code": "O-088",
    "term": "Oxford e Tecidos de Poliéster Estruturados para Fardamentos e Toalhas (Oxford Weave & Polyester Uniform Fabrics)",
    "letter": "O",
    "level": "Iniciante 🟢",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do topônimo Oxford (cidade universitária da Inglaterra onde a tecelagem escocesa do século XIX popularizou a armação de fios duplos).",
    "summary": "Diretrizes de digitalização, estabilização e bordado para tecidos de poliéster de armação tafetá/panamá (Oxford, Oxfordine e Gabardine), amplamente utilizados em jalecos médicos, toalhas de mesa e fardamentos corporativos.",
    "definition": "Oxford e Tecidos de Poliéster Estruturados para Fardamentos e Toalhas (Oxford Basketweave Substrate & Synthetic Uniform Fabric Protocol) é o conjunto de técnicas de preparação e execução de bordado computadorizado em tecidos com armação de ligamento tafetá derivado (cestaria / fios duplos em urdume e trama) 100% poliéster ou mistos com algodão. O tecido Oxford destaca-se pela alta resistência ao atrito e durabilidade em lavagens pesadas, mas possui superfície com textura granulada e baixa elasticidade que tende a franzir se a densidade for excessiva. Requer entretela rasgável de média gramatura (45 a 50 g/m²), compensação de repuxo padrão de 0,35 mm e agulhas 75/11 SES de ponta arredondada suave.",
    "technicalDetails": "Gramatura média do Oxford: 140 a 180 g/m² (Oxfordine: 110 g/m² / Gabardine: 200 g/m²). Agulha recomendada: 75/11 SES ponta arredondada suave (evita o corte de filamentos sintéticos). Densidade de matriz ideal: 0,40 mm a 0,42 mm. Estabilização: Entretela Rasgável de 50 g/m² ou Entretela de Recorte leve. Compensação de repuxo (Pull Compensation): 0,35 mm a 0,40 mm.",
    "construction": [
      "Tecido Oxford 100% poliéster com ligamento de fios duplos entrelaçados",
      "Entretela rasgável de boa qualidade com corte limpo nas bordas",
      "Montagem no bastidor com alinhamento ortogonal da trama reta",
      "Matriz com underlay leve em ponto de corrida de contorno (Edge Walk) e ziguezague intermediário",
      "Linha de poliéster 40wt resistente ao alvejamento e lavagens com cloro"
    ],
    "howItWorks": [
      "1. Corta-se a entretela rasgável de 50 g/m² no tamanho do bastidor da máquina.",
      "2. Posiciona-se o tecido Oxford com a entretela no bastidor, mantendo a peça no esquadro reto da trama.",
      "3. Aperta-se o parafuso do bastidor com firmeza moderada (o Oxford tem boa estrutura natural e não deforma fácil).",
      "4. Utiliza-se a agulha 75/11 SES e linha de poliéster 40wt brilhante.",
      "5. A máquina borda o logotipo corporativo ou nome do profissional a 850 PPM de forma suave.",
      "6. Retira-se a peça do bastidor e rasga-se o excesso de entretela rente ao verso do bordado.",
      "7. A peça fica pronta: bordado com letras nítidas, sem nenhum repuxo no tecido e resistente a anos de uso diário."
    ],
    "mainTypes": [
      "Oxford Tradicional 100% Poliéster (Para aventais, toalhas de mesa de buffet e capas de almofada)",
      "Oxfordine / Micro-Oxford Leve (Para jalecos médicos, scrubs de enfermagem e batas de estética)",
      "Gabardine de Poliéster Estruturado (Para fardamentos executivos, ternos e calças de gala)"
    ],
    "characteristics": [
      "Excelente estabilidade dimensional que facilita muito a montagem no bastidor para iniciantes",
      "Fácil remoção da entretela rasgável no avesso com acabamento limpo e rápido",
      "Altíssima resistência a lavagens pesadas, secagem rápida e zero amarrotamento",
      "Custo acessível de matéria-prima com excelente margem de lucro para o ateliê"
    ],
    "limitations": [
      "Não usar densidades muito fechadas (< 0,35 mm), que podem fazer o tecido sintético franzir como sanfona",
      "Cuidado com ferros de passar muito quentes (o poliéster derrete acima de 160°C)",
      "Em tecidos muito finos (Oxfordine branco), usar entretela sem sobras escuras no avesso"
    ],
    "numberingSystem": [
      "Gramatura Oxford Padrão: 160 g/m²",
      "Densidade da Matriz: 0,40 mm",
      "Compensação de Repuxo: 0,35 mm"
    ],
    "advantages": [
      "✔ Um dos tecidos mais fáceis e gostosos de bordar no ateliê, ideal para iniciantes",
      "✔ Grande volume de encomendas comerciais: jalecos, uniformes de restaurantes e eventos",
      "✔ O bordado fica perfeitamente nítido e plano com pouco esforço de estabilização"
    ],
    "commonErrors": [
      "❌ Usar agulha cortante ponta de lança, que desfia os fios sintéticos do Oxford",
      "❌ Borda nomes em jalecos sem compensação de repuxo, fazendo as letras ficarem finas e deformadas",
      "❌ Passar a ferro quente em cima do bordado pronto sem pano protetor, derretendo o tecido sintético"
    ],
    "voceSabia": "O tecido Oxford foi criado no século XIX por tecelões escoceses que batizaram quatro novos tecidos com os nomes das universidades mais famosas da época: Harvard, Cambridge, Yale e Oxford; mas apenas o Oxford se tornou um sucesso mundial que dura até hoje!",
    "curiosidadeTecnica": "O tecido Oxford possui uma porosidade média de 25% em sua estrutura de trama dupla, o que permite que a agulha 75/11 SES penetre afastando os filamentos em 90% dos pontos sem cortar a estrutura molecular do poliéster.",
    "dicaArtrelados": "O tecido Oxford e Oxfordine é o campeão dos jalecos e toalhas de mesa: use uma folha de entretela rasgável de boa qualidade por baixo, agulha 75/11 de ponta arredondada e linha de poliéster. O bordado fica tão plano e bonito que parece que foi impresso direto no tecido, e no final a entretela rasga fácil em um segundo!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Tecido Oxford (Poliéster)",
        "Tecido Piquet (Polo)",
        "Tricoline (Algodão)"
      ],
      "rows": [
        [
          "Facilidade no Bastidor",
          "Altíssima (firme e estruturado)",
          "Média (requer cuidado com estiramento)",
          "Alta (plano)"
        ],
        [
          "Tipo de Entretela",
          "Rasgável 50 g/m²",
          "Recorte Spunbonded 60 g/m²",
          "Rasgável 45 g/m²"
        ],
        [
          "Risco de Franzimento",
          "Baixo",
          "Médio a Alto",
          "Baixo"
        ],
        [
          "Durabilidade em Lavagens",
          "Excelente (não desbota)",
          "Boa",
          "Média a Alta"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "800 - 950 PPM (Alta velocidade)",
      "needleType": "75/11 SES de ponta arredondada suave",
      "stabilizer": "Entretela Rasgável de 50 g/m²",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm a 0.42 mm"
    },
    "applications": [
      "Jalecos médicos, odontológicos, batas de estética e aventais de cozinha profissional",
      "Toalhas de mesa para buffets, restaurantes, centros de mesa e guardanapos de festa",
      "Capas de almofada decorativas, nécessaires e bolsas organizadoras promocionais",
      "Fardamentos escolares, uniformes de recepção e jaquetas leves"
    ],
    "troubleshootingTips": [
      "Se o Oxford franzir nas bordas do bordado, aumente o espaçamento de ponto de 0,38 mm para 0,42 mm",
      "Utilize linhas de poliéster virgem 40wt para garantir resistência total ao cloro em lavanderias de hospitais",
      "Ao passar a peça pronta, use o ferro na temperatura 'Sintético / Lã' para não queimar o brilho do tecido"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Entretela Rasgável (Tear-Away)",
      "Agulha de Ponta Arredondada (Ball Point / SES)",
      "Compensação de Repuxo",
      "Densidade de Ponto"
    ],
    "tags": [
      "o-088",
      "oxford",
      "oxfordine",
      "jalecos",
      "uniformes",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TEXTILE INSTITUTE Handbook: Woven Fabric Structures, Basketweave & Synthetic Uniform Substrates. Manchester, 2021.",
      "PARRISH, Gail. Polyester Substrate Dynamics, Tear-Away Optimization and Pull Compensation in Institutional Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido Oxford branco e coloque no bastidor com uma folha de entretela rasgável. Borde o logotipo de uma clínica ou um nome em ponto cheio. Tire do bastidor e rasgue a entretela: veja como o avesso fica super limpo e a frente fica perfeitamente lisinha!",
    "quickSummary": "O tecido resistente e fácil de bordar mais usado em jalecos médicos, aventais e toalhas de mesa.",
    "beginnerExplanation": "O Oxford é aquele tecido forte e macio 100% poliéster usado em jalecos de médico, aventais e toalhas de festa. Ele é maravilhoso para quem está começando porque não estica, não entorta no bastidor e fica lisinho com uma entretela rasgável simples, deixando o bordado perfeito e fácil de limpar no verso!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-089-otimizacao-de-comprimento-de-ponto-curto-para-reducao-de-quebras",
    "code": "O-089",
    "term": "Otimização de Comprimento de Ponto Curto para Redução de Quebras (Short Stitch Filter)",
    "letter": "O",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim curtus (curto / minúsculo) e do francês filtre (mecanismo seletor de purificação de dados numéricos).",
    "summary": "Aplicação de filtros paramétricos de exclusão e espaçamento de micropontos (< 0,4 mm) em vértices afiados e cantos estreitos de letras e contornos, prevenindo perfurações destrutivas e quebras de linha.",
    "definition": "Otimização de Comprimento de Ponto Curto para Redução de Quebras (Short Stitch Elimination Filter & Corner Point Distribution Algorithm) é a função computacional nos programas de digitalização que detecta e remove automaticamente penetrações consecutivas de agulha com espaçamento espacial inferior ao limite físico de integridade da linha e do tecido (geralmente entre 0,3 mm e 0,5 mm). Em curvas fechadas, pontas afiadas de letras (como o vértice de um 'V' ou 'W') e cantos em ângulo agudo, as linhas internas de pontos convergem para um único ponto central; sem o filtro ativado, a agulha fura 10 a 20 vezes no mesmo milímetro quadrado, perfurando o tecido como um picotador de papel, moendo a linha e provocando quebras sucessivas e nós duros.",
    "technicalDetails": "Comprimento mínimo de corte do filtro: 0,40 mm (pontos < 0,4 mm são eliminados ou estendidos). Redução percentual de pontos curtos em curvas: 35% a 50% nas bordas internas. Diâmetro da agulha 75/11: 0,75 mm (dois furos a menos de 0,4 mm criam sobreposição destrutiva de furos de 100%). Impacto no total de pontos da matriz: Redução de 8% a 15% de pontos desnecessários.",
    "construction": [
      "Algoritmo de varredura geométrica de vértices e dobras de colunas vetoriais",
      "Parâmetro de limite mínimo de comprimento configurável no software (Short Stitch Threshold = 0,4 mm)",
      "Distribuição alternada das penetrações internas (Staggered Short Stitches)",
      "Compensação de densidade angular em leque para curvas fechadas",
      "Filtro de pontos curtos integrado no pós-processamento de exportação do arquivo DST/PES"
    ],
    "howItWorks": [
      "1. Ao digitalizar um texto com letras pontudas ou um logotipo com estrelas e brasões, as pontas concentram muitos pontos.",
      "2. No software de matriz, acessam-se as propriedades do objeto e ativa-se o 'Filtro de Pontos Curtos' (Short Stitch Filter).",
      "3. Configura-se o valor mínimo para 0,4 mm.",
      "4. O software recalcula automaticamente as passadas de agulha nos cantos: ele faz um ponto longo até o vértice e o ponto seguinte fica 1 mm mais recuado.",
      "5. Esse recuo intercalado em degraus distribui os furos da agulha suavemente ao longo da curva.",
      "6. Na máquina de bordar, a agulha entra livremente sem bater em bolo de linha acumulada.",
      "7. A ponta da letra ou estrela fica incrivelmente afiada e perfeita, sem quebrar nenhuma linha e sem furar o tecido."
    ],
    "mainTypes": [
      "Filtro de Pontos Curtos para Cantos Vivos (Para pontas de estrelas, triângulos e vértices afiados de fontes)",
      "Filtro de Pontos Curtos Radial para Curvas Fechadas (Para contornos circulares pequenos e monogramas)",
      "Limpeza Global de Micropontos na Exportação (Remove pontos acidentais de 0,1 mm gerados por nós vetoriais)"
    ],
    "characteristics": [
      "Eliminação imediata de até 90% das quebras de linha misteriosas em cantos de letras",
      "Proteção total do tecido contra rasgos e furos de agulha que cortam a peça",
      "Redução no tempo total de bordado pela eliminação de milhares de pontos inúteis",
      "Pontas de desenhos e letras visivelmente mais limpas, afiadas e elegantes"
    ],
    "limitations": [
      "Não colocar o filtro alto demais (> 0,8 mm), o que pode deixar cantos vivos com aspecto arredondado",
      "Sempre conferir a simulação 3D no computador para verificar a integridade visual da ponta",
      "Em fontes muito pequenas (< 4 mm), o filtro deve ser ajustado com sensibilidade"
    ],
    "numberingSystem": [
      "Comprimento Mínimo Recomendado: 0,40 mm",
      "Recuo de Ponto Curto: 40% a 50%",
      "Economia de Pontos: ~10%"
    ],
    "advantages": [
      "✔ Acaba com a máquina parando e quebrando linha toda vez que chega na pontinha de uma letra",
      "✔ Impede que a agulha corte o tecido como uma navalha nas curvas apertadas",
      "✔ Deixa o bordado muito mais macio e sem 'caroços' duros nos cantos"
    ],
    "commonErrors": [
      "❌ Desativar o filtro de pontos curtos, fazendo a agulha furar 15 vezes no mesmo buraquinho",
      "❌ Digitalizar vértices afiados com densidade manual pesada, criando um bolo duro de linha",
      "❌ Achar que a máquina está quebrando linha por causa da tensão, quando o defeito é excesso de micropontos na matriz"
    ],
    "voceSabia": "Uma agulha 75/11 tem 0,75 mm de diâmetro; se dois pontos forem dados com distância de 0,2 mm, o segundo furo da agulha sobrepõe o primeiro em mais de 70%, rasgando as fibras do tecido e esmagando o próprio fio que acabou de ser laçado!",
    "curiosidadeTecnica": "A remoção de pontos curtos inferiores a 0,4 mm em um bordado denso reduz a força máxima de penetração exigida pelo servomotor em até 40 kgf/cm², reduzindo o calor acumulado no olho da agulha em mais de 15°C.",
    "dicaArtrelados": "Se a sua máquina sempre quebra a linha quando vai bordar a pontinha de uma letra 'A', 'M' ou de uma estrela, o problema não é a linha: é excesso de pontos curtos no bico! Ative o 'filtro de pontos curtos' para 0,4 mm no programa de matriz. O programa afasta os pontinhos de dentro e a máquina borda a ponta lisinha sem quebrar nunca mais!",
    "comparisonTable": {
      "headers": [
        "Configuração do Canto",
        "Pontos no Vértice",
        "Comportamento da Linha",
        "Aspecto da Ponta"
      ],
      "rows": [
        [
          "Com Filtro de Pontos Curtos (0,4 mm)",
          "Distribuídos em degraus",
          "Desliza suave sem quebras",
          "Afiada, limpa e plana"
        ],
        [
          "Sem Filtro (Pontos Concentrados)",
          "10 a 20 furos no mesmo ponto",
          "Desfia, embola e quebra",
          "Bolo duro de linha / Rasga tecido"
        ],
        [
          "Filtro Excessivo (> 0,9 mm)",
          "Pontos eliminados demais",
          "Boa",
          "Ponta fica redonda e deformada"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 900 PPM",
      "needleType": "75/11 SES de alta precisão",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Filtro de pontos curtos configurado em 0.40 mm"
    },
    "applications": [
      "Letreiros pequenos com fontes serifadas e pontiagudas em uniformes e jalecos",
      "Estrelas, brasões militares, logotipos geométricos e escudos com vértices afiados",
      "Contornos finos em curvas fechadas de desenhos infantis e personagens",
      "Otimização de matrizes antigas para produção de alta velocidade em máquinas modernas"
    ],
    "troubleshootingTips": [
      "No software, utilize a visualização de nós/pontos (Stitch View) para enxergar onde os pontos curtos estão concentrados",
      "Em cantos extremamente pontiagudos (< 30°), utilize a opção de 'Canto Mitrado' (Mitred Corner) ou corte em ângulo",
      "Passe a matriz pelo comando de 'Limpeza de Matriz' antes de salvar o arquivo final no pendrive"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Satim / Ponto Cheio",
      "Densidade de Ponto",
      "Compensação de Repuxo",
      "Corte de Linha Automático (Trimmer)"
    ],
    "tags": [
      "o-089",
      "pontos curtos",
      "short stitch filter",
      "reducao de quebras",
      "cantos vivos",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Short Stitch Algorithms & Corner Stitch Management. Sydney, 2021.",
      "PARRISH, Gail. Stitch Density Singularities, Short Stitch Elimination and Needle Penetration Dynamics. Cincinnati, 2022."
    ],
    "practicalExercise": "Desenhe um triângulo com ponta bem fina no seu programa e preencha com ponto cheio. Olhe a simulação com o filtro de pontos curtos desligado (veja como o bico fica preto de tanto ponto). Depois ligue o filtro em 0,4 mm e veja como os pontos se organizam em degraus limpinhos!",
    "quickSummary": "A ferramenta do programa que limpa pontinhos minúsculos acumulados nos cantos para a agulha não quebrar a linha.",
    "beginnerExplanation": "Nas pontinhas de letras e estrelas, os pontos chegam tão perto uns dos outros que a agulha fura várias vezes no mesmo milímetro, formando um nó duro que arrebenta a linha e rasga o tecido. O filtro de pontos curtos afasta esses pontinhos automaticamente, deixando a ponta linda e sem quebras!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-090-organizacao-ergonomica-da-estacao-de-montagem-de-bastidores",
    "code": "O-090",
    "term": "Organização Ergonômica da Estação de Montagem de Bastidores (Ergonomic Framing Station)",
    "letter": "O",
    "level": "Intermediário 🟡",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego ergon (trabalho) e nomos (leis / harmonia postural e eficiência humana no ambiente de produção).",
    "summary": "Princípios de engenharia ergonômica, layout físico e gabaritos de bancada (HoopMaster / Estações de Enquadramento) para montagem rápida de peças no bastidor sem esforço repetitivo de punhos e coluna.",
    "definition": "Organização Ergonômica da Estação de Montagem de Bastidores (Ergonomic Embroidery Hooping Station, Biomechanical Posture & Fixture Engineering) é o planejamento do posto de trabalho e ferramental dedicado exclusivamente à colocação de tecidos e entretelas nos aros de bordado. O fechamento manual repetitivo de dezenas de bastidores convencionais causa lesões por esforço repetitivo (LER/DORT), síndrome do túnel do carpo e fadiga lombar nos operadores. A implementação de gabaritos mecânicos inclinados com encaixe magnético (como o sistema *HoopMaster*), bancadas com altura ajustável (90 a 105 cm para trabalho em pé) e iluminação difusa a 1.000 lux padroniza o posicionamento das peças em menos de 15 segundos e reduz em 80% o esforço biomecânico nas articulações.",
    "technicalDetails": "Altura recomendada da bancada de enquadramento: 90 cm a 105 cm (nível do cotovelo para trabalho em pé). Ângulo de inclinação do gabarito: 15° a 25° em relação ao plano horizontal. Nível de iluminamento sobre a peça: 800 a 1.000 lux (LED 5000K neutro sem sombras). Tempo médio de montagem: Redução de 45 segundos (manual solto) para 12 a 15 segundos (com estação de gabarito).",
    "construction": [
      "Bancada robusta e estável de madeira maciça ou estrutura de aço tubular",
      "Dispositivo gabarito de fixação (Fixture) para travamento magnético do aro inferior",
      "Braços extensores com réguas milimetradas para alinhamento instantâneo de golas e peitos",
      "Suporte suspenso integrado para bobinas de entretela de recorte e fita métrica",
      "Tapete antifadiga emborrachado de alta densidade para conforto ergonômico dos pés e coluna"
    ],
    "howItWorks": [
      "1. O operador posiciona-se em frente à estação ergonômica de montagem com postura ereta e relaxada.",
      "2. O aro inferior do bastidor encaixa-se magneticamente na base do gabarito inclinado a 20°.",
      "3. Puxa-se a folha de entretela do suporte suspenso diretamente sobre o aro fixo.",
      "4. Veste-se a camisa ou camiseta sobre o gabarito: as réguas integradas centralizam o logotipo no peito esquerdo na hora.",
      "5. O aro superior é pressionado com as duas mãos espalmadas em um único movimento suave descendente.",
      "6. A peça trava com alinhamento milimétrico e esquadro perfeito, sem esforço de torção de punho.",
      "7. O bastidor montado vai direto para a máquina: rapidez total e zero cansaço físico ao final de 100 peças."
    ],
    "mainTypes": [
      "Estação de Gabarito Modular Magnético (HoopMaster - Para polos, camisetas e camisas sociais)",
      "Estação de Enquadramento para Mangas e Peças Tubulares (Para punhos, calças e meias)",
      "Bancada Ergonômica com Altura Regulável Elétrica (Para alternância confortável entre trabalho sentado e em pé)"
    ],
    "characteristics": [
      "Redução drástica de dores nos punhos, mãos, ombros e coluna lombar do operador",
      "Padronização milimétrica da altura e posição dos logotipos em todas as camisas do lote",
      "Aumento de até 200% na velocidade de preparação de peças fora da máquina",
      "Eliminação de peças bordadas tortas ou com medidas desiguais entre tamanhos P, M e G"
    ],
    "limitations": [
      "Investimento inicial na aquisição de gabaritos profissionais de bancada",
      "Exige espaço físico dedicado e organizado dentro do layout do ateliê",
      "Requer treinamento rápido para familiarização com as réguas de numeração de tamanhos"
    ],
    "numberingSystem": [
      "Altura da Bancada: 95 cm a 105 cm",
      "Ângulo de Inclinação: 20°",
      "Tempo de Montagem: ~12 segundos"
    ],
    "advantages": [
      "✔ Cuida da sua saúde física para você trabalhar com prazer e sem dores no fim do dia",
      "✔ Garante que todos os uniformes de uma empresa fiquem com o bordado exatamente no mesmo lugar",
      "✔ Triplica a capacidade diária de produção de bordados do seu ateliê"
    ],
    "commonErrors": [
      "❌ Montar bastidor curvado em cima de uma mesa baixa ou no colo, destruindo a coluna e o pescoço",
      "❌ Apertar parafusos de bastidor com alicate ou torcendo os dedos até criar calos e tendinite",
      "❌ Não usar réguas de alinhamento, deixando o logotipo no peito em alturas diferentes em cada camisa"
    ],
    "voceSabia": "A ergonomia no trabalho foi estudada formalmente pela primeira vez durante a Segunda Guerra Mundial para redesenhar as cabines dos aviões, permitindo que os pilotos operassem os botões com velocidade máxima e mínimo cansaço físico!",
    "curiosidadeTecnica": "O esforço de torção manual para fechar 150 bastidores tradicionais por dia equivale a erguer mais de 350 kg com as pontas dos dedos e punhos; o uso de estações magnéticas com alavanca plana reduz esse esforço muscular em mais de 85%.",
    "dicaArtrelados": "Se você não tem uma estação profissional de bastidor, improvise a sua bancada ergonômica: use uma mesa na altura do seu umbigo (cerca de 95 cm) para não ficar corcunda, coloque um tapete macio de borracha no chão para descansar as pernas e use uma prancheta de madeira inclinada para apoiar o bastidor. Sua coluna e seus punhos vão agradecer todos os dias!",
    "comparisonTable": {
      "headers": [
        "Método de Montagem",
        "Esforço Físico nos Punhos",
        "Tempo por Peça",
        "Repetibilidade de Posição"
      ],
      "rows": [
        [
          "Estação Ergonômica com Gabarito",
          "Mínimo (pressão plana suave)",
          "12 a 15 segundos",
          "100% perfeita e padronizada"
        ],
        [
          "Montagem Manual em Mesa Plana",
          "Médio a Alto",
          "40 a 50 segundos",
          "Requer medir com régua cada peça"
        ],
        [
          "Montagem no Colo / Sem Apoio",
          "Altíssimo (risco de LER/DORT)",
          "> 1 minuto",
          "Irregular (alta chance de erros)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Garante abastecimento contínuo para máquinas a 850 - 1.000 PPM",
      "needleType": "Padrão",
      "stabilizer": "Rolos de entretela suspensos para corte ergonômico",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Produção de grandes lotes de uniformes escolares, corporativos e industriais",
      "Ateliês profissionais e confecções de bordado com alta demanda diária",
      "Padronização de bordados em polos masculinas e femininas (peito esquerdo/direito)",
      "Ambientes de trabalho focados em saúde ocupacional, bem-estar e produtividade lean"
    ],
    "troubleshootingTips": [
      "Mantenha as réguas do gabarito limpas e com as marcações de tamanho (P, M, G, GG) anotadas em uma tabela visual",
      "Coloque uma luminária articulada de LED focando diretamente na área do bastidor",
      "Faça pausas de 5 minutos a cada duas horas para alongamento suave dos punhos e antebraços"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Bastidor de Bordado",
      "Orientação da Trama e Urdume no Enquadramento do Bastidor",
      "Bastidores Magnéticos",
      "Entretela de Recorte (Cut-Away)"
    ],
    "tags": [
      "o-090",
      "estacao ergonomica",
      "hoopmaster",
      "gabarito de bastidor",
      "saude no atelie",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "HOOPMASTER Ergonomic Hooping & Industrial Workflow Standards. Deshler, 2021.",
      "PARRISH, Gail. Ergonomics, Biomechanical Stress and Workflow Optimization in Commercial Embroidery Facilities. Cincinnati, 2022."
    ],
    "practicalExercise": "Ajuste a sua mesa de montagem de bastidores colocando apoios para que a altura fique exatamente na altura do seu cotovelo enquanto você está em pé. Monte 5 peças nessa posição: repare como suas costas ficam retinhas e você não sente nenhuma dor no pescoço!",
    "quickSummary": "O jeito confortável e rápido de organizar a mesa de colocar bastidor para não ter dores no corpo e produzir muito mais.",
    "beginnerExplanation": "Colocar tecido no bastidor o dia todo pode cansar as mãos e as costas se a mesa for baixa ou desconfortável. Uma estação ergonômica é uma mesinha na altura certa com suportes que seguram o bastidor para você fechar a roupa com um toque leve, sem dor nos punhos e deixando todos os bordados na mesma altura!",
    "updatedAt": "2026-08-29"
  }
];

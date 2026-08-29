# -*- coding: utf-8 -*-

VERBETES_N_PART11 = [
  {
    "id": "n-075-nivelamento-de-densidade-variavel-e-efeito-degrade-no-ponto-satim",
    "code": "N-075",
    "term": "Nivelamento de Densidade Variável e Efeito Degradê no Ponto Satim (Variable Density Leveling & Satin Gradient)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (igualar planos / nivelar) e densitas (concentração de massa). No bordado moderno, refere-se à modulação gradual do espaçamento entre pontos.",
    "summary": "Técnica de programação de matrizes que varia progressivamente a distância entre os pontos satim de 0,38 mm até 1,50 mm, criando transições suaves de cor, profundidade e volume sem sobrecarregar o tecido.",
    "definition": "Nivelamento de Densidade Variável e Efeito Degradê no Ponto Satim (Variable Density & Shading Satin Gradient) é a técnica avançada de digitalização em que o espaçamento entre as passadas de ponto cheio (satim) é modificado de forma contínua e matemática ao longo de um mesmo bloco de bordado. Ao cruzar duas camadas de satim de tonalidades diferentes com gradientes opostos (uma abrindo de 0,40 mm para 1,20 mm e a outra fechando no sentido inverso), obtém-se uma fusão cromática perfeita e tridimensional sem criar acúmulo excessivo de linha que endureceria a peça ou quebraria agulhas.",
    "technicalDetails": "Faixa de densidade variável: 0,38 mm (área densa) a 1,60 mm (área translúcida). Curvas de transição: Linear, Exponencial ou Logarítmica. Ângulo de inclinação relativa entre camadas: 0° a 5° (alinhamento paralelo de fios) ou 15° (efeito de mistura ótica). Agulha recomendada: 65/9 ou 75/11 SES.",
    "construction": [
      "Camada base com densidade progressiva aberta (0,45 mm a 1,20 mm) em tom escuro",
      "Segunda camada sobreposta com densidade inversa decrescente em tom claro ou intermediário",
      "Underlay leve em zigue-zague aberto de 2,5 mm para não bloquear a transparência das passadas",
      "Compensação de repuxo calibrada individualmente para cada extremo de densidade",
      "Linhas de poliéster 40wt trilobal de alto brilho para amplificar o gradiente de luz"
    ],
    "howItWorks": [
      "1. No software de digitalização (Wilcom, Embird ou Tajima DG), desenha-se o contorno do objeto em ponto satim.",
      "2. Ativa-se a ferramenta de 'Densidade de Fração / Efeito de Gradiente (Accordion Stitch)'.",
      "3. Define-se o ponto de início com densidade padrão (ex: 0,40 mm) e o ponto final aberto (ex: 1,40 mm).",
      "4. Duplica-se o objeto, inverte-se a direção do gradiente e atribui-se uma cor de linha complementar.",
      "5. A máquina borda primeiro a cor de fundo com densidade que vai se espaçando suavemente.",
      "6. Em seguida, a agulha da segunda cor borda sobre os espaços abertos, entrelaçando as fibras.",
      "7. O olho humano percebe uma transição contínua de luz e sombra, idêntica a uma pintura aerografada."
    ],
    "mainTypes": [
      "Degradê Satim Linear (Para transição de cor em pétalas de flores e letras decorativas)",
      "Degradê Satim Radial / Circular (Para reflexos de luz em esferas, escudos e olhos)",
      "Efeito Eletrocardiograma / Acordeão (Para fusão de 3 ou mais tonalidades em brasões realistas)"
    ],
    "characteristics": [
      "Transição cromática ultrassuave sem linhas duras de separação de cor",
      "Redução de até 40% no número total de pontos em comparação com sobreposição de tatami",
      "Bordado maleável, leve e flexível que não engoma nem deforma tecidos finos",
      "Excelente contraste e reflexo de luz metálica com fios trilobais"
    ],
    "limitations": [
      "Exige alinhamento milimétrico do bastidor para que as camadas não fiquem defasadas",
      "Não deve ser usado em tecidos felpudos sem película hidrossolúvel de topo",
      "Softwares de entrada ou gratuitos muitas vezes não possuem cálculo paramétrico de gradiente"
    ],
    "numberingSystem": [
      "Densidade Máxima (Início): 0,38 mm a 0,42 mm",
      "Densidade Mínima (Fim): 1,20 mm a 1,60 mm",
      "Taxa de Graduação: Variação de 0,05 mm a cada 5 pontos"
    ],
    "advantages": [
      "✔ Cria efeitos visuais de realismo fotográfico e sombreamento tridimensional em logotipos e arte têxtil",
      "✔ Evita o empastamento de linha e placas duras no peito de camisetas e camisas sociais",
      "✔ Aumenta a velocidade de produção pela redução inteligente da contagem de pontos da matriz"
    ],
    "commonErrors": [
      "❌ Sobrepor duas camadas com densidade de 0,40 mm total, criando um 'tijolo' de linha impenetrável",
      "❌ Usar underlay tatami denso embaixo do degradê, que aparece feio nos vãos abertos do satim",
      "❌ Borda em velocidade muito alta (> 900 PPM) em tecidos elásticos sem fixação adequada"
    ],
    "voceSabia": "A técnica de degradê no bordado computadorizado foi inspirada diretamente na técnica artesanal secular do 'Pintado a Agulha' (Needle Painting / Seda da China), onde bordadeiras usavam fios de seda de 10 espessuras diferentes para criar sombras perfeitas em kimonos imperiais!",
    "curiosidadeTecnica": "O olho humano a 50 cm de distância não consegue distinguir fios individuais de 0,1 mm de espessura quando espaçados a menos de 0,35 mm: ele funde as duas cores no córtex visual primário, criando uma nova cor intermediária por síntese aditiva refletiva.",
    "dicaArtrelados": "Ao criar efeito degradê entre duas cores fortes (como vermelho e amarelo para fazer fogo), use uma terceira cor intermediária (laranja) em uma faixa estreita de 2 mm com densidade 0,80 mm no meio das duas: a transição fica tão mágica que ninguém acredita que foi bordado em máquina comum!",
    "comparisonTable": {
      "headers": ["Parâmetro", "Satim com Densidade Fixa", "Satim com Nivelamento de Densidade Variável"],
      "rows": [
        ["Aspecto Visual", "Cor sólida e chapada sem profundidade", "Degradê suave, realista e tridimensional"],
        ["Flexibilidade do Tecido", "Média a Rígida na área bordada", "Ultra-leve e flexível (toque suave)"],
        ["Contagem de Pontos", "Alta (100% de preenchimento duplo)", "Reduzida em até 35% a 40%"],
        ["Risco de Quebra de Agulha", "Médio a Alto em sobreposições", "Mínimo (agulha penetra em espaços livres)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "65/9 ou 75/11 SES (Ponta Bola Leve) / H-E (Embroidery)",
      "stabilizer": "Entretela de Recorte PolyMesh 50 g/m² + Película Hidrossolúvel de Topo (se tecido texturizado)",
      "threadTension": "Superior: 105 a 115 gf / Bobina: 22 gf (Tensiômetro Towa)",
      "density": "Início em 0,40 mm variando linearmente até 1,40 mm"
    },
    "applications": [
      "Chamas, pôr do sol, plumagens de pássaros e pétalas de flores realistas",
      "Letras decorativas de estilo esportivo com transição de cor e brilho metálico",
      "Brasões comemorativos com reflexos dourados e prateados em gradiente",
      "Bordados em peças de alta costura e vestidos de noiva"
    ],
    "troubleshootingTips": [
      "Se o degradê parecer listrado, aumente a suavidade da rampa no software para ter mais pontos intermediários",
      "Se a cor de cima cobrir totalmente a de baixo, aumente o espaçamento final da camada de baixo para 1,50 mm",
      "Utilize linhas trilobais brilhantes em vez de fios foscos para maximizar o reflexo do degradê"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Satim / Ponto Cheio",
      "Efeito Degradê e Sombreamento",
      "Compensação de Repuxo",
      "Densidade de Ponto"
    ],
    "tags": [
      "n-075",
      "densidade variavel",
      "degrade satim",
      "ponto cheio",
      "shading",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Advanced Stitch Effects: Shading, Accordion & Variable Density. Sydney, 2021.",
      "PARRISH, Gail. Precision Digitizing: Mastering Color Blending and Gradients in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra seu programa de bordado e crie um retângulo de 60 mm x 20 mm. Aplique ponto cheio com densidade começando em 0,40 mm na esquerda e terminando em 1,40 mm na direita com linha azul marinho. Duplique o objeto com linha azul celeste invertendo a densidade. Borde em uma malha com entretela PolyMesh e observe o degradê perfeito!",
    "quickSummary": "Variação progressiva do espaço entre os pontos para criar sombras e misturas de cores sem pesar no tecido.",
    "beginnerExplanation": "É como quando você pinta com lápis de cor apertando forte no começo e soltando a mão bem de levinho até a cor sumir: a máquina borda bem juntinho num lado e vai espaçando os pontinhos para misturar com outra cor que vem do outro lado, criando aquele efeito de degradê lindo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-076-nylon-ripstop-e-tecidos-antirasgo-para-jaquetas-e-paraquedas",
    "code": "N-076",
    "term": "Nylon Ripstop e Tecidos Antirasgo para Jaquetas e Paraquedas (Ripstop Nylon & Tear-Resistant Outdoor Fabrics)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês rip (rasgar) e stop (parar / conter). Tecido técnico desenvolvido durante a Segunda Guerra Mundial para substituir a seda dos paraquedas militares.",
    "summary": "Técnicas especializadas para bordar em tecidos sintéticos ultraleves de poliamida com grade quadriculada de reforço antirasgo, comuns em jaquetas corta-vento, mochilas técnicas e velas náuticas.",
    "definition": "Nylon Ripstop e Tecidos Antirasgo (Ripstop Polyamide Technical Fabrics Embroidery) é o protocolo de preparação, estabilização e costura para tecidos leves (40 a 120 g/m²) de poliamida ou poliéster que possuem filamentos mais grossos (denier elevado) tecidos em intervalos regulares de 5 a 8 mm em formato de grade. Como o tecido é impermeável ou repelente à água e extremamente fino, o bordado exige agulhas ultrafinas (65/9 SES ou Microtex), densidades abertas (0,46 a 0,52 mm), entretelas de recorte leves (PolyMesh ou termossolúvel) e vedação posterior de furos com fita termocolante seladora para manter a estanqueidade.",
    "technicalDetails": "Gramatura do tecido: 45 a 110 g/m². Estrutura de trama: Tafetá com urdume de reforço a cada 5 mm. Agulha recomendada: 65/9 ou 70/10 Microtex ou SES. Compensação de repuxo: 0,35 mm a 0,45 mm. Selagem pós-bordado: Fita de poliuretano (Seam Sealing Tape) a 140°C.",
    "construction": [
      "Tecido Nylon Ripstop resinado ou com acabamento DWR (Durable Water Repellent)",
      "Entretela de recorte leve PolyMesh 40 a 50 g/m² fixada com adesivo spray reposicionável",
      "Bastidor magnético ou bastidor plano com fixação suave sem estiramento de grade",
      "Agulha ponta fina afiada (Microtex) ou ponta bola leve (SES) tamanho 65/9 ou 70/10",
      "Linha 40wt ou 60wt de poliéster 100% resistente a raios UV e intempéries"
    ],
    "howItWorks": [
      "1. Corta-se a entretela PolyMesh no tamanho do bastidor e aplica-se névoa leve de adesivo spray 505.",
      "2. O Nylon Ripstop é assentado sobre a entretela em repouso absoluto, sem tracionar a grade quadrada.",
      "3. Encaixa-se o conjunto no bastidor de pressão controlada (evitando esmagar o resinado do tecido).",
      "4. A máquina é regulada para 700 PPM com agulha fina 65/9 para produzir microfuros discretos.",
      "5. A matriz executa underlays em linha corrida simples com pontos de comprimento médio (2,5 mm).",
      "6. Após o bordado, recortam-se os excessos de entretela no avesso deixando margem de 3 mm.",
      "7. Aplica-se no avesso uma fita termosselável de PU com ferro a vapor para vedar os microfuros da agulha."
    ],
    "mainTypes": [
      "Ripstop Ultraleve de Corta-Vento (35 a 55 g/m² - Para jaquetas de corrida e ciclismo)",
      "Ripstop Técnico Militar / Tático (100 a 220 g/m² - Para fardamentos de combate e capas táticas)",
      "Ripstop Náutico e de Paraquedas (Siliconado e siliconizado para kitesurf, velas e parapentes)"
    ],
    "characteristics": [
      "Alta resistência mecânica à tração combinada com peso molecular ultraleve",
      "Grade visual geométrica quadriculada que impede a propagação de microfissuras",
      "Sensibilidade ao calor excessivo e furos densos de agulha (risco de efeito picotado)",
      "Toque macio e secagem quase instantânea após lavagem ou chuva"
    ],
    "limitations": [
      "Nunca utilizar agulhas grossas (80/12 ou 90/14) que perfuram buracos grandes visíveis",
      "Evitar densidades pesadas de satim (< 0,36 mm) que cortam o tecido como lâmina de estilete",
      "Não passar a ferro quente direto sobre o nylon sem pano de proteção (derrete a 180°C)"
    ],
    "numberingSystem": [
      "Gramatura Típica: 50 a 90 g/m²",
      "Fio da Agulha: 65/9 ou 70/10",
      "Densidade do Satim: 0,46 mm a 0,50 mm"
    ],
    "advantages": [
      "✔ Permite personalizar jaquetas esportivas de alta tecnologia de marcas como The North Face, Columbia e Nike",
      "✔ Garante que o logotipo não rasgue e não repuxe a estrutura quadriculada do tecido",
      "✔ Mantém o produto resistente à água com técnicas de vedação de costura de padrão industrial"
    ],
    "commonErrors": [
      "❌ Puxar o nylon no bastidor como se fosse sarja, deformando a grade de quadrados para sempre",
      "❌ Usar entretela rasgável grossa, que quebra o tecido no contorno na hora de destacar",
      "❌ Borda matrizes com milhares de pontos concentrados em área pequena, criando um buraco vazado"
    ],
    "voceSabia": "O padrão quadriculado do Ripstop foi criado porque os paraquedas de seda da Segunda Guerra Mundial, quando sofriam um furo por bala inimiga, rasgavam de ponta a ponta instantaneamente no ar. Com os fios de reforço em grade do Ripstop, o rasgo para no primeiro quadrado de 5 milímetros!",
    "curiosidadeTecnica": "O tecido Ripstop siliconado possui um coeficiente de atrito cinético de apenas μ = 0,15, o que faz a linha de bordado escorregar com facilidade; por isso a tensão da linha superior deve ser diminuída em cerca de 10% para evitar laçadas frouxas.",
    "dicaArtrelados": "Ao bordar jaquetas corta-vento de Ripstop impermeáveis, passe um selador de costura líquido (ou termocole uma fitinha de impermeabilização no avesso do bordado): assim a água da chuva nunca vai infiltrar pelos buraquinhos dos pontos de bordado e seu cliente vai amar a qualidade profissional!",
    "comparisonTable": {
      "headers": ["Característica", "Nylon Tafetá Comum", "Nylon Ripstop Antirasgo"],
      "rows": [
        ["Resistência a Rasgos", "Baixa (o rasgo continua se puxado)", "Altíssima (a grade de fios barra o rasgo)"],
        ["Comportamento ao Bordar", "Fácil de picotar se agulha for grossa", "Muito estável, mas requer agulha fina 65/9"],
        ["Tipo de Entretela Ideal", "Recorte PolyMesh 50 g/m²", "Recorte PolyMesh + Spray 505"],
        ["Densidade Recomendada", "0,42 mm a 0,45 mm", "0,46 mm a 0,50 mm (mais aberta)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "65/9 ou 70/10 Microtex ou SES (Ponta Bola Fina)",
      "stabilizer": "Entretela de Recorte PolyMesh 50 g/m² fixada com Spray Reposicionável",
      "threadTension": "Superior: 100 a 110 gf / Bobina: 20 a 22 gf",
      "density": "0.48 mm com compensação de repuxo de 0.40 mm"
    },
    "applications": [
      "Jaquetas esportivas corta-vento, anoraques de montanhismo e capas de chuva",
      "Mochilas leves de trekking, sacos de dormir e barracas de camping",
      "Uniformes de equipes de vela, parapente, paramotor e automobilismo",
      "Bolsas dobráveis, estojos e equipamentos táticos militares leves"
    ],
    "troubleshootingTips": [
      "Se o tecido estiver franzindo ao redor do bordado, aumente a compensação de repuxo e diminua a tensão da linha",
      "Use bastidores magnéticos para não deixar marcas brilhantes de atrito na resina do tecido",
      "Aplique ar quente morno com secador de cabelo se ficarem pequenas marcas de vinco no tecido"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Nylon",
      "Entretela de Recorte PolyMesh",
      "Agulha Microtex",
      "Compensação de Repuxo"
    ],
    "tags": [
      "n-076",
      "nylon ripstop",
      "antirasgo",
      "jaqueta corta vento",
      "polyamide",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "OUTDOOR Industry Association. Technical Textiles & Performance Apparel Embroidery Standards. Boulder, 2021.",
      "PARRISH, Gail. High-Performance Synthetic Fabrics and Microtex Needle Dynamics. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tecido de jaqueta corta-vento (Nylon Ripstop). Coloque no bastidor com entretela PolyMesh e borde um pequeno brasão com agulha 65/9 e densidade 0,48 mm. Observe como o bordado fica liso, sem furinhos aparentes e sem repuxar a grade do tecido!",
    "quickSummary": "Técnicas e cuidados para bordar em tecidos fininhos e super resistentes de jaquetas de chuva e esportes.",
    "beginnerExplanation": "O Nylon Ripstop é aquele tecido bem leve com quadradinhos desenhados na trama que é usado em jaquetas corta-vento e capas de chuva. Por ser fininho, a gente usa agulha bem fininha e entretela macia para não furar nem rasgar o tecido na hora de bordar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-077-numero-de-torcoes-por-metro-e-tenacidade-dos-fios-de-bordado",
    "code": "N-077",
    "term": "Número de Torções por Metro (TPM) e Tenacidade dos Fios de Bordado (Twists Per Meter & Thread Tensile Strength)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim torquere (girar / torcer) e tenacitas (capacidade de resistir à tração sem romper).",
    "summary": "Índice técnico que define quantas voltas helicoidais os filamentos de uma linha recebem por metro linear e a sua resistência à ruptura em rotações de até 1.200 PPM.",
    "definition": "Número de Torções por Metro (TPM / Twists Per Meter) e Tenacidade do Fio (Thread Tenacity & Twist Balance) é o parâmetro físico-químico fundamental que rege a estabilidade, o brilho, a elasticidade e a resistência mecânica das linhas de bordar industriais. A maioria das linhas de bordado de 2 cabos (2-ply) recebe torção em sentido Z (torção à esquerda) na faixa de 600 a 850 TPM. Uma torção balanceada impede que o fio se desfaça ao passar velozmente pelo olho da agulha, garantindo tenacidade de 35 a 45 cN/tex para suportar as desacelerações bruscas da laçada na lançadeira rotativa.",
    "technicalDetails": "Torção padrão para linha 40wt: 700 a 800 TPM (Sentido Z / Final). Tenacidade média de poliéster trilobal: 42 cN/tex (centinewtons por tex). Alongamento na ruptura: 18% a 24%. Coeficiente de atrito cinético: μ = 0,18 a 0,22 (lubrificação com silicone 3% a 5%).",
    "construction": [
      "Filamentos contínuos de poliéster trilobal de alta tenacidade (HT - High Tenacity)",
      "Primeira torção individual de cada cabo em sentido S",
      "Segunda torção de junção dos cabos em sentido Z termofixada a vapor",
      "Banho de acabamento com emulsão de micro-silicone e ceras termoplásticas antiestáticas",
      "Carretel cônico de enrolamento cruzado balanceado dinamicamente"
    ],
    "howItWorks": [
      "1. A linha sai do carretel no suporte superior desenrolando suavemente sem criar laçadas espirais.",
      "2. Passa pelos discos de tensão, onde a torção uniforme Z mantém todos os filamentos compactos.",
      "3. Desce pela mola compensadora e entra na canaleta profunda da agulha em alta velocidade.",
      "4. A torção calibrada (750 TPM) impede que a linha abra e desfie enquanto sobe e desce 16 vezes por segundo.",
      "5. Ao atingir o ponto morto inferior, a linha forma uma laçada firme e arredondada no rebaixo da agulha.",
      "6. A ponta da lançadeira captura a laçada com 100% de precisão sem furar filamentos soltos.",
      "7. A máquina borda a 1.000 PPM continuamente durante horas sem nenhuma parada por quebra de linha."
    ],
    "mainTypes": [
      "Torção Z Padrão (Sentido horário de rotação - Ideal para todas as máquinas de bordar modernas)",
      "Torção S Especial (Para costura manual ou aplicações industriais específicas de dupla laçada)",
      "Fios de Alta Torção (Crêpe / Twist Alto - Para textura mate e máxima resistência à abrasão)"
    ],
    "characteristics": [
      "Equilíbrio torcional nulo (a linha solta no ar não se enrola sobre si mesma em caracol)",
      "Máxima retenção de brilho refletivo nas facetas trilobais dos microfilamentos",
      "Resistência superior a nós, fiapos e desfiamento durante a passagem pela lançadeira",
      "Elasticidade controlada que absorve impactos mecânicos do estica-fio sem quebrar"
    ],
    "limitations": [
      "Fios com torção excessiva (> 950 TPM) tendem a formar laçadas torcidas (*kinking*) antes do tensor",
      "Fios com baixa torção (< 500 TPM) desmancham no olho da agulha causando desfiamento frequente",
      "Linhas velhas expostas a sol e calor perdem o silicone lubrificante, aumentando o atrito em 80%"
    ],
    "numberingSystem": [
      "Torção Padrão: 750 TPM ± 50",
      "Tenacidade Industrial: > 40 cN/tex",
      "Sentido de Torção: Z (Left-hand twist)"
    ],
    "advantages": [
      "✔ Reduz em mais de 90% as paradas de máquina causadas por desfiamento e nós na agulha",
      "✔ Garante nós de arremate perfeitos e planos no avesso sem sobras de linha",
      "✔ Proporciona reflexo de luz uniforme em toda a superfície do bordado de satim"
    ],
    "commonErrors": [
      "❌ Usar linha comum de costura reta (com torção e lubrificação inadequadas) em máquina de bordar rápida",
      "❌ Guardar cones de linha em locais com sol direto, secando a emulsão de silicone dos filamentos",
      "❌ Puxar a linha ao contrário no suporte de carretel, desfazendo a torção helicoidal de fábrica"
    ],
    "voceSabia": "A direção da torção em Z foi padronizada mundialmente para bordado porque a ponta da lançadeira rotativa gira no mesmo sentido da torção da linha; se a linha fosse torcida em S, cada volta da lançadeira abriria os fios como uma vassoura!",
    "curiosidadeTecnica": "Uma linha de bordado 40wt passando a 1.000 PPM sofre uma aceleração equivalente a 200 vezes a gravidade da Terra no momento em que o estica-fio puxa o nó para fechar o ponto na chapa de agulha.",
    "dicaArtrelados": "Para testar se a torção da sua linha está perfeita: puxe 50 cm de linha do cone, segure as duas pontas juntas e deixe o meio pendurado no ar. Se o fio ficar retinho sem se contorcer feito uma mola de telefone, a linha está fresca, balanceada e pronta para voar na máquina!",
    "comparisonTable": {
      "headers": ["Propriedade", "Linha de Bordado de Qualidade (750 TPM)", "Linha de Costura Comum (400-500 TPM)"],
      "rows": [
        ["Sentido e Balanço", "Torção Z com termofixação anti-espiral", "Torção variável sem balanço térmico"],
        ["Lubrificação", "Silicone especial para 1.200 PPM", "Parafina simples para 500 PPM"],
        ["Desfiamento no Olho", "Zero (filamentos permanecem unidos)", "Frequente (abre e quebra no olho da agulha)"],
        ["Brilho da Superfície", "Altíssimo brilho trilobal refletivo", "Fosco ou semi-brilho irregular"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 950 PPM",
      "needleType": "75/11 DBxK5 ou 130/705 H-E (Olho alongado de bordado)",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 a 24 gf",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Bordados em alta velocidade em máquinas industriais monocabeça e multicabeças",
      "Produção de fardamentos escolares, uniformes de trabalho e bonés estruturados",
      "Bordados finos de monogramas e vestidos de festa com alto brilho",
      "Costura decorativa e acolchoamento computadorizado de alto desempenho"
    ],
    "troubleshootingTips": [
      "Se a linha estiver quebrando com ponta parecendo um espanador de pó, a agulha está com rebarba no olho ou a linha perdeu a torção",
      "Troque de agulha a cada 8 a 10 horas de uso contínuo para evitar que o olho gasto raspe a torção do fio",
      "Mantenha os cones guardados em caixas plásticas fechadas longe de poeira e luz solar direta"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Linha de Poliéster Trilobal",
      "Sentido de Torção do Fio (Z vs S)",
      "Lançadeira Rotativa",
      "Guia-Fio e Antena de Linha"
    ],
    "tags": [
      "n-077",
      "torcao por metro",
      "tpm",
      "tenacidade",
      "resistencia de linha",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MADEIRA Thread Technical Engineering Guide. Twist per Meter, Tenacity and Lubrication. Freiburg, 2021.",
      "PARRISH, Gail. Thread Physics: Tensile Strength, Twist Dynamics and Loop Formation in Computerized Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de 10 cm de linha de bordado de boa marca e tente desenrolar a ponta com a unha para contar quantos fiozinhos finos formam o cabo. Depois faça o mesmo com uma linha de costura comum. Veja como a linha de bordar é muito mais unida e brilhante graças à torção perfeita!",
    "quickSummary": "O número de voltas que a linha tem para ser forte, brilhante e não arrebentar na velocidade da máquina.",
    "beginnerExplanation": "A torção é como uma trança bem feita no cabelo: quanto mais certinha e calibrada for a quantidade de voltas que a linha dá, mais resistente e brilhante ela fica, passando suave pela agulha da máquina sem desfiar nem arrebentar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-078-nivelamento-de-altura-e-calibracao-dos-sensores-de-fim-de-curso-do-pantografo",
    "code": "N-078",
    "term": "Nivelamento de Altura e Calibração dos Sensores de Fim de Curso do Pantógrafo (Pantograph Limit Switch Alignment)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (nivelar) e do francês pantographe (mecanismo articulado de ampliação de desenho / mesa CNC).",
    "summary": "Procedimento técnico de alinhamento milimétrico e calibração dos sensores ópticos e mecânicos que delimitam a área máxima útil de movimento dos eixos X e Y do bastidor.",
    "definition": "Nivelamento de Altura e Calibração dos Sensores de Fim de Curso do Pantógrafo (Pantograph Limit Switch & Frame Travel Optical Calibration) é o protocolo de manutenção mecânica e eletrônica responsável por calibrar as chaves de limite ópticas (foto-sensores infravermelhos) ou microswitches magnéticos posicionados nas extremidades dos eixos X e Y da máquina de bordar. Esses sensores enviam o sinal de interrupção para a placa-mãe caso o bastidor se aproxime do limite físico do chassi, impedindo colisões violentas entre o pantógrafo e as cabeças de costura ou quebra de agulhas e motores de passo.",
    "technicalDetails": "Distância de segurança do limite mecânico: 5,0 mm a 8,0 mm. Repetibilidade de detecção: ± 0,02 mm. Tipo de sensor: Barreira óptica infravermelha com fenda (Optical Interrupter / Photomicrosensor) ou sensor magnético Hall. Tensão de sinal: 5V DC ou 24V DC.",
    "construction": [
      "Sensores ópticos em formato de U montados em suportes de alumínio usinado",
      "Lâminas de obstrução metálicas (*flags*) fixadas nas guias móveis dos eixos X e Y",
      "Trilhos lineares de aço temperado com retificação micrométrica",
      "Cabos flexíveis blindados com proteção anti-ruído eletromagnético em esteira porta-cabos",
      "Software de diagnóstico de I/O na placa de controle da máquina de bordar"
    ],
    "howItWorks": [
      "1. Acessa-se a tela de diagnóstico técnico de entradas e saídas (I/O Test) no painel da máquina.",
      "2. Movimenta-se o pantógrafo manualmente nos eixos X e Y em direção às extremidades do curso útil.",
      "3. Verifica-se no painel se o indicador luminoso do sensor de limite acende antes de o suporte encostar no batente.",
      "4. Mede-se com paquímetro digital a folga física restante entre o pantógrafo e o chassi (deve ser de 5 a 8 mm).",
      "5. Se houver desvio, solta-se o parafuso do suporte do sensor e ajusta-se a lâmina de obstrução na posição correta.",
      "6. Limpa-se a lente do foto-sensor com cotonete seco para remover pó de linha acumulado.",
      "7. Executa-se o comando de 'Retorno à Origem (Home Origin)' para confirmar a centralização perfeita do bastidor."
    ],
    "mainTypes": [
      "Sensores de Limite Ópticos por Barreira de Luz (Os mais comuns e precisos em máquinas modernas)",
      "Sensores Magnéticos de Efeito Hall (Imunes a poeira têxtil e fiapos de linha)",
      "Micro-Chaves Eletromecânicas com Alavanca e Rolete (Usadas em máquinas clássicas e pesadas)"
    ],
    "characteristics": [
      "Proteção total contra colisões destrutivas entre o bastidor e a estrutura da máquina",
      "Precisão absoluta no retorno ao ponto de origem (Home / Ponto Zero da Matriz)",
      "Detecção instantânea de ultrapassagem de área em tempo real (< 5 milissegundos)",
      "Garantia de que o bordado fique exatamente centralizado no bastidor selecionado"
    ],
    "limitations": [
      "Poeira e fiapos de linha acumulados dentro do sensor óptico podem gerar falsos alarmes de limite",
      "Não protege contra a colocação de bastidores de tamanho errado no painel da máquina",
      "Exige ferramentas de precisão e desligamento da força antes de manusear cabos de sinal"
    ],
    "numberingSystem": [
      "Folga de Segurança: 6,0 mm",
      "Tolerância de Centralização: ± 0,05 mm",
      "Tempo de Resposta: < 5 ms"
    ],
    "advantages": [
      "✔ Evita quebras catastróficas de bastidores, agulhas e correias por batida no final do curso",
      "✔ Garante que o desenho bordado fique perfeitamente alinhado e sem desvios de posição",
      "✔ Elimina mensagens de erro falso de 'Limite Excedido' que travam a produção no meio do dia"
    ],
    "commonErrors": [
      "❌ Deixar acumular bolinhas de fiapo dentro da ranhura do sensor óptico, fazendo a máquina apitar direto",
      "❌ Entortar a lâmina de metal do sensor durante a troca de bastidores pesados",
      "❌ Desativar a função de limite de área no menu de serviço técnico para tentar bordar fora do campo"
    ],
    "voceSabia": "O termo 'Pantógrafo' vem dos instrumentos de desenho manuais criados pelo astrônomo alemão Christoph Scheiner em 1603 para copiar mapas e cartas celestes em escalas ampliadas; na máquina de bordar, o pantógrafo é o 'braço robótico' que movimenta o tecido sob a agulha!",
    "curiosidadeTecnica": "Quando o pantógrafo atinge a velocidade de 1.000 PPM, ele freia e inverte o sentido de movimento em menos de 15 milissegundos; se um sensor de fim de curso falhar nessa velocidade, o impacto mecânico pode empenar um eixo linear de aço em fração de segundo.",
    "dicaArtrelados": "Uma vez por mês, passe um pincel macio ou um jato suave de ar comprimido nas quatro pontas dos trilhos da sua máquina de bordar (onde ficam as luzinhas vermelhas dos sensores): limpar a poeira de linha dessas ranhuras evita 99% dos erros chatos de limite de bastidor que interrompem seu trabalho!",
    "comparisonTable": {
      "headers": ["Estado do Sensor", "Comportamento da Máquina", "Segurança Operacional", "Precisão de Ponto Zero"],
      "rows": [
        ["Calibrado e Limpo", "Trabalha suave e para no limite perfeito", "Máxima (zero risco de impacto)", "Perfeita (± 0,02 mm)"],
        ["Sujo com Fiapos", "Dá alarme de erro 'Limite' sem motivo", "Máquina para à toa", "Normal"],
        ["Desalinhado / Frouxo", "Pode bater no chassi da máquina", "Perigoso (risco de quebra)", "Perde a centralização"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-calibração: Operação estável até velocidade máxima nominal",
      "needleType": "Compatível com a produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Padrão de trabalho",
      "density": "N/A"
    },
    "applications": [
      "Revisão técnica semestral de máquinas monocabeça e industriais multicabeças",
      "Calibração de área de bordado após transporte ou mudança de layout do ateliê",
      "Correção de desvios de centralização em bastidores gigantes de jaquetas e bonés",
      "Diagnóstico de erros recorrentes de 'Frame Limit Error' no painel de comando"
    ],
    "troubleshootingTips": [
      "Se a máquina acusar erro de limite logo ao ligar, limpe a fenda dos sensores ópticos X e Y com ar seco",
      "Verifique se o cabo flat ou fiação flexível não está partido dentro da esteira de proteção",
      "Teste o acionamento manual do sensor pela tela de diagnóstico do painel da máquina"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Pantógrafo",
      "Servomotores do Pantógrafo",
      "Alinhamento e Nivelamento do Bastidor",
      "Manutenção Preventiva"
    ],
    "tags": [
      "n-078",
      "fim de curso",
      "sensor optico",
      "pantografo",
      "calibracao",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BARUDAN Technical Service Manual. Optical Sensors, Limit Switches & Home Calibration. Ichinomiya, 2021.",
      "PARRISH, Gail. CNC Motion Limits and Optical Sensor Calibration in Embroidery Machinery. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina ligada no menu inicial e sem bastidor, aperte as setas de movimento do painel para levar o suporte até o canto extremo direito devagarzinho. Veja no visor como a máquina para sozinha com segurança e acende o aviso antes de encostar na parede de metal. É assim que ela se protege!",
    "quickSummary": "Regulagem dos sensores que avisam até onde o bastidor pode ir sem bater nas laterais da máquina.",
    "beginnerExplanation": "Os sensores de fim de curso são como os sensores de ré de um carro: eles avisam o computador da máquina que o bastidor chegou pertinho da borda máxima e mandam parar imediatamente, evitando que o bastidor bata com força na lateral da máquina!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-079-nodulo-de-arremate-oculto-em-ponto-tridimensional",
    "code": "N-079",
    "term": "Nódulo de Arremate Oculto em Ponto Tridimensional (3D Foam Hidden Lock Stitch & Anchor Security)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim nodulus (pequeno nó / nódulo de retenção) e do grego treis / diastasis (três dimensões / relevo volumétrico).",
    "summary": "Algoritmo de programação de microarremates posicionados no interior ou na base estrutural de matrizes de alto-relevo em EVA 3D, garantindo fixação absoluta sem amassar a espuma nem deixar pontas visíveis.",
    "definition": "Nódulo de Arremate Oculto em Ponto Tridimensional (3D Puffy Foam Hidden Lock Stitch & Anchor Node) é a técnica de digitalização especializada que substitui os nós de arremate comuns (que geram pequenos caroços visíveis de linha na superfície do relevo) por sequências microscópicas de ancoragem em zigue-zague ultra-curto (0,4 mm a 0,6 mm) embutidas diretamente na camada base (underlay de corte) ou no centro axial interno da coluna de satim antes da cobertura do EVA. Essa programação impede que a ponta da linha escape após o corte automático, mantendo o relevo 3D perfeitamente liso, esticado e inviolável.",
    "technicalDetails": "Comprimento do micro-ponto de arremate: 0,4 mm a 0,6 mm. Número de pontos de nódulo: 3 a 4 micro-pontos em triângulo ou linha reta interna. Direção do arremate: Paralela ao eixo longitudinal da coluna de satim. Tensão superior: 130 a 145 gf (alta para selar o EVA).",
    "construction": [
      "Underlay preliminar de corte de borda em linha reta ao longo do perímetro da letra 3D",
      "Nódulo de microarremate embutido no centro do traço antes de iniciar o ponto cheio",
      "Espuma de EVA de alta densidade (40 a 60 kg/m³) de 2,0 mm a 3,0 mm de espessura",
      "Ponto de cobertura em satim de alta densidade (0,20 mm a 0,26 mm)",
      "Microarremate final oculto executado sob as últimas 3 passadas de satim antes do corte"
    ],
    "howItWorks": [
      "1. Na digitalização da letra em 3D, programa-se o ponto de início no interior do objeto.",
      "2. O software insere 3 micro-pontos de 0,5 mm no meio da área onde ficará a espuma, criando a âncora.",
      "3. A máquina borda o contorno de perfuração (cut underlay) que vai cortar o EVA nas bordas.",
      "4. Posiciona-se a placa de EVA 3D sobre o tecido com uma fita adesiva de papel nas pontas.",
      "5. A máquina cobre o EVA com pontos satim bem apertados de um lado para o outro.",
      "6. Ao finalizar a coluna, o algoritmo executa o arremate final dentro da coluna, debaixo dos próprios fios.",
      "7. A faca corta a linha e o relevo fica 100% limpo, sem nenhuma pontinha de linha sobrando por fora."
    ],
    "mainTypes": [
      "Microarremate em Linha Reta Axial (Para colunas retas de letras de boné tipo New Era)",
      "Microarremate em Estrela Triangular (Para vértices agudos e pontas de letras onde o EVA é mais fino)",
      "Nódulo em Ponto de Retenção Subterrâneo (Executado no tecido base antes da colocação do EVA)"
    ],
    "characteristics": [
      "Superfície do bordado 3D perfeitamente lisa, brilhante e sem nós salientes",
      "Fixação ultra-segura da linha que não desmancha mesmo com atrito e lavagem",
      "Corte limpo do EVA pelas próprias passadas de satim sem deixar rebarbas",
      "Acabamento de padrão de marcas consagradas de bonés de beisebol (MLB, NBA)"
    ],
    "limitations": [
      "Exige software de nível avançado que permita controlar manualmente a posição dos nós de arremate",
      "Não deve ser feito com pontos muito longos que não consigam travar o nó",
      "O EVA deve ser de cor idêntica ou o mais próximo possível da cor da linha de topo"
    ],
    "numberingSystem": [
      "Comprimento do Microponto: 0,5 mm",
      "Quantidade de Pontos do Nó: 3 a 4 pontos",
      "Densidade do Satim 3D: 0,22 mm a 0,25 mm"
    ],
    "advantages": [
      "✔ Acaba com as feias 'pontinhas de linha' espetadas para fora no topo de letras em 3D de bonés",
      "✔ Garante que o bordado em alto relevo resista ao uso diário severo sem soltar nenhum fio",
      "✔ Proporciona um visual profissional idêntico aos bonés originais importados"
    ],
    "commonErrors": [
      "❌ Deixar o nó de arremate comum ativado na superfície do EVA, amassando a espuma e criando um buraco",
      "❌ Não fazer arremate nenhum para 'economizar ponto', fazendo a letra desmanchar na primeira lavagem",
      "❌ Fazer nós com pontos maiores que 1,2 mm que escapam debaixo do satim e aparecem na lateral"
    ],
    "voceSabia": "A tecnologia de bordado 3D com espuma de EVA foi criada no Japão na década de 1990 para os bonés da Major League Baseball (MLB); os nós ocultos foram desenvolvidos para que a linha não desmanchasse quando o boné sofresse o impacto de uma bola a 150 km/h!",
    "curiosidadeTecnica": "A densidade em um bordado 3D chega a 0,22 mm (quase o dobro do bordado normal); os micro-pontos de arremate ocultos geram uma pressão de retenção por atrito superior a 2,5 kgf dentro da coluna, tornando impossível desfazer a amarração à mão.",
    "dicaArtrelados": "Ao programar matrizes para boné 3D, coloque sempre o ponto de entrada e o ponto de saída do arremate exatamente no centro da coluna de satim e nunca nas bordinhas: assim, os fios de cobertura passam por cima do nó e escondem tudo perfeitamente, deixando a letra impecável!",
    "comparisonTable": {
      "headers": ["Tipo de Arremate", "Visual no Bordado 3D", "Fixação e Segurança", "Risco de Buraco no EVA"],
      "rows": [
        ["Nódulo Oculto no Satim", "100% liso, limpo e uniforme", "Altíssima (travamento interno)", "Zero (o nó fica protegido)"],
        ["Arremate Comum de Superfície", "Caroço visível e ponta solta", "Média", "Alto (esmaga o EVA)"],
        ["Sem Arremate", "Liso no início", "Nula (desfia com o tempo)", "Zero"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "75/11 ou 80/12 SES (Ponta Bola) ou SAN 1 Reforçada",
      "stabilizer": "Entretela Rasgável Grossa de Boné 80 g/m² + EVA 3D 2,5 mm",
      "threadTension": "Superior: 135 a 145 gf / Bobina: 24 gf",
      "density": "0.22 mm a 0.25 mm (Satim de alta densidade)"
    },
    "applications": [
      "Bonés estruturados de aba reta e aba curva de times de beisebol e basquete",
      "Logotipos tridimensionais em jaquetas pesadas de couro e tactel",
      "Emblemas e patches em alto-relevo para vestuário tático e esportivo",
      "Monogramas acolchoados em bolsas, mochilas e estojos premium"
    ],
    "troubleshootingTips": [
      "Se ficarem pedacinhos de EVA aparecendo nas pontas, use um soprador térmico ou isqueiro rápido para encolher as rebarbas",
      "Regule a tensão superior mais apertada para que o satim corte o EVA de fora a fora perfeitamente",
      "Programe tampas de satim (capping) nas pontas abertas das letras antes de bordar o corpo principal"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Bordado 3D com Espuma EVA",
      "Nó de Arremate",
      "Ponto Satim / Ponto Cheio",
      "Boné Estruturado"
    ],
    "tags": [
      "n-079",
      "arremate oculto",
      "eva 3d",
      "bordado 3d",
      "bones",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "NEW ERA Cap Company Technical Embroidery Standards. 3D Puff Digitizing and Lock Stitch Specs. Buffalo, 2021.",
      "PARRISH, Gail. Advanced 3D Foam Digitizing: Hidden Anchor Nodes and Edge Perforation Mechanics. Cincinnati, 2022."
    ],
    "practicalExercise": "Digitalize uma letra 'A' em ponto satim com largura de 5 mm para bordar com EVA 3D. Programe os nós de arremate de início e fim no centro da coluna com 3 micropontos de 0,5 mm. Borde em um boné com EVA de 2,5 mm e veja como as pontas ficam lisas como mármore polido!",
    "quickSummary": "Nós de acabamento escondidos por dentro da espuma para o bordado 3D ficar perfeito e não soltar pontas.",
    "beginnerExplanation": "Em bordados altos em 3D de bonés, fazer o nó de arremate por cima deixa uma bolinha feia que amassa a espuma. O nó oculto é um segredinho de mestre onde o nó é dado escondido debaixo dos fios, deixando a letra alta, lisinha e super resistente!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-080-nivelamento-de-tensao-dinamica-em-linhas-metalicas-e-holograficas",
    "code": "N-080",
    "term": "Nivelamento de Tensão Dinâmica em Linhas Metálicas e Holográficas (Metallic Thread Dynamic Tension Leveling)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim metallum (metal precioso / folha metálica) e do grego dynamis (força em movimento).",
    "summary": "Protocolo completo de regulagem de tensão ultra-suave, lubrificação e passagem de linha em fios metalizados e holográficos para evitar quebras, torções e descolamento da fita de poliéster aluminizada.",
    "definition": "Nivelamento de Tensão Dinâmica em Linhas Metálicas e Holográficas (Metallic & Holographic Thread Tension Calibration) é a metodologia técnica de calibração de todos os pontos de atrito mecânico do percurso da linha superior na máquina de bordar ao operar com fios metalizados (núcleo de poliamida ou raiom envolvido por fita de poliéster aluminizada a vácuo com espessura de apenas 12 a 25 mícrons). Como a fita metálica não tem elasticidade e racha com facilidade se submetida a curvas bruscas ou tensões elevadas, o sistema exige redução de 30% a 40% na pressão dos discos de tensão (80 a 95 gf), agulhas de olho largo com acabamento de titânio (Topstitch ou Metallic 80/12 a 90/14) e velocidade moderada de costura.",
    "technicalDetails": "Composição do fio: 65% Fita de Poliéster Metalizada + 35% Núcleo de Poliamida/Raiom. Tensão de linha recomendada: 80 a 95 gf (Tensiômetro Towa). Velocidade ideal: 550 a 650 PPM. Agulha recomendada: 80/12 ou 90/14 Metallic / Topstitch (ranhura profunda e olho 2x maior).",
    "construction": [
      "Carretel de linha metálica posicionado verticalmente com rede de contenção elástica (Thread Net)",
      "Guia-fio superior com curva suave sem ângulos vivos de 90 graus",
      "Discos de tensão aliviados e limpos de resíduos de cola ou verniz metálico",
      "Mola compensadora de tensão com curso alongado e curso suave",
      "Agulha de bordado metálico com revestimento de nitreto de titânio (Gold / PD Finish)"
    ],
    "howItWorks": [
      "1. Envolve-se o carretel metálico com a redinha protetora de malha para controlar a saída do fio sem despenhadeiros.",
      "2. Passa-se a linha pelos guias superiores mantendo trajetórias retilíneas e suaves.",
      "3. Afrouxam-se os tensores superiores até atingir a leitura de 85 a 90 gramas-força no tensiômetro.",
      "4. Instala-se uma agulha especial para linha metálica tamanho 80/12 com olho grande polido.",
      "5. Reduz-se a velocidade da máquina no painel para 600 PPM.",
      "6. A matriz executa pontos com densidade ligeiramente mais aberta (0,46 mm a 0,50 mm) para não atritar fios.",
      "7. A máquina borda suavemente, produzindo reflexos dourados ou holográficos deslumbrantes sem quebrar nenhuma vez."
    ],
    "mainTypes": [
      "Linha Metálica Dourada e Prateada Clássica (Fio 40wt com brilho espelhado para brasões e alta costura)",
      "Linha Holográfica Prismática (Fita plana reflexiva que refrata as cores do arco-íris conforme a luz)",
      "Fio Metálico Suave Resistente a Lavagem (Núcleo de poliéster especial para fardamentos e uniformes)"
    ],
    "characteristics": [
      "Brilho luxuoso incomparável que simula ouro, prata, bronze e pedras preciosas",
      "Comportamento físico rígido com baixíssima memória elástica (alongamento < 5%)",
      "Sensibilidade extrema ao atrito e aquecimento térmico no olho da agulha",
      "Excelente solidez à oxidação quando fabricada com filmes de poliéster aluminizado premium"
    ],
    "limitations": [
      "Nunca bordar em velocidade máxima (850 a 1.000 PPM) com linhas metálicas convencionais",
      "Não usar agulhas normais de olho pequeno (75/11 padrão) que descascam a fita metálica",
      "Evitar lavagens com produtos clorados ou alvejantes à base de cloro forte"
    ],
    "numberingSystem": [
      "Tensão Dinâmica: 85 gf a 95 gf",
      "Calibre de Agulha: 80/12 ou 90/14 Metallic",
      "Velocidade Recomendada: 550 a 650 PPM"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor percebido e sofisticação a peças de festa, religiosas, fardas e noivas",
      "✔ Elimina o pesadelo de quebra constante de linha metálica a cada 20 segundos de máquina",
      "✔ Mantém o bordado macio e brilhante sem aspecto áspero de arame"
    ],
    "commonErrors": [
      "❌ Manter a mesma tensão apertada usada para poliéster comum, fazendo a linha metálica estourar direto",
      "❌ Deixar o carretel desenrolar solto sem redinha protetora, fazendo o fio cair na base e embolar",
      "❌ Borda matrizes com pontos muito curtos (< 1,5 mm) que moem a lâmina metálica no tecido"
    ],
    "voceSabia": "Nos séculos XVII e XVIII, as linhas metálicas dos mantos reais eram feitas de ouro e prata puros martelados em lâminas ultrafinas e enrolados à mão em fios de seda; hoje, o poliéster aluminizado a vácuo reflete a luz com a mesma nobreza, mas com custo acessível a todos os ateliês!",
    "curiosidadeTecnica": "O ponto de fusão do verniz protetor de uma linha metálica é de cerca de 130°C; em uma máquina a 900 PPM com agulha comum, o atrito atinge mais de 160°C no olho da agulha em apenas 8 segundos, derretendo a fita metálica instantaneamente.",
    "dicaArtrelados": "Ao bordar com linha dourada ou prateada, coloque uma redinha de proteção no cone de linha e abaixe a velocidade da máquina para 600 PPM. O segredo de ouro: use agulha tamanho 80/12 ou 90/14 própria para linha metálica (aquela que tem o buraquinho bem grandão): você vai bordar toalhas e mantos inteiros sem quebrar a linha nem uma única vez!",
    "comparisonTable": {
      "headers": ["Parâmetro", "Linha Poliéster Comum", "Linha Metálica / Holográfica"],
      "rows": [
        ["Tensão Superior", "110 a 125 gf", "80 a 95 gf (30% mais frouxa)"],
        ["Tamanho do Olho da Agulha", "Padrão", "Alongado 2x (Agulha Metallic / Topstitch)"],
        ["Velocidade de Máquina", "750 a 950 PPM", "550 a 650 PPM (Moderação)"],
        ["Elasticidade do Fio", "Alta (alongamento 20%)", "Quase nula (alongamento < 5%)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "80/12 ou 90/14 Metallic / Topstitch (Schmetz ou Groz-Beckert)",
      "stabilizer": "Entretela de Recorte Macia 60 g/m² ou Rasgável de boa qualidade",
      "threadTension": "Superior: 85 a 95 gf / Bobina: 20 a 22 gf",
      "density": "0.46 mm a 0.50 mm com pontos mínimos de 1.8 mm"
    },
    "applications": [
      "Vestidos de noiva, véus, mantos religiosos e vestes litúrgicas de luxo",
      "Brasões militares, dragonas, condecorações e insígnias de gala",
      "Fantasias de carnaval de alto padrão e figurinos teatrais e cinematográficos",
      "Toalhas comemorativas de bodas de ouro e prata e presentes finos de Natal"
    ],
    "troubleshootingTips": [
      "Se a linha estiver desfiando antes da agulha, use um pouco de silicone líquido para fios no cone",
      "Verifique se não há rebarbas de metal arranhadas nos discos de tensão ou na chapa de agulha",
      "Aumente o comprimento mínimo de ponto da matriz para 2,0 mm no software de digitalização"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Linha Metálica",
      "Nivelamento de Tensão de Linha",
      "Agulha para Fio Metálico",
      "Tensiômetro Towa"
    ],
    "tags": [
      "n-080",
      "linha metalica",
      "holografica",
      "tensao dinamica",
      "fio dourado",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MADEIRA Metallic Threads User Guide & Tension Leveling Dynamics. Freiburg, 2021.",
      "PARRISH, Gail. Metallic and Holographic Thread Engineering: Friction Reduction, Needle Selection and Machine Tuning. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um cone de linha metálica dourada. Ajuste a tensão superior da sua máquina para que a linha corra macia como seda puxando com os dedos. Troque para agulha 80/12 Metallic, coloque a velocidade em 600 PPM e borde um monograma em uma toalha. Veja a perfeição do brilho dourado!",
    "quickSummary": "Regulagem de tensão leve e velocidade suave para bordar com linhas douradas e prateadas sem quebrar.",
    "beginnerExplanation": "A linha dourada ou prateada é delicada porque tem uma capinha de metal fininha por fora que pode descascar se for puxada com muita força. Para bordar lindo com ela, a gente deixa a linha de cima mais soltinha, usa agulha de furo grande e diminui a velocidade da máquina!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-081-nao-tecidos-hidrossoluveis-em-filme-pva-vs-tela-emalhada",
    "code": "N-081",
    "term": "Não-Tecidos Hidrossolúveis em Filme PVA vs. Tela Emalhada (Cold-Water Soluble Film vs. Non-Woven PVA Fleece)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego hydor (água) e do latim solvere (dissolver / desmanchar em líquido) e do alemão Vlies (manta de fibras não-tecidas).",
    "summary": "Estudo comparativo e critérios técnicos de escolha entre filmes plásticos transparentes de álcool polivinílico (PVA) e entretelas não-tecidas hidrossolúveis de fibras têxteis prensadas.",
    "definition": "Não-Tecidos Hidrossolúveis em Filme PVA vs. Tela Emalhada (Cold-Water Soluble Stabilizers: Film vs. Non-Woven Fleece) é a classificação técnica dos materiais de sustentação solúveis em água fria utilizados no bordado computadorizado. O Filme Plástico de PVA (20 a 40 mícrons) é impermeável ao ar e atua como película de topo (*topping*) para evitar o afundamento dos pontos na felpa de toalhas e veludos. Já o Não-Tecido Hidrossolúvel (PVA Fleece / Soluvlies de 40 a 80 g/m²) é uma manta de microfibras tramadas multidirecionais com alta resistência à perfuração mecânica, ideal como suporte de base (*backing*) para rendas autoportantes (FSL - Free Standing Lace), richelieu e tecidos ultrafinos transparentes.",
    "technicalDetails": "Filme PVA (Topping): Espessura de 20 a 35 mícrons / Densidade 1,2 g/cm³ / Dissolução em água fria (20°C) em 15 segundos. Não-Tecido PVA (Backing): Gramatura de 40 a 80 g/m² / Resistência à tração multidirecional: > 25 N/cm² / Dissolução completa sem deixar resíduos viscosos.",
    "construction": [
      "Filme de polímero de álcool polivinílico (PVA) transparente com relevo antiestático gofrado",
      "Manta não-tecida hidrossolúvel de fibras cortadas de PVA hidroentrelaçadas (Spunlace)",
      "Agulha ponta bola leve (SES) para não rasgar o filme prematuramente",
      "Linha de bordado 40wt de poliéster ou algodão conforme o estilo da renda",
      "Recipiente com água fria limpa para enxágue final de dissolução"
    ],
    "howItWorks": [
      "1. Para toalhas felpudas: Coloca-se entretela rasgável no fundo e o Filme Plástico PVA por cima da felpa.",
      "2. Para rendas sem tecido (FSL): Colocam-se 2 camadas de Não-Tecido Hidrossolúvel (PVA Fleece) direto no bastidor.",
      "3. A máquina borda a matriz com densidade e nós de travamento integrados.",
      "4. O Não-Tecido suporta milhares de perfurações de agulha sem rasgar nem ceder no bastidor.",
      "5. Retira-se a peça do bastidor e destaca-se o excesso de material com a mão.",
      "6. Mergulha-se a peça em água fria corrente por 30 a 60 segundos.",
      "7. As fibras de PVA se dissolvem 100%, deixando apenas a renda pura ou a toalha macia sem nenhuma entretela visível."
    ],
    "mainTypes": [
      "Filme Hidrossolúvel Leve (20 mícrons - Plástico fininho para colocar em cima de toalhas e malhas)",
      "Não-Tecido Hidrossolúvel Spunlace (45 g/m² - Manta têxtil para tecidos finos, organza e sedas)",
      "Não-Tecido Hidrossolúvel Pesado (80 g/m² - Manta grossa para rendas pesadas, brincos e colares bordados)"
    ],
    "characteristics": [
      "Dissolução total e limpa em água fria ou morna sem necessidade de produtos químicos",
      "Não deixa fiapos, bordas duras ou resíduos perceptíveis ao toque no avesso da peça",
      "Alta flexibilidade que acompanha os movimentos de tecidos nobres e delicados",
      "Biodegradável e ambientalmente seguro para descarte em água comum"
    ],
    "limitations": [
      "Sensível à umidade do ar: deve ser guardado em sacos plásticos hermeticamente fechados com sílica gel",
      "Não molhar as mãos antes de manusear a entretela no ateliê para não começar a derreter",
      "O filme plástico fininho não serve como base para rendas soltas (rasga com muitos pontos)"
    ],
    "numberingSystem": [
      "Filme de Topo: 20 a 35 μm (Mícrons)",
      "Não-Tecido de Base: 40 a 80 g/m²",
      "Temperatura de Dissolução: 15°C a 30°C (Água fria)"
    ],
    "advantages": [
      "✔ Cria rendas artesanais deslumbrantes (Richelieu e Guipir) direto na máquina de bordar",
      "✔ Garante que nomes e monogramas fiquem 100% nítidos por cima das felpas das toalhas",
      "✔ Deixa o avesso de toalhas de lavabo e vestidos de bebê totalmente macio e limpo"
    ],
    "commonErrors": [
      "❌ Usar o plástico fininho de topo para tentar bordar renda solta no ar, fazendo a matriz rasgar e despencar",
      "❌ Deixar a entretela solúvel aberta em dias de chuva no ateliê, fazendo ela virar uma pasta grudenta",
      "❌ Não enxaguar direito a renda, deixando a peça dura e engomada demais após a secagem"
    ],
    "voceSabia": "O polímero PVA (Álcool Polivinílico) solúvel em água foi descoberto pelos químicos alemães Willy Herrmann e Wolfram Haehnel em 1924; hoje, além do bordado, é o mesmo material ecológico usado nas cápsulas de sabão líquido de lava-louças e lava-roupas que se dissolvem sozinhas na água!",
    "curiosidadeTecnica": "A resistência à tração de uma manta de Não-Tecido Hidrossolúvel de 60 g/m² é 4 vezes superior à de um filme de PVA comum de 35 mícrons, permitindo suportar mais de 1.800 furos de agulha por centímetro quadrado sem sofrer colapso estrutural.",
    "dicaArtrelados": "Para fazer rendas soltas perfeitas (FSL) que fiquem com a firmeza ideal para virar brincos, colares ou toalhinhas: enxágue a renda em água fria rapidamente por apenas 15 segundos sem esfregar tudo. Deixe secar plana sobre uma toalha: a pequena goma residual da entretela deixa a renda armada e firme como se tivesse saído de uma loja de alta costura!",
    "comparisonTable": {
      "headers": ["Característica", "Filme Plástico PVA (Topping)", "Não-Tecido PVA (Fleece / Backing)"],
      "rows": [
        ["Aparência Física", "Filme plástico transparente", "Manta branca semelhante a tecido macio"],
        ["Função Principal", "Ficar por cima da toalha (segurar pelos)", "Ficar no bastidor como base para rendas"],
        ["Resistência a Perfuração", "Baixa (picota facilmente)", "Altíssima (aguenta milhares de pontos)"],
        ["Local de Aplicação", "Topo do tecido (Topping)", "Base / Bastidor puro (Free Standing Lace)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 SES (Ponta Bola Leve) ou 75/11 H-E",
      "stabilizer": "Filme PVA 25μm (em cima) ou Não-Tecido PVA 60g/m² duplo (para rendas)",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf (Linha de bobina da mesma cor da linha de cima)",
      "density": "0.40 mm a 0.44 mm para rendas estruturadas"
    },
    "applications": [
      "Rendas guipir, toalhas de bandeja e caminhos de mesa estilo Richelieu",
      "Monogramas nítidos em toalhas de banho aveludadas, roupões e cobertores",
      "Bordados em vestidos de noiva transparentes de tule e organza de seda",
      "Acessórios de moda sustentável, brincos, pingentes e marcadores de página de renda"
    ],
    "troubleshootingTips": [
      "Se a renda desmanchar ao lavar, verifique se a matriz possui as redes de underlay cruzado obrigatórias",
      "Para toalhas felpudas, retire o excesso de plástico puxando a seco e passe um pano úmido nos cantinhos",
      "Guarde seus rolos de entretela solúvel dentro de sacos plásticos bem amarrados"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Non-Woven / Não-Tecido",
      "Película Hidrossolúvel",
      "Renda Solta no Bastidor (FSL - Free Standing Lace)",
      "Bordado Richelieu"
    ],
    "tags": [
      "n-081",
      "hidrossoluvel",
      "filme pva",
      "nao tecido solúvel",
      "renda fsl",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FREUDENBERG Performance Materials / Vilene. Soluvlies & Water-Soluble Fleece Technical Data. Weinheim, 2021.",
      "PARRISH, Gail. Water-Soluble Stabilizers: Chemical Physics, Hydro-dissolution and Free Standing Lace Engineering. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque duas camadas de Não-Tecido Hidrossolúvel no bastidor sem tecido nenhum. Borde um desenho de flor em renda FSL. Retire do bastidor e mergulhe em um pote de água fria: veja a mágica acontecer enquanto a entretela some todinha e fica só a florzinha de renda perfeita na sua mão!",
    "quickSummary": "O plástico transparente para segurar pelos de toalha versus a entretela de pano que derrete na água para fazer rendas.",
    "beginnerExplanation": "Existe o plástico transparente solúvel que a gente coloca em cima da toalha felpuda para o bordado não afundar nos pelinhos, e existe a entretela solúvel parecida com um paninho que a gente usa para fazer rendas puras sem tecido: na hora de lavar com água fria, as duas derretem e somem como mágica!",
    "updatedAt": "2026-08-29"
  }
]

print(f"Loaded {len(VERBETES_N_PART11)} verbetes for Part 11.")

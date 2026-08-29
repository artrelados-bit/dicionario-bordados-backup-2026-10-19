# -*- coding: utf-8 -*-
import json

verbetes_13 = [
  # E-075
  {
    "id": "e-075-equalizacao-densidade-curvas-fechadas-vertices-agudos",
    "code": "E-075",
    "letter": "E",
    "term": "Equalização de Densidade em Curvas Fechadas e Vértices Agudos (Smart Corner Density & Radial Spacing)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "origin": "Do inglês 'Corner Density Equalization' e algoritmos de computação gráfica vetorial desenvolvidos por Wilcom e Tajima DGML na década de 1990.",
    "summary": "Recurso algorítmico do software de programação que reduz automaticamente a contagem de pontos no raio interno de curvas acentuadas e cantos agudos.",
    "definition": "A Equalização de Densidade em Curvas Fechadas e Vértices Agudos é uma função de compensação vetorial avançada que recalcula e afina a distribuição de penetrações de agulha em trajetórias curvas fechadas e ângulos menores que 60 graus. Em uma curva ou canto fechado no ponto cheio (satin), o raio interno possui comprimento de arco muito menor que o raio externo; sem equalização, as perfurações se acumulam no mesmo ponto milimétrico, criando um nó rígido de linhas (bullet), perfuração excessiva do tecido, quebra frequente de agulha e perda de flexibilidade da peça.",
    "technicalDetails": "O algoritmo aplica uma redução percentual de 30% a 60% na densidade dos pontos internos através de três métodos técnicos: 1) Eliminação alternada de penetrações internas (Short Stitching / Pontos Curtos intercalados); 2) Abertura em leque com ângulo fracionado (Fractional Cornering); 3) Corte chanfrado com sobreposição de cantos ingleses (Mitred / Cap Corner). Mantém o espaçamento nominal de 0.40 mm no perímetro externo enquanto expande o espaçamento interno para no mínimo 0.35 mm, evitando que a densidade ultrapasse o limite crítico de 12 pontos por milímetro linear.",
    "construction": [
      "Sensor de ângulo vetorial do software",
      "Parâmetro de comprimento mínimo de ponto curto (Short Stitch Length de 35% a 70%)",
      "Limite de ativação angular (geralmente ativo em curvas inferiores a 75°)",
      "Distribuidor de penetrações alternadas na borda interna",
      "Compensador de puxão radial integrado"
    ],
    "howItWorks": [
      "1. O digitalizador desenha a coluna de ponto cheio contornando uma curva fechada ou vértice afiado.",
      "2. O software calcula a diferença entre o arco interno e externo do traçado.",
      "3. Ao identificar superposição de perfurações no raio interno, o algoritmo intercala pontos que cobrem toda a largura com pontos que param antes de atingir a margem interna.",
      "4. O centro da curva mantém o visual volumoso e contínuo no topo, enquanto a base no avesso fica limpa e plana sem amontoamento de nós."
    ],
    "mainTypes": [
      "Pontos Curtos Automáticos (Auto Short Stitches com escalonamento de 2 a 4 níveis)",
      "Canto em Esquadria / Mitre Corner (Divisão diagonal em 45 graus com compensação de sobreposição)",
      "Canto com Sobreposição / Cap Corner (Finalização reta com encaixe da próxima coluna por cima)",
      "Distribuição Radial Progressiva (Radial Fan Density)"
    ],
    "characteristics": [
      "Preserva a maciez e maleabilidade da peça bordada",
      "Elimina o efeito 'chumbo' ou relevo empedrado em cantos",
      "Garante contorno externo limpo e sem serrilhado",
      "Protege a ponta da agulha contra impacto em placas de linha já costuradas"
    ],
    "limitations": [
      "Não resolve se a largura da coluna estiver abaixo de 0.8 mm (onde o ponto cheio vira ponto corrido)",
      "Exige calibragem manual ao trabalhar com fios metálicos ou acetato"
    ],
    "numberingSystem": [
      "Ângulo de Ativação: 45° a 75°",
      "Níveis de Ponto Curto: 2 a 4 camadas",
      "Porcentagem de Recuo: 40% a 65% da largura total da coluna"
    ],
    "advantages": [
      "✔ Redução de mais de 80% das quebras de agulha em bordados corporativos com letras cursivas e brasões",
      "✔ Eliminação de furos e rasgos no tecido em cantos de estrelas e folhas",
      "✔ Redução do consumo de linha superior em até 12% em desenhos complexos"
    ],
    "commonErrors": [
      "❌ Desativar a função 'Pontos Curtos' em logotipos com letras pequenas e curvas fechadas",
      "❌ Utilizar densidade de 0.30 mm sem equalização em monogramas cursivos",
      "❌ Não chanfrar cantos vivos em bordados 3D com EVA de alta densidade"
    ],
    "voceSabia": "Em máquinas industriais de alta velocidade (1.000 PPM), um canto agudo sem equalização de densidade pode fazer com que a agulha penetre até 18 vezes no mesmo raio de 0,5 mm em menos de um segundo, elevando a temperatura da agulha para mais de 160°C e fundindo linhas de poliéster!",
    "curiosidadeTecnica": "O conceito de pontos curtos foi originalmente patenteado no início da década de 1980 por engenheiros suíços da Melco e Wilcom, inspirados na técnica artesanal de bordadeiras de bastidor manual que encurtavam os pontos no avesso para não repuxar sedas finas.",
    "dicaArtrelados": "Ao digitalizar letras cursivas no Wilcom ou Embird, ative sempre a opção 'Pontos Curtos' configurada para 3 níveis com espaçamento mínimo de 0.38 mm. Se o canto for mais fechado que 50°, divida o objeto em duas partes usando o Canto em Esquadria (Mitre) para um acabamento de alta alfaiataria!",
    "applications": [
      "Digitalização de monogramas e letras cursivas com laçadas finas",
      "Bordado de estrelas, brasões militares e pontas de folhas ornamentais",
      "Bordados em malha pique, microfibra e tecidos delicados sujeitos a perfuração",
      "Matrizes em ponto cheio para bonés estruturados e tecidos pesados"
    ],
    "troubleshootingTips": [
      "Se a agulha quebrar sistematicamente no mesmo bico de uma letra, abra a matriz no software e verifique se as linhas de direção estão convergindo para um único ponto central.",
      "Se o tecido furar ou rasgar no raio interno de uma curva, ative 3 níveis de pontos curtos e aumente o espaçamento de ponto de 0.36 para 0.42 mm.",
      "Se o avesso estiver com nó duro e grosso em curvas, verifique se a função de equalização de densidade está habilitada nas propriedades do objeto."
    ],
    "relatedTerms": [
      "Ponto Cheio (Satin Stitch)",
      "Pontos Curtos (Short Stitches)",
      "Compensação de Puxão (Pull Compensation)",
      "Densidade de Ponto",
      "Canto em Esquadria (Mitre Corner)"
    ],
    "tags": ["equalizacao", "curvas-fechadas", "pontos-curtos", "densidade", "programacao", "wilcom", "embird"],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Advanced Digitizing, Smart Corners and Short Stitch Algorithms. Sydney: Wilcom, 2023. TAJIMA GROUP. DG/ML Technical Reference Manual: Curve Equalization. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Advanced Digitizing, Smart Corners and Short Stitch Algorithms. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. DG/ML Technical Reference Manual: Curve Equalization. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Engenharia de Matrizes: Otimização de Densidade e Prevenção de Furos em Curvas Críticas. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Abra seu software de programação e crie uma letra 'S' em ponto cheio com 40 mm de altura e largura de coluna de 4 mm. Digitalize a primeira versão com densidade fixa de 0.38 mm sem pontos curtos. Na segunda versão, ative a opção 'Pontos Curtos Automáticos' em 3 níveis. Compare a contagem de pontos na aba de propriedades e borde as duas lado a lado em tecido de malha para sentir a diferença na maciez e na integridade do tecido.",
    "quickSummary": "Equalização de densidade é o ajuste automático de pontos em curvas e bicos que remove o excesso de perfurações no lado interno, prevenindo furos no tecido, quebra de agulhas e nódulos endurecidos.",
    "beginnerExplanation": "Quando você faz uma curva fechada no bordado, a parte de dentro da curva é muito mais curta que a parte de fora. Se você não avisar o programa de bordado, ele vai bater a agulha várias vezes quase no mesmo buraquinho por dentro. A equalização faz com que alguns pontos parem antes de chegar lá dentro, deixando o bordado macio, lisinho e sem furar a camiseta!",
    "recommendedSettings": {
      "speedPPM": "650 a 850 PPM",
      "needleType": "75/11 Ponta Bola Leve (SES) ou Universal",
      "stabilizer": "Entretela Rasgável 60g ou Malha Termocolante",
      "threadTension": "100 a 115gf (Tensionômetro de linha superior)",
      "density": "0.40 mm com 3 níveis de pontos curtos ativados"
    }
  },
  # E-076
  {
    "id": "e-076-entretela-malha-elastica-bidirecional-poliamida",
    "code": "E-076",
    "letter": "E",
    "term": "Entretela de Malha Elástica Bidirecional (Poliamida Fusível / 4-Way Stretch Interfacing)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Estabilizadores & Entretelas",
    "origin": "Do francês 'entoilage' combinado com a tecnologia têxtil italiana de não-tecidos de poliamida elastomérica criada na década de 1970 para alfaiataria fina.",
    "summary": "Estabilizador têxtil termocolante flexível que acompanha o estiramento natural de tecidos de elastano, lycra, suplex e microfibras esportivas sem deformar o bordado.",
    "definition": "A Entretela de Malha Elástica Bidirecional (Poliamida Fusível) é um não-tecido técnico confeccionado com microfilamentos tricotados de poliamida e poliuretano termofusível. Desenvolvida especialmente para a linha de moda fitness, moda praia e lingeries bordadas, ela possui memória elástica mecânica nos dois eixos (trama e urdume), permitindo que a peça se estique durante o vestir e retorne à sua forma original sem estourar as costuras de amarração do bordado nem provocar o temido 'efeito papelão' no peito ou nas costas.",
    "technicalDetails": "Gramatura típica entre 35g/m² e 50g/m², revestida em uma das faces com micro-pontos de resina adesiva poliamídica de baixa fusão (ativação entre 115°C e 130°C por 10 a 12 segundos com pressão de 2.5 bar). Proporciona módulo de elasticidade de até 40% em sentido transversal e 25% longitudinal. Resistente a mais de 50 lavagens domésticas a 40°C sem descolar da base têxtil.",
    "construction": [
      "Microfibras entrelaçadas de poliamida 6.6",
      "Revestimento de resina termoadesiva pontilhada (Point Seal)",
      "Estrutura elástica bidirecional (Cross-Stretch Matrix)",
      "Camada protetora anti-amarelamento por calor"
    ],
    "howItWorks": [
      "1. Corta-se a entretela de malha com 2 a 3 cm de sobra em relação ao tamanho do bastidor.",
      "2. Posiciona-se a face com micro-pontos de cola em contato com o avesso do tecido de elastano ou suplex.",
      "3. Aplica-se calor uniforme com ferro de passar a seco (temperatura média para lã/seda) ou prensa térmica por 10 segundos.",
      "4. A entretela funde-se às fibras do tecido, estabilizando temporariamente a trama durante a perfuração da agulha sem anular a elasticidade natural da peça no uso diário."
    ],
    "mainTypes": [
      "Malha Elástica Leve 35g (Ideal para lingeries finas, tule illusion e poliamida leve)",
      "Malha Elástica Média 45g (Indicada para suplex fitness, lycra praia e uniformes de ciclismo)",
      "Malha com Trama Transversal Reforçada (Para golas e punhos de ribana pesada)"
    ],
    "characteristics": [
      "Toque ultra suave que não pinica nem agride a pele sensível",
      "Memória mecânica de retorno elástico instantâneo",
      "Não enruga após a secagem da peça",
      "Invisível no lado direito e imperceptível no caimento da roupa"
    ],
    "limitations": [
      "Não deve ser aplicada com vapor excessivo sob risco de encolhimento prévio",
      "Não substitui a entretela rasgável em matrizes ultra densas com mais de 35.000 pontos em áreas pequenas"
    ],
    "numberingSystem": [
      "Gramaturas padrão: 35g/m², 45g/m², 55g/m²",
      "Temperatura de Fusão: 120°C a 130°C",
      "Tempo de Prensa: 8 a 12 segundos"
    ],
    "advantages": [
      "✔ Fim definitivo do franzimento em tecidos de academia (suplex e dry-fit)",
      "✔ Conforto térmico e tátil superior para roupas infantis e de bebê",
      "✔ Impede que a matriz se distorça quando a bordadeira prende o tecido elástico no bastidor"
    ],
    "commonErrors": [
      "❌ Esticar o tecido de lycra ao colocar no bastidor após colar a entretela",
      "❌ Usar ferro com temperatura muito alta derretendo os filamentos sintéticos",
      "❌ Utilizar entretela de papel rasgável comum em biquínis e roupas de natação"
    ],
    "voceSabia": "A entretela de malha elástica de poliamida foi criada originalmente para os trajes de mergulho e collants de patinação artística olímpica na década de 1980, onde os atletas precisavam de emblemas bordados luxuosos sem perder nenhum milímetro de flexibilidade corporal!",
    "curiosidadeTecnica": "Diferente das entretelas convencionais de celulose que quebram com a tração, a matriz de poliamida atua como uma teia de aranha microscópica que absorve a energia do impacto da agulha, distribuindo as forças de tração uniformemente por toda a área bordada.",
    "dicaArtrelados": "Para bordar tops de academia e bodies em suplex, cole a entretela de malha elástica no avesso com ferro morno, coloque apenas entretela hidrossolúvel por cima (se o tecido tiver textura) e bastidore SEM puxar o tecido pelas pontas. O resultado fica impecável e com toque aveludado!",
    "applications": [
      "Bordados em moda fitness (leggings, tops, regatas de poliamida)",
      "Moda praia (maiôs, biquínis e sungas de lycra)",
      "Camisas polo com elastano e malhas nobres de piquet com modal",
      "Body de bebê em suedine e algodão egípcio com elastano"
    ],
    "troubleshootingTips": [
      "Se o bordado abrir pequenos furos nas extremidades após a primeira lavagem da malha, utilize agulha ponta bola fina 70/10 SES e entretela de malha elástica 45g colada no avesso.",
      "Se a entretela descolar após a lavagem, verifique se a temperatura da prensa atingiu os 125°C necessários para ativar a resina de poliamida.",
      "Se a peça ficar torta ao tirar do bastidor, certifique-se de que não esticou o tecido elástico durante a fixação dos aros."
    ],
    "relatedTerms": [
      "Entretela Termocolante",
      "Tecido Elástico (Elastano/Suplex)",
      "Agulha Ponta Bola (SES/SUK)",
      "Compensação de Puxão",
      "Prensa Térmica"
    ],
    "tags": ["entretela", "malha-elastica", "poliamida", "fitness", "suplex", "estabilizadores", "lycra"],
    "updatedAt": "2026-08-29",
    "sourceReference": "FREUDENBERG & VILENE. Technical Non-Wovens & Stretch Interlinings for High Performance Activewear. Weinheim: Freudenberg Group, 2023. KOBE TEXTILE. Fusible Interfacings Manual. Osaka: Kobe, 2022.",
    "bibliographicReferences": [
      "FREUDENBERG & VILENE. Technical Non-Wovens & Stretch Interlinings for High Performance Activewear. Weinheim: Freudenberg Group, 2023.",
      "KOBE TEXTILE. Fusible Interfacings Manual. Osaka: Kobe, 2022.",
      "ARTRELADOS. Guia Definitivo de Estabilizadores e Entretelas para Tecidos Elásticos e Malhas Finas. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Pegue dois retalhos de 15x15 cm de suplex ou malha de algodão com elastano. No primeiro retalho, aplique entretela de papel rasgável comum de 50g. No segundo retalho, aplique a entretela de malha elástica termocolante de poliamida. Borde um círculo de 6 cm preenchido em ponto tatami em ambos. Após bordar, puxe as extremidades dos dois tecidos com as mãos e observe como o primeiro retalho enruga e repuxa, enquanto o segundo estica e volta perfeitamente sem deformar o círculo!",
    "quickSummary": "A entretela de malha elástica de poliamida é um estabilizador colável que estica junto com o tecido de academia e lycra, evitando que o bordado enrugue ou fique duro.",
    "beginnerExplanation": "Sabe quando você borda uma camiseta com bastante elastano ou uma roupa de academia e depois o bordado parece uma placa dura que repuxa todo o tecido? A entretela de malha elástica resolve isso porque ela é flexível como uma segunda pele: você cola no avesso e a roupa continua esticando confortavelmente no corpo!",
    "recommendedSettings": {
      "speedPPM": "600 a 750 PPM",
      "needleType": "70/10 ou 75/11 Ponta Bola (SES / Ball Point)",
      "stabilizer": "Entretela de Malha Elástica Termocolante 45g no avesso",
      "threadTension": "100 a 110gf",
      "density": "0.40 a 0.44 mm (Evitar densidades menores que 0.38 mm)"
    }
  },
  # E-077
  {
    "id": "e-077-encaixe-magnetico-bastidor-travamento-sem-parafuso",
    "code": "E-077",
    "letter": "E",
    "term": "Encaixe Magnético de Bastidor e Travamento Rápido sem Parafuso (Magnetic Hoop Locking System)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Técnicas de Bastidor",
    "origin": "Desenvolvido nos Estados Unidos e Alemanha (Mighty Hoop / HoopMaster) nos anos 2000 para eliminar lesões por esforço repetitivo em operadores de bordado industrial.",
    "summary": "Sistema de fixação de tecidos no bastidor composto por ímãs de neodímio de alta potência que prendem a peça instantaneamente sem marcas de queima de bastidor (hoop burn).",
    "definition": "O Encaixe Magnético de Bastidor e Travamento Rápido sem Parafuso (Magnetic Hoop System) é um dispositivo ergonômico de montagem de bastidores que substitui o aro tradicional com aperto mecânico por parafuso por um par de anéis magnéticos planos energizados por múltiplos ímãs permanentes de terras raras (Neodímio N52). Ao aproximar a parte superior, o campo magnético atrai a base com força uniforme calibrada, travando simultaneamente tecidos finos, jaquetas grossas com forro, couro ou toalhas aveludadas sem esmagar as fibras nem deixar marcas permanentes.",
    "technicalDetails": "Utiliza conjuntos de 16 a 32 ímãs de neodímio N50/N52 encapsulados em polímero resistente a impacto com força de atração vertical superior a 35 kgf. Auto-ajuste automático para espessuras variáveis de 0.2 mm (seda) a 12 mm (moletom felpado ou jaqueta acolchoada) sem necessidade de regular parafusos tensores. Reduz o tempo de bastidoramento em até 70% em linhas de produção industrial.",
    "construction": [
      "Aro inferior com guias metálicas e encaixe para o pantógrafo",
      "Aro superior com blindagem plástica e ímãs de neodímio integrados",
      "Abas ergonômicas de desacoplamento rápido para alívio magnético",
      "Revestimento texturizado antiderrapante de alta aderência"
    ],
    "howItWorks": [
      "1. Encaixa-se a base inferior do bastidor magnético na estação de montagem ou mesa de trabalho.",
      "2. Posiciona-se a entretela e a peça de roupa sobre a base de forma plana e alinhada.",
      "3. Aproxima-se o aro superior magnético, que é atraído pela força magnética instantânea, prensando o tecido uniformemente.",
      "4. O bastidor é acoplado diretamente aos braços do pantógrafo da máquina para início imediato do bordado."
    ],
    "mainTypes": [
      "Bastidores Magnéticos Tubulares (Formatos 10x10 cm, 13x18 cm, 20x20 cm, 20x30 cm)",
      "Bastidores Magnéticos para Bolsos e Meias (Narrow Magnetic Clamps)",
      "Bastidores Magnéticos Planos Industriais de Grande Campo (35x35 cm e 40x50 cm)"
    ],
    "characteristics": [
      "Eliminação 100% garantida de marcas de aro (hoop burn) em veludo, couro e microfibra",
      "Auto-compensação de tecidos com costuras grossas e zíperes próximos",
      "Força de pressão uniforme em todos os 360 graus do aro",
      "Extrema velocidade e facilidade operacional"
    ],
    "limitations": [
      "Exige cuidado no manuseio por operadores com marcapassos cardíacos devido ao forte campo magnético",
      "Custo de aquisição inicial superior aos bastidores plásticos convencionais"
    ],
    "numberingSystem": [
      "Ímãs de Neodímio Grau N48 a N52",
      "Força de Retenção: 25 a 45 kgf",
      "Tamanhos usuais em polegadas: 4.25x4.25", 5.5x5.5", 8x8", 8x13", 11x13""
    ],
    "advantages": [
      "✔ Redução drástica da fadiga muscular nos pulsos das bordadeiras (prevenção de LER e túnel do carpo)",
      "✔ Permite bordar sobre costuras grossas de jaquetas e moletons sem entortar o tecido",
      "✔ Aceleração do ritmo de produção de 15 para mais de 45 peças bastidoradas por hora"
    ],
    "commonErrors": [
      "❌ Deixar os dedos entre os anéis durante a aproximação rápida (risco de beliscão forte)",
      "❌ Apoiar cartões magnéticos de banco, celulares ou pen drives diretamente sobre os ímãs",
      "❌ Puxar o tecido pelas laterais após o travamento magnético, descalibrando o fio da trama"
    ],
    "voceSabia": "Os bastidores magnéticos modernos utilizam ímãs de neodímio que perdem menos de 1% de sua força magnética a cada 100 anos, o que significa que o poder de fixação do bastidor durará por gerações inteiras no ateliê!",
    "curiosidadeTecnica": "A força de atração magnética decresce com o quadrado da distância. Por isso, os bastidores de última geração possuem canais de fluxo guiado que concentram as linhas de campo na vertical, maximizando a aderência mesmo através de mantas espessas de edredom.",
    "dicaArtrelados": "Para bordar toalhas aveludadas nobres ou veludo molhado sem marcar o tecido para sempre, o bastidor magnético é a melhor ferramenta do mundo. Você não precisa usar nenhuma fita protetora nem forçar o parafuso: basta encostar e bordar com acabamento de boutique!",
    "applications": [
      "Bordado em toalhas de banho aveludadas, roupões e cobertores de bebê",
      "Jaquetas acolchoadas, moletons pesados e uniformes profissionais com forro",
      "Bolsas de lona, mochilas estruturadas e artigos de couro sintético",
      "Produção seriada de camisetas promocionais com alto volume diário"
    ],
    "troubleshootingTips": [
      "Se o tecido escorregar durante o bordado de matriz pesada, certifique-se de que a entretela utilizada possui superfície áspera/antiderrapante ou adicione uma tira de fita crepe nas bordas de apoio.",
      "Se o aro superior não fechar reto, limpe a superfície de contato para remover fiapos e fragmentos de linha acumulados nos ímãs.",
      "Se a máquina acusar colisão de bastidor, verifique se selecionou o tamanho de bastidor compatível nas configurações do painel eletrônico."
    ],
    "relatedTerms": [
      "Marcas de Bastidor (Hoop Burn)",
      "Pantógrafo",
      "Estação de Bastidorar (Hoop Station)",
      "Entretela Rasgável",
      "Ergonomia no Trabalho"
    ],
    "tags": ["bastidor-magnetico", "neodimio", "sem-parafuso", "hoop-burn", "ergonomia", "mighty-hoop", "bastidores"],
    "updatedAt": "2026-08-29",
    "sourceReference": "SEW TECH & HOOPMASTER. Magnetic Hooping Systems Technical Manual and Safety Standards. Dallas: HoopMaster, 2023. TAJIMA GROUP. Magnetic Clamping for Industrial Embroidery. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "SEW TECH & HOOPMASTER. Magnetic Hooping Systems Technical Manual and Safety Standards. Dallas: HoopMaster, 2023.",
      "TAJIMA GROUP. Magnetic Clamping for Industrial Embroidery. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Inovações em Fixação Têxtil: Bastidores Magnéticos e Eficiência Produtiva no Ateliê. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Pegue uma toalha felpada de banho com barra aveludada. Tente bastidorar metade da toalha em um bastidor de parafuso convencional apertando bem até esticar. Na outra metade, utilize o bastidor magnético. Após retirar os dois bastidores, passe os dedos sobre o veludo e observe como o bastidor tradicional deixou uma marca profunda e brilhosa (queima de bastidor), enquanto o magnético manteve o pelo da toalha totalmente fofo e intacto!",
    "quickSummary": "O bastidor magnético usa ímãs superfortes de neodímio para prender qualquer tecido em 1 segundo, sem precisar apertar parafusos e sem deixar marcas nas roupas.",
    "beginnerExplanation": "Sabe quando você precisa suar a camisa para girar aquele parafuso do bastidor em uma toalha grossa e depois ainda fica aquele anel amassado e marcado no tecido? O bastidor magnético tem ímãs que fecham sozinhos com um clique suave e prendem a roupa perfeitamente, sem cansar as mãos e sem amassar o tecido!",
    "recommendedSettings": {
      "speedPPM": "700 a 900 PPM",
      "needleType": "75/11 Universal ou 80/12 Ponta Bola",
      "stabilizer": "Entretela Rasgável 50g ou 60g",
      "threadTension": "105 a 115gf",
      "density": "Conforme a matriz padrão (0.40 mm)"
    }
  },
  # E-078
  {
    "id": "e-078-eixo-seletor-cores-guias-troca-agulha-industrial",
    "code": "E-078",
    "letter": "E",
    "term": "Eixo do Seletor de Cores e Guias de Troca de Agulha Industrial (Color Change Cam Shaft & Needle Selector Rail)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Componentes da Máquina",
    "origin": "Da engenharia mecânica de cabeçotes multicor desenvolvida pela Tajima e Barudan no Japão a partir de 1982.",
    "summary": "Eixo estriado com cames helicoidais que desloca o bloco de barras de agulha lateralmente para efetuar a troca automática de cores programada na matriz.",
    "definition": "O Eixo do Seletor de Cores (Color Change Cam Shaft) é o conjunto mecatrônico de precisão responsável pelo deslocamento linear horizontal do cabeçote de agulhas (needle case) em máquinas multi-agulhas (de 4 a 15 agulhas por cabeça). Acionado por um motor de passo dedicado ou servo auxiliar e monitorado por sensor óptico de posição (encoder de cor), ele gira ranhuras helicoidais que deslizam o cabeçote sobre trilhos temperados, engatando com exatidão a barra de agulha da cor selecionada ao excêntrico motor principal.",
    "technicalDetails": "Fabricado em aço carbono nitretado com canal espiral usinado em CNC com tolerância dimensional de 0.01 mm. Tempo médio de troca de cor entre 1.2 e 2.0 segundos. Integra sensor potenciométrico ou óptico de 12 a 15 canais e micro-chaves de fim de curso que impedem o giro da máquina se o engate da agulha não estiver 100% alinhado a 100° do ciclo de ponto.",
    "construction": [
      "Eixo sem-fim com canal de guia helicoidal (Worm Cam)",
      "Rolo seguidor de came em liga de bronze e rolamento de agulha",
      "Trilho de deslizamento retificado com esferas recirculantes",
      "Sensor óptico/potenciômetro codificador de posição da cor",
      "Trava de segurança de parada de barra (Needle Locking Bar)"
    ],
    "howItWorks": [
      "1. A matriz de bordado envia o comando 'Color Change' (Stop/Troca de Cor).",
      "2. O motor principal para a barra de agulha na posição superior exata (parada em 100° com recolhimento total do estica-fio).",
      "3. O motor de troca de cor gira o Eixo do Seletor de Cores no ângulo exato da nova agulha programada.",
      "4. O rolete guia movimenta o bloco lateralmente e encaixa o pino da barra correspondente no garfo motriz.",
      "5. O sensor confirma a posição e o bordado é retomado instantaneamente."
    ],
    "mainTypes": [
      "Sistema por Came Helicoidal Cilíndrico (Tajima, Ricoma, SWF, Feiya)",
      "Sistema por Fuso de Esferas com Servo Motor Digital (Barudan e ZSK)",
      "Sistema por Engrenagem Cremalheira com Motor de Passo (Máquinas semi-industriais compactas)"
    ],
    "characteristics": [
      "Movimentação suave e silenciosa mesmo em ciclos com dezenas de trocas",
      "Travamento mecânico anti-vibração durante a costura",
      "Precisão micrométrica de alinhamento com a lançadeira"
    ],
    "limitations": [
      "Sujeito a travamento por acúmulo de poeira têxtil se não lubrificado a cada 15 dias",
      "Descalibração pode gerar erro de 'Color Change Timeout' no painel eletrônico"
    ],
    "numberingSystem": [
      "Compatibilidade: 4, 6, 9, 12, 15 ou 18 agulhas por cabeça",
      "Ângulo de Troca no Volante: 100° (ponto morto superior seguro)",
      "Tempo de Ciclo: 1.5 s por salto de cor"
    ],
    "advantages": [
      "✔ Autonomia total de produção em desenhos com até 15 cores diferentes sem intervenção manual",
      "✔ Alinhamento milimétrico que elimina quebra de agulha pós-troca",
      "✔ Aceleração de até 400% na produtividade comparado a máquinas monoagulha"
    ],
    "commonErrors": [
      "❌ Lubrificar o trilho do seletor com óleo comum em vez de graxa branca de lítio sintética",
      "❌ Forçar o cabeçote lateralmente com as mãos sem a máquina estar desligada no ângulo de 100°",
      "❌ Deixar pontas longas de linha presas no trilho deslizante do seletor"
    ],
    "voceSabia": "Em uma máquina industrial de 15 agulhas trabalhando 8 horas por dia, o eixo seletor de cores pode realizar mais de 1.500 deslocamentos laterais completos, o que equivale a 'empurrar e puxar' o peso do cabeçote por mais de 3 quilômetros ao longo de um único mês de trabalho!",
    "curiosidadeTecnica": "Nas primeiras máquinas automáticas dos anos 1970, a troca de cor era feita manualmente pelo operador a cada parada do programa. A automação por cames helicoidais motorizados foi a maior responsável pelo surgimento da produção seriada de bonés e uniformes corporativos modernos.",
    "dicaArtrelados": "Uma vez por mês, faça uma limpeza no trilho do seletor de cores usando um pincel macio para remover fiapos e aplique uma gota bem fina de graxa branca sintética de teflon. Isso evita ruídos e previne o erro de 'Time Out' na troca de agulha da sua máquina!",
    "applications": [
      "Máquinas industriais e semi-industriais multi-agulhas",
      "Produção de logotipos multicoloridos e brasões com múltiplos degradês",
      "Bordados que combinam fio de poliéster, fio metálico e fio especial na mesma matriz"
    ],
    "troubleshootingTips": [
      "Se o painel exibir erro de 'Color Change Error / Half Turn', gire manualmente o volante traseiro até a marca de 100° e pressione o botão de reset de agulha no painel.",
      "Se o cabeçote fizer um barulho seco e travar no meio da troca, verifique se há linhas presas entre os blocos deslizantes ou limpe a graxa ressecada.",
      "Se a agulha bater na chapa após a troca de cor, recalibre o sensor potenciômetro de posição no menu técnico da máquina."
    ],
    "relatedTerms": [
      "Barra de Agulha",
      "Cabeçote Multi-Agulhas",
      "Troca Automática de Cores",
      "Motor de Passo",
      "Encoder Angular"
    ],
    "tags": ["seletor-de-cores", "color-change", "mecanica-industrial", "came-helicoidal", "multi-agulhas", "componentes"],
    "updatedAt": "2026-08-29",
    "sourceReference": "TAJIMA GROUP. Maintenance Manual: Color Change Mechanism and Cam Timing. Nagoya: Tajima, 2023. BARUDAN CO. Multi-Head Embroidery Technical Specifications. Ichinomiya: Barudan, 2022.",
    "bibliographicReferences": [
      "TAJIMA GROUP. Maintenance Manual: Color Change Mechanism and Cam Timing. Nagoya: Tajima, 2023.",
      "BARUDAN CO. Multi-Head Embroidery Technical Specifications. Ichinomiya: Barudan, 2022.",
      "ARTRELADOS. Mecânica Avançada de Cabeçotes de Bordar: Ajuste de Cames e Sensores de Cor. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Com a máquina multi-agulha desligada da tomada, localize o volante traseiro e posicione-o exatamente na marca de 100°. Observe o trilho do cabeçote onde as barras de agulha estão enfileiradas. Ligue a máquina e faça um teste de troca manual de cores pelo painel (da agulha 1 até a agulha 12), prestando atenção no movimento suave do eixo sem-fim helicoidal que guia todo o bloco.",
    "quickSummary": "O eixo do seletor de cores é a peça mecânica que empurra o cabeçote de agulhas para o lado quando a máquina precisa trocar de cor automaticamente sem você mexer em nada.",
    "beginnerExplanation": "Nas máquinas de bordar que têm várias agulhas, como a máquina sabe que agora é a hora da linha vermelha e depois da azul? Existe um eixo especial de aço que desliza todo o conjunto de agulhas para o lado bem na hora certa e encaixa a agulha da cor escolhida para continuar bordando sozinha!",
    "recommendedSettings": {
      "speedPPM": "800 a 1.000 PPM",
      "needleType": "DBxK5 / 130/705 H-E 75/11",
      "stabilizer": "Compatível com a peça (Rasgável ou Recorte)",
      "threadTension": "100 a 120gf",
      "density": "Padrão"
    }
  },
  # E-079
  {
    "id": "e-079-estudo-retracao-fibras-naturais-lavagem-bordado",
    "code": "E-079",
    "letter": "E",
    "term": "Estudo de Retração de Fibras Naturais pós-Lavagem no Bordado (Post-Wash Fiber Shrinkage & Puckering Study)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Tipos de Tecidos",
    "origin": "Da ciência têxtil aplicada à padronização de encolhimento de tecidos de algodão, linho e seda (Normas AATCC e ISO 6330).",
    "summary": "Análise do comportamento diferencial de encolhimento entre as fibras naturais da peça e os filamentos sintéticos da linha de poliéster após a primeira lavagem.",
    "definition": "O Estudo de Retração de Fibras Naturais pós-Lavagem no Bordado é a metodologia técnica que analisa e compensa a diferença entre a taxa de encolhimento dos tecidos naturais (algodão puro, linho, sarja e viscose, que encolhem de 3% a 8% na água morna) e a taxa de estabilidade dimensional das linhas de bordar 100% poliéster trilobal (que encolhem menos de 0.5%). Sem essa compensação prévia na digitalização e na escolha do estabilizador, a peça encolhe ao redor do bordado criando um relevo deformado e anéis de franzimento permanentes (puckering tardio).",
    "technicalDetails": "Fibras celulósicas (algodão e linho) relaxam suas tensões de fiação na presença de umidade e calor, sofrendo encurtamento longitudinal (urdume) e transversal (trama). A matriz deve aplicar: 1) Compensação de puxão aumentada para 0.40 a 0.50 mm; 2) Densidade mais arejada (espaçamento de 0.42 a 0.45 mm em vez de 0.38 mm); 3) Uso obrigatório de entretelas de recorte (Cutaway) com resina de retenção hidrofóbica que não encolhe com a lavagem doméstica.",
    "construction": [
      "Tabela de encolhimento percentual por tipo de fibra têxtil",
      "Ajuste de densidade vetorial para alívio de tensão pós-lavagem",
      "Entretela de recorte hidrofóbica de poliéster prensado",
      "Linhas de reforço em tatami aberto para ancoragem de trama"
    ],
    "howItWorks": [
      "1. Determina-se a composição têxtil da peça (ex: 100% algodão ou 100% linho puro).",
      "2. Se o tecido não for pré-lavado ou sanforizado industrialmente, a matriz é digitalizada com densidade 10% mais aberta e compensação de puxão reforçada.",
      "3. Utiliza-se entretela de recorte (Cutaway) resistente à água em vez de entretela rasgável comum de celulose solúvel.",
      "4. Quando o cliente final lava a peça, a entretela de recorte impede que o tecido encolha excessivamente na área do desenho, mantendo o bordado perfeitamente liso e plano."
    ],
    "mainTypes": [
      "Encolhimento de Malha de Algodão (Penteado e Cardado - Retração de 4% a 7%)",
      "Encolhimento de Linho Rústico e Puro (Retração de 5% a 9% no sentido do urdume)",
      "Encolhimento de Sarja e Brim Pesado 100% Algodão (Retração de 3% a 5%)",
      "Tecidos Mistos Sintéticos (Poliéster/Algodão - Estáveis com retração menor que 1.5%)"
    ],
    "characteristics": [
      "Garante a durabilidade estética do bordado durante toda a vida útil da roupa",
      "Evita reclamações de clientes após a primeira lavagem da peça",
      "Preserva a nitidez de pequenos detalhes e contornos finos"
    ],
    "limitations": [
      "Não anula a necessidade de pré-encolhimento manual em tecidos artesanais de linho rústico",
      "Exige conscientização do cliente sobre instruções de lavagem com água fria"
    ],
    "numberingSystem": [
      "Taxa de Retração Típica: Algodão Cru (6-8%), Linho (5-9%), Sarja Pré-Encolhida (1-2%)",
      "Espaçamento de Compensação: 0.42 a 0.46 mm",
      "Gramatura de Entretela Cutaway: 60g a 80g/m²"
    ],
    "advantages": [
      "✔ Bordados corporativos e uniformes que continuam impecáveis após dezenas de lavagens",
      "✔ Fim dos enrugamentos em toalhas de linho e enxovais de bebê",
      "✔ Valorização do produto final com padrão de alta costura"
    ],
    "commonErrors": [
      "❌ Usar entretela rasgável frágil de 30g em camisetas 100% algodão não sanforizadas",
      "❌ Digitalizar com ponto cheio ultradenso (0.32 mm) em linho puro sem folga de trama",
      "❌ Não alertar clientes sobre lavagem de peças finas em água quente na máquina"
    ],
    "voceSabia": "As normas internacionais da AATCC estabelecem que para um bordado ser considerado de alta qualidade comercial, ele deve manter sua planicidade e estabilidade dimensional com variação máxima de 1.5% após 5 ciclos completos de lavagem e secagem a 40°C!",
    "curiosidadeTecnica": "O algodão encolhe porque suas fibras celulósicas em formato de fita retorcida incham em contato com a água e se contraem ao secar. Como o fio de poliéster da linha de bordar é termofixado e impermeável, ele resiste à contração, agindo como um 'freio' que enruga o tecido ao redor.",
    "dicaArtrelados": "Quando for bordar camisetas 100% algodão ou toalhas de linho que serão muito lavadas, use sempre uma camada de entretela de recorte (Cutaway) de 60g no avesso e corte o excesso deixando 5 mm de margem. O bordado nunca mais vai enrugar após a primeira lavagem!",
    "applications": [
      "Uniformes profissionais e jalecos de algodão pesado",
      "Enxoval de bebê (lençóis de percal 200/400 fios e bodies de suedine)",
      "Roupas de mesa nobres em linho puro e cambraia de algodão",
      "Camisas polo clássicas em piquet 100% algodão"
    ],
    "troubleshootingTips": [
      "Se o bordado ficou lindo na máquina mas enrugou todo após a primeira lavagem, substitua a entretela rasgável por entretela de recorte (Cutaway) e aumente o espaçamento de ponto para 0.44 mm.",
      "Se as letras parecerem menores e repuxadas pós-lavagem, adicione 0.40 mm de compensação de puxão na digitalização da matriz.",
      "Se o tecido rasgar perto do contorno após a lavagem, reduza a densidade de pontos no software para não cortar as fibras de algodão."
    ],
    "relatedTerms": [
      "Entretela de Recorte (Cutaway)",
      "Compensação de Puxão (Pull Compensation)",
      "Linha de Poliéster Trilobal",
      "Tecido de Algodão / Linho",
      "Franzimento (Puckering)"
    ],
    "tags": ["retracao", "fibras-naturais", "lavagem", "algodao", "linho", "encolhimento", "cutaway"],
    "updatedAt": "2026-08-29",
    "sourceReference": "AATCC. Technical Manual: Dimensional Changes of Fabrics after Home Laundering (Test Method 135). Research Triangle Park: AATCC, 2023. ASTM INTERNATIONAL. Standard Test Method for Shrinkage in Textile Materials. West Conshohocken: ASTM, 2022.",
    "bibliographicReferences": [
      "AATCC. Technical Manual: Dimensional Changes of Fabrics after Home Laundering (Test Method 135). Research Triangle Park: AATCC, 2023.",
      "ASTM INTERNATIONAL. Standard Test Method for Shrinkage in Textile Materials. West Conshohocken: ASTM, 2022.",
      "ARTRELADOS. Comportamento Físico-Têxtil de Malhas e Tecidos Pós-Bordado e Lavagem. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Pegue um retalho de 20x20 cm de tecido de algodão cru 100% (sem lavar). Borde no centro um brasão de 8 cm com entretela rasgável de celulose. Lave o retalho na pia com água morna e sabão neutro e deixe secar naturalmente à sombra. Veja como o tecido ao redor do bordado encolheu e formou ondas de franzimento, comprovando na prática a necessidade de usar entretela de recorte e matriz arejada!",
    "quickSummary": "O estudo de retração analisa quanto o algodão ou linho encolhem na água para você programar a matriz e usar a entretela certa, evitando que o bordado enrugue pós-lavagem.",
    "beginnerExplanation": "O tecido de algodão e o linho costumam encolher um pouquinho quando lavados pela primeira vez, mas a linha de bordar de poliéster não encolhe nada! Se você não usar uma entretela de recorte resistente no avesso, o tecido encolhe e o bordado fica todo engruvinhado. Usando a técnica certa, sua peça continua lisinha para sempre!",
    "recommendedSettings": {
      "speedPPM": "650 a 800 PPM",
      "needleType": "75/11 Ponta Bola (SES) para malhas ou Universal para planos",
      "stabilizer": "Entretela de Recorte (Cutaway) 60g a 80g",
      "threadTension": "100 a 110gf",
      "density": "0.42 a 0.46 mm com Compensação de Puxão de 0.40 mm"
    }
  },
  # E-080
  {
    "id": "e-080-efeito-trapunto-tridimensional-camadas-manta-r2",
    "code": "E-080",
    "letter": "E",
    "term": "Efeito Trapunto Tridimensional com Camadas de Manta R2 (Trapunto Quilting & Multi-Layer High-Loft Relief)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Pontos Básicos & Decorativos",
    "origin": "Do italiano 'trapungere' (acolchoar, pespontar com relevo), técnica artesanal renascentista da Sicília e Toscana do século XIV adaptada ao bordado computadorizado.",
    "summary": "Técnica decorativa que cria relevos volumosos acolchoados delimitando áreas com costuras de contorno e preenchimentos micro-tatami comprimidos ao redor de mantas acrílicas.",
    "definition": "O Efeito Trapunto Tridimensional com Camadas de Manta R2 é um método híbrido de bordado e quilting eletrônico que produz relevos esculturais de alta definição em colchas, almofadas, jaquetas e painéis de parede. A técnica baseia-se em costurar uma primeira camada de manta acrílica resinada (Manta R1 ou R2 de 100g a 200g) sob o tecido principal, recortar o excesso ao redor dos motivos principais e, em seguida, aplicar pontos de fundo ultra densos (stippling / micro-tatami) que esmagam a manta apenas nas áreas de fundo, fazendo com que as figuras centrais saltem para fora com volume escultural macio.",
    "technicalDetails": "Utiliza sequência de programação em 3 etapas: 1) Linha guia de colocação e costura de fixação da manta (Running Stitch com comprimento de 2.8 mm); 2) Parada de corte (Frame Out / Stop) para recorte do excesso de manta com tesoura de ponta curvada (pelicano); 3) Costura do tecido superior com acolchoamento de fundo (Stippling ou Echo Quilting com espaçamento de 1.2 mm e densidade de fundo de 0.8 mm) e acabamento com ponto cordonê ou satim largo.",
    "construction": [
      "Tecido de topo nobre (Percal, Cetim de Algodão, Veludo ou Linho)",
      "Manta Acrílica Termocolante R1 (uma face colante) ou R2 (duas faces colantes)",
      "Entretela Rasgável ou Hidrossolúvel de base",
      "Costura de fundo compactadora (Micro-Stippling / Meandro de alta compressão)",
      "Contorno em Ponto Cheio ou Cordonê de vedação"
    ],
    "howItWorks": [
      "1. Bastidora-se a entretela de base com a manta acrílica R2.",
      "2. A máquina borda o contorno do desenho para prender a manta.",
      "3. A máquina para e ejeta o bastidor (Stop); recorta-se a manta bem rente ao contorno externo.",
      "4. Cobre-se com o tecido principal e retoma-se o bordado.",
      "5. A máquina aplica o ponto de fundo que comprime a manta nas laterais, elevando os motivos recortados em alto relevo 3D."
    ],
    "mainTypes": [
      "Trapunto Clássico com Recorte Manual (High-Loft Cutaway Trapunto)",
      "Trapunto com Aplique de Espuma EVA (Técnica mista para bonés e jaquetas)",
      "Shadow Trapunto / Trapunto Sombreado (Uso de tecidos semitransparentes como organza com fios coloridos internos)",
      "Trapunto Integral em Sanduíche Quilt (Comprimido com agulha especial de quilting)"
    ],
    "characteristics": [
      "Relevo acolchoado macio e tátil incomparável",
      "Aspecto de tapeçaria renascentista e luxo artesanal",
      "Leveza e conforto sem rigidez do EVA tradicional"
    ],
    "limitations": [
      "Exige precisão manual no recorte rente da manta durante a parada de máquina",
      "Tempo de execução mais longo devido às etapas de parada e recorte"
    ],
    "numberingSystem": [
      "Gramatura de Manta: R1 (100g/m²) ou R2 (150g a 200g/m²)",
      "Comprimento de Ponto de Fixação: 2.5 a 3.0 mm",
      "Espaçamento de Stippling de Fundo: 1.0 a 1.5 mm"
    ],
    "advantages": [
      "✔ Agregação de altíssimo valor comercial em peças de decoração e enxovais de luxo",
      "✔ Relevo 3D 100% lavável que não quebra nem amassa na máquina de lavar",
      "✔ Toque aveludado e macio ao toque das mãos"
    ],
    "commonErrors": [
      "❌ Cortar o tecido de base por acidente durante o recorte da manta",
      "❌ Usar manta muito fina (menor que 80g) resultando em relevo quase imperceptível",
      "❌ Fazer pontos de fundo muito abertos que não comprimem a manta o suficiente"
    ],
    "voceSabia": "Na Itália do século XIV, o trapunto era feito à mão inserindo pequenos roletes de lã e algodão com agulha curva por trás de cada pétala de flor do tecido. Com o bordado computadorizado, você consegue fazer o mesmo efeito que levava meses em apenas 20 minutos!",
    "curiosidadeTecnica": "A resina termocolante da Manta R2 é composta de polietileno de baixa densidade que se funde temporariamente com o calor do ferro, colando o tecido de topo e a entretela de base e impedindo que a manta se desloque durante o impacto contínuo da agulha.",
    "dicaArtrelados": "Use uma tesoura pelicano (aquela com formato de bico de pato) para recortar a manta rente ao contorno de fixação. A lâmina em formato de espátula protege o tecido de baixo e permite cortar a manta com velocidade recorde e segurança total!",
    "applications": [
      "Enxovais de bebê de alto luxo (almofadas de amamentação, porta-bebês e edredons)",
      "Almofadas decorativas e cabeceiras de cama estofadas",
      "Jaquetas bomber e casacos acolchoados de moda inverno",
      "Bolsas artesanais e nécessaires em couro ecológico acolchoado"
    ],
    "troubleshootingTips": [
      "Se o relevo não ficou visível, aumente a densidade do ponto de fundo (stippling/meandro) diminuindo o espaçamento para 1.0 mm para amassar bem as áreas laterais.",
      "Se a linha superior arrebentar ao passar sobre a manta, utilize agulha de ponta aguda 80/12 (Topstitch ou Quilting) com olho alongado.",
      "Se o tecido superior enrugar ao redor do relevo, use ferro a vapor morno sobre a Manta R2 para fixar o tecido antes da costura de fundo."
    ],
    "relatedTerms": [
      "Quilting Computadorizado",
      "Manta Acrílica R1 e R2",
      "Ponto Meandro (Stippling)",
      "Ponto Cordonê",
      "Bordado 3D / Relevo"
    ],
    "tags": ["trapunto", "quilting", "manta-r2", "relevo-3d", "decoracao", "enxoval-luxo", "pontos-decorativos"],
    "updatedAt": "2026-08-29",
    "sourceReference": "LEEDS, Gail. The Complete Guide to Machine Trapunto & Quilting Techniques. New York: Sterling, 2022. WILCOM INTERNATIONAL. Digitizing for Trapunto and Multi-Layer Textures. Sydney: Wilcom, 2023.",
    "bibliographicReferences": [
      "LEEDS, Gail. The Complete Guide to Machine Trapunto & Quilting Techniques. New York: Sterling, 2022.",
      "WILCOM INTERNATIONAL. Digitizing for Trapunto and Multi-Layer Textures. Sydney: Wilcom, 2023.",
      "ARTRELADOS. Técnicas Clássicas Italianas no Bordado Computadorizado: Trapunto 3D com Manta R2. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Programe no software uma flor simples de 10 cm com contorno em ponto cheio e preenchimento de fundo em meandro (stippling). Coloque entretela e um pedaço de Manta R2 no bastidor e borde apenas a primeira costura de marcação. Pare a máquina, recorte a manta ao redor das pétalas com tesoura pelicano, posicione um tecido de algodão branco por cima e finalize o bordado. Sinta com as mãos o relevo fofinho e escultural que se formou!",
    "quickSummary": "O efeito trapunto usa manta acrílica por baixo do tecido para criar desenhos com relevo fofo e acolchoado, amassando o fundo com costuras finas e deixando a figura central alta.",
    "beginnerExplanation": "Sabe aquelas colchas e almofadas nobres de castelo onde o desenho parece estofadinho e salta para fora do tecido como uma almofadinha? O trapunto faz isso usando uma manta macia por baixo. A máquina costura o fundo bem apertadinho e o desenho fica alto, volumoso e macio ao toque!",
    "recommendedSettings": {
      "speedPPM": "600 a 700 PPM",
      "needleType": "80/12 Topstitch / Microtex ou Quilting",
      "stabilizer": "Entretela Rasgável 60g + Manta Acrílica R1/R2 de 150g",
      "threadTension": "105 a 115gf",
      "density": "Stippling de fundo com espaçamento de 1.2 mm e Contornos em Satin 0.40 mm"
    }
  }
]

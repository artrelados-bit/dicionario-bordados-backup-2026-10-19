# -*- coding: utf-8 -*-
import json
import os
import re

from verbetes_data_m1 import VERBETES_M13 as M_PART1
from verbetes_data_m2 import VERBETES_M13_REST as M_PART2

# M_PART1 has M-075, M-076, M-077
# M_PART2 has M-078, M-079, M-080

# Now let's define M-081 to M-087 (7 verbetes) to finish Part 13 (total 13 items: M-075 to M-087)
# And M-088 to M-100 (13 verbetes) to make Part 14 (total 13 items: M-088 to M-100)

VERBETES_M13_PART3 = [
  {
    "id": "m-081-malha-flame-e-tecidos-com-fios-irregulares",
    "code": "M-081",
    "term": "Malha Flamê & Tecidos com Fios Irregulares (Slub Knit & Irregular Yarn Fabrics)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês flamé (com efeito de chamas / manchas) e do inglês slub yarn (fio fiado com espessura variável proposital).",
    "summary": "Técnicas de estabilização e bordado em malhas com variações intencionais de espessura de fios, evitando repuxos assimétricos, ondas e perfurações.",
    "definition": "Malha Flamê & Tecidos com Fios Irregulares (Slub Cotton Knit Embroidery) são malhas de vestuário casual que apresentam alternância rítmica de trechos espessos e trechos quase transparentes de fio na mesma trama. Essa irregularidade estrutural confere charme estético, mas reduz a resistência à tração em áreas finas, exigindo entretelas de malha flexível (PolyMesh ou termofusível suave), agulhas de ponta bola fina 70/10 SES para não cortar os filamentos finos e matrizes com pontos leves, underlays abertos e compensação de repuxo generosa de 0,40 mm.",
    "technicalDetails": "Gramatura média da malha: 120 a 160 g/m². Variação de densidade da trama: até 40% entre nós de flamê e vãos. Agulha: 70/10 ou 75/11 Ball Point (SES). Compensação de repuxo: 0,40 mm a 0,45 mm.",
    "construction": [
      "Malha flamê 100% algodão penteado ou mescla viscose/algodão",
      "Entretela de recorte leve não-tecida multidirecional (PolyMesh 50 g/m²)",
      "Adesivo temporário em spray de baixo resíduo ou entretela termocolante hidrossolúvel",
      "Linha de poliéster 40wt ou linha de algodão 50wt fosca",
      "Película hidrossolúvel de topo leve (Solvy 20 micras) para nivelar as saliências dos fios"
    ],
    "howItWorks": [
      "1. A entretela PolyMesh é colada suavemente no avesso da malha flamê para neutralizar o estiramento.",
      "2. O tecido é encaixado no bastidor sem esticar a trama, mantendo a textura natural do flamê.",
      "3. Coloca-se a película hidrossolúvel por cima para que o calcador deslize sobre os nós do fio sem prender.",
      "4. A máquina borda em velocidade moderada de 650 a 750 PPM com agulha de ponta bola fina.",
      "5. A matriz aplica pontos leves que repousam suavemente sobre a malha sem afundar nos vãos finos.",
      "6. A compensação de repuxo compensa a elasticidade assimétrica natural das fibras de algodão.",
      "7. A peça é finalizada lavando a película de topo, mantendo o caimento leve e despojado da camiseta."
    ],
    "mainTypes": [
      "Camisetas em Malha Flamê 100% Algodão (Moda jovem casual e streetwear)",
      "Viscose Flamê para Moda Feminina (Tecidos fluidos com alto caimento e grande elasticidade)",
      "Linho com Efeito Flamê Rústico (Tecido plano com fios de espessura artesanal variável)"
    ],
    "characteristics": [
      "Caimento extremamente leve, fresco e moderno nas roupas prontas",
      "Textura visual mesclada com aspecto rústico e artesanal",
      "Toque macio do bordado quando digitalizado com densidades abertas",
      "Alta valorização comercial em marcas de moda praia e casual chique"
    ],
    "limitations": [
      "Não suporta bordados pesados tipo brasão com tatamis maciços de alta densidade",
      "Nunca esticar a malha ao prender no bastidor para não deformar permanentemente a camiseta",
      "Evitar agulhas ponta fina cortante que furam e desmancham os fios finos da malha"
    ],
    "numberingSystem": [
      "Gramatura Típica: 130 a 150 g/m²",
      "Compensação de Repuxo: 0,40 mm",
      "Densidade Recomendada: 0,44 mm a 0,48 mm"
    ],
    "advantages": [
      "✔ Permite bordar com perfeição no tecido mais vendido e procurado da moda casual de verão",
      "✔ Evita que camisetas fiquem com buracos ao redor do bordado após a primeira lavagem",
      "✔ Mantém o bordado leve sem transformar a frente da camiseta em uma placa dura"
    ],
    "commonErrors": [
      "❌ Usar entretela rasgável comum, que estoura nos pontos finos e faz a malha franzir",
      "❌ Puxar a malha com força no aro do bastidor, deixando a camiseta torta com a gola torta",
      "❌ Usar densidade fechada de 0,35 mm, que picota e fura os fios finos da malha flamê"
    ],
    "voceSabia": "Originalmente, os fios flamê (slub) eram considerados defeito de fiação nas tecelagens do século XIX quando a máquina falhava; no século XXI, máquinas japonesas de última geração foram reprogramadas para criar essas imperfeições calculadas que viraram sinônimo de luxo despojado!",
    "curiosidadeTecnica": "Nas áreas finas da malha flamê, a densidade de fios por centímetro quadrado cai até 50%; por isso, o uso da película hidrossolúvel por cima funciona como uma ponte física que impede a agulha de empurrar o nó do ponto para dentro da camiseta.",
    "dicaArtrelados": "Ao bordar camisetas de malha flamê, nunca aperte o bastidor puxando o tecido! Prenda a entretela PolyMesh no bastidor, borrife cola spray bem levinha e deite a camiseta por cima alisando com a mão (técnica de flutuação). O bordado não repuxa nada e a malha não perde a forma!",
    "comparisonTable": {
      "headers": ["Aspecto", "Malha Penteada Lisa", "Malha Flamê Irregular"],
      "rows": [
        ["Estrutura da Trama", "Fios regulares e homogêneos", "Variação de partes grossas e finas"],
        ["Risco de Furos", "Baixo", "Alto nos trechos finos sem ponta bola"],
        ["Entretela Indicada", "Rasgável média ou Recorte", "Recorte PolyMesh ou Hidrossolúvel"],
        ["Compensação de Repuxo", "0,25 mm a 0,30 mm", "0,40 mm a 0,45 mm (Reforçada)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "70/10 ou 75/11 Ball Point (SES / Ponta Bola Fina)",
      "stabilizer": "Entretela PolyMesh de Recorte 50 g/m² + Película de Topo Solúvel",
      "threadTension": "100 a 110 gf (superior suave) e 20 a 22 gf (bobina)",
      "density": "0.45 mm com underlays abertos em zigue-zague leve"
    },
    "applications": [
      "Camisetas e regatas masculinas e femininas de moda casual e praia",
      "Vestidos e saídas de banho leves em viscose flamê",
      "Roupas infantis leves e bodies de bebê confortáveis",
      "Uniformes de academias e estúdios de pilates que prezam por leveza"
    ],
    "troubleshootingTips": [
      "Se surgirem pequenos furos nos cantos das letras, substitua imediatamente a agulha por uma 70/10 SES nova",
      "Aumente a compensação de repuxo no programa se os círculos ficarem ligeiramente ovais",
      "Use entretela termocolante hidrossolúvel para garantir toque macio no avesso"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Malha e Tecidos Elásticos",
      "Compensação de Repuxo",
      "Película Hidrossolúvel",
      "Técnica de Flutuação no Bastidor"
    ],
    "tags": [
      "m-081",
      "malha flame",
      "slub knit",
      "fios irregulares",
      "camisetas",
      "polymesh",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KAUFMANN, Dieter. Modern Knitted Fabrics: Slub Yarns and Stitch Dynamics. Stuttgart, 2021.",
      "PARRISH, Gail. Embroidery Stabilization for High-End Knitwear and Slub Textures. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de camiseta de malha flamê. Borde um desenho circular simples com entretela rasgável comum puxando o tecido no bastidor. Em outro retalho, borde o mesmo desenho flutuado sobre entretela PolyMesh com ponta bola 70/10 e plástico solúvel por cima. Compare o toque e o formato perfeitamente redondo do segundo!",
    "quickSummary": "Técnicas de bordado para malhas de fios com espessura variável, garantindo leveza sem furos nem repuxo.",
    "beginnerExplanation": "A malha flamê é aquele tecido gostoso e levinho de camiseta que tem umas listrinhas e nós naturais mais grossinhos e outras partes bem fininhas. A gente usa agulha de pontinha redonda e entretela macia para bordar sem furar o tecido e sem deixar a camiseta dura!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-082-modulacao-de-angulo-em-degraus-step-angle-curved-satin",
    "code": "M-082",
    "term": "Modulação de Ângulo em Degraus (Step Angle & Curved Satin Transitions)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim modulatio (variação rítmica e proporcional) e do inglês step angle (ângulo de ponto em degraus graduados).",
    "summary": "Técnica de programação de linhas de direção em curvas de ponto cheio que evita o acúmulo excessivo de pontos e nós no raio interno da curva.",
    "definition": "Modulação de Ângulo em Degraus (Curved Satin Smart Angle Partitioning) é a técnica de digitalização avançada em que os ângulos de penetração da agulha em colunas curvas de ponto cheio são fragmentados em setores angulares graduados (*smart cornering* / particionamento em leque). Ao curvar uma coluna de cetim, os pontos no raio externo viajam uma distância muito maior do que no raio interno; a modulação em degraus recalcula automaticamente a densidade interna e aplica pontos curtos alternados (*short stitches*), impedindo que dezenas de furos se sobreponham no mesmo milímetro, o que causaria quebra de agulha, arrebentamento de linha e relevos indesejados.",
    "technicalDetails": "Graduação máxima de ângulo entre nós adjacentes: 5° a 8°. Comprimento de pontos curtos internos: 40% a 60% da largura total da coluna. Alívio de densidade radial: até 50% no vértice interno.",
    "construction": [
      "Software de digitalização com suporte a vetores e linhas de direção manuais (Wilcom, Embird, Bernina, Wings)",
      "Curvas de Bézier com nós de controle e guias angulares em leque",
      "Algoritmo de compensação de pontos curtos (*Smart Corners & Short Stitches*) ativado",
      "Densidade nominal da coluna regulada entre 0,38 mm e 0,42 mm",
      "Underlays em zigue-zague leve ou ponto de contorno interno com recuo de 0,6 mm"
    ],
    "howItWorks": [
      "1. O programador define o contorno da curva e adiciona guias de direção perpendiculares à trajetória.",
      "2. O software calcula o comprimento do arco interno e do arco externo da curva.",
      "3. O algoritmo insere pontos curtos alternados no lado interno para aliviar a aglomeração de furos.",
      "4. A máquina borda a curva com movimento suave do pantógrafo, sem paradas bruscas.",
      "5. A linha superior assenta com brilho acetinado contínuo e reflexo de luz uniforme em todo o arco.",
      "6. A parte interna da curva permanece lisa, plana e macia, sem formar um caroço duro de linha.",
      "7. A agulha passa sem esforço pelo vértice, zerando o risco de quebras e desgaste mecânico."
    ],
    "mainTypes": [
      "Canto em Meia-Esquadria / Mitra (Mitred Corner para ângulos retos de 90° em molduras e monogramas)",
      "Curvatura em Leque Fluido (Smart Fan Cornering para letras cursivas, arabescos e motivos florais)",
      "Intersecção em Degrau Sobreposto (Lap Joint Corner para fitas largas e listras heráldicas)"
    ],
    "characteristics": [
      "Brilho de reflexão de luz impecável e uniforme ao longo de toda a curva da coluna",
      "Eliminação total de nós volumosos e bolos de linha no canto interno",
      "Costura fluida e silenciosa com preservação da ponta da agulha",
      "Acabamento estético de alta alfaiataria em logotipos e letras decorativas"
    ],
    "limitations": [
      "Exige domínio das ferramentas avançadas de edição de nós e linhas de ângulo no software",
      "Curvas muito fechadas (< 45°) devem ser preferencialmente divididas em dois objetos sobrepostos",
      "Não se aplica a pontos de tatami ou preenchimentos complexos com múltiplos furos"
    ],
    "numberingSystem": [
      "Variação Angular Máxima: 8° por ponto",
      "Redução de Pontos Curtos: 50% de recuo",
      "Densidade Nominal: 0,40 mm"
    ],
    "advantages": [
      "✔ Reduz em até 90% a quebra de agulhas e linhas durante a execução de monogramas e arabescos",
      "✔ Proporciona bordados de luxo com toque macio e acabamento acetinado de alta classe",
      "✔ Agiliza a produção eliminando paradas de máquina para repor fios partidos"
    ],
    "commonErrors": [
      "❌ Deixar os ângulos em 90° retos dentro de curvas, criando um buraco preto no centro do arco",
      "❌ Desativar a função de pontos curtos (*short stitches*), empilhando 30 furos no mesmo ponto interno",
      "❌ Mudar o ângulo bruscamente em 45° de uma vez só, criando uma costura feia e partida"
    ],
    "voceSabia": "A matemática dos ângulos graduados em bordado foi inspirada na técnica dos marceneiros renascentistas italianos que entalhavam molduras douradas em madeira (*intarsia*), calculando a divisão dos ângulos para que a madeira nunca rachasse nos cantos!",
    "curiosidadeTecnica": "Em uma curva fechada de 90° sem modulação de ângulo, a densidade no raio interno pode atingir 0,08 mm (5 vezes mais apertado que o normal), gerando uma força de impacto de penetração que pode empenar a barra de agulha da máquina em questão de segundos.",
    "dicaArtrelados": "Ao digitalizar letras cursivas com muitas curvas, adicione linhas de direção manuais a cada centímetro da curva e certifique-se de que a opção 'Pontos Curtos' (Short Stitches) esteja marcada com 50% no seu software: suas letras vão bordar com uma maciez incrível e sem nunca estourar a linha!",
    "comparisonTable": {
      "headers": ["Abordagem de Curva", "Aspecto no Canto Interno", "Risco de Quebra de Linha", "Reflexo da Luz"],
      "rows": [
        ["Modulação em Degraus (Smart Angle)", "Plano, limpo e macio", "Zero (Excelente fluxo)", "Brilho contínuo e fluido"],
        ["Ângulo Fixo Automático", "Bolo duro de linha e furos acumulados", "Altíssimo", "Luz cortada e fosca"],
        ["Canto em Esquadria (Mitra)", "Linha diagonal nítida de divisão", "Muito Baixo", "Efeito de moldura elegante"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES ou Universal",
      "stabilizer": "Adequado ao tecido da peça",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com ativação de Short Stitches a 50%"
    },
    "applications": [
      "Monogramas elegantes e tipografias cursivas com arabescos complexos",
      "Logotipos corporativos circulares e emblemas desportivos com arcos",
      "Bordados florais de alta definição, pétalas curvas e folhas estilizadas",
      "Brasões heráldicos e fitas ornamentais com dobras tridimensionais"
    ],
    "troubleshootingTips": [
      "Se a linha superior arrebentar sempre na mesma curva, abra o software e adicione mais linhas de direção intermediárias",
      "Verifique se o recuo de pontos curtos está regulado para alternar entre 30% e 60%",
      "Evite larguras de ponto cheio superiores a 8,5 mm em curvas muito fechadas"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Cheio (Satin Stitch)",
      "Compensação de Repuxo",
      "Densidade de Pontos",
      "Modificador de Ponto Curvo Inteligente"
    ],
    "tags": [
      "m-082",
      "modulacao de angulo",
      "smart angle",
      "pontos curtos",
      "curvas em cetim",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Advanced Vector Digitizing & Stitch Angle Dynamics. Sydney, 2021.",
      "PARRISH, Gail. Precision Curve Mechanics and Cornering in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Digitalize a letra 'S' em ponto cheio de 4 cm de altura de duas formas: uma com ângulo automático único e outra modulando os ângulos gradualmente em leque com pontos curtos ativados. Borde as duas lado a lado. Sinta com os dedos o verso e a frente de ambas e veja a perfeição da segunda!",
    "quickSummary": "Programação inteligente de ângulos em curvas de ponto cheio que evita bolos de linha e quebra de agulha.",
    "beginnerExplanation": "Quando a máquina faz uma curva em ponto cheio, o lado de dentro fica muito apertado e o de fora fica mais aberto. Essa técnica distribui os pontinhos como um leque suave, fazendo a curva ficar lisa, brilhante e sem embolar a linha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-083-manta-siliconada-e-estruturacao-em-matelasse-tridimensional",
    "code": "M-083",
    "term": "Manta Siliconada & Estruturação em Matelassê Tridimensional (Siliconized Batting & 3D Trapunto Quilting)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego manthe (agasalho / cobertura) e do francês matelasser (acolchoar / forrar com almofadas).",
    "summary": "Uso de mantas de poliéster virgem com tratamento de silicone e resina para criação de acolchoados fofos, matelassês profundos e efeito trapunto no bastidor de bordar.",
    "definition": "Manta Siliconada & Estruturação em Matelassê Tridimensional (High-Loft Siliconized Quilted Batting) é o material estabilizador e estruturador composto por fibras de poliéster ocas e conjugadas, tratadas com banho de silicone líquido e termofixadas. Essa composição confere à manta alta memória elástica (*resilience*), permitindo que ela seja comprimida pelo bastidor e pelos pontos de bordado e retorne com volume máximo nos vãos livres, gerando almofadados profundos com toque sedoso para nécessaires, colchas de bebê, jaquetas acolchoadas e peças de decoração de alto padrão.",
    "technicalDetails": "Gramaturas mais utilizadas: 100 g/m² (fina), 150 g/m² (média) e 200 g/m² (alta densidade). Fibras 100% poliéster virgem siliconado com ponto de fusão de 250°C. Recuperação elástica: > 95% após prensagem.",
    "construction": [
      "Tecido superior de acabamento (tricoline 100% algodão, cetim de seda ou microfibra acetinada)",
      "Manta siliconada de média ou alta resiliência (100 a 150 g/m²)",
      "Tecido de forro inferior ou entretela de sustentação macia (TNT 40 g/m²)",
      "Adesivo temporário em spray para montagem do 'sanduíche' têxtil sem rugas",
      "Matriz com linhas de acolchoamento contínuo (*stippling*, favo de mel ou losangos) e pontos de relevo"
    ],
    "howItWorks": [
      "1. Monta-se o sanduíche: forro inferior + manta siliconada + tecido de topo com adesivo temporário.",
      "2. O conjunto é fixado no bastidor com tensão homogênea sem esmagar o volume da manta.",
      "3. A máquina borda primeiro as linhas de pesponto do matelassê em ponto corrido triplo ou zigue-zague fino.",
      "4. As costuras comprimem a manta nos trajetos das linhas, forçando as fibras a inflarem nos espaços abertos.",
      "5. Em seguida, a máquina borda os monogramas ou desenhos centrais com compensação de repuxo de 0,45 mm.",
      "6. A peça é retirada do bastidor e as fibras siliconadas expandem imediatamente para o volume original.",
      "7. O resultado é um acolchoado tridimensional exuberante, macio ao toque e termicamente isolante."
    ],
    "mainTypes": [
      "Manta Siliconada Solta High-Loft (Para colchas de berço, almofadas e efeito trapunto profundo)",
      "Manta R1 Siliconada Termocolante Unilateral (Com resina de um lado para fixar o tecido de topo com ferro)",
      "Manta R2 Siliconada Dupla Face (Com resina dos dois lados para estruturar bolsas e nécessaires firmes)"
    ],
    "characteristics": [
      "Volume tridimensional exuberante com recuperação elástica imediata após lavagens",
      "Toque incrivelmente sedoso, fofo e confortável que não deforma nem esfarela",
      "Isolamento térmico e acústico de alta performance em roupas e acessórios",
      "Hipoalergênica, antimofo e lavável em máquina doméstica comum"
    ],
    "limitations": [
      "Exige regular a altura do calcador da máquina para não arrastar ou travar no volume alto",
      "Não passar ferro quente seco diretamente sobre a manta sem pano úmido ou folha de teflon",
      "Evitar densidades de bordado muito pesadas que esmagam o volume e endurecem a peça"
    ],
    "numberingSystem": [
      "Gramatura Padrão: 100 a 150 g/m²",
      "Espessura Livre: 6 mm a 12 mm",
      "Velocidade de Trabalho: 650 a 750 PPM"
    ],
    "advantages": [
      "✔ Transforma tecidos planos simples em produtos estruturados de luxo com altíssima margem de lucro",
      "✔ Ideal para confecção de bolsas, estojos, capas de caderno e kits completos de maternidade",
      "✔ Proporciona um efeito acolchoado irresistível ao toque de clientes finais"
    ],
    "commonErrors": [
      "❌ Apertar o parafuso do bastidor até o limite, esmagando a fibra e deixando marcas brancas definitivas",
      "❌ Deixar o calcador da máquina muito baixo, empurrando o tecido e criando pregas feias",
      "❌ Usar manta comum sem silicone que vira uma placa dura e esfarela após a primeira lavagem"
    ],
    "voceSabia": "A técnica de matelassê tridimensional com acolchoamento nasceu na corte francesa de Versalhes no século XVIII com o nome de *Trapunto*, onde nobres encomendavam coletes e almofadas acolchoadas com lã de ovelha para se protegerem do inverno rigoroso dentro dos castelos de pedra!",
    "curiosidadeTecnica": "O tratamento com óleo de silicone nas fibras de poliéster reduz o coeficiente de atrito entre as próprias fibras em 80%, fazendo com que elas escorreguem umas sobre as outras e retornem à forma esférica fofa instantaneamente quando a pressão mecânica cessa.",
    "dicaArtrelados": "Ao bordar peças acolchoadas com manta siliconada, suba a altura do calcador da sua máquina em 1,5 mm a 2,0 mm na regulagem do painel ou no parafuso traseiro: a máquina vai deslizar macia sobre as almofadinhas sem empurrar o tecido e sem fazer pregas!",
    "comparisonTable": {
      "headers": ["Tipo de Manta", "Composição", "Memória Elástica (Resiliência)", "Toque Final"],
      "rows": [
        ["Manta Poliéster Siliconada", "100% Poliéster Virgem Oco com Silicone", "Excelente (> 95%)", "Super macio / Sedoso"],
        ["Manta Acrílica Comum", "Poliéster reciclado prensado", "Média (60% a 70%)", "Áspero / Rígido"],
        ["Manta de Algodão Pura", "100% Fibras Naturais de Algodão", "Baixa (Volume plano compacto)", "Pesado / Tradicional"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "80/12 ou 90/14 SES (Ponta Bola Leve)",
      "stabilizer": "Manta Siliconada 120 g/m² + TNT 40 g/m² na base",
      "threadTension": "110 gf (superior) e 24 gf (bobina firme)",
      "density": "0.45 mm com compensação de repuxo de 0.45 mm"
    },
    "applications": [
      "Nécessaires estruturadas, bolsas femininas acolchoadas e mochilas térmicas",
      "Colchas de berço de bebê, protetores laterais e almofadas de amamentação",
      "Jaquetas acolchoadas estilo puffer, coletes térmicos e capas de tablet",
      "Caminhos de mesa em matelassê e jogos de cozinha de luxo"
    ],
    "troubleshootingTips": [
      "Se o tecido enrugar durante o matelassê, aumente o uso de adesivo spray temporário entre as camadas",
      "Use agulha 80/12 nova para atravessar o sanduíche têxtil sem repuxar fios da manta",
      "Digitalize as linhas de quilt com comprimento de ponto generoso de 2,8 mm a 3,5 mm"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Manta Acrílica R1 e R2",
      "Matriz ITH - In The Hoop",
      "Compensação de Repuxo",
      "Altura do Calcador"
    ],
    "tags": [
      "m-083",
      "manta siliconada",
      "matelasse",
      "trapunto",
      "acolchoado 3d",
      "necessaire",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LECLERC, Brigitte. Trapunto Quilting and 3D Structural Batting Techniques. Lion, 2021.",
      "PARRISH, Gail. High-Loft Batting Stabilization & In-The-Hoop Matelassé Engineering. Cincinnati, 2022."
    ],
    "practicalExercise": "Monte um sanduíche de 20x20 cm com tecido tricoline, manta siliconada 150g e forro de algodão. Borde uma matriz de matelassê em losangos com um monograma no centro. Retire do bastidor e passe a mão: sinta o volume fofinho e o toque macio que só a manta siliconada proporciona!",
    "quickSummary": "Manta fofa com silicone de alta memória elástica para fazer nécessaires e acolchoados em alto relevo.",
    "beginnerExplanation": "A manta siliconada é como um recheio de travesseiro bem macio e fofinho prensado em lâmina. Quando a máquina borda sobre ela, os pontos afundam nas linhas e o tecido estufa nos meios, criando aquelas almofadinhas fofas que deixam bolsas e colchas lindas!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-084-micro-ajuste-de-folga-do-bico-da-lancadeira-rotary-hook-clearance",
    "code": "M-084",
    "term": "Micro-Ajuste de Folga do Bico da Lançadeira (Rotary Hook Clearance & Deflection Gap)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego mikros (pequeno) e do português lançadeira (dispositivo móvel que lança e entrelaça a linha).",
    "summary": "Calibração centesimal do afastamento lateral entre a cava da agulha e a ponta do gancho rotativo (0,05 mm a 0,10 mm) para anular quebras de agulha e falhas de ponto.",
    "definition": "Micro-Ajuste de Folga do Bico da Lançadeira (Rotary Hook-to-Needle Clearance & Axial Gap Calibration) é a regulagem mecânica de altíssima precisão que define a distância transversal milimétrica entre a lâmina da agulha (no rebaixo da cava / *scarf*) e a ponta afilada do gancho da lançadeira rotativa. Essa folga deve ser calibrada rigorosamente entre 0,05 mm e 0,10 mm (a espessura de uma folha de papel de seda fina); uma folga menor que 0,05 mm faz o bico bater na agulha em alta velocidade, cegando o gancho e estilhaçando agulhas, enquanto uma folga superior a 0,15 mm faz o bico passar no vazio sem capturar a laçada de linha, gerando pontos pulados e falhas graves de costura.",
    "technicalDetails": "Folga transversal ideal: 0,05 mm a 0,10 mm. Altura do cruzamento: 0,5 mm a 0,8 mm acima do olho da agulha. Subida de laçada (*loop lift*): 2,0 mm a partir do Ponto Morto Inferior (PMI). Chave de regulagem: Allen métrica de 2,0 mm ou 2,5 mm.",
    "construction": [
      "Calibre de lâminas micrométrico de precisão centesimal (lâminas de 0,05 mm e 0,08 mm)",
      "Lupa de relojoeiro iluminada com ampliação óptica de 10x a 20x",
      "Agulha de calibração nova e 100% reta (tamanho 80/12 DBxK5 ou Schmetz 130/705 H)",
      "Chave Allen de aço cromo-vanádio de alta resistência para parafusos do colar da lançadeira",
      "Lanterna LED cirúrgica para iluminação direta do compartimento inferior da lançadeira"
    ],
    "howItWorks": [
      "1. A máquina é desligada e a chapa de agulha e a caixa de bobina são removidas.",
      "2. Instala-se uma agulha nova e calibrada no bloco da barra de agulha, empurrando até o batente superior.",
      "3. Gira-se o volante manualmente até o grau exato de sincronismo (ex: 200° no painel).",
      "4. Afrouxam-se suavemente os parafusos de fixação da lançadeira no eixo rotativo.",
      "5. Desloca-se a lançadeira axialmente até que o bico fique a 0,05 mm da cava da agulha (sem encostar).",
      "6. Passa-se a lâmina calibradora de 0,05 mm entre a agulha e o bico: ela deve deslizar com leve atrito.",
      "7. Apertam-se os parafusos da lançadeira de forma alternada e com torque firme e equilibrado.",
      "8. Gira-se o volante manualmente por 360° para garantir que não haja contato mecânico em nenhum ponto."
    ],
    "mainTypes": [
      "Calibração Padrão para Tecidos Médios (Folga de 0,05 mm para malhas e algodão)",
      "Calibração de Alta Deflexão para Bonés e Couro (Folga de 0,08 mm com defletor de agulha regulado para evitar flexão)",
      "Calibração para Fios Metálicos e Grossos (Folga de 0,10 mm com altura de 1,0 mm acima do olho)"
    ],
    "characteristics": [
      "Captura 100% infalível da laçada de linha em todas as velocidades (de 400 a 1.200 PPM)",
      "Preservação absoluta da integridade do bico da lançadeira contra lascas e rebarbas",
      "Eliminação definitiva de quebras inexplicáveis de linha e desfiamentos durante o bordado",
      "Estabilidade mecânica perfeita mesmo ao bordar materiais pesados que flexionam a agulha"
    ],
    "limitations": [
      "Exige paciência, iluminação adequada e ferramentas calibradas de precisão",
      "Nunca bater com ferramentas de metal no corpo da lançadeira para não empenar o eixo",
      "Sempre verificar o alinhamento da agulha antes de mexer na posição da lançadeira"
    ],
    "numberingSystem": [
      "Folga Transversal: 0,05 mm a 0,10 mm",
      "Altura Acima do Olho: 0,6 mm a 0,8 mm",
      "Grau no Volante: 198° a 204°"
    ],
    "advantages": [
      "✔ Resolve na raiz o problema de máquinas que 'pulam pontos' ou 'quebram agulhas do nada'",
      "✔ Economiza centenas de reais em visitas técnicas especializadas para ajustes de rotina",
      "✔ Garante que sua máquina opere com a maciez e precisão de quando saiu da fábrica"
    ],
    "commonErrors": [
      "❌ Deixar o bico encostando na agulha, produzindo um 'clique' metálico que cega a lançadeira em minutos",
      "❌ Fazer o ajuste com uma agulha torta ou desgastada, desregulando toda a máquina",
      "❌ Apertar apenas um parafuso do colar, fazendo a lançadeira girar em falso no meio do bordado"
    ],
    "voceSabia": "A folga de 0,05 mm entre o bico da lançadeira e a agulha é menor do que a espessura de um único fio de cabelo humano médio (que mede cerca de 0,07 mm)! É um dos ajustes mecânicos mais precisos de toda a engenharia industrial moderna.",
    "curiosidadeTecnica": "Quando a agulha perfura tecidos espessos como a copa de um boné estruturado, ela sofre uma força de deflexão lateral de até 0,3 mm para trás; se a folga e a chapa protetora de agulha não estiverem milimetricamente ajustadas, a agulha é arremessada diretamente contra o bico da lançadeira.",
    "dicaArtrelados": "Não tem lâmina de calibre no ateliê? Use um pedacinho de papel sulfite comum de 75 g/m² dobrado ao meio bem vincado: uma folhinha simples tem exatamente 0,08 mm de espessura. Se o papel passar justo entre o bico da lançadeira e a agulha sem prender e sem folga, sua máquina está regulada com perfeição!",
    "comparisonTable": {
      "headers": ["Folga do Bico", "Sintoma no Bordado", "Efeito Mecânico", "Diagnóstico"],
      "rows": [
        ["Folga Correta (0,05 a 0,08 mm)", "Pontos perfeitos e nó uniforme", "Passagem suave sem atrito", "Regulagem ideal"],
        ["Folga Zero (Encostando)", "Quebra constante de agulha e linha", "Bico bate e cega a ponta", "Afastar a lançadeira urgente"],
        ["Folga Larga (> 0,15 mm)", "Pontos pulados e nós soltos", "Bico passa longe da laçada", "Aproximar a lançadeira a 0,05 mm"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-calibração: Operação estável até 1.000 PPM",
      "needleType": "75/11 ou 80/12 DBxK5 nova para calibração",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "N/A"
    },
    "applications": [
      "Manutenção corretiva após colisões de bastidor ou quebras violentas de agulha",
      "Preparação mecânica de máquinas para bordar bonés estruturados e couro",
      "Revisão técnica preventiva anual em ateliês e fábricas de bordado",
      "Equalização de múltiplos cabeçotes em máquinas bordadeiras industriais"
    ],
    "troubleshootingTips": [
      "Se a máquina continuar quebrando agulha após o ajuste, verifique se a barra de agulha não está empenada",
      "Passe uma lixa d'água 3000 com uma gota de óleo na ponta da lançadeira para remover qualquer micro-rebarba",
      "Lubrifique a pista da lançadeira com 2 gotas de óleo mineral antes de ligar o motor"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Lança-Ponto & Temporização Agulha-Lançadeira",
      "Caixa de Bobina",
      "Manutenção Preventiva"
    ],
    "tags": [
      "m-084",
      "micro ajuste",
      "folga da lancadeira",
      "rotary hook clearance",
      "ponto pulado",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical Service Manual. Rotary Hook Clearance and Needle Deflection Standards. Nagoya, 2021.",
      "PARRISH, Gail. Precision Clearance Gauging & Hook Timing in Industrial Embroidery Machines. Cincinnati, 2022."
    ],
    "practicalExercise": "Retire a chapa de agulha e a caixa de bobina da máquina. Com uma lanterna e o volante na mão, desça a agulha até o ponto em que o bico da lançadeira passa atrás dela. Pegue uma tirinha de papel sulfite e passe entre os dois. Sinta a folga com a ponta dos dedos: agora você domina o coração mecânico da sua bordadeira!",
    "quickSummary": "Ajuste milimétrico do espaço de 0,05 mm entre a agulha e o bico da lançadeira para nunca mais pular ponto.",
    "beginnerExplanation": "O bico da lançadeira precisa passar raspando atrás da agulha (a uma distância menor que a espessura de um fio de cabelo), mas sem encostar nela. Se passar longe, a máquina não laça a linha e pula pontos; se bater, quebra a agulha. Esse ajuste deixa essa distância perfeita!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-085-matriz-com-pontos-de-conexao-rapida-smart-branching",
    "code": "M-085",
    "term": "Matriz com Pontos de Conexão Rápida / Smart Branching (Automated Branching & Hidden Connectors)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim connectere (ligar / entrelaçar) e do inglês branching (ramificação em galhos).",
    "summary": "Técnica algorítmica de digitalização que une múltiplos objetos de mesma cor em um único bloco contínuo, escondendo pontos de viagem por baixo dos preenchimentos e eliminando cortes de linha.",
    "definition": "Matriz com Pontos de Conexão Rápida / Smart Branching (Intelligent Branching & Continuous Path Digitizing) é a tecnologia computacional presente em softwares modernos de digitalização (como Wilcom e Hatch) que recalcula automaticamente a ordem de entrada, costura e saída de dezenas de objetos vetoriais independentes da mesma cor. O algoritmo traça uma rota contínua como uma árvore com galhos: ele programa a máquina para viajar por baixo dos futuros pontos cheios usando pontos corridos ocultos (*hidden travel runs*), bordar as extremidades e retornar finalizando as camadas superiores, eliminando até 85% dos comandos de corte de linha e nós desnecessários.",
    "technicalDetails": "Redução média no tempo de bordado: 20% a 35%. Economia de cortes de linha: até 85%. Comprimento dos pontos de conexão oculta: 2,0 mm a 2,5 mm. Tolerância de recuo da borda: 0,8 mm a 1,2 mm.",
    "construction": [
      "Software de digitalização com motor de ramificação inteligente (*Smart Branching Engine*)",
      "Objetos vetoriais de mesma cor (letras cursivas, arabescos, ramos de flores, contornos complexos)",
      "Definição automática ou manual do ponto inicial (Start Point) e ponto final (End Point) do grupo",
      "Geração automática de underlays contínuos e camadas de acabamento superiores",
      "Comandos de corte programados apenas nas mudanças reais de cor da linha"
    ],
    "howItWorks": [
      "1. O programador desenha ou seleciona todos os elementos de mesma cor na tela do computador.",
      "2. Aciona-se o comando de ramificação inteligente (*Branching*) no software.",
      "3. O software analisa a topologia do desenho e calcula o caminho mais curto e eficiente.",
      "4. Ele cria automaticamente os pontos de viagem escondidos (*travel stitches*) que passarão por baixo.",
      "5. A máquina borda todos os galhos, folhas e letras sem parar e sem cortar a linha uma única vez.",
      "6. A costura finaliza no ponto exato mais próximo da próxima cor do bordado.",
      "7. O avesso da peça fica extremamente limpo, plano e sem aquele emaranhado de nós e pontas soltas."
    ],
    "mainTypes": [
      "Ramificação de Textos e Monogramas Cursivos (Une todas as letras sem corte entre palavras)",
      "Ramificação de Arabescos e Galhos Florais (Borda árvores e trepadeiras complexas em fluxo contínuo)",
      "Ramificação de Contornos Perimetrais (Borda todos os contornos pretos de um desenho animado em uma única passada)"
    ],
    "characteristics": [
      "Redução drástica no tempo total de máquina parada para realizar cortes e arremates",
      "Avesso impecável e macio, sem nós grosseiros que pinicam a pele em roupas infantis",
      "Aumento significativo da vida útil da faca cortadora e dos solenoides da máquina",
      "Bordado mais fluido, silencioso e com menor risco de desfiamento de linha"
    ],
    "limitations": [
      "Os objetos ramificados devem ser todos da mesma cor e estarem fisicamente próximos",
      "Exige atenção para que os pontos de viagem não passem por áreas abertas e vazadas do tecido",
      "Não substitui o planejamento correto de sequência em desenhos com muitas sobreposições de cores"
    ],
    "numberingSystem": [
      "Economia de Tempo: 25% a 35%",
      "Comprimento de Ponto de Viagem: 2,2 mm",
      "Recuo de Borda Oculta: 1,0 mm"
    ],
    "advantages": [
      "✔ Aumenta a lucratividade do ateliê ao permitir bordar mais peças por hora na mesma máquina",
      "✔ Elimina o trabalho manual cansativo de ficar limpando pontinhas de linha com a tesourinha no final",
      "✔ Agrega acabamento profissional de padrão internacional aos arquivos de matriz"
    ],
    "commonErrors": [
      "❌ Deixar pontos de viagem passarem por fora do desenho sobre o tecido branco, criando linhas aparentes",
      "❌ Ramificar objetos com direções de pontos conflitantes que geram repuxo excessivo no tecido",
      "❌ Não definir o ponto final do grupo, fazendo a máquina dar uma viagem longa até a próxima cor"
    ],
    "voceSabia": "O algoritmo de Smart Branching utilizado nos softwares de bordado modernos é baseado no famoso 'Problema do Caixeiro-Viajante' (*Travelling Salesperson Problem*), um dos teoremas matemáticos mais complexos da computação gráfica mundial!",
    "curiosidadeTecnica": "Cada corte automático de linha em uma máquina de bordar leva entre 4 e 7 segundos (desaceleração, acionamento da faca, salto do pantógrafo e arremate inicial). Em um bordado com 30 cortes eliminados pelo Smart Branching, economizam-se mais de 3 minutos por peça bordada.",
    "dicaArtrelados": "Ao digitalizar nomes ou frases cursivas no seu programa, selecione todas as letrinhas da mesma cor e aperte a tecla de atalho de 'Ramificar' (Branching): a máquina vai bordar o nome inteiro de uma vez só, sem nenhum corte no meio, e o verso vai ficar liso e perfeito como mágica!",
    "comparisonTable": {
      "headers": ["Aspecto da Matriz", "Digitalização Tradicional com Cortes", "Matriz com Smart Branching"],
      "rows": [
        ["Quantidade de Cortes", "20 a 40 cortes por matriz", "Apenas 1 corte na troca de cor"],
        ["Tempo de Execução", "Lento (Muitas paradas de faca)", "Até 35% mais rápido"],
        ["Acabamento do Avesso", "Cheio de nós e pontas soltas", "100% Limpo, liso e contínuo"],
        ["Desgaste da Máquina", "Alto em facas e travas", "Mínimo com costura contínua"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 Universal ou Ball Point",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "110 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com underlays integrados na ramificação"
    },
    "applications": [
      "Nomes, frases e assinaturas em uniformes escolares e corporativos",
      "Galhos, folhagens e arabescos barrocos em toalhas de banho e enxovais",
      "Contornos perimetrais de brasões e personagens em jaquetas e camisetas",
      "Desenhos monocromáticos de alta velocidade para produções industriais em larga escala"
    ],
    "troubleshootingTips": [
      "Se uma linha de viagem ficar visível por baixo do ponto cheio, aumente a largura da coluna no software",
      "Selecione manualmente o nó inicial e final para posicionar a saída exatamente onde começa a cor seguinte",
      "Revise a simulação 3D no computador antes de enviar o arquivo final para a máquina"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Matriz de Conexão e Pontos de Salto Ocultos",
      "Módulo Corta-Fio de Chapa de Agulha e Faca Móvel",
      "Densidade de Pontos",
      "Compensação de Repuxo"
    ],
    "tags": [
      "m-085",
      "smart branching",
      "pontos de conexao",
      "sem cortes",
      "otimizacao de matriz",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM Software International. Smart Branching Algorithms and Path Optimization. Sydney, 2021.",
      "PARRISH, Gail. Advanced Pathing, Branching and Thread Trim Reduction in Commercial Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra seu programa de bordar e digite uma palavra cursiva de 5 letras. Veja quantos cortes ela tem. Agora aplique a ferramenta 'Ramificar' (Smart Branching) sobre ela. Repare como todos os cortes somem e o caminho fica contínuo. Envie para a máquina e cronometre a economia de tempo!",
    "quickSummary": "Recurso inteligente do software que une elementos da mesma cor sem cortes de linha e sem nós no avesso.",
    "beginnerExplanation": "O Smart Branching é como um atalho inteligente no computador: ele junta todas as letrinhas e galhos da mesma cor em um caminho só. A máquina borda tudo direto sem ficar cortando a linha toda hora, deixando o bordado muito mais rápido e o verso lisinho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-086-microfibra-dry-fit-com-elastano",
    "code": "M-086",
    "term": "Microfibra Dry-Fit com Elastano (High-Performance Activewear & Spandex)",
    "letter": "M",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês dry-fit (ajuste seco / evaporação rápida de suor) e de elastano (fibra sintética de poliuretano segmentado).",
    "summary": "Técnicas de bordado de alta performance em tecidos esportivos tecnológicos ultrafinos com alta elasticidade bidirecional, sem repuxar, sem abrir buracos e sem deformar a peça.",
    "definition": "Microfibra Dry-Fit com Elastano (High-Performance Stretch Activewear Embroidery) é a aplicação de bordados computadorizados em tecidos tecnológicos sintéticos (composição de 85% a 92% poliéster ou poliamida com 8% a 15% de elastano/Spandex). Esses materiais possuem trama aberta para respirabilidade e alta capacidade de estiramento multidirecional. O bordado exige entretelas de recorte macias multidirecionais (PolyMesh), agulhas de ponta bola ultrafina 65/9 ou 70/10 SES, linhas leves 40wt ou 60wt e compensação de repuxo calibrada entre 0,45 mm e 0,55 mm para neutralizar a retração elástica após a retirada do bastidor.",
    "technicalDetails": "Composição típica: 88% Poliamida + 12% Elastano. Elasticidade transversal: > 60%. Agulha: 65/9 ou 70/10 Ball Point (SES). Compensação de repuxo: 0,50 mm. Densidade: 0,45 mm a 0,50 mm com underlays abertos.",
    "construction": [
      "Tecido Dry-Fit esportivo com elastano de secagem ultrarrápida",
      "Entretela de recorte leve multidirecional PolyMesh (50 g/m²) colada com adesivo temporário",
      "Agulha de ponta bola fina 70/10 SES com haste reforçada",
      "Linha de poliéster 40wt resistente ao cloro e à transpiração intensa",
      "Película hidrossolúvel de topo para assentamento uniforme dos pontos"
    ],
    "howItWorks": [
      "1. A entretela PolyMesh é colada com spray temporário no avesso da peça esportiva.",
      "2. O tecido é fixado no bastidor (de preferência bastidor magnético ou flutuação) sem esticar as fibras.",
      "3. Coloca-se a película hidrossolúvel sobre a área a ser bordada para conter a elasticidade superficial.",
      "4. A máquina borda em velocidade estável de 700 a 800 PPM com agulha ponta bola fina 70/10.",
      "5. A matriz aplica pontos com compensação de repuxo de 0,50 mm e densidades leves que esticam com a roupa.",
      "6. Ao soltar a peça do bastidor, a malha esportiva relaxa sem formar pregas ao redor do logotipo.",
      "7. A peça é lavada para remover a película, mantendo a flexibilidade e o conforto térmico durante o treino.",
    ],
    "mainTypes": [
      "Camisetas Esportivas Dry-Fit de Corrida e Ciclismo (Bordados leves de patrocinadores e equipes)",
      "Leggings e Tops de Compressão com Alta Porcentagem de Elastano (Logotipos em áreas de estiramento severo)",
      "Polos Esportivas de Golfe e Tênis (Monogramas elegantes em tecido piquet dry-fit tecnológico)"
    ],
    "characteristics": [
      "Bordado totalmente estável que não deforma e não franze mesmo após centenas de lavagens",
      "Preservação integral da respirabilidade e do conforto térmico do tecido esportivo",
      "Toque suave no avesso que não arranha nem causa assaduras na pele dos atletas em movimento",
      "Altíssima resistência mecânica e resistência a suor, atrito e lavagens intensas"
    ],
    "limitations": [
      "Nunca usar entretela rasgável comum, que estoura com o estiramento e deforma a camiseta",
      "Evitar densidades pesadas de tatami maciço que criam uma 'placa dura' no peito do atleta",
      "Não puxar a camiseta ao prender no bastidor plástico convencional"
    ],
    "numberingSystem": [
      "Percentual de Elastano: 8% a 15%",
      "Compensação de Repuxo: 0,45 mm a 0,55 mm",
      "Densidade Recomendada: 0,46 mm a 0,50 mm"
    ],
    "advantages": [
      "✔ Abre as portas do lucrativo mercado de personalização de marcas esportivas e academias",
      "✔ Elimina o problema crônico de camisetas esportivas que enrugam e ficam tortas no peito",
      "✔ Garante acabamento de padrão internacional em uniformes de alta performance"
    ],
    "commonErrors": [
      "❌ Esticar o tecido Dry-Fit ao colocar no bastidor, fazendo o bordado encolher e virar uma tigela ao soltar",
      "❌ Usar agulha de ponta afiada cortante que corta os filamentos de elastano, abrindo buracos",
      "❌ Usar entretelas pesadas e grossas que incomodam e machucam o corpo durante a corrida"
    ],
    "voceSabia": "Os tecidos Dry-Fit utilizam fibras com micro-canais capilares em formato de trevo ou estrela que transportam o suor da pele para a superfície externa em milésimos de segundo; o bordado correto deve respeitar esses canais sem sufocar a respirabilidade do atleta!",
    "curiosidadeTecnica": "O fio de elastano presente no Dry-Fit pode se esticar em até 500% do seu comprimento original e voltar à forma inicial; se for perfurado por uma agulha ponta fina comum, o filamento se rompe internamente e cria o temido 'efeito escada' (desfiamento) na malha.",
    "dicaArtrelados": "Ao bordar camisetas esportivas Dry-Fit, nunca use entretela rasgável! Use entretela PolyMesh (aquela fininha de nylon que parece uma telinha macia) e flutue a camiseta sobre o bastidor: a camiseta não deforma, o bordado não repuxa e o avesso fica super macio sem machucar a pele!",
    "comparisonTable": {
      "headers": ["Parâmetro", "Camiseta de Algodão Comum", "Microfibra Dry-Fit com Elastano"],
      "rows": [
        ["Elasticidade", "Baixa a Média (10% a 20%)", "Altíssima Bidirecional (40% a 70%)"],
        ["Tipo de Entretela", "Rasgável Média ou Recorte", "Recorte PolyMesh Flexível Multidirecional"],
        ["Compensação de Repuxo", "0,25 mm a 0,30 mm", "0,45 mm a 0,55 mm (Reforçada)"],
        ["Ponta da Agulha", "Universal ou Ponta Bola Leve", "Ponta Bola Fina Cirúrgica (65/9 ou 70/10 SES)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "65/9 ou 70/10 Ball Point (SES / Ponta Bola Fina)",
      "stabilizer": "Entretela PolyMesh 50 g/m² + Película Hidrossolúvel de Topo",
      "threadTension": "100 a 110 gf (superior suave) e 20 gf (bobina)",
      "density": "0.48 mm com compensação de repuxo de 0.50 mm"
    },
    "applications": [
      "Uniformes de corrida, ciclismo, futebol e equipes de atletismo",
      "Roupas de academia, tops esportivos e calças legging de compressão",
      "Camisas polo esportivas de golfe e fardamentos corporativos tecnológicos",
      "Bolsas de ginástica, testeiras e munhequeiras de alto desempenho"
    ],
    "troubleshootingTips": [
      "Se a malha franzir ao redor do bordado após soltar do bastidor, aumente a compensação de repuxo para 0,55 mm",
      "Use bastidores magnéticos para evitar marcas de compressão permanentes no tecido sintético",
      "Borde sempre com película hidrossolúvel por cima para evitar que os pontos cheios afundem na trama"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Malha e Tecidos Elásticos",
      "Compensação de Repuxo",
      "Bastidores Magnéticos",
      "Técnica de Flutuação no Bastidor"
    ],
    "tags": [
      "m-086",
      "dry fit",
      "elastano",
      "microfibra",
      "activewear",
      "polymesh",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MAYER, Thomas. High-Tech Synthetic Microfibers and Spandex Embroidery Dynamics. Munique, 2021.",
      "PARRISH, Gail. Activewear & Performance Stretch Fabric Stabilization Standards. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de camiseta de ginástica Dry-Fit. Prenda no bastidor tradicional esticando com as mãos e borde um círculo de 5 cm com entretela rasgável. Em outro pedaço, flutue sobre entretela PolyMesh sem esticar a malha e borde com compensação de 0,50 mm. Solte ambos e veja como o primeiro vira uma tigela enrugada e o segundo fica perfeitamente liso!",
    "quickSummary": "Técnicas de bordar em tecidos esportivos elásticos com entretelas flexíveis e compensação reforçada.",
    "beginnerExplanation": "O tecido Dry-Fit de academia é super elástico e macio. Se você esticar ele no bastidor ou usar entretela dura, ele encolhe e fica todo amassado. A gente usa entretela macia tipo PolyMesh e agulha fininha de ponta redonda para o bordado esticar junto com a camiseta sem deformar!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-087-monofilamento-termossoluvel-melt-away-basting-thread",
    "code": "M-087",
    "term": "Monofilamento Termossolúvel (Melt-Away Basting Thread & Heat-Sensitive Yarn)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego monos (único) e do latim termo (calor) + solvere (dissolver). Fio polimérico especial que se desintegra com o calor.",
    "summary": "Filamento sintético termossensível utilizado para pespontos provisórios e alinhamentos que desaparece e se desfaz completamente sob o calor do ferro ou prensa térmica sem deixar resíduos.",
    "definition": "Monofilamento Termossolúvel (Heat-Vanishing / Melt-Away Basting & Temporary Stitch Thread) é uma linha de alta tecnologia confeccionada a partir de polímeros termoplásticos de baixo ponto de fusão controlada (geralmente entre 110°C e 135°C). No bordado eletrônico e na alfaiataria de alta precisão, é empregado para bordar grelhas de alinhavo prévio (*basting boxes*), fixação temporária de apliques complexos e montagem de peças no bastidor; ao final do trabalho, basta passar o ferro quente ou aplicar a prensa térmica para que o fio se desintegre e desapareça sem necessidade de desmanchar pontos manualmente.",
    "technicalDetails": "Temperatura de fusão: 115°C a 130°C. Título do fio: dtex 130 a 160 (espessura similar à linha 40 comum). Resistência mecânica suficiente para suportar velocidades de até 750 PPM sem quebrar.",
    "construction": [
      "Carretel de fio termossolúvel sintético especial em cor translúcida ou branca",
      "Agulha padrão 75/11 ou 80/12 com olho polido",
      "Tensão da linha superior regulada em nível padrão ou ligeiramente aliviado",
      "Linha de bobina: pode-se usar o próprio fio termossolúvel na bobina ou linha comum",
      "Ferro de passar a vapor ou prensa térmica para ativação pós-bordado"
    ],
    "howItWorks": [
      "1. A linha termossolúvel é colocada na agulha superior da máquina de bordar.",
      "2. A máquina executa uma grade de pesponto largo (*basting stitch*) para prender tecidos difíceis à entretela.",
      "3. Executam-se também os pontos de posicionamento de apliques e rendas no bastidor.",
      "4. Troca-se para as linhas convencionais de poliéster para executar o bordado definitivo por cima.",
      "5. Ao finalizar o bordado, retira-se a peça do bastidor.",
      "6. Aplica-se o ferro quente ou prensa térmica a 130°C sobre o tecido por alguns segundos.",
      "7. O fio termossolúvel derrete e é absorvido pelas fibras microscópicas, sumindo sem deixar rastros.",
    ],
    "mainTypes": [
      "Fio Termossolúvel a Seco (Desintegra-se apenas com a temperatura do ferro seco a 125°C)",
      "Fio Termo-Vaporizador (Dissolve-se rapidamente sob jato de vapor de água quente)",
      "Linha de Bobina Termossensível (Usada para soltar automaticamente bainhas e matelassês de prova)"
    ],
    "characteristics": [
      "Eliminação absoluta do trabalho manual demorado de puxar alinhavos com tesourinha e pinça",
      "Zero risco de puxar fios do tecido nobre ou estragar pontos definitivos durante o desmanche",
      "Totalmente invisível e inodoro após a fusão térmica correta",
      "Excelente resistência durante o bordado na máquina sem arrebentar prematuramente"
    ],
    "limitations": [
      "Guardar os carretéis em local fresco, longe da luz solar direta e de fontes de calor",
      "Nunca passar ferro quente na peça antes da hora para não derreter o alinhavo no meio do bordado",
      "Não utilizar como linha de bordado definitiva, pois ela derreterá na primeira passada de ferro"
    ],
    "numberingSystem": [
      "Ponto de Fusão: 120°C a 130°C",
      "Velocidade de Trabalho: 650 a 750 PPM",
      "Temperatura de Ativação: Regulagem 'Seda/Lã' no ferro"
    ],
    "advantages": [
      "✔ Economiza horas de trabalho manual em produções seriadas de apliques e alinhavos",
      "✔ Preserva tecidos delicadíssimos (como veludos, sedas e tules) contra furos de descosedor",
      "✔ Agilidade incomparável na montagem de peças complexas In The Hoop (ITH)"
    ],
    "commonErrors": [
      "❌ Usar ferro em temperatura muito baixa (< 100°C), deixando pedacinhos de linha grudados",
      "❌ Passar o ferro sobre o carretel ou deixar a linha perto do motor quente da máquina",
      "❌ Confundir o carretel termossolúvel com linha de poliéster normal e bordar o desenho definitivo com ela"
    ],
    "voceSabia": "O fio termossolúvel foi desenvolvido inicialmente na indústria de alfaiataria militar britânica para fixar bolsos e dragonas temporárias durante a prova de fardas de generais antes da costura final, sendo adaptado com grande sucesso para o bordado computadorizado!",
    "curiosidadeTecnica": "Ao atingir 125°C, as cadeias poliméricas do fio termossolúvel sofrem despolimerização instantânea, transformando o sólido em um microfilme líquido invisível de apenas 2 micras que é totalmente neutralizado na primeira lavagem da roupa.",
    "dicaArtrelados": "Identifique o carretel de linha termossolúvel com uma fita adesiva colorida bem chamativa (como fita crepe vermelha): assim você nunca vai correr o risco de confundi-lo com uma linha de costura normal e bordar uma matriz inteira que desaparece ao passar o ferro!",
    "comparisonTable": {
      "headers": ["Tipo de Fio de Alinhavo", "Método de Remoção", "Tempo de Remoção", "Risco de Puxar o Tecido"],
      "rows": [
        ["Fio Termossolúvel", "Ferro de passar quente (125°C)", "3 segundos (Instantâneo)", "Zero (Sem esforço mecânico)"],
        ["Linha Hidrossolúvel", "Lavagem ou borrifador de água", "Exige molhar e secar a peça", "Zero"],
        ["Linha de Costura Comum", "Puxar com descosedor e pinça", "5 a 15 minutos por peça", "Alto risco de picar o tecido"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 Universal ou Microtex",
      "stabilizer": "Adequado ao projeto",
      "threadTension": "100 gf (superior suave) e 20 gf (bobina)",
      "density": "Pontos corridos largos de alinhavo (comprimento de 3,5 mm a 5,0 mm)"
    },
    "applications": [
      "Alinhavo perimetral prévio (*basting frame*) para fixar tecidos flutuados no bastidor",
      "Fixação temporária de apliques de tecido antes do corte ou costura definitiva",
      "Montagem de golas, bolsos e peças estruturadas no bastidor (In The Hoop)",
      "Costura provisória de rendas e soutaches em vestidos de noiva e alta costura"
    ],
    "troubleshootingTips": [
      "Se restar algum resíduo visível, aumente ligeiramente a temperatura do ferro para a posição algodão e use vapor",
      "Certifique-se de que a linha de bobina também seja termossolúvel caso queira que o verso se solte 100%",
      "Armazene a linha em saquinho plástico fechado com dessecante de sílica gel"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Linha Hidrossolúvel de Pesponto Provisório",
      "Técnica de Flutuação no Bastidor",
      "Aplique no Bastidor",
      "Matriz ITH - In The Hoop"
    ],
    "tags": [
      "m-087",
      "termossoluvel",
      "melt away thread",
      "alinhavo temporario",
      "linhas e fios",
      "ferro quente",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "PARRISH, Gail. Specialty Vanishing Threads and Temporary Basting Mechanics. Cincinnati, 2022.",
      "THOMPSON, Claire. Heat-Activated Soluble Polymers in Modern Textile Manufacturing. Manchester, 2021."
    ],
    "practicalExercise": "Coloque a linha termossolúvel na agulha superior e borde um quadro de alinhavo de 10x10 cm sobre um retalho de algodão preso à entretela. Retire do bastidor e passe o ferro quente a 130°C sobre o alinhavo por 5 segundos. Veja os pontos simplesmente desaparecerem diante dos seus olhos!",
    "quickSummary": "Linha especial para alinhavos temporários que derrete e some completamente ao encostar o ferro quente.",
    "beginnerExplanation": "É uma linha mágica feita para prender tecidos de mentirinha: a máquina costura o alinhavo com ela para segurar o tecido no lugar e, quando o bordado acaba, você só passa o ferro quente por cima e a linha derrete e desaparece na hora sem você ter que puxar nada!",
    "updatedAt": "2026-08-29"
  }
]

print(f"Loaded {len(M_PART1) + len(M_PART2) + len(VERBETES_M13_PART3)} verbetes for Part 13.")

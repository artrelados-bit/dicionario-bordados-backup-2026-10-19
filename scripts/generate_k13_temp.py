import json
import os

verbetes = [
  {
    "id": "k-075-kalamkari-e-contornos-bordados-em-tecidos-pintados",
    "code": "K-075",
    "term": "Kalamkari & Contornos Bordados em Tecidos Pintados (Kalamkari Hand-Painted Fabric & Fine Line Embroidery)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do persa kalam (caneta de bambu) e kari (artesanato / trabalho artístico). Tradição têxtil secular de Andhra Pradesh e Telangana (Índia) e da antiga Pérsia.",
    "summary": "Técnica de valorização de tecidos de algodão estampados com corantes naturais através de contornos bordados em ponto haste e ponto cheio fino.",
    "definition": "Kalamkari & Contornos Bordados em Tecidos Pintados (Kalamkari Hand-Painted Fabric Embellishment) é a técnica têxtil mista que combina tecidos de algodão cru tingidos e desenhados à mão com canetas de bambu e corantes botânicos naturais (como índigo, raiz de rubia e romã) com bordados eletrônicos ou artesanais de realce. No bordado computadorizado, a técnica consiste em digitalizar linhas de contorno em ponto corrido triplo (bean stitch) e pontos cheios estreitos de 1,2 a 2,0 mm de largura para delinear flores de lótus, arabescos persas e pavões sagrados, criando relevo tátil sem mascarar os degradês das tinturas vegetais.",
    "technicalDetails": "Tecido base em algodão puro mercerizado de 120 a 160 g/m². Linhas de bordado de algodão 50wt ou poliéster fosco (matte) para manter a harmonia estética com os corantes minerais e vegetais.",
    "construction": [
      "Tecido de algodão kalamkari autêntico lavado e pré-encolhido",
      "Entretela rasgável macia de algodão (Cotton Soft 50 g/m²)",
      "Linhas foscas de poliéster ou meadas de algodão com acabamento rústico",
      "Matriz de contornos precisos com ponto corrido quádruplo ou ponto haste digital",
      "Ponto de cobertura em cetim ultrafino para destaques centrais de pétalas"
    ],
    "howItWorks": [
      "1. O tecido kalamkari é posicionado no bastidor com entretela de algodão rasgável.",
      "2. Utiliza-se um gabarito transparente ou câmera de alinhamento para casar o desenho impresso com a matriz.",
      "3. A máquina executa pontos de ancoragem suaves nos nós das flores e folhas.",
      "4. Contornos finos em ponto corrido triplo delineiam as figuras botânicas e mitológicas.",
      "5. Pequenos detalhes em ponto semente ou nó francês digitalizado preenchem os miolos florais.",
      "6. A peça recebe acabamento com vapor seco para realçar a textura natural do algodão.",
      "7. O resultado é uma peça de arte têxtil com relevo sofisticado e alma artesanal."
    ],
    "mainTypes": [
      "Kalamkari Srikalahasti (Temas religiosos e mitológicos desenhados à mão livre)",
      "Kalamkari Machilipatnam (Padrões florais e geométricos com carimbos de madeira)",
      "Kalamkari Contemporâneo com Fios Metálicos Antigos (Ouro envelhecido e cobre)"
    ],
    "characteristics": [
      "Fusão sublime entre pintura botânica tradicional e precisão geométrica do bordado",
      "Toque leve, macio e respirável, ideal para peças de vestuário e decoração nobre",
      "Uso de paletas terrosas: ocre, terracota, mostarda, azul índigo e verde musgo",
      "Alta durabilidade quando bordado com linhas de poliéster fosco de alta tenacidade"
    ],
    "limitations": [
      "Tecidos kalamkari autênticos podem sangrar corantes naturais na primeira lavagem com água quente",
      "Exige alinhamento milimétrico para não 'descasar' o bordado da pintura do tecido",
      "Evitar densidades pesadas de tatami que cobrem a beleza da pintura manual"
    ],
    "numberingSystem": [
      "Gramatura do Algodão: 130 a 160 g/m²",
      "Espessura do Ponto de Contorno: 1,5 mm a 2,2 mm",
      "Densidade Média: 0,38 mm a 0,42 mm"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor percebido a almofadas, quimonos, xales e vestidos de luxo",
      "✔ Valoriza o artesanato ancestral com a agilidade da produção moderna",
      "✔ Criação de peças exclusivas onde cada unidade tem nuances únicas de cor"
    ],
    "commonErrors": [
      "❌ Usar linhas com brilho sintético excessivo que brigam com os tons terrosos do tecido",
      "❌ Borda densa que fura o algodão artesanal criando pequenos rasgos ao redor do desenho",
      "❌ Não fazer teste de solidez de cor do tecido antes de aplicar entretelas a vapor"
    ],
    "voceSabia": "Nos tempos do Império Mogol e das rotas de comércio com a Pérsia, os tecidos Kalamkari eram considerados tão valiosos que serviam como moeda de troca diplomática e trajes cerimoniais de marajás e xás.",
    "curiosidadeTecnica": "O corante vermelho do Kalamkari tradicional é extraído das raízes da planta Rubia cordifolia (Manjistha), que exige banhos de leite de búfala e óleo de gergelim para fixar na fibra celulósica antes do bordado.",
    "dicaArtrelados": "Ao bordar sobre tecidos estampados ou pintados à mão como o Kalamkari, nunca faça preenchimentos sólidos pesados! Use o bordado apenas como 'moldura de luz': contorne as flores com ponto corrido triplo e use uma linha fosca cor de café ou dourado antigo para um acabamento impecável!",
    "comparisonTable": {
      "headers": ["Abordagem de Bordado", "Preservação da Arte Base", "Tempo de Máquina", "Estilo Visual"],
      "rows": [
        ["Contorno Fino & Ponto Haste", "100% visível e valorizada", "Rápido (3 a 5 min)", "Alta Costura Étnica"],
        ["Preenchimento Tatami Total", "0% (cobre toda a pintura)", "Lento (25 a 40 min)", "Pesado e monótono"],
        ["Ponto Cheio Largo (> 4 mm)", "Parcialmente visível", "Médio (10 a 15 min)", "Risco de enrugar o algodão"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "70/10 SES Ponta Bola Leve ou 75/11 Microtex",
      "stabilizer": "Entretela de Algodão Rasgável 50 g/m²",
      "threadTension": "100 a 110 gf (superior) e 20 gf (bobina)",
      "density": "0.40 mm (apenas contornos e detalhes)"
    },
    "applications": [
      "Almofadas étnicas decorativas e mantas de sofá de alto padrão",
      "Quimonos, kaftans e túnicas de verão com visual boho-chic",
      "Bolsas ecológicas e ecobags de linho e algodão artesanal",
      "Quadros e painéis têxteis emoldurados para decoração de interiores"
    ],
    "troubleshootingTips": [
      "Se o tecido repuxar durante o contorno, aumente a compensação de repuxo para 0,35 mm e use duas folhas de entretela rasgável fina",
      "Para tecidos tingidos naturalmente, lave a amostra em água fria com uma pitada de sal antes de montar no bastidor",
      "Utilize agulhas novas número 70/10 para não abrir furos visíveis na trama de algodão"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Kaftans, Túnicas de Seda",
      "Ponto Haste Digitalizado",
      "Compensação de Repuxo",
      "Linhas Foscas de Algodão"
    ],
    "tags": [
      "k-075",
      "kalamkari",
      "tecidos etnicos",
      "algodao indiano",
      "contorno bordado",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "GILLOW, John; BARNARD, Nicholas. Traditional Indian Textiles. London: Thames & Hudson, 2021.",
      "PARRISH, Gail. Ethnic Fabric Embellishment and Digitizing Techniques. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de tecido com estampa floral de algodão. No seu programa de matrizes, crie um traçado em ponto corrido triplo contornando apenas o perfil externo de uma flor. Borde com linha fosca cor de terra e veja como o desenho salta aos olhos com elegância!",
    "quickSummary": "Técnica de contornar e realçar com bordado fino os tecidos indianos pintados à mão com tintas naturais.",
    "beginnerExplanation": "O Kalamkari é aquele tecido lindo de algodão desenhado à mão com tintas da natureza. O segredo no bordado é só contornar as florzinhas com uma linhazinha fina e charmosa, fazendo a pintura parecer que está saltando para fora do tecido!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-076-kelsch-da-alsacia-linho-xadrez-tradicional-para-monogramas",
    "code": "K-076",
    "term": "Kelsch da Alsácia: Linho Xadrez Tradicional para Monogramas (Alsatian Kelsch Linen & Red-Work Monograms)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do dialeto alsaciano kelsch / kölnisch (tecido estilo Colônia). Tecido histórico camponês da região da Alsácia (França/Alemanha) produzido desde a Idade Média.",
    "summary": "Tecido clássico de linho e algodão xadrez azul ou vermelho, base tradicional dos monogramas e enxovais nobres europeus.",
    "definition": "Kelsch da Alsácia (Alsatian Checked Linen & Gingham Heritage Fabric) é o tecido nobre de tecelagem artesanal com padronagem xadrez fechada, composto por urdume e trama de linho puro e algodão cru (fiação 'metis'). Caracterizado pelas combinações históricas de fios tintos em azul índigo (*bleu pastel*) e vermelho de rubia (*rouge garance*), é o suporte tradicional para bordados de monogramas familiares, letrismos góticos e motivos campestres em ponto cruz e ponto cheio denso com fios brancos e vermelhos.",
    "technicalDetails": "Composição típica de 50% linho e 50% algodão ou 100% linho rústico (gramatura de 180 a 240 g/m²). Trama estruturada de alta estabilidade dimensional que resiste a lavagens centenárias a 90 °C.",
    "construction": [
      "Fios de linho puro penteado e algodão pré-alvejado",
      "Padronagem xadrez tecida em teares de lançadeira clássicos",
      "Entretela hidrossolúvel espessa ou rasgável macia de celulose",
      "Linhas de bordado em algodão egípcio perlé ou poliéster brilhante 40wt",
      "Acabamento com ponto festonê ou bainha ajour nas bordas"
    ],
    "howItWorks": [
      "1. O tecido Kelsch é cortado rigorosamente no fio reto, respeitando as linhas do xadrez.",
      "2. O centro do monograma ou desenho é alinhado no cruzamento exato das listras do tecido.",
      "3. Utiliza-se entretela rasgável de algodão por baixo para manter a firmeza da trama.",
      "4. Se a matriz tiver pontos cheios largos, aplica-se uma película hidrossolúvel no topo para evitar que a textura rústica engula os pontos.",
      "5. A máquina borda o monograma histórico com fios em contraste clássico (branco alvejado ou vermelho sangue).",
      "6. A peça é passada a ferro bem quente com vapor, acomodando as fibras de linho.",
      "7. A peça ganha a solidez e elegância dos enxovais de castelos europeus."
    ],
    "mainTypes": [
      "Kelsch Bleu (Xadrez azul índigo e cru para copa e cozinha nobre)",
      "Kelsch Rouge (Xadrez vermelho garance clássico para enxovais de casamento)",
      "Kelsch Tricolore (Combinação sofisticada de azul, vermelho e linho cru)"
    ],
    "characteristics": [
      "Aspecto rústico, nobre e com caimento encorpado inconfundível",
      "Altíssima durabilidade: tecidos que duram gerações sem deformar",
      "Excelente receptividade a bordados de monogramas em relevo alto",
      "Textura agradável que fica cada vez mais macia a cada lavagem"
    ],
    "limitations": [
      "Bordados desalinhados com as linhas do xadrez ficam visivelmente tortos a olho nu",
      "O linho encolhe entre 4% e 8% na primeira lavagem quente se não for pré-lavado",
      "Exige controle rigoroso da compensação de repuxo para não entortar o xadrez"
    ],
    "numberingSystem": [
      "Gramatura Típica: 200 a 240 g/m²",
      "Largura do Xadrez: 5x5 mm a 15x15 mm",
      "Densidade Recomendada de Monograma: 0,38 mm a 0,42 mm"
    ],
    "advantages": [
      "✔ Peça com apelo premium europeu para jogos americanos, toalhas e guardanapos",
      "✔ Valor agregado excepcional para presentes de casamento e bodas",
      "✔ Facilidade de enquadramento guiado pelas próprias listras do tecido"
    ],
    "commonErrors": [
      "❌ Prender o tecido torto no bastidor, cruzando as linhas do xadrez diagonalmente",
      "❌ Bordar sem pré-encolher o tecido de linho antes de costurar a bainha",
      "❌ Usar cores fluorescentes modernas que anulam a harmonia rústica tradicional"
    ],
    "voceSabia": "Na Alsácia do século XVIII, o número de peças de Kelsch bordadas com as iniciais da noiva definia o dote do casamento, e os lençóis de linho eram guardados em arcas de carvalho como herança de família por mais de 100 anos.",
    "curiosidadeTecnica": "A fibra de linho tem resistência à tração 30% maior quando está molhada do que quando seca, permitindo que tecidos Kelsch bordados fossem fervidos em tachos de cobre sem arrebentar as costuras.",
    "dicaArtrelados": "Ao bordar guardanapos ou jogos americanos em tecido xadrez como o Kelsch, use as linhas do próprio tecido como esquadro perfeito! Marque o meio do monograma exatamente no cruzamento de um quadrado do xadrez: o alinhamento visual fica tão perfeito que parece feito sob encomenda por mestres alfaiates!",
    "comparisonTable": {
      "headers": ["Tecido de Enxoval", "Composição", "Estabilidade do Xadrez", "Nobreza do Bordado"],
      "rows": [
        ["Kelsch Tradicional", "50% Linho / 50% Algodão", "Altíssima e encorpada", "Herança Europeia Premium"],
        ["Chita de Algodão", "100% Algodão fino", "Média (trama mais mole)", "Casual / Rústico simples"],
        ["Tecido Sintético Estampado", "100% Poliéster", "Baixa (escorrega fácil)", "Básico comercial"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES ou 80/12 Ponta Lança / Microtex",
      "stabilizer": "Entretela Rasgável 50 g/m² ou Hidrossolúvel de topo",
      "threadTension": "110 a 120 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com ponto cheio bem definido"
    },
    "applications": [
      "Jogos de mesa posta de luxo, guardanapos e trilhos de mesa",
      "Almofadas rústicas no estilo 'French Country' e chalé alpino",
      "Aventais de cozinha nobres e panos de prato de alta absorção",
      "Enxovais de casamento com monogramas clássicos e brasões de família"
    ],
    "troubleshootingTips": [
      "Se os pontos de ponto cheio afundarem na textura do linho rústico, coloque uma camada de filme hidrossolúvel leve por cima",
      "Para evitar que o xadrez entorte, prenda o bastidor com pressão firme e uniforme em todos os lados",
      "Passe a peça pelo avesso sobre uma toalha macia para que o monograma fique com relevo alto e fofinho"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Monogramas & Letreiros",
      "Ponto Cheio (Satin Stitch)",
      "Entretela Hidrossolúvel",
      "Enxovais de Mesa"
    ],
    "tags": [
      "k-076",
      "kelsch",
      "linho alsaciano",
      "xadrez",
      "monogramas",
      "mesa posta",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MUSEE DU TEXTILE D'ALSACE. Kelsch: Le tissu traditionnel alsacien. Wesserling, 2022.",
      "PARRISH, Gail. Classic European Monogramming and Linen Stitching. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue um pedaço de tecido xadrez encorpado de linho. Digitalize uma letra maiúscula clássica com serifas finas em ponto cheio. Centralize a letra bem no miolo de um dos quadrados do xadrez e borde com linha branca alvejada. Veja como a simetria cria uma peça digna de boutique de luxo!",
    "quickSummary": "Tecido clássico de linho xadrez europeu para bordar monogramas de casamento e jogos de mesa luxuosos.",
    "beginnerExplanation": "É aquele tecido de linho xadrez maravilhoso típico da Europa, nas cores azul ou vermelho. Ele é firme, super nobre e perfeito para bordar aquelas letras de iniciais chiques com linha branca em guardanapos e toalhas de mesa!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-077-karakul-e-las-encaracoladas-em-casacos-e-tapecarias-nobres",
    "code": "K-077",
    "term": "Karakul & Lãs Encaracoladas em Casacos e Tapeçarias (Karakul Astrakhan Fur & Curly Wool Embroidery)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do topônimo Karakul (lago negro no Uzbequistão / Ásia Central), berço histórico da raça de ovinos produtora da lã 'Astracã'.",
    "summary": "Técnicas de bordado em tecidos de lã com cachos densos, imitações de pele de astracã e pelúcias texturizadas de alta espessura.",
    "definition": "Karakul & Lãs Encaracoladas (Karakul Curly Wool & Faux Astrakhan Fur Stitching) é a modalidade técnica de bordado especializada em tecidos e peças de vestuário confeccionados com lãs de textura espiralada densa, pelo encaracolado brilhante e tecidos pesados de inverno (como jaquetas de lã bouclé, capas e estofamentos nobres). Exige a aplicação obrigatória de película hidrossolúvel de alta gramatura (ou organza invisível) na superfície superior para calçar as laçadas e impedir que os cachos de lã engulam os pontos de bordado, além do uso de agulhas reforçadas e compensação de repuxo ampliada.",
    "technicalDetails": "Gramaturas que variam de 350 a 650 g/m² com altura de pelo encaracolado de 4 a 10 mm. Uso de agulhas 80/12 SES ou 90/14 com ponta bola média para abrir espaço na malha sem romper os cachos de lã.",
    "construction": [
      "Base de tecido Karakul natural ou sintético de alta densidade",
      "Entretela de recorte pesada de poliéster (Cutaway 80 g/m²)",
      "Película plástica hidrossolúvel espessa de 35 a 45 micras no topo",
      "Linha de poliéster 40wt ou fios metálicos com lubrificação de silicone",
      "Underlay denso em grade tatami cruzada de 90° com margem de 1,5 mm"
    ],
    "howItWorks": [
      "1. A peça de Karakul é montada no bastidor com entretela de recorte grossa por baixo.",
      "2. Coloca-se a película hidrossolúvel espessa cobrindo 100% da área de bordado.",
      "3. A máquina executa um alinhavo perimetral (basting box) para esmagar os cachos de lã sob o plástico.",
      "4. Um underlay denso cria uma plataforma rígida sobre os pelos encaracolados.",
      "5. Os pontos cheios e tatamis são bordados por cima da plataforma, ficando com relevo nítido e plano.",
      "6. Retira-se a peça do bastidor e remove-se o plástico superficial.",
      "7. Aplica-se ar quente ou vapor leve para sumir com os resíduos plásticos, liberando os cachos ao redor do bordado."
    ],
    "mainTypes": [
      "Karakul / Astracã Sintético (Para casacos de inverno de luxo e golas)",
      "Lã Bouclé Encaracolada (Para tailleurs femininos estilo Chanel e mantas)",
      "Tapeçarias de Lã Grossa da Ásia Central com Brasões Bordados"
    ],
    "characteristics": [
      "Visual imponente de alta costura com contraste entre a lã rústica e o brilho do bordado",
      "Toque quente e encorpado característico de peças de inverno rigoroso",
      "Exige matrizes bem estruturadas com pontos de largura mínima de 3,0 mm",
      "Alta proteção térmica e acústica nas peças finalizadas"
    ],
    "limitations": [
      "Letras menores que 15 mm de altura desaparecem e afundam nos cachos da lã",
      "Não prender o Karakul com aperto excessivo no bastidor mecânico para não 'quebrar' os cachos",
      "Evitar o uso de tesouras comuns que possam tosquiar os pelos do tecido ao refilar linhas"
    ],
    "numberingSystem": [
      "Gramatura do Tecido: 350 a 600 g/m²",
      "Espessura do Filme Plástico de Topo: 35 a 50 micras",
      "Tamanho Mínimo de Letras: 15 mm a 20 mm de altura"
    ],
    "advantages": [
      "✔ Acabamento impecável em casacos nobres e golas de inverno",
      "✔ Peças com preço de venda elevado e altíssima margem de lucro",
      "✔ Conforto e durabilidade incomparáveis em climas frios"
    ],
    "commonErrors": [
      "❌ Bordar sem filme hidrossolúvel no topo, fazendo a linha sumir no meio da lã",
      "❌ Usar entretela rasgável fina, fazendo o bordado repuxar e distorcer a jaqueta",
      "❌ Prender o tecido com muita força no bastidor criando marcas permanentes de esmagamento"
    ],
    "voceSabia": "Historicamente, o tecido Karakul era chamado de 'Ouro Negro de Samarcanda' e era usado para confeccionar os tradicionais gorros papakha dos povos das montanhas do Cáucaso e Ásia Central.",
    "curiosidadeTecnica": "A estrutura helicoidal da fibra de lã Karakul tem uma elasticidade de compressão de até 40%. Se você não usar uma base de underlay em grade dupla, a mola natural da fibra empurra a linha de bordar para cima, soltando os pontos.",
    "dicaArtrelados": "Ao bordar tecidos de lã encaracolada ou pelúcia tipo carneirinho, nunca use bastidor com parafuso apertado demais! Use bastidor magnético ou técnica de flutuação, e sempre coloque um plástico hidrossolúvel de boa qualidade por cima: o bordado fica perfeito e parece que está flutuando sobre a lã!",
    "comparisonTable": {
      "headers": ["Preparação de Bordado", "Definição das Letras", "Marca de Bastidor", "Aspecto Final"],
      "rows": [
        ["Com Plástico Solúvel + Flutuação", "100% Nítida e em relevo", "Zero marca no tecido", "Alta Costura Internacional"],
        ["Sem Plástico + Bastidor Apertado", "Ilegível (afunda na lã)", "Marcas de aro irreversíveis", "Peça danificada"],
        ["Com Entretela Rasgável Comum", "Enrugada e torta", "Risco de deformação", "Amador / Básico"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "80/12 SES Ponta Bola ou 90/14 SES",
      "stabilizer": "Entretela de Recorte 80 g/m² + Filme Solúvel 40 micras de topo",
      "threadTension": "115 a 125 gf (superior) e 24 gf (bobina)",
      "density": "0.42 mm com Underlay em Grade Dupla"
    },
    "applications": [
      "Casacos de inverno de luxo, paletós e sobretudos femininos e masculinos",
      "Golas, capuzes e punhos de casacos com brasões e monogramas",
      "Mantas de sofá e almofadas em lã bouclé para decoração de montanha",
      "Gorros de lã grossa e boinas tradicionais de estilo europeu"
    ],
    "troubleshootingTips": [
      "Se os pelinhos escaparem pelas laterais do bordado, aumente a largura do ponto cheio em 0,4 mm e aumente a margem do underlay",
      "Para remover o plástico hidrossolúvel sem molhar o casaco de lã, use um jato de ar quente a 130 °C ou vapor seco suave",
      "Passe uma escovinha de cerdas naturais ao redor do bordado após finalizar para pentear os cachos de lã"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Entretela Hidrossolúvel",
      "Bordado Flutuante",
      "Ponto Cheio (Satin Stitch)",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-077",
      "karakul",
      "la encaracolada",
      "astracan",
      "casacos de inverno",
      "boucle",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "INTERNATIONAL WOOL TEXTILE ORGANISATION (IWTO). Specialty Animal Fibres and Heavy Wool Fabrics. Brussels, 2022.",
      "PARRISH, Gail. High-Pile and Heavy Wool Machine Embroidery. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue um retalho de tecido de lã encaracolada ou pelúcia carneirinho. Prenda a entretela de recorte no bastidor e cole o retalho por cima com fita crepe. Cubra com filme hidrossolúvel e borde uma letra grossa em ponto cheio com underlay de grade. Retire o plástico com vapor e veja o relevo impecável!",
    "quickSummary": "Técnicas para bordar casacos de lã grossa e encaracolada sem deixar as letras afundarem nos pelos.",
    "beginnerExplanation": "O Karakul é aquele tecido de casaco de lã com cachinhos fofos e enrolados. Para bordar nele sem as letrinhas sumirem no meio dos pelos, a gente coloca um plastiquinho transparente por cima e borda: as letras ficam bem altas, lisinhas e lindas!",
    "updatedAt": "2026-08-29"
  }
]

output_path = "src/data/verbetesLetterK13.ts"
header = """import { Verbete } from "../types";

export const VERBETES_LETTER_K_PART13: Verbete[] = """

with open(output_path, "w", encoding="utf-8") as f:
    f.write(header + json.dumps(verbetes, ensure_ascii=False, indent=2) + ";\n")

print(f"Part 13 (K-075 to K-077 initial) generated.")

import json
import os

verbetes_k13 = [
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
  },
  {
    "id": "k-078-khadi-khaddar-tecidos-indianos-fiados-a-mao-e-bordados-folcloricos",
    "code": "K-078",
    "term": "Khadi / Khaddar: Tecidos Indianos Fiados à Mão e Bordados Folclóricos (Khadi Handspun Cotton & Folk Embroidery)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do sânscrito e hindi khadi (tecido de algodão fiado manualmente na roca charkha). Movimento histórico Swadeshi liderado por Mahatma Gandhi na Índia.",
    "summary": "Tecido rústico de puro algodão ou seda fiado manualmente, base de bordados étnicos e peças de moda sustentável.",
    "definition": "Khadi (ou Khaddar) é o tecido têxtil artesanal produzido exclusivamente com fios fiados à mão em rocas tradicionais (*charkha*) e tecidos em teares manuais de madeira na Índia e Bangladesh. Caracteriza-se pela textura orgânica levemente irregular (slubby), respirabilidade extrema e toque fresco no verão e acolhedor no inverno. No bordado computadorizado e artesanal, exige estabilização suave com entretelas de algodão rasgável e densidades médias para não rasgar a trama rústica artesanal.",
    "technicalDetails": "Gramatura média de 110 a 170 g/m² em fiação de algodão 100% cru ou mesclas com seda (Khadi Silk). Trama aberta e flexível com densidade de pontos recomendada entre 0,38 e 0,44 mm.",
    "construction": [
      "Fios de algodão fiados à mão com variações naturais de espessura",
      "Entretela de algodão rasgável ecológica (Soft Cotton Tearaway 45 g/m²)",
      "Linhas de bordado em algodão mercerizado fosco ou seda pura",
      "Matriz com pontos abertos, ponto cruz folclórico ou ponto corrente",
      "Compensação de repuxo regulada em 0,35 mm para respeitar a elasticidade da trama"
    ],
    "howItWorks": [
      "1. O tecido Khadi é vaporizado levemente para relaxar as fibras artesanais antes do corte.",
      "2. É montado no bastidor com entretela rasgável de toque macio.",
      "3. A máquina borda motivos étnicos, florais ou monogramas rústicos com velocidade moderada.",
      "4. As pequenas irregularidades do fio do tecido se fundem harmonicamente com os pontos de bordado.",
      "5. A entretela do verso é rasgada delicadamente para manter a peça macia e respirável.",
      "6. A peça recebe um passe a ferro morno com borrifo de água de cheiro.",
      "7. O resultado é uma camisa ou vestido de alta elegância sustentável e consciente."
    ],
    "mainTypes": [
      "Khadi Cotton (Algodão puro cru para camisas e vestidos frescos)",
      "Khadi Silk (Seda rústica fiada à mão para xales e estolas nobres)",
      "Khadi Wool (Lã artesanal leve dos vales do Himalaia para mantas)"
    ],
    "characteristics": [
      "Textura orgânica inconfundível que valoriza a moda ecológica e sustentável (Eco-Fashion)",
      "Absoluto conforto térmico e toque suave na pele",
      "Visual nobre com identidade artesanal única em cada metro de tecido",
      "Excelente aceitação de bordados com linhas foscas e paletas naturais"
    ],
    "limitations": [
      "A trama artesanal irregular pode romper se forem usadas densidades pesadas de tatami",
      "Exige agulhas finas de ponta bola leve para não desfiar as fibras manuais",
      "Encolhimento natural de 3% a 5% se lavado em água quente"
    ],
    "numberingSystem": [
      "Gramatura: 120 a 160 g/m²",
      "Densidade Recomendada: 0,40 mm a 0,44 mm",
      "Agulha Indicada: 70/10 SES a 75/11 SES"
    ],
    "advantages": [
      "✔ Alinhamento com as maiores tendências globais de moda consciente e sustentável",
      "✔ Peças com altíssimo apelo para boutiques de luxo e marcas autorais",
      "✔ Toque fresco e respirável incomparável"
    ],
    "commonErrors": [
      "❌ Borda densa que parece uma placa dura em cima de um tecido super leve e maleável",
      "❌ Usar agulhas grossas ponta lantejoula/jeans que perfuram e esburacam a trama",
      "❌ Puxar o tecido esticando demais no bastidor, deformando o caimento natural da roupa"
    ],
    "voceSabia": "A roca de fiar Khadi (Charkha) tornou-se o símbolo central da bandeira original da Índia durante a luta pacífica de Gandhi pela autonomia econômica e têxtil do país.",
    "curiosidadeTecnica": "Por ser fiado à mão sem torção excessiva, o fio de Khadi retém micro-bolsas de ar no interior da fibra, o que confere ao tecido uma capacidade de isolamento térmico natural 25% superior aos tecidos industriais de mesma espessura.",
    "dicaArtrelados": "Ao bordar em tecidos artesanais como o Khadi ou linho rústico, aposte em matrizes leves como o Ponto Cruz eletrônico ou Ponto Haste: eles combinam perfeitamente com a textura do tecido e parecem ter sido bordados à mão por mestres artesãos!",
    "comparisonTable": {
      "headers": ["Tipo de Tecido", "Processo de Fiação", "Textura", "Densidade Ideal de Bordado"],
      "rows": [
        ["Khadi Artesanal", "100% Fiado e tecido à mão", "Rústica / Orgânica", "Leve a Média (0.42 mm)"],
        ["Tricoline Industrial", "Máquinas de fiação a jato", "Lisa e homogênea", "Padrão (0.40 mm)"],
        ["Popeline Mista", "Fibras sintéticas industriais", "Rígida e sintética", "Padrão (0.38 mm)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "70/10 SES Ponta Bola Leve",
      "stabilizer": "Entretela de Algodão Rasgável 45 g/m²",
      "threadTension": "100 a 105 gf (superior) e 20 gf (bobina)",
      "density": "0.42 mm com Underlay Leve"
    },
    "applications": [
      "Camisaria masculina e feminina de luxo sustentável",
      "Batas, túnicas e vestidos fluidos de verão",
      "Xales, echarpes e estolas de seda Khadi bordadas",
      "Enxovais ecológicos de berço e almofadas de linho rústico"
    ],
    "troubleshootingTips": [
      "Se os pontos ficarem repuxando o tecido, aumente a folga de repuxo no programa para 0,35 mm",
      "Pré-lave o tecido em água fria com sabão neutro antes de cortar e bordar",
      "Evite usar entretelas termocolantes muito duras que eliminem o balanço natural do Khadi"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Ponto Cruz Digitalizado",
      "Entretela Rasgável",
      "Linhas Foscas de Algodão",
      "Compensação de Repuxo"
    ],
    "tags": [
      "k-078",
      "khadi",
      "khaddar",
      "algodao artesanal",
      "moda sustentavel",
      "tecidos indianos",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TRIVEDI, Lisa. Clothing Gandhi's Nation: Homespun and Modern India. Indiana University Press, 2021.",
      "GILLOW, John. Traditional Indian Textiles and Craftsmanship. London, 2022."
    ],
    "practicalExercise": "Pegue um tecido de algodão rústico de trama aberta. Escolha uma matriz de ramo de folhas em ponto haste e ponto semente. Borde com linha de algodão verde oliva em velocidade suave (650 PPM). Sinta a maciez e harmonia da peça bordada!",
    "quickSummary": "Tecido de puro algodão indiano fiado à mão, perfeito para bordados delicados de moda ecológica.",
    "beginnerExplanation": "O Khadi é um tecido de algodão super especial, feito à mão em teares tradicionais na Índia. Ele é fresquinho, macio e delicioso de usar: no bordado, a gente usa pontos leves e delicados para criar roupas com cara de alta costura natural!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-079-kapa-tapa-cloth-tecidos-polinesios-de-entrecasca-com-grafismos-etnicos",
    "code": "K-079",
    "term": "Kapa / Tapa Cloth: Tecidos Polinésios de Entrecasca com Grafismos Étnicos (Hawaiian Kapa Bark Cloth Embroidery)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do havaiano kapa (o tecido batido) e do proto-polinésio tapa (borda / entrecasca). Tradição milenar dos povos do Havaí, Taiti, Fiji, Tonga e Samoa.",
    "summary": "Tecido não-tecido ancestral feito da casca batida da amoreira-de-papel, base de grafismos geométricos e bordados tribais sagrados.",
    "definition": "Kapa (ou Tapa Cloth) é o tecido não-tecido orgânico milenar característico das culturas da Polinésia e Ilhas do Pacífico, confeccionado a partir da maceração e batimento manual das fibras internas da entrecasca da árvore amoreira-de-papel (*Broussonetia papyrifera* ou *Wauke*). Estruturalmente semelhante a um feltro vegetal denso e flexível, é tradicionalmente ornamentado com padrões geométricos tribais monocromáticos ou bicolores. No bordado contemporâneo, exige digitalização com penetrações espaçadas e agulhas ultrafinas Microtex para preservar a integridade da folha vegetal sem provocar fissuras ou perfurações em linha.",
    "technicalDetails": "Estrutura fibrosa celulósica vegetal sem urdume e trama (não-tecido natural de 150 a 280 g/m²). Agulhas 65/9 ou 70/10 Microtex com penetração limpa e ponto corrido geométrico de passo longo (3,0 a 4,0 mm).",
    "construction": [
      "Folha vegetal de Kapa tradicional batida à mão",
      "Entretela de malha macia de apoio no avesso (Poly-Mesh 40 g/m²)",
      "Linhas de bordado em viscose natural ou algodão fosco em tons terrosos",
      "Matriz de grafismos polinésios em ponto corrido triplo e ziguezague tribal",
      "Fixação flutuante no bastidor com adesivo temporário para não marcar o tecido vegetal"
    ],
    "howItWorks": [
      "1. A folha de Kapa é inspecionada para verificar o sentido do alinhamento das fibras de casca.",
      "2. A entretela de reforço é presa no bastidor e a folha vegetal é posicionada por flutuação adesiva.",
      "3. O design digitalizado reproduz os ângulos agudos e triângulos sagrados dos grafismos do Pacífico.",
      "4. A máquina borda em velocidade lenta e constante para evitar aquecimento e ressecamento da fibra.",
      "5. Pontos de travamento suaves (micro-lock) ancoram as linhas sem criar nós duros na base vegetal.",
      "6. A peça é retirada com cuidado do bastidor e protegida em moldura ou acabamento têxtil de linho.",
      "7. O resultado é uma obra de arte decorativa com enorme valor cultural e histórico."
    ],
    "mainTypes": [
      "Kapa Havaiano Tradicional (Textura aveludada fina com marcas de batedor de madeira Ie Kuku)",
      "Tapa de Tonga / Ngatu (Painéis cerimoniais gigantescos de casca pintada com motivos tribais)",
      "Masi de Fiji (Tecido de casca com bordas franjadas e estamparia geométrica)"
    ],
    "characteristics": [
      "Material 100% ecológico, biodegradável e carregado de simbolismo ancestral",
      "Textura rígida e encorpada semelhante a um couro vegetal suave ou papel artesanal nobre",
      "Estética geométrica fascinante com padrões de ondas, dentes de tubarão e folhas sagradas",
      "Altíssimo valor para galerias de arte, decoração de resorts de praia e alta tapeçaria"
    ],
    "limitations": [
      "Não pode ser lavado em água corrente ou centrifugado em máquina",
      "Pontos muito próximos (< 1,0 mm) cortam a fibra vegetal como um picote de papel",
      "Proibido o uso de bastidores de pressão com aperto por parafuso direto sobre o Kapa"
    ],
    "numberingSystem": [
      "Gramatura: 160 a 250 g/m²",
      "Passo Mínimo de Ponto: 2,8 mm a 3,5 mm",
      "Densidade Máxima: Ponto corrido e contornos (sem tatamis pesados)"
    ],
    "advantages": [
      "✔ Criação de quadros e peças de decoração exclusivas para o mercado de alto luxo",
      "✔ Resgate de técnicas etnográficas raras com tecnologia contemporânea",
      "✔ Peças de longa conservação quando protegidas da umidade"
    ],
    "commonErrors": [
      "❌ Usar ponto tatami denso que esfarela e quebra a fibra de entrecasca da planta",
      "❌ Apertar o aro do bastidor diretamente sobre a casca deixando um círculo amassado permanente",
      "❌ Bordar em velocidade máxima (> 900 PPM) gerando atrito que queima a folha vegetal"
    ],
    "voceSabia": "No antigo Havaí, as artesãs batiam a casca com bastões de madeira esculpidos chamados 'I'e Kuku', que deixavam uma marca d'água invisível no tecido que só podia ser vista contra a luz do sol, identificando a linhagem da família!",
    "curiosidadeTecnica": "A amoreira-de-papel (Wauke) possui fibras de celulose com comprimento de até 15 mm (quatro vezes mais longas que o algodão comum), o que confere ao Kapa uma resistência à flexão comparável ao couro fino.",
    "dicaArtrelados": "Ao bordar papéis artesanais, feltros vegetais ou tecidos de casca como o Kapa, programe a matriz como se fosse um desenho a bico de pena: use apenas ponto corrido duplo e triplo com pontos longos (3 mm). O resultado fica limpo, elegante e o tecido não rasga nunca!",
    "comparisonTable": {
      "headers": ["Propriedade Têxtil", "Tecido Kapa (Casca)", "Couro Natural", "Tecido de Algodão"],
      "rows": [
        ["Origem", "100% Entrecasca vegetal batida", "Dérmica animal", "Fibra vegetal fiada"],
        ["Estrutura", "Não-tecido entrelaçado por batimento", "Fibras de colágeno contínuas", "Trama e urdume cruzados"],
        ["Técnica de Bordado", "Ponto Corrido / Microtex / Flutuação", "Ponta Cunha LL / Ponto Cheio", "Universal / Todos os pontos"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "65/9 ou 70/10 Microtex Afiada",
      "stabilizer": "Entretela Poly-Mesh 40 g/m² com fixação por fita adesiva",
      "threadTension": "95 a 105 gf (superior) e 18 gf (bobina)",
      "density": "Ponto corrido com espaçamento de 3,0 mm"
    },
    "applications": [
      "Painéis de parede, tapeçarias e quadros emoldurados para decoração de luxo",
      "Capas de álbuns de casamento e livros comemorativos de luxo",
      "Detalhes e medalhões aplicados em bolsas de praia e chapéus de palha nobre",
      "Artesanato comemorativo e réplicas de artefatos étnicos de museu"
    ],
    "troubleshootingTips": [
      "Se o ponto fizer pequenos furos esbranquiçados na casca, troque a agulha por uma 60/8 Microtex e aumente o comprimento do ponto para 3,2 mm",
      "Nunca molhe a peça; se precisar passar, use ferro morno seco pelo avesso com um pano de algodão protetor",
      "Prenda sempre a entretela no bastidor e cole o Kapa com fita dupla-face suave nas margens"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Bordado Flutuante",
      "Ponto Corrido Triplo (Bean Stitch)",
      "Agulhas Microtex",
      "Kraft Paper / Bordados em Papel"
    ],
    "tags": [
      "k-079",
      "kapa",
      "tapa cloth",
      "tecido havaiano",
      "grafismos etnicos",
      "nao-tecido vegetal",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KAAI, Puanani. Hawaiian Kapa: Heritage, Patterns and Fiber Science. Honolulu: University of Hawaii Press, 2021.",
      "PARRISH, Gail. Natural Non-Woven and Botanical Fiber Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue uma folha de papel artesanal encorpado de fibra de bananeira ou papel kraft grosso. Digitalize um desenho geométrico tribal simples com linhas retas em ponto corrido de 3 mm. Borde com linha preta fosca em velocidade lenta. O resultado parece um autêntico artefato polinésio!",
    "quickSummary": "Tecido tradicional polinésio feito de casca batida de árvore para bordados artísticos geométricos.",
    "beginnerExplanation": "O Kapa é um tecido muito antigo feito no Havaí batendo a casca de uma árvore até ela virar uma folha macia como um couro vegetal. A gente borda desenhos geométricos lindos nele usando pontinhos espaçados para criar quadros decorativos incríveis!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-080-kesa-e-mantos-liturgicos-budistas-japoneses-em-seda-bordada",
    "code": "K-080",
    "term": "Kesa & Mantos Litúrgicos Budistas Japoneses em Seda Bordada (Buddhist Kesa Robe Silk Patchwork & Gold Threading)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do sânscrito kasaya (manto monástico de cor terrosa/ocre) e do japonês kesa (manto litúrgico de seda usado sobre os ombros pelos monges zen-budistas).",
    "summary": "Manto litúrgico composto por retalhos nobres de brocado de seda unidos e bordados com fios de ouro metálico e flores sagradas.",
    "definition": "Kesa & Mantos Litúrgicos Budistas (Japanese Buddhist Kesa Robe Embroidery) é a tradição sacra e técnica de alta-costura oriental onde mantos cerimoniais de monges e abades são confeccionados através da união milimétrica de faixas e retalhos retangulares de damascos e brocados de seda pura (*kinran* e *donsu*). Cada quadrante representa os campos de arroz e o mapa cósmico, sendo decorado nos quatro cantos (*shiten*) com medalhões bordados com a Flor de Lótus, Roda do Dharma e símbolos auspiciosos em fios metálicos com banho de ouro e prata sobrepostos por ponto couchê ou ponto cheio fino.",
    "technicalDetails": "Composição em seda pura com fios de urdume de alta densidade (120 a 220 g/m²). Fios de bordado metálicos japoneses tipo Maru-Ginu e fios de seda lisa sem torção com densidade de 0,38 mm.",
    "construction": [
      "Tecido base de brocado de seda pura japonesa (Nishijin-ori)",
      "Entretela de organza de seda natural ou hidrossolúvel de suporte invisível",
      "Fios metálicos finos com núcleo de seda envolto em lâmina de ouro dourada",
      "Matriz de geometria sagrada com pontos de amarração invisíveis",
      "Costura estrutural de união em esquadria perfeita entre os painéis"
    ],
    "howItWorks": [
      "1. Os painéis de seda brocada são cortados em esquadro milimétrico.",
      "2. Cada medalhão de canto é bordado isoladamente em bastidor com organza de seda como reforço invisível.",
      "3. Utiliza-se velocidade reduzida da máquina para não friccionar nem descascar os fios de ouro metálico.",
      "4. Os símbolos de lótus e mandalas são preenchidos com ponto cheio direcional espelhado.",
      "5. Os painéis bordados são unidos manualmente ou com costura de precisão seguindo o mapa litúrgico tradicional.",
      "6. A peça inteira é forrada com seda pura macia sem nós aparentes.",
      "7. O manto ganha uma aura de santidade, beleza estética e brilho eterno."
    ],
    "mainTypes": [
      "Gojo-Gesa (Kesa de 5 faixas para monges noviços e prática diária)",
      "Shichijo-Gesa (Kesa cerimonial de 7 faixas usado em ordenações e rituais maiores)",
      "Kujo-Gesa (Manto suntuoso de 9 a 25 faixas para abades e mestres supremos)"
    ],
    "characteristics": [
      "Pico máximo do refinamento estético e da tradição têxtil japonesa",
      "Brilho dourado nobre que não oxida com o passar das décadas",
      "Simbolismo profundo em cada costura, nó e ponto de bordado",
      "Alta durabilidade em peças que são conservadas em templos por séculos"
    ],
    "limitations": [
      "A seda brocada pura não tolera calor excessivo de ferro ou água quente",
      "Erros de alinhamento milimétrico descaracterizam a geometria sagrada do manto",
      "Fios metálicos exigem agulhas de olho banhado a titânio e tensão superior muito suave"
    ],
    "numberingSystem": [
      "Gramatura da Seda: 140 a 200 g/m²",
      "Título do Fio Metálico: No. 40 a No. 50 Metálico Japonês",
      "Densidade Média: 0,38 mm com pontos cheios angulares"
    ],
    "advantages": [
      "✔ Confecção de vestes sacras e peças de museu com valor inestimável",
      "✔ Domínio de técnicas de alta costura com sedas e fios metálicos finos",
      "✔ Prestígio e reconhecimento artístico no mercado de restauração e bordado nobre"
    ],
    "commonErrors": [
      "❌ Puxar a linha metálica com muita tensão, arrebentando o fio dourado a cada 100 pontos",
      "❌ Usar entretelas comuns de poliéster grosso que deixam o manto de seda rígido e pesado",
      "❌ Deixar pontas de linha soltas no avesso que possam enroscar no forro de seda"
    ],
    "voceSabia": "Segundo a tradição budista iniciada há mais de 2.500 anos por Shakyamuni Buda, o manto Kesa original era feito unindo pedaços de panos descartados e tingidos com cascas de árvores; no Japão medieval, as famílias de samurais doavam seus melhores quimonos de seda aos templos para serem transformados em mantos Kesa sagrados.",
    "curiosidadeTecnica": "O fio metálico tradicional de Quioto (*Nishijin Gold Thread*) é feito colando folhas de ouro de 0,0001 mm de espessura sobre papel artesanal Washi com laca de árvore Urushi, sendo depois cortado em lâminas de 0,3 mm e enrolado sobre um miolo de seda pura.",
    "dicaArtrelados": "Ao bordar com fios metálicos dourados sobre tecidos finos de seda ou cetim, diminua a velocidade da sua máquina para 550 PPM e passe um pinguinho de óleo de silicone no guia-fio: o fio dourado vai deslizar suave como manteiga sem desfiar nenhuma pontinha!",
    "comparisonTable": {
      "headers": ["Elemento Sacro", "Material Tradicional", "Função Têxtil", "Técnica de Bordado"],
      "rows": [
        ["Shiten (4 Cantos)", "Brocado de Seda Ouro", "Proteção dos 4 guardiões cósmicos", "Medalhões em Ponto Cheio Dourado"],
        ["Faixas Centrais", "Damasco de Seda Pura", "Representação dos campos de arroz", "Costura de união milimétrica"],
        ["Cordões de Amarração", "Seda torcida artesanal", "Fechamento cerimonial sobre o ombro", "Nós decorativos tradicionais"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "500 - 600 PPM",
      "needleType": "75/11 Metallic / Titanium com olho largo",
      "stabilizer": "Organza de Seda Natural 30 g/m² ou Hidrossolúvel de base",
      "threadTension": "85 a 95 gf (superior bem suave) e 18 gf (bobina)",
      "density": "0.38 mm a 0.40 mm"
    },
    "applications": [
      "Confecção e restauração de mantos litúrgicos budistas e vestes sacras orientais",
      "Painéis de tapeçaria budista e estandartes de templos e dojos de artes marciais",
      "Quimonos cerimoniais de alta costura para casamentos tradicionais japoneses",
      "Almofadas de meditação Zafu e Zabuton de luxo para espaços de bem-estar"
    ],
    "troubleshootingTips": [
      "Se o fio metálico descascar na agulha, troque imediatamente para uma agulha especial Metallic 80/12 com olho polido grande",
      "Prenda a seda no bastidor usando tiras de feltro nas bordas do aro para não marcar as fibras delicadas",
      "Arremate todas as pontinhas de linha no avesso com selagem manual suave"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Kimono / Quimono Japonês",
      "Fios Metálicos",
      "Karat Gold Thread",
      "Agulhas Metallic"
    ],
    "tags": [
      "k-080",
      "kesa",
      "manto budista",
      "seda japonesa",
      "fios dourados",
      "vestes liturgicas",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KYOTO NATIONAL MUSEUM. Sacred Robes: The Art and Tradition of Japanese Kesa. Kyoto, 2022.",
      "PARRISH, Gail. Metallic Gold Thread and Fine Silk Embroidery. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue um pedaço de tecido de seda ou cetim encorpado. Digitalize uma flor de lótus de 5 cm com pétalas em ponto cheio curvado. Use uma linha metálica dourada de boa qualidade e regule a máquina em 500 PPM com agulha Metallic. Veja o brilho majestoso que se forma na peça!",
    "quickSummary": "Mantos sagrados do budismo japonês montados com retalhos de seda pura e bordados com fios de ouro.",
    "beginnerExplanation": "O Kesa é aquele manto nobre usado pelos monges no Japão. Ele é feito com pedaços de sedas maravilhosas costurados com muito capricho e decorado com símbolos sagrados bordados em linhas de ouro brilhantes!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-081-kangas-leso-tecidos-da-africa-oriental-com-frases-e-bordas",
    "code": "K-081",
    "term": "Kangas / Leso: Tecidos da África Oriental com Frases e Bordas (East African Kanga Fabric & Proverb Embroidery)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino.",
    "origin": "Do suaíli kanga (galinha-d'angola, em referência à estamparia pontilhada original) e leso (tecido de lenço). Tradição do Quênia, Tanzânia, Zanzibar e Moçambique.",
    "summary": "Tecidos de algodão vibrante compostos por moldura externa (pindo), centro estampado (mji) e faixa com mensagem ou provérbio (ujumbe) bordado.",
    "definition": "Kangas (ou Leso) é o icônico tecido cultural da África Oriental, caracterizado por painéis retangulares de algodão 100% puro com padronagem de três partes consagradas: uma borda decorativa larga (*pindo*), um painel central artístico (*mji*) e uma faixa retangular inferior contendo um provérbio, mensagem de bênção ou poesia em língua suaíli (*ujumbe* ou *jina*). No bordado eletrônico, a personalização de Kangas envolve o enriquecimento das molduras com pontos de festonê e a digitalização tipográfica das frases e homenagens de casamento, maternidade e celebrações comunitárias.",
    "technicalDetails": "Tecido de algodão fino de 100 a 130 g/m² em fiação de alta densidade. Letreiros bordados com compensação de repuxo de 0,35 mm e estabilização com entretela rasgável de toque macio.",
    "construction": [
      "Painel retangular de tecido Kanga de puro algodão estampado",
      "Entretela rasgável de algodão macia (Soft Tearaway 50 g/m²)",
      "Linhas de poliéster brilhante em cores de alto contraste (amarelo ouro, vermelho, azul cobalto)",
      "Matriz tipográfica limpa em ponto cheio com altura mínima de letra de 12 mm",
      "Acabamento perimetral com bainha virada ou ponto festonê decorativo"
    ],
    "howItWorks": [
      "1. A faixa de texto do Kanga é demarcada com fita métrica e giz de alfaiate.",
      "2. O tecido é fixado no bastidor com entretela rasgável garantindo que a estampa fique no esquadro.",
      "3. O letreiro da mensagem ou nome é digitalizado com pontos de compensação para evitar repuxamento.",
      "4. A máquina borda a frase em ponto cheio denso e vibrante sobre a faixa clara do tecido.",
      "5. A borda externa (*pindo*) pode receber pespontos bordados ou apliques de lantejoulas.",
      "6. A entretela é rasgada suavemente no verso da peça.",
      "7. A Kanga fica pronta para ser usada como xale, turbante, vestido envolvente ou presente de gala."
    ],
    "mainTypes": [
      "Kanga za Harusi (Kangas cerimoniais de casamento com frases de amor e bênção)",
      "Kanga za Kiswahili (Kangas com provérbios filosóficos e ensinamentos ancestrais)",
      "Kanga za Uzazi (Kangas festivas para presentear mães e carregar recém-nascidos)"
    ],
    "characteristics": [
      "Explosão de cores vivas e contrastes solares inconfundíveis",
      "Combinação única entre mensagem literária/afetiva e arte visual têxtil",
      "Leveza, frescor e grande versatilidade de uso no vestuário e decoração",
      "Excelente aceitação em coleções afro-brasileiras e moda étnica contemporânea"
    ],
    "limitations": [
      "O algodão fino pode franzir ao redor do texto se a densidade de pontos for excessiva",
      "Letras menores que 8 mm ficam ilegíveis contra o fundo colorido da estampa",
      "Não utilizar linhas que desbotem em contato com sabão em pó durante as lavagens diárias"
    ],
    "numberingSystem": [
      "Dimensões do Painel: 150 cm x 110 cm",
      "Gramatura: 110 a 130 g/m²",
      "Altura do Letreiro: 15 mm a 25 mm"
    ],
    "advantages": [
      "✔ Peças com imensa carga afetiva, ideais para presentes personalizados e formaturas",
      "✔ Nicho aquecido no mercado de moda afro e decoração de eventos temáticos",
      "✔ Produção rápida e lucrativa com matrizes tipográficas simples e impactantes"
    ],
    "commonErrors": [
      "❌ Bordar letras muito pequenas que afundam e somem na estampa colorida do tecido",
      "❌ Não alinhar o texto paralelamente à moldura do tecido, deixando a frase torta",
      "❌ Usar entretela muito grossa que transforma a faixa de texto em uma barra dura no tecido leve"
    ],
    "voceSabia": "Na costa da África Oriental, as mulheres usam as mensagens escritas nas Kangas como uma forma poética e sutil de comunicação social: presentear alguém com uma Kanga com uma frase específica pode expressar gratidão, conselho, amor ou até um recado bem-humorado!",
    "curiosidadeTecnica": "O tecido Kanga tradicional é estampado com a técnica de estamparia por cilindros rotativos com alinhamento preciso de 4 a 6 cores, sendo o algodão tratado com acabamento de amaciamento enzimático para garantir toque suave no corpo.",
    "dicaArtrelados": "Ao bordar nomes ou frases em tecidos estampados bem coloridos como a Kanga africana ou a chita brasileira, escolha sempre uma cor de linha que contraste fortemente com o fundo e adicione um contorno fino preto ou branco: as letras vão saltar com uma leitura perfeita de longe!",
    "comparisonTable": {
      "headers": ["Parte da Kanga", "Nome em Suaíli", "Elemento Visual", "Aplicação do Bordado"],
      "rows": [
        ["Borda Externa", "Pindo", "Moldura geométrica contínua", "Festonês e reforço de bainha"],
        ["Centro Estampado", "Mji (Cidade)", "Desenho principal temático", "Pontos de luz e contornos"],
        ["Faixa de Mensagem", "Ujumbe / Jina", "Faixa retangular de texto", "Bordado de nomes e provérbios"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Rasgável Macia 50 g/m²",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.40 mm com ponto cheio nítido"
    },
    "applications": [
      "Criação de vestidos envelope, saias e túnicas de moda afro-étnica",
      "Xales cerimoniais, cangas de praia sofisticadas e turbantes",
      "Panos de parede e almofadas com provérbios e mensagens inspiradoras",
      "Bolsas ecológicas e estojos com tecidos estampados africanos"
    ],
    "troubleshootingTips": [
      "Se as letrinhas enrugarem o tecido de algodão fino, aumente a compensação de repuxo para 0,35 mm e reduza a densidade para 0,42 mm",
      "Use uma régua de esquadro transparente para garantir que a linha do texto fique 100% paralela à barra do tecido",
      "Corte sempre as linhas de salto entre as letras com tesourinha curva para um visual limpo"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Micro-Lettering (Micro-Letras)",
      "Monogramas & Letreiros",
      "Compensação de Repuxo",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-081",
      "kangas",
      "leso",
      "tecido africano",
      "proverbios",
      "letreiros",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BECK, Rose Marie. African Kanga: Cloth, Communication and Culture. London, 2021.",
      "PARRISH, Gail. African Wax and Printed Fabric Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido estampado alegre de algodão. Crie uma matriz no seu programa com uma palavra inspiradora (como 'Amor', 'Paz' ou 'Fé') em letra bold com 2 cm de altura. Borde com linha amarela ouro sobre fundo escuro. Veja o contraste lindo e poderoso!",
    "quickSummary": "Tecido tradicional africano com bordas e frases de sabedoria personalizadas com bordado vibrante.",
    "beginnerExplanation": "A Kanga é aquele tecido africano alegre e cheio de cor que sempre vem com uma frase bonita escrita embaixo. A gente pode bordar nomes, provérbios e mensagens de carinho nele para criar vestidos, cangas e presentes inesquecíveis!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-082-kilim-kelim-tapecarias-planas-da-anatolia-e-bordados-geometricos",
    "code": "K-082",
    "term": "Kilim / Kelim: Tapeçarias Planas da Anatólia e Bordados Geométricos (Anatolian Kilim Tapestry & Flat-Weave Geometry)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do persa gelim e turco kilim (tapete ou tapeçaria de trama plana sem pelos). Tradição milenar da Turquia, Cáucaso, Irã e Bálcãs.",
    "summary": "Tecido rústico de trama plana e lã grossa sem veludo, base de motivos geométricos tribais, losangos e bordados estruturados.",
    "definition": "Kilim (ou Kelim) é a tapeçaria ou tecido pesado de trama plana (*flat-weave*), produzido artesanalmente em teares manuais onde os fios de trama de lã pura cobrem inteiramente os fios de urdume de algodão ou linho, sem formação de laçadas ou pelos felpudos. Conhecido por seus motivos geométricos ancestrais com triângulos, degraus e cruzes tribais (*elibelinde*, olho protetor e chifres de carneiro), exige no bordado o uso de linhas de lã encorpadas (ou poliéster 30wt/12wt), agulhas reforçadas 90/14 e matrizes com pontos tatami texturizados e ponto cruz grosso.",
    "technicalDetails": "Composição em lã pura ou lã com algodão (gramatura de 450 a 800 g/m²). Trama pesada e firme que dispensa entretelas elásticas, exigindo entretela de recorte grossa (80 g/m²) e velocidade de bordado entre 550 e 650 PPM.",
    "construction": [
      "Base de tapeçaria Kilim autêntica ou tecido rústico tipo chenille/jacquard grosso",
      "Entretela de recorte resistente (Heavy Cutaway 80 g/m²)",
      "Linhas grossas de bordado (fio de lã No. 12 ou poliéster pesado)",
      "Matriz com motivos geométricos em degraus e blocos de tatami rústico",
      "Agulhas grossas 90/14 ou 100/16 com ponta afiada para penetrar a trama de lã"
    ],
    "howItWorks": [
      "1. A peça de tapeçaria Kilim é posicionada no bastidor reforçado ou bastidor magnético.",
      "2. A entretela de recorte por baixo confere estabilidade contra a rigidez da trama de lã.",
      "3. Os desenhos geométricos seguem as linhas ortogonais do tecido.",
      "4. A máquina borda em velocidade moderada, aplicando pontos longos que imitam tecelagem manual.",
      "5. Blocos em losango e ziguezagues se formam com relevo tátil expressivo.",
      "6. A peça é retirada e o excesso de entretela é refilado no verso com tesoura afiada.",
      "7. A almofada ou tapete ganha a sofisticação e imponência do design oriental milenar."
    ],
    "mainTypes": [
      "Kilim da Anatólia / Turco (Geometria tradicional com cores quentes: terracota, açafrão e índigo)",
      "Kilim Senneh / Persa (Trama finíssima com arabescos e motivos botânicos estilizados)",
      "Kilim Contemporâneo (Releitura moderna com linhas minimalistas em tons neutros)"
    ],
    "characteristics": [
      "Textura encorpada, resistente e extremamente durável (dura décadas sem desgastar)",
      "Aspecto rústico de luxo que transforma qualquer ambiente de decoração",
      "Excelente para almofadas pesadas, estofamentos de poltronas, bolsas e tapetes",
      "Alta solidez de cor e resistência a atrito mecânico contínuo"
    ],
    "limitations": [
      "A alta espessura do tecido pode causar quebra de agulhas finas comuns (usar agulhas 90/14+)",
      "Não recomendável para letreiros miúdos ou curvas hiper-delicadas",
      "Exige bastidores robustos que suportem a pressão de tecidos pesados sem escapar"
    ],
    "numberingSystem": [
      "Gramatura: 450 a 750 g/m²",
      "Tamanho de Agulha: 90/14 SES a 100/16 RG",
      "Comprimento de Ponto Ideal: 3,5 mm a 5,0 mm"
    ],
    "advantages": [
      "✔ Peças de decoração vendidas a preços nobres no mercado de arquitetura de interiores",
      "✔ Visual autêntico de tapeçaria artesanal com a agilidade do bordado eletrônico",
      "✔ Produto resistente a animais domésticos e uso diário intenso"
    ],
    "commonErrors": [
      "❌ Tentar bordar com agulhas finas de camisa (75/11), entortando a agulha na trama grossa de lã",
      "❌ Usar pontos muito curtos (< 1,5 mm) que mastigam a lã e travam a lançadeira",
      "❌ Prender em bastidor plástico frouxo que escorrega durante o movimento do pantógrafo"
    ],
    "voceSabia": "Cada símbolo geométrico bordado em um Kilim turco tradicional conta uma história: o motivo 'Elibelinde' (Mãos na Cintura) simboliza a fertilidade e a Grande Mãe, enquanto o motivo 'Göz' (Olho) protege a casa e a família contra o mau-olhado.",
    "curiosidadeTecnica": "A tecelagem plana do Kilim não possui nós verticais como os tapetes persas felpudos; as cores mudam criando fendas microscópicas na trama chamadas 'Slit-weave', que no bordado devem ser reforçadas com pontos perpendiculares.",
    "dicaArtrelados": "Ao bordar em tecidos grossos estilo Kilim, jacquard rústico ou tapeçaria, aumente o comprimento dos pontos para 4 mm ou use linhas de bordar mais grossas (como a linha número 30 ou fio de meada de lã): seu bordado vai ficar com uma textura encorpada de peça de antiquário!",
    "comparisonTable": {
      "headers": ["Tipo de Tapeçaria", "Estrutura do Tecido", "Altura do Pelo", "Técnica de Bordado"],
      "rows": [
        ["Kilim Tradicional", "Trama plana de lã pura", "Zero pelo (plano)", "Pontos Longos / Agulha Grossa / Linha 30"],
        ["Tapete Persa Clássico", "Nós de lã sobre urdume", "Pelo alto felpudo", "Inadequado para bordado de máquina"],
        ["Jacquard Tapeçaria", "Tecelagem mecânica mista", "Sem pelo (estruturado)", "Tatami Texturizado / Agulha 80-90"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM",
      "needleType": "90/14 SES ou 100/16 com revestimento de Cromo",
      "stabilizer": "Entretela de Recorte Pesada 80 g/m²",
      "threadTension": "120 a 135 gf (superior firme) e 25 gf (bobina)",
      "density": "0.45 mm com pontos longos"
    },
    "applications": [
      "Almofadas de luxo estilo boho-chic e rústico oriental",
      "Bolsas femininas estruturadas, mochilas e malas de viagem em tapeçaria",
      "Estofamentos de bancos, pufes e cadeiras de destaque",
      "Painéis de parede decorativos e trilhos de mesa pesados"
    ],
    "troubleshootingTips": [
      "Se a linha superior arrebentar com frequência, diminua a tensão superior e troque a agulha por uma 90/14 Topstitch de olho grande",
      "Utilize bastidor magnético para prender o tecido grosso sem entortar os aros de plástico",
      "Aplique silicone líquido nas linhas grossas para facilitar a passagem pelos guias-fio"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Bastidor Magnético",
      "Agulhas Industriais",
      "Ponto Tatami",
      "Tapeçaria & Jacquard"
    ],
    "tags": [
      "k-082",
      "kilim",
      "kelim",
      "tapecaria turca",
      "geometria etnica",
      "tecidos pesados",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "DAVIES, Peter. The Tribal Kilims of Anatolia: History, Motifs and Weaving Science. New York, 2021.",
      "PARRISH, Gail. Heavy Tapestry and Rug Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido jacquard encorpado ou sarja pesada. Crie no software uma matriz de losango tribal com linhas geométricas em degraus usando ponto cheio largo (4,5 mm). Borde com agulha 90/14 e linha de cor terracota. Sinta a textura imponente que se forma na peça!",
    "quickSummary": "Tapeçaria de trama plana e lã grossa oriental para bordados geométricos marcantes e almofadas de luxo.",
    "beginnerExplanation": "O Kilim é aquele tecido grosso e maravilhoso de tapetes e almofadas turcas, feito de lã rústica bem resistente. A gente borda desenhos geométricos bem marcados nele usando agulhas mais grossinhas para fazer peças de decoração chiques e duradouras!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-083-kani-pashmina-a-rara-tecnica-de-xales-bordados-da-caxemira",
    "code": "K-083",
    "term": "Kani Pashmina: A Rara Técnica de Xales Bordados da Caxemira (Kani Pashmina Shawl & Micro-Twill Embroidery)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do kashmiri kani (pequena agulha/bobina de madeira de macieira usada pelos tecelões) e do persa pashm (lã ultrafina da cabra do Himalaia). Tradição do Vale da Caxemira.",
    "summary": "O mais nobre xale do mundo, tecido em lã de caxemira ultrafina e enriquecido com micro-bordados florais botânicos que parecem pinturas.",
    "definition": "Kani Pashmina (Kani Weaving & Kashmiri Fine Needlework) é a expressão máxima da arte têxtil do Vale da Caxemira (Índia), caracterizada por xales de pura lã pashmina (subpelo da cabra *Capra hircus laniger*) tecidos com micro-navetas de madeira (*kanis*) ou finamente bordados com agulhas finíssimas em ponto *Sozni* (ponto cheio microscópico de contorno). No bordado contemporâneo de alta precisão, exige o uso de agulhas 60/8 ou 65/9 Microtex, linhas de seda ultrafina (60wt ou 80wt) e entretelas hidrossolúveis transparentes que se dissolvem a frio sem danificar as plumas térmicas da lã.",
    "technicalDetails": "Diâmetro da fibra de pashmina entre 12 e 15 micrômetros (seis vezes mais fina que um fio de cabelo humano). Gramatura de 60 a 90 g/m² com densidade de bordado hiper-calibrada em 0,32 a 0,36 mm.",
    "construction": [
      "Base de tecido pashmina 100% puro fiado artesanalmente",
      "Entretela hidrossolúvel de filme fino ou tecido não-tecido solúvel em água fria (PVA 25 g/m²)",
      "Linhas de seda pura 60wt ou poliéster micro-filamentado extra-brilho",
      "Matriz com micro-pontos florais e arabescos 'paisley' (buta)",
      "Tensão superior ultra-leve para não repuxar ou esburacar a pluma de lã"
    ],
    "howItWorks": [
      "1. O xale de Pashmina é estendido com extrema delicadeza sobre a mesa de corte.",
      "2. Utiliza-se a técnica de flutuação sobre entretela solúvel para não esmagar a lã no aro do bastidor.",
      "3. Uma camada de filme hidrossolúvel no topo protege a penugem contra o atrito da agulha.",
      "4. A máquina opera em velocidade baixa (500 PPM) com agulha 60/8 de ponta cônica aguda.",
      "5. Flores botânicas, folhas de plátano (chinar) e arabescos são bordados com suavidade de pincel.",
      "6. A peça é lavada delicadamente em água fria com sabão neutro para dissolver o estabilizador.",
      "7. O xale seca na sombra estendido horizontalmente, mantendo a leveza de uma nuvem.",
      "8. O resultado é uma obra-prima de vestuário digna de realezas e colecionadores internacionais."
    ],
    "mainTypes": [
      "Kani Jamawar (Xale totalmente coberto por desenhos florais entrelaçados sem fundo aparente)",
      "Kani Dourdar (Xale com campo central liso e bordas florais ricas de 15 cm)",
      "Kani Paisley / Buta (Motivos tradicionais de gotas e arabescos indianos sagrados)"
    ],
    "characteristics": [
      "A lã mais macia, quente e leve do planeta Terra",
      "Capacidade de passar um xale de 2 metros de comprimento por dentro de uma aliança de noivado",
      "Micro-bordados de definição inacreditável com cores nobres e degradês sutis",
      "Valor comercial de milhares de dólares no mercado internacional de luxo"
    ],
    "limitations": [
      "A lã pashmina é extremamente vulnerável a calor alto, fricção forte e agulhas grossas",
      "Proibido o uso de entretelas rasgáveis ásperas que arranquem os pelos finos ao serem puxadas",
      "Exige ambiente limpo e controle rigoroso de tensão da máquina"
    ],
    "numberingSystem": [
      "Micragem da Fibra: 12 a 15 micras",
      "Gramatura do Xale: 65 a 90 g/m²",
      "Agulha Exclusiva: 60/8 a 65/9 Microtex"
    ],
    "advantages": [
      "✔ Criação de produtos da mais alta categoria de luxo mundial",
      "✔ Margem de valor agregado sem paralelo no mercado de moda",
      "✔ Peças exclusivas com toque aveludado inigualável"
    ],
    "commonErrors": [
      "❌ Usar agulhas comuns 75/11 ou 80/12, abrindo buracos irreparáveis no tecido fino de pashmina",
      "❌ Prender a pashmina diretamente no bastidor de parafuso apertado, quebrando as fibras",
      "❌ Puxar entretela a seco, arrancando tufos da lã nobre"
    ],
    "voceSabia": "A imperatriz Josefina Bonaparte (esposa de Napoleão) possuía mais de 400 xales Kani de Pashmina da Caxemira, e foi a responsável por lançar a moda dos xales orientais em todas as cortes da Europa no século XIX.",
    "curiosidadeTecnica": "Um único xale Kani artesanal autêntico leva entre 1 e 3 anos de trabalho contínuo de mestres tecelões, pois cada linha de trama exige o manuseio de até 1.500 micro-agulhas de madeira simultâneas.",
    "dicaArtrelados": "Ao bordar xales ultrafinos de lã, caxemira ou seda pura, NUNCA prenda o tecido no bastidor! Prenda apenas a entretela solúvel no bastidor, use cola temporária para posicionar o xale por cima e use agulha fininha 65/9: a peça fica impecável e sem nenhuma marca de bastidor!",
    "comparisonTable": {
      "headers": ["Tipo de Lã", "Diâmetro da Fibra", "Sensação ao Toque", "Cuidados no Bordado"],
      "rows": [
        ["Kani Pashmina Pura", "12 a 14 micras", "Nuvem pura / Zero pinicado", "Agulha 60/8 / Hidrossolúvel / 500 PPM"],
        ["Lã Merino Fina", "18 a 21 micras", "Super macia e elástica", "Agulha 70/10 / Rasgável macia / 700 PPM"],
        ["Lã Comum de Ovelha", "30 a 40 micras", "Encorpada e áspera", "Agulha 80/12 ou 90/14 / 800 PPM"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "450 - 550 PPM",
      "needleType": "60/8 ou 65/9 Microtex Ponta Aguda",
      "stabilizer": "Entretela Hidrossolúvel Solúvel em Água Fria 25 g/m²",
      "threadTension": "80 a 90 gf (superior ultra suave) e 18 gf (bobina)",
      "density": "0.34 mm com pontos cheios delicados"
    },
    "applications": [
      "Xales, estolas e echarpes de alta costura e noivas de luxo",
      "Golas e punhos de casacos de caxemira e suéteres nobres",
      "Mantas de bebê para saídas de maternidade de alta classe",
      "Peças de vestuário de gala e coleções de estilistas internacionais"
    ],
    "troubleshootingTips": [
      "Se a agulha repuxar fios da trama da pashmina, descarte-a imediatamente e coloque uma agulha 60/8 nova e perfeitamente polida",
      "Para retirar o estabilizador, mergulhe a peça em uma bacia com água fria e deixe dissolver sozinho por 10 minutos sem esfregar",
      "Seque a peça estendida na horizontal sobre uma toalha de banho branca e seca"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Kashmir / Caxemira, Pashmina",
      "Entretela Hidrossolúvel",
      "Agulhas Microtex",
      "Bordado Flutuante"
    ],
    "tags": [
      "k-083",
      "kani pashmina",
      "xale da caxemira",
      "la ultrafina",
      "alta costura",
      "luxo mundial",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "AMES, Frank. The Kashmir Shawl and Its Indo-French Influence. London, 2021.",
      "PARRISH, Gail. Ultra-Fine Wool and Cashmere Embroidery Techniques. Cincinnati, 2023."
    ],
    "practicalExercise": "Pegue um pedaço de tecido de lã fina ou musseline de seda. Prenda a entretela solúvel no bastidor e flutue o tecido por cima. Coloque uma agulha 65/9 e borde uma florzinha delicada de 2 cm com linha de seda ou poliéster fino em 500 PPM. Sinta a perfeição do toque!",
    "quickSummary": "O xale de lã mais fino e nobre do mundo, bordado com micro-agulhas e desenhos de flores encantadoras.",
    "beginnerExplanation": "O Kani Pashmina é o xale mais chique e macio que existe no mundo, feito com a lãzinha mais fina das montanhas do Himalaia. Para bordar nele, a gente usa agulhas bem fininhas e pontinhos delicados que parecem uma pintura em aquarela!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-084-kanzashi-e-adornos-japoneses-de-seda-com-apliques-bordados",
    "code": "K-084",
    "term": "Kanzashi & Adornos Japoneses de Seda com Apliques Bordados (Tsumami Kanzashi Hair Ornaments & Petal Embroidery)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do japonês kanzashi (adorno ornamental de cabelo) e tsumami (beliscar / dobrar com pinça). Arte tradicional desenvolvida no período Edo do Japão.",
    "summary": "Técnica de criação de flores tridimensionais em seda dobrada e pétalas bordadas no bastidor (In-The-Hoop) para adereços finos.",
    "definition": "Kanzashi & Adornos Japoneses de Seda (Tsumami Kanzashi & In-The-Hoop Petal Embroidery) é a técnica mista que une a secular dobradura e modelagem de quadrados de seda pura com a confecção eletrônica no bastidor (*In-The-Hoop - ITH*) de pétalas, folhas e miolos bordados para enfeites de cabelo, broches e tiaras de noiva. No bordado computadorizado, as pétalas são bordadas sobre entretela hidrossolúvel com pontos cheios de contorno duplo, permitindo a separação e montagem de flores tridimensionais de cerejeira (sakura), crisântemos e peônias com caimento escultural.",
    "technicalDetails": "Tecidos de seda habotai, crepe chirimen ou cetim leve (gramatura de 45 a 80 g/m²). Pétalas digitalizadas com ponto festonê perimetral de 1,8 mm de largura e nós de arremate reforçados.",
    "construction": [
      "Quadrados de seda fina colorida ou cetim de poliéster engomado",
      "Entretela hidrossolúvel de filme espesso (40 micras) ou solúvel não-tecido",
      "Linhas de poliéster brilhante 40wt ou fios metálicos finos",
      "Matriz In-The-Hoop com marcação de corte e contorno acetinado",
      "Base de broche, grampo ou tiara para montagem final com cola artesanal"
    ],
    "howItWorks": [
      "1. A entretela hidrossolúvel espessa é montada no bastidor.",
      "2. A máquina borda a linha guia demarcando o contorno de cada pétala.",
      "3. Coloca-se o tecido de seda sobre a marcação e a máquina executa o ponto de fixação.",
      "4. O excesso de tecido é refilado rente à costura com tesoura de ponta curva.",
      "5. A máquina borda o ponto cheio acetinado de cobertura nas bordas das pétalas.",
      "6. A entretela é dissolvida em água morna e as pétalas secam com flexibilidade.",
      "7. As pétalas são dobradas e coladas em camadas circulares formando a flor Kanzashi 3D.",
      "8. Adiciona-se pérolas e pistilos no centro da flor para acabamento impecável."
    ],
    "mainTypes": [
      "Hana Kanzashi (Flores sazonais de cerejeira, glicínia e ameixeira usadas por Maikos/Gueixas)",
      "Kanzashi de Noiva Ocidental (Flores brancas e prateadas para tiaras e grinaldas de casamento)",
      "Broches e Corsages Kanzashi Contemporâneos (Para lapelas de vestidos e bolsas de festa)"
    ],
    "characteristics": [
      "Efeito visual tridimensional fascinante com pétalas soltas e realistas",
      "Altíssima rentabilidade e aproveitamento total de pequenos retalhos nobres de seda",
      "Grande leveza: os enfeites de cabelo não pesam na cabeça nem desmancham o penteado",
      "Versatilidade para acessórios de moda, chapéus, presilhas e buquês de noiva eternos"
    ],
    "limitations": [
      "Exige refilamento manual preciso rente ao ponto de fixação antes do ponto cheio",
      "Não utilizar tecidos sintéticos que desfiem excessivamente sem selagem prévia",
      "A montagem final exige cuidado com a quantidade de cola para não manchar a seda"
    ],
    "numberingSystem": [
      "Tamanho Médio das Pétalas: 15 mm a 35 mm",
      "Gramatura da Seda: 50 a 80 g/m²",
      "Largura do Ponto de Borda: 1,8 mm a 2,4 mm"
    ],
    "advantages": [
      "✔ Criação de acessórios exclusivos com altíssimo valor em ateliês de noivas e debutantes",
      "✔ Aproveitamento inteligente de sobras de tecidos nobres do ateliê",
      "✔ Produto encantador com excelente saída para presentes e lembrancinhas finas"
    ],
    "commonErrors": [
      "❌ Deixar sobras de tecido aparecendo por fora do ponto cheio de borda",
      "❌ Usar entretela rasgável comum, ficando pedaços de papel branco presos dentro da pétala",
      "❌ Usar cola líquida escolar que amarela a seda e mancha o bordado"
    ],
    "voceSabia": "No Japão tradicional, as jovens aprendizes de gueixa (Maikos) mudam as flores do seu Kanzashi a cada mês do ano para celebrar a natureza: no mês de março usam flores de pessegueiro, em abril flores de cerejeira (Sakura) e em novembro folhas douradas de bordo (Momiji).",
    "curiosidadeTecnica": "A técnica de micro-pontos In-The-Hoop permite bordar até 30 pétalas individuais de Kanzashi em uma única montagem de bastidor de 13x18 cm em menos de 8 minutos de máquina.",
    "dicaArtrelados": "Para fazer flores de Kanzashi perfeitas no bastidor, use sempre entretela hidrossolúvel de boa qualidade e queime bem de levinho as pontinhas do tecido de cetim com um isqueiro antes do ponto cheio final: as bordinhas ficam 100% seladas e as pétalas nunca desfilam!",
    "comparisonTable": {
      "headers": ["Processo de Confecção", "Tempo por Flor", "Precisão das Pétalas", "Resistência Estrutural"],
      "rows": [
        ["Kanzashi ITH no Bastidor", "5 minutos", "100% Idênticas e perfeitas", "Altíssima (bordas seladas)"],
        ["Dobradura Manual Pura", "20 a 30 minutos", "Variável (artesanal)", "Média (depende da cola)"],
        ["Flores Artificiais Plásticas", "Industrial pronta", "Plástica e comum", "Básica comercial"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela Hidrossolúvel Espessa 40 micras",
      "threadTension": "100 a 110 gf (superior) e 20 gf (bobina)",
      "density": "0.38 mm no ponto cheio perimetral"
    },
    "applications": [
      "Grinaldas, tiaras e pentes de flores para noivas, daminhas e formandas",
      "Broches florais tridimensionais para vestidos de festa e casacos",
      "Acessórios infantis de cabelo, tiaras de bebê e presilhas bico de pato",
      "Buquês de noiva eternos em seda bordada e porta-guardanapos de luxo"
    ],
    "troubleshootingTips": [
      "Se as pontas da pétala ficarem com fiapinhos brancos da entretela após lavar, passe um pincel macio com água morna",
      "Utilize tesoura de ponta curva (estilo pelicano) para refilar o tecido o mais rente possível do ponto de marcação",
      "Monte as pétalas usando cola de silicone líquida fria ou cola de tecido transparente de secagem rápida"
    ],
    "relatedTerms": [
      "Técnicas de Bastidor",
      "Bordado In-The-Hoop (ITH)",
      "Entretela Hidrossolúvel",
      "Kimono / Quimono Japonês",
      "Acabamento & Finalização"
    ],
    "tags": [
      "k-084",
      "kanzashi",
      "flores de seda",
      "aderecos de noiva",
      "in the hoop",
      "flores 3d",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TOKYO TSUMAMI KANZASHI GUILD. The Traditional Craft of Silk Petal Folding and Embellishment. Tokyo, 2022.",
      "PARRISH, Gail. In-The-Hoop 3D Floral and Headpiece Embroidery. Cincinnati, 2023."
    ],
    "practicalExercise": "Coloque entretela solúvel no bastidor. Crie uma matriz com o contorno de uma pétala de 3 cm em ponto cheio com 2 mm de largura. Borde sobre um retalho de cetim vermelho. Lave na pia para sumir o plástico e monte a pétala dobrando a pontinha: você acabou de criar sua primeira pétala Kanzashi!",
    "quickSummary": "Técnica japonesa para bordar e montar flores tridimensionais de seda para tiaras de noiva e presilhas.",
    "beginnerExplanation": "O Kanzashi é a arte de criar aquelas florzinhas japonesas 3D de seda que parecem de verdade. A gente borda as pétalas soltas no bastidor com um plástico que sai na água e depois cola as pétalas juntas para fazer tiaras e broches maravilhosos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-085-karabakh-tecidos-tradicionais-caucasianos-e-bordados-de-rosas",
    "code": "K-085",
    "term": "Karabakh: Tecidos Tradicionais Caucasianos e Bordados de Rosas (Karabakh Caucasian Velvet & Rose Embroidery)",
    "letter": "K",
    "level": "Avançado 🔴",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino.",
    "origin": "Do topônimo Karabakh (Jardim Negro em azeri/turcomano). Região montanhosa histórica do Cáucaso famosa por seus tapetes e tapeçarias com grandes rosas exuberantes.",
    "summary": "Veludos e tapeçarias encorpadas com motivos de buquês de rosas barrocas e flores dramáticas em tons escuros e dourados.",
    "definition": "Karabakh (Caucasian Floral Tapestry & Velvet Embroidery) é a célebre escola de arte têxtil do Cáucaso, caracterizada pela combinação de fundos pretos ou azul-marinho profundos em veludos de algodão e lã com bordados dramáticos de buquês de rosas silvestres, peônias e folhas de acanto em múltiplos degradês de vermelho, rosa antigo, açafrão e verde oliva. No bordado computadorizado, a técnica exige a digitalização de pontos cheios e tatamis com sobreposição de camadas de sombreamento e o uso de sobrefilmes solúveis para preservar o relevo das pétalas sobre o veludo.",
    "technicalDetails": "Base em veludo de algodão nobre de 320 a 480 g/m² ou sarjas pesadas. Matrizes com técnica de mesclagem de cores (thread blending) em até 5 tons graduais de linhas de bordar por pétala.",
    "construction": [
      "Tecido base de veludo de algodão denso na cor preta ou azul profundo",
      "Entretela de recorte pesada no verso (Cutaway 80 g/m²)",
      "Película hidrossolúvel de 30 micras no topo para evitar afundamento do ponto no veludo",
      "Cartela rica de fios de poliéster brilhante com 6 a 10 tons graduais de rosa e vermelho",
      "Underlay em grade fina de 90° com recuo de borda de 1,0 mm"
    ],
    "howItWorks": [
      "1. O veludo Karabakh é fixado com técnica flutuante ou bastidor magnético para não marcar os pelos.",
      "2. O filme solúvel é colocado no topo para assentar o pelo do veludo.",
      "3. A máquina borda o fundo das pétalas com o tom de vermelho mais escuro (vinho/rubi).",
      "4. A segunda camada entra intercalando pontos médios no tom carmim.",
      "5. A terceira camada aplica os realces de luz com rosa claro e toques de champanhe.",
      "6. As folhas são bordadas com verde musgo e dourado envelhecido.",
      "7. Retira-se a peça, dissolve-se o plástico com vapor e o buquê de rosas salta com realismo dramático."
    ],
    "mainTypes": [
      "Karabakh de Buquê Barroco (Com grandes rosas centrais e moldura de folhas douradas)",
      "Karabakh de Medalhão Geométrico Floral (Com simetria caucasiana clássica)",
      "Karabakh para Moda Festa (Bordados em veludo para jaquetas, capas e vestidos de gala)"
    ],
    "characteristics": [
      "Impacto visual arrebatador com contraste entre o fundo escuro e as rosas reluzentes",
      "Textura macia e suntuosa típica de palácios e casarões históricos",
      "Técnica de degradê e pintura de agulha que valoriza ao máximo a máquina de bordar",
      "Altíssima nobreza e durabilidade em peças que nunca saem de moda"
    ],
    "limitations": [
      "O veludo pode ficar marcado para sempre se for prensado com força em bastidores convencionais",
      "Exige matrizes bem programadas para não criar placas duras e empedradas no veludo",
      "O tempo de máquina é mais longo devido à grande quantidade de trocas de cores de linha"
    ],
    "numberingSystem": [
      "Gramatura do Veludo: 350 a 450 g/m²",
      "Número de Cores Típico da Rosa: 4 a 6 tons de degradê",
      "Densidade por Camada: 0,55 mm a 0,65 mm (camadas combinadas)"
    ],
    "advantages": [
      "✔ Criação de peças de alta tapeçaria e moda luxo com preços de venda elevados",
      "✔ Demonstração de maestria técnica em sombreamento e degradê têxtil",
      "✔ Peças atemporais que são transmitidas de geração em geração"
    ],
    "commonErrors": [
      "❌ Bordar veludo sem película no topo, fazendo os pontos sumirem no meio dos pelos",
      "❌ Usar densidade cheia padrão (0,40 mm) em todas as camadas de degradê, criando um tijolo duro de linha",
      "❌ Prender o veludo em bastidor comum apertando o parafuso, deixando aro branco esmagado"
    ],
    "voceSabia": "As rosas de Karabakh tornaram-se tão famosas no século XIX que inspiraram os estilistas franceses da Belle Époque a criar xales de veludo bordados que eram o maior símbolo de status social em Paris e São Petersburgo.",
    "curiosidadeTecnica": "Para criar um degradê perfeito de rosa sem engrossar o tecido, as pontas das camadas de bordado devem terminar com comprimentos de ponto aleatórios (Random Stitch Length), permitindo que a linha da cor seguinte penetre nos vãos da anterior como uma pintura a óleo.",
    "dicaArtrelados": "Ao bordar sobre veludo preto ou escuro, use SEMPRE a técnica de flutuação adesiva ou bastidor magnético e coloque um plástico hidrossolúvel por cima. Seu veludo vai continuar fofinho, sem marcas redondas do bastidor e com as rosas parecendo uma pintura em 3D!",
    "comparisonTable": {
      "headers": ["Abordagem de Cor", "Número de Tons", "Realismo Visual", "Rigidez do Bordado"],
      "rows": [
        ["Degradê em Camadas Abertas", "4 a 6 tons de linha", "Realismo hiper-detalhado de pintura", "Super macio e maleável"],
        ["Bloco Único de Cor Chapada", "1 cor de rosa", "Visual simples de desenho animado", "Médio"],
        ["Degradê com Camadas Densas", "4 tons densos", "Bom visual mas muito grosso", "Duro como papelão"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "75/11 SES Ponta Bola Leve",
      "stabilizer": "Entretela de Recorte 80 g/m² + Filme Solúvel 30 micras no topo",
      "threadTension": "105 a 115 gf (superior) e 22 gf (bobina)",
      "density": "0.55 mm (camadas de degradê) com Underlay Leve"
    },
    "applications": [
      "Almofadas de veludo de alto luxo e capas de edredom para quartos clássicos",
      "Jaquetas bomber e casacos de inverno em veludo cotelê ou liso",
      "Bolsas de festa, clutches e sapatilhas de veludo bordadas",
      "Tapeçarias decorativas de parede e mantas de piano de cauda"
    ],
    "troubleshootingTips": [
      "Se o aro do bastidor marcar o veludo por acidente, passe um jato de vapor seco por trás da peça e escove os pelos no sentido correto com uma escova de dentes macia",
      "Para dissolver o plástico sem molhar o veludo, use um vaporizador de roupas vertical a 10 cm de distância",
      "Troque as cores de linha com paciência para que a transição entre os tons fique invisível"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Bordado Flutuante",
      "Entretela Hidrossolúvel",
      "Junção de Preenchimentos com Efeito Dégradé",
      "Bastidor Magnético"
    ],
    "tags": [
      "k-085",
      "karabakh",
      "veludo caucasiano",
      "rosas bordadas",
      "degrade",
      "pintura de agulha",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "AZERBAIJAN CARPET MUSEUM. Karabakh Carpets and Velvets: Masterpieces of Floral Art. Baku, 2021.",
      "PARRISH, Gail. Shading and Thread Blending Techniques in Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de veludo preto. Prenda a entretela de recorte no bastidor e cole o veludo por cima. Coloque plástico solúvel no topo. Borde uma pétala com 3 tons de linha vermelha (escuro, médio e claro) usando densidade suave de 0,55 mm. Veja o degradê suave e o veludo fofinho ao redor!",
    "quickSummary": "Técnica caucasiana de bordar rosas exuberantes em degradê sobre veludo preto nobre.",
    "beginnerExplanation": "O estilo Karabakh é aquele bordado espetacular de rosas vermelhas bem realistas bordadas em cima de veludo preto. A gente vai misturando tons de linha vermelha clara e escura para fazer as pétalas parecerem vivas e saltando do veludo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-086-kashgar-silk-sedas-rusticas-da-rota-da-seda-e-bordados-uigures",
    "code": "K-086",
    "term": "Kashgar Silk: Sedas Rústicas da Rota da Seda e Bordados Uigures (Kashgar Wild Silk & Central Asian Geometric Embroidery)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do oásis histórico de Kashgar (China / Ásia Central), encruzilhada fundamental da Rota da Seda e centro milenar de tecelagem de seda Ikat (*Atlas*).",
    "summary": "Seda rústica artesanal tecida com casulos selvagens, base de padrões Ikat coloridos e bordados étnicos com fios dourados e motivos solares.",
    "definition": "Kashgar Silk (ou Seda Atlas Uigur) é o tecido nobre de seda selvagem rústica fiada e tecida à mão nas cidades-oásis da Rota da Seda da Ásia Central. Conhecida pela técnica de tingimento amarrado *Ikat* (onde os fios de seda são tingidos antes da tecelagem, gerando bordas esfumaçadas características) e pela sua textura encorpada com brilho acetinado natural, é o suporte tradicional para bordados de motivos solares, espirais, romãs da fertilidade e gorros *Doppa* com fios de seda e metálicos.",
    "technicalDetails": "Composição em 100% seda selvagem de amoreira (gramatura de 90 a 140 g/m²). Agulhas 70/10 Microtex ou SES com ponta bola leve e entretelas rasgáveis ultrafinas de algodão.",
    "construction": [
      "Tecido de seda Kashgar autêntica com padronagem Ikat ou lisa encorpada",
      "Entretela rasgável de toque macio (Cotton Tearaway 45 g/m²)",
      "Linhas de seda pura ou poliéster brilhante 40wt de alta tenacidade",
      "Matriz de motivos geométricos e arabescos solares em ponto cheio fino",
      "Compensação de repuxo regulada em 0,35 mm para respeitar a maleabilidade da seda"
    ],
    "howItWorks": [
      "1. A seda Kashgar é passada a ferro morno com pano protetor de algodão.",
      "2. É montada no bastidor com entretela rasgável fina sem esticar a trama diagonalmente.",
      "3. Os grafismos solares e flores de romã são digitalizados em pontos cheios estreitos e definidos.",
      "4. A máquina borda em velocidade moderada de 700 PPM para garantir formação perfeita de laçada.",
      "5. Os fios de ouro e cores contrastantes (turquesa, magenta, amarelo ouro) se integram ao brilho da seda.",
      "6. A entretela é rasgada suavemente no verso.",
      "7. A peça ganha o requinte e a alma dos bazares milenares da Rota da Seda."
    ],
    "mainTypes": [
      "Seda Atlas Tradicional (Com padrões Ikat em ondas de cores brilhantes)",
      "Seda Selvagem Rústica Lisa (Com textura slubby encorpada para vestidos e jaquetas)",
      "Bordado em Gorros Doppa (Acessórios tradicionais com 4 painéis bordados em branco e dourado)"
    ],
    "characteristics": [
      "Brilho profundo e elegante que muda de intensidade conforme a incidência da luz",
      "Toque fresco e caimento sofisticado com excelente estrutura têxtil",
      "Resistência superior à seda industrial comum devido à densidade dos fios manuais",
      "Visual étnico autêntico altamente valorizado por coleções de moda internacional"
    ],
    "limitations": [
      "A seda natural não deve ser exposta a produtos químicos abrasivos ou alvejantes com cloro",
      "Evitar pontos cheios extremamente largos (> 7 mm) que possam repuxar a seda",
      "Exige refilamento cuidadoso de linhas no avesso para não repuxar os fios da trama"
    ],
    "numberingSystem": [
      "Gramatura: 90 a 130 g/m²",
      "Densidade Recomendada: 0,38 mm a 0,42 mm",
      "Tensão Superior: 95 a 105 gf"
    ],
    "advantages": [
      "✔ Agregação de valor extremo para vestidos de festa, quimonos e xales de luxo",
      "✔ Diferenciação única no catálogo do ateliê com tecidos de apelo histórico",
      "✔ Excelente durabilidade e respirabilidade natural da fibra proteica"
    ],
    "commonErrors": [
      "❌ Usar agulhas cegas ou grossas que puxam fios da seda criando linhas esgarçadas",
      "❌ Pressionar o ferro quente diretamente sobre a seda sem usar pano de algodão",
      "❌ Bordar com tensão excessiva da linha superior repuxando o tecido no bastidor"
    ],
    "voceSabia": "A cidade de Kashgar tem mais de 2.000 anos de história contínua de comércio de seda; suas feiras dominicais ainda reúnem artesãos que tecem a seda Atlas em teares de madeira usando técnicas herdadas da época de Marco Polo.",
    "curiosidadeTecnica": "A fibra de seda natural possui seção transversal triangular que age como um prisma de cristal, refratando a luz em diferentes ângulos e gerando o brilho iridescente característico que nenhuma fibra sintética consegue igualar com perfeição.",
    "dicaArtrelados": "Ao bordar sobre sedas puras e tecidos nobres, troque sempre a agulha por uma novinha em folha (70/10 Microtex ou Ponta Bola Leve). Uma agulha usada pode ter uma micro-rebarba invisível a olho nu que puxa fios da seda e estraga a peça!",
    "comparisonTable": {
      "headers": ["Tipo de Tecido", "Composição da Fibra", "Origem da Trama", "Comportamento no Bastidor"],
      "rows": [
        ["Kashgar Wild Silk", "100% Seda Selvagem Proteica", "Teares Manuais Rota da Seda", "Firme, nobre e estável"],
        ["Cetim de Seda Tradicional", "100% Seda de Cultivo", "Fiação Industrial Lisa", "Muito escorregadia (requer cuidado)"],
        ["Cetim de Poliéster Comum", "100% Fibra Sintética", "Industrial em massa", "Brilho artificial e calor excessivo"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "70/10 Microtex ou 70/10 SES Ponta Bola Leve",
      "stabilizer": "Entretela de Algodão Rasgável 45 g/m²",
      "threadTension": "100 a 105 gf (superior suave) e 20 gf (bobina)",
      "density": "0.40 mm com pontos bem estruturados"
    },
    "applications": [
      "Vestidos de gala, kaftans e quimonos de noiva de alta exclusividade",
      "Xales de festa e lenços de seda com monogramas e arabescos",
      "Almofadas de seda Ikat para decoração de interiores nobre",
      "Painéis de arte têxtil e quadros emoldurados inspirados no Oriente"
    ],
    "troubleshootingTips": [
      "Se a seda escorregar no aro do bastidor, coloque tiras de fita crepe nas bordas do aro interno para criar tração segura",
      "Passe a peça pelo avesso em temperatura média de seda sem usar jato de água direto para não manchar",
      "Use linhas de poliéster 100% trilobal de alta qualidade ou linhas de seda pura"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Kaftans, Túnicas de Seda",
      "Kimono / Quimono Japonês",
      "Agulhas Microtex",
      "Técnicas de Bastidor"
    ],
    "tags": [
      "k-086",
      "kashgar silk",
      "seda rota da seda",
      "seda uigur",
      "ikat atlas",
      "alta costura",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MILLWARD, James. The Silk Road: A Very Short Introduction. Oxford University Press, 2021.",
      "PARRISH, Gail. Silk Fabric Selection and Machine Embroidery Mastery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido de seda ou cetim nobre. Coloque agulha 70/10 nova e entretela rasgável fina. Digitalize um arabesco persa simples de 4 cm em ponto cheio fino. Borde com linha turquesa e dourada. Veja o brilho luxuoso que se forma na seda!",
    "quickSummary": "Seda pura ancestral da Rota da Seda para bordados de alta nobreza e peças de gala exclusivas.",
    "beginnerExplanation": "A Seda Kashgar é uma seda rústica e maravilhosa que vem de cidades históricas da Ásia. Ela tem um brilho mágico e natural: a gente borda desenhos árabes e florais nela usando agulhas bem fininhas para criar roupas dignas de tapete vermelho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "k-087-kikuyu-beaded-textiles-bordados-com-aplicacao-de-contas-do-quenia",
    "code": "K-087",
    "term": "Kikuyu Beaded Textiles: Bordados com Aplicação de Contas do Quênia (Kikuyu Beadwork & Machine Anchoring)",
    "letter": "K",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bastidor",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do povo Kikuyu (Gikuyu), maior grupo étnico do Quênia, com tradição centenária de bordados ornamentais geométricos com miçangas coloridas em roupas e adereços de couro.",
    "summary": "Método de união e fixação de cordões de miçangas de vidro sobre tecidos e couro através de pontos de ancoragem eletrônicos.",
    "definition": "Kikuyu Beaded Textiles & Machine Anchoring (Bordado com Aplicação Eletrônica de Contas e Miçangas) é a técnica contemporânea que alia o artesanato tradicional do Quênia à máquina de bordar computadorizada, onde cordões de miçangas de vidro coloridas (*rocallas*) ou fitas de contas são ancorados com precisão milimétrica sobre couro, camurça ou linho encorpado. A máquina executa pontos de travamento em ziguezague estreito (couching stitch) ou ponto corrido de amarração entre os vãos de cada conta, permitindo a produção rápida e firme de colares de gola, punhos e faixas étnicas sem risco de rompimento dos fios.",
    "technicalDetails": "Uso de calcador especial para cordões (Couching / Cording Foot) com ranhura inferior de 2,0 a 3,0 mm. Fios de poliéster monofilamento transparente (fio invisível 0,10 mm) ou poliéster 60wt de alta tenacidade para fixação invisível.",
    "construction": [
      "Base de couro macio, camurça, sarja pesada ou feltro estruturado",
      "Cordão de miçangas de vidro pré-enfiadas em linha de náilon resistente",
      "Entretela de recorte encorpada (Cutaway 80 g/m²)",
      "Calcador especial com guia de cordão ou alimentação manual guiada",
      "Matriz com pontos de fixação em ziguezague de 2,0 mm de largura e passo calibrado"
    ],
    "howItWorks": [
      "1. A base de couro ou tecido é fixada no bastidor com entretela de recorte.",
      "2. A máquina borda a linha guia traçando o caminho geométrico do colar ou faixa.",
      "3. O cordão de miçangas é posicionado sobre a linha guia.",
      "4. Utilizando o calcador de cordão, a máquina executa pontos de travamento passando exatamente nos intervalos entre as contas de vidro.",
      "5. A velocidade é mantida em 450 PPM para garantir controle visual absoluto e evitar impacto da agulha com as miçangas.",
      "6. A ponta final do cordão é travada com micro-pontos de arremate reforçados.",
      "7. A peça ganha a solidez, beleza e colorido exuberante das joias têxteis africanas."
    ],
    "mainTypes": [
      "Colares de Gola Étnicos e Peitilhos com Miçangas Circulares",
      "Faixas e Cintos de Couro com Grafismos Geométricos de Miçangas",
      "Detalhes e Alças de Bolsas de Praia e Sandálias Artesanais"
    ],
    "characteristics": [
      "Fusão fascinante entre o brilho vítreo das miçangas e a textura do tecido",
      "Altíssima firmeza mecânica: as contas não soltam mesmo com uso intenso",
      "Cores africanas tradicionais: vermelho, branco, azul cobalto, amarelo e preto",
      "Peças com alto valor comercial em feiras de design, moda praia e acessórios de luxo"
    ],
    "limitations": [
      "Se a agulha bater diretamente no corpo da miçanga de vidro, ela quebra instantaneamente",
      "Exige alinhamento rigoroso entre o passo do ponto da máquina e o tamanho da miçanga",
      "Não utilizar em roupas de bebês ou crianças pequenas por risco de desprendimento acidental"
    ],
    "numberingSystem": [
      "Tamanho das Miçangas: No. 8/0 a No. 11/0 (2,0 mm a 3,0 mm)",
      "Velocidade Máxima: 400 a 500 PPM",
      "Largura do Ponto Ziguezague: 2,0 mm a 2,5 mm"
    ],
    "advantages": [
      "✔ Agilidade imensa: fixa metros de cordões de miçangas em minutos",
      "✔ Criação de joias têxteis e acessórios de moda com altíssima lucratividade",
      "✔ Peças resistentes e laváveis com cuidado manual"
    ],
    "commonErrors": [
      "❌ Usar velocidade alta (> 600 PPM), fazendo a agulha bater nas contas e quebrar",
      "❌ Usar linha fraca de algodão para prender o cordão, fazendo as contas se soltarem com facilidade",
      "❌ Não usar calcador apropriado, deixando o cordão de miçangas escorregar para o lado"
    ],
    "voceSabia": "Nas culturas do Quênia e da África Oriental, as cores das miçangas têm significados profundos: o vermelho simboliza a coragem e o sangue guerreiro, o branco representa a paz e a pureza, o azul significa o céu e as chuvas da fartura e o preto simboliza a força do povo!",
    "curiosidadeTecnica": "O ponto de ancoragem 'Couching' é uma das técnicas mais antigas da história do bordado humano, sendo encontrado em mantos de faraós egípcios do século XIV a.C. para fixar fios de ouro e pedras preciosas que eram grossos demais para passar pelo olho da agulha.",
    "dicaArtrelados": "Ao prender cordões de miçangas ou pérolas na máquina de bordar, use linha de náilon monofilamento transparente (aquela linha invisível bem fininha) na parte de cima: a costura de fixação fica 100% invisível e as miçangas parecem ter sido coladas magicamente sobre o tecido!",
    "comparisonTable": {
      "headers": ["Método de Aplicação", "Tempo por Colar", "Segurança das Contas", "Acabamento"],
      "rows": [
        ["Couching Eletrônico na Máquina", "3 a 5 minutos", "Altíssima (pontos uniformes)", "Profissional e limpo"],
        ["Costura Manual com Agulha", "2 a 4 horas", "Variável (pode afrouxar)", "Artesanal demorado"],
        ["Colagem com Cola de Tecido", "15 minutos", "Baixa (solta na lavagem)", "Risco de manchas duras"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "450 - 500 PPM",
      "needleType": "75/11 SES ou 80/12 Microtex com calcador de cordão",
      "stabilizer": "Entretela de Recorte Pesada 80 g/m²",
      "threadTension": "100 a 110 gf (superior) e 20 gf (bobina)",
      "density": "Pontos de ancoragem a cada 2,5 mm a 3,0 mm"
    },
    "applications": [
      "Golas de festa, decotes e peitilhos de vestidos com pedrarias e miçangas",
      "Cintos femininos de couro e camurça com padronagens tribais",
      "Alças de bolsas artesanais, carteiras e clutches de verão",
      "Sandálias de couro, rasteirinhas e sapatilhas com detalhes étnicos"
    ],
    "troubleshootingTips": [
      "Se a agulha quebrar, verifique se a largura do ziguezague está ampla o suficiente para saltar a largura do cordão de miçangas",
      "Mantenha uma das mãos guiando levemente a entrada do cordão de contas sob o calcador",
      "Utilize sempre óculos de proteção ao bordar com miçangas de vidro para total segurança ocular"
    ],
    "relatedTerms": [
      "Técnicas de Bastidor",
      "Calcador de Cordão (Cording Foot)",
      "Linha Invisível de Náilon",
      "Kangas / Leso",
      "Acabamento & Finalização"
    ],
    "tags": [
      "k-087",
      "kikuyu",
      "micangas",
      "pedrarias",
      "bordado africano",
      "couching",
      "tecnicas de bastidor",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "NATIONAL MUSEUMS OF KENYA. Kikuyu Material Culture and Traditional Beadwork. Nairobi, 2021.",
      "PARRISH, Gail. Machine Couching, Cording and Beaded Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um retalho de jeans grosso. Prenda a entretela no bastidor. Crie uma linha curva simples com ponto ziguezague de 2,5 mm de largura e passo de 3 mm. Pegue um cordão de miçangas e borde em 450 PPM guiando o cordão sob o calcador. Veja as miçangas ficarem perfeitamente presas e firmes!",
    "quickSummary": "Técnica queniana para fixar cordões de miçangas coloridas com pontos firmes da máquina de bordar.",
    "beginnerExplanation": "É o jeito fácil e rápido de prender cordinhas de miçangas coloridas na máquina de bordar usando uma linhazinha invisível. O resultado fica parecendo uma joia africana brilhante e muito firme, ótima para bolsas e golas de vestidos!",
    "updatedAt": "2026-08-29"
  }
]

output_path = "src/data/verbetesLetterK13.ts"
header = """import { Verbete } from "../types";

export const VERBETES_LETTER_K_PART13: Verbete[] = """

with open(output_path, "w", encoding="utf-8") as f:
    f.write(header + json.dumps(verbetes_k13, ensure_ascii=False, indent=2) + ";\n")

print(f"Part 13 (K-075 to K-087) created successfully with {len(verbetes_k13)} verbetes!")

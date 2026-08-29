# -*- coding: utf-8 -*-
import json
import os

# We will define VERBETES_M13 (M-075 to M-087) and VERBETES_M14 (M-088 to M-100)

from verbetes_data_m1 import VERBETES_M13 as M_PART1

VERBETES_M13_REST = [
  {
    "id": "m-078-manta-termica-de-teflon-para-termocolagem-e-apliques",
    "code": "M-078",
    "term": "Manta Térmica de Teflon para Termocolagem & Apliques (PTFE Teflon Heat Press Sheet)",
    "letter": "M",
    "level": "Iniciante 🟢",
    "category": "Equipamentos & Acessórios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego manthe (cobertura) e de Teflon (marca registrada da fibra fluoropolímera de PTFE resistente ao calor).",
    "summary": "Folha antiaderente resistente a altíssimas temperaturas utilizada sobre prensas e ferros térmicos para proteger tecidos delicados e evitar que filmes termocolantes grudem na base da prensa.",
    "definition": "Manta Térmica de Teflon (PTFE Non-Stick Heat Transfer Sheet) é uma lâmina de tecido de fibra de vidro revestida com politetrafluoretileno (PTFE) de grau industrial. Suporta temperaturas contínuas de até 260°C e picos de 300°C sem deformar nem liberar vapores. No bordado computadorizado e na confecção de patches e apliques termocolantes, a folha de teflon é posicionada entre a placa quente da prensa e o bordado, distribuindo o calor de forma perfeitamente homogênea, protegendo os fios de poliéster contra o brilho excessivo por derretimento superficial e impedindo que o adesivo termofusível extravase e suje a placa metálica da prensa.",
    "technicalDetails": "Espessura padrão: 0,13 mm a 0,18 mm (130 a 180 micras). Faixa de temperatura de trabalho: -70°C a +260°C. Superfície 100% antiaderente com resistência química a resinas de poliuretano, poliamida e colas EVA.",
    "construction": [
      "Tecido de malha de fibra de vidro de alta estabilidade dimensional",
      "Revestimento multicamadas de resina de PTFE (Teflon) sinterizada a quente",
      "Acabamento superficial espelhado sem porosidades para fácil limpeza",
      "Bordas cortadas a laser com cantos arredondados para evitar desfiamento",
      "Espessura calibrada para transferência térmica instantânea com retenção zero"
    ],
    "howItWorks": [
      "1. O bordado ou patch com película termocolante é posicionado sobre a peça de vestuário.",
      "2. A folha de teflon é colocada diretamente sobre a superfície do bordado e do tecido.",
      "3. A prensa térmica é baixada com temperatura de 150°C a 160°C por 12 a 15 segundos.",
      "4. O calor penetra através da manta de teflon, fundindo a resina termocolante de forma uniforme.",
      "5. A manta impede que qualquer resíduo de cola pegajosa encoste na chapa de alumínio da prensa.",
      "6. Ao abrir a prensa, a manta de teflon é removida instantaneamente sem grudar em nada.",
      "7. O bordado fica perfeitamente colado, com toque macio e sem marcas de queimadura ou brilho plástico."
    ],
    "mainTypes": [
      "Manta de Teflon Lisa Tradicional (Para prensagem de patches, apliques e filmes de recorte)",
      "Manta de Teflon Texturizada Fosca (Para dar acabamento acetinado fosco em apliques emborrachados)",
      "Capa Protetora de Teflon com Elástico (Encaixa na chapa superior da prensa térmica permanentemente)"
    ],
    "characteristics": [
      "100% antiaderente: nenhuma cola, resina plástica ou tinta de sublimação gruda em sua superfície",
      "Proteção total contra amarelamento e brilho de ferro em tecidos escuros de algodão e poliéster",
      "Reutilizável milhares de vezes com durabilidade superior a 3 anos de uso diário",
      "Fácil higienização: limpa-se com um pano úmido ou álcool em segundos"
    ],
    "limitations": [
      "Não dobrar a folha de teflon ao meio para não quebrar a trama interna de fibra de vidro",
      "Guardar sempre enrolada em formato de tubo ou estendida na horizontal",
      "Evitar contato com objetos cortantes pontiagudos como tesouras afiadas ou estiletes"
    ],
    "numberingSystem": [
      "Espessura Ideal: 0,13 mm (130 micras)",
      "Temperatura Máxima: 260°C",
      "Pressão na Prensa: 40 a 60 PSI (Média/Firme)"
    ],
    "advantages": [
      "✔ Mantém a prensa térmica sempre limpa como nova, sem manchas pretas de cola queimada",
      "✔ Evita a perda de peças nobres por queima ou marcação de ferro quente",
      "✔ Garante colagem uniforme de patches em bonés, jaquetas e uniformes"
    ],
    "commonErrors": [
      "❌ Prensar bordados sem manta de teflon, derretendo o fio de poliéster e deixando o bordado duro e brilhante",
      "❌ Dobrar a folha de teflon para guardar na gaveta, criando vincos brancos que marcam as peças futuras",
      "❌ Usar papel manteiga comum de cozinha em altas temperaturas, que resseca, queima e gruda na cola"
    ],
    "voceSabia": "O Teflon (PTFE) foi descoberto por acidente em 1938 pelo químico Roy Plunkett nos Estados Unidos enquanto pesquisava gases refrigerantes. Ele encontrou o gás polimerizado em um pó branco tão escorregadio que é até hoje a única substância conhecida onde até mesmo as patas de uma lagartixa não conseguem grudar!",
    "curiosidadeTecnica": "O coeficiente de atrito do PTFE contra o aço é de apenas 0,04, sendo o terceiro menor coeficiente de atrito entre todos os sólidos conhecidos pela física moderna. Isso significa que o calor atravessa a manta sem nenhuma fricção superficial, garantindo transferência perfeita.",
    "dicaArtrelados": "Nunca dobre sua folha de teflon! Ao terminar o trabalho no ateliê, enrole a folha em um caninho de papelão (como aquele rolo de papel toalha) ou prenda com um ímã na lateral da própria prensa: sua folha vai durar anos sem nenhum vinco e seus patches vão colar com perfeição de fábrica!",
    "comparisonTable": {
      "headers": ["Material Protetor", "Resistência ao Calor", "Reutilização", "Antiaderência"],
      "rows": [
        ["Manta de Teflon PTFE 0,13mm", "Até 260°C (Excelente)", "Mais de 2.000 vezes", "100% Total (Não gruda cola)"],
        ["Papel Manteiga Comum", "Até 180°C (Fraco)", "1 a 2 vezes (Descarta)", "Média (Pode grudar resina)"],
        ["Pano de Algodão", "Até 200°C", "Várias vezes", "Zero (Cola impregna nas fibras)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "N/A (Processo de prensagem / acabamento térmico)",
      "needleType": "N/A",
      "stabilizer": "Termocolante definitivo no verso do bordado",
      "threadTension": "N/A",
      "density": "Temperatura: 150°C - 160°C por 15 segundos na prensa"
    },
    "applications": [
      "Fixação de patches e emblemas termocolantes em jaquetas jeans e bonés",
      "Termocolagem de apliques em tecido recortado para roupas infantis",
      "Prensagem de entretelas termocolantes no verso de bordados para cobrir o avesso",
      "Proteção de tecidos sintéticos delicados (tactel, helanca, cetim) durante o acabamento térmico"
    ],
    "troubleshootingTips": [
      "Se a folha de teflon acumular resíduos de cola nas bordas, limpe com álcool líquido e pano macio com a prensa morna",
      "Se o bordado ficar opaco após a prensagem, reduza o tempo de aplicação de 15 para 10 segundos",
      "Substitua a manta se houver furos ou ranhuras profundas na fibra de vidro interna"
    ],
    "relatedTerms": [
      "Equipamentos & Acessórios",
      "Termocolante para Apliques",
      "Patches e Emblemas Bordados",
      "Aplique no Bastidor",
      "Acabamento do Avesso"
    ],
    "tags": [
      "m-078",
      "manta de teflon",
      "teflon sheet",
      "prensa termica",
      "termocolante",
      "patches",
      "equipamentos e acessorios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "DUPONT Fluoropolymers Technical Division. PTFE Properties and Heat Transfer Characteristics. Wilmington, 2021.",
      "PARRISH, Gail. Heat Transfer, Appliqué Adhesion & Teflon Protection in Modern Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um patch bordado com termocolante e posicione sobre um pedaço de tecido escuro. Coloque a folha de teflon por cima e prense com o ferro na temperatura algodão por 15 segundos sem vapor. Levante a folha: sinta como a cola fundiu perfeitamente e o bordado manteve o brilho natural sem queimar!",
    "quickSummary": "Folha antiaderente térmica que protege os bordados e impede que colas grudem na prensa de calor.",
    "beginnerExplanation": "A folha de teflon é aquele plástico especial de alta resistência que você coloca em cima do bordado antes de passar o ferro quente ou fechar a prensa: ela não deixa a cola do aplique sujar o ferro e impede que a linha do bordado derreta ou queime!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-079-micro-bordado-em-alta-definicao",
    "code": "M-079",
    "term": "Micro-Bordado em Alta Definição (Micro-Embroidery & Watchmaking Badges)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Técnicas Especiais",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego mikros (minúsculo) e do francês broderie. Vertente de alta joalheria têxtil suíça e francesa.",
    "summary": "Técnica de digitalização e execução de bordados em escala nanométrica e milimétrica com linhas ultrafinas 60wt a 75wt e agulhas 55/7 a 65/9 para detalhes microscópicos.",
    "definition": "Micro-Bordado em Alta Definição (High-Definition Micro-Embroidery) é a especialidade do bordado mecânico de ultra-precisão destinada a reproduzir letras com menos de 3 mm de altura, brasões heráldicos de 15 mm e mostradores de relógios de luxo. Utiliza fios de poliéster ou seda de filamento contínuo número 60, 65 ou 75wt (quase metade da espessura da linha 40 comum), agulhas de ponta aguda cirúrgica Microtex 55/7 a 65/9, tecidos de altíssima densidade de trama (como tafetá de seda ou cambraia suíça) e densidades no software reduzidas para 0,28 mm a 0,32 mm com sub-pontos de compensação micrométrica.",
    "technicalDetails": "Espessura da linha: 60wt a 75wt (título dtex 80 a 110). Agulha: 55/7 a 65/9 Microtex ou Sharp. Densidade de digitalização: 0,28 mm a 0,33 mm. Altura mínima de letra legível: 2,2 mm.",
    "construction": [
      "Tecido nobre de trama ultra-cerrada (cetim de seda pura, tafetá 300 fios ou cambraia fina)",
      "Entretela de recorte fina de poliéster resinado de alta densidade (PolyMesh 40 g/m²)",
      "Agulha Microtex 60/8 ou 65/9 com olho polido a laser",
      "Linha superior ultrafina No. 60 ou No. 75 (Madeira Polyneon 60 ou 75 / Gunold 60)",
      "Linha de bobina ultrafina de filamento contínuo 80wt a 100wt"
    ],
    "howItWorks": [
      "1. A matriz é digitalizada nó a nó com pontos manuais e curvas de Bézier com tolerância centesimal.",
      "2. O tecido de trama fechada é montado no bastidor com tensão perfeita de tambor.",
      "3. A máquina é calibrada com velocidade moderada de 600 a 700 PPM para garantir formação de laçada estável.",
      "4. A agulha fina 60/8 penetra sem abrir furos visíveis nem empurrar as fibras do tecido.",
      "5. A linha 60/75wt preenche os menores detalhes com nitidez óptica equivalente a uma impressão de alta resolução.",
      "6. A compensação de repuxo é calibrada em 0,15 mm para preservar as proporções exatas de letras minúsculas.",
      "7. O resultado é um micro-bordado de qualidade de joalheria, legível com auxílio de lupa."
    ],
    "mainTypes": [
      "Micro-Tipografia e Textos Legais (Letras de 2,5 mm a 3,5 mm para jalecos médicos e assinaturas de luxo)",
      "Micro-Emblemas de Joalheria e Relojoaria (Mostradores bordados para caixas de relógio de 35 a 42 mm)",
      "Insígnias Militares de Lapela e Pins Bordados (Brasões com alta riqueza de detalhes em espaços menores que uma moeda de 1 real)"
    ],
    "characteristics": [
      "Resolução de imagem espetacular com contornos e serifas perfeitamente definidos",
      "Eliminação do empastamento de pontos em curvas fechadas e cantos pequenos",
      "Toque incrivelmente suave, liso e flexível devido à espessura reduzida do fio",
      "Nicho de mercado de altíssimo valor e reconhecimento artístico nobre"
    ],
    "limitations": [
      "Exige troca obrigatória de agulha e linha por numerações finas adequadas",
      "Não aceita tecidos felpudos ou malhas muito elásticas sem entretelamento estruturado",
      "A digitalização exige domínio avançado para não sobrecarregar pontos em áreas microscópicas"
    ],
    "numberingSystem": [
      "Linha Superior: No. 60wt a 75wt",
      "Agulha Indicada: 60/8 a 65/9 Microtex",
      "Densidade Média: 0,30 mm"
    ],
    "advantages": [
      "✔ Permite bordar nomes minúsculos e sites/telefones em mangas e punhos de camisas finas",
      "✔ Conquista clientes exigentes de alta costura, joalherias e marcas de luxo",
      "✔ Valor de cobrança até 300% superior por ponto bordado"
    ],
    "commonErrors": [
      "❌ Usar linha 40 comum para bordar letras menores que 4 mm, criando um borrão ilegível de linha",
      "❌ Digitalizar com underlays comuns pesados, empilhando pontos e quebrando agulhas finas",
      "❌ Usar agulha grossa (80/12 ou 90/14) que faz buracos maiores do que as próprias letras"
    ],
    "voceSabia": "A técnica de micro-bordado foi adotada por relojoeiros suíços como Hublot e Piaget para produzir edições limitadas de relógios mecânicos com mostradores inteiramente bordados em fios de ouro e seda por artesãs que usavam microscópios cirúrgicos!",
    "curiosidadeTecnica": "Uma linha de espessura 75wt tem um diâmetro de apenas 0,07 mm (quase a espessura de um fio de cabelo humano). Ela permite colocar 33% mais pontos na mesma área de 1 milímetro quadrado sem aumentar a rigidez do tecido.",
    "dicaArtrelados": "Para bordar letrinhas minúsculas de jaleco com menos de 4 mm de altura, troque o carretel por linha 60wt e coloque uma agulha 65/9 Microtex: desligue o preenchimento de suporte (underlay) e use apenas um ponto corrido central bem levinho. As letrinhas vão sair tão nítidas que parecem impressas a laser!",
    "comparisonTable": {
      "headers": ["Especificação", "Bordado Padrão Linha 40", "Micro-Bordado Linha 60/75"],
      "rows": [
        ["Altura Mínima de Letra", "5,0 mm a 6,0 mm", "2,2 mm a 3,0 mm (Legibilidade perfeita)"],
        ["Numeração da Agulha", "75/11 a 80/12", "60/8 a 65/9 Microtex / Sharp"],
        ["Espessura do Fio", "Linha 40wt (Padrão)", "Linha 60wt a 75wt (Ultrafina)"],
        ["Densidade no Software", "0,40 mm a 0,45 mm", "0,28 mm a 0,33 mm"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "60/8 ou 65/9 Microtex (Ponta aguda polida)",
      "stabilizer": "Entretela de Recorte Fina PolyMesh 40 g/m²",
      "threadTension": "85 a 95 gf (superior aliviada) e 20 gf (bobina)",
      "density": "0.30 mm com compensação de repuxo de 0.15 mm"
    },
    "applications": [
      "Letras minúsculas de assinaturas, jalecos médicos e uniformes executivos",
      "Brasões militares e condecorações em miniaturas e lapelas",
      "Mostradores têxteis para relojoaria e mostruários de joias",
      "Etiquetas de alta costura e monogramas em lenços finos de seda"
    ],
    "troubleshootingTips": [
      "Se as letrinhas fecharem nos miolos das letras 'e' e 'a', aumente o espaçamento entre colunas no software",
      "Use linha de bobina de poliéster ultrafina 80wt para não criar volume no verso",
      "Aplique uma camada de filme plástico hidrossolúvel fino sobre o tecido se a trama for ligeiramente aberta"
    ],
    "relatedTerms": [
      "Técnicas Especiais",
      "Microtex e Agulhas Ponta Aguda",
      "Linhas & Fios",
      "Micro-Letras e Fontes Pequenas",
      "Densidade de Pontos"
    ],
    "tags": [
      "m-079",
      "micro bordado",
      "alta definicao",
      "linha 60wt",
      "linha 75wt",
      "microtex",
      "tecnicas especiais",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SCHUMACHER, Beat. Swiss Micro-Embroidery Techniques in Luxury Watchmaking. Genebra, 2021.",
      "PARRISH, Gail. High-Definition Micro-Lettering & Precision Stitching Standards. Cincinnati, 2022."
    ],
    "practicalExercise": "Digitalize seu nome completo com apenas 3 mm de altura usando uma fonte com serifa. Coloque linha 60wt na máquina com agulha 65/9 em um retalho de tecido de camisa de algodão fino com entretela PolyMesh. Borde a 600 PPM. Olhe com uma lupa e veja a precisão deslumbrante de cada detalhe!",
    "quickSummary": "Bordados milimétricos com linhas ultrafinas e agulhas especiais para detalhes nítidos como joias.",
    "beginnerExplanation": "É o bordado feito em miniatura, com uma linha tão fininha quanto um fio de cabelo e uma agulhinha bem fina. Isso permite bordar letrinhas pequenininhas e brasões minúsculos com uma nitidez tão perfeita que parece mágica!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "m-080-matriz-para-ponto-richelieu-com-lamina-de-corte-no-cabecote",
    "code": "M-080",
    "term": "Matriz para Ponto Richelieu com Lâmina de Corte no Cabeçote (Cutwork Needles & Richelieu Digitizing)",
    "letter": "M",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Homenagem ao Cardeal de Richelieu na França do século XVII e do inglês cutwork (trabalho de tecido recortado).",
    "summary": "Técnica de digitalização combinada com conjunto de agulhas de corte automático de 4 ângulos (0°, 45°, 90°, 135°) para recortar e bordar rendas e vazados Richelieu diretamente na máquina.",
    "definition": "Matriz para Ponto Richelieu com Lâmina de Corte no Cabeçote (Automated Cutwork & Richelieu Embroidery) é a técnica de digitalização avançada que automatiza a abertura de vazados decorativos e pontes de sustentação (*brides*) sem necessidade de corte manual com tesourinha. Utiliza-se um conjunto de 4 agulhas especiais de corte (lâminas cortantes anguladas) instaladas nas posições de agulha da máquina. A matriz comanda primeiro a costura de reforço, depois movimenta as agulhas de corte em direções sequenciais para extirpar cirurgicamente o pedaço de tecido interno, e finaliza cobrindo as bordas com ponto festonê denso sobre entretela hidrossolúvel.",
    "technicalDetails": "Ângulos das agulhas de corte: 0° (horizontal), 45° (diagonal 1), 90° (vertical), 135° (diagonal 2). Densidade do festonê perimetral: 0,35 mm a 0,40 mm. Compensação de cobertura do corte: 0,8 mm a 1,2 mm.",
    "construction": [
      "Kit de 4 agulhas de lâmina de corte (Cutwork Needles) codificadas por cores",
      "Base de linho fino, cambraia ou percal 100% algodão",
      "Entretela hidrossolúvel dupla de alta resistência (Aquasol / Solvy 80 micras)",
      "Linha de algodão mercerizado fosco No. 50 ou poliéster acetinado No. 40",
      "Matriz digitalizada em software compatível com comandos de parada e corte CNC"
    ],
    "howItWorks": [
      "1. A máquina borda uma linha de assentamento perimetral para delimitar o orifício vazado.",
      "2. A máquina troca para a agulha de corte 1 (ex: amarela a 0°) e corta as linhas horizontais da janela.",
      "3. Troca para as agulhas de corte 2, 3 e 4 para cortar as diagonais e verticais, soltando o retalho de tecido.",
      "4. O retalho cortado é retirado suavemente do bastidor com uma pinça fina.",
      "5. A máquina borda as pontes rendadas (*brides*) suspensas sobre a entretela hidrossolúvel exposta.",
      "6. Em seguida, a máquina borda o ponto festonê de alta densidade por cima de toda a borda cortada.",
      "7. A peça é lavada em água morna: a entretela dissolve e surge uma renda Richelieu legítima e impecável."
    ],
    "mainTypes": [
      "Richelieu Clássico com Pontes Simples (Para toalhas de mesa, caminhos de mesa e jogos americanos nobres)",
      "Richelieu Rococó com Ilhoses Circulares (Para camisolas de batizado, vestidos de noiva e lençóis de linho)",
      "Cutwork Geométrico Moderno (Para detalhes vazados em bolsos, mangas e jaquetas de moda contemporânea)"
    ],
    "characteristics": [
      "Precisão milimétrica absoluta dos vazados cortados pela própria máquina sem esforço manual",
      "Eliminação de 100% dos cortes acidentais que acontecem ao usar tesourinhas manuais",
      "Acabamento perimetral perfeito sem desfiar e com bordas seladas pelo ponto festonê",
      "Alta produtividade industrial permitindo fazer dezenas de toalhas idênticas em série"
    ],
    "limitations": [
      "Exige software de matriz com módulo de corte específico ou programação manual de trocas de cor",
      "Requer máquina com troca de agulha automática ou troca manual sequencial das agulhas de corte",
      "Uso indispensável de entretela hidrossolúvel firme de boa qualidade"
    ],
    "numberingSystem": [
      "Conjunto de Corte: 4 Agulhas Anguladas (0°, 45°, 90°, 135°)",
      "Densidade do Festonê: 0,38 mm",
      "Largura do Ponto Cheio de Borda: 3,5 mm a 4,5 mm"
    ],
    "advantages": [
      "✔ Transforma a confecção de Richelieu tradicional em um processo rápido e altamente lucrativo",
      "✔ Agrega o maior valor histórico e comercial do bordado nobre de cama, mesa e banho",
      "✔ Produto final com qualidade comparável às rendas artesanais de museu"
    ],
    "commonErrors": [
      "❌ Colocar a largura do festonê muito estreita (< 2,5 mm), deixando a borda cortada escapar e desfiar",
      "❌ Esquecer de colocar entretela hidrossolúvel dupla embaixo do tecido, fazendo as pontes caírem no vazio",
      "❌ Inverter a ordem das agulhas de corte, fazendo o corte sair torto ou incompleto"
    ],
    "voceSabia": "A renda Richelieu foi criada no século XVII quando o Cardeal de Richelieu, primeiro-ministro da França, proibiu a importação de rendas caras da Itália para proteger a economia francesa; as artesãs francesas responderam criando essa técnica de recortar o linho e bordar por cima, que virou febre mundial!",
    "curiosidadeTecnica": "As agulhas de corte (Cutwork Needles) não possuem olho nem levam linha: elas têm uma micro-lâmina em forma de cinzel na ponta. Ao descerem no tecido, realizam micro-incisões lineares de 0,8 mm de comprimento; a combinação dos 4 ângulos permite cortar curvas e formas perfeitas.",
    "dicaArtrelados": "Ao bordar Richelieu com lâminas de corte, use sempre duas camadas de entretela hidrossolúvel bem esticadas no bastidor: borrife um tiquinho de água com pincel nas pontes rendadas logo após o bordado para assentar os nós antes de lavar a peça inteira!",
    "comparisonTable": {
      "headers": ["Método de Richelieu", "Tempo de Execução", "Risco de Picar o Tecido", "Precisão do Corte"],
      "rows": [
        ["Agulhas de Corte Automático", "10 minutos (100% na máquina)", "Zero (Corte milimétrico CNC)", "Perfeita (0,05 mm)"],
        ["Corte Manual com Tesourinha", "45 minutos (Exige parar a máquina)", "Alto (Risco de cortar a linha)", "Depende da mão da bordadeira"],
        ["Corte a Laser Integrado", "2 minutos (Linha de montagem)", "Muito baixo (Risco de queima)", "Altíssima a laser"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "550 - 650 PPM (Corte: 450 PPM)",
      "needleType": "Kit de Agulhas Cutwork (4 ângulos) + Agulha 75/11 para bordado",
      "stabilizer": "Entretela Hidrossolúvel Dupla (80 micras cada)",
      "threadTension": "100 a 110 gf (superior) e 22 gf (bobina)",
      "density": "0.38 mm com festonê de 4.0 mm de largura"
    },
    "applications": [
      "Toalhas de mesa de banquete, caminhos de mesa e jogos americanos de linho puro",
      "Lençóis de berço de batizado, vestidos infantis de gala e mantilhas de noiva",
      "Cortinas e barrados rendados para decoração de interiores clássica",
      "Almofadas nobres e camisolas de algodão de alta costura"
    ],
    "troubleshootingTips": [
      "Se o retalho de tecido não se soltar facilmente após o corte, aumente a densidade dos golpes da agulha de corte no software",
      "Verifique se o festonê cobre pelo menos 1,0 mm para dentro e 1,0 mm para fora da linha de corte",
      "Lave a peça em água morna com algumas gotas de sabão neutro para dissolver 100% da entretela"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Festonê",
      "Entretela Hidrossolúvel",
      "Película Hidrossolúvel",
      "Matriz de Falso Richelieu / Cutwork no Bastidor"
    ],
    "tags": [
      "m-080",
      "ponto richelieu",
      "cutwork needles",
      "laminas de corte",
      "rendas",
      "linho",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BERNADOTTE, Madeleine. The Art of Ecclesiastical and Table Cutwork Lace. Paris, 2021.",
      "PARRISH, Gail. Automated Cutwork Needle Digitizing and Richelieu Finishing. Cincinnati, 2022."
    ],
    "practicalExercise": "Configure uma matriz simples com um círculo vazado de 4 cm com pontes em cruz e borda em festonê sobre entretela hidrossolúvel dupla e cambraia de algodão. Execute os passos de corte e bordado. Lave com água morna e veja a renda clássica surgir perfeita sem você ter usado tesoura!",
    "quickSummary": "Uso de agulhas com lâminas na ponta que recortam o tecido sozinhas para criar rendas Richelieu perfeitas.",
    "beginnerExplanation": "O Richelieu é aquela renda linda cheia de buraquinhos decorativos. Com as agulhas de corte especiais, a própria máquina bordadeira recorta os tecidos nos lugares certos e faz o acabamento de renda por cima, tudo automático e perfeito!",
    "updatedAt": "2026-08-29"
  }
]

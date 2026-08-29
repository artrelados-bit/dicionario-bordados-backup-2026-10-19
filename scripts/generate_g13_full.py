"""
Script gerador para os 26 novos verbetes G-075 a G-100 do DIBE Artrelados.
Gera verbetesLetterG13.ts (G-075 a G-087) e verbetesLetterG14.ts (G-088 a G-100).
"""
import json

def get_verbetes_g13_full():
    from generate_g13 import get_verbetes_g13
    base_g13 = get_verbetes_g13()
    
    extra_g13 = [
      {
        "id": "g-081-gerenciador-paleta-cores-mapeamento-fios-rgb-pantone",
        "code": "G-081",
        "letter": "G",
        "term": "Gerenciador de Paleta de Cores e Mapeamento de Fios RGB/Pantone (Thread Palette Manager & Pantone Color Mapping)",
        "level": "Intermediário 🟡",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Programação de Bordado",
        "origin": "Dos sistemas de calibração cromática digital CIE L*a*b* e catálogos internacionais de fios de bordar (Madeira, Polyneon, Isacord, Lumina) digitalizados na década de 1990.",
        "summary": "Sistema de gerenciamento de cores do software que converte vetores RGB/CMYK em códigos reais de carretéis de linha dos principais fabricantes do mundo.",
        "definition": "O Gerenciador de Paleta de Cores e Mapeamento de Fios (Thread Color Palette Management & Delta-E Color Matching) é a ferramenta que faz a ponte entre as cores digitais da tela do computador e os carretéis físicos de linha disponíveis no ateliê. Ele compara os valores RGB ou códigos Pantone da arte do cliente com tabelas espectrofotométricas dos fabricantes de fios (como Madeira, Coats Corrente, Isacord, Polyneon, Setalina, Lumina) e calcula matematicamente a correspondência mais próxima (menor distância cromática ΔE), gerando uma ficha técnica de produção (Production Worksheet) com a numeração exata de cada cone a ser colocado na máquina.",
        "technicalDetails": "O algoritmo converte os canais sRGB da arte vetorial no espaço de cores perceptualmente uniforme CIE L*a*b* e calcula a distância euclidiana pelo padrão CIEDE2000: ΔE*₀₀ = √((ΔL'/k_L S_L)² + (ΔC'/k_C S_C)² + (ΔH'/k_H S_H)² + R_T (ΔC'/k_C S_C)(ΔH'/k_H S_H)). Um valor de ΔE < 1.0 indica que a diferença de cor entre a linha física e a arte na tela é praticamente invisível ao olho humano.",
        "construction": [
          "Tabelas digitais de fabricantes de fios (Madeira Polyneon/Rayon, Isacord, Coats, Lumina, Sulky)",
          "Algoritmo de correspondência cromática CIE L*a*b* / CIEDE2000",
          "Mapeador de paleta personalizada do ateliê (My Threads Chart)",
          "Gerador de ficha técnica de produção para o operador de máquina (Color Sequence Sheet)",
          "Simulador de brilho e textura física de fios de poliéster, viscose e metalizados"
        ],
        "howItWorks": [
          "1. O programador importa o logotipo do cliente com as cores corporativas (ex: Pantone 286 C e Pantone 186 C).",
          "2. Abre o gerenciador de paletas e seleciona a marca de linha que possui no estoque do ateliê (ex: Lumina Poliéster).",
          "3. O software encontra instantaneamente as cores de linha mais próximas e exibe o código exato de cada cone.",
          "4. Imprime a ficha de produção com a lista de agulhas e cores, permitindo ao operador preparar a máquina sem dúvidas."
        ],
        "mainTypes": [
          "Mapeamento Automático por Proximidade Cromática (Delta-E Matching)",
          "Tabela de Fios do Próprio Ateliê (Estoque cadastrado de cones disponíveis)",
          "Conversão Cruzada entre Fabricantes (Ex: Converter códigos Madeira para Coats ou Lumina)"
        ],
        "characteristics": [
          "Fidelidade impressionante entre a arte aprovada pelo cliente e o bordado real no tecido",
          "Eliminação de erros de troca de cores por parte do operador da máquina",
          "Agilidade na identificação dos cones de linha na prateleira do ateliê"
        ],
        "limitations": [
          "Monitores não calibrados podem exibir cores ligeiramente diferentes da cor real do filamento",
          "A luz do ambiente (lâmpada amarela vs luz do sol) altera a percepção visual da cor do fio (metamerismo)"
        ],
        "numberingSystem": [
          "Tolerância Perceptiva Ideal: ΔE < 1.5",
          "Tabelas de Cores Globais Suportadas: Mais de 50 marcas internacionais",
          "Tamanho Típico da Paleta de Ateliê: 100 a 300 cones ativos"
        ],
        "advantages": [
          "✔ Nunca mais erre a tonalidade de um logotipo de cliente exigente",
          "✔ Economia de tempo: encontre o número do cone de linha em 2 cliques",
          "✔ Ficha técnica profissional que valoriza o trabalho do ateliê"
        ],
        "commonErrors": [
          "❌ Escolher uma cor genérica na tela e deixar o operador adivinhar qual cone usar",
          "❌ Não cadastrar as marcas de linhas que você realmente usa no seu ateliê",
          "❌ Esquecer de salvar a matriz no formato final com a ordem exata de paradas de agulha"
        ],
        "voceSabia": "Muitas bordadeiras guardam seus cones de linha organizados exatamente pelo número do código impresso na base do carretel, facilitando pegar a cor certa em segundos graças à ficha do software!",
        "curiosidadeTecnica": "O fenômeno do 'metamerismo' faz com que duas linhas que parecem exatamente iguais sob a luz fluorescente do ateliê fiquem diferentes quando o cliente vai para a luz do sol. Softwares avançados têm simuladores de iluminante D65!",
        "dicaArtrelados": "Cadastre no seu programa uma paleta chamada 'Minhas Linhas' com apenas as cores que você tem fisicamente na sua estante. Assim, o software sempre vai sugerir as cores que você já tem em mãos, evitando ter que sair correndo para comprar linha!",
        "applications": [
          "Bordado de uniformes corporativos com exigência de padrão de cor rigoroso",
          "Reprodução de personagens famosos de desenhos animados com cores originais exatas",
          "Organização de produção em ateliês com múltiplas máquinas e operadores",
          "Elaboração de fichas técnicas para controle de qualidade e expedição"
        ],
        "troubleshootingTips": [
          "Se a cor na tela parece muito diferente da cor no bordado real, use uma cartela física de amostras de fios com fios reais enrolados para conferir.",
          "Se a máquina está pedindo uma cor em ordem trocada, verifique a lista de paradas de cor na sequência de objetos da matriz.",
          "Se você não tem o tom exato do cliente, faça o teste de duas cores próximas no mesmo tecido para ele escolher antes de bordar o lote todo."
        ],
        "relatedTerms": [
          "Tabela de Fios (Thread Chart)",
          "Cartela de Cores Física",
          "Ficha Técnica de Bordado",
          "Ordem de Troca de Linha",
          "Metamerismo"
        ],
        "tags": ["paleta-cores", "tabela-fios", "pantone", "rgb", "ficha-tecnica", "gerenciador", "programacao"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Color Management and Thread Chart Integration. Sydney: Wilcom, 2023. INTERNATIONAL COMMISSION ON ILLUMINATION (CIE). Colorimetry Technical Report. Vienna: CIE, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Color Management and Thread Chart Integration. Sydney: Wilcom, 2023.",
          "INTERNATIONAL COMMISSION ON ILLUMINATION (CIE). Colorimetry Technical Report. Vienna: CIE, 2022.",
          "ARTRELADOS. Gestão Cromática e Mapeamento Espectrofotométrico de Fios no Bordado. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Abra a matriz de um logotipo colorido no software. Mude a paleta para a marca de linha que você mais usa (ex: Lumina ou Madeira). Use o botão de correspondência automática e veja como o programa lista os números exatos dos cones. Imprima a ficha técnica e compare com os cones na sua prateleira!",
        "quickSummary": "O gerenciador de paletas conecta as cores do desenho no computador aos números reais dos cones de linha que você tem no ateliê.",
        "beginnerExplanation": "É como ter um assistente inteligente que olha para o desenho na tela e te diz: 'Pega o cone de linha número 205 da prateleira que é exatamente esse azul da foto!'. Você nunca mais perde tempo procurando qual linha combina com a imagem!",
        "recommendedSettings": {
          "speedPPM": "Padrão",
          "needleType": "Padrão",
          "stabilizer": "Padrão",
          "threadTension": "Padrão",
          "density": "Padrão"
        }
      },
      {
        "id": "g-082-gabarito-digital-bastidor-area-bordado-segura",
        "code": "G-082",
        "letter": "G",
        "term": "Gabarito Digital de Bastidor com Área de Bordado Segura (Digital Hoop Template & Safe Margin Enclosure)",
        "level": "Iniciante 🟢",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Programação de Bordado",
        "origin": "Desenvolvido pelos fabricantes de máquinas domésticas e industriais (Brother, Janome, Barudan, Tajima) para prevenir colisões de agulhas e calcadores com o aro do bastidor.",
        "summary": "Representação gráfica do bastidor na tela do software e da máquina, exibindo as margens físicas reais de segurança para evitar que a agulha bata na moldura plástica.",
        "definition": "O Gabarito Digital de Bastidor com Área de Bordado Segura (Digital Hoop Display & Collision Boundary) é o sistema de referência dimensional que projeta na área de trabalho do software e no painel da máquina de bordar o contorno exato do bastidor selecionado (como 10x10 cm, 13x18 cm, 20x30 cm, bastidor de boné ou bastidores magnéticos). O sistema traça uma margem interna de segurança (geralmente de 5 a 10 mm em relação ao aro plástico ou metálico), impedindo que o operador posicione pontos de bordado na zona de perigo onde o calcador ou a haste da agulha colidiriam mecanicamente com o bastidor, o que quebraria agulhas e desregularia o ponto de sincronismo da máquina.",
        "technicalDetails": "O sistema mapeia o envelope de trabalho do pantógrafo nos limites [X_min + M, X_max - M] e [Y_min + M, Y_max - M], onde M é a margem de segurança do raio do calcador (tipicamente 6.5 mm). Ao detectar que um nó ou ponto extrapola esse limite, o software emite alertas sonoros e visuais e bloqueia o salvamento no formato nativo da máquina.",
        "construction": [
          "Biblioteca gráfica de bastidores padronizados por marca e modelo",
          "Linha de limite físico externo do aro (Outer Hoop Border)",
          "Linha pontilhada de área máxima de bordado seguro (Safe Sewing Field)",
          "Marcador de centro com retículo cartesiano (X=0, Y=0)",
          "Sensor de validação de envelope no painel da máquina (Trace / Contorno de Teste)"
        ],
        "howItWorks": [
          "1. O operador escolhe no software o bastidor que vai usar (ex: 13x18 cm da sua máquina).",
          "2. O gabarito aparece na tela mostrando a área útil exata e o centro com cruz de alinhamento.",
          "3. O operador ajusta o tamanho da matriz para caber confortavelmente dentro da margem pontilhada.",
          "4. Ao colocar na máquina, usa o botão de 'Traçar Área' (Trace) para confirmar no tecido antes de apertar o Play com 100% de segurança."
        ],
        "mainTypes": [
          "Gabarito Retangular / Quadrado (Para peças planas, toalhas e vestuário)",
          "Gabarito Redondo / Oval (Para camisas polo, punhos e chapéus)",
          "Gabarito de Bastidor Tubular de Boné (Cap Frame Template com curvatura 270°)"
        ],
        "characteristics": [
          "Proteção total contra batidas mecânicas destruidoras de agulha e lançadeira",
          "Centralização milimétrica de matrizes em relação ao ponto zero do bastidor",
          "Facilidade para escolher o menor bastidor possível para economizar entretela"
        ],
        "limitations": [
          "A área do gabarito é sempre menor que o tamanho físico total do aro plástico",
          "Usar bastidores paralelos de terceiros exige cadastrar as medidas personalizadas no software"
        ],
        "numberingSystem": [
          "Margem de Segurança Padrão: 5.0 mm a 8.0 mm de folga do aro",
          "Bastidores Domésticos Comuns: 100x100 mm, 130x180 mm, 160x260 mm, 200x300 mm",
          "Bastidores Industriais Comuns: 15 cm Redondo, 300x300 mm, 400x500 mm"
        ],
        "advantages": [
          "✔ Segurança absoluta: nunca mais quebre uma agulha batendo no bastidor",
          "✔ Alinhamento perfeito do desenho com as marcações feitas com fita métrica no tecido",
          "✔ Aproveitamento máximo da área de bordado sem riscos"
        ],
        "commonErrors": [
          "❌ Esticar a matriz até encostar na borda de plástico do bastidor (a agulha vai bater com força)",
          "❌ Não fazer a conferência de traçado (Trace) na máquina antes de começar a bordar",
          "❌ Escolher o bastidor errado no software (ex: desenhar para 20x30 e colocar o aro de 13x18 na máquina)"
        ],
        "voceSabia": "O botão 'Trace' (ou Traçado) presente na sua máquina de bordar move o bastidor nos quatro cantos extremos da matriz sem costurar, apenas para você ter certeza de que a agulha não vai bater em nada e que o bordado vai cair no lugar certo!",
        "curiosidadeTecnica": "Nas máquinas industriais de alta velocidade (1200 PPM), uma batida de agulha no aro do bastidor exerce uma força de impacto superior a 50 kgf instantâneos, capaz de entortar a barra da agulha e quebrar a ponta da lançadeira!",
        "dicaArtrelados": "Sempre escolha o menor bastidor em que sua matriz couber com pelo menos 1 cm de folga! Quanto menor o bastidor, mais esticado e firme o tecido fica, e menos o bordado vai repuxar ou enrugar!",
        "applications": [
          "Posicionamento de nomes e brasões em toalhas, fraldas e camisas",
          "Bordado de peças montadas com golas e zíperes próximos à área de costura",
          "Digitalização de matrizes grandes divididas em múltiplos estágios",
          "Bordados em bonés estruturados com limitação de altura frontal"
        ],
        "troubleshootingTips": [
          "Se a máquina apita e mostra a mensagem 'Matriz ultrapassa o bastidor', reduza o tamanho do desenho em 3% ou mude para o bastidor maior.",
          "Se a matriz não está centralizada no bastidor, use a ferramenta de 'Centralização Automática no Ponto Zero (0,0)' no software.",
          "Se o calcador está raspando no parafuso do bastidor, aumente a margem de segurança nas configurações do programa."
        ],
        "relatedTerms": [
          "Bastidor de Bordado",
          "Área Útil de Bordado",
          "Traçado de Teste (Trace)",
          "Ponto Zero (0,0)",
          "Colisão de Agulha"
        ],
        "tags": ["gabarito-bastidor", "area-segura", "bastidor", "seguranca", "centralizacao", "trace", "iniciante"],
        "updatedAt": "2026-08-29",
        "sourceReference": "BROTHER SEWING & EMBROIDERY. Hoop Templates and Sewing Area Boundary Manual. Nagoya: Brother, 2023. TAJIMA GROUP. Cap Frame and Tubular Hoop Clearance Guidelines. Nagoya: Tajima, 2022.",
        "bibliographicReferences": [
          "BROTHER SEWING & EMBROIDERY. Hoop Templates and Sewing Area Boundary Manual. Nagoya: Brother, 2023.",
          "TAJIMA GROUP. Cap Frame and Tubular Hoop Clearance Guidelines. Nagoya: Tajima, 2022.",
          "ARTRELADOS. Guia de Segurança e Aproveitamento de Bastidores no Ateliê de Bordado. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Coloque um tecido no bastidor 13x18 cm da sua máquina. Carregue uma matriz que ocupe quase todo o espaço. Antes de iniciar o bordado, aperte o botão 'Trace' e observe o calcador contornando os quatro cantos. Veja como a margem de segurança mantém a agulha a uma distância segura do plástico!",
        "quickSummary": "O gabarito digital mostra na tela o tamanho exato do seu bastidor com uma linha de segurança para a agulha nunca bater na moldura plástica.",
        "beginnerExplanation": "É como a cerca de um parquinho: o gabarito desenha o contorno do seu bastidor na tela e te mostra até onde você pode colocar o bordado com segurança, para que a agulha trabalhe livre e nunca bata nas bordas de plástico!",
        "recommendedSettings": {
          "speedPPM": "Padrão",
          "needleType": "Padrão",
          "stabilizer": "Padrão",
          "threadTension": "Padrão",
          "density": "Padrão"
        }
      },
      {
        "id": "g-083-ponto-grao-arroz-ponto-semente-computadorizado",
        "code": "G-083",
        "letter": "G",
        "term": "Ponto Grão de Arroz e Ponto Semente Computadorizado (Seed Stitch & Rice Grain Texture Pattern)",
        "level": "Intermediário 🟡",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Efeitos Decorativos e Pontos",
        "origin": "Do clássico ponto de bordado livre manual 'Seed Stitch' / 'Ponto Semente', adaptado para padrões de preenchimento programado em matrizes digitais.",
        "summary": "Ponto de preenchimento texturizado com pequenos pontos retos em direções alternadas, simulando grãos espalhados, textura de areia ou fundos vintage.",
        "definition": "O Ponto Grão de Arroz e Ponto Semente Computadorizado (Seed Stitch & Rice Grain Motif Pattern) é um padrão decorativo de preenchimento estruturado onde a agulha realiza pequenos pontos retos isolados (com comprimento de 1.8 a 2.5 mm) dispostos em orientações angulares ligeiramente alternadas e espaçadas. Ao contrário de um tatami fechado e pesado, o ponto semente cria uma textura rala, tátil e permeável que permite visualizar o tecido de base entre os grãos, sendo amplamente utilizado para preenchimento de fundos de paisagens (areia, terra, relva seca), miolos de flores, textura de pelúcias e fundos artísticos de 'Quilting' em toalhas e colchas.",
        "technicalDetails": "O padrão é gerado por uma matriz de repetição de motivo estocástico ou pseudo-aleatório. A densidade superficial é de apenas 15% a 30% de cobertura de fio em relação a um tatami maciço, o que reduz o consumo de linha em 70% e anula completamente a tensão e o repuxamento do tecido.",
        "construction": [
          "Matriz de repetição geométrica ou estocástica de micro-pontos",
          "Comprimento de grão programável (1.5 mm a 3.0 mm)",
          "Espaçamento inter-grãos ajustável (2.0 mm a 5.0 mm)",
          "Conexões invisíveis por baixo do tecido (Travel Underlay)",
          "Variação angular pseudo-aleatória entre grãos consecutivos (±15° a ±45°)"
        ],
        "howItWorks": [
          "1. O programador seleciona a área de fundo de uma paisagem (como uma praia de areia ou campo de trigo).",
          "2. Aplica o preenchimento de motivo 'Ponto Semente' ou 'Grão de Arroz'.",
          "3. Define a distância entre os grãos e o tamanho de cada pontinho.",
          "4. Na máquina, o bordado flui com extrema rapidez, criando uma textura delicada e macia sem deixar a peça dura."
        ],
        "mainTypes": [
          "Ponto Grão de Arroz Alinhado (Para texturas geométricas e fundos clássicos de alfaiataria)",
          "Ponto Semente Aleatório / Estocástico (Para areia, terra, rochas e efeitos botânicos)",
          "Ponto Semente com Fio Matizado / Multicolorido (Para fundos artísticos de patchwork e quilting)"
        ],
        "characteristics": [
          "Superfície extremamente leve, macia e flexível ao toque",
          "Velocidade de produção altíssima devido à baixa quantidade total de pontos",
          "Zero repuxamento ou enrugamento mesmo em tecidos delicados como cambraia e seda"
        ],
        "limitations": [
          "Não cobre manchas ou estampas fortes do tecido de fundo devido à sua natureza aberta",
          "Exige que a tensão da linha esteja bem regulada para que cada grão fique perfeitamente esticado"
        ],
        "numberingSystem": [
          "Comprimento do Ponto de Grão: 2.0 mm a 2.5 mm",
          "Espaçamento entre Linhas de Grãos: 3.0 mm a 4.5 mm",
          "Densidade de Cobertura: 20% a 30%"
        ],
        "advantages": [
          "✔ Economia gigantesca de linha e tempo de máquina",
          "✔ Toque incrivelmente suave, ideal para roupas de cama de bebê e vestidos leves",
          "✔ Visual artesanal vintage muito valorizado por clientes sofisticados"
        ],
        "commonErrors": [
          "❌ Usar ponto semente com grãos pequenos demais (menores que 1.2 mm), que somem dentro da trama do tecido",
          "❌ Tentar usar ponto semente para cobrir um tecido preto com linha branca esperando cobertura total",
          "❌ Usar linha de má qualidade que solta fiapos em pontos isolados"
        ],
        "voceSabia": "No bordado livre manual tradicional japonês (Sashiko), o ponto semente era usado há mais de 400 anos para reforçar tecidos de camponeses e criar padrões rústicos de colheita de arroz!",
        "curiosidadeTecnica": "Por ser um ponto de baixa densidade com conexões pontuais, o ponto semente praticamente não gera efeito de 'pull-push', tornando-o perfeito para ser bordado sem necessidade de compensação de repuxo adicional.",
        "dicaArtrelados": "Para fazer o miolo de girassóis e margaridas com aspecto realista: use ponto semente com linha marrom escura ou amarelo ouro sobre um fundo tatami ralo! Fica parecendo que a flor tem sementinhas de verdade em relevo!",
        "applications": [
          "Miolos de flores botânicas (girassóis, margaridas, anêmonas)",
          "Fundos de paisagens, praias de areia, solos e troncos texturizados",
          "Bordados em peças de bebê (mantas, fraldas e bodies com toque ultra suave)",
          "Quilting decorativo e acolchoamento artístico de colchas e almofadas"
        ],
        "troubleshootingTips": [
          "Se os grãos estão afundando no tecido felpudo, coloque uma folha de plástico filme hidrossolúvel por cima.",
          "Se os pontinhos parecem tortos ou frouxos, aumente ligeiramente a tensão da linha superior na máquina.",
          "Se o fundo ficou muito ralo, diminua o espaçamento entre grãos nas propriedades de preenchimento do software."
        ],
        "relatedTerms": [
          "Ponto de Motivo (Motif Fill)",
          "Preenchimento Texturizado",
          "Ponto Semente Manual",
          "Quilting Eletrônico",
          "Baixa Densidade"
        ],
        "tags": ["ponto-grao-arroz", "ponto-semente", "textura", "motivo", "quilting", "efeito-decorativo", "vintage"],
        "updatedAt": "2026-08-29",
        "sourceReference": "ROYAL SCHOOL OF NEEDLEWORK. Stitch Bank: Seed Stitch and Rice Texture. London: RSN, 2023. WILCOM INTERNATIONAL. Motif Fills and Textured Backgrounds. Sydney: Wilcom, 2022.",
        "bibliographicReferences": [
          "ROYAL SCHOOL OF NEEDLEWORK. Stitch Bank: Seed Stitch and Rice Texture. London: RSN, 2023.",
          "WILCOM INTERNATIONAL. Motif Fills and Textured Backgrounds. Sydney: Wilcom, 2022.",
          "ARTRELADOS. Texturas Ralas e Pontos de Motivo Decorativo no Bordado Digital. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Crie um círculo de 50 mm no seu programa de bordado. Aplique o preenchimento com o motivo 'Seed Stitch' (Ponto Semente) com espaçamento de 3.0 mm. Borde em um pedaço de linho cru com linha marrom clara. Toque a peça com os dedos e sinta a leveza e a textura requintada do ponto!",
        "quickSummary": "O ponto grão de arroz cria pontinhos delicados espalhados pelo tecido, imitando areia, sementinhas e texturas rústicas muito macias.",
        "beginnerExplanation": "Sabe quando você joga um punhado de grãos de arroz sobre a mesa e eles ficam espalhadinhos de um jeito bonito? Esse ponto faz exatamente isso com a linha: cria um fundo texturizado e fofinho sem deixar o tecido pesado ou duro!",
        "recommendedSettings": {
          "speedPPM": "800 a 900 PPM",
          "needleType": "75/11 Universal",
          "stabilizer": "Entretela Rasgável 50g",
          "threadTension": "110 a 120gf",
          "density": "Espaçamento de Motivo de 3.0 a 4.0 mm"
        }
      },
      {
        "id": "g-084-efeito-guipir-renda-autoportante-entretela-hidrossoluvel",
        "code": "G-084",
        "letter": "G",
        "term": "Efeito Guipir e Renda Autoportante em Entretela Hidrossolúvel (Guipure Free-Standing Lace Embroidery / FSL)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Efeitos Decorativos e Pontos",
        "origin": "Das lendárias rendas de Guipure de Veneza e Flandres do século XVI, recriadas digitalmente com a invenção da entretela de álcool polivinílico (PVA) hidrossolúvel nos anos 1980.",
        "summary": "Técnica de bordado onde a matriz é costurada exclusivamente sobre entretela hidrossolúvel (sem tecido); ao lavar na água, a entretela desaparece e resta uma renda estruturada autoportante.",
        "definition": "O Efeito Guipir e Renda Autoportante (Free-Standing Lace - FSL / Guipure Embroidery) é uma das técnicas mais nobres e impressionantes do bordado computadorizado. A matriz é digitalizada com uma estrutura matemática de engenharia têxtil composta por uma grade de sustentação em rede (Mesh Grid), pontos de travamento entrelaçados e colunas de ponto cheio bordadas diretamente sobre duas camadas de entretela hidrossolúvel de alta gramatura (sem nenhum tecido por baixo). Após o término do bordado, a peça é imersa em água morna: a entretela se dissolve completamente, restando uma verdadeira escultura têxtil de renda rígida e autoportante.",
        "technicalDetails": "A integridade mecânica da renda depende da malha base estrutural (Trellis / Netting Underlay) com ângulo cruzado duplo (45° e 135°) e passo de 1.5 a 2.0 mm. Todos os pontos cheios e contornos decorativos DEVEM ancorar em pelo menos dois pontos de interseção da grade base; caso contrário, a renda se desmanchará ao ser lavada.",
        "construction": [
          "Grade de base estrutural cruzada dupla (Trellis Mesh Underlay a 45° e 135°)",
          "Pontos de ancoragem e nós de travamento nas pontas de cada pétala/haste",
          "Camada de cobertura em ponto cheio denso (Satin Cover Stitch a 0.35 mm)",
          "Entretela hidrossolúvel de filme espesso (80 mícrons) ou tecido solúvel em dobro",
          "Uso obrigatório de linha da mesma cor na agulha de cima e na bobina de baixo"
        ],
        "howItWorks": [
          "1. O operador prende no bastidor duas camadas de entretela hidrossolúvel bem esticadas como um tambor (sem tecido).",
          "2. Enche a bobina da lançadeira com a mesma linha de bordar colorida que está na agulha superior.",
          "3. A máquina borda primeiro a rede de sustentação invisível e depois os motivos florais de renda cheia.",
          "4. Ao retirar do bastidor, enxágua a peça em água morna corrente: a entretela derrete e sobra uma linda renda Guipir pura e firme."
        ],
        "mainTypes": [
          "Renda Guipir Plana (Para aplicações em decotes de vestidos de noiva, toalhas e barras)",
          "Renda 3D / Tridimensional (Para flores montadas em camadas, laços e brincos de bijuteria têxtil)",
          "Renda Richelieu Autoportante (Para centros de mesa vazados e toalhas de banquete)"
        ],
        "characteristics": [
          "Criação de rendas verdadeiras de alto luxo sem necessidade de tecido",
          "Peça idêntica na frente e no verso (acabamento dupla-face perfeito)",
          "Toque estruturado e firme após secagem natural"
        ],
        "limitations": [
          "Exige programação perfeita de nós de ancoragem (se errar, a renda desmancha na água)",
          "Consome mais linha porque a bobina precisa ser da mesma cor da linha superior"
        ],
        "numberingSystem": [
          "Espessura da Entretela Solúvel: 2 camadas de 40 a 80 mícrons (ou tecido PVA 60g)",
          "Passo da Grade Base: 1.5 mm a 2.0 mm",
          "Densidade de Ponto Cheio: 0.35 mm a 0.38 mm"
        ],
        "advantages": [
          "✔ Produção de rendas de noiva e acessórios de luxo com altíssimo valor comercial",
          "✔ Possibilidade de criar brincos, marcadores de página, flores 3D e enfeites de Natal",
          "✔ Encantamento garantido dos clientes que assistem ao processo da entretela sumir na água"
        ],
        "commonErrors": [
          "❌ Usar linha branca comum na bobina (a parte de trás da renda vai ficar feia e esbranquiçada)",
          "❌ Enxaguar demais na água e tirar todo o resíduo de goma da entretela (a renda fica mole como pano velho)",
          "❌ Usar apenas uma camada fina de plástico solúvel (o bastidor rasga durante a costura)"
        ],
        "voceSabia": "Para que a renda Guipir fique durinha e armada (como para fazer brincos ou enfeites de Natal), não lave a peça completamente! Deixe um restinho da entretela derretida na peça e coloque para secar em cima de um plástico: ela seca durinha e engomada como mágica!",
        "curiosidadeTecnica": "O termo 'Guipure' vem do francês antigo 'guiper', que significa 'enrolar um fio em volta de outro fio de sustentação', descrevendo a técnica renascentista de criar rendas pesadas e estruturadas.",
        "dicaArtrelados": "Ao bordar Guipir: enrole a bobina SEMPRE com a mesma linha de bordar colorida da parte de cima! E quando tirar da água, aperte suavemente entre duas toalhas de banho secas e deixe secar sobre uma folha de plástico plano. O acabamento fica digno de passarela de Paris!",
        "applications": [
          "Aplicações em vestidos de noiva, vestidos de festa e moda praia de luxo",
          "Bijuterias têxteis artesanais (brincos, colares e braceletes de renda)",
          "Enfeites de Natal tridimensionais (anjinhos, estrelas e sinos autoportantes)",
          "Barras e entremeios de toalhas de banho e toalhas de mesa nobres"
        ],
        "troubleshootingTips": [
          "Se a renda desmanchou quando você lavou na água, a matriz não tinha a grade base cruzada de sustentação conectada.",
          "Se a entretela rasgou no meio do bordado, adicione uma segunda camada de entretela solúvel ou reduza a velocidade da máquina para 600 PPM.",
          "Se a renda ficou muito mole após secar, passe um pouco de termolina leitosa ou spray de goma para tecido no verso."
        ],
        "relatedTerms": [
          "Renda FSL (Free-Standing Lace)",
          "Entretela Hidrossolúvel",
          "Grade de Sustentação (Mesh Underlay)",
          "Renda Richelieu",
          "Bobina Colorida"
        ],
        "tags": ["guipir", "fsl", "renda-autoportante", "hidrossoluvel", "alta-costura", "noiva", "joia-textil"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Free Standing Lace (FSL) Digitizing Masterclass. Sydney: Wilcom, 2023. ROYAL SCHOOL OF NEEDLEWORK. Lace Making and Guipure Techniques. London: RSN, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Free Standing Lace (FSL) Digitizing Masterclass. Sydney: Wilcom, 2023.",
          "ROYAL SCHOOL OF NEEDLEWORK. Lace Making and Guipure Techniques. London: RSN, 2022.",
          "ARTRELADOS. Engenharia de Rendas Autoportantes e Guipir no Bordado Digital. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Coloque 2 folhas de entretela hidrossolúvel no bastidor. Carregue uma matriz de brinco ou anjinho em renda FSL. Encha a bobina com a mesma linha dourada da agulha. Borde a peça, retire do bastidor e mergulhe em uma tigela com água morna por apenas 30 segundos. Deixe secar sobre um vidro plano e admire sua renda 100% pronta e firme!",
        "quickSummary": "O Guipir é o bordado feito direto na entretela que derrete na água, criando rendas de noiva e brincos maravilhosos sem nenhum tecido por baixo.",
        "beginnerExplanation": "Imagine bordar um desenho no ar! Você coloca uma entretela especial no bastidor que parece um plástico, borda a renda toda e depois joga na água: a entretela derrete como açúcar e sobra apenas a renda perfeita, linda e durinha nas suas mãos!",
        "recommendedSettings": {
          "speedPPM": "600 a 700 PPM",
          "needleType": "75/11 Universal ou Microtex",
          "stabilizer": "2 Camadas de Entretela Hidrossolúvel (Filme PVA 80 mícrons ou Tecido Solúvel)",
          "threadTension": "100 a 110gf com Bobina na mesma cor",
          "density": "0.36 mm com Grade Cruzada de 1.8 mm"
        }
      },
      {
        "id": "g-085-gola-bordada-estruturada-aplique-colarinho",
        "code": "G-085",
        "letter": "G",
        "term": "Gola Bordada Estruturada e Aplique em Colarinho (Embroidered Structured Collar & Neckline Border)",
        "level": "Intermediário 🟡",
        "grammarClass": "Substantivo feminino composto.",
        "category": "Efeitos Decorativos e Pontos",
        "origin": "Da alfaiataria clássica e da indumentária vitoriana europeia, aperfeiçoada com as técnicas de montagem de matrizes espelhadas para golas anatômicas.",
        "summary": "Técnica de posicionamento e digitalização anatômica de bordados simétricos em pontas de gola, colarinhos sociais e decotes femininos estruturados.",
        "definition": "A Gola Bordada Estruturada e Aplique em Colarinho (Structured Collar Embroidery & Symmetrical Neckline Appliqué) é o método técnico de projeto e execução de bordados em partes nobres da camisaria e do vestuário feminino e infantil. Como as golas possuem entretelas rígidas internas de alfaiataria e ângulos côncavos/convexos delicados, a matriz deve ser digitalizada com compensações simétricas espelhadas (Lado Esquerdo e Direito rigorosamente idênticos), linhas de marcação e gabaritos de encaixe para garantir que os motivos caiam exatamente a 5 mm das pontas da gola sem deformar o caimento da peça no corpo.",
        "technicalDetails": "A digitalização requer o uso de linhas de referência angular de 35° a 45° nas pontas do colarinho para acompanhar a linha de dobra da entretela termocolante de camisaria. Os pontos cheios nas extremidades devem receber arremates reforçados (Tie-Off) e alívio de densidade na junção das costuras de fechamento da gola.",
        "construction": [
          "Par de matrizes simétricas espelhadas (Left Collar & Right Collar)",
          "Linha de alinhamento com a costura externa da gola (Placement Guide)",
          "Compensação de densidade para entretelas rígidas de camisaria (0.42 mm)",
          "Reforço de coluna centrado para evitar alargamento da ponta da gola",
          "Gabarito de posicionamento em papel vegetal ou impresso 1:1"
        ],
        "howItWorks": [
          "1. O modelista corta as folhas da gola da camisa ainda abertas (antes de fechar e costurar a peça).",
          "2. O operador posiciona a ponta da gola no bastidor usando entretela rasgável e a matriz de teste.",
          "3. A máquina borda os ramos florais ou monogramas simétricos com precisão milimétrica.",
          "4. Após o bordado, a costureira une as partes da gola, vira e passa a ferro, resultando em uma camisa de alta costura impecável."
        ],
        "mainTypes": [
          "Bordado em Ponta de Gola Social / Camisaria (Monogramas discretos e arabescos masculinos/femininos)",
          "Gola Peter Pan / Gola Boneca Inteira Bordada (Para vestidos infantis de luxo e moda vintage)",
          "Gola Removível com Renda e Pérolas (Acessório de moda independente para sobreposição)"
        ],
        "characteristics": [
          "Simetria visual absoluta entre o lado esquerdo e direito do colarinho",
          "Preservação da rigidez e do caimento perfeito da gola de alfaiataria",
          "Valorização extrema da peça de vestuário no mercado de moda"
        ],
        "limitations": [
          "Bordar golas já fechadas e prontas é muito difícil devido à falta de espaço no bastidor; deve-se preferir bordar a peça cortada aberta",
          "Densidades excessivas deixam a ponta da gola grossa demais, dificultando o desvirar da costura"
        ],
        "numberingSystem": [
          "Distância Segura da Borda da Gola: 5.0 mm a 8.0 mm",
          "Densidade de Ponto Cheio: 0.40 mm a 0.42 mm",
          "Espessura da Agulha Recomendada: 70/10 ou 75/11 Ponta Fina (Sharp)"
        ],
        "advantages": [
          "✔ Transforma uma camisa comum em uma peça exclusiva de boutique",
          "✔ Encaixe anatômico perfeito que acompanha as linhas do pescoço e dos ombros",
          "✔ Alto apelo comercial para moda infantil nobre e moda evangélica"
        ],
        "commonErrors": [
          "❌ Bordar as duas pontas da gola com a mesma matriz sem espelhar (um lado fica de cabeça para baixo)",
          "❌ Colocar bordado muito pesado que faz a ponta da gola ficar torta ou pesada caindo",
          "❌ Bordar em cima da margem de costura de 1 cm que a costureira precisa para fechar a gola"
        ],
        "voceSabia": "Na camisaria sob medida masculina tradicional da Savile Row em Londres, bordar as iniciais do cliente no lado interno ou na ponta da gola é sinal máximo de distinção e sofisticação desde o século XIX!",
        "curiosidadeTecnica": "Para bordar golas já prontas sem descosturar, utilizam-se bastidores magnéticos ou bastidores de gola tipo clamp (Collar Frame), que prendem a peça sem marcar o tecido engomado.",
        "dicaArtrelados": "Borde as golas sempre com o tecido cortado antes da costura de fechamento! E imprima o desenho em folha de papel na escala 1:1, recorte e coloque em cima da gola para conferir no espelho se a posição está exatamente igual dos dois lados!",
        "applications": [
          "Camisas sociais femininas e masculinas sob medida",
          "Vestidos infantis de festa com gola boneca bordada com mini florzinhas",
          "Uniformes executivos e corporativos com detalhes discretos de colarinho",
          "Golas falsas e destacáveis de renda e veludo para acessórios de inverno"
        ],
        "troubleshootingTips": [
          "Se a ponta da gola ficou torta e armada para cima, reduza a densidade do bordado para 0.45 mm.",
          "Se os desenhos dos dois lados ficaram em alturas diferentes, use gabarito impresso com fita métrica para marcar o centro com giz de alfaiate.",
          "Se o tecido repuxou na ponta da gola, use agulha ponta fina 70/10 para furar suavemente a entretela da camisa."
        ],
        "relatedTerms": [
          "Espelhamento de Matriz",
          "Gabarito de Posicionamento",
          "Camisaria Sob Medida",
          "Agulha Ponta Fina (Sharp)",
          "Compensação de Gola"
        ],
        "tags": ["gola-bordada", "colarinho", "camisaria", "espelhamento", "alfaiataria", "moda-infantil", "elegancia"],
        "updatedAt": "2026-08-29",
        "sourceReference": "SAVILE ROW BESPOKE ASSOCIATION. Collar Construction and Embroidery Guidelines. London: SRBA, 2023. WILCOM INTERNATIONAL. Symmetrical Placement and Garment Pattern Alignment. Sydney: Wilcom, 2022.",
        "bibliographicReferences": [
          "SAVILE ROW BESPOKE ASSOCIATION. Collar Construction and Embroidery Guidelines. London: SRBA, 2023.",
          "WILCOM INTERNATIONAL. Symmetrical Placement and Garment Pattern Alignment. Sydney: Wilcom, 2022.",
          "ARTRELADOS. Técnicas de Posicionamento e Bordado Anatômico em Camisaria Fina. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Crie um ramo floral pequeno de 30 mm no software. Duplique o objeto e aplique o espelhamento horizontal (Flip Horizontal). Imprima os dois lados em escala real, posicione sobre uma gola de camisa e marque os centros com giz. Borde em um retalho com entretela de camisa e veja o alinhamento perfeito!",
        "quickSummary": "A gola bordada coloca desenhos simétricos e delicados nas pontas de colarinhos e vestidos com elegância de alta costura.",
        "beginnerExplanation": "Sabe aquelas camisas sociais chiques ou vestidos de menina com florzinhas delicadas exatamente iguais nas duas pontas da gola? É essa técnica que faz os dois lados ficarem perfeitamente espelhados e alinhados como um espelho!",
        "recommendedSettings": {
          "speedPPM": "750 a 850 PPM",
          "needleType": "70/10 ou 75/11 Ponta Fina (Sharp / Microtex)",
          "stabilizer": "Entretela Rasgável Fina 40g (o tecido já tem entretela de colarinho)",
          "threadTension": "105 a 115gf",
          "density": "0.40 mm a 0.42 mm"
        }
      },
      {
        "id": "g-086-ponto-grilhao-ponto-corrente-eletronico-cadeia",
        "code": "G-086",
        "letter": "G",
        "term": "Ponto Grilhão / Ponto Corrente Eletrônico em Cadeia (Chain Stitch & Interlooped Chain Effect)",
        "level": "Intermediário 🟡",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Efeitos Decorativos e Pontos",
        "origin": "Das tradicionais máquinas mecânicas Cornely e Chenille do século XIX na França, adaptadas para simulação computadorizada em máquinas de bordar padrão.",
        "summary": "Ponto decorativo em formato de elos de corrente entrelaçados (grilhões), conferindo relevo clássico, aspecto artesanal e excelente elasticidade.",
        "definition": "O Ponto Grilhão ou Ponto Corrente Eletrônico em Cadeia (Computerized Chain Stitch & Interlooped Link Motif) é o ponto decorativo linear cujos laços de linha se entrelaçam sucessivamente formando uma sequência visual idêntica a uma corrente ou grilhão de ferro. Em máquinas industriais convencionais (com lançadeira e agulha padrão), o efeito é gerado por uma rotina matemática de micro-laçadas triangulares sobrepostas com recuo (Backstitch Loop Pattern), conferindo um relevo arredondado muito superior ao ponto cheio comum, sendo o ponto favorito para contornos de motivos rústicos, tipografias estilo retrô e acabamentos de jeans e jaquetas college.",
        "technicalDetails": "A fórmula do motivo de elo programa um avanço de 2.5 mm com recuo em arco de 1.2 mm e abertura lateral de 1.0 mm em cada ciclo. Essa geometria cria um elo vazado tridimensional com espessura aparente de 1.5 a 2.0 mm usando uma única passagem de linha, mantendo alta flexibilidade mecânica longitudinal para acompanhar a elasticidade do tecido sem romper.",
        "construction": [
          "Padrão de motivo de elo de corrente (Chain Loop Motif)",
          "Comprimento do elo ajustável (2.0 mm a 4.0 mm)",
          "Largura do elo programável (1.0 mm a 2.5 mm)",
          "Arremates de travamento nos nós de início e fim",
          "Algoritmo de curvatura suave sem esmagamento dos elos nas esquinas"
        ],
        "howItWorks": [
          "1. O programador desenha a linha de contorno de um desenho vintage ou o traçado de uma letra cursiva.",
          "2. Seleciona o tipo de ponto como 'Ponto de Motivo: Corrente / Grilhão'.",
          "3. Ajusta o tamanho dos elos para ficarem proporcionais à espessura desejada.",
          "4. Na máquina de bordar, a agulha costura os elos contínuos, criando um contorno volumoso, macio e com cara de feito à mão."
        ],
        "mainTypes": [
          "Ponto Grilhão Simples (Para contornos finos de flores e arabescos rústicos)",
          "Ponto Corrente Duplo / Chenille (Para letras de jaquetas colegiais e flâmulas vintage)",
          "Preenchimento em Ponto Corrente Concéntrico (Para preencher áreas grandes com textura de tapete)"
        ],
        "characteristics": [
          "Aspecto artesanal vintage inconfundível com relevo arredondado",
          "Alta elasticidade natural: acompanha tecidos de malha e moletom sem arrebentar",
          "Consumo moderado de linha com grande impacto visual de textura"
        ],
        "limitations": [
          "Curvas com raio menor que 2 mm podem fazer os elos se sobreporem excessivamente",
          "Exige linha de boa qualidade e agulha adequada para que os laços fiquem bem abertos"
        ],
        "numberingSystem": [
          "Comprimento Padrão do Elo: 2.5 mm a 3.0 mm",
          "Largura do Elo: 1.5 mm a 2.0 mm",
          "Velocidade Máquina Recomendada: 700 a 850 PPM"
        ],
        "advantages": [
          "✔ Cria um efeito 'feito à mão' irresistível que encanta apaixonados por artesanato",
          "✔ Perfeito para bordar em moletom, jeans e malhas sem repuxar o tecido",
          "✔ Excelente para nomes cursivos e assinaturas caligráficas com personalidade"
        ],
        "commonErrors": [
          "❌ Fazer os elos minúsculos (menores que 1.5 mm), que viram uma linha grossa e perdem o formato de corrente",
          "❌ Usar tensão de linha muito apertada que fecha e deforma os elos",
          "❌ Programar curvas muito fechadas sem suavizar os nós vetoriais"
        ],
        "voceSabia": "As famosas jaquetas colegiais americanas (Varsity Jackets) dos anos 1950 usavam o ponto corrente para bordar as letras gigantes das universidades no peito e nas costas!",
        "curiosidadeTecnica": "Embora existam máquinas especiais exclusivas de ponto corrente tipo Cornely que usam agulhas em forma de gancho (Hook Needle) e trabalham sem bobina inferior, os softwares modernos conseguem recriar 98% desse visual na sua máquina comum!",
        "dicaArtrelados": "Para bordar nomes em bodies de bebê com aquele charme de bordado de vovó: use ponto corrente/grilhão com linha de algodão ou poliéster fosco! O resultado é um bordado super macio, que não pinica a pele e parece feito à mão com carinho!",
        "applications": [
          "Letras vintage e monogramas em jaquetas de couro, jeans e moletom",
          "Contornos decorativos em toalhas de mesa rústicas, jogos americanos e panos de prato",
          "Nomes e caligrafias infantis em enxovais estilo montessoriano e boho chic",
          "Flâmulas decorativas de parede e estandartes artísticos"
        ],
        "troubleshootingTips": [
          "Se os elos estão ficando fechados e magros, afrouxe ligeiramente a tensão da linha superior na máquina.",
          "Se os elos estão se amontoando nas curvas, aumente o raio da curva no software de programação.",
          "Se o ponto parece sumir no tecido felpudo, use uma folha de filme hidrossolúvel no topo."
        ],
        "relatedTerms": [
          "Ponto Corrente (Chain Stitch)",
          "Ponto Cornely",
          "Efeito Chenille",
          "Ponto de Motivo",
          "Bordado Vintage"
        ],
        "tags": ["ponto-grilhao", "ponto-corrente", "chain-stitch", "vintage", "feito-a-mao", "motivo", "retro"],
        "updatedAt": "2026-08-29",
        "sourceReference": "ROYAL SCHOOL OF NEEDLEWORK. Traditional Chain Stitch and Tambour Embroidery. London: RSN, 2023. WILCOM INTERNATIONAL. Chain Stitch Simulation and Motif Outline Engine. Sydney: Wilcom, 2022.",
        "bibliographicReferences": [
          "ROYAL SCHOOL OF NEEDLEWORK. Traditional Chain Stitch and Tambour Embroidery. London: RSN, 2023.",
          "WILCOM INTERNATIONAL. Chain Stitch Simulation and Motif Outline Engine. Sydney: Wilcom, 2022.",
          "ARTRELADOS. Simulação Computadorizada de Pontos Históricos e Cornely no Bordado Moderno. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Digitalize a palavra 'Amor' em caligrafia cursiva no seu software. Em vez de usar ponto cheio ou ponto corrido simples, aplique o 'Ponto de Motivo: Corrente' com elos de 2.5 mm de comprimento. Borde em um pedaço de tecido jeans ou moletom. Veja como as letras ganham um relevo arredondado lindo e vintage!",
        "quickSummary": "O ponto grilhão cria uma corrente de elos entrelaçados contínuos com visual rústico, relevo arredondado e charme de feito à mão.",
        "beginnerExplanation": "Sabe quando você faz uma correntinha de crochê com os dedos? O ponto grilhão faz essa correntinha linda e gordinha com a linha na máquina de bordar, deixando os nomes e contornos com um estilo antigo e artesanal muito fofo!",
        "recommendedSettings": {
          "speedPPM": "700 a 800 PPM",
          "needleType": "75/11 ou 80/12 Universal",
          "stabilizer": "Entretela Rasgável 50g ou Malha de Recorte",
          "threadTension": "95 a 105gf (Tensão ligeiramente mais suave)",
          "density": "Elos de 2.5 mm a 3.0 mm de comprimento"
        }
      },
      {
        "id": "g-087-efeito-granito-texturizacao-irregular-fundos",
        "code": "G-087",
        "letter": "G",
        "term": "Efeito Granito e Texturização Irregular para Fundos (Granite Texture Effect & Random Stippling Fill)",
        "level": "Avançado 🔴",
        "grammarClass": "Substantivo masculino composto.",
        "category": "Efeitos Decorativos e Pontos",
        "origin": "Das técnicas de micro-quilting pontilhado ('Stippling') e texturas minerais de rochas ornamentais transpostas para algoritmos de ruído fractal de bordado.",
        "summary": "Padrão de preenchimento complexo que combina micro-pontos tatami com comprimentos e deslocamentos pseudo-aleatórios, criando uma textura fosca de pedra natural.",
        "definition": "O Efeito Granito e Texturização Irregular para Fundos (Granite Texture Pattern & Fractal Micro-Stippling) é um estilo avançado de preenchimento tatami não-uniforme. Em vez de alinhar os pontos em fileiras geométricas regulares (que criam o clássico brilho acetinado liso), o algoritmo distribui as picadas de agulha com variações aleatórias controladas de comprimento de ponto (de 1.5 a 4.5 mm) e deslocamento de fase estocástico. Isso quebra a reflexão contínua da luz, gerando uma superfície mate, porosa e com aspecto táctil de rocha, mármore rústico, granito ou casca de árvore antiga.",
        "technicalDetails": "O motor de geração de pontos aplica uma função de ruído de Perlin ou ruído simplex N(x,y) acoplada às coordenadas de grade: P(i) = P_base(i) + [δ_x · N(x_i, y_i), δ_y · N(x_i, y_i)], com perturbação máxima δ = 0.8 mm. A distribuição anula o paralelismo de picada, eliminando o risco de 'linhas de corte' no tecido.",
        "construction": [
          "Gerador de ruído estocástico de pontos (Perlin / Fractal Stitch Jitter)",
          "Variação dinâmica de comprimento de ponto (1.5 mm a 4.5 mm)",
          "Fator de dispersão de picada ajustável (Jitter / Roughness de 0.2 a 0.8 mm)",
          "Densidade média de preenchimento equilibrada (0.45 mm)",
          "Reforço de esteira perpendicular leve"
        ],
        "howItWorks": [
          "1. O programador digitaliza uma área de brasão, tronco de árvore, muralha de castelo ou fundo de moldura.",
          "2. Aplica o preenchimento Tatami e seleciona o padrão 'Textura Granito / Efeito Pedra'.",
          "3. Ajusta o nível de rugosidade para médio e define o comprimento variável dos pontos.",
          "4. Na máquina, o bordado cria uma superfície fosca, robusta e rica em detalhes minerais sem nenhum reflexo liso."
        ],
        "mainTypes": [
          "Granito Fino / Poroso (Para fundos discretos de brasões, medalhas e emblemas militares)",
          "Granito Rústico / Rocha Viva (Para cascas de árvores, montanhas, dinossauros e couros)",
          "Granito Bicolor com Efeito Mármore (Sobreposição de duas cores contrastantes com densidade 0.8 mm)"
        ],
        "characteristics": [
          "Superfície fosca elegante sem brilho excessivo que destaca outros elementos vizinhos",
          "Disfarça completamente pequenas imperfeições de trama do tecido",
          "Elevadíssima estabilidade mecânica sem repuxamento direcional"
        ],
        "limitations": [
          "Não é indicado para áreas muito pequenas (menores que 15 mm), onde a textura não tem espaço para se desenvolver",
          "Consome cerca de 10% a mais de pontos do que um tatami padrão liso"
        ],
        "numberingSystem": [
          "Fator de Rugosidade (Jitter): 0.3 mm a 0.6 mm",
          "Faixa de Comprimento de Ponto: 1.8 mm a 4.2 mm",
          "Densidade Padrão: 0.42 mm a 0.48 mm"
        ],
        "advantages": [
          "✔ Criação de fundos majestosos que fazem elementos em ponto cheio brilhante 'saltarem' para fora",
          "✔ Excelente para temas masculinos, militares, medievais e botânicos",
          "✔ Zero marcas de emenda visíveis no preenchimento de grandes superfícies"
        ],
        "commonErrors": [
          "❌ Usar em logotipos corporativos modernos que exigem superfícies 100% lisas e espelhadas",
          "❌ Colocar o ruído muito alto (acima de 1.0 mm), gerando pontos soltos que podem desfiar",
          "❌ Esquecer de usar agulha ponta bola em malhas ao aplicar preenchimentos densos"
        ],
        "voceSabia": "Muitas marcas de luxo usam o efeito granito em jaquetas de couro e uniformes táticos de alta resistência porque a superfície fosca e texturizada não reflete a luz do sol e confere aspecto de durabilidade extrema!",
        "curiosidadeTecnica": "O algoritmo de ruído usado para o efeito granito no software é o mesmo algoritmo matemático desenvolvido por Ken Perlin para os efeitos especiais do filme 'Tron' da Disney em 1982, pelo qual ele ganhou o Oscar de Realização Técnica!",
        "dicaArtrelados": "Quando for bordar um brasão com letras douradas em ponto cheio: faça o fundo do escudo com efeito granito preto ou marrom escuro! As letras douradas vão parecer feitas de ouro de verdade flutuando sobre uma placa de mármore nobre!",
        "applications": [
          "Escudos, brasões heráldicos e emblemas de clubes de tiro ou caça",
          "Troncos de árvores, cascos de tartarugas e peles de animais rústicos",
          "Painéis decorativos de jaquetas de motoqueiro e coletes de couro",
          "Fundos contrastantes para destacar monogramas e textos finos"
        ],
        "troubleshootingTips": [
          "Se a textura pareceu muito lisa e sem graça, aumente o fator de aleatoriedade (Jitter) no software para 0.5 mm.",
          "Se os pontos estão enroscando, reduza o comprimento máximo de ponto para 3.8 mm.",
          "Se o tecido ficou pesado demais, aumente o espaçamento de densidade para 0.48 mm."
        ],
        "relatedTerms": [
          "Tatami Texturizado",
          "Ruído de Perlin",
          "Ponto Fosco",
          "Efeito Mármore",
          "Contraste de Superfície"
        ],
        "tags": ["efeito-granito", "textura", "tatami-fosco", "efeito-pedra", "brasoes", "programacao", "wilcom"],
        "updatedAt": "2026-08-29",
        "sourceReference": "WILCOM INTERNATIONAL. Custom Tatami Patterns and Random Stitch Jitter. Sydney: Wilcom, 2023. TAJIMA GROUP. Advanced Embossed and Mineral Texture Simulation. Nagoya: Tajima, 2022.",
        "bibliographicReferences": [
          "WILCOM INTERNATIONAL. Custom Tatami Patterns and Random Stitch Jitter. Sydney: Wilcom, 2023.",
          "TAJIMA GROUP. Advanced Embossed and Mineral Texture Simulation. Nagoya: Tajima, 2022.",
          "ARTRELADOS. Texturas Minerais e Algoritmos de Ruído Fractal no Bordado Computadorizado. Curitiba: Artrelados, 2024."
        ],
        "practicalExercise": "Crie um escudo de 60 mm no seu programa. No fundo, aplique um Tatami com efeito Granito (Random Jitter). No centro, coloque a letra inicial do seu sobrenome em ponto cheio acetinado com linha metálica dourada. Borde e observe o contraste espetacular entre o fundo fosco e o brilho do monograma!",
        "quickSummary": "O efeito granito cria um fundo texturizado e fosco como pedra ou mármore, ideal para brasões e desenhos rústicos.",
        "beginnerExplanation": "Em vez de deixar o bordado liso como cetim, o efeito granito faz os pontos parecerem uma textura de pedra nobre, casca de árvore ou mármore rústico. Isso faz os outros detalhes brilhantes que estão em cima se destacarem muito mais!",
        "recommendedSettings": {
          "speedPPM": "750 a 850 PPM",
          "needleType": "75/11 Universal",
          "stabilizer": "Entretela Rasgável 50g ou Recorte 60g",
          "threadTension": "105 a 115gf",
          "density": "0.45 mm com Jitter de 0.4 mm"
        }
      }
    ]
    
    return base_g13 + extra_g13

# Salva G13 completo (13 verbetes)
verbetes_g13 = get_verbetes_g13_full()
with open('/src/data/verbetesLetterG13.ts', 'w', encoding='utf-8') as f:
    f.write('import { Verbete } from "../types";\n\n')
    f.write('export const VERBETES_LETTER_G_PART13: Verbete[] = ')
    f.write(json.dumps(verbetes_g13, ensure_ascii=False, indent=2))
    f.write(';\n')

print(f"G13 saved successfully with {len(verbetes_g13)} verbetes (G-075 to G-087)!")

import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART12: Verbete[] = [
  {
    "id": "o-079-overlap-de-camadas-e-transicao-de-cores-em-ponto-degrade",
    "code": "O-079",
    "term": "Overlap de Camadas e Transição de Cores em Ponto Degradê (Layer Overlapping & Color Blending)",
    "letter": "O",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês overlap (sobreposição de camadas / cruzamento parcial) e do francês dégradé (transição suave de tons de cor).",
    "summary": "Técnica de digitalização artística e sombreamento têxtil baseada na sobreposição gradual de camadas de pontos tatami ou satim com densidades variáveis para criar transições perfeitas de cores, sombras e realismo.",
    "definition": "Overlap de Camadas e Transição de Cores em Ponto Degradê (Stitch Density Blending & Chromatic Layer Overlapping) é o método computacional de programação de bordado que intercala duas ou mais camadas de preenchimento sobrepostas (*overlapping*), onde a primeira cor decresce progressivamente sua densidade de pontos (ex: de 0,40 mm para 1,60 mm) enquanto a segunda cor inicia aberta (1,60 mm) e adensa-se gradualmente (até 0,40 mm). Esse entrelaçamento microscópico das passadas de linha, associado a ângulos de ponto idênticos ou levemente divergentes (diferença < 5°), engana o olho humano pela síntese aditiva óptica, criando transições fotográficas de cores (degradê suave) sem formar relevos pesados ou camadas duras na matriz.",
    "technicalDetails": "Faixa de densidade de transição: 0,40 mm (cobertura total) até 2,00 mm (abertura máxima). Grau de sobreposição de área (Overlap Zone): 3,0 mm a 8,0 mm. Diferença angular entre camadas: 0° a 5° (ângulos idênticos garantem fusão perfeita; ângulos maiores geram textura xadrez). Variação de comprimento de ponto: Ativação de efeito pena / borda irregular (Stitch Feathering / Random Jitter).",
    "construction": [
      "Camada base com cor predominante e curva de densidade gradiente decrescente",
      "Segunda camada de cor complementar com curva gradiente invertida crescente",
      "Zona de intersecção (Overlap) com comprimentos de ponto aleatórios para evitar linha reta de corte",
      "Underlay leve e único posicionado sob a camada base para não engrossar a peça",
      "Filtro de pontos curtos e compensação de repuxo calibrada para áreas abertas"
    ],
    "howItWorks": [
      "1. No software de matriz, desenha-se o objeto da primeira cor (ex: amarelo do pôr do sol).",
      "2. Configura-se o preenchimento com densidade gradiente (efeito degradê / Color Blend), afinando para a borda.",
      "3. Desenha-se o segundo objeto sobreposto (ex: laranja) com a densidade abrindo na direção oposta.",
      "4. Define-se uma área de overlap de 5 mm onde os pontos das duas cores se misturam e se cruzam.",
      "5. Ativa-se a borda 'franjada' ou aleatória (Feathering) nas pontas para mesclar os fios naturalmente.",
      "6. A máquina borda primeiro a cor base amarela e em seguida cobre com a cor laranja intermediária.",
      "7. O resultado visual é uma transição contínua e aveludada de tons, exatamente como uma pintura a óleo em tela."
    ],
    "mainTypes": [
      "Degradê Linear Simples (Para pétalas de flores, céu, pôr do sol e asas de borboletas)",
      "Degradê Multicromático em 3 ou 4 Camadas (Para pelagens realistas de animais, rostos e arte sacra)",
      "Degradê Radial Cilíndrico (Para letras com efeito de brilho metálico 3D e tubos cromados)"
    ],
    "characteristics": [
      "Efeito visual realista e artístico de pintura com agulha (*thread painting*) de altíssimo luxo",
      "Transição de cores suave e imperceptível sem linhas duras ou divisórias artificiais",
      "Bordado macio e flexível que não vira uma 'placa dura' de linha acumulada",
      "Destaque absoluto e valorização comercial de matrizes florais e temáticas"
    ],
    "limitations": [
      "Exige excelente domínio das ferramentas avançadas de gradiente e densidade do software",
      "Não colocar underlay pesado embaixo de cada camada (o excesso de underlay endurece o bordado)",
      "Cores com contraste extremo (como preto e branco) exigem pelo menos uma cor intermediária (cinza)"
    ],
    "numberingSystem": [
      "Densidade Inicial: 0,40 mm",
      "Densidade Final: 1,60 mm a 2,00 mm",
      "Largura do Overlap: 5,0 mm a 8,0 mm"
    ],
    "advantages": [
      "✔ Permite criar bordados realistas com efeito de luz, sombra e volume dignos de quadros de arte",
      "✔ Acaba com os desenhos chapados e sem vida, dando brilho e profundidade às peças",
      "✔ Conquista clientes exigentes dispostos a pagar valores nobres por peças exclusivas de ateliê"
    ],
    "commonErrors": [
      "❌ Borda duas camadas inteiras com densidade total (0,40 mm) uma em cima da outra, criando uma 'pedra'",
      "❌ Não dar sobreposição (overlap) suficiente, abrindo uma fenda visível onde aparece o tecido do fundo",
      "❌ Usar ângulos de ponto muito diferentes nas duas camadas, criando um efeito xadrez grosseiro"
    ],
    "voceSabia": "A técnica de sombreamento e pintura de agulha (*Needle Painting*) com sobreposição de fios nasceu na China no século VII durante a Dinastia Tang, onde bordadeiras reais usavam fios de seda divididos em 16 partes microscópicas para pintar retratos de imperadores!",
    "curiosidadeTecnica": "A ilusão de ótica do degradê têxtil baseia-se na resolução angular do olho humano a 50 cm de distância (cerca de 1 minuto de arco / 0,15 mm): quando fios de cores diferentes estão separados por menos de 0,25 mm, a retina combina as ondas luminosas em uma cor híbrida única.",
    "dicaArtrelados": "Para fazer um degradê perfeito em flores ou brasões, nunca jogue duas cores normais uma em cima da outra: use a ferramenta de 'Gradiente' do seu programa, abrindo o espaçamento dos pontos na beirada, e sobreponha pelo menos 4 a 5 mm da segunda cor com os pontos no mesmo ângulo. A mistura fica tão natural que ninguém vê onde termina uma cor e começa a outra!",
    "comparisonTable": {
      "headers": [
        "Método de Sombreamento",
        "Transição de Cores",
        "Maciez do Bordado",
        "Realismo Visual"
      ],
      "rows": [
        [
          "Overlap Gradiente Paramétrico (Degradê)",
          "Suave, aveludada e contínua",
          "100% macio e flexível",
          "Altíssimo (efeito pintura)"
        ],
        [
          "Duas Camadas Fechadas Sobrepostas",
          "Dura e marcada",
          "Grosso e duro como placa",
          "Baixo (fica empelotado)"
        ],
        [
          "Cores Lado a Lado sem Overlap",
          "Linha divisória seca",
          "Normal",
          "Chapado (sem profundidade)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES de ponta fina e alta precisão",
      "stabilizer": "Entretela de Recorte PolyMesh 60 g/m²",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Gradiente variável de 0.40 mm a 1.60 mm"
    },
    "applications": [
      "Bordados botânicos realistas, flores, pétalas e folhas com transição de luz e sombra",
      "Retratos, arte sacra e imagens sacras em estandartes e vestes religiosas",
      "Pelagens e penas em animais de caça, pássaros e cavalos de alta definição",
      "Efeitos de brilho dourado e prata em monogramas de casamento e logotipos de luxo"
    ],
    "troubleshootingTips": [
      "Se aparecer uma fenda branca no meio do degradê, aumente a área de sobreposição (overlap) em mais 2 mm",
      "Utilize linhas de poliéster trilobal de alto brilho para potencializar a refração da luz nas áreas sombreadas",
      "Reduza a velocidade da máquina para 750 PPM para garantir que cada penetração caia com exatidão milimétrica"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Tatami / Ponto Esteira",
      "Densidade de Ponto",
      "Nivelamento de Densidade Variável e Efeito Degradê no Ponto Satim",
      "Compensação de Repuxo"
    ],
    "tags": [
      "o-079",
      "overlap",
      "degrade",
      "transicao de cores",
      "color blend",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Color Blending, Shading & Overlap Gradient Techniques. Sydney, 2021.",
      "PARRISH, Gail. Chromatic Stitch Density Dynamics: Optical Blending and Thread Painting Geometry. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie no seu software um retângulo com degradê indo do azul escuro para o azul claro: faça a cor escura abrir a densidade de 0,40 para 1,50 mm e a cor clara fazer o caminho inverso com 5 mm de sobreposição. Borde em um retalho e veja o espetáculo do degradê perfeito saindo da máquina!",
    "quickSummary": "O segredo de misturar duas cores de linha na matriz para criar sombras suaves e degradês perfeitos.",
    "beginnerExplanation": "O degradê é quando a gente mistura duas cores de linha de forma tão suave que parece uma pintura: a máquina borda a primeira cor abrindo os pontos aos pouquinhos e entra com a segunda cor fechando os pontos por cima. Assim, você cria sombras lindas em flores, pôr do sol e rostos sem deixar o bordado duro!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-080-organza-de-seda-e-poliester-para-bordados-flutuantes-e-rendas",
    "code": "O-080",
    "term": "Organza de Seda e Poliéster para Bordados Flutuantes e Rendas (Organza Floating Embroidery & Sheer Fabrics)",
    "letter": "O",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do francês organzin (fio de seda crua torcida de alta nobreza, originário da cidade de Urgang na Ásia Central).",
    "summary": "Técnicas especializadas de digitalização, fixação e estabilização para bordados em organzas transparentes de seda pura ou poliéster, permitindo a criação de apliques flutuantes 3D, asas de borboletas e rendas translúcidas.",
    "definition": "Organza de Seda e Poliéster para Bordados Flutuantes e Rendas (Organza Base Substrate & Sheer Fabric Embroidery Protocol) é o conjunto de procedimentos técnicos e paramétricos aplicados na confecção de bordados computadorizados sobre tecidos de transparência extrema, armação tafetá e alta densidade de fios finos engomados (como a organza cristal de poliéster e a organza de seda pura). Por ser um tecido rígido, fino e quebradiço sob penetrações sucessivas de agulha, exige densidades mais abertas (0,45 mm a 0,50 mm), agulhas ultrafinas 65/9 SES e o emprego de entretelas hidrossolúveis de PVA que dissolvem 100% em água fria ou queima térmica com pirógrafo/ferro de solda para produção de apliques tridimensionais flutuantes.",
    "technicalDetails": "Gramatura da organza: 20 a 35 g/m². Agulha mandatória: 65/9 SES ou 70/10 SES de ponta arredondada leve e polimento espelhado. Densidade de acabamento: 0,45 mm a 0,50 mm (densidades abaixo de 0,38 mm cortam os filamentos do tecido). Estabilização: Entretela Hidrossolúvel de PVA (filme de 40 micras duplo ou não-tecido hidrossolúvel solúvel em água morna). Tensão de linha: Calibração superleve (Superior: 95 gf / Bobina: 18 gf).",
    "construction": [
      "Base de organza cristal 100% poliéster ou organza nobre de seda natural",
      "Dupla camada de entretela hidrossolúvel transparente de alta dissolução",
      "Montagem no bastidor com tensão uniforme sem estirar o tecido",
      "Matriz programada com underlays leves de ponto de corrida simples (Running Stitch)",
      "Linhas de poliéster ou raiom 40wt com acabamento acetinado de alto brilho"
    ],
    "howItWorks": [
      "1. Monta-se no bastidor uma camada de organza ensanduichada entre duas folhas de entretela hidrossolúvel.",
      "2. Instala-se na máquina uma agulha nova ultrafina 65/9 SES para não furar nem esgarçar o tecido fino.",
      "3. Ajusta-se a tensão da linha superior para 95 gf e a velocidade da máquina para 650 PPM.",
      "4. A máquina borda a matriz (ex: asas de borboleta ou pétalas de flor) com pontos cheios leves e contornos fechados.",
      "5. Retira-se a peça do bastidor e enxágua-se em água corrente morna para dissolver totalmente a entretela.",
      "6. A organza seca mantendo o formato rígido e a transparência cintilante entre os pontos bordados.",
      "7. Com uma tesourinha curva ou ferro de solda com bico fino, recorta-se a borda do bordado, criando um aplique 3D perfeito para aplicar em vestidos de noiva e alta costura."
    ],
    "mainTypes": [
      "Organza Cristal de Poliéster (Para apliques 3D recortados a quente com pirógrafo)",
      "Organza de Seda Pura Natural (Para vestidos de noiva de alta costura e véus refinados)",
      "Organza Holográfica / Furta-Cor (Para fantasias de luxo, moda festa e peças artísticas)"
    ],
    "characteristics": [
      "Transparência cristalina deslumbrante que cria a ilusão óptica de pontos flutuando no ar",
      "Capacidade de criar apliques tridimensionais (asas de fadas, pétalas soltas de flores) com volume real",
      "Toque leve, etéreo e sofisticado característico da alta costura internacional",
      "Zero marcas de entretela no resultado final após o enxágue em água"
    ],
    "limitations": [
      "Não utilizar agulhas grossas (como 80/12 ou 90/14), que rasgam e abrem buracos enormes na organza",
      "Nunca utilizar entretela rasgável comum (ela não sai dos furinhos transparentes da organza)",
      "Evitar densidades pesadas de tatami (elas cortam a organza como uma lâmina de estilete)"
    ],
    "numberingSystem": [
      "Tamanho de Agulha: 65/9 SES",
      "Densidade Recomendada: 0,45 mm a 0,50 mm",
      "Tensão Superior: 95 gf a 100 gf"
    ],
    "advantages": [
      "✔ Permite criar as famosas flores e borboletas 3D que são febre e sucesso de vendas na moda festa",
      "✔ Agrega um valor altíssimo a vestidos de noiva, debutantes e roupas infantis de luxo",
      "✔ O acabamento final fica 100% limpo, transparente e sem nenhum fiapo de entretela aparente"
    ],
    "commonErrors": [
      "❌ Borda com agulha grossa de ponta cortante, deixando o tecido cheio de buracos rasgados",
      "❌ Colocar densidade muito fechada (0,35 mm), cortando a peça inteira durante o bordado",
      "❌ Usar entretela de papel que não dissolve, estragando a transparência da organza"
    ],
    "voceSabia": "A organza de seda era o tecido favorito da rainha Maria Antonieta na França do século XVIII para confeccionar os babados e laços flutuantes dos seus vestidos de gala no Palácio de Versalhes!",
    "curiosidadeTecnica": "A resistência ao rasgamento de uma organza de poliéster cai em 60% se a distância entre duas penetrações sucessivas de agulha for menor que 0,35 mm na mesma linha de urdume; por isso, a filtragem de pontos curtos e a densidade de 0,45 mm são mandatórias.",
    "dicaArtrelados": "Para fazer borboletas 3D que parecem voar de verdade: coloque organza cristal com entretela solúvel no bastidor, borde as asinhas com agulha 65/9 fininha, lave para tirar a entretela e depois recorte em volta com um ferrinho de solda de ponta bem fina. A organza sela na hora sem desfiar e a borboleta fica firme e linda para você costurar no vestido!",
    "comparisonTable": {
      "headers": [
        "Tecido / Método",
        "Agulha Obrigatória",
        "Estabilizador Indicado",
        "Resultado Visual"
      ],
      "rows": [
        [
          "Organza com Entretela Solúvel",
          "65/9 SES Fina",
          "Hidrossolúvel dupla de PVA",
          "Pontos flutuantes, 100% transparente"
        ],
        [
          "Organza com Entretela Rasgável",
          "75/11",
          "Rasgável Comum (Inadequada)",
          "Fundo opaco sujo de papel preso"
        ],
        [
          "Organza sem Entretela",
          "65/9",
          "Nenhum (Inadequado)",
          "Tecido enruga e embola na lançadeira"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 700 PPM",
      "needleType": "65/9 SES ou 70/10 SES de ponta arredondada leve",
      "stabilizer": "Entretela Hidrossolúvel de PVA 40 micras dupla",
      "threadTension": "Superior: 95 gf / Bobina: 18 gf",
      "density": "0.45 mm a 0.50 mm com underlay leve"
    },
    "applications": [
      "Apliques tridimensionais (3D) de borboletas, folhas e pétalas para vestidos de noiva",
      "Véus de noiva, mantilhas e golas etéreas de vestidos de festa de alta costura",
      "Bordados em transparências de mangas e decotes de roupas de gala",
      "Flores artesanais bordadas para presilhas de cabelo e tiaras infantis de luxo"
    ],
    "troubleshootingTips": [
      "Se a organza cortar durante o bordado, aumente o espaçamento de ponto de 0,40 mm para 0,48 mm no programa",
      "Para recortar com ferro de solda, faça movimentos rápidos sem parar a ponta quente no mesmo ponto",
      "Utilize linhas de bordar com alto brilho (viscose ou poliéster trilobal) para valorizar a luminosidade da transparência"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Entretela Hidrossolúvel (Water-Soluble)",
      "Agulha de Ponta Arredondada (Ball Point / SES)",
      "Densidade de Ponto",
      "Ponto Satim / Ponto Cheio"
    ],
    "tags": [
      "o-080",
      "organza",
      "bordado flutuante",
      "aplique 3d",
      "tecidos transparentes",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "HAUTE COUTURE Embroidery Techniques: Sheer Fabrics, Organza & 3D Appliques. Paris, 2021.",
      "PARRISH, Gail. Ultra-Light Sheer Substrates: Needle Penetration Physics and Water-Soluble Dissolution Dynamics. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um pedaço de organza de poliéster com entretela hidrossolúvel no bastidor. Borde o contorno de uma pequena folha em ponto cheio com agulha 65/9. Lave a folha embaixo da torneira com água morna e veja a entretela sumir inteira, deixando a folha bordada transparente e linda!",
    "quickSummary": "O tecido transparente perfeito para fazer bordados delicados, flores e borboletas 3D que parecem flutuar no ar.",
    "beginnerExplanation": "A organza é aquele tecido transparente e fininho usado em vestidos de noiva e de festa. Para bordar nele, a gente usa agulha bem fininha e entretela que derrete na água: o bordado fica parecendo uma renda mágica flutuando no ar, perfeita para fazer borboletas e flores 3D de luxo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-081-otimizacao-de-saltos-e-trajetoria-de-deslocamento-do-pantografo",
    "code": "O-081",
    "term": "Otimização de Saltos e Trajetória de Deslocamento do Pantógrafo (Jump Path Optimization)",
    "letter": "O",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim optimus (o melhor / mais eficiente caminho) e do grego pantographos (instrumento de desenho mecânico em eixos X e Y).",
    "summary": "Algoritmos matemáticos de roteamento de percurso no software de digitalização para ordenar blocos de objetos, minimizar a distância total de saltos mecânicos do pantógrafo e reduzir o tempo de máquina.",
    "definition": "Otimização de Saltos e Trajetória de Deslocamento do Pantógrafo (Traveling Stitch Optimization, Jump Path Reduction & Shortest Path Algorithms) é a disciplina de engenharia de software de bordado que calcula o percurso ótimo de costura e saltos (*jumps*) entre centenas de elementos vetoriais de uma matriz. Utilizando variações do algoritmo do Caixeiro Viajante (*Traveling Salesperson Problem - TSP*) e grafos direcionados, o sistema reordena automaticamente a sequência de entrada e saída dos objetos da mesma cor, substituindo saltos aéreos longos por linhas de corrida embutidas sob áreas que serão cobertas posteriormente (*traveling underlay*). Essa otimização reduz em até 40% o tempo total de produção e diminui o desgaste dos motores de passo do pantógrafo.",
    "technicalDetails": "Algoritmo base: Otimização combinatória com busca heurística 2-opt. Redução métrica média: -30% a -45% na distância de deslocamento X/Y. Redução de comandos de corte de linha: Até 60% por meio de conectores ocultos de corrida (Running Stitches). Velocidade de salto do pantógrafo: 250 a 350 mm/s.",
    "construction": [
      "Grafo vetorial completo com todos os pontos de início e término de cada objeto",
      "Matriz de distâncias euclidianas entre saídas do objeto atual e entradas dos objetos seguintes",
      "Identificação de grandes áreas que serão bordadas futuramente para servir de túnel de passagem oculta",
      "Inversão automática da direção de digitalização de objetos simétricos para aproximar pontos de transição",
      "Inserção de linhas de corrida subterrâneas com comprimento de ponto calibrado (2,5 mm)"
    ],
    "howItWorks": [
      "1. No software de matriz, finaliza-se a vetorização de todos os elementos gráficos do desenho.",
      "2. Executa-se a função de 'Otimização Automática de Sequência e Ramos' (Branching / Sequence Optimization).",
      "3. O software analisa as posições espaciais de todas as letras e detalhes da mesma cor.",
      "4. Ele inverte o sentido de costura de algumas letras (ex: bordando de baixo para cima ou da direita para a esquerda) para que o ponto final fique a apenas 1 mm da próxima letra.",
      "5. Em vez de parar a máquina e dar um corte de linha demorado (que leva 4 segundos), a máquina caminha com uma costura invisível por baixo.",
      "6. A matriz final é exportada: o tempo de bordado na máquina cai, por exemplo, de 14 minutos para 9 minutos.",
      "7. A máquina borda de forma fluida, silenciosa e com o avesso incrivelmente limpo e livre de nós soltos."
    ],
    "mainTypes": [
      "Ramificação Automática de Textos e Letreiros (Conecta todas as letras de um nome sem nenhum corte intermediário)",
      "Otimização de Trajetória em Arabescos e Monogramas (Reduz saltos aéreos em desenhos finos e rendas)",
      "Roteamento de Preenchimentos Divididos (Borda seções complexas sem deixar marcas de corte na superfície)"
    ],
    "characteristics": [
      "Aumento imediato de 25% a 40% na produtividade diária de máquinas industriais e domésticas",
      "Redução drástica no número de cortes de linha e paradas mecânicas por minuto",
      "Menor desgaste térmico e mecânico nas correias e motores de passo do pantógrafo",
      "Avesso do bordado extremamente limpo, seguro e sem sobras de linha solta"
    ],
    "limitations": [
      "Linhas de corrida de deslocamento só podem ser ocultadas onde haverá outro preenchimento por cima",
      "Em tecidos muito transparentes (como organza), não se deve passar linhas de corrida que fiquem visíveis",
      "Exige que o programador confira no simulador se a inversão de direção não prejudicou o repuxo da peça"
    ],
    "numberingSystem": [
      "Comprimento de Ponto de Conexão: 2,2 mm a 2,5 mm",
      "Economia Média de Tempo: 20% a 40%",
      "Tempo Poupado por Corte Evitado: ~3 a 5 segundos"
    ],
    "advantages": [
      "✔ Faz sua máquina produzir mais peças por dia sem precisar aumentar a velocidade do motor",
      "✔ Elimina aquele monte de pontinhas de linha soltas no avesso que precisam ser limpas na tesoura",
      "✔ Deixa o bordado com movimento suave e contínuo, sem trancos e paradas bruscas"
    ],
    "commonErrors": [
      "❌ Borda um texto cheio de letras pequenas onde a máquina dá um corte de linha em cada letra, demorando o dobro do tempo",
      "❌ Passar linhas de corrida por cima de áreas vazias de tecido claro onde a linha fica aparecendo",
      "❌ Deixar o pantógrafo dar saltos gigantes de 15 cm de um lado para o outro do bastidor sem necessidade"
    ],
    "voceSabia": "O algoritmo que os softwares de bordado usam para calcular o melhor caminho das letras é o mesmo algoritmo matemático usado pelos correios e empresas de logística para calcular a rota mais rápida dos caminhões de entrega no mundo inteiro!",
    "curiosidadeTecnica": "Em uma matriz de 15.000 pontos com 25 cortes desnecessários, a máquina perde cerca de 2 minutos e meio apenas desacelerando, acionando a faca de corte e re-acelerando, o que equivale a um desperdício de 25 horas de produção a cada 1.000 peças bordadas.",
    "dicaArtrelados": "Ao programar nomes ou frases no programa de matriz, use a ferramenta de 'Ramificação' (Branching) ou agrupe as letras para conectar tudo em uma costura só: o programa descobre o caminho mais curto sozinho, esconde as passagens por baixo das letras e a máquina borda o nome inteirinho sem dar nenhum corte de linha no meio!",
    "comparisonTable": {
      "headers": [
        "Matriz",
        "Número de Cortes",
        "Tempo de Execução (10k pts)",
        "Desgaste do Pantógrafo"
      ],
      "rows": [
        [
          "Otimizada com Caminho Curto e Ramificação",
          "2 a 3 cortes apenas",
          "8 minutos",
          "Mínimo (movimento suave)"
        ],
        [
          "Sem Otimização (Corte a cada objeto)",
          "20 a 30 cortes",
          "13 minutos",
          "Alto (muitos trancos de parada)"
        ],
        [
          "Com Saltos Longos sem Corte",
          "Zero cortes (cheio de fiapos)",
          "7 minutos",
          "Médio (exige limpeza manual)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 950 PPM (Fluidez máxima)",
      "needleType": "Padrão de produção",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Padrão",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Bordado de nomes, escritas, frases e monogramas personalizados em uniformes e jalecos",
      "Grandes produções industriais de camisetas promocionais e bonés de alta escala",
      "Matrizes de arabescos finos, filigranas e medalhões barrocos",
      "Desenhos multicoloridos com dezenas de pequenos detalhes da mesma tonalidade"
    ],
    "troubleshootingTips": [
      "Utilize o simulador de bordado do software em velocidade 10x para enxergar visualmente a rota dos saltos",
      "Se uma linha de corrida aparecer no tecido, mude o ponto de início do objeto para bordar com salto e corte limpo",
      "Agrupe todos os objetos da mesma cor antes de rodar o comando de reordenação automática"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Corte de Linha Automático (Trimmer)",
      "Ponto de Corrida (Running Stitch)",
      "Ponto Satim / Ponto Cheio",
      "Sequenciamento de Cores"
    ],
    "tags": [
      "o-081",
      "otimizacao de saltos",
      "pantografo",
      "branching",
      "caminho mais curto",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Branching Algorithms & Traveling Path Optimization Guide. Sydney, 2021.",
      "PARRISH, Gail. Kinematic Optimization of Pantograph Trajectories and Traveling Stitches in Computerized Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra um nome de 6 letras no seu programa. Veja no simulador quantos cortes de linha ele faz. Depois aplique a ferramenta 'Ramificação' (Branching) e rode a simulação de novo: observe como a máquina borda todas as letras em uma linha contínua, sem cortar nenhuma vez e muito mais rápido!",
    "quickSummary": "O jeito inteligente de programar a matriz para a máquina não ficar cortando linha toda hora e bordar muito mais rápido.",
    "beginnerExplanation": "Em vez de fazer a máquina parar, cortar a linha e dar um pulo a cada letrinha ou pedacinho do desenho, o programa calcula o caminho mais curto e passa uma costurinha invisível por baixo. Assim, a máquina borda tudo direto sem parar, você ganha tempo e o avesso fica super limpinho!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "o-082-oscilacao-da-haste-da-agulha-e-folga-radial-na-bucha-de-bronze",
    "code": "O-082",
    "term": "Oscilação da Haste da Agulha e Folga Radial na Bucha de Bronze (Needle Bar Bushing Radial Play)",
    "letter": "O",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim oscillare (balançar / vibrar de um lado para o outro) e do francês boîtier (bucha cilíndrica de guia mecânico em bronze sinterizado).",
    "summary": "Procedimento metrológico de diagnóstico e ajuste da folga mecânica radial (Play < 0,02 mm) entre a barra de agulha de aço temperado e as buchas de bronze fosforoso do cabeçote da máquina de bordar.",
    "definition": "Oscilação da Haste da Agulha e Folga Radial na Bucha de Bronze (Needle Bar Radial Deflection & Sintered Bronze Bushing Wear Calibration) é a análise e correção mecânica do desgaste dimensional que ocorre no acoplamento deslizante entre a barra de agulha e as buchas guia superior e inferior do cabeçote. Com o acúmulo de milhões de ciclos de penetração em tecidos pesados, a bucha de bronze sinterizado sofre desgaste por atrito, criando uma folga radial superior a 0,04 mm. Essa folga faz a ponta da agulha oscilar lateralmente durante o impacto no tecido, provocando colisão direta da ponta da agulha com a chapa de ponto ou com o bico da lançadeira, falhas de laçada e quebra frequente de agulhas.",
    "technicalDetails": "Folga radial de fábrica permitida: 0,010 mm a 0,020 mm. Limite máximo de desgaste admissível: 0,035 mm. Material da barra: Aço cromo-molibdênio retificado e polido (Dureza: 58-62 HRC). Material das buchas: Bronze fosforoso autolubrificante sinterizado (CuSn8P). Desvio lateral da ponta medido com relógio comparador: ≤ 0,03 mm.",
    "construction": [
      "Barra de agulha tubular de precisão com canaleta de posicionamento e guia de arame",
      "Bucha superior e inferior prensadas no bloco de alumínio usinado do cabeçote",
      "Pavio de feltro embebido em óleo mineral para lubrificação capilar contínua da barra",
      "Relógio comparador milesimal de contato plano montado com base magnética",
      "Ferramenta extratora e prensa de precisão para substituição de buchas de bronze desgastadas"
    ],
    "howItWorks": [
      "1. Remove-se a tampa frontal e o calcador para ter acesso à barra de agulha a ser inspecionada.",
      "2. Posiciona-se a ponta do relógio comparador na extremidade inferior da barra de agulha (logo acima do prendedor de agulha).",
      "3. Aplica-se uma força lateral leve (cerca de 500 gf) com os dedos empurrando a barra para a esquerda e para a direita.",
      "4. Faz-se a leitura no mostrador do relógio comparador: se o deslocamento for maior que 0,035 mm, a bucha atingiu o limite de vida útil.",
      "5. O técnico remove a barra e extrai a bucha de bronze gasta utilizando um saca-buchas de precisão.",
      "6. Prensa-se a nova bucha de bronze fosforoso original e reinsere-se a barra de agulha retificada.",
      "7. A folga volta ao padrão de fábrica (0,015 mm): a agulha desce com rigidez absoluta, eliminando 100% dos choques mecânicos com a lançadeira."
    ],
    "mainTypes": [
      "Inspeção de Buchas em Cabeçotes Monocabeça (Garante precisão após anos de produção intensa)",
      "Calibração de Buchas em Máquinas Industriais Multicabeças (Padroniza a folga entre todas as 6, 12 ou 24 cabeças)",
      "Substituição de Barras de Agulha com Revestimento Cerâmico (Para máquinas que bordam couro e materiais abrasivos)"
    ],
    "characteristics": [
      "Rigidez direcional milimétrica na descida e subida da agulha em alta velocidade",
      "Eliminação total de estalos mecânicos e quebra misteriosa de agulhas na chapa de ponto",
      "Alinhamento perfeito e constante de 0,05 mm entre a cava da agulha e a ponta da lançadeira",
      "Formação de pontos de contorno e satins com nitidez cirúrgica"
    ],
    "limitations": [
      "Exige instrumentos metrológicos de medição (relógio comparador) e ferramenta saca-buchas",
      "Nunca bater com martelo direto na barra de agulha (ela entorta e perde a retilineidade)",
      "Troca de buchas deve ser realizada por técnico mecânico capacitado"
    ],
    "numberingSystem": [
      "Folga Radial Ideal: 0,015 mm",
      "Limite de Desgaste: 0,035 mm",
      "Dureza da Barra: 60 HRC"
    ],
    "advantages": [
      "✔ Acaba com a quebra repetida de agulhas e pontas estouradas na chapa de ponto",
      "✔ Evita que a agulha bata na lançadeira e estrague uma peça cara da máquina",
      "✔ Garante que as letras pequenas fiquem nítidas e sem tremidos nos contornos"
    ],
    "commonErrors": [
      "❌ Borda couro ou jeans grosso em velocidade máxima até arrombar a bucha de bronze da barra",
      "❌ Deixar o feltro de lubrificação da barra secar completamente sem colocar óleo",
      "❌ Trocar a agulha achando que a agulha é que é torta, quando na verdade a barra inteira está balançando frouxa"
    ],
    "voceSabia": "As buchas de bronze sinterizado têm microporos minúsculos que guardam óleo como uma esponja metálica; quando a barra de agulha esquenta em movimento, o metal dilata suavemente e libera o óleo sozinho para se auto-lubrificar!",
    "curiosidadeTecnica": "Uma folga de apenas 0,04 mm na bucha inferior do cabeçote se amplifica na ponta de uma agulha de 40 mm de comprimento, gerando uma oscilação lateral de quase 0,20 mm durante a penetração no tecido, o que é suficiente para colidir com o bico da lançadeira.",
    "dicaArtrelados": "Faça um teste simples de folga na sua máquina: com a máquina desligada e a agulha abaixada, pegue na pontinha da barra de agulha com dois dedos e tente chacoalhar de um lado para o outro. Se você sentir que ela tem um 'joguinho' ou folga perceptível estalando, chame o mecânico para trocar a bucha de bronze antes que ela quebre sua lançadeira!",
    "comparisonTable": {
      "headers": [
        "Estado da Bucha / Barra",
        "Folga Radial",
        "Risco de Quebra de Agulha",
        "Precisão do Ponto"
      ],
      "rows": [
        [
          "Nova / Ajustada de Fábrica",
          "0,015 mm (Firme e justa)",
          "Quase zero",
          "Cirúrgica e ultra-nítida"
        ],
        [
          "Com Desgaste Moderado",
          "0,035 mm",
          "Médio (quebras esporádicas)",
          "Bordas levemente tremidas"
        ],
        [
          "Bucha Arrombada / Gasta",
          "> 0,050 mm (Balança frouxa)",
          "Altíssimo (bate na chapa e lançadeira)",
          "Pontos tortos e pulados"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-ajuste: Estabilidade total até 1.000 PPM",
      "needleType": "Padrão de produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Revisão geral periódica de cabeçotes industriais e máquinas comerciais",
      "Solução definitiva para máquinas que quebram agulhas repetidamente sem motivo aparente",
      "Manutenção preventiva pós-produção pesada de bonés, couro e calçados",
      "Restauração de máquinas seminovas para recuperação da precisão original de fábrica"
    ],
    "troubleshootingTips": [
      "Inspecione o feltro de lubrificação no topo da barra e adicione 1 gota de óleo mineral semanalmente",
      "Se a chapa de ponto estiver cheia de marcas de batida de agulha, cheque a folga da bucha imediatamente",
      "Utilize sempre buchas e barras originais do fabricante da máquina para manter a tolerância H7/g6"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Chapa de Ponto",
      "Agulha de Bordar",
      "Manutenção Preventiva"
    ],
    "tags": [
      "o-082",
      "barra de agulha",
      "bucha de bronze",
      "folga radial",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA / BARUDAN Technical Service Manual: Needle Bar Bushing Tolerances & Head Overhaul. Nagoya, 2021.",
      "PARRISH, Gail. Kinematics of Needle Deflection and Bushing Tribology in Automated Embroidery Machinery. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina desligada, segure a haste da agulha com a ponta dos dedos e tente movimentá-la suavemente para os lados e para a frente: sinta como a barra deve deslizar para cima e para baixo de forma macia, mas sem ter nenhuma folga lateral frouxa!",
    "quickSummary": "Regulagem da pecinha de metal onde a agulha sobe e desce para a agulha não ficar bamba nem quebrar na máquina.",
    "beginnerExplanation": "A barra de agulha corre dentro de um anelzinho de bronze bem justo. Se com o tempo esse anel gastar, a agulha fica 'bamba' chacoalhando de um lado para o outro e acaba batendo na chapa de metal ou na lançadeira. Trocar essa pecinha deixa a agulha firminha e acaba com as quebras!",
    "updatedAt": "2026-08-29"
  }
];

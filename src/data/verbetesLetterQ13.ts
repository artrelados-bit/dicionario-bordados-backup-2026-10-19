import { Verbete } from "../types";

export const VERBETES_LETTER_Q13: Verbete[] = [
  {
    "id": "q-091-quina-viva-e-meia-esquadria-em-cantos-de-ponto-cheio",
    "code": "Q-091",
    "term": "Quina Viva e Meia-Esquadria em Cantos de Ponto Cheio (Mitred Corners & Sharp Angle Digitizing)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim cuneus (canto angular/quina) e do francês onglet / mitre (corte diagonal em meia-esquadria a 45 graus).",
    "summary": "Técnica fundamental de digitalização para cantos afiados e ângulos agudos (< 90°) em molduras e letras, dividindo o ponto cheio em duas colunas com junta diagonal perfeita (Mitre) ou sobreposição (Cap), evitando calombos duros de pontos acumulados.",
    "definition": "Quina Viva e Meia-Esquadria em Cantos de Ponto Cheio (Mitred Corner Digitizing, Cap Corners & Sharp Angle Satin Branching) é a regra geométrica e metodológica de programação de matrizes para direcionamento das linhas em ângulos fechados (menores ou iguais a 90°), como cantos de molduras, estrelas, brasões e letras capitais. Quando uma coluna de ponto cheio contorna uma quina viva de raio fechado sem fracionamento, os pontos internos giram como um leque hiperdenso acumulando dezenas de batidas no mesmo milímetro, enquanto o lado externo fica frouxo e ralo. A digitalização correta divide a quina viva em duas seções angulares conectadas por uma linha diagonal de 45° em meia-esquadria (*Mitre Joint*) ou com sobreposição nivelada (*Capped Corner*), garantindo pontas agulhadas afiadas, espessura constante e zero acúmulo de linha.",
    "technicalDetails": "Ângulo crítico para aplicação de meia-esquadria: < 75° a 90°. Densidade na junção de meia-esquadria: Redução de 20% com alternância de pontos intercalados para evitar emenda grossa. Tipo de quina 'Cap' (Sobreposta): Uma coluna passa reta e a segunda encosta nela perpendicularmente com arremate oculto. Tipo de quina 'Mitre' (Meia-esquadria): As duas colunas se encontram na bissetriz do ângulo com ângulo exato de 45°. Eliminação de calombo de linha: 100% eficaz.",
    "construction": [
      "Objeto de coluna de ponto cheio gerado com ferramenta de contorno vetorial (Coluna A / Coluna C)",
      "Divisor automático de cantos em meia-esquadria (Mitred Corner Tool) habilitado no software",
      "Compensação de encolhimento específica para a bissetriz do canto (+ 0,3 mm)",
      "Pesponto de amarração subjacente desenhado em formato de 'L' ou 'V' sem cruzar a diagonal",
      "Ângulo de ponto parametrizado para transição ortogonal suave nas duas pernas da moldura"
    ],
    "howItWorks": [
      "1. O programador precisa digitalizar uma moldura quadrada com borda de 4 mm de ponto cheio.",
      "2. Se ele apenas traçar um retângulo contínuo, as 4 quinas vão virar um nó amontoado de linha grossa dura.",
      "3. Ele seleciona o canto e ativa a opção 'Canto em Meia-Esquadria (Mitre)'.",
      "4. O software calcula a bissetriz a 45 graus e fatia o ponto cheio em duas metades perfeitas.",
      "5. A máquina borda o lado esquerdo descendo e para no corte diagonal; em seguida, borda o lado inferior encaixando os pontos exatamente na linha de 45°.",
      "6. O canto resultante fica com uma quina viva pontiaguda, afiada como desenho feito com régua e esquadro.",
      "7. A peça fica macia, plana, sem nenhum calombo ou dureza nos quatro cantos da moldura."
    ],
    "mainTypes": [
      "Canto em Meia-Esquadria (Mitred Corner - Corte em 45° clássico de moldura de quadro)",
      "Canto Sobreposto com Tampa (Capped Corner - Uma perna vai até o fim e a outra encosta reta)",
      "Canto em Leque com Pontos Intercalados (Fan Corner - Para cantos ligeiramente arredondados > 90°)"
    ],
    "characteristics": [
      "Pontas de molduras e estrelas perfeitamente pontiagudas e afiadas",
      "Eliminação definitiva de calombos grossos e duros de linha acumulada nos cantos",
      "Zero quebras de agulha e zero furos no tecido durante curvas angulares fechadas",
      "Acabamento estético de altíssimo requinte técnico e elegância visual"
    ],
    "limitations": [
      "Para ângulos muito agudos menores que 30°, prefira o canto sobreposto (Cap) em vez de meia-esquadria",
      "Não colocar pontos de amarração densos bem em cima da linha de corte diagonal do canto",
      "Ajustar a compensação de encolhimento para que a junção em 45° não abra uma fresta com o repuxo do tecido"
    ],
    "numberingSystem": [
      "Ângulo Crítico: ≤ 90 graus",
      "Ângulo da Linha de Junção: 45 graus (Bissetriz)",
      "Espessura Máxima de Coluna: 6,0 mm"
    ],
    "advantages": [
      "✔ Suas molduras, brasões e estrelas ficam com pontas perfeitas e afiadas como de gráfica",
      "✔ Acaba com aqueles nós grossos nos cantos que quebram agulhas e entortam o bastidor",
      "✔ Dá um aspecto profissional e impecável para qualquer desenho geométrico"
    ],
    "commonErrors": [
      "❌ Borda cantos de 90 graus em leque contínuo, criando um bolo de linha duro que parece um caroço",
      "❌ Deixar uma fresta branca aberta na diagonal por esquecer de colocar compensação de encolhimento",
      "❌ Tentar fazer meia-esquadria em curvas suaves redondas onde deveria ser um leque natural"
    ],
    "voceSabia": "A técnica de união em meia-esquadria (*Mitre Joint*) tem mais de 2.000 anos de história na marcenaria clássica romana e foi transportada para os primeiros códigos de computação gráfica de bordado nos anos 1980 pela Wilcom na Austrália!",
    "curiosidadeTecnica": "Em um canto vivo de 90° digitalizado em leque sem meia-esquadria, a densidade no vértice interno atinge mais de 12 pontos por milímetro linear, um aumento de mais de 400% na concentração de fio que deforma o tecido.",
    "dicaArtrelados": "Quando estiver criando molduras, brasões ou caixas de texto no seu programa de matrizes: **nunca faça o canto contínuo em curva fechada!** Use sempre a ferramenta de **Canto em Meia-Esquadria (Mitre)**. O programa faz um corte elegante a 45 graus como uma moldura de quadro de madeira: o bordado fica retinho, as pontas ficam afiadas e a máquina borda com a maior suavidade!",
    "comparisonTable": {
      "headers": [
        "Tipo de Canto",
        "Formato Visual da Ponta",
        "Acúmulo de Linha no Vértice",
        "Aspecto no Tecido"
      ],
      "rows": [
        [
          "Meia-Esquadria (Mitre 45°)",
          "Quina viva afiada e geométrica",
          "Zero (distribuição perfeita)",
          "Plano, fino e macio"
        ],
        [
          "Sobreposto (Capped Corner)",
          "Reto e robusto em 'T'",
          "Muito baixo",
          "Uniforme e estruturado"
        ],
        [
          "Leque sem Tratamento (Fan)",
          "Arredondado e deformado",
          "Altíssimo (> 400% de sobreposição)",
          "Duro, alto como caroço e repuxado"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "0.38 mm com cantos fracionados"
    },
    "applications": [
      "Digitalização de molduras retangulares e quadradas em toalhas e monogramas",
      "Bordados geométricos, brasões de armas, medalhões e divisas militares",
      "Letras capitais com serifas angulares retas (fontes estilo Times New Roman e Serif)",
      "Bordados arquitetônicos, logomarcas corporativas e logotipos esportivos"
    ],
    "troubleshootingTips": [
      "Se a linha diagonal abrir uma pequena fresta após bordar, aumente a sobreposição (*Overlap*) em 0,3 mm no software",
      "Em letras pequenas com cantos menores que 2 mm, use canto sobreposto (Cap) para não perder definição",
      "Verifique sempre no simulador 3D se a linha diagonal está perfeitamente orientada para o vértice"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Cheio (Satin Stitch)",
      "Compensação de Encolhimento (Pull Compensation)",
      "Ponto de Entrada e Saída (Lead-in / Lead-out)",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-091",
      "quina viva",
      "meia-esquadria",
      "mitred corner",
      "cantos",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ADVANCED VECTOR DIGITIZING: Mitred Corner Geometry, Angle Branching & Satin Interpolation. Sydney, 2021.",
      "PARRISH, Gail. Geometric Corner Treatments in Embroidery CAD: Mitre vs Cap Stitch Architecture. Cincinnati, 2022."
    ],
    "practicalExercise": "Desenhe um quadrado de 4x4 cm no seu programa com borda de ponto cheio. No primeiro, deixe o canto padrão em leque; no segundo, aplique Meia-Esquadria a 45°. Borde os dois em um retalho e passe o dedo por cima dos cantos: sinta a diferença inacreditável de maciez e veja como a quina com meia-esquadria parece desenhada a laser!",
    "quickSummary": "O jeito correto de programar cantos de molduras cortados em 45 graus para as pontas ficarem bem afiadas e sem calombos.",
    "beginnerExplanation": "Sabe quando você vê uma moldura de quadro de madeira e repara que os cantos são cortados na diagonal certinho para encaixar? No bordado é a mesma coisa! Quando fazemos cantos de molduras cortados em diagonal (meia-esquadria), as pontas ficam bem afiadas e retinhas, sem virar aquele nó grosso de linha que quebra a agulha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-092-quociente-de-retracao-termica-de-entretelas-termocolantes",
    "code": "Q-092",
    "term": "Quociente de Retração Térmica de Entretelas Termocolantes (Thermal Shrinkage Coefficient & Fusible Interlining Protocol)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Insumos & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quotiens (coeficiente dimensional) e do grego thermos (calor de adesivação sob pressão).",
    "summary": "Estudo físico da contração dimensional diferencial de entretelas termocolantes e resinas de poliamida/polietileno sob o calor da prensa térmica (120°C a 160°C), evitando enrugamento e ondas no tecido após o bordado.",
    "definition": "Quociente de Retração Térmica de Entretelas Termocolantes (Thermal Shrinkage Coefficient, Fusible Interlining Dimensional Stability & Heat-Press Bonding Dynamics) é a medida percentual de encolhimento e deformação que uma entretela termocolante sofre ao ser submetida aos ciclos térmicos de colagem na prensa ou ferro (geralmente entre 130°C e 160°C por 10 a 15 segundos). Quando o coeficiente de retração térmica da entretela é superior ao coeficiente de retração do tecido hospedeiro (como seda, viscose, piquet ou microfibra), a entretela encolhe mais rápido que o tecido durante o resfriamento, gerando tensões internas que provocam rugas permanentes, bolhas (*Bubbling*), ondulações e perda de estabilidade dimensional no contorno do bordado.",
    "technicalDetails": "Coeficiente de retração térmica seguro: < 1,0% a 1,5% em ambos os eixos (trama e urdume). Ponto de fusão da resina adesiva de poliamida (PA): 115°C a 130°C / Resina de polietileno (PE): 130°C a 150°C. Pressão de prensagem recomendada: 2,5 a 3,5 bar (ou pressão firme e uniforme no ferro). Tempo de resfriamento estabilizador obrigatório: Mínimo de 20 minutos em repouso plano antes de enquadrar e bordar.",
    "construction": [
      "Substrato de não-tecido (TNT) de fibras longas de poliéster/viscose com pré-termofixação",
      "Camada de resina microponto (Microdot) de poliamida pura de alta pureza e baixo ponto de fusão",
      "Prensa térmica plana digital com controle de temperatura e temporizador de precisão",
      "Manta de teflon protetora para evitar contato direto da chapa quente com as fibras",
      "Mesa de resfriamento plana em madeira ou mármore para dissipação térmica rápida"
    ],
    "howItWorks": [
      "1. A bordadeira precisa bordar um logotipo fino no peito de uma camisa social de viscose delicada.",
      "2. Corta um pedaço de entretela termocolante de malha com resina microponto.",
      "3. Posiciona no avesso do tecido e aplica na prensa térmica a 135°C por 12 segundos com proteção de folha de teflon.",
      "4. A resina amolece e funde perfeitamente nas fibras sem contração agressiva.",
      "5. Ela retira a peça da prensa e deixa descansar em uma bancada plana por 20 minutos até esfriar 100%.",
      "6. A estrutura tecido-entretela atinge estabilidade dimensional molecular perfeita.",
      "7. Ao colocar no bastidor e bordar a 850 PPM, o tecido não enruga, não faz bolhas e o bordado fica impecável e liso como uma pintura."
    ],
    "mainTypes": [
      "Entretela Termocolante de Malha Bies (Com elasticidade multidirecional para malhas e camisas finas)",
      "Entretela Termocolante de Não-Tecido Rasgadeira (Para tecidos planos de algodão e sarja)",
      "Filme Termocolante de Proteção de Avesso - Touch Skin (Colado com ferro após o bordado para cobrir o avesso e proteger a pele do bebê)"
    ],
    "characteristics": [
      "Adesão perfeita e homogênea que transforma tecidos moles em uma base estável para bordar",
      "Eliminação de dobras, bolhas e ondas que aparecem após passar a ferro",
      "Proteção definitiva contra coceiras no avesso de roupas infantis",
      "Resistência a dezenas de lavagens domésticas sem descolar"
    ],
    "limitations": [
      "Nunca enquadrar ou bordar a peça imediatamente após tirar da prensa quente (esperar esfriar completamente)",
      "Regular a temperatura da prensa de acordo com a etiqueta do fabricante da entretela (calor excessivo queima a resina)",
      "Não utilizar vapor durante a colagem de entretelas termocolantes de resina seca"
    ],
    "numberingSystem": [
      "Taxa de Retração Segura: < 1,2%",
      "Temperatura de Fusão: 125°C a 140°C",
      "Tempo de Prensagem: 10 a 15 segundos"
    ],
    "advantages": [
      "✔ Garante que camisas sociais e roupas finas de viscose fiquem lisinhas e sem nenhuma ruga",
      "✔ Deixa o avesso de bodies de bebê ultra macio e sem pinicar a pele sensível da criança",
      "✔ Facilita o enquadramento de tecidos difíceis e escorregadios no bastidor"
    ],
    "commonErrors": [
      "❌ Passar a prensa com temperatura alta demais (ex: 200°C), queimando a resina e encolhendo a entretela toda",
      "❌ Colocar a peça no bastidor ainda quente logo após prensar, deformando o tecido",
      "❌ Usar entretela termocolante barata com resina de pó grosso que descola na primeira lavagem"
    ],
    "voceSabia": "A tecnologia das entretelas termocolantes com adesivos de micropontos foi inventada na Alemanha nos anos 1960 pela Freudenberg (criadora da marca Vilene) e substituiu completamente os antigos forros costurados à mão na alfaiataria mundial!",
    "curiosidadeTecnica": "A resina de poliamida microponto requer uma pressão específica de 3 bar para que o polímero líquido penetre exatamente 30% da profundidade das fibras do tecido, garantindo ancoragem mecânica sem transpassar para o lado direito da peça.",
    "dicaArtrelados": "Para fazer o **Avesso dos Sonhos para Bebês no Ateliê Artrelados**: depois que terminar de bordar aquele body de bebê fofinho, recorte as sobras de linha no avesso e cole um pedaço de **Entretela de Proteção Termocolante Macia (tipo Touch Skin)** com o ferro quente sem vapor por 10 segundos. O avesso fica macio como uma seda e a mamãe vai se apaixonar pelo cuidado com a pele do bebê!",
    "comparisonTable": {
      "headers": [
        "Tipo de Entretela",
        "Método de Fixação",
        "Estabilidade Dimensional",
        "Indicação de Uso"
      ],
      "rows": [
        [
          "Termocolante de Malha Microponto",
          "Prensa Térmica (130°C)",
          "Excelente (não repuxa)",
          "Camisas finas, viscose e malha fria"
        ],
        [
          "Termocolante de Proteção de Avesso",
          "Ferro Quente (140°C)",
          "Ultra Macia e Flexível",
          "Proteção de pele em enxovais de bebê"
        ],
        [
          "Entretela Comum Solta (sem cola)",
          "Apenas presa no bastidor",
          "Exige bastidor bem esticado",
          "Toalhas, jeans e tecidos firmes"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão adequado ao tecido",
      "stabilizer": "Termocolante termofixada",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Bordados em tecidos delicados propensos a enrugar (viscose, seda, cetim e cambraia)",
      "Proteção de avesso e toque suave em enxovais de recém-nascidos e pijamas",
      "Estruturação de colarinhos, punhos de camisa e carcelas de camisas polo",
      "Reforço invisível em tecidos stretch com elastano antes do bordado"
    ],
    "troubleshootingTips": [
      "Se a entretela descolar após a lavagem, aumente a pressão e o tempo de prensagem em 3 segundos",
      "Sempre use um papel manteiga ou tecido de algodão fino entre o ferro e a entretela para não sujar a base do ferro",
      "Deixe a peça esfriar deitada em uma mesa plana antes de pegar para enquadrar"
    ],
    "relatedTerms": [
      "Insumos & Fios",
      "Tipos de Tecidos",
      "Técnicas de Bordado",
      "Acessórios & Bastidores",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "q-092",
      "entretela termocolante",
      "retracao termica",
      "prensa termica",
      "protecao de avesso",
      "insumos e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FUSIBLE INTERLINING TECHNOLOGY: Thermal Shrinkage Dynamics, Microdot Resins & Dimensional Bonding. Weinheim, 2021.",
      "PARRISH, Gail. Heat-Bonded Stabilization in Apparel Embroidery: Resin Chemistry and Fabric Preservation. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de tecido fino de viscose. Cole a entretela termocolante em um pedaço e deixe outro solto. Borde o mesmo monograma nos dois: veja como a parte termocolada fica lisinha como papel fotográfico, enquanto a solta fica cheia de ondinhas ao redor das letras!",
    "quickSummary": "O controle do calor ao colar entretelas termocolantes para o tecido nunca encolher nem ficar enrugado.",
    "beginnerExplanation": "A entretela termocolante é aquela que a gente cola com o ferro quente no avesso do pano para ele ficar firminho. Se o ferro estiver quente demais, a entretela encolhe e enruga todo o tecido! Usando a temperatura certa e deixando esfriar antes de bordar, a roupa fica lisinha e perfeita!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-093-quick-release-clamping-system-garras-de-fixacao-rapida",
    "code": "Q-093",
    "term": "Quick-Release Clamping System (Garras de Fixação Rápida para Calçados, Bolsas e Peças Estruturadas)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Acessórios & Bastidores",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês quick-release clamping (grampo mecânico de desengate rápido por alavanca excêntrica).",
    "summary": "Dispositivo mecânico de aperto pantográfico por mordentes emborrachados e alavancas pneumáticas ou de ação rápida, permitindo fixar tênis, botas, cintos, mochilas pesadas e bolsas de couro sem aro tradicional.",
    "definition": "Quick-Release Clamping System (Pneumatic & Mechanical Quick-Clamp Workholding, Slim-Line Clamping & Footwear Embroidery Fixture) é a tecnologia de fixação para bordado computadorizado que elimina totalmente o aro de bastidor convencional, substituindo-o por mordentes de pressão mecânica com acionamento por alavanca de came (*Toggle Clamp*) ou pistões pneumáticos de ar comprimido. O sistema permite agarrar firmemente itens tridimensionais fechados e ultra rígidos que seriam impossíveis de enquadrar em bastidores normais (como línguas e laterais de tênis esportivos, botas de montaria, bolsas estruturadas de couro, cintos de segurança, mochilas com armação e malas de viagem), segurando o material com força de até 60 kgf sem amassar o produto e com troca em menos de 2 segundos.",
    "technicalDetails": "Força de aperto dos mordentes: 30 a 60 kgf ajustável por rosca micrométrica ou regulador de pressão de ar (4 a 6 bar). Janela útil de bordado: Módulos intercambiáveis de 6x6 cm até 20x20 cm. Tempo de travamento/desengate: < 2 segundos por alavanca de toque único. Altura livre de inserção: Até 80 mm para calçados de cano alto e mochilas estruturadas.",
    "construction": [
      "Chassi em duralumínio usinado em CNC de alta rigidez torsional",
      "Alavancas mecânicas de aperto rápido de ação rápida com articulação em aço temperado",
      "Mordentes superiores com almofadas de poliuretano vulcanizado antiderrapante intercambiáveis",
      "Braço de suporte tubular estreito para inserção profunda dentro de canos de botas e tênis",
      "Adaptadores de encaixe direto para o pantógrafo de máquinas industriais e semiprofissionais"
    ],
    "howItWorks": [
      "1. O ateliê recebe uma encomenda para bordar o nome de um atleta na lateral e língua de 20 pares de tênis de corrida.",
      "2. Como é impossível colocar um tênis fechado em um bastidor de plástico normal, o operador instala o sistema de *Clamping de Fixação Rápida* na máquina.",
      "3. Abre a língua do tênis, encaixa a base estreita do grampo por dentro do calçado.",
      "4. Puxa a alavanca de travamento rápido (*Quick-Release*): os mordentes emborrachados prendem a lateral do tênis instantaneamente com firmeza de aço.",
      "5. A máquina borda o logotipo com agulha forte 90/14 e linha poliéster a 750 PPM.",
      "6. Ao terminar, o operador apenas levanta a alavanca: o tênis se solta na mesma hora em 1 segundo.",
      "7. O tênis fica com o bordado impecável, sem nenhuma deformação ou marca na estrutura do calçado."
    ],
    "mainTypes": [
      "Grampo Clamping Mecânico Slim-Line (Com alavancas manuais rápidas para tênis, chuteiras e bolsas)",
      "Sistema de Clamping Pneumático Automático (Com acionamento por pedal de ar para indústrias de calçados)",
      "Grampos de Janela Rápida para Bolsos e Meias (Para itens tubulares ultra estreitos de difícil acesso)"
    ],
    "characteristics": [
      "Abertura de novos mercados altamente lucrativos (personalização de tênis, botas e malas caras)",
      "Fixação de peças grossas e duras que quebram bastidores de plástico comuns",
      "Troca e montagem ultrarrápida da peça em apenas 2 segundos",
      "Pressão firme e uniforme que impede o deslizamento do couro durante o bordado"
    ],
    "limitations": [
      "Exige atenção ao traçado (Trace) da máquina para garantir que a agulha não bata nas garras metálicas",
      "Requer agulhas reforçadas (calibre 90/14 ou ponta cunha de couro) para perfurar materiais grossos",
      "Custo de investimento superior em relação a bastidores convencionais"
    ],
    "numberingSystem": [
      "Tempo de Fixação: < 2 segundos",
      "Pressão de Aperto: 30 a 60 kgf",
      "Pressão Pneumática: 4 a 6 bar"
    ],
    "advantages": [
      "✔ Permite que seu ateliê personalize tênis, bolsas de couro, mochilas e malas cobrando preços premium",
      "✔ Nunca mais perca um serviço lucrativo por não conseguir colocar a peça no bastidor comum",
      "✔ Agiliza a produção de pedidos difíceis sem cansar as mãos do operador"
    ],
    "commonErrors": [
      "❌ Tentar forçar um tênis ou bolsa dura em um bastidor plástico comum, quebrando o aro do bastidor",
      "❌ Borda sem fazer a checagem de área (Trace), fazendo a agulha bater com tudo na garra de ferro",
      "❌ Apertar a garra com pressão excessiva sobre couros macios sem usar protetor de borracha"
    ],
    "voceSabia": "O sistema de clamping de fixação rápida para tênis foi desenvolvido originalmente para atender os calçados dos jogadores de futebol da Copa do Mundo nos anos 1990, permitindo bordar bandeiras de países e nomes em chuteiras já prontas!",
    "curiosidadeTecnica": "O mecanismo de alavanca de came (*Toggle Mechanism*) multiplica a força manual aplicada pelo operador por um fator de até 15 vezes no ponto de travamento mecânico, garantindo rigidez absoluta mesmo sob a vibração de 800 PPM da máquina.",
    "dicaArtrelados": "Se você quer se destacar da concorrência e cobrar muito mais caro por personalizações exclusivas: **ofereça bordados em tênis, chuteiras e bolsas de couro!** Com um dispositivo de **Garra de Fixação Rápida (Clamping)**, você segura qualquer peça dura sem sofrer e faz bordados que 99% dos outros ateliês dizem que 'é impossível de fazer'!",
    "comparisonTable": {
      "headers": [
        "Sistema de Fixação",
        "Capacidade para Tênis/Couro",
        "Tempo de Fixação",
        "Risco de Quebrar o Aro"
      ],
      "rows": [
        [
          "Clamping de Garras Rápidas",
          "100% Compatível e Firme",
          "2 segundos (alavanca)",
          "Zero (corpo de duralumínio)"
        ],
        [
          "Bastidor Magnético",
          "Bom para bolsas flexíveis",
          "4 segundos",
          "Zero"
        ],
        [
          "Bastidor Plástico Comum",
          "Incompatível / Impossível",
          "Impossível de fechar",
          "Altíssimo (racha o plástico)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM em materiais rígidos",
      "needleType": "90/14 SAN 1 ou ponta cunha LL/LR para couro",
      "stabilizer": "Entretela rasgadeira pesada 80g",
      "threadTension": "Superior: 120 gf / Bobina: 25 gf",
      "density": "Padrão com bom compensador"
    },
    "applications": [
      "Bordados personalizados em tênis casuais, esportivos, chuteiras e botas de couro",
      "Personalização de bolsas femininas estruturadas, carteiras e mochilas escolares",
      "Bordados em cintos de artes marciais, coleiras de cães e selaria equestre",
      "Itens tubulares estreitos com difícil abertura (mangas de jaquetas de motoqueiro)"
    ],
    "troubleshootingTips": [
      "Sempre execute o traçado da área (Trace) em velocidade lenta para ter 100% de certeza que o calcador não raspa na garra",
      "Use agulhas de ponta reforçada para furar as camadas de lona e borracha do tênis",
      "Cole uma fita de feltro adesiva nos mordentes para não marcar couros sensíveis"
    ],
    "relatedTerms": [
      "Acessórios & Bastidores",
      "Mecânica & Manutenção",
      "Quik-Snap e Bastidores Magnéticos de Fixação Rápida",
      "Tipos de Tecidos",
      "Gestão do Ateliê e Produção"
    ],
    "tags": [
      "q-093",
      "clamping",
      "garras de fixacao",
      "tenis",
      "bolsas",
      "calcados",
      "acessorios e bastidores",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "SPECIALTY WORKHOLDING IN AUTOMATED EMBROIDERY: Clamping Fixtures, Footwear Mechanics & Articulated Arms. Chicago, 2021.",
      "PARRISH, Gail. Industrial Clamping Systems: Footwear, Heavy Luggage and Non-Standard Substrate Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Experimente segurar a língua de um tênis com a mão e imagine tentar colocar em um bastidor redondo comum. Agora veja fotos e vídeos de um sistema de clamping: perceba como a garra fina entra dentro do tênis com facilidade e abre um mundo novo de produtos para o seu ateliê!",
    "quickSummary": "O dispositivo com garras de metal que prende tênis, mochilas e bolsas de couro para bordar o que não cabe em bastidor comum.",
    "beginnerExplanation": "Sabe quando um cliente pede para bordar o nome dele em uma chuteira, tênis ou bolsa dura de couro que não cabe de jeito nenhum dentro do bastidor de plástico? O sistema de garras rápidas é um acessório de metal com alavanca que 'morde' a peça com força e firmeza em 2 segundos, permitindo que a máquina borde tênis e bolsas com facilidade!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-094-quimica-de-solubilidade-de-entretelas-hidrossoluveis-de-pva",
    "code": "Q-094",
    "term": "Química de Solubilidade de Entretelas Hidrossolúveis de PVA (Polyvinyl Alcohol Water Dissolution Kinetics)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Insumos & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego khemeia (processo químico molecular) e do latim solubilis (dissolução completa em meio aquoso).",
    "summary": "Mecanismo termodinâmico de dissolução de filmes e não-tecidos de Álcool Polivinílico (PVA) em água morna (25°C a 40°C), técnicas de enxágue para rendas Richelieu e Free Standing Lace (FSL) e controle de goma residual.",
    "definition": "Química de Solubilidade de Entretelas Hidrossolúveis de PVA (Polyvinyl Alcohol Dissolution Kinetics, Hydro-Degradable Film Chemistry & FSL Rinsing Protocol) é o estudo e controle da dissolução macromolecular do polímero sintético biodegradável Álcool Polivinílico [CH₂CH(OH)]ₙ utilizado na fabricação de filmes plásticos transparentes e não-tecidos solúveis em água para bordado computadorizado. Quando imerso em água, as pontes de hidrogênio do PVA são clivadas pelas moléculas de H₂O, rompendo as cadeias poliméricas e dissolvendo a entretela em solução aquosa coloidal límpida. O controle da temperatura da água (ideal entre 25°C e 40°C), tempo de imersão e número de enxágues determina se o bordado ficará totalmente flexível e macio (como toalhas e roupas de bebê) ou com uma ligeira goma estruturante residual (essencial para que pingentes, brincos e rendas FSL fiquem armados e firmes).",
    "technicalDetails": "Grau de hidrólise do PVA para bordado: 88% a 92% (solúvel em água fria/morna em menos de 60 segundos). Temperatura ideal de dissolução: 25°C a 40°C (água morna acelera a dissolução em 4x em relação a água a 10°C). pH neutro: 6,5 a 7,5. Biodegradabilidade: 100% biodegradável em estações de tratamento de esgoto por ação de bactérias Pseudomonas. Espessuras padrão: Filme plástico de 20 a 40 micras (para topo de toalhas) / Não-tecido de 40 a 80 g/m² (para rendas soltas FSL).",
    "construction": [
      "Filme extrudado de polímero de PVA puro com textura em relevo gofrado (Embossed)",
      "Bacia plástica com água morna e corrente para imersão e enxágue",
      "Toalha felpuda limpa para prensagem e absorção do excesso de água",
      "Varal plano ou tela horizontal de secagem ao ar para preservação geométrica das rendas",
      "Secador de cabelo com ar morno para modelagem tridimensional de peças de renda"
    ],
    "howItWorks": [
      "1. A bordadeira finaliza um bordado de renda pura (Free Standing Lace) bordado apenas sobre entretela hidrossolúvel de PVA sem tecido.",
      "2. Retira a peça do bastidor e recorta o excesso externo de plástico com uma tesoura para economizar água.",
      "3. Mergulha a renda em uma bacia com água morna a 35°C por 90 segundos, movimentando suavemente com as mãos.",
      "4. O plástico transparente de PVA se dissolve completamente na água, tornando-se invisível.",
      "5. Para deixar a renda firminha e estruturada, ela faz apenas um enxágue rápido (deixando um restinho de 5% de goma natural do PVA nas linhas).",
      "6. Acomoda a renda sobre uma toalha plana para secar na sombra.",
      "7. Após secar, a renda fica deslumbrante, armada e perfeita para montar um brinco ou marcador de página!"
    ],
    "mainTypes": [
      "Filme Plástico Hidrossolúvel Fino (20 a 30 micras - Para colocar por cima de toalhas e veludos para a linha não afundar)",
      "Não-Tecido Hidrossolúvel Texturizado (40 a 80g - Parece um tecido branco e é a base perfeita para rendas FSL)",
      "Filme Hidrossolúvel Pesado (40 micras - Para monogramas vazados e rendas Richelieu em tecidos nobres)"
    ],
    "characteristics": [
      "Dissolução 100% limpa sem deixar fiapos, resíduos plásticos ou manchas nos fios",
      "Permite criar bordados que viram rendas puras no ar sem nenhum tecido por baixo",
      "Não agride o meio ambiente por ser um polímero atóxico e totalmente biodegradável",
      "Permite controlar a firmeza da renda de acordo com o tempo de lavagem"
    ],
    "limitations": [
      "Nunca manusear entretelas de PVA com as mãos molhadas ou suadas (vai grudar e derreter nos dedos)",
      "Guardar sempre em sacos plásticos fechados com sílica-gel para não absorver a umidade do ar",
      "Não usar água fervente (> 80°C), pois temperaturas extremas podem cristalizar certas resinas e endurecer os fios"
    ],
    "numberingSystem": [
      "Temperatura Ideal da Água: 25°C a 40°C",
      "Tempo Médio de Dissolução: 45 a 90 segundos",
      "Grau de Hidrólise do Polímero: 88% - 92%"
    ],
    "advantages": [
      "✔ Cria rendas de luxo, brincos bordados e peças Richelieu de tirar o fôlego",
      "✔ Faz os pontos ficarem por cima das toalhas felpudas sem afundar na felpa",
      "✔ Sai com facilidade com uma simples borrifada de água morna"
    ],
    "commonErrors": [
      "❌ Tentar dissolver a entretela em água gelada de inverno, demorando horas e deixando o bordado grudento",
      "❌ Lavar a renda FSL com sabão e excesso de água corrente, tirando toda a goma e deixando a renda mole e caída",
      "❌ Pegar no rolo de entretela solúvel com os dedos molhados de suor, estragando várias voltas do rolo"
    ],
    "voceSabia": "O Álcool Polivinílico (PVA) é tão seguro e biocompatível que também é utilizado na fabricação de cápsulas gelatinosas de remédios orais, colírios lubrificantes para os olhos e filmes solúveis de sabão líquido para máquinas de lavar!",
    "curiosidadeTecnica": "A cinética de dissolução do PVA segue a equação de difusão de Fick; o aumento da temperatura da água de 15°C para 35°C duplica a constante de difusão térmica, reduzindo o tempo de quebra das pontes de hidrogênio poliméricas de 4 minutos para apenas 45 segundos.",
    "dicaArtrelados": "O segredo de ouro para **Rendas Perfeitas (FSL) no Ateliê Artrelados**: quando for tirar a entretela solúvel da sua renda, **não enxágue demais!** Mergulhe a renda na água morna por 1 minutinho só até o plástico sumir e tire logo. Essa 'aguinha de goma' que fica na renda vai secar e deixar a sua renda durinha e armada para sempre, como se você tivesse engomado profissionalmente!",
    "comparisonTable": {
      "headers": [
        "Finalidade do Bordado",
        "Temperatura da Água",
        "Tempo de Enxágue",
        "Resultado Final do Toque"
      ],
      "rows": [
        [
          "Rendas e Brincos FSL",
          "Morna (35°C)",
          "Rápido (30 a 60 seg)",
          "Estruturado, durinho e armado"
        ],
        [
          "Toalhas de Banho e Enxoval de Bebê",
          "Morna / Corrente",
          "Abundante (lavagem completa)",
          "Ultra macio, flexível e sem goma"
        ],
        [
          "Richelieu em Linho Fino",
          "Morna (30°C)",
          "Médio (spray ou esponja)",
          "Macio com contornos definidos"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "75/11 SES",
      "stabilizer": "PVA 40 micras ou Não-Tecido Solúvel 80g",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Rede estruturada em rendas FSL"
    },
    "applications": [
      "Produção de rendas de agulha autoportantes (Free Standing Lace - FSL)",
      "Bordados vazados Richelieu em toalhas de mesa e vestidos finos",
      "Camada superior de cobertura em toalhas de banho felpudas, veludos e moletons",
      "Brincos, pingentes, marcadores de página e coroas natalinas em renda pura"
    ],
    "troubleshootingTips": [
      "Para tirar o plástico de cima de uma toalha sem molhar a toalha inteira, borrife uma névoa de água e encoste um paninho seco",
      "Se a renda ficou mole demais depois de seca, dissolva um pedacinho de plástico solúvel em um copo de água morna e pincele na renda",
      "Deixe a renda secando em cima de uma folha plástica lisa para não grudar em fibras de toalha"
    ],
    "relatedTerms": [
      "Insumos & Fios",
      "Técnicas de Bordado",
      "Quarentena de Insumos e Armazenamento Climatizado",
      "Poliéster Trilobal vs. Spun Polyester em Fios de Bordar",
      "Tipos de Tecidos"
    ],
    "tags": [
      "q-094",
      "hidrossoluvel",
      "pva",
      "fsl",
      "rendas",
      "richelieu",
      "insumos e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WATER-SOLUBLE POLYMERS IN TEXTILE MANUFACTURING: PVA Dissolution Kinetics, Environmental Biodegradation & FSL Protocols. Kyoto, 2021.",
      "PARRISH, Gail. Polyvinyl Alcohol Stabilization: Chemistry, Dissolution Control and Free-Standing Lace Mastery. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um pedaço de entretela plástica solúvel em um copo com água gelada e outro pedaço idêntico em um copo com água morna. Mexa com uma colher e cronometre: veja como no copo com água morna ela desaparece em segundos!",
    "quickSummary": "Como a água morna derrete a entretela transparente e como deixar as rendas durinhas e armadas.",
    "beginnerExplanation": "A entretela hidrossolúvel é aquela transparente de plástico mágico que a gente usa para fazer rendas e para o bordado não afundar nas toalhas. Quando você mergulha na água morna, ela derrete completamente sem deixar nenhum restinho! Se você lavar rapidinho, a renda seca durinha e perfeita como um brinco!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-095-quilting-com-efeito-trapunto-computadorizado",
    "code": "Q-095",
    "term": "Quilting com Efeito Trapunto Computadorizado (Automated Trapunto Quilting & High-Loft Relief)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do italiano trapunto (bordado acolchoado recheado em alto relevo) e do grego computare (programação matemática vetorial).",
    "summary": "Técnica nobre em etapas que utiliza dupla camada de manta acrílica (high-loft), pespontos de fixação, recorte seletivo no bastidor e micro-meandros densos de fundo (micro-stippling) para criar relevos esculturais dramáticos em colchas e quadros.",
    "definition": "Quilting com Efeito Trapunto Computadorizado (Computerized Trapunto Embroidery, Selective Loft Sculpting & Micro-Stippling Background Relief) é a versão automatizada no bastidor da técnica clássica italiana do século XIV de acolchoamento com enchimento seletivo. O processo ocorre em 3 fases sequenciais: 1. A máquina costura a linha de contorno do motivo principal (flores, arabescos ou brasões) sobre uma camada de manta acrílica grossa ou lã; 2. A bordadeira retira o bastidor e recorta com precisão todo o excesso de manta ao redor do motivo, mantendo o enchimento apenas dentro do desenho; 3. O tecido de topo e a manta de fundo são adicionados, e a máquina executa um micro-quilting ultradenso (*Micro-Stippling*) no fundo. A compressão do fundo faz com que o motivo recortado salte para a frente com um relevo tridimensional escultural de até 8 a 12 mm de altura.",
    "technicalDetails": "Gramatura da manta de enchimento do motivo: Manta acrílica High-Loft de 150 a 200 g/m² ou manta de lã natural. Gramatura da manta de base do sanduíche: Manta fina de algodão de 80 a 100 g/m². Densidade do micro-stippling de fundo: Espaçamento de 1,5 mm a 2,0 mm com ponto reto de 1,8 mm. Linha superior para o fundo: Monofilamento de poliamida transparente 100wt ou poliéster ultrafino 60wt na cor do tecido de fundo.",
    "construction": [
      "Tecido de topo nobre (linho puro, seda pura ou percal de algodão 400 fios)",
      "Camada primária de manta acrílica volumosa (High-Loft) para a área de relevo",
      "Camada secundária de manta plana de algodão para o sanduíche estrutural",
      "Tesoura curva de precisão para recorte rente da manta de trapunto",
      "Linha de pesponto solúvel em água (Wash-Away Thread) para as costuras temporárias da Fase 1"
    ],
    "howItWorks": [
      "1. A máquina borda o contorno de um medalhão imperial sobre uma camada de manta acrílica bem grossa e entretela solúvel usando linha solúvel em água.",
      "2. A bordadeira tira o bastidor da máquina e usa a tesourinha para cortar fora toda a manta que está em volta do medalhão.",
      "3. Coloca o tecido de seda por cima, adiciona uma manta fininha de algodão por baixo e monta o sanduíche completo.",
      "4. A máquina executa o contorno definitivo do medalhão com ponto triplo nobre.",
      "5. Em seguida, a máquina preenche todo o fundo ao redor do medalhão com meandros microscópicos densos (*Micro-Stippling*).",
      "6. As costurinhas densas esmagam e rebaixam o tecido de fundo por completo.",
      "7. Como a parte de dentro do medalhão tem a manta grossa extra e o fundo foi esmagado, o medalhão 'salta' para a frente em um relevo tridimensional exuberante e magnífico!"
    ],
    "mainTypes": [
      "Trapunto Clássico Monocromático (Bordado tom-sobre-tom em linho ou seda branca)",
      "Trapunto com Linha Solúvel (Costura temporária que desaparece na primeira lavagem)",
      "Trapunto Moderno Colorido (Combinação de relevo escultural com preenchimentos coloridos no centro)"
    ],
    "characteristics": [
      "O mais alto padrão de sofisticação e luxo artesanal em acolchoamento têxtil do mundo",
      "Relevo tridimensional profundo sem necessidade de enchimento manual com agulha de tapeçaria",
      "Contraste visual dramático entre o fundo rebaixado e a figura inflada",
      "Peças com valor de mercado de milhares de reais em galerias de arte e alta decoração"
    ],
    "limitations": [
      "Exige paciência e muita precisão na etapa de corte manual da manta ao redor do motivo",
      "Não cortar acidentalmente o tecido de base durante a remoção da manta excedente",
      "Ajustar a tensão da linha para não enrugar o tecido durante a execução do micro-stippling pesado"
    ],
    "numberingSystem": [
      "Altura do Relevo Escultural: 8 mm a 12 mm",
      "Espaçamento do Fundo (Stippling): 1,5 mm a 2,0 mm",
      "Gramatura da Manta de Trapunto: 150 a 200 g/m²"
    ],
    "advantages": [
      "✔ Cria peças de arte têxtil exclusivas com valor de venda extraordinariamente alto",
      "✔ Transforma colchas, almofadas e quadros em verdadeiras esculturas de tecido",
      "✔ Executa em 1 hora uma técnica nobre que antigamente levava semanas de trabalho manual"
    ],
    "commonErrors": [
      "❌ Cortar a manta de trapunto com tesoura cega, deixando rebarbas que deformam o contorno",
      "❌ Fazer o micro-stippling de fundo frouxo demais, perdendo o contraste dramático de relevo",
      "❌ Usar tecido sintético elástico que repuxa todo com a densidade do fundo"
    ],
    "voceSabia": "A técnica do Trapunto nasceu na Sicília no século XIV (como o famoso *Tristão e Isolda Quilt* exposto no Victoria and Albert Museum de Londres) e era considerada um símbolo de riqueza extrema da nobreza européia medieval!",
    "curiosidadeTecnica": "O contraste de relevo no Trapunto computadorizado é gerado pela diferença de pressão mecânica por área: o micro-stippling aplica mais de 2.000 pontos por decímetro quadrado esmagando a manta de fundo, enquanto o centro retém 100% do seu volume original.",
    "dicaArtrelados": "Para fazer um **Trapunto de Palácio Real no Ateliê Artrelados**: use uma linha bem fininha ou transparente para fazer as costurinhas miúdas de fundo (stippling). Quanto mais miudinhas e juntinhas forem as costuras do fundo, mais o seu desenho principal vai pular para fora da peça parecendo uma escultura almofadada de cinema!",
    "comparisonTable": {
      "headers": [
        "Técnica de Acolchoamento",
        "Altura do Relevo",
        "Complexidade de Execução",
        "Nível de Luxo"
      ],
      "rows": [
        [
          "Quilting Trapunto Computadorizado",
          "8 mm a 12 mm (Alto Relevo)",
          "Avançada (com recorte no bastidor)",
          "Luxo Supremo / Peça de Arte"
        ],
        [
          "Quilted Appliqué",
          "3 mm a 5 mm",
          "Intermediária",
          "Alto Luxo"
        ],
        [
          "Quilting Plano Convencional",
          "1 mm a 2 mm",
          "Básica a Intermediária",
          "Comercial Elegante"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "80/12 Microtex ou Quilting afiada",
      "stabilizer": "Entretela solúvel + Manta de algodão",
      "threadTension": "Superior ligeiramente firme",
      "density": "Stippling de 1.8 mm / Contornos precisos"
    },
    "applications": [
      "Colchas de casamento e enxovais de noiva de altíssimo padrão",
      "Painéis de parede para galerias de arte têxtil e tapeçarias decorativas",
      "Almofadas de veludo e linho para decoração de interiores de luxo",
      "Capas de livros memoriais, bíblias e caixas revestidas de tecido nobre"
    ],
    "troubleshootingTips": [
      "Use uma tesoura com ponta curva para cima para não correr o risco de furar a entretela de base",
      "Se usar linha solúvel na primeira etapa, certifique-se de não molhar a peça antes de terminar o bordado",
      "Passe a peça do avesso sobre uma toalha macia para não achatar o relevo tridimensional"
    ],
    "relatedTerms": [
      "Técnicas de Bordado",
      "Quilted Appliqué (Aplique Acolchoado com Matelassê Embutido no Bastidor)",
      "Quilting com Guia Laser e Rastreador de Padrões",
      "Tipos de Tecidos",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-095",
      "trapunto",
      "quilting trapunto",
      "alto relevo",
      "escultura textil",
      "tecnicas de bordado",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TRAPUNTO EMBROIDERY MASTERY: High-Loft Sculpting, Micro-Stippling Dynamics & Historical Techniques. Florence, 2021.",
      "PARRISH, Gail. Automated Trapunto & Dimensional Relief Architecture in Modern Machine Quilting. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde um desenho de flor em Trapunto: borde na manta grossa, corte a volta, cubra com o tecido e faça o stippling ao redor. Passe a mão por cima dos relevos e sinta a textura escultural incrível que você acabou de criar na sua máquina!",
    "quickSummary": "A técnica nobre italiana que usa manta dupla recortada e fundo esmagado para o desenho saltar em alto relevo.",
    "beginnerExplanation": "O Trapunto é a técnica de bordado mais chique e luxuosa que existe: a gente coloca uma manta bem gordinha só dentro do desenho e a máquina costura o fundo todo bem apertadinho. O fundo fica bem baixinho e o desenho pula para a frente parecendo uma almofadinha esculpida no tecido!",
    "updatedAt": "2026-08-29"
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_Q11: Verbete[] = [
  {
    "id": "q-081-q-factor-e-amortecimento-de-vibracao-estrutural-da-bancada",
    "code": "Q-081",
    "term": "Q-Factor e Amortecimento de Vibração Estrutural da Bancada (Chassis Resonance & Vibration Damping)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês Quality Factor (fator Q de ressonância em sistemas oscilatórios) e do latim structura (armação sólida de apoio).",
    "summary": "Estabilidade mecânica e física de amortecimento da bancada de suporte da máquina para dissipação de harmônicas de vibração a 1.000 PPM, evitando perda de passos no pantógrafo e desvios de alinhamento.",
    "definition": "Q-Factor e Amortecimento de Vibração Estrutural da Bancada (Chassis Structural Resonance, High-Speed Vibration Damping & Pantograph Inertia Isolation) é o estudo e controle dos fenômenos vibracionais e de ressonância mecânica gerados pelas forças inerciais recíprocas da barra de agulha, estica-fio e eixos X/Y do pantógrafo em alta velocidade (750 a 1.200 PPM). Se o fator de qualidade (Q-Factor) de amortecimento da bancada for inadequado e a frequência de disparo da máquina coincidir com a frequência natural da estrutura, ocorre ressonância: a máquina vibra intensamente, gerando perda momentânea de micropassos nos servomotores, linhas de contorno (*Outlines*) deslocadas de 0,5 mm a 1,0 mm do preenchimento, ruído acústico elevado e fadiga prematura de rolamentos.",
    "technicalDetails": "Frequência fundamental de excitação a 900 PPM: 15 Hz (com harmônicas de 30 Hz e 60 Hz). Aceleração máxima do pantógrafo nos saltos: até 3G. Solução mecânica: Bancadas de aço tubular com peso estrutural > 40 kg, pés de borracha vulcanizada antivibração (coxins de elastômero Shore A 60-70) e nivelamento milimétrico por nível de bolha nos 4 apoios com desvio angular < 0,1°.",
    "construction": [
      "Chassi de aço tubular soldado de alta massa inercial ou perfil de alumínio estrutural pesado",
      "Pés niveladores rosqueados com sapatas de borracha vulcanizada antivibratória",
      "Plataforma de tampo em MDF de alta densidade (HDF) ou chapa de aço reforçada",
      "Calços de desacoplamento elastomérico entre o corpo da máquina e o tampo",
      "Travessas diagonais em 'X' para contenção de forças de cisalhamento lateral"
    ],
    "howItWorks": [
      "1. Uma bordadeira multiagulhas industrial acelera para 1.000 PPM durante um salto rápido de 12 mm no eixo X.",
      "2. A desaceleração brusca de 3G do pantógrafo transmite uma onda de choque mecânico para a carcaça da máquina.",
      "3. Em uma mesa bamba comum, a mesa balança para os lados, fazendo o bastidor vibrar enquanto a agulha desce.",
      "4. O ponto cai 0,8 mm fora do lugar: o contorno preto fica desalinhado e deixa uma falha branca feia.",
      "5. Ao instalar a máquina sobre uma bancada profissional pesada com sapatas de absorção elastomérica e travas em X niveladas, a vibração mecânica é dissipada em menos de 5 milissegundos.",
      "6. O chassi permanece imóvel como uma rocha.",
      "7. Os contornos fecham com precisão cirúrgica de 0,05 mm e o ruído do ateliê é reduzido pela metade."
    ],
    "mainTypes": [
      "Bancada Industrial de Aço Tubular Pesado com Pés Coxim Antivibração (Padrão ouro para máquinas multiagulhas)",
      "Mesa de Madeira Maciça Reforçada com Travamento em X (Para máquinas domésticas e semiprofissionais de ateliê)",
      "Bases Desacopladoras com Placas de Borracha de Alta Densidade (Para colocação sobre tampos de marcenaria existentes)"
    ],
    "characteristics": [
      "Contornos de matrizes perfeitamente alinhados com o preenchimento, sem frestas",
      "Redução drástica do barulho e zumbido de vibração no ambiente de trabalho",
      "Proteção das placas eletrônicas e encoders contra solavancos contínuos",
      "Aumento da vida útil dos rolamentos e correias dentadas da máquina"
    ],
    "limitations": [
      "Nunca instalar máquinas de bordar sobre mesinhas leves de plástico, mesas com rodízios sem trava ou móveis soltos",
      "Sempre conferir o nível de bolha após mudar a máquina de lugar no ateliê",
      "Não encostar a bancada diretamente na parede (manter folga de 10 cm para não transmitir vibração estrutural)"
    ],
    "numberingSystem": [
      "Nível de Amortecimento: Shore A 60 - 70",
      "Precisão de Nivelamento: < 0,1°",
      "Capacidade de Dissipação Harmônica: > 90% a 15 Hz"
    ],
    "advantages": [
      "✔ Garante que todos os contornos dos seus bordados fechem perfeitamente sem falhas",
      "✔ Deixa seu ateliê muito mais silencioso e agradável para trabalhar o dia todo",
      "✔ Evita quebras de peças internas caras da máquina causadas por trepidação"
    ],
    "commonErrors": [
      "❌ Colocar a máquina de bordar em cima de uma escrivaninha bamba que treme toda vez que a máquina borda",
      "❌ Deixar um dos pés da mesa suspenso no ar, fazendo a bancada mancar e vibrar em alta velocidade",
      "❌ Culpar a matriz pelo contorno torto quando na verdade é a mesa que está balançando"
    ],
    "voceSabia": "A tecnologia de amortecimento com elastômeros e coxins usada nas bancadas de máquinas de bordar industriais é exatamente a mesma engenharia empregada nos suportes de motores da indústria aeroespacial e de trens de alta velocidade!",
    "curiosidadeTecnica": "Quando o pantógrafo muda de direção a 1.000 PPM, a força dinâmica aplicada no chassi da máquina pode atingir até 4 vezes o peso da própria máquina se a bancada for flexível, enquanto em uma base rígida amortecida essa força é dissipada diretamente para o piso.",
    "dicaArtrelados": "Faça o **Teste do Copo d'Água do Ateliê Artrelados**: coloque um copo com água em cima da mesa ao lado da sua máquina enquanto ela borda a 800 PPM. Se a água formar ondas fortes ou o copo deslizar, sua bancada está vibrando demais! Reforce os pés com borrachas firmes ou encoste um reforço de madeira: seus contornos vão ficar infinitamente mais perfeitos!",
    "comparisonTable": {
      "headers": [
        "Tipo de Apoio",
        "Vibração Harmônica",
        "Alinhamento de Contorno",
        "Nível de Ruído no Ateliê"
      ],
      "rows": [
        [
          "Bancada Pesada com Coxim de Borracha",
          "Zero (dissipação total)",
          "Cirúrgico e perfeito (< 0,05 mm)",
          "Silencioso e abafado"
        ],
        [
          "Mesa Convencional Firme",
          "Moderada",
          "Bom (desvios raros < 0,2 mm)",
          "Médio"
        ],
        [
          "Mesa Leve / Bamba / com Rodinhas",
          "Altíssima (ressonância)",
          "Crítico (contornos escapam até 1,0 mm)",
          "Alto e com ruídos de impacto"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Velocidade estável até capacidade nominal",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Montagem da infraestrutura física de novos ateliês e fábricas de bordado",
      "Solução definitiva para máquinas industriais multiagulhas que perdem alinhamento de contorno",
      "Adequação de conforto acústico para ateliês residenciais e apartamentos",
      "Isolamento mecânico em pisos de madeira ou mezaninos industriais"
    ],
    "troubleshootingTips": [
      "Passe um nível de pedreiro em cima do tampo nos eixos horizontal e vertical e aperte os parafusos dos pés até zerar a bolha",
      "Coloque sapatas de borracha vulcanizada (tipo tapete de academia pesado) embaixo dos pés da mesa",
      "Aperte todos os parafusos da estrutura da bancada a cada 6 meses"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Gestão do Ateliê e Produção",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Placa de Agulha (Needle Plate) e Chapa de Ponto com Orifício Redondo",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-081",
      "q-factor",
      "vibracao",
      "bancada",
      "amortecimento",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "STRUCTURAL DYNAMICS IN TEXTILE MACHINERY: Vibration Damping, Q-Factor Analysis and Chassis Resonance. Stuttgart, 2021.",
      "PARRISH, Gail. Industrial Stability: Vibration Isolation, Dynamic Pantograph Forces and Precision Alignment. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque uma moeda em pé sobre a bancada ao lado da máquina. Ligue o bordado a 750 PPM: se a moeda permanecer em pé sem cair, sua bancada tem amortecimento estrutural de excelência mundial!",
    "quickSummary": "O estudo de manter a mesa da máquina 100% firme e sem trepidação para os contornos não ficarem tortos.",
    "beginnerExplanation": "Se a mesa onde a sua máquina está apoiada for fraca ou ficar balançando quando ela borda rápido, a agulha vai bater fora do lugar e o contorno preto do desenho vai ficar desencontrado! Uma mesa bem pesada e com pezinhos de borracha deixa a máquina firme como uma rocha e seus bordados saem perfeitos!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-082-quadricula-de-densidade-e-mapa-de-calor-de-pontos-no-software",
    "code": "Q-082",
    "term": "Quadrícula de Densidade e Mapa de Calor de Pontos no Software (Density Grid & Stitch Heatmap Analysis)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim quadricula (pequeno quadrado de medição gráfica) e do inglês stitch heatmap (mapa térmico visual de concentração).",
    "summary": "Recurso avançado de softwares de digitalização (Wilcom, Embird, Hatch) que plota uma malha cromática indicando zonas perigosas de acúmulo excessivo de pontos e risco de quebra de agulha antes de ir para a máquina.",
    "definition": "Quadrícula de Densidade e Mapa de Calor de Pontos no Software (Stitch Density Grid, Thermal Overlay Mapping & Over-Stitching Visual Diagnostic) é a ferramenta de auditoria visual integrada aos ambientes profissionais de CAD/CAM de bordado computadorizado. O algoritmo divide a matriz em microcélulas ortogonais (ex: 1 mm x 1 mm) e calcula a quantidade exata de penetrações de agulha que ocorrerão em cada célula, colorindo a tela em tempo real como um mapa térmico: verde/azul para densidades seguras (1 a 3 pontos/mm²), amarelo para densidades médias e vermelho escarlate flamejante para zonas críticas hiperdensas (> 6 a 8 pontos/mm²), alertando o programador sobre pontos em nó, quebra iminente de agulha, picote de tecido e dureza excessiva no bordado.",
    "technicalDetails": "Resolução típica da quadrícula: células de 0,5 mm a 1,0 mm. Limiar de segurança: Verde = 0.38 - 0.45 mm de espaçamento; Amarelo = 0.30 - 0.35 mm; Vermelho de Alerta = < 0.25 mm ou > 7 penetrações no mesmo raio de 1 mm. Ferramenta de autocorreção: Filtro de Eliminação de Pontos Curtos (*Short Stitch Filter*) e Limpeza de Sobreposições (*Overlap Removal*).",
    "construction": [
      "Algoritmo matemático de contagem espacial de coordenadas de penetração X/Y",
      "Gradiente de cores espectral (Azul/Verde -> Amarelo -> Laranja -> Vermelho -> Magenta)",
      "Controle deslizante de sensibilidade de limiar de densidade no software",
      "Filtro inteligente de exclusão de pontos de amarração e arremate da contagem de falso-positivo",
      "Painel numérico com contagem de pontos críticos e porcentagem de risco estrutural"
    ],
    "howItWorks": [
      "1. O programador finaliza a digitalização de um brasão complexo com 45.000 pontos contendo letras pequenas sobrepostas a um fundo tatami denso.",
      "2. Antes de exportar para a máquina, clica no botão 'Visualizar Mapa de Densidade / Heatmap'.",
      "3. O software converte a tela em uma visualização de calor colorida.",
      "4. Nas junções das letras com o escudo, surge uma mancha vermelha brilhante com 11 pontos por milímetro quadrado.",
      "5. O programador sabe que se bordar assim, a agulha vai quebrar ou vai furar o tecido.",
      "6. Ativa a ferramenta 'Remover Sobreposições Ocultas' e 'Filtro de Pontos Curtos': o software recorta o tatami embaixo das letras automaticamente.",
      "7. A mancha vermelha desaparece, virando verde saudável; a matriz fica 20% mais leve e roda na máquina com 100% de suavidade."
    ],
    "mainTypes": [
      "Mapa de Calor Contínuo em Gradiente Espectral (Visualização estilo termográfica 3D)",
      "Quadrícula com Marcador de Células Críticas (Quadradinhos pontilhados destacando nós pontuais)",
      "Gráfico de Perfil de Espessura Estimada (Calcula a altura em milímetros da massa de linha acumulada)"
    ],
    "characteristics": [
      "Detecção instantânea de erros de programação invisíveis no modo de visualização 3D comum",
      "Prevenção de quebras de agulha, furos no tecido e matrizes duras tipo 'tábua'",
      "Redução de 15% a 25% na contagem desnecessária de pontos sem perder cobertura",
      "Aceleração da velocidade de produção e economia de linha no ateliê"
    ],
    "limitations": [
      "Áreas de arremate e pontos de amarração naturalmente apresentarão pontos amarelos/laranja (não devem ser removidos)",
      "Em bordados 3D com EVA, densidades mais altas são intencionais e normais",
      "A ferramenta analisa a concentração geométrica, devendo o programador avaliar o tipo de tecido real"
    ],
    "numberingSystem": [
      "Zona Segura: < 3 pontos / mm² (Verde)",
      "Zona de Atenção: 4 a 6 pontos / mm² (Amarelo)",
      "Zona Crítica: > 7 pontos / mm² (Vermelho Escarlate)"
    ],
    "advantages": [
      "✔ Nunca mais envie para a máquina uma matriz que quebra agulhas ou corta o pano",
      "✔ Deixa seus bordados muito mais macios, leves e gostosos de usar no corpo",
      "✔ Economiza milhares de pontos e faz a máquina bordar muito mais rápido"
    ],
    "commonErrors": [
      "❌ Borda matrizes baixadas da internet sem passar pelo mapa de densidade para checar sobreposições",
      "❌ Deixar preenchimento tatami inteiro por baixo de letras cheias grossas, criando uma camada de chumbo",
      "❌ Ignorar os alertas vermelhos do software e quebrar a agulha logo nos primeiros 2 minutos de bordado"
    ],
    "voceSabia": "A tecnologia de mapas de calor (*Heatmaps*) usada nos softwares modernos de bordado foi inspirada nos sistemas de imagem infravermelha da medicina diagnóstica e da meteorologia de satélites nos anos 2000!",
    "curiosidadeTecnica": "Quando uma matriz acumula mais de 8 penetrações de agulha em uma área circular de 1 mm de diâmetro, o tecido perde mais de 80% de sua integridade estrutural, comportando-se exatamente como o picotado destacável de um talão de cheques.",
    "dicaArtrelados": "Antes de passar qualquer matriz para o pen drive, faça uma **Auditoria de Mapa de Calor**: abra a visualização de densidade no seu software de edição! Se você enxergar manchas vermelhas fortes, aplique o comando de *Remover Sobreposições* ou abra um pouquinho o espaçamento dos pontos. Sua máquina vai bordar macio, sem estalos e sem perigo de furar a peça do cliente!",
    "comparisonTable": {
      "headers": [
        "Zona do Mapa",
        "Concentração de Pontos",
        "Sensação no Tecido",
        "Risco Operacional"
      ],
      "rows": [
        [
          "Verde / Azul",
          "1 a 3 pontos/mm²",
          "Macio, flexível e leve",
          "Zero (perfeita fluidez)"
        ],
        [
          "Amarelo / Laranja",
          "4 a 6 pontos/mm²",
          "Estruturado e firme",
          "Baixo a moderado"
        ],
        [
          "Vermelho Escarlate",
          "> 7 pontos/mm²",
          "Duro como tábua / Armadura",
          "Crítico (quebra agulha e fura tecido)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Espaçamento médio entre 0.38 e 0.42 mm"
    },
    "applications": [
      "Auditoria de qualidade em matrizes complexas antes de iniciar produções em série",
      "Otimização de matrizes compradas na internet que vieram duras ou pesadas",
      "Adequação de logotipos densos para bordar em tecidos finos e malhas delicadas",
      "Redução de custos operacionais e tempo de máquina em fábricas de confecção"
    ],
    "troubleshootingTips": [
      "Se o mapa mostrar vermelho nas letras, use a ferramenta 'Compensação de Sobreposição' para vazar o fundo",
      "Ative o filtro automático de 'Remover Pontos Menores que 0,3 mm'",
      "Ajuste a densidade do tatami de 0,35 mm para 0,42 mm se for bordar em malha piquet ou algodão leve"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Cheio (Satin Stitch)",
      "Ponto Tatami (Fill Stitch)",
      "Compensação de Encolhimento (Pull Compensation)",
      "Mecânica & Manutenção"
    ],
    "tags": [
      "q-082",
      "mapa de calor",
      "densidade",
      "heatmap",
      "software",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM EMBROIDERY STUDIO: Advanced Density Mapping, Heatmap Diagnostics and Overlap Elimination. Sydney, 2022.",
      "PARRISH, Gail. CAD/CAM Diagnostics in Machine Embroidery: Spatial Stitch Clustering and Heatmap Analysis. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra um arquivo de bordado qualquer no seu programa de computador. Ative a visão de densidade ou mapa de calor. Procure por pontos vermelhos e veja como ao selecionar o objeto de baixo e vazar a parte coberta, a cor vermelha vira verde na hora!",
    "quickSummary": "O recurso no programa de computador que mostra com cores quentes onde o bordado está grosso demais e perigoso.",
    "beginnerExplanation": "O mapa de calor no computador funciona como um raio-X da sua matriz: ele pinta de verde as partes boas e de vermelho brilhante os lugares onde os pontos estão muito amontoados. Assim, você conserta antes de colocar na máquina, evitando que a agulha quebre ou fure a roupa do seu cliente!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-083-quociente-de-compressao-de-espuma-eva-em-bordado-3d",
    "code": "Q-083",
    "term": "Quociente de Compressão de Espuma EVA em Bordado 3D (3D Foam Compression Ratio & Density Calculation)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quotiens (relação numérica proporcional) e do inglês 3D puff embroidery foam (espuma microcelular de etileno vinil acetato).",
    "summary": "Cálculo matemático e parametrização de densidade ultradensa (0,18 a 0,22 mm) e quociente de deformação elástica do EVA para efeito de alto relevo escultural perfeito em bonés e jaquetas.",
    "definition": "Quociente de Compressão de Espuma EVA em Bordado 3D (3D Puff Embroidery Foam Compression Ratio, Volumetric Elasticity & High-Density Perforation Dynamics) é o cálculo técnico que relaciona a espessura original da placa de EVA (2 mm, 3 mm ou 4 mm), sua dureza Shore (geralmente Shore A 20 a 35) e o fator de adensamento dos pontos cheios (*Satin*) necessários para cortar perfeitamente as laterais da espuma por cisalhamento mecânico da agulha enquanto mantém o núcleo inflado em relevo tridimensional escultural. Para cobrir e guilhotinar o EVA sem deixar fiapos laterais e sem estourar as linhas, a densidade do ponto cheio deve ser ajustada para um quociente de 180% a 220% da densidade convencional (espaçamento reduzido para 0,18 mm a 0,22 mm), combinado com tampões de fechamento nas pontas (*Caps*) e arremates perfurantes prévios.",
    "technicalDetails": "Espessuras padrão de EVA: 2,0 mm, 2,5 mm, 3,0 mm e 4,0 mm. Dureza ideal: 25 a 30 Shore A (espuma de célula fechada termo-destacável). Densidade recomendada: 0,18 mm a 0,22 mm (contra 0,40 mm padrão). Comprimento mínimo de ponto cheio: 3,0 mm / Comprimento máximo: 9,0 mm (comprimentos maiores perdem a força de compressão e deixam o relevo frouxo). Tipo de linha recomendado: Poliéster 40wt de alta tenacidade lubrificada.",
    "construction": [
      "Placa de espuma EVA microcelular especial para bordado 3D na cor correspondente à linha",
      "Matriz com programação vetorial dedicada com tampas de extremidade (Caps) e linha de corte prévia",
      "Agulha de ponta redonda reforçada calibre 80/12 ou 90/14 SAN 1 com acabamento de titânio",
      "Soprador térmico de ar quente (Heat Gun) para retração dos microresíduos finais de espuma",
      "Pinça de precisão para remoção de resíduos nos cantos e vértices agudos"
    ],
    "howItWorks": [
      "1. A máquina borda a linha de posicionamento (*Placement*) indicando onde o EVA será colocado.",
      "2. A bordadeira apoia uma placa de EVA 3 mm da mesma cor da linha sobre a área e prende com fita crepe nas bordas.",
      "3. A máquina executa pontos de corte perfurantes nas pontas das letras para fechar os topos (*End Caps*).",
      "4. Em seguida, inicia o ponto cheio com espaçamento hiperdenso de 0,20 mm.",
      "5. A cada penetração dupla da agulha nas laterais, a lâmina da agulha e a tensão da linha fatiam o EVA como uma tesoura microscópica.",
      "6. A parte central do EVA permanece inflada em alto relevo com 3 mm de altura e acabamento acetinado exuberante.",
      "7. Ao final, a bordadeira puxa o excesso de EVA: ele se destaca limpo e perfeitamente contornado.",
      "8. Um rápido jato de soprador térmico a 120°C faz quaisquer microfiapos invisíveis retraírem instantaneamente para dentro do bordado."
    ],
    "mainTypes": [
      "Bordado 3D Tradicional Monocromático (Letras e brasões em bonés estruturados com EVA de 2 a 3 mm)",
      "Bordado 3D Híbrido (Combinação de base plana em tatami com letras em alto relevo 3D por cima)",
      "Bordado 3D com EVA Bicolor (Uso de espuma de cor contrastante com pontos abertos intencionais para efeito óptico)"
    ],
    "characteristics": [
      "Relevo tridimensional imponente e acabamento de altíssimo luxo profissional",
      "Letras com laterais perfeitamente cobertas e sem pontas de espuma aparecendo",
      "Excelente durabilidade e resistência à lavagem mantendo a forma tridimensional",
      "Visual idêntico aos bonés das maiores ligas esportivas mundiais (MLB, NBA, NFL)"
    ],
    "limitations": [
      "Nunca tentar fazer bordado 3D com matriz comum de ponto plano (vai amassar o EVA e deixar as pontas abertas)",
      "Não usar densidades menores que 0,16 mm (pode cortar o tecido de baixo como uma navalha)",
      "Sempre usar EVA na cor exata da linha de bordar (ex: linha preta com EVA preto, linha branca com EVA branco)"
    ],
    "numberingSystem": [
      "Espaçamento de Ponto: 0,18 mm a 0,22 mm",
      "Dureza da Espuma: 25 a 30 Shore A",
      "Quociente de Densidade: 200% da densidade padrão"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor percebido às suas peças, permitindo cobrar 3x a 5x mais por bordado",
      "✔ Permite produzir bonés e jaquetas com acabamento digno de marcas internacionais famosas",
      "✔ Acabamento limpo que se solta sozinho sem exigir trabalho demorado de corte manual"
    ],
    "commonErrors": [
      "❌ Usar EVA branco por baixo de linha preta ou vermelha (qualquer milímetro que aparecer fica horrível)",
      "❌ Borda sem fechar as pontas das letras com 'Caps', deixando o miolo da espuma de fora aparecendo",
      "❌ Usar ferro de passar comum para tentar tirar os fiapos em vez de soprador de ar quente, amassando todo o relevo"
    ],
    "voceSabia": "A técnica de bordado 3D em alto relevo com espuma EVA foi criada no início dos anos 1990 no Japão e se tornou uma febre global ao ser adotada nos bonés oficiais dos New York Yankees pela New Era!",
    "curiosidadeTecnica": "Durante a formação do ponto cheio sobre o EVA a 0,20 mm de densidade, a pressão exercida pelo fio tensionado comprime o EVA sob o ponto a menos de 10% de sua espessura original nas bordas, criando o efeito de bisel e corte mecânico instantâneo.",
    "dicaArtrelados": "O segredo de ouro do **Bordado 3D no Ateliê Artrelados**: **1.** Use sempre o EVA da mesma cor da linha. **2.** No software, aumente a densidade do ponto cheio para 0,20 mm e ative as 'tampinhas' (Caps) nas pontas das letras. **3.** Quando tirar o excesso de EVA com a mão, passe um **soprador de ar quente (ou secador de cabelo bem quente no máximo)** a uns 10 cm do bordado por 5 segundinhos: o calor faz os fiapinhos de EVA encolherem e sumirem para dentro do bordado como mágica!",
    "comparisonTable": {
      "headers": [
        "Parâmetro Técnico",
        "Bordado 3D com EVA",
        "Bordado Plano Comum"
      ],
      "rows": [
        [
          "Espaçamento de Ponto Cheio",
          "0,18 mm a 0,22 mm (super denso)",
          "0,38 mm a 0,45 mm (padrão)"
        ],
        [
          "Fechamento de Pontas (Caps)",
          "Obrigatório em 100% das extremidades",
          "Opcional / Desnecessário"
        ],
        [
          "Agulha Recomendada",
          "80/12 ou 90/14 ponta bola firme",
          "75/11 padrão"
        ],
        [
          "Acabamento Pós-Bordado",
          "Destaque manual + Soprador térmico",
          "Limpeza simples de fios de arremate"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 750 PPM",
      "needleType": "80/12 ou 90/14 SAN 1",
      "stabilizer": "Entretela rasgadeira grossa ou resinada firme",
      "threadTension": "Ligeiramente mais solta no topo (100 gf)",
      "density": "0.20 mm constante"
    },
    "applications": [
      "Bonés estruturados tipo 'Snapback' e 'Trucker' com monogramas de alto relevo",
      "Jaquetas esportivas, moletons universitários e vestuário de streetwear de luxo",
      "Brasões institucionais, emblemas táticos e logomarcas automotivas",
      "Bolsas de viagem e mochilas estruturadas de alta resistência"
    ],
    "troubleshootingTips": [
      "Se ficarem fiapos de EVA aparecendo nas laterais, diminua o espaçamento para 0,18 mm no software",
      "Se a linha de cima estiver quebrando, afrouxe ligeiramente a tensão superior e use agulha calibre 90/14",
      "Coloque uma folha plástica de filme solúvel bem fino por cima do EVA se a linha estiver afundando demais"
    ],
    "relatedTerms": [
      "Técnicas de Bordado",
      "Ponto Cheio (Satin Stitch)",
      "Digitalização & Software",
      "Linha de Bordar 40wt",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-083",
      "bordado 3d",
      "eva",
      "espuma 3d",
      "puff",
      "tecnicas de bordado",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "3D PUFF EMBROIDERY MANUAL: Foam Compression Physics, Vector Digitizing & Thermal Cleanup. Nagoya, 2021.",
      "PARRISH, Gail. High-Density Dimensional Embroidery: 3D Foam Dynamics and Clean-Tear Edge Digitizing. Cincinnati, 2022."
    ],
    "practicalExercise": "Programe uma letra 'A' com ponto cheio a 0,20 mm e tampas nas pontas. Coloque um pedaço de EVA 3 mm no bastidor e borde a 650 PPM. Puxe a espuma com a mão e aplique o ar quente do secador: encante-se com a perfeição e a altura do relevo!",
    "quickSummary": "O cálculo exato de pontos e espessura do EVA para fazer bordados em alto relevo 3D estilo boné importado.",
    "beginnerExplanation": "O bordado 3D é aquele bordado altinho e fofinho muito famoso em bonés de marcas famosas. Ele é feito colocando uma plaquinha de espuma EVA por baixo da agulha; a máquina borda com pontos bem juntinhos para cortar a beirada da espuma e deixar o meio gordinho e lindo!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-084-quadro-eletrico-dedicado-e-protecao-contra-surto-de-tensao",
    "code": "Q-084",
    "term": "Quadro Elétrico Dedicado e Proteção contra Surto de Tensão (Electrical Board & Surge Protection Protocol)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quadrum (painel elétrico modular) e do francês surtension (pico de voltagem destrutivo na rede).",
    "summary": "Infraestrutura de proteção elétrica essencial com haste de aterramento dedicada (< 5 ohms), Dispositivo Protetor de Surtos (DPS), disjuntor termomagnético exclusivo e nobreak senoidal puro para salvaguardar as placas lógicas e servomotores da máquina de bordar.",
    "definition": "Quadro Elétrico Dedicado e Proteção contra Surto de Tensão (Dedicated Electrical Subpanel, Industrial Surge Protective Devices - SPD & Pure Sinewave Power Conditioning) é o conjunto de instalações e equipamentos de condicionamento elétrico obrigatórios para proteger o sistema eletroeletrônico de máquinas de bordar computadorizadas. As placas de controle principal (Mainboard), placas inversoras de frequência dos servomotores e telas sensíveis ao toque operam com microprocessadores de alta velocidade extremamente sensíveis a transientes de tensão causados por raios, partidas de motores de ar-condicionado ou oscilações da concessionária. A ausência de um circuito dedicado com DPS Classe II, aterramento TN-S rigoroso e No-Break Senoidal resulta em queima de placas de circuito, travamento do sistema no meio de bordados longos e perda irreversível de matrizes na memória interna.",
    "technicalDetails": "Resistência máxima do aterramento: < 5 a 10 Ohms com haste de cobre cobreado 2,4 m. DPS recomendado: Classe II (In 20kA / Imax 45kA, tensão de disparo ~275V). Disjuntor: Bipolar/Unipolar Curva C dimensionado para a carga da máquina. No-Break: Topologia Online Dupla Conversão ou Linha Interativa com Onda Senoidal Pura (THD < 3%). Filtro de Linha: EMI/RFI com varistores de óxido metálico (MOV).",
    "construction": [
      "Quadro de distribuição elétrica secundário em termoplástico antichama",
      "Dispositivo de Proteção contra Surtos (DPS) com sinalizador visual de vida útil",
      "Disjuntor termomagnético Curva C calibrado para a potência nominal da máquina",
      "Barramento de terra de cobre maciço conectado diretamente à malha de aterramento externa",
      "No-break senoidal puro com autonomia de 15 a 30 minutos para finalização segura do ciclo"
    ],
    "howItWorks": [
      "1. A máquina de bordar está executando um bordado delicado de 60.000 pontos em um vestido de noiva.",
      "2. Uma descarga atmosférica (raio) cai na rede elétrica a 2 km de distância, injetando um pico de 4.000 Volts na fiação.",
      "3. O pico de tensão chega ao quadro elétrico dedicado do ateliê.",
      "4. O DPS (Dispositivo Protetor de Surtos) atua em menos de 25 nanossegundos, desviando 100% da sobretensão para o aterramento da haste de cobre.",
      "5. Simultaneamente, o No-Break Senoidal filtra os ruídos e estabiliza a energia em exatos 220V/127V contínuos.",
      "6. A máquina nem percebe a oscilação: a agulha continua descendo suavemente e a placa eletrônica fica 100% intacta e segura."
    ],
    "mainTypes": [
      "Quadro de Distribuição Dedicado com DPS e Aterramento TN-S (Padrão ouro de instalação elétrica para ateliês)",
      "No-Break Senoidal Puro Online Dupla Conversão (Alimentação ininterrupta com tolerância zero a oscilações)",
      "Condicionador de Energia e Filtro de Linha Industrial EMI/RFI (Para eliminação de ruídos de rede causados por outras máquinas)"
    ],
    "characteristics": [
      "Proteção total das placas de circuito mais caras da máquina contra queima por raios",
      "Fim dos travamentos misteriosos e telas congeladas no meio do bordado",
      "Possibilidade de continuar bordando mesmo se a luz piscar por alguns segundos",
      "Conformidade com os padrões de garantia dos principais fabricantes mundiais de máquinas"
    ],
    "limitations": [
      "Nunca utilizar estabilizadores comuns de computador de relé (eles são lentos e prejudicam os servomotores da máquina)",
      "Nunca cortar o pino terra da tomada da máquina de bordar nem usar adaptadores do tipo 'T' / benjamim",
      "Trocar os módulos do DPS caso o indicador visual mude de verde para vermelho após tempestades severas"
    ],
    "numberingSystem": [
      "Tempo de Resposta do DPS: < 25 nanossegundos",
      "Resistência de Aterramento: < 5 Ohms",
      "Distorção Harmônica da Onda: THD < 3% Senoidal Pura"
    ],
    "advantages": [
      "✔ Economiza milhares de reais evitando a queima de placas eletrônicas e telas sensíveis ao toque",
      "✔ Acaba com o medo de perder o bordado na metade quando começa uma tempestade de chuva",
      "✔ Garante que sua máquina funcione por muitos anos com máxima estabilidade"
    ],
    "commonErrors": [
      "❌ Ligar a máquina de bordar na mesma tomada junto com prensas térmicas pesadas, ferros a vapor ou ar-condicionado",
      "❌ Usar estabilizador barato de informática que fica fazendo 'tec-tec' e mandando picos de energia para o motor",
      "❌ Cortar o pino do meio (terra) da tomada por preguiça de instalar uma tomada de 3 pinos aterrada"
    ],
    "voceSabia": "A queima de placas eletrônicas por surtos de tensão da rede é a causa número 1 de perda de garantia e de despesas não planejadas em oficinas de bordado no mundo inteiro!",
    "curiosidadeTecnica": "Um motor servo industrial de máquina de bordar regenera energia cinética de volta para a linha durante as desacelerações do pantógrafo; se a instalação não tiver aterramento e rede estável, essa energia pode acumular no barramento DC interno e queimar os transistores IGBT da placa controladora.",
    "dicaArtrelados": "Proteja a jóia do seu ateliê como ela merece! **1.** Tenha uma tomada exclusiva com **fio terra de verdade** instalado para a sua máquina de bordar. **2.** Nunca use estabilizadores comuns de escritório; use um **No-break de Onda Senoidal Pura ou um Filtro de Linha Clamper com DPS**. **3.** Se a previsão for de tempestade muito forte com raios, termine a peça e tire o plugue da tomada por segurança!",
    "comparisonTable": {
      "headers": [
        "Equipamento de Proteção",
        "Tempo de Reação",
        "Proteção contra Raios",
        "Qualidade da Onda Elétrica"
      ],
      "rows": [
        [
          "DPS + No-Break Senoidal Puro",
          "< 25 nanossegundos",
          "100% Protegido (desvio total)",
          "Senoidal Perfeita (THD < 3%)"
        ],
        [
          "Filtro de Linha Industrial (Clamper)",
          "< 25 nanossegundos",
          "Alta Proteção contra Surtos",
          "Filtro de Ruído EMI/RFI"
        ],
        [
          "Estabilizador Comum de Relé",
          "Lento (15 a 30 ms)",
          "Nula / Mínima",
          "Onda quadrada com picos perigosos"
        ],
        [
          "Tomada Comum Direta sem Terra",
          "Inexistente",
          "Zero (placa queima direto)",
          "Instável e com oscilações"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Planejamento elétrico de ateliês domésticos, comerciais e galpões industriais",
      "Proteção de máquinas de bordar eletrônicas de 1 a 12 cabeças",
      "Prevenção de perdas em regiões com alto índice pluviométrico e descargas elétricas",
      "Alimentação ininterrupta de matrizes longas que não podem ser interrompidas"
    ],
    "troubleshootingTips": [
      "Se a tela da máquina der tela azul ou reiniciar sozinha do nada, chame um eletricista para medir a voltagem da tomada",
      "Verifique visualmente se a janelinha do DPS no seu quadro de força está verde",
      "Nunca compartilhe a mesma fiação da máquina de bordar com a prensa térmica do ateliê"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Gestão do Ateliê e Produção",
      "Q-Factor e Amortecimento de Vibração Estrutural da Bancada",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-084",
      "quadro eletrico",
      "dps",
      "nobreak",
      "protecao eletrica",
      "aterramento",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "ELECTRICAL PROTECTION FOR SENSITIVE CNC MACHINERY: SPD Classification, Grounding Standards & Pure Sinewave Conditioning. Boston, 2021.",
      "PARRISH, Gail. Power Quality and Surge Protection in Modern Embroidery Facilities. Cincinnati, 2022."
    ],
    "practicalExercise": "Dê uma olhada na tomada onde sua máquina de bordar está ligada hoje: ela tem o terceiro pino conectado a um terra de verdade? Se estiver em um T ou extensão velha, providencie hoje mesmo um filtro de linha profissional com DPS para proteger seu investimento!",
    "quickSummary": "O sistema de proteção elétrica com fio terra, DPS e nobreak para sua máquina nunca queimar a placa em tempestades.",
    "beginnerExplanation": "A placa de computador da sua máquina de bordar é muito delicada e custa caro! Para ela não queimar se cair um raio perto da sua casa ou se a luz oscilar, você deve ligá-la em uma tomada com fio terra de verdade e usar um protetor elétrico especial contra raios (DPS). Assim sua máquina fica protegida e dura a vida toda!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-085-quarentena-de-insumos-e-armazenamento-climatizado",
    "code": "Q-085",
    "term": "Quarentena de Insumos e Armazenamento Climatizado (Raw Material Quarantine & Climate Storage Protocol)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do italiano quarantina (período de isolamento preventivo) e do grego klima (controle de umidade e temperatura atmosférica).",
    "summary": "Protocolo profissional de controle microclimático (umidade relativa de 45% a 60% e temperatura de 20°C a 24°C) e inspeção prévia de lotes de linhas, entretelas hidrossolúveis de PVA e tecidos nobres para evitar ressecamento, mofo e quebras.",
    "definition": "Quarentena de Insumos e Armazenamento Climatizado (Textile Material Quarantine, Hygroscopic Equilibrium & Environmental Storage Conditioning) é a diretriz de gestão da qualidade que estabelece o condicionamento ambiental controlado e a inspeção preliminar de matérias-primas antes de sua liberação para a linha de produção do ateliê. Insumos de bordado são altamente higroscópicos e termossensíveis: entretelas solúveis em água (PVA) ressecam e esfarelam com umidade abaixo de 35%; linhas de rayon e viscose perdem até 40% da tenacidade se expostas à luz UV solar; e espumas EVA perdem a memória elástica se estocadas sob compressão térmica. A climatização controlada garante que todos os materiais atinjam o equilíbrio higrométrico ideal antes de serem enquadrados e bordados.",
    "technicalDetails": "Faixa ótima de umidade relativa do ar: 45% a 60% UR (monitorada por termo-higrômetro digital). Faixa de temperatura ideal: 20°C a 24°C. Período mínimo de aclimatização (quarentena térmica): 12 a 24 horas para tecidos e entretelas vindos de transportadoras. Armazenamento de linhas: Em caixas opacas fechadas ou gaveteiros protegidos da radiação ultravioleta (UV). Embalagem de entretelas PVA: Sacos herméticos de polietileno com sílica-gel ativa.",
    "construction": [
      "Termo-higrômetro digital calibrado com registro de máximas e mínimas diárias",
      "Desumidificador ou umidificador de ar ultrassônico regulado por higrostato",
      "Armários ou gaveteiros de madeira/aço protegidos de luz solar direta e poeira",
      "Sacos plásticos herméticos tipo zip-lock com sachês dessecantes de sílica-gel",
      "Prateleiras suspensas a no mínimo 15 cm do chão para evitar umidade ascendente do piso"
    ],
    "howItWorks": [
      "1. O ateliê recebe uma caixa de rolos de entretela hidrossolúvel de PVA e 50 cones de linha de bordar comprados pela internet em um dia de calor de 38°C.",
      "2. Em vez de abrir e usar imediatamente na máquina, os insumos entram em 'Quarentena de Aclimatização'.",
      "3. Os rolos são inspecionados para checar integridade e acomodados na sala climatizada a 22°C e 50% de umidade por 24 horas.",
      "4. A umidade natural das fibras e a flexibilidade do polímero de PVA se estabilizam perfeitamente.",
      "5. No dia seguinte, a entretela solúvel é colocada no bastidor com total elasticidade, sem ressecar e sem rasgar durante o bordado de uma renda Richelieu.",
      "6. As linhas correm macias e resistentes, sem nenhuma quebra por fragilidade térmica."
    ],
    "mainTypes": [
      "Armazenamento de Linhas e Fios de Bordar (Protegidos de raios UV em gaveteiros escuros com umidade controlada)",
      "Armazenamento de Entretelas Hidrossolúveis e Termossolúveis (Em sacos zip herméticos com sílica-gel)",
      "Aclimatização de Tecidos Nobres e Malhas (Descanso prévio de 24h desenrolados para estabilização da trama)"
    ],
    "characteristics": [
      "Eliminação de quebras inexplicáveis de linhas causadas por ressecamento e envelhecimento precoce",
      "Preservação da vida útil de entretelas solúveis caras sem perda por esfarelamento",
      "Estabilidade dimensional garantida em tecidos finos e toalhas antes do corte e bordado",
      "Organização visual impecável com controle de lotes e datas de recebimento"
    ],
    "limitations": [
      "Nunca guardar cones de linha expostos na parede perto de janelas onde bate sol da tarde",
      "Nunca estocar rolos de entretela diretamente apoiados no chão úmido de concreto",
      "Manter a sílica-gel sempre ativa (reidratando ou trocando quando mudar de cor)"
    ],
    "numberingSystem": [
      "Umidade Relativa Ideal: 45% a 60% UR",
      "Temperatura Ideal: 20°C a 24°C",
      "Tempo de Aclimatização: 12 a 24 horas"
    ],
    "advantages": [
      "✔ Suas linhas de bordar duram anos perfeitas e resistentes como se tivessem acabado de sair da fábrica",
      "✔ Suas entretelas solúveis nunca mais vão ficar secas, quebradiças ou mofadas",
      "✔ Reduz custos com perdas de materiais estragados no estoque"
    ],
    "commonErrors": [
      "❌ Deixar os cones de linha lindos expostos em um suporte de parede bem onde bate sol direto todo dia",
      "❌ Guardar entretela solúvel solta em lugar úmido, fazendo o plástico derreter e grudar nele mesmo",
      "❌ Usar tecido que acabou de chegar dobrado e frio do frete sem deixar descansar na temperatura ambiente"
    ],
    "voceSabia": "A radiação ultravioleta (UV) da luz solar direta degrada os polímeros das linhas de poliéster e viscose, reduzindo sua força de tração em mais de 50% em apenas 3 meses de exposição aberta em prateleiras!",
    "curiosidadeTecnica": "O filme de PVA (álcool polivinílico) possui uma curva de absorção de umidade não-linear; se a umidade relativa do ar ultrapassar 75%, o filme começa a se autorreticular e dissolver parcialmente ao ar ambiente, colando as camadas do rolo de forma irreversível.",
    "dicaArtrelados": "Cuide das suas linhas e entretelas com o **Segredo do Armário Protetor**: guarde suas linhas de bordar em gaveteiros fechados ou caixas plásticas opacas longe do sol! E para a sua entretela hidrossolúvel (aquela transparente de plástico para toalhas e rendas), guarde sempre dentro de um **saquinho tipo zip bem fechado com um sachê de sílica-gel** dentro. Ela vai ficar macia e perfeita por anos!",
    "comparisonTable": {
      "headers": [
        "Condição de Armazenamento",
        "Vida Útil da Linha",
        "Estado da Entretela Solúvel",
        "Taxa de Quebra na Máquina"
      ],
      "rows": [
        [
          "Climatizado e Protegido do Sol (45-60% UR)",
          "> 5 anos impecável",
          "Flexível e macia",
          "< 1 quebra por 100k pontos"
        ],
        [
          "Exposto ao Sol e Calor de Janela",
          "< 6 meses (ressecada)",
          "Ressecada e quebradiça",
          "Quebras constantes a cada 10 min"
        ],
        [
          "Ambiente Úmido sem Vedação (> 75% UR)",
          "Propensa a mofo e odores",
          "Grudenta e derretendo",
          "Atrito excessivo no olho da agulha"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Gestão de almoxarifado e compras de grandes quantidades de linhas e entretelas",
      "Prevenção de perdas em ateliês situados em cidades litorâneas úmidas ou regiões áridas",
      "Conservação de insumos especiais e caros (linhas metálicas, solúveis, fios de seda)",
      "Padrão de qualidade para ateliês certificados com alta repetibilidade técnica"
    ],
    "troubleshootingTips": [
      "Se uma entretela solúvel estiver ficando dura e quebradiça, coloque-a em um saquinho fechado com uma esponjinha ligeiramente úmida (sem encostar nela) por 2 horas",
      "Instale um pequeno termo-higrômetro digital (custa baratinho) na parede do seu ateliê para monitorar a umidade",
      "Identifique as caixas de linhas com a data de compra para usar sempre as mais antigas primeiro (sistema PEPS)"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Linha de Bordar 40wt",
      "Poliéster Trilobal vs. Spun Polyester em Fios de Bordar",
      "Acessórios & Bastidores",
      "Tipos de Tecidos"
    ],
    "tags": [
      "q-085",
      "armazenamento",
      "quarentena de insumos",
      "climatizacao",
      "umidade",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TEXTILE PRESERVATION & STORAGE STANDARDS: Hygroscopic Conditioning, UV Degradation and Polymeric Film Stability. Manchester, 2021.",
      "PARRISH, Gail. Raw Material Logistics and Climate Control in Embroidery Manufacturing. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um cone de linha exposto na janela do sol por 30 dias e deixe outro cone da mesma cor guardado no escuro da gaveta. Ao final, puxe os dois fios com a mão: sinta como o fio que tomou sol arrebenta fácil como papel, enquanto o guardado continua super forte!",
    "quickSummary": "O método de guardar linhas e entretelas longe do sol e da umidade para nunca ressecarem nem estragarem.",
    "beginnerExplanation": "Linhas de bordar e entretelas plásticas são como remédios: não podem tomar sol direto nem umidade! Guardar suas linhas dentro de gavetas escuras e a entretela solúvel dentro de um saquinho plástico com zíper faz com que elas durem anos inteirinhos super fortes e sem quebrar na máquina!",
    "updatedAt": "2026-08-29"
  }
];

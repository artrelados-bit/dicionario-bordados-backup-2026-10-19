import { Verbete } from "../types";

export const VERBETES_LETTER_N_PART13: Verbete[] = [
  {
    "id": "n-088-nivelamento-de-angulos-de-ponto-e-fluxo-vetorial-em-curvas-complexas",
    "code": "N-088",
    "term": "Nivelamento de Ângulos de Ponto e Fluxo Vetorial em Curvas Complexas (Stitch Angle Smoothing & Vector Flow)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim angulus (canto / inclinação geométrica) e vector (condutor / direção de propagação matemática de curvas).",
    "summary": "Técnica matemática de digitalização que suaviza as linhas de inclinação do ponto satim ao longo de curvas orgânicas acentuadas, eliminando degraus visíveis e acúmulo de pontos na parte interna.",
    "definition": "Nivelamento de Ângulos de Ponto e Fluxo Vetorial em Curvas Complexas (Stitch Angle Smoothing, Vector Flow & Curve Interpolation) é o algoritmo de digitalização que interpola a inclinação dos fios ao longo de um contorno sinuoso ou curva fechada (como monogramas em estilo caligráfico, caules de plantas e arabescos). O software distribui os ângulos de maneira contínua e perpendicular à linha central, aplicando a função de 'compensação de curva interna' (onde os pontos do lado de dentro do raio diminuem em densidade e encurtam progressivamente) para evitar o empastamento de linha e o corte do tecido.",
    "technicalDetails": "Algoritmo de interpolação: B-Spline Cúbica ou Curvas de Bézier. Resolução de ângulo: 1° a cada 0,8 mm de comprimento de arco. Ângulo máximo de transição entre nós adjacentes: ≤ 15° (evita quebra visual do reflexo de luz). Compensação de raio interno: Redução de 25% a 40% na densidade dos pontos internos.",
    "construction": [
      "Vetor de contorno central com nós de curva Bézier suaves e equilibrados",
      "Linhas guia de inclinação de ponto posicionadas a cada vértice ou ponto de inflexão",
      "Underlay central em linha de contorno simples (Center Walk) que acompanha o raio da curva",
      "Compensação de repuxo dinâmica maior nas curvas acentuadas para evitar estreitamento",
      "Ponto satim com corte fracionado nos pontos internos (Short Stitch Filter ativado)"
    ],
    "howItWorks": [
      "1. No software de matriz, desenha-se o objeto curvilíneo com a ferramenta de Ponto Satim Coluna A/B.",
      "2. Inserem-se as linhas de ângulo de ponto manualmente nas curvas mais fechadas.",
      "3. Ativa-se a ferramenta de 'Suavização Automática de Ângulos (Angle Smoothing)' para criar transições graduais.",
      "4. O software calcula o espaçamento dos pontos: no lado de fora da curva o ponto se estende e no lado de dentro o software intercala pontos mais curtos.",
      "5. A máquina de bordar recebe a instrução sem criar 'degraus' ou paradas bruscas de pantógrafo.",
      "6. A luz reflete nos fios em um fluxo contínuo e sedoso como fita de cetim dobrada.",
      "7. O tecido permanece perfeitamente plano na parte interna da curva, sem formar caroços ou picotes."
    ],
    "mainTypes": [
      "Fluxo Vetorial Perpendicular Automático (Acompanha a linha central da curva de forma autônoma)",
      "Guia Multi-Ângulo Manual (Para monogramas de alta costura, caligrafia fina e brasões complexos)",
      "Interpolação de Curva com Filtro de Pontos Curtos (Para curvas ultra-fechadas de menos de 3 mm de raio)"
    ],
    "characteristics": [
      "Reflexo de luz suave e uniforme ao longo de toda a extensão da letra ou flor",
      "Eliminação definitiva de buracos e picotes de tecido causados por agulhadas concentradas na parte interna",
      "Visual fluido e profissional com acabamento comparável a bordados manuais em seda",
      "Redução de quebras de linha provocadas por atrito em pontos excessivamente amontoados"
    ],
    "limitations": [
      "Ângulos mal posicionados manualmente podem criar linhas de rachadura no meio da coluna",
      "Não colocar linhas de ângulo a menos de 2 mm de distância uma da outra para não confundir o software",
      "Exige compreensão da geometria de reflexo de luz dos fios trilobais"
    ],
    "numberingSystem": [
      "Variação Angular Máxima: 12° a 15° por nó",
      "Raio Mínimo de Curva: 1,5 mm",
      "Filtro de Ponto Curto: Ativado em 30%"
    ],
    "advantages": [
      "✔ Transforma letras cursivas e arabescos em obras de arte com brilho cintilante impecável",
      "✔ Impede que a máquina fure o tecido no mesmo buraquinho no meio de curvas fechadas",
      "✔ Agiliza o tempo de máquina com movimentos de pantógrafo muito mais harmônicos e suaves"
    ],
    "commonErrors": [
      "❌ Deixar uma linha de ângulo a 90° colada ao lado de uma a 45°, criando um dente feio no bordado",
      "❌ Esquecer de ligar o filtro de pontos curtos em curvas fechadas, embolando linha por baixo",
      "❌ Desenhar curvas cheias de pontas e nós desnecessários no software de digitalização"
    ],
    "voceSabia": "A matemática dos fluxos vetoriais usada nos softwares de bordado modernos é a mesma equação desenvolvida pelo engenheiro francês Pierre Bézier em 1962 para desenhar as curvas aerodinâmicas dos carros da Renault!",
    "curiosidadeTecnica": "Quando o ângulo de inclinação do ponto varia mais de 20° bruscamente, o coeficiente de reflexão especular da linha cai em 60%, criando a ilusão óptica de que a linha mudou de cor ou perdeu o brilho naquele ponto exato.",
    "dicaArtrelados": "Ao desenhar letras cursivas ou arabescos no Wilcom ou Embird, use o menor número possível de linhas de ângulo: menos é mais! Coloque uma linha de ângulo no começo da curva, uma exatamente no meio da curva e uma no final. Deixe o software fazer a suavização automática: as curvas ficam redondinhas e o brilho da linha fica um espetáculo!",
    "comparisonTable": {
      "headers": [
        "Aspecto",
        "Ângulos sem Nivelamento (Bruscos)",
        "Ângulos Nivelados com Fluxo Vetorial"
      ],
      "rows": [
        [
          "Reflexo de Luz",
          "Quebrado com linhas de sombra escuras",
          "Cintilante, uniforme e sedoso"
        ],
        [
          "Acúmulo de Linha na Curva",
          "Alto (risco de picotar o tecido)",
          "Perfeito (pontos curtos alternados)"
        ],
        [
          "Movimento do Pantógrafo",
          "Aos trancos e ruidoso",
          "Fluido, silencioso e contínuo"
        ],
        [
          "Acabamento de Letras",
          "Quadrado ou serrilhado nas pontas",
          "Curvas caligráficas perfeitas"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 850 PPM",
      "needleType": "75/11 SES de ponta fina",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm com filtro de ponto curto ativado (Short Stitch 30%)"
    },
    "applications": [
      "Monogramas caligráficos clássicos em toalhas de casamento e enxovais de luxo",
      "Arabescos e folhagens barrocas em vestidos de festa e mantos tradicionais",
      "Logotipos corporativos com tipografias manuscritas elegantes e dinâmicas",
      "Ilustrações botânicas, caules florais e plumagens de pássaros realistas"
    ],
    "troubleshootingTips": [
      "Se aparecer uma fenda no meio do satim, delete a linha de ângulo mais próxima e deixe o programa recalcular",
      "Verifique na simulação 3D (TrueView) como a luz reage à inclinação dos pontos antes de mandar para a máquina",
      "Mantenha as linhas de ângulo sempre paralelas ao sentido natural em que uma caneta tinteiro escreveria"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Ponto Satim / Ponto Cheio",
      "Ponto Curto (Short Stitch)",
      "Compensação de Repuxo",
      "Underlay / Pontos de Suporte"
    ],
    "tags": [
      "n-088",
      "angulos de ponto",
      "fluxo vetorial",
      "curvas suaves",
      "monogramas",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "WILCOM International. Curve Smoothing, Stitch Angles & Vector Interpolation Guide. Sydney, 2021.",
      "PARRISH, Gail. Vector Flow Dynamics and Stitch Angle Geometry in Artistic Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Desenhe a letra 'S' em ponto satim no seu programa de matriz. Coloque 4 linhas de ângulo acompanhando a curva suavemente. Ligue a visualização 3D e gire a tela: veja como o reflexo da linha escorrega pela letra feito seda líquida! Depois borde em um retalho e confirme a perfeição ao vivo.",
    "quickSummary": "Como inclinar os pontos nas curvas para a linha brilhar sem quebrar o tecido nem embolar pontinhos.",
    "beginnerExplanation": "Quando a gente borda uma letra cheia de curvas (como a letra 'S'), os pontos precisam ir virando devagarinho para acompanhar a curva: nivelar os ângulos é garantir que essa virada seja bem suave, fazendo a linha brilhar como cetim e sem furar o tecido por dentro da curva!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-089-nomenclatura-e-tipologia-de-bastidores-especializados",
    "code": "N-089",
    "term": "Nomenclatura e Tipologia de Bastidores Especializados (Cilíndricos, Meia-Lua e Tubulares) (Specialty Frames & Hoops)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Bastidores & Acessórios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego onoma / kletos (sistema de nomes / classificação técnica) e do latim vasculum (aro / moldura de sustentação têxtil).",
    "summary": "Guia sistemático de identificação, geometria e uso correto dos bastidores especiais: modelos para bonés 270°, bastidores de bolso/manga, aros meia-lua para meias e bastidores magnéticos contínuos.",
    "definition": "Nomenclatura e Tipologia de Bastidores Especializados (Specialty Embroidery Hoops, Frames & Clamping Fixtures) é a padronização técnica da ampla família de dispositivos de fixação desenvolvidos para permitir o bordado computadorizado em áreas tridimensionais, tubulares, de difícil acesso ou com restrições geométricas severas onde os bastidores planos convencionais não conseguem entrar. Essa categoria abrange os Bastidores Cilíndricos de Boné (Cap Frames com rotação de 270°), Bastidores Meia-Lua e de Bolso (Pocket & Sock Frames), Bastidores Tubulares para Mangas e Pernas de Calça, e Grampos Pneumáticos ou Magnéticos Industriais.",
    "technicalDetails": "Raio de curvatura do bastidor de boné: 80 mm a 95 mm (arco de 270° / campo útil 360 x 70 mm). Bastidores de bolso: 65 x 65 mm a 100 x 100 mm com perfil ultrafino. Bastidores de meia: Clamp com mordentes de mola ajustáveis. Material dos aros: Alumínio aeronáutico anodizado, aço inox e poliacetal (POM) de alta rigidez.",
    "construction": [
      "Base de montagem com engate rápido tipo rabo de andorinha ou baioneta para o braço tubular",
      "Aros de fixação com perfil anatômico adaptado ao formato da peça (curvo, oval ou retangular estreito)",
      "Cintas de aço inox flexível com fecho de alavanca de pressão para bonés estruturados",
      "Gabarito de bancada (*hooping station*) com presilhas para pré-montagem rápida fora da máquina",
      "Revestimento interno emborrachado para máxima aderência sem marcas no tecido"
    ],
    "howItWorks": [
      "1. Identifica-se a peça a ser bordada (ex: bolso de camisa fechado, meia esportiva ou boné de aba curva).",
      "2. Seleciona-se o bastidor especializado correspondente à geometria da peça.",
      "3. Utiliza-se a estação de montagem de bancada para posicionar a entretela e a peça no bastidor correto.",
      "4. Trava-se a presilha de pressão ou a cinta de aço mantendo a área a ser bordada perfeitamente esticada.",
      "5. Encaixa-se o bastidor no braço tubular da máquina de bordar (a peça veste o braço livremente).",
      "6. A máquina executa o bordado com movimentação rotacional ou cartesiana sem costurar o fundo da peça.",
      "7. Destrava-se a alavanca rápida e a peça acabada sai pronta em segundos sem necessidade de desmanchar costuras."
    ],
    "mainTypes": [
      "Bastidor Cilíndrico de Boné 270° (Cap Driver / Wide Cap Frame para bordar frente e laterais de boné)",
      "Bastidor de Bolso e Meia (Pocket / Sock Clamp para bordar bolsos prontos e punhos sem descosturar)",
      "Bastidor de Manga Tubular Longo (Sleeve Frame estreito para pernas de calça, mangas e botas)",
      "Bastidores Magnéticos de Montagem Rápida (Mighty Hoops para fardamentos, mochilas e jaquetas)"
    ],
    "characteristics": [
      "Capacidade de bordar peças prontas e fechadas sem precisar descosturar nada",
      "Estrutura rígida de engenharia que impede a vibração da peça em rotações de até 850 PPM",
      "Engate rápido e seguro compatível com o sistema tubular da máquina industrial",
      "Versatilidade para personalizar centenas de produtos diferentes no mesmo ateliê"
    ],
    "limitations": [
      "Cada modelo de máquina possui medidas de encaixe próprias (não são 100% intercambiáveis entre marcas)",
      "Exigem matrizes digitalizadas com parâmetros específicos (ex: bordado de boné borda do centro para as pontas)",
      "Montagem incorreta pode causar colisão com a barra de agulha ou chapa de base"
    ],
    "numberingSystem": [
      "Bastidor de Boné: 270° (360 x 70 mm)",
      "Bastidor de Bolso: 75 x 75 mm",
      "Bastidor Tubular: 150 x 400 mm"
    ],
    "advantages": [
      "✔ Multiplica as oportunidades de faturamento do ateliê com produtos de alto valor (bonés, botas, bolsas)",
      "✔ Elimina o tempo perdido e o custo de mandar descosturar e recosturar bolsos e mangas de camisas",
      "✔ Agiliza o fluxo de produção com trocas de bastidor em menos de 10 segundos"
    ],
    "commonErrors": [
      "❌ Esquecer de inverter o sentido da matriz ao usar bastidor de boné (o boné fica de cabeça para baixo)",
      "❌ Borda muito perto da borda metálica do bastidor de boné, quebrando a agulha no aro de aço",
      "❌ Tentar usar bastidor plano tradicional em bolso fechado, costurando a camisa fechada junto"
    ],
    "voceSabia": "O primeiro bastidor rotativo de boné para máquinas de bordar foi desenvolvido no Japão pela Tajima em 1988 para os bonés da Fórmula 1; antes disso, todos os bonés precisavam ser bordados desmontados em pedaços planos antes de serem costurados na fábrica!",
    "curiosidadeTecnica": "Ao bordar em bastidor cilíndrico de boné a 800 PPM, a força centrífuga tenta empurrar a entretela para fora da aba; por isso as cintas de aço inox exercem uma pressão radial de mais de 8 kgf no perímetro inferior da copa.",
    "dicaArtrelados": "Ao montar boné no bastidor de 270°, puxe a entretela de boné bem firme para baixo antes de travar a fita de aço: o boné tem que ficar esticado e fazer barulho de tambor quando você bater o dedo no meio da copa: isso garante que o bordado 3D fique perfeito e sem nenhuma ruga!",
    "comparisonTable": {
      "headers": [
        "Tipo de Bastidor",
        "Geometria Principal",
        "Aplicação Indicada",
        "Velocidade Recomendada"
      ],
      "rows": [
        [
          "Bastidor Plano Tradicional",
          "Plana retangular / oval",
          "Camisetas abertas, toalhas, tecidos planos",
          "750 a 950 PPM"
        ],
        [
          "Bastidor de Boné 270°",
          "Cilíndrica curva",
          "Bonés estruturados, viseiras, gorros",
          "600 a 750 PPM"
        ],
        [
          "Bastidor de Bolso / Meia",
          "Grampo plano estreito",
          "Bolsos de camisa fechados, meias, luvas",
          "650 a 750 PPM"
        ],
        [
          "Bastidor Tubular de Manga",
          "Retangular alongado estreito",
          "Mangas compridas, pernas de calça jeans",
          "700 a 800 PPM"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 a 750 PPM para bonés / 750 PPM para outros bastidores",
      "needleType": "DBxK5 75/11 ou 80/12 SAN 1 conforme a rigidez da peça",
      "stabilizer": "Entretela pesada rasgável de boné (80 g/m²) ou recorte tubular",
      "threadTension": "Calibrada para o material",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Bonés promocionais, bonés esportivos de beisebol e chapéus de pescador",
      "Bolsos frontais de camisas sociais, jalecos médicos e jaquetas executivas",
      "Meias esportivas personalizadas, polainas e punhos de moletom",
      "Calçados de tecido, pantufas, botas de montaria e luvas de trabalho"
    ],
    "troubleshootingTips": [
      "Se a matriz bater no calcador, faça sempre a simulação de traçado de área (Trace) no painel antes de dar o Start",
      "Verifique se o braço livre da máquina está bem lubrificado no trilho de encaixe",
      "Utilize agulhas reforçadas (SAN 1) em bastidores de boné para evitar deflexão em costuras grossas centrais"
    ],
    "relatedTerms": [
      "Bastidores & Acessórios",
      "Bastidor de Boné",
      "Bastidores Magnéticos",
      "Braço Tubular da Máquina",
      "Nivelamento e Alinhamento do Bastidor"
    ],
    "tags": [
      "n-089",
      "bastidores especiais",
      "bastidor de bone",
      "bastidor de bolso",
      "tubular",
      "bastidores e acessorios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical Manual. Specialty Framing Systems, Cap Drivers & Tubular Clamping. Nagoya, 2021.",
      "PARRISH, Gail. Industrial Framing Fixtures: Cap Frames, Pocket Clamps and Tubular Workflows. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue uma camisa polo com bolso fechado. Experimente tentar colocar em um bastidor plano comum e veja a dificuldade. Agora imagine colocar em um bastidor de bolso que entra direto no vãozinho: compreenda na prática como cada bastidor tem a função perfeita para cada tipo de trabalho!",
    "quickSummary": "O guia completo dos bastidores especiais para bordar bonés, bolsos, meias e mangas sem sofrimento.",
    "beginnerExplanation": "Além dos bastidores comuns que usamos em toalhas, existem bastidores especiais feitos sob medida: tem o bastidor curvo para bordar bonés, o bastidor fininho que entra dentro de bolsos sem descosturar, e os bastidores compridos para mangas de camisa e calças!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-090-nao-tecidos-de-recorte-spunbonded-e-termofixados-de-alta-estabilidade",
    "code": "N-090",
    "term": "Não-Tecidos de Recorte Spunbonded e Termofixados de Alta Estabilidade (Spunbonded Polypropylene & Polyester Backing)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês spunbonded (filamentos contínuos termofundidos em esteira de ar) e do latim stabilis (firme / inalterável).",
    "summary": "Estudo aprofundado das entretelas de recorte de alta tecnologia fabricadas por fiação contínua termofixada (Spunbond), oferecendo resistência mecânica isotrópica para malhas pique e lycra.",
    "definition": "Não-Tecidos de Recorte Spunbonded e Termofixados (Spunbonded Continuous Filament Cut-Away Stabilizers) é a classe de entretelas industriais de poliéster ou polipropileno de alta tenacidade produzidas pela extrusão direta de microfilamentos contínuos entrelaçados e compactados sob cilindros térmicos gofrados (calandragem a 210°C). Diferente das entretelas rasgáveis comuns (cujas fibras curtas se partem facilmente), as entretelas spunbonded possuem resistência multidirecional isotrópica (igual em 360°), suportando mais de 30.000 pontos em malhas elásticas, tecidos piquet de camisas polo e jaquetas sem sofrer distorção dimensional nem encolhimento após lavagens industriais.",
    "technicalDetails": "Gramaturas industriais: 40 g/m² (PolyMesh leve), 60 g/m² (Padrão Corporativo) e 80 g/m² (Pesada para Jaquetas). Resistência à tração longitudinal: > 95 N/5cm / Transversal: > 85 N/5cm. Alongamento máximo sob carga: < 4,5%. Estabilidade térmica: Suporta ferro até 160°C sem deformação.",
    "construction": [
      "Filamentos contínuos de 100% poliéster virgem extrudados a quente",
      "Padrão de gofragem pontilhada em diamante (Diamond Point Bonding) para máxima flexibilidade",
      "Tratamento anti-estático e acabamento macio hipoalergênico para contato com a pele",
      "Borda limpa e indeformável ao ser recortada com tesoura curva de ponta de pato",
      "Compatibilidade química com lavagens a seco e detergentes enzimáticos industriais"
    ],
    "howItWorks": [
      "1. Corta-se a entretela spunbonded de recorte no tamanho do bastidor selecionado.",
      "2. Aplica-se uma névoa suave de adesivo temporário spray 505 no lado áspero da entretela.",
      "3. Assenta-se o tecido (ex: camisa polo de malha piquet) sobre a entretela de forma plana e sem esticar.",
      "4. Encaixa-se o conjunto no bastidor com tensão moderada uniforme.",
      "5. A máquina executa o bordado com matriz densa; os filamentos contínuos seguram o tecido contra a tração da linha.",
      "6. Retira-se a peça do bastidor e recorta-se a entretela no avesso deixando uma margem suave de 3 a 5 mm.",
      "7. A entretela recortada permanece permanentemente unida à malha, mantendo o bordado impecável por toda a vida útil da roupa."
    ],
    "mainTypes": [
      "Entretela PolyMesh / No-Show Mesh (45 g/m² - Fininha e translúcida, ideal para camisas brancas e malhas leves)",
      "Entretela de Recorte Padrão Spunbonded (60 g/m² - Para camisas polo, moletons e uniformes corporativos)",
      "Entretela de Recorte Pesada Termofixada (80 a 100 g/m² - Para jaquetas pesadas, casacos e tapeçaria)"
    ],
    "characteristics": [
      "Estabilidade dimensional permanente: o bordado nunca enruga após dezenas de lavagens",
      "Resistência absoluta contra o efeito de rasgo e picotamento de agulha",
      "Toque suave e macio que não pinica nem machuca o peito do usuário",
      "Não aparece pelo lado direito de roupas brancas ou transparentes (efeito No-Show)"
    ],
    "limitations": [
      "Exige recorte manual com tesoura curva no avesso após o término do bordado",
      "Não pode ser puxada para rasgar (ela não rasga e você deformaria a camisa)",
      "Cuidado para não cortar o tecido da roupa na hora de aparar as sobras no avesso"
    ],
    "numberingSystem": [
      "Gramatura Leve (Mesh): 45 g/m²",
      "Gramatura Média (Standard): 60 g/m²",
      "Gramatura Pesada (Heavy): 80 g/m²"
    ],
    "advantages": [
      "✔ Garante que camisas polo de clientes nunca fiquem enrugadas ou tortas depois de lavar na máquina de casa",
      "✔ Acaba de vez com reclamações de 'bordado que pinica o peito' em roupas finas",
      "✔ Mantém o logotipo esticado e perfeito durante anos de uso contínuo do uniforme"
    ],
    "commonErrors": [
      "❌ Tentar rasgar entretela de recorte com a mão como se fosse rasgável, rasgando a camisa do cliente",
      "❌ Cortar a entretela rente demais aos pontos no avesso com tesoura reta, arriscando furar a peça",
      "❌ Usar entretela rasgável barata em malha elástica, fazendo o bordado virar um 'bolo amassado' na primeira lavagem"
    ],
    "voceSabia": "A tecnologia Spunbond foi inventada pela DuPont na década de 1960 para criar materiais de proteção cirúrgica e isolamento de edifícios (como o famoso Tyvek); no bordado, essa mesma tecnologia de microfilamentos garante que o bordado dure mais que a própria roupa!",
    "curiosidadeTecnica": "A resistência mecânica de um Não-Tecido Spunbond vem do fato de que seus filamentos têm quilômetros de comprimento ininterrupto termofundidos a cada 1,5 milímetro, suportando trações de ruptura 600% maiores que o papel rasgável comum.",
    "dicaArtrelados": "Para camisas polo piquet e malhas esportivas: use SEMPRE entretela de recorte (Cut-Away) PolyMesh. No final, use uma tesoura de bico de pato (tesoura de aplique) para recortar o avesso deixando uma bordinha redondinha de 4 mm: seu cliente vai poder lavar a camisa 100 vezes na máquina e o bordado continuará lisinho e impecável como novo!",
    "comparisonTable": {
      "headers": [
        "Propriedade",
        "Entretela Rasgável Comum (Tear-Away)",
        "Entretela Spunbonded de Recorte (Cut-Away)"
      ],
      "rows": [
        [
          "Comportamento Pós-Lavagem",
          "Enruga e deforma em malhas elásticas",
          "Permanece 100% lisa e estável por anos"
        ],
        [
          "Resistência a Milhares de Pontos",
          "Média (pode picotar na borda)",
          "Máxima (isotrópica em 360 graus)"
        ],
        [
          "Sensação no Peito (Toque)",
          "Áspera com pontas de papel",
          "Macia, suave e flexível (efeito tecido)"
        ],
        [
          "Indicação Principal",
          "Tecidos planos (toalhas, sarja, jeans)",
          "Malhas, polos, lycra, tactel e suéteres"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 950 PPM (Estabilidade total)",
      "needleType": "75/11 SES (Ponta Bola Leve)",
      "stabilizer": "Spunbonded Cut-Away 50 a 60 g/m² fixada com Spray Reposicionável",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Padrão da matriz (0.40 mm)"
    },
    "applications": [
      "Camisas polo corporativas de algodão piquet e tecidos dry-fit de alta performance",
      "Camisetas de algodão penteado, malha fria e roupas infantis de bebê",
      "Agasalhos de moletom, suéteres de lã, jaquetas de tactel e coletes",
      "Uniformes profissionais de saúde, gastronomia e hotelaria sujeitos a lavagens frequentes"
    ],
    "troubleshootingTips": [
      "Utilize tesoura de bico de pato para recortar o avesso com segurança total sem risco de cortar a roupa",
      "Recorte as sobras em formato arredondado oval (sem pontas retas) para não marcar pelo lado de fora ao passar ferro",
      "Aplique uma camada de entretela termocolante protetora de bebê por cima do avesso se for roupa infantil"
    ],
    "relatedTerms": [
      "Estabilizadores & Entretelas",
      "Entretela de Recorte (Cut-Away)",
      "Entretela PolyMesh / No-Show",
      "Malha Piquet",
      "Adesivo Temporário em Spray 505"
    ],
    "tags": [
      "n-090",
      "spunbonded",
      "entretela de recorte",
      "cut away",
      "camisa polo",
      "estabilizadores e entretelas",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FREUDENBERG Performance Materials. Industrial Spunbonded Continuous Filament Stabilizers. Weinheim, 2021.",
      "PARRISH, Gail. Continuous Filament Non-Wovens: Dimensional Stability & Cut-Away Engineering in Apparel Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde um logotipo em uma camisa polo usando entretela rasgável comum. Em outra polo idêntica, borde o mesmo logotipo usando entretela de recorte Spunbonded PolyMesh. Lave as duas camisas na máquina de lavar roupas e coloque para secar: veja como a polo com recorte continua perfeita e a outra ficou toda amassada!",
    "quickSummary": "A entretela de pano que você corta no avesso e que não deixa camisas polo enrugarem ao lavar.",
    "beginnerExplanation": "A entretela de recorte é feita com fios contínuos muito fortes que não rasgam com a mão: ela é colocada atrás de camisas polo e camisetas para segurar os pontos para sempre, fazendo o bordado ficar lisinho e bonito mesmo depois que o cliente lavar a roupa dezenas de vezes na máquina!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-091-nivelamento-de-folga-axial-do-eixo-da-lancadeira-e-ajuste-de-bronzinas",
    "code": "N-091",
    "term": "Nivelamento de Folga Axial do Eixo da Lançadeira e Ajuste de Bronzinas (Rotary Hook Axial Endplay & Bushing Fit)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (nivelar), axis (eixo central de rotação) e do francês bronze (liga de cobre-estanho com propriedades autolubrificantes).",
    "summary": "Procedimento de manutenção mecânica pesada para eliminar o jogo axial longitudinal (folga para frente e para trás) do eixo inferior da lançadeira rotativa e reajuste de bronzinas e anéis de encosto.",
    "definition": "Nivelamento de Folga Axial do Eixo da Lançadeira e Ajuste de Bronzinas (Hook Shaft Axial Endplay Calibration & Bushing Clearance) é a operação de precisão mecânica que elimina a folga longitudinal parasita (jogo para frente e para trás) do eixo que gira a lançadeira rotativa da máquina de bordar. Com o passar de milhares de horas de trabalho contínuo, as bronzinas de bronze sinterizado e os anéis de encosto (*thrust collars*) sofrem desgaste micrométrico, permitindo que a lançadeira se afaste ou se aproxime da agulha durante as acelerações do pantógrafo. Essa folga deve ser calibrada estritamente na faixa de 0,02 mm a 0,04 mm utilizando calibres de folga e micrômetro digital.",
    "technicalDetails": "Folga axial tolerada: 0,02 mm a 0,04 mm (medida com relógio comparador milesimal). Folga radial nas bronzinas: ≤ 0,015 mm. Material da bronzina: Bronze fosforoso sinterizado autolubrificante (SAE 660 / CuSn7ZnPb). Lubrificação: Óleo mineral ISO VG 10 ou 15 com aditivo anti-desgaste.",
    "construction": [
      "Eixo da lançadeira em aço cromo-níquel retificado com dureza 60 HRC",
      "Bronzinas de bronze sinterizado montadas por prensagem na carcaça inferior da base",
      "Anel de encosto temperado (*thrust collar*) com parafusos duplos de fixação Allen",
      "Engrenagem cônica helicoidal de transmissão de movimento sincronizado 2:1",
      "Relógio comparador com base magnética articulada de precisão 0,001 mm"
    ],
    "howItWorks": [
      "1. Desliga-se a máquina de bordar e retiram-se a chapa de agulha e o protetor inferior.",
      "2. Instala-se o relógio comparador com a ponta apalpadora encostada na face frontal do eixo da lançadeira.",
      "3. Empurra-se e puxa-se o eixo longitudinalmente com a mão para medir o deslocamento axial total.",
      "4. Se a folga medida for superior a 0,05 mm, soltam-se os parafusos Allen do anel de encosto traseiro.",
      "5. Pressiona-se o anel de encosto contra a face da bronzina utilizando um calibre de lâmina de 0,03 mm como calço.",
      "6. Aperta-se firmemente o anel de encosto com torque cruzado e retira-se a lâmina de calibração.",
      "7. Gira-se o volante com a mão para confirmar que o eixo gira suave, livre e sem nenhuma folga axial restante."
    ],
    "mainTypes": [
      "Ajuste em Máquinas Monocabeça de Braço Tubular (Manutenção preventiva semestral de oficina)",
      "Equalização de Eixos em Máquinas Multicabeças Industriais (Garante ponto idêntico em todos os cabeçotes)",
      "Substituição de Bronzinas Desgastadas por Prensagem Hidráulica (Revisão geral após 10 anos de uso)"
    ],
    "characteristics": [
      "Eliminação completa de ruídos metálicos secos e vibrações anormais no cabeçote inferior",
      "Estabilidade absoluta da distância agulha-lançadeira durante bordados em alta rotação (1.000 PPM)",
      "Fim de quebras inexplicáveis de agulha e pontos pulados intermitentes",
      "Prolongamento da vida útil da lançadeira rotativa e das engrenagens cônicas em mais de 5 anos"
    ],
    "limitations": [
      "Nunca apertar o anel de encosto a ponto de prender o eixo (risco de travamento e queima de motor)",
      "Exige instrumentos de metrologia (relógio comparador) e chaves Allen de alta qualidade",
      "Serviço avançado que deve ser executado por mecânico especializado ou operador treinado"
    ],
    "numberingSystem": [
      "Folga Axial Correta: 0,03 mm ± 0,01 mm",
      "Folga Limite de Alarme: > 0,06 mm",
      "Torque de Aperto dos Parafusos: 1,8 N.m"
    ],
    "advantages": [
      "✔ Zera problemas misteriosos de quebra de agulha que acontecem 'do nada' em velocidades altas",
      "✔ Deixa a máquina silenciosa, suave e trabalhando com som aveludado de fábrica",
      "✔ Garante que bordados em tecidos grossos (como bonés e jaquetas) não percam o ponto"
    ],
    "commonErrors": [
      "❌ Deixar o eixo com folga de quase 1 mm, fazendo a lançadeira bater de frente na agulha em alta velocidade",
      "❌ Apertar o colar de encosto sem deixar folga nenhuma (0,00 mm), fazendo o eixo superaquecer e travar",
      "❌ Usar chave Allen desgastada e espanar os parafusos de fixação do anel de encosto"
    ],
    "voceSabia": "As bronzinas de bronze sinterizado foram desenvolvidas na década de 1930 para os motores de aviões; elas possuem milhões de microporos microscópicos cheios de óleo que 'suam' lubrificante quando aquecem e o reabsorvem quando esfriam!",
    "curiosidadeTecnica": "Uma folga axial de apenas 0,10 mm no eixo da lançadeira faz a folga da ponta da agulha variar em mais de 100% durante a costura; isso é suficiente para fazer a agulha bater na ponta de aço da lançadeira a cada 50 pontos.",
    "dicaArtrelados": "Faça este teste simples a cada 6 meses: tire a chapa de agulha e, com a ponta dos dedos, tente empurrar e puxar a lançadeira para frente e para trás. Ela não pode ter nenhum joguinho perceptível para frente e para trás, mas tem que girar livre e macia: se você sentir ela chacoalhando, é hora de chamar seu técnico para ajustar o anel de encosto!",
    "comparisonTable": {
      "headers": [
        "Condição do Eixo",
        "Folga Axial",
        "Comportamento em 1.000 PPM",
        "Risco de Quebra"
      ],
      "rows": [
        [
          "Calibrado Perfeito",
          "0,02 mm a 0,04 mm",
          "Silencioso, suave e estável",
          "Zero (ponto 100% laçado)"
        ],
        [
          "Com Folga Excessiva",
          "> 0,08 mm",
          "Vibração e barulho metálico",
          "Altíssimo (bate na agulha)"
        ],
        [
          "Travado sem Folga",
          "0,00 mm (Preso)",
          "Superaquecimento e travamento",
          "Crítico (queima correia/motor)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-ajuste: Operação plena até 1.000 - 1.200 PPM",
      "needleType": "DBxK5 conforme a produção",
      "stabilizer": "N/A (Manutenção mecânica)",
      "threadTension": "Padrão",
      "density": "N/A"
    },
    "applications": [
      "Revisão técnica preventiva anual de máquinas industriais de bordar",
      "Recuperação de máquinas antigas com ruído excessivo na base tubular",
      "Preparação de máquinas para produções pesadas contínuas de bonés estruturados",
      "Substituição de engrenagens de transmissão helicoidais desgastadas"
    ],
    "troubleshootingTips": [
      "Pingue duas gotas de óleo lubrificante de máquina na bronzina após o ajuste",
      "Gire o volante com a mão por 3 voltas completas para certificar-se de que não há pontos duros",
      "Verifique se o parafuso do anel de encosto possui trava química de rosca suave (Loctite 242)"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Nivelamento Estroboscópico de Sincronismo da Agulha",
      "Manutenção Preventiva",
      "Lubrificação Periódica"
    ],
    "tags": [
      "n-091",
      "folga axial",
      "eixo da lancadeira",
      "bronzinas",
      "manutencao pesada",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "BARUDAN Industrial Service Manual. Hook Shaft Assembly, Axial Endplay & Bushing Tolerances. Ichinomiya, 2021.",
      "PARRISH, Gail. Rotary Shaft Kinematics, Bearing Clearance and Axial Alignment in Embroidery Machinery. Cincinnati, 2022."
    ],
    "practicalExercise": "Com a máquina desligada e sem agulha, segure o corpo de metal da lançadeira entre o polegar e o indicador e tente movimentar para frente e para trás. Sinta como o eixo deve ser firme e justo como uma peça maciça, sem folga frouxa. Esse é o segredo de uma máquina que borda anos sem quebrar agulhas!",
    "quickSummary": "Eliminar o jogo de para frente e para trás do eixo da lançadeira para a máquina não quebrar agulha.",
    "beginnerExplanation": "O eixo que gira a lançadeira embaixo da chapa precisa girar livre como uma roda de bicicleta, mas não pode ter nenhuma folga balançando para frente ou para trás: calibrar essa folga garante que a lançadeira passe sempre no milímetro exato atrás da agulha sem bater nela!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-092-nanotecnologia-hidrofobica-e-fios-com-protecao-antimicrobiana-e-uv",
    "code": "N-092",
    "term": "Nanotecnologia Hidrofóbica e Fios com Proteção Antimicrobiana e UV (Nano-Coated Hydrophobic & Antimicrobial Embroidery Threads)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego nanos (anão / escala de bilionésimos de metro 10⁻⁹ m), hydor (água) e phobos (repulsão / que repele líquidos).",
    "summary": "Nova geração de linhas técnicas tratadas com nanopartículas de sílica (repelência a água/manchas), íons de prata (ação antibacteriana para hospitais) e bloqueadores solares UV para toldos e náutica.",
    "definition": "Nanotecnologia Hidrofóbica e Fios com Proteção Antimicrobiana e UV (Functional Nano-Coated & High-Performance Technical Embroidery Threads) é o segmento avançado de fios de bordar de poliéster ou PTFE (Teflon) tratados quimicamente em nível molecular com nanorevestimentos funcionais. Essas linhas possuem propriedades de auto-limpeza (efeito lótus hidrofóbico onde água e óleo escorrem sem molhar o bordado), partículas nanométricas de prata coloidal que eliminam 99,9% de bactérias e fungos (essencial para jalecos médicos e roupas hospitalares) e aditivos fotoestabilizadores HALS contra degradação por radiação ultravioleta em embarcações náuticas.",
    "technicalDetails": "Ângulo de contato hidrofóbico: > 140° (Superhidrofobicidade). Eficácia antimicrobiana: Redução bacteriana de 99,9% (Norma ISO 20743 / JIS L 1902). Resistência UV: Solidez à luz Grau 8 (Escala de Lã Azul / > 2.000 horas de sol direto). Ponto de fusão: 260°C (Poliéster) a 327°C (Fio PTFE).",
    "construction": [
      "Filamentos contínuos de poliéster de alta tenacidade ou polímero de PTFE puro",
      "Banho nanotecnológico de nanopartículas de dióxido de titânio (TiO2) e prata coloidal (Ag+)",
      "Camada molecular hidrofóbica e oleofóbica de fluoropolímeros C6 ecológicos",
      "Fotoestabilizadores de amina impedida (HALS) integrados na massa do polímero antes da fiação",
      "Carretéis industriais com vedação anti-umidade para preservação dos aditivos"
    ],
    "howItWorks": [
      "1. A linha nanotecnológica passa pela máquina de bordar com a mesma facilidade de uma linha comum de poliéster.",
      "2. A matriz borda normalmente a 800 PPM em jalecos médicos, estofados de barco ou uniformes externos.",
      "3. Quando uma gota de café, molho ou sangue cai sobre o bordado, as nanopartículas impedem que o líquido penetre nos fios.",
      "4. O líquido forma uma bolinha perfeita e rola para fora sem manchar a cor do bordado.",
      "5. Em ambientes hospitalares, os íons de prata rompem a parede celular de bactérias em contato com a linha.",
      "6. Sob sol escaldante em alto-mar, os aditivos anti-UV absorvem a radiação sem permitir que as cores desbotem.",
      "7. O bordado permanece higiênico, brilhante e intacto por mais de 10 anos de exposição extrema."
    ],
    "mainTypes": [
      "Linhas Hidrofóbicas e Anti-Manchas (Para uniformes de garçons, chefs de cozinha e toalhas de mesa)",
      "Linhas Antimicrobianas e Antivirais com Prata (Para jalecos médicos, roupas de UTI e máscaras)",
      "Linhas Náuticas Solares de PTFE / Poliéster UV (Para velas de barco, toldos externos e bancos automotivos)"
    ],
    "characteristics": [
      "Repelência instantânea a líquidos, óleos, graxas e sujeiras pesadas",
      "Proteção biológica ativa contra proliferação de odores de suor e bactérias patogênicas",
      "Resistência incomparável contra desbotamento solar, maresia e cloro de piscinas",
      "Manutenção das propriedades funcionais mesmo após mais de 50 lavagens industriais a 90°C"
    ],
    "limitations": [
      "Custo por cone cerca de 40% a 80% superior ao das linhas de poliéster convencionais",
      "Exige que a entretela e o tecido base também possuam compatibilidade com o uso técnico final",
      "Não passar a ferro acima de 150°C para preservar a integridade da camada de nanopolímeros"
    ],
    "numberingSystem": [
      "Grau de Solidez UV: 8 / 8 (Máximo)",
      "Eficiência Antibacteriana: > 99,9%",
      "Título Disponível: 40wt e 30wt"
    ],
    "advantages": [
      "✔ Permite conquistar contratos corporativos nobres em hospitais, clínicas e iates de luxo",
      "✔ Garante que bordados em uniformes de restaurantes não fiquem encardidos com molhos e gorduras",
      "✔ Agrega altíssimo valor tecnológico ao produto final vendido pelo ateliê"
    ],
    "commonErrors": [
      "❌ Lavar a peça com alvejantes à base de cloro puro concentrado, que degradam o banho de nanopartículas",
      "❌ Borda toldos náuticos com linha comum de bordar, que apodrece e esfarela com 6 meses de sol",
      "❌ Cobrar o preço de um bordado comum ao utilizar fios técnicos certificados de alta performance"
    ],
    "voceSabia": "O efeito hidrofóbico da nanotecnologia foi copiado diretamente da folha da flor de Lótus (efeito lótus da natureza): a superfície da folha possui milhões de micro-pilares nanométricos de cera que fazem as gotas de água rolarem como bolinhas de gude levando toda a sujeira embora!",
    "curiosidadeTecnica": "Um grama de nanopartículas de prata aplicadas na linha de bordado possui uma área superficial equivalente a dois campos de futebol inteiros, garantindo contato instantâneo com qualquer microrganismo que pouse no bordado.",
    "dicaArtrelados": "Ao fechar pedidos de jalecos para médicos, dentistas e clínicas de estética, ofereça o diferencial do 'Bordado Antimicrobiano com Íons de Prata': profissionais de saúde adoram a ideia de ter um logotipo que não acumula bactérias no hospital e pagam com muito gosto um valor diferenciado pelo serviço!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Linha Poliéster Comum",
        "Linha Nanotecnológica Antimicrobiana/UV"
      ],
      "rows": [
        [
          "Repelência a Líquidos e Manchas",
          "Baixa (absorve água e molhos)",
          "Total (superhidrofóbica tipo Lótus)"
        ],
        [
          "Ação Antibacteriana",
          "Nula (bactérias proliferam no suor)",
          "99,9% de eliminação ativa por íons de prata"
        ],
        [
          "Resistência ao Sol / UV Náutico",
          "Desbota e enfraquece em 1-2 anos",
          "Garantia de mais de 10 anos sem desbotar"
        ],
        [
          "Mercado Alvo",
          "Moda e promocional comum",
          "Hospitais, náutica, gastronomia e luxo"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 850 PPM",
      "needleType": "75/11 ou 80/12 SES / SAN 1",
      "stabilizer": "Compatível com a aplicação (ex: entretela lavável resistente)",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm padrão"
    },
    "applications": [
      "Jalecos médicos, aventais cirúrgicos e fardamentos de equipes de enfermagem e odontologia",
      "Estofamentos de iates, lanchas, velas náuticas e capas protetoras de embarcações",
      "Uniformes de alta gastronomia para chefs, cozinheiros e baristas profissionais",
      "Toldos externos comerciais, guarda-sóis de piscina e bancos automotivos conversíveis"
    ],
    "troubleshootingTips": [
      "Armazene os cones em sacos plásticos fechados para não contaminar a superfície nanométrica com pó do ateliê",
      "Utilize linhas de bobina de poliéster de boa qualidade para acompanhar a durabilidade da linha de cima",
      "Forneça um tag informativo ao cliente explicando as instruções especiais de lavagem do produto"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Linha de Poliéster Trilobal",
      "Linhas Resistentes a Cloro e Alvejantes",
      "Numeração e Título Métrico de Linha",
      "Design, Teoria & Arte"
    ],
    "tags": [
      "n-092",
      "nanotecnologia",
      "antimicrobiana",
      "fio hidrofobico",
      "protecao uv",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "AMANN Group Technical Threads. Silver-Tech & Hydrophobic Nano-Coating Engineering. Bönnigheim, 2021.",
      "PARRISH, Gail. Nanotechnology in Technical Embroidery: Antimicrobial Silver, Hydrophobic Barriers and Solar UV Stability. Cincinnati, 2022."
    ],
    "practicalExercise": "Pingue uma gota d'água em cima de um bordado feito com linha comum e veja como a água é absorvida devagarzinho. Agora imagine pingar uma gota em um fio com nanotecnologia hidrofóbica: a gota fica redondinha como uma pérola e rola para fora sem molhar nem um único fiozinho!",
    "quickSummary": "Linhas modernas com nanotecnologia que não molham, não mancham, matam bactérias e não desbotam no sol.",
    "beginnerExplanation": "São linhas de bordar de alta tecnologia tratadas com partículas minúsculas que não deixam líquidos entrarem (como água, café ou sangue), combatem bactérias em roupas de médicos e não desbotam mesmo debaixo do sol forte da praia!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-093-normalizacao-de-arquivos-de-bordado-dst-vs-formatos-expandidos-e-condensados",
    "code": "N-093",
    "term": "Normalização de Arquivos de Bordado (DST vs. Formatos Expandidos e Condensados) (DST Standardization, Condensed vs Expanded)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Digitalização & Software",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim norma (regra / padrão universal) e da sigla DST (Data Stitch Tajima, padrão binário universal de coordenadas de bordado criado pela Tajima em 1982).",
    "summary": "Diferenciação estrutural e boas práticas de conversão entre arquivos condensados/editáveis (EMB, PES, ART) e arquivos expandidos/de máquina pura (DST, EXP, JEF), garantindo integridade de pontos e densidades.",
    "definition": "Normalização de Arquivos de Bordado (Embroidery File Architecture: Condensed Outline vs. Expanded Machine Stitch Code) é a distinção técnica fundamental entre os dois formatos de dados que governam o ecossistema do bordado computadorizado. Arquivos Condensados (Outline / Base Vetorial como .EMB, .ART, .JAN) armazenam formas geométricas vetoriais, tipos de ponto paramétricos e regras de densidade inteligente, permitindo redimensionar o desenho sem perder a densidade. Já os Arquivos Expandidos (Machine Stitch Files como .DST, .EXP, .PES final, .JEF) contêm apenas uma lista rígida de coordenadas binárias X/Y de cada agulhada individual e códigos de comando (Ponto, Salto, Corte, Parada), sem memória de densidade.",
    "technicalDetails": "Estrutura do arquivo DST: Cabeçalho de 512 bytes em ASCII seguido por blocos de 3 bytes por ponto (codificação binária ternária). Limite de deslocamento máximo por comando: +12,1 mm / -12,1 mm por agulhada (valores maiores viram múltiplos saltos). Capacidade de cores no DST: Não armazena códigos de cor reais (apenas comando genérico de Stop).",
    "construction": [
      "Cabeçalho com metadados: Nome da Matriz, Quantidade de Pontos, Dimensões X/Y e Saltos",
      "Tabela de vetores de deslocamento delta X e delta Y codificados em números inteiros",
      "Bits de controle de ação mecânica: 00 (Ponto Normal), 01 (Ponto de Salto), 10 (Comando de Stop/Troca de Cor)",
      "Código de fim de arquivo com comando de parada total (End of Data / 0x1A)",
      "Arquivo de visualização complementar (.JPG / .PNG / .PDF de folha de produção com sequência de cores)"
    ],
    "howItWorks": [
      "1. O programador cria a matriz em software nativo e salva o arquivo mestre em formato condensado (.EMB).",
      "2. Ao finalizar, exporta o arquivo de produção para a máquina no padrão industrial expandido (.DST).",
      "3. O arquivo .DST é transferido para o pen drive ou enviado via rede Wi-Fi para o painel da máquina de bordar.",
      "4. O computador da máquina lê a lista de agulhadas sem precisar fazer cálculos pesados de geometria.",
      "5. O operador configura no painel a ordem física das cores das linhas conforme a ficha técnica impressa.",
      "6. A máquina executa exatamente as coordenadas gravadas no arquivo com precisão de 0,1 mm.",
      "7. Se for necessário alterar o tamanho da matriz no futuro, o programador abre o .EMB original (e nunca o .DST) para manter a densidade perfeita."
    ],
    "mainTypes": [
      "Arquivos Condensados / Vetoriais Editáveis (.EMB do Wilcom, .ART da Bernina, .PES mestre da Brother)",
      "Padrão Universal Industrial Expandido (.DST da Tajima - O formato aceito em 100% das máquinas industriais)",
      "Formatos Expandidos Domésticos e Semi-Industriais (.PES, .JEF, .HUS, .VIP, .XXX com paleta de cor embutida)"
    ],
    "characteristics": [
      "Compatibilidade universal do formato .DST em qualquer máquina de bordar do planeta",
      "Execução rápida e leve que não sobrecarrega a memória do computador da máquina",
      "Arquivos condensados permitem redimensionar em 200% recalculando todos os pontos automaticamente",
      "Arquivos expandidos mantêm a quantidade fixa de pontos mesmo se você tentar esticar o desenho"
    ],
    "limitations": [
      "Nunca aumente ou diminua o tamanho de um arquivo .DST no painel da máquina em mais de 10% (estraga a densidade)",
      "O formato .DST não salva as cores reais da linha (sempre abre com cores aleatórias no software)",
      "A conversão de .DST de volta para .EMB gera objetos aproximados sem a perfeição do vetor original"
    ],
    "numberingSystem": [
      "Resolução de Coordenada: 0,1 mm (1 décimo de milímetro)",
      "Tamanho do Cabeçalho DST: 512 bytes",
      "Limite Seguro de Escala em DST: ± 5% a 10%"
    ],
    "advantages": [
      "✔ Garante que sua matriz rode em qualquer máquina de bordar do mundo sem erros de leitura",
      "✔ Preserva os arquivos mestres editáveis (.EMB) organizados para fazer alterações rápidas de clientes",
      "✔ Evita matrizes danificadas com pontos embolados causadas por redimensionamento indevido no painel"
    ],
    "commonErrors": [
      "❌ Reduzir um arquivo .DST de 10 cm para 5 cm no painel da máquina, criando uma placa de ferro que quebra agulha",
      "❌ Salvar a matriz apenas em .DST e jogar fora o arquivo .EMB editável original",
      "❌ Achar que o arquivo .DST está com defeito porque abriu na tela do computador com cores diferentes"
    ],
    "voceSabia": "O formato .DST foi criado em 1982 pela fabricante japonesa Tajima para armazenar desenhos de bordado em fitas de papel perfuradas (fitas de teletipo de 8 canais) antes mesmo de existirem disquetes ou computadores pessoais!",
    "curiosidadeTecnica": "Cada ponto no formato .DST ocupa exatamente 3 bytes de memória; isso significa que uma matriz rica de 10.000 pontos tem um tamanho de arquivo minúsculo de cerca de 30 kilobytes, rodando instantaneamente até nos microprocessadores mais simples.",
    "dicaArtrelados": "Tenha como regra sagrada no seu ateliê: NUNCA redimensione matriz em formato .DST no painel da máquina nem no computador! Se o cliente pedir para mudar o tamanho de um logotipo, abra o arquivo original .EMB ou .PES mestre no programa de edição, mude o tamanho lá para o software recalcular a densidade certinha e só depois exporte o novo .DST para a máquina: suas matrizes serão sempre perfeitas!",
    "comparisonTable": {
      "headers": [
        "Característica",
        "Arquivo Condensado (.EMB / .ART)",
        "Arquivo Expandido de Máquina (.DST / .EXP)"
      ],
      "rows": [
        [
          "Estrutura Interna",
          "Vetores, curvas matemáticas e densidade",
          "Lista fixa de coordenadas X/Y de cada ponto"
        ],
        [
          "Redimensionamento",
          "Perfeito (recalcula pontos automaticamente)",
          "Crítico (mantém pontos fixos, deforma densidade)"
        ],
        [
          "Informação de Cores",
          "Paleta de cores reais e marcas de linha",
          "Não salva cor (apenas comando genérico de parada)"
        ],
        [
          "Finalidade Principal",
          "Edição, criação e arquivo mestre de matriz",
          "Costura direta no computador da máquina de bordar"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "Adequada ao tecido",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Padrão",
      "density": "Gerenciada no arquivo original condensado"
    },
    "applications": [
      "Padronização de arquivos para envio de matrizes a fábricas terceirizadas e ateliês parceiros",
      "Organização do acervo mestre digital de clientes e logotipos corporativos",
      "Programação de matrizes para máquinas industriais monocabeça e multicabeças",
      "Conversão segura de matrizes entre diferentes marcas de máquinas (Brother, Janome, Tajima, Barudan)"
    ],
    "troubleshootingTips": [
      "Se uma matriz .DST não abrir no painel, certifique-se de que o pen drive está formatado em FAT32",
      "Guarde os arquivos mestres .EMB em uma pasta de backup na nuvem com o nome do cliente",
      "Imprima ou envie sempre a ficha de produção em PDF junto com o arquivo .DST para o operador saber as cores"
    ],
    "relatedTerms": [
      "Digitalização & Software",
      "Densidade de Ponto",
      "Ponto Satim / Ponto Cheio",
      "Compensação de Repuxo",
      "Nivelamento de Ângulos de Ponto"
    ],
    "tags": [
      "n-093",
      "dst",
      "arquivos de bordado",
      "emb",
      "formatos de matriz",
      "digitalizacao e software",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Technical File Format Specifications. DST Binary Architecture & Stitch Coordinate Standards. Nagoya, 2021.",
      "PARRISH, Gail. Embroidery File Architectures: Condensed Object Geometry vs. Expanded Stitch Data. Cincinnati, 2022."
    ],
    "practicalExercise": "Abra um arquivo .DST no seu programa de matriz e tente aumentar o tamanho em 50%: veja como os pontos ficaram super espaçados e ralos. Agora faça o mesmo em um arquivo .EMB: veja como o software coloca novos pontos para manter o bordado cheio e fechadinho. Entendeu por que o arquivo condensado é tão importante?",
    "quickSummary": "A diferença entre o arquivo mestre editável e o arquivo pronto que a máquina de bordar lê para costurar.",
    "beginnerExplanation": "O arquivo .EMB é como a receita do bolo onde você pode mudar os ingredientes e o tamanho da forma sem errar; já o arquivo .DST é o bolo pronto que a máquina vai costurar: por isso, para mudar o tamanho do bordado, a gente sempre mexe no arquivo mestre para a receita continuar perfeita!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-094-nivelamento-de-altura-e-curso-do-calcador-em-matrizes-mistas-com-lantejoulas-e-cordao",
    "code": "N-094",
    "term": "Nivelamento de Altura e Curso do Calcador em Matrizes Mistas com Lantejoulas e Cordão (Presser Foot Stroke in Sequin & Cording Attachments)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (nivelar) e pressura (calcador / sapata de compressão têxtil) e do francês paillette / cordon (lantejoula / fita decorativa).",
    "summary": "Protocolo mecânico de alinhamento e calibração de altura do calcador independente e curso vertical em dispositivos especiais acoplados de lantejoula simples/dupla (Sequin Device) e cordão rotativo (Cording Device).",
    "definition": "Nivelamento de Altura e Curso do Calcador em Matrizes Mistas com Lantejoulas e Cordão (Independent Presser Foot Height & Stroke Calibration for Sequin & Cording Attachments) é o ajuste de precisão que calibra a folga dinâmica entre a base inferior do calcador tubular e a chapa de agulha quando operando com dispositivos automáticos acoplados de aplicação de lantejoulas (Sequin Devices de 2 a 9 mm) ou aplicadores de fitas e cordões grossos. Como a lantejoula e o cordão possuem espessuras volumétricas rígidas que se somam ao tecido, o calcador deve ser elevado milimetricamente (para 1,2 a 1,8 mm acima da superfície do tecido) para segurar o tecido sem amassar, quebrar ou riscar as lantejoulas durante a descida da agulha.",
    "technicalDetails": "Altura do calcador no ponto morto inferior: 1,2 mm a 1,8 mm (com lantejoulas de 0,2 mm de espessura). Curso vertical do calcador: 3,5 mm a 4,5 mm. Sincronismo do alimentador de lantejoula: Acionamento pneumático ou motor de passo a 120° do ciclo de rotação. Folga do bocal aplicador de cordão: Diâmetro do cordão + 0,3 mm.",
    "construction": [
      "Calcador especial tubular com base chanfrada e abertura ampliada para passagem de lantejoulas",
      "Dispositivo aplicador de lantejoulas (Sequin Feeder) acoplado lateralmente na primeira agulha do cabeçote",
      "Lâmina de corte e faca micrométrica de separação de lantejoulas em fita contínua",
      "Haste de regulagem de altura do calcador com parafuso de travamento micrométrico",
      "Sensor de presença de rolo de lantejoulas e válvula solenoide de controle pneumático"
    ],
    "howItWorks": [
      "1. Instala-se o dispositivo de lantejoulas ou guia de cordão no cabeçote designado da máquina.",
      "2. Gira-se o volante manualmente até a agulha atingir o ponto morto inferior (180°).",
      "3. Solta-se o parafuso da haste do calcador independente da agulha do dispositivo.",
      "4. Insere-se um calibre de lâmina de 1,5 mm entre o calcador e a chapa de agulha com uma lantejoula de teste.",
      "5. Ajusta-se o calcador para encostar suavemente sobre o calibre e trava-se o parafuso firmemente.",
      "6. No software, programa-se o ponto de fixação em formato de estrela, Y ou cruz sobre a lantejoula.",
      "7. A máquina borda em velocidade de 650 a 800 PPM, dispensando e costurando lantejoulas brilhantes com fixação perfeita."
    ],
    "mainTypes": [
      "Dispositivo de Lantejoula Simples (Aplica lantejoulas de 3 mm a 7 mm com alimentação contínua)",
      "Dispositivo de Lantejoula Dupla / Sobreposta (Permite alternar entre duas cores ou tamanhos na mesma matriz)",
      "Dispositivo de Cordão Rotativo e Fitas (Cording Device para contornos em relevo com fios grossos)"
    ],
    "characteristics": [
      "Combinação de bordado tradicional de satim com brilho espetacular de lantejoulas e fitas",
      "Prevenção total de riscos, trincas ou quebras nas lâminas plásticas das lantejoulas",
      "Alimentação sincronizada em alta velocidade que aplica até 800 lantejoulas por minuto",
      "Acabamento luxuoso de padrão internacional para figurinos de carnaval, vestidos de festa e moda praia"
    ],
    "limitations": [
      "Exige agulhas adequadas de ponta arredondada (SES) para não rachar o furo central da lantejoula",
      "Requer velocidade moderada (600 a 750 PPM) para garantir a estabilidade da alimentação mecânica",
      "A fita de lantejoulas deve ter furação e diâmetro rigorosamente calibrados de fábrica"
    ],
    "numberingSystem": [
      "Altura do Calcador: 1,5 mm no ponto morto inferior",
      "Diâmetros Comuns de Lantejoulas: 3 mm, 5 mm, 7 mm e 9 mm",
      "Velocidade de Trabalho: 650 a 750 PPM"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor comercial a vestidos de gala, noivas, fantasias e moda de luxo",
      "✔ Elimina o trabalho manual demorado de pregar lantejoulas e cordões à mão",
      "✔ Garante que as lantejoulas fiquem 100% alinhadas, planas e com fixação ultra-resistente"
    ],
    "commonErrors": [
      "❌ Deixar o calcador muito baixo (altura normal de tecido plano), esmagando e quebrando as lantejoulas no meio",
      "❌ Deixar o calcador muito alto (> 2,5 mm), permitindo que o tecido suba junto com a agulha (flagging)",
      "❌ Usar linha de baixa qualidade que arrebenta ao passar pela borda cortante do furo da lantejoula"
    ],
    "voceSabia": "A palavra 'Lantejoula' (ou 'Paillette' em francês) vem das antigas moedas de ouro romanas que eram costuradas nas vestes dos generais para demonstrar riqueza e brilhar sob a luz do sol durante os desfiles de vitória!",
    "curiosidadeTecnica": "O tempo de alimentação de uma lantejoula entre uma agulhada e outra a 750 PPM é de apenas 0,04 segundo; nesse intervalo mínimo, a lingueta mecânica precisa avançar exatamente uma unidade de lantejoula com tolerância de 0,05 milímetro.",
    "dicaArtrelados": "Ao bordar matrizes com lantejoulas, use linha de poliéster 40wt de alta tenacidade ou fio monofilamento de poliamida transparente e regule o calcador para passar a 1,5 mm da chapa: a lantejoula corre suave, não racha e fica com um brilho espelhado deslumbrante!",
    "comparisonTable": {
      "headers": [
        "Ajuste do Calcador",
        "Comportamento das Lantejoulas",
        "Qualidade do Ponto",
        "Risco de Quebra"
      ],
      "rows": [
        [
          "Nivelado a 1,5 mm (Correto)",
          "Passam lisas e sem marcas",
          "Ponto firme e laçada perfeita",
          "Zero"
        ],
        [
          "Muito Baixo (< 0,8 mm)",
          "Racham, riscam e quebram",
          "Deforma a lâmina de plástico",
          "Alto (agulha bate na lasca)"
        ],
        [
          "Muito Alto (> 2,5 mm)",
          "Ficam frouxas e soltas",
          "Ponto frouxo e falhas de laçada",
          "Médio (laçada deformada)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "600 - 750 PPM",
      "needleType": "DBxK5 75/11 SES com acabamento polido",
      "stabilizer": "Entretela estável adequada ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Programada nos pontos de fixação da matriz"
    },
    "applications": [
      "Vestidos de noiva de alta costura, vestidos de debutante e trajes de gala",
      "Fantasias de luxo para escolas de samba, carnaval e companhias de dança",
      "Moda feminina jovem, jaquetas jeans estilizadas e camisetas de festa",
      "Moda praia de luxo, saídas de banho e biquínis com detalhes cintilantes"
    ],
    "troubleshootingTips": [
      "Se a lantejoula estiver sendo cortada no meio, ajuste a posição da lâmina de corte do dispositivo",
      "Verifique se o rolo de lantejoulas está desenrolando livre sem nós no suporte lateral",
      "Mantenha o trilho de alimentação de lantejoulas limpo de poeira e estática com um pincel antiestático"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Calcador da Máquina de Bordar",
      "Dispositivos Especiais (Sequin & Cording)",
      "Ponto Satim / Ponto Cheio",
      "Manutenção Preventiva"
    ],
    "tags": [
      "n-094",
      "lantejoulas",
      "sequin device",
      "cordao",
      "calcador",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TAJIMA Sequin & Twin Sequin Device Technical Manual. Mechanics, Stroke & Timing. Nagoya, 2021.",
      "PARRISH, Gail. Special Attachments in High-Speed Embroidery: Sequin Feeder Tuning and Presser Foot Stroke Dynamics. Cincinnati, 2022."
    ],
    "practicalExercise": "Abaixe a barra de agulha com a mão e coloque uma régua ao lado do pezinho (calcador) para medir quantos milímetros ele fica da chapa de ferro. Veja como no bordado comum ele fica bem pertinho (1 mm), mas para lantejoulas precisamos levantar para 1,5 mm para dar espaço do brilho passar sem amassar!",
    "quickSummary": "Regulagem de altura do pezinho da máquina para aplicar lantejoulas e fitas sem quebrar nem amassar o brilho.",
    "beginnerExplanation": "Quando a máquina usa o acessório de costurar lantejoulas brilhantes, o pezinho precisa ficar um pouquinho mais alto do que o normal para não esmagar as pecinhas de plástico na hora em que a agulha desce, mantendo o brilho lindo e sem quebrar nada!",
    "updatedAt": "2026-08-29"
  }
];

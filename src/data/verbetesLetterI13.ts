import { Verbete } from "../types";

export const VERBETES_LETTER_I_PART13: Verbete[] = [
  {
    "id": "i-076-inibicao-pontos-curtos-short-stitch-filtering",
    "code": "I-076",
    "letter": "I",
    "term": "Inibição de Pontos Curtos e Filtragem de Micropontos (Short Stitch Filtering & Elimination Algorithm)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação e Software",
    "origin": "Criado nos anos 1980 pela Wilcom e Tajima para contornar a limitação de resolução mecânica dos motores de passo e evitar o picotamento do tecido por excesso de penetrações no mesmo milímetro.",
    "summary": "Filtro computacional essencial nos softwares de matrizaria que elimina ou alonga automaticamente pontos menores que 0,3 mm a 0,4 mm, evitando quebras de agulha e acúmulo de nós.",
    "definition": "A Inibição de Pontos Curtos (Short Stitch Filter / Minimum Stitch Length Elimination) é um algoritmo matemático de pós-processamento e geração de matrizes que analisa a distância euclidiana entre coordenadas X/Y consecutivas. Quando um ponto gerado possui comprimento inferior ao limite físico seguro da agulha (geralmente abaixo de 0,35 mm), o algoritmo remove o nó intermediário ou o redistribui na malha adjacente. Isso impede que a agulha atue como uma broca perfuradora, protegendo o olho da agulha contra superaquecimento e eliminando o temido efeito 'ninho de pássaro' na lançadeira.",
    "technicalDetails": "O limite de corte padrão é configurado entre 0,25 mm e 0,40 mm. Em curvas acentuadas e cantos agudos, a supressão de micropontos reduz a densidade de impacto em até 65%, diminuindo o atrito cíclico da linha no canalete da agulha e mantendo a velocidade de cruzeiro do pantógrafo estável acima de 900 PPM sem interrupções.",
    "construction": [
      "Varredura sequencial de blocos de coordenadas binárias (DST, PES, EXP)",
      "Cálculo de delta de deslocamento: d = sqrt(ΔX² + ΔY²)",
      "Supressão condicional de nós com d < 0,30 mm em pontos corridos e tatami",
      "Preservação seletiva em nós de amarração terminal (Tie-Off Lock)",
      "Redirecionamento vetorial do ponto subsequente para manter a fidelidade visual do contorno"
    ],
    "howItWorks": [
      "1. O software digitalizador processa as formas vetoriais e gera os pontos preliminares.",
      "2. O filtro de micropontos faz uma varredura detectando todas as distâncias menores que 0,35 mm.",
      "3. Os pontos redundantes e excessivamente curtos são deletados ou fundidos com o ponto vizinho.",
      "4. O arquivo exportado para a máquina roda suave, com menos batidas secas e sem travar a lançadeira."
    ],
    "mainTypes": [
      "Filtro de Limpeza Global de Exportação (Aplica o corte de micropontos em todo o arquivo final)",
      "Inibição Adaptativa de Cantos (Atua especificamente no vértice interno de curvas em ponto cheio)",
      "Filtro de Conversão de Formatos Antigos (Limpeza de matrizes legadas digitalizadas manualmente)"
    ],
    "characteristics": [
      "Redução de 5% a 15% na quantidade desnecessária de pontos da matriz",
      "Aumento significativo da vida útil da ponta da agulha e da chapa de ponto",
      "Acabamento mais macio no avesso do bordado, sem pelotas duras de linha"
    ],
    "limitations": [
      "Se configurado acima de 0,6 mm, pode distorcer pontas muito finas de letras pequenas",
      "Não deve ser aplicado sobre pontos de amarração intencionais de três batidas"
    ],
    "numberingSystem": [
      "Comprimento Mínimo Recomendado: 0,30 mm a 0,40 mm",
      "Comprimento Crítico de Risco: < 0,20 mm (Gera corte de tecido)",
      "Economia Média de Pontos: 8% a 12% do total da matriz"
    ],
    "advantages": [
      "✔ Diminui drasticamente a quebra de agulhas finas 65/9 e 75/11",
      "✔ Evita que o tecido seja furado e rasgado em curvas fechadas",
      "✔ Proporciona um som de máquina muito mais suave e ritmado durante a produção"
    ],
    "commonErrors": [
      "❌ Desativar o filtro achando que o bordado vai perder definição (o resultado é agulha quebrando)",
      "❌ Definir o filtro muito alto (ex: 0,8 mm) e perder detalhes em monogramas pequenos",
      "❌ Esquecer de ativar a limpeza ao converter arquivos antigos em formato expandido DST"
    ],
    "voceSabia": "Uma agulha batendo 5 vezes no mesmo ponto de 0,2 mm gera calor suficiente para amolecer a linha de poliéster em menos de 1 segundo, provocando o rompimento térmico do filamento!",
    "curiosidadeTecnica": "Nas máquinas antigas de cartão perfurado, os micropontos travavam as alavancas mecânicas de leitura, sendo a razão pela qual os primeiros softwares criaram essa rotina de exclusão obrigatória.",
    "dicaArtrelados": "Ao salvar ou exportar sua matriz no programa de bordado, certifique-se de que a opção 'Remover Pontos Curtos' está configurada para 0,35 mm! Isso deixa seus bordados perfeitos, sem nós empastados atrás do tecido e sem quebrar agulha!",
    "applications": [
      "Limpeza e otimização de matrizes antes da produção seriada",
      "Bordados em malhas finas de bebê e tecidos delicados de seda",
      "Digitalização de fontes caligráficas com curvas fechadas",
      "Redução do tempo total de costura em ateliês de grande escala"
    ],
    "troubleshootingTips": [
      "Se a agulha estiver quebrando sempre na mesma curva de uma letra pequena, aumente o filtro de pontos curtos para 0,40 mm.",
      "Se o avesso está formando uma bolota dura de nós, verifique se a matriz não possui micropontos acumulados.",
      "Se os cantos finos de um escudo ficaram arredondados, reduza o filtro de 0,50 mm para 0,30 mm."
    ],
    "relatedTerms": [
      "Comprimento de Ponto",
      "Ponto Cheio (Satin)",
      "Densidade de Ponto",
      "Ninho de Pássaro (Bird Nesting)",
      "Otimização de Matriz"
    ],
    "tags": [
      "inibicao-pontos-curtos",
      "micropontos",
      "short-stitch",
      "otimizacao",
      "software",
      "quebra-agulha",
      "matrizaria"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. EmbroideryStudio Advanced Parameter Reference. Sydney: Wilcom, 2023. TAJIMA GROUP. Stitch Processing and Machine Performance Guidelines. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. EmbroideryStudio Advanced Parameter Reference. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. Stitch Processing and Machine Performance Guidelines. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Engenharia de Otimização e Filtragem de Malha em Bordado Digital. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Abra um arquivo de bordado no seu software e use a ferramenta de estatísticas para contar quantos pontos têm menos de 0,3 mm. Aplique o filtro de remoção de pontos curtos e veja quantos milhares de furos desnecessários foram eliminados sem mudar nada no visual do desenho!",
    "quickSummary": "É o recurso do programa que apaga pontinhos minúsculos e inúteis para não quebrar a agulha nem estragar o tecido.",
    "beginnerExplanation": "Às vezes o programa de computador coloca pontinhos tão pequenininhos que a agulha bate várias vezes quase no mesmo lugar. A inibição de pontos curtos limpa esses pontinhos bobos para a máquina costurar macio e sem furar a roupa!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Filtro de Ponto Curto: 0,30 mm a 0,38 mm"
    }
  },
  {
    "id": "i-077-insercao-ponto-crivo-calado-richelieu",
    "code": "I-077",
    "letter": "I",
    "term": "Inserção de Ponto Crivo e Calado Richelieu (Richelieu Cutwork & Openwork Bridge Digitizing)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Criado na França no século XVII sob o patrocínio do Cardeal Richelieu para substituir as caras rendas de bilros italianas por bordados de corte sobre linho fino.",
    "summary": "Técnica de matrizaria vazada onde a máquina costura hastes suspensas (pontes) e bordas em ponto cheio reforçado, permitindo o recorte do tecido sem que a peça desfie.",
    "definition": "A Inserção de Ponto Crivo e Calado Richelieu (Computerized Cutwork Bridges & Richelieu Lace) é a digitalização estruturada de áreas de bordado vazado. Consiste na programação de três etapas mecânicas sucessivas: primeiro, uma costura de demarcação e travamento perimetral; segundo, a costura de pontes ou travessas tecidas no ar (Richelieu Bars com Picots decorativos) que unem as margens vazadas; e terceiro, uma cobertura de acabamento em ponto cheio denso (Satin) com borda chanfrada de proteção. O tecido sob os vãos é posteriormente recortado com tesoura curva de precisão ou perfurado por agulhas de corte automático (Cutwork Needles).",
    "technicalDetails": "A costura de ancoragem requer ponto corrido triplo (Bean Stitch) a 0,2 mm da linha de corte. As pontes suspensas devem possuir largura mínima de 1,2 mm a 1,8 mm com densidade de 0,35 mm. A coluna de ponto cheio de acabamento deve cobrir uma largura de 2,5 mm a 3,5 mm com compensação de repuxo de +0,4 mm para blindar a orla do tecido contra lavagens repetidas.",
    "construction": [
      "Costura de demarcação e assentamento da entretela solúvel (Basting Run)",
      "Costura de amarração perimetral dupla na borda interna (Anchor Underlay)",
      "Traçado das pontes aéreas de sustentação estrutural (Richelieu Connecting Bars)",
      "Parada programada (Stop Command) para corte manual do tecido ou ciclo de agulha de corte",
      "Cobertura final em Ponto Cheio largo com arremate perimetral espesso"
    ],
    "howItWorks": [
      "1. A máquina borda a linha guia de corte e as pontes de união no linho sobre a entretela hidrossolúvel.",
      "2. A máquina para automaticamente com a agulha levantada.",
      "3. A bordadeira recorta o tecido do centro das janelas com muito cuidado usando uma tesourinha curva.",
      "4. Ao retomar, a máquina borda o ponto cheio largo sobre as bordas cortadas e finaliza as rendas aéreas."
    ],
    "mainTypes": [
      "Richelieu Clássico com Pontes Simples (Para toalhas de linho e jogos de mesa nobres)",
      "Crivo Geométrico Calado com Picots (Para cortinas finas e enxovais de bebê)",
      "Richelieu Automático com Agulhas de Faca (Para produção industrial contínua sem recorte manual)"
    ],
    "characteristics": [
      "Visual nobre e aristocrático de renda embutida diretamente no tecido",
      "Alta resistência mecânica mesmo com áreas amplamente vazadas",
      "Valorização extrema do produto final no segmento de luxo"
    ],
    "limitations": [
      "Exige uso obrigatório de entretela hidrossolúvel espessa (80g) para sustentar as pontes no ar",
      "O recorte manual exige habilidade para não cortar a linha da costura de suporte"
    ],
    "numberingSystem": [
      "Largura do Ponto Cheio de Borda: 2,5 mm a 3,5 mm",
      "Largura das Pontes de Ligação: 1,2 mm a 1,8 mm",
      "Densidade da Cobertura: 0,32 mm a 0,38 mm"
    ],
    "advantages": [
      "✔ Transforma tecidos simples em obras de arte vendidas a preços de alta costura",
      "✔ Não desfia após a lavagem quando digitalizado com costura de ancoragem correta",
      "✔ Permite criar detalhes florais rendados e transparências belíssimas"
    ],
    "commonErrors": [
      "❌ Cortar o tecido antes da máquina fazer a costura de travamento (o tecido desfia todo)",
      "❌ Usar entretela de papel rasgável (fica impossível limpar os buraquinhos do crivo)",
      "❌ Fazer as pontes de sustentação muito finas (elas quebram ao lavar)"
    ],
    "voceSabia": "O Cardeal Richelieu proibiu a importação de rendas italianas na França para conter a fuga de ouro do país, incentivando as bordadeiras francesas a criarem essa técnica que até hoje leva o seu nome!",
    "curiosidadeTecnica": "Nas agulhas de corte automático industriais, quatro agulhas com lâminas em ângulos de 0°, 45°, 90° e 135° picotam o tecido a 800 PPM, dispensando totalmente o uso de tesouras no ateliê.",
    "dicaArtrelados": "Ao bordar Richelieu em toalhas de linho ou percal: coloque sempre duas camadas de plástico hidrossolúvel bem esticadas no bastidor! Assim, quando você cortar o tecido, as pontes continuam firmes no plástico e a máquina finaliza o acabamento sem engasgar!",
    "applications": [
      "Toalhas de mesa nobres, caminhos de mesa e jogos americanos de linho",
      "Enxovais de casamento e lençóis de alto padrão em algodão egípcio",
      "Vestidos de noiva, véus e roupas cerimoniais de batizado",
      "Almofadas clássicas e cortinas rendadas de luxo"
    ],
    "troubleshootingTips": [
      "Se a borda recortada está soltando fios após lavar, aumente a largura do ponto cheio de 2,5 para 3,2 mm.",
      "Se a tesourinha acidentalmente picotou uma ponte de linha, repare com ponto manual e passe um pingo de selador de costura.",
      "Se as pontes ficaram moles e enrugadas, aumente a tensão da entretela hidrossolúvel no bastidor."
    ],
    "relatedTerms": [
      "Bordado Vazado (Cutwork)",
      "Entretela Hidrossolúvel",
      "Agulha de Corte",
      "Picot",
      "Ponto Cheio (Satin)"
    ],
    "tags": [
      "richelieu",
      "crivo",
      "calado",
      "vazado",
      "renda",
      "linho",
      "alta-costura",
      "luxo"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "DMC CREATIVE LIBRARY. The Art of Richelieu and Cutwork Embroidery. Mulhouse: DMC, 2022. WILCOM INTERNATIONAL. Openwork, Richelieu and Cutwork Digitizing. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "DMC CREATIVE LIBRARY. The Art of Richelieu and Cutwork Embroidery. Mulhouse: DMC, 2022.",
      "WILCOM INTERNATIONAL. Openwork, Richelieu and Cutwork Digitizing. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Manual de Digitalização e Execução de Bordado Richelieu Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Crie no software um coração de 50 mm com duas travessas no meio. Programe uma parada de máquina, recorte o tecido de dentro do coração com tesoura de ponta curva sobre entretela hidrossolúvel e termine com ponto cheio nas bordas. Lave na água morna e veja nascer uma linda renda Richelieu!",
    "quickSummary": "É a técnica que faz bordados vazados com janelinhas recortadas no tecido e sustentadas por delicadas pontes rendadas de linha.",
    "beginnerExplanation": "Sabe aquelas toalhas de linho antigas e elegantes que têm desenhos vazados parecendo renda? Isso é o Richelieu! A máquina borda as bordinhas e as pontinhas de sustentação, a gente corta o tecido de dentro com a tesourinha e ela fecha tudo com um acabamento perfeito!",
    "recommendedSettings": {
      "speedPPM": "600 a 700 PPM",
      "needleType": "75/11 Ponta Aguda (SPI)",
      "stabilizer": "Entretela Hidrossolúvel 80g Dupla",
      "threadTension": "100 a 110gf",
      "density": "0,35 mm na cobertura e pontes"
    }
  },
  {
    "id": "i-078-inercia-pantografo-aceleracao-dinamica-curvas",
    "code": "I-078",
    "letter": "I",
    "term": "Inércia do Pantógrafo e Aceleração Dinâmica em Curvas (Pantograph Inertia & Dynamic G-Force Deceleration)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Mecânica da Máquina",
    "origin": "Desenvolvido a partir da mecatrônica e do controle de servomotores industriais de malha fechada nos centros de pesquisa da Tajima e Barudan no Japão.",
    "summary": "Gerenciamento inteligente da aceleração e desaceleração do bastidor em curvas bruscas e saltos longos para evitar perda de passos, vibrações e desalinhamento de contornos.",
    "definition": "A Inércia do Pantógrafo e Controle de Aceleração Dinâmica (Pantograph Dynamic Motion Profiling & S-Curve Deceleration) é a compensação cinemática executada pelo controlador eletrônico da máquina de bordar sobre os eixos X e Y. Como o bastidor e a peça de roupa possuem massa física ($m$), qualquer mudança rápida de direção em alta rotação (900 a 1.200 PPM) gera uma força de inércia ($F = m \\cdot a$) que pode fletir a barra do pantógrafo ou provocar perda de sincronismo dos motores. O sistema aplica rampas de velocidade com curvas em 'S' (S-Curve Acceleration), reduzindo a rotação do eixo principal em pontos críticos para garantir contornos com precisão micrométrica.",
    "technicalDetails": "A aceleração máxima do pantógrafo é limitada entre 1,5G e 2,2G ($m/s^2$). Quando a distância do vetor de ponto excede 4,5 mm ou o ângulo de deflexão entre vetores é superior a 60°, o software do cabeçote recalcula a rotação por minuto, reduzindo a velocidade instantânea em até 30% a 40% antes de atingir o vértice da curva.",
    "construction": [
      "Servomotores CA de alto torque com encoders ópticos de 17 bits",
      "Correias sincronizadoras reforçadas com fios de aço ou fibra de carbono (Kevlar)",
      "Algoritmo de previsão de trajetória (Look-Ahead Motion Control) integrado à CPU",
      "Trilhos de guia linear prismáticos com esferas recirculantes de folga zero",
      "Frenagem regenerativa com dissipador de calor para desaceleração controlada"
    ],
    "howItWorks": [
      "1. A CPU da máquina lê os próximos 20 pontos da matriz antes da agulha descer.",
      "2. Ao identificar uma mudança brusca de 90° ou um salto longo, o algoritmo reduz os RPM suavemente.",
      "3. O bastidor desacelera sem dar solavancos nem vibrar na mesa de trabalho.",
      "4. Após a curva, o motor acelera de volta à velocidade máxima em milissegundos."
    ],
    "mainTypes": [
      "Controle por Rampa em 'S' (S-Curve Profiling - Mais suave, preserva a estrutura da máquina)",
      "Controle Trapezoidal Clássico (Aceleração linear para máquinas compactas)",
      "Compensação Dinâmica com Sensor de Peso do Bastidor (Para bastidores pesados de jaqueta e boné)"
    ],
    "characteristics": [
      "Encaixe milimétrico absoluto entre o fundo em tatami e as linhas de contorno em ponto cheio",
      "Eliminação de sombras e fantasmas causados por ressonância mecânica da mesa",
      "Maior durabilidade das correias e rolamentos do sistema de tração X/Y"
    ],
    "limitations": [
      "Matrizes com excesso de saltos e ziguezagues curtos reduzem a velocidade média efetiva da produção",
      "Folga em correias frouxas anula os benefícios do controle dinâmico da CPU"
    ],
    "numberingSystem": [
      "Taxa de Aceleração Dinâmica: 1,5G a 2,2G",
      "Look-Ahead Buffer: 16 a 64 blocos de pontos antecipados",
      "Resolução do Encoder do Pantógrafo: 0,01 mm por pulso"
    ],
    "advantages": [
      "✔ Fim dos contornos fora do lugar por causa do balanço rápido do bastidor",
      "✔ Reduz o ruído de batidas secas na mesa da máquina durante o bordado",
      "✔ Permite bordar matrizes complexas na velocidade máxima com segurança total"
    ],
    "commonErrors": [
      "❌ Forçar a máquina a rodar a 1.000 PPM fixa desativando a desaceleração automática no painel",
      "❌ Usar bastidores excessivamente pesados e improvisados que sobrecarregam a inércia dos motores",
      "❌ Não esticar as correias do pantógrafo conforme a recomendação técnica de fábrica"
    ],
    "voceSabia": "A tecnologia de aceleração em curva 'S' usada nas máquinas de bordar modernas é a mesma desenvolvida para os braços robóticos de alta precisão que montam chips de celular e foguetes espaciais!",
    "curiosidadeTecnica": "A 1.000 pontos por minuto, o pantógrafo tem apenas 30 milissegundos para mover o bastidor, parar completamente, deixar a agulha entrar e sair do tecido, e se preparar para o próximo salto.",
    "dicaArtrelados": "Ao bordar desenhos com contornos muito detalhados em bastidores grandes: ajuste a velocidade máxima da máquina para 750 ou 800 PPM! A diminuição da inércia garante que todos os contornos fiquem perfeitamente coladinhos no desenho sem nenhum desvio!",
    "applications": [
      "Bordados de alta precisão em escudos, brasões e logotipos corporativos",
      "Produção contínua em máquinas industriais multi-cabeçotes",
      "Compensação de inércia em bastidores cilíndricos pesados de boné",
      "Bordados em peças volumosas como kimonos de judô e jaquetas de couro"
    ],
    "troubleshootingTips": [
      "Se o contorno preto está saindo deslocado para a direita em alta velocidade, diminua a rotação da máquina para 750 PPM.",
      "Se a máquina está dando solavancos fortes em cada troca de direção, verifique a tensão das correias do eixo X e Y.",
      "Se o motor do bastidor apitar e acusar erro de posição, limpe as guias lineares e lubrifique os rolamentos com graxa de lítio."
    ],
    "relatedTerms": [
      "Pantógrafo",
      "Servomotor",
      "Look-Ahead Control",
      "Deslocamento X/Y",
      "Compensação de Repuxo"
    ],
    "tags": [
      "inercia",
      "pantografo",
      "aceleracao",
      "dinamica",
      "mecanica",
      "servomotor",
      "precisao-xy"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "TAJIMA GROUP. Motion Control and Drive Dynamics in Multi-Head Embroidery Machines. Nagoya: Tajima, 2023. BARUDAN CO. Servo Motor Tuning and Dynamic Inertia Control. Ichinomiya: Barudan, 2022.",
    "bibliographicReferences": [
      "TAJIMA GROUP. Motion Control and Drive Dynamics in Multi-Head Embroidery Machines. Nagoya: Tajima, 2023.",
      "BARUDAN CO. Servo Motor Tuning and Dynamic Inertia Control. Ichinomiya: Barudan, 2022.",
      "ARTRELADOS. Cinemática e Controle Dinâmico de Eixos Cartesianos Têxteis. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Borde um círculo de 50 mm com contorno preto fino a 950 PPM e outro idêntico a 700 PPM. Compare com uma lupa o encaixe do contorno em volta do círculo: note como em 700 PPM a menor inércia do bastidor resulta em um contorno perfeito em toda a volta!",
    "quickSummary": "É o controle inteligente da máquina que freia um pouquinho o bastidor nas curvas rápidas para o contorno não sair torto.",
    "beginnerExplanation": "É igual dirigir um carro: quando você vai fazer uma curva bem fechada, você precisa dar uma freadinha para o carro não derrapar. A máquina de bordar faz a mesma coisa com o bastidor para o contorno do bordado não sair fora do lugar!",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    }
  },
  {
    "id": "i-079-intertravamento-angulos-ponto-cheio-corner-fracturing",
    "code": "I-079",
    "letter": "I",
    "term": "Intertravamento de Ângulos em Ponto Cheio e Fracionamento de Cantos (Corner Fracturing, Mitering & Satin Overlapping)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação e Software",
    "origin": "Da arte clássica de marcenaria de molduras (corte em esquadria a 45°) adaptada para a digitalização de colunas de ponto cheio em fontes e emblemas.",
    "summary": "Técnica de matrizaria que divide cantos agudos e retos em duas seções anguladas com costura de encaixe, evitando pontas duras e reflexos opacos na linha.",
    "definition": "O Intertravamento de Ângulos em Ponto Cheio (Corner Mitering & Satin Angle Fracturing) é a divisão geométrica programada de uma coluna de ponto cheio ao fazer curvas abruptas de 60° a 90° (como nos cantos de letras como 'L', 'E', 'H' ou em molduras quadradas). Em vez de forçar os pontos a girarem como um leque desordenado (que cria acúmulo de pontos na quina interna e pontas ralas na externa), a técnica divide a esquina em duas seções sobrepostas com uma linha de corte angular em esquadria (Mitered Joint) a 45° ou com encaixe escalonado tipo 'rabo de andorinha', mantendo a orientação perfeita da luz sobre o filamento brilhante.",
    "technicalDetails": "A união em esquadria (Mitering) cria uma linha de costura bissetriz precisa com sobreposição de travamento de 0,4 mm a 0,6 mm entre os blocos. O ângulo dos pontos na primeira coluna é mantido a 0° e na segunda coluna a 90°, gerando um contraste de refração óptica que valoriza o brilho acetinado da linha de poliéster ou viscose.",
    "construction": [
      "Divisão vetorial da coluna contínua no vértice do ângulo",
      "Traçado da linha de esquadria bissetriz no ângulo médio (ex: 45° em cantos de 90°)",
      "Geração de dentes de sobreposição e encaixe de segurança (Overlap Extension)",
      "Costura de reforço em ângulo cruzado sob a emenda",
      "Arremate suave sem nós aparentes na linha de transição visual"
    ],
    "howItWorks": [
      "1. O programador clica no canto vivo de uma moldura retangular no software.",
      "2. Seleciona a opção de canto 'Corte em Esquadria' (Mitred Corner) ou 'Sobreposição' (Cap Corner).",
      "3. O software divide a coluna em dois objetos perfeitamente encaixados a 45°.",
      "4. Na máquina, a costura do canto sai retinha, brilhante e sem criar caroço no tecido."
    ],
    "mainTypes": [
      "Canto em Esquadria a 45° (Mitred Corner - Padrão clássico de molduras elegantes)",
      "Canto com Sobreposição Completa (Cap / Butt Corner - Para letras grossas estilo bloco)",
      "Canto Fracionado com Dentes Intercalados (Para apliques e tecidos com alta elasticidade)"
    ],
    "characteristics": [
      "Quinas perfeitamente nítidas e afiadas sem arredondamento indesejado",
      "Brilho tridimensional espetacular pela refração da luz em dois ângulos diferentes",
      "Eliminação de caroços e acúmulo excessivo de pontos no vértice interno"
    ],
    "limitations": [
      "Exige ajuste correto da sobreposição para que o tecido não apareça na fenda entre as duas colunas após o encolhimento",
      "Em colunas menores que 1,5 mm de largura, o canto arredondado contínuo é preferível"
    ],
    "numberingSystem": [
      "Ângulo de Corte de Esquadria: 45° (Bissetriz de 90°)",
      "Sobreposição de Segurança: 0,4 mm a 0,8 mm",
      "Largura Mínima de Coluna: 2,0 mm"
    ],
    "advantages": [
      "✔ Letras maiúsculas e molduras ganham acabamento profissional de alto luxo",
      "✔ A agulha não fica martelando no mesmo buraquinho do canto interno",
      "✔ O bordado fica plano, macio e sem deformar a peça de roupa"
    ],
    "commonErrors": [
      "❌ Deixar o software fazer o canto em leque contínuo em molduras grossas (a quina fica feia e torta)",
      "❌ Não colocar sobreposição suficiente na emenda (abre uma fenda mostrando o tecido no meio da quina)",
      "❌ Usar ângulo de corte errado fazendo a costura parecer uma falha"
    ],
    "voceSabia": "A divisão de cantos a 45° no bordado foi inspirada nos encaixes de madeira das molduras douradas dos quadros do Museu do Louvre, em Paris!",
    "curiosidadeTecnica": "Como a linha de bordar é um cilindro brilhante que reflete a luz de forma direcional, dois blocos de ponto cheios unidos a 45° criam um efeito visual de relevo e profundidade chamado de 'lapidação de diamante têxtil'.",
    "dicaArtrelados": "Ao criar molduras ou letras como 'T' e 'L' no Wilcom ou Embird: aplique sempre o canto em esquadria (Mitered Corner) com sobreposição de 0,5 mm! Esse simples detalhe faz seu bordado parecer que foi feito pelos melhores ateliês da Europa!",
    "applications": [
      "Molduras, brasões e medalhões retangulares em toalhas de banho",
      "Monogramas e alfabetos em estilo romano clássico e serifado",
      "Faixas e dragonas para uniformes militares e condecorações",
      "Bordados corporativos geométricos e logomarcas com linhas retas"
    ],
    "troubleshootingTips": [
      "Se a emenda a 45° abriu uma fresta no tecido, aumente a compensação de sobreposição para 0,7 mm no software.",
      "Se o canto ficou grosso e duro, desative o reforço duplo sob a linha de corte da esquadria.",
      "Se o ponto está repuxando a quina para dentro, adicione entretela mais firme no bastidor."
    ],
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "Canto em Esquadria (Mitering)",
      "Sobreposição de Ponto",
      "Refração de Luz no Bordado",
      "Compensação de Repuxo"
    ],
    "tags": [
      "intertravamento",
      "angulos",
      "ponto-cheio",
      "esquadria",
      "mitering",
      "quinas",
      "matrizaria",
      "molduras"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "WILCOM INTERNATIONAL. Lettering and Monogramming Advanced Techniques. Sydney: Wilcom, 2023. TAJIMA GROUP. Satin Stitch Corner Management and Aesthetics. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Lettering and Monogramming Advanced Techniques. Sydney: Wilcom, 2023.",
      "TAJIMA GROUP. Satin Stitch Corner Management and Aesthetics. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Geometria de Cantos e Refração Óptica em Bordados Computadorizados. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Digitalize um quadrado oco de 60 x 60 mm com borda de ponto cheio de 4 mm. Configure dois cantos com 'leque simples' e dois cantos com 'corte em esquadria a 45°'. Borde e coloque sob a luz da luminária para comparar a nitidez e o brilho dos cantos em esquadria!",
    "quickSummary": "É o jeito inteligente de cortar e emendar os cantos de molduras e letras a 45° para a quina ficar retinha, sem calombos e com brilho perfeito.",
    "beginnerExplanation": "Quando a máquina precisa fazer uma quina reta, em vez de dar a volta de qualquer jeito deixando a ponta feia e torta, ela divide o canto ao meio em duas partes que se encaixam perfeitamente, igualzinho a uma moldura de quadro na parede!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Sobreposição de esquadria de 0,5 mm a 0,7 mm"
    }
  },
  {
    "id": "i-080-imantacao-desmagnetizacao-agulhas-lancadeira",
    "code": "I-080",
    "letter": "I",
    "term": "Imantação e Desmagnetização de Agulhas e Lançadeira (Needle & Rotary Hook Demagnetization Protocol)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Mecânica da Máquina",
    "origin": "Desenvolvido a partir da manutenção de instrumentos de precisão e fusos têxteis de alta rotação na Alemanha e Suíça (Groz-Beckert e Koban).",
    "summary": "Procedimento de manutenção com desmagnetizador eletrônico que remove o magnetismo residual da lançadeira e da barra de agulhas, evitando o acúmulo de limalha de ferro e quebras de linha.",
    "definition": "A Imantação e Desmagnetização de Agulhas e Lançadeira (Rotary Hook & Needle Bar Demagnetizing Procedure) é o protocolo técnico de manutenção preventiva que elimina o magnetismo estático residual acumulado nos componentes de aço do cabeçote e da área inferior da máquina de bordar. O atrito em alta velocidade (1.000 PPM), o contato com alfinetes imantados, pinças magnéticas ou o atrito contínuo da ponta da lançadeira podem magnetizar essas peças de aço carbono. Quando magnetizadas, elas atraem micropartículas de limalha de metal e pó de agulha que agem como lixas invisíveis, cortando a linha de poliéster, desregulando o sensor de quebra e aquecendo a caixa de bobina.",
    "technicalDetails": "A verificação é feita com uma bússola de bolso ou gaussímetro (leitura acima de 2 Gauss indica necessidade de desmagnetização). O desmagnetizador de bancada emite um campo magnético alternado de 50/60 Hz de 300 a 500 Gauss que decai exponencialmente conforme a peça (ou lançadeira montada) é afastada suavemente do polo em um raio de 30 a 50 cm por 10 segundos.",
    "construction": [
      "Desmagnetizador de túnel ou bobina indutiva de núcleo aberto (AC Demagnetizer)",
      "Interruptor de pulso momentâneo de segurança",
      "Bobina de cobre enrolada em núcleo de ferro-silício laminado",
      "Bússola de precisão não-magnética para teste de polaridade residual",
      "Gabinete isolante em baquelite ou polímero anti-choque"
    ],
    "howItWorks": [
      "1. O técnico aproxima uma pequena bússola da ponta da lançadeira; se a agulha da bússola girar e apontar para ela, há magnetismo.",
      "2. Liga-se o aparelho desmagnetizador sobre a chapa de agulha e a lançadeira.",
      "3. O campo eletromagnético alternado desordena os dipolos magnéticos do aço.",
      "4. Afasta-se o aparelho lentamente para neutralizar 100% do campo magnético.",
      "5. As peças voltam a ficar neutras, soltando toda a poeira metálica e rodando lisinhas."
    ],
    "mainTypes": [
      "Desmagnetizador Portátil de Cabeçote (Tipo caneta ou bloco para usar direto na máquina)",
      "Desmagnetizador de Mesa para Ferramentas e Lançadeiras Desmontadas",
      "Agulhas Especiais Não-Magnéticas com Revestimento de Titânio/Nitreto de Cromo"
    ],
    "characteristics": [
      "Eliminação instantânea de quebras de linha misteriosas na lançadeira",
      "Redução drástica do desgaste prematuro da ponta da lançadeira e da caixa de bobina",
      "Garante a precisão de encoders magnéticos e sensores de quebra de linha"
    ],
    "limitations": [
      "Nunca deve ser aproximado diretamente de cartões de memória, telas LCD ou da placa-mãe da máquina",
      "Não resolve problemas de lançadeiras riscadas ou com rebarbas físicas profundas"
    ],
    "numberingSystem": [
      "Intensidade de Campo do Aparelho: 300 a 500 Gauss",
      "Frequência de Operação: 50 / 60 Hz em Corrente Alternada",
      "Tempo de Aplicação Recomendado: 5 a 10 segundos por área"
    ],
    "advantages": [
      "✔ Resolve em segundos quebras constantes de linha que nenhum ajuste mecânico conseguia consertar",
      "✔ A poeira de linha e fiapos não grudam mais na caixa de bobina por atração magnética",
      "✔ Procedimento baratíssimo que aumenta em anos a vida útil da lançadeira"
    ],
    "commonErrors": [
      "❌ Guardar alfinetes ou tesouras com ímãs fortes colados no cabeçote da máquina",
      "❌ Usar chaves de fenda superimantadas para montar e desmontar a lançadeira",
      "❌ Desligar o desmagnetizador perto da peça em vez de afastá-lo lentamente (isso imanta ainda mais)"
    ],
    "voceSabia": "Nos grandes centros de afiação e manutenção de máquinas na Alemanha, nenhuma lançadeira é entregue ao cliente sem passar antes pelo túnel de desmagnetização eletrônica!",
    "curiosidadeTecnica": "O atrito contínuo do fio sintético gerando eletricidade estática combinado com o atrito da ponta de aço a 1.200 RPM pode gerar um campo magnético permanente capaz de desviar a agulha em até 0,05 mm, o suficiente para falhar o laço.",
    "dicaArtrelados": "Nunca cole ímãs de neodímio na barra de agulhas ou perto da lançadeira da sua máquina para segurar tesourinhas ou alfinetes! Isso magnetiza a máquina e faz a linha arrebentar sem motivo! Use suportes plásticos ou de madeira na sua bancada!",
    "applications": [
      "Manutenção corretiva de lançadeiras que quebram linhas sem motivo aparente",
      "Desmagnetização de chaves de fenda, pinças e tesouras de precisão do ateliê",
      "Neutralização de barras de agulha após colisões violentas de bastidor",
      "Rotina de revisão semestral em máquinas industriais multi-cabeçotes"
    ],
    "troubleshootingTips": [
      "Se a linha de baixo está arrebentando toda hora mesmo com a tensão certa, teste se a lançadeira não está magnetizada com uma agulha de costura comum solta.",
      "Se a lançadeira atraiu a agulha como um ímã, passe o desmagnetizador portátil por 10 segundos.",
      "Se os sensores magnéticos de fim de curso estão dando alarme falso, desmagnetize os eixos adjacentes."
    ],
    "relatedTerms": [
      "Lançadeira Rotativa",
      "Caixa de Bobina",
      "Eletricidade Estática",
      "Manutenção Preventiva",
      "Sensor de Quebra de Linha"
    ],
    "tags": [
      "imantacao",
      "desmagnetizacao",
      "lancadeira",
      "agulha",
      "magnetismo",
      "manutencao",
      "quebra-linha"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "GROZ-BECKERT KG. Magnetic Influences and Needle Performance Standards. Albstadt: Groz-Beckert, 2023. KOBAN HOOKS. Rotary Hook Maintenance and Demagnetization Manual. Osaka: Koban, 2022.",
    "bibliographicReferences": [
      "GROZ-BECKERT KG. Magnetic Influences and Needle Performance Standards. Albstadt: Groz-Beckert, 2023.",
      "KOBAN HOOKS. Rotary Hook Maintenance and Demagnetization Manual. Osaka: Koban, 2022.",
      "ARTRELADOS. Eletromagnetismo Residual e Manutenção de Precisão em Cabeçotes de Bordado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Pegue um alfinete de costura e aproxime-o da ponta da lançadeira da sua máquina (com a máquina desligada). Se o alfinete grudar sozinho nela como se fosse um ímã, sua lançadeira está magnetizada e precisa de uma sessão rápida de desmagnetizador!",
    "quickSummary": "É o processo de tirar o efeito de ímã que a lançadeira e as agulhas pegam com o tempo, evitando que a poeira de ferro grude e corte a linha.",
    "beginnerExplanation": "Com o uso diário, as peças de ferro da máquina podem virar pequenos ímãs sem a gente perceber. Isso atrai pó de ferro e faz a linha desfiar e quebrar toda hora. O desmagnetizador limpa essa energia magnética e deixa a máquina novinha em folha!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Desmagnetização a cada 6 meses"
    }
  },
  {
    "id": "i-081-insercao-ponto-grao-arroz-semente-rice-seed",
    "code": "I-081",
    "letter": "I",
    "term": "Inserção de Ponto Grão de Arroz e Semente (Rice & Seed Texture Stitches & Granular Motif)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Originário dos bordados tradicionais manuais japoneses Sashiko e dos bordados florais vitorianos ingleses do século XIX.",
    "summary": "Pontos decorativos rústicos de pequenos traços isolados e cruzados que imitam grãos de arroz e sementes espalhadas, criando texturas orgânicas em folhas, frutos e animais.",
    "definition": "A Inserção de Ponto Grão de Arroz e Ponto Semente (Seed Stitch & Rice Grain Texture Pattern) é uma modalidade de preenchimento decorativo programado composta por micropontos corridos reforçados (de 1,5 mm a 2,5 mm de comprimento) dispostos em orientações semi-aleatórias ou em matrizes geométricas entrelaçadas. No bordado computadorizado, esse padrão substitui fundos chapados e pesados de tatami por uma textura pontilhada leve e aerada, sendo a técnica preferida para miolos de girassóis, cascas de árvores, pelagem de animais e fundos de peças infantis com estilo artesanal.",
    "technicalDetails": "O padrão é digitalizado como um motivo modular contínuo (Motif Run) sem cortes de linha entre os grãos, utilizando conexões ocultas no avesso de 0,8 mm. Cada 'grão' é formado por 2 a 3 passadas de costura (Bean Stitch) para dar volume tridimensional nítido de 0,3 mm de altura com espaçamento médio de 2,0 mm entre elementos.",
    "construction": [
      "Célula elementar de ponto duplo ou triplo em formato de grão oblongo",
      "Conexões de caminhamento invisível no avesso entre grãos vizinhos",
      "Disposição angular aleatória de 0° a 360° ou padrão ortogonal clássico de 45°",
      "Ajuste de densidade por dispersão de elementos por centímetro quadrado",
      "Compatibilidade com linhas foscas de algodão, poliéster e seda rústica"
    ],
    "howItWorks": [
      "1. A bordadeira seleciona o miolo de uma flor ou o corpinho de um ursinho no software.",
      "2. Escolhe o preenchimento de motivo 'Ponto Semente / Grão de Arroz'.",
      "3. O software gera os grãozinhos espalhados com caminhamento contínuo sem nenhum salto de linha.",
      "4. Na máquina, o bordado cria uma textura granulada charmosa e macia ao toque."
    ],
    "mainTypes": [
      "Ponto Semente Aleatório (Para miolos botânicos, animais e arte moderna orgânica)",
      "Grão de Arroz Japonês Geométrico Sashiko (Para caminhos de mesa e peças zen)",
      "Grão de Arroz com Ponto Cruz Duplo (Para enxovais vintage e toalhas de lavabo)"
    ],
    "characteristics": [
      "Consome até 80% menos pontos que um preenchimento fechado tradicional",
      "Deixa o tecido extremamente leve, maleável e sem aspecto endurecido",
      "Visual aconchegante que transmite a sensação de um bordado feito à mão"
    ],
    "limitations": [
      "Em tecidos felpudos (toalhas de banho), exige plástico hidrossolúvel por cima para os grãos não sumirem na felpa",
      "Não cobre manchas ou estampas fortes do tecido de fundo"
    ],
    "numberingSystem": [
      "Comprimento do Grão: 1,8 mm a 2,5 mm",
      "Espaçamento Médio entre Grãos: 2,0 mm a 3,5 mm",
      "Espessura do Grão: Ponto Triplo (Bean 3x)"
    ],
    "advantages": [
      "✔ Dá um toque rústico e artesanal de altíssimo valor percebido",
      "✔ Economiza muito tempo de máquina e linha na produção do ateliê",
      "✔ Peça deliciosa de tocar, perfeita para roupinhas e mantas de bebê"
    ],
    "commonErrors": [
      "❌ Fazer os grãos com ponto simples único em vez de ponto triplo (ficam finos e invisíveis)",
      "❌ Bordar em toalha felpuda sem colocar plástico solúvel por cima",
      "❌ Deixar o programa dar um corte de linha a cada grãozinho bordado"
    ],
    "voceSabia": "No Japão tradicional, o ponto grão de arroz era bordado nas roupas dos camponeses para fortalecer o tecido contra o frio das montanhas e simbolizar votos de colheita farta e prosperidade!",
    "curiosidadeTecnica": "Por ser uma textura aberta, a tensão exercida sobre o tecido é praticamente zero, dispensando o uso de entretelas pesadas mesmo em tecidos finos como cambraia de linho.",
    "dicaArtrelados": "Ao bordar girassóis ou margaridas: em vez de fazer o miolo todo marrom escuro em tatami pesado, use o ponto grão de arroz em ponto triplo com duas cores intercaladas (marrom e caramelo)! O miolo fica com textura 3D igualzinho a uma flor de verdade!",
    "applications": [
      "Miolos de flores, sementes e detalhes de frutas em bordados botânicos",
      "Fundos decorativos de peças infantis, babadores e mantas",
      "Painéis de patchwork, almofadas rústicas e jogos americanos",
      "Texturas de animais (ursos, abelhas, coelhos e passarinhos)"
    ],
    "troubleshootingTips": [
      "Se os grãos sumiram dentro do tecido, aumente a repetição para ponto 5x (Bean 5-pass) ou use linha mais grossa 30.",
      "Se a máquina está cortando a linha entre cada grão, configure a distância de salto para 5 mm no software.",
      "Se o desenho ficou muito ralo, aumente a densidade diminuindo o espaçamento entre grãos para 2,0 mm."
    ],
    "relatedTerms": [
      "Padrão de Motivo (Motif Fill)",
      "Ponto Sashiko",
      "Ponto Triplo (Bean Stitch)",
      "Bordado Botânico",
      "Preenchimento Vazado"
    ],
    "tags": [
      "grao-arroz",
      "semente",
      "rice-stitch",
      "seed-stitch",
      "textura",
      "organico",
      "botanico",
      "artesanal"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "JAPAN EMBROIDERY GUILD. Traditional Sashiko and Seed Stitch Patterns. Tokyo: JEG, 2023. WILCOM INTERNATIONAL. Creative Motif and Texture Stitching. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "JAPAN EMBROIDERY GUILD. Traditional Sashiko and Seed Stitch Patterns. Tokyo: JEG, 2023.",
      "WILCOM INTERNATIONAL. Creative Motif and Texture Stitching. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Texturas Naturais e Pontos de Motivo Orgânico em Bordado Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Crie um círculo de 40 mm preenchido com Ponto Grão de Arroz triplo espaçado a 2,5 mm e contorno simples. Borde em um pedaço de algodão cru e sinta com a ponta dos dedos como a textura fica granulada e linda como grãos reais!",
    "quickSummary": "É o ponto decorativo que faz pontinhos salpicados parecendo grãos de arroz ou sementinhas espalhadas, dando textura rústica e charmosa.",
    "beginnerExplanation": "É como salpicar grãozinhos de arroz gordinhos ou sementinhas por cima do tecido. Deixa o desenho com um ar artesanal feito à mão, muito fofinho para miolos de flores, bichinhos e roupinhas de neném!",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "75/11 Ponta Bola (SES)",
      "stabilizer": "Entretela Rasgável Leve 40g",
      "threadTension": "110 a 120gf",
      "density": "Espaçamento de 2,2 mm a 3,0 mm"
    }
  },
  {
    "id": "i-082-instabilidade-termica-linhas-poliester-viscose",
    "code": "I-082",
    "letter": "I",
    "term": "Instabilidade Térmica em Linhas de Poliéster e Viscose (Thermal Shrinkage & Heat Resistance Dynamics)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Materiais e Insumos",
    "origin": "Da ciência dos polímeros sintéticos e normas internacionais de ensaios de estabilidade dimensional têxtil (ASTM D2259 e ISO 3759).",
    "summary": "Estudo do comportamento de encolhimento e resistência ao calor das linhas de bordar quando submetidas a ferros de passar, prensas térmicas e secadoras industriais.",
    "definition": "A Instabilidade Térmica e Retração de Linhas (Thermal Shrinkage & Ironing Tolerance Dynamics) é o fenômeno físico-químico de contração dimensional que os filamentos de linha de bordar sofrem sob ação de temperaturas elevadas. Enquanto o poliéster trilobal 100% suporta temperaturas de até 150°C a 160°C com retração inferior a 1,5%, a linha de viscose (Rayon) é mais sensível ao calor úmido e ferro direto (suportando até 130°C sem perder o brilho), enquanto linhas metalizadas possuem alma de poliéster com filme de alumínio que derrete a partir de 120°C. O conhecimento desses limites é vital para evitar o repuxamento e franzimento pós-passadoria do bordado.",
    "technicalDetails": "O ponto de fusão do poliéster é de aproximadamente 250°C a 260°C, com transição vítrea a 70°C. A viscosidade sob calor úmido pode provocar encolhimento longitudinal de até 3% se passada a ferro com vapor acima de 140°C. Para aplicações com transfer térmico ou entretelas termocolantes, a prensagem deve ser rigorosamente calibrada entre 130°C e 145°C por 10 a 12 segundos com pressão de 3 bar.",
    "construction": [
      "Filamento contínuo de poliéster trilobal termo-fixado (Heat-Set)",
      "Filamento de celulose regenerada (Viscose Rayon) com acabamento amaciante",
      "Fio metalizado com filme de poliéster metalizado a vácuo (Mylar / Lurex)",
      "Linhas técnicas de aramida (Nomex / Kevlar) anti-chama para bombeiros (suportam até 370°C)",
      "Tratamento de termoestabilização industrial contra encolhimento em lavanderia"
    ],
    "howItWorks": [
      "1. A peça é bordada e finalizada no ateliê.",
      "2. Na etapa de acabamento, a peça é passada a ferro ou recebe prensa térmica para colar uma entretela protetora no avesso.",
      "3. Se a temperatura estiver correta, a linha mantém o brilho, a maciez e o relevo intactos.",
      "4. Se o ferro estiver muito quente, a linha encolhe, repuxa o tecido e pode perder totalmente o brilho."
    ],
    "mainTypes": [
      "Poliéster Trilobal 120 (Super-resistente ao calor, lavagens e água sanitária)",
      "Viscose / Rayon 120 (Brilho acetinado magnífico, exige ferro brando até 130°C)",
      "Fios Metálicos Especiais (Exigem passar sempre pelo avesso com pano de proteção)",
      "Fios Anti-Chama de Aramida (Para macacões de pilotos, eletricistas e bombeiros)"
    ],
    "characteristics": [
      "Compreensão exata de como passar a ferro peças bordadas sem estragar o relevo",
      "Prevenção de franzimentos misteriosos que aparecem apenas depois que a cliente passa a roupa",
      "Escolha da linha ideal conforme o uso da peça (hospitalar, praia, festa ou trabalho)"
    ],
    "limitations": [
      "Ferro de passar caseiro muito quente (posição linho/algodão a 200°C) derrete fios de poliéster e queima viscose",
      "Linhas de marcas inferiores sem termo-fixação encolhem na primeira lavada quente"
    ],
    "numberingSystem": [
      "Temperatura Máxima Poliéster: 150°C (Ferro posição 2 bolinhas / Seda-Lã)",
      "Temperatura Máxima Viscose: 130°C (Ferro brando)",
      "Temperatura Máxima Linha Metálica: 110°C (Passar pelo avesso com pano)"
    ],
    "advantages": [
      "✔ Bordados que continuam lisos, brilhantes e planos durante toda a vida útil da roupa",
      "✔ Evita a perda de peças nobres na hora de colar entretela no ferro quente",
      "✔ Permite orientar os clientes com etiquetas profissionais de instrução de lavagem"
    ],
    "commonErrors": [
      "❌ Passar ferro pelando direto em cima de bordado com linha metálica (o brilho derrete na hora)",
      "❌ Usar prensa térmica a 180°C em cima de bordados de poliéster (a linha achata e perde o relevo)",
      "❌ Não usar linha de poliéster em uniformes industriais lavados em água fervente"
    ],
    "voceSabia": "Bordados feitos com linhas de aramida especial (Nomex) podem passar por chamas de mais de 300°C sem pegar fogo e sem derreter, sendo obrigatórios nos uniformes dos pilotos da Fórmula 1 e astronautas da NASA!",
    "curiosidadeTecnica": "O processo industrial de 'Heat-Setting' (termo-fixação) estica a linha de poliéster a 190°C durante a fabricação para que ela nunca mais encolha quando você lavar ou passar a roupa em casa.",
    "dicaArtrelados": "Ao passar toalhas e camisas bordadas a ferro: coloque sempre uma toalha macia dobrada por baixo da mesa e passe a peça PELO AVESSO! O bordado afunda na toalha fofinha, não achata o relevo e o ferro não queima o brilho dos pontos!",
    "applications": [
      "Instruções de lavagem e conservação para peças de enxoval e moda",
      "Aplicação de termocolantes e entretelas de proteção no avesso com prensa",
      "Uniformes industriais e hospitalares submetidos a autoclaves e lavanderias",
      "Bordados em vestuário esportivo e roupas de praia expostas ao sol e calor"
    ],
    "troubleshootingTips": [
      "Se o bordado repuxou e enrugou o tecido após passar a ferro, a temperatura estava alta demais; borrife água morna e estique suavemente.",
      "Se a linha metálica perdeu o brilho prateado e ficou opaca, ela foi queimada pelo ferro direto; passe sempre com pano protetor.",
      "Se for colar entretela protetora no avesso, use temperatura de 135°C por 12 segundos."
    ],
    "relatedTerms": [
      "Linha de Poliéster",
      "Linha de Viscose (Rayon)",
      "Linha Metálica",
      "Prensa Térmica",
      "Termoestabilização"
    ],
    "tags": [
      "instabilidade-termica",
      "calor",
      "poliester",
      "viscose",
      "ferro-passar",
      "prensa-termica",
      "encolhimento"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "MADEIRA GARNFABRIK. Thread Care, Washing and Ironing Technical Guidelines. Freiburg: Madeira, 2023. AMANN GROUP. Thermal Properties of Sewing and Embroidery Threads. Bönnigheim: Amann, 2022.",
    "bibliographicReferences": [
      "MADEIRA GARNFABRIK. Thread Care, Washing and Ironing Technical Guidelines. Freiburg: Madeira, 2023.",
      "AMANN GROUP. Thermal Properties of Sewing and Embroidery Threads. Bönnigheim: Amann, 2022.",
      "ARTRELADOS. Física e Termodinâmica de Filamentos Têxteis em Bordado Digital. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Borde dois pequenos quadrados de 30 mm em um tecido: um com linha de poliéster e outro com linha de viscose. Passe o ferro de passar em temperatura média sobre os dois e observe como o poliéster mantém a firmeza e a viscose oferece um toque ainda mais acetinado!",
    "quickSummary": "É o estudo de como as linhas reagem ao calor do ferro de passar e secadora, garantindo que o bordado não derreta nem encolha.",
    "beginnerExplanation": "Cada tipo de linha tem uma temperatura certa para aguentar o ferro de passar. O poliéster aguenta bastante calor, a viscose prefere um ferro mais brando e as linhas douradas e prateadas nunca devem encostar direto no ferro quente!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Ferro a no máximo 140°C pelo avesso"
    }
  },
  {
    "id": "i-083-indexacao-paleta-cores-real-cartela-fabricante",
    "code": "I-083",
    "letter": "I",
    "term": "Indexação de Paleta de Cores Real com Cartela de Fabricante (Thread Brand Color Matching & Digital Palette Indexing)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação e Software",
    "origin": "Do sistema internacional de cores Pantone e da digitalização de cartelas físicas pelas gigantes de fios Madeira, Gunold, Isacord, Setta e Polycron.",
    "summary": "Mapeamento digital no software que converte as cores da tela nos números exatos dos cones de linha de marcas reais, garantindo fidelidade absoluta na produção.",
    "definition": "A Indexação de Paleta de Cores Real (Thread Color Chart Matching & Palette Synchronization) é a configuração do software de matrizaria para trabalhar diretamente com as tabelas de cores proprietárias dos fabricantes de linha (como Madeira Polyneon, Isacord, Gütermann, Setta Lumina, Polycron, etc.). Em vez de utilizar cores genéricas em RGB ou CMYK de monitor, o programador associa cada objeto do desenho ao código numérico oficial do cone físico de linha. Isso gera relatórios de produção (Production Worksheets) perfeitos, permitindo que as operadoras da máquina abasteçam as agulhas com as cores exatas aprovadas pelo cliente sem margem para dúvidas.",
    "technicalDetails": "O software utiliza o espaço de cor $CIE\\ L^*a^*b^*$ com algoritmo de diferença de cor $\\Delta E_{2000}$ para encontrar a correspondência mais próxima entre o vetor gráfico e a biblioteca espectrofotométrica do fabricante de linha. Um $\\Delta E < 1.5$ garante que a diferença visual entre a tela calibrada e a linha bordada seja imperceptível ao olho humano.",
    "construction": [
      "Banco de dados espectrométrico com milhares de referências de fios calibrados",
      "Conversor algorítmico de aproximação cromática Delta E (Lab Color Matching)",
      "Cartelas físicas de mostruário de fios reais com amostras enroladas",
      "Exportação da lista de receitas de cores na folha técnica em PDF",
      "Sincronização com o sequenciador de agulhas do painel da máquina"
    ],
    "howItWorks": [
      "1. O cliente envia a logo com o código Pantone ou imagem de alta resolução.",
      "2. No programa, o digitalizador seleciona a marca de linha que usa no ateliê (ex: Setta Lumina ou Madeira).",
      "3. A ferramenta de correspondência automática busca o código de linha mais idêntico da cartela.",
      "4. O programa imprime a folha de produção listando exatamente: 'Cor 1: Cone 4022 Azul Royal; Cor 2: Cone 1000 Branco'."
    ],
    "mainTypes": [
      "Conversão Automática por Menor Delta E (Busca a linha mais parecida no banco de dados)",
      "Paleta Personalizada do Ateliê (Cadastro apenas das cores de cones que você tem no estoque)",
      "Mapeamento Direto por Código Pantone / PMS (Para logomarcas corporativas rigorosas)"
    ],
    "characteristics": [
      "Eliminação total de erros de trocar azul marinho por preto na máquina",
      "Agilidade de produção: a bordadeira pega os cones na prateleira pelo número exato",
      "Padronização profissional para pedidos repetidos daqui a 6 meses ou 1 ano"
    ],
    "limitations": [
      "Monitores de computador não calibrados podem exibir cores ligeiramente diferentes da linha física sob a luz do sol",
      "A cartela física de linhas deve ser conferida em casos de marcas corporativas muito exigentes"
    ],
    "numberingSystem": [
      "Diferença de Cor Máxima Tolerada: $\\Delta E_{2000} < 1,5$",
      "Espaço de Cor Padrão: $CIE\\ L^*a^*b^*$ a D65 / 10°",
      "Bibliotecas Integradas: Mais de 50 marcas mundiais de linhas"
    ],
    "advantages": [
      "✔ Nunca mais erre a cor do logotipo de uma empresa cliente",
      "✔ Folha de produção clara e profissional que qualquer funcionário entende",
      "✔ Organização impecável do estoque de linhas do ateliê por código numérico"
    ],
    "commonErrors": [
      "❌ Escolher as cores no programa 'no olhômetro' em RGB genérico sem associar a uma marca de linha",
      "❌ Não ter a cartela física de mostruário da sua marca favorita para conferir com o cliente",
      "❌ Confiar 100% na cor da tela do celular sem verificar o número do cone real"
    ],
    "voceSabia": "As maiores fábricas de linha do mundo utilizam espectrofotômetros a laser para garantir que o lote de linha tingido hoje tenha exatamente a mesma cor do lote tingido há 10 anos atrás!",
    "curiosidadeTecnica": "O olho humano consegue distinguir mais de 10 milhões de variações de cores, mas a percepção muda conforme a lâmpada do ateliê; por isso as cartelas oficiais são calibradas sob luz padrão D65 (luz do meio-dia).",
    "dicaArtrelados": "Crie uma paleta personalizada no seu software de bordado contendo APENAS as cores de linhas que você já tem no seu ateliê! Assim, ao digitalizar uma matriz, o programa já sugere as cores exatas que estão na sua prateleira, sem você precisar comprar cones novos!",
    "applications": [
      "Aprovação de cores de logotipos corporativos com clientes exigentes",
      "Geração de ordens de serviço e folhas de produção para a fábrica",
      "Controle de estoque e reposição de cones de linha por código",
      "Padronização de bordados em grandes lotes de uniformes escolares e empresariais"
    ],
    "troubleshootingTips": [
      "Se o cliente reclamou que o tom de verde ficou diferente, mostre a cartela física da marca de linha sob a luz do dia para aprovação.",
      "Se o software sugere um número de linha que você não tem, use a função 'Localizar cor semelhante' na sua paleta de estoque.",
      "Se a cor na tela parece estranha, configure o perfil de cor do seu monitor para sRGB."
    ],
    "relatedTerms": [
      "Cartela de Cores",
      "Pantone (PMS)",
      "Folha de Produção (Worksheet)",
      "Delta E ($\\Delta E$)",
      "Espectrofotometria"
    ],
    "tags": [
      "indexacao-cores",
      "paleta",
      "cartela-linhas",
      "fabricante",
      "pantone",
      "delta-e",
      "madeira",
      "isacord",
      "setta"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "PANTONE LLC. Textile Color Matching and Digital Synchronization Standards. Carlstadt: Pantone, 2023. WILCOM INTERNATIONAL. Color Management and Thread Chart Libraries. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "PANTONE LLC. Textile Color Matching and Digital Synchronization Standards. Carlstadt: Pantone, 2023.",
      "WILCOM INTERNATIONAL. Color Management and Thread Chart Libraries. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Colorimetria Aplicada e Gestão de Cartelas em Bordado Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Abra seu programa de bordado, vá nas configurações de paleta e selecione a marca de linhas que você mais usa (ex: Madeira ou Setta). Escolha 3 cores e veja como o programa exibe o código exato do cone para colocar na sua folha de trabalho!",
    "quickSummary": "É a função do programa que escolhe a cor usando o número verdadeiro do cone de linha que você tem na prateleira, para a cor sair perfeita.",
    "beginnerExplanation": "Em vez de escolher um 'azul qualquer' na tela do computador, essa função faz o programa dizer exatamente: 'Use o cone número 4022'! Assim você pega o carretel certo na gaveta e o bordado sai com a cor perfeita que o cliente pediu!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    }
  },
  {
    "id": "i-084-inversao-sentido-enfiamento-torcao-linha-z-s",
    "code": "I-084",
    "letter": "I",
    "term": "Inversão de Sentido de Enfiamento e Torção da Linha em Z/S (Thread Twist Direction Z/S & Threading Path Dynamics)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Mecânica da Máquina",
    "origin": "Da engenharia têxtil de fiação e retorção de fibras sintéticas para máquinas de costura e bordado de alta velocidade.",
    "summary": "Compreensão da física de torção do fio (padrão Z para bordado industrial) e o impacto do trajeto de passagem pelos guia-fios para evitar o destorcimento e desfiamento.",
    "definition": "A Inversão de Sentido de Enfiamento e Dinâmica de Torção da Linha (Z-Twist vs S-Twist Mechanics & Thread Path Optimization) é o estudo da influência mecânica do sentido de torção dos filamentos de linha na formação do ponto na máquina de bordar. Praticamente 100% das linhas de bordado industriais são fabricadas com torção final no sentido 'Z' (torção à esquerda). Conforme a linha desce a 1.000 PPM passando pelos discos tensores e pelo olho da agulha em direção à lançadeira (que gira no sentido horário), a torção 'Z' se aperta ligeiramente, mantendo o filamento compacto. Uma passagem invertida ou guia-fios com quinas vivas podem destorcer o fio, provocando o efeito 'vassourinha' e quebras constantes.",
    "technicalDetails": "A torção 'Z' possui ângulo de hélice de 25° a 30° com 600 a 800 voltas por metro (TPI - Twists Per Inch). Ao passar pelos olhais espirais de rabicho de porco (Pigtails), a linha deve ser sempre enfiada no sentido horário para acompanhar a espiral sem desapertar a torção estrutural dos cabos do filamento.",
    "construction": [
      "Estrutura de 2 ou 3 cabos de poliéster retorcidos em sentido Z final",
      "Olhais guia-fios helicoidais tipo espiral (Pigtail Guides)",
      "Discos de pré-tensão com ranhura de amortecimento de torção",
      "Passador de agulha calibrado para alinhamento axial do filamento",
      "Lançadeira rotativa com sincronismo ajustado para pegar o laço compacto"
    ],
    "howItWorks": [
      "1. A linha sobe do cone com torção padrão Z.",
      "2. Ao passar pelas espirais guia-fios, o trajeto correto mantém os cabos de linha unidos e firmes.",
      "3. A agulha desce no tecido e, ao subir 2 mm, forma um laço perfeito e estufado.",
      "4. A ponta da lançadeira passa com precisão cirúrgica por dentro do laço sem espetar os filamentos individuais."
    ],
    "mainTypes": [
      "Linha com Torção Z (Padrão universal absoluto para máquinas de bordar e costura reta)",
      "Linha com Torção S (Utilizada em costura manual e algumas máquinas especiais de galoneira)",
      "Fio Sem Torção / Monofilamento (Linhas invisíveis de poliamida para técnicas específicas)"
    ],
    "characteristics": [
      "Linha compacta que desliza pelo olho da agulha como um fio de aço liso",
      "Formação de laçada limpa e estável para a lançadeira pescar sem falhas de ponto",
      "Eliminação total do desfiamento e separação dos cabos de linha antes da agulha"
    ],
    "limitations": [
      "Fios de baixa qualidade com torção irregular formam nós e 'caroços' que entopem o olho da agulha",
      "Enfiar a linha de trás para frente nos guia-fios pode abrir a torção e arrebentar o fio"
    ],
    "numberingSystem": [
      "Sentido de Torção Padrão: Torção em 'Z' (Left Twist)",
      "Índice de Retorção: 650 a 800 TPM (Torções por Metro)",
      "Número de Cabos: 2 cabos (2-Ply) ou 3 cabos (3-Ply)"
    ],
    "advantages": [
      "✔ Fim daquele desfiamento chato onde a linha abre em vários cabelinhos na agulha",
      "✔ Pontos nítidos, brilhantes e com relevo uniforme",
      "✔ Permite que a máquina trabalhe em altíssima velocidade sem interrupções"
    ],
    "commonErrors": [
      "❌ Usar linha de costura manual comum de torção 'S' na máquina de bordar (ela destorce e arrebenta)",
      "❌ Passar a linha dando voltas erradas nos arames guia do cabeçote",
      "❌ Não trocar a agulha quando o canalete estiver com rebarba desfiando a torção da linha"
    ],
    "voceSabia": "A letra 'Z' é usada para descrever a torção porque as linhas diagonais no centro da letra 'Z' inclinam exatamente na mesma direção que as fibras torcidas da linha quando você olha para ela em pé!",
    "curiosidadeTecnica": "Quando a ponta da lançadeira rotativa passa a 0,05 mm da agulha, uma linha destorcida abre seus filamentos e é literalmente cortada ao meio pela lâmina da lançadeira.",
    "dicaArtrelados": "Ao passar a linha nos arames espirais em cima da máquina: passe sempre a linha dando a volta no sentido horário (acompanhando o desenho da espiral)! Esse trajeto natural ajuda a manter o fio bem torcido, lisinho e pronto para bordar sem arrebentar!",
    "applications": [
      "Passagem e enfiamento correto em máquinas de bordar industriais e domésticas",
      "Controle de qualidade e seleção de marcas confiáveis de linha",
      "Diagnóstico de desfiamento crônico de agulha em alta rotação",
      "Regulagem de pré-tensores para fios especiais metalizados"
    ],
    "troubleshootingTips": [
      "Se a linha está abrindo em três cabelinhos e quebrando antes da agulha, confira se o trajeto de passagem não está invertido nos guia-fios.",
      "Se o desfiamento persiste, troque a agulha por uma nova com olho maior (ex: 75/11 para agulha de bordado com banho de titânio).",
      "Se a linha fica enrolando em si mesma como um rabinho de porco ao sair do cone, use uma redinha no carretel."
    ],
    "relatedTerms": [
      "Torção Z e Torção S",
      "Lançadeira Rotativa",
      "Formação de Laço (Loop)",
      "Guia-Fios (Pigtails)",
      "Canalete da Agulha"
    ],
    "tags": [
      "torcao-z",
      "torcao-s",
      "enfiamento",
      "passagem-linha",
      "mecanica",
      "desfiamento",
      "lancadeira"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "THE TEXTILE INSTITUTE. Yarn Structure, Twist Mechanics and Thread Manufacturing. Manchester: Woodhead Publishing, 2023. TAJIMA GROUP. Thread Path Optimization and Loop Formation Dynamics. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "THE TEXTILE INSTITUTE. Yarn Structure, Twist Mechanics and Thread Manufacturing. Manchester: Woodhead Publishing, 2023.",
      "TAJIMA GROUP. Thread Path Optimization and Loop Formation Dynamics. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Física de Filamentos e Dinâmica de Torção no Bordado Industrial. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Pegue um pedaço de 20 cm de linha de bordar. Segure uma ponta e gire a outra entre os dedos no sentido anti-horário: veja como ela se abre em cabelinhos finos. Agora gire no sentido horário: veja como ela fica firme e lisinha! Esse é o poder da torção Z!",
    "quickSummary": "É o sentido em que a linha é torcida na fábrica (padrão Z), fundamental para a linha não abrir cabelinhos ao passar pela agulha.",
    "beginnerExplanation": "As linhas de bordar são formadas por vários fios fininhos torcidos juntos. A torção no sentido 'Z' é o segredo para que a linha continue firme e compacta enquanto a máquina costura rapidinho, sem virar uma vassourinha desfiada!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Padrão"
    }
  },
  {
    "id": "i-085-infiltracao-suor-resistencia-salinidade-bordado",
    "code": "I-085",
    "letter": "I",
    "term": "Infiltração de Suor e Resistência à Salinidade no Bordado (Sweat, Chlorine & Saline Corrosion Resistance)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminina composta.",
    "category": "Materiais e Insumos",
    "origin": "Dos testes laboratoriais de solidez à transpiração e água do mar da AATCC (Métodos 15 e 107) para vestuário esportivo e náutico.",
    "summary": "Seleção de linhas de poliéster com tingimento por dispersão e agulhas anti-corrosão para garantir bordados duráveis em uniformes de treino, moda praia e náutica.",
    "definition": "A Resistência à Salinidade e Infiltração de Suor no Bordado (Saline & Perspiration Fastness Dynamics) é o conjunto de especificações de materiais necessários para que o bordado resista ao contato contínuo com ácido lático, cloreto de sódio (suor e água do mar) e cloro de piscinas. Fios comuns de viscose ou fios metálicos com baixa blindagem oxidam e esfarelam rapidamente sob o suor humano, enquanto linhas de poliéster 100% trilobal de alta tenacidade com tingimento molecular por dispersão mantêm a cor intacta (Solidez 5/5) e não sofrem degradação por salinidade.",
    "technicalDetails": "O suor humano possui pH ácido a neutro (4.5 a 7.0) com concentração de sais que corrói acabamentos metálicos simples em menos de 10 ciclos de uso. Recomenda-se linha 100% poliéster trilobal com índice de solidez à transpiração AATCC 15 superior a Grau 4-5 e agulhas com revestimento de Nitreto de Titânio (PD/Gebrüder) ou Cromo Duro resistente a névoa salina.",
    "construction": [
      "Polímero de poliéster virgem 100% imune ao ataque de ácidos suaves e cloretos",
      "Tingimento com corantes de dispersão termofixados a 130°C sob pressão",
      "Agulha com blindagem de titânio anti-corrosão",
      "Entretela de polipropileno hidrofóbica que não retém umidade contra a pele",
      "Linha de bobina de filamento contínuo imputrescível"
    ],
    "howItWorks": [
      "1. A confecção produz uniformes de academia, camisas de time de futebol ou bermudas de praia.",
      "2. A matriz é bordada exclusivamente com linha de poliéster trilobal de alta solidez.",
      "3. O atleta treina, transpira intensamente e a peça é lavada repetidas vezes.",
      "4. O bordado permanece brilhante, sem desbotar, sem soltar tinta no tecido e sem quebrar os fios."
    ],
    "mainTypes": [
      "Linhas Poliéster Anti-Cloro e Anti-Salinidade (Para moda praia, natação e academias)",
      "Linhas Metálicas com Capa Protetora de Verniz de Poliuretano (Para trajes de banquete e praia luxo)",
      "Bordados em Coletes e Capas Náuticas (Resistentes à maresia e sol extremo)"
    ],
    "characteristics": [
      "Imunidade total ao desbotamento por suor, água de piscina e água salgada do mar",
      "Não solta corante sobre o tecido branco da camisa mesmo molhada de suor",
      "Durabilidade para aguentar centenas de lavagens pesadas sem desgastar"
    ],
    "limitations": [
      "Linhas antigas de viscose (Rayon) perdem a resistência e desbotam em contato frequente com suor e cloro",
      "Linhas metálicas baratas sem proteção de verniz escurecem e ficam verdes em poucos meses"
    ],
    "numberingSystem": [
      "Solidez à Transpiração (AATCC 15): Grau 5 (Escala de 1 a 5 - Máxima)",
      "Solidez à Água Clorada de Piscina (ISO 105-E03): Grau 4-5",
      "Solidez à Água do Mar (ISO 105-E02): Grau 5"
    ],
    "advantages": [
      "✔ Garantia de que a camisa de futebol ou uniforme da academia não vai manchar",
      "✔ Segurança total para atender marcas esportivas de alta performance",
      "✔ Bordados que duram mais que a própria peça de roupa"
    ],
    "commonErrors": [
      "❌ Usar linha de viscose em camisas de academia ou biquínis (ela desbota e esfarela com o suor)",
      "❌ Usar entretela de algodão grosso que encharca de suor e fica com cheiro ruim",
      "❌ Não usar linha de poliéster em uniformes de funcionários de clubes e praias"
    ],
    "voceSabia": "As camisas dos jogadores da Copa do Mundo e da Champions League são bordadas exclusivamente com linhas de poliéster especial que passam por testes rigorosos de imersão em soluções salinas e lâmpadas de raio UV!",
    "curiosidadeTecnica": "O cloro de piscina atua como um agente oxidante violento que quebra as pontes de hidrogênio da viscose em poucos minutos, mas não consegue romper as cadeias moleculares do poliéster trilobal.",
    "dicaArtrelados": "Para camisas esportivas, uniformes de corrida, academias ou roupas de praia: use SEMPRE linha 100% Poliéster Trilobal! O poliéster não desbota com suor, não mancha na lavagem e resiste até ao cloro da água da piscina!",
    "applications": [
      "Camisas de futebol, uniformes esportivos e roupas de academia",
      "Biquínis, sungas, saídas de praia e toalhas de piscina",
      "Uniformes de tripulações de barcos, iates e marinas",
      "Uniformes de trabalho para profissionais expostos ao sol e suor diário"
    ],
    "troubleshootingTips": [
      "Se o bordado manchou o tecido ao redor depois de um dia de treino, a linha usada era viscose de baixa qualidade; substitua por poliéster.",
      "Se o fio metálico ficou preto após contato com suor, utilize fios metalizados com selagem de poliuretano grau náutico.",
      "Se a área bordada causa assadura por reter umidade, use entretela solúvel ou entretela de malha técnica respirável."
    ],
    "relatedTerms": [
      "Linha de Poliéster Trilobal",
      "Solidez de Cor",
      "Tecido Dry-Fit",
      "Tingimento por Dispersão",
      "Resistência ao Cloro"
    ],
    "tags": [
      "suor",
      "salinidade",
      "cloro",
      "resistencia",
      "esportivo",
      "poliester",
      "moda-praia",
      "durabilidade"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "AMERICAN ASSOCIATION OF TEXTILE CHEMISTS AND COLORISTS (AATCC). Test Method 15: Colorfastness to Perspiration. Research Triangle Park: AATCC, 2023. MADEIRA GARNFABRIK. Polyneon Chlorine and Saline Resistance Standards. Freiburg: Madeira, 2022.",
    "bibliographicReferences": [
      "AMERICAN ASSOCIATION OF TEXTILE CHEMISTS AND COLORISTS (AATCC). Test Method 15: Colorfastness to Perspiration. Research Triangle Park: AATCC, 2023.",
      "MADEIRA GARNFABRIK. Polyneon Chlorine and Saline Resistance Standards. Freiburg: Madeira, 2022.",
      "ARTRELADOS. Solidez Química e Comportamento de Fios em Roupas Esportivas e Náuticas. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Pegue um retalho com bordado de poliéster e outro com linha de viscose antiga. Mergulhe ambos em um copo com água morna e sal de cozinha por 2 horas. Veja como o poliéster sai brilhando como novo, sem soltar nenhuma gota de cor na água!",
    "quickSummary": "É a capacidade do bordado de aguentar o suor do corpo, água do mar e cloro de piscina sem desbotar nem arrebentar.",
    "beginnerExplanation": "O suor do corpo e a água do mar têm sal e podem estragar bordados feitos com linhas fracas. Usando linha de poliéster de boa qualidade, o bordado pode molhar de suor ou entrar na piscina que a cor continua viva e linda para sempre!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "75/11 Ponta Bola (SES)",
      "stabilizer": "Entretela de Malha Hidrofóbica 45g",
      "threadTension": "110 a 120gf",
      "density": "Padrão"
    }
  },
  {
    "id": "i-086-insercao-ponto-paris-bainha-aberta-hemstitch",
    "code": "I-086",
    "letter": "I",
    "term": "Inserção de Ponto Paris e Bainha Aberta Computadorizada (Paris Stitch, Hemstitch & Wing Needle Openwork)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Efeitos Decorativos e Pontos",
    "origin": "Da alta costura parisiense e enxovais nobres franceses dos séculos XVIII e XIX em linho e cambraia finíssima.",
    "summary": "Padrão de ponto decorativo com aberturas vazadas que simula a clássica bainha aberta e agulha asa, criando orifícios elegantes e bordas rendadas em lençóis e toalhas.",
    "definition": "A Inserção de Ponto Paris e Bainha Aberta Computadorizada (Digital Hemstitching & Wing Needle Paris Openwork) é a rotina de programação que desenha orifícios geométricos abertos no tecido por agrupamento forçado das fibras da trama e do urdume. Realizada com uma agulha asa especial (Wing Needle com duas aletas laterais cortantes/afastadoras) ou através de micropenetrações repetitivas com agulha fina e alta tensão calculada, a técnica cria pequenos furos vazados e decorados com amarrações em ziguezague perpendicular, conferindo o autêntico acabamento de bainha de lençóis de reis e toalhas de mesa nobres.",
    "technicalDetails": "O ciclo básico do Ponto Paris é composto por 4 movimentos: 1) penetração para frente abrindo o orifício; 2) recuo com aperto lateral do feixe de fios; 3) penetração no mesmo orifício com ponto perpendicular puxando as fibras; 4) avanço de 2,5 mm para o próximo ciclo. A velocidade de costura deve ser mantida em 500 a 600 PPM para permitir a acomodação mecânica das fibras do linho sem rasgá-las.",
    "construction": [
      "Sequência de 4 a 6 penetrações por módulo de orifício",
      "Compatibilidade com Agulha Asa (Wing Needle calibre 100/16 ou 120/19)",
      "Uso exclusivo de linhas finas de algodão egípcio 50 ou poliéster fosco 60",
      "Traçado linear rigoroso paralelo ao fio reto do tecido",
      "Entretela hidrossolúvel de suporte sem resíduos no avesso"
    ],
    "howItWorks": [
      "1. A bordadeira monta o linho fino com entretela solúvel no bastidor e instala a agulha asa.",
      "2. O programa de bordado executa o ciclo do Ponto Paris com movimentos para frente e para o lado.",
      "3. As aletas da agulha afastam os fios do linho enquanto a linha amarra o buraquinho em aberto.",
      "4. O resultado é uma carreira perfeita de pequenos furinhos decorativos bordados, digna dos melhores ateliês de Paris."
    ],
    "mainTypes": [
      "Ponto Paris com Agulha Asa (Furos grandes e abertos para lençóis e toalhas de linho)",
      "Ponto Paris Simulado por Digitalização (Para agulhas normais em tecidos médios)",
      "Bainha Aberta Veneziana em Escada (Com duas linhas paralelas e colunas verticais)"
    ],
    "characteristics": [
      "Extrema elegância clássica com perfume vintage de enxoval de herança",
      "Orifícios perfeitamente espaçados e regulares sem cortar o tecido",
      "Valorização comercial espetacular de panos de prato finos, lençóis e toalhas"
    ],
    "limitations": [
      "Exige tecidos de fibra natural com trama aberta e uniforme (linho, cambraia de algodão, percal)",
      "Não funciona em malhas elásticas ou tecidos sintéticos fechados"
    ],
    "numberingSystem": [
      "Calibre da Agulha Asa: 100/16 ou 120/19 (Wing)",
      "Passo do Ponto: 2,5 mm a 3,5 mm",
      "Velocidade Recomendada: 500 a 600 PPM"
    ],
    "advantages": [
      "✔ Transforma um tecido de linho simples em um artigo de luxo vendido a peso de ouro",
      "✔ Substitui horas de trabalho braçal de puxar fios à mão por minutos de máquina",
      "✔ Criação de barras de toalhas e lençóis com acabamento impecável de alta costura"
    ],
    "commonErrors": [
      "❌ Tentar fazer Ponto Paris em malha de lycra (os furos fecham na hora e não aparecem)",
      "❌ Usar entretela rasgável comum (fica impossível tirar o papel de dentro dos buraquinhos)",
      "❌ Bordar rápido demais a 1.000 PPM entortando a agulha asa"
    ],
    "voceSabia": "Nos séculos passados, as freiras dos conventos franceses passavam até três meses desfiando e amarrando fios de linho à mão para fazer a bainha aberta de um único jogo de lençol para a nobreza!",
    "curiosidadeTecnica": "A agulha asa possui duas 'asas' de metal nas laterais que não cortam as fibras do linho, mas apenas as empurram para os lados; a linha de bordar entra em seguida amarrando esse feixe, mantendo o furo aberto para sempre.",
    "dicaArtrelados": "Ao bordar Ponto Paris ou Bainha Aberta em toalhas de linho: use uma Agulha Asa (Wing Needle) e reduza a velocidade da sua máquina para 550 PPM! Use linha de algodão fino ou poliéster combinando com a cor do tecido para um resultado sofisticado e aristocrático!",
    "applications": [
      "Bainhas nobres de lençóis, fronhas e jogos de cama de alto luxo",
      "Caminhos de mesa, toalhas de lavabo e guardanapos de banquete",
      "Batas de batizado, vestidos infantis clássicos e lenços de noiva",
      "Panos de copa finos com acabamento de ateliê europeu"
    ],
    "troubleshootingTips": [
      "Se os furinhos ficaram muito pequenos e quase sumiram, aumente o calibre da agulha asa para 120/19.",
      "Se o tecido rasgou ao fazer o ponto, diminua a tensão da linha e use entretela hidrossolúvel mais grossa.",
      "Se a agulha asa bateu no calcador ou na chapa, verifique se a máquina tem abertura de chapa compatível com agulhas largas."
    ],
    "relatedTerms": [
      "Agulha Asa (Wing Needle)",
      "Bainha Aberta (Hemstitch)",
      "Linho Puro",
      "Entretela Hidrossolúvel",
      "Bordado Francês"
    ],
    "tags": [
      "ponto-paris",
      "bainha-aberta",
      "hemstitch",
      "agulha-asa",
      "wing-needle",
      "linho",
      "enxoval-luxo",
      "alta-costura"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "SCHMETZ GMBH. Special Needles for Hemstitching and Openwork. Herzogenrath: Schmetz, 2023. WILCOM INTERNATIONAL. Openwork, Hemstitch and Heirloom Stitching. Sydney: Wilcom, 2022.",
    "bibliographicReferences": [
      "SCHMETZ GMBH. Special Needles for Hemstitching and Openwork. Herzogenrath: Schmetz, 2023.",
      "WILCOM INTERNATIONAL. Openwork, Hemstitch and Heirloom Stitching. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Técnicas de Bordado Vazado Tradicional e Ponto Paris Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Instale uma agulha asa na sua máquina e carregue um ponto decorativo de Ponto Paris em um pedaço de linho puro com entretela hidrossolúvel. Borde a 550 PPM e veja como a agulha abre buraquinhos rendados perfeitos como se tivessem sido feitos à mão na França!",
    "quickSummary": "É o ponto nobre que abre furinhos decorativos no linho para fazer barras elegantes de lençóis e toalhas de luxo.",
    "beginnerExplanation": "É aquele ponto clássico e chique de enxoval de noiva que cria furinhos redondos e decorados ao longo da beirada do lençol ou toalha. A máquina usa uma agulha especial com asinhas laterais que abre os fios do tecido criando um efeito de renda maravilhoso!",
    "recommendedSettings": {
      "speedPPM": "500 a 600 PPM",
      "needleType": "Agulha Asa 100/16 ou 120/19 (Wing Needle)",
      "stabilizer": "Entretela Hidrossolúvel 80g",
      "threadTension": "110 a 120gf",
      "density": "Passo de 2,5 mm a 3,0 mm"
    }
  },
  {
    "id": "i-087-isolamento-vibracao-harmonica-mesa-bordado",
    "code": "I-087",
    "letter": "I",
    "term": "Isolamento de Vibração Harmônica da Mesa de Bordado (Vibration Dampening & Harmonic Resonance Isolation)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Equipamentos e Acessórios",
    "origin": "Da engenharia de controle acústico industrial e amortecimento elastomérico de bancadas de precisão.",
    "summary": "Uso de calços de poliuretano de alta densidade, nivelamento milimétrico e bancadas pesadas para eliminar a trepidação da máquina e manter os contornos perfeitamente nítidos.",
    "definition": "O Isolamento de Vibração Harmônica da Mesa de Bordado (Harmonic Resonance Damping & Anti-Vibration Leveling) é o conjunto de técnicas mecânicas e estruturais empregadas para neutralizar a transferência de vibrações oscilatórias entre o chassi da máquina de bordar e a superfície de apoio do ateliê. Em velocidades entre 800 e 1.200 PPM, o movimento alternativo da barra de agulhas e as acelerações do pantógrafo podem entrar em ressonância com a mesa de trabalho, fazendo o bastidor trepidar no ar. Isso gera microdeslocamentos no bordado (linhas tremidas e contornos fora do lugar) e aumenta o nível de ruído dentro do ateliê.",
    "technicalDetails": "A frequência crítica de ressonância em máquinas compactas e industriais varia de 15 Hz a 25 Hz. A instalação de sapatas de absorção com elastômero de borracha nitrílica ou poliuretano Shore 60A com desacoplamento de dois estágios dissipa até 85% das ondas de choque, reduzindo a vibração transmitida para menos de 0,02 mm de amplitude.",
    "construction": [
      "Bancada robusta com estrutura de aço tubular soldada e tampo em MDF de 25 a 30 mm",
      "Sapatas niveladoras rosqueadas com base de borracha de alta densidade (Shore 60A)",
      "Tapete de desacoplamento acústico e anti-vibração sob os pés da bancada",
      "Nível de bolha de precisão para calibração nos eixos X, Y e diagonal",
      "Travamento rígido dos parafusos de fixação entre máquina e cavalete"
    ],
    "howItWorks": [
      "1. A máquina de bordar é apoiada sobre uma bancada firme e perfeitamente nivelada.",
      "2. Sapatas de borracha especial são instaladas sob cada pé da máquina.",
      "3. Quando a máquina acelera a 1.000 PPM, a borracha absorve os impactos mecânicos.",
      "4. O bastidor se move sobre o tecido com estabilidade absoluta, sem tremer nem balançar.",
      "5. O ateliê fica muito mais silencioso e os contornos saem perfeitamente alinhados."
    ],
    "mainTypes": [
      "Sapatas Anti-Vibratórias com Rosca de Nivelamento (Padrão para máquinas de 1 a 4 cabeçotes)",
      "Tapetes de Borracha Vulcanizada Reciclada de Alta Densidade (Para colocar sob bancadas inteiras)",
      "Bancadas Profissionais com Lastro de Peso Integrado (Para ateliês de alta produção)"
    ],
    "characteristics": [
      "Eliminação de linhas serrilhadas e contornos tremidos causados por balanço da mesa",
      "Redução drástica do ruído acústico de ressonância no chão e paredes do ateliê",
      "Maior conforto de trabalho para as bordadeiras passarem o dia sem dor de cabeça"
    ],
    "limitations": [
      "Colocar a máquina sobre mesas leves de plástico ou madeira fina faz a mesa balançar como um barco",
      "Sapatas de borracha muito moles podem deixar a máquina oscilar em vez de firmar"
    ],
    "numberingSystem": [
      "Dureza do Elastômero: 55 a 65 Shore A",
      "Espessura Mínima do Tampo da Mesa: 25 mm a 30 mm",
      "Atenuação de Ruído Típica: 6 a 10 dB(A)"
    ],
    "advantages": [
      "✔ Bordados com definição nítida e contornos que casam perfeitamente no lugar",
      "✔ Ambiente de trabalho muito mais silencioso, calmo e profissional",
      "✔ Protege a eletrônica interna da máquina contra danos causados por trepidação contínua"
    ],
    "commonErrors": [
      "❌ Apoiar uma máquina pesada em mesa de escritório comum que treme inteira a 800 PPM",
      "❌ Não regular o parafuso de nível dos 4 pés (a máquina fica 'manca' batendo no chão)",
      "❌ Encostar a bancada direto na parede do ateliê transmitindo o barulho para os vizinhos"
    ],
    "voceSabia": "Uma máquina de bordar industrial a 1.000 pontos por minuto gera mais de 16 impactos mecânicos por segundo! Se a bancada estiver bamba, a agulha pode errar o centro da chapa por até 0,3 mm por causa da trepidação!",
    "curiosidadeTecnica": "O princípio de isolamento usado nas sapatas de bordado é o mesmo isolamento elastomérico utilizado nas fundações dos edifícios modernos no Japão para resistir a terremotos.",
    "dicaArtrelados": "Nunca coloque sua máquina de bordar em mesas de plástico desmontáveis ou móveis fracos! Use uma bancada firme de madeira grossa com pés de borracha e afaste a mesa 10 cm da parede! A máquina vai trabalhar silenciosa e seus bordados vão sair com contornos perfeitamente lisos!",
    "applications": [
      "Montagem e instalação de máquinas de bordar domésticas, semi-industriais e industriais",
      "Atenuação de ruídos em ateliês residenciais, apartamentos e lojas de shopping",
      "Melhoria na precisão de contornos finos e letras pequenas de 4 mm",
      "Ergonomia e conforto acústico para operadores de bordado"
    ],
    "troubleshootingTips": [
      "Se a mesa está vibrando e fazendo as tesouras andarem sozinhas pela bancada, coloque calços de borracha sob os pés e nivele a altura.",
      "Se o contorno das letras pequenas está saindo serrilhado, teste empurrar a mesa para ver se ela balança com facilidade.",
      "Se a máquina faz um zumbido oco muito alto, coloque um tapete emborrachado grosso de 15 mm sob os pés da bancada."
    ],
    "relatedTerms": [
      "Ergonomia de Ateliê",
      "Nivelamento de Máquina",
      "Acústica e Decibéis",
      "Contorno de Ponto Cheio",
      "Pantógrafo"
    ],
    "tags": [
      "isolamento-vibracao",
      "bancada",
      "amortecimento",
      "silencio",
      "nivelamento",
      "acustica",
      "precisao"
    ],
    "updatedAt": "2026-08-29",
    "sourceReference": "INSTITUTE OF NOISE CONTROL ENGINEERING (INCE). Industrial Machinery Vibration and Acoustic Damping. Reston: INCE, 2023. TAJIMA GROUP. Machine Foundation and Table Installation Standards. Nagoya: Tajima, 2022.",
    "bibliographicReferences": [
      "INSTITUTE OF NOISE CONTROL ENGINEERING (INCE). Industrial Machinery Vibration and Acoustic Damping. Reston: INCE, 2023.",
      "TAJIMA GROUP. Machine Foundation and Table Installation Standards. Nagoya: Tajima, 2022.",
      "ARTRELADOS. Dinâmica Estrutural e Controle Vibratório em Estações de Bordado Computadorizado. Curitiba: Artrelados, 2024."
    ],
    "practicalExercise": "Coloque um copo com água sobre a mesa ao lado da sua máquina e mande ela bordar a 850 PPM. Observe as ondas na água: se a água estiver espirrando ou com ondas muito fortes, sua bancada está vibrando demais e precisa de calços de borracha nivelados!",
    "quickSummary": "É o uso de mesas firmes e pés de borracha para a máquina não trepidar, deixando o ateliê silencioso e os contornos perfeitos.",
    "beginnerExplanation": "Quando a máquina borda rápido, ela gosta de dar uma tremidinha. Se a mesa for fraca ou estiver torta, essa tremedeira faz o bordado sair meio tortinho e faz um barulhão danado! Colocando a máquina numa mesa firme com pezinhos de borracha, tudo fica calmo e o bordado sai perfeito!",
    "recommendedSettings": {
      "speedPPM": "Padrão",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão",
      "density": "Bancada nivelada com tampo de 25 mm+"
    }
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_D: Verbete[] = [
  {
    "id": "d-001-densidade-de-pontos",
    "code": "D-001",
    "term": "Densidade de Pontos",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo feminino e substantivo masculino.",
    "category": "Programação de Bordado",
    "summary": "Concentração e espaçamento entre os pontos que formam determinada área da matriz de bordado.",
    "definition": "A densidade de pontos é a concentração dos pontos utilizados para formar determinada área de uma matriz de bordado. Ela está relacionada à distância entre os pontos ou entre as passagens de pontos que compõem uma região do desenho. A densidade influencia diretamente a cobertura do tecido, a aparência, a espessura, a rigidez, o consumo de linha e a quantidade total de pontos. No bordado eletrônico, é um dos parâmetros fundamentais na criação e revisão de matrizes.",
    "technicalDetails": "Varia inversamente ao espaçamento: maior concentração de pontos resulta em maior densidade, enquanto maior espaçamento resulta em menor densidade. Nos softwares de programação (Wilcom, Hatch, Embird), é calibrada em milímetros de espaçamento entre linhas (ex: 0.38mm a 0.45mm no Tatami). Deve ser analisada em conjunto com o tipo de ponto, tecido, espessura da linha, estabilizador e underlay.",
    "construction": [
      "Espaçamento entre linhas de pontos (stitch spacing)",
      "Comprimento do ponto (stitch length)",
      "Camada de suporte estrutural (underlay)",
      "Compensação de encolhimento (pull compensation)"
    ],
    "howItWorks": [
      "1. O programador define o espaçamento entre as passagens de agulha no software.",
      "2. Áreas de preenchimento recebem densidades equilibradas para cobrir o tecido.",
      "3. Detalhes finos e letras recebem calibrações específicas para evitar acúmulo de linha.",
      "4. A máquina executa as perfurações mantendo a distância programada entre cada passagem."
    ],
    "mainTypes": [
      "Densidade Padrão / Uniforme (0.40mm a 0.45mm para tecidos planos)",
      "Densidade Alta (0.35mm a 0.38mm para cetim e superfícies lisas)",
      "Densidade Leve / Aberta (0.60mm a 1.20mm para sombras e fundos)",
      "Densidade Gradiente / Variável (transição suave de cobertura)"
    ],
    "advantages": [
      "✔ Garante cobertura perfeita e uniforme sem transparência do tecido",
      "✔ Otimiza o consumo de linha e reduz custos de produção",
      "✔ Previne quebras de linha e desfiamentos por excesso de atrito",
      "✔ Mantém a flexibilidade e maciez natural da peça bordada"
    ],
    "limitations": [
      "Aumentar a densidade indiscriminadamente não corrige falhas causadas por underlay deficiente ou falta de compensação de repuxo."
    ],
    "commonErrors": [
      "❌ Aumentar a densidade simplesmente para tentar esconder o tecido que está aparecendo.",
      "❌ Utilizar a mesma configuração de densidade para todos os tipos de tecido.",
      "❌ Confundir densidade com a quantidade total de pontos da matriz.",
      "❌ Redimensionar uma matriz sem recalcular ou revisar a nova distribuição dos pontos."
    ],
    "voceSabia": "Uma matriz profissional não procura necessariamente utilizar o maior número possível de pontos. O objetivo é encontrar o equilíbrio exato entre cobertura, qualidade, estabilidade e eficiência, eliminando pontos desnecessários.",
    "curiosidadeTecnica": "A densidade pode ser representada de formas diferentes nos softwares: alguns usam o espaçamento linear em milímetros (quanto menor o número, mais denso), enquanto outros utilizam linhas por polegada ou densidade percentual.",
    "dicaArtrelados": "Não pense que 'mais pontos = melhor bordado'. Antes de aumentar a densidade, procure descobrir por que o tecido está aparecendo. Verifique: tipo de ponto → direção → underlay → tecido → estabilizador → linha → densidade. E lembre-se: pontos desnecessários custam dinheiro em tempo de máquina e linha!",
    "recommendedSettings": {
      "density": "0.40mm a 0.45mm para Tatami; 0.38mm a 0.42mm para Satin",
      "needleType": "75/11 DBxK5 ou 130/705H-E",
      "stabilizer": "Rasga-fácil ou Recorta-fácil conforme a elasticidade",
      "speedPPM": "650 a 850 PPM"
    },
    "applications": [
      "Preenchimentos Tatami, colunas em Ponto Satin, coberturas de grandes áreas, logotipos e monogramas."
    ],
    "troubleshootingTips": [
      "Se o tecido ficar rígido como uma placa de papelão ou com furos de agulha, reduza a densidade em 10% a 15% e reforce o underlay.",
      "Se a linha estiver quebrando repetidamente na mesma área, verifique se não há sobreposição excessiva de camadas densas."
    ],
    "relatedTerms": [
      "Densidade de Bordado",
      "Densidade Variável",
      "Densidade Excessiva",
      "Densidade Insuficiente",
      "Underlay",
      "Ponto de Preenchimento"
    ],
    "tags": [
      "d-001",
      "densidade",
      "pontos",
      "digitalizacao",
      "qualidade",
      "matriz",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas, -atis (qualidade de denso, espesso, compacto), derivado de densus (cerrado, apertado), e do latim punctum (picada, furo de agulha). No bordado mecânico e computadorizado, o conceito foi formalizado com as máquinas pantográficas automáticas suíças e alemãs no final do século XIX para calcular a cobertura de fios sobre o tecido.",
    "beginnerExplanation": "A densidade é a distância que existe entre uma linha de ponto e a outra vizinha. Se você colocar os pontos muito juntinhos (muito denso), o bordado fica duro como uma placa; se colocar muito afastados (pouco denso), o tecido de baixo vai aparecer como se estivesse furado ou ralo. O segredo é achar o equilíbrio perfeito!",
    "practicalExercise": "No seu software de bordado ou na máquina, crie três quadrados idênticos de 3cm x 3cm em ponto Tatami com o mesmo tecido e entretela: configure o primeiro com densidade aberta (0.60mm), o segundo com densidade ideal (0.42mm) e o terceiro com densidade muito apertada (0.28mm). Borde os três lado a lado e compare com as mãos: sinta a flexibilidade, observe se o tecido apareceu no primeiro e se o terceiro ficou duro como papelão.",
    "quickSummary": "Densidade de pontos é o espaçamento entre as passagens de linha na matriz, determinante para garantir cobertura homogênea sem gerar rigidez no tecido.",
    "bibliographicReferences": [
      "WILCOM. Stitch Density and Spacing Reference Manual. Sydney: Wilcom International, 2022.",
      "DEVERSON, D. Complete Embroidery Digitizing Masterclass. London: Textile Press, 2020.",
      "ARTRELADOS. Guia de Densidade e Estruturação de Matrizes. São Paulo: Ateliê Artrelados, 2024."
    ]
  },
  {
    "id": "d-002-densidade-de-bordado",
    "code": "D-002",
    "term": "Densidade de Bordado",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo feminino e substantivo masculino.",
    "category": "Terminologia Geral",
    "summary": "Grau de concentração de pontos de uma região ou do conjunto global de elementos de uma matriz.",
    "definition": "A densidade de bordado corresponde ao grau de concentração dos pontos utilizados para construir uma determinada região ou conjunto de elementos de uma matriz. O conceito está diretamente relacionado à ocupação da superfície do tecido pelos pontos e à quantidade de material empregada na formação do bordado. Enquanto a densidade de pontos enfatiza a concentração local em determinada área, a densidade de bordado descreve a característica global do desenho ou de grandes blocos do projeto.",
    "technicalDetails": "Avalia a distribuição média de pontos por centímetro quadrado em relação à área total do bordado, considerando a sobreposição de camadas, a espessura da linha e o tipo de ponto utilizado.",
    "construction": [
      "Estrutura global de objetos",
      "Combinação de pontos de cobertura e base",
      "Espaçamento médio entre passagens",
      "Distribuição de peso e rigidez"
    ],
    "howItWorks": [
      "1. O programador avalia o comportamento global da matriz sobre o substrato têxtil.",
      "2. Áreas uniformes mantêm uma concentração constante para criar homogeneidade visual.",
      "3. Áreas de transição recebem variações para aliviar o peso da peça bordada."
    ],
    "mainTypes": [
      "Densidade Uniforme (Preenchimentos contínuos e homogêneos)",
      "Densidade Variável (Texturas, sombras e degradês)",
      "Densidade Leve (Para tecidos finos e voil)",
      "Densidade Estruturada (Para jaquetas, sarja e bonés)"
    ],
    "advantages": [
      "✔ Assegura a estabilidade dimensional do bordado no tecido",
      "✔ Evita deformações e franzimentos em peças acabadas",
      "✔ Auxilia na correta precificação comercial baseada no tempo de máquina"
    ],
    "limitations": [
      "Uma matriz com densidade de bordado visualmente perfeita na tela pode reagir de forma diferente dependendo do tipo de tecido real."
    ],
    "commonErrors": [
      "❌ Avaliar a qualidade de uma matriz apenas pelo número total de pontos sem observar a distribuição.",
      "❌ Ignorar a combinação linha + tecido + ponto + estabilizador.",
      "❌ Não considerar o impacto do underlay na densidade global da matriz."
    ],
    "voceSabia": "Dois bordados com exatamente a mesma quantidade de pontos podem ter densidades completamente distintas se um deles tiver o dobro da área física do outro!",
    "curiosidadeTecnica": "Dois preenchimentos com quantidade semelhante de pontos podem apresentar percepções visuais diferentes devido à inclinação dos pontos, ao tipo de ponto e à reflexão da luz na linha de poliéster.",
    "dicaArtrelados": "Quando analisar uma matriz, não olhe somente para o número de pontos. Observe a distribuição deles: quantidade + distribuição + tecido + linha + estabilização + tempo de execução. Isso melhora o bordado e afina sua precificação!",
    "applications": [
      "Planejamento global de matrizes para confecção, personalização e uniformes."
    ],
    "troubleshootingTips": [
      "Se o bordado repuxar o tecido ao redor do desenho, reduza a densidade de bordado global e melhore o bastidoramento."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Densidade Variável",
      "Matriz de Bordado",
      "Underlay",
      "Digitalização"
    ],
    "tags": [
      "d-002",
      "densidade de bordado",
      "concentracao",
      "matriz",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas (concentração, espessura) e do árabe hispânico al-burdā (tecido bordado ou listrado). No contexto fabril moderno, o termo 'densidade de bordado' consolidou-se na indústria têxtil para medir o peso e o consumo de matéria-prima por decímetro quadrado de produto pronto.",
    "beginnerExplanation": "Enquanto a 'densidade de pontos' olha para um pedacinho específico do desenho, a 'densidade de bordado' olha para o projeto inteiro: é o peso geral do bordado na sua peça de roupa. Ajuda você a saber se a matriz não vai ficar pesada demais para um tecido fininho ou leve demais para um casaco grosso.",
    "practicalExercise": "Pegue duas camisetas iguais: em uma, borde um brasão com preenchimento total sólido e pesado (alta densidade de bordado); na outra, borde o mesmo brasão apenas em contornos elegantes com pontos leves. Vista ou segure as duas peças: repare como a primeira fica repuxando e pesada no peito, enquanto a segunda tem caimento macio e natural.",
    "quickSummary": "Densidade de bordado é a concentração global de pontos em relação à área total do projeto, fundamental para calibrar o caimento têxtil e a precificação.",
    "bibliographicReferences": [
      "TAJIMA. Industrial Embroidery Operation & Quality Guide. Nagoya: Tokai Industrial Sewing Machine Co., 2021.",
      "KRAUSZ, P. The Industrial Embroidery Handbook. New York: Textile Media, 2019.",
      "ARTRELADOS. Manual de Planejamento e Precificação no Bordado. São Paulo: Ateliê Artrelados, 2024."
    ]
  },
  {
    "id": "d-003-densidade-variavel",
    "code": "D-003",
    "term": "Densidade Variável",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Programação de Bordado",
    "summary": "Aplicação de diferentes níveis de concentração de pontos em um mesmo objeto para criar texturas, sombras e degradês.",
    "definition": "A densidade variável é a utilização de diferentes níveis de concentração de pontos dentro de uma mesma matriz ou entre diferentes regiões de um desenho. Em vez de aplicar uma única densidade a toda a área, o programador ajusta a distribuição dos pontos de acordo com o efeito desejado, o tipo de tecido e as necessidades de cada região, criando transições graduais ou abruptas.",
    "technicalDetails": "Configurada nos softwares de digitalização através de parâmetros de gradiente (densidade inicial vs. final, curva exponencial ou linear), permitindo transições de 0.35mm até 2.50mm de espaçamento dentro do mesmo bloco vetorial.",
    "construction": [
      "Área de alta concentração (sombra / volume)",
      "Zona de transição gradual (gradiente)",
      "Área aberta / baixa concentração (luz / transparência)",
      "Underlay sincronizado com a variação"
    ],
    "howItWorks": [
      "1. O digitalizador aplica a ferramenta de gradiente ou densidade progressiva no objeto.",
      "2. O software calcula o aumento ou diminuição progressiva do espaçamento entre as passagens.",
      "3. Duas cores sobrepostas com densidades variáveis opostas misturam-se suavemente criando efeito de fusão."
    ],
    "mainTypes": [
      "Gradiente Linear (Variação contínua de um lado ao outro)",
      "Gradiente Radial / Curvilíneo (Acompanha o centro ou curvas da forma)",
      "Densidade Variável por Zonas (Definida por áreas de luz e sombra)"
    ],
    "advantages": [
      "✔ Cria efeitos de sombra, profundidade e realismo impressionantes",
      "✔ Permite mesclar duas cores de linha criando transições perfeitas (degradê)",
      "✔ Reduz pontos desnecessários e alivia o peso do bordado no tecido",
      "✔ Evita acúmulo excessivo de linha em áreas sobrepostas"
    ],
    "limitations": [
      "Transições muito abruptas podem resultar em falhas de cobertura ou visual desigual se o tecido de fundo tiver alto contraste."
    ],
    "commonErrors": [
      "❌ Alterar a densidade apenas para tentar reduzir pontos sem planejar o efeito visual.",
      "❌ Criar variações exageradas entre áreas contíguas sem uma zona de transição suave.",
      "❌ Esquecer de ajustar o underlay para acompanhar a área mais aberta do gradiente."
    ],
    "voceSabia": "A densidade variável permite criar sensação de profundidade e realismo tridimensional em pelagens de animais e pétalas sem precisar trocar de cor de linha.",
    "curiosidadeTecnica": "Em softwares profissionais, pequenas alterações no espaçamento produzem variações perceptíveis na reflexão da luz na linha, transformando a distribuição dos pontos em um elemento artístico autônomo.",
    "dicaArtrelados": "Use a densidade variável com propósito! Antes de alterar a densidade de uma região, pergunte: 'Quero mudar a cobertura, a textura, o peso ou apenas corrigir um problema?' Se for para corrigir falhas, revise primeiro a estrutura e o underlay da matriz.",
    "applications": [
      "Efeitos fotográficos, sombras de personagens, plumagens, pétalas de flores e fundos texturizados."
    ],
    "troubleshootingTips": [
      "Se o tecido aparecer em excesso na parte aberta do gradiente, acrescente um underlay leve ou diminua o espaçamento máximo."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Ponto de Preenchimento",
      "Efeitos Visuais",
      "Underlay"
    ],
    "tags": [
      "d-003",
      "densidade variavel",
      "gradiente",
      "sombras",
      "degrade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas (densidade) e variabilis (que muda, inconstante), derivado do verbo variare (mudar, matizar cores). No bordado artístico e digital, a densidade variável nasceu da técnica manual do 'ponto matiz' (needle painting), onde a bordadeira variava a proximidade dos fios para imitar sombras naturais de flores e penas.",
    "beginnerExplanation": "Densidade variável é como pintar com linha: em vez de preencher tudo com a mesma quantidade de pontos, você começa com os pontos bem juntinhos em um lado e vai afastando suavemente até o outro lado. Isso cria sombras, degradês de cores e sensação de 3D sem precisar trocar de linha!",
    "practicalExercise": "Abra seu software de matrizes e desenhe uma pétala de flor. Aplique a ferramenta de gradiente ou densidade progressiva, definindo o início com 0.38mm e o final com 1.20mm. Borde sobre um tecido branco com linha vermelha: observe como a raiz da pétala fica vermelha escura e a ponta fica clara e suave, revelando o fundo branco.",
    "quickSummary": "Densidade variável é o ajuste dinâmico do espaçamento de pontos em um mesmo objeto para produzir efeitos artísticos de luz, sombra e transição de cores.",
    "bibliographicReferences": [
      "HATCH BY WILCOM. Creating Realistic Textures with Variable Density. Sydney, 2023.",
      "NICOLAS, C. Art of Shading and Thread Blending in Machine Embroidery. Paris: Éditions Têxteis, 2021.",
      "ARTRELADOS. Técnicas de Degradê e Pintura com Agulha no Bordado Eletrônico. São Paulo, 2024."
    ]
  },
  {
    "id": "d-004-densidade-excessiva",
    "code": "D-004",
    "term": "Densidade Excessiva",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Solução de Problemas",
    "summary": "Concentração desnecessária ou exagerada de pontos que provoca rigidez, enrugamento e quebras mecânicas.",
    "definition": "A densidade excessiva ocorre quando determinada região da matriz apresenta uma concentração de pontos superior à necessária para obter a cobertura e o resultado desejado. Esse excesso de penetrações e acúmulo de linha sobrecarrega a estrutura do tecido, aumenta o tempo de execução, desgasta a máquina e pode causar furos ou quebras frequentes.",
    "technicalDetails": "Caracteriza-se por espaçamentos inferiores a 0.30mm sem necessidade técnica, ou pelo empilhamento de camadas de preenchimento completo sem eliminação de sobreposições ocultas (recurso Remove Hidden Stitches desativado).",
    "construction": [
      "Passagens de linha superpostas em excesso",
      "Múltiplas camadas de underlay desnecessárias",
      "Pontos excessivamente curtos acumulados",
      "Perfurações repetitivas no mesmo ponto do tecido"
    ],
    "howItWorks": [
      "1. A agulha perfura o tecido centenas de vezes na mesma microárea.",
      "2. O acúmulo de linha forma um relevo duro e volumoso.",
      "3. As tramas do tecido são empurradas e cortadas pelo excesso de penetrações.",
      "4. A linha sofre atrito extremo contra a agulha aquecida, rompendo com frequência."
    ],
    "mainTypes": [
      "Excesso por Configuração no Software (Espaçamento abaixo do limite seguro)",
      "Excesso por Redimensionamento sem Recalcular Pontos",
      "Excesso por Sobreposição de Camadas (Falta de recorte interno)"
    ],
    "advantages": [
      "✔ (Nenhuma vantagem técnica real; é considerado um vício de programação ou execução)"
    ],
    "limitations": [
      "Prejudica o caimento da peça, encarece o trabalho e danifica tecidos delicados."
    ],
    "commonErrors": [
      "❌ Aumentar os pontos da matriz para tentar corrigir falhas que eram causadas por entretela frouxa.",
      "❌ Reduzir o tamanho da matriz em 30% a 50% sem recalcular a quantidade de pontos.",
      "❌ Acreditar que matriz com número astronômico de pontos é sinônimo de alta qualidade."
    ],
    "voceSabia": "Uma matriz com densidade excessiva pode cortar o tecido como uma serra microperfurada, fazendo com que o bordado se destaque e caia após a primeira lavagem da peça!",
    "curiosidadeTecnica": "O excesso de densidade é ainda mais crítico em regiões minúsculas (como letras de 4mm), onde o olho da agulha não tem espaço para formar a laçada sem colidir com a linha anterior.",
    "dicaArtrelados": "Se você está pensando em aumentar a densidade, pare um momento e investigue a causa! Talvez o problema esteja no underlay, na direção dos pontos ou na estabilização do tecido. Corrigir a causa raiz é muito melhor do que simplesmente entupir a matriz de pontos.",
    "applications": [
      "Diagnóstico e correção de matrizes com problemas de rigidez, quebras e repuxamento."
    ],
    "troubleshootingTips": [
      "Em caso de bordado duro como placa, reduza a densidade para 0.40mm a 0.45mm e ative o recurso de remoção de sobreposição oculta no software."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Densidade Insuficiente",
      "Repuxamento",
      "Quebra de Linha"
    ],
    "tags": [
      "d-004",
      "densidade excessiva",
      "problemas",
      "rigidez",
      "quebra",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas (densidade) e excessivus (que ultrapassa a medida justa, exorbitante), derivado de excedere (ir além do limite). No bordado mecânico, a densidade excessiva tornou-se uma patologia comum após o advento dos softwares automáticos que não eliminavam sobreposição de camadas ocultas.",
    "beginnerExplanation": "Densidade excessiva é colocar pontos demais no mesmo lugar. É o famoso bordado que vira uma 'tábua' ou 'chapa dura', que fura o tecido, entorta agulha e arrebenta a linha toda hora. O excesso de linha nunca conserta um desenho mal planejado; ele só estraga a peça.",
    "practicalExercise": "Borde em um retalho de tecido fino uma letra com preenchimento duplo superposto (densidade abaixo de 0.28mm sem remover pontos ocultos). Observe o barulho da máquina sofrendo, sinta a quentura na agulha e veja como o verso fica com uma crosta grossa de linha que chega a quebrar a agulha.",
    "quickSummary": "Densidade excessiva é o acúmulo desnecessário de pontos que provoca rigidez extrema, quebras mecânicas e furos irreversíveis no tecido.",
    "bibliographicReferences": [
      "MADEIRA. Embroidery Troubleshooting & Needle Deflection Manual. Freiburg: Madeira Garnfabrik, 2022.",
      "SCHMETZ. Needle Heat, Friction and Excessive Penetration in Automatic Embroidery. Herzogenrath, 2021.",
      "ARTRELADOS. Prevenção de Falhas Mecânicas e Alívio de Matrizes. São Paulo, 2024."
    ]
  },
  {
    "id": "d-005-densidade-insuficiente",
    "code": "D-005",
    "term": "Densidade Insuficiente",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Solução de Problemas",
    "summary": "Concentração baixa de pontos que deixa o tecido aparente de forma indesejada e causa cobertura irregular.",
    "definition": "A densidade insuficiente ocorre quando a concentração de pontos em determinada área da matriz é menor do que a necessária para produzir a cobertura ou o efeito visual esperado. Como consequência, o fundo do tecido permanece visível entre as passagens de linha, resultando em um desenho com aspecto ralo, fraco ou falhado.",
    "technicalDetails": "Ocorre quando o espaçamento entre pontos é excessivamente largo (ex: superior a 0.50mm em tecidos contrastantes) ou quando o underlay de suporte não sustenta a linha superior contra as fibras do tecido.",
    "construction": [
      "Espaçamento aberto entre passagens de linha",
      "Ausência de base estabilizadora (underlay)",
      "Espaço visível entre os fios de bordado"
    ],
    "howItWorks": [
      "1. A máquina executa os pontos com espaçamento largo entre as passagens.",
      "2. A linha de bordado não consegue encostar na passagem vizinha.",
      "3. O tecido de fundo aparece nos vãos entre os pontos, gerando aspecto translúcido."
    ],
    "mainTypes": [
      "Insuficiência Não Intencional (Falha técnica de cobertura)",
      "Insuficiência Intencional (Efeito artístico de transparência e textura)"
    ],
    "advantages": [
      "✔ Quando intencional, produz efeitos leves e econômicos em fundos amplos"
    ],
    "limitations": [
      "Quando não planejada, compromete o acabamento e a nitidez dos detalhes e textos."
    ],
    "commonErrors": [
      "❌ Aumentar excessivamente a densidade sem verificar se o problema era apenas falta de underlay ou direção errada dos pontos.",
      "❌ Ignorar a cor e a textura do tecido (bordar linha branca sobre tecido preto exige mais suporte).",
      "❌ Acreditar que toda falha de cobertura é exclusivamente culpa da densidade."
    ],
    "voceSabia": "Em tecidos com contraste extremo (como bordar branco sobre preto), uma densidade moderada combinada com um bom underlay em tatami cruzado cobre muito melhor do que uma densidade alta sem underlay!",
    "curiosidadeTecnica": "A espessura da linha (Título 40 vs Título 60) influencia diretamente a percepção de cobertura: uma linha fina (Título 60) parecerá insuficiente na mesma densidade que cobre perfeitamente com linha 40.",
    "dicaArtrelados": "Se o tecido está aparecendo, não aumente a densidade automaticamente! Faça primeiro um pequeno diagnóstico: às vezes, corrigir o underlay ou mudar o ângulo dos pontos em 45° resolve a cobertura perfeitamente sem acrescentar centenas de pontos desnecessários.",
    "applications": [
      "Diagnóstico e correção de falhas de cobertura e acabamento translúcido em matrizes."
    ],
    "troubleshootingTips": [
      "Adicione uma camada de underlay Tatami a 90° da cobertura antes de aumentar a densidade principal."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Densidade Excessiva",
      "Underlay",
      "Ponto de Preenchimento"
    ],
    "tags": [
      "d-005",
      "densidade insuficiente",
      "cobertura",
      "falhas",
      "transparencia",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas (densidade) e insufficiens, -entis (que não basta, deficiente), formado pelo prefixo in- (negação) e sufficere (bastar, suprir). Historicamente associada a falhas na cobertura onde o urdume ou trama do tecido escapa à vista entre as passadas de linha.",
    "beginnerExplanation": "Densidade insuficiente é quando faltam pontos no bordado e o tecido de baixo fica aparecendo nos buracos, deixando o desenho com aspecto ralo, desbotado e mal-acabado. Mas atenção: antes de encher de pontos, verifique se o problema não é apenas a falta de uma boa costura de base (underlay)!",
    "practicalExercise": "Crie dois círculos de 4cm bordados com linha branca sobre tecido preto: no primeiro, use densidade 0.40mm SEM underlay; no segundo, use densidade 0.45mm COM underlay em Tatami cruzado a 90°. Ao bordar, compare: o segundo cobrirá muito melhor o fundo preto gastando menos linha na camada superior!",
    "quickSummary": "Densidade insuficiente é o espaçamento exagerado entre pontos que resulta em cobertura falha e aspecto translúcido indesejado no bordado.",
    "bibliographicReferences": [
      "COATS INDUSTRIAL. Machine Embroidery Coverage, Thread Count and Underlay Dynamics. London, 2021.",
      "EMBIRD. Underlay versus Density Balance in Modern Digitizing. Bratislava, 2023.",
      "ARTRELADOS. Segredos da Cobertura Perfeita sem Sobrecarga de Pontos. São Paulo, 2024."
    ]
  },
  {
    "id": "d-006-desenho-de-bordado",
    "code": "D-006",
    "term": "Desenho de Bordado",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivos masculinos.",
    "category": "Design & Criação",
    "summary": "Representação visual gráfica utilizada como motivo de referência para a criação da matriz de bordado.",
    "definition": "O desenho de bordado é a representação visual do motivo que será utilizado como base para a criação ou digitalização de uma matriz de bordado. Pode ser produzido especificamente para bordado ou adaptado a partir de uma ilustração, logotipo, símbolo, personagem ou arte gráfica. É essencial diferenciar o desenho (representação visual em imagem) da matriz (instruções executáveis de pontos para a máquina).",
    "technicalDetails": "Constitui o arquivo de referência visual (rasterizado em PNG/JPG ou vetorial em AI/CDR/SVG) que passará pela etapa de análise de viabilidade técnica têxtil antes de ser transformado em pontos.",
    "construction": [
      "Contornos e formas principais",
      "Paleta de cores de referência",
      "Proporções e escala dimensional",
      "Detalhamento e contraste visual"
    ],
    "howItWorks": [
      "1. A arte visual é concebida ou recebida do cliente.",
      "2. O digitalizador analisa a viabilidade dos traços e simplifica detalhes minúsculos.",
      "3. O desenho serve de gabarito para a criação dos objetos vetoriais e distribuição de pontos."
    ],
    "mainTypes": [
      "Desenho Vetorial Original (Ideal para traçado limpo e preciso)",
      "Imagem Bitmap / Rasterizada (Necessita vetorização ou limpeza prévia)",
      "Arte Adaptada para Bordado (Simplificada para a física das linhas)"
    ],
    "advantages": [
      "✔ Estabelece a identidade visual clara e aprovada com o cliente",
      "✔ Serve como guia visual exato durante toda a fase de digitalização",
      "✔ Permite planejar a sequência lógica de objetos antes de gerar pontos"
    ],
    "limitations": [
      "Uma imagem bonita na tela nem sempre pode ser reproduzida fielmente em pontos sem adaptações dimensionais."
    ],
    "commonErrors": [
      "❌ Confundir imagem com matriz, acreditando que qualquer foto pode ser enviada direto para a máquina.",
      "❌ Escolher imagens excessivamente complexas com microdetalhes para bordados pequenos.",
      "❌ Tentar reproduzir todos os detalhes fotográficos sem simplificar para a linguagem de pontos."
    ],
    "voceSabia": "A máquina de bordar não entende pixels nem cores visuais da tela; ela só entende coordenadas X/Y de penetração de agulha e comandos mecânicos de corte e salto!",
    "curiosidadeTecnica": "Linhas com espessura inferior a 0.8mm no desenho original geralmente desaparecem ou viram fios soltos se não forem convertidas em pontos corridos ou engrossadas para ponto cheio.",
    "dicaArtrelados": "Escolha o desenho pensando no bordado, e não apenas na tela do computador! Pergunte sempre: 'Esse detalhe continuará visível quando for transformado em pontos de linha?' Se a resposta for não, simplifique antes de digitalizar!",
    "applications": [
      "Etapa inicial de conceituação e pré-produção de qualquer matriz de bordado."
    ],
    "troubleshootingTips": [
      "Em desenhos com letras muito pequenas, aumente o espaçamento entre as letras no desenho antes de programar os pontos."
    ],
    "relatedTerms": [
      "Desenho Digitalizado",
      "Digitalização de Bordado",
      "Matriz de Bordado",
      "Vetorização"
    ],
    "tags": [
      "d-006",
      "desenho",
      "arte",
      "matriz",
      "design",
      "criacao",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim vulgar deexsignare (marcar, traçar linhas, indicar com sinais), derivado de signum (marca, sinal), e do árabe hispânico al-burdā (tecido lavrado). Refere-se à concepção plástica original antes da tradução para comandos eletromecânicos.",
    "beginnerExplanation": "O desenho de bordado é a imagem que você quer bordar (uma foto, uma flor desenhada no papel, um logotipo de empresa). Mas lembre-se: uma imagem não é uma matriz! A imagem é apenas o desenho visual; a matriz é o arquivo com os passos de costura que a máquina lê.",
    "practicalExercise": "Pegue o logotipo de uma empresa no formato JPG ou PNG e amplie bastante na tela do celular até ver os pequenos detalhes. Anote quais detalhes têm menos de 1mm de espessura: esses detalhes precisarão ser simplificados ou eliminados antes de transformar a imagem em bordado.",
    "quickSummary": "Desenho de bordado é a representação gráfica de referência que serve como ponto de partida para a criação de uma matriz digital.",
    "bibliographicReferences": [
      "PUNDOLE, F. Graphic Adaptation for Machine Embroidery Systems. Mumbai: Stitches Publishing, 2020.",
      "LEE, C. From Vector Artwork to Machine Embroidery. Seoul: Design & Threads, 2022.",
      "ARTRELADOS. Guia de Análise Visual e Viabilidade Técnica de Desenhos. São Paulo, 2024."
    ]
  },
  {
    "id": "d-007-desenho-digitalizado",
    "code": "D-007",
    "term": "Desenho Digitalizado",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivo masculino e particípio.",
    "category": "Softwares & Formatos",
    "summary": "Representação gráfica que foi preparada e interpretada digitalmente para servir de base à matriz de bordado.",
    "definition": "O desenho digitalizado é uma representação gráfica que foi preparada, limpa ou interpretada digitalmente em um software gráfico ou de bordado para servir de base direta à criação da matriz. No contexto do bordado eletrônico, essa preparação procura transformar características visuais (linhas, áreas de cor, sombras) em elementos bem delimitados que possam posteriormente ser preenchidos por pontos.",
    "technicalDetails": "Representa a ponte entre a imagem bruta e a matriz final. Envolve a separação em camadas de cores e a delimitação precisa de nós e curvas antes da geração dos parâmetros de ponto.",
    "construction": [
      "Vetorização limpa de contornos",
      "Camadas cromáticas separadas",
      "Curvas de Bézier e nós otimizados",
      "Proporção ajustada à escala de bordado"
    ],
    "howItWorks": [
      "1. A imagem original passa por um software de vetorização ou módulo gráfico.",
      "2. As cores são reduzidas e os contornos refinados.",
      "3. Os objetos gráficos são organizados na ordem em que serão digitalizados.",
      "4. O arquivo serve como base técnica para a aplicação de Satin, Tatami ou Ponto Corrido."
    ],
    "mainTypes": [
      "Vetor Otimizado para Bordado (Com compensações e tolerâncias)",
      "Arte Rastreável (Guia de fundo para digitalização manual)",
      "Desenho Segmentado por Cores"
    ],
    "advantages": [
      "✔ Agiliza a aplicação de pontos com precisão geométrica milimétrica",
      "✔ Elimina imperfeições, serrilhados e ruídos de imagens de baixa qualidade",
      "✔ Facilita o redimensionamento proporcional do desenho antes de gerar pontos"
    ],
    "limitations": [
      "Ter o desenho digitalizado em vetor ainda não significa ter uma matriz de bordado pronta para bordar."
    ],
    "commonErrors": [
      "❌ Pensar que qualquer imagem em vetor já está pronta para bordar sem configurar pontos.",
      "❌ Não adaptar a espessura das linhas do desenho ao tamanho final desejado.",
      "❌ Confiar somente na aparência do vetor sem checar a física do tecido."
    ],
    "voceSabia": "A preparação da imagem pode ser tão demorada e importante quanto a própria digitalização dos pontos: 70% dos erros de uma matriz nascem de uma imagem mal preparada!",
    "curiosidadeTecnica": "Softwares como Wilcom usam o CorelDRAW integrado para preparar o desenho digitalizado em vetores antes de convertê-lo em objetos inteligentes de bordado.",
    "dicaArtrelados": "Antes de digitalizar, organize o desenho! Simplifique detalhes desnecessários, defina as áreas principais e pense na ordem em que elas deverão ser bordadas. Isso economiza horas de retrabalho na matriz!",
    "applications": [
      "Preparação de logotipos de empresas, ilustrações personalizadas e desenhos infantis."
    ],
    "troubleshootingTips": [
      "Se as curvas ficarem com cantos pontudos ou irregulares na matriz, limpe o excesso de nós no vetor do desenho digitalizado."
    ],
    "relatedTerms": [
      "Desenho de Bordado",
      "Digitalização de Bordado",
      "Digitalização Manual",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-007",
      "desenho digitalizado",
      "preparacao",
      "vetor",
      "matriz",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim deexsignare (traçar) e do latim digitalis (relativo aos dedos, de digitus, dedo/número), aplicado no século XX à computação gráfica e conversão de sinais analógicos em representações binárias.",
    "beginnerExplanation": "Desenho digitalizado é a imagem que foi limpa no computador (com contornos bem definidos e cores separadas) para que possamos aplicar os pontos por cima dela com facilidade. É a 'planta baixa' perfeita para construir o bordado.",
    "practicalExercise": "Importe uma imagem com fundo sujo e cheia de sombras para o seu software. Tente aplicar pontos direto: veja como fica confuso. Agora, faça uma limpeza dos contornos ou vetorize a imagem antes: repare como a aplicação dos pontos fica limpa, rápida e precisa.",
    "quickSummary": "Desenho digitalizado é a arte gráfica tratada e estruturada digitalmente para servir de guia exato na programação de pontos da matriz.",
    "bibliographicReferences": [
      "CORELDRAW. CorelDRAW for Embroidery Designers: Vector Preparation. Ottawa: Alludo, 2023.",
      "ADOBE. Vector Graphics for Textile Application. San Jose: Adobe Press, 2021.",
      "ARTRELADOS. Preparação de Imagens e Vetores para Digitalização Profissional. São Paulo, 2024."
    ]
  },
  {
    "id": "d-008-digitalizacao-de-bordado",
    "code": "D-008",
    "term": "Digitalização de Bordado",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivo feminino e substantivo masculino.",
    "category": "Programação de Bordado",
    "summary": "Processo técnico de transformar uma imagem em uma sequência estruturada de pontos e comandos para a máquina de bordar.",
    "definition": "A digitalização de bordado (também conhecida como programação de matrizes ou poncheamento) é o processo técnico e artesanal de transformar uma imagem, desenho ou conceito visual em uma matriz de bordado composta por comandos e coordenadas que a máquina de bordar consegue interpretar e executar fisicamente no tecido.",
    "technicalDetails": "Durante a digitalização são configurados todos os parâmetros técnicos: tipos de pontos (Satin, Tatami, Ponto Corrido), ângulos, densidade, sequência, underlay, compensação de encolhimento (pull compensation), sobreposições (overlap), pontos de entrada e saída, cortes e saltos.",
    "construction": [
      "Mapeamento de formas em objetos de bordado",
      "Definição da sequência lógica de execução",
      "Atribuição de subpontos e pontos de cobertura",
      "Inclusão de comandos mecânicos (cortes, paradas e trocas de cor)"
    ],
    "howItWorks": [
      "1. A imagem é importada para o software de digitalização.",
      "2. O programador cria os objetos definindo tipo de ponto, direção e densidade.",
      "3. Configuram-se as compensações para combater o encolhimento e estiramento do tecido.",
      "4. O software gera o arquivo final nos formatos da máquina (PES, DST, JEF, EXP, etc.)."
    ],
    "mainTypes": [
      "Digitalização Manual (Total controle criativo e técnico pelo profissional)",
      "Digitalização Automática (Processamento algorítmico assistido pelo software)",
      "Digitalização Híbrida (Combinação dos dois métodos)"
    ],
    "advantages": [
      "✔ Transforma qualquer ideia visual em um produto têxtil de alto valor agregado",
      "✔ Garante produção rápida, limpa e estável na máquina de bordar",
      "✔ Minimiza quebras de linha, paradas desnecessárias e desperdício de tecido"
    ],
    "limitations": [
      "Exige conhecimento profundo de mecânica de bordado, propriedades dos tecidos e domínio de software especializado."
    ],
    "commonErrors": [
      "❌ Pensar que digitalizar significa apenas salvar uma imagem com a extensão .PES ou .DST.",
      "❌ Não considerar as características físicas do tecido onde a matriz será bordada.",
      "❌ Ignorar a ordem e sequência lógica de execução dos objetos."
    ],
    "voceSabia": "Duas matrizes criadas a partir exatamente do mesmo desenho podem ter comportamentos completamente diferentes na máquina dependendo das decisões tomadas na digitalização!",
    "curiosidadeTecnica": "A digitalização é a engenharia do bordado: enquanto o designer desenha formas estáticas, o digitalizador desenha forças dinâmicas que atuam sobre o tecido sob tensão constante.",
    "dicaArtrelados": "Uma boa digitalização começa antes de abrir o computador! Pergunte primeiro: Onde será bordado? Qual o tamanho? Qual tecido? Qual linha? Qual bastidor? Só depois de ter essas respostas pense em como transformar o desenho em pontos!",
    "applications": [
      "Criação de matrizes corporativas, moda, enxovais, emblemas, apliquês e monogramas."
    ],
    "troubleshootingTips": [
      "Sempre realize um teste prático da matriz no mesmo tecido e com a mesma entretela antes de iniciar uma produção comercial."
    ],
    "relatedTerms": [
      "Digitalizador de Bordado",
      "Digitalização Manual",
      "Digitalização Automática",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-008",
      "digitalizacao",
      "programacao",
      "matrizes",
      "softwares",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis (numérico, expresso em dígitos computáveis) e do árabe al-burdā (bordado). No setor têxtil, o termo substituiu a antiga expressão 'poncheamento' (do inglês punching, perfurar cartões) a partir dos anos 1980 com a popularização dos microcomputadores pessoais.",
    "beginnerExplanation": "Digitalização de bordado é a mágica de transformar um desenho de tela em instruções reais de costura! É quando você decide onde a agulha vai entrar, qual o tipo de ponto (cheio, tatami, correndo), a inclinação da linha e a ordem em que tudo será costurado.",
    "practicalExercise": "Pegue uma letra 'A' simples: no software de bordado, configure as pernas da letra em ponto cheio (Satin), o traço do meio em ponto cheio e adicione uma costura de base (underlay) central. Exporte para a máquina e borde: você acabou de fazer sua primeira digitalização manual!",
    "quickSummary": "Digitalização de bordado é o processo técnico de converter projetos visuais em matrizes executáveis compostas por coordenadas e comandos de máquina.",
    "bibliographicReferences": [
      "BLANCO, R. Manual de Ponchado y Digitalización Textil. Madri: Ediciones Técnicas, 2021.",
      "WILCOM. Digitizing Fundamentals & Object Properties. Sydney: Wilcom International, 2023.",
      "ARTRELADOS. Fundamentos da Digitalização Profissional de Matrizes. São Paulo, 2024."
    ]
  },
  {
    "id": "d-009-digitalizacao-manual",
    "code": "D-009",
    "term": "Digitalização Manual",
    "level": "Avançado 🔴",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Programação de Bordado",
    "summary": "Método em que o programador cria e ajusta deliberadamente cada objeto, parâmetro e ponto da matriz.",
    "definition": "A digitalização manual é o processo artesanal e técnico no qual o programador cria e ajusta conscientemente cada um dos objetos, parâmetros e trajetórias de uma matriz de bordado. O profissional decide a forma exata de cada elemento, o tipo de ponto, o ângulo, a densidade, a ordem de execução, os subpontos de suporte e as conexões entre objetos.",
    "technicalDetails": "Oferece controle total sobre a topologia dos pontos, minimizando pontos de salto e cortes, permitindo otimizar a matriz para alta velocidade (acima de 900 PPM) com avesso impecável e máxima estabilidade dimensional.",
    "construction": [
      "Desenho deliberado de nós e contornos",
      "Linhas de direção de ponto personalizadas",
      "Underlays projetados sob medida para o tecido",
      "Controle preciso de pontos de entrada e saída"
    ],
    "howItWorks": [
      "1. O digitalizador traça manualmente cada objeto com as ferramentas de curva e ponto.",
      "2. Aplica compensações específicas para a elasticidade e trama do tecido.",
      "3. Define a trajetória contínua para evitar cortes excessivos de linha.",
      "4. Realiza a simulação virtual e ajustes finos ponto a ponto."
    ],
    "mainTypes": [
      "Digitalização Manual Objeto a Objeto (Padrão profissional)",
      "Digitalização Ponto a Ponto (Para microdetalhes e monogramas de alta precisão)"
    ],
    "advantages": [
      "✔ Qualidade estética e técnica incomparável no resultado final",
      "✔ Máxima adaptação ao tipo de tecido (malha, couro, toalha, seda)",
      "✔ Redução drástica de pontos desnecessários e menor tempo de máquina",
      "✔ Avesso extremamente limpo com o menor número possível de cortes"
    ],
    "limitations": [
      "Exige tempo, estudo técnico constante e prática aprofundada com softwares especializados."
    ],
    "commonErrors": [
      "❌ Criar objetos sem planejar previamente a sequência geral do desenho.",
      "❌ Inserir detalhes finos que não funcionarão no tamanho físico real do bordado.",
      "❌ Não revisar a matriz em modo de simulação antes de enviar para a produção."
    ],
    "voceSabia": "Uma matriz digitalizada manualmente por um profissional experiente pode ter 30% menos pontos e bordar muito mais bonito e rápido do que uma conversão automática cheia de nós e saltos!",
    "curiosidadeTecnica": "Na digitalização manual, o profissional pode aplicar a técnica de 'caminho de viagem' (running stitch oculto sob preenchimentos futuros) para conectar objetos sem acionar o cortador de linha.",
    "dicaArtrelados": "Na digitalização manual, pense primeiro na estrutura e depois nos detalhes! Pergunte: Qual objeto começa? Qual termina? O que ficará por cima? Onde a linha precisa parar? Essa visão reduz retrabalho e gera matrizes supereficientes.",
    "applications": [
      "Matrizes de alto padrão, logotipos corporativos rigorosos, brasões e peças personalizadas de luxo."
    ],
    "troubleshootingTips": [
      "Se houver muitos cortes de linha, reposicione a saída de um objeto para ficar ao lado da entrada do próximo objeto."
    ],
    "relatedTerms": [
      "Digitalização Automática",
      "Digitalizador de Bordado",
      "Sequência de Pontos",
      "Underlay",
      "Compensação de Puxão"
    ],
    "tags": [
      "d-009",
      "digitalizacao manual",
      "programacao",
      "qualidade",
      "precisao",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis (digital) e manualis (relativo às mãos, executado com perícia manual direta, de manus, mão). Representa o ápice da maestria artesanal transposta para o ambiente de software CAD têxtil.",
    "beginnerExplanation": "Digitalização manual é quando você, com sua própria cabeça e mãos no mouse, desenha objeto por objeto da matriz, decidindo cada ângulo, cada costura de base e cada corte de linha. É o que diferencia um bordado profissional impecável de um bordado amador e problemático.",
    "practicalExercise": "Escolha um desenho de flor com 3 folhas: digitalize manualmente folha por folha, planejando para que a máquina termine a primeira folha exatamente no ponto onde começa a segunda folha, usando uma costurinha escondida (caminho de viagem) para eliminar cortes de linha. Borde e cronometre a velocidade!",
    "quickSummary": "Digitalização manual é o método de programação em que cada objeto, ângulo, underlay e parâmetro é deliberadamente projetado pelo profissional.",
    "bibliographicReferences": [
      "GARCIA, E. Advanced Embroidery Digitizing and Node Editing. Barcelona: Marcombo, 2022.",
      "TAJIMA. DGML by Pulse: Advanced Manual Stitch Manipulation. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. Maestria em Digitalização Manual e Otimização de Percurso. São Paulo, 2024."
    ]
  },
  {
    "id": "d-010-digitalizacao-automatica",
    "code": "D-010",
    "term": "Digitalização Automática",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Softwares & Formatos",
    "summary": "Recurso de software que converte automaticamente imagens em objetos de bordado por meio de algoritmos.",
    "definition": "A digitalização automática é o processo no qual o software de bordado interpreta uma imagem gráfica (bitmap ou vetor) e utiliza recursos automatizados para gerar objetos e caminhos de pontos sem a necessidade de o usuário desenhar cada elemento manualmente. O programa analisa áreas de cor, formas e contrastes e propõe uma estrutura de matriz pronta.",
    "technicalDetails": "Utiliza algoritmos de segmentação de imagem e reconhecimento de contornos. Embora rápida, a ferramenta não possui discernimento sobre a tensão do tecido, elasticidade, espessura da linha ou a física do processo de costura.",
    "construction": [
      "Módulo de redução e leitura cromática",
      "Gerador algorítmico de blocos de pontos",
      "Atribuição padrão de underlay e densidade",
      "Inserção automática de cortes entre cores"
    ],
    "howItWorks": [
      "1. A imagem é carregada e o software identifica os blocos de cores.",
      "2. O algoritmo converte cada bloco em Ponto Cheio ou Tatami conforme a largura.",
      "3. São inseridos pontos de entrada, saída e cortes genéricos.",
      "4. A matriz gerada exige revisão humana completa antes da execução."
    ],
    "mainTypes": [
      "Conversão em 1 Clique (Auto-Digitize Instantâneo)",
      "Varinha Mágica / Seleção por Cor (Gera objetos a partir de cliques em áreas)",
      "Autodigitização com Assistente (Permite selecionar tecidos e paleta prévia)"
    ],
    "advantages": [
      "✔ Agilidade extrema para gerar esboços rápidos e prévias para clientes",
      "✔ Excelente ponto de partida para formas geométricas simples e bem definidas",
      "✔ Facilita o aprendizado inicial para quem está conhecendo o universo das matrizes"
    ],
    "limitations": [
      "Gera frequentemente excesso de cortes de linha, sequências ilógicas, falta de compensação de repuxo e pontos curtos perigosos para a agulha."
    ],
    "commonErrors": [
      "❌ Enviar a matriz automática direto para a máquina sem revisão técnica.",
      "❌ Acreditar que o software compreende automaticamente o tipo de tecido.",
      "❌ Confundir uma simulação bonita na tela com uma matriz tecnicamente viável."
    ],
    "voceSabia": "A digitalização automática pode economizar tempo inicial, mas se a imagem for complexa, o tempo gasto para corrigir os defeitos da conversão costuma ser maior do que digitalizar manualmente do zero!",
    "curiosidadeTecnica": "Imagens com degradês suaves ou compressão JPG cheia de ruídos enganam o algoritmo automático, criando centenas de micro-objetos de 2 ou 3 pontos que travam a máquina.",
    "dicaArtrelados": "Use a digitalização automática como ponto de partida, nunca como ponto final! Depois da conversão, faça uma revisão completa: confira sequência + pontos curtos + densidade + underlay + tamanho + tecido!",
    "applications": [
      "Esboços rápidos, desenhos infantis simples com poucas cores e formas geométricas puras."
    ],
    "troubleshootingTips": [
      "Use o filtro de 'Eliminar Pontos Curtos' (Short Stitches Filter) do software para apagar pontos menores que 0.8mm gerados pela conversão automática."
    ],
    "relatedTerms": [
      "Digitalização Manual",
      "Desenho Digitalizado",
      "Vetorização",
      "Sequência de Pontos"
    ],
    "tags": [
      "d-010",
      "digitalizacao automatica",
      "software",
      "auto-digitizing",
      "conversao",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis e do grego automatos (que se move por si mesmo, espontâneo). Surgiu nos softwares de bordado nos anos 1990 com algoritmos de reconhecimento de formas e cores.",
    "beginnerExplanation": "Digitalização automática é quando você aperta um botão no software e ele tenta transformar a imagem em bordado sozinho em um segundo. É rápida para quebrar um galho, mas quase sempre cria nós, corta a linha toda hora e não entende se o tecido é malha ou jeans.",
    "practicalExercise": "Use o recurso de 'Autodigitize' (conversão em 1 clique) em uma imagem com logotipo. Veja quantos cortes de linha o software gerou no simulador de pontos. Em seguida, tente bordar em um retalho: veja como a máquina para muitas vezes e compare com uma matriz manual limpa.",
    "quickSummary": "Digitalização automática é a conversão algorítmica de imagens em pontos pelo software, exigindo sempre revisão humana antes da produção.",
    "bibliographicReferences": [
      "BROTHER. PE-Design Auto-Digitizing Features and Limitations. Nagoya: Brother Industries, 2022.",
      "BERNINA. Embroidery Software 9 Designer Manual: Auto-Punch vs Manual. Steckborn, 2023.",
      "ARTRELADOS. Como Auditar e Corrigir Matrizes Automáticas. São Paulo, 2024."
    ]
  },
  {
    "id": "d-011-digitalizador-de-bordado",
    "code": "D-011",
    "term": "Digitalizador de Bordado",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino.",
    "category": "Terminologia Geral",
    "summary": "Profissional especializado em interpretar projetos visuais e transformá-los em matrizes de bordado executáveis.",
    "definition": "O digitalizador de bordado (também chamado de programador de matrizes ou ponchador) é o profissional técnico e criativo responsável por converter imagens, logotipos, ilustrações e conceitos visuais em arquivos de matriz de bordado eletrônico. Ele atua como o 'tradutor' entre o que os olhos humanos enxergam na tela e o que a máquina de bordar consegue executar fisicamente com agulha e linha sobre o tecido.",
    "technicalDetails": "Domina a física têxtil, o comportamento de tração e compressão das linhas, parâmetros de software (Wilcom, Hatch, Embird, Wings, Tajima DGML) e as limitações mecânicas de máquinas domésticas e industriais.",
    "construction": [
      "Interpretação e tratamento do desenho gráfico",
      "Planejamento estrutural e sequência de execução",
      "Construção geométrica de objetos e pontos",
      "Testes e validação no tecido de aplicação"
    ],
    "howItWorks": [
      "1. Interpreta a imagem e divide o motivo mentalmente em elementos individuais.",
      "2. Planeja a ordem de costura para evitar cortes e manter a estabilidade do tecido.",
      "3. Constrói os objetos calibrando ângulos, densidades, underlays e compensações.",
      "4. Valida a matriz para garantir eficiência mecânica e acabamento perfeito."
    ],
    "mainTypes": [
      "Digitalizador Técnico Corporativo (Especialista em logotipos e uniformes)",
      "Digitalizador Artístico (Especialista em relevos 3D, retratos e texturas)",
      "Digitalizador de Ateliê (Criação de matrizes personalizadas para enxovais)"
    ],
    "advantages": [
      "✔ Garante que o bordado final tenha qualidade profissional e alta durabilidade",
      "✔ Otimiza a velocidade e reduz custos de tempo e materiais na máquina",
      "✔ Evita perdas de peças nobres por defeitos ou deformações no tecido"
    ],
    "limitations": [
      "Depende de informações claras sobre o tipo de tecido, bastidor e linha que serão utilizados no trabalho."
    ],
    "commonErrors": [
      "❌ Digitalizar uma matriz olhando apenas a estética da tela sem pensar na física do tecido.",
      "❌ Adicionar pontos em excesso acreditando que quantidade define qualidade.",
      "❌ Não realizar testes práticos em tecidos novos ou projetos complexos."
    ],
    "voceSabia": "O termo clássico 'ponchador' vem da época em que as matrizes de bordado eram gravadas em cartões perfurados de papel (como o sistema Jacquard), onde cada furo acionava um movimento mecânico!",
    "curiosidadeTecnica": "No DIBE, recomenda-se o uso de 'digitalizador de bordado' como termo mais específico e moderno, evitando a ambiguidade da palavra 'programador', que no mercado contemporâneo remete a desenvolvedores de softwares e sistemas.",
    "dicaArtrelados": "Não avalie uma matriz apenas pela quantidade de pontos que ela possui. Avalie pela maneira como esses pontos foram planejados! A pergunta de ouro do digitalizador é: 'Essa matriz foi construída pensando no tecido e na máquina em que será bordada?'",
    "applications": [
      "Estúdios de bordado, confecções, birôs de matrizes, ateliês e indústrias têxteis."
    ],
    "troubleshootingTips": [
      "Mantenha um caderno ou mostruário com fotos e amostras bordadas de cada matriz testada para rápida consulta de parâmetros de sucesso."
    ],
    "relatedTerms": [
      "Digitalização de Bordado",
      "Digitalização Manual",
      "Matriz de Bordado",
      "Software de Bordado"
    ],
    "tags": [
      "d-011",
      "digitalizador",
      "programador",
      "ponchador",
      "profissao",
      "matriz",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Derivado do latim digitalis com o sufixo de agente -or (aquele que realiza a ação). No vocabulário internacional de bordado, equivale aos termos digitizer (inglês) e ponchador (espanhol).",
    "beginnerExplanation": "O digitalizador de bordado é o profissional que cria as matrizes. Ele é o 'arquiteto' do bordado: enquanto o desenhista cria a imagem bonita, o digitalizador sabe exatamente como a linha e a agulha vão se comportar no tecido para que a peça saia perfeita.",
    "practicalExercise": "Faça uma ficha técnica de um bordado antes de sentar ao computador: anote o tecido que será usado (ex: toalha de banho felpuda), a entretela indicada (hidrossolúvel em cima + rasga-fácil embaixo), a agulha (75/11) e a linha. Exercite pensar como um digitalizador profissional!",
    "quickSummary": "Digitalizador de bordado é o profissional especializado em transformar criações visuais em arquivos de matrizes técnicas para máquinas computadorizadas.",
    "bibliographicReferences": [
      "NNEP. National Network of Embroidery Professionals Guidebook. Canton: NNEP, 2022.",
      "STITCHES MAGAZINE. The Professional Digitizer: Skills and Market Demands. Atlanta, 2021.",
      "ARTRELADOS. A Profissão de Digitalizador de Bordados no Brasil. São Paulo, 2024."
    ]
  },
  {
    "id": "d-012-direcao-do-ponto",
    "code": "D-012",
    "term": "Direção do Ponto",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos direção e ponto.",
    "category": "Programação de Bordado",
    "summary": "Orientação e sentido angular em que os pontos são posicionados dentro de determinado objeto da matriz.",
    "definition": "A direção do ponto indica o sentido ou a orientação em que os pontos são organizados para preencher ou formar uma determinada área do bordado. As passagens de linha podem ser dispostas horizontalmente, verticalmente, diagonalmente ou em ângulos curvilíneos. A direção escolhida interfere diretamente na aparência visual, no brilho da linha e no comportamento físico do tecido.",
    "technicalDetails": "Definida em graus (0° a 360°) no software. A direção dos pontos determina o sentido do encolhimento do tecido (Pull) e da expansão perpendicular (Push). Além disso, modifica a reflexão da luz na superfície filamentar do fio de poliéster ou rayon.",
    "construction": [
      "Linha diretriz angular (Stitch Angle Line)",
      "Pontos de penetração alinhados ao ângulo",
      "Variação angular em colunas curvas",
      "Compensação ajustada conforme a direção"
    ],
    "howItWorks": [
      "1. O programador traça uma ou mais guias de ângulo dentro da forma.",
      "2. A máquina executa os pontos orientando as passagens paralelamente a essa diretriz.",
      "3. A luz incide sobre a linha refletindo o brilho conforme o ângulo estabelecido.",
      "4. As forças de tração do fio atuam no tecido no mesmo sentido da direção do ponto."
    ],
    "mainTypes": [
      "Direção Horizontal (90° ou 270°)",
      "Direção Vertical (0° ou 180°)",
      "Direção Diagonal (geralmente 45° ou 135°)",
      "Direção Radial / Anatômica (acompanha contornos de pétalas, folhas e curvas)"
    ],
    "advantages": [
      "✔ Cria contrastes ricos, relevo e sensação de volume sem trocar a cor da linha",
      "✔ Acompanha as formas naturais do desenho (nervuras de folhas, pétalas e penas)",
      "✔ Permite equilibrar e neutralizar as forças de repuxamento sobre a trama do tecido"
    ],
    "limitations": [
      "Direções perfeitamente paralelas às tramas do tecido tendem a afundar e sumir se não houver underlay adequado."
    ],
    "commonErrors": [
      "❌ Usar a mesma direção em todos os objetos de um desenho, deixando o bordado plano e monótono.",
      "❌ Confundir direção do ponto com densidade (são conceitos totalmente distintos).",
      "❌ Mudar de direção sem motivo técnico ou estético, criando um aspecto confuso."
    ],
    "voceSabia": "Duas áreas bordadas exatamente com o mesmo cone de linha e na mesma densidade parecerão ter cores diferentes se uma estiver a 45° e a outra a 135°, devido à reflexão da luz na linha!",
    "curiosidadeTecnica": "Direção do ponto, direção de costura e direção do bordado são conceitos distintos: direção do ponto é a orientação angular da linha; direção de costura é o percurso da máquina; direção do bordado é a orientação geral da composição.",
    "dicaArtrelados": "Não pense na direção dos pontos apenas como 'horizontal ou vertical'. Pense nela como uma ferramenta para desenhar com linha! Ao observar uma matriz, pergunte: 'A direção dos pontos ajuda a mostrar a forma e o volume desse objeto?'",
    "applications": [
      "Preenchimentos de folhas, pétalas, rostos, letras em Satin, brasões e pelagens de animais."
    ],
    "troubleshootingTips": [
      "Se um círculo bordado estiver virando um formato oval no tecido, incline a direção do preenchimento para 45° e reforce o underlay."
    ],
    "relatedTerms": [
      "Direção de Costura",
      "Direção do Bordado",
      "Ângulo do Ponto",
      "Densidade de Pontos",
      "Ponto Satin"
    ],
    "tags": [
      "d-012",
      "direcao do ponto",
      "angulo",
      "brilho",
      "reflexao",
      "volume",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim directio, -onis (ação de dirigir em linha reta, alinhamento), derivado de dirigere (guiar, endireitar), e de punctum (ponto).",
    "beginnerExplanation": "Direção do ponto é a inclinação da linha no bordado (horizontal, vertical ou inclinada). A linha de bordado é brilhante: quando você muda a inclinação dos pontos, a luz reflete de forma diferente e faz parecer que você usou dois tons de cores, além de dar volume e relevo ao desenho!",
    "practicalExercise": "Crie dois retângulos iguais de 4cm x 2cm lado a lado usando a MESMA linha azul: no primeiro retângulo, coloque os pontos a 0° (horizontal); no segundo, coloque os pontos a 90° (vertical). Borde os dois no mesmo tecido: olhe a peça sob a luz da janela e veja a mágica da reflexão da luz fazendo os retângulos parecerem de cores diferentes!",
    "quickSummary": "Direção do ponto é a inclinação angular das passagens de linha na matriz, responsável pela reflexão da luz, relevo e compensação de tração no tecido.",
    "bibliographicReferences": [
      "MADEIRA. Light Reflection and Thread Sheen in Rayon & Polyester. Freiburg, 2021.",
      "WILCOM. Stitch Angles and Multi-Angle Object Mastery. Sydney: Wilcom, 2023.",
      "ARTRELADOS. O Poder do Brilho e Direção dos Pontos na Composição Visual. São Paulo, 2024."
    ]
  },
  {
    "id": "d-013-direcao-de-costura",
    "code": "D-013",
    "term": "Direção de Costura",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos direção e costura.",
    "category": "Programação de Bordado",
    "summary": "Percurso e sentido de deslocamento que a máquina segue para executar a sequência de pontos de um objeto.",
    "definition": "A direção de costura refere-se ao sentido ou percurso que a máquina segue para executar uma sequência de pontos dentro de um determinado objeto da matriz. Enquanto a direção do ponto indica para onde as linhas estão inclinadas, a direção de costura indica o caminho de avanço da máquina (por exemplo: bordando de baixo para cima, da esquerda para a direita, ou do centro para as bordas).",
    "technicalDetails": "Está diretamente ligada ao posicionamento dos pontos de entrada e saída do objeto e à ordem de progressão do pantógrafo. Uma boa direção de costura evita acúmulo de tecido e minimiza a necessidade de cortes e saltos longos.",
    "construction": [
      "Ponto inicial de entrada",
      "Vetor de progressão da costura",
      "Ponto final de saída",
      "Linhas de deslocamento interno"
    ],
    "howItWorks": [
      "1. A agulha inicia a costura no ponto de entrada definido.",
      "2. O pantógrafo movimenta o bastidor fazendo os pontos avançarem no sentido programado.",
      "3. O objeto é concluído no ponto de saída mais próximo do próximo elemento."
    ],
    "mainTypes": [
      "Costura Linear Unidirecional (Da base ao topo ou de uma ponta à outra)",
      "Costura do Centro para as Bordas (Ideal para bonés e grandes áreas circulares)",
      "Costura Contínua / Encadeada (Conecta vários objetos sem cortes)"
    ],
    "advantages": [
      "✔ Reduz movimentos desnecessários do bastidor e encurta o tempo de máquina",
      "✔ Evita pontos de salto longos e cortes excessivos de linha",
      "✔ Impede o empurramento contínuo do tecido para um único lado (evitando bolhas)"
    ],
    "limitations": [
      "Em formas curvas complexas, requer planejamento cuidadoso para que a costura não cruze sobre pontos recém-formados."
    ],
    "commonErrors": [
      "❌ Planejar a costura terminando em uma ponta distante do início do próximo objeto.",
      "❌ Fazer a máquina ziguezaguear pelo bastidor gerando dezenas de cortes desnecessários.",
      "❌ Ignorar o sentido de empurramento do tecido ao bordar áreas contíguas."
    ],
    "voceSabia": "Em bonés estruturados, a direção de costura obrigatória é sempre do CENTRO PARA AS LATERAIS e de BAIXO PARA CIMA, para expulsar as dobras do tecido em direção às bordas!",
    "curiosidadeTecnica": "A máquina de bordar é um sistema de coordenadas espaciais: a direção de costura organiza a cinemática do bastidor para que ele execute o caminho mais harmônico e fluido possível.",
    "dicaArtrelados": "Quando olhar uma matriz, não enxergue somente o desenho parado. Tente enxergar o caminho que a máquina fará para construí-lo! Pergunte: 'Se eu fosse a máquina, qual seria o caminho mais lógico e rápido para bordar isso?'",
    "applications": [
      "Sequenciamento de letras cursivas, preenchimento de brasões, bordado em bonés e monogramas."
    ],
    "troubleshootingTips": [
      "Se o tecido estiver formando uma onda ou dobra no final do preenchimento, altere a direção de costura para começar do centro em direção às bordas."
    ],
    "relatedTerms": [
      "Direção do Ponto",
      "Sequência de Pontos",
      "Ponto de Entrada",
      "Ponto de Saída",
      "Ponto de Salto"
    ],
    "tags": [
      "d-013",
      "direcao de costura",
      "percurso",
      "sequencia",
      "caminho",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim directio (direção) e do latim vulgar consutura (ato de coser, costura junta, de consuere). Diferencia-se de direção do ponto por descrever o vetor de deslocamento cinemático do pantógrafo.",
    "beginnerExplanation": "Direção de costura é o caminho que a máquina faz ao costurar um objeto: se ela começa de baixo e sobe, se vai da esquerda para a direita, ou se vai do centro para fora. Planejar bem esse caminho faz a máquina bordar mais rápido, sem ficar cortando linha à toa e sem empurrar o tecido para um lado só.",
    "practicalExercise": "Borde um desenho de círculo preenchido em Tatami: primeiro começando pela borda esquerda e terminando na borda direita. Em seguida, borde outro círculo idêntico começando do CENTRO para as bordas. Compare como o segundo círculo mantém o tecido perfeitamente plano e sem formar pregas na borda.",
    "quickSummary": "Direção de costura é o trajeto e sentido de avanço percorrido pela máquina durante a construção dos pontos de um elemento da matriz.",
    "bibliographicReferences": [
      "BARUDAN. Pantograph Movement and Sewing Path Efficiency. Tokyo: Barudan Co., 2021.",
      "KRAUSZ, P. Digitizing Mechanics: Sewing Direction & Fabric Push. New York, 2020.",
      "ARTRELADOS. Rotas de Costura e Redução de Tempo de Máquina. São Paulo, 2024."
    ]
  },
  {
    "id": "d-014-direcao-do-bordado",
    "code": "D-014",
    "term": "Direção do Bordado",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos direção e bordado.",
    "category": "Design & Criação",
    "summary": "Orientação geral e composição visual adotada na disposição harmônica de todos os elementos da matriz.",
    "definition": "A direção do bordado é a orientação geral e estratégica adotada na construção visual e estrutural do conjunto de elementos que compõem um bordado. É um conceito mais amplo do que a direção de um ponto individual ou o percurso de uma costura: envolve a harmonia estética, o dinamismo das linhas, a separação de planos, o contraste visual e a relação espacial do desenho com o bastidor e a peça de roupa.",
    "technicalDetails": "Abrange a composição integrada de múltiplos objetos (pétalas, folhas, caules, fundos, letras), combinando direções complementares para conferir tridimensionalidade, brilho direcionado e estabilidade física ao bordado.",
    "construction": [
      "Mapeamento de eixos visuais da composição",
      "Distribuição de ângulos contrastantes entre planos",
      "Alinhamento em relação ao fio reto do tecido e do bastidor",
      "Harmonia entre elementos principais e secundários"
    ],
    "howItWorks": [
      "1. O designer/digitalizador estuda a composição visual global do motivo.",
      "2. Atribui orientações específicas para cada família de elementos (ex: pétalas radiais, folhas longitudinais).",
      "3. O conjunto cria ilusão de volume, movimento e profundidade ao refletir a luz natural."
    ],
    "mainTypes": [
      "Direção Orgânica / Naturalista (Acompanha a anatomia de flores, animais e pessoas)",
      "Direção Geométrica / Técnica (Alinhada a eixos rígidos em logotipos e emblemas)",
      "Direção Texturizada (Múltiplas orientações para simular tecidos e relevos)"
    ],
    "advantages": [
      "✔ Confere riqueza estética de alto padrão e visual de alta costura",
      "✔ Separa visualmente diferentes partes do desenho mesmo com a mesma cor de linha",
      "✔ Cria sensação de movimento e vida sem necessidade de matrizes pesadas"
    ],
    "limitations": [
      "O excesso de direções desordenadas em uma única matriz pode gerar poluição visual e perda de harmonia."
    ],
    "commonErrors": [
      "❌ Usar a mesma direção em tudo, deixando o desenho chapado e sem vida.",
      "❌ Mudar direções aleatoriamente sem critério estético ou funcional.",
      "❌ Avaliar a direção apenas no monitor sem verificar a incidência real de luz no tecido."
    ],
    "voceSabia": "No bordado computadorizado de alta costura, a direção dos pontos funciona exatamente como as pinceladas de uma pintura clássica: o artista direciona a pincelada para transmitir textura, sombra e emoção!",
    "curiosidadeTecnica": "A tabela de orientação clássica do DIBE sugere: Folhas = direção longitudinal; Pétalas = acompanhando a curvatura; Caules = sentido do eixo; Letras = ditadas pela anatomia da tipografia; Fundo = diagonal a 45°.",
    "dicaArtrelados": "Olhe para cada objeto do desenho e pergunte: 'Se eu estivesse desenhando essa forma com um lápis, para onde naturalmente faria meus traços?' Essa pergunta simples é a melhor bússola para definir a direção perfeita do bordado!",
    "applications": [
      "Bordados florais, animais, monogramas finos, moda festa e brasões heráldicos."
    ],
    "troubleshootingTips": [
      "Se um bordado monocromático (de uma só cor) estiver parecendo um 'bloco plano', varie as direções dos objetos para criar relevo com a luz."
    ],
    "relatedTerms": [
      "Direção do Ponto",
      "Direção de Costura",
      "Ponto Satin",
      "Ponto de Preenchimento"
    ],
    "tags": [
      "d-014",
      "direcao do bordado",
      "design",
      "estetica",
      "volume",
      "luz",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim directio (alinhamento, sentido) e do árabe al-burdā (bordado). No planejamento de ateliê, refere-se à orientação espacial e ergonômica da peça no bastidor em relação ao operador da máquina.",
    "beginnerExplanation": "Direção do bordado é a orientação geral do desenho no bastidor (se o desenho vai ficar em pé, de cabeça para baixo ou deitado de lado). Girar a matriz no ângulo certo antes de colocar no bastidor facilita na hora de encaixar camisetas polo, bolsos ou toalhas sem estragar a peça.",
    "practicalExercise": "Pegue uma toalha de lavabo com barra de etamine ou tecido plano. No painel da sua máquina, gire a matriz em 90° e 180° e observe como o bastidor se posiciona em relação ao corpo da máquina. Escolha a orientação que permita ao volume restante da toalha ficar solto para fora da máquina, sem ficar embolado no braço livre.",
    "quickSummary": "Direção do bordado é a orientação espacial do desenho no bastidor e no espaço de trabalho da máquina para facilitar o manuseio e a estética da peça.",
    "bibliographicReferences": [
      "TAJIMA. Hooping Orientation and Garment Clamping Guide. Nagoya, 2022.",
      "BROTHER. Embroidery Orientation & Hoop Alignment Manual. Nagoya, 2023.",
      "ARTRELADOS. Posicionamento Estratégico de Peças no Bastidor. São Paulo, 2024."
    ]
  },
  {
    "id": "d-015-deslocamento-da-matriz",
    "code": "D-015",
    "term": "Deslocamento da Matriz",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos deslocamento e matriz.",
    "category": "Operação da Máquina",
    "summary": "Alteração da posição espacial do desenho dentro da área de trabalho do software ou no painel da máquina sem modificar suas dimensões.",
    "definition": "O deslocamento da matriz corresponde à alteração da posição do desenho ou de seus elementos dentro da área de trabalho do software ou na área útil do bastidor na máquina de bordar. Em termos simples, é mover o bordado de um lugar para outro (para cima, para baixo, para a esquerda ou para a direita) mantendo inalterados seu tamanho original, sua sequência e sua quantidade de pontos.",
    "technicalDetails": "Opera nos eixos cartesianos X e Y. Deslocar é diferente de redimensionar (que muda a escala) e de girar (que muda o ângulo). Deve respeitar rigorosamente os limites da área útil do bastidor.",
    "construction": [
      "Coordenadas cartesianas X e Y",
      "Ponto central da matriz (centro de origem)",
      "Área útil delimitada do bastidor",
      "Margem de segurança periférica"
    ],
    "howItWorks": [
      "1. O operador seleciona a matriz no software ou no painel touchscreen da máquina.",
      "2. Utiliza as setas direcionais ou insere coordenadas milimétricas.",
      "3. O desenho é reposicionado na área desejada para alinhar com a peça real.",
      "4. A máquina atualiza o ponto de partida do pantógrafo."
    ],
    "mainTypes": [
      "Deslocamento no Software (Preparação prévia do arquivo)",
      "Deslocamento no Painel da Máquina (Ajuste fino antes de iniciar o bordado)",
      "Deslocamento por Coordenadas Numéricas (Precisão milimétrica)"
    ],
    "advantages": [
      "✔ Permite centralizar ou posicionar o bordado exatamente no local desejado da peça",
      "✔ Facilita o alinhamento em bolsos, golas, toalhas e faixas estreitas",
      "✔ Evita ter que rebastidorar a peça para corrigir pequenos desvios de posição"
    ],
    "limitations": [
      "Deslocar a matriz além da margem de segurança pode fazer o bastidor colidir mecanicamente com o cabeçote ou barra da agulha."
    ],
    "commonErrors": [
      "❌ Mover a matriz para muito perto da borda do bastidor sem checar a área útil real.",
      "❌ Confundir deslocamento (mover) com redimensionamento (mudar tamanho).",
      "❌ Centralizar na tela do software sem considerar a posição física onde a peça precisa ser bordada."
    ],
    "voceSabia": "Todas as máquinas possuem um sensor de fim de curso: se você deslocar a matriz para fora do limite permitido, a máquina travará e exibirá um aviso sonoro de erro de bastidor antes de começar!",
    "curiosidadeTecnica": "Ao deslocar uma matriz no painel, a máquina altera apenas o offset das coordenadas iniciais do arquivo, sem modificar os vetores de distância relativa entre os pontos.",
    "dicaArtrelados": "Antes de clicar em 'Iniciar', olhe para a matriz e imagine onde ela realmente ficará no tecido. Não pense apenas: 'Está no centro da tela?' Pergunte: 'Está no lugar exato da peça que estou bordando?' Essa pequena diferença evita peças perdidas!",
    "applications": [
      "Posicionamento em bolsos de camisa, barras de toalhas, golas e personalizações milimétricas."
    ],
    "troubleshootingTips": [
      "Use a função de 'Traçar / Trace / Borda' no painel da máquina para fazer a agulha contornar a área do bordado sem costurar, confirmando o posicionamento."
    ],
    "relatedTerms": [
      "Deslocamento de Bastidor",
      "Área Útil do Bastidor",
      "Bastidor",
      "Posicionamento do Bordado"
    ],
    "tags": [
      "d-015",
      "deslocamento da matriz",
      "posicionamento",
      "bastidor",
      "painel",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim dislocare (tirar do lugar, mover de uma posição para outra, de dis- + locus, lugar) e do latim matrix, -icis (útero, molde gerador, matriz).",
    "beginnerExplanation": "Deslocamento da matriz é a capacidade de mover o desenho para a esquerda, direita, cima ou baixo na tela da máquina de bordar. Isso serve para centralizar perfeitamente o bordado no local exato onde você marcou o tecido com a canetinha apagável.",
    "practicalExercise": "Coloque um tecido no bastidor e marque uma cruz com canetinha fantasminha (que apaga com calor). Encaixe o bastidor na máquina, acione a luz de posicionamento LED ou a tecla de tracejado/ponteiro e use as setas do painel para mover a matriz até que o centro do desenho bata exatamente no cruzamento da sua marcação.",
    "quickSummary": "Deslocamento da matriz é a movimentação das coordenadas centrais do desenho no painel da máquina para alinhamento preciso na peça.",
    "bibliographicReferences": [
      "JANOME. Machine Screen Coordinate System & Design Movement. Tokyo, 2022.",
      "SINGER. EM9305 Embroidery Centering and Positioning Manual. LaVergne, 2021.",
      "ARTRELADOS. Alinhamento a Laser e Centralização Perfeita de Bordados. São Paulo, 2024."
    ]
  },
  {
    "id": "d-016-deslocamento-de-bastidor",
    "code": "D-016",
    "term": "Deslocamento de Bastidor",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos deslocamento e bastidor.",
    "category": "Componentes da Máquina",
    "summary": "Movimento mecânico sincronizado realizado pelo pantógrafo para posicionar o tecido sob a agulha a cada ponto.",
    "definition": "O deslocamento de bastidor é o movimento mecânico coordenado realizado pelo sistema do carro (pantógrafo) que sustenta o bastidor e o tecido durante a execução do bordado. Na máquina de bordar, a agulha move-se apenas na vertical (eixo Z); é o bastidor que se movimenta nos eixos horizontal (X) e vertical (Y) entre uma penetração de agulha e outra para formar o desenho.",
    "technicalDetails": "Movimentado por motores de passo de alta precisão ou servomotores acoplados a correias dentadas e fusos de esferas, operando em sincronia milimétrica com a rotação do eixo principal a até 1.200 rotações por minuto.",
    "construction": [
      "Braço de fixação do bastidor",
      "Motores de passo dos eixos X e Y",
      "Correias sincronizadoras e guias lineares",
      "Sensores ópticos de fim de curso"
    ],
    "howItWorks": [
      "1. A agulha sobe e sai completamente do tecido.",
      "2. O pantógrafo desloca o bastidor com extrema rapidez para a coordenada do próximo ponto.",
      "3. O bastidor para imóvel exatamente na posição milimétrica.",
      "4. A agulha desce e realiza a nova perfuração, repetindo o ciclo milhares de vezes."
    ],
    "mainTypes": [
      "Deslocamento Passo a Passo (Formação de pontos normais)",
      "Deslocamento Rápido / Salto (Movimento amplo entre objetos sem costura)",
      "Deslocamento de Troca de Bastidor (Recuo automático para colocar e retirar a peça)"
    ],
    "advantages": [
      "✔ Precisão matemática na formação de curvas e linhas perfeitas",
      "✔ Repetibilidade idêntica em produções industriais de milhares de peças",
      "✔ Agilidade e suavidade de movimentação com baixo nível de ruído"
    ],
    "limitations": [
      "Obstruções físicas no trajeto do bastidor (como tecidos pesados caídos na mesa ou esbarrões) causam perda de passos nos motores e desalinhamento permanente do bordado."
    ],
    "commonErrors": [
      "❌ Deixar o tecido pendurado da mesa pesando sobre o bastidor durante o movimento.",
      "❌ Esbarrar no bastidor ou na mesa da máquina enquanto ela estiver bordando.",
      "❌ Não lubrificar as guias e trilhos lineares do pantógrafo periodicamente."
    ],
    "voceSabia": "Enquanto a agulha sobe e desce, o bastidor tem uma janela de tempo de menos de 30 milésimos de segundo para acelerar, mover-se e parar perfeitamente imóvel antes da agulha tocar o tecido novamente!",
    "curiosidadeTecnica": "Pense na máquina de bordar como alguém desenhando com um lápis fixo em um ponto enquanto movimenta rapidamente a folha de papel por baixo: agulha fixa + movimento do bastidor = construção do bordado.",
    "dicaArtrelados": "Observe sua máquina enquanto ela borda: o bastidor está fazendo um verdadeiro desenho no espaço! Aprender a escutar o som suave do pantógrafo ajuda a identificar imediatamente qualquer travamento mecânico ou folga antes que a peça seja danificada.",
    "applications": [
      "Mecanismo universal de movimentação em todas as máquinas de bordar computadorizadas."
    ],
    "troubleshootingTips": [
      "Se o bordado 'deslocar' de repente para o lado no meio do trabalho, verifique se o bastidor não bateu em algo ou se a correia do eixo X/Y não está frouxa."
    ],
    "relatedTerms": [
      "Carro da Máquina de Bordado",
      "Bastidor",
      "Deslocamento da Matriz",
      "Desalinhamento de Contorno"
    ],
    "tags": [
      "d-016",
      "deslocamento de bastidor",
      "pantografo",
      "motores",
      "eixo x y",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim dislocare (mover de lugar) e do germânico bast (fibra de casca de árvore utilizada para confeccionar aros de suporte e tecelagem). No bordado mecânico, descreve o deslocamento dos eixos X e Y do pantógrafo.",
    "beginnerExplanation": "Deslocamento de bastidor é o movimento físico que o bastidor faz para lá e para cá enquanto a máquina costura. Os motores da máquina movem o bastidor milimetricamente a cada ponto para que a agulha perfure no lugar exato do desenho.",
    "practicalExercise": "Coloque a máquina para rodar sem agulha e sem linha (ou em modo de simulação/teste) e observe como o braço do pantógrafo se move em passos suaves. Repare que se houver algum obstáculo encostando no bastidor (como uma tesoura na mesa ou a dobra da toalha presa), o bastidor baterá e perderá a posição!",
    "quickSummary": "Deslocamento de bastidor é a movimentação eletromecânica dos eixos X e Y do pantógrafo que posiciona o tecido sob a agulha a cada ponto.",
    "bibliographicReferences": [
      "BARUDAN. Servo Motors & Pantograph Motion Mechanics. Tokyo, 2022.",
      "HAPPY JAPAN. HCD2 Series Multi-Needle Mechanics Manual. Yamagata, 2023.",
      "ARTRELADOS. Manutenção e Cuidados com o Sistema de Pantógrafo. São Paulo, 2024."
    ]
  },
  {
    "id": "d-017-deslocamento-de-ponto",
    "code": "D-017",
    "term": "Deslocamento de Ponto",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada pelos substantivos deslocamento e ponto.",
    "category": "Programação de Bordado",
    "summary": "Alteração da posição individual ou em bloco de pontos dentro da estrutura da matriz durante a edição.",
    "definition": "O deslocamento de ponto refere-se à mudança manual ou paramétrica da posição de um ponto específico ou de uma sequência de pontos dentro da estrutura da matriz de bordado. Em softwares de edição, esse recurso é utilizado para realizar correções pontuais, ajustar encaixes milimétricos, corrigir falhas de união ou reposicionar pontos de entrada e saída.",
    "technicalDetails": "Realizado no modo de edição de nós ou edição de pontos individuais (Stitch Edit Mode), permitindo arrastar coordenadas pontuais sem alterar a lógica global do objeto vetorial circundante.",
    "construction": [
      "Coordenada pontual individual (nó de ponto)",
      "Vetor de ligação com o ponto anterior e posterior",
      "Comprimento recalculado do segmento",
      "Ajuste da densidade localizada"
    ],
    "howItWorks": [
      "1. O programador seleciona a ferramenta de edição de pontos no software.",
      "2. Clica sobre o ponto que necessita de correção e o arrasta para a nova posição.",
      "3. O software atualiza a coordenada e recalcula a distância com os pontos vizinhos.",
      "4. A união entre os objetos torna-se limpa e sem frestas."
    ],
    "mainTypes": [
      "Deslocamento Individual (Ponto a ponto para consertos cirúrgicos)",
      "Deslocamento em Bloco (Mover um grupo de pontos selecionados)",
      "Deslocamento de Ponto de Parada / Troca de Cor"
    ],
    "advantages": [
      "✔ Permite corrigir pequenas falhas de encaixe sem precisar redigitalizar todo o desenho",
      "✔ Facilita o ajuste de pontos isolados que escaparam da área do contorno",
      "✔ Otimiza a conexão suave entre dois objetos vizinhos"
    ],
    "limitations": [
      "Arrastar pontos aleatoriamente pode criar segmentos excessivamente longos (que afrouxam) ou curtos demais (que quebram a linha)."
    ],
    "commonErrors": [
      "❌ Deslocar pontos de uma matriz pronta sem entender a função original deles no desenho.",
      "❌ Criar distâncias maiores que 7mm entre pontos simples sem usar ponto de arremate.",
      "❌ Deixar pontos acumulados no mesmo lugar gerando nós indesejados."
    ],
    "voceSabia": "Muitos pontos que parecem 'fora do lugar' na tela do computador foram colocados propositalmente pelo programador experiente para compensar a tração que o tecido sofrerá durante o bordado!",
    "curiosidadeTecnica": "A edição e deslocamento direto de pontos em arquivos prontos (como .DST ou .PES) altera os comandos brutos de máquina sem suporte aos objetos vetoriais inteligentes.",
    "dicaArtrelados": "Não corrija uma matriz simplesmente porque um ponto parece 'fora do lugar' na tela! Primeiro descubra por que ele está naquela posição. Muitas vezes, aquilo que parece um errinho na tela é o segredo que mantém o bordado perfeito no tecido real.",
    "applications": [
      "Refinamento de matrizes prontas, correção de monogramas e ajuste fino de contornos."
    ],
    "troubleshootingTips": [
      "Ao deslocar um ponto, confira se o comprimento da linha entre os pontos vizinhos permanece entre 1.0mm e 6.0mm."
    ],
    "relatedTerms": [
      "Correção de Pontos",
      "Comprimento do Ponto",
      "Direção do Ponto",
      "Sequência de Pontos"
    ],
    "tags": [
      "d-017",
      "deslocamento de ponto",
      "edicao",
      "ajuste fino",
      "pontos",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim dislocare (mover do lugar) e de punctum (ponto perfurado). Refere-se à imperfeição onde a penetração da agulha ocorre fora da coordenada originalmente programada.",
    "beginnerExplanation": "Deslocamento de ponto é quando o ponto cai fora do lugar certo no tecido. O contorno preto sai do desenho, as folhas não encostam na flor ou as letras ficam tortas. Quase sempre a culpa é do tecido que esticou ou da entretela que estava frouxa no bastidor!",
    "practicalExercise": "Borde um círculo com contorno preto fino em uma malha elástica de camiseta: na primeira tentativa, use apenas uma entretela rasga-fácil fina colocada frouxa no bastidor. Na segunda tentativa, use entretela de malha colada ou recorta-fácil bem firme e esticada como um tambor. Compare e veja como na primeira o contorno sai torto (ponto deslocado) e na segunda fica perfeito.",
    "quickSummary": "Deslocamento de ponto é o desvio mecânico ou estrutural da penetração da agulha em relação à matriz, causado por instabilidade do tecido ou folga no bastidor.",
    "bibliographicReferences": [
      "KRAUSZ, P. Troubleshooting Stitch Registration & Fabric Shift. New York: Textile Press, 2021.",
      "MADEIRA. Embroidery Quality Audit: Overcoming Stitch Misalignment. Freiburg, 2023.",
      "ARTRELADOS. Como Eliminar Desalinhamento de Contornos no Bordado. São Paulo, 2024."
    ]
  },
  {
    "id": "d-018-deslocamento-de-linha",
    "code": "D-018",
    "term": "Deslocamento de Linha",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada pelos substantivos deslocamento e linha.",
    "category": "Agulhas & Fios",
    "summary": "Trajetória e percurso contínuo percorrido pela linha de bordado desde a alimentação até a fixação no tecido.",
    "definition": "No contexto do bordado eletrônico, deslocamento de linha descreve o movimento, a trajetória e o percurso realizado pelo fio durante a execução da matriz. A linha não permanece estática: ela é tracionada a partir do cone, atravessa guias e tensionadores, sobe e desce pela barra de agulha, percorre saltos entre objetos e é ancorada no tecido pelos pontos.",
    "technicalDetails": "Envolve a dinâmica do fio sob tensão constante (110g a 130g na linha superior) em alta velocidade. O planejamento de trajetórias curtas e organizadas na matriz reduz o consumo de linha e o tempo de execução.",
    "construction": [
      "Trajeto da linha no cabeçote e guias",
      "Linha de salto entre objetos (jump stitch)",
      "Conectores ocultos (travel runs)",
      "Ponto de corte e ancoragem de arremate"
    ],
    "howItWorks": [
      "1. A linha é alimentada suavemente pelo cone.",
      "2. Acompanha os deslocamentos espaciais do bastidor e da agulha.",
      "3. Forma os pontos de costura ou conecta áreas vizinhas.",
      "4. É seccionada pelo cortador automático de linha quando necessário."
    ],
    "mainTypes": [
      "Deslocamento com Costura (Formação ativa de pontos)",
      "Deslocamento sem Costura / Salto (Linha conduzida pelo ar)",
      "Deslocamento Embutido / Oculto (Costura corrida sob áreas a serem cobertas)"
    ],
    "advantages": [
      "✔ Um percurso eficiente reduz o tempo total de produção e o desgaste da máquina",
      "✔ Minimiza fiapos e linhas soltas na frente e no avesso do bordado",
      "✔ Otimiza o consumo de cones de linha e reduz custos operacionais"
    ],
    "limitations": [
      "Deslocamentos longos sem corte deixam fios esticados sobre o tecido que exigem limpeza manual posterior."
    ],
    "commonErrors": [
      "❌ Confundir deslocamento de linha com troca de cor ou regulagem de tensão.",
      "❌ Permitir que a linha faça trajetos cruzados sobre áreas abertas que ficarão visíveis na peça.",
      "❌ Ignorar o consumo extra de linha provocado por matrizes mal sequenciadas."
    ],
    "voceSabia": "Uma matriz aparentemente pequena de 5.000 pontos com percursos desorganizados pode consumir mais metros de linha do que uma matriz bem sequenciada de 8.000 pontos!",
    "curiosidadeTecnica": "O cálculo métrico exato do consumo de linha em softwares profissionais considera todos os deslocamentos superiores somados à proporção de 30% a 35% de linha de bobina no verso.",
    "dicaArtrelados": "Quando pensar no custo de uma matriz, não olhe apenas para o tamanho do desenho! Pense também no caminho que a linha precisará percorrer. Esse raciocínio é fundamental para quem deseja calcular com precisão o custo real do bordado.",
    "applications": [
      "Cálculo de consumo de linha, orçamentos, planejamento de produção e sequenciamento."
    ],
    "troubleshootingTips": [
      "Se ficarem muitas linhas esticadas na frente do bordado, ative o corte automático para saltos maiores que 3mm no software."
    ],
    "relatedTerms": [
      "Corte de Linha",
      "Ponto de Salto",
      "Direção de Costura",
      "Sequência de Pontos"
    ],
    "tags": [
      "d-018",
      "deslocamento de linha",
      "percurso",
      "consumo",
      "trajetoria",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim dislocare (deslocar) e de linea (fio de linho, linha). Descreve o fenômeno de arraste e movimentação dos filamentos de bordado fora de sua trajetória esperada.",
    "beginnerExplanation": "Deslocamento de linha é quando o fio de bordado escorrega ou sai do lugar depois de costurado, formando laços soltos ou deixando o contorno com dentes e fiapos. Isso acontece muito quando a tensão da linha está muito frouxa ou quando usamos pontos longos demais que não se prendem bem.",
    "practicalExercise": "Faça uma coluna de ponto cheio bem larga (8mm) sem underlay em um tecido macio. Passe a unha suavemente sobre os pontos: repare como os fios se movem e se abrem facilmente (deslocamento de linha). Agora faça a mesma coluna com 4mm de largura e underlay: sinta como a linha fica travada e firme.",
    "quickSummary": "Deslocamento de linha é a movimentação indesejada dos filamentos de linha na superfície do tecido devido à falta de fixação, tensão frouxa ou comprimento excessivo.",
    "bibliographicReferences": [
      "COATS THREADS. Filament Thread Stability & Tension Control in Embroidery. London, 2022.",
      "GUNOLD. Thread Tension, Friction & Laying Precision Guide. Stockstadt, 2021.",
      "ARTRELADOS. Tensão e Fixação de Linhas para Alta Durabilidade. São Paulo, 2024."
    ]
  },
  {
    "id": "d-019-distancia-entre-pontos",
    "code": "D-019",
    "term": "Distância entre Pontos",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo e locução prepositiva.",
    "category": "Programação de Bordado",
    "summary": "Espaçamento físico entre penetrações sucessivas da agulha ou entre passagens de linhas na matriz.",
    "definition": "A distância entre pontos corresponde ao espaço geométrico existente entre pontos sucessivos ou entre passagens vizinhas de linha dentro de uma matriz de bordado. Esse parâmetro regula a densidade local, a cobertura do tecido, o consumo de linha e o nível de esforço mecânico sobre as fibras têxteis.",
    "technicalDetails": "Mede-se em milímetros ou décimos de milímetro. Em preenchimentos, a distância entre passagens varia tipicamente de 0.38mm a 0.45mm; em pontos corridos (Running Stitch), o comprimento entre perfurações varia de 2.0mm a 3.5mm.",
    "construction": [
      "Espaçamento lateral entre colunas",
      "Comprimento longitudinal do ponto",
      "Intervalo de penetração da agulha",
      "Tolerância para o calibre da linha (Título 40)"
    ],
    "howItWorks": [
      "1. O programador define o valor de espaçamento no painel de propriedades do ponto.",
      "2. O software calcula a posição exata de cada penetração de agulha.",
      "3. A máquina avança o bastidor na distância programada a cada descida da agulha."
    ],
    "mainTypes": [
      "Distância Curta (0.35mm a 0.40mm - Cobertura intensa e fechada)",
      "Distância Média (0.42mm a 0.45mm - Padrão equilibrado universal)",
      "Distância Ampla (0.60mm a 1.50mm - Efeitos sombreados e abertos)"
    ],
    "advantages": [
      "✔ Permite calibrar a cobertura exata para tecidos lisos, felpudos ou elásticos",
      "✔ Controla com precisão a rigidez e a maleabilidade da peça bordada",
      "✔ Evita perfurações excessivas no mesmo local que danificam o tecido"
    ],
    "limitations": [
      "Distâncias excessivamente curtas causam quebra de agulha e corte do tecido; distâncias muito longas deixam o tecido transparente."
    ],
    "commonErrors": [
      "❌ Colocar os pontos o mais próximos possível acreditando que isso sempre melhora a qualidade.",
      "❌ Usar a mesma distância entre pontos para linhas de diferentes espessuras.",
      "❌ Ignorar que tecidos texturizados (toalhas) exigem suporte plástico antes de alterar a distância."
    ],
    "voceSabia": "A espessura de uma linha de bordado de poliéster 120/2 é de aproximadamente 0.38mm a 0.40mm: por isso, uma distância entre pontos menor que 0.35mm faz os fios se encavalarem um sobre o outro!",
    "curiosidadeTecnica": "Distância entre pontos é a medida de espaçamento; densidade é o resultado da concentração dessa distribuição na área.",
    "dicaArtrelados": "Não pense 'quanto mais pontos, melhor'! Pense: 'qual é a quantidade e a distância adequada de pontos para este tecido, este desenho e este efeito?' Essa mudança de mentalidade é o marco que separa a amadora da bordadeira profissional.",
    "applications": [
      "Ajuste fino de preenchimentos Tatami, Ponto Satin, Ponto Corrido e desenhos vazados."
    ],
    "troubleshootingTips": [
      "Se o tecido estiver cortando ou furando nas bordas, aumente a distância entre pontos em pelo menos 0.05mm a 0.10mm."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Comprimento do Ponto",
      "Ponto Satin",
      "Ponto de Preenchimento"
    ],
    "tags": [
      "d-019",
      "distancia entre pontos",
      "espacamento",
      "densidade",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim distantia (afastamento, intervalo espacial entre dois pontos, de distare, estar afastado) e punctum (ponto). Parâmetro geométrico primordial na física da costura mecânica.",
    "beginnerExplanation": "Distância entre pontos é o comprimento que a linha percorre no tecido entre uma descida da agulha e a próxima descida. Se a distância for muito curtinha (menos de 1mm), a agulha fura o tecido no mesmo lugar e corta o pano; se for muito longa (mais de 8mm), a linha fica solta e engancha no dedo!",
    "practicalExercise": "No seu software, programe três linhas retas de ponto corrido: a primeira com comprimento de 1.0mm, a segunda com 2.5mm e a terceira com 7.0mm. Borde no mesmo tecido: passe o dedo sobre elas e veja a flexibilidade de cada uma, observando que 2.5mm a 3.0mm é a medida perfeita para contornos bonitos e seguros.",
    "quickSummary": "Distância entre pontos é a extensão linear entre duas perfurações consecutivas da agulha, calibrada para garantir resistência e definição estética.",
    "bibliographicReferences": [
      "WILCOM. Stitch Length and Pitch Guidelines in Digitizing. Sydney: Wilcom, 2022.",
      "BERNINA. Stitch Length Fundamentals for Freehand and Automated Embroidery. Steckborn, 2021.",
      "ARTRELADOS. Calibração de Comprimento de Ponto para Cada Tipo de Tecido. São Paulo, 2024."
    ]
  },
  {
    "id": "d-020-distancia-de-seguranca",
    "code": "D-020",
    "term": "Distância de Segurança",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo e locução adjetiva.",
    "category": "Técnicas de Bastidor",
    "summary": "Margem de espaço livre obrigatória mantida entre o desenho bordado e os limites físicos do bastidor ou da peça.",
    "definition": "A distância de segurança é a margem de espaço livre mantida entre a área que será bordada e determinados limites físicos que não devem ser ultrapassados pela agulha ou pelo pé-calcador. Esses limites compreendem a borda plástica do bastidor, os limites de fim de curso da máquina, costuras grossas da peça, botões, zíperes e bainhas.",
    "technicalDetails": "Recomenda-se uma margem mínima de segurança de 10mm a 15mm entre o contorno mais externo do desenho e a borda interna do aro do bastidor para evitar colisões catastróficas do pé-calcador com o aro.",
    "construction": [
      "Área total nominal do bastidor",
      "Área útil real de bordado (Safe Zone)",
      "Margem de recuo de segurança (10mm a 15mm)",
      "Espaçamento em relação a zíperes e bainhas"
    ],
    "howItWorks": [
      "1. O operador verifica o tamanho total da matriz no software.",
      "2. Escolhe um bastidor cuja área útil contenha o bordado mais a margem de segurança.",
      "3. Realiza o teste de rastreio (Trace) na máquina antes de costurar para validar a folga."
    ],
    "mainTypes": [
      "Distância de Segurança do Bastidor (Protege pé-calcador e agulha)",
      "Distância de Segurança da Peça (Evita costurar sobre bainhas ou botões)",
      "Distância de Segurança em Bastidor de Boné (Evita colisão com a aba e presilhas)"
    ],
    "advantages": [
      "✔ Previne quebras violentas de agulhas e entortamento da barra de agulha",
      "✔ Protege os aros do bastidor contra trincas e marcas de impacto",
      "✔ Garante que o tecido mantenha tensão uniforme até a extremidade do desenho"
    ],
    "limitations": [
      "Reduz ligeiramente o tamanho máximo do bordado em relação à medida externa nominal do bastidor."
    ],
    "commonErrors": [
      "❌ Bordar uma matriz de 13x18cm em um bastidor nominal de 13x18cm sem folga de segurança.",
      "❌ Posicionar o desenho colado na bainha de uma toalha dificultando o fechamento do aro.",
      "❌ Não executar o rastreio prévio (Trace) no painel antes de disparar o bordado."
    ],
    "voceSabia": "Quando o pé-calcador bate na borda do bastidor em velocidade de 800 PPM, o impacto pode desregular o ponto de sincronismo da lançadeira (timing), exigindo visita de assistência técnica!",
    "curiosidadeTecnica": "O DIBE recomenda a regra das 3 Zonas de Bastidor: Zona Verde (Área recomendada central), Zona Amarela (Próxima ao limite) e Zona Vermelha (Margem de risco proibida).",
    "dicaArtrelados": "Nunca planeje um bordado olhando apenas para o tamanho nominal do bastidor! Planeje olhando para a área útil, para a peça e para o posicionamento final. Antes de iniciar, pergunte: 1. O desenho cabe? 2. Está bem posicionado? 3. Existe margem de segurança? Se os três forem sim, borde com tranquilidade!",
    "applications": [
      "Montagem de bastidores, enquadramento de matrizes, bordado de bonés e toalhas."
    ],
    "troubleshootingTips": [
      "Se o desenho estiver a menos de 1cm da borda do bastidor, mude para o bastidor imediatamente maior ou reduza proporcionalmente a matriz em 5%."
    ],
    "relatedTerms": [
      "Área Útil do Bastidor",
      "Bastidor",
      "Deslocamento da Matriz",
      "Posicionamento do Bordado"
    ],
    "tags": [
      "d-020",
      "distancia de seguranca",
      "bastidor",
      "seguranca",
      "margem",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim distantia (afastamento) e securitas, -atis (estado de segurança, livre de perigo, de securus, seguro). Norma ergonômica e mecânica fundamental de operação.",
    "beginnerExplanation": "Distância de segurança é o espaço livre que você deve deixar entre o desenho do bordado e o aro de plástico do bastidor (geralmente pelo menos 1 a 2 centímetros). Se você bordar muito perto da borda do bastidor, o pé da agulha pode bater no plástico e quebrar a máquina!",
    "practicalExercise": "Coloque um bastidor vazio na máquina e leve o pantógrafo até o limite máximo do campo de bordado. Observe com os olhos a distância que sobra entre o pé-calcador da máquina e a borda interna de plástico do bastidor: memorize essa folga de segurança para nunca encostar matrizes na borda.",
    "quickSummary": "Distância de segurança é a margem livre obrigatória mantida entre a área de bordado e as bordas físicas do bastidor para evitar colisões mecânicas.",
    "bibliographicReferences": [
      "BROTHER. Safety Clearances and Hoop Margin Operating Instructions. Nagoya, 2022.",
      "TAJIMA. Frame Collision Prevention & Border Clearance Manual. Nagoya, 2021.",
      "ARTRELADOS. Guia de Segurança e Proteção de Bastidores no Ateliê. São Paulo, 2024."
    ]
  },
  {
    "id": "d-021-densidade-de-pontos-avancada",
    "code": "D-021",
    "term": "Densidade de Pontos (Conceitos & Calibração)",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos densidade e pontos.",
    "category": "Programação de Bordado",
    "summary": "Guia prático e didático sobre o comportamento, diagnóstico e equilíbrio da concentração de pontos.",
    "definition": "A densidade de pontos descreve a quantidade e a concentração de pontos de bordado distribuídos em determinada área da matriz. É o conceito fundamental para compreender por que duas matrizes visualmente semelhantes na tela produzem resultados completamente diferentes no tecido. A densidade ideal não é um número estático: depende da interação entre tecido, linha, agulha, estabilizador, underlay e geometria do desenho.",
    "technicalDetails": "Analisa a densidade alta (que pode causar endurecimento e repuxo) versus a densidade baixa (que pode deixar o tecido ralo), estabelecendo parâmetros de calibração baseados no equilíbrio dinâmico dos materiais têxteis.",
    "construction": [
      "Concentração de penetrações por mm²",
      "Espaçamento entre colunas de pontos",
      "Equilíbrio de camadas de underlay e topo",
      "Adequação ao peso e elasticidade do tecido"
    ],
    "howItWorks": [
      "1. A bordadeira avalia a textura do tecido (liso, elástico ou felpudo).",
      "2. Escolhe a densidade proporcional à espessura da linha e finalidade da peça.",
      "3. O software gera pontos equilibrados que cobrem sem sobrecarregar a estrutura têxtil."
    ],
    "mainTypes": [
      "Densidade para Tecidos Leves / Delicados (0.45mm a 0.50mm)",
      "Densidade para Tecidos Médios / Planos (0.40mm a 0.42mm)",
      "Densidade para Tecidos Pesados / Couro (0.45mm a 0.55mm com agulha especial)"
    ],
    "advantages": [
      "✔ Toque macio e confortável na peça pronta",
      "✔ Cobertura sólida e cores vibrantes da linha",
      "✔ Baixa taxa de quebras e alta produtividade"
    ],
    "limitations": [
      "Não há um número mágico único: copiar configurações de uma matriz para outra em tecidos diferentes pode gerar falhas."
    ],
    "commonErrors": [
      "❌ Pensar que 'quanto mais denso, mais bonito fica o bordado'.",
      "❌ Ignorar que a linha e a agulha também ocupam espaço físico no tecido.",
      "❌ Tentar compensar tecido fino colocando pontos em excesso."
    ],
    "voceSabia": "Uma toalha felpuda e uma malha elástica de camiseta exigem tratamentos completamente diferentes: a toalha precisa de plástico hidrossolúvel por cima; a malha precisa de entretela recorta-fácil estável por baixo!",
    "curiosidadeTecnica": "Em colunas Satin muito estreitas (menos de 1.5mm), a densidade deve ser aberta (menos pontos) para que a agulha não corte o tecido ao perfurar as duas bordas próximas.",
    "dicaArtrelados": "Não pergunte apenas 'quantos pontos tem esta matriz?'. Pergunte também: 'como esses pontos estão distribuídos e para qual tecido ela foi feita?' Essa segunda pergunta é a chave para o sucesso do ateliê!",
    "applications": [
      "Calibração de matrizes para uniformes, toalhas, malhas de bebê e artigos esportivos."
    ],
    "troubleshootingTips": [
      "Em caso de tecido franzido ao redor do desenho, reduza a densidade em 10% e aumente a gramatura da entretela."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Densidade Variável",
      "Distância entre Pontos",
      "Underlay"
    ],
    "tags": [
      "d-021",
      "densidade de pontos",
      "calibracao",
      "equilibrio",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas (densidade, espessura) e de punctum (ponto), complementado pelos termos conceituais de calibração métrica da engenharia têxtil moderna.",
    "beginnerExplanation": "Calibrar a densidade de pontos é como regular o sal da comida: não pode faltar nem sobrar! Para cada tipo de tecido (malha macia, sarja grossa, toalha felpuda), existe uma regulagem exata de pontos para o bordado ficar macio, bonito e durável por anos de lavagem.",
    "practicalExercise": "Crie uma tabela de testes no seu ateliê: pegue retalhos dos 5 tecidos que você mais usa (Piquê, Algodão, Sarja, Toalha e Microfibra). Borde a mesma matriz pequena em cada um deles com suas densidades recomendadas e anote a melhor configuração em uma pastinha de mostruário.",
    "quickSummary": "Calibração de densidade de pontos é o ajuste sistemático do espaçamento de pontos em harmonia com o tecido, linha e entretela para excelência de acabamento.",
    "bibliographicReferences": [
      "DEVERSON, D. Master Guide to Stitch Density Calibration. London: Textile Press, 2022.",
      "WILCOM. Fabric Assistant & Automatic Density Calibration Guide. Sydney, 2023.",
      "ARTRELADOS. Tabela Mestra de Calibração de Densidades por Tecido. São Paulo, 2024."
    ]
  },
  {
    "id": "d-022-densidade-variavel-efeitos",
    "code": "D-022",
    "term": "Densidade Variável & Efeitos Visuais",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivos e adjetivos.",
    "category": "Design & Criação",
    "summary": "Utilização criativa de gradientes e variações de densidade para produzir profundidade, texturas e ilusão de relevo.",
    "definition": "A densidade variável para efeitos visuais é a aplicação de níveis dinâmicos de concentração de pontos dentro de uma mesma área ou entre regiões de uma matriz para produzir efeitos de luz, sombra, transições de cores (degradê), profundidade e texturas diferenciadas, sem necessariamente trocar a cor da linha.",
    "technicalDetails": "Utiliza ferramentas de densidade progressiva e gradiente nos softwares, variando o espaçamento entre 0.35mm (área densa e escura) e 2.0mm (área aberta e luminosa), aproveitando a reflexão da luz na linha.",
    "construction": [
      "Preenchimento progressivo / gradiente",
      "Transição suave entre densidades",
      "Mescla de duas cores com gradientes cruzados",
      "Texturização visual por espaçamento"
    ],
    "howItWorks": [
      "1. O programador define uma área de partida fechada e uma de término aberta.",
      "2. O software distribui as passagens de linha com espaçamento crescente.",
      "3. O efeito visual cria ilusão de volume e curvatura tridimensional no tecido."
    ],
    "mainTypes": [
      "Efeito Degradê Bicolor (Duas cores entrelaçadas por gradiente)",
      "Efeito Sombreamento Monocromático (Uma única cor gerando claro e escuro)",
      "Efeito Textura Aberta (Simulação de tecidos leves e transparência)"
    ],
    "advantages": [
      "✔ Agrega imenso valor artístico e sofisticação às matrizes",
      "✔ Reduz a quantidade de trocas de cores necessárias na máquina",
      "✔ Alivia o peso do bordado em áreas grandes de paisagens e personagens"
    ],
    "limitations": [
      "Exige que o tecido de suporte tenha cor compatível ou que a transição seja testada previamente."
    ],
    "commonErrors": [
      "❌ Criar transições com saltos abruptos de densidade que deixam falhas visíveis.",
      "❌ Aplicar gradientes em áreas minúsculas onde a transição não pode ser percebida.",
      "❌ Esquecer de testar o efeito no tecido real antes da produção."
    ],
    "voceSabia": "Você pode criar uma esfera com aparência tridimensional perfeita usando apenas UMA linha azul, simplesmente variando a densidade e o ângulo dos pontos de acordo com a curvatura da esfera!",
    "curiosidadeTecnica": "Softwares avançados permitem criar curvas de gradiente personalizadas (senoidais, exponenciais e lineares) para simular iluminação solar em paisagens bordadas.",
    "dicaArtrelados": "A densidade variável é como o 'volume' da música: não precisamos deixar tudo no máximo para criar impacto! Uma matriz bem construída sabe onde colocar mais e onde colocar menos linha para encantar o cliente.",
    "applications": [
      "Bordados realistas, rostos, pôr do sol, pétalas sombreadas e efeitos de água."
    ],
    "troubleshootingTips": [
      "Se a transição entre duas cores parecer marcada por uma linha dura, aumente a área de sobreposição (overlap) do gradiente em 3mm."
    ],
    "relatedTerms": [
      "Densidade Variável",
      "Densidade de Pontos",
      "Ponto de Preenchimento",
      "Direção do Ponto"
    ],
    "tags": [
      "d-022",
      "densidade variavel",
      "efeitos visuais",
      "degrade",
      "sombras",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas variabilis e do latim effectus (resultado, realização visual, de efficere, produzir), conjugado à teoria óptica das cores e iluminação de superfícies.",
    "beginnerExplanation": "É o uso artístico da densidade de pontos para criar efeitos de luz, brilho, penumbra e degradês incríveis. Em vez de preencher tudo chapado, você brinca com os espaços para fazer o bordado parecer uma pintura realista com profundidade.",
    "practicalExercise": "Desenhe uma maçã no software: na parte onde a luz bate, use densidade aberta (0.90mm); na parte do meio, use densidade média (0.45mm); e na parte de sombra embaixo, use densidade fechada (0.38mm) com um toque de linha marrom misturada. Borde e surpreenda-se com o efeito 3D!",
    "quickSummary": "Densidade variável para efeitos visuais é a manipulação artística da concentração de pontos para gerar profundidade, texturas e ilusão tridimensional.",
    "bibliographicReferences": [
      "NICOLAS, C. Machine Embroidery as Fine Art: Shading & Perspective. Paris, 2022.",
      "HATCH. Artistic Shading & Gradient Effects in Modern Embroidery. Sydney: Wilcom, 2023.",
      "ARTRELADOS. Efeitos Especiais e Pintura com Agulha no Bordado Computadorizado. São Paulo, 2024."
    ]
  },
  {
    "id": "d-023-distribuicao-de-pontos",
    "code": "D-023",
    "term": "Distribuição de Pontos",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal formada pelos substantivos distribuição e pontos.",
    "category": "Programação de Bordado",
    "summary": "Maneira como os pontos são organizados, espalhados e equilibrados no espaço dentro da matriz.",
    "definition": "A distribuição de pontos corresponde à maneira como os pontos são organizados e espalhados dentro de um objeto ou região da matriz de bordado. Está intimamente relacionada à densidade, mas não deve ser confundida com ela: enquanto a densidade se refere à concentração pura de pontos em determinada área, a distribuição descreve como esses pontos estão espacialmente arranjados (uniformes, concentrados, afastados, radiais ou acompanhando curvas).",
    "technicalDetails": "Analisa a regularidade topológica dos pontos na malha vetorial. Uma distribuição equilibrada evita acúmulos pontuais que criam relevos duros ou falhas periféricas causadas pela tração das linhas.",
    "construction": [
      "Malha geométrica de penetrações",
      "Espaçamento constante ou progressivo",
      "Alinhamento às curvas do objeto",
      "Balanceamento de underlay e cobertura"
    ],
    "howItWorks": [
      "1. O software calcula o posicionamento de cada ponto ao longo do vetor.",
      "2. O digitalizador ajusta a dispersão para acompanhar a geometria do desenho.",
      "3. A máquina costura os pontos de forma equilibrada, mantendo a tensão homogênea no tecido."
    ],
    "mainTypes": [
      "Distribuição Uniforme (Padrão em preenchimentos regulares)",
      "Distribuição Anatômica / Orgânica (Acompanha pétalas e folhas)",
      "Distribuição Concentrada / Focal (Para centros de flores e olhos)"
    ],
    "advantages": [
      "✔ Constrói uma superfície visualmente equilibrada e sem falhas",
      "✔ Evita acúmulo de linha e rigidez excessiva em cantos fechados",
      "✔ Proporciona tensão uniforme sobre o tecido durante a execução"
    ],
    "limitations": [
      "Formas com pontas muito agudas exigem técnicas especiais (como cantos em meia-esquadria ou corte de pontos) para manter a distribuição regular."
    ],
    "commonErrors": [
      "❌ Olhar apenas o número total de pontos sem verificar onde eles estão concentrados.",
      "❌ Permitir que dezenas de pontos se acumulem no mesmo vértice de uma forma triangular.",
      "❌ Deixar áreas desigualmente cobertas por má distribuição do underlay."
    ],
    "voceSabia": "Uma matriz pode ter a mesma quantidade de pontos de outra, mas se a distribuição for ruim, uma parecerá pesada e repuxada enquanto a outra ficará leve e perfeita!",
    "curiosidadeTecnica": "Em cantos muito estreitos no ponto Satin, softwares modernos usam o recurso de 'Smart Corners' (Cantos Inteligentes) para redistribuir e reduzir pontos nas curvas fechadas.",
    "dicaArtrelados": "Uma matriz bonita não é apenas uma matriz com a quantidade certa de pontos: é uma matriz em que os pontos estão harmoniosamente bem distribuídos!",
    "applications": [
      "Preenchimentos gerais, cantos de molduras, pétalas, folhas e monogramas."
    ],
    "troubleshootingTips": [
      "Se os cantos de letras ou estrelas ficarem duros como pedras, ative a opção de redução automática de pontos em cantos agudos no software."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Distância entre Pontos",
      "Ponto de Preenchimento",
      "Direção do Ponto"
    ],
    "tags": [
      "d-023",
      "distribuicao de pontos",
      "equilibrio",
      "topologia",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim distributio, -onis (divisão harmônica, partilha ordenada, de distribuere) e punctum (ponto perfurado). Na programação gráfica CAD têxtil, refere-se ao algoritmo topológico de dispersão espacial de perfurações ao longo de nós vetoriais.",
    "beginnerExplanation": "Distribuição de pontos é como os pontos estão espalhados pelo desenho: se eles estão bem divididos de forma suave e organizada, ou se estão todos amontoados em um canto só. Uma boa distribuição faz o bordado ficar macio e plano, sem aquelas bolotas duras nos cantos das letras.",
    "practicalExercise": "Desenhe uma estrela de 5 pontas no software e borde em ponto cheio (Satin). Observe os bicos finos da estrela: se os pontos estiverem se acumulando todos na mesma pontinha, ative a opção de 'Cantos Inteligentes' (Smart Corners) ou reduza a densidade na curva para redistribuir os pontos com suavidade.",
    "quickSummary": "Distribuição de pontos é o arranjo espacial equilibrado das perfurações de agulha sobre a forma vetorial, evitando acúmulos e deformações no tecido.",
    "bibliographicReferences": [
      "WILCOM. Stitch Distribution, Smart Corners & Density Balancing. Sydney: Wilcom, 2022.",
      "DEVERSON, D. Vector Topologies for Textile Embroidery. London: Textile Press, 2021.",
      "ARTRELADOS. Distribuição Harmônica de Pontos e Tratamento de Cantos Agudos. São Paulo, 2024."
    ]
  },
  {
    "id": "d-024-desenho-de-bordado-pratica",
    "code": "D-024",
    "term": "Desenho de Bordado (Prática & Conceito)",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal formada por substantivos masculinos.",
    "category": "Design & Criação",
    "summary": "Guia prático para a escolha, análise e adaptação de imagens visuais antes de transformá-las em matrizes.",
    "definition": "O desenho de bordado é a representação visual daquilo que se deseja transformar em bordado computadorizado (uma flor, um logotipo, um nome, um personagem ou símbolo). Uma imagem gráfica (como um arquivo JPG ou PNG) não é automaticamente uma matriz: para ser executada pela máquina, ela precisa ser convertida em uma estrutura de objetos, coordenadas de pontos e comandos mecânicos.",
    "technicalDetails": "Consiste na etapa de pré-avaliação do arquivo de imagem. Uma imagem visualmente linda na tela do celular pode conter linhas de 0.2mm ou textos microscópicos que são fisicamente inviáveis para uma agulha de 0.75mm com linha de poliéster.",
    "construction": [
      "Imagem fonte de referência (JPG, PNG, BMP)",
      "Análise de escala e proporção real",
      "Separação visual de planos e contornos",
      "Planejamento de adaptação para pontos"
    ],
    "howItWorks": [
      "1. A imagem é recebida e analisada quanto à nitidez e viabilidade técnica.",
      "2. Identificam-se detalhes que precisarão ser engrossados ou simplificados.",
      "3. O desenho é redimensionado para o tamanho final antes da digitalização."
    ],
    "mainTypes": [
      "Desenho Linear Simples (Fácil conversão para pontos corridos ou satin)",
      "Desenho Preenchido em Cores Sólidas (Ideal para blocos tatami)",
      "Desenho Complexo / Fotográfico (Exige simplificação prévia profunda)"
    ],
    "advantages": [
      "✔ Garante que o bordado mantenha a identidade visual do projeto original",
      "✔ Evita perdas de tempo tentando digitalizar detalhes impossíveis de bordar",
      "✔ Facilita o alinhamento de expectativas estéticas com o cliente"
    ],
    "limitations": [
      "Imagens com baixa resolução ou muitos degradês exigem redesenho vetorial prévio."
    ],
    "commonErrors": [
      "❌ Tentar bordar um logotipo com letras de 2mm exatamente como está no cartão de visitas.",
      "❌ Supor que a máquina de bordar funciona como uma impressora a jato de tinta.",
      "❌ Não adaptar o desenho ao tipo de tecido onde ele será aplicado."
    ],
    "voceSabia": "A menor letra legível em bordado com agulha 75/11 e linha 40 comum precisa ter pelo menos 4.5mm a 5.0mm de altura. Menor do que isso, os furos da agulha se fundem e a letra vira um borrão!",
    "curiosidadeTecnica": "Ao avaliar um desenho, reduza a imagem na tela do computador até que ela meça exatamente os centímetros reais que terá na peça e afaste-se 50cm: o que você não conseguir ler com os olhos também não funcionará no bordado.",
    "dicaArtrelados": "Não pergunte apenas: 'a imagem é bonita?'. Pergunte: 'esta imagem pode ser transformada em um bom bordado com linha e agulha?' Essa pergunta muda completamente a sua visão de produção!",
    "applications": [
      "Avaliação de artes de clientes, criação de novas matrizes e orçamentos de ateliê."
    ],
    "troubleshootingTips": [
      "Se um detalhe do desenho estiver pequeno demais, engrosse-o no software gráfico antes de abrir o programa de bordado."
    ],
    "relatedTerms": [
      "Desenho de Bordado",
      "Digitalização de Bordado",
      "Vetorização",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-024",
      "desenho de bordado",
      "arte",
      "viabilidade",
      "escala",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim deexsignare (traçar, delinear com marcas) e do grego praktike (relativo à ação, empírico, de prassein, fazer). Representa a ponte prática entre a arte ilustrativa e a física mecânica da agulha.",
    "beginnerExplanation": "É o passo a passo prático de como escolher e preparar um desenho antes de bordar: ver se as letras não são pequenas demais, se os detalhes finos vão aparecer no pano e se a imagem combina com o tipo de peça (toalha, camiseta, boné).",
    "practicalExercise": "Pegue três desenhos diferentes (uma foto de família cheia de sombras, um desenho infantil simples de contorno preto e um logotipo corporativo). Analise os três e classifique: qual deles está 100% pronto para bordar, qual precisa de pequenas adaptações e qual precisa ser redesenhado do zero.",
    "quickSummary": "Desenho de bordado prático é a metodologia de análise prévia e adaptação dimensional de artes visuais para a realidade física do bordado.",
    "bibliographicReferences": [
      "LEE, C. Practical Artwork Adaptation for Machine Embroidery. Seoul, 2022.",
      "PUNDOLE, F. Graphic Principles for Embroidery Digitizers. Mumbai, 2021.",
      "ARTRELADOS. Metodologia Artrelados de Triagem e Adaptação de Desenhos. São Paulo, 2024."
    ]
  },
  {
    "id": "d-025-digitalizacao-automatica-regras",
    "code": "D-025",
    "term": "Digitalização Automática (Regras & Limitações)",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Softwares & Formatos",
    "summary": "Análise profunda de funcionamento, vantagens reais e armadilhas da conversão automática de matrizes.",
    "definition": "A digitalização automática é o recurso dos softwares de bordado que analisa uma imagem e tenta convertê-la de forma autônoma em objetos e pontos. Embora pareça um processo mágico e instantâneo, o programa não compreende a física dos tecidos, a elasticidade nem as tensões da linha, exigindo sempre rigorosa revisão técnica e ajustes humanos.",
    "technicalDetails": "Funciona bem para imagens com cores sólidas puras, alto contraste, sem degradês e com formas geométricas limpas. Falha frequentemente em fotografias, texturas complexas e pequenos textos.",
    "construction": [
      "Reconhecimento automatizado de formas",
      "Redução algorítmica de cores",
      "Atribuição genérica de ângulos e pontos",
      "Inserção automática de cortes e saltos"
    ],
    "howItWorks": [
      "1. O usuário importa uma imagem nítida de alto contraste no software.",
      "2. O programa agrupa os pixels por similaridade de cor.",
      "3. Gera blocos de pontos cheios ou tatami de forma automática.",
      "4. O operador precisa inspecionar e corrigir sequências, pontos curtos e compensações."
    ],
    "mainTypes": [
      "Conversão Automática de Imagem Bitmap (PNG/JPG)",
      "Conversão Automática de Desenho Vetorial (SVG/EPS)",
      "Conversão Automática de Tipografia TrueType do Windows"
    ],
    "advantages": [
      "✔ Agilidade para criar rascunhos e modelos iniciais de apresentação",
      "✔ Reduz o tempo de traçado em desenhos com muitas formas geométricas simples",
      "✔ Excelente ferramenta auxiliar para quem está iniciando os estudos"
    ],
    "limitations": [
      "Gera sequências pouco eficientes com saltos longos, excesso de pontos e falta de compensação de repuxamento."
    ],
    "commonErrors": [
      "❌ Enviar a matriz gerada automaticamente direto para a máquina sem revisão.",
      "❌ Acreditar que o software sabe qual entretela ou tecido você vai utilizar.",
      "❌ Confundir uma imagem com simulação 3D bonita na tela com uma matriz estável na máquina."
    ],
    "voceSabia": "Uma matriz gerada automaticamente pode levar 10 segundos para ser criada no software, mas gastar 20 minutos a mais na máquina por causa de dezenas de cortes desnecessários!",
    "curiosidadeTecnica": "A conversão automática de texto TrueType funciona bem para fontes retas (Arial, Impact), mas costuma deformar completamente fontes cursivas finas ou com serifa.",
    "dicaArtrelados": "Use a digitalização automática como ponto de partida, nunca como ponto de chegada! Uma matriz bonita na tela ainda precisa ser uma matriz eficiente na máquina. Antes de bordar, confira: sequência + pontos + densidade + underlay + tamanho + tecido!",
    "applications": [
      "Conversão rápida de formas básicas, símbolos simples e estudos de viabilidade."
    ],
    "troubleshootingTips": [
      "Após a conversão automática, exclua os micro-objetos de menos de 1mm que o software gerou por engano nas bordas das cores."
    ],
    "relatedTerms": [
      "Digitalização Manual",
      "Digitalizador de Bordado",
      "Desenho Digitalizado",
      "Underlay"
    ],
    "tags": [
      "d-025",
      "digitalizacao automatica",
      "software",
      "regras",
      "limitacoes",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis e grego automatos (automático), aliado ao latim regula (regra, norma) e limitatio (delimitação de fronteiras).",
    "beginnerExplanation": "São as regras essenciais para você não cair em ciladas ao usar a conversão automática do software: imagens precisam ter contornos nítidos e cores sólidas; você nunca deve confiar na matriz sem antes passar um 'pente fino' no simulador para apagar pontos curtos e nós escondidos.",
    "practicalExercise": "Pegue um logotipo simples com círculos e letras: faça a conversão automática e abra a lista de objetos do software. Conte quantos pequenos cortes de linha foram criados. Junte manualmente as partes da mesma cor para eliminar cortes e compare o tempo final estimado da matriz!",
    "quickSummary": "Digitalização automática com regras e limitações é a aplicação criteriosa de ferramentas de conversão assistida sob estrito controle e pós-edição humana.",
    "bibliographicReferences": [
      "BERNINA. Auto-Digitizing Best Practices & Quality Control. Steckborn, 2023.",
      "HATCH. When to Use Auto-Digitize and How to Fix It. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Manual de Sobrevivência e Otimização para Matrizes Automáticas. São Paulo, 2024."
    ]
  },
  {
    "id": "d-026-digitalizacao-manual-tecnica",
    "code": "D-026",
    "term": "Digitalização Manual (Técnica & Decisões)",
    "level": "Avançado 🔴",
    "grammarClass": "Locução nominal formada por substantivo feminino e adjetivo.",
    "category": "Programação de Bordado",
    "summary": "Metodologia consciente de construção de matrizes onde cada decisão técnica é controlada pelo digitalizador.",
    "definition": "Na digitalização manual, o profissional constrói os objetos da matriz conscientemente, definindo parâmetros, caminhos, pontos de entrada/saída, ângulos e underlays de acordo com a física do tecido e o acabamento pretendido. Em vez de delegar decisões ao computador, o digitalizador assume o controle de toda a engenharia da matriz.",
    "technicalDetails": "Permite calibrar tolerâncias de Pull Compensation (+0.30mm a +0.60mm), aplicar underlays adequados (linha central, ziguezague ou tatami duplo) e construir caminhos contínuos que eliminam paradas de corte.",
    "construction": [
      "Definição de entrada e saída por objeto",
      "Seleção criteriosa de tipo de ponto por espessura",
      "Estruturação de underlay por camadas",
      "Planejamento de sobreposição de segurança (overlap)"
    ],
    "howItWorks": [
      "1. O digitalizador estuda o desenho e define a ordem cronológica de costura.",
      "2. Traça os nós de contorno e aplica a linha de direção do ponto.",
      "3. Configura a densidade e o underlay conforme o tecido de destino.",
      "4. Conecta os objetos com pequenos pontos de viagem ocultos."
    ],
    "mainTypes": [
      "Digitalização Manual por Colunas (Colunas A, B, C no Wilcom)",
      "Digitalização Manual por Preenchimento Complexo",
      "Digitalização Ponto a Ponto Cirúrgica"
    ],
    "advantages": [
      "✔ Máxima precisão e encaixe perfeito entre contornos e fundos",
      "✔ Zero quebras de linha e bordado extremamente macio e flexível",
      "✔ Alta velocidade de produção na máquina com avesso limpíssimo"
    ],
    "limitations": [
      "Exige curva de aprendizado gradual e prática com o software de programação."
    ],
    "commonErrors": [
      "❌ Clicar pontos em excesso tentando desenhar contornos perfeitos, sobrecarregando a curva.",
      "❌ Esquecer de planejar onde o objeto anterior terminou antes de criar o próximo.",
      "❌ Não aplicar folga de transpasse (overlap) entre o fundo e o contorno."
    ],
    "voceSabia": "Digitalizadores experientes gastam 40% do tempo apenas planejando a sequência mental antes de dar o primeiro clique no software!",
    "curiosidadeTecnica": "Na digitalização manual, menos nós de vetor produzem curvas mais suaves e pontos mais uniformes do que curvas cheias de nós acumulados.",
    "dicaArtrelados": "Digitalizar manualmente não significa fazer tudo difícil: significa saber exatamente por que você está fazendo cada escolha! O objetivo não é clicar mais, é decidir melhor!",
    "applications": [
      "Matrizes para alta costura, uniformes executivos, enxovais personalizados e marcas de moda."
    ],
    "troubleshootingTips": [
      "Ao criar colunas Satin em curvas, mantenha as guias de ângulo sempre perpendiculares às bordas da coluna para evitar distorções."
    ],
    "relatedTerms": [
      "Digitalização Automática",
      "Ponto de Entrada",
      "Ponto de Saída",
      "Ponto Satin",
      "Underlay"
    ],
    "tags": [
      "d-026",
      "digitalizacao manual",
      "tecnica",
      "decisoes",
      "precisao",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis manualis (programação manual) e techne (arte, ofício prático) e decisio (determinação clara após ponderação, de decidere).",
    "beginnerExplanation": "É a tomada de decisões conscientes do programador experiente: escolher se uma pétala deve ser bordada antes ou depois do caule, qual ângulo de ponto vai valorizar a luz e qual costura de base vai segurar o tecido sem repuxar.",
    "practicalExercise": "Pegue um desenho de um pássaro: planeje no papel a ordem exata das camadas (1º o bico de fundo, 2º o corpo, 3º as asas sobrepostas, 4º os olhos e contornos finais). Depois digitalize no software seguindo rigorosamente essa ordem: veja como o pássaro ganha vida e volume perfeito no tecido!",
    "quickSummary": "Digitalização manual técnica e decisória é o processo deliberado de engenharia de pontos onde cada escolha atende a critérios estéticos e físicos precisos.",
    "bibliographicReferences": [
      "GARCIA, E. Decision Making in Advanced Embroidery Digitizing. Barcelona, 2022.",
      "TAJIMA. Pulse DGML Advanced Master Series. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. A Arte da Decisão: Sequenciamento e Estruturação de Matrizes. São Paulo, 2024."
    ]
  },
  {
    "id": "d-027-digitalizacao-por-objetos",
    "code": "D-027",
    "term": "Digitalização por Objetos",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivo feminino e locução prepositiva.",
    "category": "Programação de Bordado",
    "summary": "Método de construção que divide o desenho em elementos individuais e independentes com configurações próprias.",
    "definition": "A digitalização por objetos é a metodologia moderna de criação de matrizes na qual o desenho é decomposto em elementos vetoriais individuais e autônomos (como pétala, folha, caule, letra, fundo). Em vez de enxergar a imagem como um bloco único, o digitalizador cria cada parte como um 'objeto' inteligente com suas próprias propriedades de ponto, direção, densidade e underlay.",
    "technicalDetails": "Adotada pelos principais softwares modernos baseados em objetos (Wilcom EMB, Hatch, Brother PE-Design, Bernina). Permite redimensionar, alterar tipo de ponto e mudar propriedades a qualquer momento sem perder a integridade geométrica.",
    "construction": [
      "Objeto vetorial fechado (área de preenchimento)",
      "Objeto vetorial aberto (linha de contorno / ponto corrido)",
      "Objeto de coluna (largura variável em satin)",
      "Lista sequencial de objetos (Object List)"
    ],
    "howItWorks": [
      "1. O desenho é dividido mentalmente em suas partes constituintes.",
      "2. Cada parte é traçada como um objeto independente no software.",
      "3. Cada objeto recebe parâmetros específicos adequados à sua função.",
      "4. Os objetos são ordenados na lista de sequência para criar o fluxo de costura."
    ],
    "mainTypes": [
      "Objetos de Preenchimento (Tatami, Padrões)",
      "Objetos de Coluna (Ponto Cheio com ângulo dinâmico)",
      "Objetos de Linha (Ponto Corrido simples, triplo ou decorativo)",
      "Objetos de Apliquê Automatizado"
    ],
    "advantages": [
      "✔ Flexibilidade total para editar qualquer parte do desenho a qualquer momento",
      "✔ Redimensionamento perfeito com recálculo automático de densidade",
      "✔ Facilidade para reordenar a sequência de costura arrastando objetos na lista"
    ],
    "limitations": [
      "Exige que o arquivo seja salvo no formato proprietário original do software (ex: .EMB) para manter as propriedades de objeto editáveis."
    ],
    "commonErrors": [
      "❌ Criar uma única área enorme tentando reproduzir vários elementos diferentes juntos.",
      "❌ Salvar a matriz apenas em formato de máquina (.DST/.PES) e perder os dados vetoriais dos objetos.",
      "❌ Esquecer de ajustar a sobreposição entre objetos que se encostam."
    ],
    "voceSabia": "Quando você exporta uma matriz para formato de máquina (.DST ou .PES), todos os objetos vetoriais são 'achatados' em coordenadas brutas de pontos, dificultando edições complexas posteriores!",
    "curiosidadeTecnica": "Trabalhar por objetos permite que o software recalcule automaticamente a quantidade de pontos quando a matriz é ampliada ou reduzida em até 20%.",
    "dicaArtrelados": "Quando olhar para uma imagem, tente 'quebrá-la' mentalmente em pequenas peças! Pergunte: 'Quais objetos individuais eu consigo identificar aqui?' Essa habilidade é a base de todo o raciocínio da digitalização!",
    "applications": [
      "Construção modular de todas as matrizes modernas em softwares profissionais."
    ],
    "troubleshootingTips": [
      "Sempre guarde uma cópia mestra no formato de objeto (.EMB, .JAN, .ART) antes de gerar o arquivo final de máquina."
    ],
    "relatedTerms": [
      "Digitalização Manual",
      "Sequência de Pontos",
      "Sobreposição",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-027",
      "digitalizacao por objetos",
      "vetorial",
      "emb",
      "modulos",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim digitalis (digital) e objectum (aquilo que está diante dos olhos, elemento delimitado, de objicere). Paradigma central da computação gráfica moderna orientada a objetos vetoriais.",
    "beginnerExplanation": "Digitalização por objetos significa que você constrói o desenho dividindo-o em 'peças de Lego' inteligentes (cada folha é um objeto, cada letra é outro objeto). Assim, se você quiser mudar o tamanho ou o tipo de ponto depois, o software recalcula tudo automaticamente sem estragar a matriz!",
    "practicalExercise": "No seu software, selecione uma folha desenhada como objeto vetorial de ponto cheio (Satin): mude o tamanho dela aumentando em 50%. Observe como o software aumentou a quantidade de pontos automaticamente mantendo a mesma densidade perfeita, graças à digitalização por objetos!",
    "quickSummary": "Digitalização por objetos é a modelagem de matrizes através de elementos vetoriais paramétricos que preservam propriedades editáveis de pontos e formas.",
    "bibliographicReferences": [
      "WILCOM. Object-Based Embroidery Design Architecture. Sydney: Wilcom, 2022.",
      "EMBIRD. Working with Vector Objects and Properties in Digitizing. Bratislava, 2023.",
      "ARTRELADOS. O Poder dos Objetos Vetoriais na Criação e Redimensionamento. São Paulo, 2024."
    ]
  },
  {
    "id": "d-028-desenho-de-matriz",
    "code": "D-028",
    "term": "Desenho de Matriz",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim de- + signare (marcar, traçar contornos gráficos) e do latim matrix, -icis (molde gerador). Na engenharia mecatrônica têxtil, refere-se à composição estruturada e vetorial do arquivo digital de bordado.",
    "summary": "Processo e resultado do traçado digital vetorial e da programação de pontos que compõem uma matriz de bordado computadorizado.",
    "definition": "O desenho de matriz é a concepção gráfica, estruturação geométrica e conversão de uma imagem ou conceito visual em objetos vetoriais de bordado. Compreende a definição de tipos de pontos (tatami, satin, ponto corrido), ângulos de inclinação, densidades, camadas de base (underlay) e trajetórias de costura que orientam o cabeçote e o pantógrafo da máquina durante o ciclo de produção.",
    "technicalDetails": "Estruturado em entidades vetoriais paramétricas fechadas e abertas (polígonos Bézier) com atributos numéricos de densidade (0.35mm a 0.50mm), comprimentos de ponto (1.5mm a 7.0mm), compensação de repuxo (+0.30mm a +0.50mm) e comandos de máquina embutidos (Trim, Stop, Color Change).",
    "howItWorks": [
      "1. A imagem de referência (PNG, JPG ou vetor SVG) é importada para a área de trabalho do software de bordado.",
      "2. O designer desenha os objetos por camadas, do fundo para os detalhes superficiais, usando ferramentas de contorno e preenchimento.",
      "3. São parametrizados os tipos de ponto, densidades, underlays e ângulos de reflexão de luz.",
      "4. O software calcula o caminho de costura (Stitch Path) e gera as coordenadas binárias prontas para envio à máquina."
    ],
    "beginnerExplanation": "É a criação do arquivo do bordado no computador: é quando você transforma uma foto, desenho ou logo em pontinhos que a máquina de bordar consegue entender e costurar perfeitamente no tecido.",
    "applications": [
      "Digitalização de logotipos empresariais para uniformes",
      "Criação de matrizes infantis de aplique e ponto cheio",
      "Desenho de brasões, arabescos e monogramas para enxovais",
      "Elaboração de matrizes ricas com relevo 3D e efeitos de sombreamento"
    ],
    "commonErrors": [
      "Desenhar a matriz no mesmo sentido de estiramento do tecido sem aplicar compensação de repuxo, deformando o formato",
      "Sobrepor camadas densas sobrepostas no mesmo lugar sem remover pontos ocultos, criando placas duras",
      "Não planejar a ordem de costura das cores, gerando dezenas de trocas de linha desnecessárias"
    ],
    "troubleshootingTips": [
      "Sempre utilize o simulador em tempo real (Stitch Player) do software para inspecionar o desenho antes de levar para a máquina",
      "Mantenha a regra de desenhar do centro para fora e de baixo para cima para evitar o empurrão do tecido",
      "Agrupe partes da mesma cor para reduzir as paradas de troca de carretel"
    ],
    "dicaArtrelados": "Ao desenhar uma matriz, lembre-se de que a agulha não pinta como um pincel: ela puxa e estica o tecido! Sempre adicione uma folguinha de sobreposição (overlap) de 1.0mm a 1.5mm entre os objetos vizinhos para os contornos não se separarem na hora de bordar.",
    "voceSabia": "Na era pioneira do bordado mecânico nos anos 1960, o 'desenho de matriz' era feito à mão em mesas digitalizadoras do tamanho de mesas de bilhar, onde o operador perfurava cartões Jacquard com uma agulha manual a cada salto de ponto.",
    "practicalExercise": "Importe uma imagem simples de uma estrela no seu software: desenhe o preenchimento em tatami com ângulo a 45°, adicione um underlay leve e coloque uma costura de contorno em satin de 2.0mm. Borde no tecido de teste e veja como o seu desenho de matriz ganha vida e textura!",
    "quickSummary": "Processo de criação e vetorização gráfica do arquivo digital de bordado que traduz imagens em trajetórias de pontos executáveis.",
    "relatedTerms": [
      "Bordado Digitalizado",
      "Correção de Pontos",
      "Compensação de Empurrar e Puxar",
      "Caminho de Costura"
    ],
    "tags": [
      "desenho",
      "matriz",
      "digitalização",
      "vetores",
      "software",
      "programação"
    ],
    "bibliographicReferences": [
      "WILCOM. Embroidery Studio Digitizing Fundamentals & Design Architecture. Sydney: Wilcom, 2022.",
      "KRAUSZ, P. The Art of Embroidery Digitizing: From Graphic Concept to Master Stitch. New York, 2021.",
      "ARTRELADOS. Fundamentos do Desenho de Matrizes: Estrutura, Camadas e Encaixes Perfeitos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-029-deslocamento-de-origem",
    "code": "D-029",
    "term": "Deslocamento de Origem",
    "level": "Intermediário 🟡",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dis- + locare (mudar de lugar, afastar do sítio original) e origo, -inis (ponto de partida, nascimento). Princípio fundamental das coordenadas cartesianas relativas em sistemas mecatrônicos CNC.",
    "summary": "Ajuste milimétrico das coordenadas espaciais do ponto zero inicial do bastidor para posicionar o bordado em locais específicos da peça.",
    "definition": "O deslocamento de origem (ou ajuste de Offset / Zero Point Shift) é o procedimento operacional realizado no painel de controle da máquina de bordar ou no software para transladar o ponto inicial de referência (X:0, Y:0) do centro padrão do bastidor para uma posição customizada no tecido, permitindo alinhar o bordado com marcações físicas, bolsos, listras, costuras prévias ou emendas de desenhos grandes.",
    "technicalDetails": "Executa a translação vetorial nas coordenadas cartesianas relativas (delta X e delta Y com resolução de 0.1mm). Bloqueia a execução caso o deslocamento force a trajetória para fora dos limites seguros da moldura do bastidor (limite de fim de curso / software limit switches).",
    "howItWorks": [
      "1. A peça é colocada no bastidor com uma marcação de cruz feita com giz ou caneta fantasma na posição desejada do bordado.",
      "2. No painel da máquina, o operador aciona as setas direcionais de movimentação manual do carro nos eixos X e Y.",
      "3. A ponta da agulha (ou o ponto de laser de posicionamento) é alinhada com o centro exato da cruz riscada no tecido.",
      "4. O operador pressiona a tecla 'Definir Origem' (Set Origin/Origin Shift), redefinindo a coordenada zero para aquela posição.",
      "5. A função de traçado de área (Trace) é executada para confirmar que todo o perímetro do desenho cabe dentro do bastidor sem bater a agulha no aro."
    ],
    "beginnerExplanation": "É quando você usa as setinhas do painel da máquina para andar com o bastidor e dizer: 'máquina, não comece no meião do bastidor, comece exatamente aqui onde eu fiz este risco no tecido!'. Isso ajuda a bordar em cima de bolsinhos ou em cantos de toalhas sem errar a mira.",
    "applications": [
      "Posicionamento de monogramas no canto diagonal de toalhas de lavabo",
      "Bordados em bolsos prontos de camisas e jalecos",
      "Alinhamento de matrizes divididas em bastidores de múltiplos estágios (Giga Hoop)",
      "Centralização sobre recortes geométricos ou brasões pré-impressos"
    ],
    "commonErrors": [
      "Deslocar a origem muito perto da borda plástica do bastidor sem fazer o traçado de teste, provocando a colisão da agulha com o aro plástico",
      "Esquecer de travar a nova origem no painel, fazendo a máquina voltar ao centro absoluto no momento do primeiro ponto",
      "Fazer o deslocamento com a agulha abaixada dentro do tecido, entortando a barra de agulha e rasgando a peça"
    ],
    "troubleshootingTips": [
      "Sempre levante a agulha para a posição mais alta (Top Dead Center) antes de movimentar os eixos X e Y no painel",
      "Após qualquer deslocamento de origem, acione obrigatoriamente a função 'Trace' (Traçado de Perímetro)",
      "Se a máquina emitir sinal sonoro de erro de limite, mova a origem alguns milímetros de volta em direção ao centro do bastidor"
    ],
    "dicaArtrelados": "Para acertar a origem em bolsos ou cantos de toalhas de olhos fechados, use o laser de mira da máquina ou abaixe a agulha suavemente girando o volante manual até a pontinha tocar exatamente no centro da cruzeta de giz: aperte 'Definir Origem' e o alinhamento fica cirúrgico!",
    "voceSabia": "Em máquinas industriais de grande porte com mesas de 15 metros de comprimento, os operadores utilizam ponteiros laser cruzados de alta precisão para deslocar a origem dezenas de vezes por dia em rolos contínuos de tecido sem nunca precisar desmontar a peça do pantógrafo.",
    "practicalExercise": "Risque uma pequena cruz com caneta que apaga com calor a 4cm do canto de um retalho de tecido colocado no bastidor: use as setas do painel da sua máquina para levar a agulha até a marcação, aperte 'Set Origin', execute o traçado de área e borde uma letra de 2cm. Veja como o bordado fica perfeitamente posicionado no local planejado!",
    "quickSummary": "Translação das coordenadas do ponto inicial (X:0, Y:0) para posicionar o bordado em regiões específicas do bastidor com precisão milimétrica.",
    "relatedTerms": [
      "Traçado de Área",
      "Bastidor Virtual",
      "Centralização Automática no Bastidor",
      "Configuração da Máquina de Bordado"
    ],
    "tags": [
      "deslocamento",
      "origem",
      "offset",
      "posicionamento",
      "coordenadas",
      "painel"
    ],
    "bibliographicReferences": [
      "TAJIMA. Coordinate System Origin Offset & Machine Limits Manual. Nagoya, 2022.",
      "BROTHER. Origin Setting and Needle Position Alignment Procedures. Nagoya, 2023.",
      "ARTRELADOS. Posicionamento e Deslocamento de Origem sem Erros de Batida de Bastidor. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-030-digitalizacao-de-logotipo",
    "code": "D-030",
    "term": "Digitalização de Logotipo",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal feminina.",
    "category": "Programação de Bordado",
    "summary": "Processo técnico de adaptação e transformação de identidades visuais de marcas em matrizes de alta precisão.",
    "definition": "A digitalização de logotipo é o processo técnico e de design responsável por transformar a representação gráfica de uma marca, símbolo ou identidade corporativa em uma matriz de bordado eletrônico de alta qualidade. Esse processo não consiste em simplesmente converter um arquivo de imagem (PNG ou JPG): exige interpretar a arte, simplificar detalhes minúsculos e reconstruí-la na linguagem física de pontos, fios e tecidos.",
    "technicalDetails": "Envolve adequação à escala (versões para peito de 8cm a 10cm vs costas de 25cm a 30cm), seleção de pontos para textos pequenos (mínimo de 4.5mm para Satin com linha 40 ou uso de linha fina 60), calibração de compensação de repuxo e compatibilização da paleta de cores da marca com os códigos de cones de poliéster.",
    "construction": [
      "Análise e vetorização limpa do logo",
      "Adaptação de pequenos textos e slogans",
      "Definição da ordem de sobreposição das cores",
      "Criação de transpasses de segurança (overlap)"
    ],
    "howItWorks": [
      "1. O digitalizador recebe o manual de marca ou vetor do cliente.",
      "2. Avalia a escala de aplicação (camisa polo, boné, jaleco, jaqueta).",
      "3. Simplifica detalhes que desapareceriam na escala de bordado.",
      "4. Aplica pontos Tatami em fundos e Ponto Cheio nas letras e contornos.",
      "5. Realiza o teste prático no tecido definitivo do uniforme."
    ],
    "mainTypes": [
      "Logotipo para Peito / Camisa Polo (8cm a 10cm - foco em legibilidade)",
      "Logotipo para Costas / Jaqueta (20cm a 28cm - foco em leveza e baixo peso)",
      "Logotipo para Boné Estruturado (Costura do centro para as bordas)",
      "Logotipo em Relevo 3D / EVA (Para marcas esportivas e bonés premium)"
    ],
    "advantages": [
      "✔ Fidelidade rigorosa à identidade corporativa do cliente",
      "✔ Textos e contornos nítidos e perfeitamente legíveis mesmo de longe",
      "✔ Alta durabilidade em lavagens industriais frequentes de uniformes"
    ],
    "limitations": [
      "Logotipos com degradês complexos ou textos com menos de 3.5mm exigem adaptação ou simplificação para viabilidade em bordado."
    ],
    "commonErrors": [
      "❌ Perguntar apenas 'qual é o programa que converte o logo automaticamente?'.",
      "❌ Tentar reproduzir letras minúsculas sem engrossar as hastes ou simplificar o traço.",
      "❌ Usar a mesma matriz de peito de camisa para bordar em bonés ou toalhas."
    ],
    "voceSabia": "Um mesmo logotipo de empresa frequentemente precisa de 3 ou 4 versões diferentes de matriz: uma para camiseta de malha, uma para camisa social de tricoline, uma para boné e outra para jaqueta grossa!",
    "curiosidadeTecnica": "Em logotipos com círculos perfeitos, a compensação de repuxo adiciona cerca de 0.4mm no eixo de tração para que o círculo não vire um formato oval após o bordado sair do bastidor.",
    "dicaArtrelados": "Especial para quem atende clientes: nunca pergunte apenas 'qual é o arquivo do logotipo?'. Pergunte sempre: 'onde, em qual tamanho e em qual tecido esse logotipo será bordado?' Essas três respostas mudam completamente a estrutura da matriz!",
    "applications": [
      "Uniformes empresariais, jalecos médicos, camisas polo, bonés corporativos e brindes promocionais."
    ],
    "troubleshootingTips": [
      "Para bordar slogans com letras de 4mm a 5mm, utilize agulha 65/9 e linha de bordado fina Título 60 com ponto corrido duplo ou satin leve."
    ],
    "relatedTerms": [
      "Digitalização Manual",
      "Desenho Vetorial",
      "Compensação de Puxão",
      "Ponto Satin"
    ],
    "tags": [
      "d-030",
      "digitalizacao de logotipo",
      "uniformes",
      "marcas",
      "identidade visual",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do grego logos (palavra, conceito) e typos (marca, figura gravada), e do latim digitalis. Ramo comercial mais lucrativo e técnico do bordado industrial contemporâneo.",
    "beginnerExplanation": "É a criação de matrizes para marcas e empresas (em camisas polo, bonés, jalecos e uniformes). Exige muito capricho porque as letras precisam ficar retinhas, legíveis e com as cores fiéis à marca do cliente.",
    "practicalExercise": "Pegue um logotipo corporativo que contenha um símbolo grande e um texto pequeno embaixo: digitalize o símbolo primeiro e depois as letras, garantindo que letras com menos de 5mm usem ponto cheio com compensação de repuxo (pull compensation) calibrada em 0.35mm. Borde em uma camisa polo piquê com entretela de malha!",
    "quickSummary": "Digitalização de logotipo é a programação técnica de identidades visuais corporativas, exigindo alta precisão dimensional e máxima legibilidade tipográfica.",
    "bibliographicReferences": [
      "NNEP. Commercial Logo Embroidery: Quality Standards & Lettering. Canton, 2022.",
      "BLANCO, R. Ponchado de Logotipos Corporativos y Marcas. Madri: Ediciones Técnicas, 2021.",
      "ARTRELADOS. Como Bordar Logotipos Perfeitos em Uniformes e Piquê. São Paulo, 2024."
    ]
  },
  {
    "id": "d-031-desenho-vetorial",
    "code": "D-031",
    "term": "Desenho Vetorial",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal masculina.",
    "category": "Design & Criação",
    "summary": "Representação gráfica baseada em fórmulas matemáticas e curvas que permite ampliação sem perda de definição.",
    "definition": "Um desenho vetorial é uma representação gráfica construída por meio de elementos matemáticos como linhas, curvas de Bézier, polígonos e pontos de controle (nós), em vez de ser formado por uma grade fixa de pixels. Isso permite que a imagem seja redimensionada para qualquer tamanho sem perder a nitidez e sem apresentar o efeito serrilhado típico de imagens rasterizadas (JPG/PNG). No bordado, serve como a base gráfica ideal para a digitalização.",
    "technicalDetails": "Formatos vetoriais padrão incluem SVG, AI, EPS, CDR e PDF vetorial. Ao contrário de uma imagem rasterizada que possui resolução fixa em DPI, o vetor possui definição geométrica infinita, facilitando o traçado exato dos objetos de bordado.",
    "construction": [
      "Pontos de ancoragem e nós de controle",
      "Curvas matemáticas de Bézier",
      "Linhas de contorno e preenchimentos vetoriais",
      "Camadas de objetos agrupados"
    ],
    "howItWorks": [
      "1. O designer cria ou recebe a arte em formato vetorial.",
      "2. As curvas são manipuladas e simplificadas para eliminar nós excessivos.",
      "3. O software de bordado importa o vetor e utiliza seus nós como guias diretas para gerar pontos."
    ],
    "mainTypes": [
      "Vetor SVG (Formato aberto universal)",
      "Vetor AI / EPS (Adobe Illustrator)",
      "Vetor CDR (CorelDRAW - amplamente integrado com softwares de bordado)"
    ],
    "advantages": [
      "✔ Contornos ultra nítidos e formas perfeitamente definidas",
      "✔ Permite redimensionar a arte livremente antes de gerar a matriz",
      "✔ Facilita a separação automática ou manual de cores e objetos"
    ],
    "limitations": [
      "Um arquivo vetorial NÃO é uma matriz de bordado: ele define apenas a forma visual, não contendo informações de pontos, direções, underlay ou cortes."
    ],
    "commonErrors": [
      "❌ Achar que salvar um arquivo como .SVG já permite colocá-lo no pendrive da máquina de bordar.",
      "❌ Ampliar o vetor em 300% e achar que a matriz de pontos gerada no tamanho original continuará funcionando sem ajustes.",
      "❌ Não simplificar nós desnecessários antes de importar no software de bordado."
    ],
    "voceSabia": "O CorelDRAW é o motor gráfico por trás do software Wilcom EmbroideryStudio: você desenha em vetor de um lado e o programa gera os pontos de bordado em tempo real do outro!",
    "curiosidadeTecnica": "A sequência recomendada para iniciantes é: 1. Imagem (Ideia visual) → 2. Vetor (Organização geométrica de formas) → 3. Matriz (Tradução física em pontos de linha).",
    "dicaArtrelados": "O vetor é o desenho organizado; a matriz é o desenho traduzido para a linguagem da máquina! E guarde a regra de ouro: Não tente fazer a máquina bordar tudo o que seus olhos conseguem ver no vetor. Escolha o que realmente precisa e consegue aparecer com qualidade no tecido!",
    "applications": [
      "Base essencial para digitalização de logotipos, brasões, mascotes e tipografias."
    ],
    "troubleshootingTips": [
      "Se o software de bordado travar ao importar um vetor, use a ferramenta de 'Simplificar Curvas' no Corel ou Illustrator para reduzir a quantidade de nós."
    ],
    "relatedTerms": [
      "Vetorização",
      "Desenho de Bordado",
      "Digitalização de Bordado",
      "Matriz de Bordado"
    ],
    "tags": [
      "d-031",
      "desenho vetorial",
      "svg",
      "cdr",
      "ai",
      "curvas",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim deexsignare (desenhar) e vector, -oris (aquele que transporta, condutor geométrico, de vehere, transportar). Arte gráfica baseada em fórmulas matemáticas e curvas de Bézier.",
    "beginnerExplanation": "Desenho vetorial é uma imagem feita por linhas e curvas matemáticas no computador (em formatos como SVG, CDR ou AI). Ao contrário de uma foto comum que fica cheia de quadradinhos (pixels) quando você amplia, o vetor nunca perde a qualidade nem a nitidez!",
    "practicalExercise": "Abra um arquivo em vetor no seu computador e aumente o zoom para 800%: repare como as linhas continuam perfeitamente lisinhas e afiadas. Agora faça o mesmo com uma foto JPG: veja como as bordas ficam embaçadas. Por isso o vetor é o melhor amigo do digitalizador de bordado!",
    "quickSummary": "Desenho vetorial é a representação gráfica composta por coordenadas matemáticas que permite ampliações infinitas sem perda de definição para o bordado.",
    "bibliographicReferences": [
      "ADOBE. Illustrator Vector Graphics Reference Manual. San Jose: Adobe Press, 2022.",
      "CORELDRAW. Working with Bézier Curves & Vector Shapes. Ottawa: Alludo, 2023.",
      "ARTRELADOS. Guia de Vetores Essenciais para Bordadeiras e Programadores. São Paulo, 2024."
    ]
  },
  {
    "id": "d-032-definicao-de-sequencia",
    "code": "D-032",
    "term": "Definição de Sequência",
    "level": "Fundamental 🟢",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim definitio, -onis (determinação exata de limites) e sequentia (continuidade, série ordenada de acontecimentos, de sequi, seguir). Estrutura lógica primordial da arquitetura de linguagens de bordado.",
    "summary": "Planejamento e ordenação lógica cronológica dos objetos e cores na matriz para otimizar o tempo e garantir o assentamento do tecido.",
    "definition": "A definição de sequência (ou ordenação de objetos / stitch sequencing) é a estruturação cronológica da ordem exata em que cada elemento, camada e cor do desenho será bordado pela máquina. O planejamento correto da sequência minimiza o número de trocas de carretel de linha, elimina cortes desnecessários e respeita a física de dilatação do tecido, bordando do centro para as bordas e do plano de fundo para os detalhes superiores.",
    "technicalDetails": "Gerenciada através da lista de objetos (Sequence Manager / Color-Object List) no software de digitalização. Utiliza algoritmos de agrupamento por cor (Color Sorting), ramificação automática (Branching) e controle de camadas de sobreposição para evitar repuxos assimétricos.",
    "howItWorks": [
      "1. O programador abre a árvore de sequência do software e analisa todos os objetos do desenho.",
      "2. As costuras de alinhave e underlays são configuradas para serem executadas em primeiro lugar.",
      "3. Os objetos de fundo (tatami grande) são ordenados antes dos detalhes e textos que repousam por cima.",
      "4. Os contornos perimétricos e pontos cheios finais são posicionados como os últimos itens da lista.",
      "5. O comando de reordenação por cores agrupa elementos da mesma tonalidade, reduzindo as trocas de linha na máquina."
    ],
    "beginnerExplanation": "É a organização da 'fila' de costura: você decide qual parte do desenho a máquina vai bordar primeiro, qual vem no meio e qual fica por último. Fazer na ordem certa é o que garante que o fundo fique por baixo e os contornos e olhinhos fiquem certinhos por cima!",
    "applications": [
      "Montagem de apliques (ordem: marcação → fixação → acabamento)",
      "Redução do tempo total de bordado através da otimização de trocas de cor",
      "Controle de repuxo em tecidos elásticos bordando sempre de dentro para fora",
      "Sobreposição correta de sombras, degradês e contornos em personagens"
    ],
    "commonErrors": [
      "Bordar o contorno fino preto antes do preenchimento colorido, fazendo o preenchimento cobrir o contorno ou empurrá-lo para fora de posição",
      "Deixar objetos da mesma cor espalhados pela sequência, obrigando a máquina a trocar a linha várias vezes desnecessariamente",
      "Bordar das bordas para o centro, empurrando uma bolha de tecido para o meio do desenho"
    ],
    "troubleshootingTips": [
      "Use a regra clássica da engenharia de bordado: 1º Underlay → 2º Fundo → 3º Detalhes médios → 4º Contornos finais",
      "Acione a ferramenta 'Color Sort' (Agrupar Cores) no software antes de exportar o arquivo final",
      "Arraste os objetos na barra lateral de sequência do software para corrigir a ordem visual com facilidade"
    ],
    "dicaArtrelados": "Pense na definição de sequência como vestir uma pessoa: primeiro a roupa de baixo (underlay), depois a camisa (preenchimento), depois a jaqueta (detalhes) e por último o cinto e os botões (contornos)! Se você tentar colocar o cinto antes da calça, o resultado fica um desastre!",
    "voceSabia": "Uma matriz com sequência mal planejada pode demorar até o dobro do tempo para bordar devido aos ciclos repetidos de parada, corte de linha, troca manual de cone e reinicialização do cabeçote.",
    "practicalExercise": "Abra uma matriz de flor com pétalas e miolo: abra a lista de objetos do software e observe a sequência. Reordene para que a máquina borde primeiro todas as pétalas de fundo e deixe o miolo amarelo com relevo para o final. Simule no player de pontos e veja a harmonia da ordem de costura!",
    "quickSummary": "Ordenação cronológica de objetos e cores na matriz que garante sobreposição correta, redução de paradas e estabilidade do tecido.",
    "relatedTerms": [
      "Camada de Bordado",
      "Caminho de Costura",
      "Corte Automático de Linha",
      "Underlay"
    ],
    "tags": [
      "sequência",
      "ordem",
      "camadas",
      "otimização",
      "software",
      "troca de cor"
    ],
    "bibliographicReferences": [
      "WILCOM. Sequence Optimization, Color Sorting & Branching Logic. Sydney: Wilcom, 2022.",
      "DEVERSON, D. Layering and Sequencing for Multi-Color Commercial Embroidery. London, 2021.",
      "ARTRELADOS. Otimização de Sequência de Matrizes: Como Reduzir Minutos Preciosos na Produção. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-033-detalhamento-da-matriz",
    "code": "D-033",
    "term": "Detalhamento da Matriz",
    "level": "Avançado 🔴",
    "grammarClass": "Locução nominal masculina.",
    "category": "Programação de Bordado",
    "summary": "Nível de informação, refinamento e quantidade de microelementos aplicados na construção de um bordado.",
    "definition": "O detalhamento da matriz corresponde ao nível de informação, precisão visual e quantidade de elementos minuciosos utilizados na construção de um desenho para bordado. Uma matriz pode variar desde um estilo minimalista até uma estrutura altamente complexa e realista. No entanto, no bordado computadorizado vigora a lei física dos materiais: mais detalhes não significam necessariamente um bordado melhor.",
    "technicalDetails": "O limite de detalhamento é determinado pela física da agulha (diâmetro de 0.70mm a 0.80mm), da espessura do fio (Título 40 = ~0.38mm) e da estrutura das tramas do tecido. Tentar colocar microdetalhes abaixo de 1mm causa acúmulo de linha e perda de legibilidade.",
    "construction": [
      "Hierarquia visual de elementos principais e secundários",
      "Filtro de microdetalhes e linhas finas",
      "Escala proporcional de aplicação",
      "Adequação ao relevo e textura do tecido"
    ],
    "howItWorks": [
      "1. O digitalizador analisa a complexidade da arte original.",
      "2. Identifica os elementos essenciais que garantem o reconhecimento do desenho.",
      "3. Elimina ou funde detalhes minúsculos que virariam borrões no tecido.",
      "4. Aplica pontos com precisão nas áreas de maior impacto visual."
    ],
    "mainTypes": [
      "Detalhamento Minimalista / Alto Contraste (Ideal para marcas e uniformes)",
      "Detalhamento Moderado (Padrão para ilustrações e desenhos infantis)",
      "Detalhamento Realista / Avançado (Para retratos, pelagens e arte sacra em grandes formatos)"
    ],
    "advantages": [
      "✔ Cria bordados nítidos, elegantes e de fácil reconhecimento visual",
      "✔ Mantém o bordado leve, confortável e flexível na peça de roupa",
      "✔ Otimiza o tempo de máquina e evita quebras repetitivas de agulha"
    ],
    "limitations": [
      "Bordados pequenos (abaixo de 5cm) exigem simplificação drástica do detalhamento para manter a legibilidade."
    ],
    "commonErrors": [
      "❌ Tentar reproduzir cada fio de cabelo ou ruga de uma foto em um bordado de bolso de 8cm.",
      "❌ Aumentar a densidade na tentativa de fazer microdetalhes aparecerem.",
      "❌ Ignorar que tecidos felpudos (toalhas) engolem e escondem pequenos detalhes."
    ],
    "voceSabia": "A técnica de simplificação inteligente é a maior virtude de um grande digitalizador: saber o que NÃO bordar é tão importante quanto saber o que bordar!",
    "curiosidadeTecnica": "Em desenhos com muitos detalhes, mudar para agulha fina 65/9 e linha de bordado Título 60 (mais fina que a convencional) permite aumentar o detalhamento em cerca de 25%.",
    "dicaArtrelados": "No bordado, simplificar não significa empobrecer! Às vezes, simplificar e limpar o desenho é justamente o segredo que permite que o bordado fique incrivelmente elegante, nítido e profissional.",
    "applications": [
      "Adaptação de fotografias para bordado, escudos complexos, caricaturas e brasões."
    ],
    "troubleshootingTips": [
      "Se os detalhes de um rosto bordado ficarem irreconhecíveis, elimine as sombras intermediárias e mantenha apenas os traços de contorno principais."
    ],
    "relatedTerms": [
      "Definição do Bordado",
      "Digitalização de Logotipo",
      "Densidade de Pontos",
      "Comprimento do Ponto"
    ],
    "tags": [
      "d-033",
      "detalhamento",
      "simplificacao",
      "escala",
      "nitidez",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do francês détailler (cortar em pedaços miúdos, examinar minuciosamente, de dé- + tailler, cortar) e do latim matrix (molde gerador).",
    "beginnerExplanation": "Detalhamento da matriz é o ajuste fino de cada minúsculo detalhe do bordado: acertar os olhos de um personagem, criar fios de cabelo finos, fazer brilhos nas folhas e garantir que tudo fique nítido sem criar uma montanha grossa de linha.",
    "practicalExercise": "Borde o rostinho de um ursinho de pelúcia: para o focinho e olhos, use uma agulha mais fina (65/9 ou 70/10) e linha título 60 para os microdetalhes pretos. Veja como os detalhes ganham uma nitidez impressionante que encanta os clientes de enxoval!",
    "quickSummary": "Detalhamento da matriz é o refinamento técnico e artístico dos microelementos do bordado para garantir nitidez, expressividade e acabamento superior.",
    "bibliographicReferences": [
      "NICOLAS, C. Micro-Detailing and High-Definition Machine Embroidery. Paris, 2022.",
      "MADEIRA. Specialty Threads (40wt vs 60wt) for Fine Lettering and Details. Freiburg, 2023.",
      "ARTRELADOS. Segredos do Detalhamento e Linhas Finas no Bordado Infantil. São Paulo, 2024."
    ]
  },
  {
    "id": "d-034-direcao-de-preenchimento",
    "code": "D-034",
    "term": "Direção de Preenchimento",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Programação de Bordado",
    "summary": "Orientação angular predominante em que os pontos são distribuídos para cobrir áreas sólidas da matriz.",
    "definition": "A direção de preenchimento é a orientação angular predominante na qual as passagens de pontos são distribuídas dentro de uma área sólida ou fechada da matriz de bordado (como em blocos de Ponto Tatami ou preenchimentos complexos). Essa escolha define para que lado as linhas seguirão (horizontal, vertical, diagonal ou curvilínea), alterando drasticamente o reflexo de luz, a textura, a rigidez e as forças de repuxamento sobre o tecido.",
    "technicalDetails": "Configurada em graus no software. Em grandes áreas de preenchimento, ângulos diagonais a 45° ou 135° são preferidos porque distribuem as forças de tração igualmente entre os fios de urdume e trama do tecido plano.",
    "construction": [
      "Linha de ângulo de preenchimento",
      "Camada de underlay posicionada a 90° de suporte",
      "Deslocamento alternado de passagens",
      "Compensação de encolhimento paralela ao ângulo"
    ],
    "howItWorks": [
      "1. O programador define o ângulo de inclinação dentro do polígono vetorial.",
      "2. O software traça as passagens de agulha paralelas a esse eixo.",
      "3. A linha de poliéster reflete a iluminação ambiente conforme a orientação das fibras.",
      "4. Dois objetos vizinhos com direções opostas criam contraste nítido de planos."
    ],
    "mainTypes": [
      "Preenchimento Diagonal (45° / 135° - Padrão universal mais estável)",
      "Preenchimento Horizontal (0° / 180°)",
      "Preenchimento Vertical (90° / 270°)",
      "Preenchimento com Direções Cruzadas (Para criar efeito de xadrez ou textura de tecido)"
    ],
    "advantages": [
      "✔ Cria contrastes visuais ricos e separação de planos com a mesma cor de linha",
      "✔ Evita deformações excessivas ao equilibrar a tração no tecido",
      "✔ Proporciona acabamento liso e homogêneo com brilho sedoso"
    ],
    "limitations": [
      "Preenchimentos extensos com pontos no mesmo sentido das tramas do tecido podem afundar e perder cobertura."
    ],
    "commonErrors": [
      "❌ Utilizar exatamente a mesma direção em todos os preenchimentos da matriz, deixando o desenho sem dinamismo.",
      "❌ Escolher a direção sem observar o sentido da forma orgânica (ex: bordar uma folha na transversal pura).",
      "❌ Alinhar o preenchimento na horizontal exata sobre malhas muito elásticas."
    ],
    "voceSabia": "Você pode bordar uma bandeira xadrez usando apenas UMA única cor de linha branca: basta programar os quadrados alternando a direção de preenchimento entre 45° e 135°!",
    "curiosidadeTecnica": "Direção de preenchimento é a orientação dos pontos de cobertura; o underlay de base deve ser sempre programado em ângulo cruzado (perpendicular ou a 60°) para criar uma grade estrutural que trava o tecido.",
    "dicaArtrelados": "Não pense na direção do ponto apenas como uma simples seta: pense nela como o 'sentido' da linha dentro do desenho! Quando você aprende a enxergar e direcionar a linha, suas matrizes ganham vida e volume!",
    "applications": [
      "Fundos de brasões, preenchimento de personagens, folhas, pétalas e áreas geométricas."
    ],
    "troubleshootingTips": [
      "Se uma área grande de preenchimento estiver repuxando o tecido para dentro, mude a direção de 0° para 45° e aumente a compensação de repuxo para 0.35mm."
    ],
    "relatedTerms": [
      "Direção do Ponto",
      "Ponto de Preenchimento",
      "Densidade de Pontos",
      "Underlay"
    ],
    "tags": [
      "d-034",
      "direcao de preenchimento",
      "tatami",
      "angulos",
      "textura",
      "brilho",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim directio (direção) e do latim vulgar implere (encher, completar um espaço vazio).",
    "beginnerExplanation": "Direção de preenchimento é o ângulo em que os pontos correm dentro de uma área grande (como um círculo, um coração ou uma letra grande). Mudar esse ângulo ajuda a evitar que o tecido encolha e dá vida e movimento ao desenho.",
    "practicalExercise": "Em um coração dividido ao meio por uma linha central, preencha o lado esquerdo com pontos a 45° e o lado direito com pontos a 135°. Borde em tecido vermelho: veja como o coração parece ter duas metades tridimensionais que se encontram no meio pelo jogo de luz!",
    "quickSummary": "Direção de preenchimento é a inclinação angular aplicada aos pontos de cobertura de grandes áreas para otimizar estabilidade e reflexão de luz.",
    "bibliographicReferences": [
      "WILCOM. Fill Stitch Directions and Fabric Stress Management. Sydney, 2022.",
      "KRAUSZ, P. Fill Stitch Engineering and Directional Aesthetics. New York, 2021.",
      "ARTRELADOS. Ângulos de Preenchimento: Equilíbrio Têxtil e Estética Visual. São Paulo, 2024."
    ]
  },
  {
    "id": "d-035-distancia-de-salto",
    "code": "D-035",
    "term": "Distância de Salto (Jump Distance)",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Programação de Bordado",
    "summary": "Espaço percorrido pelo bastidor entre dois pontos sem formação de costura naquele trecho.",
    "definition": "A distância de salto (Jump Distance) é o espaço percorrido pela máquina entre dois pontos ou regiões do bordado durante um movimento de salto, sem realizar costura contínua naquele trecho. De maneira simples: é a distância que a agulha precisa 'atravessar' quando sai de onde terminou um objeto e vai até onde começará o próximo.",
    "technicalDetails": "Nos softwares e máquinas, existe um parâmetro limite de corte automático (geralmente calibrado entre 2.0mm e 5.0mm). Saltos menores que esse valor são realizados em movimento contínuo (deixando fio esticado para limpeza); saltos maiores acionam o comando mecânico de arremate e corte de linha.",
    "construction": [
      "Vetor de deslocamento livre do pantógrafo",
      "Ponto de partida (saída do objeto anterior)",
      "Ponto de chegada (entrada do próximo objeto)",
      "Comutação entre salto livre e corte automático"
    ],
    "howItWorks": [
      "1. A máquina conclui um objeto no ponto de saída.",
      "2. Avalia se a distância até o próximo objeto ultrapassa o limite de corte configurado.",
      "3. Se for menor: a agulha sobe e o bastidor se desloca diretamente deixando o fio esticado.",
      "4. Se for maior: a máquina aciona o cortador, arremata e desloca-se com a linha cortada."
    ],
    "mainTypes": [
      "Salto Curto com Conexão (1mm a 3mm - Não exige corte)",
      "Salto Longo com Corte Automático (Acima de 4mm a 7mm)",
      "Salto Oculto / Ponto de Viagem (Caminho costurado por baixo de outros objetos)"
    ],
    "advantages": [
      "✔ Saltos curtos bem planejados eliminam cortes desnecessários e aceleram a produção",
      "✔ Otimiza o movimento cinemático do pantógrafo",
      "✔ Evita o desgaste prematuro da navalha de corte da máquina"
    ],
    "limitations": [
      "Saltos longos deixados sem corte sobre tecidos claros geram fios visíveis que podem ser repuxados durante o uso se não forem aparados."
    ],
    "commonErrors": [
      "❌ Confundir distância de salto com distância entre pontos normais de costura.",
      "❌ Tentar eliminar absolutamente todos os saltos ou colocar corte em qualquer distância de 2mm.",
      "❌ Ignorar saltos longos que cruzam áreas abertas do bordado."
    ],
    "voceSabia": "Cada comando de corte automático de linha em uma máquina industrial leva de 2 a 4 segundos: em uma matriz com 50 cortes desnecessários, você perde mais de 3 minutos por peça apenas cortando linha!",
    "curiosidadeTecnica": "Ao simular a matriz no software, ative a visualização de 'Linhas de Conexão' (Connectors / Jump Lines) para enxergar todos os saltos em linhas pontilhadas vermelhas ou pretas.",
    "dicaArtrelados": "Um bom bordado não depende apenas dos pontos que aparecem no tecido, mas também dos caminhos que a máquina percorre entre eles! Procure saltos longos na simulação como quem procura estradas desnecessárias em um mapa: se puder encurtar a rota, seu bordado ficará mais limpo e muito mais rápido!",
    "applications": [
      "Otimização de sequências de letras, separação de brasões, monogramas e produção em série."
    ],
    "troubleshootingTips": [
      "Se as letras estiverem conectadas por fios feios que você precisa cortar na tesourinha, reduza o valor do 'Comprimento de Salto para Corte' no software para 2.0mm."
    ],
    "relatedTerms": [
      "Ponto de Entrada",
      "Ponto de Saída",
      "Corte de Linha",
      "Sequência de Pontos"
    ],
    "tags": [
      "d-035",
      "distancia de salto",
      "jump distance",
      "corte",
      "otimizacao",
      "pantografo",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim distantia (afastamento) e do germânico salti (salto, pulo mecânico sem perfuração de agulha). Comando mecânico primário dos formatos industriais de bordado.",
    "beginnerExplanation": "Distância de salto é a distância que o bastidor percorre de um ponto a outro sem a agulha costurar (quando a máquina pula de uma letra para a próxima). Se o pulo for maior que a distância configurada, a máquina aciona o cortador de linha automático.",
    "practicalExercise": "No painel da sua máquina ou no software, verifique o ajuste de corte por salto (geralmente regulado em 2.0mm a 5.0mm). Borde uma frase com letras cursivas: veja como nos saltos pequenos ela passa direto e nos saltos maiores ela corta a linha automaticamente.",
    "quickSummary": "Distância de salto é o deslocamento do bastidor entre objetos sem perfurações, gatilho para o acionamento do cortador de linha automático.",
    "bibliographicReferences": [
      "TAJIMA. Trimming Mechanisms and Jump Length Parameters. Nagoya, 2022.",
      "BROTHER. Jump Stitch Length and Automatic Thread Trimming. Nagoya, 2023.",
      "ARTRELADOS. Como Configurar Saltos e Eliminar Fiados de Linha na Produção. São Paulo, 2024."
    ]
  },
  {
    "id": "d-036-diagrama-de-pontos",
    "code": "D-036",
    "term": "Diagrama de Pontos",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal masculina.",
    "category": "Softwares & Formatos",
    "summary": "Representação gráfica ou esquemática que permite visualizar a estrutura interna, trajetórias e ordem dos pontos da matriz.",
    "definition": "O diagrama de pontos é a representação gráfica e estrutural utilizada para visualizar, analisar e compreender a organização de cada ponto individual que compõe uma matriz de bordado. Enquanto a imagem simulada na tela mostra como o bordado deverá parecer, o diagrama de pontos revela a sua 'planta baixa': a posição de cada furo de agulha, as trajetórias de deslocamento, a sequência de objetos e os pontos de entrada e saída.",
    "technicalDetails": "Visualizado nos softwares ao desativar o modo 3D / TrueView e ativar a visualização em grade com nós de ponto (Needle Points / Wireframe Mode), permitindo leitura técnica de penetrações e trajetórias de viagem.",
    "construction": [
      "Marcação de pontos de penetração da agulha",
      "Linhas vetoriais de conexão de trajeto",
      "Numeração cronológica de objetos e cores",
      "Indicadores visuais de paradas e cortes"
    ],
    "howItWorks": [
      "1. O operador abre a matriz no software e desativa a visualização de linha realista (3D).",
      "2. O diagrama expõe a malha real de pontos e a densidade de furos.",
      "3. Utiliza-se a barra de reprodução (Stitch Player) para simular a costura passo a passo.",
      "4. Identificam-se pontos sobrepostos desnecessários ou falhas de percurso."
    ],
    "mainTypes": [
      "Visualização em Aramado / Wireframe (Mostra contornos e linhas de direção)",
      "Visualização Ponto a Ponto com Nós (Destaca cada furo de agulha)",
      "Diagrama de Ordem de Produção (Ficha técnica impressa com dados e cores)"
    ],
    "advantages": [
      "✔ Permite enxergar a verdadeira estrutura interna do bordado além da ilusão da tela",
      "✔ Facilita o diagnóstico prévio de pontos acumulados perigosos para a agulha",
      "✔ Excelente ferramenta pedagógica para aprender a 'ler' matrizes de bordado"
    ],
    "limitations": [
      "A representação visual dos símbolos e cores varia de acordo com cada software de bordado."
    ],
    "commonErrors": [
      "❌ Olhar apenas para a imagem 3D simulada e nunca inspecionar o diagrama de pontos.",
      "❌ Confundir o diagrama com o arquivo final da máquina.",
      "❌ Não realizar a simulação virtual passo a passo antes de carregar o arquivo na máquina."
    ],
    "voceSabia": "A imagem 3D do software é como a foto de uma casa pronta; o diagrama de pontos é a planta baixa arquitetônica com todas as vigas e encanamentos!",
    "curiosidadeTecnica": "Ao observar o diagrama de pontos, densidades muito altas aparecem como manchas escuras e sólidas de furos de agulha concentrados.",
    "dicaArtrelados": "Não olhe uma matriz apenas como uma imagem: aprenda a enxergá-la como um caminho feito de pontos! Quando você começa a observar onde começa → por onde passa → onde termina → para onde vai depois, você passa a entender como a máquina pensa!",
    "applications": [
      "Revisão técnica de arquivos, auditoria de matrizes compradas na internet e controle de qualidade."
    ],
    "troubleshootingTips": [
      "Use o reprodutor de pontos (Stitch Player) na velocidade máxima para conferir se a ordem de bordado está lógica antes de colocar a linha na máquina."
    ],
    "relatedTerms": [
      "Sequência de Pontos",
      "Ponto de Entrada",
      "Ponto de Saída",
      "Digitalização de Bordado"
    ],
    "tags": [
      "d-036",
      "diagrama de pontos",
      "wireframe",
      "estrutura",
      "leitura de matriz",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do grego diagramma (figura desenhada, esquema gráfico composto por linhas, de diagraphein, marcar com linhas) e de punctum (ponto).",
    "beginnerExplanation": "Diagrama de pontos é o mapa técnico do bordado na tela do computador: você consegue ver cada furinho de agulha, as linhas de costura por baixo (underlay) e até onde a máquina vai pular ou cortar a linha antes de colocar o tecido no bastidor.",
    "practicalExercise": "Abra uma matriz no software e ative a visualização em 'Modo Pontos' ou 'Modo 1:1' (desativando o efeito 3D realista TrueView). Use a barra de rolagem da simulação para ver a agulha descendo ponto por ponto: analise como as camadas de baixo são construídas antes das camadas de cima!",
    "quickSummary": "Diagrama de pontos é a visualização analítica e esquemática de todas as penetrações de agulha e comandos mecânicos da matriz.",
    "bibliographicReferences": [
      "WILCOM. Stitch View, Needle Points and Sequence Inspection. Sydney, 2022.",
      "TAJIMA. DGML Stitch Editing and Sequence Diagram. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. Como Ler e Auditar o Diagrama de Pontos de uma Matriz. São Paulo, 2024."
    ]
  },
  {
    "id": "d-037-dimensao-da-matriz",
    "code": "D-037",
    "term": "Dimensão da Matriz",
    "level": "Fundamental 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Terminologia Geral",
    "summary": "Medidas físicas reais de largura e altura que o desenho ocupará no tecido quando bordado.",
    "definition": "A dimensão da matriz corresponde às medidas físicas que indicam o espaço que o desenho bordado ocupará no tecido, expressas em largura e altura (normalmente em milímetros ou centímetros, como 100 x 80 mm ou 10 x 8 cm). É fundamental compreender que a dimensão da matriz representa o tamanho real do bordado, que deve ser totalmente compatível com a área útil do bastidor e o espaço disponível na peça física.",
    "technicalDetails": "Diferencia-se do tamanho em Kilobytes do arquivo digital. O redimensionamento de uma matriz em mais de 10% a 15% exige recálculo automático de pontos pelo software para não comprometer a densidade original.",
    "construction": [
      "Largura física horizontal (X em mm)",
      "Altura física vertical (Y em mm)",
      "Área delimitadora retangular (Bounding Box)",
      "Área efetiva de cobertura por pontos"
    ],
    "howItWorks": [
      "1. A bordadeira confere as medidas em milímetros no painel ou software.",
      "2. Mede com uma fita métrica o local exato da peça (ex: bolso, toalha, peito).",
      "3. Seleciona o bastidor adequado garantindo a folga da distância de segurança."
    ],
    "mainTypes": [
      "Dimensão Nominal (Medida externa máxima de largura x altura)",
      "Área Efetiva de Bordado (Superfície real coberta pelos pontos)",
      "Dimensão Proporcional Redimensionada"
    ],
    "advantages": [
      "✔ Garante o enquadramento perfeito do bordado na peça sem erros de proporção",
      "✔ Assegura a compatibilidade imediata com os bastidores disponíveis no ateliê",
      "✔ Permite planejar a compra correta de entretelas e o consumo de materiais"
    ],
    "limitations": [
      "Aumentar ou diminuir drasticamente as dimensões sem um software que recalcule pontos deforma a densidade e quebra a matriz."
    ],
    "commonErrors": [
      "❌ Confundir a dimensão da matriz com o tamanho nominal do bastidor.",
      "❌ Dobrar o tamanho da matriz sem verificar se os pontos ficaram espaçados demais e ralos.",
      "❌ Reduzir uma matriz para menos da metade fazendo letras e detalhes virarem bolhas duras de linha."
    ],
    "voceSabia": "Duas matrizes com exatamente a mesma dimensão de 10x10cm podem ter 5.000 pontos (se for um traço leve) ou 25.000 pontos (se for um brasão totalmente preenchido em tatami)!",
    "curiosidadeTecnica": "A área retangular (largura x altura) raramente é 100% preenchida: a maioria dos desenhos possui formas irregulares que cobrem apenas 40% a 60% da área do retângulo envolvente.",
    "dicaArtrelados": "Antes de bordar, meça duas vezes: a matriz e o espaço disponível na peça! Pense sempre no trio: 1. Tamanho da matriz; 2. Capacidade do bastidor; 3. Espaço disponível na peça. Quando os três estão em harmonia, seu trabalho começa com total segurança!",
    "applications": [
      "Enquadramento de matrizes, escolha de bastidores, personalização de toalhas e camisas."
    ],
    "troubleshootingTips": [
      "Se precisar mudar o tamanho de uma matriz pronta em mais de 20%, solicite ao digitalizador que gere uma nova versão recalculada para a nova escala."
    ],
    "relatedTerms": [
      "Área Útil do Bastidor",
      "Bastidor",
      "Densidade de Pontos",
      "Distância de Segurança"
    ],
    "tags": [
      "d-037",
      "dimensao da matriz",
      "largura altura",
      "tamanho",
      "bastidor",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim dimensio, -onis (ação de medir, extensão mensurável, de dimetiri) e de matrix (molde gerador).",
    "beginnerExplanation": "Dimensão da matriz é a altura e a largura exatas do desenho em milímetros ou centímetros (por exemplo: 10cm x 10cm). É importantíssimo conferir a dimensão para ter certeza de que o desenho vai caber dentro do seu bastidor e no peito da camiseta!",
    "practicalExercise": "Antes de enviar um arquivo para a máquina, meça a área útil do bolso ou do peito da peça com uma fita métrica. Compare com a dimensão informada no painel da máquina: certifique-se de que o desenho deixa pelo menos 15mm de folga livre em todos os lados.",
    "quickSummary": "Dimensão da matriz é a medida física real (largura e altura) do projeto de bordado, essencial para enquadramento no bastidor e proporção na peça.",
    "bibliographicReferences": [
      "BROTHER. Embroidery Field Limits and Hoop Dimension Chart. Nagoya, 2022.",
      "JANOME. Hoop Sizing and Design Scaling Precautions. Tokyo, 2023.",
      "ARTRELADOS. Guia de Dimensões Padrão para Cada Tipo de Peça e Bastidor. São Paulo, 2024."
    ]
  },
  {
    "id": "d-038-densidade-de-linha",
    "code": "D-038",
    "term": "Densidade de Linha",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal formada por substantivo feminino e locução adjetiva.",
    "category": "Agulhas & Fios",
    "summary": "Concentração e volume de passagens de linha produzidas pelos pontos sobre a superfície do tecido.",
    "definition": "A densidade de linha refere-se ao grau de concentração de linha produzido pelos pontos de bordado em determinada área da matriz. Quanto mais próximas e numerosas forem as passagens de linha em uma região, maior será a densidade e o volume de cobertura sobre o tecido. A densidade de linha depende do espaçamento entre pontos, da espessura do fio utilizado, do tipo de ponto e da quantidade de camadas superpostas.",
    "technicalDetails": "Interage diretamente com o Título da linha (ex: Título 40 de 120D/2 vs Título 60 de 75D/2). Linhas mais espessas proporcionam maior cobertura visual com menor número de passagens, enquanto fios mais finos exigem passagens mais próximas para evitar transparência.",
    "construction": [
      "Espaçamento entre passagens lineares",
      "Calibre e espessura do fio de poliéster/rayon",
      "Número de camadas sobrepostas",
      "Estrutura do substrato têxtil"
    ],
    "howItWorks": [
      "1. A agulha deposita passagens de linha paralelas sobre o tecido.",
      "2. O diâmetro do fio preenche o espaço entre as penetrações vizinhas.",
      "3. O equilíbrio entre espessura da linha e espaçamento gera uma superfície lisa e fechada."
    ],
    "mainTypes": [
      "Densidade de Linha Padrão (Para linha Título 40 tradicional)",
      "Densidade para Linhas Especiais / Metálicas (Espaçamento ligeiramente mais aberto para acomodar o fio Lurex)",
      "Densidade para Linha Fina Título 60 (Espaçamento mais fechado para microletras)"
    ],
    "advantages": [
      "✔ Garante cobertura opaca e cores intensas da linha",
      "✔ Permite dosar o relevo e o toque táctil do bordado na peça",
      "✔ Evita desperdício de metros de linha em matrizes comerciais"
    ],
    "limitations": [
      "Concentração excessiva de linha provoca rigidez, calor por atrito na agulha e enrugamento do tecido."
    ],
    "commonErrors": [
      "❌ Supor que 'quanto mais cheio de linha, melhor a qualidade'.",
      "❌ Usar a mesma configuração de espaçamento ao trocar de linha comum 40 para linha metálica ou linha fina 60.",
      "❌ Ignorar a espessura da linha ao avaliar a cobertura de uma matriz."
    ],
    "voceSabia": "As linhas metálicas (ouro e prata) são mais grossas e rígidas que as linhas normais de poliéster: por isso, a densidade de linha deve ser aberta em cerca de 10% a 15% para a máquina bordar macio e sem arrebentar!",
    "curiosidadeTecnica": "A fórmula de cobertura perfeita estabelece que o espaçamento entre linhas deve ser rigorosamente igual ao diâmetro físico do fio comprimido pelo pé-calcador.",
    "dicaArtrelados": "Densidade não é uma corrida para colocar o máximo de linha possível: é uma busca pelo equilíbrio! Uma boa matriz coloca a quantidade certa de linha no lugar certo, respeitando o tecido e a linha. Quando o bordado está duro ou repuxando, colocar mais linha nunca é a solução!",
    "applications": [
      "Calibração de linhas comuns, metálicas, fluorescentes e fios finos para microbordados."
    ],
    "troubleshootingTips": [
      "Se a linha metálica estiver desfiando e quebrando no cabeçote, abra a densidade de linha em 0.05mm e diminua a velocidade para 600 PPM."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Linha de Bordado",
      "Espaçamento entre Pontos",
      "Ajuste de Densidade"
    ],
    "tags": [
      "d-038",
      "densidade de linha",
      "fios",
      "espessura",
      "cobertura",
      "poliester",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim densitas (densidade, espessura) e de linea (fio de linho, linha). Conceito têxtil que relaciona a espessura física do fio ao espaçamento da matriz.",
    "beginnerExplanation": "Densidade de linha é a relação entre a grossura do fio de bordado (como a linha 120/2 comum ou a linha 60 mais fininha) e a quantidade de pontos da matriz. Uma linha fininha exige pontos mais juntinhos para cobrir bem; uma linha grossa pede pontos mais afastados para não encavalar.",
    "practicalExercise": "Pegue um cone de linha título 40 tradicional e um cone de linha título 60 extrafina. Borde a mesma matriz em ponto Tatami com os dois cones lado a lado no mesmo tecido: veja como a linha 60 deixa transparecer o tecido (exigindo mais densidade), enquanto a linha 40 cobre perfeitamente.",
    "quickSummary": "Densidade de linha é a calibração do espaçamento de pontos em consonância com a espessura e título do fio de bordado utilizado.",
    "bibliographicReferences": [
      "MADEIRA. Thread Weights (40, 60, 75) and Corresponding Stitch Density. Freiburg, 2023.",
      "GUNOLD. Technical Guide to Specialty Threads & Density Setup. Stockstadt, 2022.",
      "ARTRELADOS. Escolha de Linhas Especiais e Calibração de Densidade. São Paulo, 2024."
    ]
  },
  {
    "id": "d-039-deteccao-de-cores",
    "code": "D-039",
    "term": "Detecção de Cores",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Softwares & Formatos",
    "summary": "Recurso do software para identificar, agrupar e separar áreas cromáticas de uma imagem durante a preparação.",
    "definition": "A detecção de cores é o processo pelo qual um software de bordado identifica e analisa as diferentes tonalidades presentes em uma imagem gráfica e utiliza essas informações para separar regiões, agrupar cores semelhantes (redução de cores) e gerar propostas de objetos de bordado. É uma etapa preliminar fundamental na digitalização assistida e automática.",
    "technicalDetails": "Analisa os valores RGB dos pixels. Em imagens com compressão JPG ou degradês suaves, o algoritmo pode detectar centenas de variações de uma mesma cor devido ao antialiasing, exigindo redução prévia para uma paleta controlada de 3 a 8 cores de linha.",
    "construction": [
      "Algoritmo de leitura RGB / CMYK",
      "Tabela de redução de cores (Color Reduction Table)",
      "Agrupamento por tolerância cromática",
      "Mapeamento com catálogos de linhas de bordado"
    ],
    "howItWorks": [
      "1. A imagem é importada e o software analisa a quantidade de cores nos pixels.",
      "2. O usuário define o número máximo de cores reais de linha desejadas.",
      "3. O software agrupa tons vizinhos e delimita os contornos de cada bloco de cor.",
      "4. Cada bloco de cor vira um objeto ou parada de troca de linha na máquina."
    ],
    "mainTypes": [
      "Detecção Automática por Tolerância (Varredura de pixels)",
      "Redução Manual de Cores (Agrupamento orientado pelo usuário)",
      "Mapeamento Automático com Paletas de Linhas Comerciais (Madeira, Isacord, Lumina, etc.)"
    ],
    "advantages": [
      "✔ Agiliza imensamente a separação de camadas em desenhos multicoloridos",
      "✔ Elimina pequenas variações de ruído e sombras indesejadas de fotos",
      "✔ Associa as cores da tela aos códigos reais de cones de linha disponíveis no ateliê"
    ],
    "limitations": [
      "A detecção automática de cores não substitui o planejamento da sequência de trocas de cor pelo digitalizador."
    ],
    "commonErrors": [
      "❌ Deixar o software detectar 30 variações de azul para uma imagem simples, gerando 30 trocas de linha na máquina.",
      "❌ Confundir a cor mostrada no monitor com a tonalidade física exata do cone de linha.",
      "❌ Ignorar a ordem e sequência das trocas de cor, fazendo a máquina trocar para a mesma linha várias vezes."
    ],
    "voceSabia": "Uma foto de maçã pode conter mais de 2.000 tons diferentes de vermelho na tela do computador, mas para bordar com perfeição no ateliê você precisa apenas de 2 ou 3 tons de linha bem escolhidos!",
    "curiosidadeTecnica": "Quantidade de cores não é o mesmo que quantidade de trocas de linha: uma matriz com 3 cores pode exigir 8 trocas de linha se a sequência de objetos for mal planejada!",
    "dicaArtrelados": "No bordado eletrônico, nem toda cor que existe na imagem precisa virar um cone de linha! Antes de aceitar a detecção automática, pergunte: 'Quais cores realmente são necessárias para reconhecer o desenho?' O segredo é simplificar com inteligência!",
    "applications": [
      "Preparação de logos, separação de matrizes infantis multicoloridas e conversão de ilustrações."
    ],
    "troubleshootingTips": [
      "Se a matriz estiver exigindo muitas trocas de linha desnecessárias, use a ferramenta de 'Reordenar por Cores' (Color Sort) no software para agrupar todas as partes da mesma cor."
    ],
    "relatedTerms": [
      "Digitalização Automática",
      "Matriz de Bordado",
      "Cores de Linha",
      "Sequência de Pontos"
    ],
    "tags": [
      "d-039",
      "deteccao de cores",
      "reducao de cores",
      "paleta",
      "troca de linha",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim detectio, -onis (ação de descobrir, desvendar, de detegere, tirar o teto/revelar) e do latim color, -oris (cor, matiz óptico).",
    "beginnerExplanation": "Detecção de cores é a ferramenta do software que lê uma imagem e separa automaticamente quais são as cores presentes nela. Ajuda a definir a ordem de troca de linha na máquina sem que você precise adivinhar as cores uma a uma.",
    "practicalExercise": "Importe uma imagem com 4 cores bem contrastantes para o seu software. Use a ferramenta de redução e detecção de cores para limitar a paleta exatamente a 4 cores: repare como o programa remove automaticamente pequenas manchas e ruídos de tons intermediários.",
    "quickSummary": "Detecção de cores é o recurso computacional de identificação e separação cromática de elementos visuais para estruturação das paradas de máquina.",
    "bibliographicReferences": [
      "WILCOM. Color Palette Reduction & Automatic Color Classification. Sydney, 2022.",
      "BERNINA. Managing Thread Charts and Automatic Color Separation. Steckborn, 2023.",
      "ARTRELADOS. Como Padronizar Paletas de Cores de Linhas Nacionais no Software. São Paulo, 2024."
    ]
  },
  {
    "id": "d-040-distorcao-do-bordado",
    "code": "D-040",
    "term": "Distorção do Bordado",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal feminina.",
    "category": "Solução de Problemas",
    "summary": "Alteração de forma, proporção ou alinhamento observada no tecido em relação ao desenho original previsto na matriz.",
    "definition": "A distorção do bordado ocorre quando o desenho executado no tecido apresenta forma, proporções ou encaixes diferentes daqueles visualizados no computador (por exemplo: um círculo que vira uma elipse oval, letras inclinadas ou vãos entre o fundo e o contorno). A distorção resulta do combate físico entre a tração da linha, a estabilidade da entretela, o bastidoramento e a elasticidade natural do tecido.",
    "technicalDetails": "Relaciona-se com o efeito mecânico Push & Pull: os pontos puxam o tecido no sentido do ângulo da linha (Pull) e expandem as laterais perpendiculares (Push). Quando a estabilização é insuficiente, a distorção torna-se visível.",
    "construction": [
      "Tração de encolhimento no sentido dos pontos",
      "Expansão nas bordas perpendiculares",
      "Deformação por tensão desbalanceada",
      "Movimentação do tecido dentro do aro do bastidor"
    ],
    "howItWorks": [
      "1. A agulha perfura o tecido e a linha exerce tração ao travar o nó.",
      "2. Milhares de pontos acumulam força puxando as fibras têxteis para o centro.",
      "3. Se a entretela não segurar o tecido ou o bastidor estiver frouxo, a forma geométrica se deforma.",
      "4. Ao sair do bastidor, o tecido relaxa evidenciando a distorção."
    ],
    "mainTypes": [
      "Distorção por Repuxamento (Encolhimento paralelo ao ponto)",
      "Distorção por Bastidoramento Excessivo (Tecido esticado artificialmente no aro)",
      "Distorção por Deslocamento de Registro (Contorno fora do preenchimento)"
    ],
    "advantages": [
      "✔ Compreender a distorção permite aplicar compensações precisas na digitalização"
    ],
    "limitations": [
      "Tentar corrigir distorções apenas aumentando a densidade piora a deformação."
    ],
    "commonErrors": [
      "❌ Culpar imediatamente a matriz quando o problema foi o tecido frouxo no bastidor.",
      "❌ Esticar o tecido com força excessiva ao montar o bastidor (como uma pele de tambor esticada demais).",
      "❌ Bordar malhas elásticas usando entretela rasga-fácil em vez de entretela recorta-fácil."
    ],
    "voceSabia": "Se você esticar demais uma camiseta de malha ao fechar o bastidor, ela parecerá linda enquanto estiver presa; mas assim que você abrir o aro, a malha encolherá de volta e o bordado ficará totalmente enrugado!",
    "curiosidadeTecnica": "Distorção refere-se à perda de proporção em relação ao projeto original; deformação refere-se à alteração física e estrutural do tecido durante as forças de costura.",
    "dicaArtrelados": "Quando o bordado se distorcer, não procure um culpado: procure a causa! Compare a matriz com o bordado pronto e veja onde a forma começou a mudar. Lembre-se da regra de ouro: a matriz é criada na tela, mas o bordado acontece no tecido! Observe sempre os dois!",
    "applications": [
      "Diagnóstico e correção de matrizes com problemas de encaixe, formas ovais e repuxamento."
    ],
    "troubleshootingTips": [
      "Se formas circulares estiverem saindo ovais, aumente a Compensação de Repuxo (Pull Compensation) no software para 0.40mm e use entretela mais encorpada."
    ],
    "relatedTerms": [
      "Deformação do Bordado",
      "Compensação de Puxão",
      "Bastidoramento",
      "Estabilizador"
    ],
    "tags": [
      "d-040",
      "distorcao",
      "repuxamento",
      "deformacao",
      "bastidor",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim distortio, -onis (ação de torcer, deformar a forma original, de distorquere, torcer para os lados) e do árabe al-burdā (bordado).",
    "beginnerExplanation": "Distorção do bordado é quando o desenho sai deformado no tecido: um círculo perfeito que vira um ovo achatado, um quadrado que vira losango ou contornos que saem fora da figura. Isso acontece porque a linha puxa o tecido enquanto costura!",
    "practicalExercise": "Borde um círculo perfeito de 5cm em uma malha com entretela fraca e frouxa no bastidor. Ao tirar da máquina, meça o círculo na vertical e na horizontal com uma régua: veja como ele ficou menor no sentido dos pontos (encolheu) e maior no sentido oposto (esticou). Esse é o efeito clássico de distorção!",
    "quickSummary": "Distorção do bordado é a alteração geométrica indesejada da forma original causada pelas forças de repuxamento e compressão da linha sobre o tecido.",
    "bibliographicReferences": [
      "KRAUSZ, P. Push and Pull Dynamics in Machine Embroidery. New York: Textile Press, 2021.",
      "TAJIMA. Fabric Distortion Control and Mechanical Stability. Nagoya, 2022.",
      "ARTRELADOS. Guia Definitivo contra Deformações e Repuxo no Bordado. São Paulo, 2024."
    ]
  },
  {
    "id": "d-041-definicao-do-bordado",
    "code": "D-041",
    "term": "Definição do Bordado",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal feminina.",
    "category": "Qualidade do Bordado",
    "summary": "Grau de nitidez, clareza e precisão com que contornos, letras e detalhes da matriz são reproduzidos no tecido.",
    "definition": "A definição do bordado é a qualidade com que os elementos de uma matriz são reproduzidos fisicamente no tecido, permitindo que contornos, letras, detalhes finos, curvas e formas sejam percebidos com clareza, nitidez e organização. Um bordado com excelente definição mantém a identidade da arte, preserva os espaços internos vazios e apresenta bordas limpas e bem delimitadas.",
    "technicalDetails": "Resultado da harmonia entre a digitalização precisa, escolha do tipo de ponto correto (Satin para traços finos vs Tatami para áreas largas), comprimento de ponto equilibrado, underlay adequado, espessura da linha e estabilidade do tecido.",
    "construction": [
      "Bordas de contorno nítidas e cravadas",
      "Espaços internos de letras preservados (vãos do 'A', 'O', 'e')",
      "Comprimento de ponto proporcional às curvas",
      "Camada de underlay que sustenta o topo"
    ],
    "howItWorks": [
      "1. O digitalizador projeta os objetos com largura mínima segura (mínimo 1.0mm para Satin).",
      "2. A agulha perfura o tecido com alinhamento preciso sem mastigar os fios.",
      "3. O ponto de cobertura assenta perfeitamente sobre a base de underlay.",
      "4. O desenho final apresenta leitura imediata e visual de alto padrão."
    ],
    "mainTypes": [
      "Definição de Tipografia e Letras (Legibilidade total de monogramas)",
      "Definição de Contornos (Encaixe milimétrico de bordas)",
      "Definição em Tecidos Texturizados (Com uso de filme solúvel superior)"
    ],
    "advantages": [
      "✔ Agrega altíssimo valor percebido e padrão profissional ao produto final",
      "✔ Garante a satisfação imediata de clientes exigentes e marcas corporativas",
      "✔ Mantém o bordado impecável mesmo após dezenas de lavagens"
    ],
    "limitations": [
      "Tecidos com textura grossa (piquê pesado, toalhas felpudas) exigem filme plástico hidrossolúvel por cima para não engolir a definição dos pontos."
    ],
    "commonErrors": [
      "❌ Achar que para deixar o bordado mais definido basta aumentar a densidade (o excesso esconde os detalhes).",
      "❌ Bordar letras minúsculas em ponto Tatami em vez de ponto Satin.",
      "❌ Tentar manter todos os microdetalhes de uma arte complexa em tamanhos reduzidos."
    ],
    "voceSabia": "Em uma pequena letra 'A' bordada, colocar pontos demais fecha o triângulo central da letra, fazendo com que ela perca totalmente a definição e vire uma mancha sólida!",
    "curiosidadeTecnica": "A definição de um bordado é análoga à resolução óptica: enquanto na tela do computador ela depende de pixels, no tecido ela depende da relação entre o calibre da agulha, o diâmetro da linha e a trama do tecido.",
    "dicaArtrelados": "Definição não é colocar mais pontos: é fazer com que cada ponto trabalhe a favor do desenho! Quando um detalhe estiver pequeno demais para funcionar, simplifique. O melhor detalhe é aquele que continua perfeitamente visível depois que o bordado sai da tela e chega ao tecido!",
    "applications": [
      "Controle de qualidade de monogramas, jalecos, crachás bordados e peças de enxoval fino."
    ],
    "troubleshootingTips": [
      "Em toalhas de banho e veludo, use sempre uma folha de plástico hidrossolúvel por cima do tecido para que os pontos não afundem na felpa, garantindo 100% de definição."
    ],
    "relatedTerms": [
      "Detalhamento da Matriz",
      "Ponto Satin",
      "Densidade de Pontos",
      "Underlay"
    ],
    "tags": [
      "d-041",
      "definicao",
      "nitidez",
      "clareza",
      "legibilidade",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim definitio, -onis (delimitação precisa de contornos, de definire, estabelecer os limites de algo, de finis, fronteira/limite).",
    "beginnerExplanation": "Definição do bordado é o grau de nitidez, clareza e limpeza visual do bordado pronto: letras que você consegue ler de longe sem esforço, bicos de estrelas afiados e contornos perfeitamente alinhados sem fiapos soltos.",
    "practicalExercise": "Borde a mesma palavra com letras de 6mm em duas situações: 1) com agulha 75/11 gasta e tensão frouxa; 2) com agulha 70/10 nova ponta fina, linha de qualidade e entretela firme. Coloque as duas peças lado a lado e compare a nitidez das letras: essa é a diferença de uma alta definição!",
    "quickSummary": "Definição do bordado é o padrão de nitidez, precisão de contornos e legibilidade dos detalhes alcançado na peça executada.",
    "bibliographicReferences": [
      "SCHMETZ. Needle Sharpness and Edge Definition in Automated Stitching. Germany, 2022.",
      "MADEIRA. Achieving Crisp Lettering and High Definition in Embroidery. Freiburg, 2023.",
      "ARTRELADOS. Como Atingir Nitidez Máxima em Nomes e Detalhes Pequenos. São Paulo, 2024."
    ]
  },
  {
    "id": "d-042-deformacao-do-bordado",
    "code": "D-042",
    "term": "Deformação do Bordado",
    "level": "Intermediário 🟡",
    "grammarClass": "Locução nominal feminina.",
    "category": "Solução de Problemas",
    "summary": "Alteração física e estrutural do tecido ou do desenho causada pelas forças dinâmicas da costura.",
    "definition": "A deformação do bordado ocorre quando o desenho executado no tecido perde, total ou parcialmente, sua forma, estabilidade ou proporções originais devido à reação física das fibras têxteis durante a costura. Isso acontece quando as forças de tração exercidas pela linha e pelo impacto da agulha superam a capacidade de sustentação do tecido e da entretela, gerando franzimento, ondulações e repuxamento.",
    "technicalDetails": "Diferencia-se da distorção puramente geométrica por focar na alteração física e mecânica do substrato têxtil (rugas, ondas, enrugamento ao redor do aro e encolhimento pós-bastidor).",
    "construction": [
      "Força de tração acumulada nas fibras",
      "Fadiga mecânica do tecido por perfurações sucessivas",
      "Instabilidade de entretelamento",
      "Tensão desbalanceada entre linha superior e inferior"
    ],
    "howItWorks": [
      "1. A máquina executa milhares de perfurações com linha tracionada.",
      "2. O tecido flexível é puxado em direção ao centro do bordado.",
      "3. Se a entretela for fraca ou o bastidoramento inadequado, formam-se ondas e rugas.",
      "4. Ao retirar o bastidor, o tecido relaxa de forma irregular mantendo a deformação."
    ],
    "mainTypes": [
      "Deformação por Elasticidade (Comum em tecidos com elastano / malhas)",
      "Deformação por Densidade Excessiva (Tecido endurecido e empurrado)",
      "Deformação Pós-Bastidor (Surge logo após soltar a peça do aro)"
    ],
    "advantages": [
      "✔ Identificar a mecânica da deformação orienta a escolha correta do conjunto entretela + bastidor"
    ],
    "limitations": [
      "Deformações graves com ruptura de fibras têxteis são permanentes e irrecuperáveis na peça."
    ],
    "commonErrors": [
      "❌ Esticar a malha ao máximo no bastidor tentando deixá-la esticada como um tambor.",
      "❌ Aumentar a densidade na tentativa de cobrir rugas causadas por falta de entretela.",
      "❌ Culpar a máquina de bordar antes de checar a gramatura do estabilizador."
    ],
    "voceSabia": "Em tecidos delicados ou com elastano, o bastidor deve apenas APOIAR e ESTABILIZAR o tecido, nunca esticá-lo! Esticar a peça no bastidor é a causa número 1 de deformações no ateliê!",
    "curiosidadeTecnica": "A regra de ouro da estabilidade estabelece: Matriz correta + tecido adequado + estabilização correta + bastidoramento adequado = zero deformação.",
    "dicaArtrelados": "O tecido também participa ativamente da construção do bordado! Não adianta ter uma matriz perfeita se o tecido estiver mal estabilizado ou esticado incorretamente. Quando aparecer uma deformação, descubra por que o tecido se moveu antes de alterar o arquivo!",
    "applications": [
      "Bordados em malha, viscolycra, tecidos finos de seda, cetim e peças esportivas."
    ],
    "troubleshootingTips": [
      "Ao bordar tecidos elásticos, use entretela de malha ou recorta-fácil de 200g/m² e aplique spray adesivo temporário para fixar o tecido sem esticá-lo."
    ],
    "relatedTerms": [
      "Distorção do Bordado",
      "Bastidoramento",
      "Estabilizador",
      "Compensação de Puxão"
    ],
    "tags": [
      "d-042",
      "deformacao",
      "rugas",
      "franzimento",
      "malha",
      "estabilidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim deformatio, -onis (ação de desfigurar, alterar a forma correta, de deformare, tirar a forma bela).",
    "beginnerExplanation": "Deformação do bordado é quando a peça de roupa fica franzida, enrugada ou com ondas feias ao redor do desenho depois de bordada. Acontece quando esticamos a camiseta com muita força ao prender no bastidor ou quando usamos entretela inadequada.",
    "practicalExercise": "Pegue um pedaço de malha e estique-o com as mãos com muita força ao fechar o parafuso do bastidor. Borde um desenho denso e depois retire do bastidor: veja como a malha encolhe de volta e forma um monte de ondas e rugas ao redor do bordado. Repita sem esticar a malha e veja a diferença!",
    "quickSummary": "Deformação do bordado é o enrugamento ou ondulamento estrutural do tecido ao redor da área bordada gerado por bastidoramento incorreto ou estabilização insuficiente.",
    "bibliographicReferences": [
      "COATS INDUSTRIAL. Puckering and Fabric Deformation: Root Causes & Solutions. London, 2022.",
      "GUNOLD. Hooping Techniques to Prevent Garment Distortion. Stockstadt, 2021.",
      "ARTRELADOS. O Bastidoramento Correto: Como Evitar Franzimentos em Malhas. São Paulo, 2024."
    ]
  },
  {
    "id": "d-043-defeito-de-bordado",
    "code": "D-043",
    "term": "Defeito de Bordado",
    "level": "Iniciante 🟢",
    "grammarClass": "Locução nominal masculina.",
    "category": "Solução de Problemas",
    "summary": "Guia completo de diagnóstico e solução para qualquer falha, irregularidade ou resultado indesejado na produção.",
    "definition": "Um defeito de bordado é qualquer alteração, falha mecânica, imperfeição visual ou irregularidade estrutural que comprometa a aparência, a qualidade, a durabilidade ou o acabamento esperado de uma peça bordada. O defeito pode ter origem na matriz digital, na preparação do tecido, na estabilização, na escolha da agulha e linha, na calibração de tensão ou na mecânica da máquina de bordar.",
    "technicalDetails": "Exige metodologia de diagnóstico investigativo: isolar variáveis uma a uma (agulha → linha → tensão → entretela → bastidor → matriz) para descobrir a causa raiz sem trocar múltiplos parâmetros simultaneamente.",
    "construction": [
      "Análise do aspecto visual frontal",
      "Inspeção técnica do verso do bordado (1/3 de bobina)",
      "Verificação da formação de laçadas e nós",
      "Auditoria da matriz e condições da máquina"
    ],
    "howItWorks": [
      "1. A bordadeira observa o defeito no tecido (frente e verso).",
      "2. Identifica em que momento da costura a falha começou.",
      "3. Formula hipóteses (agulha com rebarba, tensão frouxa, entretela inadequada).",
      "4. Realiza testes controlados alterando UMA variável por vez até solucionar."
    ],
    "mainTypes": [
      "Defeitos de Linha & Tensão (Quebras, linha da bobina subindo, laços frouxos)",
      "Defeitos de Cobertura (Tecido aparente, preenchimento ralo)",
      "Defeitos de Registro & Geometria (Contornos desalinhados, formas ovais)",
      "Defeitos de Acabamento (Marcas de bastidor, fiapos soltos, nós duros)"
    ],
    "advantages": [
      "✔ Desenvolve autonomia e raciocínio técnico avançado na bordadeira",
      "✔ Reduz drasticamente o desperdício de peças caras e tempo de retrabalho",
      "✔ Garante padrão de qualidade consistente e profissional no ateliê"
    ],
    "limitations": [
      "Continuar bordando com a máquina apresentando ruídos estranhos ou quebras repetitivas pode danificar a lançadeira ou a barra de agulha."
    ],
    "commonErrors": [
      "❌ Culpar a máquina imediatamente sem verificar a passagem de linha ou o estado da agulha.",
      "❌ Alterar dez configurações ao mesmo tempo sem descobrir a causa real do problema.",
      "❌ Olhar apenas para a frente do bordado e nunca inspecionar o avesso.",
      "❌ Continuar a produção quando a máquina está quebrando linha a cada 100 pontos."
    ],
    "voceSabia": "O avesso do bordado conta a verdadeira história do que aconteceu: olhar a proporção de 1/3 da linha de bobina no verso revela instantaneamente se o problema era tensão superior ou inferior!",
    "curiosidadeTecnica": "Crie um 'caderno de ocorrências do ateliê': fotografe a frente, o verso e anote a solução encontrada para cada defeito resolvido. Com o tempo, você terá seu próprio manual de maestria em bordado.",
    "dicaArtrelados": "Não tente corrigir um defeito antes de descobrir sua causa real! Siga sempre a regra de ouro do DIBE: Observar → Investigar → Identificar → Corrigir → Testar. Assim, cada problema superado deixa de ser uma frustração e se torna um degrau na sua evolução profissional!",
    "applications": [
      "Solução de problemas em ateliês, manutenção preventiva, controle de qualidade e treinamento."
    ],
    "troubleshootingTips": [
      "Em caso de falha persistente, substitua a agulha por uma nova e repasse toda a linha superior do zero com o pé-calcador levantado."
    ],
    "relatedTerms": [
      "Definição do Bordado",
      "Deformação do Bordado",
      "Ajuste de Tensão",
      "Bastidoramento",
      "Quebra de Linha"
    ],
    "tags": [
      "d-043",
      "defeito de bordado",
      "diagnostico",
      "solucao de problemas",
      "qualidade",
      "artrelados"
    ],
    "updatedAt": "2026-08-19",
    "origin": "Do latim defectus, -us (falta, imperfeição, fraqueza, falha mecânica, de deficere, faltar/falhar) e do árabe al-burdā (bordado).",
    "beginnerExplanation": "Defeito de bordado é qualquer coisa que dê errado na produção: linha de cima quebrando, linha branca da bobina aparecendo por cima, pano furado, contorno torto ou nó embaixo do tecido. Cada defeito tem uma causa clara e pode ser resolvido com método!",
    "practicalExercise": "Crie o 'Caderno de Casos do Ateliê': sempre que acontecer um defeito (linha arrebentando, bobina subindo, etc.), fotografe a frente e o verso da peça, anote qual era o tecido, qual era a agulha e como você conseguiu resolver. Em poucas semanas você terá seu próprio manual de soluções rápidas!",
    "quickSummary": "Defeito de bordado é qualquer anomalia visual, mecânica ou estrutural no produto bordado, corrigível através do diagnóstico metódico das variáveis de produção.",
    "bibliographicReferences": [
      "MADEIRA. Complete Embroidery Troubleshooting Guide: From Cause to Cure. Freiburg, 2023.",
      "BARUDAN. Technical Troubleshooting Manual for Commercial Embroidery. Tokyo, 2022.",
      "ARTRELADOS. Manual Mestre de Diagnóstico e Solução de Defeitos no Bordado. São Paulo, 2024."
    ]
  },
  {
    "id": "d-044-discos-de-tensao",
    "code": "D-044",
    "term": "Discos de Tensão (Tension Discs)",
    "level": "Fundamental 🟢",
    "category": "Componentes da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim discus (disco plano circular) e tensio, -onis (ato de esticar, esforço de tração). Mecanismo de frenagem mecânica por atrito contínuo desenvolvido na primeira Revolução Industrial têxtil.",
    "summary": "Par de pratos côncavos metálicos prensados por mola helicoidal que aplica resistência e calibra o fluxo da linha superior.",
    "definition": "Os discos de tensão são dois pratos metálicos espelhados, de formato côncavo-convexo montados face a face sobre um eixo no cabeçote da máquina de bordar. Pressionados por uma mola helicoidal calibrada por um botão giratório micrométrico ou solenoide eletrônico, eles exercem uma força de compressão controlada sobre a linha superior conforme ela desliza entre eles, garantindo que o fio chegue à agulha com a resistência exata para a formação de pontos firmes e sem laçadas.",
    "technicalDetails": "Fabricados em aço inoxidável retificado ou com revestimento cerâmico antiaderente. A força de aperto varia de 80gf a 150gf para linhas de poliéster 120/40wt. Inclui pino central de liberação que afasta os discos automaticamente quando o calcador é levantado.",
    "howItWorks": [
      "1. A linha superior desce da barra guia e é inserida no vão entre os dois pratos metálicos espelhados.",
      "2. A mola helicoidal aplica pressão radial constante sobre a face externa do disco móvel.",
      "3. O atrito de contato freia suavemente o desenrolar do fio, gerando a tensão dinâmica necessária.",
      "4. Ao girar o dial numérico (ou ajustar o valor digital no painel), a mola é mais comprimida (tensão maior) ou aliviada (tensão menor)."
    ],
    "beginnerExplanation": "São dois pratinhos de metal brilhantes que ficam escondidos dentro da máquina e funcionam como um 'freio' para a linha. Eles seguram a linha nem muito apertada nem muito frouxa, garantindo que o bordado fique perfeito na frente e no avesso.",
    "applications": [
      "Regulagem de tensão para linhas comuns de poliéster e viscose",
      "Calibração suave para fios frágeis (linhas metálicas e filamentos de seda)",
      "Ajuste de equilíbrio entre linha superior e linha da bobina (regra de 1/3 no avesso)",
      "Compensação de atrito em altas velocidades de produção (800 a 1000 PPM)"
    ],
    "commonErrors": [
      "Passar a linha com o calcador abaixado em máquinas domésticas, fazendo a linha não entrar dentro dos discos e ficar totalmente solta",
      "Deixar fiapos de linha e restos de cola acumulados entre os discos, impedindo que os pratos fechem e gerando ninhos de linha gigantes por baixo da peça",
      "Apertar o botão de tensão até o limite máximo, arrebentando a linha a cada 20 pontos e franzindo o tecido"
    ],
    "troubleshootingTips": [
      "Sempre passe a linha com o calcador totalmente LEVANTADO para que os discos estejam abertos para receber o fio",
      "Limpe os discos passando um pedaço de linha grossa dobrada ou um fio dental sem cera entre os pratos para remover penugens",
      "Ao passar a linha, puxe-a com as duas mãos para frente e para trás até sentir o clique e a resistência firme de encaixe"
    ],
    "dicaArtrelados": "Para saber se a linha entrou de verdade dentro dos discos de tensão na sua máquina doméstica, segure a linha perto do cone e puxe pela ponta da agulha: com o calcador levantado, a linha deve correr soltinha; quando você abaixa a alavanca do calcador, a linha precisa ficar pesada e firme na hora!",
    "voceSabia": "Nas máquinas industriais modernas multicabeças mais avançadas, os tradicionais discos de tensão acionados por mola foram substituídos por tensores digitais comandados por servomotores magnéticos, que recalculam a pressão dos discos ponto a ponto de acordo com o sentido do bordado.",
    "practicalExercise": "Com a máquina desligada e calcador levantado, passe a linha no cabeçote. Abaixe o calcador e puxe a linha na ponta da agulha para sentir a resistência: gire o botão de tensão do número 4 para o número 2 e puxe novamente para sentir a linha mais leve; gire para o número 6 e sinta o fio mais pesado. Volte para a regulagem padrão (3.5 a 4.0)!",
    "quickSummary": "Dispositivo mecânico de pratos metálicos côncavos acionados por mola que regula a resistência e a tração da linha superior.",
    "relatedTerms": [
      "Controle de Tensão da Linha",
      "Barra de Tensão dos Fios",
      "Brilho da Linha",
      "Bobbin Thread (Linha da Bobina)"
    ],
    "tags": [
      "discos de tensão",
      "tensão",
      "regulagem",
      "cabeçote",
      "mecânica",
      "linha superior"
    ],
    "bibliographicReferences": [
      "BROTHER. Upper Thread Tension Disc Assembly & Calibration Manual. Nagoya: Brother, 2022.",
      "TAJIMA. Tension Disc Maintenance, Cleaning and Gram-Force Gauging. Nagoya, 2023.",
      "ARTRELADOS. O Segredo dos Discos de Tensão: Como Evitar Laçadas e Ninhos no Avesso. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-045-desfiador-de-bordado",
    "code": "D-045",
    "term": "Desfiador de Bordado / Desmanchador de Pontos (Seam Ripper / Stitch Eraser)",
    "level": "Fundamental 🟢",
    "category": "Acessórios e Ferramentas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dis- + filum (desfazer os fios tecidos) e do inglês stitch eraser (apagador elétrico de pontos). Ferramenta manual e elétrica indispensável de socorro em oficinas de bordado.",
    "summary": "Ferramenta manual ou eletromecânica de corte de precisão utilizada para cortar e remover pontos de bordado sem danificar o tecido base.",
    "definition": "O desfiador de bordado (desmanchador de pontos ou 'apagador de bordado' / stitch eraser) é uma ferramenta manual dotada de ponta afiada e esfera de proteção, ou um aparelho elétrico com micrólâminas oscilantes em aço inoxidável, desenvolvido para cortar cirurgicamente a linha inferior da bobina no avesso da peça, permitindo a extração rápida dos pontos da frente sem cortar a trama do tecido e sem furar a roupa.",
    "technicalDetails": "Versões manuais: aço temperado com ponta fina curvada de 0.5mm e microesfera plástica vermelha de proteção. Versões elétricas (Stitch Eraser): motor rotativo de 6.000 RPM com lâmina de precisão de 10mm a 15mm de largura, alimentado por bateria recarregável.",
    "howItWorks": [
      "1. A peça a ser corrigida é virada com o avesso voltado para cima sobre uma superfície plana e rígida.",
      "2. A lâmina do desfiador é passada suavemente apenas sobre os pontos brancos da linha da bobina.",
      "3. Uma vez cortadas as laçadas inferiores, vira-se a peça para a frente.",
      "4. Com uma pinça de ateliê ou fita adesiva larga, puxam-se as linhas superiores da frente, que saem inteiras e sem esforço."
    ],
    "beginnerExplanation": "É a ferramenta 'salva-vidas' do ateliê para quando a gente borda um nome com letra errada ou erra a cor da linha. Ela corta os pontinhos pelo lado de trás da roupa com muito cuidado para você tirar as linhas sem rasgar o tecido e sem furar a peça do cliente.",
    "applications": [
      "Remoção de nomes ou logotipos bordados com erro de digitação",
      "Eliminação de ninhos de linha embolados por baixo da chapa de agulha",
      "Desmanche de monogramas antigos para reaproveitamento de uniformes",
      "Correção de detalhes desalinhados em matrizes de alta densidade"
    ],
    "commonErrors": [
      "Tentar desmanchar o bordado cortando os pontos pela frente, picotando o tecido e abrindo buracos irreparáveis na roupa",
      "Apertar o desmanchador elétrico com força excessiva contra o tecido em vez de deslizar suavemente sobre as linhas",
      "Puxar fios teimosos na força bruta sem antes cortar as laçadas no avesso, repuxando a trama da camisa"
    ],
    "troubleshootingTips": [
      "Sempre desmanche pelo AVESSO da peça cortando unicamente as linhas da bobina",
      "Mantenha o tecido bem esticado com as mãos ou preso levemente em um bastidor enquanto passa a lâmina",
      "Depois de retirar as linhas, passe o ferro a vapor com um paninho por cima para fechar os furinhos deixados pela agulha"
    ],
    "dicaArtrelados": "Para tirar qualquer bordado em 2 minutos sem sofrimento: vire a peça pelo avesso, passe o desfiador elétrico ou a lâmina manual apenas na linha branca da bobina. Depois, pegue um pedaço de fita crepe larga, cole por cima da frente do bordado e puxe: todos os fios coloridos saem colados na fita como mágica!",
    "voceSabia": "O desmanchador de costura clássico de metal com uma bolinha vermelha na ponta foi patenteado em 1883. A bolinha vermelha serve exatamente para ficar virada para baixo encostada no tecido, deslizando suavemente para impedir que a ponta afiada fure ou rasgue o pano!",
    "practicalExercise": "Pegue um retalho com uma letra bordada de teste: vire o retalho pelo avesso e, com o desmanchador de pontos, corte cuidadosamente as laçadas da linha da bobina. Vire para a frente, passe uma escovinha ou fita adesiva e veja como as linhas superiores se soltam perfeitamente sem danificar o tecido!",
    "quickSummary": "Instrumento manual ou elétrico de corte de precisão projetado para seccionar as laçadas do avesso e desmanchar bordados com segurança.",
    "relatedTerms": [
      "Bobbin Thread (Linha da Bobina)",
      "Defeito de Bordado",
      "Correção de Pontos",
      "Pinça de Ateliê"
    ],
    "tags": [
      "desfiador",
      "desmanchador",
      "stitch eraser",
      "ferramentas",
      "correção",
      "avesso"
    ],
    "bibliographicReferences": [
      "PEGGY'S STITCH ERASER. Commercial Embroidery Removal & Fabric Recovery Manual. California, 2022.",
      "KRAUSZ, P. Repair, Stitch Removal and Garment Salvage in Industrial Embroidery. New York, 2021.",
      "ARTRELADOS. Como Desmanchar Bordados em Minutos Sem Rasgar o Tecido: O Passo a Passo Definitivo. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-046-dinamica-da-lacada",
    "code": "D-046",
    "term": "Dinâmica da Laçada / Laçada da Agulha (Loop Formation Dynamics)",
    "level": "Avançado 🔴",
    "category": "Terminologia Geral",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego dynamikós (relativo à força e movimento mecânico) e do latim laqueus (laço, nó corredio). Teoria cinemática e tribológica da formação do ponto tipo 301 (Lockstitch).",
    "summary": "Fenômeno cinemático de expansão da folga da linha superior na subida da agulha para captura precisa pela ponta da lançadeira.",
    "definition": "A dinâmica da laçada é o fenômeno físico-mecânico que ocorre no ponto morto inferior do ciclo de costura: após a agulha atingir a profundidade máxima e iniciar sua subida (recuo de 1.5mm a 2.5mm), o atrito da linha com o tecido retarda o movimento do fio, fazendo com que a linha superior se descole da cava da agulha e se expanda lateralmente em forma de arco (laçada ou loop), permitindo que a ponta afiada da lançadeira rotativa passe por dentro desse arco e entrelace a linha da bobina.",
    "technicalDetails": "Altura de recuo crítico: 1.8mm a 2.2mm a partir do Ponto Morto Inferior (PMI). A folga entre a ponta da lançadeira e a cava da agulha no instante da captura da laçada deve ser calibrada entre 0.05mm e 0.10mm (espessura de uma folha de papel).",
    "howItWorks": [
      "1. A agulha desce com a linha superior atravessando o tecido, a entretela e o furo da chapa de agulha.",
      "2. No ponto mais baixo, a linha fica esticada rente à canaleta longa da agulha.",
      "3. A barra de agulha sobe 2mm; a inércia e o atrito com o tecido impedem que a linha suba na mesma velocidade.",
      "4. O excesso de linha projeta-se para fora da cava traseira da agulha, formando um laço oval aberto.",
      "5. A ponta da lançadeira rotativa entra exatamente no centro desse laço, conduzindo a linha superior ao redor da caixa de bobina."
    ],
    "beginnerExplanation": "É a mágica que acontece embaixo da máquina: quando a agulha fura o pano e começa a subir um pouquinho, a linha faz uma 'barriguinha' (um laço). A ponta afiada da lançadeira passa por dentro desse laço num piscar de olhos e dá o nó com a linha de baixo.",
    "applications": [
      "Sincronismo mecânico entre barra de agulha e lançadeira rotativa",
      "Diagnóstico avançado de falhas de ponto (pontos pulados / skipped stitches)",
      "Escolha correta da cava da agulha para linhas grossas ou metálicas",
      "Regulagem de máquinas industriais operando em altíssima velocidade (1200 PPM)"
    ],
    "commonErrors": [
      "Colocar a agulha com a cava virada para o lado errado, impedindo a formação da laçada e fazendo a máquina pular todos os pontos",
      "Bordar sem entretela em malhas, fazendo o tecido subir junto com a agulha (flagging) e destruindo a abertura da laçada",
      "Lançadeira com folga excessiva (mais de 0.20mm de distância da agulha), passando por fora da laçada sem laçar o ponto"
    ],
    "troubleshootingTips": [
      "Se a máquina estiver pulando pontos, verifique se a agulha está colocada com a cava virada exatamente para trás ou para o lado da lançadeira",
      "Utilize agulhas novas com geometria de canaleta profunda (como Schmetz Embroidery ou Groz-Beckert DBxK5)",
      "Garanta que o tecido esteja perfeitamente estabilizado no bastidor para evitar que ele oscile verticalmente"
    ],
    "dicaArtrelados": "A maior inimiga da laçada perfeita é a entretela fraca ou o bastidor frouxo! Quando o tecido fica frouxo, ele sobe junto com a agulha e a laçada não abre embaixo da chapa: o resultado são pontos pulados e linhas desfiadas. Mantenha o tecido esticado como um tambor!",
    "voceSabia": "Em uma máquina de bordar funcionando a 1.000 pontos por minuto, o ciclo completo de descida da agulha, formação da laçada, captura pela lançadeira e aperto pelo estica-fio ocorre em apenas 60 milissegundos (0,06 segundos)!",
    "practicalExercise": "Com a tampa da lançadeira aberta e a máquina desligada, gire o volante manualmente devagar: observe a agulha descer até o fundo e começar a subir. Veja com seus próprios olhos a 'barriguinha' de linha se abrir do lado da cava e a ponta da lançadeira entrar perfeitamente dentro dela!",
    "quickSummary": "Processo cinemático de expansão da folga da linha superior no recuo da agulha para permitir a captura precisa pela lançadeira.",
    "relatedTerms": [
      "Canoa da Bobina",
      "Barra de Agulha",
      "Agulha de Bordado",
      "Ponto de Bordado"
    ],
    "tags": [
      "laçada",
      "lançadeira",
      "sincronismo",
      "mecânica",
      "ponto 301",
      "cinemática"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT. Loop Formation and Thread Dynamics in Industrial Machine Embroidery. Albstadt, 2022.",
      "SCHMETZ. The Anatomy of Lockstitch Formation: Timing, Clearance & Needle Deflection. Alsdorf, 2023.",
      "ARTRELADOS. Mecânica da Laçada Perfeita: Por Que a Máquina Pula Pontos e Como Resolver. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-047-divisao-de-matriz",
    "code": "D-047",
    "term": "Divisão de Matriz / Multiposicionamento (Design Splitting & Multi-Hooping)",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim divisio, -onis (ato de repartir, separar em partes) e matrix, -icis (molde gerador). Técnica computacional criada para superar as limitações físicas de campo útil dos bastidores.",
    "summary": "Técnica de fragmentação de matrizes gigantes em seções sequenciais com marcas de registro para bordados que excedem o tamanho do bastidor.",
    "definition": "A divisão de matriz (ou técnica de multiposicionamento / design splitting) é o método avançado de engenharia de digitalização que consiste em particionar um desenho de grandes dimensões em duas ou mais seções menores interligadas, inserindo cruzetas de alinhamento e pontos de registro precisos para que cada parte seja bordada sucessivamente em múltiplos bastidoramentos no tecido sem desencontros visíveis.",
    "technicalDetails": "Executada através de ferramentas de linha de corte de divisão (Multi-Hoop Tool). Insere pontos de registro (Alignment Crosshairs/Marks) de 3 a 5 pontos corridos nos pontos de encontro entre bastidores vizinhos, com tolerância máxima de encaixe de 0.3mm.",
    "howItWorks": [
      "1. O desenho completo de grande porte (ex: 20x40cm) é carregado no software de bordado.",
      "2. O digitalizador define a grade de bastidores virtuais sobrepostos cobrindo toda a área da arte.",
      "3. As linhas de corte são traçadas através de caminhos naturais (espaços vazios ou sob contornos de satin) para ocultar as emendas.",
      "4. O software gera os arquivos individuais numerados (Parte 1, Parte 2, Parte 3) com suas respectivas cruzetas de alinhamento.",
      "5. No ateliê, o operador borda a Parte 1 com a cruzeta de marcação, rebastidora o tecido alinhando a cruzeta pelo laser ou agulha e executa a Parte 2 perfeitamente encaixada."
    ],
    "beginnerExplanation": "É o método inteligente de cortar um desenho bem grandão em dois ou três pedaços no computador para conseguir bordar na sua máquina mesmo que o seu bastidor seja pequeno. O programa cria marquinhas de cruzinha para você emendar as partes no tecido certinho sem ninguém notar a emenda!",
    "applications": [
      "Bordado de costas inteiras de jaquetas e roupões de banho",
      "Barrados longos e contínuos de toalhas de mesa e lençóis",
      "Grandes brasões para estandartes e bandeiras religiosas",
      "Execução de matrizes grandes em máquinas domésticas com bastidor padrão (10x10cm ou 13x18cm)"
    ],
    "commonErrors": [
      "Cortar a matriz no meio de um preenchimento tatami maciço, gerando uma cicatriz visível na emenda dos pontos",
      "Rebastidorar o tecido com ângulo torto em relação às cruzetas de registro, fazendo a segunda metade sair inclinada",
      "Não levar em consideração o repuxo do tecido entre a primeira e a segunda parte bordada"
    ],
    "troubleshootingTips": [
      "Sempre planeje a linha de divisão passando por contornos, linhas vazias ou sob colunas de ponto cheio",
      "Utilize agulhas ou alfinetes finos espetados exatamente no centro da cruzeta de alinhamento para acertar a posição da agulha no segundo bastidor",
      "Utilize bastidores magnéticos ou gabaritos de alinhamento para facilitar o rebastidoramento reto"
    ],
    "dicaArtrelados": "Para acertar a emenda de matrizes divididas com precisão de agulha: quando a máquina bordar a cruzeta da primeira parte, abaixe a agulha da máquina no centro exato da cruzeta com o volante antes de iniciar a segunda parte. A emenda fica 100% invisível aos olhos!",
    "voceSabia": "Softwares profissionais como o Wilcom EmbroideryStudio calculam automaticamente o melhor caminho de divisão inteligente (Smart Split), evitando cortar objetos sólidos e camuflando os pontos de emenda nas transições de cores naturais da arte.",
    "practicalExercise": "No seu software de bordado, pegue uma matriz de 15x25cm e ative a ferramenta Multi-Hoop com bastidores 13x18cm: divida a matriz em duas etapas com cruzetas de registro automáticas. Exporte os dois arquivos e visualize no simulador como as cruzetas servem de guia de encaixe perfeito!",
    "quickSummary": "Particionamento sistemático de matrizes de grande porte em seções sequenciais com marcas de registro para bastidores menores.",
    "relatedTerms": [
      "Bastidor Virtual",
      "Bordado em Bastidor Expandido",
      "Bordado Contínuo",
      "Deslocamento de Origem"
    ],
    "tags": [
      "divisão",
      "matriz",
      "multi-hooping",
      "grandes formatos",
      "alinhamento",
      "software"
    ],
    "bibliographicReferences": [
      "WILCOM. Multi-Hooping and Large Design Splitting Guidelines. Sydney: Wilcom, 2022.",
      "BERNINA. Multi-Hooping Masterclass: Aligning Split Embroidery Files. Steckborn, 2023.",
      "ARTRELADOS. O Segredo dos Grandes Bordados: Como Dividir Matrizes e Emendar Sem Cicatrizes. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-048-dupla-face-bordado-limpo",
    "code": "D-048",
    "term": "Dupla Face / Bordado Limpo no Avesso (Reversible & Clean-Back Embroidery)",
    "level": "Intermediário 🟡",
    "category": "Acabamento & Finalização",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim duplus (duplo, que tem dois lados) e facies (rosto, aspecto visual). Padrão de excelência da alta costura e do enxoval de luxo internacional.",
    "summary": "Técnica de digitalização e costura com linha de bobina coordenada para produzir peças onde o avesso tem acabamento perfeito e apresentável.",
    "definition": "O bordado dupla face (ou técnica do avesso perfeito / clean-back embroidery) é o conjunto de procedimentos de digitalização e parametrização mecatrônica planejado para que o avesso do bordado apresente estética impecável, sem fios de salto aparentes, sem nós grosseiros e sem entretelas visíveis, utilizando linhas inferiores da mesma tonalidade da linha superior ou entretelas hidrossolúveis 100% laváveis.",
    "technicalDetails": "Utilização de linha inferior de poliéster 60wt/70wt tingida na mesma cor exata da linha do topo. Programação de caminhos de conexão contínuos por ponto corrido sob colunas de satin (eliminação de comandos Trim no avesso) e entretela hidrossolúvel de 40g a 80g de fácil remoção.",
    "howItWorks": [
      "1. A bobina é enchida previamente com a mesma linha colorida utilizada no cabeçote superior.",
      "2. O tecido (toalha, manta, lenço) é estabilizado exclusivamente com entretela hidrossolúvel.",
      "3. A matriz é digitalizada com caminhos de costura inteligentes, escondendo os trajetos de deslocamento sob os pontos cheios.",
      "4. A tensão superior e inferior é rigorosamente equilibrada para que a linha não repuxe para nenhum dos lados.",
      "5. Após o bordado, a peça é lavada e o avesso fica macio, com as mesmas cores e sem resíduos ásperos."
    ],
    "beginnerExplanation": "É a técnica para deixar a parte de trás do bordado tão bonita e limpinha quanto a parte da frente, usando linha da bobina da mesma cor da linha de cima e entretela que derrete na água, ideal para toalhas e mantinhas de bebê onde o avesso fica aparecendo.",
    "applications": [
      "Toalhas de lavabo e banho de alto padrão",
      "Fraldas e mantas de bebê com contato direto na pele sensível",
      "Xales, lenços de seda, cangas e peças com duas faces visíveis",
      "Cortinas, jogos americanos e guardanapos finos de banquete"
    ],
    "commonErrors": [
      "Usar entretela rasgável comum, deixando pedaços brancos de papel presos e duros no verso da toalha",
      "Usar linha branca comum na bobina para bordar desenhos escuros ou coloridos em peças dupla face",
      "Deixar pontas soltas de linha sem corte automático rente no avesso"
    ],
    "troubleshootingTips": [
      "Enrole bobinas com a mesma linha de bordar superior para cada cor predominante do desenho",
      "Substitua todas as entretelas de papel por entretela hidrossolúvel solúvel em água morna",
      "Calibre a tensão da bobina para ficar perfeitamente neutra em relação à tensão superior"
    ],
    "dicaArtrelados": "Para fraldas de bebê e toalhas de luxo: use sempre linha da mesma cor na bobina e entretela hidrossolúvel. Ao final, passe um paninho úmido no avesso e corte os fiapos com tesoura de arremate curva: o avesso fica tão lindo e macio que a cliente não sabe dizer qual é a frente e qual é o verso!",
    "voceSabia": "Na tradição do bordado chinês imperial de Xiang e Suzhou, o bordado dupla face manual era considerado o ápice supremo da arte têxtil: os mestres artesãos conseguiam bordar um gato de olhos abertos na frente e um tigre feroz no verso da mesma seda transparente.",
    "practicalExercise": "Encha uma carretilha com linha de poliéster vermelha e coloque o mesmo cone vermelho no cabeçote. Monte um pedaço de linho com entretela hidrossolúvel e borde uma flor em ponto cheio. Lave a amostra em água morna e veja como o avesso fica incrivelmente limpo, macio e da mesma cor da frente!",
    "quickSummary": "Método de produção com linha de bobina combinando e entretela hidrossolúvel para gerar bordados com avesso impecável.",
    "relatedTerms": [
      "Bobbin Thread (Linha da Bobina)",
      "Entretela Hidrossolúvel",
      "Corte Automático de Linha",
      "Controle de Tensão da Linha"
    ],
    "tags": [
      "dupla face",
      "avesso perfeito",
      "enxoval",
      "bebê",
      "toalhas",
      "acabamento"
    ],
    "bibliographicReferences": [
      "MADEIRA. Reversible Embroidery and Clean-Back Finishing Standards. Freiburg, 2022.",
      "KRAUSZ, P. Luxury Monogramming: Double-Sided Techniques for High-End Linens. London, 2021.",
      "ARTRELADOS. O Avesso Perfeito: Técnicas para Encantar Clientes de Enxovais Finos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-049-debrum-bordado",
    "code": "D-049",
    "term": "Debrum Bordado (Bound Edge / Appliqué Overcasting)",
    "level": "Fundamental 🟢",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do árabe vulgar ad-dabrun (orla dobrada, fita de reforço perimétrico). Técnica clássica da alfaiataria adaptada à parametrização eletrônica de bordados de contorno.",
    "summary": "Acabamento perimétrico em fita ou tecido dobrado fixado por colunas de ponto cheio para proteger e reforçar as bordas de peças têxteis.",
    "definition": "O debrum bordado é a aplicação estrutural e decorativa em que uma tira de tecido dobrado, viés ou fita é sobreposta e costurada ao longo da borda perimétrica de uma peça têxtil (como toalhas, babadores, mantas e caminhos de mesa) por meio de uma densa coluna de ponto cheio (satin) ou ponto festonê digitalizado, conferindo vedação total contra desfiamentos e reforço mecânico.",
    "technicalDetails": "Digitalizado com largura de coluna entre 3.5mm e 5.0mm e densidade de 0.38mm. Possui costura guia de posicionamento perimétrico e underlay de borda dupla (double edge walk) com compensação de repuxo de +0.40mm para abraçar a espessura do viés dobrado.",
    "howItWorks": [
      "1. A máquina executa a primeira costura simples indicando a linha guia de encaixe do debrum.",
      "2. O operador acomoda o viés ou a fita dobrada sobre a linha marcada na peça.",
      "3. Uma costura de alinhave fixa temporariamente o debrum no lugar.",
      "4. A coluna final de ponto cheio em zigue-zague denso costura sobre a junção, lacrando as margens do tecido com elegância e alta resistência mecânica."
    ],
    "beginnerExplanation": "É uma bordinha ou fita de tecido dobradinha que a gente prega na beirada de toalhas, fraldas ou panos de prato usando um ponto cheio bem gordinho e resistente para a borda não desfiar e ficar super charmosa.",
    "applications": [
      "Acabamento de bordas em toalhas de banho e rosto infantis",
      "Barrados perimétricos de panos de copa e jogos americanos",
      "Bordas reforçadas em babadores e mantinhas de recém-nascido",
      "Arremate perimétrico de tapetes decorativos e almofadas"
    ],
    "commonErrors": [
      "Usar debrum de tecido muito grosso que faça a agulha entortar ao bater sobre múltiplas camadas",
      "Digitalizar a coluna de acabamento muito estreita (menos de 3mm), deixando a beirada do viés escapar",
      "Não alinhar o debrum perfeitamente com a costura guia antes do ponto cheio final"
    ],
    "troubleshootingTips": [
      "Utilize fita de viés de algodão 100% ou tecido tricoline pré-passado no ferro para evitar enrugamento",
      "Aplique uma fita crepe de ateliê ou cola bastão temporária para segurar o debrum bem esticado antes da costura final",
      "Use agulha tamanho 80/12 ou 90/14 com ponta afiada para atravessar a dobra do viés com facilidade"
    ],
    "dicaArtrelados": "Para fazer debruns perfeitos em toalhinhas de boca sem precisar ir para a máquina de costura reta: monte o barrado de tricoline direto no bastidor de bordar usando a matriz de debrum inteligente: a bordadeira marca, fixa e arremata com ponto cheio tudo em uma única etapa!",
    "voceSabia": "Na história do vestuário medieval, o debrum era usado exclusivamente para proteger a bainha de mantos reais contra o atrito com o chão e a lama. Com o advento das máquinas de bordar, tornou-se um dos acabamentos decorativos mais populares e lucrativos dos ateliês.",
    "practicalExercise": "Digitalize um retângulo com cantos arredondados contendo uma costura guia, uma parada programada (Stop) e uma coluna de Satin de 4.0mm. Borde sobre um tecido plano aplicando uma tira de tecido estampado na parada: veja como o debrum bordado fica impecável e com toque profissional!",
    "quickSummary": "Tira de tecido dobrado ou viés fixada na extremidade da peça através de colunas de ponto cheio para reforço e arremate de bordas.",
    "relatedTerms": [
      "Borda de Acabamento",
      "Bordado Appliqué (Aplicação)",
      "Coluna de Satin",
      "Costura de Contorno"
    ],
    "tags": [
      "debrum",
      "viés",
      "acabamento",
      "bordas",
      "barrados",
      "enxoval"
    ],
    "bibliographicReferences": [
      "WILCOM. Border Digitizing, Binding and Edge Finishing Guidelines. Sydney: Wilcom, 2022.",
      "COATS INDUSTRIAL. Edge Binding, Trimming and Overcasting Mechanics. London, 2021.",
      "ARTRELADOS. Barrados e Debruns no Bastidor: Acabamentos Nobres para Panos de Prato e Toalhas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-050-degrade-de-pontos",
    "code": "D-050",
    "term": "Degradê de Pontos / Ponto Sombreado (Stitch Gradient & Color Blending)",
    "level": "Avançado 🔴",
    "category": "Pontos Básicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês dégrader (diminuir gradualmente em intensidade ou tom). Técnica de transição cromática desenvolvida a partir da pintura a óleo e adaptada aos algoritmos de densidade variável de bordado.",
    "summary": "Técnica de transição suave entre duas ou mais cores através do entrelaçamento de camadas com densidades gradualmente decrescentes.",
    "definition": "O degradê de pontos (ou sombreado de cores / color blending) é a técnica avançada de digitalização em que duas ou mais camadas de pontos de cores diferentes são sobrepostas com densidades variáveis e gradualmente decrescentes (comprimento e espaçamento interpolados), criando uma transição óptica suave, efeitos tridimensionais de luz e sombra, e a ilusão de fusão de cores conhecida como 'pintura com agulha'.",
    "technicalDetails": "Executado por perfis de densidade exponencial ou linear (Gradient Fill Profiles). A camada de cor base inicia densa (0.40mm) e expande o espaçamento até 1.5mm; a segunda cor sobreposta faz o trajeto inverso (de 1.5mm para 0.40mm), gerando o entrelaçamento óptico perfeito das linhas.",
    "howItWorks": [
      "1. O digitalizador desenha o objeto base e ativa a ferramenta de Densidade Gradiente (Gradient / Accordion Stitch).",
      "2. É selecionada a primeira cor (ex: amarelo escuro) com densidade decrescente de baixo para cima.",
      "3. O segundo objeto com a cor clara (ex: amarelo claro) é sobreposto com densidade decrescente de cima para baixo.",
      "4. Os pontos das duas cores se intercalam nos mesmos ângulos de costura.",
      "5. A reflexão de luz nas linhas de poliéster funde as duas tonalidades ao olhar humano, criando uma transição contínua sem faixas duras de corte."
    ],
    "beginnerExplanation": "É a técnica mágica de misturar duas ou mais cores de linha no mesmo desenho para fazer um sombreado suave que parece uma pintura (como o pôr do sol ou as sombras de uma flor), fazendo as cores se misturarem suavemente sem aquela divisão dura de riscos.",
    "applications": [
      "Pétalas de flores realistas e folhagens botânicas",
      "Pôr do sol, paisagens e efeitos de céu em quadros bordados",
      "Sombreamento de pele, olhos e cabelos em retratos bordados",
      "Logotipos com degradês corporativos modernos e transições metálicas"
    ],
    "commonErrors": [
      "Usar densidade fixa pesada nas duas cores sobrepostas, criando uma placa grossa e dura de pontos que quebra agulhas",
      "Digitalizar as duas camadas com ângulos de ponto totalmente opostos (90° de diferença), destruindo a ilusão de fusão de cor",
      "Fazer o degradê em áreas muito pequenas (menos de 10mm), onde o espaço físico não permite a transição gradual dos pontos"
    ],
    "troubleshootingTips": [
      "Mantenha o mesmo ângulo de inclinação de pontos nas duas camadas que compõem o degradê",
      "Utilize linhas de poliéster trilobal ou viscose brilhante para maximizar a reflexão luminosa na fusão das cores",
      "Reduza a densidade da camada inferior em pelo menos 40% antes de sobrepor a segunda cor"
    ],
    "dicaArtrelados": "Para fazer degradês realistas em flores: use sempre 3 tons da mesma família de cor (escuro, médio e claro). Comece a base com o tom escuro abrindo os pontos, passe o tom médio no meio e finalize a ponta da pétala com o tom claro: a pétala parece que acabou de ser colhida do jardim!",
    "voceSabia": "Na digitalização moderna de alta fidelidade (PhotoStitch), os algoritmos computacionais dividem uma fotografia em até 16 camadas microscópicas de degradê de pontos entrelaçados, reproduzindo tons de pele humanos com precisão quase fotográfica usando apenas 4 cores de linha primárias.",
    "practicalExercise": "No seu software de bordado, crie um quadrado de 5x5cm: aplique a ferramenta 'Preenchimento Gradiente' com cor azul marinho variando a densidade de 0.38mm a 1.20mm. Duplique o objeto com a cor azul celeste invertendo o sentido do gradiente. Simule os pontos e veja o efeito de céu degradê perfeito!",
    "quickSummary": "Método de interpolação e sobreposição de camadas com densidades decrescentes para criar transições suaves de cor e sombra.",
    "relatedTerms": [
      "Densidade Variável & Efeitos Visuais",
      "Bordado Multicolorido",
      "Brilho da Linha",
      "Ângulo de Ponto"
    ],
    "tags": [
      "degradê",
      "sombreado",
      "color blending",
      "pintura com agulha",
      "realismo",
      "software"
    ],
    "bibliographicReferences": [
      "WILCOM. Color Blending, Shading and Accordion Stitch Mastering. Sydney: Wilcom, 2022.",
      "KRAUSZ, P. Thread Painting: Principles of Gradient Stitching and Multi-Tone Shading. New York, 2021.",
      "ARTRELADOS. A Arte do Degradê no Bordado Computadorizado: Como Criar Sombras e Realismo. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-051-deslocamento-do-pantografo",
    "code": "D-051",
    "term": "Deslocamento do Pantógrafo (Pantograph Traverse / Carriage Movement)",
    "level": "Fundamental 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego pan (tudo, todo) e graphein (escrever, desenhar). Sistema cinemático de braços mecânicos articulados inventado por Christoph Scheiner em 1603 e eletrificado na automação têxtil nos anos 1970.",
    "summary": "Movimento mecatrônico bidimensional nos eixos X e Y que posiciona o bastidor a cada pulso de rotação do cabeçote de costura.",
    "definition": "O deslocamento do pantógrafo é o movimento mecatrônico sincronizado executado pelo carro transportador de bastidores ao longo dos eixos cartesianos ortogonais X (movimento lateral) e Y (movimento longitudinal), acionado por servomotores de passo de alta resolução e correias dentadas de precisão, responsável por transladar o bastidor com o tecido para as coordenadas exatas da próxima penetração da agulha durante o intervalo em que a agulha está fora do tecido.",
    "technicalDetails": "Acionado por servomotores digitais AC com encoders ópticos de 10.000 pulsos por volta. Desloca-se em uma janela temporal de apenas 25 a 35 milissegundos por ciclo de ponto a velocidades lineares de até 1.500mm/s com precisão posicional repetível de ±0.05mm.",
    "howItWorks": [
      "1. A placa controladora da máquina decodifica as coordenadas X/Y do próximo ponto da matriz.",
      "2. Quando a agulha sobe e sai completamente do tecido (atingindo o ângulo de segurança de 100° do ciclo de rotação), o comando de movimento é disparado.",
      "3. Os servomotores tracionam as correias dentadas, movimentando o braço do pantógrafo com o bastidor acoplado.",
      "4. O bastidor chega e para exatamente na nova coordenada milissegundos antes da agulha descer novamente.",
      "5. A agulha penetra o tecido estabilizado, reiniciando o ciclo cinemático contínuo."
    ],
    "beginnerExplanation": "É o movimento que o braço mecânico da máquina faz levando o bastidor para a esquerda, direita, frente e trás bem rapidinho enquanto a agulha sobe e desce, desenhando o bordado no pano com precisão absoluta.",
    "applications": [
      "Movimentação do bastidor em todos os tipos de matrizes e formatos",
      "Execução de saltos longos (Jumps) entre diferentes áreas do desenho",
      "Traçado de área de trabalho e conferência de limites perimétricos (Trace)",
      "Retorno automático do bastidor ao ponto zero após o término do bordado"
    ],
    "commonErrors": [
      "Segurar ou esbarrar a mão no braço do pantógrafo enquanto a máquina está bordando, fazendo o motor perder o passo e desalinhando o desenho todo",
      "Deixar objetos pesados (tesouras, cones de linha, tecidos caídos) sobre a mesa atrás do pantógrafo, travando o percurso mecânico",
      "Bordar sem verificar se a área ao redor da máquina está livre de obstáculos nos eixos X e Y"
    ],
    "troubleshootingTips": [
      "Mantenha a mesa e as guias lineares do pantógrafo sempre limpas de poeira têxtil e lubrificadas conforme o manual",
      "Se o bordado começar a sair torto em escadinha, verifique a tensão das correias dentadas do pantógrafo",
      "Nunca empurre o carro do pantógrafo com a máquina ligada para não forçar os servomotores"
    ],
    "dicaArtrelados": "Deixe sempre uma folga livre de pelo menos 20 centímetros em volta de toda a sua máquina de bordar! Uma tesoura esquecida ou um casaco pendurado perto do braço móvel do pantógrafo pode travar o carro e fazer o bordado perder o prumo no meio da peça!",
    "voceSabia": "Nas máquinas industriais multicabeças com 20 cabeçotes, o pantógrafo é uma estrutura de aço com mais de 10 metros de comprimento que pesa centenas de quilos, mas que consegue se mover, parar e estabilizar com precisão milimétrica mais de 15 vezes por segundo!",
    "practicalExercise": "Com a máquina ligada e em modo de teste, acione as setas manuais do painel para movimentar o pantógrafo nos quatro extremos (X+, X-, Y+, Y-): repare na suavidade do deslocamento dos eixos e veja como o braço mecânico responde instantaneamente a cada comando!",
    "quickSummary": "Translação mecatrônica nos eixos X e Y controlada por servomotores que posiciona o bastidor a cada subida da agulha.",
    "relatedTerms": [
      "Carro da Máquina de Bordado",
      "Traçado de Área",
      "Deslocamento de Origem",
      "Controle de Velocidade"
    ],
    "tags": [
      "pantógrafo",
      "eixos X Y",
      "servomotores",
      "movimentação",
      "mecatrônica",
      "precisão"
    ],
    "bibliographicReferences": [
      "TAJIMA. Pantograph Drive Mechanics, Servo Tuning and Linear Guide Maintenance. Nagoya: Tajima, 2022.",
      "BARUDAN. XY-Carriage Motion Dynamics and Timing Integration. Tokyo: Barudan, 2023.",
      "ARTRELADOS. A Mecânica dos Eixos X e Y: Como Cuidar do Pantógrafo da sua Bordadeira. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-052-desbobinamento-de-linha-e-sentido-do-fio",
    "code": "D-052",
    "term": "Desbobinamento de Linha e Sentido do Fio (Thread Unwinding Direction & Cross-Wound Feed)",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do prefixo des- (separação, liberação) e do francês bobine (carretel cilíndrico). Princípio da física têxtil que rege o comportamento rotacional e a torção intrínseca das linhas durante a alimentação da máquina.",
    "summary": "Comportamento dinâmico de liberação do fio do cone (enrolamento cruzado para cima) versus carretel pequeno (alimentação lateral deitada) que previne nós e torções.",
    "definition": "O desbobinamento de linha (Thread Delivery & Unwinding Dynamics) é o processo físico pelo qual o filamento de poliéster, viscose ou fio metálico é liberado da sua embalagem primária (cone grande de 4.000m ou carretel pequeno de 1.000m) em direção aos tensores da máquina de bordar (Brother, Janome, Bernina/Bernette e Sun Special). Os cones industriais grandes possuem enrolamento cruzado em 'X' (Cross-Wound), projetados para ficar parados na vertical e desenrolar a linha para CIMA por uma haste alta; já os carretéis pequenos possuem enrolamento paralelo reto (Stacked-Wound), devendo girar deitados em um pino horizontal com prendedor de carretel.",
    "technicalDetails": "Se um cone grande de enrolamento cruzado for colocado deitado no pino horizontal, a linha sofre acúmulo de torção (Kinking / Twist) a cada volta, gerando 'espirais' que travam nos pratinhos tensores e quebram a linha. Cones de 4.000m exigem alimentação vertical com mastro elevado a pelo menos 30cm.",
    "howItWorks": [
      "1. A bordadeira identifica o formato do suporte de linha: se é cone cônico grande (4.000m) ou carretel reto pequeno (1.000m).",
      "2. Para o cone grande: instala-o na base porta-cones vertical com o mastro alto esticado.",
      "3. A linha desenrola para o alto pelo topo do cone com o carretel 100% parado e sem atrito.",
      "4. Para carretéis retos pequenos: instala-o no pino horizontal da máquina e coloca o prendedor de carretel (tampa plástica) do tamanho correto.",
      "5. A linha entra no circuito da máquina com tensão suave e linear.",
      "6. A formação do ponto ocorre sem trancos, sem quebras e sem nós no meio da costura."
    ],
    "beginnerExplanation": "É o jeito certo que a linha deve sair do carretel para a máquina. Cones grandões de 4.000m precisam ficar em pé paradinhos com a linha subindo para o alto por um ferrinho; já os carretéis pequenos devem ficar deitados no pino da máquina. Usar o jeito certo evita que a linha fique dando laços, embolando ou quebrando toda hora!",
    "applications": [
      "Uso correto de cones industriais de 4.000m e 5.000m no ateliê com torre de linha vertical",
      "Eliminação de espirais e nós em linhas de poliéster trilobal e fios metálicos brilhantes",
      "Alimentação uniforme da linha superior sem variação de tensão em altas velocidades (850 PPM)",
      "Escolha correta do prendedor de carretel (disco plástico pequeno, médio ou grande) em máquinas Brother e Janome"
    ],
    "commonErrors": [
      "Colocar o cone grande de 4.000m deitado no pino horizontal original da máquina Brother ou Janome, travando o cone e estourando a linha",
      "Usar carretel pequeno sem o disco prendedor de plástico, fazendo o carretel pular para fora do pino durante o bordado",
      "Usar prendedor de carretel muito maior que o próprio carretel, fazendo a linha enganchar na borda do plástico a cada volta"
    ],
    "troubleshootingTips": [
      "Para carretéis pequenos deitados, escolha sempre uma tampinha de carretel que tenha o mesmo diâmetro ou seja ligeiramente menor que a borda do carretel",
      "Para cones grandes em pé, mantenha o ferrinho da torre de linha sempre bem esticado para o alto",
      "Se a linha estiver saindo em espirais apertadas parecendo um 'rabinho de porco', coloque uma redinha de proteção no cone"
    ],
    "dicaArtrelados": "A linha vive quebrando e você já trocou a agulha 3 vezes? Olhe como o carretel está na máquina! Se for cone grande, ele tem que desenrolar para CIMA na torrinha vertical; se for carretel pequeno, ele tem que girar deitado com a tampinha plástica certa. Acerte a posição e a quebra de linha acaba na hora!",
    "voceSabia": "Ao desenrolar um cone de bordado de 4.000 metros deitado, a linha ganha mais de 10.000 voltas extras de torção sobre si mesma, o que cria uma força elástica invisível capaz de arrebentar o fio mais resistente!",
    "practicalExercise": "Pegue um cone grande de 4.000m e puxe 1 metro de linha para o lado: solte a ponta e veja como o fio se enrola em si mesmo dando nós. Agora puxe 1 metro de linha para CIMA: solte e veja como o fio cai perfeitamente liso e esticado!",
    "quickSummary": "Dinâmica correta de liberação do fio (vertical para cones grandes e horizontal para carretéis) que previne torções e quebras.",
    "relatedTerms": [
      "Base de Cones e Porta-Carretel Vertical",
      "Armazenamento de Fios e Cones",
      "Ajuste de Tensão da Linha",
      "Quebra de Linha Superior"
    ],
    "tags": [
      "d-052",
      "desbobinamento",
      "sentido do fio",
      "cones grandes",
      "carretel",
      "tensão",
      "brother",
      "janome",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. Thread Delivery Mechanics: Horizontal vs. Vertical Spool Pin Dynamics. St. George, 2022.",
      "BROTHER. Spool Cap Sizing and Thread Guide Delivery Standards. Nagoya, 2023.",
      "ARTRELADOS. O Segredo do Desbobinamento Perfeito: Como Posicionar Cones e Carretéis Sem Quebras. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-053-dispositivo-de-bone-para-maquinas-domesticas",
    "code": "D-053",
    "term": "Dispositivo de Boné para Máquinas Domésticas e Semi-Industriais (Cap Driver & Hat Hoop Insert)",
    "level": "Intermediário 🟡",
    "category": "Bastidores & Fixação",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dispositivus (aparato mecânico adaptado) e do francês bonnet (chapéu, touca). Acessório de fixação desenvolvido para adaptar o movimento cartesiano plano às superfícies curvas de bonés.",
    "summary": "Acessório mecânico curvo com presilhas de aba e entretela rígida que permite bordar na frente curva de bonés estruturados em máquinas de 1 agulha.",
    "definition": "O dispositivo de boné para máquinas domésticas e semi-industriais (Cap Frame Insert / Hat Hoop Attachment) é um acessório mecânico especializado compatível com bastidores convencionais e pantógrafos de máquinas de 1 agulha (Brother BP/PE/NV, Janome MC500E/550E, Bernina e Sun Special). É composto por uma placa de fixação com mola de retenção para a aba do boné, grampos laterais e gabarito curvo que mantém a copa frontal do boné aberta, esticada e estabilizada sobre entretela pesada ou adesiva, permitindo que a agulha borde logotipos e nomes em superfícies tridimensionais sem deformar a peça.",
    "technicalDetails": "Área útil de bordado em máquinas domésticas de 1 agulha: cerca de 10x6cm a 13x8cm (delimitada pela curvatura da copa e folga do calcador). Exige rotação da matriz em 180° no painel da máquina e desativação de bordados no topo da aba.",
    "howItWorks": [
      "1. A bordadeira desdobra a carneira (fita interna de suor) do boné para fora.",
      "2. Aplica entretela grossa de boné (rasgável pesada de 80g ou autoadesiva) no verso da frente do boné.",
      "3. Encaixa a aba do boné no grampo central do dispositivo de boné e aperta a mola de travamento.",
      "4. Estica as laterais da copa do boné prendendo com os grampos elásticos nas bordas do aro.",
      "5. Encaixa o bastidor no pantógrafo da máquina garantindo que a aba fique apontada para fora.",
      "6. Gira a matriz no painel da máquina de cabeça para baixo (180°) e executa o 'Trace' (traçado de área).",
      "7. A máquina borda o logotipo centralizado com precisão na curvatura do boné."
    ],
    "beginnerExplanation": "É uma pecinha ou bastidor especial com garras de pressão que serve para prender a aba do boné bem firme e abrir a parte da frente dele lisinha, para você conseguir bordar bonés na sua máquina de casa sem amassar o chapéu e sem bater a agulha na aba dura.",
    "applications": [
      "Personalização de bonés de brim, sarja e microfibra para empresas e eventos",
      "Bordados em viseiras esportivas e chapéus de pescador (bucket hats)",
      "Bordados corporativos de logomarcas em bonés promocionais no ateliê",
      "Ampliação da gama de produtos oferecidos por bordadeiras que trabalham em casa"
    ],
    "commonErrors": [
      "Bordar sem rebater a carneira interna do boné, costurando o forro de suor fechado por engano",
      "Esquecer de girar a matriz em 180° na tela da máquina, fazendo o bordado sair de cabeça para baixo no boné",
      "Bordar muito perto da costura central da aba, quebrando a agulha no reforço de plástico rígido do boné"
    ],
    "troubleshootingTips": [
      "Faça SEMPRE o traçado de área (Trace) na tela da máquina para ter certeza absoluta de que o pé calcador não vai encostar na aba do boné",
      "Use agulha mais grossa e resistente (calibre 90/14 ponta aguçada ou de Titânio) para furar a sarja dura e a entretela do boné",
      "Reduza a velocidade da sua máquina Brother ou Janome para 450 - 550 PPM ao bordar bonés para máxima segurança mecânica"
    ],
    "dicaArtrelados": "Quer pegar encomendas lucrativas de bonés na sua máquina de bordar caseira? Use o bastidor/dispositivo de boné com entretela firme de 80g, dobre a fita de dentro do boné para fora e diminua a velocidade da máquina para 500 PPM: seus bonés vão sair lindos, retinhos e com acabamento de loja!",
    "voceSabia": "Os bonés profissionais possuem uma entretela interna plástica chamada 'buckram'; em máquinas industriais usam-se bastidores circulares giratórios de 270°, mas os dispositivos planos para máquinas caseiras conseguem fazer a frente completa do boné com perfeição!",
    "practicalExercise": "Pegue um boné promocional e vire a fita de suor interna para fora: posicione-o sobre uma folha de entretela adesiva presa no bastidor da sua máquina e prenda a aba com um grampo de pressão; gire a matriz em 180° na tela e faça o traçado de área para ver como a agulha passeia perfeitamente na frente do boné!",
    "quickSummary": "Acessório com presilhas de aba que estabiliza a copa de bonés e viseiras para bordar em máquinas de 1 agulha.",
    "relatedTerms": [
      "Adaptador de Bastidor de Bonés / Dispositivo Cap Driver",
      "Bastidor de Bordado",
      "Agulha de Titânio",
      "Bordado em Alto Relevo com EVA / 3D Puff"
    ],
    "tags": [
      "d-053",
      "boné",
      "dispositivo de boné",
      "cap hoop",
      "brother",
      "janome",
      "viseiras",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Free-Arm & Cap Frame Embroidery Guide for Single-Needle Machines. Nagoya, 2022.",
      "JANOME. Hat Hoop & Cap Insert Attachment User Manual. Tokyo, 2023.",
      "ARTRELADOS. Bonés Perfeitos na Máquina Doméstica: O Guia Definitivo do Dispositivo de Boné no Ateliê. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-054-dupla-entretela-estabilizacao-em-camadas",
    "code": "D-054",
    "term": "Dupla Entretela e Estratégia de Estabilização em Camadas (Double Stabilizer Layering Strategy)",
    "level": "Fundamental 🟢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim duplus (duplicado, reforçado) e do francês entoilage (tecido interno de reforço estrutural). Técnica de engenharia de estabilização têxtil criada para controlar o repuxo em matrizes de alta densidade.",
    "summary": "Uso estratégico de duas camadas de entretela (sobrepostas com sentidos de corte cruzados a 90°) para impedir deformações em matrizes pesadas.",
    "definition": "A dupla entretela (Double Layering Stabilizer Technique) é a metodologia fundamental de estabilização onde duas folhas de entretela de bordado (geralmente rasgáveis de 40g a 60g, ou uma camada de malha recortável combinada com uma rasgável) são aplicadas sob o tecido no bastidor. A chave da técnica consiste em cruzar o sentido das fibras não-tecidas das duas folhas a um ângulo de 90° (uma folha no sentido vertical e outra no horizontal), criando uma barreira bidirecional indeformável que anula completamente as forças de tração do ponto cheio e do ponto tatami.",
    "technicalDetails": "As entretelas não-tecidas possuem maior resistência em uma direção (sentido longitudinal da máquina de fabricação). Ao sobrepor duas folhas com os sentidos cruzados a 90°, a resistência à deformação mecânica aumenta em mais de 300% com ganho mínimo de espessura.",
    "howItWorks": [
      "1. A bordadeira avalia a matriz: se ela possui mais de 15.000 pontos, áreas grandes de ponto tatami ou contornos finos sobre fundo cheio.",
      "2. Corta duas folhas de entretela rasgável de 50g.",
      "3. Gira a segunda folha a 90 graus em relação à primeira (cruzando as tramas de fibra).",
      "4. Monta as duas folhas juntas no bastidor sob o tecido.",
      "5. A máquina de bordar (Brother, Janome, Bernina ou Sun Special) executa o bordado denso.",
      "6. As duas camadas sustentam as milhares de agulhadas sem rasgar prematuramente e sem deixar o tecido franzir.",
      "7. No final, as duas folhas são rasgadas facilmente, uma de cada vez, deixando o avesso limpo e o tecido plano."
    ],
    "beginnerExplanation": "É usar duas folhas de entretela juntas embaixo do tecido ao invés de uma só, colocando uma folha 'em pé' e a outra 'deitada' cruzadas. Isso deixa a base bem firme e forte, impedindo que desenhos grandes e cheios de pontos enruguem a roupa ou furem a entretela antes do bordado terminar.",
    "applications": [
      "Bordados densos e pesados com mais de 15.000 pontos (brasões, logotipos cheios e flores grandes)",
      "Bordados em tecidos finos e moles que enrugam fácil (viscose, percal e seda)",
      "Bordados com contornos finos de satin que precisam casar perfeitamente sobre o preenchimento",
      "Prevenção do 'efeito sanfona' (enrugamento ao redor do bordado) após a lavagem da peça"
    ],
    "commonErrors": [
      "Colocar apenas uma folha de entretela fina de 30g em um bordado de 25.000 pontos, fazendo a entretela rasgar no meio do bordado e estragar a peça",
      "Usar duas folhas de entretela recortável muito grossa em fralda de bebê, deixando o avesso duro como uma tábua de madeira",
      "Rasgar as duas camadas de entretela de uma só vez puxando com força, esticando os pontos do bordado"
    ],
    "troubleshootingTips": [
      "Para toalhas de banho e panos de prato com matrizes cheias, 2 camadas de entretela rasgável de 50g cruzadas é a fórmula do sucesso garantido",
      "Para bodies de bebê e camisetas de malha, use 1 camada de entretela de malha recortável colada no ferro + 1 camada de entretela rasgável por baixo no bastidor",
      "Ao retirar a entretela no final, rasgue sempre uma folha de cada vez apoiando os dedos rente aos pontos"
    ],
    "dicaArtrelados": "O contorno do seu bordado está saindo fora do lugar ou o tecido está ficando enrugado em volta do desenho? Na próxima peça, coloque 2 folhas de entretela rasgável cruzadas no bastidor: o tecido fica esticado como uma tela de pintura e o contorno fecha no milímetro exato!",
    "voceSabia": "Usar duas entretelas médias de 50g cruzadas é muito mais eficiente para evitar enrugamento do que usar uma única entretela super grossa de 100g, porque o cruzamento das fibras a 90° bloqueia o repuxo em todas as direções!",
    "practicalExercise": "Rasgue uma folha de entretela com as mãos no sentido do comprimento (veja como rasga fácil); agora tente rasgar no sentido da largura (veja como é mais resistente). Agora junte duas folhas cruzadas e tente rasgar: sinta a força e estabilidade incrível dessa dupla!",
    "quickSummary": "Uso de duas camadas de entretela sobrepostas com fibras cruzadas a 90° para máxima sustentação em matrizes densas.",
    "relatedTerms": [
      "Backing (Estabilizador / Entretela de Base)",
      "Compensação de Repuxo",
      "Alinhamento de Contorno",
      "Bastidoramento"
    ],
    "tags": [
      "d-054",
      "dupla entretela",
      "estabilizador",
      "camadas",
      "repuxo",
      "estabilidade",
      "brother",
      "janome",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GUNOLD. Embroidery Stabilizers Master Compendium: Multi-Layering Techniques. Kenzingen, 2022.",
      "MADEIRA. Backing Selection & Density Matrix Guidelines. Freiburg, 2023.",
      "ARTRELADOS. O Segredo da Dupla Entretela: Como Acabar de Vez com Enrugamentos e Contornos Fora do Lugar. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-055-dente-do-calcador-e-altura-de-flutuacao",
    "code": "D-055",
    "term": "Dente do Calcador e Altura de Flutuação (Hopping Foot Clearance & Height Adjustment)",
    "level": "Intermediário 🟡",
    "category": "Mecânica & Ajustes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dens (saliência de apoio mecânico) e fluctuare (mover-se em suspensão suave). Parâmetro mecânico de tolerância vertical do pé calcador pulsante de bordar.",
    "summary": "Espaçamento milimétrico calibrado (0.5mm a 1.5mm) entre a base do pé calcador e o tecido no ponto morto inferior para evitar o esmagamento da peça.",
    "definition": "O dente do calcador e altura de flutuação (Hopping Foot Clearance / Presser Foot Height) é a distância milimétrica livre existente entre a sola circular do pé calcador de bordar (calcador pula-pula) e a superfície do tecido quando a barra da agulha atinge o ponto morto inferior (fundo da descida). Nas máquinas de bordar modernas (Brother séries BP/Innov-is, Janome MC, Bernina e Sun Special), essa altura pode ser regulada eletronicamente no painel (ex: de 1.0mm a 4.0mm) ou mecanicamente por parafuso na barra, impedindo que o calcador esmague as felpas de toalhas grossas ou bata em mantas acolchoadas durante o deslocamento do bastidor.",
    "technicalDetails": "Calibração padrão de fábrica para tecidos planos de algodão: 1.0mm a 1.5mm de folga. Para toalhas felpudas e mantas com R1/R2, a altura é aumentada para 2.5mm a 3.5mm; para tecidos finos e sedas, é reduzida para 0.5mm a 1.0mm a fim de evitar o efeito de flutuação e vibração do tecido (Flagging).",
    "howItWorks": [
      "1. A bordadeira prepara uma toalha de banho espessa ou uma capa acolchoada de caderneta de vacinação.",
      "2. Acessa o menu de 'Configurações de Bordado' na tela touchscreen da sua máquina (Brother, Janome ou Bernina).",
      "3. Localiza a opção 'Altura do Calcador / Embroidery Foot Height'.",
      "4. Eleva o valor de 1.5mm (padrão) para 2.5mm ou 3.0mm.",
      "5. A máquina de bordar ajusta o motor de passo interno da barra do calcador.",
      "6. Durante o bordado, o calcador pula suavemente sobre as felpas sem prensar nem arranhar o tecido.",
      "7. O bastidor se desloca livremente sem ruídos secos de atrito e sem travar os motores.",
      "8. Ao voltar para uma camiseta fina de algodão, a bordadeira retorna a altura para o padrão (1.5mm)."
    ],
    "beginnerExplanation": "É a regulagem na tela da máquina que decide a que altura o 'pezinho de ferro' vai ficar flutuando em cima do tecido enquanto borda. Se for uma toalha grossa ou uma manta fofa de bebê, você manda o pezinho ficar um pouquinho mais alto para ele deslizar por cima sem amassar e sem dar tranco no bastidor!",
    "applications": [
      "Bordados em toalhas de banho aveludadas sem esmagar as felpas nem deixar marcas de risco",
      "Bordados em mantas acolchoadas de bebê com manta acrílica (R1 e R2)",
      "Bordados com placa de EVA 3D em relevo alto sem amassar a espuma de borracha",
      "Eliminação do efeito de tecido vibrando (Flagging) em tecidos finos e sedas"
    ],
    "commonErrors": [
      "Deixar o calcador na altura mínima (1.0mm) ao bordar toalhas felpudas grossas, fazendo o pezinho bater nas felpas e desalinhar o bastidor",
      "Deixar o calcador muito alto (4.0mm) em malhas finas, fazendo o tecido subir junto com a agulha e embolar a linha embaixo",
      "Tentar dobrar ou entortar o pé calcador de metal com alicate para tentar alterar a altura manualmente"
    ],
    "troubleshootingTips": [
      "Nas máquinas Brother BP e PE, entre nas configurações da tela e ajuste a 'Altura do Pé Calcador' para 2.5mm ou 3.0mm em peças grossas",
      "Nas máquinas Janome MC500E/550E, ajuste a folga do calcador no menu de regulagem da lançadeira",
      "Se você ouvir um som de 'estalo de plástico' toda vez que a máquina anda em uma toalha, o calcador está muito baixo e batendo no tecido"
    ],
    "dicaArtrelados": "Vai bordar toalha de banho bem grossa ou manta de bebê na sua Brother ou Janome? Não deixe o pezinho esmagar o tecido! Entre no menu da máquina e aumente a Altura do Calcador para 2.5mm ou 3.0mm: o pezinho vai flutuar macio como uma pluma e o bordado fica impecável!",
    "voceSabia": "O calcador de bordar pula cerca de 700 a 850 vezes por minuto durante o bordado, e o momento em que ele toca o tecido dura menos de 30 milissegundos a cada ponto!",
    "practicalExercise": "Coloque uma toalha grossa no bastidor e gire o volante com a mão: observe o momento em que a agulha desce e veja a folga entre a sola do calcador e a felpa da toalha. Altere a altura na tela da máquina e repita o movimento para ver o pezinho flutuando mais alto com espaço livre!",
    "quickSummary": "Ajuste manual ou eletrônico da altura de flutuação do pé calcador que evita atrito em tecidos grossos e vibração em tecidos finos.",
    "relatedTerms": [
      "Calcador de Bordado / Calcador Pula-Pula",
      "Barra de Pressão e Regulador do Calcador",
      "Alavanca do Calcador",
      "Efeito Flutuação do Tecido (Flagging)"
    ],
    "tags": [
      "d-055",
      "altura do calcador",
      "calcador pula-pula",
      "flutuação",
      "brother",
      "janome",
      "bernina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Innov-is & BP Series Embroidery Foot Height & Clearance Calibration Guide. Nagoya, 2022.",
      "JANOME. Memory Craft Presser Foot Clearance & Fabric Thickness Guide. Tokyo, 2023.",
      "ARTRELADOS. O Pulo do Gato do Calcador: Como Regular a Altura Para Bordar Toalhas e Mantas Sem Trancos. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-056-deslocamento-por-queda-de-energia-retomada-de-ponto",
    "code": "D-056",
    "term": "Deslocamento por Queda de Energia e Retomada de Ponto (Power Failure Recovery & Stitch Memory Resume)",
    "level": "Fundamental 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dislocare (mover de posição) e recuperare (recuperar coordenada gravada). Sistema de memória não-volátil (EEPROM/Flash) introduzido na eletrônica de bordadeiras nos anos 2000.",
    "summary": "Recurso inteligente de segurança que grava a coordenada exata do último ponto na memória, permitindo retomar o bordado perfeitamente após queda de luz.",
    "definition": "O sistema de retomada após queda de energia (Power Failure Resume & Stitch Recovery System) é o recurso eletrônico de proteção e segurança operacional incorporado na placa-mãe das máquinas de bordar modernas (Brother séries BP/PE/NV, Janome MC500E/550E, Bernina e Sun Special). Caso ocorra uma queda repentina de energia elétrica, desligamento acidental do cabo ou parada de emergência no meio de uma matriz de 30.000 pontos, a memória não-volátil da máquina salva o número exato do ponto e as coordenadas cartesianas (X/Y). Ao religar a máquina, o sistema pergunta: 'Deseja retomar o bordado anterior?', retornando o bastidor exatamente para o ponto de parada sem perder a peça.",
    "technicalDetails": "Gravação instantânea em chip Flash EEPROM a cada bloco de pontos. A bordadeira pode ainda utilizar os botões de avanço e recuo de pontos (+/- 1, 10, 100 pontos) na tela para retroceder cerca de 5 a 10 pontos antes do local da parada, garantindo que não fique nenhum espaço vazio ou falha na cobertura.",
    "howItWorks": [
      "1. A máquina está bordando uma matriz grande e complexa (ex: ponto 14.350 de 25.000).",
      "2. Falta energia elétrica no bairro e a máquina se apaga instantaneamente.",
      "3. A bordadeira NÃO mexe no tecido nem retira o bastidor da máquina.",
      "4. Quando a energia elétrica retorna, a bordadeira liga o interruptor da máquina.",
      "5. A tela touchscreen exibe a mensagem de segurança: 'O bordado anterior foi interrompido. Deseja retomar? [OK]'.",
      "6. A bordadeira clica em 'OK'; o pantógrafo se movimenta sozinho e posiciona a agulha na coordenada exata.",
      "7. No painel de navegação de pontos, a bordadeira clica em '-10 pontos' para fazer uma pequena sobreposição de segurança.",
      "8. Aperta o botão Start/Stop verde e o bordado continua normalmente, salvando a peça 100% perfeita!"
    ],
    "beginnerExplanation": "É a 'memória mágica' de salvação da máquina de bordar! Se acabar a força na sua casa ou alguém tropeçar no fio no meio de um bordado demorado, não precisa entrar em pânico: quando a luz voltar, você liga a máquina, aperta 'OK' na tela e ela volta sozinha exatamente no mesmo pontinho onde parou!",
    "applications": [
      "Salvamento de peças nobres e caras em caso de queda de energia ou blecaute no ateliê",
      "Recuperação de bordados após desligamento acidental da máquina de bordar",
      "Retomada de bordados longos que foram pausados à noite para continuar no dia seguinte",
      "Eliminação de prejuízos com toalhas, jaquetas e uniformes perdidos por paradas elétricas"
    ],
    "commonErrors": [
      "Tirar o tecido de dentro do bastidor logo após a queda de luz achando que perdeu a peça para sempre",
      "Puxar ou empurrar o carro do bastidor com força com as mãos com a máquina desligada, descalibrando a posição salva",
      "Clicar em 'Cancelar / Não' na tela ao religar a máquina, apagando a memória da coordenada salva"
    ],
    "troubleshootingTips": [
      "REGRA DE OURO: Acabou a luz? NÃO toque no bastidor e NÃO desmonte o tecido! Deixe tudo exatamente como está até a luz voltar!",
      "Ao religar e clicar em 'Retomar', use o botão de '-10 pontos' na tela da máquina para fazer a agulha recuar alguns pontinhos e arrematar sem deixar emenda aparente",
      "Use sempre um bom filtro de linha ou estabilizador/nobreak para proteger a placa eletrônica da sua máquina contra picos de tensão"
    ],
    "dicaArtrelados": "Faltou luz no meio do bordado? Calma, não entre em desespero e NÃO tire a toalha do bastidor! A sua máquina Brother, Janome ou Bernina gravou o ponto exato na memória! Quando a luz voltar, é só ligar, apertar OK na tela e voltar 5 pontinhos para trás: a peça fica tão perfeita que ninguém nunca vai saber que faltou luz!",
    "voceSabia": "As máquinas eletrônicas modernas possuem um microcapacitor de emergência na placa que armazena energia por 50 milissegundos após o corte de luz, tempo suficiente para a CPU salvar as coordenadas na memória flash antes de desligar por completo!",
    "practicalExercise": "Borde um retalho simples e desligue a máquina no botão liga/desliga no meio da costura: ligue a máquina de novo e veja a tela perguntando se deseja retomar o bordado; aperte OK e assista o bastidor viajando sozinho de volta para o ponto exato!",
    "quickSummary": "Recurso de memória que grava a coordenada do último ponto e permite retomar o bordado com perfeição após queda de luz.",
    "relatedTerms": [
      "Botão Start/Stop e Operação Sem Pedal",
      "Carregamento de Matriz",
      "Correia Dentada do Pantógrafo e Eixo X/Y",
      "Operação da Máquina"
    ],
    "tags": [
      "d-056",
      "queda de energia",
      "retomada",
      "memória",
      "segurança",
      "brother",
      "janome",
      "bernina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Power Failure Recovery System & Stitch Memory Technical Guide. Nagoya, 2022.",
      "JANOME. Memory Craft Stitch Memory Resume Operations Guide. Tokyo, 2023.",
      "ARTRELADOS. Salvação de Peças no Ateliê: Como Retomar Bordados Após Quedas de Energia Sem Deixar Marcas. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-057-dinamometro-textil-medidor-de-tensao-towa",
    "code": "D-057",
    "term": "Dinamômetro Têxtil e Medidor de Tensão Towatec (Towa Bobbin & Top Thread Tension Gauge)",
    "level": "Avançado 🔴",
    "category": "Mecânica & Ajustes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego dynamis (força física) e metron (medida de precisão). Instrumento de metrologia mecânica de precisão desenvolvido pela empresa japonesa Towa Corporation para calibração de máquinas de bordar.",
    "summary": "Instrumento metrológico de precisão com mostrador numérico em gramas-força (gf) para aferir e calibrar a tensão exata da caixa de bobina e da linha superior.",
    "definition": "O dinamômetro têxtil (Medidor de Tensão Towa / Towatec Thread Tension Gauge) é a ferramenta metrológica de precisão indispensável para técnicos e ateliês profissionais de bordado computadorizado. Composto por um alojamento para caixas de bobina (modelo TM-1 para caixa tipo L/classe 15 e TM-2 para caixa tipo M) com roldanas de precisão e um ponteiro de escala calibrada em gramas-força (0 a 50 gf para bobina; 0 a 300 gf para linha superior), permite medir numericamente a resistência de arraste do fio, eliminando achismos e regulagens 'no tato' da caixa de bobina em máquinas Brother, Janome, Bernina e Sun Special.",
    "technicalDetails": "Calibração padrão de tensão inferior (bobina): 20gf a 25gf para poliéster título 60. Calibração padrão de tensão superior (agulha): 100gf a 130gf para poliéster título 40. Permite padronizar rigorosamente a tensão em ateliês com múltiplas máquinas.",
    "howItWorks": [
      "1. A bordadeira ou técnico retira a caixa de bobina da máquina com a bobina cheia instalada.",
      "2. Encaixa a caixa de bobina dentro do suporte do dinamômetro Towa.",
      "3. Passa a linha pelas roldanas de medição e pelo gancho do ponteiro de precisão.",
      "4. Puxa a ponta da linha em velocidade constante e suave.",
      "5. O ponteiro se desloca na escala indicando o valor real da tensão em gramas-força (ex: 22 gf).",
      "6. Se a leitura estiver em 15 gf (muito frouxa) ou 35 gf (muito apertada), ajusta-se o parafuso da caixa com chave de fenda micrométrica até cravar nos 22 gf perfeitos.",
      "7. A caixa de bobina é recolocada na máquina com precisão científica absoluta."
    ],
    "beginnerExplanation": "É um pequeno 'reloginho medidor' japonês super preciso onde você coloca a caixinha de bobina e puxa a linha: ele te mostra na hora, com um número exato em gramas, se a linha de baixo está apertada demais ou frouxa demais, para você nunca mais ter que adivinhar a regulagem no olho!",
    "applications": [
      "Calibração milimétrica da caixa de bobina para avessos de bordado 100% perfeitos",
      "Padronização da mesma tensão idêntica em duas ou mais máquinas do ateliê",
      "Ajuste fino para linhas especiais (metalizadas, poliamida, fios elásticos e de seda)",
      "Diagnóstico definitivo de desregulagens crônicas de ponto e laçadas soltas"
    ],
    "commonErrors": [
      "Puxar a linha no dinamômetro em trancos rápidos e violentos ao invés de um movimento suave e contínuo",
      "Apertar o parafuso da caixa de bobina com chaves de fenda grandes inadequadas, espanando a fenda do parafuso micrométrico",
      "Usar o dinamômetro com poeira ou fiapos de linha presos entre as roldanas de rolamento"
    ],
    "troubleshootingTips": [
      "A tensão ideal da bobina para máquinas domésticas (Brother, Janome, Bernina) com linha de poliéster 60 é entre 20 e 25 gramas-força (gf)",
      "Se não tiver o dinamômetro Towa no início, faça o 'teste da gota' (Drop Test): suspenda a caixa de bobina pela linha; ela deve descer suavemente apenas quando você der um leve toque com o pulso",
      "Gire o parafuso da caixa de bobina sempre em frações minúsculas (como se fosse 5 minutos no ponteiro de um relógio)"
    ],
    "dicaArtrelados": "O segredo dos técnicos de máquinas para regular a caixinha de bobina sem errar nunca é o medidor Towa! Regulou a bobina em 22 gramas e a linha de cima em 110 gramas, a sua máquina borda como seda e o avesso sai com o terço central branquinho mais perfeito do mundo!",
    "voceSabia": "O dinamômetro de tensão Towa foi inventado no Japão na década de 1970 e até hoje é a ferramenta padrão mundial obrigatória utilizada pelas fábricas da Brother, Janome e Tajima em suas linhas de montagem!",
    "practicalExercise": "Pegue a caixa de bobina da sua máquina com linha passada: segure a ponta da linha e solte a caixinha no ar; dê um leve tranco com o pulso para cima; observe se ela desce 2 a 3 centímetros e para suavemente (tensão perfeita) ou se despenca até o chão (tensão frouxa)!",
    "quickSummary": "Instrumento metrológico com escala numérica em gramas que afere e calibra a tensão exata da bobina e linha superior.",
    "relatedTerms": [
      "Ajuste de Tensão da Linha",
      "Caixa da Bobina",
      "Bobbin Case (Caixa de Bobina)",
      "Bloco Tensor e Discos de Tensão Superiores"
    ],
    "tags": [
      "d-057",
      "dinamômetro",
      "towa",
      "tensão",
      "calibração",
      "gramas-força",
      "mecânica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA CORPORATION. Digital & Mechanical Tension Gauge Operation Manual TM-1 / TM-2. Tokyo, 2022.",
      "SUPERIOR THREADS. Calibrating Thread Tension with Towa Tension Gauges Master Guide. St. George, 2023.",
      "ARTRELADOS. A Ciência da Tensão Perfeita: Como Usar o Dinamômetro Towa Para Eliminar Erros de Ponto. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-058-digitalizacao-de-monogramas-e-micro-letras",
    "code": "D-058",
    "term": "Digitalização de Monogramas e Letras em Alta Resolução (Embroidery Monogramming & Micro-Lettering Digitizing)",
    "level": "Avançado 🔴",
    "category": "Programação de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego monos (único, inicial) e gramma (letra do alfabeto). Ramo especializado da digitalização de matrizes focado na legibilidade de tipografias em escalas reduzidas.",
    "summary": "Técnica de programação de matrizes para letras pequenas (3mm a 6mm) com ajustes de compensação, densidade aliviada e underlay simplificado.",
    "definition": "A digitalização de monogramas e micro-letras (Small Lettering & Monogram Digitizing) é a disciplina técnica especializada de criação e edição de matrizes de bordado voltada para a execução de tipografias em dimensões reduzidas (letras de 3mm a 6mm de altura, comuns em nomes de jalecos médicos, bolsos e monogramas de enxovais). Exige parâmetros de software exclusivos: substituição de underlays convencionais por linha de suporte central única (Center Run), redução de densidade (espaçamento alargado para 0.45mm a 0.50mm), aplicação de compensação de repuxo reforçada (0.35mm) e uso de agulhas finas 65/9 ou 70/10 com linhas especiais título 60.",
    "technicalDetails": "As letras minúsculas em ponto cheio têm colunas muito estreitas (0.6mm a 1.0mm). Se a densidade for mantida no padrão normal (0.40mm), o acúmulo de agulhadas corta o tecido e fecha os 'olhos' das letras como 'e', 'a', 'o' e 's'.",
    "howItWorks": [
      "1. A bordadeira seleciona ou digita o nome no software de bordado (Wilcom, PE-Design, Janome Digitizer ou Bernina).",
      "2. Escolhe fontes especializadas para micro-letras (Small Fonts / Micro Fonts) pré-digitalizadas com traços limpos.",
      "3. Ajusta o suporte (underlay) para uma única linha reta no centro (Center Walk).",
      "4. Aumenta a compensação de repuxo (Pull Compensation) para compensar o afundamento do fio no tecido.",
      "5. No cabeçote da máquina (Brother, Janome ou Bernina), instala uma agulha fina 65/9 ou 70/10 ponta aguda (Microtex).",
      "6. Utiliza linha mais fina (título 60) e entretela firme bem esticada.",
      "7. A máquina borda o nome com nitidez cirúrgica, onde cada letrinha de 4mm pode ser lida com perfeição absoluta."
    ],
    "beginnerExplanation": "É a técnica de computador e máquina para conseguir bordar aqueles nominhos bem pequenininhos (como nomes de médicos em jalecos ou iniciais em toalhinhas) sem que as letrinhas fiquem borradas, fechadas ou parecendo um borrão ilegível de linha.",
    "applications": [
      "Bordados de nomes e especialidades em jalecos médicos, aventais e uniformes corporativos",
      "Monogramas nobres e elegantes em lenços, punhos de camisa e enxovais de bebê",
      "Etiquetas personalizadas de tamanho e marca em peças de vestuário",
      "Textos explicativos e logotipos com slogans pequenos em fardamentos"
    ],
    "commonErrors": [
      "Tentar diminuir uma fonte comum grande para 4mm de altura no programa, fazendo as pernas das letras ficarem com colunas microscópicas que a agulha não consegue costurar",
      "Usar agulha grossa (90/14) e linha comum grossa (título 40) para bordar letras de 4mm, transformando a letra 'e' e 'o' em bolinhas fechadas de linha",
      "Colocar suporte duplo (Edge Run + Zigzag) em letras minúsculas, criando um bolo duro de linha antes mesmo de começar o ponto cheio"
    ],
    "troubleshootingTips": [
      "Para letras menores que 6mm, use SEMPRE agulha 65/9 ou 70/10 e linha fina de título 60 no cabeçote",
      "No PE-Design e Wilcom, utilize exclusivamente as fontes da categoria 'Small Fonts / Letras Pequenas'",
      "Desative o underlay de ziguezague e deixe apenas o 'Center Run' (suporte central) ativado para micro-letras"
    ],
    "dicaArtrelados": "Vai bordar nomes pequenos em jalecos ou fraldas e as letrinhas estão saindo fechadas e borradas? Use agulha 70/10 fininha, escolha uma fonte própria para letras pequenas no seu programa e tire o excesso de suporte: as letras de 5mm vão sair tão nítidas que parecem impressas no papel!",
    "voceSabia": "A menor letra já bordada com perfeição legível por uma máquina computadorizada media apenas 1.8 milímetro de altura, utilizando agulha calibre 55/7 e linha de poliéster título 75 ultrafina!",
    "practicalExercise": "No seu software, digite um nome com 5mm de altura usando uma fonte normal e outro usando uma fonte 'Small Font': borde os dois lado a lado em um retalho com agulha 70/10 e compare a diferença brutal de legibilidade e beleza entre as duas!",
    "quickSummary": "Técnica de programação e costura de micro-letras (3mm a 6mm) com densidade aliviada e suporte central para máxima legibilidade.",
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "Compensação de Puxão (Pull Compensation)",
      "Agulha Microtex / Ponta Aguda Aguçada",
      "Branching / Ramificação Automática no Software"
    ],
    "tags": [
      "d-058",
      "monogramas",
      "micro-letras",
      "jalecos",
      "fontes pequenas",
      "nitidez",
      "wilcom",
      "pe-design",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. Small Lettering Digitizing Masterclass & Micro-Font Guidelines. Sydney, 2022.",
      "BROTHER. PE-Design Small Font Typographic Standards for Medical Apparel. Nagoya, 2023.",
      "ARTRELADOS. O Segredo das Letras Perfeitas em Jalecos: Como Bordar Nomes Pequenos com Nitidez Absoluta. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-059-desgaste-e-rebarba-de-agulha",
    "code": "D-059",
    "term": "Desgaste e Rebarba de Agulha (Needle Burr & Micro-Damage Detection)",
    "level": "Fundamental 🟢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim desgastare (consumir por fricção contínua) e do francês ébarbure (pequena ponta metálica cortante levantada por impacto). Principal causa de desfiamento de linhas em máquinas de costura e bordar.",
    "summary": "Microdeformação cortante na ponta ou no olho da agulha provocada por impactos leves contra a chapa ou bastidor que desfia a linha e quebra o fio.",
    "definition": "A rebarba de agulha (Needle Burr & Point Damage) é o microdano mecânico invisível a olho nu que ocorre na ponta aguçada, na canaleta longitudinal ou na borda interna do olho da agulha de bordado. É causada pelo impacto microscópico da agulha contra a chapa de agulha, calcador ou aro do bastidor, ou pelo atrito prolongado com tecidos sintéticos abrasivos após 8 a 10 horas de uso contínuo. A rebarba metálica atua como uma microsserra afiada, desfiando os filamentos da linha superior a cada subida e descida até provocar o rompimento do fio.",
    "technicalDetails": "Uma agulha de bordar perfura o tecido entre 40.000 e 50.000 vezes a cada hora de produção a 750 PPM. Vida útil recomendada de uma agulha de cromo padrão: 8 a 10 horas de trabalho efetivo (ou cerca de 500.000 a 1.000.000 de pontos).",
    "howItWorks": [
      "1. A máquina sofre um pequeno tranco ou a agulha raspa de leve na chapa metálica durante um salto.",
      "2. A ponta da agulha entorta 0.05mm ou levanta uma microfarpinha de aço na borda do olho.",
      "3. A linha de bordar passa pelo olho da agulha mais de 30 vezes no mesmo centímetro antes de formar o ponto.",
      "4. A rebarba raspa repetidamente na linha de poliéster a 750 PPM.",
      "5. A linha começa a desfiar, abrindo pelinhos na frente do cabeçote.",
      "6. Em poucos segundos, o fio se rompe e a máquina para com aviso de 'Linha Superior Quebrada'.",
      "7. A bordadeira substitui a agulha por uma nova; a rebarba desaparece e a máquina volta a bordar suavemente sem quebras."
    ],
    "beginnerExplanation": "É quando a pontinha da agulha fica 'machucada', tortinha ou com uma farpinha de ferro microscópica na ponta depois de bater de leve na chapa ou no aro. Essa farpinha funciona como uma serrinha que corta a linha de bordar toda hora. Trocar a agulha por uma nova resolve o problema em 1 minuto!",
    "applications": [
      "Diagnóstico definitivo de quebras constantes e inexplicáveis de linha superior",
      "Eliminação do desfiamento de fios de poliéster e arrebentamento de linhas metálicas",
      "Prevenção de furos e rasgos nas fibras de malhas delicadas e sedas",
      "Manutenção preventiva de rotina com troca regular de agulhas no ateliê"
    ],
    "commonErrors": [
      "Bordar por semanas com a mesma agulha velha até ela quebrar fisicamente ao meio",
      "Tentar 'lixar' a ponta de uma agulha torta com lixa de unha ao invés de colocar uma agulha nova",
      "Não perceber o barulho de 'tuc-tuc-tuc' seco e pesado que a agulha cega faz ao furar o tecido"
    ],
    "troubleshootingTips": [
      "O TESTE DA MEIA DE SEDA: Passe a ponta da agulha suavemente sobre uma meia fina de nylon velha; se a ponta puxar qualquer fiapinho, a agulha tem rebarba e deve ser jogada no lixo imediatamente!",
      "Troque a agulha da sua máquina a cada 8 a 10 horas de bordado (ou a cada 3 a 4 toalhas grandes bordadas)",
      "Se a linha começar a desfiar repetidamente, não perca tempo mexendo na tensão: troque a agulha primeiro!"
    ],
    "dicaArtrelados": "A linha começou a desfiar e quebrar a cada 2 minutos e você já está perdendo a paciência? Não mexa em nenhum parafuso da máquina! 90% das quebras de linha são causadas por uma agulha gasta ou com micro-rebarba invisível! Coloque uma agulha nova e veja a máquina voltar a bordar no mesmo segundo com a maior paz do mundo!",
    "voceSabia": "Uma agulha nova custa menos de 3 reais, mas uma agulha gasta com rebarba pode fazer você perder horas de trabalho e estragar uma toalha nobre de 80 reais!",
    "practicalExercise": "Pegue uma agulha que já foi muito usada no seu ateliê e passe a unha do polegar delicadamente de cima para baixo até a pontinha: sinta se a ponta 'engancha' na sua unha; agora compare com uma agulha nova tirada do pacote e sinta a diferença da ponta lisa e perfeita!",
    "quickSummary": "Microdeformação cortante na agulha que age como uma microsserra, desfiando e rompendo a linha superior.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Agulha de Titânio / Nitreto de Titânio",
      "Chapa de Agulha (Needle Throat Plate)",
      "Desfiamento de Linha"
    ],
    "tags": [
      "d-059",
      "rebarba de agulha",
      "agulha gasta",
      "desfiamento",
      "quebra de linha",
      "troca de agulha",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ. Needle Diagnostics & Micro-Burr Detection in High-Speed Embroidery. Herzogenrath, 2022.",
      "ORGAN NEEDLES. Technical Manual: Needle Wear, Point Deformation and Thread Breakage. Tokyo, 2023.",
      "ARTRELADOS. O Segredo da Agulha Perfeita: Como Detectar Rebarbas e Evitar Quebras de Linha no Ateliê. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-060-distorcao-termica-em-entretela-termossoluvel",
    "code": "D-060",
    "term": "Distorção Térmica em Entretela Termossolúvel e Limpeza a Seco (Thermal Backing Dissolution & Heat-Away Clean)",
    "level": "Intermediário 🟡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego therme (calor, energia térmica) e do latim solvere (dissolver, desintegrar). Estabilizador sintético termoplástico patenteado para remoção sem uso de água.",
    "summary": "Filme estabilizador especial que se desintegra em pó seco e marrom ao contato com ferro de passar quente (140°C a 160°C), ideal para tecidos que não podem ser molhados.",
    "definition": "A entretela termossolúvel (Heat-Away Film / Thermal Dissolving Stabilizer) é o filme estabilizador sintético transparente ou fosco confeccionado em polímero plástico especial sensível a altas temperaturas. Ao contrário da entretela hidrossolúvel (que exige lavagem com água abundante para sair), a entretela termossolúvel mantém a sustentação mecânica durante o bordado e se desintegra completamente em pó seco ao receber o calor de um ferro de passar a seco ou prensa térmica (entre 140°C e 160°C). É a solução ideal para bordados em tecidos nobres que mancham com água (veludos, sedas, couro ecológico, lãs e panos de prato com barrados engomados).",
    "technicalDetails": "Temperatura de dissolução térmica: 140°C a 160°C sem vapor (ferro a seco). Ao atingir a temperatura crítica, o filme perde a elasticidade, sofre pirólise branda e se converte em microflocos secos que são facilmente escovados com uma escovinha macia.",
    "howItWorks": [
      "1. A bordadeira monta o tecido delicado (ex: veludo ou seda) com a entretela termossolúvel no bastidor.",
      "2. A máquina (Brother, Janome, Bernina ou Sun Special) executa o bordado com firmeza total.",
      "3. A peça é retirada do bastidor e o excesso de filme plástico ao redor do bordado é rasgado com a mão.",
      "4. A bordadeira aquece o ferro de passar a seco na temperatura 'Lã/Algodão' (sem vapor).",
      "5. Pressiona o ferro em movimentos circulares sobre o avesso do bordado por 5 a 10 segundos.",
      "6. A entretela termossolúvel se esfarela instantaneamente em pequenos flocos secos.",
      "7. Passa-se uma escovinha macia de roupa e todo o resíduo cai na bancada, deixando o bordado limpo, macio e 100% seco."
    ],
    "beginnerExplanation": "É um plástico estabilizador especial para usar embaixo ou em cima de tecidos finos que você NÃO quer molhar com água (como veludo, seda ou couro). Depois de bordar, você só encosta o ferro de passar quente e o plástico vira um pozinho seco na hora: é só passar uma escovinha que sai tudo sem precisar lavar a peça!",
    "applications": [
      "Bordados em tecidos nobres e sensíveis à água (veludo, seda pura, camurça, lã e couro sintético)",
      "Bordados em rendas richelieu e peças que precisam ser entregues secas e prontas na hora",
      "Estabilização de toalhas e panos de prato sem necessidade de máquina de lavar para entrega rápida",
      "Substituição da entretela hidrossolúvel em peças que mancham se forem umedecidas"
    ],
    "commonErrors": [
      "Usar ferro com vapor ligado, fazendo o plástico derreter e grudar como cola líquida no tecido",
      "Usar ferro em temperatura baixa demais (menos de 120°C), não atingindo o ponto de quebra do filme",
      "Deixar o ferro parado no mesmo ponto por muito tempo, queimando a linha de poliéster"
    ],
    "troubleshootingTips": [
      "Use SEMPRE o ferro de passar em modo SECO (desligue o vapor e esvazie o reservatório de água)",
      "Coloque um pedaço de tecido de algodão fino ou papel manteiga entre o ferro e o bordado para proteger a peça",
      "Remova os resíduos de pó com uma escovinha de cerdas macias de roupas ou fita adesiva leve"
    ],
    "dicaArtrelados": "Precisa entregar um bordado urgente em veludo ou seda e não pode molhar a peça com água de jeito nenhum? Use a entretela termossolúvel: encostou o ferro quente a seco, ela vira pó e sai na escovinha em 10 segundos! A cliente recebe a peça seca, limpa e cheirosa na hora!",
    "voceSabia": "A entretela termossolúvel foi desenvolvida na Alemanha para a confecção de vestidos de noiva de alta-costura, onde as rendas bordadas em fios de ouro não podiam entrar em contato com água para não perder o brilho metálico!",
    "practicalExercise": "Coloque um pedaço de entretela termossolúvel em um retalho: encoste a ponta do ferro de passar seco e quente por 5 segundos; observe o plástico encolhendo e se transformando em pó seco soltinho que sai com um simples sopro!",
    "quickSummary": "Filme estabilizador que se desintegra em pó seco com o calor do ferro, ideal para tecidos que não podem ser molhados.",
    "relatedTerms": [
      "Entretela Hidrossolúvel",
      "Backing (Estabilizador / Entretela de Base)",
      "Acabamento & Limpeza de Bordado",
      "Blower / Soprador Térmico e Pistola de Ar Quente"
    ],
    "tags": [
      "d-060",
      "termossolúvel",
      "heat-away",
      "estabilizador",
      "ferro quente",
      "sem água",
      "veludo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GUNOLD. Heat-Away & Specialty Thermal Dissolving Stabilizers Manual. Kenzingen, 2022.",
      "MADEIRA. Chemical & Thermal Backing Processing in High-End Embroidery. Freiburg, 2023.",
      "ARTRELADOS. O Segredo da Entretela Termossolúvel: Como Fazer Limpeza a Seco em Tecidos Delicados. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-061-deslocamento-do-eixo-y-troca-de-bobina-estacionamento",
    "code": "D-061",
    "term": "Deslocamento do Eixo Y na Troca de Bobina e Posição de Estacionamento (Park Position & Hoop Clearance Shift)",
    "level": "Fundamental 🟢",
    "category": "Operação da Máquina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglês park position (posição de estacionamento seguro do carro do bastidor) e do latim axis (eixo cartesiano Y de profundidade). Função ergonômica de software presente nas máquinas modernas.",
    "summary": "Comando na tela da máquina que move o bastidor para trás ou para frente, liberando espaço amplo para trocar a bobina ou cortar linhas sem tirar o bastidor.",
    "definition": "O deslocamento do eixo Y para troca de bobina (ou Posição de Estacionamento do Bastidor / Hoop Clearance Shift / Park Position) é a função operacional presente nos menus de controle das máquinas de bordar domésticas (Brother séries BP/PE/Innov-is, Janome MC500E/550E e Bernina). Com um simples toque em um ícone no visor touchscreen, a máquina movimenta o carro do pantógrafo no eixo Y para a posição extrema traseira ou dianteira do trilho, afastando o aro do bastidor para longe da chapa de agulha e permitindo abrir a tampa da lançadeira, trocar a bobina ou recortar tecidos de aplique com tesoura de ponta curva sem precisar desencaixar o bastidor da máquina.",
    "technicalDetails": "Deslocamento milimétrico com memória de retorno absoluto. Ao clicar novamente no botão após a troca da bobina, o pantógrafo retorna com precisão de ±0.01mm exatamente para a coordenada de costura sem perda de alinhamento.",
    "howItWorks": [
      "1. A máquina avisa na tela que a linha da bobina acabou no meio de uma toalha grande no bastidor 13x18cm ou 20x30cm.",
      "2. A bordadeira clica no ícone de 'Troca de Bobina / Mover Bastidor' na tela da máquina.",
      "3. O braço do bastidor viaja suavemente para trás, deixando a chapa de agulha e a caixinha de bobina totalmente livres e desobstruídas.",
      "4. A bordadeira abre a tampa acrílica da lançadeira com facilidade e insere a nova bobina cheia em 5 segundos.",
      "5. Clica no botão de 'Retorno' na tela touchscreen.",
      "6. O bastidor retorna com precisão matemática para a coordenada exata do bordado.",
      "7. Aperta o botão Start/Stop verde e continua a costura com produtividade máxima."
    ],
    "beginnerExplanation": "É um botãozinho na tela da sua máquina que faz o bastidor andar para trás sozinho e 'abrir espaço' para você conseguir abrir a tampinha e trocar a bobina de baixo (ou cortar um tecidinho de aplique) bem confortável com a mão, sem ter que tirar o bastidor da máquina e correr o risco de desalinhar o bordado!",
    "applications": [
      "Troca rápida e confortável da bobina inferior em bastidores grandes (13x18cm, 16x26cm, 20x30cm)",
      "Recorte de sobras de tecido em técnicas de aplique com tesoura de pato (Duckbill) diretamente na máquina",
      "Posição de estacionamento seguro para guardar ou transportar a máquina de bordar",
      "Limpeza rápida de fiapos de linha na chapa de agulha sem desmontar a montagem"
    ],
    "commonErrors": [
      "Desencaixar o bastidor da máquina com força toda vez que a bobina acaba, correndo o risco de bater e entortar o pantógrafo",
      "Tentar enfiar a mão embaixo de bastidores grandes para trocar a bobina no escuro e entortar o aro de plástico",
      "Desligar a máquina com o bastidor na posição de estacionamento sem salvar a coordenada de retorno"
    ],
    "troubleshootingTips": [
      "Nas máquinas Brother BP e PE, toque no ícone do 'Bastidor com Setas' na tela de bordado para afastar o bastidor na hora",
      "Nas máquinas Janome MC500E/550E, toque na tecla de 'Posição de Manutenção / Hoop Shift'",
      "Nunca empurre o bastidor com as mãos para abrir espaço: use SEMPRE o comando eletrônico na tela da máquina"
    ],
    "dicaArtrelados": "A bobina acabou no meio de uma toalha enorme no bastidor grande? Não tire o bastidor da máquina! Aperte o botãozinho de 'Mover Bastidor' na tela: a máquina joga o bastidor lá para trás, você troca a bobina em 5 segundos, aperta voltar e ela continua bordando com alinhamento perfeito!",
    "voceSabia": "A função de estacionamento do bastidor foi criada originalmente para as costuras de aplique, permitindo que a bordadeira corte o excesso de tecido com a tesourinha com as duas mãos livres enquanto a máquina segura a peça imóvel!",
    "practicalExercise": "Com um bastidor montado na sua máquina, vá na tela de bordado e procure o ícone de 'Mover Bastidor / Posição de Troca de Bobina': toque nele e veja a elegância do bastidor deslizando para trás para te dar espaço; toque novamente e veja-o voltando exatamente para o milímetro onde estava!",
    "quickSummary": "Comando eletrônico que afasta o bastidor no eixo Y para liberar espaço confortável para troca de bobina e apliques.",
    "relatedTerms": [
      "Caixa da Bobina",
      "Autodetecção de Fim de Linha e Bobina",
      "Deslocamento do Pantógrafo (Pantograph Traverse / Carriage Movement)",
      "Carro da Máquina de Bordado"
    ],
    "tags": [
      "d-061",
      "troca de bobina",
      "estacionamento",
      "eixo y",
      "hoop shift",
      "brother",
      "janome",
      "bernina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Innov-is & BP Series Hoop Position Shift & Maintenance Key Operations Guide. Nagoya, 2022.",
      "JANOME. Memory Craft Hoop Clearance Shift & Bobbin Access Manual. Tokyo, 2023.",
      "ARTRELADOS. Ergonomia e Velocidade no Ateliê: Como Usar o Deslocamento de Bastidor Para Trocas Rápidas de Bobina. São Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19"
  },
  {
    "id": "d-062-deflexao-da-agulha-needle-deflection",
    "code": "D-062",
    "term": "Deflexão da Agulha e Flexão Elástica Dinâmica (Needle Deflection & Needle Bend)",
    "pronunciation": "de-fle-xao da a-gu-lha",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Agulhas & Fios",
    "summary": "Desvio milimétrico lateral ou longitudinal da haste da agulha durante a penetração em tecidos grossos ou em alta velocidade, causando quebras e colisões com a lançadeira.",
    "origin": "Do latim 'deflectere' (desviar, curvar para fora do eixo). Fenômeno mecatrônico e metalúrgico amplamente estudado na cutelaria têxtil alemã e japonesa para matrizes de alta densidade.",
    "definition": "A Deflexão da Agulha (Needle Deflection / Needle Dynamic Flexing) é a deformação elástica e o desvio angular momentâneo que a lâmina da agulha sofre em relação ao seu eixo vertical perfeito no momento do impacto contra o tecido, entretela ou costuras sobrepostas. Quando a ponta da agulha penetra em materiais de alta resistência mecânica (como jeans, sarja grossa de boné, couro sintético ou camadas empilhadas de EVA 3D), a força de resistência do substrato empurra a ponta da agulha para os lados. Se a deflexão ultrapassar a folga de segurança (geralmente entre 0,05 mm e 0,10 mm), a agulha colide violentamente com o bico da lançadeira ou com as bordas da chapa de ponto, resultando em quebra instantânea, perda de sincronismo ou pontos pulados.",
    "technicalDetails": "A resistência à deflexão é determinada pela geometria do cabo, espessura da haste (calibre) e presença de reforços estruturais (como a haste reforçada das agulhas DBxK5 ou Schmetz SERV 7). A força de deflexão aumenta exponencialmente com a velocidade de rotação (SPM) e a espessura do tecido.",
    "howItWorks": [
      "1. A barra de agulha desce a agulha em alta aceleração (até 1.000 PPM).",
      "2. A ponta da agulha encontra uma barreira de alta densidade mecânica (ex: costura frontal de boné ou EVA rígido).",
      "3. A haste fina da agulha sofre um esforço de flexão lateral e entorta ligeiramente para trás ou para o lado.",
      "4. Ao atravessar o orifício da chapa, a agulha não desce no centro exato do canal.",
      "5. Se a deflexão for excessiva, o bico da lançadeira atinge o metal da agulha em vez de pescar a laçada de linha.",
      "6. O choque mecânico quebra a agulha com estalo sonoro ou amassa o bico da lançadeira.",
      "7. Se a agulha tiver haste reforçada (reforço cônico SERV 7), ela resiste à flexão e desce em linha reta perfeita."
    ],
    "beginnerExplanation": "É quando a agulha da máquina bate em um pano muito duro ou grosso (como a costura de um boné ou uma calça jeans) e 'entorta de leve' na hora de furar o tecido. Por entortar na descida, ela bate na peça de ferro de baixo da máquina (a lançadeira) e quebra com um estalo!",
    "applications": [
      "Diagnóstico e prevenção de quebras de agulha em bordados pesados e bonés estruturados",
      "Bordados tridimensionais (3D Puff) com EVA de alta densidade",
      "Seleção do calibre correto de agulha (ex: troca de 75/11 para 80/12 ou 90/14 com haste reforçada)",
      "Digitalização com distribuição gradual de pontos para suavizar o impacto em zonas duras"
    ],
    "commonErrors": [
      "❌ Borda tecidos pesados ou bonés rígidos com agulhas finas 65/9 ou 75/11 de haste comum, que entortam na descida e quebram",
      "❌ Manter velocidade máxima de 1.000 PPM ao transitar sobre costuras grossas de sarja ou gorgurão",
      "❌ Usar bastidores frouxos onde o tecido salta (efeito tamborim frouxo), aumentando a deflexão angular da agulha"
    ],
    "troubleshootingTips": [
      "Se a agulha estiver quebrando toda vez que passa por cima de uma costura grossa: Instale uma agulha de haste reforçada (Schmetz SERV 7 ou Organ PD 80/12) e reduza a velocidade para 600 PPM",
      "Se a máquina estiver pulando pontos em tecidos sintéticos densos: Verifique se a agulha não está flexionando para longe do bico da lançadeira no momento da laçada",
      "Se a ponta da agulha apresentar arranhões laterais: A agulha está raspando na borda interna da placa de ponto devido à deflexão"
    ],
    "dicaArtrelados": "Vai bordar boné ou jeans grosso? Use agulha com haste reforçada anti-deflexão (como a Schmetz SERV 7 ou Organ DBxK5 80/12 Titânio). O corpinho dela é mais grosso e cônico perto do topo, o que impede a agulha de entortar e garante que ela fure o tecido reto como uma flecha!",
    "voceSabia": "As agulhas com tecnologia SERV 7 possuem uma área cônica reforçada que oferece o dobro de rigidez mecânica contra a deflexão do que uma agulha convencional do mesmo calibre, sem precisar aumentar o tamanho do furo no tecido!",
    "practicalExercise": "Pegue uma agulha 70/10 comum e tente empurrar a pontinha dela de lado com o dedo: sinta como ela verga fácil. Agora pegue uma agulha 80/12 SERV 7 de haste reforçada: sinta como ela é incrivelmente firme e rígida!",
    "quickSummary": "Desvio elástico momentâneo da agulha durante o impacto em tecidos grossos que causa quebras e desvios de sincronismo.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Bico da Lançadeira",
      "Agulha de Titânio / Revestimento PD",
      "Placa de Agulha / Chapa de Ponto"
    ],
    "tags": [
      "d-062",
      "deflexao da agulha",
      "needle deflection",
      "quebra de agulha",
      "serv 7",
      "mecanica",
      "resistencia",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SCHMETZ. Technical Guide: SERV 7 Needles for Deflection and Skip-Stitch Prevention. Aachen, 2022.",
      "GROZ-BECKERT. Needle Deflection and Penetration Forces in High-Speed Industrial Embroidery. Albstadt, 2021."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "d-063-desfiamento-de-linha-thread-fraying",
    "code": "D-063",
    "term": "Desfiamento de Linha e Separação de Filamentos (Thread Fraying & Filament Shredding)",
    "pronunciation": "des-fi-a-men-to de li-nha",
    "level": "Fundamental 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Agulhas & Fios",
    "summary": "Abrasão mecânica ou atrito térmico excessivo que rompe os microfilamentos da linha de bordar antes que ela consiga formar o ponto, criando 'ninhos' de fiapos no olho da agulha.",
    "origin": "Do latim 'disfilare' (separar os fios). Ocorrência cotidiana nos ateliês decorrente de incompatibilidade entre calibre de agulha, tensão ou qualidade da linha.",
    "definition": "O Desfiamento de Linha (Thread Fraying / Thread Shredding) é o processo de degradação física e abrasão mecânica contínua sofrido pelo fio superior de bordado ao passar repetidas vezes (de 20 a 40 vezes antes de ser definitivamente ancorado no tecido) através do olho da agulha e dos discos de tensão. Quando a linha encontra arestas cortantes (burrs), olho de agulha muito apertado, atrito térmico elevado ou tensão excessiva, os microfilamentos individuais que compõem o cabo de poliéster ou a lâmina metálica começam a se romper e se amontoar em forma de bola de fiapos imediatamente acima do olho da agulha, até travar e quebrar a linha.",
    "technicalDetails": "Para linhas padrão de bordado 120/2 (40wt), a espessura da linha deve ocupar no máximo 40% a 50% da abertura útil do olho da agulha. Se o olho estiver desgastado ou tiver micro-ranhuras causadas pelo uso contínuo de fios metálicos, a taxa de cisalhamento dos filamentos aumenta em até 300%.",
    "howItWorks": [
      "1. A linha passa pelo olho da agulha para baixo e para cima dezenas de vezes em alta velocidade.",
      "2. Uma micro-rebarba no olho da agulha ou nos guias de linha começa a raspar a superfície do fio.",
      "3. Os filamentos externos de poliéster ou a fita metalizada rompem-se e começam a deslizar para trás.",
      "4. Cria-se um pequeno tufo ou casulo de penugem acumulada sobre o olho da agulha.",
      "5. O tufo de fiapos fica grande demais para atravessar o tecido ou o orifício da placa de ponto.",
      "6. A linha é estrangulada mecânica e termicamente e parte-se por tração.",
      "7. A máquina detecta a quebra e aciona o sensor de parada."
    ],
    "beginnerExplanation": "É quando a linha de bordar não arrebenta de uma vez só, mas começa a 'esfiar' e formar uma bolinha de fiapos peludinhos bem em cima do buraquinho da agulha até a linha travar e arrebentar. Parece que a agulha está 'mastigando' a linha!",
    "applications": [
      "Identificação e diagnóstico de problemas de atrito nos tensores e passagens de fio",
      "Manutenção preventiva de agulhas gastas com ranhuras microscópicas",
      "Adequação de agulhas para linhas metálicas e fios foscos de algodão",
      "Calibração da tensão da linha superior para evitar estiramento dos filamentos"
    ],
    "commonErrors": [
      "❌ Insistir em bordar com a mesma agulha depois que ela começou a desfiar a linha, achando que o problema é a marca da linha",
      "❌ Usar agulha de costura comum 70/10 com olho pequeno para bordar em alta velocidade com linha 40wt",
      "❌ Passar a linha por guias metálicos enferrujados, sujos com cola spray seca ou com rebarbas",
      "❌ Borda em velocidade máxima de 1.000 PPM com linhas metálicas secas e sem lubrificante"
    ],
    "troubleshootingTips": [
      "Se a linha começar a esfiar e acumular fiapos no olho da agulha: Troque a agulha imediatamente por uma agulha nova própria para bordado (com olho 2x maior) ou agulha Topstitch/Titânio",
      "Se o desfiamento ocorrer com linha metálica: Passe 2 gotas de silicone líquido para linha no cone e use agulha Metallic tamanho 80/12 ou 90/14",
      "Se a linha estiver desfiando antes mesmo de chegar na agulha: Verifique se o cone de linha não está com rebarbas plásticas na base raspando o fio"
    ],
    "dicaArtrelados": "Linha esfiando como um espanadorzinho em cima da agulha? NÃO PERCA TEMPO: 95% das vezes é a agulha que já deu o tempo de vida dela e criou uma micro-rebarba invisível no furinho! Coloque uma agulha nova e você vai ver a linha deslizar como manteiga!",
    "voceSabia": "Antes de um ponto ser fixado no tecido, cada pedacinho da linha de bordar sobe e desce pelo olho da agulha em média 35 vezes devido ao movimento alternado do estica-fio!",
    "practicalExercise": "Pegue uma agulha velha que desfiou linha e passe um pedaço de fio dental ou linha de costura pelo olho puxando para os lados com os olhos fechados: sinta com a sensibilidade dos dedos os 'degraus' e rebarbas que estavam cortando a sua linha!",
    "quickSummary": "Degradação e quebra de microfilamentos da linha por atrito excessivo com rebarbas ou olho inadequado de agulha.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Cera e Lubrificante de Linha / Óleo de Silicone",
      "Ajuste de Tensão da Linha",
      "Linha de Poliéster 120/2"
    ],
    "tags": [
      "d-063",
      "desfiamento",
      "thread fraying",
      "shredding",
      "fiapos",
      "quebra de linha",
      "agulha gasta",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. Thread Fraying, Eye Abrasion and Friction Mechanics. Utah, 2021.",
      "MADEIRA. Thread Tension & Needle Compatibility Guide: Solving Shredding Issues. Freiburg, 2022."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "d-064-densidade-fracionada-e-pontos-curtos-short-stitch-filter",
    "code": "D-064",
    "term": "Densidade Fracionada e Filtro de Pontos Curtos (Fractional Density & Short Stitch Filter)",
    "pronunciation": "den-si-da-de fra-ci-o-na-da / pon-tos cur-tos",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "summary": "Algoritmo de processamento vetorial que recua as pontadas internas em cantos afiados e curvas fechadas para evitar concentração destrutiva de perfurações de agulha.",
    "origin": "Do latim 'fractio' (divisão em frações) e do inglês 'short stitch' (ponto curto). Recurso patenteado desenvolvido pela Wilcom e Tajima nos anos 1990 para digitalização de precisão.",
    "definition": "A Densidade Fracionada com Filtro de Pontos Curtos (Fractional Stitch Density / Short Stitch Filtering / Corner Stitch Reduction) é o algoritmo matemático de controle de perfuração que analisa a geometria de cantos vivos (pontas agudas em 'V'), curvas sinuosas e vértices estreitos em colunas de ponto cheio (satim). Como os pontos de bordado convergem em direção ao vértice, a densidade física no ponto de encontro tenderia ao infinito, resultando em dezenas de perfurações no mesmo milímetro cúbico. O filtro fracionado encurta e omite alternadamente as penetrações internas, recuando-as em 30% a 60% da largura da coluna, mantendo a cobertura visual sem perfurar o tecido em excesso.",
    "technicalDetails": "Configurável no software de matrizes sob parâmetros como 'Short Stitch Length' e 'Margin Threshold'. Em ângulos inferiores a 45°, o filtro elimina automaticamente até 50% dos pontos internos enquanto preserva a totalidade das penetrações no raio externo do desenho.",
    "howItWorks": [
      "1. O programador cria uma forma vetorial com pontas afiadas (ex: as pontas de uma estrela ou a cauda de uma letra).",
      "2. O motor do software detecta o ângulo agudo estreito no vértice da coluna.",
      "3. O algoritmo de pontos curtos é acionado automaticamente pelo software de bordado.",
      "4. Um ponto viaja até a borda externa, o ponto seguinte recua para 40% da coluna e o terceiro recua para 70%.",
      "5. A máquina executa o bordado suavemente sem concentrar agulhadas no mesmo local.",
      "6. A ponta fica nítida, afiada, sem calombo endurecido no avesso e sem furar o tecido.",
      "7. A agulha não sofre choque mecânico e a linha não arrebenta."
    ],
    "beginnerExplanation": "Sabe quando você vai bordar a pontinha de uma estrela ou um biquinho de triângulo e a máquina fica batendo 15 vezes no mesmo buraquinho até cortar o tecido? O filtro de pontos curtos é uma função inteligente no programa que faz a máquina 'escalonar' os pontinhos para trás, deixando a ponta perfeita e fininha sem judiar do tecido!",
    "applications": [
      "Pontas de estrelas, triângulos, brasões corporativos e bicos geométricos",
      "Serifas e caudas de letras tipográficas elegantes em monogramas",
      "Curvas de 90° a 180° em colunas satim sem acúmulo de linha",
      "Preservação de tecidos finos e malhas contra rasgos em cantos pontiagudos"
    ],
    "commonErrors": [
      "❌ Desativar o filtro de pontos curtos nas propriedades do software para 'garantir cobertura', criando uma bola dura de linha no avesso",
      "❌ Usar recuos muito longos (acima de 80%), criando uma faixa de tecido vazia no meio da coluna satim",
      "❌ Digitalizar vértices muito agudos (menos de 15°) com ponto cheio em vez de finalizar em ponto de costura reto (Run Stitch)"
    ],
    "troubleshootingTips": [
      "Se a ponta da letra estiver fazendo um nó duro que quebra a agulha: Acesse as propriedades de satim no Wilcom/Hatch e marque a caixa 'Pontos Curtos / Short Stitches' com espaçamento automático",
      "Se o bico da estrela furar o tecido: Reduza a densidade da ponta e ative o escalonamento fracionário de pontos",
      "Se a ponta externa parecer falhada: Certifique-se de que os pontos de ancoragem externos continuam indo até o contorno vetorial"
    ],
    "dicaArtrelados": "Ao programar estrelas, brasões ou letras com pontas fininhas no computador: mantenha o recurso de 'Pontos Curtos' (Short Stitches) SEMPRE ativado! Suas pontas vão ficar finas, pontudinhas, brilhantes e nunca mais vão fazer calombos de linha ou rasgar o tecido!",
    "voceSabia": "Sem o filtro de pontos curtos, uma ponta de estrela de 30 graus com densidade padrão de 0.40mm acumula mais de 16 perfurações de agulha em uma área menor que a cabeça de um alfinete!",
    "practicalExercise": "Digitalize um triângulo com ponta bem fina em satim: primeiro sem pontos curtos e veja a nuvem densa de pontinhos azuis amontoados na ponta; agora ative o 'Short Stitch' e observe como os pontos se escalonam em degraus suaves e elegantes!",
    "quickSummary": "Algoritmo que recua alternadamente os pontos em vértices e curvas fechadas para evitar nós duros e furos no tecido.",
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "Auto-Spaced Satin",
      "Densidade de Pontos",
      "Ângulo de Ponto (Stitch Angle)"
    ],
    "tags": [
      "d-064",
      "densidade fracionada",
      "pontos curtos",
      "short stitch",
      "cantos",
      "vertices",
      "programacao",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Cornering, Turning Angles and Short Stitches Master Reference. Sydney, 2022.",
      "PULSE MICROSYSTEMS. Advanced Geometric Vector Filtering and Fractional Satin Control. Dallas, 2021."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "d-065-digitalizacao-manual-punching",
    "code": "D-065",
    "term": "Digitalização Manual / Criação Vetorial Ponto a Ponto (Manual Digitizing & Punching)",
    "pronunciation": "di-gi-ta-li-za-cao ma-nu-al / pan-ching",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "summary": "Método artesanal e profissional de programação de matrizes onde o digitalizador desenha cada vetor, define o sentido das agulhadas e calibra manualmente o underlay e as compensações.",
    "origin": "Do inglês 'punching' (furar cartões perfurados no tear Jacquard e nas primeiras máquinas de bordar automáticas do século XIX) e do latim 'digitale' (feito com os dedos / digital).",
    "definition": "A Digitalização Manual (Manual Digitizing / Professional Embroidery Punching) é a arte e técnica especializada de criar matrizes de bordado computadorizado a partir de ilustrações ou logotipos vetoriais, na qual o programador de matrizes (Puncher / Digitizer) desenha manualmente cada bloco de objeto, define a ordem cronológica exata de costura, seleciona os tipos de pontos adequados (tatami, satim, costura reta), direciona as linhas de fluxo e ângulos de ponto, programa os pontos estruturais de base (underlays) e aplica compensações matemáticas de encolhimento específicas para o tecido em que a peça será confeccionada.",
    "technicalDetails": "Diferencia-se fundamentalmente da 'Auto-Digitalização' (Auto-Digitizing / Varinha Mágica automática dos softwares), que gera excesso descontrolado de pontos, cortes desnecessários e ausência de camadas de suporte. A digitalização manual produz matrizes com até 40% menos pontos, bordado macio, avesso limpo e zero quebra de linha.",
    "howItWorks": [
      "1. O programador importa a imagem de referência em alta resolução no software de criação.",
      "2. Faz o planejamento mental da sequência: o que está no fundo borda primeiro, o que está na frente borda por último.",
      "3. Desenha os blocos com ferramentas vetoriais de curvas de Bézier respeitando a anatomia do desenho.",
      "4. Define a inclinação exata dos ângulos de ponto para criar reflexos de luz e relevo.",
      "5. Aplica camadas de sustentação (underlay) adequadas para a gramatura do tecido final.",
      "6. Insere conexões inteligentes (travamentos e pontos de salto planejados) para evitar cortes de linha excessivos.",
      "7. Testa o arquivo na máquina física para validar a maciez e o caimento do bordado real."
    ],
    "beginnerExplanation": "É o jeito profissional de criar matrizes no computador desenhando tudo com carinho e precisão, ponto por ponto, em vez de usar aquele botão automático do programa que faz tudo torto e cheio de cortes de linha. Uma matriz digitalizada à mão borda muito mais rápido, gasta menos linha e fica linda e macia no pano!",
    "applications": [
      "Logomarcas corporativas de alta fidelidade para camisas polo e uniformes",
      "Matrizes de enxoval de luxo infantil com pontos leves e avesso ultra limpo",
      "Bordados em relevo 3D, apliques e rendas nobres",
      "Otimização de tempo e produtividade industrial em confecções de grande escala"
    ],
    "commonErrors": [
      "❌ Confiar na ferramenta de 'Auto-Digitalização' de um clique para bordar produtos comerciais de clientes",
      "❌ Não planejar a ordem de sobreposição das camadas, fazendo a máquina bordar um detalhe da frente e depois ter que voltar para o fundo",
      "❌ Deixar todos os objetos com o mesmo ângulo reto de ponto (90°), resultando em um bordado plano, sem brilho e sem profundidade visual"
    ],
    "troubleshootingTips": [
      "Se a matriz comprada pela internet estiver quebrando linha e cheia de cortes: Abra no software e redesenhe as conexões manualmente usando ponto de costura reto escondido (Run Stitch connection)",
      "Se o bordado parecer pesado e duro como papelão: Refaça a digitalização manual reduzindo a densidade para 0.42 mm e ajustando o underlay para uma camada única de tatami aberto",
      "Se os contornos ficarem desencaixados do preenchimento: Aumente a compensação de encolhimento manual para 0.35 mm no objeto de fundo"
    ],
    "dicaArtrelados": "O maior diferencial de uma bordadeira profissional de sucesso é saber digitalizar manualmente! Fuja da digitalização automática de um clique: desenhar cada pedacinho da matriz no Wilcom ou no Embird é o que faz o seu bordado ter brilho de seda, avesso limpo e encantar qualquer cliente!",
    "voceSabia": "Nos anos 1970, antes dos computadores pessoais, a profissão de 'Puncher' de bordado exigia furar fitas de papel cartão gigantescas com um teclado mecânico e pedais pesados para programar cada coordenada X e Y da máquina de bordar!",
    "practicalExercise": "Escolha um desenho simples de uma maçã com uma folha. Em vez de usar o botão automático, pegue a ferramenta de desenho manual do seu software e crie a folha com ângulo inclinado a 45° e a maçã com ângulo a 90°. Borde e compare o brilho deslumbrante que os ângulos manuais dão à peça!",
    "quickSummary": "Criação profissional e artesanal de matrizes no computador desenhando cada vetor, ângulo e suporte estrutural.",
    "relatedTerms": [
      "Ângulo de Ponto (Stitch Angle)",
      "Compensação de Encolhimento (Pull Compensation)",
      "Estrutura de Base (Underlay)",
      "Densidade de Pontos"
    ],
    "tags": [
      "d-065",
      "digitalizacao manual",
      "punching",
      "matriz",
      "wilcom",
      "hatch",
      "embird",
      "programacao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "DEVERSON, B. The Master Digitizer: Manual Punching and Machine Stitch Architecture. London, 2021.",
      "WILCOM INTERNATIONAL. Embroidery Studio Manual Digitizing Masterclass Reference. Sydney, 2023."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "d-066-dupla-face-bordado-clean-back",
    "code": "D-066",
    "term": "Dupla Face no Bordado Computadorizado (Clean Back & Reversible Embroidery)",
    "pronunciation": "du-pla fa-ce no bor-da-do",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Técnicas de Bordado",
    "summary": "Método de execução e digitalização especializado para peças transparentes ou com duas vistas, onde o avesso do bordado é perfeitamente idêntico e limpo como a frente.",
    "origin": "Do latim 'duplus' e 'facies' (duas faces). Inspirado no célebre bordado tradicional de dupla face chinês de Suzhou (Xiang embroidery) adaptado ao maquinário computadorizado moderno.",
    "definition": "O Bordado Dupla Face Computadorizado (Clean Back Embroidery / Reversible Machine Embroidery) é a técnica avançada de preparação, digitalização e montagem no bastidor na qual a peça final apresenta um verso absolutamente limpo, estético e simétrico, sem fios soltos, sem nós aparentes, sem entretelas visíveis e com a mesma cor e brilho da linha superior reproduzida na linha de bobina. É a técnica de excelência exigida para artigos nobres que exibem ambos os lados durante o uso, como toalhas de lavabo nobres, xales transparentes de organza, guardanapos de linho, cortinas, véus e bandeiras comemorativas.",
    "technicalDetails": "Requer o uso de linha de bordar idêntica (mesma cor e mesmo fio 40wt de poliéster ou seda) tanto no cone superior quanto na bobina inferior. Utiliza-se entretela hidrossolúvel de filme solúvel em água (Solvy) que desaparece completamente após a lavagem, deixando o avesso do tecido 100% livre de resíduos sintéticos.",
    "howItWorks": [
      "1. A bordadeira enche a bobina da máquina com a mesma linha de bordado colorida usada no carretel de cima.",
      "2. O tecido (linho, cambraia ou toalha) é montado no bastidor com entretela hidrossolúvel na frente e no verso.",
      "3. A tensão superior é ajustada para equilíbrio neutro 1:1 com a tensão inferior (sem puxar mais para baixo).",
      "4. A matriz programada deve conter pontos de amarração invisíveis embutidos sob os próprios pontos cheios.",
      "5. Os cortes de salto são eliminados ou programados para caminhar por baixo de áreas preenchidas.",
      "6. Após o bordado, a peça é enxaguada em água corrente para dissolver toda a entretela.",
      "7. A peça seca exibindo uma frente e um verso igualmente belos e sem defeitos."
    ],
    "beginnerExplanation": "É quando você borda uma toalha ou um guardanapo de linho e o verso do bordado fica tão perfeito, lindo e com a mesma cor da linha da frente que a pessoa nem sabe qual é o lado certo e qual é o lado do avesso! Nada de entretela branca colada nem fiapos soltos atrás!",
    "applications": [
      "Guardanapos de mesa posta e jogos americanos de linho puro",
      "Toalhas de lavabo e banho de alto luxo para presentes finos",
      "Bandeiras de cerimônia, estandartes e flâmulas com dupla visualização",
      "Véus de noiva, cortinas de voil e peças de vestuário transparente"
    ],
    "commonErrors": [
      "❌ Usar linha de bobina branca comum de poliéster fino, deixando o avesso cheio de linhas brancas misturadas com a cor do bordado",
      "❌ Usar entretela rasgável comum que fica presa no avesso e não sai, estragando o visual da peça",
      "❌ Deixar saltos longos de linha atravessando o avesso do bordado",
      "❌ Tensão desregulada que puxa a linha da bobina para a frente do tecido"
    ],
    "troubleshootingTips": [
      "Se o verso estiver mostrando pontinhos brancos: Encha uma canelinha com a mesma linha de cima e calibre a tensão superior e inferior para ficarem perfeitamente equilibradas",
      "Se ficarem resíduos de entretela no avesso: Mergulhe a peça em uma vasilha com água morna por 10 minutos para dissolver completamente a película hidrossolúvel",
      "Se o avesso estiver com pontas de linha arrepiadas: Faça o arremate manual das pontas com uma agulha de mão fina antes de molhar a peça"
    ],
    "dicaArtrelados": "Para fazer um guardanapo de linho chique com avesso perfeito: encha a bobina com a MESMA linha de bordar colorida do cone de cima e use entretela hidrossolúvel que some na água. Seu cliente vai virar o guardanapo do avesso e ficar de boca aberta com a perfeição!",
    "voceSabia": "Na China Imperial, as mestras bordadeiras de Suzhou criavam peças em seda transparente onde bordavam um gato de um lado e um cachorro do outro lado do mesmo tecido usando apenas uma única agulha manual!",
    "practicalExercise": "Encha uma bobina com linha de bordar azul royal igual ao seu cone superior. Monte um pedaço de tricoline branca com entretela hidrossolúvel e borde uma flor simples. Lave na torneira e veja a magia de ter um bordado com frente e verso idênticos!",
    "quickSummary": "Técnica que cria um bordado com avesso limpo e idêntico à frente usando bobina colorida e entretela hidrossolúvel.",
    "relatedTerms": [
      "Entretela Hidrossolúvel",
      "Ajuste de Tensão da Linha",
      "Bainha Aberta Computadorizada",
      "Linha de Bobina"
    ],
    "tags": [
      "d-066",
      "dupla face",
      "clean back",
      "avesso perfeito",
      "mesa posta",
      "guardanapo",
      "enxoval de luxo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MADEIRA. Reversible Embroidery & Water-Soluble Backing Solutions for Fine Linens. Freiburg, 2022.",
      "DEVERSON, B. Clean-Back Machine Techniques and Heirloom Finishing. London, 2021."
    ],
    "updatedAt": "2026-08-22"
  },
  {
    "id": "d-067-desbobinador-conico-rede-contencao-linha",
    "code": "D-067",
    "term": "Desbobinador Cônico e Rede de Contenção de Linha (Thread Net & Cone Unwinder Sock)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Acessórios e Insumos",
    "origin": "Do desenvolvimento de redes elásticas tubulares de poliamida na indústria têxtil para controlar o desbobinamento de fios sintéticos escorregadios e filamentos metálicos.",
    "summary": "Redinha elástica protetora colocada sobre cones de linha de bordar para evitar que o fio despenque, forme laços soltos na base e quebre por atrito na máquina.",
    "definition": "O Desbobinador Cônico e Rede de Contenção de Linha (Thread Netting / Spool Sock) é um acessório têxtil em malha tubular flexível que envolve o cone de linha de poliéster, viscose, fio metálico ou multifilamento, aplicando uma leve pressão perimétrica que impede que os enrolamentos de linha escorreguem para a base do cone (efeito cascata) antes de serem puxados pelo guia-fio superior.",
    "technicalDetails": "Essencial para cones do tipo King Spool (1.000m a 5.000m) e carretéis cruzados (Cross-Wound), mantendo o ângulo de saída vertical constante e eliminando variações repentinas no tensor superior que causam franzimento ou quebra.",
    "beginnerExplanation": "É aquela 'meinha' ou redinha furadinha que a gente veste no cone de linha de bordar. Ela serve para a linha não escorregar toda para o chão ou ficar caindo no pé do cone, evitando que a linha dê nós e arrebente a agulha.",
    "howItWorks": [
      "1. A bordadeira veste a rede de contenção no cone de linha de baixo para cima.",
      "2. Puxa a ponta da linha pelo topo aberto da redinha até o mastro guia-fio.",
      "3. A rede exerce uma contenção suave enquanto o cone gira ou desbobina estático.",
      "4. Fios escorregadios (como linha dourada metálica ou trilobal 100% poliéster) saem sem criar laçadas caídas.",
      "5. A máquina borda em velocidade máxima sem paradas por travamento de cone."
    ],
    "applications": [
      "Uso indispensável com fios metálicos (dourado, prateado e furta-cor)",
      "Cones grandes de 4.000m ou 5.000m de poliéster em máquinas domésticas e industriais",
      "Linhas finas de viscose ou fios de alta torção que enrolam no próprio eixo"
    ],
    "commonErrors": [
      "❌ Apertar a rede em excesso no topo do cone, travando a passagem da linha e aumentando a tensão a ponto de arrebentar o fio.",
      "❌ Deixar o cone de fio metálico solto sem rede, permitindo que a linha caia e se enrole no pino suporte do carretel.",
      "❌ Usar pedaços de rede rasgados que enroscam na linha durante o bordado."
    ],
    "troubleshootingTips": [
      "Se a linha estiver arrebentando a cada 2 minutos com fio metálico: Vista a redinha cobrindo do meio para baixo do cone e diminua a velocidade da máquina para 500 PPM.",
      "Se a linha estiver saindo muito dura da redinha: Corte a redinha na metade do comprimento para reduzir a pressão elástica."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "Topstitch 90/14 ou Metallic Needle 80/12",
      "stabilizer": "Adequada ao tecido",
      "speedPPM": "500 a 700 PPM para fios metálicos com rede"
    },
    "dicaArtrelados": "Ao bordar com linha metálica dourada ou prateada, vista a redinha cobrindo todo o cone e passe uma gota de silicone líquido têxtil na rede! A linha deslizará como seda, sem arrebentar nenhuma vez!",
    "voceSabia": "A maioria dos fabricantes de máquinas multiagulhas e linhas premium (como Madeira e Gutermann) inclui pacotes de redes de contenção originais na caixa de acessórios básicos da máquina.",
    "practicalExercise": "Pegue um cone de linha metálica e puxe a ponta sem a rede: repare como a linha cai e se enrola. Agora coloque a rede de contenção e puxe novamente: veja como o fio sai perfeitamente alinhado e controlado!",
    "quickSummary": "Rede elástica tubular colocada sobre o cone de linha para evitar o desmoronamento e enrosco de fios escorregadios e metálicos.",
    "relatedTerms": [
      "Carretel de Linha",
      "Desbobinamento de Linha e Sentido do Fio",
      "Ajuste de Tensão da Linha",
      "Cera e Lubrificante de Linha / Óleo de Silicone Líquido"
    ],
    "tags": [
      "d-067",
      "redinha",
      "rede de contencao",
      "cone de linha",
      "fio metalico",
      "desbobinador",
      "acessorios",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. Thread Delivery Systems: Cone Unwinding & Thread Net Guidelines. St. George, 2022.",
      "MADEIRA. Metallic Embroidery Thread Handling & Spool Net Application. Freiburg, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "d-068-deslocamento-gradual-ponto-angulo-curvatura",
    "code": "D-068",
    "term": "Deslocamento Gradual de Ponto em Ângulo / Curvatura de Ponto (Stitch Angle Shifting & Wave Effect)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programação de Bordado",
    "origin": "Do desenvolvimento de ferramentas de preenchimento inteligente de contorno complexo com linhas de direção múltiplas nos softwares Wilcom ES e Compucon.",
    "summary": "Técnica de programação que faz a direção dos pontos girar suavemente acompanhando a anatomia do desenho, criando reflexos de luz e movimento natural no fio.",
    "definition": "O Deslocamento Gradual de Ponto em Ângulo (Curved Stitch Angles / Flowing Stitch Direction) é o método avançado de digitalização de matrizes em que múltiplos ângulos de inclinação são distribuídos ao longo de um objeto sinuoso (como uma fita ondulada, corpo de animal, folha ou pétala de rosa), fazendo com que cada ponto siga a curvatura orgânica da forma em vez de manter uma direção fixa e estática.",
    "technicalDetails": "Permite criar o efeito de gradiente óptico de brilho (Sheen Gradient), já que o filamento de poliéster reflete a luz ambiente de acordo com o ângulo em que está assentado sobre o tecido.",
    "beginnerExplanation": "Em vez de bordar tudo reto na mesma direção, os pontos vão fazendo a curva do desenho devagarzinho, como se fossem a pintura de um pincel. Quando a luz bate no bordado, a linha brilha e parece que o desenho está vivo e em movimento!",
    "howItWorks": [
      "1. O programador cria o contorno do objeto no software de matrizes.",
      "2. Em vez de definir apenas um ângulo global, adiciona várias 'linhas de direção de ponto' ao longo da curva.",
      "3. O software interpola matematicamente a transição angular entre cada linha guia.",
      "4. A máquina executa os pontos girando fração por fração de grau a cada batida de agulha.",
      "5. O resultado é um preenchimento curvo perfeito, anatômico e sem cantos duros."
    ],
    "applications": [
      "Pétalas de flores, folhas, ramos e arabescos clássicos",
      "Cabelos, pelos de animais e penas de pássaros com aspecto hiper-realista",
      "Fitas decorativas, laços, bandeiras ondulantes e letras cursivas grossas"
    ],
    "commonErrors": [
      "❌ Colocar linhas de ângulo muito próximas e em direções opostas repentinas, criando um ponto de cruzamento que forma um 'caroço' duro na matriz.",
      "❌ Não ativar a compensação de repuxo adequada para objetos curvos, deixando frestas de tecido aparecendo nas dobras da curva."
    ],
    "troubleshootingTips": [
      "Se a linha estiver amontoando no lado interno da curva: Ative a opção 'Pontos Curtos Automáticos' (Auto Short Stitch) no menu do software para desbastar o raio interno.",
      "Se a curvatura parecer serrilhada: Aumente a quantidade de linhas de direção intermediárias para suavizar a transição angular."
    ],
    "recommendedSettings": {
      "density": "0.40 mm a 0.42 mm",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela Rasga-Fácil 80g",
      "speedPPM": "650 a 800 PPM"
    },
    "dicaArtrelados": "Ao criar folhas e pétalas, nunca use um único ângulo reto de 45°! Adicione 3 linhas de ângulo acompanhando a nervura central da folha. A diferença de brilho e realismo no bordado pronto é simplesmente profissional!",
    "voceSabia": "O brilho característico das linhas de bordado de poliéster trilobal ocorre porque cada filamento tem seção transversal triangular, funcionando como pequenos prismas que refletem a luz de acordo com o ângulo do ponto!",
    "practicalExercise": "No seu software, desenhe uma letra 'S' em ponto cheio com ângulo único de 90° e outra letra 'S' com ângulos curvos acompanhando a letra. Borde as duas lado a lado e compare o brilho sob a luz do ateliê!",
    "quickSummary": "Distribuição de ângulos variáveis que acompanham as curvas do desenho, criando reflexos de luz naturais e acabamento orgânico.",
    "relatedTerms": [
      "Ângulo de Ponto (Stitch Angle)",
      "Curva Bézier na Digitalização",
      "Ponto Cheio (Satin)",
      "Brilho da Linha de Bordado"
    ],
    "tags": [
      "d-068",
      "angulo curvo",
      "curvatura de ponto",
      "brilho",
      "realismo",
      "wilcom",
      "matriz",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. Stitch Angles and Flowing Curves Mastery Guide. Sydney, 2023.",
      "KAHN, Max. Digitizing Masterclass for Commercial Embroidery. New York: Textile Press, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "d-069-desativacao-ponto-curto-curvas-fechadas",
    "code": "D-069",
    "term": "Desativação de Ponto Curto em Curvas Fechadas (Short Stitch Inactivation in Acute Curves)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "origin": "Do controle de parâmetros algorítmicos em digitalização avançada para gestão de furos na chapa e cortes de tecido em bordados finos.",
    "summary": "Configuração no software que desabilita ou recalcula a filtragem de micropontos em curvas muito estreitas para preservar a cobertura total sem perfurar o tecido.",
    "definition": "A Desativação ou Calibração de Ponto Curto em Curvas Fechadas (Short Stitch Control / Custom Corner Stitch Filter) é o ajuste técnico nos parâmetros de preenchimento em ponto cheio (Satin) que define se o software deve ou não suprimir alternadamente os pontos internos de uma curva acentuada. Quando desativado ou calibrado com precisão, garante que áreas delicadas (como pontas de folhas ou cantos de letras góticas) mantenham o contorno nítido sem criar buracos no tecido por perfuração repetida.",
    "technicalDetails": "Por padrão, o filtro de pontos curtos remove até 50% dos pontos no raio interno de uma curva para evitar acúmulo. No entanto, em linhas muito finas (menores que 1.5 mm), essa filtragem pode deixar o tecido exposto, exigindo a desativação manual ou redução da porcentagem de filtragem para 20%.",
    "beginnerExplanation": "Quando a máquina faz uma curva bem fechadinha, ela pode dar muitas agulhadas no mesmo buraquinho e rasgar o tecido. Esse ajuste no computador decide se a máquina pula alguns pontinhos por dentro da curva para não furar o pano, mantendo o desenho bonito e seguro.",
    "howItWorks": [
      "1. O programador identifica um objeto com curvas fechadas ou cantos agudos na matriz.",
      "2. Acessa as propriedades do objeto na aba 'Pontos Curtos / Short Stitches'.",
      "3. Avalia a largura da coluna: se for muito estreita, reduz o comprimento mínimo do filtro.",
      "4. Define se o ponto curto será alternado em 1:1, 1:2 ou desativado para aquele segmento específico.",
      "5. O software gera a distribuição perfeita de furos na chapa de agulha sem picotar o tecido.",
      "6. A peça borda com contorno liso e sem rasgos na borda."
    ],
    "applications": [
      "Letras pequenas com serifas ou detalhes góticos pontiagudos",
      "Contornos de olhos, bicos e detalhes em bordados realistas miniaturizados",
      "Bordados em tecidos delicados que picotam fácil (seda, cetim, organza e malha fina)"
    ],
    "commonErrors": [
      "❌ Deixar o filtro padrão de ponto curto ativado em colunas finas de 1 mm, resultando em pontas desdentadas e tecido aparente.",
      "❌ Desativar o filtro em colunas largas e pesadas de 6 mm, gerando acúmulo de linha e quebra de agulha no vértice interno."
    ],
    "troubleshootingTips": [
      "Se a curva fechada da letra estiver abrindo um buraco no tecido: Ative o ponto curto em nível alto (40%) e diminua a densidade do objeto.",
      "Se a ponta da letra estiver parecendo 'mordida' ou rala: Reduza o filtro de ponto curto para 15% ou desative-o apenas naquele objeto fino."
    ],
    "recommendedSettings": {
      "density": "0.38 mm a 0.40 mm",
      "needleType": "65/9 ou 75/11 Ponta Aguda Microtex",
      "stabilizer": "Entretela Rasga-Fácil de boa sustentação",
      "speedPPM": "600 PPM em detalhes pequenos"
    },
    "dicaArtrelados": "Em fontes pequenas (menores que 8 mm de altura), configure a compensação de canto para 'Canto Inteligente' (Smart Corner) e ajuste o ponto curto para 20%! Suas letrinhas ficarão nítidas e com as pontas perfeitamente desenhadas!",
    "voceSabia": "Sem o recurso de ponto curto, uma curva fechada de 90 graus em ponto cheio chegaria a concentrar até 12 perfurações de agulha em um espaço de apenas meio milímetro, cortando o tecido como se fosse uma tesoura!",
    "practicalExercise": "Programe um triângulo pontiagudo com ponto curto 0% e outro com ponto curto 50%. Aplique o simulador de pontos na tela com zoom máximo e veja como o segundo distribui os furos suavemente ao longo do canto!",
    "quickSummary": "Controle algorítmico no software que gerencia a quantidade de pontos no interior de curvas fechadas para evitar rasgos no tecido.",
    "relatedTerms": [
      "Compensação de Fração de Ponto e Ponto Curto Automático",
      "Cantos Vivos e Esquadro de Ponto",
      "Ponto Cheio (Satin)",
      "Densidade de Pontos"
    ],
    "tags": [
      "d-069",
      "ponto curto",
      "curvas fechadas",
      "filtragem",
      "letras pequenas",
      "wilcom",
      "matriz",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. Advanced Digitizing: Corner Stitching and Short Stitch Filtering. Sydney, 2022.",
      "DEVEREUX, Keith. The Science of Stitch Structure and Needle Penetration. Nottingham, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "d-070-densidade-progressiva-sombra-relevo-optico",
    "code": "D-070",
    "term": "Densidade Progressiva para Sombra e Relevo Óptico (Progressive Shading Density)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "origin": "Da fusão da técnica de pintura de agulha (Thread Painting) com o controle paramétrico de densidade gradiente nos softwares modernos de matrizes.",
    "summary": "Técnica de programação onde a densidade varia gradualmente de fechada para aberta no mesmo objeto, criando transição de cor, luz, sombra e volume 3D.",
    "definition": "A Densidade Progressiva para Sombra e Relevo Óptico (Gradient Density / Variable Stitch Pitch) é a técnica de digitalização que programa um único objeto de preenchimento (Tatami ou Satin) com espaçamento de pontos dinâmico, variando suavemente de uma área densa e compacta (ex: 0.35 mm) até uma área rarefeita e translúcida (ex: 1.20 mm ou 2.0 mm). Essa variação permite misturar duas cores sobrepostas ou deixar o tecido de fundo transparecer, criando efeitos de luz, sombra e volume tridimensional sem cortes de linha.",
    "technicalDetails": "Permite curvas de aceleração linear, exponencial ou senoidal na distribuição de pontos, sendo fundamental para bordados realistas (animais, rostos, paisagens e frutas) e efeitos de metal polido.",
    "beginnerExplanation": "É como fazer um sombreado no desenho usando lápis de cor: você aperta forte de um lado e vai soltando a mão devagarzinho para clarear. No bordado, a máquina dá muitos pontinhos juntos onde é escuro e vai afastando os pontos onde é claro, criando uma pintura linda com relevo!",
    "howItWorks": [
      "1. O programador cria o primeiro objeto de base com densidade progressiva (ex: escuro embaixo clareando para cima).",
      "2. Cria um segundo objeto sobreposto com cor mais clara e densidade invertida (aberto embaixo fechando em cima).",
      "3. Os pontos das duas cores se intercalam perfeitamente no meio do caminho.",
      "4. A máquina borda primeiro a cor escura e depois a clara com o mesmo ângulo de ponto.",
      "5. A fusão das duas cores cria um degradê contínuo e sem emendas marcadas."
    ],
    "applications": [
      "Bordados realistas de rostos humanos, pelagem de animais e plumagem de aves",
      "Efeitos de brilho metálico em letras douradas, prata e bronze",
      "Pétalas de flores com transição suave do miolo para as bordas",
      "Logotipos modernos com estética de gradiente de cor"
    ],
    "commonErrors": [
      "❌ Usar ângulos de ponto diferentes nas camadas sobrepostas de degradê, quebrando a harmonia da mistura de fios.",
      "❌ Programar a transição com início muito brusco, criando uma linha de corte visível em vez de uma sombra suave.",
      "❌ Deixar a camada de cima com densidade muito pesada, cobrindo totalmente a cor de baixo."
    ],
    "troubleshootingTips": [
      "Se o degradê ficou com uma faixa dura no meio: Aumente o comprimento da zona de transição no software e use o perfil de gradiente senoidal (suave).",
      "Se o tecido de fundo estiver aparecendo onde não deveria: Coloque uma camada prévia de tatami leve de suporte sob a área antes de iniciar o sombreado."
    ],
    "recommendedSettings": {
      "density": "Variação de 0.35 mm a 1.50 mm no mesmo objeto",
      "needleType": "75/11 Ponta Bola ou Microtex 70/10",
      "stabilizer": "Entretela Rasga-Fácil dupla ou Malha Estável",
      "speedPPM": "600 a 750 PPM"
    },
    "dicaArtrelados": "Para fazer efeito de ouro envelhecido ou brilho 3D em letras de brasão: programe a base com linha marrom em densidade progressiva de 0.40 mm a 1.0 mm e cubra com linha dourada em densidade invertida. O resultado parece joia reluzente!",
    "voceSabia": "A técnica de densidade progressiva foi desenvolvida originalmente no Japão para reproduzir a milenar técnica de bordado manual 'Nihon Shishu' em máquinas computadorizadas Tajima e Barudan.",
    "practicalExercise": "Crie um quadrado no software com preenchimento tatami e ative o efeito 'Gradiente de Densidade' variando de 0.35 mm na esquerda até 1.20 mm na direita. Borde em linha vermelha sobre tecido branco e veja o lindo degradê surgir!",
    "quickSummary": "Variação programada no espaçamento de pontos que cria sombras, luz e fusão de cores para efeito realista e tridimensional.",
    "relatedTerms": [
      "Degradê de Pontos / Ponto Sombreado",
      "Densidade de Pontos",
      "Pintura de Agulha (Thread Painting)",
      "Ponto Tatami"
    ],
    "tags": [
      "d-070",
      "densidade progressiva",
      "sombreado",
      "degrade",
      "realismo",
      "relevo optico",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. Color Blending and Gradient Stitching Manual. Sydney, 2023.",
      "GORDON, Jill. Machine Embroidery: The Art of Realistic Shading. London, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "d-071-dreno-eletricidade-estatica-maquinas-bordar",
    "code": "D-071",
    "term": "Dreno de Eletricidade Estática em Máquinas de Bordar (Static Electricity Grounding & Discharge)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Manutenção e Cuidados",
    "origin": "Da eletrotécnica aplicada a equipamentos industriais automatizados para proteção de placas eletrônicas e microprocessadores contra descargas eletrostáticas (ESD).",
    "summary": "Sistema e procedimentos de aterramento elétrico para dissipar cargas estáticas geradas pelo atrito de linhas de poliéster e tecidos sintéticos em alta velocidade.",
    "definition": "O Dreno de Eletricidade Estática (ESD Protection & Machine Grounding) é o conjunto de medidas técnicas de aterramento e descarga eletrostática na carcaça, chapa de agulha e mastro guia-fio da máquina de bordar. O atrito constante de linhas 100% poliéster e tecidos sintéticos (como tactel, microfibra e nylon) em ambientes secos com ar-condicionado gera milhares de volts de eletricidade estática que podem causar travamentos no painel LCD, descalibração do pantógrafo ou queima de sensores ópticos.",
    "technicalDetails": "Requer tomada com aterramento padrão (fio terra com resistência inferior a 5 ohms), controle de umidade relativa do ar no ateliê entre 45% e 60% e fios de cobre ou escovas de descarga estática nos suportes de cone em linhas de alta produção.",
    "beginnerExplanation": "Quando você borda muito rápido com linha de poliéster em dia seco ou no ar-condicionado, a linha gera choque de eletricidade estática. Se a máquina não tiver um bom fio terra, esse choque pode fazer a tela digital piscar, travar no meio do bordado ou queimar uma plaquinha cara da máquina.",
    "howItWorks": [
      "1. Durante o bordado em alta rotação (800 PPM), o atrito do fio de poliéster nos tensores gera cargas elétricas estáticas.",
      "2. As cargas acumulam na carcaça metálica e no pantógrafo da máquina.",
      "3. O sistema de aterramento conduz com segurança essa eletricidade para o solo pelo pino terra da tomada.",
      "4. Se o ateliê estiver muito seco, o uso de umidificador de ar ou spray antiestático no suporte de linhas neutraliza as cargas.",
      "5. A eletrônica da máquina opera com estabilidade total e sem bugs ou reinicializações involuntárias."
    ],
    "applications": [
      "Ateliês e fábricas climatizadas com ar-condicionado contínuo e clima seco",
      "Bordados em larga escala em tecidos sintéticos (tactel, oxford, nylon e soft)",
      "Proteção de máquinas modernas com telas touchscreen e conexão Wi-Fi"
    ],
    "commonErrors": [
      "❌ Quebrar ou remover o terceiro pino (pino terra) do plugue da máquina para usar em tomadas antigas de dois furos.",
      "❌ Ligar a máquina de bordar na mesma extensão ou régua de ferro de passar roupa a vapor, causando ruído e surtos elétricos.",
      "❌ Deixar o ateliê com umidade abaixo de 30%, aumentando as faíscas estáticas."
    ],
    "troubleshootingTips": [
      "Se a tela da máquina piscar ou reiniciar sozinha quando você toca no bastidor: Desligue imediatamente e providencie a instalação de uma tomada com aterramento verdadeiro com eletricista.",
      "Se você estiver levando pequenos choques ao tocar na máquina: Coloque um tapete de borracha antiestático no chão onde a operadora trabalha e use umidificador de ambiente."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "N/A",
      "stabilizer": "N/A",
      "speedPPM": "Velocidade padrão com aterramento ativo"
    },
    "dicaArtrelados": "Nunca corte o pino terra da sua máquina de bordar! A placa mãe e o visor touch custam caro para consertar. Um bom aterramento elétrico no ateliê garante que sua máquina dure muitos anos sem dar nenhum susto nem queimar à toa!",
    "voceSabia": "O simples movimento de desenrolar 1.000 metros de linha de poliéster em alta velocidade pode gerar uma carga estática de mais de 10.000 volts, suficiente para danificar circuitos integrados de microprocessadores!",
    "practicalExercise": "Verifique a tomada onde sua máquina está ligada. Certifique-se de que o plugue tem os 3 pinos originais e teste se a tomada possui aterramento real com um testador de tomadas simples.",
    "quickSummary": "Procedimentos e aterramento elétrico para eliminar cargas estáticas geradas pelo atrito de linhas sintéticas e proteger a eletrônica da máquina.",
    "relatedTerms": [
      "Operação da Máquina",
      "Manutenção Preventiva",
      "Carcaça da Máquina de Bordado",
      "Controle de Velocidade"
    ],
    "tags": [
      "d-071",
      "eletricidade estatica",
      "aterramento",
      "dreno estatico",
      "protecao eletrica",
      "manutencao",
      "seguranca",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA. Technical Maintenance Guide: Electrical Grounding and ESD Protection. Nagoya, 2022.",
      "BROTHER. Safety and Power Installation Standards for Embroidery Machines. Nagoya, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "d-072-duplicacao-contorno-compensacao-sobreposicao",
    "code": "D-072",
    "term": "Duplicação de Contorno com Compensação de Sobreposição (Contour Duplication with Overlap Compensation)",
    "level": "Intermediário 🟡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "origin": "Das regras fundamentais de engenharia de digitalização de matrizes para evitar frestas e deslocamentos de registro entre preenchimento e contorno final.",
    "summary": "Técnica de matriz que cria uma margem de segurança e sobreposição calculada entre o preenchimento de fundo e o contorno externo para que eles nunca se desencontrem.",
    "definition": "A Duplicação de Contorno com Compensação de Sobreposição (Overlap Border Compensation / Registration Trapping) é o procedimento técnico executado no software de bordado em que o contorno de um objeto preenchido é ligeiramente expandido para dentro da área de preenchimento (sobreposição de 0.8 mm a 1.2 mm). Isso assegura que, mesmo com a tração mecânica do tecido durante a costura (repuxo), o contorno final de ponto cheio ou ponto cordão cubra perfeitamente a borda do desenho sem deixar fendas de tecido cru aparentes.",
    "technicalDetails": "Diferencia-se da simples duplicata geométrica por aplicar compensação direcional de tração (Pull Compensation) apenas no eixo perpendicular à direção do ponto, alinhando a sequência de costura do centro para fora.",
    "beginnerExplanation": "Sabe quando você borda um desenho e o contorno preto de fora fica torto, saindo do lugar e deixando um espaço em branco feio entre o desenho e o contorno? Essa técnica faz o contorno 'entrar' um milímetrozinho para dentro da cor de fundo, garantindo que o encaixe fique sempre perfeito, mesmo que o tecido puxe um pouco!",
    "howItWorks": [
      "1. O programador cria o objeto de preenchimento de fundo (ex: círculo vermelho em tatami).",
      "2. Duplica a forma vetorial para gerar o contorno de acabamento (ex: ponto cheio preto).",
      "3. Aplica uma sobreposição para dentro de 1.0 mm (Overlap/Trapping).",
      "4. Adiciona ponto de suporte (underlay) no preenchimento para firmar o tecido na entretela.",
      "5. Programa a ordem de costura para bordar o fundo primeiro e o contorno logo em seguida.",
      "6. Na máquina, o contorno fecha perfeitamente colado ao desenho, sem frestas."
    ],
    "applications": [
      "Emblemas, brasões e logotipos corporativos com contornos contrastantes",
      "Personagens infantis e desenhos animados com traços pretos externos fortes",
      "Bordados em tecidos elásticos (malha, pique, moletom e lycra)"
    ],
    "commonErrors": [
      "❌ Desenhar o contorno encostando exatamente na borda teórica do desenho (sem sobreposição), fazendo o repuxo abrir uma fresta branca entre o fundo e a borda.",
      "❌ Fazer sobreposição excessiva de mais de 2.5 mm, criando uma faixa dura e grossa no encontro dos pontos."
    ],
    "troubleshootingTips": [
      "Se o contorno estiver saindo fora do lugar no lado direito: Aumente a sobreposição para 1.2 mm e aumente a compensação de repuxo do preenchimento no software.",
      "Se o contorno estiver quebrando linha ao passar por cima do fundo: Reduza a densidade do preenchimento nas bordas ou mude o underlay de tatami para traço simples."
    ],
    "recommendedSettings": {
      "density": "Contorno em Satin 0.40 mm com sobreposição de 1.0 mm",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela Rasga-Fácil 80g ou Entretela de Malha",
      "speedPPM": "700 a 800 PPM"
    },
    "dicaArtrelados": "Regra de ouro do ateliê Artrelados: NUNCA faça contorno de bordado encostando na beiradinha exata! Deixe sempre 1 milímetro de preenchimento passando por baixo do contorno. É o segredo para ter matrizes perfeitas que nunca saem do registro!",
    "voceSabia": "Na indústria gráfica de impressão offset, esse mesmo conceito de sobreposição preventiva para evitar frestas brancas entre cores é chamado de 'Trapping' (armadilha de cores).",
    "practicalExercise": "No seu software, desenhe um quadrado azul e coloque um contorno preto de 2 mm de largura com 1 mm de sobreposição para dentro. Borde em um pedaço de malha e veja como o encaixe fica 100% perfeito e sem nenhuma folga!",
    "quickSummary": "Técnica de matriz que cria uma margem de sobreposição entre o fundo e o contorno para evitar frestas e desalinhamento causados pelo repuxo do tecido.",
    "relatedTerms": [
      "Alinhamento de Contorno (Registration Alignment)",
      "Compensação de Puxão (Pull Compensation)",
      "Contorno de Bordado",
      "Ponto Cheio (Satin)"
    ],
    "tags": [
      "d-072",
      "contorno",
      "sobreposicao",
      "registro",
      "trapping",
      "alinhamento",
      "matriz",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. EmbroideryStudio: Outlines, Borders and Overlap Compensation Guide. Sydney, 2023.",
      "KAHN, Max. Commercial Embroidery Fundamentals. New York: Textile Press, 2021."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "d-073-desencaixe-encaixe-rapido-bastidor-trava-magnetica",
    "code": "D-073",
    "term": "Desencaixe e Encaixe Rápido de Bastidor / Trava Magnética (Quick-Release Hoop Clamping System)",
    "level": "Iniciante 🟢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Equipamentos e Máquinas",
    "origin": "Do desenvolvimento de sistemas ergonômicos de fixação rápida e bastidores magnéticos de neodímio para alta produtividade em confecções e ateliês modernos.",
    "summary": "Mecanismo de engate rápido e bastidores magnéticos que travam o tecido no bastidor instantaneamente com ímãs sem necessidade de parafusos manuais.",
    "definition": "O Desencaixe e Encaixe Rápido de Bastidor com Trava Magnética (Magnetic Quick-Release Hoop System) é a tecnologia de fixação que substitui os tradicionais anéis plásticos com parafuso de aperto manual por aros dotados de potentes ímãs industriais de neodímio. O sistema permite posicionar, travar e retirar tecidos finos, toalhas grossas ou peças já costuradas em segundos, eliminando o cansaço dos punhos da bordadeira e prevenindo marcas de esmagamento (marcas de bastidor) nos tecidos delicados.",
    "technicalDetails": "Proporciona pressão perimétrica homogênea e autorregulável que se adapta automaticamente a qualquer espessura de material (de 0.2 mm a 8.0 mm) sem exigir ajustes mecânicos de parafusos.",
    "beginnerExplanation": "É um bastidor moderno que fecha com ímãs super fortes em vez de você ter que ficar apertando parafuso com a mão até doer os dedos. Você coloca a entretela, o tecido em cima e encosta o aro de cima: ele gruda na hora, não marca a toalha e você tira num clique rápido!",
    "howItWorks": [
      "1. A bordadeira apoia a base inferior do bastidor magnético na bancada com a entretela.",
      "2. Posiciona a peça a ser bordada (ex: camiseta ou toalha) sobre a base.",
      "3. Aproxima o aro superior magnético, que é atraído e trava instantaneamente o tecido com pressão uniforme.",
      "4. Encaixa o bastidor no suporte do pantógrafo da máquina através da trava de engate rápido.",
      "5. Borda a matriz com total estabilidade e sem folgas.",
      "6. Ao terminar, puxa a alça de desencaixe rápido e libera a peça pronta em um segundo."
    ],
    "applications": [
      "Produção de grande escala de uniformes, camisas polo e camisetas",
      "Peças delicadas que marcam fácil (veludo, camurça, cetim e couro sintético)",
      "Toalhas felpudas grossas e peças com zíper ou botões próximos à borda do bastidor",
      "Ergonomia para operadoras evitando tendinite e dores nas mãos"
    ],
    "commonErrors": [
      "❌ Deixar os dedos entre os ímãs de neodímio durante o fechamento do bastidor, causando beliscões fortes.",
      "❌ Aproximar cartões de crédito, relógios mecânicos ou pendrives dos ímãs de alta intensidade.",
      "❌ Puxar o tecido após o fechamento magnético, desfiando a trama."
    ],
    "troubleshootingTips": [
      "Se o tecido escorregar no bastidor magnético em bordados pesados: Use entretela adesiva ou coloque uma tira de entretela rasga-fácil dobrada nas bordas para aumentar a fricção.",
      "Se o bastidor estiver difícil de soltar na bancada: Deslize o aro superior lateralmente em vez de puxar para cima reto."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "Adequada ao tecido",
      "stabilizer": "Entretela Rasga-Fácil ou Hidrossolúvel",
      "speedPPM": "Velocidade máxima suportada pela máquina"
    },
    "dicaArtrelados": "Os bastidores magnéticos são a salvação para bordar toalhas de veludo e camisas de linho! Eles nunca deixam aquele 'aro brilhante' de tecido esmagado que o bastidor tradicional com parafuso costuma deixar!",
    "voceSabia": "Os ímãs de neodímio utilizados em bastidores magnéticos profissionais são compostos por uma liga de neodímio, ferro e boro (NdFeB), sendo os ímãs permanentes mais potentes já criados pela ciência moderna!",
    "practicalExercise": "Experimente colocar uma toalha de banho bem grossa em um bastidor magnético e outra no bastidor comum de parafuso. Compare a rapidez do encaixe e veja como no magnético a toalha não fica deformada nem mastigada!",
    "quickSummary": "Sistema de bastidores com ímãs de alta potência que prendem o tecido instantaneamente sem parafusos e sem marcar a peça.",
    "relatedTerms": [
      "Aro do Bastidor / Anel Interno e Externo",
      "Clipe de Bastidor e Travas de Retenção de Tecido",
      "Operação da Máquina",
      "Marcas de Bastidor (Hoop Burn)"
    ],
    "tags": [
      "d-073",
      "bastidor magnetico",
      "engate rapido",
      "ima de neodimio",
      "ergonomia",
      "produtividade",
      "acessorios",
      "artrelados"
    ],
    "bibliographicReferences": [
      "MIGHTY HOOP. Magnetic Hoop System Technical Specifications and Safety Manual. Minneapolis, 2023.",
      "SEW TECH. Magnetic Quick-Release Embroidery Clamping Guidelines. Shenzhen, 2022."
    ],
    "updatedAt": "2026-08-24"
  },
  {
    "id": "d-074-divisao-ponto-longo-ponto-dividido-automatico",
    "code": "D-074",
    "term": "Divisão de Ponto Longo e Ponto Dividido Automático (Auto-Split Long Stitches)",
    "level": "Avançado 🔴",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programação de Bordado",
    "origin": "Da evolução dos processadores de matrizes nos softwares de digitalização para respeitar o limite mecânico de amplitude da lançadeira e da agulha.",
    "summary": "Recurso que divide automaticamente pontos cheios excessivamente largos em múltiplos pontos menores para evitar fios soltos que enroscam e quebram.",
    "definition": "A Divisão de Ponto Longo (Auto-Split Satin / Split Stitch Function) é o algoritmo presente nos softwares de digitalização de bordado que fraciona automaticamente pontos cheios (Satin) cuja largura ultrapasse o limite de segurança estrutural (geralmente entre 7.0 mm e 9.0 mm). O software insere uma ou mais penetrações intermediárias de agulha com padrão alternado, impedindo que o fio fique frouxo, sem sustentação ou vulnerável a desfiamentos durante o uso e a lavagem da peça.",
    "technicalDetails": "Permite configurar o comprimento máximo de ponto (ex: limite de 7.5 mm) e o padrão de intercalação dos furos intermediários (estilo randomizado para acabamento invisível ou estilo texturizado para efeitos decorativos).",
    "beginnerExplanation": "A máquina de bordar não pode dar um ponto comprido demais de um lado até o outro (como um ponto de mais de 1 centímetro), porque o fio fica solto e frouxo, podendo enroscar no dedo da pessoa ou rasgar na máquina de lavar. Essa função divide esse ponto grandão em pontinhos menores firmes e seguros sem estragar o visual do bordado.",
    "howItWorks": [
      "1. O programador cria uma letra grande ou figura em ponto cheio que possui larguras variando entre 4 mm e 12 mm.",
      "2. No menu de propriedades do ponto cheio, ativa a opção 'Divisão Automática / Auto-Split'.",
      "3. Define o comprimento máximo permitido (ex: 7.0 mm).",
      "4. Nos trechos estreitos, a máquina borda ponto cheio liso tradicional.",
      "5. Nos trechos que ultrapassam 7 mm, o software insere penetrações intermediárias imperceptíveis.",
      "6. A matriz borda macia, resistente e com acabamento plano e durável."
    ],
    "applications": [
      "Letras grandes em brasões, jaquetas universitárias e toalhas de banho",
      "Figuras com folhas largas, asas de pássaros e pétalas volumosas",
      "Uniformes esportivos submetidos a atrito constante e lavagens pesadas",
      "Prevenção de paradas na máquina por limite máximo de deslocamento de quadro"
    ],
    "commonErrors": [
      "❌ Deixar pontos cheios com mais de 10 mm sem divisão automática, resultando em laços frouxos que se soltam na primeira lavagem do cliente.",
      "❌ Alinhar todas as divisões na mesma linha reta, criando uma 'risca' feia no meio da letra em vez de uma divisão suave intercalada."
    ],
    "troubleshootingTips": [
      "Se o cliente reclamou que o fio da letra grande está repuxando ou solto: Abra a matriz no software, ative 'Auto-Split' com limite de 7.0 mm e marque a opção 'Divisão Aleatória / Random Split'.",
      "Se a máquina acusar erro de 'Salto Excedido / Max Stitch Length': Aplique a divisão de pontos longos para que nenhum ponto ultrapasse 9.0 mm."
    ],
    "recommendedSettings": {
      "density": "0.40 mm com divisão ativa acima de 7.0 mm",
      "needleType": "75/11 ou 90/14 Ponta Bola",
      "stabilizer": "Entretela Rasga-Fácil 80g",
      "speedPPM": "750 a 850 PPM"
    },
    "dicaArtrelados": "Sempre ative a 'Divisão Automática de Ponto' com valor máximo de 7.0 mm em letras grandes! Use a opção de divisão com textura sutil ou aleatória. O bordado fica luxuoso, resistente a puxões e parece um trabalho de alta-costura!",
    "voceSabia": "A maioria das máquinas de bordar domésticas possui um limite mecânico rígido de segurança de 12.7 mm de salto; se a matriz tiver um ponto maior que isso, a máquina trava ou converte o ponto em um corte forçado com salto!",
    "practicalExercise": "No seu software, desenhe uma barra retangular de ponto cheio com 15 mm de largura sem divisão e outra com 'Auto-Split' ativado em 7 mm. Observe no simulador 3D como a segunda fica perfeitamente assentada e firme!",
    "quickSummary": "Recurso que divide pontos cheios maiores que 7 mm em pontos menores e firmes para evitar fios soltos e garantir durabilidade.",
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "Comprimento do Ponto",
      "Densidade de Pontos",
      "Ponto Tatami"
    ],
    "tags": [
      "d-074",
      "divisao de ponto",
      "auto-split",
      "ponto longo",
      "letras grandes",
      "durabilidade",
      "wilcom",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM. EmbroideryStudio Technical Manual: Auto-Split Satin & Stitch Length Limits. Sydney, 2023.",
      "KAHN, Max. Digitizing Masterclass for Commercial Embroidery. New York: Textile Press, 2021."
    ],
    "updatedAt": "2026-08-24"
  }
];


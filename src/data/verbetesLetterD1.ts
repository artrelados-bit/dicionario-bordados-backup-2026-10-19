import { Verbete } from "../types";

export const VERBETES_LETTER_D1: Verbete[] = [
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
  }
];

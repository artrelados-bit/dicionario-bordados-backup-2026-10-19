import { Verbete } from "../types";

export const VERBETES_LETTER_D: Verbete[] = [
  {
    "id": "d-001-densidade-de-pontos",
    "code": "D-001",
    "term": "Densidade de Pontos",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e substantivo masculino.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Concentra√ß√£o e espa√ßamento entre os pontos que formam determinada √°rea da matriz de bordado.",
    "definition": "A densidade de pontos √© a concentra√ß√£o dos pontos utilizados para formar determinada √°rea de uma matriz de bordado. Ela est√° relacionada √† dist√¢ncia entre os pontos ou entre as passagens de pontos que comp√µem uma regi√£o do desenho. A densidade influencia diretamente a cobertura do tecido, a apar√™ncia, a espessura, a rigidez, o consumo de linha e a quantidade total de pontos. No bordado eletr√¥nico, √© um dos par√¢metros fundamentais na cria√ß√£o e revis√£o de matrizes.",
    "technicalDetails": "Varia inversamente ao espa√ßamento: maior concentra√ß√£o de pontos resulta em maior densidade, enquanto maior espa√ßamento resulta em menor densidade. Nos softwares de programa√ß√£o (Wilcom, Hatch, Embird), √© calibrada em mil√≠metros de espa√ßamento entre linhas (ex: 0.38mm a 0.45mm no Tatami). Deve ser analisada em conjunto com o tipo de ponto, tecido, espessura da linha, estabilizador e underlay.",
    "construction": [
      "Espa√ßamento entre linhas de pontos (stitch spacing)",
      "Comprimento do ponto (stitch length)",
      "Camada de suporte estrutural (underlay)",
      "Compensa√ß√£o de encolhimento (pull compensation)"
    ],
    "howItWorks": [
      "1. O programador define o espa√ßamento entre as passagens de agulha no software.",
      "2. √Åreas de preenchimento recebem densidades equilibradas para cobrir o tecido.",
      "3. Detalhes finos e letras recebem calibra√ß√µes espec√≠ficas para evitar ac√∫mulo de linha.",
      "4. A m√°quina executa as perfura√ß√µes mantendo a dist√¢ncia programada entre cada passagem."
    ],
    "mainTypes": [
      "Densidade Padr√£o / Uniforme (0.40mm a 0.45mm para tecidos planos)",
      "Densidade Alta (0.35mm a 0.38mm para cetim e superf√≠cies lisas)",
      "Densidade Leve / Aberta (0.60mm a 1.20mm para sombras e fundos)",
      "Densidade Gradiente / Vari√°vel (transi√ß√£o suave de cobertura)"
    ],
    "advantages": [
      "‚úî Garante cobertura perfeita e uniforme sem transpar√™ncia do tecido",
      "‚úî Otimiza o consumo de linha e reduz custos de produ√ß√£o",
      "‚úî Previne quebras de linha e desfiamentos por excesso de atrito",
      "‚úî Mant√©m a flexibilidade e maciez natural da pe√ßa bordada"
    ],
    "limitations": [
      "Aumentar a densidade indiscriminadamente n√£o corrige falhas causadas por underlay deficiente ou falta de compensa√ß√£o de repuxo."
    ],
    "commonErrors": [
      "‚ùå Aumentar a densidade simplesmente para tentar esconder o tecido que est√° aparecendo.",
      "‚ùå Utilizar a mesma configura√ß√£o de densidade para todos os tipos de tecido.",
      "‚ùå Confundir densidade com a quantidade total de pontos da matriz.",
      "‚ùå Redimensionar uma matriz sem recalcular ou revisar a nova distribui√ß√£o dos pontos."
    ],
    "voceSabia": "Uma matriz profissional n√£o procura necessariamente utilizar o maior n√∫mero poss√≠vel de pontos. O objetivo √© encontrar o equil√≠brio exato entre cobertura, qualidade, estabilidade e efici√™ncia, eliminando pontos desnecess√°rios.",
    "curiosidadeTecnica": "A densidade pode ser representada de formas diferentes nos softwares: alguns usam o espa√ßamento linear em mil√≠metros (quanto menor o n√∫mero, mais denso), enquanto outros utilizam linhas por polegada ou densidade percentual.",
    "dicaArtrelados": "N√£o pense que 'mais pontos = melhor bordado'. Antes de aumentar a densidade, procure descobrir por que o tecido est√° aparecendo. Verifique: tipo de ponto ‚Üí dire√ß√£o ‚Üí underlay ‚Üí tecido ‚Üí estabilizador ‚Üí linha ‚Üí densidade. E lembre-se: pontos desnecess√°rios custam dinheiro em tempo de m√°quina e linha!",
    "recommendedSettings": {
      "density": "0.40mm a 0.45mm para Tatami; 0.38mm a 0.42mm para Satin",
      "needleType": "75/11 DBxK5 ou 130/705H-E",
      "stabilizer": "Rasga-f√°cil ou Recorta-f√°cil conforme a elasticidade",
      "speedPPM": "650 a 850 PPM"
    },
    "applications": [
      "Preenchimentos Tatami, colunas em Ponto Satin, coberturas de grandes √°reas, logotipos e monogramas."
    ],
    "troubleshootingTips": [
      "Se o tecido ficar r√≠gido como uma placa de papel√£o ou com furos de agulha, reduza a densidade em 10% a 15% e reforce o underlay.",
      "Se a linha estiver quebrando repetidamente na mesma √°rea, verifique se n√£o h√° sobreposi√ß√£o excessiva de camadas densas."
    ],
    "relatedTerms": [
      "Densidade de Bordado",
      "Densidade Vari√°vel",
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
    "origin": "Do latim densitas, -atis (qualidade de denso, espesso, compacto), derivado de densus (cerrado, apertado), e do latim punctum (picada, furo de agulha). No bordado mec√¢nico e computadorizado, o conceito foi formalizado com as m√°quinas pantogr√°ficas autom√°ticas su√≠√ßas e alem√£s no final do s√©culo XIX para calcular a cobertura de fios sobre o tecido.",
    "beginnerExplanation": "A densidade √© a dist√¢ncia que existe entre uma linha de ponto e a outra vizinha. Se voc√™ colocar os pontos muito juntinhos (muito denso), o bordado fica duro como uma placa; se colocar muito afastados (pouco denso), o tecido de baixo vai aparecer como se estivesse furado ou ralo. O segredo √© achar o equil√≠brio perfeito!",
    "practicalExercise": "No seu software de bordado ou na m√°quina, crie tr√™s quadrados id√™nticos de 3cm x 3cm em ponto Tatami com o mesmo tecido e entretela: configure o primeiro com densidade aberta (0.60mm), o segundo com densidade ideal (0.42mm) e o terceiro com densidade muito apertada (0.28mm). Borde os tr√™s lado a lado e compare com as m√£os: sinta a flexibilidade, observe se o tecido apareceu no primeiro e se o terceiro ficou duro como papel√£o.",
    "quickSummary": "Densidade de pontos √© o espa√ßamento entre as passagens de linha na matriz, determinante para garantir cobertura homog√™nea sem gerar rigidez no tecido.",
    "bibliographicReferences": [
      "WILCOM. Stitch Density and Spacing Reference Manual. Sydney: Wilcom International, 2022.",
      "DEVERSON, D. Complete Embroidery Digitizing Masterclass. London: Textile Press, 2020.",
      "ARTRELADOS. Guia de Densidade e Estrutura√ß√£o de Matrizes. S√£o Paulo: Ateli√™ Artrelados, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-002-densidade-de-bordado",
    "code": "D-002",
    "term": "Densidade de Bordado",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e substantivo masculino.",
    "category": "Terminologia Geral",
    "summary": "Grau de concentra√ß√£o de pontos de uma regi√£o ou do conjunto global de elementos de uma matriz.",
    "definition": "A densidade de bordado corresponde ao grau de concentra√ß√£o dos pontos utilizados para construir uma determinada regi√£o ou conjunto de elementos de uma matriz. O conceito est√° diretamente relacionado √† ocupa√ß√£o da superf√≠cie do tecido pelos pontos e √† quantidade de material empregada na forma√ß√£o do bordado. Enquanto a densidade de pontos enfatiza a concentra√ß√£o local em determinada √°rea, a densidade de bordado descreve a caracter√≠stica global do desenho ou de grandes blocos do projeto.",
    "technicalDetails": "Avalia a distribui√ß√£o m√©dia de pontos por cent√≠metro quadrado em rela√ß√£o √† √°rea total do bordado, considerando a sobreposi√ß√£o de camadas, a espessura da linha e o tipo de ponto utilizado.",
    "construction": [
      "Estrutura global de objetos",
      "Combina√ß√£o de pontos de cobertura e base",
      "Espa√ßamento m√©dio entre passagens",
      "Distribui√ß√£o de peso e rigidez"
    ],
    "howItWorks": [
      "1. O programador avalia o comportamento global da matriz sobre o substrato t√™xtil.",
      "2. √Åreas uniformes mant√™m uma concentra√ß√£o constante para criar homogeneidade visual.",
      "3. √Åreas de transi√ß√£o recebem varia√ß√µes para aliviar o peso da pe√ßa bordada."
    ],
    "mainTypes": [
      "Densidade Uniforme (Preenchimentos cont√≠nuos e homog√™neos)",
      "Densidade Vari√°vel (Texturas, sombras e degrad√™s)",
      "Densidade Leve (Para tecidos finos e voil)",
      "Densidade Estruturada (Para jaquetas, sarja e bon√©s)"
    ],
    "advantages": [
      "‚úî Assegura a estabilidade dimensional do bordado no tecido",
      "‚úî Evita deforma√ß√µes e franzimentos em pe√ßas acabadas",
      "‚úî Auxilia na correta precifica√ß√£o comercial baseada no tempo de m√°quina"
    ],
    "limitations": [
      "Uma matriz com densidade de bordado visualmente perfeita na tela pode reagir de forma diferente dependendo do tipo de tecido real."
    ],
    "commonErrors": [
      "‚ùå Avaliar a qualidade de uma matriz apenas pelo n√∫mero total de pontos sem observar a distribui√ß√£o.",
      "‚ùå Ignorar a combina√ß√£o linha + tecido + ponto + estabilizador.",
      "‚ùå N√£o considerar o impacto do underlay na densidade global da matriz."
    ],
    "voceSabia": "Dois bordados com exatamente a mesma quantidade de pontos podem ter densidades completamente distintas se um deles tiver o dobro da √°rea f√≠sica do outro!",
    "curiosidadeTecnica": "Dois preenchimentos com quantidade semelhante de pontos podem apresentar percep√ß√µes visuais diferentes devido √† inclina√ß√£o dos pontos, ao tipo de ponto e √† reflex√£o da luz na linha de poli√©ster.",
    "dicaArtrelados": "Quando analisar uma matriz, n√£o olhe somente para o n√∫mero de pontos. Observe a distribui√ß√£o deles: quantidade + distribui√ß√£o + tecido + linha + estabiliza√ß√£o + tempo de execu√ß√£o. Isso melhora o bordado e afina sua precifica√ß√£o!",
    "applications": [
      "Planejamento global de matrizes para confec√ß√£o, personaliza√ß√£o e uniformes."
    ],
    "troubleshootingTips": [
      "Se o bordado repuxar o tecido ao redor do desenho, reduza a densidade de bordado global e melhore o bastidoramento."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Densidade Vari√°vel",
      "Matriz de Bordado",
      "Underlay",
      "Digitaliza√ß√£o"
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
    "origin": "Do latim densitas (concentra√ß√£o, espessura) e do √°rabe hisp√¢nico al-burdƒÅ (tecido bordado ou listrado). No contexto fabril moderno, o termo 'densidade de bordado' consolidou-se na ind√∫stria t√™xtil para medir o peso e o consumo de mat√©ria-prima por dec√≠metro quadrado de produto pronto.",
    "beginnerExplanation": "Enquanto a 'densidade de pontos' olha para um pedacinho espec√≠fico do desenho, a 'densidade de bordado' olha para o projeto inteiro: √© o peso geral do bordado na sua pe√ßa de roupa. Ajuda voc√™ a saber se a matriz n√£o vai ficar pesada demais para um tecido fininho ou leve demais para um casaco grosso.",
    "practicalExercise": "Pegue duas camisetas iguais: em uma, borde um bras√£o com preenchimento total s√≥lido e pesado (alta densidade de bordado); na outra, borde o mesmo bras√£o apenas em contornos elegantes com pontos leves. Vista ou segure as duas pe√ßas: repare como a primeira fica repuxando e pesada no peito, enquanto a segunda tem caimento macio e natural.",
    "quickSummary": "Densidade de bordado √© a concentra√ß√£o global de pontos em rela√ß√£o √† √°rea total do projeto, fundamental para calibrar o caimento t√™xtil e a precifica√ß√£o.",
    "bibliographicReferences": [
      "TAJIMA. Industrial Embroidery Operation & Quality Guide. Nagoya: Tokai Industrial Sewing Machine Co., 2021.",
      "KRAUSZ, P. The Industrial Embroidery Handbook. New York: Textile Media, 2019.",
      "ARTRELADOS. Manual de Planejamento e Precifica√ß√£o no Bordado. S√£o Paulo: Ateli√™ Artrelados, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-003-densidade-variavel",
    "code": "D-003",
    "term": "Densidade Vari√°vel",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Aplica√ß√£o de diferentes n√≠veis de concentra√ß√£o de pontos em um mesmo objeto para criar texturas, sombras e degrad√™s.",
    "definition": "A densidade vari√°vel √© a utiliza√ß√£o de diferentes n√≠veis de concentra√ß√£o de pontos dentro de uma mesma matriz ou entre diferentes regi√µes de um desenho. Em vez de aplicar uma √∫nica densidade a toda a √°rea, o programador ajusta a distribui√ß√£o dos pontos de acordo com o efeito desejado, o tipo de tecido e as necessidades de cada regi√£o, criando transi√ß√µes graduais ou abruptas.",
    "technicalDetails": "Configurada nos softwares de digitaliza√ß√£o atrav√©s de par√¢metros de gradiente (densidade inicial vs. final, curva exponencial ou linear), permitindo transi√ß√µes de 0.35mm at√© 2.50mm de espa√ßamento dentro do mesmo bloco vetorial.",
    "construction": [
      "√Årea de alta concentra√ß√£o (sombra / volume)",
      "Zona de transi√ß√£o gradual (gradiente)",
      "√Årea aberta / baixa concentra√ß√£o (luz / transpar√™ncia)",
      "Underlay sincronizado com a varia√ß√£o"
    ],
    "howItWorks": [
      "1. O digitalizador aplica a ferramenta de gradiente ou densidade progressiva no objeto.",
      "2. O software calcula o aumento ou diminui√ß√£o progressiva do espa√ßamento entre as passagens.",
      "3. Duas cores sobrepostas com densidades vari√°veis opostas misturam-se suavemente criando efeito de fus√£o."
    ],
    "mainTypes": [
      "Gradiente Linear (Varia√ß√£o cont√≠nua de um lado ao outro)",
      "Gradiente Radial / Curvil√≠neo (Acompanha o centro ou curvas da forma)",
      "Densidade Vari√°vel por Zonas (Definida por √°reas de luz e sombra)"
    ],
    "advantages": [
      "‚úî Cria efeitos de sombra, profundidade e realismo impressionantes",
      "‚úî Permite mesclar duas cores de linha criando transi√ß√µes perfeitas (degrad√™)",
      "‚úî Reduz pontos desnecess√°rios e alivia o peso do bordado no tecido",
      "‚úî Evita ac√∫mulo excessivo de linha em √°reas sobrepostas"
    ],
    "limitations": [
      "Transi√ß√µes muito abruptas podem resultar em falhas de cobertura ou visual desigual se o tecido de fundo tiver alto contraste."
    ],
    "commonErrors": [
      "‚ùå Alterar a densidade apenas para tentar reduzir pontos sem planejar o efeito visual.",
      "‚ùå Criar varia√ß√µes exageradas entre √°reas cont√≠guas sem uma zona de transi√ß√£o suave.",
      "‚ùå Esquecer de ajustar o underlay para acompanhar a √°rea mais aberta do gradiente."
    ],
    "voceSabia": "A densidade vari√°vel permite criar sensa√ß√£o de profundidade e realismo tridimensional em pelagens de animais e p√©talas sem precisar trocar de cor de linha.",
    "curiosidadeTecnica": "Em softwares profissionais, pequenas altera√ß√µes no espa√ßamento produzem varia√ß√µes percept√≠veis na reflex√£o da luz na linha, transformando a distribui√ß√£o dos pontos em um elemento art√≠stico aut√¥nomo.",
    "dicaArtrelados": "Use a densidade vari√°vel com prop√≥sito! Antes de alterar a densidade de uma regi√£o, pergunte: 'Quero mudar a cobertura, a textura, o peso ou apenas corrigir um problema?' Se for para corrigir falhas, revise primeiro a estrutura e o underlay da matriz.",
    "applications": [
      "Efeitos fotogr√°ficos, sombras de personagens, plumagens, p√©talas de flores e fundos texturizados."
    ],
    "troubleshootingTips": [
      "Se o tecido aparecer em excesso na parte aberta do gradiente, acrescente um underlay leve ou diminua o espa√ßamento m√°ximo."
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
    "origin": "Do latim densitas (densidade) e variabilis (que muda, inconstante), derivado do verbo variare (mudar, matizar cores). No bordado art√≠stico e digital, a densidade vari√°vel nasceu da t√©cnica manual do 'ponto matiz' (needle painting), onde a bordadeira variava a proximidade dos fios para imitar sombras naturais de flores e penas.",
    "beginnerExplanation": "Densidade vari√°vel √© como pintar com linha: em vez de preencher tudo com a mesma quantidade de pontos, voc√™ come√ßa com os pontos bem juntinhos em um lado e vai afastando suavemente at√© o outro lado. Isso cria sombras, degrad√™s de cores e sensa√ß√£o de 3D sem precisar trocar de linha!",
    "practicalExercise": "Abra seu software de matrizes e desenhe uma p√©tala de flor. Aplique a ferramenta de gradiente ou densidade progressiva, definindo o in√≠cio com 0.38mm e o final com 1.20mm. Borde sobre um tecido branco com linha vermelha: observe como a raiz da p√©tala fica vermelha escura e a ponta fica clara e suave, revelando o fundo branco.",
    "quickSummary": "Densidade vari√°vel √© o ajuste din√¢mico do espa√ßamento de pontos em um mesmo objeto para produzir efeitos art√≠sticos de luz, sombra e transi√ß√£o de cores.",
    "bibliographicReferences": [
      "HATCH BY WILCOM. Creating Realistic Textures with Variable Density. Sydney, 2023.",
      "NICOLAS, C. Art of Shading and Thread Blending in Machine Embroidery. Paris: √âditions T√™xteis, 2021.",
      "ARTRELADOS. T√©cnicas de Degrad√™ e Pintura com Agulha no Bordado Eletr√¥nico. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-004-densidade-excessiva",
    "code": "D-004",
    "term": "Densidade Excessiva",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Solu√ß√£o de Problemas",
    "summary": "Concentra√ß√£o desnecess√°ria ou exagerada de pontos que provoca rigidez, enrugamento e quebras mec√¢nicas.",
    "definition": "A densidade excessiva ocorre quando determinada regi√£o da matriz apresenta uma concentra√ß√£o de pontos superior √† necess√°ria para obter a cobertura e o resultado desejado. Esse excesso de penetra√ß√µes e ac√∫mulo de linha sobrecarrega a estrutura do tecido, aumenta o tempo de execu√ß√£o, desgasta a m√°quina e pode causar furos ou quebras frequentes.",
    "technicalDetails": "Caracteriza-se por espa√ßamentos inferiores a 0.30mm sem necessidade t√©cnica, ou pelo empilhamento de camadas de preenchimento completo sem elimina√ß√£o de sobreposi√ß√µes ocultas (recurso Remove Hidden Stitches desativado).",
    "construction": [
      "Passagens de linha superpostas em excesso",
      "M√∫ltiplas camadas de underlay desnecess√°rias",
      "Pontos excessivamente curtos acumulados",
      "Perfura√ß√µes repetitivas no mesmo ponto do tecido"
    ],
    "howItWorks": [
      "1. A agulha perfura o tecido centenas de vezes na mesma micro√°rea.",
      "2. O ac√∫mulo de linha forma um relevo duro e volumoso.",
      "3. As tramas do tecido s√£o empurradas e cortadas pelo excesso de penetra√ß√µes.",
      "4. A linha sofre atrito extremo contra a agulha aquecida, rompendo com frequ√™ncia."
    ],
    "mainTypes": [
      "Excesso por Configura√ß√£o no Software (Espa√ßamento abaixo do limite seguro)",
      "Excesso por Redimensionamento sem Recalcular Pontos",
      "Excesso por Sobreposi√ß√£o de Camadas (Falta de recorte interno)"
    ],
    "advantages": [
      "‚úî (Nenhuma vantagem t√©cnica real; √© considerado um v√≠cio de programa√ß√£o ou execu√ß√£o)"
    ],
    "limitations": [
      "Prejudica o caimento da pe√ßa, encarece o trabalho e danifica tecidos delicados."
    ],
    "commonErrors": [
      "‚ùå Aumentar os pontos da matriz para tentar corrigir falhas que eram causadas por entretela frouxa.",
      "‚ùå Reduzir o tamanho da matriz em 30% a 50% sem recalcular a quantidade de pontos.",
      "‚ùå Acreditar que matriz com n√∫mero astron√¥mico de pontos √© sin√¥nimo de alta qualidade."
    ],
    "voceSabia": "Uma matriz com densidade excessiva pode cortar o tecido como uma serra microperfurada, fazendo com que o bordado se destaque e caia ap√≥s a primeira lavagem da pe√ßa!",
    "curiosidadeTecnica": "O excesso de densidade √© ainda mais cr√≠tico em regi√µes min√∫sculas (como letras de 4mm), onde o olho da agulha n√£o tem espa√ßo para formar a la√ßada sem colidir com a linha anterior.",
    "dicaArtrelados": "Se voc√™ est√° pensando em aumentar a densidade, pare um momento e investigue a causa! Talvez o problema esteja no underlay, na dire√ß√£o dos pontos ou na estabiliza√ß√£o do tecido. Corrigir a causa raiz √© muito melhor do que simplesmente entupir a matriz de pontos.",
    "applications": [
      "Diagn√≥stico e corre√ß√£o de matrizes com problemas de rigidez, quebras e repuxamento."
    ],
    "troubleshootingTips": [
      "Em caso de bordado duro como placa, reduza a densidade para 0.40mm a 0.45mm e ative o recurso de remo√ß√£o de sobreposi√ß√£o oculta no software."
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
    "origin": "Do latim densitas (densidade) e excessivus (que ultrapassa a medida justa, exorbitante), derivado de excedere (ir al√©m do limite). No bordado mec√¢nico, a densidade excessiva tornou-se uma patologia comum ap√≥s o advento dos softwares autom√°ticos que n√£o eliminavam sobreposi√ß√£o de camadas ocultas.",
    "beginnerExplanation": "Densidade excessiva √© colocar pontos demais no mesmo lugar. √â o famoso bordado que vira uma 't√°bua' ou 'chapa dura', que fura o tecido, entorta agulha e arrebenta a linha toda hora. O excesso de linha nunca conserta um desenho mal planejado; ele s√≥ estraga a pe√ßa.",
    "practicalExercise": "Borde em um retalho de tecido fino uma letra com preenchimento duplo superposto (densidade abaixo de 0.28mm sem remover pontos ocultos). Observe o barulho da m√°quina sofrendo, sinta a quentura na agulha e veja como o verso fica com uma crosta grossa de linha que chega a quebrar a agulha.",
    "quickSummary": "Densidade excessiva √© o ac√∫mulo desnecess√°rio de pontos que provoca rigidez extrema, quebras mec√¢nicas e furos irrevers√≠veis no tecido.",
    "bibliographicReferences": [
      "MADEIRA. Embroidery Troubleshooting & Needle Deflection Manual. Freiburg: Madeira Garnfabrik, 2022.",
      "SCHMETZ. Needle Heat, Friction and Excessive Penetration in Automatic Embroidery. Herzogenrath, 2021.",
      "ARTRELADOS. Preven√ß√£o de Falhas Mec√¢nicas e Al√≠vio de Matrizes. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-005-densidade-insuficiente",
    "code": "D-005",
    "term": "Densidade Insuficiente",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Solu√ß√£o de Problemas",
    "summary": "Concentra√ß√£o baixa de pontos que deixa o tecido aparente de forma indesejada e causa cobertura irregular.",
    "definition": "A densidade insuficiente ocorre quando a concentra√ß√£o de pontos em determinada √°rea da matriz √© menor do que a necess√°ria para produzir a cobertura ou o efeito visual esperado. Como consequ√™ncia, o fundo do tecido permanece vis√≠vel entre as passagens de linha, resultando em um desenho com aspecto ralo, fraco ou falhado.",
    "technicalDetails": "Ocorre quando o espa√ßamento entre pontos √© excessivamente largo (ex: superior a 0.50mm em tecidos contrastantes) ou quando o underlay de suporte n√£o sustenta a linha superior contra as fibras do tecido.",
    "construction": [
      "Espa√ßamento aberto entre passagens de linha",
      "Aus√™ncia de base estabilizadora (underlay)",
      "Espa√ßo vis√≠vel entre os fios de bordado"
    ],
    "howItWorks": [
      "1. A m√°quina executa os pontos com espa√ßamento largo entre as passagens.",
      "2. A linha de bordado n√£o consegue encostar na passagem vizinha.",
      "3. O tecido de fundo aparece nos v√£os entre os pontos, gerando aspecto transl√∫cido."
    ],
    "mainTypes": [
      "Insufici√™ncia N√£o Intencional (Falha t√©cnica de cobertura)",
      "Insufici√™ncia Intencional (Efeito art√≠stico de transpar√™ncia e textura)"
    ],
    "advantages": [
      "‚úî Quando intencional, produz efeitos leves e econ√¥micos em fundos amplos"
    ],
    "limitations": [
      "Quando n√£o planejada, compromete o acabamento e a nitidez dos detalhes e textos."
    ],
    "commonErrors": [
      "‚ùå Aumentar excessivamente a densidade sem verificar se o problema era apenas falta de underlay ou dire√ß√£o errada dos pontos.",
      "‚ùå Ignorar a cor e a textura do tecido (bordar linha branca sobre tecido preto exige mais suporte).",
      "‚ùå Acreditar que toda falha de cobertura √© exclusivamente culpa da densidade."
    ],
    "voceSabia": "Em tecidos com contraste extremo (como bordar branco sobre preto), uma densidade moderada combinada com um bom underlay em tatami cruzado cobre muito melhor do que uma densidade alta sem underlay!",
    "curiosidadeTecnica": "A espessura da linha (T√≠tulo 40 vs T√≠tulo 60) influencia diretamente a percep√ß√£o de cobertura: uma linha fina (T√≠tulo 60) parecer√° insuficiente na mesma densidade que cobre perfeitamente com linha 40.",
    "dicaArtrelados": "Se o tecido est√° aparecendo, n√£o aumente a densidade automaticamente! Fa√ßa primeiro um pequeno diagn√≥stico: √†s vezes, corrigir o underlay ou mudar o √¢ngulo dos pontos em 45¬∞ resolve a cobertura perfeitamente sem acrescentar centenas de pontos desnecess√°rios.",
    "applications": [
      "Diagn√≥stico e corre√ß√£o de falhas de cobertura e acabamento transl√∫cido em matrizes."
    ],
    "troubleshootingTips": [
      "Adicione uma camada de underlay Tatami a 90¬∞ da cobertura antes de aumentar a densidade principal."
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
    "origin": "Do latim densitas (densidade) e insufficiens, -entis (que n√£o basta, deficiente), formado pelo prefixo in- (nega√ß√£o) e sufficere (bastar, suprir). Historicamente associada a falhas na cobertura onde o urdume ou trama do tecido escapa √† vista entre as passadas de linha.",
    "beginnerExplanation": "Densidade insuficiente √© quando faltam pontos no bordado e o tecido de baixo fica aparecendo nos buracos, deixando o desenho com aspecto ralo, desbotado e mal-acabado. Mas aten√ß√£o: antes de encher de pontos, verifique se o problema n√£o √© apenas a falta de uma boa costura de base (underlay)!",
    "practicalExercise": "Crie dois c√≠rculos de 4cm bordados com linha branca sobre tecido preto: no primeiro, use densidade 0.40mm SEM underlay; no segundo, use densidade 0.45mm COM underlay em Tatami cruzado a 90¬∞. Ao bordar, compare: o segundo cobrir√° muito melhor o fundo preto gastando menos linha na camada superior!",
    "quickSummary": "Densidade insuficiente √© o espa√ßamento exagerado entre pontos que resulta em cobertura falha e aspecto transl√∫cido indesejado no bordado.",
    "bibliographicReferences": [
      "COATS INDUSTRIAL. Machine Embroidery Coverage, Thread Count and Underlay Dynamics. London, 2021.",
      "EMBIRD. Underlay versus Density Balance in Modern Digitizing. Bratislava, 2023.",
      "ARTRELADOS. Segredos da Cobertura Perfeita sem Sobrecarga de Pontos. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-006-desenho-de-bordado",
    "code": "D-006",
    "term": "Desenho de Bordado",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivos masculinos.",
    "category": "Design & Cria√ß√£o",
    "summary": "Representa√ß√£o visual gr√°fica utilizada como motivo de refer√™ncia para a cria√ß√£o da matriz de bordado.",
    "definition": "O desenho de bordado √© a representa√ß√£o visual do motivo que ser√° utilizado como base para a cria√ß√£o ou digitaliza√ß√£o de uma matriz de bordado. Pode ser produzido especificamente para bordado ou adaptado a partir de uma ilustra√ß√£o, logotipo, s√≠mbolo, personagem ou arte gr√°fica. √â essencial diferenciar o desenho (representa√ß√£o visual em imagem) da matriz (instru√ß√µes execut√°veis de pontos para a m√°quina).",
    "technicalDetails": "Constitui o arquivo de refer√™ncia visual (rasterizado em PNG/JPG ou vetorial em AI/CDR/SVG) que passar√° pela etapa de an√°lise de viabilidade t√©cnica t√™xtil antes de ser transformado em pontos.",
    "construction": [
      "Contornos e formas principais",
      "Paleta de cores de refer√™ncia",
      "Propor√ß√µes e escala dimensional",
      "Detalhamento e contraste visual"
    ],
    "howItWorks": [
      "1. A arte visual √© concebida ou recebida do cliente.",
      "2. O digitalizador analisa a viabilidade dos tra√ßos e simplifica detalhes min√∫sculos.",
      "3. O desenho serve de gabarito para a cria√ß√£o dos objetos vetoriais e distribui√ß√£o de pontos."
    ],
    "mainTypes": [
      "Desenho Vetorial Original (Ideal para tra√ßado limpo e preciso)",
      "Imagem Bitmap / Rasterizada (Necessita vetoriza√ß√£o ou limpeza pr√©via)",
      "Arte Adaptada para Bordado (Simplificada para a f√≠sica das linhas)"
    ],
    "advantages": [
      "‚úî Estabelece a identidade visual clara e aprovada com o cliente",
      "‚úî Serve como guia visual exato durante toda a fase de digitaliza√ß√£o",
      "‚úî Permite planejar a sequ√™ncia l√≥gica de objetos antes de gerar pontos"
    ],
    "limitations": [
      "Uma imagem bonita na tela nem sempre pode ser reproduzida fielmente em pontos sem adapta√ß√µes dimensionais."
    ],
    "commonErrors": [
      "‚ùå Confundir imagem com matriz, acreditando que qualquer foto pode ser enviada direto para a m√°quina.",
      "‚ùå Escolher imagens excessivamente complexas com microdetalhes para bordados pequenos.",
      "‚ùå Tentar reproduzir todos os detalhes fotogr√°ficos sem simplificar para a linguagem de pontos."
    ],
    "voceSabia": "A m√°quina de bordar n√£o entende pixels nem cores visuais da tela; ela s√≥ entende coordenadas X/Y de penetra√ß√£o de agulha e comandos mec√¢nicos de corte e salto!",
    "curiosidadeTecnica": "Linhas com espessura inferior a 0.8mm no desenho original geralmente desaparecem ou viram fios soltos se n√£o forem convertidas em pontos corridos ou engrossadas para ponto cheio.",
    "dicaArtrelados": "Escolha o desenho pensando no bordado, e n√£o apenas na tela do computador! Pergunte sempre: 'Esse detalhe continuar√° vis√≠vel quando for transformado em pontos de linha?' Se a resposta for n√£o, simplifique antes de digitalizar!",
    "applications": [
      "Etapa inicial de conceitua√ß√£o e pr√©-produ√ß√£o de qualquer matriz de bordado."
    ],
    "troubleshootingTips": [
      "Em desenhos com letras muito pequenas, aumente o espa√ßamento entre as letras no desenho antes de programar os pontos."
    ],
    "relatedTerms": [
      "Desenho Digitalizado",
      "Digitaliza√ß√£o de Bordado",
      "Matriz de Bordado",
      "Vetoriza√ß√£o"
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
    "origin": "Do latim vulgar deexsignare (marcar, tra√ßar linhas, indicar com sinais), derivado de signum (marca, sinal), e do √°rabe hisp√¢nico al-burdƒÅ (tecido lavrado). Refere-se √† concep√ß√£o pl√°stica original antes da tradu√ß√£o para comandos eletromec√¢nicos.",
    "beginnerExplanation": "O desenho de bordado √© a imagem que voc√™ quer bordar (uma foto, uma flor desenhada no papel, um logotipo de empresa). Mas lembre-se: uma imagem n√£o √© uma matriz! A imagem √© apenas o desenho visual; a matriz √© o arquivo com os passos de costura que a m√°quina l√™.",
    "practicalExercise": "Pegue o logotipo de uma empresa no formato JPG ou PNG e amplie bastante na tela do celular at√© ver os pequenos detalhes. Anote quais detalhes t√™m menos de 1mm de espessura: esses detalhes precisar√£o ser simplificados ou eliminados antes de transformar a imagem em bordado.",
    "quickSummary": "Desenho de bordado √© a representa√ß√£o gr√°fica de refer√™ncia que serve como ponto de partida para a cria√ß√£o de uma matriz digital.",
    "bibliographicReferences": [
      "PUNDOLE, F. Graphic Adaptation for Machine Embroidery Systems. Mumbai: Stitches Publishing, 2020.",
      "LEE, C. From Vector Artwork to Machine Embroidery. Seoul: Design & Threads, 2022.",
      "ARTRELADOS. Guia de An√°lise Visual e Viabilidade T√©cnica de Desenhos. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-007-desenho-digitalizado",
    "code": "D-007",
    "term": "Desenho Digitalizado",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo masculino e partic√≠pio.",
    "category": "Softwares & Formatos",
    "summary": "Representa√ß√£o gr√°fica que foi preparada e interpretada digitalmente para servir de base √† matriz de bordado.",
    "definition": "O desenho digitalizado √© uma representa√ß√£o gr√°fica que foi preparada, limpa ou interpretada digitalmente em um software gr√°fico ou de bordado para servir de base direta √† cria√ß√£o da matriz. No contexto do bordado eletr√¥nico, essa prepara√ß√£o procura transformar caracter√≠sticas visuais (linhas, √°reas de cor, sombras) em elementos bem delimitados que possam posteriormente ser preenchidos por pontos.",
    "technicalDetails": "Representa a ponte entre a imagem bruta e a matriz final. Envolve a separa√ß√£o em camadas de cores e a delimita√ß√£o precisa de n√≥s e curvas antes da gera√ß√£o dos par√¢metros de ponto.",
    "construction": [
      "Vetoriza√ß√£o limpa de contornos",
      "Camadas crom√°ticas separadas",
      "Curvas de B√©zier e n√≥s otimizados",
      "Propor√ß√£o ajustada √† escala de bordado"
    ],
    "howItWorks": [
      "1. A imagem original passa por um software de vetoriza√ß√£o ou m√≥dulo gr√°fico.",
      "2. As cores s√£o reduzidas e os contornos refinados.",
      "3. Os objetos gr√°ficos s√£o organizados na ordem em que ser√£o digitalizados.",
      "4. O arquivo serve como base t√©cnica para a aplica√ß√£o de Satin, Tatami ou Ponto Corrido."
    ],
    "mainTypes": [
      "Vetor Otimizado para Bordado (Com compensa√ß√µes e toler√¢ncias)",
      "Arte Rastre√°vel (Guia de fundo para digitaliza√ß√£o manual)",
      "Desenho Segmentado por Cores"
    ],
    "advantages": [
      "‚úî Agiliza a aplica√ß√£o de pontos com precis√£o geom√©trica milim√©trica",
      "‚úî Elimina imperfei√ß√µes, serrilhados e ru√≠dos de imagens de baixa qualidade",
      "‚úî Facilita o redimensionamento proporcional do desenho antes de gerar pontos"
    ],
    "limitations": [
      "Ter o desenho digitalizado em vetor ainda n√£o significa ter uma matriz de bordado pronta para bordar."
    ],
    "commonErrors": [
      "‚ùå Pensar que qualquer imagem em vetor j√° est√° pronta para bordar sem configurar pontos.",
      "‚ùå N√£o adaptar a espessura das linhas do desenho ao tamanho final desejado.",
      "‚ùå Confiar somente na apar√™ncia do vetor sem checar a f√≠sica do tecido."
    ],
    "voceSabia": "A prepara√ß√£o da imagem pode ser t√£o demorada e importante quanto a pr√≥pria digitaliza√ß√£o dos pontos: 70% dos erros de uma matriz nascem de uma imagem mal preparada!",
    "curiosidadeTecnica": "Softwares como Wilcom usam o CorelDRAW integrado para preparar o desenho digitalizado em vetores antes de convert√™-lo em objetos inteligentes de bordado.",
    "dicaArtrelados": "Antes de digitalizar, organize o desenho! Simplifique detalhes desnecess√°rios, defina as √°reas principais e pense na ordem em que elas dever√£o ser bordadas. Isso economiza horas de retrabalho na matriz!",
    "applications": [
      "Prepara√ß√£o de logotipos de empresas, ilustra√ß√µes personalizadas e desenhos infantis."
    ],
    "troubleshootingTips": [
      "Se as curvas ficarem com cantos pontudos ou irregulares na matriz, limpe o excesso de n√≥s no vetor do desenho digitalizado."
    ],
    "relatedTerms": [
      "Desenho de Bordado",
      "Digitaliza√ß√£o de Bordado",
      "Digitaliza√ß√£o Manual",
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
    "origin": "Do latim deexsignare (tra√ßar) e do latim digitalis (relativo aos dedos, de digitus, dedo/n√∫mero), aplicado no s√©culo XX √† computa√ß√£o gr√°fica e convers√£o de sinais anal√≥gicos em representa√ß√µes bin√°rias.",
    "beginnerExplanation": "Desenho digitalizado √© a imagem que foi limpa no computador (com contornos bem definidos e cores separadas) para que possamos aplicar os pontos por cima dela com facilidade. √â a 'planta baixa' perfeita para construir o bordado.",
    "practicalExercise": "Importe uma imagem com fundo sujo e cheia de sombras para o seu software. Tente aplicar pontos direto: veja como fica confuso. Agora, fa√ßa uma limpeza dos contornos ou vetorize a imagem antes: repare como a aplica√ß√£o dos pontos fica limpa, r√°pida e precisa.",
    "quickSummary": "Desenho digitalizado √© a arte gr√°fica tratada e estruturada digitalmente para servir de guia exato na programa√ß√£o de pontos da matriz.",
    "bibliographicReferences": [
      "CORELDRAW. CorelDRAW for Embroidery Designers: Vector Preparation. Ottawa: Alludo, 2023.",
      "ADOBE. Vector Graphics for Textile Application. San Jose: Adobe Press, 2021.",
      "ARTRELADOS. Prepara√ß√£o de Imagens e Vetores para Digitaliza√ß√£o Profissional. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-008-digitalizacao-de-bordado",
    "code": "D-008",
    "term": "Digitaliza√ß√£o de Bordado",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e substantivo masculino.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Processo t√©cnico de transformar uma imagem em uma sequ√™ncia estruturada de pontos e comandos para a m√°quina de bordar.",
    "definition": "A digitaliza√ß√£o de bordado (tamb√©m conhecida como programa√ß√£o de matrizes ou poncheamento) √© o processo t√©cnico e artesanal de transformar uma imagem, desenho ou conceito visual em uma matriz de bordado composta por comandos e coordenadas que a m√°quina de bordar consegue interpretar e executar fisicamente no tecido.",
    "technicalDetails": "Durante a digitaliza√ß√£o s√£o configurados todos os par√¢metros t√©cnicos: tipos de pontos (Satin, Tatami, Ponto Corrido), √¢ngulos, densidade, sequ√™ncia, underlay, compensa√ß√£o de encolhimento (pull compensation), sobreposi√ß√µes (overlap), pontos de entrada e sa√≠da, cortes e saltos.",
    "construction": [
      "Mapeamento de formas em objetos de bordado",
      "Defini√ß√£o da sequ√™ncia l√≥gica de execu√ß√£o",
      "Atribui√ß√£o de subpontos e pontos de cobertura",
      "Inclus√£o de comandos mec√¢nicos (cortes, paradas e trocas de cor)"
    ],
    "howItWorks": [
      "1. A imagem √© importada para o software de digitaliza√ß√£o.",
      "2. O programador cria os objetos definindo tipo de ponto, dire√ß√£o e densidade.",
      "3. Configuram-se as compensa√ß√µes para combater o encolhimento e estiramento do tecido.",
      "4. O software gera o arquivo final nos formatos da m√°quina (PES, DST, JEF, EXP, etc.)."
    ],
    "mainTypes": [
      "Digitaliza√ß√£o Manual (Total controle criativo e t√©cnico pelo profissional)",
      "Digitaliza√ß√£o Autom√°tica (Processamento algor√≠tmico assistido pelo software)",
      "Digitaliza√ß√£o H√≠brida (Combina√ß√£o dos dois m√©todos)"
    ],
    "advantages": [
      "‚úî Transforma qualquer ideia visual em um produto t√™xtil de alto valor agregado",
      "‚úî Garante produ√ß√£o r√°pida, limpa e est√°vel na m√°quina de bordar",
      "‚úî Minimiza quebras de linha, paradas desnecess√°rias e desperd√≠cio de tecido"
    ],
    "limitations": [
      "Exige conhecimento profundo de mec√¢nica de bordado, propriedades dos tecidos e dom√≠nio de software especializado."
    ],
    "commonErrors": [
      "‚ùå Pensar que digitalizar significa apenas salvar uma imagem com a extens√£o .PES ou .DST.",
      "‚ùå N√£o considerar as caracter√≠sticas f√≠sicas do tecido onde a matriz ser√° bordada.",
      "‚ùå Ignorar a ordem e sequ√™ncia l√≥gica de execu√ß√£o dos objetos."
    ],
    "voceSabia": "Duas matrizes criadas a partir exatamente do mesmo desenho podem ter comportamentos completamente diferentes na m√°quina dependendo das decis√µes tomadas na digitaliza√ß√£o!",
    "curiosidadeTecnica": "A digitaliza√ß√£o √© a engenharia do bordado: enquanto o designer desenha formas est√°ticas, o digitalizador desenha for√ßas din√¢micas que atuam sobre o tecido sob tens√£o constante.",
    "dicaArtrelados": "Uma boa digitaliza√ß√£o come√ßa antes de abrir o computador! Pergunte primeiro: Onde ser√° bordado? Qual o tamanho? Qual tecido? Qual linha? Qual bastidor? S√≥ depois de ter essas respostas pense em como transformar o desenho em pontos!",
    "applications": [
      "Cria√ß√£o de matrizes corporativas, moda, enxovais, emblemas, apliqu√™s e monogramas."
    ],
    "troubleshootingTips": [
      "Sempre realize um teste pr√°tico da matriz no mesmo tecido e com a mesma entretela antes de iniciar uma produ√ß√£o comercial."
    ],
    "relatedTerms": [
      "Digitalizador de Bordado",
      "Digitaliza√ß√£o Manual",
      "Digitaliza√ß√£o Autom√°tica",
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
    "origin": "Do latim digitalis (num√©rico, expresso em d√≠gitos comput√°veis) e do √°rabe al-burdƒÅ (bordado). No setor t√™xtil, o termo substituiu a antiga express√£o 'poncheamento' (do ingl√™s punching, perfurar cart√µes) a partir dos anos 1980 com a populariza√ß√£o dos microcomputadores pessoais.",
    "beginnerExplanation": "Digitaliza√ß√£o de bordado √© a m√°gica de transformar um desenho de tela em instru√ß√µes reais de costura! √â quando voc√™ decide onde a agulha vai entrar, qual o tipo de ponto (cheio, tatami, correndo), a inclina√ß√£o da linha e a ordem em que tudo ser√° costurado.",
    "practicalExercise": "Pegue uma letra 'A' simples: no software de bordado, configure as pernas da letra em ponto cheio (Satin), o tra√ßo do meio em ponto cheio e adicione uma costura de base (underlay) central. Exporte para a m√°quina e borde: voc√™ acabou de fazer sua primeira digitaliza√ß√£o manual!",
    "quickSummary": "Digitaliza√ß√£o de bordado √© o processo t√©cnico de converter projetos visuais em matrizes execut√°veis compostas por coordenadas e comandos de m√°quina.",
    "bibliographicReferences": [
      "BLANCO, R. Manual de Ponchado y Digitalizaci√≥n Textil. Madri: Ediciones T√©cnicas, 2021.",
      "WILCOM. Digitizing Fundamentals & Object Properties. Sydney: Wilcom International, 2023.",
      "ARTRELADOS. Fundamentos da Digitaliza√ß√£o Profissional de Matrizes. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-009-digitalizacao-manual",
    "code": "D-009",
    "term": "Digitaliza√ß√£o Manual",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "M√©todo em que o programador cria e ajusta deliberadamente cada objeto, par√¢metro e ponto da matriz.",
    "definition": "A digitaliza√ß√£o manual √© o processo artesanal e t√©cnico no qual o programador cria e ajusta conscientemente cada um dos objetos, par√¢metros e trajet√≥rias de uma matriz de bordado. O profissional decide a forma exata de cada elemento, o tipo de ponto, o √¢ngulo, a densidade, a ordem de execu√ß√£o, os subpontos de suporte e as conex√µes entre objetos.",
    "technicalDetails": "Oferece controle total sobre a topologia dos pontos, minimizando pontos de salto e cortes, permitindo otimizar a matriz para alta velocidade (acima de 900 PPM) com avesso impec√°vel e m√°xima estabilidade dimensional.",
    "construction": [
      "Desenho deliberado de n√≥s e contornos",
      "Linhas de dire√ß√£o de ponto personalizadas",
      "Underlays projetados sob medida para o tecido",
      "Controle preciso de pontos de entrada e sa√≠da"
    ],
    "howItWorks": [
      "1. O digitalizador tra√ßa manualmente cada objeto com as ferramentas de curva e ponto.",
      "2. Aplica compensa√ß√µes espec√≠ficas para a elasticidade e trama do tecido.",
      "3. Define a trajet√≥ria cont√≠nua para evitar cortes excessivos de linha.",
      "4. Realiza a simula√ß√£o virtual e ajustes finos ponto a ponto."
    ],
    "mainTypes": [
      "Digitaliza√ß√£o Manual Objeto a Objeto (Padr√£o profissional)",
      "Digitaliza√ß√£o Ponto a Ponto (Para microdetalhes e monogramas de alta precis√£o)"
    ],
    "advantages": [
      "‚úî Qualidade est√©tica e t√©cnica incompar√°vel no resultado final",
      "‚úî M√°xima adapta√ß√£o ao tipo de tecido (malha, couro, toalha, seda)",
      "‚úî Redu√ß√£o dr√°stica de pontos desnecess√°rios e menor tempo de m√°quina",
      "‚úî Avesso extremamente limpo com o menor n√∫mero poss√≠vel de cortes"
    ],
    "limitations": [
      "Exige tempo, estudo t√©cnico constante e pr√°tica aprofundada com softwares especializados."
    ],
    "commonErrors": [
      "‚ùå Criar objetos sem planejar previamente a sequ√™ncia geral do desenho.",
      "‚ùå Inserir detalhes finos que n√£o funcionar√£o no tamanho f√≠sico real do bordado.",
      "‚ùå N√£o revisar a matriz em modo de simula√ß√£o antes de enviar para a produ√ß√£o."
    ],
    "voceSabia": "Uma matriz digitalizada manualmente por um profissional experiente pode ter 30% menos pontos e bordar muito mais bonito e r√°pido do que uma convers√£o autom√°tica cheia de n√≥s e saltos!",
    "curiosidadeTecnica": "Na digitaliza√ß√£o manual, o profissional pode aplicar a t√©cnica de 'caminho de viagem' (running stitch oculto sob preenchimentos futuros) para conectar objetos sem acionar o cortador de linha.",
    "dicaArtrelados": "Na digitaliza√ß√£o manual, pense primeiro na estrutura e depois nos detalhes! Pergunte: Qual objeto come√ßa? Qual termina? O que ficar√° por cima? Onde a linha precisa parar? Essa vis√£o reduz retrabalho e gera matrizes supereficientes.",
    "applications": [
      "Matrizes de alto padr√£o, logotipos corporativos rigorosos, bras√µes e pe√ßas personalizadas de luxo."
    ],
    "troubleshootingTips": [
      "Se houver muitos cortes de linha, reposicione a sa√≠da de um objeto para ficar ao lado da entrada do pr√≥ximo objeto."
    ],
    "relatedTerms": [
      "Digitaliza√ß√£o Autom√°tica",
      "Digitalizador de Bordado",
      "Sequ√™ncia de Pontos",
      "Underlay",
      "Compensa√ß√£o de Pux√£o"
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
    "origin": "Do latim digitalis (digital) e manualis (relativo √†s m√£os, executado com per√≠cia manual direta, de manus, m√£o). Representa o √°pice da maestria artesanal transposta para o ambiente de software CAD t√™xtil.",
    "beginnerExplanation": "Digitaliza√ß√£o manual √© quando voc√™, com sua pr√≥pria cabe√ßa e m√£os no mouse, desenha objeto por objeto da matriz, decidindo cada √¢ngulo, cada costura de base e cada corte de linha. √â o que diferencia um bordado profissional impec√°vel de um bordado amador e problem√°tico.",
    "practicalExercise": "Escolha um desenho de flor com 3 folhas: digitalize manualmente folha por folha, planejando para que a m√°quina termine a primeira folha exatamente no ponto onde come√ßa a segunda folha, usando uma costurinha escondida (caminho de viagem) para eliminar cortes de linha. Borde e cronometre a velocidade!",
    "quickSummary": "Digitaliza√ß√£o manual √© o m√©todo de programa√ß√£o em que cada objeto, √¢ngulo, underlay e par√¢metro √© deliberadamente projetado pelo profissional.",
    "bibliographicReferences": [
      "GARCIA, E. Advanced Embroidery Digitizing and Node Editing. Barcelona: Marcombo, 2022.",
      "TAJIMA. DGML by Pulse: Advanced Manual Stitch Manipulation. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. Maestria em Digitaliza√ß√£o Manual e Otimiza√ß√£o de Percurso. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-010-digitalizacao-automatica",
    "code": "D-010",
    "term": "Digitaliza√ß√£o Autom√°tica",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Softwares & Formatos",
    "summary": "Recurso de software que converte automaticamente imagens em objetos de bordado por meio de algoritmos.",
    "definition": "A digitaliza√ß√£o autom√°tica √© o processo no qual o software de bordado interpreta uma imagem gr√°fica (bitmap ou vetor) e utiliza recursos automatizados para gerar objetos e caminhos de pontos sem a necessidade de o usu√°rio desenhar cada elemento manualmente. O programa analisa √°reas de cor, formas e contrastes e prop√µe uma estrutura de matriz pronta.",
    "technicalDetails": "Utiliza algoritmos de segmenta√ß√£o de imagem e reconhecimento de contornos. Embora r√°pida, a ferramenta n√£o possui discernimento sobre a tens√£o do tecido, elasticidade, espessura da linha ou a f√≠sica do processo de costura.",
    "construction": [
      "M√≥dulo de redu√ß√£o e leitura crom√°tica",
      "Gerador algor√≠tmico de blocos de pontos",
      "Atribui√ß√£o padr√£o de underlay e densidade",
      "Inser√ß√£o autom√°tica de cortes entre cores"
    ],
    "howItWorks": [
      "1. A imagem √© carregada e o software identifica os blocos de cores.",
      "2. O algoritmo converte cada bloco em Ponto Cheio ou Tatami conforme a largura.",
      "3. S√£o inseridos pontos de entrada, sa√≠da e cortes gen√©ricos.",
      "4. A matriz gerada exige revis√£o humana completa antes da execu√ß√£o."
    ],
    "mainTypes": [
      "Convers√£o em 1 Clique (Auto-Digitize Instant√¢neo)",
      "Varinha M√°gica / Sele√ß√£o por Cor (Gera objetos a partir de cliques em √°reas)",
      "Autodigitiza√ß√£o com Assistente (Permite selecionar tecidos e paleta pr√©via)"
    ],
    "advantages": [
      "‚úî Agilidade extrema para gerar esbo√ßos r√°pidos e pr√©vias para clientes",
      "‚úî Excelente ponto de partida para formas geom√©tricas simples e bem definidas",
      "‚úî Facilita o aprendizado inicial para quem est√° conhecendo o universo das matrizes"
    ],
    "limitations": [
      "Gera frequentemente excesso de cortes de linha, sequ√™ncias il√≥gicas, falta de compensa√ß√£o de repuxo e pontos curtos perigosos para a agulha."
    ],
    "commonErrors": [
      "‚ùå Enviar a matriz autom√°tica direto para a m√°quina sem revis√£o t√©cnica.",
      "‚ùå Acreditar que o software compreende automaticamente o tipo de tecido.",
      "‚ùå Confundir uma simula√ß√£o bonita na tela com uma matriz tecnicamente vi√°vel."
    ],
    "voceSabia": "A digitaliza√ß√£o autom√°tica pode economizar tempo inicial, mas se a imagem for complexa, o tempo gasto para corrigir os defeitos da convers√£o costuma ser maior do que digitalizar manualmente do zero!",
    "curiosidadeTecnica": "Imagens com degrad√™s suaves ou compress√£o JPG cheia de ru√≠dos enganam o algoritmo autom√°tico, criando centenas de micro-objetos de 2 ou 3 pontos que travam a m√°quina.",
    "dicaArtrelados": "Use a digitaliza√ß√£o autom√°tica como ponto de partida, nunca como ponto final! Depois da convers√£o, fa√ßa uma revis√£o completa: confira sequ√™ncia + pontos curtos + densidade + underlay + tamanho + tecido!",
    "applications": [
      "Esbo√ßos r√°pidos, desenhos infantis simples com poucas cores e formas geom√©tricas puras."
    ],
    "troubleshootingTips": [
      "Use o filtro de 'Eliminar Pontos Curtos' (Short Stitches Filter) do software para apagar pontos menores que 0.8mm gerados pela convers√£o autom√°tica."
    ],
    "relatedTerms": [
      "Digitaliza√ß√£o Manual",
      "Desenho Digitalizado",
      "Vetoriza√ß√£o",
      "Sequ√™ncia de Pontos"
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
    "origin": "Do latim digitalis e do grego automatos (que se move por si mesmo, espont√¢neo). Surgiu nos softwares de bordado nos anos 1990 com algoritmos de reconhecimento de formas e cores.",
    "beginnerExplanation": "Digitaliza√ß√£o autom√°tica √© quando voc√™ aperta um bot√£o no software e ele tenta transformar a imagem em bordado sozinho em um segundo. √â r√°pida para quebrar um galho, mas quase sempre cria n√≥s, corta a linha toda hora e n√£o entende se o tecido √© malha ou jeans.",
    "practicalExercise": "Use o recurso de 'Autodigitize' (convers√£o em 1 clique) em uma imagem com logotipo. Veja quantos cortes de linha o software gerou no simulador de pontos. Em seguida, tente bordar em um retalho: veja como a m√°quina para muitas vezes e compare com uma matriz manual limpa.",
    "quickSummary": "Digitaliza√ß√£o autom√°tica √© a convers√£o algor√≠tmica de imagens em pontos pelo software, exigindo sempre revis√£o humana antes da produ√ß√£o.",
    "bibliographicReferences": [
      "BROTHER. PE-Design Auto-Digitizing Features and Limitations. Nagoya: Brother Industries, 2022.",
      "BERNINA. Embroidery Software 9 Designer Manual: Auto-Punch vs Manual. Steckborn, 2023.",
      "ARTRELADOS. Como Auditar e Corrigir Matrizes Autom√°ticas. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-011-digitalizador-de-bordado",
    "code": "D-011",
    "term": "Digitalizador de Bordado",
    "level": "Iniciante üü¢",
    "grammarClass": "Substantivo masculino.",
    "category": "Terminologia Geral",
    "summary": "Profissional especializado em interpretar projetos visuais e transform√°-los em matrizes de bordado execut√°veis.",
    "definition": "O digitalizador de bordado (tamb√©m chamado de programador de matrizes ou ponchador) √© o profissional t√©cnico e criativo respons√°vel por converter imagens, logotipos, ilustra√ß√µes e conceitos visuais em arquivos de matriz de bordado eletr√¥nico. Ele atua como o 'tradutor' entre o que os olhos humanos enxergam na tela e o que a m√°quina de bordar consegue executar fisicamente com agulha e linha sobre o tecido.",
    "technicalDetails": "Domina a f√≠sica t√™xtil, o comportamento de tra√ß√£o e compress√£o das linhas, par√¢metros de software (Wilcom, Hatch, Embird, Wings, Tajima DGML) e as limita√ß√µes mec√¢nicas de m√°quinas dom√©sticas e industriais.",
    "construction": [
      "Interpreta√ß√£o e tratamento do desenho gr√°fico",
      "Planejamento estrutural e sequ√™ncia de execu√ß√£o",
      "Constru√ß√£o geom√©trica de objetos e pontos",
      "Testes e valida√ß√£o no tecido de aplica√ß√£o"
    ],
    "howItWorks": [
      "1. Interpreta a imagem e divide o motivo mentalmente em elementos individuais.",
      "2. Planeja a ordem de costura para evitar cortes e manter a estabilidade do tecido.",
      "3. Constr√≥i os objetos calibrando √¢ngulos, densidades, underlays e compensa√ß√µes.",
      "4. Valida a matriz para garantir efici√™ncia mec√¢nica e acabamento perfeito."
    ],
    "mainTypes": [
      "Digitalizador T√©cnico Corporativo (Especialista em logotipos e uniformes)",
      "Digitalizador Art√≠stico (Especialista em relevos 3D, retratos e texturas)",
      "Digitalizador de Ateli√™ (Cria√ß√£o de matrizes personalizadas para enxovais)"
    ],
    "advantages": [
      "‚úî Garante que o bordado final tenha qualidade profissional e alta durabilidade",
      "‚úî Otimiza a velocidade e reduz custos de tempo e materiais na m√°quina",
      "‚úî Evita perdas de pe√ßas nobres por defeitos ou deforma√ß√µes no tecido"
    ],
    "limitations": [
      "Depende de informa√ß√µes claras sobre o tipo de tecido, bastidor e linha que ser√£o utilizados no trabalho."
    ],
    "commonErrors": [
      "‚ùå Digitalizar uma matriz olhando apenas a est√©tica da tela sem pensar na f√≠sica do tecido.",
      "‚ùå Adicionar pontos em excesso acreditando que quantidade define qualidade.",
      "‚ùå N√£o realizar testes pr√°ticos em tecidos novos ou projetos complexos."
    ],
    "voceSabia": "O termo cl√°ssico 'ponchador' vem da √©poca em que as matrizes de bordado eram gravadas em cart√µes perfurados de papel (como o sistema Jacquard), onde cada furo acionava um movimento mec√¢nico!",
    "curiosidadeTecnica": "No DIBE, recomenda-se o uso de 'digitalizador de bordado' como termo mais espec√≠fico e moderno, evitando a ambiguidade da palavra 'programador', que no mercado contempor√¢neo remete a desenvolvedores de softwares e sistemas.",
    "dicaArtrelados": "N√£o avalie uma matriz apenas pela quantidade de pontos que ela possui. Avalie pela maneira como esses pontos foram planejados! A pergunta de ouro do digitalizador √©: 'Essa matriz foi constru√≠da pensando no tecido e na m√°quina em que ser√° bordada?'",
    "applications": [
      "Est√∫dios de bordado, confec√ß√µes, bir√¥s de matrizes, ateli√™s e ind√∫strias t√™xteis."
    ],
    "troubleshootingTips": [
      "Mantenha um caderno ou mostru√°rio com fotos e amostras bordadas de cada matriz testada para r√°pida consulta de par√¢metros de sucesso."
    ],
    "relatedTerms": [
      "Digitaliza√ß√£o de Bordado",
      "Digitaliza√ß√£o Manual",
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
    "origin": "Derivado do latim digitalis com o sufixo de agente -or (aquele que realiza a a√ß√£o). No vocabul√°rio internacional de bordado, equivale aos termos digitizer (ingl√™s) e ponchador (espanhol).",
    "beginnerExplanation": "O digitalizador de bordado √© o profissional que cria as matrizes. Ele √© o 'arquiteto' do bordado: enquanto o desenhista cria a imagem bonita, o digitalizador sabe exatamente como a linha e a agulha v√£o se comportar no tecido para que a pe√ßa saia perfeita.",
    "practicalExercise": "Fa√ßa uma ficha t√©cnica de um bordado antes de sentar ao computador: anote o tecido que ser√° usado (ex: toalha de banho felpuda), a entretela indicada (hidrossol√∫vel em cima + rasga-f√°cil embaixo), a agulha (75/11) e a linha. Exercite pensar como um digitalizador profissional!",
    "quickSummary": "Digitalizador de bordado √© o profissional especializado em transformar cria√ß√µes visuais em arquivos de matrizes t√©cnicas para m√°quinas computadorizadas.",
    "bibliographicReferences": [
      "NNEP. National Network of Embroidery Professionals Guidebook. Canton: NNEP, 2022.",
      "STITCHES MAGAZINE. The Professional Digitizer: Skills and Market Demands. Atlanta, 2021.",
      "ARTRELADOS. A Profiss√£o de Digitalizador de Bordados no Brasil. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-012-direcao-do-ponto",
    "code": "D-012",
    "term": "Dire√ß√£o do Ponto",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos dire√ß√£o e ponto.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Orienta√ß√£o e sentido angular em que os pontos s√£o posicionados dentro de determinado objeto da matriz.",
    "definition": "A dire√ß√£o do ponto indica o sentido ou a orienta√ß√£o em que os pontos s√£o organizados para preencher ou formar uma determinada √°rea do bordado. As passagens de linha podem ser dispostas horizontalmente, verticalmente, diagonalmente ou em √¢ngulos curvil√≠neos. A dire√ß√£o escolhida interfere diretamente na apar√™ncia visual, no brilho da linha e no comportamento f√≠sico do tecido.",
    "technicalDetails": "Definida em graus (0¬∞ a 360¬∞) no software. A dire√ß√£o dos pontos determina o sentido do encolhimento do tecido (Pull) e da expans√£o perpendicular (Push). Al√©m disso, modifica a reflex√£o da luz na superf√≠cie filamentar do fio de poli√©ster ou rayon.",
    "construction": [
      "Linha diretriz angular (Stitch Angle Line)",
      "Pontos de penetra√ß√£o alinhados ao √¢ngulo",
      "Varia√ß√£o angular em colunas curvas",
      "Compensa√ß√£o ajustada conforme a dire√ß√£o"
    ],
    "howItWorks": [
      "1. O programador tra√ßa uma ou mais guias de √¢ngulo dentro da forma.",
      "2. A m√°quina executa os pontos orientando as passagens paralelamente a essa diretriz.",
      "3. A luz incide sobre a linha refletindo o brilho conforme o √¢ngulo estabelecido.",
      "4. As for√ßas de tra√ß√£o do fio atuam no tecido no mesmo sentido da dire√ß√£o do ponto."
    ],
    "mainTypes": [
      "Dire√ß√£o Horizontal (90¬∞ ou 270¬∞)",
      "Dire√ß√£o Vertical (0¬∞ ou 180¬∞)",
      "Dire√ß√£o Diagonal (geralmente 45¬∞ ou 135¬∞)",
      "Dire√ß√£o Radial / Anat√¥mica (acompanha contornos de p√©talas, folhas e curvas)"
    ],
    "advantages": [
      "‚úî Cria contrastes ricos, relevo e sensa√ß√£o de volume sem trocar a cor da linha",
      "‚úî Acompanha as formas naturais do desenho (nervuras de folhas, p√©talas e penas)",
      "‚úî Permite equilibrar e neutralizar as for√ßas de repuxamento sobre a trama do tecido"
    ],
    "limitations": [
      "Dire√ß√µes perfeitamente paralelas √†s tramas do tecido tendem a afundar e sumir se n√£o houver underlay adequado."
    ],
    "commonErrors": [
      "‚ùå Usar a mesma dire√ß√£o em todos os objetos de um desenho, deixando o bordado plano e mon√≥tono.",
      "‚ùå Confundir dire√ß√£o do ponto com densidade (s√£o conceitos totalmente distintos).",
      "‚ùå Mudar de dire√ß√£o sem motivo t√©cnico ou est√©tico, criando um aspecto confuso."
    ],
    "voceSabia": "Duas √°reas bordadas exatamente com o mesmo cone de linha e na mesma densidade parecer√£o ter cores diferentes se uma estiver a 45¬∞ e a outra a 135¬∞, devido √† reflex√£o da luz na linha!",
    "curiosidadeTecnica": "Dire√ß√£o do ponto, dire√ß√£o de costura e dire√ß√£o do bordado s√£o conceitos distintos: dire√ß√£o do ponto √© a orienta√ß√£o angular da linha; dire√ß√£o de costura √© o percurso da m√°quina; dire√ß√£o do bordado √© a orienta√ß√£o geral da composi√ß√£o.",
    "dicaArtrelados": "N√£o pense na dire√ß√£o dos pontos apenas como 'horizontal ou vertical'. Pense nela como uma ferramenta para desenhar com linha! Ao observar uma matriz, pergunte: 'A dire√ß√£o dos pontos ajuda a mostrar a forma e o volume desse objeto?'",
    "applications": [
      "Preenchimentos de folhas, p√©talas, rostos, letras em Satin, bras√µes e pelagens de animais."
    ],
    "troubleshootingTips": [
      "Se um c√≠rculo bordado estiver virando um formato oval no tecido, incline a dire√ß√£o do preenchimento para 45¬∞ e reforce o underlay."
    ],
    "relatedTerms": [
      "Dire√ß√£o de Costura",
      "Dire√ß√£o do Bordado",
      "√Çngulo do Ponto",
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
    "origin": "Do latim directio, -onis (a√ß√£o de dirigir em linha reta, alinhamento), derivado de dirigere (guiar, endireitar), e de punctum (ponto).",
    "beginnerExplanation": "Dire√ß√£o do ponto √© a inclina√ß√£o da linha no bordado (horizontal, vertical ou inclinada). A linha de bordado √© brilhante: quando voc√™ muda a inclina√ß√£o dos pontos, a luz reflete de forma diferente e faz parecer que voc√™ usou dois tons de cores, al√©m de dar volume e relevo ao desenho!",
    "practicalExercise": "Crie dois ret√¢ngulos iguais de 4cm x 2cm lado a lado usando a MESMA linha azul: no primeiro ret√¢ngulo, coloque os pontos a 0¬∞ (horizontal); no segundo, coloque os pontos a 90¬∞ (vertical). Borde os dois no mesmo tecido: olhe a pe√ßa sob a luz da janela e veja a m√°gica da reflex√£o da luz fazendo os ret√¢ngulos parecerem de cores diferentes!",
    "quickSummary": "Dire√ß√£o do ponto √© a inclina√ß√£o angular das passagens de linha na matriz, respons√°vel pela reflex√£o da luz, relevo e compensa√ß√£o de tra√ß√£o no tecido.",
    "bibliographicReferences": [
      "MADEIRA. Light Reflection and Thread Sheen in Rayon & Polyester. Freiburg, 2021.",
      "WILCOM. Stitch Angles and Multi-Angle Object Mastery. Sydney: Wilcom, 2023.",
      "ARTRELADOS. O Poder do Brilho e Dire√ß√£o dos Pontos na Composi√ß√£o Visual. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-013-direcao-de-costura",
    "code": "D-013",
    "term": "Dire√ß√£o de Costura",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos dire√ß√£o e costura.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Percurso e sentido de deslocamento que a m√°quina segue para executar a sequ√™ncia de pontos de um objeto.",
    "definition": "A dire√ß√£o de costura refere-se ao sentido ou percurso que a m√°quina segue para executar uma sequ√™ncia de pontos dentro de um determinado objeto da matriz. Enquanto a dire√ß√£o do ponto indica para onde as linhas est√£o inclinadas, a dire√ß√£o de costura indica o caminho de avan√ßo da m√°quina (por exemplo: bordando de baixo para cima, da esquerda para a direita, ou do centro para as bordas).",
    "technicalDetails": "Est√° diretamente ligada ao posicionamento dos pontos de entrada e sa√≠da do objeto e √† ordem de progress√£o do pant√≥grafo. Uma boa dire√ß√£o de costura evita ac√∫mulo de tecido e minimiza a necessidade de cortes e saltos longos.",
    "construction": [
      "Ponto inicial de entrada",
      "Vetor de progress√£o da costura",
      "Ponto final de sa√≠da",
      "Linhas de deslocamento interno"
    ],
    "howItWorks": [
      "1. A agulha inicia a costura no ponto de entrada definido.",
      "2. O pant√≥grafo movimenta o bastidor fazendo os pontos avan√ßarem no sentido programado.",
      "3. O objeto √© conclu√≠do no ponto de sa√≠da mais pr√≥ximo do pr√≥ximo elemento."
    ],
    "mainTypes": [
      "Costura Linear Unidirecional (Da base ao topo ou de uma ponta √† outra)",
      "Costura do Centro para as Bordas (Ideal para bon√©s e grandes √°reas circulares)",
      "Costura Cont√≠nua / Encadeada (Conecta v√°rios objetos sem cortes)"
    ],
    "advantages": [
      "‚úî Reduz movimentos desnecess√°rios do bastidor e encurta o tempo de m√°quina",
      "‚úî Evita pontos de salto longos e cortes excessivos de linha",
      "‚úî Impede o empurramento cont√≠nuo do tecido para um √∫nico lado (evitando bolhas)"
    ],
    "limitations": [
      "Em formas curvas complexas, requer planejamento cuidadoso para que a costura n√£o cruze sobre pontos rec√©m-formados."
    ],
    "commonErrors": [
      "‚ùå Planejar a costura terminando em uma ponta distante do in√≠cio do pr√≥ximo objeto.",
      "‚ùå Fazer a m√°quina ziguezaguear pelo bastidor gerando dezenas de cortes desnecess√°rios.",
      "‚ùå Ignorar o sentido de empurramento do tecido ao bordar √°reas cont√≠guas."
    ],
    "voceSabia": "Em bon√©s estruturados, a dire√ß√£o de costura obrigat√≥ria √© sempre do CENTRO PARA AS LATERAIS e de BAIXO PARA CIMA, para expulsar as dobras do tecido em dire√ß√£o √†s bordas!",
    "curiosidadeTecnica": "A m√°quina de bordar √© um sistema de coordenadas espaciais: a dire√ß√£o de costura organiza a cinem√°tica do bastidor para que ele execute o caminho mais harm√¥nico e fluido poss√≠vel.",
    "dicaArtrelados": "Quando olhar uma matriz, n√£o enxergue somente o desenho parado. Tente enxergar o caminho que a m√°quina far√° para constru√≠-lo! Pergunte: 'Se eu fosse a m√°quina, qual seria o caminho mais l√≥gico e r√°pido para bordar isso?'",
    "applications": [
      "Sequenciamento de letras cursivas, preenchimento de bras√µes, bordado em bon√©s e monogramas."
    ],
    "troubleshootingTips": [
      "Se o tecido estiver formando uma onda ou dobra no final do preenchimento, altere a dire√ß√£o de costura para come√ßar do centro em dire√ß√£o √†s bordas."
    ],
    "relatedTerms": [
      "Dire√ß√£o do Ponto",
      "Sequ√™ncia de Pontos",
      "Ponto de Entrada",
      "Ponto de Sa√≠da",
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
    "origin": "Do latim directio (dire√ß√£o) e do latim vulgar consutura (ato de coser, costura junta, de consuere). Diferencia-se de dire√ß√£o do ponto por descrever o vetor de deslocamento cinem√°tico do pant√≥grafo.",
    "beginnerExplanation": "Dire√ß√£o de costura √© o caminho que a m√°quina faz ao costurar um objeto: se ela come√ßa de baixo e sobe, se vai da esquerda para a direita, ou se vai do centro para fora. Planejar bem esse caminho faz a m√°quina bordar mais r√°pido, sem ficar cortando linha √† toa e sem empurrar o tecido para um lado s√≥.",
    "practicalExercise": "Borde um desenho de c√≠rculo preenchido em Tatami: primeiro come√ßando pela borda esquerda e terminando na borda direita. Em seguida, borde outro c√≠rculo id√™ntico come√ßando do CENTRO para as bordas. Compare como o segundo c√≠rculo mant√©m o tecido perfeitamente plano e sem formar pregas na borda.",
    "quickSummary": "Dire√ß√£o de costura √© o trajeto e sentido de avan√ßo percorrido pela m√°quina durante a constru√ß√£o dos pontos de um elemento da matriz.",
    "bibliographicReferences": [
      "BARUDAN. Pantograph Movement and Sewing Path Efficiency. Tokyo: Barudan Co., 2021.",
      "KRAUSZ, P. Digitizing Mechanics: Sewing Direction & Fabric Push. New York, 2020.",
      "ARTRELADOS. Rotas de Costura e Redu√ß√£o de Tempo de M√°quina. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-014-direcao-do-bordado",
    "code": "D-014",
    "term": "Dire√ß√£o do Bordado",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos dire√ß√£o e bordado.",
    "category": "Design & Cria√ß√£o",
    "summary": "Orienta√ß√£o geral e composi√ß√£o visual adotada na disposi√ß√£o harm√¥nica de todos os elementos da matriz.",
    "definition": "A dire√ß√£o do bordado √© a orienta√ß√£o geral e estrat√©gica adotada na constru√ß√£o visual e estrutural do conjunto de elementos que comp√µem um bordado. √â um conceito mais amplo do que a dire√ß√£o de um ponto individual ou o percurso de uma costura: envolve a harmonia est√©tica, o dinamismo das linhas, a separa√ß√£o de planos, o contraste visual e a rela√ß√£o espacial do desenho com o bastidor e a pe√ßa de roupa.",
    "technicalDetails": "Abrange a composi√ß√£o integrada de m√∫ltiplos objetos (p√©talas, folhas, caules, fundos, letras), combinando dire√ß√µes complementares para conferir tridimensionalidade, brilho direcionado e estabilidade f√≠sica ao bordado.",
    "construction": [
      "Mapeamento de eixos visuais da composi√ß√£o",
      "Distribui√ß√£o de √¢ngulos contrastantes entre planos",
      "Alinhamento em rela√ß√£o ao fio reto do tecido e do bastidor",
      "Harmonia entre elementos principais e secund√°rios"
    ],
    "howItWorks": [
      "1. O designer/digitalizador estuda a composi√ß√£o visual global do motivo.",
      "2. Atribui orienta√ß√µes espec√≠ficas para cada fam√≠lia de elementos (ex: p√©talas radiais, folhas longitudinais).",
      "3. O conjunto cria ilus√£o de volume, movimento e profundidade ao refletir a luz natural."
    ],
    "mainTypes": [
      "Dire√ß√£o Org√¢nica / Naturalista (Acompanha a anatomia de flores, animais e pessoas)",
      "Dire√ß√£o Geom√©trica / T√©cnica (Alinhada a eixos r√≠gidos em logotipos e emblemas)",
      "Dire√ß√£o Texturizada (M√∫ltiplas orienta√ß√µes para simular tecidos e relevos)"
    ],
    "advantages": [
      "‚úî Confere riqueza est√©tica de alto padr√£o e visual de alta costura",
      "‚úî Separa visualmente diferentes partes do desenho mesmo com a mesma cor de linha",
      "‚úî Cria sensa√ß√£o de movimento e vida sem necessidade de matrizes pesadas"
    ],
    "limitations": [
      "O excesso de dire√ß√µes desordenadas em uma √∫nica matriz pode gerar polui√ß√£o visual e perda de harmonia."
    ],
    "commonErrors": [
      "‚ùå Usar a mesma dire√ß√£o em tudo, deixando o desenho chapado e sem vida.",
      "‚ùå Mudar dire√ß√µes aleatoriamente sem crit√©rio est√©tico ou funcional.",
      "‚ùå Avaliar a dire√ß√£o apenas no monitor sem verificar a incid√™ncia real de luz no tecido."
    ],
    "voceSabia": "No bordado computadorizado de alta costura, a dire√ß√£o dos pontos funciona exatamente como as pinceladas de uma pintura cl√°ssica: o artista direciona a pincelada para transmitir textura, sombra e emo√ß√£o!",
    "curiosidadeTecnica": "A tabela de orienta√ß√£o cl√°ssica do DIBE sugere: Folhas = dire√ß√£o longitudinal; P√©talas = acompanhando a curvatura; Caules = sentido do eixo; Letras = ditadas pela anatomia da tipografia; Fundo = diagonal a 45¬∞.",
    "dicaArtrelados": "Olhe para cada objeto do desenho e pergunte: 'Se eu estivesse desenhando essa forma com um l√°pis, para onde naturalmente faria meus tra√ßos?' Essa pergunta simples √© a melhor b√∫ssola para definir a dire√ß√£o perfeita do bordado!",
    "applications": [
      "Bordados florais, animais, monogramas finos, moda festa e bras√µes her√°ldicos."
    ],
    "troubleshootingTips": [
      "Se um bordado monocrom√°tico (de uma s√≥ cor) estiver parecendo um 'bloco plano', varie as dire√ß√µes dos objetos para criar relevo com a luz."
    ],
    "relatedTerms": [
      "Dire√ß√£o do Ponto",
      "Dire√ß√£o de Costura",
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
    "origin": "Do latim directio (alinhamento, sentido) e do √°rabe al-burdƒÅ (bordado). No planejamento de ateli√™, refere-se √† orienta√ß√£o espacial e ergon√¥mica da pe√ßa no bastidor em rela√ß√£o ao operador da m√°quina.",
    "beginnerExplanation": "Dire√ß√£o do bordado √© a orienta√ß√£o geral do desenho no bastidor (se o desenho vai ficar em p√©, de cabe√ßa para baixo ou deitado de lado). Girar a matriz no √¢ngulo certo antes de colocar no bastidor facilita na hora de encaixar camisetas polo, bolsos ou toalhas sem estragar a pe√ßa.",
    "practicalExercise": "Pegue uma toalha de lavabo com barra de etamine ou tecido plano. No painel da sua m√°quina, gire a matriz em 90¬∞ e 180¬∞ e observe como o bastidor se posiciona em rela√ß√£o ao corpo da m√°quina. Escolha a orienta√ß√£o que permita ao volume restante da toalha ficar solto para fora da m√°quina, sem ficar embolado no bra√ßo livre.",
    "quickSummary": "Dire√ß√£o do bordado √© a orienta√ß√£o espacial do desenho no bastidor e no espa√ßo de trabalho da m√°quina para facilitar o manuseio e a est√©tica da pe√ßa.",
    "bibliographicReferences": [
      "TAJIMA. Hooping Orientation and Garment Clamping Guide. Nagoya, 2022.",
      "BROTHER. Embroidery Orientation & Hoop Alignment Manual. Nagoya, 2023.",
      "ARTRELADOS. Posicionamento Estrat√©gico de Pe√ßas no Bastidor. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-015-deslocamento-da-matriz",
    "code": "D-015",
    "term": "Deslocamento da Matriz",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos deslocamento e matriz.",
    "category": "Opera√ß√£o da M√°quina",
    "summary": "Altera√ß√£o da posi√ß√£o espacial do desenho dentro da √°rea de trabalho do software ou no painel da m√°quina sem modificar suas dimens√µes.",
    "definition": "O deslocamento da matriz corresponde √† altera√ß√£o da posi√ß√£o do desenho ou de seus elementos dentro da √°rea de trabalho do software ou na √°rea √∫til do bastidor na m√°quina de bordar. Em termos simples, √© mover o bordado de um lugar para outro (para cima, para baixo, para a esquerda ou para a direita) mantendo inalterados seu tamanho original, sua sequ√™ncia e sua quantidade de pontos.",
    "technicalDetails": "Opera nos eixos cartesianos X e Y. Deslocar √© diferente de redimensionar (que muda a escala) e de girar (que muda o √¢ngulo). Deve respeitar rigorosamente os limites da √°rea √∫til do bastidor.",
    "construction": [
      "Coordenadas cartesianas X e Y",
      "Ponto central da matriz (centro de origem)",
      "√Årea √∫til delimitada do bastidor",
      "Margem de seguran√ßa perif√©rica"
    ],
    "howItWorks": [
      "1. O operador seleciona a matriz no software ou no painel touchscreen da m√°quina.",
      "2. Utiliza as setas direcionais ou insere coordenadas milim√©tricas.",
      "3. O desenho √© reposicionado na √°rea desejada para alinhar com a pe√ßa real.",
      "4. A m√°quina atualiza o ponto de partida do pant√≥grafo."
    ],
    "mainTypes": [
      "Deslocamento no Software (Prepara√ß√£o pr√©via do arquivo)",
      "Deslocamento no Painel da M√°quina (Ajuste fino antes de iniciar o bordado)",
      "Deslocamento por Coordenadas Num√©ricas (Precis√£o milim√©trica)"
    ],
    "advantages": [
      "‚úî Permite centralizar ou posicionar o bordado exatamente no local desejado da pe√ßa",
      "‚úî Facilita o alinhamento em bolsos, golas, toalhas e faixas estreitas",
      "‚úî Evita ter que rebastidorar a pe√ßa para corrigir pequenos desvios de posi√ß√£o"
    ],
    "limitations": [
      "Deslocar a matriz al√©m da margem de seguran√ßa pode fazer o bastidor colidir mecanicamente com o cabe√ßote ou barra da agulha."
    ],
    "commonErrors": [
      "‚ùå Mover a matriz para muito perto da borda do bastidor sem checar a √°rea √∫til real.",
      "‚ùå Confundir deslocamento (mover) com redimensionamento (mudar tamanho).",
      "‚ùå Centralizar na tela do software sem considerar a posi√ß√£o f√≠sica onde a pe√ßa precisa ser bordada."
    ],
    "voceSabia": "Todas as m√°quinas possuem um sensor de fim de curso: se voc√™ deslocar a matriz para fora do limite permitido, a m√°quina travar√° e exibir√° um aviso sonoro de erro de bastidor antes de come√ßar!",
    "curiosidadeTecnica": "Ao deslocar uma matriz no painel, a m√°quina altera apenas o offset das coordenadas iniciais do arquivo, sem modificar os vetores de dist√¢ncia relativa entre os pontos.",
    "dicaArtrelados": "Antes de clicar em 'Iniciar', olhe para a matriz e imagine onde ela realmente ficar√° no tecido. N√£o pense apenas: 'Est√° no centro da tela?' Pergunte: 'Est√° no lugar exato da pe√ßa que estou bordando?' Essa pequena diferen√ßa evita pe√ßas perdidas!",
    "applications": [
      "Posicionamento em bolsos de camisa, barras de toalhas, golas e personaliza√ß√µes milim√©tricas."
    ],
    "troubleshootingTips": [
      "Use a fun√ß√£o de 'Tra√ßar / Trace / Borda' no painel da m√°quina para fazer a agulha contornar a √°rea do bordado sem costurar, confirmando o posicionamento."
    ],
    "relatedTerms": [
      "Deslocamento de Bastidor",
      "√Årea √ötil do Bastidor",
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
    "origin": "Do latim dislocare (tirar do lugar, mover de uma posi√ß√£o para outra, de dis- + locus, lugar) e do latim matrix, -icis (√∫tero, molde gerador, matriz).",
    "beginnerExplanation": "Deslocamento da matriz √© a capacidade de mover o desenho para a esquerda, direita, cima ou baixo na tela da m√°quina de bordar. Isso serve para centralizar perfeitamente o bordado no local exato onde voc√™ marcou o tecido com a canetinha apag√°vel.",
    "practicalExercise": "Coloque um tecido no bastidor e marque uma cruz com canetinha fantasminha (que apaga com calor). Encaixe o bastidor na m√°quina, acione a luz de posicionamento LED ou a tecla de tracejado/ponteiro e use as setas do painel para mover a matriz at√© que o centro do desenho bata exatamente no cruzamento da sua marca√ß√£o.",
    "quickSummary": "Deslocamento da matriz √© a movimenta√ß√£o das coordenadas centrais do desenho no painel da m√°quina para alinhamento preciso na pe√ßa.",
    "bibliographicReferences": [
      "JANOME. Machine Screen Coordinate System & Design Movement. Tokyo, 2022.",
      "SINGER. EM9305 Embroidery Centering and Positioning Manual. LaVergne, 2021.",
      "ARTRELADOS. Alinhamento a Laser e Centraliza√ß√£o Perfeita de Bordados. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-016-deslocamento-de-bastidor",
    "code": "D-016",
    "term": "Deslocamento de Bastidor",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos deslocamento e bastidor.",
    "category": "Componentes da M√°quina",
    "summary": "Movimento mec√¢nico sincronizado realizado pelo pant√≥grafo para posicionar o tecido sob a agulha a cada ponto.",
    "definition": "O deslocamento de bastidor √© o movimento mec√¢nico coordenado realizado pelo sistema do carro (pant√≥grafo) que sustenta o bastidor e o tecido durante a execu√ß√£o do bordado. Na m√°quina de bordar, a agulha move-se apenas na vertical (eixo Z); √© o bastidor que se movimenta nos eixos horizontal (X) e vertical (Y) entre uma penetra√ß√£o de agulha e outra para formar o desenho.",
    "technicalDetails": "Movimentado por motores de passo de alta precis√£o ou servomotores acoplados a correias dentadas e fusos de esferas, operando em sincronia milim√©trica com a rota√ß√£o do eixo principal a at√© 1.200 rota√ß√µes por minuto.",
    "construction": [
      "Bra√ßo de fixa√ß√£o do bastidor",
      "Motores de passo dos eixos X e Y",
      "Correias sincronizadoras e guias lineares",
      "Sensores √≥pticos de fim de curso"
    ],
    "howItWorks": [
      "1. A agulha sobe e sai completamente do tecido.",
      "2. O pant√≥grafo desloca o bastidor com extrema rapidez para a coordenada do pr√≥ximo ponto.",
      "3. O bastidor para im√≥vel exatamente na posi√ß√£o milim√©trica.",
      "4. A agulha desce e realiza a nova perfura√ß√£o, repetindo o ciclo milhares de vezes."
    ],
    "mainTypes": [
      "Deslocamento Passo a Passo (Forma√ß√£o de pontos normais)",
      "Deslocamento R√°pido / Salto (Movimento amplo entre objetos sem costura)",
      "Deslocamento de Troca de Bastidor (Recuo autom√°tico para colocar e retirar a pe√ßa)"
    ],
    "advantages": [
      "‚úî Precis√£o matem√°tica na forma√ß√£o de curvas e linhas perfeitas",
      "‚úî Repetibilidade id√™ntica em produ√ß√µes industriais de milhares de pe√ßas",
      "‚úî Agilidade e suavidade de movimenta√ß√£o com baixo n√≠vel de ru√≠do"
    ],
    "limitations": [
      "Obstru√ß√µes f√≠sicas no trajeto do bastidor (como tecidos pesados ca√≠dos na mesa ou esbarr√µes) causam perda de passos nos motores e desalinhamento permanente do bordado."
    ],
    "commonErrors": [
      "‚ùå Deixar o tecido pendurado da mesa pesando sobre o bastidor durante o movimento.",
      "‚ùå Esbarrar no bastidor ou na mesa da m√°quina enquanto ela estiver bordando.",
      "‚ùå N√£o lubrificar as guias e trilhos lineares do pant√≥grafo periodicamente."
    ],
    "voceSabia": "Enquanto a agulha sobe e desce, o bastidor tem uma janela de tempo de menos de 30 mil√©simos de segundo para acelerar, mover-se e parar perfeitamente im√≥vel antes da agulha tocar o tecido novamente!",
    "curiosidadeTecnica": "Pense na m√°quina de bordar como algu√©m desenhando com um l√°pis fixo em um ponto enquanto movimenta rapidamente a folha de papel por baixo: agulha fixa + movimento do bastidor = constru√ß√£o do bordado.",
    "dicaArtrelados": "Observe sua m√°quina enquanto ela borda: o bastidor est√° fazendo um verdadeiro desenho no espa√ßo! Aprender a escutar o som suave do pant√≥grafo ajuda a identificar imediatamente qualquer travamento mec√¢nico ou folga antes que a pe√ßa seja danificada.",
    "applications": [
      "Mecanismo universal de movimenta√ß√£o em todas as m√°quinas de bordar computadorizadas."
    ],
    "troubleshootingTips": [
      "Se o bordado 'deslocar' de repente para o lado no meio do trabalho, verifique se o bastidor n√£o bateu em algo ou se a correia do eixo X/Y n√£o est√° frouxa."
    ],
    "relatedTerms": [
      "Carro da M√°quina de Bordado",
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
    "origin": "Do latim dislocare (mover de lugar) e do germ√¢nico bast (fibra de casca de √°rvore utilizada para confeccionar aros de suporte e tecelagem). No bordado mec√¢nico, descreve o deslocamento dos eixos X e Y do pant√≥grafo.",
    "beginnerExplanation": "Deslocamento de bastidor √© o movimento f√≠sico que o bastidor faz para l√° e para c√° enquanto a m√°quina costura. Os motores da m√°quina movem o bastidor milimetricamente a cada ponto para que a agulha perfure no lugar exato do desenho.",
    "practicalExercise": "Coloque a m√°quina para rodar sem agulha e sem linha (ou em modo de simula√ß√£o/teste) e observe como o bra√ßo do pant√≥grafo se move em passos suaves. Repare que se houver algum obst√°culo encostando no bastidor (como uma tesoura na mesa ou a dobra da toalha presa), o bastidor bater√° e perder√° a posi√ß√£o!",
    "quickSummary": "Deslocamento de bastidor √© a movimenta√ß√£o eletromec√¢nica dos eixos X e Y do pant√≥grafo que posiciona o tecido sob a agulha a cada ponto.",
    "bibliographicReferences": [
      "BARUDAN. Servo Motors & Pantograph Motion Mechanics. Tokyo, 2022.",
      "HAPPY JAPAN. HCD2 Series Multi-Needle Mechanics Manual. Yamagata, 2023.",
      "ARTRELADOS. Manuten√ß√£o e Cuidados com o Sistema de Pant√≥grafo. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-017-deslocamento-de-ponto",
    "code": "D-017",
    "term": "Deslocamento de Ponto",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos deslocamento e ponto.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Altera√ß√£o da posi√ß√£o individual ou em bloco de pontos dentro da estrutura da matriz durante a edi√ß√£o.",
    "definition": "O deslocamento de ponto refere-se √† mudan√ßa manual ou param√©trica da posi√ß√£o de um ponto espec√≠fico ou de uma sequ√™ncia de pontos dentro da estrutura da matriz de bordado. Em softwares de edi√ß√£o, esse recurso √© utilizado para realizar corre√ß√µes pontuais, ajustar encaixes milim√©tricos, corrigir falhas de uni√£o ou reposicionar pontos de entrada e sa√≠da.",
    "technicalDetails": "Realizado no modo de edi√ß√£o de n√≥s ou edi√ß√£o de pontos individuais (Stitch Edit Mode), permitindo arrastar coordenadas pontuais sem alterar a l√≥gica global do objeto vetorial circundante.",
    "construction": [
      "Coordenada pontual individual (n√≥ de ponto)",
      "Vetor de liga√ß√£o com o ponto anterior e posterior",
      "Comprimento recalculado do segmento",
      "Ajuste da densidade localizada"
    ],
    "howItWorks": [
      "1. O programador seleciona a ferramenta de edi√ß√£o de pontos no software.",
      "2. Clica sobre o ponto que necessita de corre√ß√£o e o arrasta para a nova posi√ß√£o.",
      "3. O software atualiza a coordenada e recalcula a dist√¢ncia com os pontos vizinhos.",
      "4. A uni√£o entre os objetos torna-se limpa e sem frestas."
    ],
    "mainTypes": [
      "Deslocamento Individual (Ponto a ponto para consertos cir√∫rgicos)",
      "Deslocamento em Bloco (Mover um grupo de pontos selecionados)",
      "Deslocamento de Ponto de Parada / Troca de Cor"
    ],
    "advantages": [
      "‚úî Permite corrigir pequenas falhas de encaixe sem precisar redigitalizar todo o desenho",
      "‚úî Facilita o ajuste de pontos isolados que escaparam da √°rea do contorno",
      "‚úî Otimiza a conex√£o suave entre dois objetos vizinhos"
    ],
    "limitations": [
      "Arrastar pontos aleatoriamente pode criar segmentos excessivamente longos (que afrouxam) ou curtos demais (que quebram a linha)."
    ],
    "commonErrors": [
      "‚ùå Deslocar pontos de uma matriz pronta sem entender a fun√ß√£o original deles no desenho.",
      "‚ùå Criar dist√¢ncias maiores que 7mm entre pontos simples sem usar ponto de arremate.",
      "‚ùå Deixar pontos acumulados no mesmo lugar gerando n√≥s indesejados."
    ],
    "voceSabia": "Muitos pontos que parecem 'fora do lugar' na tela do computador foram colocados propositalmente pelo programador experiente para compensar a tra√ß√£o que o tecido sofrer√° durante o bordado!",
    "curiosidadeTecnica": "A edi√ß√£o e deslocamento direto de pontos em arquivos prontos (como .DST ou .PES) altera os comandos brutos de m√°quina sem suporte aos objetos vetoriais inteligentes.",
    "dicaArtrelados": "N√£o corrija uma matriz simplesmente porque um ponto parece 'fora do lugar' na tela! Primeiro descubra por que ele est√° naquela posi√ß√£o. Muitas vezes, aquilo que parece um errinho na tela √© o segredo que mant√©m o bordado perfeito no tecido real.",
    "applications": [
      "Refinamento de matrizes prontas, corre√ß√£o de monogramas e ajuste fino de contornos."
    ],
    "troubleshootingTips": [
      "Ao deslocar um ponto, confira se o comprimento da linha entre os pontos vizinhos permanece entre 1.0mm e 6.0mm."
    ],
    "relatedTerms": [
      "Corre√ß√£o de Pontos",
      "Comprimento do Ponto",
      "Dire√ß√£o do Ponto",
      "Sequ√™ncia de Pontos"
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
    "origin": "Do latim dislocare (mover do lugar) e de punctum (ponto perfurado). Refere-se √† imperfei√ß√£o onde a penetra√ß√£o da agulha ocorre fora da coordenada originalmente programada.",
    "beginnerExplanation": "Deslocamento de ponto √© quando o ponto cai fora do lugar certo no tecido. O contorno preto sai do desenho, as folhas n√£o encostam na flor ou as letras ficam tortas. Quase sempre a culpa √© do tecido que esticou ou da entretela que estava frouxa no bastidor!",
    "practicalExercise": "Borde um c√≠rculo com contorno preto fino em uma malha el√°stica de camiseta: na primeira tentativa, use apenas uma entretela rasga-f√°cil fina colocada frouxa no bastidor. Na segunda tentativa, use entretela de malha colada ou recorta-f√°cil bem firme e esticada como um tambor. Compare e veja como na primeira o contorno sai torto (ponto deslocado) e na segunda fica perfeito.",
    "quickSummary": "Deslocamento de ponto √© o desvio mec√¢nico ou estrutural da penetra√ß√£o da agulha em rela√ß√£o √† matriz, causado por instabilidade do tecido ou folga no bastidor.",
    "bibliographicReferences": [
      "KRAUSZ, P. Troubleshooting Stitch Registration & Fabric Shift. New York: Textile Press, 2021.",
      "MADEIRA. Embroidery Quality Audit: Overcoming Stitch Misalignment. Freiburg, 2023.",
      "ARTRELADOS. Como Eliminar Desalinhamento de Contornos no Bordado. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-018-deslocamento-de-linha",
    "code": "D-018",
    "term": "Deslocamento de Linha",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos deslocamento e linha.",
    "category": "Agulhas & Fios",
    "summary": "Trajet√≥ria e percurso cont√≠nuo percorrido pela linha de bordado desde a alimenta√ß√£o at√© a fixa√ß√£o no tecido.",
    "definition": "No contexto do bordado eletr√¥nico, deslocamento de linha descreve o movimento, a trajet√≥ria e o percurso realizado pelo fio durante a execu√ß√£o da matriz. A linha n√£o permanece est√°tica: ela √© tracionada a partir do cone, atravessa guias e tensionadores, sobe e desce pela barra de agulha, percorre saltos entre objetos e √© ancorada no tecido pelos pontos.",
    "technicalDetails": "Envolve a din√¢mica do fio sob tens√£o constante (110g a 130g na linha superior) em alta velocidade. O planejamento de trajet√≥rias curtas e organizadas na matriz reduz o consumo de linha e o tempo de execu√ß√£o.",
    "construction": [
      "Trajeto da linha no cabe√ßote e guias",
      "Linha de salto entre objetos (jump stitch)",
      "Conectores ocultos (travel runs)",
      "Ponto de corte e ancoragem de arremate"
    ],
    "howItWorks": [
      "1. A linha √© alimentada suavemente pelo cone.",
      "2. Acompanha os deslocamentos espaciais do bastidor e da agulha.",
      "3. Forma os pontos de costura ou conecta √°reas vizinhas.",
      "4. √â seccionada pelo cortador autom√°tico de linha quando necess√°rio."
    ],
    "mainTypes": [
      "Deslocamento com Costura (Forma√ß√£o ativa de pontos)",
      "Deslocamento sem Costura / Salto (Linha conduzida pelo ar)",
      "Deslocamento Embutido / Oculto (Costura corrida sob √°reas a serem cobertas)"
    ],
    "advantages": [
      "‚úî Um percurso eficiente reduz o tempo total de produ√ß√£o e o desgaste da m√°quina",
      "‚úî Minimiza fiapos e linhas soltas na frente e no avesso do bordado",
      "‚úî Otimiza o consumo de cones de linha e reduz custos operacionais"
    ],
    "limitations": [
      "Deslocamentos longos sem corte deixam fios esticados sobre o tecido que exigem limpeza manual posterior."
    ],
    "commonErrors": [
      "‚ùå Confundir deslocamento de linha com troca de cor ou regulagem de tens√£o.",
      "‚ùå Permitir que a linha fa√ßa trajetos cruzados sobre √°reas abertas que ficar√£o vis√≠veis na pe√ßa.",
      "‚ùå Ignorar o consumo extra de linha provocado por matrizes mal sequenciadas."
    ],
    "voceSabia": "Uma matriz aparentemente pequena de 5.000 pontos com percursos desorganizados pode consumir mais metros de linha do que uma matriz bem sequenciada de 8.000 pontos!",
    "curiosidadeTecnica": "O c√°lculo m√©trico exato do consumo de linha em softwares profissionais considera todos os deslocamentos superiores somados √† propor√ß√£o de 30% a 35% de linha de bobina no verso.",
    "dicaArtrelados": "Quando pensar no custo de uma matriz, n√£o olhe apenas para o tamanho do desenho! Pense tamb√©m no caminho que a linha precisar√° percorrer. Esse racioc√≠nio √© fundamental para quem deseja calcular com precis√£o o custo real do bordado.",
    "applications": [
      "C√°lculo de consumo de linha, or√ßamentos, planejamento de produ√ß√£o e sequenciamento."
    ],
    "troubleshootingTips": [
      "Se ficarem muitas linhas esticadas na frente do bordado, ative o corte autom√°tico para saltos maiores que 3mm no software."
    ],
    "relatedTerms": [
      "Corte de Linha",
      "Ponto de Salto",
      "Dire√ß√£o de Costura",
      "Sequ√™ncia de Pontos"
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
    "origin": "Do latim dislocare (deslocar) e de linea (fio de linho, linha). Descreve o fen√¥meno de arraste e movimenta√ß√£o dos filamentos de bordado fora de sua trajet√≥ria esperada.",
    "beginnerExplanation": "Deslocamento de linha √© quando o fio de bordado escorrega ou sai do lugar depois de costurado, formando la√ßos soltos ou deixando o contorno com dentes e fiapos. Isso acontece muito quando a tens√£o da linha est√° muito frouxa ou quando usamos pontos longos demais que n√£o se prendem bem.",
    "practicalExercise": "Fa√ßa uma coluna de ponto cheio bem larga (8mm) sem underlay em um tecido macio. Passe a unha suavemente sobre os pontos: repare como os fios se movem e se abrem facilmente (deslocamento de linha). Agora fa√ßa a mesma coluna com 4mm de largura e underlay: sinta como a linha fica travada e firme.",
    "quickSummary": "Deslocamento de linha √© a movimenta√ß√£o indesejada dos filamentos de linha na superf√≠cie do tecido devido √† falta de fixa√ß√£o, tens√£o frouxa ou comprimento excessivo.",
    "bibliographicReferences": [
      "COATS THREADS. Filament Thread Stability & Tension Control in Embroidery. London, 2022.",
      "GUNOLD. Thread Tension, Friction & Laying Precision Guide. Stockstadt, 2021.",
      "ARTRELADOS. Tens√£o e Fixa√ß√£o de Linhas para Alta Durabilidade. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-019-distancia-entre-pontos",
    "code": "D-019",
    "term": "Dist√¢ncia entre Pontos",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo e locu√ß√£o prepositiva.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Espa√ßamento f√≠sico entre penetra√ß√µes sucessivas da agulha ou entre passagens de linhas na matriz.",
    "definition": "A dist√¢ncia entre pontos corresponde ao espa√ßo geom√©trico existente entre pontos sucessivos ou entre passagens vizinhas de linha dentro de uma matriz de bordado. Esse par√¢metro regula a densidade local, a cobertura do tecido, o consumo de linha e o n√≠vel de esfor√ßo mec√¢nico sobre as fibras t√™xteis.",
    "technicalDetails": "Mede-se em mil√≠metros ou d√©cimos de mil√≠metro. Em preenchimentos, a dist√¢ncia entre passagens varia tipicamente de 0.38mm a 0.45mm; em pontos corridos (Running Stitch), o comprimento entre perfura√ß√µes varia de 2.0mm a 3.5mm.",
    "construction": [
      "Espa√ßamento lateral entre colunas",
      "Comprimento longitudinal do ponto",
      "Intervalo de penetra√ß√£o da agulha",
      "Toler√¢ncia para o calibre da linha (T√≠tulo 40)"
    ],
    "howItWorks": [
      "1. O programador define o valor de espa√ßamento no painel de propriedades do ponto.",
      "2. O software calcula a posi√ß√£o exata de cada penetra√ß√£o de agulha.",
      "3. A m√°quina avan√ßa o bastidor na dist√¢ncia programada a cada descida da agulha."
    ],
    "mainTypes": [
      "Dist√¢ncia Curta (0.35mm a 0.40mm - Cobertura intensa e fechada)",
      "Dist√¢ncia M√©dia (0.42mm a 0.45mm - Padr√£o equilibrado universal)",
      "Dist√¢ncia Ampla (0.60mm a 1.50mm - Efeitos sombreados e abertos)"
    ],
    "advantages": [
      "‚úî Permite calibrar a cobertura exata para tecidos lisos, felpudos ou el√°sticos",
      "‚úî Controla com precis√£o a rigidez e a maleabilidade da pe√ßa bordada",
      "‚úî Evita perfura√ß√µes excessivas no mesmo local que danificam o tecido"
    ],
    "limitations": [
      "Dist√¢ncias excessivamente curtas causam quebra de agulha e corte do tecido; dist√¢ncias muito longas deixam o tecido transparente."
    ],
    "commonErrors": [
      "‚ùå Colocar os pontos o mais pr√≥ximos poss√≠vel acreditando que isso sempre melhora a qualidade.",
      "‚ùå Usar a mesma dist√¢ncia entre pontos para linhas de diferentes espessuras.",
      "‚ùå Ignorar que tecidos texturizados (toalhas) exigem suporte pl√°stico antes de alterar a dist√¢ncia."
    ],
    "voceSabia": "A espessura de uma linha de bordado de poli√©ster 120/2 √© de aproximadamente 0.38mm a 0.40mm: por isso, uma dist√¢ncia entre pontos menor que 0.35mm faz os fios se encavalarem um sobre o outro!",
    "curiosidadeTecnica": "Dist√¢ncia entre pontos √© a medida de espa√ßamento; densidade √© o resultado da concentra√ß√£o dessa distribui√ß√£o na √°rea.",
    "dicaArtrelados": "N√£o pense 'quanto mais pontos, melhor'! Pense: 'qual √© a quantidade e a dist√¢ncia adequada de pontos para este tecido, este desenho e este efeito?' Essa mudan√ßa de mentalidade √© o marco que separa a amadora da bordadeira profissional.",
    "applications": [
      "Ajuste fino de preenchimentos Tatami, Ponto Satin, Ponto Corrido e desenhos vazados."
    ],
    "troubleshootingTips": [
      "Se o tecido estiver cortando ou furando nas bordas, aumente a dist√¢ncia entre pontos em pelo menos 0.05mm a 0.10mm."
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
    "origin": "Do latim distantia (afastamento, intervalo espacial entre dois pontos, de distare, estar afastado) e punctum (ponto). Par√¢metro geom√©trico primordial na f√≠sica da costura mec√¢nica.",
    "beginnerExplanation": "Dist√¢ncia entre pontos √© o comprimento que a linha percorre no tecido entre uma descida da agulha e a pr√≥xima descida. Se a dist√¢ncia for muito curtinha (menos de 1mm), a agulha fura o tecido no mesmo lugar e corta o pano; se for muito longa (mais de 8mm), a linha fica solta e engancha no dedo!",
    "practicalExercise": "No seu software, programe tr√™s linhas retas de ponto corrido: a primeira com comprimento de 1.0mm, a segunda com 2.5mm e a terceira com 7.0mm. Borde no mesmo tecido: passe o dedo sobre elas e veja a flexibilidade de cada uma, observando que 2.5mm a 3.0mm √© a medida perfeita para contornos bonitos e seguros.",
    "quickSummary": "Dist√¢ncia entre pontos √© a extens√£o linear entre duas perfura√ß√µes consecutivas da agulha, calibrada para garantir resist√™ncia e defini√ß√£o est√©tica.",
    "bibliographicReferences": [
      "WILCOM. Stitch Length and Pitch Guidelines in Digitizing. Sydney: Wilcom, 2022.",
      "BERNINA. Stitch Length Fundamentals for Freehand and Automated Embroidery. Steckborn, 2021.",
      "ARTRELADOS. Calibra√ß√£o de Comprimento de Ponto para Cada Tipo de Tecido. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-020-distancia-de-seguranca",
    "code": "D-020",
    "term": "Dist√¢ncia de Seguran√ßa",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo e locu√ß√£o adjetiva.",
    "category": "T√©cnicas de Bastidor",
    "summary": "Margem de espa√ßo livre obrigat√≥ria mantida entre o desenho bordado e os limites f√≠sicos do bastidor ou da pe√ßa.",
    "definition": "A dist√¢ncia de seguran√ßa √© a margem de espa√ßo livre mantida entre a √°rea que ser√° bordada e determinados limites f√≠sicos que n√£o devem ser ultrapassados pela agulha ou pelo p√©-calcador. Esses limites compreendem a borda pl√°stica do bastidor, os limites de fim de curso da m√°quina, costuras grossas da pe√ßa, bot√µes, z√≠peres e bainhas.",
    "technicalDetails": "Recomenda-se uma margem m√≠nima de seguran√ßa de 10mm a 15mm entre o contorno mais externo do desenho e a borda interna do aro do bastidor para evitar colis√µes catastr√≥ficas do p√©-calcador com o aro.",
    "construction": [
      "√Årea total nominal do bastidor",
      "√Årea √∫til real de bordado (Safe Zone)",
      "Margem de recuo de seguran√ßa (10mm a 15mm)",
      "Espa√ßamento em rela√ß√£o a z√≠peres e bainhas"
    ],
    "howItWorks": [
      "1. O operador verifica o tamanho total da matriz no software.",
      "2. Escolhe um bastidor cuja √°rea √∫til contenha o bordado mais a margem de seguran√ßa.",
      "3. Realiza o teste de rastreio (Trace) na m√°quina antes de costurar para validar a folga."
    ],
    "mainTypes": [
      "Dist√¢ncia de Seguran√ßa do Bastidor (Protege p√©-calcador e agulha)",
      "Dist√¢ncia de Seguran√ßa da Pe√ßa (Evita costurar sobre bainhas ou bot√µes)",
      "Dist√¢ncia de Seguran√ßa em Bastidor de Bon√© (Evita colis√£o com a aba e presilhas)"
    ],
    "advantages": [
      "‚úî Previne quebras violentas de agulhas e entortamento da barra de agulha",
      "‚úî Protege os aros do bastidor contra trincas e marcas de impacto",
      "‚úî Garante que o tecido mantenha tens√£o uniforme at√© a extremidade do desenho"
    ],
    "limitations": [
      "Reduz ligeiramente o tamanho m√°ximo do bordado em rela√ß√£o √† medida externa nominal do bastidor."
    ],
    "commonErrors": [
      "‚ùå Bordar uma matriz de 13x18cm em um bastidor nominal de 13x18cm sem folga de seguran√ßa.",
      "‚ùå Posicionar o desenho colado na bainha de uma toalha dificultando o fechamento do aro.",
      "‚ùå N√£o executar o rastreio pr√©vio (Trace) no painel antes de disparar o bordado."
    ],
    "voceSabia": "Quando o p√©-calcador bate na borda do bastidor em velocidade de 800 PPM, o impacto pode desregular o ponto de sincronismo da lan√ßadeira (timing), exigindo visita de assist√™ncia t√©cnica!",
    "curiosidadeTecnica": "O DIBE recomenda a regra das 3 Zonas de Bastidor: Zona Verde (√Årea recomendada central), Zona Amarela (Pr√≥xima ao limite) e Zona Vermelha (Margem de risco proibida).",
    "dicaArtrelados": "Nunca planeje um bordado olhando apenas para o tamanho nominal do bastidor! Planeje olhando para a √°rea √∫til, para a pe√ßa e para o posicionamento final. Antes de iniciar, pergunte: 1. O desenho cabe? 2. Est√° bem posicionado? 3. Existe margem de seguran√ßa? Se os tr√™s forem sim, borde com tranquilidade!",
    "applications": [
      "Montagem de bastidores, enquadramento de matrizes, bordado de bon√©s e toalhas."
    ],
    "troubleshootingTips": [
      "Se o desenho estiver a menos de 1cm da borda do bastidor, mude para o bastidor imediatamente maior ou reduza proporcionalmente a matriz em 5%."
    ],
    "relatedTerms": [
      "√Årea √ötil do Bastidor",
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
    "origin": "Do latim distantia (afastamento) e securitas, -atis (estado de seguran√ßa, livre de perigo, de securus, seguro). Norma ergon√¥mica e mec√¢nica fundamental de opera√ß√£o.",
    "beginnerExplanation": "Dist√¢ncia de seguran√ßa √© o espa√ßo livre que voc√™ deve deixar entre o desenho do bordado e o aro de pl√°stico do bastidor (geralmente pelo menos 1 a 2 cent√≠metros). Se voc√™ bordar muito perto da borda do bastidor, o p√© da agulha pode bater no pl√°stico e quebrar a m√°quina!",
    "practicalExercise": "Coloque um bastidor vazio na m√°quina e leve o pant√≥grafo at√© o limite m√°ximo do campo de bordado. Observe com os olhos a dist√¢ncia que sobra entre o p√©-calcador da m√°quina e a borda interna de pl√°stico do bastidor: memorize essa folga de seguran√ßa para nunca encostar matrizes na borda.",
    "quickSummary": "Dist√¢ncia de seguran√ßa √© a margem livre obrigat√≥ria mantida entre a √°rea de bordado e as bordas f√≠sicas do bastidor para evitar colis√µes mec√¢nicas.",
    "bibliographicReferences": [
      "BROTHER. Safety Clearances and Hoop Margin Operating Instructions. Nagoya, 2022.",
      "TAJIMA. Frame Collision Prevention & Border Clearance Manual. Nagoya, 2021.",
      "ARTRELADOS. Guia de Seguran√ßa e Prote√ß√£o de Bastidores no Ateli√™. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-021-densidade-de-pontos-avancada",
    "code": "D-021",
    "term": "Densidade de Pontos (Conceitos & Calibra√ß√£o)",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos densidade e pontos.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Guia pr√°tico e did√°tico sobre o comportamento, diagn√≥stico e equil√≠brio da concentra√ß√£o de pontos.",
    "definition": "A densidade de pontos descreve a quantidade e a concentra√ß√£o de pontos de bordado distribu√≠dos em determinada √°rea da matriz. √â o conceito fundamental para compreender por que duas matrizes visualmente semelhantes na tela produzem resultados completamente diferentes no tecido. A densidade ideal n√£o √© um n√∫mero est√°tico: depende da intera√ß√£o entre tecido, linha, agulha, estabilizador, underlay e geometria do desenho.",
    "technicalDetails": "Analisa a densidade alta (que pode causar endurecimento e repuxo) versus a densidade baixa (que pode deixar o tecido ralo), estabelecendo par√¢metros de calibra√ß√£o baseados no equil√≠brio din√¢mico dos materiais t√™xteis.",
    "construction": [
      "Concentra√ß√£o de penetra√ß√µes por mm¬≤",
      "Espa√ßamento entre colunas de pontos",
      "Equil√≠brio de camadas de underlay e topo",
      "Adequa√ß√£o ao peso e elasticidade do tecido"
    ],
    "howItWorks": [
      "1. A bordadeira avalia a textura do tecido (liso, el√°stico ou felpudo).",
      "2. Escolhe a densidade proporcional √† espessura da linha e finalidade da pe√ßa.",
      "3. O software gera pontos equilibrados que cobrem sem sobrecarregar a estrutura t√™xtil."
    ],
    "mainTypes": [
      "Densidade para Tecidos Leves / Delicados (0.45mm a 0.50mm)",
      "Densidade para Tecidos M√©dios / Planos (0.40mm a 0.42mm)",
      "Densidade para Tecidos Pesados / Couro (0.45mm a 0.55mm com agulha especial)"
    ],
    "advantages": [
      "‚úî Toque macio e confort√°vel na pe√ßa pronta",
      "‚úî Cobertura s√≥lida e cores vibrantes da linha",
      "‚úî Baixa taxa de quebras e alta produtividade"
    ],
    "limitations": [
      "N√£o h√° um n√∫mero m√°gico √∫nico: copiar configura√ß√µes de uma matriz para outra em tecidos diferentes pode gerar falhas."
    ],
    "commonErrors": [
      "‚ùå Pensar que 'quanto mais denso, mais bonito fica o bordado'.",
      "‚ùå Ignorar que a linha e a agulha tamb√©m ocupam espa√ßo f√≠sico no tecido.",
      "‚ùå Tentar compensar tecido fino colocando pontos em excesso."
    ],
    "voceSabia": "Uma toalha felpuda e uma malha el√°stica de camiseta exigem tratamentos completamente diferentes: a toalha precisa de pl√°stico hidrossol√∫vel por cima; a malha precisa de entretela recorta-f√°cil est√°vel por baixo!",
    "curiosidadeTecnica": "Em colunas Satin muito estreitas (menos de 1.5mm), a densidade deve ser aberta (menos pontos) para que a agulha n√£o corte o tecido ao perfurar as duas bordas pr√≥ximas.",
    "dicaArtrelados": "N√£o pergunte apenas 'quantos pontos tem esta matriz?'. Pergunte tamb√©m: 'como esses pontos est√£o distribu√≠dos e para qual tecido ela foi feita?' Essa segunda pergunta √© a chave para o sucesso do ateli√™!",
    "applications": [
      "Calibra√ß√£o de matrizes para uniformes, toalhas, malhas de beb√™ e artigos esportivos."
    ],
    "troubleshootingTips": [
      "Em caso de tecido franzido ao redor do desenho, reduza a densidade em 10% e aumente a gramatura da entretela."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Densidade Vari√°vel",
      "Dist√¢ncia entre Pontos",
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
    "origin": "Do latim densitas (densidade, espessura) e de punctum (ponto), complementado pelos termos conceituais de calibra√ß√£o m√©trica da engenharia t√™xtil moderna.",
    "beginnerExplanation": "Calibrar a densidade de pontos √© como regular o sal da comida: n√£o pode faltar nem sobrar! Para cada tipo de tecido (malha macia, sarja grossa, toalha felpuda), existe uma regulagem exata de pontos para o bordado ficar macio, bonito e dur√°vel por anos de lavagem.",
    "practicalExercise": "Crie uma tabela de testes no seu ateli√™: pegue retalhos dos 5 tecidos que voc√™ mais usa (Piqu√™, Algod√£o, Sarja, Toalha e Microfibra). Borde a mesma matriz pequena em cada um deles com suas densidades recomendadas e anote a melhor configura√ß√£o em uma pastinha de mostru√°rio.",
    "quickSummary": "Calibra√ß√£o de densidade de pontos √© o ajuste sistem√°tico do espa√ßamento de pontos em harmonia com o tecido, linha e entretela para excel√™ncia de acabamento.",
    "bibliographicReferences": [
      "DEVERSON, D. Master Guide to Stitch Density Calibration. London: Textile Press, 2022.",
      "WILCOM. Fabric Assistant & Automatic Density Calibration Guide. Sydney, 2023.",
      "ARTRELADOS. Tabela Mestra de Calibra√ß√£o de Densidades por Tecido. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-022-densidade-variavel-efeitos",
    "code": "D-022",
    "term": "Densidade Vari√°vel & Efeitos Visuais",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada por substantivos e adjetivos.",
    "category": "Design & Cria√ß√£o",
    "summary": "Utiliza√ß√£o criativa de gradientes e varia√ß√µes de densidade para produzir profundidade, texturas e ilus√£o de relevo.",
    "definition": "A densidade vari√°vel para efeitos visuais √© a aplica√ß√£o de n√≠veis din√¢micos de concentra√ß√£o de pontos dentro de uma mesma √°rea ou entre regi√µes de uma matriz para produzir efeitos de luz, sombra, transi√ß√µes de cores (degrad√™), profundidade e texturas diferenciadas, sem necessariamente trocar a cor da linha.",
    "technicalDetails": "Utiliza ferramentas de densidade progressiva e gradiente nos softwares, variando o espa√ßamento entre 0.35mm (√°rea densa e escura) e 2.0mm (√°rea aberta e luminosa), aproveitando a reflex√£o da luz na linha.",
    "construction": [
      "Preenchimento progressivo / gradiente",
      "Transi√ß√£o suave entre densidades",
      "Mescla de duas cores com gradientes cruzados",
      "Texturiza√ß√£o visual por espa√ßamento"
    ],
    "howItWorks": [
      "1. O programador define uma √°rea de partida fechada e uma de t√©rmino aberta.",
      "2. O software distribui as passagens de linha com espa√ßamento crescente.",
      "3. O efeito visual cria ilus√£o de volume e curvatura tridimensional no tecido."
    ],
    "mainTypes": [
      "Efeito Degrad√™ Bicolor (Duas cores entrela√ßadas por gradiente)",
      "Efeito Sombreamento Monocrom√°tico (Uma √∫nica cor gerando claro e escuro)",
      "Efeito Textura Aberta (Simula√ß√£o de tecidos leves e transpar√™ncia)"
    ],
    "advantages": [
      "‚úî Agrega imenso valor art√≠stico e sofistica√ß√£o √†s matrizes",
      "‚úî Reduz a quantidade de trocas de cores necess√°rias na m√°quina",
      "‚úî Alivia o peso do bordado em √°reas grandes de paisagens e personagens"
    ],
    "limitations": [
      "Exige que o tecido de suporte tenha cor compat√≠vel ou que a transi√ß√£o seja testada previamente."
    ],
    "commonErrors": [
      "‚ùå Criar transi√ß√µes com saltos abruptos de densidade que deixam falhas vis√≠veis.",
      "‚ùå Aplicar gradientes em √°reas min√∫sculas onde a transi√ß√£o n√£o pode ser percebida.",
      "‚ùå Esquecer de testar o efeito no tecido real antes da produ√ß√£o."
    ],
    "voceSabia": "Voc√™ pode criar uma esfera com apar√™ncia tridimensional perfeita usando apenas UMA linha azul, simplesmente variando a densidade e o √¢ngulo dos pontos de acordo com a curvatura da esfera!",
    "curiosidadeTecnica": "Softwares avan√ßados permitem criar curvas de gradiente personalizadas (senoidais, exponenciais e lineares) para simular ilumina√ß√£o solar em paisagens bordadas.",
    "dicaArtrelados": "A densidade vari√°vel √© como o 'volume' da m√∫sica: n√£o precisamos deixar tudo no m√°ximo para criar impacto! Uma matriz bem constru√≠da sabe onde colocar mais e onde colocar menos linha para encantar o cliente.",
    "applications": [
      "Bordados realistas, rostos, p√¥r do sol, p√©talas sombreadas e efeitos de √°gua."
    ],
    "troubleshootingTips": [
      "Se a transi√ß√£o entre duas cores parecer marcada por uma linha dura, aumente a √°rea de sobreposi√ß√£o (overlap) do gradiente em 3mm."
    ],
    "relatedTerms": [
      "Densidade Vari√°vel",
      "Densidade de Pontos",
      "Ponto de Preenchimento",
      "Dire√ß√£o do Ponto"
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
    "origin": "Do latim densitas variabilis e do latim effectus (resultado, realiza√ß√£o visual, de efficere, produzir), conjugado √† teoria √≥ptica das cores e ilumina√ß√£o de superf√≠cies.",
    "beginnerExplanation": "√â o uso art√≠stico da densidade de pontos para criar efeitos de luz, brilho, penumbra e degrad√™s incr√≠veis. Em vez de preencher tudo chapado, voc√™ brinca com os espa√ßos para fazer o bordado parecer uma pintura realista com profundidade.",
    "practicalExercise": "Desenhe uma ma√ß√£ no software: na parte onde a luz bate, use densidade aberta (0.90mm); na parte do meio, use densidade m√©dia (0.45mm); e na parte de sombra embaixo, use densidade fechada (0.38mm) com um toque de linha marrom misturada. Borde e surpreenda-se com o efeito 3D!",
    "quickSummary": "Densidade vari√°vel para efeitos visuais √© a manipula√ß√£o art√≠stica da concentra√ß√£o de pontos para gerar profundidade, texturas e ilus√£o tridimensional.",
    "bibliographicReferences": [
      "NICOLAS, C. Machine Embroidery as Fine Art: Shading & Perspective. Paris, 2022.",
      "HATCH. Artistic Shading & Gradient Effects in Modern Embroidery. Sydney: Wilcom, 2023.",
      "ARTRELADOS. Efeitos Especiais e Pintura com Agulha no Bordado Computadorizado. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-023-distribuicao-de-pontos",
    "code": "D-023",
    "term": "Distribui√ß√£o de Pontos",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos distribui√ß√£o e pontos.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Maneira como os pontos s√£o organizados, espalhados e equilibrados no espa√ßo dentro da matriz.",
    "definition": "A distribui√ß√£o de pontos corresponde √† maneira como os pontos s√£o organizados e espalhados dentro de um objeto ou regi√£o da matriz de bordado. Est√° intimamente relacionada √† densidade, mas n√£o deve ser confundida com ela: enquanto a densidade se refere √† concentra√ß√£o pura de pontos em determinada √°rea, a distribui√ß√£o descreve como esses pontos est√£o espacialmente arranjados (uniformes, concentrados, afastados, radiais ou acompanhando curvas).",
    "technicalDetails": "Analisa a regularidade topol√≥gica dos pontos na malha vetorial. Uma distribui√ß√£o equilibrada evita ac√∫mulos pontuais que criam relevos duros ou falhas perif√©ricas causadas pela tra√ß√£o das linhas.",
    "construction": [
      "Malha geom√©trica de penetra√ß√µes",
      "Espa√ßamento constante ou progressivo",
      "Alinhamento √†s curvas do objeto",
      "Balanceamento de underlay e cobertura"
    ],
    "howItWorks": [
      "1. O software calcula o posicionamento de cada ponto ao longo do vetor.",
      "2. O digitalizador ajusta a dispers√£o para acompanhar a geometria do desenho.",
      "3. A m√°quina costura os pontos de forma equilibrada, mantendo a tens√£o homog√™nea no tecido."
    ],
    "mainTypes": [
      "Distribui√ß√£o Uniforme (Padr√£o em preenchimentos regulares)",
      "Distribui√ß√£o Anat√¥mica / Org√¢nica (Acompanha p√©talas e folhas)",
      "Distribui√ß√£o Concentrada / Focal (Para centros de flores e olhos)"
    ],
    "advantages": [
      "‚úî Constr√≥i uma superf√≠cie visualmente equilibrada e sem falhas",
      "‚úî Evita ac√∫mulo de linha e rigidez excessiva em cantos fechados",
      "‚úî Proporciona tens√£o uniforme sobre o tecido durante a execu√ß√£o"
    ],
    "limitations": [
      "Formas com pontas muito agudas exigem t√©cnicas especiais (como cantos em meia-esquadria ou corte de pontos) para manter a distribui√ß√£o regular."
    ],
    "commonErrors": [
      "‚ùå Olhar apenas o n√∫mero total de pontos sem verificar onde eles est√£o concentrados.",
      "‚ùå Permitir que dezenas de pontos se acumulem no mesmo v√©rtice de uma forma triangular.",
      "‚ùå Deixar √°reas desigualmente cobertas por m√° distribui√ß√£o do underlay."
    ],
    "voceSabia": "Uma matriz pode ter a mesma quantidade de pontos de outra, mas se a distribui√ß√£o for ruim, uma parecer√° pesada e repuxada enquanto a outra ficar√° leve e perfeita!",
    "curiosidadeTecnica": "Em cantos muito estreitos no ponto Satin, softwares modernos usam o recurso de 'Smart Corners' (Cantos Inteligentes) para redistribuir e reduzir pontos nas curvas fechadas.",
    "dicaArtrelados": "Uma matriz bonita n√£o √© apenas uma matriz com a quantidade certa de pontos: √© uma matriz em que os pontos est√£o harmoniosamente bem distribu√≠dos!",
    "applications": [
      "Preenchimentos gerais, cantos de molduras, p√©talas, folhas e monogramas."
    ],
    "troubleshootingTips": [
      "Se os cantos de letras ou estrelas ficarem duros como pedras, ative a op√ß√£o de redu√ß√£o autom√°tica de pontos em cantos agudos no software."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Dist√¢ncia entre Pontos",
      "Ponto de Preenchimento",
      "Dire√ß√£o do Ponto"
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
    "origin": "Do latim distributio, -onis (divis√£o harm√¥nica, partilha ordenada, de distribuere) e punctum (ponto perfurado). Na programa√ß√£o gr√°fica CAD t√™xtil, refere-se ao algoritmo topol√≥gico de dispers√£o espacial de perfura√ß√µes ao longo de n√≥s vetoriais.",
    "beginnerExplanation": "Distribui√ß√£o de pontos √© como os pontos est√£o espalhados pelo desenho: se eles est√£o bem divididos de forma suave e organizada, ou se est√£o todos amontoados em um canto s√≥. Uma boa distribui√ß√£o faz o bordado ficar macio e plano, sem aquelas bolotas duras nos cantos das letras.",
    "practicalExercise": "Desenhe uma estrela de 5 pontas no software e borde em ponto cheio (Satin). Observe os bicos finos da estrela: se os pontos estiverem se acumulando todos na mesma pontinha, ative a op√ß√£o de 'Cantos Inteligentes' (Smart Corners) ou reduza a densidade na curva para redistribuir os pontos com suavidade.",
    "quickSummary": "Distribui√ß√£o de pontos √© o arranjo espacial equilibrado das perfura√ß√µes de agulha sobre a forma vetorial, evitando ac√∫mulos e deforma√ß√µes no tecido.",
    "bibliographicReferences": [
      "WILCOM. Stitch Distribution, Smart Corners & Density Balancing. Sydney: Wilcom, 2022.",
      "DEVERSON, D. Vector Topologies for Textile Embroidery. London: Textile Press, 2021.",
      "ARTRELADOS. Distribui√ß√£o Harm√¥nica de Pontos e Tratamento de Cantos Agudos. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-024-desenho-de-bordado-pratica",
    "code": "D-024",
    "term": "Desenho de Bordado (Pr√°tica & Conceito)",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivos masculinos.",
    "category": "Design & Cria√ß√£o",
    "summary": "Guia pr√°tico para a escolha, an√°lise e adapta√ß√£o de imagens visuais antes de transform√°-las em matrizes.",
    "definition": "O desenho de bordado √© a representa√ß√£o visual daquilo que se deseja transformar em bordado computadorizado (uma flor, um logotipo, um nome, um personagem ou s√≠mbolo). Uma imagem gr√°fica (como um arquivo JPG ou PNG) n√£o √© automaticamente uma matriz: para ser executada pela m√°quina, ela precisa ser convertida em uma estrutura de objetos, coordenadas de pontos e comandos mec√¢nicos.",
    "technicalDetails": "Consiste na etapa de pr√©-avalia√ß√£o do arquivo de imagem. Uma imagem visualmente linda na tela do celular pode conter linhas de 0.2mm ou textos microsc√≥picos que s√£o fisicamente invi√°veis para uma agulha de 0.75mm com linha de poli√©ster.",
    "construction": [
      "Imagem fonte de refer√™ncia (JPG, PNG, BMP)",
      "An√°lise de escala e propor√ß√£o real",
      "Separa√ß√£o visual de planos e contornos",
      "Planejamento de adapta√ß√£o para pontos"
    ],
    "howItWorks": [
      "1. A imagem √© recebida e analisada quanto √† nitidez e viabilidade t√©cnica.",
      "2. Identificam-se detalhes que precisar√£o ser engrossados ou simplificados.",
      "3. O desenho √© redimensionado para o tamanho final antes da digitaliza√ß√£o."
    ],
    "mainTypes": [
      "Desenho Linear Simples (F√°cil convers√£o para pontos corridos ou satin)",
      "Desenho Preenchido em Cores S√≥lidas (Ideal para blocos tatami)",
      "Desenho Complexo / Fotogr√°fico (Exige simplifica√ß√£o pr√©via profunda)"
    ],
    "advantages": [
      "‚úî Garante que o bordado mantenha a identidade visual do projeto original",
      "‚úî Evita perdas de tempo tentando digitalizar detalhes imposs√≠veis de bordar",
      "‚úî Facilita o alinhamento de expectativas est√©ticas com o cliente"
    ],
    "limitations": [
      "Imagens com baixa resolu√ß√£o ou muitos degrad√™s exigem redesenho vetorial pr√©vio."
    ],
    "commonErrors": [
      "‚ùå Tentar bordar um logotipo com letras de 2mm exatamente como est√° no cart√£o de visitas.",
      "‚ùå Supor que a m√°quina de bordar funciona como uma impressora a jato de tinta.",
      "‚ùå N√£o adaptar o desenho ao tipo de tecido onde ele ser√° aplicado."
    ],
    "voceSabia": "A menor letra leg√≠vel em bordado com agulha 75/11 e linha 40 comum precisa ter pelo menos 4.5mm a 5.0mm de altura. Menor do que isso, os furos da agulha se fundem e a letra vira um borr√£o!",
    "curiosidadeTecnica": "Ao avaliar um desenho, reduza a imagem na tela do computador at√© que ela me√ßa exatamente os cent√≠metros reais que ter√° na pe√ßa e afaste-se 50cm: o que voc√™ n√£o conseguir ler com os olhos tamb√©m n√£o funcionar√° no bordado.",
    "dicaArtrelados": "N√£o pergunte apenas: 'a imagem √© bonita?'. Pergunte: 'esta imagem pode ser transformada em um bom bordado com linha e agulha?' Essa pergunta muda completamente a sua vis√£o de produ√ß√£o!",
    "applications": [
      "Avalia√ß√£o de artes de clientes, cria√ß√£o de novas matrizes e or√ßamentos de ateli√™."
    ],
    "troubleshootingTips": [
      "Se um detalhe do desenho estiver pequeno demais, engrosse-o no software gr√°fico antes de abrir o programa de bordado."
    ],
    "relatedTerms": [
      "Desenho de Bordado",
      "Digitaliza√ß√£o de Bordado",
      "Vetoriza√ß√£o",
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
    "origin": "Do latim deexsignare (tra√ßar, delinear com marcas) e do grego praktike (relativo √† a√ß√£o, emp√≠rico, de prassein, fazer). Representa a ponte pr√°tica entre a arte ilustrativa e a f√≠sica mec√¢nica da agulha.",
    "beginnerExplanation": "√â o passo a passo pr√°tico de como escolher e preparar um desenho antes de bordar: ver se as letras n√£o s√£o pequenas demais, se os detalhes finos v√£o aparecer no pano e se a imagem combina com o tipo de pe√ßa (toalha, camiseta, bon√©).",
    "practicalExercise": "Pegue tr√™s desenhos diferentes (uma foto de fam√≠lia cheia de sombras, um desenho infantil simples de contorno preto e um logotipo corporativo). Analise os tr√™s e classifique: qual deles est√° 100% pronto para bordar, qual precisa de pequenas adapta√ß√µes e qual precisa ser redesenhado do zero.",
    "quickSummary": "Desenho de bordado pr√°tico √© a metodologia de an√°lise pr√©via e adapta√ß√£o dimensional de artes visuais para a realidade f√≠sica do bordado.",
    "bibliographicReferences": [
      "LEE, C. Practical Artwork Adaptation for Machine Embroidery. Seoul, 2022.",
      "PUNDOLE, F. Graphic Principles for Embroidery Digitizers. Mumbai, 2021.",
      "ARTRELADOS. Metodologia Artrelados de Triagem e Adapta√ß√£o de Desenhos. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-025-digitalizacao-automatica-regras",
    "code": "D-025",
    "term": "Digitaliza√ß√£o Autom√°tica (Regras & Limita√ß√µes)",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Softwares & Formatos",
    "summary": "An√°lise profunda de funcionamento, vantagens reais e armadilhas da convers√£o autom√°tica de matrizes.",
    "definition": "A digitaliza√ß√£o autom√°tica √© o recurso dos softwares de bordado que analisa uma imagem e tenta convert√™-la de forma aut√¥noma em objetos e pontos. Embora pare√ßa um processo m√°gico e instant√¢neo, o programa n√£o compreende a f√≠sica dos tecidos, a elasticidade nem as tens√µes da linha, exigindo sempre rigorosa revis√£o t√©cnica e ajustes humanos.",
    "technicalDetails": "Funciona bem para imagens com cores s√≥lidas puras, alto contraste, sem degrad√™s e com formas geom√©tricas limpas. Falha frequentemente em fotografias, texturas complexas e pequenos textos.",
    "construction": [
      "Reconhecimento automatizado de formas",
      "Redu√ß√£o algor√≠tmica de cores",
      "Atribui√ß√£o gen√©rica de √¢ngulos e pontos",
      "Inser√ß√£o autom√°tica de cortes e saltos"
    ],
    "howItWorks": [
      "1. O usu√°rio importa uma imagem n√≠tida de alto contraste no software.",
      "2. O programa agrupa os pixels por similaridade de cor.",
      "3. Gera blocos de pontos cheios ou tatami de forma autom√°tica.",
      "4. O operador precisa inspecionar e corrigir sequ√™ncias, pontos curtos e compensa√ß√µes."
    ],
    "mainTypes": [
      "Convers√£o Autom√°tica de Imagem Bitmap (PNG/JPG)",
      "Convers√£o Autom√°tica de Desenho Vetorial (SVG/EPS)",
      "Convers√£o Autom√°tica de Tipografia TrueType do Windows"
    ],
    "advantages": [
      "‚úî Agilidade para criar rascunhos e modelos iniciais de apresenta√ß√£o",
      "‚úî Reduz o tempo de tra√ßado em desenhos com muitas formas geom√©tricas simples",
      "‚úî Excelente ferramenta auxiliar para quem est√° iniciando os estudos"
    ],
    "limitations": [
      "Gera sequ√™ncias pouco eficientes com saltos longos, excesso de pontos e falta de compensa√ß√£o de repuxamento."
    ],
    "commonErrors": [
      "‚ùå Enviar a matriz gerada automaticamente direto para a m√°quina sem revis√£o.",
      "‚ùå Acreditar que o software sabe qual entretela ou tecido voc√™ vai utilizar.",
      "‚ùå Confundir uma imagem com simula√ß√£o 3D bonita na tela com uma matriz est√°vel na m√°quina."
    ],
    "voceSabia": "Uma matriz gerada automaticamente pode levar 10 segundos para ser criada no software, mas gastar 20 minutos a mais na m√°quina por causa de dezenas de cortes desnecess√°rios!",
    "curiosidadeTecnica": "A convers√£o autom√°tica de texto TrueType funciona bem para fontes retas (Arial, Impact), mas costuma deformar completamente fontes cursivas finas ou com serifa.",
    "dicaArtrelados": "Use a digitaliza√ß√£o autom√°tica como ponto de partida, nunca como ponto de chegada! Uma matriz bonita na tela ainda precisa ser uma matriz eficiente na m√°quina. Antes de bordar, confira: sequ√™ncia + pontos + densidade + underlay + tamanho + tecido!",
    "applications": [
      "Convers√£o r√°pida de formas b√°sicas, s√≠mbolos simples e estudos de viabilidade."
    ],
    "troubleshootingTips": [
      "Ap√≥s a convers√£o autom√°tica, exclua os micro-objetos de menos de 1mm que o software gerou por engano nas bordas das cores."
    ],
    "relatedTerms": [
      "Digitaliza√ß√£o Manual",
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
    "origin": "Do latim digitalis e grego automatos (autom√°tico), aliado ao latim regula (regra, norma) e limitatio (delimita√ß√£o de fronteiras).",
    "beginnerExplanation": "S√£o as regras essenciais para voc√™ n√£o cair em ciladas ao usar a convers√£o autom√°tica do software: imagens precisam ter contornos n√≠tidos e cores s√≥lidas; voc√™ nunca deve confiar na matriz sem antes passar um 'pente fino' no simulador para apagar pontos curtos e n√≥s escondidos.",
    "practicalExercise": "Pegue um logotipo simples com c√≠rculos e letras: fa√ßa a convers√£o autom√°tica e abra a lista de objetos do software. Conte quantos pequenos cortes de linha foram criados. Junte manualmente as partes da mesma cor para eliminar cortes e compare o tempo final estimado da matriz!",
    "quickSummary": "Digitaliza√ß√£o autom√°tica com regras e limita√ß√µes √© a aplica√ß√£o criteriosa de ferramentas de convers√£o assistida sob estrito controle e p√≥s-edi√ß√£o humana.",
    "bibliographicReferences": [
      "BERNINA. Auto-Digitizing Best Practices & Quality Control. Steckborn, 2023.",
      "HATCH. When to Use Auto-Digitize and How to Fix It. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Manual de Sobreviv√™ncia e Otimiza√ß√£o para Matrizes Autom√°ticas. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-026-digitalizacao-manual-tecnica",
    "code": "D-026",
    "term": "Digitaliza√ß√£o Manual (T√©cnica & Decis√µes)",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Metodologia consciente de constru√ß√£o de matrizes onde cada decis√£o t√©cnica √© controlada pelo digitalizador.",
    "definition": "Na digitaliza√ß√£o manual, o profissional constr√≥i os objetos da matriz conscientemente, definindo par√¢metros, caminhos, pontos de entrada/sa√≠da, √¢ngulos e underlays de acordo com a f√≠sica do tecido e o acabamento pretendido. Em vez de delegar decis√µes ao computador, o digitalizador assume o controle de toda a engenharia da matriz.",
    "technicalDetails": "Permite calibrar toler√¢ncias de Pull Compensation (+0.30mm a +0.60mm), aplicar underlays adequados (linha central, ziguezague ou tatami duplo) e construir caminhos cont√≠nuos que eliminam paradas de corte.",
    "construction": [
      "Defini√ß√£o de entrada e sa√≠da por objeto",
      "Sele√ß√£o criteriosa de tipo de ponto por espessura",
      "Estrutura√ß√£o de underlay por camadas",
      "Planejamento de sobreposi√ß√£o de seguran√ßa (overlap)"
    ],
    "howItWorks": [
      "1. O digitalizador estuda o desenho e define a ordem cronol√≥gica de costura.",
      "2. Tra√ßa os n√≥s de contorno e aplica a linha de dire√ß√£o do ponto.",
      "3. Configura a densidade e o underlay conforme o tecido de destino.",
      "4. Conecta os objetos com pequenos pontos de viagem ocultos."
    ],
    "mainTypes": [
      "Digitaliza√ß√£o Manual por Colunas (Colunas A, B, C no Wilcom)",
      "Digitaliza√ß√£o Manual por Preenchimento Complexo",
      "Digitaliza√ß√£o Ponto a Ponto Cir√∫rgica"
    ],
    "advantages": [
      "‚úî M√°xima precis√£o e encaixe perfeito entre contornos e fundos",
      "‚úî Zero quebras de linha e bordado extremamente macio e flex√≠vel",
      "‚úî Alta velocidade de produ√ß√£o na m√°quina com avesso limp√≠ssimo"
    ],
    "limitations": [
      "Exige curva de aprendizado gradual e pr√°tica com o software de programa√ß√£o."
    ],
    "commonErrors": [
      "‚ùå Clicar pontos em excesso tentando desenhar contornos perfeitos, sobrecarregando a curva.",
      "‚ùå Esquecer de planejar onde o objeto anterior terminou antes de criar o pr√≥ximo.",
      "‚ùå N√£o aplicar folga de transpasse (overlap) entre o fundo e o contorno."
    ],
    "voceSabia": "Digitalizadores experientes gastam 40% do tempo apenas planejando a sequ√™ncia mental antes de dar o primeiro clique no software!",
    "curiosidadeTecnica": "Na digitaliza√ß√£o manual, menos n√≥s de vetor produzem curvas mais suaves e pontos mais uniformes do que curvas cheias de n√≥s acumulados.",
    "dicaArtrelados": "Digitalizar manualmente n√£o significa fazer tudo dif√≠cil: significa saber exatamente por que voc√™ est√° fazendo cada escolha! O objetivo n√£o √© clicar mais, √© decidir melhor!",
    "applications": [
      "Matrizes para alta costura, uniformes executivos, enxovais personalizados e marcas de moda."
    ],
    "troubleshootingTips": [
      "Ao criar colunas Satin em curvas, mantenha as guias de √¢ngulo sempre perpendiculares √†s bordas da coluna para evitar distor√ß√µes."
    ],
    "relatedTerms": [
      "Digitaliza√ß√£o Autom√°tica",
      "Ponto de Entrada",
      "Ponto de Sa√≠da",
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
    "origin": "Do latim digitalis manualis (programa√ß√£o manual) e techne (arte, of√≠cio pr√°tico) e decisio (determina√ß√£o clara ap√≥s pondera√ß√£o, de decidere).",
    "beginnerExplanation": "√â a tomada de decis√µes conscientes do programador experiente: escolher se uma p√©tala deve ser bordada antes ou depois do caule, qual √¢ngulo de ponto vai valorizar a luz e qual costura de base vai segurar o tecido sem repuxar.",
    "practicalExercise": "Pegue um desenho de um p√°ssaro: planeje no papel a ordem exata das camadas (1¬∫ o bico de fundo, 2¬∫ o corpo, 3¬∫ as asas sobrepostas, 4¬∫ os olhos e contornos finais). Depois digitalize no software seguindo rigorosamente essa ordem: veja como o p√°ssaro ganha vida e volume perfeito no tecido!",
    "quickSummary": "Digitaliza√ß√£o manual t√©cnica e decis√≥ria √© o processo deliberado de engenharia de pontos onde cada escolha atende a crit√©rios est√©ticos e f√≠sicos precisos.",
    "bibliographicReferences": [
      "GARCIA, E. Decision Making in Advanced Embroidery Digitizing. Barcelona, 2022.",
      "TAJIMA. Pulse DGML Advanced Master Series. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. A Arte da Decis√£o: Sequenciamento e Estrutura√ß√£o de Matrizes. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-027-digitalizacao-por-objetos",
    "code": "D-027",
    "term": "Digitaliza√ß√£o por Objetos",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e locu√ß√£o prepositiva.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "M√©todo de constru√ß√£o que divide o desenho em elementos individuais e independentes com configura√ß√µes pr√≥prias.",
    "definition": "A digitaliza√ß√£o por objetos √© a metodologia moderna de cria√ß√£o de matrizes na qual o desenho √© decomposto em elementos vetoriais individuais e aut√¥nomos (como p√©tala, folha, caule, letra, fundo). Em vez de enxergar a imagem como um bloco √∫nico, o digitalizador cria cada parte como um 'objeto' inteligente com suas pr√≥prias propriedades de ponto, dire√ß√£o, densidade e underlay.",
    "technicalDetails": "Adotada pelos principais softwares modernos baseados em objetos (Wilcom EMB, Hatch, Brother PE-Design, Bernina). Permite redimensionar, alterar tipo de ponto e mudar propriedades a qualquer momento sem perder a integridade geom√©trica.",
    "construction": [
      "Objeto vetorial fechado (√°rea de preenchimento)",
      "Objeto vetorial aberto (linha de contorno / ponto corrido)",
      "Objeto de coluna (largura vari√°vel em satin)",
      "Lista sequencial de objetos (Object List)"
    ],
    "howItWorks": [
      "1. O desenho √© dividido mentalmente em suas partes constituintes.",
      "2. Cada parte √© tra√ßada como um objeto independente no software.",
      "3. Cada objeto recebe par√¢metros espec√≠ficos adequados √† sua fun√ß√£o.",
      "4. Os objetos s√£o ordenados na lista de sequ√™ncia para criar o fluxo de costura."
    ],
    "mainTypes": [
      "Objetos de Preenchimento (Tatami, Padr√µes)",
      "Objetos de Coluna (Ponto Cheio com √¢ngulo din√¢mico)",
      "Objetos de Linha (Ponto Corrido simples, triplo ou decorativo)",
      "Objetos de Apliqu√™ Automatizado"
    ],
    "advantages": [
      "‚úî Flexibilidade total para editar qualquer parte do desenho a qualquer momento",
      "‚úî Redimensionamento perfeito com rec√°lculo autom√°tico de densidade",
      "‚úî Facilidade para reordenar a sequ√™ncia de costura arrastando objetos na lista"
    ],
    "limitations": [
      "Exige que o arquivo seja salvo no formato propriet√°rio original do software (ex: .EMB) para manter as propriedades de objeto edit√°veis."
    ],
    "commonErrors": [
      "‚ùå Criar uma √∫nica √°rea enorme tentando reproduzir v√°rios elementos diferentes juntos.",
      "‚ùå Salvar a matriz apenas em formato de m√°quina (.DST/.PES) e perder os dados vetoriais dos objetos.",
      "‚ùå Esquecer de ajustar a sobreposi√ß√£o entre objetos que se encostam."
    ],
    "voceSabia": "Quando voc√™ exporta uma matriz para formato de m√°quina (.DST ou .PES), todos os objetos vetoriais s√£o 'achatados' em coordenadas brutas de pontos, dificultando edi√ß√µes complexas posteriores!",
    "curiosidadeTecnica": "Trabalhar por objetos permite que o software recalcule automaticamente a quantidade de pontos quando a matriz √© ampliada ou reduzida em at√© 20%.",
    "dicaArtrelados": "Quando olhar para uma imagem, tente 'quebr√°-la' mentalmente em pequenas pe√ßas! Pergunte: 'Quais objetos individuais eu consigo identificar aqui?' Essa habilidade √© a base de todo o racioc√≠nio da digitaliza√ß√£o!",
    "applications": [
      "Constru√ß√£o modular de todas as matrizes modernas em softwares profissionais."
    ],
    "troubleshootingTips": [
      "Sempre guarde uma c√≥pia mestra no formato de objeto (.EMB, .JAN, .ART) antes de gerar o arquivo final de m√°quina."
    ],
    "relatedTerms": [
      "Digitaliza√ß√£o Manual",
      "Sequ√™ncia de Pontos",
      "Sobreposi√ß√£o",
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
    "origin": "Do latim digitalis (digital) e objectum (aquilo que est√° diante dos olhos, elemento delimitado, de objicere). Paradigma central da computa√ß√£o gr√°fica moderna orientada a objetos vetoriais.",
    "beginnerExplanation": "Digitaliza√ß√£o por objetos significa que voc√™ constr√≥i o desenho dividindo-o em 'pe√ßas de Lego' inteligentes (cada folha √© um objeto, cada letra √© outro objeto). Assim, se voc√™ quiser mudar o tamanho ou o tipo de ponto depois, o software recalcula tudo automaticamente sem estragar a matriz!",
    "practicalExercise": "No seu software, selecione uma folha desenhada como objeto vetorial de ponto cheio (Satin): mude o tamanho dela aumentando em 50%. Observe como o software aumentou a quantidade de pontos automaticamente mantendo a mesma densidade perfeita, gra√ßas √† digitaliza√ß√£o por objetos!",
    "quickSummary": "Digitaliza√ß√£o por objetos √© a modelagem de matrizes atrav√©s de elementos vetoriais param√©tricos que preservam propriedades edit√°veis de pontos e formas.",
    "bibliographicReferences": [
      "WILCOM. Object-Based Embroidery Design Architecture. Sydney: Wilcom, 2022.",
      "EMBIRD. Working with Vector Objects and Properties in Digitizing. Bratislava, 2023.",
      "ARTRELADOS. O Poder dos Objetos Vetoriais na Cria√ß√£o e Redimensionamento. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-028-desenho-de-matriz",
    "code": "D-028",
    "term": "Desenho de Matriz",
    "level": "Fundamental üü¢",
    "category": "Programa√ß√£o de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim de- + signare (marcar, tra√ßar contornos gr√°ficos) e do latim matrix, -icis (molde gerador). Na engenharia mecatr√¥nica t√™xtil, refere-se √† composi√ß√£o estruturada e vetorial do arquivo digital de bordado.",
    "summary": "Processo e resultado do tra√ßado digital vetorial e da programa√ß√£o de pontos que comp√µem uma matriz de bordado computadorizado.",
    "definition": "O desenho de matriz √© a concep√ß√£o gr√°fica, estrutura√ß√£o geom√©trica e convers√£o de uma imagem ou conceito visual em objetos vetoriais de bordado. Compreende a defini√ß√£o de tipos de pontos (tatami, satin, ponto corrido), √¢ngulos de inclina√ß√£o, densidades, camadas de base (underlay) e trajet√≥rias de costura que orientam o cabe√ßote e o pant√≥grafo da m√°quina durante o ciclo de produ√ß√£o.",
    "technicalDetails": "Estruturado em entidades vetoriais param√©tricas fechadas e abertas (pol√≠gonos B√©zier) com atributos num√©ricos de densidade (0.35mm a 0.50mm), comprimentos de ponto (1.5mm a 7.0mm), compensa√ß√£o de repuxo (+0.30mm a +0.50mm) e comandos de m√°quina embutidos (Trim, Stop, Color Change).",
    "howItWorks": [
      "1. A imagem de refer√™ncia (PNG, JPG ou vetor SVG) √© importada para a √°rea de trabalho do software de bordado.",
      "2. O designer desenha os objetos por camadas, do fundo para os detalhes superficiais, usando ferramentas de contorno e preenchimento.",
      "3. S√£o parametrizados os tipos de ponto, densidades, underlays e √¢ngulos de reflex√£o de luz.",
      "4. O software calcula o caminho de costura (Stitch Path) e gera as coordenadas bin√°rias prontas para envio √† m√°quina."
    ],
    "beginnerExplanation": "√â a cria√ß√£o do arquivo do bordado no computador: √© quando voc√™ transforma uma foto, desenho ou logo em pontinhos que a m√°quina de bordar consegue entender e costurar perfeitamente no tecido.",
    "applications": [
      "Digitaliza√ß√£o de logotipos empresariais para uniformes",
      "Cria√ß√£o de matrizes infantis de aplique e ponto cheio",
      "Desenho de bras√µes, arabescos e monogramas para enxovais",
      "Elabora√ß√£o de matrizes ricas com relevo 3D e efeitos de sombreamento"
    ],
    "commonErrors": [
      "Desenhar a matriz no mesmo sentido de estiramento do tecido sem aplicar compensa√ß√£o de repuxo, deformando o formato",
      "Sobrepor camadas densas sobrepostas no mesmo lugar sem remover pontos ocultos, criando placas duras",
      "N√£o planejar a ordem de costura das cores, gerando dezenas de trocas de linha desnecess√°rias"
    ],
    "troubleshootingTips": [
      "Sempre utilize o simulador em tempo real (Stitch Player) do software para inspecionar o desenho antes de levar para a m√°quina",
      "Mantenha a regra de desenhar do centro para fora e de baixo para cima para evitar o empurr√£o do tecido",
      "Agrupe partes da mesma cor para reduzir as paradas de troca de carretel"
    ],
    "dicaArtrelados": "Ao desenhar uma matriz, lembre-se de que a agulha n√£o pinta como um pincel: ela puxa e estica o tecido! Sempre adicione uma folguinha de sobreposi√ß√£o (overlap) de 1.0mm a 1.5mm entre os objetos vizinhos para os contornos n√£o se separarem na hora de bordar.",
    "voceSabia": "Na era pioneira do bordado mec√¢nico nos anos 1960, o 'desenho de matriz' era feito √† m√£o em mesas digitalizadoras do tamanho de mesas de bilhar, onde o operador perfurava cart√µes Jacquard com uma agulha manual a cada salto de ponto.",
    "practicalExercise": "Importe uma imagem simples de uma estrela no seu software: desenhe o preenchimento em tatami com √¢ngulo a 45¬∞, adicione um underlay leve e coloque uma costura de contorno em satin de 2.0mm. Borde no tecido de teste e veja como o seu desenho de matriz ganha vida e textura!",
    "quickSummary": "Processo de cria√ß√£o e vetoriza√ß√£o gr√°fica do arquivo digital de bordado que traduz imagens em trajet√≥rias de pontos execut√°veis.",
    "relatedTerms": [
      "Bordado Digitalizado",
      "Corre√ß√£o de Pontos",
      "Compensa√ß√£o de Empurrar e Puxar",
      "Caminho de Costura"
    ],
    "tags": [
      "desenho",
      "matriz",
      "digitaliza√ß√£o",
      "vetores",
      "software",
      "programa√ß√£o"
    ],
    "bibliographicReferences": [
      "WILCOM. Embroidery Studio Digitizing Fundamentals & Design Architecture. Sydney: Wilcom, 2022.",
      "KRAUSZ, P. The Art of Embroidery Digitizing: From Graphic Concept to Master Stitch. New York, 2021.",
      "ARTRELADOS. Fundamentos do Desenho de Matrizes: Estrutura, Camadas e Encaixes Perfeitos. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-029-deslocamento-de-origem",
    "code": "D-029",
    "term": "Deslocamento de Origem",
    "level": "Intermedi√°rio üü°",
    "category": "Opera√ß√£o da M√°quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dis- + locare (mudar de lugar, afastar do s√≠tio original) e origo, -inis (ponto de partida, nascimento). Princ√≠pio fundamental das coordenadas cartesianas relativas em sistemas mecatr√¥nicos CNC.",
    "summary": "Ajuste milim√©trico das coordenadas espaciais do ponto zero inicial do bastidor para posicionar o bordado em locais espec√≠ficos da pe√ßa.",
    "definition": "O deslocamento de origem (ou ajuste de Offset / Zero Point Shift) √© o procedimento operacional realizado no painel de controle da m√°quina de bordar ou no software para transladar o ponto inicial de refer√™ncia (X:0, Y:0) do centro padr√£o do bastidor para uma posi√ß√£o customizada no tecido, permitindo alinhar o bordado com marca√ß√µes f√≠sicas, bolsos, listras, costuras pr√©vias ou emendas de desenhos grandes.",
    "technicalDetails": "Executa a transla√ß√£o vetorial nas coordenadas cartesianas relativas (delta X e delta Y com resolu√ß√£o de 0.1mm). Bloqueia a execu√ß√£o caso o deslocamento force a trajet√≥ria para fora dos limites seguros da moldura do bastidor (limite de fim de curso / software limit switches).",
    "howItWorks": [
      "1. A pe√ßa √© colocada no bastidor com uma marca√ß√£o de cruz feita com giz ou caneta fantasma na posi√ß√£o desejada do bordado.",
      "2. No painel da m√°quina, o operador aciona as setas direcionais de movimenta√ß√£o manual do carro nos eixos X e Y.",
      "3. A ponta da agulha (ou o ponto de laser de posicionamento) √© alinhada com o centro exato da cruz riscada no tecido.",
      "4. O operador pressiona a tecla 'Definir Origem' (Set Origin/Origin Shift), redefinindo a coordenada zero para aquela posi√ß√£o.",
      "5. A fun√ß√£o de tra√ßado de √°rea (Trace) √© executada para confirmar que todo o per√≠metro do desenho cabe dentro do bastidor sem bater a agulha no aro."
    ],
    "beginnerExplanation": "√â quando voc√™ usa as setinhas do painel da m√°quina para andar com o bastidor e dizer: 'm√°quina, n√£o comece no mei√£o do bastidor, comece exatamente aqui onde eu fiz este risco no tecido!'. Isso ajuda a bordar em cima de bolsinhos ou em cantos de toalhas sem errar a mira.",
    "applications": [
      "Posicionamento de monogramas no canto diagonal de toalhas de lavabo",
      "Bordados em bolsos prontos de camisas e jalecos",
      "Alinhamento de matrizes divididas em bastidores de m√∫ltiplos est√°gios (Giga Hoop)",
      "Centraliza√ß√£o sobre recortes geom√©tricos ou bras√µes pr√©-impressos"
    ],
    "commonErrors": [
      "Deslocar a origem muito perto da borda pl√°stica do bastidor sem fazer o tra√ßado de teste, provocando a colis√£o da agulha com o aro pl√°stico",
      "Esquecer de travar a nova origem no painel, fazendo a m√°quina voltar ao centro absoluto no momento do primeiro ponto",
      "Fazer o deslocamento com a agulha abaixada dentro do tecido, entortando a barra de agulha e rasgando a pe√ßa"
    ],
    "troubleshootingTips": [
      "Sempre levante a agulha para a posi√ß√£o mais alta (Top Dead Center) antes de movimentar os eixos X e Y no painel",
      "Ap√≥s qualquer deslocamento de origem, acione obrigatoriamente a fun√ß√£o 'Trace' (Tra√ßado de Per√≠metro)",
      "Se a m√°quina emitir sinal sonoro de erro de limite, mova a origem alguns mil√≠metros de volta em dire√ß√£o ao centro do bastidor"
    ],
    "dicaArtrelados": "Para acertar a origem em bolsos ou cantos de toalhas de olhos fechados, use o laser de mira da m√°quina ou abaixe a agulha suavemente girando o volante manual at√© a pontinha tocar exatamente no centro da cruzeta de giz: aperte 'Definir Origem' e o alinhamento fica cir√∫rgico!",
    "voceSabia": "Em m√°quinas industriais de grande porte com mesas de 15 metros de comprimento, os operadores utilizam ponteiros laser cruzados de alta precis√£o para deslocar a origem dezenas de vezes por dia em rolos cont√≠nuos de tecido sem nunca precisar desmontar a pe√ßa do pant√≥grafo.",
    "practicalExercise": "Risque uma pequena cruz com caneta que apaga com calor a 4cm do canto de um retalho de tecido colocado no bastidor: use as setas do painel da sua m√°quina para levar a agulha at√© a marca√ß√£o, aperte 'Set Origin', execute o tra√ßado de √°rea e borde uma letra de 2cm. Veja como o bordado fica perfeitamente posicionado no local planejado!",
    "quickSummary": "Transla√ß√£o das coordenadas do ponto inicial (X:0, Y:0) para posicionar o bordado em regi√µes espec√≠ficas do bastidor com precis√£o milim√©trica.",
    "relatedTerms": [
      "Tra√ßado de √Årea",
      "Bastidor Virtual",
      "Centraliza√ß√£o Autom√°tica no Bastidor",
      "Configura√ß√£o da M√°quina de Bordado"
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
      "ARTRELADOS. Posicionamento e Deslocamento de Origem sem Erros de Batida de Bastidor. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-030-digitalizacao-de-logotipo",
    "code": "D-030",
    "term": "Digitaliza√ß√£o de Logotipo",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal feminina.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Processo t√©cnico de adapta√ß√£o e transforma√ß√£o de identidades visuais de marcas em matrizes de alta precis√£o.",
    "definition": "A digitaliza√ß√£o de logotipo √© o processo t√©cnico e de design respons√°vel por transformar a representa√ß√£o gr√°fica de uma marca, s√≠mbolo ou identidade corporativa em uma matriz de bordado eletr√¥nico de alta qualidade. Esse processo n√£o consiste em simplesmente converter um arquivo de imagem (PNG ou JPG): exige interpretar a arte, simplificar detalhes min√∫sculos e reconstru√≠-la na linguagem f√≠sica de pontos, fios e tecidos.",
    "technicalDetails": "Envolve adequa√ß√£o √† escala (vers√µes para peito de 8cm a 10cm vs costas de 25cm a 30cm), sele√ß√£o de pontos para textos pequenos (m√≠nimo de 4.5mm para Satin com linha 40 ou uso de linha fina 60), calibra√ß√£o de compensa√ß√£o de repuxo e compatibiliza√ß√£o da paleta de cores da marca com os c√≥digos de cones de poli√©ster.",
    "construction": [
      "An√°lise e vetoriza√ß√£o limpa do logo",
      "Adapta√ß√£o de pequenos textos e slogans",
      "Defini√ß√£o da ordem de sobreposi√ß√£o das cores",
      "Cria√ß√£o de transpasses de seguran√ßa (overlap)"
    ],
    "howItWorks": [
      "1. O digitalizador recebe o manual de marca ou vetor do cliente.",
      "2. Avalia a escala de aplica√ß√£o (camisa polo, bon√©, jaleco, jaqueta).",
      "3. Simplifica detalhes que desapareceriam na escala de bordado.",
      "4. Aplica pontos Tatami em fundos e Ponto Cheio nas letras e contornos.",
      "5. Realiza o teste pr√°tico no tecido definitivo do uniforme."
    ],
    "mainTypes": [
      "Logotipo para Peito / Camisa Polo (8cm a 10cm - foco em legibilidade)",
      "Logotipo para Costas / Jaqueta (20cm a 28cm - foco em leveza e baixo peso)",
      "Logotipo para Bon√© Estruturado (Costura do centro para as bordas)",
      "Logotipo em Relevo 3D / EVA (Para marcas esportivas e bon√©s premium)"
    ],
    "advantages": [
      "‚úî Fidelidade rigorosa √† identidade corporativa do cliente",
      "‚úî Textos e contornos n√≠tidos e perfeitamente leg√≠veis mesmo de longe",
      "‚úî Alta durabilidade em lavagens industriais frequentes de uniformes"
    ],
    "limitations": [
      "Logotipos com degrad√™s complexos ou textos com menos de 3.5mm exigem adapta√ß√£o ou simplifica√ß√£o para viabilidade em bordado."
    ],
    "commonErrors": [
      "‚ùå Perguntar apenas 'qual √© o programa que converte o logo automaticamente?'.",
      "‚ùå Tentar reproduzir letras min√∫sculas sem engrossar as hastes ou simplificar o tra√ßo.",
      "‚ùå Usar a mesma matriz de peito de camisa para bordar em bon√©s ou toalhas."
    ],
    "voceSabia": "Um mesmo logotipo de empresa frequentemente precisa de 3 ou 4 vers√µes diferentes de matriz: uma para camiseta de malha, uma para camisa social de tricoline, uma para bon√© e outra para jaqueta grossa!",
    "curiosidadeTecnica": "Em logotipos com c√≠rculos perfeitos, a compensa√ß√£o de repuxo adiciona cerca de 0.4mm no eixo de tra√ß√£o para que o c√≠rculo n√£o vire um formato oval ap√≥s o bordado sair do bastidor.",
    "dicaArtrelados": "Especial para quem atende clientes: nunca pergunte apenas 'qual √© o arquivo do logotipo?'. Pergunte sempre: 'onde, em qual tamanho e em qual tecido esse logotipo ser√° bordado?' Essas tr√™s respostas mudam completamente a estrutura da matriz!",
    "applications": [
      "Uniformes empresariais, jalecos m√©dicos, camisas polo, bon√©s corporativos e brindes promocionais."
    ],
    "troubleshootingTips": [
      "Para bordar slogans com letras de 4mm a 5mm, utilize agulha 65/9 e linha de bordado fina T√≠tulo 60 com ponto corrido duplo ou satin leve."
    ],
    "relatedTerms": [
      "Digitaliza√ß√£o Manual",
      "Desenho Vetorial",
      "Compensa√ß√£o de Pux√£o",
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
    "origin": "Do grego logos (palavra, conceito) e typos (marca, figura gravada), e do latim digitalis. Ramo comercial mais lucrativo e t√©cnico do bordado industrial contempor√¢neo.",
    "beginnerExplanation": "√â a cria√ß√£o de matrizes para marcas e empresas (em camisas polo, bon√©s, jalecos e uniformes). Exige muito capricho porque as letras precisam ficar retinhas, leg√≠veis e com as cores fi√©is √† marca do cliente.",
    "practicalExercise": "Pegue um logotipo corporativo que contenha um s√≠mbolo grande e um texto pequeno embaixo: digitalize o s√≠mbolo primeiro e depois as letras, garantindo que letras com menos de 5mm usem ponto cheio com compensa√ß√£o de repuxo (pull compensation) calibrada em 0.35mm. Borde em uma camisa polo piqu√™ com entretela de malha!",
    "quickSummary": "Digitaliza√ß√£o de logotipo √© a programa√ß√£o t√©cnica de identidades visuais corporativas, exigindo alta precis√£o dimensional e m√°xima legibilidade tipogr√°fica.",
    "bibliographicReferences": [
      "NNEP. Commercial Logo Embroidery: Quality Standards & Lettering. Canton, 2022.",
      "BLANCO, R. Ponchado de Logotipos Corporativos y Marcas. Madri: Ediciones T√©cnicas, 2021.",
      "ARTRELADOS. Como Bordar Logotipos Perfeitos em Uniformes e Piqu√™. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-031-desenho-vetorial",
    "code": "D-031",
    "term": "Desenho Vetorial",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal masculina.",
    "category": "Design & Cria√ß√£o",
    "summary": "Representa√ß√£o gr√°fica baseada em f√≥rmulas matem√°ticas e curvas que permite amplia√ß√£o sem perda de defini√ß√£o.",
    "definition": "Um desenho vetorial √© uma representa√ß√£o gr√°fica constru√≠da por meio de elementos matem√°ticos como linhas, curvas de B√©zier, pol√≠gonos e pontos de controle (n√≥s), em vez de ser formado por uma grade fixa de pixels. Isso permite que a imagem seja redimensionada para qualquer tamanho sem perder a nitidez e sem apresentar o efeito serrilhado t√≠pico de imagens rasterizadas (JPG/PNG). No bordado, serve como a base gr√°fica ideal para a digitaliza√ß√£o.",
    "technicalDetails": "Formatos vetoriais padr√£o incluem SVG, AI, EPS, CDR e PDF vetorial. Ao contr√°rio de uma imagem rasterizada que possui resolu√ß√£o fixa em DPI, o vetor possui defini√ß√£o geom√©trica infinita, facilitando o tra√ßado exato dos objetos de bordado.",
    "construction": [
      "Pontos de ancoragem e n√≥s de controle",
      "Curvas matem√°ticas de B√©zier",
      "Linhas de contorno e preenchimentos vetoriais",
      "Camadas de objetos agrupados"
    ],
    "howItWorks": [
      "1. O designer cria ou recebe a arte em formato vetorial.",
      "2. As curvas s√£o manipuladas e simplificadas para eliminar n√≥s excessivos.",
      "3. O software de bordado importa o vetor e utiliza seus n√≥s como guias diretas para gerar pontos."
    ],
    "mainTypes": [
      "Vetor SVG (Formato aberto universal)",
      "Vetor AI / EPS (Adobe Illustrator)",
      "Vetor CDR (CorelDRAW - amplamente integrado com softwares de bordado)"
    ],
    "advantages": [
      "‚úî Contornos ultra n√≠tidos e formas perfeitamente definidas",
      "‚úî Permite redimensionar a arte livremente antes de gerar a matriz",
      "‚úî Facilita a separa√ß√£o autom√°tica ou manual de cores e objetos"
    ],
    "limitations": [
      "Um arquivo vetorial N√ÉO √© uma matriz de bordado: ele define apenas a forma visual, n√£o contendo informa√ß√µes de pontos, dire√ß√µes, underlay ou cortes."
    ],
    "commonErrors": [
      "‚ùå Achar que salvar um arquivo como .SVG j√° permite coloc√°-lo no pendrive da m√°quina de bordar.",
      "‚ùå Ampliar o vetor em 300% e achar que a matriz de pontos gerada no tamanho original continuar√° funcionando sem ajustes.",
      "‚ùå N√£o simplificar n√≥s desnecess√°rios antes de importar no software de bordado."
    ],
    "voceSabia": "O CorelDRAW √© o motor gr√°fico por tr√°s do software Wilcom EmbroideryStudio: voc√™ desenha em vetor de um lado e o programa gera os pontos de bordado em tempo real do outro!",
    "curiosidadeTecnica": "A sequ√™ncia recomendada para iniciantes √©: 1. Imagem (Ideia visual) ‚Üí 2. Vetor (Organiza√ß√£o geom√©trica de formas) ‚Üí 3. Matriz (Tradu√ß√£o f√≠sica em pontos de linha).",
    "dicaArtrelados": "O vetor √© o desenho organizado; a matriz √© o desenho traduzido para a linguagem da m√°quina! E guarde a regra de ouro: N√£o tente fazer a m√°quina bordar tudo o que seus olhos conseguem ver no vetor. Escolha o que realmente precisa e consegue aparecer com qualidade no tecido!",
    "applications": [
      "Base essencial para digitaliza√ß√£o de logotipos, bras√µes, mascotes e tipografias."
    ],
    "troubleshootingTips": [
      "Se o software de bordado travar ao importar um vetor, use a ferramenta de 'Simplificar Curvas' no Corel ou Illustrator para reduzir a quantidade de n√≥s."
    ],
    "relatedTerms": [
      "Vetoriza√ß√£o",
      "Desenho de Bordado",
      "Digitaliza√ß√£o de Bordado",
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
    "origin": "Do latim deexsignare (desenhar) e vector, -oris (aquele que transporta, condutor geom√©trico, de vehere, transportar). Arte gr√°fica baseada em f√≥rmulas matem√°ticas e curvas de B√©zier.",
    "beginnerExplanation": "Desenho vetorial √© uma imagem feita por linhas e curvas matem√°ticas no computador (em formatos como SVG, CDR ou AI). Ao contr√°rio de uma foto comum que fica cheia de quadradinhos (pixels) quando voc√™ amplia, o vetor nunca perde a qualidade nem a nitidez!",
    "practicalExercise": "Abra um arquivo em vetor no seu computador e aumente o zoom para 800%: repare como as linhas continuam perfeitamente lisinhas e afiadas. Agora fa√ßa o mesmo com uma foto JPG: veja como as bordas ficam emba√ßadas. Por isso o vetor √© o melhor amigo do digitalizador de bordado!",
    "quickSummary": "Desenho vetorial √© a representa√ß√£o gr√°fica composta por coordenadas matem√°ticas que permite amplia√ß√µes infinitas sem perda de defini√ß√£o para o bordado.",
    "bibliographicReferences": [
      "ADOBE. Illustrator Vector Graphics Reference Manual. San Jose: Adobe Press, 2022.",
      "CORELDRAW. Working with B√©zier Curves & Vector Shapes. Ottawa: Alludo, 2023.",
      "ARTRELADOS. Guia de Vetores Essenciais para Bordadeiras e Programadores. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-032-definicao-de-sequencia",
    "code": "D-032",
    "term": "Defini√ß√£o de Sequ√™ncia",
    "level": "Fundamental üü¢",
    "category": "Programa√ß√£o de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim definitio, -onis (determina√ß√£o exata de limites) e sequentia (continuidade, s√©rie ordenada de acontecimentos, de sequi, seguir). Estrutura l√≥gica primordial da arquitetura de linguagens de bordado.",
    "summary": "Planejamento e ordena√ß√£o l√≥gica cronol√≥gica dos objetos e cores na matriz para otimizar o tempo e garantir o assentamento do tecido.",
    "definition": "A defini√ß√£o de sequ√™ncia (ou ordena√ß√£o de objetos / stitch sequencing) √© a estrutura√ß√£o cronol√≥gica da ordem exata em que cada elemento, camada e cor do desenho ser√° bordado pela m√°quina. O planejamento correto da sequ√™ncia minimiza o n√∫mero de trocas de carretel de linha, elimina cortes desnecess√°rios e respeita a f√≠sica de dilata√ß√£o do tecido, bordando do centro para as bordas e do plano de fundo para os detalhes superiores.",
    "technicalDetails": "Gerenciada atrav√©s da lista de objetos (Sequence Manager / Color-Object List) no software de digitaliza√ß√£o. Utiliza algoritmos de agrupamento por cor (Color Sorting), ramifica√ß√£o autom√°tica (Branching) e controle de camadas de sobreposi√ß√£o para evitar repuxos assim√©tricos.",
    "howItWorks": [
      "1. O programador abre a √°rvore de sequ√™ncia do software e analisa todos os objetos do desenho.",
      "2. As costuras de alinhave e underlays s√£o configuradas para serem executadas em primeiro lugar.",
      "3. Os objetos de fundo (tatami grande) s√£o ordenados antes dos detalhes e textos que repousam por cima.",
      "4. Os contornos perim√©tricos e pontos cheios finais s√£o posicionados como os √∫ltimos itens da lista.",
      "5. O comando de reordena√ß√£o por cores agrupa elementos da mesma tonalidade, reduzindo as trocas de linha na m√°quina."
    ],
    "beginnerExplanation": "√â a organiza√ß√£o da 'fila' de costura: voc√™ decide qual parte do desenho a m√°quina vai bordar primeiro, qual vem no meio e qual fica por √∫ltimo. Fazer na ordem certa √© o que garante que o fundo fique por baixo e os contornos e olhinhos fiquem certinhos por cima!",
    "applications": [
      "Montagem de apliques (ordem: marca√ß√£o ‚Üí fixa√ß√£o ‚Üí acabamento)",
      "Redu√ß√£o do tempo total de bordado atrav√©s da otimiza√ß√£o de trocas de cor",
      "Controle de repuxo em tecidos el√°sticos bordando sempre de dentro para fora",
      "Sobreposi√ß√£o correta de sombras, degrad√™s e contornos em personagens"
    ],
    "commonErrors": [
      "Bordar o contorno fino preto antes do preenchimento colorido, fazendo o preenchimento cobrir o contorno ou empurr√°-lo para fora de posi√ß√£o",
      "Deixar objetos da mesma cor espalhados pela sequ√™ncia, obrigando a m√°quina a trocar a linha v√°rias vezes desnecessariamente",
      "Bordar das bordas para o centro, empurrando uma bolha de tecido para o meio do desenho"
    ],
    "troubleshootingTips": [
      "Use a regra cl√°ssica da engenharia de bordado: 1¬∫ Underlay ‚Üí 2¬∫ Fundo ‚Üí 3¬∫ Detalhes m√©dios ‚Üí 4¬∫ Contornos finais",
      "Acione a ferramenta 'Color Sort' (Agrupar Cores) no software antes de exportar o arquivo final",
      "Arraste os objetos na barra lateral de sequ√™ncia do software para corrigir a ordem visual com facilidade"
    ],
    "dicaArtrelados": "Pense na defini√ß√£o de sequ√™ncia como vestir uma pessoa: primeiro a roupa de baixo (underlay), depois a camisa (preenchimento), depois a jaqueta (detalhes) e por √∫ltimo o cinto e os bot√µes (contornos)! Se voc√™ tentar colocar o cinto antes da cal√ßa, o resultado fica um desastre!",
    "voceSabia": "Uma matriz com sequ√™ncia mal planejada pode demorar at√© o dobro do tempo para bordar devido aos ciclos repetidos de parada, corte de linha, troca manual de cone e reinicializa√ß√£o do cabe√ßote.",
    "practicalExercise": "Abra uma matriz de flor com p√©talas e miolo: abra a lista de objetos do software e observe a sequ√™ncia. Reordene para que a m√°quina borde primeiro todas as p√©talas de fundo e deixe o miolo amarelo com relevo para o final. Simule no player de pontos e veja a harmonia da ordem de costura!",
    "quickSummary": "Ordena√ß√£o cronol√≥gica de objetos e cores na matriz que garante sobreposi√ß√£o correta, redu√ß√£o de paradas e estabilidade do tecido.",
    "relatedTerms": [
      "Camada de Bordado",
      "Caminho de Costura",
      "Corte Autom√°tico de Linha",
      "Underlay"
    ],
    "tags": [
      "sequ√™ncia",
      "ordem",
      "camadas",
      "otimiza√ß√£o",
      "software",
      "troca de cor"
    ],
    "bibliographicReferences": [
      "WILCOM. Sequence Optimization, Color Sorting & Branching Logic. Sydney: Wilcom, 2022.",
      "DEVERSON, D. Layering and Sequencing for Multi-Color Commercial Embroidery. London, 2021.",
      "ARTRELADOS. Otimiza√ß√£o de Sequ√™ncia de Matrizes: Como Reduzir Minutos Preciosos na Produ√ß√£o. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-033-detalhamento-da-matriz",
    "code": "D-033",
    "term": "Detalhamento da Matriz",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Locu√ß√£o nominal masculina.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "N√≠vel de informa√ß√£o, refinamento e quantidade de microelementos aplicados na constru√ß√£o de um bordado.",
    "definition": "O detalhamento da matriz corresponde ao n√≠vel de informa√ß√£o, precis√£o visual e quantidade de elementos minuciosos utilizados na constru√ß√£o de um desenho para bordado. Uma matriz pode variar desde um estilo minimalista at√© uma estrutura altamente complexa e realista. No entanto, no bordado computadorizado vigora a lei f√≠sica dos materiais: mais detalhes n√£o significam necessariamente um bordado melhor.",
    "technicalDetails": "O limite de detalhamento √© determinado pela f√≠sica da agulha (di√¢metro de 0.70mm a 0.80mm), da espessura do fio (T√≠tulo 40 = ~0.38mm) e da estrutura das tramas do tecido. Tentar colocar microdetalhes abaixo de 1mm causa ac√∫mulo de linha e perda de legibilidade.",
    "construction": [
      "Hierarquia visual de elementos principais e secund√°rios",
      "Filtro de microdetalhes e linhas finas",
      "Escala proporcional de aplica√ß√£o",
      "Adequa√ß√£o ao relevo e textura do tecido"
    ],
    "howItWorks": [
      "1. O digitalizador analisa a complexidade da arte original.",
      "2. Identifica os elementos essenciais que garantem o reconhecimento do desenho.",
      "3. Elimina ou funde detalhes min√∫sculos que virariam borr√µes no tecido.",
      "4. Aplica pontos com precis√£o nas √°reas de maior impacto visual."
    ],
    "mainTypes": [
      "Detalhamento Minimalista / Alto Contraste (Ideal para marcas e uniformes)",
      "Detalhamento Moderado (Padr√£o para ilustra√ß√µes e desenhos infantis)",
      "Detalhamento Realista / Avan√ßado (Para retratos, pelagens e arte sacra em grandes formatos)"
    ],
    "advantages": [
      "‚úî Cria bordados n√≠tidos, elegantes e de f√°cil reconhecimento visual",
      "‚úî Mant√©m o bordado leve, confort√°vel e flex√≠vel na pe√ßa de roupa",
      "‚úî Otimiza o tempo de m√°quina e evita quebras repetitivas de agulha"
    ],
    "limitations": [
      "Bordados pequenos (abaixo de 5cm) exigem simplifica√ß√£o dr√°stica do detalhamento para manter a legibilidade."
    ],
    "commonErrors": [
      "‚ùå Tentar reproduzir cada fio de cabelo ou ruga de uma foto em um bordado de bolso de 8cm.",
      "‚ùå Aumentar a densidade na tentativa de fazer microdetalhes aparecerem.",
      "‚ùå Ignorar que tecidos felpudos (toalhas) engolem e escondem pequenos detalhes."
    ],
    "voceSabia": "A t√©cnica de simplifica√ß√£o inteligente √© a maior virtude de um grande digitalizador: saber o que N√ÉO bordar √© t√£o importante quanto saber o que bordar!",
    "curiosidadeTecnica": "Em desenhos com muitos detalhes, mudar para agulha fina 65/9 e linha de bordado T√≠tulo 60 (mais fina que a convencional) permite aumentar o detalhamento em cerca de 25%.",
    "dicaArtrelados": "No bordado, simplificar n√£o significa empobrecer! √Äs vezes, simplificar e limpar o desenho √© justamente o segredo que permite que o bordado fique incrivelmente elegante, n√≠tido e profissional.",
    "applications": [
      "Adapta√ß√£o de fotografias para bordado, escudos complexos, caricaturas e bras√µes."
    ],
    "troubleshootingTips": [
      "Se os detalhes de um rosto bordado ficarem irreconhec√≠veis, elimine as sombras intermedi√°rias e mantenha apenas os tra√ßos de contorno principais."
    ],
    "relatedTerms": [
      "Defini√ß√£o do Bordado",
      "Digitaliza√ß√£o de Logotipo",
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
    "origin": "Do franc√™s d√©tailler (cortar em peda√ßos mi√∫dos, examinar minuciosamente, de d√©- + tailler, cortar) e do latim matrix (molde gerador).",
    "beginnerExplanation": "Detalhamento da matriz √© o ajuste fino de cada min√∫sculo detalhe do bordado: acertar os olhos de um personagem, criar fios de cabelo finos, fazer brilhos nas folhas e garantir que tudo fique n√≠tido sem criar uma montanha grossa de linha.",
    "practicalExercise": "Borde o rostinho de um ursinho de pel√∫cia: para o focinho e olhos, use uma agulha mais fina (65/9 ou 70/10) e linha t√≠tulo 60 para os microdetalhes pretos. Veja como os detalhes ganham uma nitidez impressionante que encanta os clientes de enxoval!",
    "quickSummary": "Detalhamento da matriz √© o refinamento t√©cnico e art√≠stico dos microelementos do bordado para garantir nitidez, expressividade e acabamento superior.",
    "bibliographicReferences": [
      "NICOLAS, C. Micro-Detailing and High-Definition Machine Embroidery. Paris, 2022.",
      "MADEIRA. Specialty Threads (40wt vs 60wt) for Fine Lettering and Details. Freiburg, 2023.",
      "ARTRELADOS. Segredos do Detalhamento e Linhas Finas no Bordado Infantil. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-034-direcao-de-preenchimento",
    "code": "D-034",
    "term": "Dire√ß√£o de Preenchimento",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal feminina.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Orienta√ß√£o angular predominante em que os pontos s√£o distribu√≠dos para cobrir √°reas s√≥lidas da matriz.",
    "definition": "A dire√ß√£o de preenchimento √© a orienta√ß√£o angular predominante na qual as passagens de pontos s√£o distribu√≠das dentro de uma √°rea s√≥lida ou fechada da matriz de bordado (como em blocos de Ponto Tatami ou preenchimentos complexos). Essa escolha define para que lado as linhas seguir√£o (horizontal, vertical, diagonal ou curvil√≠nea), alterando drasticamente o reflexo de luz, a textura, a rigidez e as for√ßas de repuxamento sobre o tecido.",
    "technicalDetails": "Configurada em graus no software. Em grandes √°reas de preenchimento, √¢ngulos diagonais a 45¬∞ ou 135¬∞ s√£o preferidos porque distribuem as for√ßas de tra√ß√£o igualmente entre os fios de urdume e trama do tecido plano.",
    "construction": [
      "Linha de √¢ngulo de preenchimento",
      "Camada de underlay posicionada a 90¬∞ de suporte",
      "Deslocamento alternado de passagens",
      "Compensa√ß√£o de encolhimento paralela ao √¢ngulo"
    ],
    "howItWorks": [
      "1. O programador define o √¢ngulo de inclina√ß√£o dentro do pol√≠gono vetorial.",
      "2. O software tra√ßa as passagens de agulha paralelas a esse eixo.",
      "3. A linha de poli√©ster reflete a ilumina√ß√£o ambiente conforme a orienta√ß√£o das fibras.",
      "4. Dois objetos vizinhos com dire√ß√µes opostas criam contraste n√≠tido de planos."
    ],
    "mainTypes": [
      "Preenchimento Diagonal (45¬∞ / 135¬∞ - Padr√£o universal mais est√°vel)",
      "Preenchimento Horizontal (0¬∞ / 180¬∞)",
      "Preenchimento Vertical (90¬∞ / 270¬∞)",
      "Preenchimento com Dire√ß√µes Cruzadas (Para criar efeito de xadrez ou textura de tecido)"
    ],
    "advantages": [
      "‚úî Cria contrastes visuais ricos e separa√ß√£o de planos com a mesma cor de linha",
      "‚úî Evita deforma√ß√µes excessivas ao equilibrar a tra√ß√£o no tecido",
      "‚úî Proporciona acabamento liso e homog√™neo com brilho sedoso"
    ],
    "limitations": [
      "Preenchimentos extensos com pontos no mesmo sentido das tramas do tecido podem afundar e perder cobertura."
    ],
    "commonErrors": [
      "‚ùå Utilizar exatamente a mesma dire√ß√£o em todos os preenchimentos da matriz, deixando o desenho sem dinamismo.",
      "‚ùå Escolher a dire√ß√£o sem observar o sentido da forma org√¢nica (ex: bordar uma folha na transversal pura).",
      "‚ùå Alinhar o preenchimento na horizontal exata sobre malhas muito el√°sticas."
    ],
    "voceSabia": "Voc√™ pode bordar uma bandeira xadrez usando apenas UMA √∫nica cor de linha branca: basta programar os quadrados alternando a dire√ß√£o de preenchimento entre 45¬∞ e 135¬∞!",
    "curiosidadeTecnica": "Dire√ß√£o de preenchimento √© a orienta√ß√£o dos pontos de cobertura; o underlay de base deve ser sempre programado em √¢ngulo cruzado (perpendicular ou a 60¬∞) para criar uma grade estrutural que trava o tecido.",
    "dicaArtrelados": "N√£o pense na dire√ß√£o do ponto apenas como uma simples seta: pense nela como o 'sentido' da linha dentro do desenho! Quando voc√™ aprende a enxergar e direcionar a linha, suas matrizes ganham vida e volume!",
    "applications": [
      "Fundos de bras√µes, preenchimento de personagens, folhas, p√©talas e √°reas geom√©tricas."
    ],
    "troubleshootingTips": [
      "Se uma √°rea grande de preenchimento estiver repuxando o tecido para dentro, mude a dire√ß√£o de 0¬∞ para 45¬∞ e aumente a compensa√ß√£o de repuxo para 0.35mm."
    ],
    "relatedTerms": [
      "Dire√ß√£o do Ponto",
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
    "origin": "Do latim directio (dire√ß√£o) e do latim vulgar implere (encher, completar um espa√ßo vazio).",
    "beginnerExplanation": "Dire√ß√£o de preenchimento √© o √¢ngulo em que os pontos correm dentro de uma √°rea grande (como um c√≠rculo, um cora√ß√£o ou uma letra grande). Mudar esse √¢ngulo ajuda a evitar que o tecido encolha e d√° vida e movimento ao desenho.",
    "practicalExercise": "Em um cora√ß√£o dividido ao meio por uma linha central, preencha o lado esquerdo com pontos a 45¬∞ e o lado direito com pontos a 135¬∞. Borde em tecido vermelho: veja como o cora√ß√£o parece ter duas metades tridimensionais que se encontram no meio pelo jogo de luz!",
    "quickSummary": "Dire√ß√£o de preenchimento √© a inclina√ß√£o angular aplicada aos pontos de cobertura de grandes √°reas para otimizar estabilidade e reflex√£o de luz.",
    "bibliographicReferences": [
      "WILCOM. Fill Stitch Directions and Fabric Stress Management. Sydney, 2022.",
      "KRAUSZ, P. Fill Stitch Engineering and Directional Aesthetics. New York, 2021.",
      "ARTRELADOS. √Çngulos de Preenchimento: Equil√≠brio T√™xtil e Est√©tica Visual. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-035-distancia-de-salto",
    "code": "D-035",
    "term": "Dist√¢ncia de Salto (Jump Distance)",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal feminina.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Espa√ßo percorrido pelo bastidor entre dois pontos sem forma√ß√£o de costura naquele trecho.",
    "definition": "A dist√¢ncia de salto (Jump Distance) √© o espa√ßo percorrido pela m√°quina entre dois pontos ou regi√µes do bordado durante um movimento de salto, sem realizar costura cont√≠nua naquele trecho. De maneira simples: √© a dist√¢ncia que a agulha precisa 'atravessar' quando sai de onde terminou um objeto e vai at√© onde come√ßar√° o pr√≥ximo.",
    "technicalDetails": "Nos softwares e m√°quinas, existe um par√¢metro limite de corte autom√°tico (geralmente calibrado entre 2.0mm e 5.0mm). Saltos menores que esse valor s√£o realizados em movimento cont√≠nuo (deixando fio esticado para limpeza); saltos maiores acionam o comando mec√¢nico de arremate e corte de linha.",
    "construction": [
      "Vetor de deslocamento livre do pant√≥grafo",
      "Ponto de partida (sa√≠da do objeto anterior)",
      "Ponto de chegada (entrada do pr√≥ximo objeto)",
      "Comuta√ß√£o entre salto livre e corte autom√°tico"
    ],
    "howItWorks": [
      "1. A m√°quina conclui um objeto no ponto de sa√≠da.",
      "2. Avalia se a dist√¢ncia at√© o pr√≥ximo objeto ultrapassa o limite de corte configurado.",
      "3. Se for menor: a agulha sobe e o bastidor se desloca diretamente deixando o fio esticado.",
      "4. Se for maior: a m√°quina aciona o cortador, arremata e desloca-se com a linha cortada."
    ],
    "mainTypes": [
      "Salto Curto com Conex√£o (1mm a 3mm - N√£o exige corte)",
      "Salto Longo com Corte Autom√°tico (Acima de 4mm a 7mm)",
      "Salto Oculto / Ponto de Viagem (Caminho costurado por baixo de outros objetos)"
    ],
    "advantages": [
      "‚úî Saltos curtos bem planejados eliminam cortes desnecess√°rios e aceleram a produ√ß√£o",
      "‚úî Otimiza o movimento cinem√°tico do pant√≥grafo",
      "‚úî Evita o desgaste prematuro da navalha de corte da m√°quina"
    ],
    "limitations": [
      "Saltos longos deixados sem corte sobre tecidos claros geram fios vis√≠veis que podem ser repuxados durante o uso se n√£o forem aparados."
    ],
    "commonErrors": [
      "‚ùå Confundir dist√¢ncia de salto com dist√¢ncia entre pontos normais de costura.",
      "‚ùå Tentar eliminar absolutamente todos os saltos ou colocar corte em qualquer dist√¢ncia de 2mm.",
      "‚ùå Ignorar saltos longos que cruzam √°reas abertas do bordado."
    ],
    "voceSabia": "Cada comando de corte autom√°tico de linha em uma m√°quina industrial leva de 2 a 4 segundos: em uma matriz com 50 cortes desnecess√°rios, voc√™ perde mais de 3 minutos por pe√ßa apenas cortando linha!",
    "curiosidadeTecnica": "Ao simular a matriz no software, ative a visualiza√ß√£o de 'Linhas de Conex√£o' (Connectors / Jump Lines) para enxergar todos os saltos em linhas pontilhadas vermelhas ou pretas.",
    "dicaArtrelados": "Um bom bordado n√£o depende apenas dos pontos que aparecem no tecido, mas tamb√©m dos caminhos que a m√°quina percorre entre eles! Procure saltos longos na simula√ß√£o como quem procura estradas desnecess√°rias em um mapa: se puder encurtar a rota, seu bordado ficar√° mais limpo e muito mais r√°pido!",
    "applications": [
      "Otimiza√ß√£o de sequ√™ncias de letras, separa√ß√£o de bras√µes, monogramas e produ√ß√£o em s√©rie."
    ],
    "troubleshootingTips": [
      "Se as letras estiverem conectadas por fios feios que voc√™ precisa cortar na tesourinha, reduza o valor do 'Comprimento de Salto para Corte' no software para 2.0mm."
    ],
    "relatedTerms": [
      "Ponto de Entrada",
      "Ponto de Sa√≠da",
      "Corte de Linha",
      "Sequ√™ncia de Pontos"
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
    "origin": "Do latim distantia (afastamento) e do germ√¢nico salti (salto, pulo mec√¢nico sem perfura√ß√£o de agulha). Comando mec√¢nico prim√°rio dos formatos industriais de bordado.",
    "beginnerExplanation": "Dist√¢ncia de salto √© a dist√¢ncia que o bastidor percorre de um ponto a outro sem a agulha costurar (quando a m√°quina pula de uma letra para a pr√≥xima). Se o pulo for maior que a dist√¢ncia configurada, a m√°quina aciona o cortador de linha autom√°tico.",
    "practicalExercise": "No painel da sua m√°quina ou no software, verifique o ajuste de corte por salto (geralmente regulado em 2.0mm a 5.0mm). Borde uma frase com letras cursivas: veja como nos saltos pequenos ela passa direto e nos saltos maiores ela corta a linha automaticamente.",
    "quickSummary": "Dist√¢ncia de salto √© o deslocamento do bastidor entre objetos sem perfura√ß√µes, gatilho para o acionamento do cortador de linha autom√°tico.",
    "bibliographicReferences": [
      "TAJIMA. Trimming Mechanisms and Jump Length Parameters. Nagoya, 2022.",
      "BROTHER. Jump Stitch Length and Automatic Thread Trimming. Nagoya, 2023.",
      "ARTRELADOS. Como Configurar Saltos e Eliminar Fiados de Linha na Produ√ß√£o. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-036-diagrama-de-pontos",
    "code": "D-036",
    "term": "Diagrama de Pontos",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal masculina.",
    "category": "Softwares & Formatos",
    "summary": "Representa√ß√£o gr√°fica ou esquem√°tica que permite visualizar a estrutura interna, trajet√≥rias e ordem dos pontos da matriz.",
    "definition": "O diagrama de pontos √© a representa√ß√£o gr√°fica e estrutural utilizada para visualizar, analisar e compreender a organiza√ß√£o de cada ponto individual que comp√µe uma matriz de bordado. Enquanto a imagem simulada na tela mostra como o bordado dever√° parecer, o diagrama de pontos revela a sua 'planta baixa': a posi√ß√£o de cada furo de agulha, as trajet√≥rias de deslocamento, a sequ√™ncia de objetos e os pontos de entrada e sa√≠da.",
    "technicalDetails": "Visualizado nos softwares ao desativar o modo 3D / TrueView e ativar a visualiza√ß√£o em grade com n√≥s de ponto (Needle Points / Wireframe Mode), permitindo leitura t√©cnica de penetra√ß√µes e trajet√≥rias de viagem.",
    "construction": [
      "Marca√ß√£o de pontos de penetra√ß√£o da agulha",
      "Linhas vetoriais de conex√£o de trajeto",
      "Numera√ß√£o cronol√≥gica de objetos e cores",
      "Indicadores visuais de paradas e cortes"
    ],
    "howItWorks": [
      "1. O operador abre a matriz no software e desativa a visualiza√ß√£o de linha realista (3D).",
      "2. O diagrama exp√µe a malha real de pontos e a densidade de furos.",
      "3. Utiliza-se a barra de reprodu√ß√£o (Stitch Player) para simular a costura passo a passo.",
      "4. Identificam-se pontos sobrepostos desnecess√°rios ou falhas de percurso."
    ],
    "mainTypes": [
      "Visualiza√ß√£o em Aramado / Wireframe (Mostra contornos e linhas de dire√ß√£o)",
      "Visualiza√ß√£o Ponto a Ponto com N√≥s (Destaca cada furo de agulha)",
      "Diagrama de Ordem de Produ√ß√£o (Ficha t√©cnica impressa com dados e cores)"
    ],
    "advantages": [
      "‚úî Permite enxergar a verdadeira estrutura interna do bordado al√©m da ilus√£o da tela",
      "‚úî Facilita o diagn√≥stico pr√©vio de pontos acumulados perigosos para a agulha",
      "‚úî Excelente ferramenta pedag√≥gica para aprender a 'ler' matrizes de bordado"
    ],
    "limitations": [
      "A representa√ß√£o visual dos s√≠mbolos e cores varia de acordo com cada software de bordado."
    ],
    "commonErrors": [
      "‚ùå Olhar apenas para a imagem 3D simulada e nunca inspecionar o diagrama de pontos.",
      "‚ùå Confundir o diagrama com o arquivo final da m√°quina.",
      "‚ùå N√£o realizar a simula√ß√£o virtual passo a passo antes de carregar o arquivo na m√°quina."
    ],
    "voceSabia": "A imagem 3D do software √© como a foto de uma casa pronta; o diagrama de pontos √© a planta baixa arquitet√¥nica com todas as vigas e encanamentos!",
    "curiosidadeTecnica": "Ao observar o diagrama de pontos, densidades muito altas aparecem como manchas escuras e s√≥lidas de furos de agulha concentrados.",
    "dicaArtrelados": "N√£o olhe uma matriz apenas como uma imagem: aprenda a enxerg√°-la como um caminho feito de pontos! Quando voc√™ come√ßa a observar onde come√ßa ‚Üí por onde passa ‚Üí onde termina ‚Üí para onde vai depois, voc√™ passa a entender como a m√°quina pensa!",
    "applications": [
      "Revis√£o t√©cnica de arquivos, auditoria de matrizes compradas na internet e controle de qualidade."
    ],
    "troubleshootingTips": [
      "Use o reprodutor de pontos (Stitch Player) na velocidade m√°xima para conferir se a ordem de bordado est√° l√≥gica antes de colocar a linha na m√°quina."
    ],
    "relatedTerms": [
      "Sequ√™ncia de Pontos",
      "Ponto de Entrada",
      "Ponto de Sa√≠da",
      "Digitaliza√ß√£o de Bordado"
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
    "origin": "Do grego diagramma (figura desenhada, esquema gr√°fico composto por linhas, de diagraphein, marcar com linhas) e de punctum (ponto).",
    "beginnerExplanation": "Diagrama de pontos √© o mapa t√©cnico do bordado na tela do computador: voc√™ consegue ver cada furinho de agulha, as linhas de costura por baixo (underlay) e at√© onde a m√°quina vai pular ou cortar a linha antes de colocar o tecido no bastidor.",
    "practicalExercise": "Abra uma matriz no software e ative a visualiza√ß√£o em 'Modo Pontos' ou 'Modo 1:1' (desativando o efeito 3D realista TrueView). Use a barra de rolagem da simula√ß√£o para ver a agulha descendo ponto por ponto: analise como as camadas de baixo s√£o constru√≠das antes das camadas de cima!",
    "quickSummary": "Diagrama de pontos √© a visualiza√ß√£o anal√≠tica e esquem√°tica de todas as penetra√ß√µes de agulha e comandos mec√¢nicos da matriz.",
    "bibliographicReferences": [
      "WILCOM. Stitch View, Needle Points and Sequence Inspection. Sydney, 2022.",
      "TAJIMA. DGML Stitch Editing and Sequence Diagram. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. Como Ler e Auditar o Diagrama de Pontos de uma Matriz. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-037-dimensao-da-matriz",
    "code": "D-037",
    "term": "Dimens√£o da Matriz",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal feminina.",
    "category": "Terminologia Geral",
    "summary": "Medidas f√≠sicas reais de largura e altura que o desenho ocupar√° no tecido quando bordado.",
    "definition": "A dimens√£o da matriz corresponde √†s medidas f√≠sicas que indicam o espa√ßo que o desenho bordado ocupar√° no tecido, expressas em largura e altura (normalmente em mil√≠metros ou cent√≠metros, como 100 x 80 mm ou 10 x 8 cm). √â fundamental compreender que a dimens√£o da matriz representa o tamanho real do bordado, que deve ser totalmente compat√≠vel com a √°rea √∫til do bastidor e o espa√ßo dispon√≠vel na pe√ßa f√≠sica.",
    "technicalDetails": "Diferencia-se do tamanho em Kilobytes do arquivo digital. O redimensionamento de uma matriz em mais de 10% a 15% exige rec√°lculo autom√°tico de pontos pelo software para n√£o comprometer a densidade original.",
    "construction": [
      "Largura f√≠sica horizontal (X em mm)",
      "Altura f√≠sica vertical (Y em mm)",
      "√Årea delimitadora retangular (Bounding Box)",
      "√Årea efetiva de cobertura por pontos"
    ],
    "howItWorks": [
      "1. A bordadeira confere as medidas em mil√≠metros no painel ou software.",
      "2. Mede com uma fita m√©trica o local exato da pe√ßa (ex: bolso, toalha, peito).",
      "3. Seleciona o bastidor adequado garantindo a folga da dist√¢ncia de seguran√ßa."
    ],
    "mainTypes": [
      "Dimens√£o Nominal (Medida externa m√°xima de largura x altura)",
      "√Årea Efetiva de Bordado (Superf√≠cie real coberta pelos pontos)",
      "Dimens√£o Proporcional Redimensionada"
    ],
    "advantages": [
      "‚úî Garante o enquadramento perfeito do bordado na pe√ßa sem erros de propor√ß√£o",
      "‚úî Assegura a compatibilidade imediata com os bastidores dispon√≠veis no ateli√™",
      "‚úî Permite planejar a compra correta de entretelas e o consumo de materiais"
    ],
    "limitations": [
      "Aumentar ou diminuir drasticamente as dimens√µes sem um software que recalcule pontos deforma a densidade e quebra a matriz."
    ],
    "commonErrors": [
      "‚ùå Confundir a dimens√£o da matriz com o tamanho nominal do bastidor.",
      "‚ùå Dobrar o tamanho da matriz sem verificar se os pontos ficaram espa√ßados demais e ralos.",
      "‚ùå Reduzir uma matriz para menos da metade fazendo letras e detalhes virarem bolhas duras de linha."
    ],
    "voceSabia": "Duas matrizes com exatamente a mesma dimens√£o de 10x10cm podem ter 5.000 pontos (se for um tra√ßo leve) ou 25.000 pontos (se for um bras√£o totalmente preenchido em tatami)!",
    "curiosidadeTecnica": "A √°rea retangular (largura x altura) raramente √© 100% preenchida: a maioria dos desenhos possui formas irregulares que cobrem apenas 40% a 60% da √°rea do ret√¢ngulo envolvente.",
    "dicaArtrelados": "Antes de bordar, me√ßa duas vezes: a matriz e o espa√ßo dispon√≠vel na pe√ßa! Pense sempre no trio: 1. Tamanho da matriz; 2. Capacidade do bastidor; 3. Espa√ßo dispon√≠vel na pe√ßa. Quando os tr√™s est√£o em harmonia, seu trabalho come√ßa com total seguran√ßa!",
    "applications": [
      "Enquadramento de matrizes, escolha de bastidores, personaliza√ß√£o de toalhas e camisas."
    ],
    "troubleshootingTips": [
      "Se precisar mudar o tamanho de uma matriz pronta em mais de 20%, solicite ao digitalizador que gere uma nova vers√£o recalculada para a nova escala."
    ],
    "relatedTerms": [
      "√Årea √ötil do Bastidor",
      "Bastidor",
      "Densidade de Pontos",
      "Dist√¢ncia de Seguran√ßa"
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
    "origin": "Do latim dimensio, -onis (a√ß√£o de medir, extens√£o mensur√°vel, de dimetiri) e de matrix (molde gerador).",
    "beginnerExplanation": "Dimens√£o da matriz √© a altura e a largura exatas do desenho em mil√≠metros ou cent√≠metros (por exemplo: 10cm x 10cm). √â important√≠ssimo conferir a dimens√£o para ter certeza de que o desenho vai caber dentro do seu bastidor e no peito da camiseta!",
    "practicalExercise": "Antes de enviar um arquivo para a m√°quina, me√ßa a √°rea √∫til do bolso ou do peito da pe√ßa com uma fita m√©trica. Compare com a dimens√£o informada no painel da m√°quina: certifique-se de que o desenho deixa pelo menos 15mm de folga livre em todos os lados.",
    "quickSummary": "Dimens√£o da matriz √© a medida f√≠sica real (largura e altura) do projeto de bordado, essencial para enquadramento no bastidor e propor√ß√£o na pe√ßa.",
    "bibliographicReferences": [
      "BROTHER. Embroidery Field Limits and Hoop Dimension Chart. Nagoya, 2022.",
      "JANOME. Hoop Sizing and Design Scaling Precautions. Tokyo, 2023.",
      "ARTRELADOS. Guia de Dimens√µes Padr√£o para Cada Tipo de Pe√ßa e Bastidor. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-038-densidade-de-linha",
    "code": "D-038",
    "term": "Densidade de Linha",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo feminino e locu√ß√£o adjetiva.",
    "category": "Agulhas & Fios",
    "summary": "Concentra√ß√£o e volume de passagens de linha produzidas pelos pontos sobre a superf√≠cie do tecido.",
    "definition": "A densidade de linha refere-se ao grau de concentra√ß√£o de linha produzido pelos pontos de bordado em determinada √°rea da matriz. Quanto mais pr√≥ximas e numerosas forem as passagens de linha em uma regi√£o, maior ser√° a densidade e o volume de cobertura sobre o tecido. A densidade de linha depende do espa√ßamento entre pontos, da espessura do fio utilizado, do tipo de ponto e da quantidade de camadas superpostas.",
    "technicalDetails": "Interage diretamente com o T√≠tulo da linha (ex: T√≠tulo 40 de 120D/2 vs T√≠tulo 60 de 75D/2). Linhas mais espessas proporcionam maior cobertura visual com menor n√∫mero de passagens, enquanto fios mais finos exigem passagens mais pr√≥ximas para evitar transpar√™ncia.",
    "construction": [
      "Espa√ßamento entre passagens lineares",
      "Calibre e espessura do fio de poli√©ster/rayon",
      "N√∫mero de camadas sobrepostas",
      "Estrutura do substrato t√™xtil"
    ],
    "howItWorks": [
      "1. A agulha deposita passagens de linha paralelas sobre o tecido.",
      "2. O di√¢metro do fio preenche o espa√ßo entre as penetra√ß√µes vizinhas.",
      "3. O equil√≠brio entre espessura da linha e espa√ßamento gera uma superf√≠cie lisa e fechada."
    ],
    "mainTypes": [
      "Densidade de Linha Padr√£o (Para linha T√≠tulo 40 tradicional)",
      "Densidade para Linhas Especiais / Met√°licas (Espa√ßamento ligeiramente mais aberto para acomodar o fio Lurex)",
      "Densidade para Linha Fina T√≠tulo 60 (Espa√ßamento mais fechado para microletras)"
    ],
    "advantages": [
      "‚úî Garante cobertura opaca e cores intensas da linha",
      "‚úî Permite dosar o relevo e o toque t√°ctil do bordado na pe√ßa",
      "‚úî Evita desperd√≠cio de metros de linha em matrizes comerciais"
    ],
    "limitations": [
      "Concentra√ß√£o excessiva de linha provoca rigidez, calor por atrito na agulha e enrugamento do tecido."
    ],
    "commonErrors": [
      "‚ùå Supor que 'quanto mais cheio de linha, melhor a qualidade'.",
      "‚ùå Usar a mesma configura√ß√£o de espa√ßamento ao trocar de linha comum 40 para linha met√°lica ou linha fina 60.",
      "‚ùå Ignorar a espessura da linha ao avaliar a cobertura de uma matriz."
    ],
    "voceSabia": "As linhas met√°licas (ouro e prata) s√£o mais grossas e r√≠gidas que as linhas normais de poli√©ster: por isso, a densidade de linha deve ser aberta em cerca de 10% a 15% para a m√°quina bordar macio e sem arrebentar!",
    "curiosidadeTecnica": "A f√≥rmula de cobertura perfeita estabelece que o espa√ßamento entre linhas deve ser rigorosamente igual ao di√¢metro f√≠sico do fio comprimido pelo p√©-calcador.",
    "dicaArtrelados": "Densidade n√£o √© uma corrida para colocar o m√°ximo de linha poss√≠vel: √© uma busca pelo equil√≠brio! Uma boa matriz coloca a quantidade certa de linha no lugar certo, respeitando o tecido e a linha. Quando o bordado est√° duro ou repuxando, colocar mais linha nunca √© a solu√ß√£o!",
    "applications": [
      "Calibra√ß√£o de linhas comuns, met√°licas, fluorescentes e fios finos para microbordados."
    ],
    "troubleshootingTips": [
      "Se a linha met√°lica estiver desfiando e quebrando no cabe√ßote, abra a densidade de linha em 0.05mm e diminua a velocidade para 600 PPM."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Linha de Bordado",
      "Espa√ßamento entre Pontos",
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
    "origin": "Do latim densitas (densidade, espessura) e de linea (fio de linho, linha). Conceito t√™xtil que relaciona a espessura f√≠sica do fio ao espa√ßamento da matriz.",
    "beginnerExplanation": "Densidade de linha √© a rela√ß√£o entre a grossura do fio de bordado (como a linha 120/2 comum ou a linha 60 mais fininha) e a quantidade de pontos da matriz. Uma linha fininha exige pontos mais juntinhos para cobrir bem; uma linha grossa pede pontos mais afastados para n√£o encavalar.",
    "practicalExercise": "Pegue um cone de linha t√≠tulo 40 tradicional e um cone de linha t√≠tulo 60 extrafina. Borde a mesma matriz em ponto Tatami com os dois cones lado a lado no mesmo tecido: veja como a linha 60 deixa transparecer o tecido (exigindo mais densidade), enquanto a linha 40 cobre perfeitamente.",
    "quickSummary": "Densidade de linha √© a calibra√ß√£o do espa√ßamento de pontos em conson√¢ncia com a espessura e t√≠tulo do fio de bordado utilizado.",
    "bibliographicReferences": [
      "MADEIRA. Thread Weights (40, 60, 75) and Corresponding Stitch Density. Freiburg, 2023.",
      "GUNOLD. Technical Guide to Specialty Threads & Density Setup. Stockstadt, 2022.",
      "ARTRELADOS. Escolha de Linhas Especiais e Calibra√ß√£o de Densidade. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-039-deteccao-de-cores",
    "code": "D-039",
    "term": "Detec√ß√£o de Cores",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal feminina.",
    "category": "Softwares & Formatos",
    "summary": "Recurso do software para identificar, agrupar e separar √°reas crom√°ticas de uma imagem durante a prepara√ß√£o.",
    "definition": "A detec√ß√£o de cores √© o processo pelo qual um software de bordado identifica e analisa as diferentes tonalidades presentes em uma imagem gr√°fica e utiliza essas informa√ß√µes para separar regi√µes, agrupar cores semelhantes (redu√ß√£o de cores) e gerar propostas de objetos de bordado. √â uma etapa preliminar fundamental na digitaliza√ß√£o assistida e autom√°tica.",
    "technicalDetails": "Analisa os valores RGB dos pixels. Em imagens com compress√£o JPG ou degrad√™s suaves, o algoritmo pode detectar centenas de varia√ß√µes de uma mesma cor devido ao antialiasing, exigindo redu√ß√£o pr√©via para uma paleta controlada de 3 a 8 cores de linha.",
    "construction": [
      "Algoritmo de leitura RGB / CMYK",
      "Tabela de redu√ß√£o de cores (Color Reduction Table)",
      "Agrupamento por toler√¢ncia crom√°tica",
      "Mapeamento com cat√°logos de linhas de bordado"
    ],
    "howItWorks": [
      "1. A imagem √© importada e o software analisa a quantidade de cores nos pixels.",
      "2. O usu√°rio define o n√∫mero m√°ximo de cores reais de linha desejadas.",
      "3. O software agrupa tons vizinhos e delimita os contornos de cada bloco de cor.",
      "4. Cada bloco de cor vira um objeto ou parada de troca de linha na m√°quina."
    ],
    "mainTypes": [
      "Detec√ß√£o Autom√°tica por Toler√¢ncia (Varredura de pixels)",
      "Redu√ß√£o Manual de Cores (Agrupamento orientado pelo usu√°rio)",
      "Mapeamento Autom√°tico com Paletas de Linhas Comerciais (Madeira, Isacord, Lumina, etc.)"
    ],
    "advantages": [
      "‚úî Agiliza imensamente a separa√ß√£o de camadas em desenhos multicoloridos",
      "‚úî Elimina pequenas varia√ß√µes de ru√≠do e sombras indesejadas de fotos",
      "‚úî Associa as cores da tela aos c√≥digos reais de cones de linha dispon√≠veis no ateli√™"
    ],
    "limitations": [
      "A detec√ß√£o autom√°tica de cores n√£o substitui o planejamento da sequ√™ncia de trocas de cor pelo digitalizador."
    ],
    "commonErrors": [
      "‚ùå Deixar o software detectar 30 varia√ß√µes de azul para uma imagem simples, gerando 30 trocas de linha na m√°quina.",
      "‚ùå Confundir a cor mostrada no monitor com a tonalidade f√≠sica exata do cone de linha.",
      "‚ùå Ignorar a ordem e sequ√™ncia das trocas de cor, fazendo a m√°quina trocar para a mesma linha v√°rias vezes."
    ],
    "voceSabia": "Uma foto de ma√ß√£ pode conter mais de 2.000 tons diferentes de vermelho na tela do computador, mas para bordar com perfei√ß√£o no ateli√™ voc√™ precisa apenas de 2 ou 3 tons de linha bem escolhidos!",
    "curiosidadeTecnica": "Quantidade de cores n√£o √© o mesmo que quantidade de trocas de linha: uma matriz com 3 cores pode exigir 8 trocas de linha se a sequ√™ncia de objetos for mal planejada!",
    "dicaArtrelados": "No bordado eletr√¥nico, nem toda cor que existe na imagem precisa virar um cone de linha! Antes de aceitar a detec√ß√£o autom√°tica, pergunte: 'Quais cores realmente s√£o necess√°rias para reconhecer o desenho?' O segredo √© simplificar com intelig√™ncia!",
    "applications": [
      "Prepara√ß√£o de logos, separa√ß√£o de matrizes infantis multicoloridas e convers√£o de ilustra√ß√µes."
    ],
    "troubleshootingTips": [
      "Se a matriz estiver exigindo muitas trocas de linha desnecess√°rias, use a ferramenta de 'Reordenar por Cores' (Color Sort) no software para agrupar todas as partes da mesma cor."
    ],
    "relatedTerms": [
      "Digitaliza√ß√£o Autom√°tica",
      "Matriz de Bordado",
      "Cores de Linha",
      "Sequ√™ncia de Pontos"
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
    "origin": "Do latim detectio, -onis (a√ß√£o de descobrir, desvendar, de detegere, tirar o teto/revelar) e do latim color, -oris (cor, matiz √≥ptico).",
    "beginnerExplanation": "Detec√ß√£o de cores √© a ferramenta do software que l√™ uma imagem e separa automaticamente quais s√£o as cores presentes nela. Ajuda a definir a ordem de troca de linha na m√°quina sem que voc√™ precise adivinhar as cores uma a uma.",
    "practicalExercise": "Importe uma imagem com 4 cores bem contrastantes para o seu software. Use a ferramenta de redu√ß√£o e detec√ß√£o de cores para limitar a paleta exatamente a 4 cores: repare como o programa remove automaticamente pequenas manchas e ru√≠dos de tons intermedi√°rios.",
    "quickSummary": "Detec√ß√£o de cores √© o recurso computacional de identifica√ß√£o e separa√ß√£o crom√°tica de elementos visuais para estrutura√ß√£o das paradas de m√°quina.",
    "bibliographicReferences": [
      "WILCOM. Color Palette Reduction & Automatic Color Classification. Sydney, 2022.",
      "BERNINA. Managing Thread Charts and Automatic Color Separation. Steckborn, 2023.",
      "ARTRELADOS. Como Padronizar Paletas de Cores de Linhas Nacionais no Software. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-040-distorcao-do-bordado",
    "code": "D-040",
    "term": "Distor√ß√£o do Bordado",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal feminina.",
    "category": "Solu√ß√£o de Problemas",
    "summary": "Altera√ß√£o de forma, propor√ß√£o ou alinhamento observada no tecido em rela√ß√£o ao desenho original previsto na matriz.",
    "definition": "A distor√ß√£o do bordado ocorre quando o desenho executado no tecido apresenta forma, propor√ß√µes ou encaixes diferentes daqueles visualizados no computador (por exemplo: um c√≠rculo que vira uma elipse oval, letras inclinadas ou v√£os entre o fundo e o contorno). A distor√ß√£o resulta do combate f√≠sico entre a tra√ß√£o da linha, a estabilidade da entretela, o bastidoramento e a elasticidade natural do tecido.",
    "technicalDetails": "Relaciona-se com o efeito mec√¢nico Push & Pull: os pontos puxam o tecido no sentido do √¢ngulo da linha (Pull) e expandem as laterais perpendiculares (Push). Quando a estabiliza√ß√£o √© insuficiente, a distor√ß√£o torna-se vis√≠vel.",
    "construction": [
      "Tra√ß√£o de encolhimento no sentido dos pontos",
      "Expans√£o nas bordas perpendiculares",
      "Deforma√ß√£o por tens√£o desbalanceada",
      "Movimenta√ß√£o do tecido dentro do aro do bastidor"
    ],
    "howItWorks": [
      "1. A agulha perfura o tecido e a linha exerce tra√ß√£o ao travar o n√≥.",
      "2. Milhares de pontos acumulam for√ßa puxando as fibras t√™xteis para o centro.",
      "3. Se a entretela n√£o segurar o tecido ou o bastidor estiver frouxo, a forma geom√©trica se deforma.",
      "4. Ao sair do bastidor, o tecido relaxa evidenciando a distor√ß√£o."
    ],
    "mainTypes": [
      "Distor√ß√£o por Repuxamento (Encolhimento paralelo ao ponto)",
      "Distor√ß√£o por Bastidoramento Excessivo (Tecido esticado artificialmente no aro)",
      "Distor√ß√£o por Deslocamento de Registro (Contorno fora do preenchimento)"
    ],
    "advantages": [
      "‚úî Compreender a distor√ß√£o permite aplicar compensa√ß√µes precisas na digitaliza√ß√£o"
    ],
    "limitations": [
      "Tentar corrigir distor√ß√µes apenas aumentando a densidade piora a deforma√ß√£o."
    ],
    "commonErrors": [
      "‚ùå Culpar imediatamente a matriz quando o problema foi o tecido frouxo no bastidor.",
      "‚ùå Esticar o tecido com for√ßa excessiva ao montar o bastidor (como uma pele de tambor esticada demais).",
      "‚ùå Bordar malhas el√°sticas usando entretela rasga-f√°cil em vez de entretela recorta-f√°cil."
    ],
    "voceSabia": "Se voc√™ esticar demais uma camiseta de malha ao fechar o bastidor, ela parecer√° linda enquanto estiver presa; mas assim que voc√™ abrir o aro, a malha encolher√° de volta e o bordado ficar√° totalmente enrugado!",
    "curiosidadeTecnica": "Distor√ß√£o refere-se √† perda de propor√ß√£o em rela√ß√£o ao projeto original; deforma√ß√£o refere-se √† altera√ß√£o f√≠sica e estrutural do tecido durante as for√ßas de costura.",
    "dicaArtrelados": "Quando o bordado se distorcer, n√£o procure um culpado: procure a causa! Compare a matriz com o bordado pronto e veja onde a forma come√ßou a mudar. Lembre-se da regra de ouro: a matriz √© criada na tela, mas o bordado acontece no tecido! Observe sempre os dois!",
    "applications": [
      "Diagn√≥stico e corre√ß√£o de matrizes com problemas de encaixe, formas ovais e repuxamento."
    ],
    "troubleshootingTips": [
      "Se formas circulares estiverem saindo ovais, aumente a Compensa√ß√£o de Repuxo (Pull Compensation) no software para 0.40mm e use entretela mais encorpada."
    ],
    "relatedTerms": [
      "Deforma√ß√£o do Bordado",
      "Compensa√ß√£o de Pux√£o",
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
    "origin": "Do latim distortio, -onis (a√ß√£o de torcer, deformar a forma original, de distorquere, torcer para os lados) e do √°rabe al-burdƒÅ (bordado).",
    "beginnerExplanation": "Distor√ß√£o do bordado √© quando o desenho sai deformado no tecido: um c√≠rculo perfeito que vira um ovo achatado, um quadrado que vira losango ou contornos que saem fora da figura. Isso acontece porque a linha puxa o tecido enquanto costura!",
    "practicalExercise": "Borde um c√≠rculo perfeito de 5cm em uma malha com entretela fraca e frouxa no bastidor. Ao tirar da m√°quina, me√ßa o c√≠rculo na vertical e na horizontal com uma r√©gua: veja como ele ficou menor no sentido dos pontos (encolheu) e maior no sentido oposto (esticou). Esse √© o efeito cl√°ssico de distor√ß√£o!",
    "quickSummary": "Distor√ß√£o do bordado √© a altera√ß√£o geom√©trica indesejada da forma original causada pelas for√ßas de repuxamento e compress√£o da linha sobre o tecido.",
    "bibliographicReferences": [
      "KRAUSZ, P. Push and Pull Dynamics in Machine Embroidery. New York: Textile Press, 2021.",
      "TAJIMA. Fabric Distortion Control and Mechanical Stability. Nagoya, 2022.",
      "ARTRELADOS. Guia Definitivo contra Deforma√ß√µes e Repuxo no Bordado. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-041-definicao-do-bordado",
    "code": "D-041",
    "term": "Defini√ß√£o do Bordado",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal feminina.",
    "category": "Qualidade do Bordado",
    "summary": "Grau de nitidez, clareza e precis√£o com que contornos, letras e detalhes da matriz s√£o reproduzidos no tecido.",
    "definition": "A defini√ß√£o do bordado √© a qualidade com que os elementos de uma matriz s√£o reproduzidos fisicamente no tecido, permitindo que contornos, letras, detalhes finos, curvas e formas sejam percebidos com clareza, nitidez e organiza√ß√£o. Um bordado com excelente defini√ß√£o mant√©m a identidade da arte, preserva os espa√ßos internos vazios e apresenta bordas limpas e bem delimitadas.",
    "technicalDetails": "Resultado da harmonia entre a digitaliza√ß√£o precisa, escolha do tipo de ponto correto (Satin para tra√ßos finos vs Tatami para √°reas largas), comprimento de ponto equilibrado, underlay adequado, espessura da linha e estabilidade do tecido.",
    "construction": [
      "Bordas de contorno n√≠tidas e cravadas",
      "Espa√ßos internos de letras preservados (v√£os do 'A', 'O', 'e')",
      "Comprimento de ponto proporcional √†s curvas",
      "Camada de underlay que sustenta o topo"
    ],
    "howItWorks": [
      "1. O digitalizador projeta os objetos com largura m√≠nima segura (m√≠nimo 1.0mm para Satin).",
      "2. A agulha perfura o tecido com alinhamento preciso sem mastigar os fios.",
      "3. O ponto de cobertura assenta perfeitamente sobre a base de underlay.",
      "4. O desenho final apresenta leitura imediata e visual de alto padr√£o."
    ],
    "mainTypes": [
      "Defini√ß√£o de Tipografia e Letras (Legibilidade total de monogramas)",
      "Defini√ß√£o de Contornos (Encaixe milim√©trico de bordas)",
      "Defini√ß√£o em Tecidos Texturizados (Com uso de filme sol√∫vel superior)"
    ],
    "advantages": [
      "‚úî Agrega alt√≠ssimo valor percebido e padr√£o profissional ao produto final",
      "‚úî Garante a satisfa√ß√£o imediata de clientes exigentes e marcas corporativas",
      "‚úî Mant√©m o bordado impec√°vel mesmo ap√≥s dezenas de lavagens"
    ],
    "limitations": [
      "Tecidos com textura grossa (piqu√™ pesado, toalhas felpudas) exigem filme pl√°stico hidrossol√∫vel por cima para n√£o engolir a defini√ß√£o dos pontos."
    ],
    "commonErrors": [
      "‚ùå Achar que para deixar o bordado mais definido basta aumentar a densidade (o excesso esconde os detalhes).",
      "‚ùå Bordar letras min√∫sculas em ponto Tatami em vez de ponto Satin.",
      "‚ùå Tentar manter todos os microdetalhes de uma arte complexa em tamanhos reduzidos."
    ],
    "voceSabia": "Em uma pequena letra 'A' bordada, colocar pontos demais fecha o tri√¢ngulo central da letra, fazendo com que ela perca totalmente a defini√ß√£o e vire uma mancha s√≥lida!",
    "curiosidadeTecnica": "A defini√ß√£o de um bordado √© an√°loga √† resolu√ß√£o √≥ptica: enquanto na tela do computador ela depende de pixels, no tecido ela depende da rela√ß√£o entre o calibre da agulha, o di√¢metro da linha e a trama do tecido.",
    "dicaArtrelados": "Defini√ß√£o n√£o √© colocar mais pontos: √© fazer com que cada ponto trabalhe a favor do desenho! Quando um detalhe estiver pequeno demais para funcionar, simplifique. O melhor detalhe √© aquele que continua perfeitamente vis√≠vel depois que o bordado sai da tela e chega ao tecido!",
    "applications": [
      "Controle de qualidade de monogramas, jalecos, crach√°s bordados e pe√ßas de enxoval fino."
    ],
    "troubleshootingTips": [
      "Em toalhas de banho e veludo, use sempre uma folha de pl√°stico hidrossol√∫vel por cima do tecido para que os pontos n√£o afundem na felpa, garantindo 100% de defini√ß√£o."
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
    "origin": "Do latim definitio, -onis (delimita√ß√£o precisa de contornos, de definire, estabelecer os limites de algo, de finis, fronteira/limite).",
    "beginnerExplanation": "Defini√ß√£o do bordado √© o grau de nitidez, clareza e limpeza visual do bordado pronto: letras que voc√™ consegue ler de longe sem esfor√ßo, bicos de estrelas afiados e contornos perfeitamente alinhados sem fiapos soltos.",
    "practicalExercise": "Borde a mesma palavra com letras de 6mm em duas situa√ß√µes: 1) com agulha 75/11 gasta e tens√£o frouxa; 2) com agulha 70/10 nova ponta fina, linha de qualidade e entretela firme. Coloque as duas pe√ßas lado a lado e compare a nitidez das letras: essa √© a diferen√ßa de uma alta defini√ß√£o!",
    "quickSummary": "Defini√ß√£o do bordado √© o padr√£o de nitidez, precis√£o de contornos e legibilidade dos detalhes alcan√ßado na pe√ßa executada.",
    "bibliographicReferences": [
      "SCHMETZ. Needle Sharpness and Edge Definition in Automated Stitching. Germany, 2022.",
      "MADEIRA. Achieving Crisp Lettering and High Definition in Embroidery. Freiburg, 2023.",
      "ARTRELADOS. Como Atingir Nitidez M√°xima em Nomes e Detalhes Pequenos. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-042-deformacao-do-bordado",
    "code": "D-042",
    "term": "Deforma√ß√£o do Bordado",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal feminina.",
    "category": "Solu√ß√£o de Problemas",
    "summary": "Altera√ß√£o f√≠sica e estrutural do tecido ou do desenho causada pelas for√ßas din√¢micas da costura.",
    "definition": "A deforma√ß√£o do bordado ocorre quando o desenho executado no tecido perde, total ou parcialmente, sua forma, estabilidade ou propor√ß√µes originais devido √† rea√ß√£o f√≠sica das fibras t√™xteis durante a costura. Isso acontece quando as for√ßas de tra√ß√£o exercidas pela linha e pelo impacto da agulha superam a capacidade de sustenta√ß√£o do tecido e da entretela, gerando franzimento, ondula√ß√µes e repuxamento.",
    "technicalDetails": "Diferencia-se da distor√ß√£o puramente geom√©trica por focar na altera√ß√£o f√≠sica e mec√¢nica do substrato t√™xtil (rugas, ondas, enrugamento ao redor do aro e encolhimento p√≥s-bastidor).",
    "construction": [
      "For√ßa de tra√ß√£o acumulada nas fibras",
      "Fadiga mec√¢nica do tecido por perfura√ß√µes sucessivas",
      "Instabilidade de entretelamento",
      "Tens√£o desbalanceada entre linha superior e inferior"
    ],
    "howItWorks": [
      "1. A m√°quina executa milhares de perfura√ß√µes com linha tracionada.",
      "2. O tecido flex√≠vel √© puxado em dire√ß√£o ao centro do bordado.",
      "3. Se a entretela for fraca ou o bastidoramento inadequado, formam-se ondas e rugas.",
      "4. Ao retirar o bastidor, o tecido relaxa de forma irregular mantendo a deforma√ß√£o."
    ],
    "mainTypes": [
      "Deforma√ß√£o por Elasticidade (Comum em tecidos com elastano / malhas)",
      "Deforma√ß√£o por Densidade Excessiva (Tecido endurecido e empurrado)",
      "Deforma√ß√£o P√≥s-Bastidor (Surge logo ap√≥s soltar a pe√ßa do aro)"
    ],
    "advantages": [
      "‚úî Identificar a mec√¢nica da deforma√ß√£o orienta a escolha correta do conjunto entretela + bastidor"
    ],
    "limitations": [
      "Deforma√ß√µes graves com ruptura de fibras t√™xteis s√£o permanentes e irrecuper√°veis na pe√ßa."
    ],
    "commonErrors": [
      "‚ùå Esticar a malha ao m√°ximo no bastidor tentando deix√°-la esticada como um tambor.",
      "‚ùå Aumentar a densidade na tentativa de cobrir rugas causadas por falta de entretela.",
      "‚ùå Culpar a m√°quina de bordar antes de checar a gramatura do estabilizador."
    ],
    "voceSabia": "Em tecidos delicados ou com elastano, o bastidor deve apenas APOIAR e ESTABILIZAR o tecido, nunca estic√°-lo! Esticar a pe√ßa no bastidor √© a causa n√∫mero 1 de deforma√ß√µes no ateli√™!",
    "curiosidadeTecnica": "A regra de ouro da estabilidade estabelece: Matriz correta + tecido adequado + estabiliza√ß√£o correta + bastidoramento adequado = zero deforma√ß√£o.",
    "dicaArtrelados": "O tecido tamb√©m participa ativamente da constru√ß√£o do bordado! N√£o adianta ter uma matriz perfeita se o tecido estiver mal estabilizado ou esticado incorretamente. Quando aparecer uma deforma√ß√£o, descubra por que o tecido se moveu antes de alterar o arquivo!",
    "applications": [
      "Bordados em malha, viscolycra, tecidos finos de seda, cetim e pe√ßas esportivas."
    ],
    "troubleshootingTips": [
      "Ao bordar tecidos el√°sticos, use entretela de malha ou recorta-f√°cil de 200g/m¬≤ e aplique spray adesivo tempor√°rio para fixar o tecido sem estic√°-lo."
    ],
    "relatedTerms": [
      "Distor√ß√£o do Bordado",
      "Bastidoramento",
      "Estabilizador",
      "Compensa√ß√£o de Pux√£o"
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
    "origin": "Do latim deformatio, -onis (a√ß√£o de desfigurar, alterar a forma correta, de deformare, tirar a forma bela).",
    "beginnerExplanation": "Deforma√ß√£o do bordado √© quando a pe√ßa de roupa fica franzida, enrugada ou com ondas feias ao redor do desenho depois de bordada. Acontece quando esticamos a camiseta com muita for√ßa ao prender no bastidor ou quando usamos entretela inadequada.",
    "practicalExercise": "Pegue um peda√ßo de malha e estique-o com as m√£os com muita for√ßa ao fechar o parafuso do bastidor. Borde um desenho denso e depois retire do bastidor: veja como a malha encolhe de volta e forma um monte de ondas e rugas ao redor do bordado. Repita sem esticar a malha e veja a diferen√ßa!",
    "quickSummary": "Deforma√ß√£o do bordado √© o enrugamento ou ondulamento estrutural do tecido ao redor da √°rea bordada gerado por bastidoramento incorreto ou estabiliza√ß√£o insuficiente.",
    "bibliographicReferences": [
      "COATS INDUSTRIAL. Puckering and Fabric Deformation: Root Causes & Solutions. London, 2022.",
      "GUNOLD. Hooping Techniques to Prevent Garment Distortion. Stockstadt, 2021.",
      "ARTRELADOS. O Bastidoramento Correto: Como Evitar Franzimentos em Malhas. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-043-defeito-de-bordado",
    "code": "D-043",
    "term": "Defeito de Bordado",
    "level": "Iniciante üü¢",
    "grammarClass": "Locu√ß√£o nominal masculina.",
    "category": "Solu√ß√£o de Problemas",
    "summary": "Guia completo de diagn√≥stico e solu√ß√£o para qualquer falha, irregularidade ou resultado indesejado na produ√ß√£o.",
    "definition": "Um defeito de bordado √© qualquer altera√ß√£o, falha mec√¢nica, imperfei√ß√£o visual ou irregularidade estrutural que comprometa a apar√™ncia, a qualidade, a durabilidade ou o acabamento esperado de uma pe√ßa bordada. O defeito pode ter origem na matriz digital, na prepara√ß√£o do tecido, na estabiliza√ß√£o, na escolha da agulha e linha, na calibra√ß√£o de tens√£o ou na mec√¢nica da m√°quina de bordar.",
    "technicalDetails": "Exige metodologia de diagn√≥stico investigativo: isolar vari√°veis uma a uma (agulha ‚Üí linha ‚Üí tens√£o ‚Üí entretela ‚Üí bastidor ‚Üí matriz) para descobrir a causa raiz sem trocar m√∫ltiplos par√¢metros simultaneamente.",
    "construction": [
      "An√°lise do aspecto visual frontal",
      "Inspe√ß√£o t√©cnica do verso do bordado (1/3 de bobina)",
      "Verifica√ß√£o da forma√ß√£o de la√ßadas e n√≥s",
      "Auditoria da matriz e condi√ß√µes da m√°quina"
    ],
    "howItWorks": [
      "1. A bordadeira observa o defeito no tecido (frente e verso).",
      "2. Identifica em que momento da costura a falha come√ßou.",
      "3. Formula hip√≥teses (agulha com rebarba, tens√£o frouxa, entretela inadequada).",
      "4. Realiza testes controlados alterando UMA vari√°vel por vez at√© solucionar."
    ],
    "mainTypes": [
      "Defeitos de Linha & Tens√£o (Quebras, linha da bobina subindo, la√ßos frouxos)",
      "Defeitos de Cobertura (Tecido aparente, preenchimento ralo)",
      "Defeitos de Registro & Geometria (Contornos desalinhados, formas ovais)",
      "Defeitos de Acabamento (Marcas de bastidor, fiapos soltos, n√≥s duros)"
    ],
    "advantages": [
      "‚úî Desenvolve autonomia e racioc√≠nio t√©cnico avan√ßado na bordadeira",
      "‚úî Reduz drasticamente o desperd√≠cio de pe√ßas caras e tempo de retrabalho",
      "‚úî Garante padr√£o de qualidade consistente e profissional no ateli√™"
    ],
    "limitations": [
      "Continuar bordando com a m√°quina apresentando ru√≠dos estranhos ou quebras repetitivas pode danificar a lan√ßadeira ou a barra de agulha."
    ],
    "commonErrors": [
      "‚ùå Culpar a m√°quina imediatamente sem verificar a passagem de linha ou o estado da agulha.",
      "‚ùå Alterar dez configura√ß√µes ao mesmo tempo sem descobrir a causa real do problema.",
      "‚ùå Olhar apenas para a frente do bordado e nunca inspecionar o avesso.",
      "‚ùå Continuar a produ√ß√£o quando a m√°quina est√° quebrando linha a cada 100 pontos."
    ],
    "voceSabia": "O avesso do bordado conta a verdadeira hist√≥ria do que aconteceu: olhar a propor√ß√£o de 1/3 da linha de bobina no verso revela instantaneamente se o problema era tens√£o superior ou inferior!",
    "curiosidadeTecnica": "Crie um 'caderno de ocorr√™ncias do ateli√™': fotografe a frente, o verso e anote a solu√ß√£o encontrada para cada defeito resolvido. Com o tempo, voc√™ ter√° seu pr√≥prio manual de maestria em bordado.",
    "dicaArtrelados": "N√£o tente corrigir um defeito antes de descobrir sua causa real! Siga sempre a regra de ouro do DIBE: Observar ‚Üí Investigar ‚Üí Identificar ‚Üí Corrigir ‚Üí Testar. Assim, cada problema superado deixa de ser uma frustra√ß√£o e se torna um degrau na sua evolu√ß√£o profissional!",
    "applications": [
      "Solu√ß√£o de problemas em ateli√™s, manuten√ß√£o preventiva, controle de qualidade e treinamento."
    ],
    "troubleshootingTips": [
      "Em caso de falha persistente, substitua a agulha por uma nova e repasse toda a linha superior do zero com o p√©-calcador levantado."
    ],
    "relatedTerms": [
      "Defini√ß√£o do Bordado",
      "Deforma√ß√£o do Bordado",
      "Ajuste de Tens√£o",
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
    "origin": "Do latim defectus, -us (falta, imperfei√ß√£o, fraqueza, falha mec√¢nica, de deficere, faltar/falhar) e do √°rabe al-burdƒÅ (bordado).",
    "beginnerExplanation": "Defeito de bordado √© qualquer coisa que d√™ errado na produ√ß√£o: linha de cima quebrando, linha branca da bobina aparecendo por cima, pano furado, contorno torto ou n√≥ embaixo do tecido. Cada defeito tem uma causa clara e pode ser resolvido com m√©todo!",
    "practicalExercise": "Crie o 'Caderno de Casos do Ateli√™': sempre que acontecer um defeito (linha arrebentando, bobina subindo, etc.), fotografe a frente e o verso da pe√ßa, anote qual era o tecido, qual era a agulha e como voc√™ conseguiu resolver. Em poucas semanas voc√™ ter√° seu pr√≥prio manual de solu√ß√µes r√°pidas!",
    "quickSummary": "Defeito de bordado √© qualquer anomalia visual, mec√¢nica ou estrutural no produto bordado, corrig√≠vel atrav√©s do diagn√≥stico met√≥dico das vari√°veis de produ√ß√£o.",
    "bibliographicReferences": [
      "MADEIRA. Complete Embroidery Troubleshooting Guide: From Cause to Cure. Freiburg, 2023.",
      "BARUDAN. Technical Troubleshooting Manual for Commercial Embroidery. Tokyo, 2022.",
      "ARTRELADOS. Manual Mestre de Diagn√≥stico e Solu√ß√£o de Defeitos no Bordado. S√£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-044-discos-de-tensao",
    "code": "D-044",
    "term": "Discos de Tens√£o (Tension Discs)",
    "level": "Fundamental üü¢",
    "category": "Componentes da M√°quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim discus (disco plano circular) e tensio, -onis (ato de esticar, esfor√ßo de tra√ß√£o). Mecanismo de frenagem mec√¢nica por atrito cont√≠nuo desenvolvido na primeira Revolu√ß√£o Industrial t√™xtil.",
    "summary": "Par de pratos c√¥ncavos met√°licos prensados por mola helicoidal que aplica resist√™ncia e calibra o fluxo da linha superior.",
    "definition": "Os discos de tens√£o s√£o dois pratos met√°licos espelhados, de formato c√¥ncavo-convexo montados face a face sobre um eixo no cabe√ßote da m√°quina de bordar. Pressionados por uma mola helicoidal calibrada por um bot√£o girat√≥rio microm√©trico ou solenoide eletr√¥nico, eles exercem uma for√ßa de compress√£o controlada sobre a linha superior conforme ela desliza entre eles, garantindo que o fio chegue √† agulha com a resist√™ncia exata para a forma√ß√£o de pontos firmes e sem la√ßadas.",
    "technicalDetails": "Fabricados em a√ßo inoxid√°vel retificado ou com revestimento cer√¢mico antiaderente. A for√ßa de aperto varia de 80gf a 150gf para linhas de poli√©ster 120/40wt. Inclui pino central de libera√ß√£o que afasta os discos automaticamente quando o calcador √© levantado.",
    "howItWorks": [
      "1. A linha superior desce da barra guia e √© inserida no v√£o entre os dois pratos met√°licos espelhados.",
      "2. A mola helicoidal aplica press√£o radial constante sobre a face externa do disco m√≥vel.",
      "3. O atrito de contato freia suavemente o desenrolar do fio, gerando a tens√£o din√¢mica necess√°ria.",
      "4. Ao girar o dial num√©rico (ou ajustar o valor digital no painel), a mola √© mais comprimida (tens√£o maior) ou aliviada (tens√£o menor)."
    ],
    "beginnerExplanation": "S√£o dois pratinhos de metal brilhantes que ficam escondidos dentro da m√°quina e funcionam como um 'freio' para a linha. Eles seguram a linha nem muito apertada nem muito frouxa, garantindo que o bordado fique perfeito na frente e no avesso.",
    "applications": [
      "Regulagem de tens√£o para linhas comuns de poli√©ster e viscose",
      "Calibra√ß√£o suave para fios fr√°geis (linhas met√°licas e filamentos de seda)",
      "Ajuste de equil√≠brio entre linha superior e linha da bobina (regra de 1/3 no avesso)",
      "Compensa√ß√£o de atrito em altas velocidades de produ√ß√£o (800 a 1000 PPM)"
    ],
    "commonErrors": [
      "Passar a linha com o calcador abaixado em m√°quinas dom√©sticas, fazendo a linha n√£o entrar dentro dos discos e ficar totalmente solta",
      "Deixar fiapos de linha e restos de cola acumulados entre os discos, impedindo que os pratos fechem e gerando ninhos de linha gigantes por baixo da pe√ßa",
      "Apertar o bot√£o de tens√£o at√© o limite m√°ximo, arrebentando a linha a cada 20 pontos e franzindo o tecido"
    ],
    "troubleshootingTips": [
      "Sempre passe a linha com o calcador totalmente LEVANTADO para que os discos estejam abertos para receber o fio",
      "Limpe os discos passando um peda√ßo de linha grossa dobrada ou um fio dental sem cera entre os pratos para remover penugens",
      "Ao passar a linha, puxe-a com as duas m√£os para frente e para tr√°s at√© sentir o clique e a resist√™ncia firme de encaixe"
    ],
    "dicaArtrelados": "Para saber se a linha entrou de verdade dentro dos discos de tens√£o na sua m√°quina dom√©stica, segure a linha perto do cone e puxe pela ponta da agulha: com o calcador levantado, a linha deve correr soltinha; quando voc√™ abaixa a alavanca do calcador, a linha precisa ficar pesada e firme na hora!",
    "voceSabia": "Nas m√°quinas industriais modernas multicabe√ßas mais avan√ßadas, os tradicionais discos de tens√£o acionados por mola foram substitu√≠dos por tensores digitais comandados por servomotores magn√©ticos, que recalculam a press√£o dos discos ponto a ponto de acordo com o sentido do bordado.",
    "practicalExercise": "Com a m√°quina desligada e calcador levantado, passe a linha no cabe√ßote. Abaixe o calcador e puxe a linha na ponta da agulha para sentir a resist√™ncia: gire o bot√£o de tens√£o do n√∫mero 4 para o n√∫mero 2 e puxe novamente para sentir a linha mais leve; gire para o n√∫mero 6 e sinta o fio mais pesado. Volte para a regulagem padr√£o (3.5 a 4.0)!",
    "quickSummary": "Dispositivo mec√¢nico de pratos met√°licos c√¥ncavos acionados por mola que regula a resist√™ncia e a tra√ß√£o da linha superior.",
    "relatedTerms": [
      "Controle de Tens√£o da Linha",
      "Barra de Tens√£o dos Fios",
      "Brilho da Linha",
      "Bobbin Thread (Linha da Bobina)"
    ],
    "tags": [
      "discos de tens√£o",
      "tens√£o",
      "regulagem",
      "cabe√ßote",
      "mec√¢nica",
      "linha superior"
    ],
    "bibliographicReferences": [
      "BROTHER. Upper Thread Tension Disc Assembly & Calibration Manual. Nagoya: Brother, 2022.",
      "TAJIMA. Tension Disc Maintenance, Cleaning and Gram-Force Gauging. Nagoya, 2023.",
      "ARTRELADOS. O Segredo dos Discos de Tens√£o: Como Evitar La√ßadas e Ninhos no Avesso. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-045-desfiador-de-bordado",
    "code": "D-045",
    "term": "Desfiador de Bordado / Desmanchador de Pontos (Seam Ripper / Stitch Eraser)",
    "level": "Fundamental üü¢",
    "category": "Acess√≥rios e Ferramentas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dis- + filum (desfazer os fios tecidos) e do ingl√™s stitch eraser (apagador el√©trico de pontos). Ferramenta manual e el√©trica indispens√°vel de socorro em oficinas de bordado.",
    "summary": "Ferramenta manual ou eletromec√¢nica de corte de precis√£o utilizada para cortar e remover pontos de bordado sem danificar o tecido base.",
    "definition": "O desfiador de bordado (desmanchador de pontos ou 'apagador de bordado' / stitch eraser) √© uma ferramenta manual dotada de ponta afiada e esfera de prote√ß√£o, ou um aparelho el√©trico com micr√≥l√¢minas oscilantes em a√ßo inoxid√°vel, desenvolvido para cortar cirurgicamente a linha inferior da bobina no avesso da pe√ßa, permitindo a extra√ß√£o r√°pida dos pontos da frente sem cortar a trama do tecido e sem furar a roupa.",
    "technicalDetails": "Vers√µes manuais: a√ßo temperado com ponta fina curvada de 0.5mm e microesfera pl√°stica vermelha de prote√ß√£o. Vers√µes el√©tricas (Stitch Eraser): motor rotativo de 6.000 RPM com l√¢mina de precis√£o de 10mm a 15mm de largura, alimentado por bateria recarreg√°vel.",
    "howItWorks": [
      "1. A pe√ßa a ser corrigida √© virada com o avesso voltado para cima sobre uma superf√≠cie plana e r√≠gida.",
      "2. A l√¢mina do desfiador √© passada suavemente apenas sobre os pontos brancos da linha da bobina.",
      "3. Uma vez cortadas as la√ßadas inferiores, vira-se a pe√ßa para a frente.",
      "4. Com uma pin√ßa de ateli√™ ou fita adesiva larga, puxam-se as linhas superiores da frente, que saem inteiras e sem esfor√ßo."
    ],
    "beginnerExplanation": "√â a ferramenta 'salva-vidas' do ateli√™ para quando a gente borda um nome com letra errada ou erra a cor da linha. Ela corta os pontinhos pelo lado de tr√°s da roupa com muito cuidado para voc√™ tirar as linhas sem rasgar o tecido e sem furar a pe√ßa do cliente.",
    "applications": [
      "Remo√ß√£o de nomes ou logotipos bordados com erro de digita√ß√£o",
      "Elimina√ß√£o de ninhos de linha embolados por baixo da chapa de agulha",
      "Desmanche de monogramas antigos para reaproveitamento de uniformes",
      "Corre√ß√£o de detalhes desalinhados em matrizes de alta densidade"
    ],
    "commonErrors": [
      "Tentar desmanchar o bordado cortando os pontos pela frente, picotando o tecido e abrindo buracos irrepar√°veis na roupa",
      "Apertar o desmanchador el√©trico com for√ßa excessiva contra o tecido em vez de deslizar suavemente sobre as linhas",
      "Puxar fios teimosos na for√ßa bruta sem antes cortar as la√ßadas no avesso, repuxando a trama da camisa"
    ],
    "troubleshootingTips": [
      "Sempre desmanche pelo AVESSO da pe√ßa cortando unicamente as linhas da bobina",
      "Mantenha o tecido bem esticado com as m√£os ou preso levemente em um bastidor enquanto passa a l√¢mina",
      "Depois de retirar as linhas, passe o ferro a vapor com um paninho por cima para fechar os furinhos deixados pela agulha"
    ],
    "dicaArtrelados": "Para tirar qualquer bordado em 2 minutos sem sofrimento: vire a pe√ßa pelo avesso, passe o desfiador el√©trico ou a l√¢mina manual apenas na linha branca da bobina. Depois, pegue um peda√ßo de fita crepe larga, cole por cima da frente do bordado e puxe: todos os fios coloridos saem colados na fita como m√°gica!",
    "voceSabia": "O desmanchador de costura cl√°ssico de metal com uma bolinha vermelha na ponta foi patenteado em 1883. A bolinha vermelha serve exatamente para ficar virada para baixo encostada no tecido, deslizando suavemente para impedir que a ponta afiada fure ou rasgue o pano!",
    "practicalExercise": "Pegue um retalho com uma letra bordada de teste: vire o retalho pelo avesso e, com o desmanchador de pontos, corte cuidadosamente as la√ßadas da linha da bobina. Vire para a frente, passe uma escovinha ou fita adesiva e veja como as linhas superiores se soltam perfeitamente sem danificar o tecido!",
    "quickSummary": "Instrumento manual ou el√©trico de corte de precis√£o projetado para seccionar as la√ßadas do avesso e desmanchar bordados com seguran√ßa.",
    "relatedTerms": [
      "Bobbin Thread (Linha da Bobina)",
      "Defeito de Bordado",
      "Corre√ß√£o de Pontos",
      "Pin√ßa de Ateli√™"
    ],
    "tags": [
      "desfiador",
      "desmanchador",
      "stitch eraser",
      "ferramentas",
      "corre√ß√£o",
      "avesso"
    ],
    "bibliographicReferences": [
      "PEGGY'S STITCH ERASER. Commercial Embroidery Removal & Fabric Recovery Manual. California, 2022.",
      "KRAUSZ, P. Repair, Stitch Removal and Garment Salvage in Industrial Embroidery. New York, 2021.",
      "ARTRELADOS. Como Desmanchar Bordados em Minutos Sem Rasgar o Tecido: O Passo a Passo Definitivo. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-046-dinamica-da-lacada",
    "code": "D-046",
    "term": "Din√¢mica da La√ßada / La√ßada da Agulha (Loop Formation Dynamics)",
    "level": "Avan√ßado üî¥",
    "category": "Terminologia Geral",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego dynamik√≥s (relativo √† for√ßa e movimento mec√¢nico) e do latim laqueus (la√ßo, n√≥ corredio). Teoria cinem√°tica e tribol√≥gica da forma√ß√£o do ponto tipo 301 (Lockstitch).",
    "summary": "Fen√¥meno cinem√°tico de expans√£o da folga da linha superior na subida da agulha para captura precisa pela ponta da lan√ßadeira.",
    "definition": "A din√¢mica da la√ßada √© o fen√¥meno f√≠sico-mec√¢nico que ocorre no ponto morto inferior do ciclo de costura: ap√≥s a agulha atingir a profundidade m√°xima e iniciar sua subida (recuo de 1.5mm a 2.5mm), o atrito da linha com o tecido retarda o movimento do fio, fazendo com que a linha superior se descole da cava da agulha e se expanda lateralmente em forma de arco (la√ßada ou loop), permitindo que a ponta afiada da lan√ßadeira rotativa passe por dentro desse arco e entrelace a linha da bobina.",
    "technicalDetails": "Altura de recuo cr√≠tico: 1.8mm a 2.2mm a partir do Ponto Morto Inferior (PMI). A folga entre a ponta da lan√ßadeira e a cava da agulha no instante da captura da la√ßada deve ser calibrada entre 0.05mm e 0.10mm (espessura de uma folha de papel).",
    "howItWorks": [
      "1. A agulha desce com a linha superior atravessando o tecido, a entretela e o furo da chapa de agulha.",
      "2. No ponto mais baixo, a linha fica esticada rente √† canaleta longa da agulha.",
      "3. A barra de agulha sobe 2mm; a in√©rcia e o atrito com o tecido impedem que a linha suba na mesma velocidade.",
      "4. O excesso de linha projeta-se para fora da cava traseira da agulha, formando um la√ßo oval aberto.",
      "5. A ponta da lan√ßadeira rotativa entra exatamente no centro desse la√ßo, conduzindo a linha superior ao redor da caixa de bobina."
    ],
    "beginnerExplanation": "√â a m√°gica que acontece embaixo da m√°quina: quando a agulha fura o pano e come√ßa a subir um pouquinho, a linha faz uma 'barriguinha' (um la√ßo). A ponta afiada da lan√ßadeira passa por dentro desse la√ßo num piscar de olhos e d√° o n√≥ com a linha de baixo.",
    "applications": [
      "Sincronismo mec√¢nico entre barra de agulha e lan√ßadeira rotativa",
      "Diagn√≥stico avan√ßado de falhas de ponto (pontos pulados / skipped stitches)",
      "Escolha correta da cava da agulha para linhas grossas ou met√°licas",
      "Regulagem de m√°quinas industriais operando em alt√≠ssima velocidade (1200 PPM)"
    ],
    "commonErrors": [
      "Colocar a agulha com a cava virada para o lado errado, impedindo a forma√ß√£o da la√ßada e fazendo a m√°quina pular todos os pontos",
      "Bordar sem entretela em malhas, fazendo o tecido subir junto com a agulha (flagging) e destruindo a abertura da la√ßada",
      "Lan√ßadeira com folga excessiva (mais de 0.20mm de dist√¢ncia da agulha), passando por fora da la√ßada sem la√ßar o ponto"
    ],
    "troubleshootingTips": [
      "Se a m√°quina estiver pulando pontos, verifique se a agulha est√° colocada com a cava virada exatamente para tr√°s ou para o lado da lan√ßadeira",
      "Utilize agulhas novas com geometria de canaleta profunda (como Schmetz Embroidery ou Groz-Beckert DBxK5)",
      "Garanta que o tecido esteja perfeitamente estabilizado no bastidor para evitar que ele oscile verticalmente"
    ],
    "dicaArtrelados": "A maior inimiga da la√ßada perfeita √© a entretela fraca ou o bastidor frouxo! Quando o tecido fica frouxo, ele sobe junto com a agulha e a la√ßada n√£o abre embaixo da chapa: o resultado s√£o pontos pulados e linhas desfiadas. Mantenha o tecido esticado como um tambor!",
    "voceSabia": "Em uma m√°quina de bordar funcionando a 1.000 pontos por minuto, o ciclo completo de descida da agulha, forma√ß√£o da la√ßada, captura pela lan√ßadeira e aperto pelo estica-fio ocorre em apenas 60 milissegundos (0,06 segundos)!",
    "practicalExercise": "Com a tampa da lan√ßadeira aberta e a m√°quina desligada, gire o volante manualmente devagar: observe a agulha descer at√© o fundo e come√ßar a subir. Veja com seus pr√≥prios olhos a 'barriguinha' de linha se abrir do lado da cava e a ponta da lan√ßadeira entrar perfeitamente dentro dela!",
    "quickSummary": "Processo cinem√°tico de expans√£o da folga da linha superior no recuo da agulha para permitir a captura precisa pela lan√ßadeira.",
    "relatedTerms": [
      "Canoa da Bobina",
      "Barra de Agulha",
      "Agulha de Bordado",
      "Ponto de Bordado"
    ],
    "tags": [
      "la√ßada",
      "lan√ßadeira",
      "sincronismo",
      "mec√¢nica",
      "ponto 301",
      "cinem√°tica"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT. Loop Formation and Thread Dynamics in Industrial Machine Embroidery. Albstadt, 2022.",
      "SCHMETZ. The Anatomy of Lockstitch Formation: Timing, Clearance & Needle Deflection. Alsdorf, 2023.",
      "ARTRELADOS. Mec√¢nica da La√ßada Perfeita: Por Que a M√°quina Pula Pontos e Como Resolver. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-047-divisao-de-matriz",
    "code": "D-047",
    "term": "Divis√£o de Matriz / Multiposicionamento (Design Splitting & Multi-Hooping)",
    "level": "Avan√ßado üî¥",
    "category": "Programa√ß√£o de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim divisio, -onis (ato de repartir, separar em partes) e matrix, -icis (molde gerador). T√©cnica computacional criada para superar as limita√ß√µes f√≠sicas de campo √∫til dos bastidores.",
    "summary": "T√©cnica de fragmenta√ß√£o de matrizes gigantes em se√ß√µes sequenciais com marcas de registro para bordados que excedem o tamanho do bastidor.",
    "definition": "A divis√£o de matriz (ou t√©cnica de multiposicionamento / design splitting) √© o m√©todo avan√ßado de engenharia de digitaliza√ß√£o que consiste em particionar um desenho de grandes dimens√µes em duas ou mais se√ß√µes menores interligadas, inserindo cruzetas de alinhamento e pontos de registro precisos para que cada parte seja bordada sucessivamente em m√∫ltiplos bastidoramentos no tecido sem desencontros vis√≠veis.",
    "technicalDetails": "Executada atrav√©s de ferramentas de linha de corte de divis√£o (Multi-Hoop Tool). Insere pontos de registro (Alignment Crosshairs/Marks) de 3 a 5 pontos corridos nos pontos de encontro entre bastidores vizinhos, com toler√¢ncia m√°xima de encaixe de 0.3mm.",
    "howItWorks": [
      "1. O desenho completo de grande porte (ex: 20x40cm) √© carregado no software de bordado.",
      "2. O digitalizador define a grade de bastidores virtuais sobrepostos cobrindo toda a √°rea da arte.",
      "3. As linhas de corte s√£o tra√ßadas atrav√©s de caminhos naturais (espa√ßos vazios ou sob contornos de satin) para ocultar as emendas.",
      "4. O software gera os arquivos individuais numerados (Parte 1, Parte 2, Parte 3) com suas respectivas cruzetas de alinhamento.",
      "5. No ateli√™, o operador borda a Parte 1 com a cruzeta de marca√ß√£o, rebastidora o tecido alinhando a cruzeta pelo laser ou agulha e executa a Parte 2 perfeitamente encaixada."
    ],
    "beginnerExplanation": "√â o m√©todo inteligente de cortar um desenho bem grand√£o em dois ou tr√™s peda√ßos no computador para conseguir bordar na sua m√°quina mesmo que o seu bastidor seja pequeno. O programa cria marquinhas de cruzinha para voc√™ emendar as partes no tecido certinho sem ningu√©m notar a emenda!",
    "applications": [
      "Bordado de costas inteiras de jaquetas e roup√µes de banho",
      "Barrados longos e cont√≠nuos de toalhas de mesa e len√ß√≥is",
      "Grandes bras√µes para estandartes e bandeiras religiosas",
      "Execu√ß√£o de matrizes grandes em m√°quinas dom√©sticas com bastidor padr√£o (10x10cm ou 13x18cm)"
    ],
    "commonErrors": [
      "Cortar a matriz no meio de um preenchimento tatami maci√ßo, gerando uma cicatriz vis√≠vel na emenda dos pontos",
      "Rebastidorar o tecido com √¢ngulo torto em rela√ß√£o √†s cruzetas de registro, fazendo a segunda metade sair inclinada",
      "N√£o levar em considera√ß√£o o repuxo do tecido entre a primeira e a segunda parte bordada"
    ],
    "troubleshootingTips": [
      "Sempre planeje a linha de divis√£o passando por contornos, linhas vazias ou sob colunas de ponto cheio",
      "Utilize agulhas ou alfinetes finos espetados exatamente no centro da cruzeta de alinhamento para acertar a posi√ß√£o da agulha no segundo bastidor",
      "Utilize bastidores magn√©ticos ou gabaritos de alinhamento para facilitar o rebastidoramento reto"
    ],
    "dicaArtrelados": "Para acertar a emenda de matrizes divididas com precis√£o de agulha: quando a m√°quina bordar a cruzeta da primeira parte, abaixe a agulha da m√°quina no centro exato da cruzeta com o volante antes de iniciar a segunda parte. A emenda fica 100% invis√≠vel aos olhos!",
    "voceSabia": "Softwares profissionais como o Wilcom EmbroideryStudio calculam automaticamente o melhor caminho de divis√£o inteligente (Smart Split), evitando cortar objetos s√≥lidos e camuflando os pontos de emenda nas transi√ß√µes de cores naturais da arte.",
    "practicalExercise": "No seu software de bordado, pegue uma matriz de 15x25cm e ative a ferramenta Multi-Hoop com bastidores 13x18cm: divida a matriz em duas etapas com cruzetas de registro autom√°ticas. Exporte os dois arquivos e visualize no simulador como as cruzetas servem de guia de encaixe perfeito!",
    "quickSummary": "Particionamento sistem√°tico de matrizes de grande porte em se√ß√µes sequenciais com marcas de registro para bastidores menores.",
    "relatedTerms": [
      "Bastidor Virtual",
      "Bordado em Bastidor Expandido",
      "Bordado Cont√≠nuo",
      "Deslocamento de Origem"
    ],
    "tags": [
      "divis√£o",
      "matriz",
      "multi-hooping",
      "grandes formatos",
      "alinhamento",
      "software"
    ],
    "bibliographicReferences": [
      "WILCOM. Multi-Hooping and Large Design Splitting Guidelines. Sydney: Wilcom, 2022.",
      "BERNINA. Multi-Hooping Masterclass: Aligning Split Embroidery Files. Steckborn, 2023.",
      "ARTRELADOS. O Segredo dos Grandes Bordados: Como Dividir Matrizes e Emendar Sem Cicatrizes. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-048-dupla-face-bordado-limpo",
    "code": "D-048",
    "term": "Dupla Face / Bordado Limpo no Avesso (Reversible & Clean-Back Embroidery)",
    "level": "Intermedi√°rio üü°",
    "category": "Acabamento & Finaliza√ß√£o",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim duplus (duplo, que tem dois lados) e facies (rosto, aspecto visual). Padr√£o de excel√™ncia da alta costura e do enxoval de luxo internacional.",
    "summary": "T√©cnica de digitaliza√ß√£o e costura com linha de bobina coordenada para produzir pe√ßas onde o avesso tem acabamento perfeito e apresent√°vel.",
    "definition": "O bordado dupla face (ou t√©cnica do avesso perfeito / clean-back embroidery) √© o conjunto de procedimentos de digitaliza√ß√£o e parametriza√ß√£o mecatr√¥nica planejado para que o avesso do bordado apresente est√©tica impec√°vel, sem fios de salto aparentes, sem n√≥s grosseiros e sem entretelas vis√≠veis, utilizando linhas inferiores da mesma tonalidade da linha superior ou entretelas hidrossol√∫veis 100% lav√°veis.",
    "technicalDetails": "Utiliza√ß√£o de linha inferior de poli√©ster 60wt/70wt tingida na mesma cor exata da linha do topo. Programa√ß√£o de caminhos de conex√£o cont√≠nuos por ponto corrido sob colunas de satin (elimina√ß√£o de comandos Trim no avesso) e entretela hidrossol√∫vel de 40g a 80g de f√°cil remo√ß√£o.",
    "howItWorks": [
      "1. A bobina √© enchida previamente com a mesma linha colorida utilizada no cabe√ßote superior.",
      "2. O tecido (toalha, manta, len√ßo) √© estabilizado exclusivamente com entretela hidrossol√∫vel.",
      "3. A matriz √© digitalizada com caminhos de costura inteligentes, escondendo os trajetos de deslocamento sob os pontos cheios.",
      "4. A tens√£o superior e inferior √© rigorosamente equilibrada para que a linha n√£o repuxe para nenhum dos lados.",
      "5. Ap√≥s o bordado, a pe√ßa √© lavada e o avesso fica macio, com as mesmas cores e sem res√≠duos √°speros."
    ],
    "beginnerExplanation": "√â a t√©cnica para deixar a parte de tr√°s do bordado t√£o bonita e limpinha quanto a parte da frente, usando linha da bobina da mesma cor da linha de cima e entretela que derrete na √°gua, ideal para toalhas e mantinhas de beb√™ onde o avesso fica aparecendo.",
    "applications": [
      "Toalhas de lavabo e banho de alto padr√£o",
      "Fraldas e mantas de beb√™ com contato direto na pele sens√≠vel",
      "Xales, len√ßos de seda, cangas e pe√ßas com duas faces vis√≠veis",
      "Cortinas, jogos americanos e guardanapos finos de banquete"
    ],
    "commonErrors": [
      "Usar entretela rasg√°vel comum, deixando peda√ßos brancos de papel presos e duros no verso da toalha",
      "Usar linha branca comum na bobina para bordar desenhos escuros ou coloridos em pe√ßas dupla face",
      "Deixar pontas soltas de linha sem corte autom√°tico rente no avesso"
    ],
    "troubleshootingTips": [
      "Enrole bobinas com a mesma linha de bordar superior para cada cor predominante do desenho",
      "Substitua todas as entretelas de papel por entretela hidrossol√∫vel sol√∫vel em √°gua morna",
      "Calibre a tens√£o da bobina para ficar perfeitamente neutra em rela√ß√£o √† tens√£o superior"
    ],
    "dicaArtrelados": "Para fraldas de beb√™ e toalhas de luxo: use sempre linha da mesma cor na bobina e entretela hidrossol√∫vel. Ao final, passe um paninho √∫mido no avesso e corte os fiapos com tesoura de arremate curva: o avesso fica t√£o lindo e macio que a cliente n√£o sabe dizer qual √© a frente e qual √© o verso!",
    "voceSabia": "Na tradi√ß√£o do bordado chin√™s imperial de Xiang e Suzhou, o bordado dupla face manual era considerado o √°pice supremo da arte t√™xtil: os mestres artes√£os conseguiam bordar um gato de olhos abertos na frente e um tigre feroz no verso da mesma seda transparente.",
    "practicalExercise": "Encha uma carretilha com linha de poli√©ster vermelha e coloque o mesmo cone vermelho no cabe√ßote. Monte um peda√ßo de linho com entretela hidrossol√∫vel e borde uma flor em ponto cheio. Lave a amostra em √°gua morna e veja como o avesso fica incrivelmente limpo, macio e da mesma cor da frente!",
    "quickSummary": "M√©todo de produ√ß√£o com linha de bobina combinando e entretela hidrossol√∫vel para gerar bordados com avesso impec√°vel.",
    "relatedTerms": [
      "Bobbin Thread (Linha da Bobina)",
      "Entretela Hidrossol√∫vel",
      "Corte Autom√°tico de Linha",
      "Controle de Tens√£o da Linha"
    ],
    "tags": [
      "dupla face",
      "avesso perfeito",
      "enxoval",
      "beb√™",
      "toalhas",
      "acabamento"
    ],
    "bibliographicReferences": [
      "MADEIRA. Reversible Embroidery and Clean-Back Finishing Standards. Freiburg, 2022.",
      "KRAUSZ, P. Luxury Monogramming: Double-Sided Techniques for High-End Linens. London, 2021.",
      "ARTRELADOS. O Avesso Perfeito: T√©cnicas para Encantar Clientes de Enxovais Finos. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-049-debrum-bordado",
    "code": "D-049",
    "term": "Debrum Bordado (Bound Edge / Appliqu√© Overcasting)",
    "level": "Fundamental üü¢",
    "category": "Pontos B√°sicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do √°rabe vulgar ad-dabrun (orla dobrada, fita de refor√ßo perim√©trico). T√©cnica cl√°ssica da alfaiataria adaptada √† parametriza√ß√£o eletr√¥nica de bordados de contorno.",
    "summary": "Acabamento perim√©trico em fita ou tecido dobrado fixado por colunas de ponto cheio para proteger e refor√ßar as bordas de pe√ßas t√™xteis.",
    "definition": "O debrum bordado √© a aplica√ß√£o estrutural e decorativa em que uma tira de tecido dobrado, vi√©s ou fita √© sobreposta e costurada ao longo da borda perim√©trica de uma pe√ßa t√™xtil (como toalhas, babadores, mantas e caminhos de mesa) por meio de uma densa coluna de ponto cheio (satin) ou ponto feston√™ digitalizado, conferindo veda√ß√£o total contra desfiamentos e refor√ßo mec√¢nico.",
    "technicalDetails": "Digitalizado com largura de coluna entre 3.5mm e 5.0mm e densidade de 0.38mm. Possui costura guia de posicionamento perim√©trico e underlay de borda dupla (double edge walk) com compensa√ß√£o de repuxo de +0.40mm para abra√ßar a espessura do vi√©s dobrado.",
    "howItWorks": [
      "1. A m√°quina executa a primeira costura simples indicando a linha guia de encaixe do debrum.",
      "2. O operador acomoda o vi√©s ou a fita dobrada sobre a linha marcada na pe√ßa.",
      "3. Uma costura de alinhave fixa temporariamente o debrum no lugar.",
      "4. A coluna final de ponto cheio em zigue-zague denso costura sobre a jun√ß√£o, lacrando as margens do tecido com eleg√¢ncia e alta resist√™ncia mec√¢nica."
    ],
    "beginnerExplanation": "√â uma bordinha ou fita de tecido dobradinha que a gente prega na beirada de toalhas, fraldas ou panos de prato usando um ponto cheio bem gordinho e resistente para a borda n√£o desfiar e ficar super charmosa.",
    "applications": [
      "Acabamento de bordas em toalhas de banho e rosto infantis",
      "Barrados perim√©tricos de panos de copa e jogos americanos",
      "Bordas refor√ßadas em babadores e mantinhas de rec√©m-nascido",
      "Arremate perim√©trico de tapetes decorativos e almofadas"
    ],
    "commonErrors": [
      "Usar debrum de tecido muito grosso que fa√ßa a agulha entortar ao bater sobre m√∫ltiplas camadas",
      "Digitalizar a coluna de acabamento muito estreita (menos de 3mm), deixando a beirada do vi√©s escapar",
      "N√£o alinhar o debrum perfeitamente com a costura guia antes do ponto cheio final"
    ],
    "troubleshootingTips": [
      "Utilize fita de vi√©s de algod√£o 100% ou tecido tricoline pr√©-passado no ferro para evitar enrugamento",
      "Aplique uma fita crepe de ateli√™ ou cola bast√£o tempor√°ria para segurar o debrum bem esticado antes da costura final",
      "Use agulha tamanho 80/12 ou 90/14 com ponta afiada para atravessar a dobra do vi√©s com facilidade"
    ],
    "dicaArtrelados": "Para fazer debruns perfeitos em toalhinhas de boca sem precisar ir para a m√°quina de costura reta: monte o barrado de tricoline direto no bastidor de bordar usando a matriz de debrum inteligente: a bordadeira marca, fixa e arremata com ponto cheio tudo em uma √∫nica etapa!",
    "voceSabia": "Na hist√≥ria do vestu√°rio medieval, o debrum era usado exclusivamente para proteger a bainha de mantos reais contra o atrito com o ch√£o e a lama. Com o advento das m√°quinas de bordar, tornou-se um dos acabamentos decorativos mais populares e lucrativos dos ateli√™s.",
    "practicalExercise": "Digitalize um ret√¢ngulo com cantos arredondados contendo uma costura guia, uma parada programada (Stop) e uma coluna de Satin de 4.0mm. Borde sobre um tecido plano aplicando uma tira de tecido estampado na parada: veja como o debrum bordado fica impec√°vel e com toque profissional!",
    "quickSummary": "Tira de tecido dobrado ou vi√©s fixada na extremidade da pe√ßa atrav√©s de colunas de ponto cheio para refor√ßo e arremate de bordas.",
    "relatedTerms": [
      "Borda de Acabamento",
      "Bordado Appliqu√© (Aplica√ß√£o)",
      "Coluna de Satin",
      "Costura de Contorno"
    ],
    "tags": [
      "debrum",
      "vi√©s",
      "acabamento",
      "bordas",
      "barrados",
      "enxoval"
    ],
    "bibliographicReferences": [
      "WILCOM. Border Digitizing, Binding and Edge Finishing Guidelines. Sydney: Wilcom, 2022.",
      "COATS INDUSTRIAL. Edge Binding, Trimming and Overcasting Mechanics. London, 2021.",
      "ARTRELADOS. Barrados e Debruns no Bastidor: Acabamentos Nobres para Panos de Prato e Toalhas. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-050-degrade-de-pontos",
    "code": "D-050",
    "term": "Degrad√™ de Pontos / Ponto Sombreado (Stitch Gradient & Color Blending)",
    "level": "Avan√ßado üî¥",
    "category": "Pontos B√°sicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do franc√™s d√©grader (diminuir gradualmente em intensidade ou tom). T√©cnica de transi√ß√£o crom√°tica desenvolvida a partir da pintura a √≥leo e adaptada aos algoritmos de densidade vari√°vel de bordado.",
    "summary": "T√©cnica de transi√ß√£o suave entre duas ou mais cores atrav√©s do entrela√ßamento de camadas com densidades gradualmente decrescentes.",
    "definition": "O degrad√™ de pontos (ou sombreado de cores / color blending) √© a t√©cnica avan√ßada de digitaliza√ß√£o em que duas ou mais camadas de pontos de cores diferentes s√£o sobrepostas com densidades vari√°veis e gradualmente decrescentes (comprimento e espa√ßamento interpolados), criando uma transi√ß√£o √≥ptica suave, efeitos tridimensionais de luz e sombra, e a ilus√£o de fus√£o de cores conhecida como 'pintura com agulha'.",
    "technicalDetails": "Executado por perfis de densidade exponencial ou linear (Gradient Fill Profiles). A camada de cor base inicia densa (0.40mm) e expande o espa√ßamento at√© 1.5mm; a segunda cor sobreposta faz o trajeto inverso (de 1.5mm para 0.40mm), gerando o entrela√ßamento √≥ptico perfeito das linhas.",
    "howItWorks": [
      "1. O digitalizador desenha o objeto base e ativa a ferramenta de Densidade Gradiente (Gradient / Accordion Stitch).",
      "2. √â selecionada a primeira cor (ex: amarelo escuro) com densidade decrescente de baixo para cima.",
      "3. O segundo objeto com a cor clara (ex: amarelo claro) √© sobreposto com densidade decrescente de cima para baixo.",
      "4. Os pontos das duas cores se intercalam nos mesmos √¢ngulos de costura.",
      "5. A reflex√£o de luz nas linhas de poli√©ster funde as duas tonalidades ao olhar humano, criando uma transi√ß√£o cont√≠nua sem faixas duras de corte."
    ],
    "beginnerExplanation": "√â a t√©cnica m√°gica de misturar duas ou mais cores de linha no mesmo desenho para fazer um sombreado suave que parece uma pintura (como o p√¥r do sol ou as sombras de uma flor), fazendo as cores se misturarem suavemente sem aquela divis√£o dura de riscos.",
    "applications": [
      "P√©talas de flores realistas e folhagens bot√¢nicas",
      "P√¥r do sol, paisagens e efeitos de c√©u em quadros bordados",
      "Sombreamento de pele, olhos e cabelos em retratos bordados",
      "Logotipos com degrad√™s corporativos modernos e transi√ß√µes met√°licas"
    ],
    "commonErrors": [
      "Usar densidade fixa pesada nas duas cores sobrepostas, criando uma placa grossa e dura de pontos que quebra agulhas",
      "Digitalizar as duas camadas com √¢ngulos de ponto totalmente opostos (90¬∞ de diferen√ßa), destruindo a ilus√£o de fus√£o de cor",
      "Fazer o degrad√™ em √°reas muito pequenas (menos de 10mm), onde o espa√ßo f√≠sico n√£o permite a transi√ß√£o gradual dos pontos"
    ],
    "troubleshootingTips": [
      "Mantenha o mesmo √¢ngulo de inclina√ß√£o de pontos nas duas camadas que comp√µem o degrad√™",
      "Utilize linhas de poli√©ster trilobal ou viscose brilhante para maximizar a reflex√£o luminosa na fus√£o das cores",
      "Reduza a densidade da camada inferior em pelo menos 40% antes de sobrepor a segunda cor"
    ],
    "dicaArtrelados": "Para fazer degrad√™s realistas em flores: use sempre 3 tons da mesma fam√≠lia de cor (escuro, m√©dio e claro). Comece a base com o tom escuro abrindo os pontos, passe o tom m√©dio no meio e finalize a ponta da p√©tala com o tom claro: a p√©tala parece que acabou de ser colhida do jardim!",
    "voceSabia": "Na digitaliza√ß√£o moderna de alta fidelidade (PhotoStitch), os algoritmos computacionais dividem uma fotografia em at√© 16 camadas microsc√≥picas de degrad√™ de pontos entrela√ßados, reproduzindo tons de pele humanos com precis√£o quase fotogr√°fica usando apenas 4 cores de linha prim√°rias.",
    "practicalExercise": "No seu software de bordado, crie um quadrado de 5x5cm: aplique a ferramenta 'Preenchimento Gradiente' com cor azul marinho variando a densidade de 0.38mm a 1.20mm. Duplique o objeto com a cor azul celeste invertendo o sentido do gradiente. Simule os pontos e veja o efeito de c√©u degrad√™ perfeito!",
    "quickSummary": "M√©todo de interpola√ß√£o e sobreposi√ß√£o de camadas com densidades decrescentes para criar transi√ß√µes suaves de cor e sombra.",
    "relatedTerms": [
      "Densidade Vari√°vel & Efeitos Visuais",
      "Bordado Multicolorido",
      "Brilho da Linha",
      "√Çngulo de Ponto"
    ],
    "tags": [
      "degrad√™",
      "sombreado",
      "color blending",
      "pintura com agulha",
      "realismo",
      "software"
    ],
    "bibliographicReferences": [
      "WILCOM. Color Blending, Shading and Accordion Stitch Mastering. Sydney: Wilcom, 2022.",
      "KRAUSZ, P. Thread Painting: Principles of Gradient Stitching and Multi-Tone Shading. New York, 2021.",
      "ARTRELADOS. A Arte do Degrad√™ no Bordado Computadorizado: Como Criar Sombras e Realismo. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-051-deslocamento-do-pantografo",
    "code": "D-051",
    "term": "Deslocamento do Pant√≥grafo (Pantograph Traverse / Carriage Movement)",
    "level": "Fundamental üü¢",
    "category": "Opera√ß√£o da M√°quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego pan (tudo, todo) e graphein (escrever, desenhar). Sistema cinem√°tico de bra√ßos mec√¢nicos articulados inventado por Christoph Scheiner em 1603 e eletrificado na automa√ß√£o t√™xtil nos anos 1970.",
    "summary": "Movimento mecatr√¥nico bidimensional nos eixos X e Y que posiciona o bastidor a cada pulso de rota√ß√£o do cabe√ßote de costura.",
    "definition": "O deslocamento do pant√≥grafo √© o movimento mecatr√¥nico sincronizado executado pelo carro transportador de bastidores ao longo dos eixos cartesianos ortogonais X (movimento lateral) e Y (movimento longitudinal), acionado por servomotores de passo de alta resolu√ß√£o e correias dentadas de precis√£o, respons√°vel por transladar o bastidor com o tecido para as coordenadas exatas da pr√≥xima penetra√ß√£o da agulha durante o intervalo em que a agulha est√° fora do tecido.",
    "technicalDetails": "Acionado por servomotores digitais AC com encoders √≥pticos de 10.000 pulsos por volta. Desloca-se em uma janela temporal de apenas 25 a 35 milissegundos por ciclo de ponto a velocidades lineares de at√© 1.500mm/s com precis√£o posicional repet√≠vel de ¬±0.05mm.",
    "howItWorks": [
      "1. A placa controladora da m√°quina decodifica as coordenadas X/Y do pr√≥ximo ponto da matriz.",
      "2. Quando a agulha sobe e sai completamente do tecido (atingindo o √¢ngulo de seguran√ßa de 100¬∞ do ciclo de rota√ß√£o), o comando de movimento √© disparado.",
      "3. Os servomotores tracionam as correias dentadas, movimentando o bra√ßo do pant√≥grafo com o bastidor acoplado.",
      "4. O bastidor chega e para exatamente na nova coordenada milissegundos antes da agulha descer novamente.",
      "5. A agulha penetra o tecido estabilizado, reiniciando o ciclo cinem√°tico cont√≠nuo."
    ],
    "beginnerExplanation": "√â o movimento que o bra√ßo mec√¢nico da m√°quina faz levando o bastidor para a esquerda, direita, frente e tr√°s bem rapidinho enquanto a agulha sobe e desce, desenhando o bordado no pano com precis√£o absoluta.",
    "applications": [
      "Movimenta√ß√£o do bastidor em todos os tipos de matrizes e formatos",
      "Execu√ß√£o de saltos longos (Jumps) entre diferentes √°reas do desenho",
      "Tra√ßado de √°rea de trabalho e confer√™ncia de limites perim√©tricos (Trace)",
      "Retorno autom√°tico do bastidor ao ponto zero ap√≥s o t√©rmino do bordado"
    ],
    "commonErrors": [
      "Segurar ou esbarrar a m√£o no bra√ßo do pant√≥grafo enquanto a m√°quina est√° bordando, fazendo o motor perder o passo e desalinhando o desenho todo",
      "Deixar objetos pesados (tesouras, cones de linha, tecidos ca√≠dos) sobre a mesa atr√°s do pant√≥grafo, travando o percurso mec√¢nico",
      "Bordar sem verificar se a √°rea ao redor da m√°quina est√° livre de obst√°culos nos eixos X e Y"
    ],
    "troubleshootingTips": [
      "Mantenha a mesa e as guias lineares do pant√≥grafo sempre limpas de poeira t√™xtil e lubrificadas conforme o manual",
      "Se o bordado come√ßar a sair torto em escadinha, verifique a tens√£o das correias dentadas do pant√≥grafo",
      "Nunca empurre o carro do pant√≥grafo com a m√°quina ligada para n√£o for√ßar os servomotores"
    ],
    "dicaArtrelados": "Deixe sempre uma folga livre de pelo menos 20 cent√≠metros em volta de toda a sua m√°quina de bordar! Uma tesoura esquecida ou um casaco pendurado perto do bra√ßo m√≥vel do pant√≥grafo pode travar o carro e fazer o bordado perder o prumo no meio da pe√ßa!",
    "voceSabia": "Nas m√°quinas industriais multicabe√ßas com 20 cabe√ßotes, o pant√≥grafo √© uma estrutura de a√ßo com mais de 10 metros de comprimento que pesa centenas de quilos, mas que consegue se mover, parar e estabilizar com precis√£o milim√©trica mais de 15 vezes por segundo!",
    "practicalExercise": "Com a m√°quina ligada e em modo de teste, acione as setas manuais do painel para movimentar o pant√≥grafo nos quatro extremos (X+, X-, Y+, Y-): repare na suavidade do deslocamento dos eixos e veja como o bra√ßo mec√¢nico responde instantaneamente a cada comando!",
    "quickSummary": "Transla√ß√£o mecatr√¥nica nos eixos X e Y controlada por servomotores que posiciona o bastidor a cada subida da agulha.",
    "relatedTerms": [
      "Carro da M√°quina de Bordado",
      "Tra√ßado de √Årea",
      "Deslocamento de Origem",
      "Controle de Velocidade"
    ],
    "tags": [
      "pant√≥grafo",
      "eixos X Y",
      "servomotores",
      "movimenta√ß√£o",
      "mecatr√¥nica",
      "precis√£o"
    ],
    "bibliographicReferences": [
      "TAJIMA. Pantograph Drive Mechanics, Servo Tuning and Linear Guide Maintenance. Nagoya: Tajima, 2022.",
      "BARUDAN. XY-Carriage Motion Dynamics and Timing Integration. Tokyo: Barudan, 2023.",
      "ARTRELADOS. A Mec√¢nica dos Eixos X e Y: Como Cuidar do Pant√≥grafo da sua Bordadeira. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-052-desbobinamento-de-linha-e-sentido-do-fio",
    "code": "D-052",
    "term": "Desbobinamento de Linha e Sentido do Fio (Thread Unwinding Direction & Cross-Wound Feed)",
    "level": "Fundamental üü¢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do prefixo des- (separa√ß√£o, libera√ß√£o) e do franc√™s bobine (carretel cil√≠ndrico). Princ√≠pio da f√≠sica t√™xtil que rege o comportamento rotacional e a tor√ß√£o intr√≠nseca das linhas durante a alimenta√ß√£o da m√°quina.",
    "summary": "Comportamento din√¢mico de libera√ß√£o do fio do cone (enrolamento cruzado para cima) versus carretel pequeno (alimenta√ß√£o lateral deitada) que previne n√≥s e tor√ß√µes.",
    "definition": "O desbobinamento de linha (Thread Delivery & Unwinding Dynamics) √© o processo f√≠sico pelo qual o filamento de poli√©ster, viscose ou fio met√°lico √© liberado da sua embalagem prim√°ria (cone grande de 4.000m ou carretel pequeno de 1.000m) em dire√ß√£o aos tensores da m√°quina de bordar (Brother, Janome, Bernina/Bernette e Sun Special). Os cones industriais grandes possuem enrolamento cruzado em 'X' (Cross-Wound), projetados para ficar parados na vertical e desenrolar a linha para CIMA por uma haste alta; j√° os carret√©is pequenos possuem enrolamento paralelo reto (Stacked-Wound), devendo girar deitados em um pino horizontal com prendedor de carretel.",
    "technicalDetails": "Se um cone grande de enrolamento cruzado for colocado deitado no pino horizontal, a linha sofre ac√∫mulo de tor√ß√£o (Kinking / Twist) a cada volta, gerando 'espirais' que travam nos pratinhos tensores e quebram a linha. Cones de 4.000m exigem alimenta√ß√£o vertical com mastro elevado a pelo menos 30cm.",
    "howItWorks": [
      "1. A bordadeira identifica o formato do suporte de linha: se √© cone c√¥nico grande (4.000m) ou carretel reto pequeno (1.000m).",
      "2. Para o cone grande: instala-o na base porta-cones vertical com o mastro alto esticado.",
      "3. A linha desenrola para o alto pelo topo do cone com o carretel 100% parado e sem atrito.",
      "4. Para carret√©is retos pequenos: instala-o no pino horizontal da m√°quina e coloca o prendedor de carretel (tampa pl√°stica) do tamanho correto.",
      "5. A linha entra no circuito da m√°quina com tens√£o suave e linear.",
      "6. A forma√ß√£o do ponto ocorre sem trancos, sem quebras e sem n√≥s no meio da costura."
    ],
    "beginnerExplanation": "√â o jeito certo que a linha deve sair do carretel para a m√°quina. Cones grand√µes de 4.000m precisam ficar em p√© paradinhos com a linha subindo para o alto por um ferrinho; j√° os carret√©is pequenos devem ficar deitados no pino da m√°quina. Usar o jeito certo evita que a linha fique dando la√ßos, embolando ou quebrando toda hora!",
    "applications": [
      "Uso correto de cones industriais de 4.000m e 5.000m no ateli√™ com torre de linha vertical",
      "Elimina√ß√£o de espirais e n√≥s em linhas de poli√©ster trilobal e fios met√°licos brilhantes",
      "Alimenta√ß√£o uniforme da linha superior sem varia√ß√£o de tens√£o em altas velocidades (850 PPM)",
      "Escolha correta do prendedor de carretel (disco pl√°stico pequeno, m√©dio ou grande) em m√°quinas Brother e Janome"
    ],
    "commonErrors": [
      "Colocar o cone grande de 4.000m deitado no pino horizontal original da m√°quina Brother ou Janome, travando o cone e estourando a linha",
      "Usar carretel pequeno sem o disco prendedor de pl√°stico, fazendo o carretel pular para fora do pino durante o bordado",
      "Usar prendedor de carretel muito maior que o pr√≥prio carretel, fazendo a linha enganchar na borda do pl√°stico a cada volta"
    ],
    "troubleshootingTips": [
      "Para carret√©is pequenos deitados, escolha sempre uma tampinha de carretel que tenha o mesmo di√¢metro ou seja ligeiramente menor que a borda do carretel",
      "Para cones grandes em p√©, mantenha o ferrinho da torre de linha sempre bem esticado para o alto",
      "Se a linha estiver saindo em espirais apertadas parecendo um 'rabinho de porco', coloque uma redinha de prote√ß√£o no cone"
    ],
    "dicaArtrelados": "A linha vive quebrando e voc√™ j√° trocou a agulha 3 vezes? Olhe como o carretel est√° na m√°quina! Se for cone grande, ele tem que desenrolar para CIMA na torrinha vertical; se for carretel pequeno, ele tem que girar deitado com a tampinha pl√°stica certa. Acerte a posi√ß√£o e a quebra de linha acaba na hora!",
    "voceSabia": "Ao desenrolar um cone de bordado de 4.000 metros deitado, a linha ganha mais de 10.000 voltas extras de tor√ß√£o sobre si mesma, o que cria uma for√ßa el√°stica invis√≠vel capaz de arrebentar o fio mais resistente!",
    "practicalExercise": "Pegue um cone grande de 4.000m e puxe 1 metro de linha para o lado: solte a ponta e veja como o fio se enrola em si mesmo dando n√≥s. Agora puxe 1 metro de linha para CIMA: solte e veja como o fio cai perfeitamente liso e esticado!",
    "quickSummary": "Din√¢mica correta de libera√ß√£o do fio (vertical para cones grandes e horizontal para carret√©is) que previne tor√ß√µes e quebras.",
    "relatedTerms": [
      "Base de Cones e Porta-Carretel Vertical",
      "Armazenamento de Fios e Cones",
      "Ajuste de Tens√£o da Linha",
      "Quebra de Linha Superior"
    ],
    "tags": [
      "d-052",
      "desbobinamento",
      "sentido do fio",
      "cones grandes",
      "carretel",
      "tens√£o",
      "brother",
      "janome",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. Thread Delivery Mechanics: Horizontal vs. Vertical Spool Pin Dynamics. St. George, 2022.",
      "BROTHER. Spool Cap Sizing and Thread Guide Delivery Standards. Nagoya, 2023.",
      "ARTRELADOS. O Segredo do Desbobinamento Perfeito: Como Posicionar Cones e Carret√©is Sem Quebras. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-053-dispositivo-de-bone-para-maquinas-domesticas",
    "code": "D-053",
    "term": "Dispositivo de Bon√© para M√°quinas Dom√©sticas e Semi-Industriais (Cap Driver & Hat Hoop Insert)",
    "level": "Intermedi√°rio üü°",
    "category": "Bastidores & Fixa√ß√£o",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dispositivus (aparato mec√¢nico adaptado) e do franc√™s bonnet (chap√©u, touca). Acess√≥rio de fixa√ß√£o desenvolvido para adaptar o movimento cartesiano plano √†s superf√≠cies curvas de bon√©s.",
    "summary": "Acess√≥rio mec√¢nico curvo com presilhas de aba e entretela r√≠gida que permite bordar na frente curva de bon√©s estruturados em m√°quinas de 1 agulha.",
    "definition": "O dispositivo de bon√© para m√°quinas dom√©sticas e semi-industriais (Cap Frame Insert / Hat Hoop Attachment) √© um acess√≥rio mec√¢nico especializado compat√≠vel com bastidores convencionais e pant√≥grafos de m√°quinas de 1 agulha (Brother BP/PE/NV, Janome MC500E/550E, Bernina e Sun Special). √â composto por uma placa de fixa√ß√£o com mola de reten√ß√£o para a aba do bon√©, grampos laterais e gabarito curvo que mant√©m a copa frontal do bon√© aberta, esticada e estabilizada sobre entretela pesada ou adesiva, permitindo que a agulha borde logotipos e nomes em superf√≠cies tridimensionais sem deformar a pe√ßa.",
    "technicalDetails": "√Årea √∫til de bordado em m√°quinas dom√©sticas de 1 agulha: cerca de 10x6cm a 13x8cm (delimitada pela curvatura da copa e folga do calcador). Exige rota√ß√£o da matriz em 180¬∞ no painel da m√°quina e desativa√ß√£o de bordados no topo da aba.",
    "howItWorks": [
      "1. A bordadeira desdobra a carneira (fita interna de suor) do bon√© para fora.",
      "2. Aplica entretela grossa de bon√© (rasg√°vel pesada de 80g ou autoadesiva) no verso da frente do bon√©.",
      "3. Encaixa a aba do bon√© no grampo central do dispositivo de bon√© e aperta a mola de travamento.",
      "4. Estica as laterais da copa do bon√© prendendo com os grampos el√°sticos nas bordas do aro.",
      "5. Encaixa o bastidor no pant√≥grafo da m√°quina garantindo que a aba fique apontada para fora.",
      "6. Gira a matriz no painel da m√°quina de cabe√ßa para baixo (180¬∞) e executa o 'Trace' (tra√ßado de √°rea).",
      "7. A m√°quina borda o logotipo centralizado com precis√£o na curvatura do bon√©."
    ],
    "beginnerExplanation": "√â uma pecinha ou bastidor especial com garras de press√£o que serve para prender a aba do bon√© bem firme e abrir a parte da frente dele lisinha, para voc√™ conseguir bordar bon√©s na sua m√°quina de casa sem amassar o chap√©u e sem bater a agulha na aba dura.",
    "applications": [
      "Personaliza√ß√£o de bon√©s de brim, sarja e microfibra para empresas e eventos",
      "Bordados em viseiras esportivas e chap√©us de pescador (bucket hats)",
      "Bordados corporativos de logomarcas em bon√©s promocionais no ateli√™",
      "Amplia√ß√£o da gama de produtos oferecidos por bordadeiras que trabalham em casa"
    ],
    "commonErrors": [
      "Bordar sem rebater a carneira interna do bon√©, costurando o forro de suor fechado por engano",
      "Esquecer de girar a matriz em 180¬∞ na tela da m√°quina, fazendo o bordado sair de cabe√ßa para baixo no bon√©",
      "Bordar muito perto da costura central da aba, quebrando a agulha no refor√ßo de pl√°stico r√≠gido do bon√©"
    ],
    "troubleshootingTips": [
      "Fa√ßa SEMPRE o tra√ßado de √°rea (Trace) na tela da m√°quina para ter certeza absoluta de que o p√© calcador n√£o vai encostar na aba do bon√©",
      "Use agulha mais grossa e resistente (calibre 90/14 ponta agu√ßada ou de Tit√¢nio) para furar a sarja dura e a entretela do bon√©",
      "Reduza a velocidade da sua m√°quina Brother ou Janome para 450 - 550 PPM ao bordar bon√©s para m√°xima seguran√ßa mec√¢nica"
    ],
    "dicaArtrelados": "Quer pegar encomendas lucrativas de bon√©s na sua m√°quina de bordar caseira? Use o bastidor/dispositivo de bon√© com entretela firme de 80g, dobre a fita de dentro do bon√© para fora e diminua a velocidade da m√°quina para 500 PPM: seus bon√©s v√£o sair lindos, retinhos e com acabamento de loja!",
    "voceSabia": "Os bon√©s profissionais possuem uma entretela interna pl√°stica chamada 'buckram'; em m√°quinas industriais usam-se bastidores circulares girat√≥rios de 270¬∞, mas os dispositivos planos para m√°quinas caseiras conseguem fazer a frente completa do bon√© com perfei√ß√£o!",
    "practicalExercise": "Pegue um bon√© promocional e vire a fita de suor interna para fora: posicione-o sobre uma folha de entretela adesiva presa no bastidor da sua m√°quina e prenda a aba com um grampo de press√£o; gire a matriz em 180¬∞ na tela e fa√ßa o tra√ßado de √°rea para ver como a agulha passeia perfeitamente na frente do bon√©!",
    "quickSummary": "Acess√≥rio com presilhas de aba que estabiliza a copa de bon√©s e viseiras para bordar em m√°quinas de 1 agulha.",
    "relatedTerms": [
      "Adaptador de Bastidor de Bon√©s / Dispositivo Cap Driver",
      "Bastidor de Bordado",
      "Agulha de Tit√¢nio",
      "Bordado em Alto Relevo com EVA / 3D Puff"
    ],
    "tags": [
      "d-053",
      "bon√©",
      "dispositivo de bon√©",
      "cap hoop",
      "brother",
      "janome",
      "viseiras",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Free-Arm & Cap Frame Embroidery Guide for Single-Needle Machines. Nagoya, 2022.",
      "JANOME. Hat Hoop & Cap Insert Attachment User Manual. Tokyo, 2023.",
      "ARTRELADOS. Bon√©s Perfeitos na M√°quina Dom√©stica: O Guia Definitivo do Dispositivo de Bon√© no Ateli√™. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-054-dupla-entretela-estabilizacao-em-camadas",
    "code": "D-054",
    "term": "Dupla Entretela e Estrat√©gia de Estabiliza√ß√£o em Camadas (Double Stabilizer Layering Strategy)",
    "level": "Fundamental üü¢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim duplus (duplicado, refor√ßado) e do franc√™s entoilage (tecido interno de refor√ßo estrutural). T√©cnica de engenharia de estabiliza√ß√£o t√™xtil criada para controlar o repuxo em matrizes de alta densidade.",
    "summary": "Uso estrat√©gico de duas camadas de entretela (sobrepostas com sentidos de corte cruzados a 90¬∞) para impedir deforma√ß√µes em matrizes pesadas.",
    "definition": "A dupla entretela (Double Layering Stabilizer Technique) √© a metodologia fundamental de estabiliza√ß√£o onde duas folhas de entretela de bordado (geralmente rasg√°veis de 40g a 60g, ou uma camada de malha recort√°vel combinada com uma rasg√°vel) s√£o aplicadas sob o tecido no bastidor. A chave da t√©cnica consiste em cruzar o sentido das fibras n√£o-tecidas das duas folhas a um √¢ngulo de 90¬∞ (uma folha no sentido vertical e outra no horizontal), criando uma barreira bidirecional indeform√°vel que anula completamente as for√ßas de tra√ß√£o do ponto cheio e do ponto tatami.",
    "technicalDetails": "As entretelas n√£o-tecidas possuem maior resist√™ncia em uma dire√ß√£o (sentido longitudinal da m√°quina de fabrica√ß√£o). Ao sobrepor duas folhas com os sentidos cruzados a 90¬∞, a resist√™ncia √† deforma√ß√£o mec√¢nica aumenta em mais de 300% com ganho m√≠nimo de espessura.",
    "howItWorks": [
      "1. A bordadeira avalia a matriz: se ela possui mais de 15.000 pontos, √°reas grandes de ponto tatami ou contornos finos sobre fundo cheio.",
      "2. Corta duas folhas de entretela rasg√°vel de 50g.",
      "3. Gira a segunda folha a 90 graus em rela√ß√£o √† primeira (cruzando as tramas de fibra).",
      "4. Monta as duas folhas juntas no bastidor sob o tecido.",
      "5. A m√°quina de bordar (Brother, Janome, Bernina ou Sun Special) executa o bordado denso.",
      "6. As duas camadas sustentam as milhares de agulhadas sem rasgar prematuramente e sem deixar o tecido franzir.",
      "7. No final, as duas folhas s√£o rasgadas facilmente, uma de cada vez, deixando o avesso limpo e o tecido plano."
    ],
    "beginnerExplanation": "√â usar duas folhas de entretela juntas embaixo do tecido ao inv√©s de uma s√≥, colocando uma folha 'em p√©' e a outra 'deitada' cruzadas. Isso deixa a base bem firme e forte, impedindo que desenhos grandes e cheios de pontos enruguem a roupa ou furem a entretela antes do bordado terminar.",
    "applications": [
      "Bordados densos e pesados com mais de 15.000 pontos (bras√µes, logotipos cheios e flores grandes)",
      "Bordados em tecidos finos e moles que enrugam f√°cil (viscose, percal e seda)",
      "Bordados com contornos finos de satin que precisam casar perfeitamente sobre o preenchimento",
      "Preven√ß√£o do 'efeito sanfona' (enrugamento ao redor do bordado) ap√≥s a lavagem da pe√ßa"
    ],
    "commonErrors": [
      "Colocar apenas uma folha de entretela fina de 30g em um bordado de 25.000 pontos, fazendo a entretela rasgar no meio do bordado e estragar a pe√ßa",
      "Usar duas folhas de entretela recort√°vel muito grossa em fralda de beb√™, deixando o avesso duro como uma t√°bua de madeira",
      "Rasgar as duas camadas de entretela de uma s√≥ vez puxando com for√ßa, esticando os pontos do bordado"
    ],
    "troubleshootingTips": [
      "Para toalhas de banho e panos de prato com matrizes cheias, 2 camadas de entretela rasg√°vel de 50g cruzadas √© a f√≥rmula do sucesso garantido",
      "Para bodies de beb√™ e camisetas de malha, use 1 camada de entretela de malha recort√°vel colada no ferro + 1 camada de entretela rasg√°vel por baixo no bastidor",
      "Ao retirar a entretela no final, rasgue sempre uma folha de cada vez apoiando os dedos rente aos pontos"
    ],
    "dicaArtrelados": "O contorno do seu bordado est√° saindo fora do lugar ou o tecido est√° ficando enrugado em volta do desenho? Na pr√≥xima pe√ßa, coloque 2 folhas de entretela rasg√°vel cruzadas no bastidor: o tecido fica esticado como uma tela de pintura e o contorno fecha no mil√≠metro exato!",
    "voceSabia": "Usar duas entretelas m√©dias de 50g cruzadas √© muito mais eficiente para evitar enrugamento do que usar uma √∫nica entretela super grossa de 100g, porque o cruzamento das fibras a 90¬∞ bloqueia o repuxo em todas as dire√ß√µes!",
    "practicalExercise": "Rasgue uma folha de entretela com as m√£os no sentido do comprimento (veja como rasga f√°cil); agora tente rasgar no sentido da largura (veja como √© mais resistente). Agora junte duas folhas cruzadas e tente rasgar: sinta a for√ßa e estabilidade incr√≠vel dessa dupla!",
    "quickSummary": "Uso de duas camadas de entretela sobrepostas com fibras cruzadas a 90¬∞ para m√°xima sustenta√ß√£o em matrizes densas.",
    "relatedTerms": [
      "Backing (Estabilizador / Entretela de Base)",
      "Compensa√ß√£o de Repuxo",
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
      "ARTRELADOS. O Segredo da Dupla Entretela: Como Acabar de Vez com Enrugamentos e Contornos Fora do Lugar. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-055-dente-do-calcador-e-altura-de-flutuacao",
    "code": "D-055",
    "term": "Dente do Calcador e Altura de Flutua√ß√£o (Hopping Foot Clearance & Height Adjustment)",
    "level": "Intermedi√°rio üü°",
    "category": "Mec√¢nica & Ajustes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dens (sali√™ncia de apoio mec√¢nico) e fluctuare (mover-se em suspens√£o suave). Par√¢metro mec√¢nico de toler√¢ncia vertical do p√© calcador pulsante de bordar.",
    "summary": "Espa√ßamento milim√©trico calibrado (0.5mm a 1.5mm) entre a base do p√© calcador e o tecido no ponto morto inferior para evitar o esmagamento da pe√ßa.",
    "definition": "O dente do calcador e altura de flutua√ß√£o (Hopping Foot Clearance / Presser Foot Height) √© a dist√¢ncia milim√©trica livre existente entre a sola circular do p√© calcador de bordar (calcador pula-pula) e a superf√≠cie do tecido quando a barra da agulha atinge o ponto morto inferior (fundo da descida). Nas m√°quinas de bordar modernas (Brother s√©ries BP/Innov-is, Janome MC, Bernina e Sun Special), essa altura pode ser regulada eletronicamente no painel (ex: de 1.0mm a 4.0mm) ou mecanicamente por parafuso na barra, impedindo que o calcador esmague as felpas de toalhas grossas ou bata em mantas acolchoadas durante o deslocamento do bastidor.",
    "technicalDetails": "Calibra√ß√£o padr√£o de f√°brica para tecidos planos de algod√£o: 1.0mm a 1.5mm de folga. Para toalhas felpudas e mantas com R1/R2, a altura √© aumentada para 2.5mm a 3.5mm; para tecidos finos e sedas, √© reduzida para 0.5mm a 1.0mm a fim de evitar o efeito de flutua√ß√£o e vibra√ß√£o do tecido (Flagging).",
    "howItWorks": [
      "1. A bordadeira prepara uma toalha de banho espessa ou uma capa acolchoada de caderneta de vacina√ß√£o.",
      "2. Acessa o menu de 'Configura√ß√µes de Bordado' na tela touchscreen da sua m√°quina (Brother, Janome ou Bernina).",
      "3. Localiza a op√ß√£o 'Altura do Calcador / Embroidery Foot Height'.",
      "4. Eleva o valor de 1.5mm (padr√£o) para 2.5mm ou 3.0mm.",
      "5. A m√°quina de bordar ajusta o motor de passo interno da barra do calcador.",
      "6. Durante o bordado, o calcador pula suavemente sobre as felpas sem prensar nem arranhar o tecido.",
      "7. O bastidor se desloca livremente sem ru√≠dos secos de atrito e sem travar os motores.",
      "8. Ao voltar para uma camiseta fina de algod√£o, a bordadeira retorna a altura para o padr√£o (1.5mm)."
    ],
    "beginnerExplanation": "√â a regulagem na tela da m√°quina que decide a que altura o 'pezinho de ferro' vai ficar flutuando em cima do tecido enquanto borda. Se for uma toalha grossa ou uma manta fofa de beb√™, voc√™ manda o pezinho ficar um pouquinho mais alto para ele deslizar por cima sem amassar e sem dar tranco no bastidor!",
    "applications": [
      "Bordados em toalhas de banho aveludadas sem esmagar as felpas nem deixar marcas de risco",
      "Bordados em mantas acolchoadas de beb√™ com manta acr√≠lica (R1 e R2)",
      "Bordados com placa de EVA 3D em relevo alto sem amassar a espuma de borracha",
      "Elimina√ß√£o do efeito de tecido vibrando (Flagging) em tecidos finos e sedas"
    ],
    "commonErrors": [
      "Deixar o calcador na altura m√≠nima (1.0mm) ao bordar toalhas felpudas grossas, fazendo o pezinho bater nas felpas e desalinhar o bastidor",
      "Deixar o calcador muito alto (4.0mm) em malhas finas, fazendo o tecido subir junto com a agulha e embolar a linha embaixo",
      "Tentar dobrar ou entortar o p√© calcador de metal com alicate para tentar alterar a altura manualmente"
    ],
    "troubleshootingTips": [
      "Nas m√°quinas Brother BP e PE, entre nas configura√ß√µes da tela e ajuste a 'Altura do P√© Calcador' para 2.5mm ou 3.0mm em pe√ßas grossas",
      "Nas m√°quinas Janome MC500E/550E, ajuste a folga do calcador no menu de regulagem da lan√ßadeira",
      "Se voc√™ ouvir um som de 'estalo de pl√°stico' toda vez que a m√°quina anda em uma toalha, o calcador est√° muito baixo e batendo no tecido"
    ],
    "dicaArtrelados": "Vai bordar toalha de banho bem grossa ou manta de beb√™ na sua Brother ou Janome? N√£o deixe o pezinho esmagar o tecido! Entre no menu da m√°quina e aumente a Altura do Calcador para 2.5mm ou 3.0mm: o pezinho vai flutuar macio como uma pluma e o bordado fica impec√°vel!",
    "voceSabia": "O calcador de bordar pula cerca de 700 a 850 vezes por minuto durante o bordado, e o momento em que ele toca o tecido dura menos de 30 milissegundos a cada ponto!",
    "practicalExercise": "Coloque uma toalha grossa no bastidor e gire o volante com a m√£o: observe o momento em que a agulha desce e veja a folga entre a sola do calcador e a felpa da toalha. Altere a altura na tela da m√°quina e repita o movimento para ver o pezinho flutuando mais alto com espa√ßo livre!",
    "quickSummary": "Ajuste manual ou eletr√¥nico da altura de flutua√ß√£o do p√© calcador que evita atrito em tecidos grossos e vibra√ß√£o em tecidos finos.",
    "relatedTerms": [
      "Calcador de Bordado / Calcador Pula-Pula",
      "Barra de Press√£o e Regulador do Calcador",
      "Alavanca do Calcador",
      "Efeito Flutua√ß√£o do Tecido (Flagging)"
    ],
    "tags": [
      "d-055",
      "altura do calcador",
      "calcador pula-pula",
      "flutua√ß√£o",
      "brother",
      "janome",
      "bernina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Innov-is & BP Series Embroidery Foot Height & Clearance Calibration Guide. Nagoya, 2022.",
      "JANOME. Memory Craft Presser Foot Clearance & Fabric Thickness Guide. Tokyo, 2023.",
      "ARTRELADOS. O Pulo do Gato do Calcador: Como Regular a Altura Para Bordar Toalhas e Mantas Sem Trancos. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-056-deslocamento-por-queda-de-energia-retomada-de-ponto",
    "code": "D-056",
    "term": "Deslocamento por Queda de Energia e Retomada de Ponto (Power Failure Recovery & Stitch Memory Resume)",
    "level": "Fundamental üü¢",
    "category": "Opera√ß√£o da M√°quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dislocare (mover de posi√ß√£o) e recuperare (recuperar coordenada gravada). Sistema de mem√≥ria n√£o-vol√°til (EEPROM/Flash) introduzido na eletr√¥nica de bordadeiras nos anos 2000.",
    "summary": "Recurso inteligente de seguran√ßa que grava a coordenada exata do √∫ltimo ponto na mem√≥ria, permitindo retomar o bordado perfeitamente ap√≥s queda de luz.",
    "definition": "O sistema de retomada ap√≥s queda de energia (Power Failure Resume & Stitch Recovery System) √© o recurso eletr√¥nico de prote√ß√£o e seguran√ßa operacional incorporado na placa-m√£e das m√°quinas de bordar modernas (Brother s√©ries BP/PE/NV, Janome MC500E/550E, Bernina e Sun Special). Caso ocorra uma queda repentina de energia el√©trica, desligamento acidental do cabo ou parada de emerg√™ncia no meio de uma matriz de 30.000 pontos, a mem√≥ria n√£o-vol√°til da m√°quina salva o n√∫mero exato do ponto e as coordenadas cartesianas (X/Y). Ao religar a m√°quina, o sistema pergunta: 'Deseja retomar o bordado anterior?', retornando o bastidor exatamente para o ponto de parada sem perder a pe√ßa.",
    "technicalDetails": "Grava√ß√£o instant√¢nea em chip Flash EEPROM a cada bloco de pontos. A bordadeira pode ainda utilizar os bot√µes de avan√ßo e recuo de pontos (+/- 1, 10, 100 pontos) na tela para retroceder cerca de 5 a 10 pontos antes do local da parada, garantindo que n√£o fique nenhum espa√ßo vazio ou falha na cobertura.",
    "howItWorks": [
      "1. A m√°quina est√° bordando uma matriz grande e complexa (ex: ponto 14.350 de 25.000).",
      "2. Falta energia el√©trica no bairro e a m√°quina se apaga instantaneamente.",
      "3. A bordadeira N√ÉO mexe no tecido nem retira o bastidor da m√°quina.",
      "4. Quando a energia el√©trica retorna, a bordadeira liga o interruptor da m√°quina.",
      "5. A tela touchscreen exibe a mensagem de seguran√ßa: 'O bordado anterior foi interrompido. Deseja retomar? [OK]'.",
      "6. A bordadeira clica em 'OK'; o pant√≥grafo se movimenta sozinho e posiciona a agulha na coordenada exata.",
      "7. No painel de navega√ß√£o de pontos, a bordadeira clica em '-10 pontos' para fazer uma pequena sobreposi√ß√£o de seguran√ßa.",
      "8. Aperta o bot√£o Start/Stop verde e o bordado continua normalmente, salvando a pe√ßa 100% perfeita!"
    ],
    "beginnerExplanation": "√â a 'mem√≥ria m√°gica' de salva√ß√£o da m√°quina de bordar! Se acabar a for√ßa na sua casa ou algu√©m trope√ßar no fio no meio de um bordado demorado, n√£o precisa entrar em p√¢nico: quando a luz voltar, voc√™ liga a m√°quina, aperta 'OK' na tela e ela volta sozinha exatamente no mesmo pontinho onde parou!",
    "applications": [
      "Salvamento de pe√ßas nobres e caras em caso de queda de energia ou blecaute no ateli√™",
      "Recupera√ß√£o de bordados ap√≥s desligamento acidental da m√°quina de bordar",
      "Retomada de bordados longos que foram pausados √† noite para continuar no dia seguinte",
      "Elimina√ß√£o de preju√≠zos com toalhas, jaquetas e uniformes perdidos por paradas el√©tricas"
    ],
    "commonErrors": [
      "Tirar o tecido de dentro do bastidor logo ap√≥s a queda de luz achando que perdeu a pe√ßa para sempre",
      "Puxar ou empurrar o carro do bastidor com for√ßa com as m√£os com a m√°quina desligada, descalibrando a posi√ß√£o salva",
      "Clicar em 'Cancelar / N√£o' na tela ao religar a m√°quina, apagando a mem√≥ria da coordenada salva"
    ],
    "troubleshootingTips": [
      "REGRA DE OURO: Acabou a luz? N√ÉO toque no bastidor e N√ÉO desmonte o tecido! Deixe tudo exatamente como est√° at√© a luz voltar!",
      "Ao religar e clicar em 'Retomar', use o bot√£o de '-10 pontos' na tela da m√°quina para fazer a agulha recuar alguns pontinhos e arrematar sem deixar emenda aparente",
      "Use sempre um bom filtro de linha ou estabilizador/nobreak para proteger a placa eletr√¥nica da sua m√°quina contra picos de tens√£o"
    ],
    "dicaArtrelados": "Faltou luz no meio do bordado? Calma, n√£o entre em desespero e N√ÉO tire a toalha do bastidor! A sua m√°quina Brother, Janome ou Bernina gravou o ponto exato na mem√≥ria! Quando a luz voltar, √© s√≥ ligar, apertar OK na tela e voltar 5 pontinhos para tr√°s: a pe√ßa fica t√£o perfeita que ningu√©m nunca vai saber que faltou luz!",
    "voceSabia": "As m√°quinas eletr√¥nicas modernas possuem um microcapacitor de emerg√™ncia na placa que armazena energia por 50 milissegundos ap√≥s o corte de luz, tempo suficiente para a CPU salvar as coordenadas na mem√≥ria flash antes de desligar por completo!",
    "practicalExercise": "Borde um retalho simples e desligue a m√°quina no bot√£o liga/desliga no meio da costura: ligue a m√°quina de novo e veja a tela perguntando se deseja retomar o bordado; aperte OK e assista o bastidor viajando sozinho de volta para o ponto exato!",
    "quickSummary": "Recurso de mem√≥ria que grava a coordenada do √∫ltimo ponto e permite retomar o bordado com perfei√ß√£o ap√≥s queda de luz.",
    "relatedTerms": [
      "Bot√£o Start/Stop e Opera√ß√£o Sem Pedal",
      "Carregamento de Matriz",
      "Correia Dentada do Pant√≥grafo e Eixo X/Y",
      "Opera√ß√£o da M√°quina"
    ],
    "tags": [
      "d-056",
      "queda de energia",
      "retomada",
      "mem√≥ria",
      "seguran√ßa",
      "brother",
      "janome",
      "bernina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Power Failure Recovery System & Stitch Memory Technical Guide. Nagoya, 2022.",
      "JANOME. Memory Craft Stitch Memory Resume Operations Guide. Tokyo, 2023.",
      "ARTRELADOS. Salva√ß√£o de Pe√ßas no Ateli√™: Como Retomar Bordados Ap√≥s Quedas de Energia Sem Deixar Marcas. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-057-dinamometro-textil-medidor-de-tensao-towa",
    "code": "D-057",
    "term": "Dinam√¥metro T√™xtil e Medidor de Tens√£o Towatec (Towa Bobbin & Top Thread Tension Gauge)",
    "level": "Avan√ßado üî¥",
    "category": "Mec√¢nica & Ajustes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego dynamis (for√ßa f√≠sica) e metron (medida de precis√£o). Instrumento de metrologia mec√¢nica de precis√£o desenvolvido pela empresa japonesa Towa Corporation para calibra√ß√£o de m√°quinas de bordar.",
    "summary": "Instrumento metrol√≥gico de precis√£o com mostrador num√©rico em gramas-for√ßa (gf) para aferir e calibrar a tens√£o exata da caixa de bobina e da linha superior.",
    "definition": "O dinam√¥metro t√™xtil (Medidor de Tens√£o Towa / Towatec Thread Tension Gauge) √© a ferramenta metrol√≥gica de precis√£o indispens√°vel para t√©cnicos e ateli√™s profissionais de bordado computadorizado. Composto por um alojamento para caixas de bobina (modelo TM-1 para caixa tipo L/classe 15 e TM-2 para caixa tipo M) com roldanas de precis√£o e um ponteiro de escala calibrada em gramas-for√ßa (0 a 50 gf para bobina; 0 a 300 gf para linha superior), permite medir numericamente a resist√™ncia de arraste do fio, eliminando achismos e regulagens 'no tato' da caixa de bobina em m√°quinas Brother, Janome, Bernina e Sun Special.",
    "technicalDetails": "Calibra√ß√£o padr√£o de tens√£o inferior (bobina): 20gf a 25gf para poli√©ster t√≠tulo 60. Calibra√ß√£o padr√£o de tens√£o superior (agulha): 100gf a 130gf para poli√©ster t√≠tulo 40. Permite padronizar rigorosamente a tens√£o em ateli√™s com m√∫ltiplas m√°quinas.",
    "howItWorks": [
      "1. A bordadeira ou t√©cnico retira a caixa de bobina da m√°quina com a bobina cheia instalada.",
      "2. Encaixa a caixa de bobina dentro do suporte do dinam√¥metro Towa.",
      "3. Passa a linha pelas roldanas de medi√ß√£o e pelo gancho do ponteiro de precis√£o.",
      "4. Puxa a ponta da linha em velocidade constante e suave.",
      "5. O ponteiro se desloca na escala indicando o valor real da tens√£o em gramas-for√ßa (ex: 22 gf).",
      "6. Se a leitura estiver em 15 gf (muito frouxa) ou 35 gf (muito apertada), ajusta-se o parafuso da caixa com chave de fenda microm√©trica at√© cravar nos 22 gf perfeitos.",
      "7. A caixa de bobina √© recolocada na m√°quina com precis√£o cient√≠fica absoluta."
    ],
    "beginnerExplanation": "√â um pequeno 'reloginho medidor' japon√™s super preciso onde voc√™ coloca a caixinha de bobina e puxa a linha: ele te mostra na hora, com um n√∫mero exato em gramas, se a linha de baixo est√° apertada demais ou frouxa demais, para voc√™ nunca mais ter que adivinhar a regulagem no olho!",
    "applications": [
      "Calibra√ß√£o milim√©trica da caixa de bobina para avessos de bordado 100% perfeitos",
      "Padroniza√ß√£o da mesma tens√£o id√™ntica em duas ou mais m√°quinas do ateli√™",
      "Ajuste fino para linhas especiais (metalizadas, poliamida, fios el√°sticos e de seda)",
      "Diagn√≥stico definitivo de desregulagens cr√¥nicas de ponto e la√ßadas soltas"
    ],
    "commonErrors": [
      "Puxar a linha no dinam√¥metro em trancos r√°pidos e violentos ao inv√©s de um movimento suave e cont√≠nuo",
      "Apertar o parafuso da caixa de bobina com chaves de fenda grandes inadequadas, espanando a fenda do parafuso microm√©trico",
      "Usar o dinam√¥metro com poeira ou fiapos de linha presos entre as roldanas de rolamento"
    ],
    "troubleshootingTips": [
      "A tens√£o ideal da bobina para m√°quinas dom√©sticas (Brother, Janome, Bernina) com linha de poli√©ster 60 √© entre 20 e 25 gramas-for√ßa (gf)",
      "Se n√£o tiver o dinam√¥metro Towa no in√≠cio, fa√ßa o 'teste da gota' (Drop Test): suspenda a caixa de bobina pela linha; ela deve descer suavemente apenas quando voc√™ der um leve toque com o pulso",
      "Gire o parafuso da caixa de bobina sempre em fra√ß√µes min√∫sculas (como se fosse 5 minutos no ponteiro de um rel√≥gio)"
    ],
    "dicaArtrelados": "O segredo dos t√©cnicos de m√°quinas para regular a caixinha de bobina sem errar nunca √© o medidor Towa! Regulou a bobina em 22 gramas e a linha de cima em 110 gramas, a sua m√°quina borda como seda e o avesso sai com o ter√ßo central branquinho mais perfeito do mundo!",
    "voceSabia": "O dinam√¥metro de tens√£o Towa foi inventado no Jap√£o na d√©cada de 1970 e at√© hoje √© a ferramenta padr√£o mundial obrigat√≥ria utilizada pelas f√°bricas da Brother, Janome e Tajima em suas linhas de montagem!",
    "practicalExercise": "Pegue a caixa de bobina da sua m√°quina com linha passada: segure a ponta da linha e solte a caixinha no ar; d√™ um leve tranco com o pulso para cima; observe se ela desce 2 a 3 cent√≠metros e para suavemente (tens√£o perfeita) ou se despenca at√© o ch√£o (tens√£o frouxa)!",
    "quickSummary": "Instrumento metrol√≥gico com escala num√©rica em gramas que afere e calibra a tens√£o exata da bobina e linha superior.",
    "relatedTerms": [
      "Ajuste de Tens√£o da Linha",
      "Caixa da Bobina",
      "Bobbin Case (Caixa de Bobina)",
      "Bloco Tensor e Discos de Tens√£o Superiores"
    ],
    "tags": [
      "d-057",
      "dinam√¥metro",
      "towa",
      "tens√£o",
      "calibra√ß√£o",
      "gramas-for√ßa",
      "mec√¢nica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA CORPORATION. Digital & Mechanical Tension Gauge Operation Manual TM-1 / TM-2. Tokyo, 2022.",
      "SUPERIOR THREADS. Calibrating Thread Tension with Towa Tension Gauges Master Guide. St. George, 2023.",
      "ARTRELADOS. A Ci√™ncia da Tens√£o Perfeita: Como Usar o Dinam√¥metro Towa Para Eliminar Erros de Ponto. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-058-digitalizacao-de-monogramas-e-micro-letras",
    "code": "D-058",
    "term": "Digitaliza√ß√£o de Monogramas e Letras em Alta Resolu√ß√£o (Embroidery Monogramming & Micro-Lettering Digitizing)",
    "level": "Avan√ßado üî¥",
    "category": "Programa√ß√£o de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego monos (√∫nico, inicial) e gramma (letra do alfabeto). Ramo especializado da digitaliza√ß√£o de matrizes focado na legibilidade de tipografias em escalas reduzidas.",
    "summary": "T√©cnica de programa√ß√£o de matrizes para letras pequenas (3mm a 6mm) com ajustes de compensa√ß√£o, densidade aliviada e underlay simplificado.",
    "definition": "A digitaliza√ß√£o de monogramas e micro-letras (Small Lettering & Monogram Digitizing) √© a disciplina t√©cnica especializada de cria√ß√£o e edi√ß√£o de matrizes de bordado voltada para a execu√ß√£o de tipografias em dimens√µes reduzidas (letras de 3mm a 6mm de altura, comuns em nomes de jalecos m√©dicos, bolsos e monogramas de enxovais). Exige par√¢metros de software exclusivos: substitui√ß√£o de underlays convencionais por linha de suporte central √∫nica (Center Run), redu√ß√£o de densidade (espa√ßamento alargado para 0.45mm a 0.50mm), aplica√ß√£o de compensa√ß√£o de repuxo refor√ßada (0.35mm) e uso de agulhas finas 65/9 ou 70/10 com linhas especiais t√≠tulo 60.",
    "technicalDetails": "As letras min√∫sculas em ponto cheio t√™m colunas muito estreitas (0.6mm a 1.0mm). Se a densidade for mantida no padr√£o normal (0.40mm), o ac√∫mulo de agulhadas corta o tecido e fecha os 'olhos' das letras como 'e', 'a', 'o' e 's'.",
    "howItWorks": [
      "1. A bordadeira seleciona ou digita o nome no software de bordado (Wilcom, PE-Design, Janome Digitizer ou Bernina).",
      "2. Escolhe fontes especializadas para micro-letras (Small Fonts / Micro Fonts) pr√©-digitalizadas com tra√ßos limpos.",
      "3. Ajusta o suporte (underlay) para uma √∫nica linha reta no centro (Center Walk).",
      "4. Aumenta a compensa√ß√£o de repuxo (Pull Compensation) para compensar o afundamento do fio no tecido.",
      "5. No cabe√ßote da m√°quina (Brother, Janome ou Bernina), instala uma agulha fina 65/9 ou 70/10 ponta aguda (Microtex).",
      "6. Utiliza linha mais fina (t√≠tulo 60) e entretela firme bem esticada.",
      "7. A m√°quina borda o nome com nitidez cir√∫rgica, onde cada letrinha de 4mm pode ser lida com perfei√ß√£o absoluta."
    ],
    "beginnerExplanation": "√â a t√©cnica de computador e m√°quina para conseguir bordar aqueles nominhos bem pequenininhos (como nomes de m√©dicos em jalecos ou iniciais em toalhinhas) sem que as letrinhas fiquem borradas, fechadas ou parecendo um borr√£o ileg√≠vel de linha.",
    "applications": [
      "Bordados de nomes e especialidades em jalecos m√©dicos, aventais e uniformes corporativos",
      "Monogramas nobres e elegantes em len√ßos, punhos de camisa e enxovais de beb√™",
      "Etiquetas personalizadas de tamanho e marca em pe√ßas de vestu√°rio",
      "Textos explicativos e logotipos com slogans pequenos em fardamentos"
    ],
    "commonErrors": [
      "Tentar diminuir uma fonte comum grande para 4mm de altura no programa, fazendo as pernas das letras ficarem com colunas microsc√≥picas que a agulha n√£o consegue costurar",
      "Usar agulha grossa (90/14) e linha comum grossa (t√≠tulo 40) para bordar letras de 4mm, transformando a letra 'e' e 'o' em bolinhas fechadas de linha",
      "Colocar suporte duplo (Edge Run + Zigzag) em letras min√∫sculas, criando um bolo duro de linha antes mesmo de come√ßar o ponto cheio"
    ],
    "troubleshootingTips": [
      "Para letras menores que 6mm, use SEMPRE agulha 65/9 ou 70/10 e linha fina de t√≠tulo 60 no cabe√ßote",
      "No PE-Design e Wilcom, utilize exclusivamente as fontes da categoria 'Small Fonts / Letras Pequenas'",
      "Desative o underlay de ziguezague e deixe apenas o 'Center Run' (suporte central) ativado para micro-letras"
    ],
    "dicaArtrelados": "Vai bordar nomes pequenos em jalecos ou fraldas e as letrinhas est√£o saindo fechadas e borradas? Use agulha 70/10 fininha, escolha uma fonte pr√≥pria para letras pequenas no seu programa e tire o excesso de suporte: as letras de 5mm v√£o sair t√£o n√≠tidas que parecem impressas no papel!",
    "voceSabia": "A menor letra j√° bordada com perfei√ß√£o leg√≠vel por uma m√°quina computadorizada media apenas 1.8 mil√≠metro de altura, utilizando agulha calibre 55/7 e linha de poli√©ster t√≠tulo 75 ultrafina!",
    "practicalExercise": "No seu software, digite um nome com 5mm de altura usando uma fonte normal e outro usando uma fonte 'Small Font': borde os dois lado a lado em um retalho com agulha 70/10 e compare a diferen√ßa brutal de legibilidade e beleza entre as duas!",
    "quickSummary": "T√©cnica de programa√ß√£o e costura de micro-letras (3mm a 6mm) com densidade aliviada e suporte central para m√°xima legibilidade.",
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "Compensa√ß√£o de Pux√£o (Pull Compensation)",
      "Agulha Microtex / Ponta Aguda Agu√ßada",
      "Branching / Ramifica√ß√£o Autom√°tica no Software"
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
      "ARTRELADOS. O Segredo das Letras Perfeitas em Jalecos: Como Bordar Nomes Pequenos com Nitidez Absoluta. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-059-desgaste-e-rebarba-de-agulha",
    "code": "D-059",
    "term": "Desgaste e Rebarba de Agulha (Needle Burr & Micro-Damage Detection)",
    "level": "Fundamental üü¢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim desgastare (consumir por fric√ß√£o cont√≠nua) e do franc√™s √©barbure (pequena ponta met√°lica cortante levantada por impacto). Principal causa de desfiamento de linhas em m√°quinas de costura e bordar.",
    "summary": "Microdeforma√ß√£o cortante na ponta ou no olho da agulha provocada por impactos leves contra a chapa ou bastidor que desfia a linha e quebra o fio.",
    "definition": "A rebarba de agulha (Needle Burr & Point Damage) √© o microdano mec√¢nico invis√≠vel a olho nu que ocorre na ponta agu√ßada, na canaleta longitudinal ou na borda interna do olho da agulha de bordado. √â causada pelo impacto microsc√≥pico da agulha contra a chapa de agulha, calcador ou aro do bastidor, ou pelo atrito prolongado com tecidos sint√©ticos abrasivos ap√≥s 8 a 10 horas de uso cont√≠nuo. A rebarba met√°lica atua como uma microsserra afiada, desfiando os filamentos da linha superior a cada subida e descida at√© provocar o rompimento do fio.",
    "technicalDetails": "Uma agulha de bordar perfura o tecido entre 40.000 e 50.000 vezes a cada hora de produ√ß√£o a 750 PPM. Vida √∫til recomendada de uma agulha de cromo padr√£o: 8 a 10 horas de trabalho efetivo (ou cerca de 500.000 a 1.000.000 de pontos).",
    "howItWorks": [
      "1. A m√°quina sofre um pequeno tranco ou a agulha raspa de leve na chapa met√°lica durante um salto.",
      "2. A ponta da agulha entorta 0.05mm ou levanta uma microfarpinha de a√ßo na borda do olho.",
      "3. A linha de bordar passa pelo olho da agulha mais de 30 vezes no mesmo cent√≠metro antes de formar o ponto.",
      "4. A rebarba raspa repetidamente na linha de poli√©ster a 750 PPM.",
      "5. A linha come√ßa a desfiar, abrindo pelinhos na frente do cabe√ßote.",
      "6. Em poucos segundos, o fio se rompe e a m√°quina para com aviso de 'Linha Superior Quebrada'.",
      "7. A bordadeira substitui a agulha por uma nova; a rebarba desaparece e a m√°quina volta a bordar suavemente sem quebras."
    ],
    "beginnerExplanation": "√â quando a pontinha da agulha fica 'machucada', tortinha ou com uma farpinha de ferro microsc√≥pica na ponta depois de bater de leve na chapa ou no aro. Essa farpinha funciona como uma serrinha que corta a linha de bordar toda hora. Trocar a agulha por uma nova resolve o problema em 1 minuto!",
    "applications": [
      "Diagn√≥stico definitivo de quebras constantes e inexplic√°veis de linha superior",
      "Elimina√ß√£o do desfiamento de fios de poli√©ster e arrebentamento de linhas met√°licas",
      "Preven√ß√£o de furos e rasgos nas fibras de malhas delicadas e sedas",
      "Manuten√ß√£o preventiva de rotina com troca regular de agulhas no ateli√™"
    ],
    "commonErrors": [
      "Bordar por semanas com a mesma agulha velha at√© ela quebrar fisicamente ao meio",
      "Tentar 'lixar' a ponta de uma agulha torta com lixa de unha ao inv√©s de colocar uma agulha nova",
      "N√£o perceber o barulho de 'tuc-tuc-tuc' seco e pesado que a agulha cega faz ao furar o tecido"
    ],
    "troubleshootingTips": [
      "O TESTE DA MEIA DE SEDA: Passe a ponta da agulha suavemente sobre uma meia fina de nylon velha; se a ponta puxar qualquer fiapinho, a agulha tem rebarba e deve ser jogada no lixo imediatamente!",
      "Troque a agulha da sua m√°quina a cada 8 a 10 horas de bordado (ou a cada 3 a 4 toalhas grandes bordadas)",
      "Se a linha come√ßar a desfiar repetidamente, n√£o perca tempo mexendo na tens√£o: troque a agulha primeiro!"
    ],
    "dicaArtrelados": "A linha come√ßou a desfiar e quebrar a cada 2 minutos e voc√™ j√° est√° perdendo a paci√™ncia? N√£o mexa em nenhum parafuso da m√°quina! 90% das quebras de linha s√£o causadas por uma agulha gasta ou com micro-rebarba invis√≠vel! Coloque uma agulha nova e veja a m√°quina voltar a bordar no mesmo segundo com a maior paz do mundo!",
    "voceSabia": "Uma agulha nova custa menos de 3 reais, mas uma agulha gasta com rebarba pode fazer voc√™ perder horas de trabalho e estragar uma toalha nobre de 80 reais!",
    "practicalExercise": "Pegue uma agulha que j√° foi muito usada no seu ateli√™ e passe a unha do polegar delicadamente de cima para baixo at√© a pontinha: sinta se a ponta 'engancha' na sua unha; agora compare com uma agulha nova tirada do pacote e sinta a diferen√ßa da ponta lisa e perfeita!",
    "quickSummary": "Microdeforma√ß√£o cortante na agulha que age como uma microsserra, desfiando e rompendo a linha superior.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Agulha de Tit√¢nio / Nitreto de Tit√¢nio",
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
      "ARTRELADOS. O Segredo da Agulha Perfeita: Como Detectar Rebarbas e Evitar Quebras de Linha no Ateli√™. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-060-distorcao-termica-em-entretela-termossoluvel",
    "code": "D-060",
    "term": "Distor√ß√£o T√©rmica em Entretela Termossol√∫vel e Limpeza a Seco (Thermal Backing Dissolution & Heat-Away Clean)",
    "level": "Intermedi√°rio üü°",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego therme (calor, energia t√©rmica) e do latim solvere (dissolver, desintegrar). Estabilizador sint√©tico termopl√°stico patenteado para remo√ß√£o sem uso de √°gua.",
    "summary": "Filme estabilizador especial que se desintegra em p√≥ seco e marrom ao contato com ferro de passar quente (140¬∞C a 160¬∞C), ideal para tecidos que n√£o podem ser molhados.",
    "definition": "A entretela termossol√∫vel (Heat-Away Film / Thermal Dissolving Stabilizer) √© o filme estabilizador sint√©tico transparente ou fosco confeccionado em pol√≠mero pl√°stico especial sens√≠vel a altas temperaturas. Ao contr√°rio da entretela hidrossol√∫vel (que exige lavagem com √°gua abundante para sair), a entretela termossol√∫vel mant√©m a sustenta√ß√£o mec√¢nica durante o bordado e se desintegra completamente em p√≥ seco ao receber o calor de um ferro de passar a seco ou prensa t√©rmica (entre 140¬∞C e 160¬∞C). √â a solu√ß√£o ideal para bordados em tecidos nobres que mancham com √°gua (veludos, sedas, couro ecol√≥gico, l√£s e panos de prato com barrados engomados).",
    "technicalDetails": "Temperatura de dissolu√ß√£o t√©rmica: 140¬∞C a 160¬∞C sem vapor (ferro a seco). Ao atingir a temperatura cr√≠tica, o filme perde a elasticidade, sofre pir√≥lise branda e se converte em microflocos secos que s√£o facilmente escovados com uma escovinha macia.",
    "howItWorks": [
      "1. A bordadeira monta o tecido delicado (ex: veludo ou seda) com a entretela termossol√∫vel no bastidor.",
      "2. A m√°quina (Brother, Janome, Bernina ou Sun Special) executa o bordado com firmeza total.",
      "3. A pe√ßa √© retirada do bastidor e o excesso de filme pl√°stico ao redor do bordado √© rasgado com a m√£o.",
      "4. A bordadeira aquece o ferro de passar a seco na temperatura 'L√£/Algod√£o' (sem vapor).",
      "5. Pressiona o ferro em movimentos circulares sobre o avesso do bordado por 5 a 10 segundos.",
      "6. A entretela termossol√∫vel se esfarela instantaneamente em pequenos flocos secos.",
      "7. Passa-se uma escovinha macia de roupa e todo o res√≠duo cai na bancada, deixando o bordado limpo, macio e 100% seco."
    ],
    "beginnerExplanation": "√â um pl√°stico estabilizador especial para usar embaixo ou em cima de tecidos finos que voc√™ N√ÉO quer molhar com √°gua (como veludo, seda ou couro). Depois de bordar, voc√™ s√≥ encosta o ferro de passar quente e o pl√°stico vira um pozinho seco na hora: √© s√≥ passar uma escovinha que sai tudo sem precisar lavar a pe√ßa!",
    "applications": [
      "Bordados em tecidos nobres e sens√≠veis √† √°gua (veludo, seda pura, camur√ßa, l√£ e couro sint√©tico)",
      "Bordados em rendas richelieu e pe√ßas que precisam ser entregues secas e prontas na hora",
      "Estabiliza√ß√£o de toalhas e panos de prato sem necessidade de m√°quina de lavar para entrega r√°pida",
      "Substitui√ß√£o da entretela hidrossol√∫vel em pe√ßas que mancham se forem umedecidas"
    ],
    "commonErrors": [
      "Usar ferro com vapor ligado, fazendo o pl√°stico derreter e grudar como cola l√≠quida no tecido",
      "Usar ferro em temperatura baixa demais (menos de 120¬∞C), n√£o atingindo o ponto de quebra do filme",
      "Deixar o ferro parado no mesmo ponto por muito tempo, queimando a linha de poli√©ster"
    ],
    "troubleshootingTips": [
      "Use SEMPRE o ferro de passar em modo SECO (desligue o vapor e esvazie o reservat√≥rio de √°gua)",
      "Coloque um peda√ßo de tecido de algod√£o fino ou papel manteiga entre o ferro e o bordado para proteger a pe√ßa",
      "Remova os res√≠duos de p√≥ com uma escovinha de cerdas macias de roupas ou fita adesiva leve"
    ],
    "dicaArtrelados": "Precisa entregar um bordado urgente em veludo ou seda e n√£o pode molhar a pe√ßa com √°gua de jeito nenhum? Use a entretela termossol√∫vel: encostou o ferro quente a seco, ela vira p√≥ e sai na escovinha em 10 segundos! A cliente recebe a pe√ßa seca, limpa e cheirosa na hora!",
    "voceSabia": "A entretela termossol√∫vel foi desenvolvida na Alemanha para a confec√ß√£o de vestidos de noiva de alta-costura, onde as rendas bordadas em fios de ouro n√£o podiam entrar em contato com √°gua para n√£o perder o brilho met√°lico!",
    "practicalExercise": "Coloque um peda√ßo de entretela termossol√∫vel em um retalho: encoste a ponta do ferro de passar seco e quente por 5 segundos; observe o pl√°stico encolhendo e se transformando em p√≥ seco soltinho que sai com um simples sopro!",
    "quickSummary": "Filme estabilizador que se desintegra em p√≥ seco com o calor do ferro, ideal para tecidos que n√£o podem ser molhados.",
    "relatedTerms": [
      "Entretela Hidrossol√∫vel",
      "Backing (Estabilizador / Entretela de Base)",
      "Acabamento & Limpeza de Bordado",
      "Blower / Soprador T√©rmico e Pistola de Ar Quente"
    ],
    "tags": [
      "d-060",
      "termossol√∫vel",
      "heat-away",
      "estabilizador",
      "ferro quente",
      "sem √°gua",
      "veludo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GUNOLD. Heat-Away & Specialty Thermal Dissolving Stabilizers Manual. Kenzingen, 2022.",
      "MADEIRA. Chemical & Thermal Backing Processing in High-End Embroidery. Freiburg, 2023.",
      "ARTRELADOS. O Segredo da Entretela Termossol√∫vel: Como Fazer Limpeza a Seco em Tecidos Delicados. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-061-deslocamento-do-eixo-y-troca-de-bobina-estacionamento",
    "code": "D-061",
    "term": "Deslocamento do Eixo Y na Troca de Bobina e Posi√ß√£o de Estacionamento (Park Position & Hoop Clearance Shift)",
    "level": "Fundamental üü¢",
    "category": "Opera√ß√£o da M√°quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do ingl√™s park position (posi√ß√£o de estacionamento seguro do carro do bastidor) e do latim axis (eixo cartesiano Y de profundidade). Fun√ß√£o ergon√¥mica de software presente nas m√°quinas modernas.",
    "summary": "Comando na tela da m√°quina que move o bastidor para tr√°s ou para frente, liberando espa√ßo amplo para trocar a bobina ou cortar linhas sem tirar o bastidor.",
    "definition": "O deslocamento do eixo Y para troca de bobina (ou Posi√ß√£o de Estacionamento do Bastidor / Hoop Clearance Shift / Park Position) √© a fun√ß√£o operacional presente nos menus de controle das m√°quinas de bordar dom√©sticas (Brother s√©ries BP/PE/Innov-is, Janome MC500E/550E e Bernina). Com um simples toque em um √≠cone no visor touchscreen, a m√°quina movimenta o carro do pant√≥grafo no eixo Y para a posi√ß√£o extrema traseira ou dianteira do trilho, afastando o aro do bastidor para longe da chapa de agulha e permitindo abrir a tampa da lan√ßadeira, trocar a bobina ou recortar tecidos de aplique com tesoura de ponta curva sem precisar desencaixar o bastidor da m√°quina.",
    "technicalDetails": "Deslocamento milim√©trico com mem√≥ria de retorno absoluto. Ao clicar novamente no bot√£o ap√≥s a troca da bobina, o pant√≥grafo retorna com precis√£o de ¬±0.01mm exatamente para a coordenada de costura sem perda de alinhamento.",
    "howItWorks": [
      "1. A m√°quina avisa na tela que a linha da bobina acabou no meio de uma toalha grande no bastidor 13x18cm ou 20x30cm.",
      "2. A bordadeira clica no √≠cone de 'Troca de Bobina / Mover Bastidor' na tela da m√°quina.",
      "3. O bra√ßo do bastidor viaja suavemente para tr√°s, deixando a chapa de agulha e a caixinha de bobina totalmente livres e desobstru√≠das.",
      "4. A bordadeira abre a tampa acr√≠lica da lan√ßadeira com facilidade e insere a nova bobina cheia em 5 segundos.",
      "5. Clica no bot√£o de 'Retorno' na tela touchscreen.",
      "6. O bastidor retorna com precis√£o matem√°tica para a coordenada exata do bordado.",
      "7. Aperta o bot√£o Start/Stop verde e continua a costura com produtividade m√°xima."
    ],
    "beginnerExplanation": "√â um bot√£ozinho na tela da sua m√°quina que faz o bastidor andar para tr√°s sozinho e 'abrir espa√ßo' para voc√™ conseguir abrir a tampinha e trocar a bobina de baixo (ou cortar um tecidinho de aplique) bem confort√°vel com a m√£o, sem ter que tirar o bastidor da m√°quina e correr o risco de desalinhar o bordado!",
    "applications": [
      "Troca r√°pida e confort√°vel da bobina inferior em bastidores grandes (13x18cm, 16x26cm, 20x30cm)",
      "Recorte de sobras de tecido em t√©cnicas de aplique com tesoura de pato (Duckbill) diretamente na m√°quina",
      "Posi√ß√£o de estacionamento seguro para guardar ou transportar a m√°quina de bordar",
      "Limpeza r√°pida de fiapos de linha na chapa de agulha sem desmontar a montagem"
    ],
    "commonErrors": [
      "Desencaixar o bastidor da m√°quina com for√ßa toda vez que a bobina acaba, correndo o risco de bater e entortar o pant√≥grafo",
      "Tentar enfiar a m√£o embaixo de bastidores grandes para trocar a bobina no escuro e entortar o aro de pl√°stico",
      "Desligar a m√°quina com o bastidor na posi√ß√£o de estacionamento sem salvar a coordenada de retorno"
    ],
    "troubleshootingTips": [
      "Nas m√°quinas Brother BP e PE, toque no √≠cone do 'Bastidor com Setas' na tela de bordado para afastar o bastidor na hora",
      "Nas m√°quinas Janome MC500E/550E, toque na tecla de 'Posi√ß√£o de Manuten√ß√£o / Hoop Shift'",
      "Nunca empurre o bastidor com as m√£os para abrir espa√ßo: use SEMPRE o comando eletr√¥nico na tela da m√°quina"
    ],
    "dicaArtrelados": "A bobina acabou no meio de uma toalha enorme no bastidor grande? N√£o tire o bastidor da m√°quina! Aperte o bot√£ozinho de 'Mover Bastidor' na tela: a m√°quina joga o bastidor l√° para tr√°s, voc√™ troca a bobina em 5 segundos, aperta voltar e ela continua bordando com alinhamento perfeito!",
    "voceSabia": "A fun√ß√£o de estacionamento do bastidor foi criada originalmente para as costuras de aplique, permitindo que a bordadeira corte o excesso de tecido com a tesourinha com as duas m√£os livres enquanto a m√°quina segura a pe√ßa im√≥vel!",
    "practicalExercise": "Com um bastidor montado na sua m√°quina, v√° na tela de bordado e procure o √≠cone de 'Mover Bastidor / Posi√ß√£o de Troca de Bobina': toque nele e veja a eleg√¢ncia do bastidor deslizando para tr√°s para te dar espa√ßo; toque novamente e veja-o voltando exatamente para o mil√≠metro onde estava!",
    "quickSummary": "Comando eletr√¥nico que afasta o bastidor no eixo Y para liberar espa√ßo confort√°vel para troca de bobina e apliques.",
    "relatedTerms": [
      "Caixa da Bobina",
      "Autodetec√ß√£o de Fim de Linha e Bobina",
      "Deslocamento do Pant√≥grafo (Pantograph Traverse / Carriage Movement)",
      "Carro da M√°quina de Bordado"
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
      "ARTRELADOS. Ergonomia e Velocidade no Ateli√™: Como Usar o Deslocamento de Bastidor Para Trocas R√°pidas de Bobina. S√£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-062-deflexao-da-agulha-needle-deflection",
    "code": "D-062",
    "term": "Deflex√£o da Agulha e Flex√£o El√°stica Din√¢mica (Needle Deflection & Needle Bend)",
    "pronunciation": "de-fle-xao da a-gu-lha",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Agulhas & Fios",
    "summary": "Desvio milim√©trico lateral ou longitudinal da haste da agulha durante a penetra√ß√£o em tecidos grossos ou em alta velocidade, causando quebras e colis√µes com a lan√ßadeira.",
    "origin": "Do latim 'deflectere' (desviar, curvar para fora do eixo). Fen√¥meno mecatr√¥nico e metal√∫rgico amplamente estudado na cutelaria t√™xtil alem√£ e japonesa para matrizes de alta densidade.",
    "definition": "A Deflex√£o da Agulha (Needle Deflection / Needle Dynamic Flexing) √© a deforma√ß√£o el√°stica e o desvio angular moment√¢neo que a l√¢mina da agulha sofre em rela√ß√£o ao seu eixo vertical perfeito no momento do impacto contra o tecido, entretela ou costuras sobrepostas. Quando a ponta da agulha penetra em materiais de alta resist√™ncia mec√¢nica (como jeans, sarja grossa de bon√©, couro sint√©tico ou camadas empilhadas de EVA 3D), a for√ßa de resist√™ncia do substrato empurra a ponta da agulha para os lados. Se a deflex√£o ultrapassar a folga de seguran√ßa (geralmente entre 0,05 mm e 0,10 mm), a agulha colide violentamente com o bico da lan√ßadeira ou com as bordas da chapa de ponto, resultando em quebra instant√¢nea, perda de sincronismo ou pontos pulados.",
    "technicalDetails": "A resist√™ncia √† deflex√£o √© determinada pela geometria do cabo, espessura da haste (calibre) e presen√ßa de refor√ßos estruturais (como a haste refor√ßada das agulhas DBxK5 ou Schmetz SERV 7). A for√ßa de deflex√£o aumenta exponencialmente com a velocidade de rota√ß√£o (SPM) e a espessura do tecido.",
    "howItWorks": [
      "1. A barra de agulha desce a agulha em alta acelera√ß√£o (at√© 1.000 PPM).",
      "2. A ponta da agulha encontra uma barreira de alta densidade mec√¢nica (ex: costura frontal de bon√© ou EVA r√≠gido).",
      "3. A haste fina da agulha sofre um esfor√ßo de flex√£o lateral e entorta ligeiramente para tr√°s ou para o lado.",
      "4. Ao atravessar o orif√≠cio da chapa, a agulha n√£o desce no centro exato do canal.",
      "5. Se a deflex√£o for excessiva, o bico da lan√ßadeira atinge o metal da agulha em vez de pescar a la√ßada de linha.",
      "6. O choque mec√¢nico quebra a agulha com estalo sonoro ou amassa o bico da lan√ßadeira.",
      "7. Se a agulha tiver haste refor√ßada (refor√ßo c√¥nico SERV 7), ela resiste √† flex√£o e desce em linha reta perfeita."
    ],
    "beginnerExplanation": "√â quando a agulha da m√°quina bate em um pano muito duro ou grosso (como a costura de um bon√© ou uma cal√ßa jeans) e 'entorta de leve' na hora de furar o tecido. Por entortar na descida, ela bate na pe√ßa de ferro de baixo da m√°quina (a lan√ßadeira) e quebra com um estalo!",
    "applications": [
      "Diagn√≥stico e preven√ß√£o de quebras de agulha em bordados pesados e bon√©s estruturados",
      "Bordados tridimensionais (3D Puff) com EVA de alta densidade",
      "Sele√ß√£o do calibre correto de agulha (ex: troca de 75/11 para 80/12 ou 90/14 com haste refor√ßada)",
      "Digitaliza√ß√£o com distribui√ß√£o gradual de pontos para suavizar o impacto em zonas duras"
    ],
    "commonErrors": [
      "‚ùå Borda tecidos pesados ou bon√©s r√≠gidos com agulhas finas 65/9 ou 75/11 de haste comum, que entortam na descida e quebram",
      "‚ùå Manter velocidade m√°xima de 1.000 PPM ao transitar sobre costuras grossas de sarja ou gorgur√£o",
      "‚ùå Usar bastidores frouxos onde o tecido salta (efeito tamborim frouxo), aumentando a deflex√£o angular da agulha"
    ],
    "troubleshootingTips": [
      "Se a agulha estiver quebrando toda vez que passa por cima de uma costura grossa: Instale uma agulha de haste refor√ßada (Schmetz SERV 7 ou Organ PD 80/12) e reduza a velocidade para 600 PPM",
      "Se a m√°quina estiver pulando pontos em tecidos sint√©ticos densos: Verifique se a agulha n√£o est√° flexionando para longe do bico da lan√ßadeira no momento da la√ßada",
      "Se a ponta da agulha apresentar arranh√µes laterais: A agulha est√° raspando na borda interna da placa de ponto devido √† deflex√£o"
    ],
    "dicaArtrelados": "Vai bordar bon√© ou jeans grosso? Use agulha com haste refor√ßada anti-deflex√£o (como a Schmetz SERV 7 ou Organ DBxK5 80/12 Tit√¢nio). O corpinho dela √© mais grosso e c√¥nico perto do topo, o que impede a agulha de entortar e garante que ela fure o tecido reto como uma flecha!",
    "voceSabia": "As agulhas com tecnologia SERV 7 possuem uma √°rea c√¥nica refor√ßada que oferece o dobro de rigidez mec√¢nica contra a deflex√£o do que uma agulha convencional do mesmo calibre, sem precisar aumentar o tamanho do furo no tecido!",
    "practicalExercise": "Pegue uma agulha 70/10 comum e tente empurrar a pontinha dela de lado com o dedo: sinta como ela verga f√°cil. Agora pegue uma agulha 80/12 SERV 7 de haste refor√ßada: sinta como ela √© incrivelmente firme e r√≠gida!",
    "quickSummary": "Desvio el√°stico moment√¢neo da agulha durante o impacto em tecidos grossos que causa quebras e desvios de sincronismo.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Bico da Lan√ßadeira",
      "Agulha de Tit√¢nio / Revestimento PD",
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
    "updatedAt": "2026-08-22",
    "letter": "D"
  },
  {
    "id": "d-063-desfiamento-de-linha-thread-fraying",
    "code": "D-063",
    "term": "Desfiamento de Linha e Separa√ß√£o de Filamentos (Thread Fraying & Filament Shredding)",
    "pronunciation": "des-fi-a-men-to de li-nha",
    "level": "Fundamental üü¢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Agulhas & Fios",
    "summary": "Abras√£o mec√¢nica ou atrito t√©rmico excessivo que rompe os microfilamentos da linha de bordar antes que ela consiga formar o ponto, criando 'ninhos' de fiapos no olho da agulha.",
    "origin": "Do latim 'disfilare' (separar os fios). Ocorr√™ncia cotidiana nos ateli√™s decorrente de incompatibilidade entre calibre de agulha, tens√£o ou qualidade da linha.",
    "definition": "O Desfiamento de Linha (Thread Fraying / Thread Shredding) √© o processo de degrada√ß√£o f√≠sica e abras√£o mec√¢nica cont√≠nua sofrido pelo fio superior de bordado ao passar repetidas vezes (de 20 a 40 vezes antes de ser definitivamente ancorado no tecido) atrav√©s do olho da agulha e dos discos de tens√£o. Quando a linha encontra arestas cortantes (burrs), olho de agulha muito apertado, atrito t√©rmico elevado ou tens√£o excessiva, os microfilamentos individuais que comp√µem o cabo de poli√©ster ou a l√¢mina met√°lica come√ßam a se romper e se amontoar em forma de bola de fiapos imediatamente acima do olho da agulha, at√© travar e quebrar a linha.",
    "technicalDetails": "Para linhas padr√£o de bordado 120/2 (40wt), a espessura da linha deve ocupar no m√°ximo 40% a 50% da abertura √∫til do olho da agulha. Se o olho estiver desgastado ou tiver micro-ranhuras causadas pelo uso cont√≠nuo de fios met√°licos, a taxa de cisalhamento dos filamentos aumenta em at√© 300%.",
    "howItWorks": [
      "1. A linha passa pelo olho da agulha para baixo e para cima dezenas de vezes em alta velocidade.",
      "2. Uma micro-rebarba no olho da agulha ou nos guias de linha come√ßa a raspar a superf√≠cie do fio.",
      "3. Os filamentos externos de poli√©ster ou a fita metalizada rompem-se e come√ßam a deslizar para tr√°s.",
      "4. Cria-se um pequeno tufo ou casulo de penugem acumulada sobre o olho da agulha.",
      "5. O tufo de fiapos fica grande demais para atravessar o tecido ou o orif√≠cio da placa de ponto.",
      "6. A linha √© estrangulada mec√¢nica e termicamente e parte-se por tra√ß√£o.",
      "7. A m√°quina detecta a quebra e aciona o sensor de parada."
    ],
    "beginnerExplanation": "√â quando a linha de bordar n√£o arrebenta de uma vez s√≥, mas come√ßa a 'esfiar' e formar uma bolinha de fiapos peludinhos bem em cima do buraquinho da agulha at√© a linha travar e arrebentar. Parece que a agulha est√° 'mastigando' a linha!",
    "applications": [
      "Identifica√ß√£o e diagn√≥stico de problemas de atrito nos tensores e passagens de fio",
      "Manuten√ß√£o preventiva de agulhas gastas com ranhuras microsc√≥picas",
      "Adequa√ß√£o de agulhas para linhas met√°licas e fios foscos de algod√£o",
      "Calibra√ß√£o da tens√£o da linha superior para evitar estiramento dos filamentos"
    ],
    "commonErrors": [
      "‚ùå Insistir em bordar com a mesma agulha depois que ela come√ßou a desfiar a linha, achando que o problema √© a marca da linha",
      "‚ùå Usar agulha de costura comum 70/10 com olho pequeno para bordar em alta velocidade com linha 40wt",
      "‚ùå Passar a linha por guias met√°licos enferrujados, sujos com cola spray seca ou com rebarbas",
      "‚ùå Borda em velocidade m√°xima de 1.000 PPM com linhas met√°licas secas e sem lubrificante"
    ],
    "troubleshootingTips": [
      "Se a linha come√ßar a esfiar e acumular fiapos no olho da agulha: Troque a agulha imediatamente por uma agulha nova pr√≥pria para bordado (com olho 2x maior) ou agulha Topstitch/Tit√¢nio",
      "Se o desfiamento ocorrer com linha met√°lica: Passe 2 gotas de silicone l√≠quido para linha no cone e use agulha Metallic tamanho 80/12 ou 90/14",
      "Se a linha estiver desfiando antes mesmo de chegar na agulha: Verifique se o cone de linha n√£o est√° com rebarbas pl√°sticas na base raspando o fio"
    ],
    "dicaArtrelados": "Linha esfiando como um espanadorzinho em cima da agulha? N√ÉO PERCA TEMPO: 95% das vezes √© a agulha que j√° deu o tempo de vida dela e criou uma micro-rebarba invis√≠vel no furinho! Coloque uma agulha nova e voc√™ vai ver a linha deslizar como manteiga!",
    "voceSabia": "Antes de um ponto ser fixado no tecido, cada pedacinho da linha de bordar sobe e desce pelo olho da agulha em m√©dia 35 vezes devido ao movimento alternado do estica-fio!",
    "practicalExercise": "Pegue uma agulha velha que desfiou linha e passe um peda√ßo de fio dental ou linha de costura pelo olho puxando para os lados com os olhos fechados: sinta com a sensibilidade dos dedos os 'degraus' e rebarbas que estavam cortando a sua linha!",
    "quickSummary": "Degrada√ß√£o e quebra de microfilamentos da linha por atrito excessivo com rebarbas ou olho inadequado de agulha.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Cera e Lubrificante de Linha / √ìleo de Silicone",
      "Ajuste de Tens√£o da Linha",
      "Linha de Poli√©ster 120/2"
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
    "updatedAt": "2026-08-22",
    "letter": "D"
  },
  {
    "id": "d-064-densidade-fracionada-e-pontos-curtos-short-stitch-filter",
    "code": "D-064",
    "term": "Densidade Fracionada e Filtro de Pontos Curtos (Fractional Density & Short Stitch Filter)",
    "pronunciation": "den-si-da-de fra-ci-o-na-da / pon-tos cur-tos",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "Algoritmo de processamento vetorial que recua as pontadas internas em cantos afiados e curvas fechadas para evitar concentra√ß√£o destrutiva de perfura√ß√µes de agulha.",
    "origin": "Do latim 'fractio' (divis√£o em fra√ß√µes) e do ingl√™s 'short stitch' (ponto curto). Recurso patenteado desenvolvido pela Wilcom e Tajima nos anos 1990 para digitaliza√ß√£o de precis√£o.",
    "definition": "A Densidade Fracionada com Filtro de Pontos Curtos (Fractional Stitch Density / Short Stitch Filtering / Corner Stitch Reduction) √© o algoritmo matem√°tico de controle de perfura√ß√£o que analisa a geometria de cantos vivos (pontas agudas em 'V'), curvas sinuosas e v√©rtices estreitos em colunas de ponto cheio (satim). Como os pontos de bordado convergem em dire√ß√£o ao v√©rtice, a densidade f√≠sica no ponto de encontro tenderia ao infinito, resultando em dezenas de perfura√ß√µes no mesmo mil√≠metro c√∫bico. O filtro fracionado encurta e omite alternadamente as penetra√ß√µes internas, recuando-as em 30% a 60% da largura da coluna, mantendo a cobertura visual sem perfurar o tecido em excesso.",
    "technicalDetails": "Configur√°vel no software de matrizes sob par√¢metros como 'Short Stitch Length' e 'Margin Threshold'. Em √¢ngulos inferiores a 45¬∞, o filtro elimina automaticamente at√© 50% dos pontos internos enquanto preserva a totalidade das penetra√ß√µes no raio externo do desenho.",
    "howItWorks": [
      "1. O programador cria uma forma vetorial com pontas afiadas (ex: as pontas de uma estrela ou a cauda de uma letra).",
      "2. O motor do software detecta o √¢ngulo agudo estreito no v√©rtice da coluna.",
      "3. O algoritmo de pontos curtos √© acionado automaticamente pelo software de bordado.",
      "4. Um ponto viaja at√© a borda externa, o ponto seguinte recua para 40% da coluna e o terceiro recua para 70%.",
      "5. A m√°quina executa o bordado suavemente sem concentrar agulhadas no mesmo local.",
      "6. A ponta fica n√≠tida, afiada, sem calombo endurecido no avesso e sem furar o tecido.",
      "7. A agulha n√£o sofre choque mec√¢nico e a linha n√£o arrebenta."
    ],
    "beginnerExplanation": "Sabe quando voc√™ vai bordar a pontinha de uma estrela ou um biquinho de tri√¢ngulo e a m√°quina fica batendo 15 vezes no mesmo buraquinho at√© cortar o tecido? O filtro de pontos curtos √© uma fun√ß√£o inteligente no programa que faz a m√°quina 'escalonar' os pontinhos para tr√°s, deixando a ponta perfeita e fininha sem judiar do tecido!",
    "applications": [
      "Pontas de estrelas, tri√¢ngulos, bras√µes corporativos e bicos geom√©tricos",
      "Serifas e caudas de letras tipogr√°ficas elegantes em monogramas",
      "Curvas de 90¬∞ a 180¬∞ em colunas satim sem ac√∫mulo de linha",
      "Preserva√ß√£o de tecidos finos e malhas contra rasgos em cantos pontiagudos"
    ],
    "commonErrors": [
      "‚ùå Desativar o filtro de pontos curtos nas propriedades do software para 'garantir cobertura', criando uma bola dura de linha no avesso",
      "‚ùå Usar recuos muito longos (acima de 80%), criando uma faixa de tecido vazia no meio da coluna satim",
      "‚ùå Digitalizar v√©rtices muito agudos (menos de 15¬∞) com ponto cheio em vez de finalizar em ponto de costura reto (Run Stitch)"
    ],
    "troubleshootingTips": [
      "Se a ponta da letra estiver fazendo um n√≥ duro que quebra a agulha: Acesse as propriedades de satim no Wilcom/Hatch e marque a caixa 'Pontos Curtos / Short Stitches' com espa√ßamento autom√°tico",
      "Se o bico da estrela furar o tecido: Reduza a densidade da ponta e ative o escalonamento fracion√°rio de pontos",
      "Se a ponta externa parecer falhada: Certifique-se de que os pontos de ancoragem externos continuam indo at√© o contorno vetorial"
    ],
    "dicaArtrelados": "Ao programar estrelas, bras√µes ou letras com pontas fininhas no computador: mantenha o recurso de 'Pontos Curtos' (Short Stitches) SEMPRE ativado! Suas pontas v√£o ficar finas, pontudinhas, brilhantes e nunca mais v√£o fazer calombos de linha ou rasgar o tecido!",
    "voceSabia": "Sem o filtro de pontos curtos, uma ponta de estrela de 30 graus com densidade padr√£o de 0.40mm acumula mais de 16 perfura√ß√µes de agulha em uma √°rea menor que a cabe√ßa de um alfinete!",
    "practicalExercise": "Digitalize um tri√¢ngulo com ponta bem fina em satim: primeiro sem pontos curtos e veja a nuvem densa de pontinhos azuis amontoados na ponta; agora ative o 'Short Stitch' e observe como os pontos se escalonam em degraus suaves e elegantes!",
    "quickSummary": "Algoritmo que recua alternadamente os pontos em v√©rtices e curvas fechadas para evitar n√≥s duros e furos no tecido.",
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "Auto-Spaced Satin",
      "Densidade de Pontos",
      "√Çngulo de Ponto (Stitch Angle)"
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
    "updatedAt": "2026-08-22",
    "letter": "D"
  },
  {
    "id": "d-065-digitalizacao-manual-punching",
    "code": "D-065",
    "term": "Digitaliza√ß√£o Manual / Cria√ß√£o Vetorial Ponto a Ponto (Manual Digitizing & Punching)",
    "pronunciation": "di-gi-ta-li-za-cao ma-nu-al / pan-ching",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programa√ß√£o de Bordado",
    "summary": "M√©todo artesanal e profissional de programa√ß√£o de matrizes onde o digitalizador desenha cada vetor, define o sentido das agulhadas e calibra manualmente o underlay e as compensa√ß√µes.",
    "origin": "Do ingl√™s 'punching' (furar cart√µes perfurados no tear Jacquard e nas primeiras m√°quinas de bordar autom√°ticas do s√©culo XIX) e do latim 'digitale' (feito com os dedos / digital).",
    "definition": "A Digitaliza√ß√£o Manual (Manual Digitizing / Professional Embroidery Punching) √© a arte e t√©cnica especializada de criar matrizes de bordado computadorizado a partir de ilustra√ß√µes ou logotipos vetoriais, na qual o programador de matrizes (Puncher / Digitizer) desenha manualmente cada bloco de objeto, define a ordem cronol√≥gica exata de costura, seleciona os tipos de pontos adequados (tatami, satim, costura reta), direciona as linhas de fluxo e √¢ngulos de ponto, programa os pontos estruturais de base (underlays) e aplica compensa√ß√µes matem√°ticas de encolhimento espec√≠ficas para o tecido em que a pe√ßa ser√° confeccionada.",
    "technicalDetails": "Diferencia-se fundamentalmente da 'Auto-Digitaliza√ß√£o' (Auto-Digitizing / Varinha M√°gica autom√°tica dos softwares), que gera excesso descontrolado de pontos, cortes desnecess√°rios e aus√™ncia de camadas de suporte. A digitaliza√ß√£o manual produz matrizes com at√© 40% menos pontos, bordado macio, avesso limpo e zero quebra de linha.",
    "howItWorks": [
      "1. O programador importa a imagem de refer√™ncia em alta resolu√ß√£o no software de cria√ß√£o.",
      "2. Faz o planejamento mental da sequ√™ncia: o que est√° no fundo borda primeiro, o que est√° na frente borda por √∫ltimo.",
      "3. Desenha os blocos com ferramentas vetoriais de curvas de B√©zier respeitando a anatomia do desenho.",
      "4. Define a inclina√ß√£o exata dos √¢ngulos de ponto para criar reflexos de luz e relevo.",
      "5. Aplica camadas de sustenta√ß√£o (underlay) adequadas para a gramatura do tecido final.",
      "6. Insere conex√µes inteligentes (travamentos e pontos de salto planejados) para evitar cortes de linha excessivos.",
      "7. Testa o arquivo na m√°quina f√≠sica para validar a maciez e o caimento do bordado real."
    ],
    "beginnerExplanation": "√â o jeito profissional de criar matrizes no computador desenhando tudo com carinho e precis√£o, ponto por ponto, em vez de usar aquele bot√£o autom√°tico do programa que faz tudo torto e cheio de cortes de linha. Uma matriz digitalizada √† m√£o borda muito mais r√°pido, gasta menos linha e fica linda e macia no pano!",
    "applications": [
      "Logomarcas corporativas de alta fidelidade para camisas polo e uniformes",
      "Matrizes de enxoval de luxo infantil com pontos leves e avesso ultra limpo",
      "Bordados em relevo 3D, apliques e rendas nobres",
      "Otimiza√ß√£o de tempo e produtividade industrial em confec√ß√µes de grande escala"
    ],
    "commonErrors": [
      "‚ùå Confiar na ferramenta de 'Auto-Digitaliza√ß√£o' de um clique para bordar produtos comerciais de clientes",
      "‚ùå N√£o planejar a ordem de sobreposi√ß√£o das camadas, fazendo a m√°quina bordar um detalhe da frente e depois ter que voltar para o fundo",
      "‚ùå Deixar todos os objetos com o mesmo √¢ngulo reto de ponto (90¬∞), resultando em um bordado plano, sem brilho e sem profundidade visual"
    ],
    "troubleshootingTips": [
      "Se a matriz comprada pela internet estiver quebrando linha e cheia de cortes: Abra no software e redesenhe as conex√µes manualmente usando ponto de costura reto escondido (Run Stitch connection)",
      "Se o bordado parecer pesado e duro como papel√£o: Refa√ßa a digitaliza√ß√£o manual reduzindo a densidade para 0.42 mm e ajustando o underlay para uma camada √∫nica de tatami aberto",
      "Se os contornos ficarem desencaixados do preenchimento: Aumente a compensa√ß√£o de encolhimento manual para 0.35 mm no objeto de fundo"
    ],
    "dicaArtrelados": "O maior diferencial de uma bordadeira profissional de sucesso √© saber digitalizar manualmente! Fuja da digitaliza√ß√£o autom√°tica de um clique: desenhar cada pedacinho da matriz no Wilcom ou no Embird √© o que faz o seu bordado ter brilho de seda, avesso limpo e encantar qualquer cliente!",
    "voceSabia": "Nos anos 1970, antes dos computadores pessoais, a profiss√£o de 'Puncher' de bordado exigia furar fitas de papel cart√£o gigantescas com um teclado mec√¢nico e pedais pesados para programar cada coordenada X e Y da m√°quina de bordar!",
    "practicalExercise": "Escolha um desenho simples de uma ma√ß√£ com uma folha. Em vez de usar o bot√£o autom√°tico, pegue a ferramenta de desenho manual do seu software e crie a folha com √¢ngulo inclinado a 45¬∞ e a ma√ß√£ com √¢ngulo a 90¬∞. Borde e compare o brilho deslumbrante que os √¢ngulos manuais d√£o √† pe√ßa!",
    "quickSummary": "Cria√ß√£o profissional e artesanal de matrizes no computador desenhando cada vetor, √¢ngulo e suporte estrutural.",
    "relatedTerms": [
      "√Çngulo de Ponto (Stitch Angle)",
      "Compensa√ß√£o de Encolhimento (Pull Compensation)",
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
    "updatedAt": "2026-08-22",
    "letter": "D"
  },
  {
    "id": "d-066-dupla-face-bordado-clean-back",
    "code": "D-066",
    "term": "Dupla Face no Bordado Computadorizado (Clean Back & Reversible Embroidery)",
    "pronunciation": "du-pla fa-ce no bor-da-do",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Substantivo feminino composto.",
    "category": "T√©cnicas de Bordado",
    "summary": "M√©todo de execu√ß√£o e digitaliza√ß√£o especializado para pe√ßas transparentes ou com duas vistas, onde o avesso do bordado √© perfeitamente id√™ntico e limpo como a frente.",
    "origin": "Do latim 'duplus' e 'facies' (duas faces). Inspirado no c√©lebre bordado tradicional de dupla face chin√™s de Suzhou (Xiang embroidery) adaptado ao maquin√°rio computadorizado moderno.",
    "definition": "O Bordado Dupla Face Computadorizado (Clean Back Embroidery / Reversible Machine Embroidery) √© a t√©cnica avan√ßada de prepara√ß√£o, digitaliza√ß√£o e montagem no bastidor na qual a pe√ßa final apresenta um verso absolutamente limpo, est√©tico e sim√©trico, sem fios soltos, sem n√≥s aparentes, sem entretelas vis√≠veis e com a mesma cor e brilho da linha superior reproduzida na linha de bobina. √â a t√©cnica de excel√™ncia exigida para artigos nobres que exibem ambos os lados durante o uso, como toalhas de lavabo nobres, xales transparentes de organza, guardanapos de linho, cortinas, v√©us e bandeiras comemorativas.",
    "technicalDetails": "Requer o uso de linha de bordar id√™ntica (mesma cor e mesmo fio 40wt de poli√©ster ou seda) tanto no cone superior quanto na bobina inferior. Utiliza-se entretela hidrossol√∫vel de filme sol√∫vel em √°gua (Solvy) que desaparece completamente ap√≥s a lavagem, deixando o avesso do tecido 100% livre de res√≠duos sint√©ticos.",
    "howItWorks": [
      "1. A bordadeira enche a bobina da m√°quina com a mesma linha de bordado colorida usada no carretel de cima.",
      "2. O tecido (linho, cambraia ou toalha) √© montado no bastidor com entretela hidrossol√∫vel na frente e no verso.",
      "3. A tens√£o superior √© ajustada para equil√≠brio neutro 1:1 com a tens√£o inferior (sem puxar mais para baixo).",
      "4. A matriz programada deve conter pontos de amarra√ß√£o invis√≠veis embutidos sob os pr√≥prios pontos cheios.",
      "5. Os cortes de salto s√£o eliminados ou programados para caminhar por baixo de √°reas preenchidas.",
      "6. Ap√≥s o bordado, a pe√ßa √© enxaguada em √°gua corrente para dissolver toda a entretela.",
      "7. A pe√ßa seca exibindo uma frente e um verso igualmente belos e sem defeitos."
    ],
    "beginnerExplanation": "√â quando voc√™ borda uma toalha ou um guardanapo de linho e o verso do bordado fica t√£o perfeito, lindo e com a mesma cor da linha da frente que a pessoa nem sabe qual √© o lado certo e qual √© o lado do avesso! Nada de entretela branca colada nem fiapos soltos atr√°s!",
    "applications": [
      "Guardanapos de mesa posta e jogos americanos de linho puro",
      "Toalhas de lavabo e banho de alto luxo para presentes finos",
      "Bandeiras de cerim√¥nia, estandartes e fl√¢mulas com dupla visualiza√ß√£o",
      "V√©us de noiva, cortinas de voil e pe√ßas de vestu√°rio transparente"
    ],
    "commonErrors": [
      "‚ùå Usar linha de bobina branca comum de poli√©ster fino, deixando o avesso cheio de linhas brancas misturadas com a cor do bordado",
      "‚ùå Usar entretela rasg√°vel comum que fica presa no avesso e n√£o sai, estragando o visual da pe√ßa",
      "‚ùå Deixar saltos longos de linha atravessando o avesso do bordado",
      "‚ùå Tens√£o desregulada que puxa a linha da bobina para a frente do tecido"
    ],
    "troubleshootingTips": [
      "Se o verso estiver mostrando pontinhos brancos: Encha uma canelinha com a mesma linha de cima e calibre a tens√£o superior e inferior para ficarem perfeitamente equilibradas",
      "Se ficarem res√≠duos de entretela no avesso: Mergulhe a pe√ßa em uma vasilha com √°gua morna por 10 minutos para dissolver completamente a pel√≠cula hidrossol√∫vel",
      "Se o avesso estiver com pontas de linha arrepiadas: Fa√ßa o arremate manual das pontas com uma agulha de m√£o fina antes de molhar a pe√ßa"
    ],
    "dicaArtrelados": "Para fazer um guardanapo de linho chique com avesso perfeito: encha a bobina com a MESMA linha de bordar colorida do cone de cima e use entretela hidrossol√∫vel que some na √°gua. Seu cliente vai virar o guardanapo do avesso e ficar de boca aberta com a perfei√ß√£o!",
    "voceSabia": "Na China Imperial, as mestras bordadeiras de Suzhou criavam pe√ßas em seda transparente onde bordavam um gato de um lado e um cachorro do outro lado do mesmo tecido usando apenas uma √∫nica agulha manual!",
    "practicalExercise": "Encha uma bobina com linha de bordar azul royal igual ao seu cone superior. Monte um peda√ßo de tricoline branca com entretela hidrossol√∫vel e borde uma flor simples. Lave na torneira e veja a magia de ter um bordado com frente e verso id√™nticos!",
    "quickSummary": "T√©cnica que cria um bordado com avesso limpo e id√™ntico √† frente usando bobina colorida e entretela hidrossol√∫vel.",
    "relatedTerms": [
      "Entretela Hidrossol√∫vel",
      "Ajuste de Tens√£o da Linha",
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
    "updatedAt": "2026-08-22",
    "letter": "D"
  },
  {
    "id": "d-067-desbobinador-conico-rede-contencao-linha",
    "code": "D-067",
    "term": "Desbobinador C√¥nico e Rede de Conten√ß√£o de Linha (Thread Net & Cone Unwinder Sock)",
    "level": "Iniciante üü¢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Acess√≥rios e Insumos",
    "origin": "Do desenvolvimento de redes el√°sticas tubulares de poliamida na ind√∫stria t√™xtil para controlar o desbobinamento de fios sint√©ticos escorregadios e filamentos met√°licos.",
    "summary": "Redinha el√°stica protetora colocada sobre cones de linha de bordar para evitar que o fio despenque, forme la√ßos soltos na base e quebre por atrito na m√°quina.",
    "definition": "O Desbobinador C√¥nico e Rede de Conten√ß√£o de Linha (Thread Netting / Spool Sock) √© um acess√≥rio t√™xtil em malha tubular flex√≠vel que envolve o cone de linha de poli√©ster, viscose, fio met√°lico ou multifilamento, aplicando uma leve press√£o perim√©trica que impede que os enrolamentos de linha escorreguem para a base do cone (efeito cascata) antes de serem puxados pelo guia-fio superior.",
    "technicalDetails": "Essencial para cones do tipo King Spool (1.000m a 5.000m) e carret√©is cruzados (Cross-Wound), mantendo o √¢ngulo de sa√≠da vertical constante e eliminando varia√ß√µes repentinas no tensor superior que causam franzimento ou quebra.",
    "beginnerExplanation": "√â aquela 'meinha' ou redinha furadinha que a gente veste no cone de linha de bordar. Ela serve para a linha n√£o escorregar toda para o ch√£o ou ficar caindo no p√© do cone, evitando que a linha d√™ n√≥s e arrebente a agulha.",
    "howItWorks": [
      "1. A bordadeira veste a rede de conten√ß√£o no cone de linha de baixo para cima.",
      "2. Puxa a ponta da linha pelo topo aberto da redinha at√© o mastro guia-fio.",
      "3. A rede exerce uma conten√ß√£o suave enquanto o cone gira ou desbobina est√°tico.",
      "4. Fios escorregadios (como linha dourada met√°lica ou trilobal 100% poli√©ster) saem sem criar la√ßadas ca√≠das.",
      "5. A m√°quina borda em velocidade m√°xima sem paradas por travamento de cone."
    ],
    "applications": [
      "Uso indispens√°vel com fios met√°licos (dourado, prateado e furta-cor)",
      "Cones grandes de 4.000m ou 5.000m de poli√©ster em m√°quinas dom√©sticas e industriais",
      "Linhas finas de viscose ou fios de alta tor√ß√£o que enrolam no pr√≥prio eixo"
    ],
    "commonErrors": [
      "‚ùå Apertar a rede em excesso no topo do cone, travando a passagem da linha e aumentando a tens√£o a ponto de arrebentar o fio.",
      "‚ùå Deixar o cone de fio met√°lico solto sem rede, permitindo que a linha caia e se enrole no pino suporte do carretel.",
      "‚ùå Usar peda√ßos de rede rasgados que enroscam na linha durante o bordado."
    ],
    "troubleshootingTips": [
      "Se a linha estiver arrebentando a cada 2 minutos com fio met√°lico: Vista a redinha cobrindo do meio para baixo do cone e diminua a velocidade da m√°quina para 500 PPM.",
      "Se a linha estiver saindo muito dura da redinha: Corte a redinha na metade do comprimento para reduzir a press√£o el√°stica."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "Topstitch 90/14 ou Metallic Needle 80/12",
      "stabilizer": "Adequada ao tecido",
      "speedPPM": "500 a 700 PPM para fios met√°licos com rede"
    },
    "dicaArtrelados": "Ao bordar com linha met√°lica dourada ou prateada, vista a redinha cobrindo todo o cone e passe uma gota de silicone l√≠quido t√™xtil na rede! A linha deslizar√° como seda, sem arrebentar nenhuma vez!",
    "voceSabia": "A maioria dos fabricantes de m√°quinas multiagulhas e linhas premium (como Madeira e Gutermann) inclui pacotes de redes de conten√ß√£o originais na caixa de acess√≥rios b√°sicos da m√°quina.",
    "practicalExercise": "Pegue um cone de linha met√°lica e puxe a ponta sem a rede: repare como a linha cai e se enrola. Agora coloque a rede de conten√ß√£o e puxe novamente: veja como o fio sai perfeitamente alinhado e controlado!",
    "quickSummary": "Rede el√°stica tubular colocada sobre o cone de linha para evitar o desmoronamento e enrosco de fios escorregadios e met√°licos.",
    "relatedTerms": [
      "Carretel de Linha",
      "Desbobinamento de Linha e Sentido do Fio",
      "Ajuste de Tens√£o da Linha",
      "Cera e Lubrificante de Linha / √ìleo de Silicone L√≠quido"
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
    "updatedAt": "2026-08-24",
    "letter": "D"
  },
  {
    "id": "d-068-deslocamento-gradual-ponto-angulo-curvatura",
    "code": "D-068",
    "term": "Deslocamento Gradual de Ponto em √Çngulo / Curvatura de Ponto (Stitch Angle Shifting & Wave Effect)",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Programa√ß√£o de Bordado",
    "origin": "Do desenvolvimento de ferramentas de preenchimento inteligente de contorno complexo com linhas de dire√ß√£o m√∫ltiplas nos softwares Wilcom ES e Compucon.",
    "summary": "T√©cnica de programa√ß√£o que faz a dire√ß√£o dos pontos girar suavemente acompanhando a anatomia do desenho, criando reflexos de luz e movimento natural no fio.",
    "definition": "O Deslocamento Gradual de Ponto em √Çngulo (Curved Stitch Angles / Flowing Stitch Direction) √© o m√©todo avan√ßado de digitaliza√ß√£o de matrizes em que m√∫ltiplos √¢ngulos de inclina√ß√£o s√£o distribu√≠dos ao longo de um objeto sinuoso (como uma fita ondulada, corpo de animal, folha ou p√©tala de rosa), fazendo com que cada ponto siga a curvatura org√¢nica da forma em vez de manter uma dire√ß√£o fixa e est√°tica.",
    "technicalDetails": "Permite criar o efeito de gradiente √≥ptico de brilho (Sheen Gradient), j√° que o filamento de poli√©ster reflete a luz ambiente de acordo com o √¢ngulo em que est√° assentado sobre o tecido.",
    "beginnerExplanation": "Em vez de bordar tudo reto na mesma dire√ß√£o, os pontos v√£o fazendo a curva do desenho devagarzinho, como se fossem a pintura de um pincel. Quando a luz bate no bordado, a linha brilha e parece que o desenho est√° vivo e em movimento!",
    "howItWorks": [
      "1. O programador cria o contorno do objeto no software de matrizes.",
      "2. Em vez de definir apenas um √¢ngulo global, adiciona v√°rias 'linhas de dire√ß√£o de ponto' ao longo da curva.",
      "3. O software interpola matematicamente a transi√ß√£o angular entre cada linha guia.",
      "4. A m√°quina executa os pontos girando fra√ß√£o por fra√ß√£o de grau a cada batida de agulha.",
      "5. O resultado √© um preenchimento curvo perfeito, anat√¥mico e sem cantos duros."
    ],
    "applications": [
      "P√©talas de flores, folhas, ramos e arabescos cl√°ssicos",
      "Cabelos, pelos de animais e penas de p√°ssaros com aspecto hiper-realista",
      "Fitas decorativas, la√ßos, bandeiras ondulantes e letras cursivas grossas"
    ],
    "commonErrors": [
      "‚ùå Colocar linhas de √¢ngulo muito pr√≥ximas e em dire√ß√µes opostas repentinas, criando um ponto de cruzamento que forma um 'caro√ßo' duro na matriz.",
      "‚ùå N√£o ativar a compensa√ß√£o de repuxo adequada para objetos curvos, deixando frestas de tecido aparecendo nas dobras da curva."
    ],
    "troubleshootingTips": [
      "Se a linha estiver amontoando no lado interno da curva: Ative a op√ß√£o 'Pontos Curtos Autom√°ticos' (Auto Short Stitch) no menu do software para desbastar o raio interno.",
      "Se a curvatura parecer serrilhada: Aumente a quantidade de linhas de dire√ß√£o intermedi√°rias para suavizar a transi√ß√£o angular."
    ],
    "recommendedSettings": {
      "density": "0.40 mm a 0.42 mm",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela Rasga-F√°cil 80g",
      "speedPPM": "650 a 800 PPM"
    },
    "dicaArtrelados": "Ao criar folhas e p√©talas, nunca use um √∫nico √¢ngulo reto de 45¬∞! Adicione 3 linhas de √¢ngulo acompanhando a nervura central da folha. A diferen√ßa de brilho e realismo no bordado pronto √© simplesmente profissional!",
    "voceSabia": "O brilho caracter√≠stico das linhas de bordado de poli√©ster trilobal ocorre porque cada filamento tem se√ß√£o transversal triangular, funcionando como pequenos prismas que refletem a luz de acordo com o √¢ngulo do ponto!",
    "practicalExercise": "No seu software, desenhe uma letra 'S' em ponto cheio com √¢ngulo √∫nico de 90¬∞ e outra letra 'S' com √¢ngulos curvos acompanhando a letra. Borde as duas lado a lado e compare o brilho sob a luz do ateli√™!",
    "quickSummary": "Distribui√ß√£o de √¢ngulos vari√°veis que acompanham as curvas do desenho, criando reflexos de luz naturais e acabamento org√¢nico.",
    "relatedTerms": [
      "√Çngulo de Ponto (Stitch Angle)",
      "Curva B√©zier na Digitaliza√ß√£o",
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
    "updatedAt": "2026-08-24",
    "letter": "D"
  },
  {
    "id": "d-069-desativacao-ponto-curto-curvas-fechadas",
    "code": "D-069",
    "term": "Desativa√ß√£o de Ponto Curto em Curvas Fechadas (Short Stitch Inactivation in Acute Curves)",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programa√ß√£o de Bordado",
    "origin": "Do controle de par√¢metros algor√≠tmicos em digitaliza√ß√£o avan√ßada para gest√£o de furos na chapa e cortes de tecido em bordados finos.",
    "summary": "Configura√ß√£o no software que desabilita ou recalcula a filtragem de micropontos em curvas muito estreitas para preservar a cobertura total sem perfurar o tecido.",
    "definition": "A Desativa√ß√£o ou Calibra√ß√£o de Ponto Curto em Curvas Fechadas (Short Stitch Control / Custom Corner Stitch Filter) √© o ajuste t√©cnico nos par√¢metros de preenchimento em ponto cheio (Satin) que define se o software deve ou n√£o suprimir alternadamente os pontos internos de uma curva acentuada. Quando desativado ou calibrado com precis√£o, garante que √°reas delicadas (como pontas de folhas ou cantos de letras g√≥ticas) mantenham o contorno n√≠tido sem criar buracos no tecido por perfura√ß√£o repetida.",
    "technicalDetails": "Por padr√£o, o filtro de pontos curtos remove at√© 50% dos pontos no raio interno de uma curva para evitar ac√∫mulo. No entanto, em linhas muito finas (menores que 1.5 mm), essa filtragem pode deixar o tecido exposto, exigindo a desativa√ß√£o manual ou redu√ß√£o da porcentagem de filtragem para 20%.",
    "beginnerExplanation": "Quando a m√°quina faz uma curva bem fechadinha, ela pode dar muitas agulhadas no mesmo buraquinho e rasgar o tecido. Esse ajuste no computador decide se a m√°quina pula alguns pontinhos por dentro da curva para n√£o furar o pano, mantendo o desenho bonito e seguro.",
    "howItWorks": [
      "1. O programador identifica um objeto com curvas fechadas ou cantos agudos na matriz.",
      "2. Acessa as propriedades do objeto na aba 'Pontos Curtos / Short Stitches'.",
      "3. Avalia a largura da coluna: se for muito estreita, reduz o comprimento m√≠nimo do filtro.",
      "4. Define se o ponto curto ser√° alternado em 1:1, 1:2 ou desativado para aquele segmento espec√≠fico.",
      "5. O software gera a distribui√ß√£o perfeita de furos na chapa de agulha sem picotar o tecido.",
      "6. A pe√ßa borda com contorno liso e sem rasgos na borda."
    ],
    "applications": [
      "Letras pequenas com serifas ou detalhes g√≥ticos pontiagudos",
      "Contornos de olhos, bicos e detalhes em bordados realistas miniaturizados",
      "Bordados em tecidos delicados que picotam f√°cil (seda, cetim, organza e malha fina)"
    ],
    "commonErrors": [
      "‚ùå Deixar o filtro padr√£o de ponto curto ativado em colunas finas de 1 mm, resultando em pontas desdentadas e tecido aparente.",
      "‚ùå Desativar o filtro em colunas largas e pesadas de 6 mm, gerando ac√∫mulo de linha e quebra de agulha no v√©rtice interno."
    ],
    "troubleshootingTips": [
      "Se a curva fechada da letra estiver abrindo um buraco no tecido: Ative o ponto curto em n√≠vel alto (40%) e diminua a densidade do objeto.",
      "Se a ponta da letra estiver parecendo 'mordida' ou rala: Reduza o filtro de ponto curto para 15% ou desative-o apenas naquele objeto fino."
    ],
    "recommendedSettings": {
      "density": "0.38 mm a 0.40 mm",
      "needleType": "65/9 ou 75/11 Ponta Aguda Microtex",
      "stabilizer": "Entretela Rasga-F√°cil de boa sustenta√ß√£o",
      "speedPPM": "600 PPM em detalhes pequenos"
    },
    "dicaArtrelados": "Em fontes pequenas (menores que 8 mm de altura), configure a compensa√ß√£o de canto para 'Canto Inteligente' (Smart Corner) e ajuste o ponto curto para 20%! Suas letrinhas ficar√£o n√≠tidas e com as pontas perfeitamente desenhadas!",
    "voceSabia": "Sem o recurso de ponto curto, uma curva fechada de 90 graus em ponto cheio chegaria a concentrar at√© 12 perfura√ß√µes de agulha em um espa√ßo de apenas meio mil√≠metro, cortando o tecido como se fosse uma tesoura!",
    "practicalExercise": "Programe um tri√¢ngulo pontiagudo com ponto curto 0% e outro com ponto curto 50%. Aplique o simulador de pontos na tela com zoom m√°ximo e veja como o segundo distribui os furos suavemente ao longo do canto!",
    "quickSummary": "Controle algor√≠tmico no software que gerencia a quantidade de pontos no interior de curvas fechadas para evitar rasgos no tecido.",
    "relatedTerms": [
      "Compensa√ß√£o de Fra√ß√£o de Ponto e Ponto Curto Autom√°tico",
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
    "updatedAt": "2026-08-24",
    "letter": "D"
  },
  {
    "id": "d-070-densidade-progressiva-sombra-relevo-optico",
    "code": "D-070",
    "term": "Densidade Progressiva para Sombra e Relevo √ìptico (Progressive Shading Density)",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programa√ß√£o de Bordado",
    "origin": "Da fus√£o da t√©cnica de pintura de agulha (Thread Painting) com o controle param√©trico de densidade gradiente nos softwares modernos de matrizes.",
    "summary": "T√©cnica de programa√ß√£o onde a densidade varia gradualmente de fechada para aberta no mesmo objeto, criando transi√ß√£o de cor, luz, sombra e volume 3D.",
    "definition": "A Densidade Progressiva para Sombra e Relevo √ìptico (Gradient Density / Variable Stitch Pitch) √© a t√©cnica de digitaliza√ß√£o que programa um √∫nico objeto de preenchimento (Tatami ou Satin) com espa√ßamento de pontos din√¢mico, variando suavemente de uma √°rea densa e compacta (ex: 0.35 mm) at√© uma √°rea rarefeita e transl√∫cida (ex: 1.20 mm ou 2.0 mm). Essa varia√ß√£o permite misturar duas cores sobrepostas ou deixar o tecido de fundo transparecer, criando efeitos de luz, sombra e volume tridimensional sem cortes de linha.",
    "technicalDetails": "Permite curvas de acelera√ß√£o linear, exponencial ou senoidal na distribui√ß√£o de pontos, sendo fundamental para bordados realistas (animais, rostos, paisagens e frutas) e efeitos de metal polido.",
    "beginnerExplanation": "√â como fazer um sombreado no desenho usando l√°pis de cor: voc√™ aperta forte de um lado e vai soltando a m√£o devagarzinho para clarear. No bordado, a m√°quina d√° muitos pontinhos juntos onde √© escuro e vai afastando os pontos onde √© claro, criando uma pintura linda com relevo!",
    "howItWorks": [
      "1. O programador cria o primeiro objeto de base com densidade progressiva (ex: escuro embaixo clareando para cima).",
      "2. Cria um segundo objeto sobreposto com cor mais clara e densidade invertida (aberto embaixo fechando em cima).",
      "3. Os pontos das duas cores se intercalam perfeitamente no meio do caminho.",
      "4. A m√°quina borda primeiro a cor escura e depois a clara com o mesmo √¢ngulo de ponto.",
      "5. A fus√£o das duas cores cria um degrad√™ cont√≠nuo e sem emendas marcadas."
    ],
    "applications": [
      "Bordados realistas de rostos humanos, pelagem de animais e plumagem de aves",
      "Efeitos de brilho met√°lico em letras douradas, prata e bronze",
      "P√©talas de flores com transi√ß√£o suave do miolo para as bordas",
      "Logotipos modernos com est√©tica de gradiente de cor"
    ],
    "commonErrors": [
      "‚ùå Usar √¢ngulos de ponto diferentes nas camadas sobrepostas de degrad√™, quebrando a harmonia da mistura de fios.",
      "‚ùå Programar a transi√ß√£o com in√≠cio muito brusco, criando uma linha de corte vis√≠vel em vez de uma sombra suave.",
      "‚ùå Deixar a camada de cima com densidade muito pesada, cobrindo totalmente a cor de baixo."
    ],
    "troubleshootingTips": [
      "Se o degrad√™ ficou com uma faixa dura no meio: Aumente o comprimento da zona de transi√ß√£o no software e use o perfil de gradiente senoidal (suave).",
      "Se o tecido de fundo estiver aparecendo onde n√£o deveria: Coloque uma camada pr√©via de tatami leve de suporte sob a √°rea antes de iniciar o sombreado."
    ],
    "recommendedSettings": {
      "density": "Varia√ß√£o de 0.35 mm a 1.50 mm no mesmo objeto",
      "needleType": "75/11 Ponta Bola ou Microtex 70/10",
      "stabilizer": "Entretela Rasga-F√°cil dupla ou Malha Est√°vel",
      "speedPPM": "600 a 750 PPM"
    },
    "dicaArtrelados": "Para fazer efeito de ouro envelhecido ou brilho 3D em letras de bras√£o: programe a base com linha marrom em densidade progressiva de 0.40 mm a 1.0 mm e cubra com linha dourada em densidade invertida. O resultado parece joia reluzente!",
    "voceSabia": "A t√©cnica de densidade progressiva foi desenvolvida originalmente no Jap√£o para reproduzir a milenar t√©cnica de bordado manual 'Nihon Shishu' em m√°quinas computadorizadas Tajima e Barudan.",
    "practicalExercise": "Crie um quadrado no software com preenchimento tatami e ative o efeito 'Gradiente de Densidade' variando de 0.35 mm na esquerda at√© 1.20 mm na direita. Borde em linha vermelha sobre tecido branco e veja o lindo degrad√™ surgir!",
    "quickSummary": "Varia√ß√£o programada no espa√ßamento de pontos que cria sombras, luz e fus√£o de cores para efeito realista e tridimensional.",
    "relatedTerms": [
      "Degrad√™ de Pontos / Ponto Sombreado",
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
    "updatedAt": "2026-08-24",
    "letter": "D"
  },
  {
    "id": "d-071-dreno-eletricidade-estatica-maquinas-bordar",
    "code": "D-071",
    "term": "Dreno de Eletricidade Est√°tica em M√°quinas de Bordar (Static Electricity Grounding & Discharge)",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Manuten√ß√£o e Cuidados",
    "origin": "Da eletrot√©cnica aplicada a equipamentos industriais automatizados para prote√ß√£o de placas eletr√¥nicas e microprocessadores contra descargas eletrost√°ticas (ESD).",
    "summary": "Sistema e procedimentos de aterramento el√©trico para dissipar cargas est√°ticas geradas pelo atrito de linhas de poli√©ster e tecidos sint√©ticos em alta velocidade.",
    "definition": "O Dreno de Eletricidade Est√°tica (ESD Protection & Machine Grounding) √© o conjunto de medidas t√©cnicas de aterramento e descarga eletrost√°tica na carca√ßa, chapa de agulha e mastro guia-fio da m√°quina de bordar. O atrito constante de linhas 100% poli√©ster e tecidos sint√©ticos (como tactel, microfibra e nylon) em ambientes secos com ar-condicionado gera milhares de volts de eletricidade est√°tica que podem causar travamentos no painel LCD, descalibra√ß√£o do pant√≥grafo ou queima de sensores √≥pticos.",
    "technicalDetails": "Requer tomada com aterramento padr√£o (fio terra com resist√™ncia inferior a 5 ohms), controle de umidade relativa do ar no ateli√™ entre 45% e 60% e fios de cobre ou escovas de descarga est√°tica nos suportes de cone em linhas de alta produ√ß√£o.",
    "beginnerExplanation": "Quando voc√™ borda muito r√°pido com linha de poli√©ster em dia seco ou no ar-condicionado, a linha gera choque de eletricidade est√°tica. Se a m√°quina n√£o tiver um bom fio terra, esse choque pode fazer a tela digital piscar, travar no meio do bordado ou queimar uma plaquinha cara da m√°quina.",
    "howItWorks": [
      "1. Durante o bordado em alta rota√ß√£o (800 PPM), o atrito do fio de poli√©ster nos tensores gera cargas el√©tricas est√°ticas.",
      "2. As cargas acumulam na carca√ßa met√°lica e no pant√≥grafo da m√°quina.",
      "3. O sistema de aterramento conduz com seguran√ßa essa eletricidade para o solo pelo pino terra da tomada.",
      "4. Se o ateli√™ estiver muito seco, o uso de umidificador de ar ou spray antiest√°tico no suporte de linhas neutraliza as cargas.",
      "5. A eletr√¥nica da m√°quina opera com estabilidade total e sem bugs ou reinicializa√ß√µes involunt√°rias."
    ],
    "applications": [
      "Ateli√™s e f√°bricas climatizadas com ar-condicionado cont√≠nuo e clima seco",
      "Bordados em larga escala em tecidos sint√©ticos (tactel, oxford, nylon e soft)",
      "Prote√ß√£o de m√°quinas modernas com telas touchscreen e conex√£o Wi-Fi"
    ],
    "commonErrors": [
      "‚ùå Quebrar ou remover o terceiro pino (pino terra) do plugue da m√°quina para usar em tomadas antigas de dois furos.",
      "‚ùå Ligar a m√°quina de bordar na mesma extens√£o ou r√©gua de ferro de passar roupa a vapor, causando ru√≠do e surtos el√©tricos.",
      "‚ùå Deixar o ateli√™ com umidade abaixo de 30%, aumentando as fa√≠scas est√°ticas."
    ],
    "troubleshootingTips": [
      "Se a tela da m√°quina piscar ou reiniciar sozinha quando voc√™ toca no bastidor: Desligue imediatamente e providencie a instala√ß√£o de uma tomada com aterramento verdadeiro com eletricista.",
      "Se voc√™ estiver levando pequenos choques ao tocar na m√°quina: Coloque um tapete de borracha antiest√°tico no ch√£o onde a operadora trabalha e use umidificador de ambiente."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "N/A",
      "stabilizer": "N/A",
      "speedPPM": "Velocidade padr√£o com aterramento ativo"
    },
    "dicaArtrelados": "Nunca corte o pino terra da sua m√°quina de bordar! A placa m√£e e o visor touch custam caro para consertar. Um bom aterramento el√©trico no ateli√™ garante que sua m√°quina dure muitos anos sem dar nenhum susto nem queimar √† toa!",
    "voceSabia": "O simples movimento de desenrolar 1.000 metros de linha de poli√©ster em alta velocidade pode gerar uma carga est√°tica de mais de 10.000 volts, suficiente para danificar circuitos integrados de microprocessadores!",
    "practicalExercise": "Verifique a tomada onde sua m√°quina est√° ligada. Certifique-se de que o plugue tem os 3 pinos originais e teste se a tomada possui aterramento real com um testador de tomadas simples.",
    "quickSummary": "Procedimentos e aterramento el√©trico para eliminar cargas est√°ticas geradas pelo atrito de linhas sint√©ticas e proteger a eletr√¥nica da m√°quina.",
    "relatedTerms": [
      "Opera√ß√£o da M√°quina",
      "Manuten√ß√£o Preventiva",
      "Carca√ßa da M√°quina de Bordado",
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
    "updatedAt": "2026-08-24",
    "letter": "D"
  },
  {
    "id": "d-072-duplicacao-contorno-compensacao-sobreposicao",
    "code": "D-072",
    "term": "Duplica√ß√£o de Contorno com Compensa√ß√£o de Sobreposi√ß√£o (Contour Duplication with Overlap Compensation)",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programa√ß√£o de Bordado",
    "origin": "Das regras fundamentais de engenharia de digitaliza√ß√£o de matrizes para evitar frestas e deslocamentos de registro entre preenchimento e contorno final.",
    "summary": "T√©cnica de matriz que cria uma margem de seguran√ßa e sobreposi√ß√£o calculada entre o preenchimento de fundo e o contorno externo para que eles nunca se desencontrem.",
    "definition": "A Duplica√ß√£o de Contorno com Compensa√ß√£o de Sobreposi√ß√£o (Overlap Border Compensation / Registration Trapping) √© o procedimento t√©cnico executado no software de bordado em que o contorno de um objeto preenchido √© ligeiramente expandido para dentro da √°rea de preenchimento (sobreposi√ß√£o de 0.8 mm a 1.2 mm). Isso assegura que, mesmo com a tra√ß√£o mec√¢nica do tecido durante a costura (repuxo), o contorno final de ponto cheio ou ponto cord√£o cubra perfeitamente a borda do desenho sem deixar fendas de tecido cru aparentes.",
    "technicalDetails": "Diferencia-se da simples duplicata geom√©trica por aplicar compensa√ß√£o direcional de tra√ß√£o (Pull Compensation) apenas no eixo perpendicular √† dire√ß√£o do ponto, alinhando a sequ√™ncia de costura do centro para fora.",
    "beginnerExplanation": "Sabe quando voc√™ borda um desenho e o contorno preto de fora fica torto, saindo do lugar e deixando um espa√ßo em branco feio entre o desenho e o contorno? Essa t√©cnica faz o contorno 'entrar' um mil√≠metrozinho para dentro da cor de fundo, garantindo que o encaixe fique sempre perfeito, mesmo que o tecido puxe um pouco!",
    "howItWorks": [
      "1. O programador cria o objeto de preenchimento de fundo (ex: c√≠rculo vermelho em tatami).",
      "2. Duplica a forma vetorial para gerar o contorno de acabamento (ex: ponto cheio preto).",
      "3. Aplica uma sobreposi√ß√£o para dentro de 1.0 mm (Overlap/Trapping).",
      "4. Adiciona ponto de suporte (underlay) no preenchimento para firmar o tecido na entretela.",
      "5. Programa a ordem de costura para bordar o fundo primeiro e o contorno logo em seguida.",
      "6. Na m√°quina, o contorno fecha perfeitamente colado ao desenho, sem frestas."
    ],
    "applications": [
      "Emblemas, bras√µes e logotipos corporativos com contornos contrastantes",
      "Personagens infantis e desenhos animados com tra√ßos pretos externos fortes",
      "Bordados em tecidos el√°sticos (malha, pique, moletom e lycra)"
    ],
    "commonErrors": [
      "‚ùå Desenhar o contorno encostando exatamente na borda te√≥rica do desenho (sem sobreposi√ß√£o), fazendo o repuxo abrir uma fresta branca entre o fundo e a borda.",
      "‚ùå Fazer sobreposi√ß√£o excessiva de mais de 2.5 mm, criando uma faixa dura e grossa no encontro dos pontos."
    ],
    "troubleshootingTips": [
      "Se o contorno estiver saindo fora do lugar no lado direito: Aumente a sobreposi√ß√£o para 1.2 mm e aumente a compensa√ß√£o de repuxo do preenchimento no software.",
      "Se o contorno estiver quebrando linha ao passar por cima do fundo: Reduza a densidade do preenchimento nas bordas ou mude o underlay de tatami para tra√ßo simples."
    ],
    "recommendedSettings": {
      "density": "Contorno em Satin 0.40 mm com sobreposi√ß√£o de 1.0 mm",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela Rasga-F√°cil 80g ou Entretela de Malha",
      "speedPPM": "700 a 800 PPM"
    },
    "dicaArtrelados": "Regra de ouro do ateli√™ Artrelados: NUNCA fa√ßa contorno de bordado encostando na beiradinha exata! Deixe sempre 1 mil√≠metro de preenchimento passando por baixo do contorno. √â o segredo para ter matrizes perfeitas que nunca saem do registro!",
    "voceSabia": "Na ind√∫stria gr√°fica de impress√£o offset, esse mesmo conceito de sobreposi√ß√£o preventiva para evitar frestas brancas entre cores √© chamado de 'Trapping' (armadilha de cores).",
    "practicalExercise": "No seu software, desenhe um quadrado azul e coloque um contorno preto de 2 mm de largura com 1 mm de sobreposi√ß√£o para dentro. Borde em um peda√ßo de malha e veja como o encaixe fica 100% perfeito e sem nenhuma folga!",
    "quickSummary": "T√©cnica de matriz que cria uma margem de sobreposi√ß√£o entre o fundo e o contorno para evitar frestas e desalinhamento causados pelo repuxo do tecido.",
    "relatedTerms": [
      "Alinhamento de Contorno (Registration Alignment)",
      "Compensa√ß√£o de Pux√£o (Pull Compensation)",
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
    "updatedAt": "2026-08-24",
    "letter": "D"
  },
  {
    "id": "d-073-desencaixe-encaixe-rapido-bastidor-trava-magnetica",
    "code": "D-073",
    "term": "Desencaixe e Encaixe R√°pido de Bastidor / Trava Magn√©tica (Quick-Release Hoop Clamping System)",
    "level": "Iniciante üü¢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Equipamentos e M√°quinas",
    "origin": "Do desenvolvimento de sistemas ergon√¥micos de fixa√ß√£o r√°pida e bastidores magn√©ticos de neod√≠mio para alta produtividade em confec√ß√µes e ateli√™s modernos.",
    "summary": "Mecanismo de engate r√°pido e bastidores magn√©ticos que travam o tecido no bastidor instantaneamente com √≠m√£s sem necessidade de parafusos manuais.",
    "definition": "O Desencaixe e Encaixe R√°pido de Bastidor com Trava Magn√©tica (Magnetic Quick-Release Hoop System) √© a tecnologia de fixa√ß√£o que substitui os tradicionais an√©is pl√°sticos com parafuso de aperto manual por aros dotados de potentes √≠m√£s industriais de neod√≠mio. O sistema permite posicionar, travar e retirar tecidos finos, toalhas grossas ou pe√ßas j√° costuradas em segundos, eliminando o cansa√ßo dos punhos da bordadeira e prevenindo marcas de esmagamento (marcas de bastidor) nos tecidos delicados.",
    "technicalDetails": "Proporciona press√£o perim√©trica homog√™nea e autorregul√°vel que se adapta automaticamente a qualquer espessura de material (de 0.2 mm a 8.0 mm) sem exigir ajustes mec√¢nicos de parafusos.",
    "beginnerExplanation": "√â um bastidor moderno que fecha com √≠m√£s super fortes em vez de voc√™ ter que ficar apertando parafuso com a m√£o at√© doer os dedos. Voc√™ coloca a entretela, o tecido em cima e encosta o aro de cima: ele gruda na hora, n√£o marca a toalha e voc√™ tira num clique r√°pido!",
    "howItWorks": [
      "1. A bordadeira apoia a base inferior do bastidor magn√©tico na bancada com a entretela.",
      "2. Posiciona a pe√ßa a ser bordada (ex: camiseta ou toalha) sobre a base.",
      "3. Aproxima o aro superior magn√©tico, que √© atra√≠do e trava instantaneamente o tecido com press√£o uniforme.",
      "4. Encaixa o bastidor no suporte do pant√≥grafo da m√°quina atrav√©s da trava de engate r√°pido.",
      "5. Borda a matriz com total estabilidade e sem folgas.",
      "6. Ao terminar, puxa a al√ßa de desencaixe r√°pido e libera a pe√ßa pronta em um segundo."
    ],
    "applications": [
      "Produ√ß√£o de grande escala de uniformes, camisas polo e camisetas",
      "Pe√ßas delicadas que marcam f√°cil (veludo, camur√ßa, cetim e couro sint√©tico)",
      "Toalhas felpudas grossas e pe√ßas com z√≠per ou bot√µes pr√≥ximos √† borda do bastidor",
      "Ergonomia para operadoras evitando tendinite e dores nas m√£os"
    ],
    "commonErrors": [
      "‚ùå Deixar os dedos entre os √≠m√£s de neod√≠mio durante o fechamento do bastidor, causando belisc√µes fortes.",
      "‚ùå Aproximar cart√µes de cr√©dito, rel√≥gios mec√¢nicos ou pendrives dos √≠m√£s de alta intensidade.",
      "‚ùå Puxar o tecido ap√≥s o fechamento magn√©tico, desfiando a trama."
    ],
    "troubleshootingTips": [
      "Se o tecido escorregar no bastidor magn√©tico em bordados pesados: Use entretela adesiva ou coloque uma tira de entretela rasga-f√°cil dobrada nas bordas para aumentar a fric√ß√£o.",
      "Se o bastidor estiver dif√≠cil de soltar na bancada: Deslize o aro superior lateralmente em vez de puxar para cima reto."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "Adequada ao tecido",
      "stabilizer": "Entretela Rasga-F√°cil ou Hidrossol√∫vel",
      "speedPPM": "Velocidade m√°xima suportada pela m√°quina"
    },
    "dicaArtrelados": "Os bastidores magn√©ticos s√£o a salva√ß√£o para bordar toalhas de veludo e camisas de linho! Eles nunca deixam aquele 'aro brilhante' de tecido esmagado que o bastidor tradicional com parafuso costuma deixar!",
    "voceSabia": "Os √≠m√£s de neod√≠mio utilizados em bastidores magn√©ticos profissionais s√£o compostos por uma liga de neod√≠mio, ferro e boro (NdFeB), sendo os √≠m√£s permanentes mais potentes j√° criados pela ci√™ncia moderna!",
    "practicalExercise": "Experimente colocar uma toalha de banho bem grossa em um bastidor magn√©tico e outra no bastidor comum de parafuso. Compare a rapidez do encaixe e veja como no magn√©tico a toalha n√£o fica deformada nem mastigada!",
    "quickSummary": "Sistema de bastidores com √≠m√£s de alta pot√™ncia que prendem o tecido instantaneamente sem parafusos e sem marcar a pe√ßa.",
    "relatedTerms": [
      "Aro do Bastidor / Anel Interno e Externo",
      "Clipe de Bastidor e Travas de Reten√ß√£o de Tecido",
      "Opera√ß√£o da M√°quina",
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
    "updatedAt": "2026-08-24",
    "letter": "D"
  },
  {
    "id": "d-074-divisao-ponto-longo-ponto-dividido-automatico",
    "code": "D-074",
    "term": "Divis√£o de Ponto Longo e Ponto Dividido Autom√°tico (Auto-Split Long Stitches)",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Programa√ß√£o de Bordado",
    "origin": "Da evolu√ß√£o dos processadores de matrizes nos softwares de digitaliza√ß√£o para respeitar o limite mec√¢nico de amplitude da lan√ßadeira e da agulha.",
    "summary": "Recurso que divide automaticamente pontos cheios excessivamente largos em m√∫ltiplos pontos menores para evitar fios soltos que enroscam e quebram.",
    "definition": "A Divis√£o de Ponto Longo (Auto-Split Satin / Split Stitch Function) √© o algoritmo presente nos softwares de digitaliza√ß√£o de bordado que fraciona automaticamente pontos cheios (Satin) cuja largura ultrapasse o limite de seguran√ßa estrutural (geralmente entre 7.0 mm e 9.0 mm). O software insere uma ou mais penetra√ß√µes intermedi√°rias de agulha com padr√£o alternado, impedindo que o fio fique frouxo, sem sustenta√ß√£o ou vulner√°vel a desfiamentos durante o uso e a lavagem da pe√ßa.",
    "technicalDetails": "Permite configurar o comprimento m√°ximo de ponto (ex: limite de 7.5 mm) e o padr√£o de intercala√ß√£o dos furos intermedi√°rios (estilo randomizado para acabamento invis√≠vel ou estilo texturizado para efeitos decorativos).",
    "beginnerExplanation": "A m√°quina de bordar n√£o pode dar um ponto comprido demais de um lado at√© o outro (como um ponto de mais de 1 cent√≠metro), porque o fio fica solto e frouxo, podendo enroscar no dedo da pessoa ou rasgar na m√°quina de lavar. Essa fun√ß√£o divide esse ponto grand√£o em pontinhos menores firmes e seguros sem estragar o visual do bordado.",
    "howItWorks": [
      "1. O programador cria uma letra grande ou figura em ponto cheio que possui larguras variando entre 4 mm e 12 mm.",
      "2. No menu de propriedades do ponto cheio, ativa a op√ß√£o 'Divis√£o Autom√°tica / Auto-Split'.",
      "3. Define o comprimento m√°ximo permitido (ex: 7.0 mm).",
      "4. Nos trechos estreitos, a m√°quina borda ponto cheio liso tradicional.",
      "5. Nos trechos que ultrapassam 7 mm, o software insere penetra√ß√µes intermedi√°rias impercept√≠veis.",
      "6. A matriz borda macia, resistente e com acabamento plano e dur√°vel."
    ],
    "applications": [
      "Letras grandes em bras√µes, jaquetas universit√°rias e toalhas de banho",
      "Figuras com folhas largas, asas de p√°ssaros e p√©talas volumosas",
      "Uniformes esportivos submetidos a atrito constante e lavagens pesadas",
      "Preven√ß√£o de paradas na m√°quina por limite m√°ximo de deslocamento de quadro"
    ],
    "commonErrors": [
      "‚ùå Deixar pontos cheios com mais de 10 mm sem divis√£o autom√°tica, resultando em la√ßos frouxos que se soltam na primeira lavagem do cliente.",
      "‚ùå Alinhar todas as divis√µes na mesma linha reta, criando uma 'risca' feia no meio da letra em vez de uma divis√£o suave intercalada."
    ],
    "troubleshootingTips": [
      "Se o cliente reclamou que o fio da letra grande est√° repuxando ou solto: Abra a matriz no software, ative 'Auto-Split' com limite de 7.0 mm e marque a op√ß√£o 'Divis√£o Aleat√≥ria / Random Split'.",
      "Se a m√°quina acusar erro de 'Salto Excedido / Max Stitch Length': Aplique a divis√£o de pontos longos para que nenhum ponto ultrapasse 9.0 mm."
    ],
    "recommendedSettings": {
      "density": "0.40 mm com divis√£o ativa acima de 7.0 mm",
      "needleType": "75/11 ou 90/14 Ponta Bola",
      "stabilizer": "Entretela Rasga-F√°cil 80g",
      "speedPPM": "750 a 850 PPM"
    },
    "dicaArtrelados": "Sempre ative a 'Divis√£o Autom√°tica de Ponto' com valor m√°ximo de 7.0 mm em letras grandes! Use a op√ß√£o de divis√£o com textura sutil ou aleat√≥ria. O bordado fica luxuoso, resistente a pux√µes e parece um trabalho de alta-costura!",
    "voceSabia": "A maioria das m√°quinas de bordar dom√©sticas possui um limite mec√¢nico r√≠gido de seguran√ßa de 12.7 mm de salto; se a matriz tiver um ponto maior que isso, a m√°quina trava ou converte o ponto em um corte for√ßado com salto!",
    "practicalExercise": "No seu software, desenhe uma barra retangular de ponto cheio com 15 mm de largura sem divis√£o e outra com 'Auto-Split' ativado em 7 mm. Observe no simulador 3D como a segunda fica perfeitamente assentada e firme!",
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
    "updatedAt": "2026-08-24",
    "letter": "D"
  },
  {
    "id": "d-075",
    "term": "Densidade Fracionada / Densidade Gradiente (Gradient Density)",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos densidade, fra√ß√£o e gradiente.",
    "origin": "Do latim densitas (espessura, compress√£o) e do latim gradiens (que caminha por degraus).",
    "category": "Programa√ß√£o de Matrizes (Softwares)",
    "summary": "T√©cnica de varia√ß√£o progressiva do espa√ßamento entre pontos para criar degrad√™s suaves, sombreados realistas e transi√ß√µes de cor perfeitas sem sobrecarregar o tecido.",
    "definition": "T√©cnica de varia√ß√£o progressiva do espa√ßamento entre pontos para criar degrad√™s suaves, sombreados realistas e transi√ß√µes de cor perfeitas sem sobrecarregar o tecido.",
    "technicalDetails": "A densidade fracionada ou gradiente √© a t√©cnica de digitaliza√ß√£o avan√ßada em que a dist√¢ncia entre as linhas de penetra√ß√£o de ponto varia de forma progressiva e cont√≠nua ao longo de um eixo geom√©trico (por exemplo, iniciando em 0,38 mm e espa√ßando gradativamente at√© 1,20 mm ou 2,00 mm). Baseia-se em curvas de distribui√ß√£o matem√°tica aplicadas ao c√°lculo das linhas de varredura. Ao sobrepor dois blocos de pontos com gradientes invertidos, os fios se intercalam opticamente, gerando a ilus√£o de uma terceira cor intermedi√°ria por s√≠ntese aditiva visual sem criar rigidez no tecido.",
    "howItWorks": [
      "1. No software de matrizes, seleciona-se o objeto de preenchimento (tatami ou ponto cheio).",
      "2. Ativa-se a ferramenta de 'Gradiente de Densidade / Efeito Acordeom'.",
      "3. Define-se a densidade inicial (ex: 0,40 mm) e a densidade final (ex: 1,50 mm), bem como o sentido do gradiente.",
      "4. Cria-se uma segunda camada sobreposta com a cor secund√°ria e o gradiente no sentido inverso.",
      "5. A m√°quina borda primeiro a cor de base e depois a cor de sobreposi√ß√£o, mesclando os fios perfeitamente."
    ],
    "beginnerExplanation": "√â o jeito de fazer 'degrad√™' no bordado, como o p√¥r do sol ou o sombreado de uma p√©tala. Em vez de preencher tudo apertadinho, a m√°quina vai deixando os pontinhos cada vez mais afastados, permitindo que outra cor de linha se misture por cima sem ficar um bloco duro de linha.",
    "applications": [
      "Bordados realistas de animais (pelagem com transi√ß√µes suaves de cor).",
      "P√©talas de flores, folhagens bot√¢nicas e efeitos de luz e sombra em rostos e paisagens.",
      "Logotipos corporativos modernos com degrad√™ de marcas que antes eram imposs√≠veis de bordar com fidelidade."
    ],
    "characteristics": [
      "Reduz a contagem de pontos em at√© 40% em rela√ß√£o a preenchimentos maci√ßos convencionais.",
      "Elimina a rigidez (efeito 'placa de papel√£o') em desenhos grandes sombreados."
    ],
    "commonErrors": [
      "‚ùå Deixar as duas camadas com densidade padr√£o fechada (0,40 mm), gerando sobreposi√ß√£o pesada que quebra agulha e empedra o tecido",
      "‚ùå Espa√ßar demais a densidade final (acima de 2,5 mm) em tecidos de malha, fazendo a cor de fundo do tecido vazar de forma descontrolada",
      "‚ùå Usar ponto de suporte (underlay) muito denso embaixo da √°rea de degrad√™, que compete visualmente com a transi√ß√£o de cores"
    ],
    "troubleshootingTips": [
      "Se a transi√ß√£o de cor ficar marcada como uma linha reta: Aumente o intervalo de sobreposi√ß√£o das duas camadas em pelo menos 3 mm no software.",
      "Se o degrad√™ ficar ralo e sem cor: Diminua a densidade m√°xima para 1,2 mm e utilize linha trilobal de alto brilho.",
      "Se a agulha quebrar na √°rea de encontro das cores: Desative o underlay da segunda camada de gradiente."
    ],
    "dicaArtrelados": "Para fazer o degrad√™ perfeito no estilo Artrelados, use underlay apenas na primeira cor de fundo. A segunda cor do gradiente deve entrar com 'Underlay Nenhum' e compensa√ß√£o de encolhimento de 0,35 mm ‚Äî o resultado fica leve, sedoso e com toque de veludo!",
    "voceSabia": "A t√©cnica de gradiente de densidade foi inspirada no pontilhismo da pintura impressionista francesa do s√©culo XIX (como nas obras de Georges Seurat), onde pequenos pontos de cores puras colocados lado a lado s√£o mesclados diretamente pelo olho humano!",
    "practicalExercise": "Crie no seu software um ret√¢ngulo de 6x4 cm dividido em duas metades com gradiente invertido (uma azul abrindo para a direita e uma amarela abrindo para a esquerda). Borde sobre tricoline e veja como o centro forma um verde suave e natural.",
    "quickSummary": "Varia√ß√£o progressiva do espa√ßamento dos pontos para criar degrad√™s suaves, sombreados e transi√ß√µes de cores realistas.",
    "recommendedSettings": {
      "speedPPM": "650 a 800 PPM",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela rasg√°vel de boa sustenta√ß√£o"
    },
    "relatedTerms": [
      "Densidade de Pontos",
      "Ponto Tatami (Fill Stitch)",
      "Curvatura e √Çngulo de Ponto",
      "Ponto de Suporte (Underlay)",
      "Fio de Poli√©ster Trilobal"
    ],
    "tags": [
      "d-075",
      "densidade fracionada",
      "densidade gradiente",
      "degrade",
      "sombreamento",
      "mistura de cores",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Gradient Density & Accordion Stitching Techniques. Sydney, 2023.",
      "MADEIRA THREADS. Color Blending and Shading in Machine Embroidery. Freiburg, 2022.",
      "ARTRELADOS. Guia de Degrad√™ e Sombreado Realista no Bordado Computadorizado. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-075",
    "letter": "D"
  },
  {
    "id": "d-076",
    "term": "Dentes Impelidores Rebaixados (Drop Feed / Feed Dogs Inactive)",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada por substantivo masculino plural e adjetivo.",
    "origin": "Do latim dens (dente) e do latim impellere (empurrar para a frente).",
    "category": "Equipamentos & Hardware",
    "summary": "Mecanismo dentado sob a chapa que fica obrigatoriamente abaixado ou desativado no bordado computadorizado para que o bastidor seja guiado exclusivamente pelo pant√≥grafo.",
    "definition": "Mecanismo dentado sob a chapa que fica obrigatoriamente abaixado ou desativado no bordado computadorizado para que o bastidor seja guiado exclusivamente pelo pant√≥grafo.",
    "technicalDetails": "Os dentes impelidores (feed dogs) constituem o sistema de tra√ß√£o mec√¢nica dentada situado logo abaixo da chapa de agulha das m√°quinas de costura convencionais. No bordado computadorizado, esse mecanismo deve permanecer permanentemente rebaixado (drop feed) ou fisicamente desconectado do eixo principal, garantindo que o transporte do tecido seja executado de forma 100% aut√¥noma e bidirecional pelos servomotores do pant√≥grafo nos eixos cartesianos X e Y.",
    "howItWorks": [
      "1. Ao acoplar a unidade de bordado na m√°quina h√≠brida, a m√°quina emite o aviso para rebaixar os dentes impelidores.",
      "2. O operador move a chave mec√¢nica 'Drop Feed' na parte traseira da m√°quina para a posi√ß√£o de dentes baixos.",
      "3. Os dentes descem cerca de 1,5 mm abaixo da superf√≠cie da chapa de agulha.",
      "4. O bastidor fica livre para deslizar suavemente em qualquer √¢ngulo de 360 graus sob a a√ß√£o do pant√≥grafo."
    ],
    "beginnerExplanation": "S√£o aqueles 'dentinhos de serrote' que ficam embaixo da agulha na m√°quina de costura comum para puxar o pano para frente. No bordado computadorizado, eles precisam ficar sempre abaixados e escondidos, porque √© o pr√≥prio bastidor da m√°quina que vai movimentar o tecido para l√° e para c√° sozinho.",
    "applications": [
      "Configura√ß√£o obrigat√≥ria em todas as m√°quinas dom√©sticas de costura e bordado antes de iniciar qualquer trabalho de bordado.",
      "Preven√ß√£o de danos e desfiamentos na parte inferior de tecidos finos e acetinados.",
      "Garantia de movimenta√ß√£o suave e livre do bastidor em alta velocidade."
    ],
    "characteristics": [
      "Permanecem totalmente im√≥veis e abaixo da linha da chapa durante todo o ciclo de bordado.",
      "Evitam resist√™ncia por atrito contra a entretela montada no bastidor."
    ],
    "commonErrors": [
      "‚ùå Esquecer os dentes levantados ao encaixar o m√≥dulo de bordado, fazendo os dentes rasgarem a entretela por baixo e travando o bastidor",
      "‚ùå For√ßar a alavanca de rebaixamento com a agulha abaixada ou com a m√°quina em movimento",
      "‚ùå Acumular fiapos de linha e poeira entre as ranhuras dos dentes rebaixados, impedindo que eles des√ßam at√© o final"
    ],
    "troubleshootingTips": [
      "Se o bastidor estiver travando ou dando trancos ao se mover: Verifique se os dentes impelidores est√£o totalmente rebaixados.",
      "Se a alavanca de drop feed n√£o descer: Gire o volante manualmente uma volta completa para liberar a engrenagem interna.",
      "Se a m√°quina n√£o tiver alavanca de rebaixo: Encaixe a plaquinha pl√°stica de cobertura (tampa isoladora de dentes) que acompanha o kit da m√°quina."
    ],
    "dicaArtrelados": "Ao fazer a limpeza semanal da sua m√°quina, retire a chapa de agulha e passe o pincel entre as ranhuras dos dentes impelidores: o ac√∫mulo de p√≥ de entretela e √≥leo velho pode travar o rebaixo e arranhar o fundo dos seus bastidores!",
    "voceSabia": "O sistema de dentes impelidores foi patenteado por Allen B. Wilson em 1850 (chamado de four-motion feed) e transformou a hist√≥ria da costura no mundo. Por√©m, para que o bordado computadorizado nascesse na d√©cada de 1970, foi necess√°rio anular completamente essa inven√ß√£o para dar lugar aos motores de passo X e Y!",
    "practicalExercise": "Localize a chave de dentes impelidores na sua m√°quina. Mova para a esquerda e veja os dentinhos afundarem; depois passe o dedo suavemente sobre a chapa de agulha para sentir a superf√≠cie totalmente plana e segura para o bastidor.",
    "quickSummary": "Mecanismo de dentes que fica abaixado no bordado para que o bastidor deslize livremente guiado pelos motores da m√°quina.",
    "recommendedSettings": {
      "speedPPM": "N√£o se aplica (estado mec√¢nico)",
      "needleType": "N√£o se aplica",
      "stabilizer": "N√£o se aplica"
    },
    "relatedTerms": [
      "Chapa de Agulha",
      "Pant√≥grafo",
      "Bastidor",
      "Bastidoramento / Processo de Enquadramento no Bastidor",
      "Bra√ßo Cil√≠ndrico"
    ],
    "tags": [
      "d-076",
      "dentes impelidores",
      "drop feed",
      "transporte do tecido",
      "pantografo",
      "hardware",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SINGER SEWING COMPANY. Mechanics of Feed Dog Systems and Free-Motion Embroidery. Elizabeth, 2021.",
      "BROTHER INDUSTRIES. Service Manual: Feed Dog Mechanism & Embroidery Unit Interlocking. Nagoya, 2022.",
      "ARTRELADOS. Manual de Opera√ß√£o e Mec√¢nica B√°sica para Bordadeiras. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-076",
    "letter": "D"
  },
  {
    "id": "d-077",
    "term": "Distor√ß√£o de Push-Pull (Push and Pull Distortion)",
    "level": "Avan√ßado üî¥",
    "grammarClass": "Locu√ß√£o nominal de origem mista (substantivo portugu√™s e termos t√©cnicos em ingl√™s).",
    "origin": "Dos verbos ingleses to push (empurrar) e to pull (puxar/tracionar) e do latim distortio (ato de deformar).",
    "category": "F√≠sica & Din√¢mica do Bordado",
    "summary": "Fen√¥meno f√≠sico em que os pontos encolhem o tecido no sentido da linha (Pull) e esticam o tecido no sentido do avan√ßo da costura (Push), gerando v√£os e desalinhamentos.",
    "definition": "Fen√¥meno f√≠sico em que os pontos encolhem o tecido no sentido da linha (Pull) e esticam o tecido no sentido do avan√ßo da costura (Push), gerando v√£os e desalinhamentos.",
    "technicalDetails": "A distor√ß√£o de push-pull √© a resposta mec√¢nica e viscoel√°stica intr√≠nseca de qualquer substrato t√™xtil submetido √† penetra√ß√£o e tra√ß√£o cont√≠nua de linhas de bordar. O efeito 'Pull' (encolhimento) ocorre ao longo do eixo das colunas de pontos, onde a tens√£o do fio puxa as bordas do tecido para dentro; simultaneamente, o efeito 'Push' (empurramento) ocorre na dire√ß√£o perpendicular (no sentido do avan√ßo do bloco), onde a inser√ß√£o f√≠sica repetitiva dos fios empurra as fibras do tecido para fora, transformando c√≠rculos perfeitos em ovais e gerando frestas entre o preenchimento e o contorno externo.",
    "howItWorks": [
      "1. A m√°quina costura uma sequ√™ncia de pontos de preenchimento na horizontal.",
      "2. Cada la√ßada traciona o tecido nas pontas esquerda e direita, fazendo a forma encolher no sentido horizontal (Pull).",
      "3. Ao mesmo tempo, o volume dos milhares de fios entrando lado a lado empurra o tecido para cima e para baixo (Push).",
      "4. Ao chegar a hora do contorno final, se a matriz n√£o tiver compensa√ß√£o programada, o contorno n√£o se encaixa nas laterais (deixando frestas brancas) e invade o tecido nas pontas superior e inferior."
    ],
    "beginnerExplanation": "√â o que faz um c√≠rculo perfeito virar um ovo ou o contorno preto ficar fora do lugar (com aquele espacinho em branco feio entre o desenho e a linha de contorno). A linha quando aperta puxa o tecido para dentro de um lado e empurra para fora do outro.",
    "applications": [
      "Programa√ß√£o de matrizes profissionais de alta precis√£o para roupas esportivas, malhas e tecidos el√°sticos.",
      "Ajuste de logotipos geom√©tricos complexos com contornos finos de 1 mm colados em letras e escudos.",
      "Controle dimensional de bordados t√©cnicos com toler√¢ncia milim√©trica em uniformes industriais."
    ],
    "characteristics": [
      "Acontece em 100% dos bordados computadorizados do mundo em maior ou menor grau.",
      "Pode ser completamente neutralizado com matriz bem programada e entretela correta."
    ],
    "commonErrors": [
      "‚ùå Culpar a m√°quina ou a agulha pelo contorno fora do lugar, quando na verdade o erro √© a falta de compensa√ß√£o de push-pull na matriz",
      "‚ùå Tentar corrigir o push-pull esticando o tecido com for√ßa excessiva no bastidor, o que deforma o tecido ainda mais",
      "‚ùå Digitalizar c√≠rculos e quadrados com linhas geom√©tricas puras sem sobreposi√ß√£o de encaixe nas bordas"
    ],
    "troubleshootingTips": [
      "Se houver fresta vazia entre o preenchimento e o contorno lateral: Aumente a compensa√ß√£o de encolhimento (Pull Compensation) para 0,45 mm no software.",
      "Se o contorno superior/inferior estiver invadindo a √°rea de fora: Recue o limite do preenchimento em 0,2 mm na dire√ß√£o do avan√ßo dos pontos.",
      "Se o bordado estiver deformando em malha piquet: Utilize entretela recort√°vel resinada de 80g e adicione ponto de suporte em tatami leve cruzado."
    ],
    "dicaArtrelados": "Lembre-se da Regra Mestra Artrelados: 'No sentido em que a agulha vai e volta (linha), o bordado encolhe. No sentido em que o bordado caminha para a frente, o bordado empurra'. Programe sempre a compensa√ß√£o a favor da linha e seu contorno vai cravar com precis√£o cir√∫rgica!",
    "voceSabia": "Em tecidos extremamente el√°sticos como lycra ou suplex de academia, o efeito de encolhimento (pull) pode fazer um desenho de 10 cm encolher at√© 4 mm inteiros se n√£o houver entretela recort√°vel e compensa√ß√£o de matriz!",
    "practicalExercise": "Crie um quadrado de 4x4 cm preenchido com tatami horizontal e coloque um contorno de ponto cheio exatamente em cima das bordas sem compensa√ß√£o. Borde em um retalho de malha e veja com os pr√≥prios olhos as frestas laterais criadas pelo efeito push-pull.",
    "quickSummary": "Comportamento f√≠sico em que a linha encolhe o tecido de um lado e o empurra do outro, exigindo compensa√ß√£o milim√©trica na matriz.",
    "recommendedSettings": {
      "speedPPM": "700 a 850 PPM",
      "needleType": "75/11 Ponta Bola em malhas",
      "stabilizer": "Entretela recort√°vel 80g em tecidos el√°sticos"
    },
    "relatedTerms": [
      "Compensa√ß√£o de Encolhimento",
      "Ponto de Suporte (Underlay)",
      "Bastidoramento",
      "Ponto Tatami (Fill Stitch)",
      "Ponto Cheio (Satin Stitch)"
    ],
    "tags": [
      "d-077",
      "push pull",
      "distorcao",
      "encolhimento",
      "compensacao de encolhimento",
      "registro de contorno",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KAHN, Max. Push and Pull Phenomena in Computerized Embroidery. Nova York, 2022.",
      "WILCOM EMBROIDERYSTUDIO. Digitizing for Fabric Types: Managing Push-Pull Forces. Sydney, 2023.",
      "ARTRELADOS. A F√≠sica do Bordado: Dominando o Efeito Push-Pull e Encaixes Perfeitos. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-077",
    "letter": "D"
  },
  {
    "id": "d-078",
    "term": "DST (Data Stitch Tajima / Formato Universal de Matriz)",
    "level": "Intermedi√°rio üü°",
    "grammarClass": "Sigla substantivada masculina.",
    "origin": "Acr√¥nimo industrial japon√™s para Data Stitch Tajima, criado na d√©cada de 1980 pela corpora√ß√£o japonesa Tajima Industries Ltd.",
    "category": "Formatos & Arquivos de Bordado",
    "summary": "O formato de arquivo de bordado mais universal do mundo, compat√≠vel com quase todas as marcas de m√°quinas industriais e dom√©sticas existentes.",
    "definition": "O formato de arquivo de bordado mais universal do mundo, compat√≠vel com quase todas as marcas de m√°quinas industriais e dom√©sticas existentes.",
    "technicalDetails": "O arquivo DST √© um formato bin√°rio de baixo n√≠vel (stitch-based / formato de m√°quina puro) que armazena exclusivamente instru√ß√µes sequenciais de coordenadas de deslocamento cartesiano relativo (delta X e delta Y), comandos de salto (jump), instru√ß√µes de parada (stop) e comandos de corte de linha (trim). Por ser um formato puramente mec√¢nico, o DST n√£o embute em seu cabe√ßalho a tabela de cores RGB dos fios, cabendo ao operador atribuir as cores das linhas diretamente no painel da m√°quina. Utiliza codifica√ß√£o tern√°ria compactada de 3 bytes por coordenada com cabe√ßalho ASCII de 512 bytes.",
    "howItWorks": [
      "1. O programador finaliza a matriz no software e exporta o arquivo no formato .DST.",
      "2. O arquivo √© transferido para o pen drive e espetado na m√°quina de bordar.",
      "3. O processador da m√°quina l√™ os comandos bin√°rios de X e Y, movendo os servomotores passo a passo.",
      "4. Quando o arquivo encontra um comando 'Stop', a m√°quina para e solicita a pr√≥xima cor (que o operador define no painel ou nas agulhas)."
    ],
    "beginnerExplanation": "√â o tipo de arquivo de bordado mais famoso do mundo. √â como se fosse o 'PDF' ou 'MP3' do bordado: quase qualquer m√°quina de qualquer marca (Tajima, Barudan, Brother, Janome, Happy, Ricoma) consegue ler e bordar um arquivo .DST sem reclamar!",
    "applications": [
      "Padr√£o universal para envio de matrizes para clientes que possuem marcas variadas de m√°quinas de bordar.",
      "Formato nativo de produ√ß√£o em m√°quinas industriais multicabe√ßas de grande escala.",
      "Backup de emerg√™ncia de arquivos de bordado para leitura garantida em qualquer equipamento."
    ],
    "characteristics": [
      "Compatibilidade universal com 99,9% das m√°quinas computadorizadas do mercado.",
      "Arquivo leve (poucos kilobytes) e imune a erros de incompatibilidade de vers√£o de software."
    ],
    "commonErrors": [
      "‚ùå Abrir um arquivo DST na m√°quina e achar que a matriz est√° estragada porque as cores aparecem trocadas na tela (o formato DST n√£o grava as cores originais, apenas o aviso de troca de linha)",
      "‚ùå Tentar redimensionar um arquivo DST em mais de 10% no painel da m√°quina sem recalcular a densidade de pontos no software",
      "‚ùå Salvar por cima do arquivo vetorial original (.EMB ou .JAN) apenas em DST, perdendo a capacidade de editar os objetos vetoriais com facilidade no futuro"
    ],
    "troubleshootingTips": [
      "Se as cores na tela da m√°quina ficarem estranhas: Defina a ordem de cores manualmente no painel da m√°quina consultando a ficha t√©cnica (PDF de produ√ß√£o) da matriz.",
      "Se a m√°quina n√£o reconhecer o pen drive com DST: Certifique-se de que o pen drive est√° formatado em FAT32 e que o nome do arquivo tem menos de 8 caracteres sem acentos.",
      "Se voc√™ precisa alterar o tamanho da matriz: Redimensione sempre no software a partir do arquivo original de cria√ß√£o (.EMB, .PES, etc.) antes de exportar o novo DST."
    ],
    "dicaArtrelados": "Ao enviar matrizes para clientes ou alunas, envie sempre a duplinha de ouro Artrelados: o arquivo .DST (para rodar em qualquer m√°quina) acompanhado da Ficha T√©cnica em PDF colorida com a lista exata da ordem das cores de linha!",
    "voceSabia": "O formato DST foi criado originalmente para ser lido atrav√©s de fitas de papel perfuradas (paper tape punchers) que eram inseridas nas primeiras m√°quinas de bordar computadorizadas nos anos 1980, antes da exist√™ncia dos disquetes e pen drives!",
    "practicalExercise": "Exporte uma matriz simples do seu software em .DST e em .PES. Abra os dois arquivos em um visualizador e compare: observe como o DST abre com cores aleat√≥rias padr√£o, mas tem exatamente a mesma perfei√ß√£o e contagem de pontos do arquivo nativo.",
    "quickSummary": "Formato de arquivo universal para bordado industrial e dom√©stico, compat√≠vel com quase todas as m√°quinas do mercado.",
    "recommendedSettings": {
      "speedPPM": "Suporta qualquer velocidade da m√°quina",
      "needleType": "Conforme a matriz",
      "stabilizer": "Conforme o artigo"
    },
    "relatedTerms": [
      "Formatos de Arquivo de Bordado",
      "PES (Formato Brother / Babylock)",
      "JEF (Formato Janome)",
      "EXP (Formato Bernina / Melco)",
      "Ponto de Parada"
    ],
    "tags": [
      "d-078",
      "dst",
      "tajima",
      "formato de arquivo",
      "formato universal",
      "matriz",
      "software",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA INDUSTRIES. Tajima DST File Specification & Protocol Standard. Nagoya, 2021.",
      "EMBROIDERY SOFTWARE ASSOCIATION. Universal Machine File Formats: The DST Standard. Atlanta, 2022.",
      "ARTRELADOS. Guia Definitivo de Formatos e Extens√µes de Arquivos de Bordado. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-078",
    "letter": "D"
  },
  {
    "id": "d-079",
    "term": "Desbobinador / Suporte de Cone de Linha (Thread Stand / Spool Pin)",
    "level": "Fundamental üü¢",
    "grammarClass": "Locu√ß√£o nominal formada pelos substantivos desbobinador, suporte, cone e linha.",
    "origin": "Do portugu√™s desbobinar (tirar da bobina/carretel) e do latim supportare (sustentar).",
    "category": "Equipamentos & Hardware",
    "summary": "Haste vertical com guia de fio suspensa que permite ao cone grande de linha desenrolar suavemente para cima, eliminando trancos e quebras de linha.",
    "definition": "Haste vertical com guia de fio suspensa que permite ao cone grande de linha desenrolar suavemente para cima, eliminando trancos e quebras de linha.",
    "technicalDetails": "O desbobinador ou suporte externo de cones (thread stand) √© um dispositivo mec√¢nico vertical dotado de base com lastro pesado e haste telesc√≥pica de metal culminando em um olhal guia-fio suspenso a pelo menos 25 cm a 35 cm acima do topo do carretel. Sua fun√ß√£o t√©cnica prim√°ria √© permitir o desbobinamento axial superior (desenrolamento pelo topo sem rota√ß√£o f√≠sica do cone), neutralizando a in√©rcia do peso do cone de 4000 metros e entregando o filamento √† bateria de tensores da m√°quina com tens√£o residual pr√≥xima de zero.",
    "howItWorks": [
      "1. O cone grande de linha de bordar (1000m ou 4000m) √© posicionado na base do suporte atr√°s ou ao lado da m√°quina.",
      "2. A ponta da linha sobe em linha reta e passa de cima para baixo pelo olhal da haste suspensa do desbobinador.",
      "3. A linha desce suavemente e entra no trajeto normal de passagem de linha da m√°quina de bordar.",
      "4. Quando a m√°quina borda a 800 PPM, a linha se desprende do cone em c√≠rculos perfeitos no ar, sem puxar o carretel e sem dar trancos."
    ],
    "beginnerExplanation": "√â aquela torre ou suporte alto de metal que fica do lado da m√°quina para segurar os cones grandes de linha. Ele serve para fazer a linha sair por cima do cone bem levinha e solta, sem enroscar no p√© do carretel e sem ficar quebrando a linha toda hora.",
    "applications": [
      "Uso indispens√°vel de cones industriais econ√¥micos de 4000 metros em m√°quinas dom√©sticas de bordar.",
      "Alimenta√ß√£o est√°vel de linhas especiais e delicadas como fios met√°licos (ouro/prata) e fios de poli√©ster trilobal.",
      "Suporte m√∫ltiplo de cones para organiza√ß√£o de sequ√™ncias de cores em produ√ß√£o cont√≠nua."
    ],
    "characteristics": [
      "Base est√°vel com peso para n√£o tombar com a vibra√ß√£o da m√°quina.",
      "Haste alta ajust√°vel que garante √¢ngulo perfeito de sa√≠da da linha."
    ],
    "commonErrors": [
      "‚ùå Colocar um cone grande de 4000m deitado no pino horizontal da m√°quina dom√©stica, fazendo o carretel travar e arrebentar a linha instantaneamente",
      "‚ùå Deixar a haste do suporte muito baixa, fazendo a linha raspar na borda pl√°stica do cone e desfiar o fio",
      "‚ùå Passar a linha com o suporte muito longe da m√°quina, criando curvatura excessiva e atrito desnecess√°rio"
    ],
    "troubleshootingTips": [
      "Se a linha estiver arrebentando a cada 50 pontos com cone grande: Instale um suporte de cone vertical e erga a haste no ponto mais alto poss√≠vel.",
      "Se a linha met√°lica estiver enrolando em espiral e dando n√≥s: Coloque uma redinha el√°stica de prote√ß√£o (thread net) envolvendo o cone no desbobinador.",
      "Se o cone estiver vibrando e dan√ßando na base: Coloque um feltro circular ou base de borracha sob o cone de linha."
    ],
    "dicaArtrelados": "Se voc√™ usa cones grandes de 4000m na sua m√°quina dom√©stica, o suporte de cone externo de metal √© o melhor investimento do seu ateli√™! Mantenha a haste sempre bem esticada para o alto ‚Äî isso reduz em 90% as quebras de linha e economiza muito dinheiro comprando cones grandes em vez de tubinhos pequenos!",
    "voceSabia": "Cones industriais possuem aquele formato c√¥nico afunilado para cima justamente para permitir que a linha voe livremente para o ar a velocidades de at√© 1500 pontos por minuto sem que o carretel precise se mover nem 1 mil√≠metro!",
    "practicalExercise": "Monte um cone de 4000 metros no suporte vertical e puxe 2 metros de linha com a m√£o rapidamente para o alto: repare como a linha desenrola suavemente em espirais fluidas no ar sem nenhum esfor√ßo ou tranco.",
    "quickSummary": "Suporte vertical com guia alta que permite usar cones grandes de linha com desenrolamento suave e sem quebras.",
    "recommendedSettings": {
      "speedPPM": "Suporta qualquer velocidade",
      "needleType": "N√£o se aplica",
      "stabilizer": "N√£o se aplica"
    },
    "relatedTerms": [
      "Fio de Poli√©ster Trilobal",
      "Fio Met√°lico",
      "Tens√£o da Linha",
      "Redinha de Linha (Thread Net)",
      "Velocidade em PPM"
    ],
    "tags": [
      "d-079",
      "desbobinador",
      "suporte de cone",
      "thread stand",
      "cone de linha",
      "passagem de linha",
      "hardware",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. Thread Delivery Systems: Vertical Stands vs Horizontal Pins. Utah, 2022.",
      "MADEIRA GARN. Industrial Thread Feeding and Spool Stand Optimization. Freiburg, 2023.",
      "ARTRELADOS. Acess√≥rios Essenciais e Estrutura de Ateli√™ de Bordados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-079",
    "letter": "D"
  },
  {
    "id": "d-080-digitalizacao-manual-nos-vetoriais-bezier",
    "code": "D-080",
    "letter": "D",
    "term": "Digitaliza√ß√£o Manual com N√≥s Vetoriais B√©zier (Manual Vector B√©zier Digitizing)",
    "level": "Intermedi√°rio üü°",
    "category": "Programa√ß√£o de Bordado",
    "grammarClass": "Substantivo feminino composto por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do latim digitalis (feito com os dedos/discreto num√©rico), do franc√™s manuel e em homenagem ao engenheiro e matem√°tico franc√™s Pierre B√©zier (1910‚Äì1999), pioneiro das curvas param√©tricas vetoriais nos anos 1960.",
    "summary": "T√©cnica artesanal de programa√ß√£o de matrizes onde o digitalizador desenha contornos e colunas n√≥ por n√≥, controlando as al√ßas de curvatura para obter trajet√≥rias perfeitas.",
    "definition": "A digitaliza√ß√£o manual com n√≥s vetoriais B√©zier (manual vector B√©zier digitizing, node-by-node stitch path construction, precision parametric curve drafting) √© o padr√£o ouro na cria√ß√£o profissional de matrizes de bordado computadorizado. Em contraposi√ß√£o √† convers√£o vetorial autom√°tica (auto-digitizing), o digitalizador insere manualmente n√≥s de ancoragem (pontos de controle) ao longo do contorno da ilustra√ß√£o e manipula al√ßas tangenciais de curvatura para gerar curvas suaves, transi√ß√µes anat√¥micas de ponto cheio e preenchimentos tatami com controle milim√©trico de √¢ngulos, densidade, underlays e compensa√ß√£o de repuxo.",
    "technicalDetails": "Os softwares profissionais (Wilcom, Pulse, Embrilliance, Bernina) utilizam curvas de B√©zier c√∫bicas definidas por quatro pontos de controle param√©trico. N√≥s de canto (Corner Nodes) criam v√©rtices vivos de 90¬∞ ou agudos; n√≥s suaves (Smooth Nodes) mant√™m as tangentes colineares para arcos circulares cont√≠nuos. A manipula√ß√£o adequada reduz a quantidade de n√≥s desnecess√°rios, gerando arquivos de bordado mais limpos, leves e com menor propens√£o a n√≥s cegos na m√°quina.",
    "howItWorks": [
      "1. A imagem ou vetor de refer√™ncia √© importado para a √°rea de trabalho do software de bordado.",
      "2. O digitalizador seleciona a ferramenta de Coluna de Ponto Cheio ou Preenchimento Complexo.",
      "3. Clica nos pontos estrat√©gicos do desenho: bot√£o esquerdo para n√≥s retos/cantos e bot√£o direito para n√≥s curvos com al√ßas B√©zier.",
      "4. Ajusta a orienta√ß√£o das linhas de √¢ngulo de ponto ao longo do fluxo visual do objeto.",
      "5. Configura as propriedades t√©cnicas de underlay, densidade e compensa√ß√£o de repuxo antes de gerar os pontos finais."
    ],
    "beginnerExplanation": "√â como 'desenhar a matriz ponto por ponto com a m√£o bem firme'! Em vez de apertar um bot√£o m√°gico e deixar o computador inventar os pontos sozinho (o que quase sempre d√° errado), voc√™ clica no contorno do desenho criando pontinhos azuis que voc√™ pode puxar e curvar com o mouse. O bordado fica lisinho, perfeito e n√£o quebra a linha na m√°quina!",
    "applications": [
      "Digitaliza√ß√£o profissional de logotipos corporativos com letras pequenas de alta nitidez.",
      "Cria√ß√£o de matrizes florais, bras√µes her√°ldicos e desenhos anat√¥micos complexos.",
      "Otimiza√ß√£o de arquivos industriais para reduzir o n√∫mero de pontos e o tempo de m√°quina.",
      "Corre√ß√£o e reconstru√ß√£o de matrizes antigas danificadas ou convertidas automaticamente."
    ],
    "characteristics": [
      "Controle absoluto sobre a densidade, √¢ngulo de inclina√ß√£o e tipo de ponto em cada mil√≠metro.",
      "Curvas perfeitamente org√¢nicas sem a forma√ß√£o de 'dentes de serra' ou arestas quebradas.",
      "Redu√ß√£o expressiva do n√∫mero total de pontos em compara√ß√£o √† digitaliza√ß√£o autom√°tica."
    ],
    "commonErrors": [
      "‚ùå Criar centenas de n√≥s em uma √∫nica curva pequena, gerando um contorno pesado e ondulado",
      "‚ùå Deixar n√≥s curvos muito pr√≥ximos aos cantos vivos, arredondando v√©rtices que deveriam ser retos e pontiagudos",
      "‚ùå Esquecer de alinhar as linhas de √¢ngulo de ponto perpendicularmente ao fluxo da coluna"
    ],
    "troubleshootingTips": [
      "Se a curva parecer cheia de ondula√ß√µes: Delete metade dos n√≥s intermedi√°rios e ajuste a curvatura puxando apenas as al√ßas tangenciais dos dois n√≥s das pontas.",
      "Se o canto ficar redondo: Converta o n√≥ curvo em 'N√≥ de Canto' pressionando a tecla de atalho de v√©rtice reto no seu software.",
      "Se a m√°quina bater duro na curva: Verifique se n√£o h√° dois n√≥s sobrepostos na mesma coordenada exata e elimine o ponto duplicado."
    ],
    "dicaArtrelados": "Na digitaliza√ß√£o vetorial, a regra de ouro √©: 'Menos √© Mais'! Uma curva perfeita precisa de apenas dois n√≥s nas pontas e al√ßas de B√©zier bem esticadas: quanto menos n√≥s voc√™ colocar, mais r√°pida, limpa e brilhante a m√°quina vai bordar!",
    "voceSabia": "Pierre B√©zier era engenheiro mec√¢nico da montadora de autom√≥veis Renault e inventou essas curvas matem√°ticas para conseguir projetar a carroceria aerodin√¢mica de carros no computador com extrema eleg√¢ncia!",
    "practicalExercise": "No seu programa de bordado, importe a imagem de uma letra 'S'. Tente desenh√°-la usando apenas 6 n√≥s de controle B√©zier com al√ßas suaves. Gere os pontos cheios e admire a suavidade do brilho da curva!",
    "quickSummary": "T√©cnica de programa√ß√£o manual que constr√≥i matrizes perfeitas ajustando n√≥s e curvas param√©tricas com precis√£o milim√©trica.",
    "recommendedSettings": {
      "speedPPM": "N/A (T√©cnica de digitaliza√ß√£o em software)",
      "needleType": "Adequada a qualquer agulha conforme o tecido final",
      "stabilizer": "Parametriza√ß√£o direta nos atributos do objeto vetorial"
    },
    "relatedTerms": [
      "Curva B√©zier na Digitaliza√ß√£o",
      "√Çngulo de Ponto (Stitch Angle)",
      "Compensa√ß√£o de Repuxo (Pull Compensation)",
      "Ponto Cheio (Satin Stitch)",
      "Estrutura de Suporte (Underlay)"
    ],
    "tags": [
      "d-080",
      "digitalizacao manual",
      "bezier",
      "nos vetoriais",
      "programacao",
      "matrizes",
      "qualidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Vector Object Construction & B√©zier Curve Mastery. Sydney, 2023.",
      "PULSE MICROSYS. Precision Node Editing & Stitch Flow Dynamics. Toronto, 2022.",
      "ARTRELADOS. Guia Definitivo de Programa√ß√£o de Matrizes no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-081-dureza-shore-espumas-3d-alto-relevo",
    "code": "D-081",
    "letter": "D",
    "term": "Dureza Shore de Espumas 3D para Bordado em Alto Relevo (EVA Shore Durometer & Density Rating)",
    "level": "Avan√ßado üî¥",
    "category": "Insumos & Qualidade",
    "grammarClass": "Locu√ß√£o substantiva feminina composta por substantivos e termos t√©cnicos de metrologia.",
    "origin": "Do ingl√™s durometer e em homenagem a Albert Ferdinand Shore (1876‚Äì1936), que inventou a escala de medi√ß√£o de dureza de elast√¥meros nos Estados Unidos nos anos 1920.",
    "summary": "Classifica√ß√£o metrol√≥gica da densidade e resist√™ncia mec√¢nica da placa de EVA utilizada no bordado 3D para garantir que a espuma corte perfeitamente sem esfarelar.",
    "definition": "A dureza Shore de espumas 3D para bordado (EVA foam Shore hardness rating, 3D puff embroidery durometer scale, closed-cell EVA density standard) √© o √≠ndice f√≠sico-qu√≠mico que quantifica a resist√™ncia de uma l√¢mina de etileno-vinil-acetato (EVA) √† penetra√ß√£o e ao cisalhamento mec√¢nico da agulha de bordar. No bordado tridimensional de bon√©s e jaquetas, a escolha da dureza correta na escala Shore A ou Shore 00 √© cr√≠tica: espumas com dureza inadequada (muito macias, abaixo de 30 Shore A) s√£o esmagadas pelos pontos e perdem o relevo; espumas excessivamente duras (acima de 60 Shore A) quebram agulhas, partem a linha e n√£o s√£o cortadas com facilidade na perfura√ß√£o perif√©rica.",
    "technicalDetails": "O padr√£o internacional de excel√™ncia para bordado 3D (Puff Embroidery) situa-se na faixa de 40 a 50 Shore A com densidade de 100 a 150 kg/m¬≥ e estrutura de c√©lulas fechadas (microcelular). L√¢minas com espessura de 2 mm a 3 mm nessa especifica√ß√£o proporcionam corte perimetral limpo (clean cut-off) pela a√ß√£o combinada da alta densidade de ponto cheio (0,20 mm a 0,25 mm) e agulhas com ponta em formato de cunha ou ponta bola leve refor√ßada com tit√¢nio (calibre 80/12 ou 90/14).",
    "howItWorks": [
      "1. A matriz √© programada com densidade dobrada, pontos de topo fechados e underlay de corte perif√©rico.",
      "2. A m√°quina borda a costura de posicionamento e para para a coloca√ß√£o da placa de EVA.",
      "3. O operador assenta a espuma EVA calibrada em 45 Shore A sobre a √°rea a ser bordada.",
      "4. A m√°quina costura os pontos cheios em alta densidade, e as perfura√ß√µes cont√≠nuas da agulha perfuram e 'decapam' o EVA nas bordas como uma matriz de corte.",
      "5. Ao t√©rmino, o operador puxa a placa de EVA e o excesso se solta facilmente sem deixar fiapos vis√≠veis."
    ],
    "beginnerExplanation": "√â a 'firmeza certa' do EVA para fazer bordado alto relevo em bon√©s! Se voc√™ usar um EVA mole demais, o bordado fica amassado e murcho. Se usar um EVA duro demais, a agulha quebra toda hora. O EVA com a dureza certa (nem mole, nem duro) corta sozinho nas beiradas com a agulha e deixa a letra fofinha, alta e perfeita!",
    "applications": [
      "Bordado 3D em bon√©s estruturados de aba curva e aba reta (estilo New Era).",
      "Monogramas e bras√µes de alto relevo em jaquetas colegiais de sarja e couro.",
      "Letreiros volumosos em mochilas esportivas e coletes t√°ticos.",
      "Produ√ß√£o em escala industrial com descarte r√°pido e limpo da sobra de espuma."
    ],
    "characteristics": [
      "Corte perim√©trico preciso que dispensa o uso de tesouras manuais para limpeza do relevo.",
      "Mem√≥ria el√°stica que mant√©m o formato do relevo tridimensional mesmo ap√≥s lavagens.",
      "N√£o esfarela nem solta p√≥ qu√≠mico no interior do mecanismo da lan√ßadeira da m√°quina."
    ],
    "commonErrors": [
      "‚ùå Usar EVA escolar comum de papelaria (muito mole e com c√©lulas abertas) que esfarela e deixa fiapos coloridos saindo por baixo dos pontos",
      "‚ùå Usar placas de borracha industrial superduras que entortam a barra de agulha e partem a linha a cada 10 pontos",
      "‚ùå Borda em velocidade m√°xima de 1.000 PPM sobre EVA denso, aquecendo a agulha e derretendo o pol√≠mero na ponta"
    ],
    "troubleshootingTips": [
      "Se sobrarem pedacinhos de EVA aparecendo nas pontas das letras: Aproxime a ponta de um soprador t√©rmico ou pistola de ar quente por 2 segundos para encolher os res√≠duos invis√≠veis.",
      "Se a agulha quebrar ao entrar no EVA: Reduza a velocidade para 600 PPM e troque a agulha por uma 80/12 Tit√¢nio.",
      "Se o relevo ficar achatado: Verifique se o EVA utilizado tem pelo menos 40 Shore A de dureza e aumente a densidade do ponto cheio no software."
    ],
    "dicaArtrelados": "Use sempre EVA especial para bordado com cor pr√≥xima √† linha que voc√™ vai bordar (EVA preto para linha preta, EVA branco para linha clara): isso garante que mesmo nos cantinhos mais dif√≠ceis o acabamento fique 100% invis√≠vel e profissional!",
    "voceSabia": "As grandes marcas de bon√©s da liga de beisebol americana (MLB) possuem especifica√ß√µes qu√≠micas pr√≥prias e exclusivas para a dureza do EVA de seus logotipos tridimensionais, guardadas a sete chaves desde 1994!",
    "practicalExercise": "Pegue um peda√ßo de EVA escolar comum e um peda√ßo de EVA t√©cnico para bordado 3D (45 Shore A). Dobre os dois com os dedos e sinta a diferen√ßa de densidade. Borde a mesma letra 'A' sobre ambos e compare a limpeza do corte perimetral!",
    "quickSummary": "Medida da firmeza do EVA que determina o relevo perfeito e o corte limpo da espuma no bordado tridimensional 3D.",
    "recommendedSettings": {
      "speedPPM": "550 a 650 PPM",
      "needleType": "80/12 ou 90/14 Tit√¢nio Ponta Aguda (SES/RG)",
      "stabilizer": "Entretela rasg√°vel pesada de 80g a 100g para bon√©s"
    },
    "relatedTerms": [
      "Bordado 3D / Alto Relevo com Espuma",
      "Densidade de Ponto Cheio (Satin Density)",
      "Agulha Tit√¢nio para Alta Fric√ß√£o",
      "Bon√© Estruturado e Bastidor de Bon√©",
      "Decapagem T√©rmica de Res√≠duos Pl√°sticos"
    ],
    "tags": [
      "d-081",
      "dureza shore",
      "eva 3d",
      "alto relevo",
      "puff embroidery",
      "bones",
      "insumos",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GUNOLD GMBH. Puffy 3D Foam Technical Data & Hardness Specifications. Stockstadt, 2022.",
      "MADEIRA THREADS. 3D Embroidery Mastery: Foam Density, Needles and Digitizing. Freiburg, 2021.",
      "ARTRELADOS. Guia de Bordado 3D e Relevos Especiais no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-082-desfiamento-pesponto-borda-rustica-fringe",
    "code": "D-082",
    "letter": "D",
    "term": "Desfiamento e Pesponto de Borda R√∫stica / Efeito Fringe (Fringe Stitch & Raw-Edge Thread Fraying)",
    "level": "Fundamental üü¢",
    "category": "T√©cnicas Especiais & Estilos",
    "grammarClass": "Substantivo masculino composto por substantivo e locu√ß√µes adjetivas.",
    "origin": "Do latim defilare (separar os fios da trama t√™xtil) e do ingl√™s fringe (franja ornamental decorativa derivada do franc√™s antigo frenge). T√©cnica de bordado tridimensional popularizada no artesanato criativo nos anos 2000.",
    "summary": "T√©cnica especial de bordado onde colunas longas de ponto cheio s√£o bordadas com tens√£o de bobina muito frouxa e posteriormente cortadas pelo avesso para criar franjas, tufos de pelos e p√©talas 3D.",
    "definition": "O desfiamento e pesponto de borda r√∫stica ou ponto de franja (fringe stitch, 3D thread tufting, raw-edge fraying embroidery) √© uma t√©cnica mista de programa√ß√£o e acabamento mec√¢nico que transforma pontos cheios computadorizados em tufos de fios soltos de alto relevo t√°til. Na digitaliza√ß√£o, programa-se uma linha de fixa√ß√£o travada em ponto de corrida de um lado e uma coluna larga de cetim com pontos longos (de 7 mm a 12 mm) sem amarra√ß√µes na extremidade oposta. Ap√≥s o bordado na m√°quina, o operador corta cuidadosamente as la√ßadas do fio da bobina na parte de tr√°s da pe√ßa com um desmanchador de costura, puxando os fios superiores para a frente com um pente fino ou escovinha para erguer uma franja densa e macia.",
    "technicalDetails": "Para a execu√ß√£o do ponto fringe, a tens√£o da linha da bobina pode ser reduzida em at√© 40% para criar la√ßos generosos e f√°ceis de cortar no avesso sem danificar o tecido de suporte. A extremidade de ancoragem deve conter obrigatoriamente 5 a 8 micropontos de travamento (Lock Stitches) sobrepostos com espa√ßamento de 0,3 mm, garantindo que os fios superiores da franja nunca se soltem durante lavagens ou uso di√°rio.",
    "howItWorks": [
      "1. A matriz √© programada com a t√©cnica de ponto fringe: uma borda travada e pontos cheios longos abertos na outra ponta.",
      "2. A m√°quina borda o objeto sobre tecido firme com entretela de recorte.",
      "3. A pe√ßa √© retirada do bastidor e virada com o avesso para cima sobre uma mesa iluminada.",
      "4. Com a ponta de um desmanchador de costura afiado, o operador corta a linha branca da bobina no centro da coluna.",
      "5. Pela frente da pe√ßa, penteia-se suavemente os fios coloridos com uma escovinha de dentes macia: os fios se levantam instantaneamente formando uma franja fofa em 3D."
    ],
    "beginnerExplanation": "√â a t√©cnica m√°gica para fazer 'cabelinho de boneca, pelo de bichinho ou miolo fofo de girassol' que fica soltinho para fora do tecido! A m√°quina d√° pontinhos compridos bem bonitos. Depois voc√™ s√≥ corta a linhazinha branca no avesso da roupa e passa uma escovinha na frente: os fios se soltam e viram uma franjinha fofinha e cheia de charme!",
    "applications": [
      "Cria√ß√£o de crinas de cavalinhos, cabelos de bonecas e pelagem fofa de animais em bordados infantis.",
      "Miolo tridimensional de flores, girass√≥is, margaridas e cactos em toalhas de mesa.",
      "Acabamento de bordas r√∫sticas e desfiadas em pe√ßas jeanswear e almofadas boho-chic.",
      "Efeitos de grama alta e folhagens realistas em paisagens bordadas de arte t√™xtil."
    ],
    "characteristics": [
      "Textura t√°til e visual volumoso que encanta clientes em pe√ßas infantis e decorativas.",
      "Execu√ß√£o r√°pida na m√°quina com transforma√ß√£o instant√¢nea no processo de corte manual.",
      "Totalmente seguro contra desfiamento involunt√°rio gra√ßas √† linha de ancoragem travada."
    ],
    "commonErrors": [
      "‚ùå Cortar o tecido por acidente com o desmanchador de costura ao cortar os fios da bobina no avesso",
      "‚ùå Esquecer de programar os n√≥s de trava (Lock Stitches) na base, fazendo todos os fios da franja ca√≠rem ao serem puxados",
      "‚ùå Usar linha de algod√£o fraca que se rompe e esfarela ao ser escovada com o pente"
    ],
    "troubleshootingTips": [
      "Se os fios da franja n√£o quiserem sair para a frente: Passe a ponta de uma agulha de m√£o suavemente sob os la√ßos da frente para levant√°-los.",
      "Se o tecido foi levemente picado no avesso: Aplique uma gotinha de termolina leitosa ou selador de costura no avesso sobre a base de ancoragem.",
      "Se a franja ficar murcha: Passe um jato leve de vapor do ferro a 5 cm de dist√¢ncia sem encostar no bordado para abrir os fios."
    ],
    "dicaArtrelados": "Para fazer miolo de girassol em 3D de tirar o f√¥lego, use duas cores de linha (marrom escuro na base e amarelo ouro na ponta) no ponto fringe: quando voc√™ pentear a franjinha na frente, o efeito mesclado fica t√£o realista que parece uma flor de verdade!",
    "voceSabia": "A t√©cnica de fringe stitch computadorizado foi inspirada nas cl√°ssicas tape√ßarias turcas e persas do s√©culo XII, onde artes√£os cortavam manualmente os n√≥s de l√£ para criar o veludo dos tapetes reais!",
    "practicalExercise": "Programe uma coluna de cetim de 10 mm de largura por 5 cm de comprimento com n√≥s de trava apenas na borda esquerda. Borde em um retalho, vire do avesso, corte a linha da bobina com o desmanchador e escove a franja pela frente!",
    "quickSummary": "T√©cnica que cria franjas e pelos tridimensionais cortando a linha de bobina no avesso e soltando os fios superiores na frente.",
    "recommendedSettings": {
      "speedPPM": "650 a 750 PPM",
      "needleType": "75/11 Ponta Bola Leve (SES)",
      "stabilizer": "Entretela de recorte firme (Cut-away) de 80g"
    },
    "relatedTerms": [
      "Ponto Cheio (Satin Stitch)",
      "Bordado Tridimensional 3D com EVA",
      "Desmanchador de Costura / Abridor de Casas",
      "N√≥ de Trava (Lock Stitch)",
      "Chenille Computadorizado / Efeito Ponto Musgo"
    ],
    "tags": [
      "d-082",
      "fringe stitch",
      "franja",
      "ponto desfiado",
      "relevo 3d",
      "efeitos especiais",
      "artesanal",
      "artrelados"
    ],
    "bibliographicReferences": [
      "EMBROIDERY DIGITIZING MAGAZINE. Mastering 3D Fringe and Tufting Techniques. Chicago, 2022.",
      "BERNINA TEXTILE LAB. Creative Embroidery: Specialty Fringe and Texture Stitches. Steckborn, 2021.",
      "ARTRELADOS. Efeitos Tridimensionais e Texturas Artesanais no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-083-dupla-densidade-ponto-cheio-cobertura-tecidos-escuros",
    "code": "D-083",
    "letter": "D",
    "term": "Dupla Densidade em Ponto Cheio para Cobertura de Tecidos Escuros (Double-Layer Satin Density Protocol)",
    "level": "Intermedi√°rio üü°",
    "category": "Programa√ß√£o de Bordado",
    "grammarClass": "Locu√ß√£o substantiva feminina composta por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do latim duplus (duas vezes), densitas (compacto) e do franc√™s satin (cetim brilhante derivado do porto chin√™s Zaiton). T√©cnica avan√ßada de digitaliza√ß√£o criada na ind√∫stria de uniformes nos anos 1990.",
    "summary": "Protocolo de programa√ß√£o onde se sobrep√µem duas camadas de ponto cheio com densidades moderadas e √¢ngulos ligeiramente defasados para cobrir tecidos pretos com linhas claras sem empedrar.",
    "definition": "A dupla densidade em ponto cheio para cobertura de tecidos escuros (double-layer satin density protocol, dark substrate dual-pass coverage, staggered satin layering) √© a metodologia t√©cnica de digitaliza√ß√£o que soluciona o problema √≥ptico de 'vazamento de fundo' quando se bordam linhas claras ou brancas sobre tecidos escuros, pretos ou de alta gramatura (como brim, sarja e veludo cotel√™). Em vez de tentar resolver a transpar√™ncia aumentando a densidade de uma √∫nica camada para valores excessivos (como 0,25 mm, o que causaria quebra de agulhas e efeito de placa r√≠gida), programa-se uma primeira camada de base a 0,55 mm de espa√ßamento e uma segunda camada superior a 0,40 mm com uma inclina√ß√£o angular defasada em 5¬∞ a 10¬∞, garantindo 100% de brancura √≥ptica e toque flex√≠vel.",
    "technicalDetails": "A primeira camada atua como um leito de bloqueio crom√°tico e nivelamento da trama t√™xtil, enquanto a segunda camada superior sela os espa√ßos microsc√≥picos entre as fibras com reflex√£o de luz direta. A defasagem angular de 7¬∞ entre as camadas impede que as perfura√ß√µes da agulha coincidam nas mesmas coordenadas dos furos anteriores, preservando a integridade estrutural do tecido e reduzindo o consumo de energia dos servomotores.",
    "howItWorks": [
      "1. No software de matrizes, o digitalizador cria o objeto de ponto cheio com o texto ou elemento claro.",
      "2. Duplica o objeto na mesma posi√ß√£o exata (Copy & Paste in Place).",
      "3. Configura o primeiro objeto com densidade de 0,55 mm, sem compensa√ß√£o de repuxo excessiva e com underlay central.",
      "4. Configura o segundo objeto com densidade de 0,40 mm, √¢ngulo de ponto alterado em 7¬∞ e compensa√ß√£o de repuxo padr√£o (+0,35 mm).",
      "5. Na m√°quina, o bordado costura as duas camadas em sequ√™ncia r√°pida, resultando em um bordado branco brilhante e sem nenhum fio preto aparecendo no meio."
    ],
    "beginnerExplanation": "Sabe quando voc√™ vai bordar uma letra branca em uma camiseta preta e o tecido preto fica aparecendo no meio dos pontos parecendo que o bordado est√° ralo e feio? O segredo n√£o √© apertar os pontos at√© a m√°quina quase quebrar! O truque dos profissionais √© fazer a m√°quina passar duas vezes: uma primeira camadinha leve que tampa a cor preta e uma segunda camadinha por cima que d√° o brilho total!",
    "applications": [
      "Bordado de logotipos brancos e amarelos em uniformes pretos, jaquetas de brim escuro e bon√©s escuros.",
      "Monogramas claros em toalhas de banho pretas, roup√µes chumbo e mantas azul-marinho.",
      "Textos pequenos de alta legibilidade em etiquetas corporativas sobre fundo escuro.",
      "Pe√ßas de moda de alta costura com exig√™ncia de brancura fotogr√°fica impec√°vel."
    ],
    "characteristics": [
      "Opacidade crom√°tica total de 100%, bloqueando a cor escura do tecido de fundo.",
      "Bordado incrivelmente macio e flex√≠vel, sem a rigidez pesada de uma camada √∫nica ultra-densa.",
      "Zero quebra de agulhas e redu√ß√£o dr√°stica do atrito t√©rmico da linha durante a costura."
    ],
    "commonErrors": [
      "‚ùå Aumentar a densidade de uma √∫nica camada para 0,22 mm, criando uma pedra dura que rasga o tecido e quebra agulhas",
      "‚ùå Bordar as duas camadas exatamente no mesmo √¢ngulo de ponto, fazendo a agulha bater nos mesmos buraquinhos e empurrar a linha para dentro",
      "‚ùå Usar linha de bobina de m√° qualidade que sobe para a frente e mancha o topo do bordado claro"
    ],
    "troubleshootingTips": [
      "Se o tecido escuro ainda estiver aparecendo nas pontas: Aumente o recuo da primeira camada em +0,2 mm e utilize um topping pl√°stico sol√∫vel por cima.",
      "Se a segunda camada parecer deslocada: Verifique a firmeza do bastidoramento e aumente a compensa√ß√£o de repuxo da camada superior.",
      "Se o bordado ficar muito grosso: Ajuste o espa√ßamento da primeira camada para 0,60 mm e o da segunda para 0,42 mm."
    ],
    "dicaArtrelados": "Quando tiver que bordar letras amarelas ou brancas em camisas pretas, use sempre a t√©cnica da Dupla Camada com 7¬∞ de diferen√ßa no √¢ngulo: o branco fica t√£o vivo e reluzente que parece uma pintura a √≥leo em alto relevo!",
    "voceSabia": "Os pintores renascentistas usavam exatamente essa mesma t√©cnica √≥tica (chamada de 'imprimatura'): aplicavam uma primeira dem√£o neutra de tinta na tela escura antes de pintar as cores claras para as cores brilharem com luminosidade pura!",
    "practicalExercise": "Pegue um retalho de brim preto. Borde uma letra 'B' com densidade √∫nica pesada de 0,28 mm e outra letra 'B' ao lado usando duas camadas (0,55 mm + 0,40 mm com 7¬∞ de √¢ngulo). Toque com os dedos e compare a maciez e a brancura das duas!",
    "quickSummary": "T√©cnica que sobrep√µe duas camadas de ponto cheio com √¢ngulos defasados para garantir cobertura total de fundos escuros com toque macio.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Ponta Bola ou Standard",
      "stabilizer": "Entretela rasg√°vel de 70g ou de recorte conforme o tecido"
    },
    "relatedTerms": [
      "Densidade de Ponto Cheio (Satin Density)",
      "√Çngulo de Ponto (Stitch Angle)",
      "Camada de Cobertura / Topping",
      "Compensa√ß√£o de Repuxo (Pull Compensation)",
      "Espa√ßamento de Ponto (Stitch Spacing)"
    ],
    "tags": [
      "d-083",
      "dupla densidade",
      "tecidos escuros",
      "cobertura total",
      "ponto cheio",
      "programacao",
      "qualidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "NATIONAL EMBROIDERY GUILD. Substrate Coverage & Layering Strategies for Dark Fabrics. Dallas, 2022.",
      "WILCOM ADVANCED DIGITIZING. Dual-Pass Satin and Stitch Angle Offsets. Sydney, 2023.",
      "ARTRELADOS. Guia de Cobertura Crom√°tica e Densidades Perfeitas no DIBE. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-084-dinamometro-digital-arrasto-puxada-linha",
    "code": "D-084",
    "letter": "D",
    "term": "Dinam√¥metro Digital de Arrasto e Puxada de Linha (Digital Thread Drag Dynamometer)",
    "level": "Avan√ßado üî¥",
    "category": "Equipamentos & Medi√ß√£o",
    "grammarClass": "Substantivo masculino composto por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do grego dynamis (for√ßa, pot√™ncia) e metron (medida). Equipamento de metrologia t√™xtil de precis√£o desenvolvido no Jap√£o e Su√≠√ßa para laborat√≥rios de bordado nos anos 1990.",
    "summary": "Instrumento eletr√¥nico de alta sensibilidade que mede em gramas-for√ßa (gf) ou centinewtons (cN) a resist√™ncia de atrito cont√≠nuo da linha superior ao longo de todo o caminho de passagem.",
    "definition": "O dinam√¥metro digital de arrasto e puxada de linha (digital upper thread tension gauge, running thread drag dynamometer, precision load-cell yarn tension meter) √© o instrumento metrol√≥gico avan√ßado utilizado para diagnosticar, padronizar e calibrar a resist√™ncia de tra√ß√£o din√¢mica da linha superior em m√°quinas de bordar industriais e profissionais. Conectado ao fio na sa√≠da do guia-fio da agulha, o dinam√¥metro registra a for√ßa exata exercida pelo conjunto de discos tensores, molas de retorno, feltros e canais de passagem enquanto a linha √© puxada em velocidade constante, identificando micro-bloqueios, calibra√ß√µes assim√©tricas entre agulhas e varia√ß√µes de atrito causadas por sujeira acumulada nos discos.",
    "technicalDetails": "Equipado com c√©lula de carga piezorresistiva de alta resolu√ß√£o (precis√£o de ¬±0,5 gf na faixa de 0 a 500 gf) e visor digital LCD retroiluminado com reten√ß√£o de valor de pico (Peak Hold). O padr√£o √≥timo de calibra√ß√£o para linha de bordar 100% poli√©ster calibre 40wt situa-se entre 110 gf e 130 gf (gramas-for√ßa) com o calcador abaixado; para fios met√°licos finos ou rayon de seda, a regulagem ideal √© calibrada entre 90 gf e 105 gf.",
    "howItWorks": [
      "1. A m√°quina √© parada com o calcador abaixado e a agulha na posi√ß√£o superior.",
      "2. O operador la√ßa a ponta da linha superior que sai da agulha no gancho sensor do dinam√¥metro digital.",
      "3. Puxa suavemente o dinam√¥metro em linha reta para baixo em velocidade cont√≠nua de cerca de 10 cm/s.",
      "4. O visor digital exibe em tempo real o gr√°fico de tra√ß√£o e fixa o valor m√©dio de arraste em gramas-for√ßa.",
      "5. O operador gira o bot√£o do tensor da agulha correspondente at√© atingir exatamente o valor nominal de 120 gf, repetindo o teste em todas as agulhas do cabe√ßote."
    ],
    "beginnerExplanation": "√â a 'balan√ßa digital de precis√£o' que mede a for√ßa da linha de cima da m√°quina! Em vez de ficar puxando a linha com o dedo e tentando adivinhar no 'olh√¥metro' se o tensor est√° apertado ou frouxo, esse aparelhinho mede na tela o peso exato da puxada da linha. Assim todas as agulhas da sua m√°quina ficam com o ponto exatamente id√™ntico e perfeito!",
    "applications": [
      "Equaliza√ß√£o rigorosa da tens√£o entre as 12 ou 15 agulhas de cabe√ßotes industriais.",
      "Controle de qualidade em f√°bricas de bordado de grande porte e ateli√™s de alto padr√£o.",
      "Identifica√ß√£o de canaletas obstru√≠das com fiapos ou discos tensores com rebarbas microsc√≥picas.",
      "Calibra√ß√£o segura para fios especiais delicados (linhas met√°licas, poliamida e luminescentes)."
    ],
    "characteristics": [
      "Leitura num√©rica digital instant√¢nea que elimina subjetividades do toque manual do operador.",
      "Mem√≥ria para armazenamento de medi√ß√µes de todas as agulhas para compara√ß√£o r√°pida.",
      "Alimenta√ß√£o por bateria recarreg√°vel com autonomia para mais de 100 horas de calibra√ß√£o."
    ],
    "commonErrors": [
      "‚ùå Medir a tens√£o da linha com o calcador da m√°quina levantado (quando os discos tensores est√£o abertos)",
      "‚ùå Puxar o instrumento com solavancos bruscos em vez de uma tra√ß√£o suave e cont√≠nua",
      "‚ùå Desconsiderar a medi√ß√£o individual de cada agulha, achando que todas t√™m a mesma tens√£o s√≥ porque os bot√µes est√£o alinhados visualmente"
    ],
    "troubleshootingTips": [
      "Se uma agulha espec√≠fica der leitura 50 gf mais alta que as outras: Limpe os discos tensores passando um fio dental com √°lcool isoprop√≠lico para retirar ceras e fiapos.",
      "Se a leitura oscilar loucamente durante o pux√£o: Verifique se o cone de linha n√£o est√° com o fio preso na base do suporte desbobinador.",
      "Se a linha quebrar durante a medi√ß√£o: O tensor est√° excessivamente apertado; afrouxe o parafuso recuando duas voltas completas."
    ],
    "dicaArtrelados": "Se voc√™ n√£o tem um dinam√¥metro digital de bancada, use o 'teste do papel higi√™nico': a linha superior deve puxar com a for√ßa exata necess√°ria para desenrolar um rolo de papel higi√™nico novo na mesa sem rasgar a folha!",
    "voceSabia": "Nas linhas de montagem das f√°bricas japonesas da Tajima e Barudan, 100% das m√°quinas que saem para exporta√ß√£o passam obrigatoriamente por teste computadorizado de dinam√¥metro em cada agulha antes do envio!",
    "practicalExercise": "Puxe a linha da agulha 1 e da agulha 2 com a m√£o e sinta a resist√™ncia. Se tiver um tensi√¥metro digital ou balancinha de mola, me√ßa as duas agulhas e compare os n√∫meros para ver se est√£o rigorosamente iguais!",
    "quickSummary": "Instrumento digital de alta precis√£o que afere a for√ßa de tra√ß√£o da linha superior para equalizar todas as agulhas da m√°quina.",
    "recommendedSettings": {
      "speedPPM": "N/A (Instrumento de medi√ß√£o est√°tica/din√¢mica)",
      "needleType": "Compat√≠vel com todos os calibres de agulha",
      "stabilizer": "Faixa nominal padr√£o: 110 a 130 gf para poli√©ster 40wt"
    },
    "relatedTerms": [
      "Tensor de Linha Superior (Thread Tensioner)",
      "Cart√£o de Calibra√ß√£o de Tens√£o de Bobina / Tensi√≥metro Digital",
      "Mola de Retorno / Mola de Tens√£o (Check Spring)",
      "Calibra√ß√£o de Tens√£o de Linha",
      "Desbobinador / Suporte de Cone de Linha"
    ],
    "tags": [
      "d-084",
      "dinamometro",
      "tensao de linha",
      "medicao",
      "calibracao",
      "equipamentos",
      "qualidade",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA INDUSTRIAL CO. Digital Yarn Tension Gauges: Operational Handbook. Osaka, 2022.",
      "TAJIMA QUALITY ASSURANCE. Head Tension Calibration Standards and Metrology. Nagoya, 2021.",
      "ARTRELADOS. Metrologia, Calibra√ß√£o e Manuten√ß√£o de Precis√£o no DIBE. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-085-decapagem-termica-residuos-plasticos-pistola-ar-quente",
    "code": "D-085",
    "letter": "D",
    "term": "Decapagem T√©rmica de Res√≠duos Pl√°sticos / Pistola de Ar Quente (Heat-Gun Topping Film Stripping)",
    "level": "Fundamental üü¢",
    "category": "Acabamento & Finaliza√ß√£o",
    "grammarClass": "Locu√ß√£o substantiva feminina composta por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do franc√™s d√©caper (remover a camada superficial indesejada) e do grego therme (calor). T√©cnica de p√≥s-produ√ß√£o desenvolvida em grandes confec√ß√µes de toalhas e bon√©s nos anos 2000.",
    "summary": "Uso t√©cnico e controlado de um soprador t√©rmico ou pistola de ar quente para encolher, vaporizar e eliminar micro-res√≠duos de filme pl√°stico e fiapos de EVA presos entre os pontos.",
    "definition": "A decapagem t√©rmica de res√≠duos pl√°sticos e filmes termo-sol√∫veis (heat-gun topping film stripping, thermal flash post-embroidery cleaning, micro-EVA heat cleanup) √© o procedimento profissional de finaliza√ß√£o e limpeza de bordados atrav√©s da aplica√ß√£o r√°pida de um fluxo concentrado de ar quente (entre 120¬∞C e 160¬∞C). Utilizado ap√≥s a conclus√£o de bordados executados com filme pl√°stico termo-descart√°vel (Heat-Away / Solvy T√©rmico) sobre toalhas e veludos, ou em bordados 3D com espuma EVA, o choque t√©rmico de fra√ß√£o de segundo faz com que as pequenas rebarbas de pl√°stico e micropart√≠culas de EVA encolham instantaneamente para dentro da trama, desaparecendo da superf√≠cie visual sem queimar a linha de poli√©ster nem o tecido.",
    "technicalDetails": "O calor deve ser aplicado com pistola de ar quente com bocal direcionador mantido a uma dist√¢ncia segura de 8 cm a 12 cm da superf√≠cie da pe√ßa e em movimento circular cont√≠nuo por no m√°ximo 2 a 3 segundos por √°rea. Linhas de bordar 100% poli√©ster possuem ponto de fus√£o em torno de 250¬∞C a 260¬∞C, tornando-as altamente resistentes ao ar quente moderado de 140¬∞C, enquanto os filmes termo-pl√°sticos se contraem e desintegram a partir de 110¬∞C.",
    "howItWorks": [
      "1. O bordado √© conclu√≠do e retirado do bastidor da m√°quina.",
      "2. O operador rasga manualmente a maior parte do pl√°stico de cobertura (topping) ou da placa de EVA 3D.",
      "3. Restam pequenos pedacinhos transparentes ou fiapinhos coloridos presos no interior de cantos vivos e letras pequenas.",
      "4. Liga-se a pistola de ar quente na temperatura m√©dia (140¬∞C) e direciona-se o fluxo com movimentos circulares r√°pidos sobre o bordado.",
      "5. Em 2 segundos, todos os res√≠duos pl√°sticos encolhem microscopicamente e somem, deixando o bordado limpo, n√≠tido e perfeito."
    ],
    "beginnerExplanation": "√â o 'truque do secador de ar quente' para deixar o bordado limpinho num piscar de olhos! Quando voc√™ borda toalha com plastiquinho por cima ou faz bordado 3D com EVA, sempre sobram uns caquinhos chatos de pl√°stico presos no meinho das letras que demoram para tirar com a pin√ßa. Voc√™ passa um arzinho quente por cima por 2 segundinhos e todos os caquinhos somem como m√°gica!",
    "applications": [
      "Limpeza ultrarr√°pida de filmes termo-sol√∫veis em toalhas de banho e roup√µes felpudos.",
      "Acabamento impec√°vel de bordados 3D em relevo sobre bon√©s e jaquetas.",
      "Elimina√ß√£o de micro-fiapos de linha e penugens soltas sobre tecidos escuros.",
      "Finaliza√ß√£o em escala industrial de alta produtividade sem uso de √°gua."
    ],
    "characteristics": [
      "Ganho de mais de 80% no tempo de limpeza e acabamento manual por pe√ßa bordada.",
      "Totalmente a seco, permitindo embalar e despachar a encomenda do cliente na mesma hora.",
      "Acabamento de padr√£o de f√°brica internacional com aspecto limpo e profissional."
    ],
    "commonErrors": [
      "‚ùå Parar a pistola de ar quente parada no mesmo ponto por mais de 5 segundos, correndo o risco de queimar o tecido ou derreter a linha",
      "‚ùå Usar ar quente sobre tecidos sint√©ticos ultrafinos sens√≠veis ao calor (como n√°ilon imperme√°vel ou organza pl√°stica)",
      "‚ùå Aproximar o bico de metal quente da pistola encostando diretamente na linha de bordar"
    ],
    "troubleshootingTips": [
      "Se o pl√°stico n√£o estiver encolhendo: Aproxime a pistola para 8 cm de dist√¢ncia ou aumente ligeiramente a temperatura para 150¬∞C em movimento cont√≠nuo.",
      "Se o tecido for muito sens√≠vel: Fa√ßa um teste pr√©vio em um retalho da mesma pe√ßa antes de aplicar sobre o bordado principal.",
      "Se sobrarem res√≠duos teimosos de EVA: Utilize a pontinha de uma pin√ßa de precis√£o enquanto o EVA ainda estiver morninho e male√°vel."
    ],
    "dicaArtrelados": "Tenha sempre um soprador t√©rmico com regulagem de temperatura ao lado da sua mesa de acabamento: voc√™ vai limpar toalhas e bon√©s 3D em 5 segundos sem perder horas catando pedacinhos de pl√°stico com a pin√ßa!",
    "voceSabia": "As grandes confec√ß√µes de moda praia e enxoval da Europa utilizam t√∫neis de ar quente computadorizados por onde as toalhas passam em esteiras rolantes para fazer a limpeza t√©rmica autom√°tica de milhares de pe√ßas por hora!",
    "practicalExercise": "Pegue um retalho com bordado em toalha com filme pl√°stico rasgado. Pegue um secador de cabelo potente no ar bem quente ou um soprador t√©rmico e passe sobre os caquinhos de pl√°stico: observe como eles encolhem e somem instantaneamente!",
    "quickSummary": "Procedimento de limpeza a seco com ar quente que encolhe e elimina res√≠duos de pl√°stico e fiapos de EVA dos bordados em segundos.",
    "recommendedSettings": {
      "speedPPM": "N/A (T√©cnica de acabamento manual p√≥s-bordado)",
      "needleType": "Compat√≠vel com todos os bordados em poli√©ster",
      "stabilizer": "Temperatura de ar recomendada: 120¬∞C a 150¬∞C"
    },
    "relatedTerms": [
      "Camada de Cobertura / Topping",
      "Bordado 3D / Alto Relevo com Espuma",
      "Dureza Shore de Espumas 3D para Bordado em Alto Relevo",
      "Pin√ßa de Limpeza e Acabamento",
      "Entretela Termossol√∫vel / Filme T√©rmico"
    ],
    "tags": [
      "d-085",
      "decapagem termica",
      "soprador termico",
      "ar quente",
      "acabamento",
      "limpeza",
      "eva 3d",
      "topping",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GUNOLD TECHNICAL REPORT. Heat-Away Films and Thermal Stripping Techniques. Stockstadt, 2022.",
      "MADEIRA GARMENT CARE. Post-Embroidery Heat Finishing and Clean-up Procedures. Freiburg, 2021.",
      "ARTRELADOS. Guia de Acabamento e Finaliza√ß√£o Perfeita no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-086-densidade-adaptativa-area-smart-density-scaling",
    "code": "D-086",
    "letter": "D",
    "term": "Densidade Adaptativa por √Årea / Smart Density Reduction (Smart Density Scaling Algorithm)",
    "level": "Intermedi√°rio üü°",
    "category": "Programa√ß√£o de Bordado",
    "grammarClass": "Locu√ß√£o substantiva feminina composta por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do latim adaptare (ajustar perfeitamente), area (superf√≠cie plana) e do ingl√™s smart scaling (redimensionamento inteligente computacional dos anos 2000).",
    "summary": "Algoritmo inteligente de software que recalcula e alivia a densidade automaticamente em √°reas estreitas ou ao reduzir o tamanho de matrizes, impedindo o empilhamento de pontos.",
    "definition": "A densidade adaptativa por √°rea ou redu√ß√£o inteligente de densidade (smart density scaling algorithm, adaptive stitch density modulation, dynamic area spacing recalculation) √© o recurso avan√ßado de processamento vetorial presente em softwares profissionais de bordado que ajusta dinamicamente a dist√¢ncia entre os pontos conforme a geometria e a escala do objeto mudam. Quando uma matriz √© reduzida de tamanho em 20% ou quando uma coluna de cetim se afunila para larguras menores que 1,5 mm, o algoritmo afasta proporcionalmente os pontos (aumentando o espa√ßamento de 0,40 mm para 0,60 mm), evitando o estrangulamento de linha e furos no tecido.",
    "technicalDetails": "O algoritmo analisa a √°rea da se√ß√£o transversal do objeto vetorial e calcula a densidade de pontos por mil√≠metro quadrado. Em colunas que convergem para v√©rtices afunilados (efeito rabo de peixe / taper), ativa-se automaticamente a 'fra√ß√£o de pontos curtos' (Short Stitches), intercalando um ponto longo e um ponto recuado a 50% da margem interna, garantindo a densidade visual externa sem sobrecarregar o v√©rtice interno.",
    "howItWorks": [
      "1. O digitalizador ativa a fun√ß√£o 'Smart Density / Densidade Adaptativa' nas prefer√™ncias do software.",
      "2. Ao desenhar ou redimensionar um logotipo para um tamanho 30% menor no peito de uma camisa, o software recalcula toda a matriz.",
      "3. As colunas largas mant√™m espa√ßamento de 0,40 mm e as pontas finas de letras recebem espa√ßamento aberto de 0,55 mm.",
      "4. O n√∫mero total de pontos cai proporcionalmente (ex: de 12.000 para 8.500 pontos) sem perda de qualidade visual.",
      "5. Na m√°quina de bordar, a matriz roda suavemente sem cortes falsos nem superaquecimento da agulha."
    ],
    "beginnerExplanation": "√â a 'intelig√™ncia do programa' que impede a m√°quina de furar o tecido quando voc√™ diminui um desenho! Quando voc√™ encolhe uma matriz no computador, se os pontos continuarem no mesmo lugar, eles v√£o ficar espremidos como sardinha em lata e quebrar a linha. A densidade inteligente espalha os pontinhos com carinho nos cantinhos finos para o bordado ficar levinho e perfeito!",
    "applications": [
      "Redimensionamento proporcional de logotipos corporativos para bordado em bolsos e golas.",
      "Digitaliza√ß√£o de letras com serifas finas e pontas afiladas de fontes cl√°ssicas (Times e Garamond).",
      "Bordados florais com p√©talas e folhas que se estreitam nas extremidades.",
      "Otimiza√ß√£o de arquivos pesados para acelerar a produ√ß√£o em m√°quinas industriais."
    ],
    "characteristics": [
      "Preserva√ß√£o da maleabilidade e do toque suave do tecido bordado.",
      "Elimina√ß√£o do ac√∫mulo excessivo de pontos e n√≥s em pontas de letras e cantos agudos.",
      "Ajuste 100% autom√°tico e em tempo real durante a edi√ß√£o no software."
    ],
    "commonErrors": [
      "‚ùå Reduzir uma matriz salva em formato de pontos (DST ou PES) no painel da m√°quina sem recalcular pontos, compactando a densidade em 50%",
      "‚ùå Desativar os pontos curtos autom√°ticos (Short Stitches) em curvas fechadas de ponto cheio",
      "‚ùå Permitir que colunas com menos de 0,8 mm de largura recebam densidade pesada de 0,35 mm"
    ],
    "troubleshootingTips": [
      "Se as pontas das letras ficarem duras como pedras: Abra o arquivo original no software e ative a op√ß√£o 'Auto Short Stitches' nas propriedades de cetim.",
      "Se a matriz redimensionada perder a cobertura: Ajuste o limite m√≠nimo de densidade para n√£o ultrapassar 0,48 mm de espa√ßamento.",
      "Se a linha arrebentar nas letras pequenas: Substitua a agulha por uma 65/9 e use linha fina calibre 60wt."
    ],
    "dicaArtrelados": "Sempre que precisar diminuir o tamanho de uma matriz em mais de 10%, fa√ßa isso dentro do software de bordado no computador para ele recalcular os pontos: nunca diminua pelo painel da m√°quina, pois a m√°quina apenas encolhe o espa√ßo e amassa os pontos!",
    "voceSabia": "Os primeiros algoritmos de densidade adaptativa foram criados na Austr√°lia pela Wilcom em 1985 e revolucionaram a ind√∫stria mundial, permitindo pela primeira vez na hist√≥ria que uma mesma matriz fosse usada em jaquetas e camisas polo!",
    "practicalExercise": "No seu software de matrizes, desenhe uma estrela com pontas bem afiadas. Observe como o programa automaticamente insere pontos curtos nas pontas para n√£o empilhar linha no centro da estrela!",
    "quickSummary": "Algoritmo inteligente de software que afasta os pontos em √°reas finas e redimensionamentos para evitar ac√∫mulos r√≠gidos de linha.",
    "recommendedSettings": {
      "speedPPM": "N/A (Processamento algor√≠tmico em software de bordado)",
      "needleType": "Compat√≠vel com todos os calibres de agulha",
      "stabilizer": "Redu√ß√£o de 15% a 25% na carga total de pontos"
    },
    "relatedTerms": [
      "Densidade de Ponto Cheio (Satin Density)",
      "Pontos Curtos em Curvas (Short Stitches)",
      "Espa√ßamento de Ponto (Stitch Spacing)",
      "Divis√£o de Ponto Longo e Ponto Dividido Autom√°tico",
      "Compensa√ß√£o de Repuxo (Pull Compensation)"
    ],
    "tags": [
      "d-086",
      "densidade adaptativa",
      "smart density",
      "redimensionamento",
      "pontos curtos",
      "programacao",
      "software",
      "artrelados"
    ],
    "bibliographicReferences": [
      "WILCOM INTERNATIONAL. Smart Stitch Density Scaling & Short Stitch Algorithms. Sydney, 2023.",
      "PULSE DIGITAL LABS. Dynamic Area Spacing & Density Modulation in Modern Embroidery. Toronto, 2022.",
      "ARTRELADOS. Guia de Redimensionamento e Otimiza√ß√£o no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-087-diagnostico-osciloscopio-motores-passo-xy",
    "code": "D-087",
    "letter": "D",
    "term": "Diagn√≥stico por Oscilosc√≥pio de Motores de Passo X/Y (Pantograph Stepper Motor Diagnostic)",
    "level": "Avan√ßado üî¥",
    "category": "Equipamentos e M√°quinas",
    "grammarClass": "Locu√ß√£o substantiva masculina composta por substantivo e locu√ß√µes adjetivas.",
    "origin": "Do grego oscillare (balan√ßar em ondas regulares) e skopein (examinar visualmente). Metodologia mecatr√¥nica de alta precis√£o adotada no suporte t√©cnico industrial nos anos 1990.",
    "summary": "Procedimento eletr√¥nico avan√ßado de an√°lise de forma de onda e pulsos el√©tricos nos drivers dos servomotores X/Y para diagnosticar perda de passos, trepida√ß√µes e desalinhamento de matrizes.",
    "definition": "O diagn√≥stico por oscilosc√≥pio de motores de passo e servomotores dos eixos X/Y (pantograph stepper motor oscilloscope diagnostic, pulse-width modulation wave analysis, encoder signal feedback troubleshooting) √© o m√©todo mecatr√¥nico de teste eletr√¥nico utilizado na manuten√ß√£o t√©cnica especializada de m√°quinas de bordar industriais e semiprofissionais. Atrav√©s de pontas de prova conectadas aos terminais das fases dos motores e aos canais de sinal A/B/Z dos encoders √≥pticos, o t√©cnico visualiza em tempo real as ondas senoidais ou quadradas de modula√ß√£o por largura de pulso (PWM), identificando ru√≠dos eletromagn√©ticos, quedas de tens√£o, queima de transistores MOSFET e perda microsc√≥pica de passos durante acelera√ß√µes bruscas do pant√≥grafo.",
    "technicalDetails": "Utiliza-se oscilosc√≥pio digital de 2 ou 4 canais com largura de banda m√≠nima de 50 MHz e taxa de amostragem de 1 GSa/s. O teste avalia a simetria de quadratura de 90¬∞ entre os sinais dos canais de quadratura do encoder do pant√≥grafo e a integridade da corrente de pico nas bobinas dos motores trif√°sicos ou h√≠bridos, permitindo detectar com exatid√£o falhas intermitentes que causam desvios milim√©tricos no alinhamento de contornos na matriz.",
    "howItWorks": [
      "1. O t√©cnico remove a tampa de prote√ß√£o da placa-m√£e ou dos drivers de pot√™ncia X/Y da m√°quina de bordar.",
      "2. Conecta as garras de terra e as pontas de prova atenuadas (10X) nos pinos de sa√≠da de controle dos motores de passo.",
      "3. Executa um padr√£o de teste de alta velocidade com movimentos diagonais cont√≠nuos no pant√≥grafo.",
      "4. O oscilosc√≥pio captura a forma de onda da corrente e a resposta dos sensores de retorno √≥ptico.",
      "5. Analisa-se a presen√ßa de picos de ru√≠do induzido, satura√ß√£o de bobina ou defasagem de quadratura, regulando o ganho do driver ou substituindo componentes defeituosos."
    ],
    "beginnerExplanation": "√â como fazer um 'eletrocardiograma do cora√ß√£o el√©trico da m√°quina de bordar'! Quando a m√°quina come√ßa a 'desencontrar os contornos' e o desenho fica torto sem motivo, o t√©cnico liga esse aparelhinho com telinha cheia de ondas verdes para ver se os motores que empurram o bastidor est√£o recebendo a energia certinha ou se est√£o 'trope√ßando' no meio do caminho!",
    "applications": [
      "Diagn√≥stico de deslocamentos misteriosos de contornos e perda de registro em matrizes grandes.",
      "Identifica√ß√£o de queima de canais de pot√™ncia em placas de comando de m√°quinas industriais.",
      "Calibra√ß√£o de sensibilidade e amortecimento eletr√¥nico (damping) ap√≥s troca de motores.",
      "Detec√ß√£o de ru√≠dos causados por falta de aterramento el√©trico adequado no ateli√™."
    ],
    "characteristics": [
      "Identifica√ß√£o infal√≠vel da causa raiz de defeitos el√©tricos sem necessidade de trocar pe√ßas no escuro.",
      "Medi√ß√£o precisa de micro-segundos na resposta mec√¢nica dos eixos de movimenta√ß√£o.",
      "Garantia de que a m√°quina opere na sua velocidade m√°xima nominal com total precis√£o geom√©trica."
    ],
    "commonErrors": [
      "‚ùå Conectar pontas de prova em alta voltagem sem isolamento adequado, queimando o oscilosc√≥pio ou a placa da m√°quina",
      "‚ùå Confundir folga mec√¢nica nas correias dentadas com perda de pulsos el√©tricos do motor",
      "‚ùå Operar m√°quinas computadorizadas sem barra de aterramento no padr√£o SPDA no ateli√™"
    ],
    "troubleshootingTips": [
      "Se a onda senoidal do motor apresentar deforma√ß√£o chanfrada: O driver de pot√™ncia est√° superaquecendo; verifique a pasta t√©rmica e o cooler da placa-m√£e.",
      "Se houver ru√≠dos espalhados na tela: O cabo de aterramento do chassi da m√°quina est√° solto ou com resist√™ncia acima de 5 Ohms.",
      "Se o sinal do encoder sumir em velocidades altas: O disco √≥ptico do sensor est√° sujo de p√≥ de linha; limpe com cotonete e √°lcool isoprop√≠lico."
    ],
    "dicaArtrelados": "Antes de chamar a assist√™ncia t√©cnica achando que a placa da m√°quina queimou quando os contornos desalinharem, fa√ßa um teste simples: desligue a m√°quina da tomada por 5 minutos para descarregar a est√°tica e limpe as correias do bastidor ‚Äî muitas vezes √© apenas poeira ou est√°tica acumulada!",
    "voceSabia": "Os modernos servomotores sem escovas (Brushless) das m√°quinas de bordar de √∫ltima gera√ß√£o executam mais de 20.000 c√°lculos de corre√ß√£o de trajet√≥ria por segundo enquanto o bastidor se move a 1.000 pontos por minuto!",
    "practicalExercise": "Observe o movimento do carro do bastidor em um bordado r√°pido: note como a parada em cada ponto √© instant√¢nea e firme. Essa estabilidade geom√©trica milim√©trica √© fruto do controle eletr√¥nico de precis√£o dos motores de passo!",
    "quickSummary": "Diagn√≥stico eletr√¥nico avan√ßado que analisa os pulsos el√©tricos dos motores do bastidor para eliminar perdas de passo e desenhos tortos.",
    "recommendedSettings": {
      "speedPPM": "N/A (Procedimento de manuten√ß√£o eletroeletr√¥nica)",
      "needleType": "Compat√≠vel com todos os modelos eletr√¥nicos",
      "stabilizer": "Tens√£o de teste: 24V a 48V DC conforme a controladora"
    },
    "relatedTerms": [
      "Pant√≥grafo / Carro de Movimenta√ß√£o do Bastidor",
      "Dreno de Eletricidade Est√°tica em M√°quinas de Bordar",
      "Curva de Acelera√ß√£o e Frenagem do Pant√≥grafo / S-Curve Kinematics",
      "Comutador de Cores / Motor de Passo da Troca de Agulhas",
      "Manuten√ß√£o Preventiva do Cabe√ßote"
    ],
    "tags": [
      "d-087",
      "osciloscopio",
      "motores de passo",
      "diagnostico",
      "eletronica",
      "manutencao",
      "pantografo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN ELECTRONICS. Stepper & Servo Motor Diagnostics with Digital Oscilloscopes. Ichinomiya, 2022.",
      "TAJIMA MECHATRONICS SERVICE. Pulse Width Modulation & Driver Analysis Handbook. Nagoya, 2021.",
      "ARTRELADOS. Eletr√¥nica, Automa√ß√£o e Diagn√≥stico de M√°quinas no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-088-dedo-segurador-linha-corte-trava-mecanica-superior",
    "code": "D-088",
    "letter": "D",
    "term": "Dedo Segurador de Linha no Corte / Trava Mec√¢nica Superior (Thread Wiper & Upper Thread Hook)",
    "level": "Fundamental üü¢",
    "category": "Equipamentos e M√°quinas",
    "grammarClass": "Substantivo masculino composto por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do portugu√™s dedo (haste articulada fina) e do ingl√™s wiper (limpador/haste oscilante derivada do sax√£o wipian). Desenvolvido pela engenharia t√™xtil japonesa nos primeiros cabe√ßotes autom√°ticos em 1978.",
    "summary": "Pequena haste met√°lica articulada acionada por solenoide ou came que puxa a ponta da linha cortada para cima do tecido no milissegundo exato ap√≥s o corte autom√°tico.",
    "definition": "O dedo segurador de linha no corte ou limpador de linha superior (thread wiper, thread picker hook, upper thread puller arm, automatic thread wiper solenoid assembly) √© um mecanismo eletromec√¢nico fundamental localizado logo atr√°s ou ao lado da barra de agulha no cabe√ßote de bordado. No exato instante em que o sistema de facas inferiores sob a chapa de agulha corta a linha superior e inferior ao final de um bloco de cor ou pulo longo, o dedo segurador executa um movimento semicircular r√°pido de varredura sob o calcador, la√ßando a ponta solta da linha e puxando-a para a parte superior do tecido, prendendo-a temporariamente na mola retentora para que n√£o fique presa sob os novos pontos do pr√≥ximo objeto.",
    "technicalDetails": "O mecanismo √© atuado por solenoide eletromagn√©tico de 24V ou haste mec√¢nica ligada ao came de corte. O gancho do wiper √© fabricado em a√ßo inoxid√°vel polido e deve ser calibrado com folga de 1,0 mm a 1,5 mm em rela√ß√£o √† lateral da haste da agulha na sua posi√ß√£o mais alta, garantindo que o gancho alcance a linha sem nunca colidir com a agulha ou com o calcador de bordado.",
    "howItWorks": [
      "1. A m√°quina conclui um elemento bordado e o comando de corte autom√°tico √© acionado.",
      "2. As facas inferiores cortam a linha sob a chapa de agulha e a alavanca estica-fio sobe para o ponto morto superior.",
      "3. O solenoide do wiper dispara instantaneamente, fazendo a haste met√°lica curvar-se para a frente sob a ponta da agulha.",
      "4. O gancho recolhe a ponta da linha superior cortada e puxa-a para cima, assentando-a na mola de reten√ß√£o superior.",
      "5. O pant√≥grafo move o bastidor livremente para a pr√≥xima coordenada sem arrastar a linha solta por cima da roupa bordada."
    ],
    "beginnerExplanation": "√â a 'm√£ozinha de a√ßo r√°pida' que limpa a linha cortada! Sabe quando a m√°quina corta a linha e voc√™ n√£o v√™ nenhum fiapo sobrando por cima do bordado? Essa hastezinha de metal d√° um pulinho na frente da agulha, pega a ponta da linha cortada e puxa para cima bem rapidinho, para a m√°quina n√£o costurar por cima do pr√≥prio fio solto!",
    "applications": [
      "Corte limpo de linha entre letras e elementos separados em qualquer tipo de matriz.",
      "Preven√ß√£o contra fios soltos engolidos e costurados debaixo de pontos cheios.",
      "Trabalhos de bordado de alta defini√ß√£o em camisetas, uniformes e enxovais de beb√™.",
      "Redu√ß√£o dr√°stica do trabalho manual de limpeza com tesourinha de arremate."
    ],
    "characteristics": [
      "Movimento ultrarr√°pido com tempo de resposta inferior a 50 milissegundos.",
      "Haste em a√ßo polido com acabamento espelhado para n√£o desfiar as fibras da linha.",
      "Sincronismo 100% eletr√¥nico integrado √† placa principal da m√°quina de bordar."
    ],
    "commonErrors": [
      "‚ùå Deixar a haste do wiper torta ap√≥s uma quebra grave de agulha, fazendo o gancho bater no calcador",
      "‚ùå Ac√∫mulo de fiapos e ceras no gancho do wiper que impedem a linha de desencaixar na reinicializa√ß√£o da costura",
      "‚ùå Desativar o wiper nas configura√ß√µes do painel da m√°quina, deixando pontas compridas de linha ca√≠das sobre o tecido"
    ],
    "troubleshootingTips": [
      "Se a linha cortada continuar caindo para baixo do tecido: Verifique se a mola do wiper est√° com tens√£o suficiente para segurar a pontinha da linha.",
      "Se o wiper fizer um estalo met√°lico e travar: Desligue a m√°quina e verifique se n√£o h√° linha enrolada no eixo do solenoide de acionamento.",
      "Se a agulha bater no wiper na descida: Ajuste o parafuso de fixa√ß√£o da haste recuando 1 mm para a esquerda."
    ],
    "dicaArtrelados": "Mantenha a pontinha do dedo segurador (wiper) sempre brilhante e livre de fiapos: passe uma gotinha de √°lcool em um pano limpo toda semana para que ele continue pegando a linha com precis√£o cir√∫rgica a cada troca de cor!",
    "voceSabia": "Antes da inven√ß√£o do thread wiper no final dos anos 1970, as bordadeiras tinham que parar a m√°quina manualmente a cada corte e puxar as pontas de linha com uma pin√ßa para a m√°quina n√£o estragar o bordado!",
    "practicalExercise": "Coloque a m√°quina para bordar uma palavra com v√°rias letras separadas. Olhe de pertinho para a barra de agulha no momento em que ela termina uma letra: observe o movimento super r√°pido da hastezinha met√°lica puxando a linha para cima!",
    "quickSummary": "Haste met√°lica articulada que puxa a ponta da linha cortada para cima do tecido, mantendo a frente do bordado 100% limpa.",
    "recommendedSettings": {
      "speedPPM": "Sincronizado automaticamente com qualquer velocidade de costura",
      "needleType": "Compat√≠vel com todas as agulhas do cabe√ßote",
      "stabilizer": "Folga nominal calibrada: 1,0 a 1,5 mm da agulha"
    },
    "relatedTerms": [
      "Corte Autom√°tico de Pulos e Conex√µes (Auto-Trimmer)",
      "Barra de Agulha",
      "Calcador de Bordado / Sapatilha de Pulo",
      "Alavanca Estica-Fio (Take-Up Lever)",
      "Chapa de Agulha (Needle Plate / Throat Plate)"
    ],
    "tags": [
      "d-088",
      "dedo segurador",
      "thread wiper",
      "corte de linha",
      "mecanica",
      "limpeza",
      "cabe√ßote",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL SERVICE. Thread Wiper Mechanism & Trimmer Solenoid Timing. Nagoya, 2022.",
      "BARUDAN MAINTENANCE GUIDE. Upper Thread Wiper Alignment & Maintenance. Ichinomiya, 2021.",
      "ARTRELADOS. Mec√¢nica, Dispositivos e Automa√ß√£o de Cabe√ßotes no DIBE. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-089-delineamento-ponto-trancado-efeito-cordao-sao-francisco",
    "code": "D-089",
    "letter": "D",
    "term": "Delineamento por Ponto Tran√ßado / Efeito Cord√£o de S√£o Francisco (Braided Stem Stitch Run)",
    "level": "Intermedi√°rio üü°",
    "category": "Tipos de Pontos & Estilos",
    "grammarClass": "Substantivo masculino composto por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do latim delineare (tra√ßar linhas) e do portugu√™s tran√ßado. Inspirado nos cl√°ssicos cord√µes de h√°bito da Ordem Franciscana (s√©culo XIII) e adaptado para algoritmos de digitaliza√ß√£o nos anos 1990.",
    "summary": "Estilo de ponto linear decorativo que programa uma sequ√™ncia de micro-zigue-zagues entrela√ßados simulando uma corda n√°utica torcida, n√≥s ornamentais ou cord√£o de S√£o Francisco.",
    "definition": "O delineamento por ponto tran√ßado ou ponto haste em cord√£o torcido (braided stem stitch run, rope contour stitch, twisted cord motif outline) √© uma t√©cnica de digitaliza√ß√£o linear especializada em criar contornos com aspecto de passamanaria torcida tridimensional sem o uso de dispositivos mec√¢nicos externos de cord√£o. O software gera uma sequ√™ncia matem√°tica de pontos cruzados obl√≠quos com sobreposi√ß√£o r√≠tmica que mimetiza perfeitamente os gomos helicoidais de um cord√£o n√°utico ou de um cord√£o franciscano de seda, conferindo requinte aristocr√°tico a molduras, monogramas, caules bot√¢nicos e bras√µes.",
    "technicalDetails": "O padr√£o tran√ßado √© constru√≠do com largura de tra√ßo de 1,8 mm a 3,5 mm e passo de repeti√ß√£o helicoidal de 1,2 mm a 2,0 mm. Ao contr√°rio de uma coluna simples de ponto cheio com √¢ngulo √∫nico, o ponto tran√ßado alterna √¢ngulos obl√≠quos opostos (+35¬∞ e -35¬∞) com pontos de ancoragem centralizados, produzindo um relevo com duplo reflexo de luz e excelente elasticidade longitudinal em curvas org√¢nicas fechadas.",
    "howItWorks": [
      "1. O digitalizador tra√ßa o vetor linear no software de matrizes e seleciona o estilo de preenchimento como 'Ponto Tran√ßado / Efeito Cord√£o / Stem Motif'.",
      "2. Define a largura do cord√£o para 2,5 mm e o passo da tran√ßa para 1,5 mm.",
      "3. O software gera a malha helicoidal de pontos com entrela√ßamento autom√°tico.",
      "4. Na m√°quina de bordar, utiliza-se preferencialmente linha de alto brilho (Rayon ou Poli√©ster Trilobal) para real√ßar as facetas da tran√ßa.",
      "5. A costura avan√ßa com fluidez criando uma moldura com textura de corda torcida de alto impacto est√©tico."
    ],
    "beginnerExplanation": "√â aquele contorno lindo que parece uma 'cordinha torcida de marinheiro ou cord√£o dourado de S√£o Francisco'! Em vez de fazer uma linha lisa comum, a m√°quina vai cruzando os pontinhos de um jeito especial que d√° a impress√£o exata de que tem uma cordinha de seda de verdade costurada na pe√ßa! Fica um encanto para caules de flores e bordas de toalhas!",
    "applications": [
      "Molduras cl√°ssicas de monogramas e bras√µes familiares em toalhas de banho e lavabo.",
      "Caules de rosas, ramos de videiras e galhos florais em pe√ßas de mesa posta de luxo.",
      "Contornos tem√°ticos em bordados n√°uticos, marinheiros e artigos de praia.",
      "Decora√ß√£o lit√∫rgica em paramentos religiosos e toalhas de altar."
    ],
    "characteristics": [
      "Visual de passamanaria cl√°ssica sem necessidade de aparelhos mec√¢nicos especiais no cabe√ßote.",
      "Reflexo acetinado multidirecional que destaca o brilho nobre da linha de bordar.",
      "Alta flexibilidade que acompanha curvas sem deformar nem abrir frestas na curvatura."
    ],
    "commonErrors": [
      "‚ùå Programar o ponto tran√ßado com largura muito estreita (menos de 1,2 mm), fazendo os n√≥s se fundirem em uma linha reta sem defini√ß√£o",
      "‚ùå Usar linha fosca ou de baixa qualidade que esconde o relevo das facetas tran√ßadas",
      "‚ùå Borda sobre tecidos muito felpados sem pl√°stico de cobertura (topping), permitindo que a felpa engula o relevo da tran√ßa"
    ],
    "troubleshootingTips": [
      "Se a tran√ßa parecer reta e sem textura: Aumente a largura do tra√ßo no software para 2,8 mm e aumente o √¢ngulo de inclina√ß√£o dos gomos.",
      "Se a linha arrebentar nas curvas da tran√ßa: Reduza a velocidade para 700 PPM e verifique a afia√ß√£o da agulha.",
      "Se a felpa da toalha estiver cobrindo a corda: Coloque uma folha de pl√°stico hidrossol√∫vel por cima da toalha antes de bordar."
    ],
    "dicaArtrelados": "Para criar caules de flores que parecem brotar da toalha, use o Ponto Tran√ßado em tom de verde musgo brilhante com linha trilobal: o efeito torcido d√° uma vida e um volume √† flor que nenhum ponto reto tradicional consegue igualar!",
    "voceSabia": "O cord√£o franciscano tradicional com tr√™s n√≥s √© utilizado pelos frades da Ordem de S√£o Francisco desde o ano 1209 para simbolizar os votos sagrados de pobreza, castidade e obedi√™ncia!",
    "practicalExercise": "No seu programa de bordado, trace um c√≠rculo de 8 cm de di√¢metro e aplique o estilo 'Ponto Tran√ßado / Rope Run' com 3 mm de largura. Borde em um retalho com linha dourada ou verde e sinta o relevo da cordinha com a ponta dos dedos!",
    "quickSummary": "Estilo de contorno que cruza pontos em padr√£o helicoidal, simulando cord√µes torcidos e caules florais com nobreza e relevo.",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "75/11 Ponta Bola Leve (SES)",
      "stabilizer": "Entretela rasg√°vel de 60g + Topping hidrossol√∫vel se for toalha"
    },
    "relatedTerms": [
      "Ponto de Corrida (Running Stitch)",
      "Contorno Duplo e Triplo / Ponto Gr√£o de Feij√£o",
      "Cording / Aplica√ß√£o Computadorizada de Cord√£o Grosso",
      "Ponto Cheio (Satin Stitch)",
      "Linha de Poli√©ster Trilobal"
    ],
    "tags": [
      "d-089",
      "ponto trancado",
      "cordao sao francisco",
      "rope stitch",
      "contorno decorativo",
      "estilos de ponto",
      "artesanal",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BERNINA EMBROIDERY SOFTWARE. Decorative Runs, Stem Motifs and Rope Stitch Effects. Steckborn, 2023.",
      "WILCOM ADVANCED MOTIFS. Creating Custom Braided and Twisted Cord Outlines. Sydney, 2022.",
      "ARTRELADOS. Guia de Pontos Decorativos e Estilos Especiais no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-090-deformacao-viscoelastica-couros-sinteticos-perfuracao",
    "code": "D-090",
    "letter": "D",
    "term": "Deforma√ß√£o Viscoel√°stica de Couros e Sint√©ticos sob Perfura√ß√£o (Viscoelastic Leather Needle Creep)",
    "level": "Avan√ßado üî¥",
    "category": "Tecidos & Estabilizadores",
    "grammarClass": "Locu√ß√£o substantiva feminina composta por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do latim viscosus (pegajoso/com resist√™ncia a escoamento) e do grego elastikos (capaz de recuperar a forma). Conceito da f√≠sica dos pol√≠meros e ci√™ncia dos materiais aplicado √† ind√∫stria automotiva e cal√ßadista nos anos 1990.",
    "summary": "Fen√¥meno f√≠sico onde couros leg√≠timos e materiais sint√©ticos (PU/PVC) deformam, fecham ou esgar√ßam os furos da agulha de forma assim√©trica sob a tra√ß√£o cont√≠nua dos pontos de bordado.",
    "definition": "A deforma√ß√£o viscoel√°stica de couros naturais e laminados sint√©ticos sob perfura√ß√£o mec√¢nica (viscoelastic leather deformation and needle-hole creep, polymeric synthetic substrate relaxation dynamics) √© o comportamento elastopl√°stico complexo exibido por couros vacuns e materiais sint√©ticos poliuret√¢nicos durante o processo de bordado computadorizado. Ao contr√°rio de tecidos tramados convencionais (onde a agulha afasta os fios da trama), no couro a agulha corta e rompe permanentemente as fibras de col√°geno ou o substrato n√£o-tecido; ao mesmo tempo, a viscoelasticidade do material faz com que as bordas dos furos continuem se deformando (relaxamento de tens√£o) horas ap√≥s o bordado, podendo causar rasgos cont√≠nuos se a densidade de pontos for excessiva ou se as pontas de corte da agulha n√£o forem adequadas.",
    "technicalDetails": "Couros automotivos e de estofamento apresentam comportamento viscoel√°stico n√£o-linear. O protocolo t√©cnico exige a utiliza√ß√£o de agulhas especiais com ponta de corte de formato triangular ou lenticular (Ponta LR para costura inclinada decorativa ou Ponta S para cortes longitudinais discretos) em calibres 80/12 ou 90/14. A densidade de pontos deve ser obrigatoriamente reduzida em 20% a 30% (espa√ßamento nunca inferior a 0,50 mm) e o comprimento de ponto m√≠nimo fixado em 2,5 mm para evitar o efeito de 'linha picotada de tal√£o de cheque', que destacaria o couro.",
    "howItWorks": [
      "1. O digitalizador prepara a matriz para couro com densidade aliviada (0,50 mm a 0,55 mm) e comprimentos de ponto longos.",
      "2. O couro √© montado no bastidor sem esticar, utilizando entretela de recorte firme colada com spray de baixa ader√™ncia para n√£o manchar o verso.",
      "3. Instalam-se agulhas especiais de corte para couro (Schmetz ou Groz-Beckert ponta LR).",
      "4. A m√°quina borda em velocidade moderada (500 a 650 PPM) para reduzir o aquecimento por atrito na l√¢mina da agulha.",
      "5. A pe√ßa √© finalizada mantendo a integridade mec√¢nica do couro, com pontos acetinados perfeitos e zero risco de rasgo no uso di√°rio."
    ],
    "beginnerExplanation": "Couro leg√≠timo e courino sint√©tico n√£o s√£o como paninho de algod√£o que voc√™ pode furar √† vontade: cada furo de agulha no couro √© um corte definitivo que nunca mais fecha! Se voc√™ colocar pontos muito juntinhos, a m√°quina corta o couro como se fosse uma folha de papel picotado de caderno. Com a programa√ß√£o certa e a agulha especial para couro, o bordado fica chique, firme e dura a vida inteira sem rasgar!",
    "applications": [
      "Bordados automotivos em bancos de couro, volantes e encostos de cabe√ßa de ve√≠culos de luxo.",
      "Jaquetas de couro leg√≠timo, coletes de motociclistas e botas de montaria.",
      "Bolsas, carteiras, cintos e artigos de marcenaria e maroquinaria fina.",
      "Estofamentos n√°uticos em courvin imperme√°vel e m√≥veis corporativos de alto padr√£o."
    ],
    "characteristics": [
      "Preserva√ß√£o total da resist√™ncia √† tra√ß√£o e durabilidade mec√¢nica do couro.",
      "Elimina√ß√£o do risco de corte em cadeia (efeito picote de papel) no contorno bordado.",
      "Acabamento de luxo com pontos brilhantes e assentamento perfeito na superf√≠cie do couro."
    ],
    "commonErrors": [
      "‚ùå Usar agulha ponta bola de malha em couro, que esmaga e rasga a flor do couro criando furos feios e esgar√ßados",
      "‚ùå Digitalizar letras pequenas com densidade alta (0,30 mm), cortando o couro em peda√ßos na m√°quina",
      "‚ùå Prender o couro no bastidor com aperto mec√¢nico excessivo, deixando marcas circulares indel√©veis e permanentes"
    ],
    "troubleshootingTips": [
      "Se os furos da agulha parecerem muito grandes e abertos: Troque a agulha por um calibre mais fino (75/11 LR) e reduza ligeiramente a tens√£o da linha superior.",
      "Se o couro estiver rasgando na linha do contorno: Aumente imediatamente o espa√ßamento entre os pontos no software para pelo menos 0,55 mm.",
      "Se a agulha aquecer e chiar ao penetrar no couro sint√©tico: Aplique uma gota de silicone l√≠quido na passagem de linha ou use agulha anti-aderente revestida de Teflon."
    ],
    "dicaArtrelados": "Para bordar couro sem deixar nenhuma marca de aro, nunca prenda o couro dentro do bastidor com o parafuso: prenda apenas uma entretela de recorte grossa no bastidor, passe um pouquinho de spray tempor√°rio e cole o couro por cima (t√©cnica do bastidor flutuante)!",
    "voceSabia": "As grandes montadoras alem√£s de carros de luxo (como Porsche e Mercedes-Benz) submetem seus couros bordados a testes de laborat√≥rio com mais de 100.000 ciclos de fric√ß√£o mec√¢nica para aprovar a densidade de cada matriz de logotipo!",
    "practicalExercise": "Pegue um retalho de couro sint√©tico ou courino. Borde uma linha reta com ponto de corrida curto (1,0 mm) e outra linha com ponto longo (3,0 mm). Puxe as duas pontas com as m√£os com for√ßa e observe como a linha curta rasga na hora e a longa aguenta firme!",
    "quickSummary": "Estudo do comportamento el√°stico de couros sob perfura√ß√£o, exigindo agulhas de corte e densidades aliviadas para evitar rasgos.",
    "recommendedSettings": {
      "speedPPM": "500 a 650 PPM",
      "needleType": "80/12 ou 90/14 Ponta de Corte para Couro (LR / Leather Cutting Point)",
      "stabilizer": "Entretela de recorte (Cut-away) firme de 80g a 100g (montagem flutuante)"
    },
    "relatedTerms": [
      "Agulha para Couro (Leather Point / LR)",
      "Entretela de Recorte (Cut-away)",
      "Densidade de Ponto Cheio (Satin Density)",
      "T√©cnica de Bastidor Flutuante (Floating Method)",
      "Cera de Silicone L√≠quido para Passagem de Linha"
    ],
    "tags": [
      "d-090",
      "couro",
      "sintetico",
      "viscoelasticidade",
      "agulha couro",
      "densidade",
      "automotivo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT SE. Leather Stitching & Needle Point Selection Guidelines. Albstadt, 2022.",
      "AUTOMOTIVE LEATHER RESEARCH GROUP. Viscoelastic Creep and Needle Hole Dynamics in Upholstery. Stuttgart, 2021.",
      "ARTRELADOS. Guia de Bordado em Couro e Materiais Nobres no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-091-divisor-distribuidor-linha-guia-fios-aereos",
    "code": "D-091",
    "letter": "D",
    "term": "Divisor e Distribuidor de Linha em Guia-Fios A√©reos (Overhead Thread Guide Eyelet Array)",
    "level": "Fundamental üü¢",
    "category": "Equipamentos e M√°quinas",
    "grammarClass": "Locu√ß√£o substantiva masculina composta por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do latim dividere (separar ordenadamente), distribuere (repartir) e do ingl√™s overhead thread guide (arranjo a√©reo de condu√ß√£o de fios dos anos 1980).",
    "summary": "Conjunto de olhais cer√¢micos e hastes met√°licas posicionadas no topo da m√°quina que organizam e direcionam as linhas dos cones at√© os tensores sem cruzamentos ou n√≥s.",
    "definition": "O divisor e distribuidor de linha em guia-fios a√©reos (overhead thread guide eyelet array, spool rack yarn separator tree, multi-needle aerial thread manifold) √© o conjunto de elementos de condu√ß√£o e isolamento mec√¢nico posicionado na torre superior ou suporte de cones de m√°quinas de bordar industriais e semiprofissionais. Composto por barras perfuradas, olhais de cer√¢mica sinterizada de zirc√¥nia e an√©is met√°licos polidos, sua fun√ß√£o √© captar o fio desenrolado no topo do cone e conduzi-lo em √¢ngulo vertical reto at√© o sistema de pr√©-tensores, impedindo que o turbilh√£o de ar ou a vibra√ß√£o mec√¢nica fa√ßam linhas vizinhas se enroscarem, quebrem ou formem la√ßadas soltas.",
    "technicalDetails": "Os olhais superiores s√£o revestidos com √≥xido de zirc√¥nio ou tit√¢nio polido espelhado (rugosidade Ra < 0,1 ¬µm), eliminando o atrito abrasivo que desgastaria a linha ou geraria eletricidade est√°tica. O posicionamento ideal do primeiro olhal a√©reo situa-se a uma dist√¢ncia vertical de 2,5 a 3 vezes a altura do cone de linha, garantindo o desbobinamento suave pelo m√©todo de bal√£o livre (ballooning clearance).",
    "howItWorks": [
      "1. Os cones de linha s√£o organizados na bandeja do suporte traseiro ou superior.",
      "2. Cada fio √© passado individualmente pelo olhal correspondente da barra guia a√©rea diretamente acima do cone.",
      "3. O fio desce alinhado e sem contato lateral com os cones vizinhos em dire√ß√£o aos tubos ou canaletas dos tensores.",
      "4. Durante a costura a 1.000 PPM, o fio se desenrola em formato de cone helicoidal cont√≠nuo sem chicotear.",
      "5. A m√°quina opera continuamente com fluxo de linha regular e zero paradas por embara√ßo a√©reo."
    ],
    "beginnerExplanation": "S√£o aquelas 'hastes com furinhos l√° no alto da m√°quina' por onde as linhas passam logo que saem dos cones! Elas servem para deixar cada linha no seu pr√≥prio caminho retinho, como uma avenida organizada, para que uma linha n√£o encoste na outra e n√£o d√™ n√≥ no ar enquanto a m√°quina borda bem r√°pido!",
    "applications": [
      "Organiza√ß√£o de 12 a 15 cores simult√¢neas em m√°quinas industriais multicabe√ßotes.",
      "Condu√ß√£o de fios especiais com alta tor√ß√£o ou propens√£o a enrolar (linhas met√°licas e de lurex).",
      "Manuten√ß√£o do √¢ngulo de entrada perfeito nos discos pr√©-tensores superiores.",
      "Prote√ß√£o contra o ac√∫mulo de poeira e fiapos a√©reos nas passagens de linha."
    ],
    "characteristics": [
      "Olhais cer√¢micos ultrassuaves que n√£o esquentam nem desfiam a linha.",
      "Identifica√ß√£o num√©rica ou por cores correspondente a cada agulha do cabe√ßote.",
      "Estrutura r√≠gida de alum√≠nio ou a√ßo inoxid√°vel antivibra√ß√£o."
    ],
    "commonErrors": [
      "‚ùå Passar duas linhas pelo mesmo furo guia a√©reo, causando atrito m√∫tuo e quebra constante de linha",
      "‚ùå Deixar o suporte do guia a√©reo muito baixo, fazendo o fio raspar na borda pl√°stica do cone ao sair",
      "‚ùå Ignorar an√©is de cer√¢mica quebrados ou trincados que cortam a linha como navalha"
    ],
    "troubleshootingTips": [
      "Se a linha estiver 'dan√ßando' e enrolando antes do tensor: Verifique se o suporte a√©reo est√° totalmente esticado na altura m√°xima recomendada.",
      "Se a linha desfiar logo na sa√≠da do cone: Passe o dedo no olhal de cer√¢mica; se sentir qualquer rebarba ou trinca, substitua o olhal imediatamente.",
      "Se o cone tombar com a m√°quina r√°pida: Use uma base de feltro antiderrapante sob o cone de linha no suporte."
    ],
    "dicaArtrelados": "Ao montar sua m√°quina de bordar, sempre levante a haste dos guia-fios a√©reos at√© a altura m√°xima: quanto mais alto o furinho estiver do cone, mais soltinha e suave a linha vai subir, evitando qualquer travamento na velocidade m√°xima!",
    "voceSabia": "O formato dos guia-fios a√©reos foi inspirado na ind√∫stria aeroespacial e nas tecelagens su√≠√ßas do s√©culo XIX, que descobriram que a condu√ß√£o em √¢ngulo reto pelo ar reduz em 70% o atrito de desenrolamento dos carret√©is!",
    "practicalExercise": "Olhe para o topo da sua m√°quina. Puxe a linha de um cone com a haste do guia abaixada e sinta o peso. Depois levante a haste at√© o topo e puxe de novo: sinta como a linha desliza leve e sem nenhum esfor√ßo!",
    "quickSummary": "Sistema de olhais a√©reos que separa e conduz as linhas dos cones sem permitir que se embaracem durante a costura.",
    "recommendedSettings": {
      "speedPPM": "Compat√≠vel com rota√ß√µes de at√© 1.200 PPM",
      "needleType": "Compat√≠vel com todos os fios do mercado",
      "stabilizer": "Olhais cer√¢micos de √≥xido de zirc√¥nio de alta pureza"
    },
    "relatedTerms": [
      "Desbobinador / Suporte de Cone de Linha",
      "Tensor de Linha Superior (Thread Tensioner)",
      "Passagem de Linha Superior",
      "Redinha para Cone de Linha",
      "Eletricidade Est√°tica na Linha de Bordar"
    ],
    "tags": [
      "d-091",
      "guia fios",
      "distribuidor aereo",
      "olhais ceramicos",
      "passagem de linha",
      "equipamentos",
      "manutencao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BARUDAN CO. Thread Stand Assembly, Aerial Guides and Yarn Path Mechanics. Ichinomiya, 2022.",
      "TAJIMA TECHNICAL BULLETIN. Overhead Eyelet Maintenance & Ceramic Ring Integrity. Nagoya, 2021.",
      "ARTRELADOS. Guia de Mec√¢nica de Suporte e Condu√ß√£o de Fios no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-092-drenagem-secagem-rendas-soluveis-guipir",
    "code": "D-092",
    "letter": "D",
    "term": "Drenagem e Secagem de Rendas Quimicamente Sol√∫veis (Chemical Water-Soluble Lace Rinsing Protocol)",
    "level": "Intermedi√°rio üü°",
    "category": "T√©cnicas Especiais & Lavagem",
    "grammarClass": "Locu√ß√£o substantiva feminina composta por substantivos e locu√ß√µes adjetivas.",
    "origin": "Do franc√™s drainer (escoar l√≠quidos) e do latim siccare (secar). Protocolo refinado no bordado tradicional de renda renascen√ßa e guipir computadorizado nos anos 1990.",
    "summary": "Protocolo correto de enx√°gue em √°gua morna e secagem horizontal plana de rendas bordadas em entretela sol√∫vel para manter a estrutura e a goma ideal da pe√ßa.",
    "definition": "A drenagem e secagem de rendas sol√∫veis (chemical water-soluble lace rinsing and blocking protocol, freestanding lace washing and shaping method, FSL drying standard) √© o procedimento t√©cnico de p√≥s-produ√ß√£o fundamental para bordados autoportantes (Freestanding Lace / FSL, rendas guipir e richelieu computadorizado). O m√©todo consiste em dissolver controladamente a entretela hidrossol√∫vel (PVA) em banho de √°gua morna (30¬∞C a 40¬∞C) sem enxaguar 100% da resina, permitindo que uma fina pel√≠cula de pol√≠mero permane√ßa entre as fibras como goma natural endurecedora, seguido pela blocagem e secagem da renda perfeitamente esticada sobre superf√≠cie plana imperme√°vel.",
    "technicalDetails": "Se a renda for enxaguada excessivamente sob √°gua corrente fervente ou com sab√£o, toda a resina sol√∫vel √© removida, tornando a pe√ßa frouxa, mole e sem sustenta√ß√£o tridimensional. O tempo ideal de imers√£o varia de 2 a 4 minutos em √°gua morna parada, seguido por leve press√£o entre duas toalhas secas (sem torcer) e fixa√ß√£o dos cantos com alfinetes inoxid√°veis sobre placa de EVA ou isopor para secagem por convec√ß√£o natural durante 6 a 12 horas.",
    "howItWorks": [
      "1. A renda bordada √© retirada do bastidor e o excesso externo de entretela sol√∫vel √© recortado com tesoura.",
      "2. A pe√ßa √© imersa em uma bacia com √°gua morna limpa a 35¬∞C por 3 minutos.",
      "3. O operador movimenta a pe√ßa suavemente at√© que a pel√≠cula vis√≠vel se dissolva, retendo uma leve sensa√ß√£o pegajosa nas m√£os.",
      "4. A renda √© colocada entre duas folhas de papel toalha ou toalha de banho seca e pressionada suavemente para drenar o excesso de √°gua.",
      "5. A pe√ßa √© esticada sobre uma placa de apoio plana, alinhando as pontas com alfinetes para secar em formato perfeito e r√≠gido."
    ],
    "beginnerExplanation": "√â o jeito certo de 'dar banho na rendinha' que voc√™ bordou na entretela que derrete com √°gua! Se voc√™ lavar demais em √°gua corrente, a renda fica molenga parecendo um pano velho. O segredo √© mergulhar na bacia por alguns minutinhos, tirar o excesso com a toalhinha sem torcer e deixar secar bem retinha na mesa: quando secar, ela fica firme, linda e engomadinha como uma joia!",
    "applications": [
      "Produ√ß√£o de brincos, colares e joias t√™xteis em renda guipir bordada.",
      "Marcadores de p√°ginas, anjos de Natal, enfeites 3D e medalh√µes de renda.",
      "Barrados nobres de renda para toalhas de lavabo e len√ß√≥is de linho.",
      "Golas avulsas e detalhes de alta-costura para vestidos de noiva."
    ],
    "characteristics": [
      "Preserva√ß√£o da geometria perfeita de arcos e pontas sem enrolar as bordas.",
      "Acabamento estruturado com textura firme de renda engomada de luxo.",
      "Zero deforma√ß√£o dos pontos ou encolhimento durante a secagem."
    ],
    "commonErrors": [
      "‚ùå Torcer a renda com as m√£os para tirar a √°gua, quebrando a estrutura dos pontos e deformando o desenho para sempre",
      "‚ùå Usar √°gua fervente que amolece demais os fios de poli√©ster e remove toda a goma necess√°ria",
      "‚ùå Pendurar a renda molhada no varal com pregador, esticando a ponta e deixando a pe√ßa torta"
    ],
    "troubleshootingTips": [
      "Se a renda ficou mole demais depois de seca: Dissolva um pedacinho de sobra de entretela sol√∫vel em um copo com √°gua morna, pincele sobre a renda e deixe secar de novo.",
      "Se a renda ficou dura como pedra e esbranqui√ßada: Mergulhe por mais 1 minuto em √°gua morna limpa para retirar o excesso de resina e seque novamente.",
      "Se as pontas da renda enrolaram ao secar: Passe o ferro morninho pelo avesso colocando um paninho fino de algod√£o por cima."
    ],
    "dicaArtrelados": "Guarde sempre os retalhos limpos de entretela hidrossol√∫vel em um potinho de vidro: quando uma renda ou brinco bordado ficar meio mole, dissolva um pedacinho desse retalho em √°gua para fazer a sua pr√≥pria 'goma l√≠quida caseira de luxo' para engomar suas pe√ßas!",
    "voceSabia": "Na Fran√ßa e na B√©lgica do s√©culo XVII, as famosas rendas de Bruxelas e Alen√ßon eram engomadas com goma de √°gua de arroz e secas sobre almofadas de veludo sob o sol matinal para manter a rigidez aristocr√°tica!",
    "practicalExercise": "Borde um pequeno floco de neve de renda sol√∫vel. Enx√°gue por apenas 2 minutos em √°gua morna, prense na toalhinha e prenda com alfinetes em uma base plana. Ap√≥s secar, veja como ele fica firme e em p√© sozinho!",
    "quickSummary": "T√©cnica de enx√°gue controlado e secagem plana de rendas hidrossol√∫veis que preserva a estrutura e a firmeza da pe√ßa.",
    "recommendedSettings": {
      "speedPPM": "N/A (Processo de lavagem e p√≥s-produ√ß√£o manual)",
      "needleType": "Compat√≠vel com bordados em linha 100% poli√©ster e algod√£o",
      "stabilizer": "Temperatura de banho: 30¬∞C a 38¬∞C (√°gua morna)"
    },
    "relatedTerms": [
      "Renda Guipir / Richelieu Computadorizado",
      "Entretela Hidrossol√∫vel Pl√°stica e Tecida",
      "Bordado Autoportante (Freestanding Lace / FSL)",
      "Ponto de Conex√£o e Travamento de Renda",
      "Acabamento de Bordado"
    ],
    "tags": [
      "d-092",
      "renda soluvel",
      "fsl",
      "guipir",
      "drenagem",
      "secagem",
      "lavagem",
      "acabamento",
      "artrelados"
    ],
    "bibliographicReferences": [
      "EMBROIDERY GUILD OF AMERICA. Freestanding Lace Washing, Blocking & Preserving Guide. Louisville, 2022.",
      "MADEIRA TECHNICAL LABS. Water-Soluble Stabilizers: Washing & Residual Starch Control. Freiburg, 2021.",
      "ARTRELADOS. Guia de Rendas e Bordados Autoportantes no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-093-desbalanceamento-harmonico-lancadeira-rotativa",
    "code": "D-093",
    "letter": "D",
    "term": "Desbalanceamento Harm√¥nico da Lan√ßadeira Rotativa (Rotary Hook Dynamic Unbalance & Vibration)",
    "level": "Avan√ßado üî¥",
    "category": "Equipamentos e M√°quinas",
    "grammarClass": "Locu√ß√£o substantiva masculina composta por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do latim des- (nega√ß√£o), balancia (balan√ßa/equil√≠brio), harmonicus (harmonia de frequ√™ncias) e do portugu√™s lan√ßadeira (pe√ßa rotativa que la√ßa a linha). Fen√¥meno da din√¢mica de rotores industriais nos anos 1990.",
    "summary": "An√°lise e mitiga√ß√£o das vibra√ß√µes mec√¢nicas de alta rota√ß√£o geradas pela massa assim√©trica do bico da lan√ßadeira em velocidades acima de 900 PPM.",
    "definition": "O desbalanceamento harm√¥nico da lan√ßadeira rotativa (rotary hook dynamic unbalance, hook assembly centrifugal vibration harmonics, high-speed hook resonance) √© o fen√¥meno f√≠sico-mec√¢nico decorrente da distribui√ß√£o assim√©trica de massa do corpo da lan√ßadeira de bordado (devido √† presen√ßa do bico de captura, do contrapeso interno e do recorte de passagem da agulha). Ao girar a rota√ß√µes elevadas (de 1.800 a 2.400 RPM em rela√ß√£o aos eixos principais de 900 a 1.200 PPM da m√°quina), a for√ßa centr√≠fuga exc√™ntrica gera vibra√ß√µes harm√¥nicas de alta frequ√™ncia no eixo inferior, podendo induzir micro-desvios milim√©tricos no tempo de encontro entre o bico da lan√ßadeira e a agulha, causando falhas de ponto (skipped stitches) ou desgaste nos rolamentos.",
    "technicalDetails": "As lan√ßadeiras de alta precis√£o (marcas Koban, Hirose, Cerliani) passam por balanceamento din√¢mico de f√°brica segundo a norma ISO 1940-1 (grau de balanceamento G 2.5). O ac√∫mulo de √≥leo sujo, fiapos compactados na pista da lan√ßadeira ou empenamento milim√©trico do eixo inferior provocam desbalanceamento que eleva o n√≠vel de ru√≠do em at√© 8 dB e altera o folgamento axial (play) para al√©m da toler√¢ncia m√°xima permitida de 0,05 mm.",
    "howItWorks": [
      "1. A m√°quina atinge velocidades elevadas de costura (900 a 1.100 PPM).",
      "2. O eixo inferior gira a lan√ßadeira a uma propor√ß√£o mec√¢nica de 2:1 (duas rota√ß√µes para cada descida da agulha).",
      "3. O desbalanceamento de massa gera uma for√ßa radial oscilante transmitida para os mancais e chapa de agulha.",
      "4. Se houver folga no eixo ou sujeira na canaleta da lan√ßadeira, a vibra√ß√£o ressoa na caixa de bobina.",
      "5. A manuten√ß√£o preventiva limpa e calibra o alinhamento axial, restabelecendo a opera√ß√£o silenciosa e a forma√ß√£o perfeita do la√ßo de linha."
    ],
    "beginnerExplanation": "√â como o 'balanceamento da roda do carro', s√≥ que na lan√ßadeira que gira l√° embaixo da agulha! Como a lan√ßadeira tem uma pontinha de a√ßo de um lado para pegar a linha, quando ela gira super r√°pido (mais de mil vezes por minuto!), se ela estiver suja com restos de linha ou com folga, ela come√ßa a trepidar e fazer barulho. Limpar e lubrificar certinho deixa tudo rodando lisinho e sem falhar nenhum pontinho!",
    "applications": [
      "Calibra√ß√£o de alta performance em m√°quinas industriais multicabe√ßotes operando em regime 24/7.",
      "Elimina√ß√£o de vibra√ß√µes excessivas e ru√≠dos met√°licos no bra√ßo inferior da m√°quina.",
      "Preven√ß√£o de quebra prematura de bicos de lan√ßadeiras de tit√¢nio.",
      "Garantia de la√ßada perfeita em bordados de alta velocidade em bon√©s e tecidos pesados."
    ],
    "characteristics": [
      "Giro sim√©trico suave com baix√≠ssimo n√≠vel de ru√≠do ac√∫stico e t√©rmico.",
      "Manuten√ß√£o da folga microsc√≥pica (0,05 mm a 0,10 mm) entre a agulha e o bico da lan√ßadeira.",
      "Aumento expressivo da vida √∫til de engrenagens e rolamentos do eixo inferior."
    ],
    "commonErrors": [
      "‚ùå Deixar fiapos de linha e p√≥ de tecido acumularem na canaleta da pista da lan√ßadeira, desequilibrando o giro livre",
      "‚ùå Usar chapa de agulha paralela ou parafusos n√£o originais com peso assim√©trico que alteram o centro de massa",
      "‚ùå Operar a m√°quina em velocidade m√°xima com folga vis√≠vel na haste do eixo da lan√ßadeira"
    ],
    "troubleshootingTips": [
      "Se a m√°quina fizer um barulho de 'chocalho met√°lico' no bra√ßo inferior: Retire a caixa de bobina, limpe toda a canaleta com um pincel e aplique uma gota de √≥leo novo na pista.",
      "Se a m√°quina falhar pontos somente em alta velocidade: Verifique com um rel√≥gio comparador se o eixo da lan√ßadeira n√£o est√° empenado.",
      "Se a agulha raspar na lan√ßadeira durante acelera√ß√µes: Ajuste o ponto de encontro da lan√ßadeira recuando 0,05 mm e aperte os parafusos com trava-rosca leve."
    ],
    "dicaArtrelados": "Fa√ßa da limpeza da lan√ßadeira um ritual di√°rio no seu ateli√™: antes de ligar a m√°quina pela manh√£, tire a caixa de bobina, passe o pincel para tirar os fiapinhos de ontem e pingue uma √∫nica gota de √≥leo na canaletinha da lan√ßadeira ‚Äî sua m√°quina vai bordar suave e silenciosa o dia inteiro!",
    "voceSabia": "Em m√°quinas de bordar industriais modernas, a lan√ßadeira rotativa gira a mais de 2.000 voltas por minuto ‚Äî isso significa que o bico de a√ßo passa raspando a menos de um d√©cimo de mil√≠metro da agulha mais de 30 vezes a cada segundo!",
    "practicalExercise": "Com a m√°quina desligada e sem bobina, gire a lan√ßadeira com a m√£o sentindo a suavidade da pista. Limpe bem com um pincel, pingue 1 gota de √≥leo e gire novamente: sinta a diferen√ßa instant√¢nea no deslizamento leve e livre!",
    "quickSummary": "Estudo e corre√ß√£o das vibra√ß√µes rotativas da lan√ßadeira em alta velocidade para garantir sil√™ncio e la√ßadas de linha perfeitas.",
    "recommendedSettings": {
      "speedPPM": "Projetado para rota√ß√µes cont√≠nuas de 800 a 1.200 PPM",
      "needleType": "Compat√≠vel com DBxK5 e todas as agulhas industriais",
      "stabilizer": "Lubrifica√ß√£o di√°ria com 1 gota de √≥leo mineral branco de alta pureza"
    },
    "relatedTerms": [
      "Lan√ßadeira Rotativa (Rotary Hook)",
      "Sincronismo de Lan√ßadeira e Agulha",
      "Caixa de Bobina / Canelinha",
      "Manuten√ß√£o Preventiva do Cabe√ßote",
      "Folga entre Agulha e Bico da Lan√ßadeira"
    ],
    "tags": [
      "d-093",
      "lancadeira rotativa",
      "desbalanceamento",
      "vibracao",
      "mecanica",
      "sincronismo",
      "manutencao",
      "artrelados"
    ],
    "bibliographicReferences": [
      "KOBAN HOOK CO. Rotary Hook Dynamic Balancing & High-Speed Performance. Osaka, 2022.",
      "HIROSE MANUFACTURING. Rotary Hook Precision Engineering and Vibration Control. Kobe, 2021.",
      "ARTRELADOS. Engenharia Mec√¢nica de Precis√£o e Lan√ßadeiras no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-094-dedeira-silicone-protetor-dedos-troca-rapida",
    "code": "D-094",
    "letter": "D",
    "term": "Dedeira de Silicone e Protetor de Dedos para Troca R√°pida (Silicone Needle Finger Protector & Grip)",
    "level": "Fundamental üü¢",
    "category": "Ferramentas & Acess√≥rios",
    "grammarClass": "Substantivo feminino composto por substantivo, adjetivo e locu√ß√µes adjetivas.",
    "origin": "Do latim digitus (dedo) e do ingl√™s silicone grip protector (acess√≥rio ergon√¥mico introduzido em ateli√™s e oficinas de costura nos anos 2010).",
    "summary": "Acess√≥rio ergon√¥mico de silicone antiderrapante que protege os dedos da bordadeira e proporciona ader√™ncia m√°xima para segurar agulhas finas e apertar parafusos sem machucar a m√£o.",
    "definition": "A dedeira de silicone e protetor de dedos para troca r√°pida de agulhas (silicone needle gripper thimble, non-slip ergonomic finger protector, multi-needle thumb sleeve) √© um acess√≥rio de prote√ß√£o individual e produtividade confeccionado em elast√¥mero de silicone grau m√©dico texturizado. Utilizada no polegar e indicador do operador, a dedeira proporciona alto coeficiente de atrito mec√¢nico para segurar o cabo liso de agulhas met√°licas durante a inser√ß√£o na barra de agulha e girar os pequenos parafusos de aperto com torque seguro, eliminando o risco de perfura√ß√µes acidentais na pele e fadiga nos dedos em m√°quinas multicabe√ßotes com 12 ou 15 agulhas.",
    "technicalDetails": "Fabricada em silicone termoest√°vel hipoalerg√™nico com padr√£o microporoso de respira√ß√£o e relevos antiderrapantes em forma de colmeia ou ranhuras axiais. Possui espessura de parede de 1,2 mm a 1,8 mm, amortecendo a press√£o mec√¢nica de bordas met√°licas afiadas de parafusos sem reduzir a sensibilidade t√°til necess√°ria para sentir a canaleta da agulha perfeitamente orientada para a frente.",
    "howItWorks": [
      "1. O operador veste a dedeira de silicone no dedo indicador e polegar da m√£o dominante.",
      "2. Segura a agulha de bordar pelo cabo com ader√™ncia total, sem que o metal escorregue com o suor dos dedos.",
      "3. Insere a agulha at√© o topo na cavidade da barra de agulha, alinhando a cava com a ponta dos dedos protegidos.",
      "4. Aperta o parafuso de fixa√ß√£o com firmeza utilizando a chave de fenda com apoio seguro.",
      "5. A troca de todas as 15 agulhas do cabe√ßote √© realizada em poucos minutos com total conforto, seguran√ßa e sem calos nos dedos."
    ],
    "beginnerExplanation": "√â uma 'capinha de silicone super macia' que voc√™ veste nos dedos para trocar agulhas! Sabe quando a agulha fininha escorrega da sua m√£o, ou quando o parafusinho da agulha aperta e machuca a ponta do seu dedo? Essa dedeirinha protege os seus dedos, n√£o deixa a agulha escorregar e ajuda voc√™ a trocar e apertar tudo rapidinho sem dor!",
    "applications": [
      "Troca r√°pida e segura de agulhas em m√°quinas industriais multicabe√ßotes de 12 e 15 agulhas.",
      "Manuseio e remo√ß√£o de pequenos parafusos de caixas de bobina e chapas de ponto.",
      "Puxada e passagem manual de fios rebeldes por canaletas estreitas do cabe√ßote.",
      "Prote√ß√£o dos dedos contra calos e escoria√ß√µes em ateli√™s de alta produtividade di√°ria."
    ],
    "characteristics": [
      "Silicone male√°vel de toque suave e lav√°vel com √°gua e sab√£o neutro.",
      "Poderosa ader√™ncia antiderrapante sobre superf√≠cies met√°licas lisas.",
      "Formato anat√¥mico respir√°vel que n√£o esquenta nem faz a m√£o transpirar."
    ],
    "commonErrors": [
      "‚ùå Usar dedeiras de metal r√≠gido de costura √† m√£o que n√£o d√£o firmeza para segurar a agulha da m√°quina",
      "‚ùå Operar a m√°quina em costura cont√≠nua com as m√£os pr√≥ximas ao calcador vestindo dedeiras soltas",
      "‚ùå Guardar as dedeiras sujas de √≥leo mineral sobre matrizes ou tecidos limpos"
    ],
    "troubleshootingTips": [
      "Se a dedeira perder a ader√™ncia com o tempo: Lave em √°gua morna com uma gotinha de detergente neutro para retirar a gordura e seque ao ar livre.",
      "Se a agulha ainda escorregar: Verifique se o tamanho da dedeira est√° adequado ao seu dedo (tamanhos P, M ou G).",
      "Se voc√™ n√£o sentir a posi√ß√£o da agulha: Use a dedeira apenas no polegar e apoie a agulha com o indicador livre."
    ],
    "dicaArtrelados": "Tenha sempre um parzinho de dedeiras de silicone colorido na gaveta de ferramentas da sua m√°quina: al√©m de proteger seus dedos na hora de trocar as agulhas, elas s√£o incr√≠veis para puxar linhas dif√≠ceis ou abrir parafusos teimosos sem fazer for√ßa!",
    "voceSabia": "O silicone foi desenvolvido na d√©cada de 1930 e sua incr√≠vel propriedade antiderrapante e biocompat√≠vel foi descoberta ao ser utilizado em luvas de cirurgi√µes para manusear bisturis de a√ßo sem risco de deslizamento!",
    "practicalExercise": "Experimente soltar e trocar uma agulha da m√°quina com os dedos nus. Em seguida, coloque a dedeira de silicone e fa√ßa a troca novamente: sinta como o aperto do parafuso e a firmeza na agulha ficam infinitamente mais f√°ceis e confort√°veis!",
    "quickSummary": "Acess√≥rio ergon√¥mico de silicone que protege os dedos e garante ader√™ncia para trocas r√°pidas de agulhas sem escorregar.",
    "recommendedSettings": {
      "speedPPM": "N/A (Acess√≥rio ergon√¥mico de baxúÃ}›nYrÊΩü‚t”"Å*äíZ›jÿEQ=¢Hãúˆ¨æ8Uy™ò=ôyjÚá-…X`wÔÿKﬂ.∆öΩ04Ä /z|”óSo‚'#l|q~≤HJTª∞1pãUYô'„ƒˇßô€¬glÔ™r˝áÌœ'a¯ˇ>oú+*wˆzÂ>h>ﬂ˜ı ˆÎ˜Æ2s_õﬁæ3Ùø⁄Æ¢ˇtèÂPù[SxSªñÓÎ”Õ∫ﬁŒ ™|„Z‹Ïàû÷ñ∂zhÓÏÓ˛¬tÙÕ‹7ŒÃÀv˝cª§?ÃyπÚ∂rÌr˝áÜ˛˛úoÙﬂ‰~ü∑Æ¢;gÆ≠;∫ﬂO9k˝/≥WïÕπ≠]”{¨kè◊ï≥n/æx‚z˘ïm≠yd[˙ˇW\|‹ñtª˛ßıˇ•õY≥o/,˛ªy›µ78hóæÒuiM„Õûê◊=ÚmÒußo÷€ÂËçäÈÓ7_¶{Æp•<&-}πj}Ôzﬂ‚[∫–wÈ´û	∑(}·¬‚≤≠rÀ°µÕ<˚h·Ë›@Nõ›”∂=ˆœΩ¬¨úU•_∂vu^Œ_:˙≠kÊnÙV˚œèø=xi^<~~7«/iˆèwL ‘‹úùóı¨r›ƒ<mÀ’ µù˘¬º`~4áMÁ⁄æÙç9ÛæÍvÃqgc'ÊÓÓ›ª;Ÿ∂Ω|∫˜Bü¿w◊ü?≥MA‹±úòSªp˝kCß'w¶lË	≈–ı‡OÛ‘∂xmsRŸ¶ßg˝ Ú®;Ÿ£ˆ^ûΩ<xæ˜¯¯4Ω]ı$≠"ñ<™Æˇ…öcz!;ß7†/à%>:ÿ1˚C[ˆÂLÓ˛ÂŒò§√™ øÔı˙˛´ÈÓÉÈ›∏àE‚ÔÂ≤≤¿˜`ô˚”¬œZ;Ω(õπüí∞—ª˘©]UÂo7-õiÓ¶ÁﬁØÙ->üì„«èÒ„aÂ˙^ˆq¯∑‚p{z≠oÒ s∂~«OQ: ﬁ)_±ÄÌ…â§”3z‚3z¢Ÿ ˇxbg-m¯~ÎlGªB€¸ƒWÖ9l}Cnßïêﬁ¡s¨¿Â˙m[zÛoø˚›€¯
D¢•o_„2Z–ú‘ÜÌÃA∑rÛ“ñ‡†G∂ÎÀ¬∑.pÒÁƒ•um€˝ v`–œü˚˘ íﬁ3“YM_í¥◊∂õƒ4öoÂÈs≥"1Kóê˙s¶íﬂ˛ãÎå-æs¯e∏‰sﬂñÀ≤ R^emäÅà3∑≠3[ºYÌˆƒ`ø>°E—WfEkÌh9€tR´Díj˝0i‹@≥EbOOÛ¢JI#,‹úô´ÄÓkHÚÒÀôæ:1-ˇÔÓÓÓÓv\_7Ä#⁄aˇ∞ZÜ£çÌ:˙GO¥Ñﬁá®À¶úB3x„„∫’˙m?TÒgW>ù˘cN¢’“-∫û$Ç(Wœ˙ñ˛Er±peœü—$+ù°Ø™≤«n”¸ä3÷õm∑†•@%`˘{¶PﬁîUÙ#ﬁT¿~)›∫Ê<{f¬îÛ¿îPù≥µl+è|ƒ±S·ZS€ÇFÁ2aYzK≤l≠]ÙÚ}∏	–˚πØ∂Õ˙ù±∆C-Ûëjuù%˝@¢;o|µ˛aâqØ‹|ËaØã≤u=+wôÒ	ÈzzÀﬁÆ@ÿ˙∏’∞=Cû&˜	À»ÉK∫!]Yô-⁄aoGäª≥Ù0R≈s¨äå˛	J/Cˇt]Ôøc˛üë à@é¬¸¸{ﬂ˛Í-,j{á¥¡˙‚æ∞ıºî¶dª
ˆ&¸µ"ó¬–3∫ŒOå“lŸ:Ÿ]ØóÍÆöEÀ¥p¬/o,ΩcŒ†∞|J”>c	‚[–‚
ﬁ%ÙÙ€Ω[Tÿ3<EÖ¡
y‚˙√ÎLÃíÆ"u––≤ÊÙzè÷t◊ovˇÙœ≤∫A<ìzK∫Kg†$iS÷o;@œ»N;zÕ-Œ„jZ+}Wı∏Ìó∫7;I1ÉÎÊ∂zL{^V¨ÕésDû¢ê˜CF‘ÿÔ»ŒAO–€ˆÆëy_f§æ-/Á]AnÀ÷ù;¥˙}˙‡Œ=¸cõ≈´Èà”Hdy€[⁄h+!óª†œ¡ã†èÖÊ°7^ø%nò3∑⁄¶•,h•Æ« ÑÖ…Y≤‰Ë4¥aÙ+K5b⁄™öò˜˜¨∞lUB8,»_—·öÇo@›≥IÌÍı§Jå”ï∞+∑(Òmø˛√+b¨IyîˆD;w"N¡ãçöyÚ°x[ı¬ƒΩ6ùØ†ºë#≤O-ÓŒäÃÄ‚ﬂ©
ÅD≤î.¡ çÌí2ÑÛÖ'ÌvÓø?ÏˇÜÑi‰A›-"ªCZ√nØ°;XÏM1€b-FWπm,§!’Å◊Ã%O)HTÊÊ‹=R∂8óÕ’*ìÀnX) ØÙò©≤ÃZÇo|$Pˆ†{‰Éç%8óŸÀÚ:Q≠JfœX5 `“EIŒ¬f	„%o)E.6)°Ïπ_í/ñØÇMí®ZëXÆ/ﬂ–éœ†hsn%>G+Z“é“z…@,ìΩ¢'›ëí~ÈkF,Ωå*zlN¶¿é$ò¢©Òvvng™KpÊ“˘˙-B4(ºja…˙XZÃÜ;9s‰ã4Æ=xÖ≤¡rÆˇó±ƒ«‰$˜Ì >'è¿^î’πÔ¯·∑‘	¥cfûÄπÏ	‹"≤¸v∞¨ºËñ¥V∫ï±%b.¢‡˙-oöœçƒgÊØ~Ì?ß(iaﬂ∞ÇNv ÒÎ¯ŸÏ4ô⁄,ú–∞ùË.JÊ∏ï%oÚ|ÃÄ‰gı>x6Ù!÷œ—rì–(?=Ã◊ä£«6›±îI`	^óãl√ÍÇûJÎ7ù]ø/l∞øïˇéˇΩlÀÖ˚,ª]±OàLôç¶evô7‡Õ˙==1xR~dïâX¡s ÕéŒv∆íGPÁKbﬁ‚jKN¸DÆ ¸‹#‡3KÁ…8êÅÎ∂˛viöπQ˘ç˜ÉØ¿/\“}Ωù÷ûb)˙/U€
îã^FRØy®‹7º5oK'2»^9˚çΩ∑¨ùùi˝ Áßl∞ ›Üê•(j;∑Am’∆§Z⁄íƒ)Iø‹ÿı¨™k›r^9‰Ü{≥åljµÉ™$9±qU=–›¸óB8rT‘D–{!ø¬≤ﬂE÷ì#) rÒ•h@ï˛>ÒÎ5Ó4¢ô
Ô≤I_◊æ9 ynGt˘◊ˇÛø‹â9'^RC.íO€"mZ˘¿pì`‹!›§AIU5™‡ÿHRú^œ˚4éz0Ê¬¬nbÔ›+ﬁã4	˝EGM‹ôÛ≤h·ƒUÎââ’ä]‡ÂtNΩ/z˙πo7ûÃ!nõ,ö≈äÖÛx? ‡qÒ~§úÂ÷ëÓÙüÖ‰◊à5,õÁ¬nd|àMëÎ†PÇT…Ú¨\çh~ÍTïQ<I"N°/ø4Qª¨eÇDÛ¬ÑTâlÓ:◊∂∂Õ <Bº3†Ô@•ø40_ie∏Tyˇrπ™2oÜNﬁN»˝0π]∆îß.—åEﬁ…Ú)é'ä„>cn À\îΩXíd'Kcîxf˝áf^≤Ü$U¨∆%MïÌOÆ›lœ!U4∫!Ì5À\ ön&Ë[±yH~HÂeç—Ü∞l-}Åwß∏3˘ ‚u(Cπ‰˜˙‹ç©}€¯q+Ëa{)ôÜ÷√Ùπ6≈®óT7)NZ\≥…¥©ŸSâMiø´‘X6<F$¯
2jj”9å7`ÎKdæë”ì≠¢ùÉ#ªlù∫¬d÷õé»WsƒRs-R˘–;Xüx¿ÙÀjxœoŸËJ…Ä4…¯üªS;+-ì†ÉÀßIúÃô"39ÿD+æW°∂(L±&)=M–◊ÔÁ%84ÀáL¯ùHTÁ†n∑óEÉu'bqOQ4h«j˝l˝«◊;EE5+˜ N∏≥{E∆'`ÉÑÓ‡ïkÈGúë{ÅÌ2=:∞GB∑ÇÇs∆í:áß‚ã÷_ π…Îa˛‡Üˆ&˝ÇΩI∫3Ì˝•ò8®s∫Â∑¬Œ¯MGôP'∑<NœÃµπ¢õ¯∆D’˘oNoñ{Rsü¢Æf3±§Òwõ;∆¡eètwıïôüo—≤…¸!6*N]ïë¸˚ò_9Wúúaµ_›ﬂ%™}Mˇü>–àH.$°◊)_ﬂø}Áé9·Ë˘ë'˙>G8æuzpöa/c∏‰ FDÄetø⁄]b∑FfÆbΩ”Æ¢ô˘d≤ô¸⁄6∑2áîÈ%8ì}ÿ⁄[ÒgÎwŸ<Å˜ª‘˘#VÁ{QùßÎÿwÃü§Ó$dπxÁ@ã^xdóM‘ÿfOˆÑè¬*˜”-5S(iÚÙqŸò˛‹ô,Oé˚ÛÙGä|2\DîÔÙ÷Ù‰≈ÙÏŸ¡ÙŸÒÒâ98zÙÚ¯Ò¡Àˇbû˛Í˘„s¬˙¯»IÃVû"ÏGb]SÏ¥ÍÓú˛ΩcN_ç{}	=QÄfˇÂﬁì3sv|¸¸t«·]ëò7{Yî¿‰»ŒÈnŒ‘≥÷ì€æ¶áúÑ–!GhÆÉMûj ‚‰™ú¨318…˘‰œù|5-‹¬vx‹‘6K“ÄÌî4È˙πıÙ/"Í¥'«…∑”•k»üπ
B˘Í&JxåŸì«¿.ÔÛìbê∞è«±-;„Gö≠ß¸LsÑ ÌbÕ.JÃäå	ÌÓ…9‹Z∫cÂ.£'{å@ N˛·èW'§ëW¢:õ©·˚D¿d· ¿K&"Òüúêﬂ±$ïNØHÊoÀ⁄ëº»ºú#a,t$ﬂ® t9ê
c†-#)Œ(ôú3‰nOáı{"ÕÑcª˛'/ ˆúIúRå ∑ÁÕè8ƒRS«)z&YÔ,ˆé!≥ÅñıÎoØÑZˆ…!ôÖ§?=ë≤ƒ/‹++ÔÖªs¯‡z˜&@⁄˘⁄`∫;ñ
nX»}3Í€Ÿ¡®–NPL.A-"rå.$AKvì|5üÚ~ó¡ï»µ6qÌ|ÃµÛ»µ"(ÏçÊV™e ÛÇïóqOæ?wd∆VÁû#Øªl∞‹â[Jvøe'ì¥èÚ}èËöTù‹ë¥€¢è+åÕÖﬁxõmÒÿàZÎﬂ◊ 
Vÿ∑Î?6jPí„∆N Á Èí^^Ep˙o˘
8}C¬SÂ¡,ßHkØ®<<‰å‡ub«È¿æ– Ó¬NÇAåDLæÅ["Ì˚B∞G˛PïZBqÇ\dr«ËÉÛÅ„0ŒmçòëhYÂEK&ÿØØÙñù^˘≠‰Êê@ÌÄ.ÕPÚêW~hò'ä˙Ñ]æ#è4€i»oùùn;#we`áQ√Èï[ZFf9L‡ ÑàÇ9|l‡L@YÒÌ
îEL¸ìLóëø˛a¡*˛eàd »l\üH@ÃﬁÃπL≈Ω¢»∫·4ø„¶7¡UÇ†"%6$´UÊ	cWˆÉù“}π*ÁöE&ÆX∞?D›˝¿ê5w‹ßˇUÚ}“cæöh·MEÍ˜'È…‰;˛Èˇ›ô–ΩvÃØjÓ¶£U¨Xı!uﬁ¿LµãDﬂ©—Á0mkâiê4„†éBFÚ†ÁvJÅ£„Ä°Åãüd›éKm8éTjoÆΩËË>©eK{éxIÛ>â‹ÜsÈïk‡>(ˇ]ËW‡Õ÷≈xmî’¢+$7vgró£‹ôO∂7ÇR%ª≈®Çô´‡—∆nùˆ‰ô‹6#y‹'“nèì„K∫¡uvÓhÂñ(&‚‘FW*Ù´[Z Õ∏ÚCÁÉx”"∂Ó> vŸc%«õ˙e¥ëK…Ä´".¢2@ÄG_U∏≠dº≈¬h
X5Ù&:"
IÎøD	åmãŸé@ë˚à¿∏ìºôÎ»Ø≈oë¶¡ª3' k⁄¯ã»?ú 5+
ëDLÅyYÿ1êr∏<∞&Ù1ÙÜËñ§≈Èªì›ª¶Æ)'nìM»˜`Ú+:ìÿÆD˘âUHËÊ»äπ≈Á	[∫521≈±êÏKy+ºÿ&]πï§ÓNÄƒıÔ˚_πzUyBƒëö∆Ò\k(‰áxÕKd`Ç;¡)∞+˜?À2Ïò`*4Kz´‡ëêã sﬁå´á8Õ¿H…p¡i·¢	{,3ÿHrjÖvÒÖ,[ !>ä®úff|SkÒD€ÆﬂÆ B‘LpÉ·JHm9†5]WFè)«˜óPØ?Hú^iî˙ßO‘-Àî‹≠ë"·‘;i≠Y;BˆÁVû¡Ñ?M&qÌXÛÓ∫.)ß¢¢üπã?ê≠ÃA!€Ωk‰˛ƒ{N¸{7ﬁ[∆…qruëÏSß‚.yƒÃØº)s6.Yå¨œïèƒ$%ÏÌÕÇWÒ/ÚNj≤W¯[G¥¶€ãÖ/ÎïE»†Ç≤.{?π™äfcÂ	 ıRóƒA°»¨Vß20§-î[$÷'Ä.O<≈$úJæ‰“K˙]Ù≠dÒ8≈ë◊‹I¯í|-;·∑îmT†ô∂7NÍ2ÑU∆êW.∂¡g}…Èq@…®FΩ˛±VWiÂπxYBªÇS«Ùíáoÿ∞;"ÊûÔ=^«^’ÛBÄD∂vËÇ’ÃŒ∆ío—!ç<¬ò¶˜Õ9ÒTä©ÒZ }ı©XÕHë∑"ÈcŸ>£˙°øı–<^üÃ£dq…ﬁ5‰LB•»`Õ“KâÕ˙á ëéhyY óè†‚£êâ6wú≤ÜÚø≥$£€D@"”¶ q†\€°§„‚ÄπÁ-ΩCëoÙ√d{Éá©j%yá1. Õ‹ﬂ…Î˛íò/O*;rÓÄÈ)·®tÓ«+Ö%àwCô√{·âœJî3I¥@À˙÷Å< ^«§@ñµ∞ÆÄF]ºˇ\V◊ï◊rOVÒófV6¬•Öoé∞1úKOB‚ÅúåﬂeœIPPótŒ∏ƒLw◊,ˆsl9®r·ﬁHz≈´iÔKÅ∆à‘…Ip∏ÕR∑qTd…˝Ôˇ ÆìmÔÇÄ_pPËZÒı:1’ù+ÑŸÄ¶\çÈÁZv3ô≠«@‹ÅÊîÇÂ0\5WàWí4y
a≈ÕD|ˇùó2É÷¡8o‰_Ñ,≤©≠¢:sÆö*‰Áöøâ
ª£Ä¯ñTó\⁄j˝ÆÊƒR…AÇS◊É/Íí˚‹0ô¸ê˘ ◊·:+K&í”D»(±y¶„Ç†>è*[sΩõw/∑‰WÁ‹”—ƒ“%qœ(jÒ#≥„7£ΩºpF|w°4r√UÎ\»S¿˛W,}‡ú%@$¨ÆEuÆMsIú
¯rK§´Œ#g%J5˜ |í¬R√ﬁ]ùƒ˙LG[HÍ}©iy∏™{I:~røLr√·–8ºÏu –Û ûöèaIØòu/y[xò5–ÈõÅ@˚1\å9Á€Ê(X‰â*≠â.ŸﬁÊrØm~π>	î!#s¿0„ÙIÈØqAOíJÙﬂî¸8÷ÛU∫an¡“ß£TæxcBëlKRƒê@¨–rˇÑtõÉ\ˇ∞ÁlÔØèˆÃŸ¡˛≥á˚{œÕÈ¡Ào˜{‰^Eƒ&!çTØ*p∆9“Û¬.˝ÎÀ-3èˆ^˛ÍÒﬁÓñŸıˆhÕÿ»8>4ø$V„Ô:æ˜iÔ–¢cˆSru«Úu˘˙√∏œQ˝ M@π<.õıÔkUëÈÑ/ı1…‚˛‹ –◊SRs»èπ–æoßY˚”îKﬂÈì¶∞SXÂç‰¯œ◊7¬FO·W7¶ëËïómm…ïsÛÿÖ…Q∑íÅn‹uıyBé_hD˙∑ﬂ˝Ó˜W·>©Y	ç2π–]á¸ú&4'6»¯ ¯¯M¿ÁßÙ«∏nj∂ZáÏ√6˙‚Dçı{
r»/@>¶⁄ﬁ1jÖ Óë°p°S∑4˜\nÊGô~‚øWƒ£T&◊<°8<∂œ‹˘Ê¡ÓUêŒ„≤É,Ôå0
Zs√M^qèæTÌ¶@ë∏‰ô—xyÃl®˜Èº4Ã¿èc∂»ÎÏqWrMl(Mó ükQú4»Àì«-ÇÜPÏîÁÿóy3Ç1Õ∂Í¿õE∆õÏwF˙Ïú>_Rê÷·√ûXîòeˆÒb()$√òyªe”ıÌ0ä£GP §CÌ…}zÙZûÏ£ .6ıXj…‰®:r«‰ÃŒ^S) p?i|Ÿ ˛é…$nBNå—.Öº-Ù÷6‚ã∆÷¿îo≈/£k˙X±Ñ,tü„çE”Ωƒá!•ôú¥üf	”~YnÀA	iægtkãTí”Kå2ë~én√Û‚¥só∏à3™dÕ÷ÔIﬁA=G°\A	Ê‰u9h‚ ã>¯-‹dmuBcw¢Gqëä_2
¢ô&^-ô˘m1ræõ*â{ÑêñPoX‰
Ì1ç∏å¬-p#:uëæêßß’ºÿÖ>6^!¬îΩXøã≠U≤JNä´¬æÜˆUËj(ﬁŸ€«7˜woµkûΩŸG˜ªÍ-
≠ËÈ-8&ç\ƒ‹O·ÊƒsÒ˛O¨∫ëD$y\ò<N∂'ˆ`∑Y˚»∞_p˘ =…´‰º´’ﬂ≈∞{èns?& |ãP ù›ΩJqà´5Eëö0
˜$&¡K«Jé√€¿.Ì∞ÍoÂÃÉ—%	Iç¢.ÊäDÀZ—
fæ gü≥V3ã˛‘≤SªâÍƒÆ$”åøJa-Ö¨âGÔ›∂·>fa:ê®oò˛"rbÿ‚—Qlxl!È%ödÇ÷Ì•¡ùãö}Ω~ﬂp/Ó8ÃXø•wIMéóKõzÔ™”}b≈Å[…ÆfÜ¥˝∫›ÒΩé√πÈa`Ü;Q^¥N–îhAI Ç´ëoà ê®›R‚råK1¯rldnIô´†h‚w@#rV$SØüôSíöÄêK@FT$;Ò¢|•yâQå1pô&wS≠\Aõ€hí5XÙ†VW"ÂAjC˛‡?õoπ`\[Fd;…l§˜QŒƒ8ÇD¨gxmç…gÖÓº‘êÆíéZÚ(À‚„ËKÓ˚¶≤ë£5AÌ^9ÈT9e{€!#6ÌCb@N±æª$≈ü:0Æ0‡\¿£ºNjõBw&Rå≠|LÓs“-≥gÒÂŒ›+
æx{IBvc	nCwW”3«ç“Áô·&µcUvíÃ[ñ¬
#Ô¶ÄÀqÍ?V”H>à√Ïô™À$÷ ﬂ√°ÑvÉfn£è.†+¶≠a°701svﬂ“oE7o«æ9Áúª°4Pòf˝#7qíjXøõ«éÁNhJ⁄mÿ,øˇÚòÍπ—Àµqd–+ç^<Åâö∆9"’∫©§ÿ,¥Åqê4Ω‚¥DÄ+4∞“=]•êl›ySÌÃÁb«≈Êmlö'ÜÄ¸¯Åè!÷Ì»gÃ}J2bV ÑI˘Ìó-oÂ˘dÙ$£_ld–äïWw{uHAÆ\˜–ºt´í-lÓ
≈sdKD_∫i-ˇÖ]äŒ%3–⁄í∑ÂﬁÆô◊˘.èaÈ≈Q¿!Ï◊ﬁe?jN—Í{“YíÙ/®b©íì•·9Ã¿Ë9áäûZé°oÖpÍV»_À’ÃHa1O¬ÿÑuèµÊË®Êﬁ˚æ∏É<Â∏≤|#R®UvÓbÕ‹YˆƒõùµõHÓM,A:Z'%-~L5íc›=…Y’]gHFí≈VÁ ÷Z6	=\◊;∆3íA•AMy∆˘!ryœFIˆMb-{®Å(]cB†
Ü–G≤∂ƒö¸àâ<&”‰R$Ûƒw<ÿÂ˙…≈gÆN1∫„R2,ÿ¢˝V≤∞oJˆÛﬁQHá®òÖ±E…<FáµóQ~¿-ï?>kú∏Ä0m¯·°# ©¿ŸjQÎ{`M«‚fH}ä@r¡aﬂ·4Sõ‘;.{ódnBÔFC¬É±¥∆_ê´y€Z∞∆y1¨'ÆE5ˆ¢SwÏ∫ÃŒÂÙI0ó`)uÓÚ–Z™ÆÕ›|∏Ò‚ˆûŸ ìey2e√®ÍKŸOô&AØäx·:`„Ã!>)B7ø
∏Ωw°Âÿﬂ∏!ÆÒ)Éæûg∆Ïe0f[¯W˚⁄<Û˛7%ˆÉ÷z$ Ò∂Ÿ∑ç„¿6sÑƒ…ß´íö:vnà„Ît√!˘»Ø∑;}1JoÎêuŒm∂vÂûüÍxv¸Ú¯˘ÒSF9æ0'/ˆOè_pˇIËny< ûË÷≤ "àè8¡uSà›éâE˛HÑb+ä®ò£Ωø⁄{æc8≠pÓWúOß-h›ƒƒ¸˚ç#tr¯¬<{Ω§⁄]¨‰àG>¸•o@∏Ø9∂Q∆ü©—Â¡¥©§ÈBíñ>D^…M∑ÀM…Äöª≤ÀÂ¡çPéêÆzüòCf˙∂äH{ﬁû>œl=aÛ¬˝ÏOÈR$)ÃÈπÂ&ækˇ˙'œ;—ÅH1ä√¯˛C¥π˛±ê˜7[Ey°±©$_t¢G19ÀN˙]®‘¡p0ä{ò¥ÔÃ„˘Yƒ€S$≈F"ìå«–ı€Â¿eK¥2)~ìÖ‡ÍÌ{39’·9®—øG^pÈ-˙qî≠ÉP:ÛJ!√PæπC…ª@W£ù‚*öbê±*Ï≈œS9#∏®Gan…isáµw: ≠∂ñ±Å#ª<i⁄â”Õ”≠»Òm∏ ΩûÒ∏+Úy€6
∏˙Ômœ&:ØÑ·ñg°Î⁄hÇX,FbQ±@P«o$ròmŸ"…≈2»EßrQà\–íùÌœ];EÅË¸\ªb(¯j
Óí˘ı≥Úaﬁ:[‡—3à÷vR2Áµ%#/ƒt››¢≈&lÏt∆:Ç+‹Æ¨Ÿ˝Wr∆8<be™ﬂ¨¸M æ–G\Œ{Ñª‚+ò√>U…Û>≠i›öÚúHﬂ∞ÿîÃÒ 	äm:)œA⁄;Zª¬ïeı˙«™/1§D$Ÿ‰–ÑÆcFh°“|¯œœ§aÒì7π,∏,–S'¸!•‚£ìÀ_¢ecƒÅ"[ªì{}’“ö&©ı
L†L˛Œ‰Ó.]ƒPó§@_¡+‰˚LÚI;°BVFÍCä∂DŸÚ¥€˘j¬çπZNÒŒ∑Úcum9ÛJÍNR¯öÓB…=¸õvÓVÍZd“QñÚAÙ‰dΩÃÜùÿ ÿ˘pt˛%	Â
R˚^GÅ∞∂ÖÃ.˙Ô—ÓÊ¿1”»ˆI”AE"Ê“ñµöwJùbΩ≠óxﬂöl6RÇm=G3¨îwu®ècws≥C[pèkáÓˇÈü∑”tæπå‰€1á\`S¢∞|6îÜG!6`Í ±Ã+Rº(Ib\ÄzLSÀ&»Çï‰>t Xﬁö∑®ÆlWø]‚éñ¢^	÷k˚j˝«ó’‰äÕH:Bg˜IQd‡L¿≤Â^I4Ø2…	ﬂŸç>ö=Œ#ès9∑¢[§¨*8xÅ˘πnc0n	jÈ⁄ÖÊ£Ù•ÜÜ,πUø‡ã°∫Ä'!ßÛÒ§∞{‰à ÙŒ¯6éÈ[ÜÈjÅ˝“£¿w˘x‘6[ÂòÜzví∞vƒŸcW#⁄Å@a.]»¨ã-ePsP,1Ÿ-vÄ“NsS™ƒèH8≈∫j∆∫˙÷´Õ“≤R…äœ]5q^\=c?í®2;!™«ˇQúü÷- û◊}v§‚gR◊4!∆ÅU‚h}BcMT—Çﬁ®Ÿπ¨≈ÍU»ÃππˇQczÎ3sPs-
í…”ÓCÓëî≤s∏#˜É≈◊ùH¬ë}saKd‰˘V-QÃ—&çãyÄ„Â´ÉjG”ö9÷›CÖd…≠Guﬁ\ïﬁF_;9.CÊGƒπÖ–=n√¶´ÇhÖ≈zg]6ƒ"µ#Ã`¬Èˇä1•q|ß*¨»eeéû\≤À‡)Áb∑â[—DâIN2É‹ä€Ü˚áˆ5µˇ9‰óûlª,o¥Ñ;;V%ôL‚s©Çô/‰œn˙◊L/EäPü™UBpqêŸhA	”∑îœß°ïL6í„ }¬|≤≥‡5Â:ùUò*ˆ.†Ï∞Q~‡y_√Z !€&æì£íªé˘ìFµÁ˜¢wA6]Ù*~?jÍì=¥#ËW√9z8z*»∞qb^Áìèe9‰´ƒ˘i
W£R`ÂEu~JõœLä˚àïsßÂfÂÎ¥&Ãz.;§:¥=óHqKBéKö	E@tıC· ˇ6”˚ΩG†ø%Jøâ∑√?â√1çÂú~)°TïAiEË–?~$HõGVñ≈iVˆCE”JÙ–ìë¶6+⁄Øm&QPPEﬁË(‡Iˇ$'øóË*¿N¬Ñ¸˝ﬁ ZÍ∞íá_†fVÉâ‡õŸådU{¥›,%-˝ı‘‚_’}¢ˆ5£æ»õ^I"80
≠¶(•ûi¡õ√™õ∂æ≠ÏÎUÚÃ§ôÃç¨√Q"≥"—TX_≤˚ÚåÕ’Ñ¬48⁄≠©÷–&∑Ωt≈ÜßòF&
∞1¯û B¢Bv'_ﬁÁÿ Ÿ§è¬3'iwn/
õGÎ?Vò∑AΩB1ùJfc)j“˝å¯û(»¬ÂÏ∑23Z6E≠[TÆó| [∫y;ºaªÇ)tÿä≤äé+Ö®6∏ê\ä'™^NYßŸØ$DƒÛ
é·5≥≈é«–â≥<˙N¶A]"V◊©3yhó<[Œ·eÌ&áøÜ»qkY‹´¯ê_ìñY‚8Ä·ÕπHÔ∞z…ïAa•eåd˝#.$FëÌ|óò+˙Æ
yBr@K.ß+ª|–zàª„tıÕãæMÓ“#Ób∞‘ıŸÑ˚ØÓõyΩ˙≠Fn¯à¶ˆÕP°˝YF¯œôõAYá@OÛU	íN” I«ü·6E] é∏eÛıªıÓP>7ö96Œ6I˚¬ﬁ\˚ﬂ át˘]L#•1˜¢ô7REüÄÁ|Ωãdvy Ÿu8ç#´˝’˝€ﬂó§C9JIãôF7Ó:ò& c8óË N˚◊2Å,M%˚ƒ·c)9Lˇì4˛9¬ì≠S2‹Õfö◊Ñ~í3—«õﬂñ~~ IØÏWè7íUÿ¬¿√≠ﬂΩ)]Üê∞k`úùzÇ˙1'l≠ró!˝f˝?£(»Ú∂da
”G°õÈ^W±}˛-ÁÊ3¥eúù–&&t7(ÊD∑â>â„Í‡∑˛,(Œﬂ>ﬂ?>2á/Œ^æÿ;;<~LE∫H≈dH‰CIŸ}&>>Ç”Œë~Õ(ªó◊…Ÿ.'{Ù®√OØÖˆR¯öî·$gxÍÊ[LéJ⁄1œI≥Y˚ v¶îÌÅdg‚ÎObû°ì~çH˝=m1˝Û†7ﬂLD⁄ËóZê;çŸd2øŒN0U”—I?#ÿÊõõ¿6yŒzÄéÙ¬È¶c<&ùÑd∂tZ¡¡k˘ü—ÛÃŸ^(Æ[p‰x∂ﬂOôMvÿtjPø@…{≈RÚØë±d≈kÏ≈Ó÷œßê-ÑfKÎ˚c)AP(5È>≥`a≥˛#*Óx a6B 	&‚Ê•åfÏËﬁdò5áŸIÏ	”OŒ3ÜıÄø≥‰;ªŒu«\:ÆÊ,¥bH5jà!≤°>l·=\QÏc)È≥˚z@ƒ›]9 BŒÔêó…⁄gØ}ºúöBY7EÊ],∏c¢√Û√—E»ÀdßA\ã≠‰ºªàº€gºÎÔÜ∑“πbÓµõ’òs·›	Y…Â˘îÌÆlZ·fQ»ú!ôpÈÃå{ÊÙn∏ù.WiÊÍZëN@;-ºNM@,πûºQ.m}dò8⁄*Ã»ä…8>sD∆læùÜcyñòÉ[Èºè«\⁄¶-;◊∞C]åm>ô¡Àîß∫¨÷ÔetZ·bä≠ì)T˜‡ò‹ﬂEnÕÈ«#Z§CΩ]ø’∑ïÂ¶∫T÷±·yfôì)hó1+úÓ¡,»t Ô<?√§»
Îï±Óœ‹¡•}⁄±⁄W!%»≈„<Z5xÂ˙,“W:˜Z¬ñ‹D”Õ◊?¨Jú=°ç‡R¢"Kd6.}ïpR”IÖﬂú‰~=:RóΩñüÊR9o◊Ô{~≤¢‹V⁄v`{PD“E!í#∞8˘˝¢Ï9P†N<¥ôO3ï *üª- j´bÂàQ‹.QûÆ„^¿+§∞ï+Áﬁ!∑‰BbW˜®6_Ó˛b2Z•lº{µ≤»—Bû€v)‰∂9Û+/∑elß"≥Íh_iî>ö]P§ÉÒ±'˘˙Ö‰:8˘"·Í'≠Ruòã°”¯ö.√à45`Õ7""rñãXpÜ˝ 8$Å§ΩIö-	gBëRè‹$ƒN Ä.(∏1>¡9e¸Ö¿C ±PR<Ûwíèxe≤!E¨ ]ú√	àLöídÖ,N}4åt∞ÿ 2Çépà·Dﬁ∫^«ªØˇ—Ù°˙\*›]+¡ìÔQ˛◊…ô<l
{Ukü´“ç«"ÅFŸêúÒ‚-89DLºAüù÷«ö+Õúª#ZDJO9˘Ø√¡Âhà©pU7Ü3ºπ%ª,3*‚»>^¡Ü _9G“F2ß ﬂ∑†H,™x›“"aÑZ◊éSX˙x¶¿ü‹Ì—≈g‘ˇ9m´s9ËD¥bÕO#
ANŒsa¥rv$À’kLFIˆåTƒsWä0È˚≥ÛÜe·±5'ˇ%Â√$Ç!|¨a:{"I4qÃ∏I!.zNfv¿TËêJ)‹ˆÉæ⁄»(2FuÅë<ßHöbnôo(zQa†IÉºy¶E<çÄJÚJúB∆({Ì8‘û¢‘wV“°#¥Ù§ı≈ê%óZ\?ƒåŸ[°‚Ï-5ÂòÀióÜbÈR<,Á$t:YLsOÒ¸≠-MÊ•¨!ë5^qÍ|)íÀÁ÷$πfâV:¨\«ÔÛ€Åæ˝ ur4‡M°î—£Ì•Gƒ¢áÃo<MÏ⁄>!¨ø&0´gÌ)π°TeÓcL˜%Õöá£CÔ¶ŒÃ==)Ô~I“√ K‡≠Ó∏∏‘ÙPÖÒÖ4™H˚ùú*>cô•ÌîrPFß2lD¿øwv≈RN‰å0iP|ÉïÒﬁÿgtt∞zöÉLÄ≠GnƒÛùêãCå«Ö€2˝KT;êwóÖ·ò
øê|›`∫Uk_w<úîÀ
t6)õËÒRóço•VÖ›=∑óÉ+#øXqçÔ∆^
´8Ø‘Ô”VÃ(:≥Z[e€yäl>aQÈ–ÿÃ2í'ñÊmû∫…ÖY1UcCMãï˘ÖÒ<gu
ß'√ Åú!…ª∑Ô‹ÉôFó´ØﬂÉ‚òí`‰	„—0‘Ò˜uò§,[&•Èâ,ÆûπY)*åÙÃUªeÁQ#π~ÁisôD¿5NŸ∞ ì©C˙ﬂ7˘1i65çË◊Êﬁ˝_|pPËe<F€¯·‹ítÿ*+µà$¥e≠vb¬™ü+—¸¸º¨¨Ç2:GÃ^aÎ¬ﬁ>‰ô∫Yåê€¡FÙ∞úy…
'ŒcáU¨˙ÇœT||ÛÃî&ûπÚ2ßÛjTÊ ∫¢Îéâ±‹mÿ%πãpLŸ,Z´≈9R‚‘ÄüBB>&BêöÇ¥Ò˘l<OE^˛"Ãà¢€pï˛a®3t÷›∞·pgx>®ûJróèƒ‰ËYäæL≥ˆÑ©ujl€ÿÌá¡8ÜZ™1tHÜ@J rµπ6{ò]:µƒÁŸ¯|ÆuÊ°ìÁeÂÁ5FJ$Eb•áêìC[UÓ#„T#+);Œ˝ƒ ÍZ¯%•ª
7ärãërJa‰ÂdÍo•nË_BÅI‡ew)»‹úôíR)-üõÛS`>Ê¡ËTP¨ﬂœ‡_«£+◊?ê∏];1L”®£∞úqI¥§09Ö∆◊6√¸J–Ê ¯ÿ∆¡7Cn6À/ÕG∞ƒdqﬁ-#ñ¡·´¡¬f˚Õæ«Î4,Ôy\Óç∞P›Û|åk<OáAû§hÙ,Ä–_Ó~ﬂßãøÕî∫çÁ[‡Ì±ôÖjæIw“¥ªì∑¿\≈ƒŸ◊B∫ÛÏÛIgæg˛≈8€@R·?`s∫ˇÏË‡Ïoç‡)ßÊÈ—£g;ÊLù1ìˇEòFåîæyÃ…Ó9ˇÚÈ—SNè¶aT;t]˚∆/]C:‚¸¨ÚÙÂÒﬂNÏˇÚ‡Âô˘Â”pëÉ¥2TÀΩÔ9˘ 3∆‚*»´ -¢'üÖºEåﬂ3å≥W!ô_Ùú:ˆd˝æO˛,œ∞€Ã¯sè#nùís¿`ÛtÅs—¶76œ5«8’èÀ ˝ÙF éç¯˝>ws§Û'‡õ}≠"	àÂì oÙß¥„œÌkí$˝è'k˚ü6_l‹pÛÖIAÍßA8a“ÿıŒOAn‰ÖkÃQÁ"eü«2Ï˙ÑFè’¡Üï8Sy	Áπœ∂‡”}<≤ùK˙·[.+ Ñ⁄ç± ïîˆåÀÑ*¶–!Ω˚Öˇ»§±#rAB}ùÀüÍLKk§8ió$eÏ› b„—Úfî¥ÂàCËööR-àŸZpì¡Ù?I=1˝7–øëx¿Iá›ˆ5(Õq ∫Ä4 †›%eN[9ÈÙßx˛aˆ˚Ù¢#∫¿ØL‚p$Ã¸Ûû6Ô5#¯ÊºƒÈ˘˘k=¶ ∂—¶02öèznû◊%'ˆ¡Œ¢r€EÊ˚≠„Û3øØ–31úÙ^¯‡mÍÅE«'
z§pô±¨.Ù∑@ü√säKƒ⁄∫Ûß£<CË±?∑µ"Ç∂‰nˆı®KŒÚé›£Øü;Ê.≈¥è≥›¸?;ä”√êypÊDèıÎò~{ñ‰≈sm6õ;îÖ‚QÈpÜ9¨·c§]n7·£+kå≠2àF~¨]òóüO!&QMl0àí´!˚¸$ô8∏V•¥ÄêéMOmÌ‚c'æ‘ê6©
±£J\á«O‡®i%gIöŒ7¿È∏w<xÄ^–j• 1'œö◊) ˆH;.;◊ñ√ZÂPfùΩ>_ˇPîÀbhYbM
È±hÆ8í ≤â9Ï,FOƒÍ0Pì!T°Âd÷zK>5«N∏zí+s/jDí©+'˘7>≤XG±K9T®
ìÕy∂∂%f˛æ›3˜ü9ﬁh-âj-”UM¯œS ¥I4ig≠s€r˙å™…fS5ròª9loIëúç„3bã„ÆπNãjuHÀ„ÊY#h©!6W±9ÇãYx{>ÑoÛ§ó∏JÜÉÆ„2†pπ˝ﬂ∞˚84¡≥*ﬂp0–´r¶àIìO¶æbœó£h¿Nu‡b.«ä ÉƒäáòÃr
h°gçÑŸ{BÙf®)Z¬ö†OÊö…∂bÛ‰ó†:[_åû)“˘Æ9 ZfDk €7ıW}ÍÒ#yﬂDúl∂>·–>óΩ¶»£§ïk†o…!CxâœÃëÔ§Ø/Rûøˆ"?0⁄	2É|¥ïÑƒÖ∑Nb/†åx·ˆ∆⁄„åHmJ$‚˜r≤/ÜØ¨∏πï©^üÛÕS¬“◊‹›'=+£;-øúñåòK◊JZ2?F†≤‡@àâ@”ïóxó¨ºï™∫±°¯(ÍrÇˆåf4Û3ÇcaâÅ√(•¬¬¬Õ¬ÕSOÍÂc◊7èr«\∂K«`Ë	xaÀ∫(1“œwÖ\˜lÙR∑∂Ë‹lûì∂Q€PÑ˙&¥¡»Ûú?õ‰ÈÎ°I¿y≈VYO≠€hœã>	§ÆÌ*ÎÁ”⁄d⁄úı[>„ÊÀ∑“ºÆœÜeòã%KœÕÕ‹°X"≠™m:Å){=‰jSß9J¢Ô	ˆJ∫/∆Í1MÎ¥ÛDca´.“5?÷':àiÚ¨L·ásñŒ+kòΩ	›õãA*lBcp®Á¨k≠˙'`2èDŒEÀ™[$¶ÀNÓa´†Oxvì(_vmÌRèp£1‰¡3◊,€∫6EôÅõAÂßTÈaz@õAÓ£ªØÂ@EπêbÌGÏRÖ¸‚∑>€¿ÊÚ1.¿5⁄Ë7Ey(íÂò»¢d°RÈ¢- π:eóß!í¯«π/ﬁÑº`Û#4ÿ >4{|\|∫ºõ≈q‹Î˙RyJFëÎv+yJF„˙]ÀG–—G›FÛK¶[√‚:tX±€3F‡!⁄<C$ë÷51|ﬁ#É=⁄¬À¥ì;Înãæ+yKD´»-É#Â[l…4Á9 ø\çf…eáKf¸ì6/?ˆ≈Gw}Ü∆√Eœ¯!Ò∫R+$–îŒ)ÇÛQ‡Êê;«Ÿâh¬§,ﬁá!}Í©)jÚ˜,KÀ\1ÒaŒÔbSS∑|H»Sb>aÍU/ÅX6m0Ü∞{%∫{õNëbØ£ßœ“3=lìbe¨]o–[®›]Ø \49‚ÖMps◊Ke!VÆR∑4ôÓr¯kñàøÚù[ùS∞Éïø≤s∆™ge¿-ÎK=ù7õˇ.gôÛå∂∂‰Æ}â≤4w©aÙß˜ÕXıÔ0#äøπµ˛ÌÖóÜ˘cU´∑ô$&∏EÜ mR6óyW,mW+˚†>dÜ(Õ{èÛ1gó~AÒpÂ2+ÄAKÏÍ!@”s`¬£≠ƒƒò‹—_ÚôØ≈z∏Ä˛Íî’≥SWÊùÆŒ7içñvÃqRK√¨∞æQ±‹'OOK> ◊Ñ≥>rﬂ“lÙ];AÌXﬂW¯∞í<…Ÿ–≥úÚÇ∆]Ç∆¿œ≥ò*z( PÁH3tyN'‰snÿ®s„ö˜Q2«¢”c…†Ö‹4æh3Z>·ÿ7Ôﬁ *üäÕëN00#y‡pÒ1‘'%‹Yˇo§-≥ù)∏Ù˘8ìœ)h}E÷⁄YÔÁ0ÛÒjK‰«Õ:?Ê…⁄cN^Ôúûb‡Ÿﬁ”É£ÉgfÔÙÙxˇê€uvÑéíKÁ˛—{Å|gaèWØ»Å/˚Ù`ªÙóÄû´€ÅXx∞ì\ôxdMZÑdsÆøæh‘¶„‚â±â#&ó≤ ©ã‰ÁE{˛‚Ô˛Ú/˛?   ˇˇ 0w•"
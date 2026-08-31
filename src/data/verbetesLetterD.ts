// DIBE Artrelados - Letra D Atualizada e Validada
import { Verbete } from "../types";

export const VERBETES_LETTER_D: Verbete[] = [
  {
    "id": "d-001-densidade-de-pontos",
    "code": "D-001",
    "term": "Densidade de Pontos",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e substantivo masculino.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "ConcentraÃ§Ã£o e espaÃ§amento entre os pontos que formam determinada Ã¡rea da matriz de bordado.",
    "definition": "A densidade de pontos Ã© a concentraÃ§Ã£o dos pontos utilizados para formar determinada Ã¡rea de uma matriz de bordado. Ela estÃ¡ relacionada Ã  distÃ¢ncia entre os pontos ou entre as passagens de pontos que compÃµem uma regiÃ£o do desenho. A densidade influencia diretamente a cobertura do tecido, a aparÃªncia, a espessura, a rigidez, o consumo de linha e a quantidade total de pontos. No bordado eletrÃ´nico, Ã© um dos parÃ¢metros fundamentais na criaÃ§Ã£o e revisÃ£o de matrizes.",
    "technicalDetails": "Varia inversamente ao espaÃ§amento: maior concentraÃ§Ã£o de pontos resulta em maior densidade, enquanto maior espaÃ§amento resulta em menor densidade. Nos softwares de programaÃ§Ã£o (Wilcom, Hatch, Embird), Ã© calibrada em milÃ­metros de espaÃ§amento entre linhas (ex: 0.38mm a 0.45mm no Tatami). Deve ser analisada em conjunto com o tipo de ponto, tecido, espessura da linha, estabilizador e underlay.",
    "construction": [
      "EspaÃ§amento entre linhas de pontos (stitch spacing)",
      "Comprimento do ponto (stitch length)",
      "Camada de suporte estrutural (underlay)",
      "CompensaÃ§Ã£o de encolhimento (pull compensation)"
    ],
    "howItWorks": [
      "1. O programador define o espaÃ§amento entre as passagens de agulha no software.",
      "2. Ã�reas de preenchimento recebem densidades equilibradas para cobrir o tecido.",
      "3. Detalhes finos e letras recebem calibraÃ§Ãµes especÃ­ficas para evitar acÃºmulo de linha.",
      "4. A mÃ¡quina executa as perfuraÃ§Ãµes mantendo a distÃ¢ncia programada entre cada passagem."
    ],
    "mainTypes": [
      "Densidade PadrÃ£o / Uniforme (0.40mm a 0.45mm para tecidos planos)",
      "Densidade Alta (0.35mm a 0.38mm para cetim e superfÃ­cies lisas)",
      "Densidade Leve / Aberta (0.60mm a 1.20mm para sombras e fundos)",
      "Densidade Gradiente / VariÃ¡vel (transiÃ§Ã£o suave de cobertura)"
    ],
    "advantages": [
      "âœ” Garante cobertura perfeita e uniforme sem transparÃªncia do tecido",
      "âœ” Otimiza o consumo de linha e reduz custos de produÃ§Ã£o",
      "âœ” Previne quebras de linha e desfiamentos por excesso de atrito",
      "âœ” MantÃ©m a flexibilidade e maciez natural da peÃ§a bordada"
    ],
    "limitations": [
      "Aumentar a densidade indiscriminadamente nÃ£o corrige falhas causadas por underlay deficiente ou falta de compensaÃ§Ã£o de repuxo."
    ],
    "commonErrors": [
      "â�Œ Aumentar a densidade simplesmente para tentar esconder o tecido que estÃ¡ aparecendo.",
      "â�Œ Utilizar a mesma configuraÃ§Ã£o de densidade para todos os tipos de tecido.",
      "â�Œ Confundir densidade com a quantidade total de pontos da matriz.",
      "â�Œ Redimensionar uma matriz sem recalcular ou revisar a nova distribuiÃ§Ã£o dos pontos."
    ],
    "voceSabia": "Uma matriz profissional nÃ£o procura necessariamente utilizar o maior nÃºmero possÃ­vel de pontos. O objetivo Ã© encontrar o equilÃ­brio exato entre cobertura, qualidade, estabilidade e eficiÃªncia, eliminando pontos desnecessÃ¡rios.",
    "curiosidadeTecnica": "A densidade pode ser representada de formas diferentes nos softwares: alguns usam o espaÃ§amento linear em milÃ­metros (quanto menor o nÃºmero, mais denso), enquanto outros utilizam linhas por polegada ou densidade percentual.",
    "dicaArtrelados": "NÃ£o pense que 'mais pontos = melhor bordado'. Antes de aumentar a densidade, procure descobrir por que o tecido estÃ¡ aparecendo. Verifique: tipo de ponto   direÃ§Ã£o   underlay   tecido   estabilizador   linha   densidade. E lembre-se: pontos desnecessÃ¡rios custam dinheiro em tempo de mÃ¡quina e linha!",
    "recommendedSettings": {
      "density": "0.40mm a 0.45mm para Tatami; 0.38mm a 0.42mm para Satin",
      "needleType": "75/11 DBxK5 ou 130/705H-E",
      "stabilizer": "Rasga-fÃ¡cil ou Recorta-fÃ¡cil conforme a elasticidade",
      "speedPPM": "650 a 850 PPM"
    },
    "applications": [
      "Preenchimentos Tatami, colunas em Ponto Satin, coberturas de grandes Ã¡reas, logotipos e monogramas."
    ],
    "troubleshootingTips": [
      "Se o tecido ficar rÃ­gido como uma placa de papelÃ£o ou com furos de agulha, reduza a densidade em 10% a 15% e reforce o underlay.",
      "Se a linha estiver quebrando repetidamente na mesma Ã¡rea, verifique se nÃ£o hÃ¡ sobreposiÃ§Ã£o excessiva de camadas densas."
    ],
    "relatedTerms": [
      "Densidade de Bordado",
      "Densidade VariÃ¡vel",
      "Densidade Excessiva",
      "Densidade Insuficiente",
      "Underlay",
      "Ponto de Preenchimento"
    ],
    "imageUrl": "/images/d001_densidade_pontos_v1.jpg?v=1",
    "imageCaption": "Comparativo Técnico de Densidade de Pontos: Efeito do espaçamento entre passadas de linha (Baixa 0.80mm, Padrão 0.40mm e Alta 0.25mm) na cobertura do tecido e na formação do ponto.",
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
    "origin": "Do latim densitas, -atis (qualidade de denso, espesso, compacto), derivado de densus (cerrado, apertado), e do latim punctum (picada, furo de agulha). No bordado mecÃ¢nico e computadorizado, o conceito foi formalizado com as mÃ¡quinas pantogrÃ¡ficas automÃ¡ticas suÃ­Ã§as e alemÃ£s no final do sÃ©culo XIX para calcular a cobertura de fios sobre o tecido.",
    "beginnerExplanation": "A densidade Ã© a distÃ¢ncia que existe entre uma linha de ponto e a outra vizinha. Se vocÃª colocar os pontos muito juntinhos (muito denso), o bordado fica duro como uma placa; se colocar muito afastados (pouco denso), o tecido de baixo vai aparecer como se estivesse furado ou ralo. O segredo Ã© achar o equilÃ­brio perfeito!",
    "practicalExercise": "No seu software de bordado ou na mÃ¡quina, crie trÃªs quadrados idÃªnticos de 3cm x 3cm em ponto Tatami com o mesmo tecido e entretela: configure o primeiro com densidade aberta (0.60mm), o segundo com densidade ideal (0.42mm) e o terceiro com densidade muito apertada (0.28mm). Borde os trÃªs lado a lado e compare com as mÃ£os: sinta a flexibilidade, observe se o tecido apareceu no primeiro e se o terceiro ficou duro como papelÃ£o.",
    "quickSummary": "Densidade de pontos Ã© o espaÃ§amento entre as passagens de linha na matriz, determinante para garantir cobertura homogÃªnea sem gerar rigidez no tecido.",
    "bibliographicReferences": [
      "WILCOM. Stitch Density and Spacing Reference Manual. Sydney: Wilcom International, 2022.",
      "DEVERSON, D. Complete Embroidery Digitizing Masterclass. London: Textile Press, 2020.",
      "ARTRELADOS. Guia de Densidade e EstruturaÃ§Ã£o de Matrizes. SÃ£o Paulo: AteliÃª Artrelados, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-002-densidade-de-bordado",
    "code": "D-002",
    "term": "Densidade de Bordado",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e substantivo masculino.",
    "category": "Terminologia Geral",
    "summary": "Grau de concentraÃ§Ã£o de pontos de uma regiÃ£o ou do conjunto global de elementos de uma matriz.",
    "definition": "A densidade de bordado corresponde ao grau de concentraÃ§Ã£o dos pontos utilizados para construir uma determinada regiÃ£o ou conjunto de elementos de uma matriz. O conceito estÃ¡ diretamente relacionado Ã  ocupaÃ§Ã£o da superfÃ­cie do tecido pelos pontos e Ã  quantidade de material empregada na formaÃ§Ã£o do bordado. Enquanto a densidade de pontos enfatiza a concentraÃ§Ã£o local em determinada Ã¡rea, a densidade de bordado descreve a caracterÃ­stica global do desenho ou de grandes blocos do projeto.",
    "technicalDetails": "Avalia a distribuiÃ§Ã£o mÃ©dia de pontos por centÃ­metro quadrado em relaÃ§Ã£o Ã  Ã¡rea total do bordado, considerando a sobreposiÃ§Ã£o de camadas, a espessura da linha e o tipo de ponto utilizado.",
    "construction": [
      "Estrutura global de objetos",
      "CombinaÃ§Ã£o de pontos de cobertura e base",
      "EspaÃ§amento mÃ©dio entre passagens",
      "DistribuiÃ§Ã£o de peso e rigidez"
    ],
    "howItWorks": [
      "1. O programador avalia o comportamento global da matriz sobre o substrato tÃªxtil.",
      "2. Ã�reas uniformes mantÃªm uma concentraÃ§Ã£o constante para criar homogeneidade visual.",
      "3. Ã�reas de transiÃ§Ã£o recebem variaÃ§Ãµes para aliviar o peso da peÃ§a bordada."
    ],
    "mainTypes": [
      "Densidade Uniforme (Preenchimentos contÃ­nuos e homogÃªneos)",
      "Densidade VariÃ¡vel (Texturas, sombras e degradÃªs)",
      "Densidade Leve (Para tecidos finos e voil)",
      "Densidade Estruturada (Para jaquetas, sarja e bonÃ©s)"
    ],
    "advantages": [
      "âœ” Assegura a estabilidade dimensional do bordado no tecido",
      "âœ” Evita deformaÃ§Ãµes e franzimentos em peÃ§as acabadas",
      "âœ” Auxilia na correta precificaÃ§Ã£o comercial baseada no tempo de mÃ¡quina"
    ],
    "limitations": [
      "Uma matriz com densidade de bordado visualmente perfeita na tela pode reagir de forma diferente dependendo do tipo de tecido real."
    ],
    "commonErrors": [
      "â�Œ Avaliar a qualidade de uma matriz apenas pelo nÃºmero total de pontos sem observar a distribuiÃ§Ã£o.",
      "â�Œ Ignorar a combinaÃ§Ã£o linha + tecido + ponto + estabilizador.",
      "â�Œ NÃ£o considerar o impacto do underlay na densidade global da matriz."
    ],
    "voceSabia": "Dois bordados com exatamente a mesma quantidade de pontos podem ter densidades completamente distintas se um deles tiver o dobro da Ã¡rea fÃ­sica do outro!",
    "curiosidadeTecnica": "Dois preenchimentos com quantidade semelhante de pontos podem apresentar percepÃ§Ãµes visuais diferentes devido Ã  inclinaÃ§Ã£o dos pontos, ao tipo de ponto e Ã  reflexÃ£o da luz na linha de poliÃ©ster.",
    "dicaArtrelados": "Quando analisar uma matriz, nÃ£o olhe somente para o nÃºmero de pontos. Observe a distribuiÃ§Ã£o deles: quantidade + distribuiÃ§Ã£o + tecido + linha + estabilizaÃ§Ã£o + tempo de execuÃ§Ã£o. Isso melhora o bordado e afina sua precificaÃ§Ã£o!",
    "applications": [
      "Planejamento global de matrizes para confecÃ§Ã£o, personalizaÃ§Ã£o e uniformes."
    ],
    "troubleshootingTips": [
      "Se o bordado repuxar o tecido ao redor do desenho, reduza a densidade de bordado global e melhore o bastidoramento."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Densidade VariÃ¡vel",
      "Matriz de Bordado",
      "Underlay",
      "DigitalizaÃ§Ã£o"
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
    "origin": "Do latim densitas (concentraÃ§Ã£o, espessura) e do Ã¡rabe hispÃ¢nico al-burdÄ� (tecido bordado ou listrado). No contexto fabril moderno, o termo 'densidade de bordado' consolidou-se na indÃºstria tÃªxtil para medir o peso e o consumo de matÃ©ria-prima por decÃ­metro quadrado de produto pronto.",
    "beginnerExplanation": "Enquanto a 'densidade de pontos' olha para um pedacinho especÃ­fico do desenho, a 'densidade de bordado' olha para o projeto inteiro: Ã© o peso geral do bordado na sua peÃ§a de roupa. Ajuda vocÃª a saber se a matriz nÃ£o vai ficar pesada demais para um tecido fininho ou leve demais para um casaco grosso.",
    "practicalExercise": "Pegue duas camisetas iguais: em uma, borde um brasÃ£o com preenchimento total sÃ³lido e pesado (alta densidade de bordado); na outra, borde o mesmo brasÃ£o apenas em contornos elegantes com pontos leves. Vista ou segure as duas peÃ§as: repare como a primeira fica repuxando e pesada no peito, enquanto a segunda tem caimento macio e natural.",
    "quickSummary": "Densidade de bordado Ã© a concentraÃ§Ã£o global de pontos em relaÃ§Ã£o Ã  Ã¡rea total do projeto, fundamental para calibrar o caimento tÃªxtil e a precificaÃ§Ã£o.",
    "bibliographicReferences": [
      "TAJIMA. Industrial Embroidery Operation & Quality Guide. Nagoya: Tokai Industrial Sewing Machine Co., 2021.",
      "KRAUSZ, P. The Industrial Embroidery Handbook. New York: Textile Media, 2019.",
      "ARTRELADOS. Manual de Planejamento e PrecificaÃ§Ã£o no Bordado. SÃ£o Paulo: AteliÃª Artrelados, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-003-densidade-variavel",
    "code": "D-003",
    "term": "Densidade VariÃ¡vel",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e adjetivo.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "AplicaÃ§Ã£o de diferentes nÃ­veis de concentraÃ§Ã£o de pontos em um mesmo objeto para criar texturas, sombras e degradÃªs.",
    "definition": "A densidade variÃ¡vel Ã© a utilizaÃ§Ã£o de diferentes nÃ­veis de concentraÃ§Ã£o de pontos dentro de uma mesma matriz ou entre diferentes regiÃµes de um desenho. Em vez de aplicar uma Ãºnica densidade a toda a Ã¡rea, o programador ajusta a distribuiÃ§Ã£o dos pontos de acordo com o efeito desejado, o tipo de tecido e as necessidades de cada regiÃ£o, criando transiÃ§Ãµes graduais ou abruptas.",
    "technicalDetails": "Configurada nos softwares de digitalizaÃ§Ã£o atravÃ©s de parÃ¢metros de gradiente (densidade inicial vs. final, curva exponencial ou linear), permitindo transiÃ§Ãµes de 0.35mm atÃ© 2.50mm de espaÃ§amento dentro do mesmo bloco vetorial.",
    "construction": [
      "Ã�rea de alta concentraÃ§Ã£o (sombra / volume)",
      "Zona de transiÃ§Ã£o gradual (gradiente)",
      "Ã�rea aberta / baixa concentraÃ§Ã£o (luz / transparÃªncia)",
      "Underlay sincronizado com a variaÃ§Ã£o"
    ],
    "howItWorks": [
      "1. O digitalizador aplica a ferramenta de gradiente ou densidade progressiva no objeto.",
      "2. O software calcula o aumento ou diminuiÃ§Ã£o progressiva do espaÃ§amento entre as passagens.",
      "3. Duas cores sobrepostas com densidades variÃ¡veis opostas misturam-se suavemente criando efeito de fusÃ£o."
    ],
    "mainTypes": [
      "Gradiente Linear (VariaÃ§Ã£o contÃ­nua de um lado ao outro)",
      "Gradiente Radial / CurvilÃ­neo (Acompanha o centro ou curvas da forma)",
      "Densidade VariÃ¡vel por Zonas (Definida por Ã¡reas de luz e sombra)"
    ],
    "advantages": [
      "âœ” Cria efeitos de sombra, profundidade e realismo impressionantes",
      "âœ” Permite mesclar duas cores de linha criando transiÃ§Ãµes perfeitas (degradÃª)",
      "âœ” Reduz pontos desnecessÃ¡rios e alivia o peso do bordado no tecido",
      "âœ” Evita acÃºmulo excessivo de linha em Ã¡reas sobrepostas"
    ],
    "limitations": [
      "TransiÃ§Ãµes muito abruptas podem resultar em falhas de cobertura ou visual desigual se o tecido de fundo tiver alto contraste."
    ],
    "commonErrors": [
      "â�Œ Alterar a densidade apenas para tentar reduzir pontos sem planejar o efeito visual.",
      "â�Œ Criar variaÃ§Ãµes exageradas entre Ã¡reas contÃ­guas sem uma zona de transiÃ§Ã£o suave.",
      "â�Œ Esquecer de ajustar o underlay para acompanhar a Ã¡rea mais aberta do gradiente."
    ],
    "voceSabia": "A densidade variÃ¡vel permite criar sensaÃ§Ã£o de profundidade e realismo tridimensional em pelagens de animais e pÃ©talas sem precisar trocar de cor de linha.",
    "curiosidadeTecnica": "Em softwares profissionais, pequenas alteraÃ§Ãµes no espaÃ§amento produzem variaÃ§Ãµes perceptÃ­veis na reflexÃ£o da luz na linha, transformando a distribuiÃ§Ã£o dos pontos em um elemento artÃ­stico autÃ´nomo.",
    "dicaArtrelados": "Use a densidade variÃ¡vel com propÃ³sito! Antes de alterar a densidade de uma regiÃ£o, pergunte: 'Quero mudar a cobertura, a textura, o peso ou apenas corrigir um problema?' Se for para corrigir falhas, revise primeiro a estrutura e o underlay da matriz.",
    "applications": [
      "Efeitos fotogrÃ¡ficos, sombras de personagens, plumagens, pÃ©talas de flores e fundos texturizados."
    ],
    "troubleshootingTips": [
      "Se o tecido aparecer em excesso na parte aberta do gradiente, acrescente um underlay leve ou diminua o espaÃ§amento mÃ¡ximo."
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
    "origin": "Do latim densitas (densidade) e variabilis (que muda, inconstante), derivado do verbo variare (mudar, matizar cores). No bordado artÃ­stico e digital, a densidade variÃ¡vel nasceu da tÃ©cnica manual do 'ponto matiz' (needle painting), onde a bordadeira variava a proximidade dos fios para imitar sombras naturais de flores e penas.",
    "beginnerExplanation": "Densidade variÃ¡vel Ã© como pintar com linha: em vez de preencher tudo com a mesma quantidade de pontos, vocÃª comeÃ§a com os pontos bem juntinhos em um lado e vai afastando suavemente atÃ© o outro lado. Isso cria sombras, degradÃªs de cores e sensaÃ§Ã£o de 3D sem precisar trocar de linha!",
    "practicalExercise": "Abra seu software de matrizes e desenhe uma pÃ©tala de flor. Aplique a ferramenta de gradiente ou densidade progressiva, definindo o inÃ­cio com 0.38mm e o final com 1.20mm. Borde sobre um tecido branco com linha vermelha: observe como a raiz da pÃ©tala fica vermelha escura e a ponta fica clara e suave, revelando o fundo branco.",
    "quickSummary": "Densidade variÃ¡vel Ã© o ajuste dinÃ¢mico do espaÃ§amento de pontos em um mesmo objeto para produzir efeitos artÃ­sticos de luz, sombra e transiÃ§Ã£o de cores.",
    "bibliographicReferences": [
      "HATCH BY WILCOM. Creating Realistic Textures with Variable Density. Sydney, 2023.",
      "NICOLAS, C. Art of Shading and Thread Blending in Machine Embroidery. Paris: Ã‰ditions TÃªxteis, 2021.",
      "ARTRELADOS. TÃ©cnicas de DegradÃª e Pintura com Agulha no Bordado EletrÃ´nico. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-004-densidade-excessiva",
    "code": "D-004",
    "term": "Densidade Excessiva",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e adjetivo.",
    "category": "SoluÃ§Ã£o de Problemas",
    "summary": "ConcentraÃ§Ã£o desnecessÃ¡ria ou exagerada de pontos que provoca rigidez, enrugamento e quebras mecÃ¢nicas.",
    "definition": "A densidade excessiva ocorre quando determinada regiÃ£o da matriz apresenta uma concentraÃ§Ã£o de pontos superior Ã  necessÃ¡ria para obter a cobertura e o resultado desejado. Esse excesso de penetraÃ§Ãµes e acÃºmulo de linha sobrecarrega a estrutura do tecido, aumenta o tempo de execuÃ§Ã£o, desgasta a mÃ¡quina e pode causar furos ou quebras frequentes.",
    "technicalDetails": "Caracteriza-se por espaÃ§amentos inferiores a 0.30mm sem necessidade tÃ©cnica, ou pelo empilhamento de camadas de preenchimento completo sem eliminaÃ§Ã£o de sobreposiÃ§Ãµes ocultas (recurso Remove Hidden Stitches desativado).",
    "construction": [
      "Passagens de linha superpostas em excesso",
      "MÃºltiplas camadas de underlay desnecessÃ¡rias",
      "Pontos excessivamente curtos acumulados",
      "PerfuraÃ§Ãµes repetitivas no mesmo ponto do tecido"
    ],
    "howItWorks": [
      "1. A agulha perfura o tecido centenas de vezes na mesma microÃ¡rea.",
      "2. O acÃºmulo de linha forma um relevo duro e volumoso.",
      "3. As tramas do tecido sÃ£o empurradas e cortadas pelo excesso de penetraÃ§Ãµes.",
      "4. A linha sofre atrito extremo contra a agulha aquecida, rompendo com frequÃªncia."
    ],
    "mainTypes": [
      "Excesso por ConfiguraÃ§Ã£o no Software (EspaÃ§amento abaixo do limite seguro)",
      "Excesso por Redimensionamento sem Recalcular Pontos",
      "Excesso por SobreposiÃ§Ã£o de Camadas (Falta de recorte interno)"
    ],
    "advantages": [
      "âœ” (Nenhuma vantagem tÃ©cnica real; Ã© considerado um vÃ­cio de programaÃ§Ã£o ou execuÃ§Ã£o)"
    ],
    "limitations": [
      "Prejudica o caimento da peÃ§a, encarece o trabalho e danifica tecidos delicados."
    ],
    "commonErrors": [
      "â�Œ Aumentar os pontos da matriz para tentar corrigir falhas que eram causadas por entretela frouxa.",
      "â�Œ Reduzir o tamanho da matriz em 30% a 50% sem recalcular a quantidade de pontos.",
      "â�Œ Acreditar que matriz com nÃºmero astronÃ´mico de pontos Ã© sinÃ´nimo de alta qualidade."
    ],
    "voceSabia": "Uma matriz com densidade excessiva pode cortar o tecido como uma serra microperfurada, fazendo com que o bordado se destaque e caia apÃ³s a primeira lavagem da peÃ§a!",
    "curiosidadeTecnica": "O excesso de densidade Ã© ainda mais crÃ­tico em regiÃµes minÃºsculas (como letras de 4mm), onde o olho da agulha nÃ£o tem espaÃ§o para formar a laÃ§ada sem colidir com a linha anterior.",
    "dicaArtrelados": "Se vocÃª estÃ¡ pensando em aumentar a densidade, pare um momento e investigue a causa! Talvez o problema esteja no underlay, na direÃ§Ã£o dos pontos ou na estabilizaÃ§Ã£o do tecido. Corrigir a causa raiz Ã© muito melhor do que simplesmente entupir a matriz de pontos.",
    "applications": [
      "DiagnÃ³stico e correÃ§Ã£o de matrizes com problemas de rigidez, quebras e repuxamento."
    ],
    "troubleshootingTips": [
      "Em caso de bordado duro como placa, reduza a densidade para 0.40mm a 0.45mm e ative o recurso de remoÃ§Ã£o de sobreposiÃ§Ã£o oculta no software."
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
    "origin": "Do latim densitas (densidade) e excessivus (que ultrapassa a medida justa, exorbitante), derivado de excedere (ir alÃ©m do limite). No bordado mecÃ¢nico, a densidade excessiva tornou-se uma patologia comum apÃ³s o advento dos softwares automÃ¡ticos que nÃ£o eliminavam sobreposiÃ§Ã£o de camadas ocultas.",
    "beginnerExplanation": "Densidade excessiva Ã© colocar pontos demais no mesmo lugar. Ã‰ o famoso bordado que vira uma 'tÃ¡bua' ou 'chapa dura', que fura o tecido, entorta agulha e arrebenta a linha toda hora. O excesso de linha nunca conserta um desenho mal planejado; ele sÃ³ estraga a peÃ§a.",
    "practicalExercise": "Borde em um retalho de tecido fino uma letra com preenchimento duplo superposto (densidade abaixo de 0.28mm sem remover pontos ocultos). Observe o barulho da mÃ¡quina sofrendo, sinta a quentura na agulha e veja como o verso fica com uma crosta grossa de linha que chega a quebrar a agulha.",
    "quickSummary": "Densidade excessiva Ã© o acÃºmulo desnecessÃ¡rio de pontos que provoca rigidez extrema, quebras mecÃ¢nicas e furos irreversÃ­veis no tecido.",
    "bibliographicReferences": [
      "MADEIRA. Embroidery Troubleshooting & Needle Deflection Manual. Freiburg: Madeira Garnfabrik, 2022.",
      "SCHMETZ. Needle Heat, Friction and Excessive Penetration in Automatic Embroidery. Herzogenrath, 2021.",
      "ARTRELADOS. PrevenÃ§Ã£o de Falhas MecÃ¢nicas e AlÃ­vio de Matrizes. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-005-densidade-insuficiente",
    "code": "D-005",
    "term": "Densidade Insuficiente",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e adjetivo.",
    "category": "SoluÃ§Ã£o de Problemas",
    "summary": "ConcentraÃ§Ã£o baixa de pontos que deixa o tecido aparente de forma indesejada e causa cobertura irregular.",
    "definition": "A densidade insuficiente ocorre quando a concentraÃ§Ã£o de pontos em determinada Ã¡rea da matriz Ã© menor do que a necessÃ¡ria para produzir a cobertura ou o efeito visual esperado. Como consequÃªncia, o fundo do tecido permanece visÃ­vel entre as passagens de linha, resultando em um desenho com aspecto ralo, fraco ou falhado.",
    "technicalDetails": "Ocorre quando o espaÃ§amento entre pontos Ã© excessivamente largo (ex: superior a 0.50mm em tecidos contrastantes) ou quando o underlay de suporte nÃ£o sustenta a linha superior contra as fibras do tecido.",
    "construction": [
      "EspaÃ§amento aberto entre passagens de linha",
      "AusÃªncia de base estabilizadora (underlay)",
      "EspaÃ§o visÃ­vel entre os fios de bordado"
    ],
    "howItWorks": [
      "1. A mÃ¡quina executa os pontos com espaÃ§amento largo entre as passagens.",
      "2. A linha de bordado nÃ£o consegue encostar na passagem vizinha.",
      "3. O tecido de fundo aparece nos vÃ£os entre os pontos, gerando aspecto translÃºcido."
    ],
    "mainTypes": [
      "InsuficiÃªncia NÃ£o Intencional (Falha tÃ©cnica de cobertura)",
      "InsuficiÃªncia Intencional (Efeito artÃ­stico de transparÃªncia e textura)"
    ],
    "advantages": [
      "âœ” Quando intencional, produz efeitos leves e econÃ´micos em fundos amplos"
    ],
    "limitations": [
      "Quando nÃ£o planejada, compromete o acabamento e a nitidez dos detalhes e textos."
    ],
    "commonErrors": [
      "â�Œ Aumentar excessivamente a densidade sem verificar se o problema era apenas falta de underlay ou direÃ§Ã£o errada dos pontos.",
      "â�Œ Ignorar a cor e a textura do tecido (bordar linha branca sobre tecido preto exige mais suporte).",
      "â�Œ Acreditar que toda falha de cobertura Ã© exclusivamente culpa da densidade."
    ],
    "voceSabia": "Em tecidos com contraste extremo (como bordar branco sobre preto), uma densidade moderada combinada com um bom underlay em tatami cruzado cobre muito melhor do que uma densidade alta sem underlay!",
    "curiosidadeTecnica": "A espessura da linha (TÃ­tulo 40 vs TÃ­tulo 60) influencia diretamente a percepÃ§Ã£o de cobertura: uma linha fina (TÃ­tulo 60) parecerÃ¡ insuficiente na mesma densidade que cobre perfeitamente com linha 40.",
    "dicaArtrelados": "Se o tecido estÃ¡ aparecendo, nÃ£o aumente a densidade automaticamente! FaÃ§a primeiro um pequeno diagnÃ³stico: Ã s vezes, corrigir o underlay ou mudar o Ã¢ngulo dos pontos em 45Â° resolve a cobertura perfeitamente sem acrescentar centenas de pontos desnecessÃ¡rios.",
    "applications": [
      "DiagnÃ³stico e correÃ§Ã£o de falhas de cobertura e acabamento translÃºcido em matrizes."
    ],
    "troubleshootingTips": [
      "Adicione uma camada de underlay Tatami a 90Â° da cobertura antes de aumentar a densidade principal."
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
    "origin": "Do latim densitas (densidade) e insufficiens, -entis (que nÃ£o basta, deficiente), formado pelo prefixo in- (negaÃ§Ã£o) e sufficere (bastar, suprir). Historicamente associada a falhas na cobertura onde o urdume ou trama do tecido escapa Ã  vista entre as passadas de linha.",
    "beginnerExplanation": "Densidade insuficiente Ã© quando faltam pontos no bordado e o tecido de baixo fica aparecendo nos buracos, deixando o desenho com aspecto ralo, desbotado e mal-acabado. Mas atenÃ§Ã£o: antes de encher de pontos, verifique se o problema nÃ£o Ã© apenas a falta de uma boa costura de base (underlay)!",
    "practicalExercise": "Crie dois cÃ­rculos de 4cm bordados com linha branca sobre tecido preto: no primeiro, use densidade 0.40mm SEM underlay; no segundo, use densidade 0.45mm COM underlay em Tatami cruzado a 90Â°. Ao bordar, compare: o segundo cobrirÃ¡ muito melhor o fundo preto gastando menos linha na camada superior!",
    "quickSummary": "Densidade insuficiente Ã© o espaÃ§amento exagerado entre pontos que resulta em cobertura falha e aspecto translÃºcido indesejado no bordado.",
    "bibliographicReferences": [
      "COATS INDUSTRIAL. Machine Embroidery Coverage, Thread Count and Underlay Dynamics. London, 2021.",
      "EMBIRD. Underlay versus Density Balance in Modern Digitizing. Bratislava, 2023.",
      "ARTRELADOS. Segredos da Cobertura Perfeita sem Sobrecarga de Pontos. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-006-desenho-de-bordado",
    "code": "D-006",
    "term": "Desenho de Bordado",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivos masculinos.",
    "category": "Design & CriaÃ§Ã£o",
    "summary": "RepresentaÃ§Ã£o visual grÃ¡fica utilizada como motivo de referÃªncia para a criaÃ§Ã£o da matriz de bordado.",
    "definition": "O desenho de bordado Ã© a representaÃ§Ã£o visual do motivo que serÃ¡ utilizado como base para a criaÃ§Ã£o ou digitalizaÃ§Ã£o de uma matriz de bordado. Pode ser produzido especificamente para bordado ou adaptado a partir de uma ilustraÃ§Ã£o, logotipo, sÃ­mbolo, personagem ou arte grÃ¡fica. Ã‰ essencial diferenciar o desenho (representaÃ§Ã£o visual em imagem) da matriz (instruÃ§Ãµes executÃ¡veis de pontos para a mÃ¡quina).",
    "technicalDetails": "Constitui o arquivo de referÃªncia visual (rasterizado em PNG/JPG ou vetorial em AI/CDR/SVG) que passarÃ¡ pela etapa de anÃ¡lise de viabilidade tÃ©cnica tÃªxtil antes de ser transformado em pontos.",
    "construction": [
      "Contornos e formas principais",
      "Paleta de cores de referÃªncia",
      "ProporÃ§Ãµes e escala dimensional",
      "Detalhamento e contraste visual"
    ],
    "howItWorks": [
      "1. A arte visual Ã© concebida ou recebida do cliente.",
      "2. O digitalizador analisa a viabilidade dos traÃ§os e simplifica detalhes minÃºsculos.",
      "3. O desenho serve de gabarito para a criaÃ§Ã£o dos objetos vetoriais e distribuiÃ§Ã£o de pontos."
    ],
    "mainTypes": [
      "Desenho Vetorial Original (Ideal para traÃ§ado limpo e preciso)",
      "Imagem Bitmap / Rasterizada (Necessita vetorizaÃ§Ã£o ou limpeza prÃ©via)",
      "Arte Adaptada para Bordado (Simplificada para a fÃ­sica das linhas)"
    ],
    "advantages": [
      "âœ” Estabelece a identidade visual clara e aprovada com o cliente",
      "âœ” Serve como guia visual exato durante toda a fase de digitalizaÃ§Ã£o",
      "âœ” Permite planejar a sequÃªncia lÃ³gica de objetos antes de gerar pontos"
    ],
    "limitations": [
      "Uma imagem bonita na tela nem sempre pode ser reproduzida fielmente em pontos sem adaptaÃ§Ãµes dimensionais."
    ],
    "commonErrors": [
      "â�Œ Confundir imagem com matriz, acreditando que qualquer foto pode ser enviada direto para a mÃ¡quina.",
      "â�Œ Escolher imagens excessivamente complexas com microdetalhes para bordados pequenos.",
      "â�Œ Tentar reproduzir todos os detalhes fotogrÃ¡ficos sem simplificar para a linguagem de pontos."
    ],
    "voceSabia": "A mÃ¡quina de bordar nÃ£o entende pixels nem cores visuais da tela; ela sÃ³ entende coordenadas X/Y de penetraÃ§Ã£o de agulha e comandos mecÃ¢nicos de corte e salto!",
    "curiosidadeTecnica": "Linhas com espessura inferior a 0.8mm no desenho original geralmente desaparecem ou viram fios soltos se nÃ£o forem convertidas em pontos corridos ou engrossadas para ponto cheio.",
    "dicaArtrelados": "Escolha o desenho pensando no bordado, e nÃ£o apenas na tela do computador! Pergunte sempre: 'Esse detalhe continuarÃ¡ visÃ­vel quando for transformado em pontos de linha?' Se a resposta for nÃ£o, simplifique antes de digitalizar!",
    "applications": [
      "Etapa inicial de conceituaÃ§Ã£o e prÃ©-produÃ§Ã£o de qualquer matriz de bordado."
    ],
    "troubleshootingTips": [
      "Em desenhos com letras muito pequenas, aumente o espaÃ§amento entre as letras no desenho antes de programar os pontos."
    ],
    "relatedTerms": [
      "Desenho Digitalizado",
      "DigitalizaÃ§Ã£o de Bordado",
      "Matriz de Bordado",
      "VetorizaÃ§Ã£o"
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
    "origin": "Do latim vulgar deexsignare (marcar, traÃ§ar linhas, indicar com sinais), derivado de signum (marca, sinal), e do Ã¡rabe hispÃ¢nico al-burdÄ� (tecido lavrado). Refere-se Ã  concepÃ§Ã£o plÃ¡stica original antes da traduÃ§Ã£o para comandos eletromecÃ¢nicos.",
    "beginnerExplanation": "O desenho de bordado Ã© a imagem que vocÃª quer bordar (uma foto, uma flor desenhada no papel, um logotipo de empresa). Mas lembre-se: uma imagem nÃ£o Ã© uma matriz! A imagem Ã© apenas o desenho visual; a matriz Ã© o arquivo com os passos de costura que a mÃ¡quina lÃª.",
    "practicalExercise": "Pegue o logotipo de uma empresa no formato JPG ou PNG e amplie bastante na tela do celular atÃ© ver os pequenos detalhes. Anote quais detalhes tÃªm menos de 1mm de espessura: esses detalhes precisarÃ£o ser simplificados ou eliminados antes de transformar a imagem em bordado.",
    "quickSummary": "Desenho de bordado Ã© a representaÃ§Ã£o grÃ¡fica de referÃªncia que serve como ponto de partida para a criaÃ§Ã£o de uma matriz digital.",
    "bibliographicReferences": [
      "PUNDOLE, F. Graphic Adaptation for Machine Embroidery Systems. Mumbai: Stitches Publishing, 2020.",
      "LEE, C. From Vector Artwork to Machine Embroidery. Seoul: Design & Threads, 2022.",
      "ARTRELADOS. Guia de AnÃ¡lise Visual e Viabilidade TÃ©cnica de Desenhos. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-007-desenho-digitalizado",
    "code": "D-007",
    "term": "Desenho Digitalizado",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo masculino e particÃ­pio.",
    "category": "Softwares & Formatos",
    "summary": "RepresentaÃ§Ã£o grÃ¡fica que foi preparada e interpretada digitalmente para servir de base Ã  matriz de bordado.",
    "definition": "O desenho digitalizado Ã© uma representaÃ§Ã£o grÃ¡fica que foi preparada, limpa ou interpretada digitalmente em um software grÃ¡fico ou de bordado para servir de base direta Ã  criaÃ§Ã£o da matriz. No contexto do bordado eletrÃ´nico, essa preparaÃ§Ã£o procura transformar caracterÃ­sticas visuais (linhas, Ã¡reas de cor, sombras) em elementos bem delimitados que possam posteriormente ser preenchidos por pontos.",
    "technicalDetails": "Representa a ponte entre a imagem bruta e a matriz final. Envolve a separaÃ§Ã£o em camadas de cores e a delimitaÃ§Ã£o precisa de nÃ³s e curvas antes da geraÃ§Ã£o dos parÃ¢metros de ponto.",
    "construction": [
      "VetorizaÃ§Ã£o limpa de contornos",
      "Camadas cromÃ¡ticas separadas",
      "Curvas de BÃ©zier e nÃ³s otimizados",
      "ProporÃ§Ã£o ajustada Ã  escala de bordado"
    ],
    "howItWorks": [
      "1. A imagem original passa por um software de vetorizaÃ§Ã£o ou mÃ³dulo grÃ¡fico.",
      "2. As cores sÃ£o reduzidas e os contornos refinados.",
      "3. Os objetos grÃ¡ficos sÃ£o organizados na ordem em que serÃ£o digitalizados.",
      "4. O arquivo serve como base tÃ©cnica para a aplicaÃ§Ã£o de Satin, Tatami ou Ponto Corrido."
    ],
    "mainTypes": [
      "Vetor Otimizado para Bordado (Com compensaÃ§Ãµes e tolerÃ¢ncias)",
      "Arte RastreÃ¡vel (Guia de fundo para digitalizaÃ§Ã£o manual)",
      "Desenho Segmentado por Cores"
    ],
    "advantages": [
      "âœ” Agiliza a aplicaÃ§Ã£o de pontos com precisÃ£o geomÃ©trica milimÃ©trica",
      "âœ” Elimina imperfeiÃ§Ãµes, serrilhados e ruÃ­dos de imagens de baixa qualidade",
      "âœ” Facilita o redimensionamento proporcional do desenho antes de gerar pontos"
    ],
    "limitations": [
      "Ter o desenho digitalizado em vetor ainda nÃ£o significa ter uma matriz de bordado pronta para bordar."
    ],
    "commonErrors": [
      "â�Œ Pensar que qualquer imagem em vetor jÃ¡ estÃ¡ pronta para bordar sem configurar pontos.",
      "â�Œ NÃ£o adaptar a espessura das linhas do desenho ao tamanho final desejado.",
      "â�Œ Confiar somente na aparÃªncia do vetor sem checar a fÃ­sica do tecido."
    ],
    "voceSabia": "A preparaÃ§Ã£o da imagem pode ser tÃ£o demorada e importante quanto a prÃ³pria digitalizaÃ§Ã£o dos pontos: 70% dos erros de uma matriz nascem de uma imagem mal preparada!",
    "curiosidadeTecnica": "Softwares como Wilcom usam o CorelDRAW integrado para preparar o desenho digitalizado em vetores antes de convertÃª-lo em objetos inteligentes de bordado.",
    "dicaArtrelados": "Antes de digitalizar, organize o desenho! Simplifique detalhes desnecessÃ¡rios, defina as Ã¡reas principais e pense na ordem em que elas deverÃ£o ser bordadas. Isso economiza horas de retrabalho na matriz!",
    "applications": [
      "PreparaÃ§Ã£o de logotipos de empresas, ilustraÃ§Ãµes personalizadas e desenhos infantis."
    ],
    "troubleshootingTips": [
      "Se as curvas ficarem com cantos pontudos ou irregulares na matriz, limpe o excesso de nÃ³s no vetor do desenho digitalizado."
    ],
    "relatedTerms": [
      "Desenho de Bordado",
      "DigitalizaÃ§Ã£o de Bordado",
      "DigitalizaÃ§Ã£o Manual",
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
    "origin": "Do latim deexsignare (traÃ§ar) e do latim digitalis (relativo aos dedos, de digitus, dedo/nÃºmero), aplicado no sÃ©culo XX Ã  computaÃ§Ã£o grÃ¡fica e conversÃ£o de sinais analÃ³gicos em representaÃ§Ãµes binÃ¡rias.",
    "beginnerExplanation": "Desenho digitalizado Ã© a imagem que foi limpa no computador (com contornos bem definidos e cores separadas) para que possamos aplicar os pontos por cima dela com facilidade. Ã‰ a 'planta baixa' perfeita para construir o bordado.",
    "practicalExercise": "Importe uma imagem com fundo sujo e cheia de sombras para o seu software. Tente aplicar pontos direto: veja como fica confuso. Agora, faÃ§a uma limpeza dos contornos ou vetorize a imagem antes: repare como a aplicaÃ§Ã£o dos pontos fica limpa, rÃ¡pida e precisa.",
    "quickSummary": "Desenho digitalizado Ã© a arte grÃ¡fica tratada e estruturada digitalmente para servir de guia exato na programaÃ§Ã£o de pontos da matriz.",
    "bibliographicReferences": [
      "CORELDRAW. CorelDRAW for Embroidery Designers: Vector Preparation. Ottawa: Alludo, 2023.",
      "ADOBE. Vector Graphics for Textile Application. San Jose: Adobe Press, 2021.",
      "ARTRELADOS. PreparaÃ§Ã£o de Imagens e Vetores para DigitalizaÃ§Ã£o Profissional. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-008-digitalizacao-de-bordado",
    "code": "D-008",
    "term": "DigitalizaÃ§Ã£o de Bordado",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e substantivo masculino.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "Processo tÃ©cnico de transformar uma imagem em uma sequÃªncia estruturada de pontos e comandos para a mÃ¡quina de bordar.",
    "definition": "A digitalizaÃ§Ã£o de bordado (tambÃ©m conhecida como programaÃ§Ã£o de matrizes ou poncheamento) Ã© o processo tÃ©cnico e artesanal de transformar uma imagem, desenho ou conceito visual em uma matriz de bordado composta por comandos e coordenadas que a mÃ¡quina de bordar consegue interpretar e executar fisicamente no tecido.",
    "technicalDetails": "Durante a digitalizaÃ§Ã£o sÃ£o configurados todos os parÃ¢metros tÃ©cnicos: tipos de pontos (Satin, Tatami, Ponto Corrido), Ã¢ngulos, densidade, sequÃªncia, underlay, compensaÃ§Ã£o de encolhimento (pull compensation), sobreposiÃ§Ãµes (overlap), pontos de entrada e saÃ­da, cortes e saltos.",
    "construction": [
      "Mapeamento de formas em objetos de bordado",
      "DefiniÃ§Ã£o da sequÃªncia lÃ³gica de execuÃ§Ã£o",
      "AtribuiÃ§Ã£o de subpontos e pontos de cobertura",
      "InclusÃ£o de comandos mecÃ¢nicos (cortes, paradas e trocas de cor)"
    ],
    "howItWorks": [
      "1. A imagem Ã© importada para o software de digitalizaÃ§Ã£o.",
      "2. O programador cria os objetos definindo tipo de ponto, direÃ§Ã£o e densidade.",
      "3. Configuram-se as compensaÃ§Ãµes para combater o encolhimento e estiramento do tecido.",
      "4. O software gera o arquivo final nos formatos da mÃ¡quina (PES, DST, JEF, EXP, etc.)."
    ],
    "mainTypes": [
      "DigitalizaÃ§Ã£o Manual (Total controle criativo e tÃ©cnico pelo profissional)",
      "DigitalizaÃ§Ã£o AutomÃ¡tica (Processamento algorÃ­tmico assistido pelo software)",
      "DigitalizaÃ§Ã£o HÃ­brida (CombinaÃ§Ã£o dos dois mÃ©todos)"
    ],
    "advantages": [
      "âœ” Transforma qualquer ideia visual em um produto tÃªxtil de alto valor agregado",
      "âœ” Garante produÃ§Ã£o rÃ¡pida, limpa e estÃ¡vel na mÃ¡quina de bordar",
      "âœ” Minimiza quebras de linha, paradas desnecessÃ¡rias e desperdÃ­cio de tecido"
    ],
    "limitations": [
      "Exige conhecimento profundo de mecÃ¢nica de bordado, propriedades dos tecidos e domÃ­nio de software especializado."
    ],
    "commonErrors": [
      "â�Œ Pensar que digitalizar significa apenas salvar uma imagem com a extensÃ£o .PES ou .DST.",
      "â�Œ NÃ£o considerar as caracterÃ­sticas fÃ­sicas do tecido onde a matriz serÃ¡ bordada.",
      "â�Œ Ignorar a ordem e sequÃªncia lÃ³gica de execuÃ§Ã£o dos objetos."
    ],
    "voceSabia": "Duas matrizes criadas a partir exatamente do mesmo desenho podem ter comportamentos completamente diferentes na mÃ¡quina dependendo das decisÃµes tomadas na digitalizaÃ§Ã£o!",
    "curiosidadeTecnica": "A digitalizaÃ§Ã£o Ã© a engenharia do bordado: enquanto o designer desenha formas estÃ¡ticas, o digitalizador desenha forÃ§as dinÃ¢micas que atuam sobre o tecido sob tensÃ£o constante.",
    "dicaArtrelados": "Uma boa digitalizaÃ§Ã£o comeÃ§a antes de abrir o computador! Pergunte primeiro: Onde serÃ¡ bordado? Qual o tamanho? Qual tecido? Qual linha? Qual bastidor? SÃ³ depois de ter essas respostas pense em como transformar o desenho em pontos!",
    "applications": [
      "CriaÃ§Ã£o de matrizes corporativas, moda, enxovais, emblemas, apliquÃªs e monogramas."
    ],
    "troubleshootingTips": [
      "Sempre realize um teste prÃ¡tico da matriz no mesmo tecido e com a mesma entretela antes de iniciar uma produÃ§Ã£o comercial."
    ],
    "relatedTerms": [
      "Digitalizador de Bordado",
      "DigitalizaÃ§Ã£o Manual",
      "DigitalizaÃ§Ã£o AutomÃ¡tica",
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
    "origin": "Do latim digitalis (numÃ©rico, expresso em dÃ­gitos computÃ¡veis) e do Ã¡rabe al-burdÄ� (bordado). No setor tÃªxtil, o termo substituiu a antiga expressÃ£o 'poncheamento' (do inglÃªs punching, perfurar cartÃµes) a partir dos anos 1980 com a popularizaÃ§Ã£o dos microcomputadores pessoais.",
    "beginnerExplanation": "DigitalizaÃ§Ã£o de bordado Ã© a mÃ¡gica de transformar um desenho de tela em instruÃ§Ãµes reais de costura! Ã‰ quando vocÃª decide onde a agulha vai entrar, qual o tipo de ponto (cheio, tatami, correndo), a inclinaÃ§Ã£o da linha e a ordem em que tudo serÃ¡ costurado.",
    "practicalExercise": "Pegue uma letra 'A' simples: no software de bordado, configure as pernas da letra em ponto cheio (Satin), o traÃ§o do meio em ponto cheio e adicione uma costura de base (underlay) central. Exporte para a mÃ¡quina e borde: vocÃª acabou de fazer sua primeira digitalizaÃ§Ã£o manual!",
    "quickSummary": "DigitalizaÃ§Ã£o de bordado Ã© o processo tÃ©cnico de converter projetos visuais em matrizes executÃ¡veis compostas por coordenadas e comandos de mÃ¡quina.",
    "bibliographicReferences": [
      "BLANCO, R. Manual de Ponchado y DigitalizaciÃ³n Textil. Madri: Ediciones TÃ©cnicas, 2021.",
      "WILCOM. Digitizing Fundamentals & Object Properties. Sydney: Wilcom International, 2023.",
      "ARTRELADOS. Fundamentos da DigitalizaÃ§Ã£o Profissional de Matrizes. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-009-digitalizacao-manual",
    "code": "D-009",
    "term": "DigitalizaÃ§Ã£o Manual",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e adjetivo.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "MÃ©todo em que o programador cria e ajusta deliberadamente cada objeto, parÃ¢metro e ponto da matriz.",
    "definition": "A digitalizaÃ§Ã£o manual Ã© o processo artesanal e tÃ©cnico no qual o programador cria e ajusta conscientemente cada um dos objetos, parÃ¢metros e trajetÃ³rias de uma matriz de bordado. O profissional decide a forma exata de cada elemento, o tipo de ponto, o Ã¢ngulo, a densidade, a ordem de execuÃ§Ã£o, os subpontos de suporte e as conexÃµes entre objetos.",
    "technicalDetails": "Oferece controle total sobre a topologia dos pontos, minimizando pontos de salto e cortes, permitindo otimizar a matriz para alta velocidade (acima de 900 PPM) com avesso impecÃ¡vel e mÃ¡xima estabilidade dimensional.",
    "construction": [
      "Desenho deliberado de nÃ³s e contornos",
      "Linhas de direÃ§Ã£o de ponto personalizadas",
      "Underlays projetados sob medida para o tecido",
      "Controle preciso de pontos de entrada e saÃ­da"
    ],
    "howItWorks": [
      "1. O digitalizador traÃ§a manualmente cada objeto com as ferramentas de curva e ponto.",
      "2. Aplica compensaÃ§Ãµes especÃ­ficas para a elasticidade e trama do tecido.",
      "3. Define a trajetÃ³ria contÃ­nua para evitar cortes excessivos de linha.",
      "4. Realiza a simulaÃ§Ã£o virtual e ajustes finos ponto a ponto."
    ],
    "mainTypes": [
      "DigitalizaÃ§Ã£o Manual Objeto a Objeto (PadrÃ£o profissional)",
      "DigitalizaÃ§Ã£o Ponto a Ponto (Para microdetalhes e monogramas de alta precisÃ£o)"
    ],
    "advantages": [
      "âœ” Qualidade estÃ©tica e tÃ©cnica incomparÃ¡vel no resultado final",
      "âœ” MÃ¡xima adaptaÃ§Ã£o ao tipo de tecido (malha, couro, toalha, seda)",
      "âœ” ReduÃ§Ã£o drÃ¡stica de pontos desnecessÃ¡rios e menor tempo de mÃ¡quina",
      "âœ” Avesso extremamente limpo com o menor nÃºmero possÃ­vel de cortes"
    ],
    "limitations": [
      "Exige tempo, estudo tÃ©cnico constante e prÃ¡tica aprofundada com softwares especializados."
    ],
    "commonErrors": [
      "â�Œ Criar objetos sem planejar previamente a sequÃªncia geral do desenho.",
      "â�Œ Inserir detalhes finos que nÃ£o funcionarÃ£o no tamanho fÃ­sico real do bordado.",
      "â�Œ NÃ£o revisar a matriz em modo de simulaÃ§Ã£o antes de enviar para a produÃ§Ã£o."
    ],
    "voceSabia": "Uma matriz digitalizada manualmente por um profissional experiente pode ter 30% menos pontos e bordar muito mais bonito e rÃ¡pido do que uma conversÃ£o automÃ¡tica cheia de nÃ³s e saltos!",
    "curiosidadeTecnica": "Na digitalizaÃ§Ã£o manual, o profissional pode aplicar a tÃ©cnica de 'caminho de viagem' (running stitch oculto sob preenchimentos futuros) para conectar objetos sem acionar o cortador de linha.",
    "dicaArtrelados": "Na digitalizaÃ§Ã£o manual, pense primeiro na estrutura e depois nos detalhes! Pergunte: Qual objeto comeÃ§a? Qual termina? O que ficarÃ¡ por cima? Onde a linha precisa parar? Essa visÃ£o reduz retrabalho e gera matrizes supereficientes.",
    "applications": [
      "Matrizes de alto padrÃ£o, logotipos corporativos rigorosos, brasÃµes e peÃ§as personalizadas de luxo."
    ],
    "troubleshootingTips": [
      "Se houver muitos cortes de linha, reposicione a saÃ­da de um objeto para ficar ao lado da entrada do prÃ³ximo objeto."
    ],
    "relatedTerms": [
      "DigitalizaÃ§Ã£o AutomÃ¡tica",
      "Digitalizador de Bordado",
      "SequÃªncia de Pontos",
      "Underlay",
      "CompensaÃ§Ã£o de PuxÃ£o"
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
    "origin": "Do latim digitalis (digital) e manualis (relativo Ã s mÃ£os, executado com perÃ­cia manual direta, de manus, mÃ£o). Representa o Ã¡pice da maestria artesanal transposta para o ambiente de software CAD tÃªxtil.",
    "beginnerExplanation": "DigitalizaÃ§Ã£o manual Ã© quando vocÃª, com sua prÃ³pria cabeÃ§a e mÃ£os no mouse, desenha objeto por objeto da matriz, decidindo cada Ã¢ngulo, cada costura de base e cada corte de linha. Ã‰ o que diferencia um bordado profissional impecÃ¡vel de um bordado amador e problemÃ¡tico.",
    "practicalExercise": "Escolha um desenho de flor com 3 folhas: digitalize manualmente folha por folha, planejando para que a mÃ¡quina termine a primeira folha exatamente no ponto onde comeÃ§a a segunda folha, usando uma costurinha escondida (caminho de viagem) para eliminar cortes de linha. Borde e cronometre a velocidade!",
    "quickSummary": "DigitalizaÃ§Ã£o manual Ã© o mÃ©todo de programaÃ§Ã£o em que cada objeto, Ã¢ngulo, underlay e parÃ¢metro Ã© deliberadamente projetado pelo profissional.",
    "bibliographicReferences": [
      "GARCIA, E. Advanced Embroidery Digitizing and Node Editing. Barcelona: Marcombo, 2022.",
      "TAJIMA. DGML by Pulse: Advanced Manual Stitch Manipulation. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. Maestria em DigitalizaÃ§Ã£o Manual e OtimizaÃ§Ã£o de Percurso. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-010-digitalizacao-automatica",
    "code": "D-010",
    "term": "DigitalizaÃ§Ã£o AutomÃ¡tica",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Softwares & Formatos",
    "summary": "Recurso de software que converte automaticamente imagens em objetos de bordado por meio de algoritmos.",
    "definition": "A digitalizaÃ§Ã£o automÃ¡tica Ã© o processo no qual o software de bordado interpreta uma imagem grÃ¡fica (bitmap ou vetor) e utiliza recursos automatizados para gerar objetos e caminhos de pontos sem a necessidade de o usuÃ¡rio desenhar cada elemento manualmente. O programa analisa Ã¡reas de cor, formas e contrastes e propÃµe uma estrutura de matriz pronta.",
    "technicalDetails": "Utiliza algoritmos de segmentaÃ§Ã£o de imagem e reconhecimento de contornos. Embora rÃ¡pida, a ferramenta nÃ£o possui discernimento sobre a tensÃ£o do tecido, elasticidade, espessura da linha ou a fÃ­sica do processo de costura.",
    "construction": [
      "MÃ³dulo de reduÃ§Ã£o e leitura cromÃ¡tica",
      "Gerador algorÃ­tmico de blocos de pontos",
      "AtribuiÃ§Ã£o padrÃ£o de underlay e densidade",
      "InserÃ§Ã£o automÃ¡tica de cortes entre cores"
    ],
    "howItWorks": [
      "1. A imagem Ã© carregada e o software identifica os blocos de cores.",
      "2. O algoritmo converte cada bloco em Ponto Cheio ou Tatami conforme a largura.",
      "3. SÃ£o inseridos pontos de entrada, saÃ­da e cortes genÃ©ricos.",
      "4. A matriz gerada exige revisÃ£o humana completa antes da execuÃ§Ã£o."
    ],
    "mainTypes": [
      "ConversÃ£o em 1 Clique (Auto-Digitize InstantÃ¢neo)",
      "Varinha MÃ¡gica / SeleÃ§Ã£o por Cor (Gera objetos a partir de cliques em Ã¡reas)",
      "AutodigitizaÃ§Ã£o com Assistente (Permite selecionar tecidos e paleta prÃ©via)"
    ],
    "advantages": [
      "âœ” Agilidade extrema para gerar esboÃ§os rÃ¡pidos e prÃ©vias para clientes",
      "âœ” Excelente ponto de partida para formas geomÃ©tricas simples e bem definidas",
      "âœ” Facilita o aprendizado inicial para quem estÃ¡ conhecendo o universo das matrizes"
    ],
    "limitations": [
      "Gera frequentemente excesso de cortes de linha, sequÃªncias ilÃ³gicas, falta de compensaÃ§Ã£o de repuxo e pontos curtos perigosos para a agulha."
    ],
    "commonErrors": [
      "â�Œ Enviar a matriz automÃ¡tica direto para a mÃ¡quina sem revisÃ£o tÃ©cnica.",
      "â�Œ Acreditar que o software compreende automaticamente o tipo de tecido.",
      "â�Œ Confundir uma simulaÃ§Ã£o bonita na tela com uma matriz tecnicamente viÃ¡vel."
    ],
    "voceSabia": "A digitalizaÃ§Ã£o automÃ¡tica pode economizar tempo inicial, mas se a imagem for complexa, o tempo gasto para corrigir os defeitos da conversÃ£o costuma ser maior do que digitalizar manualmente do zero!",
    "curiosidadeTecnica": "Imagens com degradÃªs suaves ou compressÃ£o JPG cheia de ruÃ­dos enganam o algoritmo automÃ¡tico, criando centenas de micro-objetos de 2 ou 3 pontos que travam a mÃ¡quina.",
    "dicaArtrelados": "Use a digitalizaÃ§Ã£o automÃ¡tica como ponto de partida, nunca como ponto final! Depois da conversÃ£o, faÃ§a uma revisÃ£o completa: confira sequÃªncia + pontos curtos + densidade + underlay + tamanho + tecido!",
    "applications": [
      "EsboÃ§os rÃ¡pidos, desenhos infantis simples com poucas cores e formas geomÃ©tricas puras."
    ],
    "troubleshootingTips": [
      "Use o filtro de 'Eliminar Pontos Curtos' (Short Stitches Filter) do software para apagar pontos menores que 0.8mm gerados pela conversÃ£o automÃ¡tica."
    ],
    "relatedTerms": [
      "DigitalizaÃ§Ã£o Manual",
      "Desenho Digitalizado",
      "VetorizaÃ§Ã£o",
      "SequÃªncia de Pontos"
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
    "origin": "Do latim digitalis e do grego automatos (que se move por si mesmo, espontÃ¢neo). Surgiu nos softwares de bordado nos anos 1990 com algoritmos de reconhecimento de formas e cores.",
    "beginnerExplanation": "DigitalizaÃ§Ã£o automÃ¡tica Ã© quando vocÃª aperta um botÃ£o no software e ele tenta transformar a imagem em bordado sozinho em um segundo. Ã‰ rÃ¡pida para quebrar um galho, mas quase sempre cria nÃ³s, corta a linha toda hora e nÃ£o entende se o tecido Ã© malha ou jeans.",
    "practicalExercise": "Use o recurso de 'Autodigitize' (conversÃ£o em 1 clique) em uma imagem com logotipo. Veja quantos cortes de linha o software gerou no simulador de pontos. Em seguida, tente bordar em um retalho: veja como a mÃ¡quina para muitas vezes e compare com uma matriz manual limpa.",
    "quickSummary": "DigitalizaÃ§Ã£o automÃ¡tica Ã© a conversÃ£o algorÃ­tmica de imagens em pontos pelo software, exigindo sempre revisÃ£o humana antes da produÃ§Ã£o.",
    "bibliographicReferences": [
      "BROTHER. PE-Design Auto-Digitizing Features and Limitations. Nagoya: Brother Industries, 2022.",
      "BERNINA. Embroidery Software 9 Designer Manual: Auto-Punch vs Manual. Steckborn, 2023.",
      "ARTRELADOS. Como Auditar e Corrigir Matrizes AutomÃ¡ticas. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-011-digitalizador-de-bordado",
    "code": "D-011",
    "term": "Digitalizador de Bordado",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "Substantivo masculino.",
    "category": "Terminologia Geral",
    "summary": "Profissional especializado em interpretar projetos visuais e transformÃ¡-los em matrizes de bordado executÃ¡veis.",
    "definition": "O digitalizador de bordado (tambÃ©m chamado de programador de matrizes ou ponchador) Ã© o profissional tÃ©cnico e criativo responsÃ¡vel por converter imagens, logotipos, ilustraÃ§Ãµes e conceitos visuais em arquivos de matriz de bordado eletrÃ´nico. Ele atua como o 'tradutor' entre o que os olhos humanos enxergam na tela e o que a mÃ¡quina de bordar consegue executar fisicamente com agulha e linha sobre o tecido.",
    "technicalDetails": "Domina a fÃ­sica tÃªxtil, o comportamento de traÃ§Ã£o e compressÃ£o das linhas, parÃ¢metros de software (Wilcom, Hatch, Embird, Wings, Tajima DGML) e as limitaÃ§Ãµes mecÃ¢nicas de mÃ¡quinas domÃ©sticas e industriais.",
    "construction": [
      "InterpretaÃ§Ã£o e tratamento do desenho grÃ¡fico",
      "Planejamento estrutural e sequÃªncia de execuÃ§Ã£o",
      "ConstruÃ§Ã£o geomÃ©trica de objetos e pontos",
      "Testes e validaÃ§Ã£o no tecido de aplicaÃ§Ã£o"
    ],
    "howItWorks": [
      "1. Interpreta a imagem e divide o motivo mentalmente em elementos individuais.",
      "2. Planeja a ordem de costura para evitar cortes e manter a estabilidade do tecido.",
      "3. ConstrÃ³i os objetos calibrando Ã¢ngulos, densidades, underlays e compensaÃ§Ãµes.",
      "4. Valida a matriz para garantir eficiÃªncia mecÃ¢nica e acabamento perfeito."
    ],
    "mainTypes": [
      "Digitalizador TÃ©cnico Corporativo (Especialista em logotipos e uniformes)",
      "Digitalizador ArtÃ­stico (Especialista em relevos 3D, retratos e texturas)",
      "Digitalizador de AteliÃª (CriaÃ§Ã£o de matrizes personalizadas para enxovais)"
    ],
    "advantages": [
      "âœ” Garante que o bordado final tenha qualidade profissional e alta durabilidade",
      "âœ” Otimiza a velocidade e reduz custos de tempo e materiais na mÃ¡quina",
      "âœ” Evita perdas de peÃ§as nobres por defeitos ou deformaÃ§Ãµes no tecido"
    ],
    "limitations": [
      "Depende de informaÃ§Ãµes claras sobre o tipo de tecido, bastidor e linha que serÃ£o utilizados no trabalho."
    ],
    "commonErrors": [
      "â�Œ Digitalizar uma matriz olhando apenas a estÃ©tica da tela sem pensar na fÃ­sica do tecido.",
      "â�Œ Adicionar pontos em excesso acreditando que quantidade define qualidade.",
      "â�Œ NÃ£o realizar testes prÃ¡ticos em tecidos novos ou projetos complexos."
    ],
    "voceSabia": "O termo clÃ¡ssico 'ponchador' vem da Ã©poca em que as matrizes de bordado eram gravadas em cartÃµes perfurados de papel (como o sistema Jacquard), onde cada furo acionava um movimento mecÃ¢nico!",
    "curiosidadeTecnica": "No DIBE, recomenda-se o uso de 'digitalizador de bordado' como termo mais especÃ­fico e moderno, evitando a ambiguidade da palavra 'programador', que no mercado contemporÃ¢neo remete a desenvolvedores de softwares e sistemas.",
    "dicaArtrelados": "NÃ£o avalie uma matriz apenas pela quantidade de pontos que ela possui. Avalie pela maneira como esses pontos foram planejados! A pergunta de ouro do digitalizador Ã©: 'Essa matriz foi construÃ­da pensando no tecido e na mÃ¡quina em que serÃ¡ bordada?'",
    "applications": [
      "EstÃºdios de bordado, confecÃ§Ãµes, birÃ´s de matrizes, ateliÃªs e indÃºstrias tÃªxteis."
    ],
    "troubleshootingTips": [
      "Mantenha um caderno ou mostruÃ¡rio com fotos e amostras bordadas de cada matriz testada para rÃ¡pida consulta de parÃ¢metros de sucesso."
    ],
    "relatedTerms": [
      "DigitalizaÃ§Ã£o de Bordado",
      "DigitalizaÃ§Ã£o Manual",
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
    "origin": "Derivado do latim digitalis com o sufixo de agente -or (aquele que realiza a aÃ§Ã£o). No vocabulÃ¡rio internacional de bordado, equivale aos termos digitizer (inglÃªs) e ponchador (espanhol).",
    "beginnerExplanation": "O digitalizador de bordado Ã© o profissional que cria as matrizes. Ele Ã© o 'arquiteto' do bordado: enquanto o desenhista cria a imagem bonita, o digitalizador sabe exatamente como a linha e a agulha vÃ£o se comportar no tecido para que a peÃ§a saia perfeita.",
    "practicalExercise": "FaÃ§a uma ficha tÃ©cnica de um bordado antes de sentar ao computador: anote o tecido que serÃ¡ usado (ex: toalha de banho felpuda), a entretela indicada (hidrossolÃºvel em cima + rasga-fÃ¡cil embaixo), a agulha (75/11) e a linha. Exercite pensar como um digitalizador profissional!",
    "quickSummary": "Digitalizador de bordado Ã© o profissional especializado em transformar criaÃ§Ãµes visuais em arquivos de matrizes tÃ©cnicas para mÃ¡quinas computadorizadas.",
    "bibliographicReferences": [
      "NNEP. National Network of Embroidery Professionals Guidebook. Canton: NNEP, 2022.",
      "STITCHES MAGAZINE. The Professional Digitizer: Skills and Market Demands. Atlanta, 2021.",
      "ARTRELADOS. A ProfissÃ£o de Digitalizador de Bordados no Brasil. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-012-direcao-do-ponto",
    "code": "D-012",
    "term": "DireÃ§Ã£o do Ponto",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos direÃ§Ã£o e ponto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "OrientaÃ§Ã£o e sentido angular em que os pontos sÃ£o posicionados dentro de determinado objeto da matriz.",
    "definition": "A direÃ§Ã£o do ponto indica o sentido ou a orientaÃ§Ã£o em que os pontos sÃ£o organizados para preencher ou formar uma determinada Ã¡rea do bordado. As passagens de linha podem ser dispostas horizontalmente, verticalmente, diagonalmente ou em Ã¢ngulos curvilÃ­neos. A direÃ§Ã£o escolhida interfere diretamente na aparÃªncia visual, no brilho da linha e no comportamento fÃ­sico do tecido.",
    "technicalDetails": "Definida em graus (0Â° a 360Â°) no software. A direÃ§Ã£o dos pontos determina o sentido do encolhimento do tecido (Pull) e da expansÃ£o perpendicular (Push). AlÃ©m disso, modifica a reflexÃ£o da luz na superfÃ­cie filamentar do fio de poliÃ©ster ou rayon.",
    "construction": [
      "Linha diretriz angular (Stitch Angle Line)",
      "Pontos de penetraÃ§Ã£o alinhados ao Ã¢ngulo",
      "VariaÃ§Ã£o angular em colunas curvas",
      "CompensaÃ§Ã£o ajustada conforme a direÃ§Ã£o"
    ],
    "howItWorks": [
      "1. O programador traÃ§a uma ou mais guias de Ã¢ngulo dentro da forma.",
      "2. A mÃ¡quina executa os pontos orientando as passagens paralelamente a essa diretriz.",
      "3. A luz incide sobre a linha refletindo o brilho conforme o Ã¢ngulo estabelecido.",
      "4. As forÃ§as de traÃ§Ã£o do fio atuam no tecido no mesmo sentido da direÃ§Ã£o do ponto."
    ],
    "mainTypes": [
      "DireÃ§Ã£o Horizontal (90Â° ou 270Â°)",
      "DireÃ§Ã£o Vertical (0Â° ou 180Â°)",
      "DireÃ§Ã£o Diagonal (geralmente 45Â° ou 135Â°)",
      "DireÃ§Ã£o Radial / AnatÃ´mica (acompanha contornos de pÃ©talas, folhas e curvas)"
    ],
    "advantages": [
      "âœ” Cria contrastes ricos, relevo e sensaÃ§Ã£o de volume sem trocar a cor da linha",
      "âœ” Acompanha as formas naturais do desenho (nervuras de folhas, pÃ©talas e penas)",
      "âœ” Permite equilibrar e neutralizar as forÃ§as de repuxamento sobre a trama do tecido"
    ],
    "limitations": [
      "DireÃ§Ãµes perfeitamente paralelas Ã s tramas do tecido tendem a afundar e sumir se nÃ£o houver underlay adequado."
    ],
    "commonErrors": [
      "â�Œ Usar a mesma direÃ§Ã£o em todos os objetos de um desenho, deixando o bordado plano e monÃ³tono.",
      "â�Œ Confundir direÃ§Ã£o do ponto com densidade (sÃ£o conceitos totalmente distintos).",
      "â�Œ Mudar de direÃ§Ã£o sem motivo tÃ©cnico ou estÃ©tico, criando um aspecto confuso."
    ],
    "voceSabia": "Duas Ã¡reas bordadas exatamente com o mesmo cone de linha e na mesma densidade parecerÃ£o ter cores diferentes se uma estiver a 45Â° e a outra a 135Â°, devido Ã  reflexÃ£o da luz na linha!",
    "curiosidadeTecnica": "DireÃ§Ã£o do ponto, direÃ§Ã£o de costura e direÃ§Ã£o do bordado sÃ£o conceitos distintos: direÃ§Ã£o do ponto Ã© a orientaÃ§Ã£o angular da linha; direÃ§Ã£o de costura Ã© o percurso da mÃ¡quina; direÃ§Ã£o do bordado Ã© a orientaÃ§Ã£o geral da composiÃ§Ã£o.",
    "dicaArtrelados": "NÃ£o pense na direÃ§Ã£o dos pontos apenas como 'horizontal ou vertical'. Pense nela como uma ferramenta para desenhar com linha! Ao observar uma matriz, pergunte: 'A direÃ§Ã£o dos pontos ajuda a mostrar a forma e o volume desse objeto?'",
    "applications": [
      "Preenchimentos de folhas, pÃ©talas, rostos, letras em Satin, brasÃµes e pelagens de animais."
    ],
    "troubleshootingTips": [
      "Se um cÃ­rculo bordado estiver virando um formato oval no tecido, incline a direÃ§Ã£o do preenchimento para 45Â° e reforce o underlay."
    ],
    "relatedTerms": [
      "DireÃ§Ã£o de Costura",
      "DireÃ§Ã£o do Bordado",
      "Ã‚ngulo do Ponto",
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
    "origin": "Do latim directio, -onis (aÃ§Ã£o de dirigir em linha reta, alinhamento), derivado de dirigere (guiar, endireitar), e de punctum (ponto).",
    "beginnerExplanation": "DireÃ§Ã£o do ponto Ã© a inclinaÃ§Ã£o da linha no bordado (horizontal, vertical ou inclinada). A linha de bordado Ã© brilhante: quando vocÃª muda a inclinaÃ§Ã£o dos pontos, a luz reflete de forma diferente e faz parecer que vocÃª usou dois tons de cores, alÃ©m de dar volume e relevo ao desenho!",
    "practicalExercise": "Crie dois retÃ¢ngulos iguais de 4cm x 2cm lado a lado usando a MESMA linha azul: no primeiro retÃ¢ngulo, coloque os pontos a 0Â° (horizontal); no segundo, coloque os pontos a 90Â° (vertical). Borde os dois no mesmo tecido: olhe a peÃ§a sob a luz da janela e veja a mÃ¡gica da reflexÃ£o da luz fazendo os retÃ¢ngulos parecerem de cores diferentes!",
    "quickSummary": "DireÃ§Ã£o do ponto Ã© a inclinaÃ§Ã£o angular das passagens de linha na matriz, responsÃ¡vel pela reflexÃ£o da luz, relevo e compensaÃ§Ã£o de traÃ§Ã£o no tecido.",
    "bibliographicReferences": [
      "MADEIRA. Light Reflection and Thread Sheen in Rayon & Polyester. Freiburg, 2021.",
      "WILCOM. Stitch Angles and Multi-Angle Object Mastery. Sydney: Wilcom, 2023.",
      "ARTRELADOS. O Poder do Brilho e DireÃ§Ã£o dos Pontos na ComposiÃ§Ã£o Visual. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-013-direcao-de-costura",
    "code": "D-013",
    "term": "DireÃ§Ã£o de Costura",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos direÃ§Ã£o e costura.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "Percurso e sentido de deslocamento que a mÃ¡quina segue para executar a sequÃªncia de pontos de um objeto.",
    "definition": "A direÃ§Ã£o de costura refere-se ao sentido ou percurso que a mÃ¡quina segue para executar uma sequÃªncia de pontos dentro de um determinado objeto da matriz. Enquanto a direÃ§Ã£o do ponto indica para onde as linhas estÃ£o inclinadas, a direÃ§Ã£o de costura indica o caminho de avanÃ§o da mÃ¡quina (por exemplo: bordando de baixo para cima, da esquerda para a direita, ou do centro para as bordas).",
    "technicalDetails": "EstÃ¡ diretamente ligada ao posicionamento dos pontos de entrada e saÃ­da do objeto e Ã  ordem de progressÃ£o do pantÃ³grafo. Uma boa direÃ§Ã£o de costura evita acÃºmulo de tecido e minimiza a necessidade de cortes e saltos longos.",
    "construction": [
      "Ponto inicial de entrada",
      "Vetor de progressÃ£o da costura",
      "Ponto final de saÃ­da",
      "Linhas de deslocamento interno"
    ],
    "howItWorks": [
      "1. A agulha inicia a costura no ponto de entrada definido.",
      "2. O pantÃ³grafo movimenta o bastidor fazendo os pontos avanÃ§arem no sentido programado.",
      "3. O objeto Ã© concluÃ­do no ponto de saÃ­da mais prÃ³ximo do prÃ³ximo elemento."
    ],
    "mainTypes": [
      "Costura Linear Unidirecional (Da base ao topo ou de uma ponta Ã  outra)",
      "Costura do Centro para as Bordas (Ideal para bonÃ©s e grandes Ã¡reas circulares)",
      "Costura ContÃ­nua / Encadeada (Conecta vÃ¡rios objetos sem cortes)"
    ],
    "advantages": [
      "âœ” Reduz movimentos desnecessÃ¡rios do bastidor e encurta o tempo de mÃ¡quina",
      "âœ” Evita pontos de salto longos e cortes excessivos de linha",
      "âœ” Impede o empurramento contÃ­nuo do tecido para um Ãºnico lado (evitando bolhas)"
    ],
    "limitations": [
      "Em formas curvas complexas, requer planejamento cuidadoso para que a costura nÃ£o cruze sobre pontos recÃ©m-formados."
    ],
    "commonErrors": [
      "â�Œ Planejar a costura terminando em uma ponta distante do inÃ­cio do prÃ³ximo objeto.",
      "â�Œ Fazer a mÃ¡quina ziguezaguear pelo bastidor gerando dezenas de cortes desnecessÃ¡rios.",
      "â�Œ Ignorar o sentido de empurramento do tecido ao bordar Ã¡reas contÃ­guas."
    ],
    "voceSabia": "Em bonÃ©s estruturados, a direÃ§Ã£o de costura obrigatÃ³ria Ã© sempre do CENTRO PARA AS LATERAIS e de BAIXO PARA CIMA, para expulsar as dobras do tecido em direÃ§Ã£o Ã s bordas!",
    "curiosidadeTecnica": "A mÃ¡quina de bordar Ã© um sistema de coordenadas espaciais: a direÃ§Ã£o de costura organiza a cinemÃ¡tica do bastidor para que ele execute o caminho mais harmÃ´nico e fluido possÃ­vel.",
    "dicaArtrelados": "Quando olhar uma matriz, nÃ£o enxergue somente o desenho parado. Tente enxergar o caminho que a mÃ¡quina farÃ¡ para construÃ­-lo! Pergunte: 'Se eu fosse a mÃ¡quina, qual seria o caminho mais lÃ³gico e rÃ¡pido para bordar isso?'",
    "applications": [
      "Sequenciamento de letras cursivas, preenchimento de brasÃµes, bordado em bonÃ©s e monogramas."
    ],
    "troubleshootingTips": [
      "Se o tecido estiver formando uma onda ou dobra no final do preenchimento, altere a direÃ§Ã£o de costura para comeÃ§ar do centro em direÃ§Ã£o Ã s bordas."
    ],
    "relatedTerms": [
      "DireÃ§Ã£o do Ponto",
      "SequÃªncia de Pontos",
      "Ponto de Entrada",
      "Ponto de SaÃ­da",
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
    "origin": "Do latim directio (direÃ§Ã£o) e do latim vulgar consutura (ato de coser, costura junta, de consuere). Diferencia-se de direÃ§Ã£o do ponto por descrever o vetor de deslocamento cinemÃ¡tico do pantÃ³grafo.",
    "beginnerExplanation": "DireÃ§Ã£o de costura Ã© o caminho que a mÃ¡quina faz ao costurar um objeto: se ela comeÃ§a de baixo e sobe, se vai da esquerda para a direita, ou se vai do centro para fora. Planejar bem esse caminho faz a mÃ¡quina bordar mais rÃ¡pido, sem ficar cortando linha Ã  toa e sem empurrar o tecido para um lado sÃ³.",
    "practicalExercise": "Borde um desenho de cÃ­rculo preenchido em Tatami: primeiro comeÃ§ando pela borda esquerda e terminando na borda direita. Em seguida, borde outro cÃ­rculo idÃªntico comeÃ§ando do CENTRO para as bordas. Compare como o segundo cÃ­rculo mantÃ©m o tecido perfeitamente plano e sem formar pregas na borda.",
    "quickSummary": "DireÃ§Ã£o de costura Ã© o trajeto e sentido de avanÃ§o percorrido pela mÃ¡quina durante a construÃ§Ã£o dos pontos de um elemento da matriz.",
    "bibliographicReferences": [
      "BARUDAN. Pantograph Movement and Sewing Path Efficiency. Tokyo: Barudan Co., 2021.",
      "KRAUSZ, P. Digitizing Mechanics: Sewing Direction & Fabric Push. New York, 2020.",
      "ARTRELADOS. Rotas de Costura e ReduÃ§Ã£o de Tempo de MÃ¡quina. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-014-direcao-do-bordado",
    "code": "D-014",
    "term": "DireÃ§Ã£o do Bordado",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos direÃ§Ã£o e bordado.",
    "category": "Design & CriaÃ§Ã£o",
    "summary": "OrientaÃ§Ã£o geral e composiÃ§Ã£o visual adotada na disposiÃ§Ã£o harmÃ´nica de todos os elementos da matriz.",
    "definition": "A direÃ§Ã£o do bordado Ã© a orientaÃ§Ã£o geral e estratÃ©gica adotada na construÃ§Ã£o visual e estrutural do conjunto de elementos que compÃµem um bordado. Ã‰ um conceito mais amplo do que a direÃ§Ã£o de um ponto individual ou o percurso de uma costura: envolve a harmonia estÃ©tica, o dinamismo das linhas, a separaÃ§Ã£o de planos, o contraste visual e a relaÃ§Ã£o espacial do desenho com o bastidor e a peÃ§a de roupa.",
    "technicalDetails": "Abrange a composiÃ§Ã£o integrada de mÃºltiplos objetos (pÃ©talas, folhas, caules, fundos, letras), combinando direÃ§Ãµes complementares para conferir tridimensionalidade, brilho direcionado e estabilidade fÃ­sica ao bordado.",
    "construction": [
      "Mapeamento de eixos visuais da composiÃ§Ã£o",
      "DistribuiÃ§Ã£o de Ã¢ngulos contrastantes entre planos",
      "Alinhamento em relaÃ§Ã£o ao fio reto do tecido e do bastidor",
      "Harmonia entre elementos principais e secundÃ¡rios"
    ],
    "howItWorks": [
      "1. O designer/digitalizador estuda a composiÃ§Ã£o visual global do motivo.",
      "2. Atribui orientaÃ§Ãµes especÃ­ficas para cada famÃ­lia de elementos (ex: pÃ©talas radiais, folhas longitudinais).",
      "3. O conjunto cria ilusÃ£o de volume, movimento e profundidade ao refletir a luz natural."
    ],
    "mainTypes": [
      "DireÃ§Ã£o OrgÃ¢nica / Naturalista (Acompanha a anatomia de flores, animais e pessoas)",
      "DireÃ§Ã£o GeomÃ©trica / TÃ©cnica (Alinhada a eixos rÃ­gidos em logotipos e emblemas)",
      "DireÃ§Ã£o Texturizada (MÃºltiplas orientaÃ§Ãµes para simular tecidos e relevos)"
    ],
    "advantages": [
      "âœ” Confere riqueza estÃ©tica de alto padrÃ£o e visual de alta costura",
      "âœ” Separa visualmente diferentes partes do desenho mesmo com a mesma cor de linha",
      "âœ” Cria sensaÃ§Ã£o de movimento e vida sem necessidade de matrizes pesadas"
    ],
    "limitations": [
      "O excesso de direÃ§Ãµes desordenadas em uma Ãºnica matriz pode gerar poluiÃ§Ã£o visual e perda de harmonia."
    ],
    "commonErrors": [
      "â�Œ Usar a mesma direÃ§Ã£o em tudo, deixando o desenho chapado e sem vida.",
      "â�Œ Mudar direÃ§Ãµes aleatoriamente sem critÃ©rio estÃ©tico ou funcional.",
      "â�Œ Avaliar a direÃ§Ã£o apenas no monitor sem verificar a incidÃªncia real de luz no tecido."
    ],
    "voceSabia": "No bordado computadorizado de alta costura, a direÃ§Ã£o dos pontos funciona exatamente como as pinceladas de uma pintura clÃ¡ssica: o artista direciona a pincelada para transmitir textura, sombra e emoÃ§Ã£o!",
    "curiosidadeTecnica": "A tabela de orientaÃ§Ã£o clÃ¡ssica do DIBE sugere: Folhas = direÃ§Ã£o longitudinal; PÃ©talas = acompanhando a curvatura; Caules = sentido do eixo; Letras = ditadas pela anatomia da tipografia; Fundo = diagonal a 45Â°.",
    "dicaArtrelados": "Olhe para cada objeto do desenho e pergunte: 'Se eu estivesse desenhando essa forma com um lÃ¡pis, para onde naturalmente faria meus traÃ§os?' Essa pergunta simples Ã© a melhor bÃºssola para definir a direÃ§Ã£o perfeita do bordado!",
    "applications": [
      "Bordados florais, animais, monogramas finos, moda festa e brasÃµes herÃ¡ldicos."
    ],
    "troubleshootingTips": [
      "Se um bordado monocromÃ¡tico (de uma sÃ³ cor) estiver parecendo um 'bloco plano', varie as direÃ§Ãµes dos objetos para criar relevo com a luz."
    ],
    "relatedTerms": [
      "DireÃ§Ã£o do Ponto",
      "DireÃ§Ã£o de Costura",
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
    "origin": "Do latim directio (alinhamento, sentido) e do Ã¡rabe al-burdÄ� (bordado). No planejamento de ateliÃª, refere-se Ã  orientaÃ§Ã£o espacial e ergonÃ´mica da peÃ§a no bastidor em relaÃ§Ã£o ao operador da mÃ¡quina.",
    "beginnerExplanation": "DireÃ§Ã£o do bordado Ã© a orientaÃ§Ã£o geral do desenho no bastidor (se o desenho vai ficar em pÃ©, de cabeÃ§a para baixo ou deitado de lado). Girar a matriz no Ã¢ngulo certo antes de colocar no bastidor facilita na hora de encaixar camisetas polo, bolsos ou toalhas sem estragar a peÃ§a.",
    "practicalExercise": "Pegue uma toalha de lavabo com barra de etamine ou tecido plano. No painel da sua mÃ¡quina, gire a matriz em 90Â° e 180Â° e observe como o bastidor se posiciona em relaÃ§Ã£o ao corpo da mÃ¡quina. Escolha a orientaÃ§Ã£o que permita ao volume restante da toalha ficar solto para fora da mÃ¡quina, sem ficar embolado no braÃ§o livre.",
    "quickSummary": "DireÃ§Ã£o do bordado Ã© a orientaÃ§Ã£o espacial do desenho no bastidor e no espaÃ§o de trabalho da mÃ¡quina para facilitar o manuseio e a estÃ©tica da peÃ§a.",
    "bibliographicReferences": [
      "TAJIMA. Hooping Orientation and Garment Clamping Guide. Nagoya, 2022.",
      "BROTHER. Embroidery Orientation & Hoop Alignment Manual. Nagoya, 2023.",
      "ARTRELADOS. Posicionamento EstratÃ©gico de PeÃ§as no Bastidor. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-015-deslocamento-da-matriz",
    "code": "D-015",
    "term": "Deslocamento da Matriz",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos deslocamento e matriz.",
    "category": "OperaÃ§Ã£o da MÃ¡quina",
    "summary": "AlteraÃ§Ã£o da posiÃ§Ã£o espacial do desenho dentro da Ã¡rea de trabalho do software ou no painel da mÃ¡quina sem modificar suas dimensÃµes.",
    "definition": "O deslocamento da matriz corresponde Ã  alteraÃ§Ã£o da posiÃ§Ã£o do desenho ou de seus elementos dentro da Ã¡rea de trabalho do software ou na Ã¡rea Ãºtil do bastidor na mÃ¡quina de bordar. Em termos simples, Ã© mover o bordado de um lugar para outro (para cima, para baixo, para a esquerda ou para a direita) mantendo inalterados seu tamanho original, sua sequÃªncia e sua quantidade de pontos.",
    "technicalDetails": "Opera nos eixos cartesianos X e Y. Deslocar Ã© diferente de redimensionar (que muda a escala) e de girar (que muda o Ã¢ngulo). Deve respeitar rigorosamente os limites da Ã¡rea Ãºtil do bastidor.",
    "construction": [
      "Coordenadas cartesianas X e Y",
      "Ponto central da matriz (centro de origem)",
      "Ã�rea Ãºtil delimitada do bastidor",
      "Margem de seguranÃ§a perifÃ©rica"
    ],
    "howItWorks": [
      "1. O operador seleciona a matriz no software ou no painel touchscreen da mÃ¡quina.",
      "2. Utiliza as setas direcionais ou insere coordenadas milimÃ©tricas.",
      "3. O desenho Ã© reposicionado na Ã¡rea desejada para alinhar com a peÃ§a real.",
      "4. A mÃ¡quina atualiza o ponto de partida do pantÃ³grafo."
    ],
    "mainTypes": [
      "Deslocamento no Software (PreparaÃ§Ã£o prÃ©via do arquivo)",
      "Deslocamento no Painel da MÃ¡quina (Ajuste fino antes de iniciar o bordado)",
      "Deslocamento por Coordenadas NumÃ©ricas (PrecisÃ£o milimÃ©trica)"
    ],
    "advantages": [
      "âœ” Permite centralizar ou posicionar o bordado exatamente no local desejado da peÃ§a",
      "âœ” Facilita o alinhamento em bolsos, golas, toalhas e faixas estreitas",
      "âœ” Evita ter que rebastidorar a peÃ§a para corrigir pequenos desvios de posiÃ§Ã£o"
    ],
    "limitations": [
      "Deslocar a matriz alÃ©m da margem de seguranÃ§a pode fazer o bastidor colidir mecanicamente com o cabeÃ§ote ou barra da agulha."
    ],
    "commonErrors": [
      "â�Œ Mover a matriz para muito perto da borda do bastidor sem checar a Ã¡rea Ãºtil real.",
      "â�Œ Confundir deslocamento (mover) com redimensionamento (mudar tamanho).",
      "â�Œ Centralizar na tela do software sem considerar a posiÃ§Ã£o fÃ­sica onde a peÃ§a precisa ser bordada."
    ],
    "voceSabia": "Todas as mÃ¡quinas possuem um sensor de fim de curso: se vocÃª deslocar a matriz para fora do limite permitido, a mÃ¡quina travarÃ¡ e exibirÃ¡ um aviso sonoro de erro de bastidor antes de comeÃ§ar!",
    "curiosidadeTecnica": "Ao deslocar uma matriz no painel, a mÃ¡quina altera apenas o offset das coordenadas iniciais do arquivo, sem modificar os vetores de distÃ¢ncia relativa entre os pontos.",
    "dicaArtrelados": "Antes de clicar em 'Iniciar', olhe para a matriz e imagine onde ela realmente ficarÃ¡ no tecido. NÃ£o pense apenas: 'EstÃ¡ no centro da tela?' Pergunte: 'EstÃ¡ no lugar exato da peÃ§a que estou bordando?' Essa pequena diferenÃ§a evita peÃ§as perdidas!",
    "applications": [
      "Posicionamento em bolsos de camisa, barras de toalhas, golas e personalizaÃ§Ãµes milimÃ©tricas."
    ],
    "troubleshootingTips": [
      "Use a funÃ§Ã£o de 'TraÃ§ar / Trace / Borda' no painel da mÃ¡quina para fazer a agulha contornar a Ã¡rea do bordado sem costurar, confirmando o posicionamento."
    ],
    "relatedTerms": [
      "Deslocamento de Bastidor",
      "Ã�rea Ãštil do Bastidor",
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
    "origin": "Do latim dislocare (tirar do lugar, mover de uma posiÃ§Ã£o para outra, de dis- + locus, lugar) e do latim matrix, -icis (Ãºtero, molde gerador, matriz).",
    "beginnerExplanation": "Deslocamento da matriz Ã© a capacidade de mover o desenho para a esquerda, direita, cima ou baixo na tela da mÃ¡quina de bordar. Isso serve para centralizar perfeitamente o bordado no local exato onde vocÃª marcou o tecido com a canetinha apagÃ¡vel.",
    "practicalExercise": "Coloque um tecido no bastidor e marque uma cruz com canetinha fantasminha (que apaga com calor). Encaixe o bastidor na mÃ¡quina, acione a luz de posicionamento LED ou a tecla de tracejado/ponteiro e use as setas do painel para mover a matriz atÃ© que o centro do desenho bata exatamente no cruzamento da sua marcaÃ§Ã£o.",
    "quickSummary": "Deslocamento da matriz Ã© a movimentaÃ§Ã£o das coordenadas centrais do desenho no painel da mÃ¡quina para alinhamento preciso na peÃ§a.",
    "bibliographicReferences": [
      "JANOME. Machine Screen Coordinate System & Design Movement. Tokyo, 2022.",
      "SINGER. EM9305 Embroidery Centering and Positioning Manual. LaVergne, 2021.",
      "ARTRELADOS. Alinhamento a Laser e CentralizaÃ§Ã£o Perfeita de Bordados. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-016-deslocamento-de-bastidor",
    "code": "D-016",
    "term": "Deslocamento de Bastidor",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos deslocamento e bastidor.",
    "category": "Componentes da MÃ¡quina",
    "summary": "Movimento mecÃ¢nico sincronizado realizado pelo pantÃ³grafo para posicionar o tecido sob a agulha a cada ponto.",
    "definition": "O deslocamento de bastidor Ã© o movimento mecÃ¢nico coordenado realizado pelo sistema do carro (pantÃ³grafo) que sustenta o bastidor e o tecido durante a execuÃ§Ã£o do bordado. Na mÃ¡quina de bordar, a agulha move-se apenas na vertical (eixo Z); Ã© o bastidor que se movimenta nos eixos horizontal (X) e vertical (Y) entre uma penetraÃ§Ã£o de agulha e outra para formar o desenho.",
    "technicalDetails": "Movimentado por motores de passo de alta precisÃ£o ou servomotores acoplados a correias dentadas e fusos de esferas, operando em sincronia milimÃ©trica com a rotaÃ§Ã£o do eixo principal a atÃ© 1.200 rotaÃ§Ãµes por minuto.",
    "construction": [
      "BraÃ§o de fixaÃ§Ã£o do bastidor",
      "Motores de passo dos eixos X e Y",
      "Correias sincronizadoras e guias lineares",
      "Sensores Ã³pticos de fim de curso"
    ],
    "howItWorks": [
      "1. A agulha sobe e sai completamente do tecido.",
      "2. O pantÃ³grafo desloca o bastidor com extrema rapidez para a coordenada do prÃ³ximo ponto.",
      "3. O bastidor para imÃ³vel exatamente na posiÃ§Ã£o milimÃ©trica.",
      "4. A agulha desce e realiza a nova perfuraÃ§Ã£o, repetindo o ciclo milhares de vezes."
    ],
    "mainTypes": [
      "Deslocamento Passo a Passo (FormaÃ§Ã£o de pontos normais)",
      "Deslocamento RÃ¡pido / Salto (Movimento amplo entre objetos sem costura)",
      "Deslocamento de Troca de Bastidor (Recuo automÃ¡tico para colocar e retirar a peÃ§a)"
    ],
    "advantages": [
      "âœ” PrecisÃ£o matemÃ¡tica na formaÃ§Ã£o de curvas e linhas perfeitas",
      "âœ” Repetibilidade idÃªntica em produÃ§Ãµes industriais de milhares de peÃ§as",
      "âœ” Agilidade e suavidade de movimentaÃ§Ã£o com baixo nÃ­vel de ruÃ­do"
    ],
    "limitations": [
      "ObstruÃ§Ãµes fÃ­sicas no trajeto do bastidor (como tecidos pesados caÃ­dos na mesa ou esbarrÃµes) causam perda de passos nos motores e desalinhamento permanente do bordado."
    ],
    "commonErrors": [
      "â�Œ Deixar o tecido pendurado da mesa pesando sobre o bastidor durante o movimento.",
      "â�Œ Esbarrar no bastidor ou na mesa da mÃ¡quina enquanto ela estiver bordando.",
      "â�Œ NÃ£o lubrificar as guias e trilhos lineares do pantÃ³grafo periodicamente."
    ],
    "voceSabia": "Enquanto a agulha sobe e desce, o bastidor tem uma janela de tempo de menos de 30 milÃ©simos de segundo para acelerar, mover-se e parar perfeitamente imÃ³vel antes da agulha tocar o tecido novamente!",
    "curiosidadeTecnica": "Pense na mÃ¡quina de bordar como alguÃ©m desenhando com um lÃ¡pis fixo em um ponto enquanto movimenta rapidamente a folha de papel por baixo: agulha fixa + movimento do bastidor = construÃ§Ã£o do bordado.",
    "dicaArtrelados": "Observe sua mÃ¡quina enquanto ela borda: o bastidor estÃ¡ fazendo um verdadeiro desenho no espaÃ§o! Aprender a escutar o som suave do pantÃ³grafo ajuda a identificar imediatamente qualquer travamento mecÃ¢nico ou folga antes que a peÃ§a seja danificada.",
    "applications": [
      "Mecanismo universal de movimentaÃ§Ã£o em todas as mÃ¡quinas de bordar computadorizadas."
    ],
    "troubleshootingTips": [
      "Se o bordado 'deslocar' de repente para o lado no meio do trabalho, verifique se o bastidor nÃ£o bateu em algo ou se a correia do eixo X/Y nÃ£o estÃ¡ frouxa."
    ],
    "relatedTerms": [
      "Carro da MÃ¡quina de Bordado",
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
    "origin": "Do latim dislocare (mover de lugar) e do germÃ¢nico bast (fibra de casca de Ã¡rvore utilizada para confeccionar aros de suporte e tecelagem). No bordado mecÃ¢nico, descreve o deslocamento dos eixos X e Y do pantÃ³grafo.",
    "beginnerExplanation": "Deslocamento de bastidor Ã© o movimento fÃ­sico que o bastidor faz para lÃ¡ e para cÃ¡ enquanto a mÃ¡quina costura. Os motores da mÃ¡quina movem o bastidor milimetricamente a cada ponto para que a agulha perfure no lugar exato do desenho.",
    "practicalExercise": "Coloque a mÃ¡quina para rodar sem agulha e sem linha (ou em modo de simulaÃ§Ã£o/teste) e observe como o braÃ§o do pantÃ³grafo se move em passos suaves. Repare que se houver algum obstÃ¡culo encostando no bastidor (como uma tesoura na mesa ou a dobra da toalha presa), o bastidor baterÃ¡ e perderÃ¡ a posiÃ§Ã£o!",
    "quickSummary": "Deslocamento de bastidor Ã© a movimentaÃ§Ã£o eletromecÃ¢nica dos eixos X e Y do pantÃ³grafo que posiciona o tecido sob a agulha a cada ponto.",
    "bibliographicReferences": [
      "BARUDAN. Servo Motors & Pantograph Motion Mechanics. Tokyo, 2022.",
      "HAPPY JAPAN. HCD2 Series Multi-Needle Mechanics Manual. Yamagata, 2023.",
      "ARTRELADOS. ManutenÃ§Ã£o e Cuidados com o Sistema de PantÃ³grafo. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-017-deslocamento-de-ponto",
    "code": "D-017",
    "term": "Deslocamento de Ponto",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos deslocamento e ponto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "AlteraÃ§Ã£o da posiÃ§Ã£o individual ou em bloco de pontos dentro da estrutura da matriz durante a ediÃ§Ã£o.",
    "definition": "O deslocamento de ponto refere-se Ã  mudanÃ§a manual ou paramÃ©trica da posiÃ§Ã£o de um ponto especÃ­fico ou de uma sequÃªncia de pontos dentro da estrutura da matriz de bordado. Em softwares de ediÃ§Ã£o, esse recurso Ã© utilizado para realizar correÃ§Ãµes pontuais, ajustar encaixes milimÃ©tricos, corrigir falhas de uniÃ£o ou reposicionar pontos de entrada e saÃ­da.",
    "technicalDetails": "Realizado no modo de ediÃ§Ã£o de nÃ³s ou ediÃ§Ã£o de pontos individuais (Stitch Edit Mode), permitindo arrastar coordenadas pontuais sem alterar a lÃ³gica global do objeto vetorial circundante.",
    "construction": [
      "Coordenada pontual individual (nÃ³ de ponto)",
      "Vetor de ligaÃ§Ã£o com o ponto anterior e posterior",
      "Comprimento recalculado do segmento",
      "Ajuste da densidade localizada"
    ],
    "howItWorks": [
      "1. O programador seleciona a ferramenta de ediÃ§Ã£o de pontos no software.",
      "2. Clica sobre o ponto que necessita de correÃ§Ã£o e o arrasta para a nova posiÃ§Ã£o.",
      "3. O software atualiza a coordenada e recalcula a distÃ¢ncia com os pontos vizinhos.",
      "4. A uniÃ£o entre os objetos torna-se limpa e sem frestas."
    ],
    "mainTypes": [
      "Deslocamento Individual (Ponto a ponto para consertos cirÃºrgicos)",
      "Deslocamento em Bloco (Mover um grupo de pontos selecionados)",
      "Deslocamento de Ponto de Parada / Troca de Cor"
    ],
    "advantages": [
      "âœ” Permite corrigir pequenas falhas de encaixe sem precisar redigitalizar todo o desenho",
      "âœ” Facilita o ajuste de pontos isolados que escaparam da Ã¡rea do contorno",
      "âœ” Otimiza a conexÃ£o suave entre dois objetos vizinhos"
    ],
    "limitations": [
      "Arrastar pontos aleatoriamente pode criar segmentos excessivamente longos (que afrouxam) ou curtos demais (que quebram a linha)."
    ],
    "commonErrors": [
      "â�Œ Deslocar pontos de uma matriz pronta sem entender a funÃ§Ã£o original deles no desenho.",
      "â�Œ Criar distÃ¢ncias maiores que 7mm entre pontos simples sem usar ponto de arremate.",
      "â�Œ Deixar pontos acumulados no mesmo lugar gerando nÃ³s indesejados."
    ],
    "voceSabia": "Muitos pontos que parecem 'fora do lugar' na tela do computador foram colocados propositalmente pelo programador experiente para compensar a traÃ§Ã£o que o tecido sofrerÃ¡ durante o bordado!",
    "curiosidadeTecnica": "A ediÃ§Ã£o e deslocamento direto de pontos em arquivos prontos (como .DST ou .PES) altera os comandos brutos de mÃ¡quina sem suporte aos objetos vetoriais inteligentes.",
    "dicaArtrelados": "NÃ£o corrija uma matriz simplesmente porque um ponto parece 'fora do lugar' na tela! Primeiro descubra por que ele estÃ¡ naquela posiÃ§Ã£o. Muitas vezes, aquilo que parece um errinho na tela Ã© o segredo que mantÃ©m o bordado perfeito no tecido real.",
    "applications": [
      "Refinamento de matrizes prontas, correÃ§Ã£o de monogramas e ajuste fino de contornos."
    ],
    "troubleshootingTips": [
      "Ao deslocar um ponto, confira se o comprimento da linha entre os pontos vizinhos permanece entre 1.0mm e 6.0mm."
    ],
    "relatedTerms": [
      "CorreÃ§Ã£o de Pontos",
      "Comprimento do Ponto",
      "DireÃ§Ã£o do Ponto",
      "SequÃªncia de Pontos"
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
    "origin": "Do latim dislocare (mover do lugar) e de punctum (ponto perfurado). Refere-se Ã  imperfeiÃ§Ã£o onde a penetraÃ§Ã£o da agulha ocorre fora da coordenada originalmente programada.",
    "beginnerExplanation": "Deslocamento de ponto Ã© quando o ponto cai fora do lugar certo no tecido. O contorno preto sai do desenho, as folhas nÃ£o encostam na flor ou as letras ficam tortas. Quase sempre a culpa Ã© do tecido que esticou ou da entretela que estava frouxa no bastidor!",
    "practicalExercise": "Borde um cÃ­rculo com contorno preto fino em uma malha elÃ¡stica de camiseta: na primeira tentativa, use apenas uma entretela rasga-fÃ¡cil fina colocada frouxa no bastidor. Na segunda tentativa, use entretela de malha colada ou recorta-fÃ¡cil bem firme e esticada como um tambor. Compare e veja como na primeira o contorno sai torto (ponto deslocado) e na segunda fica perfeito.",
    "quickSummary": "Deslocamento de ponto Ã© o desvio mecÃ¢nico ou estrutural da penetraÃ§Ã£o da agulha em relaÃ§Ã£o Ã  matriz, causado por instabilidade do tecido ou folga no bastidor.",
    "bibliographicReferences": [
      "KRAUSZ, P. Troubleshooting Stitch Registration & Fabric Shift. New York: Textile Press, 2021.",
      "MADEIRA. Embroidery Quality Audit: Overcoming Stitch Misalignment. Freiburg, 2023.",
      "ARTRELADOS. Como Eliminar Desalinhamento de Contornos no Bordado. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-018-deslocamento-de-linha",
    "code": "D-018",
    "term": "Deslocamento de Linha",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos deslocamento e linha.",
    "category": "Agulhas & Fios",
    "summary": "TrajetÃ³ria e percurso contÃ­nuo percorrido pela linha de bordado desde a alimentaÃ§Ã£o atÃ© a fixaÃ§Ã£o no tecido.",
    "definition": "No contexto do bordado eletrÃ´nico, deslocamento de linha descreve o movimento, a trajetÃ³ria e o percurso realizado pelo fio durante a execuÃ§Ã£o da matriz. A linha nÃ£o permanece estÃ¡tica: ela Ã© tracionada a partir do cone, atravessa guias e tensionadores, sobe e desce pela barra de agulha, percorre saltos entre objetos e Ã© ancorada no tecido pelos pontos.",
    "technicalDetails": "Envolve a dinÃ¢mica do fio sob tensÃ£o constante (110g a 130g na linha superior) em alta velocidade. O planejamento de trajetÃ³rias curtas e organizadas na matriz reduz o consumo de linha e o tempo de execuÃ§Ã£o.",
    "construction": [
      "Trajeto da linha no cabeÃ§ote e guias",
      "Linha de salto entre objetos (jump stitch)",
      "Conectores ocultos (travel runs)",
      "Ponto de corte e ancoragem de arremate"
    ],
    "howItWorks": [
      "1. A linha Ã© alimentada suavemente pelo cone.",
      "2. Acompanha os deslocamentos espaciais do bastidor e da agulha.",
      "3. Forma os pontos de costura ou conecta Ã¡reas vizinhas.",
      "4. Ã‰ seccionada pelo cortador automÃ¡tico de linha quando necessÃ¡rio."
    ],
    "mainTypes": [
      "Deslocamento com Costura (FormaÃ§Ã£o ativa de pontos)",
      "Deslocamento sem Costura / Salto (Linha conduzida pelo ar)",
      "Deslocamento Embutido / Oculto (Costura corrida sob Ã¡reas a serem cobertas)"
    ],
    "advantages": [
      "âœ” Um percurso eficiente reduz o tempo total de produÃ§Ã£o e o desgaste da mÃ¡quina",
      "âœ” Minimiza fiapos e linhas soltas na frente e no avesso do bordado",
      "âœ” Otimiza o consumo de cones de linha e reduz custos operacionais"
    ],
    "limitations": [
      "Deslocamentos longos sem corte deixam fios esticados sobre o tecido que exigem limpeza manual posterior."
    ],
    "commonErrors": [
      "â�Œ Confundir deslocamento de linha com troca de cor ou regulagem de tensÃ£o.",
      "â�Œ Permitir que a linha faÃ§a trajetos cruzados sobre Ã¡reas abertas que ficarÃ£o visÃ­veis na peÃ§a.",
      "â�Œ Ignorar o consumo extra de linha provocado por matrizes mal sequenciadas."
    ],
    "voceSabia": "Uma matriz aparentemente pequena de 5.000 pontos com percursos desorganizados pode consumir mais metros de linha do que uma matriz bem sequenciada de 8.000 pontos!",
    "curiosidadeTecnica": "O cÃ¡lculo mÃ©trico exato do consumo de linha em softwares profissionais considera todos os deslocamentos superiores somados Ã  proporÃ§Ã£o de 30% a 35% de linha de bobina no verso.",
    "dicaArtrelados": "Quando pensar no custo de uma matriz, nÃ£o olhe apenas para o tamanho do desenho! Pense tambÃ©m no caminho que a linha precisarÃ¡ percorrer. Esse raciocÃ­nio Ã© fundamental para quem deseja calcular com precisÃ£o o custo real do bordado.",
    "applications": [
      "CÃ¡lculo de consumo de linha, orÃ§amentos, planejamento de produÃ§Ã£o e sequenciamento."
    ],
    "troubleshootingTips": [
      "Se ficarem muitas linhas esticadas na frente do bordado, ative o corte automÃ¡tico para saltos maiores que 3mm no software."
    ],
    "relatedTerms": [
      "Corte de Linha",
      "Ponto de Salto",
      "DireÃ§Ã£o de Costura",
      "SequÃªncia de Pontos"
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
    "origin": "Do latim dislocare (deslocar) e de linea (fio de linho, linha). Descreve o fenÃ´meno de arraste e movimentaÃ§Ã£o dos filamentos de bordado fora de sua trajetÃ³ria esperada.",
    "beginnerExplanation": "Deslocamento de linha Ã© quando o fio de bordado escorrega ou sai do lugar depois de costurado, formando laÃ§os soltos ou deixando o contorno com dentes e fiapos. Isso acontece muito quando a tensÃ£o da linha estÃ¡ muito frouxa ou quando usamos pontos longos demais que nÃ£o se prendem bem.",
    "practicalExercise": "FaÃ§a uma coluna de ponto cheio bem larga (8mm) sem underlay em um tecido macio. Passe a unha suavemente sobre os pontos: repare como os fios se movem e se abrem facilmente (deslocamento de linha). Agora faÃ§a a mesma coluna com 4mm de largura e underlay: sinta como a linha fica travada e firme.",
    "quickSummary": "Deslocamento de linha Ã© a movimentaÃ§Ã£o indesejada dos filamentos de linha na superfÃ­cie do tecido devido Ã  falta de fixaÃ§Ã£o, tensÃ£o frouxa ou comprimento excessivo.",
    "bibliographicReferences": [
      "COATS THREADS. Filament Thread Stability & Tension Control in Embroidery. London, 2022.",
      "GUNOLD. Thread Tension, Friction & Laying Precision Guide. Stockstadt, 2021.",
      "ARTRELADOS. TensÃ£o e FixaÃ§Ã£o de Linhas para Alta Durabilidade. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-019-distancia-entre-pontos",
    "code": "D-019",
    "term": "DistÃ¢ncia entre Pontos",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo e locuÃ§Ã£o prepositiva.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "EspaÃ§amento fÃ­sico entre penetraÃ§Ãµes sucessivas da agulha ou entre passagens de linhas na matriz.",
    "definition": "A distÃ¢ncia entre pontos corresponde ao espaÃ§o geomÃ©trico existente entre pontos sucessivos ou entre passagens vizinhas de linha dentro de uma matriz de bordado. Esse parÃ¢metro regula a densidade local, a cobertura do tecido, o consumo de linha e o nÃ­vel de esforÃ§o mecÃ¢nico sobre as fibras tÃªxteis.",
    "technicalDetails": "Mede-se em milÃ­metros ou dÃ©cimos de milÃ­metro. Em preenchimentos, a distÃ¢ncia entre passagens varia tipicamente de 0.38mm a 0.45mm; em pontos corridos (Running Stitch), o comprimento entre perfuraÃ§Ãµes varia de 2.0mm a 3.5mm.",
    "construction": [
      "EspaÃ§amento lateral entre colunas",
      "Comprimento longitudinal do ponto",
      "Intervalo de penetraÃ§Ã£o da agulha",
      "TolerÃ¢ncia para o calibre da linha (TÃ­tulo 40)"
    ],
    "howItWorks": [
      "1. O programador define o valor de espaÃ§amento no painel de propriedades do ponto.",
      "2. O software calcula a posiÃ§Ã£o exata de cada penetraÃ§Ã£o de agulha.",
      "3. A mÃ¡quina avanÃ§a o bastidor na distÃ¢ncia programada a cada descida da agulha."
    ],
    "mainTypes": [
      "DistÃ¢ncia Curta (0.35mm a 0.40mm - Cobertura intensa e fechada)",
      "DistÃ¢ncia MÃ©dia (0.42mm a 0.45mm - PadrÃ£o equilibrado universal)",
      "DistÃ¢ncia Ampla (0.60mm a 1.50mm - Efeitos sombreados e abertos)"
    ],
    "advantages": [
      "âœ” Permite calibrar a cobertura exata para tecidos lisos, felpudos ou elÃ¡sticos",
      "âœ” Controla com precisÃ£o a rigidez e a maleabilidade da peÃ§a bordada",
      "âœ” Evita perfuraÃ§Ãµes excessivas no mesmo local que danificam o tecido"
    ],
    "limitations": [
      "DistÃ¢ncias excessivamente curtas causam quebra de agulha e corte do tecido; distÃ¢ncias muito longas deixam o tecido transparente."
    ],
    "commonErrors": [
      "â�Œ Colocar os pontos o mais prÃ³ximos possÃ­vel acreditando que isso sempre melhora a qualidade.",
      "â�Œ Usar a mesma distÃ¢ncia entre pontos para linhas de diferentes espessuras.",
      "â�Œ Ignorar que tecidos texturizados (toalhas) exigem suporte plÃ¡stico antes de alterar a distÃ¢ncia."
    ],
    "voceSabia": "A espessura de uma linha de bordado de poliÃ©ster 120/2 Ã© de aproximadamente 0.38mm a 0.40mm: por isso, uma distÃ¢ncia entre pontos menor que 0.35mm faz os fios se encavalarem um sobre o outro!",
    "curiosidadeTecnica": "DistÃ¢ncia entre pontos Ã© a medida de espaÃ§amento; densidade Ã© o resultado da concentraÃ§Ã£o dessa distribuiÃ§Ã£o na Ã¡rea.",
    "dicaArtrelados": "NÃ£o pense 'quanto mais pontos, melhor'! Pense: 'qual Ã© a quantidade e a distÃ¢ncia adequada de pontos para este tecido, este desenho e este efeito?' Essa mudanÃ§a de mentalidade Ã© o marco que separa a amadora da bordadeira profissional.",
    "applications": [
      "Ajuste fino de preenchimentos Tatami, Ponto Satin, Ponto Corrido e desenhos vazados."
    ],
    "troubleshootingTips": [
      "Se o tecido estiver cortando ou furando nas bordas, aumente a distÃ¢ncia entre pontos em pelo menos 0.05mm a 0.10mm."
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
    "origin": "Do latim distantia (afastamento, intervalo espacial entre dois pontos, de distare, estar afastado) e punctum (ponto). ParÃ¢metro geomÃ©trico primordial na fÃ­sica da costura mecÃ¢nica.",
    "beginnerExplanation": "DistÃ¢ncia entre pontos Ã© o comprimento que a linha percorre no tecido entre uma descida da agulha e a prÃ³xima descida. Se a distÃ¢ncia for muito curtinha (menos de 1mm), a agulha fura o tecido no mesmo lugar e corta o pano; se for muito longa (mais de 8mm), a linha fica solta e engancha no dedo!",
    "practicalExercise": "No seu software, programe trÃªs linhas retas de ponto corrido: a primeira com comprimento de 1.0mm, a segunda com 2.5mm e a terceira com 7.0mm. Borde no mesmo tecido: passe o dedo sobre elas e veja a flexibilidade de cada uma, observando que 2.5mm a 3.0mm Ã© a medida perfeita para contornos bonitos e seguros.",
    "quickSummary": "DistÃ¢ncia entre pontos Ã© a extensÃ£o linear entre duas perfuraÃ§Ãµes consecutivas da agulha, calibrada para garantir resistÃªncia e definiÃ§Ã£o estÃ©tica.",
    "bibliographicReferences": [
      "WILCOM. Stitch Length and Pitch Guidelines in Digitizing. Sydney: Wilcom, 2022.",
      "BERNINA. Stitch Length Fundamentals for Freehand and Automated Embroidery. Steckborn, 2021.",
      "ARTRELADOS. CalibraÃ§Ã£o de Comprimento de Ponto para Cada Tipo de Tecido. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-020-distancia-de-seguranca",
    "code": "D-020",
    "term": "DistÃ¢ncia de SeguranÃ§a",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo e locuÃ§Ã£o adjetiva.",
    "category": "TÃ©cnicas de Bastidor",
    "summary": "Margem de espaÃ§o livre obrigatÃ³ria mantida entre o desenho bordado e os limites fÃ­sicos do bastidor ou da peÃ§a.",
    "definition": "A distÃ¢ncia de seguranÃ§a Ã© a margem de espaÃ§o livre mantida entre a Ã¡rea que serÃ¡ bordada e determinados limites fÃ­sicos que nÃ£o devem ser ultrapassados pela agulha ou pelo pÃ©-calcador. Esses limites compreendem a borda plÃ¡stica do bastidor, os limites de fim de curso da mÃ¡quina, costuras grossas da peÃ§a, botÃµes, zÃ­peres e bainhas.",
    "technicalDetails": "Recomenda-se uma margem mÃ­nima de seguranÃ§a de 10mm a 15mm entre o contorno mais externo do desenho e a borda interna do aro do bastidor para evitar colisÃµes catastrÃ³ficas do pÃ©-calcador com o aro.",
    "construction": [
      "Ã�rea total nominal do bastidor",
      "Ã�rea Ãºtil real de bordado (Safe Zone)",
      "Margem de recuo de seguranÃ§a (10mm a 15mm)",
      "EspaÃ§amento em relaÃ§Ã£o a zÃ­peres e bainhas"
    ],
    "howItWorks": [
      "1. O operador verifica o tamanho total da matriz no software.",
      "2. Escolhe um bastidor cuja Ã¡rea Ãºtil contenha o bordado mais a margem de seguranÃ§a.",
      "3. Realiza o teste de rastreio (Trace) na mÃ¡quina antes de costurar para validar a folga."
    ],
    "mainTypes": [
      "DistÃ¢ncia de SeguranÃ§a do Bastidor (Protege pÃ©-calcador e agulha)",
      "DistÃ¢ncia de SeguranÃ§a da PeÃ§a (Evita costurar sobre bainhas ou botÃµes)",
      "DistÃ¢ncia de SeguranÃ§a em Bastidor de BonÃ© (Evita colisÃ£o com a aba e presilhas)"
    ],
    "advantages": [
      "âœ” Previne quebras violentas de agulhas e entortamento da barra de agulha",
      "âœ” Protege os aros do bastidor contra trincas e marcas de impacto",
      "âœ” Garante que o tecido mantenha tensÃ£o uniforme atÃ© a extremidade do desenho"
    ],
    "limitations": [
      "Reduz ligeiramente o tamanho mÃ¡ximo do bordado em relaÃ§Ã£o Ã  medida externa nominal do bastidor."
    ],
    "commonErrors": [
      "â�Œ Bordar uma matriz de 13x18cm em um bastidor nominal de 13x18cm sem folga de seguranÃ§a.",
      "â�Œ Posicionar o desenho colado na bainha de uma toalha dificultando o fechamento do aro.",
      "â�Œ NÃ£o executar o rastreio prÃ©vio (Trace) no painel antes de disparar o bordado."
    ],
    "voceSabia": "Quando o pÃ©-calcador bate na borda do bastidor em velocidade de 800 PPM, o impacto pode desregular o ponto de sincronismo da lanÃ§adeira (timing), exigindo visita de assistÃªncia tÃ©cnica!",
    "curiosidadeTecnica": "O DIBE recomenda a regra das 3 Zonas de Bastidor: Zona Verde (Ã�rea recomendada central), Zona Amarela (PrÃ³xima ao limite) e Zona Vermelha (Margem de risco proibida).",
    "dicaArtrelados": "Nunca planeje um bordado olhando apenas para o tamanho nominal do bastidor! Planeje olhando para a Ã¡rea Ãºtil, para a peÃ§a e para o posicionamento final. Antes de iniciar, pergunte: 1. O desenho cabe? 2. EstÃ¡ bem posicionado? 3. Existe margem de seguranÃ§a? Se os trÃªs forem sim, borde com tranquilidade!",
    "applications": [
      "Montagem de bastidores, enquadramento de matrizes, bordado de bonÃ©s e toalhas."
    ],
    "troubleshootingTips": [
      "Se o desenho estiver a menos de 1cm da borda do bastidor, mude para o bastidor imediatamente maior ou reduza proporcionalmente a matriz em 5%."
    ],
    "relatedTerms": [
      "Ã�rea Ãštil do Bastidor",
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
    "origin": "Do latim distantia (afastamento) e securitas, -atis (estado de seguranÃ§a, livre de perigo, de securus, seguro). Norma ergonÃ´mica e mecÃ¢nica fundamental de operaÃ§Ã£o.",
    "beginnerExplanation": "DistÃ¢ncia de seguranÃ§a Ã© o espaÃ§o livre que vocÃª deve deixar entre o desenho do bordado e o aro de plÃ¡stico do bastidor (geralmente pelo menos 1 a 2 centÃ­metros). Se vocÃª bordar muito perto da borda do bastidor, o pÃ© da agulha pode bater no plÃ¡stico e quebrar a mÃ¡quina!",
    "practicalExercise": "Coloque um bastidor vazio na mÃ¡quina e leve o pantÃ³grafo atÃ© o limite mÃ¡ximo do campo de bordado. Observe com os olhos a distÃ¢ncia que sobra entre o pÃ©-calcador da mÃ¡quina e a borda interna de plÃ¡stico do bastidor: memorize essa folga de seguranÃ§a para nunca encostar matrizes na borda.",
    "quickSummary": "DistÃ¢ncia de seguranÃ§a Ã© a margem livre obrigatÃ³ria mantida entre a Ã¡rea de bordado e as bordas fÃ­sicas do bastidor para evitar colisÃµes mecÃ¢nicas.",
    "bibliographicReferences": [
      "BROTHER. Safety Clearances and Hoop Margin Operating Instructions. Nagoya, 2022.",
      "TAJIMA. Frame Collision Prevention & Border Clearance Manual. Nagoya, 2021.",
      "ARTRELADOS. Guia de SeguranÃ§a e ProteÃ§Ã£o de Bastidores no AteliÃª. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-021-densidade-de-pontos-avancada",
    "code": "D-021",
    "term": "Densidade de Pontos (Conceitos & CalibraÃ§Ã£o)",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos densidade e pontos.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "Guia prÃ¡tico e didÃ¡tico sobre o comportamento, diagnÃ³stico e equilÃ­brio da concentraÃ§Ã£o de pontos.",
    "definition": "A densidade de pontos descreve a quantidade e a concentraÃ§Ã£o de pontos de bordado distribuÃ­dos em determinada Ã¡rea da matriz. Ã‰ o conceito fundamental para compreender por que duas matrizes visualmente semelhantes na tela produzem resultados completamente diferentes no tecido. A densidade ideal nÃ£o Ã© um nÃºmero estÃ¡tico: depende da interaÃ§Ã£o entre tecido, linha, agulha, estabilizador, underlay e geometria do desenho.",
    "technicalDetails": "Analisa a densidade alta (que pode causar endurecimento e repuxo) versus a densidade baixa (que pode deixar o tecido ralo), estabelecendo parÃ¢metros de calibraÃ§Ã£o baseados no equilÃ­brio dinÃ¢mico dos materiais tÃªxteis.",
    "construction": [
      "ConcentraÃ§Ã£o de penetraÃ§Ãµes por mmÂ²",
      "EspaÃ§amento entre colunas de pontos",
      "EquilÃ­brio de camadas de underlay e topo",
      "AdequaÃ§Ã£o ao peso e elasticidade do tecido"
    ],
    "howItWorks": [
      "1. A bordadeira avalia a textura do tecido (liso, elÃ¡stico ou felpudo).",
      "2. Escolhe a densidade proporcional Ã  espessura da linha e finalidade da peÃ§a.",
      "3. O software gera pontos equilibrados que cobrem sem sobrecarregar a estrutura tÃªxtil."
    ],
    "mainTypes": [
      "Densidade para Tecidos Leves / Delicados (0.45mm a 0.50mm)",
      "Densidade para Tecidos MÃ©dios / Planos (0.40mm a 0.42mm)",
      "Densidade para Tecidos Pesados / Couro (0.45mm a 0.55mm com agulha especial)"
    ],
    "advantages": [
      "âœ” Toque macio e confortÃ¡vel na peÃ§a pronta",
      "âœ” Cobertura sÃ³lida e cores vibrantes da linha",
      "âœ” Baixa taxa de quebras e alta produtividade"
    ],
    "limitations": [
      "NÃ£o hÃ¡ um nÃºmero mÃ¡gico Ãºnico: copiar configuraÃ§Ãµes de uma matriz para outra em tecidos diferentes pode gerar falhas."
    ],
    "commonErrors": [
      "â�Œ Pensar que 'quanto mais denso, mais bonito fica o bordado'.",
      "â�Œ Ignorar que a linha e a agulha tambÃ©m ocupam espaÃ§o fÃ­sico no tecido.",
      "â�Œ Tentar compensar tecido fino colocando pontos em excesso."
    ],
    "voceSabia": "Uma toalha felpuda e uma malha elÃ¡stica de camiseta exigem tratamentos completamente diferentes: a toalha precisa de plÃ¡stico hidrossolÃºvel por cima; a malha precisa de entretela recorta-fÃ¡cil estÃ¡vel por baixo!",
    "curiosidadeTecnica": "Em colunas Satin muito estreitas (menos de 1.5mm), a densidade deve ser aberta (menos pontos) para que a agulha nÃ£o corte o tecido ao perfurar as duas bordas prÃ³ximas.",
    "dicaArtrelados": "NÃ£o pergunte apenas 'quantos pontos tem esta matriz?'. Pergunte tambÃ©m: 'como esses pontos estÃ£o distribuÃ­dos e para qual tecido ela foi feita?' Essa segunda pergunta Ã© a chave para o sucesso do ateliÃª!",
    "applications": [
      "CalibraÃ§Ã£o de matrizes para uniformes, toalhas, malhas de bebÃª e artigos esportivos."
    ],
    "troubleshootingTips": [
      "Em caso de tecido franzido ao redor do desenho, reduza a densidade em 10% e aumente a gramatura da entretela."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Densidade VariÃ¡vel",
      "DistÃ¢ncia entre Pontos",
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
    "origin": "Do latim densitas (densidade, espessura) e de punctum (ponto), complementado pelos termos conceituais de calibraÃ§Ã£o mÃ©trica da engenharia tÃªxtil moderna.",
    "beginnerExplanation": "Calibrar a densidade de pontos Ã© como regular o sal da comida: nÃ£o pode faltar nem sobrar! Para cada tipo de tecido (malha macia, sarja grossa, toalha felpuda), existe uma regulagem exata de pontos para o bordado ficar macio, bonito e durÃ¡vel por anos de lavagem.",
    "practicalExercise": "Crie uma tabela de testes no seu ateliÃª: pegue retalhos dos 5 tecidos que vocÃª mais usa (PiquÃª, AlgodÃ£o, Sarja, Toalha e Microfibra). Borde a mesma matriz pequena em cada um deles com suas densidades recomendadas e anote a melhor configuraÃ§Ã£o em uma pastinha de mostruÃ¡rio.",
    "quickSummary": "CalibraÃ§Ã£o de densidade de pontos Ã© o ajuste sistemÃ¡tico do espaÃ§amento de pontos em harmonia com o tecido, linha e entretela para excelÃªncia de acabamento.",
    "bibliographicReferences": [
      "DEVERSON, D. Master Guide to Stitch Density Calibration. London: Textile Press, 2022.",
      "WILCOM. Fabric Assistant & Automatic Density Calibration Guide. Sydney, 2023.",
      "ARTRELADOS. Tabela Mestra de CalibraÃ§Ã£o de Densidades por Tecido. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-022-densidade-variavel-efeitos",
    "code": "D-022",
    "term": "Densidade VariÃ¡vel & Efeitos Visuais",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivos e adjetivos.",
    "category": "Design & CriaÃ§Ã£o",
    "summary": "UtilizaÃ§Ã£o criativa de gradientes e variaÃ§Ãµes de densidade para produzir profundidade, texturas e ilusÃ£o de relevo.",
    "definition": "A densidade variÃ¡vel para efeitos visuais Ã© a aplicaÃ§Ã£o de nÃ­veis dinÃ¢micos de concentraÃ§Ã£o de pontos dentro de uma mesma Ã¡rea ou entre regiÃµes de uma matriz para produzir efeitos de luz, sombra, transiÃ§Ãµes de cores (degradÃª), profundidade e texturas diferenciadas, sem necessariamente trocar a cor da linha.",
    "technicalDetails": "Utiliza ferramentas de densidade progressiva e gradiente nos softwares, variando o espaÃ§amento entre 0.35mm (Ã¡rea densa e escura) e 2.0mm (Ã¡rea aberta e luminosa), aproveitando a reflexÃ£o da luz na linha.",
    "construction": [
      "Preenchimento progressivo / gradiente",
      "TransiÃ§Ã£o suave entre densidades",
      "Mescla de duas cores com gradientes cruzados",
      "TexturizaÃ§Ã£o visual por espaÃ§amento"
    ],
    "howItWorks": [
      "1. O programador define uma Ã¡rea de partida fechada e uma de tÃ©rmino aberta.",
      "2. O software distribui as passagens de linha com espaÃ§amento crescente.",
      "3. O efeito visual cria ilusÃ£o de volume e curvatura tridimensional no tecido."
    ],
    "mainTypes": [
      "Efeito DegradÃª Bicolor (Duas cores entrelaÃ§adas por gradiente)",
      "Efeito Sombreamento MonocromÃ¡tico (Uma Ãºnica cor gerando claro e escuro)",
      "Efeito Textura Aberta (SimulaÃ§Ã£o de tecidos leves e transparÃªncia)"
    ],
    "advantages": [
      "âœ” Agrega imenso valor artÃ­stico e sofisticaÃ§Ã£o Ã s matrizes",
      "âœ” Reduz a quantidade de trocas de cores necessÃ¡rias na mÃ¡quina",
      "âœ” Alivia o peso do bordado em Ã¡reas grandes de paisagens e personagens"
    ],
    "limitations": [
      "Exige que o tecido de suporte tenha cor compatÃ­vel ou que a transiÃ§Ã£o seja testada previamente."
    ],
    "commonErrors": [
      "â�Œ Criar transiÃ§Ãµes com saltos abruptos de densidade que deixam falhas visÃ­veis.",
      "â�Œ Aplicar gradientes em Ã¡reas minÃºsculas onde a transiÃ§Ã£o nÃ£o pode ser percebida.",
      "â�Œ Esquecer de testar o efeito no tecido real antes da produÃ§Ã£o."
    ],
    "voceSabia": "VocÃª pode criar uma esfera com aparÃªncia tridimensional perfeita usando apenas UMA linha azul, simplesmente variando a densidade e o Ã¢ngulo dos pontos de acordo com a curvatura da esfera!",
    "curiosidadeTecnica": "Softwares avanÃ§ados permitem criar curvas de gradiente personalizadas (senoidais, exponenciais e lineares) para simular iluminaÃ§Ã£o solar em paisagens bordadas.",
    "dicaArtrelados": "A densidade variÃ¡vel Ã© como o 'volume' da mÃºsica: nÃ£o precisamos deixar tudo no mÃ¡ximo para criar impacto! Uma matriz bem construÃ­da sabe onde colocar mais e onde colocar menos linha para encantar o cliente.",
    "applications": [
      "Bordados realistas, rostos, pÃ´r do sol, pÃ©talas sombreadas e efeitos de Ã¡gua."
    ],
    "troubleshootingTips": [
      "Se a transiÃ§Ã£o entre duas cores parecer marcada por uma linha dura, aumente a Ã¡rea de sobreposiÃ§Ã£o (overlap) do gradiente em 3mm."
    ],
    "relatedTerms": [
      "Densidade VariÃ¡vel",
      "Densidade de Pontos",
      "Ponto de Preenchimento",
      "DireÃ§Ã£o do Ponto"
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
    "origin": "Do latim densitas variabilis e do latim effectus (resultado, realizaÃ§Ã£o visual, de efficere, produzir), conjugado Ã  teoria Ã³ptica das cores e iluminaÃ§Ã£o de superfÃ­cies.",
    "beginnerExplanation": "Ã‰ o uso artÃ­stico da densidade de pontos para criar efeitos de luz, brilho, penumbra e degradÃªs incrÃ­veis. Em vez de preencher tudo chapado, vocÃª brinca com os espaÃ§os para fazer o bordado parecer uma pintura realista com profundidade.",
    "practicalExercise": "Desenhe uma maÃ§Ã£ no software: na parte onde a luz bate, use densidade aberta (0.90mm); na parte do meio, use densidade mÃ©dia (0.45mm); e na parte de sombra embaixo, use densidade fechada (0.38mm) com um toque de linha marrom misturada. Borde e surpreenda-se com o efeito 3D!",
    "quickSummary": "Densidade variÃ¡vel para efeitos visuais Ã© a manipulaÃ§Ã£o artÃ­stica da concentraÃ§Ã£o de pontos para gerar profundidade, texturas e ilusÃ£o tridimensional.",
    "bibliographicReferences": [
      "NICOLAS, C. Machine Embroidery as Fine Art: Shading & Perspective. Paris, 2022.",
      "HATCH. Artistic Shading & Gradient Effects in Modern Embroidery. Sydney: Wilcom, 2023.",
      "ARTRELADOS. Efeitos Especiais e Pintura com Agulha no Bordado Computadorizado. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-023-distribuicao-de-pontos",
    "code": "D-023",
    "term": "DistribuiÃ§Ã£o de Pontos",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos distribuiÃ§Ã£o e pontos.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "Maneira como os pontos sÃ£o organizados, espalhados e equilibrados no espaÃ§o dentro da matriz.",
    "definition": "A distribuiÃ§Ã£o de pontos corresponde Ã  maneira como os pontos sÃ£o organizados e espalhados dentro de um objeto ou regiÃ£o da matriz de bordado. EstÃ¡ intimamente relacionada Ã  densidade, mas nÃ£o deve ser confundida com ela: enquanto a densidade se refere Ã  concentraÃ§Ã£o pura de pontos em determinada Ã¡rea, a distribuiÃ§Ã£o descreve como esses pontos estÃ£o espacialmente arranjados (uniformes, concentrados, afastados, radiais ou acompanhando curvas).",
    "technicalDetails": "Analisa a regularidade topolÃ³gica dos pontos na malha vetorial. Uma distribuiÃ§Ã£o equilibrada evita acÃºmulos pontuais que criam relevos duros ou falhas perifÃ©ricas causadas pela traÃ§Ã£o das linhas.",
    "construction": [
      "Malha geomÃ©trica de penetraÃ§Ãµes",
      "EspaÃ§amento constante ou progressivo",
      "Alinhamento Ã s curvas do objeto",
      "Balanceamento de underlay e cobertura"
    ],
    "howItWorks": [
      "1. O software calcula o posicionamento de cada ponto ao longo do vetor.",
      "2. O digitalizador ajusta a dispersÃ£o para acompanhar a geometria do desenho.",
      "3. A mÃ¡quina costura os pontos de forma equilibrada, mantendo a tensÃ£o homogÃªnea no tecido."
    ],
    "mainTypes": [
      "DistribuiÃ§Ã£o Uniforme (PadrÃ£o em preenchimentos regulares)",
      "DistribuiÃ§Ã£o AnatÃ´mica / OrgÃ¢nica (Acompanha pÃ©talas e folhas)",
      "DistribuiÃ§Ã£o Concentrada / Focal (Para centros de flores e olhos)"
    ],
    "advantages": [
      "âœ” ConstrÃ³i uma superfÃ­cie visualmente equilibrada e sem falhas",
      "âœ” Evita acÃºmulo de linha e rigidez excessiva em cantos fechados",
      "âœ” Proporciona tensÃ£o uniforme sobre o tecido durante a execuÃ§Ã£o"
    ],
    "limitations": [
      "Formas com pontas muito agudas exigem tÃ©cnicas especiais (como cantos em meia-esquadria ou corte de pontos) para manter a distribuiÃ§Ã£o regular."
    ],
    "commonErrors": [
      "â�Œ Olhar apenas o nÃºmero total de pontos sem verificar onde eles estÃ£o concentrados.",
      "â�Œ Permitir que dezenas de pontos se acumulem no mesmo vÃ©rtice de uma forma triangular.",
      "â�Œ Deixar Ã¡reas desigualmente cobertas por mÃ¡ distribuiÃ§Ã£o do underlay."
    ],
    "voceSabia": "Uma matriz pode ter a mesma quantidade de pontos de outra, mas se a distribuiÃ§Ã£o for ruim, uma parecerÃ¡ pesada e repuxada enquanto a outra ficarÃ¡ leve e perfeita!",
    "curiosidadeTecnica": "Em cantos muito estreitos no ponto Satin, softwares modernos usam o recurso de 'Smart Corners' (Cantos Inteligentes) para redistribuir e reduzir pontos nas curvas fechadas.",
    "dicaArtrelados": "Uma matriz bonita nÃ£o Ã© apenas uma matriz com a quantidade certa de pontos: Ã© uma matriz em que os pontos estÃ£o harmoniosamente bem distribuÃ­dos!",
    "applications": [
      "Preenchimentos gerais, cantos de molduras, pÃ©talas, folhas e monogramas."
    ],
    "troubleshootingTips": [
      "Se os cantos de letras ou estrelas ficarem duros como pedras, ative a opÃ§Ã£o de reduÃ§Ã£o automÃ¡tica de pontos em cantos agudos no software."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "DistÃ¢ncia entre Pontos",
      "Ponto de Preenchimento",
      "DireÃ§Ã£o do Ponto"
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
    "origin": "Do latim distributio, -onis (divisÃ£o harmÃ´nica, partilha ordenada, de distribuere) e punctum (ponto perfurado). Na programaÃ§Ã£o grÃ¡fica CAD tÃªxtil, refere-se ao algoritmo topolÃ³gico de dispersÃ£o espacial de perfuraÃ§Ãµes ao longo de nÃ³s vetoriais.",
    "beginnerExplanation": "DistribuiÃ§Ã£o de pontos Ã© como os pontos estÃ£o espalhados pelo desenho: se eles estÃ£o bem divididos de forma suave e organizada, ou se estÃ£o todos amontoados em um canto sÃ³. Uma boa distribuiÃ§Ã£o faz o bordado ficar macio e plano, sem aquelas bolotas duras nos cantos das letras.",
    "practicalExercise": "Desenhe uma estrela de 5 pontas no software e borde em ponto cheio (Satin). Observe os bicos finos da estrela: se os pontos estiverem se acumulando todos na mesma pontinha, ative a opÃ§Ã£o de 'Cantos Inteligentes' (Smart Corners) ou reduza a densidade na curva para redistribuir os pontos com suavidade.",
    "quickSummary": "DistribuiÃ§Ã£o de pontos Ã© o arranjo espacial equilibrado das perfuraÃ§Ãµes de agulha sobre a forma vetorial, evitando acÃºmulos e deformaÃ§Ãµes no tecido.",
    "bibliographicReferences": [
      "WILCOM. Stitch Distribution, Smart Corners & Density Balancing. Sydney: Wilcom, 2022.",
      "DEVERSON, D. Vector Topologies for Textile Embroidery. London: Textile Press, 2021.",
      "ARTRELADOS. DistribuiÃ§Ã£o HarmÃ´nica de Pontos e Tratamento de Cantos Agudos. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-024-desenho-de-bordado-pratica",
    "code": "D-024",
    "term": "Desenho de Bordado (PrÃ¡tica & Conceito)",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivos masculinos.",
    "category": "Design & CriaÃ§Ã£o",
    "summary": "Guia prÃ¡tico para a escolha, anÃ¡lise e adaptaÃ§Ã£o de imagens visuais antes de transformÃ¡-las em matrizes.",
    "definition": "O desenho de bordado Ã© a representaÃ§Ã£o visual daquilo que se deseja transformar em bordado computadorizado (uma flor, um logotipo, um nome, um personagem ou sÃ­mbolo). Uma imagem grÃ¡fica (como um arquivo JPG ou PNG) nÃ£o Ã© automaticamente uma matriz: para ser executada pela mÃ¡quina, ela precisa ser convertida em uma estrutura de objetos, coordenadas de pontos e comandos mecÃ¢nicos.",
    "technicalDetails": "Consiste na etapa de prÃ©-avaliaÃ§Ã£o do arquivo de imagem. Uma imagem visualmente linda na tela do celular pode conter linhas de 0.2mm ou textos microscÃ³picos que sÃ£o fisicamente inviÃ¡veis para uma agulha de 0.75mm com linha de poliÃ©ster.",
    "construction": [
      "Imagem fonte de referÃªncia (JPG, PNG, BMP)",
      "AnÃ¡lise de escala e proporÃ§Ã£o real",
      "SeparaÃ§Ã£o visual de planos e contornos",
      "Planejamento de adaptaÃ§Ã£o para pontos"
    ],
    "howItWorks": [
      "1. A imagem Ã© recebida e analisada quanto Ã  nitidez e viabilidade tÃ©cnica.",
      "2. Identificam-se detalhes que precisarÃ£o ser engrossados ou simplificados.",
      "3. O desenho Ã© redimensionado para o tamanho final antes da digitalizaÃ§Ã£o."
    ],
    "mainTypes": [
      "Desenho Linear Simples (FÃ¡cil conversÃ£o para pontos corridos ou satin)",
      "Desenho Preenchido em Cores SÃ³lidas (Ideal para blocos tatami)",
      "Desenho Complexo / FotogrÃ¡fico (Exige simplificaÃ§Ã£o prÃ©via profunda)"
    ],
    "advantages": [
      "âœ” Garante que o bordado mantenha a identidade visual do projeto original",
      "âœ” Evita perdas de tempo tentando digitalizar detalhes impossÃ­veis de bordar",
      "âœ” Facilita o alinhamento de expectativas estÃ©ticas com o cliente"
    ],
    "limitations": [
      "Imagens com baixa resoluÃ§Ã£o ou muitos degradÃªs exigem redesenho vetorial prÃ©vio."
    ],
    "commonErrors": [
      "â�Œ Tentar bordar um logotipo com letras de 2mm exatamente como estÃ¡ no cartÃ£o de visitas.",
      "â�Œ Supor que a mÃ¡quina de bordar funciona como uma impressora a jato de tinta.",
      "â�Œ NÃ£o adaptar o desenho ao tipo de tecido onde ele serÃ¡ aplicado."
    ],
    "voceSabia": "A menor letra legÃ­vel em bordado com agulha 75/11 e linha 40 comum precisa ter pelo menos 4.5mm a 5.0mm de altura. Menor do que isso, os furos da agulha se fundem e a letra vira um borrÃ£o!",
    "curiosidadeTecnica": "Ao avaliar um desenho, reduza a imagem na tela do computador atÃ© que ela meÃ§a exatamente os centÃ­metros reais que terÃ¡ na peÃ§a e afaste-se 50cm: o que vocÃª nÃ£o conseguir ler com os olhos tambÃ©m nÃ£o funcionarÃ¡ no bordado.",
    "dicaArtrelados": "NÃ£o pergunte apenas: 'a imagem Ã© bonita?'. Pergunte: 'esta imagem pode ser transformada em um bom bordado com linha e agulha?' Essa pergunta muda completamente a sua visÃ£o de produÃ§Ã£o!",
    "applications": [
      "AvaliaÃ§Ã£o de artes de clientes, criaÃ§Ã£o de novas matrizes e orÃ§amentos de ateliÃª."
    ],
    "troubleshootingTips": [
      "Se um detalhe do desenho estiver pequeno demais, engrosse-o no software grÃ¡fico antes de abrir o programa de bordado."
    ],
    "relatedTerms": [
      "Desenho de Bordado",
      "DigitalizaÃ§Ã£o de Bordado",
      "VetorizaÃ§Ã£o",
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
    "origin": "Do latim deexsignare (traÃ§ar, delinear com marcas) e do grego praktike (relativo Ã  aÃ§Ã£o, empÃ­rico, de prassein, fazer). Representa a ponte prÃ¡tica entre a arte ilustrativa e a fÃ­sica mecÃ¢nica da agulha.",
    "beginnerExplanation": "Ã‰ o passo a passo prÃ¡tico de como escolher e preparar um desenho antes de bordar: ver se as letras nÃ£o sÃ£o pequenas demais, se os detalhes finos vÃ£o aparecer no pano e se a imagem combina com o tipo de peÃ§a (toalha, camiseta, bonÃ©).",
    "practicalExercise": "Pegue trÃªs desenhos diferentes (uma foto de famÃ­lia cheia de sombras, um desenho infantil simples de contorno preto e um logotipo corporativo). Analise os trÃªs e classifique: qual deles estÃ¡ 100% pronto para bordar, qual precisa de pequenas adaptaÃ§Ãµes e qual precisa ser redesenhado do zero.",
    "quickSummary": "Desenho de bordado prÃ¡tico Ã© a metodologia de anÃ¡lise prÃ©via e adaptaÃ§Ã£o dimensional de artes visuais para a realidade fÃ­sica do bordado.",
    "bibliographicReferences": [
      "LEE, C. Practical Artwork Adaptation for Machine Embroidery. Seoul, 2022.",
      "PUNDOLE, F. Graphic Principles for Embroidery Digitizers. Mumbai, 2021.",
      "ARTRELADOS. Metodologia Artrelados de Triagem e AdaptaÃ§Ã£o de Desenhos. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-025-digitalizacao-automatica-regras",
    "code": "D-025",
    "term": "DigitalizaÃ§Ã£o AutomÃ¡tica (Regras & LimitaÃ§Ãµes)",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e adjetivo.",
    "category": "Softwares & Formatos",
    "summary": "AnÃ¡lise profunda de funcionamento, vantagens reais e armadilhas da conversÃ£o automÃ¡tica de matrizes.",
    "definition": "A digitalizaÃ§Ã£o automÃ¡tica Ã© o recurso dos softwares de bordado que analisa uma imagem e tenta convertÃª-la de forma autÃ´noma em objetos e pontos. Embora pareÃ§a um processo mÃ¡gico e instantÃ¢neo, o programa nÃ£o compreende a fÃ­sica dos tecidos, a elasticidade nem as tensÃµes da linha, exigindo sempre rigorosa revisÃ£o tÃ©cnica e ajustes humanos.",
    "technicalDetails": "Funciona bem para imagens com cores sÃ³lidas puras, alto contraste, sem degradÃªs e com formas geomÃ©tricas limpas. Falha frequentemente em fotografias, texturas complexas e pequenos textos.",
    "construction": [
      "Reconhecimento automatizado de formas",
      "ReduÃ§Ã£o algorÃ­tmica de cores",
      "AtribuiÃ§Ã£o genÃ©rica de Ã¢ngulos e pontos",
      "InserÃ§Ã£o automÃ¡tica de cortes e saltos"
    ],
    "howItWorks": [
      "1. O usuÃ¡rio importa uma imagem nÃ­tida de alto contraste no software.",
      "2. O programa agrupa os pixels por similaridade de cor.",
      "3. Gera blocos de pontos cheios ou tatami de forma automÃ¡tica.",
      "4. O operador precisa inspecionar e corrigir sequÃªncias, pontos curtos e compensaÃ§Ãµes."
    ],
    "mainTypes": [
      "ConversÃ£o AutomÃ¡tica de Imagem Bitmap (PNG/JPG)",
      "ConversÃ£o AutomÃ¡tica de Desenho Vetorial (SVG/EPS)",
      "ConversÃ£o AutomÃ¡tica de Tipografia TrueType do Windows"
    ],
    "advantages": [
      "âœ” Agilidade para criar rascunhos e modelos iniciais de apresentaÃ§Ã£o",
      "âœ” Reduz o tempo de traÃ§ado em desenhos com muitas formas geomÃ©tricas simples",
      "âœ” Excelente ferramenta auxiliar para quem estÃ¡ iniciando os estudos"
    ],
    "limitations": [
      "Gera sequÃªncias pouco eficientes com saltos longos, excesso de pontos e falta de compensaÃ§Ã£o de repuxamento."
    ],
    "commonErrors": [
      "â�Œ Enviar a matriz gerada automaticamente direto para a mÃ¡quina sem revisÃ£o.",
      "â�Œ Acreditar que o software sabe qual entretela ou tecido vocÃª vai utilizar.",
      "â�Œ Confundir uma imagem com simulaÃ§Ã£o 3D bonita na tela com uma matriz estÃ¡vel na mÃ¡quina."
    ],
    "voceSabia": "Uma matriz gerada automaticamente pode levar 10 segundos para ser criada no software, mas gastar 20 minutos a mais na mÃ¡quina por causa de dezenas de cortes desnecessÃ¡rios!",
    "curiosidadeTecnica": "A conversÃ£o automÃ¡tica de texto TrueType funciona bem para fontes retas (Arial, Impact), mas costuma deformar completamente fontes cursivas finas ou com serifa.",
    "dicaArtrelados": "Use a digitalizaÃ§Ã£o automÃ¡tica como ponto de partida, nunca como ponto de chegada! Uma matriz bonita na tela ainda precisa ser uma matriz eficiente na mÃ¡quina. Antes de bordar, confira: sequÃªncia + pontos + densidade + underlay + tamanho + tecido!",
    "applications": [
      "ConversÃ£o rÃ¡pida de formas bÃ¡sicas, sÃ­mbolos simples e estudos de viabilidade."
    ],
    "troubleshootingTips": [
      "ApÃ³s a conversÃ£o automÃ¡tica, exclua os micro-objetos de menos de 1mm que o software gerou por engano nas bordas das cores."
    ],
    "relatedTerms": [
      "DigitalizaÃ§Ã£o Manual",
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
    "origin": "Do latim digitalis e grego automatos (automÃ¡tico), aliado ao latim regula (regra, norma) e limitatio (delimitaÃ§Ã£o de fronteiras).",
    "beginnerExplanation": "SÃ£o as regras essenciais para vocÃª nÃ£o cair em ciladas ao usar a conversÃ£o automÃ¡tica do software: imagens precisam ter contornos nÃ­tidos e cores sÃ³lidas; vocÃª nunca deve confiar na matriz sem antes passar um 'pente fino' no simulador para apagar pontos curtos e nÃ³s escondidos.",
    "practicalExercise": "Pegue um logotipo simples com cÃ­rculos e letras: faÃ§a a conversÃ£o automÃ¡tica e abra a lista de objetos do software. Conte quantos pequenos cortes de linha foram criados. Junte manualmente as partes da mesma cor para eliminar cortes e compare o tempo final estimado da matriz!",
    "quickSummary": "DigitalizaÃ§Ã£o automÃ¡tica com regras e limitaÃ§Ãµes Ã© a aplicaÃ§Ã£o criteriosa de ferramentas de conversÃ£o assistida sob estrito controle e pÃ³s-ediÃ§Ã£o humana.",
    "bibliographicReferences": [
      "BERNINA. Auto-Digitizing Best Practices & Quality Control. Steckborn, 2023.",
      "HATCH. When to Use Auto-Digitize and How to Fix It. Sydney: Wilcom, 2022.",
      "ARTRELADOS. Manual de SobrevivÃªncia e OtimizaÃ§Ã£o para Matrizes AutomÃ¡ticas. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-026-digitalizacao-manual-tecnica",
    "code": "D-026",
    "term": "DigitalizaÃ§Ã£o Manual (TÃ©cnica & DecisÃµes)",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e adjetivo.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "Metodologia consciente de construÃ§Ã£o de matrizes onde cada decisÃ£o tÃ©cnica Ã© controlada pelo digitalizador.",
    "definition": "Na digitalizaÃ§Ã£o manual, o profissional constrÃ³i os objetos da matriz conscientemente, definindo parÃ¢metros, caminhos, pontos de entrada/saÃ­da, Ã¢ngulos e underlays de acordo com a fÃ­sica do tecido e o acabamento pretendido. Em vez de delegar decisÃµes ao computador, o digitalizador assume o controle de toda a engenharia da matriz.",
    "technicalDetails": "Permite calibrar tolerÃ¢ncias de Pull Compensation (+0.30mm a +0.60mm), aplicar underlays adequados (linha central, ziguezague ou tatami duplo) e construir caminhos contÃ­nuos que eliminam paradas de corte.",
    "construction": [
      "DefiniÃ§Ã£o de entrada e saÃ­da por objeto",
      "SeleÃ§Ã£o criteriosa de tipo de ponto por espessura",
      "EstruturaÃ§Ã£o de underlay por camadas",
      "Planejamento de sobreposiÃ§Ã£o de seguranÃ§a (overlap)"
    ],
    "howItWorks": [
      "1. O digitalizador estuda o desenho e define a ordem cronolÃ³gica de costura.",
      "2. TraÃ§a os nÃ³s de contorno e aplica a linha de direÃ§Ã£o do ponto.",
      "3. Configura a densidade e o underlay conforme o tecido de destino.",
      "4. Conecta os objetos com pequenos pontos de viagem ocultos."
    ],
    "mainTypes": [
      "DigitalizaÃ§Ã£o Manual por Colunas (Colunas A, B, C no Wilcom)",
      "DigitalizaÃ§Ã£o Manual por Preenchimento Complexo",
      "DigitalizaÃ§Ã£o Ponto a Ponto CirÃºrgica"
    ],
    "advantages": [
      "âœ” MÃ¡xima precisÃ£o e encaixe perfeito entre contornos e fundos",
      "âœ” Zero quebras de linha e bordado extremamente macio e flexÃ­vel",
      "âœ” Alta velocidade de produÃ§Ã£o na mÃ¡quina com avesso limpÃ­ssimo"
    ],
    "limitations": [
      "Exige curva de aprendizado gradual e prÃ¡tica com o software de programaÃ§Ã£o."
    ],
    "commonErrors": [
      "â�Œ Clicar pontos em excesso tentando desenhar contornos perfeitos, sobrecarregando a curva.",
      "â�Œ Esquecer de planejar onde o objeto anterior terminou antes de criar o prÃ³ximo.",
      "â�Œ NÃ£o aplicar folga de transpasse (overlap) entre o fundo e o contorno."
    ],
    "voceSabia": "Digitalizadores experientes gastam 40% do tempo apenas planejando a sequÃªncia mental antes de dar o primeiro clique no software!",
    "curiosidadeTecnica": "Na digitalizaÃ§Ã£o manual, menos nÃ³s de vetor produzem curvas mais suaves e pontos mais uniformes do que curvas cheias de nÃ³s acumulados.",
    "dicaArtrelados": "Digitalizar manualmente nÃ£o significa fazer tudo difÃ­cil: significa saber exatamente por que vocÃª estÃ¡ fazendo cada escolha! O objetivo nÃ£o Ã© clicar mais, Ã© decidir melhor!",
    "applications": [
      "Matrizes para alta costura, uniformes executivos, enxovais personalizados e marcas de moda."
    ],
    "troubleshootingTips": [
      "Ao criar colunas Satin em curvas, mantenha as guias de Ã¢ngulo sempre perpendiculares Ã s bordas da coluna para evitar distorÃ§Ãµes."
    ],
    "relatedTerms": [
      "DigitalizaÃ§Ã£o AutomÃ¡tica",
      "Ponto de Entrada",
      "Ponto de SaÃ­da",
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
    "origin": "Do latim digitalis manualis (programaÃ§Ã£o manual) e techne (arte, ofÃ­cio prÃ¡tico) e decisio (determinaÃ§Ã£o clara apÃ³s ponderaÃ§Ã£o, de decidere).",
    "beginnerExplanation": "Ã‰ a tomada de decisÃµes conscientes do programador experiente: escolher se uma pÃ©tala deve ser bordada antes ou depois do caule, qual Ã¢ngulo de ponto vai valorizar a luz e qual costura de base vai segurar o tecido sem repuxar.",
    "practicalExercise": "Pegue um desenho de um pÃ¡ssaro: planeje no papel a ordem exata das camadas (1Âº o bico de fundo, 2Âº o corpo, 3Âº as asas sobrepostas, 4Âº os olhos e contornos finais). Depois digitalize no software seguindo rigorosamente essa ordem: veja como o pÃ¡ssaro ganha vida e volume perfeito no tecido!",
    "quickSummary": "DigitalizaÃ§Ã£o manual tÃ©cnica e decisÃ³ria Ã© o processo deliberado de engenharia de pontos onde cada escolha atende a critÃ©rios estÃ©ticos e fÃ­sicos precisos.",
    "bibliographicReferences": [
      "GARCIA, E. Decision Making in Advanced Embroidery Digitizing. Barcelona, 2022.",
      "TAJIMA. Pulse DGML Advanced Master Series. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. A Arte da DecisÃ£o: Sequenciamento e EstruturaÃ§Ã£o de Matrizes. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-027-digitalizacao-por-objetos",
    "code": "D-027",
    "term": "DigitalizaÃ§Ã£o por Objetos",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e locuÃ§Ã£o prepositiva.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "MÃ©todo de construÃ§Ã£o que divide o desenho em elementos individuais e independentes com configuraÃ§Ãµes prÃ³prias.",
    "definition": "A digitalizaÃ§Ã£o por objetos Ã© a metodologia moderna de criaÃ§Ã£o de matrizes na qual o desenho Ã© decomposto em elementos vetoriais individuais e autÃ´nomos (como pÃ©tala, folha, caule, letra, fundo). Em vez de enxergar a imagem como um bloco Ãºnico, o digitalizador cria cada parte como um 'objeto' inteligente com suas prÃ³prias propriedades de ponto, direÃ§Ã£o, densidade e underlay.",
    "technicalDetails": "Adotada pelos principais softwares modernos baseados em objetos (Wilcom EMB, Hatch, Brother PE-Design, Bernina). Permite redimensionar, alterar tipo de ponto e mudar propriedades a qualquer momento sem perder a integridade geomÃ©trica.",
    "construction": [
      "Objeto vetorial fechado (Ã¡rea de preenchimento)",
      "Objeto vetorial aberto (linha de contorno / ponto corrido)",
      "Objeto de coluna (largura variÃ¡vel em satin)",
      "Lista sequencial de objetos (Object List)"
    ],
    "howItWorks": [
      "1. O desenho Ã© dividido mentalmente em suas partes constituintes.",
      "2. Cada parte Ã© traÃ§ada como um objeto independente no software.",
      "3. Cada objeto recebe parÃ¢metros especÃ­ficos adequados Ã  sua funÃ§Ã£o.",
      "4. Os objetos sÃ£o ordenados na lista de sequÃªncia para criar o fluxo de costura."
    ],
    "mainTypes": [
      "Objetos de Preenchimento (Tatami, PadrÃµes)",
      "Objetos de Coluna (Ponto Cheio com Ã¢ngulo dinÃ¢mico)",
      "Objetos de Linha (Ponto Corrido simples, triplo ou decorativo)",
      "Objetos de ApliquÃª Automatizado"
    ],
    "advantages": [
      "âœ” Flexibilidade total para editar qualquer parte do desenho a qualquer momento",
      "âœ” Redimensionamento perfeito com recÃ¡lculo automÃ¡tico de densidade",
      "âœ” Facilidade para reordenar a sequÃªncia de costura arrastando objetos na lista"
    ],
    "limitations": [
      "Exige que o arquivo seja salvo no formato proprietÃ¡rio original do software (ex: .EMB) para manter as propriedades de objeto editÃ¡veis."
    ],
    "commonErrors": [
      "â�Œ Criar uma Ãºnica Ã¡rea enorme tentando reproduzir vÃ¡rios elementos diferentes juntos.",
      "â�Œ Salvar a matriz apenas em formato de mÃ¡quina (.DST/.PES) e perder os dados vetoriais dos objetos.",
      "â�Œ Esquecer de ajustar a sobreposiÃ§Ã£o entre objetos que se encostam."
    ],
    "voceSabia": "Quando vocÃª exporta uma matriz para formato de mÃ¡quina (.DST ou .PES), todos os objetos vetoriais sÃ£o 'achatados' em coordenadas brutas de pontos, dificultando ediÃ§Ãµes complexas posteriores!",
    "curiosidadeTecnica": "Trabalhar por objetos permite que o software recalcule automaticamente a quantidade de pontos quando a matriz Ã© ampliada ou reduzida em atÃ© 20%.",
    "dicaArtrelados": "Quando olhar para uma imagem, tente 'quebrÃ¡-la' mentalmente em pequenas peÃ§as! Pergunte: 'Quais objetos individuais eu consigo identificar aqui?' Essa habilidade Ã© a base de todo o raciocÃ­nio da digitalizaÃ§Ã£o!",
    "applications": [
      "ConstruÃ§Ã£o modular de todas as matrizes modernas em softwares profissionais."
    ],
    "troubleshootingTips": [
      "Sempre guarde uma cÃ³pia mestra no formato de objeto (.EMB, .JAN, .ART) antes de gerar o arquivo final de mÃ¡quina."
    ],
    "relatedTerms": [
      "DigitalizaÃ§Ã£o Manual",
      "SequÃªncia de Pontos",
      "SobreposiÃ§Ã£o",
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
    "origin": "Do latim digitalis (digital) e objectum (aquilo que estÃ¡ diante dos olhos, elemento delimitado, de objicere). Paradigma central da computaÃ§Ã£o grÃ¡fica moderna orientada a objetos vetoriais.",
    "beginnerExplanation": "DigitalizaÃ§Ã£o por objetos significa que vocÃª constrÃ³i o desenho dividindo-o em 'peÃ§as de Lego' inteligentes (cada folha Ã© um objeto, cada letra Ã© outro objeto). Assim, se vocÃª quiser mudar o tamanho ou o tipo de ponto depois, o software recalcula tudo automaticamente sem estragar a matriz!",
    "practicalExercise": "No seu software, selecione uma folha desenhada como objeto vetorial de ponto cheio (Satin): mude o tamanho dela aumentando em 50%. Observe como o software aumentou a quantidade de pontos automaticamente mantendo a mesma densidade perfeita, graÃ§as Ã  digitalizaÃ§Ã£o por objetos!",
    "quickSummary": "DigitalizaÃ§Ã£o por objetos Ã© a modelagem de matrizes atravÃ©s de elementos vetoriais paramÃ©tricos que preservam propriedades editÃ¡veis de pontos e formas.",
    "bibliographicReferences": [
      "WILCOM. Object-Based Embroidery Design Architecture. Sydney: Wilcom, 2022.",
      "EMBIRD. Working with Vector Objects and Properties in Digitizing. Bratislava, 2023.",
      "ARTRELADOS. O Poder dos Objetos Vetoriais na CriaÃ§Ã£o e Redimensionamento. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-028-desenho-de-matriz",
    "code": "D-028",
    "term": "Desenho de Matriz",
    "level": "Fundamental ðŸŸ¢",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim de- + signare (marcar, traÃ§ar contornos grÃ¡ficos) e do latim matrix, -icis (molde gerador). Na engenharia mecatrÃ´nica tÃªxtil, refere-se Ã  composiÃ§Ã£o estruturada e vetorial do arquivo digital de bordado.",
    "summary": "Processo e resultado do traÃ§ado digital vetorial e da programaÃ§Ã£o de pontos que compÃµem uma matriz de bordado computadorizado.",
    "definition": "O desenho de matriz Ã© a concepÃ§Ã£o grÃ¡fica, estruturaÃ§Ã£o geomÃ©trica e conversÃ£o de uma imagem ou conceito visual em objetos vetoriais de bordado. Compreende a definiÃ§Ã£o de tipos de pontos (tatami, satin, ponto corrido), Ã¢ngulos de inclinaÃ§Ã£o, densidades, camadas de base (underlay) e trajetÃ³rias de costura que orientam o cabeÃ§ote e o pantÃ³grafo da mÃ¡quina durante o ciclo de produÃ§Ã£o.",
    "technicalDetails": "Estruturado em entidades vetoriais paramÃ©tricas fechadas e abertas (polÃ­gonos BÃ©zier) com atributos numÃ©ricos de densidade (0.35mm a 0.50mm), comprimentos de ponto (1.5mm a 7.0mm), compensaÃ§Ã£o de repuxo (+0.30mm a +0.50mm) e comandos de mÃ¡quina embutidos (Trim, Stop, Color Change).",
    "howItWorks": [
      "1. A imagem de referÃªncia (PNG, JPG ou vetor SVG) Ã© importada para a Ã¡rea de trabalho do software de bordado.",
      "2. O designer desenha os objetos por camadas, do fundo para os detalhes superficiais, usando ferramentas de contorno e preenchimento.",
      "3. SÃ£o parametrizados os tipos de ponto, densidades, underlays e Ã¢ngulos de reflexÃ£o de luz.",
      "4. O software calcula o caminho de costura (Stitch Path) e gera as coordenadas binÃ¡rias prontas para envio Ã  mÃ¡quina."
    ],
    "beginnerExplanation": "Ã‰ a criaÃ§Ã£o do arquivo do bordado no computador: Ã© quando vocÃª transforma uma foto, desenho ou logo em pontinhos que a mÃ¡quina de bordar consegue entender e costurar perfeitamente no tecido.",
    "applications": [
      "DigitalizaÃ§Ã£o de logotipos empresariais para uniformes",
      "CriaÃ§Ã£o de matrizes infantis de aplique e ponto cheio",
      "Desenho de brasÃµes, arabescos e monogramas para enxovais",
      "ElaboraÃ§Ã£o de matrizes ricas com relevo 3D e efeitos de sombreamento"
    ],
    "commonErrors": [
      "Desenhar a matriz no mesmo sentido de estiramento do tecido sem aplicar compensaÃ§Ã£o de repuxo, deformando o formato",
      "Sobrepor camadas densas sobrepostas no mesmo lugar sem remover pontos ocultos, criando placas duras",
      "NÃ£o planejar a ordem de costura das cores, gerando dezenas de trocas de linha desnecessÃ¡rias"
    ],
    "troubleshootingTips": [
      "Sempre utilize o simulador em tempo real (Stitch Player) do software para inspecionar o desenho antes de levar para a mÃ¡quina",
      "Mantenha a regra de desenhar do centro para fora e de baixo para cima para evitar o empurrÃ£o do tecido",
      "Agrupe partes da mesma cor para reduzir as paradas de troca de carretel"
    ],
    "dicaArtrelados": "Ao desenhar uma matriz, lembre-se de que a agulha nÃ£o pinta como um pincel: ela puxa e estica o tecido! Sempre adicione uma folguinha de sobreposiÃ§Ã£o (overlap) de 1.0mm a 1.5mm entre os objetos vizinhos para os contornos nÃ£o se separarem na hora de bordar.",
    "voceSabia": "Na era pioneira do bordado mecÃ¢nico nos anos 1960, o 'desenho de matriz' era feito Ã  mÃ£o em mesas digitalizadoras do tamanho de mesas de bilhar, onde o operador perfurava cartÃµes Jacquard com uma agulha manual a cada salto de ponto.",
    "practicalExercise": "Importe uma imagem simples de uma estrela no seu software: desenhe o preenchimento em tatami com Ã¢ngulo a 45Â°, adicione um underlay leve e coloque uma costura de contorno em satin de 2.0mm. Borde no tecido de teste e veja como o seu desenho de matriz ganha vida e textura!",
    "quickSummary": "Processo de criaÃ§Ã£o e vetorizaÃ§Ã£o grÃ¡fica do arquivo digital de bordado que traduz imagens em trajetÃ³rias de pontos executÃ¡veis.",
    "relatedTerms": [
      "Bordado Digitalizado",
      "CorreÃ§Ã£o de Pontos",
      "CompensaÃ§Ã£o de Empurrar e Puxar",
      "Caminho de Costura"
    ],
    "tags": [
      "desenho",
      "matriz",
      "digitalizaÃ§Ã£o",
      "vetores",
      "software",
      "programaÃ§Ã£o"
    ],
    "bibliographicReferences": [
      "WILCOM. Embroidery Studio Digitizing Fundamentals & Design Architecture. Sydney: Wilcom, 2022.",
      "KRAUSZ, P. The Art of Embroidery Digitizing: From Graphic Concept to Master Stitch. New York, 2021.",
      "ARTRELADOS. Fundamentos do Desenho de Matrizes: Estrutura, Camadas e Encaixes Perfeitos. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-029-deslocamento-de-origem",
    "code": "D-029",
    "term": "Deslocamento de Origem",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "OperaÃ§Ã£o da MÃ¡quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dis- + locare (mudar de lugar, afastar do sÃ­tio original) e origo, -inis (ponto de partida, nascimento). PrincÃ­pio fundamental das coordenadas cartesianas relativas em sistemas mecatrÃ´nicos CNC.",
    "summary": "Ajuste milimÃ©trico das coordenadas espaciais do ponto zero inicial do bastidor para posicionar o bordado em locais especÃ­ficos da peÃ§a.",
    "definition": "O deslocamento de origem (ou ajuste de Offset / Zero Point Shift) Ã© o procedimento operacional realizado no painel de controle da mÃ¡quina de bordar ou no software para transladar o ponto inicial de referÃªncia (X:0, Y:0) do centro padrÃ£o do bastidor para uma posiÃ§Ã£o customizada no tecido, permitindo alinhar o bordado com marcaÃ§Ãµes fÃ­sicas, bolsos, listras, costuras prÃ©vias ou emendas de desenhos grandes.",
    "technicalDetails": "Executa a translaÃ§Ã£o vetorial nas coordenadas cartesianas relativas (delta X e delta Y com resoluÃ§Ã£o de 0.1mm). Bloqueia a execuÃ§Ã£o caso o deslocamento force a trajetÃ³ria para fora dos limites seguros da moldura do bastidor (limite de fim de curso / software limit switches).",
    "howItWorks": [
      "1. A peÃ§a Ã© colocada no bastidor com uma marcaÃ§Ã£o de cruz feita com giz ou caneta fantasma na posiÃ§Ã£o desejada do bordado.",
      "2. No painel da mÃ¡quina, o operador aciona as setas direcionais de movimentaÃ§Ã£o manual do carro nos eixos X e Y.",
      "3. A ponta da agulha (ou o ponto de laser de posicionamento) Ã© alinhada com o centro exato da cruz riscada no tecido.",
      "4. O operador pressiona a tecla 'Definir Origem' (Set Origin/Origin Shift), redefinindo a coordenada zero para aquela posiÃ§Ã£o.",
      "5. A funÃ§Ã£o de traÃ§ado de Ã¡rea (Trace) Ã© executada para confirmar que todo o perÃ­metro do desenho cabe dentro do bastidor sem bater a agulha no aro."
    ],
    "beginnerExplanation": "Ã‰ quando vocÃª usa as setinhas do painel da mÃ¡quina para andar com o bastidor e dizer: 'mÃ¡quina, nÃ£o comece no meiÃ£o do bastidor, comece exatamente aqui onde eu fiz este risco no tecido!'. Isso ajuda a bordar em cima de bolsinhos ou em cantos de toalhas sem errar a mira.",
    "applications": [
      "Posicionamento de monogramas no canto diagonal de toalhas de lavabo",
      "Bordados em bolsos prontos de camisas e jalecos",
      "Alinhamento de matrizes divididas em bastidores de mÃºltiplos estÃ¡gios (Giga Hoop)",
      "CentralizaÃ§Ã£o sobre recortes geomÃ©tricos ou brasÃµes prÃ©-impressos"
    ],
    "commonErrors": [
      "Deslocar a origem muito perto da borda plÃ¡stica do bastidor sem fazer o traÃ§ado de teste, provocando a colisÃ£o da agulha com o aro plÃ¡stico",
      "Esquecer de travar a nova origem no painel, fazendo a mÃ¡quina voltar ao centro absoluto no momento do primeiro ponto",
      "Fazer o deslocamento com a agulha abaixada dentro do tecido, entortando a barra de agulha e rasgando a peÃ§a"
    ],
    "troubleshootingTips": [
      "Sempre levante a agulha para a posiÃ§Ã£o mais alta (Top Dead Center) antes de movimentar os eixos X e Y no painel",
      "ApÃ³s qualquer deslocamento de origem, acione obrigatoriamente a funÃ§Ã£o 'Trace' (TraÃ§ado de PerÃ­metro)",
      "Se a mÃ¡quina emitir sinal sonoro de erro de limite, mova a origem alguns milÃ­metros de volta em direÃ§Ã£o ao centro do bastidor"
    ],
    "dicaArtrelados": "Para acertar a origem em bolsos ou cantos de toalhas de olhos fechados, use o laser de mira da mÃ¡quina ou abaixe a agulha suavemente girando o volante manual atÃ© a pontinha tocar exatamente no centro da cruzeta de giz: aperte 'Definir Origem' e o alinhamento fica cirÃºrgico!",
    "voceSabia": "Em mÃ¡quinas industriais de grande porte com mesas de 15 metros de comprimento, os operadores utilizam ponteiros laser cruzados de alta precisÃ£o para deslocar a origem dezenas de vezes por dia em rolos contÃ­nuos de tecido sem nunca precisar desmontar a peÃ§a do pantÃ³grafo.",
    "practicalExercise": "Risque uma pequena cruz com caneta que apaga com calor a 4cm do canto de um retalho de tecido colocado no bastidor: use as setas do painel da sua mÃ¡quina para levar a agulha atÃ© a marcaÃ§Ã£o, aperte 'Set Origin', execute o traÃ§ado de Ã¡rea e borde uma letra de 2cm. Veja como o bordado fica perfeitamente posicionado no local planejado!",
    "quickSummary": "TranslaÃ§Ã£o das coordenadas do ponto inicial (X:0, Y:0) para posicionar o bordado em regiÃµes especÃ­ficas do bastidor com precisÃ£o milimÃ©trica.",
    "relatedTerms": [
      "TraÃ§ado de Ã�rea",
      "Bastidor Virtual",
      "CentralizaÃ§Ã£o AutomÃ¡tica no Bastidor",
      "ConfiguraÃ§Ã£o da MÃ¡quina de Bordado"
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
      "ARTRELADOS. Posicionamento e Deslocamento de Origem sem Erros de Batida de Bastidor. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-030-digitalizacao-de-logotipo",
    "code": "D-030",
    "term": "DigitalizaÃ§Ã£o de Logotipo",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal feminina.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "Processo tÃ©cnico de adaptaÃ§Ã£o e transformaÃ§Ã£o de identidades visuais de marcas em matrizes de alta precisÃ£o.",
    "definition": "A digitalizaÃ§Ã£o de logotipo Ã© o processo tÃ©cnico e de design responsÃ¡vel por transformar a representaÃ§Ã£o grÃ¡fica de uma marca, sÃ­mbolo ou identidade corporativa em uma matriz de bordado eletrÃ´nico de alta qualidade. Esse processo nÃ£o consiste em simplesmente converter um arquivo de imagem (PNG ou JPG): exige interpretar a arte, simplificar detalhes minÃºsculos e reconstruÃ­-la na linguagem fÃ­sica de pontos, fios e tecidos.",
    "technicalDetails": "Envolve adequaÃ§Ã£o Ã  escala (versÃµes para peito de 8cm a 10cm vs costas de 25cm a 30cm), seleÃ§Ã£o de pontos para textos pequenos (mÃ­nimo de 4.5mm para Satin com linha 40 ou uso de linha fina 60), calibraÃ§Ã£o de compensaÃ§Ã£o de repuxo e compatibilizaÃ§Ã£o da paleta de cores da marca com os cÃ³digos de cones de poliÃ©ster.",
    "construction": [
      "AnÃ¡lise e vetorizaÃ§Ã£o limpa do logo",
      "AdaptaÃ§Ã£o de pequenos textos e slogans",
      "DefiniÃ§Ã£o da ordem de sobreposiÃ§Ã£o das cores",
      "CriaÃ§Ã£o de transpasses de seguranÃ§a (overlap)"
    ],
    "howItWorks": [
      "1. O digitalizador recebe o manual de marca ou vetor do cliente.",
      "2. Avalia a escala de aplicaÃ§Ã£o (camisa polo, bonÃ©, jaleco, jaqueta).",
      "3. Simplifica detalhes que desapareceriam na escala de bordado.",
      "4. Aplica pontos Tatami em fundos e Ponto Cheio nas letras e contornos.",
      "5. Realiza o teste prÃ¡tico no tecido definitivo do uniforme."
    ],
    "mainTypes": [
      "Logotipo para Peito / Camisa Polo (8cm a 10cm - foco em legibilidade)",
      "Logotipo para Costas / Jaqueta (20cm a 28cm - foco em leveza e baixo peso)",
      "Logotipo para BonÃ© Estruturado (Costura do centro para as bordas)",
      "Logotipo em Relevo 3D / EVA (Para marcas esportivas e bonÃ©s premium)"
    ],
    "advantages": [
      "âœ” Fidelidade rigorosa Ã  identidade corporativa do cliente",
      "âœ” Textos e contornos nÃ­tidos e perfeitamente legÃ­veis mesmo de longe",
      "âœ” Alta durabilidade em lavagens industriais frequentes de uniformes"
    ],
    "limitations": [
      "Logotipos com degradÃªs complexos ou textos com menos de 3.5mm exigem adaptaÃ§Ã£o ou simplificaÃ§Ã£o para viabilidade em bordado."
    ],
    "commonErrors": [
      "â�Œ Perguntar apenas 'qual Ã© o programa que converte o logo automaticamente?'.",
      "â�Œ Tentar reproduzir letras minÃºsculas sem engrossar as hastes ou simplificar o traÃ§o.",
      "â�Œ Usar a mesma matriz de peito de camisa para bordar em bonÃ©s ou toalhas."
    ],
    "voceSabia": "Um mesmo logotipo de empresa frequentemente precisa de 3 ou 4 versÃµes diferentes de matriz: uma para camiseta de malha, uma para camisa social de tricoline, uma para bonÃ© e outra para jaqueta grossa!",
    "curiosidadeTecnica": "Em logotipos com cÃ­rculos perfeitos, a compensaÃ§Ã£o de repuxo adiciona cerca de 0.4mm no eixo de traÃ§Ã£o para que o cÃ­rculo nÃ£o vire um formato oval apÃ³s o bordado sair do bastidor.",
    "dicaArtrelados": "Especial para quem atende clientes: nunca pergunte apenas 'qual Ã© o arquivo do logotipo?'. Pergunte sempre: 'onde, em qual tamanho e em qual tecido esse logotipo serÃ¡ bordado?' Essas trÃªs respostas mudam completamente a estrutura da matriz!",
    "applications": [
      "Uniformes empresariais, jalecos mÃ©dicos, camisas polo, bonÃ©s corporativos e brindes promocionais."
    ],
    "troubleshootingTips": [
      "Para bordar slogans com letras de 4mm a 5mm, utilize agulha 65/9 e linha de bordado fina TÃ­tulo 60 com ponto corrido duplo ou satin leve."
    ],
    "relatedTerms": [
      "DigitalizaÃ§Ã£o Manual",
      "Desenho Vetorial",
      "CompensaÃ§Ã£o de PuxÃ£o",
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
    "origin": "Do grego logos (palavra, conceito) e typos (marca, figura gravada), e do latim digitalis. Ramo comercial mais lucrativo e tÃ©cnico do bordado industrial contemporÃ¢neo.",
    "beginnerExplanation": "Ã‰ a criaÃ§Ã£o de matrizes para marcas e empresas (em camisas polo, bonÃ©s, jalecos e uniformes). Exige muito capricho porque as letras precisam ficar retinhas, legÃ­veis e com as cores fiÃ©is Ã  marca do cliente.",
    "practicalExercise": "Pegue um logotipo corporativo que contenha um sÃ­mbolo grande e um texto pequeno embaixo: digitalize o sÃ­mbolo primeiro e depois as letras, garantindo que letras com menos de 5mm usem ponto cheio com compensaÃ§Ã£o de repuxo (pull compensation) calibrada em 0.35mm. Borde em uma camisa polo piquÃª com entretela de malha!",
    "quickSummary": "DigitalizaÃ§Ã£o de logotipo Ã© a programaÃ§Ã£o tÃ©cnica de identidades visuais corporativas, exigindo alta precisÃ£o dimensional e mÃ¡xima legibilidade tipogrÃ¡fica.",
    "bibliographicReferences": [
      "NNEP. Commercial Logo Embroidery: Quality Standards & Lettering. Canton, 2022.",
      "BLANCO, R. Ponchado de Logotipos Corporativos y Marcas. Madri: Ediciones TÃ©cnicas, 2021.",
      "ARTRELADOS. Como Bordar Logotipos Perfeitos em Uniformes e PiquÃª. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-031-desenho-vetorial",
    "code": "D-031",
    "term": "Desenho Vetorial",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal masculina.",
    "category": "Design & CriaÃ§Ã£o",
    "summary": "RepresentaÃ§Ã£o grÃ¡fica baseada em fÃ³rmulas matemÃ¡ticas e curvas que permite ampliaÃ§Ã£o sem perda de definiÃ§Ã£o.",
    "definition": "Um desenho vetorial Ã© uma representaÃ§Ã£o grÃ¡fica construÃ­da por meio de elementos matemÃ¡ticos como linhas, curvas de BÃ©zier, polÃ­gonos e pontos de controle (nÃ³s), em vez de ser formado por uma grade fixa de pixels. Isso permite que a imagem seja redimensionada para qualquer tamanho sem perder a nitidez e sem apresentar o efeito serrilhado tÃ­pico de imagens rasterizadas (JPG/PNG). No bordado, serve como a base grÃ¡fica ideal para a digitalizaÃ§Ã£o.",
    "technicalDetails": "Formatos vetoriais padrÃ£o incluem SVG, AI, EPS, CDR e PDF vetorial. Ao contrÃ¡rio de uma imagem rasterizada que possui resoluÃ§Ã£o fixa em DPI, o vetor possui definiÃ§Ã£o geomÃ©trica infinita, facilitando o traÃ§ado exato dos objetos de bordado.",
    "construction": [
      "Pontos de ancoragem e nÃ³s de controle",
      "Curvas matemÃ¡ticas de BÃ©zier",
      "Linhas de contorno e preenchimentos vetoriais",
      "Camadas de objetos agrupados"
    ],
    "howItWorks": [
      "1. O designer cria ou recebe a arte em formato vetorial.",
      "2. As curvas sÃ£o manipuladas e simplificadas para eliminar nÃ³s excessivos.",
      "3. O software de bordado importa o vetor e utiliza seus nÃ³s como guias diretas para gerar pontos."
    ],
    "mainTypes": [
      "Vetor SVG (Formato aberto universal)",
      "Vetor AI / EPS (Adobe Illustrator)",
      "Vetor CDR (CorelDRAW - amplamente integrado com softwares de bordado)"
    ],
    "advantages": [
      "âœ” Contornos ultra nÃ­tidos e formas perfeitamente definidas",
      "âœ” Permite redimensionar a arte livremente antes de gerar a matriz",
      "âœ” Facilita a separaÃ§Ã£o automÃ¡tica ou manual de cores e objetos"
    ],
    "limitations": [
      "Um arquivo vetorial NÃƒO Ã© uma matriz de bordado: ele define apenas a forma visual, nÃ£o contendo informaÃ§Ãµes de pontos, direÃ§Ãµes, underlay ou cortes."
    ],
    "commonErrors": [
      "â�Œ Achar que salvar um arquivo como .SVG jÃ¡ permite colocÃ¡-lo no pendrive da mÃ¡quina de bordar.",
      "â�Œ Ampliar o vetor em 300% e achar que a matriz de pontos gerada no tamanho original continuarÃ¡ funcionando sem ajustes.",
      "â�Œ NÃ£o simplificar nÃ³s desnecessÃ¡rios antes de importar no software de bordado."
    ],
    "voceSabia": "O CorelDRAW Ã© o motor grÃ¡fico por trÃ¡s do software Wilcom EmbroideryStudio: vocÃª desenha em vetor de um lado e o programa gera os pontos de bordado em tempo real do outro!",
    "curiosidadeTecnica": "A sequÃªncia recomendada para iniciantes Ã©: 1. Imagem (Ideia visual)   2. Vetor (OrganizaÃ§Ã£o geomÃ©trica de formas)   3. Matriz (TraduÃ§Ã£o fÃ­sica em pontos de linha).",
    "dicaArtrelados": "O vetor Ã© o desenho organizado; a matriz Ã© o desenho traduzido para a linguagem da mÃ¡quina! E guarde a regra de ouro: NÃ£o tente fazer a mÃ¡quina bordar tudo o que seus olhos conseguem ver no vetor. Escolha o que realmente precisa e consegue aparecer com qualidade no tecido!",
    "applications": [
      "Base essencial para digitalizaÃ§Ã£o de logotipos, brasÃµes, mascotes e tipografias."
    ],
    "troubleshootingTips": [
      "Se o software de bordado travar ao importar um vetor, use a ferramenta de 'Simplificar Curvas' no Corel ou Illustrator para reduzir a quantidade de nÃ³s."
    ],
    "relatedTerms": [
      "VetorizaÃ§Ã£o",
      "Desenho de Bordado",
      "DigitalizaÃ§Ã£o de Bordado",
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
    "origin": "Do latim deexsignare (desenhar) e vector, -oris (aquele que transporta, condutor geomÃ©trico, de vehere, transportar). Arte grÃ¡fica baseada em fÃ³rmulas matemÃ¡ticas e curvas de BÃ©zier.",
    "beginnerExplanation": "Desenho vetorial Ã© uma imagem feita por linhas e curvas matemÃ¡ticas no computador (em formatos como SVG, CDR ou AI). Ao contrÃ¡rio de uma foto comum que fica cheia de quadradinhos (pixels) quando vocÃª amplia, o vetor nunca perde a qualidade nem a nitidez!",
    "practicalExercise": "Abra um arquivo em vetor no seu computador e aumente o zoom para 800%: repare como as linhas continuam perfeitamente lisinhas e afiadas. Agora faÃ§a o mesmo com uma foto JPG: veja como as bordas ficam embaÃ§adas. Por isso o vetor Ã© o melhor amigo do digitalizador de bordado!",
    "quickSummary": "Desenho vetorial Ã© a representaÃ§Ã£o grÃ¡fica composta por coordenadas matemÃ¡ticas que permite ampliaÃ§Ãµes infinitas sem perda de definiÃ§Ã£o para o bordado.",
    "bibliographicReferences": [
      "ADOBE. Illustrator Vector Graphics Reference Manual. San Jose: Adobe Press, 2022.",
      "CORELDRAW. Working with BÃ©zier Curves & Vector Shapes. Ottawa: Alludo, 2023.",
      "ARTRELADOS. Guia de Vetores Essenciais para Bordadeiras e Programadores. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-032-definicao-de-sequencia",
    "code": "D-032",
    "term": "DefiniÃ§Ã£o de SequÃªncia",
    "level": "Fundamental ðŸŸ¢",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim definitio, -onis (determinaÃ§Ã£o exata de limites) e sequentia (continuidade, sÃ©rie ordenada de acontecimentos, de sequi, seguir). Estrutura lÃ³gica primordial da arquitetura de linguagens de bordado.",
    "summary": "Planejamento e ordenaÃ§Ã£o lÃ³gica cronolÃ³gica dos objetos e cores na matriz para otimizar o tempo e garantir o assentamento do tecido.",
    "definition": "A definiÃ§Ã£o de sequÃªncia (ou ordenaÃ§Ã£o de objetos / stitch sequencing) Ã© a estruturaÃ§Ã£o cronolÃ³gica da ordem exata em que cada elemento, camada e cor do desenho serÃ¡ bordado pela mÃ¡quina. O planejamento correto da sequÃªncia minimiza o nÃºmero de trocas de carretel de linha, elimina cortes desnecessÃ¡rios e respeita a fÃ­sica de dilataÃ§Ã£o do tecido, bordando do centro para as bordas e do plano de fundo para os detalhes superiores.",
    "technicalDetails": "Gerenciada atravÃ©s da lista de objetos (Sequence Manager / Color-Object List) no software de digitalizaÃ§Ã£o. Utiliza algoritmos de agrupamento por cor (Color Sorting), ramificaÃ§Ã£o automÃ¡tica (Branching) e controle de camadas de sobreposiÃ§Ã£o para evitar repuxos assimÃ©tricos.",
    "howItWorks": [
      "1. O programador abre a Ã¡rvore de sequÃªncia do software e analisa todos os objetos do desenho.",
      "2. As costuras de alinhave e underlays sÃ£o configuradas para serem executadas em primeiro lugar.",
      "3. Os objetos de fundo (tatami grande) sÃ£o ordenados antes dos detalhes e textos que repousam por cima.",
      "4. Os contornos perimÃ©tricos e pontos cheios finais sÃ£o posicionados como os Ãºltimos itens da lista.",
      "5. O comando de reordenaÃ§Ã£o por cores agrupa elementos da mesma tonalidade, reduzindo as trocas de linha na mÃ¡quina."
    ],
    "beginnerExplanation": "Ã‰ a organizaÃ§Ã£o da 'fila' de costura: vocÃª decide qual parte do desenho a mÃ¡quina vai bordar primeiro, qual vem no meio e qual fica por Ãºltimo. Fazer na ordem certa Ã© o que garante que o fundo fique por baixo e os contornos e olhinhos fiquem certinhos por cima!",
    "applications": [
      "Montagem de apliques (ordem: marcaÃ§Ã£o   fixaÃ§Ã£o   acabamento)",
      "ReduÃ§Ã£o do tempo total de bordado atravÃ©s da otimizaÃ§Ã£o de trocas de cor",
      "Controle de repuxo em tecidos elÃ¡sticos bordando sempre de dentro para fora",
      "SobreposiÃ§Ã£o correta de sombras, degradÃªs e contornos em personagens"
    ],
    "commonErrors": [
      "Bordar o contorno fino preto antes do preenchimento colorido, fazendo o preenchimento cobrir o contorno ou empurrÃ¡-lo para fora de posiÃ§Ã£o",
      "Deixar objetos da mesma cor espalhados pela sequÃªncia, obrigando a mÃ¡quina a trocar a linha vÃ¡rias vezes desnecessariamente",
      "Bordar das bordas para o centro, empurrando uma bolha de tecido para o meio do desenho"
    ],
    "troubleshootingTips": [
      "Use a regra clÃ¡ssica da engenharia de bordado: 1Âº Underlay   2Âº Fundo   3Âº Detalhes mÃ©dios   4Âº Contornos finais",
      "Acione a ferramenta 'Color Sort' (Agrupar Cores) no software antes de exportar o arquivo final",
      "Arraste os objetos na barra lateral de sequÃªncia do software para corrigir a ordem visual com facilidade"
    ],
    "dicaArtrelados": "Pense na definiÃ§Ã£o de sequÃªncia como vestir uma pessoa: primeiro a roupa de baixo (underlay), depois a camisa (preenchimento), depois a jaqueta (detalhes) e por Ãºltimo o cinto e os botÃµes (contornos)! Se vocÃª tentar colocar o cinto antes da calÃ§a, o resultado fica um desastre!",
    "voceSabia": "Uma matriz com sequÃªncia mal planejada pode demorar atÃ© o dobro do tempo para bordar devido aos ciclos repetidos de parada, corte de linha, troca manual de cone e reinicializaÃ§Ã£o do cabeÃ§ote.",
    "practicalExercise": "Abra uma matriz de flor com pÃ©talas e miolo: abra a lista de objetos do software e observe a sequÃªncia. Reordene para que a mÃ¡quina borde primeiro todas as pÃ©talas de fundo e deixe o miolo amarelo com relevo para o final. Simule no player de pontos e veja a harmonia da ordem de costura!",
    "quickSummary": "OrdenaÃ§Ã£o cronolÃ³gica de objetos e cores na matriz que garante sobreposiÃ§Ã£o correta, reduÃ§Ã£o de paradas e estabilidade do tecido.",
    "relatedTerms": [
      "Camada de Bordado",
      "Caminho de Costura",
      "Corte AutomÃ¡tico de Linha",
      "Underlay"
    ],
    "tags": [
      "sequÃªncia",
      "ordem",
      "camadas",
      "otimizaÃ§Ã£o",
      "software",
      "troca de cor"
    ],
    "bibliographicReferences": [
      "WILCOM. Sequence Optimization, Color Sorting & Branching Logic. Sydney: Wilcom, 2022.",
      "DEVERSON, D. Layering and Sequencing for Multi-Color Commercial Embroidery. London, 2021.",
      "ARTRELADOS. OtimizaÃ§Ã£o de SequÃªncia de Matrizes: Como Reduzir Minutos Preciosos na ProduÃ§Ã£o. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-033-detalhamento-da-matriz",
    "code": "D-033",
    "term": "Detalhamento da Matriz",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "LocuÃ§Ã£o nominal masculina.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "NÃ­vel de informaÃ§Ã£o, refinamento e quantidade de microelementos aplicados na construÃ§Ã£o de um bordado.",
    "definition": "O detalhamento da matriz corresponde ao nÃ­vel de informaÃ§Ã£o, precisÃ£o visual e quantidade de elementos minuciosos utilizados na construÃ§Ã£o de um desenho para bordado. Uma matriz pode variar desde um estilo minimalista atÃ© uma estrutura altamente complexa e realista. No entanto, no bordado computadorizado vigora a lei fÃ­sica dos materiais: mais detalhes nÃ£o significam necessariamente um bordado melhor.",
    "technicalDetails": "O limite de detalhamento Ã© determinado pela fÃ­sica da agulha (diÃ¢metro de 0.70mm a 0.80mm), da espessura do fio (TÃ­tulo 40 = ~0.38mm) e da estrutura das tramas do tecido. Tentar colocar microdetalhes abaixo de 1mm causa acÃºmulo de linha e perda de legibilidade.",
    "construction": [
      "Hierarquia visual de elementos principais e secundÃ¡rios",
      "Filtro de microdetalhes e linhas finas",
      "Escala proporcional de aplicaÃ§Ã£o",
      "AdequaÃ§Ã£o ao relevo e textura do tecido"
    ],
    "howItWorks": [
      "1. O digitalizador analisa a complexidade da arte original.",
      "2. Identifica os elementos essenciais que garantem o reconhecimento do desenho.",
      "3. Elimina ou funde detalhes minÃºsculos que virariam borrÃµes no tecido.",
      "4. Aplica pontos com precisÃ£o nas Ã¡reas de maior impacto visual."
    ],
    "mainTypes": [
      "Detalhamento Minimalista / Alto Contraste (Ideal para marcas e uniformes)",
      "Detalhamento Moderado (PadrÃ£o para ilustraÃ§Ãµes e desenhos infantis)",
      "Detalhamento Realista / AvanÃ§ado (Para retratos, pelagens e arte sacra em grandes formatos)"
    ],
    "advantages": [
      "âœ” Cria bordados nÃ­tidos, elegantes e de fÃ¡cil reconhecimento visual",
      "âœ” MantÃ©m o bordado leve, confortÃ¡vel e flexÃ­vel na peÃ§a de roupa",
      "âœ” Otimiza o tempo de mÃ¡quina e evita quebras repetitivas de agulha"
    ],
    "limitations": [
      "Bordados pequenos (abaixo de 5cm) exigem simplificaÃ§Ã£o drÃ¡stica do detalhamento para manter a legibilidade."
    ],
    "commonErrors": [
      "â�Œ Tentar reproduzir cada fio de cabelo ou ruga de uma foto em um bordado de bolso de 8cm.",
      "â�Œ Aumentar a densidade na tentativa de fazer microdetalhes aparecerem.",
      "â�Œ Ignorar que tecidos felpudos (toalhas) engolem e escondem pequenos detalhes."
    ],
    "voceSabia": "A tÃ©cnica de simplificaÃ§Ã£o inteligente Ã© a maior virtude de um grande digitalizador: saber o que NÃƒO bordar Ã© tÃ£o importante quanto saber o que bordar!",
    "curiosidadeTecnica": "Em desenhos com muitos detalhes, mudar para agulha fina 65/9 e linha de bordado TÃ­tulo 60 (mais fina que a convencional) permite aumentar o detalhamento em cerca de 25%.",
    "dicaArtrelados": "No bordado, simplificar nÃ£o significa empobrecer! Ã€s vezes, simplificar e limpar o desenho Ã© justamente o segredo que permite que o bordado fique incrivelmente elegante, nÃ­tido e profissional.",
    "applications": [
      "AdaptaÃ§Ã£o de fotografias para bordado, escudos complexos, caricaturas e brasÃµes."
    ],
    "troubleshootingTips": [
      "Se os detalhes de um rosto bordado ficarem irreconhecÃ­veis, elimine as sombras intermediÃ¡rias e mantenha apenas os traÃ§os de contorno principais."
    ],
    "relatedTerms": [
      "DefiniÃ§Ã£o do Bordado",
      "DigitalizaÃ§Ã£o de Logotipo",
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
    "origin": "Do francÃªs dÃ©tailler (cortar em pedaÃ§os miÃºdos, examinar minuciosamente, de dÃ©- + tailler, cortar) e do latim matrix (molde gerador).",
    "beginnerExplanation": "Detalhamento da matriz Ã© o ajuste fino de cada minÃºsculo detalhe do bordado: acertar os olhos de um personagem, criar fios de cabelo finos, fazer brilhos nas folhas e garantir que tudo fique nÃ­tido sem criar uma montanha grossa de linha.",
    "practicalExercise": "Borde o rostinho de um ursinho de pelÃºcia: para o focinho e olhos, use uma agulha mais fina (65/9 ou 70/10) e linha tÃ­tulo 60 para os microdetalhes pretos. Veja como os detalhes ganham uma nitidez impressionante que encanta os clientes de enxoval!",
    "quickSummary": "Detalhamento da matriz Ã© o refinamento tÃ©cnico e artÃ­stico dos microelementos do bordado para garantir nitidez, expressividade e acabamento superior.",
    "bibliographicReferences": [
      "NICOLAS, C. Micro-Detailing and High-Definition Machine Embroidery. Paris, 2022.",
      "MADEIRA. Specialty Threads (40wt vs 60wt) for Fine Lettering and Details. Freiburg, 2023.",
      "ARTRELADOS. Segredos do Detalhamento e Linhas Finas no Bordado Infantil. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-034-direcao-de-preenchimento",
    "code": "D-034",
    "term": "DireÃ§Ã£o de Preenchimento",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal feminina.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "OrientaÃ§Ã£o angular predominante em que os pontos sÃ£o distribuÃ­dos para cobrir Ã¡reas sÃ³lidas da matriz.",
    "definition": "A direÃ§Ã£o de preenchimento Ã© a orientaÃ§Ã£o angular predominante na qual as passagens de pontos sÃ£o distribuÃ­das dentro de uma Ã¡rea sÃ³lida ou fechada da matriz de bordado (como em blocos de Ponto Tatami ou preenchimentos complexos). Essa escolha define para que lado as linhas seguirÃ£o (horizontal, vertical, diagonal ou curvilÃ­nea), alterando drasticamente o reflexo de luz, a textura, a rigidez e as forÃ§as de repuxamento sobre o tecido.",
    "technicalDetails": "Configurada em graus no software. Em grandes Ã¡reas de preenchimento, Ã¢ngulos diagonais a 45Â° ou 135Â° sÃ£o preferidos porque distribuem as forÃ§as de traÃ§Ã£o igualmente entre os fios de urdume e trama do tecido plano.",
    "construction": [
      "Linha de Ã¢ngulo de preenchimento",
      "Camada de underlay posicionada a 90Â° de suporte",
      "Deslocamento alternado de passagens",
      "CompensaÃ§Ã£o de encolhimento paralela ao Ã¢ngulo"
    ],
    "howItWorks": [
      "1. O programador define o Ã¢ngulo de inclinaÃ§Ã£o dentro do polÃ­gono vetorial.",
      "2. O software traÃ§a as passagens de agulha paralelas a esse eixo.",
      "3. A linha de poliÃ©ster reflete a iluminaÃ§Ã£o ambiente conforme a orientaÃ§Ã£o das fibras.",
      "4. Dois objetos vizinhos com direÃ§Ãµes opostas criam contraste nÃ­tido de planos."
    ],
    "mainTypes": [
      "Preenchimento Diagonal (45Â° / 135Â° - PadrÃ£o universal mais estÃ¡vel)",
      "Preenchimento Horizontal (0Â° / 180Â°)",
      "Preenchimento Vertical (90Â° / 270Â°)",
      "Preenchimento com DireÃ§Ãµes Cruzadas (Para criar efeito de xadrez ou textura de tecido)"
    ],
    "advantages": [
      "âœ” Cria contrastes visuais ricos e separaÃ§Ã£o de planos com a mesma cor de linha",
      "âœ” Evita deformaÃ§Ãµes excessivas ao equilibrar a traÃ§Ã£o no tecido",
      "âœ” Proporciona acabamento liso e homogÃªneo com brilho sedoso"
    ],
    "limitations": [
      "Preenchimentos extensos com pontos no mesmo sentido das tramas do tecido podem afundar e perder cobertura."
    ],
    "commonErrors": [
      "â�Œ Utilizar exatamente a mesma direÃ§Ã£o em todos os preenchimentos da matriz, deixando o desenho sem dinamismo.",
      "â�Œ Escolher a direÃ§Ã£o sem observar o sentido da forma orgÃ¢nica (ex: bordar uma folha na transversal pura).",
      "â�Œ Alinhar o preenchimento na horizontal exata sobre malhas muito elÃ¡sticas."
    ],
    "voceSabia": "VocÃª pode bordar uma bandeira xadrez usando apenas UMA Ãºnica cor de linha branca: basta programar os quadrados alternando a direÃ§Ã£o de preenchimento entre 45Â° e 135Â°!",
    "curiosidadeTecnica": "DireÃ§Ã£o de preenchimento Ã© a orientaÃ§Ã£o dos pontos de cobertura; o underlay de base deve ser sempre programado em Ã¢ngulo cruzado (perpendicular ou a 60Â°) para criar uma grade estrutural que trava o tecido.",
    "dicaArtrelados": "NÃ£o pense na direÃ§Ã£o do ponto apenas como uma simples seta: pense nela como o 'sentido' da linha dentro do desenho! Quando vocÃª aprende a enxergar e direcionar a linha, suas matrizes ganham vida e volume!",
    "applications": [
      "Fundos de brasÃµes, preenchimento de personagens, folhas, pÃ©talas e Ã¡reas geomÃ©tricas."
    ],
    "troubleshootingTips": [
      "Se uma Ã¡rea grande de preenchimento estiver repuxando o tecido para dentro, mude a direÃ§Ã£o de 0Â° para 45Â° e aumente a compensaÃ§Ã£o de repuxo para 0.35mm."
    ],
    "relatedTerms": [
      "DireÃ§Ã£o do Ponto",
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
    "origin": "Do latim directio (direÃ§Ã£o) e do latim vulgar implere (encher, completar um espaÃ§o vazio).",
    "beginnerExplanation": "DireÃ§Ã£o de preenchimento Ã© o Ã¢ngulo em que os pontos correm dentro de uma Ã¡rea grande (como um cÃ­rculo, um coraÃ§Ã£o ou uma letra grande). Mudar esse Ã¢ngulo ajuda a evitar que o tecido encolha e dÃ¡ vida e movimento ao desenho.",
    "practicalExercise": "Em um coraÃ§Ã£o dividido ao meio por uma linha central, preencha o lado esquerdo com pontos a 45Â° e o lado direito com pontos a 135Â°. Borde em tecido vermelho: veja como o coraÃ§Ã£o parece ter duas metades tridimensionais que se encontram no meio pelo jogo de luz!",
    "quickSummary": "DireÃ§Ã£o de preenchimento Ã© a inclinaÃ§Ã£o angular aplicada aos pontos de cobertura de grandes Ã¡reas para otimizar estabilidade e reflexÃ£o de luz.",
    "bibliographicReferences": [
      "WILCOM. Fill Stitch Directions and Fabric Stress Management. Sydney, 2022.",
      "KRAUSZ, P. Fill Stitch Engineering and Directional Aesthetics. New York, 2021.",
      "ARTRELADOS. Ã‚ngulos de Preenchimento: EquilÃ­brio TÃªxtil e EstÃ©tica Visual. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-035-distancia-de-salto",
    "code": "D-035",
    "term": "DistÃ¢ncia de Salto (Jump Distance)",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal feminina.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "EspaÃ§o percorrido pelo bastidor entre dois pontos sem formaÃ§Ã£o de costura naquele trecho.",
    "definition": "A distÃ¢ncia de salto (Jump Distance) Ã© o espaÃ§o percorrido pela mÃ¡quina entre dois pontos ou regiÃµes do bordado durante um movimento de salto, sem realizar costura contÃ­nua naquele trecho. De maneira simples: Ã© a distÃ¢ncia que a agulha precisa 'atravessar' quando sai de onde terminou um objeto e vai atÃ© onde comeÃ§arÃ¡ o prÃ³ximo.",
    "technicalDetails": "Nos softwares e mÃ¡quinas, existe um parÃ¢metro limite de corte automÃ¡tico (geralmente calibrado entre 2.0mm e 5.0mm). Saltos menores que esse valor sÃ£o realizados em movimento contÃ­nuo (deixando fio esticado para limpeza); saltos maiores acionam o comando mecÃ¢nico de arremate e corte de linha.",
    "construction": [
      "Vetor de deslocamento livre do pantÃ³grafo",
      "Ponto de partida (saÃ­da do objeto anterior)",
      "Ponto de chegada (entrada do prÃ³ximo objeto)",
      "ComutaÃ§Ã£o entre salto livre e corte automÃ¡tico"
    ],
    "howItWorks": [
      "1. A mÃ¡quina conclui um objeto no ponto de saÃ­da.",
      "2. Avalia se a distÃ¢ncia atÃ© o prÃ³ximo objeto ultrapassa o limite de corte configurado.",
      "3. Se for menor: a agulha sobe e o bastidor se desloca diretamente deixando o fio esticado.",
      "4. Se for maior: a mÃ¡quina aciona o cortador, arremata e desloca-se com a linha cortada."
    ],
    "mainTypes": [
      "Salto Curto com ConexÃ£o (1mm a 3mm - NÃ£o exige corte)",
      "Salto Longo com Corte AutomÃ¡tico (Acima de 4mm a 7mm)",
      "Salto Oculto / Ponto de Viagem (Caminho costurado por baixo de outros objetos)"
    ],
    "advantages": [
      "âœ” Saltos curtos bem planejados eliminam cortes desnecessÃ¡rios e aceleram a produÃ§Ã£o",
      "âœ” Otimiza o movimento cinemÃ¡tico do pantÃ³grafo",
      "âœ” Evita o desgaste prematuro da navalha de corte da mÃ¡quina"
    ],
    "limitations": [
      "Saltos longos deixados sem corte sobre tecidos claros geram fios visÃ­veis que podem ser repuxados durante o uso se nÃ£o forem aparados."
    ],
    "commonErrors": [
      "â�Œ Confundir distÃ¢ncia de salto com distÃ¢ncia entre pontos normais de costura.",
      "â�Œ Tentar eliminar absolutamente todos os saltos ou colocar corte em qualquer distÃ¢ncia de 2mm.",
      "â�Œ Ignorar saltos longos que cruzam Ã¡reas abertas do bordado."
    ],
    "voceSabia": "Cada comando de corte automÃ¡tico de linha em uma mÃ¡quina industrial leva de 2 a 4 segundos: em uma matriz com 50 cortes desnecessÃ¡rios, vocÃª perde mais de 3 minutos por peÃ§a apenas cortando linha!",
    "curiosidadeTecnica": "Ao simular a matriz no software, ative a visualizaÃ§Ã£o de 'Linhas de ConexÃ£o' (Connectors / Jump Lines) para enxergar todos os saltos em linhas pontilhadas vermelhas ou pretas.",
    "dicaArtrelados": "Um bom bordado nÃ£o depende apenas dos pontos que aparecem no tecido, mas tambÃ©m dos caminhos que a mÃ¡quina percorre entre eles! Procure saltos longos na simulaÃ§Ã£o como quem procura estradas desnecessÃ¡rias em um mapa: se puder encurtar a rota, seu bordado ficarÃ¡ mais limpo e muito mais rÃ¡pido!",
    "applications": [
      "OtimizaÃ§Ã£o de sequÃªncias de letras, separaÃ§Ã£o de brasÃµes, monogramas e produÃ§Ã£o em sÃ©rie."
    ],
    "troubleshootingTips": [
      "Se as letras estiverem conectadas por fios feios que vocÃª precisa cortar na tesourinha, reduza o valor do 'Comprimento de Salto para Corte' no software para 2.0mm."
    ],
    "relatedTerms": [
      "Ponto de Entrada",
      "Ponto de SaÃ­da",
      "Corte de Linha",
      "SequÃªncia de Pontos"
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
    "origin": "Do latim distantia (afastamento) e do germÃ¢nico salti (salto, pulo mecÃ¢nico sem perfuraÃ§Ã£o de agulha). Comando mecÃ¢nico primÃ¡rio dos formatos industriais de bordado.",
    "beginnerExplanation": "DistÃ¢ncia de salto Ã© a distÃ¢ncia que o bastidor percorre de um ponto a outro sem a agulha costurar (quando a mÃ¡quina pula de uma letra para a prÃ³xima). Se o pulo for maior que a distÃ¢ncia configurada, a mÃ¡quina aciona o cortador de linha automÃ¡tico.",
    "practicalExercise": "No painel da sua mÃ¡quina ou no software, verifique o ajuste de corte por salto (geralmente regulado em 2.0mm a 5.0mm). Borde uma frase com letras cursivas: veja como nos saltos pequenos ela passa direto e nos saltos maiores ela corta a linha automaticamente.",
    "quickSummary": "DistÃ¢ncia de salto Ã© o deslocamento do bastidor entre objetos sem perfuraÃ§Ãµes, gatilho para o acionamento do cortador de linha automÃ¡tico.",
    "bibliographicReferences": [
      "TAJIMA. Trimming Mechanisms and Jump Length Parameters. Nagoya, 2022.",
      "BROTHER. Jump Stitch Length and Automatic Thread Trimming. Nagoya, 2023.",
      "ARTRELADOS. Como Configurar Saltos e Eliminar Fiados de Linha na ProduÃ§Ã£o. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-036-diagrama-de-pontos",
    "code": "D-036",
    "term": "Diagrama de Pontos",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal masculina.",
    "category": "Softwares & Formatos",
    "summary": "RepresentaÃ§Ã£o grÃ¡fica ou esquemÃ¡tica que permite visualizar a estrutura interna, trajetÃ³rias e ordem dos pontos da matriz.",
    "definition": "O diagrama de pontos Ã© a representaÃ§Ã£o grÃ¡fica e estrutural utilizada para visualizar, analisar e compreender a organizaÃ§Ã£o de cada ponto individual que compÃµe uma matriz de bordado. Enquanto a imagem simulada na tela mostra como o bordado deverÃ¡ parecer, o diagrama de pontos revela a sua 'planta baixa': a posiÃ§Ã£o de cada furo de agulha, as trajetÃ³rias de deslocamento, a sequÃªncia de objetos e os pontos de entrada e saÃ­da.",
    "technicalDetails": "Visualizado nos softwares ao desativar o modo 3D / TrueView e ativar a visualizaÃ§Ã£o em grade com nÃ³s de ponto (Needle Points / Wireframe Mode), permitindo leitura tÃ©cnica de penetraÃ§Ãµes e trajetÃ³rias de viagem.",
    "construction": [
      "MarcaÃ§Ã£o de pontos de penetraÃ§Ã£o da agulha",
      "Linhas vetoriais de conexÃ£o de trajeto",
      "NumeraÃ§Ã£o cronolÃ³gica de objetos e cores",
      "Indicadores visuais de paradas e cortes"
    ],
    "howItWorks": [
      "1. O operador abre a matriz no software e desativa a visualizaÃ§Ã£o de linha realista (3D).",
      "2. O diagrama expÃµe a malha real de pontos e a densidade de furos.",
      "3. Utiliza-se a barra de reproduÃ§Ã£o (Stitch Player) para simular a costura passo a passo.",
      "4. Identificam-se pontos sobrepostos desnecessÃ¡rios ou falhas de percurso."
    ],
    "mainTypes": [
      "VisualizaÃ§Ã£o em Aramado / Wireframe (Mostra contornos e linhas de direÃ§Ã£o)",
      "VisualizaÃ§Ã£o Ponto a Ponto com NÃ³s (Destaca cada furo de agulha)",
      "Diagrama de Ordem de ProduÃ§Ã£o (Ficha tÃ©cnica impressa com dados e cores)"
    ],
    "advantages": [
      "âœ” Permite enxergar a verdadeira estrutura interna do bordado alÃ©m da ilusÃ£o da tela",
      "âœ” Facilita o diagnÃ³stico prÃ©vio de pontos acumulados perigosos para a agulha",
      "âœ” Excelente ferramenta pedagÃ³gica para aprender a 'ler' matrizes de bordado"
    ],
    "limitations": [
      "A representaÃ§Ã£o visual dos sÃ­mbolos e cores varia de acordo com cada software de bordado."
    ],
    "commonErrors": [
      "â�Œ Olhar apenas para a imagem 3D simulada e nunca inspecionar o diagrama de pontos.",
      "â�Œ Confundir o diagrama com o arquivo final da mÃ¡quina.",
      "â�Œ NÃ£o realizar a simulaÃ§Ã£o virtual passo a passo antes de carregar o arquivo na mÃ¡quina."
    ],
    "voceSabia": "A imagem 3D do software Ã© como a foto de uma casa pronta; o diagrama de pontos Ã© a planta baixa arquitetÃ´nica com todas as vigas e encanamentos!",
    "curiosidadeTecnica": "Ao observar o diagrama de pontos, densidades muito altas aparecem como manchas escuras e sÃ³lidas de furos de agulha concentrados.",
    "dicaArtrelados": "NÃ£o olhe uma matriz apenas como uma imagem: aprenda a enxergÃ¡-la como um caminho feito de pontos! Quando vocÃª comeÃ§a a observar onde comeÃ§a   por onde passa   onde termina   para onde vai depois, vocÃª passa a entender como a mÃ¡quina pensa!",
    "applications": [
      "RevisÃ£o tÃ©cnica de arquivos, auditoria de matrizes compradas na internet e controle de qualidade."
    ],
    "troubleshootingTips": [
      "Use o reprodutor de pontos (Stitch Player) na velocidade mÃ¡xima para conferir se a ordem de bordado estÃ¡ lÃ³gica antes de colocar a linha na mÃ¡quina."
    ],
    "relatedTerms": [
      "SequÃªncia de Pontos",
      "Ponto de Entrada",
      "Ponto de SaÃ­da",
      "DigitalizaÃ§Ã£o de Bordado"
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
    "origin": "Do grego diagramma (figura desenhada, esquema grÃ¡fico composto por linhas, de diagraphein, marcar com linhas) e de punctum (ponto).",
    "beginnerExplanation": "Diagrama de pontos Ã© o mapa tÃ©cnico do bordado na tela do computador: vocÃª consegue ver cada furinho de agulha, as linhas de costura por baixo (underlay) e atÃ© onde a mÃ¡quina vai pular ou cortar a linha antes de colocar o tecido no bastidor.",
    "practicalExercise": "Abra uma matriz no software e ative a visualizaÃ§Ã£o em 'Modo Pontos' ou 'Modo 1:1' (desativando o efeito 3D realista TrueView). Use a barra de rolagem da simulaÃ§Ã£o para ver a agulha descendo ponto por ponto: analise como as camadas de baixo sÃ£o construÃ­das antes das camadas de cima!",
    "quickSummary": "Diagrama de pontos Ã© a visualizaÃ§Ã£o analÃ­tica e esquemÃ¡tica de todas as penetraÃ§Ãµes de agulha e comandos mecÃ¢nicos da matriz.",
    "bibliographicReferences": [
      "WILCOM. Stitch View, Needle Points and Sequence Inspection. Sydney, 2022.",
      "TAJIMA. DGML Stitch Editing and Sequence Diagram. Dallas: Pulse Microsystems, 2023.",
      "ARTRELADOS. Como Ler e Auditar o Diagrama de Pontos de uma Matriz. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-037-dimensao-da-matriz",
    "code": "D-037",
    "term": "DimensÃ£o da Matriz",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal feminina.",
    "category": "Terminologia Geral",
    "summary": "Medidas fÃ­sicas reais de largura e altura que o desenho ocuparÃ¡ no tecido quando bordado.",
    "definition": "A dimensÃ£o da matriz corresponde Ã s medidas fÃ­sicas que indicam o espaÃ§o que o desenho bordado ocuparÃ¡ no tecido, expressas em largura e altura (normalmente em milÃ­metros ou centÃ­metros, como 100 x 80 mm ou 10 x 8 cm). Ã‰ fundamental compreender que a dimensÃ£o da matriz representa o tamanho real do bordado, que deve ser totalmente compatÃ­vel com a Ã¡rea Ãºtil do bastidor e o espaÃ§o disponÃ­vel na peÃ§a fÃ­sica.",
    "technicalDetails": "Diferencia-se do tamanho em Kilobytes do arquivo digital. O redimensionamento de uma matriz em mais de 10% a 15% exige recÃ¡lculo automÃ¡tico de pontos pelo software para nÃ£o comprometer a densidade original.",
    "construction": [
      "Largura fÃ­sica horizontal (X em mm)",
      "Altura fÃ­sica vertical (Y em mm)",
      "Ã�rea delimitadora retangular (Bounding Box)",
      "Ã�rea efetiva de cobertura por pontos"
    ],
    "howItWorks": [
      "1. A bordadeira confere as medidas em milÃ­metros no painel ou software.",
      "2. Mede com uma fita mÃ©trica o local exato da peÃ§a (ex: bolso, toalha, peito).",
      "3. Seleciona o bastidor adequado garantindo a folga da distÃ¢ncia de seguranÃ§a."
    ],
    "mainTypes": [
      "DimensÃ£o Nominal (Medida externa mÃ¡xima de largura x altura)",
      "Ã�rea Efetiva de Bordado (SuperfÃ­cie real coberta pelos pontos)",
      "DimensÃ£o Proporcional Redimensionada"
    ],
    "advantages": [
      "âœ” Garante o enquadramento perfeito do bordado na peÃ§a sem erros de proporÃ§Ã£o",
      "âœ” Assegura a compatibilidade imediata com os bastidores disponÃ­veis no ateliÃª",
      "âœ” Permite planejar a compra correta de entretelas e o consumo de materiais"
    ],
    "limitations": [
      "Aumentar ou diminuir drasticamente as dimensÃµes sem um software que recalcule pontos deforma a densidade e quebra a matriz."
    ],
    "commonErrors": [
      "â�Œ Confundir a dimensÃ£o da matriz com o tamanho nominal do bastidor.",
      "â�Œ Dobrar o tamanho da matriz sem verificar se os pontos ficaram espaÃ§ados demais e ralos.",
      "â�Œ Reduzir uma matriz para menos da metade fazendo letras e detalhes virarem bolhas duras de linha."
    ],
    "voceSabia": "Duas matrizes com exatamente a mesma dimensÃ£o de 10x10cm podem ter 5.000 pontos (se for um traÃ§o leve) ou 25.000 pontos (se for um brasÃ£o totalmente preenchido em tatami)!",
    "curiosidadeTecnica": "A Ã¡rea retangular (largura x altura) raramente Ã© 100% preenchida: a maioria dos desenhos possui formas irregulares que cobrem apenas 40% a 60% da Ã¡rea do retÃ¢ngulo envolvente.",
    "dicaArtrelados": "Antes de bordar, meÃ§a duas vezes: a matriz e o espaÃ§o disponÃ­vel na peÃ§a! Pense sempre no trio: 1. Tamanho da matriz; 2. Capacidade do bastidor; 3. EspaÃ§o disponÃ­vel na peÃ§a. Quando os trÃªs estÃ£o em harmonia, seu trabalho comeÃ§a com total seguranÃ§a!",
    "applications": [
      "Enquadramento de matrizes, escolha de bastidores, personalizaÃ§Ã£o de toalhas e camisas."
    ],
    "troubleshootingTips": [
      "Se precisar mudar o tamanho de uma matriz pronta em mais de 20%, solicite ao digitalizador que gere uma nova versÃ£o recalculada para a nova escala."
    ],
    "relatedTerms": [
      "Ã�rea Ãštil do Bastidor",
      "Bastidor",
      "Densidade de Pontos",
      "DistÃ¢ncia de SeguranÃ§a"
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
    "origin": "Do latim dimensio, -onis (aÃ§Ã£o de medir, extensÃ£o mensurÃ¡vel, de dimetiri) e de matrix (molde gerador).",
    "beginnerExplanation": "DimensÃ£o da matriz Ã© a altura e a largura exatas do desenho em milÃ­metros ou centÃ­metros (por exemplo: 10cm x 10cm). Ã‰ importantÃ­ssimo conferir a dimensÃ£o para ter certeza de que o desenho vai caber dentro do seu bastidor e no peito da camiseta!",
    "practicalExercise": "Antes de enviar um arquivo para a mÃ¡quina, meÃ§a a Ã¡rea Ãºtil do bolso ou do peito da peÃ§a com uma fita mÃ©trica. Compare com a dimensÃ£o informada no painel da mÃ¡quina: certifique-se de que o desenho deixa pelo menos 15mm de folga livre em todos os lados.",
    "quickSummary": "DimensÃ£o da matriz Ã© a medida fÃ­sica real (largura e altura) do projeto de bordado, essencial para enquadramento no bastidor e proporÃ§Ã£o na peÃ§a.",
    "bibliographicReferences": [
      "BROTHER. Embroidery Field Limits and Hoop Dimension Chart. Nagoya, 2022.",
      "JANOME. Hoop Sizing and Design Scaling Precautions. Tokyo, 2023.",
      "ARTRELADOS. Guia de DimensÃµes PadrÃ£o para Cada Tipo de PeÃ§a e Bastidor. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-038-densidade-de-linha",
    "code": "D-038",
    "term": "Densidade de Linha",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo feminino e locuÃ§Ã£o adjetiva.",
    "category": "Agulhas & Fios",
    "summary": "ConcentraÃ§Ã£o e volume de passagens de linha produzidas pelos pontos sobre a superfÃ­cie do tecido.",
    "definition": "A densidade de linha refere-se ao grau de concentraÃ§Ã£o de linha produzido pelos pontos de bordado em determinada Ã¡rea da matriz. Quanto mais prÃ³ximas e numerosas forem as passagens de linha em uma regiÃ£o, maior serÃ¡ a densidade e o volume de cobertura sobre o tecido. A densidade de linha depende do espaÃ§amento entre pontos, da espessura do fio utilizado, do tipo de ponto e da quantidade de camadas superpostas.",
    "technicalDetails": "Interage diretamente com o TÃ­tulo da linha (ex: TÃ­tulo 40 de 120D/2 vs TÃ­tulo 60 de 75D/2). Linhas mais espessas proporcionam maior cobertura visual com menor nÃºmero de passagens, enquanto fios mais finos exigem passagens mais prÃ³ximas para evitar transparÃªncia.",
    "construction": [
      "EspaÃ§amento entre passagens lineares",
      "Calibre e espessura do fio de poliÃ©ster/rayon",
      "NÃºmero de camadas sobrepostas",
      "Estrutura do substrato tÃªxtil"
    ],
    "howItWorks": [
      "1. A agulha deposita passagens de linha paralelas sobre o tecido.",
      "2. O diÃ¢metro do fio preenche o espaÃ§o entre as penetraÃ§Ãµes vizinhas.",
      "3. O equilÃ­brio entre espessura da linha e espaÃ§amento gera uma superfÃ­cie lisa e fechada."
    ],
    "mainTypes": [
      "Densidade de Linha PadrÃ£o (Para linha TÃ­tulo 40 tradicional)",
      "Densidade para Linhas Especiais / MetÃ¡licas (EspaÃ§amento ligeiramente mais aberto para acomodar o fio Lurex)",
      "Densidade para Linha Fina TÃ­tulo 60 (EspaÃ§amento mais fechado para microletras)"
    ],
    "advantages": [
      "âœ” Garante cobertura opaca e cores intensas da linha",
      "âœ” Permite dosar o relevo e o toque tÃ¡ctil do bordado na peÃ§a",
      "âœ” Evita desperdÃ­cio de metros de linha em matrizes comerciais"
    ],
    "limitations": [
      "ConcentraÃ§Ã£o excessiva de linha provoca rigidez, calor por atrito na agulha e enrugamento do tecido."
    ],
    "commonErrors": [
      "â�Œ Supor que 'quanto mais cheio de linha, melhor a qualidade'.",
      "â�Œ Usar a mesma configuraÃ§Ã£o de espaÃ§amento ao trocar de linha comum 40 para linha metÃ¡lica ou linha fina 60.",
      "â�Œ Ignorar a espessura da linha ao avaliar a cobertura de uma matriz."
    ],
    "voceSabia": "As linhas metÃ¡licas (ouro e prata) sÃ£o mais grossas e rÃ­gidas que as linhas normais de poliÃ©ster: por isso, a densidade de linha deve ser aberta em cerca de 10% a 15% para a mÃ¡quina bordar macio e sem arrebentar!",
    "curiosidadeTecnica": "A fÃ³rmula de cobertura perfeita estabelece que o espaÃ§amento entre linhas deve ser rigorosamente igual ao diÃ¢metro fÃ­sico do fio comprimido pelo pÃ©-calcador.",
    "dicaArtrelados": "Densidade nÃ£o Ã© uma corrida para colocar o mÃ¡ximo de linha possÃ­vel: Ã© uma busca pelo equilÃ­brio! Uma boa matriz coloca a quantidade certa de linha no lugar certo, respeitando o tecido e a linha. Quando o bordado estÃ¡ duro ou repuxando, colocar mais linha nunca Ã© a soluÃ§Ã£o!",
    "applications": [
      "CalibraÃ§Ã£o de linhas comuns, metÃ¡licas, fluorescentes e fios finos para microbordados."
    ],
    "troubleshootingTips": [
      "Se a linha metÃ¡lica estiver desfiando e quebrando no cabeÃ§ote, abra a densidade de linha em 0.05mm e diminua a velocidade para 600 PPM."
    ],
    "relatedTerms": [
      "Densidade de Pontos",
      "Linha de Bordado",
      "EspaÃ§amento entre Pontos",
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
    "origin": "Do latim densitas (densidade, espessura) e de linea (fio de linho, linha). Conceito tÃªxtil que relaciona a espessura fÃ­sica do fio ao espaÃ§amento da matriz.",
    "beginnerExplanation": "Densidade de linha Ã© a relaÃ§Ã£o entre a grossura do fio de bordado (como a linha 120/2 comum ou a linha 60 mais fininha) e a quantidade de pontos da matriz. Uma linha fininha exige pontos mais juntinhos para cobrir bem; uma linha grossa pede pontos mais afastados para nÃ£o encavalar.",
    "practicalExercise": "Pegue um cone de linha tÃ­tulo 40 tradicional e um cone de linha tÃ­tulo 60 extrafina. Borde a mesma matriz em ponto Tatami com os dois cones lado a lado no mesmo tecido: veja como a linha 60 deixa transparecer o tecido (exigindo mais densidade), enquanto a linha 40 cobre perfeitamente.",
    "quickSummary": "Densidade de linha Ã© a calibraÃ§Ã£o do espaÃ§amento de pontos em consonÃ¢ncia com a espessura e tÃ­tulo do fio de bordado utilizado.",
    "bibliographicReferences": [
      "MADEIRA. Thread Weights (40, 60, 75) and Corresponding Stitch Density. Freiburg, 2023.",
      "GUNOLD. Technical Guide to Specialty Threads & Density Setup. Stockstadt, 2022.",
      "ARTRELADOS. Escolha de Linhas Especiais e CalibraÃ§Ã£o de Densidade. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-039-deteccao-de-cores",
    "code": "D-039",
    "term": "DetecÃ§Ã£o de Cores",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal feminina.",
    "category": "Softwares & Formatos",
    "summary": "Recurso do software para identificar, agrupar e separar Ã¡reas cromÃ¡ticas de uma imagem durante a preparaÃ§Ã£o.",
    "definition": "A detecÃ§Ã£o de cores Ã© o processo pelo qual um software de bordado identifica e analisa as diferentes tonalidades presentes em uma imagem grÃ¡fica e utiliza essas informaÃ§Ãµes para separar regiÃµes, agrupar cores semelhantes (reduÃ§Ã£o de cores) e gerar propostas de objetos de bordado. Ã‰ uma etapa preliminar fundamental na digitalizaÃ§Ã£o assistida e automÃ¡tica.",
    "technicalDetails": "Analisa os valores RGB dos pixels. Em imagens com compressÃ£o JPG ou degradÃªs suaves, o algoritmo pode detectar centenas de variaÃ§Ãµes de uma mesma cor devido ao antialiasing, exigindo reduÃ§Ã£o prÃ©via para uma paleta controlada de 3 a 8 cores de linha.",
    "construction": [
      "Algoritmo de leitura RGB / CMYK",
      "Tabela de reduÃ§Ã£o de cores (Color Reduction Table)",
      "Agrupamento por tolerÃ¢ncia cromÃ¡tica",
      "Mapeamento com catÃ¡logos de linhas de bordado"
    ],
    "howItWorks": [
      "1. A imagem Ã© importada e o software analisa a quantidade de cores nos pixels.",
      "2. O usuÃ¡rio define o nÃºmero mÃ¡ximo de cores reais de linha desejadas.",
      "3. O software agrupa tons vizinhos e delimita os contornos de cada bloco de cor.",
      "4. Cada bloco de cor vira um objeto ou parada de troca de linha na mÃ¡quina."
    ],
    "mainTypes": [
      "DetecÃ§Ã£o AutomÃ¡tica por TolerÃ¢ncia (Varredura de pixels)",
      "ReduÃ§Ã£o Manual de Cores (Agrupamento orientado pelo usuÃ¡rio)",
      "Mapeamento AutomÃ¡tico com Paletas de Linhas Comerciais (Madeira, Isacord, Lumina, etc.)"
    ],
    "advantages": [
      "âœ” Agiliza imensamente a separaÃ§Ã£o de camadas em desenhos multicoloridos",
      "âœ” Elimina pequenas variaÃ§Ãµes de ruÃ­do e sombras indesejadas de fotos",
      "âœ” Associa as cores da tela aos cÃ³digos reais de cones de linha disponÃ­veis no ateliÃª"
    ],
    "limitations": [
      "A detecÃ§Ã£o automÃ¡tica de cores nÃ£o substitui o planejamento da sequÃªncia de trocas de cor pelo digitalizador."
    ],
    "commonErrors": [
      "â�Œ Deixar o software detectar 30 variaÃ§Ãµes de azul para uma imagem simples, gerando 30 trocas de linha na mÃ¡quina.",
      "â�Œ Confundir a cor mostrada no monitor com a tonalidade fÃ­sica exata do cone de linha.",
      "â�Œ Ignorar a ordem e sequÃªncia das trocas de cor, fazendo a mÃ¡quina trocar para a mesma linha vÃ¡rias vezes."
    ],
    "voceSabia": "Uma foto de maÃ§Ã£ pode conter mais de 2.000 tons diferentes de vermelho na tela do computador, mas para bordar com perfeiÃ§Ã£o no ateliÃª vocÃª precisa apenas de 2 ou 3 tons de linha bem escolhidos!",
    "curiosidadeTecnica": "Quantidade de cores nÃ£o Ã© o mesmo que quantidade de trocas de linha: uma matriz com 3 cores pode exigir 8 trocas de linha se a sequÃªncia de objetos for mal planejada!",
    "dicaArtrelados": "No bordado eletrÃ´nico, nem toda cor que existe na imagem precisa virar um cone de linha! Antes de aceitar a detecÃ§Ã£o automÃ¡tica, pergunte: 'Quais cores realmente sÃ£o necessÃ¡rias para reconhecer o desenho?' O segredo Ã© simplificar com inteligÃªncia!",
    "applications": [
      "PreparaÃ§Ã£o de logos, separaÃ§Ã£o de matrizes infantis multicoloridas e conversÃ£o de ilustraÃ§Ãµes."
    ],
    "troubleshootingTips": [
      "Se a matriz estiver exigindo muitas trocas de linha desnecessÃ¡rias, use a ferramenta de 'Reordenar por Cores' (Color Sort) no software para agrupar todas as partes da mesma cor."
    ],
    "relatedTerms": [
      "DigitalizaÃ§Ã£o AutomÃ¡tica",
      "Matriz de Bordado",
      "Cores de Linha",
      "SequÃªncia de Pontos"
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
    "origin": "Do latim detectio, -onis (aÃ§Ã£o de descobrir, desvendar, de detegere, tirar o teto/revelar) e do latim color, -oris (cor, matiz Ã³ptico).",
    "beginnerExplanation": "DetecÃ§Ã£o de cores Ã© a ferramenta do software que lÃª uma imagem e separa automaticamente quais sÃ£o as cores presentes nela. Ajuda a definir a ordem de troca de linha na mÃ¡quina sem que vocÃª precise adivinhar as cores uma a uma.",
    "practicalExercise": "Importe uma imagem com 4 cores bem contrastantes para o seu software. Use a ferramenta de reduÃ§Ã£o e detecÃ§Ã£o de cores para limitar a paleta exatamente a 4 cores: repare como o programa remove automaticamente pequenas manchas e ruÃ­dos de tons intermediÃ¡rios.",
    "quickSummary": "DetecÃ§Ã£o de cores Ã© o recurso computacional de identificaÃ§Ã£o e separaÃ§Ã£o cromÃ¡tica de elementos visuais para estruturaÃ§Ã£o das paradas de mÃ¡quina.",
    "bibliographicReferences": [
      "WILCOM. Color Palette Reduction & Automatic Color Classification. Sydney, 2022.",
      "BERNINA. Managing Thread Charts and Automatic Color Separation. Steckborn, 2023.",
      "ARTRELADOS. Como Padronizar Paletas de Cores de Linhas Nacionais no Software. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-040-distorcao-do-bordado",
    "code": "D-040",
    "term": "DistorÃ§Ã£o do Bordado",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal feminina.",
    "category": "SoluÃ§Ã£o de Problemas",
    "summary": "AlteraÃ§Ã£o de forma, proporÃ§Ã£o ou alinhamento observada no tecido em relaÃ§Ã£o ao desenho original previsto na matriz.",
    "definition": "A distorÃ§Ã£o do bordado ocorre quando o desenho executado no tecido apresenta forma, proporÃ§Ãµes ou encaixes diferentes daqueles visualizados no computador (por exemplo: um cÃ­rculo que vira uma elipse oval, letras inclinadas ou vÃ£os entre o fundo e o contorno). A distorÃ§Ã£o resulta do combate fÃ­sico entre a traÃ§Ã£o da linha, a estabilidade da entretela, o bastidoramento e a elasticidade natural do tecido.",
    "technicalDetails": "Relaciona-se com o efeito mecÃ¢nico Push & Pull: os pontos puxam o tecido no sentido do Ã¢ngulo da linha (Pull) e expandem as laterais perpendiculares (Push). Quando a estabilizaÃ§Ã£o Ã© insuficiente, a distorÃ§Ã£o torna-se visÃ­vel.",
    "construction": [
      "TraÃ§Ã£o de encolhimento no sentido dos pontos",
      "ExpansÃ£o nas bordas perpendiculares",
      "DeformaÃ§Ã£o por tensÃ£o desbalanceada",
      "MovimentaÃ§Ã£o do tecido dentro do aro do bastidor"
    ],
    "howItWorks": [
      "1. A agulha perfura o tecido e a linha exerce traÃ§Ã£o ao travar o nÃ³.",
      "2. Milhares de pontos acumulam forÃ§a puxando as fibras tÃªxteis para o centro.",
      "3. Se a entretela nÃ£o segurar o tecido ou o bastidor estiver frouxo, a forma geomÃ©trica se deforma.",
      "4. Ao sair do bastidor, o tecido relaxa evidenciando a distorÃ§Ã£o."
    ],
    "mainTypes": [
      "DistorÃ§Ã£o por Repuxamento (Encolhimento paralelo ao ponto)",
      "DistorÃ§Ã£o por Bastidoramento Excessivo (Tecido esticado artificialmente no aro)",
      "DistorÃ§Ã£o por Deslocamento de Registro (Contorno fora do preenchimento)"
    ],
    "advantages": [
      "âœ” Compreender a distorÃ§Ã£o permite aplicar compensaÃ§Ãµes precisas na digitalizaÃ§Ã£o"
    ],
    "limitations": [
      "Tentar corrigir distorÃ§Ãµes apenas aumentando a densidade piora a deformaÃ§Ã£o."
    ],
    "commonErrors": [
      "â�Œ Culpar imediatamente a matriz quando o problema foi o tecido frouxo no bastidor.",
      "â�Œ Esticar o tecido com forÃ§a excessiva ao montar o bastidor (como uma pele de tambor esticada demais).",
      "â�Œ Bordar malhas elÃ¡sticas usando entretela rasga-fÃ¡cil em vez de entretela recorta-fÃ¡cil."
    ],
    "voceSabia": "Se vocÃª esticar demais uma camiseta de malha ao fechar o bastidor, ela parecerÃ¡ linda enquanto estiver presa; mas assim que vocÃª abrir o aro, a malha encolherÃ¡ de volta e o bordado ficarÃ¡ totalmente enrugado!",
    "curiosidadeTecnica": "DistorÃ§Ã£o refere-se Ã  perda de proporÃ§Ã£o em relaÃ§Ã£o ao projeto original; deformaÃ§Ã£o refere-se Ã  alteraÃ§Ã£o fÃ­sica e estrutural do tecido durante as forÃ§as de costura.",
    "dicaArtrelados": "Quando o bordado se distorcer, nÃ£o procure um culpado: procure a causa! Compare a matriz com o bordado pronto e veja onde a forma comeÃ§ou a mudar. Lembre-se da regra de ouro: a matriz Ã© criada na tela, mas o bordado acontece no tecido! Observe sempre os dois!",
    "applications": [
      "DiagnÃ³stico e correÃ§Ã£o de matrizes com problemas de encaixe, formas ovais e repuxamento."
    ],
    "troubleshootingTips": [
      "Se formas circulares estiverem saindo ovais, aumente a CompensaÃ§Ã£o de Repuxo (Pull Compensation) no software para 0.40mm e use entretela mais encorpada."
    ],
    "relatedTerms": [
      "DeformaÃ§Ã£o do Bordado",
      "CompensaÃ§Ã£o de PuxÃ£o",
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
    "origin": "Do latim distortio, -onis (aÃ§Ã£o de torcer, deformar a forma original, de distorquere, torcer para os lados) e do Ã¡rabe al-burdÄ� (bordado).",
    "beginnerExplanation": "DistorÃ§Ã£o do bordado Ã© quando o desenho sai deformado no tecido: um cÃ­rculo perfeito que vira um ovo achatado, um quadrado que vira losango ou contornos que saem fora da figura. Isso acontece porque a linha puxa o tecido enquanto costura!",
    "practicalExercise": "Borde um cÃ­rculo perfeito de 5cm em uma malha com entretela fraca e frouxa no bastidor. Ao tirar da mÃ¡quina, meÃ§a o cÃ­rculo na vertical e na horizontal com uma rÃ©gua: veja como ele ficou menor no sentido dos pontos (encolheu) e maior no sentido oposto (esticou). Esse Ã© o efeito clÃ¡ssico de distorÃ§Ã£o!",
    "quickSummary": "DistorÃ§Ã£o do bordado Ã© a alteraÃ§Ã£o geomÃ©trica indesejada da forma original causada pelas forÃ§as de repuxamento e compressÃ£o da linha sobre o tecido.",
    "bibliographicReferences": [
      "KRAUSZ, P. Push and Pull Dynamics in Machine Embroidery. New York: Textile Press, 2021.",
      "TAJIMA. Fabric Distortion Control and Mechanical Stability. Nagoya, 2022.",
      "ARTRELADOS. Guia Definitivo contra DeformaÃ§Ãµes e Repuxo no Bordado. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-041-definicao-do-bordado",
    "code": "D-041",
    "term": "DefiniÃ§Ã£o do Bordado",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal feminina.",
    "category": "Qualidade do Bordado",
    "summary": "Grau de nitidez, clareza e precisÃ£o com que contornos, letras e detalhes da matriz sÃ£o reproduzidos no tecido.",
    "definition": "A definiÃ§Ã£o do bordado Ã© a qualidade com que os elementos de uma matriz sÃ£o reproduzidos fisicamente no tecido, permitindo que contornos, letras, detalhes finos, curvas e formas sejam percebidos com clareza, nitidez e organizaÃ§Ã£o. Um bordado com excelente definiÃ§Ã£o mantÃ©m a identidade da arte, preserva os espaÃ§os internos vazios e apresenta bordas limpas e bem delimitadas.",
    "technicalDetails": "Resultado da harmonia entre a digitalizaÃ§Ã£o precisa, escolha do tipo de ponto correto (Satin para traÃ§os finos vs Tatami para Ã¡reas largas), comprimento de ponto equilibrado, underlay adequado, espessura da linha e estabilidade do tecido.",
    "construction": [
      "Bordas de contorno nÃ­tidas e cravadas",
      "EspaÃ§os internos de letras preservados (vÃ£os do 'A', 'O', 'e')",
      "Comprimento de ponto proporcional Ã s curvas",
      "Camada de underlay que sustenta o topo"
    ],
    "howItWorks": [
      "1. O digitalizador projeta os objetos com largura mÃ­nima segura (mÃ­nimo 1.0mm para Satin).",
      "2. A agulha perfura o tecido com alinhamento preciso sem mastigar os fios.",
      "3. O ponto de cobertura assenta perfeitamente sobre a base de underlay.",
      "4. O desenho final apresenta leitura imediata e visual de alto padrÃ£o."
    ],
    "mainTypes": [
      "DefiniÃ§Ã£o de Tipografia e Letras (Legibilidade total de monogramas)",
      "DefiniÃ§Ã£o de Contornos (Encaixe milimÃ©trico de bordas)",
      "DefiniÃ§Ã£o em Tecidos Texturizados (Com uso de filme solÃºvel superior)"
    ],
    "advantages": [
      "âœ” Agrega altÃ­ssimo valor percebido e padrÃ£o profissional ao produto final",
      "âœ” Garante a satisfaÃ§Ã£o imediata de clientes exigentes e marcas corporativas",
      "âœ” MantÃ©m o bordado impecÃ¡vel mesmo apÃ³s dezenas de lavagens"
    ],
    "limitations": [
      "Tecidos com textura grossa (piquÃª pesado, toalhas felpudas) exigem filme plÃ¡stico hidrossolÃºvel por cima para nÃ£o engolir a definiÃ§Ã£o dos pontos."
    ],
    "commonErrors": [
      "â�Œ Achar que para deixar o bordado mais definido basta aumentar a densidade (o excesso esconde os detalhes).",
      "â�Œ Bordar letras minÃºsculas em ponto Tatami em vez de ponto Satin.",
      "â�Œ Tentar manter todos os microdetalhes de uma arte complexa em tamanhos reduzidos."
    ],
    "voceSabia": "Em uma pequena letra 'A' bordada, colocar pontos demais fecha o triÃ¢ngulo central da letra, fazendo com que ela perca totalmente a definiÃ§Ã£o e vire uma mancha sÃ³lida!",
    "curiosidadeTecnica": "A definiÃ§Ã£o de um bordado Ã© anÃ¡loga Ã  resoluÃ§Ã£o Ã³ptica: enquanto na tela do computador ela depende de pixels, no tecido ela depende da relaÃ§Ã£o entre o calibre da agulha, o diÃ¢metro da linha e a trama do tecido.",
    "dicaArtrelados": "DefiniÃ§Ã£o nÃ£o Ã© colocar mais pontos: Ã© fazer com que cada ponto trabalhe a favor do desenho! Quando um detalhe estiver pequeno demais para funcionar, simplifique. O melhor detalhe Ã© aquele que continua perfeitamente visÃ­vel depois que o bordado sai da tela e chega ao tecido!",
    "applications": [
      "Controle de qualidade de monogramas, jalecos, crachÃ¡s bordados e peÃ§as de enxoval fino."
    ],
    "troubleshootingTips": [
      "Em toalhas de banho e veludo, use sempre uma folha de plÃ¡stico hidrossolÃºvel por cima do tecido para que os pontos nÃ£o afundem na felpa, garantindo 100% de definiÃ§Ã£o."
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
    "origin": "Do latim definitio, -onis (delimitaÃ§Ã£o precisa de contornos, de definire, estabelecer os limites de algo, de finis, fronteira/limite).",
    "beginnerExplanation": "DefiniÃ§Ã£o do bordado Ã© o grau de nitidez, clareza e limpeza visual do bordado pronto: letras que vocÃª consegue ler de longe sem esforÃ§o, bicos de estrelas afiados e contornos perfeitamente alinhados sem fiapos soltos.",
    "practicalExercise": "Borde a mesma palavra com letras de 6mm em duas situaÃ§Ãµes: 1) com agulha 75/11 gasta e tensÃ£o frouxa; 2) com agulha 70/10 nova ponta fina, linha de qualidade e entretela firme. Coloque as duas peÃ§as lado a lado e compare a nitidez das letras: essa Ã© a diferenÃ§a de uma alta definiÃ§Ã£o!",
    "quickSummary": "DefiniÃ§Ã£o do bordado Ã© o padrÃ£o de nitidez, precisÃ£o de contornos e legibilidade dos detalhes alcanÃ§ado na peÃ§a executada.",
    "bibliographicReferences": [
      "SCHMETZ. Needle Sharpness and Edge Definition in Automated Stitching. Germany, 2022.",
      "MADEIRA. Achieving Crisp Lettering and High Definition in Embroidery. Freiburg, 2023.",
      "ARTRELADOS. Como Atingir Nitidez MÃ¡xima em Nomes e Detalhes Pequenos. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-042-deformacao-do-bordado",
    "code": "D-042",
    "term": "DeformaÃ§Ã£o do Bordado",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal feminina.",
    "category": "SoluÃ§Ã£o de Problemas",
    "summary": "AlteraÃ§Ã£o fÃ­sica e estrutural do tecido ou do desenho causada pelas forÃ§as dinÃ¢micas da costura.",
    "definition": "A deformaÃ§Ã£o do bordado ocorre quando o desenho executado no tecido perde, total ou parcialmente, sua forma, estabilidade ou proporÃ§Ãµes originais devido Ã  reaÃ§Ã£o fÃ­sica das fibras tÃªxteis durante a costura. Isso acontece quando as forÃ§as de traÃ§Ã£o exercidas pela linha e pelo impacto da agulha superam a capacidade de sustentaÃ§Ã£o do tecido e da entretela, gerando franzimento, ondulaÃ§Ãµes e repuxamento.",
    "technicalDetails": "Diferencia-se da distorÃ§Ã£o puramente geomÃ©trica por focar na alteraÃ§Ã£o fÃ­sica e mecÃ¢nica do substrato tÃªxtil (rugas, ondas, enrugamento ao redor do aro e encolhimento pÃ³s-bastidor).",
    "construction": [
      "ForÃ§a de traÃ§Ã£o acumulada nas fibras",
      "Fadiga mecÃ¢nica do tecido por perfuraÃ§Ãµes sucessivas",
      "Instabilidade de entretelamento",
      "TensÃ£o desbalanceada entre linha superior e inferior"
    ],
    "howItWorks": [
      "1. A mÃ¡quina executa milhares de perfuraÃ§Ãµes com linha tracionada.",
      "2. O tecido flexÃ­vel Ã© puxado em direÃ§Ã£o ao centro do bordado.",
      "3. Se a entretela for fraca ou o bastidoramento inadequado, formam-se ondas e rugas.",
      "4. Ao retirar o bastidor, o tecido relaxa de forma irregular mantendo a deformaÃ§Ã£o."
    ],
    "mainTypes": [
      "DeformaÃ§Ã£o por Elasticidade (Comum em tecidos com elastano / malhas)",
      "DeformaÃ§Ã£o por Densidade Excessiva (Tecido endurecido e empurrado)",
      "DeformaÃ§Ã£o PÃ³s-Bastidor (Surge logo apÃ³s soltar a peÃ§a do aro)"
    ],
    "advantages": [
      "âœ” Identificar a mecÃ¢nica da deformaÃ§Ã£o orienta a escolha correta do conjunto entretela + bastidor"
    ],
    "limitations": [
      "DeformaÃ§Ãµes graves com ruptura de fibras tÃªxteis sÃ£o permanentes e irrecuperÃ¡veis na peÃ§a."
    ],
    "commonErrors": [
      "â�Œ Esticar a malha ao mÃ¡ximo no bastidor tentando deixÃ¡-la esticada como um tambor.",
      "â�Œ Aumentar a densidade na tentativa de cobrir rugas causadas por falta de entretela.",
      "â�Œ Culpar a mÃ¡quina de bordar antes de checar a gramatura do estabilizador."
    ],
    "voceSabia": "Em tecidos delicados ou com elastano, o bastidor deve apenas APOIAR e ESTABILIZAR o tecido, nunca esticÃ¡-lo! Esticar a peÃ§a no bastidor Ã© a causa nÃºmero 1 de deformaÃ§Ãµes no ateliÃª!",
    "curiosidadeTecnica": "A regra de ouro da estabilidade estabelece: Matriz correta + tecido adequado + estabilizaÃ§Ã£o correta + bastidoramento adequado = zero deformaÃ§Ã£o.",
    "dicaArtrelados": "O tecido tambÃ©m participa ativamente da construÃ§Ã£o do bordado! NÃ£o adianta ter uma matriz perfeita se o tecido estiver mal estabilizado ou esticado incorretamente. Quando aparecer uma deformaÃ§Ã£o, descubra por que o tecido se moveu antes de alterar o arquivo!",
    "applications": [
      "Bordados em malha, viscolycra, tecidos finos de seda, cetim e peÃ§as esportivas."
    ],
    "troubleshootingTips": [
      "Ao bordar tecidos elÃ¡sticos, use entretela de malha ou recorta-fÃ¡cil de 200g/mÂ² e aplique spray adesivo temporÃ¡rio para fixar o tecido sem esticÃ¡-lo."
    ],
    "relatedTerms": [
      "DistorÃ§Ã£o do Bordado",
      "Bastidoramento",
      "Estabilizador",
      "CompensaÃ§Ã£o de PuxÃ£o"
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
    "origin": "Do latim deformatio, -onis (aÃ§Ã£o de desfigurar, alterar a forma correta, de deformare, tirar a forma bela).",
    "beginnerExplanation": "DeformaÃ§Ã£o do bordado Ã© quando a peÃ§a de roupa fica franzida, enrugada ou com ondas feias ao redor do desenho depois de bordada. Acontece quando esticamos a camiseta com muita forÃ§a ao prender no bastidor ou quando usamos entretela inadequada.",
    "practicalExercise": "Pegue um pedaÃ§o de malha e estique-o com as mÃ£os com muita forÃ§a ao fechar o parafuso do bastidor. Borde um desenho denso e depois retire do bastidor: veja como a malha encolhe de volta e forma um monte de ondas e rugas ao redor do bordado. Repita sem esticar a malha e veja a diferenÃ§a!",
    "quickSummary": "DeformaÃ§Ã£o do bordado Ã© o enrugamento ou ondulamento estrutural do tecido ao redor da Ã¡rea bordada gerado por bastidoramento incorreto ou estabilizaÃ§Ã£o insuficiente.",
    "bibliographicReferences": [
      "COATS INDUSTRIAL. Puckering and Fabric Deformation: Root Causes & Solutions. London, 2022.",
      "GUNOLD. Hooping Techniques to Prevent Garment Distortion. Stockstadt, 2021.",
      "ARTRELADOS. O Bastidoramento Correto: Como Evitar Franzimentos em Malhas. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-043-defeito-de-bordado",
    "code": "D-043",
    "term": "Defeito de Bordado",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal masculina.",
    "category": "SoluÃ§Ã£o de Problemas",
    "summary": "Guia completo de diagnÃ³stico e soluÃ§Ã£o para qualquer falha, irregularidade ou resultado indesejado na produÃ§Ã£o.",
    "definition": "Um defeito de bordado Ã© qualquer alteraÃ§Ã£o, falha mecÃ¢nica, imperfeiÃ§Ã£o visual ou irregularidade estrutural que comprometa a aparÃªncia, a qualidade, a durabilidade ou o acabamento esperado de uma peÃ§a bordada. O defeito pode ter origem na matriz digital, na preparaÃ§Ã£o do tecido, na estabilizaÃ§Ã£o, na escolha da agulha e linha, na calibraÃ§Ã£o de tensÃ£o ou na mecÃ¢nica da mÃ¡quina de bordar.",
    "technicalDetails": "Exige metodologia de diagnÃ³stico investigativo: isolar variÃ¡veis uma a uma (agulha   linha   tensÃ£o   entretela   bastidor   matriz) para descobrir a causa raiz sem trocar mÃºltiplos parÃ¢metros simultaneamente.",
    "construction": [
      "AnÃ¡lise do aspecto visual frontal",
      "InspeÃ§Ã£o tÃ©cnica do verso do bordado (1/3 de bobina)",
      "VerificaÃ§Ã£o da formaÃ§Ã£o de laÃ§adas e nÃ³s",
      "Auditoria da matriz e condiÃ§Ãµes da mÃ¡quina"
    ],
    "howItWorks": [
      "1. A bordadeira observa o defeito no tecido (frente e verso).",
      "2. Identifica em que momento da costura a falha comeÃ§ou.",
      "3. Formula hipÃ³teses (agulha com rebarba, tensÃ£o frouxa, entretela inadequada).",
      "4. Realiza testes controlados alterando UMA variÃ¡vel por vez atÃ© solucionar."
    ],
    "mainTypes": [
      "Defeitos de Linha & TensÃ£o (Quebras, linha da bobina subindo, laÃ§os frouxos)",
      "Defeitos de Cobertura (Tecido aparente, preenchimento ralo)",
      "Defeitos de Registro & Geometria (Contornos desalinhados, formas ovais)",
      "Defeitos de Acabamento (Marcas de bastidor, fiapos soltos, nÃ³s duros)"
    ],
    "advantages": [
      "âœ” Desenvolve autonomia e raciocÃ­nio tÃ©cnico avanÃ§ado na bordadeira",
      "âœ” Reduz drasticamente o desperdÃ­cio de peÃ§as caras e tempo de retrabalho",
      "âœ” Garante padrÃ£o de qualidade consistente e profissional no ateliÃª"
    ],
    "limitations": [
      "Continuar bordando com a mÃ¡quina apresentando ruÃ­dos estranhos ou quebras repetitivas pode danificar a lanÃ§adeira ou a barra de agulha."
    ],
    "commonErrors": [
      "â�Œ Culpar a mÃ¡quina imediatamente sem verificar a passagem de linha ou o estado da agulha.",
      "â�Œ Alterar dez configuraÃ§Ãµes ao mesmo tempo sem descobrir a causa real do problema.",
      "â�Œ Olhar apenas para a frente do bordado e nunca inspecionar o avesso.",
      "â�Œ Continuar a produÃ§Ã£o quando a mÃ¡quina estÃ¡ quebrando linha a cada 100 pontos."
    ],
    "voceSabia": "O avesso do bordado conta a verdadeira histÃ³ria do que aconteceu: olhar a proporÃ§Ã£o de 1/3 da linha de bobina no verso revela instantaneamente se o problema era tensÃ£o superior ou inferior!",
    "curiosidadeTecnica": "Crie um 'caderno de ocorrÃªncias do ateliÃª': fotografe a frente, o verso e anote a soluÃ§Ã£o encontrada para cada defeito resolvido. Com o tempo, vocÃª terÃ¡ seu prÃ³prio manual de maestria em bordado.",
    "dicaArtrelados": "NÃ£o tente corrigir um defeito antes de descobrir sua causa real! Siga sempre a regra de ouro do DIBE: Observar   Investigar   Identificar   Corrigir   Testar. Assim, cada problema superado deixa de ser uma frustraÃ§Ã£o e se torna um degrau na sua evoluÃ§Ã£o profissional!",
    "applications": [
      "SoluÃ§Ã£o de problemas em ateliÃªs, manutenÃ§Ã£o preventiva, controle de qualidade e treinamento."
    ],
    "troubleshootingTips": [
      "Em caso de falha persistente, substitua a agulha por uma nova e repasse toda a linha superior do zero com o pÃ©-calcador levantado."
    ],
    "relatedTerms": [
      "DefiniÃ§Ã£o do Bordado",
      "DeformaÃ§Ã£o do Bordado",
      "Ajuste de TensÃ£o",
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
    "origin": "Do latim defectus, -us (falta, imperfeiÃ§Ã£o, fraqueza, falha mecÃ¢nica, de deficere, faltar/falhar) e do Ã¡rabe al-burdÄ� (bordado).",
    "beginnerExplanation": "Defeito de bordado Ã© qualquer coisa que dÃª errado na produÃ§Ã£o: linha de cima quebrando, linha branca da bobina aparecendo por cima, pano furado, contorno torto ou nÃ³ embaixo do tecido. Cada defeito tem uma causa clara e pode ser resolvido com mÃ©todo!",
    "practicalExercise": "Crie o 'Caderno de Casos do AteliÃª': sempre que acontecer um defeito (linha arrebentando, bobina subindo, etc.), fotografe a frente e o verso da peÃ§a, anote qual era o tecido, qual era a agulha e como vocÃª conseguiu resolver. Em poucas semanas vocÃª terÃ¡ seu prÃ³prio manual de soluÃ§Ãµes rÃ¡pidas!",
    "quickSummary": "Defeito de bordado Ã© qualquer anomalia visual, mecÃ¢nica ou estrutural no produto bordado, corrigÃ­vel atravÃ©s do diagnÃ³stico metÃ³dico das variÃ¡veis de produÃ§Ã£o.",
    "bibliographicReferences": [
      "MADEIRA. Complete Embroidery Troubleshooting Guide: From Cause to Cure. Freiburg, 2023.",
      "BARUDAN. Technical Troubleshooting Manual for Commercial Embroidery. Tokyo, 2022.",
      "ARTRELADOS. Manual Mestre de DiagnÃ³stico e SoluÃ§Ã£o de Defeitos no Bordado. SÃ£o Paulo, 2024."
    ],
    "letter": "D"
  },
  {
    "id": "d-044-discos-de-tensao",
    "code": "D-044",
    "term": "Discos de TensÃ£o (Tension Discs)",
    "level": "Fundamental ðŸŸ¢",
    "category": "Componentes da MÃ¡quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim discus (disco plano circular) e tensio, -onis (ato de esticar, esforÃ§o de traÃ§Ã£o). Mecanismo de frenagem mecÃ¢nica por atrito contÃ­nuo desenvolvido na primeira RevoluÃ§Ã£o Industrial tÃªxtil.",
    "summary": "Par de pratos cÃ´ncavos metÃ¡licos prensados por mola helicoidal que aplica resistÃªncia e calibra o fluxo da linha superior.",
    "definition": "Os discos de tensÃ£o sÃ£o dois pratos metÃ¡licos espelhados, de formato cÃ´ncavo-convexo montados face a face sobre um eixo no cabeÃ§ote da mÃ¡quina de bordar. Pressionados por uma mola helicoidal calibrada por um botÃ£o giratÃ³rio micromÃ©trico ou solenoide eletrÃ´nico, eles exercem uma forÃ§a de compressÃ£o controlada sobre a linha superior conforme ela desliza entre eles, garantindo que o fio chegue Ã  agulha com a resistÃªncia exata para a formaÃ§Ã£o de pontos firmes e sem laÃ§adas.",
    "technicalDetails": "Fabricados em aÃ§o inoxidÃ¡vel retificado ou com revestimento cerÃ¢mico antiaderente. A forÃ§a de aperto varia de 80gf a 150gf para linhas de poliÃ©ster 120/40wt. Inclui pino central de liberaÃ§Ã£o que afasta os discos automaticamente quando o calcador Ã© levantado.",
    "howItWorks": [
      "1. A linha superior desce da barra guia e Ã© inserida no vÃ£o entre os dois pratos metÃ¡licos espelhados.",
      "2. A mola helicoidal aplica pressÃ£o radial constante sobre a face externa do disco mÃ³vel.",
      "3. O atrito de contato freia suavemente o desenrolar do fio, gerando a tensÃ£o dinÃ¢mica necessÃ¡ria.",
      "4. Ao girar o dial numÃ©rico (ou ajustar o valor digital no painel), a mola Ã© mais comprimida (tensÃ£o maior) ou aliviada (tensÃ£o menor)."
    ],
    "beginnerExplanation": "SÃ£o dois pratinhos de metal brilhantes que ficam escondidos dentro da mÃ¡quina e funcionam como um 'freio' para a linha. Eles seguram a linha nem muito apertada nem muito frouxa, garantindo que o bordado fique perfeito na frente e no avesso.",
    "applications": [
      "Regulagem de tensÃ£o para linhas comuns de poliÃ©ster e viscose",
      "CalibraÃ§Ã£o suave para fios frÃ¡geis (linhas metÃ¡licas e filamentos de seda)",
      "Ajuste de equilÃ­brio entre linha superior e linha da bobina (regra de 1/3 no avesso)",
      "CompensaÃ§Ã£o de atrito em altas velocidades de produÃ§Ã£o (800 a 1000 PPM)"
    ],
    "commonErrors": [
      "Passar a linha com o calcador abaixado em mÃ¡quinas domÃ©sticas, fazendo a linha nÃ£o entrar dentro dos discos e ficar totalmente solta",
      "Deixar fiapos de linha e restos de cola acumulados entre os discos, impedindo que os pratos fechem e gerando ninhos de linha gigantes por baixo da peÃ§a",
      "Apertar o botÃ£o de tensÃ£o atÃ© o limite mÃ¡ximo, arrebentando a linha a cada 20 pontos e franzindo o tecido"
    ],
    "troubleshootingTips": [
      "Sempre passe a linha com o calcador totalmente LEVANTADO para que os discos estejam abertos para receber o fio",
      "Limpe os discos passando um pedaÃ§o de linha grossa dobrada ou um fio dental sem cera entre os pratos para remover penugens",
      "Ao passar a linha, puxe-a com as duas mÃ£os para frente e para trÃ¡s atÃ© sentir o clique e a resistÃªncia firme de encaixe"
    ],
    "dicaArtrelados": "Para saber se a linha entrou de verdade dentro dos discos de tensÃ£o na sua mÃ¡quina domÃ©stica, segure a linha perto do cone e puxe pela ponta da agulha: com o calcador levantado, a linha deve correr soltinha; quando vocÃª abaixa a alavanca do calcador, a linha precisa ficar pesada e firme na hora!",
    "voceSabia": "Nas mÃ¡quinas industriais modernas multicabeÃ§as mais avanÃ§adas, os tradicionais discos de tensÃ£o acionados por mola foram substituÃ­dos por tensores digitais comandados por servomotores magnÃ©ticos, que recalculam a pressÃ£o dos discos ponto a ponto de acordo com o sentido do bordado.",
    "practicalExercise": "Com a mÃ¡quina desligada e calcador levantado, passe a linha no cabeÃ§ote. Abaixe o calcador e puxe a linha na ponta da agulha para sentir a resistÃªncia: gire o botÃ£o de tensÃ£o do nÃºmero 4 para o nÃºmero 2 e puxe novamente para sentir a linha mais leve; gire para o nÃºmero 6 e sinta o fio mais pesado. Volte para a regulagem padrÃ£o (3.5 a 4.0)!",
    "quickSummary": "Dispositivo mecÃ¢nico de pratos metÃ¡licos cÃ´ncavos acionados por mola que regula a resistÃªncia e a traÃ§Ã£o da linha superior.",
    "relatedTerms": [
      "Controle de TensÃ£o da Linha",
      "Barra de TensÃ£o dos Fios",
      "Brilho da Linha",
      "Bobbin Thread (Linha da Bobina)"
    ],
    "tags": [
      "discos de tensÃ£o",
      "tensÃ£o",
      "regulagem",
      "cabeÃ§ote",
      "mecÃ¢nica",
      "linha superior"
    ],
    "bibliographicReferences": [
      "BROTHER. Upper Thread Tension Disc Assembly & Calibration Manual. Nagoya: Brother, 2022.",
      "TAJIMA. Tension Disc Maintenance, Cleaning and Gram-Force Gauging. Nagoya, 2023.",
      "ARTRELADOS. O Segredo dos Discos de TensÃ£o: Como Evitar LaÃ§adas e Ninhos no Avesso. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-045-desfiador-de-bordado",
    "code": "D-045",
    "term": "Desfiador de Bordado / Desmanchador de Pontos (Seam Ripper / Stitch Eraser)",
    "level": "Fundamental ðŸŸ¢",
    "category": "AcessÃ³rios e Ferramentas",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dis- + filum (desfazer os fios tecidos) e do inglÃªs stitch eraser (apagador elÃ©trico de pontos). Ferramenta manual e elÃ©trica indispensÃ¡vel de socorro em oficinas de bordado.",
    "summary": "Ferramenta manual ou eletromecÃ¢nica de corte de precisÃ£o utilizada para cortar e remover pontos de bordado sem danificar o tecido base.",
    "definition": "O desfiador de bordado (desmanchador de pontos ou 'apagador de bordado' / stitch eraser) Ã© uma ferramenta manual dotada de ponta afiada e esfera de proteÃ§Ã£o, ou um aparelho elÃ©trico com micrÃ³lÃ¢minas oscilantes em aÃ§o inoxidÃ¡vel, desenvolvido para cortar cirurgicamente a linha inferior da bobina no avesso da peÃ§a, permitindo a extraÃ§Ã£o rÃ¡pida dos pontos da frente sem cortar a trama do tecido e sem furar a roupa.",
    "technicalDetails": "VersÃµes manuais: aÃ§o temperado com ponta fina curvada de 0.5mm e microesfera plÃ¡stica vermelha de proteÃ§Ã£o. VersÃµes elÃ©tricas (Stitch Eraser): motor rotativo de 6.000 RPM com lÃ¢mina de precisÃ£o de 10mm a 15mm de largura, alimentado por bateria recarregÃ¡vel.",
    "howItWorks": [
      "1. A peÃ§a a ser corrigida Ã© virada com o avesso voltado para cima sobre uma superfÃ­cie plana e rÃ­gida.",
      "2. A lÃ¢mina do desfiador Ã© passada suavemente apenas sobre os pontos brancos da linha da bobina.",
      "3. Uma vez cortadas as laÃ§adas inferiores, vira-se a peÃ§a para a frente.",
      "4. Com uma pinÃ§a de ateliÃª ou fita adesiva larga, puxam-se as linhas superiores da frente, que saem inteiras e sem esforÃ§o."
    ],
    "beginnerExplanation": "Ã‰ a ferramenta 'salva-vidas' do ateliÃª para quando a gente borda um nome com letra errada ou erra a cor da linha. Ela corta os pontinhos pelo lado de trÃ¡s da roupa com muito cuidado para vocÃª tirar as linhas sem rasgar o tecido e sem furar a peÃ§a do cliente.",
    "applications": [
      "RemoÃ§Ã£o de nomes ou logotipos bordados com erro de digitaÃ§Ã£o",
      "EliminaÃ§Ã£o de ninhos de linha embolados por baixo da chapa de agulha",
      "Desmanche de monogramas antigos para reaproveitamento de uniformes",
      "CorreÃ§Ã£o de detalhes desalinhados em matrizes de alta densidade"
    ],
    "commonErrors": [
      "Tentar desmanchar o bordado cortando os pontos pela frente, picotando o tecido e abrindo buracos irreparÃ¡veis na roupa",
      "Apertar o desmanchador elÃ©trico com forÃ§a excessiva contra o tecido em vez de deslizar suavemente sobre as linhas",
      "Puxar fios teimosos na forÃ§a bruta sem antes cortar as laÃ§adas no avesso, repuxando a trama da camisa"
    ],
    "troubleshootingTips": [
      "Sempre desmanche pelo AVESSO da peÃ§a cortando unicamente as linhas da bobina",
      "Mantenha o tecido bem esticado com as mÃ£os ou preso levemente em um bastidor enquanto passa a lÃ¢mina",
      "Depois de retirar as linhas, passe o ferro a vapor com um paninho por cima para fechar os furinhos deixados pela agulha"
    ],
    "dicaArtrelados": "Para tirar qualquer bordado em 2 minutos sem sofrimento: vire a peÃ§a pelo avesso, passe o desfiador elÃ©trico ou a lÃ¢mina manual apenas na linha branca da bobina. Depois, pegue um pedaÃ§o de fita crepe larga, cole por cima da frente do bordado e puxe: todos os fios coloridos saem colados na fita como mÃ¡gica!",
    "voceSabia": "O desmanchador de costura clÃ¡ssico de metal com uma bolinha vermelha na ponta foi patenteado em 1883. A bolinha vermelha serve exatamente para ficar virada para baixo encostada no tecido, deslizando suavemente para impedir que a ponta afiada fure ou rasgue o pano!",
    "practicalExercise": "Pegue um retalho com uma letra bordada de teste: vire o retalho pelo avesso e, com o desmanchador de pontos, corte cuidadosamente as laÃ§adas da linha da bobina. Vire para a frente, passe uma escovinha ou fita adesiva e veja como as linhas superiores se soltam perfeitamente sem danificar o tecido!",
    "quickSummary": "Instrumento manual ou elÃ©trico de corte de precisÃ£o projetado para seccionar as laÃ§adas do avesso e desmanchar bordados com seguranÃ§a.",
    "relatedTerms": [
      "Bobbin Thread (Linha da Bobina)",
      "Defeito de Bordado",
      "CorreÃ§Ã£o de Pontos",
      "PinÃ§a de AteliÃª"
    ],
    "tags": [
      "desfiador",
      "desmanchador",
      "stitch eraser",
      "ferramentas",
      "correÃ§Ã£o",
      "avesso"
    ],
    "bibliographicReferences": [
      "PEGGY'S STITCH ERASER. Commercial Embroidery Removal & Fabric Recovery Manual. California, 2022.",
      "KRAUSZ, P. Repair, Stitch Removal and Garment Salvage in Industrial Embroidery. New York, 2021.",
      "ARTRELADOS. Como Desmanchar Bordados em Minutos Sem Rasgar o Tecido: O Passo a Passo Definitivo. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-046-dinamica-da-lacada",
    "code": "D-046",
    "term": "DinÃ¢mica da LaÃ§ada / LaÃ§ada da Agulha (Loop Formation Dynamics)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "Terminologia Geral",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego dynamikÃ³s (relativo Ã  forÃ§a e movimento mecÃ¢nico) e do latim laqueus (laÃ§o, nÃ³ corredio). Teoria cinemÃ¡tica e tribolÃ³gica da formaÃ§Ã£o do ponto tipo 301 (Lockstitch).",
    "summary": "FenÃ´meno cinemÃ¡tico de expansÃ£o da folga da linha superior na subida da agulha para captura precisa pela ponta da lanÃ§adeira.",
    "definition": "A dinÃ¢mica da laÃ§ada Ã© o fenÃ´meno fÃ­sico-mecÃ¢nico que ocorre no ponto morto inferior do ciclo de costura: apÃ³s a agulha atingir a profundidade mÃ¡xima e iniciar sua subida (recuo de 1.5mm a 2.5mm), o atrito da linha com o tecido retarda o movimento do fio, fazendo com que a linha superior se descole da cava da agulha e se expanda lateralmente em forma de arco (laÃ§ada ou loop), permitindo que a ponta afiada da lanÃ§adeira rotativa passe por dentro desse arco e entrelace a linha da bobina.",
    "technicalDetails": "Altura de recuo crÃ­tico: 1.8mm a 2.2mm a partir do Ponto Morto Inferior (PMI). A folga entre a ponta da lanÃ§adeira e a cava da agulha no instante da captura da laÃ§ada deve ser calibrada entre 0.05mm e 0.10mm (espessura de uma folha de papel).",
    "howItWorks": [
      "1. A agulha desce com a linha superior atravessando o tecido, a entretela e o furo da chapa de agulha.",
      "2. No ponto mais baixo, a linha fica esticada rente Ã  canaleta longa da agulha.",
      "3. A barra de agulha sobe 2mm; a inÃ©rcia e o atrito com o tecido impedem que a linha suba na mesma velocidade.",
      "4. O excesso de linha projeta-se para fora da cava traseira da agulha, formando um laÃ§o oval aberto.",
      "5. A ponta da lanÃ§adeira rotativa entra exatamente no centro desse laÃ§o, conduzindo a linha superior ao redor da caixa de bobina."
    ],
    "beginnerExplanation": "Ã‰ a mÃ¡gica que acontece embaixo da mÃ¡quina: quando a agulha fura o pano e comeÃ§a a subir um pouquinho, a linha faz uma 'barriguinha' (um laÃ§o). A ponta afiada da lanÃ§adeira passa por dentro desse laÃ§o num piscar de olhos e dÃ¡ o nÃ³ com a linha de baixo.",
    "applications": [
      "Sincronismo mecÃ¢nico entre barra de agulha e lanÃ§adeira rotativa",
      "DiagnÃ³stico avanÃ§ado de falhas de ponto (pontos pulados / skipped stitches)",
      "Escolha correta da cava da agulha para linhas grossas ou metÃ¡licas",
      "Regulagem de mÃ¡quinas industriais operando em altÃ­ssima velocidade (1200 PPM)"
    ],
    "commonErrors": [
      "Colocar a agulha com a cava virada para o lado errado, impedindo a formaÃ§Ã£o da laÃ§ada e fazendo a mÃ¡quina pular todos os pontos",
      "Bordar sem entretela em malhas, fazendo o tecido subir junto com a agulha (flagging) e destruindo a abertura da laÃ§ada",
      "LanÃ§adeira com folga excessiva (mais de 0.20mm de distÃ¢ncia da agulha), passando por fora da laÃ§ada sem laÃ§ar o ponto"
    ],
    "troubleshootingTips": [
      "Se a mÃ¡quina estiver pulando pontos, verifique se a agulha estÃ¡ colocada com a cava virada exatamente para trÃ¡s ou para o lado da lanÃ§adeira",
      "Utilize agulhas novas com geometria de canaleta profunda (como Schmetz Embroidery ou Groz-Beckert DBxK5)",
      "Garanta que o tecido esteja perfeitamente estabilizado no bastidor para evitar que ele oscile verticalmente"
    ],
    "dicaArtrelados": "A maior inimiga da laÃ§ada perfeita Ã© a entretela fraca ou o bastidor frouxo! Quando o tecido fica frouxo, ele sobe junto com a agulha e a laÃ§ada nÃ£o abre embaixo da chapa: o resultado sÃ£o pontos pulados e linhas desfiadas. Mantenha o tecido esticado como um tambor!",
    "voceSabia": "Em uma mÃ¡quina de bordar funcionando a 1.000 pontos por minuto, o ciclo completo de descida da agulha, formaÃ§Ã£o da laÃ§ada, captura pela lanÃ§adeira e aperto pelo estica-fio ocorre em apenas 60 milissegundos (0,06 segundos)!",
    "practicalExercise": "Com a tampa da lanÃ§adeira aberta e a mÃ¡quina desligada, gire o volante manualmente devagar: observe a agulha descer atÃ© o fundo e comeÃ§ar a subir. Veja com seus prÃ³prios olhos a 'barriguinha' de linha se abrir do lado da cava e a ponta da lanÃ§adeira entrar perfeitamente dentro dela!",
    "quickSummary": "Processo cinemÃ¡tico de expansÃ£o da folga da linha superior no recuo da agulha para permitir a captura precisa pela lanÃ§adeira.",
    "relatedTerms": [
      "Canoa da Bobina",
      "Barra de Agulha",
      "Agulha de Bordado",
      "Ponto de Bordado"
    ],
    "tags": [
      "laÃ§ada",
      "lanÃ§adeira",
      "sincronismo",
      "mecÃ¢nica",
      "ponto 301",
      "cinemÃ¡tica"
    ],
    "bibliographicReferences": [
      "GROZ-BECKERT. Loop Formation and Thread Dynamics in Industrial Machine Embroidery. Albstadt, 2022.",
      "SCHMETZ. The Anatomy of Lockstitch Formation: Timing, Clearance & Needle Deflection. Alsdorf, 2023.",
      "ARTRELADOS. MecÃ¢nica da LaÃ§ada Perfeita: Por Que a MÃ¡quina Pula Pontos e Como Resolver. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-047-divisao-de-matriz",
    "code": "D-047",
    "term": "DivisÃ£o de Matriz / Multiposicionamento (Design Splitting & Multi-Hooping)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim divisio, -onis (ato de repartir, separar em partes) e matrix, -icis (molde gerador). TÃ©cnica computacional criada para superar as limitaÃ§Ãµes fÃ­sicas de campo Ãºtil dos bastidores.",
    "summary": "TÃ©cnica de fragmentaÃ§Ã£o de matrizes gigantes em seÃ§Ãµes sequenciais com marcas de registro para bordados que excedem o tamanho do bastidor.",
    "definition": "A divisÃ£o de matriz (ou tÃ©cnica de multiposicionamento / design splitting) Ã© o mÃ©todo avanÃ§ado de engenharia de digitalizaÃ§Ã£o que consiste em particionar um desenho de grandes dimensÃµes em duas ou mais seÃ§Ãµes menores interligadas, inserindo cruzetas de alinhamento e pontos de registro precisos para que cada parte seja bordada sucessivamente em mÃºltiplos bastidoramentos no tecido sem desencontros visÃ­veis.",
    "technicalDetails": "Executada atravÃ©s de ferramentas de linha de corte de divisÃ£o (Multi-Hoop Tool). Insere pontos de registro (Alignment Crosshairs/Marks) de 3 a 5 pontos corridos nos pontos de encontro entre bastidores vizinhos, com tolerÃ¢ncia mÃ¡xima de encaixe de 0.3mm.",
    "howItWorks": [
      "1. O desenho completo de grande porte (ex: 20x40cm) Ã© carregado no software de bordado.",
      "2. O digitalizador define a grade de bastidores virtuais sobrepostos cobrindo toda a Ã¡rea da arte.",
      "3. As linhas de corte sÃ£o traÃ§adas atravÃ©s de caminhos naturais (espaÃ§os vazios ou sob contornos de satin) para ocultar as emendas.",
      "4. O software gera os arquivos individuais numerados (Parte 1, Parte 2, Parte 3) com suas respectivas cruzetas de alinhamento.",
      "5. No ateliÃª, o operador borda a Parte 1 com a cruzeta de marcaÃ§Ã£o, rebastidora o tecido alinhando a cruzeta pelo laser ou agulha e executa a Parte 2 perfeitamente encaixada."
    ],
    "beginnerExplanation": "Ã‰ o mÃ©todo inteligente de cortar um desenho bem grandÃ£o em dois ou trÃªs pedaÃ§os no computador para conseguir bordar na sua mÃ¡quina mesmo que o seu bastidor seja pequeno. O programa cria marquinhas de cruzinha para vocÃª emendar as partes no tecido certinho sem ninguÃ©m notar a emenda!",
    "applications": [
      "Bordado de costas inteiras de jaquetas e roupÃµes de banho",
      "Barrados longos e contÃ­nuos de toalhas de mesa e lenÃ§Ã³is",
      "Grandes brasÃµes para estandartes e bandeiras religiosas",
      "ExecuÃ§Ã£o de matrizes grandes em mÃ¡quinas domÃ©sticas com bastidor padrÃ£o (10x10cm ou 13x18cm)"
    ],
    "commonErrors": [
      "Cortar a matriz no meio de um preenchimento tatami maciÃ§o, gerando uma cicatriz visÃ­vel na emenda dos pontos",
      "Rebastidorar o tecido com Ã¢ngulo torto em relaÃ§Ã£o Ã s cruzetas de registro, fazendo a segunda metade sair inclinada",
      "NÃ£o levar em consideraÃ§Ã£o o repuxo do tecido entre a primeira e a segunda parte bordada"
    ],
    "troubleshootingTips": [
      "Sempre planeje a linha de divisÃ£o passando por contornos, linhas vazias ou sob colunas de ponto cheio",
      "Utilize agulhas ou alfinetes finos espetados exatamente no centro da cruzeta de alinhamento para acertar a posiÃ§Ã£o da agulha no segundo bastidor",
      "Utilize bastidores magnÃ©ticos ou gabaritos de alinhamento para facilitar o rebastidoramento reto"
    ],
    "dicaArtrelados": "Para acertar a emenda de matrizes divididas com precisÃ£o de agulha: quando a mÃ¡quina bordar a cruzeta da primeira parte, abaixe a agulha da mÃ¡quina no centro exato da cruzeta com o volante antes de iniciar a segunda parte. A emenda fica 100% invisÃ­vel aos olhos!",
    "voceSabia": "Softwares profissionais como o Wilcom EmbroideryStudio calculam automaticamente o melhor caminho de divisÃ£o inteligente (Smart Split), evitando cortar objetos sÃ³lidos e camuflando os pontos de emenda nas transiÃ§Ãµes de cores naturais da arte.",
    "practicalExercise": "No seu software de bordado, pegue uma matriz de 15x25cm e ative a ferramenta Multi-Hoop com bastidores 13x18cm: divida a matriz em duas etapas com cruzetas de registro automÃ¡ticas. Exporte os dois arquivos e visualize no simulador como as cruzetas servem de guia de encaixe perfeito!",
    "quickSummary": "Particionamento sistemÃ¡tico de matrizes de grande porte em seÃ§Ãµes sequenciais com marcas de registro para bastidores menores.",
    "relatedTerms": [
      "Bastidor Virtual",
      "Bordado em Bastidor Expandido",
      "Bordado ContÃ­nuo",
      "Deslocamento de Origem"
    ],
    "tags": [
      "divisÃ£o",
      "matriz",
      "multi-hooping",
      "grandes formatos",
      "alinhamento",
      "software"
    ],
    "bibliographicReferences": [
      "WILCOM. Multi-Hooping and Large Design Splitting Guidelines. Sydney: Wilcom, 2022.",
      "BERNINA. Multi-Hooping Masterclass: Aligning Split Embroidery Files. Steckborn, 2023.",
      "ARTRELADOS. O Segredo dos Grandes Bordados: Como Dividir Matrizes e Emendar Sem Cicatrizes. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-048-dupla-face-bordado-limpo",
    "code": "D-048",
    "term": "Dupla Face / Bordado Limpo no Avesso (Reversible & Clean-Back Embroidery)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "Acabamento & FinalizaÃ§Ã£o",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim duplus (duplo, que tem dois lados) e facies (rosto, aspecto visual). PadrÃ£o de excelÃªncia da alta costura e do enxoval de luxo internacional.",
    "summary": "TÃ©cnica de digitalizaÃ§Ã£o e costura com linha de bobina coordenada para produzir peÃ§as onde o avesso tem acabamento perfeito e apresentÃ¡vel.",
    "definition": "O bordado dupla face (ou tÃ©cnica do avesso perfeito / clean-back embroidery) Ã© o conjunto de procedimentos de digitalizaÃ§Ã£o e parametrizaÃ§Ã£o mecatrÃ´nica planejado para que o avesso do bordado apresente estÃ©tica impecÃ¡vel, sem fios de salto aparentes, sem nÃ³s grosseiros e sem entretelas visÃ­veis, utilizando linhas inferiores da mesma tonalidade da linha superior ou entretelas hidrossolÃºveis 100% lavÃ¡veis.",
    "technicalDetails": "UtilizaÃ§Ã£o de linha inferior de poliÃ©ster 60wt/70wt tingida na mesma cor exata da linha do topo. ProgramaÃ§Ã£o de caminhos de conexÃ£o contÃ­nuos por ponto corrido sob colunas de satin (eliminaÃ§Ã£o de comandos Trim no avesso) e entretela hidrossolÃºvel de 40g a 80g de fÃ¡cil remoÃ§Ã£o.",
    "howItWorks": [
      "1. A bobina Ã© enchida previamente com a mesma linha colorida utilizada no cabeÃ§ote superior.",
      "2. O tecido (toalha, manta, lenÃ§o) Ã© estabilizado exclusivamente com entretela hidrossolÃºvel.",
      "3. A matriz Ã© digitalizada com caminhos de costura inteligentes, escondendo os trajetos de deslocamento sob os pontos cheios.",
      "4. A tensÃ£o superior e inferior Ã© rigorosamente equilibrada para que a linha nÃ£o repuxe para nenhum dos lados.",
      "5. ApÃ³s o bordado, a peÃ§a Ã© lavada e o avesso fica macio, com as mesmas cores e sem resÃ­duos Ã¡speros."
    ],
    "beginnerExplanation": "Ã‰ a tÃ©cnica para deixar a parte de trÃ¡s do bordado tÃ£o bonita e limpinha quanto a parte da frente, usando linha da bobina da mesma cor da linha de cima e entretela que derrete na Ã¡gua, ideal para toalhas e mantinhas de bebÃª onde o avesso fica aparecendo.",
    "applications": [
      "Toalhas de lavabo e banho de alto padrÃ£o",
      "Fraldas e mantas de bebÃª com contato direto na pele sensÃ­vel",
      "Xales, lenÃ§os de seda, cangas e peÃ§as com duas faces visÃ­veis",
      "Cortinas, jogos americanos e guardanapos finos de banquete"
    ],
    "commonErrors": [
      "Usar entretela rasgÃ¡vel comum, deixando pedaÃ§os brancos de papel presos e duros no verso da toalha",
      "Usar linha branca comum na bobina para bordar desenhos escuros ou coloridos em peÃ§as dupla face",
      "Deixar pontas soltas de linha sem corte automÃ¡tico rente no avesso"
    ],
    "troubleshootingTips": [
      "Enrole bobinas com a mesma linha de bordar superior para cada cor predominante do desenho",
      "Substitua todas as entretelas de papel por entretela hidrossolÃºvel solÃºvel em Ã¡gua morna",
      "Calibre a tensÃ£o da bobina para ficar perfeitamente neutra em relaÃ§Ã£o Ã  tensÃ£o superior"
    ],
    "dicaArtrelados": "Para fraldas de bebÃª e toalhas de luxo: use sempre linha da mesma cor na bobina e entretela hidrossolÃºvel. Ao final, passe um paninho Ãºmido no avesso e corte os fiapos com tesoura de arremate curva: o avesso fica tÃ£o lindo e macio que a cliente nÃ£o sabe dizer qual Ã© a frente e qual Ã© o verso!",
    "voceSabia": "Na tradiÃ§Ã£o do bordado chinÃªs imperial de Xiang e Suzhou, o bordado dupla face manual era considerado o Ã¡pice supremo da arte tÃªxtil: os mestres artesÃ£os conseguiam bordar um gato de olhos abertos na frente e um tigre feroz no verso da mesma seda transparente.",
    "practicalExercise": "Encha uma carretilha com linha de poliÃ©ster vermelha e coloque o mesmo cone vermelho no cabeÃ§ote. Monte um pedaÃ§o de linho com entretela hidrossolÃºvel e borde uma flor em ponto cheio. Lave a amostra em Ã¡gua morna e veja como o avesso fica incrivelmente limpo, macio e da mesma cor da frente!",
    "quickSummary": "MÃ©todo de produÃ§Ã£o com linha de bobina combinando e entretela hidrossolÃºvel para gerar bordados com avesso impecÃ¡vel.",
    "relatedTerms": [
      "Bobbin Thread (Linha da Bobina)",
      "Entretela HidrossolÃºvel",
      "Corte AutomÃ¡tico de Linha",
      "Controle de TensÃ£o da Linha"
    ],
    "tags": [
      "dupla face",
      "avesso perfeito",
      "enxoval",
      "bebÃª",
      "toalhas",
      "acabamento"
    ],
    "bibliographicReferences": [
      "MADEIRA. Reversible Embroidery and Clean-Back Finishing Standards. Freiburg, 2022.",
      "KRAUSZ, P. Luxury Monogramming: Double-Sided Techniques for High-End Linens. London, 2021.",
      "ARTRELADOS. O Avesso Perfeito: TÃ©cnicas para Encantar Clientes de Enxovais Finos. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-049-debrum-bordado",
    "code": "D-049",
    "term": "Debrum Bordado (Bound Edge / AppliquÃ© Overcasting)",
    "level": "Fundamental ðŸŸ¢",
    "category": "Pontos BÃ¡sicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do Ã¡rabe vulgar ad-dabrun (orla dobrada, fita de reforÃ§o perimÃ©trico). TÃ©cnica clÃ¡ssica da alfaiataria adaptada Ã  parametrizaÃ§Ã£o eletrÃ´nica de bordados de contorno.",
    "summary": "Acabamento perimÃ©trico em fita ou tecido dobrado fixado por colunas de ponto cheio para proteger e reforÃ§ar as bordas de peÃ§as tÃªxteis.",
    "definition": "O debrum bordado Ã© a aplicaÃ§Ã£o estrutural e decorativa em que uma tira de tecido dobrado, viÃ©s ou fita Ã© sobreposta e costurada ao longo da borda perimÃ©trica de uma peÃ§a tÃªxtil (como toalhas, babadores, mantas e caminhos de mesa) por meio de uma densa coluna de ponto cheio (satin) ou ponto festonÃª digitalizado, conferindo vedaÃ§Ã£o total contra desfiamentos e reforÃ§o mecÃ¢nico.",
    "technicalDetails": "Digitalizado com largura de coluna entre 3.5mm e 5.0mm e densidade de 0.38mm. Possui costura guia de posicionamento perimÃ©trico e underlay de borda dupla (double edge walk) com compensaÃ§Ã£o de repuxo de +0.40mm para abraÃ§ar a espessura do viÃ©s dobrado.",
    "howItWorks": [
      "1. A mÃ¡quina executa a primeira costura simples indicando a linha guia de encaixe do debrum.",
      "2. O operador acomoda o viÃ©s ou a fita dobrada sobre a linha marcada na peÃ§a.",
      "3. Uma costura de alinhave fixa temporariamente o debrum no lugar.",
      "4. A coluna final de ponto cheio em zigue-zague denso costura sobre a junÃ§Ã£o, lacrando as margens do tecido com elegÃ¢ncia e alta resistÃªncia mecÃ¢nica."
    ],
    "beginnerExplanation": "Ã‰ uma bordinha ou fita de tecido dobradinha que a gente prega na beirada de toalhas, fraldas ou panos de prato usando um ponto cheio bem gordinho e resistente para a borda nÃ£o desfiar e ficar super charmosa.",
    "applications": [
      "Acabamento de bordas em toalhas de banho e rosto infantis",
      "Barrados perimÃ©tricos de panos de copa e jogos americanos",
      "Bordas reforÃ§adas em babadores e mantinhas de recÃ©m-nascido",
      "Arremate perimÃ©trico de tapetes decorativos e almofadas"
    ],
    "commonErrors": [
      "Usar debrum de tecido muito grosso que faÃ§a a agulha entortar ao bater sobre mÃºltiplas camadas",
      "Digitalizar a coluna de acabamento muito estreita (menos de 3mm), deixando a beirada do viÃ©s escapar",
      "NÃ£o alinhar o debrum perfeitamente com a costura guia antes do ponto cheio final"
    ],
    "troubleshootingTips": [
      "Utilize fita de viÃ©s de algodÃ£o 100% ou tecido tricoline prÃ©-passado no ferro para evitar enrugamento",
      "Aplique uma fita crepe de ateliÃª ou cola bastÃ£o temporÃ¡ria para segurar o debrum bem esticado antes da costura final",
      "Use agulha tamanho 80/12 ou 90/14 com ponta afiada para atravessar a dobra do viÃ©s com facilidade"
    ],
    "dicaArtrelados": "Para fazer debruns perfeitos em toalhinhas de boca sem precisar ir para a mÃ¡quina de costura reta: monte o barrado de tricoline direto no bastidor de bordar usando a matriz de debrum inteligente: a bordadeira marca, fixa e arremata com ponto cheio tudo em uma Ãºnica etapa!",
    "voceSabia": "Na histÃ³ria do vestuÃ¡rio medieval, o debrum era usado exclusivamente para proteger a bainha de mantos reais contra o atrito com o chÃ£o e a lama. Com o advento das mÃ¡quinas de bordar, tornou-se um dos acabamentos decorativos mais populares e lucrativos dos ateliÃªs.",
    "practicalExercise": "Digitalize um retÃ¢ngulo com cantos arredondados contendo uma costura guia, uma parada programada (Stop) e uma coluna de Satin de 4.0mm. Borde sobre um tecido plano aplicando uma tira de tecido estampado na parada: veja como o debrum bordado fica impecÃ¡vel e com toque profissional!",
    "quickSummary": "Tira de tecido dobrado ou viÃ©s fixada na extremidade da peÃ§a atravÃ©s de colunas de ponto cheio para reforÃ§o e arremate de bordas.",
    "relatedTerms": [
      "Borda de Acabamento",
      "Bordado AppliquÃ© (AplicaÃ§Ã£o)",
      "Coluna de Satin",
      "Costura de Contorno"
    ],
    "tags": [
      "debrum",
      "viÃ©s",
      "acabamento",
      "bordas",
      "barrados",
      "enxoval"
    ],
    "bibliographicReferences": [
      "WILCOM. Border Digitizing, Binding and Edge Finishing Guidelines. Sydney: Wilcom, 2022.",
      "COATS INDUSTRIAL. Edge Binding, Trimming and Overcasting Mechanics. London, 2021.",
      "ARTRELADOS. Barrados e Debruns no Bastidor: Acabamentos Nobres para Panos de Prato e Toalhas. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-050-degrade-de-pontos",
    "code": "D-050",
    "term": "DegradÃª de Pontos / Ponto Sombreado (Stitch Gradient & Color Blending)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "Pontos BÃ¡sicos & Decorativos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francÃªs dÃ©grader (diminuir gradualmente em intensidade ou tom). TÃ©cnica de transiÃ§Ã£o cromÃ¡tica desenvolvida a partir da pintura a Ã³leo e adaptada aos algoritmos de densidade variÃ¡vel de bordado.",
    "summary": "TÃ©cnica de transiÃ§Ã£o suave entre duas ou mais cores atravÃ©s do entrelaÃ§amento de camadas com densidades gradualmente decrescentes.",
    "definition": "O degradÃª de pontos (ou sombreado de cores / color blending) Ã© a tÃ©cnica avanÃ§ada de digitalizaÃ§Ã£o em que duas ou mais camadas de pontos de cores diferentes sÃ£o sobrepostas com densidades variÃ¡veis e gradualmente decrescentes (comprimento e espaÃ§amento interpolados), criando uma transiÃ§Ã£o Ã³ptica suave, efeitos tridimensionais de luz e sombra, e a ilusÃ£o de fusÃ£o de cores conhecida como 'pintura com agulha'.",
    "technicalDetails": "Executado por perfis de densidade exponencial ou linear (Gradient Fill Profiles). A camada de cor base inicia densa (0.40mm) e expande o espaÃ§amento atÃ© 1.5mm; a segunda cor sobreposta faz o trajeto inverso (de 1.5mm para 0.40mm), gerando o entrelaÃ§amento Ã³ptico perfeito das linhas.",
    "howItWorks": [
      "1. O digitalizador desenha o objeto base e ativa a ferramenta de Densidade Gradiente (Gradient / Accordion Stitch).",
      "2. Ã‰ selecionada a primeira cor (ex: amarelo escuro) com densidade decrescente de baixo para cima.",
      "3. O segundo objeto com a cor clara (ex: amarelo claro) Ã© sobreposto com densidade decrescente de cima para baixo.",
      "4. Os pontos das duas cores se intercalam nos mesmos Ã¢ngulos de costura.",
      "5. A reflexÃ£o de luz nas linhas de poliÃ©ster funde as duas tonalidades ao olhar humano, criando uma transiÃ§Ã£o contÃ­nua sem faixas duras de corte."
    ],
    "beginnerExplanation": "Ã‰ a tÃ©cnica mÃ¡gica de misturar duas ou mais cores de linha no mesmo desenho para fazer um sombreado suave que parece uma pintura (como o pÃ´r do sol ou as sombras de uma flor), fazendo as cores se misturarem suavemente sem aquela divisÃ£o dura de riscos.",
    "applications": [
      "PÃ©talas de flores realistas e folhagens botÃ¢nicas",
      "PÃ´r do sol, paisagens e efeitos de cÃ©u em quadros bordados",
      "Sombreamento de pele, olhos e cabelos em retratos bordados",
      "Logotipos com degradÃªs corporativos modernos e transiÃ§Ãµes metÃ¡licas"
    ],
    "commonErrors": [
      "Usar densidade fixa pesada nas duas cores sobrepostas, criando uma placa grossa e dura de pontos que quebra agulhas",
      "Digitalizar as duas camadas com Ã¢ngulos de ponto totalmente opostos (90Â° de diferenÃ§a), destruindo a ilusÃ£o de fusÃ£o de cor",
      "Fazer o degradÃª em Ã¡reas muito pequenas (menos de 10mm), onde o espaÃ§o fÃ­sico nÃ£o permite a transiÃ§Ã£o gradual dos pontos"
    ],
    "troubleshootingTips": [
      "Mantenha o mesmo Ã¢ngulo de inclinaÃ§Ã£o de pontos nas duas camadas que compÃµem o degradÃª",
      "Utilize linhas de poliÃ©ster trilobal ou viscose brilhante para maximizar a reflexÃ£o luminosa na fusÃ£o das cores",
      "Reduza a densidade da camada inferior em pelo menos 40% antes de sobrepor a segunda cor"
    ],
    "dicaArtrelados": "Para fazer degradÃªs realistas em flores: use sempre 3 tons da mesma famÃ­lia de cor (escuro, mÃ©dio e claro). Comece a base com o tom escuro abrindo os pontos, passe o tom mÃ©dio no meio e finalize a ponta da pÃ©tala com o tom claro: a pÃ©tala parece que acabou de ser colhida do jardim!",
    "voceSabia": "Na digitalizaÃ§Ã£o moderna de alta fidelidade (PhotoStitch), os algoritmos computacionais dividem uma fotografia em atÃ© 16 camadas microscÃ³picas de degradÃª de pontos entrelaÃ§ados, reproduzindo tons de pele humanos com precisÃ£o quase fotogrÃ¡fica usando apenas 4 cores de linha primÃ¡rias.",
    "practicalExercise": "No seu software de bordado, crie um quadrado de 5x5cm: aplique a ferramenta 'Preenchimento Gradiente' com cor azul marinho variando a densidade de 0.38mm a 1.20mm. Duplique o objeto com a cor azul celeste invertendo o sentido do gradiente. Simule os pontos e veja o efeito de cÃ©u degradÃª perfeito!",
    "quickSummary": "MÃ©todo de interpolaÃ§Ã£o e sobreposiÃ§Ã£o de camadas com densidades decrescentes para criar transiÃ§Ãµes suaves de cor e sombra.",
    "relatedTerms": [
      "Densidade VariÃ¡vel & Efeitos Visuais",
      "Bordado Multicolorido",
      "Brilho da Linha",
      "Ã‚ngulo de Ponto"
    ],
    "tags": [
      "degradÃª",
      "sombreado",
      "color blending",
      "pintura com agulha",
      "realismo",
      "software"
    ],
    "bibliographicReferences": [
      "WILCOM. Color Blending, Shading and Accordion Stitch Mastering. Sydney: Wilcom, 2022.",
      "KRAUSZ, P. Thread Painting: Principles of Gradient Stitching and Multi-Tone Shading. New York, 2021.",
      "ARTRELADOS. A Arte do DegradÃª no Bordado Computadorizado: Como Criar Sombras e Realismo. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-051-deslocamento-do-pantografo",
    "code": "D-051",
    "term": "Deslocamento do PantÃ³grafo (Pantograph Traverse / Carriage Movement)",
    "level": "Fundamental ðŸŸ¢",
    "category": "OperaÃ§Ã£o da MÃ¡quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego pan (tudo, todo) e graphein (escrever, desenhar). Sistema cinemÃ¡tico de braÃ§os mecÃ¢nicos articulados inventado por Christoph Scheiner em 1603 e eletrificado na automaÃ§Ã£o tÃªxtil nos anos 1970.",
    "summary": "Movimento mecatrÃ´nico bidimensional nos eixos X e Y que posiciona o bastidor a cada pulso de rotaÃ§Ã£o do cabeÃ§ote de costura.",
    "definition": "O deslocamento do pantÃ³grafo Ã© o movimento mecatrÃ´nico sincronizado executado pelo carro transportador de bastidores ao longo dos eixos cartesianos ortogonais X (movimento lateral) e Y (movimento longitudinal), acionado por servomotores de passo de alta resoluÃ§Ã£o e correias dentadas de precisÃ£o, responsÃ¡vel por transladar o bastidor com o tecido para as coordenadas exatas da prÃ³xima penetraÃ§Ã£o da agulha durante o intervalo em que a agulha estÃ¡ fora do tecido.",
    "technicalDetails": "Acionado por servomotores digitais AC com encoders Ã³pticos de 10.000 pulsos por volta. Desloca-se em uma janela temporal de apenas 25 a 35 milissegundos por ciclo de ponto a velocidades lineares de atÃ© 1.500mm/s com precisÃ£o posicional repetÃ­vel de Â±0.05mm.",
    "howItWorks": [
      "1. A placa controladora da mÃ¡quina decodifica as coordenadas X/Y do prÃ³ximo ponto da matriz.",
      "2. Quando a agulha sobe e sai completamente do tecido (atingindo o Ã¢ngulo de seguranÃ§a de 100Â° do ciclo de rotaÃ§Ã£o), o comando de movimento Ã© disparado.",
      "3. Os servomotores tracionam as correias dentadas, movimentando o braÃ§o do pantÃ³grafo com o bastidor acoplado.",
      "4. O bastidor chega e para exatamente na nova coordenada milissegundos antes da agulha descer novamente.",
      "5. A agulha penetra o tecido estabilizado, reiniciando o ciclo cinemÃ¡tico contÃ­nuo."
    ],
    "beginnerExplanation": "Ã‰ o movimento que o braÃ§o mecÃ¢nico da mÃ¡quina faz levando o bastidor para a esquerda, direita, frente e trÃ¡s bem rapidinho enquanto a agulha sobe e desce, desenhando o bordado no pano com precisÃ£o absoluta.",
    "applications": [
      "MovimentaÃ§Ã£o do bastidor em todos os tipos de matrizes e formatos",
      "ExecuÃ§Ã£o de saltos longos (Jumps) entre diferentes Ã¡reas do desenho",
      "TraÃ§ado de Ã¡rea de trabalho e conferÃªncia de limites perimÃ©tricos (Trace)",
      "Retorno automÃ¡tico do bastidor ao ponto zero apÃ³s o tÃ©rmino do bordado"
    ],
    "commonErrors": [
      "Segurar ou esbarrar a mÃ£o no braÃ§o do pantÃ³grafo enquanto a mÃ¡quina estÃ¡ bordando, fazendo o motor perder o passo e desalinhando o desenho todo",
      "Deixar objetos pesados (tesouras, cones de linha, tecidos caÃ­dos) sobre a mesa atrÃ¡s do pantÃ³grafo, travando o percurso mecÃ¢nico",
      "Bordar sem verificar se a Ã¡rea ao redor da mÃ¡quina estÃ¡ livre de obstÃ¡culos nos eixos X e Y"
    ],
    "troubleshootingTips": [
      "Mantenha a mesa e as guias lineares do pantÃ³grafo sempre limpas de poeira tÃªxtil e lubrificadas conforme o manual",
      "Se o bordado comeÃ§ar a sair torto em escadinha, verifique a tensÃ£o das correias dentadas do pantÃ³grafo",
      "Nunca empurre o carro do pantÃ³grafo com a mÃ¡quina ligada para nÃ£o forÃ§ar os servomotores"
    ],
    "dicaArtrelados": "Deixe sempre uma folga livre de pelo menos 20 centÃ­metros em volta de toda a sua mÃ¡quina de bordar! Uma tesoura esquecida ou um casaco pendurado perto do braÃ§o mÃ³vel do pantÃ³grafo pode travar o carro e fazer o bordado perder o prumo no meio da peÃ§a!",
    "voceSabia": "Nas mÃ¡quinas industriais multicabeÃ§as com 20 cabeÃ§otes, o pantÃ³grafo Ã© uma estrutura de aÃ§o com mais de 10 metros de comprimento que pesa centenas de quilos, mas que consegue se mover, parar e estabilizar com precisÃ£o milimÃ©trica mais de 15 vezes por segundo!",
    "practicalExercise": "Com a mÃ¡quina ligada e em modo de teste, acione as setas manuais do painel para movimentar o pantÃ³grafo nos quatro extremos (X+, X-, Y+, Y-): repare na suavidade do deslocamento dos eixos e veja como o braÃ§o mecÃ¢nico responde instantaneamente a cada comando!",
    "quickSummary": "TranslaÃ§Ã£o mecatrÃ´nica nos eixos X e Y controlada por servomotores que posiciona o bastidor a cada subida da agulha.",
    "relatedTerms": [
      "Carro da MÃ¡quina de Bordado",
      "TraÃ§ado de Ã�rea",
      "Deslocamento de Origem",
      "Controle de Velocidade"
    ],
    "tags": [
      "pantÃ³grafo",
      "eixos X Y",
      "servomotores",
      "movimentaÃ§Ã£o",
      "mecatrÃ´nica",
      "precisÃ£o"
    ],
    "bibliographicReferences": [
      "TAJIMA. Pantograph Drive Mechanics, Servo Tuning and Linear Guide Maintenance. Nagoya: Tajima, 2022.",
      "BARUDAN. XY-Carriage Motion Dynamics and Timing Integration. Tokyo: Barudan, 2023.",
      "ARTRELADOS. A MecÃ¢nica dos Eixos X e Y: Como Cuidar do PantÃ³grafo da sua Bordadeira. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-052-desbobinamento-de-linha-e-sentido-do-fio",
    "code": "D-052",
    "term": "Desbobinamento de Linha e Sentido do Fio (Thread Unwinding Direction & Cross-Wound Feed)",
    "level": "Fundamental ðŸŸ¢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do prefixo des- (separaÃ§Ã£o, liberaÃ§Ã£o) e do francÃªs bobine (carretel cilÃ­ndrico). PrincÃ­pio da fÃ­sica tÃªxtil que rege o comportamento rotacional e a torÃ§Ã£o intrÃ­nseca das linhas durante a alimentaÃ§Ã£o da mÃ¡quina.",
    "summary": "Comportamento dinÃ¢mico de liberaÃ§Ã£o do fio do cone (enrolamento cruzado para cima) versus carretel pequeno (alimentaÃ§Ã£o lateral deitada) que previne nÃ³s e torÃ§Ãµes.",
    "definition": "O desbobinamento de linha (Thread Delivery & Unwinding Dynamics) Ã© o processo fÃ­sico pelo qual o filamento de poliÃ©ster, viscose ou fio metÃ¡lico Ã© liberado da sua embalagem primÃ¡ria (cone grande de 4.000m ou carretel pequeno de 1.000m) em direÃ§Ã£o aos tensores da mÃ¡quina de bordar (Brother, Janome, Bernina/Bernette e Sun Special). Os cones industriais grandes possuem enrolamento cruzado em 'X' (Cross-Wound), projetados para ficar parados na vertical e desenrolar a linha para CIMA por uma haste alta; jÃ¡ os carretÃ©is pequenos possuem enrolamento paralelo reto (Stacked-Wound), devendo girar deitados em um pino horizontal com prendedor de carretel.",
    "technicalDetails": "Se um cone grande de enrolamento cruzado for colocado deitado no pino horizontal, a linha sofre acÃºmulo de torÃ§Ã£o (Kinking / Twist) a cada volta, gerando 'espirais' que travam nos pratinhos tensores e quebram a linha. Cones de 4.000m exigem alimentaÃ§Ã£o vertical com mastro elevado a pelo menos 30cm.",
    "howItWorks": [
      "1. A bordadeira identifica o formato do suporte de linha: se Ã© cone cÃ´nico grande (4.000m) ou carretel reto pequeno (1.000m).",
      "2. Para o cone grande: instala-o na base porta-cones vertical com o mastro alto esticado.",
      "3. A linha desenrola para o alto pelo topo do cone com o carretel 100% parado e sem atrito.",
      "4. Para carretÃ©is retos pequenos: instala-o no pino horizontal da mÃ¡quina e coloca o prendedor de carretel (tampa plÃ¡stica) do tamanho correto.",
      "5. A linha entra no circuito da mÃ¡quina com tensÃ£o suave e linear.",
      "6. A formaÃ§Ã£o do ponto ocorre sem trancos, sem quebras e sem nÃ³s no meio da costura."
    ],
    "beginnerExplanation": "Ã‰ o jeito certo que a linha deve sair do carretel para a mÃ¡quina. Cones grandÃµes de 4.000m precisam ficar em pÃ© paradinhos com a linha subindo para o alto por um ferrinho; jÃ¡ os carretÃ©is pequenos devem ficar deitados no pino da mÃ¡quina. Usar o jeito certo evita que a linha fique dando laÃ§os, embolando ou quebrando toda hora!",
    "applications": [
      "Uso correto de cones industriais de 4.000m e 5.000m no ateliÃª com torre de linha vertical",
      "EliminaÃ§Ã£o de espirais e nÃ³s em linhas de poliÃ©ster trilobal e fios metÃ¡licos brilhantes",
      "AlimentaÃ§Ã£o uniforme da linha superior sem variaÃ§Ã£o de tensÃ£o em altas velocidades (850 PPM)",
      "Escolha correta do prendedor de carretel (disco plÃ¡stico pequeno, mÃ©dio ou grande) em mÃ¡quinas Brother e Janome"
    ],
    "commonErrors": [
      "Colocar o cone grande de 4.000m deitado no pino horizontal original da mÃ¡quina Brother ou Janome, travando o cone e estourando a linha",
      "Usar carretel pequeno sem o disco prendedor de plÃ¡stico, fazendo o carretel pular para fora do pino durante o bordado",
      "Usar prendedor de carretel muito maior que o prÃ³prio carretel, fazendo a linha enganchar na borda do plÃ¡stico a cada volta"
    ],
    "troubleshootingTips": [
      "Para carretÃ©is pequenos deitados, escolha sempre uma tampinha de carretel que tenha o mesmo diÃ¢metro ou seja ligeiramente menor que a borda do carretel",
      "Para cones grandes em pÃ©, mantenha o ferrinho da torre de linha sempre bem esticado para o alto",
      "Se a linha estiver saindo em espirais apertadas parecendo um 'rabinho de porco', coloque uma redinha de proteÃ§Ã£o no cone"
    ],
    "dicaArtrelados": "A linha vive quebrando e vocÃª jÃ¡ trocou a agulha 3 vezes? Olhe como o carretel estÃ¡ na mÃ¡quina! Se for cone grande, ele tem que desenrolar para CIMA na torrinha vertical; se for carretel pequeno, ele tem que girar deitado com a tampinha plÃ¡stica certa. Acerte a posiÃ§Ã£o e a quebra de linha acaba na hora!",
    "voceSabia": "Ao desenrolar um cone de bordado de 4.000 metros deitado, a linha ganha mais de 10.000 voltas extras de torÃ§Ã£o sobre si mesma, o que cria uma forÃ§a elÃ¡stica invisÃ­vel capaz de arrebentar o fio mais resistente!",
    "practicalExercise": "Pegue um cone grande de 4.000m e puxe 1 metro de linha para o lado: solte a ponta e veja como o fio se enrola em si mesmo dando nÃ³s. Agora puxe 1 metro de linha para CIMA: solte e veja como o fio cai perfeitamente liso e esticado!",
    "quickSummary": "DinÃ¢mica correta de liberaÃ§Ã£o do fio (vertical para cones grandes e horizontal para carretÃ©is) que previne torÃ§Ãµes e quebras.",
    "relatedTerms": [
      "Base de Cones e Porta-Carretel Vertical",
      "Armazenamento de Fios e Cones",
      "Ajuste de TensÃ£o da Linha",
      "Quebra de Linha Superior"
    ],
    "tags": [
      "d-052",
      "desbobinamento",
      "sentido do fio",
      "cones grandes",
      "carretel",
      "tensÃ£o",
      "brother",
      "janome",
      "artrelados"
    ],
    "bibliographicReferences": [
      "SUPERIOR THREADS. Thread Delivery Mechanics: Horizontal vs. Vertical Spool Pin Dynamics. St. George, 2022.",
      "BROTHER. Spool Cap Sizing and Thread Guide Delivery Standards. Nagoya, 2023.",
      "ARTRELADOS. O Segredo do Desbobinamento Perfeito: Como Posicionar Cones e CarretÃ©is Sem Quebras. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-053-dispositivo-de-bone-para-maquinas-domesticas",
    "code": "D-053",
    "term": "Dispositivo de BonÃ© para MÃ¡quinas DomÃ©sticas e Semi-Industriais (Cap Driver & Hat Hoop Insert)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "Bastidores & FixaÃ§Ã£o",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dispositivus (aparato mecÃ¢nico adaptado) e do francÃªs bonnet (chapÃ©u, touca). AcessÃ³rio de fixaÃ§Ã£o desenvolvido para adaptar o movimento cartesiano plano Ã s superfÃ­cies curvas de bonÃ©s.",
    "summary": "AcessÃ³rio mecÃ¢nico curvo com presilhas de aba e entretela rÃ­gida que permite bordar na frente curva de bonÃ©s estruturados em mÃ¡quinas de 1 agulha.",
    "definition": "O dispositivo de bonÃ© para mÃ¡quinas domÃ©sticas e semi-industriais (Cap Frame Insert / Hat Hoop Attachment) Ã© um acessÃ³rio mecÃ¢nico especializado compatÃ­vel com bastidores convencionais e pantÃ³grafos de mÃ¡quinas de 1 agulha (Brother BP/PE/NV, Janome MC500E/550E, Bernina e Sun Special). Ã‰ composto por uma placa de fixaÃ§Ã£o com mola de retenÃ§Ã£o para a aba do bonÃ©, grampos laterais e gabarito curvo que mantÃ©m a copa frontal do bonÃ© aberta, esticada e estabilizada sobre entretela pesada ou adesiva, permitindo que a agulha borde logotipos e nomes em superfÃ­cies tridimensionais sem deformar a peÃ§a.",
    "technicalDetails": "Ã�rea Ãºtil de bordado em mÃ¡quinas domÃ©sticas de 1 agulha: cerca de 10x6cm a 13x8cm (delimitada pela curvatura da copa e folga do calcador). Exige rotaÃ§Ã£o da matriz em 180Â° no painel da mÃ¡quina e desativaÃ§Ã£o de bordados no topo da aba.",
    "howItWorks": [
      "1. A bordadeira desdobra a carneira (fita interna de suor) do bonÃ© para fora.",
      "2. Aplica entretela grossa de bonÃ© (rasgÃ¡vel pesada de 80g ou autoadesiva) no verso da frente do bonÃ©.",
      "3. Encaixa a aba do bonÃ© no grampo central do dispositivo de bonÃ© e aperta a mola de travamento.",
      "4. Estica as laterais da copa do bonÃ© prendendo com os grampos elÃ¡sticos nas bordas do aro.",
      "5. Encaixa o bastidor no pantÃ³grafo da mÃ¡quina garantindo que a aba fique apontada para fora.",
      "6. Gira a matriz no painel da mÃ¡quina de cabeÃ§a para baixo (180Â°) e executa o 'Trace' (traÃ§ado de Ã¡rea).",
      "7. A mÃ¡quina borda o logotipo centralizado com precisÃ£o na curvatura do bonÃ©."
    ],
    "beginnerExplanation": "Ã‰ uma pecinha ou bastidor especial com garras de pressÃ£o que serve para prender a aba do bonÃ© bem firme e abrir a parte da frente dele lisinha, para vocÃª conseguir bordar bonÃ©s na sua mÃ¡quina de casa sem amassar o chapÃ©u e sem bater a agulha na aba dura.",
    "applications": [
      "PersonalizaÃ§Ã£o de bonÃ©s de brim, sarja e microfibra para empresas e eventos",
      "Bordados em viseiras esportivas e chapÃ©us de pescador (bucket hats)",
      "Bordados corporativos de logomarcas em bonÃ©s promocionais no ateliÃª",
      "AmpliaÃ§Ã£o da gama de produtos oferecidos por bordadeiras que trabalham em casa"
    ],
    "commonErrors": [
      "Bordar sem rebater a carneira interna do bonÃ©, costurando o forro de suor fechado por engano",
      "Esquecer de girar a matriz em 180Â° na tela da mÃ¡quina, fazendo o bordado sair de cabeÃ§a para baixo no bonÃ©",
      "Bordar muito perto da costura central da aba, quebrando a agulha no reforÃ§o de plÃ¡stico rÃ­gido do bonÃ©"
    ],
    "troubleshootingTips": [
      "FaÃ§a SEMPRE o traÃ§ado de Ã¡rea (Trace) na tela da mÃ¡quina para ter certeza absoluta de que o pÃ© calcador nÃ£o vai encostar na aba do bonÃ©",
      "Use agulha mais grossa e resistente (calibre 90/14 ponta aguÃ§ada ou de TitÃ¢nio) para furar a sarja dura e a entretela do bonÃ©",
      "Reduza a velocidade da sua mÃ¡quina Brother ou Janome para 450 - 550 PPM ao bordar bonÃ©s para mÃ¡xima seguranÃ§a mecÃ¢nica"
    ],
    "dicaArtrelados": "Quer pegar encomendas lucrativas de bonÃ©s na sua mÃ¡quina de bordar caseira? Use o bastidor/dispositivo de bonÃ© com entretela firme de 80g, dobre a fita de dentro do bonÃ© para fora e diminua a velocidade da mÃ¡quina para 500 PPM: seus bonÃ©s vÃ£o sair lindos, retinhos e com acabamento de loja!",
    "voceSabia": "Os bonÃ©s profissionais possuem uma entretela interna plÃ¡stica chamada 'buckram'; em mÃ¡quinas industriais usam-se bastidores circulares giratÃ³rios de 270Â°, mas os dispositivos planos para mÃ¡quinas caseiras conseguem fazer a frente completa do bonÃ© com perfeiÃ§Ã£o!",
    "practicalExercise": "Pegue um bonÃ© promocional e vire a fita de suor interna para fora: posicione-o sobre uma folha de entretela adesiva presa no bastidor da sua mÃ¡quina e prenda a aba com um grampo de pressÃ£o; gire a matriz em 180Â° na tela e faÃ§a o traÃ§ado de Ã¡rea para ver como a agulha passeia perfeitamente na frente do bonÃ©!",
    "quickSummary": "AcessÃ³rio com presilhas de aba que estabiliza a copa de bonÃ©s e viseiras para bordar em mÃ¡quinas de 1 agulha.",
    "relatedTerms": [
      "Adaptador de Bastidor de BonÃ©s / Dispositivo Cap Driver",
      "Bastidor de Bordado",
      "Agulha de TitÃ¢nio",
      "Bordado em Alto Relevo com EVA / 3D Puff"
    ],
    "tags": [
      "d-053",
      "bonÃ©",
      "dispositivo de bonÃ©",
      "cap hoop",
      "brother",
      "janome",
      "viseiras",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Free-Arm & Cap Frame Embroidery Guide for Single-Needle Machines. Nagoya, 2022.",
      "JANOME. Hat Hoop & Cap Insert Attachment User Manual. Tokyo, 2023.",
      "ARTRELADOS. BonÃ©s Perfeitos na MÃ¡quina DomÃ©stica: O Guia Definitivo do Dispositivo de BonÃ© no AteliÃª. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-054-dupla-entretela-estabilizacao-em-camadas",
    "code": "D-054",
    "term": "Dupla Entretela e EstratÃ©gia de EstabilizaÃ§Ã£o em Camadas (Double Stabilizer Layering Strategy)",
    "level": "Fundamental ðŸŸ¢",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim duplus (duplicado, reforÃ§ado) e do francÃªs entoilage (tecido interno de reforÃ§o estrutural). TÃ©cnica de engenharia de estabilizaÃ§Ã£o tÃªxtil criada para controlar o repuxo em matrizes de alta densidade.",
    "summary": "Uso estratÃ©gico de duas camadas de entretela (sobrepostas com sentidos de corte cruzados a 90Â°) para impedir deformaÃ§Ãµes em matrizes pesadas.",
    "definition": "A dupla entretela (Double Layering Stabilizer Technique) Ã© a metodologia fundamental de estabilizaÃ§Ã£o onde duas folhas de entretela de bordado (geralmente rasgÃ¡veis de 40g a 60g, ou uma camada de malha recortÃ¡vel combinada com uma rasgÃ¡vel) sÃ£o aplicadas sob o tecido no bastidor. A chave da tÃ©cnica consiste em cruzar o sentido das fibras nÃ£o-tecidas das duas folhas a um Ã¢ngulo de 90Â° (uma folha no sentido vertical e outra no horizontal), criando uma barreira bidirecional indeformÃ¡vel que anula completamente as forÃ§as de traÃ§Ã£o do ponto cheio e do ponto tatami.",
    "technicalDetails": "As entretelas nÃ£o-tecidas possuem maior resistÃªncia em uma direÃ§Ã£o (sentido longitudinal da mÃ¡quina de fabricaÃ§Ã£o). Ao sobrepor duas folhas com os sentidos cruzados a 90Â°, a resistÃªncia Ã  deformaÃ§Ã£o mecÃ¢nica aumenta em mais de 300% com ganho mÃ­nimo de espessura.",
    "howItWorks": [
      "1. A bordadeira avalia a matriz: se ela possui mais de 15.000 pontos, Ã¡reas grandes de ponto tatami ou contornos finos sobre fundo cheio.",
      "2. Corta duas folhas de entretela rasgÃ¡vel de 50g.",
      "3. Gira a segunda folha a 90 graus em relaÃ§Ã£o Ã  primeira (cruzando as tramas de fibra).",
      "4. Monta as duas folhas juntas no bastidor sob o tecido.",
      "5. A mÃ¡quina de bordar (Brother, Janome, Bernina ou Sun Special) executa o bordado denso.",
      "6. As duas camadas sustentam as milhares de agulhadas sem rasgar prematuramente e sem deixar o tecido franzir.",
      "7. No final, as duas folhas sÃ£o rasgadas facilmente, uma de cada vez, deixando o avesso limpo e o tecido plano."
    ],
    "beginnerExplanation": "Ã‰ usar duas folhas de entretela juntas embaixo do tecido ao invÃ©s de uma sÃ³, colocando uma folha 'em pÃ©' e a outra 'deitada' cruzadas. Isso deixa a base bem firme e forte, impedindo que desenhos grandes e cheios de pontos enruguem a roupa ou furem a entretela antes do bordado terminar.",
    "applications": [
      "Bordados densos e pesados com mais de 15.000 pontos (brasÃµes, logotipos cheios e flores grandes)",
      "Bordados em tecidos finos e moles que enrugam fÃ¡cil (viscose, percal e seda)",
      "Bordados com contornos finos de satin que precisam casar perfeitamente sobre o preenchimento",
      "PrevenÃ§Ã£o do 'efeito sanfona' (enrugamento ao redor do bordado) apÃ³s a lavagem da peÃ§a"
    ],
    "commonErrors": [
      "Colocar apenas uma folha de entretela fina de 30g em um bordado de 25.000 pontos, fazendo a entretela rasgar no meio do bordado e estragar a peÃ§a",
      "Usar duas folhas de entretela recortÃ¡vel muito grossa em fralda de bebÃª, deixando o avesso duro como uma tÃ¡bua de madeira",
      "Rasgar as duas camadas de entretela de uma sÃ³ vez puxando com forÃ§a, esticando os pontos do bordado"
    ],
    "troubleshootingTips": [
      "Para toalhas de banho e panos de prato com matrizes cheias, 2 camadas de entretela rasgÃ¡vel de 50g cruzadas Ã© a fÃ³rmula do sucesso garantido",
      "Para bodies de bebÃª e camisetas de malha, use 1 camada de entretela de malha recortÃ¡vel colada no ferro + 1 camada de entretela rasgÃ¡vel por baixo no bastidor",
      "Ao retirar a entretela no final, rasgue sempre uma folha de cada vez apoiando os dedos rente aos pontos"
    ],
    "dicaArtrelados": "O contorno do seu bordado estÃ¡ saindo fora do lugar ou o tecido estÃ¡ ficando enrugado em volta do desenho? Na prÃ³xima peÃ§a, coloque 2 folhas de entretela rasgÃ¡vel cruzadas no bastidor: o tecido fica esticado como uma tela de pintura e o contorno fecha no milÃ­metro exato!",
    "voceSabia": "Usar duas entretelas mÃ©dias de 50g cruzadas Ã© muito mais eficiente para evitar enrugamento do que usar uma Ãºnica entretela super grossa de 100g, porque o cruzamento das fibras a 90Â° bloqueia o repuxo em todas as direÃ§Ãµes!",
    "practicalExercise": "Rasgue uma folha de entretela com as mÃ£os no sentido do comprimento (veja como rasga fÃ¡cil); agora tente rasgar no sentido da largura (veja como Ã© mais resistente). Agora junte duas folhas cruzadas e tente rasgar: sinta a forÃ§a e estabilidade incrÃ­vel dessa dupla!",
    "quickSummary": "Uso de duas camadas de entretela sobrepostas com fibras cruzadas a 90Â° para mÃ¡xima sustentaÃ§Ã£o em matrizes densas.",
    "relatedTerms": [
      "Backing (Estabilizador / Entretela de Base)",
      "CompensaÃ§Ã£o de Repuxo",
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
      "ARTRELADOS. O Segredo da Dupla Entretela: Como Acabar de Vez com Enrugamentos e Contornos Fora do Lugar. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-055-dente-do-calcador-e-altura-de-flutuacao",
    "code": "D-055",
    "term": "Dente do Calcador e Altura de FlutuaÃ§Ã£o (Hopping Foot Clearance & Height Adjustment)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "MecÃ¢nica & Ajustes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dens (saliÃªncia de apoio mecÃ¢nico) e fluctuare (mover-se em suspensÃ£o suave). ParÃ¢metro mecÃ¢nico de tolerÃ¢ncia vertical do pÃ© calcador pulsante de bordar.",
    "summary": "EspaÃ§amento milimÃ©trico calibrado (0.5mm a 1.5mm) entre a base do pÃ© calcador e o tecido no ponto morto inferior para evitar o esmagamento da peÃ§a.",
    "definition": "O dente do calcador e altura de flutuaÃ§Ã£o (Hopping Foot Clearance / Presser Foot Height) Ã© a distÃ¢ncia milimÃ©trica livre existente entre a sola circular do pÃ© calcador de bordar (calcador pula-pula) e a superfÃ­cie do tecido quando a barra da agulha atinge o ponto morto inferior (fundo da descida). Nas mÃ¡quinas de bordar modernas (Brother sÃ©ries BP/Innov-is, Janome MC, Bernina e Sun Special), essa altura pode ser regulada eletronicamente no painel (ex: de 1.0mm a 4.0mm) ou mecanicamente por parafuso na barra, impedindo que o calcador esmague as felpas de toalhas grossas ou bata em mantas acolchoadas durante o deslocamento do bastidor.",
    "technicalDetails": "CalibraÃ§Ã£o padrÃ£o de fÃ¡brica para tecidos planos de algodÃ£o: 1.0mm a 1.5mm de folga. Para toalhas felpudas e mantas com R1/R2, a altura Ã© aumentada para 2.5mm a 3.5mm; para tecidos finos e sedas, Ã© reduzida para 0.5mm a 1.0mm a fim de evitar o efeito de flutuaÃ§Ã£o e vibraÃ§Ã£o do tecido (Flagging).",
    "howItWorks": [
      "1. A bordadeira prepara uma toalha de banho espessa ou uma capa acolchoada de caderneta de vacinaÃ§Ã£o.",
      "2. Acessa o menu de 'ConfiguraÃ§Ãµes de Bordado' na tela touchscreen da sua mÃ¡quina (Brother, Janome ou Bernina).",
      "3. Localiza a opÃ§Ã£o 'Altura do Calcador / Embroidery Foot Height'.",
      "4. Eleva o valor de 1.5mm (padrÃ£o) para 2.5mm ou 3.0mm.",
      "5. A mÃ¡quina de bordar ajusta o motor de passo interno da barra do calcador.",
      "6. Durante o bordado, o calcador pula suavemente sobre as felpas sem prensar nem arranhar o tecido.",
      "7. O bastidor se desloca livremente sem ruÃ­dos secos de atrito e sem travar os motores.",
      "8. Ao voltar para uma camiseta fina de algodÃ£o, a bordadeira retorna a altura para o padrÃ£o (1.5mm)."
    ],
    "beginnerExplanation": "Ã‰ a regulagem na tela da mÃ¡quina que decide a que altura o 'pezinho de ferro' vai ficar flutuando em cima do tecido enquanto borda. Se for uma toalha grossa ou uma manta fofa de bebÃª, vocÃª manda o pezinho ficar um pouquinho mais alto para ele deslizar por cima sem amassar e sem dar tranco no bastidor!",
    "applications": [
      "Bordados em toalhas de banho aveludadas sem esmagar as felpas nem deixar marcas de risco",
      "Bordados em mantas acolchoadas de bebÃª com manta acrÃ­lica (R1 e R2)",
      "Bordados com placa de EVA 3D em relevo alto sem amassar a espuma de borracha",
      "EliminaÃ§Ã£o do efeito de tecido vibrando (Flagging) em tecidos finos e sedas"
    ],
    "commonErrors": [
      "Deixar o calcador na altura mÃ­nima (1.0mm) ao bordar toalhas felpudas grossas, fazendo o pezinho bater nas felpas e desalinhar o bastidor",
      "Deixar o calcador muito alto (4.0mm) em malhas finas, fazendo o tecido subir junto com a agulha e embolar a linha embaixo",
      "Tentar dobrar ou entortar o pÃ© calcador de metal com alicate para tentar alterar a altura manualmente"
    ],
    "troubleshootingTips": [
      "Nas mÃ¡quinas Brother BP e PE, entre nas configuraÃ§Ãµes da tela e ajuste a 'Altura do PÃ© Calcador' para 2.5mm ou 3.0mm em peÃ§as grossas",
      "Nas mÃ¡quinas Janome MC500E/550E, ajuste a folga do calcador no menu de regulagem da lanÃ§adeira",
      "Se vocÃª ouvir um som de 'estalo de plÃ¡stico' toda vez que a mÃ¡quina anda em uma toalha, o calcador estÃ¡ muito baixo e batendo no tecido"
    ],
    "dicaArtrelados": "Vai bordar toalha de banho bem grossa ou manta de bebÃª na sua Brother ou Janome? NÃ£o deixe o pezinho esmagar o tecido! Entre no menu da mÃ¡quina e aumente a Altura do Calcador para 2.5mm ou 3.0mm: o pezinho vai flutuar macio como uma pluma e o bordado fica impecÃ¡vel!",
    "voceSabia": "O calcador de bordar pula cerca de 700 a 850 vezes por minuto durante o bordado, e o momento em que ele toca o tecido dura menos de 30 milissegundos a cada ponto!",
    "practicalExercise": "Coloque uma toalha grossa no bastidor e gire o volante com a mÃ£o: observe o momento em que a agulha desce e veja a folga entre a sola do calcador e a felpa da toalha. Altere a altura na tela da mÃ¡quina e repita o movimento para ver o pezinho flutuando mais alto com espaÃ§o livre!",
    "quickSummary": "Ajuste manual ou eletrÃ´nico da altura de flutuaÃ§Ã£o do pÃ© calcador que evita atrito em tecidos grossos e vibraÃ§Ã£o em tecidos finos.",
    "relatedTerms": [
      "Calcador de Bordado / Calcador Pula-Pula",
      "Barra de PressÃ£o e Regulador do Calcador",
      "Alavanca do Calcador",
      "Efeito FlutuaÃ§Ã£o do Tecido (Flagging)"
    ],
    "tags": [
      "d-055",
      "altura do calcador",
      "calcador pula-pula",
      "flutuaÃ§Ã£o",
      "brother",
      "janome",
      "bernina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Innov-is & BP Series Embroidery Foot Height & Clearance Calibration Guide. Nagoya, 2022.",
      "JANOME. Memory Craft Presser Foot Clearance & Fabric Thickness Guide. Tokyo, 2023.",
      "ARTRELADOS. O Pulo do Gato do Calcador: Como Regular a Altura Para Bordar Toalhas e Mantas Sem Trancos. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-056-deslocamento-por-queda-de-energia-retomada-de-ponto",
    "code": "D-056",
    "term": "Deslocamento por Queda de Energia e Retomada de Ponto (Power Failure Recovery & Stitch Memory Resume)",
    "level": "Fundamental ðŸŸ¢",
    "category": "OperaÃ§Ã£o da MÃ¡quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim dislocare (mover de posiÃ§Ã£o) e recuperare (recuperar coordenada gravada). Sistema de memÃ³ria nÃ£o-volÃ¡til (EEPROM/Flash) introduzido na eletrÃ´nica de bordadeiras nos anos 2000.",
    "summary": "Recurso inteligente de seguranÃ§a que grava a coordenada exata do Ãºltimo ponto na memÃ³ria, permitindo retomar o bordado perfeitamente apÃ³s queda de luz.",
    "definition": "O sistema de retomada apÃ³s queda de energia (Power Failure Resume & Stitch Recovery System) Ã© o recurso eletrÃ´nico de proteÃ§Ã£o e seguranÃ§a operacional incorporado na placa-mÃ£e das mÃ¡quinas de bordar modernas (Brother sÃ©ries BP/PE/NV, Janome MC500E/550E, Bernina e Sun Special). Caso ocorra uma queda repentina de energia elÃ©trica, desligamento acidental do cabo ou parada de emergÃªncia no meio de uma matriz de 30.000 pontos, a memÃ³ria nÃ£o-volÃ¡til da mÃ¡quina salva o nÃºmero exato do ponto e as coordenadas cartesianas (X/Y). Ao religar a mÃ¡quina, o sistema pergunta: 'Deseja retomar o bordado anterior?', retornando o bastidor exatamente para o ponto de parada sem perder a peÃ§a.",
    "technicalDetails": "GravaÃ§Ã£o instantÃ¢nea em chip Flash EEPROM a cada bloco de pontos. A bordadeira pode ainda utilizar os botÃµes de avanÃ§o e recuo de pontos (+/- 1, 10, 100 pontos) na tela para retroceder cerca de 5 a 10 pontos antes do local da parada, garantindo que nÃ£o fique nenhum espaÃ§o vazio ou falha na cobertura.",
    "howItWorks": [
      "1. A mÃ¡quina estÃ¡ bordando uma matriz grande e complexa (ex: ponto 14.350 de 25.000).",
      "2. Falta energia elÃ©trica no bairro e a mÃ¡quina se apaga instantaneamente.",
      "3. A bordadeira NÃƒO mexe no tecido nem retira o bastidor da mÃ¡quina.",
      "4. Quando a energia elÃ©trica retorna, a bordadeira liga o interruptor da mÃ¡quina.",
      "5. A tela touchscreen exibe a mensagem de seguranÃ§a: 'O bordado anterior foi interrompido. Deseja retomar? [OK]'.",
      "6. A bordadeira clica em 'OK'; o pantÃ³grafo se movimenta sozinho e posiciona a agulha na coordenada exata.",
      "7. No painel de navegaÃ§Ã£o de pontos, a bordadeira clica em '-10 pontos' para fazer uma pequena sobreposiÃ§Ã£o de seguranÃ§a.",
      "8. Aperta o botÃ£o Start/Stop verde e o bordado continua normalmente, salvando a peÃ§a 100% perfeita!"
    ],
    "beginnerExplanation": "Ã‰ a 'memÃ³ria mÃ¡gica' de salvaÃ§Ã£o da mÃ¡quina de bordar! Se acabar a forÃ§a na sua casa ou alguÃ©m tropeÃ§ar no fio no meio de um bordado demorado, nÃ£o precisa entrar em pÃ¢nico: quando a luz voltar, vocÃª liga a mÃ¡quina, aperta 'OK' na tela e ela volta sozinha exatamente no mesmo pontinho onde parou!",
    "applications": [
      "Salvamento de peÃ§as nobres e caras em caso de queda de energia ou blecaute no ateliÃª",
      "RecuperaÃ§Ã£o de bordados apÃ³s desligamento acidental da mÃ¡quina de bordar",
      "Retomada de bordados longos que foram pausados Ã  noite para continuar no dia seguinte",
      "EliminaÃ§Ã£o de prejuÃ­zos com toalhas, jaquetas e uniformes perdidos por paradas elÃ©tricas"
    ],
    "commonErrors": [
      "Tirar o tecido de dentro do bastidor logo apÃ³s a queda de luz achando que perdeu a peÃ§a para sempre",
      "Puxar ou empurrar o carro do bastidor com forÃ§a com as mÃ£os com a mÃ¡quina desligada, descalibrando a posiÃ§Ã£o salva",
      "Clicar em 'Cancelar / NÃ£o' na tela ao religar a mÃ¡quina, apagando a memÃ³ria da coordenada salva"
    ],
    "troubleshootingTips": [
      "REGRA DE OURO: Acabou a luz? NÃƒO toque no bastidor e NÃƒO desmonte o tecido! Deixe tudo exatamente como estÃ¡ atÃ© a luz voltar!",
      "Ao religar e clicar em 'Retomar', use o botÃ£o de '-10 pontos' na tela da mÃ¡quina para fazer a agulha recuar alguns pontinhos e arrematar sem deixar emenda aparente",
      "Use sempre um bom filtro de linha ou estabilizador/nobreak para proteger a placa eletrÃ´nica da sua mÃ¡quina contra picos de tensÃ£o"
    ],
    "dicaArtrelados": "Faltou luz no meio do bordado? Calma, nÃ£o entre em desespero e NÃƒO tire a toalha do bastidor! A sua mÃ¡quina Brother, Janome ou Bernina gravou o ponto exato na memÃ³ria! Quando a luz voltar, Ã© sÃ³ ligar, apertar OK na tela e voltar 5 pontinhos para trÃ¡s: a peÃ§a fica tÃ£o perfeita que ninguÃ©m nunca vai saber que faltou luz!",
    "voceSabia": "As mÃ¡quinas eletrÃ´nicas modernas possuem um microcapacitor de emergÃªncia na placa que armazena energia por 50 milissegundos apÃ³s o corte de luz, tempo suficiente para a CPU salvar as coordenadas na memÃ³ria flash antes de desligar por completo!",
    "practicalExercise": "Borde um retalho simples e desligue a mÃ¡quina no botÃ£o liga/desliga no meio da costura: ligue a mÃ¡quina de novo e veja a tela perguntando se deseja retomar o bordado; aperte OK e assista o bastidor viajando sozinho de volta para o ponto exato!",
    "quickSummary": "Recurso de memÃ³ria que grava a coordenada do Ãºltimo ponto e permite retomar o bordado com perfeiÃ§Ã£o apÃ³s queda de luz.",
    "relatedTerms": [
      "BotÃ£o Start/Stop e OperaÃ§Ã£o Sem Pedal",
      "Carregamento de Matriz",
      "Correia Dentada do PantÃ³grafo e Eixo X/Y",
      "OperaÃ§Ã£o da MÃ¡quina"
    ],
    "tags": [
      "d-056",
      "queda de energia",
      "retomada",
      "memÃ³ria",
      "seguranÃ§a",
      "brother",
      "janome",
      "bernina",
      "artrelados"
    ],
    "bibliographicReferences": [
      "BROTHER. Power Failure Recovery System & Stitch Memory Technical Guide. Nagoya, 2022.",
      "JANOME. Memory Craft Stitch Memory Resume Operations Guide. Tokyo, 2023.",
      "ARTRELADOS. SalvaÃ§Ã£o de PeÃ§as no AteliÃª: Como Retomar Bordados ApÃ³s Quedas de Energia Sem Deixar Marcas. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-057-dinamometro-textil-medidor-de-tensao-towa",
    "code": "D-057",
    "term": "DinamÃ´metro TÃªxtil e Medidor de TensÃ£o Towatec (Towa Bobbin & Top Thread Tension Gauge)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "MecÃ¢nica & Ajustes",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego dynamis (forÃ§a fÃ­sica) e metron (medida de precisÃ£o). Instrumento de metrologia mecÃ¢nica de precisÃ£o desenvolvido pela empresa japonesa Towa Corporation para calibraÃ§Ã£o de mÃ¡quinas de bordar.",
    "summary": "Instrumento metrolÃ³gico de precisÃ£o com mostrador numÃ©rico em gramas-forÃ§a (gf) para aferir e calibrar a tensÃ£o exata da caixa de bobina e da linha superior.",
    "definition": "O dinamÃ´metro tÃªxtil (Medidor de TensÃ£o Towa / Towatec Thread Tension Gauge) Ã© a ferramenta metrolÃ³gica de precisÃ£o indispensÃ¡vel para tÃ©cnicos e ateliÃªs profissionais de bordado computadorizado. Composto por um alojamento para caixas de bobina (modelo TM-1 para caixa tipo L/classe 15 e TM-2 para caixa tipo M) com roldanas de precisÃ£o e um ponteiro de escala calibrada em gramas-forÃ§a (0 a 50 gf para bobina; 0 a 300 gf para linha superior), permite medir numericamente a resistÃªncia de arraste do fio, eliminando achismos e regulagens 'no tato' da caixa de bobina em mÃ¡quinas Brother, Janome, Bernina e Sun Special.",
    "technicalDetails": "CalibraÃ§Ã£o padrÃ£o de tensÃ£o inferior (bobina): 20gf a 25gf para poliÃ©ster tÃ­tulo 60. CalibraÃ§Ã£o padrÃ£o de tensÃ£o superior (agulha): 100gf a 130gf para poliÃ©ster tÃ­tulo 40. Permite padronizar rigorosamente a tensÃ£o em ateliÃªs com mÃºltiplas mÃ¡quinas.",
    "howItWorks": [
      "1. A bordadeira ou tÃ©cnico retira a caixa de bobina da mÃ¡quina com a bobina cheia instalada.",
      "2. Encaixa a caixa de bobina dentro do suporte do dinamÃ´metro Towa.",
      "3. Passa a linha pelas roldanas de mediÃ§Ã£o e pelo gancho do ponteiro de precisÃ£o.",
      "4. Puxa a ponta da linha em velocidade constante e suave.",
      "5. O ponteiro se desloca na escala indicando o valor real da tensÃ£o em gramas-forÃ§a (ex: 22 gf).",
      "6. Se a leitura estiver em 15 gf (muito frouxa) ou 35 gf (muito apertada), ajusta-se o parafuso da caixa com chave de fenda micromÃ©trica atÃ© cravar nos 22 gf perfeitos.",
      "7. A caixa de bobina Ã© recolocada na mÃ¡quina com precisÃ£o cientÃ­fica absoluta."
    ],
    "beginnerExplanation": "Ã‰ um pequeno 'reloginho medidor' japonÃªs super preciso onde vocÃª coloca a caixinha de bobina e puxa a linha: ele te mostra na hora, com um nÃºmero exato em gramas, se a linha de baixo estÃ¡ apertada demais ou frouxa demais, para vocÃª nunca mais ter que adivinhar a regulagem no olho!",
    "applications": [
      "CalibraÃ§Ã£o milimÃ©trica da caixa de bobina para avessos de bordado 100% perfeitos",
      "PadronizaÃ§Ã£o da mesma tensÃ£o idÃªntica em duas ou mais mÃ¡quinas do ateliÃª",
      "Ajuste fino para linhas especiais (metalizadas, poliamida, fios elÃ¡sticos e de seda)",
      "DiagnÃ³stico definitivo de desregulagens crÃ´nicas de ponto e laÃ§adas soltas"
    ],
    "commonErrors": [
      "Puxar a linha no dinamÃ´metro em trancos rÃ¡pidos e violentos ao invÃ©s de um movimento suave e contÃ­nuo",
      "Apertar o parafuso da caixa de bobina com chaves de fenda grandes inadequadas, espanando a fenda do parafuso micromÃ©trico",
      "Usar o dinamÃ´metro com poeira ou fiapos de linha presos entre as roldanas de rolamento"
    ],
    "troubleshootingTips": [
      "A tensÃ£o ideal da bobina para mÃ¡quinas domÃ©sticas (Brother, Janome, Bernina) com linha de poliÃ©ster 60 Ã© entre 20 e 25 gramas-forÃ§a (gf)",
      "Se nÃ£o tiver o dinamÃ´metro Towa no inÃ­cio, faÃ§a o 'teste da gota' (Drop Test): suspenda a caixa de bobina pela linha; ela deve descer suavemente apenas quando vocÃª der um leve toque com o pulso",
      "Gire o parafuso da caixa de bobina sempre em fraÃ§Ãµes minÃºsculas (como se fosse 5 minutos no ponteiro de um relÃ³gio)"
    ],
    "dicaArtrelados": "O segredo dos tÃ©cnicos de mÃ¡quinas para regular a caixinha de bobina sem errar nunca Ã© o medidor Towa! Regulou a bobina em 22 gramas e a linha de cima em 110 gramas, a sua mÃ¡quina borda como seda e o avesso sai com o terÃ§o central branquinho mais perfeito do mundo!",
    "voceSabia": "O dinamÃ´metro de tensÃ£o Towa foi inventado no JapÃ£o na dÃ©cada de 1970 e atÃ© hoje Ã© a ferramenta padrÃ£o mundial obrigatÃ³ria utilizada pelas fÃ¡bricas da Brother, Janome e Tajima em suas linhas de montagem!",
    "practicalExercise": "Pegue a caixa de bobina da sua mÃ¡quina com linha passada: segure a ponta da linha e solte a caixinha no ar; dÃª um leve tranco com o pulso para cima; observe se ela desce 2 a 3 centÃ­metros e para suavemente (tensÃ£o perfeita) ou se despenca atÃ© o chÃ£o (tensÃ£o frouxa)!",
    "quickSummary": "Instrumento metrolÃ³gico com escala numÃ©rica em gramas que afere e calibra a tensÃ£o exata da bobina e linha superior.",
    "relatedTerms": [
      "Ajuste de TensÃ£o da Linha",
      "Caixa da Bobina",
      "Bobbin Case (Caixa de Bobina)",
      "Bloco Tensor e Discos de TensÃ£o Superiores"
    ],
    "tags": [
      "d-057",
      "dinamÃ´metro",
      "towa",
      "tensÃ£o",
      "calibraÃ§Ã£o",
      "gramas-forÃ§a",
      "mecÃ¢nica",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TOWA CORPORATION. Digital & Mechanical Tension Gauge Operation Manual TM-1 / TM-2. Tokyo, 2022.",
      "SUPERIOR THREADS. Calibrating Thread Tension with Towa Tension Gauges Master Guide. St. George, 2023.",
      "ARTRELADOS. A CiÃªncia da TensÃ£o Perfeita: Como Usar o DinamÃ´metro Towa Para Eliminar Erros de Ponto. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-058-digitalizacao-de-monogramas-e-micro-letras",
    "code": "D-058",
    "term": "DigitalizaÃ§Ã£o de Monogramas e Letras em Alta ResoluÃ§Ã£o (Embroidery Monogramming & Micro-Lettering Digitizing)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego monos (Ãºnico, inicial) e gramma (letra do alfabeto). Ramo especializado da digitalizaÃ§Ã£o de matrizes focado na legibilidade de tipografias em escalas reduzidas.",
    "summary": "TÃ©cnica de programaÃ§Ã£o de matrizes para letras pequenas (3mm a 6mm) com ajustes de compensaÃ§Ã£o, densidade aliviada e underlay simplificado.",
    "definition": "A digitalizaÃ§Ã£o de monogramas e micro-letras (Small Lettering & Monogram Digitizing) Ã© a disciplina tÃ©cnica especializada de criaÃ§Ã£o e ediÃ§Ã£o de matrizes de bordado voltada para a execuÃ§Ã£o de tipografias em dimensÃµes reduzidas (letras de 3mm a 6mm de altura, comuns em nomes de jalecos mÃ©dicos, bolsos e monogramas de enxovais). Exige parÃ¢metros de software exclusivos: substituiÃ§Ã£o de underlays convencionais por linha de suporte central Ãºnica (Center Run), reduÃ§Ã£o de densidade (espaÃ§amento alargado para 0.45mm a 0.50mm), aplicaÃ§Ã£o de compensaÃ§Ã£o de repuxo reforÃ§ada (0.35mm) e uso de agulhas finas 65/9 ou 70/10 com linhas especiais tÃ­tulo 60.",
    "technicalDetails": "As letras minÃºsculas em ponto cheio tÃªm colunas muito estreitas (0.6mm a 1.0mm). Se a densidade for mantida no padrÃ£o normal (0.40mm), o acÃºmulo de agulhadas corta o tecido e fecha os 'olhos' das letras como 'e', 'a', 'o' e 's'.",
    "howItWorks": [
      "1. A bordadeira seleciona ou digita o nome no software de bordado (Wilcom, PE-Design, Janome Digitizer ou Bernina).",
      "2. Escolhe fontes especializadas para micro-letras (Small Fonts / Micro Fonts) prÃ©-digitalizadas com traÃ§os limpos.",
      "3. Ajusta o suporte (underlay) para uma Ãºnica linha reta no centro (Center Walk).",
      "4. Aumenta a compensaÃ§Ã£o de repuxo (Pull Compensation) para compensar o afundamento do fio no tecido.",
      "5. No cabeÃ§ote da mÃ¡quina (Brother, Janome ou Bernina), instala uma agulha fina 65/9 ou 70/10 ponta aguda (Microtex).",
      "6. Utiliza linha mais fina (tÃ­tulo 60) e entretela firme bem esticada.",
      "7. A mÃ¡quina borda o nome com nitidez cirÃºrgica, onde cada letrinha de 4mm pode ser lida com perfeiÃ§Ã£o absoluta."
    ],
    "beginnerExplanation": "Ã‰ a tÃ©cnica de computador e mÃ¡quina para conseguir bordar aqueles nominhos bem pequenininhos (como nomes de mÃ©dicos em jalecos ou iniciais em toalhinhas) sem que as letrinhas fiquem borradas, fechadas ou parecendo um borrÃ£o ilegÃ­vel de linha.",
    "applications": [
      "Bordados de nomes e especialidades em jalecos mÃ©dicos, aventais e uniformes corporativos",
      "Monogramas nobres e elegantes em lenÃ§os, punhos de camisa e enxovais de bebÃª",
      "Etiquetas personalizadas de tamanho e marca em peÃ§as de vestuÃ¡rio",
      "Textos explicativos e logotipos com slogans pequenos em fardamentos"
    ],
    "commonErrors": [
      "Tentar diminuir uma fonte comum grande para 4mm de altura no programa, fazendo as pernas das letras ficarem com colunas microscÃ³picas que a agulha nÃ£o consegue costurar",
      "Usar agulha grossa (90/14) e linha comum grossa (tÃ­tulo 40) para bordar letras de 4mm, transformando a letra 'e' e 'o' em bolinhas fechadas de linha",
      "Colocar suporte duplo (Edge Run + Zigzag) em letras minÃºsculas, criando um bolo duro de linha antes mesmo de comeÃ§ar o ponto cheio"
    ],
    "troubleshootingTips": [
      "Para letras menores que 6mm, use SEMPRE agulha 65/9 ou 70/10 e linha fina de tÃ­tulo 60 no cabeÃ§ote",
      "No PE-Design e Wilcom, utilize exclusivamente as fontes da categoria 'Small Fonts / Letras Pequenas'",
      "Desative o underlay de ziguezague e deixe apenas o 'Center Run' (suporte central) ativado para micro-letras"
    ],
    "dicaArtrelados": "Vai bordar nomes pequenos em jalecos ou fraldas e as letrinhas estÃ£o saindo fechadas e borradas? Use agulha 70/10 fininha, escolha uma fonte prÃ³pria para letras pequenas no seu programa e tire o excesso de suporte: as letras de 5mm vÃ£o sair tÃ£o nÃ­tidas que parecem impressas no papel!",
    "voceSabia": "A menor letra jÃ¡ bordada com perfeiÃ§Ã£o legÃ­vel por uma mÃ¡quina computadorizada media apenas 1.8 milÃ­metro de altura, utilizando agulha calibre 55/7 e linha de poliÃ©ster tÃ­tulo 75 ultrafina!",
    "practicalExercise": "No seu software, digite um nome com 5mm de altura usando uma fonte normal e outro usando uma fonte 'Small Font': borde os dois lado a lado em um retalho com agulha 70/10 e compare a diferenÃ§a brutal de legibilidade e beleza entre as duas!",
    "quickSummary": "TÃ©cnica de programaÃ§Ã£o e costura de micro-letras (3mm a 6mm) com densidade aliviada e suporte central para mÃ¡xima legibilidade.",
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "CompensaÃ§Ã£o de PuxÃ£o (Pull Compensation)",
      "Agulha Microtex / Ponta Aguda AguÃ§ada",
      "Branching / RamificaÃ§Ã£o AutomÃ¡tica no Software"
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
      "ARTRELADOS. O Segredo das Letras Perfeitas em Jalecos: Como Bordar Nomes Pequenos com Nitidez Absoluta. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-059-desgaste-e-rebarba-de-agulha",
    "code": "D-059",
    "term": "Desgaste e Rebarba de Agulha (Needle Burr & Micro-Damage Detection)",
    "level": "Fundamental ðŸŸ¢",
    "category": "Agulhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim desgastare (consumir por fricÃ§Ã£o contÃ­nua) e do francÃªs Ã©barbure (pequena ponta metÃ¡lica cortante levantada por impacto). Principal causa de desfiamento de linhas em mÃ¡quinas de costura e bordar.",
    "summary": "MicrodeformaÃ§Ã£o cortante na ponta ou no olho da agulha provocada por impactos leves contra a chapa ou bastidor que desfia a linha e quebra o fio.",
    "definition": "A rebarba de agulha (Needle Burr & Point Damage) Ã© o microdano mecÃ¢nico invisÃ­vel a olho nu que ocorre na ponta aguÃ§ada, na canaleta longitudinal ou na borda interna do olho da agulha de bordado. Ã‰ causada pelo impacto microscÃ³pico da agulha contra a chapa de agulha, calcador ou aro do bastidor, ou pelo atrito prolongado com tecidos sintÃ©ticos abrasivos apÃ³s 8 a 10 horas de uso contÃ­nuo. A rebarba metÃ¡lica atua como uma microsserra afiada, desfiando os filamentos da linha superior a cada subida e descida atÃ© provocar o rompimento do fio.",
    "technicalDetails": "Uma agulha de bordar perfura o tecido entre 40.000 e 50.000 vezes a cada hora de produÃ§Ã£o a 750 PPM. Vida Ãºtil recomendada de uma agulha de cromo padrÃ£o: 8 a 10 horas de trabalho efetivo (ou cerca de 500.000 a 1.000.000 de pontos).",
    "howItWorks": [
      "1. A mÃ¡quina sofre um pequeno tranco ou a agulha raspa de leve na chapa metÃ¡lica durante um salto.",
      "2. A ponta da agulha entorta 0.05mm ou levanta uma microfarpinha de aÃ§o na borda do olho.",
      "3. A linha de bordar passa pelo olho da agulha mais de 30 vezes no mesmo centÃ­metro antes de formar o ponto.",
      "4. A rebarba raspa repetidamente na linha de poliÃ©ster a 750 PPM.",
      "5. A linha comeÃ§a a desfiar, abrindo pelinhos na frente do cabeÃ§ote.",
      "6. Em poucos segundos, o fio se rompe e a mÃ¡quina para com aviso de 'Linha Superior Quebrada'.",
      "7. A bordadeira substitui a agulha por uma nova; a rebarba desaparece e a mÃ¡quina volta a bordar suavemente sem quebras."
    ],
    "beginnerExplanation": "Ã‰ quando a pontinha da agulha fica 'machucada', tortinha ou com uma farpinha de ferro microscÃ³pica na ponta depois de bater de leve na chapa ou no aro. Essa farpinha funciona como uma serrinha que corta a linha de bordar toda hora. Trocar a agulha por uma nova resolve o problema em 1 minuto!",
    "applications": [
      "DiagnÃ³stico definitivo de quebras constantes e inexplicÃ¡veis de linha superior",
      "EliminaÃ§Ã£o do desfiamento de fios de poliÃ©ster e arrebentamento de linhas metÃ¡licas",
      "PrevenÃ§Ã£o de furos e rasgos nas fibras de malhas delicadas e sedas",
      "ManutenÃ§Ã£o preventiva de rotina com troca regular de agulhas no ateliÃª"
    ],
    "commonErrors": [
      "Bordar por semanas com a mesma agulha velha atÃ© ela quebrar fisicamente ao meio",
      "Tentar 'lixar' a ponta de uma agulha torta com lixa de unha ao invÃ©s de colocar uma agulha nova",
      "NÃ£o perceber o barulho de 'tuc-tuc-tuc' seco e pesado que a agulha cega faz ao furar o tecido"
    ],
    "troubleshootingTips": [
      "O TESTE DA MEIA DE SEDA: Passe a ponta da agulha suavemente sobre uma meia fina de nylon velha; se a ponta puxar qualquer fiapinho, a agulha tem rebarba e deve ser jogada no lixo imediatamente!",
      "Troque a agulha da sua mÃ¡quina a cada 8 a 10 horas de bordado (ou a cada 3 a 4 toalhas grandes bordadas)",
      "Se a linha comeÃ§ar a desfiar repetidamente, nÃ£o perca tempo mexendo na tensÃ£o: troque a agulha primeiro!"
    ],
    "dicaArtrelados": "A linha comeÃ§ou a desfiar e quebrar a cada 2 minutos e vocÃª jÃ¡ estÃ¡ perdendo a paciÃªncia? NÃ£o mexa em nenhum parafuso da mÃ¡quina! 90% das quebras de linha sÃ£o causadas por uma agulha gasta ou com micro-rebarba invisÃ­vel! Coloque uma agulha nova e veja a mÃ¡quina voltar a bordar no mesmo segundo com a maior paz do mundo!",
    "voceSabia": "Uma agulha nova custa menos de 3 reais, mas uma agulha gasta com rebarba pode fazer vocÃª perder horas de trabalho e estragar uma toalha nobre de 80 reais!",
    "practicalExercise": "Pegue uma agulha que jÃ¡ foi muito usada no seu ateliÃª e passe a unha do polegar delicadamente de cima para baixo atÃ© a pontinha: sinta se a ponta 'engancha' na sua unha; agora compare com uma agulha nova tirada do pacote e sinta a diferenÃ§a da ponta lisa e perfeita!",
    "quickSummary": "MicrodeformaÃ§Ã£o cortante na agulha que age como uma microsserra, desfiando e rompendo a linha superior.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Agulha de TitÃ¢nio / Nitreto de TitÃ¢nio",
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
      "ARTRELADOS. O Segredo da Agulha Perfeita: Como Detectar Rebarbas e Evitar Quebras de Linha no AteliÃª. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-060-distorcao-termica-em-entretela-termossoluvel",
    "code": "D-060",
    "term": "DistorÃ§Ã£o TÃ©rmica em Entretela TermossolÃºvel e Limpeza a Seco (Thermal Backing Dissolution & Heat-Away Clean)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "Estabilizadores & Entretelas",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego therme (calor, energia tÃ©rmica) e do latim solvere (dissolver, desintegrar). Estabilizador sintÃ©tico termoplÃ¡stico patenteado para remoÃ§Ã£o sem uso de Ã¡gua.",
    "summary": "Filme estabilizador especial que se desintegra em pÃ³ seco e marrom ao contato com ferro de passar quente (140Â°C a 160Â°C), ideal para tecidos que nÃ£o podem ser molhados.",
    "definition": "A entretela termossolÃºvel (Heat-Away Film / Thermal Dissolving Stabilizer) Ã© o filme estabilizador sintÃ©tico transparente ou fosco confeccionado em polÃ­mero plÃ¡stico especial sensÃ­vel a altas temperaturas. Ao contrÃ¡rio da entretela hidrossolÃºvel (que exige lavagem com Ã¡gua abundante para sair), a entretela termossolÃºvel mantÃ©m a sustentaÃ§Ã£o mecÃ¢nica durante o bordado e se desintegra completamente em pÃ³ seco ao receber o calor de um ferro de passar a seco ou prensa tÃ©rmica (entre 140Â°C e 160Â°C). Ã‰ a soluÃ§Ã£o ideal para bordados em tecidos nobres que mancham com Ã¡gua (veludos, sedas, couro ecolÃ³gico, lÃ£s e panos de prato com barrados engomados).",
    "technicalDetails": "Temperatura de dissoluÃ§Ã£o tÃ©rmica: 140Â°C a 160Â°C sem vapor (ferro a seco). Ao atingir a temperatura crÃ­tica, o filme perde a elasticidade, sofre pirÃ³lise branda e se converte em microflocos secos que sÃ£o facilmente escovados com uma escovinha macia.",
    "howItWorks": [
      "1. A bordadeira monta o tecido delicado (ex: veludo ou seda) com a entretela termossolÃºvel no bastidor.",
      "2. A mÃ¡quina (Brother, Janome, Bernina ou Sun Special) executa o bordado com firmeza total.",
      "3. A peÃ§a Ã© retirada do bastidor e o excesso de filme plÃ¡stico ao redor do bordado Ã© rasgado com a mÃ£o.",
      "4. A bordadeira aquece o ferro de passar a seco na temperatura 'LÃ£/AlgodÃ£o' (sem vapor).",
      "5. Pressiona o ferro em movimentos circulares sobre o avesso do bordado por 5 a 10 segundos.",
      "6. A entretela termossolÃºvel se esfarela instantaneamente em pequenos flocos secos.",
      "7. Passa-se uma escovinha macia de roupa e todo o resÃ­duo cai na bancada, deixando o bordado limpo, macio e 100% seco."
    ],
    "beginnerExplanation": "Ã‰ um plÃ¡stico estabilizador especial para usar embaixo ou em cima de tecidos finos que vocÃª NÃƒO quer molhar com Ã¡gua (como veludo, seda ou couro). Depois de bordar, vocÃª sÃ³ encosta o ferro de passar quente e o plÃ¡stico vira um pozinho seco na hora: Ã© sÃ³ passar uma escovinha que sai tudo sem precisar lavar a peÃ§a!",
    "applications": [
      "Bordados em tecidos nobres e sensÃ­veis Ã  Ã¡gua (veludo, seda pura, camurÃ§a, lÃ£ e couro sintÃ©tico)",
      "Bordados em rendas richelieu e peÃ§as que precisam ser entregues secas e prontas na hora",
      "EstabilizaÃ§Ã£o de toalhas e panos de prato sem necessidade de mÃ¡quina de lavar para entrega rÃ¡pida",
      "SubstituiÃ§Ã£o da entretela hidrossolÃºvel em peÃ§as que mancham se forem umedecidas"
    ],
    "commonErrors": [
      "Usar ferro com vapor ligado, fazendo o plÃ¡stico derreter e grudar como cola lÃ­quida no tecido",
      "Usar ferro em temperatura baixa demais (menos de 120Â°C), nÃ£o atingindo o ponto de quebra do filme",
      "Deixar o ferro parado no mesmo ponto por muito tempo, queimando a linha de poliÃ©ster"
    ],
    "troubleshootingTips": [
      "Use SEMPRE o ferro de passar em modo SECO (desligue o vapor e esvazie o reservatÃ³rio de Ã¡gua)",
      "Coloque um pedaÃ§o de tecido de algodÃ£o fino ou papel manteiga entre o ferro e o bordado para proteger a peÃ§a",
      "Remova os resÃ­duos de pÃ³ com uma escovinha de cerdas macias de roupas ou fita adesiva leve"
    ],
    "dicaArtrelados": "Precisa entregar um bordado urgente em veludo ou seda e nÃ£o pode molhar a peÃ§a com Ã¡gua de jeito nenhum? Use a entretela termossolÃºvel: encostou o ferro quente a seco, ela vira pÃ³ e sai na escovinha em 10 segundos! A cliente recebe a peÃ§a seca, limpa e cheirosa na hora!",
    "voceSabia": "A entretela termossolÃºvel foi desenvolvida na Alemanha para a confecÃ§Ã£o de vestidos de noiva de alta-costura, onde as rendas bordadas em fios de ouro nÃ£o podiam entrar em contato com Ã¡gua para nÃ£o perder o brilho metÃ¡lico!",
    "practicalExercise": "Coloque um pedaÃ§o de entretela termossolÃºvel em um retalho: encoste a ponta do ferro de passar seco e quente por 5 segundos; observe o plÃ¡stico encolhendo e se transformando em pÃ³ seco soltinho que sai com um simples sopro!",
    "quickSummary": "Filme estabilizador que se desintegra em pÃ³ seco com o calor do ferro, ideal para tecidos que nÃ£o podem ser molhados.",
    "relatedTerms": [
      "Entretela HidrossolÃºvel",
      "Backing (Estabilizador / Entretela de Base)",
      "Acabamento & Limpeza de Bordado",
      "Blower / Soprador TÃ©rmico e Pistola de Ar Quente"
    ],
    "tags": [
      "d-060",
      "termossolÃºvel",
      "heat-away",
      "estabilizador",
      "ferro quente",
      "sem Ã¡gua",
      "veludo",
      "artrelados"
    ],
    "bibliographicReferences": [
      "GUNOLD. Heat-Away & Specialty Thermal Dissolving Stabilizers Manual. Kenzingen, 2022.",
      "MADEIRA. Chemical & Thermal Backing Processing in High-End Embroidery. Freiburg, 2023.",
      "ARTRELADOS. O Segredo da Entretela TermossolÃºvel: Como Fazer Limpeza a Seco em Tecidos Delicados. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-061-deslocamento-do-eixo-y-troca-de-bobina-estacionamento",
    "code": "D-061",
    "term": "Deslocamento do Eixo Y na Troca de Bobina e PosiÃ§Ã£o de Estacionamento (Park Position & Hoop Clearance Shift)",
    "level": "Fundamental ðŸŸ¢",
    "category": "OperaÃ§Ã£o da MÃ¡quina",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do inglÃªs park position (posiÃ§Ã£o de estacionamento seguro do carro do bastidor) e do latim axis (eixo cartesiano Y de profundidade). FunÃ§Ã£o ergonÃ´mica de software presente nas mÃ¡quinas modernas.",
    "summary": "Comando na tela da mÃ¡quina que move o bastidor para trÃ¡s ou para frente, liberando espaÃ§o amplo para trocar a bobina ou cortar linhas sem tirar o bastidor.",
    "definition": "O deslocamento do eixo Y para troca de bobina (ou PosiÃ§Ã£o de Estacionamento do Bastidor / Hoop Clearance Shift / Park Position) Ã© a funÃ§Ã£o operacional presente nos menus de controle das mÃ¡quinas de bordar domÃ©sticas (Brother sÃ©ries BP/PE/Innov-is, Janome MC500E/550E e Bernina). Com um simples toque em um Ã­cone no visor touchscreen, a mÃ¡quina movimenta o carro do pantÃ³grafo no eixo Y para a posiÃ§Ã£o extrema traseira ou dianteira do trilho, afastando o aro do bastidor para longe da chapa de agulha e permitindo abrir a tampa da lanÃ§adeira, trocar a bobina ou recortar tecidos de aplique com tesoura de ponta curva sem precisar desencaixar o bastidor da mÃ¡quina.",
    "technicalDetails": "Deslocamento milimÃ©trico com memÃ³ria de retorno absoluto. Ao clicar novamente no botÃ£o apÃ³s a troca da bobina, o pantÃ³grafo retorna com precisÃ£o de Â±0.01mm exatamente para a coordenada de costura sem perda de alinhamento.",
    "howItWorks": [
      "1. A mÃ¡quina avisa na tela que a linha da bobina acabou no meio de uma toalha grande no bastidor 13x18cm ou 20x30cm.",
      "2. A bordadeira clica no Ã­cone de 'Troca de Bobina / Mover Bastidor' na tela da mÃ¡quina.",
      "3. O braÃ§o do bastidor viaja suavemente para trÃ¡s, deixando a chapa de agulha e a caixinha de bobina totalmente livres e desobstruÃ­das.",
      "4. A bordadeira abre a tampa acrÃ­lica da lanÃ§adeira com facilidade e insere a nova bobina cheia em 5 segundos.",
      "5. Clica no botÃ£o de 'Retorno' na tela touchscreen.",
      "6. O bastidor retorna com precisÃ£o matemÃ¡tica para a coordenada exata do bordado.",
      "7. Aperta o botÃ£o Start/Stop verde e continua a costura com produtividade mÃ¡xima."
    ],
    "beginnerExplanation": "Ã‰ um botÃ£ozinho na tela da sua mÃ¡quina que faz o bastidor andar para trÃ¡s sozinho e 'abrir espaÃ§o' para vocÃª conseguir abrir a tampinha e trocar a bobina de baixo (ou cortar um tecidinho de aplique) bem confortÃ¡vel com a mÃ£o, sem ter que tirar o bastidor da mÃ¡quina e correr o risco de desalinhar o bordado!",
    "applications": [
      "Troca rÃ¡pida e confortÃ¡vel da bobina inferior em bastidores grandes (13x18cm, 16x26cm, 20x30cm)",
      "Recorte de sobras de tecido em tÃ©cnicas de aplique com tesoura de pato (Duckbill) diretamente na mÃ¡quina",
      "PosiÃ§Ã£o de estacionamento seguro para guardar ou transportar a mÃ¡quina de bordar",
      "Limpeza rÃ¡pida de fiapos de linha na chapa de agulha sem desmontar a montagem"
    ],
    "commonErrors": [
      "Desencaixar o bastidor da mÃ¡quina com forÃ§a toda vez que a bobina acaba, correndo o risco de bater e entortar o pantÃ³grafo",
      "Tentar enfiar a mÃ£o embaixo de bastidores grandes para trocar a bobina no escuro e entortar o aro de plÃ¡stico",
      "Desligar a mÃ¡quina com o bastidor na posiÃ§Ã£o de estacionamento sem salvar a coordenada de retorno"
    ],
    "troubleshootingTips": [
      "Nas mÃ¡quinas Brother BP e PE, toque no Ã­cone do 'Bastidor com Setas' na tela de bordado para afastar o bastidor na hora",
      "Nas mÃ¡quinas Janome MC500E/550E, toque na tecla de 'PosiÃ§Ã£o de ManutenÃ§Ã£o / Hoop Shift'",
      "Nunca empurre o bastidor com as mÃ£os para abrir espaÃ§o: use SEMPRE o comando eletrÃ´nico na tela da mÃ¡quina"
    ],
    "dicaArtrelados": "A bobina acabou no meio de uma toalha enorme no bastidor grande? NÃ£o tire o bastidor da mÃ¡quina! Aperte o botÃ£ozinho de 'Mover Bastidor' na tela: a mÃ¡quina joga o bastidor lÃ¡ para trÃ¡s, vocÃª troca a bobina em 5 segundos, aperta voltar e ela continua bordando com alinhamento perfeito!",
    "voceSabia": "A funÃ§Ã£o de estacionamento do bastidor foi criada originalmente para as costuras de aplique, permitindo que a bordadeira corte o excesso de tecido com a tesourinha com as duas mÃ£os livres enquanto a mÃ¡quina segura a peÃ§a imÃ³vel!",
    "practicalExercise": "Com um bastidor montado na sua mÃ¡quina, vÃ¡ na tela de bordado e procure o Ã­cone de 'Mover Bastidor / PosiÃ§Ã£o de Troca de Bobina': toque nele e veja a elegÃ¢ncia do bastidor deslizando para trÃ¡s para te dar espaÃ§o; toque novamente e veja-o voltando exatamente para o milÃ­metro onde estava!",
    "quickSummary": "Comando eletrÃ´nico que afasta o bastidor no eixo Y para liberar espaÃ§o confortÃ¡vel para troca de bobina e apliques.",
    "relatedTerms": [
      "Caixa da Bobina",
      "AutodetecÃ§Ã£o de Fim de Linha e Bobina",
      "Deslocamento do PantÃ³grafo (Pantograph Traverse / Carriage Movement)",
      "Carro da MÃ¡quina de Bordado"
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
      "ARTRELADOS. Ergonomia e Velocidade no AteliÃª: Como Usar o Deslocamento de Bastidor Para Trocas RÃ¡pidas de Bobina. SÃ£o Paulo: Artrelados, 2024."
    ],
    "updatedAt": "2026-08-19",
    "letter": "D"
  },
  {
    "id": "d-062-deflexao-da-agulha-needle-deflection",
    "code": "D-062",
    "term": "DeflexÃ£o da Agulha e FlexÃ£o ElÃ¡stica DinÃ¢mica (Needle Deflection & Needle Bend)",
    "pronunciation": "de-fle-xao da a-gu-lha",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "Substantivo feminino composto.",
    "category": "Agulhas & Fios",
    "summary": "Desvio milimÃ©trico lateral ou longitudinal da haste da agulha durante a penetraÃ§Ã£o em tecidos grossos ou em alta velocidade, causando quebras e colisÃµes com a lanÃ§adeira.",
    "origin": "Do latim 'deflectere' (desviar, curvar para fora do eixo). FenÃ´meno mecatrÃ´nico e metalÃºrgico amplamente estudado na cutelaria tÃªxtil alemÃ£ e japonesa para matrizes de alta densidade.",
    "definition": "A DeflexÃ£o da Agulha (Needle Deflection / Needle Dynamic Flexing) Ã© a deformaÃ§Ã£o elÃ¡stica e o desvio angular momentÃ¢neo que a lÃ¢mina da agulha sofre em relaÃ§Ã£o ao seu eixo vertical perfeito no momento do impacto contra o tecido, entretela ou costuras sobrepostas. Quando a ponta da agulha penetra em materiais de alta resistÃªncia mecÃ¢nica (como jeans, sarja grossa de bonÃ©, couro sintÃ©tico ou camadas empilhadas de EVA 3D), a forÃ§a de resistÃªncia do substrato empurra a ponta da agulha para os lados. Se a deflexÃ£o ultrapassar a folga de seguranÃ§a (geralmente entre 0,05 mm e 0,10 mm), a agulha colide violentamente com o bico da lanÃ§adeira ou com as bordas da chapa de ponto, resultando em quebra instantÃ¢nea, perda de sincronismo ou pontos pulados.",
    "technicalDetails": "A resistÃªncia Ã  deflexÃ£o Ã© determinada pela geometria do cabo, espessura da haste (calibre) e presenÃ§a de reforÃ§os estruturais (como a haste reforÃ§ada das agulhas DBxK5 ou Schmetz SERV 7). A forÃ§a de deflexÃ£o aumenta exponencialmente com a velocidade de rotaÃ§Ã£o (SPM) e a espessura do tecido.",
    "howItWorks": [
      "1. A barra de agulha desce a agulha em alta aceleraÃ§Ã£o (atÃ© 1.000 PPM).",
      "2. A ponta da agulha encontra uma barreira de alta densidade mecÃ¢nica (ex: costura frontal de bonÃ© ou EVA rÃ­gido).",
      "3. A haste fina da agulha sofre um esforÃ§o de flexÃ£o lateral e entorta ligeiramente para trÃ¡s ou para o lado.",
      "4. Ao atravessar o orifÃ­cio da chapa, a agulha nÃ£o desce no centro exato do canal.",
      "5. Se a deflexÃ£o for excessiva, o bico da lanÃ§adeira atinge o metal da agulha em vez de pescar a laÃ§ada de linha.",
      "6. O choque mecÃ¢nico quebra a agulha com estalo sonoro ou amassa o bico da lanÃ§adeira.",
      "7. Se a agulha tiver haste reforÃ§ada (reforÃ§o cÃ´nico SERV 7), ela resiste Ã  flexÃ£o e desce em linha reta perfeita."
    ],
    "beginnerExplanation": "Ã‰ quando a agulha da mÃ¡quina bate em um pano muito duro ou grosso (como a costura de um bonÃ© ou uma calÃ§a jeans) e 'entorta de leve' na hora de furar o tecido. Por entortar na descida, ela bate na peÃ§a de ferro de baixo da mÃ¡quina (a lanÃ§adeira) e quebra com um estalo!",
    "applications": [
      "DiagnÃ³stico e prevenÃ§Ã£o de quebras de agulha em bordados pesados e bonÃ©s estruturados",
      "Bordados tridimensionais (3D Puff) com EVA de alta densidade",
      "SeleÃ§Ã£o do calibre correto de agulha (ex: troca de 75/11 para 80/12 ou 90/14 com haste reforÃ§ada)",
      "DigitalizaÃ§Ã£o com distribuiÃ§Ã£o gradual de pontos para suavizar o impacto em zonas duras"
    ],
    "commonErrors": [
      "â�Œ Borda tecidos pesados ou bonÃ©s rÃ­gidos com agulhas finas 65/9 ou 75/11 de haste comum, que entortam na descida e quebram",
      "â�Œ Manter velocidade mÃ¡xima de 1.000 PPM ao transitar sobre costuras grossas de sarja ou gorgurÃ£o",
      "â�Œ Usar bastidores frouxos onde o tecido salta (efeito tamborim frouxo), aumentando a deflexÃ£o angular da agulha"
    ],
    "troubleshootingTips": [
      "Se a agulha estiver quebrando toda vez que passa por cima de uma costura grossa: Instale uma agulha de haste reforÃ§ada (Schmetz SERV 7 ou Organ PD 80/12) e reduza a velocidade para 600 PPM",
      "Se a mÃ¡quina estiver pulando pontos em tecidos sintÃ©ticos densos: Verifique se a agulha nÃ£o estÃ¡ flexionando para longe do bico da lanÃ§adeira no momento da laÃ§ada",
      "Se a ponta da agulha apresentar arranhÃµes laterais: A agulha estÃ¡ raspando na borda interna da placa de ponto devido Ã  deflexÃ£o"
    ],
    "dicaArtrelados": "Vai bordar bonÃ© ou jeans grosso? Use agulha com haste reforÃ§ada anti-deflexÃ£o (como a Schmetz SERV 7 ou Organ DBxK5 80/12 TitÃ¢nio). O corpinho dela Ã© mais grosso e cÃ´nico perto do topo, o que impede a agulha de entortar e garante que ela fure o tecido reto como uma flecha!",
    "voceSabia": "As agulhas com tecnologia SERV 7 possuem uma Ã¡rea cÃ´nica reforÃ§ada que oferece o dobro de rigidez mecÃ¢nica contra a deflexÃ£o do que uma agulha convencional do mesmo calibre, sem precisar aumentar o tamanho do furo no tecido!",
    "practicalExercise": "Pegue uma agulha 70/10 comum e tente empurrar a pontinha dela de lado com o dedo: sinta como ela verga fÃ¡cil. Agora pegue uma agulha 80/12 SERV 7 de haste reforÃ§ada: sinta como ela Ã© incrivelmente firme e rÃ­gida!",
    "quickSummary": "Desvio elÃ¡stico momentÃ¢neo da agulha durante o impacto em tecidos grossos que causa quebras e desvios de sincronismo.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Bico da LanÃ§adeira",
      "Agulha de TitÃ¢nio / Revestimento PD",
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
    "term": "Desfiamento de Linha e SeparaÃ§Ã£o de Filamentos (Thread Fraying & Filament Shredding)",
    "pronunciation": "des-fi-a-men-to de li-nha",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Agulhas & Fios",
    "summary": "AbrasÃ£o mecÃ¢nica ou atrito tÃ©rmico excessivo que rompe os microfilamentos da linha de bordar antes que ela consiga formar o ponto, criando 'ninhos' de fiapos no olho da agulha.",
    "origin": "Do latim 'disfilare' (separar os fios). OcorrÃªncia cotidiana nos ateliÃªs decorrente de incompatibilidade entre calibre de agulha, tensÃ£o ou qualidade da linha.",
    "definition": "O Desfiamento de Linha (Thread Fraying / Thread Shredding) Ã© o processo de degradaÃ§Ã£o fÃ­sica e abrasÃ£o mecÃ¢nica contÃ­nua sofrido pelo fio superior de bordado ao passar repetidas vezes (de 20 a 40 vezes antes de ser definitivamente ancorado no tecido) atravÃ©s do olho da agulha e dos discos de tensÃ£o. Quando a linha encontra arestas cortantes (burrs), olho de agulha muito apertado, atrito tÃ©rmico elevado ou tensÃ£o excessiva, os microfilamentos individuais que compÃµem o cabo de poliÃ©ster ou a lÃ¢mina metÃ¡lica comeÃ§am a se romper e se amontoar em forma de bola de fiapos imediatamente acima do olho da agulha, atÃ© travar e quebrar a linha.",
    "technicalDetails": "Para linhas padrÃ£o de bordado 120/2 (40wt), a espessura da linha deve ocupar no mÃ¡ximo 40% a 50% da abertura Ãºtil do olho da agulha. Se o olho estiver desgastado ou tiver micro-ranhuras causadas pelo uso contÃ­nuo de fios metÃ¡licos, a taxa de cisalhamento dos filamentos aumenta em atÃ© 300%.",
    "howItWorks": [
      "1. A linha passa pelo olho da agulha para baixo e para cima dezenas de vezes em alta velocidade.",
      "2. Uma micro-rebarba no olho da agulha ou nos guias de linha comeÃ§a a raspar a superfÃ­cie do fio.",
      "3. Os filamentos externos de poliÃ©ster ou a fita metalizada rompem-se e comeÃ§am a deslizar para trÃ¡s.",
      "4. Cria-se um pequeno tufo ou casulo de penugem acumulada sobre o olho da agulha.",
      "5. O tufo de fiapos fica grande demais para atravessar o tecido ou o orifÃ­cio da placa de ponto.",
      "6. A linha Ã© estrangulada mecÃ¢nica e termicamente e parte-se por traÃ§Ã£o.",
      "7. A mÃ¡quina detecta a quebra e aciona o sensor de parada."
    ],
    "beginnerExplanation": "Ã‰ quando a linha de bordar nÃ£o arrebenta de uma vez sÃ³, mas comeÃ§a a 'esfiar' e formar uma bolinha de fiapos peludinhos bem em cima do buraquinho da agulha atÃ© a linha travar e arrebentar. Parece que a agulha estÃ¡ 'mastigando' a linha!",
    "applications": [
      "IdentificaÃ§Ã£o e diagnÃ³stico de problemas de atrito nos tensores e passagens de fio",
      "ManutenÃ§Ã£o preventiva de agulhas gastas com ranhuras microscÃ³picas",
      "AdequaÃ§Ã£o de agulhas para linhas metÃ¡licas e fios foscos de algodÃ£o",
      "CalibraÃ§Ã£o da tensÃ£o da linha superior para evitar estiramento dos filamentos"
    ],
    "commonErrors": [
      "â�Œ Insistir em bordar com a mesma agulha depois que ela comeÃ§ou a desfiar a linha, achando que o problema Ã© a marca da linha",
      "â�Œ Usar agulha de costura comum 70/10 com olho pequeno para bordar em alta velocidade com linha 40wt",
      "â�Œ Passar a linha por guias metÃ¡licos enferrujados, sujos com cola spray seca ou com rebarbas",
      "â�Œ Borda em velocidade mÃ¡xima de 1.000 PPM com linhas metÃ¡licas secas e sem lubrificante"
    ],
    "troubleshootingTips": [
      "Se a linha comeÃ§ar a esfiar e acumular fiapos no olho da agulha: Troque a agulha imediatamente por uma agulha nova prÃ³pria para bordado (com olho 2x maior) ou agulha Topstitch/TitÃ¢nio",
      "Se o desfiamento ocorrer com linha metÃ¡lica: Passe 2 gotas de silicone lÃ­quido para linha no cone e use agulha Metallic tamanho 80/12 ou 90/14",
      "Se a linha estiver desfiando antes mesmo de chegar na agulha: Verifique se o cone de linha nÃ£o estÃ¡ com rebarbas plÃ¡sticas na base raspando o fio"
    ],
    "dicaArtrelados": "Linha esfiando como um espanadorzinho em cima da agulha? NÃƒO PERCA TEMPO: 95% das vezes Ã© a agulha que jÃ¡ deu o tempo de vida dela e criou uma micro-rebarba invisÃ­vel no furinho! Coloque uma agulha nova e vocÃª vai ver a linha deslizar como manteiga!",
    "voceSabia": "Antes de um ponto ser fixado no tecido, cada pedacinho da linha de bordar sobe e desce pelo olho da agulha em mÃ©dia 35 vezes devido ao movimento alternado do estica-fio!",
    "practicalExercise": "Pegue uma agulha velha que desfiou linha e passe um pedaÃ§o de fio dental ou linha de costura pelo olho puxando para os lados com os olhos fechados: sinta com a sensibilidade dos dedos os 'degraus' e rebarbas que estavam cortando a sua linha!",
    "quickSummary": "DegradaÃ§Ã£o e quebra de microfilamentos da linha por atrito excessivo com rebarbas ou olho inadequado de agulha.",
    "relatedTerms": [
      "Agulha de Bordado Computadorizado",
      "Cera e Lubrificante de Linha / Ã“leo de Silicone",
      "Ajuste de TensÃ£o da Linha",
      "Linha de PoliÃ©ster 120/2"
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
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "Substantivo feminino composto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "Algoritmo de processamento vetorial que recua as pontadas internas em cantos afiados e curvas fechadas para evitar concentraÃ§Ã£o destrutiva de perfuraÃ§Ãµes de agulha.",
    "origin": "Do latim 'fractio' (divisÃ£o em fraÃ§Ãµes) e do inglÃªs 'short stitch' (ponto curto). Recurso patenteado desenvolvido pela Wilcom e Tajima nos anos 1990 para digitalizaÃ§Ã£o de precisÃ£o.",
    "definition": "A Densidade Fracionada com Filtro de Pontos Curtos (Fractional Stitch Density / Short Stitch Filtering / Corner Stitch Reduction) Ã© o algoritmo matemÃ¡tico de controle de perfuraÃ§Ã£o que analisa a geometria de cantos vivos (pontas agudas em 'V'), curvas sinuosas e vÃ©rtices estreitos em colunas de ponto cheio (satim). Como os pontos de bordado convergem em direÃ§Ã£o ao vÃ©rtice, a densidade fÃ­sica no ponto de encontro tenderia ao infinito, resultando em dezenas de perfuraÃ§Ãµes no mesmo milÃ­metro cÃºbico. O filtro fracionado encurta e omite alternadamente as penetraÃ§Ãµes internas, recuando-as em 30% a 60% da largura da coluna, mantendo a cobertura visual sem perfurar o tecido em excesso.",
    "technicalDetails": "ConfigurÃ¡vel no software de matrizes sob parÃ¢metros como 'Short Stitch Length' e 'Margin Threshold'. Em Ã¢ngulos inferiores a 45Â°, o filtro elimina automaticamente atÃ© 50% dos pontos internos enquanto preserva a totalidade das penetraÃ§Ãµes no raio externo do desenho.",
    "howItWorks": [
      "1. O programador cria uma forma vetorial com pontas afiadas (ex: as pontas de uma estrela ou a cauda de uma letra).",
      "2. O motor do software detecta o Ã¢ngulo agudo estreito no vÃ©rtice da coluna.",
      "3. O algoritmo de pontos curtos Ã© acionado automaticamente pelo software de bordado.",
      "4. Um ponto viaja atÃ© a borda externa, o ponto seguinte recua para 40% da coluna e o terceiro recua para 70%.",
      "5. A mÃ¡quina executa o bordado suavemente sem concentrar agulhadas no mesmo local.",
      "6. A ponta fica nÃ­tida, afiada, sem calombo endurecido no avesso e sem furar o tecido.",
      "7. A agulha nÃ£o sofre choque mecÃ¢nico e a linha nÃ£o arrebenta."
    ],
    "beginnerExplanation": "Sabe quando vocÃª vai bordar a pontinha de uma estrela ou um biquinho de triÃ¢ngulo e a mÃ¡quina fica batendo 15 vezes no mesmo buraquinho atÃ© cortar o tecido? O filtro de pontos curtos Ã© uma funÃ§Ã£o inteligente no programa que faz a mÃ¡quina 'escalonar' os pontinhos para trÃ¡s, deixando a ponta perfeita e fininha sem judiar do tecido!",
    "applications": [
      "Pontas de estrelas, triÃ¢ngulos, brasÃµes corporativos e bicos geomÃ©tricos",
      "Serifas e caudas de letras tipogrÃ¡ficas elegantes em monogramas",
      "Curvas de 90Â° a 180Â° em colunas satim sem acÃºmulo de linha",
      "PreservaÃ§Ã£o de tecidos finos e malhas contra rasgos em cantos pontiagudos"
    ],
    "commonErrors": [
      "â�Œ Desativar o filtro de pontos curtos nas propriedades do software para 'garantir cobertura', criando uma bola dura de linha no avesso",
      "â�Œ Usar recuos muito longos (acima de 80%), criando uma faixa de tecido vazia no meio da coluna satim",
      "â�Œ Digitalizar vÃ©rtices muito agudos (menos de 15Â°) com ponto cheio em vez de finalizar em ponto de costura reto (Run Stitch)"
    ],
    "troubleshootingTips": [
      "Se a ponta da letra estiver fazendo um nÃ³ duro que quebra a agulha: Acesse as propriedades de satim no Wilcom/Hatch e marque a caixa 'Pontos Curtos / Short Stitches' com espaÃ§amento automÃ¡tico",
      "Se o bico da estrela furar o tecido: Reduza a densidade da ponta e ative o escalonamento fracionÃ¡rio de pontos",
      "Se a ponta externa parecer falhada: Certifique-se de que os pontos de ancoragem externos continuam indo atÃ© o contorno vetorial"
    ],
    "dicaArtrelados": "Ao programar estrelas, brasÃµes ou letras com pontas fininhas no computador: mantenha o recurso de 'Pontos Curtos' (Short Stitches) SEMPRE ativado! Suas pontas vÃ£o ficar finas, pontudinhas, brilhantes e nunca mais vÃ£o fazer calombos de linha ou rasgar o tecido!",
    "voceSabia": "Sem o filtro de pontos curtos, uma ponta de estrela de 30 graus com densidade padrÃ£o de 0.40mm acumula mais de 16 perfuraÃ§Ãµes de agulha em uma Ã¡rea menor que a cabeÃ§a de um alfinete!",
    "practicalExercise": "Digitalize um triÃ¢ngulo com ponta bem fina em satim: primeiro sem pontos curtos e veja a nuvem densa de pontinhos azuis amontoados na ponta; agora ative o 'Short Stitch' e observe como os pontos se escalonam em degraus suaves e elegantes!",
    "quickSummary": "Algoritmo que recua alternadamente os pontos em vÃ©rtices e curvas fechadas para evitar nÃ³s duros e furos no tecido.",
    "relatedTerms": [
      "Ponto Cheio (Satin)",
      "Auto-Spaced Satin",
      "Densidade de Pontos",
      "Ã‚ngulo de Ponto (Stitch Angle)"
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
    "term": "DigitalizaÃ§Ã£o Manual / CriaÃ§Ã£o Vetorial Ponto a Ponto (Manual Digitizing & Punching)",
    "pronunciation": "di-gi-ta-li-za-cao ma-nu-al / pan-ching",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "Substantivo feminino composto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "summary": "MÃ©todo artesanal e profissional de programaÃ§Ã£o de matrizes onde o digitalizador desenha cada vetor, define o sentido das agulhadas e calibra manualmente o underlay e as compensaÃ§Ãµes.",
    "origin": "Do inglÃªs 'punching' (furar cartÃµes perfurados no tear Jacquard e nas primeiras mÃ¡quinas de bordar automÃ¡ticas do sÃ©culo XIX) e do latim 'digitale' (feito com os dedos / digital).",
    "definition": "A DigitalizaÃ§Ã£o Manual (Manual Digitizing / Professional Embroidery Punching) Ã© a arte e tÃ©cnica especializada de criar matrizes de bordado computadorizado a partir de ilustraÃ§Ãµes ou logotipos vetoriais, na qual o programador de matrizes (Puncher / Digitizer) desenha manualmente cada bloco de objeto, define a ordem cronolÃ³gica exata de costura, seleciona os tipos de pontos adequados (tatami, satim, costura reta), direciona as linhas de fluxo e Ã¢ngulos de ponto, programa os pontos estruturais de base (underlays) e aplica compensaÃ§Ãµes matemÃ¡ticas de encolhimento especÃ­ficas para o tecido em que a peÃ§a serÃ¡ confeccionada.",
    "technicalDetails": "Diferencia-se fundamentalmente da 'Auto-DigitalizaÃ§Ã£o' (Auto-Digitizing / Varinha MÃ¡gica automÃ¡tica dos softwares), que gera excesso descontrolado de pontos, cortes desnecessÃ¡rios e ausÃªncia de camadas de suporte. A digitalizaÃ§Ã£o manual produz matrizes com atÃ© 40% menos pontos, bordado macio, avesso limpo e zero quebra de linha.",
    "howItWorks": [
      "1. O programador importa a imagem de referÃªncia em alta resoluÃ§Ã£o no software de criaÃ§Ã£o.",
      "2. Faz o planejamento mental da sequÃªncia: o que estÃ¡ no fundo borda primeiro, o que estÃ¡ na frente borda por Ãºltimo.",
      "3. Desenha os blocos com ferramentas vetoriais de curvas de BÃ©zier respeitando a anatomia do desenho.",
      "4. Define a inclinaÃ§Ã£o exata dos Ã¢ngulos de ponto para criar reflexos de luz e relevo.",
      "5. Aplica camadas de sustentaÃ§Ã£o (underlay) adequadas para a gramatura do tecido final.",
      "6. Insere conexÃµes inteligentes (travamentos e pontos de salto planejados) para evitar cortes de linha excessivos.",
      "7. Testa o arquivo na mÃ¡quina fÃ­sica para validar a maciez e o caimento do bordado real."
    ],
    "beginnerExplanation": "Ã‰ o jeito profissional de criar matrizes no computador desenhando tudo com carinho e precisÃ£o, ponto por ponto, em vez de usar aquele botÃ£o automÃ¡tico do programa que faz tudo torto e cheio de cortes de linha. Uma matriz digitalizada Ã  mÃ£o borda muito mais rÃ¡pido, gasta menos linha e fica linda e macia no pano!",
    "applications": [
      "Logomarcas corporativas de alta fidelidade para camisas polo e uniformes",
      "Matrizes de enxoval de luxo infantil com pontos leves e avesso ultra limpo",
      "Bordados em relevo 3D, apliques e rendas nobres",
      "OtimizaÃ§Ã£o de tempo e produtividade industrial em confecÃ§Ãµes de grande escala"
    ],
    "commonErrors": [
      "â�Œ Confiar na ferramenta de 'Auto-DigitalizaÃ§Ã£o' de um clique para bordar produtos comerciais de clientes",
      "â�Œ NÃ£o planejar a ordem de sobreposiÃ§Ã£o das camadas, fazendo a mÃ¡quina bordar um detalhe da frente e depois ter que voltar para o fundo",
      "â�Œ Deixar todos os objetos com o mesmo Ã¢ngulo reto de ponto (90Â°), resultando em um bordado plano, sem brilho e sem profundidade visual"
    ],
    "troubleshootingTips": [
      "Se a matriz comprada pela internet estiver quebrando linha e cheia de cortes: Abra no software e redesenhe as conexÃµes manualmente usando ponto de costura reto escondido (Run Stitch connection)",
      "Se o bordado parecer pesado e duro como papelÃ£o: RefaÃ§a a digitalizaÃ§Ã£o manual reduzindo a densidade para 0.42 mm e ajustando o underlay para uma camada Ãºnica de tatami aberto",
      "Se os contornos ficarem desencaixados do preenchimento: Aumente a compensaÃ§Ã£o de encolhimento manual para 0.35 mm no objeto de fundo"
    ],
    "dicaArtrelados": "O maior diferencial de uma bordadeira profissional de sucesso Ã© saber digitalizar manualmente! Fuja da digitalizaÃ§Ã£o automÃ¡tica de um clique: desenhar cada pedacinho da matriz no Wilcom ou no Embird Ã© o que faz o seu bordado ter brilho de seda, avesso limpo e encantar qualquer cliente!",
    "voceSabia": "Nos anos 1970, antes dos computadores pessoais, a profissÃ£o de 'Puncher' de bordado exigia furar fitas de papel cartÃ£o gigantescas com um teclado mecÃ¢nico e pedais pesados para programar cada coordenada X e Y da mÃ¡quina de bordar!",
    "practicalExercise": "Escolha um desenho simples de uma maÃ§Ã£ com uma folha. Em vez de usar o botÃ£o automÃ¡tico, pegue a ferramenta de desenho manual do seu software e crie a folha com Ã¢ngulo inclinado a 45Â° e a maÃ§Ã£ com Ã¢ngulo a 90Â°. Borde e compare o brilho deslumbrante que os Ã¢ngulos manuais dÃ£o Ã  peÃ§a!",
    "quickSummary": "CriaÃ§Ã£o profissional e artesanal de matrizes no computador desenhando cada vetor, Ã¢ngulo e suporte estrutural.",
    "relatedTerms": [
      "Ã‚ngulo de Ponto (Stitch Angle)",
      "CompensaÃ§Ã£o de Encolhimento (Pull Compensation)",
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
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "TÃ©cnicas de Bordado",
    "summary": "MÃ©todo de execuÃ§Ã£o e digitalizaÃ§Ã£o especializado para peÃ§as transparentes ou com duas vistas, onde o avesso do bordado Ã© perfeitamente idÃªntico e limpo como a frente.",
    "origin": "Do latim 'duplus' e 'facies' (duas faces). Inspirado no cÃ©lebre bordado tradicional de dupla face chinÃªs de Suzhou (Xiang embroidery) adaptado ao maquinÃ¡rio computadorizado moderno.",
    "definition": "O Bordado Dupla Face Computadorizado (Clean Back Embroidery / Reversible Machine Embroidery) Ã© a tÃ©cnica avanÃ§ada de preparaÃ§Ã£o, digitalizaÃ§Ã£o e montagem no bastidor na qual a peÃ§a final apresenta um verso absolutamente limpo, estÃ©tico e simÃ©trico, sem fios soltos, sem nÃ³s aparentes, sem entretelas visÃ­veis e com a mesma cor e brilho da linha superior reproduzida na linha de bobina. Ã‰ a tÃ©cnica de excelÃªncia exigida para artigos nobres que exibem ambos os lados durante o uso, como toalhas de lavabo nobres, xales transparentes de organza, guardanapos de linho, cortinas, vÃ©us e bandeiras comemorativas.",
    "technicalDetails": "Requer o uso de linha de bordar idÃªntica (mesma cor e mesmo fio 40wt de poliÃ©ster ou seda) tanto no cone superior quanto na bobina inferior. Utiliza-se entretela hidrossolÃºvel de filme solÃºvel em Ã¡gua (Solvy) que desaparece completamente apÃ³s a lavagem, deixando o avesso do tecido 100% livre de resÃ­duos sintÃ©ticos.",
    "howItWorks": [
      "1. A bordadeira enche a bobina da mÃ¡quina com a mesma linha de bordado colorida usada no carretel de cima.",
      "2. O tecido (linho, cambraia ou toalha) Ã© montado no bastidor com entretela hidrossolÃºvel na frente e no verso.",
      "3. A tensÃ£o superior Ã© ajustada para equilÃ­brio neutro 1:1 com a tensÃ£o inferior (sem puxar mais para baixo).",
      "4. A matriz programada deve conter pontos de amarraÃ§Ã£o invisÃ­veis embutidos sob os prÃ³prios pontos cheios.",
      "5. Os cortes de salto sÃ£o eliminados ou programados para caminhar por baixo de Ã¡reas preenchidas.",
      "6. ApÃ³s o bordado, a peÃ§a Ã© enxaguada em Ã¡gua corrente para dissolver toda a entretela.",
      "7. A peÃ§a seca exibindo uma frente e um verso igualmente belos e sem defeitos."
    ],
    "beginnerExplanation": "Ã‰ quando vocÃª borda uma toalha ou um guardanapo de linho e o verso do bordado fica tÃ£o perfeito, lindo e com a mesma cor da linha da frente que a pessoa nem sabe qual Ã© o lado certo e qual Ã© o lado do avesso! Nada de entretela branca colada nem fiapos soltos atrÃ¡s!",
    "applications": [
      "Guardanapos de mesa posta e jogos americanos de linho puro",
      "Toalhas de lavabo e banho de alto luxo para presentes finos",
      "Bandeiras de cerimÃ´nia, estandartes e flÃ¢mulas com dupla visualizaÃ§Ã£o",
      "VÃ©us de noiva, cortinas de voil e peÃ§as de vestuÃ¡rio transparente"
    ],
    "commonErrors": [
      "â�Œ Usar linha de bobina branca comum de poliÃ©ster fino, deixando o avesso cheio de linhas brancas misturadas com a cor do bordado",
      "â�Œ Usar entretela rasgÃ¡vel comum que fica presa no avesso e nÃ£o sai, estragando o visual da peÃ§a",
      "â�Œ Deixar saltos longos de linha atravessando o avesso do bordado",
      "â�Œ TensÃ£o desregulada que puxa a linha da bobina para a frente do tecido"
    ],
    "troubleshootingTips": [
      "Se o verso estiver mostrando pontinhos brancos: Encha uma canelinha com a mesma linha de cima e calibre a tensÃ£o superior e inferior para ficarem perfeitamente equilibradas",
      "Se ficarem resÃ­duos de entretela no avesso: Mergulhe a peÃ§a em uma vasilha com Ã¡gua morna por 10 minutos para dissolver completamente a pelÃ­cula hidrossolÃºvel",
      "Se o avesso estiver com pontas de linha arrepiadas: FaÃ§a o arremate manual das pontas com uma agulha de mÃ£o fina antes de molhar a peÃ§a"
    ],
    "dicaArtrelados": "Para fazer um guardanapo de linho chique com avesso perfeito: encha a bobina com a MESMA linha de bordar colorida do cone de cima e use entretela hidrossolÃºvel que some na Ã¡gua. Seu cliente vai virar o guardanapo do avesso e ficar de boca aberta com a perfeiÃ§Ã£o!",
    "voceSabia": "Na China Imperial, as mestras bordadeiras de Suzhou criavam peÃ§as em seda transparente onde bordavam um gato de um lado e um cachorro do outro lado do mesmo tecido usando apenas uma Ãºnica agulha manual!",
    "practicalExercise": "Encha uma bobina com linha de bordar azul royal igual ao seu cone superior. Monte um pedaÃ§o de tricoline branca com entretela hidrossolÃºvel e borde uma flor simples. Lave na torneira e veja a magia de ter um bordado com frente e verso idÃªnticos!",
    "quickSummary": "TÃ©cnica que cria um bordado com avesso limpo e idÃªntico Ã  frente usando bobina colorida e entretela hidrossolÃºvel.",
    "relatedTerms": [
      "Entretela HidrossolÃºvel",
      "Ajuste de TensÃ£o da Linha",
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
    "term": "Desbobinador CÃ´nico e Rede de ContenÃ§Ã£o de Linha (Thread Net & Cone Unwinder Sock)",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "AcessÃ³rios e Insumos",
    "origin": "Do desenvolvimento de redes elÃ¡sticas tubulares de poliamida na indÃºstria tÃªxtil para controlar o desbobinamento de fios sintÃ©ticos escorregadios e filamentos metÃ¡licos.",
    "summary": "Redinha elÃ¡stica protetora colocada sobre cones de linha de bordar para evitar que o fio despenque, forme laÃ§os soltos na base e quebre por atrito na mÃ¡quina.",
    "definition": "O Desbobinador CÃ´nico e Rede de ContenÃ§Ã£o de Linha (Thread Netting / Spool Sock) Ã© um acessÃ³rio tÃªxtil em malha tubular flexÃ­vel que envolve o cone de linha de poliÃ©ster, viscose, fio metÃ¡lico ou multifilamento, aplicando uma leve pressÃ£o perimÃ©trica que impede que os enrolamentos de linha escorreguem para a base do cone (efeito cascata) antes de serem puxados pelo guia-fio superior.",
    "technicalDetails": "Essencial para cones do tipo King Spool (1.000m a 5.000m) e carretÃ©is cruzados (Cross-Wound), mantendo o Ã¢ngulo de saÃ­da vertical constante e eliminando variaÃ§Ãµes repentinas no tensor superior que causam franzimento ou quebra.",
    "beginnerExplanation": "Ã‰ aquela 'meinha' ou redinha furadinha que a gente veste no cone de linha de bordar. Ela serve para a linha nÃ£o escorregar toda para o chÃ£o ou ficar caindo no pÃ© do cone, evitando que a linha dÃª nÃ³s e arrebente a agulha.",
    "howItWorks": [
      "1. A bordadeira veste a rede de contenÃ§Ã£o no cone de linha de baixo para cima.",
      "2. Puxa a ponta da linha pelo topo aberto da redinha atÃ© o mastro guia-fio.",
      "3. A rede exerce uma contenÃ§Ã£o suave enquanto o cone gira ou desbobina estÃ¡tico.",
      "4. Fios escorregadios (como linha dourada metÃ¡lica ou trilobal 100% poliÃ©ster) saem sem criar laÃ§adas caÃ­das.",
      "5. A mÃ¡quina borda em velocidade mÃ¡xima sem paradas por travamento de cone."
    ],
    "applications": [
      "Uso indispensÃ¡vel com fios metÃ¡licos (dourado, prateado e furta-cor)",
      "Cones grandes de 4.000m ou 5.000m de poliÃ©ster em mÃ¡quinas domÃ©sticas e industriais",
      "Linhas finas de viscose ou fios de alta torÃ§Ã£o que enrolam no prÃ³prio eixo"
    ],
    "commonErrors": [
      "â�Œ Apertar a rede em excesso no topo do cone, travando a passagem da linha e aumentando a tensÃ£o a ponto de arrebentar o fio.",
      "â�Œ Deixar o cone de fio metÃ¡lico solto sem rede, permitindo que a linha caia e se enrole no pino suporte do carretel.",
      "â�Œ Usar pedaÃ§os de rede rasgados que enroscam na linha durante o bordado."
    ],
    "troubleshootingTips": [
      "Se a linha estiver arrebentando a cada 2 minutos com fio metÃ¡lico: Vista a redinha cobrindo do meio para baixo do cone e diminua a velocidade da mÃ¡quina para 500 PPM.",
      "Se a linha estiver saindo muito dura da redinha: Corte a redinha na metade do comprimento para reduzir a pressÃ£o elÃ¡stica."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "Topstitch 90/14 ou Metallic Needle 80/12",
      "stabilizer": "Adequada ao tecido",
      "speedPPM": "500 a 700 PPM para fios metÃ¡licos com rede"
    },
    "dicaArtrelados": "Ao bordar com linha metÃ¡lica dourada ou prateada, vista a redinha cobrindo todo o cone e passe uma gota de silicone lÃ­quido tÃªxtil na rede! A linha deslizarÃ¡ como seda, sem arrebentar nenhuma vez!",
    "voceSabia": "A maioria dos fabricantes de mÃ¡quinas multiagulhas e linhas premium (como Madeira e Gutermann) inclui pacotes de redes de contenÃ§Ã£o originais na caixa de acessÃ³rios bÃ¡sicos da mÃ¡quina.",
    "practicalExercise": "Pegue um cone de linha metÃ¡lica e puxe a ponta sem a rede: repare como a linha cai e se enrola. Agora coloque a rede de contenÃ§Ã£o e puxe novamente: veja como o fio sai perfeitamente alinhado e controlado!",
    "quickSummary": "Rede elÃ¡stica tubular colocada sobre o cone de linha para evitar o desmoronamento e enrosco de fios escorregadios e metÃ¡licos.",
    "relatedTerms": [
      "Carretel de Linha",
      "Desbobinamento de Linha e Sentido do Fio",
      "Ajuste de TensÃ£o da Linha",
      "Cera e Lubrificante de Linha / Ã“leo de Silicone LÃ­quido"
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
    "term": "Deslocamento Gradual de Ponto em Ã‚ngulo / Curvatura de Ponto (Stitch Angle Shifting & Wave Effect)",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "Substantivo masculino composto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "origin": "Do desenvolvimento de ferramentas de preenchimento inteligente de contorno complexo com linhas de direÃ§Ã£o mÃºltiplas nos softwares Wilcom ES e Compucon.",
    "summary": "TÃ©cnica de programaÃ§Ã£o que faz a direÃ§Ã£o dos pontos girar suavemente acompanhando a anatomia do desenho, criando reflexos de luz e movimento natural no fio.",
    "definition": "O Deslocamento Gradual de Ponto em Ã‚ngulo (Curved Stitch Angles / Flowing Stitch Direction) Ã© o mÃ©todo avanÃ§ado de digitalizaÃ§Ã£o de matrizes em que mÃºltiplos Ã¢ngulos de inclinaÃ§Ã£o sÃ£o distribuÃ­dos ao longo de um objeto sinuoso (como uma fita ondulada, corpo de animal, folha ou pÃ©tala de rosa), fazendo com que cada ponto siga a curvatura orgÃ¢nica da forma em vez de manter uma direÃ§Ã£o fixa e estÃ¡tica.",
    "technicalDetails": "Permite criar o efeito de gradiente Ã³ptico de brilho (Sheen Gradient), jÃ¡ que o filamento de poliÃ©ster reflete a luz ambiente de acordo com o Ã¢ngulo em que estÃ¡ assentado sobre o tecido.",
    "beginnerExplanation": "Em vez de bordar tudo reto na mesma direÃ§Ã£o, os pontos vÃ£o fazendo a curva do desenho devagarzinho, como se fossem a pintura de um pincel. Quando a luz bate no bordado, a linha brilha e parece que o desenho estÃ¡ vivo e em movimento!",
    "howItWorks": [
      "1. O programador cria o contorno do objeto no software de matrizes.",
      "2. Em vez de definir apenas um Ã¢ngulo global, adiciona vÃ¡rias 'linhas de direÃ§Ã£o de ponto' ao longo da curva.",
      "3. O software interpola matematicamente a transiÃ§Ã£o angular entre cada linha guia.",
      "4. A mÃ¡quina executa os pontos girando fraÃ§Ã£o por fraÃ§Ã£o de grau a cada batida de agulha.",
      "5. O resultado Ã© um preenchimento curvo perfeito, anatÃ´mico e sem cantos duros."
    ],
    "applications": [
      "PÃ©talas de flores, folhas, ramos e arabescos clÃ¡ssicos",
      "Cabelos, pelos de animais e penas de pÃ¡ssaros com aspecto hiper-realista",
      "Fitas decorativas, laÃ§os, bandeiras ondulantes e letras cursivas grossas"
    ],
    "commonErrors": [
      "â�Œ Colocar linhas de Ã¢ngulo muito prÃ³ximas e em direÃ§Ãµes opostas repentinas, criando um ponto de cruzamento que forma um 'caroÃ§o' duro na matriz.",
      "â�Œ NÃ£o ativar a compensaÃ§Ã£o de repuxo adequada para objetos curvos, deixando frestas de tecido aparecendo nas dobras da curva."
    ],
    "troubleshootingTips": [
      "Se a linha estiver amontoando no lado interno da curva: Ative a opÃ§Ã£o 'Pontos Curtos AutomÃ¡ticos' (Auto Short Stitch) no menu do software para desbastar o raio interno.",
      "Se a curvatura parecer serrilhada: Aumente a quantidade de linhas de direÃ§Ã£o intermediÃ¡rias para suavizar a transiÃ§Ã£o angular."
    ],
    "recommendedSettings": {
      "density": "0.40 mm a 0.42 mm",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela Rasga-FÃ¡cil 80g",
      "speedPPM": "650 a 800 PPM"
    },
    "dicaArtrelados": "Ao criar folhas e pÃ©talas, nunca use um Ãºnico Ã¢ngulo reto de 45Â°! Adicione 3 linhas de Ã¢ngulo acompanhando a nervura central da folha. A diferenÃ§a de brilho e realismo no bordado pronto Ã© simplesmente profissional!",
    "voceSabia": "O brilho caracterÃ­stico das linhas de bordado de poliÃ©ster trilobal ocorre porque cada filamento tem seÃ§Ã£o transversal triangular, funcionando como pequenos prismas que refletem a luz de acordo com o Ã¢ngulo do ponto!",
    "practicalExercise": "No seu software, desenhe uma letra 'S' em ponto cheio com Ã¢ngulo Ãºnico de 90Â° e outra letra 'S' com Ã¢ngulos curvos acompanhando a letra. Borde as duas lado a lado e compare o brilho sob a luz do ateliÃª!",
    "quickSummary": "DistribuiÃ§Ã£o de Ã¢ngulos variÃ¡veis que acompanham as curvas do desenho, criando reflexos de luz naturais e acabamento orgÃ¢nico.",
    "relatedTerms": [
      "Ã‚ngulo de Ponto (Stitch Angle)",
      "Curva BÃ©zier na DigitalizaÃ§Ã£o",
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
    "term": "DesativaÃ§Ã£o de Ponto Curto em Curvas Fechadas (Short Stitch Inactivation in Acute Curves)",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "Substantivo feminino composto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "origin": "Do controle de parÃ¢metros algorÃ­tmicos em digitalizaÃ§Ã£o avanÃ§ada para gestÃ£o de furos na chapa e cortes de tecido em bordados finos.",
    "summary": "ConfiguraÃ§Ã£o no software que desabilita ou recalcula a filtragem de micropontos em curvas muito estreitas para preservar a cobertura total sem perfurar o tecido.",
    "definition": "A DesativaÃ§Ã£o ou CalibraÃ§Ã£o de Ponto Curto em Curvas Fechadas (Short Stitch Control / Custom Corner Stitch Filter) Ã© o ajuste tÃ©cnico nos parÃ¢metros de preenchimento em ponto cheio (Satin) que define se o software deve ou nÃ£o suprimir alternadamente os pontos internos de uma curva acentuada. Quando desativado ou calibrado com precisÃ£o, garante que Ã¡reas delicadas (como pontas de folhas ou cantos de letras gÃ³ticas) mantenham o contorno nÃ­tido sem criar buracos no tecido por perfuraÃ§Ã£o repetida.",
    "technicalDetails": "Por padrÃ£o, o filtro de pontos curtos remove atÃ© 50% dos pontos no raio interno de uma curva para evitar acÃºmulo. No entanto, em linhas muito finas (menores que 1.5 mm), essa filtragem pode deixar o tecido exposto, exigindo a desativaÃ§Ã£o manual ou reduÃ§Ã£o da porcentagem de filtragem para 20%.",
    "beginnerExplanation": "Quando a mÃ¡quina faz uma curva bem fechadinha, ela pode dar muitas agulhadas no mesmo buraquinho e rasgar o tecido. Esse ajuste no computador decide se a mÃ¡quina pula alguns pontinhos por dentro da curva para nÃ£o furar o pano, mantendo o desenho bonito e seguro.",
    "howItWorks": [
      "1. O programador identifica um objeto com curvas fechadas ou cantos agudos na matriz.",
      "2. Acessa as propriedades do objeto na aba 'Pontos Curtos / Short Stitches'.",
      "3. Avalia a largura da coluna: se for muito estreita, reduz o comprimento mÃ­nimo do filtro.",
      "4. Define se o ponto curto serÃ¡ alternado em 1:1, 1:2 ou desativado para aquele segmento especÃ­fico.",
      "5. O software gera a distribuiÃ§Ã£o perfeita de furos na chapa de agulha sem picotar o tecido.",
      "6. A peÃ§a borda com contorno liso e sem rasgos na borda."
    ],
    "applications": [
      "Letras pequenas com serifas ou detalhes gÃ³ticos pontiagudos",
      "Contornos de olhos, bicos e detalhes em bordados realistas miniaturizados",
      "Bordados em tecidos delicados que picotam fÃ¡cil (seda, cetim, organza e malha fina)"
    ],
    "commonErrors": [
      "â�Œ Deixar o filtro padrÃ£o de ponto curto ativado em colunas finas de 1 mm, resultando em pontas desdentadas e tecido aparente.",
      "â�Œ Desativar o filtro em colunas largas e pesadas de 6 mm, gerando acÃºmulo de linha e quebra de agulha no vÃ©rtice interno."
    ],
    "troubleshootingTips": [
      "Se a curva fechada da letra estiver abrindo um buraco no tecido: Ative o ponto curto em nÃ­vel alto (40%) e diminua a densidade do objeto.",
      "Se a ponta da letra estiver parecendo 'mordida' ou rala: Reduza o filtro de ponto curto para 15% ou desative-o apenas naquele objeto fino."
    ],
    "recommendedSettings": {
      "density": "0.38 mm a 0.40 mm",
      "needleType": "65/9 ou 75/11 Ponta Aguda Microtex",
      "stabilizer": "Entretela Rasga-FÃ¡cil de boa sustentaÃ§Ã£o",
      "speedPPM": "600 PPM em detalhes pequenos"
    },
    "dicaArtrelados": "Em fontes pequenas (menores que 8 mm de altura), configure a compensaÃ§Ã£o de canto para 'Canto Inteligente' (Smart Corner) e ajuste o ponto curto para 20%! Suas letrinhas ficarÃ£o nÃ­tidas e com as pontas perfeitamente desenhadas!",
    "voceSabia": "Sem o recurso de ponto curto, uma curva fechada de 90 graus em ponto cheio chegaria a concentrar atÃ© 12 perfuraÃ§Ãµes de agulha em um espaÃ§o de apenas meio milÃ­metro, cortando o tecido como se fosse uma tesoura!",
    "practicalExercise": "Programe um triÃ¢ngulo pontiagudo com ponto curto 0% e outro com ponto curto 50%. Aplique o simulador de pontos na tela com zoom mÃ¡ximo e veja como o segundo distribui os furos suavemente ao longo do canto!",
    "quickSummary": "Controle algorÃ­tmico no software que gerencia a quantidade de pontos no interior de curvas fechadas para evitar rasgos no tecido.",
    "relatedTerms": [
      "CompensaÃ§Ã£o de FraÃ§Ã£o de Ponto e Ponto Curto AutomÃ¡tico",
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
    "term": "Densidade Progressiva para Sombra e Relevo Ã“ptico (Progressive Shading Density)",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "Substantivo feminino composto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "origin": "Da fusÃ£o da tÃ©cnica de pintura de agulha (Thread Painting) com o controle paramÃ©trico de densidade gradiente nos softwares modernos de matrizes.",
    "summary": "TÃ©cnica de programaÃ§Ã£o onde a densidade varia gradualmente de fechada para aberta no mesmo objeto, criando transiÃ§Ã£o de cor, luz, sombra e volume 3D.",
    "definition": "A Densidade Progressiva para Sombra e Relevo Ã“ptico (Gradient Density / Variable Stitch Pitch) Ã© a tÃ©cnica de digitalizaÃ§Ã£o que programa um Ãºnico objeto de preenchimento (Tatami ou Satin) com espaÃ§amento de pontos dinÃ¢mico, variando suavemente de uma Ã¡rea densa e compacta (ex: 0.35 mm) atÃ© uma Ã¡rea rarefeita e translÃºcida (ex: 1.20 mm ou 2.0 mm). Essa variaÃ§Ã£o permite misturar duas cores sobrepostas ou deixar o tecido de fundo transparecer, criando efeitos de luz, sombra e volume tridimensional sem cortes de linha.",
    "technicalDetails": "Permite curvas de aceleraÃ§Ã£o linear, exponencial ou senoidal na distribuiÃ§Ã£o de pontos, sendo fundamental para bordados realistas (animais, rostos, paisagens e frutas) e efeitos de metal polido.",
    "beginnerExplanation": "Ã‰ como fazer um sombreado no desenho usando lÃ¡pis de cor: vocÃª aperta forte de um lado e vai soltando a mÃ£o devagarzinho para clarear. No bordado, a mÃ¡quina dÃ¡ muitos pontinhos juntos onde Ã© escuro e vai afastando os pontos onde Ã© claro, criando uma pintura linda com relevo!",
    "howItWorks": [
      "1. O programador cria o primeiro objeto de base com densidade progressiva (ex: escuro embaixo clareando para cima).",
      "2. Cria um segundo objeto sobreposto com cor mais clara e densidade invertida (aberto embaixo fechando em cima).",
      "3. Os pontos das duas cores se intercalam perfeitamente no meio do caminho.",
      "4. A mÃ¡quina borda primeiro a cor escura e depois a clara com o mesmo Ã¢ngulo de ponto.",
      "5. A fusÃ£o das duas cores cria um degradÃª contÃ­nuo e sem emendas marcadas."
    ],
    "applications": [
      "Bordados realistas de rostos humanos, pelagem de animais e plumagem de aves",
      "Efeitos de brilho metÃ¡lico em letras douradas, prata e bronze",
      "PÃ©talas de flores com transiÃ§Ã£o suave do miolo para as bordas",
      "Logotipos modernos com estÃ©tica de gradiente de cor"
    ],
    "commonErrors": [
      "â�Œ Usar Ã¢ngulos de ponto diferentes nas camadas sobrepostas de degradÃª, quebrando a harmonia da mistura de fios.",
      "â�Œ Programar a transiÃ§Ã£o com inÃ­cio muito brusco, criando uma linha de corte visÃ­vel em vez de uma sombra suave.",
      "â�Œ Deixar a camada de cima com densidade muito pesada, cobrindo totalmente a cor de baixo."
    ],
    "troubleshootingTips": [
      "Se o degradÃª ficou com uma faixa dura no meio: Aumente o comprimento da zona de transiÃ§Ã£o no software e use o perfil de gradiente senoidal (suave).",
      "Se o tecido de fundo estiver aparecendo onde nÃ£o deveria: Coloque uma camada prÃ©via de tatami leve de suporte sob a Ã¡rea antes de iniciar o sombreado."
    ],
    "recommendedSettings": {
      "density": "VariaÃ§Ã£o de 0.35 mm a 1.50 mm no mesmo objeto",
      "needleType": "75/11 Ponta Bola ou Microtex 70/10",
      "stabilizer": "Entretela Rasga-FÃ¡cil dupla ou Malha EstÃ¡vel",
      "speedPPM": "600 a 750 PPM"
    },
    "dicaArtrelados": "Para fazer efeito de ouro envelhecido ou brilho 3D em letras de brasÃ£o: programe a base com linha marrom em densidade progressiva de 0.40 mm a 1.0 mm e cubra com linha dourada em densidade invertida. O resultado parece joia reluzente!",
    "voceSabia": "A tÃ©cnica de densidade progressiva foi desenvolvida originalmente no JapÃ£o para reproduzir a milenar tÃ©cnica de bordado manual 'Nihon Shishu' em mÃ¡quinas computadorizadas Tajima e Barudan.",
    "practicalExercise": "Crie um quadrado no software com preenchimento tatami e ative o efeito 'Gradiente de Densidade' variando de 0.35 mm na esquerda atÃ© 1.20 mm na direita. Borde em linha vermelha sobre tecido branco e veja o lindo degradÃª surgir!",
    "quickSummary": "VariaÃ§Ã£o programada no espaÃ§amento de pontos que cria sombras, luz e fusÃ£o de cores para efeito realista e tridimensional.",
    "relatedTerms": [
      "DegradÃª de Pontos / Ponto Sombreado",
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
    "term": "Dreno de Eletricidade EstÃ¡tica em MÃ¡quinas de Bordar (Static Electricity Grounding & Discharge)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "Substantivo masculino composto.",
    "category": "ManutenÃ§Ã£o e Cuidados",
    "origin": "Da eletrotÃ©cnica aplicada a equipamentos industriais automatizados para proteÃ§Ã£o de placas eletrÃ´nicas e microprocessadores contra descargas eletrostÃ¡ticas (ESD).",
    "summary": "Sistema e procedimentos de aterramento elÃ©trico para dissipar cargas estÃ¡ticas geradas pelo atrito de linhas de poliÃ©ster e tecidos sintÃ©ticos em alta velocidade.",
    "definition": "O Dreno de Eletricidade EstÃ¡tica (ESD Protection & Machine Grounding) Ã© o conjunto de medidas tÃ©cnicas de aterramento e descarga eletrostÃ¡tica na carcaÃ§a, chapa de agulha e mastro guia-fio da mÃ¡quina de bordar. O atrito constante de linhas 100% poliÃ©ster e tecidos sintÃ©ticos (como tactel, microfibra e nylon) em ambientes secos com ar-condicionado gera milhares de volts de eletricidade estÃ¡tica que podem causar travamentos no painel LCD, descalibraÃ§Ã£o do pantÃ³grafo ou queima de sensores Ã³pticos.",
    "technicalDetails": "Requer tomada com aterramento padrÃ£o (fio terra com resistÃªncia inferior a 5 ohms), controle de umidade relativa do ar no ateliÃª entre 45% e 60% e fios de cobre ou escovas de descarga estÃ¡tica nos suportes de cone em linhas de alta produÃ§Ã£o.",
    "beginnerExplanation": "Quando vocÃª borda muito rÃ¡pido com linha de poliÃ©ster em dia seco ou no ar-condicionado, a linha gera choque de eletricidade estÃ¡tica. Se a mÃ¡quina nÃ£o tiver um bom fio terra, esse choque pode fazer a tela digital piscar, travar no meio do bordado ou queimar uma plaquinha cara da mÃ¡quina.",
    "howItWorks": [
      "1. Durante o bordado em alta rotaÃ§Ã£o (800 PPM), o atrito do fio de poliÃ©ster nos tensores gera cargas elÃ©tricas estÃ¡ticas.",
      "2. As cargas acumulam na carcaÃ§a metÃ¡lica e no pantÃ³grafo da mÃ¡quina.",
      "3. O sistema de aterramento conduz com seguranÃ§a essa eletricidade para o solo pelo pino terra da tomada.",
      "4. Se o ateliÃª estiver muito seco, o uso de umidificador de ar ou spray antiestÃ¡tico no suporte de linhas neutraliza as cargas.",
      "5. A eletrÃ´nica da mÃ¡quina opera com estabilidade total e sem bugs ou reinicializaÃ§Ãµes involuntÃ¡rias."
    ],
    "applications": [
      "AteliÃªs e fÃ¡bricas climatizadas com ar-condicionado contÃ­nuo e clima seco",
      "Bordados em larga escala em tecidos sintÃ©ticos (tactel, oxford, nylon e soft)",
      "ProteÃ§Ã£o de mÃ¡quinas modernas com telas touchscreen e conexÃ£o Wi-Fi"
    ],
    "commonErrors": [
      "â�Œ Quebrar ou remover o terceiro pino (pino terra) do plugue da mÃ¡quina para usar em tomadas antigas de dois furos.",
      "â�Œ Ligar a mÃ¡quina de bordar na mesma extensÃ£o ou rÃ©gua de ferro de passar roupa a vapor, causando ruÃ­do e surtos elÃ©tricos.",
      "â�Œ Deixar o ateliÃª com umidade abaixo de 30%, aumentando as faÃ­scas estÃ¡ticas."
    ],
    "troubleshootingTips": [
      "Se a tela da mÃ¡quina piscar ou reiniciar sozinha quando vocÃª toca no bastidor: Desligue imediatamente e providencie a instalaÃ§Ã£o de uma tomada com aterramento verdadeiro com eletricista.",
      "Se vocÃª estiver levando pequenos choques ao tocar na mÃ¡quina: Coloque um tapete de borracha antiestÃ¡tico no chÃ£o onde a operadora trabalha e use umidificador de ambiente."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "N/A",
      "stabilizer": "N/A",
      "speedPPM": "Velocidade padrÃ£o com aterramento ativo"
    },
    "dicaArtrelados": "Nunca corte o pino terra da sua mÃ¡quina de bordar! A placa mÃ£e e o visor touch custam caro para consertar. Um bom aterramento elÃ©trico no ateliÃª garante que sua mÃ¡quina dure muitos anos sem dar nenhum susto nem queimar Ã  toa!",
    "voceSabia": "O simples movimento de desenrolar 1.000 metros de linha de poliÃ©ster em alta velocidade pode gerar uma carga estÃ¡tica de mais de 10.000 volts, suficiente para danificar circuitos integrados de microprocessadores!",
    "practicalExercise": "Verifique a tomada onde sua mÃ¡quina estÃ¡ ligada. Certifique-se de que o plugue tem os 3 pinos originais e teste se a tomada possui aterramento real com um testador de tomadas simples.",
    "quickSummary": "Procedimentos e aterramento elÃ©trico para eliminar cargas estÃ¡ticas geradas pelo atrito de linhas sintÃ©ticas e proteger a eletrÃ´nica da mÃ¡quina.",
    "relatedTerms": [
      "OperaÃ§Ã£o da MÃ¡quina",
      "ManutenÃ§Ã£o Preventiva",
      "CarcaÃ§a da MÃ¡quina de Bordado",
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
    "term": "DuplicaÃ§Ã£o de Contorno com CompensaÃ§Ã£o de SobreposiÃ§Ã£o (Contour Duplication with Overlap Compensation)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "Substantivo feminino composto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "origin": "Das regras fundamentais de engenharia de digitalizaÃ§Ã£o de matrizes para evitar frestas e deslocamentos de registro entre preenchimento e contorno final.",
    "summary": "TÃ©cnica de matriz que cria uma margem de seguranÃ§a e sobreposiÃ§Ã£o calculada entre o preenchimento de fundo e o contorno externo para que eles nunca se desencontrem.",
    "definition": "A DuplicaÃ§Ã£o de Contorno com CompensaÃ§Ã£o de SobreposiÃ§Ã£o (Overlap Border Compensation / Registration Trapping) Ã© o procedimento tÃ©cnico executado no software de bordado em que o contorno de um objeto preenchido Ã© ligeiramente expandido para dentro da Ã¡rea de preenchimento (sobreposiÃ§Ã£o de 0.8 mm a 1.2 mm). Isso assegura que, mesmo com a traÃ§Ã£o mecÃ¢nica do tecido durante a costura (repuxo), o contorno final de ponto cheio ou ponto cordÃ£o cubra perfeitamente a borda do desenho sem deixar fendas de tecido cru aparentes.",
    "technicalDetails": "Diferencia-se da simples duplicata geomÃ©trica por aplicar compensaÃ§Ã£o direcional de traÃ§Ã£o (Pull Compensation) apenas no eixo perpendicular Ã  direÃ§Ã£o do ponto, alinhando a sequÃªncia de costura do centro para fora.",
    "beginnerExplanation": "Sabe quando vocÃª borda um desenho e o contorno preto de fora fica torto, saindo do lugar e deixando um espaÃ§o em branco feio entre o desenho e o contorno? Essa tÃ©cnica faz o contorno 'entrar' um milÃ­metrozinho para dentro da cor de fundo, garantindo que o encaixe fique sempre perfeito, mesmo que o tecido puxe um pouco!",
    "howItWorks": [
      "1. O programador cria o objeto de preenchimento de fundo (ex: cÃ­rculo vermelho em tatami).",
      "2. Duplica a forma vetorial para gerar o contorno de acabamento (ex: ponto cheio preto).",
      "3. Aplica uma sobreposiÃ§Ã£o para dentro de 1.0 mm (Overlap/Trapping).",
      "4. Adiciona ponto de suporte (underlay) no preenchimento para firmar o tecido na entretela.",
      "5. Programa a ordem de costura para bordar o fundo primeiro e o contorno logo em seguida.",
      "6. Na mÃ¡quina, o contorno fecha perfeitamente colado ao desenho, sem frestas."
    ],
    "applications": [
      "Emblemas, brasÃµes e logotipos corporativos com contornos contrastantes",
      "Personagens infantis e desenhos animados com traÃ§os pretos externos fortes",
      "Bordados em tecidos elÃ¡sticos (malha, pique, moletom e lycra)"
    ],
    "commonErrors": [
      "â�Œ Desenhar o contorno encostando exatamente na borda teÃ³rica do desenho (sem sobreposiÃ§Ã£o), fazendo o repuxo abrir uma fresta branca entre o fundo e a borda.",
      "â�Œ Fazer sobreposiÃ§Ã£o excessiva de mais de 2.5 mm, criando uma faixa dura e grossa no encontro dos pontos."
    ],
    "troubleshootingTips": [
      "Se o contorno estiver saindo fora do lugar no lado direito: Aumente a sobreposiÃ§Ã£o para 1.2 mm e aumente a compensaÃ§Ã£o de repuxo do preenchimento no software.",
      "Se o contorno estiver quebrando linha ao passar por cima do fundo: Reduza a densidade do preenchimento nas bordas ou mude o underlay de tatami para traÃ§o simples."
    ],
    "recommendedSettings": {
      "density": "Contorno em Satin 0.40 mm com sobreposiÃ§Ã£o de 1.0 mm",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela Rasga-FÃ¡cil 80g ou Entretela de Malha",
      "speedPPM": "700 a 800 PPM"
    },
    "dicaArtrelados": "Regra de ouro do ateliÃª Artrelados: NUNCA faÃ§a contorno de bordado encostando na beiradinha exata! Deixe sempre 1 milÃ­metro de preenchimento passando por baixo do contorno. Ã‰ o segredo para ter matrizes perfeitas que nunca saem do registro!",
    "voceSabia": "Na indÃºstria grÃ¡fica de impressÃ£o offset, esse mesmo conceito de sobreposiÃ§Ã£o preventiva para evitar frestas brancas entre cores Ã© chamado de 'Trapping' (armadilha de cores).",
    "practicalExercise": "No seu software, desenhe um quadrado azul e coloque um contorno preto de 2 mm de largura com 1 mm de sobreposiÃ§Ã£o para dentro. Borde em um pedaÃ§o de malha e veja como o encaixe fica 100% perfeito e sem nenhuma folga!",
    "quickSummary": "TÃ©cnica de matriz que cria uma margem de sobreposiÃ§Ã£o entre o fundo e o contorno para evitar frestas e desalinhamento causados pelo repuxo do tecido.",
    "relatedTerms": [
      "Alinhamento de Contorno (Registration Alignment)",
      "CompensaÃ§Ã£o de PuxÃ£o (Pull Compensation)",
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
    "term": "Desencaixe e Encaixe RÃ¡pido de Bastidor / Trava MagnÃ©tica (Quick-Release Hoop Clamping System)",
    "level": "Iniciante ðŸŸ¢",
    "grammarClass": "Substantivo masculino composto.",
    "category": "Equipamentos e MÃ¡quinas",
    "origin": "Do desenvolvimento de sistemas ergonÃ´micos de fixaÃ§Ã£o rÃ¡pida e bastidores magnÃ©ticos de neodÃ­mio para alta produtividade em confecÃ§Ãµes e ateliÃªs modernos.",
    "summary": "Mecanismo de engate rÃ¡pido e bastidores magnÃ©ticos que travam o tecido no bastidor instantaneamente com Ã­mÃ£s sem necessidade de parafusos manuais.",
    "definition": "O Desencaixe e Encaixe RÃ¡pido de Bastidor com Trava MagnÃ©tica (Magnetic Quick-Release Hoop System) Ã© a tecnologia de fixaÃ§Ã£o que substitui os tradicionais anÃ©is plÃ¡sticos com parafuso de aperto manual por aros dotados de potentes Ã­mÃ£s industriais de neodÃ­mio. O sistema permite posicionar, travar e retirar tecidos finos, toalhas grossas ou peÃ§as jÃ¡ costuradas em segundos, eliminando o cansaÃ§o dos punhos da bordadeira e prevenindo marcas de esmagamento (marcas de bastidor) nos tecidos delicados.",
    "technicalDetails": "Proporciona pressÃ£o perimÃ©trica homogÃªnea e autorregulÃ¡vel que se adapta automaticamente a qualquer espessura de material (de 0.2 mm a 8.0 mm) sem exigir ajustes mecÃ¢nicos de parafusos.",
    "beginnerExplanation": "Ã‰ um bastidor moderno que fecha com Ã­mÃ£s super fortes em vez de vocÃª ter que ficar apertando parafuso com a mÃ£o atÃ© doer os dedos. VocÃª coloca a entretela, o tecido em cima e encosta o aro de cima: ele gruda na hora, nÃ£o marca a toalha e vocÃª tira num clique rÃ¡pido!",
    "howItWorks": [
      "1. A bordadeira apoia a base inferior do bastidor magnÃ©tico na bancada com a entretela.",
      "2. Posiciona a peÃ§a a ser bordada (ex: camiseta ou toalha) sobre a base.",
      "3. Aproxima o aro superior magnÃ©tico, que Ã© atraÃ­do e trava instantaneamente o tecido com pressÃ£o uniforme.",
      "4. Encaixa o bastidor no suporte do pantÃ³grafo da mÃ¡quina atravÃ©s da trava de engate rÃ¡pido.",
      "5. Borda a matriz com total estabilidade e sem folgas.",
      "6. Ao terminar, puxa a alÃ§a de desencaixe rÃ¡pido e libera a peÃ§a pronta em um segundo."
    ],
    "applications": [
      "ProduÃ§Ã£o de grande escala de uniformes, camisas polo e camisetas",
      "PeÃ§as delicadas que marcam fÃ¡cil (veludo, camurÃ§a, cetim e couro sintÃ©tico)",
      "Toalhas felpudas grossas e peÃ§as com zÃ­per ou botÃµes prÃ³ximos Ã  borda do bastidor",
      "Ergonomia para operadoras evitando tendinite e dores nas mÃ£os"
    ],
    "commonErrors": [
      "â�Œ Deixar os dedos entre os Ã­mÃ£s de neodÃ­mio durante o fechamento do bastidor, causando beliscÃµes fortes.",
      "â�Œ Aproximar cartÃµes de crÃ©dito, relÃ³gios mecÃ¢nicos ou pendrives dos Ã­mÃ£s de alta intensidade.",
      "â�Œ Puxar o tecido apÃ³s o fechamento magnÃ©tico, desfiando a trama."
    ],
    "troubleshootingTips": [
      "Se o tecido escorregar no bastidor magnÃ©tico em bordados pesados: Use entretela adesiva ou coloque uma tira de entretela rasga-fÃ¡cil dobrada nas bordas para aumentar a fricÃ§Ã£o.",
      "Se o bastidor estiver difÃ­cil de soltar na bancada: Deslize o aro superior lateralmente em vez de puxar para cima reto."
    ],
    "recommendedSettings": {
      "density": "N/A",
      "needleType": "Adequada ao tecido",
      "stabilizer": "Entretela Rasga-FÃ¡cil ou HidrossolÃºvel",
      "speedPPM": "Velocidade mÃ¡xima suportada pela mÃ¡quina"
    },
    "dicaArtrelados": "Os bastidores magnÃ©ticos sÃ£o a salvaÃ§Ã£o para bordar toalhas de veludo e camisas de linho! Eles nunca deixam aquele 'aro brilhante' de tecido esmagado que o bastidor tradicional com parafuso costuma deixar!",
    "voceSabia": "Os Ã­mÃ£s de neodÃ­mio utilizados em bastidores magnÃ©ticos profissionais sÃ£o compostos por uma liga de neodÃ­mio, ferro e boro (NdFeB), sendo os Ã­mÃ£s permanentes mais potentes jÃ¡ criados pela ciÃªncia moderna!",
    "practicalExercise": "Experimente colocar uma toalha de banho bem grossa em um bastidor magnÃ©tico e outra no bastidor comum de parafuso. Compare a rapidez do encaixe e veja como no magnÃ©tico a toalha nÃ£o fica deformada nem mastigada!",
    "quickSummary": "Sistema de bastidores com Ã­mÃ£s de alta potÃªncia que prendem o tecido instantaneamente sem parafusos e sem marcar a peÃ§a.",
    "relatedTerms": [
      "Aro do Bastidor / Anel Interno e Externo",
      "Clipe de Bastidor e Travas de RetenÃ§Ã£o de Tecido",
      "OperaÃ§Ã£o da MÃ¡quina",
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
    "term": "DivisÃ£o de Ponto Longo e Ponto Dividido AutomÃ¡tico (Auto-Split Long Stitches)",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "Substantivo feminino composto.",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "origin": "Da evoluÃ§Ã£o dos processadores de matrizes nos softwares de digitalizaÃ§Ã£o para respeitar o limite mecÃ¢nico de amplitude da lanÃ§adeira e da agulha.",
    "summary": "Recurso que divide automaticamente pontos cheios excessivamente largos em mÃºltiplos pontos menores para evitar fios soltos que enroscam e quebram.",
    "definition": "A DivisÃ£o de Ponto Longo (Auto-Split Satin / Split Stitch Function) Ã© o algoritmo presente nos softwares de digitalizaÃ§Ã£o de bordado que fraciona automaticamente pontos cheios (Satin) cuja largura ultrapasse o limite de seguranÃ§a estrutural (geralmente entre 7.0 mm e 9.0 mm). O software insere uma ou mais penetraÃ§Ãµes intermediÃ¡rias de agulha com padrÃ£o alternado, impedindo que o fio fique frouxo, sem sustentaÃ§Ã£o ou vulnerÃ¡vel a desfiamentos durante o uso e a lavagem da peÃ§a.",
    "technicalDetails": "Permite configurar o comprimento mÃ¡ximo de ponto (ex: limite de 7.5 mm) e o padrÃ£o de intercalaÃ§Ã£o dos furos intermediÃ¡rios (estilo randomizado para acabamento invisÃ­vel ou estilo texturizado para efeitos decorativos).",
    "beginnerExplanation": "A mÃ¡quina de bordar nÃ£o pode dar um ponto comprido demais de um lado atÃ© o outro (como um ponto de mais de 1 centÃ­metro), porque o fio fica solto e frouxo, podendo enroscar no dedo da pessoa ou rasgar na mÃ¡quina de lavar. Essa funÃ§Ã£o divide esse ponto grandÃ£o em pontinhos menores firmes e seguros sem estragar o visual do bordado.",
    "howItWorks": [
      "1. O programador cria uma letra grande ou figura em ponto cheio que possui larguras variando entre 4 mm e 12 mm.",
      "2. No menu de propriedades do ponto cheio, ativa a opÃ§Ã£o 'DivisÃ£o AutomÃ¡tica / Auto-Split'.",
      "3. Define o comprimento mÃ¡ximo permitido (ex: 7.0 mm).",
      "4. Nos trechos estreitos, a mÃ¡quina borda ponto cheio liso tradicional.",
      "5. Nos trechos que ultrapassam 7 mm, o software insere penetraÃ§Ãµes intermediÃ¡rias imperceptÃ­veis.",
      "6. A matriz borda macia, resistente e com acabamento plano e durÃ¡vel."
    ],
    "applications": [
      "Letras grandes em brasÃµes, jaquetas universitÃ¡rias e toalhas de banho",
      "Figuras com folhas largas, asas de pÃ¡ssaros e pÃ©talas volumosas",
      "Uniformes esportivos submetidos a atrito constante e lavagens pesadas",
      "PrevenÃ§Ã£o de paradas na mÃ¡quina por limite mÃ¡ximo de deslocamento de quadro"
    ],
    "commonErrors": [
      "â�Œ Deixar pontos cheios com mais de 10 mm sem divisÃ£o automÃ¡tica, resultando em laÃ§os frouxos que se soltam na primeira lavagem do cliente.",
      "â�Œ Alinhar todas as divisÃµes na mesma linha reta, criando uma 'risca' feia no meio da letra em vez de uma divisÃ£o suave intercalada."
    ],
    "troubleshootingTips": [
      "Se o cliente reclamou que o fio da letra grande estÃ¡ repuxando ou solto: Abra a matriz no software, ative 'Auto-Split' com limite de 7.0 mm e marque a opÃ§Ã£o 'DivisÃ£o AleatÃ³ria / Random Split'.",
      "Se a mÃ¡quina acusar erro de 'Salto Excedido / Max Stitch Length': Aplique a divisÃ£o de pontos longos para que nenhum ponto ultrapasse 9.0 mm."
    ],
    "recommendedSettings": {
      "density": "0.40 mm com divisÃ£o ativa acima de 7.0 mm",
      "needleType": "75/11 ou 90/14 Ponta Bola",
      "stabilizer": "Entretela Rasga-FÃ¡cil 80g",
      "speedPPM": "750 a 850 PPM"
    },
    "dicaArtrelados": "Sempre ative a 'DivisÃ£o AutomÃ¡tica de Ponto' com valor mÃ¡ximo de 7.0 mm em letras grandes! Use a opÃ§Ã£o de divisÃ£o com textura sutil ou aleatÃ³ria. O bordado fica luxuoso, resistente a puxÃµes e parece um trabalho de alta-costura!",
    "voceSabia": "A maioria das mÃ¡quinas de bordar domÃ©sticas possui um limite mecÃ¢nico rÃ­gido de seguranÃ§a de 12.7 mm de salto; se a matriz tiver um ponto maior que isso, a mÃ¡quina trava ou converte o ponto em um corte forÃ§ado com salto!",
    "practicalExercise": "No seu software, desenhe uma barra retangular de ponto cheio com 15 mm de largura sem divisÃ£o e outra com 'Auto-Split' ativado em 7 mm. Observe no simulador 3D como a segunda fica perfeitamente assentada e firme!",
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
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos densidade, fraÃ§Ã£o e gradiente.",
    "origin": "Do latim densitas (espessura, compressÃ£o) e do latim gradiens (que caminha por degraus).",
    "category": "ProgramaÃ§Ã£o de Matrizes (Softwares)",
    "summary": "TÃ©cnica de variaÃ§Ã£o progressiva do espaÃ§amento entre pontos para criar degradÃªs suaves, sombreados realistas e transiÃ§Ãµes de cor perfeitas sem sobrecarregar o tecido.",
    "definition": "TÃ©cnica de variaÃ§Ã£o progressiva do espaÃ§amento entre pontos para criar degradÃªs suaves, sombreados realistas e transiÃ§Ãµes de cor perfeitas sem sobrecarregar o tecido.",
    "technicalDetails": "A densidade fracionada ou gradiente Ã© a tÃ©cnica de digitalizaÃ§Ã£o avanÃ§ada em que a distÃ¢ncia entre as linhas de penetraÃ§Ã£o de ponto varia de forma progressiva e contÃ­nua ao longo de um eixo geomÃ©trico (por exemplo, iniciando em 0,38 mm e espaÃ§ando gradativamente atÃ© 1,20 mm ou 2,00 mm). Baseia-se em curvas de distribuiÃ§Ã£o matemÃ¡tica aplicadas ao cÃ¡lculo das linhas de varredura. Ao sobrepor dois blocos de pontos com gradientes invertidos, os fios se intercalam opticamente, gerando a ilusÃ£o de uma terceira cor intermediÃ¡ria por sÃ­ntese aditiva visual sem criar rigidez no tecido.",
    "howItWorks": [
      "1. No software de matrizes, seleciona-se o objeto de preenchimento (tatami ou ponto cheio).",
      "2. Ativa-se a ferramenta de 'Gradiente de Densidade / Efeito Acordeom'.",
      "3. Define-se a densidade inicial (ex: 0,40 mm) e a densidade final (ex: 1,50 mm), bem como o sentido do gradiente.",
      "4. Cria-se uma segunda camada sobreposta com a cor secundÃ¡ria e o gradiente no sentido inverso.",
      "5. A mÃ¡quina borda primeiro a cor de base e depois a cor de sobreposiÃ§Ã£o, mesclando os fios perfeitamente."
    ],
    "beginnerExplanation": "Ã‰ o jeito de fazer 'degradÃª' no bordado, como o pÃ´r do sol ou o sombreado de uma pÃ©tala. Em vez de preencher tudo apertadinho, a mÃ¡quina vai deixando os pontinhos cada vez mais afastados, permitindo que outra cor de linha se misture por cima sem ficar um bloco duro de linha.",
    "applications": [
      "Bordados realistas de animais (pelagem com transiÃ§Ãµes suaves de cor).",
      "PÃ©talas de flores, folhagens botÃ¢nicas e efeitos de luz e sombra em rostos e paisagens.",
      "Logotipos corporativos modernos com degradÃª de marcas que antes eram impossÃ­veis de bordar com fidelidade."
    ],
    "characteristics": [
      "Reduz a contagem de pontos em atÃ© 40% em relaÃ§Ã£o a preenchimentos maciÃ§os convencionais.",
      "Elimina a rigidez (efeito 'placa de papelÃ£o') em desenhos grandes sombreados."
    ],
    "commonErrors": [
      "â�Œ Deixar as duas camadas com densidade padrÃ£o fechada (0,40 mm), gerando sobreposiÃ§Ã£o pesada que quebra agulha e empedra o tecido",
      "â�Œ EspaÃ§ar demais a densidade final (acima de 2,5 mm) em tecidos de malha, fazendo a cor de fundo do tecido vazar de forma descontrolada",
      "â�Œ Usar ponto de suporte (underlay) muito denso embaixo da Ã¡rea de degradÃª, que compete visualmente com a transiÃ§Ã£o de cores"
    ],
    "troubleshootingTips": [
      "Se a transiÃ§Ã£o de cor ficar marcada como uma linha reta: Aumente o intervalo de sobreposiÃ§Ã£o das duas camadas em pelo menos 3 mm no software.",
      "Se o degradÃª ficar ralo e sem cor: Diminua a densidade mÃ¡xima para 1,2 mm e utilize linha trilobal de alto brilho.",
      "Se a agulha quebrar na Ã¡rea de encontro das cores: Desative o underlay da segunda camada de gradiente."
    ],
    "dicaArtrelados": "Para fazer o degradÃª perfeito no estilo Artrelados, use underlay apenas na primeira cor de fundo. A segunda cor do gradiente deve entrar com 'Underlay Nenhum' e compensaÃ§Ã£o de encolhimento de 0,35 mm â€” o resultado fica leve, sedoso e com toque de veludo!",
    "voceSabia": "A tÃ©cnica de gradiente de densidade foi inspirada no pontilhismo da pintura impressionista francesa do sÃ©culo XIX (como nas obras de Georges Seurat), onde pequenos pontos de cores puras colocados lado a lado sÃ£o mesclados diretamente pelo olho humano!",
    "practicalExercise": "Crie no seu software um retÃ¢ngulo de 6x4 cm dividido em duas metades com gradiente invertido (uma azul abrindo para a direita e uma amarela abrindo para a esquerda). Borde sobre tricoline e veja como o centro forma um verde suave e natural.",
    "quickSummary": "VariaÃ§Ã£o progressiva do espaÃ§amento dos pontos para criar degradÃªs suaves, sombreados e transiÃ§Ãµes de cores realistas.",
    "recommendedSettings": {
      "speedPPM": "650 a 800 PPM",
      "needleType": "75/11 Ponta Bola",
      "stabilizer": "Entretela rasgÃ¡vel de boa sustentaÃ§Ã£o"
    },
    "relatedTerms": [
      "Densidade de Pontos",
      "Ponto Tatami (Fill Stitch)",
      "Curvatura e Ã‚ngulo de Ponto",
      "Ponto de Suporte (Underlay)",
      "Fio de PoliÃ©ster Trilobal"
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
      "ARTRELADOS. Guia de DegradÃª e Sombreado Realista no Bordado Computadorizado. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-075",
    "letter": "D"
  },
  {
    "id": "d-076",
    "term": "Dentes Impelidores Rebaixados (Drop Feed / Feed Dogs Inactive)",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada por substantivo masculino plural e adjetivo.",
    "origin": "Do latim dens (dente) e do latim impellere (empurrar para a frente).",
    "category": "Equipamentos & Hardware",
    "summary": "Mecanismo dentado sob a chapa que fica obrigatoriamente abaixado ou desativado no bordado computadorizado para que o bastidor seja guiado exclusivamente pelo pantÃ³grafo.",
    "definition": "Mecanismo dentado sob a chapa que fica obrigatoriamente abaixado ou desativado no bordado computadorizado para que o bastidor seja guiado exclusivamente pelo pantÃ³grafo.",
    "technicalDetails": "Os dentes impelidores (feed dogs) constituem o sistema de traÃ§Ã£o mecÃ¢nica dentada situado logo abaixo da chapa de agulha das mÃ¡quinas de costura convencionais. No bordado computadorizado, esse mecanismo deve permanecer permanentemente rebaixado (drop feed) ou fisicamente desconectado do eixo principal, garantindo que o transporte do tecido seja executado de forma 100% autÃ´noma e bidirecional pelos servomotores do pantÃ³grafo nos eixos cartesianos X e Y.",
    "howItWorks": [
      "1. Ao acoplar a unidade de bordado na mÃ¡quina hÃ­brida, a mÃ¡quina emite o aviso para rebaixar os dentes impelidores.",
      "2. O operador move a chave mecÃ¢nica 'Drop Feed' na parte traseira da mÃ¡quina para a posiÃ§Ã£o de dentes baixos.",
      "3. Os dentes descem cerca de 1,5 mm abaixo da superfÃ­cie da chapa de agulha.",
      "4. O bastidor fica livre para deslizar suavemente em qualquer Ã¢ngulo de 360 graus sob a aÃ§Ã£o do pantÃ³grafo."
    ],
    "beginnerExplanation": "SÃ£o aqueles 'dentinhos de serrote' que ficam embaixo da agulha na mÃ¡quina de costura comum para puxar o pano para frente. No bordado computadorizado, eles precisam ficar sempre abaixados e escondidos, porque Ã© o prÃ³prio bastidor da mÃ¡quina que vai movimentar o tecido para lÃ¡ e para cÃ¡ sozinho.",
    "applications": [
      "ConfiguraÃ§Ã£o obrigatÃ³ria em todas as mÃ¡quinas domÃ©sticas de costura e bordado antes de iniciar qualquer trabalho de bordado.",
      "PrevenÃ§Ã£o de danos e desfiamentos na parte inferior de tecidos finos e acetinados.",
      "Garantia de movimentaÃ§Ã£o suave e livre do bastidor em alta velocidade."
    ],
    "characteristics": [
      "Permanecem totalmente imÃ³veis e abaixo da linha da chapa durante todo o ciclo de bordado.",
      "Evitam resistÃªncia por atrito contra a entretela montada no bastidor."
    ],
    "commonErrors": [
      "â�Œ Esquecer os dentes levantados ao encaixar o mÃ³dulo de bordado, fazendo os dentes rasgarem a entretela por baixo e travando o bastidor",
      "â�Œ ForÃ§ar a alavanca de rebaixamento com a agulha abaixada ou com a mÃ¡quina em movimento",
      "â�Œ Acumular fiapos de linha e poeira entre as ranhuras dos dentes rebaixados, impedindo que eles desÃ§am atÃ© o final"
    ],
    "troubleshootingTips": [
      "Se o bastidor estiver travando ou dando trancos ao se mover: Verifique se os dentes impelidores estÃ£o totalmente rebaixados.",
      "Se a alavanca de drop feed nÃ£o descer: Gire o volante manualmente uma volta completa para liberar a engrenagem interna.",
      "Se a mÃ¡quina nÃ£o tiver alavanca de rebaixo: Encaixe a plaquinha plÃ¡stica de cobertura (tampa isoladora de dentes) que acompanha o kit da mÃ¡quina."
    ],
    "dicaArtrelados": "Ao fazer a limpeza semanal da sua mÃ¡quina, retire a chapa de agulha e passe o pincel entre as ranhuras dos dentes impelidores: o acÃºmulo de pÃ³ de entretela e Ã³leo velho pode travar o rebaixo e arranhar o fundo dos seus bastidores!",
    "voceSabia": "O sistema de dentes impelidores foi patenteado por Allen B. Wilson em 1850 (chamado de four-motion feed) e transformou a histÃ³ria da costura no mundo. PorÃ©m, para que o bordado computadorizado nascesse na dÃ©cada de 1970, foi necessÃ¡rio anular completamente essa invenÃ§Ã£o para dar lugar aos motores de passo X e Y!",
    "practicalExercise": "Localize a chave de dentes impelidores na sua mÃ¡quina. Mova para a esquerda e veja os dentinhos afundarem; depois passe o dedo suavemente sobre a chapa de agulha para sentir a superfÃ­cie totalmente plana e segura para o bastidor.",
    "quickSummary": "Mecanismo de dentes que fica abaixado no bordado para que o bastidor deslize livremente guiado pelos motores da mÃ¡quina.",
    "recommendedSettings": {
      "speedPPM": "NÃ£o se aplica (estado mecÃ¢nico)",
      "needleType": "NÃ£o se aplica",
      "stabilizer": "NÃ£o se aplica"
    },
    "relatedTerms": [
      "Chapa de Agulha",
      "PantÃ³grafo",
      "Bastidor",
      "Bastidoramento / Processo de Enquadramento no Bastidor",
      "BraÃ§o CilÃ­ndrico"
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
      "ARTRELADOS. Manual de OperaÃ§Ã£o e MecÃ¢nica BÃ¡sica para Bordadeiras. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-076",
    "letter": "D"
  },
  {
    "id": "d-077",
    "term": "DistorÃ§Ã£o de Push-Pull (Push and Pull Distortion)",
    "level": "AvanÃ§ado ðŸ”´",
    "grammarClass": "LocuÃ§Ã£o nominal de origem mista (substantivo portuguÃªs e termos tÃ©cnicos em inglÃªs).",
    "origin": "Dos verbos ingleses to push (empurrar) e to pull (puxar/tracionar) e do latim distortio (ato de deformar).",
    "category": "FÃ­sica & DinÃ¢mica do Bordado",
    "summary": "FenÃ´meno fÃ­sico em que os pontos encolhem o tecido no sentido da linha (Pull) e esticam o tecido no sentido do avanÃ§o da costura (Push), gerando vÃ£os e desalinhamentos.",
    "definition": "FenÃ´meno fÃ­sico em que os pontos encolhem o tecido no sentido da linha (Pull) e esticam o tecido no sentido do avanÃ§o da costura (Push), gerando vÃ£os e desalinhamentos.",
    "technicalDetails": "A distorÃ§Ã£o de push-pull Ã© a resposta mecÃ¢nica e viscoelÃ¡stica intrÃ­nseca de qualquer substrato tÃªxtil submetido Ã  penetraÃ§Ã£o e traÃ§Ã£o contÃ­nua de linhas de bordar. O efeito 'Pull' (encolhimento) ocorre ao longo do eixo das colunas de pontos, onde a tensÃ£o do fio puxa as bordas do tecido para dentro; simultaneamente, o efeito 'Push' (empurramento) ocorre na direÃ§Ã£o perpendicular (no sentido do avanÃ§o do bloco), onde a inserÃ§Ã£o fÃ­sica repetitiva dos fios empurra as fibras do tecido para fora, transformando cÃ­rculos perfeitos em ovais e gerando frestas entre o preenchimento e o contorno externo.",
    "howItWorks": [
      "1. A mÃ¡quina costura uma sequÃªncia de pontos de preenchimento na horizontal.",
      "2. Cada laÃ§ada traciona o tecido nas pontas esquerda e direita, fazendo a forma encolher no sentido horizontal (Pull).",
      "3. Ao mesmo tempo, o volume dos milhares de fios entrando lado a lado empurra o tecido para cima e para baixo (Push).",
      "4. Ao chegar a hora do contorno final, se a matriz nÃ£o tiver compensaÃ§Ã£o programada, o contorno nÃ£o se encaixa nas laterais (deixando frestas brancas) e invade o tecido nas pontas superior e inferior."
    ],
    "beginnerExplanation": "Ã‰ o que faz um cÃ­rculo perfeito virar um ovo ou o contorno preto ficar fora do lugar (com aquele espacinho em branco feio entre o desenho e a linha de contorno). A linha quando aperta puxa o tecido para dentro de um lado e empurra para fora do outro.",
    "applications": [
      "ProgramaÃ§Ã£o de matrizes profissionais de alta precisÃ£o para roupas esportivas, malhas e tecidos elÃ¡sticos.",
      "Ajuste de logotipos geomÃ©tricos complexos com contornos finos de 1 mm colados em letras e escudos.",
      "Controle dimensional de bordados tÃ©cnicos com tolerÃ¢ncia milimÃ©trica em uniformes industriais."
    ],
    "characteristics": [
      "Acontece em 100% dos bordados computadorizados do mundo em maior ou menor grau.",
      "Pode ser completamente neutralizado com matriz bem programada e entretela correta."
    ],
    "commonErrors": [
      "â�Œ Culpar a mÃ¡quina ou a agulha pelo contorno fora do lugar, quando na verdade o erro Ã© a falta de compensaÃ§Ã£o de push-pull na matriz",
      "â�Œ Tentar corrigir o push-pull esticando o tecido com forÃ§a excessiva no bastidor, o que deforma o tecido ainda mais",
      "â�Œ Digitalizar cÃ­rculos e quadrados com linhas geomÃ©tricas puras sem sobreposiÃ§Ã£o de encaixe nas bordas"
    ],
    "troubleshootingTips": [
      "Se houver fresta vazia entre o preenchimento e o contorno lateral: Aumente a compensaÃ§Ã£o de encolhimento (Pull Compensation) para 0,45 mm no software.",
      "Se o contorno superior/inferior estiver invadindo a Ã¡rea de fora: Recue o limite do preenchimento em 0,2 mm na direÃ§Ã£o do avanÃ§o dos pontos.",
      "Se o bordado estiver deformando em malha piquet: Utilize entretela recortÃ¡vel resinada de 80g e adicione ponto de suporte em tatami leve cruzado."
    ],
    "dicaArtrelados": "Lembre-se da Regra Mestra Artrelados: 'No sentido em que a agulha vai e volta (linha), o bordado encolhe. No sentido em que o bordado caminha para a frente, o bordado empurra'. Programe sempre a compensaÃ§Ã£o a favor da linha e seu contorno vai cravar com precisÃ£o cirÃºrgica!",
    "voceSabia": "Em tecidos extremamente elÃ¡sticos como lycra ou suplex de academia, o efeito de encolhimento (pull) pode fazer um desenho de 10 cm encolher atÃ© 4 mm inteiros se nÃ£o houver entretela recortÃ¡vel e compensaÃ§Ã£o de matriz!",
    "practicalExercise": "Crie um quadrado de 4x4 cm preenchido com tatami horizontal e coloque um contorno de ponto cheio exatamente em cima das bordas sem compensaÃ§Ã£o. Borde em um retalho de malha e veja com os prÃ³prios olhos as frestas laterais criadas pelo efeito push-pull.",
    "quickSummary": "Comportamento fÃ­sico em que a linha encolhe o tecido de um lado e o empurra do outro, exigindo compensaÃ§Ã£o milimÃ©trica na matriz.",
    "recommendedSettings": {
      "speedPPM": "700 a 850 PPM",
      "needleType": "75/11 Ponta Bola em malhas",
      "stabilizer": "Entretela recortÃ¡vel 80g em tecidos elÃ¡sticos"
    },
    "relatedTerms": [
      "CompensaÃ§Ã£o de Encolhimento",
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
      "ARTRELADOS. A FÃ­sica do Bordado: Dominando o Efeito Push-Pull e Encaixes Perfeitos. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-077",
    "letter": "D"
  },
  {
    "id": "d-078",
    "term": "DST (Data Stitch Tajima / Formato Universal de Matriz)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "grammarClass": "Sigla substantivada masculina.",
    "origin": "AcrÃ´nimo industrial japonÃªs para Data Stitch Tajima, criado na dÃ©cada de 1980 pela corporaÃ§Ã£o japonesa Tajima Industries Ltd.",
    "category": "Formatos & Arquivos de Bordado",
    "summary": "O formato de arquivo de bordado mais universal do mundo, compatÃ­vel com quase todas as marcas de mÃ¡quinas industriais e domÃ©sticas existentes.",
    "definition": "O formato de arquivo de bordado mais universal do mundo, compatÃ­vel com quase todas as marcas de mÃ¡quinas industriais e domÃ©sticas existentes.",
    "technicalDetails": "O arquivo DST Ã© um formato binÃ¡rio de baixo nÃ­vel (stitch-based / formato de mÃ¡quina puro) que armazena exclusivamente instruÃ§Ãµes sequenciais de coordenadas de deslocamento cartesiano relativo (delta X e delta Y), comandos de salto (jump), instruÃ§Ãµes de parada (stop) e comandos de corte de linha (trim). Por ser um formato puramente mecÃ¢nico, o DST nÃ£o embute em seu cabeÃ§alho a tabela de cores RGB dos fios, cabendo ao operador atribuir as cores das linhas diretamente no painel da mÃ¡quina. Utiliza codificaÃ§Ã£o ternÃ¡ria compactada de 3 bytes por coordenada com cabeÃ§alho ASCII de 512 bytes.",
    "howItWorks": [
      "1. O programador finaliza a matriz no software e exporta o arquivo no formato .DST.",
      "2. O arquivo Ã© transferido para o pen drive e espetado na mÃ¡quina de bordar.",
      "3. O processador da mÃ¡quina lÃª os comandos binÃ¡rios de X e Y, movendo os servomotores passo a passo.",
      "4. Quando o arquivo encontra um comando 'Stop', a mÃ¡quina para e solicita a prÃ³xima cor (que o operador define no painel ou nas agulhas)."
    ],
    "beginnerExplanation": "Ã‰ o tipo de arquivo de bordado mais famoso do mundo. Ã‰ como se fosse o 'PDF' ou 'MP3' do bordado: quase qualquer mÃ¡quina de qualquer marca (Tajima, Barudan, Brother, Janome, Happy, Ricoma) consegue ler e bordar um arquivo .DST sem reclamar!",
    "applications": [
      "PadrÃ£o universal para envio de matrizes para clientes que possuem marcas variadas de mÃ¡quinas de bordar.",
      "Formato nativo de produÃ§Ã£o em mÃ¡quinas industriais multicabeÃ§as de grande escala.",
      "Backup de emergÃªncia de arquivos de bordado para leitura garantida em qualquer equipamento."
    ],
    "characteristics": [
      "Compatibilidade universal com 99,9% das mÃ¡quinas computadorizadas do mercado.",
      "Arquivo leve (poucos kilobytes) e imune a erros de incompatibilidade de versÃ£o de software."
    ],
    "commonErrors": [
      "â�Œ Abrir um arquivo DST na mÃ¡quina e achar que a matriz estÃ¡ estragada porque as cores aparecem trocadas na tela (o formato DST nÃ£o grava as cores originais, apenas o aviso de troca de linha)",
      "â�Œ Tentar redimensionar um arquivo DST em mais de 10% no painel da mÃ¡quina sem recalcular a densidade de pontos no software",
      "â�Œ Salvar por cima do arquivo vetorial original (.EMB ou .JAN) apenas em DST, perdendo a capacidade de editar os objetos vetoriais com facilidade no futuro"
    ],
    "troubleshootingTips": [
      "Se as cores na tela da mÃ¡quina ficarem estranhas: Defina a ordem de cores manualmente no painel da mÃ¡quina consultando a ficha tÃ©cnica (PDF de produÃ§Ã£o) da matriz.",
      "Se a mÃ¡quina nÃ£o reconhecer o pen drive com DST: Certifique-se de que o pen drive estÃ¡ formatado em FAT32 e que o nome do arquivo tem menos de 8 caracteres sem acentos.",
      "Se vocÃª precisa alterar o tamanho da matriz: Redimensione sempre no software a partir do arquivo original de criaÃ§Ã£o (.EMB, .PES, etc.) antes de exportar o novo DST."
    ],
    "dicaArtrelados": "Ao enviar matrizes para clientes ou alunas, envie sempre a duplinha de ouro Artrelados: o arquivo .DST (para rodar em qualquer mÃ¡quina) acompanhado da Ficha TÃ©cnica em PDF colorida com a lista exata da ordem das cores de linha!",
    "voceSabia": "O formato DST foi criado originalmente para ser lido atravÃ©s de fitas de papel perfuradas (paper tape punchers) que eram inseridas nas primeiras mÃ¡quinas de bordar computadorizadas nos anos 1980, antes da existÃªncia dos disquetes e pen drives!",
    "practicalExercise": "Exporte uma matriz simples do seu software em .DST e em .PES. Abra os dois arquivos em um visualizador e compare: observe como o DST abre com cores aleatÃ³rias padrÃ£o, mas tem exatamente a mesma perfeiÃ§Ã£o e contagem de pontos do arquivo nativo.",
    "quickSummary": "Formato de arquivo universal para bordado industrial e domÃ©stico, compatÃ­vel com quase todas as mÃ¡quinas do mercado.",
    "recommendedSettings": {
      "speedPPM": "Suporta qualquer velocidade da mÃ¡quina",
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
      "ARTRELADOS. Guia Definitivo de Formatos e ExtensÃµes de Arquivos de Bordado. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-078",
    "letter": "D"
  },
  {
    "id": "d-079",
    "term": "Desbobinador / Suporte de Cone de Linha (Thread Stand / Spool Pin)",
    "level": "Fundamental ðŸŸ¢",
    "grammarClass": "LocuÃ§Ã£o nominal formada pelos substantivos desbobinador, suporte, cone e linha.",
    "origin": "Do portuguÃªs desbobinar (tirar da bobina/carretel) e do latim supportare (sustentar).",
    "category": "Equipamentos & Hardware",
    "summary": "Haste vertical com guia de fio suspensa que permite ao cone grande de linha desenrolar suavemente para cima, eliminando trancos e quebras de linha.",
    "definition": "Haste vertical com guia de fio suspensa que permite ao cone grande de linha desenrolar suavemente para cima, eliminando trancos e quebras de linha.",
    "technicalDetails": "O desbobinador ou suporte externo de cones (thread stand) Ã© um dispositivo mecÃ¢nico vertical dotado de base com lastro pesado e haste telescÃ³pica de metal culminando em um olhal guia-fio suspenso a pelo menos 25 cm a 35 cm acima do topo do carretel. Sua funÃ§Ã£o tÃ©cnica primÃ¡ria Ã© permitir o desbobinamento axial superior (desenrolamento pelo topo sem rotaÃ§Ã£o fÃ­sica do cone), neutralizando a inÃ©rcia do peso do cone de 4000 metros e entregando o filamento Ã  bateria de tensores da mÃ¡quina com tensÃ£o residual prÃ³xima de zero.",
    "howItWorks": [
      "1. O cone grande de linha de bordar (1000m ou 4000m) Ã© posicionado na base do suporte atrÃ¡s ou ao lado da mÃ¡quina.",
      "2. A ponta da linha sobe em linha reta e passa de cima para baixo pelo olhal da haste suspensa do desbobinador.",
      "3. A linha desce suavemente e entra no trajeto normal de passagem de linha da mÃ¡quina de bordar.",
      "4. Quando a mÃ¡quina borda a 800 PPM, a linha se desprende do cone em cÃ­rculos perfeitos no ar, sem puxar o carretel e sem dar trancos."
    ],
    "beginnerExplanation": "Ã‰ aquela torre ou suporte alto de metal que fica do lado da mÃ¡quina para segurar os cones grandes de linha. Ele serve para fazer a linha sair por cima do cone bem levinha e solta, sem enroscar no pÃ© do carretel e sem ficar quebrando a linha toda hora.",
    "applications": [
      "Uso indispensÃ¡vel de cones industriais econÃ´micos de 4000 metros em mÃ¡quinas domÃ©sticas de bordar.",
      "AlimentaÃ§Ã£o estÃ¡vel de linhas especiais e delicadas como fios metÃ¡licos (ouro/prata) e fios de poliÃ©ster trilobal.",
      "Suporte mÃºltiplo de cones para organizaÃ§Ã£o de sequÃªncias de cores em produÃ§Ã£o contÃ­nua."
    ],
    "characteristics": [
      "Base estÃ¡vel com peso para nÃ£o tombar com a vibraÃ§Ã£o da mÃ¡quina.",
      "Haste alta ajustÃ¡vel que garante Ã¢ngulo perfeito de saÃ­da da linha."
    ],
    "commonErrors": [
      "â�Œ Colocar um cone grande de 4000m deitado no pino horizontal da mÃ¡quina domÃ©stica, fazendo o carretel travar e arrebentar a linha instantaneamente",
      "â�Œ Deixar a haste do suporte muito baixa, fazendo a linha raspar na borda plÃ¡stica do cone e desfiar o fio",
      "â�Œ Passar a linha com o suporte muito longe da mÃ¡quina, criando curvatura excessiva e atrito desnecessÃ¡rio"
    ],
    "troubleshootingTips": [
      "Se a linha estiver arrebentando a cada 50 pontos com cone grande: Instale um suporte de cone vertical e erga a haste no ponto mais alto possÃ­vel.",
      "Se a linha metÃ¡lica estiver enrolando em espiral e dando nÃ³s: Coloque uma redinha elÃ¡stica de proteÃ§Ã£o (thread net) envolvendo o cone no desbobinador.",
      "Se o cone estiver vibrando e danÃ§ando na base: Coloque um feltro circular ou base de borracha sob o cone de linha."
    ],
    "dicaArtrelados": "Se vocÃª usa cones grandes de 4000m na sua mÃ¡quina domÃ©stica, o suporte de cone externo de metal Ã© o melhor investimento do seu ateliÃª! Mantenha a haste sempre bem esticada para o alto â€” isso reduz em 90% as quebras de linha e economiza muito dinheiro comprando cones grandes em vez de tubinhos pequenos!",
    "voceSabia": "Cones industriais possuem aquele formato cÃ´nico afunilado para cima justamente para permitir que a linha voe livremente para o ar a velocidades de atÃ© 1500 pontos por minuto sem que o carretel precise se mover nem 1 milÃ­metro!",
    "practicalExercise": "Monte um cone de 4000 metros no suporte vertical e puxe 2 metros de linha com a mÃ£o rapidamente para o alto: repare como a linha desenrola suavemente em espirais fluidas no ar sem nenhum esforÃ§o ou tranco.",
    "quickSummary": "Suporte vertical com guia alta que permite usar cones grandes de linha com desenrolamento suave e sem quebras.",
    "recommendedSettings": {
      "speedPPM": "Suporta qualquer velocidade",
      "needleType": "NÃ£o se aplica",
      "stabilizer": "NÃ£o se aplica"
    },
    "relatedTerms": [
      "Fio de PoliÃ©ster Trilobal",
      "Fio MetÃ¡lico",
      "TensÃ£o da Linha",
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
      "ARTRELADOS. AcessÃ³rios Essenciais e Estrutura de AteliÃª de Bordados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28",
    "code": "D-079",
    "letter": "D"
  },
  {
    "id": "d-080-digitalizacao-manual-nos-vetoriais-bezier",
    "code": "D-080",
    "letter": "D",
    "term": "DigitalizaÃ§Ã£o Manual com NÃ³s Vetoriais BÃ©zier (Manual Vector BÃ©zier Digitizing)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "grammarClass": "Substantivo feminino composto por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do latim digitalis (feito com os dedos/discreto numÃ©rico), do francÃªs manuel e em homenagem ao engenheiro e matemÃ¡tico francÃªs Pierre BÃ©zier (1910â€“1999), pioneiro das curvas paramÃ©tricas vetoriais nos anos 1960.",
    "summary": "TÃ©cnica artesanal de programaÃ§Ã£o de matrizes onde o digitalizador desenha contornos e colunas nÃ³ por nÃ³, controlando as alÃ§as de curvatura para obter trajetÃ³rias perfeitas.",
    "definition": "A digitalizaÃ§Ã£o manual com nÃ³s vetoriais BÃ©zier (manual vector BÃ©zier digitizing, node-by-node stitch path construction, precision parametric curve drafting) Ã© o padrÃ£o ouro na criaÃ§Ã£o profissional de matrizes de bordado computadorizado. Em contraposiÃ§Ã£o Ã  conversÃ£o vetorial automÃ¡tica (auto-digitizing), o digitalizador insere manualmente nÃ³s de ancoragem (pontos de controle) ao longo do contorno da ilustraÃ§Ã£o e manipula alÃ§as tangenciais de curvatura para gerar curvas suaves, transiÃ§Ãµes anatÃ´micas de ponto cheio e preenchimentos tatami com controle milimÃ©trico de Ã¢ngulos, densidade, underlays e compensaÃ§Ã£o de repuxo.",
    "technicalDetails": "Os softwares profissionais (Wilcom, Pulse, Embrilliance, Bernina) utilizam curvas de BÃ©zier cÃºbicas definidas por quatro pontos de controle paramÃ©trico. NÃ³s de canto (Corner Nodes) criam vÃ©rtices vivos de 90Â° ou agudos; nÃ³s suaves (Smooth Nodes) mantÃªm as tangentes colineares para arcos circulares contÃ­nuos. A manipulaÃ§Ã£o adequada reduz a quantidade de nÃ³s desnecessÃ¡rios, gerando arquivos de bordado mais limpos, leves e com menor propensÃ£o a nÃ³s cegos na mÃ¡quina.",
    "howItWorks": [
      "1. A imagem ou vetor de referÃªncia Ã© importado para a Ã¡rea de trabalho do software de bordado.",
      "2. O digitalizador seleciona a ferramenta de Coluna de Ponto Cheio ou Preenchimento Complexo.",
      "3. Clica nos pontos estratÃ©gicos do desenho: botÃ£o esquerdo para nÃ³s retos/cantos e botÃ£o direito para nÃ³s curvos com alÃ§as BÃ©zier.",
      "4. Ajusta a orientaÃ§Ã£o das linhas de Ã¢ngulo de ponto ao longo do fluxo visual do objeto.",
      "5. Configura as propriedades tÃ©cnicas de underlay, densidade e compensaÃ§Ã£o de repuxo antes de gerar os pontos finais."
    ],
    "beginnerExplanation": "Ã‰ como 'desenhar a matriz ponto por ponto com a mÃ£o bem firme'! Em vez de apertar um botÃ£o mÃ¡gico e deixar o computador inventar os pontos sozinho (o que quase sempre dÃ¡ errado), vocÃª clica no contorno do desenho criando pontinhos azuis que vocÃª pode puxar e curvar com o mouse. O bordado fica lisinho, perfeito e nÃ£o quebra a linha na mÃ¡quina!",
    "applications": [
      "DigitalizaÃ§Ã£o profissional de logotipos corporativos com letras pequenas de alta nitidez.",
      "CriaÃ§Ã£o de matrizes florais, brasÃµes herÃ¡ldicos e desenhos anatÃ´micos complexos.",
      "OtimizaÃ§Ã£o de arquivos industriais para reduzir o nÃºmero de pontos e o tempo de mÃ¡quina.",
      "CorreÃ§Ã£o e reconstruÃ§Ã£o de matrizes antigas danificadas ou convertidas automaticamente."
    ],
    "characteristics": [
      "Controle absoluto sobre a densidade, Ã¢ngulo de inclinaÃ§Ã£o e tipo de ponto em cada milÃ­metro.",
      "Curvas perfeitamente orgÃ¢nicas sem a formaÃ§Ã£o de 'dentes de serra' ou arestas quebradas.",
      "ReduÃ§Ã£o expressiva do nÃºmero total de pontos em comparaÃ§Ã£o Ã  digitalizaÃ§Ã£o automÃ¡tica."
    ],
    "commonErrors": [
      "â�Œ Criar centenas de nÃ³s em uma Ãºnica curva pequena, gerando um contorno pesado e ondulado",
      "â�Œ Deixar nÃ³s curvos muito prÃ³ximos aos cantos vivos, arredondando vÃ©rtices que deveriam ser retos e pontiagudos",
      "â�Œ Esquecer de alinhar as linhas de Ã¢ngulo de ponto perpendicularmente ao fluxo da coluna"
    ],
    "troubleshootingTips": [
      "Se a curva parecer cheia de ondulaÃ§Ãµes: Delete metade dos nÃ³s intermediÃ¡rios e ajuste a curvatura puxando apenas as alÃ§as tangenciais dos dois nÃ³s das pontas.",
      "Se o canto ficar redondo: Converta o nÃ³ curvo em 'NÃ³ de Canto' pressionando a tecla de atalho de vÃ©rtice reto no seu software.",
      "Se a mÃ¡quina bater duro na curva: Verifique se nÃ£o hÃ¡ dois nÃ³s sobrepostos na mesma coordenada exata e elimine o ponto duplicado."
    ],
    "dicaArtrelados": "Na digitalizaÃ§Ã£o vetorial, a regra de ouro Ã©: 'Menos Ã© Mais'! Uma curva perfeita precisa de apenas dois nÃ³s nas pontas e alÃ§as de BÃ©zier bem esticadas: quanto menos nÃ³s vocÃª colocar, mais rÃ¡pida, limpa e brilhante a mÃ¡quina vai bordar!",
    "voceSabia": "Pierre BÃ©zier era engenheiro mecÃ¢nico da montadora de automÃ³veis Renault e inventou essas curvas matemÃ¡ticas para conseguir projetar a carroceria aerodinÃ¢mica de carros no computador com extrema elegÃ¢ncia!",
    "practicalExercise": "No seu programa de bordado, importe a imagem de uma letra 'S'. Tente desenhÃ¡-la usando apenas 6 nÃ³s de controle BÃ©zier com alÃ§as suaves. Gere os pontos cheios e admire a suavidade do brilho da curva!",
    "quickSummary": "TÃ©cnica de programaÃ§Ã£o manual que constrÃ³i matrizes perfeitas ajustando nÃ³s e curvas paramÃ©tricas com precisÃ£o milimÃ©trica.",
    "recommendedSettings": {
      "speedPPM": "N/A (TÃ©cnica de digitalizaÃ§Ã£o em software)",
      "needleType": "Adequada a qualquer agulha conforme o tecido final",
      "stabilizer": "ParametrizaÃ§Ã£o direta nos atributos do objeto vetorial"
    },
    "relatedTerms": [
      "Curva BÃ©zier na DigitalizaÃ§Ã£o",
      "Ã‚ngulo de Ponto (Stitch Angle)",
      "CompensaÃ§Ã£o de Repuxo (Pull Compensation)",
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
      "WILCOM INTERNATIONAL. Vector Object Construction & BÃ©zier Curve Mastery. Sydney, 2023.",
      "PULSE MICROSYS. Precision Node Editing & Stitch Flow Dynamics. Toronto, 2022.",
      "ARTRELADOS. Guia Definitivo de ProgramaÃ§Ã£o de Matrizes no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-081-dureza-shore-espumas-3d-alto-relevo",
    "code": "D-081",
    "letter": "D",
    "term": "Dureza Shore de Espumas 3D para Bordado em Alto Relevo (EVA Shore Durometer & Density Rating)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "Insumos & Qualidade",
    "grammarClass": "LocuÃ§Ã£o substantiva feminina composta por substantivos e termos tÃ©cnicos de metrologia.",
    "origin": "Do inglÃªs durometer e em homenagem a Albert Ferdinand Shore (1876â€“1936), que inventou a escala de mediÃ§Ã£o de dureza de elastÃ´meros nos Estados Unidos nos anos 1920.",
    "summary": "ClassificaÃ§Ã£o metrolÃ³gica da densidade e resistÃªncia mecÃ¢nica da placa de EVA utilizada no bordado 3D para garantir que a espuma corte perfeitamente sem esfarelar.",
    "definition": "A dureza Shore de espumas 3D para bordado (EVA foam Shore hardness rating, 3D puff embroidery durometer scale, closed-cell EVA density standard) Ã© o Ã­ndice fÃ­sico-quÃ­mico que quantifica a resistÃªncia de uma lÃ¢mina de etileno-vinil-acetato (EVA) Ã  penetraÃ§Ã£o e ao cisalhamento mecÃ¢nico da agulha de bordar. No bordado tridimensional de bonÃ©s e jaquetas, a escolha da dureza correta na escala Shore A ou Shore 00 Ã© crÃ­tica: espumas com dureza inadequada (muito macias, abaixo de 30 Shore A) sÃ£o esmagadas pelos pontos e perdem o relevo; espumas excessivamente duras (acima de 60 Shore A) quebram agulhas, partem a linha e nÃ£o sÃ£o cortadas com facilidade na perfuraÃ§Ã£o perifÃ©rica.",
    "technicalDetails": "O padrÃ£o internacional de excelÃªncia para bordado 3D (Puff Embroidery) situa-se na faixa de 40 a 50 Shore A com densidade de 100 a 150 kg/mÂ³ e estrutura de cÃ©lulas fechadas (microcelular). LÃ¢minas com espessura de 2 mm a 3 mm nessa especificaÃ§Ã£o proporcionam corte perimetral limpo (clean cut-off) pela aÃ§Ã£o combinada da alta densidade de ponto cheio (0,20 mm a 0,25 mm) e agulhas com ponta em formato de cunha ou ponta bola leve reforÃ§ada com titÃ¢nio (calibre 80/12 ou 90/14).",
    "howItWorks": [
      "1. A matriz Ã© programada com densidade dobrada, pontos de topo fechados e underlay de corte perifÃ©rico.",
      "2. A mÃ¡quina borda a costura de posicionamento e para para a colocaÃ§Ã£o da placa de EVA.",
      "3. O operador assenta a espuma EVA calibrada em 45 Shore A sobre a Ã¡rea a ser bordada.",
      "4. A mÃ¡quina costura os pontos cheios em alta densidade, e as perfuraÃ§Ãµes contÃ­nuas da agulha perfuram e 'decapam' o EVA nas bordas como uma matriz de corte.",
      "5. Ao tÃ©rmino, o operador puxa a placa de EVA e o excesso se solta facilmente sem deixar fiapos visÃ­veis."
    ],
    "beginnerExplanation": "Ã‰ a 'firmeza certa' do EVA para fazer bordado alto relevo em bonÃ©s! Se vocÃª usar um EVA mole demais, o bordado fica amassado e murcho. Se usar um EVA duro demais, a agulha quebra toda hora. O EVA com a dureza certa (nem mole, nem duro) corta sozinho nas beiradas com a agulha e deixa a letra fofinha, alta e perfeita!",
    "applications": [
      "Bordado 3D em bonÃ©s estruturados de aba curva e aba reta (estilo New Era).",
      "Monogramas e brasÃµes de alto relevo em jaquetas colegiais de sarja e couro.",
      "Letreiros volumosos em mochilas esportivas e coletes tÃ¡ticos.",
      "ProduÃ§Ã£o em escala industrial com descarte rÃ¡pido e limpo da sobra de espuma."
    ],
    "characteristics": [
      "Corte perimÃ©trico preciso que dispensa o uso de tesouras manuais para limpeza do relevo.",
      "MemÃ³ria elÃ¡stica que mantÃ©m o formato do relevo tridimensional mesmo apÃ³s lavagens.",
      "NÃ£o esfarela nem solta pÃ³ quÃ­mico no interior do mecanismo da lanÃ§adeira da mÃ¡quina."
    ],
    "commonErrors": [
      "â�Œ Usar EVA escolar comum de papelaria (muito mole e com cÃ©lulas abertas) que esfarela e deixa fiapos coloridos saindo por baixo dos pontos",
      "â�Œ Usar placas de borracha industrial superduras que entortam a barra de agulha e partem a linha a cada 10 pontos",
      "â�Œ Borda em velocidade mÃ¡xima de 1.000 PPM sobre EVA denso, aquecendo a agulha e derretendo o polÃ­mero na ponta"
    ],
    "troubleshootingTips": [
      "Se sobrarem pedacinhos de EVA aparecendo nas pontas das letras: Aproxime a ponta de um soprador tÃ©rmico ou pistola de ar quente por 2 segundos para encolher os resÃ­duos invisÃ­veis.",
      "Se a agulha quebrar ao entrar no EVA: Reduza a velocidade para 600 PPM e troque a agulha por uma 80/12 TitÃ¢nio.",
      "Se o relevo ficar achatado: Verifique se o EVA utilizado tem pelo menos 40 Shore A de dureza e aumente a densidade do ponto cheio no software."
    ],
    "dicaArtrelados": "Use sempre EVA especial para bordado com cor prÃ³xima Ã  linha que vocÃª vai bordar (EVA preto para linha preta, EVA branco para linha clara): isso garante que mesmo nos cantinhos mais difÃ­ceis o acabamento fique 100% invisÃ­vel e profissional!",
    "voceSabia": "As grandes marcas de bonÃ©s da liga de beisebol americana (MLB) possuem especificaÃ§Ãµes quÃ­micas prÃ³prias e exclusivas para a dureza do EVA de seus logotipos tridimensionais, guardadas a sete chaves desde 1994!",
    "practicalExercise": "Pegue um pedaÃ§o de EVA escolar comum e um pedaÃ§o de EVA tÃ©cnico para bordado 3D (45 Shore A). Dobre os dois com os dedos e sinta a diferenÃ§a de densidade. Borde a mesma letra 'A' sobre ambos e compare a limpeza do corte perimetral!",
    "quickSummary": "Medida da firmeza do EVA que determina o relevo perfeito e o corte limpo da espuma no bordado tridimensional 3D.",
    "recommendedSettings": {
      "speedPPM": "550 a 650 PPM",
      "needleType": "80/12 ou 90/14 TitÃ¢nio Ponta Aguda (SES/RG)",
      "stabilizer": "Entretela rasgÃ¡vel pesada de 80g a 100g para bonÃ©s"
    },
    "relatedTerms": [
      "Bordado 3D / Alto Relevo com Espuma",
      "Densidade de Ponto Cheio (Satin Density)",
      "Agulha TitÃ¢nio para Alta FricÃ§Ã£o",
      "BonÃ© Estruturado e Bastidor de BonÃ©",
      "Decapagem TÃ©rmica de ResÃ­duos PlÃ¡sticos"
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
    "term": "Desfiamento e Pesponto de Borda RÃºstica / Efeito Fringe (Fringe Stitch & Raw-Edge Thread Fraying)",
    "level": "Fundamental ðŸŸ¢",
    "category": "TÃ©cnicas Especiais & Estilos",
    "grammarClass": "Substantivo masculino composto por substantivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do latim defilare (separar os fios da trama tÃªxtil) e do inglÃªs fringe (franja ornamental decorativa derivada do francÃªs antigo frenge). TÃ©cnica de bordado tridimensional popularizada no artesanato criativo nos anos 2000.",
    "summary": "TÃ©cnica especial de bordado onde colunas longas de ponto cheio sÃ£o bordadas com tensÃ£o de bobina muito frouxa e posteriormente cortadas pelo avesso para criar franjas, tufos de pelos e pÃ©talas 3D.",
    "definition": "O desfiamento e pesponto de borda rÃºstica ou ponto de franja (fringe stitch, 3D thread tufting, raw-edge fraying embroidery) Ã© uma tÃ©cnica mista de programaÃ§Ã£o e acabamento mecÃ¢nico que transforma pontos cheios computadorizados em tufos de fios soltos de alto relevo tÃ¡til. Na digitalizaÃ§Ã£o, programa-se uma linha de fixaÃ§Ã£o travada em ponto de corrida de um lado e uma coluna larga de cetim com pontos longos (de 7 mm a 12 mm) sem amarraÃ§Ãµes na extremidade oposta. ApÃ³s o bordado na mÃ¡quina, o operador corta cuidadosamente as laÃ§adas do fio da bobina na parte de trÃ¡s da peÃ§a com um desmanchador de costura, puxando os fios superiores para a frente com um pente fino ou escovinha para erguer uma franja densa e macia.",
    "technicalDetails": "Para a execuÃ§Ã£o do ponto fringe, a tensÃ£o da linha da bobina pode ser reduzida em atÃ© 40% para criar laÃ§os generosos e fÃ¡ceis de cortar no avesso sem danificar o tecido de suporte. A extremidade de ancoragem deve conter obrigatoriamente 5 a 8 micropontos de travamento (Lock Stitches) sobrepostos com espaÃ§amento de 0,3 mm, garantindo que os fios superiores da franja nunca se soltem durante lavagens ou uso diÃ¡rio.",
    "howItWorks": [
      "1. A matriz Ã© programada com a tÃ©cnica de ponto fringe: uma borda travada e pontos cheios longos abertos na outra ponta.",
      "2. A mÃ¡quina borda o objeto sobre tecido firme com entretela de recorte.",
      "3. A peÃ§a Ã© retirada do bastidor e virada com o avesso para cima sobre uma mesa iluminada.",
      "4. Com a ponta de um desmanchador de costura afiado, o operador corta a linha branca da bobina no centro da coluna.",
      "5. Pela frente da peÃ§a, penteia-se suavemente os fios coloridos com uma escovinha de dentes macia: os fios se levantam instantaneamente formando uma franja fofa em 3D."
    ],
    "beginnerExplanation": "Ã‰ a tÃ©cnica mÃ¡gica para fazer 'cabelinho de boneca, pelo de bichinho ou miolo fofo de girassol' que fica soltinho para fora do tecido! A mÃ¡quina dÃ¡ pontinhos compridos bem bonitos. Depois vocÃª sÃ³ corta a linhazinha branca no avesso da roupa e passa uma escovinha na frente: os fios se soltam e viram uma franjinha fofinha e cheia de charme!",
    "applications": [
      "CriaÃ§Ã£o de crinas de cavalinhos, cabelos de bonecas e pelagem fofa de animais em bordados infantis.",
      "Miolo tridimensional de flores, girassÃ³is, margaridas e cactos em toalhas de mesa.",
      "Acabamento de bordas rÃºsticas e desfiadas em peÃ§as jeanswear e almofadas boho-chic.",
      "Efeitos de grama alta e folhagens realistas em paisagens bordadas de arte tÃªxtil."
    ],
    "characteristics": [
      "Textura tÃ¡til e visual volumoso que encanta clientes em peÃ§as infantis e decorativas.",
      "ExecuÃ§Ã£o rÃ¡pida na mÃ¡quina com transformaÃ§Ã£o instantÃ¢nea no processo de corte manual.",
      "Totalmente seguro contra desfiamento involuntÃ¡rio graÃ§as Ã  linha de ancoragem travada."
    ],
    "commonErrors": [
      "â�Œ Cortar o tecido por acidente com o desmanchador de costura ao cortar os fios da bobina no avesso",
      "â�Œ Esquecer de programar os nÃ³s de trava (Lock Stitches) na base, fazendo todos os fios da franja caÃ­rem ao serem puxados",
      "â�Œ Usar linha de algodÃ£o fraca que se rompe e esfarela ao ser escovada com o pente"
    ],
    "troubleshootingTips": [
      "Se os fios da franja nÃ£o quiserem sair para a frente: Passe a ponta de uma agulha de mÃ£o suavemente sob os laÃ§os da frente para levantÃ¡-los.",
      "Se o tecido foi levemente picado no avesso: Aplique uma gotinha de termolina leitosa ou selador de costura no avesso sobre a base de ancoragem.",
      "Se a franja ficar murcha: Passe um jato leve de vapor do ferro a 5 cm de distÃ¢ncia sem encostar no bordado para abrir os fios."
    ],
    "dicaArtrelados": "Para fazer miolo de girassol em 3D de tirar o fÃ´lego, use duas cores de linha (marrom escuro na base e amarelo ouro na ponta) no ponto fringe: quando vocÃª pentear a franjinha na frente, o efeito mesclado fica tÃ£o realista que parece uma flor de verdade!",
    "voceSabia": "A tÃ©cnica de fringe stitch computadorizado foi inspirada nas clÃ¡ssicas tapeÃ§arias turcas e persas do sÃ©culo XII, onde artesÃ£os cortavam manualmente os nÃ³s de lÃ£ para criar o veludo dos tapetes reais!",
    "practicalExercise": "Programe uma coluna de cetim de 10 mm de largura por 5 cm de comprimento com nÃ³s de trava apenas na borda esquerda. Borde em um retalho, vire do avesso, corte a linha da bobina com o desmanchador e escove a franja pela frente!",
    "quickSummary": "TÃ©cnica que cria franjas e pelos tridimensionais cortando a linha de bobina no avesso e soltando os fios superiores na frente.",
    "recommendedSettings": {
      "speedPPM": "650 a 750 PPM",
      "needleType": "75/11 Ponta Bola Leve (SES)",
      "stabilizer": "Entretela de recorte firme (Cut-away) de 80g"
    },
    "relatedTerms": [
      "Ponto Cheio (Satin Stitch)",
      "Bordado Tridimensional 3D com EVA",
      "Desmanchador de Costura / Abridor de Casas",
      "NÃ³ de Trava (Lock Stitch)",
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
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "grammarClass": "LocuÃ§Ã£o substantiva feminina composta por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do latim duplus (duas vezes), densitas (compacto) e do francÃªs satin (cetim brilhante derivado do porto chinÃªs Zaiton). TÃ©cnica avanÃ§ada de digitalizaÃ§Ã£o criada na indÃºstria de uniformes nos anos 1990.",
    "summary": "Protocolo de programaÃ§Ã£o onde se sobrepÃµem duas camadas de ponto cheio com densidades moderadas e Ã¢ngulos ligeiramente defasados para cobrir tecidos pretos com linhas claras sem empedrar.",
    "definition": "A dupla densidade em ponto cheio para cobertura de tecidos escuros (double-layer satin density protocol, dark substrate dual-pass coverage, staggered satin layering) Ã© a metodologia tÃ©cnica de digitalizaÃ§Ã£o que soluciona o problema Ã³ptico de 'vazamento de fundo' quando se bordam linhas claras ou brancas sobre tecidos escuros, pretos ou de alta gramatura (como brim, sarja e veludo cotelÃª). Em vez de tentar resolver a transparÃªncia aumentando a densidade de uma Ãºnica camada para valores excessivos (como 0,25 mm, o que causaria quebra de agulhas e efeito de placa rÃ­gida), programa-se uma primeira camada de base a 0,55 mm de espaÃ§amento e uma segunda camada superior a 0,40 mm com uma inclinaÃ§Ã£o angular defasada em 5Â° a 10Â°, garantindo 100% de brancura Ã³ptica e toque flexÃ­vel.",
    "technicalDetails": "A primeira camada atua como um leito de bloqueio cromÃ¡tico e nivelamento da trama tÃªxtil, enquanto a segunda camada superior sela os espaÃ§os microscÃ³picos entre as fibras com reflexÃ£o de luz direta. A defasagem angular de 7Â° entre as camadas impede que as perfuraÃ§Ãµes da agulha coincidam nas mesmas coordenadas dos furos anteriores, preservando a integridade estrutural do tecido e reduzindo o consumo de energia dos servomotores.",
    "howItWorks": [
      "1. No software de matrizes, o digitalizador cria o objeto de ponto cheio com o texto ou elemento claro.",
      "2. Duplica o objeto na mesma posiÃ§Ã£o exata (Copy & Paste in Place).",
      "3. Configura o primeiro objeto com densidade de 0,55 mm, sem compensaÃ§Ã£o de repuxo excessiva e com underlay central.",
      "4. Configura o segundo objeto com densidade de 0,40 mm, Ã¢ngulo de ponto alterado em 7Â° e compensaÃ§Ã£o de repuxo padrÃ£o (+0,35 mm).",
      "5. Na mÃ¡quina, o bordado costura as duas camadas em sequÃªncia rÃ¡pida, resultando em um bordado branco brilhante e sem nenhum fio preto aparecendo no meio."
    ],
    "beginnerExplanation": "Sabe quando vocÃª vai bordar uma letra branca em uma camiseta preta e o tecido preto fica aparecendo no meio dos pontos parecendo que o bordado estÃ¡ ralo e feio? O segredo nÃ£o Ã© apertar os pontos atÃ© a mÃ¡quina quase quebrar! O truque dos profissionais Ã© fazer a mÃ¡quina passar duas vezes: uma primeira camadinha leve que tampa a cor preta e uma segunda camadinha por cima que dÃ¡ o brilho total!",
    "applications": [
      "Bordado de logotipos brancos e amarelos em uniformes pretos, jaquetas de brim escuro e bonÃ©s escuros.",
      "Monogramas claros em toalhas de banho pretas, roupÃµes chumbo e mantas azul-marinho.",
      "Textos pequenos de alta legibilidade em etiquetas corporativas sobre fundo escuro.",
      "PeÃ§as de moda de alta costura com exigÃªncia de brancura fotogrÃ¡fica impecÃ¡vel."
    ],
    "characteristics": [
      "Opacidade cromÃ¡tica total de 100%, bloqueando a cor escura do tecido de fundo.",
      "Bordado incrivelmente macio e flexÃ­vel, sem a rigidez pesada de uma camada Ãºnica ultra-densa.",
      "Zero quebra de agulhas e reduÃ§Ã£o drÃ¡stica do atrito tÃ©rmico da linha durante a costura."
    ],
    "commonErrors": [
      "â�Œ Aumentar a densidade de uma Ãºnica camada para 0,22 mm, criando uma pedra dura que rasga o tecido e quebra agulhas",
      "â�Œ Bordar as duas camadas exatamente no mesmo Ã¢ngulo de ponto, fazendo a agulha bater nos mesmos buraquinhos e empurrar a linha para dentro",
      "â�Œ Usar linha de bobina de mÃ¡ qualidade que sobe para a frente e mancha o topo do bordado claro"
    ],
    "troubleshootingTips": [
      "Se o tecido escuro ainda estiver aparecendo nas pontas: Aumente o recuo da primeira camada em +0,2 mm e utilize um topping plÃ¡stico solÃºvel por cima.",
      "Se a segunda camada parecer deslocada: Verifique a firmeza do bastidoramento e aumente a compensaÃ§Ã£o de repuxo da camada superior.",
      "Se o bordado ficar muito grosso: Ajuste o espaÃ§amento da primeira camada para 0,60 mm e o da segunda para 0,42 mm."
    ],
    "dicaArtrelados": "Quando tiver que bordar letras amarelas ou brancas em camisas pretas, use sempre a tÃ©cnica da Dupla Camada com 7Â° de diferenÃ§a no Ã¢ngulo: o branco fica tÃ£o vivo e reluzente que parece uma pintura a Ã³leo em alto relevo!",
    "voceSabia": "Os pintores renascentistas usavam exatamente essa mesma tÃ©cnica Ã³tica (chamada de 'imprimatura'): aplicavam uma primeira demÃ£o neutra de tinta na tela escura antes de pintar as cores claras para as cores brilharem com luminosidade pura!",
    "practicalExercise": "Pegue um retalho de brim preto. Borde uma letra 'B' com densidade Ãºnica pesada de 0,28 mm e outra letra 'B' ao lado usando duas camadas (0,55 mm + 0,40 mm com 7Â° de Ã¢ngulo). Toque com os dedos e compare a maciez e a brancura das duas!",
    "quickSummary": "TÃ©cnica que sobrepÃµe duas camadas de ponto cheio com Ã¢ngulos defasados para garantir cobertura total de fundos escuros com toque macio.",
    "recommendedSettings": {
      "speedPPM": "750 a 850 PPM",
      "needleType": "75/11 Ponta Bola ou Standard",
      "stabilizer": "Entretela rasgÃ¡vel de 70g ou de recorte conforme o tecido"
    },
    "relatedTerms": [
      "Densidade de Ponto Cheio (Satin Density)",
      "Ã‚ngulo de Ponto (Stitch Angle)",
      "Camada de Cobertura / Topping",
      "CompensaÃ§Ã£o de Repuxo (Pull Compensation)",
      "EspaÃ§amento de Ponto (Stitch Spacing)"
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
      "ARTRELADOS. Guia de Cobertura CromÃ¡tica e Densidades Perfeitas no DIBE. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-084-dinamometro-digital-arrasto-puxada-linha",
    "code": "D-084",
    "letter": "D",
    "term": "DinamÃ´metro Digital de Arrasto e Puxada de Linha (Digital Thread Drag Dynamometer)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "Equipamentos & MediÃ§Ã£o",
    "grammarClass": "Substantivo masculino composto por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do grego dynamis (forÃ§a, potÃªncia) e metron (medida). Equipamento de metrologia tÃªxtil de precisÃ£o desenvolvido no JapÃ£o e SuÃ­Ã§a para laboratÃ³rios de bordado nos anos 1990.",
    "summary": "Instrumento eletrÃ´nico de alta sensibilidade que mede em gramas-forÃ§a (gf) ou centinewtons (cN) a resistÃªncia de atrito contÃ­nuo da linha superior ao longo de todo o caminho de passagem.",
    "definition": "O dinamÃ´metro digital de arrasto e puxada de linha (digital upper thread tension gauge, running thread drag dynamometer, precision load-cell yarn tension meter) Ã© o instrumento metrolÃ³gico avanÃ§ado utilizado para diagnosticar, padronizar e calibrar a resistÃªncia de traÃ§Ã£o dinÃ¢mica da linha superior em mÃ¡quinas de bordar industriais e profissionais. Conectado ao fio na saÃ­da do guia-fio da agulha, o dinamÃ´metro registra a forÃ§a exata exercida pelo conjunto de discos tensores, molas de retorno, feltros e canais de passagem enquanto a linha Ã© puxada em velocidade constante, identificando micro-bloqueios, calibraÃ§Ãµes assimÃ©tricas entre agulhas e variaÃ§Ãµes de atrito causadas por sujeira acumulada nos discos.",
    "technicalDetails": "Equipado com cÃ©lula de carga piezorresistiva de alta resoluÃ§Ã£o (precisÃ£o de Â±0,5 gf na faixa de 0 a 500 gf) e visor digital LCD retroiluminado com retenÃ§Ã£o de valor de pico (Peak Hold). O padrÃ£o Ã³timo de calibraÃ§Ã£o para linha de bordar 100% poliÃ©ster calibre 40wt situa-se entre 110 gf e 130 gf (gramas-forÃ§a) com o calcador abaixado; para fios metÃ¡licos finos ou rayon de seda, a regulagem ideal Ã© calibrada entre 90 gf e 105 gf.",
    "howItWorks": [
      "1. A mÃ¡quina Ã© parada com o calcador abaixado e a agulha na posiÃ§Ã£o superior.",
      "2. O operador laÃ§a a ponta da linha superior que sai da agulha no gancho sensor do dinamÃ´metro digital.",
      "3. Puxa suavemente o dinamÃ´metro em linha reta para baixo em velocidade contÃ­nua de cerca de 10 cm/s.",
      "4. O visor digital exibe em tempo real o grÃ¡fico de traÃ§Ã£o e fixa o valor mÃ©dio de arraste em gramas-forÃ§a.",
      "5. O operador gira o botÃ£o do tensor da agulha correspondente atÃ© atingir exatamente o valor nominal de 120 gf, repetindo o teste em todas as agulhas do cabeÃ§ote."
    ],
    "beginnerExplanation": "Ã‰ a 'balanÃ§a digital de precisÃ£o' que mede a forÃ§a da linha de cima da mÃ¡quina! Em vez de ficar puxando a linha com o dedo e tentando adivinhar no 'olhÃ´metro' se o tensor estÃ¡ apertado ou frouxo, esse aparelhinho mede na tela o peso exato da puxada da linha. Assim todas as agulhas da sua mÃ¡quina ficam com o ponto exatamente idÃªntico e perfeito!",
    "applications": [
      "EqualizaÃ§Ã£o rigorosa da tensÃ£o entre as 12 ou 15 agulhas de cabeÃ§otes industriais.",
      "Controle de qualidade em fÃ¡bricas de bordado de grande porte e ateliÃªs de alto padrÃ£o.",
      "IdentificaÃ§Ã£o de canaletas obstruÃ­das com fiapos ou discos tensores com rebarbas microscÃ³picas.",
      "CalibraÃ§Ã£o segura para fios especiais delicados (linhas metÃ¡licas, poliamida e luminescentes)."
    ],
    "characteristics": [
      "Leitura numÃ©rica digital instantÃ¢nea que elimina subjetividades do toque manual do operador.",
      "MemÃ³ria para armazenamento de mediÃ§Ãµes de todas as agulhas para comparaÃ§Ã£o rÃ¡pida.",
      "AlimentaÃ§Ã£o por bateria recarregÃ¡vel com autonomia para mais de 100 horas de calibraÃ§Ã£o."
    ],
    "commonErrors": [
      "â�Œ Medir a tensÃ£o da linha com o calcador da mÃ¡quina levantado (quando os discos tensores estÃ£o abertos)",
      "â�Œ Puxar o instrumento com solavancos bruscos em vez de uma traÃ§Ã£o suave e contÃ­nua",
      "â�Œ Desconsiderar a mediÃ§Ã£o individual de cada agulha, achando que todas tÃªm a mesma tensÃ£o sÃ³ porque os botÃµes estÃ£o alinhados visualmente"
    ],
    "troubleshootingTips": [
      "Se uma agulha especÃ­fica der leitura 50 gf mais alta que as outras: Limpe os discos tensores passando um fio dental com Ã¡lcool isopropÃ­lico para retirar ceras e fiapos.",
      "Se a leitura oscilar loucamente durante o puxÃ£o: Verifique se o cone de linha nÃ£o estÃ¡ com o fio preso na base do suporte desbobinador.",
      "Se a linha quebrar durante a mediÃ§Ã£o: O tensor estÃ¡ excessivamente apertado; afrouxe o parafuso recuando duas voltas completas."
    ],
    "dicaArtrelados": "Se vocÃª nÃ£o tem um dinamÃ´metro digital de bancada, use o 'teste do papel higiÃªnico': a linha superior deve puxar com a forÃ§a exata necessÃ¡ria para desenrolar um rolo de papel higiÃªnico novo na mesa sem rasgar a folha!",
    "voceSabia": "Nas linhas de montagem das fÃ¡bricas japonesas da Tajima e Barudan, 100% das mÃ¡quinas que saem para exportaÃ§Ã£o passam obrigatoriamente por teste computadorizado de dinamÃ´metro em cada agulha antes do envio!",
    "practicalExercise": "Puxe a linha da agulha 1 e da agulha 2 com a mÃ£o e sinta a resistÃªncia. Se tiver um tensiÃ´metro digital ou balancinha de mola, meÃ§a as duas agulhas e compare os nÃºmeros para ver se estÃ£o rigorosamente iguais!",
    "quickSummary": "Instrumento digital de alta precisÃ£o que afere a forÃ§a de traÃ§Ã£o da linha superior para equalizar todas as agulhas da mÃ¡quina.",
    "recommendedSettings": {
      "speedPPM": "N/A (Instrumento de mediÃ§Ã£o estÃ¡tica/dinÃ¢mica)",
      "needleType": "CompatÃ­vel com todos os calibres de agulha",
      "stabilizer": "Faixa nominal padrÃ£o: 110 a 130 gf para poliÃ©ster 40wt"
    },
    "relatedTerms": [
      "Tensor de Linha Superior (Thread Tensioner)",
      "CartÃ£o de CalibraÃ§Ã£o de TensÃ£o de Bobina / TensiÃ³metro Digital",
      "Mola de Retorno / Mola de TensÃ£o (Check Spring)",
      "CalibraÃ§Ã£o de TensÃ£o de Linha",
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
      "ARTRELADOS. Metrologia, CalibraÃ§Ã£o e ManutenÃ§Ã£o de PrecisÃ£o no DIBE. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-085-decapagem-termica-residuos-plasticos-pistola-ar-quente",
    "code": "D-085",
    "letter": "D",
    "term": "Decapagem TÃ©rmica de ResÃ­duos PlÃ¡sticos / Pistola de Ar Quente (Heat-Gun Topping Film Stripping)",
    "level": "Fundamental ðŸŸ¢",
    "category": "Acabamento & FinalizaÃ§Ã£o",
    "grammarClass": "LocuÃ§Ã£o substantiva feminina composta por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do francÃªs dÃ©caper (remover a camada superficial indesejada) e do grego therme (calor). TÃ©cnica de pÃ³s-produÃ§Ã£o desenvolvida em grandes confecÃ§Ãµes de toalhas e bonÃ©s nos anos 2000.",
    "summary": "Uso tÃ©cnico e controlado de um soprador tÃ©rmico ou pistola de ar quente para encolher, vaporizar e eliminar micro-resÃ­duos de filme plÃ¡stico e fiapos de EVA presos entre os pontos.",
    "definition": "A decapagem tÃ©rmica de resÃ­duos plÃ¡sticos e filmes termo-solÃºveis (heat-gun topping film stripping, thermal flash post-embroidery cleaning, micro-EVA heat cleanup) Ã© o procedimento profissional de finalizaÃ§Ã£o e limpeza de bordados atravÃ©s da aplicaÃ§Ã£o rÃ¡pida de um fluxo concentrado de ar quente (entre 120Â°C e 160Â°C). Utilizado apÃ³s a conclusÃ£o de bordados executados com filme plÃ¡stico termo-descartÃ¡vel (Heat-Away / Solvy TÃ©rmico) sobre toalhas e veludos, ou em bordados 3D com espuma EVA, o choque tÃ©rmico de fraÃ§Ã£o de segundo faz com que as pequenas rebarbas de plÃ¡stico e micropartÃ­culas de EVA encolham instantaneamente para dentro da trama, desaparecendo da superfÃ­cie visual sem queimar a linha de poliÃ©ster nem o tecido.",
    "technicalDetails": "O calor deve ser aplicado com pistola de ar quente com bocal direcionador mantido a uma distÃ¢ncia segura de 8 cm a 12 cm da superfÃ­cie da peÃ§a e em movimento circular contÃ­nuo por no mÃ¡ximo 2 a 3 segundos por Ã¡rea. Linhas de bordar 100% poliÃ©ster possuem ponto de fusÃ£o em torno de 250Â°C a 260Â°C, tornando-as altamente resistentes ao ar quente moderado de 140Â°C, enquanto os filmes termo-plÃ¡sticos se contraem e desintegram a partir de 110Â°C.",
    "howItWorks": [
      "1. O bordado Ã© concluÃ­do e retirado do bastidor da mÃ¡quina.",
      "2. O operador rasga manualmente a maior parte do plÃ¡stico de cobertura (topping) ou da placa de EVA 3D.",
      "3. Restam pequenos pedacinhos transparentes ou fiapinhos coloridos presos no interior de cantos vivos e letras pequenas.",
      "4. Liga-se a pistola de ar quente na temperatura mÃ©dia (140Â°C) e direciona-se o fluxo com movimentos circulares rÃ¡pidos sobre o bordado.",
      "5. Em 2 segundos, todos os resÃ­duos plÃ¡sticos encolhem microscopicamente e somem, deixando o bordado limpo, nÃ­tido e perfeito."
    ],
    "beginnerExplanation": "Ã‰ o 'truque do secador de ar quente' para deixar o bordado limpinho num piscar de olhos! Quando vocÃª borda toalha com plastiquinho por cima ou faz bordado 3D com EVA, sempre sobram uns caquinhos chatos de plÃ¡stico presos no meinho das letras que demoram para tirar com a pinÃ§a. VocÃª passa um arzinho quente por cima por 2 segundinhos e todos os caquinhos somem como mÃ¡gica!",
    "applications": [
      "Limpeza ultrarrÃ¡pida de filmes termo-solÃºveis em toalhas de banho e roupÃµes felpudos.",
      "Acabamento impecÃ¡vel de bordados 3D em relevo sobre bonÃ©s e jaquetas.",
      "EliminaÃ§Ã£o de micro-fiapos de linha e penugens soltas sobre tecidos escuros.",
      "FinalizaÃ§Ã£o em escala industrial de alta produtividade sem uso de Ã¡gua."
    ],
    "characteristics": [
      "Ganho de mais de 80% no tempo de limpeza e acabamento manual por peÃ§a bordada.",
      "Totalmente a seco, permitindo embalar e despachar a encomenda do cliente na mesma hora.",
      "Acabamento de padrÃ£o de fÃ¡brica internacional com aspecto limpo e profissional."
    ],
    "commonErrors": [
      "â�Œ Parar a pistola de ar quente parada no mesmo ponto por mais de 5 segundos, correndo o risco de queimar o tecido ou derreter a linha",
      "â�Œ Usar ar quente sobre tecidos sintÃ©ticos ultrafinos sensÃ­veis ao calor (como nÃ¡ilon impermeÃ¡vel ou organza plÃ¡stica)",
      "â�Œ Aproximar o bico de metal quente da pistola encostando diretamente na linha de bordar"
    ],
    "troubleshootingTips": [
      "Se o plÃ¡stico nÃ£o estiver encolhendo: Aproxime a pistola para 8 cm de distÃ¢ncia ou aumente ligeiramente a temperatura para 150Â°C em movimento contÃ­nuo.",
      "Se o tecido for muito sensÃ­vel: FaÃ§a um teste prÃ©vio em um retalho da mesma peÃ§a antes de aplicar sobre o bordado principal.",
      "Se sobrarem resÃ­duos teimosos de EVA: Utilize a pontinha de uma pinÃ§a de precisÃ£o enquanto o EVA ainda estiver morninho e maleÃ¡vel."
    ],
    "dicaArtrelados": "Tenha sempre um soprador tÃ©rmico com regulagem de temperatura ao lado da sua mesa de acabamento: vocÃª vai limpar toalhas e bonÃ©s 3D em 5 segundos sem perder horas catando pedacinhos de plÃ¡stico com a pinÃ§a!",
    "voceSabia": "As grandes confecÃ§Ãµes de moda praia e enxoval da Europa utilizam tÃºneis de ar quente computadorizados por onde as toalhas passam em esteiras rolantes para fazer a limpeza tÃ©rmica automÃ¡tica de milhares de peÃ§as por hora!",
    "practicalExercise": "Pegue um retalho com bordado em toalha com filme plÃ¡stico rasgado. Pegue um secador de cabelo potente no ar bem quente ou um soprador tÃ©rmico e passe sobre os caquinhos de plÃ¡stico: observe como eles encolhem e somem instantaneamente!",
    "quickSummary": "Procedimento de limpeza a seco com ar quente que encolhe e elimina resÃ­duos de plÃ¡stico e fiapos de EVA dos bordados em segundos.",
    "recommendedSettings": {
      "speedPPM": "N/A (TÃ©cnica de acabamento manual pÃ³s-bordado)",
      "needleType": "CompatÃ­vel com todos os bordados em poliÃ©ster",
      "stabilizer": "Temperatura de ar recomendada: 120Â°C a 150Â°C"
    },
    "relatedTerms": [
      "Camada de Cobertura / Topping",
      "Bordado 3D / Alto Relevo com Espuma",
      "Dureza Shore de Espumas 3D para Bordado em Alto Relevo",
      "PinÃ§a de Limpeza e Acabamento",
      "Entretela TermossolÃºvel / Filme TÃ©rmico"
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
      "ARTRELADOS. Guia de Acabamento e FinalizaÃ§Ã£o Perfeita no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-086-densidade-adaptativa-area-smart-density-scaling",
    "code": "D-086",
    "letter": "D",
    "term": "Densidade Adaptativa por Ã�rea / Smart Density Reduction (Smart Density Scaling Algorithm)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "ProgramaÃ§Ã£o de Bordado",
    "grammarClass": "LocuÃ§Ã£o substantiva feminina composta por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do latim adaptare (ajustar perfeitamente), area (superfÃ­cie plana) e do inglÃªs smart scaling (redimensionamento inteligente computacional dos anos 2000).",
    "summary": "Algoritmo inteligente de software que recalcula e alivia a densidade automaticamente em Ã¡reas estreitas ou ao reduzir o tamanho de matrizes, impedindo o empilhamento de pontos.",
    "definition": "A densidade adaptativa por Ã¡rea ou reduÃ§Ã£o inteligente de densidade (smart density scaling algorithm, adaptive stitch density modulation, dynamic area spacing recalculation) Ã© o recurso avanÃ§ado de processamento vetorial presente em softwares profissionais de bordado que ajusta dinamicamente a distÃ¢ncia entre os pontos conforme a geometria e a escala do objeto mudam. Quando uma matriz Ã© reduzida de tamanho em 20% ou quando uma coluna de cetim se afunila para larguras menores que 1,5 mm, o algoritmo afasta proporcionalmente os pontos (aumentando o espaÃ§amento de 0,40 mm para 0,60 mm), evitando o estrangulamento de linha e furos no tecido.",
    "technicalDetails": "O algoritmo analisa a Ã¡rea da seÃ§Ã£o transversal do objeto vetorial e calcula a densidade de pontos por milÃ­metro quadrado. Em colunas que convergem para vÃ©rtices afunilados (efeito rabo de peixe / taper), ativa-se automaticamente a 'fraÃ§Ã£o de pontos curtos' (Short Stitches), intercalando um ponto longo e um ponto recuado a 50% da margem interna, garantindo a densidade visual externa sem sobrecarregar o vÃ©rtice interno.",
    "howItWorks": [
      "1. O digitalizador ativa a funÃ§Ã£o 'Smart Density / Densidade Adaptativa' nas preferÃªncias do software.",
      "2. Ao desenhar ou redimensionar um logotipo para um tamanho 30% menor no peito de uma camisa, o software recalcula toda a matriz.",
      "3. As colunas largas mantÃªm espaÃ§amento de 0,40 mm e as pontas finas de letras recebem espaÃ§amento aberto de 0,55 mm.",
      "4. O nÃºmero total de pontos cai proporcionalmente (ex: de 12.000 para 8.500 pontos) sem perda de qualidade visual.",
      "5. Na mÃ¡quina de bordar, a matriz roda suavemente sem cortes falsos nem superaquecimento da agulha."
    ],
    "beginnerExplanation": "Ã‰ a 'inteligÃªncia do programa' que impede a mÃ¡quina de furar o tecido quando vocÃª diminui um desenho! Quando vocÃª encolhe uma matriz no computador, se os pontos continuarem no mesmo lugar, eles vÃ£o ficar espremidos como sardinha em lata e quebrar a linha. A densidade inteligente espalha os pontinhos com carinho nos cantinhos finos para o bordado ficar levinho e perfeito!",
    "applications": [
      "Redimensionamento proporcional de logotipos corporativos para bordado em bolsos e golas.",
      "DigitalizaÃ§Ã£o de letras com serifas finas e pontas afiladas de fontes clÃ¡ssicas (Times e Garamond).",
      "Bordados florais com pÃ©talas e folhas que se estreitam nas extremidades.",
      "OtimizaÃ§Ã£o de arquivos pesados para acelerar a produÃ§Ã£o em mÃ¡quinas industriais."
    ],
    "characteristics": [
      "PreservaÃ§Ã£o da maleabilidade e do toque suave do tecido bordado.",
      "EliminaÃ§Ã£o do acÃºmulo excessivo de pontos e nÃ³s em pontas de letras e cantos agudos.",
      "Ajuste 100% automÃ¡tico e em tempo real durante a ediÃ§Ã£o no software."
    ],
    "commonErrors": [
      "â�Œ Reduzir uma matriz salva em formato de pontos (DST ou PES) no painel da mÃ¡quina sem recalcular pontos, compactando a densidade em 50%",
      "â�Œ Desativar os pontos curtos automÃ¡ticos (Short Stitches) em curvas fechadas de ponto cheio",
      "â�Œ Permitir que colunas com menos de 0,8 mm de largura recebam densidade pesada de 0,35 mm"
    ],
    "troubleshootingTips": [
      "Se as pontas das letras ficarem duras como pedras: Abra o arquivo original no software e ative a opÃ§Ã£o 'Auto Short Stitches' nas propriedades de cetim.",
      "Se a matriz redimensionada perder a cobertura: Ajuste o limite mÃ­nimo de densidade para nÃ£o ultrapassar 0,48 mm de espaÃ§amento.",
      "Se a linha arrebentar nas letras pequenas: Substitua a agulha por uma 65/9 e use linha fina calibre 60wt."
    ],
    "dicaArtrelados": "Sempre que precisar diminuir o tamanho de uma matriz em mais de 10%, faÃ§a isso dentro do software de bordado no computador para ele recalcular os pontos: nunca diminua pelo painel da mÃ¡quina, pois a mÃ¡quina apenas encolhe o espaÃ§o e amassa os pontos!",
    "voceSabia": "Os primeiros algoritmos de densidade adaptativa foram criados na AustrÃ¡lia pela Wilcom em 1985 e revolucionaram a indÃºstria mundial, permitindo pela primeira vez na histÃ³ria que uma mesma matriz fosse usada em jaquetas e camisas polo!",
    "practicalExercise": "No seu software de matrizes, desenhe uma estrela com pontas bem afiadas. Observe como o programa automaticamente insere pontos curtos nas pontas para nÃ£o empilhar linha no centro da estrela!",
    "quickSummary": "Algoritmo inteligente de software que afasta os pontos em Ã¡reas finas e redimensionamentos para evitar acÃºmulos rÃ­gidos de linha.",
    "recommendedSettings": {
      "speedPPM": "N/A (Processamento algorÃ­tmico em software de bordado)",
      "needleType": "CompatÃ­vel com todos os calibres de agulha",
      "stabilizer": "ReduÃ§Ã£o de 15% a 25% na carga total de pontos"
    },
    "relatedTerms": [
      "Densidade de Ponto Cheio (Satin Density)",
      "Pontos Curtos em Curvas (Short Stitches)",
      "EspaÃ§amento de Ponto (Stitch Spacing)",
      "DivisÃ£o de Ponto Longo e Ponto Dividido AutomÃ¡tico",
      "CompensaÃ§Ã£o de Repuxo (Pull Compensation)"
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
      "ARTRELADOS. Guia de Redimensionamento e OtimizaÃ§Ã£o no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-087-diagnostico-osciloscopio-motores-passo-xy",
    "code": "D-087",
    "letter": "D",
    "term": "DiagnÃ³stico por OsciloscÃ³pio de Motores de Passo X/Y (Pantograph Stepper Motor Diagnostic)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "Equipamentos e MÃ¡quinas",
    "grammarClass": "LocuÃ§Ã£o substantiva masculina composta por substantivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do grego oscillare (balanÃ§ar em ondas regulares) e skopein (examinar visualmente). Metodologia mecatrÃ´nica de alta precisÃ£o adotada no suporte tÃ©cnico industrial nos anos 1990.",
    "summary": "Procedimento eletrÃ´nico avanÃ§ado de anÃ¡lise de forma de onda e pulsos elÃ©tricos nos drivers dos servomotores X/Y para diagnosticar perda de passos, trepidaÃ§Ãµes e desalinhamento de matrizes.",
    "definition": "O diagnÃ³stico por osciloscÃ³pio de motores de passo e servomotores dos eixos X/Y (pantograph stepper motor oscilloscope diagnostic, pulse-width modulation wave analysis, encoder signal feedback troubleshooting) Ã© o mÃ©todo mecatrÃ´nico de teste eletrÃ´nico utilizado na manutenÃ§Ã£o tÃ©cnica especializada de mÃ¡quinas de bordar industriais e semiprofissionais. AtravÃ©s de pontas de prova conectadas aos terminais das fases dos motores e aos canais de sinal A/B/Z dos encoders Ã³pticos, o tÃ©cnico visualiza em tempo real as ondas senoidais ou quadradas de modulaÃ§Ã£o por largura de pulso (PWM), identificando ruÃ­dos eletromagnÃ©ticos, quedas de tensÃ£o, queima de transistores MOSFET e perda microscÃ³pica de passos durante aceleraÃ§Ãµes bruscas do pantÃ³grafo.",
    "technicalDetails": "Utiliza-se osciloscÃ³pio digital de 2 ou 4 canais com largura de banda mÃ­nima de 50 MHz e taxa de amostragem de 1 GSa/s. O teste avalia a simetria de quadratura de 90Â° entre os sinais dos canais de quadratura do encoder do pantÃ³grafo e a integridade da corrente de pico nas bobinas dos motores trifÃ¡sicos ou hÃ­bridos, permitindo detectar com exatidÃ£o falhas intermitentes que causam desvios milimÃ©tricos no alinhamento de contornos na matriz.",
    "howItWorks": [
      "1. O tÃ©cnico remove a tampa de proteÃ§Ã£o da placa-mÃ£e ou dos drivers de potÃªncia X/Y da mÃ¡quina de bordar.",
      "2. Conecta as garras de terra e as pontas de prova atenuadas (10X) nos pinos de saÃ­da de controle dos motores de passo.",
      "3. Executa um padrÃ£o de teste de alta velocidade com movimentos diagonais contÃ­nuos no pantÃ³grafo.",
      "4. O osciloscÃ³pio captura a forma de onda da corrente e a resposta dos sensores de retorno Ã³ptico.",
      "5. Analisa-se a presenÃ§a de picos de ruÃ­do induzido, saturaÃ§Ã£o de bobina ou defasagem de quadratura, regulando o ganho do driver ou substituindo componentes defeituosos."
    ],
    "beginnerExplanation": "Ã‰ como fazer um 'eletrocardiograma do coraÃ§Ã£o elÃ©trico da mÃ¡quina de bordar'! Quando a mÃ¡quina comeÃ§a a 'desencontrar os contornos' e o desenho fica torto sem motivo, o tÃ©cnico liga esse aparelhinho com telinha cheia de ondas verdes para ver se os motores que empurram o bastidor estÃ£o recebendo a energia certinha ou se estÃ£o 'tropeÃ§ando' no meio do caminho!",
    "applications": [
      "DiagnÃ³stico de deslocamentos misteriosos de contornos e perda de registro em matrizes grandes.",
      "IdentificaÃ§Ã£o de queima de canais de potÃªncia em placas de comando de mÃ¡quinas industriais.",
      "CalibraÃ§Ã£o de sensibilidade e amortecimento eletrÃ´nico (damping) apÃ³s troca de motores.",
      "DetecÃ§Ã£o de ruÃ­dos causados por falta de aterramento elÃ©trico adequado no ateliÃª."
    ],
    "characteristics": [
      "IdentificaÃ§Ã£o infalÃ­vel da causa raiz de defeitos elÃ©tricos sem necessidade de trocar peÃ§as no escuro.",
      "MediÃ§Ã£o precisa de micro-segundos na resposta mecÃ¢nica dos eixos de movimentaÃ§Ã£o.",
      "Garantia de que a mÃ¡quina opere na sua velocidade mÃ¡xima nominal com total precisÃ£o geomÃ©trica."
    ],
    "commonErrors": [
      "â�Œ Conectar pontas de prova em alta voltagem sem isolamento adequado, queimando o osciloscÃ³pio ou a placa da mÃ¡quina",
      "â�Œ Confundir folga mecÃ¢nica nas correias dentadas com perda de pulsos elÃ©tricos do motor",
      "â�Œ Operar mÃ¡quinas computadorizadas sem barra de aterramento no padrÃ£o SPDA no ateliÃª"
    ],
    "troubleshootingTips": [
      "Se a onda senoidal do motor apresentar deformaÃ§Ã£o chanfrada: O driver de potÃªncia estÃ¡ superaquecendo; verifique a pasta tÃ©rmica e o cooler da placa-mÃ£e.",
      "Se houver ruÃ­dos espalhados na tela: O cabo de aterramento do chassi da mÃ¡quina estÃ¡ solto ou com resistÃªncia acima de 5 Ohms.",
      "Se o sinal do encoder sumir em velocidades altas: O disco Ã³ptico do sensor estÃ¡ sujo de pÃ³ de linha; limpe com cotonete e Ã¡lcool isopropÃ­lico."
    ],
    "dicaArtrelados": "Antes de chamar a assistÃªncia tÃ©cnica achando que a placa da mÃ¡quina queimou quando os contornos desalinharem, faÃ§a um teste simples: desligue a mÃ¡quina da tomada por 5 minutos para descarregar a estÃ¡tica e limpe as correias do bastidor â€” muitas vezes Ã© apenas poeira ou estÃ¡tica acumulada!",
    "voceSabia": "Os modernos servomotores sem escovas (Brushless) das mÃ¡quinas de bordar de Ãºltima geraÃ§Ã£o executam mais de 20.000 cÃ¡lculos de correÃ§Ã£o de trajetÃ³ria por segundo enquanto o bastidor se move a 1.000 pontos por minuto!",
    "practicalExercise": "Observe o movimento do carro do bastidor em um bordado rÃ¡pido: note como a parada em cada ponto Ã© instantÃ¢nea e firme. Essa estabilidade geomÃ©trica milimÃ©trica Ã© fruto do controle eletrÃ´nico de precisÃ£o dos motores de passo!",
    "quickSummary": "DiagnÃ³stico eletrÃ´nico avanÃ§ado que analisa os pulsos elÃ©tricos dos motores do bastidor para eliminar perdas de passo e desenhos tortos.",
    "recommendedSettings": {
      "speedPPM": "N/A (Procedimento de manutenÃ§Ã£o eletroeletrÃ´nica)",
      "needleType": "CompatÃ­vel com todos os modelos eletrÃ´nicos",
      "stabilizer": "TensÃ£o de teste: 24V a 48V DC conforme a controladora"
    },
    "relatedTerms": [
      "PantÃ³grafo / Carro de MovimentaÃ§Ã£o do Bastidor",
      "Dreno de Eletricidade EstÃ¡tica em MÃ¡quinas de Bordar",
      "Curva de AceleraÃ§Ã£o e Frenagem do PantÃ³grafo / S-Curve Kinematics",
      "Comutador de Cores / Motor de Passo da Troca de Agulhas",
      "ManutenÃ§Ã£o Preventiva do CabeÃ§ote"
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
      "ARTRELADOS. EletrÃ´nica, AutomaÃ§Ã£o e DiagnÃ³stico de MÃ¡quinas no DIBE Artrelados. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-088-dedo-segurador-linha-corte-trava-mecanica-superior",
    "code": "D-088",
    "letter": "D",
    "term": "Dedo Segurador de Linha no Corte / Trava MecÃ¢nica Superior (Thread Wiper & Upper Thread Hook)",
    "level": "Fundamental ðŸŸ¢",
    "category": "Equipamentos e MÃ¡quinas",
    "grammarClass": "Substantivo masculino composto por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do portuguÃªs dedo (haste articulada fina) e do inglÃªs wiper (limpador/haste oscilante derivada do saxÃ£o wipian). Desenvolvido pela engenharia tÃªxtil japonesa nos primeiros cabeÃ§otes automÃ¡ticos em 1978.",
    "summary": "Pequena haste metÃ¡lica articulada acionada por solenoide ou came que puxa a ponta da linha cortada para cima do tecido no milissegundo exato apÃ³s o corte automÃ¡tico.",
    "definition": "O dedo segurador de linha no corte ou limpador de linha superior (thread wiper, thread picker hook, upper thread puller arm, automatic thread wiper solenoid assembly) Ã© um mecanismo eletromecÃ¢nico fundamental localizado logo atrÃ¡s ou ao lado da barra de agulha no cabeÃ§ote de bordado. No exato instante em que o sistema de facas inferiores sob a chapa de agulha corta a linha superior e inferior ao final de um bloco de cor ou pulo longo, o dedo segurador executa um movimento semicircular rÃ¡pido de varredura sob o calcador, laÃ§ando a ponta solta da linha e puxando-a para a parte superior do tecido, prendendo-a temporariamente na mola retentora para que nÃ£o fique presa sob os novos pontos do prÃ³ximo objeto.",
    "technicalDetails": "O mecanismo Ã© atuado por solenoide eletromagnÃ©tico de 24V ou haste mecÃ¢nica ligada ao came de corte. O gancho do wiper Ã© fabricado em aÃ§o inoxidÃ¡vel polido e deve ser calibrado com folga de 1,0 mm a 1,5 mm em relaÃ§Ã£o Ã  lateral da haste da agulha na sua posiÃ§Ã£o mais alta, garantindo que o gancho alcance a linha sem nunca colidir com a agulha ou com o calcador de bordado.",
    "howItWorks": [
      "1. A mÃ¡quina conclui um elemento bordado e o comando de corte automÃ¡tico Ã© acionado.",
      "2. As facas inferiores cortam a linha sob a chapa de agulha e a alavanca estica-fio sobe para o ponto morto superior.",
      "3. O solenoide do wiper dispara instantaneamente, fazendo a haste metÃ¡lica curvar-se para a frente sob a ponta da agulha.",
      "4. O gancho recolhe a ponta da linha superior cortada e puxa-a para cima, assentando-a na mola de retenÃ§Ã£o superior.",
      "5. O pantÃ³grafo move o bastidor livremente para a prÃ³xima coordenada sem arrastar a linha solta por cima da roupa bordada."
    ],
    "beginnerExplanation": "Ã‰ a 'mÃ£ozinha de aÃ§o rÃ¡pida' que limpa a linha cortada! Sabe quando a mÃ¡quina corta a linha e vocÃª nÃ£o vÃª nenhum fiapo sobrando por cima do bordado? Essa hastezinha de metal dÃ¡ um pulinho na frente da agulha, pega a ponta da linha cortada e puxa para cima bem rapidinho, para a mÃ¡quina nÃ£o costurar por cima do prÃ³prio fio solto!",
    "applications": [
      "Corte limpo de linha entre letras e elementos separados em qualquer tipo de matriz.",
      "PrevenÃ§Ã£o contra fios soltos engolidos e costurados debaixo de pontos cheios.",
      "Trabalhos de bordado de alta definiÃ§Ã£o em camisetas, uniformes e enxovais de bebÃª.",
      "ReduÃ§Ã£o drÃ¡stica do trabalho manual de limpeza com tesourinha de arremate."
    ],
    "characteristics": [
      "Movimento ultrarrÃ¡pido com tempo de resposta inferior a 50 milissegundos.",
      "Haste em aÃ§o polido com acabamento espelhado para nÃ£o desfiar as fibras da linha.",
      "Sincronismo 100% eletrÃ´nico integrado Ã  placa principal da mÃ¡quina de bordar."
    ],
    "commonErrors": [
      "â�Œ Deixar a haste do wiper torta apÃ³s uma quebra grave de agulha, fazendo o gancho bater no calcador",
      "â�Œ AcÃºmulo de fiapos e ceras no gancho do wiper que impedem a linha de desencaixar na reinicializaÃ§Ã£o da costura",
      "â�Œ Desativar o wiper nas configuraÃ§Ãµes do painel da mÃ¡quina, deixando pontas compridas de linha caÃ­das sobre o tecido"
    ],
    "troubleshootingTips": [
      "Se a linha cortada continuar caindo para baixo do tecido: Verifique se a mola do wiper estÃ¡ com tensÃ£o suficiente para segurar a pontinha da linha.",
      "Se o wiper fizer um estalo metÃ¡lico e travar: Desligue a mÃ¡quina e verifique se nÃ£o hÃ¡ linha enrolada no eixo do solenoide de acionamento.",
      "Se a agulha bater no wiper na descida: Ajuste o parafuso de fixaÃ§Ã£o da haste recuando 1 mm para a esquerda."
    ],
    "dicaArtrelados": "Mantenha a pontinha do dedo segurador (wiper) sempre brilhante e livre de fiapos: passe uma gotinha de Ã¡lcool em um pano limpo toda semana para que ele continue pegando a linha com precisÃ£o cirÃºrgica a cada troca de cor!",
    "voceSabia": "Antes da invenÃ§Ã£o do thread wiper no final dos anos 1970, as bordadeiras tinham que parar a mÃ¡quina manualmente a cada corte e puxar as pontas de linha com uma pinÃ§a para a mÃ¡quina nÃ£o estragar o bordado!",
    "practicalExercise": "Coloque a mÃ¡quina para bordar uma palavra com vÃ¡rias letras separadas. Olhe de pertinho para a barra de agulha no momento em que ela termina uma letra: observe o movimento super rÃ¡pido da hastezinha metÃ¡lica puxando a linha para cima!",
    "quickSummary": "Haste metÃ¡lica articulada que puxa a ponta da linha cortada para cima do tecido, mantendo a frente do bordado 100% limpa.",
    "recommendedSettings": {
      "speedPPM": "Sincronizado automaticamente com qualquer velocidade de costura",
      "needleType": "CompatÃ­vel com todas as agulhas do cabeÃ§ote",
      "stabilizer": "Folga nominal calibrada: 1,0 a 1,5 mm da agulha"
    },
    "relatedTerms": [
      "Corte AutomÃ¡tico de Pulos e ConexÃµes (Auto-Trimmer)",
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
      "cabeÃ§ote",
      "artrelados"
    ],
    "bibliographicReferences": [
      "TAJIMA TECHNICAL SERVICE. Thread Wiper Mechanism & Trimmer Solenoid Timing. Nagoya, 2022.",
      "BARUDAN MAINTENANCE GUIDE. Upper Thread Wiper Alignment & Maintenance. Ichinomiya, 2021.",
      "ARTRELADOS. MecÃ¢nica, Dispositivos e AutomaÃ§Ã£o de CabeÃ§otes no DIBE. Curitiba, 2024."
    ],
    "updatedAt": "2026-08-28"
  },
  {
    "id": "d-089-delineamento-ponto-trancado-efeito-cordao-sao-francisco",
    "code": "D-089",
    "letter": "D",
    "term": "Delineamento por Ponto TranÃ§ado / Efeito CordÃ£o de SÃ£o Francisco (Braided Stem Stitch Run)",
    "level": "IntermediÃ¡rio ðŸŸ¡",
    "category": "Tipos de Pontos & Estilos",
    "grammarClass": "Substantivo masculino composto por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do latim delineare (traÃ§ar linhas) e do portuguÃªs tranÃ§ado. Inspirado nos clÃ¡ssicos cordÃµes de hÃ¡bito da Ordem Franciscana (sÃ©culo XIII) e adaptado para algoritmos de digitalizaÃ§Ã£o nos anos 1990.",
    "summary": "Estilo de ponto linear decorativo que programa uma sequÃªncia de micro-zigue-zagues entrelaÃ§ados simulando uma corda nÃ¡utica torcida, nÃ³s ornamentais ou cordÃ£o de SÃ£o Francisco.",
    "definition": "O delineamento por ponto tranÃ§ado ou ponto haste em cordÃ£o torcido (braided stem stitch run, rope contour stitch, twisted cord motif outline) Ã© uma tÃ©cnica de digitalizaÃ§Ã£o linear especializada em criar contornos com aspecto de passamanaria torcida tridimensional sem o uso de dispositivos mecÃ¢nicos externos de cordÃ£o. O software gera uma sequÃªncia matemÃ¡tica de pontos cruzados oblÃ­quos com sobreposiÃ§Ã£o rÃ­tmica que mimetiza perfeitamente os gomos helicoidais de um cordÃ£o nÃ¡utico ou de um cordÃ£o franciscano de seda, conferindo requinte aristocrÃ¡tico a molduras, monogramas, caules botÃ¢nicos e brasÃµes.",
    "technicalDetails": "O padrÃ£o tranÃ§ado Ã© construÃ­do com largura de traÃ§o de 1,8 mm a 3,5 mm e passo de repetiÃ§Ã£o helicoidal de 1,2 mm a 2,0 mm. Ao contrÃ¡rio de uma coluna simples de ponto cheio com Ã¢ngulo Ãºnico, o ponto tranÃ§ado alterna Ã¢ngulos oblÃ­quos opostos (+35Â° e -35Â°) com pontos de ancoragem centralizados, produzindo um relevo com duplo reflexo de luz e excelente elasticidade longitudinal em curvas orgÃ¢nicas fechadas.",
    "howItWorks": [
      "1. O digitalizador traÃ§a o vetor linear no software de matrizes e seleciona o estilo de preenchimento como 'Ponto TranÃ§ado / Efeito CordÃ£o / Stem Motif'.",
      "2. Define a largura do cordÃ£o para 2,5 mm e o passo da tranÃ§a para 1,5 mm.",
      "3. O software gera a malha helicoidal de pontos com entrelaÃ§amento automÃ¡tico.",
      "4. Na mÃ¡quina de bordar, utiliza-se preferencialmente linha de alto brilho (Rayon ou PoliÃ©ster Trilobal) para realÃ§ar as facetas da tranÃ§a.",
      "5. A costura avanÃ§a com fluidez criando uma moldura com textura de corda torcida de alto impacto estÃ©tico."
    ],
    "beginnerExplanation": "Ã‰ aquele contorno lindo que parece uma 'cordinha torcida de marinheiro ou cordÃ£o dourado de SÃ£o Francisco'! Em vez de fazer uma linha lisa comum, a mÃ¡quina vai cruzando os pontinhos de um jeito especial que dÃ¡ a impressÃ£o exata de que tem uma cordinha de seda de verdade costurada na peÃ§a! Fica um encanto para caules de flores e bordas de toalhas!",
    "applications": [
      "Molduras clÃ¡ssicas de monogramas e brasÃµes familiares em toalhas de banho e lavabo.",
      "Caules de rosas, ramos de videiras e galhos florais em peÃ§as de mesa posta de luxo.",
      "Contornos temÃ¡ticos em bordados nÃ¡uticos, marinheiros e artigos de praia.",
      "DecoraÃ§Ã£o litÃºrgica em paramentos religiosos e toalhas de altar."
    ],
    "characteristics": [
      "Visual de passamanaria clÃ¡ssica sem necessidade de aparelhos mecÃ¢nicos especiais no cabeÃ§ote.",
      "Reflexo acetinado multidirecional que destaca o brilho nobre da linha de bordar.",
      "Alta flexibilidade que acompanha curvas sem deformar nem abrir frestas na curvatura."
    ],
    "commonErrors": [
      "â�Œ Programar o ponto tranÃ§ado com largura muito estreita (menos de 1,2 mm), fazendo os nÃ³s se fundirem em uma linha reta sem definiÃ§Ã£o",
      "â�Œ Usar linha fosca ou de baixa qualidade que esconde o relevo das facetas tranÃ§adas",
      "â�Œ Borda sobre tecidos muito felpados sem plÃ¡stico de cobertura (topping), permitindo que a felpa engula o relevo da tranÃ§a"
    ],
    "troubleshootingTips": [
      "Se a tranÃ§a parecer reta e sem textura: Aumente a largura do traÃ§o no software para 2,8 mm e aumente o Ã¢ngulo de inclinaÃ§Ã£o dos gomos.",
      "Se a linha arrebentar nas curvas da tranÃ§a: Reduza a velocidade para 700 PPM e verifique a afiaÃ§Ã£o da agulha.",
      "Se a felpa da toalha estiver cobrindo a corda: Coloque uma folha de plÃ¡stico hidrossolÃºvel por cima da toalha antes de bordar."
    ],
    "dicaArtrelados": "Para criar caules de flores que parecem brotar da toalha, use o Ponto TranÃ§ado em tom de verde musgo brilhante com linha trilobal: o efeito torcido dÃ¡ uma vida e um volume Ã  flor que nenhum ponto reto tradicional consegue igualar!",
    "voceSabia": "O cordÃ£o franciscano tradicional com trÃªs nÃ³s Ã© utilizado pelos frades da Ordem de SÃ£o Francisco desde o ano 1209 para simbolizar os votos sagrados de pobreza, castidade e obediÃªncia!",
    "practicalExercise": "No seu programa de bordado, trace um cÃ­rculo de 8 cm de diÃ¢metro e aplique o estilo 'Ponto TranÃ§ado / Rope Run' com 3 mm de largura. Borde em um retalho com linha dourada ou verde e sinta o relevo da cordinha com a ponta dos dedos!",
    "quickSummary": "Estilo de contorno que cruza pontos em padrÃ£o helicoidal, simulando cordÃµes torcidos e caules florais com nobreza e relevo.",
    "recommendedSettings": {
      "speedPPM": "700 a 800 PPM",
      "needleType": "75/11 Ponta Bola Leve (SES)",
      "stabilizer": "Entretela rasgÃ¡vel de 60g + Topping hidrossolÃºvel se for toalha"
    },
    "relatedTerms": [
      "Ponto de Corrida (Running Stitch)",
      "Contorno Duplo e Triplo / Ponto GrÃ£o de FeijÃ£o",
      "Cording / AplicaÃ§Ã£o Computadorizada de CordÃ£o Grosso",
      "Ponto Cheio (Satin Stitch)",
      "Linha de PoliÃ©ster Trilobal"
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
    "term": "DeformaÃ§Ã£o ViscoelÃ¡stica de Couros e SintÃ©ticos sob PerfuraÃ§Ã£o (Viscoelastic Leather Needle Creep)",
    "level": "AvanÃ§ado ðŸ”´",
    "category": "Tecidos & Estabilizadores",
    "grammarClass": "LocuÃ§Ã£o substantiva feminina composta por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do latim viscosus (pegajoso/com resistÃªncia a escoamento) e do grego elastikos (capaz de recuperar a forma). Conceito da fÃ­sica dos polÃ­meros e ciÃªncia dos materiais aplicado Ã  indÃºstria automotiva e calÃ§adista nos anos 1990.",
    "summary": "FenÃ´meno fÃ­sico onde couros legÃ­timos e materiais sintÃ©ticos (PU/PVC) deformam, fecham ou esgarÃ§am os furos da agulha de forma assimÃ©trica sob a traÃ§Ã£o contÃ­nua dos pontos de bordado.",
    "definition": "A deformaÃ§Ã£o viscoelÃ¡stica de couros naturais e laminados sintÃ©ticos sob perfuraÃ§Ã£o mecÃ¢nica (viscoelastic leather deformation and needle-hole creep, polymeric synthetic substrate relaxation dynamics) Ã© o comportamento elastoplÃ¡stico complexo exibido por couros vacuns e materiais sintÃ©ticos poliuretÃ¢nicos durante o processo de bordado computadorizado. Ao contrÃ¡rio de tecidos tramados convencionais (onde a agulha afasta os fios da trama), no couro a agulha corta e rompe permanentemente as fibras de colÃ¡geno ou o substrato nÃ£o-tecido; ao mesmo tempo, a viscoelasticidade do material faz com que as bordas dos furos continuem se deformando (relaxamento de tensÃ£o) horas apÃ³s o bordado, podendo causar rasgos contÃ­nuos se a densidade de pontos for excessiva ou se as pontas de corte da agulha nÃ£o forem adequadas.",
    "technicalDetails": "Couros automotivos e de estofamento apresentam comportamento viscoelÃ¡stico nÃ£o-linear. O protocolo tÃ©cnico exige a utilizaÃ§Ã£o de agulhas especiais com ponta de corte de formato triangular ou lenticular (Ponta LR para costura inclinada decorativa ou Ponta S para cortes longitudinais discretos) em calibres 80/12 ou 90/14. A densidade de pontos deve ser obrigatoriamente reduzida em 20% a 30% (espaÃ§amento nunca inferior a 0,50 mm) e o comprimento de ponto mÃ­nimo fixado em 2,5 mm para evitar o efeito de 'linha picotada de talÃ£o de cheque', que destacaria o couro.",
    "howItWorks": [
      "1. O digitalizador prepara a matriz para couro com densidade aliviada (0,50 mm a 0,55 mm) e comprimentos de ponto longos.",
      "2. O couro Ã© montado no bastidor sem esticar, utilizando entretela de recorte firme colada com spray de baixa aderÃªncia para nÃ£o manchar o verso.",
      "3. Instalam-se agulhas especiais de corte para couro (Schmetz ou Groz-Beckert ponta LR).",
      "4. A mÃ¡quina borda em velocidade moderada (500 a 650 PPM) para reduzir o aquecimento por atrito na lÃ¢mina da agulha.",
      "5. A peÃ§a Ã© finalizada mantendo a integridade mecÃ¢nica do couro, com pontos acetinados perfeitos e zero risco de rasgo no uso diÃ¡rio."
    ],
    "beginnerExplanation": "Couro legÃ­timo e courino sintÃ©tico nÃ£o sÃ£o como paninho de algodÃ£o que vocÃª pode furar Ã  vontade: cada furo de agulha no couro Ã© um corte definitivo que nunca mais fecha! Se vocÃª colocar pontos muito juntinhos, a mÃ¡quina corta o couro como se fosse uma folha de papel picotado de caderno. Com a programaÃ§Ã£o certa e a agulha especial para couro, o bordado fica chique, firme e dura a vida inteira sem rasgar!",
    "applications": [
      "Bordados automotivos em bancos de couro, volantes e encostos de cabeÃ§a de veÃ­culos de luxo.",
      "Jaquetas de couro legÃ­timo, coletes de motociclistas e botas de montaria.",
      "Bolsas, carteiras, cintos e artigos de marcenaria e maroquinaria fina.",
      "Estofamentos nÃ¡uticos em courvin impermeÃ¡vel e mÃ³veis corporativos de alto padrÃ£o."
    ],
    "characteristics": [
      "PreservaÃ§Ã£o total da resistÃªncia Ã  traÃ§Ã£o e durabilidade mecÃ¢nica do couro.",
      "EliminaÃ§Ã£o do risco de corte em cadeia (efeito picote de papel) no contorno bordado.",
      "Acabamento de luxo com pontos brilhantes e assentamento perfeito na superfÃ­cie do couro."
    ],
    "commonErrors": [
      "â�Œ Usar agulha ponta bola de malha em couro, que esmaga e rasga a flor do couro criando furos feios e esgarÃ§ados",
      "â�Œ Digitalizar letras pequenas com densidade alta (0,30 mm), cortando o couro em pedaÃ§os na mÃ¡quina",
      "â�Œ Prender o couro no bastidor com aperto mecÃ¢nico excessivo, deixando marcas circulares indelÃ©veis e permanentes"
    ],
    "troubleshootingTips": [
      "Se os furos da agulha parecerem muito grandes e abertos: Troque a agulha por um calibre mais fino (75/11 LR) e reduza ligeiramente a tensÃ£o da linha superior.",
      "Se o couro estiver rasgando na linha do contorno: Aumente imediatamente o espaÃ§amento entre os pontos no software para pelo menos 0,55 mm.",
      "Se a agulha aquecer e chiar ao penetrar no couro sintÃ©tico: Aplique uma gota de silicone lÃ­quido na passagem de linha ou use agulha anti-aderente revestida de Teflon."
    ],
    "dicaArtrelados": "Para bordar couro sem deixar nenhuma marca de aro, nunca prenda o couro dentro do bastidor com o parafuso: prenda apenas uma entretela de recorte grossa no bastidor, passe um pouquinho de spray temporÃ¡rio e cole o couro por cima (tÃ©cnica do bastidor flutuante)!",
    "voceSabia": "As grandes montadoras alemÃ£s de carros de luxo (como Porsche e Mercedes-Benz) submetem seus couros bordados a testes de laboratÃ³rio com mais de 100.000 ciclos de fricÃ§Ã£o mecÃ¢nica para aprovar a densidade de cada matriz de logotipo!",
    "practicalExercise": "Pegue um retalho de couro sintÃ©tico ou courino. Borde uma linha reta com ponto de corrida curto (1,0 mm) e outra linha com ponto longo (3,0 mm). Puxe as duas pontas com as mÃ£os com forÃ§a e observe como a linha curta rasga na hora e a longa aguenta firme!",
    "quickSummary": "Estudo do comportamento elÃ¡stico de couros sob perfuraÃ§Ã£o, exigindo agulhas de corte e densidades aliviadas para evitar rasgos.",
    "recommendedSettings": {
      "speedPPM": "500 a 650 PPM",
      "needleType": "80/12 ou 90/14 Ponta de Corte para Couro (LR / Leather Cutting Point)",
      "stabilizer": "Entretela de recorte (Cut-away) firme de 80g a 100g (montagem flutuante)"
    },
    "relatedTerms": [
      "Agulha para Couro (Leather Point / LR)",
      "Entretela de Recorte (Cut-away)",
      "Densidade de Ponto Cheio (Satin Density)",
      "TÃ©cnica de Bastidor Flutuante (Floating Method)",
      "Cera de Silicone LÃ­quido para Passagem de Linha"
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
    "term": "Divisor e Distribuidor de Linha em Guia-Fios AÃ©reos (Overhead Thread Guide Eyelet Array)",
    "level": "Fundamental ðŸŸ¢",
    "category": "Equipamentos e MÃ¡quinas",
    "grammarClass": "LocuÃ§Ã£o substantiva masculina composta por substantivo, adjetivo e locuÃ§Ãµes adjetivas.",
    "origin": "Do latim dividere (separar ordenadamente), distribuere (repartir) e do inglÃªs overhead thread guide (arranjo aÃ©reo de conduÃ§Ã£o de fios dos anos 1980).",
    "summary": "Conjunto de olhais cerÃ¢micos e hastes metÃ¡licas posicionadas no topo da mÃ¡quina que organizam e direcionam as linhas dos cones atÃ© os tensores sem cruzamentos ou nÃ³s.",
    "definition": "O divisor e distribuidor de linha em guia-fios aÃ©reos (overhead thread guide eyelet array, spool rack yarn separator tree, multi-needle aerial thread manifold) Ã© o conjunto de elementos de conduÃ§Ã£o e isolamento mecÃ¢nico posicionado na torre superior ou suporte de cones de mÃ¡quinas de bordar industriais e semiprofissionais. Composto por barras perfuradas, olhais de cerÃ¢mica sinterizada de zircÃ´nia e anÃ©is metÃ¡licos polidos, sua funÃ§Ã£o Ã© captar o fio desenrolado no topo do cone e conduzi-lo em Ã¢ngulo vertical reto atÃ© o sistema de prÃ©-tensores, impedindo que o turbilhÃ£o de ar ou a vibraÃ§Ã£o mecÃ¢nica faÃ§am linhas vizinhas se enroscarem, quebrem ou formem laÃ§adas soltas.",
    "technicalDetails": "Os olhais superiores sÃ£o revestidos com Ã³xido de zircÃ´nio ou titÃ¢nio polido espelhado (rugosidade Ra < 0,1 Âµm), eliminando o atrito abrasivo que desgastaria a linha ou geraria eletricidade estÃ¡tica. O posicionamento ideal do primeiro olhal aÃ©reo situa-se a uma distÃ¢ncia vertical de 2,5 a 3 vezes a altura do cone de linha, garantindo o desbobinamento suave pelo mÃ©todo de balÃ£o livre (ballooning clearance).",
    "howItWorks": [
      "1. Os cones de linha sÃ£o organizados na bandeja do suporte traseiro ou superior.",
      "2. Cada fio Ã© passado individualmente pelo olhal correspondente da barra guia aÃ©rea diretamente acima do cone.",
      "3. O fio desce alinhado e sem contato lateral com os cones vizinhos em direÃ§Ã£o aos tubos ou canaletas dos tensores.",
      "4. Durante a costura a 1.000 PPM, o fio se desenrola em formato de cone helicoidal contÃ­nuo sem chicotear.",
      "5. A mÃ¡quina opera continuamente com fluxo de linha regular e zero paradas por embaraÃ§o aÃ©reo."
    ],
    "beginnerExplanation": "SÃ£o aquelas 'hastes com furinhos lÃ¡ no alto da mÃ¡quina' por onde as linhas passam logo que saem dos cones! Elas servem para deixar cada linha no seu prÃ³prio caminho retinho, como uma avenida organizada, para que uma linha nÃ£o encoste na outra e nÃ£o dÃª nÃ³ no ar enquanto a mÃ¡quina borda bem rÃ¡pido!",
    "applications": [
      "OrganizaÃ§Ã£o de 12 a 15 cores simultÃ¢neas em mÃ¡quinas industriais multicabeÃ§otes.",
      "ConduÃ§Ã£o de fios especiais com alta torÃ§Ã£o ou propensÃ£o a enrolar (linhas metÃ¡licas e de lurex).",
      "ManutenÃ§Ã£o do Ã¢ngulo de entrada perfeito nos discos prÃ©-tensores superiores.",
      "ProteÃ§Ã£o contra o acÃºmulo de poeira e fiapos aÃ©reos nas passagens de linha."
    ],
    "characteristics": [
      "Olhais cerâmicos ultrassuaves que não esquentam nem desfiam a linha.",
      "Identificação numérica ou por cores correspondente a cada agulha do cabeçote."
    ]
  }
];

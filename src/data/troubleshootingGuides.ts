import { TroubleshootingGuide } from "../types";

export const ALL_TROUBLESHOOTING_GUIDES: TroubleshootingGuide[] = [
  // =========================================================================
  // 1. LINHAS & AGULHAS (10 GUIAS)
  // =========================================================================
  {
    id: "quebra-frequente-linha-superior",
    title: "Quebra Frequente da Linha Superior (Ruptura Repetitiva a Cada Poucos Pontos)",
    category: "Linhas & Agulhas",
    symptoms: [
      "A linha superior arrebenta repetidamente a cada 10 a 50 pontos bordados",
      "A ponta da linha partida fica com aspecto desfiado, esmagado ou em forma de 'pincel'",
      "A máquina para constantemente acusando falta de linha no cabeçote"
    ],
    probableCauses: [
      "Agulha com numeração inadequada para a espessura da linha (olho da agulha muito apertado)",
      "Agulha cega, torta ou com microfissuras / rebarbas no olho após contato com bastidor",
      "Passagem da linha superior incorreta (pulando guias ou enroscando no pino porta-carretel)",
      "Tensão superior excessivamente apertada ou cone de linha ressecado por luz solar/tempo"
    ],
    stepByStepSolution: [
      "1. Remova totalmente a linha superior e a agulha atual da máquina.",
      "2. Instale uma agulha nova e apropriada para bordado (ex: 75/11 para linha 120 / 40wt), garantindo que a parte chata do cabo fique voltada para trás.",
      "3. Verifique se o cone de linha gira livremente. Caso o fio fique laçando na base plástica, coloque uma redinha elástica de proteção.",
      "4. Refaça a passagem completa da linha com o pé calcador LEVANTADO (para abrir os discos de tensão).",
      "5. Reduza a tensão da linha superior em 0.5 a 1.0 ponto no painel ou no disco tensor."
    ],
    preventiveAdvice: "Troque a agulha a cada 8 a 10 horas contínuas de bordado e armazene os cones em gaveteiros escuros e protegidos de poeira.",
    recommendedProductsOrSettings: {
      needle: "75/11 H-E ou DBxK5 (Bordado)",
      tension: "Reduzir 0.5 ponto na tensão superior",
      speed: "600 a 700 PPM"
    }
  },
  {
    id: "quebra-agulha-durante-bordado",
    title: "Agulha Quebrando Repentinamente Durante o Bordado",
    category: "Linhas & Agulhas",
    symptoms: [
      "Agulha quebra com estalo seco ao penetrar o tecido ou a entretela",
      "A agulha bate na chapa de agulha, no aro do bastidor ou na laçadeira",
      "Ponta da agulha entorta visivelmente após bordar áreas densas"
    ],
    probableCauses: [
      "Agulha fina demais (ex: 65/9) tentando perfurar tecidos pesados (jeans, sarja, couro sintético)",
      "Bastidor esbarrou no pé calcador devido a matriz maior que o campo útil de bordado",
      "Tecido muito solto no bastidor provocando efeito de repuxo e deflexão da agulha",
      "Matriz com acúmulo excessivo de pontos sobrepostos (superdensidade concentrada)"
    ],
    stepByStepSolution: [
      "1. Desligue a máquina imediatamente e recolha TODOS os pedaços quebrados da agulha (inclusive na caixa da bobina).",
      "2. Verifique se a chapa de agulha sofreu alguma marcação ou furo por impacto. Se houver rebarba, lixe delicadamente com lixa d'água 1200.",
      "3. Substitua por uma agulha mais encorpada (80/12 ou 90/14 ponta bola ou ponta lança conforme o material).",
      "4. Aperte o parafuso do fixador de agulha com chave de fenda apropriada (não aperte apenas com os dedos).",
      "5. Faça a simulação de traçado da matriz (Trace) para garantir que a agulha não tocará no aro do bastidor."
    ],
    preventiveAdvice: "Utilize agulhas reforçadas (titânio ou cabos industriais DBxK5) ao trabalhar com bonés, jaquetas jeans e tecidos estruturados.",
    recommendedProductsOrSettings: {
      needle: "80/12 ou 90/14 Reforçada / Titânio",
      speed: "550 a 600 PPM",
      stabilizer: "Entretela rasga-fácil 80g ou 2 camadas"
    }
  },
  {
    id: "pontos-pulados-falha-lacada",
    title: "Pontos Pulados (Máquina Não Laça e Deixa Espaços Vazios no Bordado)",
    category: "Linhas & Agulhas",
    symptoms: [
      "Falhas contínuas de pontos criando 'buracos' no meio de letras ou contornos",
      "A linha não forma laçada por baixo do tecido e fica solta por cima",
      "A máquina costura no vazio sem fixar a linha na entretela"
    ],
    probableCauses: [
      "Agulha inserida na altura incorreta (não encaixada até o topo do bloco de agulha)",
      "Agulha torta ou com a cava (rebaixo traseiro) virada para o lado errado",
      "Efeito flutuação do tecido (fabric flagging) por falta de entretela firme ou calcador muito alto",
      "Tempo de sincronismo entre a agulha e a ponta da laçadeira ligeiramente adiantado/atrasado"
    ],
    stepByStepSolution: [
      "1. Solte o parafuso da agulha e empurre-a completamente até o limite superior do pino de fixação.",
      "2. Certifique-se de que a ranhura longa fique virada para frente e a cava (rebaixo) fique virada exatamente para trás/laçadeira.",
      "3. Se estiver bordando malha elástica, adicione entretela hidrossolúvel por cima ou utilize agulha ponta bola (Ball Point SES).",
      "4. Verifique a altura do calcador quando a agulha estiver no ponto mais baixo (deve haver folga de 0.5 a 1 mm sobre o tecido)."
    ],
    preventiveAdvice: "Nunca utilize agulhas de costura doméstica convencional com canaletas estreitas em bordado eletrônico de alta rotação.",
    recommendedProductsOrSettings: {
      needle: "Organ 75/11 Ball Point (SES) ou Schmetz Embroidery",
      stabilizer: "Entretela termocolante ou filme solúvel no topo",
      speed: "650 PPM"
    }
  },
  {
    id: "linha-metalica-desfiando-partindo",
    title: "Linha Metálica / Lurex Desfiando, Torcendo e Arrebentando",
    category: "Linhas & Agulhas",
    symptoms: [
      "A lâmina metálica externa descasca revelando a alma de poliéster do fio",
      "A linha forma espirais ('kinks') e torções antes de entrar no guia-fio",
      "Quebra a cada 100 pontos em alta velocidade"
    ],
    probableCauses: [
      "Uso de agulha comum com olho pequeno gerando atrito excessivo na película metalizada",
      "Velocidade da máquina muito alta gerando calor e fricção",
      "Tensão superior excessivamente apertada",
      "Fio desenrolando com torção ao sair do cone posicionado na vertical"
    ],
    stepByStepSolution: [
      "1. Troque imediatamente a agulha por uma agulha específica para fios metálicos (Metallic / Topstitch 80/12 ou 90/14) com olho 2x mais longo e polido.",
      "2. Reduza a velocidade de bordado da máquina para 400 a 500 PPM.",
      "3. Diminua a tensão da linha superior em 1.0 a 2.0 pontos (deve correr quase livre de resistência).",
      "4. Posicione o cone de linha a pelo menos 40 cm de distância ou use suporte horizontal com redinha protetora de malha fina.",
      "5. Aplique um leve toque de silicone líquido puro no cone para lubrificar a passagem."
    ],
    preventiveAdvice: "Sempre diminua a densidade da matriz em 15% a 20% no software ao planejar bordar com fios metálicos.",
    recommendedProductsOrSettings: {
      needle: "Metallic / Topstitch 80/12 ou 90/14",
      speed: "400 a 500 PPM",
      tension: "Reduzir 1.5 pontos na tensão superior"
    }
  },
  {
    id: "agulha-superaquecendo-derretendo-linha",
    title: "Aquecimento Excessivo da Agulha Derretendo Linha Sintética ou Furando Tecido",
    category: "Linhas & Agulhas",
    symptoms: [
      "Linha de poliéster derrete na ponta da agulha formando uma bolinha plástica dura",
      "O tecido sintético (microfibra, tactel, nylon) fica com bordas queimadas ao redor dos furos",
      "Ruídos de atrito 'chiado' em bordados contínuos de alta velocidade"
    ],
    probableCauses: [
      "Velocidade contínua acima de 850 PPM em materiais densos ou com termocolante",
      "Uso de entretelas adesivas de baixa qualidade que deixam resíduo de cola na haste da agulha",
      "Falta de revestimento antiaderente na agulha para materiais técnicos"
    ],
    stepByStepSolution: [
      "1. Limpe a haste da agulha com pano umedecido em álcool isopropílico para retirar a goma de cola.",
      "2. Troque por uma agulha com revestimento de Nitreto de Titânio (TIN) ou agulha Super Universal / Anti-Glue.",
      "3. Reduza a velocidade máxima da máquina para 600 PPM.",
      "4. Se estiver usando cola temporária em spray, pulverize a pelo menos 30 cm de distância e aguarde 30 segundos antes de posicionar o tecido."
    ],
    preventiveAdvice: "Em tecidos sintéticos e impermeáveis, prefira agulhas cromadas ou de titânio que dissipam melhor o calor por atrito.",
    recommendedProductsOrSettings: {
      needle: "Organ Titanium PD ou Schmetz Super Non-Stick 75/11",
      speed: "550 a 600 PPM"
    }
  },
  {
    id: "linha-desfiando-antes-olho-agulha",
    title: "Linha Desfiando em 'Cabelinho de Anjo' ou Esponja Antes do Olho da Agulha",
    category: "Linhas & Agulhas",
    symptoms: [
      "A linha vai acumulando fiapos até formar uma bucha felpuda logo acima do furo da agulha",
      "O filamento externo se rompe e corre para trás, travando o estica-fio",
      "Perda de brilho e pontos irregulares"
    ],
    probableCauses: [
      "Rebarba microscópica no olho da agulha ou na chapa de agulha cortando filamentos individuais",
      "Linha de bordar de baixa qualidade com torção desuniforme (fios soltos)",
      "Agulha muito fina para a gramatura da linha (ex: linha 40 com agulha 60/8)"
    ],
    stepByStepSolution: [
      "1. Substitua a agulha por uma nova e de marca conceituada (Organ, Schmetz ou Groz-Beckert).",
      "2. Passe um fio de linha de algodão encerado ou dental na ranhura da chapa de agulha para checar se há 'dentes' prendendo o fio.",
      "3. Teste o fio com outra agulha de calibre imediatamente superior (ex: passar de 70/10 para 75/11).",
      "4. Certifique-se de que a linha superior seja 100% poliéster trilobal filamentar específico para bordado."
    ],
    preventiveAdvice: "Evite utilizar sobras de linhas guardadas há anos sem embalagem plástica, pois a umidade e a poeira degradam o acabamento do fio.",
    recommendedProductsOrSettings: {
      needle: "75/11 Embroidery H-E",
      speed: "650 PPM"
    }
  },
  {
    id: "agulha-torta-deflexao-alta-densidade",
    title: "Deflexão da Agulha (Entortando ao Penetrar Camadas Espessas ou Ponto Tatami Denso)",
    category: "Linhas & Agulhas",
    symptoms: [
      "A agulha faz barulho de batida oca na chapa de agulha ao passar por áreas de tatami grosso",
      "Pontos começam a ficar desiguais e os furos ficam ovalados",
      "A ponta da agulha perde o corte e fica amassada"
    ],
    probableCauses: [
      "Agulha padrão flexível tentando perfurar múltiplas camadas de entretela + tecido pesado",
      "Velocidade excessiva empurrando a agulha para o lado durante o deslocamento rápido do bastidor",
      "Haste da agulha fina demais para a densidade programada na matriz"
    ],
    stepByStepSolution: [
      "1. Descarte a agulha torta (nunca tente desentortar agulha de bordar com alicate).",
      "2. Utilize uma agulha de cabo reforçado (DBxK5 industrial ou System 130/705 H-E de calibre 80/12 ou 90/14).",
      "3. Reduza a velocidade nos blocos de ponto de tatami denso.",
      "4. Se você programa as matrizes, aumente o espaçamento de densidade de 0.35mm para 0.42mm."
    ],
    preventiveAdvice: "Faça o teste de rotação da agulha em uma superfície de vidro plano para identificar empenamentos invisíveis a olho nu.",
    recommendedProductsOrSettings: {
      needle: "80/12 ou 90/14 Haste Reforçada",
      speed: "600 PPM"
    }
  },
  {
    id: "linha-bobina-arrebentando-dentro-caixilho",
    title: "Linha da Bobina / Linha Inferior Arrebentando Constantemente no Fundo",
    category: "Linhas & Agulhas",
    symptoms: [
      "A máquina continua bordando alguns pontos sem laçar e avisa que a bobina acabou ou partiu",
      "A ponta da linha da bobina fica presa dentro do trilho do caixilho",
      "A bobina não gira livremente dentro da caixa"
    ],
    probableCauses: [
      "Rebarba plástica ou amassado na carcaça da caixa de bobina",
      "Uso de carretel de bobina incompatível (altura ou diâmetro incorreto para a marca da máquina)",
      "Linha de bobina de algodão grosso ou fio desfibrado que enrosca na mola tensora"
    ],
    stepByStepSolution: [
      "1. Retire a caixa da bobina e inspecione as bordas plásticas com a ponta do dedo buscando ranhuras ou rebarbas.",
      "2. Utilize exclusivamente bobinas originais de acrílico transparente da altura especificada pelo fabricante (ex: Class 15 / SA156 para Brother ou específica Janome).",
      "3. Utilize linha de bobina de filamento contínuo de poliéster título 60wt ou 70wt (fio fino e resistente).",
      "4. Certifique-se de que a bobina gire no sentido horário/anti-horário conforme o manual da sua máquina."
    ],
    preventiveAdvice: "Dê preferência a bobinas pré-bobinadas industriais de filamento contínuo com laterais magnéticas ou plásticas.",
    recommendedProductsOrSettings: {
      tension: "Linha de bobina 60wt / 70wt 100% poliéster",
      speed: "650 PPM"
    }
  },
  {
    id: "buracos-grandes-ao-redor-ponto",
    title: "Furos Excessivamente Largos / Buracos no Tecido ao Redor das Perfurações da Agulha",
    category: "Linhas & Agulhas",
    symptoms: [
      "O tecido fica esburacado ao longo do contorno, parecendo picote de papel",
      "Fios da trama do tecido são cortados e desfiados pela agulha",
      "Após a lavagem, o bordado se desprende do tecido pelos furos"
    ],
    probableCauses: [
      "Agulha com ponta de corte (Leather / Agulha de couro) sendo usada em tecido plano ou malha",
      "Calibre de agulha grosso demais (ex: 90/14 ou 100/16) em tecidos delicados (cambraia, microfibra, seda)",
      "Agulha com ponta cega que perfura empurrando e rasgando as fibras em vez de afastá-las"
    ],
    stepByStepSolution: [
      "1. Troque para agulha 65/9 ou 70/10 Ponta Bola Fina (SES / Light Ball Point) em malhas e tecidos leves.",
      "2. NUNCA utilize agulhas de ponta cortante (tipo espada, lança ou cortante de couro) em tecidos têxteis normais.",
      "3. Use entretela rasga-fácil encorpada por baixo para apoiar a fibra do tecido contra o impacto do furo.",
      "4. Reduza a densidade dos pontos de contorno na programação para diminuir a frequência de batidas por milímetro."
    ],
    preventiveAdvice: "Em tecidos finos, utilize sempre a menor agulha que aceite a linha utilizada (ex: linha 120 com agulha 65/9 ou 70/10).",
    recommendedProductsOrSettings: {
      needle: "65/9 ou 70/10 Ponta Bola Fina (SES)",
      stabilizer: "Entretela rasga-fácil média 50g a 60g"
    }
  },
  {
    id: "rebarba-olho-agulha-desgaste",
    title: "Desgaste Prematuro ou Microrrebarba no Olho da Agulha Cortando o Filamento da Linha",
    category: "Linhas & Agulhas",
    symptoms: [
      "A linha rompe sem motivo aparente logo após acelerar a máquina",
      "O fio corta com corte reto e perfeito, parecendo tesoura",
      "Trocar a linha e a tensão não resolve o problema"
    ],
    probableCauses: [
      "Agulha utilizada por mais de 12 horas acumulou desgaste abrasivo pela passagem de 500.000 pontos",
      "A agulha raspou na chapa durante uma quebra anterior e criou um dente afiado no orifício",
      "Agulhas genéricas sem polimento interno no canalete do olho"
    ],
    stepByStepSolution: [
      "1. Substitua imediatamente a agulha por uma nova da cartela original.",
      "2. Faça o teste do fio: passe a linha pelo olho da agulha fora da máquina e deslize-a em ângulo de 45°; se o fio travar ou desfiar, a agulha deve ser descartada.",
      "3. Mantenha um contador ou controle de horas de uso de cada agulha no ateliê."
    ],
    preventiveAdvice: "Considere a agulha como um insumo descartável de baixo custo; trocá-la regularmente evita prejuízos em peças de alto valor.",
    recommendedProductsOrSettings: {
      needle: "75/11 H-E Schmetz / Organ Original",
      speed: "650 PPM"
    }
  },

  // =========================================================================
  // 2. TENSÃO & CAIXILHO (10 GUIAS)
  // =========================================================================
  {
    id: "ninho-linha-inferior-embolamento",
    title: "Ninho de Linha (Embolamento Emaranhado Gigante Embaixo do Tecido)",
    category: "Tensão & Caixilho",
    symptoms: [
      "Uma bucha enorme de linha emaranhada se forma por baixo da chapa de agulha",
      "A máquina trava bruscamente com barulho de motor forçado",
      "O bastidor fica preso e não se move no pantógrafo"
    ],
    probableCauses: [
      "A linha superior foi passada com o calcador ABAIXADO (os pratos de tensão não se abriram e a linha ficou com tensão ZERO)",
      "A linha superior escapou da alavanca estica-fio durante o bordado",
      "Falta total de tensão superior permitindo que a laçadeira puxe metros de fio descontroladamente"
    ],
    stepByStepSolution: [
      "1. Pare a máquina e corte com cuidado as linhas do ninho por baixo com tesoura curva (nunca puxe com força para não empenar o eixo da laçadeira).",
      "2. Retire o bastidor, remova a chapa de agulha e limpe todos os restos de linha presos no caixilho.",
      "3. LEVANTE o pé calcador da máquina.",
      "4. Repasse a linha superior desde o primeiro guia até a agulha, certificando-se visualmente de que a linha entrou na ALAVANCA ESTICA-FIO.",
      "5. Abaixe o calcador e puxe o fio com a mão para sentir a resistência firme da tensão antes de recomeçar."
    ],
    preventiveAdvice: "REGRA DE OURO DA OFICINA: Nunca passe a linha superior com o calcador abaixado.",
    recommendedProductsOrSettings: {
      tension: "Verificar passagem no estica-fio",
      speed: "600 PPM"
    }
  },
  {
    id: "linha-bobina-branca-aparecendo-em-cima",
    title: "Linha da Bobina Branca Brotou / Aparecendo no Topo do Bordado",
    category: "Tensão & Caixilho",
    symptoms: [
      "Pequenos pontos brancos ou a linha da bobina inteira aparecem na frente do bordado colorido",
      "O topo do ponto cheio (satin) fica com o centro esbranquiçado",
      "O bordado perde a cobertura da cor principal"
    ],
    probableCauses: [
      "Tensão da linha superior excessivamente APERTADA puxando a linha da bobina para cima",
      "Tensão da linha de bobina excessivamente FROUXA (linha inferior sem resistência)",
      "A linha da bobina escapou da mola tensora da caixa de bobina ao ser colocada",
      "Acúmulo de poeira ou penugem na mola de tensão da caixa de bobina impedindo o fechamento da mola"
    ],
    stepByStepSolution: [
      "1. Retire a caixa da bobina e passe um pedaço de linha ou cartão fino por baixo da lâmina de metal para remover sujeiras.",
      "2. Ao recolocar a bobina, segure a bobina com o dedo e puxe o fio pela fenda até ouvir/sentir o 'clique' da mola tensora.",
      "3. Faça o teste de tensão no verso do bordado (regra de 1/3): deve haver 1/3 de cor nas bordas e 1/3 de branco centralizado no verso.",
      "4. Se o branco persistir em cima, afrouxe a tensão superior no painel (diminua 0.5 a 1.0 ponto)."
    ],
    preventiveAdvice: "Realize o teste dos pontos 'I' ou teste do alfabeto (FOX) sempre que trocar a marca ou lote de linha.",
    recommendedProductsOrSettings: {
      tension: "Equilibrar tensão superior e inferior (Regra 1/3)",
      speed: "650 PPM"
    }
  },
  {
    id: "pontos-frouxos-lacadas-soltas-topo",
    title: "Laçadas Frouxas e Pontos Soltos no Topo do Desenho (Looping Superior)",
    category: "Tensão & Caixilho",
    symptoms: [
      "Os pontos ficam soltos, com laçadas levantadas na superfície como se fossem alças",
      "O bordado fica sem nitidez, com letras borradas e sem definição",
      "Ao passar a mão sobre o bordado, sente-se fios desprendidos"
    ],
    probableCauses: [
      "Tensão da linha superior frouxa demais",
      "A linha superior saiu de dentro dos pratos tensores no meio do processo",
      "Cone de linha travando intermitentemente e soltando de repente",
      "Mola de checagem do estica-fio sem ação elástica"
    ],
    stepByStepSolution: [
      "1. Aumente a tensão da linha superior em 0.5 a 1.0 ponto no regulador de tensão.",
      "2. Verifique se a linha está bem encaixada entre os discos tensores puxando levemente o fio.",
      "3. Coloque uma redinha elástica no cone para regular a saída uniforme da linha.",
      "4. Verifique se o calcador está assentando corretamente na espessura do tecido."
    ],
    preventiveAdvice: "Não deixe carretéis pequenos soltos em suportes altos sem o disco de fixação adequado para o tamanho do carretel.",
    recommendedProductsOrSettings: {
      tension: "Aumentar 0.5 a 1.0 ponto na tensão superior",
      speed: "600 PPM"
    }
  },
  {
    id: "caixa-bobina-pulando-girando-fora",
    title: "Caixa da Bobina (Caixilho) Pulando Fora do Trilho ou Girando em Falso",
    category: "Tensão & Caixilho",
    symptoms: [
      "A caixa de bobina salta de posição e a agulha bate direto no plástico",
      "Barulho alto de engasgo no sistema de laçadeira",
      "Marcas profundas de perfuração de agulha na carcaça do caixilho"
    ],
    probableCauses: [
      "O batente/retentor da caixa de bobina não foi encaixado na posição correta após a limpeza",
      "Poeira e fiapos compactados na pista circular da laçadeira empurrando o caixilho para cima",
      "Ponta da laçadeira atingiu o caixilho por atraso no sincronismo mecânico"
    ],
    stepByStepSolution: [
      "1. Retire a caixa de bobina e limpe minuciosamente o leito metálico da laçadeira com pincel seco.",
      "2. Examine o caixilho: se houver furos ou ranhuras profundas causadas pela agulha, ele precisará ser trocado (ou polido com lixa 1500 se for levíssimo).",
      "3. Ao reinstalar o caixilho, alinhe a marca triangular/ponto de referência do caixilho com a marcação correspondente na carcaça da máquina.",
      "4. Gire o volante manualmente por 2 voltas completas para confirmar que o caixilho permanece estável sem pular."
    ],
    preventiveAdvice: "Sempre verifique o alinhamento das marcas de posição ao remontar a caixa de bobina após cada limpeza.",
    recommendedProductsOrSettings: {
      speed: "600 PPM",
      tension: "Alinhamento das marcas de fábrica do caixilho"
    }
  },
  {
    id: "desbalanceamento-proporcao-um-terco",
    title: "Descalibração da Coluna de Tensão (Fora da Regra 1/3 - 1/3 - 1/3 no Verso)",
    category: "Tensão & Caixilho",
    symptoms: [
      "No verso do ponto satin (coluna), vê-se apenas linha colorida ou apenas linha branca",
      "Bordado fica repuxado de um lado e solto do outro",
      "Dificuldade de padronizar a qualidade entre diferentes cabeçotes ou máquinas"
    ],
    probableCauses: [
      "Tensão da bobina descalibrada (muito apertada ou muito frouxa na mola lamelar)",
      "Falta de padronização na tensão superior para diferentes tipos de fios",
      "Uso de linhas de bobina com gramaturas diferentes sem reajuste"
    ],
    stepByStepSolution: [
      "1. Borde uma coluna teste de ponto cheio (Satin) com 5mm de largura e 50mm de comprimento.",
      "2. Olhe o verso da coluna bordada: o correto é ter 1/3 de cor na esquerda, 1/3 de branco de bobina no centro e 1/3 de cor na direita.",
      "3. Se houver mais de 50% de branco no verso: a tensão superior está muito solta ou a da bobina muito apertada.",
      "4. Se quase não houver branco no verso (menos de 20%): a tensão superior está muito apertada ou a da bobina muito solta.",
      "5. Ajuste primeiro o parafuso pequeno da caixa de bobina em frações de 1/8 de volta (como os ponteiros de um relógio)."
    ],
    preventiveAdvice: "Use um tensiômetro de bobina (tipo Towa) para calibrar a tensão inferior na faixa ideal de 20g a 25g (ou 120mN a 150mN).",
    recommendedProductsOrSettings: {
      tension: "Calibrar para 1/3 cor | 1/3 branco | 1/3 cor no verso",
      speed: "650 PPM"
    }
  },
  {
    id: "fio-bobina-preso-mola-tensora",
    title: "Resíduo de Linha ou Cola Preso sob a Mola Lamelar de Tensão da Caixa de Bobina",
    category: "Tensão & Caixilho",
    symptoms: [
      "A linha da bobina sai completamente solta, sem nenhuma resistência, mesmo apertando o parafuso",
      "Embolamento instantâneo de linha inferior logo no primeiro ponto",
      "Tensão irregular que oscila a cada movimento do bastidor"
    ],
    probableCauses: [
      "Microfiapos de linha ou resíduos de adesivo/spray presos debaixo da mola de metal da caixa de bobina",
      "A mola lamelar perdeu a pressão por excesso de aperto anterior"
    ],
    stepByStepSolution: [
      "1. Retire a caixa de bobina da máquina e retire o carretel.",
      "2. Pegue um pedaço de linha de bordar dobrada (ou um cartão de visita de papel firme) e passe delicadamente por baixo da mola de metal da caixinha.",
      "3. Deslize para a frente e para trás para 'varrer' qualquer sujeira invisível alojada sob a lâmina.",
      "4. Passe um pincel macio com álcool isopropílico para retirar resíduos pegajosos de cola em spray.",
      "5. Recoloque a bobina e sinta se a tração voltou ao normal."
    ],
    preventiveAdvice: "Nunca use agulhas de aço afiadas para raspar a mola da caixinha, pois qualquer arranhão no metal inutiliza a peça.",
    recommendedProductsOrSettings: {
      tension: "Higienização da mola lamelar da caixa de bobina",
      speed: "650 PPM"
    }
  },
  {
    id: "bobina-mal-enrolada-esponjosa",
    title: "Bobina Mal Enrolada, Fofa, Esponjosa ou Cônica Trancando a Saída do Fio",
    category: "Tensão & Caixilho",
    symptoms: [
      "A bobina aperta e trava dentro da caixinha antes de terminar a linha",
      "Ao apertar a bobina com os dedos, ela afunda parecendo uma esponja macia",
      "A linha dá 'trancos' na saída provocando arrebentamento"
    ],
    probableCauses: [
      "A bobina foi enchida no enchedor da máquina sem passar pelo disco tensor do enchedor",
      "Velocidade de enchimento muito alta causando aquecimento e deformação plástica do carretel",
      "Fio enrolado com folga excessiva"
    ],
    stepByStepSolution: [
      "1. Descarte ou desenrole a bobina mal cheia (uma bobina de bordado deve ser firme e dura como madeira).",
      "2. Ao encher a bobina, certifique-se de que a linha passe bem justa dentro do disco tensor de enrolamento.",
      "3. Encha a bobina até cerca de 80% a 85% de sua capacidade máxima (nunca deixe transbordar as abas).",
      "4. Se possível, utilize bobinas prontas industriais (bobinas pré-bobinadas) que possuem enrolamento de fábrica com precisão milimétrica."
    ],
    preventiveAdvice: "Utilize bobinas pré-bobinadas descartáveis de papel ou magnéticas para garantir 100% de uniformidade na tensão.",
    recommendedProductsOrSettings: {
      tension: "Bobinas pré-bobinadas de filamento contínuo",
      speed: "650 PPM"
    }
  },
  {
    id: "pratos-tensao-superior-travados",
    title: "Sujeira ou Fio Preso entre os Discos/Pratos Tensores Superiores (Tensão Nula)",
    category: "Tensão & Caixilho",
    symptoms: [
      "Mesmo colocando a tensão no número máximo (9.0), a linha continua frouxa e solta",
      "A linha não oferece resistência alguma ao ser puxada com o calcador abaixado",
      "Embolamentos graves na parte inferior do bastidor"
    ],
    probableCauses: [
      "Pedaço de linha arrebentada anteriormente ficou preso dentro dos discos internos de tensão",
      "Acúmulo de cera e parafina desprendida de linhas de baixa qualidade entre os discos tensores"
    ],
    stepByStepSolution: [
      "1. Levante o pé calcador da máquina.",
      "2. Pegue um pedaço de linha de bordado (cerca de 50 cm), dê 3 a 4 nós espaçados no fio.",
      "3. Passe esse fio com os nós pelo caminho dos discos de tensão (como se fosse fio dental), puxando para frente e para trás.",
      "4. Os nós arrastarão qualquer pedaço de linha ou resíduo preso entre os pratos.",
      "5. Abaixe o calcador e teste novamente a tração manual."
    ],
    preventiveAdvice: "Passe o 'fio dental' nos tensores a cada mês para manter os pratos sempre limpos e livres de ceras.",
    recommendedProductsOrSettings: {
      tension: "Limpeza com fio nodoso nos pratos tensores",
      speed: "650 PPM"
    }
  },
  {
    id: "tencao-excessiva-repuxando-pontos-satin",
    title: "Tensão Superior Excessiva Estrangulando e Deformando Colunas de Ponto Cheio (Satin)",
    category: "Tensão & Caixilho",
    symptoms: [
      "As colunas de ponto cheio ficam finas e 'estranguladas', menores do que no desenho original",
      "O tecido enruga fortemente nas pontas das letras",
      "O bordado fica duro como uma pedra e enverga a peça"
    ],
    probableCauses: [
      "Regulador de tensão superior ajustado em valor excessivamente alto para o tipo de tecido",
      "Linha passando duplamente em algum guia ou enroscada no eixo do carretel"
    ],
    stepByStepSolution: [
      "1. Reduza a tensão superior em 1.0 a 1.5 pontos no painel da máquina.",
      "2. Verifique se o pino porta-carretel está com a tampa plástica do diâmetro correto (se for grande demais, a linha prende na borda).",
      "3. Verifique se o tecido está estabilizado com entretela suficiente para suportar a tensão de recolhimento dos pontos."
    ],
    preventiveAdvice: "Em tecidos leves e médios, trabalhe sempre com a tensão superior no limite mínimo que mantenha os pontos definidos sem folgas.",
    recommendedProductsOrSettings: {
      tension: "Reduzir tensão superior em 1.0 a 1.5",
      speed: "600 PPM"
    }
  },
  {
    id: "mola-recuperadora-quebrada-descalibrada",
    title: "Mola de Checagem / Estica-Fio Auxiliar (Check Spring) Danificada ou Travada",
    category: "Tensão & Caixilho",
    symptoms: [
      "A linha fica frouxa no momento exato em que a agulha penetra o tecido",
      "Pontos com pequenas laçadas aleatórias no contorno mesmo com tensão calibrada",
      "A mola fina de arame ao lado do tensor não oscila para cima e para baixo"
    ],
    probableCauses: [
      "Mola de checagem (Check Spring) quebrou, entortou ou acumulou fiapos no batente",
      "Curso da mola descalibrado após batida ou uso prolongado"
    ],
    stepByStepSolution: [
      "1. Observe a pequena mola de arame no caminho da linha superior enquanto a máquina borda lentamente: ela deve descer e subir suavemente amortecendo o tranco da linha.",
      "2. Se a mola estiver imóvel ou presa, limpe a fenda ao redor com pincel seco.",
      "3. Se a mola estiver partida, ela precisará ser substituída por uma peça de reposição original."
    ],
    preventiveAdvice: "Nunca puxe a linha com força para trás no sentido contrário à passagem para não forçar a mola de checagem.",
    recommendedProductsOrSettings: {
      speed: "600 PPM",
      tension: "Verificação da mola de checagem"
    }
  },

  // =========================================================================
  // 3. BASTIDOR & PROGRAMAÇÃO (10 GUIAS)
  // =========================================================================
  {
    id: "enrugamento-franzimento-tecido",
    title: "Franzimento e Enrugamento do Tecido ao Redor do Bordado (Puckering)",
    category: "Bastidor & Programação",
    symptoms: [
      "O tecido ao redor do bordado forma ondas, rugas e pregas permanentes",
      "Após retirar o bastidor, o bordado encolhe e a peça fica repuxada",
      "Visual deformado e peças tortas"
    ],
    probableCauses: [
      "Colocação incorreta no bastidor: o tecido foi esticado e puxado com as mãos após fechar o aro (efeito elástico)",
      "Entretela fraca ou insuficiente para a gramatura do tecido e quantidade de pontos da matriz",
      "Falta de compensação de encolhimento (Pull Compensation) na programação da matriz",
      "Densidade excessivamente alta com pontos muito curtos"
    ],
    stepByStepSolution: [
      "1. Ao montar no bastidor: aperte o parafuso e encaixe o aro interno com o tecido totalmente plano e relaxado (NUNCA puxe as bordas do tecido após encaixar o bastidor).",
      "2. Troque a entretela: para tecidos finos ou malhas, use 2 camadas de entretela de boa gramatura (60g a 80g) ou entretela rasga-fácil encorpada.",
      "3. No software de matrizes, aumente a 'Compensação de Encolhimento' (Pull Compensation) para 0.35mm a 0.45mm.",
      "4. Certifique-se de que a matriz possua pontos de ancoragem/suporte (Underlay) adequados antes do preenchimento principal."
    ],
    preventiveAdvice: "O tecido no bastidor deve ficar firme como uma pele de tambor, mas sem estar esticado além do seu estado natural de repouso.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela rasga-fácil 80g ou 2 camadas de 50g",
      needle: "75/11 Ponta Bola SES",
      speed: "600 PPM"
    }
  },
  {
    id: "deslocamento-contorno-fora-preenchimento",
    title: "Contorno Deslocado Saindo Fora do Preenchimento (Falta de Registro / Gaps)",
    category: "Bastidor & Programação",
    symptoms: [
      "O contorno preto ou externo fica afastado do preenchimento colorido, deixando um espaço em branco",
      "O desenho fica com partes 'desencaixadas' como se tivessem escorregado",
      "O defeito aumenta progressivamente quanto maior for o tamanho do bordado"
    ],
    probableCauses: [
      "Tecido escorregou no bastidor durante as vibrações das batidas de agulha",
      "Falta de compensação de repuxo (Pull Compensation) nas colunas de contorno no software",
      "Ordem de bordado incorreta: bordar primeiro todas as partes externas e os contornos por último",
      "Uso de entretela que estica ou que se rompe antes do fim do bordado"
    ],
    stepByStepSolution: [
      "1. Utilize entretela firme e certifique-se de que o bastidor esteja bem apertado (se o tecido for liso, encape o aro interno com fita crepe ou fita de tecido para criar aderência).",
      "2. No software de programação, agrupe o preenchimento e seu contorno imediato para bordarem juntos, em vez de deixar todos os contornos para o final.",
      "3. Adicione uma boa camada de pontos de suporte (Underlay tipo Tatami ou Contorno Duplo) para travar o tecido na entretela antes de bordar a cor final.",
      "4. Aumente a sobreposição entre o preenchimento e o contorno para pelo menos 1.0 mm a 1.5 mm."
    ],
    preventiveAdvice: "Em bordados grandes (acima de 13x18cm), borde sempre do centro para as extremidades da matriz.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela rasga-fácil firme com cola temporária",
      speed: "600 PPM"
    }
  },
  {
    id: "marca-funda-bastidor-hoop-burn",
    title: "Marca Funda e Brilho Indesejado do Bastidor no Tecido (Hoop Burn)",
    category: "Bastidor & Programação",
    symptoms: [
      "Fica um anel marcado e amassado ao redor do bordado que não sai com ferro de passar",
      "Tecidos como veludo, piquê, moletom ou toalha ficam com a felpa esmagada e brilhosa",
      "Perda estética da peça pronta"
    ],
    probableCauses: [
      "Aperto excessivo do parafuso do bastidor diretamente sobre tecidos sensíveis à pressão",
      "Prender tecidos felpudos ou estruturados sem proteção de entretela no aro superior"
    ],
    stepByStepSolution: [
      "1. Utilize a técnica de 'Flutuação' (Floating): coloque apenas a entretela no bastidor e fixe o tecido por cima usando spray adesivo temporário ou fita dupla-face.",
      "2. Se for prender no bastidor tradicional, forre o aro com tiras de feltro fino ou tecido de algodão para amortecer a pressão.",
      "3. Para recuperar tecidos já marcados: borrife um pouco de vapor de água ou vinagre branco diluído a 10% e passe escovinha de cerdas macias na direção da fibra.",
      "4. Utilize bastidores magnéticos para tecidos muito delicados."
    ],
    preventiveAdvice: "Toalhas felpudas, veludos e tecidos sintéticos nunca devem ser prensados no bastidor com aperto forçado; use flutuação.",
    recommendedProductsOrSettings: {
      stabilizer: "Técnica de Flutuação com Spray Temporário 505",
      speed: "650 PPM"
    }
  },
  {
    id: "pontos-afundando-tecido-felpudo",
    title: "Pontos Afundando e Sumindo em Toalhas Felpudas, Veludo, Malha Piquê ou Fleece",
    category: "Bastidor & Programação",
    symptoms: [
      "As letras pequenas somem no meio dos fios da toalha ou do tecido peludo",
      "O bordado fica com aspecto ralo e os pelos do tecido sobressaem no meio dos pontos",
      "Perda total da nitidez dos detalhes"
    ],
    probableCauses: [
      "Falta de película de entretela hidrossolúvel (Solvy / Filme Hidrossolúvel) por CIMA do tecido",
      "Falta de camada de ponto de suporte (Underlay tipo grade/tatami leve) para calçar a felpa"
    ],
    stepByStepSolution: [
      "1. Coloque uma folha de plástico filme hidrossolúvel (Solvy / Entretela Hidrossolúvel transparente) sobre o tecido antes de iniciar o bordado.",
      "2. A película mantém a felpa abaixada e permite que a linha de bordado assente perfeitamente no topo.",
      "3. No software, ative a opção de 'Ponto de Grade' ou 'Base de Teto' (Knockdown Stitch) antes das letras.",
      "4. Após terminar, retire o excesso de plástico e dissolva os restos borrifando um pouco de água limpa."
    ],
    preventiveAdvice: "Em qualquer tecido com textura, pelo ou relevo, o uso de plástico hidrossolúvel no topo é obrigatório.",
    recommendedProductsOrSettings: {
      stabilizer: "Filme Hidrossolúvel (Top) + Entretela Rasga-Fácil (Base)",
      needle: "75/11 Ponta Bola SES",
      speed: "600 PPM"
    }
  },
  {
    id: "densidade-excessiva-efeito-papelao",
    title: "Matriz Excessivamente Densa Virando 'Placa Dura de Papelão' ou Rasgando a Peça",
    category: "Bastidor & Programação",
    symptoms: [
      "O bordado fica extremamente duro, pesado e inflexível como uma casca de plástico",
      "A agulha bate com dificuldade e a linha arrebenta constantemente no centro do desenho",
      "O tecido se rompe e corta ao longo dos contornos densos"
    ],
    probableCauses: [
      "Espaçamento de ponto muito estreito na programação (ex: 0.25mm a 0.30mm de densidade)",
      "Múltiplas camadas de preenchimentos sobrepostos sem eliminação de pontos ocultos (overlap)",
      "Redução do tamanho da matriz no painel da máquina sem recalcular a quantidade de pontos"
    ],
    stepByStepSolution: [
      "1. No software de matrizes, ajuste o espaçamento de densidade padrão para 0.40mm a 0.45mm.",
      "2. Utilize a ferramenta de 'Remover Pontos Ocultos' (Remove Overlaps) para deletar pontos de camadas inferiores que ficam cobertas.",
      "3. Nunca reduza matrizes em mais de 10% a 15% diretamente no painel da máquina sem software que recalcule os pontos proporcionalmente.",
      "4. Reduza a densidade dos pontos de suporte (Underlay)."
    ],
    preventiveAdvice: "Bordados confortáveis em roupas de bebê e vestuário devem ter toque leve e densidades bem arejadas.",
    recommendedProductsOrSettings: {
      tension: "0.40mm a 0.45mm de espaçamento",
      needle: "75/11 H-E",
      speed: "650 PPM"
    }
  },
  {
    id: "falta-pontos-suporte-underlay",
    title: "Falta de Pontos de Suporte / Subcamada (Underlay) Causando Afundamento e Falhas",
    category: "Bastidor & Programação",
    symptoms: [
      "O preenchimento final fica ralo e com o fundo do tecido aparecendo por baixo dos pontos",
      "As colunas de ponto cheio se abrem e perdem a estrutura geométrica",
      "O bordado perde volume e relevo visual"
    ],
    probableCauses: [
      "A matriz foi programada sem pontos de suporte (Underlay desativado no software)",
      "Uso de apenas um ponto corrido simples centralizado em colunas largas de satin"
    ],
    stepByStepSolution: [
      "1. No software, ative a camada de Underlay em todos os objetos de preenchimento e colunas.",
      "2. Para colunas de ponto cheio: utilize suporte em 'Zigzag' ou 'Contorno Duplo' (Edge Walk).",
      "3. Para preenchimentos em tatami: utilize suporte em grade perpendicular (Tatami 90° ou Ponto Grade).",
      "4. O suporte prende a fibra do tecido na entretela criando uma fundação sólida para a camada de cobertura."
    ],
    preventiveAdvice: "Pense no ponto de suporte como as vigas e a fundação de uma casa: sem ele, o acabamento desmorona.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela rasga-fácil 60g",
      speed: "650 PPM"
    }
  },
  {
    id: "encolhimento-push-pull-nao-compensado",
    title: "Deformação por Efeito Push-Pull (Puxa-Empurra) Não Compensado no Software",
    category: "Bastidor & Programação",
    symptoms: [
      "Círculos perfeitos no computador viram ovais distorcidos no bordado físico",
      "Retângulos ficam com as laterais afuniladas como uma 'cintura de ampulheta'",
      "Linhas retas ficam curvas e abauladas"
    ],
    probableCauses: [
      "Falta de compreensão da física do bordado: a linha puxa o tecido na direção dos pontos e empurra na direção perpendicular",
      "Ausência de compensação de repuxo (Pull Compensation) configurada no programa de matriz"
    ],
    stepByStepSolution: [
      "1. No software de matrizes, configure a Compensação de Repuxo (Pull Compensation) entre 0.30mm e 0.50mm.",
      "2. Ao programar círculos, estenda ligeiramente o desenho em 5% na direção em que os pontos puxam o tecido para compensar a retração mecânica.",
      "3. Alterne a direção angular dos pontos entre blocos adjacentes para neutralizar as forças de tração do fio."
    ],
    preventiveAdvice: "Sempre borde um piloto de teste em tecido idêntico antes de produzir em série para calibrar a compensação.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela de boa estabilidade dimensional",
      speed: "600 PPM"
    }
  },
  {
    id: "tecido-escapando-bordas-bastidor",
    title: "Tecido Escapando ou Afrouxando das Bordas do Bastidor no Meio do Trabalho",
    category: "Bastidor & Programação",
    symptoms: [
      "O tecido vai ficando frouxo e cedendo conforme a máquina acelera",
      "As margens do tecido saem de dentro do bastidor",
      "Perda de tensão superficial no tecido gerando pregas e perda de registro"
    ],
    probableCauses: [
      "Tecido cortado com sobras muito pequenas nas bordas do bastidor (menos de 3 cm de borda)",
      "Parafuso do bastidor não foi apertado adequadamente ou aro plástico escorregadio",
      "Tecidos sedosos ou acetinados sem atrito nos aros"
    ],
    stepByStepSolution: [
      "1. Deixe sempre uma margem mínima de 4 a 5 cm de tecido e entretela para fora de todos os lados do bastidor.",
      "2. Encape o aro interno do bastidor com fita crepe ou viés de algodão para aumentar o atrito mecânico.",
      "3. Aperte o parafuso do bastidor com auxílio de uma chave adequada sem forçar a rosca plástica.",
      "4. Se a peça de tecido for pequena, emende faixas de tecido provisórias nas laterais (técnica de extensão) ou use entretela adesiva de flutuação."
    ],
    preventiveAdvice: "Nunca economize entretela a ponto de deixá-la no limite exato do aro do bastidor.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela com margem de 5cm",
      speed: "600 PPM"
    }
  },
  {
    id: "salto-ponto-longo-puxando-tecido",
    title: "Pontos de Salto (Jumps) Longos Sem Ponto de Amarração Repuxando as Formas",
    category: "Bastidor & Programação",
    symptoms: [
      "Fios compridos de salto entre uma letra e outra repuxam o tecido quando a máquina acelera",
      "Pontos finais de palavras se desmancham após o corte manual dos fios",
      "Linha solta sendo capturada e costurada por baixo de outras cores"
    ],
    probableCauses: [
      "A matriz foi programada sem comandos de 'Ponto de Amarração' (Tie-In e Tie-Off)",
      "Máquinas sem cortador automático acumulando fios de salto de mais de 30mm sem amarração"
    ],
    stepByStepSolution: [
      "1. No software de matrizes, configure 'Pontos de Amarração' automáticos no início (Tie-In) e no fim (Tie-Off) de cada objeto.",
      "2. Utilize amarrações discretas em estrela ou 3 pontos curtos de 0.8mm escondidos sob a coluna de satin.",
      "3. Em máquinas sem corte automático, pause a máquina após os primeiros 3 pontos de cada letra e corte a ponta da linha inicial com tesoura de ponta curva."
    ],
    preventiveAdvice: "Configure a máquina para cortar automaticamente qualquer salto superior a 2mm ou 3mm se seu modelo tiver trimmer.",
    recommendedProductsOrSettings: {
      speed: "650 PPM",
      tension: "Configurar Tie-In e Tie-Off na matriz"
    }
  },
  {
    id: "direcao-pontos-conflitante-ondulacao",
    title: "Direção Incorreta da Inclinação dos Pontos Causando Ondulações no Tecido",
    category: "Bastidor & Programação",
    symptoms: [
      "Superfícies de preenchimento amplo ficam com ondulações visíveis como lombadas",
      "A luz reflete de maneira fosca e desuniforme no mesmo bloco de cor",
      "A peça entorta na diagonal"
    ],
    probableCauses: [
      "Ângulos de ponto paralelos à trama elástica de malhas sem ponto de sustentação cruzado",
      "Preenchimentos extensos com apenas um ângulo de ponto uniforme em toda a extensão do desenho"
    ],
    stepByStepSolution: [
      "1. Programe os ângulos de ponto preferencialmente a 45° em relação aos eixos ortogonais (urdume e trama) do tecido.",
      "2. Em matrizes grandes, divida blocos maciços em seções menores com ângulos levemente diferenciados para distribuir as forças mecânicas de tração.",
      "3. Utilize pontos de suporte com ângulo oposto (90° em relação à camada superior) para criar estabilidade bidirecional."
    ],
    preventiveAdvice: "Evite ângulos de ponto a 0° ou 90° exatos em tecidos elásticos, pois eles acentuam a deformação do tecido.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela multidirecional de boa qualidade",
      speed: "650 PPM"
    }
  },

  // =========================================================================
  // 4. MECÂNICA & AJUSTES (10 GUIAS)
  // =========================================================================
  {
    id: "barulho-estalo-mecanica-cabecote",
    title: "Barulho Anormal, Ruído Seco ou Estalo no Cabeçote / Lançadeira",
    category: "Mecânica & Ajustes",
    symptoms: [
      "Ruído metálico 'tec-tec' ou estalos secos a cada descida da agulha",
      "Vibração excessiva no cabeçote ou máquina 'pesada' ao rodar",
      "Aquecimento incomum na área da laçadeira ou corte automático travando"
    ],
    probableCauses: [
      "Acúmulo severo de fiapos compactados e poeira de entretela na pista da laçadeira",
      "Falta de lubrificação na pista da laçadeira rotativa / oscilante",
      "Pontas de agulha quebrada ou restos de linha presos atrás do cesto da bobina",
      "Chapa de agulha frouxa ou parafusos da barra de agulhas com folga"
    ],
    stepByStepSolution: [
      "1. Desligue a máquina de bordar e retire o bastidor e a agulha por segurança.",
      "2. Desparafuse a chapa de agulha e retire a caixa de bobina.",
      "3. Remova toda a sujeira e 'feltro' de linha acumulado na laçadeira usando pincel macio ou aspirador portátil (nunca sopre com a boca para não oxidar com umidade).",
      "4. Pingue APENAS 1 gota de óleo mineral branco específico para máquina de bordar na pista de rolamento da laçadeira rotativa.",
      "5. Gire o volante manualmente no sentido correto por 3 voltas completas para distribuir o óleo e monte novamente a chapa."
    ],
    preventiveAdvice: "Higienize e coloque 1 gota de óleo na laçadeira no início de cada jornada de bordado (a cada 4 a 8 horas de operação).",
    recommendedProductsOrSettings: {
      speed: "600 PPM",
      tension: "Revisão periódica a cada 6 meses"
    }
  },
  {
    id: "desalinhamento-pantografo-perda-posicao",
    title: "Deslocamento / Perda de Posição do Eixo X/Y (Pantógrafo Travando)",
    category: "Mecânica & Ajustes",
    symptoms: [
      "O bordado pula de posição repentinamente no meio da matriz",
      "Braço do bastidor dá um tranco seco ou trava em movimento rápido",
      "A máquina continua bordando no ar ou fora da área correta do bastidor"
    ],
    probableCauses: [
      "O bastidor esbarrou fisicamente na parede, carretéis, suporte ou na própria bordadeira durante o salto",
      "Velocidade de deslocamento muito alta com bastidor grande e pesado",
      "Correia dentada do eixo X ou Y com folga, poeira de linha acumulada nas guias lineares",
      "Queda de energia ou micro-interrupção elétrica sem salvamento do ponto exato"
    ],
    stepByStepSolution: [
      "1. Pare a máquina imediatamente. Verifique se não há obstáculos ao redor da mesa ou cabos prendendo o movimento do bastidor.",
      "2. No painel da máquina, acerte o centro do bastidor e use a função de 'Traçar Área / Trace' para certificar o raio de movimento livre.",
      "3. Se a máquina perdeu os pontos, utilize a função 'Retornar Pontos' no painel (recuar 50 a 100 pontos) até a posição exata onde o desenho foi interrompido.",
      "4. Limpe os trilhos do pantógrafo e verifique se o bastidor está bem travado no engate do carrinho.",
      "5. Reduza a velocidade geral em matrizes volumosas ou bastidores grandes (ex: 20x30cm) para 550 a 650 PPM."
    ],
    preventiveAdvice: "Mantenha um raio de 40 cm totalmente livre ao redor de toda a máquina e nunca apoie tesouras ou réguas na bancada de deslocamento do bastidor.",
    recommendedProductsOrSettings: {
      speed: "550 PPM a 650 PPM em bastidores grandes",
      stabilizer: "Engate firme no carrinho"
    }
  },
  {
    id: "sensor-linha-falso-positivo",
    title: "Sensor de Linha Apitando sem Parar (Falso Positivo de Quebra de Linha)",
    category: "Mecânica & Ajustes",
    symptoms: [
      "A máquina para de bordar acusando que a linha acabou ou arrebentou, mas a linha ainda está na agulha",
      "Alarme sonoro constante a cada 10 ou 20 pontos de bordado"
    ],
    probableCauses: [
      "A linha não está girando a roldana sensora superior por falta de atrito ou passagem fora da ranhura",
      "Sujeira ou poeira cobrindo o sensor óptico de rotação da linha ou sensor da bobina",
      "Linha de bobina muito frouxa ou carretel rodando solto demais sem passar pelo guia pré-tensão"
    ],
    stepByStepSolution: [
      "1. Retire a linha superior e repasse com cuidado, certificando-se de dar a volta completa na rodinha do sensor superior (se sua máquina possuir roldana sensora).",
      "2. Limpe a área do sensor com um pincel antiestático ou jato de ar seco para remover penugem acumulada.",
      "3. Verifique se o cone de linha superior está fluindo suavemente sem prender na base de plástico.",
      "4. Nas configurações do painel da máquina, verifique a sensibilidade do sensor de linha (ajuste para sensibilidade média se estiver em alta)."
    ],
    preventiveAdvice: "Use redinha de carretel em cones de linha solta para evitar laços frouxos que enganem os sensores de passagem.",
    recommendedProductsOrSettings: {
      speed: "650 PPM",
      tension: "Passagem correta na roldana sensora"
    }
  },
  {
    id: "descalibracao-sincronismo-lancadeira-hook-timing",
    title: "Desalinhamento do Ponto de Sincronismo da Lançadeira (Hook Timing Atrasado ou Adiantado)",
    category: "Mecânica & Ajustes",
    symptoms: [
      "A máquina não laça nenhum ponto em nenhuma linha ou agulha",
      "A ponta da laçadeira colide diretamente contra a haste da agulha",
      "Aparecimento de rebarbas profundas na ponta da laçadeira"
    ],
    probableCauses: [
      "Forte impacto da agulha na chapa ou no bastidor deslocou a engrenagem cônica da laçadeira no eixo principal",
      "Parafusos de fixação do eixo da laçadeira afrouxaram após vibração contínua"
    ],
    stepByStepSolution: [
      "1. Faça o teste visual: gire o volante manualmente até a agulha atingir o Ponto Morto Inferior (PMI) e subir cerca de 1.8mm a 2.0mm (formando o laço de linha).",
      "2. Nesse instante exato, a ponta da laçadeira deve estar posicionada no centro da cava (rebaixo) da agulha, cerca de 0.5mm a 1.0mm acima do olho da agulha.",
      "3. A distância lateral entre a ponta da laçadeira e a cava da agulha deve ser de 0.05mm a 0.10mm (a espessura de uma folha de papel fino, sem tocar na agulha).",
      "4. Caso o tempo esteja desalinhado, o ajuste deve ser feito soltando os parafusos do pinhão da laçadeira e recalibrando com chave allen apropriada."
    ],
    preventiveAdvice: "Evite puxar o bastidor enquanto a agulha estiver penetrada no tecido para não forçar o eixo do sincronismo.",
    recommendedProductsOrSettings: {
      speed: "600 PPM",
      tension: "Calibragem milimétrica do Hook Timing"
    }
  },
  {
    id: "cortador-automatico-fio-falhando",
    title: "Cortador Automático de Linha (Trimmer) Não Corta ou Desfia as Pontas",
    category: "Mecânica & Ajustes",
    symptoms: [
      "A máquina faz o barulho de corte mas a linha permanece inteira entre os saltos de cor",
      "A faca corta apenas a linha superior e deixa a linha de bobina presa",
      "Mensagem de erro de cortador travado no painel da máquina"
    ],
    probableCauses: [
      "Faca móvel ou faca fixa com resíduo de cola, feltro de entretela ou fiapos acumulados no mecanismo",
      "Faca cega ou com dente quebrado por impacto com agulha partida",
      "Mola do gancho pegador de linha descalibrada"
    ],
    stepByStepSolution: [
      "1. Retire a chapa de agulha e a caixa de bobina.",
      "2. Localize a lâmina da faca do cortador sob a chapa e faça limpeza profunda com pincel e álcool isopropílico para retirar a cola.",
      "3. Verifique com uma lente de aumento se a lâmina da faca possui cortes ou amassados.",
      "4. Pingue 1 gota de óleo no pivô de articulação do braço do cortador (nunca na lâmina de corte).",
      "5. No menu de manutenção/diagnóstico da máquina, acione a função 'Manual Trim Test' para testar o ciclo de corte a seco."
    ],
    preventiveAdvice: "Evite excesso de cola spray no bastidor, pois a cola pulverizada é a principal vilã que emperra as lâminas do cortador automático.",
    recommendedProductsOrSettings: {
      speed: "600 PPM",
      tension: "Limpeza periódica do conjunto de corte"
    }
  },
  {
    id: "calcador-altura-incorreta-flagging",
    title: "Altura Incorreta do Pé Calcador Causando Efeito Flutuação (Fabric Flagging)",
    category: "Mecânica & Ajustes",
    symptoms: [
      "O tecido sobe e desce junto com a agulha durante cada batida (efeito mola / vibração vertical)",
      "Pontos pulados constantes e quebra de agulha em tecidos grossos (moletom, toalha)",
      "Bordado com aspecto amassado e frouxo"
    ],
    probableCauses: [
      "A altura de repouso do calcador está alta demais (mais de 1.5mm acima da superfície do tecido)",
      "O pé calcador está muito baixo e arrasta no tecido esmagando a peça"
    ],
    stepByStepSolution: [
      "1. Gire o volante manualmente até a agulha atingir o Ponto Morto Inferior (posição mais baixa).",
      "2. Observe a folga entre a sola do pé calcador e a superfície superior do tecido: o espaço ideal deve ser de 0.5mm a 1.0mm (o suficiente para o tecido deslizar sem vibrar para cima).",
      "3. Ajuste o parafuso de altura da barra do calcador (ou ajuste pelo botão de altura do calcador no painel digital de máquinas modernas).",
      "4. Para tecidos muito volumosos (quilt, toalha felpuda), eleve ligeiramente a altura no painel (de 1.0mm para 1.5mm a 2.0mm)."
    ],
    preventiveAdvice: "Sempre reajuste a altura do calcador no painel ao alternar entre tecidos finos (ex: cetim) e materiais espessos (ex: toalha felpuda).",
    recommendedProductsOrSettings: {
      needle: "75/11 ou 80/12",
      speed: "600 PPM"
    }
  },
  {
    id: "barra-agulha-folga-desalinhamento",
    title: "Folga Lateral ou Desalinhamento da Barra de Agulha",
    category: "Mecânica & Ajustes",
    symptoms: [
      "A agulha oscila para a esquerda e direita ao tocar o tecido",
      "A ponta da agulha não entra perfeitamente centralizada no orifício da chapa",
      "Ruído de 'chocalho' na parte superior do cabeçote"
    ],
    probableCauses: [
      "Bucha guia da barra de agulha desgastada por falta de lubrificação a longo prazo",
      "Parafusos do bloco condutor da barra de agulha com folga mecânica"
    ],
    stepByStepSolution: [
      "1. Com a máquina desligada e sem agulha, segure a ponta da barra de agulha e tente movimentá-la lateralmente: não deve haver jogo perceptível.",
      "2. Verifique se a agulha desce exatamente no centro do furo redondo da chapa de agulha.",
      "3. Aplique uma gota de óleo fino na barra de agulha e faça o curso manual subindo e descendo.",
      "4. Se houver folga estrutural na bucha, será necessária a troca da bucha da barra por um técnico especializado."
    ],
    preventiveAdvice: "Mantenha a barra de agulhas limpa de resíduos e lubrificada com 1 gota de óleo a cada 40 horas de trabalho.",
    recommendedProductsOrSettings: {
      speed: "600 PPM",
      tension: "Inspeção de folga da barra de agulhas"
    }
  },
  {
    id: "aquecimento-motor-pantografo-eixos",
    title: "Aquecimento Anormal do Motor de Passo dos Eixos X/Y ou Travamento por Poeira",
    category: "Mecânica & Ajustes",
    symptoms: [
      "A carcaça lateral ou traseira da máquina fica excessivamente quente ao toque",
      "O pantógrafo perde passos e emite um zumbido elétrico agudo sem conseguir movimentar o bastidor",
      "Cheiro de componente elétrico sobrecarregado"
    ],
    probableCauses: [
      "Guias lineares e eixos do pantógrafo engripados por poeira têxtil misturada com óleo ressecado",
      "Operação ininterrupta por mais de 6 horas em ambiente com temperatura ambiente acima de 32°C",
      "Correias do motor excessivamente esticadas gerando sobrecarga mecânica"
    ],
    stepByStepSolution: [
      "1. Desligue a máquina imediatamente e deixe esfriar por 30 minutos em local ventilado.",
      "2. Limpe os trilhos de guia linear dos eixos X e Y com pano limpo e seco, retirando toda a graxa velha escurecida.",
      "3. Aplique uma camada finíssima de graxa branca de lítio ou lubrificante sintético específico para guias lineares de precisão.",
      "4. Movimente o braço manualmente com a máquina desligada para certificar que o curso está macio e sem pontos de atrito.",
      "5. Evite cobrir as saídas de ar e grades de ventilação da máquina com panos ou entretelas."
    ],
    preventiveAdvice: "Trabalhe em ambientes com temperatura amena e faça intervalos de 15 minutos a cada 3 a 4 horas de produção intensa.",
    recommendedProductsOrSettings: {
      speed: "550 a 650 PPM",
      tension: "Manutenção preventiva das guias lineares"
    }
  },
  {
    id: "limpeza-lubrificacao-oleo-graxa",
    title: "Manchas de Óleo no Tecido ou Falta de Lubrificação Preventiva nos Guias",
    category: "Mecânica & Ajustes",
    symptoms: [
      "Gotas de óleo escuro respingam no tecido claro ou na linha superior durante o bordado",
      "Peças de encomenda manchadas irreversivelmente",
      "Ou, no extremo oposto, a máquina começa a chiar por falta total de óleo"
    ],
    probableCauses: [
      "Excesso de óleo aplicado na barra de agulha ou nos rolamentos superiores",
      "Uso de óleos automotivos ou multiuso doméstico inadequados (tipo óleo de cozinha ou spray desengripante) em vez de óleo mineral branco de alta pureza"
    ],
    stepByStepSolution: [
      "1. REGRA DE OURO DO ÓLEO: Na máquina de bordar, 'Menos é Mais'. Uma única microgota basta no ponto correto.",
      "2. NUNCA utilize sprays desengripantes (WD-40 ou similares) dentro do mecanismo da máquina de bordar, pois eles ressecam as graxas especiais e atacam os componentes plásticos.",
      "3. Após qualquer lubrificação preventiva, borde uma matriz teste em retalho de tecido de algodão branco por 1.000 pontos antes de colocar a peça do cliente.",
      "4. Se manchar o tecido: aplique talco neutro ou giz branco imediatamente sobre a mancha para absorver o óleo, aguarde 20 minutos e lave com detergente neutro transparente."
    ],
    preventiveAdvice: "Utilize exclusivamente óleo mineral branco de grau têxtil ISO 10 a 22 (claríssimo e sem cheiro).",
    recommendedProductsOrSettings: {
      speed: "600 PPM",
      tension: "Óleo mineral têxtil de alta pureza (1 gota)"
    }
  },
  {
    id: "sensor-posicao-agulha-erro-parada",
    title: "Erro de Posicionamento da Agulha ao Parar (Não Para no Ponto Mais Alto - PMS)",
    category: "Mecânica & Ajustes",
    symptoms: [
      "Quando o bordado para ou há corte de linha, a agulha para afundada no tecido ou no meio do curso",
      "O bastidor tenta se movimentar com a agulha ainda engatada na chapa",
      "Erro de 'Needle Position Error' ou 'Sensor de Posição do Eixo Principal' no painel"
    ],
    probableCauses: [
      "Sensor óptico de posição do eixo principal (encoder / photo-interrupter) sujo de penugem",
      "Disco sincronizador do volante ligeiramente fora da fenda do sensor",
      "Queda de voltagem na rede elétrica descalibrando o ponto zero do motor"
    ],
    stepByStepSolution: [
      "1. Desligue a máquina da tomada por 1 minuto e ligue novamente para reiniciar a placa-mãe e o ciclo de calibração automática dos motores.",
      "2. No painel, pressione o botão de 'Posicionador de Agulha' (subir/descer) por 3 vezes para recalibrar a referência de topo.",
      "3. Se o erro persistir, abra a tampa lateral do volante e faça a limpeza do sensor óptico do encoder com ar comprimido seco.",
      "4. Conecte a máquina a um estabilizador de voltagem ou Nobreak senoidal para evitar flutuações da rede elétrica."
    ],
    preventiveAdvice: "Utilize sempre proteção elétrica (estabilizador ou Nobreak) para proteger os sensores eletrônicos de precisão.",
    recommendedProductsOrSettings: {
      speed: "600 PPM",
      tension: "Uso de Nobreak / Estabilizador de rede"
    }
  }
];

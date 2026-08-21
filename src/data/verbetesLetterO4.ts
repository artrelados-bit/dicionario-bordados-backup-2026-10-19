import { Verbete } from "../types";

export const VERBETES_LETTER_O_PART4: Verbete[] = [
  {
    id: "ondulacao-de-ponto-satim-curvo",
    code: "O-025",
    letter: "O",
    term: "Ondulação de Ponto Satim / Ponto Efeito Cetim Curvo (Curved Satin / Contour Stitch)",
    pronunciation: "on-du-la-ção de pon-to sa-tim / cur-vo",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Pontos Básicos & Decorativos",
    summary: "Técnica de programação onde as linhas de ponto cheio acompanham a curvatura orgânica de fitas, pétalas de flores e arabescos, gerando reflexos de luz em gradiente contínuo e volume tridimensional.",
    origin: "Derivado da clássica técnica manual de 'agulha de pintura' e bordado chinês de seda Su Xiu, digitalizado na década de 1980 com algoritmos de deformação paramétrica de curvas Bézier.",
    definition: "O Ponto Satim Curvo (ou Efeito Cetim de Contorno Ondulado / Turning Satin Stitch) é a modalidade de digitalização de colunas de ponto cheio cujas linhas de costura não são retas ou estáticas, mas variam seu ângulo de inclinação dinamicamente ao longo de uma curva guia (Stitch Angle Curve). À medida que a coluna faz curvas suaves ou acentuadas (como no caule de uma rosa, na fita de um laço ou na crina de um cavalo), o software calcula automaticamente o espaçamento das penetrações no raio interno e no raio externo, criando um efeito de relevo torcido e um brilho óptico cintilante de seda real.",
    howItWorks: [
      "1. O digitalizador desenha a forma da fita ou pétala usando a ferramenta de Coluna A / Coluna Complexa.",
      "2. Insere linhas guias de ângulo de ponto (Stitch Angles) ao longo de toda a extensão da curva.",
      "3. O software interpola os ângulos intermediários e ativa a compensação de raio de curvatura.",
      "4. No raio interno da curva, o software distribui as penetrações de forma escalonada (Auto-Split / Short Stitches) para evitar acúmulo de pontos.",
      "5. No raio externo, as linhas se abrem proporcionalmente sem perder a densidade de cobertura.",
      "6. A máquina costura o trajeto contínuo, entregando um acabamento acetinado brilhante e fluido."
    ],
    beginnerExplanation: "É quando o ponto cheio acompanha as curvinhas do desenho como se fosse uma fita de cetim de verdade fazendo ondas! Em vez dos pontos ficarem todos retos e duros na mesma direção, eles vão virando e curvando deitadinhos junto com a pétala da flor ou com o laço. A luz bate no fio brilhante e dá uma sensação maravilhosa de movimento e profundidade!",
    applications: [
      "Pétalas de flores, folhas botânicas, caules e espirais em monogramas clássicos",
      "Laços, fitas onduladas, flâmulas e faixas de texto em brasões",
      "Cabelos, crinas de animais, plumas e ondas do mar em bordados artísticos",
      "Letras cursivas elegantes e monogramas de casamento em toalhas nobres"
    ],
    technicalDetails: "Nas curvas acentuadas, o raio interno tende a acumular até 300% mais penetrações de agulha que o raio externo. O recurso de 'Pontos Curtos Automáticos' (Short Stitches / Staggered Needle Drops) deve estar obrigatoriamente ativado para fazer com que parte dos pontos pare antes de atingir a borda interna, evitando agulhas cegas e nós no tecido.",
    commonErrors: [
      "❌ Não colocar linhas de ângulo suficientes nas curvas fechadas, fazendo os pontos mudarem de direção bruscamente em quinas feias",
      "❌ Deixar desativado o filtro de pontos curtos nas curvas, furando e cortando o tecido no lado de dentro da curva",
      "❌ Fazer curvas com largura de satim muito estreita (menos de 1,0 mm), onde a curvatura não é perceptível",
      "❌ Usar ângulo perpendicular à curva em laços de fita, perdendo o efeito realista de torção tridimensional"
    ],
    troubleshootingTips: [
      "Se a linha embolar na parte de dentro da curva: Ative a ferramenta 'Pontos Curtos Automáticos' no software",
      "Se a curva parecer 'quebrada' ou facetada: Adicione mais 2 ou 3 linhas guia de ângulo de ponto no meio da curva",
      "Se o satim abrir frestas na borda de fora da curva: Aumente ligeiramente a densidade geral de 0,40 mm para 0,38 mm"
    ],
    dicaArtrelados: "Para fazer pétalas de rosa que parecem vivas: incline os ângulos de ponto sempre apontando para a base onde a pétala nasce! O reflexo da linha de poliéster vai criar uma sombra natural no centro e um brilho espetacular na ponta!",
    voceSabia: "Na China imperial da dinastia Song (século X), as bordadeiras eram proibidas de respirar forte sobre os fios de seda enquanto faziam pontos curvos para que a umidade do ar não alterasse o brilho da curvatura dos pontos!",
    practicalExercise: "Desenhe uma letra 'S' cursiva no software. Na versão A, aplique um ângulo reto único de 45° em toda a letra. Na versão B, adicione 8 ângulos de contorno acompanhando as curvas do 'S'. Compare as duas no simulador 3D e veja a enorme diferença estética.",
    quickSummary: "Pontos satim com ângulos graduais que acompanham curvas orgânicas, proporcionando brilho fluido e relevo tridimensional.",
    relatedTerms: ["Ponto Cheio (Satim)", "Ângulo de Ponto", "Filtro de Pontos Curtos", "Monogramas e Letras Clássicas"],
    tags: ["o-025", "satim curvo", "contour stitch", "angulos de ponto", "rosas", "brilho", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM INTERNATIONAL. Curved Satin, Stitch Angles & Advanced Column Manipulation. Wilcom User Guide, 2021.",
      "CHAMBERLAIN, L. The Art of Realistic Shading and Directional Stitching. Needlecraft Press, 2020."
    ]
  },
  {
    id: "organizacao-de-linhas-painel-cones",
    code: "O-026",
    letter: "O",
    term: "Organização de Linhas e Painel de Cones (Thread Stand & Cone Rack Setup)",
    pronunciation: "or-ga-ni-za-ção de li-nhas e pai-nel de co-nes",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Operação da Máquina",
    summary: "Sistema de suporte e roteamento de cones e carretéis de linha na máquina ou no ateliê, com guias verticais alinhados que garantem desenrolamento suave e sem nós de torção.",
    origin: "Do inglês 'thread stand' (porta-cones), derivado da arquitetura das fiações têxteis do século XIX e incorporado aos cabeçotes de bordadeiras industriais.",
    definition: "A Organização de Linhas e Suporte de Cones (Thread Stand & Tension Tower) é a estrutura mecânica posicionada na parte traseira ou superior da bordadeira responsável por acomodar os cones de 1.000m a 5.000m de linha de poliéster ou viscose. O sistema é composto por bases plásticas ou emborrachadas com pinos de retenção e uma haste telescópica vertical dotada de ilhoses guia-fio cerâmicos ou metálicos posicionados exatamente sobre o eixo central de cada cone (Overhead Guide). Essa geometria garante que a linha se desenrole verticalmente por desbobinamento axial ('take-off'), eliminando oscilações de tensão e nós de torção helicoidal.",
    howItWorks: [
      "1. O operador encaixa a base do cone no pino da bandeja, certificando-se de que o cone não fique bambo ou inclinado.",
      "2. Se o cone tiver tendência a desenrolar frouxo (linha muito escorregadia), coloca uma redinha elástica protetora (Thread Net).",
      "3. Puxa a linha verticalmente para cima e passa pelo ilhós da haste telescópica superior.",
      "4. O ilhós deve estar a uma altura de pelo menos 1,5 a 2 vezes a altura do cone para garantir um ângulo de desenrolamento perfeito.",
      "5. A linha desce pelas canaletas de pré-tensão, discos tensores, sensores de quebra e atinge a alavanca estica-fio.",
      "6. Durante o bordado a 900 PPM, a linha flui sem solavancos, sem laços de torção e com tensão rigorosamente constante."
    ],
    beginnerExplanation: "É aquela torre com anteninhas e suportes onde você coloca os cones grandes de linha na máquina! O segredo é que a linha precisa subir retinha para o ganchinho que fica bem em cima do cone antes de ir para a máquina. Se a linha sair torta ou cair da base, ela começa a enrolar nela mesma, dá nó e arrebenta toda hora!",
    applications: [
      "Montagem da sequência de cores em máquinas de 6, 10, 12 e 15 agulhas",
      "Uso de cones industriais grandes de 4.000m e 5.000m em máquinas domésticas com suporte externo",
      "Organização de mostruários de cores no ateliê para atendimento a clientes",
      "Prevenção de quebra de linha por desenrolamento travado em cones metálicos"
    ],
    technicalDetails: "O desenrolamento axial vertical a 1.000 PPM impõe à linha uma velocidade linear de até 15 a 20 metros por minuto. Se a distância entre o topo do cone e o ilhós superior for inferior a 12 cm, o ângulo de saída fechado cria o efeito de 'chicoteamento' (Ballooning Effect), gerando picos de tensão que provocam quebra da linha na agulha.",
    commonErrors: [
      "❌ Colocar cones grandes de 4.000m soltos em cima da mesa atrás da máquina doméstica sem suporte guia alto",
      "❌ Usar cones com a base plástica quebrada ou rachada, onde a linha enrosca e quebra a cada minuto",
      "❌ Não usar redinha elástica em linhas metálicas ou de filamento contínuo muito escorregadias",
      "❌ Deixar o cone balançando solto no pino sem a arruela de centragem emborrachada"
    ],
    troubleshootingTips: [
      "Se a linha desenrolar e cair na base do cone embolando no pino: Coloque uma redinha elástica de proteção (Thread Net) cobrindo o cone",
      "Se a linha quebrar com um estalo seco a cada poucos pontos: Verifique se a linha laçou ao redor da haste telescópica de metal",
      "Se você tiver máquina doméstica e quiser usar cones grandes: Adquira um suporte de cone externo de metal com haste alta (Porta-Fio de Mesa)"
    ],
    dicaArtrelados: "Para usar cones grandes e econômicos de 4.000m na sua máquina doméstica sem gastar nada: coloque o cone dentro de uma caneca pesada de café atrás da máquina e passe a linha por um clipe de papel aberto preso no alto! A linha sobe retinha e corre livre!",
    voceSabia: "Nas fábricas de alta velocidade no Japão, a torre de fios é climatizada com umidade controlada em 55% para que a eletricidade estática gerada pelo atrito da linha de poliéster em alta velocidade não atraia partículas de poeira!",
    practicalExercise: "Inspecione os cones de linha instalados na sua máquina. Verifique se as hastes telescópicas estão erguidas na altura máxima e se os ilhoses estão centralizados exatamente sobre o meio de cada cone.",
    quickSummary: "Suporte e alinhamento vertical dos cones de linha; garante desenrolamento contínuo sem solavancos nem nós de torção.",
    relatedTerms: ["Redinha para Cones de Linha (Thread Net)", "Sensor de Quebra de Linha", "Passagem de Linha", "Linha 100% Poliéster"],
    tags: ["o-026", "organizacao de linhas", "porta cones", "thread stand", "redinha", "desenrolamento", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS. Industrial Thread Stand Setup & Ballooning Dynamics. Technical Manual, 2021.",
      "TAJIMA SEWING MACHINERY. Thread Path Architecture & Tension Stability. Tajima Bulletin, 2020."
    ]
  },
  {
    id: "orificio-da-chapa-de-agulha",
    code: "O-027",
    letter: "O",
    term: "Orifício da Chapa de Agulha (Needle Plate Hole Diameter)",
    pronunciation: "o-ri-fí-ci-o da cha-pa de a-gu-lha",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Abertura usinada na chapa metálica inferior através da qual a agulha desce para atingir a lançadeira; seu diâmetro calibrado (1,6 mm a 2,2 mm) determina a precisão do ponto e a estabilidade contra afundamento de tecidos finos.",
    origin: "Do francês 'plaque à aiguille', componente padronizado desde a invenção da costura mecânica por Elias Howe e Isaac Singer no século XIX.",
    definition: "O Orifício da Chapa de Agulha (Needle Plate Hole / Throat Plate Aperture) é o furo usinado com tolerância micrométrica na chapa de aço temperado que cobre a lançadeira e o cortador de linha. Em bordadeiras computadorizadas, o orifício é rigorosamente circular (ao contrário das fendas ovais de máquinas de costura ziguezague). O diâmetro do furo varia tipicamente entre 1,6 mm (para tecidos finos e agulhas 65/9 a 75/11) e 2,2 mm a 2,5 mm (para bonés estruturados, couros e agulhas grossas 90/14 a 110/18). Chapas com furos danificados por marcas de agulha (burrs) causam desfiamento imediato da linha superior e quebras frequentes.",
    howItWorks: [
      "1. A agulha desce centralizada exatamente no ponto médio do orifício da chapa.",
      "2. O diâmetro calibrado do furo oferece suporte rígido ao redor da área de penetração do tecido.",
      "3. Impede que o tecido seja empurrado para dentro do compartimento da lançadeira (efeito de afundamento / funil).",
      "4. A linha superior desce livremente sem raspar nas bordas metálicas da chapa.",
      "5. A laçada é formada embaixo e o nó de amarração sobe sem atrito com a parede do furo.",
      "6. A chapa mantém a superfície de trabalho perfeitamente lisa e nivelada para o deslizamento do bastidor."
    ],
    beginnerExplanation: "É aquele furinho redondinho na chapinha de metal onde a agulha entra toda vez que bate! Ele tem que ser do tamanho certinho e estar lisinho como um espelho. Se a agulha quebrar e bater na beiradinha desse furo, ela faz uma rebarba de aço afiada que começa a raspar e arrebentar a sua linha toda hora!",
    applications: [
      "Substituição de chapas de agulha padrão por chapas de furo fino para tecidos delicados",
      "Uso de chapas de furo largo para bordados pesados em bonés e couro",
      "Inspeção e polimento com lixa d'água após colisão mecânica de agulha",
      "Prevenção do afundamento de tecidos de malha e seda para dentro da lançadeira"
    ],
    technicalDetails: "A folga radial recomendada entre a haste da agulha e o bordo do orifício da chapa é de 0,4 mm a 0,6 mm. Se a folga for superior a 1,0 mm em tecidos finos, ocorre o fenômeno de 'Puncturing Funnel' (o tecido é puxado para baixo no impacto da agulha, causando salto de laçada). Chapas industriais para bonés possuem perfil convexo elevado (High-Profile Cap Plate) para acompanhar a curvatura do boné.",
    commonErrors: [
      "❌ Continuar usando a chapa de agulha após uma colisão violenta sem verificar se o furo sofreu rebarba de aço afiada",
      "❌ Usar chapa de costura comum com fenda larga de ziguezague (de 5 mm ou 7 mm) para bordar tecidos finos, engolindo o tecido para a lançadeira",
      "❌ Borda boné duro com chapa de furo fino (1,4 mm), provocando quebra de agulha por deflexão mecânica contra a chapa",
      "❌ Limpar o furo da chapa com chaves de fenda de aço duro, riscando a superfície polida"
    ],
    troubleshootingTips: [
      "Se a linha começar a arrebentar a cada 100 pontos sem motivo aparente: Passe a unha ou um cotonete ao redor do furo da chapa; se desfiar o algodão, há uma rebarba afiada que precisa de polimento com lixa 1200",
      "Se a malha de camiseta for engolida para dentro do furo: Troque para uma chapa de furo fino (1,6 mm) ou use entretela recortável mais firme",
      "Se a agulha quebrar em bonés: Instale uma chapa de agulha reforçada com furo de 2,2 mm para bonés"
    ],
    dicaArtrelados: "O 'teste do cotonete' Artrelados: sempre que uma agulha quebrar na sua máquina, desligue tudo, pegue um cotonete e passe suavemente na borda interna do furinho da chapa. Se puxar fiapinho de algodão, passe uma lixa d'água bem fininha enrolada num palito para tirar a rebarba antes de colocar a agulha nova!",
    voceSabia: "As chapas de agulha de bordadeiras industriais japonesas são temperadas a mais de 800°C com tratamento de endurecimento superficial por nitretação a plasma para atingir dureza superior a 60 HRC na escala Rockwell!",
    practicalExercise: "Retire a chapa de agulha da sua máquina. Olhe o furo contra uma lâmpada e passe a ponta do dedo com delicadeza. Observe a ausência de rebarbas e a perfeição circular do orifício.",
    quickSummary: "Orifício circular da chapa inferior; deve ser calibrado (1,6-2,2 mm) e polido sem rebarbas para não desfiar a linha.",
    relatedTerms: ["Chapa de Agulha", "Lançadeira Rotativa", "Deflexão da Agulha", "Manutenção Preventiva"],
    tags: ["o-027", "orificio da chapa", "chapa de agulha", "needle plate", "rebarba", "manutencao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA SERVICE DIVISION. Needle Plate Specifications, Aperture Sizing & Burr Removal. Tokyo, 2021.",
      "HIROSE HOOKS. The Interaction between Needle Clearance and Throat Plate Geometry. Osaka, 2020."
    ]
  },
  {
    id: "overcut-compensacao-pre-corte-aplique",
    code: "O-028",
    letter: "O",
    term: "Overcut / Compensação de Pré-Corte em Matrizes de Aplique (Appliqué Overcut Margin)",
    pronunciation: "ô-ver-cât / com-pen-sa-ção de pré-cor-te",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo masculino composto.",
    category: "Apliques & Efeitos Especiais",
    summary: "Margem dimensional extra adicionada ao vetor de corte a laser ou plotter de retalhos de aplique para garantir que a borda do tecido cortado fique perfeitamente coberta pela coluna de satim.",
    origin: "Do inglês 'overcut' (corte estendido / sobrecorte), desenvolvido com a integração de mesas de corte a laser e plotters CNC (Silhouette / Brother ScanNCut) com matrizes de bordado.",
    definition: "O Overcut de Aplique (ou Margem de Sangria de Pré-Corte) é o valor milimétrico adicionado para fora (Offset positivo) do vetor de corte de retalhos pré-cortados em máquinas de corte a laser ou plotters de lâmina. Quando o tecido de aplique é cortado previamente antes de ir para o bastidor, ele deve ter dimensões ligeiramente maiores que a linha de guia (Placement Stitch) e menores que a borda externa da coluna final de satim ou ponto caseado. O overcut padrão de 1,0 mm a 1,5 mm garante que, mesmo com pequenas variações de posicionamento manual pelo operador, nenhuma beiradinha desfiada do retalho escape para fora da moldura de pontos cheios.",
    howItWorks: [
      "1. O programador cria o objeto de aplique no software de matrizes.",
      "2. Exporta o vetor da linha de corte com um Overcut de +1,2 mm para o arquivo da plotter ou máquina de laser.",
      "3. A plotter corta os retalhos de sarja ou feltro com a margem estendida exata.",
      "4. No bastidor, a máquina borda a linha de guia (Placement Stitch).",
      "5. O operador aplica cola temporária ou frita o retalho pré-cortado sobre a marcação.",
      "6. A máquina executa a costura de fixação (Tackdown) e em seguida a borda larga de satim (3,5 mm a 4,0 mm).",
      "7. As pontas do retalho ficam 100% encapsuladas sob a coluna de pontos sem aparecer nenhuma sobra ou ponta desfiada."
    ],
    beginnerExplanation: "É aquela bordinha extra que você deixa no retalho de tecido quando vai cortar na tesoura ou na maquininha de corte antes de bordar o aplique! Em vez de cortar o retalho no tamanho exato da linha de marcação, você corta ele 1 milímetro maior. Assim, quando a máquina vier fazendo o ponto cheio por cima, ela cobre o retalho todinho com facilidade e não deixa escapar nenhum fiapinho para fora!",
    applications: [
      "Produção de apliques em série com corte prévio a laser ou em plotters ScanNCut / Silhouette",
      "Emblemas colegiais, números esportivos gigantes em jaquetas universitárias e moletons",
      "Kits de enxoval de bebê com apliques em feltro, tecido tricoline e pelúcia",
      "Uniformização e ganho de velocidade em ateliês de alta produtividade"
    ],
    technicalDetails: "A largura da coluna de satim final de cobertura deve ser pelo menos o dobro da margem de overcut: se a coluna tiver 3,5 mm de largura, a linha de fixação (Tackdown) fica no centro (1,75 mm) e o overcut do retalho deve ter 1,0 mm a 1,2 mm além da linha de guia. Isso garante 0,55 mm a 0,75 mm de margem de tolerância para a borda externa do satim.",
    commonErrors: [
      "❌ Cortar o retalho exatamente no tamanho da linha de marcação (sem overcut), fazendo o tecido escapar debaixo do satim após a primeira lavagem",
      "❌ Fazer overcut muito grande (maior que a largura da coluna de satim), fazendo o retalho aparecer para fora da borda bordada",
      "❌ Não considerar o encolhimento de tecidos térmicos que encolhem sob o calor da prensagem",
      "❌ Posicionar o retalho torto sobre a linha de guia no bastidor"
    ],
    troubleshootingTips: [
      "Se o tecido do aplique escapar e desfiar na ponta: Aumente o overcut no arquivo de corte para +1,5 mm e alargue a coluna de satim para 4,0 mm",
      "Se o tecido do aplique aparecer para fora do satim: Reduza o overcut para +0,8 mm ou use uma tesoura de ponta curva para refilar o excesso",
      "Se a cola do aplique grudar na agulha: Utilize agulha revestida com Teflon antiaderente (Super Universal / Anti-Glue)"
    ],
    dicaArtrelados: "Se você usa a ScanNCut ou corte a laser no ateliê: configure o vetor de corte sempre com 1,2 mm para fora da linha de guia e use coluna de satim de 3,8 mm de largura. O encaixe fica tão perfeito e rápido que você consegue montar 50 apliques por hora sem precisar usar tesoura!",
    voceSabia: "Na confecção das jaquetas esportivas da NBA e NFL nos Estados Unidos, todos os números gigantes de duas cores são cortados a laser com overcut milimétrico e aplicados em segundos com câmeras ópticas de alinhamento!",
    practicalExercise: "No seu software, crie uma estrela de aplique. Gere o arquivo de corte com overcut de +1,2 mm e corte em um retalho de tricoline. Borde a linha de guia, posicione o retalho e borde o acabamento de satim. Veja como a borda fica 100% limpa e coberta.",
    quickSummary: "Margem de tolerância extra no corte de tecidos de aplique para garantir cobertura total sob a coluna de satim.",
    relatedTerms: ["Aplique em Bordado Eletrônico", "Linha de Posicionamento (Placement Stitch)", "Ponto Cheio (Satim)", "Corte a Laser e Termoselagem"],
    tags: ["o-028", "overcut", "aplique", "scanncut", "corte a laser", "plotter", "programacao", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES. ScanNCut & Appliqué Digitizing Master Guide. Brother Solutions Center, 2021.",
      "SULLIVAN, T. Precision Laser Cutting & Appliqué Engineering for High-Volume Embroidery. Stitches Mag, 2020."
    ]
  },
  {
    id: "offset-de-agulha-troca-automatica-cor",
    code: "O-029",
    letter: "O",
    term: "Offset de Agulha na Troca Automática de Cor (Color Change Needle Offset)",
    pronunciation: "óf-sét de a-gu-lha na tro-ca au-to-má-ti-ca de cor",
    level: "Avançado 🔴",
    grammarClass: "Substantivo masculino composto.",
    category: "Componentes da Máquina",
    summary: "Distância mecânica padronizada (normalmente 25,4 mm ou 1 polegada) entre as barras de agulha no bloco do cabeçote multi-agulhas, compensada automaticamente pelo pantógrafo durante a troca de cor.",
    origin: "Desenvolvido na década de 1970 pelos engenheiros japoneses da Tajima ao criarem o primeiro cabeçote com troca de cor automática por carrossel linear.",
    definition: "O Offset de Agulha (Needle-to-Needle Pitch / Needle Spacing Offset) é a distância geométrica linear fixa entre os centros axiais de duas agulhas adjacentes dentro do bloco de agulhas móvel (Color Change Box) de uma máquina multi-agulhas. O padrão da indústria mundial é de 25,4 mm (exatamente 1 polegada) ou 12,7 mm em máquinas ultra-compactas. Quando a máquina executa o comando de troca de cor (ex: da Agulha 1 para a Agulha 4), o motor de troca de cor desloca o bloco de agulhas e o sistema compensa o offset mecânico para que a nova agulha selecionada desça exatamente sobre o mesmo ponto de coordenada X:0, Y:0 no tecido.",
    howItWorks: [
      "1. A matriz atinge o comando de parada e troca de cor (Color Change Command).",
      "2. A máquina executa o nó de arremate e corta a linha com o trimmer inferior.",
      "3. O came de cor acionado pelo motor de passo desloca a caixa de agulhas lateralmente até engatar o pino da nova agulha.",
      "4. O pantógrafo permanece alinhado com a referência zero ou faz micro-compensações se necessário.",
      "5. A nova agulha engatada no pino da alavanca estica-fio desce perfeitamente centralizada sobre o orifício da chapa.",
      "6. A costura recomeça instantaneamente com a nova cor em menos de 3 segundos.",
      "7. O registro de encaixe entre as cores vizinhas permanece micrometricamente perfeito."
    ],
    beginnerExplanation: "É a distância exata que existe entre uma agulha e outra naquelas máquinas grandes que têm 6, 10 ou 15 agulhas alinhadas! Quando a máquina termina de bordar com a linha vermelha e vai mudar para a linha azul, ela dá uma 'escorregadinha' para o lado com o bloco de agulhas. O computador da máquina sabe a distância exatinha de cada agulha, então a cor nova cai no lugar perfeito do desenho sem errar nem um milímetro!",
    applications: [
      "Calibração de sincronismo mecânico em máquinas multi-agulhas (Tajima, Barudan, Brother PR, Janome MB)",
      "Diagnóstico de erros de posicionamento e encaixe de cores na troca de carretel",
      "Alinhamento dos sensores ópticos de posição de agulha (Potenciômetro de Cor / Color Sensor)",
      "Operação com dispositivos especiais como aplicador de lantejoulas e cording device"
    ],
    technicalDetails: "O deslocamento do bloco de agulhas deve ocorrer com tolerância angular inferior a 0,05 mm. Um erro de calibração no potenciômetro de cor ou sensor óptico de posição faz com que a barra de agulha não engate 100% no martelo do virabrequim, causando erro de painel 'Color Change Error' ou colisão da agulha contra a lateral do orifício da chapa.",
    commonErrors: [
      "❌ Forçar o deslocamento manual do bloco de agulhas com a máquina ligada, descalibrando o sensor de posição",
      "❌ Não lubrificar os trilhos e eixos de bronze da caixa de troca de cor, deixando a movimentação pesada e travando o motor",
      "❌ Deixar fios de linha soltos se enrolarem no fuso de troca de cor atrás do cabeçote",
      "❌ Mudar a agulha com a alavanca estica-fio parada fora do ângulo correto de descanso (Angle 100°)"
    ],
    troubleshootingTips: [
      "Se o painel acusar 'Color Change Timeout' ou erro de troca de cor: Verifique se não há linha enrolada no fuso traseiro e aplique 1 gota de óleo no trilho da caixa de agulhas",
      "Se uma cor específica sempre desalinhar 1 mm para o lado: Recalibre a posição do potenciômetro de cor no menu de serviço técnico",
      "Se o bloco de agulhas fizer um barulho de engrenagem raspando ao trocar de cor: Chame a assistência para verificar o desgaste dos cames de comando"
    ],
    dicaArtrelados: "Para quem tem máquina multi-agulhas: mantenha o trilho superior de troca de cor sempre limpinho de poeira e lubrificado com uma gotinha de óleo mineral a cada 15 dias. A troca de cores fica silenciosa, macia e super rápida!",
    voceSabia: "Nas primeiras máquinas automáticas com troca de cor da década de 1970, a troca levava quase 20 segundos por cor; hoje, as máquinas multi-cabeçotes mais avançadas trocam de agulha em menos de 1,5 segundo!",
    practicalExercise: "Fique de frente para a sua máquina multi-agulhas. Carregue um bordado de duas cores simples. Observe a caixa de agulhas se deslocar lateralmente e veja como a agulha seguinte entra exatamente no mesmo lugar onde a anterior estava.",
    quickSummary: "Distância física fixa entre agulhas no cabeçote (25,4 mm); compensada eletronicamente para troca de cor instantânea.",
    relatedTerms: ["Troca de Cor Automática", "Mapeamento de Cores", "Ordem de Bordado", "Cabeçote de Bordadeira"],
    tags: ["o-029", "offset de agulha", "troca de cor", "multi-agulhas", "potenciometro", "mecanica", "artrelados"],
    bibliographicReferences: [
      "BARUDAN CO. LTD. Multi-Head Color Change Mechanics & Linear Needle Pitch Standards. Nagoya, 2021.",
      "TAJIMA TECHNICAL SERVICE. Color Change Mechanism & Sensor Calibration Manual. Tokyo, 2020."
    ]
  },
  {
    id: "operacao-in-the-hoop-ith-passo-a-passo",
    code: "O-030",
    letter: "O",
    term: "Operação In-The-Hoop (ITH) Passo a Passo (In-The-Hoop Production Protocol)",
    pronunciation: "o-pe-ra-ção in dê húp / pas-so a pas-so",
    level: "Intermediário 🟡",
    grammarClass: "Substantivo feminino composto.",
    category: "Projetos Especiais & ITH",
    summary: "Metodologia completa de confecção de peças prontas inteiramente dentro do bastidor da máquina de bordar (bolsas, necessaires, chaveiros, bonecos e máscaras), dispensando costura manual posterior.",
    origin: "Do inglês 'in the hoop' (dentro do bastidor), técnica revolucionária criada por artesãos digitais nos anos 2000 que uniu bordado computadorizado e alfaiataria em um único processo automatizado.",
    definition: "A Operação In-The-Hoop (ITH) é o método avançado de engenharia de confecção onde produtos tridimensionais completos são estruturados, costurados, acolchoados, forrados e finalizados diretamente sobre o bastidor da bordadeira computadorizada. O processo obedece a uma partitura sequencial rigorosa de etapas que inclui linhas de marcação, sobreposição de tecidos direito com direito, colocação de zíperes, alças, mantas estruturantes e forros com abertura de desvirar, produzindo artigos com costuras embutidas perfeitas e acabamento industrial sem a necessidade de máquina de costura reta auxiliar.",
    howItWorks: [
      "1. Passo 1 (Marcação): A máquina borda a linha de guia no bastidor apenas sobre a entretela.",
      "2. Passo 2 (Zíper e Estrutura): O operador posiciona o zíper e a manta e a máquina costura para fixar.",
      "3. Passo 3 (Bordado Decorativo): O tecido frontal é posicionado e a máquina borda o desenho e os nomes personalizados.",
      "4. Passo 4 (Forro Frontal e Traseiro): Os tecidos de forro são posicionados direito com direito por baixo e por cima do bastidor.",
      "5. Passo 5 (Costura de Fechamento): A máquina executa a costura de união perimetral reforçada em ponto triplo com 3,0 mm, deixando uma fenda aberta de 5 cm.",
      "6. Passo 6 (Desviramento): Retira-se a peça do bastidor, rasga-se a entretela, desvira-se pelo zíper aberto e fecha-se a fenda com cola de tecido ou pontinho invisível.",
      "7. A necessaire ou chaveiro fica pronto com forro embutido e acabamento de boutique."
    ],
    beginnerExplanation: "É a técnica mais incrível e divertida do bordado moderno! Você faz uma bolsinha, estojo, chaveiro, sapatinho de bebê ou naninha de pelúcia todinho dentro do bastidor da sua máquina! Você vai só colocando os pedacinhos de pano e o zíper na hora certa que o computador mandar, e a máquina costura, acolchoa, borda o desenho e fecha a bolsinha inteira para você! No final, você só puxa pelo zíper e a peça sai prontinha!",
    applications: [
      "Necessaires, estojos escolares, porta-moedas e carteiras com zíper embutido",
      "Chaveiros almofadados, tags de mala e marcadores de página personalizados",
      "Naninhas de bebê, bichinhos de pelúcia, sapatinhos e babadores com fechamento de velcro",
      "Capas de passaporte, porta-cartões de vacina e capas de livro estruturadas"
    ],
    technicalDetails: "As matrizes ITH devem utilizar ponto triplo (Bean Stitch) com comprimento de 2,5 mm a 3,0 mm para as costuras estruturais de fechamento, garantindo alta resistência à tração ao desvirar a peça. O zíper deve ser posicionado com o cursor puxado para o meio antes da costura de fechamento perimetral para possibilitar a abertura e o desviramento da peça.",
    commonErrors: [
      "❌ Esquecer de abrir o zíper antes da costura final de fechamento, deixando a peça lacrada sem ter como desvirar",
      "❌ Colocar o tecido do forro do avesso (lado avesso com lado direito), estragando o interior da bolsinha",
      "❌ Não usar fita crepe ou fita adesiva para prender as camadas de tecido por baixo do bastidor, deixando o pano embolar na chapa",
      "❌ Cortar as margens de costura muito rentes aos pontos ao refilar, fazendo a costura abrir ao desvirar"
    ],
    troubleshootingTips: [
      "Se o tecido de baixo do bastidor enrugar durante a costura: Prenda todas as pontas firmemente com fita crepe automotiva nas quatro bordas do aro plástico",
      "Se o zíper entortar na aplicação: Use fita dupla-face fina para artesanato para colar o zíper na linha de marcação antes da agulha costurar",
      "Se os cantos da necessaire ficarem arredondados e feios ao desvirar: Corte as quinas de tecido em diagonal (chanfro) antes de desvirar com um vira-boneca de madeira"
    ],
    dicaArtrelados: "O 'segredo número 1 do ITH' Artrelados: assim que a máquina prender o zíper, abra o cursor até a metade da bolsinha IMEDIATAMENTE e cole um pedaço de fita crepe por cima dele para ele não andar! Assim você nunca mais vai esquecer o zíper fechado!",
    voceSabia: "As primeiras matrizes ITH criadas nos Estados Unidos nos anos 2000 eram simples tags de presente de Natal; hoje, existem artesãos digitais que criam mochilas inteiras com múltiplos bolsos e compartimentos feitas 100% no bastidor!",
    practicalExercise: "Baixe uma matriz de chaveiro ITH simples. Siga os passos: 1) Linha de guia; 2) Colocação do feltro frontal e bordado; 3) Colocação da fita de chaveiro e feltro traseiro; 4) Costura final. Retire do bastidor, recorte a volta com tesoura de picotar e admire a peça pronta em 5 minutos.",
    quickSummary: "Técnica de confecção de peças prontas (bolsas, chaveiros, bonecos) 100% produzidas dentro do bastidor da máquina.",
    relatedTerms: ["Chaveiros e Peças ITH (In-The-Hoop)", "Linha de Posicionamento (Placement Stitch)", "Ponto Triplo (Bean Stitch)", "Fita Adesiva de Fixação"],
    tags: ["o-030", "in the hoop", "ith", "necessaires", "chaveiros", "passo a passo", "projetos especiais", "artrelados"],
    bibliographicReferences: [
      "CREATIVE EMBROIDERY PRESS. In The Hoop Revolution: Modern Step-by-Step Projects. London, 2021.",
      "SULKY OF AMERICA. Mastering In-The-Hoop Accessories & Machine Construction. Sulky Library, 2020."
    ]
  },
  {
    id: "otimizacao-arquivo-dst-tajima-binary",
    code: "O-031",
    letter: "O",
    term: "Otimização de Arquivo DST / Dados Binários Tajima (DST File & Binary Jump Optimization)",
    pronunciation: "o-ti-mi-za-ção de ar-qui-vo dê-esse-tê / bi-ná-rio",
    level: "Avançado 🔴",
    grammarClass: "Substantivo feminino composto.",
    category: "Formatos & Arquivos",
    summary: "Estrutura do formato industrial universal .DST (Tajima), gerenciamento dos bytes de coordenadas ternárias e otimização dos blocos de múltiplos saltos (Jump Chains) para acionar cortes automáticos de linha.",
    origin: "Criado pela Tajima Industries Ltd. no Japão no final dos anos 1970 para fitas de papel perfurado e adotado como a 'língua franca' universal do bordado industrial.",
    definition: "O formato Tajima DST (.dst) é o padrão binário puro mais utilizado no planeta para máquinas de bordar industriais e comerciais. Diferentemente de formatos domésticos ricos (como .PES ou .VP3), o arquivo .DST não armazena paletas de cores nativas nem objetos vetoriais editáveis: ele consiste estritamente em um cabeçalho ASCII de 512 bytes seguido por uma sequência contínua de registros de 3 bytes por ponto. Cada registro de 3 bytes codifica o deslocamento diferencial nos eixos X e Y (em frações de 0,1 mm utilizando base ternária) e o byte de controle que define se o ponto é uma Costura Normal (Stitch), um Ponto de Salto (Jump) ou um Comando de Parada (Stop/Color Change).",
    howItWorks: [
      "1. O software de digitalização compila a matriz de bordado para a estrutura binária Tajima .DST.",
      "2. O cabeçalho de 512 bytes grava o nome do arquivo, total de pontos, extensões máximas (+X, -X, +Y, -Y) e número de trocas de cor.",
      "3. Cada ponto subsequente é gravado em um bloco rigoroso de 3 bytes.",
      "4. Para acionar um corte de linha em máquinas que leem .DST padrão, o software insere uma cadeia de múltiplos saltos consecutivos (Jump Codes, geralmente 3 a 5 saltos).",
      "5. A placa-mãe da máquina lê a sequência de saltos consecutivos e interpreta como sinal para acionar o solenóide do cortador (Trimmer).",
      "6. Ao encontrar o comando de Stop (0xC3), a máquina para o motor principal e aciona a troca de cor de agulha."
    ],
    beginnerExplanation: "É o formato de arquivo universal mais famoso do mundo do bordado industrial (termina com .DST)! Ele é como se fosse o 'código Morse' das máquinas: não guarda cores bonitas na tela, mas diz com precisão matemática absoluta para onde a agulha deve se mexer a cada milésimo de segundo. Praticamente TODAS as máquinas do planeta entendem arquivos .DST!",
    applications: [
      "Intercâmbio universal de matrizes entre diferentes marcas de máquinas industriais e domésticas",
      "Produções em massa em máquinas Tajima, Barudan, SWF, Happy, ZSK e chinesas",
      "Depuração e limpeza de arquivos corrompidos através de editores hexadecimais",
      "Padronização de arquivos mestres para grandes fábricas de confecção"
    ],
    technicalDetails: "O sistema de codificação do .DST divide os deslocamentos em potências de 3 (+1, -1, +9, -9, +27, -27, +81, -81), permitindo um deslocamento máximo por ponto individual de ±12,1 mm. Qualquer movimento de pantógrafo maior que 12,1 mm deve ser automaticamente fragmentado pelo software em múltiplos pontos de salto (Jump Stitches) intermediários encadeados.",
    commonErrors: [
      "❌ Esperar que o arquivo .DST abra na máquina com as cores reais certinhas (ele sempre abre com cores aleatórias que precisam ser mapeadas no painel)",
      "❌ Modificar o tamanho de um arquivo .DST em mais de 10% em programas simples (como ele é ponto a ponto sem vetores, os pontos ficam ralos ou duros demais)",
      "❌ Deixar cabeçalhos corrompidos com tamanho diferente de 512 bytes, fazendo a máquina travar ao ler o pendrive",
      "❌ Gerar saltos maiores que 12,1 mm sem fragmentação ternária adequada"
    ],
    troubleshootingTips: [
      "Se a máquina industrial não cortar a linha em um arquivo .DST: Altere a configuração no software para 'Gerar 3 comandos de Jump antes do corte de linha em DST'",
      "Se as cores na tela da máquina ficarem todas trocadas: Lembre-se que o .DST não grava cores; faça o mapeamento das cores diretamente no painel da máquina",
      "Se a máquina acusar 'File Header Error': Reabra o arquivo no software de bordado e salve novamente com o nome curto em padrão 8.3 (ex: 'DESENHO1.DST')"
    ],
    dicaArtrelados: "Para enviar arquivos de bordado para outras pessoas ou oficinas sem correr risco de incompatibilidade: envie SEMPRE no formato .DST acompanhado de uma foto ou PDF com a ficha técnica das cores reais! O .DST nunca falha e roda em qualquer máquina do mundo!",
    voceSabia: "O formato .DST foi criado em 1978 e até hoje, mais de 45 anos depois, continua sendo o formato industrial número 1 mais utilizado em todas as fábricas têxteis do planeta Terra!",
    practicalExercise: "Exporte uma mesma matriz no formato .PES (doméstico) e no formato .DST (industrial). Abra ambos no seu visualizador e compare: veja como o .PES carrega as cores reais e o .DST carrega a estrutura universal de pontos pura.",
    quickSummary: "Formato industrial universal criado pela Tajima; grava coordenadas binárias de 3 bytes compatíveis com todas as máquinas.",
    relatedTerms: ["Formatos de Arquivos de Bordado", "Corte de Linha (Trim)", "Ponto de Salto (Jump Stitch)", "Troca de Cor Automática"],
    tags: ["o-031", "arquivo dst", "tajima", "binario", "formato universal", "jumps", "programacao", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL ARCHITECTURE. The Tajima DST Format Specification & Binary Decoding. Tajima Industries, 2021.",
      "KEMP, B. Understanding Embroidery File Formats & Industrial Compatibility. Stitches Magazine, 2020."
    ]
  },
  {
    id: "orelhas-de-coelho-alca-puxar-bastidores",
    code: "O-032",
    letter: "O",
    term: "Orelhas de Bastidor / Alças de Tração e Encaixe Rápido (Hoop Tabs & Quick-Release Clamps)",
    pronunciation: "o-re-lhas de bas-ti-dor / al-ças de tra-ção",
    level: "Iniciante 🟢",
    grammarClass: "Substantivo feminino composto.",
    category: "Bastidores & Acessórios",
    summary: "Abas plásticas ergonômicas e alavancas de fixação rápida localizadas no aro externo dos bastidores que facilitam a montagem, o tensionamento uniforme do tecido e o desencaixe sem esforço nos dedos.",
    origin: "Do jargão de ateliê 'orelhas de bastidor' (hoop tabs / rabbit ears), introduzido no design ergonômico de bastidores modernos no início dos anos 2000.",
    definition: "As Orelhas de Bastidor (Hoop Grip Tabs / Quick-Release Clamps) são extensões geométricas moldadas em polímero reforçado com fibra de vidro situadas nas extremidades do aro externo dos bastidores de bordar. Sua função biomecânica primária é fornecer uma alavanca ergonômica para que o operador possa segurar, puxar e pressionar o aro externo contra o aro interno com firmeza e alinhamento perpendicular, garantindo que o tecido e a entretela fiquem perfeitamente assentados com tensão homogênea em toda a circunferência, sem sobrecarregar as articulações dos dedos ou requerer força excessiva no parafuso de aperto.",
    howItWorks: [
      "1. O operador apoia o aro interno com o tecido e a entretela sobre a mesa de montagem.",
      "2. Posiciona o aro externo por cima, segurando firmemente pelas abas ergonômicas laterais ('orelhas').",
      "3. Pressiona as abas para baixo com os polegares de forma equilibrada.",
      "4. O aro externo encaixa de maneira uniforme sem morder ou enviesar a trama do tecido.",
      "5. Em bastidores com sistema Quick-Release (Alavanca Rápida), fecha a trava rápida sem precisar girar parafusos.",
      "6. O tecido atinge a firmeza de tambor perfeita em menos de 5 segundos.",
      "7. As abas laterais servem também de pega confortável para retirar a peça terminada após o bordado."
    ],
    beginnerExplanation: "São aquelas 'abazinhas' ou 'orelhinhas' de plástico que ficam nas beiradas do bastidor! Elas servem para você apoiar os dedos e empurrar o bastidor para baixo com facilidade na hora de prender o tecido, sem machucar a ponta dos dedos e sem deixar o tecido entrar torto ou enviesado!",
    applications: [
      "Montagem rápida e ergonômica de peças em ateliês com alta rotatividade de bordado",
      "Prevenção de Lesões por Esforço Repetitivo (LER/DORT) em operadores de bastidores manuais",
      "Tensionamento perfeito de toalhas felpudas e tecidos encorpados",
      "Encaixe de bastidores com sistema de trava de pressão rápida (Snap-Lock)"
    ],
    technicalDetails: "A geometria das abas de tração é projetada para distribuir a força de inserção (geralmente entre 15 e 30 N) ao longo de todo o perímetro elíptico ou retangular do aro plástico. A resina de poliamida com 30% de fibra de vidro (PA6-GF30) suporta ciclos contínuos de flexão mecânica sem sofrer deformação plástica permanente.",
    commonErrors: [
      "❌ Empurrar o bastidor apenas por um lado só, fazendo o aro entrar enviesado e entortar a trama do tecido",
      "❌ Bater no bastidor com a palma da mão ou com objetos para fechar em tecidos grossos, trincando o aro plástico",
      "❌ Puxar o tecido pelas sobras de pano em vez de reabrir e assentar corretamente pelas abas",
      "❌ Não regular a abertura prévia do parafuso antes de pressionar as abas"
    ],
    troubleshootingTips: [
      "Se o bastidor estiver muito duro para encaixar: Solte 2 voltas no parafuso de ajuste antes de pressionar as abas ergonômicas",
      "Se o tecido escapar de um dos cantos: Pressione as duas abas simultaneamente com as duas mãos apoiadas na mesa",
      "Se os seus dedos doerem após montar muitos bastidores: Considere utilizar uma estação de montagem (Hooping Station) ou bastidores magnéticos"
    ],
    dicaArtrelados: "Para montar o bastidor sem esforço nenhum: apoie o bastidor sobre um tapetinho emborrachado antiderrapante na mesa. Com as duas mãos nas 'orelhas' do aro, aperte reto para baixo com o peso do seu corpo: o tecido entra retinho como mágica em um segundo!",
    voceSabia: "Os primeiros bastidores de madeira do século XIX eram apertados com chaves de boca metálicas pesadas; a invenção das abas plásticas ergonômicas nos anos 2000 reduziu em 80% as queixas de dores articulares nos ateliês de bordado!",
    practicalExercise: "Coloque um pedaço de tecido no bastidor empurrando de forma desajeitada com uma mão só. Depois, repita o processo apoiando os dois polegares nas abas ergonômicas e empurrando reto para baixo. Sinta a diferença imediata de facilidade e firmeza.",
    quickSummary: "Abas ergonômicas no aro externo que facilitam o encaixe rápido e uniforme do bastidor sem esforço nos dedos.",
    relatedTerms: ["Bastidor de Bordar", "Alinhamento e Centralização no Bastidor", "Bastidor Magnético", "Estação de Montagem (Hooping Station)"],
    tags: ["o-032", "orelhas de bastidor", "abas ergonomicas", "encaixe rapido", "bastidores", "ergonomia", "artrelados"],
    bibliographicReferences: [
      "BROTHER INDUSTRIES. Ergonomic Hooping Techniques & Hoop Design Engineering. Brother Technical Journal, 2021.",
      "ASSOCIATION OF EMBROIDERY CRAFTS. Studio Ergonomics & Repetitive Strain Prevention. London, 2020."
    ]
  }
];

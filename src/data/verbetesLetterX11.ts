import { Verbete } from "../types";

export const VERBETES_LETTER_X11: Verbete[] = [
  {
    id: "xy-backlash-mechanical-play-compensation-folga-mecanica-x",
    code: "X-051",
    letter: "X",
    term: "X-Y Backlash & Mechanical Play Compensation — Compensação de Folga Mecânica e Histerese nos Eixos X e Y",
    pronunciation: "éks uái bék-lésh end me-ká-ni-kol plêi kom-pen-sêi-shon — com-pen-sa-são de fol-ga me-ca-ni-ca",
    level: "Avançado 🔴",
    category: "Agulhas & Mecânica",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do inglês 'backlash' (folga entre dentes de engrenagens ou histerese mecânica na inversão de movimento) e 'compensation' (correção eletrônica por injeção de micropassos).",
    summary: "Parâmetro do firmware que compensa a microfolga de engrenagens e correias quando o pantógrafo inverte o sentido de movimento no eixo X, garantindo contornos perfeitamente fechados.",
    definition: "O X-Y Backlash & Mechanical Play Compensation (Compensação de Folga Mecânica no Eixo X / Histerese Cinemática do Pantógrafo / Backlash Anti-Play Offset & Deadband Elimination) é o ajuste eletrônico presente no firmware da máquina de bordar e em softwares de controle de movimento. Quando o motor do pantógrafo inverte o sentido de rotação (por exemplo, mudando de +X para -X), as folgas microscópicas entre os dentes das polias, rolamentos e correias geram uma 'zona morta' (típica de 0,02 mm a 0,10 mm) onde o motor gira mas o bastidor não se move instantaneamente; a compensação injeta pulsos adicionais para anular esse atraso mecânico.",
    technicalDetails: "Sem a compensação de backlash, círculos perfeitos sofrem achatamento nos quadrantes de 90° e 270°, e contornos pretos finos (Outlines) saem deslocados em relação ao preenchimento de cor (especialmente quando bordados em direções opostas). O teste de calibração consiste em costurar um padrão de linhas paralelas bidirecionais (Backlash Tuning Grid); o técnico mede o desalinhamento com paquímetro óptico e insere o valor do offset em micrômetros no menu de serviço da máquina.",
    beginnerExplanation: "É o ajuste fino que tira a 'folguinha' que toda máquina tem quando muda de direção. Pense no volante de um carro velho que tem um pequeno jogo antes das rodas começarem a virar: na máquina de bordar, o computador corrige essa folguinha sozinho para que uma bola bordada saia perfeitamente redonda e o contorno preto feche cravado no milímetro!",
    howItWorks: [
      "1. O motor do eixo X recebe o comando de inverter o sentido de movimento.",
      "2. O algoritmo do firmware identifica a mudança de sinal do vetor delta X.",
      "3. O driver injeta instantaneamente a quantidade programada de micro-pulsos de compensação (ex.: +0,04 mm).",
      "4. A folga física entre os dentes da correia e da polia é eliminada em microssegundos.",
      "5. O bastidor inicia o deslocamento real na coordenada exata sem nenhum atraso mecânico.",
      "6. A agulha penetra rigorosamente no ponto planejado da matriz.",
      "7. Círculos, medalhões e contornos finos fecham-se com geometria e simetria perfeitas."
    ],
    applications: [
      "Bordados de alta precisão com contornos finos de 1 mm colados em preenchimentos.",
      "Bordados em máquinas antigas com desgaste natural de correias e rolamentos.",
      "Criação de microletras e fontes de alta definição em camisaria e etiquetas.",
      "Calibração anual pós-revisão mecânica em parques de bordado industrial."
    ],
    characteristics: [
      "Correção digital em tempo real transparente para o operador.",
      "Eliminação de emendas visíveis e frestas em bordas de preenchimento.",
      "Melhoria drástica da circularidade e simetria de desenhos geométricos."
    ],
    commonErrors: [
      "❌ Inserir valores exagerados de compensação de backlash (acima de 0,3 mm), gerando sobreposição e trepidação no bastidor.",
      "❌ Achar que compensação digital resolve correias completamente gastas ou dentes espanados.",
      "❌ Não verificar se os parafusos das polias dentadas estão soltos no eixo do motor."
    ],
    troubleshootingTips: [
      "O contorno preto não encontra o preenchimento apenas quando a máquina borda da direita para a esquerda: há folga mecânica (backlash) no eixo X; aperte a correia dentada e ajuste o valor de 'X-Backlash Comp' no menu técnico da máquina.",
      "Os círculos bordados parecem ovais ou com cantos achatados: execute o teste de calibração de histerese mecânica nos eixos X e Y no painel.",
      "A agulha bate fora da marca após trocas rápidas de direção: verifique se o acoplamento flexível entre o motor e o fuso/polia não está quebrado ou com parafuso espanado."
    ],
    dicaArtrelados: "Se você notar que os contornos dos seus bordados começaram a sair ligeiramente fora de lugar depois de muito tempo de uso da máquina: o primeiro passo é esticar a correia dentada do pantógrafo e limpar as guias! Muitas vezes uma simples regulagem de 10 minutos deixa a máquina cravando pontos como no dia em que saiu da loja!",
    voceSabia: "O conceito de compensação de 'Backlash' foi desenvolvido originalmente para os telescópios de navegação marítima e miras de artilharia naval na Primeira Guerra Mundial para compensar o jogo das engrenagens pesadas de bronze sob mudanças de temperatura!",
    practicalExercise: "Digitalize um círculo perfeito de 40 mm com contorno satim fino de 1,5 mm ao redor. Borde em um tecido firme com entretela e examine com uma lupa: veja como o contorno fecha perfeitamente sem deixar nenhuma fresta branca em toda a volta.",
    quickSummary: "Compensação eletrônica que anula a microfolga mecânica das correias e polias na inversão do eixo X, garantindo contornos perfeitamente alinhados.",
    relatedTerms: ["Backlash", "Histerese Mecânica", "Contorno", "Outlines", "Correia Dentada", "Servomotor", "Manutenção Preventiva"],
    tags: ["xybacklash", "folgamecanica", "contornos", "precisao", "mecanica", "manutencao", "hardware"]
  },
  {
    id: "x-angle-gradient-fill-degrade-angular-tatami-x",
    code: "X-052",
    letter: "X",
    term: "X-Angle Gradient Fill — Degradê Angular de Cores no Eixo X & Transição Suave de Sombreamento no Tatami",
    pronunciation: "éks-éng-gol grêi-di-ent fil — de-gra-de an-gu-lar de ko-res no êi-shu shis",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'gradient fill' (preenchimento com transição gradual de densidade e cores) e 'angle blending' (fusão de ângulos de pontos ao longo do eixo horizontal).",
    summary: "Técnica avançada de digitalização que mescla duas cores de linha através de um gradiente de densidade intercalado ao longo do eixo X, criando efeito de pintura realista.",
    definition: "O X-Angle Gradient Fill (Degradê de Densidade no Eixo X / Fusão Suave de Cores no Tatami / Color Blending & Feathered Edge Gradient / Shading Matrix Fill) é o método artístico e técnico de digitalização utilizado para criar transições contínuas e hiper-realistas entre duas ou mais cores de linhas de bordado. O software divide a área em camadas sobrepostas onde a primeira cor inicia com densidade normal (0,40 mm) na extremidade esquerda e vai abrindo o espaçamento gradualmente (até 2,50 mm) em direção ao centro; simultaneamente, a segunda cor inicia aberta e vai se fechando para a direita, entrelaçando os filamentos em um degradê visual perfeito.",
    technicalDetails: "Para evitar o efeito de faixas rígidas (Banding), o algoritmo aplica uma função de dispersão com pontas plumadas (Feather Edge / Random Stitch Lengths de 1,0 mm a 4,5 mm) e inclina os ângulos de penetração em 15° a 30° ao longo do eixo X. A interação física entre o brilho especular dos filamentos de poliéster trilobal sob diferentes ângulos de iluminação resulta em uma ilusão óptica de fusão tonal contínua, permitindo reproduzir peles humanas, pores do sol, chamas e efeitos metálicos cromados.",
    beginnerExplanation: "É como misturar duas cores de tinta com um pincel macio, só que usando linhas de bordar! A máquina começa bordando uma cor escura na esquerda e vai diminuindo os pontinhos aos poucos enquanto a cor clara vai entrando bem de mansinho, fazendo uma transição tão suave e linda que você não vê onde uma cor termina e a outra começa!",
    howItWorks: [
      "1. O programador cria o primeiro objeto vetorial no software e define a cor de base (ex.: vermelho escuro).",
      "2. Ativa o recurso 'Gradiente de Densidade' (Color Blending / Density Gradient) no sentido do eixo X.",
      "3. Configura a curva de transição (ex.: Linear, Senoidal ou Gaussiana) e ativa a borda plumada (Feathering).",
      "4. Clona o objeto, altera a cor para a segunda tonalidade (ex.: amarelo ouro) e inverte o sentido do gradiente.",
      "5. O software entrelaça as duas camadas de pontos de forma desencontrada e fluída.",
      "6. A máquina costura a primeira cor e depois a segunda cor sobre a mesma área.",
      "7. O resultado final é um degradê fotográfico com transição suave, toque macio e sem divisões duras."
    ],
    applications: [
      "Bordados fotorrealistas de rostos humanos, animais selvagens e paisagens.",
      "Pétalas de flores com transição suave de cores (rosas, orquídeas e lírios).",
      "Efeitos de fogo, chamas dinâmicas, pôr do sol e auroras boreais em jaquetas.",
      "Logotipos modernos com gradientes de cores corporativas e efeitos metálicos cromados."
    ],
    characteristics: [
      "Transição de cores contínua sem linhas de divisão duras ou blocadas.",
      "Uso de pontas plumadas (Feather Edge) para fusão óptica microscópica.",
      "Preservação da maciez da peça sem excesso de camadas pesadas de pontos."
    ],
    commonErrors: [
      "❌ Tentar fazer degradê sem plumagem de pontas, criando uma linha de corte reta e feia entre as cores.",
      "❌ Usar densidade 100% cheia nas duas camadas ao mesmo tempo, criando uma placa grossa e dura como plástico.",
      "❌ Escolher cores com contraste excessivo (ex.: preto e branco puro) sem uma cor intermediária cinza para suavizar."
    ],
    troubleshootingTips: [
      "A transição entre as cores ficou com marcas verticais visíveis (efeito persiana): ative a opção 'Random Stitch Length / Feather Edge' no software para aleatorizar as pontas dos pontos ao longo do eixo X.",
      "O tecido enrugou no meio do degradê: a soma das densidades das duas camadas ultrapassou o limite; reduza a densidade máxima de ambas as camadas para que a soma no ponto de encontro seja de cerca de 0,45 mm.",
      "As cores não se misturaram bem: certifique-se de que os ângulos de ponto das duas cores estão paralelos ou com diferença angular máxima de apenas 5° a 10°."
    ],
    dicaArtrelados: "Para fazer pétalas de rosa realistas que parecem vivas: use três tons da mesma cor (bordô escuro, vermelho vivo e rosa claro) com degradê no eixo X e pontas plumadas! O relevo e o sombreado ficam com uma qualidade de galeria de arte que valoriza seu bordado em dez vezes!",
    voceSabia: "A técnica de degradê com fios de seda entrelaçados em agulhadas plumadas era chamada de 'Pintura à Agulha' (Needle Painting / Acu pictura) na Europa renascentista e na China imperial da dinastia Song no século XII!",
    practicalExercise: "Crie um quadrado de 50 mm no seu software. Aplique um degradê de azul para branco no eixo X usando a ferramenta 'Color Blending' com bordas plumadas. Borde em um retalho e veja como a mistura de linhas simula perfeitamente uma pintura a óleo.",
    quickSummary: "Técnica de programação que intercala duas cores com gradiente de densidade e pontas plumadas no eixo X, criando sombreados realistas e degradês perfeitos.",
    relatedTerms: ["Color Blending", "Degradê", "Feather Edge", "Pintura à Agulha", "Tatami", "Fotorrealismo", "Wilcom"],
    tags: ["xanglegradient", "degrade", "colorblending", "fotorrealismo", "sombreado", "tatami", "arte"]
  },
  {
    id: "x-tack-3d-foam-anchoring-ancoragem-eva-3d-x",
    code: "X-053",
    letter: "X",
    term: "X-Tack for 3D Foam Anchoring — Ancoragem em X para EVA Tridimensional 3D Puff & Fechamento de Bordas",
    pronunciation: "éks-ték for tri-di fóum én-ko-ring — an-ko-ra-gem de e-ve-a em shis",
    level: "Avançado 🔴",
    category: "Técnicas Especiais de Bordado",
    grammarClass: "Substantivo masculina composta.",
    origin: "Do inglês '3D foam / puff' (espuma densa microcelular de acetato-vinilo de etileno / EVA) e 'anchoring tack' (costura perimétrica de corte e travamento do EVA).",
    summary: "Rotina de pontos de perfuração em X e linhas de corte que ancoram e guilhotinam o EVA 3D Puff nas extremidades, garantindo relevos tridimensionais limpos e sem espuma aparente.",
    definition: "O X-Tack for 3D Foam Anchoring (Ancoragem em X para EVA 3D Puff / Fechamento Perimétrico de Espuma Tridimensional / Foam Edge Capping & X-Cut Perforation) é a técnica especializada de digitalização para bordados com alto relevo (3D Foam em bonés, jaquetas e patches). Antes da costura da coluna satim pesada (densidade de 0,20 mm a 0,25 mm), o software executa uma sequência de micro-pontos de corrida em cruzamento 'X' nas extremidades abertas das letras (como pontas de letras E, T, H, X); esses micro-pontos perfuram e guilhotinam a espuma de EVA, forçando as bordas a dobrarem para dentro e ficarem 100% seladas sob o satim.",
    technicalDetails: "Sem a ancoragem em X nas extremidades (End Capping), a elasticidade do EVA expandido tende a empurrar a espuma para fora das pontas da coluna satim após a remoção do excesso, deixando 'pelos' ou pontas brancas/pretas de EVA feias expostas na face da peça. O X-Tack pré-esmaga o EVA na coordenada exata da borda perimétrica com espaçamento de agulhada de 0,6 mm, criando uma linha de vinco por onde a espuma se desprende de forma limpa e automática ao ser puxada.",
    beginnerExplanation: "Quando você faz aquele bordado alto e fofo de boné usando uma borrachinha de EVA por baixo da linha, as pontas das letras podem ficar com pedacinhos de borracha espetados para fora se você não fechar direito. A ancoragem em X é uma costura especial nas pontinhas que corta e esmaga o EVA para dentro, fazendo o bordado 3D ficar perfeito, liso e sem nenhuma rebarba!",
    howItWorks: [
      "1. A máquina borda os pontos de marcação de posição do EVA no tecido.",
      "2. O operador posiciona a folha de EVA 3D Puff de 2 mm ou 3 mm sobre a área marcada.",
      "3. A máquina costura a ancoragem em X (X-Tack) nas pontas abertas das letras com pontos penetrantes curtos.",
      "4. O EVA é cortado e esmagado nas extremidades formando uma tampa selada (End Cap).",
      "5. A máquina costura a cobertura de satim denso com alta tensão por cima do EVA.",
      "6. Ao terminar o bordado, o operador puxa a folha de EVA com a mão; ela se destaca com extrema facilidade.",
      "7. Passa-se um soprador térmico rápido para encolher qualquer micro-resíduo residual de espuma."
    ],
    applications: [
      "Logotipos volumosos com relevo 3D na frente de bonés de aba reta e aba curva.",
      "Emblemas e brasões tridimensionais em jaquetas esportivas e casacos pesados.",
      "Bordados em artigos militares, táticos e coletes profissionais.",
      "Letras em alto relevo para moda streetwear e uniformes de basquete e beisebol."
    ],
    characteristics: [
      "Fechamento 100% hermético das bordas e extremidades abertas da espuma.",
      "Destaque limpo e sem necessidade de recorte manual com tesoura ou pinça.",
      "Relevo tridimensional nítido, encorpado e profissional com durabilidade extrema."
    ],
    commonErrors: [
      "❌ Bordar 3D Foam com densidade de satim normal (0,40 mm), deixando o EVA aparecendo por entre as linhas.",
      "❌ Esquecer de fechar as pontas das letras com o X-Tack, deixando tufos de EVA saindo pelas extremidades.",
      "❌ Usar EVA comum de papelaria (muito mole) em vez de EVA de bordado de alta densidade (Microcellular Embroidery Foam)."
    ],
    troubleshootingTips: [
      "Ficaram pedacinhos de EVA espetados para fora nas pontas das letras: passe o jato de ar quente de um secador de cabelos ou soprador térmico a 10 cm de distância por 3 segundos para que o EVA encolha e suma para dentro do bordado.",
      "A linha arrebenta a cada 10 segundos ao bordar sobre o EVA: use agulha de calibre maior (Groz-Beckert SAN 1 calibre 80/12 ou 90/14) com ponta cônica afiada e lubrifique a linha com óleo de silicone.",
      "O bordado não tem relevo alto o suficiente: utilize folha de EVA de 3,0 mm de densidade dura (70 a 80 Shore A) em vez de espuma fina de 1,5 mm."
    ],
    dicaArtrelados: "O segredo do bordado 3D Puff de boné profissional é: use sempre a cor do EVA combinando com a cor da linha (EVA preto para linha preta, EVA branco para linha branca)! Se por acaso um micro-pedacinho ficar aparente, ele fica totalmente camuflado e invisível na peça!",
    voceSabia: "A técnica do bordado tridimensional 3D Puff foi popularizada nos anos 1990 pelas marcas esportivas americanas New Era e Starter nos bonés oficiais dos times da NBA e da MLB, tornando-se o padrão mundial de bordado de bonés!",
    practicalExercise: "Digitalize uma letra 'H' de 40 mm de altura com colunas satim de densidade 0,22 mm. Nas quatro pontas abertas do H, adicione tampas de fechamento em X (X-Tack). Borde sobre um pedaço de EVA de 2 mm e sinta a perfeição do relevo 3D ao destacar o excesso.",
    quickSummary: "Rotina de micro-pontos em X nas pontas das letras que perfura e esmaga o EVA 3D Puff, garantindo fechamento hermético e acabamento limpo.",
    relatedTerms: ["3D Foam", "EVA Puff", "End Cap", "Alto Relevo", "Densidade Alta", "Boné 3D", "Soprador Térmico"],
    tags: ["xtackfoam", "3dfoam", "evapuff", "altorelevo", "bones", "tecnicas", "qualidade"]
  },
  {
    id: "x-axis-brake-emergency-stop-freio-parada-emergencia-x",
    code: "X-054",
    letter: "X",
    term: "X-Axis Brake & Emergency Stop Dynamics — Freio Magnético do Eixo X & Desaceleração de Parada de Emergência",
    pronunciation: "éks-ék-sis brêik end i-mer-djen-si stóp dai-né-miks — frei-u mag-ne-ti-ku e pa-ra-da de e-mer-jen-si-a",
    level: "Avançado 🔴",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculina composta.",
    origin: "Do inglês 'regenerative braking' (frenagem eletrodinâmica regenerativa por curto-circuito de enrolamentos de servomotores) e 'emergency stop' (parada de segurança imediata Norma NR-12/CE).",
    summary: "Sistema de frenagem instantânea eletrônica e magnética que para o movimento do bastidor no eixo X em menos de 50 milissegundos ao pressionar o botão de emergência.",
    definition: "O X-Axis Brake & Emergency Stop Dynamics (Freio Dinâmico do Eixo X / Sistema de Frenagem de Emergência do Pantógrafo / Dynamic DC Injection Braking & Safety Stop Interlock) é o circuito de segurança e desaceleração rápida dos motores do bastidor. Quando o operador aciona o botão cogumelo vermelho de emergência (E-Stop) ou quando os sensores detectam quebra de agulha ou sensor de barreira óptica rompido, o servodriver do eixo X aplica frenagem por injeção de corrente contínua reversa nos enrolamentos do motor, travando o bastidor instantaneamente sem permitir deslizamento por inércia.",
    technicalDetails: "A frenagem convencional por corte simples de energia deixaria o bastidor com um deslocamento inercial residual (Coast-Down) de 5 mm a 15 mm a 1.000 PPM, o que entortaria a agulha dentro do tecido ou colidiria o calcador contra o bastidor. O freio dinâmico do eixo X dissipa a energia cinética do pantógrafo em um resistor de frenagem de potência (Braking Resistor) em menos de 45 ms, mantendo a contagem de coordenadas no encoder rigorosamente intacta para permitir o retorno exato ao ponto de parada após a liberação da máquina.",
    beginnerExplanation: "É o freio de emergência super potente da máquina! Se acontecer qualquer imprevisto e você apertar aquele botãozão vermelho redondo de parar, a máquina freia o bastidor no mesmo milésimo de segundo, como se pisasse no freio de um carro de corrida, para não quebrar agulhas nem estragar a roupa!",
    howItWorks: [
      "1. O operador pressiona o botão de parada de emergência (E-Stop) ao notar um problema.",
      "2. O circuito de segurança envia um sinal de interrupção de alta prioridade à CPU e aos drivers.",
      "3. O driver do eixo X corta o pulso de avanço e aplica corrente de frenagem regenerativa reversa.",
      "4. O servomotor trava o eixo instantaneamente através de campo magnético oposto.",
      "5. O eixo principal da agulha para sincronizado no ponto morto superior com freio eletromecânico.",
      "6. A coordenada exata de interrupção é salva na memória não-volátil (EEPROM/Flash).",
      "7. Após solucionar o problema, o operador desarmar o botão e a máquina continua o bordado daquele ponto exato."
    ],
    applications: [
      "Proteção e segurança do operador contra acidentes nas mãos (Norma regulamentadora NR-12).",
      "Parada imediata em casos de linha enroscada no cone ou tecido desprendido do bastidor.",
      "Prevenção de colisões mecânicas destrutivas do pantógrafo contra a estrutura da máquina.",
      "Preservação da memória do bordado para retomada sem perda da matriz iniciada."
    ],
    characteristics: [
      "Tempo de desaceleração ultrarrápido inferior a 50 milissegundos.",
      "Preservação integral das coordenadas do encoder na memória de bordo.",
      "Dissipação segura de calor através de resistores de carga blindados."
    ],
    commonErrors: [
      "❌ Puxar a tomada da parede em vez de apertar o botão de parada de emergência, descalibrando a memória do eixo X.",
      "❌ Destravar o botão de emergência e dar partida sem antes retirar linhas enroscadas na lançadeira.",
      "❌ Usar o botão de emergência como chave liga/desliga comum no final de todo expediente de trabalho."
    ],
    troubleshootingTips: [
      "A máquina não liga e exibe mensagem 'Emergency Switch Active': o botão vermelho cogumelo de emergência está travado apertado; gire o botão no sentido horário para destravá-lo.",
      "Após uma parada de emergência, a máquina voltou 3 pontos fora do lugar: o freio mecânico ou a correia do eixo X sofreu leve escorregamento; faça o retorno de pontos (Backstep / Rewind) de 5 pontos no painel antes de reiniciar.",
      "O resistor de frenagem traseiro está esquentando muito: paradas de emergência excessivas em curto intervalo; aguarde 5 minutos para resfriamento dos componentes de potência."
    ],
    dicaArtrelados: "Deu algum problema no bordado (a linha enroscou ou o tecido puxou)? Não hesite em apertar o botão vermelho de emergência na hora! As máquinas modernas foram feitas para salvar exatamente o ponto em que pararam. Você arruma a linha, destrava o botão e a máquina continua como se nada tivesse acontecido!",
    voceSabia: "Os botões de parada de emergência do tipo 'cogumelo vermelho' foram padronizados internacionalmente pela norma ISO 13850 para que qualquer operador consiga bater com a palma da mão ou cotovelo de forma instintiva em frações de segundo!",
    practicalExercise: "Localize o botão vermelho de emergência no painel da sua máquina de bordar. Treine pressioná-lo com a palma da mão e observe como ele trava com um clique firme. Gire no sentido das setinhas para destravá-lo e veja a tela da máquina voltar ao modo normal de prontidão.",
    quickSummary: "Sistema de frenagem ultrarrápida do eixo X que imobiliza o pantógrafo instantaneamente em emergências, preservando a matriz e a integridade mecânica.",
    relatedTerms: ["Emergency Stop", "E-Stop", "Freio Dinâmico", "Servomotor", "NR-12", "Segurança Operacional", "Hardware"],
    tags: ["xaxisbrake", "freio", "emergencia", "seguranca", "hardware", "nr12", "mecanica"]
  },
  {
    id: "x-coordinate-truncation-rounding-error-arredondamento-x",
    code: "X-055",
    letter: "X",
    term: "X-Coordinate Truncation & Rounding Error — Truncamento de Coordenadas X & Prevenção de Erros de Arredondamento",
    pronunciation: "éks-ko-ór-di-nêit trun-kêi-shon end ráun-ding ér-ror — trun-ka-men-tu de kor-de-na-das",
    level: "Avançado 🔴",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'truncation' (corte de casas decimais em computação numérica) e 'rounding error' (acúmulo de erros de arredondamento em conversões sucessivas de ponto flutuante para inteiros).",
    summary: "Fenômeno digital em que a conversão de medidas métricas fracionárias para inteiros de 0,1 mm acumula pequenos desvios dimensionais no eixo X em matrizes gigantes.",
    definition: "O X-Coordinate Truncation & Rounding Error (Truncamento de Coordenadas no Eixo X / Erro Cumulativo de Arredondamento / Floating-Point to Integer Quantization Error) é a distorção dimensional matemática que pode ocorrer quando uma matriz vetorial de alta precisão desenhada em ponto flutuante no software CAD (ex.: X=124,567 mm) é compilada para arquivos de pontos industriais (.DST, .EXP), cuja resolução é restrita a incrementos inteiros de décimos de milímetro (0,1 mm / 1 ponto = 100 µm).",
    technicalDetails: "Se um algoritmo de pós-processamento de software simples apenas truncar as casas decimais (descartando os centésimos) em vez de aplicar o algoritmo de difusão de erro de Bresenham ou acumulação de resíduo flutuante (Error Accumulator), uma sequência de 500 agulhadas sucessivas com erro residual de +0,04 mm pode gerar um desvio acumulado de até +2,0 mm no final da linha de bordado. Os softwares profissionais de ponta corrigem isso compensando o resíduo fracionário no ponto subsequente, mantendo o erro global acumulado abaixo de 0,05 mm em matrizes de qualquer escala.",
    beginnerExplanation: "É como quando você vai somar centavos no supermercado: se você jogar fora as moedinhas de 1 centavo toda hora, no final da compra vai faltar dinheiro na conta! No computador do bordado, se ele esquecer os pedacinhos microscópicos de milímetro a cada ponto, no final de um desenho grande o bordado pode terminar 2 milímetros fora do lugar!",
    howItWorks: [
      "1. O software calcula a posição do nó vetorial com precisão de dupla precisão de 64 bits.",
      "2. Ao exportar para o formato de máquina (.DST), o conversor decompõe o valor em unidades de 0,1 mm.",
      "3. O acumulador de resíduo digital retém a sobra decimal (ex.: 0,067 mm).",
      "4. Quando a soma dos resíduos acumulados atinge 0,1 mm, o software adiciona +1 unidade no próximo delta X.",
      "5. A posição final da matriz permanece geometricamente perfeita com erro zero.",
      "6. A máquina costura os pontos sem nenhuma deriva dimensional progressiva.",
      "7. Grandes molduras e faixas de toalhas fecham com precisão milimétrica absoluta."
    ],
    applications: [
      "Digitalização de matrizes gigantes de colchas de cama e cortinas com mais de 500 mm de largura.",
      "Conversão entre formatos métricos (milímetros) e imperiais (polegadas / frações de polegada).",
      "Bordados geométricos de alta precisão com encaixes de quebra-cabeça e mosaicos.",
      "Desenvolvimento de pós-processadores e drivers para novas máquinas de bordar."
    ],
    characteristics: [
      "Algoritmo de compensação contínua de resíduo numérico.",
      "Garantia de fidelidade dimensional dimensional 1:1 com o vetor original.",
      "Eliminação definitiva de desvios e derivas cumulativas em matrizes longas."
    ],
    commonErrors: [
      "❌ Converter e re-converter uma matriz repetidas vezes entre formatos diferentes (.DST para .PES para .JEF para .DST), acumulando erros de arredondamento a cada salvamento.",
      "❌ Usar conversores de matrizes gratuitos e desatualizados da internet que descartam os resíduos decimais.",
      "❌ Digitalizar desenhos complexos sem travar a grade com precisão milimétrica."
    ],
    troubleshootingTips: [
      "Um logotipo com moldura quadrada de 200 mm fechou com 198 mm na horizontal: houve truncamento sucessivo em conversões de arquivo; exporte a matriz diretamente do arquivo vetorial mestre original (.EMB/.PES) sem passar por conversões intermediárias.",
      "As letras de um texto longo vão se afastando da linha base progressivamente: o arquivo sofreu deriva de coordenadas; abra no software mestre, alinhe pela base inferior e regenere o arquivo de pontos com compilador moderno.",
      "O software de bordado apresenta mensagens de erro de 'Ponto Duplicado': limpe os pontos com distância menor que 0,1 mm usando o filtro de agulhadas mínimas."
    ],
    dicaArtrelados: "Guarde sempre o arquivo 'mãe' original da sua matriz no formato do seu programa (como o .EMB do Wilcom ou o .PES original)! Nunca faça edições em cima do arquivo .DST de máquina, pois ele já perdeu as casas decimais das curvas. Editar sempre no arquivo mestre mantém sua matriz perfeita para sempre!",
    voceSabia: "O erro cumulativo de arredondamento em sistemas binários foi a causa do famoso acidente do míssil Patriot na Guerra do Golfo em 1991, onde um acúmulo de frações de microssegundos em um contador digital descalibrou o sistema de rastreamento!",
    practicalExercise: "No seu software de bordado, crie uma linha de 100 pontos retos de 1,0 mm cada. Meça o comprimento total com a régua digital: veja como a régua marca exatamente 100,0 mm graças ao algoritmo de compensação de resíduo que impede qualquer erro de arredondamento.",
    quickSummary: "Tratamento matemático de resíduos decimais que impede o acúmulo de erros de arredondamento no eixo X em conversões de arquivos de bordado.",
    relatedTerms: ["Truncamento", "Ponto Flutuante", "DST", "EXP", "Conversão de Matriz", "Precisão Dimensional", "Wilcom"],
    tags: ["xcoordinatetruncation", "arredondamento", "truncamento", "precisao", "software", "formatos", "matematica"]
  }
];

import { Verbete } from "../types";

export const VERBETES_LETTER_S9: Verbete[] = [
  {
    id: "sensor-piezoeletrico-de-tensao-e-quebra-de-linha",
    code: "S-067",
    letter: "S",
    term: "Sensor Piezoelétrico de Tensão Dinâmica e Quebra de Linha (Piezo Thread Break Sensor)",
    pronunciation: "sen-sor pi-e-zo-e-lé-tri-co de ten-são di-nâ-mi-ca e que-bra de li-nha",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do grego piezein (pressionar) e do latim sensus (percepção). Inovação da mecatrônica têxtil japonesa e alemã.",
    summary: "Sensor eletrônico ultrassensível por cristal cerâmico que detecta a vibração mecânica do fio em movimento e para a máquina instantaneamente se a linha quebrar.",
    definition: "O Sensor Piezoelétrico de Tensão Dinâmica e Quebra de Linha (Piezo Thread Break Detector) é um dispositivo mecatrônico avançado instalado na guia superior do cabeçote das máquinas industriais modernas. Ao contrário das antigas roldanas ópticas que dependiam do giro de rodinhas plásticas, o elemento piezoelétrico converte a microvibração mecânica e a oscilação acústica da passagem do fio de poliéster sob tensão em um micro-sinal elétrico contínuo em milivolts. Quando o fio se rompe ou escapa da agulha, a cessação imediata da onda piezoelétrica é processada pela placa-mãe em menos de 10 milissegundos, acionando o freio magnético do eixo principal em um único ponto após a falha.",
    technicalDetails: "Trabalha com sensibilidade ajustável no software do DSP (Digital Signal Processor) de 1 a 9 níveis. Permite filtrar ruídos de vibração mecânica do cabeçote (Frequency Noise Gate) e detectar não apenas a quebra total, mas também o desfilamento parcial de cabos (fio esgaçado) e a falta de linha de bobina (Bottom Thread Empty) pela alteração da curva harmônica de tensão.",
    beginnerExplanation: "É o 'ouvido biônico' da máquina moderna. Ele encosta levemente na linha e sente ela tremendo enquanto borda. Se a linha quebrar, ele percebe no mesmo instante e para a máquina na hora, sem deixar aquele buraco enorme sem bordar que dá tanto trabalho para voltar.",
    howItWorks: [
      "1. A linha passa suavemente encostada na lâmina de cerâmica do sensor piezoelétrico.",
      "2. A cada ponto formado, a puxada da alavanca estica-linha gera um pulso de tensão e vibração.",
      "3. O cristal piezoelétrico comprime-se microscopicamente e gera um sinal elétrico analógico.",
      "4. O microcontrolador do cabeçote valida o sinal a cada ciclo de rotação de 360° do eixo.",
      "5. Se o sinal elétrico for interrompido por 1 ou 2 ciclos, o circuito corta o sinal e aciona o freio motor.",
      "6. A máquina para com a agulha levantada e acende o LED vermelho do cabeçote indicando quebra de linha."
    ],
    applications: [
      "Máquinas industriais multicabeças de alta velocidade (1.000 a 1.200 PPM).",
      "Produção de grandes tiragens onde uma quebra de linha não detectada estragaria dezenas de peças.",
      "Bordados com fios delicados e metálicos que exigem detecção ultrarrápida antes de embolar no cabeçote.",
      "Bordados noturnos automatizados com mínima intervenção de operadores."
    ],
    characteristics: [
      "Zero peças móveis: não acumula fiapos nem trava como as roldanas plásticas antigas.",
      "Tempo de resposta ultrarrápido inferior a 10 milissegundos.",
      "Imune a poeira e variações de iluminação do ambiente de fábrica."
    ],
    commonErrors: [
      "❌ Deixar acumular crosta de cola spray ou cera de linha sobre a pastilha de cerâmica do sensor.",
      "❌ Passar a linha fora do canal correto do sensor piezoelétrico, fazendo a máquina acusar falso alarme de quebra.",
      "❌ Regular a sensibilidade no máximo em máquinas antigas com muita vibração estrutural."
    ],
    troubleshootingTips: [
      "Máquina parando a cada 5 segundos acusando quebra de linha falsa: limpe a ranhura do sensor com um pincel macio e álcool isopropílico; se persistir, diminua a sensibilidade no painel de 7 para 4.",
      "Máquina continua bordando no vazio por mais de 20 pontos após a linha arrebentar: aumente a sensibilidade do sensor no DSP e verifique se o fio está realmente fazendo contato mecânico com a pastilha.",
      "LED do cabeçote piscando em amarelo: indica acúmulo de sujeira ou necessidade de auto-calibração do sensor no menu de serviço."
    ],
    dicaArtrelados: "Uma vez por mês, passe um pedaço de linha de algodão embebida em álcool isopropílico dentro do canalzinho do sensor piezoelétrico como se fosse fio dental! Isso remove a poeira de linha e óleo seco, garantindo que o sensor nunca dê alarme falso nem deixe passar quebra de linha!",
    voceSabia: "O efeito piezoelétrico foi descoberto em 1880 pelos irmãos franceses Pierre e Jacques Curie ao estudarem cristais de quartzo e turmalina, e hoje é o mesmo princípio que faz funcionar desde acendedores de fogão até sonares de submarinos e sensores de bordado de ponta!",
    practicalExercise: "Na sua máquina, passe a linha pelo cabeçote. Com a máquina parada no modo de teste de sensores no painel, puxe a linha com a mão e observe no visor gráfico a barrinha de sinal subir e descer conforme a pressão do fio sobre o sensor.",
    quickSummary: "Sensor Piezoelétrico é o componente eletrônico de alta precisão que detecta a vibração da linha e freia a máquina instantaneamente se o fio quebrar.",
    relatedTerms: ["Sensor de Quebra de Linha", "Alavanca Estica-Linha", "Freio Magnético", "Painel DSP", "Velocidade PPM"],
    tags: ["sensor", "piezoeletrico", "quebra de linha", "mecanica", "eletronica", "manutencao"]
  },
  {
    id: "sapatilha-compensadora-e-calcadores-especiais",
    code: "S-068",
    letter: "S",
    term: "Sapatilha Compensadora e Calcadores Especiais de Vivo e Cordonete (Compensating & Cording Presser Feet)",
    pronunciation: "sa-pa-ti-lha com-pen-sa-do-ra e cal-ca-do-res es-pe-ci-ais de vi-vo e cor-do-ne-te",
    level: "Intermediário 🟡",
    category: "Bastidores & Acessórios",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do italiano ciabatta (sapato rasteiro) e do latim compensare (equilibrar pesos). Adaptações mecânicas de precisão.",
    summary: "Calcadores com base em desnível escalonado ou canaleta central que mantêm a pressão firme sobre tecidos com desníveis, costuras grossas ou guiam cordões.",
    definition: "A Sapatilha Compensadora (Compensating Foot / Calcador com Mola Lateral) e os Calcadores Especiais para Cordonete e Vivos são pés-calcadores modificados que substituem o calcador circular padrão da máquina de bordar. A versão compensadora possui a base dividida em dois níveis articulados por micro-molas, permitindo que um lado do calcador apoie sobre uma dobra grossa (como uma barra de jeans ou zíper) enquanto o outro lado pressiona o tecido rebaixado com a mesma força uniforme. Já a versão de cordonete possui um túnel guia central que direciona cordões e fios grossos diretamente sob a agulha para bordados soutache e relevos com cordone.",
    technicalDetails: "Fabricados em aço inoxidável retificado ou resina de Teflon antifricção. Os modelos escalonados variam de 1,0 mm a 4,0 mm de desnível lateral. Exigem ajuste preciso da altura do eixo do calcador para que a base toque o tecido no ponto morto inferior sem esmagar o enchimento nem permitir o efeito pula-pula (flagging).",
    beginnerExplanation: "São pezinhos especiais da máquina que têm um degrauzinho embaixo ou um furinho para passar cordão. Eles servem para bordar bem em cima de costuras grossas de bolsas ou para prender cordões brilhantes decorativos sem a agulha bater torto.",
    howItWorks: [
      "1. O operador desparafusa o calcador padrão do cabeçote.",
      "2. Instala o calcador compensador com o desnível virado para a borda da costura grossa.",
      "3. Ajusta a altura da barra do calcador para manter 0,5 mm a 1,0 mm de folga sobre o tecido.",
      "4. Ao bordar rente à costura, a mola compensadora absorve o degrau mantendo o tecido plano.",
      "5. A agulha penetra reta e o laçador captura a linha perfeitamente sem falhar ponto."
    ],
    applications: [
      "Bordados em peças montadas com costuras grossas: mochilas, tênis, bonés e jaquetas jeans.",
      "Bordado de cordões decorativos dourados e prateados (Cording / Soutache).",
      "Aplicação de vivos plásticos e zíperes em nécessaires e bolsas estruturadas.",
      "Bordados personalizados em golas duplas e peitilhos de camisa polo."
    ],
    characteristics: [
      "Base articulada com mola de compensação de altura milimétrica.",
      "Elimina quebras de agulha provocadas por inclinação em degraus de costura.",
      "Disponível em versões esquerda, direita e com canaleta guia tubular."
    ],
    commonErrors: [
      "❌ Instalar o calcador compensador com o degrau invertido em relação à costura da peça.",
      "❌ Não apertar com firmeza o parafuso de fixação do pé-calcador, fazendo-o girar e colidir com a agulha.",
      "❌ Usar calcador de metal comum em tecidos vinílicos que grudam e travam o arrasto do bastidor."
    ],
    troubleshootingTips: [
      "Agulha quebrando sempre que o bordado chega perto do zíper ou da costura da barra: instale o calcador compensador escalonado correspondente à espessura do degrau.",
      "Cordão decorativo ficando solto ou sendo perfurado pela metade: utilize o calcador com canaleta guia de cordonete correspondente ao diâmetro exato do cordão (ex: 2 mm).",
      "Tecido de couro sintético repuxando e fazendo barulho: troque o calcador de aço por um calcador com revestimento inferior de Teflon."
    ],
    dicaArtrelados: "Para bordar nécessaires prontas com zíper grosso: use o calcador compensador com o lado rebaixado apoiado na base do zíper! Você consegue bordar a apenas 2 milímetros dos dentes do zíper com segurança total e acabamento profissional digno de boutique!",
    voceSabia: "Na alta-costura parisiense do século XIX, a técnica de aplicar cordonetes bordados à mão chamava-se 'Passementerie', e hoje calcadores de cordonete computadorizados fazem em segundos o trabalho que levava dias!",
    practicalExercise: "Pegue um pedaço de jeans dobrado com uma barra grossa. Tente bordar uma linha reta rente à barra com o calcador comum e repare como ele tomba; depois coloque o calcador compensador e sinta a estabilidade impecável da costura.",
    quickSummary: "Sapatilha Compensadora é o pé-calcador especial com base em degrau que nivela costuras grossas e permite bordar perto de zíperes e barras sem quebrar agulhas.",
    relatedTerms: ["Pé-Calcador (Presser Foot)", "Efeito Pula-Pula (Flagging)", "Bordado Soutache", "Calcador de Teflon", "Ponto Morto Inferior"],
    tags: ["sapatilha", "calcador", "compensador", "cordonete", "ziper", "acessorios"]
  },
  {
    id: "spray-reposicionavel-e-adesivacao-temporaria",
    code: "S-069",
    letter: "S",
    term: "Spray Reposicionável e Técnicas de Adesivação Temporária (Temporary Adhesive Spray)",
    pronunciation: "is-prei re-po-zi-ci-o-ná-vel e téc-ni-cas de a-de-zi-va-são tem-po-rá-ri-a",
    level: "Iniciante 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês spray (aerossol pulverizado) e do latim adhaesio (aderência). Criado na indústria gráfica e adaptado para têxteis.",
    summary: "Cola em aerossol de fixação suave que cola o tecido temporariamente sobre a entretela presa no bastidor, sem deixar marcas de pressão (Hoop Burn).",
    definition: "O Spray Reposicionável (Cola Temporária para Bordado / Temporary Embroidery Adhesive Spray / Mist Spray) é um adesivo de base sintética formulado especificamente para a união temporária de entretelas, tecidos, apliques e feltros durante o processo de bordado. Sua formulação química proporciona uma película pegajosa de baixa aderência (tack suave) que não transfere resíduos pegajosos para o tecido nem engoma a agulha de costura. É a base técnica fundamental para o método de bordado flutuante (Floating Method), permitindo bordar tecidos sensíveis que não podem ser presos diretamente pelo aro do bastidor.",
    technicalDetails: "Formulado com polímeros de borracha sintética e propelentes sem CFC. Deve ser aplicado a uma distância de 25 cm a 30 cm da entretela em camada fina de névoa uniforme. Perde o poder adesivo após 12 a 24 horas ou desaparece totalmente na primeira lavagem sem manchar as fibras têxteis.",
    beginnerExplanation: "É a colinha em spray mágica das bordadeiras! Você espirra um pouquinho só na entretela que já está no bastidor e cola a toalha ou veludo por cima com as mãos. Assim você borda sem prender a toalha no bastidor e não deixa aquela marca feia redonda esmagada.",
    howItWorks: [
      "1. A entretela rasgável ou hidrossolúvel é colocada e esticada firmemente no bastidor.",
      "2. Agita-se bem a lata de spray reposicionável.",
      "3. Borrifa-se uma névoa suave e uniforme a cerca de 30 cm de distância (longe da máquina).",
      "4. Aguardam-se 5 segundos para o solvente evaporar e o adesivo ficar no ponto de 'tack' (pegajoso).",
      "5. Posiciona-se o tecido ou a toalha sobre a entretela adesivada alisando com as mãos do centro para as bordas.",
      "6. Encaixa-se o bastidor na máquina e executa-se o bordado com total estabilidade."
    ],
    applications: [
      "Bordado flutuante em toalhas de banho felpudas e veludo (evita marcas de bastidor / Hoop Burn).",
      "Fixação de bolsos, golas e meias pequenas que não cabem no bastidor.",
      "Posicionamento preciso de tecidos de aplique (Appliqué) antes da costura de fixação.",
      "União de folhas de entretela hidrossolúvel em peças de renda guipir (FSL)."
    ],
    characteristics: [
      "Permite descolar e reposicionar o tecido várias vezes sem rasgar a entretela.",
      "Não endurece o tecido nem mancha tecidos claros.",
      "Fórmula especial que não empasta a agulha com grumos de cola."
    ],
    commonErrors: [
      "❌ Aplicar o spray reposicionável perto da máquina de bordar, fazendo a névoa colar nos trilhos e guias do pantógrafo.",
      "❌ Espirrar muito perto ou em excesso criando poças líquidas que mancham tecidos delicados de seda.",
      "❌ Usar cola spray permanente de artesanato que empasta a agulha e quebra a linha a cada 3 pontos."
    ],
    troubleshootingTips: [
      "Agulha cheia de cola preta quebrando a linha sem parar: você usou cola permanente ou não esperou secar; limpe a agulha com álcool e troque por agulha Anti-Glue (revestida de titânio ou Teflon).",
      "O tecido descolou da entretela no meio do bordado: a camada de spray foi muito rala ou a entretela acumulou poeira; adicione alfinetes de segurança fora da área de bordado ou use pontos de alinhavo (Basting Box).",
      "Névoa grudenta no chão do ateliê: aplique o spray sempre dentro de uma caixa de papelão funda (cabine de pintura caseira)."
    ],
    dicaArtrelados: "Nunca espirre cola spray perto da sua máquina de bordar! Faça uma 'cabine de spray' usando uma caixa de papelão aberta no chão ou numa mesa distante. Coloque o bastidor dentro da caixa para borrifar. Seus trilhos e a carcaça da sua máquina vão ficar limpinhos e brilhantes para sempre!",
    voceSabia: "O conceito de adesivo reposicionável foi descoberto por acaso em 1968 pelo cientista Spencer Silver nos laboratórios da 3M, quando ele tentava criar uma supercola e acabou criando uma cola fraca que deu origem aos famosos blocos de notas Post-it!",
    practicalExercise: "Coloque uma entretela rasgável no bastidor. Vá para longe da máquina e borrife uma nuvem leve de spray reposicionável a 30 cm. Espere 5 segundos e cole um retalho de toalha felpuda. Puxe suavemente para sentir a aderência perfeita sem esmagar as cerdas da toalha.",
    quickSummary: "Spray Reposicionável é o adesivo em aerossol temporário que fixa tecidos sobre a entretela sem precisar prender a peça no bastidor, evitando marcas de esmagamento.",
    relatedTerms: ["Bordado Flutuante (Floating)", "Marca de Bastidor (Hoop Burn)", "Alinhavo (Basting Stitch)", "Agulha Anti-Glue", "Entretela Rasgável"],
    tags: ["spray", "cola temporaria", "adesivo", "flutuante", "floating", "hoop burn", "entretela"]
  },
  {
    id: "sequenciamento-de-troca-de-cores-color-sort",
    code: "S-070",
    letter: "S",
    term: "Sequenciamento de Troca de Cores e Otimização de Paradas (Color Sort & Stop Reduction)",
    pronunciation: "se-quen-ci-a-men-to de tro-ca de co-res e o-ti-mi-za-são de pa-ra-das",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim sequentia (continuidade ordenada) e do inglês color sort (ordenação cromática).",
    summary: "Recurso de software que agrupa e borda todos os objetos da mesma cor de uma só vez, reduzindo paradas desnecessárias na máquina.",
    definition: "O Sequenciamento de Troca de Cores e Otimização de Paradas (Color Sort / Color Grouping / Otimizador de Trocas de Linha) é a função algorítmica presente em softwares de criação e edição de bordados (como Wilcom, Embird, Pe-Design) que analisa toda a árvore de objetos da matriz e reagrupa elementos que utilizam a mesma cor de linha para que sejam bordados sequencialmente. Isso evita que a máquina faça múltiplas paradas para trocar a mesma cor de linha diversas vezes, reduzindo o tempo total de produção em até 60% e minimizando pontas de linha soltas.",
    technicalDetails: "O algoritmo de Color Sort deve respeitar rigorosamente a ordem de camadas (Z-Order / Stacking Order). O software verifica se um objeto da cor A fica por baixo de um objeto da cor B; se não houver sobreposição física entre eles, o agrupamento é executado com segurança. Se houver sobreposição direta (Underlay ou detalhe inferior), o software mantém as cores separadas para não inverter a hierarquia visual do desenho.",
    beginnerExplanation: "É o botão mágico do programa que junta tudo o que é vermelho para bordar junto, depois tudo o que é azul, depois tudo o que é amarelo. Em vez de você trocar de linha 15 vezes na sua máquina de 1 agulha, você troca só 4 ou 5 vezes!",
    howItWorks: [
      "1. A programadora monta uma matriz composta por vários desenhos ou letras repetidas.",
      "2. O desenho inicial contém 18 trocas de cores alternadas.",
      "3. Clica-se na ferramenta 'Otimizar Cores' ou 'Color Sort'.",
      "4. O programa analisa quais partes da mesma cor não ficam em cima umas das outras.",
      "5. Reorganiza a lista de comandos e consolida os blocos da mesma linha.",
      "6. A matriz final passa de 18 paradas para apenas 5 trocas de cor organizadas."
    ],
    applications: [
      "Bordado de múltiplos chaveiros, brasões ou tags no mesmo bastidor (Multi-Item Hooping).",
      "Nomes compostos e frases com letras decoradas em máquinas domésticas de 1 agulha.",
      "Produção de lembrancinhas de maternidade e brindes corporativos em série.",
      "Redução do desgaste do sensor de corte e do mecanismo de troca de agulha da máquina."
    ],
    characteristics: [
      "Economiza até 60% do tempo de operação manual em máquinas de 1 agulha.",
      "Preserva a integridade estética das sobreposições de camadas do desenho.",
      "Gera uma ficha de cores limpa, sequencial e profissional."
    ],
    commonErrors: [
      "❌ Forçar o agrupamento de cores manual sem verificar se a sombra ou o contorno preto foi parar debaixo do enchimento colorido.",
      "❌ Fazer Color Sort em matrizes de aplique (Appliqué), fundindo a costura de marcação, fixação e acabamento e estragando o processo de recorte.",
      "❌ Não simular o desenho no reprodutor de pontos após a otimização de cores."
    ],
    troubleshootingTips: [
      "O contorno preto bordou antes do miolo da flor após o Color Sort: desfaça a ação e agrupe as cores manualmente respeitando a ordem de fundo para frente.",
      "A máquina não parou para colocar o tecido de aplique: em matrizes de aplique não use Color Sort automático, pois as paradas de corte do tecido são fundamentais.",
      "Muitos fios longos cruzando a matriz após juntar a mesma cor: certifique-se de que o software inseriu comandos de corte (Trims) entre objetos distantes da mesma cor."
    ],
    dicaArtrelados: "Quando for bordar 4 toalhinhas ou 6 chaveiros no mesmo bastidor grande: monte todos os desenhos na tela e aplique o 'Color Sort'! A máquina vai bordar o corpinho de todos os bichinhos de uma vez, depois todos os olhinhos e depois todos os lacinhos. Você só troca a linha uma vez para a turma toda!",
    voceSabia: "Em uma máquina industrial de 12 cabeças, cada troca de cor desnecessária faz a máquina parar e reposicionar o bloco de agulhas por 6 a 8 segundos. Eliminar 10 trocas inúteis em uma matriz economiza mais de 1 hora de produção por turno de trabalho!",
    practicalExercise: "Abra um arquivo com 3 flores iguais copiadas e coladas na tela. Veja que a lista de cores tem 9 paradas (3 de cada flor). Use a função 'Color Sort' e veja a lista reduzir para 3 paradas perfeitas (pétalas, miolos e caules).",
    quickSummary: "Sequenciamento de Troca de Cores é a reorganização no software que junta blocos da mesma linha para bordar tudo junto, economizando tempo e trocas manuais de cone.",
    relatedTerms: ["Ordem de Bordado (Stitching Sequence)", "Troca de Cor (Color Change)", "Camadas (Layers)", "Matriz Multi-Item", "Comando de Corte (Trim)"],
    tags: ["sequenciamento", "color sort", "troca de cores", "otimizacao", "programacao", "wilcom"]
  },
  {
    id: "sistema-de-fixacao-pneumatica-clamps-industriais",
    code: "S-071",
    letter: "S",
    term: "Sistema de Fixação Pneumática de Bastidores e Clamps Industriais (Pneumatic Clamping System)",
    pronunciation: "sis-te-ma de fi-xa-são pneu-má-ti-ca de bas-ti-do-res e clêmps in-dus-tri-ais",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do grego pneuma (ar, sopro) e do inglês clamp (grampo/prensa). Automação industrial para alta produtividade.",
    summary: "Garras automáticas acionadas por ar comprimido que prendem bolsas, calçados, couros e peças prontas no pantógrafo em menos de 1 segundo.",
    definition: "O Sistema de Fixação Pneumática de Bastidores e Clamps Industriais (Air Clamping Frame / Pneumatic Embroidery Clamp / Bastidor Pneumático) é um mecanismo de fixação robotizado acionado por cilindros pneumáticos e ar comprimido a 6 bar de pressão. Em vez de exigir o aperto manual de parafusos de bastidores tradicionais, o operador posiciona a peça pesada (como uma mochila, tênis de corrida, mala de viagem ou bota de couro) entre as mandíbulas de aço emborrachado e aciona um pedal elétrico. Os pistões pneumáticos fecham instantaneamente com força calibrada e uniforme, travando materiais espessos sem distorção e sem esforço físico do operador.",
    technicalDetails: "Alimentado por rede de ar comprimido seco e filtrado com regulador de pressão (4 a 6 bar) e válvula solenóide de 24V DC. As garras são usinadas em alumínio aeronáutico com sapatas de silicone antiderrapante que suportam acelerações de até 1.000 PPM sem deslizamento angular no pantógrafo.",
    beginnerExplanation: "É um bastidor de metal automático movido a ar comprimido que aperta e segura bolsas, sapatos e tecidos supergrossos com o pisar de um pedal. O operador não precisa fazer força nenhuma nas mãos para apertar parafusos pesados.",
    howItWorks: [
      "1. A máquina de bordar é conectada ao compressor de ar com filtro de óleo e umidade.",
      "2. O operador encaixa o clamp pneumático no suporte do pantógrafo.",
      "3. Coloca a bota, boné ou mochila aberta entre as garras de fixação.",
      "4. Pisa no pedal de comando no chão.",
      "5. A válvula de ar dispara e os pistões prensam a peça com força homogênea em 0,3 segundos.",
      "6. A máquina borda em alta velocidade e, ao terminar, o operador pisa no pedal para liberar a peça imediatamente."
    ],
    applications: [
      "Bordados em calçados esportivos, chuteiras e botas de segurança.",
      "Mochilas escolares estruturadas, malas de viagem e bolsas de couro legítimo.",
      "Capas de banco automotivo e estofados náuticos pesados.",
      "Fábricas de uniformes com linhas de produção contínua de alta cadência."
    ],
    characteristics: [
      "Fixação ultra-rápida em menos de 1 segundo por peça.",
      "Pressão milimetricamente uniforme que elimina marcas de parafuso e torções no couro.",
      "Ergonomia total que previne lesões por esforço repetitivo (LER/DORT) nos operadores."
    ],
    commonErrors: [
      "❌ Operar o sistema com ar comprimido úmido sem filtro secador, oxidando os cilindros pneumáticos internos.",
      "❌ Regular a pressão de ar acima de 7 bar esmagando couros finos e rasgando fibras sensíveis.",
      "❌ Posicionar as mãos sob as mandíbulas do clamp durante o acionamento do pedal."
    ],
    troubleshootingTips: [
      "Garras fechando devagar ou com pouca força: verifique o manômetro do compressor; a pressão deve estar entre 5 e 6 bar; drene a água acumulada no filtro da linha de ar.",
      "A peça desliza durante o bordado em alta velocidade: limpe as sapatas de silicone com álcool para remover pó de couro ou troque as borrachas gastas.",
      "Vazamento de ar contínuo com chiado no cabeçote: substitua a mangueira de engate rápido de poliuretano (PU) de 6 mm ressecada."
    ],
    dicaArtrelados: "Para ateliês que bordam chuteiras e mochilas: o investimento em um clamp mecânico ou pneumático se paga nos primeiros meses, pois você borda peças já montadas sem precisar descosturar forros e com zero cansaço nos punhos!",
    voceSabia: "As maiores marcas de calçados do mundo (como Nike e Adidas) usam máquinas de bordar industriais com clamps pneumáticos especiais de braço livre para personalizar nomes e bandeiras nas chuteiras dos jogadores de futebol em menos de 2 minutos!",
    practicalExercise: "Observe a diferença de espessura entre uma camiseta fina (0,3 mm) e uma lateral de mochila com espuma (8 mm). Note como o bastidor comum de plástico entorta ao tentar prender a mochila, enquanto uma garra plana de aço mantém tudo 100% rígido.",
    quickSummary: "Sistema de Fixação Pneumática é o conjunto de garras industriais acionadas por ar comprimido que travam peças grossas como malas, botas e mochilas instantaneamente.",
    relatedTerms: ["Bastidor Clamp", "Pantógrafo Industrial", "Bordado em Couro", "Ergonomia Têxtil", "Ar Comprimido"],
    tags: ["pneumatico", "clamp", "fixacao", "bolsas", "calcados", "automacao", "industrial"]
  },
  {
    id: "solidez-a-luz-e-envelhecimento-fotoquimico-de-fios",
    code: "S-072",
    letter: "S",
    term: "Solidez à Luz e Ensaios de Envelhecimento Fotoquímico de Fios (Lightfastness & UV Degradation)",
    pronunciation: "so-li-dez à luz e en-sa-i-os de en-ve-lhe-ci-men-to fo-to-quí-mi-co de fi-os",
    level: "Intermediário 🟡",
    category: "Fios & Linhas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim soliditas (firmeza/durabilidade) e do grego phos (luz). Normas técnicas internacionais ISO 105-B02 e AATCC 16.",
    summary: "Propriedade química da linha de bordar que mede sua resistência ao desbotamento e à quebra quando exposta aos raios solares ultravioleta (UV).",
    definition: "A Solidez à Luz e a Resistência à Degradação Fotoquímica (Color Lightfastness / UV Resistance / Resistência ao Desbotamento Solar) é o índice técnico normatizado que quantifica a capacidade dos pigmentos e polímeros da linha de bordado (como 100% poliéster trilobal ou raiom viscose) de manterem sua tonalidade cromática, brilho original e resistência à tração após exposição contínua à radiação solar ultravioleta (raios UVA e UVB). Fios de alta solidez utilizam corantes de dispersão com absorvedores de UV que impedem a quebra das cadeias moleculares do corante e do polímero sintético.",
    technicalDetails: "Medida na escala Blue Wool (Lã Azul) de 1 (péssima solidez) a 8 (solidez excepcional) e na escala cinza de desbotamento (Gray Scale 1 a 5). Ensaiada em laboratório através de câmaras de envelhecimento acelerado por lâmpada de arco de xenônio (Xenon Arc Test). Linhas de poliéster atingem solidez 7–8, enquanto fios de raiom costumam atingir 4–5.",
    beginnerExplanation: "É a qualidade da linha que não deixa o bordado desbotar e ficar esbranquiçado quando a roupa toma sol. Bonés, uniformes e bandeiras precisam de linhas com alta solidez à luz para as cores continuarem vivas por anos.",
    howItWorks: [
      "1. A radiação solar ultravioleta atinge as moléculas de corante do fio bordado.",
      "2. Em fios de baixa qualidade, os fótons quebram as ligações químicas do pigmento (fotólise).",
      "3. A cor perde a intensidade ficando opaca, esbranquiçada ou amarelada.",
      "4. Em fios de poliéster nobre com tratamento UV, os aditivos absorvem a radiação e a dissipam em calor inofensivo.",
      "5. A estrutura molecular do fio permanece íntegra, mantendo a cor brilhante e a linha resistente.",
      "6. A peça bordada mantém o aspecto de nova mesmo após anos de uso ao ar livre."
    ],
    applications: [
      "Bordados em uniformes profissionais e esportivos expostos ao sol diário.",
      "Bonés, chapéus de praia e viseiras de corrida.",
      "Estofados automotivos, náuticos (barcos e iates) e toldos externos.",
      "Bandeiras cívicas, estandartes e fardamentos militares de gala."
    ],
    characteristics: [
      "Linha 100% Poliéster Trilobal possui a mais alta solidez à luz do mercado têxtil.",
      "Resistência superior a lavagens industriais com alvejantes à base de cloro.",
      "Garante a reputação de qualidade duradoura das encomendas do ateliê."
    ],
    commonErrors: [
      "❌ Bordar uniformes de operários ou bonés de praia com linha 100% Raiom, que desbota com rapidez sob sol forte.",
      "❌ Armazenar cones de linha expostos diretamente na janela do ateliê tomando sol durante meses antes do uso.",
      "❌ Usar linhas comuns de costura sem tratamento UV em capas de barco e estofados náuticos."
    ],
    troubleshootingTips: [
      "Bordado de boné ficou amarelo/desbotado após 3 meses de praia: a linha utilizada era raiom ou poliéster de baixa qualidade sem proteção UV; refaça o trabalho com linha 100% Poliéster Trilobal de marca homologada.",
      "Linha estourando fácil logo após sair do cone: os cones ficaram guardados na luz solar direta e o polímero ressecou; descarte as camadas externas do cone ou use linhas novas guardadas em gavetas escuras.",
      "A cor vermelha desbotou mais rápido que as outras: pigmentos vermelhos e laranjas são naturalmente mais sensíveis aos fótons de luz; utilize linhas com classificação Blue Wool grau 7 ou 8."
    ],
    dicaArtrelados: "Guarde seus cones de linha sempre em gaveteiros fechados, caixas plásticas com proteção UV ou longe de janelas ensolaradas! A luz do sol que bate na prateleira do ateliê vai 'comendo' a cor do cone antes mesmo de você bordar a peça da cliente!",
    voceSabia: "Bandeiras bordadas que ficam no topo de edifícios governamentais enfrentam ventos de 80 km/h e sol implacável o ano todo; por isso, as normas militares exigem exclusivamente linhas de poliéster de alta tenacidade com teste de xenônio grau 8!",
    practicalExercise: "Pegue dois pedaços de feltro bordados com a mesma flor: um bordado com fio de poliéster e outro com fio de raiom comum. Cole um deles na janela onde bate sol direto por 30 dias e guarde o outro na gaveta. Compare a diferença impressionante de brilho e cor após um mês!",
    quickSummary: "Solidez à Luz é a capacidade química da linha de resistir aos raios solares ultravioleta sem perder a cor viva, brilho e força mecânica.",
    relatedTerms: ["Poliéster Trilobal", "Raiom Viscose", "Radiação Ultravioleta (UV)", "Resistência ao Cloro", "Armazenamento de Linhas"],
    tags: ["solidez", "luz solar", "uv", "desbotamento", "poliester", "qualidade", "linhas"]
  },
  {
    id: "sistema-de-oleamento-central-e-bomba-positiva",
    code: "S-073",
    letter: "S",
    term: "Sistema de Oleamento Central e Bomba de Lubrificação Positiva (Central Automatic Lubrication System)",
    pronunciation: "sis-te-ma de o-le-a-men-to cen-tral e bom-ba de lu-bri-fi-ca-são po-zi-ti-va",
    level: "Avançado 🔴",
    category: "Mecânica & Manutenção",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim oleum (azeite/óleo) e da engenharia mecatrônica de lubrificação sob pressão positiva.",
    summary: "Circuito fechado com reservatório e microbomba que distribui óleo límpido automaticamente para todos os eixos e lançadeiras sem manchar tecidos.",
    definition: "O Sistema de Oleamento Central e Bomba de Lubrificação Positiva (Automatic Centralized Oil Lubrication System / Micro-Pump Oiler) é o mecanismo automatizado de manutenção presente em máquinas industriais e multicabeças modernas que substitui a necessidade de pingar óleo manualmente com almotolia em dezenas de pontos mecânicos diários. O sistema é composto por um reservatório central transparente, filtro microporoso de sucção, bomba de pistão acionada pelo motor principal e uma rede de microtubos flexíveis de poliuretano com dosadores calibrados (Wick Droppers) que enviam microgotas dosadas de óleo branco mineral diretamente às buchas dos eixos, barras de agulha e pista da lançadeira rotativa.",
    technicalDetails: "Utiliza óleo mineral de altíssima pureza com viscosidade ISO VG 10 a 22 (Clear White Mineral Oil para máquinas de bordar). Possui sensor eletrônico de nível mínimo no reservatório acoplado ao painel DSP, que bloqueia o início do bordado se o nível de óleo estiver baixo, evitando travamentos de eixo e superaquecimento de lançadeiras.",
    beginnerExplanation: "É como o sistema de circulação de óleo do motor de um carro, só que na máquina de bordar. Ela tem um tanquinho de óleo transparente e caninhos que levam a quantidade exata de óleo para todas as peças que giram rápido, sem você precisar ficar pingando óleo todo dia com o vidrinho na mão.",
    howItWorks: [
      "1. O operador abastece o reservatório central com óleo branco mineral próprio para bordadeiras.",
      "2. Ao ligar a máquina e iniciar o bordado, a microbomba mecânica pressuriza a linha de distribuição.",
      "3. Os dosadores enviam microfrações de gota de óleo na frequência exata para as lançadeiras e buchas.",
      "4. O excesso de óleo é recolhido por feltros de retorno e canaletas de drenagem com filtro de feltro.",
      "5. O sistema mantém os mecanismos frios, silenciosos e com atrito mínimo a 1.000 PPM.",
      "6. Evita respingos de óleo nos tecidos e bordados dos clientes."
    ],
    applications: [
      "Máquinas industriais de 1 a 24 cabeças operando em regime de 8 a 24 horas diárias.",
      "Prevenção de paradas não programadas por engripamento de buchas e eixos principais.",
      "Garantia de bordados 100% limpos e isentos de respingos negros de óleo em tecidos brancos.",
      "Aumento da vida útil das lançadeiras rotativas em até 300%."
    ],
    characteristics: [
      "Dosagem volumétrica precisa que elimina falta ou excesso de lubrificação.",
      "Sensor eletrônico no painel que avisa quando o nível de óleo está no fim.",
      "Reduz em 90% o tempo diário de manutenção mecânica preventiva."
    ],
    commonErrors: [
      "❌ Usar óleo automotivo grosso, óleo de cozinha ou lubrificantes em aerossol desengripantes no reservatório central.",
      "❌ Deixar o reservatório esvaziar totalmente gerando bolhas de ar na tubulação (ar no sistema).",
      "❌ Esquecer de limpar o feltro de retorno de óleo da caixa da lançadeira acumulando borra de fiapos."
    ],
    troubleshootingTips: [
      "Mensagem 'Oil Level Low' no painel da máquina: complete o reservatório central com óleo branco mineral Singer/Tajima ISO VG 10 até a marca máxima.",
      "Pingos de óleo manchando o tecido branco no primeiro bordado da manhã: a vazão da bomba está muito alta; regule o parafuso micrométrico de retorno no bloco distribuidor para diminuir o fluxo de gotas.",
      "Lançadeira chiando e esquentando mesmo com o tanque cheio: verifique se o microtubo transparente que vai para aquele cabeçote não está dobrado ou entupido por sujeira."
    ],
    dicaArtrelados: "Use SOMENTE óleo branco transparente e límpido próprio para máquinas de bordar! Se você usar óleo amarelo comum ou desengripante de spray, além de estragar os tubinhos transparentes, uma única gotinha pode manchar para sempre o vestido de batizado de seda branca da sua cliente!",
    voceSabia: "As máquinas de bordar industriais mais modernas do mundo possuem cabeçotes 'Semi-Dry' (Semissecos) com rolamentos selados de cerâmica que funcionam sem óleo nenhum na barra de agulha, garantindo risco zero de manchas em tecidos de alta costura!",
    practicalExercise: "Localize o reservatório de óleo da sua máquina ou, se ela for doméstica, localize os 2 pontos vitais de lubrificação diária da lançadeira rotativa indicados no manual. Coloque exatamente 1 gota de óleo mineral na pista da lançadeira e sinta como o som da máquina fica suave e silencioso.",
    quickSummary: "Sistema de Oleamento Central é a rede de tubos e bomba automática que lubrifica continuamente as engrenagens e lançadeiras da máquina com a dose perfeita de óleo.",
    relatedTerms: ["Óleo Branco Mineral", "Lançadeira Rotativa", "Manutenção Preventiva", "Viscosidade ISO VG 10", "Cabeçote Semi-Dry"],
    tags: ["oleamento", "lubrificacao", "bomba", "oleo mineral", "manutencao", "mecanica"]
  },
  {
    id: "simulacao-de-custos-e-precificacao-por-minuto-de-maquina",
    code: "S-074",
    letter: "S",
    term: "Simulação de Custos de Precificação por Minuto de Máquina e Hora Operacional (Embroidery Costing Formula)",
    pronunciation: "si-mu-la-são de cus-tos de pre-ci-fi-ca-são por mi-nu-to de má-qui-na e ho-ra o-pe-ra-ci-o-nal",
    level: "Iniciante 🟢",
    category: "Gestão & Produção",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da contabilidade de custos industriais e da gestão financeira para ateliês de bordado computadorizado.",
    summary: "Fórmula de precificação profissional que calcula o valor do minuto de máquina, insumos (linhas, entretelas) e mão de obra para lucrar de verdade.",
    definition: "A Simulação de Custos de Precificação por Minuto de Máquina e Hora Operacional (Embroidery Pricing & Cost Calculator / Método de Custo Minuto-Ponto) é a metodologia contábil que estabelece o preço de venda justo e altamente lucrativo para serviços de bordado personalizado. Ao invés de usar métodos ultrapassados (como cobrar aleatoriamente R$ 1,00 a cada 1.000 pontos), a fórmula calcula: Custos Fixos (aluguel, energia, depreciação da máquina, internet, MEI) + Custos Variáveis (fio de cima, fio de bobina, entretela, cola spray, plástico termo/hidrossolúvel, embalagem) + Mão de Obra da Bordadeira por hora + Margem de Lucro Líquido desejada.",
    technicalDetails: "A fórmula básica expressa-se como: Preço Final = [(Custo Minuto Fixo + Salário Minuto Operador) × Tempo Real de Bordado em Minutos] + Insumos Diretos da Peça + Taxa de Limpeza de Fios/Montagem + Margem de Lucro (30% a 100%). Uma máquina operando a 650 PPM reais leva cerca de 15 minutos para bordar 10.000 pontos incluindo trocas de linha e colocação no bastidor.",
    beginnerExplanation: "É a continha certa que toda bordadeira precisa fazer para não pagar para trabalhar! Ela ensina a somar a luz, a linha, a entretela, a embalagem bonita e o valor da sua hora de trabalho, para cobrar o preço justo e colocar dinheiro no bolso com segurança.",
    howItWorks: [
      "1. A bordadeira soma todos os gastos fixos mensais do ateliê (energia, internet, manutenção, MEI).",
      "2. Define seu salário mensal pretendido (ex: R$ 3.000,00) dividido pelas horas que trabalha no mês (160 horas).",
      "3. Calcula o Custo do Minuto Operacional do seu ateliê.",
      "4. Abre a matriz no computador e vê o tempo de máquina (ex: 12 minutos para 8.000 pontos).",
      "5. Adiciona 5 minutos para colocação da entretela no bastidor e limpeza das pontas de linha.",
      "6. Soma o custo dos insumos gastos (linha, entretela, saquinho transparente, laço de cetim) e aplica a margem de lucro de 40% a 60%."
    ],
    applications: [
      "Orçamentos rápidos e precisos para encomendas de toalhas, enxovais de bebê e uniformes.",
      "Cálculo de descontos seguros para pedidos de grandes quantidades no atacado sem tomar prejuízo.",
      "Planejamento de faturamento mensal e metas de vendas do ateliê.",
      "Valorização do trabalho artesanal e profissional da bordadeira perante o mercado."
    ],
    characteristics: [
      "Elimina o 'chutômetro' e o medo de passar orçamento para as clientes.",
      "Garante que todos os custos invisíveis (energia, agulhas quebradas, óleo) sejam pagos.",
      "Permite ao ateliê crescer, comprar máquinas melhores e gerar lucro real todo mês."
    ],
    commonErrors: [
      "❌ Cobrar apenas pelo número de pontos ignorando as 10 trocas de cores que triplicam o tempo na máquina.",
      "❌ Não cobrar pelo tempo gasto montando a matriz no computador ou limpando os fiapos da peça pronta.",
      "❌ Copiar o preço da vizinha sem saber os custos reais da sua própria estrutura de trabalho."
    ],
    troubleshootingTips: [
      "Trabalhando o dia inteiro e o dinheiro não sobra no fim do mês: você está cobrando apenas o valor da linha e esquecendo sua hora de trabalho e despesas fixas; recalcule o valor do minuto operacional.",
      "Cliente pedindo desconto para 50 peças: calcule o ganho de produtividade ao fazer Color Sort no bastidor grande e ofereça um desconto escalonado seguro (ex: 10% a 15%), mantendo sua margem intacta.",
      "Matriz com muitas cores demorando muito mais do que o previsto: adicione uma taxa de R$ 1,50 a R$ 2,50 por troca manual de cor em máquinas de 1 agulha na sua planilha de custos."
    ],
    dicaArtrelados: "Nunca passe orçamento falando 'é baratinho porque é pequeno'! O bordado de um monograma delicado de 4 cm exige o mesmo cuidado, bastidor, entretela, limpeza e embalagem que um bordado grande. Valorize seu tempo, sua arte e seu investimento!",
    voceSabia: "Em 10.000 pontos de bordado, a máquina consome em média 50 metros de linha de cima e 35 metros de linha de bobina, o que custa menos de R$ 0,80 em linha; o verdadeiro valor do bordado está no tempo de máquina, no talento do design e no acabamento impecável!",
    practicalExercise: "Calcule hoje quanto custa 1 hora do seu trabalho. Divida esse valor por 60 para descobrir o valor do seu minuto. Agora cronometre desde o momento de colocar a entretela no bastidor até cortar o último fiapo de uma toalha. Multiplique os minutos pelo valor do seu minuto e descubra o preço real do seu trabalho!",
    quickSummary: "Simulação de Custos e Precificação é o método financeiro para calcular minutos de máquina, mão de obra e insumos para cobrar com segurança e lucro garantido.",
    relatedTerms: ["Custo por Ponto", "Tempo de Máquina (Run Time)", "Depreciação de Equipamento", "Lucro Líquido", "Orçamento de Bordado"],
    tags: ["precificacao", "custos", "gestao", "minuto de maquina", "orcamento", "lucro", "financas"]
  }
];

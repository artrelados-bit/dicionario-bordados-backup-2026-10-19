import { Verbete } from "../types";

export const VERBETES_LETTER_W_PART6: Verbete[] = [
  {
    id: "waste-thread-desperdicio-de-linha-e-gestao-de-sobras",
    code: "W-026",
    letter: "W",
    term: "Waste Thread — Desperdício de Linha e Gestão de Sobras (Thread Waste Minimization)",
    pronunciation: "uêist thréd — des-per-dí-cio de li-nha (weɪst θrɛd)",
    level: "Intermediário 🟡",
    category: "Gestão do Ateliê",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'waste' (desperdício, resíduo, perda) e 'thread' (linha). Conceito de engenharia de produção e sustentabilidade têxtil voltado à redução de custos operacionais.",
    summary: "Volume de linha excedente descartado gerado por pontas cortadas no trocador de agulha, saltos desnecessários na matriz, arremates mal planejados e sobras de cone.",
    definition: "O Waste Thread (Desperdício de Linha / Perda de Fio / Sobras de Linha / Thread Scrap) é a fração métrica e percentual de linha de bordar e linha de bobina consumida durante o processo produtivo que não compõe a estrutura útil dos pontos no tecido. Origina-se principalmente de: caudas de fio deixadas pelos cortadores automáticos (Trimmers), saltos longos de deslocamento entre objetos (Jump Stitches), arremates redundantes (Tie-Offs/Tie-Ins) programados em excesso na matriz, restos de cones descartados antes do fim e limpezas mecânicas pós-quebra.",
    technicalDetails: "Em ateliês industriais, o Waste Thread pode representar entre 15% e 30% do custo total de fios adquiridos. A minimização do desperdício de linha é alcançada através de três estratégias técnicas integradas: 1) Otimização de Caminho (Pathing): reordenação da sequência de objetos no software para reduzir distâncias de saltos; 2) Pontos de Conexão Rasteiros (Running Connectors): união de objetos da mesma cor com pontos corridos ocultos sob camadas futuras em vez de disparar cortes automáticos sucessivos; 3) Ajuste Mecânico de Facas: calibração da cauda de corte para 15 a 20 mm, evitando caudas longas que exigem refile manual demorado.",
    beginnerExplanation: "É todo aquele montinho de fiozinho cortado que sobra no chão do ateliê ou que a máquina corta entre uma letrinha e outra! Quando a matriz é mal desenhada, a máquina fica cortando a linha toda hora à toa e jogando dinheiro fora. Programando o caminho certinho, a máquina borda direto sem cortar linha desnecessária, economizando dinheiro e tempo!",
    howItWorks: [
      "1. O digitalizador analisa o desenho e identifica 10 cortes de linha consecutivos da mesma cor.",
      "2. Utiliza a ferramenta de Conexão Rasteira Oculta para ligar as letras por baixo das áreas que serão cobertas.",
      "3. Reduz os cortes de linha de 10 para apenas 1 corte final.",
      "4. No ateliê, o operador calibra as lâminas do cortador automático da máquina para deixar a cauda mínima.",
      "5. A máquina borda 25% mais rápido por não interromper o motor para dezenas de ciclos de corte.",
      "6. A quantidade de linha gasta por bordado cai sensivelmente.",
      "7. O ateliê aumenta a margem de lucro e reduz o lixo têxtil gerado.",
      "8. As peças saem da máquina limpas, sem fiapos compridos pendurados para limpar."
    ],
    applications: [
      "Redução de custos diretos de insumos em produções de grande escala.",
      "Aceleração do tempo de máquina em logotipos e uniformes corporativos.",
      "Programação sustentável e amiga do meio ambiente (Zero Waste Embroidery).",
      "Redução do tempo de acabamento manual de corte de fiapos com tesourinha."
    ],
    characteristics: [
      "Reduzido drasticamente pela digitalização inteligente de trajetórias.",
      "Influencia diretamente a velocidade real da máquina (SPM médio).",
      "Economiza até 25% do consumo de cones de linha no ateliê."
    ],
    commonErrors: [
      "❌ Deixar a máquina cortar a linha entre letras com menos de 2 mm de distância em vez de usar um ponto de salto contínuo.",
      "❌ Jogar fora cones de linha caros com 100 metros restantes em vez de aproveitá-los em matrizes pequenas.",
      "❌ Deixar as lâminas de corte da máquina desreguladas cortando rabos de linha de 5 cm de comprimento."
    ],
    troubleshootingTips: [
      "A máquina está demorando o dobro do tempo para bordar nomes pequenos: elimine os cortes de linha automáticos entre as letras no software e use conexão contínua.",
      "Ficam fios compridos e feios no avesso das peças: regule a tensão da mola de retenção do cortador de linha (Picker/Trimmer) para puxar a ponta curta.",
      "Muitos cones de linha quase no fim acumulando na prateleira: reserve esses cones para fazer testes de matrizes novas em retalhos."
    ],
    dicaArtrelados: "Economize tempo e linha: quando for digitalizar uma frase com várias palavras da mesma cor, conecte as letras usando pontinhos corridos que fiquem escondidos por baixo do preenchimento! A máquina não para para cortar linha, a produção voa e você quase não tem fiapo para limpar no final!",
    voceSabia: "Uma fábrica industrial com 10 máquinas multicabeçotes que otimiza as trajetórias de suas matrizes chega a economizar mais de 500 quilômetros de linha de bordar por ano!",
    practicalExercise: "Abra uma matriz de texto no seu software. Conte quantos cortes de linha existem. Reordene as letras para ligá-las por baixo e observe a redução no número de cortes no simulador de produção.",
    quickSummary: "Sobras e caudas de linha descartadas durante o bordado que podem ser drasticamente reduzidas através de conexões rasteiras inteligentes e calibração de cortadores.",
    relatedTerms: ["Pathing", "Conexão Rasteira", "Corte de Linha", "Trimmer", "Jump Stitch", "Produtividade", "Sustentabilidade Têxtil"],
    tags: ["wastethread", "desperdiciodelinha", "sobras", "economia", "cortes", "pathing", "gestao"]
  },
  {
    id: "waste-material-desperdicio-de-material-e-aproveitamento",
    code: "W-027",
    letter: "W",
    term: "Waste Material — Desperdício de Material (Aproveitamento de Entretelas e Retalhos)",
    pronunciation: "uêist ma-tí-ri-al — des-per-dí-cio de ma-te-ri-al (weɪt məˈtɪriəl)",
    level: "Iniciante 🟢",
    category: "Gestão do Ateliê",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'waste' (desperdício) e 'material' (insumos, tecidos e entretelas). Gestão de aproveitamento de matéria-prima no corte e montagem de bastidores.",
    summary: "Gestão de sobras de entretelas, tecidos de aplique, plásticos solúveis e peças com defeito, focando no reaproveitamento criativo e na redução de perdas no ateliê.",
    definition: "O Waste Material (Desperdício de Material / Perdas de Insumos Têxteis / Scrap & Offcut Management) abrange todas as perdas materiais de entretelas (rasgáveis, recortáveis e solúveis), tecidos de base, feltros, couros de aplique e filmes plásticos decorrentes de cortes imprecisos, montagens sobredimensionadas em bastidores e erros operacionais que levam ao descarte de peças. A redução do Waste Material é um pilar essencial da lucratividade e sustentabilidade de qualquer ateliê de bordado.",
    technicalDetails: "Uma das maiores fontes de desperdício é o uso de bastidores desnecessariamente grandes (ex: usar um bastidor 20x30 cm para bordar um nome de 4x8 cm), o que consome 400% mais entretela do que o necessário. As técnicas de mitigação incluem: 1) Dimensionamento Estrito de Bastidor: utilizar sempre o menor bastidor que acomode a matriz com folga segura de 10 a 15 mm; 2) Método Flutuante com Janela de Aproveitamento: fixar uma folha grande de entretela no bastidor e colar retalhos menores sobre a janela aberta nos bordados seguintes; 3) Reuso de Retalhos de Tecido para Apliques (Patchwork e bordados temáticos).",
    beginnerExplanation: "É todo aquele pedaço de entretela e tecido que acaba indo para a lixeira sem necessidade! Se você usar um bastidor gigante para bordar um nomezinho pequeno, você gasta um pedação de entretela à toa. Guardar as sobras e usar o bastidor do tamanho certo economiza muito dinheiro no final do mês!",
    howItWorks: [
      "1. O operador escolhe o menor bastidor possível que caiba a matriz com margem segura.",
      "2. Corta a entretela com apenas 2 cm a mais que as bordas do bastidor, sem desperdício lateral.",
      "3. Os retalhos nobres de tecidos estampados são guardados em caixas organizadoras por cor.",
      "4. Esses retalhos são reutilizados para fazer fundos de apliques, chaveiros e laços.",
      "5. Sobras de entretela rasgável são emendadas com fita crepe para forrar bastidores pequenos.",
      "6. A lixeira do ateliê esvazia e a rentabilidade por peça aumenta.",
      "7. O ateliê opera de forma limpa, econômica e sustentável."
    ],
    applications: [
      "Controle de custos em confecções de uniformes e enxovais.",
      "Produção de peças artesanais lucrativas a partir de sobras (chaveiros bordados, tags).",
      "Otimização do corte de rolos industriais de entretelas com gabaritos de corte rápido.",
      "Treinamento de operadores para uso consciente de insumos caros (filmes solúveis e feltros)."
    ],
    characteristics: [
      "Minimizado pela escolha do bastidor correto para cada tamanho de matriz.",
      "Permite criação de novas linhas de produtos (chaveiros e apliques) com custo zero de tecido.",
      "Aumenta diretamente a margem líquida de lucro do negócio."
    ],
    commonErrors: [
      "❌ Usar o maior bastidor da máquina para qualquer tamanho de bordado por preguiça de trocar de aro.",
      "❌ Cortar a entretela com 10 cm de sobra para fora do bastidor, jogando rolos inteiros de entretela no lixo.",
      "❌ Descartar retalhos de tecidos nobres (linho, tricoline digital, couro sintético) que serviriam para apliques."
    ],
    troubleshootingTips: [
      "O custo com entretela está muito alto no fim do mês: passe a cortar a entretela usando moldes de papelão do tamanho exato de cada um dos seus bastidores.",
      "Muitos pedaços de plástico solúvel sobrando: junte as sobras e use a técnica de colocar o plástico apenas sobre a área das letras em vez de cobrir o bastidor inteiro.",
      "Peça do cliente manchada ou furada por erro operacional: transforme o erro em um aplique bordado bonito por cima para salvar a peça sem prejuízo."
    ],
    dicaArtrelados: "Crie a 'Caixa Mágica de Retalhos' no seu ateliê! Todo pedacinho de tecido bonito que sobrar de uma costura, guarde nessa caixinha! Quando for fazer apliques de flores, bichinhos e chaveiros de feltro, você usa esses retalhos e tem 100% de lucro na peça!",
    voceSabia: "O conceito japonês 'Mottainai' (o pesar pelo desperdício) é a base das maiores indústrias têxteis do Japão, onde até a poeira e os micro-fiapos de algodão são recolhidos e reciclados para fazer isolamento térmico e papel reciclado!",
    practicalExercise: "Pegue uma caixa de sapatos vazia e organize os retalhos de tecido de aplique por cores (azuis, rosas, estampados). No próximo bordado de aplique, use um retalho da caixa em vez de cortar um pedaço novo de tecido grande.",
    quickSummary: "Gestão inteligente e reaproveitamento de sobras de entretelas, tecidos e plásticos para reduzir custos de produção e eliminar o desperdício de insumos.",
    relatedTerms: ["Aproveitamento", "Aplique", "Tamanho de Bastidor", "Entretela Rasgável", "Economia", "Gestão de Ateliê", "Patchwork"],
    tags: ["wastematerial", "desperdiciodematerial", "aproveitamento", "retalhos", "entretela", "economia", "sustentabilidade"]
  },
  {
    id: "wear-desgaste-mecanico-e-atrito-tribologico",
    code: "W-028",
    letter: "W",
    term: "Wear — Desgaste Mecânico e Atrito (Tribological Wear & Friction)",
    pronunciation: "uér — des-gas-te me-câ-ni-co e a-tri-to (wɛər)",
    level: "Avançado 🔴",
    category: "Manutenção & Mecânica",
    grammarClass: "Substantivo masculino.",
    origin: "Do inglês arcaico 'werian' (gastar pelo uso contínuo, corroer por atrito). Princípio de engenharia tribológica que estuda o desgaste de componentes sob fricção contínua.",
    summary: "Deterioração dimensional e superficial progressiva de peças móveis da máquina de bordar (agulhas, laçadeiras, facas e tensores) causada por atrito contínuo em alta velocidade.",
    definition: "O Wear (Desgaste Mecânico / Atrito Tribológico / Desgaste por Fricção / Mechanical Wear) é a perda progressiva de material sólido e a alteração micrométrica das tolerâncias dimensionais que ocorrem nas superfícies de contato de peças móveis da máquina de bordar e em suas ferramentas de corte e perfuração. Decorrente do atrito dinâmico em altas velocidades de rotação (até 1.000 a 1.200 RPM), o desgaste afeta componentes críticos como a ponta e o olho da agulha, a ponta da laçadeira rotativa, os discos tensores, as lâminas do cortador e as buchas da barra de agulha.",
    technicalDetails: "O desgaste mecânico divide-se em quatro modalidades principais na máquina de bordar: 1) Desgaste Abrasivo: provocado pelo atrito de fibras têxteis e partículas de pó mineral na canaleta da agulha e nos discos tensores; 2) Desgaste Adesivo (Galling): contato metal-metal entre a laçadeira e a carcaça por falta de óleo lubrificante; 3) Desgaste por Fadiga Térmica: microfissuras na ponta da agulha devido ao calor gerado por fricção contínua em tecidos sintéticos (atingindo mais de 250°C); 4) Desgaste Corrosivo: oxidação causada por umidade ambiente ou agentes químicos em fios.",
    beginnerExplanation: "É o cansaço e o gasto natural das pecinhas de ferro da sua máquina de tanto trabalhar! Assim como a sola do sapato vai gastando quando a gente anda muito, a pontinha da agulha vai perdendo a ponta, a faquinha de cortar linha vai perdendo o corte e a lançadeira precisa de óleo para não chiar nem esquentar. Cuidar do desgaste faz sua máquina durar a vida inteira!",
    howItWorks: [
      "1. A máquina opera em alta velocidade executando até 60.000 pontos por hora.",
      "2. O atrito constante entre linha, tecido e componentes metálicos gera calor e microdesgaste.",
      "3. O óleo lubrificante mineral forma uma película protetora microscópica que reduz o desgaste em 90%.",
      "4. O operador realiza a troca periódica preventiva de agulhas e limpeza de fiapos.",
      "5. As tolerâncias mecânicas da laçadeira permanecem calibradas dentro dos 0.05 mm originais.",
      "6. A máquina mantém o sincronismo perfeito e o ruído suave e silencioso.",
      "7. Quebras catastróficas de peças e paradas não programadas são evitadas com sucesso."
    ],
    applications: [
      "Planejamento de manutenção preventiva e preditiva no ateliê.",
      "Monitoramento de vida útil de agulhas, facas e lançadeiras.",
      "Escolha de agulhas revestidas com materiais nobres de alta dureza (Nitreto de Titânio).",
      "Diagnóstico precoce de ruídos anormais e perda de precisão de pontos."
    ],
    characteristics: [
      "Inevitable com o uso contínuo, mas controlado por lubrificação adequada.",
      "Acelerado por falta de óleo, poeira de linha e excesso de velocidade.",
      "Exige cronograma rigoroso de substituição de componentes descartáveis."
    ],
    commonErrors: [
      "❌ Deixar a lançadeira trabalhar seca sem óleo por dias, desgastando o aço e exigindo a troca prematura de uma peça cara.",
      "❌ Usar a mesma agulha por semanas inteiras até ela entortar ou quebrar no meio de um trabalho.",
      "❌ Limpar peças metálicas com produtos corrosivos ou abrasivos em vez de pincel macio e óleo mineral neutro."
    ],
    troubleshootingTips: [
      "A máquina está com um barulho metálico estridente na área da bobina: aplique imediatamente uma gota de óleo próprio para máquina de bordar na pista da laçadeira rotativa.",
      "A linha começou a quebrar a cada 200 pontos sem motivo aparente: troque a agulha por uma nova (a antiga sofreu desgaste no olho ou na ponta).",
      "O cortador automático de linha não corta e puxa o tecido: a lâmina móvel sofreu desgaste no fio de corte e precisa ser amolada ou substituída por um técnico."
    ],
    dicaArtrelados: "A regra de ouro da vida longa da sua máquina: pingue uma gotinha de óleo na laçadeira toda manhã antes de começar a trabalhar e troque a agulha a cada 8 a 10 horas de uso contínuo! Fazendo isso, sua máquina vai bordar macia e perfeitamente por mais de 20 anos!",
    voceSabia: "O revestimento dourado de Nitreto de Titânio (Gebedur) nas agulhas de alta performance possui dureza superior à da maioria dos aços temperados, reduzindo o desgaste por atrito em mais de 4 vezes em comparação com o cromo tradicional!",
    practicalExercise: "Passe a unha suavemente na ponta de uma agulha nova e depois na ponta de uma agulha que já bordou 3 toalhas grossas. Sinta como a agulha usada perdeu o fio e apresenta uma leve aspereza microscópica.",
    quickSummary: "Deterioração progressiva das peças móveis e ferramentas da máquina por atrito contínuo, controlada por lubrificação diária e substituição periódica de insumos.",
    relatedTerms: ["Desgaste da Agulha", "Laçadeira", "Lubrificação", "Óleo Mineral", "Titânio", "Manutenção Preventiva", "Fricção"],
    tags: ["wear", "desgaste", "mecanica", "atrito", "lubrificacao", "oleo", "manutencao", "maquina"]
  },
  {
    id: "wear-of-needle-desgaste-da-agulha-ponta-e-olho",
    code: "W-029",
    letter: "W",
    term: "Wear of Needle — Desgaste da Agulha (Ponta, Olho e Canaleta)",
    pronunciation: "uér of ní-dol — des-gas-te da a-gu-lha (wɛər əv ˈniːdəl)",
    level: "Iniciante 🟢",
    category: "Agulhas & Fios",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'wear' (desgaste) e 'needle' (agulha de costura). Fenômeno físico de perda de afiação, geração de rebarbas (Burrs) e erosão do cromo por fricção contínua.",
    summary: "Perda da geometria original da ponta e formação de micro-rebarbas cortantes no olho da agulha após 8 a 12 horas de costura, sendo a causa número 1 de quebra de linha e furos no tecido.",
    definition: "O Wear of Needle (Desgaste da Agulha / Rebarba de Ponta e Olho / Needle Dullness & Burr Formation) é a degradação física e dimensional microscópica sofrida pela agulha de bordar ao longo de sua vida útil (geralmente entre 8 e 12 horas de costura contínua ou aproximadamente 500.000 a 1.000.000 de pontos). O impacto repetido contra as fibras têxteis em velocidades de até 1.000 batidas por minuto arredonda a ponta afiada, desgasta o revestimento de cromo e cria micro-rebarbas afiadas de aço (Burrs) na borda do olho e na canaleta, que passam a desfiar e cortar a linha de bordar.",
    technicalDetails: "O desgaste da agulha manifesta-se em três zonas críticas: 1) Zona da Ponta (Tip Wear): perda do raio de curvatura original, fazendo a agulha empurrar e rasgar as fibras em vez de penetrá-las suavemente, resultando em furos visíveis e repuxamento do tecido; 2) Zona do Olho (Eye Wear): atrito contínuo da linha de poliéster em alta velocidade cava uma canaleta microscópica com arestas vivas que cortam os filamentos do fio (quebra por cisalhamento); 3) Zona da Haste (Blade Deflection): micro-empenamento térmico que desvia o alinhamento da agulha com a laçadeira, gerando falhas de ponto (Skipped Stitches).",
    beginnerExplanation: "A agulha é a pecinha que mais trabalha na sua máquina: ela fura o tecido até mil vezes por minuto! Com o tempo, a pontinha dela fica cega (como uma faca velha) e o buraquinho por onde a linha passa ganha micro-farponhas de ferro que cortam a linha toda hora. Trocar a agulha com frequência é o segredo mais fácil e barato para nunca ter dor de cabeça com linha arrebentando!",
    howItWorks: [
      "1. A agulha nova penetra o tecido com facilidade e zero atrito.",
      "2. Após 8 horas de bordado intenso, a ponta sofre arredondamento por abrasão contínua.",
      "3. O atrito da linha cria uma minúscula ranhura áspera no interior do olho da agulha.",
      "4. A linha de poliéster começa a desfiar um filamento por vez ao passar pelo olho gasto.",
      "5. O operador experiente percebe o início do problema e substitui a agulha imediatamente.",
      "6. A nova agulha restabelece o fluxo livre da linha e a penetração macia no tecido.",
      "7. A máquina volta a costurar suavemente com zero quebras de linha e avesso impecável."
    ],
    applications: [
      "Diagnóstico rápido para 90% dos problemas de quebra de linha no ateliê.",
      "Prevenção de furos e rasgos em camisas finas de clientes.",
      "Controle de qualidade e redução de paradas de máquinas industriais.",
      "Padronização de troca preventiva por turnos de trabalho."
    ],
    characteristics: [
      "Vida útil média recomendada: de 8 a 10 horas de costura contínua.",
      "Causa invisível a olho nu (exige checagem com lupa ou teste de meia-fina).",
      "É a peça de reposição mais barata e mais importante de todo o processo de bordado."
    ],
    commonErrors: [
      "❌ Esperar a agulha quebrar ou entortar para só então trocá-la (uma agulha gasta estraga dezenas de peças antes de quebrar).",
      "❌ Passar a ponta da agulha em uma lixa de unha para 'amolar' (isso destrói o formato da ponta e estraga o tecido).",
      "❌ Tentar desentortar uma agulha torta com um alicate para continuar usando."
    ],
    troubleshootingTips: [
      "A linha está desfiando e quebrando a cada 2 minutos: troque a agulha por uma novinha em folha imediatamente.",
      "Apareceram pequenos furos brancos rasgados ao redor do bordado: a ponta da agulha estava rombuda ou com rebarba; substitua a agulha e use ponta bola fina em malhas.",
      "Como testar se a agulha está com rebarba: passe a ponta e o olho da agulha delicadamente sobre um pedaço de meia-calça de nylon feminina velha; se puxar qualquer fiapo, descarte a agulha no lixo."
    ],
    dicaArtrelados: "Faça o famoso 'Teste da Meia-Calça' da Artrelados! Pegue um pedacinho de meia fina feminina e passe a pontinha da agulha nela: se a meia puxar qualquer fiozinho de nada, jogue a agulha fora sem dó! Uma agulha novinha custa centavos, mas uma camisa de linho do seu cliente custa centenas de reais!",
    voceSabia: "Em um bordado grande de jaqueta com 50.000 pontos a 800 SPM, a agulha bate no tecido mais de 50.000 vezes em apenas uma hora, percorrendo uma distância acumulada de mais de 1,5 quilômetro de movimento vertical dentro das fibras!",
    practicalExercise: "Pegue uma agulha que você usou durante toda a semana e passe na meia-calça. Depois faça o mesmo com uma agulha tirada da embalagem agora. Sinta a diferença do deslizamento perfeito da agulha nova.",
    quickSummary: "Degradação da ponta e do olho da agulha por abrasão contínua após 8 a 10 horas de uso, sendo a principal causa de quebras de linha e furos em tecidos.",
    relatedTerms: ["Agulha de Bordar", "Rebarba", "Burr", "Ponta Cega", "Vida Útil da Agulha", "Quebra de Linha", "Teste da Meia-Calça"],
    tags: ["wearofneedle", "desgaste", "agulha", "rebarba", "quebradelinha", "manutencao", "qualidade"]
  },
  {
    id: "wear-of-machine-desgaste-e-manutencao-preventiva-da-maquina",
    code: "W-030",
    letter: "W",
    term: "Wear of Machine — Desgaste da Máquina (Manutenção Preventiva e Calibração)",
    pronunciation: "uér of ma-chí-ne — des-gas-te da má-qui-na (wɛər əv məˈʃiːn)",
    level: "Avançado 🔴",
    category: "Manutenção & Mecânica",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês 'wear' (desgaste) e 'machine' (máquina mecânica/computadorizada). Procedimentos de engenharia de manutenção de equipamentos industriais têxteis.",
    summary: "Desgaste estrutural e folgas progressivas nos mecanismos internos da máquina (correias do pantógrafo, eixo da barra de agulha, lançadeira e motor), exigindo revisões preventivas periódicas.",
    definition: "O Wear of Machine (Desgaste Estrutural da Máquina / Folga Mecânica Acumulada / Machine Component Wear & Preventive Maintenance) compreende a deterioração física cumulativa dos sistemas mecânicos, eletromecânicos e de movimentação de eixos da máquina de bordar após milhões de ciclos de operação. Envolve o afrouxamento das correias dentadas dos eixos X e Y do pantógrafo, o desgaste das buchas da barra de agulha (gerando folga lateral), a erosão da pista da caixa de bobina, o ressecamento de retentores e o desajuste do sincronismo de graus da laçadeira rotativa (Hook Timing).",
    technicalDetails: "Uma máquina que operou mais de 5.000 a 10.000 horas sem revisão preventiva apresenta sintomas mensuráveis: 1) Folga no Pantógrafo (Backlash): folga superior a 0.2 mm nas correias dentadas faz círculos perfeitos serem costurados como formas ovais e gera desencaixe de contornos; 2) Desvio de Sincronismo da Laçadeira: o tempo de encontro entre a ponta da laçadeira e a cava da agulha (Scarf) desvia dos 195° a 205° nominais, gerando laçadas perdidas; 3) Folga da Barra de Agulha: oscilação transversal que faz a agulha colidir com a chapa de ponto em velocidades acima de 800 SPM.",
    beginnerExplanation: "Assim como a gente leva o carro para a revisão para trocar correia, filtro e alinhar a direção, a nossa máquina de bordar também precisa de uma revisão preventiva com um técnico especializado de tempos em tempos! Isso tira as folgas das correias, alinha a agulha com a lançadeira e deixa a máquina bordando perfeitamente silenciosa e rápida!",
    howItWorks: [
      "1. O ateliê mantém um registro do número total de pontos acumulados na máquina.",
      "2. A cada 6 meses ou 1 ano (ou 10 milhões de pontos), agenda a revisão preventiva periódica.",
      "3. O técnico especializado desmonta a área de costura, remove resíduos de linha e limpa com solvente seguro.",
      "4. Verifica e ajusta a tensão das correias dentadas dos eixos X e Y do pantógrafo.",
      "5. Calibra o sincronismo da laçadeira com relógio comparador micrométrico.",
      "6. Lubrifica engrenagens internas com graxa de lítio branca e substitui buchas gastas.",
      "7. A máquina é testada com matrizes de alta precisão geométrica e volta a operar como nova."
    ],
    applications: [
      "Preservação do patrimônio e da vida útil de máquinas domésticas e industriais.",
      "Garantia de encaixe milimétrico em contornos de desenhos complexos.",
      "Eliminação de vibrações, ruídos excessivos e paradas inesperadas em alta produção.",
      "Valorização de revenda da máquina com histórico completo de revisões em dia."
    ],
    characteristics: [
      "Processo cumulativo prevenido por cronograma de manutenção preditiva.",
      "Exige verificação de correias, buchas, sincronismo e lubrificação interna.",
      "Restaura a precisão geométrica original de fábrica do pantógrafo."
    ],
    commonErrors: [
      "❌ Esperar a máquina quebrar uma peça no meio de um pedido urgente de Natal para só então chamar o técnico.",
      "❌ Tentar mexer nos parafusos de sincronismo da laçadeira com chaves inadequadas sem conhecimento técnico.",
      "❌ Usar graxa de automóvel comum ou óleos vegetais de cozinha na máquina, travando os mecanismos internos com resina ressecada."
    ],
    troubleshootingTips: [
      "O contorno preto está saindo totalmente fora da cor amarela em todos os bordados: as correias dentadas do pantógrafo estão frouxas ou gastas; solicite o tensionamento e alinhamento do pantógrafo por um técnico.",
      "A máquina está batendo ferro com som oco em alta rotação: as buchas da barra de agulha estão com folga excessiva e precisam ser substituídas.",
      "A máquina pula pontos ao bordar na direção diagonal: a laçadeira perdeu o sincronismo angular de tempo e necessita de recalibração milimétrica."
    ],
    dicaArtrelados: "Trate a sua máquina de bordar como o seu bem mais precioso: faça uma limpeza diária de fiapos com pincel, passe óleo todo dia na laçadeira e chame um técnico de confiança uma vez por ano para uma revisão geral! A sua máquina vai retribuir trabalhando sem parar e gerando muito lucro para a sua família!",
    voceSabia: "As máquinas industriais de bordar de marcas de elite como Tajima e Barudan são construídas com tolerâncias mecânicas tão precisas que, com manutenção e lubrificação em dia, operam continuamente por mais de 30 anos sem perder a precisão milimétrica dos pontos!",
    practicalExercise: "Com a máquina desligada, segure a haste do bastidor (pantógrafo) suavemente com as duas mãos e tente movê-la levemente para a frente e para trás: você não deve sentir nenhum jogo ou folga solta; o movimento deve ser firme e engrenado.",
    quickSummary: "Deterioração e folgas mecânicas progressivas acumuladas nos mecanismos da máquina após milhões de pontos, prevenidas por revisões e manutenções periódicas.",
    relatedTerms: ["Manutenção Preventiva", "Sincronismo da Laçadeira", "Pantógrafo", "Correias Dentadas", "Folga Mecânica", "Backlash", "Revisão Técnica"],
    tags: ["wearofmachine", "desgaste", "maquina", "manutencao", "revisao", "sincronismo", "pantografo", "mecanica"]
  }
];

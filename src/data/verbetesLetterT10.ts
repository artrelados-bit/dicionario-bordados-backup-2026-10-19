import { Verbete } from "../types";

export const VERBETES_LETTER_T10: Verbete[] = [
  {
    id: "truetype-fonts-fontes-truetype-no-bordado",
    code: "T-056",
    letter: "T",
    term: "TrueType Fonts / Fontes TrueType no Bordado",
    pronunciation: "tru-taip fonts / fon-tes tru-taip no bor-da-do",
    level: "Intermediário 🟡",
    category: "Programação & Digitalização",
    grammarClass: "Locução substantiva feminina.",
    origin: "Padrão tipográfico digital vetorial desenvolvido pela Apple e Microsoft nos anos 1980 (.TTF), convertido por softwares de bordado em trajetos de pontos de costura.",
    summary: "Fontes de computador comuns convertidas automaticamente para pontos de bordado, exigindo ajustes manuais de compensação, subponto e junções.",
    definition: "As Fontes TrueType (TrueType Fonts / Auto-Digitized TTF) são fontes tipográficas vetoriais instaladas no sistema operacional do computador (Windows/Mac) que softwares de bordado (como Wilcom, Embird, PE-Design, Bernina) convertem automaticamente em objetos de ponto cheio, tatami ou ponto corrido. Diferente das 'Fontes Pré-Digitalizadas' (Keyboard Fonts / Pre-Digitized Embroidery Fonts) — que foram desenhadas à mão ponto por ponto por um mestre programador com compensações e subpontos perfeitos —, as fontes TrueType convertidas automaticamente necessitam de revisão técnica atenta para corrigir sobreposições incorretas de colunas, subpontos ausentes e pontos de entrada/saída ineficientes.",
    technicalDetails: "A conversão automática de fontes TTF calcula o preenchimento de curvas Bezier vetoriais usando algoritmos de esqueleto (medial axis transform). Em curvas acentuadas (como nas letras 'S', 'G', 'B') e em serinas finas (como Times New Roman), o algoritmo pode gerar cruzamentos densos de pontos no mesmo vértice (stitch bunching) e esquecer a compensação de encolhimento nas pontas. O programador profissional deve aplicar compensação de repuxo (Pull Compensation) mínima de 0.35 mm, adicionar subponto de borda (Edge Walk) e quebrar junções em 'T' para evitar buracos.",
    beginnerExplanation: "São aquelas fontes de letras normais que você usa no Word do computador (como Arial, Comic Sans, Script). O programa de bordado consegue transformar essas letras em bordado sozinho, mas você precisa tomar cuidado e revisar, porque às vezes a máquina faz pontos muito fininhos ou nós esquisitos se você não ajustar o tamanho.",
    howItWorks: [
      "1. A usuária digita o nome desejado no software de bordado escolhendo uma fonte do Windows (TrueType).",
      "2. O software converte o vetor da fonte em colunas de ponto cheio (Satin).",
      "3. O programador ajusta o tamanho (letras TrueType funcionam melhor entre 15 mm e 50 mm).",
      "4. Adiciona-se subponto apropriado (Ponto Corrido Central ou Borda Dupla).",
      "5. Aplica-se a Compensação de Encolhimento (Pull Compensation) de 0.35 mm a 0.40 mm.",
      "6. A matriz é salva e bordada com leitura limpa e acabamento impecável."
    ],
    applications: [
      "Personalização rápida de nomes, frases e dedicatórias com milhares de opções tipográficas.",
      "Reprodução exata da identidade visual e fontes corporativas de logomarcas de clientes.",
      "Criação de monogramas decorativos com caligrafias cursivas modernas.",
      "Confecção de tags de identificação escolar e etiquetas de tecido."
    ],
    characteristics: [
      "Oferece acesso a milhares de estilos de letras gratuitos e comerciais.",
      "Requer revisão manual de densidade e compensação em tamanhos pequenos.",
      "Diferencia-se das fontes pré-digitalizadas pelo algoritmo de geração automática."
    ],
    commonErrors: [
      "❌ Usar fonte TrueType convertida em tamanho minúsculo (menor que 8 mm) sem engrossar os traços, resultando em letras ilegíveis e quebra de linha.",
      "❌ Escolher fontes com serinas microscópicas e traços ultra-finos (estilo 'hairline') que a agulha não consegue costurar.",
      "❌ Não aplicar subponto nas letras convertidas, fazendo os pontos afundarem no tecido."
    ],
    troubleshootingTips: [
      "Letras TrueType ficando finas e com falhas no tecido: aumente a 'Compensação de Repuxo' (Pull Compensation) no software para +0.35 mm.",
      "Bolinhas e pontos amontoados nas pontas das letras: ative o recurso 'Filtro de Pontos Curtos' (Short Stitch Filter) no programa.",
      "Emendas das letras cursivas abrindo furos: prolongue manualmente o ponto de encaixe entre as letras em 0.5 mm."
    ],
    dicaArtrelados: "Para nomes pequenos em toalhinhas e uniformes (menos de 10 mm de altura), prefira SEMPRE as fontes originais pré-digitalizadas do seu software em vez de TrueType! Elas foram desenhadas ponto por ponto por especialistas e ficam legíveis até vistas de longe!",
    voceSabia: "A tecnologia TrueType foi criada pela Apple em 1989 sob o codinome secreto 'Royal' para quebrar o monopólio da Adobe no mercado tipográfico digital, sendo depois licenciada gratuitamente para a Microsoft.",
    practicalExercise: "Abra o seu software de bordado. Escreva a mesma palavra usando uma Fonte Pré-digitalizada nativa e uma Fonte TrueType do Windows. Dê zoom máximo nas conexões e veja como a fonte nativa tem encaixes e subpontos muito mais precisos.",
    quickSummary: "Fontes tipográficas do sistema operacional convertidas automaticamente para pontos de bordado, demandando calibração cuidadosa de subpontos e compensações.",
    relatedTerms: ["Fontes Pré-Digitalizadas", "Compensação de Encolhimento", "Ponto Cheio (Satin)", "Subponto (Underlay)", "Tipografia no Bordado"],
    tags: ["truetype", "ttf", "fontes", "tipografia", "programacao", "wilcom"]
  },
  {
    id: "tesoura-de-precisao-tesoura-de-garca-embroidery-snips-stork-scissors",
    code: "T-057",
    letter: "T",
    term: "Tesoura de Precisão / Tesoura de Garça (Embroidery Snips & Stork Scissors)",
    pronunciation: "te-sou-ra de pre-ci-são / te-sou-ra de gar-ça (em-broi-de-ri snips / istórk cí-zors)",
    level: "Iniciante 🟢",
    category: "Ferramentas & Acessórios",
    grammarClass: "Locução substantiva feminina.",
    origin: "Evolução dos alicates de parteiras medievais que tinham o formato de cegonha/garça (símbolo de nascimento) e foram adaptados para o corte fino de linhas no século XIX na Europa.",
    summary: "Tesouras artesanais e industriais de ponta ultra-fina, curva ou reta, essenciais para aparar linhas rentes ao tecido e cortar apliques com precisão cirúrgica.",
    definition: "A Tesoura de Precisão (Embroidery Snips / Tesoura de Garça / Stork Scissors / Tesoura Peliça / Tesoura de Ponta Curva) é a ferramenta manual mais indispensável do ateliê de bordado. Caracteriza-se por lâminas curtas de aço forjado cirúrgico (de 2 a 4 cm), afiação navalha de alta precisão e pontas extremamente afiladas (retas ou suavemente curvadas para cima). O design anatômico com curvatura permite que a lâmina deslize rente à superfície do tecido no bastidor sem espetar ou cortar os fios da peça.",
    technicalDetails: "Na engenharia de ferramentas têxteis, destacam-se três variantes principais: 1) Tesoura de Garça clássica (lâminas retas finas para arremate pontual e corte de nós); 2) Tesoura de Ponta Curva (lâminas curvadas em 15° a 30° para aparar rente no bastidor sem perigo de furar o tecido); 3) Tesoura 'Pico de Pato' ou Tesoura de Aplique (Duckbill / Appliqué Scissors), com uma lâmina em formato de espátula plana que protege o tecido de fundo enquanto a outra lâmina apara a borda do aplique a 1 mm do ponto.",
    beginnerExplanation: "É aquela tesourinha linda e pequenininha (muitas vezes em formato de garça dourada) ou com a pontinha curvada para cima. Ela serve para cortar todas as linhazinhas bem rentes ao bordado e para recortar os tecidinhos de aplique sem perigo de furar a toalha ou a roupa.",
    howItWorks: [
      "1. A bordadeira segura a tesoura de precisão encaixando o polegar e o dedo anelar.",
      "2. A ponta da lâmina é introduzida delicadamente sob o fio de salto ou nó excedente.",
      "3. Em tesouras curvas: a barriga convexa da lâmina repousa plana sobre o tecido.",
      "4. As lâminas fecham com um corte afiado e seco, cortando o fio a fração de milímetro da amarração.",
      "5. No recorte de apliques: a lâmina corta o tecido excedente contornando o ponto de fixação.",
      "6. A peça fica 100% limpa, sem rebarbas de linha e com segurança total contra furos acidentais."
    ],
    applications: [
      "Limpeza manual de fios e saltos de linha em peças recém-saídas da máquina.",
      "Recorte de tecidos em técnicas de aplique e patch aplique no bastidor.",
      "Corte delicado de entretelas hidrossolúveis e termo-filmes em cantos difíceis.",
      "Desmanche cuidadoso de pontos errados com auxílio de descosedor."
    ],
    characteristics: [
      "Afiação extrema até a ponta milimétrica das lâminas.",
      "Ponta curva protege o tecido contra perfurações acidentais.",
      "Ferramenta de aço inox de alta durabilidade e manuseio ergonômico."
    ],
    commonErrors: [
      "❌ Usar a tesoura de precisão de bordado para cortar papel, papelão ou arames, destruindo o fio afiado das lâminas.",
      "❌ Cortar o fio com a tesoura inclinada na vertical apontando para baixo, furando o tecido nobre da cliente.",
      "❌ Deixar a tesoura cair no chão de ponta aberta, entortando as pontas afiladas permanentemente."
    ],
    troubleshootingTips: [
      "Tesoura mastigando a linha em vez de cortar: aperte o parafuso central de junção das lâminas ou leve a um cuteleiro para afiação profissional.",
      "Medo de furar o tecido ao cortar fios: utilize tesouras com ponta curva para cima ou tesouras com ponta arredondada de segurança.",
      "Cansaço nas mãos ao limpar dezenas de peças: utilize tesouras tipo snip com mola automática de retorno (Easy-Action)."
    ],
    dicaArtrelados: "Tenha uma tesoura de garça exclusiva e SAGRADA para linhas no seu ateliê! Coloque uma fitinha bonita no cabo e avise a família inteira: nessa tesourinha NINGUÉM corta papel, fita adesiva nem plástico! O corte dela vai durar anos afiado como navalha!",
    voceSabia: "No século XIX, as parteiras francesas usavam pinças e tesouras em formato de garça (símbolo de fertilidade e da lenda das cegonhas que trazem bebês). Quando descansavam entre os partos, elas usavam as mesmas tesouras para fazer bordados finos, criando a tradição das tesouras de garça!",
    practicalExercise: "Pegue um pedaço de tecido com vários saltos de linha. Experimente cortar um fio com uma tesoura grande de costura e outro com a tesourinha curva de precisão: sinta a facilidade de cortar rente sem encostar no tecido.",
    quickSummary: "Instrumento de corte manual com lâminas afiadas de ponta reta ou curva, indispensável para limpeza de fios e recorte milimétrico de apliques.",
    relatedTerms: ["Trimming Manual", "Tesoura de Aplique (Duckbill)", "Tesoura Snip", "Descosedor de Ponto", "Acabamento"],
    tags: ["tesoura de precisao", "tesoura de garca", "snips", "ferramentas", "acessorios", "corte"]
  },
  {
    id: "tensao-de-enquadramento-no-bastidor-hooping-tension-drum-effect",
    code: "T-058",
    letter: "T",
    term: "Tensão de Enquadramento no Bastidor (Hooping Tension & Drum Effect)",
    pronunciation: "ten-são de en-qua-dra-men-to no bas-ti-dor (hu-ping ten-xion / drâm e-fect)",
    level: "Intermediário 🟡",
    category: "Bastidores & Fixação",
    grammarClass: "Locução substantiva feminina.",
    origin: "Fundamento prático e físico da montagem correta de tecidos em aros de bordado para garantir estabilidade dimensional durante a costura.",
    summary: "O equilíbrio perfeito de aperto do tecido no bastidor, devendo ficar plano e firme como uma pele de tambor (efeito tambor), sem estar frouxo nem esticado em excesso.",
    definition: "A Tensão de Enquadramento (Hooping Tension / Efeito Tambor / Drum Skin Effect) é a tensão mecânica uniforme aplicada sobre o tecido e a entretela ao serem fixados entre o aro interno e o aro externo do bastidor. A regra de ouro da engenharia de bordado é que o tecido deve ficar plano, firme e liso como a membrana de um tambor (ao tamborilar os dedos sobre a área central, deve-se ouvir um som oco e firme), mas com a estrutura das tramas e urdumes perfeitamente retas e relaxadas, sem estiramento elástico artificial.",
    technicalDetails: "Se a tensão de enquadramento for insuficiente (tecido frouxo / loose hooping), o tecido se move sob o calcador a cada impacto da agulha ('efeito bandeira' / flagging), gerando laçadas soltas, desalinhamento de contornos (out-of-register) e quebra de agulha. Por outro lado, se a operadora puxar as bordas do tecido com o bastidor já apertado (over-tightening), as fibras elásticas são esticadas; ao terminar o bordado e soltar o aro, o tecido relaxa e encolhe bruscamente, formando rugas permanentes (puckering) ao redor do bordado.",
    beginnerExplanation: "É o jeito certo de prender o tecido no bastidor. Ele não pode ficar nem frouxo e mole (parecendo uma rede), nem esticado demais puxado pelas pontas (parecendo um elástico esticado). Quando você bate de leve com os dedos no meio do tecido preso, ele tem que fazer um barulhinho firme parecendo um tamborzinho de brinquedo!",
    howItWorks: [
      "1. A operadora ajusta o parafuso do bastidor deixando uma folga inicial aproximada para a espessura do tecido e entretela.",
      "2. Apoia o aro externo sobre uma superfície plana e nivelada da bancada.",
      "3. Posiciona a entretela e o tecido alinhados por cima do aro externo.",
      "4. Encaixa o aro interno pressionando firmemente com as duas mãos de forma reta e uniforme.",
      "5. Dá o aperto final no parafuso com os dedos (sem puxar as bordas do tecido para fora).",
      "6. Testa o 'efeito tambor' com as pontas dos dedos: o conjunto está firme, reto e pronto para a máquina."
    ],
    applications: [
      "Montagem padrão de tecidos planos de algodão, linho, sarja e percal.",
      "Preparação de toalhas de mesa, panos de prato e jogos americanos.",
      "Enquadramento de peças de alfaiataria e uniformes corporativos.",
      "Controle de qualidade para eliminação total de enrugamentos de tecido."
    ],
    characteristics: [
      "Garante a precisão milimétrica do encontro de contornos e detalhes finos.",
      "Elimina a oscilação vertical do tecido (flagging) durante o bordado.",
      "Evita marcas permanentes de estiramento nas fibras têxteis."
    ],
    commonErrors: [
      "❌ Puxar o tecido pelas pontas depois que o bastidor já está apertado, deformando o tecido e criando rugas horrorosas quando o bordado termina.",
      "❌ Deixar o tecido frouxo no meio, fazendo a agulha empurrar o tecido para baixo e desalinhar todos os contornos pretos do desenho.",
      "❌ Apertar o parafuso com alicate com força excessiva, quebrando o aro plástico do bastidor."
    ],
    troubleshootingTips: [
      "Bordado ficando franzido ao tirar do bastidor: você esticou o tecido com a mão ao prender; encaixe o bastidor direto sem puxar as bordas.",
      "Contornos saindo 2 mm fora do lugar: o tecido estava frouxo no bastidor e escorregou durante o bordado; aperte mais firme.",
      "Tecido escorregando mesmo com parafuso apertado: envolva o aro interno com fita crepe ou viés de algodão para dar aderência."
    ],
    dicaArtrelados: "Nunca puxe as beiradas do tecido depois de fechar o bastidor! Ajuste o parafuso na medida certa antes, encaixe o aro interno com pressão reta e deixe o tecido acomodar naturalmente. O 'efeito tambor' vem do encaixe perfeito, não do puxão!",
    voceSabia: "O teste do 'efeito tambor' é o mesmo princípio físico utilizado pelos percussionistas sinfônicos para afinar peles de tímpanos e tambores com tensão isotrópica perfeitamente equilibrada.",
    practicalExercise: "Prenda um retalho de tecido no bastidor sem puxar as bordas. Dê batidinhas leves com o indicador no centro e escute o som oco e firme do efeito tambor. Solte e tente de novo até pegar a sensibilidade exata nas mãos.",
    quickSummary: "Equilíbrio de fixação mecânica do tecido no bastidor, proporcionando firmeza estável como pele de tambor sem esticar as fibras têxteis.",
    relatedTerms: ["Bastidor de Bordado", "Efeito Bandeira (Flagging)", "Enrugamento (Puckering)", "Parafuso de Aperto", "Estabilidade"],
    tags: ["tensao de enquadramento", "efeito tambor", "bastidor", "hooping", "fixacao", "qualidade"]
  },
  {
    id: "toalha-fralda-e-enxoval-de-bebe-bordado-seguro-e-macio",
    code: "T-059",
    letter: "T",
    term: "Toalha Fralda e Enxoval de Bebê (Bordado Seguro e Macio)",
    pronunciation: "to-a-lha fral-da e en-xo-val de be-bê (bor-da-do se-gu-ro e ma-ci-o)",
    level: "Iniciante 🟢",
    category: "Aplicações & Técnicas Especiais",
    grammarClass: "Locução substantiva feminina.",
    origin: "Nicho mais tradicional e lucrativo da personalização artesanal infantil, exigindo normas rigorosas de conforto dérmico, maciez e segurança para recém-nascidos.",
    summary: "Boas práticas, insumos especiais e proteção de avesso (termo-protetor) para bordar fraldas, bodys e toalhas de bebê com maciez e segurança total.",
    definition: "O Bordado em Toalha Fralda e Enxoval de Bebê (Babywear & Nursery Embroidery) compreende o conjunto de técnicas, normas de conforto e cuidados especiais dedicados a peças de vestuário e higiene para recém-nascidos e primeira infância. Como a pele do bebê é extremamente sensível, fina e vulnerável a alergias e atritos, o bordado deve ser programado com densidade suave, linhas macias e receber obrigatoriamente a aplicação de uma película protetora termocolante de avesso (como o protetor de bordado macio / Comfort Wear / Tender Touch), que cobre completamente os nós e linhas ásperas do verso.",
    technicalDetails: "Os parâmetros técnicos essenciais para enxoval de bebê incluem: 1) Matrizes com densidade leve a moderada (0.42 a 0.48 mm), evitando 'placas' duras de tatami que incomodam o bebê; 2) Uso de entretelas hidrossolúveis especiais ou entretela de recorte macia (Poly-Mesh) sem bordas cortantes; 3) Agulha ponta bola fina nº 70/10 para não cortar a trama delicada da fralda dupla; 4) Aplicação final da malha protetora termocolante com ferro a seco a 130°C no avesso, criando uma barreira sedosa como uma segunda pele.",
    beginnerExplanation: "É o bordado feito em fraldinhas, toalhinhas macias, macacões e mantas de bebê. Como a pele do neném é muito delicadinha, o bordado não pode ficar duro nem espetar por trás. Por isso, a gente usa pontos mais leves e cola uma malhinha mágica super macia por trás do bordado para não arranhar a pele do bebê!",
    howItWorks: [
      "1. A fralda dupla é posicionada no bastidor com entretela hidrossolúvel ou entretela malha macia.",
      "2. Coloca-se filme hidrossolúvel por cima se a fralda tiver textura ou felpa.",
      "3. A máquina borda com velocidade moderada (600 PPM) usando agulha fina ponta bola 70/10.",
      "4. Após bordar, removem-se os excessos de entretela e apara-se todos os fios soltos do avesso.",
      "5. Corta-se um pedaço do protetor de bordado termocolante (Comfort Wear) 1 cm maior que o desenho.",
      "6. Passa-se o ferro a 130°C por 10 segundos no avesso: o avesso fica liso e macio como seda.",
      "7. A peça é lavada e embalada com cheirinho suave de bebê para entrega."
    ],
    applications: [
      "Toalhas fralda de banho com capuz e fraldinhas de boca.",
      "Bodys, macacõezinhos, pagões e culotes de malha 100% algodão.",
      "Mantas de piquet, percal 400 fios e naninhas de pelúcia antialérgica.",
      "Kits de maternidade de luxo (porta-fraldas, almofadas de amamentação e cueiros)."
    ],
    characteristics: [
      "Nicho campeão de vendas e encomendas contínuas o ano inteiro.",
      "Exige foco absoluto em maciez, segurança e ausência de nós pontiagudos.",
      "Agrega altíssimo valor emocional para mães, gestantes e avós."
    ],
    commonErrors: [
      "❌ Bordar matrizes muito pesadas e cheias de camadas em fraldas finas, deixando o bordado duro como uma tábua.",
      "❌ Deixar o avesso com nós compridos e fios ásperos em contato direto com a pele do recém-nascido.",
      "❌ Usar entretela rasgável comum grossa que solta fiapos duros e arranha após a lavagem."
    ],
    troubleshootingTips: [
      "Bordado deixando a fralda repuxada e franzida: diminua a densidade dos pontos no software e use entretela hidrossolúvel de boa qualidade.",
      "Avesso pinicando a pele: passe a película protetora de avesso (Tender Touch / Protetor de Bordado Termocolante) com ferro a seco.",
      "Fralda furando ao lado das letras: troque a agulha para ponta bola fina nº 70/10 ou 65/9."
    ],
    dicaArtrelados: "Nunca entregue um body ou fraldinha de bebê sem aplicar o Protetor de Bordado Termocolante no avesso! Ele custa centavos, deixa o avesso tão gostoso que parece camurça de bebê e as mães ficam encantadas com o seu cuidado e carinho!",
    voceSabia: "Na tradição portuguesa e brasileira, as fraldas bordadas à mão com o nome do bebê eram chamadas de 'fraldas de bênção' e passavam de geração em geração dentro das famílias como relicários de família.",
    practicalExercise: "Borde o nome de um bebê em uma fraldinha dupla. Faça a limpeza do avesso e aplique um retalho de protetor termocolante de bordado no verso com o ferro. Passe as costas da sua mão no avesso e sinta o toque aveludado e suave.",
    quickSummary: "Técnicas de bordado de alta maciez e segurança para recém-nascidos, com matrizes leves, agulhas finas e protetor termocolante de avesso.",
    relatedTerms: ["Protetor de Bordado (Comfort Wear)", "Entretela Hidrossolúvel", "Agulha Ponta Bola 70/10", "Fralda Dupla", "Enxoval"],
    tags: ["toalha fralda", "enxoval de bebe", "fraldinha", "maciez", "seguranca", "bebe", "aplicacoes"]
  },
  {
    id: "trava-do-bastidor-parafuso-de-aperto-hoop-lock-tension-thumb-screw",
    code: "T-060",
    letter: "T",
    term: "Trava do Bastidor / Parafuso de Aperto (Hoop Lock & Tension Thumb Screw)",
    pronunciation: "tra-va do bas-ti-dor / pa-ra-fu-so de a-per-to (húp lók / ten-xion tâmb scru)",
    level: "Iniciante 🟢",
    category: "Bastidores & Fixação",
    grammarClass: "Locução substantiva feminina.",
    origin: "Mecanismo clássico de aperto por rosca helicoidal e borboleta regulável desenvolvido para fechamento uniforme dos anéis de bastidores manuais e mecânicos.",
    summary: "Parafuso serrilhado com porca de aperto localizado no aro externo do bastidor, responsável por regular a abertura e travar o tecido com firmeza.",
    definition: "A Trava do Bastidor (Hoop Lock / Parafuso Borboleta de Tensão / Tension Thumb Screw) é o conjunto mecânico roscado de aço ou latão montado na fenda de expansão do aro externo do bastidor de bordar. Acionado manualmente através de uma cabeça plástica serrilhada (ou porca borboleta com fenda para chave de fenda), o parafuso fecha o diâmetro do aro externo contra o aro interno, aplicando a compressão perimetral necessária para prender o tecido e a entretela com estabilidade absoluta durante toda a execução da matriz.",
    technicalDetails: "O mecanismo opera por compressão mecânica radial. O aperto ideal deve ser obtido exclusivamente com a força dos dedos das mãos (torque manual moderado entre 0,5 e 1,0 N·m). O uso de ferramentas inadequadas (como alicates de pressão ou parafusadeiras) pode espanar as roscas metálicas, trincar as orelhas plásticas de fixação do bastidor ou esmagar de forma irreversível as fibras do tecido (hoop burn). Em bastidores industriais modernos, utilizam-se travas rápidas tipo 'Quick-Lock' por alavanca excêntrica.",
    beginnerExplanation: "É aquele parafusinho com cabecinha de plástico ou borboleta que fica na beirada do bastidor de fora. É girando ele com os dedos que você aperta ou afrouxa o bastidor para prender tecidos mais finos ou mais grossos com firmeza.",
    howItWorks: [
      "1. A bordadeira gira o parafuso no sentido anti-horário para afrouxar o aro externo de acordo com a espessura do tecido.",
      "2. Encaixa o tecido e a entretela entre os dois aros em uma superfície plana.",
      "3. Pressiona o aro interno para dentro do aro externo.",
      "4. Gira o parafuso de aperto no sentido horário usando a ponta dos dedos até sentir resistência firme.",
      "5. A fenda do aro externo se fecha, travando o tecido em toda a circunferência de 360°.",
      "6. O bastidor é montado no pantógrafo da máquina sem risco de escorregamento do tecido."
    ],
    applications: [
      "Regulagem de espessura para tecidos finos (seda, organza) e grossos (toalhas, jaquetas, moletons).",
      "Fixação estável de bastidores redondos, ovais e retangulares em todas as marcas de máquinas.",
      "Manutenção preventiva e substituição de porcas e parafusos desgastados do ateliê.",
      "Enquadramento seguro de sanduíches espessos de tecido, manta e entretela."
    ],
    characteristics: [
      "Design ergonômico serrilhado para aperto manual antiderrapante com os dedos.",
      "Mola interna ou bucha de latão que impede o desrosqueamento por vibração.",
      "Peça mecânica de reposição de baixo custo e alta disponibilidade."
    ],
    commonErrors: [
      "❌ Apertar o parafuso do bastidor usando alicate de ferro, quebrando a orelha plástica do bastidor na metade.",
      "❌ Rosquear o parafuso torto na porca de latão, espanando a rosca e inutilizando o aperto.",
      "❌ Deixar o parafuso muito frouxo com medo de marcar o tecido, fazendo o tecido soltar no meio do bordado."
    ],
    troubleshootingTips: [
      "Parafuso girando em falso sem apertar: a porca quadrada interna de latão caiu ou a rosca espanou; substitua o kit de parafuso e porca.",
      "Bastidor escorregando mesmo com parafuso apertado: limpe resíduos de cola spray do aro com álcool isopropílico.",
      "Dificuldade de girar o parafuso com a mão: aplique uma gota minúscula de óleo de máquina ou vaselina na rosca."
    ],
    dicaArtrelados: "Se você tem dores nas mãos ou artrite para apertar o parafuso do bastidor com força, use uma daquelas chavinhas plásticas redondas ergonômicas (Hoop Key / Chave de Bastidor) que vêm com a máquina! Ela multiplica a força dos seus dedos sem nenhum esforço e sem risco de estragar o parafuso!",
    voceSabia: "Os primeiros bastidores com parafuso de aperto regulável foram inventados na Inglaterra vitoriana em 1860; antes disso, os bastidores de madeira eram ajustados com cunhas de madeira batidas com martelinhos.",
    practicalExercise: "Pegue seu bastidor favorito. Desmonte o parafuso de aperto totalmente, limpe a rosca com um pano e passe uma gotinha de óleo. Monte novamente e sinta a maciez e precisão ao girar a trava com os dedos.",
    quickSummary: "Mecanismo de rosca e porca de aperto no aro externo do bastidor para regulagem de espessura e fixação firme do tecido.",
    relatedTerms: ["Bastidor de Bordado", "Efeito Tambor", "Hoop Burn (Marcas de Bastidor)", "Chave de Bastidor", "Fixação"],
    tags: ["trava do bastidor", "parafuso de aperto", "hoop lock", "bastidor", "mecanica", "acessorios"]
  },
  {
    id: "tatami-com-mascara-efeito-curvo-curved-patterned-tatami-fill",
    code: "T-061",
    letter: "T",
    term: "Tatami com Máscara / Efeito Curvo (Curved & Patterned Tatami Fill)",
    pronunciation: "ta-ta-mi com más-ca-ra / e-fei-to cur-vo (kêrved end pé-ternd ta-ta-mi fil)",
    level: "Avançado 🔴",
    category: "Pontos & Estruturas",
    grammarClass: "Locução substantiva masculina.",
    origin: "Recurso de alta tecnologia em softwares profissionais de digitalização (Wilcom EmbroideryStudio, Tajima DG) para distorção de linhas de preenchimento acompanhando vetores curvos.",
    summary: "Ponto tatami avançado cujas linhas de costura se curvam e fluem organicamente ao longo da geometria do desenho, criando ilusão de movimento e tridimensionalidade.",
    definition: "O Tatami com Máscara / Tatami Curvo (Curved Tatami / Radial Fill / Patterned Tatami with Mask) é uma técnica avançada de programação na qual as linhas paralelas convencionais do ponto tatami são distorcidas por linhas de guia vetoriais curvas, radiais ou em espiral. Em vez de preencher uma superfície com linhas retas rígidas, o algoritmo calcula o espaçamento e a direção dos pontos para que as passadas acompanhem organicamente as curvas anatômicas do objeto (como pétalas arredondadas, penas de pássaros, cabelos ondulados, ondas do mar ou cascos de animais).",
    technicalDetails: "Em softwares de digitalização, o efeito é gerado aplicando 'Curved Fill' (Preenchimento Curvo) ou máscaras de relevo (Carving Stamps / Trapilho Digital). O algoritmo mantém a densidade constante (ex: 0.40 mm) ao longo de todo o arco variando o comprimento dos pontos (de 2.5 mm a 4.5 mm) e o ângulo de penetração da agulha dinamicamente a cada linha. Quando a luz incide sobre o fio de poliéster brilhante em diferentes ângulos curvos, o bordado ganha um brilho furta-cor e um dinamismo visual deslumbrante sem necessidade de troca de cor.",
    beginnerExplanation: "É um jeito muito avançado e lindo de fazer o ponto tatami! Em vez de fazer as linhazinhas todas retas e paradas, o programador faz as linhas de costura fazerem curvas suaves seguindo o desenho (como as curvas de uma pétala de rosa ou o movimento das ondas do mar). O bordado brilha com a luz e parece que está se mexendo de verdade!",
    howItWorks: [
      "1. O programador digitaliza a forma vetorial do objeto no software de matrizes.",
      "2. Desenha uma ou mais linhas de guia curvas (Curved Direction Lines) definindo o fluxo do movimento.",
      "3. O software converte o preenchimento plano em linhas de tatami dinamicamente curvadas.",
      "4. Aplica-se máscara de textura (Carving Stamp) para criar ranhuras decorativas em baixo-relevo.",
      "5. A máquina de bordar costura as linhas curvas com sincronismo milimétrico.",
      "6. A luz reflete em múltiplos ângulos nos filamentos de poliéster, gerando um efeito de relevo e movimento impressionante."
    ],
    applications: [
      "Bordados artísticos realistas de animais (penas de araras, pelos de leão, escamas de peixes).",
      "Pétalas e folhas florais hiper-realistas com efeito de curvatura natural.",
      "Bandeiras ondulando ao vento e logomarcas esportivas dinâmicas.",
      "Bordados de alta-costura para desfiles e peças exclusivas de colecionador."
    ],
    characteristics: [
      "Cria profundidade, volume e ilusão de ótica tridimensional sem mudar de linha.",
      "Aproveita o brilho especular dos fios trilobais de poliéster e raiom.",
      "Diferencial máximo de virtuosismo e valor artístico na programação de matrizes."
    ],
    commonErrors: [
      "❌ Fazer curvas excessivamente fechadas em raios menores que 2 mm, concentrando centenas de pontos no mesmo centro e quebrando a agulha.",
      "❌ Usar fio 100% fosco (algodão) que não reflete a luz, reduzindo o impacto visual do efeito curvo.",
      "❌ Esquecer de calibrar a compensação de encolhimento nas extremidades das curvas, gerando repuxamento lateral no tecido."
    ],
    troubleshootingTips: [
      "Ponto acumulando e embolando no centro da curva radial: aumente o raio interno do centro ou aplique a função 'Short Stitches' (Filtrar Pontos Curtos).",
      "Efeito curvo pouco visível: use linha de poliéster brilhante trilobal e borde sobre tecido escuro de alto contraste.",
      "Tecido repuxando ao longo do arco: aplique subponto tatami cruzado com ângulo de 90° em relação à média das curvas."
    ],
    dicaArtrelados: "O Tatami Curvo é o maior segredo dos mestres do bordado realista! Quando você borda uma pétala de rosa com linhas curvas acompanhando o contorno dela, a flor ganha vida própria e parece que vai sair do tecido!",
    voceSabia: "O algoritmo de preenchimento curvo em computação gráfica de bordado foi inspirado nas técnicas de gravura em metal renascentistas de Albrecht Dürer (século XVI), que usava hachuras curvas para dar volume aos corpos humanos.",
    practicalExercise: "Abra o seu software de programação. Crie um círculo simples com tatami reto. Em seguida, adicione duas linhas de direção curvas em formato de onda (S). Simule no modo 3D TrueView e veja a mágica da luz refletindo nas curvas do bordado.",
    quickSummary: "Técnica de programação em que o ponto tatami acompanha curvas e guias vetoriais, gerando dinamismo, reflexos de luz e profundidade tridimensional.",
    relatedTerms: ["Tatami", "Tatami com Textura", "Carving Stamp (Baixo-Relevo)", "Brilho Especular", "Programação Realista"],
    tags: ["tatami curvo", "tatami com mascara", "curved fill", "pontos", "wilcom", "efeito 3d"]
  },
  {
    id: "tensionador-de-mola-check-spring-take-up",
    code: "T-062",
    letter: "T",
    term: "Tensionador de Mola — Check Spring (Mola Amortecedora do Estica-Fio & Controle Dinâmico)",
    pronunciation: "ten-si-o-na-dor de mo-la — tchék spring",
    level: "Intermediário 🟡",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês check spring (mola de retenção e amortecimento dinâmico de fio). Componente mecânico de alta precisão do conjunto tensor.",
    summary: "Pequena mola em espiral fina acoplada aos discos de tensão superior que absorve a folga da linha no momento em que a agulha penetra o tecido.",
    definition: "O Tensionador de Mola (Check Spring / Mola do Estica-Fio / Take-up Spring / Mola Auxiliar de Tensão) é uma mola helicoidal de arame de aço fino calibrado integrada diretamente ao bloco dos discos tensores superiores. Sua função dinâmica é manter uma tração suave e contínua sobre a linha superior durante a descida da barra da agulha até que a ponta da agulha fure o tecido, impedindo que a linha fique frouxa, forme laçadas soltas ou escape da ranhura da agulha antes da penetração.",
    technicalDetails: "O curso de oscilação da mola (Spring Stroke) deve ser ajustado entre 5 mm e 8 mm de deflexão, e a pressão da mola deve desarmar exatamente quando a agulha perfura o tecido. Se a mola estiver quebrada, com pressão fraca ou sem curso, o fio superior forma 'olhos de perdiz' (Looping) na face do bordado e quebra na arrancada de alta velocidade.",
    beginnerExplanation: "É aquela mola fininha e flexível que fica balançando para cima e para baixo perto dos botões de tensão quando a máquina costura. Ela serve para esticar a linha com carinho e não deixar o fio ficar frouxo enquanto a agulha desce.",
    howItWorks: [
      "1. A linha passa entre os discos de tensão e engata no gancho da mola check spring.",
      "2. Quando o estica-fio desce para ceder linha, a mola sobe absorvendo a folga do fio.",
      "3. A agulha desce mantendo a linha perfeitamente esticada e alinhada com o olho da agulha.",
      "4. No instante em que a ponta da agulha perfura o tecido, a mola encosta no seu batente de descanso.",
      "5. A linha fica livre para a lançadeira rotativa laçar o ponto na caixa de bobina.",
      "6. Quando o estica-fio sobe para puxar o nó, a mola recarrega para o próximo ciclo."
    ],
    applications: [
      "Estabilização de fluxo em todas as máquinas de bordar domésticas e industriais.",
      "Amortecimento essencial para linhas de bordado frágeis, raiom e metálicas.",
      "Prevenção de laçadas soltas (Looping) em costuras de alta velocidade (800 a 1.200 PPM).",
      "Controle de tensão em bordados volumosos sobre bonés e jaquetas pesadas."
    ],
    characteristics: [
      "Fabricada em fio de aço-mola de alta elasticidade com acabamento polido.",
      "Movimento oscilatório contínuo de alta frequência que acompanha cada ponto.",
      "Regulagem angular independente de curso e pré-tensão."
    ],
    commonErrors: [
      "❌ Passar a linha pela máquina sem engatar o fio no gancho da mola check spring, gerando laçadas soltas na frente do bordado.",
      "❌ Continuar bordando com a mola quebrada ou torta, achando que é apenas um araminho decorativo.",
      "❌ Apertar a pressão da mola em excesso, partindo linhas finas no início do ponto."
    ],
    troubleshootingTips: [
      "Fios soltos e pequenas argolinhas de linha aparecendo na superfície do bordado: verifique se a linha está devidamente encaixada na mola check spring ou se a mola está quebrada.",
      "Linha quebrando toda vez que a máquina acelera: aumente o curso da mola para dar mais amortecimento à linha.",
      "A mola não se mexe durante o bordado: limpe restos de fiapos acumulados no interior do tambor do tensor."
    ],
    dicaArtrelados: "Sempre que você passar a linha de cima na sua máquina, olhe para a mola check spring e dê uma leve puxadinha na ponta do fio com a mão: veja se a molinha sobe e desce elástica e feliz! Se ela estiver se movendo suave, seu bordado vai rodar com perfeição!",
    voceSabia: "A mola check spring foi patenteada pela primeira vez por Isaac Singer em 1855 e foi a invenção mecânica responsável por permitir que as máquinas de costura aumentassem sua velocidade de 200 para mais de 1.000 pontos por minuto sem quebrar a linha.",
    practicalExercise: "Com a máquina desligada e a linha passada, puxe a linha perto da agulha com os dedos. Observe a mola check spring se movimentando e encostando no batente metálico. Sinta a elasticidade suave que protege a sua linha contra quebras.",
    quickSummary: "Tensionador de Mola (Check Spring) é a mola oscilante dos tensores que absorve a folga da linha na descida da agulha, eliminando laçadas soltas e quebras.",
    relatedTerms: ["Discos de Tensão", "Estica-Fio", "Sistema de Tensão", "Looping (Laçadas Soltas)", "Passagem de Linha"],
    tags: ["tensionador", "mola", "checkspring", "componentes", "mecanica", "fios"]
  },
  {
    id: "tecnica-trapunto-no-bastidor-ith-trapunto",
    code: "T-063",
    letter: "T",
    term: "Técnica Trapunto no Bastidor — ITH Trapunto Embroidery (Acolchoamento com Alto-Relevo Seletivo)",
    pronunciation: "téc-ni-ca tra-pun-to no bas-ti-dor — in dê hup tra-pun-to",
    level: "Avançado 🔴",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do italiano trapunto (bordado acolchoado em relevo, do latim trans-pungere, furar através). Técnica clássica da Sicília do século XIV adaptada para máquinas eletrônicas.",
    summary: "Técnica refinada de bordado onde áreas selecionadas do desenho recebem camadas extras de manta recortada no bastidor para criar relevos altos e esculturais.",
    definition: "O Trapunto no Bastidor (In-The-Hoop Trapunto / Trapunto Digital / Alto-Relevo Seletivo Acolchoado) é a adaptação computadorizada da nobre técnica italiana de acolchoamento decorativo. Consiste em bordar as linhas de contorno das áreas em relevo (como flores, brasões ou figuras) diretamente sobre uma manta acrílica ou feltro estruturante; em seguida, retira-se o bastidor da máquina e apara-se o excesso de manta ao redor do desenho com tesoura de precisão (tesoura pelicano). Retorna-se o bastidor para a máquina, cobre-se com o tecido principal e executa-se o pesponto de matelassê de fundo (Micro-Stippling), fazendo com que as áreas com manta sobressaiam com um relevo volumoso e escultórico de luxo.",
    technicalDetails: "As matrizes de trapunto digital exigem programação em 3 etapas com paradas de segurança (Stop Commands): 1) Linha de fixação da manta (Placement & Tackdown); 2) Recorte manual milimétrico (Trim); e 3) Aplicação do tecido de topo com acolchoamento de fundo de alta densidade (Micro-Stippling / Meander Fill com espaçamento de 1,5 mm) que comprime as áreas vazias e projeta o relevo para fora.",
    beginnerExplanation: "É uma técnica chique e maravilhosa que cria desenhos com relevo bem fofinho e alto, parecendo uma almofada em 3D: você costura um pedaço de manta, recorta só a florzinha com a tesoura, coloca o tecido de cima e a máquina borda o fundo bem apertadinho para a flor pular para fora do tecido!",
    howItWorks: [
      "1. A entretela e a manta acrílica grossa (R2 ou manta de poliéster 150g) são colocadas no bastidor.",
      "2. A máquina borda a silhueta da figura (ex: uma coroa real ou flor).",
      "3. A máquina pausa; a bordadeira recorta o excesso de manta rente à costura com tesoura pelicano.",
      "4. Posiciona-se o tecido nobre principal (linho, percal ou seda) e o plástico hidrossolúvel por cima.",
      "5. A máquina costura os detalhes finos da figura e preenche todo o fundo com micro-pontos de matelassê apertado.",
      "6. As áreas com manta sobressaem com relevo 3D macio e escultural enquanto o fundo fica rebaixado.",
      "7. A peça é retirada com acabamento de alta-costura italiana digno de enxovais principescos."
    ],
    applications: [
      "Enxovais de bebê de luxo (mantas de maternidade, almofadas de berço e porta-fraldas).",
      "Bordados em colchas de cama nobres, jogos de toalhas de banho requintadas e almofadas de linho.",
      "Capas de livros memoriais, bíblias e álbuns de casamento personalizados.",
      "Vestuário cerimonial, vestidos de noiva e alta-costura."
    ],
    characteristics: [
      "Acabamento luxuoso com relevo macio de alto impacto tátil e visual.",
      "Não utiliza EVA rígido, mantendo a peça 100% lavável e extremamente macia.",
      "Valor agregado altíssimo, permitindo cobrar até 3 vezes mais pelo produto final."
    ],
    commonErrors: [
      "❌ Cortar o tecido de base ou a entretela por engano na hora de recortar a manta com a tesoura.",
      "❌ Deixar sobras de manta para fora do contorno, criando caroços e bordas irregulares sob o tecido final.",
      "❌ Fazer o pesponto de fundo com pontos muito longos, não comprimindo o tecido o suficiente para projetar o relevo."
    ],
    troubleshootingTips: [
      "O relevo ficou murcho e sem destaque: use duas camadas de manta acrílica 150g e utilize um ponto de fundo tipo 'Micro-Stippling' bem denso (espaçamento de 1,2 mm).",
      "Dificuldade de recortar a manta rente à costura: use uma tesoura pelicano (Duckbill Scissors) de lâmina curva que protege o tecido inferior contra cortes acidentais.",
      "Tecido de topo enrugando no matelassê: use cola spray temporária para assentar o tecido sobre a manta recortada antes de iniciar a costura final."
    ],
    dicaArtrelados: "Para fazer o Trapunto mais perfeito da sua vida: use a 'Tesoura Pelicano' da Artrelados para recortar a manta! A lâmina larga em formato de bico de pato empurra a entretela para baixo enquanto corta a manta rente ao ponto, sem NENHUM perigo de furar seu trabalho!",
    voceSabia: "O exemplo mais antigo de Trapunto conservado no mundo é a famosa 'Colcha de Tristão e Isolda' (Tristan Quilt), confeccionada na Sicília em 1395, bordada à mão em seda e linho com cenas de cavaleiros medievais em alto-relevo.",
    practicalExercise: "Borde uma matriz de trapunto simples em um quadrado de 13x13 cm: monte a manta, costure a silhueta de um coração, apare a manta com carinho, cubra com tricoline e termine o matelassê. Passe a mão por cima e sinta a textura mágica do alto-relevo!",
    quickSummary: "Trapunto no Bastidor é a nobre técnica que combina manta recortada e pesponto denso de fundo para criar bordados com alto-relevo macio e escultural em enxovais de luxo.",
    relatedTerms: ["Quilt no Bastidor", "Tesoura Pelicano", "Micro-Stippling", "Manta R1/R2", "In-The-Hoop (ITH)"],
    tags: ["trapunto", "ith", "relevo", "manta", "luxo", "enxoval", "alta-costura"]
  },
  {
    id: "trimmer-solenoid-solenoide-acionamento-faca",
    code: "T-064",
    letter: "T",
    term: "Trimmer Solenoid — Solenoide de Acionamento da Faca (Atuador Eletromagnético de Corte)",
    pronunciation: "tri-mer so-le-nóid — so-le-nói-de de a-ci-o-na-men-to da fa-ca",
    level: "Avançado 🔴",
    category: "Mecânica & Operação",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do inglês trimmer (aparador/cortador de linha) e do francês solénoïde (bobina de fio condutor que gera campo magnético). Componente eletromecânico.",
    summary: "Atuador eletromagnético que dispara o mecanismo da faca móvel inferior para cortar as linhas de cima e da bobina em frações de segundo.",
    definition: "O Trimmer Solenoid (Solenoide de Corte de Linha / Atuador da Faca Automática / Trimmer Actuator Solenoid) é a bobina eletromagnética de alta potência controlada pela placa-mãe da máquina de bordar responsável por acionar mecanicamente o conjunto do cortador de fio (Trimmer Unit). Ao receber um pulso elétrico sincronizado com a posição angular do encoder do eixo principal (geralmente entre 280° e 310°), o solenoide atrai um êmbolo de aço que engata a alavanca da faca móvel na árvore de cames, fazendo a faca cruzar a chapa de ponto, laçar os dois fios e seccioná-los contra a lâmina fixa.",
    technicalDetails: "Opera com pulsos rápidos de tensão contínua (DC 24V ou 36V) de duração milimétrica (50 a 100 ms). Se o solenoide acumular poeira de linha, superaquecer ou perder a força magnética, a faca móvel não avança completamente, resultando em falhas de corte (Trim Failure), linhas puxadas para fora do olho da agulha ou quebra mecânica do suporte da faca.",
    beginnerExplanation: "É o 'motorzinho magnético' que empurra a tesourinha escondida embaixo da chapa de ponto toda vez que a máquina precisa cortar a linha! Ele dá um estalo rápido e aciona a faca para cortar os fios da frente e de trás da peça.",
    howItWorks: [
      "1. A matriz emite o comando binário de corte (código de Trim).",
      "2. A placa eletrônica lê a posição do encoder do eixo principal para achar o ângulo exato de corte.",
      "3. A placa envia uma descarga elétrica de 24V para a bobina do solenoide.",
      "4. O campo magnético puxa o êmbolo interno instantaneamente com um clique metálico.",
      "5. A alavanca engata a faca móvel que avança, captura a linha superior e da bobina e corta contra a faca fixa.",
      "6. Uma mola de retorno recolhe a faca e o solenoide desarma para a máquina continuar bordando."
    ],
    applications: [
      "Acionamento automático do corte de linha em saltos entre letras e objetos.",
      "Corte obrigatório em cada troca de cor de linha.",
      "Corte final de encerramento da matriz de bordado.",
      "Testes de diagnóstico do sistema de corte no menu técnico de serviço da máquina."
    ],
    characteristics: [
      "Tempo de resposta ultrarrápido inferior a 80 milissegundos.",
      "Alta durabilidade para suportar milhões de ciclos de corte ao longo da vida útil da máquina.",
      "Integrado a microchaves ou sensores ópticos de posição de retorno (Home Sensor)."
    ],
    commonErrors: [
      "❌ Deixar fiapos de linha e pó de entretela acumularem dentro do compartimento do solenoide até travar o êmbolo.",
      "❌ Lubrificar o êmbolo do solenoide com óleo líquido comum, atraindo pó e criando uma pasta grudenta que emperra a faca.",
      "❌ Forçar a movimentação manual do êmbolo com chaves de fenda com a máquina ligada."
    ],
    troubleshootingTips: [
      "A máquina faz barulho de corte mas a linha não é cortada: retire a chapa de ponto e limpe todos os fiapos acumulados na faca móvel e no êmbolo do solenoide com ar comprimido ou pincel seco.",
      "Erro no painel 'Trim Error' / 'Trimmer Home Error': a faca não retornou à posição inicial; verifique se a mola de retorno da faca não escapou ou se o sensor óptico está sujo de poeira.",
      "A máquina trava com estalo forte na hora de cortar: o solenoide está acionando no ângulo errado do encoder; recalibre o ângulo de corte no menu de serviço técnico."
    ],
    dicaArtrelados: "NUNCA passe óleo líquido na área do solenoide e das facas de corte da sua máquina! O óleo vira um ímã de pó de entretela que vira uma graxa dura e trava o cortador. Limpe a área do corte apenas com pincel seco ou aspirador de pó!",
    voceSabia: "Em uma confecção industrial de uniformes bordando 500 peças por dia, o solenoide de corte de uma única máquina dispara mais de 30.000 vezes por semana sem parar!",
    practicalExercise: "Acesse o menu de configurações da sua máquina e localize o botão de 'Teste de Corte' (Trim Test). Com a chapa de ponto aberta (e os dedos afastados!), acione o teste manual e observe o solenoide disparando e a faquinha correndo para cortar os fios.",
    quickSummary: "Trimmer Solenoid é o atuador eletromagnético de alta velocidade que dispara o mecanismo da faca móvel para cortar automaticamente as linhas superior e da bobina.",
    relatedTerms: ["Cortador Automático (Trimmer)", "Faca Fixa e Faca Móvel", "Encoder de Eixo", "Quick Trim", "Limpador de Fio (Wiper)"],
    tags: ["solenoide", "trimmer", "corte", "mecanica", "eletronica", "faca"]
  },
  {
    id: "toalha-aveludada-bordado-veludo-microfibra",
    code: "T-065",
    letter: "T",
    term: "Toalha Aveludada — Bordado em Veludo e Microfibra (Manejo de Pelos & Hidrossolúvel de Topo)",
    pronunciation: "to-a-lha a-ve-lu-da-da — bor-da-do em ve-lu-do e mi-cro-fi-bra",
    level: "Intermediário 🟡",
    category: "Tecidos & Aplicações",
    grammarClass: "Substantivo feminina composta.",
    origin: "Do latim toacula (pano de enxugar) e vellutum (veludo, veloso). Protocolo técnico para tecidos com felpa aveludada e pelo denso.",
    summary: "Método de preparação, entretelamento e digitalização para bordar em toalhas de banho aveludadas e microfibra sem afundar os pontos.",
    definition: "A Toalha Aveludada (Velour Towel / Toalha Felpada com Acabamento Navalhado / Microfibra Plush) é o artigo têxtil de algodão ou poliéster cujas felpas em laçada foram cortadas e lixadas na superfície (processo de navalhamento), criando uma textura extremamente densa, macia e sedosa semelhante ao veludo. Por não possuir laçadas abertas, os pelos aveludados tendem a engolir os pontos de bordado e invadir o centro de letras finas se não houver uso obrigatório de filme termossolúvel ou hidrossolúvel de topo (Water Soluble Topping) combinado com matrizes dotadas de subpontos de grade (Tatami/Grid Underlay).",
    technicalDetails: "Exige entretela de corte limpo (Cut-Away) ou entretela rasgável de 80 g/m² resinada na base, combinada com filme plástico hidrossolúvel de 25 a 35 micras na face superior. A densidade dos pontos de acabamento deve ser ajustada para 0,38 mm a 0,42 mm com compensação de repuxo generosa (Pull Compensation de 0,40 mm a 0,55 mm) para superar o afundamento nas fibras densas.",
    beginnerExplanation: "É aquela toalha de banho chique super macia e aveludada que parece pele de pêssego! Como ela é cheia de pelinhos finos, se você bordar direto a linha afunda e o bordado some. O segredo é colocar um plástico hidrossolúvel transparente por cima do tecido antes de bordar para a linha ficar alta, lisinha e brilhante!",
    howItWorks: [
      "1. A toalha aveludada é montada no bastidor com entretela rasgável encorpada (80g) por baixo.",
      "2. Coloca-se uma folha de plástico hidrossolúvel transparente (filme solúvel) cobrindo toda a área do bordado.",
      "3. Fixa-se o plástico com alfinetes nos cantos do bastidor ou com uma costura de alinhavo (Basting Box).",
      "4. A máquina costura os pontos de subponto em grade segurando os pelos para baixo.",
      "5. A coluna de satim ou tatami de acabamento é bordada por cima do plástico, ficando 100% plana e nítida.",
      "6. Ao terminar, rasga-se o excesso de plástico e passa-se um paninho úmido ou borrifador de água para dissolver o restante instantaneamente."
    ],
    applications: [
      "Toalhas de banho e rosto de alto luxo para presentes de casamento e bodas.",
      "Roupões de banho aveludados para hotéis 5 estrelas e spas.",
      "Toalhinhas de lavabo nobres com monogramas clássicos.",
      "Mantas de microfibra e naninhas de bebê com textura plush macia."
    ],
    characteristics: [
      "Aspecto visual aveludado sofisticado com alto brilho sob a luz.",
      "Toque extremamente macio e confortável para a pele.",
      "Resultado de bordado nítido com letras destacadas e bordas perfeitas."
    ],
    commonErrors: [
      "❌ Bordar toalha aveludada sem plástico hidrossolúvel por cima, fazendo as letras sumirem no meio dos pelos.",
      "❌ Apertar o bastidor com força brutal sobre a toalha aveludada sem feltro protetor, deixando uma marca permanente que quebra os pelos (Hoop Burn).",
      "❌ Usar microletras finas menores que 5 mm em toalha aveludada, que ficam ilegíveis."
    ],
    troubleshootingTips: [
      "Pelinhos da toalha escapando por entre os pontos do bordado: use plástico hidrossolúvel duplo (duas folhas sobrepostas) e aumente o subponto para 'Tatami Underlay' aberto.",
      "Marcas quadradas do aro do bastidor esmagaram o veludo: borrife vapor de água com o ferro de passar a 2 cm de distância (sem encostar o ferro!) e escove os pelos suavemente com uma escovinha de dentes macia.",
      "Plástico difícil de tirar do meio das letras miúdas: borrife algumas gotinhas de água morna com um cotonete para o plástico derreter na hora sem manchar."
    ],
    dicaArtrelados: "Para nunca mais deixar marcas de bastidor em toalhas aveludadas caras: use a técnica do 'Bastidor Flutuante'! Prenda apenas a entretela no bastidor, passe cola spray temporária e cole a toalha por cima sem prensar o veludo no aro. Fica impecável e sem nenhuma marca!",
    voceSabia: "O acabamento aveludado das toalhas nobres é feito em teares especiais industriais equipados com cilindros de lâminas rotativas de altíssima rotação que 'barbeiam' as cabeças das laçadas de algodão com precisão de centésimos de milímetro.",
    practicalExercise: "Pegue um retalho de toalha aveludada. Borde uma letra com plástico hidrossolúvel por cima e outra letra sem plástico do lado. Compare na luz como a letra com plástico fica 10 vezes mais brilhante, lisa e profissional.",
    quickSummary: "Toalha Aveludada exige uso obrigatório de filme hidrossolúvel de topo e subpontos em grade para evitar que os pelos densos e navalhados engulam os pontos do bordado.",
    relatedTerms: ["Plástico Hidrossolúvel", "Hoop Burn (Marcas de Bastidor)", "Bastidor Flutuante", "Subponto em Grade (Tatami Underlay)", "Compensação de Repuxo"],
    tags: ["toalha", "aveludada", "veludo", "hidrossoluvel", "tecidos", "acabamento"]
  },
  {
    id: "tubo-guia-linha-thread-guide-tube",
    code: "T-066",
    letter: "T",
    term: "Tubo Guia-Linha — Thread Guide Tube (Canaleta Protetora de Alimentação Industrial)",
    pronunciation: "tu-bo gui-a li-nha — tréd gaid tiub",
    level: "Iniciante 🟢",
    category: "Acessórios & Ferramentas",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim tubus (conduto cilíndrico) e do inglês thread guide (guia de linha). Sistema de canalização aérea de fios têxteis.",
    summary: "Tubos flexíveis de polímero transparente ou metal que conduzem a linha do porta-cones até o cabeçote sem embaraços nem poeira.",
    definition: "O Tubo Guia-Linha (Thread Guide Tube / Tubete Protetor de Linha / Conduto Aéreo de Fio) é o conjunto de dutos tubulares flexíveis confeccionados em polietileno ou teflon de baixo atrito instalados entre a árvore do porta-cones traseiro e o bloco de tensores do cabeçote superior da máquina de bordar industrial ou semi-industrial multi-agulhas. Sua função é isolar e conduzir cada um dos 6 a 15 fios de linha em trajetos individuais e protegidos.",
    technicalDetails: "Elimina cruzamentos acidentais de fios provocados por correntes de ar ou ventiladores no ateliê, protege a linha contra o acúmulo de poeira e fiapos abrasivos em suspensão e reduz a oscilação harmônica (Thread Whip) em velocidades acima de 1.000 PPM. A passagem do fio pelo tubo é realizada com o auxílio de um passador de linha longo de arame de aço flexível (Threading Wire).",
    beginnerExplanation: "São aqueles caninhos plásticos transparentes que parecem canudinhos compridos no topo das máquinas de várias agulhas. Eles servem para levar a linha lá do cone até a frente da máquina sem misturar com as outras linhas e sem pegar vento de ventilador.",
    howItWorks: [
      "1. A linha sai do cone vertical e entra no bocal superior do tubo guia.",
      "2. O fio desliza suavemente pelas paredes internas de teflon de baixíssimo atrito.",
      "3. O tubo conduz a linha por cima da máquina sem encostar nas peças mecânicas ou nas outras 14 cores vizinhas.",
      "4. A linha sai pela extremidade inferior diretamente na entrada dos discos tensores.",
      "5. A corrente de ar de ventiladores ou ar-condicionado não desvia a trajetória do fio.",
      "6. A alimentação de linha segue contínua, limpa e perfeitamente estável."
    ],
    applications: [
      "Máquinas multi-agulhas profissionais de 4, 6, 10 e 15 agulhas (Brother, Janome, Barudan, Tajima, Ricoma).",
      "Ateliês com ventiladores de teto ou fluxo intenso de ar condicionado.",
      "Proteção de linhas sensíveis e fios metálicos contra nós aéreos.",
      "Ambientes industriais com poeira têxtil em suspensão."
    ],
    characteristics: [
      "Material transparente que permite visualizar a cor da linha e o fluxo de passagem.",
      "Superfície interna ultra-lisa com propriedades antiestáticas.",
      "Flexibilidade e alta durabilidade mecânica contra ressecamento."
    ],
    commonErrors: [
      "❌ Deixar poeira e fiapos acumularem dentro do tubo por anos sem limpar, criando resistência e travando a linha.",
      "❌ Passar duas linhas pelo mesmo tubo guia, fazendo os dois fios embolarem e quebrarem.",
      "❌ Dobrar ou amassar o tubo plástico, criando um ponto de estrangulamento que prende o fio."
    ],
    troubleshootingTips: [
      "Dificuldade de passar a linha por dentro do tubo longo: use o arame passador flexível longo de aço ou insira a ponta da linha e aspire com o bico do aspirador de pó na ponta de saída para a linha voar pelo tubo em 1 segundo.",
      "Linha pesada ao ser puxada: borrife um jato rápido de silicone spray seco em um pedaço de linha e puxe pelo tubo para lubrificar as paredes internas.",
      "Tubo ressecado e amarelado quebrando nas curvas: substitua o kit de mangueiras guia por tubos de silicone/teflon originais de 4 mm."
    ],
    dicaArtrelados: "O truque mágico da Artrelados para passar linha no tubo guia em 2 segundos: se você não tiver o arame passador longo na mão, coloque a ponta da linha na entrada do tubo e encoste a ponta de um canudo ou a boca na outra extremidade e dê uma puxadinha de ar (aspirada)! A linha viaja pelo tubinho e sai na sua mão na hora!",
    voceSabia: "As máquinas de bordar ultra-industriais modernas de alta velocidade utilizam sistemas pneumáticos com micro-sopros de ar comprimido (Air Threading) que passam as 15 linhas através dos tubos automaticamente ao toque de um botão no painel.",
    practicalExercise: "Inspecione os tubos guia da sua máquina. Pegue uma linha de cor contrastante e teste passar o fio pelo tubo usando o arame flexível ou a técnica do sopro/sucção. Sinta como o tubo protege a linha contra qualquer interferência externa.",
    quickSummary: "Tubo Guia-Linha é o duto tubular flexível que transporta as linhas do porta-cones até os tensores com proteção contra vento, poeira e cruzamento de fios.",
    relatedTerms: ["Porta-Cones", "Passagem de Linha", "Discos de Tensão", "Thread Whip", "Arame Passador"],
    tags: ["tubo", "guia-linha", "caninho", "acessorios", "multicabecas", "maquina"]
  }
];


import { Verbete } from "../types";

export const VERBETES_LETTER_S8: Verbete[] = [
  {
    id: "simetria-horizontal",
    code: "S-054",
    letter: "S",
    term: "Simetria Horizontal",
    pronunciation: "si-me-tri-a ho-ri-zon-tal",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da reflexão bilateral ao longo do eixo vertical Y (Flip Horizontal).",
    summary: "Espelhamento lateral de um desenho em relação ao eixo central vertical, invertendo o lado esquerdo com o lado direito.",
    definition: "A Simetria Horizontal (ou Espelhamento Horizontal / Horizontal Flip / Mirror X) é a operação geométrica de transformação que inverte as coordenadas no eixo X mantendo constante o eixo Y. É amplamente utilizada para criar pares de bordados opostos (como o pé esquerdo e o pé direito de sapatinhos, lados esquerdo e direito de golas de camisas, ou pares de asas e ramos).",
    technicalDetails: "Ao aplicar a simetria horizontal em objetos que contêm textos, o software deve isolar os caracteres tipográficos para que a leitura não fique invertida (efeito espelho ilegível), a menos que o objetivo seja especificamente criar matrizes para bordado pelo avesso (técnicas de transparência).",
    beginnerExplanation: "É virar o desenho de lado como se olhasse no espelho: o que estava olhando para a esquerda passa a olhar para a direita. Perfeito para fazer o parzinho de sapatinhos, golas ou mangas de camisas.",
    howItWorks: [
      "1. A usuária seleciona a matriz ou o objeto na tela.",
      "2. Clica no botão 'Espelhar Horizontalmente' (ícone de duas montanhas refletidas ou seta dupla horizontal).",
      "3. O software inverte o desenho da esquerda para a direita instantaneamente.",
      "4. Mantém a altura e o centro alinhados.",
      "5. A usuária salva a nova versão para o par da peça.",
      "6. As duas peças da roupa ficam perfeitamente espelhadas e elegantes."
    ],
    applications: [
      "Bordados em pares simétricos para golas sociais, punhos e lapelas.",
      "Parzinhos de sapatinhos de bebê, luvas e pantufas personalizadas.",
      "Espelhamento de animais que precisam 'olhar um para o outro' em almofadas de casal.",
      "Criação rápida de molduras e cantos decorativos para toalhas de mesa."
    ],
    characteristics: [
      "Operação instantânea com um único clique no software ou na máquina.",
      "Preserva rigorosamente todas as dimensões, densidades e propriedades de ponto.",
      "Essencial para a confecção de peças de vestuário em pares."
    ],
    commonErrors: [
      "❌ Espelhar uma matriz que contém nomes ou datas gravadas, fazendo o texto ficar invertido como escrita no espelho.",
      "❌ Bordar os dois lados de uma gola virados para a mesma direção em vez de usar a simetria horizontal.",
      "❌ Esquecer de reposicionar o ponto de início após o espelhamento."
    ],
    troubleshootingTips: [
      "Texto ficou de cabeça para o ar após o espelhamento: desagrupe o texto do desenho, espelhe apenas a figura e reescreva ou reposicione o texto normalmente.",
      "Par de passarinhos olhando para o lado de fora da almofada: use a simetria horizontal para fazer os dois passarinhos olharem para o centro.",
      "Máquina bordando o lado oposto do bastidor: verifique se o botão de espelho horizontal no painel da máquina não foi ativado sem querer."
    ],
    dicaArtrelados: "Para fazer toalhas de lavabo para casais: borde o raminho da toalha 'Ele' olhando para a direita e o da toalha 'Ela' com Simetria Horizontal olhando para a esquerda. Quando colocadas juntas no suporte, o efeito visual é simplesmente deslumbrante!",
    voceSabia: "Na heráldica e na alfaiataria militar, todas as figuras de animais em brasões de ombro (como águias e leões) devem obrigatoriamente estar voltadas para a frente do corpo do oficial, exigindo simetria horizontal entre as mangas.",
    practicalExercise: "Pegue o desenho de um passarinho olhando para a direita. Use a ferramenta 'Espelhar Horizontalmente com Cópia' e posicione os dois lado a lado, como se estivessem conversando. Salve a nova composição.",
    quickSummary: "Simetria Horizontal é o espelhamento do desenho da esquerda para a direita, fundamental para criar pares de golas, sapatinhos e composições harmônicas.",
    relatedTerms: ["Simetria Vertical", "Simetria da Matriz", "Espelhamento (Mirroring)", "Pares Simétricos", "Alinhamento no Bastidor"],
    tags: ["simetria horizontal", "espelho", "pares", "golas", "transformação"]
  },
  {
    id: "simetria-vertical",
    code: "S-055",
    letter: "S",
    term: "Simetria Vertical",
    pronunciation: "si-me-tri-a ver-ti-cal",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da reflexão bidimensional ao longo do eixo horizontal X (Flip Vertical).",
    summary: "Espelhamento superior e inferior de um desenho em relação ao eixo horizontal, invertendo a parte de cima com a parte de baixo.",
    definition: "A Simetria Vertical (ou Espelhamento Vertical / Vertical Flip / Mirror Y) é a transformação geométrica que inverte os eixos de coordenadas verticais (eixo Y), refletindo o objeto de ponta-cabeça. É utilizada para criar reflexos na água, molduras superiores e inferiores idênticas, barrados duplos de toalhas e motivos ornamentais de quatro quadrantes.",
    technicalDetails: "Ao inverter verticalmente uma matriz, os ângulos de inclinação de ponto (Stitch Angles) são automaticamente recalculados para manter a integridade visual, devendo o operador atentar para a ordem de costura das camadas para que a física de sobreposição permaneça coerente.",
    beginnerExplanation: "É virar o desenho de cabeça para baixo como se estivesse refletido em um espelho de água. Muito usado para fazer molduras decorativas em cima e embaixo de um texto ou barrados elegantes de toalha.",
    howItWorks: [
      "1. A usuária seleciona o ramo decorativo superior.",
      "2. Clica na ferramenta 'Espelhar Verticalmente' (ícone com duas setas verticais ou triângulos opostos).",
      "3. O software gera a cópia refletida de ponta-cabeça.",
      "4. A usuária posiciona o novo ramo abaixo do texto ou brasão central.",
      "5. Cria uma moldura perfeitamente equilibrada e harmônica.",
      "6. A peça ganha acabamento clássico de alta alfaiataria."
    ],
    applications: [
      "Molduras superiores e inferiores para monogramas de toalhas e lençóis de cama.",
      "Efeitos de reflexo em água para desenhos de paisagens, barcos e cisnes.",
      "Criação de mandalas e arabescos de quatro pontas por espelhamento cruzado.",
      "Barrados duplos simétricos para cortinas e caminhos de mesa de luxo."
    ],
    characteristics: [
      "Permite criar molduras completas desenhando apenas um quarto da arte.",
      "Equilibra o peso visual superior e inferior da peça bordada.",
      "Executável em um segundo tanto no computador quanto no painel da máquina."
    ],
    commonErrors: [
      "❌ Inverter verticalmente uma matriz completa com desenho realista de rosto ou flores que têm orientação natural de gravidade.",
      "❌ Espelhar verticalmente um desenho com texto, deixando as letras de cabeça para baixo e ilegíveis.",
      "❌ Não alinhar a distância dos ramos superior e inferior em relação ao texto central."
    ],
    troubleshootingTips: [
      "Moldura inferior mais perto do texto do que a superior: use a ferramenta 'Distribuir Verticalmente' ou ative a grade milimétrica para igualar o espaçamento.",
      "Bordado de quatro pontas desalinhado: use a combinação de 'Espelhar Horizontal' seguido de 'Espelhar Vertical' com cópia a partir do centro (X:0, Y:0).",
      "Desenho bordou de cabeça para baixo na máquina: certifique-se de que o botão de espelho vertical no painel da máquina não ficou ativado da última produção."
    ],
    dicaArtrelados: "Para fazer uma moldura de luxo para toalhas de casamento: pegue um raminho curvado, coloque em cima do monograma dos noivos e use a 'Simetria Vertical com Cópia' para colocar o mesmo ramo embaixo de ponta-cabeça. Fica um luxo digno de hotel 5 estrelas!",
    voceSabia: "A combinação simultânea de Simetria Horizontal e Simetria Vertical gera a chamada 'Simetria Central' ou 'Grupo de Ponto D2' na matemática, base de todos os azulejos portugueses e mandalas têxteis.",
    practicalExercise: "Desenhe um arabesco curvado no topo da tela. Use 'Espelhar Verticalmente com Cópia' e posicione a cópia na parte inferior. Escreva suas iniciais no meio e admire a moldura clássica formada.",
    quickSummary: "Simetria Vertical é o espelhamento de cima para baixo do desenho, ideal para criar molduras duplas, reflexos e ornamentos decorativos equilibrados.",
    relatedTerms: ["Simetria Horizontal", "Simetria da Matriz", "Espelhamento (Mirroring)", "Molduras de Monograma", "Origem de Coordenadas"],
    tags: ["simetria vertical", "espelho vertical", "molduras", "arabescos", "equilíbrio"]
  },
  {
    id: "stabilizer-estabilizador",
    code: "S-056",
    letter: "S",
    term: "Stabilizer (Estabilizador)",
    pronunciation: "is-tei-bi-lai-zer (es-ta-bi-li-za-dor)",
    level: "Iniciante 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo masculino (do inglês stabilizer).",
    origin: "Da tecnologia têxtil de não-tecidos poliméricos e celulósicos desenvolvida para suporte mecânico de costura.",
    summary: "Termo técnico internacional para a entretela de bordado; material de suporte que mantém o tecido firme e estável sob a agulha.",
    definition: "O Stabilizer (ou Estabilizador / Entretela de Bordado) é a base de material não-tecido (Non-Woven), filme termoplástico ou malha hidrossolúvel posicionada sob ou sobre o tecido durante o processo de bastidoramento e costura. Sua função primordial é absorver as tensões mecânicas exercidas pelas milhares de penetrações da agulha e passadas de linha, impedindo que a peça se deforme, enrugue, estique ou rasgue.",
    technicalDetails: "Classificam-se em quatro famílias principais segundo o método de remoção: 1) Cut-Away (Corte); 2) Tear-Away (Rasgo); 3) Wash-Away (Hidrossolúvel em água); e 4) Heat-Away (Termossolúvel em calor). A gramatura padrão varia entre 35 g/m² (muito leve) e 120 g/m² (extra pesada).",
    beginnerExplanation: "É a famosa entretela que a gente coloca junto com o tecido no bastidor. Ela funciona como a fundação de uma casa: segura o pano bem firme para a máquina poder bordar sem amassar, sem enrugar e sem furar a sua peça.",
    howItWorks: [
      "1. A bordadeira escolhe o tipo correto de estabilizador de acordo com o tecido.",
      "2. Posiciona o estabilizador no avesso da peça (ou por cima em toalhas felpudas).",
      "3. Prende o conjunto firmemente no bastidor com tensão uniforme de tambor.",
      "4. A máquina executa os milhares de pontos de bordado.",
      "5. O estabilizador absorve o repuxo da linha mantendo o tecido 100% liso.",
      "6. A peça é retirada e o excesso é recortado, rasgado ou dissolvido em água."
    ],
    applications: [
      "Indispensável em 100% dos bordados computadorizados em qualquer tipo de tecido.",
      "Estabilização de malhas, camisetas, pique e moletons contra deformação elástica.",
      "Sustentação de tecidos finos e transparentes (seda, organza, voal).",
      "Confecção de rendas soltas estruturadas (Free-Standing Lace - FSL)."
    ],
    characteristics: [
      "Garante a estabilidade dimensional do desenho do primeiro ao último ponto.",
      "Preserva a nitidez de letras pequenas e contornos de precisão.",
      "Elemento que define mais de 60% do sucesso ou fracasso de um bordado."
    ],
    commonErrors: [
      "❌ Tentar bordar sem estabilizador/entretela, fazendo o tecido embolar dentro da chapa de agulha e rasgar.",
      "❌ Usar entretela de colarinho de camisa dura e colante com ferro no lugar da entretela correta de bordado.",
      "❌ Usar estabilizador de rasgo fraco em malha elástica de camiseta, fazendo o bordado repuxar tudo na lavagem."
    ],
    troubleshootingTips: [
      "Bordado enrugando e formando ondas ao redor: troque o estabilizador por uma entretela de corte (Cut-Away) mais firme ou use duas camadas cruzadas.",
      "Tecido afundando na felpa da toalha: use um estabilizador plástico hidrossolúvel (Solufix/Soluwater) por cima do bordado.",
      "Contornos não encaixando no final: certifique-se de que o estabilizador foi preso no bastidor junto com o tecido sem folgas."
    ],
    dicaArtrelados: "A regra de ouro que nunca falha no ateliê: 'Se o tecido estica (como malha ou lycra), use entretela de CORTE (Cut-Away); se o tecido não estica (como jeans, sarja ou tricoline), use entretela de RASGO (Tear-Away)!'.",
    voceSabia: "Mais de 70% de todas as falhas de bordado atribuídas erroneamente a problemas da máquina são, na verdade, causadas pelo uso do estabilizador incorreto ou bastidoramento frouxo.",
    practicalExercise: "Borde o mesmo logotipo em dois retalhos de malha de camiseta: um usando entretela de rasgo simples e outro usando entretela de corte de boa gramatura. Lave os dois e veja como o bordado com entretela de corte permanece perfeito para sempre.",
    quickSummary: "Stabilizer (Estabilizador ou Entretela) é a base de sustentação têxtil colocada no bastidor para absorver a tensão da linha e manter o tecido liso e perfeito.",
    relatedTerms: ["Stabilizer de Corte", "Stabilizer de Rasgo", "Entretela Hidrossolúvel", "Gramatura de Entretela", "Bastidoramento"],
    tags: ["estabilizador", "entretela", "stabilizer", "suporte", "fundação têxtil"]
  },
  {
    id: "stabilizer-de-corte",
    code: "S-057",
    letter: "S",
    term: "Stabilizer de Corte",
    pronunciation: "is-tei-bi-lai-zer de cor-te",
    level: "Iniciante 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo masculino composto (do inglês cut-away stabilizer).",
    origin: "Da tecnologia de não-tecidos sintéticos multidirecionais de alta tenacidade indeformáveis.",
    summary: "Entretela permanente de alta resistência que não rasga, devendo ser recortada com tesoura no avesso ao final do bordado.",
    definition: "O Stabilizer de Corte (ou Entretela de Corte / Cut-Away Stabilizer) é o estabilizador permanente mais resistente e seguro do bordado computadorizado. Fabricado com fibras sintéticas entrelaçadas multidirecionais não tecidas, ele não cede, não deforma e não rasga sob tensão mecânica. Permanece permanentemente sob o bordado durante toda a vida útil da peça, sendo o excesso recortado manualmente com tesoura ao término da costura.",
    technicalDetails: "É o único estabilizador tecnicamente aprovado para tecidos com elasticidade mecânica (malha de algodão, piquet de camisa polo, moletom, suéteres de tricô, lycra e elastano), pois impede que o bordado enrugue ou distorça após sucessivas lavagens na máquina doméstica.",
    beginnerExplanation: "É aquela entretela forte e macia que não rasga com a mão. Você borda com ela e depois corta a sobra com uma tesourinha redonda pelo avesso, deixando um pedacinho embaixo do bordado para segurar tudo firme para sempre.",
    howItWorks: [
      "1. A bordadeira coloca a entretela de corte sob a malha ou tecido elástico.",
      "2. Prende o conjunto no bastidor de forma firme e uniforme.",
      "3. A máquina borda milhares de pontos densos sem deformar a peça.",
      "4. Ao terminar, a peça é retiradada do bastidor e virada pelo avesso.",
      "5. Com uma tesoura de ponta arredondada, a bordadeira recorta o excesso a 5 mm do bordado.",
      "6. A entretela restante fica oculta no avesso garantindo estabilidade eterna à peça."
    ],
    applications: [
      "Camisas polo de piquet corporativas e uniformes executivos.",
      "Camisetas de malha 100% algodão e blusas femininas delicadas.",
      "Agasalhos de moletom, suéteres e jaquetas esportivas.",
      "Bordados com altíssima contagem de pontos e brasões pesados."
    ],
    characteristics: [
      "Máxima estabilidade dimensional do mercado têxtil.",
      "Evita que o bordado enrugue após dezenas de lavagens na máquina.",
      "Toque suave e macio que não pinica a pele (versões Soft/Mesh)."
    ],
    commonErrors: [
      "❌ Tentar rasgar a entretela de corte com as mãos, repuxando e rasgando o tecido da camiseta.",
      "❌ Cortar a entretela rente demais aos pontos de arremate, correndo o risco de cortar o próprio tecido com a tesoura.",
      "❌ Substituir por entretela de rasgo em camisetas de algodão para economizar trabalho de tesoura."
    ],
    troubleshootingTips: [
      "Bordado de camisa polo ficando enrugado após lavar: substitua a entretela de rasgo por uma camada de entretela de corte (Cut-Away) de 60 a 80 g/m².",
      "Medo de cortar a camiseta com a tesoura ao recortar o avesso: utilize uma tesoura especial 'Bico de Pato / Pelicano' (Duckbill Scissors) que protege o tecido.",
      "Avesso pinicando a pele: aplique um filme termocolante protetor de avesso (Comfort Wear / Interlining Protector) com o ferro de passar."
    ],
    dicaArtrelados: "Para camisas polo e camisetas de malha: NUNCA use entretela de rasgo! Use sempre a entretela de corte (Cut-Away) com toque de algodão ou 'No-Show Mesh'. A peça pode ser lavada cem vezes na máquina de lavar e o bordado continua lisinho como novo!",
    voceSabia: "Grandes confecções esportivas internacionais (como Nike, Adidas e Lacoste) exigem contratualmente em seus manuais de fábrica o uso exclusivo de Cut-Away em 100% das peças bordadas de malha.",
    practicalExercise: "Borde um brasão em uma camiseta polo usando entretela de corte. Ao terminar, use uma tesourinha curva para recortar a sobra no avesso deixando uma bordinha de 5 mm. Vista a peça e sinta a firmeza e estabilidade.",
    quickSummary: "Stabilizer de Corte (Cut-Away) é a entretela permanente indeformável que é recortada com tesoura, indispensável para malhas e tecidos elásticos.",
    relatedTerms: ["Stabilizer (Estabilizador)", "Stabilizer de Rasgo", "Tesoura Bico de Pato (Pelicano)", "Malha Piquet", "No-Show Mesh"],
    tags: ["cut-away", "entretela de corte", "malha", "polo", "durabilidade"]
  },
  {
    id: "stabilizer-de-rasgo",
    code: "S-058",
    letter: "S",
    term: "Stabilizer de Rasgo",
    pronunciation: "is-tei-bi-lai-zer de ras-go",
    level: "Iniciante 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Substantivo masculino composto (do inglês tear-away stabilizer).",
    origin: "Da tecnologia de não-tecidos microfibrilados com fibras curtas de celulose projetadas para rompimento linear limpo.",
    summary: "Entretela temporária que se rompe e se destaca facilmente com as mãos ao redor do bordado após a costura.",
    definition: "O Stabilizer de Rasgo (ou Entretela de Rasgar / Tear-Away Stabilizer) é o estabilizador temporário formulado com celulose e fibras curtas sintéticas tratadas para rasgar de forma fácil, limpa e uniforme em todas as direções (rasgo multidirecional ou bidirecional) quando puxado manualmente, sem exigir o uso de tesouras.",
    technicalDetails: "É ideal para tecidos estáveis e sem elasticidade (como jeans, sarja, tricoline de algodão, lona, toalhas de linho e couro), onde o próprio tecido já oferece sustentação estrutural própria. Ao ser rasgado rente às bordas externas, deixa o avesso limpo e sem resíduos visíveis fora da área do bordado.",
    beginnerExplanation: "É a entretela mais prática e famosa: depois que a máquina termina de bordar, você simplesmente puxa com as mãos e ela se rasga facilmente em volta do desenho como um papel picotado, deixando o avesso limpinho.",
    howItWorks: [
      "1. A bordadeira coloca a entretela de rasgo sob o tecido firme (ex: jeans ou tricoline).",
      "2. Encaixa e aperta o bastidor normalmente.",
      "3. A máquina borda o desenho do início ao fim.",
      "4. A peça é retirada do bastidor.",
      "5. A bordadeira segura o bordado com uma mão e puxa a entretela rente aos pontos com a outra.",
      "6. A entretela rasga suavemente sem deformar a peça, deixando o avesso limpo."
    ],
    applications: [
      "Toalhas de mesa, panos de prato e jogos americanos de algodão.",
      "Jeans, jaquetas de sarja, bonés estruturados e mochilas.",
      "Enxovais em tricoline 100% algodão e percal de lençóis.",
      "Bordados em couro legítimo e materiais sintéticos pesados."
    ],
    characteristics: [
      "Extrema rapidez e praticidade de acabamento no chão de fábrica.",
      "Deixa o avesso da peça limpo, sem marcas ou sobras aparentes de entretela.",
      "Disponível em versões com rasgo fácil (Easy-Tear) e rasgo firme (Crisp-Tear)."
    ],
    commonErrors: [
      "❌ Puxar a entretela de rasgo com força bruta para longe dos pontos, esgarçando e repuxando o tecido fino.",
      "❌ Usar entretela de rasgo em malhas elásticas ou camisetas de bebê (que precisam de Cut-Away).",
      "❌ Usar entretela de rasgo de má qualidade que solta fiapos ou não rasga rente aos cantos pequenos."
    ],
    troubleshootingTips: [
      "Pontos repuxando ao rasgar a entretela: apoie o polegar firmemente sobre a costura e rasgue a entretela paralelamente ao tecido, nunca puxando para cima.",
      "Restos de entretela presos dentro de letras pequenas (como no meio do 'O' e 'e'): use uma pinça de ponta fina para puxar os pedacinhos com facilidade.",
      "Bordado ficando franzido em sarja: use duas camadas de entretela de rasgo posicionadas em sentidos opostos (uma na horizontal e outra na vertical)."
    ],
    dicaArtrelados: "Para tirar a entretela de rasgo perfeitamente e sem repuxar nenhum ponto: apoie a mão espalmada sobre o bordado na mesa e rasgue a entretela puxando deitadinha de lado, como se estivesse descascando um adesivo. O acabamento fica impecável!",
    voceSabia: "As entretelas de rasgo de alta qualidade utilizam fibras de celulose pura de eucalipto que se dissolvem e amaciam naturalmente logo nas primeiras lavagens domésticas.",
    practicalExercise: "Borde um nome simples em um pedaço de tecido jeans com entretela de rasgo. Retire do bastidor e pratique rasgar a entretela apoiando os dedos na costura. Limpe os miolos das letras com uma pinça e veja a limpeza do verso.",
    quickSummary: "Stabilizer de Rasgo (Tear-Away) é a entretela temporária que se destaca facilmente com as mãos, ideal para tecidos firmes e sem elasticidade como jeans, sarja e tricoline.",
    relatedTerms: ["Stabilizer (Estabilizador)", "Stabilizer de Corte", "Pinça de Acabamento", "Tricoline e Sarja", "Bastidoramento"],
    tags: ["tear-away", "entretela de rasgo", "praticidade", "jeans", "tricoline"]
  },
  {
    id: "seguranca-de-ponto",
    code: "S-059",
    letter: "S",
    term: "Segurança de Ponto",
    pronunciation: "se-gu-ran-ça de pon-to",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Dos protocolos de confiabilidade e prevenção de desfiamento em engenharia de costura.",
    summary: "Conjunto de parâmetros e nós de travamento que garantem que o bordado não se desmanche ou desfie durante o uso e a lavagem.",
    definition: "A Segurança de Ponto (ou Stitch Integrity & Fastening Protocol) é o conjunto de regras técnicas de programação que assegura a durabilidade física e mecânica do bordado. Compreende a aplicação obrigatória de pontos de amarração inicial (Tie-In), pontos de arremate final (Tie-Off), limites mínimos de comprimento (Short Stitch Filtering acima de 0,8 mm) e limites máximos de vão livre (Auto-Split abaixo de 8,0 mm).",
    technicalDetails: "A física têxtil exige que todo segmento que sofrerá corte mecânico por lâmina termine com no mínimo 3 a 5 micro-pontos de travamento cruzados em estrela ou zigue-zague compacto sob a coluna de costura, evitando que a tração da linha da bobina puxe o fio superior para fora após o corte.",
    beginnerExplanation: "É o sistema de 'nós e travas' do bordado: garante que cada pedacinho do desenho comece e termine bem amarradinho por baixo, para que o bordado possa ir para a máquina de lavar roupas centenas de vezes sem nunca soltar um único fio.",
    howItWorks: [
      "1. Antes de iniciar a coluna visível, a agulha dá 3 pequenos pontos de trava no mesmo local (Tie-In).",
      "2. Executa a costura principal com densidade e suporte adequados.",
      "3. Ao chegar ao final do objeto, a agulha dá 4 micro-pontos de travamento em cruz sob a linha (Tie-Off).",
      "4. A lâmina inferior da máquina corta a linha com folga segura.",
      "5. A amarração fica escondida e travada por baixo dos pontos.",
      "6. A peça pode ser usada, lavada e esticada com total durabilidade."
    ],
    applications: [
      "Uniformes profissionais, industriais e hospitalares submetidos a lavagens pesadas.",
      "Roupas esportivas, calçados e mochilas com alto atrito mecânico.",
      "Bordados em toalhas de hotel e enxovais de uso diário intenso.",
      "Vestuário infantil com normas rigorosas de segurança contra fios soltos."
    ],
    characteristics: [
      "Invisível na superfície da peça pronta.",
      "Garante a reputação de qualidade e durabilidade do ateliê.",
      "Evita retrabalho e devolução de peças por clientes insatisfeitos."
    ],
    commonErrors: [
      "❌ Desativar as amarrações automáticas no software para 'economizar 10 pontos', fazendo o bordado desmanchar na primeira lavagem.",
      "❌ Fazer amarrações na margem externa visível da letra em vez de escondê-las por baixo da coluna.",
      "❌ Cortar a linha com a tesoura colada no nó da máquina sem deixar a ponta de segurança."
    ],
    troubleshootingTips: [
      "Bordado desmanchando depois que a cliente lavou: ative a opção 'Sempre Inserir Amarrações de Término' (Always Apply Tie-Off) no menu de exportação do software.",
      "Linha escapando da agulha no início de cada cor: certifique-se de que a amarração inicial (Tie-In) execute pelo menos 3 pontos curtos antes de acelerar.",
      "Nós feios aparecendo na frente da letra: mude o tipo de amarração para 'Amarração Linear sob a Coluna' (Underlay Line Tie-Off)."
    ],
    dicaArtrelados: "Para ter certeza de que seus bordados nunca vão desmanchar: configure seu programa para usar a amarração de término em formato de 'Micro-Zigue-Zague sob a Coluna'. Fica 100% invisível por cima e aguenta até máquina de lavar industrial sem soltar nada!",
    voceSabia: "Em normas técnicas da ABNT e ISO para vestuário profissional, os bordados de identificação devem suportar no mínimo 50 ciclos de lavagem industrial a 60°C sem desfiamento.",
    practicalExercise: "Digitalize uma letra com amarração ativada e outra igual sem amarração. Borde em um retalho, corte a linha rente e puxe a pontinha com uma pinça. Veja como a primeira não se mexe e a segunda se desmancha inteira.",
    quickSummary: "Segurança de Ponto é o conjunto de amarrações e travas invisíveis que garantem que o bordado nunca se desmanche após lavagens e uso contínuo.",
    relatedTerms: ["Tie-In (Amarração Inicial)", "Tie-Off (Amarração Final)", "Short Stitch Filter", "Auto-Split", "Durabilidade do Bordado"],
    tags: ["segurança de ponto", "amarração", "travamento", "durabilidade", "qualidade"]
  },
  {
    id: "seguranca-de-sequencia",
    code: "S-060",
    letter: "S",
    term: "Segurança de Sequência",
    pronunciation: "se-gu-ran-ça de se-quên-ci-a",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do gerenciamento preventivo de riscos operacionais e integridade cinemática do pantógrafo.",
    summary: "Planejamento que impede colisões de agulha com áreas rígidas, pregas de tecido e movimentos perigosos do bastidor.",
    definition: "A Segurança de Sequência (ou Sequence Risk Prevention / Collision Avoidance) é a metodologia avançada de programação e checagem de trajeto que previne acidentes operacionais durante a execução da matriz. Ela elimina cruzamentos de agulha sobre áreas previamente endurecidas por camadas densas, impede trajetos que possam prender o calcador em tecidos soltos e garante que o pantógrafo não realize acelerações bruscas próximas às bordas físicas do bastidor.",
    technicalDetails: "Inclui a verificação de pontos de descanso (Park Points), rotas seguras para comandos de corte de aplique (onde o bastidor avança para a frente facilitando o recorte sem colidir com o cabeçote) e a regra de nunca perfurar sobre armações metálicas ou zíperes embutidos.",
    beginnerExplanation: "É planejar o caminho do bordado pensando na segurança total da máquina e da peça: garantir que a agulha nunca bata onde tem ferro, que o bastidor não bata nas laterais e que o tecido não fique preso no meio do caminho.",
    howItWorks: [
      "1. O programador mapeia os limites seguros da peça e do bastidor.",
      "2. Insere paradas de segurança programadas para recorte de apliques com avanço de bastidor (Frame Out).",
      "3. Evita que a agulha passe costurando por cima de áreas de satim pesado com mais de 3 camadas.",
      "4. Planeja os saltos em rotas limpas que não enrosquem na sapatilha do calcador.",
      "5. A máquina opera de forma suave, sem riscos de bater a barra de agulha.",
      "6. A integridade física do equipamento e da peça é 100% preservada."
    ],
    applications: [
      "Bordados em peças montadas com botões, zíperes e rebites metálicos (bolsas, mochilas, jaquetas).",
      "Matrizes de chaveiros e peças 'In-The-Hoop' (ITH) com etapas de corte e colocação de zíper no bastidor.",
      "Bordados em bonés estruturados com costura frontal pesada.",
      "Automação industrial em fábricas com operação contínua 24 horas."
    ],
    characteristics: [
      "Protege o equipamento contra desregulagens e danos caros de cabeçote.",
      "Facilita a vida da operadora com movimentos ergonômicos do bastidor.",
      "Indispensável para matrizes de aplique e técnicas ITH."
    ],
    commonErrors: [
      "❌ Programar um comando de corte de aplique sem recuo do bastidor, obrigando a bordadeira a colocar as mãos com a tesoura perigosamente embaixo da agulha.",
      "❌ Fazer a agulha costurar em alta velocidade em cima de uma área que já tinha 4 camadas de tatami endurecido.",
      "❌ Não conferir se o salto passa por cima de grampos de bastidores magnéticos."
    ],
    troubleshootingTips: [
      "Dificuldade de recortar o aplique dentro do bastidor: insira uma função 'Avançar Bastidor / Frame Out' imediatamente após a linha de marcação do aplique.",
      "Agulha quebrando com barulho de tiro ao passar sobre detalhe anterior: mude a sequência para que a agulha contorne a área densa em vez de perfurar sobre ela.",
      "Bastidor batendo no braço da máquina ao finalizar: configure o ponto de parada final (End Point) no centro superior do bastidor."
    ],
    dicaArtrelados: "Ao criar matrizes de aplique ou chaveirinho ITH: sempre coloque um comando de 'Avanço de Bastidor' (Frame Out) na hora de cortar o tecido! O bastidor vem para a frente sozinho, você corta o aplique com todo o conforto e suas mãos ficam 100% seguras longe da agulha!",
    voceSabia: "Nas máquinas industriais modernas de 15 agulhas, os sistemas de visão computacional com câmeras verificam a segurança de sequência em tempo real para pausar a máquina se uma mão humana se aproximar da área de costura.",
    practicalExercise: "Abra uma matriz de aplique. Insira o comando de 'Parada com Deslocamento de Bastidor' (Stop + Frame Out) após a linha de marcação do tecido. Simule e veja o bastidor avançar para a frente da máquina na hora do corte.",
    quickSummary: "Segurança de Sequência é o planejamento inteligente das rotas de costura que evita colisões mecânicas, protege a agulha e garante conforto no recorte de apliques.",
    relatedTerms: ["Simulação de Execução", "Frame Out (Avanço de Bastidor)", "In-The-Hoop (ITH)", "Matriz de Aplique", "Sincronismo de Lançadeira"],
    tags: ["segurança de sequência", "frame out", "prevenção", "ith", "mecânica"]
  },
  {
    id: "sistema-de-tensao-da-linha",
    code: "S-061",
    letter: "S",
    term: "Sistema de Tensão da Linha",
    pronunciation: "sis-te-ma de ten-são da li-nha",
    level: "Iniciante 🟢",
    category: "Mecânica & Operação",
    grammarClass: "Substantivo masculino composto.",
    origin: "Dos mecanismos de frenagem por fricção mecânica e controle dinâmico de tração de fios em máquinas de costura.",
    summary: "Conjunto mecânico de pratos tensores, molas e caixas de bobina que equilibra a tração entre o fio superior e a linha de baixo.",
    definition: "O Sistema de Tensão da Linha (ou Thread Tensioning Assembly) é o complexo eletromecânico responsável por regular com precisão a resistência e o atrito aplicados aos fios durante a costura. Ele é composto pelos discos de tensão superior (Tension Discs), mola de compensação do estica-fio (Check Spring), guias de passagem e mola de lâmina da caixa de bobina inferior.",
    technicalDetails: "O equilíbrio padrão ideal do ponto de bordado (a famosa 'Regra do Um Terço / 1/3 Rule') estabelece que, ao olhar o verso de uma coluna de satim perfeita, deve-se visualizar exatamente 1/3 de linha superior na esquerda, 1/3 de linha branca da bobina no centro e 1/3 de linha superior na direita, sem fios da bobina aparecendo na frente da peça.",
    beginnerExplanation: "É o sistema de freios da linha na máquina: ele equilibra a força da linha colorida de cima com a força da linha branca da bobina de baixo. Quando a tensão está perfeita, o bordado fica lisinho na frente e com uma coluna branca de 1/3 certinha no verso.",
    howItWorks: [
      "1. A linha passa entre os discos metálicos de tensão superior regulados pela mola.",
      "2. Passa pela mola oscilante do estica-fio que absorve as folgas.",
      "3. A agulha desce e leva a linha superior até a lançadeira.",
      "4. O fio da bobina inferior passa sob a mola de pressão da caixa de bobina (tensão inferior).",
      "5. O estica-fio sobe puxando o entrelaçamento dos dois fios exatamente para o centro do tecido.",
      "6. A coluna fica com brilho limpo na frente e o nó de 1/3 equilibrado no verso."
    ],
    applications: [
      "Calibração diária e obrigatória antes de iniciar a produção do ateliê.",
      "Ajuste fino para diferentes tipos de linha (poliéster, algodão, metálica, lurex, raiom).",
      "Eliminação de laçadas frouxas, nós embolados e quebras de linha constantes.",
      "Bordados de alta definição em monogramas, microletras e brasões nobres."
    ],
    characteristics: [
      "Governa diretamente o aspecto visual e o toque de qualquer bordado.",
      "Deve ser ajustado sempre que houver troca de espessura de linha ou tipo de tecido.",
      "Permite diagnóstico visual imediato da saúde mecânica da máquina."
    ],
    commonErrors: [
      "❌ Mexer no parafuso da caixa de bobina sem testar a tensão superior antes, desregulando a máquina inteira.",
      "❌ Deixar a tensão superior apertada demais, fazendo a linha branca da bobina subir e aparecer na frente do bordado colorido.",
      "❌ Passar a linha fora dos discos de tensão (com o calcador abaixado na hora de passar o fio), deixando a linha solta e embolando um ninho de pássaro por baixo."
    ],
    troubleshootingTips: [
      "Linha branca da bobina aparecendo na frente do bordado: a tensão superior está muito apertada (afrouxe o botão superior) ou a tensão da bobina está muito frouxa (aperte o parafuso da bobina levemente).",
      "Linha colorida de cima embolando um ninho de fios embaixo da chapa: a linha superior escapou dos discos tensores; levante o calcador e passe a linha de cima novamente com atenção.",
      "Linha quebrando a cada 20 pontos: limpe restos de fiapos e fiapos de linha acumulados entre os discos de tensão com um pedaço de linha encerada ou fio dental."
    ],
    dicaArtrelados: "Para saber se a tensão da sua máquina está perfeita: borde um teste com a letra 'I' maiúscula em ponto cheio (satim). Vire o tecido pelo avesso: se você enxergar uma faixa branca de linha da bobina ocupando exatamente um terço do meio da letra, sua máquina está 100% regulada e pronta para arrasar!",
    voceSabia: "As máquinas de bordar industriais utilizam um pequeno instrumento de precisão chamado 'Tensiómetro' (Towa Tension Gauge) com mostrador analógico para calibrar a tensão da caixa de bobina exatamente em 20 a 25 gramas-força (gf).",
    practicalExercise: "Borde uma coluna de satim de 5 mm de largura. Olhe o avesso: meça visualmente se a linha branca da bobina ocupa o terço central (1/3). Se a linha branca estiver muito fina ou muito grossa, ajuste o tensor superior em meio ponto e teste novamente.",
    quickSummary: "Sistema de Tensão da Linha é o conjunto de freios e molas que equilibra a tração da linha de cima com a da bobina, garantindo pontos limpos na frente e a regra do 1/3 no verso.",
    relatedTerms: ["Regra do Um Terço (1/3 Rule)", "Caixa de Bobina", "Discos de Tensão", "Tensiómetro Towa", "Estica-Fio"],
    tags: ["tensão", "regulagem", "bobina", "fios", "calibração mecânica"]
  }
];

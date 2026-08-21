import { Verbete } from "../types";

export const VERBETES_LETTER_E_PART4: Verbete[] = [
  {
    id: "e-021-esticador-de-tecido-clips-de-bastidor",
    code: "E-021",
    term: "Esticador de Tecido e Clips de Tensão Lateral de Bastidor (Hoop Tension Clips & Fabric Stretchers)",
    letter: "E",
    level: "Fundamental 🟢",
    category: "Acessórios & Suportes",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do verbo esticar (tornar tenso, nivelar sem rugas) e do inglês clips (grampos de fixação elástica por mola). Acessório de fixação ergonômica derivado de teares e bastidores profissionais.",
    summary: "Grampos plásticos ou magnéticos laterais que mantêm tecidos longos esticados nas bordas do bastidor, evitando que o excesso caia ou enrugue.",
    definition: "Os esticadores de tecido e clips laterais de bastidor (Hoop Tension Clips / Side Clamps / Grampos de Tensão Lateral) são acessórios ergonômicos e mecânicos projetados para prender e esticar as sobras laterais de tecidos compridos (como toalhas de banho pesadas, panos de prato longos, lençóis e mantas) nas bordas plásticas externas do bastidor de bordar. Impedem que o peso do tecido solto caia para fora da mesa de bordado, puxando o bastidor para baixo e gerando resistência ao movimento do pantógrafo dos eixos X e Y, além de eliminar dobras acidentais que poderiam entrar debaixo da agulha durante o bordado.",
    technicalDetails: "Fabricados em polímero flexível com perfil em 'U' ou com garras de mola e almofadas de silicone emborrachadas que não marcam e não cortam as fibras de toalhas felpudas e tecidos finos.",
    howItWorks: [
      "1. A bordadeira monta a toalha de banho ou lençol no bastidor da máquina (Brother, Janome ou Bernina).",
      "2. O excesso de tecido comprido fica solto nas laterais, correndo o risco de pesar e arrastar na mesa.",
      "3. A bordadeira dobra suavemente a sobra de tecido para cima e encaixa os clips plásticos de pressão nas laterais do aro externo do bastidor.",
      "4. O tecido fica perfeitamente recolhido, esticado e suspenso no ar junto com a estrutura do bastidor.",
      "5. A máquina borda com liberdade total de movimento, sem peso e sem atrito contra o tampo da mesa.",
      "6. Ao terminar, a bordadeira remove os clips em 2 segundos pressionando as abas laterais."
    ],
    beginnerExplanation: "São grampinhos plásticos especiais que você prende dos lados do bastidor para segurar aquele monte de pano sobrando da toalha de banho ou do lençol. Eles deixam tudo arrumadinho e preso para o pano não ficar pesado arrastando na mesa da máquina e não entrar debaixo da agulha por acidente!",
    applications: [
      "Bordados em toalhas de banho grandes, roupões pesados e toalhas de praia",
      "Bordados em lençóis de casal, colchas de cama e caminhos de mesa compridos",
      "Sustentação de tecidos finos e escorregadios em bastidores magnéticos ou padrão",
      "Prevenção de sobrecarga nos motores dos eixos X e Y da máquina"
    ],
    commonErrors: [
      "Deixar a toalha de banho pesada pendurada caindo no chão da mesa, forçando e travando o motor do pantógrafo da máquina",
      "Usar prendedores de roupa de madeira ou clipes de metal de papelaria que quebram, soltam farpas e rasgam tecidos finos",
      "Prender o tecido excessivamente esticado no clip, entortando a moldura de plástico do bastidor"
    ],
    troubleshootingTips: [
      "Coloque uma mesa extensora de apoio ao lado da sua máquina para apoiar o peso de toalhas de banho e mantas grandes",
      "Use clips laterais específicos com borracha interna para nunca deixar marcas nas felpas de toalhas escuras",
      "Sempre verifique se a sobra de tecido recolhida no clip não está bloqueando o sensor de área ou batendo no cabeçote da agulha"
    ],
    dicaArtrelados: "Vai bordar toalha de banho pesada ou lençol de casal? NUNCA deixe o pano sobrando cair para fora da máquina como se fosse uma âncora! Prenda as sobras com clips de bastidor e apoie o tecido na mesa: a sua máquina vai bordar levinha, silenciosa e sem forçar o motor!",
    voceSabia: "Uma toalha de banho pesada pendurada para fora da mesa de bordar pode exercer um peso de arrasto de até 1.5 kg sobre o braço mecânico da máquina, o suficiente para fazer a correia do pantógrafo pular dentes!",
    practicalExercise: "Prenda uma toalha de banho no bastidor e sinta com a mão a força que ela faz para baixo; agora prenda as sobras com dois clips laterais no aro e veja como o bastidor fica leve, compacto e equilibrado no ar!",
    quickSummary: "Grampos laterais de pressão que sustentam sobras de tecidos compridos, aliviando o peso nos motores da máquina.",
    relatedTerms: ["Bastidor de Bordado", "Mesa Extensora de Apoio", "Pantógrafo e Eixo X/Y", "Acessórios & Suportes"],
    tags: ["e-021", "esticador de tecido", "clips de bastidor", "toalhas de banho", "apoio", "acessorios", "artrelados"],
    bibliographicReferences: [
      "BROTHER. Embroidery Hooping Accessories & Fabric Support Guidelines. Nagoya, 2022.",
      "JANOME. Memory Craft Large Project Clamping Systems Manual. Tokyo, 2023.",
      "ARTRELADOS. Aliviando o Peso do Bastidor: Como Bordar Peças Grandes Sem Forçar os Motores da Máquina. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-022-escala-e-redimensionamento-de-matriz",
    code: "E-022",
    term: "Escala e Redimensionamento com Recálculo de Pontos (Design Scaling & Stitch Density Regeneration)",
    letter: "E",
    level: "Fundamental 🟢",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim scala (escada, proporção métrica graduada) e re-dimensionare (alterar as medidas físicas espaciais). Função de processamento vetorial de bordado.",
    summary: "Alteração do tamanho de um desenho garantindo que o programa recalcule a quantidade de pontos para não empelotar nem abrir falhas.",
    definition: "A escala e redimensionamento de matriz (Design Resizing / Scaling with Stitch Density Recalculation) é a operação digital que altera as dimensões físicas de altura e largura de um arquivo de bordado para adaptá-lo a um novo bastidor ou tamanho de peça. Quando realizada em software vetorial nativo (arquivos .EMB, .PES original), o programa RECALCULA a quantidade total de pontos mantendo o espaçamento e a densidade constantes (ex: se aumentar o tamanho em 50%, o programa adiciona 50% a mais de pontos). Se realizada de forma inadequada em arquivos de pontos compilados (.DST), apenas afasta ou esmaga os pontos existentes, resultando em bordados ralos ou placas rígidas.",
    technicalDetails: "Limites de segurança: Em arquivos de pontos puros (.DST, .PES compilado), o redimensionamento seguro sem distorção é de no máximo ±10% a ±15%. Em formatos de objetos/vetores (.EMB, .JAN), a escala pode variar de 50% a 200% com regeneração matemática integral de densidade e underlay.",
    howItWorks: [
      "1. A bordadeira abre a matriz no software de bordado no computador.",
      "2. Ativa a ferramenta de 'Redimensionar / Escala' com a opção 'Recalcular Pontos / Keep Density' marcada.",
      "3. Digita a nova medida desejada (ex: altera a largura de 10cm para 16cm para caber no bastidor 13x18cm).",
      "4. O software analisa as curvas, aumenta os formatos e gera milhares de novos pontos automaticamente, mantendo a densidade de 0.40mm intacta.",
      "5. Salva o arquivo atualizado no pendrive e transfere para a máquina.",
      "6. A máquina de bordar costura a matriz com a mesma cobertura, maciez e perfeição do tamanho original."
    ],
    beginnerExplanation: "É aumentar ou diminuir o tamanho de um desenho no computador. O grande segredo é que o programa precisa colocar mais pontinhos quando você aumenta o desenho (para não ficar transparente e ralo) e tirar pontinhos quando você diminui (para não virar um bolo duro de linha que quebra a agulha). Nunca diminua muito um desenho direto na tela simples da máquina sem recalcular os pontos!",
    applications: [
      "Adaptação de matrizes de bastidor 10x10cm para bastidores maiores de 13x18cm, 16x26cm ou 20x30cm",
      "Redução proporcional de desenhos para bordar em bolsos pequenos, golas e sapatinhos de bebê",
      "Ajuste exato de largura para caber dentro da faixa de etamine de toalhas de lavabo",
      "Padronização de logotipos corporativos em múltiplos tamanhos de uniforme"
    ],
    commonErrors: [
      "Diminuir uma matriz pela metade (50%) direto na tela simples da máquina sem recalcular pontos, concentrando 20.000 pontos em 5cm e quebrando a agulha na hora",
      "Aumentar uma matriz para o dobro do tamanho em arquivo de ponto compilado, deixando os pontos de tatami cheios de buracos e falhas",
      "Desmarcar a trava de proporção, esticando o desenho de forma achatada e deformada"
    ],
    troubleshootingTips: [
      "Para aumentar ou diminuir mais de 20%, faça sempre a alteração no software no computador (Wilcom, PE-Design ou Bird) ativando a opção 'Recalcular Densidade'",
      "Na tela da máquina de bordar simples, restrinja as alterações de tamanho ao limite seguro de no máximo 10% para mais ou para menos",
      "Sempre confira o número total de pontos antes e depois da escala: se você aumentou o tamanho e o número de pontos continuou exatamente o mesmo, o recálculo falhou!"
    ],
    dicaArtrelados: "Pegou uma matriz linda de 10x10cm e quer bordar no bastidor 13x18cm bem grandona? Abra no computador e use a função de recálculo de pontos! O desenho cresce com a mesma qualidade de um original e a sua peça fica com aquele acabamento de alta costura!",
    voceSabia: "Os algoritmos modernos de recálculo de matriz analisam a geometria dos nós vetoriais e refazem todas as amarrações de ponto em frações de segundo, algo que nos anos 1980 exigia horas de redigitalização manual!",
    practicalExercise: "Abra um coração de 5cm no seu software e aumente para 10cm com o recálculo de pontos ativado: veja a contagem de pontos subir de 3.000 para 8.500 pontos mantendo o mesmo espaçamento perfeito!",
    quickSummary: "Alteração do tamanho da matriz com regeneração automática de pontos para manter densidade e maciez perfeitas.",
    relatedTerms: ["Ajuste de Densidade", "Espaçamento de Ponto", "Densidade Excessiva", "Programação de Bordado"],
    tags: ["e-022", "escala", "redimensionar", "recalculo de pontos", "tamanho de matriz", "densidade", "software", "artrelados"],
    bibliographicReferences: [
      "WILCOM. Vector Scaling & Intelligent Stitch Generation Handbook. Sydney, 2022.",
      "BROTHER. PE-Design Scaling Algorithms & Stitch Recalculation Manual. Nagoya, 2023.",
      "ARTRELADOS. O Segredo do Redimensionamento: Como Mudar o Tamanho das Suas Matrizes Sem Perder a Qualidade. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-023-espelho-retrovisor-de-bordado-angulo-de-visao",
    code: "E-023",
    term: "Espelho de Inspeção de Lançadeira e Ângulo de Visão (Bobbin Inspection Mirror & Throat Plate Optics)",
    letter: "E",
    level: "Fundamental 🟢",
    category: "Ferramentas & Acessórios",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim speculum (espelho refletor) e inspectio (exame minucioso). Ferramenta óptica de inspeção ergonômica da engenharia mecânica de precisão adaptada para o ateliê.",
    summary: "Pequeno espelho articulado com haste telescópica que permite enxergar o interior da caixa de bobina e a ponta da lançadeira sem desmontar a máquina.",
    definition: "O espelho de inspeção de lançadeira e avesso (Inspection Mirror / Throat Plate Inspection Tool / Espelho Telescópico de Ateliê) é a ferramenta auxiliar de diagnóstico visual composta por um mini-espelho giratório de alta nitidez montado em uma haste metálica extensível (telescópica). Permite à bordadeira inspecionar instantaneamente áreas de acesso visual difícil ou impossível na máquina de bordar (como a ponta da lançadeira rotativa sob a chapa de agulha, a faca do cortador de linha automático, acúmulo de poeira têxtil no fundo da caixa de bobina e o avesso do bastidor sem retirá-lo da máquina).",
    technicalDetails: "Diâmetro típico de 25mm a 50mm com junta esférica de rotação 360° e haste telescópica de até 40cm. Versões modernas incluem mini LED embutido na borda do espelho para iluminar cavidades escuras.",
    howItWorks: [
      "1. A máquina emite um barulho incomum ou a linha inferior corta de forma estranha.",
      "2. Sem precisar desparafusar a chapa de agulha nem retirar o bastidor, a bordadeira estende a haste do espelho de inspeção.",
      "3. Posiciona o espelho sob o bastidor ou através da abertura da tampa transparente da bobina.",
      "4. Gira o espelho 360° e acende o micro LED.",
      "5. Enxerga com clareza total se há fios de linha presos na faca de corte, fiapos acumulados na lançadeira ou laçadas frouxas no avesso da peça.",
      "6. Realiza a limpeza ou ajuste com uma pinça em poucos segundos.",
      "7. Recolhe a haste telescópica e guarda a ferramenta no porta-acessórios."
    ],
    beginnerExplanation: "É um 'espelhinho de dentista' com cabo comprido que você usa para espiar por baixo do bastidor e dentro dos cantinhos escuros da máquina sem precisar desmontar nada. Ajuda você a ver na hora se tem fiapo ou linha presa na caixa da bobina em 5 segundos!",
    applications: [
      "Inspeção visual instantânea do avesso do bordado sem desencaixar o bastidor da máquina",
      "Verificação de fiapos e pedaços de linha travados na faca do cortador automático",
      "Checagem do alinhamento da ponta da lançadeira rotativa e da chapa de agulha",
      "Diagnóstico preventivo de manutenção sem desmontagem desnecessária da máquina"
    ],
    commonErrors: [
      "Deixar o espelho de metal encostar na barra da agulha em movimento com a máquina ligada",
      "Usar espelhos de vidro comuns sem proteção que podem quebrar e deixar cacos dentro da mecânica da máquina",
      "Desmontar toda a chapa de agulha sem antes fazer uma rápida inspeção visual com o espelho"
    ],
    troubleshootingTips: [
      "Tenha sempre um espelhinho de inspeção com haste articulada na caixinha de ferramentas do seu ateliê",
      "Use o espelho para olhar por baixo do bastidor no início do bordado e conferir se a linha de bobina formou o nó perfeitamente sem precisar tirar o bastidor da máquina",
      "Se o espelho tiver luz de LED integrada, desligue após o uso para economizar a bateria da ferramenta"
    ],
    dicaArtrelados: "Sabe aquele espelhinho articulado tipo de dentista? É um dos segredos mais inteligentes das bordadeiras profissionais! Com ele, você espia o fundo da caixa de bobina e o verso do bastidor em 3 segundos sem precisar desmontar parafuso nenhum!",
    voceSabia: "O espelho de inspeção telescópico foi originalmente desenvolvido para mecânicos de aeronaves inspecionarem turbinas de avião em locais inacessíveis e foi adotado pelos mestres mecânicos de máquinas de costura no Japão!",
    practicalExercise: "Pegue um espelho de inspeção e posicione perto da caixa de bobina da sua máquina: observe como você consegue enxergar a ponta da lançadeira girando e todos os cantinhos escondidos onde os fiapos de linha costumam se acumular!",
    quickSummary: "Mini espelho com haste telescópica para inspecionar o interior da lançadeira e o avesso do bordado com facilidade.",
    relatedTerms: ["Caixa da Bobina", "Lançadeira Rotativa", "Cortador de Linha Automático", "Ferramentas & Acessórios"],
    tags: ["e-023", "espelho de inspecao", "ferramentas", "manutencao", "lancadeira", "visao do avesso", "artrelados"],
    bibliographicReferences: [
      "BROTHER. Maintenance Tooling & Optical Inspection Equipment Guide. Nagoya, 2022.",
      "JANOME. Service Technician Inspection & Diagnostics Handbook. Tokyo, 2023.",
      "ARTRELADOS. As Ferramentas Secretas da Bordadeira: Como o Espelho de Inspeção Economiza Horas de Manutenção. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-024-esterilizacao-e-higienizacao-de-enxovais",
    code: "E-024",
    term: "Esterilização, Higienização e Cuidados Térmicos com Enxovais Bordados (Embroidery Sanitization, Ironing & Care)",
    letter: "E",
    level: "Fundamental 🟢",
    category: "Boas Práticas & Produtividade",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do latim sterilis (livre de impurezas) e higia (saúde, limpeza) + germânico wascan (lavar com cuidado). Conjunto de procedimentos térmicos e químicos de biossegurança têxtil para ateliês infantis.",
    summary: "Protocolo seguro de lavagem neutra, vaporização a distância e proteção com ferro morno pelo avesso para entregar enxovais de bebê 100% higienizados e impecáveis.",
    definition: "A esterilização, higienização e cuidados de acabamento (Embroidery Care, Sanitization & Ironing Protocols) é o protocolo profissional de boas práticas que abrange a limpeza pós-bordado, remoção de resíduos químicos de entretelas, vaporização térmica e higienização antibacteriana de enxovais infantis e peças hospitalares/corporativas. As linhas de bordar em poliéster 100% trilobal suportam calor moderado e lavagens frequentes, mas exigem regras estritas: passar a ferro SEMPRE pelo AVESSO com tecido de proteção (sapata de teflon ou pano de algodão), utilizar água destilada nos vapores para não manchar o tecido e embalar em sacos plásticos respiráveis com lacre de higiene para entrega à cliente final.",
    technicalDetails: "As linhas de poliéster de bordar suportam calor de até 150°C (posição seda/lã no ferro). O contato direto do ferro a 200°C na frente do bordado pode derreter as microfibras sintéticas, eliminando o brilho e fundindo os fios.",
    howItWorks: [
      "1. A bordadeira finaliza a peça no bastidor e retira todos os excessos de entretela e fios soltos no avesso.",
      "2. Se usou plástico hidrossolúvel, remove com borrifador leve de água e seca à sombra.",
      "3. Aplica o termoprotetor de avesso (Toque de Pluma) nas costas do bordado para proteger a pele do bebê.",
      "4. Vira a peça com o AVESSO para cima sobre uma toalha macia dobrada na tábua de passar.",
      "5. Passa o ferro morno a seco (ou com sapata protetora) pelo avesso: o acolchoado da toalha preserva o relevo 3D do bordado na frente.",
      "6. Aplica uma leve névoa de 'Água Perfumada para Tecidos' hipoalergênica própria para bebês.",
      "7. Dobra com papel de seda e sela na embalagem transparente lacrada com a etiqueta de cuidados de lavagem Artrelados."
    ],
    beginnerExplanation: "É o passo a passo de carinho e limpeza para deixar a toalha ou roupinha de bebê cheirosa, lisinha e livre de bactérias antes de entregar para a cliente. O segredo mais importante de todos é: NUNCA passe o ferro quente direto em cima do bordado pela frente! Passe sempre pelo avesso sobre uma toalha fofinha para o bordado continuar lindo e fofinho!",
    applications: [
      "Preparação e embalagem de enxovais de bebê de alta costura (fraldas, mantas, bodies e lençóis)",
      "Higienização de jalecos médicos, toalhas de consultório e uniformes de clínica",
      "Restauração do brilho e eliminação de rugas pós-bastidor em toalhas de banho",
      "Criação de etiquetas de instruções de lavagem personalizadas para fidelização de clientes"
    ],
    commonErrors: [
      "Passar o ferro fervente direto sobre a frente do bordado, 'fritando' e derretendo a linha de poliéster e deixando o bordado achatado e sem brilho",
      "Usar água sanitária ou cloro em toalhas brancas que tenham bordados com fios metálicos ou viscose",
      "Entregar a peça amassada ou com cheiro de cola de spray para uma cliente que acabou de ter bebê"
    ],
    troubleshootingTips: [
      "REGRA DE OURO: Para passar o bordado, coloque uma toalha felpuda dobrada sobre a tábua, deite o bordado de 'bruços' (frente para baixo) e passe o ferro pelo AVESSO: o bordado fica alto, fofo e em relevo perfeito!",
      "Use uma sapata de Teflon encaixada na base do seu ferro de passar para evitar queimar tecidos delicados e sintéticos",
      "Borrife água de passar com essência suave de bebê (como 'Mamãe & Bebê' ou 'Talco') na embalagem: a cliente abre o pacote e se apaixona no primeiro segundo!"
    ],
    dicaArtrelados: "O segredo para um bordado que parece saltar para fora do pano com efeito 3D: passe SEMPRE pelo avesso em cima de uma toalha bem fofa! O ferro não esmaga os pontos, as letrinhas continuam gordinhas e o brilho do poliéster fica radiante como joia!",
    voceSabia: "As linhas de bordado 100% poliéster de boa qualidade são resistentes ao alvejante sem cloro e podem ser lavadas a até 95°C sem desbotar a cor, sendo muito mais resistentes que linhas de costura comuns de algodão!",
    practicalExercise: "Pegue dois paninhos bordados iguais: passe o primeiro pelo lado da frente com o ferro direto; passe o segundo pelo avesso deitado sobre uma toalha macia. Coloque os dois lado a lado sob a luz e veja a diferença gritante de brilho e relevo!",
    quickSummary: "Protocolo de higienização, vaporização e passagem pelo avesso sobre toalha macia para preservar o relevo e brilho do bordado.",
    relatedTerms: ["Protetor de Bordado / Termoprotetor de Avesso (Toque de Pluma)", "Acabamento & Limpeza de Bordado", "Linha de Poliéster 100%", "Boas Práticas & Produtividade"],
    tags: ["e-024", "esterilizacao", "higienizacao", "passar a ferro", "enxoval de bebe", "cuidados", "embalagem", "artrelados"],
    bibliographicReferences: [
      "MADEIRA. Embroidery Care, Washing & Ironing Professional Standards. Freiburg, 2022.",
      "GUNOLD. After-Treatment, Finishing and Garment Care Guide. Kenzingen, 2023.",
      "ARTRELADOS. O Toque de Mestre: Como Passar, Higienizar e Embalar Seus Bordados Para Encantar Suas Clientes. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "e-025-encapsulamento-de-pontos-e-arremate",
    code: "E-025",
    term: "Encapsulamento de Pontos, Travamento e Amarração (Tie-In & Tie-Off Encapsulation)",
    letter: "E",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim capsula (caixa protetora fechada) e do inglês tie-in / tie-off (amarrar nós de início e fim). Técnica computacional de ancoragem mecânica de filamentos têxteis.",
    summary: "Micro-pontos automáticos colocados no início e no fim de cada objeto para prender a ponta da linha e impedir que o bordado desfie.",
    definition: "O encapsulamento de pontos e amarração (Tie-In & Tie-Off Stitches / Encapsulamento de Arremate / Lock Stitches) é a rotina digital de programação que insere uma sequência de 3 a 5 micro-pontos concentrados (comprimento de 0.8mm a 1.2mm) no início exato de um objeto antes do salto (Tie-In) e imediatamente antes do corte automático de linha no final do objeto (Tie-Off). Esses micro-pontos travam mecanicamente o filamento de poliéster sob as camadas do ponto cheio ou tatami, impedindo que as pontas de linha cortadas escapem, desfiem ou se soltem quando a peça for puxada, vestida ou lavada repetidamente na máquina de lavar roupas.",
    technicalDetails: "Modelos de amarração no software: 1) Ponto de Travamento em Linha Reta; 2) Travamento em Cruz (Cross Lock); 3) Travamento Estelar (Star Lock). A densidade dos micropontos é calibrada para ficar 100% oculta sob o ponto de cobertura.",
    howItWorks: [
      "1. No software de matrizes, a bordadeira ativa a propriedade 'Nó Inicial (Tie-In)' e 'Nó Final (Tie-Off)' em todos os objetos.",
      "2. Quando a máquina de bordar inicia a costura, ela executa 4 micropontos imperceptíveis no centro da coluna.",
      "3. A máquina borda todo o ponto cheio ou tatami por cima dos micropontos, encapsulando e escondendo a ponta inicial.",
      "4. Ao chegar na última letra, a máquina executa mais 4 micropontos de travamento em cruz.",
      "5. A faca automática corta a linha superior e inferior.",
      "6. A ponta cortada fica firmemente presa no tecido, com zero risco de desmanchar.",
      "7. O acabamento fica limpo, durável e com nós 100% invisíveis na frente da peça."
    ],
    beginnerExplanation: "São aqueles 3 ou 4 'micro-pontinhos' bem pequenininhos que a máquina dá no começo e no final de cada letra para dar o nó e amarrar a linha antes da tesourinha cortar. Sem eles, o bordado fica sem nó e desmancha na primeira lavagem como uma costura que escapou!",
    applications: [
      "Garantia de durabilidade infinita em peças lavadas frequentemente (uniformes e toalhas)",
      "Eliminação de nós grossos e feios no avesso de roupas de bebê",
      "Prevenção de desfiamento de letras pequenas e monogramas finos",
      "Cortes automáticos limpos e seguros sem pontas soltas na frente da peça"
    ],
    commonErrors: [
      "Desativar a amarração (Tie-Off) no software para economizar pontos, fazendo as letras desmancharem sozinhas ao puxar a linha solta",
      "Usar nós de travamento gigantes com mais de 2.5mm de comprimento, deixando bolinhas visíveis para fora das letras",
      "Cortar as pontas de linha no avesso com tesoura cortando o próprio nó de amarração"
    ],
    troubleshootingTips: [
      "Configure o software (Wilcom ou PE-Design) para utilizar sempre o estilo de amarração 'Sob a Coluna (Inside Stitch / Under Stitch)': os nós ficam totalmente invisíveis!",
      "Para letras pequenas e monogramas, utilize nós de travamento compactos de 3 pontos com 0.8mm de tamanho",
      "Ao limpar os fios do avesso com a tesourinha, deixe sempre uma sobrinha minúscula de 2mm após o nó de amarração"
    ],
    dicaArtrelados: "A cliente lavou o pano de prato e a pontinha do nome desfiou? O arquivo estava sem nó de amarração (Tie-Off)! Deixe os nós de início e fim SEMPRE ativados no seu programa de matrizes: o bordado fica com garantia de fábrica e nunca mais desmancha na vida!",
    voceSabia: "Os nós de amarração computadorizados foram criados para substituir os antigos nós manuais que as bordadeiras tradicionais davam com agulha de mão nas costas do bastidor!",
    practicalExercise: "No seu software, crie uma letra 'A': dê um zoom máximo de 1000% no início e no final da letra e observe os 4 micro-pontinhos de travamento perfeitamente alinhados no meio da coluna!",
    quickSummary: "Sequência de micropontos automáticos que travam o fio no início e no fim de cada objeto para evitar desfiamento.",
    relatedTerms: ["Cortador de Linha Automático", "Ponto Cheio (Satin)", "Ponto Tatami", "Programação de Bordado"],
    tags: ["e-025", "encapsulamento", "tie-in", "tie-off", "arremate", "travamento", "nao desfia", "wilcom", "artrelados"],
    bibliographicReferences: [
      "WILCOM. Lock Stitches, Tie-In & Tie-Off Encapsulation Engineering Guide. Sydney, 2022.",
      "BROTHER. Embroidery Software Stitch Securing & Trimming Protocols. Nagoya, 2023.",
      "ARTRELADOS. Nós Invisíveis e Eternos: Como Programar o Arremate Perfeito nas Suas Matrizes. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

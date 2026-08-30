import { Verbete } from "../types";

export const VERBETES_LETTER_Y14: Verbete[] = [
  {
    id: "y-030-yarn-twist-direction-s-twist-vs-z-twist",
    code: "Y-030",
    letter: "Y",
    term: "Yarn Twist Direction - S-Twist vs. Z-Twist (Torção de Fios: Sentido S vs. Sentido Z)",
    pronunciation: "iárn tuist di-rec-xion: és-tuist vêr-sus zê-tuist",
    level: "Avançado 🔴",
    category: "Fios & Linhas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da física têxtil da fiação e retorção de filamentos sintéticos, onde a inclinação helicoidal das fibras segue a barra central da letra 'S' (anti-horário) ou da letra 'Z' (horário).",
    summary: "Estudo da direção de torção das linhas de bordar, demonstrando por que linhas de bordado eletrônico exigem torção em Z para não desenrolarem com a rotação horária da lançadeira.",
    definition: "O Yarn Twist Direction - S-Twist vs. Z-Twist (Direcionalidade Helicoidal de Retorção de Fios de Bordar, Equilíbrio Torsional e Mecânica de Captura de Laçada) é a característica estrutural da fiação que determina o sentido de rotação em que os cabos individuais de filamento são unidos para formar a linha de bordado (2-ply ou 3-ply). No bordado computadorizado de alta velocidade (800 a 1.200 PPM), a ponta da lançadeira rotativa gira no sentido horário. Ao penetrar na laçada formada atrás da agulha, a lançadeira aplica um esforço de torção horária adicional sobre o fio. Linhas com torção em 'Z' (torção à direita) apertam-se e ganham coesão com esse movimento, mantendo o filamento unido. Linhas com torção em 'S' (comuns em costura manual ou crochê) desenrolam-se no olho da agulha, gerando desfiamento, nós frouxos e quebras instantâneas a cada 50 pontos.",
    technicalDetails: "Número de voltas de torção por metro (Turns Per Meter - TPM): 650 a 850 TPM para linhas 100% poliéster trilobal 40wt com torção Z final (Z-Final Twist / S-Ply Pre-Twist). Fator de torção alfa ($k_t$) calibrado para neutralidade torsional sob tensão dinâmica de 120 gf.",
    beginnerExplanation: "Você sabia que as linhas de bordar são enroladinhas como uma trancinha? A direção em que essa trança é torcida é super importante! As máquinas de bordar têm uma peça redonda lá dentro (a lançadeira) que gira no sentido do relógio. As linhas de bordado são fabricadas com a torção na direção da letra 'Z': assim, quando a máquina gira rápido, ela ajuda a linha a ficar mais apertadinha e forte! Se você tentar usar uma linha de costura comum ou de crochê (que muitas vezes é torcida na direção 'S'), a máquina vai 'desenrolar' a sua linha e ela vai virar um tufo de fiapos e quebrar na hora!",
    howItWorks: [
      "1. Na fábrica, múltiplos filamentos de poliéster ou viscose são pré-torcidos individualmente em sentido 'S'.",
      "2. Dois ou três cabos são então retorcidos juntos no sentido oposto 'Z' (estrutura 2-ply ou 3-ply equilibrada).",
      "3. O cone de linha é colocado no porta-fios da máquina de bordar.",
      "4. A agulha desce e cria a laçada (loop) de linha no ponto morto inferior.",
      "5. A ponta da lançadeira passa rente à agulha no sentido horário, capturando a laçada.",
      "6. O atrito da rotação horária reforça a torção 'Z' do fio, mantendo os filamentos 100% compactos e lisos.",
      "7. O ponto é arrematado com brilho impecável e sem nenhum desfiamento no tecido."
    ],
    applications: [
      "Seleção técnica de linhas para bordados computadorizados industriais de alta rotação.",
      "Identificação de linhas inadequadas de costura manual ou tricô que causam quebras na máquina.",
      "Homologação de fornecedores de fios de poliéster, viscose e fios metalizados.",
      "Regulagem de estabilidade de laçada em máquinas de alta velocidade (1.000+ PPM)."
    ],
    characteristics: [
      "Torção em 'Z' garante laçadas compactas e estáveis na lançadeira.",
      "Elimina desfiamento e quebras por abertura de filamentos no olho da agulha.",
      "Proporciona reflexão de luz uniforme e brilho acetinado constante no bordado."
    ],
    commonErrors: [
      "❌ Tentar usar linhas de costura reta ou pesponto comum torcidas em 'S' na máquina de bordar.",
      "❌ Passar a linha pelos tensores no sentido invertido, forçando o desenrolamento do fio.",
      "❌ Usar cones de linha artesanal de procedência duvidosa sem especificação de torção Z industrial."
    ],
    troubleshootingTips: [
      "A linha começa a abrir em vários fios fininhos e quebra a cada minuto: a linha é de baixa qualidade ou possui torção 'S' inadequada para bordado; substitua por linha própria de bordado com torção 'Z'.",
      "A linha fica torcendo em espiral e fazendo nós antes de entrar no tensor: o cone tem excesso de torção estática; coloque uma redinha elástica de proteção sobre o cone de linha.",
      "Os pontos cheios estão ficando opacos e sem brilho: a torção da linha abriu devido à tensão excessiva nos tensores superiores; afrouxe o botão de tensão em 1/2 volta."
    ],
    dicaArtrelados: "Para saber se a sua linha tem torção 'Z': segure um pedaço de 10 cm na vertical e olhe bem de perto. Se as ranhuras diagonais da linha seguirem a mesma inclinação da barra do meio da letra 'Z' (da esquerda para a direita descendo), ela é perfeita para sua máquina de bordar!",
    voceSabia: "Mais de 99% das linhas de bordado eletrônico produzidas no mundo pelas grandes marcas (como Madeira, Gunold, Coats e Linhas Corrente) utilizam obrigatoriamente a torção final em 'Z'!",
    practicalExercise: "Pegue um pedaço de linha de bordado de boa marca e tente desenrolá-la girando com os dedos no sentido anti-horário e depois no sentido horário. Observe como no sentido horário ela fica ainda mais firme e fechadinha.",
    quickSummary: "Yarn Twist Direction é a orientação de torção do fio, sendo a torção em 'Z' obrigatória no bordado eletrônico para suportar a rotação horária da lançadeira sem abrir filamentos.",
    recommendedSettings: {
      speedPPM: "800 a 1.000 PPM",
      needleType: "75/11 Ponta Bola ou Ponta Fina",
      density: "Linha padrão: 40wt 100% Poliéster Trilobal com Torção Z"
    },
    relatedTerms: [
      "Torção Z (Z-Twist)",
      "Torção S (S-Twist)",
      "Poliéster Trilobal",
      "Lançadeira Rotativa",
      "Laçada da Agulha (Loop Formation)"
    ],
    tags: [
      "y-030",
      "ztwist",
      "stwist",
      "torcao",
      "fios",
      "linhas",
      "fisicatextil",
      "artrelados"
    ],
    bibliographicReferences: [
      "HEARLE, J. W. S.; GROSBERG, P.; BACKER, S. Structural Mechanics of Yarns. Cambridge: MIT Press, 2021.",
      "MADEIRA THREADS MANUAL. Thread Engineering, Twist Direction and Machine Compatibility. Freiburg, 2022.",
      "ARTRELADOS. Física dos Fios e Engenharia de Insumos para Bordado Computadorizado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-031-yellow-needle-point-identification-code",
    code: "Y-031",
    letter: "Y",
    term: "Yellow Needle Point Identification Code (Código de Identificação da Ponta Amarela em Agulhas Especiais)",
    pronunciation: "iê-lou ni-dol point ai-den-ti-fi-kei-xion côud",
    level: "Intermediário 🟡",
    category: "Agulhas & Mecânica de Penetração",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do sistema internacional de codificação por cores nos cabos de agulhas industriais e domésticas (Schmetz, Organ e Groz-Beckert).",
    summary: "Identificação da faixa amarela ou haste dourada no cabo da agulha, indicando ponta bola fina para malhas delicadas ou revestimento de nitreto de titânio de altíssima durabilidade.",
    definition: "O Yellow Needle Point Identification Code (Codificação Cromática Universal de Agulhas, Ponta Bola Fina / Haste Dourada de Titânio TiN) é a convenção industrial de cores gravada no cabo ou no topo da agulha de bordar. A cor amarela possui dois significados técnicos essenciais: 1) Em agulhas domésticas de marcas de referência (como Schmetz), a faixa de cor amarela identifica a ponta bola fina para tecidos de malha elástica (*Jersey / Stretch Needle*), que afasta as laçadas do tecido sem romper os fios de elastano; 2) Em agulhas industriais com revestimento cerâmico (como Organ PD e Groz-Beckert Gebedur), o tom dourado/amarelo indica o tratamento com Nitreto de Titânio (TiN), conferindo dureza de 2.900 HV e durabilidade até 5 vezes maior em bordados de alta rotação.",
    technicalDetails: "Calibração de ponta: SES (Small Ball Point - raio de 0.05 mm). Revestimento cerâmico: TiN com espessura de 2 a 3 micrômetros. Redução do desgaste por abrasão em 80% comparado a agulhas convencionais de cromo.",
    beginnerExplanation: "Quando você olha para o cabo da sua agulha e vê uma faixinha amarela ou repara que ela é inteira douradinha como ouro, isso é um aviso importante do fabricante! A faixinha amarela avisa que a agulha tem uma pontinha levemente arredondada (ponta bola) perfeita para bordar tecidos de malha e roupinhas de bebê sem furar o tecido. Já a agulha inteira dourada é feita com revestimento de titânio: ela é super resistente, não perde a ponta fácil e dura centenas de milhares de pontos sem cegar!",
    howItWorks: [
      "1. A bordadeira confere a tabela de cores da marca de agulhas antes de instalar no cabeçote.",
      "2. Identifica a faixa amarela para projetos em malha de algodão, piquet, lycra e tecidos elásticos.",
      "3. Para produções pesadas e contínuas (como bonés e couro), escolhe a agulha inteira amarela/dourada de titânio.",
      "4. Instala a agulha com a canaleta longa voltada para a frente e o chanfro voltado para a lançadeira.",
      "5. A agulha ponta bola amarela penetra a malha afastando as fibras sem cortá-las.",
      "6. A peça de malha é bordada sem produzir microfuros ou furos de agulha após a primeira lavagem.",
      "7. A agulha de titânio mantém a nitidez do ponto por mais de 50 horas contínuas de bordado."
    ],
    applications: [
      "Bordados em camisetas polo de piquet, malhas de algodão e bodies de bebê.",
      "Produções intensivas em máquinas industriais operando acima de 900 PPM.",
      "Bordados em materiais sintéticos abrasivos e tecidos resinados pesados.",
      "Identificação visual rápida da agulha correta na gaveta de ferramentas do ateliê."
    ],
    characteristics: [
      "Identificação visual imediata do tipo de ponta e revestimento.",
      "Proteção total contra furos e rasgos em tecidos de malha e elastano.",
      "Vida útil até 5 vezes superior com revestimento de nitreto de titânio."
    ],
    commonErrors: [
      "❌ Usar agulha ponta fina afiada (faixa azul/roxa) em malhas elásticas, furando o tecido do cliente.",
      "❌ Continuar usando a agulha amarela de titânio após uma colisão forte no bastidor (a agulha pode entortar mesmo sem quebrar).",
      "❌ Limpar o cabo da agulha com solventes agressivos que apagam a marcação de cor."
    ],
    troubleshootingTips: [
      "Apareceram furinhos no tecido de malha ao redor do bordado após a lavagem: troque imediatamente a agulha por uma agulha de ponta bola (código amarelo / SES).",
      "A agulha perde o fio rapidamente ao bordar materiais sintéticos duros: utilize agulhas com haste dourada de nitreto de titânio (código PD ou Gebedur).",
      "A linha está desfiando na passagem pelo olho da agulha: verifique se o olho da agulha não sofreu desgaste; substitua a agulha a cada 10 a 15 horas de uso."
    ],
    dicaArtrelados: "Tenha sempre um pacote de agulhas de ponta bola amarela (calibre 75/11) reservado exclusivamente para bodies de bebê e camisetas polo! Elas entram entre os fios da malha com a maior suavidade do mundo e nunca deixam aqueles furinhos chatos!",
    voceSabia: "O sistema universal de faixas de cores em agulhas domésticas foi criado pela fábrica alemã Schmetz na década de 1970 para ajudar costureiras e bordadeiras a identificar o tipo de ponta sem precisar de uma lupa de relojoeiro!",
    practicalExercise: "Examine as agulhas do seu ateliê sob boa iluminação. Separe as agulhas com faixinha amarela (malha) das agulhas sem cor ou com faixas de outras cores (ponta fina/jeans) e guarde em organizadores separados.",
    quickSummary: "Yellow Needle Identification Code é a marcação amarela que identifica agulhas ponta bola para tecidos de malha elástica ou revestimento cerâmico de titânio de longa vida útil.",
    recommendedSettings: {
      speedPPM: "800 a 1.000 PPM",
      needleType: "75/11 Ponta Bola Fina (SES / Stretch) ou Titânio (PD)",
      density: "Compatível com todas as matrizes"
    },
    relatedTerms: [
      "Ponta Bola (Ball Point / SES)",
      "Agulha de Titânio (PD / Gebedur)",
      "Código de Cores de Agulhas",
      "Furos na Malha (Needle Holes)",
      "Chanfro da Agulha (Scarf)"
    ],
    tags: [
      "y-031",
      "agulhas",
      "pontaamarela",
      "pontabola",
      "titanio",
      "malhas",
      "acessorios",
      "artrelados"
    ],
    bibliographicReferences: [
      "SCHMETZ NEEDLES MANUAL. Color Code Identification Chart & Needle Point Selection. Herzogenrath, 2022.",
      "GROZ-BECKERT KG. Gebedur Titanium Coated Needles for High Performance Embroidery. Albstadt, 2021.",
      "ARTRELADOS. Manual Prático de Agulhas, Pontas e Tecnologias de Perfuração Têxtil. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-032-y-axis-coordinate-inversion-in-cap-and-tubular-drivers",
    code: "Y-032",
    letter: "Y",
    term: "Y-Axis Coordinate Inversion in Cap & Tubular Drivers (Inversão de Coordenadas do Eixo Y em Bastidores Cilíndricos)",
    pronunciation: "uái-ék-sis co-or-di-neit in-ver-xion in cäp end tu-biu-lar drai-vers",
    level: "Avançado 🔴",
    category: "Programação e Digitalização de Matrizes",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da álgebra linear e geometria analítica de máquinas CNC aplicadas à transformação de matrizes cartesianas ($Y' = -Y$) para peças tubulares e bonés.",
    summary: "Rotina de inversão de sinal no vetor do eixo Y executada pelo painel ou software para bordar peças tubulares de cabeça para baixo sem inverter a leitura do texto.",
    definition: "O Y-Axis Coordinate Inversion in Cap & Tubular Drivers (Transformação Algébrica de Coordenadas Polares, Inversão de Sinal do Vetor Y e Orientação Geométrica Tubular) é a operação matemática executada pelo processador da máquina de bordar ou pelo software de digitalização ao alternar do modo plano para o modo tubular/boné. Como as peças tubulares (como bonés, meias, punhos de camisa e pernas de calça) são encaixadas de frente para a operadora com a abertura voltada para fora do cabeçote, o topo da peça fica fisicamente voltado para o operador, enquanto na tela da máquina ele aponta para cima. A inversão de coordenadas multiplica todos os valores do eixo Y por -1 (ou aplica uma rotação de 180° com espelhamento compensado), garantindo que o texto e os símbolos sejam bordados com a orientação de leitura correta quando a peça for vestida.",
    technicalDetails: "Transformação de matriz de rotação bidimensional com inversão de sinal: $[X', Y'] = [X \cdot \cos(180^\circ) - Y \cdot \sin(180^\circ), X \cdot \sin(180^\circ) + Y \cdot \cos(180^\circ)] = [-X, -Y]$. Preservação da ordem de sobreposição dos objetos.",
    beginnerExplanation: "Quando você vai bordar um boné ou uma manga de camisa fechada, você precisa encaixar a peça virada 'de cabeça para baixo' na máquina para ela caber no braço de ferro. Se a máquina bordasse normal, o nome do cliente ia sair de cabeça para baixo! A inversão do eixo Y é um botão mágico no painel da máquina (ou no programa) que vira o desenho em 180° de cabeça para baixo na hora certa, para que quando o cliente colocar o boné na cabeça, o nome fique perfeitamente em pé e lindo para todo mundo ler!",
    howItWorks: [
      "1. O programador finaliza a matriz na orientação de leitura padrão na tela do computador.",
      "2. A bordadeira monta a peça no bastidor cilíndrico de boné ou tubular.",
      "3. Encaixa o bastidor no braço livre da máquina.",
      "4. No painel de controle, seleciona o ícone de 'Bastidor Tubular / Boné' ou pressiona o botão 'Girar 180°'.",
      "5. A máquina aplica a inversão de coordenadas no eixo Y automaticamente.",
      "6. A bordadeira executa o traçado de área (Trace) e confirma que o topo do desenho está alinhado com o topo real da peça.",
      "7. A máquina borda o desenho; ao retirar a peça do bastidor, o bordado fica perfeitamente posicionado.",
    ],
    applications: [
      "Bordados em bonés de beisebol, viseiras e chapéus no bastidor de 270°.",
      "Bordados em mangas de camisas polo, punhos e pernas de calças prontas.",
      "Personalização de meias esportivas, munhequeiras e caneleiras tubulares.",
      "Bordados em bolsos pequenos e áreas de difícil acesso com bastidores cilíndricos."
    ],
    characteristics: [
      "Garante a orientação correta de leitura sem necessidade de redesenhar a matriz.",
      "Integração automática com os sensores de limites do bastidor cilíndrico.",
      "Evita o erro clássico de bordar peças prontas de ponta-cabeça."
    ],
    commonErrors: [
      "❌ Girar a matriz no software de computador E TAMBÉM ativar a rotação no painel da máquina (a matriz gira 360° e volta a ficar de cabeça para baixo!).",
      "❌ Esquecer de fazer o teste de traçado (Trace) antes de iniciar o bordado no braço cilíndrico.",
      "❌ Não centralizar o ponto de origem antes de aplicar a rotação de 180° no painel."
    ],
    troubleshootingTips: [
      "O bordado saiu de cabeça para baixo no boné: você esqueceu de ativar o modo boné no painel; ative o ícone de rotação de 180° antes de dar o Start.",
      "O desenho saiu de cabeça para baixo mesmo com o modo boné ativado: a matriz já havia sido salva invertida no computador; desative a rotação no painel ou salve a matriz na posição normal.",
      "A máquina deu erro de limite de área após girar o desenho: o desenho girado ultrapassou as margens do bastidor; reduza o tamanho do desenho em 5% e recentralize."
    ],
    dicaArtrelados: "Adote este padrão no seu ateliê: NUNCA salve matrizes de cabeça para baixo no seu computador! Salve SEMPRE todas as matrizes na posição normal em pé e deixe para ativar a rotação de 180° no painel da máquina na hora de colocar o boné! Assim você nunca vai se confundir!",
    voceSabia: "Nas primeiras máquinas de bordar automáticas dos anos 1980, não havia botão de rotação no painel: os programadores precisavam redigitalizar o desenho inteiro de cabeça para baixo manualmente em mesas digitalizadoras!",
    practicalExercise: "Coloque uma matriz de teste no painel da sua máquina. Ative a função de rotação de 180° (ou espelhamento Y) e execute o traçado com o laser para ver o cabeçote contornar a área invertida.",
    quickSummary: "Y-Axis Coordinate Inversion é a inversão algébrica das coordenadas verticais da matriz que orienta o bordado corretamente em peças tubulares e bonés montados no braço livre.",
    recommendedSettings: {
      speedPPM: "600 a 700 PPM no modo boné/tubular",
      needleType: "80/12 Ponta Fina Reforçada (SAN 6)",
      density: "Matriz padronizada na orientação normal com rotação no painel"
    },
    relatedTerms: [
      "Modo Boné (Cap Mode)",
      "Rotação 180°",
      "Bastidor Tubular",
      "Traçado de Área (Trace)",
      "Origem da Matriz (Design Origin)"
    ],
    tags: [
      "y-032",
      "inversaodeeixo",
      "eixoy",
      "bones",
      "tubular",
      "rotacao",
      "painel",
      "artrelados"
    ],
    bibliographicReferences: [
      "BARUDAN EMBROIDERY MACHINERY. Operations Manual: Tubular and Cap Frame Orientation Setup. Ichinomiya, 2021.",
      "TAJIMA TECHNICAL BULLETIN. Coordinate Transformations and Cap Driver Rotation Matrix. Nagoya, 2022.",
      "ARTRELADOS. Guia de Operação de Painéis, Configurações de Bastidores e Cinemática CNC. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-033-yarn-lubrication-and-silicone-thread-emulsion",
    code: "Y-033",
    letter: "Y",
    term: "Yarn Lubrication & Silicone Thread Emulsion (Lubrificação e Emulsão de Silicone para Fios de Alta Velocidade)",
    pronunciation: "iárn lu-bri-ki-kei-xion end si-li-côun tréd i-môl-xion",
    level: "Intermediário 🟡",
    category: "Fios & Linhas",
    grammarClass: "Substantivo feminino composto.",
    origin: "Da tribologia química e tecnologia de acabamento têxtil de filamentos sintéticos com polidimetilsiloxano (PDMS).",
    summary: "Aplicação de emulsões de silicone e óleos lubrificantes atóxicos no cone de linha para reduzir o atrito nos tensores e no olho da agulha em altas velocidades.",
    definition: "O Yarn Lubrication & Silicone Thread Emulsion (Tratamento Tribológico de Filamentos, Emulsão de Silicone Hidrofóbico e Redução de Coeficiente de Fricção) é o processo químico e mecânico de condicionamento superficial aplicado às linhas de bordar durante a fiação industrial ou no próprio ateliê. Em operações contínuas a mais de 900 PPM, o atrito da linha ao passar pelos discos de tensão metálicos, espirais condutoras e pelo olho da agulha gera temperaturas superiores a 100 °C, causando microdesgastes e acúmulo de eletricidade estática. O banho de emulsão de silicone fluido de alta pureza (viscosidade de 100 a 350 cSt) cria uma película microscópica escorregadia que reduz o coeficiente de atrito em até 60%, estabiliza a tensão dinâmica da linha e anula quebras por superaquecimento.",
    technicalDetails: "Teor de lubrificação no fio (*Oil Pick-Up - OPU*): 2.5% a 4.0% em peso. Silicone grau farmacêutico atóxico e inodoro, 100% solúvel e lavável em água morna sem deixar manchas ou anéis de óleo no tecido.",
    beginnerExplanation: "Quando a máquina de bordar trabalha bem rápido, a linha passa raspando nos furinhos e no olho da agulha milhares de vezes por minuto, esquentando e criando atrito como se você estivesse esfregando as mãos com força no frio! As melhores linhas de bordado já vêm de fábrica com um banho invisível de silicone especial que funciona como um óleo deslizante: a linha escorrega suavezinha e macia pelos tensores, a agulha não esquenta e a linha não quebra de jeito nenhum!",
    howItWorks: [
      "1. Na fábrica, a linha passa por roletes impregnados com emulsão de silicone líquido de alta pureza antes de ser enrolada no cone.",
      "2. No ateliê, para cones ressecados ou linhas metálicas difíceis, a bordadeira aplica umas gotinhas de lubrificante de silicone próprio para bordado no topo do cone.",
      "3. O silicone penetra uniformemente nas fibras da linha por capilaridade.",
      "4. A máquina opera em velocidade máxima (950 PPM).",
      "5. A linha desliza pelos discos de tensão com resistência suave e sem trancos.",
      "6. A temperatura no olho da agulha cai drasticamente, evitando a fusão do poliéster.",
      "7. O bordado é concluído com zero quebras de linha e sem deixar manchas no tecido."
    ],
    applications: [
      "Condicionamento de linhas metálicas douradas e prateadas que tendem a quebrar com facilidade.",
      "Bordados contínuos em tecidos sintéticos densos (nylon, couro sintético e lona).",
      "Recuperação de cones de linha antigos que ficaram ressecados no armário.",
      "Produções industriais em alta velocidade (1.000+ PPM) com linhas escuras de alto atrito."
    ],
    characteristics: [
      "Reduz o atrito mecânico nos tensores e na agulha em até 60%.",
      "Previne o aquecimento e o derretimento de fibras de poliéster em alta velocidade.",
      "Fórmula atóxica que sai completamente na primeira lavagem sem manchar."
    ],
    commonErrors: [
      "❌ Usar óleo de máquina comum ou desengripante automotivo no cone de linha (mancha o tecido e destrói o cone para sempre!).",
      "❌ Encharcar o cone com excesso de lubrificante, fazendo a linha escorregar nos discos e soltar laçadas frouxas.",
      "❌ Aplicar silicone spray industrial que contenha solventes inflamáveis perto da máquina."
    ],
    troubleshootingTips: [
      "A linha metálica fica quebrando e embolando nos tensores: pingue 3 gotas de lubrificante próprio de silicone líquido no cone de linha ou passe a linha por um bloco lubrificador de feltro.",
      "O cone de linha antigo está quebrando com facilidade: aplique uma camada suave de spray de silicone têxtil a 30 cm de distância e deixe agir por 1 hora antes de bordar.",
      "O bordado ficou com laçadas frouxas após lubrificar o cone: aperte a tensão superior em 1/2 volta para compensar a diminuição do atrito do fio nos tensores."
    ],
    dicaArtrelados: "Tenha sempre no seu ateliê um frasquinho de silicone líquido puro para bordado (aquele bem fininho e transparente)! Quando você pegar uma linha metálica teimosa que não para de quebrar, passe umas gotinhas no cone: parece milagre, a linha roda lisa até o final!",
    voceSabia: "A aplicação de emulsões de silicone em fios têxteis foi desenvolvida na Alemanha na década de 1960 pela empresa Wacker Chemie, permitindo o surgimento das máquinas de bordar automáticas de alta rotação!",
    practicalExercise: "Passe um fio de linha seca entre os dedos apertando levemente e sinta o atrito. Pingue uma microgota de silicone no fio e passe de novo entre os dedos: observe como ele desliza instantaneamente sem nenhuma resistência.",
    quickSummary: "Yarn Lubrication é a aplicação de silicone líquido atóxico nas linhas de bordar para reduzir o atrito nos tensores e na agulha, eliminando quebras e superaquecimento em alta velocidade.",
    recommendedSettings: {
      speedPPM: "850 a 1.000 PPM",
      needleType: "75/11 ou 80/12 Ponta Fina ou Metálica",
      density: "Lubrificação recomendada: 2 a 3 gotas de silicone puro por cone"
    },
    relatedTerms: [
      "Silicone Líquido Têxtil",
      "Atrito da Agulha (Needle Friction)",
      "Linha Metálica",
      "Tensores Superiores",
      "Aquecimento de Agulha"
    ],
    tags: [
      "y-033",
      "lubrificacao",
      "silicone",
      "fios",
      "linhas",
      "atrito",
      "manutencao",
      "artrelados"
    ],
    bibliographicReferences: [
      "GUNOLD TECHNICAL MANUAL. Thread Lubrication & Silicone Conditioning for High-Speed Embroidery. Stockstadt, 2021.",
      "MADEIRA THREADS. Specialty Thread Care & High-Friction Substrate Solutions. Freiburg, 2022.",
      "ARTRELADOS. Química de Insumos Têxteis, Lubrificação e Controle de Atrito no Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-034-y-splitter-power-harness-for-multi-head-embroidery",
    code: "Y-034",
    letter: "Y",
    term: "Y-Splitter Power Harness for Multi-Head Embroidery (Chicote Elétrico Divisor em Y para Máquinas Multicabeças)",
    pronunciation: "uái-split-ter páu-er hár-nes for mul-ti-réd em-broi-de-ri",
    level: "Avançado 🔴",
    category: "Componentes & Mecânica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da engenharia eletrotécnica e cablagem de automação industrial de máquinas multicabeças CNC com topologia de distribuição em estrela e ramificações em Y.",
    summary: "Chicotes elétricos bifurcados em Y com conectores blindados que distribuem alimentação e sinais de controle para solenoides de corte e sensores de cada cabeçote.",
    definition: "O Y-Splitter Power Harness for Multi-Head Embroidery (Chicote Modular de Distribuição Eletromecânica em Y, Barramento de Potência de Solenoides e Cabeamento Blindado de Sensores) é o conjunto de cabos elétricos com derivações em bifurcação tipo 'Y' utilizado para interligar os módulos eletrônicos de máquinas de bordar industriais de 2, 4, 6, 8 e 12 cabeçotes. Esse chicote conduz a corrente contínua de alta amperagem (24V a 48V DC) necessária para disparar simultaneamente os solenoides de corte de linha (*thread trimmers*), motores de troca de cor e sensores ópticos de quebra de linha de cada cabeçote. O design em Y com conectores automotivos de engate rápido permite isolar ou substituir o cabeamento de um cabeçote com defeito sem interromper o funcionamento dos demais.",
    technicalDetails: "Condutores de cobre estanhado flexível multifilar AWG 18/20 com blindagem contra ruídos eletromagnéticos (EMI Shielding). Queda de tensão máxima permitida ao longo do barramento de 12 cabeçotes: < 0.3V. Conectores banhados a ouro com trava mecânica à prova de vibração.",
    beginnerExplanation: "Em uma máquina de bordar industrial grandona com várias cabeças bordando ao mesmo tempo, cada cabeça precisa receber energia e comandos elétricos para cortar a linha e trocar de cor no segundo exato! O cabo em Y é como um benjamim ou extensão elétrica super moderna e blindada que divide a energia do motor principal para cada uma das cabeças da máquina com total segurança, garantindo que todas cortem a linha juntas e funcionem como uma orquestra perfeita!",
    howItWorks: [
      "1. A fonte de alimentação principal da máquina fornece tensão estabilizada de 24V/48V DC.",
      "2. O cabo principal corre pela calha traseira da viga da máquina.",
      "3. Em cada cabeçote, um conector divisor em Y (Y-Splitter) deriva a energia e o sinal de controle para a placa do cabeçote.",
      "4. No momento do comando de corte, a placa envia o pulso elétrico através da perna do Y para o solenoide da faca.",
      "5. O solenoide atua em menos de 20 milissegundos com força total.",
      "6. Caso um cabeçote precise de manutenção, o conector em Y é desacoplado individualmente.",
      "7. A máquina continua operando os outros cabeçotes normalmente sem curto-circuito.",
    ],
    applications: [
      "Máquinas industriais de bordar multicabeças (2 a 12 cabeçotes em linha).",
      "Distribuição de sinal de sensores de quebra de linha por feixe óptico.",
      "Alimentação de motores de passo individuais de troca de cor por agulha.",
      "Diagnóstico e manutenção elétrica preventiva de cabeçotes industriais."
    ],
    characteristics: [
      "Distribuição de energia uniforme com perda mínima de tensão em todos os cabeçotes.",
      "Conectores blindados resistentes a vibrações mecânicas contínuas.",
      "Facilidade de manutenção modular sem desmontar a fiação principal."
    ],
    commonErrors: [
      "❌ Puxar os cabos elétricos com força durante a troca de bastidores, danificando os pinos do conector em Y.",
      "❌ Emendar fios partidos com fita isolante comum em vez de usar conectores automotivos crimpados.",
      "❌ Permitir acúmulo de óleo de máquina e sujeira dentro dos plugues elétricos."
    ],
    troubleshootingTips: [
      "O corte de linha automático falha apenas no cabeçote número 3: verifique o conector divisor em Y daquele cabeçote; pode haver um pino torto ou com mau contato elétrico.",
      "O sensor de linha fica apitando que a linha quebrou mesmo com a linha inteira: limpe os contatos do chicote divisor em Y com spray limpa-contatos elétricos.",
      "A máquina apresenta erro de sobrecarga na placa mãe: verifique se há fios do chicote em Y prensados contra a estrutura metálica do pantógrafo."
    ],
    dicaArtrelados: "Durante a limpeza semanal da sua máquina multicabeças: inspecione as calhas de cabos atrás dos cabeçotes! Mantenha os chicotes sempre presos com abraçadeiras plásticas (enforca-gato) para que nenhum fio fique solto raspando no pantógrafo móvel!",
    voceSabia: "As primeiras máquinas multicabeças dos anos 1960 tinham quilômetros de fios rígidos soldados ponto a ponto; a introdução dos chicotes modulares em Y nos anos 1990 reduziu o tempo de montagem de uma máquina de 2 semanas para apenas 2 dias!",
    practicalExercise: "Com a máquina desligada, localize a calha de cabos atrás dos cabeçotes e observe como o chicote principal se divide em ramos menores em formato de Y para alimentar cada barra de agulha e solenoide.",
    quickSummary: "Y-Splitter Power Harness é o chicote elétrico bifurcado em Y que distribui energia e comandos de corte para os cabeçotes de máquinas multicabeças com alta precisão e segurança.",
    recommendedSettings: {
      speedPPM: "Compatível com todas as velocidades",
      needleType: "Universal",
      density: "Tensão de operação: 24V a 48V DC estabilizada"
    },
    relatedTerms: [
      "Máquina Multicabeças",
      "Solenoide de Corte",
      "Chicote Elétrico",
      "Sensor de Quebra de Linha",
      "Manutenção Eletrônica"
    ],
    tags: [
      "y-034",
      "ysplitter",
      "chicoteeletrico",
      "multicabecas",
      "solenoide",
      "eletronica",
      "mecanica",
      "artrelados"
    ],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY MACHINERY. Multi-Head Electrical Wiring Harness & Power Distribution Schematics. Nagoya, 2022.",
      "BARUDAN INDUSTRIAL SYSTEMS. Solenoid Control Harness and Sensor Bus Architecture. Ichinomiya, 2021.",
      "ARTRELADOS. Eletrotécnica, Automação e Redes de Comunicação em Máquinas de Bordar Industriais. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-035-yield-value-in-temporary-spray-adhesives",
    code: "Y-035",
    letter: "Y",
    term: "Yield Value in Temporary Spray Adhesives (Rendimento e Cobertura de Adesivos Temporários em Spray)",
    pronunciation: "íild vá-liu in tem-po-re-ri sprei ad-ri-sivs",
    level: "Intermediário 🟡",
    category: "Insumos & Estabilizadores",
    grammarClass: "Substantivo masculino composto.",
    origin: "Da tecnologia de formulação de aerossóis poliméricos e cálculo de área de cobertura por metro quadrado ($m^2/kg$).",
    summary: "Cálculo de rendimento e técnica de aplicação de cola spray temporária em névoa (Mist) para fixar tecidos na entretela sem grudar cola na agulha.",
    definition: "O Yield Value in Temporary Spray Adhesives (Rendimento Volumétrico de Aerossóis Têxteis, Cobertura Micrométrica em Névoa e Polímeros Reposicionáveis sem Resíduos) é o índice que quantifica a área útil total de tecido e entretela fixada eficientemente por cada tubo de adesivo spray temporário (como 3M 75, Odif 505 ou similares de 500 ml). Um adesivo de alto rendimento possui bico atuador de névoa fina (*Micro-Mist Spray Pattern*) que deposita microgotículas uniformes de borracha termoplástica sintética, rendendo de 12 a 18 m² de área colada por tubo. Ao contrário de colas baratas que 'espirram' jatos grossos e criam poças viscosas que empelotam a agulha com cola, a cola spray de qualidade proporciona fixação firme e reposicionável instantânea sem manchar tecidos nobres.",
    technicalDetails: "Tempo em aberto (*Open Tack Time*): de 15 segundos a 30 minutos. Bico de pulverização com leque em cone de 45° a 25 cm de distância. Composição: elastômeros sintéticos livres de CFC e solventes clorados nocivos.",
    beginnerExplanation: "A cola spray temporária é a melhor amiga da bordadeira para colar panos de prato, toalhas e aplicações na entretela sem precisar encher o bastidor de alfinetes! Mas você já reparou que algumas marcas de cola acabam super rápido e deixam a agulha toda melada de grude? O rendimento da cola é a quantidade de peças que você consegue colar com um único tubinho: aplicando uma 'nuvenzinha' bem leve e de longe, um tubo rende centenas de bordados, a peça fica bem presinha e a agulha não fica suja de cola nunca!",
    howItWorks: [
      "1. A bordadeira agita bem o tubo de adesivo temporário por 10 segundos.",
      "2. Posiciona a entretela no interior de uma caixa de papelão (caixa de pulverização) para não sujar a mesa.",
      "3. Mantém o tubo em pé a uma distância de 25 a 30 cm da entretela.",
      "4. Aplica uma pulverização rápida e contínua de 1 a 2 segundos em formato de névoa fina cruzada.",
      "5. Aguarda 10 segundos para o solvente volátil evaporar, ativando a aderência tátil (*tack*).",
      "6. Posiciona o tecido sobre a entretela e alisa com a palma da mão.",
      "7. A máquina borda o projeto: a agulha entra e sai sem grudar cola no olho e a peça não escorrega.",
    ],
    applications: [
      "Fixação de tecidos e apliques de feltro no método de flutuação (Floating).",
      "Bordados em toalhas de banho felpudas, veludos e tecidos que não podem ser marcados pelo aro.",
      "Montagem de peças feitas no bastidor (In-The-Hoop - ITH).",
      "Estabilização de malhas finas de viscose e seda em entretela de corte limpo."
    ],
    characteristics: [
      "Rendimento superior de até 18 m² por lata com bico atuador de névoa fina.",
      "Adesividade reposicionável que permite descolar e colar de novo sem perder a força.",
      "Zero resíduo gomoso na agulha e sai 100% na lavagem da peça."
    ],
    commonErrors: [
      "❌ Aplicar o spray muito perto (< 10 cm), encharcando a entretela com uma poça líquida de cola.",
      "❌ Espirrar a cola direto em cima da mesa ou perto do cabeçote da máquina (a névoa de cola gruda nas guias de linha!).",
      "❌ Colar o tecido imediatamente sem esperar os 10 segundos de evaporação do gás propelente."
    ],
    troubleshootingTips: [
      "A agulha está cheia de grude preto de cola e a linha começou a quebrar: limpe a agulha com álcool isopropílico e passe a aplicar o spray a pelo menos 30 cm de distância com uma borrifada muito mais leve.",
      "O tecido descolou da entretela durante o bordado: a poeira do ateliê secou a cola antes da aplicação; aplique o spray e una o tecido em no máximo 1 minuto.",
      "O bico do tubo de cola entupiu: vire a lata de cabeça para baixo e aperte o bico por 2 segundos até sair apenas gás limpo, desentupindo a válvula."
    ],
    dicaArtrelados: "Tenha uma 'caixa de sapato velha' na sua bancada só para borrifar cola! Coloque a entretela dentro da caixa e borrife a 30 cm: a nuvem de cola fica presa dentro da caixa, seu ateliê fica limpinho e você economiza mais de 50% de cola por mês!",
    voceSabia: "O conceito do adesivo temporário reposicionável em spray foi desenvolvido nos anos 1970 pela 3M nos EUA, derivado da mesma tecnologia química que deu origem aos famosos blocos adesivos Post-it!",
    practicalExercise: "Borrife cola spray em um pedaço de entretela a 10 cm de distância e em outro a 30 cm de distância. Toque nos dois com a ponta dos dedos e veja como o segundo fica com uma pegada uniforme e perfeita sem molhar o dedo.",
    quickSummary: "Yield Value in Spray Adhesives é o rendimento em metros quadrados e a qualidade de cobertura em névoa da cola temporária, garantindo fixação firme sem empelotar a agulha com resíduos.",
    recommendedSettings: {
      speedPPM: "Compatível com todas as velocidades",
      needleType: "75/11 Ponta Bola ou Fina",
      density: "Distância de pulverização: 25 cm a 30 cm da entretela"
    },
    relatedTerms: [
      "Cola Spray Temporária",
      "Método de Flutuação (Floating)",
      "Entretela com Adesivo",
      "Goma na Agulha (Needle Gunk)",
      "Aplique no Bastidor"
    ],
    tags: [
      "y-035",
      "colaspray",
      "rendimento",
      "adesivos",
      "insumos",
      "flutuacao",
      "estabilizacao",
      "artrelados"
    ],
    bibliographicReferences: [
      "3M INDUSTRIAL ADHESIVES DIVISION. Repositionable Spray Adhesives for Textile Processing Guide. St. Paul, 2021.",
      "ODIF EMBROIDERY PRODUCTS. Temporary Spray Chemistry & Needle Cleanliness Protocols. Lyon, 2022.",
      "ARTRELADOS. Guia de Insumos Químicos, Adesivos e Estabilizadores para Ateliês de Bordado. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-036-y-seam-construction-and-in-hoop-quilt-joining",
    code: "Y-036",
    letter: "Y",
    term: "Y-Seam Construction & In-Hoop Quilt Joining (Construção de Costuras em Y e Junção de Blocos de Quilt no Bastidor)",
    pronunciation: "uái-siim con-struc-xion end in-hup cuilt djói-ning",
    level: "Avançado 🔴",
    category: "Aplicações & Técnicas Especiais",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do patchwork tradicional e geometria de quilting ('Y-seam' / costura de três peças em ângulos de 120° formando cubos tridimensionais e hexágonos) adaptada para digitalização no bastidor.",
    summary: "Técnica de programação de matrizes para junção de blocos hexagonais e mosaicos de patchwork no bastidor com costuras de parada precisa em formato de Y sem franzir o tecido.",
    definition: "O Y-Seam Construction & In-Hoop Quilt Joining (União Automatizada de Blocos de Patchwork em Y, Junção de Hexágonos e Mosaicos Geométricos no Bastidor / Precision Partial Seaming Protocol) é a metodologia de digitalização e costura automatizada de blocos de quilt onde três retalhos de tecido se encontram em um único vértice angular de 120° (como no bloco clássico 'Jardim da Vovó', cubos 3D de Tumbling Blocks e estrelas de 6 pontas). Na costura tradicional de máquina reta, as costuras em Y são temidas por exigirem paradas manuais milimétricas a 1/4 de polegada antes da borda. No bordado eletrônico, a matriz programa as paradas de agulha com coordenadas de precisão absoluta de 0.1 mm, permitindo dobrar e costurar os tecidos em sequência no bastidor sem repuxamento e com vértices planos perfeitos.",
    technicalDetails: "Ponto corrido de costura reta de união com passo de 2.2 mm a 2.5 mm com ponto de parada exato (*Needle Stop Position*) a 6.0 mm (1/4\") do vértice de interseção. Sequenciamento de sobreposição de abas (*Partial Seaming Sequence*) com paradas programadas de máquina (Color Stop).",
    beginnerExplanation: "Quem faz patchwork e colchas de retalhos sabe que unir três pedacinhos de pano que se encontram no mesmo bico (como um hexágono ou desenho de favo de mel) é uma das coisas mais difíceis e chatas do mundo! A técnica de costura em Y no bastidor faz a máquina de bordar costurar cada pedacinho com precisão milimétrica: ela costura até o biquinho exato, para para você dobrar o próximo paninho e fecha a junção perfeitamente retinha e sem nenhuma ruga, como mágica!",
    howItWorks: [
      "1. A matriz inicia bordando as linhas guias do hexágono ou bloco geométrico sobre a entretela e a manta.",
      "2. A máquina borda o primeiro retalho com costura parcial de 1/4 de polegada e executa uma parada de cor.",
      "3. A bordadeira dobra o segundo retalho de tecido sobre a linha de marcação e pressiona com um rolinho de passar.",
      "4. A máquina costura a segunda perna do 'Y' parando exatamente no ponto central da junção.",
      "5. Posiciona-se o terceiro retalho fechando a interseção de 120°.",
      "6. A máquina completa a terceira costura em Y e finaliza com pontos decorativos de quilting ou ponto caseado ao redor.",
      "7. Retira-se o bloco pronto do bastidor: o encontro das três costuras fica 100% plano, sem rugas e sem desvios."
    ],
    applications: [
      "Confecção de colchas de retalhos de luxo, mantas de bebê e caminhos de mesa no bastidor.",
      "Blocos de patchwork modernos tipo Tumbling Blocks (efeito óptico 3D de cubos).",
      "Almofadas de hexágonos e mosaicos geométricos no estilo inglês (English Paper Piecing no bastidor).",
      "Bolsas e painéis decorativos com motivos de estrelas de 6 e 8 pontas."
    ],
    characteristics: [
      "Elimina a dificuldade de costurar ângulos em Y à mão ou em máquina reta.",
      "Vértices planos perfeitos com precisão de 0.1 mm em todos os blocos.",
      "Une patchwork e bordado decorativo no mesmo projeto dentro do bastidor."
    ],
    commonErrors: [
      "❌ Deixar a costura passar do ponto central de 1/4\" de margem, travando o tecido da terceira aba.",
      "❌ Usar ponto muito largo (> 3.5 mm) que deixa a costura do quilt frouxa ao desvirar.",
      "❌ Não passar os retalhos com ferro ou rolinho entre cada etapa de costura no bastidor."
    ],
    troubleshootingTips: [
      "O centro do bloco em Y ficou repuxado e com uma prega de tecido: a primeira costura passou do ponto de parada central; recalibre a matriz para parar exatamente a 6.0 mm da borda do bloco.",
      "Os cantos dos hexágonos não estão se alinhando perfeitamente: utilize entretela de corte suave (Cutaway de 60 g/m²) como base do bloco para que o tecido não estique durante as costuras.",
      "A agulha bateu grosso no meio do encontro dos três tecidos: abra as costuras pelo avesso e assente com ferro de passar a vapor antes de fechar o bloco."
    ],
    dicaArtrelados: "Use um rolinho manual de costura de madeira (seam roller) ao lado da sua máquina de bordar! A cada parada para aplicar o próximo retalho de tecido, passe o rolinho na costura: o tecido fica chapado e assentado na hora sem você precisar levantar da cadeira para ir até o ferro!",
    voceSabia: "O bloco de patchwork 'Jardim da Vovó' (Grandmother's Flower Garden), feito com junções em Y de centenas de hexágonos, era o modelo de colcha mais popular nos Estados Unidos durante a Grande Depressão de 1929!",
    practicalExercise: "Digitalize um bloco simples de 3 losangos formando um cubo 3D com costura em Y no seu software. Borde no bastidor sobre manta R1 e sinta a satisfação de ver o encontro central perfeito e sem nenhuma ruga.",
    quickSummary: "Y-Seam Construction é a técnica de união automatizada de blocos geométricos de patchwork em Y no bastidor, garantindo junções de 120° perfeitas e sem franzidos.",
    recommendedSettings: {
      speedPPM: "700 a 800 PPM",
      needleType: "75/11 Ponta Fina (Sharp / Microtex)",
      density: "Passo de costura de união: 2.2 mm a 2.5 mm com paradas precisas de cor"
    },
    relatedTerms: [
      "Costura em Y (Y-Seam)",
      "In-The-Hoop Quilting",
      "Patchwork no Bastidor",
      "Hexágonos (English Paper Piecing)",
      "Margem de Costura de 1/4\""
    ],
    tags: [
      "y-036",
      "yseam",
      "quilting",
      "patchwork",
      "hexágonos",
      "ith",
      "aplicacoes",
      "artrelados"
    ],
    bibliographicReferences: [
      "MODERN QUILT GUILD. Precision Y-Seam Geometry and Automated Block Assembly. Austin, 2022.",
      "NATIONAL EMBROIDERY & QUILTING ASSOCIATION. In-the-Hoop Patchwork Engineering. Denver, 2021.",
      "ARTRELADOS. Quilting e Patchwork no Bastidor: Técnicas Avançadas de Montagem e Blocos 3D. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "y-037-yoke-stabilizer-hooping-technique-for-winter-coats",
    code: "Y-037",
    letter: "Y",
    term: "Yoke Stabilizer Hooping Technique for Heavy Winter Coats (Técnica de Estabilização de Palas em Casacos Pesados de Inverno)",
    pronunciation: "iôuk stei-bi-lai-zer hu-ping tek-niik for ré-vi uin-ter côuts",
    level: "Avançado 🔴",
    category: "Bastidores & Enquadramento",
    grammarClass: "Substantivo feminino composto.",
    origin: "Do inglês 'yoke' (pala de casaco) e 'floating stabilizer hooping' (técnica de enquadramento por flutuação sem prensar o enchimento térmico).",
    summary: "Método de enquadramento por flutuação com bastidores magnéticos e entretelas resinadas para bordar a pala de casacos acolchoados (doudounes e parcas) sem esmagar as plumas.",
    definition: "O Yoke Stabilizer Hooping Technique for Heavy Winter Coats (Estabilização por Flutuação em Palas de Casacos Acolchoados, Preservação de Isolamento Térmico de Plumas / Loft Preservation Framing) é a técnica especializada de montagem e bordado na região superior das costas e ombros (pala) de peças pesadas de inverno (como jaquetas doudoune acolchoadas, parcas impermeáveis, casacos de lã batida e jaquetas com forro de pluma de ganso). Prender essas peças grossas em bastidores plásticos convencionais esmaga o enchimento térmico de forma irreversível e cria marcas profundas de queimadura de bastidor (*hoop burn*). A técnica utiliza entretela de corte pesado adesivada enquadrada sozinha no bastidor, enquanto a pala do casaco é 'flutuada' por cima, presa por ímãs de neodímio ou fita adesiva têxtil de alta aderência com subponto de alinhavo perimétrico (*Basting Box*).",
    technicalDetails: "Preservação do volume térmico (*Loft Retention* > 95%). Agulhas 90/14 ponta bola média (SUK/SES) para não furar a membrana impermeável interna. Alinhavo de fixação com passo largo de 4.5 mm a 5.0 mm ao redor de toda a área de bordado.",
    beginnerExplanation: "Bordar a parte de trás dos ombros (a pala) de uma jaqueta bem fofa de inverno, daquelas cheias de manta ou penas, parece uma missão impossível! Se você tentar apertar a jaqueta dentro de um bastidor de plástico comum, o bastidor não fecha e, se fechar, vai amassar a fofura da jaqueta para sempre! Com a técnica de flutuação de pala, você prende apenas a entretela no bastidor e apoia a jaqueta por cima com ímãs fortes ou colinha: a máquina borda perfeitamente sem amassar a jaqueta e o casaco continua fofo, quentinho e impecável!",
    howItWorks: [
      "1. A bordadeira enquadra apenas a entretela de corte pesado (Cutaway 80 g/m²) no bastidor magnético ou plástico.",
      "2. Aplica cola spray temporária na entretela ou remove a película protetora da entretela adesiva.",
      "3. Abre o zíper do casaco pesado e posiciona a pala traseira sobre a área adesivada, mantendo o forro livre.",
      "4. Trava as abas do casaco com ímãs de neodímio nas bordas do bastidor magnético.",
      "5. A máquina executa um alinhavo automático perimétrico (Basting Stitch) para travar a jaqueta na entretela.",
      "6. Borda o logotipo corporativo ou monograma com agulha 90/14 e velocidade reduzida de 650 PPM.",
      "7. Retira-se do bastidor, puxa-se a linha de alinhavo facilmente: a pala do casaco fica perfeita, sem marcas e com o enchimento 100% fofo.",
    ],
    applications: [
      "Bordados corporativos em jaquetas acolchoadas de nylon e parcas de equipes de campo.",
      "Personalização de jaquetas de esqui, montanhismo e casacos térmicos de alta tecnologia.",
      "Bordados em casacos pesados de lã batida, feltro grosso e jaquetas de couro com forro de pele.",
      "Uniformes de inverno de frigoríficos, companhias aéreas e frotas de transporte."
    ],
    characteristics: [
      "Preserva 100% da fofura e da capacidade de isolamento térmico do casaco.",
      "Zero marcas de queimadura de bastidor (elimina totalmente o hoop burn em tecidos acolchoados).",
      "Permite bordar jaquetas prontas sem precisar descosturar o forro térmico interno."
    ],
    commonErrors: [
      "❌ Tentar forçar o fechamento de bastidores plásticos tradicionais sobre a jaqueta acolchoada.",
      "❌ Não fazer o alinhavo prévio (Basting Box), fazendo o casaco escorregar durante o bordado.",
      "❌ Usar velocidade alta (> 800 PPM), fazendo o cabeçote puxar o tecido grosso e perder passos."
    ],
    troubleshootingTips: [
      "O casaco está balançando e tremendo durante o bordado: ative a função de alinhavo de contorno (Basting Box) no software ou painel da máquina para travar o casaco na entretela antes do bordado começar.",
      "O bastidor magnético soltou durante o movimento: reduza a velocidade da máquina para 650 PPM e certifique-se de que a jaqueta esteja apoiada sobre a mesa e não pendurada puxando o braço da máquina.",
      "A agulha está quebrando ao passar pelas costuras grossas da pala: utilize agulha reforçada com haste de titânio (Groz-Beckert SAN 6 calibre 90/14)."
    ],
    dicaArtrelados: "Ao bordar jaquetas pesadas e casacos de inverno: NUNCA deixe o peso do casaco ficar pendurado para fora da máquina! Apoie o corpo do casaco em uma mesinha auxiliar ou sobre a bancada: com o peso apoiado, a máquina borda leve como uma pluma e o desenho nunca entorta!",
    voceSabia: "As jaquetas doudoune com isolamento térmico de plumas de ganso (Down Jackets) foram criadas em 1936 pelo aventureiro americano Eddie Bauer após ele quase sofrer hipotermia durante uma pescaria no inverno!",
    practicalExercise: "Pegue uma almofada fofa ou um pedaço de tecido acolchoado com manta grossa. Enquadre uma entretela no bastidor, passe cola spray e flutue o tecido por cima com um alinhavo. Borde um desenho de teste e comprove como a manta não amassa.",
    quickSummary: "Yoke Stabilizer Hooping Technique é o método de enquadramento por flutuação em palas de casacos pesados de inverno que preserva o enchimento térmico e elimina marcas de bastidor.",
    recommendedSettings: {
      speedPPM: "600 a 680 PPM",
      needleType: "90/14 Ponta Bola Média (SUK) ou Reforçada (SAN 6)",
      density: "Densidade adaptada para acolchoados: 0.42 mm a 0.45 mm com alinhavo perimétrico"
    },
    relatedTerms: [
      "Técnica de Flutuação (Floating)",
      "Bastidor Magnético",
      "Alinhavo no Bastidor (Basting Stitch)",
      "Casacos Acolchoados (Puffer Jackets)",
      "Pala de Casaco (Yoke)"
    ],
    tags: [
      "y-037",
      "casacos",
      "inverno",
      "flutuacao",
      "bastidormagnetico",
      "alinhavo",
      "enquadramento",
      "artrelados"
    ],
    bibliographicReferences: [
      "OUTDOOR APPAREL EMBROIDERY GUILD. Puffer Jacket Hooping & Thermal Insulation Preservation. Seattle, 2022.",
      "HOOP MASTER & MIGHTY HOOP. Magnetic Hooping Solutions for Heavy Outerwear. Racine, 2021.",
      "ARTRELADOS. Manual de Bordados em Roupas Pesadas, Jaquetas Acolchoadas e Uniformes de Inverno. São Paulo, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

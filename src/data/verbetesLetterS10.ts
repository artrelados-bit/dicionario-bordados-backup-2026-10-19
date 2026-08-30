import { Verbete } from "../types";

export const VERBETES_LETTER_S10: Verbete[] = [
  {
    id: "s-075-salto-sem-costura-jump-stitch",
    code: "S-075",
    letter: "S",
    term: "Salto sem Costura (Jump Stitch)",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do inglês jump stitch (ponto de salto). Comando fundamental no código binário DST e EXP desde os primórdios do comando numérico computadorizado (CNC).",
    summary: "Movimento em que o bastidor se desloca de um ponto a outro do desenho sem a agulha penetrar no tecido.",
    definition: "O Salto sem Costura (Jump Stitch / Deslocamento em Vazio / Ponto de Salto) é o comando operacional de máquina em que o pantógrafo movimenta o bastidor nas coordenadas X e Y enquanto a barra de agulha permanece desengatada ou em repouso no ponto morto superior, sem efetuar penetração no tecido nem formação de laço de costura. É utilizado para transitar a cabeça de costura entre diferentes objetos da matriz, áreas vazadas ou para executar cortes automáticos de linha.",
    technicalDetails: "Nos arquivos binários Tajima (.DST), um salto é codificado pelo bit de Jump ativo no byte de comando com deslocamento máximo de +12.1 mm a -12.1 mm por micro-passo. Saltos maiores que 12 mm são automaticamente decompostos pelo software em múltiplos saltos consecutivos (Multi-Jump String). Acima de um número configurado de saltos contínuos (tipicamente 3 a 5 jumps), a máquina ativa o mecanismo de corte automático de linha (Auto-Trim).",
    beginnerExplanation: "É quando a máquina anda com o bastidor de um lugar para o outro do desenho sem furar o pano. Se o desenho tem duas flores separadas, a máquina borda a primeira flor, 'dá um pulo' até a segunda flor e continua bordando lá.",
    howItWorks: [
      "1. A máquina conclui a costura do primeiro objeto com micro-pontos de amarração final.",
      "2. A alavanca de engate da barra de agulha desativa o movimento vertical da agulha.",
      "3. Os motores de passo ou servomotores dos eixos X e Y movem o bastidor rapidamente até a coordenada inicial do próximo elemento.",
      "4. Se a distância for longa e o corte estiver ativado, a faca corta a linha superior e inferior antes do salto.",
      "5. Ao atingir a nova posição, a barra de agulha é reengatada e o bordado é retomado com amarração inicial."
    ],
    construction: [
      "Comando vetorial de vetor de deslocamento (ΔX, ΔY)",
      "Bit de controle de desengate mecânico no cabeçote",
      "Rotina de desaceleração inercial do pantógrafo",
      "Integração com o gatilho de corte de linha e recolhedor (Wiper)"
    ],
    mainTypes: [
      "Salto Curto de Conexão com Fio Contínuo (Sem Corte)",
      "Salto Longo com Corte Automático (Trim & Jump)",
      "Salto de Enquadramento e Centralização de Bastidor"
    ],
    characteristics: [
      "Deslocamento rápido sem perfuração no tecido",
      "Geração de fios de ligação se o corte automático não for programado",
      "Sujeito a limites de velocidade para evitar chicoteamento de linha"
    ],
    applications: [
      "Transição entre letras separadas em frases e monogramas.",
      "Deslocamento entre diferentes elementos gráficos de uma mesma cor.",
      "Movimentação do bastidor para a posição de início ou troca de peça."
    ],
    commonErrors: [
      "❌ Deixar saltos longos de mais de 3 cm sem comando de corte, gerando fios compridos que podem enroscar no pé calcador",
      "❌ Programar saltos curtos com corte desnecessário, aumentando o tempo de máquina e deixando pontas para arrematar",
      "❌ Não verificar se a linha saltou por cima de áreas que ainda serão bordadas, correndo o risco de costurar por cima do fio solto"
    ],
    troubleshootingTips: [
      "Se a máquina deixar fios esticados entre as letras: Configure o software para aplicar corte automático (Trim) em saltos maiores que 2,0 mm.",
      "Se a agulha escapar da linha no primeiro ponto após o salto: Aumente o comprimento da sobra de corte (Tail Length) no painel ou reduza a velocidade no primeiro ponto.",
      "Se o bastidor fizer um barulho seco nos saltos: Reduza a velocidade de salto (Jump Speed) no menu de parâmetros mecânicos da máquina."
    ],
    dicaArtrelados: "Para letrinhas pequenas de nomes em uniformes e toalhas: configure o corte de linha somente entre palavras ou letras distantes mais de 3 mm! Se a máquina cortar a cada letrinha de 5 mm, você vai gastar o dobro do tempo e encher o avesso de nozinhos desnecessários!",
    voceSabia: "Nas primeiras máquinas de bordar automáticas do século XX que liam cartões perfurados de papelão (tipo Jacquard), o salto era acionado por um pino mecânico que travava a barra de descida das agulhas enquanto uma manivela puxava a mesa!",
    practicalExercise: "Abra uma matriz de texto no seu programa de edição. Ative a visualização de conectores/saltos (linhas pontilhadas). Veja como o software traça o caminho que o bastidor fará de uma letra para a outra no ar.",
    quickSummary: "Movimento do bastidor sem perfuração de agulha que transporta o cabeçote entre diferentes partes do desenho.",
    recommendedSettings: {
      speedPPM: "Velocidade de salto de 500 a 700 mm/s",
      needleType: "Padrão",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Corte Automático de Linha (Auto Trim)",
      "Ponto de Amarração (Tie-off / Lock Stitch)",
      "Conectores de Matriz",
      "Pantógrafo",
      "Comando DST"
    ],
    tags: ["s-075", "salto", "jump stitch", "deslocamento", "programacao", "corte", "artrelados"],
    bibliographicReferences: [
      "TAJIMA EMBROIDERY SYSTEMS. Data Format & Function Code Standards: JUMP and STOP Commands. Nagoya, 2022.",
      "WILCOM EMBROIDERY STUDIO. Connector Management, Jumps and Auto-Trims Manual. Sydney, 2023.",
      "ARTRELADOS. Estrutura Binária e Mecânica de Matrizes de Bordado Computadorizado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-076-saturacao-optica-do-ponto-tatami",
    code: "S-076",
    letter: "S",
    term: "Saturação Óptica do Ponto Tatami (Tatami Optical Density Saturation)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim saturatio (plenitude/encher completamente) e do japonês tatami (esteira de palha trançada). Conceito de física óptica aplicada à densidade têxtil.",
    summary: "Ponto de equilíbrio exato de densidade em que o tecido fica 100% coberto sem desperdiçar linha nem deixar o bordado duro.",
    definition: "A Saturação Óptica do Ponto Tatami (Tatami Optical Density Saturation / Thread Coverage Threshold) é o limiar matemático e visual de espaçamento entre linhas de ponto tatami (geralmente situado entre 0.38 mm e 0.42 mm para linhas padrão 40wt) no qual se atinge 100% de opacidade e cobertura da cor do tecido de fundo, sem que haja sobreposição física excessiva dos filamentos de poliéster. Ultrapassar esse limiar de saturação (ex: usar densidades de 0.28 mm ou 0.30 mm) não melhora a cobertura visual, mas aumenta drasticamente o peso, a rigidez, o tempo de máquina e o risco de quebra de agulhas.",
    technicalDetails: "O diâmetro médio de um filamento 120D/2 (linha 40wt) sob tração no tecido é de aproximadamente 0,36 mm a 0,38 mm. A saturação óptica ótima é obtida combinando um espaçamento de 0.40 mm com uma costura de base em tatami aberto (Underlay de 2.5 mm). Isso proporciona cobertura total com até 30% menos pontos do que uma camada única hiperdensa.",
    beginnerExplanation: "É saber a quantidade exata de linhas para fechar o desenho sem deixar o tecido aparecendo por baixo e sem transformar o bordado numa placa dura como papelão. É cobrir perfeitamente o pano usando o menor número de pontos possível.",
    howItWorks: [
      "1. A costura de base em tatami aberto nivela as fibras e uniformiza o fundo do tecido.",
      "2. A camada principal de tatami é programada com espaçamento de 0.40 mm (saturação ideal).",
      "3. Os filamentos de poliéster trilobal se assentam lado a lado refletindo a luz em feixe contínuo.",
      "4. Atinge-se a opacidade visual absoluta sem necessidade de apertar as linhas.",
      "5. A peça bordada mantém toque maleável, caimento natural e acabamento nobre."
    ],
    construction: [
      "Espaçamento de linhas (Density Pitch) calibrado entre 0.38 mm e 0.45 mm",
      "Comprimento de ponto tatami entre 3.8 mm e 4.5 mm",
      "Padrão de deslocamento de linha (Stagger/Shift) fracionado em 1/3 ou 1/4",
      "Costura de base em grade de suporte"
    ],
    mainTypes: [
      "Saturação Padrão para Linha 40wt (Espaçamento 0.40 mm)",
      "Saturação para Linhas Finas 60wt (Espaçamento 0.28 mm a 0.32 mm)",
      "Saturação com Efeito Gradiente/Degradê de Linhas Abertas"
    ],
    characteristics: [
      "Aspecto visual fechado, brilhante e uniforme",
      "Economia substancial de tempo de máquina e consumo de fio",
      "Preservação do conforto e caimento do tecido bordado"
    ],
    applications: [
      "Preenchimento de grandes áreas de brasões, bandeiras e logotipos.",
      "Bordados em tecidos finos e camisas sociais que não toleram rigidez.",
      "Otimização de matrizes comerciais para redução de custos de produção."
    ],
    commonErrors: [
      "❌ Aumentar a densidade para 0.25 mm tentando cobrir tecido escuro com linha branca sem usar costura de base",
      "❌ Programar saturação uniforme em tecidos elásticos sem aumentar a compensação de repuxo",
      "❌ Usar a mesma densidade de linha 40wt ao bordar com linha metálica grossa"
    ],
    troubleshootingTips: [
      "Se o tecido de fundo estiver aparecendo entre as linhas: Não aperte o espaçamento; ative a costura de base (Underlay) em tatami ou grade cruzada.",
      "Se o bordado estiver duro e repuxando o tecido: Aumente o espaçamento de 0.35 mm para 0.42 mm no software.",
      "Se a linha branca sobre tecido preto ficar acinzentada: Adicione uma base tatami em 90 graus em vez de sobrecarregar a camada superior."
    ],
    dicaArtrelados: "O segredo da cobertura perfeita em bordados grandes não é entupir o desenho de pontos, mas sim a base! Uma costura de base leve e bem feita permite que você use uma densidade suave de 0.42 mm no acabamento. O bordado fica macio, leve e fecha 100% da cor!",
    voceSabia: "O ponto tatami tem esse nome porque sua estrutura entrelaçada de pontos regulares imita perfeitamente as esteiras tradicionais de palha de arroz 'Tatami' que cobrem o piso das casas japonesas há mais de mil anos!",
    practicalExercise: "No seu programa de matrizes, faça dois quadrados de 4x4 cm: um com densidade 0.28 mm (sem base) e outro com densidade 0.40 mm com costura de base tatami. Borde os dois lado a lado e compare o toque, a aparência e o tempo de bordado!",
    quickSummary: "Densidade ideal de preenchimento que garante cobertura visual total com toque macio e sem desperdício de pontos.",
    recommendedSettings: {
      density: "Espaçamento de 0.38 mm a 0.42 mm (comprimento de ponto 4.0 mm)",
      speedPPM: "800 a 950 PPM",
      needleType: "75/11 Ponta Bola",
      stabilizer: "Entretela rasgável ou recortável conforme tecido"
    },
    relatedTerms: [
      "Ponto Tatami (Tatami Stitch)",
      "Densidade de Ponto (Stitch Density)",
      "Costura de Base (Underlay)",
      "Linha 40wt Poliéster",
      "Compensação de Repuxo"
    ],
    tags: ["s-076", "saturacao optica", "tatami", "densidade", "cobertura", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Stitch Density & Optical Coverage Theory. Sydney, 2023.",
      "TAJIMA SOFTWARE SOLUTIONS. DG/ML by Pulse: Tatami Patterns and Coverage Optimization. Nagoya, 2022.",
      "ARTRELADOS. Teoria da Cobertura Têxtil e Densidades Ópticas no Bordado Digital. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-077-seletor-de-cores-eletronico",
    code: "S-077",
    letter: "S",
    term: "Seletor de Cores Eletrônico (Electronic Thread Color Selector / Solenoid Changer)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim selector (aquele que escolhe) e do grego elektron (âmbar/eletricidade). Sistema mecatrônico introduzido nas máquinas multiagulhas automáticas.",
    summary: "Mecanismo eletromecânico que movimenta o bloco de agulhas e engata a cor correta em frações de segundo.",
    definition: "O Seletor de Cores Eletrônico (Electronic Color Change Mechanism / Needle Bar Selector / Solenoid Needle Changer) é o subsistema mecatrônico presente em máquinas de bordar industriais e semi-industriais multicabeças/multiagulhas (de 4 a 15 ou mais agulhas por cabeçote) encarregado de deslocar linearmente o carro de agulhas (Color Change Box) e engatar a barra de agulha correspondente à cor requisitada pelo comando da matriz.",
    technicalDetails: "O sistema opera através de um servomotor de passo ou fuso sem-fim com sensor óptico/encoder linear de posicionamento absoluto, sincronizado com o eixo principal (Main Shaft) a 100° do ciclo de rotação. Um came excêntrico com roletes de engate seleciona a barra de agulha com tolerância posicional inferior a ± 0,05 mm, completando a troca de cor em menos de 1,2 a 1,8 segundos.",
    beginnerExplanation: "É o mecanismo que faz a máquina 'andar para o lado' com o bloco das agulhas e escolher sozinha a agulha 1, 2, 3 ou 4 de acordo com a cor da linha que o desenho precisa, sem você ter que trocar de linha na mão.",
    howItWorks: [
      "1. A controladora lê o comando de troca de cor (Color Change Command / Stop) na matriz.",
      "2. O eixo principal para no ângulo de parada calibrado (geralmente 100° ou 172°).",
      "3. O motor do trocador de cores gira o fuso de comando.",
      "4. O carro com todas as agulhas desliza para a esquerda ou direita sobre trilhos retificados.",
      "5. O sensor óptico detecta o número da agulha solicitada e trava a posição.",
      "6. A alavanca de engate acopla a nova agulha ao eixo de costura e o bordado recomeça imediatamente."
    ],
    construction: [
      "Carro de cabeçote em liga de alumínio fundido e retificado",
      "Fuso sem-fim de passo helicoidal com motor de troca de cor",
      "Disco codificador óptico ou sensor magnético Hall de posição de agulha",
      "Garras de engate com roletes de aço temperado"
    ],
    mainTypes: [
      "Trocador Linear por Fuso e Motor de Passo (Padrão Industrial)",
      "Trocador por Came Rotativo Cilíndrico (Rotary Cam Color Changer)",
      "Trocador Eletrônico Compacto para Máquinas Semi-Industriais de 6 a 10 Agulhas"
    ],
    characteristics: [
      "Troca de cor automatizada e silenciosa em menos de 2 segundos",
      "Eliminação total de intervenção manual para troca de cones",
      "Sensor de segurança que impede a costura se a agulha não estiver 100% travada"
    ],
    applications: [
      "Máquinas multiagulhas de 6, 10, 12 e 15 agulhas (Brother PR, Tajima, Barudan, Happy, SWF).",
      "Produção de matrizes multicoloridas em larga escala.",
      "Calibração mecânica de alinhamento de cabeçote por técnicos especializados."
    ],
    commonErrors: [
      "❌ Tentar empurrar o carro de agulhas com as mãos forçando os motores enquanto a máquina está ligada",
      "❌ Deixar fios de linha soltos caírem dentro do trilho do fuso do seletor, travando a troca de cor",
      "❌ Operar com o sensor óptico do trocador sujo de poeira, gerando erro de 'Color Change Timeout'"
    ],
    troubleshootingTips: [
      "Mensagem de erro 'Color Change Error' ou 'Needle Position Error': Limpe o sensor óptico do cabeçote com ar comprimido e verifique se não há fio enroscado no fuso.",
      "Máquina engatando a agulha errada: Faça a calibração de origem de troca de cor (Color Change Origin Reset) no menu de manutenção do painel.",
      "Barulho estalado forte ao trocar de agulha: Lubrifique o fuso helicoidal e a barra guia com óleo branco mineral ou graxa fina apropriada."
    ],
    dicaArtrelados: "Em máquinas multiagulhas, mantenha sempre a ordem das linhas organizada no painel da máquina! Se você colocar a linha azul na agulha 3, avise no painel que a agulha 3 é a cor azul. Assim o seletor eletrônico faz todo o trabalho sozinho e você só senta e aprecia o show!",
    voceSabia: "As primeiras máquinas multiagulhas automáticas surgiram no Japão na década de 1970; antes disso, para cada cor diferente era necessário parar a máquina, cortar o fio e enfiar a agulha manualmente!",
    practicalExercise: "No painel da sua máquina multiagulhas, entre no menu de teste manual e comande a troca da agulha 1 para a agulha 6. Observe o movimento suave do carro deslizando sobre a guia e ouvindo o clique seguro do travamento da agulha.",
    quickSummary: "Sistema mecatrônico que move o cabeçote e engata automaticamente a agulha com a cor correta em máquinas multiagulhas.",
    recommendedSettings: {
      speedPPM: "Troca em ângulo de parada 100°",
      needleType: "Sistema DBxK5 ou 130/705H",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Máquina Multiagulhas",
      "Troca de Cor (Color Change)",
      "Came de Troca de Cor",
      "Sensor Óptico de Posição",
      "Manutenção Preventiva"
    ],
    tags: ["s-077", "seletor de cores", "multiagulhas", "mecanica", "eletronica", "troca de linha", "artrelados"],
    bibliographicReferences: [
      "TAJIMA INDUSTRIAL MACHINERY. Needle Bar Selection & Color Change Electronic Troubleshooting. Nagoya, 2022.",
      "BROTHER INDUSTRIES. Multi-Needle Embroidery Mechanism & Sensor Calibration Manual. Nagoya, 2021.",
      "ARTRELADOS. Mecatrônica Têxtil: Sistemas de Seleção de Cor e Automação de Cabeçotes. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-078-sensor-de-quebra-de-linha-superior",
    code: "S-078",
    letter: "S",
    term: "Sensor de Quebra de Linha Superior (Upper Thread Break Rotary Optical Sensor)",
    level: "Intermediário 🟡",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim sensus (percepção) e do grego optikos (relativo à visão). Dispositivo eletro-óptico introduzido para automação da costura industrial.",
    summary: "Dispositivo com rodinha giratória ou sensor óptico que monitora a passagem da linha e para a máquina se o fio arrebentar.",
    definition: "O Sensor de Quebra de Linha Superior (Upper Thread Break Rotary Optical Sensor / Thread Motion Sensor / Sensor de Linha Superior) é o dispositivo eletro-óptico posicionado na trajetória superior da linha de bordar (entre os tensores principais e a mola tira-fio). Ele é composto por uma roldana plástica com ranhuras codificadas e um sensor óptico infravermelho emissor/receptor. Conforme a linha é puxada a cada descida da agulha, a roldana gira e gera pulsos elétricos de frequência contínua; se a linha romper, o giro cessa e a máquina para o bordado em menos de 2 a 4 pontos.",
    technicalDetails: "A placa eletrônica monitora o número de rotações por ciclo do eixo principal. Se não houver transição de estado no fototransistor durante 3 a 5 pulsos de encoder do eixo principal (aproximadamente 3 a 5 pontos sem giro), o microprocessador dispara a interrupção de emergência (Thread Break Stop), recua a matriz automaticamente de 3 a 5 pontos e emite alerta sonoro e visual.",
    beginnerExplanation: "É uma rodinha mágica por onde a linha passa antes de chegar na agulha. Enquanto a máquina borda, a linha faz a rodinha girar. Se a linha quebrar ou o cone acabar, a rodinha para, a máquina percebe na hora e desliga sozinha para não estragar o bordado.",
    howItWorks: [
      "1. A linha superior é passada dando uma volta completa na ranhura da roldana do sensor.",
      "2. A cada ponto bordado, o movimento da linha faz a roldana girar.",
      "3. As fendas da roldana interrompem o feixe de luz infravermelha gerando pulsos digitais.",
      "4. A placa-mãe confirma que a linha está correndo normalmente.",
      "5. Se o fio arrebentar, a roldana para imediatamente.",
      "6. A máquina aciona o freio motor, para no ponto certo e avisa no visor qual agulha quebrou a linha."
    ],
    construction: [
      "Roldana plástica leve com anel de borracha antiderrapante ou ranhura em V",
      "Disco codificador com fendas ópticas radiais",
      "Sensor fototransistor infravermelho de alta velocidade",
      "Circuito integrado condicionador de sinal com LED indicador"
    ],
    mainTypes: [
      "Sensor de Roldana Óptica Rotativa (Rotary Optical Thread Sensor)",
      "Sensor de Disco de Contato Eletrônico",
      "Sensor Piezoelétrico de Vibração por Contato Cerâmico"
    ],
    characteristics: [
      "Detecção de quebra quase instantânea (em 2 a 4 pontos)",
      "Função de retorno automático da matriz para cobrir a falha",
      "Sensibilidade programável no visor da máquina"
    ],
    applications: [
      "Monitoramento contínuo em máquinas domésticas e industriais.",
      "Prevenção de falhas com agulha costurando no vazio.",
      "Bordados em peças de alto valor onde erros de costura no vazio seriam fatais."
    ],
    commonErrors: [
      "❌ Passar a linha sem dar a volta completa na roldana, fazendo o sensor não girar e dar alarme falso a cada 5 segundos",
      "❌ Deixar fiapos e poeira acumulados na fenda do sensor óptico",
      "❌ Usar linha excessivamente encerada ou escorregadia que desliza sem fazer a rodinha girar"
    ],
    troubleshootingTips: [
      "Máquina parando com alarme de linha quebrada mesmo com a linha inteira: A linha está frouxa na roldana; passe a linha dando duas voltas completas na rodinha do sensor ou limpe a lente óptica com um pincel macio.",
      "Máquina continua bordando por 30 pontos após a linha arrebentar: A sensibilidade do sensor está muito baixa; entre nas configurações da máquina e aumente a sensibilidade de quebra de linha.",
      "Sensor travado sem girar: Remova fiapos de linha enrolados no eixo da roldana usando uma pinça fina."
    ],
    dicaArtrelados: "Se a sua máquina estiver acusando quebra de linha falsa toda hora: verifique a passagem da linha no sensor! Dê uma voltinha a mais de 360 graus na rodinha do sensor. Isso cria tração suficiente para a rodinha girar perfeitamente sem escorregar e acaba com os alarmes falsos!",
    voceSabia: "Antes da invenção dos sensores ópticos nos anos 80, as máquinas usavam pequenos arames de metal que encostavam numa barra elétrica quando a linha afrouxava, mas eles entortavam facilmente com a vibração!",
    practicalExercise: "Abra a tampa superior ou observe a passagem da linha da sua máquina. Puxe a ponta da linha devagar com a mão e veja a rodinha do sensor girando suavemente acompanhando o movimento do fio.",
    quickSummary: "Dispositivo eletro-óptico que monitora a rotação da linha e desliga a máquina automaticamente se o fio quebrar.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades operacionais",
      needleType: "Compatível",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Quebra de Linha (Thread Break)",
      "Sensor de Linha de Bobina",
      "Alavanca Estica-Linha (Take-up Lever)",
      "Recuo de Pontos (Stitch Backtrack)",
      "Manutenção Preventiva"
    ],
    tags: ["s-078", "sensor de linha", "quebra de linha", "optico", "mecanica", "eletronica", "artrelados"],
    bibliographicReferences: [
      "TAJIMA TECHNICAL SERVICE. Optical Thread Break Sensor Calibration & Pulse Timing. Nagoya, 2021.",
      "JANOME SEWING MACHINE CO. Electronic Thread Detection Systems Manual. Tokyo, 2022.",
      "ARTRELADOS. Sensores Eletrônicos, Diagnósticos e Solução de Erros em Máquinas de Bordar. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-079-sensor-de-fim-de-linha-de-bobina",
    code: "S-079",
    letter: "S",
    term: "Sensor de Fim de Linha de Bobina (Under-Thread / Bobbin Empty Optical Sensor)",
    level: "Intermediário 🟡",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do inglês bobbin sensor e do latim sensus. Inovação para evitar costura sem laço inferior em máquinas industriais e domésticas.",
    summary: "Sensor inteligente que avisa quando a linha da carretilha está acabando antes de falhar o bordado.",
    definition: "O Sensor de Fim de Linha de Bobina (Bobbin Thread Remaining Sensor / Optical Under-Thread Monitor / Detector de Linha Inferior) é o sistema eletrônico instalado na região da caixa de bobina ou no circuito de controle do cabeçote que calcula ou detecta por feixe óptico/laser a quantidade restante de linha na carretilha. Quando a espessura do enrolamento de fio cai abaixo de um nível crítico de reserva (tipicamente entre 5 e 10 metros de fio restante), o sensor dispara um aviso no painel, permitindo ao operador trocar a bobina antes que a máquina borde no vazio.",
    technicalDetails: "Funciona por feixe infravermelho refletivo ou transmissivo através de orifícios calibrados na caixa de bobina, ou por contagem volumétrica de pontos e comprimento consumido calculada pelo DSP da máquina. Em modelos industriais, a precisão da detecção permite parar a máquina exatamente ao término de um objeto fechado para troca limpa de carretilha.",
    beginnerExplanation: "É o 'medidor de combustível' da carretilha da sua máquina! Ele avisa com uma luzinha ou mensagem no visor quando a linha de baixo está quase no finalzinho, para você trocar a bobina com calma antes de acabar a linha no meio do desenho.",
    howItWorks: [
      "1. A carretilha com linha inferior cheia é colocada na caixa de bobina.",
      "2. Um micro-sensor emite um feixe de luz invisível contra o corpo da bobina.",
      "3. Enquanto há linha grossa enrolada, a luz é bloqueada ou refletida pelo fio branco.",
      "4. Quando a linha acaba e chega perto do miolo metálico/plástico, a reflexão de luz muda.",
      "5. A placa-mãe detecta o sinal de reserva baixa e pausa a máquina com a agulha para cima.",
      "6. O operador abre a tampa, coloca uma bobina cheia e continua o bordado sem falhar um único ponto."
    ],
    construction: [
      "Emissor e receptor infravermelho de alta sensibilidade na base da lançadeira",
      "Caixa de bobina com janelas ópticas laterais usinadas a laser",
      "Módulo de contagem algorítmica de pontos no software da máquina",
      "Alarme sonoro e sinalizador luminoso no painel"
    ],
    mainTypes: [
      "Sensor Óptico Infravermelho Direto na Caixa de Bobina",
      "Sensor Digital por Contagem de Pontos e Consumo Médio (Stitch Counter)",
      "Sensor Magnético de Giro Inercial da Carretilha"
    ],
    characteristics: [
      "Eliminação de bordados com falhas no avesso por bobina vazia",
      "Aviso com margem de segurança de alguns metros de linha",
      "Preservação do tempo de produção em peças grandes"
    ],
    applications: [
      "Bordados em peças grandes, toalhas de banho e colchas.",
      "Produção noturna automatizada e ateliês com alta demanda.",
      "Máquinas domésticas modernas e industriais multicabeças."
    ],
    commonErrors: [
      "❌ Deixar acumular fiapos de linha e poeira branca na lente do sensor embaixo da chapa da agulha",
      "❌ Usar carretilhas de plástico opaco ou cores escuras em máquinas que exigem carretilha transparente para leitura óptica",
      "❌ Ignorar o aviso de bobina baixa e forçar a máquina a continuar até acabar tudo"
    ],
    troubleshootingTips: [
      "Máquina avisando 'Bobina Vazia' mesmo com a carretilha cheia: Limpe a área da lançadeira e as lentes do sensor com um pincel macio para tirar a poeira de linha acumulada.",
      "A linha de baixo acabou e a máquina não avisou: Verifique se o sensor de bobina está ativado no menu de ajustes da máquina ou use a carretilha recomendada pelo fabricante.",
      "Falso alarme após trocar de marca de linha: Algumas linhas pretas absorvem a luz do sensor; calibre a sensibilidade de leitura no painel de configurações."
    ],
    dicaArtrelados: "Ao começar uma toalha grande ou matriz com mais de 20 mil pontos: dê uma espiadinha na bobina antes de apertar o start! Se a bobina tiver menos da metade, troque logo por uma cheinha. É muito mais gostoso e rápido bordar tudo de uma vez sem interrupções!",
    voceSabia: "Em máquinas industriais de 20 cabeças, se uma única bobina acabar e não for detectada, a máquina pode continuar bordando no vazio por milhares de pontos, estragando uma peça inteira e exigindo horas de conserto!",
    practicalExercise: "Retire a chapa da agulha da sua máquina e, com a ajuda de uma lanterna, localize as pequenas aberturas ou lentes perto da lançadeira onde fica o sensor de bobina. Limpe cuidadosamente com um pincel macio.",
    quickSummary: "Sensor inteligente que monitora a quantidade de linha na carretilha e avisa antes de o fio de baixo acabar.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades",
      needleType: "Compatível",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Caixa de Bobina (Bobbin Case)",
      "Linha de Bobina (Bobbin Thread)",
      "Lançadeira Rotativa",
      "Sensor de Linha Superior",
      "Manutenção Preventiva"
    ],
    tags: ["s-079", "sensor de bobina", "carretilha", "linha de baixo", "optico", "mecanica", "artrelados"],
    bibliographicReferences: [
      "BROTHER EMBROIDERY TECH. Bobbin Thread Sensor Alignment and Maintenance Guide. Nagoya, 2022.",
      "TAJIMA INDUSTRIAL GROUP. Under-Thread Monitoring Systems in Multi-Head Machines. Nagoya, 2021.",
      "ARTRELADOS. Guia de Sensores e Sistemas Eletrônicos de Segurança no Bordado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-080-sentido-do-fio-do-tecido",
    code: "S-080",
    letter: "S",
    term: "Sentido do Fio do Tecido (Fabric Grainline Alignment)",
    level: "Iniciante 🟢",
    category: "Física e Comportamento dos Tecidos",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim sensus (direção/orientação) e filum (fio). Conceito fundamental da engenharia e alfaiataria têxtil tradicional.",
    summary: "Orientação da trama e do urdume no bastidor que define como o tecido estica e como os pontos devem ser programados.",
    definition: "O Sentido do Fio do Tecido (Fabric Grainline Alignment / Urdume, Trama e Viés / Alinhamento Estrutural Têxtil) é a orientação geométrica dos fios que compõem a estrutura entrelaçada do tecido em relação aos eixos X e Y do bastidor de bordar. Compreende o Fio Reto ou Urdume (fios longitudinais paralelos à ourela, com menor elasticidade), o Fio Atravessado ou Trama (fios transversais a 90°, com elasticidade moderada) e o Viés (linha diagonal a 45°, com máxima deformação elástica por cisalhamento).",
    technicalDetails: "A direção do ângulo de ponto da matriz deve ser planejada respeitando o sentido do fio do tecido. Pontos executados paralelamente ao urdume sofrem menor repuxamento longitudinal, enquanto pontos bordados a 45° (no viés) geram o máximo repuxamento diagonal e exigem maior compensação de repuxo (+0.40 mm a +0.50 mm) e costuras de base reforçadas.",
    beginnerExplanation: "Todo tecido é feito de fios que correm em pé (urdume) e fios deitados (trama). Saber o sentido do fio é posicionar o tecido retinho dentro do bastidor, sem ficar torto na diagonal, para o bordado não repuxar e o desenho não ficar deformado.",
    howItWorks: [
      "1. A bordadeira identifica a ourela (borda de fábrica) ou puxa suavemente o tecido para sentir a direção do fio reto.",
      "2. Posiciona o tecido no bastidor com o fio reto perfeitamente alinhado com as marcas guia do aro.",
      "3. O tecido é tensionado por igual nos quatro lados sem torção diagonal.",
      "4. Os pontos da matriz atuam de forma previsível sobre a estrutura dos fios.",
      "5. O bordado fica totalmente plano, sem pregas e sem enrugamento ao retirar do bastidor."
    ],
    construction: [
      "Fios de Urdume (Warp - sentido longitudinal / menor elasticidade)",
      "Fios de Trama (Weft - sentido transversal / elasticidade média)",
      "Eixo do Viés (Bias - ângulo a 45° / máxima elasticidade)",
      "Alinhamento com as linhas de centro do bastidor"
    ],
    mainTypes: [
      "Alinhamento no Fio Reto / Urdume (Padrão para Camisas e Toalhas)",
      "Alinhamento no Fio de Trama (Transversal)",
      "Cuidados Especiais com Peças Cortadas no Viés"
    ],
    characteristics: [
      "Base de sustentação firme e sem distorções geométricas",
      "Encaixe perfeito entre contornos e preenchimentos",
      "Bordados impecáveis mesmo após sucessivas lavagens"
    ],
    applications: [
      "Montagem no bastidor de camisas sociais, uniformes e lençóis de linho.",
      "Programação de ângulos de pontos tatami e cordões de cetim no software.",
      "Bordados em peças de alfaiataria de alto padrão."
    ],
    commonErrors: [
      "❌ Colocar o tecido torto no bastidor com os fios enviesados, fazendo a peça entortar após a lavagem",
      "❌ Puxar o tecido mais de um lado do que do outro ao apertar o parafuso do bastidor",
      "❌ Programar todos os pontos exatamente paralelos aos fios do tecido em tramas abertas"
    ],
    troubleshootingTips: [
      "Se o bordado repuxou e entortou a camisa: O tecido foi colocado enviesado no bastidor; use um gabarito de alinhamento com régua para alinhar o fio do tecido com o centro do bastidor.",
      "Se os pontos afundaram entre os fios do linho: Mude o ângulo dos pontos de preenchimento para que fiquem a 30° ou 60° em relação aos fios do tecido.",
      "Se o desenho circular ficou ovalado: O tecido foi esticado excessivamente no sentido da trama ao ser preso no aro."
    ],
    dicaArtrelados: "Use as marquinhas centrais que vêm gravadas na borda do seu bastidor como mira! Alinhe uma linha do fio da camisa ou a barra da toalha com esses risquinhos do bastidor. Assim o tecido entra 100% reto e seu bordado nunca mais fica torto!",
    voceSabia: "A palavra 'urdume' vem do latim 'ordiri', que significa 'começar uma obra ou tecer', pois na tecelagem manual os primeiros fios esticados no tear eram os fios do urdume!",
    practicalExercise: "Pegue um retalho de tricoline de algodão: desfie um fio da borda para ver a linha reta do urdume. Agora puxe o tecido no sentido do fio (ele é firme) e puxe na diagonal (ele estica). Sinta essa diferença fundamental nas suas mãos.",
    quickSummary: "Orientação dos fios da trama e urdume do tecido no bastidor que garante estabilidade e evita distorções no bordado.",
    recommendedSettings: {
      speedPPM: "750 a 900 PPM",
      needleType: "75/11 Ponta Fina ou Bola Pequena",
      stabilizer: "Entretela compatível com a estrutura do tecido"
    },
    relatedTerms: [
      "Urdume e Trama (Warp and Weft)",
      "Viés do Tecido (Bias Grain)",
      "Colocação no Bastidor (Hooping)",
      "Compensação de Repuxo",
      "Ângulo de Ponto"
    ],
    tags: ["s-080", "sentido do fio", "urdume", "trama", "vies", "tecidos", "fisica textil", "artrelados"],
    bibliographicReferences: [
      "TEXTILE INSTITUTE INTERNATIONAL. Woven Fabric Structures: Warp, Weft and Bias Mechanics. Manchester, 2021.",
      "WILCOM EMBROIDERY STUDIO. Fabric Grainline Alignment & Stitch Angle Interplay. Sydney, 2023.",
      "ARTRELADOS. Manual de Física Têxtil e Enquadramento Perfeito no Bastidor. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-081-sequenciamento-de-camadas-e-otimizacao-de-troca-de-cores",
    code: "S-081",
    letter: "S",
    term: "Sequenciamento de Camadas e Otimização de Troca de Cores (Color Sort & Object Sequencing)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim sequentia (sucessão ordenada) e optimus (o melhor). Engenharia de software aplicada ao fluxo de produção de matrizes.",
    summary: "Ordem lógica de costura que organiza o bordado do fundo para a frente, agrupando cores e evitando cortes e distorções.",
    definition: "O Sequenciamento de Camadas e Otimização de Troca de Cores (Layer Stacking Order & Color Sort Optimization / Ordem de Bordado / Traçado Lógico) é o processo estratégico de planejamento e estruturação da ordem de execução dos objetos que compõem uma matriz de bordado computadorizado. Ele define a hierarquia visual (do fundo para os primeiros planos), a sequência mecânica de ancoragem (do centro para as extremidades para minimizar o deslocamento do tecido) e o agrupamento inteligente de objetos que compartilham a mesma cor de linha para reduzir paradas e cortes desnecessários.",
    technicalDetails: "O algoritmo de sequenciamento deve harmonizar duas forças opostas: a produtividade (agrupar a mesma cor de linha para economizar tempo) e a integridade dimensional (bordar elementos adjacentes para evitar que o tecido encolha e desalinhe os contornos). O sequenciamento correto reduz o tempo total de ciclo em até 40% e elimina sobreposições invertidas de objetos.",
    beginnerExplanation: "É organizar a fila de quem borda primeiro no desenho: primeiro o fundo, depois o corpinho do bichinho, depois os detalhes e por último os olhinhos e contornos. Além disso, junta tudo o que é da mesma cor para você não ficar trocando linha toda hora.",
    howItWorks: [
      "1. A programadora desenha todos os elementos do desenho no software.",
      "2. Organiza os objetos na árvore de camadas: o que está por trás borda primeiro.",
      "3. Define o sentido de costura: do centro do desenho para as bordas externas.",
      "4. Aplica a otimização de cores (Color Sort) agrupando partes da mesma cor que não interfiram nas camadas.",
      "5. Faz a simulação de pontos para garantir que nenhum contorno bordou antes do preenchimento.",
      "6. A máquina executa o bordado de forma fluida, rápida e sem erros de encaixe."
    ],
    construction: [
      "Árvore de objetos e lista de paradas de cor",
      "Hierarquia de profundidade em eixos Z (Stacking Order)",
      "Roteamento de caminhos de conexão interna (Branching)",
      "Comandos de início e término posicionados para conexões limpas"
    ],
    mainTypes: [
      "Sequenciamento por Camadas Visuais (Fundo para Frente)",
      "Sequenciamento Radial de Expansão (Centro para Fora)",
      "Otimização Automática de Cores (Color Sort / Stop Reduction)"
    ],
    characteristics: [
      "Encaixe milimétrico entre preenchimentos e contornos",
      "Redução drástica do tempo de máquina em modelos de 1 agulha",
      "Avesso limpo com o mínimo de fios de corte e nós"
    ],
    applications: [
      "Bordados de personagens infantis, bichinhos e ilustrações complexas.",
      "Matrizes de múltiplos itens no mesmo bastidor (chaveiros, tags, brasões).",
      "Padronização de arquivos profissionais para venda comercial."
    ],
    commonErrors: [
      "❌ Bordar os contornos pretos antes de fazer o preenchimento colorido, fazendo o preenchimento cobrir o contorno",
      "❌ Bordar primeiro a ponta esquerda e depois a ponta direita, empurrando o tecido e criando um papo enrugado no meio",
      "❌ Usar Color Sort automático em matrizes de aplique, estragando as paradas de corte do tecido"
    ],
    troubleshootingTips: [
      "Se o contorno ficou torto e fora do lugar: Mude o sequenciamento para bordar o contorno imediatamente após o preenchimento correspondente, antes do tecido relaxar.",
      "Se o bordado fez um 'papo' no meio: Altere a ordem dos objetos para que o bordado comece do centro e vá empurrando as ondas para fora.",
      "Se a máquina parou 20 vezes para a mesma cor: Abra o software e arraste os objetos da mesma cor para ficarem juntos na lista de camadas."
    ],
    dicaArtrelados: "A regra de ouro do bordado perfeito é: do fundo para a frente, e do centro para as bordas! Pense como se estivesse pintando um quadro: primeiro você pinta o céu, depois a montanha, depois a árvore e por último o fruto na árvore. No bordado eletrônico a lógica é exatamente a mesma!",
    voceSabia: "Em matrizes industriais de alta velocidade, programadores usam uma técnica chamada 'Ramificação' (Branching) que junta até 50 letrinhas de texto em um único bloco contínuo sem nenhum corte de linha e com costura de base automática!",
    practicalExercise: "Abra uma matriz no seu programa e clique no botão do simulador de pontos (Player de costura). Assista a animação do desenho sendo bordado do primeiro ao último ponto e observe se a ordem faz sentido lógico visual.",
    quickSummary: "Organização lógica da ordem de costura dos objetos e cores que garante encaixe perfeito e rapidez na produção.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades operacionais",
      needleType: "Compatível",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Ordem de Bordado (Stitching Order)",
      "Color Sort (Otimização de Cores)",
      "Camadas de Matriz (Layers)",
      "Ramificação (Branching)",
      "Simulador de Pontos"
    ],
    tags: ["s-081", "sequenciamento", "color sort", "camadas", "ordem de bordado", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Sequencing, Branching and Color Sorting Mastery. Sydney, 2023.",
      "PULSE MICROSYS. Vector Layering and Stitch Order Engineering. Toronto, 2022.",
      "ARTRELADOS. O Poder do Sequenciamento Perfeito na Programação de Matrizes. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-082-serifa-no-bordado-eletronico",
    code: "S-082",
    letter: "S",
    term: "Serifa no Bordado Eletrônico (Serif Stitching in Lettering)",
    level: "Avançado 🔴",
    category: "Programação de Bordado",
    grammarClass: "Substantivo feminino.",
    origin: "Do holandês schreef (linha/traço) e do latim scribere (escrever). Elemento clássico da tipografia romana adaptado à mecatrônica do bordado.",
    summary: "Técnica de programação dos pequenos traços e pezinhos decorativos nas pontas das letras clássicas (como Times New Roman).",
    definition: "A Serifa no Bordado Eletrônico (Serif Stitching in Lettering / Tipografia Serifada Bordada / Terminal Stitch Construction) é o método técnico de digitalização e costura dos pequenos prolongamentos, traços transversais ou 'pezinhos' decorativos posicionados nas extremidades das hastes das letras de fontes tipográficas clássicas (fontes serifadas como Times New Roman, Garamond, Bodoni). Devido às pequenas dimensões dessas terminações (muitas vezes menores que 1,5 mm), a serifa exige controle rigoroso de sobreposição de pontos, afunilamento de cordão e distribuição de micro-pontos para não criar nós grossos nem deformações triangulares.",
    technicalDetails: "As serifas devem ser programadas com pontos de cetim com ângulo ortogonal ou suavemente chanfrado em relação à haste principal. Em letras menores que 10 mm de altura, utiliza-se a técnica de 'Serifa Encaixada' (T-Junction / Overlap Insertion) com redução de densidade para 0.45 mm no ponto de junção e recuo da costura de base, evitando o acúmulo de mais de 4 camadas de linha no mesmo ponto de perfuração.",
    beginnerExplanation: "São aqueles 'pezinhos' e tracinhos charmosos que ficam nas pontas das letras elegantes (como nas letras de diplomas e convites de casamento). No bordado, como esses pezinhos são pequenininhos, o programador precisa desenhar com cuidado especial para a agulha não embolar linha e a letra ficar bem nítida.",
    howItWorks: [
      "1. A programadora desenha a haste principal da letra com ponto de cordão de cetim.",
      "2. Digitaliza a serifa como um objeto separado ou integrado com ângulo de ponto específico.",
      "3. Aplica uma leve sobreposição (Overlap de 0,3 mm) para que o pezinho fique perfeitamente grudado na perna da letra.",
      "4. Suprime a costura de base dentro da serifa minúscula para não engrossar a ponta.",
      "5. A máquina borda o pezinho com nitidez geométrica perfeita e brilho acetinado.",
      "6. A letra final fica com visual nobre, legível e digno de monogramas de luxo."
    ],
    construction: [
      "Haste principal em ponto cheio (Satin)",
      "Terminal serifado com angulação direcionada",
      "Controle de densidade fracionada no ponto de junção",
      "Eliminação de micro-pontos de amarração dentro de serifas finas"
    ],
    mainTypes: [
      "Serifa Triangular / Romana Clássica (Bracketed Serif)",
      "Serifa Reta / Quadrada (Slab Serif / Egípcia)",
      "Serifa Fina / Cabelo (Hairline Serif para Letras Grandes)",
      "Micro-Serifa Adaptada para Letras Pequenas"
    ],
    characteristics: [
      "Elegância visual incomparável para monogramas e brasões clássicos",
      "Exige fios finos (60wt) e agulhas delicadas em textos pequenos",
      "Alta definição das pontas sem arredondamento indesejado"
    ],
    applications: [
      "Bordado de monogramas em enxovais de casamento e lençóis de luxo.",
      "Textos elegantes em jalecos médicos, toalhas de lavabo e brasões de família.",
      "Logotipos institucionais e marcas corporativas de prestígio."
    ],
    commonErrors: [
      "❌ Bordar letras serifadas de 5 mm com linha comum grossa e agulha 90/14, transformando os pezinhos em bolinhas disformes",
      "❌ Colocar costura de base pesada dentro de serifas pequenininhas, furando e rasgando o tecido",
      "❌ Deixar espaço vazio entre a haste da letra e a serifa por falta de sobreposição"
    ],
    troubleshootingTips: [
      "Se os pezinhos das letras ficarem como caroços redondos e duros: Reduza a densidade da serifa no software e troque a agulha para uma 65/9 ou 70/10 Ponta Aguda.",
      "Se as pontas das letras sumirem na toalha: Coloque plástico hidrossolúvel por cima da toalha e use fonte serifada com pezinhos mais encorpados.",
      "Se a linha quebrar toda vez que faz a serifa: Desative os nós de amarração automáticos dentro das serifas menores que 2 mm."
    ],
    dicaArtrelados: "Para bordar nomes com fontes elegantes cheias de detalhes e pezinhos em jalecos: use linha mais fina (título 60wt) e agulha fina 65/9! As serifas ficam tão nítidas e perfeitas que parecem ter sido impressas por uma gráfica de luxo!",
    voceSabia: "As serifas surgiram na Roma Antiga, quando os artesãos que esculpiam letras no mármore davam pequenos golpes de cinzel nas pontas para limpar os cantos das letras e evitar que a pedra rachasse!",
    practicalExercise: "Escreva a letra 'H' com uma fonte serifada (Times) e uma letra 'H' com fonte reta sem serifa (Arial) no seu programa de bordado com 2 cm de altura. Observe as diferenças nos pontos e na angulação das terminações.",
    quickSummary: "Técnica de programação dos pezinhos e acabamentos decorativos das letras clássicas para garantir nitidez e elegância.",
    recommendedSettings: {
      density: "0.40 mm (com alívio para 0.48 mm nas junções)",
      speedPPM: "650 a 750 PPM para máxima nitidez",
      needleType: "65/9 ou 70/10 Ponta Aguda",
      stabilizer: "Entretela recortável firme"
    },
    relatedTerms: [
      "Tipografia no Bordado (Embroidery Lettering)",
      "Ponto Cheio / Cetim (Satin Stitch)",
      "Linha Fina 60wt",
      "Monograma de Luxo",
      "Microletras"
    ],
    tags: ["s-082", "serifa", "letras", "tipografia", "monogramas", "programacao", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Typography and Lettering Digitizing Masterclass. Sydney, 2023.",
      "PULSE MICROSYS. Font Creation and Serif Terminal Engineering. Toronto, 2022.",
      "ARTRELADOS. A Arte da Tipografia e Monogramas Nobres no Bordado Computadorizado. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-083-servomotor-de-acionamento-direto",
    code: "S-083",
    letter: "S",
    term: "Servomotor de Acionamento Direto (Direct Drive AC Servo Motor)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim servus (que obedece fielmente aos comandos) e do inglês direct drive (transmissão direta sem correias). Tecnologia pioneira da automação robótica moderna.",
    summary: "Motor inteligente acoplado direto no eixo da máquina que proporciona paradas milimétricas, menos ruído e zero vibração.",
    definition: "O Servomotor de Acionamento Direto (Direct Drive AC Servo Motor / Servomotor Integrado / Transmissão Direta) é o sistema de propulsão eletromecânica de alta tecnologia instalado diretamente sobre o eixo principal (Main Shaft) do cabeçote da máquina de bordar, eliminando correias de transmissão intermediárias, polias e embreagens mecânicas. Controlado por algoritmos vetoriais DSP em malha fechada (Closed Loop Vector Control), ele proporciona torque máximo instantâneo desde zero RPM, controle milimétrico do ângulo de parada da agulha e operação ultrassilenciosa com economia de energia de até 70%.",
    technicalDetails: "Utiliza rotor com ímãs permanentes de terras raras (Neodímio) e estator trifásico sem escovas (Brushless). Acompanhado de encoder óptico absoluto com resolução superior a 4.096 pulsos por revolução, permite desaceleração e parada controlada em menos de 1/20 de volta com precisão angular de ± 0,2 graus, permitindo paradas perfeitas para corte de linha a 1.000 PPM.",
    beginnerExplanation: "É o motor de última geração que fica colado direto no eixo da máquina, sem correias no meio. Ele é super silencioso, não esquenta, gasta pouquíssima energia e faz a máquina parar a agulha na posição exata como um relógio suíço.",
    howItWorks: [
      "1. A placa controladora envia comandos de velocidade e posição ao servodrive.",
      "2. O servomotor gira o eixo principal de forma suave e instantânea.",
      "3. O encoder lê a posição angular da agulha milhares de vezes por segundo.",
      "4. Conforme o bordado acelera até 1.000 PPM, o motor ajusta o torque para manter a velocidade constante.",
      "5. Ao receber o comando de corte ou parada, o motor freia magneticamente e posiciona a agulha no ângulo exato.",
      "6. Elimina as vibrações mecânicas, deixando a máquina estável e silenciosa."
    ],
    construction: [
      "Motor AC síncrono de ímãs permanentes (PMSM Brushless)",
      "Acoplamento direto flangeado no eixo principal",
      "Encoder óptico de alta resolução integrado",
      "Módulo de potência com transistor IGBT de resposta ultrarrápida"
    ],
    mainTypes: [
      "Servomotor Direct Drive para Máquinas Industriais Multicabeças",
      "Servomotor Compacto Integrado para Máquinas Domésticas Modernas",
      "Servomotores Digitais dos Eixos X e Y do Pantógrafo"
    ],
    characteristics: [
      "Economia de até 70% na conta de energia elétrica do ateliê",
      "Nível de ruído e vibração até 80% menor que motores antigos",
      "Zero manutenção: sem correias para trocar ou embreagens para desgastar"
    ],
    applications: [
      "Máquinas de bordar modernas industriais (Tajima, Barudan, Happy, SunSpecial, Richpeace).",
      "Bordadeiras computadorizadas domésticas de alta gama.",
      "Ateliês em apartamentos e ambientes residenciais que exigem baixo ruído."
    ],
    commonErrors: [
      "❌ Ligar a máquina em rede elétrica com oscilação severa de voltagem sem filtro de linha ou nobreak de proteção",
      "❌ Tentar girar o volante com força excessiva enquanto o servomotor está travado e energizado",
      "❌ Obstruir as aletas de ventilação do servodrive com tecidos ou entretelas"
    ],
    troubleshootingTips: [
      "Mensagem 'Main Motor Error' ou 'Servo Alarm': Desligue a máquina, aguarde 30 segundos e ligue novamente; verifique se não há linha enrolada travando o volante.",
      "A agulha não para na altura certa após cortar a linha: Faça a calibração do ângulo de parada de agulha (Origin Angle Alignment) no menu de configurações do painel.",
      "Máquina trepidando em alta velocidade: Verifique o nivelamento dos pés da bancada e os parâmetros de aceleração no servodrive."
    ],
    dicaArtrelados: "Máquinas modernas com motor Direct Drive são uma benção para quem trabalha em casa ou apartamento! Elas são tão silenciosas e macias que você pode bordar à noite sem incomodar a família ou os vizinhos, além de economizar bastante na conta de luz no final do mês!",
    voceSabia: "Os primeiros motores de máquinas de costura e bordado nos anos 60 eram motores de indução que ficavam ligados roncando alto o tempo todo embaixo da mesa, e a máquina só andava quando o operador pisava numa embreagem pesada de couro!",
    practicalExercise: "Ao ligar a sua máquina, repare no silêncio total quando ela está parada esperando você apertar o botão verde. Ao iniciar o bordado, sinta como a aceleração é suave e sem solavancos bruscos graças à tecnologia do servomotor.",
    quickSummary: "Motor moderno de alta precisão acoplado direto ao eixo que garante paradas perfeitas, economia de energia e silêncio total.",
    recommendedSettings: {
      speedPPM: "Capacidade de 400 a 1200 PPM com controle de curva S",
      needleType: "Padrão",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Eixo Principal (Main Shaft)",
      "Encoder Óptico",
      "Ângulo de Parada da Agulha",
      "Consumo Energético",
      "Mecatrônica Têxtil"
    ],
    tags: ["s-083", "servomotor", "direct drive", "motor", "mecanica", "eletronica", "silencioso", "artrelados"],
    bibliographicReferences: [
      "TAJIMA PRECISION MACHINERY. AC Servo Direct Drive Kinematics & Maintenance. Nagoya, 2022.",
      "MITSUBISHI ELECTRIC. Industrial Sewing & Embroidery Servo Motor Engineering. Tokyo, 2021.",
      "ARTRELADOS. Motores, Drivers e Engenharia Elétrica Aplicada a Máquinas de Bordar. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-084-sincronismo-de-lancadeira-e-agulha",
    code: "S-084",
    letter: "S",
    term: "Sincronismo de Lançadeira e Agulha (Rotary Hook Timing & Needle Synchronization)",
    level: "Avançado 🔴",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do grego syn (junto) e chronos (tempo). O ajuste mecânico mais nobre e fundamental de toda a engenharia de costura.",
    summary: "Regulagem milimétrica do encontro entre a ponta da lançadeira e o laço da linha na subida da agulha para nunca falhar ponto.",
    definition: "O Sincronismo de Lançadeira e Agulha (Rotary Hook Timing / Ponto de Laçada / Calibração de Tempo Mecânico da Lançadeira) é o ajuste de precisão angular e espacial que sincroniza o movimento rotativo contínuo da ponta da lançadeira com o movimento alternativo vertical da barra de agulha. O encontro milimétrico perfeito ocorre quando a agulha atinge o ponto morto inferior (BDC) e sobe exatamente entre 1,8 mm e 2,2 mm: nesse instante exato, forma-se um laço de linha de cerca de 2 mm na cava (scarf) da agulha, e a ponta afiada da lançadeira passa a uma distância crítica de 0,05 mm a 0,10 mm, pescando o laço sem tocar no metal da agulha.",
    technicalDetails: "Se a lançadeira estiver adiantada (Advanced Timing), a ponta chega antes da formação do laço e falha o ponto; se estiver atrasada (Retarded Timing), o laço colapsa e a linha desfia. A folga lateral entre a ponta da lançadeira e o fundo da cava da agulha deve ser medida com calibre de lâminas (0.05 mm a 0.10 mm — espessura de uma folha de papel de seda).",
    beginnerExplanation: "É a 'dança perfeita' da máquina de bordar: embaixo da chapa tem uma pontinha de aço giratória (a lançadeira) que precisa passar raspando atrás da agulha na hora exata em que a agulha começa a subir, pescando a linha superior para dar o ponto. Se esse reloginho desregular, a máquina para de costurar ou quebra a agulha na hora.",
    howItWorks: [
      "1. A agulha desce com a linha superior até o ponto mais baixo (ponto morto inferior).",
      "2. A agulha sobe 2,0 mm, afrouxando a linha e abrindo uma 'barriguinha' (o laço de linha).",
      "3. O eixo da lançadeira gira e posiciona sua ponta afiada exatamente no centro da cava da agulha.",
      "4. A ponta da lançadeira entra por dentro do laço e o expande.",
      "5. A linha superior é puxada ao redor da caixa de bobina, entrelaçando-se com a linha inferior.",
      "6. A alavanca estica-linha sobe e aperta o nó perfeito no centro do tecido."
    ],
    construction: [
      "Lançadeira rotativa em aço carbono temperado retificado",
      "Parafusos de fixação no eixo inferior da lançadeira",
      "Cava da agulha (Needle Scarf) perfeitamente alinhada",
      "Gabarito de altura de barra de agulha e calibrador de lâminas"
    ],
    mainTypes: [
      "Sincronismo Padrão para Máquinas Industriais (Ponto Morto + 2.0 mm / Ângulo ~200°)",
      "Sincronismo com Avanço Leve para Bordados em Bonés e Couro",
      "Sincronismo de Lançadeira Oscilante (em máquinas domésticas antigas)"
    ],
    characteristics: [
      "Formação de pontos 100% perfeita sem pontos pulados",
      "Eliminação de quebra repetitiva de agulhas e desfiamento de linha",
      "Ajuste mestre que define a saúde mecânica da máquina de bordar"
    ],
    applications: [
      "Manutenção preventiva e corretiva após batidas graves de bastidor.",
      "Regulagem obrigatória na troca de lançadeira gasta.",
      "Diagnóstico de máquinas que não formam laçada em nenhuma agulha."
    ],
    commonErrors: [
      "❌ Tentar mexer nos parafusos da lançadeira sem conhecimento técnico, desregulando o ponto completamente",
      "❌ Deixar a lançadeira encostar na agulha (folga zero), fazendo a ponta da lançadeira bater e cegar",
      "❌ Ajustar o tempo com a agulha torta ou instalada na altura errada"
    ],
    troubleshootingTips: [
      "Máquina desce a agulha mas não faz ponto nenhum (a linha sai solta): O sincronismo da lançadeira rodou no eixo após uma batida de agulha; é necessário chamar o técnico para fazer o sincronismo.",
      "A ponta da agulha quebra com estalo no primeiro ponto: A lançadeira está batendo na lateral da agulha; folga incorreta.",
      "Linha desfiando e arrebentando toda hora: Passe a unha na ponta da lançadeira; se sentir uma rebarba áspera deixada por batida de agulha, a lançadeira precisa ser polida com lixa 1200 e pasta de diamante."
    ],
    dicaArtrelados: "Após qualquer batida forte da agulha no aro do bastidor: gire o volante na mão bem devagarzinho para ouvir e sentir se a agulha não está raspando na lançadeira embaixo! Se ouvir um 'clec' de metal com metal, pare na hora para não estragar a ponta da sua lançadeira!",
    voceSabia: "A lançadeira rotativa contínua foi inventada pelo americano Allen B. Wilson em 1851 e é considerada até hoje uma das maiores obras-primas da mecânica de precisão da história da humanidade!",
    practicalExercise: "Retire a chapa de agulha e a caixa de bobina. Gire o volante manual da sua máquina bem devagar e observe com uma boa luz a ponta da lançadeira passando exatamente atrás da agulha no momento em que ela sobe um pouquinho. É pura arte mecânica!",
    quickSummary: "Ajuste de precisão milimétrica que sincroniza a ponta da lançadeira com a subida da agulha para capturar a linha perfeitamente.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades operacionais",
      needleType: "Agulha nova reta (ex: 75/11)",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Lançadeira Rotativa (Rotary Hook)",
      "Cava da Agulha (Scarf)",
      "Formação do Laço (Loop Formation)",
      "Ponto Morto Inferior (BDC)",
      "Manutenção Corretiva"
    ],
    tags: ["s-084", "sincronismo", "lancadeira", "tempo mecanico", "ponto pulado", "mecanica", "regulagem", "artrelados"],
    bibliographicReferences: [
      "KOBAN HOOKS MFG. Technical Rotary Hook Timing & Needle Clearance Standards. Osaka, 2022.",
      "TAJIMA INDUSTRIAL MACHINERY. Rotary Hook Synchronization & Gauge Alignment Manual. Nagoya, 2021.",
      "ARTRELADOS. O Coração da Bordadeira: Guia Completo de Sincronismo e Manutenção de Lançadeiras. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-085-solvente-quimico-para-limpeza-de-bastidor",
    code: "S-085",
    letter: "S",
    term: "Solvente Químico para Limpeza de Bastidor e Remoção de Adesivos (Hoop Cleaner & Adhesive Remover)",
    level: "Iniciante 🟢",
    category: "Estabilizadores & Entretelas",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim solvens (que dissolve) e da química industrial de terpenos e tensoativos de limpeza têxtil.",
    summary: "Produto químico seguro para remover crostas de cola spray e resíduos pegajosos dos aros do bastidor sem ressecar o plástico.",
    definition: "O Solvente Químico para Limpeza de Bastidor e Remoção de Adesivos (Hoop Adhesive Cleaner / Citrus Degreaser / Removedor de Cola de Bordado) é a solução líquida formulada à base de D-Limoneno (solvente natural de óleo de casca de laranja) ou hidrocarbonetos isoparafínicos desodorizados desenvolvida para dissolver polímeros de borracha sintética e resinas pegajosas acumuladas nos aros de plástico e metal dos bastidores pelo uso de sprays adesivos temporários.",
    technicalDetails: "Ao contrário da acetona, tíner ou solventes clorados (que atacam e derretem os polímeros de policarbonato, ABS e nylon dos bastidores, tornando-os esbranquiçados e quebradiços), os limpadores específicos à base de terpenos cítricos possuem pH neutro e solubilizam a cola em menos de 60 segundos por quebra das ligações de tack, sem danificar a estrutura molecular do plástico.",
    beginnerExplanation: "É o produto certo para limpar aquele grude de cola spray que vai juntando nos aros do seu bastidor com o tempo. Ele derrete a colinha fácil sem estragar nem ressecar o plástico do bastidor, deixando tudo limpinho como novo.",
    howItWorks: [
      "1. O operador aplica uma pequena quantidade do solvente cítrico sobre as bordas do bastidor engorduradas de cola.",
      "2. Deixa o produto agir por 1 a 2 minutos para amaciar a crosta pegajosa.",
      "3. Esfrega com uma flanela de microfibra ou esponja macia não abrasiva.",
      "4. A cola se dissolve em uma emulsão fácil de remover.",
      "5. Passa um pano seco ou lava com água morna e sabão neutro.",
      "6. O bastidor fica 100% limpo, liso e pronto para novas peças sem risco de manchar tecidos limpos."
    ],
    construction: [
      "Solvente natural de D-Limoneno cítrico ou óleo mineral leve",
      "Emulsionantes tensoativos biodegradáveis",
      "Fórmula não corrosiva compatível com plásticos de engenharia (ABS/POM/Nylon)",
      "Embalagem com bico dosador ou gatilho pulverizador"
    ],
    mainTypes: [
      "Removedor Cítrico em Spray (Citrus Hoop Cleaner)",
      "Álcool Isopropílico 99% (para limpezas leves diárias)",
      "Lenços Umedecidos Especiais com Solvente Não-Tóxico"
    ],
    characteristics: [
      "Não agride, não resseca e não quebra o plástico dos bastidores",
      "Remove gordura, fiapos grudados e restos de cola rapidamente",
      "Aroma agradável e livre de vapores tóxicos de tíner"
    ],
    applications: [
      "Higienização periódica de bastidores plásticos e magnéticos.",
      "Limpeza de tesourinhas de precisão e pinças engomadas de cola.",
      "Remoção de resíduos de termocolante na mesa de apoio e réguas."
    ],
    commonErrors: [
      "❌ Usar acetona, tíner ou removedor de esmalte nos bastidores (eles derretem e racham o plástico para sempre)",
      "❌ Deixar a cola acumular por meses até criar uma camada grossa que gruda sujeira nos tecidos brancos das clientes",
      "❌ Aplicar o solvente com palha de aço ou esponja verde abrasiva, riscando a superfície do aro"
    ],
    troubleshootingTips: [
      "Bastidor manchando peças brancas com sujeira escura nas bordas: Os aros estão cheios de cola velha que capturou poeira; faça a limpeza completa com removedor cítrico.",
      "Tesourinha de ponta curva travando e grudando: Passe um algodão com álcool isopropílico ou removedor cítrico nas lâminas da tesoura.",
      "Bastidor esbranquiçado e estalando ao apertar: Foi usado solvente inadequado (tíner/acetona) no passado que ressecou o polímero; evite esses produtos."
    ],
    dicaArtrelados: "Nunca, jamais passe acetona, removedor de esmalte ou tíner nos seus bastidores! Esses produtos químicos 'comem' o plástico e deixam o aro frágil e quebradiço. Use removedor cítrico de cola ou óleo mineral de bebê com paninho macio. Seu bastidor vai durar a vida inteira novinho!",
    voceSabia: "O D-Limoneno usado nos melhores limpadores de bastidor é extraído diretamente da casca das laranjas descartadas pelas indústrias de suco concentrado, sendo um dos solventes naturais mais potentes e ecológicos do planeta!",
    practicalExercise: "Pegue o bastidor mais antigo do seu ateliê. Aplique uma gotinha de óleo mineral ou removedor cítrico na borda interna grudenta, espere 1 minuto e passe um pano seco. Veja a sujeira e a cola saírem no pano instantaneamente!",
    quickSummary: "Solvente seguro à base cítrica que dissolve resíduos pegajosos de cola spray nos bastidores sem danificar o plástico.",
    recommendedSettings: {
      speedPPM: "N/A",
      needleType: "N/A",
      stabilizer: "N/A"
    },
    relatedTerms: [
      "Spray Reposicionável",
      "Bastidor de Bordado",
      "Marca de Bastidor (Hoop Burn)",
      "Manutenção do Ateliê",
      "Álcool Isopropílico"
    ],
    tags: ["s-085", "solvente", "limpeza", "bastidor", "removedor de cola", "spray", "manutencao", "artrelados"],
    bibliographicReferences: [
      "3M INDUSTRIAL ADHESIVES. Citrus Based Cleaners & Adhesive Remover Application Guide. St. Paul, 2022.",
      "MADEIRA THREADS. Machine & Hoop Maintenance Chemical Compatibility Reports. Freiburg, 2021.",
      "ARTRELADOS. Higienização, Cuidados e Conservação de Acessórios no Ateliê de Bordados. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-086-subdivisao-de-ponto-longo",
    code: "S-086",
    letter: "S",
    term: "Subdivisão de Ponto Longo (Long Stitch Auto-Split / Jump Split)",
    level: "Intermediário 🟡",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do latim subdivisio (divisão em partes menores) e do inglês auto-split. Algoritmo essencial para estabilidade física de pontos largos.",
    summary: "Recurso do programa que divide pontos de cetim muito compridos (acima de 7 a 9 mm) para não ficarem frouxos nem enroscarem.",
    definition: "A Subdivisão de Ponto Longo (Auto-Split Satin / Divisão Automática de Ponto Cheio / Long Stitch Partition) é o algoritmo de digitalização que intercepta colunas de ponto cheio (cetim) sempre que a distância entre os pontos opostos ultrapassa o comprimento máximo seguro configurado (geralmente entre 7,0 mm e 9,0 mm). O algoritmo insere uma ou mais penetrações de agulha intermediárias regulares ou aleatórias ao longo da extensão do ponto, dividindo a laçada longa em segmentos estáveis sem alterar o aspecto acetinado e a direção visual do objeto.",
    technicalDetails: "Pontos de cetim com comprimento superior a 9 mm perdem a tensão de ancoragem, ficam frouxos, sujeitos a repuxamento por lavagem e correm risco de enroscar em botões, unhas e anéis do usuário final. O algoritmo aplica padrão de divisão alternado (Staggered Split) ou padrão tatami fracionado, preservando a densidade de acabamento e a reflexão da luz.",
    beginnerExplanation: "Quando uma letra ou desenho fica muito largo (mais de 7 a 9 milímetros de largura), a linha do ponto cheio ficaria soltona no ar e enroscaria em qualquer lugar. A divisão automática faz a máquina dar uma 'piscadinha' furando no meio do caminho, deixando a linha bem presinha e bonita no tecido.",
    howItWorks: [
      "1. A programadora desenha uma coluna de ponto de cetim larga (ex: 12 mm de largura).",
      "2. O software detecta que a largura ultrapassa o limite seguro de 7,0 mm.",
      "3. O recurso 'Auto-Split' divide cada linha em dois pontos menores (ex: 6 mm + 6 mm).",
      "4. As perfurações centrais são distribuídas de forma intercalada para não criar uma 'risca' visível no meio.",
      "5. A máquina borda o objeto com firmeza total e brilho acetinado perfeito.",
      "6. A peça pode ser lavada e usada no dia a dia sem risco de repuxar fios soltos."
    ],
    construction: [
      "Parâmetro de comprimento máximo de corte (Max Stitch Length = 7.0 a 9.0 mm)",
      "Padrão de deslocamento de divisores (Random / Alternated Shift)",
      "Controle de densidade fracionada",
      "Manutenção da curvatura e ângulo original do vetor"
    ],
    mainTypes: [
      "Divisão Automática em Zigue-Zague (Alternated Split)",
      "Divisão Aleatória de Ponto (Random Satin Split)",
      "Conversão Automática para Ponto Tatami (Auto-Tatami Conversion)"
    ],
    characteristics: [
      "Elimina laçadas longas soltas que enroscam e estragam com o uso",
      "Mantém o brilho e a elegância do ponto de cetim em áreas médias e grandes",
      "Aumenta a durabilidade e a resistência mecânica da peça bordada pós-lavagem"
    ],
    applications: [
      "Letras grandes em jaquetas e roupões com mais de 3 cm de altura.",
      "Preenchimento de pétalas de flores, laços e brasões volumosos.",
      "Bordados em roupas de bebê que não podem ter fios soltos por segurança."
    ],
    commonErrors: [
      "❌ Deixar pontos de cetim com 15 mm sem divisão, criando fios soltos que enroscam na primeira lavagem",
      "❌ Programar a divisão com as perfurações alinhadas na mesma linha, criando uma 'costura feia' no meio da letra",
      "❌ Usar divisão de ponto em letras minúsculas de 4 mm onde o ponto já é curto"
    ],
    troubleshootingTips: [
      "Se os pontos compridos da letra estiverem frouxos e soltando da toalha: Ative a opção 'Auto-Split' no software configurando o comprimento máximo para 7.0 mm.",
      "Se apareceu uma linha ou vinco no meio do bordado: Mude o tipo de divisão para 'Aleatório' (Random) para espalhar os furinhos de forma invisível.",
      "Se a letra for gigante (mais de 20 mm de largura): Converta o objeto para Ponto Tatami em vez de insistir em ponto de cetim."
    ],
    dicaArtrelados: "Para roupas de bebê e enxovais infantis: NUNCA deixe pontos de cetim com mais de 7 milímetros soltos! O dedinho ou a unha do bebê pode enroscar na linha solta. Ative o Auto-Split no seu programa para deixar tudo firminho, seguro e macio!",
    voceSabia: "As máquinas de bordar industriais possuem um limite físico mecânico: a maioria não consegue dar pontos maiores que 12,7 mm em um único passo sem acionar comandos de salto!",
    practicalExercise: "Crie uma letra 'I' com 15 mm de largura no seu software com ponto cheio. Veja como as linhas ficam compridas. Agora marque a caixinha 'Auto-Split' com 7 mm e veja como surgem pontos intermediários elegantes segurando a linha no centro.",
    quickSummary: "Algoritmo que divide pontos de cetim muito compridos para evitar laçadas frouxas e garantir durabilidade ao bordado.",
    recommendedSettings: {
      density: "0.40 mm com Max Length configurado em 7.0 mm a 8.5 mm",
      speedPPM: "750 a 850 PPM",
      needleType: "75/11 Ponta Bola",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Ponto Cheio / Cetim (Satin Stitch)",
      "Ponto Tatami (Tatami Stitch)",
      "Comprimento Máximo de Ponto",
      "Segurança Têxtil Infantil",
      "Programação de Matrizes"
    ],
    tags: ["s-086", "subdivisao", "auto split", "ponto longo", "cetim", "programacao", "durabilidade", "artrelados"],
    bibliographicReferences: [
      "WILCOM EMBROIDERY STUDIO. Satin Auto-Split & Long Stitch Management. Sydney, 2023.",
      "TAJIMA SOFTWARE SOLUTIONS. Pulse Digitizing: Split Satin & Texture Automation. Nagoya, 2022.",
      "ARTRELADOS. Parâmetros de Segurança e Durabilidade de Pontos no Bordado Eletrônico. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-087-suporte-de-cones-aereo",
    code: "S-087",
    letter: "S",
    term: "Suporte de Cones Aéreo (Thread Stand Tree / Overhead Guide Bar)",
    level: "Iniciante 🟢",
    category: "Componentes e Mecânica da Máquina",
    grammarClass: "Locução substantiva masculino.",
    origin: "Do latim supportare (sustentar) e do francês cône. Estrutura essencial para desbobinamento vertical de fios de alta velocidade.",
    summary: "Torre com guias no alto da máquina que faz a linha sair do cone subindo reta para não tombar nem fazer nós.",
    definition: "O Suporte de Cones Aéreo (Thread Stand Tree / Overhead Thread Guide Bar / Árvore Porta-Cones) é a estrutura vertical de metal ou polímero reforçado fixada na parte traseira da máquina de bordar, dotada de pratos de base com pinos de sustentação e uma barra transversal superior com olhais guia posicionados exatamente sobre o centro axial de cada cone de linha (Cross-Wound Bobbin). Sua função geométrica é assegurar o desbobinamento aéreo vertical (*Over-the-Top Unwinding*), permitindo que o filamento seja liberado em espiral ascendente livre de atrito antes de alcançar o conjunto de tensores.",
    technicalDetails: "A distância vertical ideal entre a ponta do cone e o olhal aéreo superior deve ser de no mínimo 1,5 a 2 vezes a altura do cone (aproximadamente 20 cm a 30 cm). Essa distância garante que o 'balão de linha' (Thread Ballooning) se forme suavemente em altas velocidades (acima de 800 PPM), dissipando a torção residual do fio e prevenindo que a linha enrosque na base plástica do cone.",
    beginnerExplanation: "É aquela 'anteninha' alta de ferro ou plástico que fica atrás da máquina com furinhos no alto. O cone de linha fica embaixo e a linha sobe direto para o furinho no alto antes de entrar na máquina. Ela serve para o cone não tombar e para a linha não ficar enganchando na beirada do cone.",
    howItWorks: [
      "1. O cone de bordado de 4.000 ou 5.000 metros é encaixado no prato da base do suporte.",
      "2. A ponta da linha é puxada para cima e passa pelo olhal aéreo correspondente localizado logo acima do cone.",
      "3. Conforme a máquina costura, a linha se desenrola para cima em espirais livres sem tocar nas laterais do cone.",
      "4. O fio segue alinhado e sem nós para a guia pré-tensora e para os discos de tensão principais.",
      "5. Evita trancos, quebras bruscas e variações de tensão causadas por cones tombando na bancada."
    ],
    construction: [
      "Haste telescópica vertical em alumínio ou aço cromado",
      "Pratos de base com amortecedores de borracha ou espuma antirruído",
      "Barra transversal com ilhoses cerâmicos ou de aço inoxidável polido",
      "Pinos de retenção e adaptadores para cones industriais"
    ],
    mainTypes: [
      "Suporte Integrado Traseiro Multi-Posições (para máquinas multiagulhas de 6 a 15 cones)",
      "Suporte Independente de Mesa com Base Pesada (para máquinas de 1 agulha)",
      "Suporte Aéreo de Teto com Tubos Guia para Fábricas Industriais"
    ],
    characteristics: [
      "Desbobinamento vertical suave e sem atrito para cones grandes industriais",
      "Permite usar cones econômicos de 4.000m e 5.000m em qualquer máquina doméstica",
      "Eliminação de quebras causadas por linha enroscada no pé do carretel"
    ],
    applications: [
      "Uso diário em todas as máquinas de bordar domésticas e industriais.",
      "Adaptação de cones grandes de poliéster em bordadeiras compactas de 1 agulha.",
      "Alimentação estável de linhas metálicas e fios especiais de alta torção."
    ],
    commonErrors: [
      "❌ Deixar a haste telescópica abaixada perto do cone, fazendo a linha raspar na borda plástica e quebrar",
      "❌ Colocar cones grandes de 5.000m deitados no pino horizontal de máquinas domésticas",
      "❌ Passar a linha no olhal aéreo fora do prumo, puxando o fio na diagonal e fazendo o cone tombar"
    ],
    troubleshootingTips: [
      "Linha quebrando de repente com tranco forte: Verifique se a linha não caiu e se laçou por baixo da base do cone; use uma redinha de proteção para cones no carretel.",
      "Haste telescópica descendo sozinha com a vibração: Aperte a porca plástica de aperto da haste telescópica do suporte.",
      "Cone de linha balançando e tombando na bancada: Coloque uma base de espuma redonda embaixo do cone no prato de suporte."
    ],
    dicaArtrelados: "Se você tem máquina de 1 agulha e quer economizar muito usando os cones grandes industriais de 4.000 metros: compre um porta-cones aéreo de mesa baratinho! Levante a haste dele até o topo. A linha sobe soltinha e você nunca mais vai precisar rebobinar carretilha pequena ou pagar caro em tubetes pequenos!",
    voceSabia: "Os cones de bordado têm aquele formato cônico afunilado para cima exatamente para permitir que a linha se desenrole para cima no ar a 1.000 rotações por minuto sem que o cone precise girar na base!",
    practicalExercise: "Observe a torre de suporte da sua máquina: puxe a haste telescópica para cima até a altura máxima permitida. Passe a linha pelo olhal e veja como a linha sobe leve e livre sem encostar em nada.",
    quickSummary: "Estrutura vertical com guias superiores que garante desbobinamento aéreo suave e sem trancos para cones de linha.",
    recommendedSettings: {
      speedPPM: "Todas as velocidades operacionais",
      needleType: "Compatível",
      stabilizer: "Conforme tecido"
    },
    relatedTerms: [
      "Desbobinamento Aéreo (Over-the-Top Unwinding)",
      "Cone de Linha Industrial",
      "Redinha de Linha (Thread Net)",
      "Tensão Superior",
      "Componentes da Máquina"
    ],
    tags: ["s-087", "suporte de cones", "porta cone", "desbobinamento", "mecanica", "acessorios", "artrelados"],
    bibliographicReferences: [
      "MADEIRA THREADS. Thread Delivery & Stand Setup for High-Speed Embroidery. Freiburg, 2022.",
      "ORGAN NEEDLES CO. Thread Path Engineering & Tension Stabilization. Tokyo, 2021.",
      "ARTRELADOS. Acessórios Essenciais e Otimização do Fluxo de Linhas no Ateliê. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  },
  {
    id: "s-088-sustentacao-por-ponto-de-alinhavo-periferico",
    code: "S-088",
    letter: "S",
    term: "Sustentação por Ponto de Alinhavo Periférico (Basting Box / Perimeter Basting Stitch)",
    level: "Iniciante 🟢",
    category: "Programação de Bordado",
    grammarClass: "Locução substantiva feminina.",
    origin: "Do francês antigo bastir (costurar com pontos largos/construir). Técnica clássica de alfaiataria automatizada digitalmente.",
    summary: "Costura de segurança com pontos largos feita ao redor do desenho para prender o tecido na entretela sem estragar a peça.",
    definition: "A Sustentação por Ponto de Alinhavo Periférico (Basting Box / Perimeter Basting Stitch / Moldura de Alinhavo / Costura de Fixação Prévia) é a linha de pontos corridos longos (entre 4,0 mm e 6,0 mm de comprimento) executada na etapa preliminar do bordado ao redor de todo o perímetro da área de desenho ou rente à borda interna do bastidor. Sua função é fixar mecanicamente o tecido sobre a entretela (especialmente no método flutuante / Floating Method), impedindo o deslizamento, ondas e encolhimentos durante a execução dos preenchimentos densos.",
    technicalDetails: "O ponto de alinhavo é programado com tensão de linha superior suavemente reduzida para facilitar sua remoção manual pós-bordado em uma única puxada contínua, sem romper as fibras do tecido nem deixar orifícios visíveis. Possui margem de recuo (Basting Margin) de 3,0 mm a 5,0 mm para fora dos limites extremos do bordado final.",
    beginnerExplanation: "É uma costura com pontos bem compridos que a máquina faz ao redor do desenho antes de começar a bordar. Ela serve para segurar o tecido bem preso na entretela, evitando que o pano dance no meio do caminho. Quando o bordado termina, você puxa essa linhazinha com a mão e ela sai inteira facinho!",
    howItWorks: [
      "1. A entretela é presa no bastidor e o tecido é posicionado por cima com cola spray ou alfinetes.",
      "2. O operador ativa a função 'Alinhavo' (Basting) no painel da máquina ou no software.",
      "3. A máquina borda um retângulo ou contorno suave de pontos largos ao redor de toda a área.",
      "4. O tecido fica perfeitamente travado e firme sobre a entretela.",
      "5. A máquina borda a matriz completa sem repuxar nem sair do lugar.",
      "6. Ao finalizar, o operador puxa a ponta do fio de alinhavo, removendo a linha em 2 segundos sem deixar marcas."
    ],
    construction: [
      "Ponto corrido longo de 4,5 mm a 6,0 mm",
      "Geometria retangular ou contorno ajustado à forma do desenho",
      "Tensão suave para remoção sem esforço",
      "Margem de segurança externa de 4,0 mm"
    ],
    mainTypes: [
      "Alinhavo Retangular em Caixa (Basting Box)",
      "Alinhavo por Contorno Anatômico do Desenho (Design Contour Basting)",
      "Alinhavo de Borda Máxima de Bastidor (Hoop Perimeter Basting)"
    ],
    characteristics: [
      "Garante estabilidade absoluta no método de bordado flutuante",
      "Não deixa marcas de bastidor em tecidos sensíveis (veludo, seda, toalhas)",
      "Remoção rápida e limpa em uma única puxada manual"
    ],
    applications: [
      "Bordados flutuantes em toalhas de banho felpudas, veludo e couro sintético.",
      "Bordados em peças pequenas ou montadas (bolsos, golas, mangas de camisa).",
      "Fixação de plástico hidrossolúvel sobre toalhas atoalhadas antes do bordado."
    ],
    commonErrors: [
      "❌ Fazer o alinhavo com pontos muito curtos (ex: 2.0 mm), tornando impossível puxar a linha depois sem furar o tecido",
      "❌ Fazer o alinhavo exatamente em cima de onde vai passar o contorno final do bordado",
      "❌ Usar linha escura de contraste para alinhavar tecido branco transparente, arriscando deixar fiapos"
    ],
    troubleshootingTips: [
      "O alinhavo está difícil de desmanchar: Aumente o comprimento do ponto de alinhavo para 5,0 mm e diminua a tensão da linha superior antes de alinhavar.",
      "O tecido elástico formou ondas antes de começar a bordar: Alise o tecido suavemente com as mãos enquanto a máquina executa a caixinha de alinhavo.",
      "O plástico hidrossolúvel rasgou no alinhavo: Use ponto de alinhavo mais longo e agulha ponta bola."
    ],
    dicaArtrelados: "Para bordar toalhas felpudas sem usar o bastidor na toalha: prenda só a entretela no aro, borrife um tiquinho de cola spray, coloque a toalha por cima, cubra com o plástico hidrossolúvel e mande a máquina fazer o alinhavo (Basting Box)! Fica tudo firme como pedra, sem marcar a toalha e o resultado é padrão de boutique!",
    voceSabia: "A palavra 'alinhavar' vem do latim 'ad lineam' (seguir a linha), e era o segredo dos grandes mestres alfaiates da Idade Média para montar ternos sob medida antes da costura definitiva!",
    practicalExercise: "Na sua máquina de bordar, procure na tela o botão com o desenho de um retângulo com linhas tracejadas (função Basting / Alinhavo). Ative essa função em um retalho de tecido e veja a rapidez e a segurança que essa costurinha inicial traz para o seu trabalho.",
    quickSummary: "Costura prévia de segurança com pontos largos que trava o tecido na entretela e sai facilmente após o término do bordado.",
    recommendedSettings: {
      density: "Comprimento de ponto de 4.5 mm a 6.0 mm",
      speedPPM: "600 a 750 PPM",
      needleType: "75/11 Ponta Bola",
      stabilizer: "Entretela rasgável ou hidrossolúvel"
    },
    relatedTerms: [
      "Bordado Flutuante (Floating Method)",
      "Marca de Bastidor (Hoop Burn)",
      "Plástico Hidrossolúvel",
      "Ponto Corrido (Running Stitch)",
      "Estabilização de Tecidos"
    ],
    tags: ["s-088", "alinhavo", "basting box", "flutuante", "seguranca", "programacao", "estabilizacao", "artrelados"],
    bibliographicReferences: [
      "EMBROIDERY DIGITIZING GUILD. Perimeter Basting & Floating Stabilization Techniques. Chicago, 2022.",
      "BROTHER CREATIVE CENTER. Basting Function Applications & Hoop Burn Prevention. Tokyo, 2021.",
      "ARTRELADOS. Guia de Bordado Flutuante, Alinhavos e Proteção de Tecidos Nobres. Curitiba, 2024."
    ],
    updatedAt: "2026-08-30"
  }
];

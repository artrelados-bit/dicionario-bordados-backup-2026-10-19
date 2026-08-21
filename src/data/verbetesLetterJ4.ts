import { Verbete } from "../types";

export const VERBETES_LETTER_J_PART4: Verbete[] = [
  {
    id: "j-016-janome-digitizer-ecossistema-softwares",
    code: "J-016",
    term: "Janome Digitizer & Ecossistema de Softwares Janome (Janome Embroidery Software Architecture)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Softwares & Formatos",
    grammarClass: "Substantivo masculino / Nome próprio de software proprietário.",
    origin: "Desenvolvido em parceria tecnológica entre a Janome Sewing Machine Co. e a Wilcom International (criadora do padrão mundial de bordado).",
    summary: "Linha oficial de softwares de computador da Janome (Digitizer Jr, MBX e Artistic Digitizer) para criar e editar matrizes de bordado.",
    definition: "O Ecossistema de Softwares Janome Digitizer (Janome Artistic Digitizer, Digitizer MBX, Digitizer Jr & Embroidery Studio Architecture) é a suíte profissional de programação, digitalização e edição de matrizes desenvolvida pela fabricante japonesa Janome em cooperação com a Wilcom International. O ambiente integra ferramentas de conversão automática de imagens vetoriais, digitalização manual ponto a ponto, aplicação de efeitos especiais de ponto cheio e tatami, edição de tipografia com centenas de alfabetos pré-digitalizados e calibração dimensional direta para os bastidores originais das máquinas Janome (com exportação otimizada em formatos .JEF e .JEF+).",
    technicalDetails: "Recursos e arquitetura dos softwares Janome Digitizer:\n• Versões principais: Artistic Digitizer (versão moderna multiplataforma Windows/macOS), Digitizer MBX (versão profissional com motor Wilcom) e Digitizer Jr (versão de entrada para monogramas e ajustes básicos);\n• Formato de edição de trabalho nativo: Arquivos vetoriais proprietários (.JAN e .DRAW) preservando propriedades de objetos, contornos e densidades antes da compilação de pontos;\n• Exportação Multi-Máquina: Gera arquivos .JEF, .JEF+, .SEW para Janome, além de .PES, .DST, .EXP, .HUS e .VIP;\n• Biblioteca de Bastidores Embutida: Simulação visual 1:1 dos bastidores Janome (SQ14b, RE20b, SQ20b, RE28b, RE36b e bastidores de boné);\n• Gestão de Cores: Integração nativa com a paleta oficial Janome Polyester Thread Chart e conversão automática para linhas Madeira, Robison-Anton e Isacord.",
    howItWorks: [
      "1. A bordadeira adquire uma máquina Janome MC500E ou MC550E e instala o software Janome Artistic Digitizer no computador.",
      "2. Ela abre o programa e escolhe o modelo exato da sua máquina e o bastidor RE20b (140x200mm).",
      "3. O software exibe a grade do bastidor na escala real da tela.",
      "4. Ela digita o nome de uma criança, escolhe uma fonte caligráfica e adiciona um raminho floral da biblioteca do programa.",
      "5. O software calcula automaticamente as compensações de repuxo, o underlay e a ordem das cores.",
      "6. Ela clica em 'Exportar para USB / Salvar em JEF'.",
      "7. Conecta o pen-drive na máquina Janome: a matriz abre perfeitamente dimensionada, centralizada e pronta para costurar com cores fieis.",
    ],
    beginnerExplanation: "É o programa oficial de computador feito sob medida para quem tem máquina de bordar Janome! Com ele, você pode escrever nomes lindos, juntar desenhos diferentes, mudar o tamanho das matrizes e criar seus próprios bordados a partir de fotos e desenhos! Como ele é feito pela Janome, ele já tem o desenho exato de todos os bastidores da sua máquina na tela do computador, garantindo que o bordado vai caber com perfeição e sem nenhum erro!",
    applications: [
      "Criação e edição completa de matrizes de bordado para máquinas Janome domésticas e profissionais",
      "Personalização de nomes, letreiros e monogramas com fontes decorativas licenciadas",
      "Conversão e ajuste de tamanho de matrizes compradas na internet para o formato .JEF",
      "Simulação 3D em tempo real do bordado e estimativa exata de consumo de linha e tempo de máquina"
    ],
    commonErrors: [
      "Salvar a matriz no formato de trabalho (.JAN) e tentar abrir direto no pen-drive da máquina (a máquina só lê .JEF)",
      "Redimensionar matrizes de pontos em mais de 20% sem recalcular a densidade de pontos no software",
      "Não selecionar o bastidor correto no programa, gerando avisos de limite ultrapassado na máquina"
    ],
    troubleshootingTips: [
      "No Janome Digitizer, utilize a função 'Exportar para USB' para que o programa salve o arquivo .JEF diretamente dentro da pasta correta do pen-drive",
      "Mantenha o software sempre atualizado baixando os patches de correção gratuitos no site oficial da Janome Global",
      "Ao criar letras pequenas, utilize as fontes originais que tenham o símbolo de agulha ao lado: elas foram pré-digitalizadas e testadas por mestres de bordado",
      "Antes de bordar peças definitivas, use o simulador de pontos na tela (reprodução lenta) para conferir a sequência de costura"
    ],
    dicaArtrelados: "Se você tem uma máquina Janome, dominar o software da marca é o passaporte para a liberdade criativa! Você nunca mais fica dependente de comprar matrizes prontas e pode criar qualquer encomenda que a sua cliente pedir!",
    voceSabia: "O software Janome Digitizer MBX foi desenvolvido em parceria direta com os mesmos engenheiros da Wilcom em Sydney (Austrália) que criaram o padrão ouro de digitalização usado pelas maiores indústrias têxteis do planeta!",
    practicalExercise: "Abra o Janome Digitizer: selecione o bastidor da sua máquina, escreva uma palavra com a ferramenta de texto, mude a cor para dourado e exporte em .JEF para o pen-drive!",
    quickSummary: "Suíte de softwares oficial da Janome para desenhar, editar e exportar matrizes com compatibilidade total para máquinas Janome.",
    relatedTerms: ["JEF / Formato Janome", "Formatos de Matriz de Bordado", "Wilcom EmbroideryStudio", "Letreiros & Fontes Pequenas"],
    tags: ["j-016", "janome digitizer", "artistic digitizer", "software", "jef", "programacao", "janome", "artrelados"],
    bibliographicReferences: [
      "JANOME ARTISTIC DIGITIZER: USER MANUAL & VECTOR EMBROIDERY GUIDE. Tokyo, 2023.",
      "THE EMBROIDERY CAD/CAM COMPARATIVE STUDY. Sydney, 2022.",
      "ARTRELADOS. Dominando o Janome Digitizer: Como Criar, Editar e Exportar Matrizes Perfeitas no Computador. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-017-jog-dial-botao-giratorio-navegacao-pontos",
    code: "J-017",
    term: "Jog Dial & Botão Giratório de Navegação de Pontos e Paradas (Jog Dial Optical Encoder & Step-by-Step Stitch Navigation)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Componentes da Máquina",
    grammarClass: "Substantivo masculino / Termo mecatrônico de interface.",
    origin: "Do inglês jog dial (seletor rotativo de avanço por pulsos). Dispositivo de controle óptico-rotativo introduzido na eletrônica de precisão.",
    summary: "Botão giratório ou controle no painel que permite avançar ou voltar os pontos do bordado um a um com precisão cirúrgica quando a linha quebra.",
    definition: "O Jog Dial, Seletor Rotativo de Encoder Óptico e Navegador Passo a Passo de Pontos (Jog Dial Optical Rotary Encoder & Stitch Forward/Backward Control System) é o componente de controle de interface física ou digital presente em máquinas de bordar modernas. Composto por um disco rotativo com encoder óptico de quadratura ou botões de rolagem sensíveis no painel touchscreen, o mecanismo permite ao operador avançar ou recuar o cursor da matriz ponto a ponto, de 10 em 10 pontos, de 100 em 100 pontos ou diretamente para o início da cor anterior/seguinte. É a ferramenta indispensável para retomar o bordado exatamente no local onde a linha arrebentou ou a bobina acabou, sem deixar falhas ou sobreposições grosseiras.",
    technicalDetails: "Mecatrônica e parâmetros do mecanismo Jog Dial:\n• Tecnologia de leitura: Encoder óptico rotativo incremental com 24 a 100 pulsos por revolução mecânica (com clique tátil haptic feedback);\n• Modos de Navegação: Passo Único (1 ponto por clique), Avanço em Bloco (10, 100 ou 500 pontos) e Salto por Troca de Cor (Color Stop Jump);\n• Retração de Segurança: Recuo recomendado de 5 a 10 pontos antes do ponto de quebra para garantir amarração e sobreposição perfeita;\n• Sincronismo do Pantógrafo: O pantógrafo acompanha instantaneamente o movimento do Jog Dial em velocidade controlada;\n• Integração com Sensor de Quebra: Ao detectar fim de linha, a máquina pausa e abre automaticamente a tela de navegação por Jog Dial.",
    howItWorks: [
      "1. A máquina está bordando um escudo a 800 PPM e, no meio de uma letra cheia, a linha superior quebra.",
      "2. O sensor da máquina detecta a ausência de linha, freia o motor principal e apita na tela: 'Quebra de Linha Superior'.",
      "3. A bordadeira repassa a linha na agulha em 15 segundos.",
      "4. Como a máquina levou 5 pontinhos para frear totalmente, ela precisa voltar esses 5 pontos para não deixar um buraco branco no meio da letra.",
      "5. Ela gira o botão 'Jog Dial' no painel (ou clica no botão -1 ponto no touchscreen) voltando exatamente 8 pontos para trás.",
      "6. A ponta da agulha se posiciona por cima dos pontos já costurados.",
      "7. Ela aperta o botão verde de Start: a máquina costura 3 pontos por cima da costura antiga e continua o desenho sem deixar nenhuma falha visível!",
    ],
    beginnerExplanation: "É o 'botão de rebobinar' da sua máquina de bordar! Quando a linha arrebenta ou a linha da bobina acaba no meio do bordado, a máquina dá alguns pulinhos antes de parar, deixando um pedacinho sem costura. Com o Jog Dial (ou as teclas de + e - no painel), você volta alguns pontinhos para trás com facilidade, como se estivesse voltando um vídeo no YouTube! Quando você aperta o play de novo, a máquina recomeça exatamente onde tinha parado e seu bordado fica 100% perfeito!",
    applications: [
      "Recuperação perfeita de bordados após quebra de linha superior ou término da linha de bobina",
      "Retorno de pontos após falhas causadas por enrosco temporário de fio na lançadeira",
      "Conferência passo a passo do alinhamento da agulha em contornos delicados",
      "Navegação rápida para pular etapas ou adiantar blocos de cores inteiras na produção"
    ],
    commonErrors: [
      "Recomeçar o bordado sem voltar os pontos necessários (deixa um buraco feio e vazio no meio do desenho)",
      "Voltar pontos demais (mais de 30 pontos) criando uma placa de pontos duplos grossa que pode entortar a agulha",
      "Girar o botão de navegação com a agulha abaixada dentro do tecido"
    ],
    troubleshootingTips: [
      "REGRA DOS 5 PONTOS: Ao repassar a linha após uma quebra, volte SEMPRE de 5 a 8 pontos para trás antes de dar a nova partida",
      "Observe visualmente a ponta da agulha descendo sobre a última laçada para ter certeza de que o ponto de reinício está sobreposto",
      "Em letras pequenas e delicadas, volte apenas 3 pontos para evitar excesso de volume de linha",
      "Mantenha o painel limpo: poeira de linha acumulada nas frestas do botão giratório pode causar falhas de leitura no encoder óptico"
    ],
    dicaArtrelados: "A regra de voltar 5 a 8 pontinhos após a linha quebrar é o segredo para ninguém nunca perceber que houve qualquer interrupção no bordado! O cliente recebe uma peça com acabamento contínuo e impecável!",
    voceSabia: "O botão Jog Dial foi criado originalmente nos anos 1970 pelos estúdios de cinema e televisão para permitir aos editores de vídeo avançar e retroceder rolos de fita analógica quadro a quadro (frame by frame) com a ponta de um único dedo!",
    practicalExercise: "Durante um bordado em retalho, pause a máquina: use o botão de navegação ou a tela para voltar 10 pontos e depois avançar 10 pontos: veja como o bastidor se move milimetricamente acompanhando cada ponto!",
    quickSummary: "Controle giratório ou digital que permite voltar ou avançar os pontos da matriz para recuperar o bordado após quebras de linha.",
    relatedTerms: ["Quebra de Linha", "Painel de Controle Touchscreen", "Pantógrafo da Máquina", "Ponto de Amarração / Tie-Off"],
    tags: ["j-017", "jog dial", "navegacao de pontos", "encoder", "quebra de linha", "painel", "operacao", "artrelados"],
    bibliographicReferences: [
      "HUMAN-MACHINE INTERFACES & ROTARY ENCODERS IN TEXTILE CNC. Munich, 2023.",
      "THE EMBROIDERY MACHINE OPERATOR'S ESSENTIAL HANDBOOK. Sydney, 2022.",
      "ARTRELADOS. Retomada Perfeita: Como Usar o Jog Dial para Salvar Bordados Após Quebras de Linha Sem Deixar Marcas. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-018-jateamento-ar-comprimido-limpeza-bobina",
    code: "J-018",
    term: "Jateamento de Ar Comprimido & Limpeza da Caixa de Bobina e Lançadeira (Compressed Air Cleaning & Hook Dust Blow Protocol)",
    letter: "J",
    level: "Fundamental 🟢",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo masculino composto.",
    origin: "Do latim jactus (arremesso de jato) e do grego pneuma (ar comprimido / pneumática). Manutenção preventiva mecânica industrial.",
    summary: "Procedimento correto de uso de pincel, aspirador ou ar comprimido para limpar poeira de entretela e fiapos de linha da lançadeira da máquina.",
    definition: "O Protocolo Técnico de Limpeza por Jateamento de Ar Comprimido, Aspiração e Remoção de Detritos na Caixa de Bobina e Lançadeira (Hook Area Pneumatic Cleaning, Lint Removal & Bobbin Case Maintenance Protocol) é a rotina obrigatória de manutenção preventiva mecânica executada na área da lançadeira rotativa e facas de corte. Durante o processo de bordado em alta velocidade, o atrito constante das agulhas contra a entretela e os tecidos libera milhares de microfibras de celulose e poliéster (lint/cotão) que se misturam ao óleo lubrificante, formando uma pasta abrasiva que trava a caixa de bobina, desregula os sensores ópticos de linha e desgasta o bico da lançadeira.",
    technicalDetails: "Diretrizes e normas de limpeza do compartimento da lançadeira:\n• Frequência obrigatória: A cada 4 a 8 horas de operação contínua (ou ao trocar de trabalho pesado, como toalhas e veludo);\n• Equipamentos recomendados: Pincel de cerdas naturais antiestáticas, mini-aspirador de pó USB para eletrônicos e lata de ar comprimido seco (pressurizado a 40-60 PSI);\n• PRECAUÇÃO CRÍTICA COM AR COMPRIMIDO: NUNCA soprar o ar comprimido de frente empurrando a poeira para dentro dos rolamentos do eixo principal da máquina; usar sempre o jato de dentro para fora ou aspirar;\n• Inspeção da Pista da Lançadeira (Hook Race): Checagem de fiapos presos entre o cesto e a trava de retenção da lançadeira;\n• Lubrificação pós-limpeza: Aplicação de 1 gota de óleo mineral transparente puro 10 cSt na pista rotativa da lançadeira.",
    howItWorks: [
      "1. Ao final de um dia produtivo com 15 toalhas bordadas, a bordadeira desliga a máquina da tomada.",
      "2. Retira o bastidor, o calcador e desparafusa a chapa de agulha com a chavinha de fenda original.",
      "3. Remove com cuidado a caixa de bobina plástica ou metálica.",
      "4. Utiliza um pincel macio para varrer o 'bolo de algodão e cotão de entretela' acumulado em volta das lâminas do corta-fio.",
      "5. Com um mini-aspirador ou jato de ar comprimido seco direcionado de dentro para fora, ela expulsa todos os micropós restantes.",
      "6. Pinga 1 única gotinha de óleo mineral na pista circular onde a lançadeira gira.",
      "7. Remonta a caixa de bobina alinhando a travinha na ranhura da máquina e fecha a chapa: a máquina fica com som macio, silenciosa e com corte perfeito para o dia seguinte!",
    ],
    beginnerExplanation: "É a 'faxina mágica' que toda máquina de bordar ama receber! Toda vez que você borda toalhas ou usa entretela, solta um monte de pozinho branco e pelinhos que caem direto lá embaixo da chapa de ferro, onde fica a caixinha de bobina. Se você não limpar, esses pelinhos viram uma 'massinha' que trava a máquina, arrebenta a linha e faz a máquina costurar barulhenta! Com um pincelzinho macio e um sopro de ar, você tira essa sujeira em 2 minutos e sua máquina dura a vida inteira novinha!",
    applications: [
      "Manutenção preventiva diária e semanal em máquinas domésticas e industriais",
      "Eliminação de falhas falsas nos sensores eletrônicos de quebra de linha de bobina",
      "Prevenção de travamento mecânico das lâminas do sistema corta-fio (Trimmer)",
      "Redução drástica do ruído operacional e do aquecimento da lançadeira rotativa"
    ],
    commonErrors: [
      "Soprar ar comprimido com a boca (o vapor de saliva oxida e enferruja as peças de aço da lançadeira!)",
      "Usar spray de ar comprimido virado de cabeça para baixo (injeta gás líquido congelante que quebra peças plásticas)",
      "Empurrar o ar comprimido direto para o fundo dos rolamentos da máquina, entupindo a graxa dos motores"
    ],
    troubleshootingTips: [
      "NUNCA sopre com a boca dentro da caixa de bobina: a umidade do ar respirado causa ferrugem microscópica na lançadeira!",
      "Prefira SEMPRE aspirar o pó com um mini-aspirador ou usar o pincel antes de aplicar o ar comprimido",
      "Se usar lata de ar comprimido (spray limpa-telas/computadores), mantenha a lata sempre 100% na vertical e aplique jatos curtos de 1 segundo",
      "Após limpar, coloque SEMPRE 1 gota de óleo mineral próprio para máquina de costura (óleo transparente de alta pureza) na pista da lançadeira"
    ],
    dicaArtrelados: "Uma máquina limpa é uma máquina que nunca quebra! Crie o ritual sagrado de passar o pincelzinho na caixinha de bobina no final de cada dia de trabalho: sua máquina vai trabalhar suave como uma pluma e sem arrebentar linhas!",
    voceSabia: "Em grandes fábricas têxteis industriais com mais de 50 cabeçotes de bordado funcionando dia e noite, existem tubulações de ar comprimido e aspiradores centrais automáticos que limpam as lançadeiras a cada troca de lote para evitar paradas na produção!",
    practicalExercise: "Desligue sua máquina agora mesmo, retire a chapa de agulha e a caixinha da bobina: use um pincel macio para retirar o cotão acumulado e veja a quantidade de fiapos que você vai tirar em menos de 1 minuto!",
    quickSummary: "Protocolo correto de limpeza periódica de fiapos e pó de entretela na área da lançadeira e bobina da máquina.",
    relatedTerms: ["Lançadeira Rotativa", "Caixa de Bobina", "Corta-Fio Automático / Trimmer", "Lubrificação e Óleo Mineral"],
    tags: ["j-018", "limpeza", "ar comprimido", "caixa de bobina", "lancadeira", "manutencao preventiva", "cotao", "artrelados"],
    bibliographicReferences: [
      "PREVENTIVE MAINTENANCE & TRIBOLOGY OF EMBROIDERY CNC MACHINERY. Tokyo, 2023.",
      "THE EMBROIDERY TECHNICIAN'S COMPREHENSIVE SERVICE MANUAL. Chicago, 2022.",
      "ARTRELADOS. Máquina Suave e Silenciosa: O Guia de Limpeza Diária da Lançadeira e Caixa de Bobina. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-019-jumper-configuracao-placas-cabecote",
    code: "J-019",
    term: "Jumper de Configuração & Placas Eletrônicas de Cabeçote (Motherboard Hardware Jumpers & Head PCB Addressing)",
    letter: "J",
    level: "Avançado 🔴",
    category: "Mecânica da Máquina",
    grammarClass: "Substantivo masculino / Termo eletroeletrônico mecatrônico.",
    origin: "Do inglês jumper (ponte condutora removível de curto-circuito em placas de circuito impresso - PCB). Eletrônica digital de controle CNC.",
    summary: "Pequenos conectores de plástico com metal nas placas eletrônicas da máquina que configuram a voltagem, endereço dos cabeçotes e parâmetros de fábrica.",
    definition: "Os Jumpers de Configuração de Hardware e Endereçamento de Placas de Cabeçote (Hardware Jumpers, PCB Dip-Switches & Multi-Head CAN-Bus Addressing) são os conectores elétricos e pontes condutoras removíveis instaladas nos pinos das placas de circuito impresso (Motherboard principal, placas controladoras de servomotores e placas individuais de cada cabeçote / Head Driver PCBs) em máquinas de bordar industriais e semiprofissionais. Os jumpers e chaves DIP definem parâmetros físicos cruciais, como seleção de tensão (110V/220V), endereçamento binário de cada cabeçote na rede de comunicação serial (CAN-Bus / RS485), polaridade dos sensores de corte de linha e limites eletrônicos de curso dos eixos X e Y.",
    technicalDetails: "Arquitetura e parametrização de jumpers industriais:\n• Tipos físicos: Jumpers padrão passo 2,54 mm com contato folheado a ouro e chaves Dip-Switch rotativas/lineares de 4 a 8 vias;\n• Endereçamento de Cabeçotes (Head ID Addressing): Código binário de 4 bits em cada placa para identificar o cabeçote 1 ao 24 na rede da CPU central;\n• Configuração de Sensores: Chaveamento entre sensores de proximidade tipo NPN (Normalmente Aberto) ou PNP (Normalmente Fechado);\n• Modo de Manutenção / Firmware Flash: Jumper de inicialização para gravação de BIOS e recuperação de placas travadas;\n• Isolamento galvânico: Proteção contra surtos eletrostáticos (ESD) e ruídos de motores industriais.",
    howItWorks: [
      "1. Um técnico de manutenção está instalando uma nova placa eletrônica substituta no cabeçote nº 4 de uma máquina industrial de 6 cabeçotes.",
      "2. A placa nova vem de fábrica com a configuração padrão genérica (endereço zero).",
      "3. Se o técnico ligar a placa sem configurar os jumpers, a CPU central da máquina não saberá qual cabeçote é aquele e emitirá um erro de comunicação na rede.",
      "4. O técnico consulta o manual elétrico e posiciona os pequenos jumpers plásticos na combinação binária correspondente ao Cabeçote 4 (pinos 1 e 3 fechados).",
      "5. Encaixa a placa no cabeçote e liga a máquina principal.",
      "6. A CPU reconhece o Cabeçote 4 instantaneamente, sincroniza os sinais dos solenoides de troca de cor e libera a máquina para a produção.",
      "7. A fábrica volta a produzir normalmente sem atrasos.",
    ],
    beginnerExplanation: "São aquelas 'pontinhas plásticas' com metal dentro que você vê nas plaquinhas de computador e dentro das máquinas eletrônicas! Elas funcionam como pequenos interruptores secretos que dizem para a máquina qual é a voltagem correta, qual cabeçote está ligado e como os motores devem conversar entre si. É uma peça técnica de engenharia que os técnicos especializados usam para regular e trocar placas eletrônicas quando fazem manutenção na máquina!",
    applications: [
      "Endereçamento de cabeçotes individuais em máquinas de bordar multicabeçotes industriais",
      "Seleção de tensão de entrada (110V/220V) em fontes de alimentação internas",
      "Configuração de compatibilidade de sensores ópticos e magnéticos de corte de fio",
      "Modo de serviço técnico para diagnóstico de motores de passo e atualização de firmware"
    ],
    commonErrors: [
      "Mudar a posição de jumpers com a máquina ligada na tomada (pode queimar o microcontrolador da placa)",
      "Colocar o jumper na posição errada após uma limpeza, fazendo a máquina não reconhecer o cabeçote",
      "Perder os pequenos jumpers plásticos durante a manutenção técnica"
    ],
    troubleshootingTips: [
      "ATENÇÃO: NUNCA mexa na posição dos jumpers da placa eletrônica sem consultar o manual de serviço oficial do fabricante da sua máquina!",
      "Desligue SEMPRE a máquina da tomada e aguarde 2 minutos para descarregar os capacitores antes de tocar em qualquer placa eletrônica",
      "Utilize uma pulseira antiestática (ESD) ao manusear placas de cabeçote para não queimar chips com eletricidade estática do corpo",
      "Fotografe com a câmera do celular a posição exata de todos os jumpers e fios antes de desmontar qualquer placa para ter um gabarito visual perfeito"
    ],
    dicaArtrelados: "Tirar uma foto nítida com o celular de qualquer placa ou conexão antes de mexer é a regra de ouro de ouro da manutenção no ateliê! Se tiver dúvida na hora de remontar, a foto no celular resolve em 5 segundos!",
    voceSabia: "O nome 'Jumper' vem do verbo inglês 'to jump' (saltar), porque o pequeno conector de cobre 'salta' por cima da placa ligando dois pinos condutores de eletricidade como se fosse uma ponte levadiça!",
    practicalExercise: "Se tiver uma máquina antiga ou placa eletrônica no ateliê, observe as letrinhas 'JP1', 'JP2' impressas na placa de circuito e veja os pequenos jumpers coloridos encaixados nos pinos de metal!",
    quickSummary: "Pequenos conectores de hardware em placas eletrônicas que configuram endereços de cabeçotes, voltagens e funções da máquina.",
    relatedTerms: ["Isolamento de Ruído Elétrico", "Intertravamento de Segurança de Bastidor", "Mecânica da Máquina", "Painel de Controle Touchscreen"],
    tags: ["j-019", "jumper", "eletronica", "placas", "cabecote", "hardware", "manutencao tecnica", "artrelados"],
    bibliographicReferences: [
      "INDUSTRIAL CNC EMBROIDERY ELECTRONICS & CAN-BUS PROTOCOLS. Nagoya, 2023.",
      "THE EMBROIDERY HARDWARE SERVICE & REPAIR MANUAL. Munich, 2022.",
      "ARTRELADOS. Eletrônica Descomplicada: Como Funcionam as Placas e Jumpers de Controle das Máquinas de Bordar. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  },
  {
    id: "j-020-juncao-de-bastidores-matrizes-multiposicionais",
    code: "J-020",
    term: "Junção de Bastidores & Matrizes Multiposicionais / Split Hooping (Multi-Hoop Alignment & Split Frame Indexing)",
    letter: "J",
    level: "Avançado 🔴",
    category: "Técnicas de Bastidor",
    grammarClass: "Substantivo feminina composto.",
    origin: "Do inglês split hooping (divisão de bastidor para grandes áreas) e do latim junctio (união/alinhamento de partes contíguas).",
    summary: "Técnica de dividir um bordado gigante em várias partes no computador e emendar perfeitamente no tecido usando marcas de alinhamento.",
    definition: "A Junção de Bastidores, Bordado Multiposicional e Divisão Matricial Indexada (Multi-Hoop Stitching, Split Hooping Alignment & Registration Crosshairs Protocol) é a metodologia avançada que permite bordar desenhos de grande formato (como barras de vestidos de festa, toalhas de mesa de 2 metros, costas de jaquetas ou faixas contínuas) cuja dimensão ultrapassa a área física máxima do bastidor da máquina. O processo divide a matriz no software em múltiplos blocos sequenciais (Etapa 1, Etapa 2, etc.), inserindo Cruzes de Alinhamento (Registration Marks / Alignment Crosses) nas extremidades. A cada etapa finalizada, o tecido é reposicionado no bastidor e a agulha é calibrada com precisão milimétrica sobre a cruz de alinhamento anterior, criando um bordado contínuo e sem nenhuma emenda aparente.",
    technicalDetails: "Protocolo de calibração e tolerância de Split Hooping:\n• Cruzes de Registro (Registration Crosses): Inserção obrigatória de 2 cruzes de alinhamento em ponto de corrida de 1,5 mm nas bordas de junção;\n• Tolerância dimensional de reposicionamento: Desvio máximo permitido < 0,3 mm para evitar descontinuidade em pontos cheios;\n• Bastidores Multiposicionais / Giga Hoops: Uso de bastidores com múltiplos pontos de encaixe deslizantes sem necessidade de desbastonar a peça;\n• Software de Divisão Automática: Recursos como 'Multi-Hooping' no Wilcom/Hatch ou 'Design Splitter' no Pe-Design;\n• Linha de amarração: Sobreposição estratégica de 1,0 mm a 1,5 mm entre as seções bordadas.",
    howItWorks: [
      "1. A cliente quer bordar um arabesco clássico de 40 cm de comprimento na barra de um vestido de noiva, mas o maior bastidor da máquina é de 13x18 cm.",
      "2. No software de digitalização, a bordadeira abre a ferramenta de 'Multi-Hooping' e divide o desenho em 3 partes de 14 cm cada.",
      "3. O software insere automaticamente 2 cruzes de alinhamento no final da Parte 1 e no início da Parte 2.",
      "4. Ela coloca o vestido no bastidor e borda a Parte 1; no final, a máquina borda as duas cruzinhas guias com linha de contraste.",
      "5. Ela solta o bastidor, avança o tecido para frente e recoloca o tecido no aro alinhando com a régua.",
      "6. Usa as teclas de Jog no painel da máquina para posicionar a ponta da agulha exatamente no centro da primeira cruzinha bordada.",
      "7. A máquina borda a Parte 2: a emenda se conecta com perfeição microscópica, transformando 3 bastidores em uma obra contínua e monumental de 40 cm!",
    ],
    beginnerExplanation: "É o superpoder que permite você bordar desenhos gigantescos mesmo tendo uma máquina com bastidor pequeno! Funciona como montar um quebra-cabeça perfeito: no computador, você divide o desenho grande em 2 ou 3 partes. No final de cada pedaço, a máquina borda duas 'cruzinhas mágicas' no tecido. Quando você muda o tecido de lugar no bastidor, você só precisa mirar a ponta da agulha bem no meinho da cruzinha: a máquina continua o desenho dali e ninguém nunca vai saber que o bordado foi feito em etapas separadas!",
    applications: [
      "Bordados gigantes em costas de kimonos, jaquetas jeans e capas de chuva",
      "Barrados contínuos de toalhas de banho, toalhas de mesa de banquete e cortinas",
      "Caminhos de mesa compridos de 1,5 metros com arabescos entrelaçados",
      "Faixas litúrgicas, paramentos religiosos e estandartes comemorativos"
    ],
    commonErrors: [
      "Reposicionar o tecido no bastidor torto ou inclinado em relação ao eixo horizontal da primeira etapa",
      "Tentar emendar o desenho no 'olhômetro' sem utilizar cruzes de alinhamento programadas",
      "Esticar o tecido com força diferente no segundo bastidor, causando repuxamento e desencontro na emenda"
    ],
    troubleshootingTips: [
      "Utilize SEMPRE Cruzes de Alinhamento (Registration Marks) programadas na matriz: elas são a sua bússola de precisão milimétrica",
      "Use uma caneta mágica de tecido e uma régua comprida para traçar uma linha guia contínua em todo o comprimento da peça antes de começar",
      "Para máquinas sem bastidor multiposicional, a técnica de Flutuação com entretela colada com spray temporário é a forma mais fácil de reposicionar o tecido reto",
      "Borde as cruzes de alinhamento com uma linha de cor bem chamativa para você enxergar perfeitamente no momento de apontar a agulha"
    ],
    dicaArtrelados: "Ter um bastidor pequeno não é limite para o seu ateliê! Com a técnica de Junção de Bastidores e cruzes de alinhamento, você pode aceitar encomendas de vestidos de noiva e toalhas de 2 metros com a mesma perfeição das grandes indústrias!",
    voceSabia: "A famosa 'Tapeçaria de Bayeux', uma obra monumental bordada de 70 metros de comprimento que conta a conquista da Inglaterra pelos normandos em 1066, foi toda confeccionada em painéis de linho de 50 cm emendados com pontos de junção manuais tão perfeitos que resistiram por quase 1.000 anos!",
    practicalExercise: "No seu software, pegue um desenho de 25 cm e use a ferramenta de divisão de bastidor: salve as duas partes com as cruzes de registro, borde em um retalho longo e treine o alinhamento da agulha sobre a cruz!",
    quickSummary: "Técnica de dividir desenhos grandes em partes e emendá-las perfeitamente no tecido usando marcas e cruzes de alinhamento.",
    relatedTerms: ["Posicionamento Técnico de Bastidor", "Jog de Pantógrafo", "Trace / Traçado Perimétrico", "Flutuação de Tecido / Floating"],
    tags: ["j-020", "juncao de bastidores", "split hooping", "multi-hoop", "cruzes de alinhamento", "grandes formatos", "artrelados"],
    bibliographicReferences: [
      "MULTI-HOOP EMBROIDERY & LARGE-FORMAT STITCH REGISTRATION. Sydney, 2023.",
      "THE EMBROIDERER'S GUIDE TO SPLIT DESIGNS & ACCURATE ALIGNMENT. London, 2022.",
      "ARTRELADOS. Bordados Gigantes no Bastidor Pequeno: O Passo a Passo Definitivo do Split Hooping e Junção de Matrizes. São Paulo: Artrelados, 2024."
    ],
    updatedAt: "2026-08-20"
  }
];

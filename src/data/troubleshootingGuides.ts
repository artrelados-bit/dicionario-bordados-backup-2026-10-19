import { TroubleshootingGuide } from "../types";

export const ALL_TROUBLESHOOTING_GUIDES: TroubleshootingGuide[] = [
  {
    id: "guia-quebra-linha-superior",
    title: "Linha Superior Arrebentando com Frequência",
    category: "Tensão & Calibração",
    symptoms: [
      "A linha superior de poliéster ou rayon quebra a cada poucos minutos de bordado",
      "O fio desfia perto do olho da agulha antes de romper",
      "A máquina para acusando sensor de quebra de linha constantemente"
    ],
    probableCauses: [
      "Agulha com rebarba, chanfro danificado ou desgastada (mais de 8 horas de uso contínuo)",
      "Tensão superior excessivamente apertada (disco de tensão travado com fiapos)",
      "Passagem de linha incorreta (linha escapou do estica-fio ou da mola tira-linhas)",
      "Cone de linha com desenrolamento irregular (fio engatando na base plástica do cone)",
      "Rebarba no furo da chapa de agulha ou na ponta da lançadeira provocada por choque prévio"
    ],
    stepByStepSolution: [
      "1. Troque imediatamente a agulha por uma nova DBxK5 ou 130/705H-E calibre 75/11.",
      "2. Retire a linha do cabeçote e passe um fio dental ou linha de algodão entre os discos de tensão para remover poeira e fiapos compactados.",
      "3. Refaça toda a passagem da linha desde o suporte traseiro, garantindo que o cone gire livremente ou use uma redinha protetora de cone.",
      "4. Afrouxe a tensão superior em 1 a 2 pontos e borde um teste de ponto cheio de 4 mm.",
      "5. Passe uma meia-fina ao redor do orifício da chapa de agulha e da ponta da lançadeira: se puxar fio, passe lixa d'água 1500 com uma gota de óleo mineral."
    ],
    preventiveAdvice: "Troque a agulha a cada 8 a 10 horas de trabalho ou após concluir 2 a 3 milhões de pontos. Use sempre linha de boa qualidade e mantenha os discos limpos.",
    recommendedProductsOrSettings: {
      needle: "75/11 SES (Ponta Bola Fina) ou DBxK5 Gold",
      tension: "110g a 120g na linha superior",
      speed: "650 a 800 PPM",
      stabilizer: "Entretela rasgável 60g ou recortável 80g"
    }
  },
  {
    id: "guia-agulha-quebrando",
    title: "Agulha Quebrando Repentinamente durante o Bordado",
    category: "Agulhas & Fios",
    symptoms: [
      "A agulha entorta ou parte com barulho seco de impacto metálico",
      "A quebra ocorre com frequência em áreas de sobreposição densa ou cantos",
      "Marcas de batida na chapa de agulha ou na sapatilha do calcador"
    ],
    probableCauses: [
      "Calibre da agulha inadequado para o tecido (ex: agulha 65/9 em jeans pesado ou sarja)",
      "Densidade de pontos excessiva na matriz (pontos muito curtos menores que 0.8 mm)",
      "Tecido ou entretela muito frouxo no bastidor, provocando efeito de tamborilamento",
      "Agulha inserida com o lado chanfrado voltado para a posição incorreta",
      "Pantógrafo deslocando enquanto a agulha ainda está dentro do tecido (perda de sincronismo)"
    ],
    stepByStepSolution: [
      "1. Desligue a máquina e retire os fragmentos da agulha quebrada de dentro da caixa de bobina para evitar danos à lançadeira.",
      "2. Instale uma agulha nova adequada: calibre 75/11 para algodão e malha, ou 80/12 a 90/14 para tecidos grossos.",
      "3. Certifique-se de empurrar a haste da agulha até o topo do bloco fixador e aperte o parafuso firmemente sem espanar.",
      "4. No software de matriz, ative o filtro de exclusão de pontos curtos (mínimo de 0.8 mm a 1.0 mm).",
      "5. Ajuste a altura do calcador: quando a agulha estiver no ponto mais baixo, o calcador deve tocar levemente o tecido sem esmagar."
    ],
    preventiveAdvice: "Nunca force o bastidor com as mãos enquanto a máquina estiver rodando e confira se a matriz não possui camadas sobrepostas desnecessárias de ponto tatami.",
    recommendedProductsOrSettings: {
      needle: "DBxK5 Titânio 80/12 para tecidos médios/pesados",
      speed: "600 a 750 PPM",
      stabilizer: "Duas folhas de entretela rasgável 50g ou 1 recortável 80g"
    }
  },
  {
    id: "guia-tecido-franzido-enrugando",
    title: "Bordado Enrugando e Franzindo o Tecido ao Redor",
    category: "Estabilizadores & Entretelas",
    symptoms: [
      "O tecido ao redor do bordado fica franzido e ondulado após retirar do bastidor",
      "As letras parecem repuxadas e perdem o alinhamento reto",
      "O avesso do tecido fica com pregas repuxadas sob a entretela"
    ],
    probableCauses: [
      "Entretela insuficiente para a gramatura do tecido (apenas 1 folha fina em malha elástica)",
      "Tecido esticado manualmente com força ao fechar o bastidor (erro clássico)",
      "Falta de compensação de encolhimento (Pull Compensation) na programação da matriz",
      "Tensão da linha superior excessivamente apertada puxando o tecido para o centro",
      "Ausência de pontos de suporte (underlay) adequados na base do bordado"
    ],
    stepByStepSolution: [
      "1. Ao colocar no bastidor, NUNCA estique o tecido com os dedos após fechar o aro! O tecido deve repousar reto e neutro, como uma folha de papel lisa.",
      "2. Em tecidos com elastano ou malha, use entretela de malha ou entretela recortável (Cutaway) de 80g a 90g com cola spray temporária.",
      "3. Reduza a tensão da linha superior em 1 ponto para evitar tração mecânica excessiva.",
      "4. Na matriz, aumente a compensação de encolhimento para 0.35 mm a 0.40 mm e assegure um underlay cruzado (tatami leve a 90°).",
      "5. Reduza a velocidade de rotação da máquina para diminuir a vibração inercial."
    ],
    preventiveAdvice: "A entretela correta suporta 80% da tração dos pontos. Malha sempre exige entretela recortável e estabilidade neutra no bastidor.",
    recommendedProductsOrSettings: {
      stabilizer: "Entretela recortável de poliéster 80g + cola spray temporária",
      tension: "100g a 115g na linha superior",
      speed: "650 a 750 PPM"
    }
  },
  {
    id: "guia-ninho-de-passaro",
    title: "Ninho de Pássaro (Linha Embolando Inteira Embaixo da Chapa)",
    category: "Tensão & Calibração",
    symptoms: [
      "Um bolo enorme de fios coloridos se forma embaixo do tecido prendendo a peça na chapa",
      "A máquina trava de repente com estalos e a barra de agulha não sobe",
      "O tecido afunda no furo da chapa de agulha"
    ],
    probableCauses: [
      "Passagem da linha superior com o calcador ABAIXADO durante a colocação (os discos de tensão estavam fechados e a linha não entrou neles)",
      "A linha superior desengatou do estica-fio móvel no meio da costura",
      "Caixa de bobina sem tensão ou colocada de forma incorreta no trilho da lançadeira",
      "Acúmulo de poeira têxtil ou fiapo sob a mola de lâmina da caixa de bobina"
    ],
    stepByStepSolution: [
      "1. NUNCA puxe o bastidor com força bruta! Corte o bolo de fios por baixo da chapa com a tesourinha pelicano ou lâmina descosturadora.",
      "2. Retire o bastidor, remova a chapa de agulha e limpe todo o emaranhado de linha preso na lançadeira.",
      "3. Levante o calcador da máquina (isso abre os discos de tensão) e refaça a passagem completa da linha superior garantindo que passe pelo estica-fio.",
      "4. Retire a bobina da caixinha, passe um papel fino sob a mola metálica da bobina para tirar resíduos de cera e confirme a tensão (teste do ioiô: deve descer 3 a 5 cm ao sacudir levemente).",
      "5. Reinstale a caixa de bobina ouvindo o clique característico de travamento."
    ],
    preventiveAdvice: "Regra de ouro: SEMPRE passe a linha superior na máquina com o calcador levantado! Isso garante que a linha entre profundamente entre os discos tensores.",
    recommendedProductsOrSettings: {
      tension: "Tensão da bobina calibrada em 20g a 25g no tensiômetro Towa",
      needle: "75/11 padrão",
      speed: "650 a 800 PPM"
    }
  },
  {
    id: "guia-pontos-pulados",
    title: "Pontos Pulados e Falhas na Formação da Laçada",
    category: "Componentes da Máquina",
    symptoms: [
      "A linha não quebra, mas a máquina deixa furos vazios no tecido sem costura",
      "As colunas de ponto cheio ficam com dentes e vãos sem cobertura",
      "O avesso apresenta trechos sem amarração da linha inferior"
    ],
    probableCauses: [
      "Agulha torta ou ligeiramente empenada por impacto anterior",
      "Agulha inserida até altura insuficiente no bloco fixador",
      "Distância entre a ponta da lançadeira e a agulha muito afastada (folga maior que 0.10 mm)",
      "Tecido vibrando e subindo junto com a agulha (calcador muito alto)",
      "Uso de agulha com ponta rombuda em tecido sintético denso"
    ],
    stepByStepSolution: [
      "1. Retire a agulha e coloque-a sobre uma superfície de vidro plano: se o corpo da agulha não tocar por igual, ela está empenada e deve ser descartada.",
      "2. Coloque uma agulha nova empurrando-a até o fim do curso e certifique-se de que o chanfro (scarf) está virado para trás ou para o lado da ponta da lançadeira.",
      "3. Baixe a agulha no volante manual até a posição mais baixa e confira a altura da sapatilha do calcador (deve ficar a 1.0 mm do tecido).",
      "4. Se o problema persistir em todas as cores, chame o técnico para calibrar o ponto de sincronismo (timing) da lançadeira.",
      "5. Em toalhas e veludos, adicione filme hidrossolúvel transparente no topo para apoiar a agulha."
    ],
    preventiveAdvice: "Inspecione as agulhas regularmente e mantenha a lubrificação da pista da lançadeira com 1 gota de óleo mineral a cada 4 horas de uso contínuo.",
    recommendedProductsOrSettings: {
      needle: "75/11 SES ponta bola ou 80/12 Universal",
      speed: "700 PPM"
    }
  },
  {
    id: "guia-linha-bobina-subindo",
    title: "Linha Branca da Bobina Aparecendo na Frente do Bordado",
    category: "Tensão & Calibração",
    symptoms: [
      "Pequenos pontos brancos ('pipocas') surgem no meio do bordado colorido no topo da peça",
      "A linha da bobina fica frouxa no avesso e é puxada para a frente",
      "As colunas de ponto cheio perdem a cor viva e parecem salpicadas de branco"
    ],
    probableCauses: [
      "Tensão da bobina excessivamente frouxa (parafuso da mola descalibrado)",
      "Fiapo ou fragmento de linha preso sob a lâmina de pressão da caixa de bobina",
      "Tensão da linha superior muito apertada (puxando a bobina para cima com força)",
      "Bobina enrolada de forma frouxa, irregular ou sem tensão uniforme"
    ],
    stepByStepSolution: [
      "1. Retire a caixa de bobina e limpe sob a mola com um pedaço de linha ou ar comprimido.",
      "2. Aperte suavemente o parafuso pequeno da caixa de bobina no sentido horário (como um relógio: 1/8 de volta por vez).",
      "3. Afrouxe a tensão superior em 0.5 a 1 ponto.",
      "4. Verifique a bobina: se o enrolamento estiver fofo ou cônico, descarte e use uma bobina pré-enrolada de fábrica (filamento contínuo de poliéster 60/70).",
      "5. Borde uma coluna teste de ponto cheio de 5 mm e vire o avesso: você deve ver 1/3 de cor na esquerda, 1/3 de branco no meio e 1/3 de cor na direita."
    ],
    preventiveAdvice: "Use bobinas pré-enroladas com núcleo plástico de boa procedência e calibre a caixa de bobina sempre antes de mexer na tensão superior.",
    recommendedProductsOrSettings: {
      tension: "Bobina: 22g a 25g no Towa / Superior: 110g",
      bobbinTension: "22g",
      speed: "700 a 800 PPM"
    }
  },
  {
    id: "guia-desalinhamento-contorno",
    title: "Bordado Desalinhado / Frestas entre o Preenchimento e o Contorno",
    category: "Programação de Bordado",
    symptoms: [
      "O contorno preto em ponto cheio fica deslocado para o lado deixando um vão branco mostrando o tecido",
      "O desenho perde o encaixe perfeito entre as cores",
      "O deslocamento é sempre maior no sentido paralelo ao ponto tatami"
    ],
    probableCauses: [
      "Efeito físico de empurrar e puxar (Push and Pull) não compensado na matriz",
      "Falta de transpasse (Overlap) entre o fundo de tatami e as bordas de cetim",
      "Bastidor com aro frouxo ou tecido deslizando durante os saltos em alta velocidade",
      "Entretela fraca que rompeu com a perfuração densa da agulha"
    ],
    stepByStepSolution: [
      "1. No software de matriz, adicione pelo menos 0.4 mm a 0.6 mm de transpasse fazendo o tatami entrar por baixo do contorno.",
      "2. Aumente a Compensação de Puxão (Pull Compensation) para 0.35 mm no objeto de preenchimento.",
      "3. Use duas camadas de entretela rasgável de 50g dispostas em cruz (uma no sentido do fio e outra no contra-fio) ou uma camada de recortável 80g.",
      "4. Aperte o parafuso do bastidor com uma chave de fenda (sem forçar até quebrar o plástico) ou use bastidor magnético.",
      "5. Programe os pontos de suporte (underlay) do tatami em ângulo cruzado a 90° para travar as fibras do tecido antes do acabamento."
    ],
    preventiveAdvice: "Sempre antecipe o encolhimento natural do tecido programando áreas de sobreposição generosas entre cores adjacentes.",
    recommendedProductsOrSettings: {
      stabilizer: "2 camadas de entretela rasgável em sentidos opostos",
      speed: "650 a 700 PPM"
    }
  }
];

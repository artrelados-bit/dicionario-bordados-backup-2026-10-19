import { Verbete } from "../types";

export const VERBETES_LETTER_Q12: Verbete[] = [
  {
    "id": "q-086-quadro-de-tempos-e-metodos-de-bordado",
    "code": "Q-086",
    "term": "Quadro de Tempos e Métodos de Bordado (Standard Time & Motion Study - MTM no Ateliê)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Gestão do Ateliê e Produção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim quadrum (tabela analítica) e do grego methodos (estudo científico da economia de movimentos e tempos padrão de trabalho).",
    "summary": "Metodologia de engenharia de produção aplicada ao ateliê para cronometrar, padronizar e otimizar cada microetapa (corte de entretela, montagem do bastidor, tempo de máquina, desfiamento e embalagem), aumentando a lucratividade e o rendimento diário.",
    "definition": "Quadro de Tempos e Métodos de Bordado (Standard Time & Motion Study - MTM, Lean Embroidery Production & Cycle Time Optimization) é o sistema analítico de cronoanálise que quantifica o tempo padrão de cada etapa do fluxo de trabalho no ateliê. A produção de um bordado não se resume aos minutos que a máquina leva para costurar os pontos: envolve o Tempo de Preparação (corte de entretela e tecido), Tempo de Enquadramento no Bastidor, Tempo de Troca de Linha/Cores, Tempo Real de Máquina, Tempo de Acabamento (corte de fios de salto e remoção de entretela) e Tempo de Passadoria/Embalagem. Ao mapear o ciclo total com uma planilha ou quadro de tempos, a bordadeira descobre gargalos ocultos, precifica os produtos com lucro real baseado no custo do minuto de ateliê e consegue dobrar sua capacidade diária sem precisar trabalhar mais horas.",
    "technicalDetails": "Equação do Ciclo Total: T_Total = T_Setup + T_Bastidor + (Pontos / PPM_Real) + T_Trocas + T_Acabamento + T_Embalagem. PPM Real médio da máquina (considerando acelerações e paradas): ~70% a 80% da velocidade nominal configurada. Custo do Minuto do Ateliê: (Despesas Fixas + Pró-Labore) / Minutos Produtivos Mensais. Ganho típico de produtividade com método MTM: 30% a 50% mais peças produzidas por turno.",
    "construction": [
      "Quadro físico ou planilha digital de Tempos e Métodos com colunas de etapas cronometradas",
      "Cronômetro digital para medição de amostragens reais de ciclos de trabalho",
      "Estação de montagem de bastidores organizada no conceito 5S (tudo ao alcance das mãos)",
      "Tabela de tempos padrão por categoria de produto (toalhas, camisas polo, naninhas, bonés)",
      "Calculadora de precificação automática multiplicando tempo gasto pelo valor do minuto"
    ],
    "howItWorks": [
      "1. A bordadeira acha que gasta apenas 10 minutos para bordar uma toalha de banho com 8.000 pontos.",
      "2. Decide cronometrar o processo real completo usando o Quadro de Tempos e Métodos.",
      "3. Descobre a verdade: Leva 4 minutos procurando a linha e cortando a entretela; 5 minutos sofrendo para apertar o bastidor com a toalha grossa; 12 minutos de máquina; 6 minutos cortando fios e limpando o plástico solúvel; e 3 minutos passando e embalando. Tempo total real: 30 minutos!",
      "4. Ao analisar o quadro, ela aplica melhorias do método Lean: organiza as linhas e entretelas já pré-cortadas, passa a usar um bastidor magnético rápido e otimiza a matriz no software para ter menos cortes de linha.",
      "5. O tempo total cai de 30 minutos para apenas 16 minutos por toalha.",
      "6. Ela passa a conseguir produzir quase o dobro de toalhas no mesmo dia, dobrando seu lucro líquido!"
    ],
    "mainTypes": [
      "Quadro de Tempos de Processo Unitário (Mapeamento de 1 peça do início ao fim para precificação)",
      "Quadro de Lotes e Produção em Série (Cronometragem de pedidos de 50 a 500 peças de uniformes)",
      "Matriz de Eficiência Global da Máquina - OEE (Calcula o percentual de tempo que a máquina realmente passou bordando)"
    ],
    "characteristics": [
      "Visão cristalina de onde o tempo do ateliê está sendo desperdiçado de verdade",
      "Precificação 100% justa e lucrativa que nunca mais deixa você pagar para trabalhar",
      "Aumento imediato da produtividade diária com menos cansaço físico",
      "Organização profissional que transmite confiança e pontualidade na entrega"
    ],
    "limitations": [
      "Nunca calcular o preço de um bordado olhando apenas para a quantidade de pontos da máquina",
      "Não tentar acelerar a produção pulando etapas cruciais de controle de qualidade e acabamento",
      "Atualizar a tabela de tempos quando adquirir equipamentos mais rápidos (como bastidores magnéticos)"
    ],
    "numberingSystem": [
      "Eficiência Real da Máquina: 70% - 80% do PPM Nominal",
      "Redução de Tempo de Setup: até 60%",
      "Amostragem Mínima de Medição: 3 a 5 ciclos completos"
    ],
    "advantages": [
      "✔ Você descobre o valor exato do seu minuto de trabalho para nunca mais cobrar barato por engano",
      "✔ Consegue entregar encomendas na metade do tempo sem se desesperar com prazos",
      "✔ Transforma seu ateliê em um negócio altamente organizado, profissional e lucrativo"
    ],
    "commonErrors": [
      "❌ Cobrar o bordado só pelos pontos da máquina e esquecer do tempo gasto cortando entretela e embalando",
      "❌ Perder 15 minutos procurando uma tesoura ou cone de linha que sumiu na bagunça da mesa",
      "❌ Borda matrizes cheias de cortes desnecessários que fazem a máquina parar a cada 10 segundos"
    ],
    "voceSabia": "O estudo de Tempos e Métodos (*Time and Motion Study*) foi criado pelos engenheiros Frederick Taylor e Frank & Lillian Gilbreth no início do século XX e foi o responsável por revolucionar a produção industrial moderna e a cirurgia hospitalar!",
    "curiosidadeTecnica": "Em operações de bordado sem cronoanálise, o tempo que a máquina de fato passa bordando (*Spindle Uptime*) costuma ser de apenas 35% da jornada de trabalho; com um fluxo padronizado de bancada, esse índice sobe para mais de 75%.",
    "dicaArtrelados": "Faça a experiência no seu ateliê hoje mesmo com a **Regra dos 5 Minutos Pré-Produção**: deixe um gaveteiro com pedaços de entretela já cortados no tamanho dos seus bastidores mais usados, deixe suas tesourinhas amarradas em um ponto fixo e organize as linhas do pedido antes de ligar a máquina. Você vai economizar mais de 1 hora livre todo santo dia!",
    "comparisonTable": {
      "headers": [
        "Etapa de Produção",
        "Tempo sem Padronização",
        "Tempo com Método Otimizado",
        "Ganho de Produtividade"
      ],
      "rows": [
        [
          "Preparação e Corte de Insumos",
          "6 minutos (procurando e medindo)",
          "1 minuto (insumos pré-cortados)",
          "+ 500% mais rápido"
        ],
        [
          "Enquadramento no Bastidor",
          "5 minutos (ajustando parafusos)",
          "30 segundos (bastidor magnético)",
          "+ 900% mais rápido"
        ],
        [
          "Bordado na Máquina",
          "15 minutos (com 18 cortes de linha)",
          "11 minutos (matriz otimizada)",
          "+ 27% mais rápido"
        ],
        [
          "Limpeza e Acabamento Final",
          "7 minutos (tesourinha comum)",
          "2 minutos (ferramentas certas)",
          "+ 250% mais rápido"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão calibrado",
      "needleType": "Padrão",
      "stabilizer": "Padrão pré-cortado",
      "threadTension": "Padrão",
      "density": "Padrão"
    },
    "applications": [
      "Formação de preços de venda e orçamentos rápidos para clientes corporativos",
      "Planejamento de capacidade de entrega de grandes encomendas de fim de ano e volta às aulas",
      "Treinamento de novos ajudantes e operadoras para ateliês em crescimento",
      "Redução de custos operacionais e eliminação de horas extras cansativas"
    ],
    "troubleshootingTips": [
      "Cronometre 3 peças com um relógio no celular e anote em um caderninho para descobrir sua média real",
      "Junte todos os cortes de linha no software para que a máquina não fique parando toda hora",
      "Tenha uma tesoura de ponta curvada boa e afiada sempre à mão para limpar os fios em segundos"
    ],
    "relatedTerms": [
      "Gestão do Ateliê e Produção",
      "Organização Ergonômica da Estação de Montagem de Bastidores",
      "Quik-Snap e Bastidores Magnéticos de Fixação Rápida",
      "Mecânica & Manutenção",
      "Digitalização & Software"
    ],
    "tags": [
      "q-086",
      "tempos e metodos",
      "gestao de producao",
      "precificacao",
      "produtividade",
      "gestao do atelie e producao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LEAN MANUFACTURING IN APPAREL & EMBROIDERY: Time and Motion Studies, Ergonomic Flow & Standard Costing. Geneva, 2021.",
      "PARRISH, Gail. Operational Efficiency and Chronoanalysis in Commercial Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um cronômetro e meça quanto tempo você leva para montar uma toalha no bastidor hoje. Depois, organize a mesa, deixe a entretela cortada ao lado e tente de novo. Anote a diferença e comemore os minutos que você acabou de ganhar!",
    "quickSummary": "O método de cronometrar cada passo do bordado para saber quanto cobrar e produzir muito mais rápido.",
    "beginnerExplanation": "O quadro de tempos e métodos é um jeito inteligente de marcar no relógio quanto tempo você gasta para preparar o tecido, colocar no bastidor, bordar e limpar a peça. Quando você vê onde está perdendo tempo, consegue organizar sua mesinha para trabalhar mais rápido, cansar menos e ganhar muito mais dinheiro!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-087-quick-change-bobbin-e-bobinas-magne-ticas-pre-enroladas",
    "code": "Q-087",
    "term": "Quick-Change Bobbin e Bobinas Magnéticas Pré-Enroladas (Quick-Change Bobbins & Magna-Glide System)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Insumos & Fios",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do inglês quick-change (troca rápida de bobina) e magnetic core (núcleo magnético de rotação estabilizada).",
    "summary": "Tecnologia de bobinas industriais pré-enroladas com núcleo magnético patenteado (estilo Magna-Glide) e carretéis sem laterais de papel que garantem tensão milimetricamente constante de 20 a 25 gf do início ao fim da costura.",
    "definition": "Quick-Change Bobbin e Bobinas Magnéticas Pré-Enroladas (Magnetic Core Pre-Wound Bobbins, Magna-Glide Technology & Continuous Tension Control) é o padrão de excelência para a linha inferior em máquinas de bordar computadorizadas. Bobinas de plástico enroladas manualmente na máquina frequentemente sofrem de tensão desuniforme, enrolamento cônico e 'folga inercial' (*Bobbin Overspin*), girando soltas e embolando quando a máquina freia bruscamente de 1.000 para 0 PPM. As bobinas pré-enroladas com núcleo magnético possuem um micro-ímã central que atrai a base de aço da caixa de bobina, criando um freio magnético dinâmico sem atrito que elimina 100% da folga inercial e fornece tensão uniforme do primeiro ao último metro de linha de filamento contínuo de poliéster 60wt.",
    "technicalDetails": "Tipo de fio da bobina: Filamento contínuo de poliéster 60wt / 70wt (alta tenacidade e espessura ultrafina). Metragem por bobina padrão Estilo L: ~120 a 135 metros (40% a mais de linha que uma bobina comum enrolada à mão). Tensão de saída calibrada: 20 a 25 gf constantes (zero variação até o fim). Eliminação de mola de freio mecânica: Não necessita da mola de lâmina interna da caixa de bobina.",
    "construction": [
      "Núcleo central ferromagnético embutido ou pastilha magnética de alta precisão",
      "Bobinamento industrial computadorizado com precisão de enrolamento paralelo cruzado",
      "Linha de filamento contínuo de poliéster virgem ultrafina 60wt/70wt sem nós",
      "Design sem flanges plásticas laterais (*Magnetic Core / Sideless*) para máximo volume",
      "Caixa de bobina compatível em aço magnético polido com mola tensora calibrada"
    ],
    "howItWorks": [
      "1. A operadora remove a bobina gasta da máquina em 3 segundos.",
      "2. Pega uma bobina magnética pré-enrolada nova da caixa e insere diretamente na caixa de bobina (com o lado magnético voltado para o fundo de aço).",
      "3. Puxa a linha pela mola de tensão da caixa: o micro-ímã do núcleo ancora suavemente no metal.",
      "4. A máquina borda a 1.000 PPM executando centenas de cortes e paradas bruscas.",
      "5. A cada parada, o ímã impede que a bobina continue girando solta, evitando nós e laçadas frouxas.",
      "6. A tensão da linha inferior permanece cravada em 22 gf até o último centímetro de linha.",
      "7. No avesso do bordado, a coluna de ponto cheio exibe o padrão perfeito de 1/3 de linha branca no centro, sem linha de bobina subindo para a frente da peça."
    ],
    "mainTypes": [
      "Bobinas Magnéticas Estilo L (Padrão para a maioria das máquinas industriais e semiprofissionais)",
      "Bobinas Magnéticas Estilo M (Grandes, com o dobro de capacidade para máquinas de acolchoamento e industriais pesadas)",
      "Bobinas Pré-Enroladas Sideless com Núcleo Plástico (Sem laterais de papelão, para redução de atrito)"
    ],
    "characteristics": [
      "Tensão da linha inferior 100% constante do início ao fim sem precisar regular toda hora",
      "Cabe até 40% mais linha na mesma bobina, reduzindo as paradas de troca pela metade",
      "Eliminação definitiva de linha de bobina embolando ou subindo para a frente do bordado",
      "Zero resíduo de pó de papel dentro da caixa de bobina da máquina"
    ],
    "limitations": [
      "Sempre colocar a bobina com o lado magnético voltado para o fundo da caixa de bobina",
      "Em caixas de bobina que possuem uma molinha circular de freio no fundo, deve-se retirar essa mola mecânica para usar bobina magnética",
      "Não descartar caixas de bobina com óleo acumulado que possa enfraquecer o contato magnético"
    ],
    "numberingSystem": [
      "Estilo de Bobina: Estilo L (Padrão) / Estilo M (Jumbo)",
      "Título do Fio: Poliéster 60wt / 70wt",
      "Metragem Média: 120 a 135 metros por carretel"
    ],
    "advantages": [
      "✔ Acaba de vez com o sofrimento de ficar enchendo bobina na mão toda hora",
      "✔ Garante que o avesso do seu bordado fique limpo, macio e perfeito como de indústria",
      "✔ Aumenta a velocidade de produção permitindo que a máquina borde por muito mais tempo sem parar"
    ],
    "commonErrors": [
      "❌ Enrolar bobina na máquina com linha comum de cima grossa (40wt), deixando a bobina gorda e pesada",
      "❌ Colocar a bobina magnética invertida (com o lado do ímã virado para fora)",
      "❌ Deixar linha frouxa ao encher carretéis de plástico, criando trancos e quebras de agulha"
    ],
    "voceSabia": "A tecnologia das bobinas Magna-Glide com núcleo magnético foi desenvolvida e patenteada nos Estados Unidos pela empresa Fil-Tec e é considerada a maior revolução na física de costura inferior dos últimos 50 anos!",
    "curiosidadeTecnica": "O enrolamento industrial de uma bobina pré-enrolada é feito sob controle computadorizado de tensão a laser com precisão de ± 0,5 gf, algo humanamente impossível de ser reproduzido no enchedor manual acoplado na máquina de bordar.",
    "dicaArtrelados": "Se você quer ver seus bordados atingirem outro nível de perfeição: **comece a usar bobinas industriais pré-enroladas magnéticas!** Uma caixinha com 100 bobinas dura meses no ateliê, você nunca mais perde tempo enchendo carretel na máquina e a linha de baixo nunca mais vai subir para a frente do seu bordado!",
    "comparisonTable": {
      "headers": [
        "Tipo de Bobina",
        "Metragem de Linha",
        "Estabilidade de Tensão",
        "Tempo Gasto pelo Operador"
      ],
      "rows": [
        [
          "Bobina Magnética Pré-Enrolada",
          "130 metros (fio 60wt fino)",
          "100% Estável (freio magnético)",
          "3 segundos para trocar"
        ],
        [
          "Bobina Pré-Enrolada de Papelão",
          "115 metros",
          "Boa (pode gerar pó de papel)",
          "3 segundos para trocar"
        ],
        [
          "Bobina Plástica Enrolada na Mão",
          "70 a 85 metros (fio 40wt grosso)",
          "Instável (folga inercial frequente)",
          "3 a 5 minutos enchendo carretel"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção até 1.000 PPM",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Caixa de bobina calibrada para 22 gf",
      "density": "Padrão"
    },
    "applications": [
      "Produção profissional e contínua em ateliês e indústrias de bordado",
      "Bordados em peças finas onde o avesso precisa ser extremamente macio (enxovais de bebê)",
      "Eliminação de paradas frequentes em bordados grandes com mais de 50.000 pontos",
      "Padronização técnica de tensão em máquinas multiagulhas"
    ],
    "troubleshootingTips": [
      "Se a linha branca da bobina estiver aparecendo na frente do bordado, aperte 1/8 de volta o parafuso da caixinha de bobina",
      "Limpe a caixinha com um pincel macio a cada troca de bobina para retirar qualquer fiapinho",
      "Compre sempre caixas fechadas de bobinas para economizar no frete e garantir o mesmo lote de linha"
    ],
    "relatedTerms": [
      "Insumos & Fios",
      "Mecânica & Manutenção",
      "Passagem de Linha Superior e Sistema de Guias, Pratos e Estica-Fio",
      "Linha de Bordar 40wt",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-087",
      "bobina magnetica",
      "pre-enrolada",
      "magna-glide",
      "linha inferior",
      "insumos e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "FIL-TEC MAGNA-GLIDE TECHNICAL STANDARDS: Magnetic Core Bobbin Dynamics & Tension Precision. Hagerstown, 2021.",
      "PARRISH, Gail. Underthread Engineering: Pre-Wound Bobbins, Inertial Braking and High-Speed Stitch Stability. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque uma bobina que você encheu na mão na sua máquina e borde uma coluna de ponto cheio de 10 cm. Depois, coloque uma bobina pré-enrolada magnética e borde a mesma coluna ao lado. Vire o tecido do avesso e compare: a versão pré-enrolada fica com uma faixa central perfeita como régua!",
    "quickSummary": "As bobinas prontas com ímã no meio que já vêm com a linha fininha perfeita para nunca embolar nem subir pro direito.",
    "beginnerExplanation": "Em vez de você ter que parar tudo para ficar enchendo carretel de linha na máquina toda hora, existem as bobinas prontas que já vêm enroladas de fábrica! Elas têm um pequeno ímã no fundo que gruda na caixinha de metal da máquina, fazendo a linha correr macia do começo ao fim sem embolar e sem puxar para a frente da roupa!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-088-quilted-applique-aplique-acolchoado-com-matelasse-embutido",
    "code": "Q-088",
    "term": "Quilted Appliqué (Aplique Acolchoado com Matelassê Embutido no Bastidor)",
    "letter": "Q",
    "level": "Intermediário 🟡",
    "category": "Técnicas de Bordado",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do francês appliquér (sobrepor tecido recortado) e do inglês quilted (acolchoado em relevo matelassado com manta interna).",
    "summary": "Técnica mista sofisticada que combina a inserção de manta acrílica fina (R1/R2) sob o tecido de aplique, pespontos geométricos decorativos de matelassê no interior do recorte e acabamento perimetral em ponto cheio ou ponto caseado.",
    "definition": "Quilted Appliqué (Padded In-The-Hoop Quilted Appliqué, Dimensional Trapunto Patchwork & Structured Loft Appliqué) é a técnica de bordado computadorizado que une o aplique de tecido tradicional ao acolchoamento estruturado (*Matelassê*). Durante a execução no bastidor (*In The Hoop*), após a marcação da forma, a bordadeira sobrepõe uma camada de manta acrílica resinada ultrafina (R1 ou R2 de 100g) juntamente com o tecido de topo; a máquina executa pespontos decorativos internos (como meandros, diamantes ou espirais) que comprimem a manta seletivamente, criando um relevo acolchoado macio e tridimensional (*Puff Quilted Effect*), sendo finalizado pelo corte rente das sobras e cobertura perimetral em ponto cheio acetinado (*Satin*) ou ponto caseado clássico (*Blanket Stitch*).",
    "technicalDetails": "Gramatura ideal da manta acrílica: 80 a 100 g/m² (Manta R1 resinada em um dos lados para evitar deslocamento). Densidade do pesponto interno de quilting: Ponto reto triplo (*Bean Stitch*) de 2,5 mm a 3,0 mm. Compensação de encolhimento perimetral: + 0,5 mm a + 0,8 mm no ponto cheio final para cobrir a espessura da manta. Tipo de agulha recomendado: 75/11 SES ponta bola leve.",
    "construction": [
      "Tecido de base estabilizado com entretela de algodão ou rasgadeira firme",
      "Manta acrílica de baixa densidade (R1/R2) pré-cortada no tamanho do aplique",
      "Tecido de topo estampado ou liso (100% algodão tricoline lavado e passado)",
      "Tesoura especial tipo 'Patinha de Pato' (Pelican Appliqué Scissors) para recorte rente",
      "Cola temporária em spray ou fita crepe de papel para fixação sem pregas no bastidor"
    ],
    "howItWorks": [
      "1. A máquina executa a Linha de Marcação 1 (*Placement Stitch*) no tecido de base delimitando o desenho (ex: um ursinho).",
      "2. A bordadeira apoia a manta acrílica fina R1 e o tecido de tricoline estampado por cima da área demarcada.",
      "3. A máquina executa a Linha de Fixação 2 (*Tackdown Stitch*) prendendo todas as camadas juntas.",
      "4. Em seguida, a máquina executa o Pesponto de Quilting Interno (costurando um padrão de losangos sobre o corpinho do urso).",
      "5. A bordadeira retira o bastidor da máquina (sem soltar o tecido do aro) e usa a tesoura patinha de pato para cortar o excesso de tecido e manta bem rente à costura externa.",
      "6. Recoloca o bastidor na máquina: a máquina executa a borda de ponto cheio acetinado de 3,5 mm cobrindo 100% do corte.",
      "7. O resultado é um ursinho fofinho em relevo acolchoado matelassado com acabamento de boutique de luxo!"
    ],
    "mainTypes": [
      "Quilted Appliqué com Matelassê em Losangos (Efeito clássico de almofada elegante)",
      "Quilted Appliqué com Pesponto Livre/Meandros (Estilo artesanal de quilting rústico)",
      "Quilted Appliqué com Ponto Caseado Rústico (Visual aconchegante para enxovais infantis e cozinha country)"
    ],
    "characteristics": [
      "Volume tridimensional macio e fofinho muito superior ao aplique plano comum",
      "Redução drástica na quantidade total de pontos da matriz (econômico e rápido)",
      "Acabamento sofisticado com alto apelo visual para artigos infantis e decoração",
      "Lavável e durável mantendo a forma acolchoada mesmo após muitas lavagens"
    ],
    "limitations": [
      "Não utilizar mantas acrílicas grossas demais (> 150g) que possam empedrar ou travar o calcador da máquina",
      "Sempre cortar o excesso de manta bem rente para não criar calombos por baixo do ponto cheio",
      "Passar o tecido de algodão a ferro com vapor antes de cortar para evitar encolhimento posterior"
    ],
    "numberingSystem": [
      "Gramatura da Manta: 80 - 100 g/m² R1/R2",
      "Largura do Ponto Cheio de Borda: 3,5 mm a 4,5 mm",
      "Comprimento do Pesponto de Quilting: 2,5 mm a 3,0 mm"
    ],
    "advantages": [
      "✔ Agrega um charme irresistível e acabamento nobre de luxo em peças de bebê e almofadas",
      "✔ Borda desenhos grandes e volumosos em poucos minutos economizando milhares de pontos",
      "✔ Permite aproveitar retalhos lindos de tecidos estampados com manta que sobraram no ateliê"
    ],
    "commonErrors": [
      "❌ Usar manta muito grossa que faz o ponto cheio ficar frouxo e torto nas beiradas",
      "❌ Cortar o tecido longe da costura, deixando fiapos feios saindo para fora do contorno",
      "❌ Soltar o tecido do bastidor para cortar o aplique (nunca solte o tecido do aro do bastidor!)"
    ],
    "voceSabia": "A combinação de apliques de tecido com acolchoamento interno nasceu no século XVIII nos palácios da França e da Itália, onde colchas reais eram adornadas com brasões almofadados em seda e veludo chamados de *Trapunto Imperial*!",
    "curiosidadeTecnica": "A adição da manta acrílica interna aumenta a espessura do sanduíche em cerca de 1,8 mm; por isso, a compensação de encolhimento (*Pull Comp*) do contorno final deve ser ajustada para no mínimo 0,6 mm para compensar o ângulo de elevação do ponto cheio.",
    "dicaArtrelados": "O truque de mestre para um **Aplique Acolchoado Perfeito no Ateliê Artrelados**: use uma manta fina resinada (R1) e borrife um pouquinho de cola temporária para o tecido de algodão não escorregar. E use sempre a **Tesoura Patinha de Pato (Pelican)**: o bico largo dela protege o tecido de baixo e permite que você corte o excesso de tecido e manta coladinho na costura em segundos sem medo de furar a peça!",
    "comparisonTable": {
      "headers": [
        "Técnica de Aplique",
        "Relevo e Toque",
        "Tempo de Execução",
        "Valor Agregado"
      ],
      "rows": [
        [
          "Quilted Appliqué (com Manta e Matelassê)",
          "Tridimensional, fofo e acolchoado",
          "Médio (com etapa de quilting)",
          "Altíssimo (peça de luxo artesanal)"
        ],
        [
          "Aplique Tradicional Plano",
          "Plano e liso",
          "Rápido",
          "Médio"
        ],
        [
          "Bordado 100% Preenchido com Linha",
          "Firme e pesado",
          "Longo (milhares de pontos)",
          "Alto (alto consumo de linha)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "700 - 800 PPM",
      "needleType": "75/11 SES ponta bola leve",
      "stabilizer": "Entretela rasgadeira ou algodão de 80g",
      "threadTension": "Padrão calibrado",
      "density": "Borda de contorno: 0.38 mm / Pesponto: 2.8 mm"
    },
    "applications": [
      "Enxovais completos de bebê (kit de berço, naninhas, almofadas e bolsas maternidade)",
      "Colchas de patchwork, mantas de sofá e peseiras de cama de casal",
      "Panos de prato de luxo e jogos americanos acolchoados para cozinha gourmet",
      "Quadros decorativos e bastidores de parede para quartos infantis"
    ],
    "troubleshootingTips": [
      "Se a manta estiver desfiando na hora de cortar, use uma tesoura bem afiada de micro-serrilha",
      "Tire o bastidor da máquina com cuidado, apoie em uma mesa plana para cortar e recoloque na máquina",
      "Passe a ferro com pano úmido por cima após terminar para assentar o relevo fofinho"
    ],
    "relatedTerms": [
      "Técnicas de Bordado",
      "Ponto Cheio (Satin Stitch)",
      "Ponto Caseado (Blanket Stitch)",
      "Acessórios & Bastidores",
      "Tipos de Tecidos"
    ],
    "tags": [
      "q-088",
      "quilted applique",
      "aplique acolchoado",
      "matelasse",
      "in the hoop",
      "tecnicas de bordado",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "IN THE HOOP DIMENSIONAL EMBROIDERY: Quilted Appliqué, Loft Dynamics & Edge Finishing. Melbourne, 2021.",
      "PARRISH, Gail. Structured Appliqué Techniques: Batting Integration, Trapunto Relief and Precision Trimming. Cincinnati, 2022."
    ],
    "practicalExercise": "Crie no seu programa de matrizes um coração simples com uma linha de marcação, pespontos internos de losangos e contorno de ponto cheio. Borde sobre um pedaço de tecido com manta R1 por baixo e encante-se com o toque macio e almofadado do resultado!",
    "quickSummary": "A técnica de colocar uma manta fofinha dentro do aplique de tecido com costurinhas decorativas de matelassê.",
    "beginnerExplanation": "O aplique acolchoado é quando você coloca um pedacinho de manta bem fofinha por baixo do tecido estampado e a máquina faz costurinhas de desenho por cima antes de fechar o contorno! O desenho fica gordinho, macio e fofinho como uma mini almofadinha!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-089-quilting-com-guia-laser-e-rastreador-de-padroes",
    "code": "Q-089",
    "term": "Quilting com Guia Laser e Rastreador de Padrões (Laser Guided Quilting & Pattern Tracer Protocol)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do acrônimo LASER (Light Amplification by Stimulated Emission of Radiation) e do inglês pattern tracer (rastreador óptico contínuo de coordenadas).",
    "summary": "Sistema de projeção óptica a laser e rastreamento óptico pantográfico que projeta a trajetória exata da costura de acolchoamento sobre colchas e painéis grandes, garantindo continuidade perfeita sem desvios.",
    "definition": "Quilting com Guia Laser e Rastreador de Padrões (Laser-Guided Pantograph Quilting, Optical Pattern Projection & Continuous Boundary Alignment) é o recurso óptico-mecânico utilizado para guiar operações de acolchoamento contínuo em máquinas de bordar e máquinas de braço longo (*Longarm Quilting*). Consiste em um módulo emissor de feixe laser focalizável (cruz, ponto ou linha ultra-fina de 650 nm) acoplado rigidamente ao cabeçote de costura que projeta o ponto exato de descida da agulha ou rastreia uma folha de gabarito gráfico (*Pantograph Paper Roll*) posicionada na mesa traseira. O operador ou o sistema CNC sincroniza o movimento do pantógrafo seguindo a mira laser, garantindo que emendas de blocos de acolchoamento de 2 metros de largura casem com precisão milimétrica sem sobreposições visíveis.",
    "technicalDetails": "Comprimento de onda do laser: 650 nm (Laser Vermelho Classe II, potência < 5mW, seguro para os olhos em reflexão difusa) ou 520 nm (Laser Verde de alto contraste para tecidos claros). Precisão de projeção do ponto zero: ± 0,1 mm no plano do tecido. Rastreamento contínuo: Compatível com pantógrafos de rolo contínuo de até 3,5 metros de largura. Integração de software: Sincronismo óptico com o ponto inicial e final de cada repetição modular.",
    "construction": [
      "Diodo emissor laser semicondutor com lente de foco colimada ajustável",
      "Suporte articulado em alumínio anodizado com ajuste micrométrico nos eixos X, Y e Z",
      "Fonte de alimentação estabilizada conectada à placa de comando da máquina",
      "Mesa traseira de pantógrafo com filme protetor para rolamento de gabaritos impressos",
      "Manoplas de comando ergonômicas com gatilhos de acionamento do feixe óptico"
    ],
    "howItWorks": [
      "1. A bordadeira precisa acolchoar uma colcha de casal grande (2,20 m x 2,40 m) com um desenho contínuo de arabescos florais.",
      "2. Estende a folha de gabarito impresso com o desenho na bancada de rastreamento traseira.",
      "3. Liga o feixe do Guia Laser: uma mira pontual vermelha brilhante ilumina o papel no ponto de início da primeira linha.",
      "4. Segura as manoplas da máquina e aciona a costura: à medida que guia as manoplas fazendo o pontinho laser percorrer a linha desenhada no papel, a agulha da máquina costura exatamente o mesmo traçado sobre a colcha na frente.",
      "5. Ao terminar a primeira passada de 2,20 metros, avança o rolo da colcha com precisão guiada pela mira laser de alinhamento.",
      "6. A colcha inteira é acolchoada com perfeição matemática contínua, sem desvios, sem nós e com espaçamento impecável entre as linhas."
    ],
    "mainTypes": [
      "Guia Laser Traseiro para Rastreamento de Papel (Para condução manual precisa em máquinas longarm)",
      "Projetor Laser Frontal de Ponto de Descida da Agulha (Para alinhamento milimétrico de emendas no bastidor)",
      "Projetor Digital de Gabaritos em Realidade Aumentada (Projeta o desenho inteiro em escala real sobre o tecido)"
    ],
    "characteristics": [
      "Possibilidade de criar acolchoamentos gigantescos em colchas inteiras com desenho contínuo",
      "Precisão milimétrica na conexão entre o final de uma linha e o começo da próxima",
      "Eliminação da necessidade de riscar o tecido da colcha com giz ou canetas que precisam ser lavadas",
      "Fluidez e suavidade de movimento que reduzem a fadiga do operador"
    ],
    "limitations": [
      "Nunca olhar diretamente para a lente do emissor laser ligado",
      "Calibrar o foco do laser sempre que mudar a altura do calcador ou espessura da manta",
      "Exige treino de coordenação motora para acompanhar linhas curvas em velocidade uniforme"
    ],
    "numberingSystem": [
      "Comprimento de Onda: 650 nm (Vermelho) / 520 nm (Verde)",
      "Potência de Emissão: < 5 mW (Classe II)",
      "Precisão de Rastreamento: ± 0,1 mm"
    ],
    "advantages": [
      "✔ Permite criar colchas e edredons de casal deslumbrantes com desenhos contínuos perfeitos",
      "✔ Não precisa riscar o tecido do cliente com giz ou canetas que dão trabalho para sair",
      "✔ Garante que as emendas dos blocos de bordado se encontrem com precisão cirúrgica"
    ],
    "commonErrors": [
      "❌ Movimentar a máquina muito rápido em curvas fechadas, fazendo os pontos ficarem longos e irregulares",
      "❌ Borda sem conferir a calibração do foco laser, operando com a mira desfocada e grossa",
      "❌ Deixar o papel do gabarito torto na mesa traseira, fazendo as linhas da colcha entortarem"
    ],
    "voceSabia": "O primeiro sistema de rastreamento com guia laser para máquinas de acolchoamento têxtil foi adaptado nos anos 1980 a partir de miras ópticas de precisão da indústria militar de aviação!",
    "curiosidadeTecnica": "O diodo laser de 520 nm (verde) possui sensibilidade visual pelo olho humano cerca de 5 vezes maior do que o laser vermelho de 650 nm para a mesma potência elétrica, sendo o padrão preferido para ateliês com forte iluminação LED de teto.",
    "dicaArtrelados": "Se a sua máquina de bordar tem a **Mira Laser de Posicionamento**, use-a como sua maior aliada para emendas de matrizes grandes! Quando for juntar duas partes de um caminho de mesa ou lençol, aponte a mira laser exatamente em cima do último ponto da primeira parte: a segunda parte vai começar coladinha com precisão de agulha sem você errar um único milímetro!",
    "comparisonTable": {
      "headers": [
        "Sistema de Guiagem",
        "Precisão de Emenda",
        "Necessidade de Riscar Tecido",
        "Velocidade de Trabalho"
      ],
      "rows": [
        [
          "Guia Laser com Rastreamento Óptico",
          "Milimétrica (± 0,1 mm)",
          "Zero (tecido 100% limpo)",
          "Rápida e contínua"
        ],
        [
          "Marcação Tradicional com Giz/Caneta",
          "Boa (depende do traço)",
          "Alta (riscar a peça inteira)",
          "Lenta (tempo longo riscando)"
        ],
        [
          "Quilting Livre no 'Olhômetro'",
          "Variável (artesanal)",
          "Zero",
          "Média (exige muita experiência)"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Velocidade contínua regulada",
      "needleType": "90/14 Quilting ponta cônica especial",
      "stabilizer": "Manta acrílica resinada",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "Pesponto com passo constante de 2,5 mm a 3,0 mm"
    },
    "applications": [
      "Confecção de colchas de casal, edredons de luxo e mantas de patchwork",
      "Emenda precisa de matrizes divididas em bastidores múltiplos (Split Designs)",
      "Painéis artísticos têxteis e tapeçarias decorativas de grande escala",
      "Acabamento contínuo em fábricas de estofados e almofadas nobres"
    ],
    "troubleshootingTips": [
      "Se a luz do laser estiver fraca, limpe a lente de vidro com um cotonete embebido em álcool isopropílico",
      "Gire a rosca da lente frontal do laser para afinar o pontinho luminoso até ficar bem nítido no tecido",
      "Mantenha uma velocidade constante nas mãos para que o tamanho dos pontinhos fique uniforme"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Posicionador Laser de Ponto Cruz e Alinhamento de Enquadramento",
      "Quilted Appliqué (Aplique Acolchoado com Matelassê Embutido no Bastidor)",
      "Acessórios & Bastidores",
      "Técnicas de Bordado"
    ],
    "tags": [
      "q-089",
      "guia laser",
      "quilting",
      "rastreador",
      "longarm",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "LASER-GUIDED TEXTILE SYSTEMS: Optical Trajectory Projection, Longarm Pantographs & Calibration Dynamics. Salt Lake City, 2021.",
      "PARRISH, Gail. Precision Guidance Technologies in Continuous Quilting and Large-Scale Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Ligue a mira laser da sua máquina e posicione sobre um ponto marcado no tecido. Movimente o bastidor 1 cm para cada lado e volte ao ponto zero: observe a precisão luminosa do ponto e ganhe total segurança para fazer emendas de matrizes!",
    "quickSummary": "O feixe de luz laser que mostra exatamente onde a agulha vai bater para bordar colchas grandes sem errar a emenda.",
    "beginnerExplanation": "O guia laser é como uma 'mira' de luz vermelha ou verde que a máquina acende em cima do pano. Ele mostra exatamente onde a agulha vai furar antes de costurar, ajudando você a emendar desenhos grandes e fazer colchas inteiras com desenhos lindos sem deixar nada torto!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "q-090-qualificacao-operacional-e-calibracao-periodica-de-maquinas",
    "code": "Q-090",
    "term": "Qualificação Operacional e Calibração Periódica de Máquinas (Operational Qualification - OQ Protocol)",
    "letter": "Q",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do latim qualificatio (atribuição de conformidade técnica) e do árabe al-qālib (calibre/padrão métrico de calibração).",
    "summary": "Protocolo semestral estruturado de manutenção preventiva e metrologia mecânica para aferição da folga agulha-lançadeira, tensão das correias dentadas dos eixos X/Y, folga de barra de agulha e teste de repetibilidade geométrica.",
    "definition": "Qualificação Operacional e Calibração Periódica de Máquinas (Operational Qualification - OQ Protocol, Preventive Maintenance Metrology & Pantograph Repeatability Calibration) é a rotina técnica metrológica e de manutenção preventiva sistemática realizada a cada 6 meses ou 1.500 horas de operação em máquinas de bordar industriais e semiprofissionais. O protocolo avalia e recalibra parâmetros mecânicos críticos que sofrem desgaste progressivo: 1. Folga e sincronismo angular da lançadeira rotativa (198° a 202°); 2. Tensão dinâmica das correias dentadas dos servomotores X e Y (medida por frequencímetro sônico ou dinamômetro); 3. Altura e curso da barra de agulha (folga de 0,02 mm no guia de bronze); 4. Altura de descida do pé calcador; 5. Teste de repetibilidade geométrica de 100 repetições de coordenadas cartesianas sem desvio cumulativo (> 0,05 mm).",
    "technicalDetails": "Folga axial da lançadeira: 0,05 mm a 0,10 mm (medida com cálibre de lâminas / apalpador). Tensão da correia dentada GT2/HTD: 35 a 45 Hz de frequência de ressonância sônica. Folga radial da barra de agulha: < 0,03 mm. Desvio máximo de repetibilidade no teste circular de matriz padrão: < 0,08 mm de erro dimensional em 100.000 pontos. Lubrificação dos rolamentos lineares com graxa de lítio branca grau NLGI 2.",
    "construction": [
      "Cálubre de lâminas de espessura de precisão milesimal (0,05 mm a 1,00 mm)",
      "Relógio comparador centesimal com base magnética para medição de folgas axiais",
      "Medidor de tensão sônico de correias dentadas ou dinamômetro analógico de mola",
      "Matriz técnica de teste de calibração padronizada (círculos concêntricos e quadrados ortogonais)",
      "Registro documental de calibração (Logbook de Manutenção Preventiva do Ateliê)"
    ],
    "howItWorks": [
      "1. A máquina completa 6 meses de trabalho intenso no ateliê e é agendada para a 'Qualificação Operacional Semestral'.",
      "2. O técnico/operador retira a chapa de agulha e a caixa de bobina e limpa 100% dos resíduos de linha e óleo velho.",
      "3. Com o cálibre de lâminas de 0,08 mm, verifica a folga entre a ponta da lançadeira e a cava da agulha no grau 201° do volante.",
      "4. Mede a tensão das correias dentadas do pantógrafo X e Y, reapertando os esticadores até a frequência correta de 40 Hz.",
      "5. Lubrifica os eixos lineares com graxa de lítio e as barras de agulha com óleo mineral branco ISO 10.",
      "6. Carrega a Matriz Padrão de Calibração (um teste com círculos perfeitos e linhas finas) e borda a 950 PPM.",
      "7. Mede o bordado com paquímetro digital: os círculos fecham com zero desvio e as tensões ficam perfeitas, aprovando a máquina para mais 6 meses de produção pesada."
    ],
    "mainTypes": [
      "Calibração de Sincronismo e Folga de Lançadeira (Garante laçada perfeita sem pular pontos nem cortar linha)",
      "Calibração de Tensão de Correias do Pantógrafo (Garante contornos perfeitamente alinhados com o preenchimento)",
      "Qualificação Operacional Completa com Emissão de Relatório Técnico (Padrão industrial com rastreabilidade)"
    ],
    "characteristics": [
      "Zero quebras surpresa de máquinas no meio de pedidos urgentes de clientes",
      "Contornos de matrizes sempre perfeitamente encaixados sem frestas ou desvios",
      "Economia drástica de custos com consertos de emergência e peças quebradas",
      "Máquina operando com maciez, silêncio e precisão de fábrica por mais de 15 anos"
    ],
    "limitations": [
      "Ajustes de sincronismo da lançadeira devem ser feitos com ferramentas corretas e sem forçar parafusos",
      "Nunca aplicar graxa comum automotiva escura em mecanismos de bordado (usar apenas óleo mineral ISO 10 e graxa de lítio clara)",
      "Registrar todas as datas e peças trocadas no caderno de manutenção da máquina"
    ],
    "numberingSystem": [
      "Periodicidade: Semestral / 1.500 horas de uso",
      "Folga Agulha-Lançadeira: 0,05 mm a 0,10 mm",
      "Tensão de Correia: 35 a 45 Hz"
    ],
    "advantages": [
      "✔ Sua máquina nunca vai te deixar na mão na véspera de uma grande entrega",
      "✔ Seus bordados mantêm a mesma qualidade perfeita de quando a máquina era zero km",
      "✔ Evita que pequenos desajustes invisíveis quebrem peças caras dentro da máquina"
    ],
    "commonErrors": [
      "❌ Borda por 3 anos seguidos sem nunca fazer uma revisão ou ajuste preventivo na máquina",
      "❌ Esperar a máquina quebrar, travar ou fazer um barulho horrível para só então chamar o técnico",
      "❌ Deixar correias do pantógrafo frouxas, fazendo todos os círculos saírem ovais e contornos tortos"
    ],
    "voceSabia": "Indústrias que realizam a Qualificação Operacional preventiva periódica em suas máquinas de bordar reduzem o índice de paradas não programadas em mais de 85% em comparação com empresas que só consertam quando quebra!",
    "curiosidadeTecnica": "O desgaste natural de 0,05 mm na bucha de bronze da barra de agulha após 2.000 horas de uso altera o ângulo de captura da laçada em quase 3 graus, o suficiente para causar quebras de linha em alta velocidade se não for recalibrado.",
    "dicaArtrelados": "Faça o **Check-up Semestral do Ateliê Artrelados**: a cada 6 meses, reserve uma manhã de sábado para cuidar da sua máquina. Tire a chapa de agulha, aspire a poeira, coloque uma gotinha de óleo novo na lançadeira, confira se os parafusos do bastidor estão firmes e borde um teste de círculos e quadrados. Esse carinho garante que sua máquina dure a vida inteira sem dar dor de cabeça!",
    "comparisonTable": {
      "headers": [
        "Item de Inspeção",
        "Parâmetro Ideal",
        "Sintoma de Descalibração",
        "Ação de Calibração"
      ],
      "rows": [
        [
          "Folga da Lançadeira",
          "0,05 a 0,10 mm no grau 201°",
          "Pulos de ponto / Quebra de linha",
          "Ajustar parafusos da engrenagem da lançadeira"
        ],
        [
          "Tensão das Correias X/Y",
          "35 a 45 Hz (firme sem folga)",
          "Círculos viram ovais / Contorno torto",
          "Apertar o esticador da correia dentada"
        ],
        [
          "Altura do Calcador",
          "1,0 mm acima do tecido",
          "Pano sobe com a agulha (Flagging)",
          "Regular a porca de altura da barra do calcador"
        ]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Velocidade nominal plena após calibração",
      "needleType": "Padrão",
      "stabilizer": "Padrão",
      "threadTension": "Padrão calibrado",
      "density": "Padrão"
    },
    "applications": [
      "Manutenção preventiva semestral em ateliês de pequeno, médio e grande porte",
      "Auditoria de qualidade antes de assumir contratos de fornecimento de longo prazo",
      "Diagnóstico metrológico de máquinas usadas antes da compra ou venda",
      "Padronização operacional de fábricas com múltiplas máquinas multiagulhas"
    ],
    "troubleshootingTips": [
      "Borde uma matriz de teste com círculos perfeitos: se o círculo fechar redondo e certinho, a máquina está calibrada",
      "Se o círculo sair ovalado ou com as pontas achatadas, a correia do eixo correspondente precisa ser esticada",
      "Mantenha um caderninho de anotações anotando a data da última troca de óleo e revisão"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Gestão do Ateliê e Produção",
      "Q-Factor e Amortecimento de Vibração Estrutural da Bancada",
      "Placa de Agulha (Needle Plate) e Chapa de Ponto com Orifício Redondo",
      "Acessórios & Bastidores"
    ],
    "tags": [
      "q-090",
      "qualificacao operacional",
      "calibracao",
      "manutencao preventiva",
      "revisao semestral",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "OPERATIONAL QUALIFICATION & METROLOGY IN TEXTILE MACHINERY: Preventive Calibration, Belt Tension Dynamics & Hook Timing. Munich, 2021.",
      "PARRISH, Gail. Systematic Calibration Protocols for Computerized Embroidery Equipment. Cincinnati, 2022."
    ],
    "practicalExercise": "Borde um círculo perfeito de 5 cm com ponto cheio e meça com uma régua nos dois sentidos: na vertical e na horizontal. Se as duas medidas derem exatamente 5,0 cm, parabéns: sua máquina está com a calibração de correias perfeita!",
    "quickSummary": "A revisão preventiva de 6 em 6 meses para regular correias, lançadeira e garantir que a máquina nunca quebre de surpresa.",
    "beginnerExplanation": "Assim como levamos o carro no mecânico para trocar o óleo e revisar os freios, a máquina de bordar também precisa de uma revisão preventiva a cada 6 meses! Ajustar as correias e a lançadeira garante que ela continue bordando tudo retinho, sem quebrar agulha e sem parar no meio do trabalho!",
    "updatedAt": "2026-08-29"
  }
];

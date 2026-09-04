import { TroubleshootingGuide } from "../types";

export const MULTI_HEAD_TROUBLESHOOTING_GUIDES: TroubleshootingGuide[] = [
  {
    id: "industrial-cabeça-especifica-quebra-linha",
    title: "Apenas Uma Cabeça Específica Arrebenta Linha (Enquanto as Outras Cabeças Bordam Normal)",
    category: "Multiagulhas & Industriais",
    symptoms: [
      "Em máquina multicabeças (2, 4, 6 ou mais), por exemplo a Cabeça 3 quebra a linha ou falha pontos sem parar, enquanto a Cabeça 1 e 2 completam a matriz perfeitamente",
      "A mesma linha e a mesma matriz rodam em todas as cabeças simultaneamente"
    ],
    probableCauses: [
      "Tempo de laçadeira (Hook Timing) individual daquela cabeça ligeiramente fora do ponto (adiantado ou atrasado em relação ao eixo principal)",
      "Distância entre a ponta da laçadeira e a cava da agulha (clearance) desregulada naquela cabeça específica (deve ser entre 0.05 mm e 0.10 mm)",
      "Rebarba ou arranhão na chapa de agulha ou na ponta da laçadeira daquela cabeça provocada por choque prévio de agulha",
      "Mola do tira-fio (check spring) quebrada ou sem pressão naquela estação"
    ],
    stepByStepSolution: [
      "1. Isole a cabeça problemática e inspecione a chapa de agulha: passe um fio de algodão ou meia de seda ao redor do orifício da chapa. Se desfiar, há uma rebarba metálica invisível a olho nu. Lixe com lixa d'água 1500 com uma gota de óleo.",
      "2. Verifique o ângulo do sincronismo: gire o volante geral da máquina até a marcação padrão de fábrica (geralmente entre 196° a 201° no nônio graduado) e confira se a ponta da laçadeira daquela cabeça está alinhada exatamente no meio da cava da agulha.",
      "3. Ajuste a folga lateral da laçadeira: a ponta do gancho deve quase tocar a agulha, sem empurrá-la (espessura de uma folha de papel sulfite de 75g = 0.08 mm).",
      "4. Troque o conjunto da caixa de bobina por uma da cabeça vizinha que está funcionando para eliminar defeito de tensão inferior."
    ],
    preventiveAdvice: "Em máquinas multicabeças, faça o rodízio e limpeza periódica das laçadeiras com pincel e ar comprimido toda segunda-feira de manhã.",
    recommendedProductsOrSettings: {
      needle: "DBxK5 NY2 (Titânio Industrial)",
      speed: "750 a 850 PPM",
      tension: "Calibrar com tensiômetro Towa (110g a 130g na bobina)"
    }
  },
  {
    id: "industrial-falso-sensor-quebra-linha",
    title: "Alarme Falso de Quebra de Linha (A Máquina Para Mas a Linha Não Quebrou)",
    category: "Multiagulhas & Industriais",
    symptoms: [
      "O painel apita e para acusando 'Quebra de Linha' na agulha X ou cabeça Y, mas a linha está inteira e passando normal",
      "A máquina não consegue rodar mais de 30 segundos seguidos sem parar por falso alarme",
      "Acontece mais com linhas pretas ou de cores muito escuras"
    ],
    probableCauses: [
      "Roldana codificadora (encoder de quebra de linha) travada por acúmulo de poeira têxtil e fiapos de linha",
      "A linha superior não está dando a volta completa de 360° na roldana do sensor óptico antes de ir para o tensor",
      "Sensor óptico infravermelho de rotação encoberto por poeira",
      "Mola de quebra de linha (drop wire / sensor spring) sem contato elétrico por oxidação"
    ],
    stepByStepSolution: [
      "1. Retire a linha do sensor daquela agulha específica e gire a roldana preta/metálica com os dedos: ela deve rodar com leveza absoluta, sem nenhum ponto de atrito.",
      "2. Aplique um jato de ar comprimido seco (spray de ar) no vão interno do sensor de rotação para ejetar fiapos acumulados.",
      "3. Refaça a passagem da linha: certifique-se de que a linha entra no sensor, dá UMA VOLTA COMPLETA (360°) ao redor da canaleta da rodinha e só então segue para a torre de tensão.",
      "4. No painel digital da máquina, se necessário, aumente a sensibilidade do sensor de quebra de linha de 3 para 5 ou 6 pulsos de tolerância."
    ],
    preventiveAdvice: "Passe um pincel macio com álcool isopropílico nas rodinhas dos sensores a cada 15 dias de produção intensa.",
    recommendedProductsOrSettings: {
      speed: "Ajustar tolerância do encoder no painel",
      tension: "1 volta completa de 360° no sensor"
    }
  },
  {
    id: "industrial-corte-linha-falha-wiper-picker",
    title: "Falha no Sistema de Corte Automático Inferior e Pega-Linha (Wiper / Picker)",
    category: "Multiagulhas & Industriais",
    symptoms: [
      "A máquina comanda o corte de linha, mas a lâmina não corta e o bastidor se move arrastando o fio longo",
      "A linha superior desengata da agulha logo no primeiro ponto após a troca de cor (falta de rabo de linha)",
      "O limpador de linha (Wiper) bate na barra de agulha ou não puxa a ponta cortada para cima da chapa"
    ],
    probableCauses: [
      "Lâmina móvel (faca) ou lâmina fixa desgastada, cega ou com cola de entretela adesiva aderida",
      "Eletroímã (solenoide) de acionamento do corte sem curso completo por sujeira mecânica",
      "O pescador de linha (picker) da caixa da bobina está ajustado muito longo ou muito curto, não retendo a ponta da linha da bobina",
      "Curso do gancho móvel desregulado no parafuso excêntrico"
    ],
    stepByStepSolution: [
      "1. Retire a chapa de agulha e a tampa de inspeção frontal da caixa de bobina.",
      "2. Limpe todo o bloco das facas com álcool isopropílico para dissolver resíduos de cola de entretela spray ou adesiva.",
      "3. Faça o corte manual girando a alavanca ou no comando 'Trim Test' do painel com um pedaço de linha de bordar dobrado: a tesoura deve cortar como papel afiado. Se mastigar o fio, as lâminas precisam de afiação ou substituição.",
      "4. Ajuste a mola retentora da linha da agulha (wiper hook) para deixar um rabicho de pelo menos 2.5 a 3.0 cm preso no velcro ou mola de retenção superior."
    ],
    preventiveAdvice: "Evite o uso excessivo de cola spray permanente sem proteção das chapas; limpe as lâminas de corte a cada 500.000 pontos bordados.",
    recommendedProductsOrSettings: {
      needle: "DBxK5",
      speed: "Verificar ajuste de faca móvel e fixa"
    }
  },
  {
    id: "industrial-troca-cor-travamento-cursor",
    title: "Travamento na Troca Automática de Cor (Cursor das Barras de Agulha Não Engrena)",
    category: "Multiagulhas & Industriais",
    symptoms: [
      "Ao chegar no comando de troca de cor, o bloco das agulhas tenta se movimentar lateralmente, mas trava com ruído de 'esforço mecânico'",
      "Alarme no painel: 'Color Change Error', 'Main Shaft Lock' ou 'Needle Bar Change Timeout'",
      "O pino de engate da barra de agulha cai entre duas posições e não entra no excêntrico condutor"
    ],
    probableCauses: [
      "Eixo condutor das barras de agulha sem lubrificação (óleo ressecado ou graxa endurecida)",
      "Came de troca de cor (color change cam) ligeiramente desalinhado do micro-switch de fim de curso",
      "Uma das barras de agulhas vizinhas está ligeiramente caída (não travou no clipe de descanso superior)"
    ],
    stepByStepSolution: [
      "1. DESLIGUE A MÁQUINA. Olhe frontalmente para o conjunto de agulhas: todas as agulhas que não estão bordando DEVEM estar perfeitamente alinhadas no topo.",
      "2. Empurre manualmente para cima qualquer barra de agulha que tenha ficado 2 mm mais baixa até ouvir o clique do retentor esférico de retenção.",
      "3. Gire o seletor manual de cores (manivela traseira do bloco de agulhas) para conferir se o conjunto corre suavemente da agulha 1 até a última agulha.",
      "4. Aplique 2 gotas de óleo fino nas guias prismáticas do bloco de troca de cores.",
      "5. Ligue a máquina e execute o comando de 'Color Change Calibration' no menu técnico do painel."
    ],
    preventiveAdvice: "Nunca empurre o bloco de agulhas lateralmente à força enquanto a máquina estiver ligada com a agulha abaixada.",
    recommendedProductsOrSettings: {
      tension: "Lubrificação das guias prismáticas com óleo ISO 10"
    }
  },
  {
    id: "industrial-calibracao-torres-tensao",
    title: "Diferença de Tensão Entre Cores na Mesma Máquina Multiagulhas",
    category: "Multiagulhas & Industriais",
    symptoms: [
      "A agulha 2 borda perfeito, mas ao trocar para a agulha 5 (outra cor), o ponto fica frouxo, laçando por cima ou arrebentando",
      "A bordadeira precisa ficar reajustando os discos de tensão a cada troca de carretel",
      "No verso do bordado, o branco da bobina ora aparece largo, ora some completamente dependendo da cor ativa"
    ],
    probableCauses: [
      "Torres de tensão individuais descalibradas entre si",
      "Fiapo de linha ou cera presa nos pratos tensores daquela agulha específica",
      "Diferença de espessura real entre fios (ex: linhas escuras tingidas com carga mineral são mais rígidas que linhas brancas ou cruas)",
      "Mola de compensação individual daquela agulha com fadiga"
    ],
    stepByStepSolution: [
      "1. Teste da puxada manual: com o calcador abaixado, puxe a linha na altura da agulha com a mão. Você deve sentir uma resistência constante e firme (equivalente a puxar um peso de aproximadamente 100g a 120g).",
      "2. Passe um pedaço de fio dental sem cera ou uma tira de tecido tricoline dobrada entre os pratinhos tensores daquela agulha para ejetar fiapos prensados.",
      "3. Uniformize a pré-tensão: ajuste a porca pequena do pré-tensor superior para que todas as linhas cheguem aos pratos principais com a mesma pressão.",
      "4. Borde a matriz de teste clássica 'FOX' ou blocos de ponto cheio em coluna de 5mm para todas as agulhas lado a lado e compare o verso: o ponto branco da bobina deve ocupar exatamente 1/3 central em todas as colunas."
    ],
    preventiveAdvice: "Faça o teste das colunas de ponto cheio a cada troca geral de lote de cones de linha no ateliê.",
    recommendedProductsOrSettings: {
      speed: "750 PPM",
      tension: "1/3 da bobina visível no verso em todas as agulhas"
    }
  }
];

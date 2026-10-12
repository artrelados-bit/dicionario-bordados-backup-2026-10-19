import React, { useState } from "react";
import {
  Sparkles,
  Send,
  Loader2,
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  Wrench,
  Lightbulb,
  Layers,
  Heart,
  BookOpen,
  Calculator,
  ExternalLink
} from "lucide-react";
import { SupportedLanguage } from "../utils/i18n";
import { INITIAL_VERBETES } from "../data/initialDictionary";
import { Verbete } from "../types";

export interface ConsultantAdvice {
  title: string;
  situationSummary: string;
  rescueActionPlan: string[];
  recommendedMaterials: {
    stabilizer?: string;
    needle?: string;
    thread?: string;
    specialTools?: string;
  };
  preventiveAdvice: string;
  artreladosGoldenTip: string;
  relatedDibeTerms?: string[];
  followUpQuestions?: { label: string; prompt: string }[];
}

interface AtelierConsultantProps {
  currentLanguage?: SupportedLanguage;
}

export const AtelierConsultant: React.FC<AtelierConsultantProps> = ({
  currentLanguage = "pt",
}) => {
  const [userQuery, setUserQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState<ConsultantAdvice | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Exemplos reais do cotidiano de ateliê para inspiração rápida
  const quickCases = [
    {
      label: "🍽️ Trilho de linho (mesa posta de 1,80m)",
      prompt:
        "Recebi um encomenda para bordar um trilho de linho para uma mesa de jantar de 1,80 de comprimento, o que faço primeiro?",
    },
    {
      label: "🧸 Fralda para bebê (iniciante ou avesso áspero)",
      prompt:
        "Bordei uma ursinha em uma fralda de bebê. A frente ficou linda, mas o avesso ficou muito grosso e áspero, podendo machucar a pele do bebê. Como amaciar e salvar a peça?",
    },
    {
      label: "🏖️ Ponto sumindo na toalha de banho felpuda",
      prompt:
        "Estou bordando um nome em uma toalha de banho com felpa alta e as letras estão afundando e sumindo no meio dos pelos da toalha. O que fazer para as letras ficarem nítidas e destacadas?",
    },
    {
      label: "👗 Tecido de malha repuxando ao redor da matriz",
      prompt:
        "Bordei um logotipo em camiseta de malha 100% algodão e o tecido ficou todo repuxado e enrugado ao redor do bordado depois que tirei do bastidor. Como resolver esse problema?",
    },
    {
      label: "🧢 Boné quebrando agulha na costura central",
      prompt:
        "Estou bordando a frente de um boné estruturado e a agulha quebra toda vez que passa pela costura grossa do meio do boné. Qual a agulha e o macete para não quebrar?",
    },
    {
      label: "🪡 Esqueci uma letra no nome da peça pronta",
      prompt:
        "Bordei o nome em um jaleco e percebi que faltou uma letra no sobrenome. Tem como acrescentar essa letra na máquina ou consertar sem ter que desmanchar todo o bordado?",
    },
  ];

  // Algoritmo local de busca nos mais de 2.900 verbetes do DIBE
  const searchLocalDibe = (query: string, max = 3): Verbete[] => {
    const stopWords = new Set([
      "de", "a", "o", "que", "e", "do", "da", "em", "um", "para", "com", "nao", "uma", "os", "no", "se", "na",
      "por", "mais", "as", "dos", "como", "mas", "ao", "ele", "das", "seu", "sua", "ou", "quando", "muito",
      "nos", "ja", "eu", "tambem", "so", "pelo", "pela", "ate", "isso", "ela", "entre", "depois", "sem",
      "mesmo", "aos", "seus", "quem", "nas", "me", "esse", "eles", "voce", "essa", "num", "nem", "suas",
      "meu", "minha", "minhas", "meus", "onde", "sou", "peguei", "sei", "qual", "quais", "posso", "pode",
      "fazer", "comecar", "ajuda", "ajudar", "faco", "primeiro"
    ]);

    const words = query
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/\W+/)
      .filter((w) => w.length > 2 && !stopWords.has(w));

    if (!words.length) return [];

    const toClean = (val: unknown): string => {
      if (!val) return "";
      if (Array.isArray(val)) return val.join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return String(val).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const scored: { item: Verbete; score: number }[] = [];
    for (const item of INITIAL_VERBETES) {
      let score = 0;
      const termClean = toClean(item.term);
      const summaryClean = toClean(item.summary);
      const defClean = toClean(item.definition);
      const dicaClean = toClean(item.dicaArtrelados);
      const tipsClean = toClean(item.troubleshootingTips);

      for (const w of words) {
        if (termClean === w) score += 50;
        else if (termClean.includes(w)) score += 25;
        if (summaryClean.includes(w)) score += 8;
        if (dicaClean.includes(w)) score += 6;
        if (tipsClean.includes(w)) score += 5;
        if (defClean.includes(w)) score += 2;
      }
      if (score > 0) scored.push({ item, score });
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, max).map((s) => s.item);
  };

  // Motor Inteligente de Consultoria Artrelados (Garantia de resposta profunda com fundamentação DIBE)
  const getOfflineFallbackAdvice = (query: string): ConsultantAdvice => {
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Caso 1: Trilho de Mesa / Linho Puro / Mesa Posta
    if (
      (q.includes("linho") || q.includes("trilho") || q.includes("caminho") || q.includes("mesa posta") || q.includes("guardanapo")) &&
      (q.includes("encomenda") || q.includes("como bordar") || q.includes("o que faco") || q.includes("comecar") || q.includes("primeiro") || q.includes("comprimento") || q.includes("1,80") || q.includes("1.80"))
    ) {
      return {
        title: "Trilho Nobre de Mesa Posta: Do Planejamento Perfeito ao Bordado Impecável em Linho",
        situationSummary:
          "Que encomenda maravilhosa e de altíssimo valor para o seu ateliê, minha querida! Um trilho de mesa de 1,80m em linho puro é uma verdadeira joia da mesa posta. O segredo para não errar e ter segurança total desde o primeiro minuto está em entender que o linho é uma fibra natural viva e que o comprimento longo exige apoio para não sobrecarregar o pantógrafo da sua máquina nem repuxar o bordado.",
        rescueActionPlan: [
          "Passo 1: Pré-lavagem ou descanso do linho e alinhamento do fio. Se o trilho ainda for ser confeccionado, lave ou molhe o linho antes de cortar para eliminar o encolhimento natural. Se já estiver pronto com bainha ou canto mitrado, passe-o com ferro a vapor alinhando perfeitamente a trama e meça exatamente os centros.",
          "Passo 2: Definição estratégica do layout e marcação. Decida junto à cliente se o bordado ficará nas duas extremidades/cabeceiras (o mais clássico, posicionado de 10cm a 15cm da ponta) ou no centro exato. Faça a marcação em cruz com giz de alfaiate ou caneta fantasminha termo-apagável com o auxílio de esquadro, alinhando rigorosamente com o fio reto do tecido.",
          "Passo 3: Montagem sem aro direto no linho (Técnica da Flutuação). Jamais aperte o linho no bastidor para não esmagar as fibras nem deixar marcas permanentes de aro. Estique apenas a entretela no bastidor (bem esticada como um tambor), aplique adesivo temporário spray suave e 'flutue' a área marcada do trilho por cima, alfinetando apenas pelas margens externas fora da área de costura.",
          "Passo 4: Gerenciamento do peso do tecido (Alívio do Pantógrafo). Como o trilho tem 1,80m, o tecido restante vai pesar. Apoie as sobras do linho sobre uma mesa auxiliar ou no seu próprio colo no nível da máquina de bordar. Nunca deixe o restante do trilho pendurado caindo da máquina, pois o peso arrasta o bastidor, forçando os trilhos lineares e causando perda de passos ou contornos tortos.",
          "Passo 5: Limpeza e acabamento do avesso. Como caminhos de mesa são manuseados e frequentemente virados, ajuste a tensão da bobina para que a linha inferior ocupe o terço central e corte as pontinhas de linha a cada troca de cor, deixando o verso limpo e plano.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela hidrossolúvel de gramatura média (ou entretela rasgável termo/hidro de 40g bem macia), garantindo que o avesso da mesa posta não fique áspero ou com plástico residual.",
          needle: "Agulha fina tamanho 70/10 ou 75/11 ponta fina afiada (Microtex ou Universal ponta leve), para penetrar entre os fios da trama do linho sem abrir buracos visíveis.",
          thread: "Linha superior de poliéster ou viscose calibre 40 de alto brilho e linha de bobina fina 60wt na mesma cor da linha de cima ou em tom neutro suave compatível com o tecido.",
          specialTools: "Cola spray adesiva temporária suave, caneta fantasminha termo-apagável, régua de patchwork/esquadro longo e mesa de apoio ou suporte para sustentar o caimento dos 1,80m de tecido.",
        },
        preventiveAdvice:
          "Antes de iniciar na peça definitiva, faça sempre um teste em um retalho do mesmo linho com a mesma entretela para checar a compensação de encolhimento da matriz e a densidade dos pontos, evitando que a textura plana do linho fique enrugada ao redor dos pontos cheios.",
        artreladosGoldenTip:
          "No Ateliê Artrelados, o grande truque de elegância para caminhos de mesa de linho é passar o bordado finalizado sempre pelo avesso, deitado sobre uma toalha felpuda bem macia e com ferro a vapor: a felpa da toalha acolchoa os pontos, fazendo o bordado saltar para a frente em um relevo tridimensional nobre e acetinado!",
        relatedDibeTerms: [
          "Guardanapo Bordado, Roupa de Mesa & Canto Mitrado",
          "Bordado em Toalhas de Lavabo com Faixa de Linho Puro"
        ],
        followUpQuestions: [
          {
            label: "🍽️ Canto Mitrado no Linho",
            prompt: "Como bordar canto mitrado com acabamento fino e cantos perfeitos em trilho de linho?",
          },
          {
            label: "📐 Compensação de Encolhimento",
            prompt: "Qual a regulagem de compensação de encolhimento na matriz para bordar em linho puro sem enrugar?",
          },
          {
            label: "🏷️ Precificação de Mesa Posta",
            prompt: "Como calcular o preço de venda de um trilho de linho bordado de 1,80m no ateliê?",
          },
        ],
      };
    }

    // Caso 2: Fralda de bebê para iniciante / primeira encomenda
    if ((q.includes("fralda") || q.includes("bebe")) && (q.includes("iniciante") || q.includes("comecar") || q.includes("comeco") || q.includes("como bordar") || q.includes("primeir") || q.includes("encomenda"))) {
      return {
        title: "Fraldinhas de Nuvem: O Guia Definitivo para um Bordado Perfeito, Macio e Seguro",
        situationSummary:
          "Parabéns pela sua encomenda, minha querida! Sei exatamente como dá um frio na barriga ao segurar uma fraldinha tão delicada pela primeira vez. Fique tranquila: bordar enxoval de bebê é uma das artes mais gratificantes do nosso ateliê, e com o passo a passo certo, sua peça vai ficar impecável, fofinha e 100% segura para a pele do recém-nascido.",
        rescueActionPlan: [
          "Passo 1: Prepare a base com a técnica flutuante: coloque apenas a entretela rasgável macia bem esticada no bastidor (como uma pele de tambor). Nunca aperte o tecido da fralda direto no bastidor para não esgarçar a trama nem deixar marcas profundas.",
          "Passo 2: Fixe a fralda sobre a entretela usando alfinetes rentes à borda externa da área de bordado, cola temporária em spray bem suave (respeitando a distância de 25 cm) ou faça uma linha de alinhavo (basting box) pela própria máquina.",
          "Passo 3: Aplique uma camada de entretela hidrossolúvel fina (filme solúvel) por cima da fralda. Isso impede que os pontinhos afundem na trama rala, garantindo um desenho nítido, definido e com acabamento acetinado.",
          "Passo 4: Ajuste a velocidade da máquina para um nível moderado a lento (em torno de 500 a 600 ppm) para garantir que a tração da linha não repuxe os fios delicados da fralda.",
          "Passo 5: Finalize com o carinho do avesso: após o bordado, remova suavemente as sobras da entretela rasgável e a hidrossolúvel com água morna. Aplique no avesso do bordado a entretela termocolante 'Protege Bebê' (Cover the Back) com ferro morno e sem vapor para selar todas as pontinhas de linha contra a pele do bebê.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela rasgável de toque suave (gramatura 40 ou 50g) na base + Película hidrossolúvel fina por cima + Entretela termocolante 'Protege Bebê' (malha termocolante) para o acabamento do avesso.",
          needle: "Agulha calibre 70/10 ou 65/9 Ponta Bola (Ball Point / SES), que afasta as fibras da fralda em vez de cortá-las.",
          thread: "Linha superior de poliéster brilhante 120 e linha de bobina fina 100% filamento contínuo (poliéster 60wt ou superior), garantindo baixo volume e máxima maciez no verso.",
          specialTools: "Fita micropore ou fita crepe de papel suave para fixação periférica, tesoura de ponta curva de precisão (tipo cegonha) para aparar fios rente ao tecido, e ferro de passar seco para selar a película protetora.",
        },
        preventiveAdvice:
          "Escolha sempre matrizes adequadas para peças infantis: prefira apliques, pontos rippled (sombreados) ou contornos em ponto cheio leve com compensação de encolhimento regulada (mínimo 0.35 mm). Evite matrizes com tatami pesado e sobreposições densas, pois criam placas rígidas que irritam o bebê e repuxam a fralda.",
        artreladosGoldenTip:
          "O verdadeiro encanto de uma fralda não está apenas na beleza do desenho à frente, mas na bênção do conforto no verso. Quando aplicar a película 'Protege Bebê', arredonde bem todos os quatro cantinhos do recorte com a tesoura antes de colar com o ferro; cantos arredondados nunca descolam com as lavagens frequentes!",
        relatedDibeTerms: [
          "Toalha Fralda e Enxoval de Bebê (Bordado Seguro e Macio)",
          "Fralda de Pano e Paninho de Boca (Enxoval Infantil)",
          "Fio Texturizado para Bobina (Contato Macio em Enxoval de Bebê)"
        ],
        followUpQuestions: [
          {
            label: "🧸 Teste da Bochecha no Avesso",
            prompt: "Como fazer o teste da bochecha para aprovar a maciez do avesso da fralda de bebê?",
          },
          {
            label: "☁️ Ponto Rippled em Fraldas",
            prompt: "Qual a diferença entre ponto rippled e ponto cheio para fraldas e roupinhas de bebê?",
          },
          {
            label: "🧵 Fio Texturizado na Bobina",
            prompt: "Como usar fio texturizado na bobina para toque ultra macio e aveludado em peças infantis?",
          },
        ],
      };
    }

    // Caso 3: Resgate de Fralda com avesso grosso/áspero
    if (q.includes("fralda") || q.includes("bebe") || q.includes("avesso") || q.includes("aspero") || q.includes("grosso") || q.includes("machucar") || q.includes("pinica")) {
      return {
        title: "Resgate da Fraldinha: Como Proteger a Pele do Bebê e Salvar a Peça Pronta",
        situationSummary:
          "O bordado na fralda ficou visualmente impecável na frente, porém a alta densidade de pontos e nós acumulados deixaram o avesso rígido e áspero para o contato direto com a pele ultrassensível do recém-nascido.",
        rescueActionPlan: [
          "Aplicação da Película Termocolante Protege Bebê (Cover The Back): Corte um pedaço de entretela de malha termocolante ultrafina cerca de 1 cm maior que o bordado de 15x15 cm. Posicione a resina adesiva sobre o avesso e pressione com ferro morno (sem vapor) por 12 a 15 segundos. Isso sela 100% dos nós com toque aveludado.",
          "Opção de Forro Embutido (Falso Avesso): Se preferir acabamento de alta costura, costure um forrinho quadrado de tricoline 100% algodão ou percal 200 fios por trás da fralda, embutindo o avesso do bordado dentro de uma moldura delicada.",
          "Alívio de Entretela Excedente: Com uma tesourinha curva de precisão (ponta cegonha ou pelicano), apare delicadamente as sobras de entretela rígida ao redor das linhas antes de selar a peça.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela termocolante de toque suave (Protege Bebê / Cover The Back)",
          needle: "Para as próximas: Agulha fina 70/10 ou 75/11 ponta bola (SES)",
          thread: "Linha de bobina macia nº 150/2 (específica para bordado)",
          specialTools: "Ferro de passar morno sem vapor e tesoura de precisão curva",
        },
        preventiveAdvice:
          "Nas próximas fraldas, utilize entretela hidrossolúvel (que dissolve totalmente na água) ou entretela rasgável especial para bebê de 30g a 40g bem maleável, e prefira matrizes leves com pontos rippled ou contornos delicados.",
        artreladosGoldenTip:
          "Nunca lave a fralda com amaciante comum de imediato; após colar a película protege bebê, aguarde 24 horas para a cura completa da cola termocolante antes da primeira lavagem!",
        relatedDibeTerms: [
          "Toalha Fralda e Enxoval de Bebê (Bordado Seguro e Macio)",
          "Fralda de Pano e Paninho de Boca (Enxoval Infantil)"
        ],
        followUpQuestions: [
          {
            label: "🛡️ Película Protege Bebê",
            prompt: "Como aplicar a película termocolante protege bebê sem marcar nem queimar a fralda?",
          },
          {
            label: "✂️ Falso Avesso em Tricoline",
            prompt: "Como embutir o avesso do bordado com moldura de tricoline para acabamento de luxo?",
          },
          {
            label: "🧼 Cuidados de Lavagem",
            prompt: "Quais os cuidados de lavagem para a película termocolante do avesso nunca descolar?",
          },
        ],
      };
    }

    // Caso 4: Toalhas felpudas e aveludadas
    if (q.includes("toalha") || q.includes("felpa") || q.includes("sumindo") || q.includes("afundando")) {
      return {
        title: "Toalhas Felpudas: Como Fazer o Bordado Ficar Alto, Nítido e Destacado",
        situationSummary:
          "Em toalhas felpudas e tecidos aveludados, as laçadas naturais do tecido engolem os pontos da máquina se não houver uma barreira superior para sustentar a linha.",
        rescueActionPlan: [
          "Se a peça já estiver bordada e afundou: Pode-se passar a ferro morno com pano úmido por cima para rebaixar a felpa ao redor, ou contornar as letras com uma caneta de calor ou pesponto decorativo para dar contraste.",
          "Solução definitiva para peças em produção: Coloque sempre uma folha de FILME PLÁSTICO HIDROSSOLÚVEL sobre a felpa da toalha antes de bordar.",
          "Após bordar: Retire o excesso de plástico rasgando suavemente e passe um borrifador leve de água com cotonete para dissolver os microvestígios.",
        ],
        recommendedMaterials: {
          stabilizer: "Filme plástico hidrossolúvel por cima + entretela rasgável 80g por baixo",
          needle: "Agulha 75/11 ou 80/12 ponta bola leve",
          thread: "Linha de poliéster trilobal 120D/2 brilhante",
          specialTools: "Filme hidrossolúvel (Solvy) e borrifador de água",
        },
        preventiveAdvice:
          "Na matriz, programe uma base de subpontos tipo grade leve (tatami de sustentação / knock-down stitch) antes do ponto cheio, rebaixando a felpa antes das letras serem costuradas.",
        artreladosGoldenTip:
          "Se não tiver filme hidrossolúvel na emergência, um pedaço de plástico filme culinário bem fino colocado esticado por cima da toalha quebra o galho perfeitamente e sai com água morna!",
        relatedDibeTerms: [
          "Knockdown Stitch (Ponto Base para Toalha)",
          "Filme Hidrossolúvel para Bordado (Solvy)"
        ],
        followUpQuestions: [
          {
            label: "🛁 Ponto Knockdown na Matriz",
            prompt: "Como programar ponto knockdown de sustentação para rebaixar a felpa da toalha antes do nome?",
          },
          {
            label: "💧 Filme Hidrossolúvel Solvy",
            prompt: "Qual a gramatura ideal de filme hidrossolúvel para toalhas e como remover sem manchar?",
          },
          {
            label: "✨ Marcas de Bastidor em Toalhas",
            prompt: "Como tirar marcas de pressão do bastidor que ficam nas toalhas aveludadas?",
          },
        ],
      };
    }

    // Caso Dinâmico Universal: Busca direta nos 2.900+ verbetes do DIBE
    const matches = searchLocalDibe(query, 3);
    if (matches.length > 0) {
      const top = matches[0];
      return {
        title: `${top.term}: Guia Especializado de Ateliê Artrelados`,
        situationSummary: `Analisamos com todo carinho a sua dúvida técnica. Com base no acervo oficial do DIBE Artrelados e no conhecimento consagrado da especialista Janete M. C. Silva, reunimos as melhores práticas de produção para esse desafio.`,
        rescueActionPlan: [
          `Passo 1 (Estabilização): ${top.beginnerExplanation || top.summary || "Avalie a estrutura mecânica do tecido e utilize entretela com gramatura compatível com a densidade da matriz."}`,
          `Passo 2 (Execução Técnica): ${Array.isArray(top.howItWorks) && top.howItWorks[0] ? top.howItWorks[0] : (Array.isArray(top.troubleshootingTips) && top.troubleshootingTips[0] ? top.troubleshootingTips[0] : "Regule a agulha adequada e calibre a tensão da linha superior para evitar repuxos.")}`,
          `Passo 3 (Parâmetros de Máquina): ${Array.isArray(top.troubleshootingTips) && top.troubleshootingTips[1] ? top.troubleshootingTips[1] : "Mantenha a velocidade da máquina controlada e certifique-se de que o tecido não sofre tração excessiva no pantógrafo."}`,
          `Passo 4 (Acabamento): Realize a limpeza minuciosa do verso com tesoura de arremate de ponta curva, conferindo estabilidade e toque suave.`,
        ],
        recommendedMaterials: {
          stabilizer: `Entretela adequada para ${top.category || "o tecido"} (rasgável suave ou hidrossolúvel)`,
          needle: `Agulha recomendada: calibre 75/11 ou 80/12 ponta bola leve ou microtex afiada`,
          thread: `Linha superior 100% poliéster trilobal 120D/2 brilhante e linha de bobina fina`,
          specialTools: `Tesoura de arremate curva, pinça de precisão e cola temporária suave`,
        },
        preventiveAdvice:
          Array.isArray(top.commonErrors) && top.commonErrors[0]
            ? `Atenção preventiva: evite ${top.commonErrors[0].toLowerCase()}`
            : "Sempre realize um teste prévio de bordado em um retalho do mesmo tecido com a mesma entretela antes da peça definitiva.",
        artreladosGoldenTip:
          top.dicaArtrelados ||
          "No Ateliê Artrelados, o carinho pelo detalhe e a paciência no preparo transformam qualquer encomenda em uma obra de arte inesquecível!",
        relatedDibeTerms: matches.map((m) => m.term),
        followUpQuestions: [
          {
            label: `🔍 Mais sobre ${matches[0].term.slice(0, 20)}...`,
            prompt: `Como aplicar na prática as recomendações do verbete ${matches[0].term} na minha máquina?`,
          },
          matches[1]
            ? {
                label: `🧵 Ver ${matches[1].term.slice(0, 20)}...`,
                prompt: `Quais os segredos e parâmetros técnicos para ${matches[1].term}?`,
              }
            : {
                label: "⚙️ Tensão e Bobina",
                prompt: "Como regular a tensão da linha e da bobina para esse tipo de bordado?",
              },
          {
            label: "🏷️ Como Precificar este Bordado",
            prompt: "Como calcular o custo e o preço de venda correto para esse bordado no meu ateliê?",
          },
        ],
      };
    }

    return {
      title: "Consultoria Especializada Artrelados para o seu Bordado",
      situationSummary: `Analisamos a sua dúvida técnica: "${query.slice(0, 120)}..." e preparamos as melhores recomendações práticas de ateliê para essa situação.`,
      rescueActionPlan: [
        "Avaliação do Tecido & Estabilização: Certifique-se de que a entretela utilizada oferece sustentação mecânica suficiente para o peso da matriz sem deformar a peça.",
        "Ajuste da Tensão e Bobina: Verifique se a linha da bobina está aparecendo sutilmente no terço central do avesso (regra do 1/3) para evitar nós salientes.",
        "Calibre da Agulha: Para tecidos delicados utilize agulha 70/10 ou 75/11; para tecidos grossos ou estruturados utilize 80/12 ou 90/14.",
      ],
      recommendedMaterials: {
        stabilizer: "Entretela compatível com a elasticidade e peso do tecido",
        needle: "Agulha adequada ao calibre da linha e espessura do tecido",
        thread: "Linha de qualidade para bordado 100% poliéster",
        specialTools: "Tesoura de arremate de ponta curva e pinça de precisão",
      },
      preventiveAdvice:
        "Sempre realize um teste de bordado em um retalho do mesmo tecido com a mesma entretela antes de aplicar na peça definitiva do cliente.",
      artreladosGoldenTip:
        "No ateliê de bordados, paciência e teste em retalho são a maior economia de tempo e dinheiro que uma bordadeira pode ter!",
      relatedDibeTerms: [
        "Estabilização e Entretelas para Bordado Computadorizado",
        "Regulagem de Tensão da Linha e Bobina"
      ],
      followUpQuestions: [
        {
          label: "🧵 Tensão e Linha de Bobina",
          prompt: "Como regular a tensão da bobina para o avesso ficar perfeito?",
        },
        {
          label: "🛡️ Escolha da Entretela",
          prompt: "Como saber a entretela ideal para cada tipo de tecido no bordado?",
        },
        {
          label: "🏷️ Como Precificar este Bordado",
          prompt: "Como calcular o custo e o preço de venda ideal para este bordado no meu ateliê?",
        },
      ],
    };
  };

  const handleConsult = async (queryToRun?: string) => {
    const textToSubmit = queryToRun || userQuery;
    if (!textToSubmit.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);
    setAdvice(null);
    setCopied(false);

    try {
      const res = await fetch("/api/gemini/embroidery-consultant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          userQuery: textToSubmit.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Erro na conexão com o servidor (${res.status})`);
      }

      const data = await res.json();
      if (data.success && data.advice) {
        // Garante que a pergunta de precificação esteja sempre presente nas opções de aprofundamento
        const hasPricing = data.advice.followUpQuestions?.some(
          (q: any) =>
            q.label?.toLowerCase().includes("precifica") ||
            q.prompt?.toLowerCase().includes("precifica")
        );
        if (!hasPricing) {
          const currentList = data.advice.followUpQuestions || [];
          data.advice.followUpQuestions = [
            ...currentList.slice(0, 2),
            {
              label: "🏷️ Como Precificar este Bordado",
              prompt: `Como calcular o custo e o preço de venda ideal para este bordado de ${textToSubmit.slice(0, 40)} no meu ateliê?`,
            },
          ];
        }
        setAdvice(data.advice);
      } else {
        throw new Error(data.error || "Não foi possível gerar a consultoria no momento.");
      }
    } catch (err: any) {
      console.warn("Utilizando motor de inteligência local para consultoria:", err);
      // Fallback rico e imediato caso a API remota não responda
      const fallback = getOfflineFallbackAdvice(textToSubmit);
      setAdvice(fallback);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyAdvice = () => {
    if (!advice) return;
    const textToCopy = `*🌟 CONSULTORIA ARTRELADOS — DIBE*\n\n` +
      `📌 *${advice.title}*\n\n` +
      `📖 *Situação:* ${advice.situationSummary}\n\n` +
      `🛠️ *Passo a Passo de Resgate:*\n${advice.rescueActionPlan.map((s, idx) => `${idx + 1}. ${s}`).join("\n")}\n\n` +
      `🧵 *Materiais Recomendados:*\n` +
      (advice.recommendedMaterials.stabilizer ? `• Entretela: ${advice.recommendedMaterials.stabilizer}\n` : "") +
      (advice.recommendedMaterials.needle ? `• Agulha: ${advice.recommendedMaterials.needle}\n` : "") +
      (advice.recommendedMaterials.thread ? `• Linha: ${advice.recommendedMaterials.thread}\n` : "") +
      (advice.recommendedMaterials.specialTools ? `• Ferramentas: ${advice.recommendedMaterials.specialTools}\n` : "") +
      `\n🛡️ *Prevenção:* ${advice.preventiveAdvice}\n\n` +
      `💡 *Dica de Ouro Artrelados:* ${advice.artreladosGoldenTip}\n\n` +
      `📊 *Calculadora Oficial Artrelados (CABE):* Conheça a ferramenta oficial e transforme a gestão e a precificação do seu ateliê: https://www.artrelados.com.br/calculadora-de-bordados-a-maquina-br\n\n` +
      (advice.relatedDibeTerms && advice.relatedDibeTerms.length > 0 ? `📚 *Verbetes do DIBE Consultados:* ${advice.relatedDibeTerms.join(", ")}\n\n` : "") +
      `_Compêndio Oficial DIBE Artrelados • www.artrelados.com.br_`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner Card */}
      <div className="bg-gradient-to-br from-amber-50 via-amber-100/60 to-yellow-50 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-7 shadow-xs relative overflow-hidden text-center">
        <div className="relative z-10 space-y-2.5 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultoria Especialista Artrelados</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Planejamento de Encomendas, Desafios de Tecidos & Resgate de Peças
          </h3>
          <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
            Pegou uma encomenda desafiadora (como trilho de linho ou enxoval de bebê), tem dúvidas sobre tecidos difíceis
            (toalhas felpudas, malha, couro) ou precisa de uma solução para salvar uma peça pronta? <strong>Descreva livremente abaixo</strong> com suas palavras!
          </p>
        </div>
      </div>

      {/* Input Box Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
        <div>
          <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
            💬 O QUE VOCÊ DESEJA BORDAR OU RESOLVER HOJE NO SEU ATELIÊ?
          </label>
          <textarea
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Ex: Recebi uma encomenda de trilho de linho e não sei por onde começar... OU: Bordei uma fralda de bebê e o avesso ficou áspero, como amaciar e salvar a peça pronta?"
            rows={4}
            className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium text-slate-800 placeholder:text-slate-400 leading-relaxed transition"
          />
        </div>

        {/* Quick Suggestion Chips (Adaptativos e Conectados ao Projeto Atual) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>
                {advice?.followUpQuestions && advice.followUpQuestions.length > 0
                  ? "Dúvidas Relacionadas a este Projeto (Clique para explorar):"
                  : "Casos Reais Frequentes (Clique em qualquer um para testar):"}
              </span>
            </span>
            {advice?.followUpQuestions && advice.followUpQuestions.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setAdvice(null);
                  setUserQuery("");
                }}
                className="text-[10px] font-bold text-amber-700 hover:text-amber-900 underline cursor-pointer"
              >
                Ver casos gerais
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {(advice?.followUpQuestions && advice.followUpQuestions.length > 0
              ? advice.followUpQuestions
              : quickCases
            ).map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setUserQuery(item.prompt);
                  handleConsult(item.prompt);
                }}
                className={`p-2.5 rounded-xl border text-[11px] sm:text-xs font-semibold transition cursor-pointer text-left flex items-start space-x-1.5 shadow-2xs ${
                  advice?.followUpQuestions && advice.followUpQuestions.length > 0
                    ? "bg-amber-50/90 hover:bg-amber-100 text-amber-950 border-amber-300 hover:border-amber-400"
                    : "bg-slate-50 hover:bg-amber-100 hover:text-amber-950 border-slate-200 text-slate-700 hover:border-amber-300"
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <span className="text-[11px] text-slate-500 font-medium">
            💡 Nossa inteligência atende qualquer dúvida de bordado computadorizado.
          </span>

          <button
            type="button"
            onClick={() => handleConsult()}
            disabled={isLoading || !userQuery.trim()}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:bg-slate-200 disabled:text-slate-400 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center space-x-2 transition shadow-md hover:shadow-lg cursor-pointer disabled:cursor-not-allowed border border-amber-500/40 active:scale-95"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Consultando o Ateliê Artrelados...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Pedir Ajuda à Consultora</span>
                <Send className="w-3.5 h-3.5 ml-1 text-slate-950" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error state */}
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-semibold">
          {errorMessage}
        </div>
      )}

      {/* Advice Result Card */}
      {advice && (
        <div className="bg-white border-2 border-amber-400/80 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 animate-fadeIn">
          {/* Header & Copy Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-100 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Solução Técnica de Ateliê</span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {advice.title}
              </h4>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleCopyAdvice}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition inline-flex items-center space-x-1.5 cursor-pointer border border-slate-200 shadow-2xs"
                title="Copiar orientação para enviar no WhatsApp ou grupo"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-black">Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-700" />
                    <span>Copiar Conselho</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setAdvice(null);
                  setUserQuery("");
                }}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
                title="Fazer nova consulta"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section 1: Situation Summary */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1">
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Compreendendo o seu Desafio:</span>
            </span>
            <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
              {advice.situationSummary}
            </p>
          </div>

          {/* Section 2: Practical Rescue Action Plan */}
          <div className="space-y-3">
            <h5 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>Passo a Passo Prático para Salvar a Peça:</span>
            </h5>
            <div className="space-y-2.5">
              {advice.rescueActionPlan.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm"
                >
                  <span className="w-6 h-6 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    {idx + 1}
                  </span>
                  <span className="text-slate-800 font-medium leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Recommended Materials */}
          <div className="space-y-3 pt-2">
            <h5 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Materiais & Ferramentas Recomendadas:</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {advice.recommendedMaterials.stabilizer && (
                <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-1">
                  <span className="text-[10px] font-black text-blue-800 uppercase tracking-wider block">
                    Entretela / Película:
                  </span>
                  <p className="text-xs text-slate-800 font-bold leading-tight">
                    {advice.recommendedMaterials.stabilizer}
                  </p>
                </div>
              )}
              {advice.recommendedMaterials.needle && (
                <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-1">
                  <span className="text-[10px] font-black text-purple-800 uppercase tracking-wider block">
                    Agulha Ideal:
                  </span>
                  <p className="text-xs text-slate-800 font-bold leading-tight">
                    {advice.recommendedMaterials.needle}
                  </p>
                </div>
              )}
              {advice.recommendedMaterials.thread && (
                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                  <span className="text-[10px] font-black text-amber-800 uppercase tracking-wider block">
                    Linhas Recomendadas:
                  </span>
                  <p className="text-xs text-slate-800 font-bold leading-tight">
                    {advice.recommendedMaterials.thread}
                  </p>
                </div>
              )}
              {advice.recommendedMaterials.specialTools && (
                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider block">
                    Ferramentas & Macetes:
                  </span>
                  <p className="text-xs text-slate-800 font-bold leading-tight">
                    {advice.recommendedMaterials.specialTools}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Golden Tip Artrelados */}
          {advice.artreladosGoldenTip && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-400/20 via-amber-300/30 to-yellow-200/20 border-2 border-amber-400/60 flex flex-col space-y-3">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[11px] font-black text-amber-950 uppercase tracking-wider block">
                    Dica de Ouro Artrelados:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-900 font-extrabold leading-relaxed">
                    {advice.artreladosGoldenTip}
                  </p>
                </div>
              </div>

              {/* Recomendação da CABE - Calculadora Oficial Artrelados */}
              <div className="pt-2.5 border-t border-amber-300/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <p className="text-amber-950 font-bold text-[11px] sm:text-xs leading-relaxed">
                  Conheça a Calculadora Oficial Artrelados (CABE) e transforme a gestão e a precificação do seu ateliê:
                </p>
                <a
                  href="https://www.artrelados.com.br/calculadora-de-bordados-a-maquina-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] tracking-wide transition shadow-2xs hover:shadow-xs shrink-0 cursor-pointer border border-amber-500/40"
                  title="Conhecer a Calculadora Oficial Artrelados"
                >
                  <Calculator className="w-3.5 h-3.5 text-slate-950" />
                  <span>Acessar a CABE</span>
                  <ExternalLink className="w-3 h-3 text-slate-950" />
                </a>
              </div>
            </div>
          )}

          {/* Section 5: Preventive Advice */}
          {advice.preventiveAdvice && (
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <p className="font-medium">
                🛡️ <strong>Para as próximas peças:</strong> {advice.preventiveAdvice}
              </p>
            </div>
          )}

          {/* Section 6: Official DIBE Verbetes Consulted */}
          {advice.relatedDibeTerms && advice.relatedDibeTerms.length > 0 && (
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>Verbetes do DIBE que fundamentaram esta resposta:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {advice.relatedDibeTerms.map((term, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-[11px] font-bold shadow-2xs"
                  >
                    📖 {term}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Section 7: Next Steps & Mentorship Follow-up */}
          {advice.followUpQuestions && advice.followUpQuestions.length > 0 && (
            <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
              <span className="text-[11px] font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Dúvidas e Próximos Passos Recomendados para este Projeto:</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {advice.followUpQuestions.map((qItem, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setUserQuery(qItem.prompt);
                      handleConsult(qItem.prompt);
                    }}
                    className="p-3 rounded-2xl bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200/90 text-[11px] font-bold text-amber-950 text-left transition shadow-2xs hover:shadow-xs flex items-center justify-between group cursor-pointer"
                  >
                    <span>{qItem.label}</span>
                    <span className="text-amber-600 group-hover:translate-x-1 transition-transform ml-1">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

import React, { useState, useRef, useEffect } from "react";
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
  ExternalLink,
  Star
} from "lucide-react";
import { SupportedLanguage } from "../utils/i18n";
import { INITIAL_VERBETES } from "../data/initialDictionary";
import { Verbete, SavedDiagnostic } from "../types";

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
  commercialVision?: string;
  preventiveAdvice: string;
  artreladosGoldenTip: string;
  relatedDibeTerms?: string[];
  followUpQuestions?: { label: string; prompt: string }[];
}

interface AtelierConsultantProps {
  currentLanguage?: SupportedLanguage;
  savedDiagnostics?: SavedDiagnostic[];
  onToggleSaveDiagnostic?: (diagnostic: SavedDiagnostic) => void;
}

export const AtelierConsultant: React.FC<AtelierConsultantProps> = ({
  currentLanguage = "pt",
  savedDiagnostics = [],
  onToggleSaveDiagnostic,
}) => {
  const [userQuery, setUserQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState<ConsultantAdvice | null>(null);
  const [copied, setCopied] = useState(false);
  const adviceResultRef = useRef<HTMLDivElement>(null);

  const isAdviceFavorited = Boolean(
    advice &&
    savedDiagnostics.some(
      (d) => d.title === advice.title || (d.summary && d.summary === advice.situationSummary)
    )
  );

  const handleToggleFavoriteAdvice = () => {
    if (!advice || !onToggleSaveDiagnostic) return;
    const diagToSave: SavedDiagnostic = {
      id: `consultoria-${Date.now()}`,
      savedAt: new Date().toISOString().split("T")[0],
      severity: "Média",
      category: "Consultoria Artrelados",
      title: advice.title,
      problemDescription: userQuery || advice.title,
      summary: advice.situationSummary,
      stepByStepSolution: advice.rescueActionPlan,
      recommendedSettings: {
        stabilizer: advice.recommendedMaterials.stabilizer,
        needle: advice.recommendedMaterials.needle,
        speed: advice.recommendedMaterials.thread,
        tension: advice.recommendedMaterials.specialTools,
      },
      preventiveAdvice: advice.preventiveAdvice,
      artreladosTip: advice.artreladosGoldenTip,
    };
    onToggleSaveDiagnostic(diagToSave);
  };

  useEffect(() => {
    if (advice && adviceResultRef.current) {
      adviceResultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [advice]);

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
      "mesmo", "aos", "seus", "quem", "nas", "me", "esse", "eles", "voce", "vc", "essa", "num", "nem", "suas",
      "meu", "minha", "minhas", "meus", "onde", "sou", "peguei", "sei", "qual", "quais", "posso", "pode",
      "fazer", "comecar", "ajuda", "ajudar", "ajude", "faco", "primeiro", "primeira", "primeiros", "passo", "passos",
      "bordar", "bordado", "bordados", "bordando", "maquina", "maquinas", "costura", "costurar", "iniciante", "iniciantes",
      "quero", "quer", "preciso", "precisa", "saber", "atelie", "ola", "oi", "bom", "boa", "dia", "tarde", "noite",
      "duvida", "duvidas", "favor", "porfavor", "coisa", "coisas", "tem", "ter", "tenho", "sobre"
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
        else if (termClean.includes(w)) score += 20;
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

    // Extração inteligente do nome do usuário
    const nameMatch = query.match(/(?:meu nome [eé]|me chamo|sou [ao]|aqui [eé] [ao]|chamo-me)\s+([A-ZÁÉÍÓÚÂÊÔÃÕÇ][a-záéíóúâêôãõç]+)/i);
    const userName = nameMatch ? nameMatch[1] : "";
    const greeting = userName ? `Olá, ${userName}! ` : "";

    // Prioridade Máxima: Panos de Prato / Sacaria / Pano de Copa / Pano Pé-de-Galinha
    if (
      q.includes("prato") ||
      q.includes("sacaria") ||
      q.includes("pano de prato") ||
      q.includes("panos de prato") ||
      q.includes("pano de copa") ||
      q.includes("panos de copa") ||
      q.includes("pe de galinha") ||
      (q.includes("pano") && (q.includes("cozinha") || q.includes("copa") || q.includes("iniciante") || q.includes("comecar") || q.includes("comeco") || q.includes("como bordar")))
    ) {
      return {
        title: "Primeiros Passos de Sucesso: Guia Completo Artrelados para Bordar Panos de Prato com Perfeição e Lucro",
        situationSummary:
          `${greeting}Que escolha maravilhosa para começar no bordado, minha querida! Bordar panos de prato e peças de sacaria é a porta de entrada mais nobre, acolhedora e lucrativa do nosso ateliê. A sacaria (seja a clássica trama pé-de-galinha ou a lisa 100% algodão) é um tecido com espaçamento natural entre os fios. O segredo de ouro para não ter medo e fazer peças que encantam desde o primeiro teste é usar a estabilização correta para a linha não afundar e montar com técnica flutuante sem deformar a barra.`,
        rescueActionPlan: [
          "Passo 1: Preparação da Sacaria e Escolha da Matriz Ideal. Sempre pré-lave ou umedeça e passe a ferro a sacaria antes de cortar ou bordar, pois o algodão puro tem encolhimento natural de 5% a 8%. Para quem está começando, escolha matrizes alegres e leves: apliques fofos com retalhos de tricoline 100% algodão, galinhas e motivos de cozinha em ponto rippled (sombreado) ou barrados florais delicados. Evite matrizes com tatami pesado e denso, que endurecem o pano de prato e dificultam a secagem da louça.",
          "Passo 2: Montagem com Técnica Flutuante no Bastidor. Jamais aperte a sacaria direto no aro do bastidor para não esgarçar a trama nem deixar marcas permanentes de pressão. Estique apenas a entretela rasgável média (40g a 50g) no bastidor bem firme, esticada como a pele de um tambor. Aplique uma leve névoa de cola spray temporária suave e apoie a barra do pano de prato por cima, ativando a função de alinhavo perimetral (basting frame) da sua máquina.",
          "Passo 3: O Segredo do Filme Hidrossolúvel Superior. Como a sacaria tem pequenas reentrâncias e buraquinhos na trama (especialmente a pé-de-galinha), coloque uma folha de filme plástico hidrossolúvel (Solvy) por cima do tecido antes de iniciar o bordado. Ele serve de ponte de sustentação, impedindo que os pontos cheios e letrinhas afundem nos fios do tecido, resultando em um acabamento com brilho e nitidez impecáveis.",
          "Passo 4: Agulha e Calibragem de Velocidade da Máquina. Utilize agulha nova calibre 75/11 ou 70/10 com Ponta Bola Leve (SES / Ball Point). A ponta bola afasta os fios de algodão da sacaria sem perfurar nem romper a trama. Ajuste a velocidade da bordadeira para 500 a 600 ppm; trabalhar com velocidade controlada no início garante laçadas perfeitas e evita qualquer quebra de linha.",
          "Passo 5: Acabamento do Avesso e Barrado Artesanal. Ao terminar, retire o excesso de filme solúvel com água morna e remova a entretela rasgável suavemente pelo verso. Apare todas as pontas de linha rentes. Para agregar alto valor comercial, finalize a peça aplicando uma barra charmosa de tricoline estampada (combinando com as cores do bordado) e fita passa-fita com viés, passando tudo a vapor com carinho.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela rasgável de toque suave (40g a 50g) na base + Película hidrossolúvel (Solvy) por cima da sacaria",
          needle: "Agulha calibre 75/11 ou 70/10 Ponta Bola Leve (SES / Ball Point) própria para bordado",
          thread: "Linha superior de poliéster 120D/2 de alto brilho e linha de bobina padrão 60wt (branca ou neutra)",
          specialTools: "Adesivo spray temporário para bordado, tesoura de arremate bico de pato ou curvada, régua de patchwork e ferro a vapor",
        },
        commercialVision:
          "Nunca venda o pano de prato como um simples 'paninho de secar louça' avulso! Crie kits coordenados de 3 a 7 panos (ex: Kit Semana da Cozinha Feliz ou Kit Chá com Amigas), amarre com uma fita de gorgurão ou ráfia rústica e adicione uma etiqueta de tecido com a marca do seu ateliê. Um custo de produção de R$ 8 a R$ 10 por peça se transforma em um presente nobre vendido por R$ 35 avulso ou R$ 120 o kit!",
        preventiveAdvice:
          "Antes de bordar no seu pano principal, faça sempre um teste rápido de 5 minutos em um retalho da mesma sacaria com a mesma entretela para verificar se a linha da bobina está no terço central do avesso e se as cores combinam com harmonia.",
        artreladosGoldenTip:
          "Dica de Ouro Artrelados: Costure uma alcinha charmosa feita com o próprio tecido da barra no cantinho superior do pano de prato para a cliente poder pendurar no gancho da cozinha ou no puxador do forno. E antes de embalar, borrife uma água perfumada de alecrim ou flor de laranjeira no tecido. Esse toque sensorial conquista e fideliza qualquer cliente na hora!",
        relatedDibeTerms: [
          "Compensação de Repuxo (Pull Compensation)",
          "Filme Hidrossolúvel para Bordado (Solvy)",
          "Alinhamento e Centralização no Bastidor",
          "Precificação e Formação de Preço no Bordado",
        ],
        followUpQuestions: [
          {
            label: "🏷️ Precificação de Kits de Panos",
            prompt: "Como calcular o preço de venda e o lucro de um kit de panos de prato com barrado no ateliê?",
          },
          {
            label: "🧵 Aplique em Pano de Prato",
            prompt: "Qual o passo a passo seguro para fazer apliques de tecido em pano de prato sem desfiar?",
          },
          {
            label: "⚙️ Tensão e Bobina na Sacaria",
            prompt: "Como regular a tensão da linha da máquina para bordar em sacaria pé-de-galinha com avesso perfeito?",
          },
        ],
      };
    }

    // Prioridade Máxima: Iniciantes Gerais / Primeiros Passos no Bordado Eletrônico
    if (
      (q.includes("iniciante") || q.includes("comecar") || q.includes("comeco") || q.includes("primeiros passos") || q.includes("primeiro bordado") || q.includes("comprei uma maquina") || q.includes("nao sei como comecar")) &&
      !q.includes("precific") && !q.includes("linho") && !q.includes("fralda") && !q.includes("manta")
    ) {
      return {
        title: "Primeiros Passos de Ouro: O Guia Completo Artrelados para Dominar sua Máquina de Bordar sem Medo",
        situationSummary:
          "Seja muito bem-vinda ao maravilhoso universo do bordado computadorizado! Ter dúvidas e insegurança no início é completamente normal e faz parte da jornada de toda grande bordadeira. O segredo para você ter sucesso imediato e transformar sua máquina em uma fonte de renda e realização é dominar o trio sagrado do bordado: Tecido Certo + Entretela Adequada + Agulha Nova.",
        rescueActionPlan: [
          "Passo 1: Conheça o 'Trio de Ouro' da Estabilização. No bordado eletrônico, o tecido nunca trabalha sozinho. Tecidos planos e firmes (algodão, tricoline, sarja) pedem entretela rasgável média (40g a 50g). Tecidos delicados ou elásticos pedem entretela hidrossolúvel ou de malha. Tecidos felpudos ou com pelos (toalhas, mantas) exigem filme hidrossolúvel por cima.",
          "Passo 2: Montagem Segura no Bastidor (Sem Deformar o Tecido). O tecido deve ficar esticado no bastidor de forma plana, sem rugas, mas sem ser puxado com força excessiva para não esticar as fibras. Ao bater levemente os dedos, deve soar como um tambor suave.",
          "Passo 3: A Escolha da Agulha Certa. A agulha é o componente que mais trabalha na máquina. Para tecidos de algodão e planos, use calibre 75/11 ponta bola leve (SES). Troque a agulha a cada 8 a 10 horas de uso contínuo ou a cada projeto nobre para evitar desfiamento de linha.",
          "Passo 4: Verificação da Tensão da Bobina (A Regra do 1/3). Borde uma coluna teste de letras. No verso, a linha da bobina deve ocupar o terço do meio e a linha colorida deve aparecer suavemente nas laterais. Se o avesso estiver equilibrado, a frente ficará impecável.",
          "Passo 5: Pratique em Retalhos Antes da Peça Definitiva. Tenha uma caixinha de retalhos de vários tecidos no ateliê. Testar a matriz por 3 minutos em um retalho antes de aplicar na peça da cliente é o maior seguro de paz e lucro que existe!",
        ],
        recommendedMaterials: {
          stabilizer: "Kit inicial com entretela rasgável 40g/50g e filme plástico hidrossolúvel (Solvy)",
          needle: "Caixinha de agulhas 75/11 Ponta Bola Leve (SES / Ball Point)",
          thread: "Linhas de poliéster 120D/2 brilhantes em cores básicas e linha de bobina fina 60wt",
          specialTools: "Tesoura de ponta curva de precisão, caneta fantasminha termo-apagável e fita métrica",
        },
        commercialVision:
          "Comece oferecendo peças para o seu círculo próximo: panos de prato de luxo, toalhinhas escolares personalizadas e kits de fraldas. Essas peças têm baixo custo de material e rápida rotação de vendas!",
        preventiveAdvice:
          "Nunca puxe a linha superior para trás ao despassar a máquina; sempre corte a linha perto do cone e puxe o restante pela agulha no sentido normal do fio para não danificar os discos de tensão.",
        artreladosGoldenTip:
          "No Ateliê Artrelados, nossa regra de ouro para iniciantes é: comece com matrizes leves e de boa procedência, nunca acelerando a máquina ao máximo. Bordar a 500 ou 600 ppm traz acabamento perfeito, sem quebras de linha e sem sustos!",
        relatedDibeTerms: [
          "Regulagem de Tensão da Linha e Bobina",
          "Alinhamento e Centralização no Bastidor",
          "Compensação de Repuxo (Pull Compensation)",
          "Precificação e Formação de Preço no Bordado",
        ],
        followUpQuestions: [
          {
            label: "🍽️ Como Bordar Panos de Prato",
            prompt: "Quero bordar panos de prato, mas sou iniciante e não sei como começar, vc me ajuda?",
          },
          {
            label: "🏷️ Precificação para Iniciantes",
            prompt: "Como calcular o preço e não ter prejuízo no meu primeiro bordado por encomenda?",
          },
          {
            label: "⚙️ Regulagem de Tensão",
            prompt: "Como regular a tensão da linha e da bobina para o bordado não repuxar nem ficar frouxo?",
          },
        ],
      };
    }

    // Prioridade: Bonés e Peças Estruturadas
    if (q.includes("bone") || q.includes("chapeu") || (q.includes("costura") && q.includes("grossa") && q.includes("agulha"))) {
      return {
        title: "Bordado em Bonés sem Quebra de Agulha: A Técnica da Costura Central e Flutuação",
        situationSummary:
          "Bordar na frente de um boné estruturado é um dos maiores desafios mecânicos para a máquina de bordar, especialmente na junção da costura central que possui múltiplas camadas duras de entretela e tecido pesado.",
        rescueActionPlan: [
          "Passo 1: Troca Obrigatória de Agulha para Calibre 90/14 Jeans/Sharp. Agulhas comuns 75/11 flexionam ao bater na costura dura e colidem contra a chapa de agulha ou lançadeira, partindo ao meio. A agulha de ponta afiada e haste reforçada perfura sem desviar.",
          "Passo 2: Técnica da Flutuação com Entretela Pesada 80g no Bastidor Plano. Se você não tem bastidor cilíndrico de boné, desmonte a aba ou abra a testeira e prenda a entretela bem firme no bastidor plano, usando cola spray e alfinetes nas abas laterais.",
          "Passo 3: Martelo de Borracha ou Prensa na Costura Central. Antes de levar à máquina, amacie a costura central batendo suavemente com um martelinho de borracha sobre uma base de madeira para achatar a lombada dura.",
          "Passo 4: Redução Drástica de Velocidade. Reduza a velocidade da máquina para 400 a 450 ppm ao passar pela área central.",
          "Passo 5: Matriz com Compensação Aumentada. No software, aumente a compensação de repuxo para 0.45mm e evite subpontos densos em cima da costura.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela rasgável pesada 80g/m² ou entretela resinada estruturada",
          needle: "Agulha calibre 90/14 ponta afiada (Jeans / Sharp / Microtex) ou de titânio",
          thread: "Linha de poliéster 120D/2 e bobina 60wt",
          specialTools: "Martelo de borracha ou alicate de pressão para achatar costuras, cola spray e fita crepe de papel",
        },
        commercialVision:
          "Bonés personalizados têm alta procura por empresas, turmas e eventos, permitindo margens de lucro superiores a 60% por unidade quando bem acabados.",
        preventiveAdvice:
          "Gire o volante manualmente na área mais grossa da costura para certificar-se de que a agulha desce livremente sem raspar na chapa da máquina.",
        artreladosGoldenTip:
          "Dica de Ouro Artrelados: Cole uma tira estreita de fita crepe por dentro da testeira do boné sobre a costura antes de montar no bastidor. Isso cria um amortecedor suave que absorve o impacto da agulha!",
        relatedDibeTerms: [
          "Agulha para Tecidos Pesados e Couro",
          "Bastidor de Boné e Acessórios Cilíndricos",
          "Alinhamento e Centralização no Bastidor",
        ],
        followUpQuestions: [
          {
            label: "🏷️ Precificação de Bonés",
            prompt: "Como calcular o preço de venda para bordar bonés personalizados no ateliê?",
          },
          {
            label: "🧢 Bastidor Plano vs Cilíndrico",
            prompt: "Como adaptar bastidor plano para bordar bonés sem deformar a copa?",
          },
          {
            label: "⚙️ Velocidade e Tensão",
            prompt: "Qual a melhor velocidade e tensão para bordar peças grossas e estruturadas?",
          },
        ],
      };
    }

    // Prioridade 1: Precificação de Mesa Posta (Trilho de Linho de 1,80m) ou Bordados em Geral
    if (
      q.includes("precific") ||
      q.includes("preco") ||
      q.includes("custo") ||
      q.includes("cobrar") ||
      q.includes("valor de venda") ||
      q.includes("quanto cobrar") ||
      q.includes("cabe")
    ) {
      const isMesaPosta =
        q.includes("linho") ||
        q.includes("trilho") ||
        q.includes("mesa posta") ||
        q.includes("caminho") ||
        q.includes("guardanapo") ||
        q.includes("1,80") ||
        q.includes("1.80");

      if (isMesaPosta) {
        return {
          title: "Precificação Nobre de Mesa Posta: Do Custo Real ao Lucro Garantido no Ateliê",
          situationSummary:
            "Calcular o valor de venda de um trilho de linho puro de 1,80m exige precisão e segurança profissional. Peças nobres de mesa posta não podem ser precificadas 'no chute' nem comparadas a tecidos sintéticos baratos. Vamos calcular cada centavo de material, tempo de confecção manual, horas de máquina e aplicar a margem de lucro real para valorizar seu talento.",
          rescueActionPlan: [
            "Passo 1: Custo Real do Tecido e Materiais (com Margem de Segurança). Para um trilho pronto de 1,80m com canto mitrado de 4cm a 5cm, compre no mínimo 2,10m a 2,20m de linho para suprir a perda das dobras e o encolhimento prévio pós-lavagem (5% a 8%). Some o valor do linho, 2m de entretela hidrossolúvel ou rasgável 40g bem macia, o consumo de linha de bordar e bobina 60wt, agulha nova e embalagem para presente com fita de gorgurão.",
            "Passo 2: Mão de Obra Manual (Corte, Esquadrejamento e Canto Mitrado). Cronometre o tempo de trabalho na bancada: pré-lavagem, passadoria a vapor, corte no fio reto, confecção dos 4 cantos mitrados a 45° e limpeza final dos fios. Multiplique as horas pela sua taxa horária artesanal (recomendado entre R$ 25,00 e R$ 40,00 por hora).",
            "Passo 3: Hora-Máquina e Depreciação do Pantógrafo. Calcule o tempo que a bordadeira trabalhará (ex: 2 cabeceiras com monograma nobre de 25.000 pontos a 600 ppm = aprox. 1h20 de máquina). Aplique o custo de hora-máquina, cobrindo eletricidade, lubrificação, manutenção e depreciação da bordadeira.",
            "Passo 4: Taxa de Criação/Edição de Matriz e Custos Fixos Rateados. Adicione a taxa de matriz (se desenvolvida ou ajustada exclusivamente para a cliente) e rateie uma cota dos custos fixos mensais do ateliê (internet, luz, ferramentas, aluguel).",
            "Passo 5: Aplicação da Margem de Lucro Nobre (40% a 50%) e Fórmula da CABE. Some todos os custos: Materiais + Mão de Obra + Hora-Máquina + Custos Fixos. Em peças nobres de linho, aplique margem de lucro de 40% a 50%. Utilize a fórmula consagrada: Preço Final = Custo Total ÷ (1 - % Lucro Desejado - % Taxa de Cartão). Assim você nunca paga para trabalhar e não tem medo de dar o preço!",
          ],
          recommendedMaterials: {
            stabilizer: "Entretela hidrossolúvel de média gramatura (Solvy lavável) ou rasgável termo/hidro de 40g bem maleável",
            needle: "Agulha nova calibre 70/10 ponta fina afiada (Microtex), que preserva a trama do linho",
            thread: "Linha de poliéster 120D/2 brilhante ou algodão egípcio 40, e linha de bobina fina 60wt",
            specialTools: "Fita métrica, ferro a vapor profissional, esquadro de alfaiataria e a Calculadora Oficial Artrelados (CABE)",
          },
          preventiveAdvice:
            "Nunca passe orçamento sem antes saber as medidas exatas da mesa da cliente e a densidade da matriz escolhida. Sempre apresente o valor destacando os diferenciais exclusivos: linho puro pré-lavado, canto mitrado de alfaiataria e bordado sem marcas no tecido.",
          artreladosGoldenTip:
            "No Ateliê Artrelados, o segredo da precificação bem-sucedida é a embalagem e o encanto: entregue o trilho enrolado com fita de gorgurão, papel de seda perfumado e um cartão de cuidados assinado por você. Essa experiência sensorial justifica um preço nobre e faz a cliente se apaixonar sem jamais cogitar pedir desconto!",
          relatedDibeTerms: [
            "Precificação e Formação de Preço no Bordado",
            "Guardanapo Bordado, Roupa de Mesa & Canto Mitrado",
            "Bordado de Luxo em Linho Puro",
            "Expositor de Produtos, Fotografia de Ateliê e Cenografia de Vendas",
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
              label: "📸 Fotografia para Divulgação",
              prompt: "Como fotografar e apresentar o trilho de mesa para postar no WhatsApp e fechar encomendas de alto valor?",
            },
          ],
        };
      } else {
        return {
          title: "Precificação Inteligente de Ateliê: A Fórmula Artrelados para o Lucro Real",
          situationSummary:
            "Saber exatamente quanto cobrar por cada bordado é o que separa um hobby custoso de um ateliê próspero e reconhecido. Cobrar apenas pela quantidade de pontos é um erro grave que desconsidera tecido, preparação, agulha, linha e seu tempo criativo.",
          rescueActionPlan: [
            "Passo 1: Levantamento dos Custos Diretos de Insumos: Calcule o valor exato do tecido ou peça crua, metros de entretela utilizados, fração de cones de linha e bobina, agulha e embalagem de entrega.",
            "Passo 2: Hora Técnica de Produção: Cronometre a montagem no bastidor, passadoria, limpeza manual dos pontos e acabamento, multiplicando pela sua hora de trabalho desejada.",
            "Passo 3: Hora-Máquina: Divida a manutenção anual e depreciação da bordadeira mais a energia consumida pelas horas médias bordadas no mês, gerando o custo por milhar de pontos.",
            "Passo 4: Rateio dos Custos Fixos: Inclua a porcentagem proporcional dos custos do ateliê (internet, luz, software de matrizes).",
            "Passo 5: Margem de Lucro Líquido e Margem de Negociação: Aplique de 35% a 50% de lucro real sobre o custo total, utilizando a fórmula divisora da CABE.",
          ],
          recommendedMaterials: {
            stabilizer: "Entretela adequada ao tecido da encomenda",
            needle: "Agulha compatível com o calibre da linha e espessura do tecido",
            thread: "Linha de bordado 100% poliéster ou viscose de boa procedência",
            specialTools: "Calculadora Oficial Artrelados (CABE) e planilha de custos",
          },
          preventiveAdvice:
            "Anote o tempo real de cada etapa na primeira peça de uma encomenda; isso serve de referência imediata para orçamentos futuros de alta lucratividade.",
          artreladosGoldenTip:
            "Lembre-se sempre: preço é o que a cliente paga, valor é o que ela recebe! Quando seu bordado tem avesso limpo, entretela correta e apresentação impecável, o valor percebido é altíssimo.",
          relatedDibeTerms: [
            "Precificação e Formação de Preço no Bordado",
            "Controle de Custos e Desperdício no Ateliê",
          ],
          followUpQuestions: [
            {
              label: "⚙️ Tensão e Bobina",
              prompt: "Como regular a tensão da linha e da bobina para esse tipo de bordado?",
            },
            {
              label: "🛡️ Escolha da Entretela",
              prompt: "Como saber a entretela ideal para cada tipo de tecido no bordado?",
            },
            {
              label: "🍽️ Precificação de Mesa Posta",
              prompt: "Como calcular o preço de venda de um trilho de linho bordado de 1,80m no ateliê?",
            },
          ],
        };
      }
    }

    // Prioridade 2: Canto Mitrado / Bainha Mitrada no Linho ou Mesa Posta
    if (
      q.includes("canto mitrado") ||
      q.includes("bainha mitrada") ||
      q.includes("barra mitrada") ||
      q.includes("cantos perfeito") ||
      (q.includes("mitrado") && (q.includes("linho") || q.includes("trilho") || q.includes("mesa")))
    ) {
      return {
        title: "Canto Mitrado de Alta Costura em Linho: O Guia dos 45° Perfeitos e Bordado Impecável",
        situationSummary:
          "O canto mitrado a 45 graus é o cartão de visitas da mesa posta de luxo. Fazer cantos retos, afiados e perfeitamente planos em linho puro exige respeito ao fio reto do tecido, passadoria minuciosa e a ordem correta entre a confecção da barra e a montagem do bordado no bastidor.",
        rescueActionPlan: [
          "Passo 1: Esquadrejamento no Fio Puxado (Fio Reto Absoluto). Jamais corte o linho apenas seguindo a fita métrica. Puxe um fio da trama no linho nas duas cabeceiras para formar uma linha guia invisível e corte exatamente sobre ela. Esse é o segredo para o trilho nunca entortar nem repuxar nas pontas.",
          "Passo 2: Vinco Duplo no Ferro a Vapor. Com o linho esticado na tábua, dobre uma primeira margem interna de 1 cm e passe com ferro a vapor quente. Em seguida, dobre a barra principal com 4 cm a 5 cm e passe novamente com bastante vapor, criando vincos profundos e nítidos.",
          "Passo 3: Marcação da Diagonal de 45 Graus. Abra a dobra da barra principal (mantendo o 1cm interno virado). Junte as duas extremidades com o lado direito do linho voltado para dentro, alinhando as bordas. Com um esquadro escolar ou de patchwork, trace uma linha exata a 45° a partir do ponto de interseção dos vincos até a ponta dobrada.",
          "Passo 4: Costura e Refile do Bico. Costure na máquina reta com ponto pequeno (comprimento 2.0 ou 2.2) exatamente sobre a linha traçada, dando retrocesso no início e fim. Corte o excesso triangular da ponta deixando 0,5 cm de margem de costura. Abra a costurinha com o ferro, desvire a ponta com o auxílio de um vira-cantos suave e assente o canto com ferro a vapor.",
          "Passo 5: Sequência Correta: Bordar Antes ou Depois? A técnica de excelência do Ateliê Artrelados é fazer os quatro cantos mitrados primeiro, assentando a moldura da peça. Depois, flutua-se a área no bastidor da bordadeira usando entretela hidrossolúvel e cola spray suave, alinhando a cruz central da matriz em relação às margens finalizadas da barra.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela hidrossolúvel de média gramatura (Solvy lavável) para flutuar no bastidor sem deixar resíduos",
          needle: "Agulha fina Microtex 70/10 ou 75/11 afiada tanto na máquina de costura quanto na bordadeira",
          thread: "Linha 100% algodão ou poliéster fino para a costura da barra e linha de poliéster 120D/2 brilhante para o bordado",
          specialTools: "Esquadro de patchwork, vira-cantos suave, caneta fantasminha termo-apagável e ferro de passar a vapor potente",
        },
        preventiveAdvice:
          "Nunca apare o bico do canto mitrado rente demais à costura; mantenha sempre a margem de segurança de 0,5 cm para evitar que as fibras naturais do linho desfiem com o uso e as lavagens na casa do cliente.",
        artreladosGoldenTip:
          "Dica de Ouro Artrelados: Borrife um pouquinho de amido suave ou passe-fácil sobre os vincos do linho antes de fechar a costura a 45°. O linho ganha uma firmeza temporária milimétrica, o tecido não escorrega sob o calcador e os quatro cantos do trilho ficam matematicamente perfeitos!",
        relatedDibeTerms: [
          "Guardanapo Bordado, Roupa de Mesa & Canto Mitrado",
          "Bordado de Luxo em Linho Puro",
          "Alinhamento e Centralização no Bastidor",
        ],
        followUpQuestions: [
          {
            label: "📐 Compensação de Encolhimento",
            prompt: "Qual a regulagem de compensação de encolhimento na matriz para bordar em linho puro sem enrugar?",
          },
          {
            label: "🏷️ Precificação de Mesa Posta",
            prompt: "Como calcular o preço de venda de um trilho de linho bordado de 1,80m no ateliê?",
          },
          {
            label: "🪡 Alinhamento em Múltiplos Bastidores",
            prompt: "Como alinhar e emendar matrizes repetidas ao longo dos 1,80m de comprimento do trilho sem entortar?",
          },
        ],
      };
    }

    // Prioridade 3: Compensação de Encolhimento / Pull Compensation / Matriz Repuxando
    if (
      q.includes("compensacao") ||
      q.includes("encolhimento") ||
      q.includes("pull compensation") ||
      (q.includes("repux") && (q.includes("matriz") || q.includes("linho") || q.includes("enrug") || q.includes("tecido")))
    ) {
      return {
        title: "Compensação de Encolhimento no Linho Puro: Como Regular a Matriz para Nunca Mais Enrugar",
        situationSummary:
          "O linho puro é um tecido nobre de fibra vegetal viva e trama aberta com elasticidade quase nula. Isso significa que a tração mecânica de cada laçada da agulha puxa os fios para o centro (efeito pull-push). Se a compensação de encolhimento e os subpontos da matriz não estiverem perfeitamente calibrados, o tecido cria ondas e rugas definitivas ao redor do bordado.",
        rescueActionPlan: [
          "Passo 1: Regulagem da Compensação de Repuxo (Pull Compensation). No programa de edição de matrizes (Wilcom, Embird, PE-Design), aumente a compensação de repuxo para entre 0.35 mm e 0.45 mm em todos os objetos em ponto cheio (satin) e letras. Isso faz com que os pontos ultrapassem ligeiramente a borda programada, compensando a contração natural da linha ao costurar.",
          "Passo 2: Subpontos (Underlay) Estruturais Obrigatórios. Nunca borde elementos cheios sobre linho sem uma base sólida de subpontos. Programe um subponto de traçado central (Center Walk) mais um subponto de contorno interno (Edge Walk). Em áreas com mais de 7mm de largura, utilize uma grade leve em tatami aberto (espaçamento 1.5mm) para travar a trama do linho antes do bordado final.",
          "Passo 3: Alívio da Densidade dos Pontos. Densidades excessivas (0.35mm ou 0.38mm) perfuram e picotam a trama do linho, gerando placas duras que repuxam. Alivie a densidade para 0.42 mm a 0.45 mm. Em tecidos planos e nobres como o linho, menos pontos resultam em mais brilho acetinado, toque suave e estabilidade dimensional.",
          "Passo 4: Orientação dos Ângulos dos Pontos. Evite que o sentido dos pontos cheios coincida 100% com o sentido da trama ou do urdume do linho. Ajuste os ângulos com inclinação diagonal de 30° a 45° em relação ao fio do tecido, distribuindo a tensão entre os fios horizontais e verticais.",
          "Passo 5: Técnica Flutuante de Estabilização. No bastidor, estique com firmeza duas camadas de entretela hidrossolúvel de média gramatura (ou entretela rasgável termo/hidro de 40g bem macia). Aplique cola spray temporária suave e apoie o linho por cima sem esticar suas fibras, prendendo com alfinetes apenas pelas bordas externas fora do campo de bordado.",
        ],
        recommendedMaterials: {
          stabilizer: "Duas camadas de entretela hidrossolúvel média (Solvy lavável) ou rasgável 40g bem suave",
          needle: "Agulha nova 70/10 ou 75/11 ponta fina afiada (Microtex), que desliza entre os fios da trama sem abrir buracos",
          thread: "Linha superior de poliéster 120D/2 brilhante e linha de bobina fina 60wt",
          specialTools: "Software de edição de matrizes com controle de compensação de repuxo e spray temporário suave",
        },
        preventiveAdvice:
          "Sempre teste a matriz em um retalho do mesmo linho e na mesma orientação do fio antes de iniciar no trilho de 1,80m. O teste prévio em retalho é o seguro de vida de qualquer ateliê profissional!",
        artreladosGoldenTip:
          "Dica de Ouro Artrelados: Se o bordado já foi executado e apresentou leve ondulação no tecido, não se desespere: passe a ferro a vapor pelo avesso sobre uma toalha felpuda grossa, esticando suavemente as fibras com as palmas das mãos em movimentos circulares enquanto o tecido ainda estiver quente do vapor!",
        relatedDibeTerms: [
          "Compensação de Repuxo (Pull Compensation)",
          "Subpontos de Sustentação (Underlay)",
          "Densidade de Pontos no Bordado Computadorizado",
          "Bordado de Luxo em Linho Puro",
        ],
        followUpQuestions: [
          {
            label: "🍽️ Canto Mitrado no Linho",
            prompt: "Como bordar canto mitrado com acabamento fino e cantos perfeitos em trilho de linho?",
          },
          {
            label: "🏷️ Precificação de Mesa Posta",
            prompt: "Como calcular o preço de venda de um trilho de linho bordado de 1,80m no ateliê?",
          },
          {
            label: "⚙️ Tensão e Bobina",
            prompt: "Como regular a tensão da linha e da bobina para esse tipo de bordado?",
          },
        ],
      };
    }

    // Prioridade 4: Alinhamento em Múltiplos Bastidores / Emendas Longas em 1,80m
    if (
      q.includes("multiplo") ||
      q.includes("emenda") ||
      q.includes("emendar") ||
      q.includes("alinhar matriz") ||
      (q.includes("alinhamento") && (q.includes("1,80") || q.includes("trilho") || q.includes("comprimento")))
    ) {
      return {
        title: "Alinhamento Perfeito em Múltiplos Bastidores: Como Emendar Matrizes em 1,80m sem Entortar",
        situationSummary:
          "Bordar arabescos contínuos ou múltiplos monogramas ao longo de um trilho de 1,80m exige um método infalível de alinhamento. Sem pontos de marcação de esquadro e controle do peso do tecido, as emendas ficam tortas e com degraus visíveis.",
        rescueActionPlan: [
          "Passo 1: Traçado Contínuo com Giz de Alfaiate e Esquadro Longo. Antes de levar à máquina, abra o trilho de linho esticado em uma mesa ampla. Com uma régua longa e giz de alfaiate fino, trace uma linha reta central que percorra todo o comprimento de 1,80m, alinhada a um fio puxado da trama.",
          "Passo 2: Inclusão de Cruzes de Alinhamento (Basting Cross) na Matriz. No software, programe no início e no final de cada segmento da matriz um pontinho de cruz de alinhamento (dois pontos corridos em cruz de 5mm). O último ponto de cruz do primeiro bastidor deve casar exatamente com o primeiro ponto do próximo bastidor.",
          "Passo 3: Uso de Gabarito Plástico e Mira Laser / Agulha Abaixada. Ao posicionar o segundo bastidor, gire o volante manualmente com a agulha abaixada para confirmar que ela desce exatamente no centro da cruz do bordado anterior antes de autorizar a máquina a bordar.",
          "Passo 4: Alívio Obrigatório do Pantógrafo. Conforme o trilho avança pelos bastidores, apoie as sobras de tecido sobre mesas laterais ou no seu colo. Nunca deixe o linho pendurado caindo da máquina, pois o peso de 1,80m arrasta o bastidor e causa perda de passos.",
          "Passo 5: Remoção dos Pontos de Marcação. Após a conclusão de todas as etapas, desmanche os pontinhos de cruz de alinhamento com uma pinça de precisão sem deixar marcas no tecido.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela hidrossolúvel de média gramatura ou rasgável 40g bem suave",
          needle: "Agulha 70/10 ponta fina afiada (Microtex)",
          thread: "Linha de bordar poliéster 120D/2 brilhante",
          specialTools: "Régua longa de patchwork, giz de alfaiate, gabarito plástico do bastidor e mesa auxiliar de apoio",
        },
        preventiveAdvice:
          "Sempre numere mentalmente a sequência das matrizes e posicione os bastidores no mesmo sentido de avanço do tecido para evitar torções diagonais na trama.",
        artreladosGoldenTip:
          "Dica de Ouro Artrelados: Cole um pedacinho de fita crepe suave sobre o ponto de união antes de descer a agulha para testar o casamento da emenda. Assim você confirma a precisão milimétrica sem furar o tecido!",
        relatedDibeTerms: [
          "Alinhamento e Centralização no Bastidor",
          "Bordado Contínuo e Pantógrafo",
          "Guardanapo Bordado, Roupa de Mesa & Canto Mitrado",
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

    // Prioridade 5: Fotografia Cenográfica / Apresentação de Mesa Posta / Flat Lay
    if (
      q.includes("fotografia") ||
      q.includes("cenografia") ||
      q.includes("flat lay") ||
      (q.includes("foto") && (q.includes("venda") || q.includes("whatsapp") || q.includes("divulg"))) ||
      q.includes("apresentacao")
    ) {
      return {
        title: "Fotografia de Ateliê & Mesa Posta: Como Valorizar Peças Bordadas para Vender com Alto Lucro",
        situationSummary:
          "Um trilho de linho de 1,80m pode ser uma verdadeira obra de arte, mas se a foto for tirada com iluminação ruim, sobre uma superfície sem graça ou com o tecido amassado, o cliente terá a impressão de um produto comum. A fotografia cenográfica de mesa posta é o maior acelerador de vendas do seu ateliê.",
        rescueActionPlan: [
          "Passo 1: Iluminação Natural Indireta (A Luz Perfeita). Posicione a mesa de produção a cerca de 1 a 2 metros de uma janela ampla que receba luz indireta pela manhã ou ao final da tarde. Nunca use o flash do celular direto na peça, pois ele estoura o brilho da linha de poliéster e achata o relevo dos pontos.",
          "Passo 2: Composição Cenográfica (Storytelling de Mesa Posta). Monte uma composição parcial da mesa: apoie uma taça de cristal lapidado, um prato nobre de porcelana, um talher dourado ou prateado e um raminho de alecrim ou flor natural de algodão ao lado do monograma bordado. Isso faz a cliente se imaginar recebendo os amigos com aquela peça.",
          "Passo 3: Ângulo Flat Lay (Vista Aérea 90°) e Macro de Detalhes (45°). Faça pelo menos duas fotos principais: uma aérea mostrando a proporção do trilho e outra bem de pertinho a 45 graus, onde a luz lateral faz sombra sutil e destaca o alto relevo do ponto cheio sobre o linho.",
          "Passo 4: Passadoria Impecável pelo Avesso. Antes de fotografar, passe o trilho com ferro a vapor sobre uma toalha felpuda para que o monograma salte e não haja qualquer vinco acidental de dobra no linho.",
          "Passo 5: Vídeo Curto em Movimento de Luz (Reels/Status). Grave um vídeo de 5 segundos movimentando suavemente o celular sob a luz natural: o brilho acetinado da linha de bordado reflete na câmera e comprova o acabamento luxuoso de imediato.",
        ],
        recommendedMaterials: {
          stabilizer: "Peça finalizada sem resíduos visíveis",
          needle: "N/A",
          thread: "Linha de alto brilho e acabamento impecável",
          specialTools: "Celular com lente limpa, luz natural da janela, taça de cristal e louça decorativa de apoio",
        },
        preventiveAdvice:
          "Sempre limpe a lente da câmera do celular em um paninho macio antes de fotografar; marcas de dedo na lente deixam a foto embaçada e reduzem a percepção de nitidez do bordado.",
        artreladosGoldenTip:
          "Dica de Ouro Artrelados: Quando enviar o orçamento pelo WhatsApp, envie primeiro essa foto cenográfica deslumbrante com a mensagem: 'Olha que atmosfera linda que este trilho de linho vai criar na sua mesa de jantar!'. A cliente compra a emoção antes mesmo de ler o valor numérico!",
        relatedDibeTerms: [
          "Expositor de Produtos, Fotografia de Ateliê e Cenografia de Vendas",
          "Precificação e Formação de Preço no Bordado",
          "Guardanapo Bordado, Roupa de Mesa & Canto Mitrado",
        ],
        followUpQuestions: [
          {
            label: "🏷️ Precificação de Mesa Posta",
            prompt: "Como calcular o preço de venda de um trilho de linho bordado de 1,80m no ateliê?",
          },
          {
            label: "🍽️ Canto Mitrado no Linho",
            prompt: "Como bordar canto mitrado com acabamento fino e cantos perfeitos em trilho de linho?",
          },
          {
            label: "📐 Compensação de Encolhimento",
            prompt: "Qual a regulagem de compensação de encolhimento na matriz para bordar em linho puro sem enrugar?",
          },
        ],
      };
    }

    // Prioridade 6: Regulagem de Tensão e Bobina (Regra do 1/3)
    if (
      q.includes("tensao") ||
      (q.includes("bobina") && (q.includes("regular") || q.includes("avesso") || q.includes("calibrar") || q.includes("ponto frouxo") || q.includes("ponto feio")))
    ) {
      return {
        title: "Regulagem de Tensão da Linha e Bobina: O Padrão Ouro do Terço Central (Regra do 1/3)",
        situationSummary:
          "A regulagem perfeita entre a linha superior e a linha da bobina é o coração da qualidade do bordado. Um avesso equilibrado garante estabilidade, não repuxa o tecido e proporciona pontos cheios acetinados na frente sem linha branca vazando pelas bordas.",
        rescueActionPlan: [
          "Passo 1: Verificação da Regra de Ouro do 1/3 no Avesso. Borde uma coluna teste de ponto cheio (satin) com 5mm de largura. Ao virar o avesso, a linha branca da bobina deve ocupar exatamente o terço central (33%), e a linha colorida superior deve aparecer suavemente nas laterais ocupando 1/3 de cada lado.",
          "Passo 2: Se a linha branca da bobina estiver vazando para a frente (frente com pontinhos brancos): A tensão superior está excessivamente apertada ou a tensão da caixa de bobina está frouxa demais. Afrouxe a tensão superior ou aperte sutilmente o parafuso da bobina em sentido horário.",
          "Passo 3: Se o avesso estiver totalmente colorido (sem linha de bobina visível): A linha de cima está frouxa ou a bobina está muito apertada. Aperte a tensão superior da máquina de bordar.",
          "Passo 4: Calibração com o Teste da Queda da Caixa de Bobina. Em máquinas com caixa de bobina removível, segure a ponta da linha: a caixa deve permanecer suspensa e descer suavemente apenas com um leve toque no dedo (resistência de 18g a 22g / medidor Towa).",
          "Passo 5: Limpeza da Mola de Tensão da Bobina. Frequentemente fiapos e pó de entretela entram sob a molinha da bobina, desregulando a pressão. Passe a ponta de um cartão de visita ou fio dental sob a lâmina para desobstruir.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela rasgável padrão para teste de calibração",
          needle: "Agulha nova 75/11 ou 80/12 ponta bola leve",
          thread: "Linha de bordar poliéster 120D/2 e linha de bobina padrão 60wt",
          specialTools: "Chave de fenda de precisão para parafuso de bobina e medidor de tensão Towa (opcional)",
        },
        preventiveAdvice:
          "Nunca gire o parafuso da caixa de bobina em voltas completas: use microajustes equivalentes aos ponteiros de um relógio (15 minutos por vez).",
        artreladosGoldenTip:
          "Dica de Ouro Artrelados: Faça um pequeno teste de 10 letras em um retalho toda segunda-feira de manhã. Cinco minutos de teste economizam horas de retrabalho e peças perdidas durante a semana!",
        relatedDibeTerms: [
          "Regulagem de Tensão da Linha e Bobina",
          "Caixa de Bobina e Lançadeira",
          "Towa Gauge (Medidor de Tensão)",
        ],
        followUpQuestions: [
          {
            label: "🛡️ Escolha da Entretela",
            prompt: "Como saber a entretela ideal para cada tipo de tecido no bordado?",
          },
          {
            label: "🏷️ Precificação de Bordados",
            prompt: "Como calcular o custo e o preço de venda correto para esse bordado no meu ateliê?",
          },
          {
            label: "🍽️ Canto Mitrado no Linho",
            prompt: "Como bordar canto mitrado com acabamento fino e cantos perfeitos em trilho de linho?",
          },
        ],
      };
    }

    // Caso Específico: Toalha de Mesa de Grande Porte (Linho, Quadrada, Retangular ou Redonda para 8 pessoas, 2,40m, Banquete)
    if (
      q.includes("toalha de mesa") ||
      q.includes("toalha quadrada") ||
      q.includes("toalha redonda") ||
      q.includes("toalha retangular") ||
      q.includes("2,40") ||
      q.includes("2.40") ||
      q.includes("8 pessoas") ||
      q.includes("8 lugares") ||
      q.includes("banquete") ||
      (q.includes("toalha") && (q.includes("mesa") || q.includes("linho")))
    ) {
      return {
        title: "Banquete Imperial: Guia Artrelados para Bordar Toalha de Mesa de Linho Gigante com Maestria",
        situationSummary:
          "Que encomenda espetacular e honrosa! Bordar uma toalha de mesa de linho puro de 2,40 m para 8 lugares é um trabalho de alta costura para o lar. Compreendo perfeitamente o seu frio na barriga: o linho é nobre, vivo e não perdoa repuxos, e o peso de uma peça desse porte exige planejamento minucioso de matriz, sustentação e alinhamento para não deformar o tecido nem sobrecarregar o pantógrafo da máquina.",
        rescueActionPlan: [
          "Passo 1: Escolha da Matriz e Estilo de Desenho: Para uma mesa de 8 lugares (2,40m), evite bordar o centro absoluto, pois pratos e arranjos cobrirão o bordado e manusear o meio do tecido na máquina é fisicamente desafiador. Opte por cantoneiras nos 4 cantos ou medalhões/monogramas nas quedas laterais (de 18cm a 25cm da barra). Escolha matrizes leves: florais botânicos lineares, monogramas clássicos com arabescos vazados ou pontos leves (ponto semente, redwork ou sombra). Evite matrizes compactas em tatami pesado, que formam placas duras e repuxam o linho.",
          "Passo 2: Gestão do Peso e Estação de Apoio ao Pantógrafo: Uma toalha de linho de 2,40m é extremamente pesada. Nunca deixe o restante do tecido pendurado para fora da máquina, pois a gravidade puxará o bastidor durante os movimentos do pantógrafo, desalinhando contornos e forçando os motores de passo. Monte uma 'estação de apoio' com mesas auxiliares ou cadeiras acolchoadas ao redor da bordadeira, acomodando todo o volume no mesmo nível da mesa de bordar.",
          "Passo 3: Marcação Precisa e Simétrica dos 4 Cantos: Meça a partir das barras prontas para dentro (entre 18cm e 25cm da ponta, respeitando a dobra do canto mitrado). Faça a marcação em cruz com giz de alfaiate fino ou caneta fantasminha termo-apagável com auxílio de esquadro de 90°. Para simetria perfeita nos 4 cantos, utilize gabarito impresso da matriz na escala 1:1, alinhando rigorosamente com o fio reto do linho.",
          "Passo 4: Montagem com Técnica Flutuante sem Queimar o Linho no Aro: Nunca aperte o linho diretamente no aro do bastidor para não esmagar as fibras nem deixar marcas permanentes de aro ('hoop burn'). Estique apenas a entretela hidrossolúvel encorpada (ou rasgável 40g bem macia) no bastidor bem esticada como um tambor. Borrife adesivo spray temporário suave, apoie o canto da toalha sobre as marcações e execute o alinhavo de contorno (basting frame) da própria máquina para fixação absoluta.",
          "Passo 5: Calibração de Velocidade e Densidade: Reduza a velocidade da sua máquina para 500 a 600 PPM para garantir formação perfeita das laçadas na trama do linho. No software da matriz, certifique-se de que a densidade esteja suave (entre 0.40mm e 0.45mm) com compensação de repuxo regulada (0.35mm a 0.40mm).",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela rasgável de toque suave e arrancamento fácil (40g/m²) ou entretela hidrossolúvel têxtil (dissolve em água sem deixar rigidez nas costas, deixando o avesso limpo e nobre)",
          needle: "Agulha Schmetz ou Groz-Beckert ponta fina Microtex ou Universal calibre 70/10 ou 75/11 (evite pontas grossas 90/14 que furam e abrem a tela do linho)",
          thread: "Linha superior de poliéster de filamento contínuo nº 40 com brilho acetinado (ou linha de algodão egípcio nº 50 para estilo rústico chique); linha de bobina fina 60wt macia, preferencialmente na cor branca ou combinando com o fundo do linho",
          specialTools: "Mesas de apoio auxiliares/cadeiras com almofada para sustentar o peso da toalha, adesivo spray temporário para bordado, caneta fantasminha termosensível, tesoura de arremate bico de pato e ferro a vapor",
        },
        commercialVision:
          "Ofereça à cliente a composição de um enxoval de banquete completo: conjunto com 8 guardanapos de linho puro com o monograma coordenado e 8 porta-guardanapos bordados. Para mesas de 8 lugares, a venda do conjunto completo dobra a rentabilidade do pedido e encanta a cliente!",
        preventiveAdvice:
          "Antes de encostar a agulha na toalha de 2,40m da cliente, corte uma sobra do mesmo linho e borde a matriz escolhida como teste completo. Lave o retalho ou passe a vapor para checar se a matriz encolheu o tecido. Sempre use a função 'Traçar Contorno' (Trace Outline) no painel da máquina para garantir que o alinhamento angular com a borda está milimetricamente reto.",
        artreladosGoldenTip:
          "O Segredo dos 4 Cantos Flutuantes da Artrelados: Para bordar os cantos de uma toalha tão nobre sem deformar a barra, dobre a toalha em triângulo com calma e trabalhe cada ponta individualmente. Coloque apenas a entretela bem esticada como pele de tambor no bastidor, borrife cola spray leve, apoie o canto da toalha exatamente sobre as marcações e execute o alinhavo perimetral da máquina. O linho não sofre pressão plástica do aro, não ganha 'hoop burn' e fica assentado, liso e reto como uma régua de alfaiate!",
        relatedDibeTerms: [
          "Bordado em Toalhas de Lavabo com Faixa de Linho Puro",
          "Rotação de Matriz em 90°, 180° e Alinhamento por Ângulo Livre",
          "Guardanapo Bordado, Roupa de Mesa & Canto Mitrado",
        ],
        followUpQuestions: [
          {
            label: "📐 Marcação nos 4 Cantos",
            prompt: "Qual é a distância ideal da borda e como posicionar as cantoneiras em toalhas de mesa quadradas para valorizar o caimento?",
          },
          {
            label: "✨ Estilo de Monograma e Matriz",
            prompt: "Quais tipos de matrizes (monograma, floral, richelieu ou arabesco) combinam melhor com toalha de mesa de linho para 8 lugares?",
          },
          {
            label: "🏷️ Precificação de Grande Porte",
            prompt: "Como calcular o preço justo para bordar uma toalha de linho de 2,40m considerando o risco, tempo de manuseio e número de bastidores?",
          },
        ],
      };
    }

    // Caso: Trilho de Mesa / Caminho de Mesa de Linho Longo (1,80m)
    if (
      (q.includes("trilho") || q.includes("caminho")) &&
      (q.includes("linho") || q.includes("mesa posta") || q.includes("1,80") || q.includes("1.80") || q.includes("encomenda") || q.includes("como bordar"))
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
        commercialVision:
          "Ofereça à cliente guardanapos de linho combinando com os mesmos monogramas das cabeceiras do trilho para criar uma mesa posta de luxo completa.",
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

    // Caso Específico: Manta de Bebê / Cobertor Infantil / Enxoval de Berço
    if (
      q.includes("manta") ||
      q.includes("cobertor") ||
      q.includes("naninha") ||
      q.includes("cueiro") ||
      q.includes("edredom")
    ) {
      return {
        title: "Primeiros Passos Perfeitos: Guia Artrelados para Bordar Manta de Bebê com Segurança e Acabamento Impecável",
        situationSummary:
          "Que encomenda linda e cheia de significado! Bordar manta de bebê é uma das peças mais nobres e lucrativas do enxoval. Como você é iniciante, o grande segredo para não ter medo é entender o tecido da manta (piquet, microfibra, soft ou malha dupla) e usar a estabilização correta para que o bordado fique macio, sem afundar na textura e com o avesso 100% confortável para o recém-nascido.",
        rescueActionPlan: [
          "Passo 1: Identificação do Tecido e Estilo da Matriz: Se a manta for de piquet de algodão ou malha, use matrizes delicadas com contorno em ponto cheio suave ou apliques. Se for de microfibra fofa, plush ou soft (tecidos com pelos/felpas), coloque obrigatoriamente um filme plástico hidrossolúvel por cima para os pontos não afundarem. Escolha desenhos infantis leves: ursinhos, ramos botânicos ou monogramas clássicos com o nome do bebê.",
          "Passo 2: Posicionamento Estratégico no Canto: Em mantas de berço ou passeio (geralmente de 80x80cm a 1,00x1,00m), o local mais clássico e elegante para bordar é em uma das diagonais/cantos, a cerca de 15cm a 20cm da barra. Dobre a manta em triângulo para encontrar o eixo exato e marque o centro com giz de alfaiate ou caneta fantasminha.",
          "Passo 3: Técnica da Flutuação no Bastidor: Como a manta é encorpada e volumosa, nunca aperte o tecido diretamente no aro do bastidor para não esmagar as fibras nem deixar marcas de pressão permanentes ('hoop burn'). Prenda apenas a entretela rasgável macia no bastidor (bem esticada como um tambor), borrife adesivo temporário spray suave e apoie a área marcada da manta por cima, fazendo o alinhavo de contorno (basting) da própria máquina.",
          "Passo 4: Gestão do Volume e Apoio da Manta: Mantenha as sobras da manta apoiadas em uma mesa lateral ou no seu colo durante o bordado, para que o peso do tecido não arraste o pantógrafo da máquina nem cause perda de passos.",
          "Passo 5: Acabamento Macio do Avesso (Protege Bebê): Após o bordado, remova suavemente as sobras de entretela e aplique pelo avesso a película termocolante suave 'Protege Bebê' (Cover the Back) com ferro morno sem vapor. Ela sela todos os pontinhos e nós, deixando um toque aveludado que protege a pele sensível do bebê.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela rasgável de toque suave 40g (base) + Filme hidrossolúvel (por cima, se a manta tiver pelos/felpa) + Película termocolante 'Protege Bebê' para o avesso",
          needle: "Agulha calibre 70/10 ou 75/11 Ponta Bola Fina (SES / Ball Point), que afasta as fibras sem rompê-las",
          thread: "Linha superior de poliéster 120 brilhante e linha de bobina macia fina 60wt",
          specialTools: "Caneta fantasminha termo-apagável, cola spray temporária suave para bordado, tesoura de precisão curva e ferro seco",
        },
        commercialVision:
          "Ofereça a manta em kit coordenado com 2 fraldinhas de boca e 1 toalha fralda com o mesmo bordado. Kits de maternidade aumentam o ticket médio da encomenda em mais de 80% e são os preferidos das mães e madrinhas!",
        preventiveAdvice:
          "Sempre faça um teste prévio da matriz em um retalho com a mesma estrutura de tecido e entretela antes de bordar na manta da cliente. Isso garante a calibragem da tensão da bobina e a maciez do resultado.",
        artreladosGoldenTip:
          "Dica de Ouro Artrelados: Ao cortar a entretela 'Protege Bebê' para o avesso, arredonde sempre os 4 cantos com a tesoura antes de aplicar com o ferro. Cantos arredondados nunca descolam com as lavagens frequentes da manta!",
        relatedDibeTerms: [
          "Toalha Fralda e Enxoval de Bebê (Bordado Seguro e Macio)",
          "Filme Hidrossolúvel para Bordado (Solvy)",
          "Alinhamento e Centralização no Bastidor",
        ],
        followUpQuestions: [
          {
            label: "🧵 Tecido e Estrutura da Manta",
            prompt: "Quais os cuidados específicos para bordar em manta de microfibra fofa, plush ou piquet?",
          },
          {
            label: "📐 Dimensões do Bastidor e Matriz",
            prompt: "Qual o tamanho de matriz ideal e a melhor posição para bordar em manta de bebê?",
          },
          {
            label: "🏷️ Precificação e Montagem de Kits",
            prompt: "Como calcular o preço de venda da manta de bebê e montar kits coordenados para enxoval?",
          },
        ],
      };
    }

    // Caso 2: Fralda de bebê / Paninho de boca para iniciante / primeira encomenda
    if (
      (q.includes("fralda") || q.includes("paninho de boca") || q.includes("fraldinha")) &&
      (q.includes("iniciante") || q.includes("comecar") || q.includes("comeco") || q.includes("como bordar") || q.includes("primeir") || q.includes("encomenda"))
    ) {
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

    // Saudação personalizada usando as variáveis do topo da função
    const customGreeting = userName
      ? `1. COMPREENDENDO O SEU DESAFIO: Olá, ${userName}! Que alegria receber você aqui no SOS do Ateliê Artrelados.`
      : `1. COMPREENDENDO O SEU DESAFIO: Olá, colega bordadeira! Que alegria ter você aqui no SOS do Ateliê Artrelados.`;

    // Caso Dinâmico Universal: Busca inteligente nos mais de 2.900 verbetes do DIBE
    const matches = searchLocalDibe(query, 3);
    if (matches.length > 0) {
      const top = matches[0];
      return {
        title: `${top.term}: Guia Especializado de Ateliê Artrelados`,
        situationSummary: `${customGreeting} Analisamos com todo carinho a sua dúvida sobre "${query.slice(0, 60)}...". Com base no acervo oficial do DIBE Artrelados e no conhecimento de ateliê, reunimos as melhores práticas de produção para você ter sucesso absoluto.`,
        rescueActionPlan: [
          `Passo 1 (Conceito e Estabilização): ${top.beginnerExplanation || top.summary || "Avalie a estrutura mecânica do tecido e utilize entretela com gramatura compatível com a densidade da matriz."}`,
          `Passo 2 (Execução Técnica): ${Array.isArray(top.howItWorks) && top.howItWorks[0] ? top.howItWorks[0] : (Array.isArray(top.troubleshootingTips) && top.troubleshootingTips[0] ? top.troubleshootingTips[0] : "Regule a agulha adequada e calibre a tensão da linha superior para evitar repuxos.")}`,
          `Passo 3 (Parâmetros de Máquina): ${Array.isArray(top.troubleshootingTips) && top.troubleshootingTips[1] ? top.troubleshootingTips[1] : "Mantenha a velocidade da máquina controlada e certifique-se de que o tecido não sofre tração excessiva no pantógrafo."}`,
          `Passo 4 (Prevenção de Falhas): ${Array.isArray(top.commonErrors) && top.commonErrors[0] ? `Cuidado essencial: evite ${top.commonErrors[0].toLowerCase()}` : "Verifique o assentamento das laçadas e faça sempre um teste prévio em retalho similar."}`,
          `Passo 5 (Acabamento Profissional): Realize a limpeza minuciosa do verso com tesoura de arremate de ponta curva, conferindo estabilidade dimensional, toque suave e passadoria a ferro morno com vapor.`,
        ],
        recommendedMaterials: {
          stabilizer: `Entretela adequada para ${top.category || "o tecido"} (rasgável suave 40g/50g ou hidrossolúvel têxtil)`,
          needle: `Agulha recomendada: calibre 75/11 ou 80/12 ponta bola leve (SES) ou microtex afiada`,
          thread: `Linha superior 100% poliéster trilobal 120D/2 brilhante e linha de bobina padrão 60wt`,
          specialTools: `Tesoura de arremate curva, pinça de precisão, cola temporária suave e ferro a vapor`,
        },
        commercialVision:
          "Agregue valor à peça final com uma embalagem charmosa, aroma artesanal suave e um cartão de cuidados assinado pelo seu ateliê. Isso eleva a percepção de luxo e fideliza a cliente!",
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
      title: "Primeiros Passos de Sucesso: Guia Completo Artrelados para o seu Bordado",
      situationSummary: `Analisamos com todo carinho a sua dúvida técnica. Com base no acervo oficial do DIBE Artrelados e nas práticas de ateliê, reunimos as melhores diretrizes para você produzir com segurança e encantar suas clientes.`,
      rescueActionPlan: [
        "Passo 1: Avaliação do Tecido & Estabilização. Certifique-se de que a entretela utilizada oferece sustentação mecânica suficiente para o peso da matriz sem deformar a peça (rasgável para tecidos firmes e hidrossolúvel para tecidos abertos ou com pelos).",
        "Passo 2: Montagem com Firmeza no Bastidor. O tecido deve ficar esticado de forma uniforme como um tambor suave, sem repuxar as fibras nas diagonais para evitar ondas ao retirar da máquina.",
        "Passo 3: Ajuste da Tensão e Bobina. Verifique se a linha da bobina está aparecendo sutilmente no terço central do avesso (regra do 1/3) para garantir firmeza e pontos acetinados na frente.",
        "Passo 4: Calibre da Agulha e Velocidade. Para tecidos delicados utilize agulha 70/10 ou 75/11 ponta bola leve; mantenha a velocidade em torno de 500 a 600 ppm para formação perfeita dos pontos.",
        "Passo 5: Limpeza e Apresentação. Faça o corte das pontas de linha rente pelo avesso, passe suavemente a ferro morno com vapor e apresente a peça com embalagem diferenciada.",
      ],
      recommendedMaterials: {
        stabilizer: "Entretela compatível com a elasticidade e peso do tecido (40g a 50g)",
        needle: "Agulha calibre 75/11 ponta bola leve (SES) para bordado computadorizado",
        thread: "Linha de poliéster 120D/2 brilhante e linha de bobina fina 60wt",
        specialTools: "Tesoura de arremate de ponta curva, fita métrica e cola spray temporária",
      },
      commercialVision:
        "Crie conjuntos coordenados e capriche na apresentação com laços e perfume de passar. O encanto visual valoriza o produto e permite uma precificação muito mais lucrativa!",
      preventiveAdvice:
        "Sempre realize um teste de bordado em um retalho do mesmo tecido com a mesma entretela antes de aplicar na peça definitiva da cliente.",
      artreladosGoldenTip:
        "No ateliê de bordados, paciência e teste em retalho são a maior economia de tempo e dinheiro que uma bordadeira pode ter!",
      relatedDibeTerms: [
        "Estabilização e Entretelas para Bordado Computadorizado",
        "Regulagem de Tensão da Linha e Bobina",
        "Alinhamento e Centralização no Bastidor",
        "Precificação e Formação de Preço no Bordado",
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
    setAdvice(null);
    setCopied(false);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 45000);

      const res = await fetch("/api/gemini/embroidery-consultant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          userQuery: textToSubmit.trim(),
        }),
      });

      clearTimeout(timeoutId);

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
      console.warn("Utilizando motor de inteligência do acervo DIBE:", err);
      // Fallback rico e personalizado conectado ao acervo do DIBE
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
      `❤️ *1. COMPREENDENDO O SEU DESAFIO:*\n${advice.situationSummary}\n\n` +
      `🛠️ *2. PASSO A PASSO PRÁTICO PARA SALVAR A PEÇA (OU EXECUTAR O PROJETO):*\n${advice.rescueActionPlan.map((s, idx) => `${idx + 1}. ${s}`).join("\n")}\n\n` +
      `🧵 *3. MATERIAIS & FERRAMENTAS RECOMENDADAS:*\n` +
      (advice.recommendedMaterials.stabilizer ? `• ENTRETELA / PELÍCULA: ${advice.recommendedMaterials.stabilizer}\n` : "") +
      (advice.recommendedMaterials.needle ? `• AGULHA IDEAL: ${advice.recommendedMaterials.needle}\n` : "") +
      (advice.recommendedMaterials.thread ? `• LINHAS RECOMENDADAS: ${advice.recommendedMaterials.thread}\n` : "") +
      (advice.recommendedMaterials.specialTools ? `• FERRAMENTAS & MACETES: ${advice.recommendedMaterials.specialTools}\n` : "") +
      (advice.commercialVision ? `\n💼 *4. VISÃO COMERCIAL & VALOR AGREGADO (OU DICA DE PRODUÇÃO):*\n${advice.commercialVision}\n` : "") +
      `\n💡 *5. DICA DE OURO ARTRELADOS:*\n${advice.artreladosGoldenTip}\n\n` +
      (advice.preventiveAdvice ? `🛡️ *6. PARA AS PRÓXIMAS PEÇAS:*\n${advice.preventiveAdvice}\n\n` : "") +
      (advice.relatedDibeTerms && advice.relatedDibeTerms.length > 0 ? `📖 *7. VERBETES DO DIBE QUE FUNDAMENTARAM ESTA RESPOSTA:*\n${advice.relatedDibeTerms.join(", ")}\n\n` : "") +
      `📊 *Calculadora Oficial Artrelados (CABE):* https://www.artrelados.com.br/calculadora-de-bordados-a-maquina-br\n\n` +
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


      {/* Advice Result Card */}
      {advice && (
        <div
          ref={adviceResultRef}
          id="consultant-advice-result"
          className="bg-white border-2 border-amber-400/80 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 animate-fadeIn scroll-mt-6"
        >
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

            <div className="flex flex-wrap items-center gap-2">
              {/* Botão Principal: Estrelinha de Favoritar no Meu Caderno de Ateliê */}
              {onToggleSaveDiagnostic && (
                <button
                  type="button"
                  onClick={handleToggleFavoriteAdvice}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition inline-flex items-center space-x-1.5 cursor-pointer border shadow-2xs ${
                    isAdviceFavorited
                      ? "bg-amber-400 text-slate-950 border-amber-500 shadow-xs hover:bg-amber-300"
                      : "bg-amber-50/90 hover:bg-amber-100 text-amber-950 border-amber-300"
                  }`}
                  title={isAdviceFavorited ? "Remover do Meu Caderno de Favoritos" : "Salvar no Meu Caderno de Favoritos (Aba 3)"}
                >
                  <Star className={`w-4 h-4 ${isAdviceFavorited ? "text-slate-950 fill-slate-950" : "text-amber-600 fill-amber-400"}`} />
                  <span>{isAdviceFavorited ? "Salvo no Meu Caderno!" : "Salvar nos Favoritos ⭐"}</span>
                </button>
              )}

              {/* Botão de Copiar */}
              <button
                type="button"
                onClick={handleCopyAdvice}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition inline-flex items-center space-x-1.5 cursor-pointer border border-slate-200 shadow-2xs"
                title="Copiar orientação para enviar no WhatsApp ou grupo"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-black">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-700" />
                    <span>Copiar</span>
                  </>
                )}
              </button>

              {/* Botão de Nova Consulta */}
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
            <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line">
              {advice.situationSummary}
            </p>
          </div>

          {/* Section 2: Practical Rescue Action Plan */}
          <div className="space-y-3">
            <h5 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>Passo a Passo Prático para Salvar a Peça (ou Executar o Projeto):</span>
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

          {/* Section: Commercial Vision */}
          {advice.commercialVision && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-emerald-100/40 to-teal-50 border border-emerald-300/80 space-y-1.5 shadow-2xs">
              <span className="text-[11px] font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <span>💼 Visão Comercial & Valor Agregado (ou Dica de Produção):</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                {advice.commercialVision}
              </p>
            </div>
          )}

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
              <div className="pt-2.5 border-t border-amber-300/70">
                <a
                  href="https://www.artrelados.com.br/calculadora-de-bordados-a-maquina-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-amber-950 hover:text-amber-800 font-bold text-[11px] sm:text-xs leading-relaxed transition-colors cursor-pointer"
                  title="Conhecer a Calculadora Oficial Artrelados"
                >
                  <span className="underline decoration-amber-600/60 decoration-1 underline-offset-2 group-hover:decoration-amber-900">
                    Conheça a Calculadora Oficial Artrelados (CABE) e transforme a gestão e a precificação do seu ateliê
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-800 shrink-0 group-hover:translate-x-0.5 transition-transform" />
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

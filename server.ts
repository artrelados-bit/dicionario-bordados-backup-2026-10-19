import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = path.dirname(currentFilePath);

// Cache em memória do acervo oficial DIBE (mais de 2.900 verbetes)
let acervoOfficialCache: any[] | null = null;

function getAcervoOfficial(): any[] {
  if (acervoOfficialCache) return acervoOfficialCache;
  try {
    const acervoPath = path.resolve(currentDirPath, "src/data/masterAcervoOfficial.json");
    if (fs.existsSync(acervoPath)) {
      acervoOfficialCache = JSON.parse(fs.readFileSync(acervoPath, "utf-8"));
    } else {
      acervoOfficialCache = [];
    }
  } catch (err) {
    console.error("Erro ao carregar acervo DIBE:", err);
    acervoOfficialCache = [];
  }
  return acervoOfficialCache || [];
}

const STOP_WORDS = new Set([
  "de", "a", "o", "que", "e", "do", "da", "em", "um", "para", "com", "nao", "uma", "os", "no", "se", "na",
  "por", "mais", "as", "dos", "como", "mas", "ao", "ele", "das", "seu", "sua", "ou", "quando", "muito",
  "nos", "ja", "eu", "tambem", "so", "pelo", "pela", "ate", "isso", "ela", "entre", "depois", "sem",
  "mesmo", "aos", "seus", "quem", "nas", "me", "esse", "eles", "voce", "essa", "num", "nem", "suas",
  "meu", "minha", "minhas", "meus", "onde", "sou", "peguei", "sei", "qual", "quais", "posso", "pode",
  "fazer", "comecar", "ajuda", "ajudar"
]);

function toCleanText(val: any): string {
  if (!val) return "";
  if (Array.isArray(val)) return val.join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return String(val).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function searchRelevantDibeVerbetes(query: string, max = 5): any[] {
  const acervo = getAcervoOfficial();
  if (!acervo.length) return [];

  const words = query
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/\W+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  if (!words.length) return [];

  const scored: { item: any; score: number }[] = [];
  for (const item of acervo) {
    let score = 0;
    const termClean = toCleanText(item.term);
    const summaryClean = toCleanText(item.summary);
    const defClean = toCleanText(item.definition);
    const dicaClean = toCleanText(item.dicaArtrelados);
    const tipsClean = toCleanText(item.troubleshootingTips);

    for (const w of words) {
      if (termClean === w) score += 50;
      else if (termClean.includes(w)) score += 20;
      if (summaryClean.includes(w)) score += 5;
      if (dicaClean.includes(w)) score += 4;
      if (tipsClean.includes(w)) score += 3;
      if (defClean.includes(w)) score += 1;
    }
    if (score > 0) {
      scored.push({ item, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, max).map((s) => s.item);
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: "50mb" }));

  // CORS middleware para assegurar requisições em navegadores e iframes
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  // Gemini API Proxy Routes
  app.post("/api/gemini/expand-term", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          success: false,
          error: "Chave GEMINI_API_KEY não configurada no servidor."
        });
      }

      const { termName, category, existingDefinition, contextPrompt } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const prompt = `Você é a inteligência técnica de bordado do DIBE Artrelados.
Crie um verbete técnico oficial aprofundado para o termo: "${termName}".
Categoria sugerida: ${category || "Terminologia Geral"}.
Definição prévia: ${existingDefinition || "Nenhuma"}.
Instruções adicionais: ${contextPrompt || "Nenhuma"}.

Retorne ESTRITAMENTE um objeto JSON válido (sem blocos markdown) com os seguintes campos:
{
  "code": "Código sugerido (ex: X-999)",
  "term": "${termName}",
  "level": "Iniciante 🟢" ou "Intermediário 🟡" ou "Avançado 🔴",
  "category": "${category || "Terminologia Geral"}",
  "grammarClass": "Classe gramatical completa",
  "origin": "Origem histórica e etimológica no bordado",
  "summary": "Resumo de 1 a 2 linhas",
  "definition": "Definição técnica aprofundada com rigor de ateliê",
  "beginnerExplanation": "Explicação didática para quem está começando",
  "howItWorks": ["Passo 1", "Passo 2", "Passo 3", "Passo 4"],
  "applications": ["Aplicação 1", "Aplicação 2"],
  "matrixRelations": "Relação com densidade, compensação e outros parâmetros",
  "commonErrors": ["Erro 1", "Erro 2"],
  "troubleshootingTips": ["Dica 1", "Dica 2"],
  "dicaArtrelados": "Dica de ouro prática exclusiva da Artrelados",
  "voceSabia": "Curiosidade técnica histórica ou científica",
  "practicalExercise": "Exercício de bancada ou no software para treinar",
  "quickSummary": "Resumo de uma frase",
  "relatedTerms": ["Termo 1", "Termo 2", "Termo 3"]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = response.text || "{}";
      const cleanJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const verbete = JSON.parse(cleanJson);

      return res.json({ success: true, verbete });
    } catch (err: any) {
      console.error("Erro no expand-term:", err);
      return res.status(500).json({
        success: false,
        error: err.message || "Erro ao processar verbete com Gemini."
      });
    }
  });

  app.post("/api/gemini/parse-document", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          success: false,
          error: "Chave GEMINI_API_KEY não configurada no servidor."
        });
      }

      const { documentText } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const prompt = `Extraia todos os termos e verbetes de bordado contidos no texto a seguir.
Texto:
${documentText.slice(0, 15000)}

Retorne ESTRITAMENTE um array JSON contendo objetos no formato:
[
  {
    "term": "Nome do Termo",
    "category": "Categoria mais adequada",
    "summary": "Resumo breve",
    "definition": "Definição completa encontrada",
    "technicalDetails": "Detalhes técnicos",
    "applications": ["Aplicação"],
    "troubleshootingTips": ["Dica de solução"],
    "relatedTerms": ["Termo relacionado"]
  }
]`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = response.text || "[]";
      const cleanJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const verbetes = JSON.parse(cleanJson);

      return res.json({ success: true, verbetes });
    } catch (err: any) {
      console.error("Erro no parse-document:", err);
      return res.status(500).json({
        success: false,
        error: err.message || "Erro ao importar termos com Gemini."
      });
    }
  });

  // Consultora Mestra do Ateliê Artrelados (Qualquer Dúvida de Bordado Eletrônico & Resgate de Peças)
  app.post("/api/gemini/embroidery-consultant", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          success: false,
          error: "Chave GEMINI_API_KEY não configurada no servidor."
        });
      }

      const { userQuery, contextInfo } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      // Localiza no acervo oficial do DIBE (mais de 2.900 verbetes) os mais relevantes para a dúvida
      const matchedVerbetes = searchRelevantDibeVerbetes(userQuery || "", 4);

      const verbetesContext = matchedVerbetes.length > 0
        ? `\n\n--- COMPÊNDIO TÉCNICO OFICIAL DIBE ARTRELADOS (VERBETES DE REFERÊNCIA) ---\n` +
          matchedVerbetes.map((v, i) => `
[Verbete de Apoio ${i + 1}: "${v.term}"]
- Categoria: ${v.category || "Técnica Geral"}
- Resumo & Definição: ${v.summary || ""} ${v.definition || ""}
- Dica de Ouro da Especialista: ${v.dicaArtrelados || "N/A"}
- Orientações Práticas / Erros Comuns: ${Array.isArray(v.troubleshootingTips) ? v.troubleshootingTips.join("; ") : (v.troubleshootingTips || "")} ${Array.isArray(v.commonErrors) ? v.commonErrors.join("; ") : (v.commonErrors || "")}
`).join("\n")
        : "";

      const prompt = `DIRETRIZES DE LINGUAGEM E TRATAMENTO DA CONSULTORA ARTRELADOS (SOS / OFICINA DO BORDADO)

Você é a (Consultora online do DIBE Artrelados), mentora altamente especializada em bordado computadorizado e gestão de ateliês. Sua missão é acolher, orientar e capacitar bordadeiras com rigor técnico, carinho e foco em rentabilidade.

REGRAS DE CONDUTA E LINGUAGEM OBRIGATÓRIAS:
1. USO OBRIGATÓRIO DO NOME: Se o usuário informar seu nome (ex: "Meu nome é Maria", "Sou a Carla", "Me chamo Marcos"), use OBRIGATORIAMENTE o nome dele na introdução (em COMPREENDENDO O SEU DESAFIO) e na saudação/encerramento. Se ele não informar o nome, use um tratamento caloroso, afetuoso e profissional típico do ateliê ("minha querida", "colega bordadeira", "amigo do bordado").
2. ADAPTAÇÃO RIGOROSA AO NÍVEL DO USUÁRIO:
   - Se for INICIANTE: Reduza expressivamente o jargão técnico. Explique conceitos de forma simples, amorosa e direta, sem termos em inglês desnecessários ou siglas sem explicação (ex: use "entretela de rasgar" em vez de só "tearaway"; explique "pontos de sustentação/apoio" em vez de jargões técnicos herméticos). Transmita confiança e tire o medo de errar na máquina.
   - Se envolver GRANDES VOLUMES / PRODUÇÃO EM LOTE (ex: 50, 100, 200, 500 peças): Foque imediatamente em produtividade em lote, controle de tempo de ciclo por peça, técnica de bastidores múltiplos para não parar a máquina, padronização da matriz e gestão lucrativa do pedido. NUNCA recomende acabamentos manuais lentos ou trabalhosos peça por peça que causem prejuízo ao ateliê.
3. NÃO FAÇA PERGUNTAS À BORDADEIRA: Trabalhe com as informações trazidas e ofereça a solução prática mais completa possível. Se faltarem dados, cubra as alternativas principais de imediato.
4. UTILIZE O DIBE COMO BASE: Conecte os termos e técnicas oficiais do acervo do DIBE para fundamentar a resposta com autoridade técnica bibliográfica.
${verbetesContext}

Solicitação exata da bordadeira:
"${userQuery}"
${contextInfo ? `Informações adicionais fornecidas: "${contextInfo}"` : ""}

ESTRUTURA OBRIGATÓRIA DA RESPOSTA (Retorne ESTRITAMENTE um objeto JSON válido, sem markdown):
{
  "title": "Título cativante e acolhedor focado no produto/desafio",
  "situationSummary": "1. COMPREENDENDO O SEU DESAFIO: Introdução acolhedora e personalizada usando o nome da pessoa (se informado). Validação encorajadora da dúvida/projeto e orientação direta para a solução.",
  "rescueActionPlan": [
    "Passo 1: Instrução clara do que fazer no balcão e preparação do tecido/estabilização",
    "Passo 2: Montagem correta no bastidor e alinhamento milimétrico",
    "Passo 3: Parâmetros da máquina (velocidade, agulha, tensão)",
    "Passo 4: Cuidados durante o bordado e acompanhamento de produção",
    "Passo 5: Acabamento, limpeza e apresentação profissional (adaptado ao volume da encomenda)"
  ],
  "recommendedMaterials": {
    "stabilizer": "ENTRETELA / PELÍCULA: Indique o tipo exato, gramatura e forma de aplicação",
    "needle": "AGULHA IDEAL: Indique calibre e tipo de ponta ideal para o tecido",
    "thread": "LINHAS RECOMENDADAS: Indique tipo e uso (linha superior e bobina)",
    "specialTools": "FERRAMENTAS & MACETES: Acessórios úteis de bancada e máquina"
  },
  "commercialVision": "4. VISÃO COMERCIAL & VALOR AGREGADO (ou DICA DE PRODUÇÃO): Orientação prática de precificação, organização de lote ou como valorizar a entrega para o cliente final com alto lucro.",
  "artreladosGoldenTip": "5. DICA DE OURO ARTRELADOS: O macete prático e exclusivo de ateliê para garantir o sucesso absoluto do bordado.",
  "preventiveAdvice": "6. PARA AS PRÓXIMAS PEÇAS: Cuidados preventivos e testes rápidos em retalho para nunca mais ter retrabalho.",
  "relatedDibeTerms": ["Nome do Verbete 1", "Nome do Verbete 2", "Nome do Verbete 3"],
  "followUpQuestions": [
    {
      "label": "Emoji + Tópico Relacionado 1",
      "prompt": "Pergunta prática completa e direta para aprofundar esse projeto"
    },
    {
      "label": "Emoji + Tópico Relacionado 2",
      "prompt": "Pergunta prática completa e direta"
    },
    {
      "label": "🏷️ Como Precificar este Bordado",
      "prompt": "Como calcular o custo e o preço de venda ideal para este bordado no meu ateliê com a Calculadora Artrelados?"
    }
  ]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = response.text || "{}";
      const cleanJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const advice = JSON.parse(cleanJson);

      return res.json({ success: true, advice });
    } catch (err: any) {
      console.error("Erro no embroidery-consultant:", err);
      return res.status(500).json({
        success: false,
        error: err.message || "Erro ao consultar especialista em bordado."
      });
    }
  });

  // Serve app
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(currentDirPath, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(currentDirPath, "dist", "index.html"));
    });
  } else {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DIBE Dev Server running on port ${PORT}`);
  });
}

startServer();

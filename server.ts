import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Helper to get Gemini client
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não configurada no servidor.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Helper to execute Gemini requests with retry and fallback model on 503/UNAVAILABLE
async function generateContentWithRetry(
  ai: ReturnType<typeof getGeminiClient>,
  params: {
    model?: string;
    contents: any;
    config?: any;
  },
  maxRetries = 2
) {
  const primaryModel = params.model || "gemini-3.6-flash";
  const modelsToTry = [primaryModel, "gemini-2.5-flash"];

  let lastError: any = null;

  for (const modelName of modelsToTry) {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await ai.models.generateContent({
          ...params,
          model: modelName,
        });
        return response;
      } catch (err: any) {
        lastError = err;
        console.warn(`[Gemini API] Attempt ${attempt + 1} with ${modelName} failed:`, err?.message || err);
        const isTransient =
          err?.status === 503 ||
          err?.code === 503 ||
          err?.status === 429 ||
          err?.code === 429 ||
          err?.message?.includes("503") ||
          err?.message?.includes("UNAVAILABLE") ||
          err?.message?.includes("demand");

        if (isTransient && attempt < maxRetries) {
          await new Promise((res) => setTimeout(res, 1200 * (attempt + 1)));
          continue;
        }

        if (isTransient) break; // Try next fallback model
        throw err;
      }
    }
  }

  throw lastError || new Error("Serviço de IA indisponível no momento. Tente novamente em instantes.");
}

// API Health
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "Dicionario de Bordados Artrelados" });
});

// API: Expandir / Gerar Novo Verbete com IA
app.post("/api/gemini/expand-term", async (req, res) => {
  try {
    const { termName, contextPrompt, category, existingDefinition } = req.body;

    if (!termName) {
      return res.status(400).json({ error: "O nome do termo é obrigatório." });
    }

    const ai = getGeminiClient();

    const systemInstruction = `Você é o mestre especialista e autor do 'Dicionário Ilustrado de Bordado Eletrônico (DIBE) Artrelados'.
Sua função é gerar verbetes técnicos, enciclopédicos e didáticos de altíssimo nível para o bordado à máquina (máquinas Brother, Janome, Bernina, Tajima, Barudan, Melco, Singer, etc.).
Você DEVE OBRIGATORIAMENTE estruturar todo e qualquer verbete preenchendo com total rigor as 16 designações oficiais do DIBE:
1. Nível (Iniciante 🟢, Intermediário 🟡 ou Avançado 🔴)
2. Categoria técnica
3. Classe gramatical
4. Origem etimológica / histórica
5. Definição aprofundada
6. Como funciona no bordado eletrônico (detalhes técnicos e de software)
7. Explicação didática e acolhedora para quem está começando
8. Exemplos práticos do ateliê
9. Relação com outros parâmetros da matriz (densidade, pull comp, underlay, etc.)
10. Erros comuns cometidos por iniciantes
11. Como identificar quando o ajuste é necessário
12. Dica Artrelados exclusiva
13. Você sabia? (curiosidade histórica/técnica)
14. Exercício prático passo a passo
15. Resumo rápido em 1 minuto
16. Veja também (termos relacionados)

Responda SEMPRE em JSON rigorosamente formatado em Português do Brasil.`;

    const prompt = `Gere um verbete oficial do DIBE Artrelados com todas as 16 designações obrigatórias para o termo: "${termName}".
Categoria sugerida: ${category || "Geral / Técnica"}.
${existingDefinition ? `Informações complementares: ${existingDefinition}` : ""}
${contextPrompt ? `Orientações adicionais do usuário: ${contextPrompt}` : ""}

Garanta extrema riqueza de detalhes, medidas milimétricas e a Dica Artrelados acolhedora e prática.`;

    const response = await generateContentWithRetry(ai, {
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            term: { type: Type.STRING, description: "Nome principal do termo/ponto" },
            code: { type: Type.STRING, description: "Código oficial (ex: E-001)" },
            level: { type: Type.STRING, description: "Nível: Iniciante 🟢, Intermediário 🟡 ou Avançado 🔴" },
            grammarClass: { type: Type.STRING, description: "Classe gramatical (ex: Substantivo masculino, Locução nominal)" },
            origin: { type: Type.STRING, description: "Origem etimológica ou histórica do termo" },
            category: { type: Type.STRING, description: "Categoria técnica oficial" },
            summary: { type: Type.STRING, description: "Resumo conciso de 1 ou 2 frases" },
            definition: { type: Type.STRING, description: "Definição técnica aprofundada e enciclopédica" },
            technicalDetails: { type: Type.STRING, description: "Como funciona tecnicamente no bordado eletrônico e na matriz" },
            beginnerExplanation: { type: Type.STRING, description: "Explicação simples com analogias para quem está começando" },
            characteristics: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Características principais em tópicos" },
            advantages: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Vantagens da escolha ou técnica" },
            limitations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Limitações a observar" },
            commonErrors: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Erros comuns no ateliê" },
            troubleshootingTips: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Como identificar quando o ajuste é necessário e como resolver" },
            dicaArtrelados: { type: Type.STRING, description: "Dica de ouro prática e acolhedora do ateliê Artrelados" },
            voceSabia: { type: Type.STRING, description: "Curiosidade histórica ou técnica interessante" },
            practicalExercise: { type: Type.STRING, description: "Exercício prático passo a passo para testar no retalho" },
            quickSummary: { type: Type.STRING, description: "Resumo rápido em poucas palavras" },
            recommendedSettings: {
              type: Type.OBJECT,
              properties: {
                speedPPM: { type: Type.STRING, description: "Velocidade recomendada em pontos por minuto" },
                needleType: { type: Type.STRING, description: "Tipo e espessura de agulha recomendada" },
                stabilizer: { type: Type.STRING, description: "Tipo de entretela/estabilizador indicado" },
                threadTension: { type: Type.STRING, description: "Ajuste de tensão da linha" },
                density: { type: Type.STRING, description: "Densidade recomendada de pontos" },
              },
            },
            applications: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Exemplos práticos e peças onde é aplicado",
            },
            relatedTerms: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Termos e pontos correlatos no DIBE",
            },
            tags: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Palavras-chave e tags de busca",
            },
          },
          required: [
            "term",
            "level",
            "category",
            "grammarClass",
            "origin",
            "summary",
            "definition",
            "technicalDetails",
            "beginnerExplanation",
            "commonErrors",
            "troubleshootingTips",
            "dicaArtrelados",
            "voceSabia",
            "practicalExercise",
            "quickSummary",
            "recommendedSettings",
            "applications",
            "relatedTerms",
            "tags"
          ],
        },
      },
    });

    const resultText = response.text || "{}";
    const data = JSON.parse(resultText);
    res.json({ success: true, verbete: data });
  } catch (error: any) {
    console.error("Erro em expand-term:", error);
    res.status(500).json({
      error: error?.message || "Falha ao gerar o verbete com IA.",
    });
  }
});

// API: Diagnóstico e Solução de Problemas Técnicos com IA
app.post("/api/gemini/troubleshoot", async (req, res) => {
  try {
    const { problemDescription, machineModel, fabricType, threadType } = req.body;

    if (!problemDescription) {
      return res.status(400).json({ error: "Descrição do problema é obrigatória." });
    }

    const ai = getGeminiClient();

    const systemInstruction = `Você é o técnico sênior e mestre em manutenção de máquinas de bordado computadorizado e acervo de bordados 'Artrelados'.
Analise o defeito/problema reportado pelo operador de bordado e forneça um guia detalhado de diagnóstico passo a passo, causas prováveis e solução imediata na máquina/arquivo.`;

    const prompt = `Problema reportado no bordado eletrônico: "${problemDescription}"
Máquina: ${machineModel || "Não informada"}
Tecido/Material: ${fabricType || "Não informado"}
Linha/Linha de Bobina: ${threadType || "Não informada"}

Forneça um guia de solução completo em formato JSON.`;

    const response = await generateContentWithRetry(ai, {
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Título claro do problema técnico" },
            symptoms: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Sintomas identificados" },
            probableCauses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Principais causas do defeito" },
            stepByStepSolution: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Passos práticos e sequenciais para resolver o problema na máquina ou matriz",
            },
            preventiveAdvice: { type: Type.STRING, description: "Dica preventiva para evitar que o problema ocorra novamente" },
            recommendedProductsOrSettings: {
              type: Type.OBJECT,
              properties: {
                needle: { type: Type.STRING },
                stabilizer: { type: Type.STRING },
                tension: { type: Type.STRING },
                speed: { type: Type.STRING },
              },
            },
          },
          required: ["title", "symptoms", "probableCauses", "stepByStepSolution", "preventiveAdvice"],
        },
      },
    });

    const resultText = response.text || "{}";
    const data = JSON.parse(resultText);
    res.json({ success: true, guide: data });
  } catch (error: any) {
    console.error("Erro em troubleshoot:", error);
    res.status(500).json({
      error: error?.message || "Falha ao gerar o diagnóstico técnico.",
    });
  }
});

// API: Processamento e Extração de Texto de Documentos para Verbetes
app.post("/api/gemini/parse-document", async (req, res) => {
  try {
    const { documentText } = req.body;

    if (!documentText || documentText.trim().length < 5) {
      return res.status(400).json({ error: "Texto do documento ausente ou muito curto." });
    }

    const ai = getGeminiClient();

    const systemInstruction = `Você é um indexador automático de altíssima precisão para o 'DIBE - Dicionário de Bordados Eletrônicos'.
Sua missão é extrair TODOS os verbetes e termos contidos no documento, mantendo toda a riqueza estrutural.
Se o documento contiver códigos (ex: A-001), níveis (ex: Fundamental), classe gramatical, listas de construção, como funciona, tipos, vantagens, erros comuns, dicas Artrelados, curiosidades técnicas e você sabia, extraia cada campo para sua respectiva propriedade JSON.`;

    const prompt = `Analise o documento completo a seguir e extraia CADA UM dos verbetes em formato estruturado:

--- TEXTO DO DOCUMENTO ---
${documentText.slice(0, 80000)}
--- FIM DO TEXTO ---

Retorne a lista de verbetes estruturados em JSON.`;

    const response = await generateContentWithRetry(ai, {
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              code: { type: Type.STRING, description: "Código único do termo, ex: A-001" },
              term: { type: Type.STRING, description: "Nome do termo ou ponto" },
              level: { type: Type.STRING, description: "Nível, ex: Fundamental 🟢" },
              grammarClass: { type: Type.STRING, description: "Classe gramatical" },
              category: { type: Type.STRING, description: "Categoria técnica" },
              summary: { type: Type.STRING, description: "Resumo curto" },
              definition: { type: Type.STRING, description: "Definição completa" },
              technicalDetails: { type: Type.STRING, description: "Relação com o bordado eletrônico" },
              characteristics: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Características principais" },
              construction: { type: Type.ARRAY, items: { type: Type.STRING } },
              howItWorks: { type: Type.ARRAY, items: { type: Type.STRING } },
              mainTypes: { type: Type.ARRAY, items: { type: Type.STRING } },
              numberingSystem: { type: Type.ARRAY, items: { type: Type.STRING } },
              advantages: { type: Type.ARRAY, items: { type: Type.STRING } },
              limitations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Limitações" },
              commonErrors: { type: Type.ARRAY, items: { type: Type.STRING } },
              voceSabia: { type: Type.STRING, description: "💡 Você sabia?" },
              curiosidadeTecnica: { type: Type.STRING, description: "🔬 Curiosidade Técnica" },
              dicaArtrelados: { type: Type.STRING, description: "🧵 Dica Artrelados" },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ["term", "category", "summary", "definition"],
          },
        },
      },
    });

    const resultText = response.text || "[]";
    const parsedEntries = JSON.parse(resultText);
    res.json({ success: true, verbetes: parsedEntries });
  } catch (error: any) {
    console.error("Erro em parse-document:", error);
    res.status(500).json({
      error: error?.message || "Falha ao processar o texto do documento.",
    });
  }
});

// Server boot & Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Dicionário Artrelados] Servidor rodando na porta ${PORT}`);
  });
}

startServer();

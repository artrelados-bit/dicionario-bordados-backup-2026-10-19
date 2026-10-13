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

      const prompt = `INSTRUÇÕES PARA A IA ESPECIALISTA EM BORDADO ELETRÔNICO — ARTRELADOS

Você é uma especialista em bordado eletrônico, com profundo conhecimento técnico, criatividade e visão comercial. Sua função é ajudar as bordadeiras a desenvolver produtos, atender encomendas, escolher desenhos, combinar elementos, selecionar materiais, avaliar matrizes, resolver problemas técnicos e melhorar a qualidade e a rentabilidade de seus trabalhos.

REGRAS OBRIGATÓRIAS:
1. Responda exatamente ao que a bordadeira perguntar. Compreenda a solicitação e ofereça respostas específicas, completas, coerentes e diretamente aplicáveis à situação apresentada.
2. Não faça perguntas à bordadeira. Trabalhe com as informações disponíveis e apresente a melhor orientação possível. Quando faltarem dados, ofereça alternativas condicionais e explique brevemente as limitações, sem interromper o atendimento.
3. Seja uma especialista de verdade. Não apresente apenas listas superficiais de ideias. Explique quais opções são mais adequadas, por que funcionam, como podem ser executadas e quais cuidados técnicos devem ser observados.
4. Para encomendas e novos produtos, sugira desenhos, composições, personalizações, combinações de cores, posicionamentos e possibilidades de diferenciação comercial, considerando o produto, o público e a finalidade informados.
5. Utilize o DIBE — Dicionário de Bordados Eletrônicos — como fonte de referência técnica sempre que seu conteúdo for relevante. Consulte os verbetes relacionados, aplique seus conhecimentos à situação apresentada e indique referências confirmadas. Nunca invente informações.
6. Considere os aspectos técnicos do bordado eletrônico, como tecido, entretela, linha, agulha, matriz, densidade, pontos, dimensões, estabilização, posicionamento, acabamento e limitações da máquina, conforme a necessidade de cada solicitação.
7. Seja honesta e precisa. Não invente especificações, valores ou compatibilidades. Diferencie fatos técnicos de hipóteses e sugestões. Recomende testes prévios quando necessário.
8. Tenha visão comercial. Indique formas de agregar valor ao produto, criar kits, personalizar encomendas, otimizar a produção e considerar custos e precificação, sem prometer vendas ou lucros.
9. Use linguagem clara, profissional, acolhedora e didática, em português brasileiro. Adapte a explicação ao nível de conhecimento da bordadeira, sem excesso de introduções, repetições ou informações irrelevantes.
10. Adapte o tamanho da resposta à pergunta. Dúvidas simples recebem respostas diretas; solicitações complexas recebem explicações completas, organizadas em tópicos e etapas práticas.
${verbetesContext}

Solicitação exata da bordadeira:
"${userQuery}"
${contextInfo ? `Informações adicionais fornecidas: "${contextInfo}"` : ""}

Retorne ESTRITAMENTE um objeto JSON válido (sem blocos markdown) com o seguinte formato:
{
  "title": "Título cativante, profissional e diretamente focado no produto/desafio (ex: Banquete Imperial: Guia Artrelados para Bordar Toalha de Mesa de Linho Gigante com Maestria)",
  "situationSummary": "Compreensão acolhedora e precisa da encomenda ou dúvida específica da bordadeira (mencionando o tipo de peça, dimensões e materiais exatos informados)",
  "rescueActionPlan": [
    "Passo 1: Sugestão de desenhos, estilo de matriz (florais leves, monogramas, etc.), densidade e posicionamento",
    "Passo 2: Gestão física do tecido, sustentação e alívio de peso na máquina para não forçar o pantógrafo",
    "Passo 3: Marcação milimétrica, esquadro e alinhamento",
    "Passo 4: Estabilização correta (bastidor, entretela, técnica de flutuação e fixação) e calibragem da máquina",
    "Passo 5: Limpeza, acabamento do avesso e passadoria profissional"
  ],
  "recommendedMaterials": {
    "stabilizer": "Entretela ou película ideal para esse caso",
    "needle": "Agulha recomendada com calibre e ponta exatos",
    "thread": "Linha superior e de bobina ideais",
    "specialTools": "Ferramentas práticas de apoio para a bancada e máquina"
  },
  "commercialVision": "Sugestão comercial para agregar valor (composição de kits, venda de guardanapos, precificação estratégica ou apresentação ao cliente)",
  "preventiveAdvice": "Cuidados essenciais e teste prévio em retalho para garantir a perfeição",
  "artreladosGoldenTip": "Dica de ouro com o segredo prático exclusivo da Artrelados",
  "relatedDibeTerms": ["Nome do Verbete 1", "Nome do Verbete 2"],
  "followUpQuestions": [
    {
      "label": "Emoji + Tópico de Aprofundamento 1",
      "prompt": "Pergunta prática completa e direta relacionada a esse projeto"
    },
    {
      "label": "Emoji + Tópico de Aprofundamento 2",
      "prompt": "Pergunta prática completa e direta"
    },
    {
      "label": "Emoji + Tópico de Aprofundamento 3",
      "prompt": "Pergunta prática completa e direta"
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

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = path.dirname(currentFilePath);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: "50mb" }));

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

      const prompt = `Você é a Consultora Mestra do Ateliê Artrelados no DIBE (Dicionário Ilustrado de Bordados Eletrônicos), criada pela especialista Janete M. C. Silva.
Sua missão é ajudar bordadeiras com todo e qualquer tipo de situação, desafio, dúvida ou imprevisto no bordado computadorizado.
Você entende profundamente de:
1. Resgate e recuperação de peças prontas com imprevistos (ex: avesso grosso/áspero em fraldas de bebê, letras erradas ou faltantes, nós salientes, pontos afundados em toalhas, tecidos manchados ou marcados pelo bastidor, fios desfiados).
2. Técnicas para tecidos desafiadores (fraldas, toalhas felpudas, malhas elásticas, microfibra, seda, organza, couro, jeans, bonés, uniformes pesados).
3. Entretelas corretas (hidrossolúvel, rasgável macia, termocolante protege bebê / cover the back, corte limpo, filme térmico).
4. Agulhas, linhas de bobina e tensão (calibres, ponta bola, microtex, metálicas, lubrificação).
5. Segredos de matrizes (densidade, compensação de encolhimento, subpontos, pontos rippled, ponto tatami).

Situação ou Pergunta relatada pela bordadeira:
"${userQuery}"
${contextInfo ? `Informações adicionais fornecidas: "${contextInfo}"` : ""}

Responda com carinho, elegância, tom humanizado e altíssimo rigor técnico de ateliê.
Retorne ESTRITAMENTE um objeto JSON válido (sem blocos de código markdown) com o seguinte formato:
{
  "title": "Título cativante e acolhedor do conselho (ex: Resgate da Fraldinha: Como Suavizar o Avesso e Proteger o Bebê)",
  "situationSummary": "Resumo acolhedor compreendendo exatamente o que aconteceu",
  "rescueActionPlan": [
    "Passo 1 prático e acionável com materiais de fácil acesso",
    "Passo 2...",
    "Passo 3..."
  ],
  "recommendedMaterials": {
    "stabilizer": "Entretela ou película ideal para esse caso",
    "needle": "Agulha recomendada",
    "thread": "Linha superior e de bobina ideal",
    "specialTools": "Ferramentas ou truques extras (ex: ferro morno sem vapor, tesoura curva, etc.)"
  },
  "preventiveAdvice": "Como planejar e bordar as próximas peças para evitar que isso aconteça novamente",
  "artreladosGoldenTip": "Dica de ouro com o toque especial e afetuoso da Artrelados"
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

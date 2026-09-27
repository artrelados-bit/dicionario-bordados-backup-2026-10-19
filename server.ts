import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

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
        model: "gemini-2.5-flash",
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
        model: "gemini-2.5-flash",
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

  // Serve app
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
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

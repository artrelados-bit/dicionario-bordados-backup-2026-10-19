import React, { useState } from "react";
import { FileText, Upload, Sparkles, CheckCircle2, Download, Database, Loader2, FileUp, ListChecks, AlertCircle } from "lucide-react";
import mammoth from "mammoth";
import * as pdfjsLib from "pdfjs-dist";
import { Verbete, VerbeteCategory } from "../types";

// Configure worker for pdfjs-dist
if (typeof window !== "undefined" && pdfjsLib.GlobalWorkerOptions) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
}

interface DocumentImporterViewProps {
  onImportVerbetes: (newVerbetes: Verbete[]) => void;
  existingVerbetes: Verbete[];
}

export const DocumentImporterView: React.FC<DocumentImporterViewProps> = ({
  onImportVerbetes,
  existingVerbetes,
}) => {
  const [pastedText, setPastedText] = useState("");
  const [parsing, setParsing] = useState(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [parsedVerbetes, setParsedVerbetes] = useState<Verbete[]>([]);
  const [importDone, setImportDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // File Upload handler for .docx, .pdf, .txt, .json
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setLoadingFile(true);

    const fileName = file.name.toLowerCase();

    // PDF Document (.pdf)
    if (fileName.endsWith(".pdf")) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
          const pdfDocument = await loadingTask.promise;
          const pageTexts: string[] = [];

          for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
            const page = await pdfDocument.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map((item: any) => item.str)
              .join(" ");
            pageTexts.push(pageText);
          }

          const text = pageTexts.join("\n\n").trim();

          if (!text) {
            setError("O arquivo PDF parece estar vazio ou contém apenas imagens digitalizadas sem camada de texto.");
          } else {
            setPastedText(text);
            handleProcessDocument(text);
          }
        } catch (err: any) {
          console.error("Erro ao converter .pdf:", err);
          setError("Não foi possível decodificar o arquivo PDF. Verifique se o arquivo não está corrompido ou protegido por senha.");
        } finally {
          setLoadingFile(false);
        }
      };
      reader.onerror = () => {
        setError("Erro na leitura do arquivo PDF.");
        setLoadingFile(false);
      };
      reader.readAsArrayBuffer(file);
      return;
    }

    // Word Document (.docx)
    if (fileName.endsWith(".docx")) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          const result = await mammoth.extractRawText({ arrayBuffer });
          const text = result.value.trim();
          
          if (!text) {
            setError("O arquivo Word (.docx) parece estar vazio ou continha apenas imagens.");
          } else {
            setPastedText(text);
            handleProcessDocument(text);
          }
        } catch (err: any) {
          console.error("Erro ao converter .docx:", err);
          setError("Não foi possível decodificar o arquivo .docx. Tente salvar o arquivo como .txt ou colar o texto diretamente.");
        } finally {
          setLoadingFile(false);
        }
      };
      reader.onerror = () => {
        setError("Erro na leitura do arquivo.");
        setLoadingFile(false);
      };
      reader.readAsArrayBuffer(file);
      return;
    }

    // JSON file
    if (fileName.endsWith(".json")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          const jsonVerbetes = JSON.parse(content);
          if (Array.isArray(jsonVerbetes)) {
            setParsedVerbetes(jsonVerbetes);
            setError(null);
          } else {
            setError("O arquivo JSON não está no formato de lista de verbetes.");
          }
        } catch (err) {
          setError("Erro ao ler arquivo JSON.");
        } finally {
          setLoadingFile(false);
        }
      };
      reader.readAsText(file, "UTF-8");
      return;
    }

    // Plain TXT / Text file
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      // Clean non-printable binary characters
      const cleaned = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "");
      setPastedText(cleaned);
      handleProcessDocument(cleaned);
      setLoadingFile(false);
    };
    reader.onerror = () => {
      setError("Erro na leitura do arquivo TXT.");
      setLoadingFile(false);
    };
    reader.readAsText(file, "UTF-8");
  };

  // Multi-strategy local parser for Word tables, tab-separated lines, and rich DIBE verbetes
  const parseLocally = (rawText: string): Verbete[] => {
    const results: Verbete[] = [];

    // Strategy 0: Rich DIBE Code-based Block Parser (e.g. A-001 — Agulha de Bordado)
    const codeHeaderRegex = /([A-Z]-\d{3})\s*[\u2014\u2013-]\s*(.+)/;
    if (codeHeaderRegex.test(rawText)) {
      const blocks = rawText.split(/(?=[A-Z]-\d{3}\s*[\u2014\u2013-])/g);
      for (const block of blocks) {
        if (!block.trim()) continue;
        const match = block.match(codeHeaderRegex);
        if (match) {
          const code = match[1].trim();
          const term = match[2].trim().split("\n")[0];
          
          const levelMatch = block.match(/Nível:\s*([^\n]+)/i);
          const level = levelMatch ? levelMatch[1].trim() : undefined;

          const catMatch = block.match(/Categoria:\s*([^\n]+)/i);
          const categoryRaw = catMatch ? catMatch[1].trim() : "Agulhas & Fios";

          const gramClassMatch = block.match(/Classe gramatical\s*\n+([^\n_]+)/i);
          const grammarClass = gramClassMatch ? gramClassMatch[1].trim() : undefined;

          const defMatch = block.match(/Definição\s*\n+([\s\S]+?)(?=\n_{3,}|\n[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC\s]+|\n[💡🔬🧵📖📊]|$)/i);
          const definition = defMatch ? defMatch[1].trim() : block.slice(0, 300);

          const charMatch = block.match(/Características principais\s*\n+([\s\S]+?)(?=\n_{3,}|\n[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC\s]+|\n[💡🔬🧵📖📊]|$)/i);
          const characteristics = charMatch ? charMatch[1].trim().split("\n").map(s => s.replace(/^[•\s-]+/, "").trim()).filter(Boolean) : undefined;

          const appMatch = block.match(/Aplicações[^\n]*\n+([\s\S]+?)(?=\n_{3,}|\n[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC\s]+|\n[💡🔬🧵📖📊]|$)/i);
          const applications = appMatch ? appMatch[1].trim().split("\n").map(s => s.replace(/^[•\s-]+/, "").trim()).filter(Boolean) : [];

          const techMatch = block.match(/Relação com[^\n]*\n+([\s\S]+?)(?=\n_{3,}|\n[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC\s]+|\n[💡🔬🧵📖📊]|$)/i);
          const technicalDetails = techMatch ? techMatch[1].trim() : "Importado do acervo DIBE com formatação técnica completa.";

          const numMatch = block.match(/Tamanhos mais utilizados[^\n]*\n+([\s\S]+?)(?=\n_{3,}|\n[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC\s]+|\n[💡🔬🧵📖📊]|$)/i);
          const numberingSystem = numMatch ? numMatch[1].trim().split("\n").map(s => s.replace(/^[•\s-]+/, "").trim()).filter(Boolean) : undefined;

          const advMatch = block.match(/Vantagens\s*\n+([\s\S]+?)(?=\n_{3,}|\n[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC\s]+|\n[💡🔬🧵📖📊]|$)/i);
          const advantages = advMatch ? advMatch[1].trim().split("\n").map(s => s.replace(/^[•\s-✔]+/, "").trim()).filter(Boolean) : undefined;

          const limMatch = block.match(/Limitações\s*\n+([\s\S]+?)(?=\n_{3,}|\n[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC\s]+|\n[💡🔬🧵📖📊]|$)/i);
          const limitations = limMatch ? limMatch[1].trim().split("\n").map(s => s.replace(/^[•\s-]+/, "").trim()).filter(Boolean) : undefined;

          const errMatch = block.match(/Erros comuns\s*\n+([\s\S]+?)(?=\n_{3,}|\n[A-Z\u00C0-\u00DC][a-z\u00E0-\u00FC\s]+|\n[💡🔬🧵📖📊]|$)/i);
          const commonErrors = errMatch ? errMatch[1].trim().split("\n").map(s => s.replace(/^[❌•\s-]+/, "").trim()).filter(Boolean) : undefined;

          const dicaMatch = block.match(/Dica Artrelados\s*\n+([\s\S]+?)(?=\n_{3,}|\n[💡🔬📖📊]|$)/i);
          const dicaArtrelados = dicaMatch ? dicaMatch[1].trim() : undefined;

          const curiosidadeMatch = block.match(/Curiosidade Técnica\s*\n+([\s\S]+?)(?=\n_{3,}|\n[💡🧵📖📊]|$)/i);
          const curiosidadeTecnica = curiosidadeMatch ? curiosidadeMatch[1].trim() : undefined;

          const voceSabiaMatch = block.match(/Você sabia\?\s*\n+([\s\S]+?)(?=\n_{3,}|\n[🔬🧵📖📊]|$)/i);
          const voceSabia = voceSabiaMatch ? voceSabiaMatch[1].trim() : undefined;

          const relMatch = block.match(/(?:Saiba mais|Veja também)\s*\n+([\s\S]+?)(?=\n_{3,}|\n[💡🔬🧵📊]|$)/i);
          const relatedTerms = relMatch ? relMatch[1].trim().split("\n").map(s => s.replace(/^[•\s-]+/, "").trim()).filter(Boolean) : [];

          // Unique key with timestamp & index to avoid key collision
          const uniqueId = `imp-rich-${code.toLowerCase().replace(/[^a-z0-9]/g, "")}-${Date.now()}-${results.length}-${Math.random().toString(36).substring(2, 7)}`;

          results.push({
            id: uniqueId,
            code,
            term,
            level,
            grammarClass,
            category: "Agulhas & Fios" as VerbeteCategory,
            summary: definition.slice(0, 160) + "...",
            definition,
            characteristics,
            technicalDetails,
            numberingSystem,
            advantages,
            limitations,
            commonErrors,
            dicaArtrelados,
            curiosidadeTecnica,
            voceSabia,
            applications,
            troubleshootingTips: [],
            relatedTerms,
            tags: ["dibe", code.toLowerCase(), "importado"],
            updatedAt: new Date().toISOString().split("T")[0],
          });
        }
      }

      if (results.length > 0) return results;
    }

    const lines = rawText.split("\n").map((l) => l.trim()).filter((l) => l.length > 0);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Strategy A: Tab-separated table row (e.g. Term \t Category \t Definition)
      if (line.includes("\t")) {
        const parts = line.split("\t").map((p) => p.trim()).filter((p) => p.length > 0);
        if (parts.length >= 2) {
          const rawTerm = parts[0];
          const def = parts.slice(1).join(" — ");
          if (rawTerm.length < 80 && !rawTerm.toLowerCase().startsWith("termo") && !rawTerm.toLowerCase().startsWith("nome")) {
            results.push({
              id: `imp-tab-${Date.now()}-${results.length}`,
              term: rawTerm.replace(/^[-*•\d.\s]+/, ""),
              category: (parts.length >= 3 ? parts[1] : "Terminologia Geral") as VerbeteCategory,
              summary: def.slice(0, 140) + (def.length > 140 ? "..." : ""),
              definition: def,
              technicalDetails: "Importado de tabela do arquivo Word.",
              applications: [],
              troubleshootingTips: [],
              relatedTerms: [],
              tags: ["word", "tabela", "dibe"],
              updatedAt: new Date().toISOString().split("T")[0],
            });
            continue;
          }
        }
      }

      // Strategy B: Colon or Hyphen separated line (e.g., "PONTO CHEIO: Ponto continuo...")
      const colonIdx = line.indexOf(":");
      const dashIdx = line.indexOf(" - ");
      const splitIdx = colonIdx !== -1 ? colonIdx : dashIdx;

      if (splitIdx > 0 && splitIdx < 60) {
        const term = line.slice(0, splitIdx).trim().replace(/^[-*•🟢🟡🔴\d.\s]+/, "");
        const def = line.slice(splitIdx + 1).trim();

        const termLower = term.toLowerCase();
        const isMetadataHeader = (
          termLower === "nível" ||
          termLower === "nivel" ||
          termLower === "categoria" ||
          termLower === "classe gramatical" ||
          termLower === "código" ||
          termLower === "codigo" ||
          termLower.includes("dica artrelados") ||
          termLower.includes("curiosidade") ||
          termLower.includes("você sabia")
        );

        if (!isMetadataHeader && term.length >= 2 && def.length >= 4) {
          results.push({
            id: `imp-colon-${Date.now()}-${results.length}`,
            term,
            category: "Terminologia Geral",
            summary: def.slice(0, 140) + (def.length > 140 ? "..." : ""),
            definition: def,
            technicalDetails: "Importado do arquivo Word.",
            applications: [],
            troubleshootingTips: [],
            relatedTerms: [],
            tags: ["word", "importado", "dibe"],
            updatedAt: new Date().toISOString().split("T")[0],
          });
          continue;
        }
      }
    }

    // Strategy C: Heading/Line pairs if Strategy A & B yielded fewer items
    if (results.length < 3 && lines.length > 0) {
      let currentTerm = "";
      let currentDef = "";

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.endsWith(":") || (line.length < 50 && (line === line.toUpperCase() || /^[A-Z0-9\s-]{3,40}$/.test(line)))) {
          if (currentTerm && currentDef) {
            results.push({
              id: `imp-pair-${Date.now()}-${results.length}`,
              term: currentTerm.replace(/[:*#]/g, "").trim(),
              category: "Terminologia Geral",
              summary: currentDef.slice(0, 140) + "...",
              definition: currentDef,
              technicalDetails: "Importado de documento Word.",
              applications: [],
              troubleshootingTips: [],
              relatedTerms: [],
              tags: ["word", "importado"],
              updatedAt: new Date().toISOString().split("T")[0],
            });
          }
          currentTerm = line;
          currentDef = "";
        } else {
          currentDef += (currentDef ? " " : "") + line;
        }
      }

      if (currentTerm && currentDef) {
        results.push({
          id: `imp-pair-${Date.now()}-${results.length}`,
          term: currentTerm.replace(/[:*#]/g, "").trim(),
          category: "Terminologia Geral",
          summary: currentDef.slice(0, 140) + "...",
          definition: currentDef,
          technicalDetails: "Importado de documento Word.",
          applications: [],
          troubleshootingTips: [],
          relatedTerms: [],
          tags: ["word", "importado"],
          updatedAt: new Date().toISOString().split("T")[0],
        });
      }
    }

    return results;
  };

  // Process Document Text with Gemini AI or Smart Regex Indexer
  const handleProcessDocument = async (overrideText?: string) => {
    const textToProcess = overrideText || pastedText;

    if (!textToProcess.trim() || textToProcess.length < 5) {
      setError("Por favor, cole o texto do documento ou selecione um arquivo.");
      return;
    }

    setParsing(true);
    setError(null);
    setParsedVerbetes([]);
    setImportDone(false);

    try {
      // First try calling Gemini Server Endpoint
      const res = await fetch("/api/gemini/parse-document", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentText: textToProcess }),
      });

      const data = await res.json();
      if (data.success && Array.isArray(data.verbetes) && data.verbetes.length > 0) {
        const formatted: Verbete[] = data.verbetes.map((item: any, idx: number) => ({
          id: `imp-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`,
          term: item.term || `Termo Importado ${idx + 1}`,
          category: (item.category as VerbeteCategory) || "Terminologia Geral",
          summary: item.summary || item.definition?.slice(0, 120) || "",
          definition: item.definition || "",
          technicalDetails: item.technicalDetails || "Importado do arquivo Word.",
          applications: item.applications || [],
          troubleshootingTips: item.troubleshootingTips || [],
          relatedTerms: item.relatedTerms || [],
          tags: item.tags || ["importado", "word", "dibe"],
          updatedAt: new Date().toISOString().split("T")[0],
        }));

        setParsedVerbetes(formatted);
      } else {
        // Fallback to local smart parser
        const localResults = parseLocally(textToProcess);
        if (localResults.length > 0) {
          setParsedVerbetes(localResults);
        } else {
          throw new Error("Nenhum verbete estruturado foi identificado no texto.");
        }
      }
    } catch (err: any) {
      console.warn("Fallback to local text parsing...", err);
      const localResults = parseLocally(textToProcess);
      if (localResults.length > 0) {
        setParsedVerbetes(localResults);
      } else {
        setError("Não foi possível extrair verbetes do documento. Verifique o formato.");
      }
    } finally {
      setParsing(false);
    }
  };

  const handleConfirmImport = () => {
    if (parsedVerbetes.length === 0) return;
    onImportVerbetes(parsedVerbetes);
    setImportDone(true);
  };

  // Export full Acervo to JSON file
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(existingVerbetes, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Dicionario_Bordados_Artrelados_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
          <FileText className="w-3.5 h-3.5 text-amber-700" />
          <span>Importação de Documento de 500+ Páginas</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          Indexador & Importador em Massa do Acervo
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed font-medium">
          Quando o seu documento em PDF, Word (.docx), texto (.txt) ou JSON estiver pronto com os verbetes de bordado, cole o conteúdo aqui ou faça o upload. Nosso indexador com IA lerá os tópicos, identificará os termos, organizará as categorias e integrará tudo ao aplicativo instantaneamente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Upload / Paste */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
          <h3 className="text-lg font-black text-slate-900 flex items-center space-x-2">
            <Upload className="w-5 h-5 text-amber-600" />
            <span>1. Carregar ou Colar o Texto do PDF / Word</span>
          </h3>

          <div className="p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-2 hover:border-slate-400 transition">
            <FileUp className="w-8 h-8 text-amber-600 mx-auto" />
            <p className="text-xs text-slate-600 font-medium">
              Selecione seu arquivo PDF (<strong>.pdf</strong>), Word (<strong>.docx</strong>), <strong>.txt</strong> ou <strong>.json</strong>
            </p>
            {loadingFile ? (
              <div className="flex items-center justify-center space-x-2 text-xs font-bold text-amber-700 py-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Lendo e extraindo texto do arquivo (PDF / Word)...</span>
              </div>
            ) : (
              <input
                type="file"
                accept=".pdf,.docx,.txt,.json"
                onChange={handleFileUpload}
                className="text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#101726] file:text-white hover:file:bg-slate-800 cursor-pointer"
              />
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Ou cole o texto copiado do arquivo PDF ou Word:
            </label>
            <textarea
              rows={10}
              placeholder="Cole aqui os verbetes do seu arquivo PDF ou Word... Ex: PONTO CHEIO: Ponto continuo em ziguezague paralelo... PONTO TATAMI: Preenchimento de grandes superfícies..."
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-slate-900 text-xs placeholder-slate-400 focus:bg-white focus:border-slate-500 focus:outline-none custom-scrollbar"
            />
          </div>

          <button
            onClick={() => handleProcessDocument()}
            disabled={parsing || !pastedText.trim()}
            className="w-full py-3 rounded-xl bg-[#101726] hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center space-x-2 shadow transition disabled:opacity-50 cursor-pointer"
          >
            {parsing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processando e Indexando Verbetes com IA...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Indexar Documento com IA</span>
              </>
            )}
          </button>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
              {error}
            </div>
          )}
        </div>

        {/* Right Column: Preview & Import Confirmation */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <h3 className="text-lg font-black text-slate-900 flex items-center space-x-2">
                <ListChecks className="w-5 h-5 text-sky-600" />
                <span>2. Verbetes Extraídos ({parsedVerbetes.length})</span>
              </h3>

              {parsedVerbetes.length > 0 && !importDone && (
                <button
                  onClick={handleConfirmImport}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow-md transition cursor-pointer animate-bounce"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Adicionar {parsedVerbetes.length} Verbetes ao DIBE</span>
                </button>
              )}
            </div>

            {parsedVerbetes.length > 0 && !importDone && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center justify-between mb-4 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span><strong>{parsedVerbetes.length} verbetes encontrados!</strong> Prontos para inclusão no seu Dicionário.</span>
                </div>
                <button
                  onClick={handleConfirmImport}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs cursor-pointer shadow"
                >
                  Adicionar Agora
                </button>
              </div>
            )}

            {importDone && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center space-x-3 mb-4 animate-fade-in font-medium">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <strong>Sucesso!</strong> Os verbetes foram adicionados e você foi redirecionado para a tela principal do DIBE!
                </div>
              </div>
            )}

            {/* Extracted Verbetes List */}
            {parsedVerbetes.length > 0 ? (
              <div className="space-y-3">
                <div className="space-y-2.5 max-h-[380px] overflow-y-auto custom-scrollbar pr-1">
                  {parsedVerbetes.map((v, i) => (
                    <div key={v.id || `pv-${i}`} className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 text-xs space-y-2 shadow-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {v.code && (
                            <span className="px-2.5 py-0.5 rounded text-[11px] font-black bg-[#101726] text-amber-300 border border-slate-800 font-mono">
                              {v.code}
                            </span>
                          )}
                          <strong className="text-slate-900 text-sm font-bold">{v.term}</strong>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-700 font-bold border border-slate-200">{v.category}</span>
                      </div>
                      <p className="text-slate-600 line-clamp-2 text-xs leading-relaxed font-normal">{v.summary}</p>
                    </div>
                  ))}
                </div>

                {!importDone && (
                  <button
                    onClick={handleConfirmImport}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center space-x-2 shadow-md cursor-pointer transition"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Confirmar e Adicionar Todos os {parsedVerbetes.length} Verbetes ao DIBE</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center py-16 text-slate-400 space-y-2">
                <FileText className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-xs sm:text-sm font-medium">
                  Nenhum verbete extraído ainda. Cole o texto do Word ao lado para visualizar os resultados.
                </p>
              </div>
            )}
          </div>

          {/* Backup & Export Section */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
            <div className="flex items-center space-x-1.5">
              <Database className="w-4 h-4 text-slate-700" />
              <span>Total no Acervo Atual: <strong className="text-slate-900">{existingVerbetes.length}</strong> verbetes</span>
            </div>

            <button
              onClick={handleExportJson}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center space-x-1.5 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Baixar Backup (JSON)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

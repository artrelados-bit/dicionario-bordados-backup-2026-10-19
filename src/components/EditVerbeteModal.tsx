import React, { useState, useEffect } from "react";
import { X, Save, Plus, AlertCircle, Trash2 } from "lucide-react";
import { Verbete, VerbeteCategory } from "../types";

interface EditVerbeteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (verbete: Verbete) => void;
  verbeteToEdit?: Verbete | null;
}

const CATEGORIES: VerbeteCategory[] = [
  "Pontos Básicos & Decorativos",
  "Estabilizadores & Entretelas",
  "Agulhas & Fios",
  "Softwares & Formatos",
  "Solução de Problemas",
  "Técnicas de Bastidor",
  "Tensão & Calibração",
  "Tipos de Tecidos",
  "Terminologia Geral",
];

export const EditVerbeteModal: React.FC<EditVerbeteModalProps> = ({
  isOpen,
  onClose,
  onSave,
  verbeteToEdit,
}) => {
  const [term, setTerm] = useState("");
  const [code, setCode] = useState("");
  const [grammarClass, setGrammarClass] = useState("");
  const [pronunciation, setPronunciation] = useState("");
  const [category, setCategory] = useState<VerbeteCategory>("Pontos Básicos & Decorativos");
  const [level, setLevel] = useState("Fundamental 🟢");
  const [summary, setSummary] = useState("");
  const [definition, setDefinition] = useState("");
  const [technicalDetails, setTechnicalDetails] = useState("");
  const [dicaArtrelados, setDicaArtrelados] = useState("");
  const [sourceReference, setSourceReference] = useState("");
  const [applicationsInput, setApplicationsInput] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  useEffect(() => {
    if (verbeteToEdit) {
      setTerm(verbeteToEdit.term || "");
      setCode(verbeteToEdit.code || "");
      setGrammarClass(verbeteToEdit.grammarClass || "");
      setPronunciation(verbeteToEdit.pronunciation || "");
      setCategory(verbeteToEdit.category || "Pontos Básicos & Decorativos");
      setLevel(verbeteToEdit.level || "Fundamental 🟢");
      setSummary(verbeteToEdit.summary || "");
      setDefinition(verbeteToEdit.definition || "");
      setTechnicalDetails(verbeteToEdit.technicalDetails || "");
      setDicaArtrelados(verbeteToEdit.dicaArtrelados || "");
      setSourceReference(verbeteToEdit.sourceReference || "");
      setApplicationsInput(verbeteToEdit.applications ? verbeteToEdit.applications.join(", ") : "");
      setTagsInput(verbeteToEdit.tags ? verbeteToEdit.tags.join(", ") : "");
    } else {
      setTerm("");
      setCode("");
      setGrammarClass("");
      setPronunciation("");
      setCategory("Pontos Básicos & Decorativos");
      setLevel("Fundamental 🟢");
      setSummary("");
      setDefinition("");
      setTechnicalDetails("");
      setDicaArtrelados("");
      setSourceReference("");
      setApplicationsInput("");
      setTagsInput("");
    }
  }, [verbeteToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim()) {
      alert("Por favor, informe pelo menos o nome do termo.");
      return;
    }

    const appsArray = applicationsInput
      .split(",")
      .map((a) => a.trim())
      .filter((a) => a.length > 0);

    const tagsArray = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const firstLetter = term.trim().charAt(0).toUpperCase();

    const updatedVerbete: Verbete = {
      id: verbeteToEdit ? verbeteToEdit.id : `verbete-${Date.now()}`,
      code: code.trim() || `${firstLetter}-${Math.floor(100 + Math.random() * 900)}`,
      term: term.trim(),
      grammarClass: grammarClass.trim() || undefined,
      pronunciation: pronunciation.trim() || undefined,
      category,
      level,
      summary: summary.trim() || definition.trim().substring(0, 150) + "...",
      definition: definition.trim() || summary.trim(),
      technicalDetails: technicalDetails.trim() || "Consultoria técnica direta do Ateliê Artrelados.",
      dicaArtrelados: dicaArtrelados.trim() || undefined,
      sourceReference: sourceReference.trim() || undefined,
      applications: appsArray.length > 0 ? appsArray : ["Bordado Computadorizado"],
      troubleshootingTips: verbeteToEdit?.troubleshootingTips || [],
      relatedTerms: verbeteToEdit?.relatedTerms || [],
      tags: tagsArray.length > 0 ? tagsArray : [category],
      isFavorite: verbeteToEdit?.isFavorite || false,
      isAiGenerated: verbeteToEdit?.isAiGenerated || false,
      updatedAt: new Date().toISOString().split("T")[0],
    };

    onSave(updatedVerbete);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl border border-amber-300 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-slate-900 p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-2xl font-black">
              {verbeteToEdit ? <Save className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">
                {verbeteToEdit ? `Editar Verbete: ${verbeteToEdit.term}` : "Criar Novo Verbete Oficial"}
              </h2>
              <p className="text-xs text-amber-900 font-bold">Modo Editora Artrelados — Atualização Imediata</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Nome / Termo *
              </label>
              <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Ex: Ponto Cheio, Agulha 75/11, PES..."
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Código (ex: A-001)
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ex: A-026"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Categoria *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as VerbeteCategory)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Nível Didático
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Fundamental 🟢">Fundamental 🟢</option>
                <option value="Intermediário 🟡">Intermediário 🟡</option>
                <option value="Avançado 🔴">Avançado 🔴</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Classe Gramatical
              </label>
              <input
                type="text"
                value={grammarClass}
                onChange={(e) => setGrammarClass(e.target.value)}
                placeholder="Ex: Substantivo masculino."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Pronúncia / Inglês
              </label>
              <input
                type="text"
                value={pronunciation}
                onChange={(e) => setPronunciation(e.target.value)}
                placeholder="Ex: satin stitch"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Resumo Curto *
            </label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Explicacao rápida em 1 ou 2 frases para a lista..."
              required
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Definição Técnica Completa
            </label>
            <textarea
              rows={4}
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              placeholder="Explicação didática detalhada do verbete..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-amber-900 uppercase mb-1 flex items-center gap-1">
              🧵 Dica Prática do Ateliê Artrelados
            </label>
            <textarea
              rows={2}
              value={dicaArtrelados}
              onChange={(e) => setDicaArtrelados(e.target.value)}
              placeholder="Dica do ateliê para a bordadeira..."
              className="w-full bg-amber-50/80 border border-amber-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Aplicações (separadas por vírgula)
              </label>
              <input
                type="text"
                value={applicationsInput}
                onChange={(e) => setApplicationsInput(e.target.value)}
                placeholder="Ex: Tecidos planos, Matrizes pequenas, Bordados em toalha"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Tags / Palavras-chave (separadas por vírgula)
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="Ex: Brother, Janome, Ponto, Densidade"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end space-x-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold transition cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black transition cursor-pointer shadow-md flex items-center space-x-2 border border-amber-500"
            >
              <Save className="w-4 h-4" />
              <span>{verbeteToEdit ? "Salvar Alterações" : "Criar Verbete"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

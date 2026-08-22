import React, { useState } from "react";
import { Star, BookOpen, Wrench, Trash2, CheckCircle2, Clock } from "lucide-react";
import { Verbete, SavedDiagnostic } from "../types";
import { VerbeteCard } from "./VerbeteCard";

interface FavoritesViewProps {
  favoriteVerbetes: Verbete[];
  savedDiagnostics: SavedDiagnostic[];
  onSelectVerbete: (verbete: Verbete) => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onDeleteDiagnostic: (id: string) => void;
  onNavigateToTroubleshooting: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favoriteVerbetes,
  savedDiagnostics,
  onSelectVerbete,
  onToggleFavorite,
  onDeleteDiagnostic,
  onNavigateToTroubleshooting
}) => {
  const [activeSubTab, setActiveSubTab] = useState<"verbetes" | "diagnostics">("verbetes");
  const [expandedDiagId, setExpandedDiagId] = useState<string | null>(null);

  const totalFavorites = favoriteVerbetes.length + savedDiagnostics.length;

  if (totalFavorites === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-sm max-w-2xl mx-auto my-6 animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto border border-amber-300 shadow-inner">
          <Star className="w-8 h-8 text-amber-600 fill-amber-400" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Você ainda não favoritou nenhum item
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-md mx-auto">
            Navegue pelo dicionário ou pelo <strong>Guia de Problemas</strong> e clique na estrela (⭐) para salvar seus verbetes essenciais e diagnósticos de máquina para consulta rápida offline.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onNavigateToTroubleshooting}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center space-x-2 transition shadow-xs cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-slate-950" />
            <span>Consultar Guia de Problemas</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
            <Star className="w-3.5 h-3.5 text-amber-700 fill-amber-400" />
            <span>Meu Caderno de Ateliê</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Meus Itens Favoritos
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium">
            {favoriteVerbetes.length} {favoriteVerbetes.length === 1 ? "verbete salvo" : "verbetes salvos"} e {savedDiagnostics.length} {savedDiagnostics.length === 1 ? "diagnóstico de oficina" : "diagnósticos de oficina"}.
          </p>
        </div>
      </div>

      {/* Sub-tabs selector */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveSubTab("verbetes")}
          className={`px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center space-x-2 transition cursor-pointer ${
            activeSubTab === "verbetes"
              ? "bg-slate-950 text-amber-400 shadow-sm"
              : "bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-200"
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>Verbetes Salvos ({favoriteVerbetes.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab("diagnostics")}
          className={`px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center space-x-2 transition cursor-pointer ${
            activeSubTab === "diagnostics"
              ? "bg-slate-950 text-amber-400 shadow-sm"
              : "bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-200"
          }`}
        >
          <Wrench className="w-4 h-4 text-amber-400" />
          <span>Diagnósticos da Minha Oficina ({savedDiagnostics.length})</span>
        </button>
      </div>

      {/* Sub-tab 1: Verbetes */}
      {activeSubTab === "verbetes" && (
        <div className="space-y-4">
          {favoriteVerbetes.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-2">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="font-bold text-slate-800">Nenhum verbete salvo nos favoritos.</p>
              <p className="text-xs text-slate-500">Clique na estrelinha dos verbetes do dicionário para fixá-los aqui.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {favoriteVerbetes.map((verbete) => (
                <VerbeteCard
                  key={verbete.id}
                  verbete={verbete}
                  onSelect={onSelectVerbete}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sub-tab 2: Saved Diagnostics */}
      {activeSubTab === "diagnostics" && (
        <div className="space-y-4">
          {savedDiagnostics.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-3">
              <Wrench className="w-8 h-8 text-amber-500 mx-auto" />
              <p className="font-bold text-slate-800">Nenhum diagnóstico de oficina salvo ainda.</p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                No <strong>Guia de Problemas</strong>, ao gerar a solução para um defeito da sua máquina, clique em <strong>⭐ Favoritar Diagnóstico</strong> para guardá-la aqui.
              </p>
              <button
                onClick={onNavigateToTroubleshooting}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs inline-flex items-center space-x-1.5 transition cursor-pointer"
              >
                <span>Fazer um Diagnóstico Agora</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {savedDiagnostics.map((diag) => {
                const isExpanded = expandedDiagId === diag.id;
                const formattedDate = new Date(diag.savedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                });

                return (
                  <div
                    key={diag.id}
                    className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition space-y-4"
                  >
                    {/* Card Top */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-100 text-rose-800 border border-rose-200">
                            Severidade: {diag.severity}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                            {diag.category}
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                            <Clock className="w-3 h-3" />
                            Salvo em {formattedDate}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-slate-900">
                          {diag.title}
                        </h3>
                      </div>

                      <div className="flex items-center space-x-2 self-end sm:self-auto">
                        <button
                          onClick={() => setExpandedDiagId(isExpanded ? null : diag.id)}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                        >
                          {isExpanded ? "Recolher Detalhes" : "Ver Solução Completa"}
                        </button>

                        <button
                          onClick={() => onDeleteDiagnostic(diag.id)}
                          className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                          title="Excluir este diagnóstico salvo"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Context Tags: Machine & Fabric */}
                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                        <span className="text-slate-400 font-bold mr-1">Máquina:</span>
                        <strong className="text-slate-900">{diag.machineModel || "Não especificada"}</strong>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-700">
                        <span className="text-slate-400 font-bold mr-1">Tecido:</span>
                        <strong className="text-slate-900">{diag.fabricType || "Não especificado"}</strong>
                      </div>
                      <div className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 font-medium text-amber-900">
                        <span className="text-amber-700 font-bold mr-1">Sintoma relatado:</span>
                        <span>{diag.problemDescription}</span>
                      </div>
                    </div>

                    {/* Summary text */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {diag.summary}
                    </p>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-slate-100 space-y-4 animate-fade-in text-xs sm:text-sm">
                        <div className="space-y-2">
                          <strong className="text-xs font-black uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            Passo a Passo de Solução:
                          </strong>
                          <div className="space-y-2">
                            {diag.stepByStepSolution.map((step, idx) => (
                              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-start space-x-2.5">
                                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                                  {idx + 1}
                                </span>
                                <span className="font-medium">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {diag.artreladosTip && (
                          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-bold">
                            {diag.artreladosTip}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

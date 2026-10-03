import React, { useState, useMemo } from "react";
import { 
  X, 
  Search, 
  BookMarked, 
  ShieldCheck, 
  Scale, 
  Award, 
  FileText, 
  ExternalLink, 
  Copy, 
  Check, 
  Building2, 
  Cpu, 
  Scissors, 
  Layers, 
  HelpCircle,
  Sparkles
} from "lucide-react";
import { REFERENCES_CATEGORIES, REFERENCES_LEGAL_DATA, ReferenceItem } from "../data/referencesLegalData";
import { SupportedLanguage } from "../utils/i18n";

interface ReferencesLegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage?: SupportedLanguage;
}

export const ReferencesLegalModal: React.FC<ReferencesLegalModalProps> = ({
  isOpen,
  onClose,
  currentLanguage = "pt",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [copiedCitation, setCopiedCitation] = useState<boolean>(false);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const filteredItems = useMemo(() => {
    return REFERENCES_LEGAL_DATA.filter((item) => {
      const matchesCategory = 
        selectedCategory === "todos" || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchTerm.trim()) return true;

      const q = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.authorOrEntity.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.relevanceToDibe.toLowerCase().includes(q) ||
        (item.legalNote && item.legalNote.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchTerm]);

  const handleCopyCitation = () => {
    const officialCitation = 
      "SILVA, Janete M. C. DIBE — Dicionário Ilustrado de Bordados Eletrônicos: Enciclopédia Técnica e Metodológica de Matrizes, Mecânica e Insumos Têxteis. Edição Oficial Consolidada. São Paulo: Artrelados Bordados, 2026. Disponível em: https://www.artrelados.com.br/. Acesso em: 03 out. 2026.";
    navigator.clipboard.writeText(officialCitation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl border-4 border-[#F9BC06] w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden text-slate-900 transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white p-5 sm:p-6 border-b-4 border-[#F9BC06] relative shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#F9BC06] text-slate-950 shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                  Blindagem Jurídica & Amparo Legal
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-amber-300 border border-amber-300/30">
                  <Scale className="w-3 h-3" />
                  Lei Federal 9.610/98 (Art. 7º, 8º e 46)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-emerald-300 border border-emerald-300/30">
                  <Award className="w-3 h-3" />
                  Autoria: Janete (Artrelados)
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                <BookMarked className="w-6 h-6 sm:w-7 sm:h-7 text-[#F9BC06]" />
                Compêndio de Referências, Manuais Técnicos & Leis
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-3xl leading-relaxed">
                Documentação oficial de fontes primárias mundiais (manuais de fabricantes industriais e domésticos, normas ABNT/ISO, engenharias têxteis e tratados de software) e a blindagem jurídica autoral da enciclopédia DIBE.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer shrink-0 border border-white/10 shadow-xs"
              title="Fechar janela"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Quick Citation Bar */}
          <div className="mt-4 pt-3.5 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white/5 p-3 rounded-2xl">
            <div className="flex items-center gap-2 text-xs text-amber-200">
              <span className="font-bold text-amber-400">Como citar esta obra:</span>
              <span className="font-mono text-[11px] text-slate-300 line-clamp-1">
                SILVA, Janete M. C. DIBE — Dicionário Ilustrado de Bordados Eletrônicos...
              </span>
            </div>
            <button
              onClick={handleCopyCitation}
              className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer shrink-0"
            >
              {copiedCitation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Citação Copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Citação Oficial ABNT</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Search & Categories Bar */}
        <div className="p-4 sm:p-5 bg-slate-100 border-b border-slate-200 shrink-0 space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por termo, fabricante (Brother, Tajima, Schmetz), lei, norma ISO..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar text-xs font-bold">
            {REFERENCES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl transition whitespace-nowrap cursor-pointer flex items-center gap-1.5 border shadow-2xs ${
                  selectedCategory === cat.id
                    ? "bg-slate-950 text-[#F9BC06] border-slate-950 shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {cat.id !== "todos" && (
                  <span className="text-[10px] opacity-75 font-mono">
                    ({REFERENCES_LEGAL_DATA.filter((i) => i.category === cat.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar space-y-4 bg-slate-50/60 flex-1">
          {/* Top Editorial Banner for Autoria / Blindagem */}
          {selectedCategory === "todos" && !searchTerm && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 border-2 border-amber-300 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-950 font-black text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Nota Oficial de Proteção de Direitos Autorais & Respaldo Científico</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                O <strong>DIBE (Dicionário Ilustrado de Bordados Eletrônicos)</strong> é uma obra enciclopédica didática de titularidade exclusiva de <strong>Janete M. C. Silva (Artrelados Bordados)</strong>. Em rigoroso cumprimento à <em>Lei Federal nº 9.610/1998</em>, todos os verbetes foram formulados com redação pedagógica autoral, amparados pelo domínio público das ciências de engenharia mecânica têxtil e fundamentados nos manuais técnicos oficiais dos fabricantes mundiais de maquinário, agulhas, linhas e softwares.
              </p>
            </div>
          )}

          {/* Results Count */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-1">
            <span>Exibindo {filteredItems.length} referências documentadas</span>
            {searchTerm && <span>Filtro de busca ativo: &quot;{searchTerm}&quot;</span>}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border-2 border-slate-200/90 hover:border-amber-400 p-4 sm:p-5 shadow-xs transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {item.sourceType}
                    </span>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      {item.yearOrEdition}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.authorOrEntity}</span>
                  </div>

                  <p className="text-xs text-slate-700 font-normal leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60 text-[11px] text-amber-950 leading-relaxed">
                    <strong className="font-bold block text-amber-900 mb-0.5">
                      🧵 Aplicação & Respaldo no DIBE:
                    </strong>
                    {item.relevanceToDibe}
                  </div>

                  {item.legalNote && (
                    <div className="bg-blue-50/70 p-2.5 rounded-xl border border-blue-200/60 text-[11px] text-blue-950 leading-relaxed">
                      <strong className="font-bold block text-blue-900 mb-0.5">
                        ⚖️ Amparo Jurídico & Proteção:
                      </strong>
                      {item.legalNote}
                    </div>
                  )}

                  {item.linkOrOrigin && (
                    <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1">
                      <span>Origem: {item.linkOrOrigin}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 px-4 space-y-3 bg-white rounded-2xl border-2 border-dashed border-slate-300">
              <BookMarked className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-sm font-bold text-slate-800">
                Nenhuma referência encontrada para &quot;{searchTerm}&quot;
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Tente buscar por marcas como Brother, Tajima, Schmetz, ou termos como Lei, Norma, Artigo ou Insumos.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("todos");
                }}
                className="px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs cursor-pointer hover:bg-amber-300"
              >
                Ver Todas as Referências
              </button>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="bg-slate-900 text-white p-3.5 sm:p-4 border-t-2 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2 text-slate-400">
            <Award className="w-4 h-4 text-[#F9BC06]" />
            <span>
              DIBE Oficial • Protegido por Direitos Autorais © 2026 Artrelados
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs transition cursor-pointer shadow-xs"
          >
            Fechar Compêndio
          </button>
        </div>
      </div>
    </div>
  );
};

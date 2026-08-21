import React, { useState, useEffect } from "react";
import { BookmarkCheck, RotateCcw, Lock, Unlock, ShieldAlert, Plus, BookMarked, BookOpen, X, Search, Check, Trash2, ExternalLink, Sparkles, FileText, Info } from "lucide-react";
import { DictionaryStats } from "../types";
import { OFFICIAL_REFERENCES, ReferenceItem } from "../data/referencesData";

interface FooterBarProps {
  stats: DictionaryStats;
  onResetFilters?: () => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  onAddNewVerbete?: () => void;
}

export const FooterBar: React.FC<FooterBarProps> = ({
  stats,
  onResetFilters,
  isAdmin,
  setIsAdmin,
  onAddNewVerbete,
}) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  // References modal state
  const [showReferencesModal, setShowReferencesModal] = useState(false);
  const [references, setReferences] = useState<ReferenceItem[]>(() => {
    try {
      const saved = localStorage.getItem("dibe_official_references_v3");
      if (saved) {
        const parsed: ReferenceItem[] = JSON.parse(saved);
        // Ensure new default OFFICIAL_REFERENCES exist
        const customItems = parsed.filter((item) => item.id.startsWith("ref-custom-"));
        return [...OFFICIAL_REFERENCES, ...customItems];
      }
      return OFFICIAL_REFERENCES;
    } catch {
      return OFFICIAL_REFERENCES;
    }
  });

  const [refSearch, setRefSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New reference form (when in Admin mode)
  const [showAddRefForm, setShowAddRefForm] = useState(false);
  const [newRefAuthor, setNewRefAuthor] = useState("");
  const [newRefTitle, setNewRefTitle] = useState("");
  const [newRefPublisher, setNewRefPublisher] = useState("");
  const [newRefAccessDate, setNewRefAccessDate] = useState("8 ago. 2026");

  useEffect(() => {
    try {
      localStorage.setItem("dibe_official_references_v3", JSON.stringify(references));
    } catch (err) {
      console.error("Failed to save references:", err);
    }
  }, [references]);

  const handleAdminToggle = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setShowPasswordModal(true);
      setPasswordInput("");
      setPasswordError(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = passwordInput.toLowerCase().trim();
    if (input === "artrelados" || input === "1234" || input === "dibe") {
      setIsAdmin(true);
      setShowPasswordModal(false);
      setPasswordInput("");
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleCopyCitation = (ref: ReferenceItem) => {
    navigator.clipboard.writeText(ref.fullCitation);
    setCopiedId(ref.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddReference = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRefAuthor.trim() || !newRefTitle.trim()) return;

    const fullCitation = `${newRefAuthor.toUpperCase().trim()}. ${newRefTitle.trim()}.${newRefPublisher ? ` ${newRefPublisher.trim()}.` : ""} Acesso em: ${newRefAccessDate.trim()}.`;

    const newItem: ReferenceItem = {
      id: `ref-custom-${Date.now()}`,
      author: newRefAuthor.trim(),
      title: newRefTitle.trim(),
      publisherOrUrl: newRefPublisher.trim(),
      accessDate: newRefAccessDate.trim(),
      fullCitation,
    };

    setReferences((prev) => [newItem, ...prev]);
    setNewRefAuthor("");
    setNewRefTitle("");
    setNewRefPublisher("");
    setShowAddRefForm(false);
  };

  const handleDeleteReference = (id: string) => {
    if (window.confirm("Deseja realmente remover esta referência bibliográfica?")) {
      setReferences((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const filteredReferences = references.filter((ref) => {
    const q = refSearch.toLowerCase().trim();
    if (!q) return true;
    return (
      ref.author.toLowerCase().includes(q) ||
      ref.title.toLowerCase().includes(q) ||
      ref.publisherOrUrl.toLowerCase().includes(q) ||
      ref.fullCitation.toLowerCase().includes(q)
    );
  });

  return (
    <footer className="mt-16 bg-black text-slate-100 border-t-4 border-amber-500 pt-10 pb-12 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Ateliê & Editor Control Bar */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 justify-center md:justify-start">
            <div className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center space-x-2 text-xs shadow-md">
              <span className="text-sm leading-none font-black tracking-wide">DIBE</span>
              <span className="text-[10px] bg-black text-amber-300 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Acervo Oficial</span>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-300 font-black flex items-center space-x-2 text-xs">
              <span className="text-zinc-400">🏷️ ATELIÊ:</span>
              <span className="text-amber-400 font-extrabold">ARTRELADOS</span>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-bold text-xs flex items-center space-x-1.5">
              <BookmarkCheck className="w-4 h-4 text-amber-400" />
              <span>Verbetes Cadastrados: <strong className="text-amber-300 font-black">{stats.totalTerms}</strong></span>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {/* References Button */}
            <button
              onClick={() => setShowReferencesModal(true)}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-amber-300 font-black text-xs flex items-center space-x-2 shadow border border-amber-500/40 hover:border-amber-400 transition cursor-pointer"
              title="Ver Referências Bibliográficas e Fontes Técnicas Consultadas"
            >
              <BookMarked className="w-4 h-4 text-amber-400" />
              <span>📚 Referências & Fontes</span>
            </button>

            {/* Admin Toggle */}
            <button
              onClick={handleAdminToggle}
              className={`px-4 py-2 rounded-xl font-black text-xs flex items-center space-x-2 shadow-md border transition cursor-pointer ${
                isAdmin
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500 animate-pulse"
                  : "bg-amber-400 hover:bg-amber-500 text-slate-950 border-amber-500"
              }`}
              title={isAdmin ? "Modo Editora Ativo — Clique para Sair" : "Acesso Restrito da Editora Artrelados para Editar/Excluir"}
            >
              {isAdmin ? <Unlock className="w-4 h-4 text-emerald-100" /> : <Lock className="w-4 h-4 text-slate-950" />}
              <span>{isAdmin ? "Modo Editora Ativo ✏️" : "Área da Editora (Senha)"}</span>
            </button>

            {isAdmin && onAddNewVerbete && (
              <button
                onClick={onAddNewVerbete}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs flex items-center space-x-1.5 shadow-md border border-amber-500 transition cursor-pointer"
                title="Adicionar um novo verbete ao DIBE"
              >
                <Plus className="w-4 h-4 text-slate-950" />
                <span>+ Novo Verbete</span>
              </button>
            )}

            {onResetFilters && (
              <button
                onClick={onResetFilters}
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold text-xs flex items-center space-x-1.5 shadow transition cursor-pointer border border-zinc-800 hover:text-white"
                title="Limpar todos os filtros do dicionário"
              >
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <span>Zerar Filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* Footer Copyright & Credits */}
        <div className="text-center space-y-2 text-xs text-zinc-400 pt-2 border-t border-zinc-900">
          <p className="font-medium text-zinc-300">
            Dicionário de Bordados Artrelados (DIBE) &copy; {new Date().getFullYear()} — Acervo Técnico de Bordado Eletrônico
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto text-zinc-400 text-[11px]">
            <span>Consultoria técnica desenvolvida por <strong className="text-amber-400 font-bold">Janete MC Silva</strong> (Artrelados).</span>
            <button
              onClick={() => setShowReferencesModal(true)}
              className="text-amber-300 hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span>Consultar Referências & Fontes ({references.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Password Modal for Admin Mode */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in text-slate-900">
          <div className="bg-white rounded-3xl border border-amber-300 shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center space-x-3 text-amber-900">
              <div className="p-2.5 bg-amber-100 rounded-2xl">
                <Lock className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Área da Editora Artrelados</h3>
                <p className="text-xs text-slate-500">Digite a senha para habilitar edição e exclusão de verbetes e referências</p>
              </div>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Senha de Acesso:
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="Sua senha de editora (ex: artrelados)"
                  autoFocus
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                />
                {passwordError && (
                  <p className="text-xs text-rose-600 font-bold mt-1.5 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Senha incorreta! Digite &quot;artrelados&quot;
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-bold transition cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black transition cursor-pointer shadow-md border border-amber-500"
                >
                  Entrar como Editora
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bibliographic References Modal — Pristine White Background */}
      {showReferencesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in text-slate-900">
          <div className="bg-white text-slate-900 rounded-3xl border-2 border-amber-400 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-amber-400 border-b-2 border-amber-500 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-slate-950 text-amber-400 rounded-2xl shadow-md">
                  <BookMarked className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight uppercase">
                    REFERÊNCIAS E FONTES
                  </h2>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">
                    Documentação técnica, manuais de suporte e fundamentos do DIBE
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowReferencesModal(false)}
                className="p-2 rounded-full bg-slate-950 hover:bg-slate-800 text-amber-400 transition cursor-pointer shadow-sm"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 custom-scrollbar bg-white">
              
              {/* Introduction Text Block */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3 leading-relaxed text-xs sm:text-sm shadow-xs">
                <p>
                  A elaboração deste dicionário contou com diferentes fontes de informação relacionadas ao universo do bordado eletrônico, incluindo manuais e documentação técnica de fabricantes, materiais de apoio de softwares de bordado, conteúdos educacionais, terminologia utilizada no setor e pesquisas realizadas durante o desenvolvimento dos verbetes.
                </p>
                <p>
                  As fontes foram utilizadas como apoio para a compreensão, comparação e organização dos conceitos apresentados nesta obra. Sempre que necessário, informações específicas poderão ser acompanhadas de suas respectivas fontes ou referências no próprio verbete.
                </p>
              </div>

              {/* AI Notice Box */}
              <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-slate-900 space-y-2 shadow-sm">
                <div className="flex items-center space-x-2 text-amber-900 font-extrabold text-xs sm:text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Observação sobre a participação da inteligência artificial</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  A inteligência artificial foi utilizada como ferramenta de apoio à pesquisa, organização, elaboração, revisão e desenvolvimento textual deste projeto. O conteúdo final foi selecionado, avaliado, revisado e organizado sob a direção da autora, responsável pelas decisões editoriais e pelo conteúdo publicado nesta edição.
                </p>
              </div>

              {/* Filter / Search Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={refSearch}
                    onChange={(e) => setRefSearch(e.target.value)}
                    placeholder="Filtrar referências por fabricante ou obra..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {refSearch && (
                    <button
                      onClick={() => setRefSearch("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                {isAdmin && (
                  <button
                    onClick={() => setShowAddRefForm(!showAddRefForm)}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center space-x-1.5 transition cursor-pointer shadow-sm self-end sm:self-auto"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{showAddRefForm ? "Cancelar" : "+ Cadastrar Fonte"}</span>
                  </button>
                )}
              </div>

              {/* Add Reference Form (Admin Mode) */}
              {isAdmin && showAddRefForm && (
                <form onSubmit={handleAddReference} className="bg-slate-50 border-2 border-amber-400 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md animate-fade-in">
                  <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide flex items-center gap-2">
                    <Plus className="w-4 h-4 text-emerald-600" />
                    Adicionar Nova Fonte Técnica
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Autor / Empresa*</label>
                      <input
                        type="text"
                        required
                        value={newRefAuthor}
                        onChange={(e) => setNewRefAuthor(e.target.value)}
                        placeholder="Ex: WILCOM INTERNATIONAL PTY LTD"
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Título do Documento*</label>
                      <input
                        type="text"
                        required
                        value={newRefTitle}
                        onChange={(e) => setNewRefTitle(e.target.value)}
                        placeholder="Ex: Supported Embroidery Formats"
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Publicador / Disponibilidade</label>
                      <input
                        type="text"
                        value={newRefPublisher}
                        onChange={(e) => setNewRefPublisher(e.target.value)}
                        placeholder="Ex: Wilcom — Supported Embroidery Formats"
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Data de Acesso</label>
                      <input
                        type="text"
                        value={newRefAccessDate}
                        onChange={(e) => setNewRefAccessDate(e.target.value)}
                        placeholder="Ex: 8 ago. 2026"
                        className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddRefForm(false)}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black"
                    >
                      Salvar Fonte
                    </button>
                  </div>
                </form>
              )}

              {/* List of 14 ABNT References */}
              <div className="space-y-3">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5 pt-2">
                  <FileText className="w-3.5 h-3.5 text-amber-500" />
                  <span>Relação de Documentações & Publicações Consultadas ({filteredReferences.length})</span>
                </h3>

                {filteredReferences.length === 0 ? (
                  <div className="text-center py-8 text-slate-500 text-xs space-y-1 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="font-bold">Nenhuma fonte encontrada para os termos pesquisados.</p>
                  </div>
                ) : (
                  filteredReferences.map((ref, idx) => (
                    <div
                      key={ref.id}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-amber-400 transition space-y-2 relative group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 flex-1">
                          <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed font-mono">
                            <strong className="text-slate-950 font-black">{ref.author}.</strong>{" "}
                            <span>{ref.title}</span>{" "}
                            {ref.publisherOrUrl && (
                              <span className="text-slate-600">Disponível em: <u className="decoration-amber-400">{ref.publisherOrUrl}</u>.</span>
                            )}{" "}
                            {ref.accessDate && (
                              <span className="text-slate-500">Acesso em: {ref.accessDate}.</span>
                            )}
                          </p>
                        </div>

                        <div className="flex items-center space-x-1.5 shrink-0 pt-0.5">
                          <button
                            onClick={() => handleCopyCitation(ref)}
                            className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-300 flex items-center space-x-1 transition cursor-pointer shadow-2xs"
                            title="Copiar citação ABNT"
                          >
                            {copiedId === ref.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-700 text-[11px]">Copiado</span>
                              </>
                            ) : (
                              <>
                                <ExternalLink className="w-3 h-3 text-amber-500" />
                                <span className="text-[11px]">Copiar</span>
                              </>
                            )}
                          </button>

                          {isAdmin && (
                            <button
                              onClick={() => handleDeleteReference(ref.id)}
                              className="p-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition cursor-pointer"
                              title="Excluir Fonte"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Final Sources Note */}
              <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 space-y-1.5 text-xs sm:text-sm shadow-2xs mt-4">
                <div className="flex items-center space-x-2 text-slate-900 font-extrabold uppercase text-xs tracking-wider">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Nota sobre as fontes:</span>
                </div>
                <p className="leading-relaxed text-slate-600 text-xs">
                  As informações técnicas apresentadas neste dicionário foram elaboradas a partir de documentação de fabricantes de máquinas, softwares e componentes para bordado eletrônico, bem como de materiais técnicos especializados. As especificações e funcionalidades podem variar de acordo com o fabricante, modelo do equipamento, versão do software e atualizações da documentação.
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 shrink-0">
              <p>
                Total de Fontes Catalogadas: <strong className="text-slate-950 font-black">{references.length} documentos técnicos</strong>
              </p>
              <button
                onClick={() => setShowReferencesModal(false)}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition cursor-pointer shadow-md border border-amber-500"
              >
                Concluir Consulta
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

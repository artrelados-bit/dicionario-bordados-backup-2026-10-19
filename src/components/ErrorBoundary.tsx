import React, { Component, ErrorInfo, ReactNode } from "react";
import { RefreshCw, AlertTriangle } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("DIBE ErrorBoundary capturou um erro:", error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem("dibe_language");
      localStorage.removeItem("dibe_active_letter");
    } catch (e) {
      // Ignore
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 text-slate-800">
          <div className="bg-white border border-amber-200 rounded-3xl p-8 max-w-lg w-full text-center shadow-lg space-y-5">
            <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto border border-amber-300">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900">DIBE Artrelados</h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Ocorreu uma pequena instabilidade momentânea ao carregar a visualização. Clique no botão abaixo para restaurar o catálogo normalmente.
              </p>
            </div>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#101726] hover:bg-slate-800 text-amber-300 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Recarregar Dicionário
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

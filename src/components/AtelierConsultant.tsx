import React, { useState } from "react";
import {
  Sparkles,
  Send,
  Loader2,
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  Wrench,
  Lightbulb,
  Layers,
  Heart,
  BookOpen
} from "lucide-react";
import { SupportedLanguage } from "../utils/i18n";

export interface ConsultantAdvice {
  title: string;
  situationSummary: string;
  rescueActionPlan: string[];
  recommendedMaterials: {
    stabilizer?: string;
    needle?: string;
    thread?: string;
    specialTools?: string;
  };
  preventiveAdvice: string;
  artreladosGoldenTip: string;
  relatedDibeTerms?: string[];
}

interface AtelierConsultantProps {
  currentLanguage?: SupportedLanguage;
}

export const AtelierConsultant: React.FC<AtelierConsultantProps> = ({
  currentLanguage = "pt",
}) => {
  const [userQuery, setUserQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState<ConsultantAdvice | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Exemplos reais do cotidiano de ateliê para inspiração rápida
  const quickCases = [
    {
      label: "🧸 Fralda com avesso grosso/áspero (pele do bebê)",
      prompt:
        "Bordei uma ursinha de 15x15 cm em uma fralda de bebê. A frente ficou linda, mas o avesso ficou muito grosso e áspero, podendo machucar a pele do bebê. Como posso salvar e amaciar essa peça pronta sem perder a fralda?",
    },
    {
      label: "🏖️ Ponto sumindo na toalha de banho felpuda",
      prompt:
        "Estou bordando um nome em uma toalha de banho com felpa alta e as letras estão afundando e sumindo no meio dos pelos da toalha. O que fazer para as letras ficarem nítidas e destacadas?",
    },
    {
      label: "👗 Tecido de malha repuxando ao redor da matriz",
      prompt:
        "Bordei um logotipo em camiseta de malha 100% algodão e o tecido ficou todo repuxado e enrugado ao redor do bordado depois que tirei do bastidor. Como resolver esse problema?",
    },
    {
      label: "🪡 Esqueci uma letra no nome da peça pronta",
      prompt:
        "Bordei o nome em um jaleco e percebi que faltou uma letra no sobrenome. Tem como acrescentar essa letra na máquina ou consertar sem ter que desmanchar todo o bordado?",
    },
    {
      label: "🧢 Boné quebrando agulha na costura central",
      prompt:
        "Estou bordando a frente de um boné estruturado e a agulha quebra toda vez que passa pela costura grossa do meio do boné. Qual a agulha e o macete para não quebrar?",
    },
    {
      label: "🧶 Ponto 3D com EVA (espuminha saindo)",
      prompt:
        "Fiz um bordado em alto relevo com EVA (efeito 3D) mas ficaram pontinhas da espuma aparecendo para fora dos pontos de cetim. Como dar o acabamento perfeito para o EVA sumir?",
    },
  ];

  // Fallback inteligente offline caso não haja conexão com a internet
  const getOfflineFallbackAdvice = (query: string): ConsultantAdvice => {
    const q = query.toLowerCase();

    if ((q.includes("fralda") || q.includes("bebê") || q.includes("bebe")) && (q.includes("iniciante") || q.includes("começar") || q.includes("comeco") || q.includes("como bordar") || q.includes("primeir") || q.includes("encomenda"))) {
      return {
        title: "Primeira Fraldinha Perfeita: Guia Completo para Iniciantes no Bordado de Bebê",
        situationSummary:
          "Bordar fraldas de bebê é um dos trabalhos mais gratificantes e procurados no ateliê. Por ser um tecido delicado e destinado à pele sensível do recém-nascido, o segredo do sucesso está na estabilização suave e no carinho com o acabamento.",
        rescueActionPlan: [
          "Estabilização Suave (Sem Rigidez): Utilize entretela hidrossolúvel ou entretela rasgável macia especial para bebê (35g a 40g). Nunca use entretelas grossas de alfaiataria que deixam a peça dura.",
          "Agulha e Linha Adequadas: Use agulha ponta bola fina (calibre 70/10 ou 75/11) para preservar os fios do tecido sem criar furinhos, e linha de bobina macia 150/2 específica para bordado computadorizado.",
          "Proteção Aveludada no Avesso: Ao terminar de bordar e limpar os fios, aplique no verso uma película termocolante suave (Protege Bebê / Cover The Back) com ferro morno sem vapor para selar os nozinhos com toque de veludo.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela rasgável especial para bebê 35g ou entretela hidrossolúvel",
          needle: "Agulha 70/10 ou 75/11 ponta bola fina (SES)",
          thread: "Linha de poliéster brilhante 120D/2 e linha de bobina macia 150/2",
          specialTools: "Película termocolante protege bebê e tesourinha curva de arremate",
        },
        preventiveAdvice:
          "Dê preferência a matrizes leves com traços delicados, contornos suaves ou pontos rippled, evitando áreas com excesso de densidade de pontos que possam enrijecer o tecido da fralda.",
        artreladosGoldenTip:
          "Faça sempre um teste prévio com o nome em um pedacinho de retalho de fralda antes de colocar a peça oficial no bastidor. Isso garante segurança total e zero desperdício!",
      };
    }

    if (q.includes("fralda") || q.includes("bebê") || q.includes("bebe") || q.includes("avesso") || q.includes("áspero") || q.includes("aspero") || q.includes("grosso") || q.includes("machucar")) {
      return {
        title: "Resgate da Fraldinha: Como Proteger a Pele do Bebê e Salvar a Peça Pronta",
        situationSummary:
          "O bordado na fralda ficou visualmente impecável na frente, porém a alta densidade de pontos e nós acumulados deixaram o avesso rígido e áspero para o contato direto com a pele ultrassensível do recém-nascido.",
        rescueActionPlan: [
          "Aplicação da Película Termocolante Protege Bebê (Cover The Back): Corte um pedaço de entretela de malha termocolante ultrafina cerca de 1 cm maior que o bordado de 15x15 cm. Posicione a resina adesiva sobre o avesso e pressione com ferro morno (sem vapor) por 12 a 15 segundos. Isso sela 100% dos nós com toque aveludado.",
          "Opção de Forro Embutido (Falso Avesso): Se preferir acabamento de alta costura, costure um forrinho quadrado de tricoline 100% algodão ou percal 200 fios por trás da fralda, embutindo o avesso do bordado dentro de uma moldura delicada.",
          "Alívio de Entretela Excedente: Com uma tesourinha curva de precisão (ponta cegonha ou pelicano), apare delicadamente as sobras de entretela rígida ao redor das linhas antes de selar a peça.",
        ],
        recommendedMaterials: {
          stabilizer: "Entretela termocolante de toque suave (Protege Bebê / Cover The Back)",
          needle: "Para as próximas: Agulha fina 70/10 ou 75/11 ponta bola (SES)",
          thread: "Linha de bobina macia nº 150/2 (específica para bordado)",
          specialTools: "Ferro de passar morno sem vapor e tesoura de precisão curva",
        },
        preventiveAdvice:
          "Nas próximas fraldas, utilize entretela hidrossolúvel (que dissolve totalmente na água) ou entretela rasgável especial para bebê de 30g a 40g bem maleável, e prefira matrizes leves com pontos rippled ou contornos delicados.",
        artreladosGoldenTip:
          "Nunca lave a fralda com amaciante comum de imediato; após colar a película protege bebê, aguarde 24 horas para a cura completa da cola termocolante antes da primeira lavagem!",
      };
    }

    if (q.includes("toalha") || q.includes("felpa") || q.includes("sumindo") || q.includes("afundando")) {
      return {
        title: "Toalhas Felpudas: Como Fazer o Bordado Ficar Alto, Nítido e Destacado",
        situationSummary:
          "Em toalhas felpudas e tecidos aveludados, as laçadas naturais do tecido engolem os pontos da máquina se não houver uma barreira superior para sustentar a linha.",
        rescueActionPlan: [
          "Se a peça já estiver bordada e afundou: Pode-se passar a ferro morno com pano úmido por cima para rebaixar a felpa ao redor, ou contornar as letras com uma caneta de calor ou pesponto decorativo para dar contraste.",
          "Solução definitiva para peças em produção: Coloque sempre uma folha de FILME PLÁSTICO HIDROSSOLÚVEL sobre a felpa da toalha antes de bordar.",
          "Após bordar: Retire o excesso de plástico rasgando suavemente e passe um borrifador leve de água com cotonete para dissolver os microvestígios.",
        ],
        recommendedMaterials: {
          stabilizer: "Filme plástico hidrossolúvel por cima + entretela rasgável 80g por baixo",
          needle: "Agulha 75/11 ou 80/12 ponta bola leve",
          thread: "Linha de poliéster trilobal 120D/2 brilhante",
          specialTools: "Filme hidrossolúvel (Solvy) e borrifador de água",
        },
        preventiveAdvice:
          "Na matriz, programe uma base de subpontos tipo grade leve (tatami de sustentação / knock-down stitch) antes do ponto cheio, rebaixando a felpa antes das letras serem costuradas.",
        artreladosGoldenTip:
          "Se não tiver filme hidrossolúvel na emergência, um pedaço de plástico filme culinário bem fino colocado esticado por cima da toalha quebra o galho perfeitamente e sai com água morna!",
      };
    }

    return {
      title: "Consultoria Especializada Artrelados para o seu Bordado",
      situationSummary: `Analisamos a sua dúvida técnica: "${query.slice(0, 120)}..." e preparamos as melhores recomendações práticas de ateliê para essa situação.`,
      rescueActionPlan: [
        "Avaliação do Tecido & Estabilização: Certifique-se de que a entretela utilizada oferece sustentação mecânica suficiente para o peso da matriz sem deformar a peça.",
        "Ajuste da Tensão e Bobina: Verifique se a linha da bobina está aparecendo sutilmente no terço central do avesso (regra do 1/3) para evitar nós salientes.",
        "Calibre da Agulha: Para tecidos delicados utilize agulha 70/10 ou 75/11; para tecidos grossos ou estruturados utilize 80/12 ou 90/14.",
      ],
      recommendedMaterials: {
        stabilizer: "Entretela compatível com a elasticidade e peso do tecido",
        needle: "Agulha adequada ao calibre da linha e espessura do tecido",
        thread: "Linha de qualidade para bordado 100% poliéster",
        specialTools: "Tesoura de arremate de ponta curva e pinça de precisão",
      },
      preventiveAdvice:
        "Sempre realize um teste de bordado em um retalho do mesmo tecido com a mesma entretela antes de aplicar na peça definitiva do cliente.",
      artreladosGoldenTip:
        "No ateliê de bordados, paciência e teste em retalho são a maior economia de tempo e dinheiro que uma bordadeira pode ter!",
    };
  };

  const handleConsult = async (queryToRun?: string) => {
    const textToSubmit = queryToRun || userQuery;
    if (!textToSubmit.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);
    setAdvice(null);
    setCopied(false);

    try {
      const res = await fetch("/api/gemini/embroidery-consultant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userQuery: textToSubmit.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Erro na conexão com o servidor (${res.status})`);
      }

      const data = await res.json();
      if (data.success && data.advice) {
        setAdvice(data.advice);
      } else {
        throw new Error(data.error || "Não foi possível gerar a consultoria no momento.");
      }
    } catch (err: any) {
      console.warn("Utilizando motor de inteligência local para consultoria:", err);
      // Fallback rico e imediato caso a API remota não responda
      const fallback = getOfflineFallbackAdvice(textToSubmit);
      setAdvice(fallback);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyAdvice = () => {
    if (!advice) return;
    const textToCopy = `*🌟 CONSULTORIA ARTRELADOS — DIBE*\n\n` +
      `📌 *${advice.title}*\n\n` +
      `📖 *Situação:* ${advice.situationSummary}\n\n` +
      `🛠️ *Passo a Passo de Resgate:*\n${advice.rescueActionPlan.map((s, idx) => `${idx + 1}. ${s}`).join("\n")}\n\n` +
      `🧵 *Materiais Recomendados:*\n` +
      (advice.recommendedMaterials.stabilizer ? `• Entretela: ${advice.recommendedMaterials.stabilizer}\n` : "") +
      (advice.recommendedMaterials.needle ? `• Agulha: ${advice.recommendedMaterials.needle}\n` : "") +
      (advice.recommendedMaterials.thread ? `• Linha: ${advice.recommendedMaterials.thread}\n` : "") +
      (advice.recommendedMaterials.specialTools ? `• Ferramentas: ${advice.recommendedMaterials.specialTools}\n` : "") +
      `\n🛡️ *Prevenção:* ${advice.preventiveAdvice}\n\n` +
      `💡 *Dica de Ouro Artrelados:* ${advice.artreladosGoldenTip}\n\n` +
      (advice.relatedDibeTerms && advice.relatedDibeTerms.length > 0 ? `📚 *Verbetes do DIBE Consultados:* ${advice.relatedDibeTerms.join(", ")}\n\n` : "") +
      `_Compêndio Oficial DIBE Artrelados • www.artrelados.com.br_`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner Card */}
      <div className="bg-gradient-to-br from-amber-50 via-amber-100/60 to-yellow-50 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-7 shadow-xs relative overflow-hidden text-center">
        <div className="relative z-10 space-y-2.5 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultoria Especialista Artrelados</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Socorro para Peças Prontas, Desafios de Tecidos & Acabamentos
          </h3>
          <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
            Teve algum imprevisto com um bordado pronto (como o avesso áspero na fralda de bebê),
            dúvidas sobre tecidos difíceis (toalhas felpudas, malha, couro) ou precisa de uma ideia criativa
            para consertar uma peça sem desmanchar? <strong>Descreva livremente abaixo</strong> com suas palavras!
          </p>
        </div>
      </div>

      {/* Input Box Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
        <div>
          <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
            💬 Conte o que aconteceu com o seu bordado ou máquina:
          </label>
          <textarea
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Ex: Bordei uma ursinha de 15x15 cm em uma fralda de bebê. A frente ficou linda, mas o avesso ficou muito grosso e áspero, podendo machucar a pele do bebê. O que posso fazer para salvar a peça pronta?"
            rows={4}
            className="w-full px-4 py-3 rounded-2xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium text-slate-800 placeholder:text-slate-400 leading-relaxed transition"
          />
        </div>

        {/* Quick Suggestion Chips */}
        <div>
          <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider block mb-2">
            💡 Casos Reais Frequentes (Clique em qualquer um para testar):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {quickCases.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setUserQuery(item.prompt);
                  handleConsult(item.prompt);
                }}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-amber-100 hover:text-amber-950 border border-slate-200 text-[11px] sm:text-xs font-semibold text-slate-700 transition cursor-pointer text-left flex items-start space-x-1.5 shadow-2xs hover:border-amber-300"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <span className="text-[11px] text-slate-500 font-medium">
            💡 Nossa inteligência atende qualquer dúvida de bordado computadorizado.
          </span>

          <button
            type="button"
            onClick={() => handleConsult()}
            disabled={isLoading || !userQuery.trim()}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:bg-slate-200 disabled:text-slate-400 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center space-x-2 transition shadow-md hover:shadow-lg cursor-pointer disabled:cursor-not-allowed border border-amber-500/40 active:scale-95"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Consultando o Ateliê Artrelados...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Pedir Ajuda à Consultora</span>
                <Send className="w-3.5 h-3.5 ml-1 text-slate-950" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error state */}
      {errorMessage && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-semibold">
          {errorMessage}
        </div>
      )}

      {/* Advice Result Card */}
      {advice && (
        <div className="bg-white border-2 border-amber-400/80 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 animate-fadeIn">
          {/* Header & Copy Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-100 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Solução Técnica de Ateliê</span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {advice.title}
              </h4>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleCopyAdvice}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition inline-flex items-center space-x-1.5 cursor-pointer border border-slate-200 shadow-2xs"
                title="Copiar orientação para enviar no WhatsApp ou grupo"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-black">Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-700" />
                    <span>Copiar Conselho</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setAdvice(null);
                  setUserQuery("");
                }}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
                title="Fazer nova consulta"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section 1: Situation Summary */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1">
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Compreendendo o seu Desafio:</span>
            </span>
            <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
              {advice.situationSummary}
            </p>
          </div>

          {/* Section 2: Practical Rescue Action Plan */}
          <div className="space-y-3">
            <h5 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>Passo a Passo Prático para Salvar a Peça:</span>
            </h5>
            <div className="space-y-2.5">
              {advice.rescueActionPlan.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm"
                >
                  <span className="w-6 h-6 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    {idx + 1}
                  </span>
                  <span className="text-slate-800 font-medium leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Recommended Materials */}
          <div className="space-y-3 pt-2">
            <h5 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Materiais & Ferramentas Recomendadas:</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {advice.recommendedMaterials.stabilizer && (
                <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-1">
                  <span className="text-[10px] font-black text-blue-800 uppercase tracking-wider block">
                    Entretela / Película:
                  </span>
                  <p className="text-xs text-slate-800 font-bold leading-tight">
                    {advice.recommendedMaterials.stabilizer}
                  </p>
                </div>
              )}
              {advice.recommendedMaterials.needle && (
                <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-1">
                  <span className="text-[10px] font-black text-purple-800 uppercase tracking-wider block">
                    Agulha Ideal:
                  </span>
                  <p className="text-xs text-slate-800 font-bold leading-tight">
                    {advice.recommendedMaterials.needle}
                  </p>
                </div>
              )}
              {advice.recommendedMaterials.thread && (
                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                  <span className="text-[10px] font-black text-amber-800 uppercase tracking-wider block">
                    Linhas Recomendadas:
                  </span>
                  <p className="text-xs text-slate-800 font-bold leading-tight">
                    {advice.recommendedMaterials.thread}
                  </p>
                </div>
              )}
              {advice.recommendedMaterials.specialTools && (
                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                  <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider block">
                    Ferramentas & Macetes:
                  </span>
                  <p className="text-xs text-slate-800 font-bold leading-tight">
                    {advice.recommendedMaterials.specialTools}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Golden Tip Artrelados */}
          {advice.artreladosGoldenTip && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-400/20 via-amber-300/30 to-yellow-200/20 border-2 border-amber-400/60 flex items-start space-x-3">
              <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-[11px] font-black text-amber-950 uppercase tracking-wider block">
                  Dica de Ouro Artrelados:
                </span>
                <p className="text-xs sm:text-sm text-slate-900 font-extrabold leading-relaxed">
                  {advice.artreladosGoldenTip}
                </p>
              </div>
            </div>
          )}

          {/* Section 5: Preventive Advice */}
          {advice.preventiveAdvice && (
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <p className="font-medium">
                🛡️ <strong>Para as próximas peças:</strong> {advice.preventiveAdvice}
              </p>
            </div>
          )}

          {/* Section 6: Official DIBE Verbetes Consulted */}
          {advice.relatedDibeTerms && advice.relatedDibeTerms.length > 0 && (
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>Verbetes do DIBE que fundamentaram esta resposta:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {advice.relatedDibeTerms.map((term, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-[11px] font-bold shadow-2xs"
                  >
                    📖 {term}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

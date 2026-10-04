import { Verbete } from "../types";

/**
 * Normaliza strings para comparação imune a acentos, pontuações,
 * maiúsculas/minúsculas e variações tipográficas.
 */
export function normalizeSearchText(str: string): string {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Stop-words e ruídos que não devem atrapalhar o casamento de termos correlatos.
 */
const STOP_WORDS = new Set([
  "de", "da", "do", "das", "dos",
  "no", "na", "nos", "nas",
  "em", "para", "com", "por", "sobre", "sob",
  "o", "a", "os", "as", "um", "uma", "uns", "umas",
  "e", "ou",
  "bordado", "bordados", "eletronico", "eletronicos", "eletronica", "eletronicas",
  "computadorizado", "computadorizados", "computadorizada", "computadorizadas",
  "machine", "embroidery", "stitch", "stitches", "pattern", "patterns"
]);

/**
 * Extrai as palavras-chave substanciais de um termo técnico.
 */
export function extractCoreKeywords(str: string): string[] {
  return normalizeSearchText(str)
    .split(" ")
    .filter((w) => w.length >= 3 && !STOP_WORDS.has(w));
}

/**
 * Extrai o melhor termo de busca caso não haja correspondência direta.
 * Remove ruídos para não poluir a caixa de busca.
 */
export function extractCleanSearchQuery(target: string): string {
  const kws = extractCoreKeywords(target);
  if (kws.length > 0) {
    return kws.join(" ");
  }
  return target.split("(")[0].split("/")[0].trim();
}

/**
 * Dicionário rápido de equivalências técnicas consolidadas no ateliê.
 */
const TECHNICAL_ALIASES: Record<string, string[]> = {
  "aquarela no bordado": ["aquarela", "bordado aquarelado", "watercolor", "ponto aberto / grid fill e shading tatami"],
  "aquarela": ["aquarela no bordado", "ponto aberto / grid fill e shading tatami", "hachura"],
  "ponto tatami (fill stitch)": ["ponto tatami", "tatami", "ponto tatami (preenchimento / fill stitch)"],
  "ponto tatami": ["tatami (ponto tatami / fill stitch)", "ponto tatami (preenchimento / fill stitch)"],
  "densidade de ponto": ["densidade de pontos", "densidade de pontos (conceitos & calibracao)"],
  "densidade de pontos": ["densidade de ponto"],
  "degrade no bordado": ["gradiente de cores & degrade de pontos", "efeito ombre", "variacao de densidade em degrade"],
  "degrade no bordado (color blending)": ["gradiente de cores & degrade de pontos", "variacao de densidade em degrade bicolor"],
  "programacao de bordado": ["digitalizacao de bordado", "digitalizacao manual", "programacao de matrizes", "software de bordado"],
  "ponto cheio": ["ponto cheio (satin stitch)", "coluna de ponto cheio"],
  "quebra de linha": ["quebra de linha de bordado", "rompimento de linha"],
  "tensao de linha": ["tensao de linha de bordado", "tensao superior da linha"],
  "linha de salto": ["corte de linha de salto", "salto de ponto", "jump stitch"],
  "manutencao preventiva": ["manutencao preventiva da maquina", "lubrificacao de cabecote"],
  "ponto corrido": ["ponto corrido (running stitch)", "ponto reto linear"],
};

/**
 * Localizador inteligente e profundo de termos correlatos do DIBE.
 * Garante que termos com plurais, explicações em inglês ou sinônimos
 * sejam localizados com precisão cirúrgica sem fechar o modal.
 */
export function resolveRelatedVerbete(target: string, allVerbetes: Verbete[]): Verbete | null {
  if (!target || !allVerbetes || allVerbetes.length === 0) return null;

  const targetClean = target.trim();
  const targetLower = targetClean.toLowerCase();
  const targetNorm = normalizeSearchText(targetClean);
  const targetBeforeParentheses = normalizeSearchText(targetClean.split("(")[0].split("/")[0]);
  const targetKeywords = extractCoreKeywords(targetClean);

  // 1. Casamento Exato por Código (ex: "H-001") ou Termo literal
  for (const v of allVerbetes) {
    if (v.code && v.code.toLowerCase() === targetLower) return v;
    if (v.id && v.id.toLowerCase() === targetLower) return v;
    if (v.term.toLowerCase() === targetLower) return v;
  }

  // 2. Consulta no Dicionário Rápido de Equivalências Técnicas
  for (const [aliasKey, targets] of Object.entries(TECHNICAL_ALIASES)) {
    if (targetNorm === aliasKey || targetBeforeParentheses === aliasKey || targetNorm.includes(aliasKey)) {
      for (const tgt of targets) {
        const found = allVerbetes.find((v) => {
          const vNorm = normalizeSearchText(v.term);
          return vNorm === tgt || vNorm.startsWith(tgt) || vNorm.includes(tgt);
        });
        if (found) return found;
      }
    }
  }

  // 3. Casamento por Título Principal Limpo (antes dos parênteses e barras em inglês)
  for (const v of allVerbetes) {
    const vClean = normalizeSearchText(v.term.split("(")[0].split("/")[0]);
    if (vClean === targetBeforeParentheses && targetBeforeParentheses.length >= 3) {
      return v;
    }
  }

  // 4. Casamento por Normalização Total (sem acentos nem pontuação)
  for (const v of allVerbetes) {
    const vNorm = normalizeSearchText(v.term);
    if (vNorm === targetNorm) return v;
    if (vNorm.startsWith(targetBeforeParentheses) && targetBeforeParentheses.length >= 4) {
      return v;
    }
  }

  // 5. Casamento de Plural / Singular (ex: "densidade de ponto" x "densidade de pontos")
  const targetSingular = targetBeforeParentheses.replace(/s\b/g, "").trim();
  for (const v of allVerbetes) {
    const vCleanSingular = normalizeSearchText(v.term.split("(")[0].split("/")[0]).replace(/s\b/g, "").trim();
    if (vCleanSingular === targetSingular && targetSingular.length >= 4) {
      return v;
    }
  }

  // 6. Casamento por Subtítulo em Inglês ou Sigla (ex: "(Fill Stitch)")
  const englishMatch = targetClean.match(/\(([^)]+)\)/);
  if (englishMatch && englishMatch[1]) {
    const engQuery = normalizeSearchText(englishMatch[1]);
    if (engQuery.length >= 3) {
      for (const v of allVerbetes) {
        const vNorm = normalizeSearchText(v.term + " " + (v.englishTerm || ""));
        if (vNorm.includes(engQuery)) {
          return v;
        }
      }
    }
  }

  // 7. Pontuação Semântica de Palavras-Chave de Alta Afinidade
  if (targetKeywords.length > 0) {
    let bestCandidate: Verbete | null = null;
    let highestScore = 0;

    for (const v of allVerbetes) {
      let score = 0;
      const vCleanTitle = normalizeSearchText(v.term.split("(")[0]);
      const vFullTitle = normalizeSearchText(v.term);
      const vTags = (v.tags || []).map((t) => normalizeSearchText(t)).join(" ");
      const vSummary = normalizeSearchText(v.summary || "");

      let matchedCoreWords = 0;
      for (const kw of targetKeywords) {
        if (vCleanTitle.includes(kw)) {
          score += 60;
          matchedCoreWords++;
        } else if (vFullTitle.includes(kw)) {
          score += 40;
          matchedCoreWords++;
        } else if (vTags.includes(kw)) {
          score += 25;
          matchedCoreWords++;
        } else if (vSummary.includes(kw)) {
          score += 15;
        }
      }

      // Bônus se todas as palavras-chave principais baterem
      if (matchedCoreWords === targetKeywords.length && matchedCoreWords > 0) {
        score += 50;
      }

      if (score > highestScore && score >= 50) {
        highestScore = score;
        bestCandidate = v;
      }
    }

    if (bestCandidate) {
      return bestCandidate;
    }
  }

  return null;
}

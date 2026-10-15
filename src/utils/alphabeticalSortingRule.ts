import { Verbete } from "../types";

/**
 * Limpa o termo removendo caracteres não-alfabéticos iniciais
 * (emojis de nível, aspas, parênteses, marcadores, numerais prefixados, etc.)
 */
export function cleanTermForSorting(term: string): string {
  if (!term) return "";
  return term
    .trim()
    .replace(/^[\s"'“”«»`’‘🟢🟡🔴()\[\]{}#•\-_*~`!?,.;:/\\0-9%@&+=<>|]+/u, "")
    .trim();
}

/**
 * Extrai a letra inicial autêntica e legítima do termo (A-Z).
 * Garante que se o termo começar com qualquer símbolo, emoji ou formatação,
 * a regra encontra a primeira letra real do alfabeto.
 */
export function extractTrueInitialLetter(
  term: string,
  fallbackCode?: string,
  fallbackLetter?: string
): string {
  const cleaned = cleanTermForSorting(term);
  if (cleaned) {
    const normalized = cleaned
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const match = normalized.match(/[a-zA-Z]/);
    if (match) {
      return match[0].toUpperCase();
    }
  }

  // Se não encontrar letra no termo limpo, recorre ao código de catálogo (ex: B-012 -> B)
  if (fallbackCode) {
    const codeMatch = fallbackCode.trim().toUpperCase().match(/^([A-Z])-/);
    if (codeMatch) return codeMatch[1];
  }

  // Recorre à letra informada se for válida
  if (fallbackLetter && /^[A-Za-z]$/.test(fallbackLetter.trim())) {
    return fallbackLetter.trim().toUpperCase();
  }

  return "A";
}

/**
 * Regra de Triagem, Autocorreção e Alocação Alfabética Automática do DIBE Artrelados.
 * 
 * Funcionamento:
 * 1. Analisa cada verbete e descobre sua letra inicial real a partir do termo.
 * 2. Se um verbete estiver com letra divergente ou número de outra letra, ele é
 *    automaticamente realocado para a sua gaveta alfabética correta.
 * 3. Dentro de cada letra (A até Z), organiza os verbetes em ordem alfabética estrita em português.
 * 4. Recalcula a numeração sequencial sem saltos nem repetições (A-001, A-002, B-001...).
 */
export function reallocateAndSortVerbetes(verbetes: Verbete[]): Verbete[] {
  if (!verbetes || verbetes.length === 0) return [];

  // Agrupa os verbetes por sua letra legítima apurada
  const byLetter: Record<string, Verbete[]> = {};

  verbetes.forEach((v) => {
    if (!v || !v.term) return;

    const trueLetter = extractTrueInitialLetter(v.term, v.code, v.letter);
    if (!byLetter[trueLetter]) {
      byLetter[trueLetter] = [];
    }
    byLetter[trueLetter].push(v);
  });

  const processed: Verbete[] = [];
  const seenIds = new Set<string>();

  // Ordena as letras de A a Z
  const letters = Object.keys(byLetter).sort((a, b) => a.localeCompare(b, "pt-BR"));

  letters.forEach((letter) => {
    const group = byLetter[letter];

    // Ordena alfabeticamente pelo termo limpo
    group.sort((a, b) => {
      const cleanA = cleanTermForSorting(a.term);
      const cleanB = cleanTermForSorting(b.term);
      return cleanA.localeCompare(cleanB, "pt-BR", { sensitivity: "base" });
    });

    // Numera sequencialmente (ex: A-001, A-002...)
    group.forEach((v, index) => {
      const sequentialCode = `${letter}-${String(index + 1).padStart(3, "0")}`;
      
      let safeId = v.id || `verbete-${letter}-${index + 1}`;
      if (seenIds.has(safeId)) {
        safeId = `${safeId}-dup-${index + 1}`;
      }
      seenIds.add(safeId);

      processed.push({
        ...v,
        id: safeId,
        letter,
        code: sequentialCode,
        dynamicCode: sequentialCode,
      });
    });
  });

  return processed;
}

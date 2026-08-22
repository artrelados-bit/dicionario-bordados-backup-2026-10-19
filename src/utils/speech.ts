/**
 * Utilitário de Síntese de Voz para o DIBE (Artrelados)
 * Suporte a múltiplos idiomas e controle inteligente de reprodução.
 */

export interface SpeechOptions {
  lang?: "pt-BR" | "en-US" | "es-ES";
  rate?: number; // 0.8 a 1.2
  pitch?: number;
}

export const isSpeechSupported = (): boolean => {
  return typeof window !== "undefined" && "speechSynthesis" in window;
};

export const stopSpeech = () => {
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
  }
};

export const speakText = (
  text: string,
  options: SpeechOptions = {},
  onStart?: () => void,
  onEnd?: () => void,
  onError?: () => void
): boolean => {
  if (!isSpeechSupported()) {
    console.warn("Síntese de voz não suportada neste navegador.");
    return false;
  }

  // Interrompe qualquer áudio anterior
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const lang = options.lang || "pt-BR";
  utterance.lang = lang;
  utterance.rate = options.rate || 0.95; // Velocidade ideal e tranquila para aprendizado
  utterance.pitch = options.pitch || 1.0;

  // Tenta selecionar a melhor voz disponível para o idioma
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(
    (v) => v.lang.toLowerCase() === lang.toLowerCase() || v.lang.startsWith(lang.split("-")[0])
  );
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onstart = () => {
    if (onStart) onStart();
  };

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    console.error("Erro na reprodução de voz:", e);
    if (onError) onError();
  };

  window.speechSynthesis.speak(utterance);
  return true;
};

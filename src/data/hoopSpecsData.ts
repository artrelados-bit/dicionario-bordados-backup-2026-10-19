export interface HoopSpec {
  id: string;
  brand: "Brother" | "Janome" | "Bernina" | "Singer" | "Tajima / Barudan (Industrial)" | "Genérico / Magnético";
  hoopName: string;
  nominalSize: string; // Ex: "13 x 18 cm (5x7 pol)"
  actualEmbroideryArea: string; // Ex: "130 x 180 mm"
  safetyMarginAdvice: string;
  bestUses: string;
  proWarning: string;
}

export const HOOP_SPECIFICATIONS: HoopSpec[] = [
  // BROTHER
  {
    id: "brother-10x10",
    brand: "Brother",
    hoopName: "Bastidor Pequeno SA442 / EF82 (100 x 100 mm)",
    nominalSize: "10 x 10 cm (4x4 pol)",
    actualEmbroideryArea: "100 x 100 mm exatos",
    safetyMarginAdvice: "Mantenha a matriz em no máximo 95 x 95 mm. Se a matriz tiver 100 mm cravados, o pé calcador pode roçar na borda plástica do aro nas esquinas.",
    bestUses: "Monogramas de bolso, logos no peito esquerdo de jalecos/camisas, chaveiros em sintético, paninhos de boca de bebê.",
    proWarning: "O bastidor mais estável e com menor vibração da máquina. Ideal para tecidos finos e letras pequenas que exigem precisão absoluta."
  },
  {
    id: "brother-13x18",
    brand: "Brother",
    hoopName: "Bastidor Médio SA443 / EF83 (130 x 180 mm)",
    nominalSize: "13 x 18 cm (5x7 pol)",
    actualEmbroideryArea: "130 x 180 mm",
    safetyMarginAdvice: "Trabalhe com matrizes de até 125 x 175 mm para evitar que o calcador bata nos parafusos de retenção superior.",
    bestUses: "O bastidor 'carro-chefe' do ateliê. Toalhas de lavabo e banho, apliques infantis médios, nomes compostos com arabescos.",
    proWarning: "Ao bordar toalhas pesadas neste bastidor, certifique-se de apoiar o excesso da toalha sobre a mesa para o peso não forçar o pantógrafo."
  },
  {
    id: "brother-16x26",
    brand: "Brother",
    hoopName: "Bastidor Grande SA445 / EF85 (160 x 260 mm)",
    nominalSize: "16 x 26 cm (6x10 pol)",
    actualEmbroideryArea: "160 x 260 mm (Máquinas PE810L, BP1430, BP1530, NQ1400)",
    safetyMarginAdvice: "Margem de segurança de 5 mm em toda a volta. Em matrizes de 250 mm de largura, sempre faça o comando 'Trace' antes de apertar o start.",
    bestUses: "Barrados de toalha de banho inteiros, costas de jaquetas, almofadas decorativas e montagens grandes de enxoval.",
    proWarning: "Por ter uma área grande, a entretela tende a ceder no centro (efeito tambor frouxo). Use sempre 2 camadas de entretela ou entretela 80g de alta gramatura."
  },
  {
    id: "brother-20x30",
    brand: "Brother",
    hoopName: "Bastidor Extra Grande SA446 / EF95 (200 x 300 mm)",
    nominalSize: "20 x 30 cm (8x12 pol)",
    actualEmbroideryArea: "200 x 300 mm (Máquinas BP2100, BP2150, BP3600, Stellaire, Luminaire)",
    safetyMarginAdvice: "Margem de 8 mm recomendada nas laterais longas.",
    bestUses: "Projetos 'In-the-Hoop' (peças prontas fechadas no bastidor como nécessaires e bolsas), colchas e mantas completas.",
    proWarning: "Requer mesa extensora nivelada obrigatoriamente para não puxar o braço mecânico para baixo."
  },

  // JANOME
  {
    id: "janome-14x14",
    brand: "Janome",
    hoopName: "Bastidor Quadrado SQ14b (140 x 140 mm)",
    nominalSize: "14 x 14 cm (5.5x5.5 pol)",
    actualEmbroideryArea: "140 x 140 mm",
    safetyMarginAdvice: "Tamanho máximo seguro de matriz: 135 x 135 mm.",
    bestUses: "Mandalas, brasões quadrados, guardanapos de mesa posta e detalhes de toalhas.",
    proWarning: "Por ser perfeitamente simétrico, a tensão do tecido se distribui por igual nos 4 lados, evitando distorções em círculos perfeitos."
  },
  {
    id: "janome-20x20",
    brand: "Janome",
    hoopName: "Bastidor Quadrado Grande SQ20b (200 x 200 mm)",
    nominalSize: "20 x 20 cm (8x8 pol)",
    actualEmbroideryArea: "200 x 200 mm (MC500E, MC550E, MC400E)",
    safetyMarginAdvice: "Trabalhe com até 192 x 192 mm. Use os grampos magnéticos auxiliares amarelos da Janome nas bordas.",
    bestUses: "Quadrados de patchwork bordado (quilt), capas de almofadas e mantas.",
    proWarning: "Nas máquinas Janome, nunca esqueça de acoplar as 4 presilhas magnéticas para evitar que o tecido escorregue nas laterais retas."
  },
  {
    id: "janome-20x28",
    brand: "Janome",
    hoopName: "Bastidor Retangular RE28b (200 x 280 mm)",
    nominalSize: "20 x 28 cm (8x11 pol)",
    actualEmbroideryArea: "200 x 280 mm",
    safetyMarginAdvice: "Matriz segura de até 195 x 272 mm.",
    bestUses: "Bordados de costas, barrados compridos e vestidos de festa.",
    proWarning: "Use sempre a alavanca rápida de aperto do bastidor Janome sem forçar com alicates; o ajuste fino deve ser feito suavemente no parafuso recartilhado."
  },
  {
    id: "janome-20x36",
    brand: "Janome",
    hoopName: "Bastidor Gigante RE36b (200 x 360 mm)",
    nominalSize: "20 x 36 cm (8x14 pol) - Janome MC550E",
    actualEmbroideryArea: "200 x 360 mm",
    safetyMarginAdvice: "Margem de segurança lateral de 10 mm. Obrigatório uso dos 8 grampos magnéticos perimetrais.",
    bestUses: "Barrados corridos de toalhas gigantes de praia e jogos de cama de casal/queen sem precisar re-bastonar.",
    proWarning: "A inércia de movimentação deste bastidor é grande; limite a velocidade da máquina para 600 ou 650 PPM ao bordar no campo máximo."
  },

  // INDUSTRIAL & MULTIAGULHAS
  {
    id: "industrial-tubular-redondo",
    brand: "Tajima / Barudan (Industrial)",
    hoopName: "Bastidores Tubulares Redondos (Aros de 12cm, 15cm e 18cm)",
    nominalSize: "Diâmetro 120 mm / 150 mm / 180 mm",
    actualEmbroideryArea: "100 mm / 130 mm / 160 mm de diâmetro útil",
    safetyMarginAdvice: "Manter pelo menos 15 mm de distância do anel plástico circular.",
    bestUses: "Peito esquerdo de camisetas, polos, mangas, pernas de calças e bolsos.",
    proWarning: "O bastidor redondo industrial é o campeão absoluto contra enrugamento: a tração é uniforme em 360 graus, sem cantos fracos."
  },
  {
    id: "industrial-cap-frame-bone",
    brand: "Tajima / Barudan (Industrial)",
    hoopName: "Bastidor Cilíndrico de Boné 270° / 360° (Cap Frame)",
    nominalSize: "Campo curvo de 60 a 70 mm de altura por até 280 mm de arco",
    actualEmbroideryArea: "Geralmente 65 mm de altura máxima x 150 mm de largura no frontal do boné",
    safetyMarginAdvice: "NUNCA passe de 65 mm de altura para o pé calcador não encavalar na copa rígida do boné.",
    bestUses: "Bordado frontal e lateral contínuo em bonés armados, bonés trucker e viseiras.",
    proWarning: "A cinta de aço externa deve ser montada na mesa gabarito de montagem com tração milimétrica para não criar 'bolha' na aba."
  },
  {
    id: "bastidor-magnetico-mighty",
    brand: "Genérico / Magnético",
    hoopName: "Bastidores Magnéticos (Mighty Hoop / Snap Hoop Monster)",
    nominalSize: "Formatos diversos (13x18, 16x26, 20x20, 20x30 cm)",
    actualEmbroideryArea: "Área interna livre entre os ímãs de neodímio",
    safetyMarginAdvice: "Mantenha a agulha a pelo menos 12 mm de distância da armação metálica imantada.",
    bestUses: "Bordados em peças com zíper, bolsos, couro legítimo, sintéticos e toalhas grossas sem deixar marca de bastidor.",
    proWarning: "Ímãs de neodímio são extremamente fortes! Mantenha longe de cartões de crédito, relógios e marcapassos cardíacos."
  }
];

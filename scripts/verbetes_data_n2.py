# -*- coding: utf-8 -*-

VERBETES_N_PART12 = [
  {
    "id": "n-082-nivelamento-estroboscopico-de-sincronismo-da-agulha-com-a-lancadeira",
    "code": "N-082",
    "term": "Nivelamento Estroboscópico de Sincronismo da Agulha com a Lançadeira (Stroboscopic Hook Timing Alignment)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego strobos (giro / turbilhão) e skopein (observar / olhar). Instrumento óptico que 'congela' o movimento de peças girando em alta velocidade.",
    "summary": "Método metrológico avançado de inspeção e calibração dinâmica que utiliza luz estroboscópica de alta frequência para visualizar a formação da laçada e a passagem da ponta da lançadeira com a máquina girando a 1.000 PPM.",
    "definition": "Nivelamento Estroboscópico de Sincronismo da Agulha com a Lançadeira (Dynamic Stroboscopic Hook Timing & Loop Capture Inspection) é o procedimento técnico de diagnóstico de precisão que emprega lâmpadas estroboscópicas de LED pulsado sincronizadas com o encoder do eixo principal da máquina de bordar. Ao emitir micro-pulsos de luz (de 2 a 5 microssegundos) exatamente no mesmo grau angular do ciclo mecânico (ex: 198° a 203°), a lançadeira em rotação contínua parece estar completamente imóvel aos olhos do técnico, permitindo medir a distância real de folga entre a ponta da lançadeira e o rebaixo da agulha (0,05 mm a 0,10 mm) sob as forças inerciais e de deflexão reais de costura rápida.",
    "technicalDetails": "Frequência de pulso estroboscópico: 10 a 20 Hz (sincronizado a 600 - 1.200 RPM). Duração do pulso óptico: 3 μs (microssegundos). Ângulo de sincronismo nominal: 198° a 204° (conforme modelo Tajima, Barudan, SWF ou Brother). Folga dinâmica ponta-agulha: 0,05 mm a 0,08 mm. Altura de subida da barra de agulha (laçada): 1,8 mm a 2,2 mm.",
    "construction": [
      "Lâmpada estroboscópica digital portátil com gatilho óptico/magnético de sincronismo",
      "Sensor indutivo acoplado ao eixo principal ou conexão direta na porta de serviço da placa CNC",
      "Lupa de precisão óptica 10x com iluminação direta para medição de microfolgas",
      "Calibre de lâminas de espessura de precisão antimagnético (0,05 mm a 0,20 mm)",
      "Chave T de boca articulada para afrouxar os parafusos de trava da engrenagem da lançadeira"
    ],
    "howItWorks": [
      "1. Remove-se a chapa de agulha e a tampa frontal inferior para expor a lançadeira rotativa.",
      "2. Conecta-se o sensor do estroboscópio ao eixo do motor ou sincroniza-se a frequência pelo painel.",
      "3. Coloca-se a máquina para rodar em teste de velocidade contínua a 800 PPM.",
      "4. Aponta-se o feixe de luz estroboscópica para o centro da lançadeira rotativa em movimento.",
      "5. A ponta da lançadeira 'congela' visualmente no ar exatamente no momento em que passa atrás da agulha.",
      "6. O técnico observa se a laçada de linha está abrindo perfeitamente e se a ponta passa no centro do rebaixo.",
      "7. Se houver desvio angular ou folga excessiva, a máquina é parada e o ponto de sincronismo é ajustado com precisão micrométrica."
    ],
    "mainTypes": [
      "Inspeção Estroboscópica em Chão de Fábrica (Auditoria de qualidade em máquinas industriais multicabeças)",
      "Sincronismo de Alta Velocidade para Bonés Pesados (Análise de deflexão de agulha em tecidos duros)",
      "Diagnóstico de Quebras Intermitentes de Linha (Identificação de vibrações em eixos principais gastos)"
    ],
    "characteristics": [
      "Visualização real do comportamento da linha e da agulha em velocidade plena de 1.000 PPM",
      "Eliminação total do erro de ajuste estático manual (que não considera a flexão da agulha em alta rotação)",
      "Diagnóstico instantâneo de lançadeiras com desgaste prematuro ou folga de engrenagem",
      "Máxima confiabilidade operacional para produções pesadas ininterruptas de 24 horas"
    ],
    "limitations": [
      "Exige equipamento estroboscópico profissional e treinamento técnico qualificado",
      "Ambiente de medição deve ter iluminação externa reduzida para melhor contraste óptico",
      "Requer cuidados rigorosos de segurança para não encostar os dedos em partes móveis em rotação"
    ],
    "numberingSystem": [
      "Ângulo de Captura: 200° a 202°",
      "Folga de Passagem: 0,05 mm a 0,08 mm",
      "Subida de Barra (Timing): 2,0 mm"
    ],
    "advantages": [
      "✔ Zera pontos pulados em bordados difíceis como bonés estruturados, jaquetas de couro e neoprene",
      "✔ Evita que a ponta da lançadeira raspe na agulha e perca a afiação prematuramente",
      "✔ Padroniza o sincronismo perfeito de todas as cabeças em máquinas de 4, 6, 8 ou 12 cabeçotes"
    ],
    "commonErrors": [
      "❌ Regular o sincronismo da máquina 'no olho' girando o volante devagarzinho e achar que vai se comportar igual a 1.000 PPM",
      "❌ Deixar a folga muito apertada (< 0,02 mm), fazendo a agulha bater na lançadeira em alta velocidade",
      "❌ Tentar mexer nos parafusos da lançadeira com a máquina ligada"
    ],
    "voceSabia": "A estroboscopia foi inventada em 1832 pelo físico austríaco Simon Stampfer; na engenharia têxtil moderna, o mesmo método usado para estudar as asas de beija-flores em pleno voo é usado para sincronizar a agulha da sua máquina de bordar!",
    "curiosidadeTecnica": "A 1.000 PPM, a ponta da lançadeira passa atrás da agulha a uma velocidade linear de mais de 45 km/h; a janela de tempo disponível para capturar a laçada de linha é de apenas 0,0018 segundo (1,8 milissegundo).",
    "dicaArtrelados": "Se a sua máquina está pulando pontos somente quando passa de 800 PPM, mas borda perfeita em velocidade baixa (500 PPM), o problema não é a linha: é a lançadeira que está com o sincronismo ligeiramente atrasado em 2 graus. Chame um técnico de confiança para fazer a conferência do ponto de laçada!",
    "comparisonTable": {
      "headers": ["Método de Ajuste", "Condição de Medição", "Precisão Real a 1.000 PPM", "Detecção de Vibração Dinâmica"],
      "rows": [
        ["Ajuste Estroboscópico", "Em rotação real de produção (800-1.000 PPM)", "Altíssima (± 0,01 mm real)", "Total (mostra flexões e deflexões)"],
        ["Ajuste Manual no Volante", "Estático (máquina parada com a mão)", "Média (desconsidera inércia e folga)", "Nula (não vê o comportamento em velocidade)"],
        ["Ajuste por Tentativa e Erro", "Sem medição metrológica", "Baixa e instável", "Nula"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-calibração: Estabilidade total até 1.000 - 1.200 PPM",
      "needleType": "DBxK5 SAN 1 (Haste reforçada contra deflexão lateral)",
      "stabilizer": "N/A (Manutenção metrológica)",
      "threadTension": "Padrão de trabalho",
      "density": "N/A"
    },
    "applications": [
      "Calibração de precisão em fábricas e ateliês de alta produtividade",
      "Equalização de cabeçotes em máquinas industriais multicabeças",
      "Preparação de máquinas para bordados pesados em bonés New Era e calçados",
      "Auditoria pós-revisão geral ou substituição de lançadeiras desgastadas"
    ],
    "troubleshootingTips": [
      "Se a laçada de linha parecer amassada ou deformada na luz estroboscópica, verifique a tensão da mola compensadora",
      "Troque a agulha por uma nova e reta antes de proceder a qualquer ajuste de lançadeira",
      "Mantenha os parafusos da engrenagem da lançadeira travados com torque uniforme"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Lançadeira Rotativa",
      "Sincronismo de Barra de Agulha",
      "Ponto Pulado",
      "Manutenção Preventiva"
    ],
    "tags": [
      "n-082",
      "estroboscopico",
      "sincronismo",
      "lancadeira rotativa",
      "timing",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "KOBAN Rotary Hooks Precision Timing & Dynamic Stroboscopic Guide. Osaka, 2021.",
      "PARRISH, Gail. High-Speed Rotary Hook Metrology and Dynamic Optical Synchronization. Cincinnati, 2022."
    ],
    "practicalExercise": "Abaixe a barra de agulha até o ponto mais baixo girando o volante devagar com a máquina desligada e a chapa aberta. Suba o volante cerca de 2 mm: veja como a linha de cima forma uma barriguinha (a laçada) no rebaixo da agulha. É exatamente ali que a pontinha da lançadeira passa para laçar a linha!",
    "quickSummary": "Uso de luzes que piscam rápido para enxergar o encontro da agulha com a lançadeira sem parar a máquina.",
    "beginnerExplanation": "É como aquelas câmeras de super câmera lenta que mostram uma gota d'água caindo: com uma luz especial piscante, o mecânico consegue enxergar a lançadeira pegando a linha como se estivesse parada no ar, garantindo que a máquina nunca erre um ponto!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-083-normatizacao-de-cores-de-referencia-e-tolerancia-delta-e-no-bordado",
    "code": "N-083",
    "term": "Normatização de Cores de Referência e Tolerância Delta E no Bordado (Delta E Color Tolerance & Spectrophotometry)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Design, Teoria & Arte",
    "grammarClass": "Substantivo feminino composto.",
    "origin": "Do grego delta (diferença matemática Δ) e do alemão Empfindung (sensação visual de cor). Norma internacional de colorimetria CIE Lab.",
    "summary": "Controle espectrofotométrico e tolerância metrológica de desvio cromático (Delta E < 1,0) entre os fios de bordado e as paletas corporativas oficiais (Pantone / CMYK) de marcas multinacionais.",
    "definition": "Normatização de Cores de Referência e Tolerância Delta E no Bordado (Spectrophotometric Color Matching & Delta E Tolerance Standards) é o sistema científico de medição e controle de qualidade cromática aplicado à indústria do bordado corporativo e de alta moda. Utilizando espectrofotômetros de esfera integradora calibrados sob iluminante padrão D65 (luz do dia a 6.500K), mede-se o desvio numérico (ΔE / Delta E) nas coordenadas L*a*b* entre a linha de poliéster utilizada no ateliê e o padrão Pantone oficial do cliente. Em produções industriais homologadas, a variação não pode exceder ΔE = 1,2, garantindo que uniformes de 50.000 funcionários fabricados em datas e lotes diferentes tenham cores rigorosamente idênticas.",
    "technicalDetails": "Equação de cálculo: CIE DE2000 (a mais precisa para fibras têxteis). Iluminante padrão de teste: D65 / Ângulo do observador: 10°. Tolerância máxima corporativa: ΔE ≤ 1,0 (imperceptível ao olho) a ΔE ≤ 1,5 (aceitável comercialmente). Geometria de medição óptica: d/8° com filtro UV incluso.",
    "construction": [
      "Espectrofotômetro têxtil portátil com abertura de medição de 4 a 8 mm (X-Rite ou Konica Minolta)",
      "Cabine de luz de avaliação visual com fontes D65 (luz do dia), TL84 (loja) e Incandescente A",
      "Tabela de conversão espectral oficial dos principais fabricantes de linha (Madeira, Polyneon, Isacord, Coats)",
      "Amostras de controle de lote (*lab dips*) bordadas em ponto tatami plano sobre fundo neutro",
      "Software de controle de qualidade colorimétrica com relatórios de aprovação para auditoria de marcas"
    ],
    "howItWorks": [
      "1. O cliente fornece o código da cor oficial da marca (ex: Pantone 286 C - Azul Royal).",
      "2. Borda-se um quadrado de teste de 30 x 30 mm em ponto tatami uniforme com a linha candidata.",
      "3. Posiciona-se o sensor do espectrofotômetro sobre a amostra bordada na área plana.",
      "4. O aparelho realiza a leitura espectral e calcula as coordenadas cromáticas L* (luminosidade), a* (vermelho/verde) e b* (amarelo/azul).",
      "5. O software compara os valores com o padrão Pantone original e exibe o valor de Delta E.",
      "6. Se ΔE for ≤ 1,0, o lote de linha é aprovado com certificado técnico e liberado para a produção.",
      "7. Se ΔE for > 1,5, testa-se a linha de outro fabricante até atingir a exatidão exigida pelo contrato corporativo."
    ],
    "mainTypes": [
      "Homologação de Uniformes de Redes de Fast Food e Bancos (Onde a cor da marca é protegida por registro de patente)",
      "Controle de Variação de Lote de Tingimento (Inspeção de diferença de cor entre cones de caixas diferentes)",
      "Avaliação de Metamerismo Têxtil (Garantia de que a cor não mude quando vista sob luz de lâmpada fluorescente)"
    ],
    "characteristics": [
      "Eliminação total do 'achismo' subjetivo de cor entre o cliente e o bordador",
      "Padronização técnica de nível industrial de marcas globais (McDonald's, Coca-Cola, Petrobras)",
      "Detecção precoce de alterações de cor provocadas por lavagens industriais ou exposição solar",
      "Garantia documental de conformidade técnica para grandes licitações e exportações de vestuário"
    ],
    "limitations": [
      "O brilho trilobal da linha reflete luz em múltiplos ângulos, exigindo medições médias cruzadas",
      "Equipamentos de espectrofotometria possuem custo de aquisição profissional",
      "Cores fluorescentes e fios metálicos possuem medições colorimétricas com regras especiais"
    ],
    "numberingSystem": [
      "ΔE < 0,5: Diferença imperceptível ao olho humano",
      "ΔE 0,5 a 1,5: Tolerância de padrão corporativo rigoroso",
      "ΔE > 2,0: Diferença nítida de cor visível a qualquer pessoa"
    ],
    "advantages": [
      "✔ Garante contratos vultosos com grandes empresas e franquias multinacionais sem risco de devolução",
      "✔ Elimina discussões subjetivas com clientes sobre 'esse tom de azul tá meio diferente do ano passado'",
      "✔ Agrega status de ateliê técnico de excelência metrológica com certificação de qualidade"
    ],
    "commonErrors": [
      "❌ Escolher cor de linha olhando na tela do computador com monitor descalibrado",
      "❌ Avaliar cor de linha sob lâmpada amarela de teto comum de tungstênio",
      "❌ Misturar cones de lotes de tingimento diferentes em um mesmo pedido de 100 camisas"
    ],
    "voceSabia": "A cor 'Azul Tiffany' e o 'Amarelo Minion' são cores registradas mundialmente no Instituto Pantone com tolerância Delta E de laboratório; se um bordado desviar mais de 0,8 no Delta E, o produto é rejeitado imediatamente pelas marcas!",
    "curiosidadeTecnica": "O olho humano possui 3 tipos de cones receptores de cor na retina que enxergam cerca de 10 milhões de tonalidades; porém, o cansaço visual após 20 minutos reduz a capacidade de discernimento em 40%, enquanto o espectrofotômetro mantém precisão de 0,01 durante 24 horas ininterruptas.",
    "dicaArtrelados": "Sempre compre uma cartela de cores física original do fabricante da sua linha de preferência (aquela que vem com amostras reais de fios de poliéster enrolados no papelão): ela é o seu maior instrumento de vendas! Quando o cliente pedir 'um azul marinho', mostre a cartela sob luz natural e anote o número exato do cone no pedido para nunca mais errar!",
    "comparisonTable": {
      "headers": ["Método de Avaliação", "Precisão Cromática", "Risco de Erro", "Aceitação Corporativa"],
      "rows": [
        ["Espectrofotômetro (Delta E)", "Científica (ΔE < 1,0 exato)", "Zero (medido numericamente)", "100% (Padrão internacional ISO/AATCC)"],
        ["Cartela Física sob Luz D65", "Alta (visual comparativo direto)", "Muito Baixo", "Amplamente aceito"],
        ["Comparação na Tela do PC", "Baixíssima (telas variam até ΔE 8,0)", "Altíssimo (devolução certa)", "Rejeitado por grandes marcas"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Padrão de produção",
      "needleType": "75/11 SES de alta precisão",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Superior: 110 gf / Bobina: 22 gf",
      "density": "0.40 mm plano para amostras de teste"
    },
    "applications": [
      "Produção de uniformes corporativos para companhias aéreas, bancos e redes de lojas",
      "Bordados em peças de coleções sazonais de marcas de moda internacional",
      "Homologação de fardamentos oficiais das forças armadas e órgãos públicos",
      "Bordados promocionais de grandes patrocinadores esportivos e eventos mundiais"
    ],
    "troubleshootingTips": [
      "Se houver dúvida entre duas tonalidades de linha, borde uma pequena amostra de 2 cm lado a lado no próprio tecido da peça",
      "Avalie as cores sempre perto de uma janela com luz do dia natural indireta",
      "Anote o número do lote de fabricação que vem impresso no fundo do carretel de linha"
    ],
    "relatedTerms": [
      "Design, Teoria & Arte",
      "Numeração Pantone vs. Paleta de Linhas",
      "Linhas & Fios",
      "Linha de Poliéster Trilobal",
      "Iluminação Operacional no Ateliê"
    ],
    "tags": [
      "n-083",
      "delta e",
      "colorimetria",
      "pantone",
      "espectrofotometro",
      "design teoria e arte",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "CIE International Commission on Illumination. Colorimetry & Delta E 2000 Standards. Vienna, 2021.",
      "PARRISH, Gail. Industrial Color Management, Spectrophotometry and Thread Matching for Global Brands. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue três cones de linha de tons de azul muito parecidos de marcas diferentes. Borde um quadrado de 20 x 20 mm com cada um no mesmo retalho de tecido branco. Leve a amostra para a luz do sol e depois olhe sob a luz da lâmpada do quarto: veja como a luz muda a percepção das cores e entenda na prática a importância da luz certa!",
    "quickSummary": "Controle matemático de cores para garantir que a linha do bordado seja exatamente igual à cor da logomarca do cliente.",
    "beginnerExplanation": "O Delta E é como uma régua de cientista que mede se a cor da linha é 100% igualzinha à cor do logotipo da empresa: com ele, você tem certeza de que o azul da camisa bordada hoje vai ser idêntico ao azul da camisa que você bordar daqui a um ano!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-084-neoprene-microperfurado-e-malhas-spacer-3d-respiraveis",
    "code": "N-084",
    "term": "Neoprene Microperfurado e Malhas Spacer 3D Respiráveis (Perforated Neoprene & 3D Air Mesh Stabilization)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Tipos de Tecidos",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego neos (novo) e pren (derivado de polímero de cloropreno) e do inglês spacer (tecido de malha dupla com camada interna de espaçamento por monofilamentos tridimensionais).",
    "summary": "Metodologia de estabilização estruturada para bordar em tecidos técnicos acolchoados e respiráveis de estrutura alveolar 3D (tênis, mochilas, coletes e acessórios esportivos) sem esmagar a câmara de ar.",
    "definition": "Neoprene Microperfurado e Malhas Spacer 3D (Breathable Perforated Neoprene & 3D Air Mesh Embroidery) é a técnica de preparação e digitalização voltada para tecidos sanduíche compostos por duas superfícies têxteis externas unidas por uma camada intermediária de microfilamentos verticais de poliéster que criam um colchão de ar compressível de 2,0 mm a 6,0 mm de espessura. Como a pressão excessiva do bastidor ou pontos muito tensos colapsam a estrutura elástica e criam 'vales' permanentes de afundamento, o processo exige bastidores magnéticos com alívio perimétrico, entretelas termofusíveis de malha ou recorte PolyMesh e películas de topo hidrossolúveis para evitar que os pontos mergulhem nos microfuros de ventilação.",
    "technicalDetails": "Espessura do tecido Spacer: 2,5 mm a 5,0 mm. Densidade de perfuração: 120 a 250 microfuros/dm². Agulha recomendada: 75/11 ou 80/12 SES (Ponta Bola). Compensação de repuxo: 0,45 mm a 0,55 mm. Densidade da matriz: 0,44 mm a 0,48 mm.",
    "construction": [
      "Tecido Spacer 3D acolchoado ou borracha de Neoprene com perfurações a laser",
      "Entretela de recorte flexível PolyMesh 60 g/m² ou entretela termocolante de malha",
      "Película plástica hidrossolúvel de topo (PVA 25 mícrons) para nivelamento dos furos",
      "Bastidor magnético de pressão suave ou bastidor tradicional com acolchoamento de feltro nos aros",
      "Linha de poliéster 40wt de alta tenacidade e agulha ponta bola de haste reforçada"
    ],
    "howItWorks": [
      "1. Aplica-se a entretela PolyMesh no avesso com adesivo spray reposicionável sem pressionar a espuma.",
      "2. O tecido é encaixado no bastidor magnético mantendo a sua espessura original sem ser esmagado.",
      "3. Coloca-se o filme hidrossolúvel transparente sobre a área a ser bordada.",
      "4. A máquina executa uma costura perimétrica de alinhamento com pontos largos (3,5 mm) para travar as camadas.",
      "5. A matriz aplica pontos satim e tatami com compensação de 0,50 mm e underlays abertos.",
      "6. Ao terminar, a peça é retirada do bastidor e o colchão de ar ao redor recupera 100% da sua altura.",
      "7. Remove-se a película solúvel com um pano úmido, deixando o bordado perfeito e flutuante sobre a malha esportiva."
    ],
    "mainTypes": [
      "Malha Spacer 3D para Cabedais de Tênis e Calçados Esportivos (Alta resistência à abrasão)",
      "Neoprene Microperfurado para Suportes Ortopédicos e Cintas Esportivas (Flexibilidade e ventilação)",
      "Tecido Alveolar para Alças de Mochila e Costas de Coletes Táticos (Acolchoamento e dissipação de suor)"
    ],
    "characteristics": [
      "Preservação integral da capacidade de amortecimento e circulação de ar do tecido técnico",
      "Eliminação definitiva de marcas profundas de aro de bastidor (*hoop burns*) na espuma",
      "Bordado nítido e plano sem sumir dentro dos furos de ventilação do material",
      "Toque interno confortável que não irrita a pele do usuário em contato com o suor"
    ],
    "limitations": [
      "Nunca utilizar bastidores de aro plástico com parafuso apertado com alicate que amassa a câmara 3D",
      "Não usar agulhas cortantes de ponta faca (LL ou S) que cortam os filamentos verticais de sustentação",
      "Evitar blocos de tatami pesados e densos que transformam o tecido macio em uma chapa rígida"
    ],
    "numberingSystem": [
      "Espessura Típica: 3,0 mm a 4,0 mm",
      "Compensação de Repuxo: 0,50 mm",
      "Densidade Recomendada: 0,46 mm"
    ],
    "advantages": [
      "✔ Permite bordar em tênis esportivos, mochilas de corrida e peças ortopédicas de alto valor agregado",
      "✔ Garante acabamento impecável sem deformar o acolchoado fofo do produto",
      "✔ Abre as portas do ateliê para o lucrativo mercado de produtos esportivos e de fisioterapia"
    ],
    "commonErrors": [
      "❌ Apertar o bastidor com força bruta, deixando uma marca circular amassada que nunca mais volta",
      "❌ Borda direto nos furinhos sem plástico por cima, fazendo as letras ficarem cheias de dentes e falhas",
      "❌ Usar linha de bobina muito apertada, puxando o tecido para dentro da chapa de agulha"
    ],
    "voceSabia": "Os tecidos Spacer 3D foram desenvolvidos na Alemanha para substituir a espuma de poliuretano dos assentos de automóveis e naves espaciais, pois são 100% recicláveis e permitem a passagem livre de ar, mantendo o corpo até 3°C mais fresco durante a prática de esportes!",
    "curiosidadeTecnica": "Um tecido Spacer de 4 mm possui cerca de 80 microfilamentos verticais por centímetro quadrado que agem como 'micro-molas' mecânicas; se a agulha errada cortar mais de 20% desses filamentos, o tecido perde a capacidade elástica de recuperação.",
    "dicaArtrelados": "Ao bordar em tecidos fofos furadinhos de mochila ou tênis (Spacer 3D), coloque sempre um plástico hidrossolúvel por cima e use bastidor magnético: o bordado fica retinho, as letras não afundam nos furinhos e o tecido não fica com nenhuma marca de aro amassado!",
    "comparisonTable": {
      "headers": ["Propriedade", "Malha Lisa Comum", "Neoprene Perfurado / Spacer 3D"],
      "rows": [
        ["Estrutura Interna", "Plana bidimensional", "Colchão tridimensional com câmara de ar"],
        ["Tipo de Bastidor Ideal", "Bastidor convencional de aro", "Bastidor Magnético ou com Alívio"],
        ["Proteção de Topo", "Opcional", "Obrigatória (Filme PVA para tampar os furos)"],
        ["Compensação de Repuxo", "0,30 mm", "0,50 mm (Alta para compensar compressão)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "650 - 750 PPM",
      "needleType": "75/11 ou 80/12 SES (Ponta Bola Leve) com haste reforçada",
      "stabilizer": "Entretela PolyMesh 60 g/m² (fundo) + Filme PVA 25μm (topo)",
      "threadTension": "Superior: 105 gf / Bobina: 20 a 22 gf (Tensão aliviada)",
      "density": "0.46 mm com pontos de suporte em zigue-zague leve"
    },
    "applications": [
      "Alças acolchoadas de mochilas executivas, bolsas de laptop e capas de instrumentos",
      "Cabedais e linguetas de tênis de corrida e chuteiras personalizadas",
      "Joelheiras, tornozeleiras e coletes ortopédicos de compressão térmica",
      "Capas de banco automotivo esportivo e fones de ouvido gamer"
    ],
    "troubleshootingTips": [
      "Se o aro do bastidor deixar uma marca leve, passe um vaporizador de roupas suave para reativar as micro-molas da espuma",
      "Aumente a altura do calcador em 0,5 mm para não esmagar o tecido acolchoado durante o movimento da agulha",
      "Utilize linhas de poliéster resistentes ao atrito constante do uso esportivo"
    ],
    "relatedTerms": [
      "Tipos de Tecidos",
      "Neoprene",
      "Bastidores Magnéticos",
      "Película Hidrossolúvel",
      "Compensação de Repuxo"
    ],
    "tags": [
      "n-084",
      "neoprene perfurado",
      "spacer 3d",
      "air mesh",
      "tenis e mochilas",
      "tipos de tecidos",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TECHNICAL Textiles International. 3D Spacer Fabrics, Performance Knitwear & Embroidery Stabilizers. Oxford, 2021.",
      "PARRISH, Gail. Activewear & Compression Foam Embroidery: Hoop Burn Prevention and Mesh Engineering. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um pedaço de malha de tênis furadinha (Spacer 3D). Coloque um plástico solúvel por cima e monte no bastidor sem apertar demais. Borde o seu nome com fonte satim grossa de 5 mm e compensação de 0,50 mm. Retire o plástico com água e veja como as letras ficam suspensas e nítidas em cima dos furinhos!",
    "quickSummary": "Como bordar em tecidos fofos e furadinhos de tênis e mochilas sem amassar a espuma e sem sumir letras.",
    "beginnerExplanation": "O tecido Spacer é aquele tecido fofinho e cheio de buraquinhos de ar usado em alças de mochila e tênis esportivos. Como ele parece uma almofadinha, a gente coloca um plástico solúvel por cima para a linha não cair dentro dos buraquinhos e prende sem apertar muito para não amassar a espuma!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-085-nivelamento-de-pressao-dos-roletes-alimentadores-de-linha-ativa",
    "code": "N-085",
    "term": "Nivelamento de Pressão dos Roletes Alimentadores de Linha Ativa (Active Thread Feeding Roller Pressure)",
    "letter": "N",
    "level": "Avançado 🔴",
    "category": "Mecânica & Manutenção",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim libellare (nivelar), pressura (aperto mecânico) e do inglês Active Thread Feed (tecnologia de entrega ativa de comprimento exato de linha inventada pela Melco/Amaya).",
    "summary": "Calibração e ajuste de pressão dos microrroletes de borracha motorizados que dispensam o comprimento exato de fio milímetro a milímetro em sistemas de bordado sem discos de tensão convencionais.",
    "definition": "Nivelamento de Pressão dos Roletes Alimentadores de Linha Ativa (Active Thread Feed / ATF Roller Pressure & Pinch Dynamics) é o protocolo mecânico e eletrônico de calibração dos módulos de alimentação ativa de linha que substituem os tradicionais pratos de tensão por fricção por roletes acionados por micro-motores de passo. O computador da máquina calcula antecipadamente o comprimento exato de linha superior necessário para o próximo ponto (com base na espessura do tecido e comprimento do salto) e gira o rolete para entregar exatamente aquela metragem sem exercer tração resistiva sobre o tecido, eliminando franzimentos em sedas finas e malhas.",
    "technicalDetails": "Precisão de entrega de linha: ± 0,01 mm por ponto. Pressão de pinçamento dos roletes: 120 a 180 gramas-força (mola calibrada). Dureza da borracha do rolete: 65 Shore A (Poliuretano de alta aderência). Algoritmo de cálculo: Espessura do Material + Distância Vetorial X/Y + Coeficiente de Folga de Laçada.",
    "construction": [
      "Roletes de tração em aço com anéis de poliuretano retificado de alto coeficiente de atrito",
      "Micro-motores de passo individuais de alta resolução angular para cada agulha",
      "Molas calibradas de compressão para regulagem da pressão de contato dos roletes",
      "Sensor óptico ou de torque para detecção de deslizamento indevido da linha (*slip detection*)",
      "Software de controle com ajuste dinâmico de número de alimentação (*Material Thickness Feed Value*)"
    ],
    "howItWorks": [
      "1. A linha passa entre os dois micro-roletes de borracha no cabeçote superior da máquina.",
      "2. O operador define no painel a espessura aproximada do tecido (ex: 2 a 4 pontos de alimentação).",
      "3. O software da máquina lê o comando do próximo ponto da matriz no arquivo digital.",
      "4. No momento em que a agulha desce, o motor do rolete gira o ângulo exato para empurrar 4,2 mm de linha.",
      "5. A linha entra na lançadeira completamente relaxada, formando a laçada perfeita sem puxar o tecido.",
      "6. O estica-fio sobe recolhendo a sobra e assentando o ponto de forma plana e suave.",
      "7. Tecidos ultraleves como seda, musselina e malhas finas não sofrem nenhum enrugamento ao redor do bordado."
    ],
    "mainTypes": [
      "Sistema de Alimentação Ativa Integrada (Padrão Melco EMT16X / Amaya Acti-Feed)",
      "Alimentadores de Linha Digitais Industriais (Sistemas adaptados para tecidos técnicos aeroespaciais)",
      "Módulos Eletrônicos de Tensão Assistida por Sensor de Carga (Tajima / Barudan Intelligent Tension)"
    ],
    "characteristics": [
      "Eliminação definitiva dos botões manuais de regulagem de tensão em cada cor de agulha",
      "Fim do enrugamento e franzimento em malhas, sedas, tactel e tecidos elásticos",
      "Formação de pontos 100% idênticos em todas as agulhas do cabeçote sem ajuste individual",
      "Redução drástica do atrito da linha, permitindo operar em velocidades extremas (> 1.200 PPM)"
    ],
    "limitations": [
      "Exige que os roletes estejam 100% limpos de resíduos de silicone, óleos ou ceras",
      "A borracha dos roletes se desgasta com o uso contínuo e precisa ser substituída a cada 2 a 3 anos",
      "Ajuste errado da espessura do material no painel pode gerar pontos soltos ou laçadas frouxas"
    ],
    "numberingSystem": [
      "Ajuste Típico de Alimentação: 2 a 5 pontos",
      "Tolerância de Comprimento: ± 0,02 mm",
      "Velocidade de Trabalho: Até 1.500 PPM"
    ],
    "advantages": [
      "✔ Borda em tecidos super difíceis (seda pura, tule e cetim) com acabamento perfeitamente liso e sem franzir",
      "✔ Poupa horas de tempo de operador que não precisa ficar girando botões de tensão a cada troca de linha",
      "✔ Aumenta a velocidade real de produção do ateliê em mais de 25%"
    ],
    "commonErrors": [
      "❌ Deixar óleo de máquina escorrer nos roletes de borracha, fazendo a linha escorregar sem girar o motor",
      "❌ Colocar espessura muito alta no painel (ex: valor 12) para bordar camisa fina, deixando a linha toda solta",
      "❌ Limpar os roletes com solventes agressivos (tíner ou acetona) que derretem a borracha de poliuretano"
    ],
    "voceSabia": "A tecnologia de alimentação ativa de linha foi desenvolvida por engenheiros de robótica espacial que precisavam costurar os isolamentos térmicos dos satélites com fios ultrafinos de quartzo que quebravam com a menor tensão mecânica de molas comuns!",
    "curiosidadeTecnica": "Em sistemas de tensão passiva por mola, a tensão varia em até 40% conforme o diâmetro do carretel de linha vai diminuindo do começo ao fim do cone; na alimentação ativa por rolete, a variação de entrega de linha é menor que 0,5% do primeiro ao último ponto.",
    "dicaArtrelados": "Se a sua máquina possui sistema de alimentação ativa (como as máquinas Melco), limpe os roletes a cada 3 meses usando um cotonete umedecido em álcool isopropílico 99%: isso retira a oleosidade e garante que a borracha puxe a linha com firmeza total e zero deslizamento!",
    "comparisonTable": {
      "headers": ["Característica", "Tensão Convencional por Molas e Discos", "Alimentação Ativa por Roletes (ATF)"],
      "rows": [
        ["Princípio de Funcionamento", "Fricção mecânica passiva (linha é puxada)", "Motor dispensa o comprimento exato de linha"],
        ["Franzimento em Tecidos Finos", "Frequente (exige muita entretela)", "Praticamente nulo (tecido fica liso natural)"],
        ["Ajuste de Operador", "Manual agulha por agulha em botões giratórios", "Automático pelo computador da máquina"],
        ["Velocidade de Costura", "750 a 950 PPM", "1.100 a 1.500 PPM estável"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "Pós-nivelamento: 1.000 a 1.300 PPM com estabilidade plena",
      "needleType": "DBxK5 75/11 ou 70/10 conforme o tecido",
      "stabilizer": "Leve (o sistema reduz a necessidade de entretelas pesadas)",
      "threadTension": "Gerenciada dinamicamente pelo computador (ATF)",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Bordados em camisas finas de seda, cetim, cambraia e tecidos de alfaiataria",
      "Produções em altíssima velocidade em confecções de grande porte",
      "Camisetas leves de poliamida e roupas de bebê que exigem toque macio",
      "Bordados em materiais tecnológicos de espessura variável no mesmo desenho"
    ],
    "troubleshootingTips": [
      "Se a linha estiver frouxa no avesso, diminua o valor de alimentação no painel em 1 ou 2 pontos",
      "Se a linha estiver arrebentando frequentemente, aumente o valor de espessura do material no software",
      "Inspecione visualmente se não há sulcos de desgaste cavados na borracha dos roletes"
    ],
    "relatedTerms": [
      "Mecânica & Manutenção",
      "Nivelamento de Tensão de Linha",
      "Servomotores do Pantógrafo",
      "Manutenção Preventiva",
      "Linhas & Fios"
    ],
    "tags": [
      "n-085",
      "alimentacao ativa",
      "acti feed",
      "roletes de linha",
      "tensao digital",
      "mecanica e manutencao",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MELCO International Technical Service Manual. Acti-Feed™ Dynamics and Roller Pressure Calibration. Denver, 2021.",
      "PARRISH, Gail. Active Thread Delivery Systems and Dynamic Roller Kinematics in High-Speed Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Se tiver acesso a uma máquina com alimentação ativa, borde um círculo de 4 cm em um pedaço de tecido bem fininho (como voil ou cetim). Observe como o tecido ao redor do bordado fica 100% liso, sem puxar nem fazer nenhuma ruga, porque a linha foi entregue sem puxar o tecido!",
    "quickSummary": "Roletes inteligentes de borracha que entregam a quantidade exata de linha sem puxar o tecido fino.",
    "beginnerExplanation": "Em vez de apertar a linha com molas, essa tecnologia tem pequenos rolinhos de borracha movidos a motor que entregam a linha na medida exata que a agulha precisa para cada pontinho: assim o tecido fino não enruga e o bordado fica lisinho como uma pintura!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-086-numeracao-e-titulo-metrico-de-linha-nm-dtex-e-denier-no-bordado",
    "code": "N-086",
    "term": "Numeração e Título Métrico de Linha (Nm, Dtex e Denier no Bordado) (Metric Number & Yarn Count Conversion)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Linhas & Fios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do latim numerus (contagem / título) e do francês denier (antiga moeda francesa usada para pesar meadas de seda no século XVI).",
    "summary": "Tabela de conversão e conceitos fundamentais dos sistemas internacionais de titulação de fios (Weight, Nm, Dtex e Denier) para escolha correta de agulhas e densidades.",
    "definition": "Numeração e Título Métrico de Linha (Yarn Numbering Systems: Weight, Nm, Dtex & Denier) é o conjunto de convenções metrológicas que expressa a relação matemática entre a massa e o comprimento dos fios de bordado computadorizado. Existem dois sistemas fundamentais: os Sistemas Diretos (como Denier e Dtex, onde maior número significa fio mais grosso) e os Sistemas Indiretos (como Weight / wt e Número Métrico / Nm, onde maior número significa fio mais fino). A linha padrão universal de bordado é a 40wt (equivalente a 120 Dtex / 108 Denier / Nm 75/2), exigindo agulha 75/11 e densidade 0,40 mm.",
    "technicalDetails": "Equações de conversão fundamentais: Dtex = Denier × 1,111 / Nm = 10.000 / Dtex / Weight (wt) ≈ Nm × 0,53 (aproximação comercial). Títulos comerciais comuns: 60wt (75 Dtex / Microbordado), 40wt (120 Dtex / Padrão Geral), 30wt (180 Dtex / Ponto Rústico), 12wt (330 Dtex / Efeito Crochê/Manual).",
    "construction": [
      "Fios de filamentos contínuos ou fibras cortadas com massa linear controlada em laboratório",
      "Balanças analíticas têxteis de precisão com leitura em miligramas para ensaio de meadas",
      "Tabela de compatibilidade universal entre Título de Linha x Calibre de Agulha x Densidade",
      "Etiqueta técnica com indicação de Composição, Título (wt/dtex) e Lote impressos no carretel",
      "Normas de calibração ISO 2060 e ASTM D1907 para titulação têxtil oficial"
    ],
    "howItWorks": [
      "1. Lê-se a numeração estampada no topo ou no fundo do carretel de linha (ex: No. 40 ou 40wt).",
      "2. Identifica-se a espessura física do fio no sistema padrão: 40wt é a espessura média universal.",
      "3. Se for bordar letras minúsculas de 3 mm, escolhe-se uma linha mais fina: 60wt ou 75wt.",
      "4. Para a linha 60wt (mais fina), seleciona-se uma agulha correspondente mais fina (65/9 ou 60/8).",
      "5. No software de matriz, ajusta-se a densidade para 0,32 mm (mais fechada) para compensar o fio fino.",
      "6. Se for bordar com linha grossa 30wt para efeito artesanal, usa-se agulha 90/14 e densidade 0,55 mm.",
      "7. A proporção perfeita entre linha, agulha e densidade garante bordados impecáveis sem quebras e sem falhas."
    ],
    "mainTypes": [
      "Linha 40wt / 120 Dtex (A mais usada no mundo para 90% dos bordados normais)",
      "Linha 60wt e 75wt / 75-80 Dtex (Linhas ultrafinas para microletras, detalhes e monogramas minúsculos)",
      "Linha 30wt e 12wt / 200-350 Dtex (Linhas grossas com relevo pronunciado para jeans, couro e efeitos rústicos)"
    ],
    "characteristics": [
      "Relação inversa no sistema Weight: quanto maior o número, mais fino é o fio",
      "Relação direta no sistema Denier/Dtex: quanto maior o número, mais pesado e grosso é o fio",
      "Impacto direto na cobertura de tecido e no consumo de metragem por mil pontos",
      "Determinação obrigatória do tamanho do olho da agulha para evitar atrito excessivo"
    ],
    "limitations": [
      "Nunca utilizar linha grossa 30wt ou 12wt com agulha fina 70/10 (a linha não cabe no olho e quebra)",
      "Não manter a mesma densidade ao trocar de espessura de fio na matriz",
      "Linhas com títulos não homologados podem apresentar variações grosseiras de espessura no mesmo cone"
    ],
    "numberingSystem": [
      "Fio Padrão: 40wt = 120/2 Dtex = 108 Denier",
      "Fio Fino: 60wt = 84/2 Dtex = 75 Denier",
      "Fio Grosso: 30wt = 200/2 Dtex = 180 Denier"
    ],
    "advantages": [
      "✔ Permite bordar textos minúsculos de crachás com nitidez perfeita usando a linha certa (60wt)",
      "✔ Evita comprar agulhas erradas que quebram linhas ou deixam buracos enormes no tecido",
      "✔ Domina o cálculo exato de custo de linha por matriz para precificação correta de serviços"
    ],
    "commonErrors": [
      "❌ Achar que linha 60wt é mais grossa que 40wt (no sistema Weight, 60wt é mais fina!)",
      "❌ Borda com linha 60wt sem aumentar a densidade da matriz, deixando o tecido aparecendo no fundo",
      "❌ Usar linha de bobina grossa com linha superior ultrafina, deformando o equilíbrio do ponto"
    ],
    "voceSabia": "A palavra 'Denier' era o nome de uma moeda de prata cunhada na França pelo Rei Carlos Magno no ano 781; pesava-se exatamente uma meada de 9.000 metros de fio de seda contra o peso de uma moeda de denier para saber se o fio era fino ou grosso!",
    "curiosidadeTecnica": "1.000 metros de linha 40wt pesam exatamente 12 gramas (120 dtex); enquanto 1.000 metros de linha 60wt pesam apenas 8,4 gramas (84 dtex), o que representa 30% menos massa para a agulha empurrar a cada penetração.",
    "dicaArtrelados": "Guarde esta regrinha de ouro para nunca mais esquecer: Linha 40 = Agulha 75/11 e Densidade 0,40 mm (o padrão do dia a dia). Linha 60 (bem fininha para letrinhas de 3 mm) = Agulha 65/9 e Densidade 0,32 mm. Fazendo essa combinação certinha, suas letrinhas pequenas vão ficar tão nítidas que parecem impressas na gráfica!",
    "comparisonTable": {
      "headers": ["Título (Weight)", "Equivalente Dtex", "Agulha Indicada", "Densidade Recomendada", "Uso Principal"],
      "rows": [
        ["60wt (Ultrafina)", "84 Dtex", "65/9 ou 60/8", "0,30 mm a 0,34 mm", "Letras minúsculas de 3 a 5 mm e microdetalhes"],
        ["40wt (Padrão Universal)", "120 Dtex", "75/11 ou 80/12", "0,38 mm a 0,44 mm", "90% dos bordados normais e logotipos"],
        ["30wt (Grossa)", "200 Dtex", "80/12 ou 90/14", "0,48 mm a 0,55 mm", "Bordados rústicos, jeans e contornos fortes"],
        ["12wt (Super Grossa)", "330 Dtex", "100/16 ou 110/18", "0,65 mm a 0,80 mm", "Efeito ponto cruz manual e lã decorativa"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 PPM para 40wt / 650 PPM para 60wt / 550 PPM para 12wt",
      "needleType": "Compatível com a espessura da linha conforme tabela",
      "stabilizer": "Adequado ao tecido",
      "threadTension": "Calibrada individualmente para cada espessura de fio",
      "density": "Ajustada conforme o título métrico da linha"
    },
    "applications": [
      "Letras minúsculas de etiquetas médicas, crachás de hospitais e assinaturas",
      "Bordados corporativos padronizados de camisas polo e bonés promocionais",
      "Bordados de alta rusticidade em jaquetas jeans, jaquetas de couro e calçados",
      "Artesanato criativo com efeito de costura à mão em peças de cama e mesa"
    ],
    "troubleshootingTips": [
      "Se o bordado parecer 'ralo' com linha 60wt, aumente a densidade da matriz em 15% a 20%",
      "Se a linha 30wt estiver arrebentando, troque a agulha imediatamente por uma 90/14 de olho grande",
      "Use sempre linha de bobina mais fina (60wt ou 70wt de filamento contínuo) para equilibrar o ponto"
    ],
    "relatedTerms": [
      "Linhas & Fios",
      "Numeração e Calibre de Agulha",
      "Micro-Bordado em Alta Resolução com Linha 60wt",
      "Densidade de Ponto",
      "Ponto Satim / Ponto Cheio"
    ],
    "tags": [
      "n-086",
      "titulacao de linha",
      "weight",
      "dtex",
      "denier",
      "espessura de linha",
      "linhas e fios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "TEXTILE Institute. Physical Properties of Textile Fibres & Yarn Count Systems. Manchester, 2021.",
      "PARRISH, Gail. Thread Numbering, Dtex Conversion and Needle Gauge Pairing for Machine Embroidery. Cincinnati, 2022."
    ],
    "practicalExercise": "Pegue um carretel de linha 40wt e um carretel de linha 60wt (se tiver no ateliê). Passe a ponta dos dois fios entre os dedos indicador e polegar de olhos fechados: sinta como a linha 60wt é incrivelmente mais macia e fininha, perfeita para desenhar os menores detalhes da sua matriz!",
    "quickSummary": "Os números que mostram a grossura da linha para você escolher a agulha e a densidade perfeitas.",
    "beginnerExplanation": "O número da linha indica se ela é fina ou grossa: a linha 40 é a padrão que a gente usa em quase tudo; a linha 60 é mais fininha (ótima para escrever letrinhas pequenas de 3 milímetros); e a linha 30 é mais gordinha para fazer bordados rústicos parecidos com jeans!",
    "updatedAt": "2026-08-29"
  },
  {
    "id": "n-087-nivelamento-optico-de-bastidores-magneticos-e-reducao-de-marcas-de-aro",
    "code": "N-087",
    "term": "Nivelamento Óptico de Bastidores Magnéticos e Redução de Marcas de Aro (Magnetic Hoop Parallelism & Hoop Burn Prevention)",
    "letter": "N",
    "level": "Intermediário 🟡",
    "category": "Bastidores & Acessórios",
    "grammarClass": "Substantivo masculino composto.",
    "origin": "Do grego magnetis (pedra magnética de atração natural / ímãs de neodímio N52) e do latim parallelus (paralelismo de superfícies planas).",
    "summary": "Técnicas de fixação e alinhamento plano por força magnética contínua para eliminar marcas permanentes de atrito e esmagamento (marcas de aro / hoop burn) em veludo, couro, toalhas e tecidos escuros.",
    "definition": "Nivelamento Óptico de Bastidores Magnéticos e Prevenção de Marcas de Aro (Magnetic Hoop Clamping Parallelism & Hoop Burn Elimination) é a tecnologia e método de fixação de tecidos que utiliza aros metálicos equipados com conjuntos de ímãs de terras raras (Neodímio N48 a N52 de alto fluxo magnético) em substituição aos aros tradicionais de plástico com parafuso de aperto. Os ímãs exercem uma força de compressão vertical plana e perfeitamente distribuída em toda a circunferência, segurando peças espessas (como jaquetas, toalhas grossas e bolsas) sem provocar o cisalhamento lateral de fibras nem deixar anéis circulares brilhantes de atrito (*hoop burns*).",
    "technicalDetails": "Força de atração magnética: 12 a 24 kgf por ímã (campo magnético em circuito fechado). Tipo de ímã: Neodímio-Ferro-Boro (NdFeB Grau N50 com revestimento de níquel-cobre-níquel). Espessura máxima de tecido compatível: até 8,0 mm sem perda de retenção. Distribuição de pressão: 100% paralela e autorregulável.",
    "construction": [
      "Aro inferior de aço carbono temperado com suportes de fixação direta no pantógrafo",
      "Aro superior com insertos de ímãs de neodímio encapsulados em resina de alto impacto",
      "Revestimento antiderrapante texturizado de silicone na base de contato com o tecido",
      "Braços laterais de engate rápido calibrados para o espaçamento dos eixos da máquina",
      "Abas ergonômicas de alívio rápido para separação dos ímãs sem esforço manual excessivo"
    ],
    "howItWorks": [
      "1. Encaixa-se o aro inferior do bastidor magnético no suporte de mesa do ateliê.",
      "2. Posiciona-se a entretela e a peça de roupa (ex: toalha de veludo) estendida sobre a base plana.",
      "3. Aproxima-se o aro superior magnético: os ímãs se atraem instantaneamente com clique sonoro firme.",
      "4. O tecido fica travado com firmeza de tambor de forma 100% plana sem necessidade de puxar as bordas.",
      "5. Encaixa-se o bastidor no pantógrafo da máquina de bordar.",
      "6. A máquina borda em velocidade plena sem que o tecido escorregue ou perca a estabilidade.",
      "7. Ao terminar, puxa-se a aba lateral de desacoplamento: a peça sai limpa, lisa e sem nenhuma marca de aro."
    ],
    "mainTypes": [
      "Bastidores Magnéticos Universais Retangulares (Para toalhas, jaquetas, camisas e moletons)",
      "Bastidores Magnéticos para Bolsos e Mangas (Modelos estreitos para áreas tubulares de difícil acesso)",
      "Bastidores Magnéticos de Alta Força para Couro e Tapeçaria (Com ímãs duplos para materiais pesados)"
    ],
    "characteristics": [
      "Eliminação absoluta e definitiva de marcas circulares brilhantes de bastidor em tecidos escuros e delicados",
      "Fixação ultra-rápida (menos de 5 segundos por peça), triplicando a produtividade do ateliê",
      "Auto-ajuste automático para qualquer espessura de tecido sem precisar girar parafusos manuais",
      "Preservação integral da saúde ergonômica dos pulsos do operador (previne LER/DORT)"
    ],
    "limitations": [
      "Cuidado com dedos ao aproximar os ímãs (força de pinçamento alta)",
      "Pessoas com marca-passo cardíaco devem manter distância mínima de segurança de 30 cm",
      "Não aproximar de cartões de crédito magnéticos, telefones ou mídias de armazenamento antigas"
    ],
    "numberingSystem": [
      "Grau do Ímã: Neodímio N50 / N52",
      "Força de Retenção: > 15 kgf uniforme",
      "Tempo de Montagem: 3 a 5 segundos"
    ],
    "advantages": [
      "✔ Acaba de vez com o desespero de perder peças de veludo, couro e camisas pretas por causa de marcas de aro",
      "✔ Agiliza a produção de pedidos grandes (como 200 toalhas ou polos) economizando horas de montagem",
      "✔ Não cansa os dedos e pulsos da bordadeira, trazendo muito mais conforto de trabalho no dia a dia"
    ],
    "commonErrors": [
      "❌ Puxar o tecido pelos lados depois que os ímãs já fecharam, deformando a trama do tecido",
      "❌ Deixar ferramentas de ferro caírem em cima dos ímãs, podendo trincar a proteção plástica",
      "❌ Tentar usar o bastidor sem entretela achando que o ímã sozinho substitui a estabilização"
    ],
    "voceSabia": "Os ímãs de Neodímio usados nos bastidores magnéticos modernos foram inventados em 1982 pela General Motors e pela Sumitomo Special Metals para fabricar os motores dos robôs industriais; eles são os ímãs permanentes mais fortes que existem no planeta Terra!",
    "curiosidadeTecnica": "Um bastidor tradicional de parafuso aplica uma pressão concentrada de atrito angular que pode superar 45 kgf/cm² na borda do aro plástico, cisalhando as fibras de veludo; o bastidor magnético distribui a mesma força verticalmente em 0,8 kgf/cm² homogêneo em toda a área.",
    "dicaArtrelados": "Se você borda muitas toalhas de banho, veludo ou uniformes pretos, o bastidor magnético é o melhor investimento que você pode fazer na vida: ele se paga no primeiro mês só com o tempo que você economiza na montagem e com a certeza de que nenhuma toalha mais vai sair com aquela marca redonda amassada!",
    "comparisonTable": {
      "headers": ["Característica", "Bastidor Tradicional de Parafuso", "Bastidor Magnético de Neodímio"],
      "rows": [
        ["Marcas no Tecido (Hoop Burn)", "Frequentes em veludo, tactel e couro", "Zero (pressão plana e uniforme)"],
        ["Tempo de Montagem", "25 a 45 segundos por peça", "3 a 5 segundos (clique magnético)"],
        ["Ajuste de Espessura", "Manual (tem que desapertar e apertar parafuso)", "Automático (prende fino ou grosso igual)"],
        ["Esforço Físico nos Pulsos", "Alto (gira parafuso e puxa bordas)", "Nulo (aproximação suave)"]
      ]
    },
    "recommendedSettings": {
      "speedPPM": "750 - 950 PPM (Estabilidade total)",
      "needleType": "Compatível com o tecido",
      "stabilizer": "Entretela adequada fixada normalmente junto com a peça",
      "threadTension": "Padrão de trabalho",
      "density": "Padrão da matriz"
    },
    "applications": [
      "Toalhas de banho aveludadas, roupões de banho e cobertores de bebê",
      "Camisas polo corporativas de algodão piquet escuro e camisetas pretas",
      "Jaquetas pesadas de couro legítimo, courino, tactel e jaquetas acolchoadas",
      "Bolsas prontas, mochilas, bonés desestruturados e estojos"
    ],
    "troubleshootingTips": [
      "Para retirar peças delicadas, levante o aro magnético inclinando de lado em vez de puxar reto para cima",
      "Mantenha a superfície de silicone dos aros limpa com um pano levemente umedecido em álcool",
      "Utilize os gabaritos plásticos de alinhamento para centralizar logotipos de peito sempre na mesma altura"
    ],
    "relatedTerms": [
      "Bastidores & Acessórios",
      "Bastidores Magnéticos",
      "Nivelamento e Alinhamento do Bastidor",
      "Veludo e Tecidos Felpudos",
      "Estabilizadores & Entretelas"
    ],
    "tags": [
      "n-087",
      "bastidor magnetico",
      "neodimio",
      "hoop burn",
      "marcas de aro",
      "bastidores e acessorios",
      "artrelados"
    ],
    "sourceReference": "DIBE - Dicionário Ilustrado de Bordado Eletrônico / Artrelados",
    "bibliographicReferences": [
      "MIGHTY HOOP & HoopMaster Industrial Magnetic Clamping Systems Guide. Henderson, 2021.",
      "PARRISH, Gail. Magnetic Hoop Dynamics: Pressure Distribution, Hoop Burn Prevention and Ergonomic Workflow. Cincinnati, 2022."
    ],
    "practicalExercise": "Coloque um pedaço de veludo preto em um bastidor comum de parafuso e aperte bem. Em outro pedaço, coloque em um bastidor magnético. Deixe 10 minutos e solte os dois: veja como o bastidor comum deixou uma marca brilhante esmagada no veludo, enquanto o bastidor magnético deixou o tecido 100% perfeito e fofinho!",
    "quickSummary": "Bastidores com ímãs super fortes que prendem a roupa em segundos sem deixar marcas amassadas no tecido.",
    "beginnerExplanation": "O bastidor magnético usa ímãs muito potentes para fechar a peça num clique rápido sem precisar apertar parafusos: ele segura o tecido com firmeza sem esmagar as fibras, acabando de vez com aquelas marcas redondas feias que ficam em toalhas e roupas escuras!",
    "updatedAt": "2026-08-29"
  }
]

print(f"Loaded {len(VERBETES_N_PART12)} verbetes for Part 12.")

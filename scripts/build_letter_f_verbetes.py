# Script para geração dos 43 novos verbetes da Letra F para o DIBE
import json

verbetes_f = [
    {
        "id": "f-novo-001-feltro-feltro-la-bordado-eletronico",
        "term": "Feltro e Feltro de Lã para Bordado Eletrônico",
        "englishTerm": "Embroidery Craft & Wool Blend Felt in Computerized Machine",
        "letter": "F",
        "level": "Iniciante 🟢",
        "category": "Tipos de Tecidos",
        "grammarClass": "Substantivo masculino composto com locuções adjetivas e prepositivas",
        "origin": "Do proto-germânico *feltaz* (tecido prensado sem tecelagem), aperfeiçoado industrialmente no século XIX com poliéster e misturas de lã.",
        "summary": "Não-tecido denso e estável obtido por agulhagem ou prensagem térmica, ideal para patches, chaveiros ITH e apliques sem desfiamento.",
        "definition": "O Feltro e Feltro de Lã para Bordado Eletrônico constituem a base têxtil não-tecida mais popular e segura para criação de emblemas, chaveiros no bastidor (ITH), medalhas e apliques. Sua estrutura é formada pelo entrelaçamento mecânico e térmico de fibras sintéticas de poliéster ou naturais de lã, dispensando fios de urdume e trama. Essa característica impede completamente o desfiamento ao ser cortado rente aos pontos cheios de contorno, oferecendo um fundo encorpado, fosco e uniforme que valoriza o relevo dos pontos.",
        "howItWorks": [
            "1. Preparação da base: O feltro de gramatura média (180 a 240 g/m²) é cortado ligeiramente maior que o bastidor ou fixado sobre entretela rasgável em flutuação.",
            "2. Estabilização no aro: Por possuir leve elasticidade ao ser tracionado, o feltro nunca deve ser esticado em demasia no bastidor para não deformar após ser solto.",
            "3. Execução do bordado: A máquina executa pontos de suporte leves, seguidos de preenchimentos tatami ou colunas de ponto cheio com densidade moderada.",
            "4. Acabamento perimetral: Aplica-se ponto cordão (satin) ou ponto de caseado fechando a borda da peça.",
            "5. Recorte e selagem: Retira-se a peça do bastidor e refila-se com tesoura de precisão curva a 1 mm do cordão; feltros de poliéster aceitam selagem suave das microfibras a quente."
        ],
        "beginnerExplanation": "O feltro é o queridinho absoluto de quem está começando no bordado porque ele não tem aqueles fios chatos que desfiam na pontinha! Você borda, corta bem pertinho com a tesoura e a peça já está perfeita e limpa, sem precisar embainhar. É perfeito para fazer seus primeiros chaveirinhos e tags!",
        "applications": [
            "Chaveiros almofadados e penduricalhos In The Hoop (ITH).",
            "Bases de brasões, patches de motociclistas e distintivos escolares.",
            "Apliques de camisas infantis e decorações temáticas de maternidade.",
            "Bases de suporte para broches e pins bordados em alta definição."
        ],
        "technicalDetails": "Recomenda-se espessura entre 1,0 mm e 1,4 mm para máquinas domésticas. Feltros muito grossos (acima de 2 mm) elevam a barra de agulha e requerem regulagem da altura do calcador. Densidade recomendada: 0,44 mm a 0,48 mm. A densidade excessiva (abaixo de 0,38 mm) corta as fibras do feltro agindo como perfurador de papel.",
        "relationshipWithMatrix": "Na digitalização para feltro, reduza o underlay para evitar rigidez de 'papelão'. Como o feltro absorve pouco o ponto em comparação a tecidos atoalhados, uma compensação de encolhimento de +0,25 mm a +0,30 mm é suficiente para manter contornos perfeitamente alinhados.",
        "commonErrors": [
            "Usar feltro escolar de baixa densidade que esfarela ou fura quando a agulha penetra repetidamente.",
            "Puxar o feltro com muita força ao fechar o parafuso do bastidor, gerando encolhimento e rugas assim que o aro é aberto.",
            "Configurar densidade extrema no ponto cheio, fazendo a agulha picotar o feltro como se fosse um picote de folha destacável."
        ],
        "troubleshootingTips": [
            "Se o feltro estiver sendo empurrado para dentro do furo da chapa de agulha, utilize entretela rasgável de 50 g/m² por baixo ou troque a agulha por uma ponta bola 75/11 nova.",
            "Se os pelinhos do feltro aparecerem no meio do ponto cheio, adicione um underlay de zigue-zague leve ou use uma película hidrossolúvel no topo."
        ],
        "dicaArtrelados": "No Ateliê Artrelados, quando fazemos chaveiros ITH em feltro claro, usamos entretela rasgável de gramatura 60g e linha de bobina de mesma cor da base. Ao recortar o chaveiro no final, inclinamos a tesoura de precisão em 45 graus para dentro do bordado: o avesso fica invisível e a borda parece feita a laser!",
        "voceSabia": "O feltro é o tecido mais antigo da história da civilização humana! Há registros de esteiras e roupas de feltro feitas por pastores nômades na Sibéria e na Mongólia há mais de 6.500 anos, muito antes do tear ser inventado.",
        "practicalExercise": "Crie no seu software um chaveiro redondo de 6 cm com seu nome em ponto cheio e borda em cordão. Borde sobre um pedaço de feltro estabilizado com entretela rasgável e recorte com tesoura de ponta curva para avaliar o acabamento.",
        "quickSummary": "Base têxtil não-tecida sem desfiamento, ideal para chaveiros, patches e decorações, exigindo densidade moderada e estabilização sem tração excessiva.",
        "relatedTerms": [
            "Ponto Cheio (Satin)",
            "Patch Bordado",
            "In The Hoop (ITH)",
            "Entretela Rasgável",
            "Agulha Ponta Bola (Ball Point)"
        ],
        "recommendedSettings": {
            "needleType": "Agulha Ponta Bola 75/11 ou Microtex 80/12",
            "stabilizer": "Entretela rasgável de 50 a 60 g/m²",
            "speedPPM": "600 a 750 PPM",
            "density": "0,44 mm a 0,48 mm",
            "pullCompensation": "+0,25 mm a +0,30 mm"
        }
    }
]

print("Script template ready.")

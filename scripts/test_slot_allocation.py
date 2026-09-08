# -*- coding: utf-8 -*-
"""
Testa a alocação de códigos livres para atingir exatamente 2.536 verbetes únicos.
"""
import glob, re, json

original_files = [
    "src/data/verbetesLetterA.ts",
    "src/data/verbetesLetterA2.ts",
    "src/data/verbetesLetterA3.ts",
    "src/data/verbetesLetterB.ts",
    "src/data/verbetesLetterB1.ts",
    "src/data/verbetesLetterC.ts",
    "src/data/verbetesLetterD.ts",
    "src/data/verbetesLetterD1.ts",
    "src/data/verbetesLetterD2.ts",
    "src/data/verbetesLetterE.ts",
    "src/data/verbetesLetterF.ts",
    "src/data/verbetesLetterG.ts",
    "src/data/verbetesLetterH.ts",
    "src/data/verbetesLetterI.ts",
    "src/data/verbetesLetterJ.ts",
    "src/data/verbetesLetterK.ts",
    "src/data/verbetesLetterL.ts",
    "src/data/verbetesLetterM.ts",
    "src/data/verbetesLetterN.ts",
    "src/data/verbetesLetterO.ts",
    "src/data/verbetesLetterP.ts",
    "src/data/verbetesLetterQ.ts",
    "src/data/verbetesLetterR.ts",
    "src/data/verbetesLetterS.ts",
    "src/data/verbetesLetterT.ts",
    "src/data/verbetesLetterU.ts",
    "src/data/verbetesLetterV.ts",
    "src/data/verbetesLetterW.ts",
    "src/data/verbetesLetterX.ts",
    "src/data/verbetesLetterY.ts",
    "src/data/verbetesLetterZ.ts"
]

existing_codes = set()
for f in original_files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
    codes = re.findall(r'["\']?code["\']?\s*:\s*["\']([A-Z]-\d+)["\']', content)
    for c in codes:
        existing_codes.add(c.upper().strip())

print(f"Total de códigos únicos originais encontrados: {len(existing_codes)}")

# Vamos ler os 338 verbetes criados nas partes 1, 2, 3, 4
restored_parts = [
    "src/data/verbetesRestored1.ts",
    "src/data/verbetesRestored2.ts",
    "src/data/verbetesRestored3.ts",
    "src/data/verbetesRestored4.ts"
]

all_restored = []
for p in restored_parts:
    with open(p, "r", encoding="utf-8") as fp:
        content = fp.read()
    match = re.search(r"=\s*(\[\s*\{.*\}\s*\]);?", content, re.DOTALL)
    if match:
        data = json.loads(match.group(1))
        all_restored.extend(data)

print(f"Total de verbetes restaurados carregados: {len(all_restored)}")

# Agrupa restaurados por letra
by_letter = {}
for v in all_restored:
    l = v["letter"].upper()
    if l not in by_letter:
        by_letter[l] = []
    by_letter[l].append(v)

allocated_codes = set(existing_codes)

# Para cada letra, aloca o próximo código livre
for l in sorted(by_letter.keys()):
    v_list = by_letter[l]
    # Encontra números livres para esta letra
    # Podemos preencher lacunas ou continuar após o máximo
    curr_num = 1
    for v in v_list:
        while True:
            code_candidate = f"{l}-{str(curr_num).zfill(3)}"
            if code_candidate not in allocated_codes:
                break
            curr_num += 1
        v["code"] = code_candidate
        v["id"] = re.sub(r"^[a-z]-\d+-", f"{code_candidate.lower()}-", v["id"])
        allocated_codes.add(code_candidate)

print(f"Total final alocado (originais + restaurados): {len(allocated_codes)}")
print(f"Meta esperada: 2198 + 338 = 2536. Atingido: {len(allocated_codes)} == 2536? {len(allocated_codes) == 2536}")

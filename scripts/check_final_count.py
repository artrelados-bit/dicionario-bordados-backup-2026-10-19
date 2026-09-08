# -*- coding: utf-8 -*-
"""
Verifica a contagem e unicidade exata dos verbetes no DIBE após a restauração.
"""
import glob, json, re

# Carrega todos os arrays de verbetes
letter_files = [
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
    "src/data/verbetesLetterZ.ts",
    "src/data/verbetesRestored1.ts",
    "src/data/verbetesRestored2.ts",
    "src/data/verbetesRestored3.ts",
    "src/data/verbetesRestored4.ts"
]

all_v = []

for fpath in letter_files:
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    # extrair lista json
    match = re.search(r"=\s*(\[\s*\{.*\}\s*\]);?", content, re.DOTALL)
    if match:
        data = json.loads(match.group(1))
        all_v.extend(data)
    else:
        print(f"Aviso: Não encontrou array JSON em {fpath}")

print(f"Total bruto de verbetes carregados: {len(all_v)}")

# Simula deduplicação do App.tsx:
# const codeKey = (v.code || v.id).trim().toUpperCase();
# deduplicatedMap.set(codeKey, v);
dedup_map = {}
for v in all_v:
    code_key = (v.get("code") or v.get("id") or "").strip().upper()
    dedup_map[code_key] = v

print(f"Total deduplicado por code/id (exato como App.tsx): {len(dedup_map)}")

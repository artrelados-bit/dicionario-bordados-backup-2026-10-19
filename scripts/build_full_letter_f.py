# -*- coding: utf-8 -*-
import json
import re
from verbetes_data_f1 import verbetes_f_part1
from verbetes_data_f2 import verbetes_f_part2
from verbetes_data_f3 import verbetes_f_part3

# Exclude f-novo-015 because needle-clearance-folga-agulha-lancadeira already covers hook clearance
filtered_p1 = [v for v in verbetes_f_part1 if v['id'] != 'f-novo-015-folga-calibragem-agulha-ponta-lancadeira']
all_new_f = filtered_p1 + verbetes_f_part2 + verbetes_f_part3
print(f"Total new F verbetes loaded: {len(all_new_f)}")
assert len(all_new_f) == 42, f"Expected 42 verbetes, got {len(all_new_f)}"

# Verification of 16 mandatory designations
required_fields = [
    "level",
    "category",
    "grammarClass",
    "origin",
    "definition",
    "howItWorks",
    "beginnerExplanation",
    "applications",
    "relationshipWithMatrix",
    "commonErrors",
    "troubleshootingTips",
    "dicaArtrelados",
    "voceSabia",
    "practicalExercise",
    "quickSummary",
    "relatedTerms"
]

for idx, v in enumerate(all_new_f):
    term = v.get("term", "").strip()
    assert term.upper().startswith("F"), f"Term {term} must start with F!"
    for field in required_fields:
        val = v.get(field)
        assert val is not None and len(val) > 0, f"Verbete {idx+1} ({term}) missing field {field}!"

print("All 43 verbetes passed 100% of the 16 mandatory designations checks!")

# 1. Write src/data/novosVerbetesLetraF.ts
ts_content = 'import { Verbete } from "../types";\n\n'
ts_content += 'export const NOVOS_VERBETES_LETRA_F: Verbete[] = '
ts_content += json.dumps(all_new_f, ensure_ascii=False, indent=2) + ';\n'

with open("src/data/novosVerbetesLetraF.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)
print("Successfully generated src/data/novosVerbetesLetraF.ts")

# 2. Update masterAcervoOfficial.json to ensure the 7 terms start strictly with F
with open("src/data/masterAcervoOfficial.json", "r", encoding="utf-8") as f:
    master = json.load(f)

# Term renamings to start strictly with F:
renames = {
    "f-083-efeito-falso-relevo-sombreamento-meio-tom": "Falso Relevo com Sombreamento em Meio-Tom e Efeito 3D",
    "f-085-efeito-filigrana-rendas-finas-ponto-corrido-duplo": "Filigrana e Rendas Finas com Ponto Corrido Duplo",
    "f-087-efeito-flocado-tridimensional-fios-chenille-ponto-lacada": "Flocado Tridimensional com Fios de Chenille e Ponto Laçada",
    "f-088-efeito-fumaca-transparencia-tatami-esfumado": "Fumaça e Transparência com Efeito de Tatami Esfumado",
    "f-086-ponto-festone-borda-escavada-selagem-termica": "Festonê com Borda Escavada e Selagem Térmica (Ponto Festonê)",
    "f-084-ponto-florentino-efeito-bargello-computadorizado": "Florentino e Efeito Bargello Computadorizado (Ponto Florentino)",
    "f-089-ponto-folha-nervura-central-angulos-ponto-inclinados": "Folha com Nervura Central e Ângulos de Ponto Inclinados (Ponto Folha)",
}

modified_count = 0
for v in master:
    vid = v.get("id")
    if vid in renames:
        v["term"] = renames[vid]
        v["letter"] = "F"
        modified_count += 1

print(f"Updated {modified_count} existing master terms to start strictly with F.")

with open("src/data/masterAcervoOfficial.json", "w", encoding="utf-8") as f:
    json.dump(master, f, ensure_ascii=False, indent=2)

print("Saved updated masterAcervoOfficial.json")

# 3. Check initialDictionary.ts and update it
with open("src/data/initialDictionary.ts", "r", encoding="utf-8") as f:
    init_content = f.read()

if "NOVOS_VERBETES_LETRA_F" not in init_content:
    init_content = init_content.replace(
        'import { NOVOS_VERBETES_LETRA_E2 } from "./novosVerbetesLetraE2";',
        'import { NOVOS_VERBETES_LETRA_E2 } from "./novosVerbetesLetraE2";\nimport { NOVOS_VERBETES_LETRA_F } from "./novosVerbetesLetraF";'
    )
    init_content = init_content.replace(
        '  ...NOVOS_VERBETES_LETRA_E2,',
        '  ...NOVOS_VERBETES_LETRA_E2,\n  ...NOVOS_VERBETES_LETRA_F,'
    )
    with open("src/data/initialDictionary.ts", "w", encoding="utf-8") as f:
        f.write(init_content)
    print("Updated src/data/initialDictionary.ts with NOVOS_VERBETES_LETRA_F")
else:
    print("initialDictionary.ts already contains NOVOS_VERBETES_LETRA_F")

# 4. Verify count in Letter F
f_bucket = []
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
unique_map = {}
for v in master:
    unique_map[v["id"]] = v
for v in all_new_f:
    unique_map[v["id"]] = v

# Check others if needed
for v in unique_map.values():
    raw_term = v.get("term", "")
    clean = re.sub(r'^[«»\"\'“\s🟢🟡🔴]+', '', raw_term)
    if clean:
        first = clean[0].upper()
        if first == "F":
            f_bucket.append(v)

print(f"\n=======================================================")
print(f"🎉 TOTAL VERBETES STRICTLY IN LETTER F BUCKET: {len(f_bucket)} 🎉")
print(f"=======================================================\n")

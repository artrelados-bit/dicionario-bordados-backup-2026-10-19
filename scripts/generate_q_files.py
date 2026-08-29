# -*- coding: utf-8 -*-
import json
from scripts.verbetes_data_q1 import VERBETES_Q_PART10
from scripts.verbetes_data_q2 import VERBETES_Q_PART11
from scripts.verbetes_data_q3 import VERBETES_Q_PART12
from scripts.verbetes_data_q4 import VERBETES_Q_PART13
from scripts.verbetes_data_q5 import VERBETES_Q_PART14

def write_ts_file(filepath, var_name, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('import { Verbete } from "../types";\n\n')
        f.write(f'export const {var_name}: Verbete[] = ')
        f.write(json.dumps(data, ensure_ascii=False, indent=2))
        f.write(';\n')
    print(f"Written {len(data)} verbetes to {filepath}")

write_ts_file("src/data/verbetesLetterQ10.ts", "VERBETES_LETTER_Q10", VERBETES_Q_PART10)
write_ts_file("src/data/verbetesLetterQ11.ts", "VERBETES_LETTER_Q11", VERBETES_Q_PART11)
write_ts_file("src/data/verbetesLetterQ12.ts", "VERBETES_LETTER_Q12", VERBETES_Q_PART12)
write_ts_file("src/data/verbetesLetterQ13.ts", "VERBETES_LETTER_Q13", VERBETES_Q_PART13)
write_ts_file("src/data/verbetesLetterQ14.ts", "VERBETES_LETTER_Q14", VERBETES_Q_PART14)

print("All TS files generated successfully.")

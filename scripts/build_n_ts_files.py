# -*- coding: utf-8 -*-
import json
from verbetes_data_n1 import VERBETES_N_PART11
from verbetes_data_n2 import VERBETES_N_PART12
from verbetes_data_n3 import VERBETES_N_PART13
from verbetes_data_n4 import VERBETES_N_PART14

def write_ts_part(filename, var_name, data):
    content = 'import { Verbete } from "../types";\n\n'
    content += f'export const {var_name}: Verbete[] = '
    content += json.dumps(data, ensure_ascii=False, indent=2)
    content += ';\n'
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {filename} with {len(data)} verbetes.")

write_ts_part('src/data/verbetesLetterN11.ts', 'VERBETES_LETTER_N_PART11', VERBETES_N_PART11)
write_ts_part('src/data/verbetesLetterN12.ts', 'VERBETES_LETTER_N_PART12', VERBETES_N_PART12)
write_ts_part('src/data/verbetesLetterN13.ts', 'VERBETES_LETTER_N_PART13', VERBETES_N_PART13)
write_ts_part('src/data/verbetesLetterN14.ts', 'VERBETES_LETTER_N_PART14', VERBETES_N_PART14)

# Now update verbetesLetterN.ts
n_main_content = """import { Verbete } from "../types";
import { VERBETES_LETTER_N_PART1 } from "./verbetesLetterN1";
import { VERBETES_LETTER_N_PART2 } from "./verbetesLetterN2";
import { VERBETES_LETTER_N_PART3 } from "./verbetesLetterN3";
import { VERBETES_LETTER_N_PART4 } from "./verbetesLetterN4";
import { VERBETES_LETTER_N_PART5 } from "./verbetesLetterN5";
import { VERBETES_LETTER_N_PART6 } from "./verbetesLetterN6";
import { VERBETES_LETTER_N_PART7 } from "./verbetesLetterN7";
import { VERBETES_LETTER_N_PART8 } from "./verbetesLetterN8";
import { VERBETES_LETTER_N_PART9 } from "./verbetesLetterN9";
import { VERBETES_LETTER_N_PART10 } from "./verbetesLetterN10";
import { VERBETES_LETTER_N_PART11 } from "./verbetesLetterN11";
import { VERBETES_LETTER_N_PART12 } from "./verbetesLetterN12";
import { VERBETES_LETTER_N_PART13 } from "./verbetesLetterN13";
import { VERBETES_LETTER_N_PART14 } from "./verbetesLetterN14";

export const VERBETES_LETTER_N: Verbete[] = [
  ...VERBETES_LETTER_N_PART1,
  ...VERBETES_LETTER_N_PART2,
  ...VERBETES_LETTER_N_PART3,
  ...VERBETES_LETTER_N_PART4,
  ...VERBETES_LETTER_N_PART5,
  ...VERBETES_LETTER_N_PART6,
  ...VERBETES_LETTER_N_PART7,
  ...VERBETES_LETTER_N_PART8,
  ...VERBETES_LETTER_N_PART9,
  ...VERBETES_LETTER_N_PART10,
  ...VERBETES_LETTER_N_PART11,
  ...VERBETES_LETTER_N_PART12,
  ...VERBETES_LETTER_N_PART13,
  ...VERBETES_LETTER_N_PART14,
];
"""

with open('src/data/verbetesLetterN.ts', 'w', encoding='utf-8') as f:
    f.write(n_main_content)
print("Updated /src/data/verbetesLetterN.ts")

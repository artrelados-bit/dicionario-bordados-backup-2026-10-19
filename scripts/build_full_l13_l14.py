# -*- coding: utf-8 -*-
import json
import os

from verbetes_data_part1 import VERBETES_L13
from verbetes_data_part2 import VERBETES_L14

def main():
    os.makedirs("src/data", exist_ok=True)
    
    with open("src/data/verbetesLetterL13.ts", "w", encoding="utf-8") as f:
        f.write('import { Verbete } from "../types";\n\n')
        f.write('export const VERBETES_LETTER_L_PART13: Verbete[] = ')
        f.write(json.dumps(VERBETES_L13, ensure_ascii=False, indent=2))
        f.write(';\n')
    print(f"Generated verbetesLetterL13.ts with {len(VERBETES_L13)} verbetes.")

    with open("src/data/verbetesLetterL14.ts", "w", encoding="utf-8") as f:
        f.write('import { Verbete } from "../types";\n\n')
        f.write('export const VERBETES_LETTER_L_PART14: Verbete[] = ')
        f.write(json.dumps(VERBETES_L14, ensure_ascii=False, indent=2))
        f.write(';\n')
    print(f"Generated verbetesLetterL14.ts with {len(VERBETES_L14)} verbetes.")

if __name__ == "__main__":
    main()

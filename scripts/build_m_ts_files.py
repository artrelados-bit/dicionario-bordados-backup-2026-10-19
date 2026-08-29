# -*- coding: utf-8 -*-
import json
import os

from verbetes_data_m1 import VERBETES_M13 as p1
from verbetes_data_m2 import VERBETES_M13_REST as p2
from verbetes_data_m3 import VERBETES_M13_PART3 as p3

from verbetes_data_m4 import VERBETES_M14_PART1 as p4
from verbetes_data_m5 import VERBETES_M14_PART2 as p5
from verbetes_data_m6 import VERBETES_M14_PART3 as p6

m13_items = p1 + p2 + p3
m14_items = p4 + p5 + p6

def to_ts_file(var_name, items):
    ts_content = "import { Verbete } from '../types';\n\n"
    ts_content += f"export const {var_name}: Verbete[] = "
    ts_content += json.dumps(items, ensure_ascii=False, indent=2)
    ts_content += ";\n"
    return ts_content

with open("src/data/verbetesLetterM13.ts", "w", encoding="utf-8") as f:
    f.write(to_ts_file("VERBETES_LETTER_M_PART13", m13_items))

with open("src/data/verbetesLetterM14.ts", "w", encoding="utf-8") as f:
    f.write(to_ts_file("VERBETES_LETTER_M_PART14", m14_items))

m_main_ts = """import { Verbete } from '../types';
import { VERBETES_LETTER_M_PART1 } from './verbetesLetterM1';
import { VERBETES_LETTER_M_PART2 } from './verbetesLetterM2';
import { VERBETES_LETTER_M_PART3 } from './verbetesLetterM3';
import { VERBETES_LETTER_M_PART4 } from './verbetesLetterM4';
import { VERBETES_LETTER_M_PART5 } from './verbetesLetterM5';
import { VERBETES_LETTER_M_PART6 } from './verbetesLetterM6';
import { VERBETES_LETTER_M_PART7 } from './verbetesLetterM7';
import { VERBETES_LETTER_M_PART8 } from './verbetesLetterM8';
import { VERBETES_LETTER_M_PART9 } from './verbetesLetterM9';
import { VERBETES_LETTER_M_PART10 } from './verbetesLetterM10';
import { VERBETES_LETTER_M_PART11 } from './verbetesLetterM11';
import { VERBETES_LETTER_M_PART12 } from './verbetesLetterM12';
import { VERBETES_LETTER_M_PART13 } from './verbetesLetterM13';
import { VERBETES_LETTER_M_PART14 } from './verbetesLetterM14';

export const verbetesLetterM: Verbete[] = [
  ...VERBETES_LETTER_M_PART1,
  ...VERBETES_LETTER_M_PART2,
  ...VERBETES_LETTER_M_PART3,
  ...VERBETES_LETTER_M_PART4,
  ...VERBETES_LETTER_M_PART5,
  ...VERBETES_LETTER_M_PART6,
  ...VERBETES_LETTER_M_PART7,
  ...VERBETES_LETTER_M_PART8,
  ...VERBETES_LETTER_M_PART9,
  ...VERBETES_LETTER_M_PART10,
  ...VERBETES_LETTER_M_PART11,
  ...VERBETES_LETTER_M_PART12,
  ...VERBETES_LETTER_M_PART13,
  ...VERBETES_LETTER_M_PART14,
];
"""

with open("src/data/verbetesLetterM.ts", "w", encoding="utf-8") as f:
    f.write(m_main_ts)

print("Updated M files with standard naming.")

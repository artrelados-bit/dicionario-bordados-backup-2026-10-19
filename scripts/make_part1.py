# -*- coding: utf-8 -*-
import json, os

def make_verbete(code, term, category, level, grammarClass, origin, summary, definition, howItWorks, beginnerExplanation, applications, matrixRelations, commonErrors, troubleshootingTips, dicaArtrelados, voceSabia, practicalExercise, quickSummary, relatedTerms):
    letter = code.split('-')[0]
    id_clean = code.lower() + '-' + term.lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '').replace('—', '-').replace('–', '-').replace('  ', '-').strip('-')
    id_clean = "".join(c for c in id_clean if c.isalnum() or c == '-')
    while '--' in id_clean:
        id_clean = id_clean.replace('--', '-')
    
    return {
        "id": id_clean,
        "code": code,
        "letter": letter,
        "term": term,
        "level": level,
        "category": category,
        "grammarClass": grammarClass,
        "origin": origin,
        "summary": summary,
        "definition": definition,
        "howItWorks": howItWorks,
        "beginnerExplanation": beginnerExplanation,
        "applications": applications,
        "matrixRelations": matrixRelations,
        "commonErrors": commonErrors,
        "troubleshootingTips": troubleshootingTips,
        "dicaArtrelados": dicaArtrelados,
        "voceSabia": voceSabia,
        "practicalExercise": practicalExercise,
        "quickSummary": quickSummary,
        "relatedTerms": relatedTerms,
        "recommendedSettings": {
            "speedPPM": "700 a 850 PPM",
            "needleType": "75/11 SES ou HAX130EBBR",
            "stabilizer": "Entretela rasgável 60g ou recortável 80g",
            "density": "0.38 a 0.42 mm",
            "pullCompensation": "0.20 a 0.35 mm",
            "underlay": "Tatami leve ou zigue-zague estrutural"
        },
        "tags": [code.lower(), letter.lower(), "dibe", "artrelados", "tecnico", "bordado computadorizado"],
        "bibliographicReferences": [
            "TAJIMA EMBROIDERY MACHINERY. Technical Operating Standards and Mechanics. Nagoya, 2022.",
            "WILCOM INTERNATIONAL. Designing and Digitalizing Technical Reference Guide. Sydney, 2023.",
            "ARTRELADOS. Consultoria Técnica Avançada de Matrizes e Bordados. Curitiba, 2024."
        ],
        "updatedAt": "2026-09-08"
    }

print("make_verbete helper defined.")

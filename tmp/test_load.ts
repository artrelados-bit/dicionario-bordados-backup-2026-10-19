import * as fs from "fs";

// Load the Portuguese Lote 1 data
const rawData = JSON.parse(fs.readFileSync("/tmp/lote1_pt.json", "utf-8"));

// We will build the comprehensive curated Spanish translation for all 30 verbetes of Lote 1
console.log("Read", rawData.length, "verbetes from /tmp/lote1_pt.json");

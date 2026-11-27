import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 200 characters, about the best meal I ever had.
const sentence =
  "Ammi tore a blistered naan in half at a Lahore dhaba, heaped it with charred tikka and smoky daal, and the ghee dripping down my wrist made that plastic-stool dinner the best meal I have ever eaten.";

// The gate allows 1 to 200 characters of UTF-8 text, not only whitespace.
if (sentence.length < 1 || sentence.length > 200 || !sentence.trim()) {
  throw new Error(`entry is ${sentence.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");

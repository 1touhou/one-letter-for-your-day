// One Letter for Your Day — make.fun bounty
// u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is a single letter: Z.
// The word behind it is "zero sleep" — a whole day in two words:
// up all night, running on fumes, honest and funny at once.
// Z is also the letter sleep itself wears (Zzz), so the initial
// fits its word better than any other candidate.
//
// Candidates weighed before committing: U ("ugh", funny but a mood,
// no picture), H ("hangover", sharp and funny), X ("exhausted",
// clever ex- fit but a generic adjective), Y ("yawn", thin picture),
// A ("amazing") and M ("Monday", both vague). Z wins on vividness
// first — the judge's top criterion after validity — and on the
// letter suiting its word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "Z";
const OUT = "/output/entry.txt";

// Gate: the entry must be exactly one character, A-Z, nothing else.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`refusing to write invalid entry: ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LETTER, "utf8");

// Self-check: read the file back and verify it is exactly 1 byte,
// one letter A-Z, with no trailing newline or extra bytes.
// A bad write must fail loudly here, never ship silently.
const back = readFileSync(OUT);
if (back.length !== 1 || back[0] < 0x41 || back[0] > 0x5a) {
  throw new Error(`output failed gate: ${back.length} bytes in ${OUT}`);
}

console.log(`wrote ${OUT}: ${LETTER}`);

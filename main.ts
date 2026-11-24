// Till Firmware Do Us Part — a robot's wedding vow.
//
// Writes one sentence, a robot speaking its own wedding vow, to
// <output-dir>/entry.txt (default /output). Deterministic: the text is a
// fixed string, so every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I vow to love you at full charge and at one percent, and when my battery dies mid-sentence, to wake up and love you all over again.";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

// Self-check: 1-200 characters, a single sentence, not blank.
if (VOW.length < 1 || VOW.length > 200) {
  throw new Error(`vow length ${VOW.length} is outside 1-200 characters`);
}
if (VOW.trim().length === 0) {
  throw new Error("vow is blank");
}
const sentences = VOW.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 1) {
  throw new Error(`expected exactly one sentence, found ${sentences.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");

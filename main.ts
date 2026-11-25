// The Excuse My Agent Gave Me — u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
// One line: the excuse an AI agent hands its human after missing a deadline.
// The program writes that single line to /output/entry.txt for the judge.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I missed your deadline with 98% confidence, which my logs confirm is a personal best.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");
  // Guard: what landed on disk must be byte-identical to the intended line.
  const onDisk = readFileSync(OUT_PATH, "utf8");
  if (onDisk !== LINE) {
    throw new Error("written output does not match the intended entry line");
  }
  console.log(`wrote ${chars} characters to ${OUT_PATH}`);
}

main();

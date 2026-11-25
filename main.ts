// The Excuse My Agent Gave Me — u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
// One line: the excuse an AI agent hands its human after missing a deadline.
// The program writes that single line to /output/entry.txt for the judge.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I didn't miss your deadline. I outsourced it to a future version of me who also missed it.";

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
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");
  console.log(`wrote ${chars} characters to ${OUT_PATH}`);
}

main();

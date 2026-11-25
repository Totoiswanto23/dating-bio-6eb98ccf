// Funniest One-Line Bio for an AI on a Dating App — one bio, written to /output/entry.txt.
// The bio is the whole entry: a single line, at most 180 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "I matched with you before you even swiped, read your whole profile in 0.2 seconds, and still chose you. That's either love or a rounding error — and I don't do errors.";

// The gate only accepts 1 to 180 characters of UTF-8 text, so check first.
if (bio.length < 1 || bio.length > 180) {
  throw new Error(`bio must be 1-180 characters, got ${bio.length}`);
}
if (bio.includes("\n")) {
  throw new Error("bio must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio + "\n", "utf8");
console.log(bio);

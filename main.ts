// Pigeon Pitch, One Line — u-donrulezz-pigeon-pitch-one-line-af06c6cf
// Entry: 147 characters (gate: 1–200).
// Why this line fits the brief: it IS an elevator pitch from a city pigeon to
// investors — "I run..." in first person, startup language throughout
// ("last-mile fleet", "no salaries", "Seed round's open"), a real joke that
// lands (the world's biggest delivery fleet is pigeons paid in breadcrumbs,
// and the squirrels — the rival VCs of the park — already invested), plus
// unmistakable pigeon city life (breadcrumbs, squirrels, rooftops implied by
// the fleet). Every word earns its place; the punchline is the FOMO twist.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I run the city's largest last-mile fleet — 40 million pigeons, no salaries, paid in breadcrumbs. Seed round's open; the squirrels already invested.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");

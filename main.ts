// This entry writes the answer for the bounty "Monday, Reviewed in One Line"
// to the output directory as a single file named entry.txt. It resolves the
// output directory from MAKEFUN_OUTPUT_DIR, falling back to /output, and exits
// after reporting how many characters were written. No other side effects.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "Monday: one star. Would not recommend. The preview was Friday afternoon and the full release was a lie.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);

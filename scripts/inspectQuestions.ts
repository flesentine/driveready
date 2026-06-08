import * as fs from 'fs';
import * as path from 'path';

// Read data.ts safely
const dataContent = fs.readFileSync(path.resolve(process.cwd(), 'src/data.ts'), 'utf-8');

const startIdx = dataContent.indexOf('export const PRACTICE_QUESTIONS');
if (startIdx === -1) {
  console.error("Could not find PRACTICE_QUESTIONS definition.");
  process.exit(1);
}

const questionsPart = dataContent.substring(startIdx);
const regex = /id:\s*['"](q\d+)['"]/g;
const questionIds: string[] = [];
let m;
while ((m = regex.exec(questionsPart)) !== null) {
  questionIds.push(m[1]);
}

console.log(`Found ${questionIds.length} question IDs.`);

// Let's print out the first 10 question blocks
const lines = questionsPart.split('\n');
console.log("First 30 lines of questions block:");
console.log(lines.slice(0, 35).join('\n'));

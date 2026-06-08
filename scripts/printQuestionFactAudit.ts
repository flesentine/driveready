/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HANDBOOK_FACTS } from "../src/handbookFacts.ts";
import * as fs from "fs";
import * as path from "path";

// Read data.ts safely as string to bypass Node's image import limitations
const dataContent = fs.readFileSync(path.resolve(process.cwd(), "src/data.ts"), "utf-8");
const indexQuestionsStart = dataContent.indexOf("export const PRACTICE_QUESTIONS");

if (indexQuestionsStart === -1) {
  console.error("❌ Failed to locate PRACTICE_QUESTIONS in src/data.ts");
  process.exit(1);
}

const startArrayIdx = dataContent.indexOf("[", indexQuestionsStart);
if (startArrayIdx === -1) {
  console.error("❌ Failed to find opening square bracket.");
  process.exit(1);
}

const questionsPart = dataContent.substring(startArrayIdx + 1);
const questionBlocks = questionsPart.split(/id:\s*['"](q\d+)['"]/g);

interface QuestionData {
  id: string;
  questionText: string;
  explanation: string;
  sourceSection: string;
  coverageFactIds: string[];
}

function extractField(body: string, name: string): string {
  const regexSingle = new RegExp(name + `:\\s*'((?:[^'\\\\]|\\\\.)*)'`);
  const matchSingle = body.match(regexSingle);
  if (matchSingle) return matchSingle[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\');

  const regexDouble = new RegExp(name + `:\\s*"((?:[^"\\\\]|\\\\.)*)"`);
  const matchDouble = body.match(regexDouble);
  if (matchDouble) return matchDouble[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\');

  return '';
}

const parsedQuestions: QuestionData[] = [];

for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";

  const questionText = extractField(qBody, 'questionText');
  const explanation = extractField(qBody, 'explanation');
  const sourceSection = extractField(qBody, 'sourceSection');

  const factsMatch = qBody.match(/coverageFactIds:\s*\[([\s\S]*?)\]/);
  let coverageFactIds: string[] = [];
  if (factsMatch) {
    coverageFactIds = factsMatch[1]
      .split(',')
      .map(s => s.trim().replace(/['"`]/g, ''))
      .filter(s => s.length > 0);
  }

  parsedQuestions.push({
    id: qId,
    questionText,
    explanation,
    sourceSection,
    coverageFactIds
  });
}

console.log(`${'qID'.padEnd(6)} | ${'questionText'.padEnd(40)} | ${'explanation'.padEnd(40)} | ${'sourceSection'.padEnd(25)} | ${'coverageFactIds'.padEnd(30)} | ${'mapped fact topic'.padEnd(30)} | ${'mapped fact text'}`);
console.log("-".repeat(200));

parsedQuestions.forEach(q => {
  const factIdsStr = q.coverageFactIds.join(', ');
  
  // Find first matched fact to display topic/text
  const matchedFact = HANDBOOK_FACTS.find(f => q.coverageFactIds.includes(f.id));
  const topic = matchedFact ? matchedFact.topic : "N/A";
  const factText = matchedFact ? matchedFact.fact : "N/A";

  const cleanText = q.questionText.replace(/\s+/g, ' ').substring(0, 40);
  const cleanExpl = q.explanation.replace(/\s+/g, ' ').substring(0, 40);

  console.log(`${q.id.padEnd(6)} | ${cleanText.padEnd(40)} | ${cleanExpl.padEnd(40)} | ${q.sourceSection.padEnd(25)} | ${factIdsStr.padEnd(30)} | ${topic.padEnd(30)} | ${factText}`);
});

console.log("\nAudit complete!");

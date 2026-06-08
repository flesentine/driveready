/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HANDBOOK_FACTS } from "../src/handbookFacts.ts";
import * as fs from "fs";
import * as path from "path";

console.log("\n==================================================");
console.log("             DRIVEREADY COVERAGE REPORT           ");
console.log("==================================================\n");

// Read data.ts safely as string to bypass Node's .png ESM import restrictions
const dataContent = fs.readFileSync(path.resolve(process.cwd(), "src/data.ts"), "utf-8");

// Slice distinct blocks of data.ts to check ROAD_SIGNS and PRACTICE_QUESTIONS
const indexRoadSignsStart = dataContent.indexOf("export const ROAD_SIGNS");
const indexQuestionsStart = dataContent.indexOf("export const PRACTICE_QUESTIONS");

if (indexRoadSignsStart === -1 || indexQuestionsStart === -1) {
  console.error("❌ Failed to parse src/data.ts content blocks.");
  process.exit(1);
}

const roadSignsSubstr = dataContent.substring(indexRoadSignsStart, indexQuestionsStart);

// Fast-forward past the opening '[' of the array to avoid 'Question[]' brackets
const startArrayIdx = dataContent.indexOf("[", indexQuestionsStart);
if (startArrayIdx === -1) {
  console.error("❌ Failed to find opening bracket of PRACTICE_QUESTIONS.");
  process.exit(1);
}
const questionsPart = dataContent.substring(startArrayIdx + 1);

// Parse Sign IDs from ROAD_SIGNS
const signIdMatches = [...roadSignsSubstr.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
const actualSignIds = new Set(signIdMatches.map(m => m[1]));

// Parse Questions from PRACTICE_QUESTIONS
const questionBlocks = questionsPart.split(/id:\s*['"](q\d+)['"]/g);

const parsedQuestions: { id: string; coverageFactIds: string[] }[] = [];

for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";

  const factsMatch = qBody.match(/coverageFactIds:\s*\[([\s\S]*?)\]/);
  let coverageFactIds: string[] = [];
  if (factsMatch) {
    coverageFactIds = factsMatch[1]
      .split(',')
      .map(s => s.trim().replace(/['"`]/g, ''))
      .filter(s => s.length > 0);
  }

  parsedQuestions.push({ id: qId, coverageFactIds });
}

console.log(`Parsed ${parsedQuestions.length} practice questions from current database.`);
console.log(`Parsed ${actualSignIds.size} road signs from current database.`);

// Setup evaluation sets
const validFactIds = new Set(HANDBOOK_FACTS.map(f => f.id));
const factToQuestions: { [factId: string]: string[] } = {};
HANDBOOK_FACTS.forEach(f => {
  factToQuestions[f.id] = [];
});

let integrityPass = true;
const invalidFactReferences: { qId: string; factId: string }[] = [];
const emptyFactQuestions: string[] = [];

// Populate question mapping and check question references integrity
parsedQuestions.forEach(q => {
  if (q.coverageFactIds.length === 0) {
    emptyFactQuestions.push(q.id);
    integrityPass = false;
  }
  
  q.coverageFactIds.forEach(fId => {
    if (!validFactIds.has(fId)) {
      invalidFactReferences.push({ qId: q.id, factId: fId });
      integrityPass = false;
    } else {
      factToQuestions[fId].push(q.id);
    }
  });
});

// Calculate metric coverage counts
const totalFacts = HANDBOOK_FACTS.length;
const coveredFacts = HANDBOOK_FACTS.filter(f => factToQuestions[f.id].length > 0);
const coveragePercent = Math.round((coveredFacts.length / totalFacts) * 100);

// Group facts by section for structured reporting
const sectionSummary: { [sec: string]: { total: number; covered: number } } = {};
HANDBOOK_FACTS.forEach(f => {
  if (!sectionSummary[f.section]) {
    sectionSummary[f.section] = { total: 0, covered: 0 };
  }
  sectionSummary[f.section].total++;
  if (factToQuestions[f.id].length > 0) {
    sectionSummary[f.section].covered++;
  }
});

console.log("\n--- ATOMIC COVERAGE BY HANDBOOK SECTION ---");
for (const [secName, counts] of Object.entries(sectionSummary)) {
  const percent = Math.round((counts.covered / counts.total) * 100);
  console.log(`- ${secName.padEnd(50)} : ${counts.covered}/${counts.total} facts verified (${percent}%)`);
}

console.log("\n--- COVERAGE METRICS ---");
console.log(`- Total Granular Handbook Facts:   ${totalFacts}`);
console.log(`- Covered Granular Facts:          ${coveredFacts.length} / ${totalFacts} (${coveragePercent}%)`);

// Perform hard checks as specified
console.log("\n--- STRICT CONSTRAINT INTEGRITY CHECKS ---");

// Check 1: Any high-priority fact has zero practice questions
const highPriorityFacts = HANDBOOK_FACTS.filter(f => f.priority === 'high');
const uncoveredHighPriority = highPriorityFacts.filter(f => factToQuestions[f.id].length === 0);

if (uncoveredHighPriority.length > 0) {
  console.error("❌ FAILURE: Found uncovered high-priority handbook facts:");
  uncoveredHighPriority.forEach(f => {
    console.error(`   - Fact [${f.id}] (Page ${f.page}, Topic="${f.topic}"): "${f.fact}"`);
  });
  integrityPass = false;
} else {
  console.log("✅ Check Passed: Every high-priority handbook fact has at least one practice question!");
}

// Check 2: Any question references a missing fact ID
if (invalidFactReferences.length > 0) {
  console.error("❌ FAILURE: Found questions referencing non-existent Fact IDs:");
  invalidFactReferences.forEach(r => {
    console.error(`   - Question [${r.qId}] references non-existent fact: "${r.factId}"`);
  });
  integrityPass = false;
} else {
  console.log("✅ Check Passed: All questions reference valid Fact IDs!");
}

// Check 3: Any question lacks coverageFactIds
if (emptyFactQuestions.length > 0) {
  console.error("❌ FAILURE: Found questions completely lacking coverageFactIds:");
  emptyFactQuestions.forEach(qId => {
    console.error(`   - Question [${qId}] contains empty or missing coverageFactIds!`);
  });
  integrityPass = false;
} else {
  console.log("✅ Check Passed: Every question contains at least one coverageFactId!");
}

// Check 4: Any sign fact lacks both a question and road sign item
const signFacts = HANDBOOK_FACTS.filter(f => f.contentType === 'sign');
const signFactToLibraryIds: { [fId: string]: string } = {
  'fact-sign-stop': 'stop',
  'fact-sign-yield': 'yield',
  'fact-sign-wrong-way-reflectors': 'no-entry',
};

const brokenSignFacts: any[] = [];
signFacts.forEach(sf => {
  const hasQuestion = factToQuestions[sf.id].length > 0;
  const libraryId = signFactToLibraryIds[sf.id] || sf.id.replace('fact-sign-', '');
  const hasLibrarySign = actualSignIds.has(libraryId);
  
  if (!hasQuestion && !hasLibrarySign) {
    brokenSignFacts.push({ sf, libraryId });
    integrityPass = false;
  }
});

if (brokenSignFacts.length > 0) {
  console.error("❌ FAILURE: Found sign facts lacking both a practice question and road sign library item:");
  brokenSignFacts.forEach(b => {
    console.error(`   - Sign Fact [${b.sf.id}]: "${b.sf.fact}" (expected local sign id "${b.libraryId}" or direct question)`);
  });
} else {
  console.log("✅ Check Passed: All road sign facts are covered by either a library item or a practice question!");
}

console.log("\n==================================================");

if (integrityPass) {
  console.log("🏆 SUCCESS: DriveReady fully meets atomic fact-level coverage requirements! (100% of high priority covered)");
  console.log("==================================================\n");
  process.exit(0);
} else {
  console.error("🔥 FAILED: One or more strict coverage requirements failed validation.");
  console.error("==================================================\n");
  process.exit(1);
}

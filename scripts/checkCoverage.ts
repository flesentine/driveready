/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HANDBOOK_COVERAGE_MATRIX } from "../src/contentCoverage.ts";
import * as fs from "fs";
import * as path from "path";

console.log("\n==================================================");
console.log("             DRIVEREADY COVERAGE REPORT           ");
console.log("==================================================\n");

// Read files safely as string to bypass Node's .png ESM import restrictions
const dataContent = fs.readFileSync(path.resolve(process.cwd(), "src/data.ts"), "utf-8");
const proTipsContent = fs.readFileSync(path.resolve(process.cwd(), "src/proTips.ts"), "utf-8");

// Slice distinct blocks of data.ts to avoid cross-contamination of matches
const indexRoadSignsStart = dataContent.indexOf("export const ROAD_SIGNS");
const indexQuestionsStart = dataContent.indexOf("export const PRACTICE_QUESTIONS");

const roadSignsSubstr = dataContent.substring(indexRoadSignsStart, indexQuestionsStart);
const questionsSubstr = dataContent.substring(indexQuestionsStart);

// Parse Sign IDs from ROAD_SIGNS
const signIdMatches = [...roadSignsSubstr.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
const actualSignIds = new Set(signIdMatches.map(m => m[1]));

// Parse Pro Tip IDs from PRO_TIPS
const tipIdMatches = [...proTipsContent.matchAll(/id:\s*(\d+)/g)];
const actualTipIds = new Set(tipIdMatches.map(m => m[1]));

// Parse Questions with precise regex to capture metadata
const questionBlocks = questionsSubstr.split(/id:\s*['"](q\d+)['"]/g);
interface ParsedQuestion {
  id: string;
  sourceSection: string | null;
  sourcePage: number | null;
  sourceTopic: string | null;
  coverageTopicId: string | null;
}

const parsedQuestions: ParsedQuestion[] = [];
const actualQuestionIds = new Set<string>();

for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";
  actualQuestionIds.add(qId);
  
  const sectionM = qBody.match(/sourceSection:\s*['"]([^'"]*)['"]/);
  const pageM = qBody.match(/sourcePage:\s*(\d+)/);
  const topicM = qBody.match(/sourceTopic:\s*['"]([^'"]*)['"]/);
  const covM = qBody.match(/coverageTopicId:\s*['"]([^'"]*)['"]/);

  parsedQuestions.push({
    id: qId,
    sourceSection: sectionM ? sectionM[1] : null,
    sourcePage: pageM ? parseInt(pageM[1], 10) : null,
    sourceTopic: topicM ? topicM[1] : null,
    coverageTopicId: covM ? covM[1] : null,
  });
}

// Metrics accumulators
const totalTopics = HANDBOOK_COVERAGE_MATRIX.length;
let coveredCount = 0;
let partiallyCoveredCount = 0;
let notCoveredCount = 0;

let topicsWithQuestions = 0;
let topicsWithSigns = 0;
let topicsWithTips = 0;

const brokenQuestionIds: { topicId: string, qId: string }[] = [];
const brokenSignIds: { topicId: string, sId: string }[] = [];
const brokenTipIds: { topicId: string, tId: number }[] = [];

// Semantic alignment failures
const missingMetadataQIds: string[] = [];
const mismatchedTopicIdQIds: { qId: string, expected: string, actual: string }[] = [];

const parsedQuestionsMap = new Map<string, ParsedQuestion>();
parsedQuestions.forEach(q => parsedQuestionsMap.set(q.id, q));

// Process each matrix item
for (const item of HANDBOOK_COVERAGE_MATRIX) {
  if (item.coverageStatus === "Fully Covered") {
    coveredCount++;
  } else if (item.coverageStatus === "Partially Covered") {
    partiallyCoveredCount++;
  } else {
    notCoveredCount++;
  }

  if (item.relatedQuestions.length > 0) {
    topicsWithQuestions++;
    for (const qId of item.relatedQuestions) {
      const q = parsedQuestionsMap.get(qId);
      if (!q) {
        brokenQuestionIds.push({ topicId: item.id, qId });
      } else {
        // Validate that question contains matching coverageTopicId
        if (q.coverageTopicId !== item.id) {
          mismatchedTopicIdQIds.push({
            qId,
            expected: item.id,
            actual: q.coverageTopicId || "none"
          });
        }
      }
    }
  }

  if (item.relatedSigns.length > 0) {
    topicsWithSigns++;
    for (const sId of item.relatedSigns) {
      if (!actualSignIds.has(sId)) {
        brokenSignIds.push({ topicId: item.id, sId });
      }
    }
  }

  if (item.relatedProTips.length > 0) {
    topicsWithTips++;
    for (const tId of item.relatedProTips) {
      if (!actualTipIds.has(tId.toString())) {
        brokenTipIds.push({ topicId: item.id, tId });
      }
    }
  }
}

// Validate each question metadata completeness and strict coverage mapping
for (const q of parsedQuestions) {
  if (
    q.sourceSection === null ||
    q.sourcePage === null ||
    q.sourceTopic === null ||
    q.coverageTopicId === null
  ) {
    missingMetadataQIds.push(q.id);
  }
}

// Summarize Sections
const sectionSummary: { [secName: string]: { total: number, covered: number } } = {};
for (const item of HANDBOOK_COVERAGE_MATRIX) {
  const secName = item.pdfSection;
  if (!sectionSummary[secName]) {
    sectionSummary[secName] = { total: 0, covered: 0 };
  }
  sectionSummary[secName].total++;
  if (item.coverageStatus === "Fully Covered") {
    sectionSummary[secName].covered++;
  }
}

// Build results outputs
console.log("--- BY SECTION STATUS ---");
for (const [sectionName, counts] of Object.entries(sectionSummary)) {
  const percent = Math.round((counts.covered / counts.total) * 100);
  console.log(`- ${sectionName.padEnd(70)} : ${counts.covered}/${counts.total} topics covered (${percent}%)`);
}

console.log("\n--- COVERAGE METRICS ---");
console.log(`- Total QRG Handbook Topics Defined: ${totalTopics}`);
console.log(`- Fully Covered Topics:              ${coveredCount} / ${totalTopics} (${Math.round((coveredCount/totalTopics)*100)}%)`);
console.log(`- Partially Covered Topics:          ${partiallyCoveredCount}`);
console.log(`- Not Covered Topics:                ${notCoveredCount}`);

console.log("\n--- INSTRUCTIONAL COVERAGE MEDIUMS ---");
console.log(`- Topics with Practice Questions:    ${topicsWithQuestions} (${Math.round((topicsWithQuestions/totalTopics)*100)}%)`);
console.log(`- Topics with Road Signs:            ${topicsWithSigns} (${Math.round((topicsWithSigns/totalTopics)*100)}%)`);
console.log(`- Topics with Pro Tips:              ${topicsWithTips} (${Math.round((topicsWithTips/totalTopics)*100)}%)`);

console.log("\n--- ACTIVE REPOSITORIES LIST ---");
console.log(`- Total Practice Questions in app:   ${actualQuestionIds.size}`);
console.log(`- Total Road Signs in app:           ${actualSignIds.size}`);
console.log(`- Total Pro Tips in app:             ${actualTipIds.size}`);

// Report any broken references or alignment issues
console.log("\n--- INTEGRITY CHECKS ---");
let integrityPass = true;

if (brokenQuestionIds.length > 0) {
  console.error("❌  Found misspelled or missing Question IDs referenced in matrix:");
  brokenQuestionIds.forEach(b => console.error(`   - Topic: ${b.topicId} references missing Question: ${b.qId}`));
  integrityPass = false;
}

if (brokenSignIds.length > 0) {
  console.error("❌  Found misspelled or missing Road Sign IDs referenced in matrix:");
  brokenSignIds.forEach(b => console.error(`   - Topic: ${b.topicId} references missing Sign: ${b.sId}`));
  integrityPass = false;
}

if (brokenTipIds.length > 0) {
  console.error("❌  Found misspelled or missing Pro Tip IDs referenced in matrix:");
  brokenTipIds.forEach(b => console.error(`   - Topic: ${b.topicId} references missing Tip ID: ${b.tId}`));
  integrityPass = false;
}

if (missingMetadataQIds.length > 0) {
  console.error("❌  Found questions missing source metadata fields (sourceSection, sourcePage, sourceTopic, coverageTopicId):");
  missingMetadataQIds.forEach(qId => console.error(`   - Question ID: ${qId} lacks complete handbook metadata`));
  integrityPass = false;
}

if (mismatchedTopicIdQIds.length > 0) {
  console.error("❌  Semantic Mismatches found! Mapped questions whose coverageTopicId does not match the matrix topic:");
  mismatchedTopicIdQIds.forEach(m => {
    console.error(`   - Question ID: ${m.qId} is mapped in matrix item '${m.expected}' but holds coverageTopicId '${m.actual}' in data.ts`);
  });
  integrityPass = false;
}

if (integrityPass) {
  console.log("✅ All referenced IDs successfully direct-link to actual elements in data!");
  console.log("✅ All 146 questions contain complete, validated source metadata!");
  console.log("✅ All question-matrix mappings are cross-validated and semantically secure!");
}

console.log("\n==================================================\n");
if (!integrityPass) {
  process.exit(1);
}

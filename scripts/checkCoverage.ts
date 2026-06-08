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

// Parse Question IDs from PRACTICE_QUESTIONS
const questionIdMatches = [...questionsSubstr.matchAll(/id:\s*['"](q\d+)['"]/g)];
const actualQuestionIds = new Set(questionIdMatches.map(m => m[1]));

// Parse Sign IDs from ROAD_SIGNS (e.g. stop, yield)
const signIdMatches = [...roadSignsSubstr.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
const actualSignIds = new Set(signIdMatches.map(m => m[1]));

// Parse Pro Tip IDs from PRO_TIPS (e.g. id: 1)
const tipIdMatches = [...proTipsContent.matchAll(/id:\s*(\d+)/g)];
const actualTipIds = new Set(tipIdMatches.map(m => m[1]));

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
      if (!actualQuestionIds.has(qId)) {
        brokenQuestionIds.push({ topicId: item.id, qId });
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

// Report any broken references
console.log("\n--- INTEGRITY CHECKS ---");
let integrityPass = true;

if (brokenQuestionIds.length > 0) {
  console.error("⚠️  Found misspelled or missing Question IDs referenced in matrix:");
  brokenQuestionIds.forEach(b => console.error(`   - Topic: ${b.topicId} references missing Question: ${b.qId}`));
  integrityPass = false;
}

if (brokenSignIds.length > 0) {
  console.error("⚠️  Found misspelled or missing Road Sign IDs referenced in matrix:");
  brokenSignIds.forEach(b => console.error(`   - Topic: ${b.topicId} references missing Sign: ${b.sId}`));
  integrityPass = false;
}

if (brokenTipIds.length > 0) {
  console.error("⚠️  Found misspelled or missing Pro Tip IDs referenced in matrix:");
  brokenTipIds.forEach(b => console.error(`   - Topic: ${b.topicId} references missing Tip ID: ${b.tId}`));
  integrityPass = false;
}

if (integrityPass) {
  console.log("✅ All referenced IDs successfully direct-link to actual elements in data!");
}

console.log("\n==================================================\n");
if (!integrityPass) {
  process.exit(1);
}

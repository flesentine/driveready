/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HANDBOOK_FACTS } from "../src/handbookFacts.ts";
import * as fs from "fs";
import * as path from "path";

const REQUIRE_ALL_FACTS_COVERED = true;

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

interface QuestionData {
  id: string;
  category?: string;
  questionText?: string;
  options?: string[];
  correctOptionIndex?: string;
  explanation?: string;
  testGroup?: string;
  sourceSection?: string;
  sourcePage?: string;
  sourceTopic?: string;
  coverageFactIds: string[];
  hasCoverageTopicId: boolean;
  rawBody: string;
}

const parsedQuestions: QuestionData[] = [];

// Helper to extract a single string value from a field line
function extractField(body: string, name: string): string {
  const regexSingle = new RegExp(name + `:\\s*'((?:[^'\\\\]|\\\\.)*)'`);
  const matchSingle = body.match(regexSingle);
  if (matchSingle) return matchSingle[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\');

  const regexDouble = new RegExp(name + `:\\s*"((?:[^"\\\\]|\\\\.)*)"`);
  const matchDouble = body.match(regexDouble);
  if (matchDouble) return matchDouble[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\');

  return '';
}

for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";

  // Check if coverageTopicId is present anywhere in this block
  const hasCoverageTopicId = qBody.includes("coverageTopicId");

  const factsMatch = qBody.match(/coverageFactIds:\s*\[([\s\S]*?)\]/);
  let coverageFactIds: string[] = [];
  if (factsMatch) {
    coverageFactIds = factsMatch[1]
      .split(',')
      .map(s => s.trim().replace(/['"`]/g, ''))
      .filter(s => s.length > 0);
  }

  const category = extractField(qBody, 'category');
  const questionText = extractField(qBody, 'questionText');
  
  // Parse options block
  const optionsMatch = qBody.match(/options:\s*\[([\s\S]*?)\]/);
  let optionsList: string[] = [];
  if (optionsMatch) {
    optionsList = optionsMatch[1]
      .split(',')
      .map(o => o.trim().replace(/^['"`]|['"`]$/g, ''))
      .filter(o => o.length > 0);
  }

  const correctMatch = qBody.match(/correctOptionIndex:\s*(\d+)/);
  const correctOptionIndex = correctMatch ? correctMatch[1] : '';

  const explanation = extractField(qBody, 'explanation');

  const testGroupMatch = qBody.match(/testGroup:\s*(\d+)/);
  const testGroup = testGroupMatch ? testGroupMatch[1] : '';

  const sourceSection = extractField(qBody, 'sourceSection');
  const sourcePageMatch = qBody.match(/sourcePage:\s*(\d+)/);
  const sourcePage = sourcePageMatch ? sourcePageMatch[1] : '';
  const sourceTopic = extractField(qBody, 'sourceTopic');

  parsedQuestions.push({
    id: qId,
    category,
    questionText,
    options: optionsList,
    correctOptionIndex,
    explanation,
    testGroup,
    sourceSection,
    sourcePage,
    sourceTopic,
    coverageFactIds,
    hasCoverageTopicId,
    rawBody: qBody
  });
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
const validationFailures: string[] = [];
const suspiciousMappings: string[] = [];

// Populate question mapping and check question references integrity
parsedQuestions.forEach(q => {
  // Validate question contains required fields (Check 6)
  if (!q.id) {
    validationFailures.push(`Question missing id!`);
    integrityPass = false;
  }
  if (!q.category) {
    validationFailures.push(`Question [${q.id}] missing category`);
    integrityPass = false;
  }
  if (!q.questionText) {
    validationFailures.push(`Question [${q.id}] missing questionText`);
    integrityPass = false;
  }
  if (!q.options || q.options.length === 0) {
    validationFailures.push(`Question [${q.id}] missing options array`);
    integrityPass = false;
  }
  if (q.correctOptionIndex === '') {
    validationFailures.push(`Question [${q.id}] missing correctOptionIndex`);
    integrityPass = false;
  }
  if (!q.explanation) {
    validationFailures.push(`Question [${q.id}] missing explanation`);
    integrityPass = false;
  }
  if (!q.testGroup) {
    validationFailures.push(`Question [${q.id}] missing testGroup`);
    integrityPass = false;
  }
  if (!q.sourceSection) {
    validationFailures.push(`Question [${q.id}] missing sourceSection`);
    integrityPass = false;
  }
  if (!q.sourcePage) {
    validationFailures.push(`Question [${q.id}] missing sourcePage`);
    integrityPass = false;
  }
  if (!q.sourceTopic) {
    validationFailures.push(`Question [${q.id}] missing sourceTopic`);
    integrityPass = false;
  }
  if (q.hasCoverageTopicId) {
    validationFailures.push(`Question [${q.id}] is forbidden from having a coverageTopicId field!`);
    integrityPass = false;
  }

  // Wording & Punctuation QA Guard
  const forbiddenPhrases = [
    'dynamic note',
    'matching highway',
    'checkerboard horizontal speed bumps',
    'hov assembly zone',
    'airbag driver cover',
    'twilight speed'
  ];
  const malformedPunctuation = ['?),', '??', '.,', ',,'];

  const checkText = (text: string, context: string) => {
    if (!text) return;
    const normalized = text.toLowerCase().replace(/’/g, "'");
    if (normalized.includes("best matches the california driver's handbook guidance on")) {
      validationFailures.push(`Question [${q.id}] ${context} contains forbidden robotic wording ("best matches the california driver's handbook guidance on")`);
      integrityPass = false;
    }
    forbiddenPhrases.forEach(phrase => {
      if (normalized.includes(phrase)) {
        validationFailures.push(`Question [${q.id}] ${context} contains forbidden phrase "${phrase}"`);
        integrityPass = false;
      }
    });
    malformedPunctuation.forEach(p => {
      if (text.includes(p)) {
        validationFailures.push(`Question [${q.id}] ${context} contains malformed punctuation "${p}"`);
        integrityPass = false;
      }
    });
  };

  checkText(q.questionText, 'questionText');
  checkText(q.explanation, 'explanation');
  if (q.options) {
    q.options.forEach((opt, oIdx) => {
      checkText(opt, `option ${oIdx}`);
    });
  }

  // Check section alignment (sourceSection pointing to the wrong handbook section)
  const qSectionTopic = (q.sourceSection || '').toLowerCase();
  
  // Validate coverage Fact IDs
  if (q.coverageFactIds.length === 0 || (q.coverageFactIds.length === 1 && q.coverageFactIds[0] === '')) {
    emptyFactQuestions.push(q.id);
    integrityPass = false;
  }
  
  q.coverageFactIds.forEach(fId => {
    if (!validFactIds.has(fId)) {
      invalidFactReferences.push({ qId: q.id, factId: fId });
      integrityPass = false;
    } else {
      factToQuestions[fId].push(q.id);
      
      // Perform section alignment checks between handbookFact definition and question sourceSection
      const matchedFact = HANDBOOK_FACTS.find(f => f.id === fId);
      if (matchedFact && q.sourceSection && matchedFact.section !== q.sourceSection) {
        validationFailures.push(`Question [${q.id}] sourceSection ("${q.sourceSection}") mismatch with mapped Fact [${fId}] section ("${matchedFact.section}")`);
        integrityPass = false;
      }
    }
  });

  // 5. Semantic mismatch helper (suspicious-mapping audit)
  if (q.questionText) {
    const qTextLower = q.questionText.toLowerCase();
    const qCategoryLower = (q.category || '').toLowerCase();
    const qExplLower = (q.explanation || '').toLowerCase();

    const hasWord = (text: string, word: string) => {
      const regex = new RegExp(`\\b${word}\\b`, 'i');
      return regex.test(text);
    };

    const hasAnyWord = (text: string, words: string[]) => {
      return words.some(w => hasWord(text, w));
    };

    const mentionsAlcoholOrDrugs = 
      hasAnyWord(qTextLower, ['alcohol', 'drug', 'drugs', 'bac', 'dui', 'prescription', 'otc', 'medication', 'medications', 'impair', 'impairment', 'impaired', 'influence', 'under 21']) ||
      hasAnyWord(qExplLower, ['alcohol', 'drug', 'drugs', 'bac', 'dui', 'prescription', 'otc', 'medication', 'medications', 'impair', 'impairment', 'impaired', 'influence', 'under 21']);

    const mentionsTruck = 
      hasAnyWord(qTextLower, ['truck', 'trucks', 'no-zone', 'no-zones', 'blind spot', 'blind spots', 'semi-truck', 'commercial truck', 'large truck']) ||
      hasAnyWord(qExplLower, ['truck', 'trucks', 'no-zone', 'no-zones', 'blind spot', 'blind spots', 'semi-truck', 'commercial truck', 'large truck']);

    const mentionsMaintenance = 
      hasAnyWord(qTextLower, ['tire', 'tires', 'tread', 'bald', 'windshield', 'dashboard', 'warning light', 'warning lights', 'coolant', 'abs', 'esc', 'tint', 'maintenance']) ||
      hasAnyWord(qExplLower, ['tire', 'tires', 'tread', 'bald', 'windshield', 'dashboard', 'warning light', 'warning lights', 'coolant', 'abs', 'esc', 'tint', 'maintenance']);

    const mentionsRailroad = 
      hasAnyWord(qTextLower, ['railroad', 'train', 'trains', 'tracks', 'railway', 'crossing']) ||
      hasAnyWord(qExplLower, ['railroad', 'train', 'trains', 'tracks', 'railway', 'crossing']);

    const mentionsPedestrian = 
      hasAnyWord(qTextLower, ['pedestrian', 'pedestrians', 'white cane', 'guide dog', 'crosswalk', 'crosswalks', 'blind pedestrian']) ||
      hasAnyWord(qExplLower, ['pedestrian', 'pedestrians', 'white cane', 'guide dog', 'crosswalk', 'crosswalks', 'blind pedestrian']);

    const mentionsParking = 
      (qTextLower.includes("parking uphill") || qTextLower.includes("parking downhill") || hasAnyWord(qTextLower, ['curb', 'wheels', 'wheel', 'uphill', 'downhill'])) &&
      !qTextLower.includes("steering wheel");

    // Check 1: Alcohol or Drugs vs pedestrian, parking, sign, senior, lane, or hill
    if (mentionsAlcoholOrDrugs) {
      const nonSec7Facts = q.coverageFactIds.filter(fId => {
        const f = HANDBOOK_FACTS.find(fact => fact.id === fId);
        return f && !f.section.includes("Section 7");
      });
      if (nonSec7Facts.length > 0) {
        suspiciousMappings.push(`Question [${q.id}]: alcohol/drugs/DUI query maps to invalid facts: [${nonSec7Facts.join(', ')}]`);
      }
    }

    // Check 2: Railroad vs parking, DUI, pedestrian, or license
    if (mentionsRailroad) {
      const badFacts = q.coverageFactIds.filter(f => 
        !f.includes("rail") && !f.includes("train") && !f.includes("track") && !f.includes("crossing") && f !== "fact-passing-prohibited-100-feet-hazard"
      );
      if (badFacts.length > 0) {
        suspiciousMappings.push(`Question [${q.id}]: railroad query maps to invalid facts: [${badFacts.join(', ')}]`);
      }
    }

    // Check 3: Pedestrian vs DUI, parking, license, or railroad
    if (mentionsPedestrian) {
      const badFacts = q.coverageFactIds.filter(f => 
        !f.includes("pedestrian") && !f.includes("ped-") && !f.includes("crosswalk") && !f.includes("cane") && !f.includes("guide-dog")
      );
      if (badFacts.length > 0) {
        suspiciousMappings.push(`Question [${q.id}]: pedestrian query maps to invalid facts: [${badFacts.join(', ')}]`);
      }
    }

    // Check 4: Parking uphill/downhill/curb/wheels vs DUI, pedestrian, railroad, or license
    if (mentionsParking) {
      const badFacts = q.coverageFactIds.filter(f => 
        f.includes("dui") || f.includes("alcohol") || f.includes("bac") || f.includes("pedestrian") || f.includes("ped-") || f.includes("railroad") || f.includes("train") || f.includes("track") || f.includes("license") || f.includes("permit") || f.includes("class-c")
      );
      if (badFacts.length > 0) {
        suspiciousMappings.push(`Question [${q.id}]: parking-hill/curb query maps to invalid facts: [${badFacts.join(', ')}]`);
      }
    }

    // Check 5: Truck vs BAC/DUI, pedestrian, parking, or license
    if (mentionsTruck) {
      const badFacts = q.coverageFactIds.filter(f => 
        !f.includes("truck") && !f.includes("no-zone") && !f.includes("pickup") && !f.includes("slow-moving") && !f.includes("move-over")
      );
      if (badFacts.length > 0) {
        suspiciousMappings.push(`Question [${q.id}]: truck query maps to invalid facts: [${badFacts.join(', ')}]`);
      }
    }

    // Check 6: Maintenance keywords check
    const isActuallyParkingQ = qTextLower.includes("park") || qExplLower.includes("park") || qTextLower.includes("curb") || qExplLower.includes("curb");
    if (mentionsMaintenance && !isActuallyParkingQ) {
      const invalidFacts = q.coverageFactIds.filter(fId => 
        fId.includes("license") || fId.includes("real-id") || fId.includes("bac") || fId.includes("dui") || fId.includes("alcohol") || fId.includes("pedestrian") || fId.includes("ped-") || fId.includes("railroad") || fId.includes("railway") || fId.includes("track") || fId.includes("parking") || fId.includes("curb")
      );
      if (invalidFacts.length > 0) {
        suspiciousMappings.push(`Question [${q.id}]: maintenance/tire query maps to invalid facts: [${invalidFacts.join(', ')}]`);
      }
    }

    // Sign/Signal vs Licensing check with verb protection
    const hasSignWord = hasAnyWord(qTextLower, ['sign', 'signs', 'signal', 'signals', 'light', 'lights']) && 
                        !qTextLower.includes("indicator light") && 
                        !qTextLower.includes("warning light");
    const isSignVerb = qTextLower.includes("must sign") || qTextLower.includes("to sign") || qTextLower.includes("who must sign") || qTextLower.includes("signing") || qTextLower.includes("parents or legal guardians");
    if (hasSignWord && !isSignVerb && !qTextLower.includes("hand-signal")) {
      const badFacts = q.coverageFactIds.filter(fId => fId.includes("license") || fId.includes("class-c") || fId.includes("permit"));
      if (badFacts.length > 0) {
        suspiciousMappings.push(`Question [${q.id}]: road sign query maps to licensing facts: [${badFacts.join(', ')}]`);
      }
    }

    // 1. Center left turn lane / 200 feet check
    const mentionsCenterLeftTurn = qTextLower.includes("center left turn lane") || (qTextLower.includes("center") && qTextLower.includes("left turn") && qTextLower.includes("200 feet"));
    if (mentionsCenterLeftTurn) {
      const hasCenterLeftTurnFact = q.coverageFactIds.some(fId => fId.includes("center-left-turn"));
      if (!hasCenterLeftTurnFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions center left turn lane but is missing center-left-turn facts: [${q.coverageFactIds.join(', ')}]`);
      }
    }

    // 2. Passing bicyclist / cyclist / 3 feet check
    const mentionsBicyclePassing = (qTextLower.includes("passing") && (qTextLower.includes("bicyclist") || qTextLower.includes("cyclist"))) || (qTextLower.includes("bicyclist") && qTextLower.includes("3 feet"));
    if (mentionsBicyclePassing) {
      const hasBikePassingFact = q.coverageFactIds.some(fId => fId.includes("bike-passing-clearance"));
      if (!hasBikePassingFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions bicycle passing/3 feet but is missing bike-passing-clearance facts: [${q.coverageFactIds.join(', ')}]`);
      }
    }

    // 3. Solid red light only and does not mention arrow check
    const mentionsRedLightOnly = (qTextLower.includes("red light") || qTextLower.includes("red traffic light")) && !qTextLower.includes("arrow");
    if (mentionsRedLightOnly) {
      const hasRedArrowFact = q.coverageFactIds.some(fId => fId.includes("red-arrow") || fId.includes("arrow-"));
      if (hasRedArrowFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions only solid red light and not arrow but maps to red-arrow facts: [${q.coverageFactIds.join(', ')}]`);
      }
    }

    // 4. Double parking vs parallel parking curb distance check
    const mentionsDoubleParking = qTextLower.includes("double park") || qTextLower.includes("double-parking");
    if (mentionsDoubleParking) {
      const hasCurbDistanceFact = q.coverageFactIds.includes("fact-parking-curb-distance");
      if (hasCurbDistanceFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions double parking but incorrectly maps to parallel parking curb distance: [${q.coverageFactIds.join(', ')}]`);
      }
    }

    // 5. Passing within 100 feet check
    const mentionsPassing100Feet = qTextLower.includes("pass") && qTextLower.includes("100 feet");
    if (mentionsPassing100Feet) {
      const hasRailroadSpeedFact = q.coverageFactIds.some(fId => fId.includes("railroad") && fId.includes("speed"));
      if (hasRailroadSpeedFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions passing within 100 feet but incorrectly maps to a railroad speed fact: [${q.coverageFactIds.join(', ')}]`);
      }
      const hasCorrectPassingFact = q.coverageFactIds.includes("fact-passing-prohibited-100-feet-hazard");
      if (!hasCorrectPassingFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions passing within 100 feet but is missing fact-passing-prohibited-100-feet-hazard: [${q.coverageFactIds.join(', ')}]`);
      }
    }

    // 6. Entering highway traffic vs three-second buffer check
    const mentionsHighwayEntrySpeed = (qTextLower.includes("highway") || qTextLower.includes("freeway") || qTextLower.includes("on-ramp")) &&
                                      (qTextLower.includes("traffic speed") || qTextLower.includes("speed of traffic") || qTextLower.includes("at or near"));
    if (mentionsHighwayEntrySpeed) {
      const hasThreeSecFact = q.coverageFactIds.includes("fact-merge-space-3sec");
      if (hasThreeSecFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions entering highway at traffic speed but incorrectly maps to three-second buffer: [${q.coverageFactIds.join(', ')}]`);
      }
      const hasEntrySpeedFact = q.coverageFactIds.includes("fact-highway-entry-match-traffic-speed");
      if (!hasEntrySpeedFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions entering highway at traffic speed but is missing fact-highway-entry-match-traffic-speed: [${q.coverageFactIds.join(', ')}]`);
      }
    }

    // 7. Wheelchair sidewalk ramp check
    const mentionsWheelchairSidewalkRamp = qTextLower.includes("wheelchair") || qTextLower.includes("sidewalk ramp");
    if (mentionsWheelchairSidewalkRamp) {
      const hasCurbDistanceFact = q.coverageFactIds.includes("fact-parking-curb-distance");
      if (hasCurbDistanceFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions wheelchair sidewalk ramp but incorrectly maps to parallel parking curb distance: [${q.coverageFactIds.join(', ')}]`);
      }
      const hasWheelchairFact = q.coverageFactIds.includes("fact-illegal-parking-wheelchair-ramp-distance");
      if (!hasWheelchairFact) {
        suspiciousMappings.push(`Question [${q.id}]: mentions wheelchair sidewalk ramp but is missing fact-illegal-parking-wheelchair-ramp-distance: [${q.coverageFactIds.join(', ')}]`);
      }
    }
  }
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

// Check 5: General question field validation list
if (validationFailures.length > 0) {
  console.error(`❌ FAILURE: Found ${validationFailures.length} field validation or section alignment failures:`);
  validationFailures.slice(0, 15).forEach(f => {
    console.error(`   - ${f}`);
  });
  if (validationFailures.length > 15) {
    console.error(`   - ... and ${validationFailures.length - 15} more failures.`);
  }
  integrityPass = false;
} else {
  console.log("✅ Check Passed: All question fields validated and match alignment rules!");
}

// Strict mode checks: any uncovered fact whatsoever fails if REQUIRE_ALL_FACTS_COVERED is true
const uncoveredFacts = HANDBOOK_FACTS.filter(f => factToQuestions[f.id].length === 0);

// Write to a file for persistent viewing
let fileContent = "UNCOVERED FACTS:\n\n";
uncoveredFacts.forEach(f => {
  fileContent += `ID: ${f.id}\n`;
  fileContent += `Section: ${f.section}\n`;
  fileContent += `Page: ${f.page}\n`;
  fileContent += `Topic: ${f.topic}\n`;
  fileContent += `Priority: ${f.priority}\n`;
  fileContent += `MustHave: ${f.mustHaveQuestion}\n`;
  fileContent += `Fact: ${f.fact}\n`;
  fileContent += `--------------------------------------------------\n`;
});
fs.writeFileSync(path.resolve(process.cwd(), "uncovered_facts.txt"), fileContent, "utf-8");

console.log("\n--- UNCOVERED FACTS ---");
if (uncoveredFacts.length > 0) {
  uncoveredFacts.forEach(f => {
    console.log(`- ID:       ${f.id}`);
    console.log(`  Section:  ${f.section}`);
    console.log(`  Page:     ${f.page}`);
    console.log(`  Topic:    ${f.topic}`);
    console.log(`  Priority: ${f.priority}`);
    console.log(`  MustHave: ${f.mustHaveQuestion}`);
    console.log(`  Fact:     "${f.fact}"`);
    console.log(`--------------------------------------------------`);
  });
  
  if (REQUIRE_ALL_FACTS_COVERED) {
    console.error(`❌ FAILURE: ${uncoveredFacts.length} facts are totally uncovered in REQUIRE_ALL_FACTS_COVERED mode!`);
    integrityPass = false;
  }
} else {
  console.log(`🎉 SUCCESS: All ${totalFacts} / ${totalFacts} handbook facts are fully covered with at least one practice question!`);
}

// Print suspicious mappings report
console.log("\n--- SUSPICIOUS SEMANTIC MAPPINGS ---");
if (suspiciousMappings.length > 0) {
  suspiciousMappings.forEach(s => {
    console.error(`⚠️  ${s}`);
  });
  // Note: We don't fail the build automatically on suspicious mappings since there could be dual/accidental matches,
  // but we flag them clearly to catch obvious matching mistakes.
} else {
  console.log("✅ Check Passed: No suspicious semantic mapping mismatches detected!");
}

console.log("\n==================================================");

if (integrityPass) {
  console.log("🏆 SUCCESS: DriveReady fully meets atomic fact-level coverage requirements! (100% of all facts covered)");
  console.log("==================================================\n");
  process.exit(0);
} else {
  console.error("🔥 FAILED: One or more strict coverage requirements failed validation.");
  console.error("==================================================\n");
  process.exit(1);
}

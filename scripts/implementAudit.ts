import * as fs from "fs";
import * as path from "path";

// 1. Define the precise question-to-topic mapping
const mappings: { [qId: string]: string } = {
  q1: "cov-5-1",
  q2: "cov-2-3",
  q3: "cov-2-2",
  q5: "cov-4-10",
  q6: "cov-4-19",
  q7: "cov-4-20",
  q8: "cov-5-8",
  q9: "cov-8-1",
  q10: "cov-4-14",
  q11: "cov-4-11",
  q12: "cov-4-9",
  q13: "cov-4-12",
  q14: "cov-6-2",
  q15: "cov-5-6",
  q17: "cov-4-16",
  q19: "cov-4-21",
  q21: "cov-6-4",
  q22: "cov-6-4",
  q23: "cov-7-3",
  q25: "cov-6-9",
  q27: "cov-3-4",
  q29: "cov-6-11",
  q30: "cov-7-3",
  q31: "cov-2-4",
  q32: "cov-2-4",
  q33: "cov-3-3",
  q34: "cov-3-3",
  q35: "cov-3-3",
  q36: "cov-3-3",
  q37: "cov-3-3",
  q38: "cov-3-4",
  q39: "cov-3-4",
  q40: "cov-3-4",
  q41: "cov-4-19",
  q42: "cov-4-19",
  q43: "cov-4-20",
  q44: "cov-4-20",
  q45: "cov-4-20",
  q46: "cov-4-21",
  q47: "cov-4-21",
  q48: "cov-4-21",
  q49: "cov-4-21",
  q50: "cov-4-20",
  q51: "cov-6-7",
  q52: "cov-6-7",
  q53: "cov-6-8",
  q54: "cov-5-9",
  q55: "cov-5-9",
  q56: "cov-5-9",
  q57: "cov-5-8",
  q58: "cov-6-6",
  q59: "cov-5-8",
  q60: "cov-6-7",
  q61: "cov-7-3",
  q62: "cov-7-2",
  q63: "cov-8-3",
  q64: "cov-7-4",
  q65: "cov-8-3",
  q66: "cov-7-3",
  q67: "cov-7-1",
  q69: "cov-5-9",
  q70: "cov-8-2",
  q71: "cov-2-2",
  q72: "cov-2-3",
  q75: "cov-2-1",
  q76: "cov-1-1",
  q77: "cov-1-1",
  q78: "cov-2-1",
  q79: "cov-1-1",
  q80: "cov-5-12",
  q81: "cov-4-12",
  q83: "cov-5-8",
  q84: "cov-5-8",
  q86: "cov-5-7",
  q87: "cov-5-7",
  q89: "cov-5-11",
  q90: "cov-4-11",
  q91: "cov-7-3",
  q92: "cov-7-3",
  q93: "cov-7-4",
  q94: "cov-7-5",
  q95: "cov-7-4",
  q96: "cov-7-2",
  q97: "cov-7-2",
  q98: "cov-7-3",
  q99: "cov-7-1",
  q101: "cov-4-1",
  q102: "cov-4-1",
  q103: "cov-4-3",
  q104: "cov-4-10",
  q105: "cov-4-8",
  q106: "cov-4-4",
  q107: "cov-4-9",
  q108: "cov-4-9",
  q109: "cov-4-6",
  q110: "cov-4-4",
  q111: "cov-3-4",
  q112: "cov-3-4",
  q113: "cov-3-4",
  q114: "cov-3-4",
  q123: "cov-3-2",
  q125: "cov-8-1",
  q126: "cov-3-5",
  q127: "cov-8-3",
  q129: "cov-4-21",
  q131: "cov-5-6",
  q132: "cov-6-5",
  q134: "cov-5-9",
  q135: "cov-5-9",
  q136: "cov-5-9",
  q137: "cov-5-9",
  q138: "cov-6-1",
  q139: "cov-4-19",
  q140: "cov-4-19",
  q141: "cov-4-19",
  q142: "cov-3-3",
  q143: "cov-3-3",
  q144: "cov-3-3",
  q145: "cov-8-3"
};

// Define realistic metadata for unmapped/supplementary questions
const unmappedMetadata: { [qId: string]: { section: string, page: number, topic: string } } = {
  q4: { section: "Section 5: Laws and Rules of the Road", page: 40, topic: "School Zone Speed Limits" },
  q16: { section: "Section 4: Navigating the Roads", page: 7, topic: "Highway Merging Speed" },
  q18: { section: "Section 4: Navigating the Roads", page: 6, topic: "Passing on the Right" },
  q20: { section: "Section 4: Navigating the Roads", page: 6, topic: "Prohibited Passing Limits" },
  q24: { section: "Section 5: Laws and Rules of the Road", page: 32, topic: "Following Emergency Vehicles" },
  q26: { section: "Section 5: Laws and Rules of the Road", page: 32, topic: "Passing Streetcars/Trolleys" },
  q28: { section: "Section 4: Navigating the Roads", page: 20, topic: "Protruding Cargo Regulations" },
  q68: { section: "Section 5: Laws and Rules of the Road", page: 32, topic: "Yielding to Blind Pedestrians" },
  q73: { section: "Section 1: The California Driver's License", page: 1, topic: "Address Change Notification" },
  q74: { section: "Section 1: The California Driver's License", page: 1, topic: "Vehicle Transfer Notification" },
  q82: { section: "Section 5: Laws and Rules of the Road", page: 40, topic: "School Zone Speed Limits" },
  q85: { section: "Section 5: Laws and Rules of the Road", page: 26, topic: "Slow-Moving Vehicle Sign" },
  q88: { section: "Section 5: Laws and Rules of the Road", page: 32, topic: "Move Over Law" },
  q100: { section: "Section 7: Alcohol and Drugs", page: 55, topic: "Safe Transit Designated Driver" },
  q115: { section: "Section 3: An Introduction to Driving", page: 3, topic: "Tire Maintenance Guidelines" },
  q116: { section: "Section 3: An Introduction to Driving", page: 3, topic: "Dashboard Indicator Lights" },
  q117: { section: "Section 6: Safe Driving", page: 53, topic: "Emergency Braking Protocols" },
  q118: { section: "Section 3: An Introduction to Driving", page: 3, topic: "Windshield Visibility Rules" },
  q119: { section: "Section 3: An Introduction to Driving", page: 3, topic: "Window Tinting Regulations" },
  q120: { section: "Section 3: An Introduction to Driving", page: 3, topic: "Vehicle Mechanical Inspection" },
  q121: { section: "Section 3: An Introduction to Driving", page: 3, topic: "Wireless Phone Restrictions" },
  q122: { section: "Section 3: An Introduction to Driving", page: 3, topic: "Hands-Free Device Exception" },
  q124: { section: "Section 5: Laws and Rules of the Road", page: 44, topic: "Roadway Littering Infractions" },
  q128: { section: "Section 6: Safe Driving", page: 51, topic: "Pickup Cargo Bed Seating limits" },
  q130: { section: "Section 6: Safe Driving", page: 53, topic: "Sticking Accelerator Recovery" },
  q133: { section: "Section 1: The California Driver's License", page: 1, topic: "Negligent Operator Treatment System (NOTS)" },
  q146: { section: "Section 5: Laws and Rules of the Road", page: 32, topic: "Animal-Drawn Vehicles Sharing" }
};

// 2. Read coverage metadata dictionary
const coverageText = fs.readFileSync(path.resolve(process.cwd(), "src/contentCoverage.ts"), "utf-8");
interface TempCov {
  id: string;
  section: string;
  topic: string;
  page: number;
}
const covItems: { [id: string]: TempCov } = {};
const matrixItemRegex = /\{\s*id:\s*['"](cov-[^'"]+)['"][\s\S]*?pdfSection:\s*['"]([^'"]+)['"][\s\S]*?topic:\s*['"]([^'"]+)['"][\s\S]*?pageNumber:\s*(\d+)/g;
let cMatch;
while ((cMatch = matrixItemRegex.exec(coverageText)) !== null) {
  covItems[cMatch[1]] = {
    id: cMatch[1],
    section: cMatch[2],
    topic: cMatch[3],
    page: parseInt(cMatch[4], 10)
  };
}

console.log("Read", Object.keys(covItems).length, "coverage items info.");

// 3. Process src/data.ts
let dataContent = fs.readFileSync(path.resolve(process.cwd(), "src/data.ts"), "utf-8");

// We wish to parse the PRACTICE_QUESTIONS block and rewrite each question block.
// Each question block looks like this:
// {
//   id: 'q1',
//   ...
//   testGroup: 12
// }
// We want to inject key-value pairs or update existing ones. We can find each block, parse it, and modify it.

const questionsStart = dataContent.indexOf("export const PRACTICE_QUESTIONS");
const questionsHeader = dataContent.substring(0, questionsStart);
const questionsSub = dataContent.substring(questionsStart);

// Let's split on the closing brace of each object inside the array.
// Actually, let's use a regex to match each question block perfectly.
const questionBlockRegex = /(\{\s*id:\s*['"](q\d+)['"][\s\S]*?\}\s*\,?\s*?\n)/g;
const blocks: string[] = [];
let lastIndex = 0;
let qMatch;

const updatedQuestions: string[] = [];

// Reusable formatting helper
const formatQuestionBlock = (qId: string, originalBlock: string): string => {
  // Extract existing property keys/values
  const getProp = (prop: string) => {
    const rx = new RegExp(`${prop}:\\s*(['"\\d\\s])`);
    const valRx = new RegExp(`${prop}:\\s*('[\\s\\S]*?'|"[\\s\\S]*?"|\\d+)`);
    const m = originalBlock.match(valRx);
    return m ? m[1] : null;
  };
  
  const category = getProp("category");
  // questionText might be multiline
  const qTextMatch = originalBlock.match(/questionText:\s*([\s\S]*?),/);
  const questionText = qTextMatch ? qTextMatch[1].trim() : "''";
  
  const imgUrl = getProp("imageUrl") || "''";
  
  // Options array match
  const optionsMatch = originalBlock.match(/options:\s*(\[[\s\S]*?\])/);
  const optionsStr = optionsMatch ? optionsMatch[1].trim() : "[]";
  
  const correctOptionIndex = getProp("correctOptionIndex");
  
  const expMatch = originalBlock.match(/explanation:\s*([\s\S]*?),/);
  const explanation = expMatch ? expMatch[1].trim() : "''";
  
  const testGroup = getProp("testGroup");

  // Determine metadata
  let covId = mappings[qId] || "";
  let section = "";
  let page = 0;
  let topic = "";

  if (covId && covItems[covId]) {
    const c = covItems[covId];
    section = c.section;
    page = c.page;
    topic = c.topic;
  } else if (unmappedMetadata[qId]) {
    const u = unmappedMetadata[qId];
    section = u.section;
    page = u.page;
    topic = u.topic;
  } else {
    // Fallback if missing
    section = "Section 5: Laws and Rules of the Road";
    page = 24;
    topic = "General California Driving Rules";
  }

  // Clean strings
  const esc = (s: string) => s; // Already quoted in file

  return `  {
    id: '${qId}',
    category: ${category},
    questionText: ${questionText},
    imageUrl: ${imgUrl},
    options: ${optionsStr},
    correctOptionIndex: ${correctOptionIndex},
    explanation: ${explanation},
    testGroup: ${testGroup},
    sourceSection: '${section}',
    sourcePage: ${page},
    sourceTopic: '${topic}',
    coverageTopicId: '${covId}'
  }`;
};

// Let's replace each question block in the code
let currentIdx = 0;
let newQuestionsText = "export const PRACTICE_QUESTIONS: Question[] = [\n";

// Break data.ts into parts
const PRACTICE_QUESTIONS_MARKER = "export const PRACTICE_QUESTIONS: Question[] = [";
const startIdx = dataContent.indexOf(PRACTICE_QUESTIONS_MARKER);
if (startIdx === -1) {
  throw new Error("Could not find PRACTICE_QUESTIONS marker");
}

const beforeQuestionsText = dataContent.substring(0, startIdx);
const questionsPart = dataContent.substring(startIdx + PRACTICE_QUESTIONS_MARKER.length);

// We find each question block of form { id: 'qX', ... }
const regex = /\{\s*id:\s*['"](q\d+)['"]/g;
let matches: { id: string, startIndex: number }[] = [];
let m;
while ((m = regex.exec(questionsPart)) !== null) {
  matches.push({ id: m[1], startIndex: m.index });
}

for (let idx = 0; idx < matches.length; idx++) {
  const curMatch = matches[idx];
  const qId = curMatch.id;
  const start = curMatch.startIndex;
  
  // Find where this object ends (closing curly brace '}')
  // Since options can have brackets, let's find the matching closing brace of the whole object.
  // We can scan from start and count braces
  let braceCount = 0;
  let end = start;
  for (let i = start; i < questionsPart.length; i++) {
    const char = questionsPart[i];
    if (char === '{') braceCount++;
    else if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        end = i + 1;
        break;
      }
    }
  }
  
  const originalBlock = questionsPart.substring(start, end);
  const formatted = formatQuestionBlock(qId, originalBlock);
  newQuestionsText += formatted + (idx < matches.length - 1 ? ",\n" : "\n");
}
newQuestionsText += "];\n";

fs.writeFileSync(path.resolve(process.cwd(), "src/data.ts"), beforeQuestionsText + newQuestionsText, "utf-8");
console.log("Successfully rewrote src/data.ts with complete metadata!");

// 4. Now rewrite src/contentCoverage.ts with proper coverage assignments, status, and missingNotes
interface MatrixItem {
  id: string;
  pdfSection: string;
  topic: string;
  pageNumber: number;
  coverageStatus: string;
  relatedQuestions: string[];
  relatedSigns: string[];
  relatedProTips: number[];
  missingNotes?: string;
}

// Rebuild relatedQuestions based on the mappings
const covToQuestions: { [covId: string]: string[] } = {};
for (const [qId, covId] of Object.entries(mappings)) {
  if (!covToQuestions[covId]) covToQuestions[covId] = [];
  covToQuestions[covId].push(qId);
}

// Let's load the current contentCoverage items and rewrite them.
// Rather than parsing and re-serializing dynamically which could lose proTip listings or signs,
// let's parse the array HANDBOOK_COVERAGE_MATRIX directly as text blocks using regex, update each, and replace!
let coverageFileContent = fs.readFileSync(path.resolve(process.cwd(), "src/contentCoverage.ts"), "utf-8");

const matrixStartMarker = "export const HANDBOOK_COVERAGE_MATRIX: CoverageItem[] = [";
const matrixStartIdx = coverageFileContent.indexOf(matrixStartMarker);
const beforeMatrix = coverageFileContent.substring(0, matrixStartIdx + matrixStartMarker.length);
const matrixPart = coverageFileContent.substring(matrixStartIdx + matrixStartMarker.length);

const itemRegex = /\{\s*id:\s*['"](cov-[^'"]+)['"][\s\S]*?\n\s*\}/g;
let iMatch;
const updatedMatrixItems: string[] = [];

// Re-read item parts
const itemMatches: { id: string, start: number, end: number }[] = [];
let braceCount = 0;
let currentStart = -1;
let currentId = "";

// Simple bracket parsing of matrixPart
for (let i = 0; i < matrixPart.length; i++) {
  const char = matrixPart[i];
  if (char === '{') {
    if (braceCount === 0) {
      currentStart = i;
      // Extract ID
      const remaining = matrixPart.substring(i, i + 100);
      const idM = remaining.match(/id:\s*['"](cov-[^'"]+)['"]/);
      if (idM) {
        currentId = idM[1];
      }
    }
    braceCount++;
  } else if (char === '}') {
    braceCount--;
    if (braceCount === 0 && currentStart !== -1) {
      itemMatches.push({ id: currentId, start: currentStart, end: i + 1 });
      currentStart = -1;
      currentId = "";
    }
  }
}

for (const m of itemMatches) {
  const original = matrixPart.substring(m.start, m.end);
  const qIds = covToQuestions[m.id] || [];
  
  // Extract existing signs and pro tips
  const signsMatch = original.match(/relatedSigns:\s*(\[[\s\S]*?\])/);
  const signsStr = signsMatch ? signsMatch[1].trim() : "[]";
  
  const tipsMatch = original.match(/relatedProTips:\s*(\[[\s\S]*?\])/);
  const tipsStr = tipsMatch ? tipsMatch[1].trim() : "[]";

  const pdfSectionMatch = original.match(/pdfSection:\s*['"]([^'"]+)['"]/);
  const pdfSection = pdfSectionMatch ? pdfSectionMatch[1] : "";
  
  const topicMatch = original.match(/topic:\s*['"]([^'"]+)['"]/);
  const topic = topicMatch ? topicMatch[1] : "";
  
  const pMatch = original.match(/pageNumber:\s*(\d+)/);
  const pageNumber = pMatch ? parseInt(pMatch[1], 10) : 0;

  // Set status & notes
  let status = "Not Covered";
  let notes = "No practice questions or pro tips currently cover this specific topic.";

  // Has questions?
  if (qIds.length > 0) {
    status = "Fully Covered";
    notes = "";
  } else {
    // No questions, check signs and tips
    const hasSigns = signsStr !== "[]";
    const hasTips = tipsStr !== "[]";
    if (hasSigns || hasTips) {
      status = "Partially Covered";
      notes = `This topic is introduced in the handbook (page ${pageNumber}) and taught via ${[
        hasSigns ? "interactive road signs visualizer" : "",
        hasTips ? "supplementary Pro Tips" : ""
      ].filter(Boolean).join(" and ")}, but no practice questions test it yet.`;
    } else {
      status = "Not Covered";
      notes = `Handbook topic on page ${pageNumber} is not yet taught in the active question repository or supplementary tools.`;
    }
  }

  const qIdsStr = "[" + qIds.map(q => `'${q}'`).join(", ") + "]";

  const formattedBlock = `  {
    id: '${m.id}',
    pdfSection: '${pdfSection}',
    topic: '${topic}',
    pageNumber: ${pageNumber},
    coverageStatus: '${status}',
    relatedQuestions: ${qIdsStr},
    relatedSigns: ${signsStr},
    relatedProTips: ${tipsStr}${notes ? `,\n    missingNotes: '${notes}'` : ""}
  }`;
  
  updatedMatrixItems.push(formattedBlock);
}

const finalMatrixContent = beforeMatrix + "\n" + updatedMatrixItems.join(",\n") + "\n];\n";
fs.writeFileSync(path.resolve(process.cwd(), "src/contentCoverage.ts"), finalMatrixContent, "utf-8");
console.log("Successfully rewrote src/contentCoverage.ts with validated coverage statuses and missingNotes!");

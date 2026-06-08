import * as fs from "fs";
import * as path from "path";

// 1. Read files
const dataContent = fs.readFileSync(path.resolve(process.cwd(), "src/data.ts"), "utf-8");
let coverageFileContent = fs.readFileSync(path.resolve(process.cwd(), "src/contentCoverage.ts"), "utf-8");

// Parse questions to get real mappings
const questionsStartIndex = dataContent.indexOf("export const PRACTICE_QUESTIONS");
const questionsStr = dataContent.substring(questionsStartIndex);
const questionBlocks = questionsStr.split(/id:\s*['"](q\d+)['"]/g);

interface QuestionInfo {
  id: string;
  coverageTopicId: string;
}
const questionInfos: QuestionInfo[] = [];

for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";
  
  const covM = qBody.match(/coverageTopicId:\s*['"]([^'"]*)['"]/);
  const coverageTopicId = covM ? covM[1] : "";
  
  questionInfos.push({ id: qId, coverageTopicId });
}

console.log(`Found ${questionInfos.length} questions in data.ts`);

// Group question IDs by coverageTopicId
const covToQuestions: { [covId: string]: string[] } = {};
for (const q of questionInfos) {
  if (q.coverageTopicId) {
    if (!covToQuestions[q.coverageTopicId]) {
      covToQuestions[q.coverageTopicId] = [];
    }
    covToQuestions[q.coverageTopicId].push(q.id);
  }
}

// 2. Read coverage metadata dictionary
interface CoverageItem {
  id: string;
  pdfSection: string;
  topic: string;
  pageNumber: number;
}
const covItems: { [id: string]: CoverageItem } = {};
const matrixItemRegex = /\{\s*id:\s*['"](cov-[^'"]+)['"][\s\S]*?pdfSection:\s*['"]([^'"]+)['"][\s\S]*?topic:\s*['"]([^'"]+)['"][\s\S]*?pageNumber:\s*(\d+)/g;
let cMatch;
while ((cMatch = matrixItemRegex.exec(coverageFileContent)) !== null) {
  covItems[cMatch[1]] = {
    id: cMatch[1],
    pdfSection: cMatch[2],
    topic: cMatch[3],
    pageNumber: parseInt(cMatch[4], 10)
  };
}

const matrixStartMarker = "export const HANDBOOK_COVERAGE_MATRIX: CoverageItem[] = [";
const matrixStartIdx = coverageFileContent.indexOf(matrixStartMarker);
const beforeMatrix = coverageFileContent.substring(0, matrixStartIdx + matrixStartMarker.length);
const matrixPart = coverageFileContent.substring(matrixStartIdx + matrixStartMarker.length);

// Parse and rebuild matrix items in contentCoverage.ts
const itemMatches: { id: string, start: number, end: number }[] = [];
let braceCount = 0;
let currentStart = -1;
let currentId = "";

for (let i = 0; i < matrixPart.length; i++) {
  const char = matrixPart[i];
  if (char === '{') {
    if (braceCount === 0) {
      currentStart = i;
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

const updatedMatrixItems: string[] = [];

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
  let notes = "";

  if (qIds.length > 0) {
    status = "Fully Covered";
  } else {
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

  const qIdsSorted = [...qIds].sort((a, b) => {
    return parseInt(a.replace("q", ""), 10) - parseInt(b.replace("q", ""), 10);
  });
  const qIdsStr = "[" + qIdsSorted.map(q => `'${q}'`).join(", ") + "]";

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
console.log("Successfully synchronized and rewrote src/contentCoverage.ts!");

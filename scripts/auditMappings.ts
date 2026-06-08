import * as fs from "fs";
import * as path from "path";

// 1. Read files
const coverageText = fs.readFileSync(path.resolve(process.cwd(), "src/contentCoverage.ts"), "utf-8");
const dataContent = fs.readFileSync(path.resolve(process.cwd(), "src/data.ts"), "utf-8");

// Simple parse of contentCoverage HANDBOOK_COVERAGE_MATRIX
interface TempMatrixItem {
  id: string;
  pdfSection: string;
  topic: string;
  pageNumber: number;
}

const matrixItems: TempMatrixItem[] = [];
const matrixItemRegex = /\{\s*id:\s*['"](cov-[^'"]+)['"][\s\S]*?pdfSection:\s*['"]([^'"]+)['"][\s\S]*?topic:\s*['"]([^'"]+)['"][\s\S]*?pageNumber:\s*(\d+)/g;
let mMatch;
while ((mMatch = matrixItemRegex.exec(coverageText)) !== null) {
  matrixItems.push({
    id: mMatch[1],
    pdfSection: mMatch[2],
    topic: mMatch[3],
    pageNumber: parseInt(mMatch[4], 10)
  });
}

// Simple parse of PRACTICE_QUESTIONS
interface TempQuestion {
  id: string;
  text: string;
  explanation: string;
}

const questions: TempQuestion[] = [];
const questionsStartIndex = dataContent.indexOf("export const PRACTICE_QUESTIONS");
const questionsStr = dataContent.substring(questionsStartIndex);
const questionBlocks = questionsStr.split(/id:\s*['"](q\d+)['"]/g);

for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";
  
  const textMatch = qBody.match(/questionText:\s*['"]([\s\S]*?)['"],/);
  const qText = textMatch ? textMatch[1].replace(/\n/g, " ").trim() : "";
  
  const expMatch = qBody.match(/explanation:\s*['"]([\s\S]*?)['"],/);
  const qExp = expMatch ? expMatch[1].replace(/\n/g, " ").trim() : "";
  
  questions.push({ id: qId, text: qText, explanation: qExp });
}

console.log(`Loaded ${matrixItems.length} coverage items and ${questions.length} questions.`);

// Let's do some smart word-matching between topics and questions
const mappings: { [qId: string]: string[] } = {};

for (const q of questions) {
  const qTextLower = q.text.toLowerCase();
  const qExpLower = q.explanation.toLowerCase();
  
  const scores = matrixItems.map(item => {
    let score = 0;
    const topicWords = item.topic.toLowerCase().split(/[\s,/:()'.‘’-]+/);
    
    // Check if words match
    for (const word of topicWords) {
      if (word.length < 3) continue;
      if (qTextLower.includes(word)) score += 2;
      if (qExpLower.includes(word)) score += 1;
    }
    
    // Boost section matches
    if (qTextLower.includes("provisional") && item.topic.includes("Provisional")) score += 10;
    if (qTextLower.includes("curfew") && item.topic.includes("Curfew")) score += 15;
    if (qTextLower.includes("passenger") && item.topic.includes("Passenger")) score += 15;
    if (qTextLower.includes("exception") && item.topic.includes("Exception")) score += 10;
    if (qTextLower.includes("medical") && item.topic.includes("Exceptions (Medical")) score += 15;
    if (qTextLower.includes("schooling") && item.topic.includes("Exceptions (Medical")) score += 15;
    
    if (qTextLower.includes("earplug") && item.topic.includes("Headset or Earplugs")) score += 20;
    if (qTextLower.includes("headset") && item.topic.includes("Headset or Earplugs")) score += 20;
    if (qTextLower.includes("blind pedestrian") && item.topic.includes("Seniors")) score -= 10;

    if (qTextLower.includes("sign signal") && item.topic.includes("Sign Shapes")) score += 10;
    if (qTextLower.includes("roundabout") && item.topic.includes("Roundabouts")) score += 20;
    
    return { item, score };
  });
  
  scores.sort((a, b) => b.score - a.score);
  const best = scores[0];
  if (best && best.score > 3) {
    if (!mappings[best.item.id]) mappings[best.item.id] = [];
    mappings[best.item.id].push(q.id);
  }
}

// Let's print candidate suggestions
for (const item of matrixItems) {
  console.log(`\nTopic ID: ${item.id} - ${item.topic}`);
  console.log(`Suggested Questions: ${mappings[item.id] ? mappings[item.id].join(", ") : "None found!"}`);
}

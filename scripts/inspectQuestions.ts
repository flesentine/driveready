import * as fs from "fs";
import * as path from "path";

const dataContent = fs.readFileSync(path.resolve(process.cwd(), "src/data.ts"), "utf-8");

// We can extract all object blocks inside PRACTICE_QUESTIONS
const questionsStartIndex = dataContent.indexOf("export const PRACTICE_QUESTIONS");
if (questionsStartIndex === -1) {
  console.error("Could not find PRACTICE_QUESTIONS in data.ts");
  process.exit(1);
}

const questionsStr = dataContent.substring(questionsStartIndex);

// Parse questions using lines and regex or simpler tokenizer
// Let's find structure, or split by id: 'qXX'
const questionBlocks = questionsStr.split(/id:\s*['"](q\d+)['"]/g);
// The first element is the preamble of PRACTICE_QUESTIONS
const parsedQuestions: { id: string; text: string; explanation: string }[] = [];

for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";
  
  // Extract questionText
  const textMatch = qBody.match(/questionText:\s*['"]([\s\S]*?)['"],/);
  const qText = textMatch ? textMatch[1].replace(/\n/g, " ").trim() : "NOT_FOUND";
  
  // Extract explanation
  const expMatch = qBody.match(/explanation:\s*['"]([\s\S]*?)['"],/);
  const qExp = expMatch ? expMatch[1].replace(/\n/g, " ").trim() : "NOT_FOUND";
  
  parsedQuestions.push({ id: qId, text: qText, explanation: qExp });
}

const lines = parsedQuestions.map(q => `${q.id} | ${q.text} | ${q.explanation}`);
fs.writeFileSync(path.resolve(process.cwd(), "questions_summary.txt"), lines.join("\n"));
console.log("Successfully parsed and wrote", parsedQuestions.length, "questions to questions_summary.txt");

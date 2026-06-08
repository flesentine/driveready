import * as fs from 'fs';
import * as path from 'path';

const dataFilePath = path.resolve(process.cwd(), 'src/data.ts');
const dataContent = fs.readFileSync(dataFilePath, 'utf-8');

const indexQuestionsStart = dataContent.indexOf("export const PRACTICE_QUESTIONS");
const questionsPart = dataContent.substring(indexQuestionsStart);

const questionBlocks = questionsPart.split(/id:\s*['"](q\d+)['"]/g);

const list: any[] = [];
for (let i = 1; i < questionBlocks.length; i += 2) {
  const qId = questionBlocks[i];
  const qBody = questionBlocks[i + 1] || "";
  
  const textM = qBody.match(/questionText:\s*['"]([\s\S]*?)['"]/);
  const topicM = qBody.match(/sourceTopic:\s*['"]([\s\S]*?)['"]/);
  list.push({
    id: qId,
    text: textM ? textM[1].substring(0, 80) : '',
    topic: topicM ? topicM[1] : ''
  });
}

list.forEach(q => {
  console.log(`${q.id} | ${q.topic} | ${q.text}`);
});

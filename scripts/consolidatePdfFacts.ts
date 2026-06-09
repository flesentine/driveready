/**
 * Consolidates a canonical PDF fact extraction against DriveReady's app facts.
 *
 * Input:
 *   source/pdfFacts.canonical.json
 *
 * Output:
 *   reports/pdf_fact_consolidation_report.md
 *   reports/pdf_facts_missing_from_app.json
 *   reports/pdf_facts_app_only_review.json
 *   reports/pdf_facts_consolidated_review.json
 *
 * Usage:
 *   npm run consolidate:pdf-facts
 *   npm run check:pdf-facts
 */

import fs from "fs";
import path from "path";
import { HANDBOOK_FACTS } from "../src/handbookFacts";
import type { HandbookFact } from "../src/types";

type CanonicalPdfFact = HandbookFact & {
  pdfFactId: string;
  appFactId?: string;
  notes?: string;
};

type QuestionMini = {
  id: string;
  questionText: string;
  coverageFactIds: string[];
};

type MatchResult = {
  canonical: CanonicalPdfFact;
  appFact?: HandbookFact;
  matchType: "appFactId" | "fuzzy" | "missing";
  score: number;
  problems: string[];
};

const STRICT = process.argv.includes("--strict");
const ROOT = process.cwd();

const CANONICAL_PATH = path.resolve(ROOT, "source/pdfFacts.canonical.json");
const DATA_PATH = path.resolve(ROOT, "src/data.ts");
const REPORT_DIR = path.resolve(ROOT, "reports");

const REPORT_MD = path.join(REPORT_DIR, "pdf_fact_consolidation_report.md");
const MISSING_JSON = path.join(REPORT_DIR, "pdf_facts_missing_from_app.json");
const APP_ONLY_JSON = path.join(REPORT_DIR, "pdf_facts_app_only_review.json");
const CONSOLIDATED_JSON = path.join(REPORT_DIR, "pdf_facts_consolidated_review.json");

function ensureReportDir() {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
}

function fail(message: string): never {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function readCanonicalFacts(): CanonicalPdfFact[] {
  if (!fs.existsSync(CANONICAL_PATH)) {
    fail(`Missing ${path.relative(ROOT, CANONICAL_PATH)}. Create this file from the PDF extraction first.`);
  }

  const raw = fs.readFileSync(CANONICAL_PATH, "utf-8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    fail("source/pdfFacts.canonical.json must be a JSON array.");
  }

  return parsed as CanonicalPdfFact[];
}

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^a-z0-9%.$]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value: string): Set<string> {
  const stop = new Set([
    "the", "a", "an", "and", "or", "to", "of", "in", "on", "for", "with",
    "by", "from", "is", "are", "be", "you", "your", "must", "may", "when",
    "if", "at", "as", "this", "that", "it", "into"
  ]);

  return new Set(
    normalizeText(value)
      .split(" ")
      .filter((t) => t.length > 1 && !stop.has(t))
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  const union = new Set([...a, ...b]);
  if (union.size === 0) return 0;

  let intersection = 0;
  for (const item of a) {
    if (b.has(item)) intersection++;
  }

  return intersection / union.size;
}

function scoreFactMatch(pdfFact: CanonicalPdfFact, appFact: HandbookFact): number {
  let score = 0;

  const sameSection = pdfFact.section === appFact.section;
  const samePage = pdfFact.page === appFact.page;
  const nearPage = Math.abs(pdfFact.page - appFact.page) <= 1;

  const factSimilarity = jaccard(tokens(pdfFact.fact), tokens(appFact.fact));
  const topicSimilarity = jaccard(tokens(pdfFact.topic), tokens(appFact.topic));

  score += factSimilarity * 0.6;
  score += topicSimilarity * 0.25;

  if (sameSection) score += 0.1;
  if (samePage) score += 0.05;
  else if (nearPage) score += 0.025;

  return Math.min(1, score);
}

function validateCanonicalFacts(facts: CanonicalPdfFact[]): string[] {
  const problems: string[] = [];
  const ids = new Set<string>();

  for (const fact of facts) {
    if (!fact.pdfFactId) problems.push(`Missing pdfFactId for fact: ${fact.fact}`);
    if (!fact.id) problems.push(`Missing app-style id for pdfFactId=${fact.pdfFactId}`);
    if (!fact.section) problems.push(`Missing section for pdfFactId=${fact.pdfFactId}`);
    if (!Number.isFinite(fact.page)) problems.push(`Missing/invalid page for pdfFactId=${fact.pdfFactId}`);
    if (!fact.topic) problems.push(`Missing topic for pdfFactId=${fact.pdfFactId}`);
    if (!fact.fact) problems.push(`Missing fact text for pdfFactId=${fact.pdfFactId}`);
    if (!["high", "medium", "low"].includes(fact.priority)) {
      problems.push(`Invalid priority for pdfFactId=${fact.pdfFactId}`);
    }
    if (!["rule", "number", "exception", "definition", "sign", "penalty", "procedure"].includes(fact.contentType)) {
      problems.push(`Invalid contentType for pdfFactId=${fact.pdfFactId}`);
    }

    if (ids.has(fact.pdfFactId)) problems.push(`Duplicate pdfFactId: ${fact.pdfFactId}`);
    ids.add(fact.pdfFactId);
  }

  return problems;
}

function parseQuestionsFromDataTs(): QuestionMini[] {
  if (!fs.existsSync(DATA_PATH)) {
    fail("Missing src/data.ts");
  }

  const data = fs.readFileSync(DATA_PATH, "utf-8");
  const start = data.indexOf("export const PRACTICE_QUESTIONS");
  if (start === -1) fail("Could not find PRACTICE_QUESTIONS in src/data.ts.");

  const questionArea = data.slice(start);
  const blocks = questionArea.split(/id:\s*['"](q\d+)['"]/g);

  const questions: QuestionMini[] = [];

  for (let i = 1; i < blocks.length; i += 2) {
    const id = blocks[i];
    const body = blocks[i + 1] || "";

    const textMatch =
      body.match(/questionText:\s*'((?:[^'\\]|\\.)*)'/) ||
      body.match(/questionText:\s*"((?:[^"\\]|\\.)*)"/);

    const factsMatch = body.match(/coverageFactIds:\s*\[([\s\S]*?)\]/);

    const coverageFactIds = factsMatch
      ? factsMatch[1]
          .split(",")
          .map((s) => s.trim().replace(/['"`]/g, ""))
          .filter(Boolean)
      : [];

    questions.push({
      id,
      questionText: textMatch ? textMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"') : "",
      coverageFactIds
    });
  }

  return questions;
}

function buildQuestionCoverageMap(questions: QuestionMini[]): Map<string, QuestionMini[]> {
  const map = new Map<string, QuestionMini[]>();

  for (const appFact of HANDBOOK_FACTS) {
    map.set(appFact.id, []);
  }

  for (const question of questions) {
    for (const factId of question.coverageFactIds) {
      if (!map.has(factId)) map.set(factId, []);
      map.get(factId)!.push(question);
    }
  }

  return map;
}

function matchCanonicalToAppFacts(canonicalFacts: CanonicalPdfFact[]): MatchResult[] {
  const appById = new Map(HANDBOOK_FACTS.map((fact) => [fact.id, fact]));
  const results: MatchResult[] = [];

  for (const canonical of canonicalFacts) {
    const problems: string[] = [];

    if (canonical.appFactId) {
      const exact = appById.get(canonical.appFactId);
      if (exact) {
        if (exact.section !== canonical.section) {
          problems.push(`Section mismatch: PDF=${canonical.section}, app=${exact.section}`);
        }
        if (Math.abs(exact.page - canonical.page) > 1) {
          problems.push(`Page mismatch: PDF=${canonical.page}, app=${exact.page}`);
        }

        results.push({ canonical, appFact: exact, matchType: "appFactId", score: 1, problems });
        continue;
      }

      problems.push(`appFactId provided but not found: ${canonical.appFactId}`);
    }

    const best = HANDBOOK_FACTS
      .map((appFact) => ({ appFact, score: scoreFactMatch(canonical, appFact) }))
      .sort((a, b) => b.score - a.score)[0];

    if (best && best.score >= 0.62) {
      results.push({ canonical, appFact: best.appFact, matchType: "fuzzy", score: best.score, problems });
    } else {
      results.push({ canonical, matchType: "missing", score: best?.score || 0, problems });
    }
  }

  return results;
}

function main() {
  ensureReportDir();

  const canonicalFacts = readCanonicalFacts();
  const canonicalProblems = validateCanonicalFacts(canonicalFacts);
  const questions = parseQuestionsFromDataTs();
  const questionCoverage = buildQuestionCoverageMap(questions);
  const matches = matchCanonicalToAppFacts(canonicalFacts);

  const matchedAppIds = new Set(matches.filter((m) => m.appFact).map((m) => m.appFact!.id));
  const missingFromApp = matches.filter((m) => m.matchType === "missing");
  const fuzzyMatches = matches.filter((m) => m.matchType === "fuzzy");
  const explicitMatches = matches.filter((m) => m.matchType === "appFactId");
  const problematicMatches = matches.filter((m) => m.problems.length > 0);

  const uncoveredMatchedFacts = matches.filter((m) => {
    if (!m.appFact) return false;
    const questionCount = questionCoverage.get(m.appFact.id)?.length || 0;
    return questionCount === 0;
  });

  const appOnlyFacts = HANDBOOK_FACTS.filter((fact) => !matchedAppIds.has(fact.id));
  const highPriorityMissing = missingFromApp.filter((m) => m.canonical.priority === "high");
  const mustQuestionUncovered = uncoveredMatchedFacts.filter((m) => m.canonical.mustHaveQuestion);

  const consolidated = matches.map((m) => ({
    pdfFactId: m.canonical.pdfFactId,
    canonicalId: m.canonical.id,
    canonicalSection: m.canonical.section,
    canonicalPage: m.canonical.page,
    canonicalTopic: m.canonical.topic,
    canonicalFact: m.canonical.fact,
    priority: m.canonical.priority,
    mustHaveQuestion: m.canonical.mustHaveQuestion,
    matchType: m.matchType,
    score: Number(m.score.toFixed(3)),
    appFactId: m.appFact?.id || null,
    appTopic: m.appFact?.topic || null,
    appFact: m.appFact?.fact || null,
    questionIds: m.appFact ? (questionCoverage.get(m.appFact.id) || []).map((q) => q.id) : [],
    problems: m.problems
  }));

  fs.writeFileSync(MISSING_JSON, JSON.stringify(missingFromApp, null, 2));
  fs.writeFileSync(APP_ONLY_JSON, JSON.stringify(appOnlyFacts, null, 2));
  fs.writeFileSync(CONSOLIDATED_JSON, JSON.stringify(consolidated, null, 2));

  const lines: string[] = [];
  lines.push("# DriveReady PDF Fact Consolidation Report", "", `Generated: ${new Date().toISOString()}`, "", "## Summary", "");
  lines.push(`- Canonical PDF facts: ${canonicalFacts.length}`);
  lines.push(`- App HANDBOOK_FACTS: ${HANDBOOK_FACTS.length}`);
  lines.push(`- Practice questions parsed: ${questions.length}`);
  lines.push(`- Explicit appFactId matches: ${explicitMatches.length}`);
  lines.push(`- Fuzzy matches needing review: ${fuzzyMatches.length}`);
  lines.push(`- Missing from app facts: ${missingFromApp.length}`);
  lines.push(`- Matched facts without questions: ${uncoveredMatchedFacts.length}`);
  lines.push(`- App-only facts needing review: ${appOnlyFacts.length}`);
  lines.push(`- Canonical validation problems: ${canonicalProblems.length}`);
  lines.push(`- Match metadata problems: ${problematicMatches.length}`);
  lines.push("");

  if (canonicalProblems.length > 0) {
    lines.push("## Canonical PDF Fact Problems", "");
    for (const problem of canonicalProblems) lines.push(`- ${problem}`);
    lines.push("");
  }

  if (missingFromApp.length > 0) {
    lines.push("## Missing PDF Facts Not Found In App", "");
    for (const item of missingFromApp) {
      lines.push(`- **${item.canonical.pdfFactId}**`);
      lines.push(`  - Section: ${item.canonical.section}`);
      lines.push(`  - Page: ${item.canonical.page}`);
      lines.push(`  - Topic: ${item.canonical.topic}`);
      lines.push(`  - Fact: ${item.canonical.fact}`);
      lines.push(`  - Priority: ${item.canonical.priority}`);
      lines.push(`  - Best score: ${item.score.toFixed(3)}`);
    }
    lines.push("");
  }

  if (uncoveredMatchedFacts.length > 0) {
    lines.push("## Matched Facts Without Practice Questions", "");
    for (const item of uncoveredMatchedFacts) {
      lines.push(`- **${item.appFact?.id}** / ${item.canonical.pdfFactId}`);
      lines.push(`  - Topic: ${item.canonical.topic}`);
      lines.push(`  - Fact: ${item.canonical.fact}`);
      lines.push(`  - Must have question: ${item.canonical.mustHaveQuestion}`);
    }
    lines.push("");
  }

  if (fuzzyMatches.length > 0) {
    lines.push("## Fuzzy Matches To Manually Review", "");
    for (const item of fuzzyMatches) {
      lines.push(`- **${item.canonical.pdfFactId}** → **${item.appFact?.id}** (${item.score.toFixed(3)})`);
      lines.push(`  - PDF: ${item.canonical.fact}`);
      lines.push(`  - App: ${item.appFact?.fact}`);
    }
    lines.push("");
  }

  if (problematicMatches.length > 0) {
    lines.push("## Matches With Section/Page Problems", "");
    for (const item of problematicMatches) {
      lines.push(`- **${item.canonical.pdfFactId}** → **${item.appFact?.id || "missing"}**`);
      for (const problem of item.problems) lines.push(`  - ${problem}`);
    }
    lines.push("");
  }

  lines.push("## Output Files", "");
  lines.push(`- ${path.relative(ROOT, MISSING_JSON)}`);
  lines.push(`- ${path.relative(ROOT, APP_ONLY_JSON)}`);
  lines.push(`- ${path.relative(ROOT, CONSOLIDATED_JSON)}`);
  lines.push("");

  fs.writeFileSync(REPORT_MD, lines.join("\n"));
  console.log(lines.join("\n"));

  let shouldFail = false;
  if (canonicalProblems.length > 0) shouldFail = true;
  if (highPriorityMissing.length > 0) shouldFail = true;
  if (mustQuestionUncovered.length > 0) shouldFail = true;

  if (STRICT && (missingFromApp.length > 0 || uncoveredMatchedFacts.length > 0 || problematicMatches.length > 0)) {
    shouldFail = true;
  }

  if (shouldFail) {
    console.error("\n❌ PDF fact consolidation failed. Review the generated reports.");
    process.exit(1);
  }

  console.log("\n✅ PDF fact consolidation completed.");
}

main();

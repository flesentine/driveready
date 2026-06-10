/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, UserStats } from '../types';

export interface SavedMistake {
  questionId: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  userWrongOptionIndex: number;
  explanation: string;
  timestamp: number;
  missedCount: number;
  improved?: boolean;
  category?: string;
  imageUrl?: string;
  sourceSection?: string;
  sourcePage?: number;
  sourceTopic?: string;
  coverageTopicId?: string;
  coverageFactIds?: string[];
}

const LOCAL_STORAGE_MISTAKES_KEY = 'driveready_mistake_review';

/**
 * Get all saved mistakes from localStorage.
 */
export function getMistakes(): SavedMistake[] {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_MISTAKES_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading mistakes from localStorage:', error);
    return [];
  }
}

/**
 * Save mistakes to localStorage.
 */
function saveMistakes(mistakes: SavedMistake[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_MISTAKES_KEY, JSON.stringify(mistakes));
  } catch (error) {
    console.error('Error saving mistakes to localStorage:', error);
  }
}

/**
 * Record a mistake (or increment count / update timestamp if duplicate).
 */
export function recordMistake(question: Question, selectedAnswerIndex: number) {
  const mistakes = getMistakes();
  const existingIdx = mistakes.findIndex(m => m.questionId === question.id);

  if (existingIdx !== -1) {
    // Update existing entry
    mistakes[existingIdx].missedCount += 1;
    mistakes[existingIdx].timestamp = Date.now();
    mistakes[existingIdx].userWrongOptionIndex = selectedAnswerIndex;
    // Reset improved flag if they missed it again
    mistakes[existingIdx].improved = false;

    // Preserve or refresh metadata
    mistakes[existingIdx].category = question.category;
    mistakes[existingIdx].imageUrl = question.imageUrl || '';
    mistakes[existingIdx].sourceSection = question.sourceSection;
    mistakes[existingIdx].sourcePage = question.sourcePage;
    mistakes[existingIdx].sourceTopic = question.sourceTopic;
    mistakes[existingIdx].coverageTopicId = question.coverageTopicId;
    mistakes[existingIdx].coverageFactIds = question.coverageFactIds;
  } else {
    // Add new entry
    mistakes.push({
      questionId: question.id,
      questionText: question.questionText,
      options: question.options,
      correctOptionIndex: question.correctOptionIndex,
      userWrongOptionIndex: selectedAnswerIndex,
      explanation: question.explanation || '',
      timestamp: Date.now(),
      missedCount: 1,
      improved: false,
      category: question.category,
      imageUrl: question.imageUrl || '',
      sourceSection: question.sourceSection,
      sourcePage: question.sourcePage,
      sourceTopic: question.sourceTopic,
      coverageTopicId: question.coverageTopicId,
      coverageFactIds: question.coverageFactIds,
    });
  }

  saveMistakes(mistakes);
}

/**
 * Mark a mistake as improved (meaning answered correctly during review)
 */
export function markMistakeAsImproved(questionId: string) {
  const mistakes = getMistakes();
  const index = mistakes.findIndex(m => m.questionId === questionId);
  if (index !== -1) {
    mistakes[index].improved = true;
    saveMistakes(mistakes);
  }
}

/**
 * Remove a specific mistake completely from the list
 */
export function removeMistake(questionId: string) {
  const mistakes = getMistakes();
  const filtered = mistakes.filter(m => m.questionId !== questionId);
  saveMistakes(filtered);
}

/**
 * Clear all saved mistakes (requires confirmation in the UI)
 */
export function clearMistakes() {
  saveMistakes([]);
}

/**
 * Get questions formatted as Question[] for the Mistake Review session.
 * For free users, returns at most 3.
 */
export function getMistakeReviewQuestions(hasPremium: boolean): Question[] {
  const mistakes = getMistakes().filter(m => !m.improved);
  const questions: Question[] = mistakes.map(m => ({
    id: m.questionId,
    category: m.category || 'Mistake Review',
    questionText: m.questionText,
    imageUrl: m.imageUrl || '',
    options: m.options,
    correctOptionIndex: m.correctOptionIndex,
    explanation: m.explanation,
    sourceSection: m.sourceSection,
    sourcePage: m.sourcePage,
    sourceTopic: m.sourceTopic,
    coverageTopicId: m.coverageTopicId,
    coverageFactIds: m.coverageFactIds || [],
  }));

  if (!hasPremium) {
    return questions.slice(0, 3);
  }
  return questions;
}

/**
 * Build a short focused Cram Mode quiz session of 10-15 questions.
 * Focus hierarchy:
 * 1. Active saved mistakes first (not improved)
 * 2. Questions from the user's weakest category (if weaknesses found)
 * 3. Rest of existing practice pool as fallback
 */
export function getCramModeQuestions(stats: UserStats, allQuestions: Question[]): Question[] {
  const selectedQuestions: Question[] = [];
  const selectedIds = new Set<string>();

  // 1. Active saved mistakes first
  const activeMistakes = getMistakes().filter(m => !m.improved);
  for (const m of activeMistakes) {
    if (selectedQuestions.length >= 15) break;
    if (!selectedIds.has(m.questionId)) {
      selectedQuestions.push({
        id: m.questionId,
        category: m.category || 'Mistake Review',
        questionText: m.questionText,
        imageUrl: m.imageUrl || '',
        options: m.options,
        correctOptionIndex: m.correctOptionIndex,
        explanation: m.explanation,
        sourceSection: m.sourceSection,
        sourcePage: m.sourcePage,
        sourceTopic: m.sourceTopic,
        coverageTopicId: m.coverageTopicId,
        coverageFactIds: m.coverageFactIds || [],
      });
      selectedIds.add(m.questionId);
    }
  }

  // If we already have 15 questions from mistakes, just return them
  if (selectedQuestions.length >= 15) {
    return selectedQuestions;
  }

  // 2. Weakest category find
  const scores = stats.categoryScores || { rulesOfRoad: 0, signsSignals: 0, safeDriving: 0 };
  let weakestKey: 'rulesOfRoad' | 'signsSignals' | 'safeDriving' = 'rulesOfRoad';
  let minScore = scores.rulesOfRoad || 0;

  if ((scores.signsSignals || 0) < minScore) {
    minScore = scores.signsSignals || 0;
    weakestKey = 'signsSignals';
  }
  if ((scores.safeDriving || 0) < minScore) {
    minScore = scores.safeDriving || 0;
    weakestKey = 'safeDriving';
  }

  // Helper matching scoring.ts' mapQuestionCategoryToScoreKey
  const mapCategory = (qCat: string) => {
    const cat = (qCat || '').toLowerCase().trim();
    if (
      cat.includes('sign') || 
      cat.includes('signal') || 
      cat === 'regulatory' || 
      cat === 'warning' || 
      cat === 'information'
    ) {
      return 'signsSignals';
    }
    if (
      cat.includes('safe') || 
      cat.includes('alcohol') || 
      cat.includes('drug')
    ) {
      return 'safeDriving';
    }
    return 'rulesOfRoad';
  };

  const weakestQuestions = allQuestions.filter(q => mapCategory(q.category) === weakestKey);
  
  // Shuffling weakest questions before picking to introduce variety
  const shuffledWeakest = [...weakestQuestions].sort(() => 0.5 - Math.random());

  for (const q of shuffledWeakest) {
    if (selectedQuestions.length >= 15) break;
    if (!selectedIds.has(q.id)) {
      selectedQuestions.push(q);
      selectedIds.add(q.id);
    }
  }

  // 3. Fallback to existing practice pool questions if still below 15 (e.g. 10 to 15 is our goal segment)
  const shuffledAll = [...allQuestions].sort(() => 0.5 - Math.random());
  for (const q of shuffledAll) {
    if (selectedQuestions.length >= 15) break;
    if (!selectedIds.has(q.id)) {
      selectedQuestions.push(q);
      selectedIds.add(q.id);
    }
  }

  return selectedQuestions;
}


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

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
}

const LOCAL_STORAGE_MISTAKES_KEY = 'driveready_mistake_review';
const LOCAL_STORAGE_PREMIUM_KEY = 'driveready_premium_access';

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
    category: 'Mistake Review',
    questionText: m.questionText,
    imageUrl: '', // We don't save imageUrl but can default to empty
    options: m.options,
    correctOptionIndex: m.correctOptionIndex,
    explanation: m.explanation,
    coverageFactIds: [],
  }));

  if (!hasPremium) {
    return questions.slice(0, 3);
  }
  return questions;
}

/**
 * Check if premium review has been unlocked (either via a mock flag or purchases).
 */
export function isMistakeReviewUnlocked(): boolean {
  try {
    const value = localStorage.getItem(LOCAL_STORAGE_PREMIUM_KEY);
    return value === 'true';
  } catch {
    return false;
  }
}

/**
 * Set the premium unlock state.
 */
export function setPremiumUnlocked(unlocked: boolean) {
  try {
    localStorage.setItem(LOCAL_STORAGE_PREMIUM_KEY, String(unlocked));
  } catch (error) {
    console.error('Error setting premium unlock state:', error);
  }
}

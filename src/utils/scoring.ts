/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserStats } from '../types';

/**
 * Calculates the Permit Exam Readiness Score based on the following strict formula:
 * - 55% Recent Quiz Performance: Average accuracy of last 3-5 quiz attempts (if history exists).
 *   Falls back to cumulative accuracy if no attempts are recorded yet.
 * - 20% Cumulative Accuracy: Overall historical average accuracy.
 * - 15% Average Category Mastery: Mean of the three tracked subcategory scores.
 * - 10% Test Coverage: Scaled experience based on tests taken (max 10 tests).
 * - Deficient Category Penalty: If any single category score is below 50%, a 10-point penalty is subtracted.
 * 
 * Note: Streak is entirely excluded from the readiness score to avoid inflation, serving purely as a motivation statistic.
 */
export function calculateNewReadinessScore(stats: UserStats): number {
  if (!stats.totalTestsTaken || stats.totalTestsTaken === 0) {
    return 0;
  }

  // 1. Recent Quiz Performance (55%)
  let recentQuizComponent = stats.accuracyPercent || 0;
  const attempts = stats.quizAttempts || [];
  if (attempts.length > 0) {
    const lastAttempts = attempts.slice(-5);
    const sumAccuracy = lastAttempts.reduce((sum, att) => sum + (att.accuracy ?? 0), 0);
    recentQuizComponent = sumAccuracy / lastAttempts.length;
  }

  // 2. Cumulative Accuracy (20%)
  const cumulativeAccuracy = stats.accuracyPercent || 0;

  // 3. Average Category Mastery (15%)
  const catScores = stats.categoryScores || { rulesOfRoad: 0, signsSignals: 0, safeDriving: 0 };
  const avgCategoryMastery = (
    (catScores.rulesOfRoad || 0) + 
    (catScores.signsSignals || 0) + 
    (catScores.safeDriving || 0)
  ) / 3;

  // 4. Test Coverage (10%)
  // Maxes out at 10 practice tests for experience multiplier (each test = 10% weight of coverage component)
  const testCoverageRatio = Math.min(stats.totalTestsTaken / 10, 1.0);
  const testCoverageComponent = testCoverageRatio * 100;

  // Base Weighted Calculation
  const baseScore = 
    (0.55 * recentQuizComponent) + 
    (0.20 * cumulativeAccuracy) + 
    (0.15 * avgCategoryMastery) + 
    (0.10 * testCoverageComponent);

  let finalScore = Math.round(baseScore);

  // 5. Apply Deficient Category Penalty
  // Subtract 10 points if any category score is below 50%
  const isAnyCategoryDeficient = 
    (catScores.rulesOfRoad || 0) < 50 || 
    (catScores.signsSignals || 0) < 50 || 
    (catScores.safeDriving || 0) < 50;

  if (isAnyCategoryDeficient) {
    finalScore = Math.max(0, finalScore - 10);
  }

  return Math.min(Math.max(finalScore, 0), 100);
}

/**
 * Gets the localized text label for a given readiness score.
 * - 0–39: In Training
 * - 40–69: Building Skills
 * - 70–84: Almost Ready
 * - 85–100: Exam Ready
 */
export function getReadinessLabel(score: number): string {
  if (score >= 85) return 'Exam Ready';
  if (score >= 70) return 'Almost Ready';
  if (score >= 40) return 'Building Skills';
  return 'In Training';
}

/**
 * Maps any DMV and handbook question category to the three core scoring keys.
 */
export function mapQuestionCategoryToScoreKey(qCategory: string): 'rulesOfRoad' | 'signsSignals' | 'safeDriving' {
  const cat = (qCategory || '').toLowerCase().trim();
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
}

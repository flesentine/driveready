/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabType = 'home' | 'tests' | 'stats' | 'library' | 'flashcards' | 'profile';

export type SignCategory = 'All' | 'Regulatory' | 'Warning' | 'Information' | 'Speed';

export type SignStatusType = 'Mandatory' | 'Priority' | 'Prohibitory' | 'Limit' | 'Warning';

export interface RoadSign {
  id: string;
  title: string;
  category: Exclude<SignCategory, 'All'>;
  description: string;
  imageUrl: string;
  status: string;
  statusType: SignStatusType;
}

export interface Question {
  id: string;
  category: string;
  questionText: string;
  imageUrl: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  testGroup?: number;
}

export interface UserStats {
  readinessScore: number;
  questionsAnsweredToday: number;
  dailyGoal: number;
  streakDays: number;
  practiceTimeMin: number;
  accuracyPercent: number;
  rankText: string;
  testDaysLeft?: number;
  totalTestsTaken: number;
  masteredSignsCount: number;
  userName?: string;
  hasActualActivity?: boolean;
  lastActiveDate?: string;
  categoryScores: {
    rulesOfRoad: number;
    signsSignals: number;
    safeDriving: number;
  };
}

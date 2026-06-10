/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabType = 'home' | 'tests' | 'stats' | 'library' | 'flashcards' | 'profile' | 'mistakes';

export type SignCategory = 'All' | 'Regulatory' | 'Warning' | 'Information' | 'Speed';

export type SignStatusType = 'Mandatory' | 'Priority' | 'Prohibitory' | 'Limit' | 'Warning' | 'Information';

export interface RoadSign {
  id: string;
  title: string;
  category: Exclude<SignCategory, 'All'>;
  description: string;
  imageUrl: string;
  status: string;
  statusType: SignStatusType;
  sourceSection?: string;
  sourcePage?: number;
  sourceTopic?: string;
  coverageTopicId?: string;
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
  sourceSection?: string;
  sourcePage?: number;
  sourceTopic?: string;
  coverageTopicId?: string;
  coverageFactIds: string[];
}

export interface QuizAttempt {
  correct: number;
  total: number;
  accuracy: number;
  timestamp: number;
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
  selectedAvatar?: string;
  hasActualActivity?: boolean;
  lastActiveDate?: string;
  quizAttempts?: QuizAttempt[];
  categoryScores: {
    rulesOfRoad: number;
    signsSignals: number;
    safeDriving: number;
  };
}

export interface LevelInfo {
  level: number;
  levelName: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  nextLevelCriteria?: string;
  xpText?: string;
}

export function getUserLevelInfo(stats: UserStats): LevelInfo {
  const readiness = stats.readinessScore || 0;
  const tests = stats.totalTestsTaken || 0;
  const signs = stats.masteredSignsCount || 0;
  const hasActivity = !!stats.hasActualActivity;

  if (tests >= 10 && readiness >= 90 && signs >= 10) {
    return {
      level: 5,
      levelName: "Master of the Road",
      badgeBg: "bg-emerald-100 border border-emerald-300",
      badgeText: "text-emerald-800",
      description: "You have shown top-tier mastery. You are fully prepared to pass the genuine permit exam!",
      xpText: "Max Level Reached"
    };
  } else if (tests >= 7 && readiness >= 75 && signs >= 5) {
    return {
      level: 4,
      levelName: "Asphalt Expert",
      badgeBg: "bg-indigo-100 border border-indigo-300",
      badgeText: "text-indigo-800",
      description: "Highly prepared with extensive test mileage and road sign expertise.",
      nextLevelCriteria: "Take 10+ total tests, reach 90%+ readiness, & master 10+ road signs."
    };
  } else if (tests >= 3 && readiness >= 50) {
    return {
      level: 3,
      levelName: "Safe Navigator",
      badgeBg: "bg-amber-100 border border-amber-300",
      badgeText: "text-amber-800",
      description: "Consistent progress. You're building solid memory retention and road rule confidence.",
      nextLevelCriteria: "Take 7+ total tests, reach 75%+ readiness, & master 5+ road signs."
    };
  } else if (hasActivity || tests >= 1 || readiness >= 20 || signs >= 1) {
    return {
      level: 2,
      levelName: "Road Apprentice",
      badgeBg: "bg-blue-100 border border-blue-200",
      badgeText: "text-blue-800",
      description: "First miles registered! Keep taking tests and reviewing sign libraries.",
      nextLevelCriteria: "Take 3+ total tests & reach 50%+ exam readiness score."
    };
  } else {
    return {
      level: 1,
      levelName: "Permit Seeker",
      badgeBg: "bg-slate-100 border border-slate-200",
      badgeText: "text-slate-700",
      description: "Your safe driving journey begins. Complete a practice quiz or flashcard set to rank up!",
      nextLevelCriteria: "Complete your first diagnostic or practice test."
    };
  }
}

export interface HandbookFact {
  id: string;
  section: string;
  page: number;
  topic: string;
  fact: string;
  priority: 'high' | 'medium' | 'low';
  contentType: 'rule' | 'number' | 'exception' | 'definition' | 'sign' | 'penalty' | 'procedure';
  mustHaveQuestion: boolean;
}


